 // logicgrid.js
// PuzzlePilot Logic Grid game engine
// Uses puzzles from logicgrid_pack1.js and logicgrid_pack2.js
//
// Features:
// - Daily puzzle is the same for everyone
// - Daily puzzle changes at midnight UK time
// - Daily rotation can use the full puzzle bank
// - Continuous mode uses random puzzles
// - Continuous Play Again avoids the previous puzzle
// - Grid itself is the answer
// - Blank → ✓ → ✗ → blank
// - ✓ automatically rules out other choices
// - Reset Grid
// - Check Solution
// - Components V2 presentation

const logicGridPack1 =
    require('./logicgrid_pack1.js');

const logicGridPack2 =
    require('./logicgrid_pack2.js');

const {
    getModeHeading,
    boardPayload,
    winPayload
} = require('./logicgrid_display.js');

// ─────────────────────────────────────────────
// PUZZLE BANK
// ─────────────────────────────────────────────

const logicGridPuzzles = [
    ...logicGridPack1,
    ...logicGridPack2
];

// Active games
const grids =
    new Map();

// ─────────────────────────────────────────────
// UK DATE
// ─────────────────────────────────────────────

function getUKDateParts() {
    const parts =
        new Intl.DateTimeFormat(
            'en-GB',
            {
                timeZone:
                    'Europe/London',
                year:
                    'numeric',
                month:
                    '2-digit',
                day:
                    '2-digit'
            }
        ).formatToParts(
            new Date()
        );

    const values = {};

    for (
        const part of parts
    ) {
        if (
            part.type ===
                'year' ||
            part.type ===
                'month' ||
            part.type ===
                'day'
        ) {
            values[
                part.type
            ] =
                Number(
                    part.value
                );
        }
    }

    return {
        year:
            values.year,
        month:
            values.month,
        day:
            values.day
    };
}

// ─────────────────────────────────────────────
// PUZZLE SELECTION
// ─────────────────────────────────────────────

function getDailyPuzzle() {
    if (
        logicGridPuzzles.length === 0
    ) {
        return null;
    }

    const {
        year,
        month,
        day
    } =
        getUKDateParts();

    // Use a real consecutive day number rather than
    // YYYYMMDD % bank size.
    //
    // With a 100-puzzle bank, YYYYMMDD % 100 only
    // leaves the day of the month, meaning most of
    // the bank can never become the Daily.
    //
    // This advances by one position on each UK date
    // and can therefore rotate through all puzzles.

    const dayNumber =
        Math.floor(
            Date.UTC(
                year,
                month - 1,
                day
            ) /
            86400000
        );

    const index =
        (
            (
                dayNumber %
                logicGridPuzzles.length
            ) +
            logicGridPuzzles.length
        ) %
        logicGridPuzzles.length;

    return logicGridPuzzles[
        index
    ];
}

function getRandomPuzzle(
    excludePuzzle = null
) {
    if (
        logicGridPuzzles.length === 0
    ) {
        return null;
    }

    if (
        logicGridPuzzles.length <= 1
    ) {
        return logicGridPuzzles[0];
    }

    let choices =
        logicGridPuzzles;

    if (
        excludePuzzle
    ) {
        choices =
            logicGridPuzzles.filter(
                puzzle =>
                    puzzle !==
                    excludePuzzle
            );
    }

    if (
        choices.length === 0
    ) {
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

function createBlankGrid(
    puzzle
) {
    return puzzle.rows.map(
        () =>
            puzzle.columns.map(
                () =>
                    'blank'
            )
    );
}

function createState(
    puzzle,
    mode
) {
    return {
        puzzle:
            puzzle,

        mode:
            mode,

        grid:
            createBlankGrid(
                puzzle
            ),

        notice:
            null,

        finished:
            false
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

    if (
        current ===
        'blank'
    ) {
        // Mark this cell YES.

        state.grid[
            rowIndex
        ][
            columnIndex
        ] =
            'yes';

        // Other cells in this row become NO.

        for (
            let c = 0;
            c <
                state.puzzle
                    .columns
                    .length;
            c++
        ) {
            if (
                c !==
                columnIndex
            ) {
                state.grid[
                    rowIndex
                ][
                    c
                ] =
                    'no';
            }
        }

        // Other cells in this column become NO.

        for (
            let r = 0;
            r <
                state.puzzle
                    .rows
                    .length;
            r++
        ) {
            if (
                r !==
                rowIndex
            ) {
                state.grid[
                    r
                ][
                    columnIndex
                ] =
                    'no';
            }
        }

        return;
    }

    if (
        current ===
        'yes'
    ) {
        state.grid[
            rowIndex
        ][
            columnIndex
        ] =
            'no';

        return;
    }

    state.grid[
        rowIndex
    ][
        columnIndex
    ] =
        'blank';
}

function resetGrid(
    state
) {
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
// SOLUTION CHECKING
// ─────────────────────────────────────────────

function getSelectedColumnForRow(
    state,
    rowIndex
) {
    const yesIndexes =
        [];

    for (
        let columnIndex = 0;
        columnIndex <
            state.puzzle
                .columns
                .length;
        columnIndex++
    ) {
        if (
            state.grid[
                rowIndex
            ][
                columnIndex
            ] ===
                'yes'
        ) {
            yesIndexes.push(
                columnIndex
            );
        }
    }

    if (
        yesIndexes.length !==
        1
    ) {
        return null;
    }

    return yesIndexes[0];
}

function isGridComplete(
    state
) {
    return state.puzzle.rows
        .every(
            (
                _,
                rowIndex
            ) =>
                getSelectedColumnForRow(
                    state,
                    rowIndex
                ) !==
                null
        );
}

function isGridCorrect(
    state
) {
    const puzzle =
        state.puzzle;

    for (
        let rowIndex = 0;
        rowIndex <
            puzzle.rows.length;
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
            ] !==
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

async function startGame(
    interaction,
    mode
) {
    const puzzle =
        mode ===
            'daily'
            ?
            getDailyPuzzle()
            :
            getRandomPuzzle();

    if (
        !puzzle
    ) {
        await interaction.reply({
            content:
                '❌ Sorry, there are no Logic Grid puzzles available.',
            ephemeral:
                true
        });

        return;
    }

    const state =
        createState(
            puzzle,
            mode
        );

    try {
        await interaction.reply(
            boardPayload(
                state
            )
        );

        const message =
            await interaction
                .fetchReply();

        grids.set(
            message.id,
            state
        );

        console.log(
            `${getModeHeading(
                state
            )} created: ` +
            `${message.id} — ` +
            `${state.puzzle.id}`
        );

    } catch (
        error
    ) {
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

// Keep this so anything old still calling
// startLogicGrid will not break.

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
    await interaction.update(
        boardPayload(
            state
        )
    );
}

// ─────────────────────────────────────────────
// CELL CLICK
// ─────────────────────────────────────────────

async function handleCellClick(
    interaction,
    state
) {
    const parts =
        interaction.customId
            .split(
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
        ] ===
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
            type:
                'error',

            title:
                '🧩 NOT FINISHED YET',

            text:
                'Each person needs exactly one ✓ ' +
                'before you check the solution.'
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
            type:
                'error',

            title:
                '❌ NOT QUITE',

            text:
                'Something in the grid is still incorrect. ' +
                'Have another look at the clues.'
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

    await interaction.update(
        winPayload(
            state
        )
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

    if (
        !puzzle
    ) {
        await interaction.reply({
            content:
                '❌ Sorry, there are no Logic Grid puzzles available.',
            ephemeral:
                true
        });

        return;
    }

    const newState =
        createState(
            puzzle,
            'continuous'
        );

    grids.set(
        messageId,
        newState
    );

    await interaction.update(
        boardPayload(
            newState
        )
    );

    console.log(
        `Continuous Logic Grid restarted: ` +
        `${messageId} — ` +
        `${newState.puzzle.id}`
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
        interaction.customId
            .startsWith(
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

    if (
        !state
    ) {
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
            interaction.customId
                .startsWith(
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

    } catch (
        error
    ) {
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
