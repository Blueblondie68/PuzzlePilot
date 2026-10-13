// quiz_pack161.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - The Early Years (1960-1971)
// 44 questions: tv_0157 to tv_0200.
// First dedicated Coronation Street pack; no changes to quiz_bank.js yet.
//
// Format of each entry:
// [question, correct answer, three wrong answers, difficulty, decade, topic]

const facts = [
    // THE BEGINNING - 1960
    ["Who created Coronation Street?", "Tony Warren", ["Jack Rosenthal", "John Sullivan", "Jimmy McGovern"], "Easy", "1960s", "History"],
    ["On which date was the first episode of Coronation Street broadcast?", "9 December 1960", ["9 December 1961", "9 November 1960", "9 January 1961"], "Medium", "1960s", "History"],
    ["Which television company originally produced Coronation Street?", "Granada Television", ["Thames Television", "Yorkshire Television", "Associated Television"], "Easy", "1960s", "History"],
    ["Which character spoke the first lines in Coronation Street's opening episode?", "Elsie Lappin", ["Elsie Tanner", "Annie Walker", "Ena Sharples"], "Hard", "1960s", "History"],
    ["Who took over the Corner Shop from Elsie Lappin in the first episode of Coronation Street?", "Florrie Lindley", ["Minnie Caldwell", "Esther Hayes", "Christine Hardman"], "Medium", "1960s", "Shops"],
    ["Which actress played the original shopkeeper Florrie Lindley?", "Betty Alberge", ["Daphne Oxenford", "Doreen Keogh", "Lynne Carol"], "Hard", "1960s", "Actors"],

    // THE ORIGINAL RESIDENTS
    ["Which actress played Elsie Tanner in the original Coronation Street cast?", "Patricia Phoenix", ["Jean Alexander", "Violet Carson", "Doris Speed"], "Easy", "1960s", "Actors"],
    ["Who played the outspoken Ena Sharples in early Coronation Street?", "Violet Carson", ["Margot Bryant", "Lynne Carol", "Doris Speed"], "Easy", "1960s", "Actors"],
    ["Which actress played the Rovers landlady Annie Walker?", "Doris Speed", ["Violet Carson", "Noel Dyson", "Patricia Phoenix"], "Medium", "1960s", "Actors"],
    ["Who played Ken Barlow when Coronation Street began in 1960?", "William Roache", ["Alan Rothwell", "Jack Howarth", "Philip Lowrie"], "Easy", "1960s", "Actors"],
    ["Which actor played Albert Tatlock in Coronation Street?", "Jack Howarth", ["Arthur Leslie", "Frank Pemberton", "Arthur Lowe"], "Medium", "1960s", "Actors"],
    ["Who played original character Minnie Caldwell?", "Margot Bryant", ["Lynne Carol", "Betty Alberge", "Daphne Oxenford"], "Medium", "1960s", "Actors"],
    ["Which actor played Elsie Tanner's son Dennis in the early years of Coronation Street?", "Philip Lowrie", ["Alan Rothwell", "Peter Adamson", "Frank Pemberton"], "Medium", "1960s", "Actors"],
    ["Which actress played Ena Sharples' friend Martha Longhurst?", "Lynne Carol", ["Margot Bryant", "Jean Alexander", "Noel Dyson"], "Hard", "1960s", "Actors"],
    ["Who was Annie Walker's husband during the early years of Coronation Street?", "Jack Walker", ["Frank Barlow", "Albert Tatlock", "Leonard Swindley"], "Easy", "1960s", "Relationships"],
    ["Which character was the caretaker of Glad Tidings Mission Hall in the early 1960s?", "Ena Sharples", ["Minnie Caldwell", "Esther Hayes", "Martha Longhurst"], "Medium", "1960s", "Characters"],
    ["Which actor played Rovers landlord Jack Walker in the 1960s?", "Arthur Leslie", ["Arthur Lowe", "Jack Howarth", "Peter Adamson"], "Medium", "1960s", "Actors"],

    // THE BARLOWS AND TANNERS
    ["What was Ken Barlow's father's first name in the original Coronation Street family?", "Frank", ["Jack", "Harry", "Albert"], "Medium", "1960s", "Families"],
    ["What was the first name of Ken Barlow's mother?", "Ida", ["Annie", "Elsie", "Vera"], "Medium", "1960s", "Families"],
    ["Who was Ken Barlow's younger brother in the original Coronation Street cast?", "David Barlow", ["Dennis Tanner", "Billy Walker", "Jerry Booth"], "Medium", "1960s", "Families"],
    ["What job did Ken Barlow's father Frank have when Coronation Street began?", "Postman", ["Bus driver", "Builder", "Shopkeeper"], "Medium", "1960s", "Characters"],
    ["Which original Coronation Street character was Dennis Tanner's mother?", "Elsie Tanner", ["Annie Walker", "Ida Barlow", "Florrie Lindley"], "Easy", "1960s", "Families"],
    ["What was the first name of Elsie Tanner's daughter, who was married to Ivan Cheveski?", "Linda", ["Lucille", "Christine", "Susan"], "Medium", "1960s", "Families"],
    ["What was the surname of Elsie Tanner's son-in-law Ivan?", "Cheveski", ["Tatlock", "Fairclough", "Hewitt"], "Hard", "1960s", "Families"],

    // THE MISSION AND THE FIRST DRAMAS
    ["Which early Coronation Street character was played by Dad's Army actor Arthur Lowe?", "Leonard Swindley", ["Albert Tatlock", "Frank Barlow", "Harry Hewitt"], "Medium", "1960s", "Actors"],
    ["Which shop did Leonard Swindley manage in Coronation Street?", "Gamma Garments", ["Miami Modes", "Baldwin's Casuals", "The Kabin"], "Hard", "1960s", "Shops"],
    ["Which Coronation Street spin-off sitcom followed Leonard Swindley after he left the cobbles?", "Pardon the Expression", ["Bless This House", "The Lovers", "Nearest and Dearest"], "Hard", "1960s", "Spin-offs"],
    ["Who was the first character to die in Coronation Street, in December 1960?", "May Hardman", ["Ida Barlow", "Martha Longhurst", "Vera Lomax"], "Hard", "1960s", "Storylines"],
    ["Which early Coronation Street character was May Hardman's daughter?", "Christine Hardman", ["Linda Cheveski", "Lucille Hewitt", "Susan Cunningham"], "Hard", "1960s", "Families"],

    // KEN AND VALERIE
    ["Who was Ken Barlow's first wife in Coronation Street?", "Valerie Tatlock", ["Deirdre Hunt", "Susan Cunningham", "Alma Sedgewick"], "Easy", "1960s", "Relationships"],
    ["Which actress played Ken Barlow's first wife Valerie?", "Anne Reid", ["Doreen Keogh", "Eileen Derbyshire", "Noel Dyson"], "Medium", "1960s", "Actors"],
    ["How was Valerie Tatlock related to Albert Tatlock?", "She was his niece", ["She was his daughter", "She was his sister", "She was his cousin"], "Medium", "1960s", "Families"],
    ["In which year did Ken Barlow marry Valerie Tatlock?", "1962", ["1960", "1965", "1968"], "Hard", "1960s", "Weddings"],
    ["What were the first names of Ken and Valerie Barlow's twins?", "Peter and Susan", ["David and Sarah", "Daniel and Amy", "Simon and Tracy"], "Medium", "1960s", "Families"],
    ["How did Valerie Barlow die in 1971?", "She was electrocuted", ["She died in a road accident", "She died in a house fire", "She fell down the stairs"], "Medium", "1970s", "Storylines"],

    // THE OGDENS AND LATER 1960s
    ["Who played Hilda Ogden in Coronation Street?", "Jean Alexander", ["Doris Speed", "Violet Carson", "Patricia Phoenix"], "Easy", "1960s", "Actors"],
    ["Which actor played Hilda Ogden's husband Stan?", "Bernard Youens", ["Peter Adamson", "Arthur Leslie", "Jack Howarth"], "Medium", "1960s", "Actors"],
    ["In which year did Stan and Hilda Ogden first appear in Coronation Street?", "1964", ["1960", "1967", "1971"], "Hard", "1960s", "History"],
    ["Which of these characters was a daughter of Stan and Hilda Ogden?", "Irma Ogden", ["Lucille Hewitt", "Linda Cheveski", "Susan Barlow"], "Medium", "1960s", "Families"],
    ["Which well-known Coronation Street character died in the Rovers Return's snug in 1964?", "Martha Longhurst", ["Minnie Caldwell", "Ena Sharples", "Annie Walker"], "Hard", "1960s", "Storylines"],
    ["What crashed from a viaduct near Coronation Street in a major 1967 storyline?", "A train", ["A bus", "A tram", "A lorry"], "Medium", "1960s", "Storylines"],
    ["Who did Elsie Tanner marry in 1967?", "Steve Tanner", ["Len Fairclough", "Harry Hewitt", "Frank Barlow"], "Hard", "1960s", "Weddings"],
    ["Who murdered Steve Tanner after he returned to Weatherfield in 1968?", "Joe Donnelli", ["Len Fairclough", "Jerry Booth", "Dennis Tanner"], "Hard", "1960s", "Storylines"],
    ["Which actress played Irma Ogden, daughter of Stan and Hilda?", "Sandra Gough", ["Anne Reid", "Jennifer Moss", "Patricia Shakesby"], "Hard", "1960s", "Actors"]
];

// Build the standard question objects with answers in varying positions.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, decade, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(157 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Coronation Street', decade, topic],
        dailyEligible: true
    };
});

// Validate before handing the questions to the quiz bank.
if (questions.length !== 44 ||
    questions[0].id !== 'tv_0157' ||
    questions[43].id !== 'tv_0200') {
    throw new Error('Pack 161: incorrect question count or ID range');
}

const seenIds = new Set();
const seenQuestions = new Set();
for (const q of questions) {
    const wording = q.question.trim().toLowerCase();
    if (seenIds.has(q.id) || seenQuestions.has(wording) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty)) {
        throw new Error('Pack 161: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenQuestions.add(wording);
}

module.exports = questions;
