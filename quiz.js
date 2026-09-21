// quiz.js
// PuzzlePilot Quiz
// Daily Quiz engine
//
// Daily Quiz rules:
// - 10 questions
// - Same Daily Quiz for everybody
// - Four multiple-choice answers
// - Answer positions are shuffled
// - First answer clicked is final
// - 15 seconds to answer each question
// - Correct answer is shown after every question
// - Result is shown for 3 seconds
// - Next question appears automatically
// - Unanswered questions count as wrong
// - Final score is shown automatically after question 10
// - Each player may complete the Daily Quiz once per day
// - Daily questions reset at midnight UK time

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require('discord.js');

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
// ACTIVE SESSIONS
// ─────────────────────────────────────────────

const sessions =
    new Map();

// Players who have completed today's Daily Quiz.
//
// This is currently stored in memory while the
// Daily Quiz is being tested.
//
// Before the finished Quiz goes live, this will
// be moved to persistent storage so a bot restart
// cannot allow somebody to replay the Daily Quiz.

const dailyCompletions =
    new Map();

// ─────────────────────────────────────────────
// DAILY QUIZ STATE
// ─────────────────────────────────────────────

let currentDailyDate = null;

let todaysQuestions = [];

const dailyQuestionHistory = [];

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

function getEligibleDailyQuestions() {
    return questionBank.filter(
        question =>
            question.dailyEligible !==
            false
    );
}

function selectDailyQuestions() {
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

    const recentIds =
        new Set(
            dailyQuestionHistory.flat()
        );

    let unused =
        eligible.filter(
            question =>
                !recentIds.has(
                    question.id
                )
        );

    // The development bank is deliberately small.
    // If there are not enough completely unused
    // questions, older questions are allowed back in.
    //
    // The finished giant question bank will use
    // persistent long-term repeat protection.

    if (
        unused.length <
        DAILY_QUESTION_COUNT
    ) {
        unused = [
            ...eligible
        ];
    }

    const selected =
        shuffleArray(
            unused
        )
            .slice(
                0,
                DAILY_QUESTION_COUNT
            );

    dailyQuestionHistory.push(
        selected.map(
            question =>
                question.id
        )
    );

    while (
        dailyQuestionHistory.length >
        2
    ) {
        dailyQuestionHistory.shift();
    }

    return selected;
}

function ensureTodaysQuiz() {
    const dateKey =
        getUKDateKey();

    if (
        currentDailyDate ===
            dateKey &&
        todaysQuestions.length ===
            DAILY_QUESTION_COUNT
    ) {
        return;
    }

    currentDailyDate =
        dateKey;

    todaysQuestions =
        selectDailyQuestions();

    console.log(
        `Daily Quiz selected for ` +
        `${currentDailyDate}`
    );
}

function makeSessionId(
    userId
) {
    return (
        `${userId}_daily_quiz`
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
        `${question.question}\n\n` +
        `⏱️ You have **15 seconds** to answer.\n` +
        `Your first answer is final.`
    );
}

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
                (answer, offset) => {
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
                (answer, offset) => {
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

    // Each displayed question gets its own number.
    //
    // Timers check this number before doing anything.
    // That prevents an old timer from changing a newer
    // question if Discord or the bot is briefly delayed.

    session.questionToken++;
}

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

    dailyCompletions.set(
        session.userId,
        session.dateKey
    );

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

                // If this timer belongs to an older
                // question, it must not do anything.

                if (
                    session.questionToken !==
                    questionToken
                ) {
                    return;
                }

                session.resultTimer =
                    null;

                // Question 10 has finished.
                // Show the final score instead of
                // attempting to create question 11.

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

                // Ignore a timer belonging to an
                // earlier question.

                if (
                    session.questionToken !==
                    questionToken
                ) {
                    return;
                }

                // The player answered before the
                // timer expired.

                if (
                    session.answered
                ) {
                    return;
                }

                // Lock the question BEFORE awaiting
                // anything so a late button press
                // cannot sneak through.

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
                            `Next question in 3 seconds...`,
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
    ensureTodaysQuiz();

    const userId =
        interaction.user.id;

    const dateKey =
        getUKDateKey();

    const completedDate =
        dailyCompletions.get(
            userId
        );

    if (
        completedDate ===
        dateKey
    ) {
        await interaction.reply({
            content:
                `🧠 You've already completed ` +
                `today's Daily Quiz.\n\n` +
                `Come back after midnight ` +
                `UK time for a new one!`,
            ephemeral:
                true
        });

        return;
    }

    const sessionId =
        makeSessionId(
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

        userId:
            userId,

        dateKey:
            dateKey,

        questions:
            todaysQuestions,

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

    // First accepted click wins.
    //
    // This changes BEFORE any await so rapid
    // double-clicking cannot change the answer.

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
            `Next question in 3 seconds...`;
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
            `Next question in 3 seconds...`;
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
