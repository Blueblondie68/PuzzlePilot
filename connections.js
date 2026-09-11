// connections.js
// Connections game engine
// Uses puzzles from connections_pack1.js
//
// Features:
// - Daily puzzle is the same for everyone
// - Daily puzzle changes at midnight UK time
// - 4 lives
// - Wrong groups lose a life
// - Solved groups are shown at the top
// - Solved group names are displayed
// - Continuous Connections uses a random puzzle
// - Puzzle bank is kept separate from this file

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
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

// Active game boards
const boards = new Map();

// ─────────────────────────────────────────────
// PUZZLE SELECTION
// ─────────────────────────────────────────────

// Get a random puzzle for Continuous Connections
function getRandomPuzzle() {
    return connectionsPuzzles[
        Math.floor(Math.random() * connectionsPuzzles.length)
    ];
}

// Get today's date in UK time
function getUKDate() {
    return new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(new Date());
}

// Get the same daily puzzle for everyone
function getDailyPuzzle() {
    const ukDate = getUKDate();

    // Convert the date into a repeatable number
    const numbers = ukDate.match(/\d+/g);

    const day = Number(numbers[0]);
    const month = Number(numbers[1]);
    const year = Number(numbers[2]);

    const seed = year * 10000 + month * 100 + day;

    const index = seed % connectionsPuzzles.length;

    return connectionsPuzzles[index];
}

// ─────────────────────────────────────────────
// SHUFFLE
// ─────────────────────────────────────────────

function shuffle(array) {
    return array
        .map(value => ({
            value,
            sort: Math.random()
        }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

// ─────────────────────────────────────────────
// CREATE BOARD
// ─────────────────────────────────────────────

function createBoard(puzzle) {

    const allTiles = [];

    for (const group of Object.values(puzzle.groups)) {
        allTiles.push(...group);
    }

    return {
        puzzle,
        tiles: shuffle(allTiles),

        solvedGroups: [],

        selected: [],

        lives: STARTING_LIVES,

        finished: false
    };
}

// ─────────────────────────────────────────────
// DISPLAY SOLVED GROUPS
// ─────────────────────────────────────────────

function getSolvedText(board) {

    if (board.solvedGroups.length === 0) {
        return '';
    }

    let text = '\n\n**Solved groups:**\n';

    for (const groupName of board.solvedGroups) {
        text += `🟩 **${groupName}**\n`;
    }

    return text;
}

// ─────────────────────────────────────────────
// DISPLAY BOARD
// ─────────────────────────────────────────────

function renderBoard(board) {

    const rows = [];

    // Only unsolved tiles remain as clickable buttons.
    const unsolvedTiles = board.tiles.filter(tile => {

        return !board.solvedGroups.some(groupName => {

            const group = board.puzzle.groups[groupName];

            return group.includes(tile);
        });

    });

    // Create rows of four tiles.
    for (let i = 0; i < unsolvedTiles.length; i += 4) {

        const row = new ActionRowBuilder();

        unsolvedTiles
            .slice(i, i + 4)
            .forEach(tile => {

                const isSelected =
                    board.selected.includes(tile);

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

// ─────────────────────────────────────────────
// BOARD MESSAGE
// ─────────────────────────────────────────────

function getBoardContent(board, title) {

    let content =
        `${title}\n\n` +
        `❤️ **Lives remaining: ${board.lives}**\n\n` +
        `Select **4 tiles** that belong to the same group.`;

    content += getSolvedText(board);

    if (board.selected.length > 0) {

        content +=
            `\n\n**Selected:** ` +
            board.selected.join(' • ');
    }

    return content;
}

// ─────────────────────────────────────────────
// START DAILY CONNECTIONS
// ─────────────────────────────────────────────

async function startDaily(interaction) {

    const puzzle = getDailyPuzzle();

    const board = createBoard(puzzle);

    try {

        await interaction.reply({
            content: getBoardContent(
                board,
                '🔗 **Daily Connections**'
            ),
            components: renderBoard(board)
        });

        const message = await interaction.fetchReply();

        boards.set(message.id, {
            ...board,
            mode: 'daily'
        });

        console.log(
            `Daily Connections board created: ${message.id}`
        );

    } catch (error) {

        console.error(
            'Error starting Daily Connections:',
            error
        );

        if (
            !interaction.replied &&
            !interaction.deferred
        ) {

            await interaction.reply({
                content:
                    '❌ Sorry, I could not start Connections.',
                ephemeral: true
            });
        }
    }
}

// ─────────────────────────────────────────────
// START CONTINUOUS CONNECTIONS
// ─────────────────────────────────────────────

async function startContinuous(interaction) {

    const puzzle = getRandomPuzzle();

    const board = createBoard(puzzle);

    try {

        await interaction.reply({
            content: getBoardContent(
                board,
                '🔗 **Continuous Connections**'
            ),
            components: renderBoard(board)
        });

        const message = await interaction.fetchReply();

        boards.set(message.id, {
            ...board,
            mode: 'continuous'
        });

        console.log(
            `Continuous Connections board created: ${message.id}`
        );

    } catch (error) {

        console.error(
            'Error starting Continuous Connections:',
            error
        );

        if (
            !interaction.replied &&
            !interaction.deferred
        ) {

            await interaction.reply({
                content:
                    '❌ Sorry, I could not start Connections.',
                ephemeral: true
            });
        }
    }
}

// ─────────────────────────────────────────────
// HANDLE TILE CLICKS
// ─────────────────────────────────────────────

async function handleInteraction(interaction) {

    if (!interaction.isButton()) {
        return;
    }

    if (
        !interaction.customId.startsWith(
            'conn_tile_'
        )
    ) {
        return;
    }

    const tile =
        interaction.customId.replace(
            'conn_tile_',
            ''
        );

    const messageId =
        interaction.message.id;

    const state = boards.get(messageId);

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
                ephemeral: true
            });
        }

        return;
    }

    // ─────────────────────────────────────────
    // GAME ALREADY FINISHED
    // ─────────────────────────────────────────

    if (state.finished) {

        await interaction.reply({
            content:
                '🏁 This Connections puzzle has already finished.',
            ephemeral: true
        });

        return;
    }

    // ─────────────────────────────────────────
    // TOGGLE TILE
    // ─────────────────────────────────────────

    if (state.selected.includes(tile)) {

        state.selected =
            state.selected.filter(
                selectedTile =>
                    selectedTile !== tile
            );

    } else {

        if (state.selected.length < 4) {

            state.selected = [
                ...state.selected,
                tile
            ];

        } else {

            await interaction.reply({
                content:
                    '⚠️ You can only select 4 tiles at once.',
                ephemeral: true
            });

            return;
        }
    }

    // ─────────────────────────────────────────
    // NOT YET FOUR TILES
    // ─────────────────────────────────────────

    if (state.selected.length < 4) {

        await interaction.update({
            content: getBoardContent(
                state,
                state.mode === 'daily'
                    ? '🔗 **Daily Connections**'
                    : '🔗 **Continuous Connections**'
            ),
            components: renderBoard(state)
        });

        return;
    }

    // ─────────────────────────────────────────
    // CHECK FOUR SELECTED TILES
    // ─────────────────────────────────────────

    const selectedTiles = [
        ...state.selected
    ];

    let correctGroupName = null;

    for (const [groupName, groupTiles] of Object.entries(
        state.puzzle.groups
    )) {

        const allCorrect =
            selectedTiles.length === 4 &&
            selectedTiles.every(tile =>
                groupTiles.includes(tile)
            );

        if (allCorrect) {
            correctGroupName = groupName;
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

        const solvedCount =
            state.solvedGroups.length;

        // All four groups solved
        if (solvedCount === 4) {

            state.finished = true;

            await interaction.update({

                content:
                    `🎉 **Connections Complete!** 🎉\n\n` +
                    `🏆 You solved all 4 groups!\n\n` +
                    `❤️ Lives remaining: ${state.lives}\n\n` +
                    `**Solved groups:**\n` +
                    state.solvedGroups
                        .map(group =>
                            `🟩 **${group}**`
                        )
                        .join('\n'),

                components: []
            });

            console.log(
                `Connections puzzle completed: ${messageId}`
            );

            return;
        }

        await interaction.update({

            content: getBoardContent(
                state,
                '🔗 **Connections**'
            ),

            components: renderBoard(state)
        });

        return;
    }

    // ─────────────────────────────────────────
    // WRONG GROUP
    // ─────────────────────────────────────────

    state.lives--;

    state.selected = [];

    // No lives left
    if (state.lives <= 0) {

        state.finished = true;

        await interaction.update({

            content:
                `💀 **Game Over!**\n\n` +
                `You ran out of lives.\n\n` +
                `The groups were:\n` +
                Object.keys(state.puzzle.groups)
                    .map(group =>
                        `🟩 **${group}**`
                    )
                    .join('\n'),

            components: []
        });

        console.log(
            `Connections game over: ${messageId}`
        );

        return;
    }

    // Still have lives
    await interaction.update({

        content:
            `❌ **Not a group!**\n\n` +
            `You lost a life.\n\n` +
            getBoardContent(
                state,
                '🔗 **Connections**'
            ),

        components: renderBoard(state)
    });
}

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    startDaily,
    startContinuous,
    handleInteraction
};
