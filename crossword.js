// crossword.js
// PuzzlePilot Crossword Engine
// Version 5
//
// - Proper PNG crossword grid
// - Black squares
// - Automatic crossword numbering
// - Puzzle validation
// - Variable answer lengths
// - Individual player sessions
// - Whole-answer entry
// - Crossing answers preserved
// - Check / Clear / Give Up
// - Automatic completion detection

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    StringSelectMenuBuilder,
    AttachmentBuilder
} = require('discord.js');

const {
    createCrosswordImage
} = require('./crosswordImage');

const crosswordPack1 = require('./crossword_pack1');


// ─────────────────────────────────────────────
// RAW TEST CROSSWORD
// ─────────────────────────────────────────────
//
// IMPORTANT:
//
// We no longer type clue numbers ourselves.
//
// PuzzlePilot looks at the grid and works out:
//
// 1A, 1D, 2D, 3A, 3D etc.
//
// automatically.
//
// ─────────────────────────────────────────────

const RAW_TEST_PUZZLE = {
    id: 'crossword_test_002',
    title: 'Mini Crossword',
    difficulty: 'Easy',

    solution: [
        ['I', 'F', '#', 'H', 'I'],
        ['F', 'L', 'E', 'E', 'T'],
        ['#', 'E', 'R', 'A', '#'],
        ['H', 'E', 'A', 'R', 'T'],
        ['I', 'T', '#', 'T', 'O']
    ],

    across: [
        {
            answer: 'IF',
            clue: 'Provided that',
            row: 0,
            col: 0
        },
        {
            answer: 'HI',
            clue: 'Casual greeting',
            row: 0,
            col: 3
        },
        {
            answer: 'FLEET',
            clue: 'Group of ships',
            row: 1,
            col: 0
        },
        {
            answer: 'ERA',
            clue: 'Period of history',
            row: 2,
            col: 1
        },
        {
            answer: 'HEART',
            clue: 'Organ that pumps blood',
            row: 3,
            col: 0
        },
        {
            answer: 'IT',
            clue: 'The thing being referred to',
            row: 4,
            col: 0
        },
        {
            answer: 'TO',
            clue: 'In the direction of',
            row: 4,
            col: 3
        }
    ],

    down: [
        {
            answer: 'IF',
            clue: 'On the condition that',
            row: 0,
            col: 0
        },
        {
            answer: 'FLEET',
            clue: 'Moving quickly',
            row: 0,
            col: 1
        },
        {
            answer: 'HEART',
            clue: 'Central or most important part',
            row: 0,
            col: 3
        },
        {
            answer: 'IT',
            clue: 'Pronoun for a thing',
            row: 0,
            col: 4
        },
        {
            answer: 'ERA',
            clue: 'Distinct period of time',
            row: 1,
            col: 2
        },
        {
            answer: 'HI',
            clue: 'Informal hello',
            row: 3,
            col: 0
        },
        {
            answer: 'TO',
            clue: 'Towards',
            row: 3,
            col: 4
        }
    ]
};


// ─────────────────────────────────────────────
// BASIC HELPERS
// ─────────────────────────────────────────────

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
        .replace(/[^A-Z]/g, '');
}


// ─────────────────────────────────────────────
// DOES A CELL START AN ACROSS ANSWER?
// ─────────────────────────────────────────────

function isAcrossStart(solution, row, col) {
    if (
        isBlock(solution[row][col])
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

function isDownStart(solution, row, col) {
    if (
        isBlock(solution[row][col])
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
//
// Crossword numbering works row by row,
// left to right.
//
// A square gets a number if it begins an
// Across answer, a Down answer, or both.
//
// ─────────────────────────────────────────────

function generateNumberMap(solution) {
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
                ] = nextNumber;

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
        !isBlock(solution[r][c])
    ) {
        answer +=
            solution[r][c];

        if (
            direction === 'across'
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

function preparePuzzle(rawPuzzle) {
    if (
        !rawPuzzle ||
        !Array.isArray(
            rawPuzzle.solution
        ) ||
        rawPuzzle.solution.length === 0
    ) {
        throw new Error(
            'Crossword has no solution grid.'
        );
    }

    const size =
        rawPuzzle.solution.length;

    // ─────────────────────────────────────
    // CHECK GRID IS SQUARE
    // ─────────────────────────────────────

    for (
        let row = 0;
        row < size;
        row++
    ) {
        if (
            !Array.isArray(
                rawPuzzle.solution[row]
            ) ||
            rawPuzzle.solution[row].length !==
            size
        ) {
            throw new Error(
                `Crossword "${rawPuzzle.id}" ` +
                `must be a square grid.`
            );
        }
    }

    // ─────────────────────────────────────
    // NORMALISE GRID
    // ─────────────────────────────────────

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

    // ─────────────────────────────────────
    // PREPARE CLUE
    // ─────────────────────────────────────

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
            direction === 'across'
                ? isAcrossStart(
                    solution,
                    row,
                    col
                )
                : isDownStart(
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
            direction === 'across'
                ? 'A'
                : 'D';

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

    // ─────────────────────────────────────
    // PREPARE ACROSS CLUES
    // ─────────────────────────────────────

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

    // ─────────────────────────────────────
    // PREPARE DOWN CLUES
    // ─────────────────────────────────────

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

    // ─────────────────────────────────────
    // MAKE SURE NO CLUES ARE MISSING
    // ─────────────────────────────────────

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
                            clue.row === row &&
                            clue.col === col
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
                            clue.row === row &&
                            clue.col === col
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
            a.number - b.number
    );

    preparedDown.sort(
        (a, b) =>
            a.number - b.number
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


// ─────────────────────────────────────────────
// PREPARE TEST PUZZLE
// ─────────────────────────────────────────────
//
// If anything is wrong with the puzzle,
// Render's log will tell us exactly what.
//
// ─────────────────────────────────────────────

const TEST_PUZZLE =
    preparePuzzle(
        crosswordPack1[0]
    );

console.log(
    `Crossword loaded: ${TEST_PUZZLE.id}`
);

console.log(
    `Across clues: ${TEST_PUZZLE.across
        .map(clue => clue.id)
        .join(', ')}`
);

console.log(
    `Down clues: ${TEST_PUZZLE.down
        .map(clue => clue.id)
        .join(', ')}`
);


// ─────────────────────────────────────────────
// ACTIVE SESSIONS
// ─────────────────────────────────────────────

const sessions =
    new Map();


// ─────────────────────────────────────────────
// CREATE SESSION ID
// ─────────────────────────────────────────────

function createSessionId() {
    return (
        Date.now().toString(36) +
        Math.random()
            .toString(36)
            .slice(2, 7)
    );
}


// ─────────────────────────────────────────────
// PLAYER GRID
// ─────────────────────────────────────────────

function createPlayerGrid(
    puzzle
) {
    return puzzle.solution.map(
        row =>
            row.map(
                cell =>
                    isBlock(cell)
                        ? '#'
                        : null
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
            clue.id === clueId
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
// REBUILD GRID
// ─────────────────────────────────────────────

function rebuildGrid(
    session
) {
    const grid =
        createPlayerGrid(
            session.puzzle
        );

    for (
        const clueId
        of session.answerOrder
    ) {
        const answer =
            session.answers[
                clueId
            ];

        if (!answer) {
            continue;
        }

        const clue =
            findClue(
                session.puzzle,
                clueId
            );

        if (!clue) {
            continue;
        }

        const cells =
            getClueCells(
                clue
            );

        for (
            let i = 0;
            i < cells.length;
            i++
        ) {
            const {
                row,
                col
            } = cells[i];

            grid[row][col] =
                answer[i];
        }
    }

    session.grid =
        grid;
}


// ─────────────────────────────────────────────
// STORE ANSWER
// ─────────────────────────────────────────────

function storeAnswer(
    session,
    clue,
    answer
) {
    session.answers[
        clue.id
    ] = answer;

    session.answerOrder =
        session.answerOrder.filter(
            id =>
                id !== clue.id
        );

    session.answerOrder.push(
        clue.id
    );

    rebuildGrid(
        session
    );
}


// ─────────────────────────────────────────────
// CLEAR ANSWER
// ─────────────────────────────────────────────

function clearStoredAnswer(
    session,
    clue
) {
    delete session.answers[
        clue.id
    ];

    session.answerOrder =
        session.answerOrder.filter(
            id =>
                id !== clue.id
        );

    rebuildGrid(
        session
    );
}


// ─────────────────────────────────────────────
// RENDER CLUES
// ─────────────────────────────────────────────

function renderClues(
    puzzle
) {
    let output =
        '**Across**\n';

    for (
        const clue
        of puzzle.across
    ) {
        output +=
            `**${clue.id}** ` +
            `${clue.clue} ` +
            `(${clue.answer.length})\n`;
    }

    output +=
        '\n**Down**\n';

    for (
        const clue
        of puzzle.down
    ) {
        output +=
            `**${clue.id}** ` +
            `${clue.clue} ` +
            `(${clue.answer.length})\n`;
    }

    return output;
}


// ─────────────────────────────────────────────
// SELECTED CLUE
// ─────────────────────────────────────────────

function renderSelectedClue(
    session
) {
    if (
        !session.selectedClueId
    ) {
        return (
            '🎯 **Selected clue:** None\n' +
            'Choose a clue from the menu below.'
        );
    }

    const clue =
        findClue(
            session.puzzle,
            session.selectedClueId
        );

    if (!clue) {
        return (
            '🎯 **Selected clue:** None'
        );
    }

    return (
        `🎯 **Selected clue:** ` +
        `**${clue.id}** — ` +
        `${clue.clue} ` +
        `(${clue.answer.length})`
    );
}


// ─────────────────────────────────────────────
// MESSAGE CONTENT
// ─────────────────────────────────────────────

function buildContent(
    session
) {
    let content =
        `🧩 **${session.puzzle.title}**\n` +
        `📏 ${session.puzzle.size} × ` +
        `${session.puzzle.size}` +
        ` • ${session.puzzle.difficulty}\n\n`;

    if (
        session.completed
    ) {
        content +=
            '🎉 **CROSSWORD COMPLETE!** 🎉\n\n';
    }

    if (
        session.gaveUp
    ) {
        content +=
            '🏳️ **Solution revealed**\n\n';
    }

    content +=
        renderClues(
            session.puzzle
        );

    content +=
        '\n' +
        renderSelectedClue(
            session
        );

    if (
        session.statusMessage
    ) {
        content +=
            '\n\n' +
            session.statusMessage;
    }

    return content;
}


// ─────────────────────────────────────────────
// IMAGE ATTACHMENT
// ─────────────────────────────────────────────

async function buildImageAttachment(
    session
) {
    const imageBuffer =
        await createCrosswordImage(
            session
        );

    return new AttachmentBuilder(
        imageBuffer,
        {
            name:
                `crossword-${session.id}.png`
        }
    );
}


// ─────────────────────────────────────────────
// CLUE MENU
// ─────────────────────────────────────────────

function buildClueSelect(
    session
) {
    const options = [];

    for (
        const clue
        of session.puzzle.across
    ) {
        options.push({
            label:
                `${clue.id} — ${clue.clue}`,

            value:
                clue.id,

            description:
                `Across • ` +
                `${clue.answer.length} letters`
        });
    }

    for (
        const clue
        of session.puzzle.down
    ) {
        options.push({
            label:
                `${clue.id} — ${clue.clue}`,

            value:
                clue.id,

            description:
                `Down • ` +
                `${clue.answer.length} letters`
        });
    }

    const menu =
        new StringSelectMenuBuilder()
            .setCustomId(
                `cw_select_${session.id}`
            )
            .setPlaceholder(
                'Choose a crossword clue'
            )
            .setDisabled(
                session.completed ||
                session.gaveUp
            )
            .addOptions(
                options
            );

    return new ActionRowBuilder()
        .addComponents(
            menu
        );
}


// ─────────────────────────────────────────────
// BUTTONS
// ─────────────────────────────────────────────

function buildButtons(
    session
) {
    const disabled =
        session.completed ||
        session.gaveUp;

    return new ActionRowBuilder()
        .addComponents(

            new ButtonBuilder()
                .setCustomId(
                    `cw_enter_${session.id}`
                )
                .setLabel(
                    'Enter Answer'
                )
                .setStyle(
                    ButtonStyle.Primary
                )
                .setDisabled(
                    disabled
                ),

            new ButtonBuilder()
                .setCustomId(
                    `cw_check_${session.id}`
                )
                .setLabel(
                    'Check'
                )
                .setStyle(
                    ButtonStyle.Success
                )
                .setDisabled(
                    disabled
                ),

            new ButtonBuilder()
                .setCustomId(
                    `cw_clear_${session.id}`
                )
                .setLabel(
                    'Clear Answer'
                )
                .setStyle(
                    ButtonStyle.Secondary
                )
                .setDisabled(
                    disabled
                ),

            new ButtonBuilder()
                .setCustomId(
                    `cw_giveup_${session.id}`
                )
                .setLabel(
                    'Give Up'
                )
                .setStyle(
                    ButtonStyle.Danger
                )
                .setDisabled(
                    disabled
                )
        );
}


function buildComponents(
    session
) {
    return [
        buildClueSelect(
            session
        ),
        buildButtons(
            session
        )
    ];
}


// ─────────────────────────────────────────────
// IS COMPLETE?
// ─────────────────────────────────────────────

function isPuzzleComplete(
    session
) {
    const solution =
        session.puzzle.solution;

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
                session.grid[row][col] !==
                solution[row][col]
            ) {
                return false;
            }
        }
    }

    return true;
}


// ─────────────────────────────────────────────
// WRONG LETTER COUNT
// ─────────────────────────────────────────────

function countIncorrectLetters(
    session
) {
    let incorrect =
        0;

    const solution =
        session.puzzle.solution;

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

            const playerLetter =
                session.grid[row][col];

            if (
                playerLetter &&
                playerLetter !==
                solution[row][col]
            ) {
                incorrect++;
            }
        }
    }

    return incorrect;
}


// ─────────────────────────────────────────────
// EMPTY CELL COUNT
// ─────────────────────────────────────────────

function countEmptyCells(
    session
) {
    let empty =
        0;

    const solution =
        session.puzzle.solution;

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

            if (
                !session.grid[row][col]
            ) {
                empty++;
            }
        }
    }

    return empty;
}


// ─────────────────────────────────────────────
// REVEAL
// ─────────────────────────────────────────────

function revealSolution(
    session
) {
    session.grid =
        session.puzzle.solution.map(
            row =>
                [...row]
        );
}


// ─────────────────────────────────────────────
// VERIFY PLAYER
// ─────────────────────────────────────────────

async function verifyPlayer(
    interaction,
    session
) {
    if (!session) {
        await interaction.reply({
            content:
                '⚠️ This crossword session ' +
                'is no longer active.',
            ephemeral:
                true
        });

        return false;
    }

    if (
        interaction.user.id !==
        session.userId
    ) {
        await interaction.reply({
            content:
                '🧩 This crossword belongs ' +
                'to another player. ' +
                'Start your own from /daily.',
            ephemeral:
                true
        });

        return false;
    }

    return true;
}


// ─────────────────────────────────────────────
// UPDATE CROSSWORD MESSAGE
// ─────────────────────────────────────────────

async function updateCrosswordMessage(
    interaction,
    session,
    useUpdate = true
) {
    const attachment =
        await buildImageAttachment(
            session
        );

    const payload = {
        content:
            buildContent(
                session
            ),

        files: [
            attachment
        ],

        attachments:
            [],

        components:
            buildComponents(
                session
            )
    };

    if (
        useUpdate
    ) {
        await interaction.update(
            payload
        );
    } else {
        await interaction.editReply(
            payload
        );
    }
}


// ─────────────────────────────────────────────
// START CROSSWORD
// ─────────────────────────────────────────────

async function startCrossword(
    interaction
) {
    const sessionId =
        createSessionId();

    const session = {
        id:
            sessionId,

        userId:
            interaction.user.id,

        puzzle:
            TEST_PUZZLE,

        grid:
            createPlayerGrid(
                TEST_PUZZLE
            ),

        answers:
            {},

        answerOrder:
            [],

        selectedClueId:
            null,

        completed:
            false,

        gaveUp:
            false,

        statusMessage:
            '💡 Choose a clue, then press ' +
            '**Enter Answer**.'
    };

    sessions.set(
        sessionId,
        session
    );

    const attachment =
        await buildImageAttachment(
            session
        );

    await interaction.reply({
        content:
            buildContent(
                session
            ),

        files: [
            attachment
        ],

        components:
            buildComponents(
                session
            )
    });
}


// ─────────────────────────────────────────────
// HANDLE INTERACTIONS
// ─────────────────────────────────────────────

async function handleInteraction(
    interaction
) {

    // ─────────────────────────────────────
    // SELECT CLUE
    // ─────────────────────────────────────

    if (
        interaction.isStringSelectMenu() &&
        interaction.customId.startsWith(
            'cw_select_'
        )
    ) {
        const sessionId =
            interaction.customId.replace(
                'cw_select_',
                ''
            );

        const session =
            sessions.get(
                sessionId
            );

        if (
            !await verifyPlayer(
                interaction,
                session
            )
        ) {
            return;
        }

        session.selectedClueId =
            interaction.values[0];

        session.statusMessage =
            '✏️ Press **Enter Answer** ' +
            'to fill this clue.';

        await updateCrosswordMessage(
            interaction,
            session,
            true
        );

        return;
    }


    // ─────────────────────────────────────
    // ENTER ANSWER BUTTON
    // ─────────────────────────────────────

    if (
        interaction.isButton() &&
        interaction.customId.startsWith(
            'cw_enter_'
        )
    ) {
        const sessionId =
            interaction.customId.replace(
                'cw_enter_',
                ''
            );

        const session =
            sessions.get(
                sessionId
            );

        if (
            !await verifyPlayer(
                interaction,
                session
            )
        ) {
            return;
        }

        if (
            !session.selectedClueId
        ) {
            await interaction.reply({
                content:
                    'Choose a clue first.',
                ephemeral:
                    true
            });

            return;
        }

        const clue =
            findClue(
                session.puzzle,
                session.selectedClueId
            );

        if (!clue) {
            await interaction.reply({
                content:
                    'That clue could not be found.',
                ephemeral:
                    true
            });

            return;
        }

        const modal =
            new ModalBuilder()
                .setCustomId(
                    `cw_modal_${session.id}`
                )
                .setTitle(
                    `${clue.id} Crossword Answer`
                );

        const input =
            new TextInputBuilder()
                .setCustomId(
                    'cw_answer'
                )
                .setLabel(
                    `${clue.answer.length}-letter answer`
                )
                .setPlaceholder(
                    clue.clue
                )
                .setStyle(
                    TextInputStyle.Short
                )
                .setMinLength(
                    clue.answer.length
                )
                .setMaxLength(
                    clue.answer.length
                )
                .setRequired(
                    true
                );

        modal.addComponents(
            new ActionRowBuilder()
                .addComponents(
                    input
                )
        );

        await interaction.showModal(
            modal
        );

        return;
    }


    // ─────────────────────────────────────
    // ANSWER MODAL
    // ─────────────────────────────────────

    if (
        interaction.isModalSubmit() &&
        interaction.customId.startsWith(
            'cw_modal_'
        )
    ) {
        const sessionId =
            interaction.customId.replace(
                'cw_modal_',
                ''
            );

        const session =
            sessions.get(
                sessionId
            );

        if (!session) {
            await interaction.reply({
                content:
                    '⚠️ This crossword session ' +
                    'is no longer active.',
                ephemeral:
                    true
            });

            return;
        }

        if (
            interaction.user.id !==
            session.userId
        ) {
            await interaction.reply({
                content:
                    'This crossword belongs ' +
                    'to another player.',
                ephemeral:
                    true
            });

            return;
        }

        const clue =
            findClue(
                session.puzzle,
                session.selectedClueId
            );

        if (!clue) {
            await interaction.reply({
                content:
                    'No clue is currently selected.',
                ephemeral:
                    true
            });

            return;
        }

        const answer =
            interaction.fields
                .getTextInputValue(
                    'cw_answer'
                )
                .trim()
                .toUpperCase()
                .replace(
                    /[^A-Z]/g,
                    ''
                );

        if (
            answer.length !==
            clue.answer.length
        ) {
            await interaction.reply({
                content:
                    `That answer must be ` +
                    `${clue.answer.length} letters.`,
                ephemeral:
                    true
            });

            return;
        }

        storeAnswer(
            session,
            clue,
            answer
        );

        if (
            isPuzzleComplete(
                session
            )
        ) {
            session.completed =
                true;

            session.statusMessage =
                '🏆 Brilliant! Every answer ' +
                'is correct.';
        } else {
            session.statusMessage =
                `✏️ ${clue.id} entered.`;
        }

        await interaction.deferUpdate();

        await updateCrosswordMessage(
            interaction,
            session,
            false
        );

        return;
    }


       // ─────────────────────────────────────
    // CHECK
    // ─────────────────────────────────────

    if (
        interaction.isButton() &&
        interaction.customId.startsWith(
            'cw_check_'
        )
    ) {
        const sessionId =
            interaction.customId.replace(
                'cw_check_',
                ''
            );

        const session =
            sessions.get(
                sessionId
            );

        if (
            !await verifyPlayer(
                interaction,
                session
            )
        ) {
            return;
        }

        // Acknowledge the button immediately.
        // The crossword image can then rebuild
        // without making Discord appear to hang.
        await interaction.deferUpdate();

        const incorrect =
            countIncorrectLetters(
                session
            );

        const empty =
            countEmptyCells(
                session
            );

        if (
            incorrect === 0 &&
            empty === 0
        ) {
            session.completed =
                true;

            session.statusMessage =
                '🎉 **Everything is correct!**';
        } else if (
            incorrect === 0
        ) {
            session.statusMessage =
                `✅ Everything entered so far ` +
                `is correct. ` +
                `${empty} square` +
                `${empty === 1 ? '' : 's'} ` +
                `still empty.`;
        } else {
            session.statusMessage =
                `⚠️ There ` +
                `${incorrect === 1 ? 'is' : 'are'} ` +
                `**${incorrect} incorrect ` +
                `letter${incorrect === 1 ? '' : 's'}** ` +
                `somewhere in the grid.`;
        }

        await updateCrosswordMessage(
            interaction,
            session,
            false
        );

        return;
    }

    // ─────────────────────────────────────
    // CLEAR
    // ─────────────────────────────────────

    if (
        interaction.isButton() &&
        interaction.customId.startsWith(
            'cw_clear_'
        )
    ) {
        const sessionId =
            interaction.customId.replace(
                'cw_clear_',
                ''
            );

        const session =
            sessions.get(
                sessionId
            );

        if (
            !await verifyPlayer(
                interaction,
                session
            )
        ) {
            return;
        }

        if (
            !session.selectedClueId
        ) {
            await interaction.reply({
                content:
                    'Choose a clue first, ' +
                    'then you can clear it.',
                ephemeral:
                    true
            });

            return;
        }

        const clue =
            findClue(
                session.puzzle,
                session.selectedClueId
            );

        if (
            !session.answers[
                clue.id
            ]
        ) {
            session.statusMessage =
                `ℹ️ ${clue.id} has no entered ` +
                `answer to clear.`;
        } else {
            clearStoredAnswer(
                session,
                clue
            );

            session.statusMessage =
                `🧹 ${clue.id} cleared.`;
        }

        await updateCrosswordMessage(
            interaction,
            session,
            true
        );

        return;
    }


    // ─────────────────────────────────────
    // GIVE UP
    // ─────────────────────────────────────

    if (
        interaction.isButton() &&
        interaction.customId.startsWith(
            'cw_giveup_'
        )
    ) {
        const sessionId =
            interaction.customId.replace(
                'cw_giveup_',
                ''
            );

        const session =
            sessions.get(
                sessionId
            );

        if (
            !await verifyPlayer(
                interaction,
                session
            )
        ) {
            return;
        }

        revealSolution(
            session
        );

        session.gaveUp =
            true;

        session.statusMessage =
            'The completed solution is shown above.';

        await updateCrosswordMessage(
            interaction,
            session,
            true
        );

        return;
    }
}


// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    startCrossword,
    handleInteraction
};
