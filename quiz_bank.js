
 // quiz_bank.js
// PuzzlePilot Quiz
// Question bank loader
//
// This file controls which quiz packs are currently
// connected to the live PuzzlePilot quiz.
//
// Packs 1-195 are connected to the live quiz bank.
//

// =====================================================
// QUIZ PACK SETTINGS
// =====================================================

const FIRST_QUIZ_PACK = 1;
const LAST_QUIZ_PACK = 195;

// =====================================================
// LOAD QUIZ PACKS
// =====================================================

const quizPacks = [];

for (
    let packNumber = FIRST_QUIZ_PACK;
    packNumber <= LAST_QUIZ_PACK;
    packNumber++
) {
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

