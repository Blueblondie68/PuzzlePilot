// quiz_pack185.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Emmerdale Farm - The Early Years (1972-1974)
// 30 questions: tv_2471 to tv_2500
// Tag audit: complete subject, era, year, storyline and character tags.
// quiz_bank.js remains unchanged.

const facts = [
    // 1972 - origins and original characters
    ["What was Emmerdale called when it first appeared on television?", "Emmerdale Farm", ["Emmerdale Village", "Yorkshire Farm", "The Dales"], "Easy", "1972", "Origins", ["Original Title", "1972 Launch", "Programme Origins", "British Television"]],
    ["On what date was the first episode of Emmerdale Farm broadcast?", "16 October 1972", ["2 October 1972", "13 November 1972", "16 October 1973"], "Medium", "1972", "Origins", ["First Broadcast", "16 October 1972", "Television Premiere", "Programme Anniversary"]],
    ["Which ITV company originally launched Emmerdale Farm?", "Yorkshire Television", ["Granada Television", "Thames Television", "Central Television"], "Medium", "1972", "Production", ["Yorkshire Television", "ITV Regional Franchise", "Original Broadcaster", "Production History"]],
    ["Who created Emmerdale Farm?", "Kevin Laffan", ["Tony Warren", "Phil Redmond", "Julia Smith"], "Medium", "1972", "Production", ["Kevin Laffan", "Programme Creator", "Television Writer", "Production History"]],
    ["What was the fictional village in Emmerdale Farm originally called?", "Beckindale", ["Hotten", "Robblesfield", "Esholt"], "Easy", "1972", "Setting", ["Beckindale", "Fictional Village", "Yorkshire Dales", "Original Setting"]],
    ["Which farming family was at the centre of Emmerdale Farm when it began?", "The Sugdens", ["The Dingles", "The Tates", "The Kings"], "Easy", "1972", "Families", ["Sugden Family", "Farm Inheritance", "Farming Family", "Original Characters"]],
    ["Whose funeral brought the Sugden family together in Emmerdale Farm's first episode?", "Jacob Sugden", ["Sam Pearson", "Joe Sugden", "Henry Wilks"], "Medium", "1972", "Storylines", ["Jacob Sugden", "Sugden Family", "Funeral", "First Episode"]],
    ["Who was Jacob Sugden's widow?", "Annie Sugden", ["Peggy Skilbeck", "Marian Wilks", "Janie Harker"], "Easy", "1972", "Families", ["Annie Sugden", "Jacob Sugden", "Widow", "Sugden Family"]],
    ["Which actress originally played Annie Sugden?", "Sheila Mercier", ["Jo Kendall", "Gail Harrison", "Diane Grayson"], "Easy", "1972", "Actors", ["Sheila Mercier", "Annie Sugden", "Actress", "Original Cast"]],
    ["Who played Joe Sugden when Emmerdale Farm began?", "Frazer Hines", ["Frederick Pyne", "Arthur Pentelow", "Clive Hornby"], "Medium", "1972", "Actors", ["Frazer Hines", "Joe Sugden", "Actor", "Original Cast"]],
    ["Which actor originally played Jack Sugden in 1972?", "Andrew Burt", ["Clive Hornby", "Frazer Hines", "Patrick Holt"], "Medium", "1972", "Actors", ["Andrew Burt", "Jack Sugden", "Actor", "Original Cast"]],
    ["What was the name of the pub run by Amos Brearly in the early years of Emmerdale Farm?", "The Woolpack", ["The Queen's Arms", "The Malt Shovel", "The Dog and Gun"], "Easy", "1972", "Locations", ["The Woolpack", "Amos Brearly", "Village Pub", "Original Location"]],
    ["Which actor played the original Woolpack landlord, Amos Brearly?", "Ronald Magill", ["Arthur Pentelow", "Toke Townley", "Frederick Pyne"], "Medium", "1972", "Actors", ["Ronald Magill", "Amos Brearly", "Actor", "The Woolpack"]],
    ["Who played Henry Wilks in the early years of Emmerdale Farm?", "Arthur Pentelow", ["Ronald Magill", "Patrick Holt", "Andrew Burt"], "Medium", "1972", "Actors", ["Arthur Pentelow", "Henry Wilks", "Actor", "Original Cast"]],
    ["How was Marian Wilks related to Henry Wilks?", "She was his daughter", ["She was his niece", "She was his sister", "She was his wife"], "Medium", "1972", "Families", ["Marian Wilks", "Henry Wilks", "Father And Daughter", "Wilks Family"]],
    ["Which character was the first to be seen on screen in Emmerdale Farm's debut episode?", "Marian Wilks", ["Annie Sugden", "Peggy Skilbeck", "Joe Sugden"], "Hard", "1972", "First Episode", ["Marian Wilks", "First On Screen", "Horse Riding", "Opening Scene"]],
    ["Which character spoke the first line of dialogue in Emmerdale Farm?", "Peggy Skilbeck", ["Annie Sugden", "Marian Wilks", "Jack Sugden"], "Hard", "1972", "First Episode", ["Peggy Skilbeck", "First Spoken Line", "Matt Skilbeck", "Opening Scene"]],
    ["Who was Peggy Skilbeck married to when the series began?", "Matt Skilbeck", ["Joe Sugden", "Jack Sugden", "Amos Brearly"], "Easy", "1972", "Families", ["Peggy Skilbeck", "Matt Skilbeck", "Marriage", "Sugden Family"]],
    ["Apart from farming, what was Jack Sugden's profession in the original series?", "Novelist", ["Solicitor", "Vet", "Schoolteacher"], "Medium", "1972", "Characters", ["Jack Sugden", "Novelist", "Farming", "Writing Career"]],
    ["What caused the early dispute between Henry Wilks and the Sugdens?", "Access across Emmerdale Farm's land", ["Ownership of The Woolpack", "A disputed family will", "Rent on the village shop"], "Medium", "1972", "Storylines", ["Henry Wilks", "Sugden Family", "Right Of Way", "Land Dispute"]],

    // 1973 - early storylines
    ["What were the names of Matt and Peggy Skilbeck's twins?", "Sam and Sally", ["Tom and Ruth", "Jack and Jill", "Peter and Polly"], "Medium", "1973", "Births", ["Sam Skilbeck", "Sally Skilbeck", "Peggy Skilbeck", "Matt Skilbeck"]],
    ["What caused Peggy Skilbeck's sudden death?", "A brain haemorrhage", ["Pneumonia", "A heart attack", "A drowning accident"], "Medium", "1973", "Deaths", ["Peggy Skilbeck", "Brain Haemorrhage", "Matt Skilbeck", "Sudden Death"]],
    ["Which young woman was murdered in one of Emmerdale Farm's earliest major crime storylines?", "Sharon Crossthwaite", ["Marian Wilks", "Janie Harker", "Alison Gibbons"], "Hard", "1973", "Crime", ["Sharon Crossthwaite", "Murder", "Village Crime", "1973 Storyline"]],
    ["Who murdered Sharon Crossthwaite?", "Jim Latimer", ["George Verney", "Frank Blakey", "Henry Wilks"], "Hard", "1973", "Crime", ["Jim Latimer", "Sharon Crossthwaite", "Murderer", "Police Investigation"]],
    ["Which actress played Sharon Crossthwaite?", "Louise Jameson", ["Jo Kendall", "Gail Harrison", "Sheila Mercier"], "Hard", "1973", "Actors", ["Louise Jameson", "Sharon Crossthwaite", "Actress", "Guest Cast"]],
    ["Which local squire horsewhipped Jack Sugden?", "George Verney", ["Henry Wilks", "Frank Blakey", "Amos Brearly"], "Hard", "1973", "Storylines", ["George Verney", "Jack Sugden", "Horsewhipping", "Hunting Crop"]],
    ["With which married woman did Jack Sugden have an affair?", "Laura Verney", ["Marian Wilks", "Christine Sharp", "Janie Harker"], "Hard", "1973", "Relationships", ["Jack Sugden", "Laura Verney", "George Verney", "Extramarital Affair"]],
    ["Who married Janie Harker in 1973?", "Frank Blakey", ["Tom Merrick", "Joe Sugden", "Jack Sugden"], "Hard", "1973", "Marriages", ["Janie Harker", "Frank Blakey", "Wedding", "March 1973"]],

    // 1974 - marriages and relationships
    ["Who did Joe Sugden marry in 1974?", "Christine Sharp", ["Kathy Gimbel", "Marian Wilks", "Janie Harker"], "Medium", "1974", "Marriages", ["Joe Sugden", "Christine Sharp", "First Marriage", "September 1974"]],
    ["Which woman did Joe Sugden begin seeing after he separated from Christine Sharp in 1974?", "Kathy Gimbel", ["Laura Verney", "Marian Wilks", "Janie Harker"], "Hard", "1974", "Relationships", ["Joe Sugden", "Kathy Gimbel", "Christine Sharp", "Separation"]]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, detailTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(2471 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Emmerdale', 'Emmerdale Farm', '1970s', year, topic, ...detailTags])],
        dailyEligible: true
    };
});

// =====================================================
// VALIDATION
// =====================================================

if (
    questions.length !== 30 ||
    questions[0].id !== 'tv_2471' ||
    questions[questions.length - 1].id !== 'tv_2500' ||
    questions.filter(q => q.tags.includes('1972')).length !== 20 ||
    questions.filter(q => q.tags.includes('1973')).length !== 8 ||
    questions.filter(q => q.tags.includes('1974')).length !== 2
) {
    throw new Error('Pack 185: incorrect question count, IDs or year distribution');
}

const seenIds = new Set();
const seenQuestions = new Set();

for (const q of questions) {
    const key = q.question.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
    if (
        seenIds.has(q.id) ||
        seenQuestions.has(key) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        q.category !== 'Television' ||
        !q.dailyEligible ||
        q.tags.length !== 10 ||
        q.tags.some(tag => typeof tag !== 'string' || !tag.trim())
    ) {
        throw new Error('Pack 185: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
