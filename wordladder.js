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
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle
} = require('discord.js');

const englishWords =
    require('an-array-of-english-words');

const pack1 =
    require('./wordladder_pack1.js');

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

// Start with a random Medium ladder.
// bot.js replaces this at the normal daily reset.

let todaysLadder =
    wordLadders.medium[
        Math.floor(
            Math.random() *
            wordLadders.medium.length
        )
    ];

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

function getDifficultyLabel(
    difficulty
) {
    if (
        difficulty === 'easy'
    ) {
        return 'Easy';
    }

    if (
        difficulty === 'medium'
    ) {
        return 'Medium';
    }

    return 'Hard';
}

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

function ladderDisplay(
    session
) {
    return session.words
        .map(
            word =>
                word.toUpperCase()
        )
        .join(' → ');
}

function buildGameText(
    session,
    message = ''
) {
    let text =
        `🧩 **${session.title}**\n\n` +
        `Start: **${session.start.toUpperCase()}**\n` +
        `Target: **${session.end.toUpperCase()}**\n`;

    if (
        session.difficulty
    ) {
        text +=
            `Difficulty: **${getDifficultyLabel(
                session.difficulty
            )}**\n`;
    }

    text +=
        `\n**Your ladder:**\n` +
        `${ladderDisplay(session)}\n\n`;

    if (
        message
    ) {
        text +=
            `${message}\n\n`;
    }

    text +=
        `Change **exactly one letter** each move.\n` +
        `Every entry must be a recognised word.`;

    return text;
}

function gameButtons(
    sessionId
) {
    return [
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId(
                        `wl_next_${sessionId}`
                    )
                    .setLabel(
                        'Enter Next Word'
                    )
                    .setStyle(
                        ButtonStyle.Primary
                    )
            )
    ];
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
        id: sessionId,
        userId: userId,
        mode: mode,
        difficulty:
            difficulty,
        title:
            mode === 'daily'
                ? 'Daily Word Ladder'
                : `${getDifficultyLabel(
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
// DAILY GAME
// ─────────────────────────────────────────────

async function startDaily(
    interaction
) {
    const session =
        createSession(
            interaction.user.id,
            'daily',
            todaysLadder
        );

    await interaction.reply({
        content:
            buildGameText(
                session
            ),
        components:
            gameButtons(
                session.id
            )
    });
}

// ─────────────────────────────────────────────
// CONTINUOUS GAME
// ─────────────────────────────────────────────

async function startContinuous(
    interaction
) {
    await interaction.reply({
        content:
            `🧩 **Word Ladder**\n\n` +
            `Choose your difficulty.`,
        components: [
            new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId(
                            'wl_diff_easy'
                        )
                        .setLabel(
                            'Easy'
                        )
                        .setStyle(
                            ButtonStyle.Success
                        ),

                    new ButtonBuilder()
                        .setCustomId(
                            'wl_diff_medium'
                        )
                        .setLabel(
                            'Medium'
                        )
                        .setStyle(
                            ButtonStyle.Primary
                        ),

                    new ButtonBuilder()
                        .setCustomId(
                            'wl_diff_hard'
                        )
                        .setLabel(
                            'Hard'
                        )
                        .setStyle(
                            ButtonStyle.Danger
                        )
                )
        ]
    });
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

        await interaction.reply({
            content:
                buildGameText(
                    session
                ),
            components:
                gameButtons(
                    session.id
                )
        });

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
            await interaction.reply({
                content:
                    '⚠️ This Word Ladder is no longer active.',
                ephemeral:
                    true
            });

            return;
        }

        if (
            session.userId !==
            interaction.user.id
        ) {
            await interaction.reply({
                content:
                    '⚠️ This Word Ladder belongs to another player.',
                ephemeral:
                    true
            });

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
            await interaction.reply({
                content:
                    '⚠️ This Word Ladder is no longer active.',
                ephemeral:
                    true
            });

            return;
        }

        if (
            session.userId !==
            interaction.user.id
        ) {
            await interaction.reply({
                content:
                    '⚠️ This Word Ladder belongs to another player.',
                ephemeral:
                    true
            });

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

        // Letters only
        if (
            !/^[a-z]+$/.test(
                enteredWord
            )
        ) {
            await interaction.editReply({
                content:
                    buildGameText(
                        session,
                        '❌ Please enter letters only.'
                    ),
                components:
                    gameButtons(
                        session.id
                    )
            });

            return;
        }

        // Same length
        if (
            enteredWord.length !==
            currentWord.length
        ) {
            await interaction.editReply({
                content:
                    buildGameText(
                        session,
                        `❌ Your next word must have ` +
                        `**${currentWord.length} letters**.`
                    ),
                components:
                    gameButtons(
                        session.id
                    )
            });

            return;
        }

        // Exactly one letter changed
        const differences =
            countDifferentLetters(
                currentWord,
                enteredWord
            );

        if (
            differences !== 1
        ) {
            await interaction.editReply({
                content:
                    buildGameText(
                        session,
                        differences === 0
                            ? '❌ You need to change one letter.'
                            : '❌ You can change only **one letter** at a time.'
                    ),
                components:
                    gameButtons(
                        session.id
                    )
            });

            return;
        }

        // Recognised English word
        if (
            !isApprovedWord(
                enteredWord
            )
        ) {
            await interaction.editReply({
                content:
                    buildGameText(
                        session,
                        `❌ **${enteredWord.toUpperCase()}** ` +
                        `isn't in PuzzlePilot's dictionary. ` +
                        `Try another word.`
                    ),
                components:
                    gameButtons(
                        session.id
                    )
            });

            return;
        }

        // No repeats in the same ladder
        if (
            session.words.includes(
                enteredWord
            )
        ) {
            await interaction.editReply({
                content:
                    buildGameText(
                        session,
                        `❌ You've already used ` +
                        `**${enteredWord.toUpperCase()}**.`
                    ),
                components:
                    gameButtons(
                        session.id
                    )
            });

            return;
        }

        // Accept word
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

            const resultText =
                `🎉 **Word Ladder solved!**\n\n` +
                `${ladderDisplay(session)}\n\n` +
                `You reached ` +
                `**${session.end.toUpperCase()}** ` +
                `in **${moves} ` +
                `${moves === 1 ? 'move' : 'moves'}**!`;

            sessions.delete(
                sessionId
            );

            await interaction.editReply({
                content:
                    resultText,
                components:
                    []
            });

            return;
        }

        // Continue playing
        await interaction.editReply({
            content:
                buildGameText(
                    session,
                    `✅ **${enteredWord.toUpperCase()}** accepted!`
                ),
            components:
                gameButtons(
                    session.id
                )
        });

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
