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


// ─────────────────────────────────────────────
// GENERAL HELPERS
// ─────────────────────────────────────────────

function shuffleArray(
    array
) {
    const copy =
        [...array];

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

            return String(
                history.get(
                    a.id
                )
            ).localeCompare(
                String(
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

    const history =
        await getQuestionHistory(
            client
        );

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
        await saveQuestionHistory(
            client,
            question.id,
            dateKey
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
    const dateKey =
        getUKDateKey();

    const client =
        await getDatabaseClient();

    try {
        await client.query(
            'BEGIN'
        );

        await client.query(
            'SELECT pg_advisory_xact_lock(74629101)'
        );

        const savedIds =
            await getSavedDailyIds(
                client,
                dateKey
            );

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

        if (
            savedIds !==
            null
        ) {
            console.warn(
                'Saved Daily Quiz contains a question ' +
                'that no longer exists. ' +
                'Rebuilding today\'s quiz.'
            );

            await deleteSavedDaily(
                client,
                dateKey
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

        await saveDailyIds(
            client,
            dateKey,
            questionIds
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
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    DAILY_QUESTION_COUNT,
    shuffleArray,
    getUKDateKey,
    ensureTodaysQuiz
};
