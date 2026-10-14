// quiz_pack178.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2014 and 2015
// 100 questions: tv_1801 to tv_1900
// Leave quiz_bank.js unchanged until Render is working normally.

const facts = [

    // =====================================================
    // YEAR 2014
    // =====================================================

    ["How did Hayley Cropper die in January 2014?", "She took her own life", ["She died in a road accident", "She fell down the stairs", "She died in a factory fire"], "Easy", "2014", "Departures"],
    ["Which character was with Hayley Cropper when she died in 2014?", "Roy Cropper", ["Ken Barlow", "Dennis Tanner", "Brian Packham"], "Easy", "2014", "Relationships"],
    ["Which actress played Hayley Cropper in her final scenes in 2014?", "Julie Hesmondhalgh", ["Sally Dynevor", "Jane Danson", "Alison King"], "Easy", "2014", "Actors"],
    ["Which member of the Barlow family began an affair with Tina McIntyre in February 2014?", "Peter Barlow", ["Ken Barlow", "Adam Barlow", "Daniel Osbourne"], "Easy", "2014", "Relationships"],
    ["Who was Peter Barlow married to when he began his 2014 affair with Tina?", "Carla Connor", ["Leanne Battersby", "Tracy Barlow", "Michelle Connor"], "Easy", "2014", "Relationships"],
    ["Who killed Tina McIntyre in 2014?", "Rob Donovan", ["Peter Barlow", "Tracy Barlow", "Carla Connor"], "Easy", "2014", "Crime"],
    ["From which location was Tina McIntyre pushed during her confrontation with Rob Donovan?", "The builders' yard balcony", ["The Rovers Return roof", "The Kabin staircase", "The Underworld loading bay"], "Medium", "2014", "Crime"],
    ["What weapon did Rob Donovan use to attack Tina after her fall in 2014?", "An iron bar", ["A kitchen knife", "A hammer", "A wooden plank"], "Medium", "2014", "Crime"],
    ["Where did Tina McIntyre die in June 2014?", "In hospital", ["At the Rovers Return", "At the builders' yard", "At Underworld"], "Easy", "2014", "Departures"],
    ["Which actress played Tina McIntyre during the 2014 murder storyline?", "Michelle Keegan", ["Kym Marsh", "Georgia Taylor", "Paula Lane"], "Easy", "2014", "Actors"],
    ["Which actor played Tina McIntyre's murderer Rob Donovan?", "Marc Baylis", ["Gray O'Brien", "Graeme Hawley", "Chris Gascoyne"], "Medium", "2014", "Actors"],
    ["Who was wrongly convicted of murdering Tina McIntyre in October 2014?", "Peter Barlow", ["Steve McDonald", "Nick Tilsley", "David Platt"], "Easy", "2014", "Crime"],
    ["Which relative did Rob Donovan confess his guilt to before his planned wedding in 2014?", "Carla Connor", ["Michelle Connor", "Maria Connor", "Aidan Connor"], "Medium", "2014", "Crime"],
    ["Which woman alerted the police to Rob Donovan's confession in 2014?", "Carla Connor", ["Tracy Barlow", "Liz McDonald", "Leanne Battersby"], "Easy", "2014", "Crime"],
    ["Who was Rob Donovan planning to marry when the truth about Tina's death emerged?", "Tracy Barlow", ["Carla Connor", "Kylie Platt", "Eva Price"], "Easy", "2014", "Weddings"],
    ["Who helped the police find fugitive Rob Donovan in November 2014?", "Tracy Barlow", ["Maria Connor", "Fiz Stape", "Sally Webster"], "Medium", "2014", "Crime"],
    ["Which city did Peter Barlow leave Weatherfield for after his release from prison in 2014?", "Portsmouth", ["Bristol", "Newcastle", "Liverpool"], "Medium", "2014", "Departures"],
    ["Which character lost her unborn baby during the aftermath of Tina's death in 2014?", "Carla Connor", ["Kylie Platt", "Leanne Battersby", "Michelle Connor"], "Medium", "2014", "Families"],
    ["Which newcomer tried to burgle Gail McIntyre's house in March 2014?", "Michael Rodwell", ["Andy Carver", "Callum Logan", "Tony Stewart"], "Easy", "2014", "Arrivals"],
    ["Which entertainer and actor joined Coronation Street as Michael Rodwell in 2014?", "Les Dennis", ["Timothy West", "John Thomson", "Shane Richie"], "Easy", "2014", "Actors"],
    ["What was the name of Michael Rodwell's estranged son whom he tried to find in 2014?", "Gavin", ["Jason", "Jamie", "Gary"], "Medium", "2014", "Families"],
    ["Who pretended to be Michael Rodwell's son Gavin towards the end of 2014?", "Andy Carver", ["Luke Britton", "Todd Grimshaw", "Ryan Connor"], "Medium", "2014", "Storylines"],
    ["Which resident received a diagnosis of depression in November 2014?", "Steve McDonald", ["Kevin Webster", "Nick Tilsley", "Roy Cropper"], "Easy", "2014", "Storylines"],
    ["Who was Steve McDonald's imprisoned father, seen during his 2014 struggles?", "Jim McDonald", ["Barry Connor", "Terry Duckworth", "Bill Webster"], "Easy", "2014", "Families"],
    ["Which character supplied Peter Barlow with alcohol while they were in prison in 2014?", "Jim McDonald", ["Rob Donovan", "Frank Foster", "Tony Gordon"], "Medium", "2014", "Storylines"],
    ["Which former boyfriend supplied Kylie Platt with speed in 2014?", "Callum Logan", ["David Platt", "Nick Tilsley", "Graeme Proctor"], "Easy", "2014", "Storylines"],
    ["Which of Kylie's children was also Callum Logan's biological son?", "Max Turner", ["Lily Platt", "Jack Webster", "Simon Barlow"], "Easy", "2014", "Families"],
    ["Which woman was caught by Gail McIntyre's son David taking drugs in December 2014?", "Kylie Platt", ["Sarah Platt", "Tina McIntyre", "Beth Tinker"], "Easy", "2014", "Storylines"],
    ["Who was Maria Connor's boyfriend before he began an affair with Todd Grimshaw in 2014?", "Marcus Dent", ["Jason Grimshaw", "Luke Britton", "Ryan Connor"], "Medium", "2014", "Relationships"],
    ["Which Grimshaw son began a secret romance with Marcus Dent in 2014?", "Todd Grimshaw", ["Jason Grimshaw", "Billy Grimshaw", "Paul Kershaw"], "Easy", "2014", "Relationships"],
    ["Which new girlfriend of Sophie Webster was introduced in 2014?", "Maddie Heath", ["Sian Powers", "Jenna Kamara", "Kate Connor"], "Easy", "2014", "Arrivals"],
    ["What was the name of Maddie Heath's younger brother who was in foster care in 2014?", "Ben", ["Jack", "Max", "Craig"], "Medium", "2014", "Families"],
    ["Which actress played Maddie Heath in Coronation Street?", "Amy James-Kelly", ["Brooke Vincent", "Faye Brookes", "Sacha Parkinson"], "Medium", "2014", "Actors"],
    ["Which businessman used CCTV footage of Gary Windass attacking him to blackmail Gary and Owen in 2014?", "Pat Phelan", ["Rob Donovan", "Tony Stewart", "Callum Logan"], "Easy", "2014", "Crime"],
    ["Which builder lost a large investment after doing business with Pat Phelan in 2014?", "Owen Armstrong", ["Jason Grimshaw", "Bill Webster", "Charlie Stubbs"], "Easy", "2014", "Businesses"],
    ["Who was coerced by Pat Phelan into sleeping with him to free Gary and Owen from his blackmail?", "Anna Windass", ["Sally Webster", "Eileen Grimshaw", "Liz McDonald"], "Medium", "2014", "Crime"],
    ["What was the name of Pat Phelan's wife during his 2014 feud with the Windass family?", "Valerie", ["Vera", "Vanessa", "Victoria"], "Medium", "2014", "Families"],
    ["Which character was Kal Nazir's daughter, introduced in 2014?", "Alya Nazir", ["Yasmeen Nazir", "Zeedan Nazir", "Jenna Kamara"], "Easy", "2014", "Arrivals"],
    ["Which character introduced in 2014 was Kal Nazir's father?", "Sharif Nazir", ["Zeedan Nazir", "Dev Alahan", "Ranjiv Alahan"], "Medium", "2014", "Families"],
    ["Which character introduced in 2014 was Kal Nazir's mother?", "Yasmeen Nazir", ["Alya Nazir", "Sunita Alahan", "Nazima Nazir"], "Easy", "2014", "Families"],
    ["Who was Alya Nazir's brother, introduced in September 2014?", "Zeedan Nazir", ["Sharif Nazir", "Kal Nazir", "Ryan Connor"], "Easy", "2014", "Families"],
    ["Which woman was in a relationship with Kal Nazir during 2014?", "Leanne Battersby", ["Carla Connor", "Michelle Connor", "Eva Price"], "Easy", "2014", "Relationships"],
    ["What was the name of the community centre opened by Yasmeen Nazir in 2014?", "Jamila House", ["Victoria Court", "Red Rec Hall", "Rosamund Centre"], "Hard", "2014", "Businesses"],
    ["Which Windass man secretly dated Alya Nazir in 2014?", "Gary Windass", ["Eddie Windass", "Tim Metcalfe", "Owen Armstrong"], "Easy", "2014", "Relationships"],
    ["Which vicar did Sean Tully meet at a nightclub in December 2014?", "Billy Mayhew", ["Paul Kershaw", "Marcus Dent", "Brian Packham"], "Medium", "2014", "Arrivals"],
    ["Which Barlow family member went to stay with Bev Unwin in October 2014?", "Deirdre Barlow", ["Susan Barlow", "Leanne Barlow", "Tracy Barlow"], "Easy", "2014", "Departures"],
    ["Which Street veteran returned from Canada in August 2014?", "Ken Barlow", ["Dennis Tanner", "Kevin Webster", "Norris Cole"], "Easy", "2014", "Returns"],
    ["Which woman left Weatherfield for New York in 2014?", "Stella Price", ["Gloria Price", "Eva Price", "Liz McDonald"], "Medium", "2014", "Departures"],
    ["Which long-running mechanic returned in March 2014 after spending time in Germany caring for his father?", "Kevin Webster", ["Tyrone Dobbs", "Tommy Duckworth", "Luke Britton"], "Easy", "2014", "Returns"],

    // =====================================================
    // YEAR 2015
    // =====================================================

    ["Which couple married in January 2015 after years together?", "Kirk Sutherland and Beth Tinker", ["Tyrone Dobbs and Fiz Stape", "Roy Cropper and Cathy Matthews", "Jason Grimshaw and Eva Price"], "Easy", "2015", "Weddings"],
    ["Who was driving the Underworld staff minibus when it crashed in January 2015?", "Steve McDonald", ["Lloyd Mullaney", "Luke Britton", "Tyrone Dobbs"], "Easy", "2015", "Storylines"],
    ["Which young factory worker was seriously injured and temporarily paralysed in the 2015 minibus crash?", "Sinead Tinker", ["Beth Tinker", "Julie Carp", "Sally Webster"], "Medium", "2015", "Storylines"],
    ["Who finally told Michelle Connor about his depression after the minibus crash in 2015?", "Steve McDonald", ["Lloyd Mullaney", "Peter Barlow", "Nick Tilsley"], "Easy", "2015", "Storylines"],
    ["Whom did Michelle Connor marry in May 2015?", "Steve McDonald", ["Lloyd Mullaney", "Robert Preston", "Nick Tilsley"], "Easy", "2015", "Weddings"],
    ["Which woman began an affair with Tony Stewart in February 2015?", "Tracy Barlow", ["Michelle Connor", "Eva Price", "Carla Connor"], "Easy", "2015", "Relationships"],
    ["Who was Tony Stewart's girlfriend before the truth about his affair with Tracy emerged?", "Liz McDonald", ["Eileen Grimshaw", "Stella Price", "Sally Webster"], "Easy", "2015", "Relationships"],
    ["Which Grimshaw son was Tony Stewart's son?", "Jason Grimshaw", ["Todd Grimshaw", "Ryan Connor", "Gary Windass"], "Medium", "2015", "Families"],
    ["Which character returned in February 2015 and began dating Kevin Webster?", "Jenny Bradley", ["Natalie Barnes", "Sally Webster", "Linda Hancock"], "Easy", "2015", "Returns"],
    ["How did Kevin Webster and Jenny Bradley reconnect in 2015?", "Through a dating website", ["At a school reunion", "At a hospital appointment", "At a football match"], "Medium", "2015", "Relationships"],
    ["Which young boy did Jenny Bradley try to abduct from Kevin Webster in 2015?", "Jack Webster", ["Max Turner", "Simon Barlow", "Joseph Brown"], "Easy", "2015", "Crime"],
    ["To which city did Jenny Bradley take Jack Webster during the attempted abduction in 2015?", "Hull", ["Leeds", "York", "Sheffield"], "Medium", "2015", "Crime"],
    ["Which actress returned to play Jenny Bradley in 2015?", "Sally Ann Matthews", ["Sally Dynevor", "Helen Worth", "Jane Danson"], "Medium", "2015", "Actors"],
    ["What was the name of the daughter Faye Windass gave birth to in April 2015?", "Miley", ["Lily", "Ruby", "Hope"], "Easy", "2015", "Families"],
    ["Who was the father of Faye Windass's baby Miley in 2015?", "Jackson Hodge", ["Craig Tinker", "Simon Barlow", "Chesney Brown"], "Medium", "2015", "Families"],
    ["How old was Faye Windass when she gave birth in 2015?", "13", ["15", "16", "17"], "Medium", "2015", "Families"],
    ["Which teenage boy was initially suspected of being the father of Faye Windass's baby?", "Craig Tinker", ["Simon Barlow", "Joseph Brown", "Ryan Connor"], "Medium", "2015", "Families"],
    ["Who took the main day-to-day responsibility for baby Miley when Faye struggled with motherhood in 2015?", "Anna Windass", ["Sally Webster", "Gail Rodwell", "Audrey Roberts"], "Easy", "2015", "Families"],
    ["Who was Linda Hancock, a character who returned in 2015?", "The mother of Izzy and Katy Armstrong", ["The mother of Eva and Leanne Price", "The mother of Sophie and Rosie Webster", "The mother of David and Sarah Platt"], "Medium", "2015", "Families"],
    ["Which man was pretending to be Michael Rodwell's son Gavin in 2015?", "Andy Carver", ["Callum Logan", "Luke Britton", "Aidan Connor"], "Easy", "2015", "Storylines"],
    ["Which young woman knew Andy Carver was impersonating Gavin Rodwell in early 2015?", "Steph Britton", ["Sophie Webster", "Alya Nazir", "Maria Connor"], "Medium", "2015", "Storylines"],
    ["Whom did Gail McIntyre marry in April 2015?", "Michael Rodwell", ["Lewis Archer", "Tony Stewart", "Nick Tilsley"], "Easy", "2015", "Weddings"],
    ["Who told Ken Barlow that Deirdre had died in July 2015?", "Bev Unwin", ["Liz McDonald", "Emily Bishop", "Audrey Roberts"], "Easy", "2015", "Departures"],
    ["Which actress, who died in January 2015, had played Deirdre Barlow for decades?", "Anne Kirkbride", ["Jean Alexander", "Pat Phoenix", "Doris Speed"], "Easy", "2015", "Actors"],
    ["What was the reported cause of Deirdre Barlow's death in the 2015 storyline?", "An aneurysm", ["A heart attack", "A stroke", "A fall"], "Medium", "2015", "Departures"],
    ["Who was Deirdre Barlow's husband when her death was announced in 2015?", "Ken Barlow", ["Mike Baldwin", "Jon Lindsay", "Ray Langton"], "Easy", "2015", "Families"],
    ["Which character was responsible for accidentally starting the Victoria Court fire in May 2015?", "Tracy Barlow", ["Carla Connor", "Liz McDonald", "Leanne Battersby"], "Easy", "2015", "Crime"],
    ["Which block of flats was the scene of the devastating May 2015 fire?", "Victoria Court", ["Granada House", "Rosamund Flats", "Millennium Court"], "Easy", "2015", "Storylines"],
    ["Which member of the Nazir family was killed in the Victoria Court fire in 2015?", "Kal Nazir", ["Sharif Nazir", "Zeedan Nazir", "Yasmeen Nazir"], "Easy", "2015", "Departures"],
    ["Which child was Kal Nazir trying to rescue from the burning flat in 2015?", "Amy Barlow", ["Faye Windass", "Hope Stape", "Lily Platt"], "Easy", "2015", "Storylines"],
    ["Which young woman was killed following an explosion in the builders' yard during the Victoria Court fire?", "Maddie Heath", ["Sophie Webster", "Sinead Tinker", "Alya Nazir"], "Easy", "2015", "Departures"],
    ["Who was Maddie Heath's girlfriend when she died in 2015?", "Sophie Webster", ["Sian Powers", "Jenna Kamara", "Kate Connor"], "Easy", "2015", "Relationships"],
    ["Who was unfairly blamed by some neighbours for the Victoria Court fire?", "Carla Connor", ["Beth Tinker", "Fiz Stape", "Maria Connor"], "Medium", "2015", "Storylines"],
    ["Which man was Leanne Battersby engaged to when he died rescuing Amy in 2015?", "Kal Nazir", ["Nick Tilsley", "Peter Barlow", "Robert Preston"], "Easy", "2015", "Relationships"],
    ["Which criminal was killed by Kylie Platt during the 2015 live episode?", "Callum Logan", ["Rob Donovan", "Tony Stewart", "Pat Phelan"], "Easy", "2015", "Crime"],
    ["Whom was Callum Logan attacking when Kylie struck him in September 2015?", "Sarah Platt", ["Gail Rodwell", "Bethany Platt", "Audrey Roberts"], "Easy", "2015", "Crime"],
    ["Where did David and Kylie conceal Callum Logan's body in 2015?", "Beneath the garage floor at Number 8", ["In the Underworld cellar", "Under the Rovers kitchen floor", "In the canal by Victoria Court"], "Medium", "2015", "Crime"],
    ["Which anniversary of ITV was Coronation Street's September 2015 live episode celebrating?", "The sixtieth", ["The fiftieth", "The fortieth", "The seventieth"], "Medium", "2015", "TV History"],
    ["Which actor played gangster Callum Logan in 2015?", "Sean Ward", ["Marc Baylis", "Andrew Lancel", "Connor McIntyre"], "Medium", "2015", "Actors"],
    ["Which Platt family member found out she was pregnant with Callum Logan's child in December 2015?", "Sarah Platt", ["Kylie Platt", "Gail Rodwell", "Bethany Platt"], "Easy", "2015", "Families"],
    ["Which former wife of Peter Barlow was physically abused by his son Simon in 2015?", "Leanne Battersby", ["Carla Connor", "Tracy Barlow", "Michelle Connor"], "Medium", "2015", "Storylines"],
    ["Which Street Cars driver left Weatherfield with Andrea Beckett for Jersey in 2015?", "Lloyd Mullaney", ["Steve McDonald", "Tim Metcalfe", "Andy Carver"], "Medium", "2015", "Departures"],
    ["Which newcomer bought a share of Underworld in August 2015?", "Aidan Connor", ["Johnny Connor", "Luke Britton", "Robert Preston"], "Easy", "2015", "Businesses"],
    ["Which former X Factor winner joined Coronation Street as Aidan Connor in 2015?", "Shayne Ward", ["Matt Cardle", "Joe McElderry", "Steve Brookstein"], "Easy", "2015", "Actors"],
    ["What was the name of Aidan Connor's father, introduced in October 2015?", "Johnny Connor", ["Barry Connor", "Paul Connor", "Liam Connor"], "Easy", "2015", "Families"],
    ["Which sister of Aidan Connor arrived alongside their father in October 2015?", "Kate Connor", ["Carla Connor", "Maria Connor", "Michelle Connor"], "Easy", "2015", "Arrivals"],
    ["Which Corrie resident was revealed to be Johnny Connor's biological daughter in December 2015?", "Carla Connor", ["Michelle Connor", "Maria Connor", "Kate Connor"], "Easy", "2015", "Families"],
    ["Which woman began forming a friendship with widower Roy Cropper in 2015?", "Cathy Matthews", ["Emily Bishop", "Mary Taylor", "Audrey Roberts"], "Easy", "2015", "Relationships"],
    ["Which character was told in 2015 that her daughter Hope had neuroblastoma?", "Fiz Stape", ["Kylie Platt", "Tracy Barlow", "Maria Connor"], "Medium", "2015", "Families"],
    ["Who proposed to Fiz Stape on Christmas Day 2015?", "Tyrone Dobbs", ["Chesney Brown", "Roy Cropper", "Nick Tilsley"], "Easy", "2015", "Relationships"],
    ["Which chef returned to Weatherfield in 2015 and began a relationship with Tracy Barlow?", "Robert Preston", ["Nick Tilsley", "Ciaran McCarthy", "Kal Nazir"], "Easy", "2015", "Returns"]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(1801 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Coronation Street', '2010s', year, topic],
        dailyEligible: true
    };
});

// =====================================================
// VALIDATION
// =====================================================

if (
    questions.length !== 100 ||
    questions[0].id !== 'tv_1801' ||
    questions[99].id !== 'tv_1900' ||
    questions.filter(q => q.tags.includes('2014')).length !== 49 ||
    questions.filter(q => q.tags.includes('2015')).length !== 51
) {
    throw new Error('Pack 178: incorrect count, years or ID range');
}

const seenIds = new Set();
const seenQuestions = new Set();

for (const q of questions) {
    const key = q.question
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    if (
        seenIds.has(q.id) ||
        seenQuestions.has(key) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        q.category !== 'Television' ||
        !q.dailyEligible
    ) {
        throw new Error('Pack 178: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
