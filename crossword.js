// crossword.js
// PuzzlePilot Crossword Engine
// Components V2 makeover
//
// Features:
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
// - Daily UK-date rotation
// - Continuous random play
// - Continuous Play Again
//
// Presentation:
// - PuzzlePilot Components V2 layout
// - Crossword grid remains the visual centrepiece
// - Clear "Choose a Clue" instructions
// - Selected clue displayed prominently
// - Enter Answer is the obvious next action

const {
    ActionRowBuilder,
    AttachmentBuilder,
    ButtonBuilder,
    ButtonStyle,
    ContainerBuilder,
    MediaGalleryBuilder,
    MediaGalleryItemBuilder,
    MessageFlags,
    ModalBuilder,
    SeparatorBuilder,
    StringSelectMenuBuilder,
    TextDisplayBuilder,
    TextInputBuilder,
    TextInputStyle
} = require('discord.js');

const {
    createCrosswordImage
} = require('./crosswordImage');

const crosswordPack1 =
    require('./crossword_pack1');


// ─────────────────────────────────────────────
// COLOURS
// ─────────────────────────────────────────────

const COLOUR_PURPLE =
    0x8B5CF6;

const COLOUR_GREEN =
    0x22C55E;

const COLOUR_RED =
    0xEF4444;


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


// ─────────────────────────────────────────────
// PREPARE CROSSWORD BANK
// ─────────────────────────────────────────────

const crosswordPuzzles =
    crosswordPack1.map(
        puzzle =>
            preparePuzzle(puzzle)
    );

console.log(
    `Crosswords loaded: ${crosswordPuzzles.length}`
);


// ─────────────────────────────────────────────
// UK DATE / DAILY ROTATION
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

    for (const part of parts) {
        if (
            part.type !==
            'literal'
        ) {
            values[part.type] =
                Number(part.value);
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


function getDailyPuzzle() {
    const {
        year,
        month,
        day
    } = getUKDateParts();

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
        ((dayNumber % crosswordPuzzles.length) +
            crosswordPuzzles.length) %
        crosswordPuzzles.length;

    return crosswordPuzzles[index];
}


let lastContinuousPuzzleId =
    null;


function getRandomPuzzle(
    excludedPuzzleId = null
) {
    let choices =
        crosswordPuzzles;

    if (
        excludedPuzzleId &&
        crosswordPuzzles.length > 1
    ) {
        choices =
            crosswordPuzzles.filter(
                puzzle =>
                    puzzle.id !==
                    excludedPuzzleId
            );
    }

    return choices[
        Math.floor(
            Math.random() *
            choices.length
        )
    ];
}


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
        Date.now()
            .toString(36) +
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
            } =
                cells[i];

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
    ] =
        answer;

    session.answerOrder =
        session.answerOrder.filter(
            id =>
                id !==
                clue.id
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
                id !==
                clue.id
        );

    rebuildGrid(
        session
    );
}
// ─────────────────────────────────────────────
// RENDER CLUE SECTION
// ─────────────────────────────────────────────

function renderClueSection(
    heading,
    clues
) {
    let output =
        `### ${heading}\n`;

    for (
        const clue
        of clues
    ) {
        output +=
            `**${clue.id}** ` +
            `${escapeMarkdown(clue.clue)} ` +
            `(${clue.answer.length})\n`;
    }

    return output.trim();
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
            `### 🎯 CHOOSE A CLUE\n` +
            `The crossword grid above is a picture, ` +
            `so choose an **Across** or **Down** clue ` +
            `from the menu below to start entering answers.`
        );
    }

    const clue =
        findClue(
            session.puzzle,
            session.selectedClueId
        );

    if (!clue) {
        return (
            `### 🎯 CHOOSE A CLUE\n` +
            `Choose an **Across** or **Down** clue ` +
            `from the menu below.`
        );
    }

    const direction =
        clue.direction ===
            'across'
            ?
            'Across'
            :
            'Down';

    return (
        `### ✏️ ${clue.id} ${direction}\n` +
        `**${escapeMarkdown(clue.clue)}**\n` +
        `${clue.answer.length} letters\n\n` +
        `Press **Enter Answer** below when you're ready.`
    );
}


// ─────────────────────────────────────────────
// STATUS
// ─────────────────────────────────────────────

function renderStatus(
    session
) {
    if (
        !session.statusMessage
    ) {
        return '';
    }

    return session.statusMessage;
}


// ─────────────────────────────────────────────
// CLUE SELECT MENU
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
                `${clue.id} Across`,
            description:
                String(
                    clue.clue
                ).slice(
                    0,
                    100
                ),
            value:
                clue.id,
            default:
                session.selectedClueId ===
                clue.id
        });
    }

    for (
        const clue
        of session.puzzle.down
    ) {
        options.push({
            label:
                `${clue.id} Down`,
            description:
                String(
                    clue.clue
                ).slice(
                    0,
                    100
                ),
            value:
                clue.id,
            default:
                session.selectedClueId ===
                clue.id
        });
    }

    const menu =
        new StringSelectMenuBuilder()
            .setCustomId(
                `cw_select_${session.id}`
            )
            .setPlaceholder(
                'Choose an Across or Down clue'
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
// GAME BUTTONS
// ─────────────────────────────────────────────

function buildButtons(
    session
) {
    const enterButton =
        new ButtonBuilder()
            .setCustomId(
                `cw_enter_${session.id}`
            )
            .setLabel(
                session.selectedClueId
                    ?
                    'Enter Answer'
                    :
                    'Choose a Clue First'
            )
            .setStyle(
                ButtonStyle.Primary
            )
            .setDisabled(
                !session.selectedClueId
            );

    const checkButton =
        new ButtonBuilder()
            .setCustomId(
                `cw_check_${session.id}`
            )
            .setLabel(
                'Check'
            )
            .setStyle(
                ButtonStyle.Success
            );

    const clearButton =
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
                !session.selectedClueId
            );

    const giveUpButton =
        new ButtonBuilder()
            .setCustomId(
                `cw_giveup_${session.id}`
            )
            .setLabel(
                'Give Up'
            )
            .setStyle(
                ButtonStyle.Danger
            );

    return new ActionRowBuilder()
        .addComponents(
            enterButton,
            checkButton,
            clearButton,
            giveUpButton
        );
}


// ─────────────────────────────────────────────
// CONTINUOUS PLAY AGAIN BUTTON
// ─────────────────────────────────────────────

function buildPlayAgainButton(
    session
) {
    return new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId(
                    `cw_again_${session.id}`
                )
                .setLabel(
                    'Play Again'
                )
                .setStyle(
                    ButtonStyle.Success
                )
        );
}


// ─────────────────────────────────────────────
// COUNT INCORRECT LETTERS
// ─────────────────────────────────────────────

function countIncorrectLetters(
    session
) {
    let incorrect = 0;

    for (
        let row = 0;
        row <
        session.puzzle.size;
        row++
    ) {
        for (
            let col = 0;
            col <
            session.puzzle.size;
            col++
        ) {
            if (
                isBlock(
                    session.puzzle
                        .solution[row][col]
                )
            ) {
                continue;
            }

            const entered =
                session.grid[row][col];

            if (
                entered &&
                entered !==
                session.puzzle
                    .solution[row][col]
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
        row <
        session.puzzle.size;
        row++
    ) {
        for (
            let col = 0;
            col <
            session.puzzle.size;
            col++
        ) {
            if (
                isBlock(
                    session.puzzle
                        .solution[row][col]
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
// PUZZLE COMPLETE?
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
// IMAGE ATTACHMENT
// ─────────────────────────────────────────────

async function buildImageAttachment(
    session
) {
    const image =
        await createCrosswordImage(
            session
        );

    return new AttachmentBuilder(
        image,
        {
            name:
                `crossword-${session.id}.png`
        }
    );
}


// ─────────────────────────────────────────────
// CROSSWORD CONTAINER
// ─────────────────────────────────────────────

function buildCrosswordContainer(
    session
) {
    let accentColour =
        COLOUR_PURPLE;

    if (
        session.completed
    ) {
        accentColour =
            COLOUR_GREEN;
    }

    if (
        session.gaveUp
    ) {
        accentColour =
            COLOUR_RED;
    }

    const container =
        new ContainerBuilder()
            .setAccentColor(
                accentColour
            );

    const modeHeading =
        session.mode ===
            'daily'
            ?
            'DAILY CROSSWORD'
            :
            'CROSSWORD';

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                `# 🧩 PUZZLEPILOT\n` +
                `## ${modeHeading}\n` +
                `**${escapeMarkdown(
                    session.puzzle.title
                )}**\n` +
                `${session.puzzle.size} × ` +
                `${session.puzzle.size} • ` +
                `${escapeMarkdown(
                    session.puzzle.difficulty
                )}`
            )
    );

    container.addSeparatorComponents(
        new SeparatorBuilder()
    );

    const gallery =
        new MediaGalleryBuilder()
            .addItems(
                new MediaGalleryItemBuilder()
                    .setURL(
                        `attachment://crossword-${session.id}.png`
                    )
                    .setDescription(
                        `${session.puzzle.title} crossword grid`
                    )
            );

    container.addMediaGalleryComponents(
        gallery
    );

    container.addSeparatorComponents(
        new SeparatorBuilder()
    );

    if (
        session.completed
    ) {
        container.addTextDisplayComponents(
            new TextDisplayBuilder()
                .setContent(
                    `## 🎉 CROSSWORD COMPLETE!\n` +
                    `Brilliant — every answer is correct.`
                )
        );

        container.addSeparatorComponents(
            new SeparatorBuilder()
        );
    }

    if (
        session.gaveUp
    ) {
        container.addTextDisplayComponents(
            new TextDisplayBuilder()
                .setContent(
                    `## 🏳️ SOLUTION REVEALED\n` +
                    `The completed crossword is shown above.`
                )
        );

        container.addSeparatorComponents(
            new SeparatorBuilder()
        );
    }

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                renderClueSection(
                    'ACROSS',
                    session.puzzle.across
                )
            )
    );

    container.addSeparatorComponents(
        new SeparatorBuilder()
    );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                renderClueSection(
                    'DOWN',
                    session.puzzle.down
                )
            )
    );

    if (
        !session.completed &&
        !session.gaveUp
    ) {
        container.addSeparatorComponents(
            new SeparatorBuilder()
        );

        container.addTextDisplayComponents(
            new TextDisplayBuilder()
                .setContent(
                    renderSelectedClue(
                        session
                    )
                )
        );
    }

    const status =
        renderStatus(
            session
        );

    if (status) {
        container.addSeparatorComponents(
            new SeparatorBuilder()
        );

        container.addTextDisplayComponents(
            new TextDisplayBuilder()
                .setContent(
                    status
                )
        );
    }

    container.addSeparatorComponents(
        new SeparatorBuilder()
    );

    let footer;

    if (
        session.completed
    ) {
        footer =
            session.mode ===
                'daily'
                ?
                `Daily Crossword complete • ` +
                `Come back after midnight UK time ` +
                `for a new one!`
                :
                `Continuous Crossword complete • ` +
                `Fancy another one?`;
    } else if (
        session.gaveUp
    ) {
        footer =
            session.mode ===
                'daily'
                ?
                `Daily Crossword finished • ` +
                `Solution shown`
                :
                `Continuous Crossword finished • ` +
                `Solution shown`;
    } else {
        footer =
            `💡 **How to play:** Choose a clue ` +
            `from the menu, then press ` +
            `**Enter Answer**.`;
    }

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                footer
            )
    );

    return container;
}
// ─────────────────────────────────────────────
// FULL V2 PAYLOAD
// ─────────────────────────────────────────────

async function buildCrosswordPayload(
    session
) {
    const attachment =
        await buildImageAttachment(
            session
        );

    const components = [
        buildCrosswordContainer(
            session
        )
    ];

    if (
        !session.completed &&
        !session.gaveUp
    ) {
        components.push(
            buildClueSelect(
                session
            )
        );

        components.push(
            buildButtons(
                session
            )
        );
    }

    if (
        (
            session.completed ||
            session.gaveUp
        ) &&
        session.mode ===
            'continuous'
    ) {
        components.push(
            buildPlayAgainButton(
                session
            )
        );
    }

    return {
        components,

        files: [
            attachment
        ],

        attachments:
            [],

        flags:
            MessageFlags
                .IsComponentsV2
    };
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
    const payload =
        await buildCrosswordPayload(
            session
        );

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
// CREATE A NEW CROSSWORD SESSION
// ─────────────────────────────────────────────

function createSession(
    interaction,
    puzzle,
    mode
) {
    const sessionId =
        createSessionId();

    const session = {
        id:
            sessionId,

        userId:
            interaction.user.id,

        puzzle,

        mode,

        grid:
            createPlayerGrid(
                puzzle
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

    return session;
}


// ─────────────────────────────────────────────
// SEND NEW CROSSWORD
// ─────────────────────────────────────────────

async function sendNewCrossword(
    interaction,
    puzzle,
    mode,
    useUpdate = false
) {
    const session =
        createSession(
            interaction,
            puzzle,
            mode
        );

    const payload =
        await buildCrosswordPayload(
            session
        );

    if (
        useUpdate
    ) {
        // The Continuous Crossword launcher is a
        // legacy Discord message. A Components V2
        // payload cannot replace it directly while
        // that legacy content still exists.
        //
        // Acknowledge the launcher button, remove
        // the old launcher message, then send the
        // new V2 crossword as a clean message.

        await interaction.deferUpdate();

        await interaction.deleteReply();

        await interaction.followUp(
            payload
        );
    } else {
        await interaction.reply(
            payload
        );
    }

    return session;
}


// ─────────────────────────────────────────────
// START DAILY CROSSWORD
// ─────────────────────────────────────────────

async function startDaily(
    interaction
) {
    const puzzle =
        getDailyPuzzle();

    return sendNewCrossword(
        interaction,
        puzzle,
        'daily',
        false
    );
}


// ─────────────────────────────────────────────
// START CONTINUOUS CROSSWORD
// ─────────────────────────────────────────────

async function startContinuous(
    interaction
) {
    const puzzle =
        getRandomPuzzle(
            lastContinuousPuzzleId
        );

    lastContinuousPuzzleId =
        puzzle.id;

    return sendNewCrossword(
        interaction,
        puzzle,
        'continuous',
        interaction.isButton()
    );
}


// ─────────────────────────────────────────────
// BACKWARDS-COMPATIBLE START
// ─────────────────────────────────────────────

async function startCrossword(
    interaction
) {
    return startContinuous(
        interaction
    );
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
        interaction.customId
            .startsWith(
                'cw_select_'
            )
    ) {
        const sessionId =
            interaction.customId
                .replace(
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

        // Acknowledge the clue selection immediately.
        // Rebuilding the crossword PNG can take long
        // enough for Discord to show an interaction
        // failure even though the update later succeeds.

        await interaction.deferUpdate();

        session.selectedClueId =
            interaction.values[0];

        session.statusMessage =
            '✏️ Press **Enter Answer** ' +
            'to fill this clue.';

        await updateCrosswordMessage(
            interaction,
            session,
            false
        );

        return;
    }


    // ─────────────────────────────────────
    // ENTER ANSWER BUTTON
    // ─────────────────────────────────────

    if (
        interaction.isButton() &&
        interaction.customId
            .startsWith(
                'cw_enter_'
            )
    ) {
        const sessionId =
            interaction.customId
                .replace(
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
        interaction.customId
            .startsWith(
                'cw_modal_'
            )
    ) {
        const sessionId =
            interaction.customId
                .replace(
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
        interaction.customId
            .startsWith(
                'cw_check_'
            )
    ) {
        const sessionId =
            interaction.customId
                .replace(
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

        // Acknowledge immediately so Discord
        // does not appear to hang while the
        // crossword image is rebuilt.

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
    // CLEAR ANSWER
    // ─────────────────────────────────────

    if (
        interaction.isButton() &&
        interaction.customId
            .startsWith(
                'cw_clear_'
            )
    ) {
        const sessionId =
            interaction.customId
                .replace(
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

        if (!clue) {
            await interaction.reply({
                content:
                    'That clue could not be found.',

                ephemeral:
                    true
            });

            return;
        }

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
        interaction.customId
            .startsWith(
                'cw_giveup_'
            )
    ) {
        const sessionId =
            interaction.customId
                .replace(
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


    // ─────────────────────────────────────
    // CONTINUOUS PLAY AGAIN
    // ─────────────────────────────────────

    if (
        interaction.isButton() &&
        interaction.customId
            .startsWith(
                'cw_again_'
            )
    ) {
        const oldSessionId =
            interaction.customId
                .replace(
                    'cw_again_',
                    ''
                );

        const oldSession =
            sessions.get(
                oldSessionId
            );

        if (
            !await verifyPlayer(
                interaction,
                oldSession
            )
        ) {
            return;
        }

        if (
            oldSession.mode !==
            'continuous'
        ) {
            await interaction.reply({
                content:
                    'Play Again is only available ' +
                    'for Continuous Crossword.',

                ephemeral:
                    true
            });

            return;
        }

        const puzzle =
            getRandomPuzzle(
                oldSession.puzzle.id
            );

        lastContinuousPuzzleId =
            puzzle.id;

        sessions.delete(
            oldSessionId
        );

        // This is already a Components V2
        // crossword message, so Play Again can
        // replace it directly with the next V2
        // crossword.

        const newSession =
            createSession(
                interaction,
                puzzle,
                'continuous'
            );

        const payload =
            await buildCrosswordPayload(
                newSession
            );

        await interaction.update(
            payload
        );

        return newSession;
    }
}


// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    startDaily,
    startContinuous,
    startCrossword,
    handleInteraction
};
