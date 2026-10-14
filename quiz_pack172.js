// quiz_pack172.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2002 and 2003
// 100 questions: tv_1201 to tv_1300
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [

    // =====================================================
    // YEAR 2002
    // =====================================================

    ["Which resident's New Year's Eve suicide attempt led to Dennis Stringer's death on 1 January 2002?", "Les Battersby", ["Dennis Stringer", "Vikram Desai", "Steve McDonald"], "Medium", "2002", "Storylines"],
    ["Who died on New Year's Day 2002 after a car crash while saving Les Battersby?", "Dennis Stringer", ["Mick Hopwood", "Duggie Ferguson", "Joe Carter"], "Medium", "2002", "Departures"],
    ["How did Dennis Stringer learn that Les Battersby was in danger on New Year's Eve 2001?", "He heard a message on the Street Cars radio", ["He received a letter", "He saw a television appeal", "He was telephoned by the police"], "Medium", "2002", "Storylines"],
    ["Which Battersby was in a relationship with Dennis Stringer before his death in 2002?", "Janice Battersby", ["Leanne Battersby", "Toyah Battersby", "Cilla Brown"], "Easy", "2002", "Relationships"],
    ["What was Archie Shuttleworth's profession when he arrived in Coronation Street in 2002?", "Undertaker", ["Publican", "Solicitor", "Teacher"], "Easy", "2002", "Occupations"],
    ["Which well-known comedian played Archie Shuttleworth on his 2002 debut?", "Roy Hudd", ["Roy Barraclough", "Johnny Briggs", "John Savident"], "Medium", "2002", "Actors"],
    ["Which sharp-tongued resident dated undertaker Archie Shuttleworth in early 2002?", "Blanche Hunt", ["Rita Sullivan", "Betty Williams", "Vera Duckworth"], "Medium", "2002", "Relationships"],
    ["What television picture format did Coronation Street adopt in January 2002?", "16:9 widescreen", ["4:3 standard definition", "2.35:1 letterbox", "5:4 square format"], "Medium", "2002", "TV History"],
    ["At which redevelopment site did Duggie Ferguson suffer his fatal fall in 2002?", "The Ridings", ["Victoria Court", "The Quays", "Weatherfield Mill"], "Medium", "2002", "Locations"],
    ["What caused Duggie Ferguson's fatal accident during a confrontation in 2002?", "A banister gave way", ["A lift cable snapped", "A ladder broke", "A roof collapsed"], "Medium", "2002", "Storylines"],
    ["Which businessman failed to summon help after Duggie Ferguson's fatal fall?", "Richard Hillman", ["Mike Baldwin", "Dev Alahan", "Fred Elliott"], "Easy", "2002", "Crime"],
    ["What was the first name of Richard Hillman's former wife whom he murdered in 2002?", "Patricia", ["Charlotte", "Rebecca", "Angela"], "Easy", "2002", "Crime"],
    ["Which tool did Richard Hillman use to kill his ex-wife Patricia in 2002?", "A spade", ["A crowbar", "A hammer", "A wrench"], "Medium", "2002", "Crime"],
    ["Where did Richard Hillman conceal Patricia's body in 2002?", "Beneath concrete at a building development", ["Inside a freezer at the factory", "Under the floor of the Rovers", "In the canal at Weatherfield"], "Medium", "2002", "Crime"],
    ["What was the name of Richard Hillman's property business in 2002?", "Kellett Holdings", ["Baldwin Holdings", "Weatherfield Estates", "Hillman and Sons"], "Hard", "2002", "Businesses"],
    ["How much did Patricia Hillman demand for her stake in Richard's business in 2002?", "£25,000", ["£5,000", "£10,000", "£50,000"], "Hard", "2002", "Money"],
    ["Whom did Gail Platt marry in July 2002?", "Richard Hillman", ["Martin Platt", "Archie Shuttleworth", "Duggie Ferguson"], "Easy", "2002", "Weddings"],
    ["At which venue did Gail Platt marry Richard Hillman in 2002?", "Aston Manor", ["The Rovers Return", "De Lisle House", "Weatherfield Town Hall"], "Hard", "2002", "Locations"],
    ["Where did Gail and Richard Hillman go on honeymoon after their 2002 wedding?", "Florida", ["France", "Spain", "Scotland"], "Medium", "2002", "Travel"],
    ["What illness did Richard Hillman try to convince Audrey Roberts she was developing in 2002?", "Alzheimer's disease", ["Parkinson's disease", "Multiple sclerosis", "Epilepsy"], "Easy", "2002", "Storylines"],
    ["What safety device did Richard Hillman tamper with before Audrey Roberts's house fire in 2002?", "The smoke alarm", ["The front-door lock", "The boiler thermostat", "The telephone"], "Medium", "2002", "Crime"],
    ["Who rescued Audrey Roberts when Richard Hillman set her house on fire in 2002?", "Steve McDonald", ["Ken Barlow", "Fred Elliott", "Roy Cropper"], "Medium", "2002", "Storylines"],
    ["Which undertaker supported Audrey Roberts as she became suspicious of Richard Hillman in 2002?", "Archie Shuttleworth", ["Duggie Ferguson", "Harry Flagg", "Joe Carter"], "Medium", "2002", "Relationships"],
    ["What name did Maxine and Ashley Peacock give the baby born in April 2002?", "Joshua", ["James", "Jordan", "Jason"], "Easy", "2002", "Families"],
    ["Which Coronation Street couple were raising baby Joshua Peacock in 2002?", "Ashley and Maxine Peacock", ["Kevin and Sally Webster", "Roy and Hayley Cropper", "Curly and Emma Watts"], "Easy", "2002", "Families"],
    ["Which doctor had a one-night stand with Maxine Peacock, casting doubt on Joshua's paternity?", "Matt Ramsden", ["Martin Platt", "Dr Wilson", "Dr Gaddas"], "Medium", "2002", "Families"],
    ["Which married couple left Coronation Street in 2002 after their marriage was strained by Maxine's pregnancy?", "Matt and Charlie Ramsden", ["Curly and Emma Watts", "Kevin and Alison Webster", "Steve and Karen McDonald"], "Medium", "2002", "Departures"],
    ["Which young factory worker staged a rooftop protest over her lingerie designs in 2002?", "Fiz Brown", ["Karen McDonald", "Hayley Cropper", "Janice Battersby"], "Medium", "2002", "Comedy"],
    ["What products had Fiz Brown designed when she accused Mike Baldwin of exploiting her ideas in 2002?", "Lingerie", ["Handbags", "Shoes", "Perfume"], "Medium", "2002", "Businesses"],
    ["Which Underworld boss paid Fiz Brown £500 for her designs in 2002?", "Mike Baldwin", ["Joe Carter", "Dev Alahan", "Danny Baldwin"], "Medium", "2002", "Businesses"],
    ["Which former married couple remarried each other in December 2002?", "Kevin and Sally Webster", ["Ken and Deirdre Barlow", "Steve and Karen McDonald", "Jack and Vera Duckworth"], "Easy", "2002", "Weddings"],
    ["Where did Kevin and Sally Webster remarry in December 2002?", "Weatherfield Register Office", ["All Saints Church", "Aston Manor", "The Rovers Return"], "Medium", "2002", "Weddings"],
    ["What kind of shop did Sally Webster run during 2002?", "A hardware shop", ["A florist", "A bakery", "A bookshop"], "Medium", "2002", "Businesses"],
    ["Which newcomer played by Keith Duffy arrived in Coronation Street in August 2002?", "Ciaran McCarthy", ["Joe Carter", "Harry Flagg", "Aidan Critchley"], "Easy", "2002", "Arrivals"],
    ["Which boyband was Keith Duffy a member of before playing Ciaran McCarthy?", "Boyzone", ["Westlife", "Take That", "Blue"], "Easy", "2002", "Actors"],
    ["Which Barlow was an old Royal Navy friend of Ciaran McCarthy?", "Peter Barlow", ["Ken Barlow", "Adam Barlow", "Daniel Osbourne"], "Medium", "2002", "Friendships"],
    ["Which former prisoner joined the factory storylines in 2002 and later worked with Mike Baldwin?", "Joe Carter", ["Mick Hopwood", "Harry Flagg", "Aidan Critchley"], "Medium", "2002", "Arrivals"],
    ["Which new cleaner was introduced in 2002 and worked at the Rovers Return?", "Harry Flagg", ["Archie Shuttleworth", "Patrick Tussel", "Ciaran McCarthy"], "Medium", "2002", "Occupations"],
    ["What kind of shop did newcomer Lucy Richards run when she met Peter Barlow in 2002?", "A florist", ["A pet shop", "A newsagent", "A sweet shop"], "Easy", "2002", "Businesses"],
    ["Which actress began playing florist Lucy Richards in September 2002?", "Katy Carmichael", ["Kate Ford", "Sally Lindsay", "Angela Lonsdale"], "Medium", "2002", "Actors"],
    ["Under what surname did the Harris family first arrive in Weatherfield in November 2002?", "Nelson", ["Hopwood", "Ramsden", "Sykes"], "Medium", "2002", "Arrivals"],
    ["Why were Tommy and Angela Harris living under false names when they arrived in 2002?", "They were in witness protection", ["They were avoiding unpaid taxes", "They were on a television programme", "They were hiding from an inheritance claim"], "Medium", "2002", "Storylines"],
    ["What were the first names of Tommy and Angela Harris's two teenage children?", "Katy and Craig", ["Sarah and David", "Rosie and Sophie", "Todd and Jason"], "Medium", "2002", "Families"],
    ["Which Coronation Street actor began playing Tracy Barlow on Christmas Day 2002?", "Kate Ford", ["Dawn Acton", "Tracy Shaw", "Katy Carmichael"], "Easy", "2002", "Actors"],
    ["Which temporary Rovers manager dismissed Jack Duckworth in 2002?", "Lillian Spencer", ["Bet Lynch", "Bev Unwin", "Natalie Barnes"], "Medium", "2002", "Rovers Return"],
    ["Which Coronation Street resident carried a medal during the 2002 Commonwealth Games in Manchester?", "Norris Cole", ["Ken Barlow", "Fred Elliott", "Jack Duckworth"], "Medium", "2002", "TV History"],

    // =====================================================
    // YEAR 2003
    // =====================================================

    ["Which Coronation Street resident was murdered by Richard Hillman in January 2003?", "Maxine Peacock", ["Emily Bishop", "Audrey Roberts", "Gail Platt"], "Easy", "2003", "Crime"],
    ["Which elderly resident survived Richard Hillman's crowbar attack in January 2003?", "Emily Bishop", ["Rita Sullivan", "Blanche Hunt", "Betty Williams"], "Easy", "2003", "Crime"],
    ["What weapon did Richard Hillman use in his attack at Emily Bishop's home in 2003?", "A crowbar", ["A shovel", "A knife", "A candlestick"], "Medium", "2003", "Crime"],
    ["Which troubled teenager was wrongly implicated in Maxine Peacock's murder in 2003?", "Aidan Critchley", ["Todd Grimshaw", "Craig Harris", "John Arnley"], "Medium", "2003", "Crime"],
    ["Who was Maxine Peacock's husband when she was killed in 2003?", "Ashley Peacock", ["Fred Elliott", "Matt Ramsden", "Duggie Ferguson"], "Easy", "2003", "Families"],
    ["Which family member had already suspected Richard Hillman before he confessed his crimes in 2003?", "Audrey Roberts", ["Blanche Hunt", "Betty Williams", "Vera Duckworth"], "Medium", "2003", "Crime"],
    ["To whom did Richard Hillman confess his crimes in February 2003?", "Gail Hillman", ["Deirdre Barlow", "Rita Sullivan", "Shelley Unwin"], "Easy", "2003", "Storylines"],
    ["At which development site did police discover Patricia Hillman's body in February 2003?", "The Ridings", ["Weatherfield Quays", "The Red Rec", "Freshco car park"], "Medium", "2003", "Crime"],
    ["Where did Richard Hillman drive his car with the Platt family inside in March 2003?", "Into a canal", ["Over a cliff", "Into a reservoir", "Through a railway barrier"], "Easy", "2003", "Storylines"],
    ["What happened to Richard Hillman after driving his car into the canal in 2003?", "He drowned", ["He was arrested at the scene", "He escaped to Spain", "He survived with a broken arm"], "Easy", "2003", "Departures"],
    ["Which two adults attended Richard Hillman's funeral in March 2003?", "Gail Hillman and Archie Shuttleworth", ["Audrey Roberts and Ken Barlow", "Mike Baldwin and Fred Elliott", "Martin Platt and Deirdre Barlow"], "Hard", "2003", "Funerals"],
    ["Which doctor was revealed by a DNA test to be Joshua Peacock's biological father in 2003?", "Matt Ramsden", ["Martin Platt", "Ashley Peacock", "Dr Wilson"], "Easy", "2003", "Families"],
    ["Which young nanny arrived in April 2003 to care for Ashley Peacock's son Joshua?", "Claire Casey", ["Cilla Brown", "Bev Unwin", "Lucy Richards"], "Easy", "2003", "Arrivals"],
    ["Which actress first portrayed Claire Casey in Coronation Street in 2003?", "Julia Haworth", ["Sally Lindsay", "Wendi Peters", "Sue Cleaver"], "Medium", "2003", "Actors"],
    ["Which florist did Peter Barlow marry in March 2003?", "Lucy Richards", ["Shelley Unwin", "Tracy Barlow", "Karen McDonald"], "Easy", "2003", "Weddings"],
    ["Whom did Peter Barlow also marry in July 2003 while still married to Lucy?", "Shelley Unwin", ["Maria Sutherland", "Geena Gregory", "Sunita Parekh"], "Easy", "2003", "Weddings"],
    ["What crime did Peter Barlow commit by marrying Lucy and Shelley in 2003?", "Bigamy", ["Perjury", "Fraud", "Blackmail"], "Easy", "2003", "Crime"],
    ["What was the name of Peter Barlow and Lucy Richards's son, born in July 2003?", "Simon", ["Adam", "Daniel", "Ben"], "Easy", "2003", "Families"],
    ["To which country did Lucy Richards move with baby Simon in November 2003?", "Australia", ["Canada", "France", "New Zealand"], "Medium", "2003", "Departures"],
    ["Which Barlow relative worked in Lucy Richards's flower shop and knew about Peter's double life?", "Tracy Barlow", ["Susan Barlow", "Deirdre Barlow", "Blanche Hunt"], "Medium", "2003", "Relationships"],
    ["What was the name of Shelley Unwin's mother, who arrived in March 2003?", "Bev Unwin", ["Eve Sykes", "Lillian Spencer", "Doreen Heavey"], "Easy", "2003", "Families"],
    ["Which actress began playing Bev Unwin in 2003?", "Susie Blake", ["Sue Nicholls", "Wendi Peters", "Vicky Entwistle"], "Medium", "2003", "Actors"],
    ["What was the name of Shelley Unwin's sister, whose death was reported in March 2003?", "Sharon", ["Sarah", "Susan", "Sheila"], "Medium", "2003", "Families"],
    ["Which Battersby left Weatherfield with Spider Nugent for London in February 2003?", "Toyah Battersby", ["Leanne Battersby", "Janice Battersby", "Les Battersby"], "Medium", "2003", "Departures"],
    ["Which Sutherland became pregnant after an affair with Toyah Battersby's boyfriend in 2003?", "Maria Sutherland", ["Kirk Sutherland", "Shelley Unwin", "Fiz Brown"], "Medium", "2003", "Relationships"],
    ["What was the name of Toyah Battersby's boyfriend involved with Maria Sutherland in early 2003?", "John Arnley", ["Joe Carter", "Aidan Critchley", "Nick Tilsley"], "Medium", "2003", "Relationships"],
    ["Which businessman bought a half share of Street Cars in January 2003?", "Dev Alahan", ["Mike Baldwin", "Fred Elliott", "Peter Barlow"], "Medium", "2003", "Businesses"],
    ["Which member of the Harris family was diagnosed with diabetes in March 2003?", "Katy Harris", ["Angela Harris", "Craig Harris", "Tommy Harris"], "Medium", "2003", "Storylines"],
    ["Which surname did the Harris family stop using when they left witness protection in 2003?", "Nelson", ["Ramsden", "Hopwood", "Critchley"], "Medium", "2003", "Families"],
    ["Which brothers held Katy Harris hostage in the family's home in April 2003?", "The Morgan brothers", ["The Grimshaw brothers", "The Barlow brothers", "The Sykes brothers"], "Medium", "2003", "Crime"],
    ["With which older Coronation Street character did teenager Katy Harris begin a relationship in 2003?", "Martin Platt", ["Kevin Webster", "Mike Baldwin", "Steve McDonald"], "Easy", "2003", "Relationships"],
    ["Which police officer and wife of Curly Watts took a job in Newcastle in 2003?", "Emma Watts", ["Colette Graham", "Janice Battersby", "Karen McDonald"], "Medium", "2003", "Departures"],
    ["Which long-serving resident left Weatherfield with wife Emma and son Ben in September 2003?", "Curly Watts", ["Ken Barlow", "Roy Cropper", "Fred Elliott"], "Easy", "2003", "Departures"],
    ["What university did Todd Grimshaw decide not to attend in 2003 so he could stay with Sarah Platt?", "Oxford University", ["Cambridge University", "Leeds University", "Manchester University"], "Medium", "2003", "Relationships"],
    ["Which man did Todd Grimshaw attempt to kiss in 2003 as he questioned his sexuality?", "Nick Tilsley", ["Jason Grimshaw", "Peter Barlow", "Ciaran McCarthy"], "Easy", "2003", "Storylines"],
    ["Which resident was drugged by Tracy Barlow on Peter and Shelley's wedding day in 2003?", "Roy Cropper", ["Fred Elliott", "Ken Barlow", "Dev Alahan"], "Easy", "2003", "Storylines"],
    ["Who was the biological father of Tracy Barlow's baby, conceived in 2003?", "Steve McDonald", ["Roy Cropper", "Peter Barlow", "Dev Alahan"], "Easy", "2003", "Families"],
    ["Which couple agreed to pay Tracy Barlow to raise her unborn baby in 2003?", "Roy and Hayley Cropper", ["Ken and Deirdre Barlow", "Kevin and Sally Webster", "Ashley and Claire Peacock"], "Easy", "2003", "Families"],
    ["How much did Tracy initially demand from the Croppers for her unborn baby in 2003?", "£20,000", ["£2,000", "£5,000", "£50,000"], "Hard", "2003", "Money"],
    ["Which unlikely couple married in November 2003 in connection with Tracy's pregnancy?", "Tracy Barlow and Roy Cropper", ["Tracy Barlow and Dev Alahan", "Roy Cropper and Deirdre Barlow", "Hayley Cropper and Peter Barlow"], "Medium", "2003", "Weddings"],
    ["Which solicitor began advising the Croppers over their arrangement with Tracy in September 2003?", "Maya Sharma", ["Charlotte Morris", "Sunita Parekh", "Rebecca Hopkins"], "Medium", "2003", "Arrivals"],
    ["Which actress played solicitor Maya Sharma on her 2003 arrival?", "Sasha Behar", ["Shobna Gulati", "Nina Wadia", "Indira Joshi"], "Medium", "2003", "Actors"],
    ["Which character played by Wendi Peters first appeared in October 2003?", "Cilla Brown", ["Bev Unwin", "Claire Casey", "Eileen Grimshaw"], "Easy", "2003", "Arrivals"],
    ["Which two Coronation Street characters were Cilla Brown's children when she arrived in 2003?", "Fiz and Chesney", ["Rosie and Sophie", "Todd and Jason", "Sarah and David"], "Easy", "2003", "Families"],
    ["Which actor began playing Chesney Brown in November 2003?", "Sam Aston", ["Andrew Whyment", "Jack P. Shepherd", "Bruno Langley"], "Medium", "2003", "Actors"],
    ["Which resident began dating newcomer Cilla Brown in 2003?", "Les Battersby", ["Ken Barlow", "Fred Elliott", "Roy Cropper"], "Easy", "2003", "Relationships"],
    ["Which builder played by Bill Ward was first seen in Coronation Street in November 2003?", "Charlie Stubbs", ["Tommy Harris", "Joe Carter", "Mick Hopwood"], "Easy", "2003", "Arrivals"],
    ["What did builder Charlie Stubbs use to move Mike Baldwin's Jaguar on his arrival in 2003?", "A bulldozer", ["A forklift truck", "A tow truck", "A tractor"], "Medium", "2003", "Comedy"],
    ["Why did police arrest Jack Duckworth in September 2003?", "He was growing cannabis in his greenhouse", ["He sold counterfeit tickets", "He stole a racing pigeon", "He drove without a licence"], "Medium", "2003", "Comedy"],
    ["What did Vera Duckworth discover she had actually won in a 2003 competition instead of a dream house?", "A greenhouse", ["A caravan", "A summerhouse", "A conservatory"], "Easy", "2003", "Comedy"],
    ["Which Harris teenager tampered with Martin Platt's car brakes in December 2003?", "Craig Harris", ["Katy Harris", "Todd Grimshaw", "David Platt"], "Medium", "2003", "Crime"],
    ["Which young factory worker punched Tracy Barlow in the Rovers over her treatment of Roy Cropper in 2003?", "Fiz Brown", ["Leanne Battersby", "Maria Sutherland", "Karen McDonald"], "Medium", "2003", "Storylines"],
    ["Which former Rovers landlady briefly returned in November 2003 and met Liz McDonald in Blackpool?", "Bet Lynch", ["Natalie Barnes", "Annie Walker", "Betty Williams"], "Medium", "2003", "Returns"],
    ["For which assault, despite his innocence, was Les Battersby sent to prison in May 2003?", "Assaulting Mick Hopwood", ["Assaulting Peter Barlow", "Assaulting Dev Alahan", "Assaulting Fred Elliott"], "Medium", "2003", "Crime"],

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(1201 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Coronation Street', '2000s', year, topic],
        dailyEligible: true
    };
});

// =====================================================
// VALIDATION
// =====================================================

if (
    questions.length !== 100 ||
    questions[0].id !== 'tv_1201' ||
    questions[99].id !== 'tv_1300' ||
    questions.filter(q => q.tags.includes('2002')).length !== 46 ||
    questions.filter(q => q.tags.includes('2003')).length !== 54
) {
    throw new Error('Pack 172: incorrect count, years or ID range');
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
        throw new Error('Pack 172: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
