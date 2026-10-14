// quiz_pack181.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2020 and 2021
// 100 questions: tv_2101 to tv_2200
// Leave quiz_bank.js unchanged until Render is behaving.

const facts = [

    // =====================================================
    // YEAR 2020
    // =====================================================

    ["Which Coronation Street milestone episode aired in February 2020?", "The 10,000th episode", ["The 8,000th episode", "The 9,000th episode", "The 12,000th episode"], "Easy", "2020", "TV History"],
    ["How many years of Coronation Street were celebrated in December 2020?", "60 years", ["50 years", "65 years", "55 years"], "Easy", "2020", "TV History"],
    ["Which event forced Coronation Street to suspend filming for several weeks in 2020?", "The COVID-19 pandemic", ["A studio fire", "A writers' strike", "A major flood"], "Easy", "2020", "TV History"],
    ["Which resident was subjected to coercive control by husband Geoff Metcalfe in 2020?", "Yasmeen Nazir", ["Sally Metcalfe", "Eileen Grimshaw", "Jenny Connor"], "Easy", "2020", "Storylines"],
    ["Which elderly Street resident performed as a magician while abusing his wife in 2020?", "Geoff Metcalfe", ["Norris Cole", "Ken Barlow", "Roy Cropper"], "Medium", "2020", "Occupations"],
    ["What did Yasmeen use to injure Geoff Metcalfe while defending herself in May 2020?", "A broken glass bottle", ["A kitchen rolling pin", "A frying pan", "A fireplace poker"], "Easy", "2020", "Storylines"],
    ["What crime was Yasmeen Nazir charged with after she injured Geoff in 2020?", "Attempted murder", ["Arson", "Fraud", "Kidnapping"], "Easy", "2020", "Crime"],
    ["Which solicitor represented Yasmeen Nazir during her trial in 2020?", "Imran Habeeb", ["Adam Barlow", "Todd Grimshaw", "Paula Martin"], "Easy", "2020", "Crime"],
    ["What was the verdict at Yasmeen Nazir's trial in December 2020?", "Not guilty", ["Guilty", "A hung jury", "A mistrial"], "Easy", "2020", "Crime"],
    ["How did Geoff Metcalfe die during Coronation Street's anniversary week in 2020?", "He fell from the roof of Number 6", ["He was hit by a tram", "He drowned in the canal", "He was killed in a car crash"], "Easy", "2020", "Departures"],
    ["What did Geoff Metcalfe try to do to Number 6 before his death in 2020?", "Set it on fire", ["Sell it at auction", "Flood the cellar", "Demolish the garage"], "Medium", "2020", "Crime"],
    ["Which granddaughter fought to expose Geoff's treatment of Yasmeen in 2020?", "Alya Nazir", ["Rana Habeeb", "Asha Alahan", "Sophie Webster"], "Easy", "2020", "Families"],
    ["Which woman arrived in 2020 and revealed she was Geoff Metcalfe's former wife?", "Elaine Jones", ["Debbie Webster", "Jenny Bradley", "Claudia Colby"], "Easy", "2020", "Arrivals"],
    ["Which resident discovered in 2020 that Elaine Jones was his biological mother?", "Tim Metcalfe", ["Kevin Webster", "Gary Windass", "Steve McDonald"], "Easy", "2020", "Families"],
    ["Which actress played Yasmeen Nazir during the 2020 coercive control storyline?", "Shelley King", ["Sally Dynevor", "Maureen Lipman", "Sue Nicholls"], "Medium", "2020", "Actors"],
    ["Which actor portrayed Geoff Metcalfe until the character's death in 2020?", "Ian Bartholomew", ["Joe Duttine", "John Michie", "Richard Hawley"], "Medium", "2020", "Actors"],
    ["Which little boy was diagnosed with mitochondrial disease in 2020?", "Oliver Battersby", ["Bertie Osbourne", "Harry Platt", "Jack Webster"], "Easy", "2020", "Storylines"],
    ["Which woman was Oliver Battersby's mother during his illness in 2020?", "Leanne Battersby", ["Toyah Battersby", "Michelle Connor", "Tracy McDonald"], "Easy", "2020", "Families"],
    ["Who was Oliver Battersby's father during the 2020 hospital storyline?", "Steve McDonald", ["Nick Tilsley", "Peter Barlow", "Robert Preston"], "Easy", "2020", "Families"],
    ["Which childhood illness did Oliver Battersby suffer from in 2020?", "Mitochondrial disease", ["Cystic fibrosis", "Type 1 diabetes", "Meningitis"], "Easy", "2020", "Storylines"],
    ["Which medical decision did Leanne fight against during Oliver's final months in 2020?", "Withdrawal of his life support", ["A kidney transplant", "A change of hospital ward", "Surgery on a broken leg"], "Medium", "2020", "Storylines"],
    ["Which month did Oliver Battersby die in 2020?", "November", ["February", "July", "September"], "Medium", "2020", "Departures"],
    ["Which two parents sang to Oliver as his life support was withdrawn in 2020?", "Leanne Battersby and Steve McDonald", ["Toyah Battersby and Peter Barlow", "Tracy McDonald and Steve McDonald", "Leanne Battersby and Nick Tilsley"], "Medium", "2020", "Families"],
    ["Which woman put her fostering plans on hold with partner Imran during Oliver's illness in 2020?", "Toyah Battersby", ["Carla Connor", "Jenny Connor", "Sarah Barlow"], "Medium", "2020", "Families"],
    ["Whom did Sarah Platt marry in March 2020?", "Adam Barlow", ["Gary Windass", "Nick Tilsley", "Daniel Osbourne"], "Easy", "2020", "Weddings"],
    ["Which writer left Weatherfield for a new opportunity in London in March 2020?", "Bethany Platt", ["Kate Connor", "Alya Nazir", "Emma Brooker"], "Easy", "2020", "Departures"],
    ["Which grieving widower briefly dated Bethany Platt before she left in 2020?", "Daniel Osbourne", ["Adam Barlow", "Ryan Connor", "Chesney Brown"], "Easy", "2020", "Relationships"],
    ["Whom did Gary Windass marry in August 2020?", "Maria Connor", ["Sarah Platt", "Carla Connor", "Alya Nazir"], "Easy", "2020", "Weddings"],
    ["Which former wife had a brief fling with solicitor Paula Martin at New Year 2020?", "Tracy McDonald", ["Michelle Connor", "Leanne Battersby", "Carla Connor"], "Medium", "2020", "Relationships"],
    ["Which resident moved into the Stillwaters retirement complex with Claudia in 2020?", "Ken Barlow", ["Norris Cole", "Roy Cropper", "Dennis Tanner"], "Easy", "2020", "Departures"],
    ["What wrongdoing did Ken Barlow discover at Stillwaters in 2020?", "The manager was taking money from residents", ["The staff were selling stolen cars", "The kitchens were serving stolen food", "The building had been illegally sublet"], "Medium", "2020", "Storylines"],
    ["Which young woman suffered when an intimate video of her was shared without permission in 2020?", "Asha Alahan", ["Amy Barlow", "Summer Spellman", "Kelly Neelan"], "Easy", "2020", "Storylines"],
    ["Which goth teenager defended Asha Alahan against bullies in 2020?", "Nina Lucas", ["Kelly Neelan", "Faye Windass", "Bethany Platt"], "Easy", "2020", "Friendships"],
    ["Who was the father of Asha and Aadi Alahan in 2020?", "Dev Alahan", ["Sharif Nazir", "Ed Bailey", "Imran Habeeb"], "Easy", "2020", "Families"],
    ["Which woman appeared in 2020 as Rick Neelan's teenage daughter?", "Kelly Neelan", ["Nina Lucas", "Daisy Midgeley", "Grace Vickers"], "Easy", "2020", "Arrivals"],
    ["Whom did Nick Tilsley discover was his son in 2020?", "Sam Blakeman", ["Harry Platt", "Bertie Osbourne", "Jack Webster"], "Easy", "2020", "Families"],
    ["Who was Sam Blakeman's mother when he arrived in 2020?", "Natasha Blakeman", ["Leanne Battersby", "Sarah Platt", "Maria Connor"], "Easy", "2020", "Families"],
    ["Which new boy in 2020 was played by actor Jude Riordan?", "Sam Blakeman", ["Max Turner", "Simon Barlow", "Joseph Brown"], "Medium", "2020", "Actors"],
    ["Which woman struggled to remember her husband David Platt after recovering from a shooting in 2020?", "Shona Platt", ["Sarah Barlow", "Maria Connor", "Kylie Platt"], "Easy", "2020", "Storylines"],
    ["Which property developer wanted to buy and redevelop much of Coronation Street in 2020?", "Ray Crosby", ["Pat Phelan", "Rob Donovan", "Tony Gordon"], "Easy", "2020", "Businesses"],
    ["Which returning Webster family member worked with Ray Crosby on his 2020 redevelopment scheme?", "Debbie Webster", ["Rosie Webster", "Gina Seddon", "Jenny Connor"], "Easy", "2020", "Returns"],
    ["How was Debbie Webster related to Kevin Webster when she returned in 2020?", "She was his sister", ["She was his niece", "She was his ex-wife", "She was his cousin"], "Easy", "2020", "Families"],
    ["What alarming problem appeared in David Platt's garden in 2020?", "A sinkhole", ["An unexploded bomb", "A flooded well", "A collapsed garden shed"], "Easy", "2020", "Storylines"],
    ["Which businessman made unwanted sexual advances towards Faye Windass at the Bistro in December 2020?", "Ray Crosby", ["Gary Windass", "Adam Barlow", "Peter Barlow"], "Medium", "2020", "Crime"],
    ["Which solicitor was struck in the head by Faye Windass in a case of mistaken identity in December 2020?", "Adam Barlow", ["Imran Habeeb", "Todd Grimshaw", "Paula Martin"], "Easy", "2020", "Crime"],
    ["Whom did Carla Connor admit having a one-night stand with in 2020, upsetting Peter Barlow?", "Adam Barlow", ["Robert Preston", "Gary Windass", "Daniel Osbourne"], "Easy", "2020", "Relationships"],
    ["Which resident was revealed as Jenny Connor's stepdaughter when she arrived in December 2020?", "Daisy Midgeley", ["Kelly Neelan", "Alina Pop", "Summer Spellman"], "Medium", "2020", "Arrivals"],
    ["Which couple held a legally recognised wedding in October 2020 after problems with their earlier marriage?", "Sally and Tim Metcalfe", ["Sarah and Adam Barlow", "Maria and Gary Windass", "Peter and Carla Barlow"], "Medium", "2020", "Weddings"],

    // =====================================================
    // YEAR 2021
    // =====================================================

    ["Which businessman was arrested at Manchester Airport in February 2021 after his redevelopment scam collapsed?", "Ray Crosby", ["Gary Windass", "Nick Tilsley", "Robert Preston"], "Medium", "2021", "Crime"],
    ["Who rescued Kevin and Debbie Webster after they were trapped in the Bistro's walk-in fridge in 2021?", "Abi Franklin", ["Sally Metcalfe", "Shona Platt", "Jenny Connor"], "Medium", "2021", "Storylines"],
    ["Which woman gave birth to Michael Bailey's daughter Glory in March 2021?", "Grace Vickers", ["Aggie Bailey", "Emma Brooker", "Alina Pop"], "Easy", "2021", "Families"],
    ["What name did Michael Bailey and Grace Vickers give their daughter in 2021?", "Glory", ["Miley", "Susie", "Ruby"], "Easy", "2021", "Families"],
    ["Which Bailey uncle arrived in 2021 and revealed a past romance with Aggie?", "Ronnie Bailey", ["James Bailey", "Michael Bailey", "Ed Bailey"], "Easy", "2021", "Arrivals"],
    ["Which young woman began a romance with Tyrone Dobbs in 2021, ending his relationship with Fiz?", "Alina Pop", ["Maria Connor", "Abi Franklin", "Emma Brooker"], "Easy", "2021", "Relationships"],
    ["Which woman had been Tyrone Dobbs's longtime partner before he left her for Alina in 2021?", "Fiz Stape", ["Kirsty Soames", "Molly Dobbs", "Maria Connor"], "Easy", "2021", "Relationships"],
    ["Which daughter of Fiz Stape had been brought up by Tyrone when the couple separated in 2021?", "Hope Stape", ["Ruby Dobbs", "Faye Windass", "Amy Barlow"], "Easy", "2021", "Families"],
    ["Who started the fire at Tyrone and Alina's flat in 2021?", "Hope Stape", ["Fiz Stape", "Evelyn Plummer", "Ruby Dobbs"], "Easy", "2021", "Crime"],
    ["What happened to Alina Pop's pregnancy following the flat fire in 2021?", "She miscarried", ["She gave birth to twins", "She gave birth prematurely", "She discovered it was a false alarm"], "Medium", "2021", "Storylines"],
    ["Which country did Alina Pop return to when she left Weatherfield in September 2021?", "Romania", ["Poland", "Hungary", "Bulgaria"], "Easy", "2021", "Departures"],
    ["Who began dating Fiz Stape in 2021 following her separation from Tyrone?", "Phill Whittaker", ["Adam Barlow", "Gary Windass", "Peter Barlow"], "Easy", "2021", "Relationships"],
    ["Which Barlow needed a liver transplant in 2021?", "Peter Barlow", ["Ken Barlow", "Adam Barlow", "Daniel Osbourne"], "Easy", "2021", "Storylines"],
    ["Whom did Peter Barlow marry in April 2021 before undergoing his liver transplant?", "Carla Connor", ["Leanne Battersby", "Toyah Battersby", "Tracy McDonald"], "Easy", "2021", "Weddings"],
    ["Which resident was sentenced to prison in April 2021 for attacking Adam Barlow in error?", "Faye Windass", ["Kelly Neelan", "Seb Franklin", "Corey Brent"], "Medium", "2021", "Crime"],
    ["Which drug dealer pressured Simon Barlow into criminal deliveries in 2021?", "Harvey Gaskell", ["Rick Neelan", "Callum Logan", "Corey Brent"], "Easy", "2021", "Crime"],
    ["Which family member worked with police to protect Simon Barlow from Harvey's gang in 2021?", "Leanne Battersby", ["Tracy McDonald", "Carla Connor", "Gail Rodwell"], "Easy", "2021", "Families"],
    ["Which former foster daughter of Rita Tanner returned in April 2021 while working with Harvey's gang?", "Sharon Bentley", ["Jenny Bradley", "Daisy Midgeley", "Debbie Webster"], "Medium", "2021", "Returns"],
    ["Which two young characters were attacked in a hate crime in May 2021?", "Nina Lucas and Seb Franklin", ["Asha Alahan and Aadi Alahan", "Summer Spellman and Amy Barlow", "Kelly Neelan and Corey Brent"], "Easy", "2021", "Crime"],
    ["Which young mechanic died in hospital after the 2021 hate crime attack?", "Seb Franklin", ["Craig Tinker", "Ryan Connor", "Daniel Osbourne"], "Easy", "2021", "Departures"],
    ["Who was the principal attacker responsible for Seb Franklin's death in 2021?", "Corey Brent", ["Aadi Alahan", "Simon Barlow", "Max Turner"], "Easy", "2021", "Crime"],
    ["Who was Seb Franklin's mother during the 2021 murder storyline?", "Abi Franklin", ["Jenny Connor", "Fiz Stape", "Sally Metcalfe"], "Easy", "2021", "Families"],
    ["Which teenager's goth appearance was targeted in the attack that killed Seb Franklin?", "Nina Lucas", ["Asha Alahan", "Kelly Neelan", "Summer Spellman"], "Easy", "2021", "Storylines"],
    ["Which girl was wrongly convicted of Seb Franklin's murder in September 2021?", "Kelly Neelan", ["Asha Alahan", "Nina Lucas", "Amy Barlow"], "Easy", "2021", "Crime"],
    ["What verdict did the jury initially return for Corey Brent during his 2021 murder trial?", "Not guilty", ["Guilty", "No verdict was reached", "The case was abandoned"], "Medium", "2021", "Crime"],
    ["Who found the discarded rucksack containing evidence that eventually exposed Corey Brent?", "Stu Carpenter", ["Roy Cropper", "Tim Metcalfe", "Peter Barlow"], "Medium", "2021", "Crime"],
    ["Which two girls worked together to investigate evidence that could clear Kelly Neelan in 2021?", "Nina Lucas and Asha Alahan", ["Summer Spellman and Amy Barlow", "Faye Windass and Emma Brooker", "Kelly Neelan and Bethany Platt"], "Medium", "2021", "Friendships"],
    ["Which character was exonerated after Corey Brent admitted killing Seb Franklin in 2021?", "Kelly Neelan", ["Harvey Gaskell", "Faye Windass", "Sharon Bentley"], "Easy", "2021", "Crime"],
    ["Which lesbian relationship began between two teenage residents in early 2021?", "Nina Lucas and Asha Alahan", ["Sophie Webster and Sian Powers", "Rana Habeeb and Kate Connor", "Faye Windass and Kelly Neelan"], "Medium", "2021", "Relationships"],
    ["Which long-serving resident died after a stroke in September 2021?", "Norris Cole", ["Ken Barlow", "Roy Cropper", "Dev Alahan"], "Easy", "2021", "Departures"],
    ["Which actor had portrayed Norris Cole for many years before his character's 2021 death?", "Malcolm Hebden", ["Bill Roache", "David Neilson", "Philip Lowrie"], "Medium", "2021", "Actors"],
    ["Which Street resident died after trying to rescue Jenny Connor from a flooded sewer in October 2021?", "Johnny Connor", ["Kevin Webster", "Gary Windass", "Peter Barlow"], "Easy", "2021", "Departures"],
    ["What weather-related disaster struck Weatherfield during the Halloween 2021 storyline?", "A sinkhole and sewer collapse", ["A tornado", "An earthquake", "A blizzard"], "Easy", "2021", "Storylines"],
    ["Who rescued Jenny Connor after she became trapped during the 2021 flooding?", "Shona Platt", ["Sally Metcalfe", "Debbie Webster", "Leanne Battersby"], "Medium", "2021", "Storylines"],
    ["Which hairdresser was shot by Harvey Gaskell in October 2021 after he mistook her for Leanne?", "Natasha Blakeman", ["Maria Connor", "Sarah Barlow", "Jenny Connor"], "Easy", "2021", "Crime"],
    ["Who was Natasha Blakeman's young son when she died in 2021?", "Sam Blakeman", ["Max Turner", "Bertie Osbourne", "Jack Webster"], "Easy", "2021", "Families"],
    ["Who deliberately drove her car into a skip to stop Harvey Gaskell fleeing in 2021?", "Leanne Battersby", ["Abi Franklin", "Tracy McDonald", "Sarah Barlow"], "Medium", "2021", "Crime"],
    ["Which woman married Kevin Webster in November 2021?", "Abi Franklin", ["Sally Metcalfe", "Jenny Connor", "Maria Connor"], "Easy", "2021", "Weddings"],
    ["Which actress played Abi Franklin during her November 2021 wedding?", "Sally Carman", ["Sally Dynevor", "Shelley King", "Jane Danson"], "Medium", "2021", "Actors"],
    ["Which couple fostered Kelly Neelan during the 2021 Seb Franklin murder investigation?", "Toyah Battersby and Imran Habeeb", ["Fiz Stape and Tyrone Dobbs", "Kevin Webster and Abi Franklin", "Leanne Battersby and Nick Tilsley"], "Medium", "2021", "Families"],
    ["Which Alahan son was left injured after his father prioritised saving Asha in 2021?", "Aadi Alahan", ["Dev Alahan", "Simon Barlow", "Sam Blakeman"], "Easy", "2021", "Families"],
    ["Which Weatherfield County footballer came out publicly as gay in 2021?", "James Bailey", ["Michael Bailey", "Corey Brent", "Ryan Connor"], "Easy", "2021", "Storylines"],
    ["Who was James Bailey's boyfriend when he publicly came out in 2021?", "Danny Tomlinson", ["Corey Brent", "Paul Foreman", "Todd Grimshaw"], "Medium", "2021", "Relationships"],
    ["Which young woman was in a relationship with Daniel Osbourne towards the end of 2021?", "Daisy Midgeley", ["Nina Lucas", "Kelly Neelan", "Asha Alahan"], "Easy", "2021", "Relationships"],
    ["Which resident briefly left Weatherfield to work as a chef in South America in November 2021?", "Roy Cropper", ["Ken Barlow", "Brian Packham", "Norris Cole"], "Easy", "2021", "Departures"],
    ["To which relative did Roy Cropper hand over his café while he was away in 2021?", "Nina Lucas", ["Cathy Matthews", "Mary Taylor", "Fiz Stape"], "Medium", "2021", "Businesses"],
    ["Which character falsely claimed to have a life-threatening heart condition while dating Emma Brooker in 2021?", "Curtis Delamere", ["Daniel Osbourne", "Ryan Connor", "Adam Barlow"], "Easy", "2021", "Storylines"],
    ["Which woman was planning to marry Curtis Delamere in December 2021?", "Emma Brooker", ["Faye Windass", "Asha Alahan", "Kelly Neelan"], "Easy", "2021", "Weddings"],
    ["What condition was Curtis Delamere revealed to have instead of the serious heart illness he claimed in 2021?", "Factitious disorder", ["Epilepsy", "Diabetes", "Narcolepsy"], "Medium", "2021", "Storylines"],
    ["Which grandson of Yasmeen Nazir returned in 2021 and faced blackmail over Speed Daal?", "Zeedan Nazir", ["Sharif Nazir", "Kal Nazir", "Imran Habeeb"], "Easy", "2021", "Returns"],
    ["Which businessman died from a heart attack during an argument with Zeedan and Alya in December 2021?", "Hashim Elamin", ["Ray Crosby", "Geoff Metcalfe", "Johnny Connor"], "Medium", "2021", "Departures"],
    ["Which resident was revealed to have had a one-night stand with Imran Habeeb in 2021?", "Abi Franklin", ["Toyah Battersby", "Kelly Neelan", "Carla Connor"], "Medium", "2021", "Relationships"]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(2101 + index).padStart(4, '0'),
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
    questions[0].id !== 'tv_2101' ||
    questions[99].id !== 'tv_2200' ||
    questions.filter(q => q.tags.includes('2020')).length !== 48 ||
    questions.filter(q => q.tags.includes('2021')).length !== 52
) {
    throw new Error('Pack 181: incorrect count, years or ID range');
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
        throw new Error('Pack 181: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
