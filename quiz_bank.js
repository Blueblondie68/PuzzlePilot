// quiz_bank.js
// PuzzlePilot Quiz
// Question bank loader
//
// This file controls which quiz packs are currently
// connected to the live PuzzlePilot quiz.
//
// Packs 1-92 are now connected to the live quiz bank.

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
    require('./quiz_pack17.js'),
    require('./quiz_pack18.js'),
    require('./quiz_pack19.js'),
    require('./quiz_pack20.js'),
    require('./quiz_pack21.js'),
    require('./quiz_pack22.js'),
    require('./quiz_pack23.js'),
    require('./quiz_pack24.js'),
    require('./quiz_pack25.js'),
    require('./quiz_pack26.js'),
    require('./quiz_pack27.js'),
    require('./quiz_pack28.js'),
    require('./quiz_pack29.js'),
    require('./quiz_pack30.js'),
    require('./quiz_pack31.js'),
    require('./quiz_pack32.js'),
    require('./quiz_pack33.js'),
    require('./quiz_pack34.js'),
    require('./quiz_pack35.js'),
    require('./quiz_pack36.js'),
    require('./quiz_pack37.js'),
    require('./quiz_pack38.js'),
    require('./quiz_pack39.js'),
    require('./quiz_pack40.js'),
    require('./quiz_pack41.js'),
    require('./quiz_pack42.js'),
    require('./quiz_pack43.js'),
    require('./quiz_pack44.js'),
    require('./quiz_pack45.js'),
    require('./quiz_pack46.js'),
    require('./quiz_pack47.js'),
    require('./quiz_pack48.js'),
    require('./quiz_pack49.js'),
    require('./quiz_pack50.js'),
    require('./quiz_pack51.js'),
    require('./quiz_pack52.js'),
    require('./quiz_pack53.js'),
    require('./quiz_pack54.js'),
    require('./quiz_pack55.js'),
    require('./quiz_pack56.js'),
    require('./quiz_pack57.js'),
    require('./quiz_pack58.js'),
    require('./quiz_pack59.js'),
    require('./quiz_pack60.js'),
    require('./quiz_pack61.js'),
    require('./quiz_pack62.js'),
    require('./quiz_pack63.js'),
    require('./quiz_pack64.js'),
    require('./quiz_pack65.js'),
    require('./quiz_pack66.js'),
    require('./quiz_pack67.js'),
    require('./quiz_pack68.js'),
    require('./quiz_pack69.js'),
    require('./quiz_pack70.js'),
    require('./quiz_pack71.js'),
    require('./quiz_pack72.js'),
    require('./quiz_pack73.js'),
    require('./quiz_pack74.js'),
    require('./quiz_pack75.js'),
    require('./quiz_pack76.js'),
    require('./quiz_pack77.js'),
    require('./quiz_pack78.js'),
    require('./quiz_pack79.js'),
    require('./quiz_pack80.js'),
    require('./quiz_pack81.js'),
    require('./quiz_pack82.js'),
    require('./quiz_pack83.js'),
    require('./quiz_pack84.js'),
    require('./quiz_pack85.js'),
    require('./quiz_pack86.js'),
    require('./quiz_pack87.js'),
    require('./quiz_pack88.js'),
    require('./quiz_pack89.js'),
    require('./quiz_pack90.js'),
    require('./quiz_pack91.js'),
    require('./quiz_pack92.js')
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
