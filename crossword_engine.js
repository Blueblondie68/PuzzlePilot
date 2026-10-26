// crossword_engine.js
// PuzzlePilot crossword grid validation and player-grid logic.
// Extracted without changing the original crossword rules.

function isBlock(value) {
    return (
        value === '#' ||
        value === '█' ||
        value === null
    );
}


function cleanAnswer(answer) {
    return String(answer)
        .trim()
        .toUpperCase()
        .replace(
            /[^A-Z]/g,
            ''
        );
}


function escapeMarkdown(text) {
    return String(text)
        .replace(
            /([\\_*~`|>])/g,
            '\\$1'
        );
}


// ─────────────────────────────────────────────
// DOES A CELL START AN ACROSS ANSWER?
// ─────────────────────────────────────────────

function isAcrossStart(
    solution,
    row,
    col
) {
    if (
        isBlock(
            solution[row][col]
        )
    ) {
        return false;
    }

    const cols =
        solution[row].length;

    const leftIsEdgeOrBlock =
        col === 0 ||
        isBlock(
            solution[row][col - 1]
        );

    const hasCellToRight =
        col + 1 < cols &&
        !isBlock(
            solution[row][col + 1]
        );

    return (
        leftIsEdgeOrBlock &&
        hasCellToRight
    );
}


// ─────────────────────────────────────────────
// DOES A CELL START A DOWN ANSWER?
// ─────────────────────────────────────────────

function isDownStart(
    solution,
    row,
    col
) {
    if (
        isBlock(
            solution[row][col]
        )
    ) {
        return false;
    }

    const rows =
        solution.length;

    const aboveIsEdgeOrBlock =
        row === 0 ||
        isBlock(
            solution[row - 1][col]
        );

    const hasCellBelow =
        row + 1 < rows &&
        !isBlock(
            solution[row + 1][col]
        );

    return (
        aboveIsEdgeOrBlock &&
        hasCellBelow
    );
}


// ─────────────────────────────────────────────
// AUTOMATIC CROSSWORD NUMBERS
// ─────────────────────────────────────────────

function generateNumberMap(
    solution
) {
    const numberMap = {};

    let nextNumber = 1;

    for (
        let row = 0;
        row < solution.length;
        row++
    ) {
        for (
            let col = 0;
            col < solution[row].length;
            col++
        ) {
            if (
                isBlock(
                    solution[row][col]
                )
            ) {
                continue;
            }

            const startsAcross =
                isAcrossStart(
                    solution,
                    row,
                    col
                );

            const startsDown =
                isDownStart(
                    solution,
                    row,
                    col
                );

            if (
                startsAcross ||
                startsDown
            ) {
                numberMap[
                    `${row}_${col}`
                ] =
                    nextNumber;

                nextNumber++;
            }
        }
    }

    return numberMap;
}


// ─────────────────────────────────────────────
// READ ANSWER FROM GRID
// ─────────────────────────────────────────────

function readAnswerFromSolution(
    solution,
    row,
    col,
    direction
) {
    let answer = '';

    let r = row;
    let c = col;

    while (
        r >= 0 &&
        r < solution.length &&
        c >= 0 &&
        c < solution[r].length &&
        !isBlock(
            solution[r][c]
        )
    ) {
        answer +=
            solution[r][c];

        if (
            direction ===
            'across'
        ) {
            c++;
        } else {
            r++;
        }
    }

    return answer;
}


// ─────────────────────────────────────────────
// VALIDATE AND PREPARE PUZZLE
// ─────────────────────────────────────────────

function preparePuzzle(
    rawPuzzle
) {
    if (
        !rawPuzzle ||
        !Array.isArray(
            rawPuzzle.solution
        ) ||
        rawPuzzle.solution.length ===
            0
    ) {
        throw new Error(
            'Crossword has no solution grid.'
        );
    }

    const size =
        rawPuzzle.solution.length;

    // Check grid is square.

    for (
        let row = 0;
        row < size;
        row++
    ) {
        if (
            !Array.isArray(
                rawPuzzle.solution[row]
            ) ||
            rawPuzzle.solution[row]
                .length !==
                size
        ) {
            throw new Error(
                `Crossword "${rawPuzzle.id}" ` +
                `must be a square grid.`
            );
        }
    }

    // Normalise grid.

    const solution =
        rawPuzzle.solution.map(
            row =>
                row.map(
                    cell => {
                        if (
                            isBlock(cell)
                        ) {
                            return '#';
                        }

                        const letter =
                            String(cell)
                                .trim()
                                .toUpperCase();

                        if (
                            !/^[A-Z]$/.test(
                                letter
                            )
                        ) {
                            throw new Error(
                                `Invalid grid character ` +
                                `"${cell}" in ` +
                                `"${rawPuzzle.id}".`
                            );
                        }

                        return letter;
                    }
                )
        );

    const numberMap =
        generateNumberMap(
            solution
        );

    const preparedAcross = [];
    const preparedDown = [];

    const clueKeys =
        new Set();

    function prepareClue(
        rawClue,
        direction
    ) {
        const row =
            rawClue.row;

        const col =
            rawClue.col;

        if (
            !Number.isInteger(row) ||
            !Number.isInteger(col) ||
            row < 0 ||
            col < 0 ||
            row >= size ||
            col >= size
        ) {
            throw new Error(
                `Invalid clue position in ` +
                `"${rawPuzzle.id}".`
            );
        }

        const correctStart =
            direction ===
                'across'
                ?
                isAcrossStart(
                    solution,
                    row,
                    col
                )
                :
                isDownStart(
                    solution,
                    row,
                    col
                );

        if (
            !correctStart
        ) {
            throw new Error(
                `A ${direction} clue in ` +
                `"${rawPuzzle.id}" starts at ` +
                `row ${row + 1}, ` +
                `column ${col + 1}, ` +
                `but that square does not ` +
                `begin a ${direction} answer.`
            );
        }

        const expectedAnswer =
            readAnswerFromSolution(
                solution,
                row,
                col,
                direction
            );

        const suppliedAnswer =
            cleanAnswer(
                rawClue.answer
            );

        if (
            suppliedAnswer !==
            expectedAnswer
        ) {
            throw new Error(
                `Crossword "${rawPuzzle.id}" has ` +
                `a bad ${direction} answer at ` +
                `row ${row + 1}, ` +
                `column ${col + 1}. ` +
                `Grid says "${expectedAnswer}" ` +
                `but clue says "${suppliedAnswer}".`
            );
        }

        const number =
            numberMap[
                `${row}_${col}`
            ];

        if (!number) {
            throw new Error(
                `Could not number a clue in ` +
                `"${rawPuzzle.id}".`
            );
        }

        const suffix =
            direction ===
                'across'
                ?
                'A'
                :
                'D';

        const id =
            `${number}${suffix}`;

        const key =
            `${direction}_${row}_${col}`;

        if (
            clueKeys.has(key)
        ) {
            throw new Error(
                `Duplicate clue ${id} in ` +
                `"${rawPuzzle.id}".`
            );
        }

        clueKeys.add(key);

        return {
            id,
            number,

            answer:
                expectedAnswer,

            clue:
                rawClue.clue,

            row,
            col,
            direction
        };
    }

    for (
        const rawClue
        of rawPuzzle.across
    ) {
        preparedAcross.push(
            prepareClue(
                rawClue,
                'across'
            )
        );
    }

    for (
        const rawClue
        of rawPuzzle.down
    ) {
        preparedDown.push(
            prepareClue(
                rawClue,
                'down'
            )
        );
    }

    // Make sure no clues are missing.

    for (
        let row = 0;
        row < size;
        row++
    ) {
        for (
            let col = 0;
            col < size;
            col++
        ) {
            if (
                isAcrossStart(
                    solution,
                    row,
                    col
                )
            ) {
                const exists =
                    preparedAcross.some(
                        clue =>
                            clue.row ===
                                row &&
                            clue.col ===
                                col
                    );

                if (!exists) {
                    const number =
                        numberMap[
                            `${row}_${col}`
                        ];

                    throw new Error(
                        `Missing clue ${number}A ` +
                        `in "${rawPuzzle.id}".`
                    );
                }
            }

            if (
                isDownStart(
                    solution,
                    row,
                    col
                )
            ) {
                const exists =
                    preparedDown.some(
                        clue =>
                            clue.row ===
                                row &&
                            clue.col ===
                                col
                    );

                if (!exists) {
                    const number =
                        numberMap[
                            `${row}_${col}`
                        ];

                    throw new Error(
                        `Missing clue ${number}D ` +
                        `in "${rawPuzzle.id}".`
                    );
                }
            }
        }
    }

    preparedAcross.sort(
        (a, b) =>
            a.number -
            b.number
    );

    preparedDown.sort(
        (a, b) =>
            a.number -
            b.number
    );

    return {
        id:
            rawPuzzle.id,

        title:
            rawPuzzle.title,

        difficulty:
            rawPuzzle.difficulty,

        size,

        solution,

        across:
            preparedAcross,

        down:
            preparedDown
    };
}



function createPlayerGrid(
    puzzle
) {
    return puzzle.solution.map(
        row =>
            row.map(
                cell =>
                    isBlock(cell)
                        ?
                        '#'
                        :
                        null
            )
    );
}


// ─────────────────────────────────────────────
// FIND CLUE
// ─────────────────────────────────────────────

function findClue(
    puzzle,
    clueId
) {
    return [
        ...puzzle.across,
        ...puzzle.down
    ].find(
        clue =>
            clue.id ===
            clueId
    );
}


// ─────────────────────────────────────────────
// CELLS BELONGING TO A CLUE
// ─────────────────────────────────────────────

function getClueCells(
    clue
) {
    const cells = [];

    for (
        let i = 0;
        i < clue.answer.length;
        i++
    ) {
        let row =
            clue.row;

        let col =
            clue.col;

        if (
            clue.direction ===
            'across'
        ) {
            col += i;
        } else {
            row += i;
        }

        cells.push({
            row,
            col
        });
    }

    return cells;
}


// ─────────────────────────────────────────────
// CURRENT ANSWER FOR A CLUE
// ─────────────────────────────────────────────

function getCurrentAnswer(
    session,
    clue
) {
    return getClueCells(
        clue
    ).map(
        cell =>
            session.grid[
                cell.row
            ][
                cell.col
            ] || ''
    ).join('');
}


// ─────────────────────────────────────────────
// WRITE AN ANSWER INTO GRID
// ─────────────────────────────────────────────

function writeAnswer(
    session,
    clue,
    answer
) {
    const cleaned =
        cleanAnswer(answer);

    if (
        cleaned.length !==
        clue.answer.length
    ) {
        return false;
    }

    const cells =
        getClueCells(clue);

    for (
        let i = 0;
        i < cells.length;
        i++
    ) {
        const cell =
            cells[i];

        session.grid[
            cell.row
        ][
            cell.col
        ] =
            cleaned[i];
    }

    return true;
}


// ─────────────────────────────────────────────
// CLEAR SELECTED ANSWER
// ─────────────────────────────────────────────

function clearAnswer(
    session,
    clue
) {
    const cells =
        getClueCells(clue);

    for (const cell of cells) {
        session.grid[
            cell.row
        ][
            cell.col
        ] =
            null;
    }
}


// ─────────────────────────────────────────────
// CHECK GRID
// ─────────────────────────────────────────────

function countIncorrectLetters(
    session
) {
    let incorrect = 0;

    for (
        let row = 0;
        row < session.puzzle.size;
        row++
    ) {
        for (
            let col = 0;
            col < session.puzzle.size;
            col++
        ) {
            const expected =
                session.puzzle.solution[
                    row
                ][
                    col
                ];

            if (
                isBlock(expected)
            ) {
                continue;
            }

            const actual =
                session.grid[
                    row
                ][
                    col
                ];

            if (
                actual &&
                actual !==
                expected
            ) {
                incorrect++;
            }
        }
    }

    return incorrect;
}


 // ─────────────────────────────────────────────
// COUNT EMPTY CELLS
// ─────────────────────────────────────────────

function countEmptyCells(
    session
) {
    let empty = 0;

    for (
        let row = 0;
        row < session.puzzle.size;
        row++
    ) {
        for (
            let col = 0;
            col < session.puzzle.size;
            col++
        ) {
            if (
                isBlock(
                    session.puzzle.solution[
                        row
                    ][
                        col
                    ]
                )
            ) {
                continue;
            }

            if (
                !session.grid[
                    row
                ][
                    col
                ]
            ) {
                empty++;
            }
        }
    }

    return empty;
}


// ─────────────────────────────────────────────
// IS PUZZLE COMPLETE?
// ─────────────────────────────────────────────

function isPuzzleComplete(
    session
) {
    return (
        countIncorrectLetters(
            session
        ) === 0 &&
        countEmptyCells(
            session
        ) === 0
    );
}


// ─────────────────────────────────────────────
// REVEAL SOLUTION
// ─────────────────────────────────────────────

function revealSolution(
    session
) {
    session.grid =
        session.puzzle.solution.map(
            row =>
                row.map(
                    cell =>
                        isBlock(cell)
                            ?
                            '#'
                            :
                            cell
                )
        );
}


// ─────────────────────────────────────────────

module.exports = {
    cleanAnswer,
    escapeMarkdown,
    preparePuzzle,
    createPlayerGrid,
    findClue,
    getClueCells,
    getCurrentAnswer,
    writeAnswer,
    clearAnswer,
    countIncorrectLetters,
    countEmptyCells,
    isPuzzleComplete,
    revealSolution
};
