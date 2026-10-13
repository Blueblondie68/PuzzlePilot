// quiz_pack162.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - The 1970s
// 100 questions: tv_0201 to tv_0300
// Keep quiz_bank.js unchanged until the end of the session.

const facts = [

    // =====================================================
    // 1970-1971
    // =====================================================

    ["Which member of the Barlow family died in a car accident in Australia in 1970?", "David Barlow", ["Ken Barlow", "Frank Barlow", "Peter Barlow"], "Medium", "1970s", "Storylines"],
    ["What was the name of David and Irma Barlow's young son who died in 1970?", "Darren", ["Daniel", "Simon", "Damian"], "Hard", "1970s", "Families"],
    ["Which actress played the Rovers barmaid Bet Lynch?", "Julie Goodyear", ["Betty Driver", "Barbara Knox", "Doris Speed"], "Easy", "1970s", "Actors"],
    ["Which Rovers landlord died while visiting his daughter in 1970?", "Jack Walker", ["Billy Walker", "Fred Gee", "Alec Gilroy"], "Medium", "1970s", "Storylines"],
    ["What was the first name of Jack and Annie Walker's daughter?", "Joan", ["Linda", "Lucille", "Rita"], "Medium", "1970s", "Families"],
    ["Who remained in charge of the Rovers Return after Jack Walker died?", "Annie Walker", ["Bet Lynch", "Betty Turpin", "Elsie Tanner"], "Easy", "1970s", "Rovers Return"],
    ["Which man did Elsie Tanner marry in 1970?", "Alan Howard", ["Len Fairclough", "Ray Langton", "Bill Gregory"], "Medium", "1970s", "Weddings"],
    ["Which popular barmaid became a regular Coronation Street character in 1970?", "Bet Lynch", ["Raquel Wolstenhulme", "Gloria Todd", "Tina Fowler"], "Easy", "1970s", "Characters"],
    ["Which character worked as head barmaid at the Rovers in the early 1970s?", "Betty Turpin", ["Gail Potter", "Rita Littlewood", "Mavis Riley"], "Medium", "1970s", "Rovers Return"],
    ["Which character was held hostage by Joe Donelli in 1970?", "Irma Barlow", ["Annie Walker", "Emily Nugent", "Rita Littlewood"], "Hard", "1970s", "Storylines"],
    ["How did Joe Donelli's 1970 hostage ordeal end?", "He shot himself", ["He escaped abroad", "He was killed in a road accident", "He surrendered peacefully"], "Hard", "1970s", "Storylines"],
    ["Which early character moved into the Community Centre flat in 1971?", "Ena Sharples", ["Minnie Caldwell", "Annie Walker", "Elsie Tanner"], "Medium", "1970s", "Locations"],
    ["What national change in 1971 gave Coronation Street characters new money to get used to?", "Decimalisation", ["The introduction of the euro", "The end of income tax", "The return of the farthing"], "Easy", "1970s", "History"],
    ["Which original Coronation Street character moved permanently to live with Handel Gartside in Whaley Bridge in 1976?", "Minnie Caldwell", ["Ena Sharples", "Elsie Tanner", "Florrie Lindley"], "Medium", "1970s", "Storylines"],
    ["Which actor played Billy Walker, the son of Annie and Jack Walker?", "Kenneth Farrington", ["Peter Adamson", "Bryan Mosley", "Neville Buswell"], "Hard", "1970s", "Actors"],
    ["Who played the builder Len Fairclough?", "Peter Adamson", ["Johnny Briggs", "Neville Buswell", "Stephen Hancock"], "Medium", "1970s", "Actors"],
    ["Which actress played the factory worker Ivy Tilsley?", "Lynne Perrie", ["Liz Dawn", "Jean Alexander", "Maggie Jones"], "Medium", "1970s", "Actors"],
    ["What was Ivy Tilsley's surname sometimes written as in her earliest appearances?", "Tyldesley", ["Tatlock", "Tanner", "Turpin"], "Hard", "1970s", "Characters"],
    ["Which character was a long-standing friend of Ena Sharples and Albert Tatlock?", "Minnie Caldwell", ["Deirdre Hunt", "Gail Potter", "Rita Littlewood"], "Easy", "1970s", "Characters"],
    ["Which character was the son of Annie and Jack Walker?", "Billy Walker", ["Ray Langton", "Gordon Clegg", "Brian Tilsley"], "Medium", "1970s", "Families"],

    // =====================================================
    // 1972-1974
    // =====================================================

    ["Who married Ernest Bishop in Coronation Street in 1972?", "Emily Nugent", ["Mavis Riley", "Rita Littlewood", "Deirdre Hunt"], "Easy", "1970s", "Weddings"],
    ["What was Ernest Bishop's profession before he became a factory wages clerk?", "Photographer", ["Dentist", "Solicitor", "Police officer"], "Medium", "1970s", "Occupations"],
    ["Which actor played Ernest Bishop?", "Stephen Hancock", ["Peter Adamson", "Johnny Briggs", "Bryan Mosley"], "Hard", "1970s", "Actors"],
    ["Which actress played Emily Bishop?", "Eileen Derbyshire", ["Doris Speed", "Anne Kirkbride", "Thelma Barlow"], "Easy", "1970s", "Actors"],
    ["Which actor played Ray Langton?", "Neville Buswell", ["Johnny Briggs", "Peter Adamson", "Kenneth Farrington"], "Hard", "1970s", "Actors"],
    ["Which actress played Rita Littlewood, later Fairclough?", "Barbara Knox", ["Thelma Barlow", "Anne Kirkbride", "Helen Worth"], "Easy", "1970s", "Actors"],
    ["What was Rita's surname when she joined Coronation Street as a regular in 1972?", "Littlewood", ["Sullivan", "Fairclough", "Tanner"], "Easy", "1970s", "Characters"],
    ["Which actress played Deirdre Hunt, later Barlow?", "Anne Kirkbride", ["Helen Worth", "Barbara Knox", "Liz Dawn"], "Easy", "1970s", "Actors"],
    ["What was Deirdre's surname when she first appeared in Coronation Street?", "Hunt", ["Langton", "Potter", "Reid"], "Easy", "1970s", "Characters"],
    ["Which Coronation Street newsagent's was bought by Len Fairclough in 1973?", "The Kabin", ["The Corner Shop", "Gamma Garments", "The Western Front"], "Medium", "1970s", "Businesses"],
    ["What was the newsagent's known as before it became The Kabin?", "Biddulph's", ["Dawson's", "Royle's", "Baldwin's"], "Hard", "1970s", "Businesses"],
    ["Who managed The Kabin when Len Fairclough bought it?", "Rita Littlewood", ["Mavis Riley", "Bet Lynch", "Elsie Tanner"], "Easy", "1970s", "Businesses"],
    ["Who became Rita's long-serving colleague at The Kabin?", "Mavis Riley", ["Gail Potter", "Blanche Hunt", "Vera Duckworth"], "Easy", "1970s", "Businesses"],
    ["Which actress played Mavis Riley?", "Thelma Barlow", ["Barbara Knox", "Liz Dawn", "Doris Speed"], "Easy", "1970s", "Actors"],
    ["Which local politician became Mayor of Weatherfield in 1973?", "Alf Roberts", ["Len Fairclough", "Ken Barlow", "Albert Tatlock"], "Medium", "1970s", "Characters"],
    ["Who became Ken Barlow's second wife in 1973?", "Janet Reid", ["Deirdre Hunt", "Norma Ford", "Maggie Clegg"], "Medium", "1970s", "Weddings"],
    ["Which actress began playing Gail Potter in 1974?", "Helen Worth", ["Anne Kirkbride", "Cheryl Murray", "Sue Nicholls"], "Easy", "1970s", "Actors"],
    ["What was Gail's surname when she arrived in Coronation Street?", "Potter", ["Tilsley", "Platt", "McIntyre"], "Easy", "1970s", "Characters"],
    ["Who played the factory worker Vera Duckworth?", "Liz Dawn", ["Lynne Perrie", "Betty Driver", "Jean Alexander"], "Easy", "1970s", "Actors"],
    ["Which character was Deirdre Hunt's mother?", "Blanche Hunt", ["Annie Walker", "Rita Littlewood", "Maggie Clegg"], "Easy", "1970s", "Families"],

    // =====================================================
    // 1974-1976
    // =====================================================

    ["Which actress became best known for playing Blanche Hunt?", "Maggie Jones", ["Anne Reid", "Doris Speed", "Thelma Barlow"], "Medium", "1970s", "Actors"],
    ["Which resident was Gordon Clegg's biological mother?", "Betty Turpin", ["Maggie Clegg", "Annie Walker", "Elsie Tanner"], "Medium", "1970s", "Families"],
    ["Who raised Gordon Clegg as her son?", "Maggie Clegg", ["Betty Turpin", "Blanche Hunt", "Minnie Caldwell"], "Medium", "1970s", "Families"],
    ["Which family took over the Corner Shop after Maggie Clegg?", "The Hopkins family", ["The Tilsley family", "The Ogden family", "The Langton family"], "Medium", "1970s", "Businesses"],
    ["Which daughter of the Hopkins family befriended Gail Potter?", "Tricia Hopkins", ["Suzie Birchall", "Lucille Hewitt", "Susan Barlow"], "Medium", "1970s", "Families"],
    ["Which actor played Eddie Yeats?", "Geoffrey Hughes", ["Bernard Youens", "Johnny Briggs", "Fred Feast"], "Easy", "1970s", "Actors"],
    ["What was Eddie Yeats's best-known job in Coronation Street?", "Bin man", ["Policeman", "Bus driver", "Postman"], "Easy", "1970s", "Occupations"],
    ["Who was the mother of Martin Downes, a son given up for adoption?", "Bet Lynch", ["Elsie Tanner", "Deirdre Hunt", "Annie Walker"], "Hard", "1970s", "Families"],
    ["Which Rovers barmaid had been married to policeman Cyril Turpin?", "Betty Turpin", ["Bet Lynch", "Rita Littlewood", "Annie Walker"], "Medium", "1970s", "Families"],
    ["Which character married Ray Langton in 1975?", "Deirdre Hunt", ["Rita Littlewood", "Gail Potter", "Mavis Riley"], "Easy", "1970s", "Weddings"],
    ["Which factory businessman arrived on Coronation Street in 1976?", "Mike Baldwin", ["Alf Roberts", "Len Fairclough", "Fred Gee"], "Easy", "1970s", "Businesses"],
    ["Which actor played Mike Baldwin?", "Johnny Briggs", ["Peter Adamson", "Kenneth Farrington", "Neville Buswell"], "Easy", "1970s", "Actors"],
    ["What was the name of Mike Baldwin's clothing factory?", "Baldwin's Casuals", ["Underworld", "Gamma Garments", "Miami Modes"], "Easy", "1970s", "Businesses"],
    ["What type of clothing did Mike Baldwin's factory initially specialise in?", "Denim garments", ["Wedding dresses", "School uniforms", "Raincoats"], "Medium", "1970s", "Businesses"],
    ["Which Coronation Street resident worked as wages clerk for Mike Baldwin?", "Ernest Bishop", ["Albert Tatlock", "Len Fairclough", "Fred Gee"], "Medium", "1970s", "Occupations"],
    ["Which factory worker was a shop steward and a friend of Vera Duckworth?", "Ivy Tilsley", ["Annie Walker", "Emily Bishop", "Renee Roberts"], "Medium", "1970s", "Businesses"],
    ["Which character was Gail Potter's flatmate before Gail married Brian Tilsley?", "Suzie Birchall", ["Tracy Langton", "Mavis Riley", "Bet Lynch"], "Medium", "1970s", "Relationships"],
    ["Which actress played Suzie Birchall?", "Cheryl Murray", ["Helen Worth", "Anne Kirkbride", "Sue Nicholls"], "Medium", "1970s", "Actors"],
    ["Which Coronation Street resident gave Gail Potter and Suzie Birchall lodgings at No. 11?", "Elsie Tanner", ["Annie Walker", "Hilda Ogden", "Emily Bishop"], "Easy", "1970s", "Locations"],
    ["Which man stalked Gail Potter in a 1976 storyline?", "John Lane", ["Brian Tilsley", "Ray Langton", "Derek Wilton"], "Hard", "1970s", "Storylines"],

    // =====================================================
    // 1977
    // =====================================================

    ["In which year was Tracy Langton born in Coronation Street?", "1977", ["1974", "1979", "1981"], "Medium", "1970s", "History"],
    ["Who were Tracy Langton's biological parents?", "Ray and Deirdre Langton", ["Ken and Valerie Barlow", "Brian and Gail Tilsley", "Len and Rita Fairclough"], "Medium", "1970s", "Families"],
    ["Which builder was Ray Langton's business partner in the 1970s?", "Len Fairclough", ["Stan Ogden", "Eddie Yeats", "Fred Gee"], "Medium", "1970s", "Businesses"],
    ["Which Coronation Street couple married in April 1977?", "Len Fairclough and Rita Littlewood", ["Ken Barlow and Deirdre Hunt", "Brian Tilsley and Gail Potter", "Alf Roberts and Audrey Potter"], "Medium", "1970s", "Weddings"],
    ["What surname did Rita use after marrying Len in 1977?", "Fairclough", ["Baldwin", "Roberts", "Langton"], "Easy", "1970s", "Characters"],
    ["What occupation did Rita pursue alongside running The Kabin?", "Singer", ["Schoolteacher", "Hairdresser", "Nurse"], "Medium", "1970s", "Occupations"],
    ["Where did Rita plan to work as a singer before Len persuaded her to stay and marry him?", "Tenerife", ["Blackpool", "Brighton", "Newcastle"], "Hard", "1970s", "Storylines"],
    ["Which Corrie character was Len Fairclough's best man at his 1977 wedding?", "Alf Roberts", ["Ken Barlow", "Ray Langton", "Stan Ogden"], "Hard", "1970s", "Weddings"],
    ["Which anniversary did Coronation Street residents celebrate with a street party in 1977?", "The Queen's Silver Jubilee", ["The Queen's Golden Jubilee", "The Coronation centenary", "The end of rationing"], "Easy", "1970s", "History"],
    ["Which Coronation Street resident suffered the death of his estranged wife Janet in 1977?", "Ken Barlow", ["Len Fairclough", "Mike Baldwin", "Billy Walker"], "Medium", "1970s", "Storylines"],
    ["Which actress played Ken Barlow's second wife Janet Reid?", "Judith Barker", ["Anne Reid", "Maggie Jones", "Doreen Keogh"], "Medium", "1970s", "Actors"],
    ["Which pub employed Bet Lynch in 1977?", "The Rovers Return", ["The Flying Horse", "The Queen Victoria", "The Woolpack"], "Easy", "1970s", "Businesses"],
    ["Who ran the Corner Shop when Bet Lynch lived in the bedsit above it in 1978?", "Renee Bradshaw", ["Mavis Riley", "Annie Walker", "Emily Bishop"], "Hard", "1970s", "Businesses"],
    ["Who sold No. 5 Coronation Street to Ray Langton in 1977?", "Mike Baldwin", ["Alf Roberts", "Len Fairclough", "Ernest Bishop"], "Medium", "1970s", "Locations"],
    ["Which actor played Rovers employee Fred Gee?", "Fred Feast", ["Geoffrey Hughes", "Bryan Mosley", "Bernard Youens"], "Medium", "1970s", "Actors"],
    ["Which regular character lived at No. 13 Coronation Street with husband Stan?", "Hilda Ogden", ["Annie Walker", "Elsie Tanner", "Rita Fairclough"], "Easy", "1970s", "Locations"],
    ["Who became a lodger of Stan and Hilda Ogden in the 1970s?", "Eddie Yeats", ["Ernest Bishop", "Ken Barlow", "Alf Roberts"], "Medium", "1970s", "Characters"],
    ["What was the name of the Rovers Return's rival pub often mentioned in Coronation Street?", "The Flying Horse", ["The Queen Victoria", "The Woolpack", "The Dog in the Pond"], "Medium", "1970s", "Locations"],
    ["Which long-serving resident kept a piano at No. 3 Coronation Street?", "Ernest Bishop", ["Albert Tatlock", "Mike Baldwin", "Billy Walker"], "Medium", "1970s", "Characters"],
    ["Which resident held a seance during a memorable 1970s storyline?", "Hilda Ogden", ["Annie Walker", "Emily Bishop", "Gail Potter"], "Hard", "1970s", "Storylines"],

    // =====================================================
    // 1978-1979
    // =====================================================

    ["Which Coronation Street character was shot during a factory wages robbery in 1978?", "Ernest Bishop", ["Mike Baldwin", "Ray Langton", "Fred Gee"], "Medium", "1970s", "Storylines"],
    ["Which workplace was the setting for Ernest Bishop's fatal shooting?", "Baldwin's Casuals", ["The Kabin", "The Rovers Return", "The Corner Shop"], "Medium", "1970s", "Storylines"],
    ["Which character was widowed by Ernest Bishop's death?", "Emily Bishop", ["Annie Walker", "Rita Fairclough", "Betty Turpin"], "Easy", "1970s", "Storylines"],
    ["What was the name of the robber who accidentally shot Ernest Bishop?", "Ed Jackson", ["Joe Donelli", "Alan Bradley", "Charlie Stubbs"], "Hard", "1970s", "Storylines"],
    ["Which character was married to Alf Roberts in 1978?", "Renee Bradshaw", ["Audrey Potter", "Bet Lynch", "Rita Fairclough"], "Medium", "1970s", "Weddings"],
    ["What was Renee Roberts's occupation when she married Alf?", "Corner Shop owner", ["Factory machinist", "Barmaid", "Schoolteacher"], "Medium", "1970s", "Businesses"],
    ["Which actor played the grocer and councillor Alf Roberts?", "Bryan Mosley", ["Arthur Leslie", "Johnny Briggs", "Jack Howarth"], "Medium", "1970s", "Actors"],
    ["Which actress played Gail Potter's mother Audrey?", "Sue Nicholls", ["Helen Worth", "Anne Kirkbride", "Barbara Knox"], "Easy", "1970s", "Actors"],
    ["Which relative of Gail Potter arrived in 1979 and later married Alf Roberts?", "Her mother Audrey", ["Her sister Sarah", "Her aunt Mavis", "Her cousin Rita"], "Medium", "1970s", "Families"],
    ["Which actor played Brian Tilsley?", "Christopher Quinten", ["Bill Tarmey", "Johnny Briggs", "Neville Buswell"], "Medium", "1970s", "Actors"],
    ["Who were Brian Tilsley's parents?", "Bert and Ivy Tilsley", ["Stan and Hilda Ogden", "Ken and Valerie Barlow", "Jack and Annie Walker"], "Medium", "1970s", "Families"],
    ["Who did Gail Potter marry in 1979?", "Brian Tilsley", ["Martin Platt", "Richard Hillman", "Nick Tilsley"], "Easy", "1970s", "Weddings"],
    ["Which actor played Jack Duckworth when he first appeared in 1979?", "Bill Tarmey", ["Bernard Youens", "Fred Feast", "Geoffrey Hughes"], "Easy", "1970s", "Actors"],
    ["Which Coronation Street character was Jack Duckworth's wife?", "Vera Duckworth", ["Hilda Ogden", "Ivy Tilsley", "Rita Fairclough"], "Easy", "1970s", "Families"],
    ["Which character was the father of Brian Tilsley?", "Bert Tilsley", ["Stan Ogden", "Jack Duckworth", "Alf Roberts"], "Medium", "1970s", "Families"],
    ["What crashed into the Rovers Return frontage in 1979?", "A lorry", ["A tram", "A double-decker bus", "A train"], "Medium", "1970s", "Storylines"],
    ["What was the overturned lorry carrying when it hit the Rovers in 1979?", "Timber", ["Beer barrels", "Bricks", "Coal"], "Hard", "1970s", "Storylines"],
    ["Which industrial action interrupted Coronation Street broadcasts for weeks in 1979?", "An ITV technicians' strike", ["A miners' strike", "A postal workers' strike", "A rail strike"], "Medium", "1970s", "History"],
    ["Which two characters discussed recent events when Coronation Street resumed after the 1979 ITV strike?", "Bet Lynch and Len Fairclough", ["Ken Barlow and Mike Baldwin", "Annie Walker and Hilda Ogden", "Gail Potter and Brian Tilsley"], "Hard", "1970s", "History"],
    ["Which friend of Gail Potter, played by Cheryl Murray, left Coronation Street in 1979?", "Suzie Birchall", ["Mavis Riley", "Tricia Hopkins", "Lucille Hewitt"], "Medium", "1970s", "Characters"]

];

// =====================================================
// BUILD STANDARD QUIZ QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {

    const [
        question,
        correctAnswer,
        wrongAnswers,
        difficulty,
        decade,
        topic
    ] = fact;

    const answers = wrongAnswers.slice();

    answers.splice(
        index % 4,
        0,
        correctAnswer
    );

    return {
        id:
            'tv_' +
            String(201 + index).padStart(4, '0'),

        category: 'Television',

        question,
        answers,
        correctAnswer,
        difficulty,

        tags: [
            'Soaps',
            'Coronation Street',
            decade,
            topic
        ],

        dailyEligible: true
    };

});

// =====================================================
// VALIDATION
// =====================================================

if (
    questions.length !== 100 ||
    questions[0].id !== 'tv_0201' ||
    questions[99].id !== 'tv_0300'
) {
    throw new Error(
        'Pack 162: incorrect question count or ID range'
    );
}

const seenIds = new Set();
const seenQuestions = new Set();

for (const q of questions) {

    const wording =
        q.question.trim().toLowerCase();

    if (
        seenIds.has(q.id) ||
        seenQuestions.has(wording) ||
        q.answers.length !== 4 ||
        new Set(
            q.answers.map(
                a => a.toLowerCase()
            )
        ).size !== 4 ||
        q.answers.filter(
            a => a === q.correctAnswer
        ).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(
            q.difficulty
        )
    ) {
        throw new Error(
            'Pack 162: invalid question ' + q.id
        );
    }

    seenIds.add(q.id);
    seenQuestions.add(wording);
}

// =====================================================
// EXPORT
// =====================================================

module.exports = questions;
