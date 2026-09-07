// crossword.js
// Self-contained crossword system: grid, clues, buttons, modals, updates.

// ─────────────────────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────────────────────

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle
} = require('discord.js');

const BLOCK = '█';

// You can add more sizes later (7, 9, 11, etc.)
const AVAILABLE_SIZES = [5];

// Simple sample clues for now
const SAMPLE_CLUES = {
    5: {
        across: [
            { id: '1A', text: 'A small domesticated feline' },
            { id: '3A', text: 'Opposite of down' },
            { id: '5A', text: 'A type of tree' }
        ],
        down: [
            { id: '1D', text: 'A crustacean' },
            { id: '2D', text: 'A fruit' },
            { id: '4D', text: 'A musical note' }
        ]
    }
};

// State (simple in-memory; per-guild/per-channel can be added later)
let currentGrid = null;
let currentSize = 5;
let crosswordMessageId = null;

// ─────────────────────────────────────────────────────────────
// GRID CREATION (TEMP: simple pattern, not full generator yet)
// ─────────────────────────────────────────────────────────────

function createSampleGrid(size) {
    // For now, a fixed 5x5 layout with some blocks.
    // Later we’ll replace this with a real interlocking generator.
    if (size !== 5) size = 5;

    return [
        [null, null, null, BLOCK, null],
        [null, BLOCK, null, null, null],
        [null, null, null, null, null],
        [BLOCK, null, null, BLOCK, null],
        [null, null, null, null, BLOCK]
    ];
}

// ─────────────────────────────────────────────────────────────
// GRID RENDERING (BOX-DRAWING)
// ─────────────────────────────────────────────────────────────

function renderGrid(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    let out = '┌' + '───┬'.repeat(cols - 1) + '───┐\n';

    for (let r = 0; r < rows; r++) {
        out += '│';
        for (let c = 0; c < cols; c++) {
            const cell = grid[r][c];
            const ch = cell === BLOCK ? BLOCK : (cell || ' ');
            out += ` ${ch} │`;
        }
        out += '\n';
        if (r < rows - 1) {
            out += '├' + '───┼'.repeat(cols - 1) + '───┤\n';
        }
    }

    out += '└' + '───┴'.repeat(cols - 1) + '───┘';
    return out;
}

// ─────────────────────────────────────────────────────────────
// CLUE RENDERING
// ─────────────────────────────────────────────────────────────

function renderClues(size) {
    const set = SAMPLE_CLUES[size] || { across: [], down: [] };

    let out = '**Across**\n';
    for (const clue of set.across) {
        out += `${clue.id} ${clue.text}\n`;
    }

    out += '\n**Down**\n';
    for (const clue of set.down) {
        out += `${clue.id} ${clue.text}\n`;
    }

    return out;
}

// ─────────────────────────────────────────────────────────────
// BUTTONS (CELLS SHOW CURRENT LETTER OR BLOCK)
// ─────────────────────────────────────────────────────────────

function buildGridComponents(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const components = [];

    for (let r = 0; r < rows; r++) {
        const row = new ActionRowBuilder();
        for (let c = 0; c < cols; c++) {
            const cell = grid[r][c];
            const label = cell === BLOCK ? BLOCK : (cell || '_');

            row.addComponents(
                new ButtonBuilder()
                    .setCustomId(`cw_cell_${r}_${c}`)
                    .setLabel(label)
                    .setStyle(cell === BLOCK ? ButtonStyle.Secondary : ButtonStyle.Primary)
                    .setDisabled(cell === BLOCK)
            );
        }
        components.push(row);
    }

    return components;
}

// ─────────────────────────────────────────────────────────────
// PUBLIC: START CROSSWORD (COMMAND HANDLER)
// ─────────────────────────────────────────────────────────────

async function startCrossword(interaction) {
    // Choose size (for now always 5; later random from AVAILABLE_SIZES)
    currentSize = 5;
    currentGrid = createSampleGrid(currentSize);

    const gridText = renderGrid(currentGrid);
    const cluesText = renderClues(currentSize);
    const components = buildGridComponents(currentGrid);

    const msg = await interaction.reply({
        content:
            '🧩 **Crossword**\n\n' +
            '```' + gridText + '```\n\n' +
            cluesText,
        components
    });

    crosswordMessageId = msg.id;
}

// ─────────────────────────────────────────────────────────────
// PUBLIC: HANDLE INTERACTIONS (BUTTONS + MODALS)
// ─────────────────────────────────────────────────────────────

async function handleInteraction(interaction) {
    // Button: cell click → show modal
    if (interaction.isButton() && interaction.customId.startsWith('cw_cell_')) {
        const [, , rStr, cStr] = interaction.customId.split('_');
        const row = parseInt(rStr, 10);
        const col = parseInt(cStr, 10);

        const modal = new ModalBuilder()
            .setCustomId(`cw_modal_${row}_${col}`)
            .setTitle('Enter letter')
            .addComponents(
                new ActionRowBuilder().addComponents(
                    new TextInputBuilder()
                        .setCustomId('cw_letter')
                        .setLabel(`Letter for (${row + 1}, ${col + 1})`)
                        .setStyle(TextInputStyle.Short)
                        .setMaxLength(1)
                        .setRequired(true)
                )
            );

        await interaction.showModal(modal);
        return;
    }

    // Modal: letter submit → update grid + buttons + message
    if (interaction.isModalSubmit() && interaction.customId.startsWith('cw_modal_')) {
        // Prevent "PuzzlePilot was too slow"
        await interaction.deferUpdate();

        const [, , rStr, cStr] = interaction.customId.split('_');
        const row = parseInt(rStr, 10);
        const col = parseInt(cStr, 10);

        const letterRaw = interaction.fields.getTextInputValue('cw_letter') || ' ';
        const letter = letterRaw.trim().toUpperCase().slice(0, 1);

        if (!currentGrid) {
            // Safety: no active grid
            return;
        }

        currentGrid[row][col] = letter || null;

        const gridText = renderGrid(currentGrid);
        const cluesText = renderClues(currentSize);
        const components = buildGridComponents(currentGrid);

        // Edit the original crossword message
        await interaction.editReply({
            content:
                '🧩 **Crossword**\n\n' +
                '```' + gridText + '```\n\n' +
                cluesText,
            components
        });

        return;
    }
}

// ─────────────────────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────────────────────

module.exports = {
    startCrossword,
    handleInteraction,
    BLOCK
};

