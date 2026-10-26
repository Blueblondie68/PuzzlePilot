// crossword.js
// PuzzlePilot Crossword controller: Daily, Continuous, sessions and interactions.
// Puzzle logic: crossword_engine.js
// Puzzle bank: crossword_bank.js
// Discord presentation: crossword_display.js

const {
    ActionRowBuilder, MessageFlags, ModalBuilder,
    TextInputBuilder, TextInputStyle
} = require('discord.js');

const { getDatabaseClient } = require('./quiz_database');
const {
    cleanAnswer, createPlayerGrid, findClue, writeAnswer, clearAnswer,
    countIncorrectLetters, countEmptyCells, isPuzzleComplete, revealSolution
} = require('./crossword_engine');
const { getUKDateParts, getDailyPuzzle, getRandomPuzzle } = require('./crossword_bank');
const { buildCrosswordDisplay } = require('./crossword_display');

let lastContinuousPuzzleId = null;
const sessions = new Map();
const dailySessions = new Map();

// Daily completions use their own PostgreSQL table, not quiz results.
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

function dailySessionKey(serverId, userId, dateKey) {
    return `${serverId}:${userId}:${dateKey}`;
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

async function finishCrosswordIfComplete(session) {
    if (!isPuzzleComplete(session)) return false;
    // Save before marking complete so failures do not permit extra daily games.
    await saveCrosswordCompletion(session);
    session.completed = true;
    if (session.mode === 'daily') {
        dailySessions.delete(dailySessionKey(
            session.serverId, session.userId, session.dateKey
        ));
    }
    return true;
}

function createSessionId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function createSession(userId, mode, puzzle) {
    const id = createSessionId();
    const session = {
        id, userId, mode, puzzle,
        grid: createPlayerGrid(puzzle),
        selectedClueId: null,
        completed: false,
        gaveUp: false,
        startedAt: Date.now(),
        serverId: null,
        dateKey: null,
        completionSaved: false
    };
    sessions.set(id, session);
    return session;
}

async function verifyPlayer(interaction, session) {
    if (!session) {
        await interaction.reply({
            content: 'This crossword session has expired. Please start a new crossword.',
            flags: MessageFlags.Ephemeral
        });
        return false;
    }
    if (interaction.user.id !== session.userId) {
        await interaction.reply({
            content: 'This is somebody else’s crossword. Start your own game from the daily menu.',
            flags: MessageFlags.Ephemeral
        });
        return false;
    }
    return true;
}

// Start Daily Crossword, retaining UK date and database restrictions.
async function startDaily(interaction) {
    await interaction.deferReply();
    const serverId = crosswordServerId(interaction);
    const userId = interaction.user.id;
    const dateKey = crosswordDateKey();
    const key = dailySessionKey(serverId, userId, dateKey);

    try {
        if (await hasCrosswordCompletion(serverId, userId, dateKey)) {
            await interaction.editReply({
                content: '🧩 You have already completed today’s Daily Crossword. Come back after midnight UK time!',
                components: []
            });
            return;
        }
        if (dailySessions.has(key)) {
            await interaction.editReply({
                content: '🧩 You already have today’s Daily Crossword in progress. Please return to that game.',
                components: []
            });
            return;
        }

        const session = createSession(userId, 'daily', getDailyPuzzle());
        session.serverId = serverId;
        session.dateKey = dateKey;
        dailySessions.set(key, session.id);
        try {
            await interaction.editReply(await buildCrosswordDisplay(session));
        } catch (error) {
            dailySessions.delete(key);
            sessions.delete(session.id);
            throw error;
        }
    } catch (error) {
        console.error('Daily Crossword start failed:', error);
        await interaction.editReply({
            content: '⚠️ The Daily Crossword could not be opened. Please check the Render logs and database connection.',
            components: []
        });
    }
}

async function startContinuous(interaction) {
    const puzzle = getRandomPuzzle(lastContinuousPuzzleId);
    lastContinuousPuzzleId = puzzle.id;
    const session = createSession(interaction.user.id, 'continuous', puzzle);
    const display = await buildCrosswordDisplay(session);
    await interaction.reply(display);
}

async function updateDisplay(interaction, session) {
    const display = await buildCrosswordDisplay(session);
    await interaction.editReply(display);
}

// Handle clue dropdown, answer modal, Check/Clear/Give Up and Play Again.
async function handleInteraction(interaction) {
    if (interaction.isStringSelectMenu() && interaction.customId.startsWith('cw_select_')) {
        const sessionId = interaction.customId.replace('cw_select_', '');
        const session = sessions.get(sessionId);
        if (!await verifyPlayer(interaction, session)) return;
        session.selectedClueId = interaction.values[0];
        await interaction.deferUpdate();
        await updateDisplay(interaction, session);
        return;
    }

    if (interaction.isButton() && interaction.customId.startsWith('cw_enter_')) {
        const sessionId = interaction.customId.replace('cw_enter_', '');
        const session = sessions.get(sessionId);
        if (!await verifyPlayer(interaction, session)) return;
        const clue = findClue(session.puzzle, session.selectedClueId);
        if (!clue) {
            await interaction.reply({
                content: 'Please choose a clue first.',
                flags: MessageFlags.Ephemeral
            });
            return;
        }
        const modal = new ModalBuilder()
            .setCustomId(`cw_modal_${session.id}_${clue.id}`)
            .setTitle(`Answer ${clue.number} ${clue.direction === 'across' ? 'Across' : 'Down'}`);
        const input = new TextInputBuilder()
            .setCustomId('cw_answer_input')
            .setLabel(`${clue.answer.length} letters`)
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            .setMaxLength(clue.answer.length)
            .setPlaceholder('Type the complete answer');
        modal.addComponents(new ActionRowBuilder().addComponents(input));
        await interaction.showModal(modal);
        return;
    }

    if (interaction.isModalSubmit() && interaction.customId.startsWith('cw_modal_')) {
        const rest = interaction.customId.replace('cw_modal_', '');
        const lastUnderscore = rest.lastIndexOf('_');
        const sessionId = rest.slice(0, lastUnderscore);
        const clueId = rest.slice(lastUnderscore + 1);
        const session = sessions.get(sessionId);
        if (!await verifyPlayer(interaction, session)) return;
        const clue = findClue(session.puzzle, clueId);
        if (!clue) {
            await interaction.reply({
                content: 'That clue could not be found.',
                flags: MessageFlags.Ephemeral
            });
            return;
        }
        const answer = interaction.fields.getTextInputValue('cw_answer_input');
        const cleaned = cleanAnswer(answer);
        if (cleaned.length !== clue.answer.length) {
            await interaction.reply({
                content: `That answer needs ${clue.answer.length} letters.`,
                flags: MessageFlags.Ephemeral
            });
            return;
        }
        writeAnswer(session, clue, cleaned);
        await interaction.deferUpdate();
        try {
            await finishCrosswordIfComplete(session);
        } catch (error) {
            console.error('Crossword completion save failed:', error);
            await interaction.followUp({
                content: '⚠️ Your answer was entered, but the completion could not be saved. Please try Check again.',
                flags: MessageFlags.Ephemeral
            });
            return;
        }
        await updateDisplay(interaction, session);
        return;
    }

    if (interaction.isButton() && interaction.customId.startsWith('cw_clear_')) {
        const sessionId = interaction.customId.replace('cw_clear_', '');
        const session = sessions.get(sessionId);
        if (!await verifyPlayer(interaction, session)) return;
        const clue = findClue(session.puzzle, session.selectedClueId);
        if (!clue) {
            await interaction.reply({
                content: 'Please choose a clue first.',
                flags: MessageFlags.Ephemeral
            });
            return;
        }
        clearAnswer(session, clue);
        await interaction.deferUpdate();
        await updateDisplay(interaction, session);
        return;
    }

    if (interaction.isButton() && interaction.customId.startsWith('cw_check_')) {
        const sessionId = interaction.customId.replace('cw_check_', '');
        const session = sessions.get(sessionId);
        if (!await verifyPlayer(interaction, session)) return;
        const incorrect = countIncorrectLetters(session);
        const empty = countEmptyCells(session);
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
        await updateDisplay(interaction, session);
        await interaction.followUp({
            content: session.completed
                ? '🎉 Well done! You have completed the crossword!'
                : `Check complete: ${incorrect} incorrect letters and ${empty} empty squares.`,
            flags: MessageFlags.Ephemeral
        });
        return;
    }

    if (interaction.isButton() && interaction.customId.startsWith('cw_giveup_')) {
        const sessionId = interaction.customId.replace('cw_giveup_', '');
        const session = sessions.get(sessionId);
        if (!await verifyPlayer(interaction, session)) return;
        revealSolution(session);
        session.gaveUp = true;
        await interaction.deferUpdate();
        await updateDisplay(interaction, session);
        return;
    }

    if (interaction.isButton() && interaction.customId.startsWith('cw_again_')) {
        const sessionId = interaction.customId.replace('cw_again_', '');
        const oldSession = sessions.get(sessionId);
        if (!await verifyPlayer(interaction, oldSession)) return;
        if (oldSession.mode !== 'continuous') {
            await interaction.reply({
                content: 'Play Again is only available for continuous crosswords.',
                flags: MessageFlags.Ephemeral
            });
            return;
        }
        const puzzle = getRandomPuzzle(oldSession.puzzle.id);
        lastContinuousPuzzleId = puzzle.id;
        sessions.delete(sessionId);
        const session = createSession(interaction.user.id, 'continuous', puzzle);
        await interaction.deferUpdate();
        await updateDisplay(interaction, session);
        return;
    }
}

async function startCrossword(interaction, mode = 'daily') {
    if (mode === 'continuous') return startContinuous(interaction);
    return startDaily(interaction);
}

module.exports = {
    startDaily,
    startContinuous,
    startCrossword,
    handleInteraction
};
