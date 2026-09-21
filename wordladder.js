// wordladder.js
// PuzzlePilot Word Ladder
// Daily + continuous play
// Players enter ONE word at a time.
// Each move must change exactly one letter.

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle
} = require('discord.js');

const pack1 = require('./wordladder_pack1.js');
const approvedWords = require('./wordladder_words.js');

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

// Each player can have their own active ladder.
const sessions = new Map();

let todaysLadder =
    wordLadders.medium[
        Math.floor(Math.random() * wordLadders.medium.length)
    ];

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

function getDifficultyLabel(difficulty) {
    if (difficulty === 'easy') return 'Easy';
    if (difficulty === 'medium') return 'Medium';
    return 'Hard';
}

function generateWordLadder(difficulty) {
    const group = wordLadders[difficulty];

    return group[
        Math.floor(Math.random() * group.length)
    ];
}

function setTodaysLadder(ladder) {
    todaysLadder = ladder;
}

function makeSessionId(userId, mode) {
    return `${userId}_${mode}`;
}

function isApprovedWord(word) {
    return approvedWords.has(word.toLowerCase());
}

function countDifferentLetters(word1, word2) {
    if (word1.length !== word2.length) {
        return Infinity;
    }

    let differences = 0;

    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            differences++;
        }
    }

    return differences;
}

function ladderDisplay(session) {
    return session.words
        .map(word => word.toUpperCase())
        .join(' → ');
}

function buildGameText(session, message = '') {
    let text =
        `🧩 **${session.title}**\n\n` +
        `Start: **${session.start.toUpperCase()}**\n` +
        `Target: **${session.end.toUpperCase()}**\n`;

    if (session.difficulty) {
        text +=
            `Difficulty: **${getDifficultyLabel(session.difficulty)}**\n`;
    }

    text +=
        `\n**Your ladder:**\n` +
        `${ladderDisplay(session)}\n\n`;

    if (message) {
        text += `${message}\n\n`;
    }

    text +=
        `Change **exactly one letter** each move.\n` +
        `Every entry must be a recognised word.`;

    return text;
}

function gameButtons(sessionId) {
    return [
        new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId(`wl_next_${sessionId}`)
                .setLabel('Enter Next Word')
                .setStyle(ButtonStyle.Primary)
        )
    ];
}

function createSession(userId, mode, ladder, difficulty = null) {
    const sessionId = makeSessionId(userId, mode);

    const session = {
        id: sessionId,
        userId,
        mode,
        difficulty,
        title:
            mode === 'daily'
                ? 'Daily Word Ladder'
                : `${getDifficultyLabel(difficulty)} Word Ladder`,
        start: ladder.start.toLowerCase(),
        end: ladder.end.toLowerCase(),
        words: [ladder.start.toLowerCase()]
    };

    sessions.set(sessionId, session);

    return session;
}

// ─────────────────────────────────────────────
// START DAILY
// ─────────────────────────────────────────────

async function startDaily(interaction) {
    const session = createSession(
        interaction.user.id,
        'daily',
        todaysLadder
    );

    await interaction.reply({
        content: buildGameText(session),
        components: gameButtons(session.id)
    });
}

// ─────────────────────────────────────────────
// START CONTINUOUS
// ─────────────────────────────────────────────

async function startContinuous(interaction) {
    await interaction.reply({
        content:
            `🧩 **Word Ladder**\n\n` +
            `Choose your difficulty.`,
        components: [
            new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('wl_diff_easy')
                    .setLabel('Easy')
                    .setStyle(ButtonStyle.Success),

                new ButtonBuilder()
                    .setCustomId('wl_diff_medium')
                    .setLabel('Medium')
                    .setStyle(ButtonStyle.Primary),

                new ButtonBuilder()
                    .setCustomId('wl_diff_hard')
                    .setLabel('Hard')
                    .setStyle(ButtonStyle.Danger)
            )
        ]
    });
}

// ─────────────────────────────────────────────
// HANDLE INTERACTIONS
// ─────────────────────────────────────────────

async function handleInteraction(interaction) {

    // ─────────────────────────────────────────
    // DIFFICULTY BUTTON
    // ─────────────────────────────────────────

    if (
        interaction.isButton() &&
        interaction.customId.startsWith('wl_diff_')
    ) {
        const difficulty =
            interaction.customId.replace('wl_diff_', '');

        const ladder =
            generateWordLadder(difficulty);

        const session =
            createSession(
                interaction.user.id,
                `continuous_${difficulty}`,
                ladder,
                difficulty
            );

        await interaction.reply({
            content: buildGameText(session),
            components: gameButtons(session.id)
        });

        return;
    }

    // ─────────────────────────────────────────
    // ENTER NEXT WORD BUTTON
    // ─────────────────────────────────────────

    if (
        interaction.isButton() &&
        interaction.customId.startsWith('wl_next_')
    ) {
        const sessionId =
            interaction.customId.replace('wl_next_', '');

        const session =
            sessions.get(sessionId);

        if (!session) {
            await interaction.reply({
                content:
                    '⚠️ This Word Ladder is no longer active.',
                ephemeral: true
            });

            return;
        }

        if (session.userId !== interaction.user.id) {
            await interaction.reply({
                content:
                    '⚠️ This Word Ladder belongs to another player.',
                ephemeral: true
            });

            return;
        }

        const currentWord =
            session.words[session.words.length - 1];

        const modal =
            new ModalBuilder()
                .setCustomId(`wl_modal_${sessionId}`)
                .setTitle('Enter Next Word');

        const input =
            new TextInputBuilder()
                .setCustomId('wl_word')
                .setLabel(
                    `Change one letter in ${currentWord.toUpperCase()}`
                )
                .setStyle(TextInputStyle.Short)
                .setRequired(true)
                .setMaxLength(session.start.length);

        modal.addComponents(
            new ActionRowBuilder().addComponents(input)
        );

        await interaction.showModal(modal);

        return;
    }

    // ─────────────────────────────────────────
    // WORD SUBMISSION
    // ─────────────────────────────────────────

    if (
        interaction.isModalSubmit() &&
        interaction.customId.startsWith('wl_modal_')
    ) {
        const sessionId =
            interaction.customId.replace('wl_modal_', '');

        const session =
            sessions.get(sessionId);

        if (!session) {
            await interaction.reply({
                content:
                    '⚠️ This Word Ladder is no longer active.',
                ephemeral: true
            });

            return;
        }

        if (session.userId !== interaction.user.id) {
            await interaction.reply({
                content:
                    '⚠️ This Word Ladder belongs to another player.',
                ephemeral: true
            });

            return;
        }

        await interaction.deferUpdate();

        const enteredWord =
            interaction.fields
                .getTextInputValue('wl_word')
                .trim()
                .toLowerCase();

        const currentWord =
            session.words[session.words.length - 1];

        // Only letters
        if (!/^[a-z]+$/.test(enteredWord)) {
            await interaction.editReply({
                content: buildGameText(
                    session,
                    '❌ Please enter letters only.'
                ),
                components: gameButtons(session.id)
            });

            return;
        }

        // Correct length
        if (enteredWord.length !== currentWord.length) {
            await interaction.editReply({
                content: buildGameText(
                    session,
                    `❌ Your next word must have ` +
                    `**${currentWord.length} letters**.`
                ),
                components: gameButtons(session.id)
            });

            return;
        }

        // Must actually change one letter
        const differences =
            countDifferentLetters(
                currentWord,
                enteredWord
            );

        if (differences !== 1) {
            await interaction.editReply({
                content: buildGameText(
                    session,
                    differences === 0
                        ? '❌ You need to change one letter.'
                        : '❌ You can change only **one letter** at a time.'
                ),
                components: gameButtons(session.id)
            });

            return;
        }

        // Recognised word
        if (!isApprovedWord(enteredWord)) {
            await interaction.editReply({
                content: buildGameText(
                    session,
                    `❌ **${enteredWord.toUpperCase()}** ` +
                    `isn't in PuzzlePilot's word list. Try another word.`
                ),
                components: gameButtons(session.id)
            });

            return;
        }

        // Do not reuse a word
        if (session.words.includes(enteredWord)) {
            await interaction.editReply({
                content: buildGameText(
                    session,
                    `❌ You've already used ` +
                    `**${enteredWord.toUpperCase()}**.`
                ),
                components: gameButtons(session.id)
            });

            return;
        }

        // Valid move
        session.words.push(enteredWord);

        // ─────────────────────────────────────
        // SOLVED
        // ─────────────────────────────────────

        if (enteredWord === session.end) {
            const moves =
                session.words.length - 1;

            sessions.delete(sessionId);

            await interaction.editReply({
                content:
                    `🎉 **Word Ladder solved!**\n\n` +
                    `${ladderDisplay(session)}\n\n` +
                    `You reached **${session.end.toUpperCase()}** ` +
                    `in **${moves} ${moves === 1 ? 'move' : 'moves'}**!`,
                components: []
            });

            return;
        }

        // Continue game
        await interaction.editReply({
            content: buildGameText(
                session,
                `✅ **${enteredWord.toUpperCase()}** accepted!`
            ),
            components: gameButtons(session.id)
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
