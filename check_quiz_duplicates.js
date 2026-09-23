// check_quiz_duplicates.js
// PuzzlePilot Quiz Bank Checker
//
// Checks every quiz_pack*.js file automatically.
//
// It looks for:
// - duplicate question IDs
// - exact duplicate questions
// - likely duplicate questions
// - missing required fields
// - duplicate answer choices
// - correct answers missing from the answer choices
//
// It also prints:
// - number of packs
// - total questions
// - totals by category
// - totals by difficulty

const fs = require('fs');
const path = require('path');

// ─────────────────────────────────────────────
// SETTINGS
// ─────────────────────────────────────────────

const QUIZ_PACK_PATTERN =
    /^quiz_pack(\d+)\.js$/i;

// Words that are not very useful when comparing
// whether two questions are similar.
const STOP_WORDS = new Set([
    'a',
    'an',
    'and',
    'are',
    'as',
    'at',
    'be',
    'by',
    'did',
    'do',
    'does',
    'for',
    'from',
    'had',
    'has',
    'have',
    'in',
    'is',
    'it',
    'its',
    'of',
    'on',
    'or',
    'the',
    'to',
    'was',
    'were',
    'what',
    'when',
    'where',
    'which',
    'who',
    'with'
]);

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

function normaliseText(text) {
    return String(text || '')
        .toLowerCase()
        .replace(/[’‘]/g, "'")
        .replace(/[“”]/g, '"')
        .replace(/[^a-z0-9]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function usefulWords(text) {
    return new Set(
        normaliseText(text)
            .split(' ')
            .filter(word =>
                word.length > 2 &&
                !STOP_WORDS.has(word)
            )
    );
}

function jaccardSimilarity(setA, setB) {
    if (
        setA.size === 0 ||
        setB.size === 0
    ) {
        return 0;
    }

    let intersection = 0;

    for (const word of setA) {
        if (setB.has(word)) {
            intersection++;
        }
    }

    const union =
        new Set([
            ...setA,
            ...setB
        ]).size;

    return intersection / union;
}

function questionLabel(item) {
    return (
        `${item.file} | ` +
        `${item.question.id || 'NO ID'}`
    );
}

function printHeading(text) {
    console.log('');
    console.log(
        '============================================================'
    );
    console.log(text);
    console.log(
        '============================================================'
    );
}

function addCount(object, key) {
    const safeKey =
        key || 'Missing';

    object[safeKey] =
        (object[safeKey] || 0) + 1;
}

// ─────────────────────────────────────────────
// FIND ALL QUIZ PACKS
// ─────────────────────────────────────────────

const packFiles = fs
    .readdirSync(__dirname)
    .filter(file =>
        QUIZ_PACK_PATTERN.test(file)
    )
    .sort((a, b) => {
        const aNumber =
            Number(
                a.match(
                    QUIZ_PACK_PATTERN
                )[1]
            );

        const bNumber =
            Number(
                b.match(
                    QUIZ_PACK_PATTERN
                )[1]
            );

        return aNumber - bNumber;
    });

if (packFiles.length === 0) {
    console.error(
        'ERROR: No quiz_pack*.js files were found.'
    );

    process.exitCode = 1;
    return;
}

console.log('');
console.log(
    `Found ${packFiles.length} quiz pack(s).`
);

// ─────────────────────────────────────────────
// LOAD ALL QUESTIONS
// ─────────────────────────────────────────────

const allQuestions = [];

let loadErrors = 0;

for (const file of packFiles) {
    const fullPath =
        path.join(
            __dirname,
            file
        );

    try {
        delete require.cache[
            require.resolve(fullPath)
        ];

        const pack =
            require(fullPath);

        if (!Array.isArray(pack)) {
            console.error(
                `ERROR: ${file} does not export an array.`
            );

            loadErrors++;
            continue;
        }

        console.log(
            `${file}: ${pack.length} questions`
        );

        for (const question of pack) {
            allQuestions.push({
                file,
                question
            });
        }
    } catch (error) {
        console.error('');
        console.error(
            `ERROR loading ${file}`
        );
        console.error(
            error.message
        );

        loadErrors++;
    }
}

// ─────────────────────────────────────────────
// SUMMARY COUNTS
// ─────────────────────────────────────────────

const categoryCounts = {};
const difficultyCounts = {};

for (const item of allQuestions) {
    addCount(
        categoryCounts,
        item.question.category
    );

    addCount(
        difficultyCounts,
        item.question.difficulty
    );
}

printHeading(
    'PUZZLEPILOT QUIZ BANK SUMMARY'
);

console.log(
    `Quiz packs: ${packFiles.length}`
);

console.log(
    `Total question entries: ${allQuestions.length}`
);

console.log('');
console.log('Questions by category:');

for (
    const category of
    Object.keys(categoryCounts).sort()
) {
    console.log(
        `  ${category}: ${categoryCounts[category]}`
    );
}

console.log('');
console.log('Questions by difficulty:');

for (
    const difficulty of
    Object.keys(difficultyCounts).sort()
) {
    console.log(
        `  ${difficulty}: ${difficultyCounts[difficulty]}`
    );
}

// ─────────────────────────────────────────────
// STRUCTURE CHECKS
// ─────────────────────────────────────────────

const errors = [];
const warnings = [];

const requiredFields = [
    'id',
    'category',
    'question',
    'answers',
    'correctAnswer',
    'difficulty',
    'tags',
    'dailyEligible'
];

for (const item of allQuestions) {
    const q =
        item.question;

    if (
        !q ||
        typeof q !== 'object'
    ) {
        errors.push(
            `${item.file} contains an invalid question entry.`
        );

        continue;
    }

    for (const field of requiredFields) {
        if (
            q[field] === undefined ||
            q[field] === null ||
            q[field] === ''
        ) {
            errors.push(
                `${questionLabel(item)} is missing "${field}".`
            );
        }
    }

    if (!Array.isArray(q.answers)) {
        errors.push(
            `${questionLabel(item)} does not have an answers array.`
        );
    } else {
        if (q.answers.length !== 4) {
            warnings.push(
                `${questionLabel(item)} has ${q.answers.length} answer choices instead of 4.`
            );
        }

        const normalisedAnswers =
            q.answers.map(
                answer =>
                    normaliseText(answer)
            );

        const uniqueAnswers =
            new Set(
                normalisedAnswers
            );

        if (
            uniqueAnswers.size !==
            normalisedAnswers.length
        ) {
            errors.push(
                `${questionLabel(item)} contains duplicate answer choices.`
            );
        }

        const correct =
            normaliseText(
                q.correctAnswer
            );

        if (
            correct &&
            !normalisedAnswers.includes(
                correct
            )
        ) {
            errors.push(
                `${questionLabel(item)} has a correctAnswer that is not in its answers list.`
            );
        }
    }

    if (!Array.isArray(q.tags)) {
        errors.push(
            `${questionLabel(item)} does not have a tags array.`
        );
    }

    if (
        typeof q.dailyEligible !==
        'boolean'
    ) {
        errors.push(
            `${questionLabel(item)} has an invalid dailyEligible value.`
        );
    }
}

// ─────────────────────────────────────────────
// DUPLICATE ID CHECK
// ─────────────────────────────────────────────

const ids = new Map();

for (const item of allQuestions) {
    const id =
        normaliseText(
            item.question.id
        );

    if (!id) {
        continue;
    }

    if (ids.has(id)) {
        const first =
            ids.get(id);

        errors.push(
            `DUPLICATE ID: "${item.question.id}"\n` +
            `    ${questionLabel(first)}\n` +
            `    ${questionLabel(item)}`
        );
    } else {
        ids.set(
            id,
            item
        );
    }
}

// ─────────────────────────────────────────────
// EXACT DUPLICATE QUESTION CHECK
// ─────────────────────────────────────────────

const questionTexts =
    new Map();

const exactDuplicatePairs =
    new Set();

for (const item of allQuestions) {
    const text =
        normaliseText(
            item.question.question
        );

    if (!text) {
        continue;
    }

    if (questionTexts.has(text)) {
        const first =
            questionTexts.get(text);

        const pairKey = [
            questionLabel(first),
            questionLabel(item)
        ]
            .sort()
            .join('|||');

        if (
            !exactDuplicatePairs.has(
                pairKey
            )
        ) {
            exactDuplicatePairs.add(
                pairKey
            );

            errors.push(
                `EXACT DUPLICATE QUESTION:\n` +
                `    ${questionLabel(first)}\n` +
                `    ${first.question.question}\n` +
                `    ${questionLabel(item)}\n` +
                `    ${item.question.question}`
            );
        }
    } else {
        questionTexts.set(
            text,
            item
        );
    }
}

// ─────────────────────────────────────────────
// POSSIBLE / NEAR DUPLICATES
// ─────────────────────────────────────────────

const possibleDuplicates = [];

for (
    let i = 0;
    i < allQuestions.length;
    i++
) {
    const first =
        allQuestions[i];

    const firstQuestion =
        first.question;

    const firstText =
        normaliseText(
            firstQuestion.question
        );

    const firstWords =
        usefulWords(
            firstQuestion.question
        );

    for (
        let j = i + 1;
        j < allQuestions.length;
        j++
    ) {
        const second =
            allQuestions[j];

        const secondQuestion =
            second.question;

        // Only compare questions in the
        // same category.
        if (
            normaliseText(
                firstQuestion.category
            ) !==
            normaliseText(
                secondQuestion.category
            )
        ) {
            continue;
        }

        const secondText =
            normaliseText(
                secondQuestion.question
            );

        // Exact duplicates were already
        // reported above.
        if (
            firstText &&
            firstText === secondText
        ) {
            continue;
        }

        const secondWords =
            usefulWords(
                secondQuestion.question
            );

        const similarity =
            jaccardSimilarity(
                firstWords,
                secondWords
            );

        const sameAnswer =
            normaliseText(
                firstQuestion.correctAnswer
            ) !== '' &&
            normaliseText(
                firstQuestion.correctAnswer
            ) ===
            normaliseText(
                secondQuestion.correctAnswer
            );

        // High wording similarity.
        //
        // Or:
        // same answer plus enough shared
        // wording to deserve a human check.
        const looksSimilar =
            similarity >= 0.58 ||
            (
                sameAnswer &&
                similarity >= 0.28
            );

        if (!looksSimilar) {
            continue;
        }

        possibleDuplicates.push({
            first,
            second,
            similarity,
            sameAnswer
        });
    }
}

// Sort strongest matches first.
possibleDuplicates.sort(
    (a, b) =>
        b.similarity -
        a.similarity
);

// ─────────────────────────────────────────────
// PRINT ERRORS
// ─────────────────────────────────────────────

printHeading(
    'ERRORS / DEFINITE PROBLEMS'
);

if (
    errors.length === 0 &&
    loadErrors === 0
) {
    console.log(
        'No definite structural or exact-duplicate problems found.'
    );
} else {
    if (loadErrors > 0) {
        console.log(
            `${loadErrors} pack(s) could not be loaded.`
        );
        console.log('');
    }

    errors.forEach(
        (error, index) => {
            console.log(
                `${index + 1}. ${error}`
            );
            console.log('');
        }
    );
}

// ─────────────────────────────────────────────
// PRINT GENERAL WARNINGS
// ─────────────────────────────────────────────

printHeading(
    'OTHER WARNINGS'
);

if (warnings.length === 0) {
    console.log(
        'No general warnings found.'
    );
} else {
    warnings.forEach(
        (warning, index) => {
            console.log(
                `${index + 1}. ${warning}`
            );
        }
    );
}

// ─────────────────────────────────────────────
// PRINT POSSIBLE DUPLICATES
// ─────────────────────────────────────────────

printHeading(
    'POSSIBLE / NEAR DUPLICATES TO REVIEW'
);

if (
    possibleDuplicates.length === 0
) {
    console.log(
        'No possible near duplicates found.'
    );
} else {
    possibleDuplicates.forEach(
        (match, index) => {
            const percent =
                Math.round(
                    match.similarity *
                    100
                );

            console.log(
                `${index + 1}. Similarity: ${percent}%` +
                (
                    match.sameAnswer
                        ? ' | SAME ANSWER'
                        : ''
                )
            );

            console.log(
                `   ${questionLabel(match.first)}`
            );

            console.log(
                `   ${match.first.question.question}`
            );

            console.log(
                `   Answer: ${match.first.question.correctAnswer}`
            );

            console.log('');

            console.log(
                `   ${questionLabel(match.second)}`
            );

            console.log(
                `   ${match.second.question.question}`
            );

            console.log(
                `   Answer: ${match.second.question.correctAnswer}`
            );

            console.log('');
        }
    );
}

// ─────────────────────────────────────────────
// FINAL RESULT
// ─────────────────────────────────────────────

printHeading(
    'FINAL RESULT'
);

console.log(
    `Packs checked: ${packFiles.length}`
);

console.log(
    `Question entries checked: ${allQuestions.length}`
);

console.log(
    `Definite problems: ${errors.length + loadErrors}`
);

console.log(
    `Other warnings: ${warnings.length}`
);

console.log(
    `Possible near duplicates: ${possibleDuplicates.length}`
);

if (
    errors.length === 0 &&
    loadErrors === 0
) {
    console.log('');
    console.log(
        'PASS: No definite duplicate or structural errors found.'
    );

    if (
        possibleDuplicates.length > 0
    ) {
        console.log(
            'Review the possible duplicates listed above.'
        );
    }
} else {
    console.log('');
    console.log(
        'REVIEW REQUIRED: Definite problems were found.'
    );
}

// Definite errors return a failure code.
// Near-duplicate warnings alone do not.
if (
    errors.length > 0 ||
    loadErrors > 0
) {
    process.exitCode = 1;
}
