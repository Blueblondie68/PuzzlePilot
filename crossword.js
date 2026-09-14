// crossword.js
// PuzzlePilot Crossword Engine
// First proper playable version:
// - Individual player sessions
// - Whole-answer entry
// - Across + Down clue selection
// - Interlocking answers
// - Check puzzle
// - Clear selected answer
// - Give up / reveal
// - Automatic completion detection

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    StringSelectMenuBuilder
} = require('discord.js');

// ─────────────────────────────────────────────
// TEST CROSSWORD
// ─────────────────────────────────────────────
//
// This is our FIRST engine-testing crossword.
// Once the gameplay is working properly,
// puzzles will be moved into crossword puzzle packs.
//
// Solution:
//
// H E A R T
// E M B E R
// A B U S E
// R E S I N
// T R E N D
//
// It is a word-square style crossword, which makes
// it ideal for testing crossings before we build
// the full puzzle bank.
// ─────────────────────────────────────────────

const TEST_PUZZLE = {
    id: 'crossword_test_001',
    title: 'Mini Crossword',
    size: 5,
    difficulty: 'Easy',

    solution: [
        ['H', 'E', 'A', 'R', 'T'],
        ['E', 'M', 'B', 'E', 'R'],
        ['A', 'B', 'U', 'S', 'E'],
        ['R', 'E', 'S', 'I', 'N'],
        ['T', 'R', 'E', 'N', 'D']
    ],

    across: [
        {
            id: '1A',
            number: 1,
            answer: 'HEART',
            clue: 'Organ that pumps blood',
            row: 0,
            col: 0,
            direction: 'across'
        },
        {
            id: '6A',
            number: 6,
            answer: 'EMBER',
            clue: 'Glowing piece left from a fire',
            row: 1,
            col: 0,
            direction: 'across'
        },
        {
            id: '7A',
            number: 7,
            answer: 'ABUSE',
            clue: 'Treat cruelly or misuse',
            row: 2,
            col: 0,
            direction: 'across'
        },
        {
            id: '8A',
            number: 8,
            answer: 'RESIN',
            clue: 'Sticky substance produced by some trees',
            row: 3,
            col: 0,
            direction: 'across'
        },
        {
            id: '9A',
            number: 9,
            answer: 'TREND',
            clue: 'General direction of change',
            row: 4,
            col: 0,
            direction: 'across'
        }
    ],

    down: [
        {
            id: '1D',
            number: 1,
            answer: 'HEART',
            clue: 'Symbol often associated with love',
            row: 0,
            col: 0,
            direction: 'down'
        },
        {
            id: '2D',
            number: 2,
            answer: 'EMBER',
            clue: 'Small glowing coal in a dying fire',
            row: 0,
            col: 1,
            direction: 'down'
        },
        {
            id: '3D',
            number: 3,
            answer: 'ABUSE',
            clue: 'Improper use of something',
            row: 0,
            col: 2,
            direction: 'down'
        },
        {
            id: '4D',
            number: 4,
            answer: 'RESIN',
            clue: 'Substance used in some varnishes',
            row: 0,
            col: 3,
            direction: 'down'
        },
        {
            id: '5D',
            number: 5,
            answer: 'TREND',
            clue: 'A popular direction or fashion',
            row: 0,
            col: 4,
            direction: 'down'
        }
    ]
};

// ─────────────────────────────────────────────
// ACTIVE GAME SESSIONS
// ─────────────────────────────────────────────
//
// Each crossword gets its own session ID.
//
// This means:
// Sue can play without affecting Fred.
// Sue can even have more than one crossword open
// without the grids sharing the same global state.
// ─────────────────────────────────────────────

const sessions = new Map();

// ─────────────────────────────────────────────
// SESSION ID
// ─────────────────────────────────────────────

function createSessionId() {
    return (
        Date.now().toString(36) +
        Math.random().toString(36).slice(2, 7)
    );
}

// ─────────────────────────────────────────────
// EMPTY PLAYER GRID
// ─────────────────────────────────────────────

function createEmptyGrid(size) {
    return Array.from(
        { length: size },
        () =>
            Array.from(
                { length: size },
                () => null
            )
    );
}

// ─────────────────────────────────────────────
// CLUE NUMBERS FOR GRID
// ─────────────────────────────────────────────

function getCellNumbers(puzzle) {
    const numbers = {};

    const allClues = [
        ...puzzle.across,
        ...puzzle.down
    ];

    for (const clue of allClues) {
        const key =
            `${clue.row}_${clue.col}`;

        if (!numbers[key]) {
            numbers[key] =
                clue.number;
        }
    }

    return numbers;
}

// ─────────────────────────────────────────────
// GRID RENDERING
// ─────────────────────────────────────────────

function renderGrid(session) {
    const grid =
        session.grid;

    const puzzle =
        session.puzzle;

    const numbers =
        getCellNumbers(puzzle);

    const size =
        puzzle.size;

    const horizontal =
        '────';

    let output =
        '┌' +
        Array(size)
            .fill(horizontal)
            .join('┬') +
        '┐\n';

    for (
        let row = 0;
        row < size;
        row++
    ) {
        output += '│';

        for (
            let col = 0;
            col < size;
            col++
        ) {
            const key =
                `${row}_${col}`;

            const number =
                numbers[key]
                    ? String(
                        numbers[key]
                    )
                    : '';

            const letter =
                grid[row][col] ||
                '·';

            const numberText =
                number.padStart(
                    2,
                    ' '
                );

            output +=
                `${numberText}${letter}│`;
        }

        output += '\n';

        if (
            row <
            size - 1
        ) {
            output +=
                '├' +
                Array(size)
                    .fill(
                        horizontal
                    )
                    .join('┼') +
                '┤\n';
        }
    }

    output +=
        '└' +
        Array(size)
            .fill(horizontal)
            .join('┴') +
        '┘';

    return output;
}

// ─────────────────────────────────────────────
// CLUE TEXT
// ─────────────────────────────────────────────

function renderClues(puzzle) {
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
// FIND A CLUE
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
// SELECTED CLUE TEXT
// ─────────────────────────────────────────────

function renderSelectedClue(
    session
) {
    if (
        !session.selectedClueId
    ) {
        return (
            '🎯 **Selected clue:** ' +
            'None\n' +
            'Choose a clue from ' +
            'the menu below.'
        );
    }

    const clue =
        findClue(
            session.puzzle,
            session.selectedClueId
        );

    if (!clue) {
        return (
            '🎯 **Selected clue:** ' +
            'None'
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
// GAME MESSAGE CONTENT
// ─────────────────────────────────────────────

function buildContent(session) {
    let content =
        `🧩 **${session.puzzle.title}**\n` +
        `📏 ${session.puzzle.size} × ` +
        `${session.puzzle.size}` +
        ` • ${session.puzzle.difficulty}\n\n`;

    if (session.completed) {
        content +=
            '🎉 **CROSSWORD COMPLETE!** 🎉\n\n';
    }

    if (session.gaveUp) {
        content +=
            '🏳️ **Solution revealed**\n\n';
    }

    content +=
        '```text\n' +
        renderGrid(session) +
        '\n```\n\n';

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
                `${clue.id} — ` +
                clue.clue,
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
                `${clue.id} — ` +
                clue.clue,
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

    return (
        new ActionRowBuilder()
            .addComponents(
                menu
            )
    );
}

// ─────────────────────────────────────────────
// CONTROL BUTTONS
// ─────────────────────────────────────────────

function buildButtons(
    session
) {
    const disabled =
        session.completed ||
        session.gaveUp;

    return (
        new ActionRowBuilder()
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
            )
    );
}

// ─────────────────────────────────────────────
// ALL COMPONENTS
// ─────────────────────────────────────────────

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
// PLACE ANSWER IN GRID
// ─────────────────────────────────────────────

function placeAnswer(
    session,
    clue,
    answer
) {
    for (
        let i = 0;
        i < answer.length;
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

        session.grid[row][col] =
            answer[i];
    }
}

// ─────────────────────────────────────────────
// CLEAR SELECTED ANSWER
// ─────────────────────────────────────────────

function clearAnswer(
    session,
    clue
) {
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

        session.grid[row][col] =
            null;
    }
}

// ─────────────────────────────────────────────
// CHECK IF PUZZLE IS COMPLETE
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
// COUNT WRONG LETTERS
// ─────────────────────────────────────────────

function countIncorrectLetters(
    session
) {
    let incorrect = 0;

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
// COUNT EMPTY CELLS
// ─────────────────────────────────────────────

function countEmptyCells(
    session
) {
    let empty = 0;

    for (
        const row
        of session.grid
    ) {
        for (
            const cell
            of row
        ) {
            if (!cell) {
                empty++;
            }
        }
    }

    return empty;
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
                [...row]
        );
}

// ─────────────────────────────────────────────
// VERIFY PLAYER OWNS SESSION
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
            ephemeral: true
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
            ephemeral: true
        });

        return false;
    }

    return true;
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
            createEmptyGrid(
                TEST_PUZZLE.size
            ),

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

    await interaction.reply({
        content:
            buildContent(
                session
            ),

        components:
            buildComponents(
                session
            )
    });
}

// ─────────────────────────────────────────────
// HANDLE ALL CROSSWORD INTERACTIONS
// ─────────────────────────────────────────────

async function handleInteraction(
    interaction
) {
    // ─────────────────────────────────────
    // CLUE SELECT MENU
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

        await interaction.update({
            content:
                buildContent(
                    session
                ),

            components:
                buildComponents(
                    session
                )
        });

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
                ephemeral: true
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
                ephemeral: true
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

        const answerInput =
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
                    answerInput
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
                ephemeral: true
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
                ephemeral: true
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
                ephemeral: true
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
                ephemeral: true
            });

            return;
        }

        placeAnswer(
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
                `✅ ${clue.id} entered. ` +
                'Keep going!';
        }

        await interaction.deferUpdate();

        await interaction.editReply({
            content:
                buildContent(
                    session
                ),

            components:
                buildComponents(
                    session
                )
        });

        return;
    }

    // ─────────────────────────────────────
    // CHECK BUTTON
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

        await interaction.update({
            content:
                buildContent(
                    session
                ),

            components:
                buildComponents(
                    session
                )
        });

        return;
    }

    // ─────────────────────────────────────
    // CLEAR SELECTED ANSWER
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
                ephemeral: true
            });

            return;
        }

        const clue =
            findClue(
                session.puzzle,
                session.selectedClueId
            );

        clearAnswer(
            session,
            clue
        );

        session.statusMessage =
            `🧹 ${clue.id} cleared.`;

        await interaction.update({
            content:
                buildContent(
                    session
                ),

            components:
                buildComponents(
                    session
                )
        });

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

        await interaction.update({
            content:
                buildContent(
                    session
                ),

            components:
                buildComponents(
                    session
                )
        });

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
