 // wordladder.js
// PuzzlePilot Word Ladder
// Daily + continuous play
//
// Classic Word Ladder rules:
// - Start and target are the same length
// - Change exactly one letter per move
// - Every submitted word must be a recognised English word
// - Players enter one word at a time
// - Alternative valid routes are accepted
// - Continuous play avoids an immediate repeat

const {
    ActionRowBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle
} = require('discord.js');

const englishWords =
    require('an-array-of-english-words');

const pack1 =
    require('./wordladder_pack1.js');

const {
    getDifficultyLabel,
    gamePayload,
    difficultyPayload,
    solvedPayload
} = require('./wordladder_display.js');

// ─────────────────────────────────────────────
// DICTIONARY
// ─────────────────────────────────────────────
//
// Pack 1 currently uses four-letter ladders.
//
// The npm dictionary contains a very large English
// vocabulary. We keep alphabetic four-letter entries.
//
// Using a Set makes checking a submitted word fast.

const approvedWords =
    new Set(
        englishWords
            .map(word =>
                word.toLowerCase()
            )
            .filter(word =>
                /^[a-z]{4}$/.test(word)
            )
    );

// These are ordinary words that we specifically want
// PuzzlePilot to recognise even if the underlying
// dictionary ever changes.

[
    'lark',
    'lust'
].forEach(word =>
    approvedWords.add(word)
);

console.log(
    `Word Ladder dictionary loaded: ` +
    `${approvedWords.size} four-letter words`
);

// ─────────────────────────────────────────────
// PUZZLE BANK
// ─────────────────────────────────────────────

const wordLadders = {
    easy: pack1.easy,
    medium: pack1.medium,
    hard: pack1.hard
};

// ─────────────────────────────────────────────
// ACTIVE GAMES
// ─────────────────────────────────────────────

const sessions =
    new Map();

const lastContinuousPuzzles =
    new Map();

// Daily Word Ladder is derived from the UK calendar date.
// The same UK date always produces the same Medium ladder,
// including after a Render restart. Consecutive dates move
// through the bank instead of randomly repeating yesterday.

function getUKDateKey() {
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

    const year =
        Number(
            parts.find(
                part =>
                    part.type ===
                    'year'
            ).value
        );

    const month =
        Number(
            parts.find(
                part =>
                    part.type ===
                    'month'
            ).value
        );

    const day =
        Number(
            parts.find(
                part =>
                    part.type ===
                    'day'
            ).value
        );

    return {
        year,
        month,
        day
    };
}

function getDailyLadder() {
    const group =
        wordLadders.medium;

    if (
        !group ||
        group.length === 0
    ) {
        throw new Error(
            'No Medium Word Ladders are available.'
        );
    }

    const {
        year,
        month,
        day
    } = getUKDateKey();

    // Convert the UK calendar date to a stable whole-day number.
    // Date.UTC is used only for the arithmetic after the UK date
    // has already been obtained above.

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
                group.length
            ) +
            group.length
        ) %
        group.length;

    return group[index];
}

let todaysLadder =
    getDailyLadder();

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

function puzzleKey(
    ladder
) {
    return (
        `${ladder.start}_` +
        `${ladder.end}`
    );
}

function generateWordLadder(
    difficulty,
    excludedPuzzleKey = null
) {
    const group =
        wordLadders[
            difficulty
        ];

    if (
        !group ||
        group.length === 0
    ) {
        throw new Error(
            `No Word Ladders found ` +
            `for difficulty: ` +
            `${difficulty}`
        );
    }

    let choices =
        group;

    if (
        excludedPuzzleKey &&
        group.length > 1
    ) {
        choices =
            group.filter(
                ladder =>
                    puzzleKey(
                        ladder
                    ) !==
                    excludedPuzzleKey
            );
    }

    return choices[
        Math.floor(
            Math.random() *
            choices.length
        )
    ];
}

function setTodaysLadder(
    ladder
) {
    todaysLadder =
        ladder;
}

function makeSessionId(
    userId,
    mode
) {
    return (
        `${userId}_${mode}`
    );
}

function isApprovedWord(
    word
) {
    return approvedWords.has(
        word.toLowerCase()
    );
}

function countDifferentLetters(
    word1,
    word2
) {
    if (
        word1.length !==
        word2.length
    ) {
        return Infinity;
    }

    let differences = 0;

    for (
        let i = 0;
        i < word1.length;
        i++
    ) {
        if (
            word1[i] !==
            word2[i]
        ) {
            differences++;
        }
    }

    return differences;
}

function createSession(
    userId,
    mode,
    ladder,
    difficulty = null
) {
    const sessionId =
        makeSessionId(
            userId,
            mode
        );

    const session = {
        id:
            sessionId,

        userId:
            userId,

        mode:
            mode,

        difficulty:
            difficulty,

        title:
            mode === 'daily'
                ?
                'Daily Word Ladder'
                :
                `${getDifficultyLabel(
                    difficulty
                )} Word Ladder`,

        start:
            ladder.start.toLowerCase(),

        end:
            ladder.end.toLowerCase(),

        words: [
            ladder.start.toLowerCase()
        ]
    };

    sessions.set(
        sessionId,
        session
    );

    return session;
}

// ─────────────────────────────────────────────
// SMALL EPHEMERAL MESSAGES
// ─────────────────────────────────────────────

async function replyInactive(
    interaction
) {
    await interaction.reply({
        content:
            '⚠️ This Word Ladder is no longer active.',
        ephemeral:
            true
    });
}

async function replyWrongPlayer(
    interaction
) {
    await interaction.reply({
        content:
            '⚠️ This Word Ladder belongs to another player.',
        ephemeral:
            true
    });
}

// ─────────────────────────────────────────────
// DAILY GAME
// ─────────────────────────────────────────────

async function startDaily(
    interaction
) {
    // Recalculate from the current UK date whenever Daily starts.
    // This makes the Daily correct even if the midnight interval
    // was delayed or the bot restarted during the day.

    todaysLadder =
        getDailyLadder();

    const session =
        createSession(
            interaction.user.id,
            'daily',
            todaysLadder
        );

    await interaction.reply(
        gamePayload(
            session
        )
    );
}

// ─────────────────────────────────────────────
// CONTINUOUS GAME
// ─────────────────────────────────────────────

async function startContinuous(
    interaction
) {
    await interaction.reply(
        difficultyPayload()
    );
}

// ─────────────────────────────────────────────
// INTERACTIONS
// ─────────────────────────────────────────────

async function handleInteraction(
    interaction
) {

    // ─────────────────────────────────────────
    // DIFFICULTY BUTTONS
    // ─────────────────────────────────────────

    if (
        interaction.isButton() &&
        interaction.customId.startsWith(
            'wl_diff_'
        )
    ) {
        const difficulty =
            interaction.customId.replace(
                'wl_diff_',
                ''
            );

        const repeatKey =
            `${interaction.user.id}_` +
            `${difficulty}`;

        const previousPuzzle =
            lastContinuousPuzzles.get(
                repeatKey
            ) || null;

        const ladder =
            generateWordLadder(
                difficulty,
                previousPuzzle
            );

        lastContinuousPuzzles.set(
            repeatKey,
            puzzleKey(
                ladder
            )
        );

        const session =
            createSession(
                interaction.user.id,
                `continuous_${difficulty}`,
                ladder,
                difficulty
            );

        await interaction.reply(
            gamePayload(
                session
            )
        );

        return;
    }

    // ─────────────────────────────────────────
    // ENTER NEXT WORD BUTTON
    // ─────────────────────────────────────────

    if (
        interaction.isButton() &&
        interaction.customId.startsWith(
            'wl_next_'
        )
    ) {
        const sessionId =
            interaction.customId.replace(
                'wl_next_',
                ''
            );

        const session =
            sessions.get(
                sessionId
            );

        if (
            !session
        ) {
            await replyInactive(
                interaction
            );

            return;
        }

        if (
            session.userId !==
            interaction.user.id
        ) {
            await replyWrongPlayer(
                interaction
            );

            return;
        }

        const currentWord =
            session.words[
                session.words.length - 1
            ];

        const modal =
            new ModalBuilder()
                .setCustomId(
                    `wl_modal_${sessionId}`
                )
                .setTitle(
                    'Enter Next Word'
                );

        const input =
            new TextInputBuilder()
                .setCustomId(
                    'wl_word'
                )
                .setLabel(
                    `Change one letter in ` +
                    `${currentWord.toUpperCase()}`
                )
                .setStyle(
                    TextInputStyle.Short
                )
                .setRequired(
                    true
                )
                .setMinLength(
                    currentWord.length
                )
                .setMaxLength(
                    currentWord.length
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

    // ─────────────────────────────────────────
    // WORD SUBMISSION
    // ─────────────────────────────────────────

    if (
        interaction.isModalSubmit() &&
        interaction.customId.startsWith(
            'wl_modal_'
        )
    ) {
        const sessionId =
            interaction.customId.replace(
                'wl_modal_',
                ''
            );

        const session =
            sessions.get(
                sessionId
            );

        if (
            !session
        ) {
            await replyInactive(
                interaction
            );

            return;
        }

        if (
            session.userId !==
            interaction.user.id
        ) {
            await replyWrongPlayer(
                interaction
            );

            return;
        }

        await interaction.deferUpdate();

        const enteredWord =
            interaction.fields
                .getTextInputValue(
                    'wl_word'
                )
                .trim()
                .toLowerCase();

        const currentWord =
            session.words[
                session.words.length - 1
            ];

        // ─────────────────────────────────────
        // LETTERS ONLY
        // ─────────────────────────────────────

        if (
            !/^[a-z]+$/.test(
                enteredWord
            )
        ) {
            await interaction.editReply(
                gamePayload(
                    session,
                    `### ❌ NOT QUITE\n` +
                    `Please enter letters only.`,
                    'error'
                )
            );

            return;
        }

        // ─────────────────────────────────────
        // SAME LENGTH
        // ─────────────────────────────────────

        if (
            enteredWord.length !==
            currentWord.length
        ) {
            await interaction.editReply(
                gamePayload(
                    session,
                    `### ❌ NOT QUITE\n` +
                    `Your next word must have ` +
                    `**${currentWord.length} letters**.`,
                    'error'
                )
            );

            return;
        }

        // ─────────────────────────────────────
        // EXACTLY ONE LETTER CHANGED
        // ─────────────────────────────────────

        const differences =
            countDifferentLetters(
                currentWord,
                enteredWord
            );

        if (
            differences !== 1
        ) {
            const errorMessage =
                differences === 0
                    ?
                    `You need to change **one letter**.`
                    :
                    `You can change only **one letter** ` +
                    `at a time.`;

            await interaction.editReply(
                gamePayload(
                    session,
                    `### ❌ NOT QUITE\n` +
                    errorMessage,
                    'error'
                )
            );

            return;
        }

        // ─────────────────────────────────────
        // RECOGNISED ENGLISH WORD
        // ─────────────────────────────────────

        if (
            !isApprovedWord(
                enteredWord
            )
        ) {
            await interaction.editReply(
                gamePayload(
                    session,
                    `### ❌ WORD NOT RECOGNISED\n` +
                    `**${enteredWord.toUpperCase()}** ` +
                    `isn't in PuzzlePilot's dictionary.\n` +
                    `Try another word.`,
                    'error'
                )
            );

            return;
        }

        // ─────────────────────────────────────
        // NO REPEATS IN SAME LADDER
        // ─────────────────────────────────────

        if (
            session.words.includes(
                enteredWord
            )
        ) {
            await interaction.editReply(
                gamePayload(
                    session,
                    `### ❌ ALREADY USED\n` +
                    `You've already used ` +
                    `**${enteredWord.toUpperCase()}**.`,
                    'error'
                )
            );

            return;
        }

        // ─────────────────────────────────────
        // ACCEPT WORD
        // ─────────────────────────────────────

        session.words.push(
            enteredWord
        );

        // ─────────────────────────────────────
        // SOLVED
        // ─────────────────────────────────────

        if (
            enteredWord ===
            session.end
        ) {
            const moves =
                session.words.length - 1;

            sessions.delete(
                sessionId
            );

            await interaction.editReply(
                solvedPayload(
                    session,
                    moves
                )
            );

            return;
        }

        // ─────────────────────────────────────
        // CONTINUE PLAYING
        // ─────────────────────────────────────

        await interaction.editReply(
            gamePayload(
                session,
                `### ✅ WORD ACCEPTED\n` +
                `**${enteredWord.toUpperCase()}** ` +
                `has been added to your ladder.`,
                'success'
            )
        );

        return;
    }
}

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    generateWordLadder,
    getDifficultyLabel,
    setTodaysLadder,
    startDaily,
    startContinuous,
    handleInteraction
};
