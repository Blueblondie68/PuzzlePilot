// quiz_pack164.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 1985 to 1987
// 100 questions: tv_0401 to tv_0500
// Leave quiz_bank.js unchanged until the end of the session.

// Each entry contains:
// Question, correct answer, three wrong answers,
// difficulty, year and topic.

const facts = [

    // =====================================================
    // 1985 - A NEW LANDLADY AND CHANGING HOUSEHOLDS
    // =====================================================

    ["Which Rovers barmaid became the pub's landlady at the beginning of 1985?", "Bet Lynch", ["Betty Turpin", "Gloria Todd", "Rita Fairclough"], "Easy", "1985", "Rovers Return"],
    ["Which relief manager was brought into the Rovers in January 1985 before Bet fully took over?", "Frank Harvey", ["Frank Mills", "Fred Gee", "Alec Gilroy"], "Hard", "1985", "Rovers Return"],
    ["Who did Bill Webster marry in January 1985?", "Elaine Prior", ["Renee Bradshaw", "Sally Seddon", "Connie Clayton"], "Medium", "1985", "Weddings"],
    ["To which English city did Bill Webster move with Elaine and daughter Debbie in 1985?", "Southampton", ["Bristol", "Leeds", "Sheffield"], "Medium", "1985", "Departures"],
    ["Which member of the Webster family stayed in Weatherfield when Bill and Debbie moved away?", "Kevin Webster", ["Debbie Webster", "Bill Webster", "Elaine Webster"], "Easy", "1985", "Families"],
    ["Which future member of the Platt family first appeared working at Jim's Cafe in 1985?", "Martin Platt", ["David Platt", "Nick Tilsley", "Richard Hillman"], "Easy", "1985", "Characters"],
    ["Which actor first played Martin Platt in Coronation Street?", "Sean Wilson", ["Christopher Quinten", "Michael Le Vell", "Kevin Kennedy"], "Medium", "1985", "Actors"],
    ["Which family moved into Number 11 Coronation Street in January 1985?", "The Claytons", ["The McDonalds", "The Websters", "The Seddons"], "Medium", "1985", "Families"],
    ["What was the first name of the Clayton family's father, who lived at Number 11 in 1985?", "Harry", ["Eddie", "Alf", "George"], "Hard", "1985", "Families"],
    ["Which Clayton daughter became pregnant by Terry Duckworth in 1985?", "Andrea", ["Sue", "Debbie", "Sharon"], "Medium", "1985", "Storylines"],
    ["Which pensioner tried to win Phyllis Pearce's affection in September 1985?", "Sam Tindall", ["Percy Sugden", "Fred Gee", "Albert Tatlock"], "Medium", "1985", "Characters"],
    ["Where did Gail Tilsley go to stay after leaving Brian in April 1985?", "Audrey's flat in Cadishead", ["The Rovers Return", "Rita's flat above The Kabin", "Hilda's house"], "Medium", "1985", "Locations"],
    ["Which pub faced the Rovers Return in a Brainiest Pub quiz contest in 1985?", "The White Swan", ["The Flying Horse", "The Woolpack", "The Queen Victoria"], "Hard", "1985", "Storylines"],
    ["Which Street resident lost the Brainiest Pub competition for the Rovers in 1985?", "Percy Sugden", ["Ken Barlow", "Albert Tatlock", "Alf Roberts"], "Medium", "1985", "Storylines"],
    ["Who took Kevin Webster in as a lodger at Number 13 in May 1985?", "Hilda Ogden", ["Emily Bishop", "Betty Turpin", "Rita Fairclough"], "Easy", "1985", "Locations"],
    ["Which new Baldwin's Casuals van driver became romantically involved with Ivy Tilsley in 1985?", "George Wardle", ["Don Brennan", "Bill Webster", "Ian Latimer"], "Medium", "1985", "Relationships"],
    ["Why did Ivy Tilsley have religious doubts about marrying George Wardle?", "He was divorced", ["He was not baptised", "He was an atheist", "He had a criminal record"], "Medium", "1985", "Relationships"],
    ["Which crooked builder misled Hilda Ogden about the condition of Number 13's roof in 1985?", "Les Pringle", ["Len Fairclough", "Bill Webster", "Ray Langton"], "Hard", "1985", "Storylines"],
    ["Which Coronation Street business did Alf Roberts want to enlarge by buying Hilda's house?", "The Corner Shop", ["The Kabin", "Baldwin's Casuals", "Jim's Cafe"], "Medium", "1985", "Businesses"],
    ["Who performed the opening of the refurbished Corner Shop in September 1985 when Miss Weatherfield was unavailable?", "Bet Lynch", ["Audrey Potter", "Rita Fairclough", "Deirdre Barlow"], "Hard", "1985", "Businesses"],
    ["Which widow turned down Alf Roberts's marriage proposal in September 1985?", "Rita Fairclough", ["Hilda Ogden", "Emily Bishop", "Bet Lynch"], "Medium", "1985", "Relationships"],
    ["Which character went missing in 1985 after an argument about wanting a pet dog?", "Tracy Langton", ["Jenny Bradley", "Debbie Webster", "Andrea Clayton"], "Medium", "1985", "Storylines"],
    ["In which city was the missing Tracy Langton found in October 1985?", "Newcastle", ["York", "Liverpool", "Manchester"], "Hard", "1985", "Storylines"],
    ["Which Barlow family member brought the runaway Tracy back from Newcastle?", "Susan Barlow", ["Peter Barlow", "Ken Barlow", "Valerie Barlow"], "Medium", "1985", "Families"],
    ["Whom did Ken Barlow hope to adopt formally after marrying Deirdre?", "Tracy Langton", ["Susan Barlow", "Jenny Bradley", "Nicky Tilsley"], "Easy", "1985", "Families"],
    ["Which Rovers potman was dismissed after rowing with his wife Vera in the pub in October 1985?", "Jack Duckworth", ["Fred Gee", "Frank Mills", "Wilf Starkey"], "Medium", "1985", "Rovers Return"],
    ["Which Rovers barman resigned in August 1985 after being suspected of stealing from the till?", "Wilf Starkey", ["Fred Gee", "Jack Duckworth", "Alec Gilroy"], "Hard", "1985", "Rovers Return"],
    ["Which man became a potman at the Rovers Return in August 1985?", "Frank Mills", ["Frank Harvey", "George Wardle", "Les Pringle"], "Hard", "1985", "Rovers Return"],
    ["Which actress played Rovers barmaid Gloria Todd during the 1980s?", "Sue Jenkins", ["Julie Goodyear", "Betty Driver", "Jill Summers"], "Medium", "1985", "Actors"],
    ["Which Coronation Street couple married just before Christmas 1985?", "Alf Roberts and Audrey Potter", ["Kevin Webster and Sally Seddon", "Mike Baldwin and Susan Barlow", "Bet Lynch and Alec Gilroy"], "Easy", "1985", "Weddings"],
    ["Who was Alf Roberts's best man when he married Audrey in December 1985?", "Mike Baldwin", ["Ken Barlow", "Percy Sugden", "Jack Duckworth"], "Medium", "1985", "Weddings"],
    ["Which actress played Susan Barlow during her 1985 return to Coronation Street?", "Wendy Jane Walker", ["Sally Ann Matthews", "Sue Devaney", "Anne Kirkbride"], "Hard", "1985", "Actors"],

    // =====================================================
    // 1986 - THE ROVERS FIRE AND TWO WEDDINGS
    // =====================================================

    ["Which Kabin papergirl was taken in by Rita Fairclough after her mother's death in 1986?", "Jenny Bradley", ["Sharon Gaskell", "Sally Seddon", "Debbie Webster"], "Easy", "1986", "Families"],
    ["What was the first name of Jenny Bradley's mother, who died in 1986?", "Pat", ["Mavis", "Connie", "Renee"], "Hard", "1986", "Families"],
    ["Which character was Jenny Bradley's father?", "Alan Bradley", ["Len Fairclough", "Mike Baldwin", "Don Brennan"], "Easy", "1986", "Families"],
    ["Which actor played Alan Bradley in Coronation Street?", "Mark Eden", ["Roy Barraclough", "Johnny Briggs", "Peter Armitage"], "Medium", "1986", "Actors"],
    ["Which actress played Jenny Bradley during the 1980s?", "Sally Ann Matthews", ["Sally Whittaker", "Tracie Bennett", "Sue Devaney"], "Medium", "1986", "Actors"],
    ["What was Sally Webster's maiden name when she arrived in Coronation Street in 1986?", "Seddon", ["Potter", "Bradley", "Riley"], "Easy", "1986", "Characters"],
    ["Which actress began playing Sally Seddon in 1986?", "Sally Whittaker", ["Sue Nicholls", "Sue Jenkins", "Helen Worth"], "Medium", "1986", "Actors"],
    ["How did Kevin Webster accidentally drench Sally Seddon when they first met?", "Driving through a puddle", ["Knocking over a bucket", "Bursting a water pipe", "Spilling a pint"], "Easy", "1986", "Relationships"],
    ["What was the first name of Sally Seddon's difficult father?", "Eddie", ["Harry", "Don", "Fred"], "Medium", "1986", "Families"],
    ["Which Coronation Street resident let Sally Seddon stay at Number 13 to escape troubles at home?", "Hilda Ogden", ["Emily Bishop", "Bet Lynch", "Rita Fairclough"], "Medium", "1986", "Locations"],
    ["Which Barlow daughter married Mike Baldwin in May 1986?", "Susan Barlow", ["Tracy Barlow", "Deirdre Barlow", "Beattie Pearson"], "Easy", "1986", "Weddings"],
    ["Which Barlow family member gave Susan away at her wedding despite opposing her marriage?", "Ken Barlow", ["Peter Barlow", "Albert Tatlock", "Frank Barlow"], "Medium", "1986", "Weddings"],
    ["Which of Ken Barlow's children persuaded him to attend Susan's 1986 wedding?", "Peter Barlow", ["Tracy Barlow", "Susan Barlow", "Daniel Osbourne"], "Medium", "1986", "Families"],
    ["Which actor played the returning Peter Barlow in 1986?", "David Lonsdale", ["Chris Gascoyne", "Sean Wilson", "Kevin Kennedy"], "Hard", "1986", "Actors"],
    ["At which workplace did Ken Barlow punch Mike Baldwin in January 1986?", "Baldwin's Casuals", ["The Kabin", "The Corner Shop", "Jim's Cafe"], "Medium", "1986", "Storylines"],
    ["Which Australian relative of Brian Tilsley had an affair with Gail in 1986?", "Ian Latimer", ["Martin Platt", "George Wardle", "Harry Redman"], "Medium", "1986", "Relationships"],
    ["What was Ian Latimer's relationship to Brian Tilsley?", "His cousin", ["His brother", "His uncle", "His former boss"], "Medium", "1986", "Families"],
    ["Which Duckworth accidentally caused the Rovers fire by fitting the wrong fuse?", "Jack Duckworth", ["Terry Duckworth", "Vera Duckworth", "Curly Watts"], "Medium", "1986", "Storylines"],
    ["Where in the Rovers Return did the 1986 fire begin?", "The cellar", ["The kitchen", "The snug", "The bedrooms"], "Medium", "1986", "Locations"],
    ["In which month of 1986 did the Rovers Return suffer its famous fire?", "June", ["February", "September", "December"], "Medium", "1986", "History"],
    ["Which Rovers landlady became trapped upstairs during the 1986 fire?", "Bet Lynch", ["Annie Walker", "Betty Turpin", "Gloria Todd"], "Easy", "1986", "Storylines"],
    ["Which young mechanic climbed a ladder in an attempt to rescue Bet during the 1986 Rovers fire?", "Kevin Webster", ["Brian Tilsley", "Terry Duckworth", "Curly Watts"], "Easy", "1986", "Storylines"],
    ["Which brewery initially considered demolishing the Rovers after the 1986 fire?", "Newton & Ridley", ["Boddingtons", "Hydes", "Robinsons"], "Medium", "1986", "Businesses"],
    ["In which month of 1986 did the renovated Rovers Return reopen?", "August", ["April", "October", "December"], "Medium", "1986", "Rovers Return"],
    ["What happened to the Rovers' snug and select after the 1986 refurbishment?", "They were combined into a larger bar", ["They were converted into bedrooms", "They became a restaurant", "They were turned into a shop"], "Hard", "1986", "Rovers Return"],
    ["Which couple married at a register office in October 1986?", "Kevin Webster and Sally Seddon", ["Mike Baldwin and Susan Barlow", "Bet Lynch and Alec Gilroy", "Alf Roberts and Audrey Potter"], "Easy", "1986", "Weddings"],
    ["Who was Kevin Webster's best man at his wedding to Sally in 1986?", "Terry Duckworth", ["Brian Tilsley", "Curly Watts", "Martin Platt"], "Medium", "1986", "Weddings"],
    ["Which Street resident provided the reception at Number 13 for Kevin and Sally's 1986 wedding?", "Hilda Ogden", ["Rita Fairclough", "Bet Lynch", "Audrey Roberts"], "Medium", "1986", "Weddings"],
    ["Which actor played the theatrical agent Alec Gilroy, who returned in 1986?", "Roy Barraclough", ["Mark Eden", "Bryan Mosley", "Fred Feast"], "Easy", "1986", "Actors"],
    ["Which Coronation Street character worked as a theatrical agent before running the Rovers?", "Alec Gilroy", ["Alf Roberts", "Fred Gee", "Bill Webster"], "Medium", "1986", "Occupations"],
    ["Which girl crashed a car after a talent contest at the end of 1986?", "Jenny Bradley", ["Sally Seddon", "Susan Barlow", "Sharon Gaskell"], "Medium", "1986", "Storylines"],
    ["Who was injured when Jenny Bradley overturned the car in December 1986?", "Martin Platt", ["Alan Bradley", "Kevin Webster", "Brian Tilsley"], "Medium", "1986", "Storylines"],
    ["To which country did Rovers barmaid Gloria Todd travel with Richard in December 1986?", "Canada", ["Spain", "Australia", "France"], "Hard", "1986", "Storylines"],
    ["Which type of clothing did Susan Baldwin propose producing at Mike's factory late in 1986?", "Children's wear", ["Wedding dresses", "School blazers", "Winter coats"], "Medium", "1986", "Businesses"],

    // =====================================================
    // 1987 - MARRIAGES, ELECTIONS AND HILDA'S FAREWELL
    // =====================================================

    ["Which daughter of Gail and Brian Tilsley was born in February 1987?", "Sarah-Louise Tilsley", ["Bethany Platt", "Rosie Webster", "Jenny Bradley"], "Easy", "1987", "Families"],
    ["Who was confirmed by blood tests to be Sarah-Louise Tilsley's father?", "Brian Tilsley", ["Ian Latimer", "Martin Platt", "Kevin Webster"], "Medium", "1987", "Families"],
    ["Which woman told Ian Latimer about Gail Tilsley's pregnancy against Gail's wishes?", "Audrey Roberts", ["Ivy Tilsley", "Rita Fairclough", "Bet Lynch"], "Medium", "1987", "Relationships"],
    ["Which politician did Deirdre Barlow defeat in a Weatherfield council election in 1987?", "Alf Roberts", ["Ken Barlow", "Percy Sugden", "Mike Baldwin"], "Easy", "1987", "Politics"],
    ["What medical emergency did Alf Roberts suffer after his 1987 council-election defeat?", "A heart attack", ["A stroke", "Appendicitis", "A broken leg"], "Medium", "1987", "Storylines"],
    ["Which character initially decided to stand against Alf Roberts in the 1987 council elections?", "Ken Barlow", ["Len Fairclough", "Fred Gee", "Jack Duckworth"], "Medium", "1987", "Politics"],
    ["Who went into partnership with Bet Lynch in 1987 to buy the Rovers?", "Alec Gilroy", ["Mike Baldwin", "Alf Roberts", "Fred Gee"], "Easy", "1987", "Businesses"],
    ["To which Spanish resort did Alec Gilroy travel in 1987 to find Bet Lynch?", "Torremolinos", ["Benidorm", "Tenerife", "Marbella"], "Medium", "1987", "Storylines"],
    ["What job was Bet Lynch doing in Spain when Alec Gilroy found her in 1987?", "Working in a bar", ["Singing in a cabaret", "Cleaning hotel rooms", "Running a travel agency"], "Medium", "1987", "Occupations"],
    ["Which character proposed marriage to Bet Lynch while she was in Spain in 1987?", "Alec Gilroy", ["Mike Baldwin", "Fred Gee", "Jack Duckworth"], "Easy", "1987", "Relationships"],
    ["Which couple married in September 1987?", "Bet Lynch and Alec Gilroy", ["Ken Barlow and Deirdre Langton", "Kevin Webster and Sally Seddon", "Mike Baldwin and Susan Barlow"], "Easy", "1987", "Weddings"],
    ["Which Rovers barmaid was bridesmaid at Bet and Alec's 1987 wedding?", "Gloria Todd", ["Betty Turpin", "Mavis Riley", "Rita Fairclough"], "Medium", "1987", "Weddings"],
    ["Who gave Bet Lynch away at her 1987 wedding to Alec Gilroy?", "Alf Roberts", ["Mike Baldwin", "Fred Gee", "Jack Duckworth"], "Hard", "1987", "Weddings"],
    ["Which church hosted Bet Lynch and Alec Gilroy's 1987 wedding?", "St Mary's", ["All Saints", "St Luke's", "St Peter's"], "Hard", "1987", "Weddings"],
    ["What did Alec Gilroy give Bet as a wedding present in 1987?", "The Rovers Return", ["A diamond necklace", "A holiday cottage", "A new car"], "Medium", "1987", "Rovers Return"],
    ["Which surname did Bet Lynch take when she married Alec in 1987?", "Gilroy", ["Baldwin", "Roberts", "Bradley"], "Easy", "1987", "Characters"],
    ["Which taxi driver began dating Ivy Tilsley after they met in September 1987?", "Don Brennan", ["George Wardle", "Alan Bradley", "Bill Webster"], "Medium", "1987", "Relationships"],
    ["At which club did Vera Duckworth and Ivy Tilsley spend an evening in September 1987?", "The Pink Flamingo", ["The Tropicana", "The Red Lion", "The Flying Horse"], "Hard", "1987", "Locations"],
    ["Which young man travelled to France with Jenny Bradley when she ran away in 1987?", "Martin Platt", ["Kevin Webster", "Terry Duckworth", "Peter Barlow"], "Medium", "1987", "Storylines"],
    ["What was the name of Jenny Bradley's French fiancé in 1987?", "Patrice Podevin", ["Ian Latimer", "Victor Pendlebury", "Harry Redman"], "Hard", "1987", "Relationships"],
    ["Which character rejected Alan Bradley's surprise plan to marry at the register office in 1987?", "Rita Fairclough", ["Bet Lynch", "Mavis Riley", "Audrey Roberts"], "Medium", "1987", "Relationships"],
    ["Which young Barlow was taken to hospital for appendicitis in September 1987?", "Tracy Barlow", ["Susan Barlow", "Peter Barlow", "Sarah-Louise Tilsley"], "Medium", "1987", "Storylines"],
    ["Which businessman did Susan Barlow separate from in November 1987?", "Mike Baldwin", ["Alf Roberts", "Alan Bradley", "Don Brennan"], "Easy", "1987", "Relationships"],
    ["To which city did Susan Barlow return after leaving Mike in 1987?", "Newcastle", ["Liverpool", "Bristol", "York"], "Medium", "1987", "Departures"],
    ["Which couple's house was the scene of a violent burglary that shook Hilda Ogden in 1987?", "The Lowthers'", ["The Barlows'", "The Websters'", "The Duckworths'"], "Medium", "1987", "Storylines"],
    ["Which woman died after the burglary at the Lowthers' home in 1987?", "Joan Lowther", ["Audrey Roberts", "Hilda Ogden", "Rita Fairclough"], "Hard", "1987", "Storylines"],
    ["Which widower invited Hilda Ogden to move to the countryside as his housekeeper in 1987?", "Doctor Lowther", ["Tom Hopwood", "Percy Sugden", "Alf Roberts"], "Medium", "1987", "Departures"],
    ["To which Derbyshire village did Hilda Ogden move when she left the Street in 1987?", "Hartington", ["Matlock", "Bakewell", "Buxton"], "Medium", "1987", "Locations"],
    ["On which holiday did Hilda Ogden make her final regular appearance in 1987?", "Christmas Day", ["New Year's Eve", "Easter Sunday", "Boxing Day"], "Easy", "1987", "History"],
    ["Which friend proposed marriage to Hilda Ogden in 1987 and suggested moving to Formby?", "Tom Hopwood", ["Doctor Lowther", "Fred Gee", "Sam Tindall"], "Medium", "1987", "Relationships"],
    ["Which couple bought Number 13 from Hilda Ogden when she left Weatherfield?", "Kevin and Sally Webster", ["Alf and Audrey Roberts", "Jack and Vera Duckworth", "Brian and Gail Tilsley"], "Easy", "1987", "Locations"],
    ["Who returned to visit Hilda Ogden in late 1987 after four years away from Weatherfield?", "Eddie Yeats", ["Len Fairclough", "Billy Walker", "Ray Langton"], "Medium", "1987", "Characters"],
    ["Which Coronation Street actress played Hilda Ogden until her departure in 1987?", "Jean Alexander", ["Doris Speed", "Eileen Derbyshire", "Julie Goodyear"], "Easy", "1987", "Actors"],
    ["Which man moved into Number 7 Coronation Street with Rita Fairclough in February 1987?", "Alan Bradley", ["Don Brennan", "Alec Gilroy", "Mike Baldwin"], "Medium", "1987", "Locations"],

];

// =====================================================
// BUILD THE QUIZ QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {

    const [
        question,
        correctAnswer,
        wrongAnswers,
        difficulty,
        year,
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
            String(401 + index).padStart(4, '0'),

        category: 'Television',

        question,
        answers,
        correctAnswer,
        difficulty,

        tags: [
            'Soaps',
            'Coronation Street',
            '1980s',
            year,
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
    questions[0].id !== 'tv_0401' ||
    questions[99].id !== 'tv_0500'
) {
    throw new Error(
        'Pack 164: incorrect question count or ID range'
    );
}

const seenIds = new Set();
const seenQuestions = new Set();

for (const q of questions) {

    const normalized = q.question
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    if (
        seenIds.has(q.id) ||
        seenQuestions.has(normalized) ||
        q.answers.length !== 4 ||
        new Set(
            q.answers.map(a => a.toLowerCase())
        ).size !== 4 ||
        q.answers.filter(
            a => a === q.correctAnswer
        ).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(
            q.difficulty
        ) ||
        !q.dailyEligible ||
        q.category !== 'Television'
    ) {
        throw new Error(
            'Pack 164: invalid question ' + q.id
        );
    }

    seenIds.add(q.id);
    seenQuestions.add(normalized);
}

// =====================================================
// EXPORT
// =====================================================

module.exports = questions;
