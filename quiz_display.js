
// quiz_display.js
// PuzzlePilot Bigggggg Quiz
// Daily Quiz display refresh - Discord Components V2
// Appearance only: quiz timing, scoring and progression stay in quiz.js.

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ContainerBuilder,
    MessageFlags,
    SeparatorBuilder,
    TextDisplayBuilder
} = require('discord.js');

// Keep the existing accent colours and exported names.
const QUIZ_ACCENT = 0x8B5CF6;
const SUCCESS_ACCENT = 0x57F287;
const WRONG_ACCENT = 0xED4245;
const TIMEOUT_ACCENT = 0xFEE75C;

function getCurrentQuestion(session) {
    return session.questions[session.questionIndex];
}

function makeAnswerId(sessionId, answerIndex) {
    // quiz.js uses this exact prefix and answer index to handle clicks.
    return `quiz_answer_${answerIndex}_${sessionId}`;
}

function nextMessage(session) {
    return session.questionIndex >= session.questions.length - 1
        ? 'Final score in 3 seconds...'
        : 'Next question in 3 seconds...';
}

// ─────────────────────────────────────────────
// TELEVISION PROGRAMME LABELS (Daily Quiz)
// ─────────────────────────────────────────────
// Shared with Practice. The title is hidden when it could reveal an answer.
const { getTelevisionProgramme } = require('./quiz_programme_labels');

function questionSubjectLabel(question) {
    const category = String(question.category || 'General Knowledge').trim();
    if (/^(?:tv|television)$/i.test(category)) {
        const programme = getTelevisionProgramme(question);
        return programme
            ? `TELEVISION • ${programme.toUpperCase()}`
            : 'TELEVISION';
    }
    return category.toUpperCase();
}
// ─────────────────────────────────────────────
// SHARED DISPLAY HELPERS
// ─────────────────────────────────────────────

function displayText(content) {
    return new TextDisplayBuilder().setContent(content);
}

function newQuizContainer(accent = QUIZ_ACCENT) {
    return new ContainerBuilder()
        .setAccentColor(accent)
        .addTextDisplayComponents(
            displayText('## 🧠 PUZZLEPILOT  •  DAILY QUIZ')
        );
}

function addSeparator(container) {
    return container.addSeparatorComponents(new SeparatorBuilder());
}

function progressText(session, includeCurrent = false) {
    const total = session.questions.length;
    const completed = Math.min(
        total,
        session.questionIndex + (includeCurrent ? 1 : 0)
    );
    return `**Correct:** ${session.score}  •  **Completed:** ${completed}/${total}`;
}

function questionNumberText(session) {
    return `**QUESTION ${session.questionIndex + 1} OF ${session.questions.length}**`;
}

// Buttons stay in two rows of two, as Discord does not offer
// arbitrary button sizes or full-width native answer buttons.
// Keep answer IDs, positions and red/green reveal unchanged.
function buildAnswerRows(session, selectedAnswer = null, locked = false) {
    const question = getCurrentQuestion(session);
    const answers = session.shuffledAnswers;
    const rows = [];

    for (let rowStart = 0; rowStart < answers.length; rowStart += 2) {
        const row = new ActionRowBuilder();
        for (
            let answerIndex = rowStart;
            answerIndex < Math.min(rowStart + 2, answers.length);
            answerIndex++
        ) {
            const answer = answers[answerIndex];
            let style = ButtonStyle.Primary;

            if (locked) {
                style = ButtonStyle.Secondary;
                if (answer === question.correctAnswer) {
                    style = ButtonStyle.Success;
                } else if (selectedAnswer !== null && answer === selectedAnswer) {
                    style = ButtonStyle.Danger;
                }
            }

            const letter = String.fromCharCode(65 + answerIndex);
            const button = new ButtonBuilder()
                .setCustomId(
                    locked
                        ? `quiz_locked_${answerIndex}_${session.id}`
                        : makeAnswerId(session.id, answerIndex)
                )
                .setLabel(answer.length <= 77 ? `${letter}. ${answer}` : answer)
                .setStyle(style)
                .setDisabled(locked);

            row.addComponents(button);
        }
        rows.push(row);
    }

    return rows;
}

function addAnswerRows(container, rows) {
    for (const row of rows) {
        container.addActionRowComponents(row);
    }
    return container;
}

// ─────────────────────────────────────────────
// QUESTION SCREEN
// ─────────────────────────────────────────────

function buildQuestionContainer(session) {
    const question = getCurrentQuestion(session);
    const container = newQuizContainer();

    container.addTextDisplayComponents(
        displayText(
            `${questionNumberText(session)}\n` +
            `${progressText(session)}\n` +
            '⏱️ **15 seconds** to answer • First choice is final'
        )
    );
    addSeparator(container);
    container.addTextDisplayComponents(
        displayText(
            `**${questionSubjectLabel(question)}**\n` +
            `## ${question.question}`
        )
    );

    addAnswerRows(container, buildAnswerRows(session));
    addSeparator(container);
    container.addTextDisplayComponents(
        displayText('*New Daily Quiz after midnight UK time*')
    );

    return container;
}

// ─────────────────────────────────────────────
// ANSWER REVEAL SCREEN
// ─────────────────────────────────────────────

function buildResultContainer(session, selectedAnswer, resultType) {
    const question = getCurrentQuestion(session);
    let accent;
    let heading;
    let details;

    if (resultType === 'correct') {
        accent = SUCCESS_ACCENT;
        heading = '✅ CORRECT!';
        details = `**Answer:** ${question.correctAnswer}`;
    } else if (resultType === 'wrong') {
        accent = WRONG_ACCENT;
        heading = '❌ NOT QUITE!';
        details =
            `**You chose:** ${selectedAnswer}\n` +
            `**Correct answer:** ${question.correctAnswer}`;
    } else {
        accent = TIMEOUT_ACCENT;
        heading = '⏰ TIME IS UP!';
        details = `**Correct answer:** ${question.correctAnswer}`;
    }

    const container = newQuizContainer(accent);
    container.addTextDisplayComponents(
        displayText(
            `${questionNumberText(session)}\n` +
            progressText(session, true)
        )
    );
    addSeparator(container);
    container.addTextDisplayComponents(
        displayText(
            `**${questionSubjectLabel(question)}**\n` +
            `## ${question.question}`
        )
    );
    container.addTextDisplayComponents(
        displayText(`### ${heading}\n${details}`)
    );

    addAnswerRows(container, buildAnswerRows(session, selectedAnswer, true));
    addSeparator(container);
    container.addTextDisplayComponents(
        displayText(`*${nextMessage(session)}*`)
    );

    return container;
}

// ─────────────────────────────────────────────
// FINAL SCORE
// ─────────────────────────────────────────────

function buildFinalContainer(session) {
    const score = session.score;
    const total = session.questions.length;
    const percent = total ? Math.round((score / total) * 100) : 0;
    let message;

    if (score === total) {
        message = 'Perfect score — outstanding! 🏆';
    } else if (score >= 8) {
        message = 'Excellent work! 🌟';
    } else if (score >= 6) {
        message = 'Nicely done! 👏';
    } else if (score >= 4) {
        message = 'A respectable run — tomorrow is another quiz!';
    } else {
        message = 'That was a tough one — there is always tomorrow!';
    }

    const container = newQuizContainer(SUCCESS_ACCENT);
    addSeparator(container);
    container.addTextDisplayComponents(
        displayText(
            '## 🎉 DAILY QUIZ COMPLETE!\n' +
            `# ${score} / ${total}\n` +
            `**${percent}% correct**  •  ${message}`
        )
    );
    addSeparator(container);
    container.addTextDisplayComponents(
        displayText('Come back after **midnight UK time** for a new Daily Quiz.')
    );
    return container;
}

// Used for already-played and error messages by quiz.js.
function buildSimpleContainer(title, message, accent = QUIZ_ACCENT) {
    const container = newQuizContainer(accent);
    addSeparator(container);
    container.addTextDisplayComponents(displayText(`## ${title}\n${message}`));
    return container;
}

function v2Payload(container) {
    return {
        components: [container],
        flags: MessageFlags.IsComponentsV2
    };
}

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







