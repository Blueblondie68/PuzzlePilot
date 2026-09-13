// logicgrid.js
// Logic Grid game engine
// The grid itself is the answer — no modal or typed answer required.

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder
} = require('discord.js');

// ─────────────────────────────────────────────
// PUZZLES
// ─────────────────────────────────────────────

const logicGridPuzzles = [
    {
        id: 'lg1',
        title: 'Pets',
        introduction:
            'Three friends each own a different pet. Use the clues to work out who owns which pet.',
        rowLabel: 'Person',
        columnLabel: 'Pet',
        rows: ['Alice', 'Bob', 'Carol'],
        columns: ['Dog', 'Cat', 'Bird'],
        clues: [
            'Alice does not own the dog.',
            'Bob does not own the bird.'
        ],
        solution: {
            Alice: 'Bird',
            Bob: 'Cat',
            Carol: 'Dog'
        }
    }
];

// Active games: messageId -> state
const grids = new Map();

// ─────────────────────────────────────────────
// PUZZLE SELECTION
// ─────────────────────────────────────────────

function getRandomPuzzle() {
    return logicGridPuzzles[
        Math.floor(Math.random() * logicGridPuzzles.length)
    ];
}

// ─────────────────────────────────────────────
// GRID STATE
// ─────────────────────────────────────────────

function createBlankGrid(puzzle) {
    return puzzle.rows.map(() =>
        puzzle.columns.map(() => 'blank')
    );
}

function createState(puzzle) {
    return {
        puzzle,
        grid: createBlankGrid(puzzle),
        notice: null,
        finished: false
    };
}

function cycleCell(state, rowIndex, columnIndex) {
    const current = state.grid[rowIndex][columnIndex];

    if (current === 'blank') {
        // Mark this cell as YES.
        state.grid[rowIndex][columnIndex] = 'yes';

        // One match per row:
        // all other cells in this row become NO.
        for (
            let c = 0;
            c < state.puzzle.columns.length;
            c++
        ) {
            if (c !== columnIndex) {
                state.grid[rowIndex][c] = 'no';
            }
        }

        // One match per column:
        // all other cells in this column become NO.
        for (
            let r = 0;
            r < state.puzzle.rows.length;
            r++
        ) {
            if (r !== rowIndex) {
                state.grid[r][columnIndex] = 'no';
            }
        }

        return;
    }

    if (current === 'yes') {
        state.grid[rowIndex][columnIndex] = 'no';
        return;
    }

    state.grid[rowIndex][columnIndex] = 'blank';
}

function resetGrid(state) {
    state.grid = createBlankGrid(state.puzzle);
    state.notice = null;
    state.finished = false;
}

// ─────────────────────────────────────────────
// DISPLAY HELPERS
// ─────────────────────────────────────────────

function escapeMarkdown(text) {
    return String(text).replace(
        /([\\_*~`|>])/g,
        '\\$1'
    );
}

function getCellButton(
    state,
    rowIndex,
    columnIndex
) {
    const cellState =
        state.grid[rowIndex][columnIndex];

    let label = '•';
    let style =
        ButtonStyle.Secondary;

    if (cellState === 'yes') {
        label = '✓';
        style =
            ButtonStyle.Success;
    } else if (cellState === 'no') {
        label = '✗';
        style =
            ButtonStyle.Danger;
    }

    return new ButtonBuilder()
        .setCustomId(
            `lg_cell_${rowIndex}_${columnIndex}`
        )
        .setLabel(label)
        .setStyle(style)
        .setDisabled(
            state.finished
        );
}

function buildGridGuide(puzzle) {
    const headings =
        puzzle.columns
            .map(
                (column, index) =>
                    `${index + 1}. ${escapeMarkdown(column)}`
            )
            .join('   •   ');

    return (
        `**${escapeMarkdown(puzzle.columnLabel)} columns:** ` +
        headings
    );
}

function buildClueText(puzzle) {
    return puzzle.clues
        .map(
            (clue, index) =>
                `${index + 1}. ${escapeMarkdown(clue)}`
        )
        .join('\n');
}

function buildBoardEmbed(state) {
    const { puzzle } = state;

    const embed =
        new EmbedBuilder()
            .setColor(
                0x5865F2
            )
            .setTitle(
                `🧠 Logic Grid — ${puzzle.title}`
            )
            .setDescription(
                `${escapeMarkdown(puzzle.introduction)}\n\n` +
                `**Clues**\n${buildClueText(puzzle)}\n\n` +
                `${buildGridGuide(puzzle)}\n\n` +
                'Click a cell to cycle **blank → ✓ → ✗ → blank**.\n' +
                'A ✓ automatically rules out the other choices in its row and column.'
            )
            .setFooter({
                text:
                    'When you are happy with the grid, press Check Solution.'
            });

    if (state.notice) {
        embed.addFields({
            name:
                state.notice.title,
            value:
                state.notice.text
        });
    }

    return embed;
}

function buildWinEmbed(state) {
    const { puzzle } = state;

    const solutionLines =
        puzzle.rows.map(
            row =>
                `**${escapeMarkdown(row)}** → ` +
                `${escapeMarkdown(puzzle.solution[row])}`
        );

    return new EmbedBuilder()
        .setColor(
            0x57F287
        )
        .setTitle(
            '🎉 Logic Grid Complete!'
        )
        .setDescription(
            `You solved **${escapeMarkdown(puzzle.title)}** correctly.\n\n` +
            solutionLines.join('\n')
        );
}

// ─────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────

function renderGridComponents(state) {
    const rows = [];
    const { puzzle } = state;

    for (
        let rowIndex = 0;
        rowIndex < puzzle.rows.length;
        rowIndex++
    ) {
        const actionRow =
            new ActionRowBuilder();

        actionRow.addComponents(
            new ButtonBuilder()
                .setCustomId(
                    `lg_label_${rowIndex}`
                )
                .setLabel(
                    puzzle.rows[rowIndex]
                )
                .setStyle(
                    ButtonStyle.Secondary
                )
                .setDisabled(true)
        );

        for (
            let columnIndex = 0;
            columnIndex < puzzle.columns.length;
            columnIndex++
        ) {
            actionRow.addComponents(
                getCellButton(
                    state,
                    rowIndex,
                    columnIndex
                )
            );
        }

        rows.push(actionRow);
    }

    const controlRow =
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId(
                        'lg_reset'
                    )
                    .setLabel(
                        'Reset Grid'
                    )
                    .setEmoji(
                        '↩️'
                    )
                    .setStyle(
                        ButtonStyle.Secondary
                    )
                    .setDisabled(
                        state.finished
                    ),

                new ButtonBuilder()
                    .setCustomId(
                        'lg_check'
                    )
                    .setLabel(
                        'Check Solution'
                    )
                    .setEmoji(
                        '✅'
                    )
                    .setStyle(
                        ButtonStyle.Success
                    )
                    .setDisabled(
                        state.finished
                    )
            );

    rows.push(controlRow);

    return rows;
}

// ─────────────────────────────────────────────
// SOLUTION CHECKING
// ─────────────────────────────────────────────

function getSelectedColumnForRow(
    state,
    rowIndex
) {
    const yesIndexes = [];

    for (
        let columnIndex = 0;
        columnIndex <
            state.puzzle.columns.length;
        columnIndex++
    ) {
        if (
            state.grid[rowIndex][columnIndex] ===
            'yes'
        ) {
            yesIndexes.push(
                columnIndex
            );
        }
    }

    if (
        yesIndexes.length !== 1
    ) {
        return null;
    }

    return yesIndexes[0];
}

function isGridComplete(state) {
    return state.puzzle.rows.every(
        (_, rowIndex) =>
            getSelectedColumnForRow(
                state,
                rowIndex
            ) !== null
    );
}

function isGridCorrect(state) {
    const { puzzle } = state;

    for (
        let rowIndex = 0;
        rowIndex < puzzle.rows.length;
        rowIndex++
    ) {
        const selectedColumnIndex =
            getSelectedColumnForRow(
                state,
                rowIndex
            );

        if (
            selectedColumnIndex === null
        ) {
            return false;
        }

        const rowName =
            puzzle.rows[rowIndex];

        const selectedColumn =
            puzzle.columns[
                selectedColumnIndex
            ];

        if (
            puzzle.solution[rowName] !==
            selectedColumn
        ) {
            return false;
        }
    }

    return true;
}

// ─────────────────────────────────────────────
// START GAME
// ─────────────────────────────────────────────

async function startLogicGrid(
    interaction
) {
    const puzzle =
        getRandomPuzzle();

    const state =
        createState(
            puzzle
        );

    try {
        await interaction.reply({
            embeds: [
                buildBoardEmbed(
                    state
                )
            ],
            components:
                renderGridComponents(
                    state
                )
        });

        const message =
            await interaction.fetchReply();

        grids.set(
            message.id,
            state
        );

        console.log(
            `Logic Grid created: ${message.id}`
        );
    } catch (error) {
        console.error(
            'Error starting Logic Grid:',
            error
        );

        if (
            !interaction.replied &&
            !interaction.deferred
        ) {
            await interaction.reply({
                content:
                    '❌ Sorry, I could not start the Logic Grid puzzle.',
                ephemeral: true
            });
        }
    }
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
            renderGridComponents(
                state
            )
    });
}

// ─────────────────────────────────────────────
// BUTTON HANDLERS
// ─────────────────────────────────────────────

async function handleCellClick(
    interaction,
    state
) {
    const parts =
        interaction.customId.split(
            '_'
        );

    const rowIndex =
        Number(parts[2]);

    const columnIndex =
        Number(parts[3]);

    if (
        !Number.isInteger(
            rowIndex
        ) ||
        !Number.isInteger(
            columnIndex
        ) ||
        !state.grid[rowIndex] ||
        typeof state.grid[rowIndex][columnIndex] ===
            'undefined'
    ) {
        await interaction.reply({
            content:
                '⚠️ That grid cell could not be found.',
            ephemeral:
                true
        });

        return;
    }

    state.notice =
        null;

    cycleCell(
        state,
        rowIndex,
        columnIndex
    );

    await updateBoard(
        interaction,
        state
    );
}

async function handleReset(
    interaction,
    state
) {
    resetGrid(
        state
    );

    await updateBoard(
        interaction,
        state
    );
}

async function handleCheck(
    interaction,
    state
) {
    if (
        !isGridComplete(
            state
        )
    ) {
        state.notice = {
            title:
                '🧩 Not finished yet',
            text:
                'Each person needs exactly one ✓ before you check the solution.'
        };

        await updateBoard(
            interaction,
            state
        );

        return;
    }

    if (
        !isGridCorrect(
            state
        )
    ) {
        state.notice = {
            title:
                '❌ Not quite',
            text:
                'Something in the grid is still incorrect. Have another look at the clues.'
        };

        await updateBoard(
            interaction,
            state
        );

        return;
    }

    state.finished = true;
    state.notice = null;

    await interaction.update({
        embeds: [
            buildWinEmbed(
                state
            )
        ],
        components: []
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

    const isLogicGridButton =
        interaction.customId.startsWith(
            'lg_cell_'
        ) ||
        interaction.customId ===
            'lg_reset' ||
        interaction.customId ===
            'lg_check';

    if (
        !isLogicGridButton
    ) {
        return;
    }

    const messageId =
        interaction.message.id;

    const state =
        grids.get(
            messageId
        );

    if (!state) {
        console.error(
            `Logic Grid state not found for message ${messageId}`
        );

        if (
            !interaction.replied &&
            !interaction.deferred
        ) {
            await interaction.reply({
                content:
                    '⚠️ Sorry, I lost this Logic Grid puzzle. ' +
                    'Please start a new one.',
                ephemeral:
                    true
            });
        }

        return;
    }

    if (
        state.finished
    ) {
        await interaction.reply({
            content:
                '🏁 This Logic Grid puzzle has already been completed.',
            ephemeral:
                true
        });

        return;
    }

    try {
        if (
            interaction.customId.startsWith(
                'lg_cell_'
            )
        ) {
            await handleCellClick(
                interaction,
                state
            );

            return;
        }

        if (
            interaction.customId ===
            'lg_reset'
        ) {
            await handleReset(
                interaction,
                state
            );

            return;
        }

        if (
            interaction.customId ===
            'lg_check'
        ) {
            await handleCheck(
                interaction,
                state
            );
        }

    } catch (error) {
        console.error(
            'Error handling Logic Grid interaction:',
            error
        );

        if (
            !interaction.replied &&
            !interaction.deferred
        ) {
            await interaction.reply({
                content:
                    '❌ Something went wrong with this Logic Grid puzzle.',
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
    startLogicGrid,
    handleInteraction
};
