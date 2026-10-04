// quiz.js
// PuzzlePilot Quiz
// Daily Quiz engine
//
// Daily Quiz rules:
// - 10 questions
// - Same Daily Quiz on every server
// - Daily Quiz resets at midnight UK time
// - Categories are balanced before individual questions are chosen
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
// Persistent data is stored in PostgreSQL / Neon.

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ContainerBuilder,
    MessageFlags,
    SeparatorBuilder,
    TextDisplayBuilder
} = require('discord.js');

const { Pool } = require('pg');

// ─────────────────────────────────────────────
// QUESTION PACKS
// ─────────────────────────────────────────────
// Keep the currently-live Packs 1-17 while the new
// selection system and new display are tested.

const quizPacks = [
    require('./quiz_pack1.js'),
    require('./quiz_pack2.js'),
    require('./quiz_pack3.js'),
    require('./quiz_pack4.js'),
    require('./quiz_pack5.js'),
    require('./quiz_pack6.js'),
    require('./quiz_pack7.js'),
    require('./quiz_pack8.js'),
    require('./quiz_pack9.js'),
    require('./quiz_pack10.js'),
    require('./quiz_pack11.js'),
    require('./quiz_pack12.js'),
    require('./quiz_pack13.js'),
    require('./quiz_pack14.js'),
    require('./quiz_pack15.js'),
    require('./quiz_pack16.js'),
    require('./quiz_pack17.js')
];

const questionBank = quizPacks.flat();

console.log(
    `Quiz question bank loaded: ${questionBank.length} questions`
);

// ─────────────────────────────────────────────
// SETTINGS
// ─────────────────────────────────────────────

const DAILY_QUESTION_COUNT = 10;
const QUESTION_TIME_LIMIT = 15 * 1000;
const RESULT_DISPLAY_TIME = 3 * 1000;

const QUIZ_ACCENT = 0x8B5CF6;
const SUCCESS_ACCENT = 0x57F287;
const WRONG_ACCENT = 0xED4245;
const TIMEOUT_ACCENT = 0xFEE75C;

// ─────────────────────────────────────────────
// DATABASE
// ─────────────────────────────────────────────

if (!process.env.DATABASE_URL) {
    console.error(
        'DATABASE_URL is missing. The Daily Quiz database cannot start.'
    );
}

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

const databaseReady = initialiseDatabase();

async function initialiseDatabase() {
    if (!process.env.DATABASE_URL) {
        throw new Error(
            'DATABASE_URL has not been set.'
        );
    }

    const client = await pool.connect();

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

const sessions = new Map();

// ─────────────────────────────────────────────
// GENERAL HELPERS
// ─────────────────────────────────────────────

function shuffleArray(array) {
    const copy = [...array];

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

    return `${year}-${month}-${day}`;
}

function getServerId(
    interaction
) {
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
    const byId =
        new Map(
            questionBank.map(
                question => [
                    question.id,
                    question
                ]
            )
        );

    return ids
        .map(
            id =>
                byId.get(id)
        )
        .filter(Boolean);
}

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

        return `${year}-${month}-${day}`;
    }

    return String(
        value
    ).slice(
        0,
        10
    );
}

function categoryName(
    question
) {
    const category =
        String(
            question.category ||
            ''
        ).trim();

    return (
        category ||
        'General Knowledge'
    );
}

// ─────────────────────────────────────────────
// BALANCED DAILY QUESTION SELECTION
// ─────────────────────────────────────────────
//
// The category is chosen first, then a question is
// chosen inside that category.
//
// A huge Music bank can therefore increase Music
// variety without making Music dominate the Daily.
//
// Within each category:
// 1. Never-used questions are preferred.
// 2. Once recycling is necessary, the question used
//    longest ago is preferred.
//
// If there are at least 10 categories, today's Daily
// uses 10 different categories.
//
// If there are fewer, categories are shared as evenly
// as possible across the 10 slots.

function rankCategoryQuestions(
    questions,
    history
) {
    const shuffled =
        shuffleArray(
            questions
        );

    shuffled.sort(
        (a, b) => {
            const aUsed =
                history.has(
                    a.id
                );

            const bUsed =
                history.has(
                    b.id
                );

            if (
                aUsed !==
                bUsed
            ) {
                return (
                    aUsed ?
                        1 :
                        -1
                );
            }

            if (
                !aUsed &&
                !bUsed
            ) {
                return 0;
            }

            return databaseDateKey(
                history.get(
                    a.id
                )
            ).localeCompare(
                databaseDateKey(
                    history.get(
                        b.id
                    )
                )
            );
        }
    );

    return shuffled;
}

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

    const groups =
        new Map();

    for (
        const question of eligible
    ) {
        const category =
            categoryName(
                question
            );

        if (
            !groups.has(
                category
            )
        ) {
            groups.set(
                category,
                []
            );
        }

        groups
            .get(category)
            .push(question);
    }

    const categories =
        shuffleArray(
            [
                ...groups.keys()
            ]
        );

    if (
        categories.length ===
        0
    ) {
        throw new Error(
            'The Daily Quiz has no eligible categories.'
        );
    }

    const rankedByCategory =
        new Map();

    for (
        const category of categories
    ) {
        rankedByCategory.set(
            category,
            rankCategoryQuestions(
                groups.get(
                    category
                ),
                history
            )
        );
    }

    const selected = [];

    let roundCategories =
        shuffleArray(
            categories
        );

    let categoryIndex =
        0;

    while (
        selected.length <
        DAILY_QUESTION_COUNT
    ) {
        if (
            categoryIndex >=
            roundCategories.length
        ) {
            roundCategories =
                shuffleArray(
                    categories
                );

            categoryIndex =
                0;
        }

        const category =
            roundCategories[
                categoryIndex
            ];

        categoryIndex++;

        const ranked =
            rankedByCategory.get(
                category
            );

        if (
            !ranked ||
            ranked.length ===
            0
        ) {
            continue;
        }

        selected.push(
            ranked.shift()
        );

        const remaining =
            [
                ...rankedByCategory.values()
            ]
                .reduce(
                    (
                        total,
                        list
                    ) =>
                        total +
                        list.length,
                    0
                );

        if (
            selected.length <
                DAILY_QUESTION_COUNT &&
            remaining ===
                0
        ) {
            break;
        }
    }

    if (
        selected.length <
        DAILY_QUESTION_COUNT
    ) {
        throw new Error(
            `The Quiz could only select ` +
            `${selected.length} Daily questions.`
        );
    }

    const finalSelection =
        shuffleArray(
            selected
        );

    for (
        const question of finalSelection
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

    return finalSelection;
}

// ─────────────────────────────────────────────
// ENSURE TODAY'S DAILY QUIZ
// ─────────────────────────────────────────────
//
// Today's saved Daily always wins.
//
// Deploying a new version of PuzzlePilot does not
// replace a quiz already created for the current
// UK date.

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
            existingResult.rows.length >
            0
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

            console.warn(
                'Saved Daily Quiz contains a question ' +
                'that no longer exists. ' +
                'Rebuilding today\'s quiz.'
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
// COMPLETION STORAGE
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
        result.rows.length >
        0
    );
}

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

function progressText(
    session
) {
    const answered =
        session.questionIndex;

    const remaining =
        session.questions.length -
        session.questionIndex;

    return (
        `**Score:** ` +
        `${session.score}/${answered}` +
        `   •   ` +
        `**Remaining:** ${remaining}`
    );
}

function nextMessage(
    session
) {
    if (
        session.questionIndex >=
        session.questions.length -
            1
    ) {
        return (
            'Final score in 3 seconds...'
        );
    }

    return (
        'Next question in 3 seconds...'
    );
}

// ─────────────────────────────────────────────
// ANSWER BUTTONS
// ─────────────────────────────────────────────

function buildAnswerRows(
    session,
    selectedAnswer = null,
    locked = false
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
        rowStart <
            answers.length;
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
                        ButtonStyle.Primary;

                    if (
                        locked
                    ) {
                        style =
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
                    }

                    return (
                        new ButtonBuilder()
                            .setCustomId(
                                locked
                                    ?
                                    `quiz_locked_` +
                                    `${answerIndex}_` +
                                    `${session.id}`
                                    :
                                    makeAnswerId(
                                        session.id,
                                        answerIndex
                                    )
                            )
                            .setLabel(
                                answer
                            )
                            .setStyle(
                                style
                            )
                            .setDisabled(
                                locked
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
// COMPONENTS V2 DISPLAY
// ─────────────────────────────────────────────

function addAnswerRows(
    container,
    rows
) {
    for (
        const row of rows
    ) {
        container.addActionRowComponents(
            row
        );
    }

    return container;
}

function buildQuestionContainer(
    session
) {
    const question =
        getCurrentQuestion(
            session
        );

    const container =
        new ContainerBuilder()
            .setAccentColor(
                QUIZ_ACCENT
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder()
                    .setContent(
                        `# 🧠 PUZZLEPILOT\n` +
                        `## DAILY QUIZ`
                    )
            )
            .addSeparatorComponents(
                new SeparatorBuilder()
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder()
                    .setContent(
                        `### QUESTION ` +
                        `${session.questionIndex + 1} ` +
                        `OF ` +
                        `${session.questions.length}\n` +
                        `${progressText(session)}\n\n` +
                        `⏱️ **15 seconds** • ` +
                        `Your first answer is final.`
                    )
            )
            .addSeparatorComponents(
                new SeparatorBuilder()
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder()
                    .setContent(
                        `## ${question.question}`
                    )
            );

    addAnswerRows(
        container,
        buildAnswerRows(
            session
        )
    );

    container
        .addSeparatorComponents(
            new SeparatorBuilder()
        )
        .addTextDisplayComponents(
            new TextDisplayBuilder()
                .setContent(
                    `*Daily Quiz • ` +
                    `New quiz after midnight ` +
                    `UK time*`
                )
        );

    return container;
}

function buildResultContainer(
    session,
    selectedAnswer,
    resultType
) {
    const question =
        getCurrentQuestion(
            session
        );

    let accent =
        QUIZ_ACCENT;

    let resultHeading =
        '';

    let resultBody =
        '';

    if (
        resultType ===
        'correct'
    ) {
        accent =
            SUCCESS_ACCENT;

        resultHeading =
            '✅ CORRECT!';

        resultBody =
            `The answer is ` +
            `**${question.correctAnswer}**.`;

    } else if (
        resultType ===
        'wrong'
    ) {
        accent =
            WRONG_ACCENT;

        resultHeading =
            '❌ WRONG!';

        resultBody =
            `You chose ` +
            `**${selectedAnswer}**.\n` +
            `The correct answer was ` +
            `**${question.correctAnswer}**.`;

    } else {
        accent =
            TIMEOUT_ACCENT;

        resultHeading =
            '⏰ TIME IS UP!';

        resultBody =
            `The correct answer was ` +
            `**${question.correctAnswer}**.`;
    }

    const container =
        new ContainerBuilder()
            .setAccentColor(
                accent
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder()
                    .setContent(
                        `# 🧠 PUZZLEPILOT\n` +
                        `## DAILY QUIZ`
                    )
            )
            .addSeparatorComponents(
                new SeparatorBuilder()
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder()
                    .setContent(
                        `### QUESTION ` +
                        `${session.questionIndex + 1} ` +
                        `OF ` +
                        `${session.questions.length}\n` +
                        `**Score:** ` +
                        `${session.score}/` +
                        `${session.questionIndex + 1}`
                    )
            )
            .addSeparatorComponents(
                new SeparatorBuilder()
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder()
                    .setContent(
                        `**${question.question}**\n\n` +
                        `## ${resultHeading}\n` +
                        `${resultBody}`
                    )
            );

    addAnswerRows(
        container,
        buildAnswerRows(
            session,
            selectedAnswer,
            true
        )
    );

    container
        .addSeparatorComponents(
            new SeparatorBuilder()
        )
        .addTextDisplayComponents(
            new TextDisplayBuilder()
                .setContent(
                    `*${nextMessage(
                        session
                    )}*`
                )
        );

    return container;
}

function buildFinalContainer(
    session
) {
    const score =
        session.score;

    const total =
        session.questions.length;

    let message;

    if (
        score ===
        total
    ) {
        message =
            'Perfect score — outstanding! 🏆';

    } else if (
        score >=
        8
    ) {
        message =
            'Excellent work! 🌟';

    } else if (
        score >=
        6
    ) {
        message =
            'Nicely done! 👏';

    } else if (
        score >=
        4
    ) {
        message =
            'A respectable run — tomorrow is another quiz!';

    } else {
        message =
            'That was a tough one — there is always tomorrow!';
    }

    return (
        new ContainerBuilder()
            .setAccentColor(
                SUCCESS_ACCENT
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder()
                    .setContent(
                        `# 🧠 PUZZLEPILOT\n` +
                        `## 🎉 DAILY QUIZ COMPLETE!`
                    )
            )
            .addSeparatorComponents(
                new SeparatorBuilder()
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder()
                    .setContent(
                        `# ${score}/${total}\n` +
                        `**${message}**`
                    )
            )
            .addSeparatorComponents(
                new SeparatorBuilder()
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder()
                    .setContent(
                        `Come back after ` +
                        `**midnight UK time** ` +
                        `for a new Daily Quiz.`
                    )
            )
    );
}

function buildSimpleContainer(
    title,
    message,
    accent = QUIZ_ACCENT
) {
    return (
        new ContainerBuilder()
            .setAccentColor(
                accent
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder()
                    .setContent(
                        `# 🧠 PUZZLEPILOT\n` +
                        `## ${title}`
                    )
            )
            .addSeparatorComponents(
                new SeparatorBuilder()
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder()
                    .setContent(
                        message
                    )
            )
    );
}

function v2Payload(
    container
) {
    return {
        components: [
            container
        ],

        flags:
            MessageFlags.IsComponentsV2
    };
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

    session.questionToken++;
}

// ─────────────────────────────────────────────
// FINISH DAILY QUIZ
// ─────────────────────────────────────────────

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

        try {
            const container =
                buildSimpleContainer(
                    'QUIZ SAVE PROBLEM',

                    `⚠️ Your quiz finished, but ` +
                    `PuzzlePilot couldn't save ` +
                    `the result.\n\n` +
                    `Please try again once the ` +
                    `database connection has ` +
                    `been checked.`,

                    WRONG_ACCENT
                );

            await interaction.editReply(
                v2Payload(
                    container
                )
            );

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
        await interaction.editReply(
            v2Payload(
                buildFinalContainer(
                    session
                )
            )
        );

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
                    session.questions.length -
                        1
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

                session.answered =
                    true;

                session.questionTimer =
                    null;

                try {
                    await interaction.editReply(
                        v2Payload(
                            buildResultContainer(
                                session,
                                null,
                                'timeout'
                            )
                        )
                    );

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

    await interaction.editReply(
        v2Payload(
            buildQuestionContainer(
                session
            )
        )
    );

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
            await interaction.editReply(
                v2Payload(
                    buildSimpleContainer(
                        'DAILY QUIZ',

                        `You've already completed ` +
                        `today's Daily Quiz on this ` +
                        `server.\n\n` +
                        `Come back after ` +
                        `**midnight UK time** ` +
                        `for a new one!`
                    )
                )
            );

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
            await interaction.editReply(
                v2Payload(
                    buildSimpleContainer(
                        'DAILY QUIZ',

                        `You already have today's ` +
                        `Daily Quiz in progress.`
                    )
                )
            );

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

        await showQuestion(
            interaction,
            session
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
        separator ===
        -1
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
        answerIndex <
            0 ||
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

    // First accepted click wins.
    // Lock before awaiting anything.

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

    await interaction.editReply(
        v2Payload(
            buildResultContainer(
                session,
                selectedAnswer,
                correct
                    ?
                    'correct'
                    :
                    'wrong'
            )
        )
    );

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
    }
}

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    startDaily,
    handleInteraction
};
