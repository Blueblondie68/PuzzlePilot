// quiz_bank.js
// PuzzlePilot Quiz
// Question bank loader
//
// This file controls which quiz packs are currently
// connected to the live PuzzlePilot quiz.
//
// IMPORTANT:
// Keep Packs 1-17 only until the split quiz engine
// has been deployed and fully tested.

const quizPacks = [
    require('./quiz_pack1.js'),
    require('./quiz_pack2.js'),
    require('./quiz_pack3.js'),
    require('./quiz_pack4.js'),
    require('./quiz_pack5.js'),
    require('./quiz_pack6.js'),
    require('./quiz_pack7.js'),
    require('./quiz_pack8.js'),
    require('./quiz_pack9.js'),
    require('./quiz_pack10.js'),
    require('./quiz_pack11.js'),
    require('./quiz_pack12.js'),
    require('./quiz_pack13.js'),
    require('./quiz_pack14.js'),
    require('./quiz_pack15.js'),
    require('./quiz_pack16.js'),
    require('./quiz_pack17.js')
];

const questionBank =
    quizPacks.flat();

console.log(
    `Quiz question bank loaded: ` +
    `${questionBank.length} questions`
);

function getQuestionBank() {
    return questionBank;
}

function getEligibleDailyQuestions() {
    return questionBank.filter(
        question =>
            question.dailyEligible !==
            false
    );
}

function getQuestionsFromIds(
    ids
) {
    const byId =
        new Map(
            questionBank.map(
                question => [
                    question.id,
                    question
                ]
            )
        );

    return ids
        .map(
            id =>
                byId.get(id)
        )
        .filter(Boolean);
}

module.exports = {
    getQuestionBank,
    getEligibleDailyQuestions,
    getQuestionsFromIds
};
