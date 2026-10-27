// connections_display.js
// PuzzlePilot Connections
// Components V2 screens, tiles, buttons and results
//
// Display only: game rules stay in connections_game.js.
// The main connections.js file will use these functions
// once all parts of the split are ready.

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ContainerBuilder,
    TextDisplayBuilder,
    SeparatorBuilder
} = require('discord.js');

const {
    STARTING_LIVES,
    getDailyPuzzleNumber,
    getPuzzleGroupNames,
    getGroupIndex,
    getGroupNameForTile,
    getUnsolvedTiles,
    getSortedSolvedGroups
} = require('./connections_game.js');

// ─────────────────────────────────────────────
// COLOURS AND TEXT
// ─────────────────────────────────────────────

const GAME_COLOUR = 0x5865F2;

// Group colours follow the order in the puzzle:
// yellow, green, blue, purple.
const GROUP_DISPLAY = [
    { emoji: '🟨', colour: 0xF1C40F },
    { emoji: '🟩', colour: 0x57F287 },
    { emoji: '🟦', colour: 0x3498DB },
    { emoji: '🟪', colour: 0x9B59B6 }
];

function getModeName(mode) {
    return mode === 'daily'
        ? 'DAILY CONNECTIONS'
        : 'CONTINUOUS CONNECTIONS';
}

function getModeFooter(mode) {
    return mode === 'daily'
        ? 'Daily puzzle • Changes at midnight UK time'
        : 'Continuous mode • Play as many puzzles as you like';
}

function getMistakesDisplay(lives) {
    const remaining = '● '.repeat(lives);
    const used = '○ '.repeat(STARTING_LIVES - lives);
    return (remaining + used).trim();
}

function getGroupDisplay(index) {
    return GROUP_DISPLAY[index] || {
        emoji: '⬜',
        colour: 0x99AAB5
    };
}

function getTileEmoji(puzzle, tile) {
    const groupName = getGroupNameForTile(puzzle, tile);

    if (!groupName) {
        return '⬜';
    }

    return getGroupDisplay(
        getGroupIndex(puzzle, groupName)
    ).emoji;
}

function escapeMarkdownText(text) {
    return String(text).replace(
        /([\\_*~`|>])/g,
        '\\$1'
    );
}

function formatGroupName(groupName) {
    return escapeMarkdownText(groupName.toUpperCase());
}

// ─────────────────────────────────────────────
// SHARE RESULTS
// ─────────────────────────────────────────────

function buildShareText(board) {
    const rows = board.guessHistory
        .map(guess => guess.join(''))
        .join('\n');

    const mistakesUsed = STARTING_LIVES - board.lives;
    const mistakeWord = mistakesUsed === 1
        ? 'mistake'
        : 'mistakes';

    return (
        `PuzzlePilot Connections — ${getDailyPuzzleNumber()}\n` +
        `${rows}\n` +
        `🎯 ${mistakesUsed} ${mistakeWord}`
    );
}

// ─────────────────────────────────────────────
// BASIC COMPONENTS
// ─────────────────────────────────────────────

function makeText(content) {
    return new TextDisplayBuilder().setContent(content);
}

function makeSeparator() {
    return new SeparatorBuilder();
}

function addHeader(container, board) {
    container.addTextDisplayComponents(
        makeText(
            '# 🔗 PUZZLEPILOT\n' +
            `## ${getModeName(board.mode)}`
        )
    );

    container.addSeparatorComponents(makeSeparator());

    container.addTextDisplayComponents(
        makeText(
            '**Find four groups of four connected words.**\n\n' +
            `**Mistakes remaining:** ${getMistakesDisplay(board.lives)}`
        )
    );
}

function addSolvedGroups(container, board) {
    const solvedGroups = getSortedSolvedGroups(board);

    if (solvedGroups.length === 0) {
        return;
    }

    container.addSeparatorComponents(makeSeparator());

    solvedGroups.forEach(groupName => {
        const display = getGroupDisplay(
            getGroupIndex(board.puzzle, groupName)
        );

        const words = board.puzzle.groups[groupName];
        const wordLine = words
            .map(escapeMarkdownText)
            .join(' • ');

        container.addTextDisplayComponents(
            makeText(
                `### ${display.emoji} ${formatGroupName(groupName)}\n` +
                `**${wordLine}**`
            )
        );
    });
}

function addNotice(container, board) {
    if (!board.notice) {
        return;
    }

    container.addSeparatorComponents(makeSeparator());

    container.addTextDisplayComponents(
        makeText(
            `### ${board.notice.title}\n` +
            board.notice.text
        )
    );
}

// ─────────────────────────────────────────────
// ACTIVE TILE BUTTONS
// ─────────────────────────────────────────────

function buildTileRows(board) {
    const rows = [];
    const unsolvedTiles = getUnsolvedTiles(board);

    for (let i = 0; i < unsolvedTiles.length; i += 4) {
        const row = new ActionRowBuilder();

        unsolvedTiles.slice(i, i + 4).forEach(tile => {
            const isSelected = board.selected.includes(tile);

            row.addComponents(
                new ButtonBuilder()
                    .setCustomId(`conn_tile_${tile}`)
                    .setLabel(tile)
                    .setStyle(
                        isSelected
                            ? ButtonStyle.Primary
                            : ButtonStyle.Secondary
                    )
            );
        });

        rows.push(row);
    }

    return rows;
}

function buildControlRow(board) {
    return new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setCustomId('conn_clear')
            .setLabel('Deselect')
            .setEmoji('↩️')
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(board.selected.length === 0),

        new ButtonBuilder()
            .setCustomId('conn_shuffle')
            .setLabel('Shuffle')
            .setEmoji('🔀')
            .setStyle(ButtonStyle.Secondary),

        new ButtonBuilder()
            .setCustomId('conn_submit')
            .setLabel('Submit')
            .setEmoji('✅')
            .setStyle(ButtonStyle.Success)
            .setDisabled(board.selected.length !== 4)
    );
}

// ─────────────────────────────────────────────
// ACTIVE GAME SCREEN
// ─────────────────────────────────────────────

function buildGameComponents(board) {
    const container = new ContainerBuilder()
        .setAccentColor(GAME_COLOUR);

    addHeader(container, board);
    addSolvedGroups(container, board);
    addNotice(container, board);

    container.addSeparatorComponents(makeSeparator());

    container.addTextDisplayComponents(
        makeText(`**Selected: ${board.selected.length}/4**`)
    );

    buildTileRows(board).forEach(row => {
        container.addActionRowComponents(row);
    });

    container.addSeparatorComponents(makeSeparator());
    container.addActionRowComponents(buildControlRow(board));

    container.addTextDisplayComponents(
        makeText(`-# ${getModeFooter(board.mode)}`)
    );

    return [container];
}

// ─────────────────────────────────────────────
// FINISHED GAME BUTTONS
// ─────────────────────────────────────────────

function buildFinishedControlRow(board) {
    const buttons = [];

    if (board.mode === 'continuous') {
        buttons.push(
            new ButtonBuilder()
                .setCustomId('conn_play_again')
                .setLabel('Play Again')
                .setEmoji('🔄')
                .setStyle(ButtonStyle.Primary)
        );
    }

    if (
        board.mode === 'daily' &&
        board.solvedGroups.length === 4
    ) {
        buttons.push(
            new ButtonBuilder()
                .setCustomId('conn_share_results')
                .setLabel('Share Results')
                .setEmoji('📋')
                .setStyle(ButtonStyle.Primary)
        );
    }

    if (buttons.length === 0) {
        return null;
    }

    return new ActionRowBuilder().addComponents(...buttons);
}

// ─────────────────────────────────────────────
// WIN SCREEN
// ─────────────────────────────────────────────

function buildWinComponents(board) {
    const container = new ContainerBuilder()
        .setAccentColor(0x57F287);

    container.addTextDisplayComponents(
        makeText(
            '# 🎉 CONNECTIONS COMPLETE!\n' +
            '**You found all four groups!**'
        )
    );

    container.addSeparatorComponents(makeSeparator());

    container.addTextDisplayComponents(
        makeText(
            `**Mistakes remaining:** ${getMistakesDisplay(board.lives)}`
        )
    );

    addSolvedGroups(container, board);

    const controls = buildFinishedControlRow(board);

    if (controls) {
        container.addSeparatorComponents(makeSeparator());
        container.addActionRowComponents(controls);
    }

    container.addTextDisplayComponents(
        makeText(`-# ${getModeFooter(board.mode)}`)
    );

    return [container];
}

// ─────────────────────────────────────────────
// GAME OVER SCREEN
// ─────────────────────────────────────────────

function buildGameOverComponents(board) {
    const container = new ContainerBuilder()
        .setAccentColor(0xED4245);

    container.addTextDisplayComponents(
        makeText(
            '# 💀 CONNECTIONS OVER\n' +
            '**No mistakes remaining.**\n\n' +
            'The four groups were:'
        )
    );

    container.addSeparatorComponents(makeSeparator());

    getPuzzleGroupNames(board.puzzle).forEach(groupName => {
        const display = getGroupDisplay(
            getGroupIndex(board.puzzle, groupName)
        );

        const words = board.puzzle.groups[groupName];
        const wordLine = words
            .map(escapeMarkdownText)
            .join(' • ');

        container.addTextDisplayComponents(
            makeText(
                `### ${display.emoji} ${formatGroupName(groupName)}\n` +
                `**${wordLine}**`
            )
        );
    });

    const controls = buildFinishedControlRow(board);

    if (controls) {
        container.addSeparatorComponents(makeSeparator());
        container.addActionRowComponents(controls);
    }

    container.addTextDisplayComponents(
        makeText(`-# ${getModeFooter(board.mode)}`)
    );

    return [container];
}

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    getModeName,
    getTileEmoji,
    buildShareText,
    buildGameComponents,
    buildWinComponents,
    buildGameOverComponents
};
