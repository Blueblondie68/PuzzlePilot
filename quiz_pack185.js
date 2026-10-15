// quiz_pack185.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Emmerdale Farm - The Early Years (1972-1974)
// 30 questions: tv_2471 to tv_2500
// Do not change quiz_bank.js until the end of the quiz-building session.

const facts = [
    ["What was Emmerdale called when it first appeared on television in 1972?", "Emmerdale Farm", ["Emmerdale Village", "Yorkshire Farm", "The Dales"], "Easy", "1972", "Origins"],
    ["On what date was the first episode of Emmerdale Farm broadcast?", "16 October 1972", ["2 October 1972", "13 November 1972", "16 October 1973"], "Medium", "1972", "Origins"],
    ["Which ITV company originally launched Emmerdale Farm?", "Yorkshire Television", ["Granada Television", "Thames Television", "Central Television"], "Medium", "1972", "Production"],
    ["Who created Emmerdale Farm?", "Kevin Laffan", ["Tony Warren", "Phil Redmond", "Julia Smith"], "Medium", "1972", "Production"],
    ["What was the fictional village in Emmerdale Farm originally called?", "Beckindale", ["Hotten", "Robblesfield", "Esholt"], "Easy", "1972", "Setting"],
    ["Which farming family was at the centre of Emmerdale Farm when it began?", "The Sugdens", ["The Dingles", "The Tates", "The Kings"], "Easy", "1972", "Families"],
    ["Whose funeral brought the Sugden family together in Emmerdale Farm's first episode?", "Jacob Sugden", ["Sam Pearson", "Joe Sugden", "Henry Wilks"], "Medium", "1972", "Storylines"],
    ["Who was Jacob Sugden's widow?", "Annie Sugden", ["Peggy Skilbeck", "Marian Wilks", "Janie Harker"], "Easy", "1972", "Families"],
    ["Which actress originally played Annie Sugden?", "Sheila Mercier", ["Jo Kendall", "Gail Harrison", "Diane Grayson"], "Easy", "1972", "Actors"],
    ["Who played Joe Sugden when Emmerdale Farm began?", "Frazer Hines", ["Frederick Pyne", "Arthur Pentelow", "Clive Hornby"], "Medium", "1972", "Actors"],
    ["Which actor originally played Jack Sugden in 1972?", "Andrew Burt", ["Clive Hornby", "Frazer Hines", "Patrick Holt"], "Medium", "1972", "Actors"],
    ["What was the name of the pub run by Amos Brearly in early Emmerdale Farm?", "The Woolpack", ["The Queen's Arms", "The Malt Shovel", "The Dog and Gun"], "Easy", "1972", "Locations"],
    ["Which actor played the original Woolpack landlord, Amos Brearly?", "Ronald Magill", ["Arthur Pentelow", "Toke Townley", "Frederick Pyne"], "Medium", "1972", "Actors"],
    ["Who played wealthy newcomer Henry Wilks in the early years of Emmerdale Farm?", "Arthur Pentelow", ["Ronald Magill", "Patrick Holt", "Andrew Burt"], "Medium", "1972", "Actors"],
    ["How was Marian Wilks related to Henry Wilks?", "She was his daughter", ["She was his niece", "She was his sister", "She was his wife"], "Medium", "1972", "Families"],
    ["Which character was the first to be seen on screen in Emmerdale Farm's debut episode?", "Marian Wilks", ["Annie Sugden", "Peggy Skilbeck", "Joe Sugden"], "Hard", "1972", "First Episode"],
    ["Which character spoke the very first line of dialogue in Emmerdale Farm?", "Peggy Skilbeck", ["Annie Sugden", "Marian Wilks", "Jack Sugden"], "Hard", "1972", "First Episode"],
    ["Who was Peggy Skilbeck married to when the series began?", "Matt Skilbeck", ["Joe Sugden", "Jack Sugden", "Amos Brearly"], "Easy", "1972", "Families"],
    ["Apart from helping on the family farm, what was Jack Sugden's profession in the original series?", "Novelist", ["Solicitor", "Vet", "Schoolteacher"], "Medium", "1972", "Characters"],
    ["In 1972, what caused a dispute between Henry Wilks and the Sugdens?", "Access across Emmerdale Farm's land", ["Ownership of The Woolpack", "A disputed family will", "Rent on the village shop"], "Medium", "1972", "Storylines"],
    ["What were the names of Matt and Peggy Skilbeck's twins, born in 1973?", "Sam and Sally", ["Tom and Ruth", "Jack and Jill", "Peter and Polly"], "Medium", "1973", "Births"],
    ["What caused Peggy Skilbeck's sudden death in 1973?", "A brain haemorrhage", ["Pneumonia", "A heart attack", "A drowning accident"], "Medium", "1973", "Deaths"],
    ["Which young woman was murdered in a major Emmerdale Farm storyline in 1973?", "Sharon Crossthwaite", ["Marian Wilks", "Janie Harker", "Alison Gibbons"], "Hard", "1973", "Crime"],
    ["Who murdered Sharon Crossthwaite in 1973?", "Jim Latimer", ["George Verney", "Frank Blakey", "Henry Wilks"], "Hard", "1973", "Crime"],
    ["Which actress played Sharon Crossthwaite in 1973?", "Louise Jameson", ["Jo Kendall", "Gail Harrison", "Sheila Mercier"], "Hard", "1973", "Actors"],
    ["Which local squire horsewhipped Jack Sugden in 1973?", "George Verney", ["Henry Wilks", "Frank Blakey", "Amos Brearly"], "Hard", "1973", "Storylines"],
    ["With which married woman did Jack Sugden have an affair in 1973?", "Laura Verney", ["Marian Wilks", "Christine Sharp", "Janie Harker"], "Hard", "1973", "Relationships"],
    ["Who married Janie Harker in March 1973?", "Frank Blakey", ["Tom Merrick", "Joe Sugden", "Jack Sugden"], "Hard", "1973", "Marriages"],
    ["Who did Joe Sugden marry in 1974?", "Christine Sharp", ["Kathy Gimbel", "Marian Wilks", "Janie Harker"], "Medium", "1974", "Marriages"],
    ["Which woman did Joe Sugden begin seeing after his short-lived marriage ended in 1974?", "Kathy Gimbel", ["Laura Verney", "Marian Wilks", "Janie Harker"], "Hard", "1974", "Relationships"]
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(2471 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Emmerdale', '1970s', year, topic],
        dailyEligible: true
    };
});

module.exports = questions;
