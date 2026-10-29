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
    ["Which actress played Florrie Lindley, who took over the Corner Shop in the first episode?", "Betty Alberge", ["Daphne Oxenford", "Doreen Keogh", "Lynne Carol"], "Hard", "1960s", "Actors"],

    // THE ORIGINAL RESIDENTS
    ["Which actress originally played Elsie Tanner?", "Patricia Phoenix", ["Jean Alexander", "Violet Carson", "Doris Speed"], "Easy", "1960s", "Actors"],
    ["Who played the outspoken Ena Sharples in Coronation Street?", "Violet Carson", ["Margot Bryant", "Lynne Carol", "Doris Speed"], "Easy", "1960s", "Actors"],
    ["Which actress played the Rovers landlady Annie Walker?", "Doris Speed", ["Violet Carson", "Noel Dyson", "Patricia Phoenix"], "Medium", "1960s", "Actors"],
    ["Who played Ken Barlow in Coronation Street's first episode?", "William Roache", ["Alan Rothwell", "Jack Howarth", "Philip Lowrie"], "Easy", "1960s", "Actors"],
    ["Which actor played Albert Tatlock in Coronation Street?", "Jack Howarth", ["Arthur Leslie", "Frank Pemberton", "Arthur Lowe"], "Medium", "1960s", "Actors"],
    ["Which actress played Minnie Caldwell?", "Margot Bryant", ["Lynne Carol", "Betty Alberge", "Daphne Oxenford"], "Medium", "1960s", "Actors"],
    ["Which actor played Dennis Tanner, Elsie Tanner's son?", "Philip Lowrie", ["Alan Rothwell", "Peter Adamson", "Frank Pemberton"], "Medium", "1960s", "Actors"],
    ["Which actress played Ena Sharples' friend Martha Longhurst?", "Lynne Carol", ["Margot Bryant", "Jean Alexander", "Noel Dyson"], "Hard", "1960s", "Actors"],
    ["Who was Annie Walker's husband in Coronation Street?", "Jack Walker", ["Frank Barlow", "Albert Tatlock", "Leonard Swindley"], "Easy", "1960s", "Relationships"],
    ["Who was the caretaker of Glad Tidings Mission Hall?", "Ena Sharples", ["Minnie Caldwell", "Esther Hayes", "Martha Longhurst"], "Medium", "1960s", "Characters"],
    ["Which actor played Jack Walker, landlord of the Rovers Return?", "Arthur Leslie", ["Arthur Lowe", "Jack Howarth", "Peter Adamson"], "Medium", "1960s", "Actors"],

    // THE BARLOWS AND TANNERS
    ["What was the first name of Ken Barlow's father?", "Frank", ["Jack", "Harry", "Albert"], "Medium", "1960s", "Families"],
    ["What was the first name of Ken Barlow's mother?", "Ida", ["Annie", "Elsie", "Vera"], "Medium", "1960s", "Families"],
    ["Who was Ken Barlow's younger brother?", "David Barlow", ["Dennis Tanner", "Billy Walker", "Jerry Booth"], "Medium", "1960s", "Families"],
    ["What job did Frank Barlow have when Coronation Street began?", "Postman", ["Bus driver", "Builder", "Shopkeeper"], "Medium", "1960s", "Characters"],
    ["Who was Dennis Tanner's mother?", "Elsie Tanner", ["Annie Walker", "Ida Barlow", "Florrie Lindley"], "Easy", "1960s", "Families"],
    ["What was the first name of Elsie Tanner's daughter, who was married to Ivan Cheveski?", "Linda", ["Lucille", "Christine", "Susan"], "Medium", "1960s", "Families"],
    ["What was the surname of Elsie Tanner's son-in-law Ivan?", "Cheveski", ["Tatlock", "Fairclough", "Hewitt"], "Hard", "1960s", "Families"],

    // THE MISSION AND THE FIRST DRAMAS
    ["Which Coronation Street character was played by Dad's Army actor Arthur Lowe?", "Leonard Swindley", ["Albert Tatlock", "Frank Barlow", "Harry Hewitt"], "Medium", "1960s", "Actors"],
    ["Which shop did Leonard Swindley manage in Coronation Street?", "Gamma Garments", ["Miami Modes", "Baldwin's Casuals", "The Kabin"], "Hard", "1960s", "Shops"],
    ["Which Coronation Street spin-off sitcom followed Leonard Swindley after he left the cobbles?", "Pardon the Expression", ["Bless This House", "The Lovers", "Nearest and Dearest"], "Hard", "1960s", "Spin-offs"],
    ["Who was the first character to die in Coronation Street?", "May Hardman", ["Ida Barlow", "Martha Longhurst", "Vera Lomax"], "Hard", "1960s", "Storylines"],
    ["Who was May Hardman's daughter?", "Christine Hardman", ["Linda Cheveski", "Lucille Hewitt", "Susan Cunningham"], "Hard", "1960s", "Families"],

    // KEN AND VALERIE
    ["Who was Ken Barlow's first wife in Coronation Street?", "Valerie Tatlock", ["Deirdre Hunt", "Susan Cunningham", "Alma Sedgewick"], "Easy", "1960s", "Relationships"],
    ["Which actress played Ken Barlow's first wife Valerie?", "Anne Reid", ["Doreen Keogh", "Eileen Derbyshire", "Noel Dyson"], "Medium", "1960s", "Actors"],
    ["How was Valerie Tatlock related to Albert Tatlock?", "She was his niece", ["She was his daughter", "She was his sister", "She was his cousin"], "Medium", "1960s", "Families"],
    ["In which year did Ken Barlow marry Valerie Tatlock?", "1962", ["1960", "1965", "1968"], "Hard", "1960s", "Weddings"],
    ["What were the first names of Ken and Valerie Barlow's twins?", "Peter and Susan", ["David and Sarah", "Daniel and Amy", "Simon and Tracy"], "Medium", "1960s", "Families"],
    ["How did Ken Barlow's first wife, Valerie, die?", "She was electrocuted", ["She died in a road accident", "She died in a house fire", "She fell down the stairs"], "Medium", "1970s", "Storylines"],

    // THE OGDENS AND LATER 1960s
    ["Who played Hilda Ogden in Coronation Street?", "Jean Alexander", ["Doris Speed", "Violet Carson", "Patricia Phoenix"], "Easy", "1960s", "Actors"],
    ["Which actor played Hilda Ogden's husband Stan?", "Bernard Youens", ["Peter Adamson", "Arthur Leslie", "Jack Howarth"], "Medium", "1960s", "Actors"],
    ["In which year did Stan and Hilda Ogden first appear in Coronation Street?", "1964", ["1960", "1967", "1971"], "Hard", "1960s", "History"],
    ["Which of these characters was a daughter of Stan and Hilda Ogden?", "Irma Ogden", ["Lucille Hewitt", "Linda Cheveski", "Susan Barlow"], "Medium", "1960s", "Families"],
    ["Which Coronation Street character died in the Rovers Return's snug?", "Martha Longhurst", ["Minnie Caldwell", "Ena Sharples", "Annie Walker"], "Hard", "1960s", "Storylines"],
    ["What crashed from a viaduct onto Coronation Street?", "A train", ["A bus", "A tram", "A lorry"], "Medium", "1960s", "Storylines"],
    ["Who did Elsie Tanner marry in 1967?", "Steve Tanner", ["Len Fairclough", "Harry Hewitt", "Frank Barlow"], "Hard", "1960s", "Weddings"],
    ["Who murdered Elsie Tanner's husband Steve?", "Joe Donnelli", ["Len Fairclough", "Jerry Booth", "Dennis Tanner"], "Hard", "1960s", "Storylines"],
    ["Which actress played Irma Ogden, daughter of Stan and Hilda?", "Sandra Gough", ["Anne Reid", "Jennifer Moss", "Patricia Shakesby"], "Hard", "1960s", "Actors"]
];

// Individual question tags: names, storylines, cast and specific years.
// These expand the existing decade and topic tags without replacing them.
const detailTags = {
    tv_0157: ['Tony Warren', 'creator', 'writers', '1960', 'soap origins', 'Granada Television'],
    tv_0158: ['first episode', 'premiere', '9 December 1960', '1960', 'broadcast history', 'Granada Television'],
    tv_0159: ['Granada Television', 'original broadcaster', '1960', 'Manchester television', 'production history'],
    tv_0160: ['Elsie Lappin', 'Maudie Edwards', 'opening dialogue', 'first episode', 'Corner Shop', '1960'],
    tv_0161: ['Florrie Lindley', 'Elsie Lappin', 'Corner Shop', 'first episode', '1960', 'shopkeepers'],
    tv_0162: ['Betty Alberge', 'Florrie Lindley', 'Corner Shop', '1960', 'original cast', 'actresses'],
    tv_0163: ['Patricia Phoenix', 'Elsie Tanner', 'original cast', '1960', 'actresses', 'Tanner family'],
    tv_0164: ['Violet Carson', 'Ena Sharples', 'original cast', '1960', 'actresses', 'Mission Hall'],
    tv_0165: ['Doris Speed', 'Annie Walker', 'Rovers Return', 'original cast', '1960', 'actresses'],
    tv_0166: ['William Roache', 'Ken Barlow', 'original cast', 'first episode', '1960', 'Barlow family'],
    tv_0167: ['Jack Howarth', 'Albert Tatlock', 'original cast', '1960', 'actors', 'Tatlock family'],
    tv_0168: ['Margot Bryant', 'Minnie Caldwell', 'original cast', '1960', 'actresses'],
    tv_0169: ['Philip Lowrie', 'Dennis Tanner', 'Elsie Tanner', 'Tanner family', 'original cast', 'actors'],
    tv_0170: ['Lynne Carol', 'Martha Longhurst', 'Ena Sharples', 'Rovers Return', 'actresses'],
    tv_0171: ['Annie Walker', 'Jack Walker', 'marriage', 'Rovers Return', 'Walker family', 'landlords'],
    tv_0172: ['Ena Sharples', 'Glad Tidings Mission Hall', 'caretakers', 'Violet Carson', 'Mission Hall'],
    tv_0173: ['Arthur Leslie', 'Jack Walker', 'Rovers Return', 'landlords', 'Walker family', 'actors'],
    tv_0174: ['Frank Barlow', 'Ken Barlow', 'Barlow family', 'original cast', '1960', 'parents'],
    tv_0175: ['Ida Barlow', 'Ken Barlow', 'Barlow family', 'original cast', '1960', 'parents'],
    tv_0176: ['David Barlow', 'Ken Barlow', 'Barlow family', 'Alan Rothwell', 'brothers', 'original cast'],
    tv_0177: ['Frank Barlow', 'postman', 'Ken Barlow', 'Barlow family', 'employment', '1960'],
    tv_0178: ['Elsie Tanner', 'Dennis Tanner', 'Tanner family', 'mother and son', 'family relationships'],
    tv_0179: ['Linda Cheveski', 'Elsie Tanner', 'Ivan Cheveski', 'Tanner family', 'marriage', 'family relationships'],
    tv_0180: ['Ivan Cheveski', 'Linda Cheveski', 'Elsie Tanner', 'Tanner family', 'family relationships'],
    tv_0181: ['Arthur Lowe', 'Leonard Swindley', "Dad's Army", 'actors', 'Mission Hall', 'shop management'],
    tv_0182: ['Leonard Swindley', 'Gamma Garments', 'shops', 'Arthur Lowe', 'retail history'],
    tv_0183: ['Leonard Swindley', 'Pardon the Expression', 'Arthur Lowe', 'spin-off comedy', '1965'],
    tv_0184: ['May Hardman', 'Christine Hardman', 'first death', 'December 1960', '1960', 'early storylines'],
    tv_0185: ['May Hardman', 'Christine Hardman', 'Hardman family', 'mother and daughter', '1960'],
    tv_0186: ['Ken Barlow', 'Valerie Tatlock', 'Valerie Barlow', 'marriage', 'Barlow family', '1962'],
    tv_0187: ['Anne Reid', 'Valerie Barlow', 'Ken Barlow', 'Barlow family', 'actresses'],
    tv_0188: ['Valerie Tatlock', 'Albert Tatlock', 'Tatlock family', 'niece', 'family relationships'],
    tv_0189: ['Ken Barlow', 'Valerie Tatlock', 'weddings', '1962', '4 August 1962', 'Barlow family'],
    tv_0190: ['Ken Barlow', 'Valerie Barlow', 'Peter Barlow', 'Susan Barlow', 'twins', '1965', 'Barlow family'],
    tv_0191: ['Valerie Barlow', 'Anne Reid', 'electrocution', '1971', 'hairdryer', 'death storylines', 'Ken Barlow'],
    tv_0192: ['Jean Alexander', 'Hilda Ogden', 'Ogden family', 'actresses', '1964', 'original Ogdens'],
    tv_0193: ['Bernard Youens', 'Stan Ogden', 'Hilda Ogden', 'Ogden family', 'actors', '1964'],
    tv_0194: ['Stan Ogden', 'Hilda Ogden', '1964', 'first appearances', 'Ogden family'],
    tv_0195: ['Irma Ogden', 'Irma Barlow', 'Freda Ogden', 'Stan Ogden', 'Hilda Ogden', 'Ogden family', 'daughters'],
    tv_0196: ['Martha Longhurst', 'Rovers Return', 'snug', 'death storylines', '1964', 'Lynne Carol'],
    tv_0197: ['goods train', 'train derailment', 'viaduct', '1967', 'major storylines', 'disasters'],
    tv_0198: ['Elsie Tanner', 'Steve Tanner', '1967', 'weddings', 'Tanner family', 'second husband'],
    tv_0199: ['Steve Tanner', 'Joe Donnelli', 'Elsie Tanner', '1968', 'murder', 'crime storylines'],
    tv_0200: ['Sandra Gough', 'Irma Ogden', 'Irma Barlow', 'Hilda Ogden', 'Stan Ogden', 'Ogden family', 'actresses'],
};

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
        tags: [...new Set([
            'Soaps', 'Coronation Street', decade, topic,
            'Television', 'ITV', 'British television',
            'British soap operas', 'Weatherfield',
            'Coronation Street early years',
            ...detailTags['tv_' + String(157 + index).padStart(4, '0')]
        ])],
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
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        q.tags.length < 13 ||
        new Set(q.tags).size !== q.tags.length) {
        throw new Error('Pack 161: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenQuestions.add(wording);
}

module.exports = questions;
