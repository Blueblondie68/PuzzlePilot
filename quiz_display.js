
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
// Read programme names from the live quiz bank, not a manual show list.
// For older packs, a repeated question tag can identify the programme.
// Never show a programme name if that could give away an answer.

const { getQuestionBank } = require('./quiz_bank');

const NON_PROGRAMME_TAGS = new Set([
    'television', 'tv', 'british television', 'british tv',
    'television history', 'british television history',
    'british sitcom', 'british sitcoms', 'sitcom', 'sitcoms',
    'comedy', 'comedies', 'british comedy', 'comedy television',
    'family comedy', 'workplace comedy', 'wartime comedy',
    'period comedy', 'historical comedy', 'sketch comedy',
    'situation comedy', 'drama', 'dramas', 'crime drama',
    'police procedural', 'soap', 'soaps', 'soap opera',
    'soap operas', 'game show', 'game shows', 'quiz shows',
    'quiz and game shows', 'quiz & game shows',
    'reality shows', 'documentaries', 'children television',
    "children's television", "children's tv", 'childrens tv',
    'bbc', 'bbc one', 'bbc two', 'bbc three', 'bbc four',
    'itv', 'itv1', 'itv network', 'channel 4', 'channel four',
    'channel 5', 'sky one', 'netflix', 'britbox', 'uk television',
    'us television', 'american television', 'original series',
    'production history', 'series history', 'tv history',
    'television comedy', 'british comedy television'
]);

function normaliseProgrammeText(value) {
    return String(value || '')
        .toLowerCase()
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/&/g, ' and ')
        .replace(/[^a-z0-9]+/g, ' ')
        .trim()
        .replace(/^the /, '');
}

function televisionTags(question) {
    return Array.isArray(question.tags)
        ? question.tags.filter(tag =>
            typeof tag === 'string' && tag.trim()
        )
        : [];
}

function isGenericTelevisionTag(value) {
    const name = String(value || '').trim().toLowerCase();
    return !name ||
        NON_PROGRAMME_TAGS.has(name) ||
        /^\d$/.test(name) ||
        /^(?:19|20)\d{2}(?:s)?$/.test(name) ||
        /^(?:19|20)\d{2}\s*[-–]\s*(?:19|20)\d{2}$/.test(name) ||
        /^(?:series|season|episode)\s+\w+/.test(name) ||
        /^year\s+\d+/.test(name);
}

let bank = null;
let positions = null;
let knownProgrammes = null;
const programmeCache = new WeakMap();
const normalisedTagCache = new WeakMap();

function normalisedTelevisionTags(question) {
    if (normalisedTagCache.has(question)) {
        return normalisedTagCache.get(question);
    }
    const result = new Set(
        televisionTags(question).map(normaliseProgrammeText)
    );
    normalisedTagCache.set(question, result);
    return result;
}

function ensureBank() {
    if (bank !== null) return;
    bank = getQuestionBank();
    positions = new Map();
    bank.forEach((question, index) => {
        if (question && typeof question.id === 'string') {
            positions.set(question.id, index);
        }
    });
}

function legacyProgrammeFromTags(question, tags) {
    ensureBank();
    const position = positions.get(question.id);
    if (position === undefined) return null;

    // The programme is usually one of the first shared tags in a pack.
    // Require agreement from several nearby questions, not just one tag.
    const candidates = tags.slice(0, 12)
        .filter(tag => !isGenericTelevisionTag(tag));

    for (const candidate of candidates) {
        const key = normaliseProgrammeText(candidate);
        let shared = 0;
        let compared = 0;

        for (let offset = -4; offset <= 4; offset++) {
            if (offset === 0) continue;
            const neighbour = bank[position + offset];
            if (
                !neighbour ||
                !/^(?:tv|television)$/i.test(String(neighbour.category || ''))
            ) {
                continue;
            }
            compared++;
            if (normalisedTelevisionTags(neighbour).has(key)) {
                shared++;
            }
        }

        if (shared >= 2 && shared >= Math.ceil(compared * 0.35)) {
            return candidate;
        }
    }

    return null;
}

function programmeCandidate(question) {
    if (!question || typeof question !== 'object') return null;
    if (programmeCache.has(question)) return programmeCache.get(question);

    let result = null;
    for (const field of ['programme', 'program', 'show']) {
        if (
            typeof question[field] === 'string' &&
            !isGenericTelevisionTag(question[field])
        ) {
            result = question[field].trim();
            break;
        }
    }

    const tags = televisionTags(question);

    if (!result) {
        for (const tag of tags) {
            const match = /^(?:programme|program|show)\s*[:=]\s*(.+)$/i.exec(tag);
            if (match && !isGenericTelevisionTag(match[1])) {
                result = match[1].trim();
                break;
            }
        }
    }

    if (
        !result &&
        typeof question.series === 'string' &&
        !isGenericTelevisionTag(question.series) &&
        !/^\d+$/.test(question.series.trim())
    ) {
        result = question.series.trim();
    }

    if (!result) result = legacyProgrammeFromTags(question, tags);
    programmeCache.set(question, result);
    return result;
}

function knownProgrammeNames() {
    if (knownProgrammes !== null) return knownProgrammes;
    ensureBank();
    const titles = new Map();

    for (const question of bank) {
        if (
            !question ||
            !/^(?:tv|television)$/i.test(String(question.category || ''))
        ) {
            continue;
        }
        const title = programmeCandidate(question);
        if (title) {
            titles.set(normaliseProgrammeText(title), title);
        }
    }

    knownProgrammes = [...titles.values()];
    return knownProgrammes;
}

function programmeAppearsInAnswers(programme, question) {
    const title = normaliseProgrammeText(programme);
    const answers = Array.isArray(question.answers) ? question.answers : [];
    const choices = [...answers, question.correctAnswer];

    return choices.some(choice => {
        const value = normaliseProgrammeText(choice);
        if (!title || !value) return false;
        // Short names such as "24" must match the complete answer.
        return value === title ||
            (title.length >= 5 && (` ${value} `).includes(` ${title} `));
    });
}

function isProgrammeIdentificationQuestion(question) {
    const wording = String(question.question || '').trim();
    return /^(?:which|what)\s+(?:(?:tv|television|bbc|itv|british|american)\s+)*(?:programme|program|show|sitcom|soap|drama|series)\b/i.test(wording) ||
        /^(?:name|identify)\s+the\s+(?:programme|program|show|sitcom|soap|drama|series)\b/i.test(wording) ||
        /^(?:which|what)\s+.*\b(?:programme|program|show|sitcom|soap|drama|series)\b.*\?$/i.test(wording);
}

function getProgrammeName(question) {
    if (!question || typeof question !== 'object') return null;

    // Identification questions must NEVER have the answer in the heading.
    if (isProgrammeIdentificationQuestion(question)) return null;

    const title = programmeCandidate(question);
    if (!title || programmeAppearsInAnswers(title, question)) return null;

    // Keep the label neutral if ANY recognised programme is a choice,
    // not just the programme found among this question's tags.
    if (knownProgrammeNames().some(name =>
        programmeAppearsInAnswers(name, question)
    )) {
        return null;
    }

    return title;
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







