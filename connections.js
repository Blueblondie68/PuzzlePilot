// connections.js
// NYT-style 16-tile Connections game (minimal text buttons)

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require('discord.js');

// ─────────────────────────────────────────────
// SAMPLE PUZZLES (you can add more later)
// Each puzzle has 4 groups of 4 words
// ─────────────────────────────────────────────
const connectionsPuzzles = [
    {
        id: 'conn1',
        groups: {
            Fruit: ["APPLE", "BANANA", "ORANGE", "GRAPE"],
            Tools: ["HAMMER", "NAIL", "SCREW", "WRENCH"],
            Animals: ["DOG", "CAT", "HORSE", "SHEEP"],
            Colours: ["BLUE", "RED", "GREEN", "YELLOW"]
        }
    }
];

// Pick a random puzzle
function getRandomPuzzle() {
    return connectionsPuzzles[Math.floor(Math.random() * connectionsPuzzles.length)];
}

// Shuffle array
function shuffle(arr) {
    return arr
        .map(v => ({ v, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ v }) => v);
}

// ─────────────────────────────────────────────
// STATE STORAGE
// messageId → { puzzle, tiles, solvedGroups, selected }
// ─────────────────────────────────────────────
const boards = new Map();

// ─────────────────────────────────────────────
// RENDER BOARD
// ─────────────────────────────────────────────
function renderBoard(tiles, solvedGroups, selected) {
    const rows = [];
    const chunkSize = 4;

    for (let i = 0; i < tiles.length; i += chunkSize) {
        const row = new ActionRowBuilder();

        tiles.slice(i, i + chunkSize).forEach(tile => {
            const isSolved = solvedGroups.includes(tile);
            const isSelected = selected.includes(tile);

            let style = ButtonStyle.Secondary;
            if (isSolved) style = ButtonStyle.Success;
            else if (isSelected) style = ButtonStyle.Primary;

            row.addComponents(
                new ButtonBuilder()
                    .setCustomId(`conn_tile_${tile}`)
                    .setLabel(tile)
                    .setStyle(style)
                    .setDisabled(isSolved)
            );
        });

        rows.push(row);
    }

    return rows;
}

// ─────────────────────────────────────────────
// START DAILY CONNECTIONS
// ─────────────────────────────────────────────
async function startDaily(interaction) {
    const puzzle = getRandomPuzzle();

    const allTiles = shuffle([
        ...puzzle.groups.Fruit,
        ...puzzle.groups.Tools,
        ...puzzle.groups.Animals,
        ...puzzle.groups.Colours
    ]);

    const msg = await interaction.reply({
        content:
            "🔗 **Daily Connections**\n" +
            "Select **4 tiles** that belong to the same group.\n" +
            "Correct groups will lock in.\n" +
            "Solve all 4 groups!",
        components: renderBoard(allTiles, [], [])
    });

    boards.set(msg.id, {
        puzzle,
        tiles: allTiles,
        solvedGroups: [],
        selected: []
    });
}

// ─────────────────────────────────────────────
// START CONTINUOUS CONNECTIONS
// ─────────────────────────────────────────────
async function startContinuous(interaction) {
    const puzzle = getRandomPuzzle();

    const allTiles = shuffle([
        ...puzzle.groups.Fruit,
        ...puzzle.groups.Tools,
        ...puzzle.groups.Animals,
        ...puzzle.groups.Colours
    ]);

    const msg = await interaction.reply({
        content:
            "🔗 **Continuous Connections**\n" +
            "Select **4 tiles** that belong to the same group.\n" +
            "Correct groups will lock in.\n" +
            "Solve all 4 groups!",
        components: renderBoard(allTiles, [], [])
    });

    boards.set(msg.id, {
        puzzle,
        tiles: allTiles,
        solvedGroups: [],
        selected: []
    });
}

// ─────────────────────────────────────────────
// HANDLE TILE CLICKS
// ─────────────────────────────────────────────
async function handleInteraction(interaction) {
    if (!interaction.isButton()) return;
    if (!interaction.customId.startsWith("conn_tile_")) return;

    const tile = interaction.customId.replace("conn_tile_", "");
    const msgId = interaction.message.id;

    const state = boards.get(msgId);
    if (!state) return;

    const { puzzle, tiles, solvedGroups, selected } = state;

    // Toggle selection
    if (selected.includes(tile)) {
        state.selected = selected.filter(t => t !== tile);
    } else {
        if (selected.length < 4) {
            state.selected = [...selected, tile];
        }
    }

    // If 4 selected → check group
    if (state.selected.length === 4) {
        const sel = state.selected;

        const groups = puzzle.groups;

        const correctGroup =
            Object.values(groups).find(group =>
                sel.every(t => group.includes(t))
            );

        if (correctGroup) {
            // Lock in solved tiles
            state.solvedGroups.push(...sel);
            state.selected = [];

            // Check if puzzle complete
            const totalSolved = state.solvedGroups.length;
            if (totalSolved === 16) {
                await interaction.update({
                    content:
                        "🎉 **All groups solved!**\n" +
                        "Great job!",
                    components: renderBoard(tiles, state.solvedGroups, [])
                });
                return;
            }

            await interaction.update({
                content:
                    "✅ **Correct group!**\n" +
                    "Those tiles are now locked in.",
                components: renderBoard(tiles, state.solvedGroups, [])
            });
            return;
        } else {
            // Wrong group
            state.selected = [];
            await interaction.update({
                content:
                    "❌ **Not a valid group. Try again!**",
                components: renderBoard(tiles, state.solvedGroups, [])
            });
            return;
        }
    }

    // Update board normally
    await interaction.update({
        content:
            "🔗 **Connections**\n" +
            "Select **4 tiles** that belong to the same group.",
        components: renderBoard(tiles, solvedGroups, state.selected)
    });
}

module.exports = {
    startDaily,
    startContinuous,
    handleInteraction
};
