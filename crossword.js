 // crossword.js
// PuzzlePilot Crossword Engine
// Components V2 makeover
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

const { getDatabaseClient } = require('./quiz_database');

const crosswordPack1 =
    require('./crossword_pack1');

const crosswordPack2 =
    require('./crossword_pack2');

const crosswordPack3 =
    require('./crossword_pack3');

const crosswordPack4 =
    require('./crossword_pack4');

const crosswordPack5 =
    require('./crossword_pack5');


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
    [
        ...crosswordPack1,
        ...crosswordPack2,
        ...crosswordPack3,
        ...crosswordPack4,
        ...crosswordPack5
    ].map(
        puzzle =>
            preparePuzzle(puzzle)
    );

console.log(
    `Crosswords loaded: ${crosswordPuzzles.length}`
);


// Daily completions use the existing PostgreSQL connection,
// but have their own table and never touch quiz results.
const crosswordDatabaseReady = (async () => {
    const client = await getDatabaseClient();
    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS crossword_completions (
                guild_id TEXT NOT NULL,
                user_id TEXT NOT NULL,
                completion_date DATE NOT NULL,
                puzzle_id TEXT NOT NULL,
                completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                PRIMARY KEY (guild_id, user_id, completion_date)
            )
        `);
    } finally {
        client.release();
    }
})();

crosswordDatabaseReady.catch(error =>
    console.error('Crossword database setup failed:', error)
);

function crosswordServerId(interaction) {
    return interaction.guildId || `DM_${interaction.user.id}`;
}

function crosswordDateKey() {
    const { year, month, day } = getUKDateParts();
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

async function hasCrosswordCompletion(serverId, userId, dateKey) {
    await crosswordDatabaseReady;
    const client = await getDatabaseClient();
    try {
        const result = await client.query(
            `SELECT 1 FROM crossword_completions
             WHERE guild_id = $1 AND user_id = $2
             AND completion_date = $3 LIMIT 1`,
            [serverId, userId, dateKey]
        );
        return result.rows.length > 0;
    } finally {
        client.release();
    }
}

async function saveCrosswordCompletion(session) {
    if (session.mode !== 'daily' || session.completionSaved) return;
    await crosswordDatabaseReady;
    const client = await getDatabaseClient();
    try {
        await client.query(
            `INSERT INTO crossword_completions
             (guild_id, user_id, completion_date, puzzle_id)
             VALUES ($1, $2, $3, $4)
             ON CONFLICT (guild_id, user_id, completion_date) DO NOTHING`,
            [session.serverId, session.userId, session.dateKey, session.puzzle.id]
        );
        session.completionSaved = true;
    } finally {
        client.release();
    }
}

const dailySessions = new Map();
function dailySessionKey(serverId, userId, dateKey) {
    return `${serverId}:${userId}:${dateKey}`;
}

async function finishCrosswordIfComplete(session) {
    if (!isPuzzleComplete(session)) return false;
    // Save before declaring completion, so a database failure cannot
    // silently allow another daily game after a restart.
    await saveCrosswordCompletion(session);
    session.completed = true;
    if (session.mode === 'daily') {
        dailySessions.delete(dailySessionKey(
            session.serverId, session.userId, session.dateKey
        ));
    }
    return true;
}

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
// CREATE SESSION
// ─────────────────────────────────────────────

function createSession(
    userId,
    mode,
    puzzle
) {
    const id =
        createSessionId();

    const session = {
        id,

        userId,

        mode,

        puzzle,

        grid:
            createPlayerGrid(
                puzzle
            ),

        selectedClueId:
            null,

        completed:
            false,

        gaveUp:
            false,

        startedAt:
            Date.now(),

        serverId: null,
        dateKey: null,
        completionSaved: false
    };

    sessions.set(
        id,
        session
    );

    return session;
}

// ─────────────────────────────────────────────
// CLUE LIST TEXT
// ─────────────────────────────────────────────

function buildClueList(
    clues
) {
    return clues.map(
        clue =>
            `**${clue.number}.** ` +
            `${escapeMarkdown(clue.clue)} ` +
            `(${clue.answer.length})`
    ).join('\n');
}


// ─────────────────────────────────────────────
// SELECTED CLUE TEXT
// ─────────────────────────────────────────────

function buildSelectedClueText(
    session
) {
    if (
        !session.selectedClueId
    ) {
        return (
            'Choose a clue from the ' +
            'dropdown below to start.'
        );
    }

    const clue =
        findClue(
            session.puzzle,
            session.selectedClueId
        );

    if (!clue) {
        return (
            'Choose a clue from the ' +
            'dropdown below to start.'
        );
    }

    const direction =
        clue.direction ===
            'across'
            ?
            'Across'
            :
            'Down';

    // Preserve the positions of crossing letters, including blanks.
    const display = getClueCells(clue).map(cell =>
        session.grid[cell.row][cell.col] || '•'
    ).join(' ');

    return (
        `### ${clue.number} ${direction}\n` +
        `**${escapeMarkdown(clue.clue)}**\n` +
        `Answer: \`${display}\``
    );
}


// ─────────────────────────────────────────────
// BUILD CROSSWORD IMAGE
// ─────────────────────────────────────────────

async function buildCrosswordImage(
    session
) {
    return await createCrosswordImage({
        puzzle:
            session.puzzle,

        grid:
            session.grid,

        selectedClueId:
            session.selectedClueId,

        completed:
            session.completed,

        gaveUp:
            session.gaveUp
    });
}


// ─────────────────────────────────────────────
// COMPONENT HELPERS
// ─────────────────────────────────────────────

function addText(
    container,
    text
) {
    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(text)
    );
}


function addSeparator(
    container
) {
    container.addSeparatorComponents(
        new SeparatorBuilder()
    );
}


// ─────────────────────────────────────────────
// BUILD CLUE SELECT MENU
// ─────────────────────────────────────────────

function buildClueSelect(
    session
) {
    const puzzle =
        session.puzzle;

    const allClues = [
        ...puzzle.across,
        ...puzzle.down
    ];

    const options =
        allClues.map(
            clue => {
                const direction =
                    clue.direction ===
                    'across'
                    ?
                    'Across'
                    :
                    'Down';

                return {
                    label:
                        `${clue.number} ${direction}`,

                    description:
                        `${clue.clue}`.slice(
                            0,
                            100
                        ),

                    value:
                        clue.id,

                    default:
                        session.selectedClueId ===
                        clue.id
                };
            }
        );

    const select =
        new StringSelectMenuBuilder()
            .setCustomId(
                `cw_select_${session.id}`
            )
            .setPlaceholder(
                'Choose a clue'
            )
            .addOptions(options);

    return new ActionRowBuilder()
        .addComponents(select);
}

// ─────────────────────────────────────────────
// BUILD BUTTONS
// ─────────────────────────────────────────────

function buildButtons(
    session
) {
    const buttons = [];

    buttons.push(
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
                !session.selectedClueId ||
                session.completed ||
                session.gaveUp
            )
    );

    buttons.push(
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
                !session.selectedClueId ||
                session.completed ||
                session.gaveUp
            )
    );

    buttons.push(
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
                session.completed ||
                session.gaveUp
            )
    );

    buttons.push(
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
                session.completed ||
                session.gaveUp
            )
    );

    return new ActionRowBuilder()
        .addComponents(
            buttons
        );
}


// ─────────────────────────────────────────────
// BUILD PLAY AGAIN BUTTON
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
                    ButtonStyle.Primary
                )
        );
}

// ─────────────────────────────────────────────
// BUILD CROSSWORD DISPLAY
// ─────────────────────────────────────────────

async function buildCrosswordDisplay(
    session
) {
    const imageBuffer =
        await buildCrosswordImage(
            session
        );

    const imageName =
        `crossword_${session.id}.png`;

    const attachment =
        new AttachmentBuilder(
            imageBuffer,
            {
                name:
                    imageName
            }
        );

    const container =
        new ContainerBuilder()
            .setAccentColor(
                session.completed
                    ?
                    COLOUR_GREEN
                    :
                    session.gaveUp
                        ?
                        COLOUR_RED
                        :
                        COLOUR_PURPLE
            );

    const title =
        session.mode ===
            'daily'
            ?
            'DAILY CROSSWORD'
            :
            'CONTINUOUS CROSSWORD';

    addText(
        container,
        `# 🧩 ${title}`
    );

    addText(
        container,
        `**${escapeMarkdown(session.puzzle.title)}** ` +
        `• ${session.puzzle.size}×${session.puzzle.size} ` +
        `• ${session.puzzle.difficulty}`
    );

    addSeparator(
        container
    );

    const gallery =
        new MediaGalleryBuilder()
            .addItems(
                new MediaGalleryItemBuilder()
                    .setURL(
                        `attachment://${imageName}`
                    )
            );

    container.addMediaGalleryComponents(
        gallery
    );

    addSeparator(
        container
    );

    if (
        session.completed
    ) {
        addText(
            container,
            '## 🎉 Crossword completed!'
        );

        addText(
            container,
            'Every letter is correct. ' +
            'Well played!'
        );
    } else if (
        session.gaveUp
    ) {
        addText(
            container,
            '## 🏳️ Crossword revealed'
        );

        addText(
            container,
            'The full solution is now shown.'
        );
    } else {
        addText(
            container,
            '## Choose a Clue'
        );

        addText(
            container,
            buildSelectedClueText(
                session
            )
        );

        addSeparator(
            container
        );

        addText(
            container,
            '### Across\n' +
            buildClueList(
                session.puzzle.across
            )
        );

        addSeparator(
            container
        );

        addText(
            container,
            '### Down\n' +
            buildClueList(
                session.puzzle.down
            )
        );

        addSeparator(
            container
        );

        addText(
            container,
            'Choose a clue, then press ' +
            '**Enter Answer** to fill it in. ' +
            'Crossing letters are kept ' +
            'unless you change them.'
        );
    }

    const components = [
        container
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
    } else if (
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
        content:
            '',

        components,

        files: [
            attachment
        ],

        flags:
            MessageFlags.IsComponentsV2
    };
}

// ─────────────────────────────────────────────
// PLAYER VERIFICATION
// ─────────────────────────────────────────────

async function verifyPlayer(
    interaction,
    session
) {
    if (!session) {
        await interaction.reply({
            content:
                'This crossword session ' +
                'has expired. Please start ' +
                'a new crossword.',

            flags:
                MessageFlags.Ephemeral
        });

        return false;
    }

    if (
        interaction.user.id !==
        session.userId
    ) {
        await interaction.reply({
            content:
                'This is somebody else’s ' +
                'crossword. Start your own ' +
                'game from the daily menu.',

            flags:
                MessageFlags.Ephemeral
        });

        return false;
    }

    return true;
}


// ─────────────────────────────────────────────
// START DAILY CROSSWORD
// ─────────────────────────────────────────────

async function startDaily(interaction) {
    await interaction.deferReply();

    const serverId =
        crosswordServerId(interaction);

    const userId =
        interaction.user.id;

    const dateKey =
        crosswordDateKey();

    const key =
        dailySessionKey(
            serverId,
            userId,
            dateKey
        );

    try {
        if (
            await hasCrosswordCompletion(
                serverId,
                userId,
                dateKey
            )
        ) {
            await interaction.editReply({
                content:
                    '🧩 You have already completed ' +
                    'today’s Daily Crossword. ' +
                    'Come back after midnight UK time!',
                components: []
            });

            return;
        }

        if (dailySessions.has(key)) {
            await interaction.editReply({
                content:
                    '🧩 You already have today’s ' +
                    'Daily Crossword in progress. ' +
                    'Please return to that game.',
                components: []
            });

            return;
        }

        const session =
            createSession(
                userId,
                'daily',
                getDailyPuzzle()
            );

        session.serverId =
            serverId;

        session.dateKey =
            dateKey;

        dailySessions.set(
            key,
            session.id
        );

        try {
            await interaction.editReply(
                await buildCrosswordDisplay(
                    session
                )
            );
        } catch (error) {
            dailySessions.delete(key);
            sessions.delete(session.id);
            throw error;
        }

    } catch (error) {
        console.error(
            'Daily Crossword start failed:',
            error
        );

        await interaction.editReply({
            content:
                '⚠️ The Daily Crossword could ' +
                'not be opened. Please check ' +
                'the Render logs and database connection.',
            components: []
        });
    }
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

    const session =
        createSession(
            interaction.user.id,
            'continuous',
            puzzle
        );

    const display =
        await buildCrosswordDisplay(
            session
        );

    await interaction.reply(
        display
    );
}

// ─────────────────────────────────────────────
// UPDATE EXISTING DISPLAY
// ─────────────────────────────────────────────

async function updateDisplay(
    interaction,
    session
) {
    const display =
        await buildCrosswordDisplay(
            session
        );

    await interaction.editReply(
        display
    );
}


// ─────────────────────────────────────────────
// INTERACTION HANDLER
// ─────────────────────────────────────────────

async function handleInteraction(
    interaction
) {
    // Select clue.

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

        await interaction.deferUpdate();

        await updateDisplay(
            interaction,
            session
        );

        return;
    }


    // Enter answer button.

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

        const clue =
            findClue(
                session.puzzle,
                session.selectedClueId
            );

        if (!clue) {
            await interaction.reply({
                content:
                    'Please choose a clue first.',

                flags:
                    MessageFlags.Ephemeral
            });

            return;
        }

        const modal =
            new ModalBuilder()
                .setCustomId(
                    `cw_modal_${session.id}_${clue.id}`
                )
                .setTitle(
                    `Answer ${clue.number} ` +
                    (
                        clue.direction ===
                            'across'
                            ?
                            'Across'
                            :
                            'Down'
                    )
                );

        const input =
            new TextInputBuilder()
                .setCustomId(
                    'cw_answer_input'
                )
                .setLabel(
                    `${clue.answer.length} letters`
                )
                .setStyle(
                    TextInputStyle.Short
                )
                .setRequired(
                    true
                )
                .setMaxLength(
                    clue.answer.length
                )
                .setPlaceholder(
                    'Type the complete answer'
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

    // ─────────────────────────────────────────────
    // MODAL ANSWER SUBMITTED
    // ─────────────────────────────────────────────

    if (
        interaction.isModalSubmit() &&
        interaction.customId.startsWith(
            'cw_modal_'
        )
    ) {
        const rest =
            interaction.customId.replace(
                'cw_modal_',
                ''
            );

        const lastUnderscore =
            rest.lastIndexOf(
                '_'
            );

        const sessionId =
            rest.slice(
                0,
                lastUnderscore
            );

        const clueId =
            rest.slice(
                lastUnderscore + 1
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

        const clue =
            findClue(
                session.puzzle,
                clueId
            );

        if (!clue) {
            await interaction.reply({
                content:
                    'That clue could not be found.',

                flags:
                    MessageFlags.Ephemeral
            });

            return;
        }

        const answer =
            interaction.fields
                .getTextInputValue(
                    'cw_answer_input'
                );

        const cleaned =
            cleanAnswer(
                answer
            );

        if (
            cleaned.length !==
            clue.answer.length
        ) {
            await interaction.reply({
                content:
                    `That answer needs ` +
                    `${clue.answer.length} letters.`,

                flags:
                    MessageFlags.Ephemeral
            });

            return;
        }

        writeAnswer(
            session,
            clue,
            cleaned
        );

        await interaction.deferUpdate();

        try {
            await finishCrosswordIfComplete(
                session
            );
        } catch (error) {
            console.error(
                'Crossword completion save failed:',
                error
            );

            await interaction.followUp({
                content:
                    '⚠️ Your answer was entered, ' +
                    'but the completion could not ' +
                    'be saved. Please try Check again.',

                flags:
                    MessageFlags.Ephemeral
            });

            return;
        }

        await updateDisplay(
            interaction,
            session
        );

        return;
    }


    // ─────────────────────────────────────────────
    // CLEAR SELECTED ANSWER
    // ─────────────────────────────────────────────

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

        const clue =
            findClue(
                session.puzzle,
                session.selectedClueId
            );

        if (!clue) {
            await interaction.reply({
                content:
                    'Please choose a clue first.',

                flags:
                    MessageFlags.Ephemeral
            });

            return;
        }

        clearAnswer(
            session,
            clue
        );

        await interaction.deferUpdate();

        await updateDisplay(
            interaction,
            session
        );

        return;
    }

    // ─────────────────────────────────────
    // CHECK ANSWERS
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

        const incorrect =
            countIncorrectLetters(
                session
            );

        const empty =
            countEmptyCells(
                session
            );

        await interaction.deferUpdate();

        if (incorrect === 0 && empty === 0) {
            try {
                await finishCrosswordIfComplete(session);
            } catch (error) {
                console.error('Crossword completion save failed:', error);
                await interaction.followUp({
                    content: '⚠️ The crossword is correct, but the completion could not be saved. Please try Check again.',
                    flags: MessageFlags.Ephemeral
                });
                return;
            }
        }

        await updateDisplay(
            interaction,
            session
        );

        await interaction.followUp({
            content:
                session.completed
                    ?
                    '🎉 Well done! You have completed the crossword!'
                    :
                    `Check complete: ${incorrect} incorrect letters and ${empty} empty squares.`,

            flags:
                MessageFlags.Ephemeral
        });

        return;
    }


    // ─────────────────────────────────────
    // GIVE UP AND REVEAL
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

        await interaction.deferUpdate();

        await updateDisplay(
            interaction,
            session
        );

        return;
    }

    // ─────────────────────────────────────
    // CONTINUOUS PLAY AGAIN
    // ─────────────────────────────────────

    if (
        interaction.isButton() &&
        interaction.customId.startsWith(
            'cw_again_'
        )
    ) {
        const sessionId =
            interaction.customId.replace(
                'cw_again_',
                ''
            );

        const oldSession =
            sessions.get(
                sessionId
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
                    'for continuous crosswords.',

                flags:
                    MessageFlags.Ephemeral
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
            sessionId
        );

        const session =
            createSession(
                interaction.user.id,
                'continuous',
                puzzle
            );

        await interaction.deferUpdate();

        await updateDisplay(
            interaction,
            session
        );

        return;
    }
}


// ─────────────────────────────────────────────
// START CROSSWORD
// ─────────────────────────────────────────────

async function startCrossword(
    interaction,
    mode = 'daily'
) {
    if (
        mode === 'continuous'
    ) {
        return startContinuous(
            interaction
        );
    }

    return startDaily(
        interaction
    );
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

