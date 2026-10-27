// connections.js
// PuzzlePilot Connections
// Main controller for Daily and Continuous Connections
//
// Game rules: connections_game.js
// Screens and buttons: connections_display.js
// Daily results and leaderboard: connections_database.js
// Puzzle bank: connections_pack1.js (loaded by connections_game.js)
//
// Daily Connections:
// - Same puzzle for every player on the same UK day
// - One completed attempt per player, per server, per UK day
// - Both wins and losses are saved to PostgreSQL
// - Winners rank by fewest mistakes, then completion time
// - Only the player who started a board can use its buttons
//
// Continuous Connections can be played repeatedly.

const { MessageFlags } = require('discord.js');

const {
    STARTING_LIVES,
    getRandomPuzzle,
    getDailyPuzzle,
    getUKDateKey,
    shuffle,
    getUnsolvedTiles,
    isOneAway,
    createBoard
} = require('./connections_game.js');

const {
    getModeName,
    getTileEmoji,
    buildShareText,
    buildGameComponents,
    buildWinComponents,
    buildGameOverComponents
} = require('./connections_display.js');

const {
    hasCompletedDailyConnections,
    saveDailyConnectionsResult,
    getDailyConnectionsLeaderboard,
    getDailyConnectionsSummary
} = require('./connections_database.js');

// ─────────────────────────────────────────────
// ACTIVE BOARDS
// ─────────────────────────────────────────────

// Message ID -> board. Like the old controller, unfinished
// boards exist in memory until PuzzlePilot restarts.
const boards = new Map();

// One unfinished Daily board per player/server/date.
const activeDailyBoards = new Map();

// Stops two simultaneous start requests creating two boards.
const startingDaily = new Set();

function getServerId(interaction) {
    return interaction.guildId || `DM_${interaction.user.id}`;
}

function makeDailyKey(serverId, userId, dateKey) {
    return `${serverId}_${userId}_${dateKey}`;
}

function makeNotice(message) {
    return { content: message };
}

async function privateReply(interaction, content) {
    await interaction.reply({
        content,
        flags: MessageFlags.Ephemeral
    });
}

// ─────────────────────────────────────────────
// DAILY LEADERBOARD TEXT
// ─────────────────────────────────────────────

async function buildDailyLeaderboardText(serverId, dateKey) {
    const [leaders, summary] = await Promise.all([
        getDailyConnectionsLeaderboard(serverId, dateKey, 10),
        getDailyConnectionsSummary(serverId, dateKey)
    ]);

    const played = Number(summary.played) || 0;
    const wins = Number(summary.wins) || 0;

    const lines = [
        '**🏆 DAILY CONNECTIONS LEADERBOARD**',
        `Date: ${dateKey} (UK)`,
        `Played: **${played}** • Solved: **${wins}**`,
        ''
    ];

    if (leaders.length === 0) {
        lines.push('No successful solves recorded yet.');
    } else {
        leaders.forEach((entry, index) => {
            const mistakes = Number(entry.mistakes);
            const label = mistakes === 1 ? 'mistake' : 'mistakes';
            lines.push(
                `**${index + 1}.** <@${entry.userId}> — ${mistakes} ${label}`
            );
        });
    }

    return lines.join('\n');
}

async function sendDailyLeaderboard(interaction, state) {
    try {
        const text = await buildDailyLeaderboardText(
            state.serverId,
            state.dateKey
        );

        await interaction.followUp({
            content: text,
            flags: MessageFlags.Ephemeral,
            allowedMentions: { parse: [] }
        });
    } catch (error) {
        console.error('Connections leaderboard failed:', error);
    }
}

// ─────────────────────────────────────────────
// START A GAME
// ─────────────────────────────────────────────

async function startGame(interaction, mode) {
    const daily = mode === 'daily';
    const serverId = getServerId(interaction);
    const userId = interaction.user.id;
    const dateKey = daily ? getUKDateKey() : null;
    const dailyKey = daily
        ? makeDailyKey(serverId, userId, dateKey)
        : null;

    await interaction.deferReply();

    if (daily && startingDaily.has(dailyKey)) {
        await interaction.editReply(makeNotice(
            '⚠️ Your Daily Connections game is already opening.'
        ));
        return;
    }

    if (daily) {
        startingDaily.add(dailyKey);
    }

    try {
        if (daily) {
            const completed = await hasCompletedDailyConnections(
                serverId,
                userId,
                dateKey
            );

            if (completed) {
                await interaction.editReply(makeNotice(
                    "✅ You've already completed today's Daily Connections " +
                    'on this server. Come back after **midnight UK time** ' +
                    'for another puzzle!'
                ));
                return;
            }

            if (activeDailyBoards.has(dailyKey)) {
                await interaction.editReply(makeNotice(
                    "⚠️ You already have today's Daily Connections " +
                    'in progress on this server. Please finish that board.'
                ));
                return;
            }
        }

        const puzzle = daily
            ? getDailyPuzzle()
            : getRandomPuzzle();

        if (!puzzle) {
            throw new Error('Connections puzzle bank is empty.');
        }

        const board = createBoard(puzzle, mode);
        board.userId = userId;
        board.serverId = serverId;
        board.dateKey = dateKey;
        board.dailyKey = dailyKey;
        board.busy = false;

        await interaction.editReply({
            components: buildGameComponents(board),
            flags: MessageFlags.IsComponentsV2
        });

        const message = await interaction.fetchReply();
        boards.set(message.id, board);

        if (daily) {
            activeDailyBoards.set(dailyKey, message.id);
        }

        console.log(`${getModeName(mode)} board created: ${message.id}`);
    } catch (error) {
        console.error(`Error starting ${mode} Connections:`, error);

        try {
            await interaction.editReply(makeNotice(
                '❌ Sorry, PuzzlePilot could not start Connections. ' +
                'Please try again shortly.'
            ));
        } catch (replyError) {
            console.error('Connections start error reply failed:', replyError);
        }
    } finally {
        if (daily) {
            startingDaily.delete(dailyKey);
        }
    }
}

async function startDaily(interaction) {
    return startGame(interaction, 'daily');
}

async function startContinuous(interaction) {
    return startGame(interaction, 'continuous');
}

// ─────────────────────────────────────────────
// UPDATE AN ACTIVE BOARD
// ─────────────────────────────────────────────

async function updateBoard(interaction, state) {
    await interaction.update({
        components: buildGameComponents(state)
    });
}

// ─────────────────────────────────────────────
// TILE CLICK
// ─────────────────────────────────────────────

async function handleTileClick(interaction, state) {
    const tile = interaction.customId.slice('conn_tile_'.length);

    // Reject stale or forged tile buttons.
    if (!getUnsolvedTiles(state).includes(tile)) {
        await interaction.deferUpdate();
        return;
    }

    state.notice = null;

    if (state.selected.includes(tile)) {
        state.selected = state.selected.filter(
            selectedTile => selectedTile !== tile
        );
        await updateBoard(interaction, state);
        return;
    }

    if (state.selected.length >= 4) {
        await privateReply(
            interaction,
            '⚠️ You already have four tiles selected. ' +
            'Submit them or deselect one first.'
        );
        return;
    }

    state.selected.push(tile);
    await updateBoard(interaction, state);
}

async function handleClear(interaction, state) {
    state.selected = [];
    state.notice = null;
    await updateBoard(interaction, state);
}

async function handleShuffle(interaction, state) {
    const unsolvedTiles = shuffle(getUnsolvedTiles(state));
    const solvedTiles = state.tiles.filter(
        tile => !unsolvedTiles.includes(tile)
    );

    state.tiles = [...unsolvedTiles, ...solvedTiles];
    state.selected = [];
    state.notice = null;
    await updateBoard(interaction, state);
}

// ─────────────────────────────────────────────
// FINISH AND SAVE A DAILY GAME
// ─────────────────────────────────────────────

async function finishBoard(interaction, state, messageId, won) {
    state.finished = true;

    // Acknowledge Discord immediately, before doing database work.
    await interaction.deferUpdate();

    let saved = true;

    if (state.mode === 'daily') {
        try {
            saved = await saveDailyConnectionsResult({
                serverId: state.serverId,
                userId: state.userId,
                dateKey: state.dateKey,
                won,
                mistakes: STARTING_LIVES - state.lives
            });
        } catch (error) {
            saved = false;
            console.error('Connections result save failed:', error);
        }

        activeDailyBoards.delete(state.dailyKey);
    }

    await interaction.editReply({
        components: won
            ? buildWinComponents(state)
            : buildGameOverComponents(state)
    });

    console.log(
        `${won ? 'Connections completed' : 'Connections game over'}: ${messageId}`
    );

    if (state.mode === 'daily') {
        if (saved) {
            await sendDailyLeaderboard(interaction, state);
        } else {
            await interaction.followUp({
                content:
                    '⚠️ Your puzzle finished, but PuzzlePilot could not ' +
                    'save the Daily Connections result. Please try ' +
                    'the Daily game again after the database is checked.',
                flags: MessageFlags.Ephemeral
            });
        }
    }
}

// ─────────────────────────────────────────────
// SUBMIT FOUR TILES
// ─────────────────────────────────────────────

async function handleSubmit(interaction, state, messageId) {
    if (state.selected.length !== 4) {
        await privateReply(
            interaction,
            '⚠️ Select exactly four tiles before submitting.'
        );
        return;
    }

    const selectedTiles = [...state.selected];

    state.guessHistory.push(
        selectedTiles.map(tile => getTileEmoji(state.puzzle, tile))
    );

    let correctGroupName = null;

    for (const [groupName, groupTiles]
        of Object.entries(state.puzzle.groups)) {
        if (state.solvedGroups.includes(groupName)) {
            continue;
        }

        if (selectedTiles.every(tile => groupTiles.includes(tile))) {
            correctGroupName = groupName;
            break;
        }
    }

    if (correctGroupName) {
        state.solvedGroups.push(correctGroupName);
        state.selected = [];
        state.notice = null;

        if (state.solvedGroups.length === 4) {
            await finishBoard(interaction, state, messageId, true);
            return;
        }

        await updateBoard(interaction, state);
        return;
    }

    const oneAway = isOneAway(state, selectedTiles);
    state.lives--;
    state.selected = [];

    if (state.lives <= 0) {
        await finishBoard(interaction, state, messageId, false);
        return;
    }

    state.notice = oneAway
        ? {
            title: '🔥 One away!',
            text:
                'Three of those words belong together. ' +
                'One mistake used.'
        }
        : {
            title: '❌ Not quite',
            text:
                'Those four do not make a group. ' +
                'One mistake used.'
        };

    await updateBoard(interaction, state);
}

// ─────────────────────────────────────────────
// CONTINUOUS PLAY AGAIN
// ─────────────────────────────────────────────

async function handlePlayAgain(interaction, state, messageId) {
    if (state.mode !== 'continuous' || !state.finished) {
        await privateReply(
            interaction,
            '⚠️ Play Again is available after finishing ' +
            'a Continuous Connections puzzle.'
        );
        return;
    }

    const puzzle = getRandomPuzzle(state.puzzle);
    const newBoard = createBoard(puzzle, 'continuous');
    newBoard.userId = state.userId;
    newBoard.serverId = state.serverId;
    newBoard.dateKey = null;
    newBoard.dailyKey = null;
    newBoard.busy = true;

    await interaction.update({
        components: buildGameComponents(newBoard)
    });

    boards.set(messageId, newBoard);
    newBoard.busy = false;

    console.log(`Continuous Connections restarted: ${messageId}`);
}

// ─────────────────────────────────────────────
// DAILY SHARE RESULTS
// ─────────────────────────────────────────────

async function handleShareResults(interaction, state) {
    if (
        state.mode !== 'daily' ||
        !state.finished ||
        state.solvedGroups.length !== 4
    ) {
        await privateReply(
            interaction,
            '⚠️ Share Results is available after solving ' +
            'Daily Connections.'
        );
        return;
    }

    const shareText = buildShareText(state);

    await privateReply(
        interaction,
        '**Your spoiler-free result:**\n```text\n' +
        `${shareText}\n` +
        '```\nCopy that and paste it wherever you want to share it.'
    );
}

// ─────────────────────────────────────────────
// MAIN INTERACTION HANDLER
// ─────────────────────────────────────────────

async function handleInteraction(interaction) {
    if (!interaction.isButton()) {
        return;
    }

    const customId = interaction.customId;
    const isConnectionsButton =
        customId.startsWith('conn_tile_') ||
        [
            'conn_clear',
            'conn_shuffle',
            'conn_submit',
            'conn_play_again',
            'conn_share_results'
        ].includes(customId);

    if (!isConnectionsButton) {
        return;
    }

    const messageId = interaction.message.id;
    const state = boards.get(messageId);

    if (!state) {
        await privateReply(
            interaction,
            '⚠️ This Connections board is no longer active. ' +
            'Please start a new game.'
        );
        return;
    }

    if (
        state.userId !== interaction.user.id ||
        state.serverId !== getServerId(interaction)
    ) {
        await privateReply(
            interaction,
            '⚠️ This Connections board belongs to another player.'
        );
        return;
    }

    if (
        state.mode === 'daily' &&
        state.dateKey !== getUKDateKey() &&
        !state.finished
    ) {
        activeDailyBoards.delete(state.dailyKey);
        state.finished = true;
        await privateReply(
            interaction,
            '🌙 The Daily Connections puzzle has changed at ' +
            "midnight UK time. Please start today's new puzzle."
        );
        return;
    }

    if (state.busy) {
        await interaction.deferUpdate();
        return;
    }

    state.busy = true;

    try {
        // Finished boards still allow their dedicated buttons.
        if (customId === 'conn_play_again') {
            await handlePlayAgain(interaction, state, messageId);
            return;
        }

        if (customId === 'conn_share_results') {
            await handleShareResults(interaction, state);
            return;
        }

        if (state.finished) {
            await privateReply(
                interaction,
                '🏁 This Connections puzzle has already finished.'
            );
            return;
        }

        if (customId.startsWith('conn_tile_')) {
            await handleTileClick(interaction, state);
        } else if (customId === 'conn_clear') {
            await handleClear(interaction, state);
        } else if (customId === 'conn_shuffle') {
            await handleShuffle(interaction, state);
        } else if (customId === 'conn_submit') {
            await handleSubmit(interaction, state, messageId);
        }
    } catch (error) {
        console.error('Error handling Connections interaction:', error);

        try {
            if (interaction.deferred || interaction.replied) {
                await interaction.followUp({
                    content: '❌ Something went wrong with this Connections game.',
                    flags: MessageFlags.Ephemeral
                });
            } else {
                await privateReply(
                    interaction,
                    '❌ Something went wrong with this Connections game.'
                );
            }
        } catch (replyError) {
            console.error('Connections error reply failed:', replyError);
        }
    } finally {
        state.busy = false;
    }
}

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    startDaily,
    startContinuous,
    handleInteraction
};
