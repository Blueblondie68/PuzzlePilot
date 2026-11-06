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
// TELEVISION PROGRAMME LABELS
// ─────────────────────────────────────────────
// Only use a confirmed programme title, never a neighbouring generic tag.
// The programme title is hidden if it occurs in ANY answer choice.
// This prevents "Which programme...?" questions giving themselves away.
// General television questions can safely keep the label TELEVISION.

// Titles already covered by dedicated quiz packs or television quiz-show packs.
// Add newly covered programmes here as future packs are introduced.
const TELEVISION_PROGRAMMES = [
    '2point4 Children',
    '24',
    '30 Rock',
    'A Bit of Fry & Laurie',
    'A Fine Romance',
    'Absolutely Fabulous',
    'Agony',
    'Agony Again',
    "'Allo 'Allo!",
    'Are You Being Served?',
    'Black Books',
    'Brookside',
    'Coronation Street',
    'Crossroads',
    'Dinnerladies',
    'Doctors',
    'Early Doors',
    'EastEnders',
    'Eldorado',
    'Emmerdale',
    'Emmerdale Farm',
    'Family Affairs',
    'Fawlty Towers',
    'Gimme Gimme Gimme',
    'Grace & Favour',
    'Hollyoaks',
    'Home and Away',
    'Neighbours',
    'River City',
    'Spaced',
    'Take the High Road',
    'The Thin Blue Line',
    'The Young Ones',
    'The Chase',
    'The Weakest Link',
    'Mastermind',
    'University Challenge',
    'Pointless',
    'Who Wants to Be a Millionaire?',
    'Catchphrase',
    'Blockbusters',
    'Bullseye',
    'Family Fortunes',
    'The Crystal Maze',
    'Countdown',
    'The Generation Game',
    'Play Your Cards Right',
    'Blankety Blank',
    'The Price Is Right'
];

function normaliseProgrammeText(value) {
    return String(value || '')
        .toLowerCase()
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/&/g, ' and ')
        .replace(/[^a-z0-9]+/g, ' ')
        .trim()
        .replace(/^the /, '');
}

const PROGRAMME_BY_TAG = new Map(
    TELEVISION_PROGRAMMES.map(name => [normaliseProgrammeText(name), name])
);

function programmeAppearsInAnswers(programme, question) {
    const title = normaliseProgrammeText(programme);
    const answers = Array.isArray(question.answers) ? question.answers : [];
    const choices = [...answers, question.correctAnswer];

    return choices.some(choice => {
        const value = normaliseProgrammeText(choice);
        if (!value || !title) return false;
        // Whole-name match, including answers such as "The Young Ones (1982)".
        // Avoid matching short titles (e.g. "24") inside unrelated numbers.
        return value === title ||
            (title.length >= 5 && (` ${value} `).includes(` ${title} `));
    });
}

function getProgrammeName(question) {
    if (!question || typeof question !== 'object') return null;

    // Do not put a title in the header if the question asks for a show's identity.
    if (/^(?:which|what)\s+(?:(?:tv|television|bbc|itv|british|american)\s+)*(?:programme|program|show|sitcom|soap|drama|series)\b/i.test(String(question.question || ''))) {
        return null;
    }

    // If any answer choice is itself a known programme, keep the header
    // neutral so that identifying a programme remains a fair question.
    if (TELEVISION_PROGRAMMES.some(name => programmeAppearsInAnswers(name, question))) {
        return null;
    }

    // A dedicated programme field is the most reliable source.
    for (const field of ['programme', 'program', 'show', 'series']) {
        if (typeof question[field] === 'string' && question[field].trim()) {
            const name = question[field].trim();
            // Some packs use 'series' for a number/season, not a show name.
            if (field === 'series' && !PROGRAMME_BY_TAG.has(normaliseProgrammeText(name))) {
                continue;
            }
            return programmeAppearsInAnswers(name, question) ? null : name;
        }
    }

    const tags = Array.isArray(question.tags)
        ? question.tags.filter(tag => typeof tag === 'string')
        : [];

    // Support deliberate metadata such as "Programme: The Young Ones".
    for (const tag of tags) {
        const match = tag.match(/^(?:programme|program|show)\s*[:=]\s*(.+)$/i);
        if (match) {
            const name = match[1].trim();
            return programmeAppearsInAnswers(name, question) ? null : name;
        }
    }

    // Packs usually put the main programme among their opening common tags.
    // Match exact known titles, not arbitrary tags following "sitcoms" etc.
    // A question may mention other shows, so ambiguous matches are not labelled.
    const candidates = new Map();
    for (const tag of tags.slice(0, 12)) {
        const title = PROGRAMME_BY_TAG.get(normaliseProgrammeText(tag));
        if (title && !programmeAppearsInAnswers(title, question)) {
            candidates.set(normaliseProgrammeText(title), title);
        }
    }

    if (candidates.size === 1) {
        return candidates.values().next().value;
    }
    if (candidates.size > 1) {
        // If the question explicitly names one, prefer that known context.
        const text = normaliseProgrammeText(question.question);
        const named = [...candidates.values()].filter(title => {
            const needle = normaliseProgrammeText(title);
            return needle.length >= 5 && (` ${text} `).includes(` ${needle} `);
        });
        return named.length === 1 ? named[0] : null;
    }

    return null;
}

function questionSubjectLabel(question) {
    const category = String(question.category || 'General Knowledge').trim();
    if (/^(?:tv|television)$/i.test(category)) {
        const programme = getProgrammeName(question);
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
