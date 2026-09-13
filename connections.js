// connections.js
// Connections game engine
// Uses puzzles from connections_pack1.js
//
// Features:
// - Daily puzzle is the same for everyone
// - Daily puzzle changes at midnight UK time
// - 4 mistakes allowed
// - Wrong submitted groups use one mistake
// - Solved groups stay displayed at the top
// - Solved group names AND words are displayed
// - Continuous Connections uses a random puzzle
// - Submit, Deselect All and Shuffle controls
// - "One away" feedback for near misses
// - Play Again button for Continuous mode
// - Continuous Play Again avoids immediately repeating the same puzzle
// - Daily Share Results button with spoiler-free emoji results
// - Group colours stay fixed for a puzzle based on group order
// - Puzzle bank is kept separate from this file

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder
} = require('discord.js');

const connectionsPack1 = require('./connections_pack1.js');

// ─────────────────────────────────────────────
// PUZZLE BANK
// ─────────────────────────────────────────────

const connectionsPuzzles = [
    ...connectionsPack1
];

// ─────────────────────────────────────────────
// SETTINGS
// ─────────────────────────────────────────────

const STARTING_LIVES = 4;

// Group colours are fixed by the order the groups
// appear in each puzzle:
// 1st = yellow
// 2nd = green
// 3rd = blue
// 4th = purple

const GROUP_DISPLAY = [
    { emoji: '🟨', colour: 0xF1C40F },
    { emoji: '🟩', colour: 0x57F287 },
    { emoji: '🟦', colour: 0x3498DB },
    { emoji: '🟪', colour: 0x9B59B6 }
];

// Active game boards
const boards = new Map();

// ─────────────────────────────────────────────
// PUZZLE SELECTION
// ─────────────────────────────────────────────

function getRandomPuzzle(excludePuzzle = null) {

    if (connectionsPuzzles.length <= 1) {
        return connectionsPuzzles[0];
    }

    let choices = connectionsPuzzles;

    if (excludePuzzle) {

        choices = connectionsPuzzles.filter(
            puzzle => puzzle !== excludePuzzle
        );
    }

    if (choices.length === 0) {
        choices = connectionsPuzzles;
    }

    return choices[
        Math.floor(Math.random() * choices.length)
    ];
}

function getUKDate() {

    return new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(new Date());
}

function getDailyPuzzle() {

    const ukDate = getUKDate();

    const numbers =
        ukDate.match(/\d+/g);

    const day =
        Number(numbers[0]);

    const month =
        Number(numbers[1]);

    const year =
        Number(numbers[2]);

    const seed =
        year * 10000 +
        month * 100 +
        day;

    const index =
        seed % connectionsPuzzles.length;

    return connectionsPuzzles[index];
}

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

function shuffle(array) {

    return array
        .map(value => ({
            value,
            sort: Math.random()
        }))
        .sort((a, b) =>
            a.sort - b.sort
        )
        .map(({ value }) =>
            value
        );
}

function getModeTitle(mode) {

    return mode === 'daily'
        ? '🔗 Daily Connections'
        : '🔗 Continuous Connections';
}

function getModeFooter(mode) {

    return mode === 'daily'
        ? 'Daily puzzle • Changes at midnight UK time'
        : 'Continuous mode • Play as many puzzles as you like';
}

function getMistakesDisplay(lives) {

    const remaining =
        '● '.repeat(lives);

    const used =
        '○ '.repeat(
            STARTING_LIVES - lives
        );

    return `${remaining}${used}`.trim();
}

function getPuzzleGroupNames(puzzle) {

    return Object.keys(
        puzzle.groups
    );
}

function getGroupIndex(
    puzzle,
    groupName
) {

    return getPuzzleGroupNames(
        puzzle
    ).indexOf(groupName);
}

function getGroupDisplay(index) {

    return GROUP_DISPLAY[index] || {
        emoji: '⬜',
        colour: 0x99AAB5
    };
}

function getGroupNameForTile(
    puzzle,
    tile
) {

    for (
        const [groupName, groupTiles]
        of Object.entries(puzzle.groups)
    ) {

        if (groupTiles.includes(tile)) {
            return groupName;
        }
    }

    return null;
}

function getTileEmoji(
    puzzle,
    tile
) {

    const groupName =
        getGroupNameForTile(
            puzzle,
            tile
        );

    if (!groupName) {
        return '⬜';
    }

    const groupIndex =
        getGroupIndex(
            puzzle,
            groupName
        );

    return getGroupDisplay(
        groupIndex
    ).emoji;
}

function getUnsolvedTiles(board) {

    return board.tiles.filter(
        tile => {

            return !board.solvedGroups.includes(
                getGroupNameForTile(
                    board.puzzle,
                    tile
                )
            );
        }
    );
}

function isOneAway(
    board,
    selectedTiles
) {

    return Object.entries(
        board.puzzle.groups
    ).some(
        ([groupName, groupTiles]) => {

            if (
                board.solvedGroups.includes(
                    groupName
                )
            ) {
                return false;
            }

            const matches =
                selectedTiles.filter(
                    tile =>
                        groupTiles.includes(tile)
                ).length;

            return matches === 3;
        }
    );
}

function escapeMarkdownText(text) {

    return String(text).replace(
        /([\\_*~`|>])/g,
        '\\$1'
    );
}

function formatGroupName(groupName) {

    return escapeMarkdownText(
        groupName.toUpperCase()
    );
}

function getDailyPuzzleNumber() {

    const ukDate = getUKDate();

    const numbers =
        ukDate.match(/\d+/g);

    const day =
        String(numbers[0])
            .padStart(2, '0');

    const month =
        String(numbers[1])
            .padStart(2, '0');

    const year =
        String(numbers[2]);

    return `${day}/${month}/${year}`;
}

function buildShareText(board) {

    const rows =
        board.guessHistory
            .map(
                guess =>
                    guess.join('')
            )
            .join('\n');

    const mistakesUsed =
        STARTING_LIVES -
        board.lives;

    const mistakeWord =
        mistakesUsed === 1
            ? 'mistake'
            : 'mistakes';

    return (
        `PuzzlePilot Connections — ${getDailyPuzzleNumber()}\n` +
        `${rows}\n` +
        `🎯 ${mistakesUsed} ${mistakeWord}`
    );
}

// ─────────────────────────────────────────────
// CREATE BOARD
// ─────────────────────────────────────────────

function createBoard(
    puzzle,
    mode
) {

    const allTiles = [];

    for (
        const group
        of Object.values(puzzle.groups)
    ) {
        allTiles.push(...group);
    }

    return {

        puzzle,

        mode,

        tiles:
            shuffle(allTiles),

        solvedGroups: [],

        selected: [],

        lives:
            STARTING_LIVES,

        finished:
            false,

        notice:
            null,

        guessHistory:
            []
    };
}

// ─────────────────────────────────────────────
// SOLVED GROUP DISPLAY
// ─────────────────────────────────────────────

function addSolvedGroupsToEmbed(
    embed,
    board
) {

    const sortedSolvedGroups = [
        ...board.solvedGroups
    ].sort(
        (a, b) => {

            return (
                getGroupIndex(
                    board.puzzle,
                    a
                ) -
                getGroupIndex(
                    board.puzzle,
                    b
                )
            );
        }
    );

    sortedSolvedGroups.forEach(
        groupName => {

            const groupIndex =
                getGroupIndex(
                    board.puzzle,
                    groupName
                );

            const display =
                getGroupDisplay(
                    groupIndex
                );

            const words =
                board.puzzle.groups[
                    groupName
                ];

            embed.addFields({

                name:
                    `${display.emoji} ${formatGroupName(groupName)}`,

                value:
                    words
                        .map(
                            escapeMarkdownText
                        )
                        .join(' • ')
            });
        }
    );
}

// ─────────────────────────────────────────────
// EMBED DISPLAY
// ─────────────────────────────────────────────

function buildBoardEmbed(board) {

    const embed =
        new EmbedBuilder()

            .setColor(
                0x5865F2
            )

            .setTitle(
                getModeTitle(
                    board.mode
                )
            )

            .setDescription(
                '**Find four groups of four connected words.**\n' +
                `Mistakes remaining: ${getMistakesDisplay(board.lives)}\n` +
                `Selected: **${board.selected.length}/4**`
            )

            .setFooter({
                text:
                    getModeFooter(
                        board.mode
                    )
            });

    addSolvedGroupsToEmbed(
        embed,
        board
    );

    if (board.notice) {

        embed.addFields({

            name:
                board.notice.title,

            value:
                board.notice.text
        });
    }

    if (
        board.selected.length > 0
    ) {

        embed.addFields({

            name:
                'Selected tiles',

            value:
                board.selected
                    .map(
                        escapeMarkdownText
                    )
                    .join(' • ')
        });
    }

    return embed;
}

function buildWinEmbed(board) {

    const embed =
        new EmbedBuilder()

            .setColor(
                0x57F287
            )

            .setTitle(
                '🎉 Connections Complete!'
            )

            .setDescription(
                '**You found all four groups!**\n' +
                `Mistakes remaining: ${getMistakesDisplay(board.lives)}`
            )

            .setFooter({
                text:
                    getModeFooter(
                        board.mode
                    )
            });

    addSolvedGroupsToEmbed(
        embed,
        board
    );

    return embed;
}

function buildGameOverEmbed(board) {

    const embed =
        new EmbedBuilder()

            .setColor(
                0xED4245
            )

            .setTitle(
                '💀 Connections Over'
            )

            .setDescription(
                '**No mistakes remaining.**\n\n' +
                'The four groups were:'
            )

            .setFooter({
                text:
                    getModeFooter(
                        board.mode
                    )
            });

    getPuzzleGroupNames(
        board.puzzle
    ).forEach(
        groupName => {

            const groupIndex =
                getGroupIndex(
                    board.puzzle,
                    groupName
                );

            const display =
                getGroupDisplay(
                    groupIndex
                );

            const words =
                board.puzzle.groups[
                    groupName
                ];

            embed.addFields({

                name:
                    `${display.emoji} ${formatGroupName(groupName)}`,

                value:
                    words
                        .map(
                            escapeMarkdownText
                        )
                        .join(' • ')
            });
        }
    );

    return embed;
}

// ─────────────────────────────────────────────
// GAME BOARD BUTTONS
// ─────────────────────────────────────────────

function renderBoard(board) {

    const rows = [];

    const unsolvedTiles =
        getUnsolvedTiles(board);

    for (
        let i = 0;
        i < unsolvedTiles.length;
        i += 4
    ) {

        const row =
            new ActionRowBuilder();

        unsolvedTiles
            .slice(
                i,
                i + 4
            )
            .forEach(
                tile => {

                    const isSelected =
                        board.selected.includes(
                            tile
                        );

                    row.addComponents(

                        new ButtonBuilder()

                            .setCustomId(
                                `conn_tile_${tile}`
                            )

                            .setLabel(
                                tile
                            )

                            .setStyle(
                                isSelected
                                    ? ButtonStyle.Primary
                                    : ButtonStyle.Secondary
                            )
                    );
                }
            );

        rows.push(row);
    }

    const controls =
        new ActionRowBuilder()

            .addComponents(

                new ButtonBuilder()

                    .setCustomId(
                        'conn_clear'
                    )

                    .setLabel(
                        'Deselect All'
                    )

                    .setEmoji(
                        '↩️'
                    )

                    .setStyle(
                        ButtonStyle.Secondary
                    )

                    .setDisabled(
                        board.selected.length === 0
                    ),

                new ButtonBuilder()

                    .setCustomId(
                        'conn_shuffle'
                    )

                    .setLabel(
                        'Shuffle'
                    )

                    .setEmoji(
                        '🔀'
                    )

                    .setStyle(
                        ButtonStyle.Secondary
                    ),

                new ButtonBuilder()

                    .setCustomId(
                        'conn_submit'
                    )

                    .setLabel(
                        'Submit'
                    )

                    .setEmoji(
                        '✅'
                    )

                    .setStyle(
                        ButtonStyle.Success
                    )

                    .setDisabled(
                        board.selected.length !== 4
                    )
            );

    rows.push(controls);

    return rows;
}

// ─────────────────────────────────────────────
// FINISHED GAME BUTTONS
// ─────────────────────────────────────────────

function renderFinishedControls(board) {

    const buttons = [];

    if (
        board.mode ===
        'continuous'
    ) {

        buttons.push(

            new ButtonBuilder()

                .setCustomId(
                    'conn_play_again'
                )

                .setLabel(
                    'Play Again'
                )

                .setEmoji(
                    '🔄'
                )

                .setStyle(
                    ButtonStyle.Primary
                )
        );
    }

    if (
        board.mode === 'daily' &&
        board.solvedGroups.length === 4
    ) {

        buttons.push(

            new ButtonBuilder()

                .setCustomId(
                    'conn_share_results'
                )

                .setLabel(
                    'Share Results'
                )

                .setEmoji(
                    '📋'
                )

                .setStyle(
                    ButtonStyle.Primary
                )
        );
    }

    if (
        buttons.length === 0
    ) {
        return [];
    }

    return [

        new ActionRowBuilder()

            .addComponents(
                ...buttons
            )
    ];
}

// ─────────────────────────────────────────────
// START GAME
// ─────────────────────────────────────────────

async function startGame(
    interaction,
    mode
) {

    const puzzle =
        mode === 'daily'
            ? getDailyPuzzle()
            : getRandomPuzzle();

    const board =
        createBoard(
            puzzle,
            mode
        );

    try {

        await interaction.reply({

            embeds: [
                buildBoardEmbed(
                    board
                )
            ],

            components:
                renderBoard(
                    board
                )
        });

        const message =
            await interaction.fetchReply();

        boards.set(
            message.id,
            board
        );

        console.log(
            `${getModeTitle(mode)} board created: ${message.id}`
        );

    } catch (error) {

        console.error(
            `Error starting ${mode} Connections:`,
            error
        );

        if (
            !interaction.replied &&
            !interaction.deferred
        ) {

            await interaction.reply({

                content:
                    '❌ Sorry, I could not start Connections.',

                ephemeral:
                    true
            });
        }
    }
}

async function startDaily(
    interaction
) {

    return startGame(
        interaction,
        'daily'
    );
}

async function startContinuous(
    interaction
) {

    return startGame(
        interaction,
        'continuous'
    );
}

// ─────────────────────────────────────────────
// UPDATE BOARD
// ─────────────────────────────────────────────

async function updateBoard(
    interaction,
    state
) {

    await interaction.update({

        embeds: [
            buildBoardEmbed(
                state
            )
        ],

        components:
            renderBoard(
                state
            )
    });
}

// ─────────────────────────────────────────────
// TILE CLICK
// ─────────────────────────────────────────────

async function handleTileClick(
    interaction,
    state
) {

    const tile =
        interaction.customId.replace(
            'conn_tile_',
            ''
        );

    state.notice = null;

    if (
        state.selected.includes(
            tile
        )
    ) {

        state.selected =
            state.selected.filter(
                selectedTile =>
                    selectedTile !== tile
            );

        await updateBoard(
            interaction,
            state
        );

        return;
    }

    if (
        state.selected.length >= 4
    ) {

        await interaction.reply({

            content:
                '⚠️ You already have 4 tiles selected. ' +
                'Submit them or deselect one first.',

            ephemeral:
                true
        });

        return;
    }

    state.selected.push(
        tile
    );

    await updateBoard(
        interaction,
        state
    );
}

// ─────────────────────────────────────────────
// DESELECT ALL
// ─────────────────────────────────────────────

async function handleClear(
    interaction,
    state
) {

    state.selected = [];

    state.notice = null;

    await updateBoard(
        interaction,
        state
    );
}

// ─────────────────────────────────────────────
// SHUFFLE
// ─────────────────────────────────────────────

async function handleShuffle(
    interaction,
    state
) {

    const unsolvedTiles =
        shuffle(
            getUnsolvedTiles(
                state
            )
        );

    const solvedTiles =
        state.tiles.filter(
            tile =>
                !unsolvedTiles.includes(
                    tile
                )
        );

    state.tiles = [
        ...unsolvedTiles,
        ...solvedTiles
    ];

    state.selected = [];

    state.notice = null;

    await updateBoard(
        interaction,
        state
    );
}

// ─────────────────────────────────────────────
// SUBMIT
// ─────────────────────────────────────────────

async function handleSubmit(
    interaction,
    state,
    messageId
) {

    if (
        state.selected.length !== 4
    ) {

        await interaction.reply({

            content:
                '⚠️ Select exactly 4 tiles before submitting.',

            ephemeral:
                true
        });

        return;
    }

    const selectedTiles = [
        ...state.selected
    ];

    // Save this guess as four colour squares
    // for spoiler-free Daily sharing.

    state.guessHistory.push(

        selectedTiles.map(
            tile =>
                getTileEmoji(
                    state.puzzle,
                    tile
                )
        )
    );

    let correctGroupName =
        null;

    for (
        const [groupName, groupTiles]
        of Object.entries(
            state.puzzle.groups
        )
    ) {

        if (
            state.solvedGroups.includes(
                groupName
            )
        ) {
            continue;
        }

        const allCorrect =
            selectedTiles.every(
                tile =>
                    groupTiles.includes(
                        tile
                    )
            );

        if (allCorrect) {

            correctGroupName =
                groupName;

            break;
        }
    }

    // ─────────────────────────────────────────
    // CORRECT GROUP
    // ─────────────────────────────────────────

    if (correctGroupName) {

        state.solvedGroups.push(
            correctGroupName
        );

        state.selected = [];

        state.notice = null;

        if (
            state.solvedGroups.length === 4
        ) {

            state.finished = true;

            await interaction.update({

                embeds: [
                    buildWinEmbed(
                        state
                    )
                ],

                components:
                    renderFinishedControls(
                        state
                    )
            });

            console.log(
                `Connections puzzle completed: ${messageId}`
            );

            return;
        }

        await updateBoard(
            interaction,
            state
        );

        return;
    }

    // ─────────────────────────────────────────
    // WRONG GROUP
    // ─────────────────────────────────────────

    const oneAway =
        isOneAway(
            state,
            selectedTiles
        );

    state.lives--;

    state.selected = [];

    if (
        state.lives <= 0
    ) {

        state.finished = true;

        await interaction.update({

            embeds: [
                buildGameOverEmbed(
                    state
                )
            ],

            components:
                renderFinishedControls(
                    state
                )
        });

        console.log(
            `Connections game over: ${messageId}`
        );

        return;
    }

    state.notice =
        oneAway

            ? {

                title:
                    '🔥 One away!',

                text:
                    'Three of those words belong together. ' +
                    'One mistake used.'
            }

            : {

                title:
                    '❌ Not quite',

                text:
                    'Those four do not make a group. ' +
                    'One mistake used.'
            };

    await updateBoard(
        interaction,
        state
    );
}

// ─────────────────────────────────────────────
// PLAY AGAIN
// ─────────────────────────────────────────────

async function handlePlayAgain(
    interaction,
    state,
    messageId
) {

    if (
        state.mode !==
        'continuous'
    ) {

        await interaction.reply({

            content:
                '⚠️ Play Again is only available in Continuous Connections.',

            ephemeral:
                true
        });

        return;
    }

    // Exclude the puzzle that was just played.

    const puzzle =
        getRandomPuzzle(
            state.puzzle
        );

    const newBoard =
        createBoard(
            puzzle,
            'continuous'
        );

    boards.set(
        messageId,
        newBoard
    );

    await interaction.update({

        embeds: [
            buildBoardEmbed(
                newBoard
            )
        ],

        components:
            renderBoard(
                newBoard
            )
    });

    console.log(
        `Continuous Connections restarted: ${messageId}`
    );
}

// ─────────────────────────────────────────────
// SHARE RESULTS
// ─────────────────────────────────────────────

async function handleShareResults(
    interaction,
    state
) {

    if (
        state.mode !== 'daily' ||
        state.solvedGroups.length !== 4
    ) {

        await interaction.reply({

            content:
                '⚠️ Share Results is available after completing the Daily Connections puzzle.',

            ephemeral:
                true
        });

        return;
    }

    const shareText =
        buildShareText(
            state
        );

    await interaction.reply({

        content:
            '**Your spoiler-free result:**\n```text\n' +
            `${shareText}\n` +
            '```\nCopy that and paste it wherever you want to share it.',

        ephemeral:
            true
    });
}

// ─────────────────────────────────────────────
// MAIN INTERACTION HANDLER
// ─────────────────────────────────────────────

async function handleInteraction(
    interaction
) {

    if (
        !interaction.isButton()
    ) {
        return;
    }

    const isConnectionsButton =

        interaction.customId.startsWith(
            'conn_tile_'
        ) ||

        interaction.customId ===
            'conn_clear' ||

        interaction.customId ===
            'conn_shuffle' ||

        interaction.customId ===
            'conn_submit' ||

        interaction.customId ===
            'conn_play_again' ||

        interaction.customId ===
            'conn_share_results';

    if (
        !isConnectionsButton
    ) {
        return;
    }

    const messageId =
        interaction.message.id;

    const state =
        boards.get(
            messageId
        );

    // ─────────────────────────────────────────
    // BOARD NOT FOUND
    // ─────────────────────────────────────────

    if (!state) {

        console.error(
            `Connections board not found for message ${messageId}`
        );

        if (
            !interaction.replied &&
            !interaction.deferred
        ) {

            await interaction.reply({

                content:
                    '⚠️ Sorry, I lost this Connections puzzle. ' +
                    'Please start a new one.',

                ephemeral:
                    true
            });
        }

        return;
    }

    try {

        // These buttons still need to work
        // after the game has finished.

        if (
            interaction.customId ===
            'conn_play_again'
        ) {

            await handlePlayAgain(
                interaction,
                state,
                messageId
            );

            return;
        }

        if (
            interaction.customId ===
            'conn_share_results'
        ) {

            await handleShareResults(
                interaction,
                state
            );

            return;
        }

        // All other buttons stop once finished.

        if (
            state.finished
        ) {

            await interaction.reply({

                content:
                    '🏁 This Connections puzzle has already finished.',

                ephemeral:
                    true
            });

            return;
        }

        if (
            interaction.customId.startsWith(
                'conn_tile_'
            )
        ) {

            await handleTileClick(
                interaction,
                state
            );

            return;
        }

        if (
            interaction.customId ===
            'conn_clear'
        ) {

            await handleClear(
                interaction,
                state
            );

            return;
        }

        if (
            interaction.customId ===
            'conn_shuffle'
        ) {

            await handleShuffle(
                interaction,
                state
            );

            return;
        }

        if (
            interaction.customId ===
            'conn_submit'
        ) {

            await handleSubmit(
                interaction,
                state,
                messageId
            );
        }

    } catch (error) {

        console.error(
            'Error handling Connections interaction:',
            error
        );

        if (
            !interaction.replied &&
            !interaction.deferred
        ) {

            await interaction.reply({

                content:
                    '❌ Something went wrong with this Connections game.',

                ephemeral:
                    true
            });
        }
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
