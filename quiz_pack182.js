// quiz_pack182.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2022 and 2023
// 100 questions: tv_2201 to tv_2300
// Leave quiz_bank.js unchanged until Render is behaving.

const facts = [

    // =====================================================
    // YEAR 2022
    // =====================================================

    ["Which elderly man died after being knocked down by Faye Windass and Emma Brooker's car in 2022?", "Ted Spear", ["Teddy Thompkins", "Rick Neelan", "Geoff Metcalfe"], "Medium", "2022", "Storylines"],
    ["Who was driving the car when Ted Spear was knocked down on New Year's Day 2022?", "Faye Windass", ["Emma Brooker", "Abi Webster", "Kelly Neelan"], "Easy", "2022", "Crime"],
    ["Which policeman destroyed evidence to protect Faye Windass in 2022?", "Craig Tinker", ["Neil Clifton", "DS MacKinnon", "Spider Nugent"], "Easy", "2022", "Crime"],
    ["To which country did Emma Brooker move with Jon Spear in April 2022?", "Australia", ["Canada", "New Zealand", "France"], "Easy", "2022", "Departures"],
    ["Which major heart operation did Tim Metcalfe undergo in January 2022?", "A triple bypass", ["A heart transplant", "A valve replacement", "A pacemaker insertion"], "Medium", "2022", "Storylines"],
    ["Who secretly spiked Amy Barlow's drink at a Valentine's Day event in 2022?", "Max Turner", ["Jacob Hay", "Aaron Sandford", "Aadi Alahan"], "Easy", "2022", "Crime"],
    ["Who was Max Turner actually intending to drug when he spiked a drink in 2022?", "Daniel Osbourne", ["Jacob Hay", "Adam Barlow", "Simon Barlow"], "Medium", "2022", "Crime"],
    ["Which teacher pushed Max Turner down the stairs during a confrontation in 2022?", "Daniel Osbourne", ["Brian Packham", "Ken Barlow", "Roy Cropper"], "Easy", "2022", "Storylines"],
    ["Which woman fabricated an affair with Adam Barlow and tried to ruin his marriage in 2022?", "Lydia Chambers", ["Daisy Midgeley", "Nina Lucas", "Sarah Barlow"], "Medium", "2022", "Storylines"],
    ["Who pushed Adam Barlow off a balcony during a confrontation in March 2022?", "Lydia Chambers", ["Sarah Barlow", "Carla Connor", "Tracy McDonald"], "Medium", "2022", "Crime"],
    ["Which woman gave birth to a baby boy named Alfie in March 2022?", "Abi Webster", ["Toyah Battersby", "Fiz Stape", "Alina Pop"], "Easy", "2022", "Families"],
    ["Who was the biological father of Abi Webster's baby Alfie?", "Imran Habeeb", ["Kevin Webster", "Peter Barlow", "Adam Barlow"], "Easy", "2022", "Families"],
    ["Whom did Imran Habeeb marry in May 2022?", "Toyah Battersby", ["Abi Webster", "Leanne Battersby", "Alya Nazir"], "Easy", "2022", "Weddings"],
    ["What dishonest tactic did Imran Habeeb use to win custody of Alfie in 2022?", "He arranged false testimony", ["He forged the baby's birth certificate", "He bribed a judge", "He faked a DNA test"], "Medium", "2022", "Crime"],
    ["Who was driving the car in the fatal crash involving Imran Habeeb in May 2022?", "Toyah Battersby", ["Abi Webster", "Leanne Battersby", "Kelly Neelan"], "Easy", "2022", "Crime"],
    ["What happened to Imran Habeeb after pulling Toyah from their crashed car in 2022?", "He suffered a fatal cardiac arrest", ["He was arrested", "He fled Weatherfield", "He was left paralysed"], "Medium", "2022", "Departures"],
    ["What verdict did Toyah Battersby receive at her 2022 trial over Imran's death?", "Not guilty", ["Guilty of murder", "Guilty of manslaughter", "The jury failed to agree"], "Easy", "2022", "Crime"],
    ["Which former love interest of Ken Barlow helped look after Abi and baby Alfie in 2022?", "Wendy Papadopoulos", ["Claudia Colby", "Martha Fraser", "Elaine Jones"], "Medium", "2022", "Returns"],
    ["What condition was Faye Windass diagnosed with in May 2022?", "Premature menopause", ["Multiple sclerosis", "Coeliac disease", "Endometriosis"], "Medium", "2022", "Storylines"],
    ["Which man did Fiz Stape marry in July 2022 before immediately regretting it?", "Phill Whittaker", ["Tyrone Dobbs", "Chesney Brown", "Brian Packham"], "Easy", "2022", "Weddings"],
    ["Who did Fiz Stape leave Phill Whittaker to reunite with in 2022?", "Tyrone Dobbs", ["Daniel Osbourne", "Peter Barlow", "Adam Barlow"], "Easy", "2022", "Relationships"],
    ["Which longstanding couple married on Christmas Day 2022?", "Tyrone Dobbs and Fiz Stape", ["Steve McDonald and Tracy Barlow", "Chesney Brown and Gemma Winter", "Daniel Osbourne and Daisy Midgeley"], "Easy", "2022", "Weddings"],
    ["Who was the biological mother of Kelly Neelan, who died of cancer in 2022?", "Laura Neelan", ["Maria Connor", "Jenny Connor", "Abi Webster"], "Easy", "2022", "Families"],
    ["Which woman falsely confessed to killing Rick Neelan shortly before dying in 2022?", "Laura Neelan", ["Kelly Neelan", "Sharon Bentley", "Toyah Battersby"], "Medium", "2022", "Crime"],
    ["Which Alahan teenager became engaged to Kelly Neelan in 2022?", "Aadi Alahan", ["Asha Alahan", "Max Turner", "Simon Barlow"], "Easy", "2022", "Relationships"],
    ["Who was shot while protecting Kelly Neelan from a gunman in September 2022?", "Aadi Alahan", ["Gary Windass", "Craig Tinker", "Dev Alahan"], "Easy", "2022", "Crime"],
    ["Which man had secretly killed Kelly Neelan's father Rick, a truth she discovered in 2022?", "Gary Windass", ["Pat Phelan", "Imran Habeeb", "Peter Barlow"], "Easy", "2022", "Crime"],
    ["Where did Kelly Neelan intend to elope with Aadi in 2022?", "Gretna Green", ["Blackpool", "Las Vegas", "Brighton"], "Medium", "2022", "Relationships"],
    ["Which veteran resident revealed in 2022 that she had attempted to take her own life?", "Audrey Roberts", ["Rita Tanner", "Evelyn Plummer", "Mary Taylor"], "Easy", "2022", "Storylines"],
    ["Which son of Audrey Roberts returned to Weatherfield from Canada in June 2022?", "Stephen Reid", ["Nick Tilsley", "David Platt", "Lewis Archer"], "Easy", "2022", "Returns"],
    ["Who was Stephen Reid's first murder victim in September 2022?", "Leo Thompkins", ["Teddy Thompkins", "Rufus Donahue", "Geoff Metcalfe"], "Easy", "2022", "Crime"],
    ["Which Rovers landlady was engaged to Leo Thompkins before his death in 2022?", "Jenny Connor", ["Daisy Midgeley", "Liz McDonald", "Glenda Shuttleworth"], "Easy", "2022", "Relationships"],
    ["Which businessman killed Leo Thompkins after Leo discovered his financial deception?", "Stephen Reid", ["Gary Windass", "Rick Neelan", "Damon Hay"], "Easy", "2022", "Crime"],
    ["Which member of the Bailey family arrived as a solicitor in September 2022?", "Dee-Dee Bailey", ["Aggie Bailey", "Glory Bailey", "Angie Appleton"], "Easy", "2022", "Arrivals"],
    ["How was Dee-Dee Bailey related to Ed Bailey when she arrived in 2022?", "She was his daughter", ["She was his sister", "She was his niece", "She was his cousin"], "Easy", "2022", "Families"],
    ["Which professional footballer suffered a heart attack on the pitch in September 2022?", "James Bailey", ["Michael Bailey", "Aadi Alahan", "Ryan Connor"], "Easy", "2022", "Storylines"],
    ["What heart condition was James Bailey diagnosed with in 2022?", "Cardiomyopathy", ["Angina", "Atrial fibrillation", "Pericarditis"], "Medium", "2022", "Storylines"],
    ["Which familiar environmental campaigner returned to Weatherfield in July 2022?", "Spider Nugent", ["Curly Watts", "Dennis Tanner", "Reg Holdsworth"], "Easy", "2022", "Returns"],
    ["What secret occupation did Spider Nugent have while infiltrating an extremist group in 2022?", "Undercover police officer", ["Investigative journalist", "Private investigator", "Security guard"], "Medium", "2022", "Occupations"],
    ["Which extremist leader targeted Max Turner for radicalisation in 2022?", "Griff Reynolds", ["Damon Hay", "Harvey Gaskell", "Rick Neelan"], "Easy", "2022", "Storylines"],
    ["Which teenager did Griff Reynolds recruit to make online propaganda videos in 2022?", "Max Turner", ["Aadi Alahan", "Simon Barlow", "Craig Tinker"], "Easy", "2022", "Crime"],
    ["Which refugee was targeted by hostility from Griff Reynolds' group in 2022?", "Daryan Zahawi", ["Imran Habeeb", "Zeedan Nazir", "James Bailey"], "Medium", "2022", "Storylines"],
    ["Which resident was targeted by a deepfake video during her political work in 2022?", "Maria Connor", ["Jenny Connor", "Sally Metcalfe", "Alya Nazir"], "Medium", "2022", "Storylines"],
    ["Who helped Ryan Connor stage a fake break-in at the Bistro in 2022?", "Debbie Webster", ["Jenny Connor", "Carla Connor", "Maria Connor"], "Medium", "2022", "Crime"],
    ["Which former flame of Ken Barlow returned in 2022, causing tension with Wendy Papadopoulos?", "Martha Fraser", ["Wendy Papadopoulos", "Claudia Colby", "Elaine Jones"], "Medium", "2022", "Returns"],
    ["Who was George Shuttleworth's sister, introduced in 2022?", "Glenda Shuttleworth", ["Eileen Grimshaw", "Mary Taylor", "Evelyn Plummer"], "Easy", "2022", "Families"],
    ["Which musical-theatre performer joined Coronation Street as Glenda Shuttleworth in 2022?", "Jodie Prenger", ["Kym Marsh", "Faye Brookes", "Jane Danson"], "Medium", "2022", "Actors"],
    ["Which character was offered money to carry a baby for Mike and Esther Hargrave in 2022?", "Summer Spellman", ["Amy Barlow", "Faye Windass", "Asha Alahan"], "Medium", "2022", "Surrogacy"],
    ["Who was Summer Spellman's boyfriend during her 2022 pregnancy storyline?", "Aaron Sandford", ["Aadi Alahan", "Max Turner", "Jacob Hay"], "Medium", "2022", "Relationships"],
    ["Which man arrived in December 2022 as Jacob Hay's estranged father?", "Damon Hay", ["Harvey Gaskell", "Griff Reynolds", "Teddy Thompkins"], "Easy", "2022", "Arrivals"],

    // =====================================================
    // YEAR 2023
    // =====================================================

    ["Which man was killed by Stephen Reid with a hole punch in January 2023?", "Teddy Thompkins", ["Leo Thompkins", "Rufus Donahue", "Rick Neelan"], "Easy", "2023", "Crime"],
    ["How was Teddy Thompkins related to Stephen Reid's first victim Leo?", "He was Leo's father", ["He was Leo's uncle", "He was Leo's brother", "He was Leo's son"], "Easy", "2023", "Families"],
    ["Which businessman did Stephen Reid drown in a swimming pool in April 2023?", "Rufus Donahue", ["Damon Hay", "Teddy Thompkins", "Peter Barlow"], "Easy", "2023", "Crime"],
    ["What substance did Stephen Reid secretly give Carla Connor to make her think she was unwell in 2023?", "LSD", ["Alcohol", "Sleeping tablets", "Cannabis"], "Medium", "2023", "Crime"],
    ["Which firm did Stephen Reid work at while deceiving Carla Connor in 2023?", "Underworld", ["Street Cars", "The Kabin", "Preston's Petals"], "Easy", "2023", "Businesses"],
    ["Which woman became engaged to Stephen Reid, unaware of his crimes, in 2023?", "Elaine Jones", ["Jenny Connor", "Audrey Roberts", "Yasmeen Nazir"], "Easy", "2023", "Relationships"],
    ["Whose money had Stephen Reid stolen through a fraudulent equity-release scheme?", "Audrey Roberts'", ["Rita Tanner's", "Jenny Connor's", "Sally Metcalfe's"], "Medium", "2023", "Crime"],
    ["Which taxi driver did Stephen Reid attack and lock in a car boot in October 2023?", "Tim Metcalfe", ["Steve McDonald", "Lloyd Mullaney", "Peter Barlow"], "Medium", "2023", "Crime"],
    ["Who killed Stephen Reid by running him over in October 2023?", "Peter Barlow", ["Tim Metcalfe", "Nick Tilsley", "Gary Windass"], "Easy", "2023", "Departures"],
    ["Who was Stephen Reid holding hostage immediately before being run over in 2023?", "Jenny Connor", ["Carla Connor", "Elaine Jones", "Sarah Barlow"], "Easy", "2023", "Crime"],
    ["What type of vehicle did Peter Barlow use when he struck Stephen Reid in 2023?", "A car", ["A motorbike", "A van", "A tram"], "Medium", "2023", "Crime"],
    ["What activity did Peter Barlow leave Weatherfield to pursue in December 2023?", "Sailing", ["Motor racing", "Volunteering in Peru", "Acting on stage"], "Easy", "2023", "Departures"],
    ["Which woman was stalked by Justin Rutherford in 2023?", "Daisy Midgeley", ["Bethany Platt", "Nina Lucas", "Alya Nazir"], "Easy", "2023", "Storylines"],
    ["Whom was Daisy Midgeley due to marry on the day of the 2023 acid attack?", "Daniel Osbourne", ["Ryan Connor", "Adam Barlow", "Aadi Alahan"], "Easy", "2023", "Weddings"],
    ["Who was seriously injured protecting Daisy Midgeley during an acid attack in March 2023?", "Ryan Connor", ["Daniel Osbourne", "Peter Barlow", "Adam Barlow"], "Easy", "2023", "Storylines"],
    ["Where did Justin Rutherford launch his acid attack in March 2023?", "The Rovers Return", ["The Bistro", "Underworld", "Roy's Rolls"], "Easy", "2023", "Crime"],
    ["What verdict did Justin Rutherford receive for the 2023 acid attack?", "Guilty", ["Not guilty", "The jury could not agree", "The trial was cancelled"], "Easy", "2023", "Crime"],
    ["Which actress played Daisy Midgeley during the 2023 stalking storyline?", "Charlotte Jordan", ["Lucy Fallon", "Tina O'Brien", "Katie McGlynn"], "Medium", "2023", "Actors"],
    ["Which character secretly posed as Crystal to send Ryan Connor supportive messages in 2023?", "Daisy Midgeley", ["Carla Connor", "Jenny Connor", "Debbie Webster"], "Medium", "2023", "Storylines"],
    ["Which false online identity was used to send messages to Ryan Connor after his acid attack?", "Crystal", ["Scarlett", "Madison", "Sabrina"], "Medium", "2023", "Storylines"],
    ["With whom did Daisy Midgeley have a secret romantic encounter while engaged to Daniel in 2023?", "Ryan Connor", ["Adam Barlow", "Aadi Alahan", "Damon Hay"], "Easy", "2023", "Relationships"],
    ["Which couple split in December 2023 after Daisy admitted her fling with Ryan?", "Daisy Midgeley and Daniel Osbourne", ["Sarah and Adam Barlow", "Gemma and Chesney Brown", "Carla and Peter Barlow"], "Easy", "2023", "Relationships"],
    ["What progressive neurological condition was Paul Foreman diagnosed with in 2023?", "Motor neurone disease", ["Multiple sclerosis", "Parkinson's disease", "Epilepsy"], "Easy", "2023", "Storylines"],
    ["Which actor played Paul Foreman during his 2023 diagnosis storyline?", "Peter Ash", ["Daniel Brocklebank", "Antony Cotton", "Colson Smith"], "Medium", "2023", "Actors"],
    ["Which vicar married Paul Foreman in October 2023?", "Billy Mayhew", ["Sean Tully", "Todd Grimshaw", "George Shuttleworth"], "Easy", "2023", "Weddings"],
    ["Where was Paul Foreman's legally recognised wedding to Billy held in 2023?", "The Bistro", ["The Rovers Return", "St Mary's Church", "The Kabin"], "Medium", "2023", "Weddings"],
    ["Which relative of Paul Foreman married Chesney Brown in May 2023?", "His twin sister Gemma", ["His cousin Bernie", "His aunt Evelyn", "His niece Summer"], "Easy", "2023", "Families"],
    ["Who did Gemma Winter marry in May 2023?", "Chesney Brown", ["Henry Newton", "Dev Alahan", "Gary Windass"], "Easy", "2023", "Weddings"],
    ["Who was Paul Foreman and Gemma Winter's mother during the 2023 storylines?", "Bernie Winter", ["Evelyn Plummer", "Jenny Connor", "Mary Taylor"], "Easy", "2023", "Families"],
    ["Which man had an affair with Sarah Barlow in 2023 while she was married to Adam?", "Damon Hay", ["Ryan Connor", "Daniel Osbourne", "Rob Donovan"], "Easy", "2023", "Relationships"],
    ["Which solicitor was Sarah Barlow married to during her affair with Damon Hay?", "Adam Barlow", ["Imran Habeeb", "Todd Grimshaw", "Dee-Dee Bailey"], "Easy", "2023", "Relationships"],
    ["Who was the biological father of Sarah Barlow's unborn baby, revealed by a DNA test in 2023?", "Damon Hay", ["Adam Barlow", "Nick Tilsley", "Peter Barlow"], "Medium", "2023", "Families"],
    ["What happened to Sarah Barlow's pregnancy in August 2023?", "She miscarried", ["She gave birth to twins", "She gave birth prematurely", "She had a baby girl"], "Medium", "2023", "Storylines"],
    ["Which young woman was sexually assaulted by Aaron Sandford in 2023?", "Amy Barlow", ["Summer Spellman", "Asha Alahan", "Faye Windass"], "Easy", "2023", "Storylines"],
    ["Which boyfriend of Summer Spellman was accused of raping Amy Barlow in 2023?", "Aaron Sandford", ["Aadi Alahan", "Max Turner", "Jacob Hay"], "Medium", "2023", "Crime"],
    ["Which young man was placed in a secure training centre after being radicalised by extremists?", "Max Turner", ["Simon Barlow", "Aadi Alahan", "Dylan Wilson"], "Easy", "2023", "Storylines"],
    ["Who was Tyrone Dobbs's biological mother, newly introduced to him in 2023?", "Cassie Plummer", ["Evelyn Plummer", "Vera Duckworth", "Kirsty Soames"], "Easy", "2023", "Families"],
    ["Who was Cassie Plummer's mother, who had claimed her daughter was dead?", "Evelyn Plummer", ["Audrey Roberts", "Rita Tanner", "Sylvia Goodwin"], "Easy", "2023", "Families"],
    ["Which long-serving Rovers landlady lost her job when the pub was closed for refurbishment in 2023?", "Jenny Connor", ["Liz McDonald", "Bet Lynch", "Stella Price"], "Easy", "2023", "Businesses"],
    ["Which corporation took over the Rovers Return before closing it in September 2023?", "LS Waterford", ["Underworld", "Weatherfield County", "Street Cars"], "Medium", "2023", "Businesses"],
    ["Which two women arranged to use money stolen by Stephen Reid to buy back the Rovers in 2023?", "Jenny Connor and Daisy Midgeley", ["Carla Connor and Michelle Connor", "Liz McDonald and Tracy Barlow", "Sally Metcalfe and Gina Seddon"], "Medium", "2023", "Businesses"],
    ["Which character resumed a gambling addiction that threatened the Bailey family finances in 2023?", "Ed Bailey", ["Michael Bailey", "Ronnie Bailey", "James Bailey"], "Easy", "2023", "Storylines"],
    ["What was the name of Stu Carpenter's granddaughter whose father returned in 2023?", "Eliza Woodrow", ["Miley Hodge", "Lily Platt", "Glory Bailey"], "Medium", "2023", "Families"],
    ["Which school bully began targeting Liam Connor in 2023?", "Mason Radcliffe", ["Max Turner", "Corey Brent", "Aaron Sandford"], "Easy", "2023", "Storylines"],
    ["Which friend of Mason Radcliffe was involved in Liam Connor's bullying at school?", "Dylan Wilson", ["Bertie Osbourne", "Jack Webster", "Sam Blakeman"], "Medium", "2023", "Storylines"],
    ["Which café owner was diagnosed with angina and needed a stent in 2023?", "Roy Cropper", ["Ken Barlow", "Brian Packham", "Norris Cole"], "Easy", "2023", "Storylines"],
    ["Which youngster left Weatherfield to live with Jackson Hodge and their daughter Miley in 2023?", "Faye Windass", ["Kelly Neelan", "Asha Alahan", "Amy Barlow"], "Easy", "2023", "Departures"],
    ["Which son of Bernie Winter was diagnosed with motor neurone disease in 2023?", "Paul Foreman", ["Chesney Brown", "Aadi Alahan", "Ryan Connor"], "Easy", "2023", "Families"],
    ["Which married woman had an affair with Aadi Alahan in 2023?", "Courtney Vance", ["Asha Alahan", "Nina Lucas", "Daisy Midgeley"], "Medium", "2023", "Relationships"],
    ["Which Barlow family member left Weatherfield on Boxing Day 2023?", "Peter Barlow", ["Ken Barlow", "Adam Barlow", "Daniel Osbourne"], "Easy", "2023", "Departures"]
];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(2201 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Coronation Street', '2020s', year, topic],
        dailyEligible: true
    };
});

// =====================================================
// VALIDATION
// =====================================================

if (
    questions.length !== 100 ||
    questions[0].id !== 'tv_2201' ||
    questions[99].id !== 'tv_2300' ||
    questions.filter(q => q.tags.includes('2022')).length !== 50 ||
    questions.filter(q => q.tags.includes('2023')).length !== 50
) {
    throw new Error('Pack 182: incorrect count, years or ID range');
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
        throw new Error('Pack 182: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
