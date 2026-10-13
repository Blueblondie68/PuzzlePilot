// quiz_pack170.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 1998 and 1999
// 100 questions: tv_1001 to tv_1100
// Leave quiz_bank.js unchanged until all new packs are checked and committed.

const facts = [

    // =====================================================
    // 1998 - THE WEATHERFIELD ONE AND NEW BEGINNINGS
    // =====================================================

    ["Which actress first played Hayley Patterson in Coronation Street in January 1998?", "Julie Hesmondhalgh", ["Angela Griffin", "Denise Welch", "Tracie Bennett"], "Medium", "1998", "Actors"],
    ["At which supermarket did Hayley Patterson work when she first appeared in 1998?", "Firman's Freezers", ["Bettabuy", "Freshco", "Costcutter"], "Medium", "1998", "Businesses"],
    ["Which café owner began a relationship with Hayley Patterson in 1998?", "Roy Cropper", ["Des Barnes", "Curly Watts", "Ashley Peacock"], "Easy", "1998", "Relationships"],
    ["Which new friend told Roy Cropper in February 1998 that she was transgender?", "Hayley Patterson", ["Samantha Failsworth", "Fiona Middleton", "Natalie Horrocks"], "Easy", "1998", "Storylines"],
    ["To which European city did Roy Cropper travel to find Hayley in June 1998?", "Amsterdam", ["Paris", "Brussels", "Berlin"], "Medium", "1998", "Travel"],
    ["Why was Hayley Patterson detained at the airport on her return to Britain in July 1998?", "Her passport still recorded her as male", ["Her passport had expired", "She had lost her airline ticket", "Her luggage contained banned goods"], "Medium", "1998", "Storylines"],
    ["Which clothing factory took Hayley Patterson on as a machinist in July 1998?", "Underworld", ["Baldwin's Casuals", "Gamma Garments", "Phoenix Casuals"], "Easy", "1998", "Businesses"],
    ["Which factory boss dismissed Hayley Patterson in August 1998 because she was transgender?", "Mike Baldwin", ["Fred Elliott", "Reg Holdsworth", "Ken Barlow"], "Medium", "1998", "Storylines"],
    ["What did Roy Cropper throw over Mike Baldwin during an argument about Hayley in October 1998?", "A pint of beer", ["A cup of tea", "A bowl of soup", "A glass of wine"], "Medium", "1998", "Comedy"],
    ["Who moved into Roy Cropper's flat in September 1998?", "Hayley Patterson", ["Deirdre Rachid", "Alma Baldwin", "Rita Sullivan"], "Medium", "1998", "Homes"],
    ["Which young couple secretly married in Scotland in January 1998?", "Nick Tilsley and Leanne Battersby", ["Steve McDonald and Fiona Middleton", "Des Barnes and Samantha Failsworth", "Ashley Peacock and Zoe Tattersall"], "Easy", "1998", "Weddings"],
    ["In which Scottish town did Nick Tilsley and Leanne Battersby marry in 1998?", "Kirkcudbright", ["Gretna Green", "Dumfries", "Ayr"], "Hard", "1998", "Weddings"],
    ["Who gave Leanne Tilsley a job at The Kabin after her secret wedding in 1998?", "Rita Sullivan", ["Emily Bishop", "Betty Williams", "Audrey Roberts"], "Medium", "1998", "The Kabin"],
    ["Which member of Nick Tilsley's family discovered his secret marriage in February 1998?", "Gail Platt", ["Audrey Roberts", "Sarah-Louise Platt", "Ivy Brennan"], "Easy", "1998", "Families"],
    ["What illness caused the death of Zoe Tattersall's baby Shannon in April 1998?", "Meningitis", ["Measles", "Pneumonia", "Whooping cough"], "Medium", "1998", "Storylines"],
    ["Which teenage mother lost her baby daughter Shannon in 1998?", "Zoe Tattersall", ["Leanne Tilsley", "Tricia Armstrong", "Fiona Middleton"], "Medium", "1998", "Families"],
    ["Which long-running Coronation Street resident was wrongly convicted of fraud in March 1998?", "Deirdre Rachid", ["Alma Baldwin", "Rita Sullivan", "Liz McDonald"], "Easy", "1998", "Storylines"],
    ["Which conman framed Deirdre Rachid for fraud in 1998?", "Jon Lindsay", ["Greg Kelly", "Fraser Henderson", "Alan McKenna"], "Easy", "1998", "Crime"],
    ["How long a prison sentence did Deirdre Rachid receive for fraud in March 1998?", "Eighteen months", ["Six months", "Three years", "Five years"], "Medium", "1998", "Crime"],
    ["What was the name of the prison where Deirdre Rachid was held in 1998?", "Redford Prison", ["Strangeways", "Holloway", "Weatherfield Open Prison"], "Medium", "1998", "Crime"],
    ["Which woman shared Deirdre Rachid's prison cell in 1998?", "Jackie Dobbs", ["Anne Malone", "Maud Grimes", "Tanya Pooley"], "Medium", "1998", "Characters"],
    ["Which actress played Deirdre Rachid's cellmate Jackie Dobbs?", "Margi Clarke", ["Sherrie Hewson", "Denise Black", "Gaynor Faye"], "Medium", "1998", "Actors"],
    ["Which previous victim of Jon Lindsay came forward with evidence to help clear Deirdre in 1998?", "Mary Docherty", ["Linda Sykes", "Sharon Gaskell", "Claire Palmer"], "Medium", "1998", "Storylines"],
    ["What unusual job did Ken Barlow take while struggling financially in 1998?", "Male escort", ["Nightclub bouncer", "Taxi driver", "Market trader"], "Medium", "1998", "Occupations"],
    ["In which month of 1998 was Deirdre Rachid released on bail following her wrongful conviction?", "April", ["February", "July", "November"], "Medium", "1998", "Storylines"],
    ["Which character arrived in April 1998 and later became Sally Webster's abusive boyfriend?", "Greg Kelly", ["Jez Quigley", "Danny Hargreaves", "Vinny Sorrell"], "Medium", "1998", "Arrivals"],
    ["Which Battersby man was revealed to be Greg Kelly's father in 1998?", "Les Battersby", ["Steve McDonald", "Mike Baldwin", "Fred Elliott"], "Medium", "1998", "Families"],
    ["Which actor played Greg Kelly during his 1998 storyline?", "Stephen Billington", ["Matthew Marsden", "Adam Rickitt", "Lee Boardman"], "Hard", "1998", "Actors"],
    ["Which married Weatherfield resident began an affair with Greg Kelly in July 1998?", "Sally Webster", ["Gail Platt", "Alma Baldwin", "Judy Mallett"], "Easy", "1998", "Relationships"],
    ["Who stood against Audrey Roberts in the 1998 Weatherfield council election?", "Spider Nugent", ["Ken Barlow", "Alf Roberts", "Les Battersby"], "Medium", "1998", "Politics"],
    ["By how many votes did Audrey Roberts beat Spider Nugent in the 1998 council election?", "Seven", ["Three", "Twenty", "Fifty"], "Hard", "1998", "Politics"],
    ["What decade were Audrey Roberts' old election-poster photographs taken in?", "The 1960s", ["The 1950s", "The 1970s", "The 1980s"], "Medium", "1998", "Comedy"],
    ["What caused Rita Sullivan to collapse in her flat in July 1998?", "Carbon monoxide poisoning", ["A gas explosion", "Food poisoning", "An electric shock"], "Medium", "1998", "Storylines"],
    ["Which Battersby teenager made a hoax bomb threat to a magazine in August 1998?", "Toyah Battersby", ["Leanne Battersby", "Tracy Barlow", "Rosie Webster"], "Medium", "1998", "Storylines"],
    ["Who gave Toyah Battersby extra English lessons in 1998?", "Ken Barlow", ["Curly Watts", "Martin Platt", "Roy Cropper"], "Easy", "1998", "Education"],
    ["What was the name of Toyah Battersby's biological father, whom she tried to find in 1998?", "Ronnie Clegg", ["Les Battersby", "Greg Kelly", "Colin Barnes"], "Medium", "1998", "Families"],
    ["Which man held Toyah Battersby captive in London after she mistook him for her father in 1998?", "Neil Flynn", ["Jon Lindsay", "Greg Kelly", "Chris Collins"], "Medium", "1998", "Crime"],
    ["In which forest was the runaway Toyah Battersby found in September 1998?", "Epping Forest", ["Sherwood Forest", "Delamere Forest", "Wyre Forest"], "Medium", "1998", "Locations"],
    ["Which Freshco employee was falsely implicated in an extortion plot by Anne Malone in 1998?", "Curly Watts", ["Reg Holdsworth", "Vera Duckworth", "Roy Cropper"], "Medium", "1998", "Crime"],
    ["Where was Anne Malone found dead in October 1998?", "A supermarket freezer room", ["The Rovers cellar", "The Weatherfield Canal", "A factory storeroom"], "Medium", "1998", "Storylines"],
    ["Which supermarket was the setting for Anne Malone's fatal freezer incident in 1998?", "Freshco", ["Bettabuy", "Firman's Freezers", "Costcutter"], "Medium", "1998", "Businesses"],
    ["What name did Fiona Middleton give to her baby boy born in February 1998?", "Morgan", ["Brad", "Daniel", "Simon"], "Easy", "1998", "Families"],
    ["Who was the biological father of Fiona Middleton's son Morgan, born in 1998?", "Alan McKenna", ["Jim McDonald", "Steve McDonald", "Tony Horrocks"], "Medium", "1998", "Families"],
    ["Which garage mechanic did Samantha Failsworth have an affair with while dating Des Barnes in 1998?", "Chris Collins", ["Kevin Webster", "Ashley Peacock", "Martin Platt"], "Medium", "1998", "Relationships"],
    ["Which woman married Des Barnes in October 1998?", "Natalie Horrocks", ["Samantha Failsworth", "Sally Webster", "Tricia Armstrong"], "Easy", "1998", "Weddings"],
    ["Which resident died following an attack by drug dealers in November 1998?", "Des Barnes", ["Don Brennan", "Jim McDonald", "Alec Gilroy"], "Easy", "1998", "Storylines"],
    ["Which teenage son of Jackie Dobbs made his first appearance in November 1998?", "Tyrone Dobbs", ["Jason Grimshaw", "Kirk Sutherland", "Craig Harris"], "Easy", "1998", "Arrivals"],
    ["Which woman arrived in Weatherfield in 1998 as Tyrone Dobbs's mother?", "Jackie Dobbs", ["Janice Battersby", "Tricia Armstrong", "Judy Mallett"], "Medium", "1998", "Families"],
    ["What were the first names of Gary and Judy Mallett's twins, born on Christmas Day 1998?", "Billy and Becky", ["Tommy and Amy", "Rosie and Sophie", "Jamie and Shannon"], "Medium", "1998", "Families"],
    ["Who bought the Rovers Return from Alec Gilroy at the end of 1998?", "Natalie Barnes", ["Bet Gilroy", "Fred Elliott", "Vera Duckworth"], "Easy", "1998", "Rovers Return"],

    // =====================================================
    // 1999 - NEW FAMILY SECRETS AND FAREWELLS
    // =====================================================

    ["Which former Mayor of Weatherfield died at the start of 1999?", "Alf Roberts", ["Fred Elliott", "Percy Sugden", "Alec Gilroy"], "Easy", "1999", "Storylines"],
    ["At whose eighteenth-birthday celebration was Alf Roberts found dead in 1999?", "Nick Tilsley's", ["David Platt's", "Steve McDonald's", "Andy McDonald's"], "Medium", "1999", "Families"],
    ["What was the cause of Alf Roberts's death in January 1999?", "A stroke", ["A heart attack", "A road accident", "A fall down stairs"], "Medium", "1999", "Storylines"],
    ["Which Coronation Street resident was widowed by Alf Roberts's death in 1999?", "Audrey Roberts", ["Rita Sullivan", "Emily Bishop", "Betty Williams"], "Easy", "1999", "Families"],
    ["Which former foster daughter of Rita Sullivan returned to Weatherfield in January 1999?", "Sharon Gaskell", ["Jenny Bradley", "Tracy Barlow", "Denise Osbourne"], "Medium", "1999", "Returns"],
    ["Which actress returned to play Sharon Gaskell in Coronation Street in 1999?", "Tracie Bennett", ["Denise Black", "Gaynor Faye", "Tina Hobley"], "Medium", "1999", "Actors"],
    ["Which Weatherfield newsagent did Rita Sullivan offer to give Sharon Gaskell in 1999?", "The Kabin", ["The Corner Shop", "The Rovers Return", "Roy's Rolls"], "Easy", "1999", "Businesses"],
    ["Which man was Sharon Gaskell planning to marry in March 1999?", "Ian Bentley", ["Danny Hargreaves", "Greg Kelly", "Steve McDonald"], "Medium", "1999", "Relationships"],
    ["With which Rovers landlady had Ian Bentley been having an affair in 1999?", "Natalie Barnes", ["Bet Gilroy", "Liz McDonald", "Vera Duckworth"], "Medium", "1999", "Relationships"],
    ["What did Sharon Gaskell do at her planned church wedding in March 1999?", "Called off the ceremony", ["Married someone else", "Left with the best man", "Fainted at the altar"], "Medium", "1999", "Weddings"],
    ["In which month of 1999 did Sharon Gaskell finally marry Ian Bentley?", "November", ["March", "July", "December"], "Medium", "1999", "Weddings"],
    ["Which new shopkeeper took over the Corner Shop in February 1999?", "Ravi Desai", ["Dev Alahan", "Fred Elliott", "Brendan Scott"], "Medium", "1999", "Businesses"],
    ["Which daughter of Ravi Desai later became manager at Freshco in 1999?", "Nita Desai", ["Leanne Tilsley", "Fiona Middleton", "Sharon Gaskell"], "Medium", "1999", "Occupations"],
    ["Which son of Ravi Desai helped run the Corner Shop during 1999?", "Vikram Desai", ["Dev Alahan", "Nick Tilsley", "Greg Kelly"], "Medium", "1999", "Families"],
    ["Which future Corner Shop owner made his Coronation Street debut in November 1999?", "Dev Alahan", ["Roy Cropper", "Fred Elliott", "Reg Holdsworth"], "Easy", "1999", "Arrivals"],
    ["Which actor first played Dev Alahan in Coronation Street?", "Jimmi Harkishin", ["Saeed Jaffrey", "Chris Bisson", "Ameet Chana"], "Medium", "1999", "Actors"],
    ["Which couple held a wedding ceremony in April 1999 that was not legally recognised at the time?", "Roy and Hayley Cropper", ["Nick and Leanne Tilsley", "Ashley and Maxine Peacock", "Ken and Deirdre Barlow"], "Easy", "1999", "Weddings"],
    ["Where was Roy Cropper and Hayley's first wedding ceremony held in April 1999?", "In the café", ["At the Rovers Return", "In the Town Hall", "At St Christopher's Church"], "Medium", "1999", "Weddings"],
    ["Why was Roy and Hayley's wedding ceremony in 1999 not legally recognised?", "The law did not recognise Hayley as female", ["Neither had reached legal marrying age", "They had not given notice of marriage", "The officiant's licence had expired"], "Medium", "1999", "Weddings"],
    ["Which Battersby resident alerted the press about Roy and Hayley's planned wedding in 1999?", "Les Battersby", ["Janice Battersby", "Toyah Battersby", "Leanne Tilsley"], "Medium", "1999", "Storylines"],
    ["At which pub did Roy Cropper propose to Hayley during a 1970s-themed party in February 1999?", "The Flying Horse", ["The Rovers Return", "The Queens", "The White Swan"], "Hard", "1999", "Relationships"],
    ["Which couple married in September 1999 shortly before Judy Mallett's death?", "Ashley Peacock and Maxine Heavey", ["Roy Cropper and Hayley Patterson", "Fred Elliott and Audrey Roberts", "Steve McDonald and Vicky Arden"], "Easy", "1999", "Weddings"],
    ["At which church did Ashley Peacock and Maxine Heavey marry in 1999?", "St Christopher's", ["St Mary's", "St Luke's", "St Peter's"], "Medium", "1999", "Weddings"],
    ["Which butcher revealed in 1999 that he was Ashley Peacock's biological father?", "Fred Elliott", ["Alf Roberts", "Mike Baldwin", "Reg Holdsworth"], "Easy", "1999", "Families"],
    ["What was the name of Ashley Peacock's birth mother, whom he sought out in 1999?", "Kathleen Gutteridge", ["Doreen Heavey", "Maud Grimes", "Claire Palmer"], "Medium", "1999", "Families"],
    ["Whose proposal of marriage did Audrey Roberts turn down in June 1999?", "Fred Elliott's", ["Ken Barlow's", "Jack Duckworth's", "Roy Cropper's"], "Medium", "1999", "Relationships"],
    ["What was the first name of Maxine Heavey's mother, who visited in 1999?", "Doreen", ["Maureen", "Joyce", "Kathleen"], "Medium", "1999", "Families"],
    ["What was the first name of Maxine Heavey's father, introduced in 1999?", "Derek", ["Don", "Dennis", "David"], "Medium", "1999", "Families"],
    ["Which young mother of twins died suddenly in September 1999?", "Judy Mallett", ["Sally Webster", "Tricia Armstrong", "Zoe Tattersall"], "Easy", "1999", "Storylines"],
    ["What caused Judy Mallett's sudden death in 1999?", "An embolism following a leg injury", ["A fall from a ladder", "An infection after childbirth", "A severe asthma attack"], "Medium", "1999", "Storylines"],
    ["Which Duckworth sold Vera the unsafe car involved in the incident preceding Judy Mallett's death?", "Terry Duckworth", ["Jack Duckworth", "Cliff Duckworth", "Tommy Duckworth"], "Medium", "1999", "Storylines"],
    ["At which supermarket was Vera Duckworth parked when her car was hit during the incident preceding Judy Mallett's death?", "Freshco", ["Bettabuy", "Firman's Freezers", "Costcutter"], "Medium", "1999", "Businesses"],
    ["What wedding role was Gary Mallett fulfilling when his wife Judy collapsed in 1999?", "Best man", ["Groom", "Usher", "Master of ceremonies"], "Medium", "1999", "Weddings"],
    ["Which actress played Judy Mallett during her final 1999 storyline?", "Gaynor Faye", ["Tracy Shaw", "Vicky Entwistle", "Angela Griffin"], "Medium", "1999", "Actors"],
    ["Which teenage mechanic began an apprenticeship at Coronation Street Garage in May 1999?", "Tyrone Dobbs", ["Jason Grimshaw", "Nick Tilsley", "Greg Kelly"], "Easy", "1999", "Occupations"],
    ["What was the name of the stray greyhound Tyrone Dobbs befriended in 1999?", "Monica", ["Schmeichel", "Cerberus", "Eccles"], "Medium", "1999", "Animals"],
    ["Which couple offered Tyrone Dobbs a room at their Park Road bed and breakfast in 1999?", "Jack and Vera Duckworth", ["Gary and Judy Mallett", "Ken and Deirdre Barlow", "Alf and Audrey Roberts"], "Medium", "1999", "Homes"],
    ["What major heart operation was Jack Duckworth told he needed in July 1999?", "A triple bypass", ["A heart transplant", "A valve replacement", "A pacemaker fitting"], "Medium", "1999", "Storylines"],
    ["Who was awarded custody of Rosie and Sophie following the Websters' divorce in February 1999?", "Sally Webster", ["Kevin Webster", "Natalie Barnes", "Gail Platt"], "Medium", "1999", "Families"],
    ["Which Underworld machinist became Kevin Webster's new partner in 1999?", "Alison Wakefield", ["Linda Sykes", "Fiona Middleton", "Samantha Failsworth"], "Medium", "1999", "Relationships"],
    ["What was the name of Alison Wakefield's younger sister, who had drowned as a child?", "Cheryl", ["Charlotte", "Christine", "Claire"], "Hard", "1999", "Families"],
    ["Which nurse did Martin Platt begin an affair with at Christmas 1999?", "Rebecca Hopkins", ["Cathy Power", "Alison Wakefield", "Fiona Middleton"], "Medium", "1999", "Relationships"],
    ["Which machinist who joined Underworld in 1998 was having an affair with Mike Baldwin in 1999?", "Linda Sykes", ["Alison Wakefield", "Angie Freeman", "Hayley Cropper"], "Medium", "1999", "Relationships"],
    ["Which woman tried to blackmail Mike Baldwin in 1999 using photographs of their affair?", "Julia Stone", ["Sharon Gaskell", "Natalie Barnes", "Anne Malone"], "Medium", "1999", "Crime"],
    ["Which villain held Sally Webster and her daughters hostage in May 1999?", "Greg Kelly", ["Jez Quigley", "Jon Lindsay", "Fraser Henderson"], "Easy", "1999", "Crime"],
    ["Which young woman left her job at The Kabin and became a barmaid at the Rovers in May 1999?", "Leanne Tilsley", ["Toyah Battersby", "Nita Desai", "Fiona Middleton"], "Medium", "1999", "Occupations"],
    ["Which man became known as a dangerous local drug dealer in 1999?", "Jez Quigley", ["Ian Bentley", "Dev Alahan", "Roy Cropper"], "Medium", "1999", "Crime"],
    ["Which long-standing marriage broke down in 1999 after Mike Baldwin's affair with Julia Stone?", "Mike and Alma Baldwin's", ["Jack and Vera Duckworth's", "Martin and Gail Platt's", "Ken and Deirdre Barlow's"], "Medium", "1999", "Relationships"],
    ["Which newcomer was introduced in November 1999 as a school friend of Sarah-Louise Platt?", "Candice Stowe", ["Toyah Battersby", "Zoe Tattersall", "Becky Granger"], "Medium", "1999", "Arrivals"],
    ["Which drayman began helping Natalie Barnes with the Rovers cellar in August 1999?", "Vinny Sorrell", ["Danny Hargreaves", "Chris Collins", "Tony Horrocks"], "Medium", "1999", "Rovers Return"]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(1001 + index).padStart(4, '0'),
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
    questions[0].id !== 'tv_1001' ||
    questions[99].id !== 'tv_1100' ||
    questions.filter(q => q.tags.includes('1998')).length !== 50 ||
    questions.filter(q => q.tags.includes('1999')).length !== 50
) {
    throw new Error('Pack 170: incorrect count, years or ID range');
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
        throw new Error('Pack 170: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
