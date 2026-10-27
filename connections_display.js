// connections_display.js
// PuzzlePilot Connections
// Components V2 screens, compact balanced tiles, buttons and results
//
// Display only: game rules stay in connections_game.js.
// The main connections.js file uses these functions.

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
            '## 🔗 PUZZLEPILOT CONNECTIONS\n' +
            `**${getModeName(board.mode)}**`
        )
    );

    container.addSeparatorComponents(makeSeparator());

    container.addTextDisplayComponents(
        makeText(
            'Find four groups of four connected words.\n' +
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

// Discord sizes native buttons from the text on them. There
// is no exact-width setting, so we use moderate Unicode
// spacing for a tidy 4-column board without the excessive
// padding that caused four buttons to wrap onto five lines.
//
// All words in the puzzle determine the target. Solving a
// group therefore cannot suddenly change the tile widths.
// An exceptionally long word stays fully readable, but it
// does not make every other button extremely wide.
//
// Only the visible label is padded. The actual word and the
// custom ID used by the game remain exactly the same.

const TILE_SPACE = '\u2002'; // En space.
const TILE_EDGE = '\u200B';  // Preserves edge spacing.

function approximateWordWidth(word) {
    const narrow = { I: 0.47, J: 0.67, L: 0.82, F: 0.86,
        T: 0.90, E: 0.96, S: 0.93, R: 1.02, ' ': 0.52 };
    const wide = { M: 1.43, W: 1.48, O: 1.12, Q: 1.13,
        G: 1.13, D: 1.12, C: 1.12, B: 1.08 };

    return [...String(word).toUpperCase()].reduce((total, letter) => {
        return total + (narrow[letter] ?? wide[letter] ?? 1);
    }, 0);
}

function getTileTargetWidth(board) {
    const allWords = Object.values(board.puzzle.groups).flat();
    const longest = Math.max(...allWords.map(approximateWordWidth));

    // Cap at 10 units to keep four buttons comfortably on a
    // row at ordinary desktop widths. Very long words are
    // displayed in full rather than forcing huge padding.
    return Math.min(10, Math.max(8, longest + 0.4));
}

function getBalancedTileLabel(tile, targetWidth) {
    const text = String(tile);
    const missing = Math.max(0, targetWidth - approximateWordWidth(text));

    // A capital letter is considerably narrower than an em.
    // About ONE en space per width unit is the better visual
    // match. Two (the previous version) made the board wrap.
    const extraSpaces = Math.min(
        Math.round(missing),
        Math.max(0, 78 - [...text].length)
    );
    const left = Math.floor(extraSpaces / 2);
    const right = extraSpaces - left;

    return TILE_EDGE + TILE_SPACE.repeat(left) + text +
        TILE_SPACE.repeat(right) + TILE_EDGE;
}

function buildTileRows(board) {
    const rows = [];
    const unsolvedTiles = getUnsolvedTiles(board);
    const targetWidth = getTileTargetWidth(board);

    for (let i = 0; i < unsolvedTiles.length; i += 4) {
        const row = new ActionRowBuilder();

        unsolvedTiles.slice(i, i + 4).forEach(tile => {
            const isSelected = board.selected.includes(tile);

            row.addComponents(
                new ButtonBuilder()
                    .setCustomId(`conn_tile_${tile}`)
                    .setLabel(getBalancedTileLabel(tile, targetWidth))
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
            '## 🎉 Connections complete!\n' +
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
            '## 💀 Connections over\n' +
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
