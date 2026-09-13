// logicgrid.js
// Logic Grid game engine
// Uses puzzles from logicgrid_pack1.js
//
// Features:
// - Daily puzzle is the same for everyone
// - Daily puzzle changes at midnight UK time
// - Continuous mode uses random puzzles
// - Continuous Play Again avoids the previous puzzle
// - Grid itself is the answer
// - Blank → ✓ → ✗ → blank
// - ✓ automatically rules out other choices
// - Reset Grid
// - Check Solution

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder
} = require('discord.js');

const logicGridPack1 = require('./logicgrid_pack1.js');

// ─────────────────────────────────────────────
// PUZZLE BANK
// ─────────────────────────────────────────────

const logicGridPuzzles = [
    ...logicGridPack1
];

// Active games
const grids = new Map();

// ─────────────────────────────────────────────
// UK DATE
// ─────────────────────────────────────────────

function getUKDate() {
    return new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(new Date());
}

// ─────────────────────────────────────────────
// PUZZLE SELECTION
// ─────────────────────────────────────────────

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
        seed % logicGridPuzzles.length;

    return logicGridPuzzles[index];
}

function getRandomPuzzle(excludePuzzle = null) {
    if (logicGridPuzzles.length <= 1) {
        return logicGridPuzzles[0];
    }

    let choices =
        logicGridPuzzles;

    if (excludePuzzle) {
        choices =
            logicGridPuzzles.filter(
                puzzle =>
                    puzzle !== excludePuzzle
            );
    }

    if (choices.length === 0) {
        choices =
            logicGridPuzzles;
    }

    return choices[
        Math.floor(
            Math.random() *
            choices.length
        )
    ];
}

// ─────────────────────────────────────────────
// GRID STATE
// ─────────────────────────────────────────────

function createBlankGrid(puzzle) {
    return puzzle.rows.map(
        () =>
            puzzle.columns.map(
                () => 'blank'
            )
    );
}

function createState(
    puzzle,
    mode
) {
    return {
        puzzle,
        mode,
        grid:
            createBlankGrid(
                puzzle
            ),
        notice: null,
        finished: false
    };
}

// ─────────────────────────────────────────────
// GRID BEHAVIOUR
// ─────────────────────────────────────────────

function cycleCell(
    state,
    rowIndex,
    columnIndex
) {
    const current =
        state.grid[
            rowIndex
        ][
            columnIndex
        ];

    if (current === 'blank') {
        // Mark this cell YES
        state.grid[
            rowIndex
        ][
            columnIndex
        ] = 'yes';

        // Other cells in this row become NO
        for (
            let c = 0;
            c < state.puzzle.columns.length;
            c++
        ) {
            if (c !== columnIndex) {
                state.grid[
                    rowIndex
                ][c] = 'no';
            }
        }

        // Other cells in this column become NO
        for (
            let r = 0;
            r < state.puzzle.rows.length;
            r++
        ) {
            if (r !== rowIndex) {
                state.grid[
                    r
                ][
                    columnIndex
                ] = 'no';
            }
        }

        return;
    }

    if (current === 'yes') {
        state.grid[
            rowIndex
        ][
            columnIndex
        ] = 'no';

        return;
    }

    state.grid[
        rowIndex
    ][
        columnIndex
    ] = 'blank';
}

function resetGrid(state) {
    state.grid =
        createBlankGrid(
            state.puzzle
        );

    state.notice =
        null;

    state.finished =
        false;
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

function getModeTitle(state) {
    return state.mode === 'daily'
        ? `🧠 Daily Logic Grid — ${state.puzzle.title}`
        : `🧠 Continuous Logic Grid — ${state.puzzle.title}`;
}

function getModeFooter(state) {
    return state.mode === 'daily'
        ? 'Daily puzzle • Changes at midnight UK time'
        : 'Continuous mode • Play as many puzzles as you like';
}

function buildGridGuide(puzzle) {
    return puzzle.columns
        .map(
            (column, index) =>
                `${index + 1}. ${escapeMarkdown(column)}`
        )
        .join('   •   ');
}

function buildClueText(puzzle) {
    return puzzle.clues
        .map(
            (clue, index) =>
                `${index + 1}. ${escapeMarkdown(clue)}`
        )
        .join('\n');
}

// ─────────────────────────────────────────────
// EMBEDS
// ─────────────────────────────────────────────

function buildBoardEmbed(state) {
    const puzzle =
        state.puzzle;

    const embed =
        new EmbedBuilder()
            .setColor(
                0x5865F2
            )
            .setTitle(
                getModeTitle(
                    state
                )
            )
            .setDescription(
                `${escapeMarkdown(puzzle.introduction)}\n\n` +
                `**Clues**\n` +
                `${buildClueText(puzzle)}\n\n` +
                `**${escapeMarkdown(puzzle.columnLabel)} columns:** ` +
                `${buildGridGuide(puzzle)}\n\n` +
                'Click a cell to cycle **blank → ✓ → ✗ → blank**.\n' +
                'A ✓ automatically rules out the other choices in its row and column.'
            )
            .setFooter({
                text:
                    `${getModeFooter(state)} • ` +
                    'Press Check Solution when you are ready.'
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
    const puzzle =
        state.puzzle;

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
        )
        .setFooter({
            text:
                getModeFooter(
                    state
                )
        });
}

// ─────────────────────────────────────────────
// BUTTONS
// ─────────────────────────────────────────────

function getCellButton(
    state,
    rowIndex,
    columnIndex
) {
    const cellState =
        state.grid[
            rowIndex
        ][
            columnIndex
        ];

    let label = '•';

    let style =
        ButtonStyle.Secondary;

    if (cellState === 'yes') {
        label = '✓';

        style =
            ButtonStyle.Success;
    }

    if (cellState === 'no') {
        label = '✗';

        style =
            ButtonStyle.Danger;
    }

    return new ButtonBuilder()
        .setCustomId(
            `lg_cell_${rowIndex}_${columnIndex}`
        )
        .setLabel(
            label
        )
        .setStyle(
            style
        )
        .setDisabled(
            state.finished
        );
}

function renderGridComponents(state) {
    const rows = [];

    const puzzle =
        state.puzzle;

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
                    puzzle.rows[
                        rowIndex
                    ]
                )
                .setStyle(
                    ButtonStyle.Secondary
                )
                .setDisabled(
                    true
                )
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

        rows.push(
            actionRow
        );
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
            );

    rows.push(
        controlRow
    );

    return rows;
}

function renderFinishedControls(state) {
    if (
        state.mode !==
        'continuous'
    ) {
        return [];
    }

    return [
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId(
                        'lg_play_again'
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
            )
    ];
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
            state.grid[
                rowIndex
            ][
                columnIndex
            ] === 'yes'
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
    const puzzle =
        state.puzzle;

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
            selectedColumnIndex ===
            null
        ) {
            return false;
        }

        const rowName =
            puzzle.rows[
                rowIndex
            ];

        const selectedColumn =
            puzzle.columns[
                selectedColumnIndex
            ];

        if (
            puzzle.solution[
                rowName
            ] !== selectedColumn
        ) {
            return false;
        }
    }

    return true;
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

    const state =
        createState(
            puzzle,
            mode
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
            `${getModeTitle(state)} created: ${message.id}`
        );

    } catch (error) {
        console.error(
            `Error starting ${mode} Logic Grid:`,
            error
        );

        if (
            !interaction.replied &&
            !interaction.deferred
        ) {
            await interaction.reply({
                content:
                    '❌ Sorry, I could not start the Logic Grid puzzle.',
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

// Keep this temporarily so anything old
// still calling startLogicGrid will not break.
async function startLogicGrid(
    interaction
) {
    return startDaily(
        interaction
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
            renderGridComponents(
                state
            )
    });
}

// ─────────────────────────────────────────────
// CELL CLICK
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
        Number(
            parts[2]
        );

    const columnIndex =
        Number(
            parts[3]
        );

    if (
        !Number.isInteger(
            rowIndex
        ) ||
        !Number.isInteger(
            columnIndex
        ) ||
        !state.grid[
            rowIndex
        ] ||
        typeof state.grid[
            rowIndex
        ][
            columnIndex
        ] === 'undefined'
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

// ─────────────────────────────────────────────
// RESET
// ─────────────────────────────────────────────

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

// ─────────────────────────────────────────────
// CHECK SOLUTION
// ─────────────────────────────────────────────

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

    state.finished =
        true;

    state.notice =
        null;

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
                '⚠️ Play Again is only available in Continuous Logic Grid.',
            ephemeral:
                true
        });

        return;
    }

    const puzzle =
        getRandomPuzzle(
            state.puzzle
        );

    const newState =
        createState(
            puzzle,
            'continuous'
        );

    grids.set(
        messageId,
        newState
    );

    await interaction.update({
        embeds: [
            buildBoardEmbed(
                newState
            )
        ],
        components:
            renderGridComponents(
                newState
            )
    });

    console.log(
        `Continuous Logic Grid restarted: ${messageId}`
    );
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
            'lg_check' ||
        interaction.customId ===
            'lg_play_again';

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

    try {
        if (
            interaction.customId ===
            'lg_play_again'
        ) {
            await handlePlayAgain(
                interaction,
                state,
                messageId
            );

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
    startDaily,
    startContinuous,
    startLogicGrid,
    handleInteraction
};
