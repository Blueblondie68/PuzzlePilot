// quiz_pack169.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 1996 and 1997
// 100 questions: tv_0901 to tv_1000
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [

    // =====================================================
    // 1996 - CHANGING RELATIONSHIPS AND NEW FACES
    // =====================================================

    ["Which couple announced their engagement in January 1996?", "Ken Barlow and Denise Osbourne", ["Curly Watts and Raquel Wolstenhulme", "Des Barnes and Claire Palmer", "Steve McDonald and Vicky Arden"], "Medium", "1996", "Relationships"],
    ["Which man did Denise Osbourne have an affair with while involved with Ken Barlow in 1996?", "Brian Dunkley", ["Mike Baldwin", "Des Barnes", "Jim McDonald"], "Medium", "1996", "Relationships"],
    ["What was Brian Dunkley's relationship to Denise Osbourne's family?", "He was her brother-in-law", ["He was her uncle", "He was her cousin", "He was her stepfather"], "Medium", "1996", "Families"],
    ["Whose first birthday did Ken Barlow and Denise Osbourne celebrate in January 1996?", "Daniel Osbourne's", ["David Platt's", "Rosie Webster's", "Brad Armstrong's"], "Medium", "1996", "Families"],
    ["Which childminder did Ken Barlow employ to help care for Daniel in February 1996?", "Kelly Thomson", ["Fiona Middleton", "Joyce Smedley", "Claire Palmer"], "Medium", "1996", "Characters"],
    ["Which actress portrayed Daniel Osbourne's childminder Kelly Thomson?", "Sarah Moffett", ["Tina Hobley", "Angela Griffin", "Anita Carey"], "Hard", "1996", "Actors"],
    ["Which young butcher's assistant dated childminder Kelly Thomson in 1996?", "Ashley Peacock", ["Nick Tilsley", "Andy McDonald", "Chris Collins"], "Medium", "1996", "Relationships"],
    ["To which part of Britain did Denise Osbourne move with Daniel and Brian Dunkley in 1996?", "Scotland", ["Wales", "Cornwall", "Northern Ireland"], "Medium", "1996", "Departures"],
    ["Which character took Daniel Osbourne away from Ken Barlow's home in November 1996?", "Denise Osbourne", ["Deirdre Rachid", "Alma Baldwin", "Audrey Roberts"], "Medium", "1996", "Families"],
    ["Which son of Audrey Roberts visited Weatherfield in January 1996?", "Stephen Reid", ["Nick Tilsley", "David Platt", "Peter Barlow"], "Easy", "1996", "Arrivals"],
    ["Which actor originally played Audrey Roberts' son Stephen Reid in 1996?", "Todd Boyce", ["Adam Rickitt", "Sean Wilson", "Matthew Marsden"], "Medium", "1996", "Actors"],
    ["What was the name of the company Stephen Reid represented on his 1996 visit?", "KBec", ["Underworld", "Firman's Freezers", "Baldwin's Casuals"], "Hard", "1996", "Businesses"],
    ["Which Weatherfield businessman discussed a possible clothing deal with Stephen Reid in 1996?", "Mike Baldwin", ["Reg Holdsworth", "Jack Duckworth", "Ken Barlow"], "Medium", "1996", "Businesses"],
    ["Which married woman became infatuated with Stephen Reid during his first visit in 1996?", "Alma Baldwin", ["Gail Platt", "Sally Webster", "Vera Duckworth"], "Medium", "1996", "Relationships"],
    ["To which country did Stephen Reid return after visiting Audrey in February 1996?", "Canada", ["Australia", "Italy", "France"], "Easy", "1996", "Travel"],
    ["What name did Fiona Middleton give the hair salon she took over in March 1996?", "Hair by Fiona Middleton", ["Audrey's Salon", "Hair Today", "The Cutting Room"], "Medium", "1996", "Businesses"],
    ["From which salon owner did Fiona Middleton take over the business in 1996?", "Denise Osbourne", ["Alma Baldwin", "Audrey Roberts", "Maxine Heavey"], "Medium", "1996", "Businesses"],
    ["Which brother lent Fiona Middleton money to establish her salon in 1996?", "Lee Middleton", ["Clive Middleton", "Steve McDonald", "Andy McDonald"], "Medium", "1996", "Families"],
    ["How much did Fiona Middleton need to pay for the salon lease in 1996?", "£4,500", ["£1,500", "£7,500", "£10,500"], "Hard", "1996", "Money"],
    ["Which actress portrayed the young hairdresser Fiona Middleton?", "Angela Griffin", ["Tracy Shaw", "Denise Black", "Tina Hobley"], "Easy", "1996", "Actors"],
    ["Which hairdresser worked alongside Fiona Middleton at the salon in 1996?", "Maxine Heavey", ["Raquel Wolstenhulme", "Maureen Holdsworth", "Joyce Smedley"], "Medium", "1996", "Occupations"],
    ["Which woman became a cleaner at the Rovers Return in February 1996?", "Joyce Smedley", ["Maud Grimes", "Claire Palmer", "Tricia Armstrong"], "Medium", "1996", "Rovers Return"],
    ["Which resident was the daughter of new Rovers cleaner Joyce Smedley?", "Judy Mallett", ["Sally Webster", "Fiona Middleton", "Liz McDonald"], "Medium", "1996", "Families"],
    ["Which actress played Joyce Smedley when she appeared in 1996?", "Anita Carey", ["Elizabeth Bradley", "Betty Driver", "Thelma Barlow"], "Hard", "1996", "Actors"],
    ["Which Army colleague of Jim McDonald had an affair with Liz in 1996?", "Johnny Johnson", ["Fraser Henderson", "Alan McKenna", "Chris Collins"], "Medium", "1996", "Relationships"],
    ["Which prison held Jim McDonald for breaking bail conditions in March 1996?", "Strangeways", ["Pentonville", "Holloway", "Armley"], "Medium", "1996", "Storylines"],
    ["Which husband did Liz McDonald decide to divorce after their marriage broke down in 1996?", "Jim McDonald", ["Steve McDonald", "Des Barnes", "Alec Gilroy"], "Easy", "1996", "Relationships"],
    ["Which wages clerk ran away with Reg Holdsworth in April 1996?", "Yvonne Bannister", ["Anne Malone", "Maureen Naylor", "Kimberley Taylor"], "Medium", "1996", "Relationships"],
    ["Which woman discovered in April 1996 that Reg Holdsworth had left her?", "Maureen Holdsworth", ["Betty Williams", "Rita Sullivan", "Audrey Roberts"], "Easy", "1996", "Storylines"],
    ["Which garage did Don Brennan and Josie Clarke buy from Mike Baldwin in April 1996?", "MVB Motors", ["Webster's Autos", "Street Cars", "Tilsley's Garage"], "Medium", "1996", "Businesses"],
    ["What was the name of the racehorse bought by several Street residents in April 1996?", "Betty's Hot Shot", ["Vera's Pride", "Rovers Return", "Weatherfield Wonder"], "Medium", "1996", "Animals"],
    ["Which McDonald was sentenced to two years in prison in May 1996?", "Steve McDonald", ["Andy McDonald", "Jim McDonald", "Liz McDonald"], "Medium", "1996", "Storylines"],
    ["Which young woman separated from Steve McDonald after becoming embroiled in his scams in 1996?", "Vicky McDonald", ["Fiona Middleton", "Raquel Watts", "Tricia Armstrong"], "Medium", "1996", "Relationships"],
    ["Which woman began a relationship with Des Barnes in May 1996?", "Claire Palmer", ["Samantha Failsworth", "Natalie Horrocks", "Angie Freeman"], "Medium", "1996", "Relationships"],
    ["What was the first name of Claire Palmer's daughter who appeared in 1996?", "Becky", ["Shannon", "Rosie", "Leanne"], "Medium", "1996", "Families"],
    ["Which pension did Claire Palmer continue claiming while living with Des Barnes in 1996?", "Her late husband's RAF pension", ["Her father's Army pension", "A former employer's pension", "Her brother's Navy pension"], "Hard", "1996", "Money"],
    ["Which garage employee lost his job when Don Brennan's motor business failed in July 1996?", "Kevin Webster", ["Martin Platt", "Curly Watts", "Derek Wilton"], "Medium", "1996", "Occupations"],
    ["Which Rovers Return barmaid first appeared in July 1996?", "Samantha Failsworth", ["Tanya Pooley", "Bet Gilroy", "Raquel Wolstenhulme"], "Medium", "1996", "Arrivals"],
    ["Which actress played Rovers barmaid Samantha Failsworth?", "Tina Hobley", ["Sarah Lancashire", "Tracy Brabin", "Angela Griffin"], "Medium", "1996", "Actors"],
    ["Which satellite channel began showing repeats branded Classic Coronation Street in 1996?", "Granada Plus", ["ITV2", "UK Gold", "Sky One"], "Medium", "1996", "TV History"],
    ["Which teenage Platt remained in Canada to study after the family's holiday in 1996?", "Nick Tilsley", ["David Platt", "Sarah-Louise Platt", "Rosie Webster"], "Medium", "1996", "Families"],
    ["Which shopkeeper celebrated his seventieth birthday in October 1996?", "Alf Roberts", ["Fred Elliott", "Percy Sugden", "Mike Baldwin"], "Medium", "1996", "Characters"],
    ["Why was Tricia Armstrong sent to prison briefly in January 1996?", "Not paying for a TV licence", ["Shoplifting", "Unpaid parking fines", "Tax evasion"], "Medium", "1996", "Storylines"],
    ["Which detective first caught Fiona Middleton's attention in November 1996?", "Alan McKenna", ["Chris Collins", "Fraser Henderson", "Jon Lindsay"], "Medium", "1996", "Relationships"],
    ["Whom did Tracy Barlow marry in November 1996?", "Robert Preston", ["Steve McDonald", "Nick Tilsley", "Andy McDonald"], "Easy", "1996", "Weddings"],
    ["What happened to Robert Preston during a stag-night prank before his 1996 wedding?", "He was locked in a shipping container", ["He was stranded on a boat", "He was arrested at an airport", "He lost his passport abroad"], "Medium", "1996", "Weddings"],
    ["Which former Coronation Street resident returned briefly for Tracy Barlow's wedding in 1996?", "Blanche Hunt", ["Hilda Ogden", "Annie Walker", "Ena Sharples"], "Medium", "1996", "Returns"],
    ["Which city did Raquel Watts leave Weatherfield for in November 1996?", "Kuala Lumpur", ["Paris", "Toronto", "Rome"], "Easy", "1996", "Departures"],
    ["What sort of job took Raquel Watts abroad when she left Curly in 1996?", "Aromatherapy", ["Journalism", "Hotel management", "Nursing"], "Medium", "1996", "Occupations"],
    ["Which former wife of Reg Holdsworth spent Christmas 1996 with Curly Watts?", "Maureen Holdsworth", ["Vera Duckworth", "Rita Sullivan", "Betty Williams"], "Medium", "1996", "Relationships"],

    // =====================================================
    // 1997 - FAMILIES, FACTORIES AND FAREWELLS
    // =====================================================

    ["Which future Battersby family member made her first appearance in January 1997?", "Janice Battersby", ["Toyah Battersby", "Leanne Battersby", "Zoe Tattersall"], "Medium", "1997", "Arrivals"],
    ["Which son did Tricia Armstrong give birth to at the Rovers Return in February 1997?", "Brad", ["Tommy", "Jamie", "Jason"], "Medium", "1997", "Families"],
    ["Which famous Hollywood actor inspired the name of Tricia Armstrong's baby Brad?", "Brad Pitt", ["Bradley Cooper", "Brad Dourif", "Brad Garrett"], "Medium", "1997", "Popular Culture"],
    ["Which Rovers employee helped deliver Tricia Armstrong's baby in February 1997?", "Betty Williams", ["Samantha Failsworth", "Vera Duckworth", "Liz McDonald"], "Medium", "1997", "Rovers Return"],
    ["Who was the father of Tricia Armstrong's son Brad?", "Terry Duckworth", ["Des Barnes", "Steve McDonald", "Curly Watts"], "Easy", "1997", "Families"],
    ["Which woman was killed by a car while walking her dog in February 1997?", "Joyce Smedley", ["Mavis Wilton", "Maud Grimes", "Rita Sullivan"], "Medium", "1997", "Storylines"],
    ["Which garage worker was driving the car that killed Joyce Smedley?", "Tony Horrocks", ["Kevin Webster", "Chris Collins", "Bill Webster"], "Medium", "1997", "Storylines"],
    ["What was the name of Joyce Smedley's dog when she was fatally injured?", "Scamper", ["Rover", "Lucky", "Boomer"], "Hard", "1997", "Animals"],
    ["Which woman arrived in February 1997 as Tony Horrocks' mother?", "Natalie Horrocks", ["Claire Palmer", "Maureen Elliott", "Anne Malone"], "Medium", "1997", "Arrivals"],
    ["Which actress began playing Natalie Horrocks in 1997?", "Denise Welch", ["Tina Hobley", "Tracy Shaw", "Sally Whittaker"], "Medium", "1997", "Actors"],
    ["Who bought Jim's Café in February 1997?", "Roy Cropper", ["Alf Roberts", "Reg Holdsworth", "Des Barnes"], "Easy", "1997", "Businesses"],
    ["What name did Roy Cropper give the café in May 1997?", "Roy's Rolls", ["Roy's Diner", "The Corner Café", "Weatherfield Bites"], "Easy", "1997", "Businesses"],
    ["How much did Roy Cropper pay for Jim's Café in 1997?", "£35,000", ["£15,000", "£25,000", "£45,000"], "Hard", "1997", "Money"],
    ["Which Firman's Freezers employee was dismissed for framing Samantha Failsworth for shoplifting in 1997?", "Anne Malone", ["Maureen Holdsworth", "Vera Duckworth", "Kimberley Taylor"], "Medium", "1997", "Storylines"],
    ["Which Manchester location was targeted in Fraser Henderson's failed robbery in March 1997?", "Manchester Airport", ["Weatherfield Town Hall", "Bettabuy supermarket", "The Rovers Return"], "Medium", "1997", "Crime"],
    ["Which gunman held members of the McDonald family hostage in March 1997?", "Gerry Turner", ["Fraser Henderson", "Jon Lindsay", "Don Brennan"], "Medium", "1997", "Crime"],
    ["Which new mechanic was hired by Kevin Webster in March 1997?", "Chris Collins", ["Mark Casey", "Brian Tilsley", "Martin Platt"], "Easy", "1997", "Occupations"],
    ["Which actor played garage mechanic Chris Collins?", "Matthew Marsden", ["Michael Le Vell", "Sean Wilson", "Adam Rickitt"], "Medium", "1997", "Actors"],
    ["Who set fire to Mike Baldwin's factory in March 1997?", "Don Brennan", ["Ashley Peacock", "Kevin Webster", "Jack Duckworth"], "Easy", "1997", "Storylines"],
    ["Which businessman was initially suspected of setting fire to his own factory in 1997?", "Mike Baldwin", ["Fred Elliott", "Roy Cropper", "Alec Gilroy"], "Medium", "1997", "Storylines"],
    ["Which innocent young man was falsely accused of the 1997 factory arson?", "Ashley Peacock", ["Chris Collins", "Andy McDonald", "Nick Tilsley"], "Medium", "1997", "Crime"],
    ["Which nightclub's security footage helped establish Ashley Peacock's innocence in 1997?", "The Warsaw", ["The Pink Flamingo", "The Tropicana", "The Old Bank Club"], "Hard", "1997", "Crime"],
    ["Which long-serving character died after a roadside heart attack in April 1997?", "Derek Wilton", ["Alec Gilroy", "Alf Roberts", "Percy Sugden"], "Easy", "1997", "Storylines"],
    ["Whose birthday party was Derek Wilton travelling home for when he died in 1997?", "Mavis Wilton's", ["Rita Sullivan's", "Emily Bishop's", "Maud Grimes'"], "Medium", "1997", "Storylines"],
    ["Which vehicle did Don Brennan drive into Weatherfield Canal in April 1997?", "His taxi", ["A bus", "A delivery van", "A motorbike"], "Medium", "1997", "Storylines"],
    ["Which woman was Don Brennan holding captive when he drove into the canal in 1997?", "Alma Baldwin", ["Gail Platt", "Rita Sullivan", "Sally Webster"], "Easy", "1997", "Storylines"],
    ["Where was Don Brennan sent after his mental breakdown in 1997?", "A psychiatric hospital", ["A prison abroad", "A rehabilitation centre in Canada", "A military hospital"], "Medium", "1997", "Storylines"],
    ["Which family moved into Number 5 Coronation Street in summer 1997?", "The Battersbys", ["The Malletts", "The McDonalds", "The Holdsworths"], "Easy", "1997", "Arrivals"],
    ["Which actor began playing Les Battersby in 1997?", "Bruce Jones", ["John Savident", "Bill Tarmey", "Philip Middlemiss"], "Medium", "1997", "Actors"],
    ["Which actress played Janice Battersby on her 1997 arrival?", "Vicky Entwistle", ["Gaynor Faye", "Jane Danson", "Denise Welch"], "Medium", "1997", "Actors"],
    ["Which actress began playing Leanne Battersby in 1997?", "Jane Danson", ["Georgia Taylor", "Tracy Brabin", "Sarah Lancashire"], "Medium", "1997", "Actors"],
    ["Which actress began playing Toyah Battersby in 1997?", "Georgia Taylor", ["Jane Danson", "Angela Griffin", "Tina Hobley"], "Medium", "1997", "Actors"],
    ["Which teenage runaway was introduced in May 1997 and later lived with the Malletts?", "Zoe Tattersall", ["Leanne Battersby", "Flick Khan", "Jenny Bradley"], "Medium", "1997", "Arrivals"],
    ["Which actress played Zoe Tattersall in 1997?", "Joanne Froggatt", ["Jane Danson", "Georgia Taylor", "Gaynor Faye"], "Medium", "1997", "Actors"],
    ["What name was given to Zoe Tattersall's daughter, born in August 1997?", "Shannon", ["Katie", "Becky", "Rosie"], "Medium", "1997", "Families"],
    ["Which couple considered paying Zoe Tattersall for her baby in 1997?", "Gary and Judy Mallett", ["Kevin and Sally Webster", "Jack and Vera Duckworth", "Jim and Liz McDonald"], "Medium", "1997", "Storylines"],
    ["How much money was discussed for Zoe Tattersall's baby in 1997?", "£2,000", ["£200", "£5,000", "£10,000"], "Hard", "1997", "Money"],
    ["Which woman had a secret affair with Kevin Webster in 1997?", "Natalie Horrocks", ["Samantha Failsworth", "Maureen Elliott", "Angie Freeman"], "Easy", "1997", "Relationships"],
    ["Which man became romantically involved with Sally Webster after her marriage troubles in 1997?", "Chris Collins", ["Tony Horrocks", "Ashley Peacock", "Andy McDonald"], "Medium", "1997", "Relationships"],
    ["Which 1997 newcomer pretended to be an airline pilot while courting Deirdre Rachid?", "Jon Lindsay", ["Alan McKenna", "Fraser Henderson", "Ritchie Fitzgerald"], "Easy", "1997", "Storylines"],
    ["What did Jon Lindsay actually sell at the airport in 1997?", "Ties", ["Sunglasses", "Books", "Perfume"], "Medium", "1997", "Occupations"],
    ["Which young Platt was recast with actor Adam Rickitt in 1997?", "Nick Tilsley", ["David Platt", "Martin Platt", "Sarah-Louise Platt"], "Medium", "1997", "Actors"],
    ["Which widow left Weatherfield to run a guest house in Cartmel in October 1997?", "Mavis Wilton", ["Emily Bishop", "Rita Sullivan", "Betty Williams"], "Easy", "1997", "Departures"],
    ["Which butcher married Maureen Holdsworth in September 1997?", "Fred Elliott", ["Ashley Peacock", "Alf Roberts", "Des Barnes"], "Easy", "1997", "Weddings"],
    ["Which car did Don Brennan drive into the viaduct in October 1997, causing his death?", "Alma Baldwin's car", ["Mike Baldwin's van", "His own taxi", "Kevin Webster's car"], "Medium", "1997", "Storylines"],
    ["Which former Rovers landlord bought a half-share in the pub from the Duckworths in 1997?", "Alec Gilroy", ["Billy Walker", "Fred Gee", "Jack Walker"], "Medium", "1997", "Rovers Return"],
    ["Which Coronation Street factory was established by Mike Baldwin and Angie Freeman in 1997?", "Underworld", ["Phoenix Casuals", "Baldwin's Casuals", "Gamma Garments"], "Easy", "1997", "Businesses"],
    ["Which man did Fiona Middleton plan to marry before the wedding collapsed in 1997?", "Alan McKenna", ["Steve McDonald", "Chris Collins", "Andy McDonald"], "Medium", "1997", "Relationships"],
    ["Which McDonald family member had a secret affair with Fiona Middleton in 1997?", "Jim McDonald", ["Ken Barlow", "Des Barnes", "Kevin Webster"], "Medium", "1997", "Relationships"],
    ["What discovery made Deirdre Rachid end her engagement to Jon Lindsay at the close of 1997?", "He was already married", ["He had moved abroad", "He was related to Mike Baldwin", "He had lost his job"], "Medium", "1997", "Relationships"]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(901 + index).padStart(4, '0'),
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

if (
    questions.length !== 100 ||
    questions[0].id !== 'tv_0901' ||
    questions[99].id !== 'tv_1000' ||
    questions.filter(q => q.tags.includes('1996')).length !== 50 ||
    questions.filter(q => q.tags.includes('1997')).length !== 50
) {
    throw new Error('Pack 169: incorrect count, years or ID range');
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
        throw new Error('Pack 169: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
