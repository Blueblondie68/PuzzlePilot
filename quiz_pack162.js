// quiz_pack162.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - The 1970s
// 100 questions: tv_0201 to tv_0300
// Wording and tagging audit. Existing IDs, answers, difficulty and daily eligibility kept.
// Leave quiz_bank.js unchanged until the end of the session.

// Each entry: question, correct answer, three wrong answers, difficulty, decade, topic, specialist tags.
const facts = [

    // 1970-1971
    ["Which member of the Barlow family died in a car crash in Australia?", "David Barlow", ["Ken Barlow", "Frank Barlow", "Peter Barlow"], "Medium", "1970s", "Storylines", ["David Barlow", "Australia", "Barlow family", "1970"]],
    ["What was the name of David and Irma Barlow's young son who died after the car crash in Australia?", "Darren", ["Daniel", "Simon", "Damian"], "Hard", "1970s", "Families", ["Irma Barlow", "Australia", "Barlow family", "David Barlow", "Darren Barlow", "1970"]],
    ["Which actress played the Rovers barmaid Bet Lynch?", "Julie Goodyear", ["Betty Driver", "Barbara Knox", "Doris Speed"], "Easy", "1970s", "Actors", ["Bet Lynch", "Julie Goodyear"]],
    ["Which Rovers landlord died while visiting his daughter in Derby?", "Jack Walker", ["Billy Walker", "Fred Gee", "Alec Gilroy"], "Medium", "1970s", "Storylines", ["Jack Walker", "Rovers Return", "Walker family", "1970"]],
    ["What was the first name of Jack and Annie Walker's daughter?", "Joan", ["Linda", "Lucille", "Rita"], "Medium", "1970s", "Families", ["Annie Walker", "Walker family", "Jack Walker"]],
    ["Who remained in charge of the Rovers Return after Jack Walker died?", "Annie Walker", ["Bet Lynch", "Betty Turpin", "Elsie Tanner"], "Easy", "1970s", "Rovers Return", ["Jack Walker", "Annie Walker", "Rovers Return", "Walker family"]],
    ["Which man did Elsie Tanner marry in 1970?", "Alan Howard", ["Len Fairclough", "Ray Langton", "Bill Gregory"], "Medium", "1970s", "Weddings", ["Elsie Tanner", "Alan Howard", "1970"]],
    ["Which barmaid returned to Coronation Street as a regular character in 1970?", "Bet Lynch", ["Raquel Wolstenhulme", "Gloria Todd", "Tina Fowler"], "Easy", "1970s", "Characters", ["Bet Lynch", "Rovers Return", "1970"]],
    ["Which character worked as head barmaid at the Rovers in the early 1970s?", "Betty Turpin", ["Gail Potter", "Rita Littlewood", "Mavis Riley"], "Medium", "1970s", "Rovers Return", ["Betty Turpin", "Rovers Return"]],
    ["Who did Joe Donnelli hold hostage at the Corner Shop before fleeing to No. 5?", "Irma Barlow", ["Annie Walker", "Emily Nugent", "Rita Littlewood"], "Hard", "1970s", "Storylines", ["Irma Barlow", "Joe Donnelli", "Corner Shop", "No. 5", "Hostage crisis", "1970"]],
    ["How did Joe Donnelli's hostage ordeal end?", "He shot himself", ["He escaped abroad", "He was killed in a road accident", "He surrendered peacefully"], "Hard", "1970s", "Storylines", ["Joe Donnelli", "Hostage crisis", "1970"]],
    ["Which early resident moved into the Community Centre flat?", "Ena Sharples", ["Minnie Caldwell", "Annie Walker", "Elsie Tanner"], "Medium", "1970s", "Locations", ["Ena Sharples", "1971"]],
    ["What change to British currency did the residents have to get used to in 1971?", "Decimalisation", ["The introduction of the euro", "The end of income tax", "The return of the farthing"], "Easy", "1970s", "History", ["Decimalisation", "1971"]],
    ["Which original Coronation Street character moved to Whaley Bridge to live with Handel Gartside?", "Minnie Caldwell", ["Ena Sharples", "Elsie Tanner", "Florrie Lindley"], "Medium", "1970s", "Storylines", ["Minnie Caldwell", "Handel Gartside", "1976"]],
    ["Which actor played Billy Walker, the son of Annie and Jack Walker?", "Kenneth Farrington", ["Peter Adamson", "Bryan Mosley", "Neville Buswell"], "Hard", "1970s", "Actors", ["Jack Walker", "Billy Walker", "Kenneth Farrington", "Walker family"]],
    ["Who played the builder Len Fairclough?", "Peter Adamson", ["Johnny Briggs", "Neville Buswell", "Stephen Hancock"], "Medium", "1970s", "Actors", ["Len Fairclough", "Peter Adamson"]],
    ["Which actress played the factory worker Ivy Tilsley?", "Lynne Perrie", ["Liz Dawn", "Jean Alexander", "Maggie Jones"], "Medium", "1970s", "Actors", ["Ivy Tilsley", "Lynne Perrie", "Factory workers"]],
    ["Under which surname was Ivy Tilsley originally credited?", "Tyldesley", ["Tatlock", "Tanner", "Turpin"], "Hard", "1970s", "Characters", ["Ivy Tilsley", "Casting history"]],
    ["Which character was a long-standing friend of Ena Sharples and Albert Tatlock?", "Minnie Caldwell", ["Deirdre Hunt", "Gail Potter", "Rita Littlewood"], "Easy", "1970s", "Characters", ["Minnie Caldwell", "Ena Sharples", "Albert Tatlock"]],
    ["Which character was the son of Annie and Jack Walker?", "Billy Walker", ["Ray Langton", "Gordon Clegg", "Brian Tilsley"], "Medium", "1970s", "Families", ["Jack Walker", "Billy Walker", "Walker family"]],

    // 1972-1974
    ["Who married Ernest Bishop in Coronation Street?", "Emily Nugent", ["Mavis Riley", "Rita Littlewood", "Deirdre Hunt"], "Easy", "1970s", "Weddings", ["Ernest Bishop", "Emily Nugent", "Bishop family", "1972"]],
    ["What was Ernest Bishop's profession before he became a factory wages clerk?", "Photographer", ["Dentist", "Solicitor", "Police officer"], "Medium", "1970s", "Occupations", ["Ernest Bishop", "Bishop family"]],
    ["Which actor played Ernest Bishop?", "Stephen Hancock", ["Peter Adamson", "Johnny Briggs", "Bryan Mosley"], "Hard", "1970s", "Actors", ["Ernest Bishop", "Stephen Hancock", "Bishop family"]],
    ["Which actress played Emily Bishop?", "Eileen Derbyshire", ["Doris Speed", "Anne Kirkbride", "Thelma Barlow"], "Easy", "1970s", "Actors", ["Emily Bishop", "Eileen Derbyshire", "Bishop family"]],
    ["Which actor played Ray Langton?", "Neville Buswell", ["Johnny Briggs", "Peter Adamson", "Kenneth Farrington"], "Hard", "1970s", "Actors", ["Ray Langton", "Neville Buswell"]],
    ["Which actress played Rita Littlewood, later Fairclough?", "Barbara Knox", ["Thelma Barlow", "Anne Kirkbride", "Helen Worth"], "Easy", "1970s", "Actors", ["Rita Littlewood", "Barbara Knox"]],
    ["What was Rita's surname when she became a regular character in Coronation Street?", "Littlewood", ["Sullivan", "Fairclough", "Tanner"], "Easy", "1970s", "Characters", ["Rita Littlewood", "1972"]],
    ["Which actress played Deirdre Hunt, later Barlow?", "Anne Kirkbride", ["Helen Worth", "Barbara Knox", "Liz Dawn"], "Easy", "1970s", "Actors", ["Deirdre Hunt", "Anne Kirkbride"]],
    ["What was Deirdre's surname when she first appeared in Coronation Street?", "Hunt", ["Langton", "Potter", "Reid"], "Easy", "1970s", "Characters", ["Deirdre Hunt"]],
    ["What did Len Fairclough rename the newsagent's he bought in 1973?", "The Kabin", ["The Corner Shop", "Gamma Garments", "The Western Front"], "Medium", "1970s", "Businesses", ["Len Fairclough", "The Kabin", "Newsagents", "1973"]],
    ["What was the newsagent's known as before it became The Kabin?", "Biddulph's", ["Dawson's", "Royle's", "Baldwin's"], "Hard", "1970s", "Businesses", ["The Kabin", "Biddulph's", "Newsagents"]],
    ["Who became manager of The Kabin after Len Fairclough bought the newsagent's?", "Rita Littlewood", ["Mavis Riley", "Bet Lynch", "Elsie Tanner"], "Easy", "1970s", "Businesses", ["Len Fairclough", "Rita Littlewood", "The Kabin", "Newsagents"]],
    ["Who became Rita's long-serving colleague at The Kabin?", "Mavis Riley", ["Gail Potter", "Blanche Hunt", "Vera Duckworth"], "Easy", "1970s", "Businesses", ["The Kabin", "Mavis Riley", "Rita Littlewood", "Newsagents"]],
    ["Which actress played Mavis Riley?", "Thelma Barlow", ["Barbara Knox", "Liz Dawn", "Doris Speed"], "Easy", "1970s", "Actors", ["Mavis Riley", "Thelma Barlow", "The Kabin"]],
    ["Which local politician first became Mayor of Weatherfield in 1973?", "Alf Roberts", ["Len Fairclough", "Ken Barlow", "Albert Tatlock"], "Medium", "1970s", "Characters", ["Alf Roberts", "Weatherfield", "Local politics", "Mayor of Weatherfield", "1973"]],
    ["Who was Ken Barlow's second wife?", "Janet Reid", ["Deirdre Hunt", "Norma Ford", "Maggie Clegg"], "Medium", "1970s", "Weddings", ["Ken Barlow", "Janet Reid", "Barlow family", "1973"]],
    ["Which actress made her Coronation Street debut as Gail Potter in 1974?", "Helen Worth", ["Anne Kirkbride", "Cheryl Murray", "Sue Nicholls"], "Easy", "1970s", "Actors", ["Gail Potter", "Helen Worth", "1974"]],
    ["What was Gail's surname when she arrived in Coronation Street?", "Potter", ["Tilsley", "Platt", "McIntyre"], "Easy", "1970s", "Characters", ["Gail Potter"]],
    ["Who played the factory worker Vera Duckworth?", "Liz Dawn", ["Lynne Perrie", "Betty Driver", "Jean Alexander"], "Easy", "1970s", "Actors", ["Vera Duckworth", "Liz Dawn"]],
    ["Which character was Deirdre Hunt's mother?", "Blanche Hunt", ["Annie Walker", "Rita Littlewood", "Maggie Clegg"], "Easy", "1970s", "Families", ["Deirdre Hunt", "Blanche Hunt", "Hunt family"]],

    // 1974-1976
    ["Which actress became best known for playing Blanche Hunt?", "Maggie Jones", ["Anne Reid", "Doris Speed", "Thelma Barlow"], "Medium", "1970s", "Actors", ["Blanche Hunt", "Maggie Jones", "Hunt family"]],
    ["Which resident was Gordon Clegg's biological mother?", "Betty Turpin", ["Maggie Clegg", "Annie Walker", "Elsie Tanner"], "Medium", "1970s", "Families", ["Betty Turpin", "Gordon Clegg", "Clegg family"]],
    ["Who raised Gordon Clegg as her son?", "Maggie Clegg", ["Betty Turpin", "Blanche Hunt", "Minnie Caldwell"], "Medium", "1970s", "Families", ["Gordon Clegg", "Maggie Clegg", "Clegg family"]],
    ["Which family ran the Corner Shop after Maggie Clegg moved away?", "The Hopkins family", ["The Tilsley family", "The Ogden family", "The Langton family"], "Medium", "1970s", "Businesses", ["Maggie Clegg", "Hopkins family", "Corner Shop"]],
    ["Which daughter of the Hopkins family befriended Gail Potter?", "Tricia Hopkins", ["Suzie Birchall", "Lucille Hewitt", "Susan Barlow"], "Medium", "1970s", "Families", ["Gail Potter", "Hopkins family", "Tricia Hopkins"]],
    ["Which actor played Eddie Yeats?", "Geoffrey Hughes", ["Bernard Youens", "Johnny Briggs", "Fred Feast"], "Easy", "1970s", "Actors", ["Eddie Yeats", "Geoffrey Hughes"]],
    ["What was Eddie Yeats's best-known job in Coronation Street?", "Bin man", ["Policeman", "Bus driver", "Postman"], "Easy", "1970s", "Occupations", ["Eddie Yeats"]],
    ["Who was the mother of Martin Downes, who had been given up for adoption?", "Bet Lynch", ["Elsie Tanner", "Deirdre Hunt", "Annie Walker"], "Hard", "1970s", "Families", ["Bet Lynch", "Martin Downes", "Adoption"]],
    ["Which Rovers barmaid had been married to policeman Cyril Turpin?", "Betty Turpin", ["Bet Lynch", "Rita Littlewood", "Annie Walker"], "Medium", "1970s", "Families", ["Betty Turpin", "Cyril Turpin", "Rovers Return"]],
    ["Who did Ray Langton marry?", "Deirdre Hunt", ["Rita Littlewood", "Gail Potter", "Mavis Riley"], "Easy", "1970s", "Weddings", ["Ray Langton", "Deirdre Hunt", "Langton family", "1975"]],
    ["Which businessman opened a denim factory on Coronation Street in 1976?", "Mike Baldwin", ["Alf Roberts", "Len Fairclough", "Fred Gee"], "Easy", "1970s", "Businesses", ["Mike Baldwin", "Factory", "Baldwin's Casuals", "1976"]],
    ["Which actor played Mike Baldwin?", "Johnny Briggs", ["Peter Adamson", "Kenneth Farrington", "Neville Buswell"], "Easy", "1970s", "Actors", ["Mike Baldwin", "Johnny Briggs", "Factory"]],
    ["What was the name of Mike Baldwin's clothing factory?", "Baldwin's Casuals", ["Underworld", "Gamma Garments", "Miami Modes"], "Easy", "1970s", "Businesses", ["Mike Baldwin", "Baldwin's Casuals", "Factory"]],
    ["What type of clothing did Mike Baldwin's factory initially specialise in?", "Denim garments", ["Wedding dresses", "School uniforms", "Raincoats"], "Medium", "1970s", "Businesses", ["Mike Baldwin", "Factory", "Baldwin's Casuals"]],
    ["Which Coronation Street resident worked as wages clerk for Mike Baldwin?", "Ernest Bishop", ["Albert Tatlock", "Len Fairclough", "Fred Gee"], "Medium", "1970s", "Occupations", ["Ernest Bishop", "Mike Baldwin", "Factory", "Baldwin's Casuals"]],
    ["Which factory worker was a shop steward and a friend of Vera Duckworth?", "Ivy Tilsley", ["Annie Walker", "Emily Bishop", "Renee Roberts"], "Medium", "1970s", "Businesses", ["Ivy Tilsley", "Vera Duckworth", "Factory", "Trade unions"]],
    ["Who shared a flat with Gail Potter before Gail married Brian Tilsley?", "Suzie Birchall", ["Tracy Langton", "Mavis Riley", "Bet Lynch"], "Medium", "1970s", "Relationships", ["Gail Potter", "Suzie Birchall", "Brian Tilsley", "Flatmates"]],
    ["Which actress played Suzie Birchall?", "Cheryl Murray", ["Helen Worth", "Anne Kirkbride", "Sue Nicholls"], "Medium", "1970s", "Actors", ["Suzie Birchall", "Cheryl Murray", "Flatmates"]],
    ["Which Coronation Street resident gave Gail Potter and Suzie Birchall lodgings at No. 11?", "Elsie Tanner", ["Annie Walker", "Hilda Ogden", "Emily Bishop"], "Easy", "1970s", "Locations", ["Elsie Tanner", "Gail Potter", "Suzie Birchall", "No. 11"]],
    ["Which man stalked Gail Potter in a 1976 storyline?", "John Lane", ["Brian Tilsley", "Ray Langton", "Derek Wilton"], "Hard", "1970s", "Storylines", ["Gail Potter", "John Lane", "Stalking", "1976"]],

    // 1977
    ["In which year was Tracy Langton born in Coronation Street?", "1977", ["1974", "1979", "1981"], "Medium", "1970s", "History", ["Tracy Langton", "Langton family", "Tracy Barlow", "1977"]],
    ["Who were Tracy Langton's parents?", "Ray and Deirdre Langton", ["Ken and Valerie Barlow", "Brian and Gail Tilsley", "Len and Rita Fairclough"], "Medium", "1970s", "Families", ["Tracy Langton", "Deirdre Hunt", "Langton family", "Tracy Barlow"]],
    ["Which builder was Ray Langton's business partner?", "Len Fairclough", ["Stan Ogden", "Eddie Yeats", "Fred Gee"], "Medium", "1970s", "Businesses", ["Len Fairclough", "Ray Langton", "Building trade"]],
    ["Which Coronation Street couple married in 1977?", "Len Fairclough and Rita Littlewood", ["Ken Barlow and Deirdre Hunt", "Brian Tilsley and Gail Potter", "Alf Roberts and Audrey Potter"], "Medium", "1970s", "Weddings", ["Len Fairclough", "Rita Littlewood", "Len and Rita wedding", "1977"]],
    ["What surname did Rita use after marrying Len?", "Fairclough", ["Baldwin", "Roberts", "Langton"], "Easy", "1970s", "Characters", ["Rita Littlewood", "Len and Rita wedding", "1977"]],
    ["What occupation did Rita pursue alongside running The Kabin?", "Singer", ["Schoolteacher", "Hairdresser", "Nurse"], "Medium", "1970s", "Occupations", ["The Kabin", "Rita Littlewood", "Singing"]],
    ["Where did Rita plan to sing professionally before Len persuaded her to stay and marry him?", "Tenerife", ["Blackpool", "Brighton", "Newcastle"], "Hard", "1970s", "Storylines", ["Rita Littlewood", "Singing"]],
    ["Who was Len Fairclough's best man at his wedding to Rita?", "Alf Roberts", ["Ken Barlow", "Ray Langton", "Stan Ogden"], "Hard", "1970s", "Weddings", ["Len Fairclough", "Alf Roberts", "Rita Littlewood", "Len and Rita wedding", "1977"]],
    ["Which royal anniversary did Coronation Street residents celebrate with a street party in 1977?", "The Queen's Silver Jubilee", ["The Queen's Golden Jubilee", "The Coronation centenary", "The end of rationing"], "Easy", "1970s", "History", ["Royal celebrations", "Silver Jubilee", "1977"]],
    ["Which resident lost his estranged wife Janet in 1977?", "Ken Barlow", ["Len Fairclough", "Mike Baldwin", "Billy Walker"], "Medium", "1970s", "Storylines", ["Ken Barlow", "Janet Reid", "1977"]],
    ["Which actress played Ken Barlow's second wife Janet Reid?", "Judith Barker", ["Anne Reid", "Maggie Jones", "Doreen Keogh"], "Medium", "1970s", "Actors", ["Ken Barlow", "Janet Reid", "Judith Barker"]],
    ["At which pub did Bet Lynch work?", "The Rovers Return", ["The Flying Horse", "The Queen Victoria", "The Woolpack"], "Easy", "1970s", "Businesses", ["Bet Lynch", "Rovers Return", "1977"]],
    ["Who ran the Corner Shop when Bet Lynch lived in the bedsit above it?", "Renee Bradshaw", ["Mavis Riley", "Annie Walker", "Emily Bishop"], "Hard", "1970s", "Businesses", ["Bet Lynch", "Renee Bradshaw", "Corner Shop", "1978"]],
    ["Who sold No. 5 Coronation Street to Ray Langton?", "Mike Baldwin", ["Alf Roberts", "Len Fairclough", "Ernest Bishop"], "Medium", "1970s", "Locations", ["Ray Langton", "Mike Baldwin", "No. 5", "1977"]],
    ["Which actor played Rovers employee Fred Gee?", "Fred Feast", ["Geoffrey Hughes", "Bryan Mosley", "Bernard Youens"], "Medium", "1970s", "Actors", ["Fred Gee", "Fred Feast", "Rovers Return"]],
    ["Which regular character lived at No. 13 Coronation Street with husband Stan?", "Hilda Ogden", ["Annie Walker", "Elsie Tanner", "Rita Fairclough"], "Easy", "1970s", "Locations", ["Hilda Ogden", "No. 13", "Ogden family"]],
    ["Who became a lodger of Stan and Hilda Ogden?", "Eddie Yeats", ["Ernest Bishop", "Ken Barlow", "Alf Roberts"], "Medium", "1970s", "Characters", ["Eddie Yeats", "Hilda Ogden", "Ogden family"]],
    ["What was the name of the Rovers Return's rival pub often mentioned in Coronation Street?", "The Flying Horse", ["The Queen Victoria", "The Woolpack", "The Dog in the Pond"], "Medium", "1970s", "Locations", ["Rovers Return", "The Flying Horse"]],
    ["Which long-serving resident kept a piano at No. 3 Coronation Street?", "Ernest Bishop", ["Albert Tatlock", "Mike Baldwin", "Billy Walker"], "Medium", "1970s", "Characters", ["Ernest Bishop", "Bishop family", "Piano"]],
    ["Which resident held a seance during a 1970s storyline?", "Hilda Ogden", ["Annie Walker", "Emily Bishop", "Gail Potter"], "Hard", "1970s", "Storylines", ["Hilda Ogden", "Seance", "Ogden family"]],

    // 1978-1979
    ["Which Coronation Street character was shot during a factory wages robbery?", "Ernest Bishop", ["Mike Baldwin", "Ray Langton", "Fred Gee"], "Medium", "1970s", "Storylines", ["Ernest Bishop", "Ernest Bishop shooting", "Factory", "1978"]],
    ["At which workplace was Ernest Bishop fatally shot?", "Baldwin's Casuals", ["The Kabin", "The Rovers Return", "The Corner Shop"], "Medium", "1970s", "Storylines", ["Ernest Bishop", "Baldwin's Casuals", "Ernest Bishop shooting", "Factory"]],
    ["Which character was widowed by Ernest Bishop's death?", "Emily Bishop", ["Annie Walker", "Rita Fairclough", "Betty Turpin"], "Easy", "1970s", "Storylines", ["Ernest Bishop", "Emily Bishop", "Ernest Bishop shooting", "Bishop family"]],
    ["What was the name of the robber who accidentally shot Ernest Bishop?", "Ed Jackson", ["Joe Donnelli", "Alan Bradley", "Charlie Stubbs"], "Hard", "1970s", "Storylines", ["Ernest Bishop", "Ed Jackson", "Ernest Bishop shooting"]],
    ["Who did Alf Roberts marry in 1978?", "Renee Bradshaw", ["Audrey Potter", "Bet Lynch", "Rita Fairclough"], "Medium", "1970s", "Weddings", ["Alf Roberts", "Renee Bradshaw", "Alf and Renee wedding", "1978"]],
    ["What was Renee Roberts's occupation when she married Alf?", "Corner Shop owner", ["Factory machinist", "Barmaid", "Schoolteacher"], "Medium", "1970s", "Businesses", ["Renee Roberts", "Corner Shop", "Alf and Renee wedding"]],
    ["Which actor played the grocer and councillor Alf Roberts?", "Bryan Mosley", ["Arthur Leslie", "Johnny Briggs", "Jack Howarth"], "Medium", "1970s", "Actors", ["Alf Roberts", "Local politics"]],
    ["Which actress played Gail Potter's mother Audrey?", "Sue Nicholls", ["Helen Worth", "Anne Kirkbride", "Barbara Knox"], "Easy", "1970s", "Actors", ["Gail Potter", "Sue Nicholls", "Audrey Roberts"]],
    ["Which relative of Gail Potter arrived in 1979 and later married Alf Roberts?", "Her mother Audrey", ["Her sister Sarah", "Her aunt Mavis", "Her cousin Rita"], "Medium", "1970s", "Families", ["Alf Roberts", "Gail Potter", "Audrey Roberts", "1979"]],
    ["Which actor played Brian Tilsley?", "Christopher Quinten", ["Bill Tarmey", "Johnny Briggs", "Neville Buswell"], "Medium", "1970s", "Actors", ["Brian Tilsley", "Christopher Quinten", "Tilsley family"]],
    ["Who were Brian Tilsley's parents?", "Bert and Ivy Tilsley", ["Stan and Hilda Ogden", "Ken and Valerie Barlow", "Jack and Annie Walker"], "Medium", "1970s", "Families", ["Ivy Tilsley", "Brian Tilsley", "Tilsley family"]],
    ["Who did Gail Potter marry in 1979?", "Brian Tilsley", ["Martin Platt", "Richard Hillman", "Nick Tilsley"], "Easy", "1970s", "Weddings", ["Gail Potter", "Brian Tilsley", "Tilsley family", "1979"]],
    ["Which actor played Jack Duckworth when he made his first appearance?", "Bill Tarmey", ["Bernard Youens", "Fred Feast", "Geoffrey Hughes"], "Easy", "1970s", "Actors", ["Jack Duckworth", "Bill Tarmey", "Duckworth family", "1979"]],
    ["Which Coronation Street character was Jack Duckworth's wife?", "Vera Duckworth", ["Hilda Ogden", "Ivy Tilsley", "Rita Fairclough"], "Easy", "1970s", "Families", ["Vera Duckworth", "Jack Duckworth", "Duckworth family"]],
    ["Which character was the father of Brian Tilsley?", "Bert Tilsley", ["Stan Ogden", "Jack Duckworth", "Alf Roberts"], "Medium", "1970s", "Families", ["Brian Tilsley", "Bert Tilsley", "Tilsley family"]],
    ["What crashed into the front of the Rovers Return in 1979?", "A lorry", ["A tram", "A double-decker bus", "A train"], "Medium", "1970s", "Storylines", ["Rovers Return", "Rovers lorry crash", "1979"]],
    ["What was the lorry carrying when it crashed into the Rovers in 1979?", "Timber", ["Beer barrels", "Bricks", "Coal"], "Hard", "1970s", "Storylines", ["Rovers lorry crash", "1979"]],
    ["Which industrial action interrupted Coronation Street broadcasts for weeks in 1979?", "An ITV technicians' strike", ["A miners' strike", "A postal workers' strike", "A rail strike"], "Medium", "1970s", "History", ["ITV", "ITV strike", "Broadcast history", "1979"]],
    ["Which two characters recapped events when Coronation Street resumed after the 1979 ITV strike?", "Bet Lynch and Len Fairclough", ["Ken Barlow and Mike Baldwin", "Annie Walker and Hilda Ogden", "Gail Potter and Brian Tilsley"], "Hard", "1970s", "History", ["Bet Lynch", "Len Fairclough", "ITV", "ITV strike", "Broadcast history", "1979"]],
    ["Which friend of Gail Potter, played by Cheryl Murray, left Coronation Street in 1979?", "Suzie Birchall", ["Mavis Riley", "Tricia Hopkins", "Lucille Hewitt"], "Medium", "1970s", "Characters", ["Gail Potter", "Suzie Birchall", "Cheryl Murray", "1979"]]

];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, decade, topic, specialTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(201 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', decade, topic, ...specialTags])],
        dailyEligible: true
    };
});

// Validate the expanded question objects, not just the source facts.
if (questions.length !== 100 || questions[0].id !== 'tv_0201' || questions[99].id !== 'tv_0300') {
    throw new Error('Pack 162: incorrect question count or ID range');
}

const seenIds = new Set();
const seenQuestions = new Set();

for (const q of questions) {
    const wording = q.question.trim().toLowerCase();

    if (
        seenIds.has(q.id) ||
        seenQuestions.has(wording) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        !q.tags.includes('Soaps') ||
        !q.tags.includes('Coronation Street') ||
        !q.tags.includes('1970s') ||
        q.tags.length < 5 ||
        q.dailyEligible !== true
    ) {
        throw new Error('Pack 162: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(wording);
}

module.exports = questions;
