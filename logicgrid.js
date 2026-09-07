// logicgrid.js
// Simple logic grid with click-to-cycle cells: blank → ✓ → ✗ → blank.

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle
} = require('discord.js');

// One sample puzzle; you can add more later.
const logicGridPuzzles = [
    {
        id: 'lg1',
        description: "Three friends (Alice, Bob, Carol) each own a different pet: dog, cat, bird. Alice does not own the dog. Bob does not own the bird. Who owns which pet?",
        people: ['Alice', 'Bob', 'Carol'],
        pets: ['Dog', 'Cat', 'Bird'],
        solution: {
            Alice: 'Bird',
            Bob: 'Cat',
            Carol: 'Dog'
        }
    }
];

function getRandomPuzzle() {
    return logicGridPuzzles[Math.floor(Math.random() * logicGridPuzzles.length)];
}

// In-memory state: { messageId: { puzzle, grid } }
const grids = new Map();

// Create blank grid
function createBlankGrid(puzzle) {
    const grid = {};
    for (const person of puzzle.people) {
        grid[person] = {};
        for (const pet of puzzle.pets) {
            grid[person][pet] = 'blank'; // 'blank' | 'yes' | 'no'
        }
    }
    return grid;
}

function cycleCell(state) {
    if (state === 'blank') return 'yes';
    if (state === 'yes') return 'no';
    return 'blank';
}

function renderGridComponents(puzzle, grid) {
    const rows = [];

    // Header row
    const headerRow = new ActionRowBuilder();
    headerRow.addComponents(
        new ButtonBuilder()
            .setCustomId('lg_header_person')
            .setLabel('Person')
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(true)
    );
    for (const pet of puzzle.pets) {
        headerRow.addComponents(
            new ButtonBuilder()
                .setCustomId(`lg_header_${pet}`)
                .setLabel(pet)
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
        );
    }
    rows.push(headerRow);

    // Data rows
    for (const person of puzzle.people) {
        const row = new ActionRowBuilder();
        row.addComponents(
            new ButtonBuilder()
                .setCustomId(`lg_label_${person}`)
                .setLabel(person)
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
        );

        for (const pet of puzzle.pets) {
            const state = grid[person][pet];
            let label = ' ';
            let style = ButtonStyle.Secondary;

            if (state === 'yes') {
                label = '✓';
                style = ButtonStyle.Success;
            } else if (state === 'no') {
                label = '✗';
                style = ButtonStyle.Danger;
            }

            row.addComponents(
                new ButtonBuilder()
                    .setCustomId(`lg_cell_${person}_${pet}`)
                    .setLabel(label)
                    .setStyle(style)
            );
        }

        rows.push(row);
    }

    // Solve button row
    const solveRow = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setCustomId('lg_solve')
            .setLabel('Submit Final Answer')
            .setStyle(ButtonStyle.Primary)
    );

    rows.push(solveRow);
    return rows;
}

// Start daily/continuous puzzle (same for now)
async function startLogicGrid(interaction) {
    const puzzle = getRandomPuzzle();
    const grid = createBlankGrid(puzzle);

    const msg = await interaction.reply({
        content:
            '🧠 **Logic Grid Puzzle**\n\n' +
            puzzle.description +
            '\n\nClick cells to cycle: blank → ✓ → ✗ → blank.\nWhen ready, click **Submit Final Answer**.',
        components: renderGridComponents(puzzle, grid)
    });

    grids.set(msg.id, { puzzle, grid });
}

// Handle buttons + modal
async function handleInteraction(interaction) {
    // Cell click
    if (interaction.isButton() && interaction.customId.startsWith('lg_cell_')) {
        const [, , person, pet] = interaction.customId.split('_');

        const msgId = interaction.message.id;
        const state = grids.get(msgId);
        if (!state) return;

        const { puzzle, grid } = state;
        grid[person][pet] = cycleCell(grid[person][pet]);

        await interaction.update({
            content:
                '🧠 **Logic Grid Puzzle**\n\n' +
                puzzle.description +
                '\n\nClick cells to cycle: blank → ✓ → ✗ → blank.\nWhen ready, click **Submit Final Answer**.',
            components: renderGridComponents(puzzle, grid)
        });

        return;
    }

    // Solve button
    if (interaction.isButton() && interaction.customId === 'lg_solve') {
        const msgId = interaction.message.id;
        const state = grids.get(msgId);
        if (!state) return;

        const { puzzle } = state;

        const modal = new ModalBuilder()
            .setCustomId(`lg_modal_${msgId}`)
            .setTitle('Submit Final Answer')
            .addComponents(
                new ActionRowBuilder().addComponents(
                    new TextInputBuilder()
                        .setCustomId('lg_answer')
                        .setLabel('Who has which pet? (e.g. Alice: Bird, Bob: Cat, Carol: Dog)')
                        .setStyle(TextInputStyle.Paragraph)
                        .setRequired(true)
                )
            );

        await interaction.showModal(modal);
        return;
    }

    // Modal submit
    if (interaction.isModalSubmit() && interaction.customId.startsWith('lg_modal_')) {
        await interaction.deferReply({ ephemeral: true });

        const msgId = interaction.customId.replace('lg_modal_', '');
        const state = grids.get(msgId);
        if (!state) {
            await interaction.editReply('Puzzle state not found.');
            return;
        }

        const { puzzle } = state;
        const answerRaw = interaction.fields.getTextInputValue('lg_answer') || '';

        const correctText =
            `Alice: ${puzzle.solution.Alice}, ` +
            `Bob: ${puzzle.solution.Bob}, ` +
            `Carol: ${puzzle.solution.Carol}`;

        const isCorrect =
            answerRaw.toLowerCase().replace(/\s+/g, '') ===
            correctText.toLowerCase().replace(/\s+/g, '');

        if (isCorrect) {
            await interaction.editReply(
                `✅ Correct!\nSolution: **${correctText}**`
            );
        } else {
            await interaction.editReply(
                `❌ Not quite.\nExpected: **${correctText}**`
            );
        }

        return;
    }
}

module.exports = {
    startLogicGrid,
    handleInteraction
};
