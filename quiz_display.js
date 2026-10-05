// quiz_display.js
// PuzzlePilot Quiz
// Components V2 display and answer buttons

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ContainerBuilder,
    MessageFlags,
    SeparatorBuilder,
    TextDisplayBuilder
} = require('discord.js');


// ─────────────────────────────────────────────
// COLOURS
// ─────────────────────────────────────────────

const QUIZ_ACCENT = 0x8B5CF6;
const SUCCESS_ACCENT = 0x57F287;
const WRONG_ACCENT = 0xED4245;
const TIMEOUT_ACCENT = 0xFEE75C;


// ─────────────────────────────────────────────
// SESSION HELPERS
// ─────────────────────────────────────────────

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
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    QUIZ_ACCENT,
    SUCCESS_ACCENT,
    WRONG_ACCENT,
    TIMEOUT_ACCENT,
    getCurrentQuestion,
    buildQuestionContainer,
    buildResultContainer,
    buildFinalContainer,
    buildSimpleContainer,
    v2Payload
};
