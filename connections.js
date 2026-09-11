// connections.js
// NYT-style 16-tile Connections game

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require('discord.js');

// ─────────────────────────────────────────────
// CONNECTIONS PUZZLES
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

// ─────────────────────────────────────────────
// PICK RANDOM PUZZLE
// ─────────────────────────────────────────────

function getRandomPuzzle() {
    return connectionsPuzzles[
        Math.floor(Math.random() * connectionsPuzzles.length)
    ];
}

// ─────────────────────────────────────────────
// SHUFFLE ARRAY
// ─────────────────────────────────────────────

function shuffle(arr) {
    return arr
        .map(value => ({
            value,
            sort: Math.random()
        }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

// ─────────────────────────────────────────────
// GAME STATE
//
// messageId → {
//     puzzle,
//     tiles,
//     solvedGroups,
//     selected
// }
// ─────────────────────────────────────────────

const boards = new Map();

// ─────────────────────────────────────────────
// CREATE BOARD BUTTONS
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

            if (isSolved) {
                style = ButtonStyle.Success;
            } else if (isSelected) {
                style = ButtonStyle.Primary;
            }

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
// CREATE NEW BOARD
// ─────────────────────────────────────────────

function createBoard(puzzle) {
    const allTiles = shuffle([
        ...puzzle.groups.Fruit,
        ...puzzle.groups.Tools,
        ...puzzle.groups.Animals,
        ...puzzle.groups.Colours
    ]);

    return {
        puzzle,
        tiles: allTiles,
        solvedGroups: [],
        selected: []
    };
}

// ─────────────────────────────────────────────
// START DAILY CONNECTIONS
// ─────────────────────────────────────────────

async function startDaily(interaction) {
    const puzzle = getRandomPuzzle();
    const board = createBoard(puzzle);

    try {
        await interaction.reply({
            content:
                "🔗 **Daily Connections**\n\n" +
                "Select **4 tiles** that belong to the same group.\n" +
                "Correct groups will lock in.\n" +
                "Solve all 4 groups!",
            components: renderBoard(
                board.tiles,
                board.solvedGroups,
                board.selected
            )
        });

        // Get the actual Discord message after replying.
        // This is important because we need the real message ID
        // to remember which puzzle belongs to which board.
        const message = await interaction.fetchReply();

        boards.set(message.id, board);

        console.log(`Connections board created: ${message.id}`);
    } catch (error) {
        console.error("Error starting Daily Connections:", error);

        // If Discord has already received the reply, we cannot
        // send another normal reply. Just log the error.
        if (!interaction.replied && !interaction.deferred) {
            await interaction.reply({
                content: "❌ Sorry, I couldn't start Connections.",
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
            content:
                "🔗 **Continuous Connections**\n\n" +
                "Select **4 tiles** that belong to the same group.\n" +
                "Correct groups will lock in.\n" +
                "Solve all 4 groups!",
            components: renderBoard(
                board.tiles,
                board.solvedGroups,
                board.selected
            )
        });

        // Get the actual Discord message.
        const message = await interaction.fetchReply();

        boards.set(message.id, board);

        console.log(`Continuous Connections board created: ${message.id}`);
    } catch (error) {
        console.error("Error starting Continuous Connections:", error);

        if (!interaction.replied && !interaction.deferred) {
            await interaction.reply({
                content: "❌ Sorry, I couldn't start Connections.",
                ephemeral: true
            });
        }
    }
}

// ─────────────────────────────────────────────
// HANDLE CONNECTIONS BUTTONS
// ─────────────────────────────────────────────

async function handleInteraction(interaction) {
    // Ignore anything that isn't a button.
    if (!interaction.isButton()) return;

    // Ignore buttons belonging to other games.
    if (!interaction.customId.startsWith("conn_tile_")) return;

    const tile = interaction.customId.replace("conn_tile_", "");
    const messageId = interaction.message.id;

    const state = boards.get(messageId);

    // If we somehow don't have the board anymore, make sure
    // Discord still gets an answer instead of timing out.
    if (!state) {
        console.error(
            `Connections board not found for message ${messageId}`
        );

        if (!interaction.replied && !interaction.deferred) {
            await interaction.reply({
                content:
                    "⚠️ Sorry, I lost this Connections puzzle. " +
                    "Please start a new one.",
                ephemeral: true
            });
        }

        return;
    }

    const {
        puzzle,
        tiles,
        solvedGroups
    } = state;

    // ─────────────────────────────────────────
    // TOGGLE TILE SELECTION
    // ─────────────────────────────────────────

    if (state.selected.includes(tile)) {
        state.selected = state.selected.filter(
            selectedTile => selectedTile !== tile
        );
    } else {
        if (state.selected.length < 4) {
            state.selected = [
                ...state.selected,
                tile
            ];
        }
    }

    // ─────────────────────────────────────────
    // FOUR TILES SELECTED
    // ─────────────────────────────────────────

    if (state.selected.length === 4) {
        const selectedTiles = state.selected;

        const groups = puzzle.groups;

        const correctGroup = Object.values(groups).find(group =>
            selectedTiles.every(tile => group.includes(tile))
        );

        // ─────────────────────────────────────
        // CORRECT GROUP
        // ─────────────────────────────────────

        if (correctGroup) {
            state.solvedGroups.push(...selectedTiles);
            state.selected = [];

            const totalSolved = state.solvedGroups.length;

            // ─────────────────────────────────
            // PUZZLE COMPLETE
            // ─────────────────────────────────

            if (totalSolved === 16) {
                await interaction.update({
                    content:
                        "🎉 **All groups solved!**\n\n" +
                        "Great job! 🏆",
                    components: renderBoard(
                        tiles,
                        state.solvedGroups,
                        []
                    )
                });

                console.log(
                    `Connections puzzle completed: ${messageId}`
                );

                return;
            }

            // ─────────────────────────────────
            // CORRECT GROUP BUT NOT FINISHED
            // ─────────────────────────────────

            await interaction.update({
                content:
                    "✅ **Correct group!**\n\n" +
                    "Those tiles are now locked in.",
                components: renderBoard(
                    tiles,
                    state.solvedGroups,
                    []
                )
            });

            return;
        }

        // ─────────────────────────────────────
        // WRONG GROUP
        // ─────────────────────────────────────

        state.selected = [];

        await interaction.update({
            content:
                "❌ **Not a valid group. Try again!**",
            components: renderBoard(
                tiles,
                state.solvedGroups,
                []
            )
        });

        return;
    }

    // ─────────────────────────────────────────
    // NORMAL BOARD UPDATE
    // ─────────────────────────────────────────

    await interaction.update({
        content:
            "🔗 **Connections**\n\n" +
            "Select **4 tiles** that belong to the same group.",
        components: renderBoard(
            tiles,
            state.solvedGroups,
            state.selected
        )
    });
}

// ─────────────────────────────────────────────
// EXPORT FUNCTIONS
// ─────────────────────────────────────────────

module.exports = {
    startDaily,
    startContinuous,
    handleInteraction
};

