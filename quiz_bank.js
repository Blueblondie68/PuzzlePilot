











// quiz_bank.js
// PuzzlePilot Quiz
// Question bank loader
//
// This file controls which quiz packs are currently
// connected to the live PuzzlePilot quiz.
//
// Packs 1–786 and explicitly approved odd-numbered packs 787–819 are connected.
// Reserved film pack numbers are not loaded until separately approved.
//

// =====================================================
// QUIZ PACK SETTINGS
// =====================================================

const FIRST_QUIZ_PACK = 1;
const LAST_CONTIGUOUS_QUIZ_PACK = 786;
const ADDITIONAL_APPROVED_PACKS = Object.freeze([
    787, 789, 791, 793, 795, 797, 799, 801, 803,
    805, 807, 809, 811, 813, 815, 817, 819
]);
const APPROVED_QUIZ_PACKS = [
    ...Array.from({ length: LAST_CONTIGUOUS_QUIZ_PACK - FIRST_QUIZ_PACK + 1 },
        (_, i) => FIRST_QUIZ_PACK + i),
    ...ADDITIONAL_APPROVED_PACKS
];
if (new Set(APPROVED_QUIZ_PACKS).size !== APPROVED_QUIZ_PACKS.length) {
    throw new Error('Quiz bank contains duplicate approved pack numbers.');
}

// =====================================================
// LOAD QUIZ PACKS
// =====================================================

const quizPacks = [];

for (const packNumber of APPROVED_QUIZ_PACKS) {
    const pack = require(
        './quiz_pack' + packNumber + '.js'
    );

    if (!Array.isArray(pack)) {
        throw new Error(
            'Quiz pack ' + packNumber +
            ' does not export an array.'
        );
    }

    quizPacks.push(pack);
}

// =====================================================
// COMBINE QUESTION BANK
// =====================================================

const questionBank = quizPacks.flat();

// Protect the entire bank, not only IDs within individual packs.
// A duplicate in separate packs must stop startup before syncing to Neon.
const seenQuestionIds = new Set();
for (const question of questionBank) {
    if (!question || typeof question.id !== 'string' ||
        !question.id.trim() || seenQuestionIds.has(question.id)) {
        throw new Error('Quiz bank contains an invalid or duplicate question ID.');
    }
    seenQuestionIds.add(question.id);
}

console.log(
    `Quiz question bank loaded: ` +
    `${questionBank.length} questions`
);

console.log(
    `Quiz packs connected: ` +
    `${quizPacks.length}`
);

// =====================================================
// GET COMPLETE QUESTION BANK
// =====================================================

function getQuestionBank() {
    return questionBank;
}

// =====================================================
// GET DAILY-ELIGIBLE QUESTIONS
// =====================================================

function getEligibleDailyQuestions() {
    return questionBank.filter(
        question =>
            question.dailyEligible !== false
    );
}

// =====================================================
// FIND QUESTIONS BY ID
// =====================================================

function getQuestionsFromIds(ids) {

    const byId = new Map(
        questionBank.map(
            question => [
                question.id,
                question
            ]
        )
    );

    return ids
        .map(
            id => byId.get(id)
        )
        .filter(Boolean);
}

// =====================================================
// EXPORT FUNCTIONS
// =====================================================

module.exports = {
    getQuestionBank,
    getEligibleDailyQuestions,
    getQuestionsFromIds
};