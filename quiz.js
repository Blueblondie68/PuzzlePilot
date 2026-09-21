// quiz.js
// PuzzlePilot Quiz
// Daily Quiz engine
//
// Daily Quiz rules:
// - 10 questions
// - Same Daily Quiz on every server
// - Daily Quiz resets at midnight UK time
// - Four multiple-choice answers
// - Answer positions are shuffled
// - First answer clicked is final
// - 15 seconds to answer each question
// - Correct answer is shown after every question
// - Result is shown for 3 seconds
// - Next question appears automatically
// - Unanswered questions count as wrong
// - Final score is shown automatically after question 10
// - Each player may complete the Daily Quiz once per server per day
//
// Persistent data is stored in PostgreSQL / Neon:
// - Today's 10 question IDs are saved globally
// - Question-use history is saved globally
// - Player completion data is saved separately for each server
// - Player scores are saved for future statistics / leaderboards
// - Restarting or redeploying PuzzlePilot does not create a new Daily Quiz

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require('discord.js');

const { Pool } = require('pg');

const quizPack1 =
    require('./quiz_pack1.js');

// ─────────────────────────────────────────────
// SETTINGS
// ─────────────────────────────────────────────

const DAILY_QUESTION_COUNT = 10;

const QUESTION_TIME_LIMIT =
    15 * 1000;

const RESULT_DISPLAY_TIME =
    3 * 1000;

// ─────────────────────────────────────────────
// QUESTION BANK
// ─────────────────────────────────────────────

const questionBank = [
    ...quizPack1
];

console.log(
    `Quiz question bank loaded: ` +
    `${questionBank.length} questions`
);

// ─────────────────────────────────────────────
// DATABASE
// ─────────────────────────────────────────────

if (!process.env.DATABASE_URL) {
    console.error(
        'DATABASE_URL is missing. ' +
        'The Daily Quiz database cannot start.'
    );
}

const pool = new Pool({
    connectionString:
        process.env.DATABASE_URL
});

// Keep database setup in one promise.
//
// startDaily waits for this before doing anything,
// so the tables will exist before the first player
// starts the Daily Quiz.

const databaseReady =
    initialiseDatabase();

// ─────────────────────────────────────────────
// DATABASE SETUP
// ─────────────────────────────────────────────

async function initialiseDatabase() {
    if (!process.env.DATABASE_URL) {
        throw new Error(
            'DATABASE_URL has not been set.'
        );
    }

    const client =
        await pool.connect();

    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS quiz_daily (
                quiz_date DATE PRIMARY KEY,
                question_ids JSONB NOT NULL
            )
        `);

        await client.query(`
            CREATE TABLE IF NOT EXISTS quiz_question_history (
                question_id TEXT PRIMARY KEY,
                last_used_date DATE NOT NULL
            )
        `);

        await client.query(`
            CREATE TABLE IF NOT EXISTS quiz_completions (
                guild_id TEXT NOT NULL,
                user_id TEXT NOT NULL,
                completion_date DATE NOT NULL,
                score INTEGER NOT NULL,
                completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                PRIMARY KEY (
                    guild_id,
                    user_id,
                    completion_date
                )
            )
        `);

        console.log(
            'Quiz database ready.'
        );

    } finally {
        client.release();
    }
}

// Make sure a database startup problem is visible
// in Render's logs rather than becoming an
// unhandled promise rejection.

databaseReady.catch(
    error => {
        console.error(
            'Quiz database setup failed:',
            error
        );
    }
);

// ─────────────────────────────────────────────
// ACTIVE SESSIONS
// ─────────────────────────────────────────────
//
// Active games do not need to survive a restart.
//
// Permanent Daily information is stored in Neon.
// If PuzzlePilot restarts halfway through someone's
// quiz, that player can simply start again because
// their completion is only recorded after question 10.

const sessions =
    new Map();

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

function shuffleArray(
    array
) {
    const copy = [
        ...array
    ];

    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {
        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );

        [
            copy[i],
            copy[j]
        ] = [
            copy[j],
            copy[i]
        ];
    }

    return copy;
}

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
        )
            .formatToParts(
                new Date()
            );

    const year =
        parts.find(
            part =>
                part.type ===
                'year'
        ).value;

    const month =
        parts.find(
            part =>
                part.type ===
                'month'
        ).value;

    const day =
        parts.find(
            part =>
                part.type ===
                'day'
        ).value;

    return (
        `${year}-${month}-${day}`
    );
}

function getServerId(
    interaction
) {
    // Daily Quiz is designed for Discord servers.
    //
    // If this is somehow called outside a guild,
    // keep that data isolated rather than mixing it
    // with a real server.

    return (
        interaction.guildId ||
        `DM_${interaction.user.id}`
    );
}

function getEligibleDailyQuestions() {
    return questionBank.filter(
        question =>
            question.dailyEligible !==
            false
    );
}

function getQuestionsFromIds(
    ids
) {
    const questions = [];

    for (
        const id of ids
    ) {
        const question =
            questionBank.find(
                item =>
                    item.id ===
                    id
            );

        if (
            question
        ) {
            questions.push(
                question
            );
        }
    }

    return questions;
}

// ─────────────────────────────────────────────
// DATABASE DATE HELPER
// ─────────────────────────────────────────────
//
// PostgreSQL DATE values can sometimes arrive as
// JavaScript Date objects depending on configuration.
//
// This helper always gives us YYYY-MM-DD.

function databaseDateKey(
    value
) {
    if (!value) {
        return '';
    }

    if (
        typeof value ===
        'string'
    ) {
        return value.slice(
            0,
            10
        );
    }

    if (
        value instanceof Date
    ) {
        const year =
            value.getUTCFullYear();

        const month =
            String(
                value.getUTCMonth() + 1
            ).padStart(
                2,
                '0'
            );

        const day =
            String(
                value.getUTCDate()
            ).padStart(
                2,
                '0'
            );

        return (
            `${year}-${month}-${day}`
        );
    }

    return String(
        value
    ).slice(
        0,
        10
    );
}

// ─────────────────────────────────────────────
// DAILY QUESTION SELECTION
// ─────────────────────────────────────────────
//
// Questions that have never appeared in a Daily
// Quiz are used before previously used questions.
//
// When recycling eventually becomes necessary,
// the questions used longest ago are chosen first.
//
// Ties are shuffled so the same ordering is not
// repeated every time.

async function selectDailyQuestions(
    client,
    dateKey
) {
    const eligible =
        getEligibleDailyQuestions();

    if (
        eligible.length <
        DAILY_QUESTION_COUNT
    ) {
        throw new Error(
            `The Quiz needs at least ` +
            `${DAILY_QUESTION_COUNT} ` +
            `Daily-eligible questions.`
        );
    }

    const historyResult =
        await client.query(`
            SELECT
                question_id,
                last_used_date
            FROM quiz_question_history
        `);

    const history =
        new Map();

    for (
        const row of historyResult.rows
    ) {
        history.set(
            row.question_id,
            databaseDateKey(
                row.last_used_date
            )
        );
    }

    const neverUsed =
        shuffleArray(
            eligible.filter(
                question =>
                    !history.has(
                        question.id
                    )
            )
        );

    let selected =
        neverUsed.slice(
            0,
            DAILY_QUESTION_COUNT
        );

    if (
        selected.length <
        DAILY_QUESTION_COUNT
    ) {
        const selectedIds =
            new Set(
                selected.map(
                    question =>
                        question.id
                )
            );

        const previouslyUsed =
            eligible
                .filter(
                    question =>
                        !selectedIds.has(
                            question.id
                        )
                )
                .map(
                    question => ({
                        question:
                            question,

                        lastUsed:
                            history.get(
                                question.id
                            ) || ''
                    })
                );

        // Shuffle first so questions with exactly
        // the same last-used date do not always win
        // the tie in question-bank order.

        const shuffledPreviouslyUsed =
            shuffleArray(
                previouslyUsed
            );

        shuffledPreviouslyUsed.sort(
            (a, b) =>
                a.lastUsed.localeCompare(
                    b.lastUsed
                )
        );

        const needed =
            DAILY_QUESTION_COUNT -
            selected.length;

        selected.push(
            ...shuffledPreviouslyUsed
                .slice(
                    0,
                    needed
                )
                .map(
                    item =>
                        item.question
                )
        );
    }

    // The final ten are shuffled so question order
    // is not determined by question history.

    selected =
        shuffleArray(
            selected
        );

    // Record the last-used date for every selected
    // question.

    for (
        const question of selected
    ) {
        await client.query(
            `
                INSERT INTO quiz_question_history (
                    question_id,
                    last_used_date
                )
                VALUES ($1, $2)
                ON CONFLICT (question_id)
                DO UPDATE SET
                    last_used_date =
                        EXCLUDED.last_used_date
            `,
            [
                question.id,
                dateKey
            ]
        );
    }

    return selected;
}

// ─────────────────────────────────────────────
// ENSURE TODAY'S DAILY QUIZ
// ─────────────────────────────────────────────
//
// This uses a PostgreSQL advisory lock while today's
// quiz is being checked/created.
//
// That means even if two Discord servers ask for the
// Daily Quiz at almost exactly the same moment, only
// one official set of ten can be created.

async function ensureTodaysQuiz() {
    await databaseReady;

    const dateKey =
        getUKDateKey();

    const client =
        await pool.connect();

    try {
        await client.query(
            'BEGIN'
        );

        // PuzzlePilot Daily Quiz lock.
        //
        // The number itself is simply a fixed lock ID
        // used only while choosing/checking the Daily.

        await client.query(
            'SELECT pg_advisory_xact_lock(74629101)'
        );

        const existingResult =
            await client.query(
                `
                    SELECT question_ids
                    FROM quiz_daily
                    WHERE quiz_date = $1
                `,
                [
                    dateKey
                ]
            );

        if (
            existingResult.rows.length > 0
        ) {
            const savedIds =
                existingResult.rows[0]
                    .question_ids;

            if (
                Array.isArray(
                    savedIds
                ) &&
                savedIds.length ===
                    DAILY_QUESTION_COUNT
            ) {
                const savedQuestions =
                    getQuestionsFromIds(
                        savedIds
                    );

                if (
                    savedQuestions.length ===
                    DAILY_QUESTION_COUNT
                ) {
                    await client.query(
                        'COMMIT'
                    );

                    return {
                        dateKey:
                            dateKey,

                        questions:
                            savedQuestions
                    };
                }
            }

            // This should only happen if a question
            // used in today's saved Daily has later
            // been removed from the question bank.

            console.warn(
                'Saved Daily Quiz contains a question ' +
                'that no longer exists. Rebuilding today\'s quiz.'
            );

            await client.query(
                `
                    DELETE FROM quiz_daily
                    WHERE quiz_date = $1
                `,
                [
                    dateKey
                ]
            );
        }

        const selected =
            await selectDailyQuestions(
                client,
                dateKey
            );

        const questionIds =
            selected.map(
                question =>
                    question.id
            );

        await client.query(
            `
                INSERT INTO quiz_daily (
                    quiz_date,
                    question_ids
                )
                VALUES ($1, $2::jsonb)
            `,
            [
                dateKey,
                JSON.stringify(
                    questionIds
                )
            ]
        );

        await client.query(
            'COMMIT'
        );

        console.log(
            `Daily Quiz selected for ` +
            `${dateKey}`
        );

        return {
            dateKey:
                dateKey,

            questions:
                selected
        };

    } catch (
        error
    ) {
        try {
            await client.query(
                'ROLLBACK'
            );
        } catch (
            rollbackError
        ) {
            console.error(
                'Quiz database rollback failed:',
                rollbackError
            );
        }

        throw error;

    } finally {
        client.release();
    }
}

// ─────────────────────────────────────────────
// COMPLETION CHECK
// ─────────────────────────────────────────────

async function hasCompletedDaily(
    serverId,
    userId,
    dateKey
) {
    await databaseReady;

    const result =
        await pool.query(
            `
                SELECT 1
                FROM quiz_completions
                WHERE guild_id = $1
                  AND user_id = $2
                  AND completion_date = $3
                LIMIT 1
            `,
            [
                serverId,
                userId,
                dateKey
            ]
        );

    return (
        result.rows.length > 0
    );
}

// ─────────────────────────────────────────────
// SAVE COMPLETION
// ─────────────────────────────────────────────

async function saveCompletion(
    session
) {
    await databaseReady;

    await pool.query(
        `
            INSERT INTO quiz_completions (
                guild_id,
                user_id,
                completion_date,
                score
            )
            VALUES ($1, $2, $3, $4)
            ON CONFLICT (
                guild_id,
                user_id,
                completion_date
            )
            DO NOTHING
        `,
        [
            session.serverId,
            session.userId,
            session.dateKey,
            session.score
        ]
    );
}

// ─────────────────────────────────────────────
// SESSION HELPERS
// ─────────────────────────────────────────────

function makeSessionId(
    serverId,
    userId
) {
    return (
        `${serverId}_` +
        `${userId}_` +
        `daily_quiz`
    );
}

function makeAnswerId(
    sessionId,
    answerIndex
) {
    return (
        `quiz_answer_` +
        `${answerIndex}_` +
        `${sessionId}`
    );
}

function getCurrentQuestion(
    session
) {
    return session.questions[
        session.questionIndex
    ];
}

function questionHeading(
    session
) {
    return (
        `🧠 **Daily Quiz**\n\n` +
        `**Question ` +
        `${session.questionIndex + 1}` +
        ` of ` +
        `${session.questions.length}**`
    );
}

function buildQuestionText(
    session
) {
    const question =
        getCurrentQuestion(
            session
        );

    return (
        `${questionHeading(session)}\n\n` +
        `⏱️ You have **15 seconds** to answer.\n` +
        `Your first answer is final.\n\n` +
        `${question.question}`
    );
}

function progressMessage(
    session
) {
    if (
        session.questionIndex >=
        session.questions.length - 1
    ) {
        return (
            `Final score in 3 seconds...`
        );
    }

    return (
        `Next question in 3 seconds...`
    );
}

// ─────────────────────────────────────────────
// ANSWER BUTTONS
// ─────────────────────────────────────────────

function buildAnswerButtons(
    session
) {
    const answers =
        session.shuffledAnswers;

    const rows = [];

    for (
        let rowStart = 0;
        rowStart < answers.length;
        rowStart += 2
    ) {
        const row =
            new ActionRowBuilder();

        const rowAnswers =
            answers.slice(
                rowStart,
                rowStart + 2
            );

        row.addComponents(
            rowAnswers.map(
                (
                    answer,
                    offset
                ) => {
                    const answerIndex =
                        rowStart +
                        offset;

                    return (
                        new ButtonBuilder()
                            .setCustomId(
                                makeAnswerId(
                                    session.id,
                                    answerIndex
                                )
                            )
                            .setLabel(
                                answer
                            )
                            .setStyle(
                                ButtonStyle.Primary
                            )
                    );
                }
            )
        );

        rows.push(
            row
        );
    }

    return rows;
}

function buildLockedAnswerButtons(
    session,
    selectedAnswer = null
) {
    const question =
        getCurrentQuestion(
            session
        );

    const answers =
        session.shuffledAnswers;

    const rows = [];

    for (
        let rowStart = 0;
        rowStart < answers.length;
        rowStart += 2
    ) {
        const row =
            new ActionRowBuilder();

        const rowAnswers =
            answers.slice(
                rowStart,
                rowStart + 2
            );

        row.addComponents(
            rowAnswers.map(
                (
                    answer,
                    offset
                ) => {
                    const answerIndex =
                        rowStart +
                        offset;

                    let style =
                        ButtonStyle.Secondary;

                    if (
                        answer ===
                        question.correctAnswer
                    ) {
                        style =
                            ButtonStyle.Success;

                    } else if (
                        selectedAnswer &&
                        answer ===
                            selectedAnswer
                    ) {
                        style =
                            ButtonStyle.Danger;
                    }

                    return (
                        new ButtonBuilder()
                            .setCustomId(
                                `quiz_locked_` +
                                `${answerIndex}_` +
                                `${session.id}`
                            )
                            .setLabel(
                                answer
                            )
                            .setStyle(
                                style
                            )
                            .setDisabled(
                                true
                            )
                    );
                }
            )
        );

        rows.push(
            row
        );
    }

    return rows;
}

// ─────────────────────────────────────────────
// TIMERS
// ─────────────────────────────────────────────

function clearQuestionTimer(
    session
) {
    if (
        session.questionTimer
    ) {
        clearTimeout(
            session.questionTimer
        );

        session.questionTimer =
            null;
    }
}

function clearResultTimer(
    session
) {
    if (
        session.resultTimer
    ) {
        clearTimeout(
            session.resultTimer
        );

        session.resultTimer =
            null;
    }
}

function clearAllTimers(
    session
) {
    clearQuestionTimer(
        session
    );

    clearResultTimer(
        session
    );
}

function prepareQuestion(
    session
) {
    clearAllTimers(
        session
    );

    session.answered =
        false;

    session.shuffledAnswers =
        shuffleArray(
            getCurrentQuestion(
                session
            ).answers
        );

    // Each displayed question receives a token.
    // Old timers cannot interfere with a newer
    // question.

    session.questionToken++;
}

// ─────────────────────────────────────────────
// FINAL SCORE
// ─────────────────────────────────────────────

function finalScoreText(
    session
) {
    return (
        `🎉 **Daily Quiz complete!**\n\n` +
        `You scored ` +
        `**${session.score}/` +
        `${session.questions.length}**.\n\n` +
        `Come back after midnight ` +
        `UK time for a new Daily Quiz!`
    );
}

async function finishDailyQuiz(
    interaction,
    session
) {
    const liveSession =
        sessions.get(
            session.id
        );

    if (
        !liveSession ||
        liveSession !==
            session
    ) {
        return;
    }

    clearAllTimers(
        session
    );

    // Save completion to Neon before removing the
    // active session. This is the important bit that
    // survives a Render restart or redeploy.

    try {
        await saveCompletion(
            session
        );

    } catch (
        error
    ) {
        console.error(
            'Quiz completion save failed:',
            error
        );

        // Do not pretend the completion was safely
        // stored if the database could not save it.
        //
        // Leave the session active so the problem is
        // visible rather than silently losing data.

        try {
            await interaction.editReply({
                content:
                    `⚠️ **Your quiz finished, but ` +
                    `PuzzlePilot couldn't save the result.**\n\n` +
                    `Please try again once the database ` +
                    `connection has been checked.`,
                components:
                    []
            });

        } catch (
            editError
        ) {
            console.error(
                'Quiz database error message failed:',
                editError
            );
        }

        return;
    }

    sessions.delete(
        session.id
    );

    try {
        await interaction.editReply({
            content:
                finalScoreText(
                    session
                ),
            components:
                []
        });

    } catch (
        error
    ) {
        console.error(
            'Quiz final score update failed:',
            error
        );
    }
}

// ─────────────────────────────────────────────
// AUTOMATIC PROGRESSION
// ─────────────────────────────────────────────

function scheduleNextQuestion(
    interaction,
    session,
    questionToken
) {
    clearResultTimer(
        session
    );

    session.resultTimer =
        setTimeout(
            async () => {

                const liveSession =
                    sessions.get(
                        session.id
                    );

                if (
                    !liveSession ||
                    liveSession !==
                        session
                ) {
                    return;
                }

                if (
                    session.questionToken !==
                    questionToken
                ) {
                    return;
                }

                session.resultTimer =
                    null;

                if (
                    session.questionIndex >=
                    session.questions.length - 1
                ) {
                    await finishDailyQuiz(
                        interaction,
                        session
                    );

                    return;
                }

                session.questionIndex++;

                await showQuestion(
                    interaction,
                    session
                );

            },
            RESULT_DISPLAY_TIME
        );
}

// ─────────────────────────────────────────────
// QUESTION TIMER
// ─────────────────────────────────────────────

function startQuestionTimer(
    session,
    interaction
) {
    clearQuestionTimer(
        session
    );

    const questionToken =
        session.questionToken;

    session.questionTimer =
        setTimeout(
            async () => {

                const liveSession =
                    sessions.get(
                        session.id
                    );

                if (
                    !liveSession ||
                    liveSession !==
                        session
                ) {
                    return;
                }

                if (
                    session.questionToken !==
                    questionToken
                ) {
                    return;
                }

                if (
                    session.answered
                ) {
                    return;
                }

                // Lock before awaiting anything.
                // A late click cannot sneak through.

                session.answered =
                    true;

                session.questionTimer =
                    null;

                const question =
                    getCurrentQuestion(
                        session
                    );

                const lockedRows =
                    buildLockedAnswerButtons(
                        session
                    );

                try {
                    await interaction.editReply({
                        content:
                            `${questionHeading(
                                session
                            )}\n\n` +
                            `${question.question}\n\n` +
                            `⏰ **Time's up!**\n\n` +
                            `The correct answer was ` +
                            `**${question.correctAnswer}**.\n\n` +
                            `${progressMessage(
                                session
                            )}`,
                        components:
                            lockedRows
                    });

                    scheduleNextQuestion(
                        interaction,
                        session,
                        questionToken
                    );

                } catch (
                    error
                ) {
                    console.error(
                        'Quiz timer update failed:',
                        error
                    );
                }

            },
            QUESTION_TIME_LIMIT
        );
}

// ─────────────────────────────────────────────
// SHOW QUESTION
// ─────────────────────────────────────────────

async function showQuestion(
    interaction,
    session
) {
    prepareQuestion(
        session
    );

    await interaction.editReply({
        content:
            buildQuestionText(
                session
            ),
        components:
            buildAnswerButtons(
                session
            )
    });

    startQuestionTimer(
        session,
        interaction
    );
}

// ─────────────────────────────────────────────
// START DAILY QUIZ
// ─────────────────────────────────────────────

async function startDaily(
    interaction
) {
    // Database work can take a moment, especially
    // if Neon's free database has been idle.
    //
    // Acknowledge the Discord interaction immediately
    // so Discord does not report that PuzzlePilot
    // failed to respond.

    await interaction.deferReply();

    try {
        const daily =
            await ensureTodaysQuiz();

        const userId =
            interaction.user.id;

        const serverId =
            getServerId(
                interaction
            );

        const dateKey =
            daily.dateKey;

        const completed =
            await hasCompletedDaily(
                serverId,
                userId,
                dateKey
            );

        if (
            completed
        ) {
            await interaction.editReply({
                content:
                    `🧠 You've already completed ` +
                    `today's Daily Quiz on this server.\n\n` +
                    `Come back after midnight ` +
                    `UK time for a new one!`,
                components:
                    []
            });

            return;
        }

        const sessionId =
            makeSessionId(
                serverId,
                userId
            );

        const existingSession =
            sessions.get(
                sessionId
            );

        if (
            existingSession
        ) {
            await interaction.editReply({
                content:
                    `🧠 You already have today's ` +
                    `Daily Quiz in progress.`,
                components:
                    []
            });

            return;
        }

        const session = {
            id:
                sessionId,

            serverId:
                serverId,

            userId:
                userId,

            dateKey:
                dateKey,

            questions:
                daily.questions,

            questionIndex:
                0,

            score:
                0,

            answered:
                false,

            shuffledAnswers:
                [],

            questionTimer:
                null,

            resultTimer:
                null,

            questionToken:
                0
        };

        sessions.set(
            sessionId,
            session
        );

        prepareQuestion(
            session
        );

        await interaction.editReply({
            content:
                buildQuestionText(
                    session
                ),
            components:
                buildAnswerButtons(
                    session
                )
        });

        startQuestionTimer(
            session,
            interaction
        );

    } catch (
        error
    ) {
        console.error(
            'Daily Quiz start failed:',
            error
        );

        try {
            await interaction.editReply({
                content:
                    `⚠️ PuzzlePilot couldn't open ` +
                    `today's Daily Quiz.\n\n` +
                    `The database connection needs ` +
                    `to be checked.`,
                components:
                    []
            });

        } catch (
            replyError
        ) {
            console.error(
                'Daily Quiz error reply failed:',
                replyError
            );
        }
    }
}

// ─────────────────────────────────────────────
// HANDLE ANSWER
// ─────────────────────────────────────────────

async function handleAnswer(
    interaction
) {
    const prefix =
        'quiz_answer_';

    const remainder =
        interaction.customId.slice(
            prefix.length
        );

    const separator =
        remainder.indexOf(
            '_'
        );

    if (
        separator === -1
    ) {
        return;
    }

    const answerIndex =
        Number(
            remainder.slice(
                0,
                separator
            )
        );

    const sessionId =
        remainder.slice(
            separator + 1
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
                '⚠️ This Daily Quiz is no longer active.',
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
                '⚠️ This Daily Quiz belongs to another player.',
            ephemeral:
                true
        });

        return;
    }

    if (
        session.serverId !==
        getServerId(
            interaction
        )
    ) {
        await interaction.reply({
            content:
                '⚠️ This Daily Quiz belongs to another server.',
            ephemeral:
                true
        });

        return;
    }

    // First accepted click wins.
    // Lock before any await.

    if (
        session.answered
    ) {
        await interaction.reply({
            content:
                '⚠️ Your answer is already locked in.',
            ephemeral:
                true
        });

        return;
    }

    if (
        !Number.isInteger(
            answerIndex
        ) ||
        answerIndex < 0 ||
        answerIndex >=
            session.shuffledAnswers.length
    ) {
        await interaction.reply({
            content:
                '⚠️ That answer is not valid.',
            ephemeral:
                true
        });

        return;
    }

    session.answered =
        true;

    clearQuestionTimer(
        session
    );

    const questionToken =
        session.questionToken;

    const question =
        getCurrentQuestion(
            session
        );

    const selectedAnswer =
        session.shuffledAnswers[
            answerIndex
        ];

    const correct =
        selectedAnswer ===
        question.correctAnswer;

    if (
        correct
    ) {
        session.score++;
    }

    await interaction.deferUpdate();

    const lockedRows =
        buildLockedAnswerButtons(
            session,
            selectedAnswer
        );

    let resultText;

    if (
        correct
    ) {
        resultText =
            `${questionHeading(
                session
            )}\n\n` +
            `${question.question}\n\n` +
            `✅ **Correct!**\n\n` +
            `The answer is ` +
            `**${question.correctAnswer}**.\n\n` +
            `${progressMessage(
                session
            )}`;

    } else {
        resultText =
            `${questionHeading(
                session
            )}\n\n` +
            `${question.question}\n\n` +
            `❌ **Wrong!**\n\n` +
            `You chose ` +
            `**${selectedAnswer}**.\n` +
            `The correct answer was ` +
            `**${question.correctAnswer}**.\n\n` +
            `${progressMessage(
                session
            )}`;
    }

    await interaction.editReply({
        content:
            resultText,
        components:
            lockedRows
    });

    scheduleNextQuestion(
        interaction,
        session,
        questionToken
    );
}

// ─────────────────────────────────────────────
// MAIN INTERACTION HANDLER
// ─────────────────────────────────────────────

async function handleInteraction(
    interaction
) {
    if (
        interaction.isButton() &&
        interaction.customId.startsWith(
            'quiz_answer_'
        )
    ) {
        await handleAnswer(
            interaction
        );

        return;
    }
}

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    startDaily,
    handleInteraction
};
