// quiz.js
// PuzzlePilot Quiz
// Daily Quiz controller
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

const {
    ensureTodaysQuiz,
    shuffleArray
} = require('./quiz_daily');

const {
    hasCompletedDaily,
    saveCompletion
} = require('./quiz_database');

const {
    WRONG_ACCENT,
    getCurrentQuestion,
    buildQuestionContainer,
    buildResultContainer,
    buildFinalContainer,
    buildSimpleContainer,
    v2Payload
} = require('./quiz_display');


// ─────────────────────────────────────────────
// SETTINGS
// ─────────────────────────────────────────────

const QUESTION_TIME_LIMIT =
    15 * 1000;

const RESULT_DISPLAY_TIME =
    3 * 1000;


// ─────────────────────────────────────────────
// ACTIVE SESSIONS
// ─────────────────────────────────────────────

const sessions =
    new Map();


// ─────────────────────────────────────────────
// GENERAL HELPERS
// ─────────────────────────────────────────────

function getServerId(
    interaction
) {
    return (
        interaction.guildId ||
        `DM_${interaction.user.id}`
    );
}


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
