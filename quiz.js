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
// - Wrong answers reveal the correct answer
// - Unanswered questions count as wrong
// - Final score is shown after question 10
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
// This is deliberately kept separate from the active
// sessions so completing a quiz removes the live game
// without forgetting that the player has already played.
//
// Later, when the Daily Quiz is fully tested, this can
// be moved to persistent storage so completion survives
// a bot restart.

const dailyCompletions =
    new Map();

// ─────────────────────────────────────────────
// DAILY QUIZ STATE
// ─────────────────────────────────────────────

let currentDailyDate = null;

let todaysQuestions = [];

// Keeps recent Daily question IDs.
//
// This first engine keeps the history in memory.
// Once the gameplay is approved, we can persist this
// before the giant question bank is added.

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

    // With the small development pack we may eventually
    // run out of completely unused questions.
    // If that happens, allow older questions back in.
    //
    // Once the enormous real bank exists this will very
    // rarely be necessary.

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

    // The test pack is small, so only retain the last
    // two Daily sets for now.
    //
    // With the real bank we will use persistent history
    // and much longer repeat protection.

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

function makeNextId(
    sessionId
) {
    return (
        `quiz_next_` +
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
                answer => {
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
                                `${session.id}_` +
                                `${rowStart}_` +
                                `${answer}`
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

function buildNextButton(
    session
) {
    return (
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId(
                        makeNextId(
                            session.id
                        )
                    )
                    .setLabel(
                        session.questionIndex ===
                            session.questions.length - 1
                            ? 'See Final Score'
                            : 'Next Question'
                    )
                    .setStyle(
                        ButtonStyle.Primary
                    )
            )
    );
}

function clearQuestionTimer(
    session
) {
    if (
        session.timer
    ) {
        clearTimeout(
            session.timer
        );

        session.timer = null;
    }
}

function prepareQuestion(
    session
) {
    clearQuestionTimer(
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
// QUESTION TIMER
// ─────────────────────────────────────────────

function startQuestionTimer(
    session,
    interaction
) {
    clearQuestionTimer(
        session
    );

    session.timer =
        setTimeout(
            async () => {

                // Make sure this is still the active session.

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

                // If the player answered just before the
                // timer fired, do nothing.

                if (
                    session.answered
                ) {
                    return;
                }

                // Lock this question immediately.

                session.answered =
                    true;

                session.timer =
                    null;

                const question =
                    getCurrentQuestion(
                        session
                    );

                const lockedRows =
                    buildLockedAnswerButtons(
                        session
                    );

                lockedRows.push(
                    buildNextButton(
                        session
                    )
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
                            `**${question.correctAnswer}**.`,
                        components:
                            lockedRows
                    });
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
// SHOW A QUESTION
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

    const existingSession =
        sessions.get(
            makeSessionId(
                userId
            )
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

    const sessionId =
        makeSessionId(
            userId
        );

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

        timer:
            null
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

    // The first accepted click locks the question.
    //
    // This flag is changed BEFORE any await so a second
    // click cannot change the player's answer.

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

    lockedRows.push(
        buildNextButton(
            session
        )
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
            `**${question.correctAnswer}**.`;
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
            `**${question.correctAnswer}**.`;
    }

    await interaction.editReply({
        content:
            resultText,
        components:
            lockedRows
    });
}

// ─────────────────────────────────────────────
// HANDLE NEXT QUESTION
// ─────────────────────────────────────────────

async function handleNext(
    interaction
) {
    const sessionId =
        interaction.customId.replace(
            'quiz_next_',
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
        !session.answered
    ) {
        await interaction.reply({
            content:
                '⚠️ Answer the question first.',
            ephemeral:
                true
        });

        return;
    }

    await interaction.deferUpdate();

    // ─────────────────────────────────────────
    // FINISHED ALL 10
    // ─────────────────────────────────────────

    if (
        session.questionIndex >=
        session.questions.length - 1
    ) {
        clearQuestionTimer(
            session
        );

        dailyCompletions.set(
            session.userId,
            session.dateKey
        );

        sessions.delete(
            session.id
        );

        await interaction.editReply({
            content:
                finalScoreText(
                    session
                ),
            components:
                []
        });

        return;
    }

    // ─────────────────────────────────────────
    // NEXT QUESTION
    // ─────────────────────────────────────────

    session.questionIndex++;

    await showQuestion(
        interaction,
        session
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

    if (
        interaction.isButton() &&
        interaction.customId.startsWith(
            'quiz_next_'
        )
    ) {
        await handleNext(
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
