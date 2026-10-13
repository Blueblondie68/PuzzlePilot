// quiz_pack166.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 1990 and 1991
// 100 questions: tv_0601 to tv_0700
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [

    // =====================================================
    // 1990 - THE STREET ENTERS A NEW DECADE
    // =====================================================

    ["Which man did Deirdre Barlow throw out of Number 1 at the start of 1990?", "Ken Barlow", ["Mike Baldwin", "Phil Jennings", "Alec Gilroy"], "Easy", "1990", "Relationships"],
    ["Who had Ken Barlow spent New Year with instead of his wife at the start of 1990?", "Wendy Crozier", ["Alma Sedgewick", "Rita Fairclough", "Jackie Ingram"], "Medium", "1990", "Relationships"],
    ["Which taxi driver had his cab stolen in January 1990?", "Don Brennan", ["Jack Duckworth", "Des Barnes", "Jim McDonald"], "Medium", "1990", "Storylines"],
    ["Which granddaughter of Alec Gilroy made her first appearance in January 1990?", "Vicky Arden", ["Tracy Barlow", "Jenny Bradley", "Rosie Webster"], "Medium", "1990", "Families"],
    ["What was the name of Alec Gilroy's daughter, seen in 1990?", "Sandra Arden", ["Tina Fowler", "Jackie Ingram", "Angie Freeman"], "Medium", "1990", "Families"],
    ["Who was Sandra Arden's husband when she first appeared in 1990?", "Tim Arden", ["Peter Ingram", "Phil Jennings", "Des Barnes"], "Hard", "1990", "Families"],
    ["Which married couple moved into Number 6 Coronation Street in February 1990?", "Des and Steph Barnes", ["Jim and Liz McDonald", "Kevin and Sally Webster", "Derek and Mavis Wilton"], "Easy", "1990", "Arrivals"],
    ["Which actor began playing Des Barnes in 1990?", "Philip Middlemiss", ["Ken Morley", "Charles Lawson", "Kevin Kennedy"], "Medium", "1990", "Actors"],
    ["Which actress played Steph Barnes when the character arrived in 1990?", "Amelia Bullmore", ["Deborah McAndrew", "Sarah Lancashire", "Shirin Taylor"], "Medium", "1990", "Actors"],
    ["What was Steph Barnes's maiden surname when she married Des in 1990?", "Jones", ["Taylor", "Arden", "Khan"], "Hard", "1990", "Weddings"],
    ["Which friend of Jenny Bradley arrived in Weatherfield in February 1990?", "Flick Khan", ["Angie Freeman", "Raquel Wolstenhulme", "Kimberley Taylor"], "Medium", "1990", "Arrivals"],
    ["Which actress played the student Flick Khan in 1990?", "Rita Wolf", ["Lisa Lewis", "Suzanne Hall", "Deborah McAndrew"], "Hard", "1990", "Actors"],
    ["Which Rovers barmaid was jilted by Eddie Ramsden in March 1990?", "Tina Fowler", ["Liz McDonald", "Betty Turpin", "Gloria Todd"], "Medium", "1990", "Relationships"],
    ["Whose shopping caused Percy Sugden to slip and break his ankle in March 1990?", "Phyllis Pearce's", ["Emily Bishop's", "Vera Duckworth's", "Audrey Roberts's"], "Medium", "1990", "Storylines"],
    ["Which Rovers landlord barred Percy Sugden after his complaints in March 1990?", "Alec Gilroy", ["Jack Duckworth", "Billy Walker", "Fred Gee"], "Medium", "1990", "Rovers Return"],
    ["Which house did Derek and Mavis Wilton move into in March 1990?", "Number 4", ["Number 1", "Number 7", "Number 11"], "Medium", "1990", "Homes"],
    ["What kind of pet was Harriet, who died shortly after the Wiltons moved house in 1990?", "A budgie", ["A cat", "A rabbit", "A goldfish"], "Medium", "1990", "Animals"],
    ["What caused a fire at Number 1 in April 1990?", "A chip pan", ["A faulty heater", "A cigarette", "An electrical short in the television"], "Medium", "1990", "Storylines"],
    ["Which young Barlow was rescued from the Number 1 fire in April 1990?", "Tracy Barlow", ["Susan Barlow", "Peter Barlow", "Daniel Barlow"], "Easy", "1990", "Families"],
    ["Who rescued Tracy Barlow from the chip-pan fire in April 1990?", "Dave Barton", ["Ken Barlow", "Martin Platt", "Curly Watts"], "Hard", "1990", "Storylines"],
    ["Which resident moved from Number 7 into a flat above the new Kabin in April 1990?", "Rita Fairclough", ["Mavis Wilton", "Emily Bishop", "Deirdre Barlow"], "Easy", "1990", "Homes"],
    ["Who was expecting Martin Platt's baby during 1990?", "Gail Tilsley", ["Sally Webster", "Liz McDonald", "Steph Barnes"], "Easy", "1990", "Families"],
    ["What decision did Martin Platt persuade Gail not to go ahead with in May 1990?", "Having an abortion", ["Moving to Canada", "Selling the café", "Leaving her job"], "Medium", "1990", "Storylines"],
    ["Who demanded that Gail marry Martin before their baby arrived in 1990?", "Ivy Brennan", ["Audrey Roberts", "Deirdre Barlow", "Bet Gilroy"], "Medium", "1990", "Relationships"],
    ["Which supermarket boss moved into the Corner Shop flat in May 1990?", "Reg Holdsworth", ["Peter Ingram", "Alf Roberts", "Maurice Jones"], "Medium", "1990", "Homes"],
    ["Which brewery representative intervened in June 1990 to confirm that Bet and Alec would keep running the Rovers?", "Cecil Newton", ["Nigel Ridley", "Roger Woodhouse", "Phil Jennings"], "Hard", "1990", "Rovers Return"],
    ["Who was brought in as a relief manager at the Rovers during the ownership scare in June 1990?", "Roger Woodhouse", ["Frank Mills", "Billy Walker", "Fred Gee"], "Hard", "1990", "Rovers Return"],
    ["Which Bettabuy employee was promoted to assistant manager in July 1990?", "Curly Watts", ["Vera Duckworth", "Reg Holdsworth", "Kimberley Taylor"], "Medium", "1990", "Businesses"],
    ["What free transport service did Bettabuy introduce to attract shoppers from Coronation Street in July 1990?", "A bus service", ["A taxi service", "A tram pass scheme", "A bicycle delivery service"], "Medium", "1990", "Businesses"],
    ["Which McDonald twin ran away with Joanne Khan in July 1990?", "Steve McDonald", ["Andy McDonald", "Nick Tilsley", "Peter Barlow"], "Medium", "1990", "Relationships"],
    ["To which part of England did Steve McDonald and Joanne Khan elope in 1990?", "The Lake District", ["The Peak District", "The Yorkshire Dales", "The Cotswolds"], "Medium", "1990", "Travel"],
    ["Whom did Peter Barlow marry in August 1990?", "Jessica Midgeley", ["Susan Barlow", "Wendy Crozier", "Flick Khan"], "Medium", "1990", "Weddings"],
    ["In which English city did Peter Barlow marry Jessica Midgeley in 1990?", "Portsmouth", ["Leeds", "Manchester", "Liverpool"], "Hard", "1990", "Weddings"],
    ["Which businessman employed Mike Baldwin as a sales representative in 1990?", "Peter Ingram", ["Maurice Jones", "Alan Bradley", "Alf Roberts"], "Medium", "1990", "Businesses"],
    ["What surname did Jackie Ingram use when she approached Mike Baldwin undercover in 1990?", "Williams", ["Taylor", "Arden", "Crozier"], "Hard", "1990", "Storylines"],
    ["What caused factory owner Peter Ingram's death in August 1990?", "A heart attack", ["A road accident", "A factory fire", "A fall from scaffolding"], "Medium", "1990", "Storylines"],
    ["What was the name of Mike Baldwin's newly established clothing business in 1990?", "Phoenix Casuals", ["Baldwin's Knitwear", "Ingram Fashions", "Weatherfield Textiles"], "Medium", "1990", "Businesses"],
    ["Who arranged for a male stripper to surprise Vera Duckworth in the Rovers in August 1990?", "Steph Barnes", ["Bet Gilroy", "Liz McDonald", "Audrey Roberts"], "Medium", "1990", "Storylines"],
    ["Which McDonald twin achieved the better O-level results in August 1990?", "Andy McDonald", ["Steve McDonald", "Neither sat the exams", "They received identical grades"], "Medium", "1990", "Families"],
    ["Where did Ken Barlow move after leaving Number 1 in August 1990?", "The Corner Shop flat", ["The Kabin flat", "Number 6", "The Rovers Return"], "Medium", "1990", "Homes"],
    ["Which brewery executive was Tina Fowler secretly involved with before she left in September 1990?", "Nigel Ridley", ["Cecil Newton", "Peter Ingram", "Roger Woodhouse"], "Hard", "1990", "Relationships"],
    ["Which McDonald family member started work as a Rovers barmaid in September 1990?", "Liz McDonald", ["Vera Duckworth", "Jackie Ingram", "Sandra Arden"], "Easy", "1990", "Rovers Return"],
    ["Who began divorce proceedings against Ken Barlow in September 1990?", "Deirdre Barlow", ["Wendy Crozier", "Alma Sedgewick", "Susan Barlow"], "Easy", "1990", "Relationships"],
    ["Which design student became a lodger at Number 7 in October 1990?", "Angie Freeman", ["Flick Khan", "Raquel Wolstenhulme", "Jackie Ingram"], "Medium", "1990", "Arrivals"],
    ["Which actress began playing Angie Freeman in 1990?", "Deborah McAndrew", ["Amelia Bullmore", "Sarah Lancashire", "Sally Ann Matthews"], "Medium", "1990", "Actors"],
    ["Which baby was born to Kevin and Sally Webster at Christmas 1990?", "Rosie Webster", ["Sophie Webster", "Sarah-Louise Tilsley", "Amy Barlow"], "Easy", "1990", "Families"],
    ["In whose taxi did Sally Webster go into labour in December 1990?", "Don Brennan's", ["Jim McDonald's", "Des Barnes's", "Jack Duckworth's"], "Medium", "1990", "Storylines"],
    ["Who helped deliver Sally Webster's baby in a taxi at Christmas 1990?", "Liz McDonald", ["Vera Duckworth", "Bet Gilroy", "Ivy Brennan"], "Medium", "1990", "Families"],
    ["What was the name of Gail and Martin's son born at Christmas 1990?", "David", ["Nick", "Daniel", "Simon"], "Easy", "1990", "Families"],
    ["Which long-standing resident became suicidal at the very end of 1990 following the breakdown of his marriage?", "Ken Barlow", ["Alec Gilroy", "Mike Baldwin", "Derek Wilton"], "Medium", "1990", "Storylines"],

    // =====================================================
    // 1991 - NEW ROMANCES AND FAMILY DRAMAS
    // =====================================================

    ["Who stopped Ken Barlow from taking his own life in January 1991?", "Bet Gilroy", ["Deirdre Barlow", "Rita Fairclough", "Emily Bishop"], "Medium", "1991", "Storylines"],
    ["Whose engagement to Kimberley Taylor ended in January 1991?", "Curly Watts", ["Reg Holdsworth", "Steve McDonald", "Des Barnes"], "Medium", "1991", "Relationships"],
    ["Which future Rovers barmaid first appeared in Coronation Street in January 1991?", "Raquel Wolstenhulme", ["Tina Fowler", "Gloria Todd", "Liz McDonald"], "Easy", "1991", "Arrivals"],
    ["Which actress originally played Raquel Wolstenhulme?", "Sarah Lancashire", ["Amelia Bullmore", "Deborah McAndrew", "Sally Whittaker"], "Easy", "1991", "Actors"],
    ["What was the first name of Reg Holdsworth's wife who arrived from New Zealand in 1991?", "Veronica", ["Vivienne", "Victoria", "Valerie"], "Medium", "1991", "Families"],
    ["Which country did Reg Holdsworth's wife travel from when she arrived in February 1991?", "New Zealand", ["Canada", "Australia", "South Africa"], "Medium", "1991", "Travel"],
    ["Which relative of Vera Duckworth died while playing bingo in February 1991?", "Her mother Amy Burton", ["Her aunt Cissie", "Her sister", "Her grandmother"], "Medium", "1991", "Families"],
    ["Who broke the news to Vera Duckworth about her mother's death in February 1991?", "Aunt Cissie", ["Jack Duckworth", "Liz McDonald", "Bet Gilroy"], "Hard", "1991", "Families"],
    ["Which man told Vera Duckworth in February 1991 that he was her father?", "Joss Shackleton", ["Jack Walker", "Percy Sugden", "Peter Ingram"], "Medium", "1991", "Families"],
    ["Which young woman who had lived at Number 7 left Coronation Street in March 1991?", "Jenny Bradley", ["Angie Freeman", "Kimberley Taylor", "Steph Barnes"], "Medium", "1991", "Departures"],
    ["Which Rovers landlord considered selling the pub in March 1991?", "Alec Gilroy", ["Billy Walker", "Fred Gee", "Jack Duckworth"], "Medium", "1991", "Rovers Return"],
    ["Which Bettabuy employee moved into Number 7 in March 1991?", "Curly Watts", ["Reg Holdsworth", "Jim McDonald", "Mike Baldwin"], "Medium", "1991", "Homes"],
    ["Which fashion student shared Number 7 with Curly Watts in 1991?", "Angie Freeman", ["Raquel Wolstenhulme", "Kimberley Taylor", "Tina Fowler"], "Easy", "1991", "Homes"],
    ["Which married man accused Steph Barnes of having an affair following her holiday in 1991?", "Des Barnes", ["Jack Duckworth", "Kevin Webster", "Martin Platt"], "Medium", "1991", "Relationships"],
    ["In which Cheshire town did Jack and Vera Duckworth find chauffeur and housekeeper jobs in 1991?", "Knutsford", ["Crewe", "Macclesfield", "Wilmslow"], "Hard", "1991", "Occupations"],
    ["Which shopkeeper won a Weatherfield council election in May 1991?", "Alf Roberts", ["Ken Barlow", "Mike Baldwin", "Reg Holdsworth"], "Medium", "1991", "Politics"],
    ["Which woman challenged Alf Roberts in the 1991 council elections?", "Deirdre Barlow", ["Audrey Roberts", "Liz McDonald", "Rita Fairclough"], "Medium", "1991", "Politics"],
    ["Which local campaigner made Audrey suspicious of Alf during the 1991 election?", "Vivienne Barford", ["Jackie Ingram", "Kimberley Taylor", "Dawn Prescott"], "Hard", "1991", "Relationships"],
    ["What happened at Number 9 after Coronation Street's water supply was restored in May 1991?", "The Duckworths' house flooded", ["Its roof collapsed", "A window was smashed", "Its kitchen caught fire"], "Medium", "1991", "Storylines"],
    ["Which McDonald son was thrown out of Number 11 by Jim for refusing to attend school in May 1991?", "Steve McDonald", ["Andy McDonald", "Nick Tilsley", "Peter Barlow"], "Medium", "1991", "Families"],
    ["Which wealthy widow did Mike Baldwin marry in July 1991?", "Jackie Ingram", ["Alma Sedgewick", "Wendy Crozier", "Liz McDonald"], "Easy", "1991", "Weddings"],
    ["What was the first name of Jackie Ingram's late husband, whose factory Mike coveted?", "Peter", ["Phil", "Roger", "Nigel"], "Medium", "1991", "Families"],
    ["Where did Mike Baldwin and Jackie Ingram marry in July 1991?", "A register office", ["All Saints Church", "The Rovers Return", "St Luke's Church"], "Medium", "1991", "Weddings"],
    ["What weapon did Jackie Baldwin point at Mike after discovering his deceptions in July 1991?", "A shotgun", ["A carving knife", "A pistol", "A crowbar"], "Medium", "1991", "Storylines"],
    ["Which café's ownership helped cause a row between Jackie and Mike Baldwin in July 1991?", "Jim's Café", ["The Royle Café", "The Rovers Return", "The Corner Shop"], "Medium", "1991", "Businesses"],
    ["Which lodger deliberately disrupted Emily Bishop's efforts to sell Number 3 in July 1991?", "Percy Sugden", ["Curly Watts", "Reg Holdsworth", "Derek Wilton"], "Medium", "1991", "Homes"],
    ["Which granddaughter of Alec Gilroy was left orphaned by a road accident in July 1991?", "Vicky Arden", ["Jenny Bradley", "Tracy Barlow", "Rosie Webster"], "Medium", "1991", "Families"],
    ["What happened to Sandra and Tim Arden in July 1991?", "They died in a car crash", ["They emigrated to Australia", "They were arrested", "They moved to a cruise ship"], "Medium", "1991", "Storylines"],
    ["What was the name of Alec Gilroy's former wife who died in 1991?", "Joyce", ["Sandra", "Maureen", "Annie"], "Hard", "1991", "Families"],
    ["What did Des Barnes deliberately set on fire after a row with Steph in August 1991?", "His boat", ["His car", "His garden shed", "His record collection"], "Medium", "1991", "Storylines"],
    ["Which woman left Des Barnes in September 1991?", "Steph Barnes", ["Angie Freeman", "Raquel Wolstenhulme", "Kimberley Taylor"], "Medium", "1991", "Departures"],
    ["Which supermarket won the best-float prize at the 1991 Weatherfield Carnival?", "Bettabuy", ["Freshco", "Costcutter", "Alf's Corner Shop"], "Medium", "1991", "Events"],
    ["Who designed the winning Bettabuy float for the 1991 Weatherfield Carnival?", "Angie Freeman", ["Mavis Wilton", "Rita Fairclough", "Audrey Roberts"], "Medium", "1991", "Events"],
    ["What was the theme of Bettabuy's prize-winning float at the 1991 Weatherfield Carnival?", "Horn of Plenty", ["The Wild West", "The Space Age", "The Royal Wedding"], "Hard", "1991", "Events"],
    ["Who proposed marriage to Martin Platt in September 1991?", "Gail Tilsley", ["Alma Sedgewick", "Angie Freeman", "Liz McDonald"], "Easy", "1991", "Weddings"],
    ["Who objected most strongly to Martin Platt adopting Gail's two older children in 1991?", "Ivy Brennan", ["Audrey Roberts", "Bet Gilroy", "Deirdre Barlow"], "Medium", "1991", "Families"],
    ["Which two children did Martin Platt formally adopt in October 1991?", "Nicky and Sarah-Louise", ["Rosie and David", "Steve and Andy", "Tracy and Susan"], "Medium", "1991", "Families"],
    ["In which month of 1991 did Gail Tilsley and Martin Platt marry?", "September", ["January", "April", "December"], "Easy", "1991", "Weddings"],
    ["Which mechanic acted as a witness at Gail and Martin's 1991 wedding?", "Kevin Webster", ["Mark Casey", "Brian Tilsley", "Terry Duckworth"], "Medium", "1991", "Weddings"],
    ["Which woman joined Kevin Webster as a witness at Gail and Martin's wedding?", "Alma Sedgewick", ["Ivy Brennan", "Bet Gilroy", "Wendy Crozier"], "Hard", "1991", "Weddings"],
    ["Where did Gail and Martin go on honeymoon after marrying in 1991?", "Abersoch", ["Blackpool", "Corfu", "Majorca"], "Medium", "1991", "Travel"],
    ["Which house did supermarket manager Reg Holdsworth move into during September 1991?", "Number 12", ["Number 2", "Number 7", "Number 9"], "Medium", "1991", "Homes"],
    ["Which McDonald parent announced a pregnancy in September 1991?", "Liz McDonald", ["Vera Duckworth", "Sally Webster", "Deirdre Barlow"], "Easy", "1991", "Families"],
    ["Which barmaid did Don Brennan begin an affair with in November 1991?", "Julie Dewhurst", ["Raquel Wolstenhulme", "Tina Fowler", "Betty Turpin"], "Medium", "1991", "Relationships"],
    ["Which businessman helped Kevin Webster establish MVB Motors in 1991?", "Mike Baldwin", ["Reg Holdsworth", "Alf Roberts", "Alec Gilroy"], "Medium", "1991", "Businesses"],
    ["What was the name of the garage business Kevin Webster began running in November 1991?", "MVB Motors", ["Casey's Motors", "Webster's Autos", "Street Cars"], "Medium", "1991", "Businesses"],
    ["Which former fellow mechanic did Kevin Webster refuse to employ at his new garage in November 1991?", "Mark Casey", ["Brian Tilsley", "Bill Webster", "Terry Duckworth"], "Medium", "1991", "Businesses"],
    ["Which man went on a hotel break with Alma Sedgewick in 1991, only to discover they had been booked into the same room?", "Ken Barlow", ["Mike Baldwin", "Des Barnes", "Alec Gilroy"], "Medium", "1991", "Relationships"],
    ["Which dog attacked Derek Wilton during the 1991 fox-hunt commotion?", "Boomer", ["Rover", "Lucky", "Jimmy"], "Hard", "1991", "Animals"],
    ["Which woman was romantically involved with Curly Watts during much of early 1991?", "Raquel Wolstenhulme", ["Steph Barnes", "Jackie Ingram", "Sandra Arden"], "Easy", "1991", "Relationships"]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(601 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Coronation Street', '1990s', year, topic],
        dailyEligible: true
    };
});

// =====================================================
// VALIDATION
// =====================================================

if (questions.length !== 100 ||
    questions[0].id !== 'tv_0601' ||
    questions[99].id !== 'tv_0700' ||
    questions.filter(q => q.tags.includes('1990')).length !== 50 ||
    questions.filter(q => q.tags.includes('1991')).length !== 50) {
    throw new Error('Pack 166: incorrect count, year balance or ID range');
}

const seenIds = new Set();
const seenQuestions = new Set();

for (const q of questions) {
    const key = q.question.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
    if (seenIds.has(q.id) || seenQuestions.has(key) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        q.category !== 'Television' || !q.dailyEligible) {
        throw new Error('Pack 166: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
