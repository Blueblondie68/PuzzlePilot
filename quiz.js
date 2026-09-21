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
// Persistent data:
// - Today's 10 question IDs are saved globally
// - Question-use history is saved globally
// - Player completion data is saved separately for each server
// - Restarting PuzzlePilot does not create a new Daily Quiz

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require('discord.js');

const fs = require('fs');
const path = require('path');

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
// DATA FILE
// ─────────────────────────────────────────────

const DATA_FILE =
    path.join(
        __dirname,
        'quiz_data.json'
    );

function defaultQuizData() {
    return {
        daily: {
            date: null,
            questionIds: [],
            questionHistory: {}
        },
        servers: {}
    };
}

function loadQuizData() {
    try {
        if (
            !fs.existsSync(
                DATA_FILE
            )
        ) {
            const freshData =
                defaultQuizData();

            fs.writeFileSync(
                DATA_FILE,
                JSON.stringify(
                    freshData,
                    null,
                    2
                )
            );

            return freshData;
        }

        const raw =
            fs.readFileSync(
                DATA_FILE,
                'utf8'
            );

        const loaded =
            JSON.parse(
                raw
            );

        if (
            !loaded.daily ||
            typeof loaded.daily !==
                'object'
        ) {
            loaded.daily =
                defaultQuizData().daily;
        }

        if (
            !loaded.daily.questionHistory ||
            typeof loaded.daily.questionHistory !==
                'object'
        ) {
            loaded.daily.questionHistory =
                {};
        }

        if (
            !Array.isArray(
                loaded.daily.questionIds
            )
        ) {
            loaded.daily.questionIds =
                [];
        }

        if (
            !loaded.servers ||
            typeof loaded.servers !==
                'object'
        ) {
            loaded.servers =
                {};
        }

        return loaded;

    } catch (
        error
    ) {
        console.error(
            'Could not load quiz_data.json:',
            error
        );

        return defaultQuizData();
    }
}

let quizData =
    loadQuizData();

function saveQuizData() {
    try {
        fs.writeFileSync(
            DATA_FILE,
            JSON.stringify(
                quizData,
                null,
                2
            )
        );
    } catch (
        error
    ) {
        console.error(
            'Could not save quiz_data.json:',
            error
        );
    }
}

// ─────────────────────────────────────────────
// ACTIVE SESSIONS
// ─────────────────────────────────────────────
//
// Active games do not need to survive a restart.
// Persistent Daily information is stored separately
// in quiz_data.json.

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

function getServerData(
    serverId
) {
    if (
        !quizData.servers[
            serverId
        ]
    ) {
        quizData.servers[
            serverId
        ] = {
            completions: {}
        };
    }

    if (
        !quizData.servers[
            serverId
        ].completions ||
        typeof quizData.servers[
            serverId
        ].completions !==
            'object'
    ) {
        quizData.servers[
            serverId
        ].completions =
            {};
    }

    return quizData.servers[
        serverId
    ];
}

function getEligibleDailyQuestions() {
    return questionBank.filter(
        question =>
            question.dailyEligible !==
            false
    );
}

// ─────────────────────────────────────────────
// DAILY QUESTION HISTORY
// ─────────────────────────────────────────────
//
// questionHistory stores the last UK date on which
// each question was used:
//
// {
//     "music_0001": "2026-09-21",
//     "tv_0004": "2026-09-22"
// }
//
// Questions that have never been used are chosen
// before questions that have already appeared.
//
// Once every eligible question has been used,
// the oldest-used questions become available first.

function selectDailyQuestions(
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

    const history =
        quizData.daily
            .questionHistory;

    const neverUsed =
        eligible.filter(
            question =>
                !history[
                    question.id
                ]
        );

    let selected = [];

    // Use never-seen questions first.

    if (
        neverUsed.length > 0
    ) {
        selected =
            shuffleArray(
                neverUsed
            )
                .slice(
                    0,
                    DAILY_QUESTION_COUNT
                );
    }

    // If there are not enough never-used questions,
    // fill the remaining spaces using the questions
    // that were used longest ago.

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
                .sort(
                    (a, b) => {
                        const dateA =
                            history[
                                a.id
                            ] || '';

                        const dateB =
                            history[
                                b.id
                            ] || '';

                        return (
                            dateA.localeCompare(
                                dateB
                            )
                        );
                    }
                );

        const needed =
            DAILY_QUESTION_COUNT -
            selected.length;

        selected.push(
            ...previouslyUsed.slice(
                0,
                needed
            )
        );
    }

    // Shuffle the final ten so the order is not
    // determined by question history.

    selected =
        shuffleArray(
            selected
        );

    // Record that these questions were used today.

    for (
        const question of selected
    ) {
        history[
            question.id
        ] = dateKey;
    }

    return selected;
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
// ENSURE TODAY'S DAILY QUIZ
// ─────────────────────────────────────────────

function ensureTodaysQuiz() {
    const dateKey =
        getUKDateKey();

    // If quiz_data.json already contains today's
    // Daily Quiz, rebuild it from the saved IDs.

    if (
        quizData.daily.date ===
            dateKey &&
        Array.isArray(
            quizData.daily
                .questionIds
        ) &&
        quizData.daily
            .questionIds.length ===
            DAILY_QUESTION_COUNT
    ) {
        const savedQuestions =
            getQuestionsFromIds(
                quizData.daily
                    .questionIds
            );

        // All ten saved IDs still exist in the
        // question bank, so use exactly the same
        // Daily Quiz after a restart.

        if (
            savedQuestions.length ===
            DAILY_QUESTION_COUNT
        ) {
            return {
                dateKey:
                    dateKey,

                questions:
                    savedQuestions
            };
        }

        console.warn(
            'Saved Daily Quiz contains a question ' +
            'that no longer exists. Selecting a new Daily Quiz.'
        );
    }

    // It is a new UK day, or the saved Daily Quiz
    // is incomplete. Select today's ten questions.

    const selected =
        selectDailyQuestions(
            dateKey
        );

    quizData.daily.date =
        dateKey;

    quizData.daily.questionIds =
        selected.map(
            question =>
                question.id
        );

    // We do not need yesterday's completion records.
    // Remove old completion dates while keeping each
    // server's data separate.

    for (
        const serverId of
        Object.keys(
            quizData.servers
        )
    ) {
        const server =
            getServerData(
                serverId
            );

        for (
            const userId of
            Object.keys(
                server.completions
            )
        ) {
            if (
                server.completions[
                    userId
                ] !==
                dateKey
            ) {
                delete server.completions[
                    userId
                ];
            }
        }
    }

    saveQuizData();

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

    // Save this player's completion inside their
    // own Discord server only.

    const server =
        getServerData(
            session.serverId
        );

    server.completions[
        session.userId
    ] = session.dateKey;

    saveQuizData();

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
    const daily =
        ensureTodaysQuiz();

    const userId =
        interaction.user.id;

    const serverId =
        getServerId(
            interaction
        );

    const dateKey =
        daily.dateKey;

    const server =
        getServerData(
            serverId
        );

    const completedDate =
        server.completions[
            userId
        ];

    if (
        completedDate ===
        dateKey
    ) {
        await interaction.reply({
            content:
                `🧠 You've already completed ` +
                `today's Daily Quiz on this server.\n\n` +
                `Come back after midnight ` +
                `UK time for a new one!`,
            ephemeral:
                true
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
        await interaction.reply({
            content:
                `🧠 You already have today's ` +
                `Daily Quiz in progress.`,
            ephemeral:
                true
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

    await interaction.reply({
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
