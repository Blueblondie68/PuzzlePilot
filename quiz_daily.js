// quiz_daily.js
// PuzzlePilot Quiz
// Daily Quiz selection and saved-Daily handling

const {
    getEligibleDailyQuestions,
    getQuestionsFromIds
} = require('./quiz_bank');

const {
    getDatabaseClient,
    getQuestionHistory,
    saveQuestionHistory,
    getSavedDailyIds,
    deleteSavedDaily,
    saveDailyIds
} = require('./quiz_database');

// ─────────────────────────────────────────────
// SETTINGS
// ─────────────────────────────────────────────

const DAILY_QUESTION_COUNT = 10;
const DAILY_MUSIC_COUNT = 2;

// ─────────────────────────────────────────────
// GENERAL HELPERS
// ─────────────────────────────────────────────

function shuffleArray(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

function getUKDateKey() {
    const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).formatToParts(new Date());

    const year = parts.find(part => part.type === 'year').value;
    const month = parts.find(part => part.type === 'month').value;
    const day = parts.find(part => part.type === 'day').value;

    return `${year}-${month}-${day}`;
}

function categoryName(question) {
    const category = String(question.category || '').trim();
    const name = category.toLowerCase();

    // Older packs use some different names for the same subject.
    if (name === 'tv' || name === 'television') {
        return 'Television';
    }

    if (name === 'food & drink' || name === 'food and drink') {
        return 'Food & Drink';
    }

    if (name === 'science' || name === 'science & nature') {
        return 'Science & Nature';
    }

    if (name === 'music') {
        return 'Music';
    }

    return category || 'General Knowledge';
}

// ─────────────────────────────────────────────
// DAILY QUESTION SELECTION
// ─────────────────────────────────────────────
// Exactly 2 Music questions plus 8 from other subjects.
// Prefer different non-Music categories. If there are
// fewer than 8, cycle through them again as needed.
// Never-used questions are chosen first. Once they run
// out, choose those used longest ago.

function rankCategoryQuestions(questions, history) {
    const shuffled = shuffleArray(questions);

    shuffled.sort((a, b) => {
        const aUsed = history.has(a.id);
        const bUsed = history.has(b.id);

        if (aUsed !== bUsed) {
            return aUsed ? 1 : -1;
        }

        if (!aUsed) {
            return 0;
        }

        return String(history.get(a.id)).localeCompare(
            String(history.get(b.id))
        );
    });

    return shuffled;
}

async function selectDailyQuestions(client, dateKey) {
    const eligible = getEligibleDailyQuestions();

    if (eligible.length < DAILY_QUESTION_COUNT) {
        throw new Error(
            `The Quiz needs at least ${DAILY_QUESTION_COUNT} Daily-eligible questions.`
        );
    }

    const history = await getQuestionHistory(client);
    const groups = new Map();

    for (const question of eligible) {
        const category = categoryName(question);

        if (!groups.has(category)) {
            groups.set(category, []);
        }

        groups.get(category).push(question);
    }

    const music = groups.get('Music') || [];
    const otherCount = eligible.length - music.length;

    if (music.length < DAILY_MUSIC_COUNT ||
        otherCount < DAILY_QUESTION_COUNT - DAILY_MUSIC_COUNT) {
        throw new Error(
            'The Daily Quiz needs at least 2 Music questions and 8 non-Music questions.'
        );
    }

    const selected = rankCategoryQuestions(music, history)
        .slice(0, DAILY_MUSIC_COUNT);

    const otherCategories = shuffleArray(
        [...groups.keys()].filter(category => category !== 'Music')
    );

    const rankedByCategory = new Map();

    for (const category of otherCategories) {
        rankedByCategory.set(
            category,
            rankCategoryQuestions(groups.get(category), history)
        );
    }

    // Each round draws at most one question per subject.
    // When more rounds are needed, reshuffle the subjects.
    while (selected.length < DAILY_QUESTION_COUNT) {
        let addedThisRound = 0;

        for (const category of shuffleArray(otherCategories)) {
            if (selected.length === DAILY_QUESTION_COUNT) {
                break;
            }

            const questions = rankedByCategory.get(category);

            if (questions.length > 0) {
                selected.push(questions.shift());
                addedThisRound++;
            }
        }

        if (addedThisRound === 0) {
            throw new Error(
                'Not enough non-Music questions for the Daily Quiz.'
            );
        }
    }

    const finalSelection = shuffleArray(selected);

    for (const question of finalSelection) {
        await saveQuestionHistory(client, question.id, dateKey);
    }

    return finalSelection;
}

// ─────────────────────────────────────────────
// ENSURE TODAY'S DAILY QUIZ
// ─────────────────────────────────────────────
// A Daily Quiz already saved for the UK date stays
// unchanged, even if PuzzlePilot is redeployed.

async function ensureTodaysQuiz() {
    const dateKey = getUKDateKey();
    const client = await getDatabaseClient();

    try {
        await client.query('BEGIN');
        await client.query(
            'SELECT pg_advisory_xact_lock(74629101)'
        );

        const savedIds = await getSavedDailyIds(client, dateKey);

        if (Array.isArray(savedIds) &&
            savedIds.length === DAILY_QUESTION_COUNT) {
            const savedQuestions = getQuestionsFromIds(savedIds);

            if (savedQuestions.length === DAILY_QUESTION_COUNT) {
                await client.query('COMMIT');
                return { dateKey, questions: savedQuestions };
            }
        }

        if (savedIds !== null) {
            console.warn(
                'Saved Daily Quiz contains a question that no longer exists. ' +
                'Rebuilding today\'s quiz.'
            );

            await deleteSavedDaily(client, dateKey);
        }

        const selected = await selectDailyQuestions(client, dateKey);
        const questionIds = selected.map(question => question.id);

        await saveDailyIds(client, dateKey, questionIds);
        await client.query('COMMIT');

        console.log(`Daily Quiz selected for ${dateKey}`);

        return { dateKey, questions: selected };

    } catch (error) {
        try {
            await client.query('ROLLBACK');
        } catch (rollbackError) {
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
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    DAILY_QUESTION_COUNT,
    shuffleArray,
    getUKDateKey,
    ensureTodaysQuiz
};
