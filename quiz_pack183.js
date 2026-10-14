// quiz_pack183.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2024 and 2025
// 100 questions: tv_2301 to tv_2400
// Leave quiz_bank.js unchanged until Render is behaving.

const facts = [

    // YEAR 2024

    ["Which café owner was wrongly jailed over the disappearance of Lauren Bolton in 2024?", "Roy Cropper", ["Nick Tilsley", "Brian Packham", "Ken Barlow"], "Easy", "2024", "Crime"],
    ["Which young woman was wrongly presumed murdered before returning alive in 2024?", "Lauren Bolton", ["Kelly Neelan", "Bethany Platt", "Summer Spellman"], "Easy", "2024", "Storylines"],
    ["Who was the investigating detective in the 2024 Lauren Bolton case?", "Lisa Swain", ["Craig Tinker", "Neil Clifton", "Spider Nugent"], "Easy", "2024", "Crime"],
    ["Which Bailey solicitor worked to clear Roy Cropper's name in 2024?", "Dee-Dee Bailey", ["Aggie Bailey", "Sally Metcalfe", "Jenny Connor"], "Easy", "2024", "Crime"],
    ["Which resident invented a story about seeing an intruder to try to free Roy in 2024?", "Bobby Crawford", ["Daniel Osbourne", "Max Turner", "Ryan Connor"], "Medium", "2024", "Crime"],
    ["Which solicitor was exposed as Lauren Bolton's abuser in 2024?", "Joel Deering", ["Adam Barlow", "Imran Habeeb", "Todd Grimshaw"], "Easy", "2024", "Crime"],
    ["Which woman was engaged to Joel Deering before discovering his crimes in 2024?", "Dee-Dee Bailey", ["Lauren Bolton", "Sarah Platt", "Toyah Battersby"], "Easy", "2024", "Relationships"],
    ["What name did Lauren Bolton give her premature baby boy in 2024?", "Frankie", ["Bertie", "Harry", "Joseph"], "Easy", "2024", "Families"],
    ["Who was the father of Lauren Bolton's baby Frankie, born in 2024?", "Joel Deering", ["Max Turner", "Bobby Crawford", "Daniel Osbourne"], "Easy", "2024", "Families"],
    ["What did Joel Deering secretly give pregnant Lauren in an attempt to harm her in 2024?", "Drugs intended to induce premature labour", ["Sleeping tablets to cure insomnia", "A vitamin supplement", "Travel sickness tablets"], "Medium", "2024", "Crime"],
    ["What was the name of Joel Deering's estranged wife, who appeared in 2024?", "Emily Wilkinson", ["Lydia Chambers", "Elaine Jones", "Christina Boyd"], "Medium", "2024", "Families"],
    ["What was the name of Joel Deering and Emily Wilkinson's young daughter?", "Maeve", ["Glory", "Ruby", "Llio"], "Medium", "2024", "Families"],
    ["Who struck Joel Deering with a rock in the confrontation that killed him in 2024?", "Lauren Bolton", ["Dee-Dee Bailey", "Lisa Swain", "Carla Connor"], "Easy", "2024", "Crime"],
    ["Where was Joel Deering's body found in October 2024?", "In a river", ["In the Rovers cellar", "Under the factory floor", "In the canal lock"], "Easy", "2024", "Crime"],
    ["Which teenager took the blame for Joel Deering's death to protect Lauren in 2024?", "Max Turner", ["Mason Radcliffe", "Dylan Wilson", "Aadi Alahan"], "Medium", "2024", "Crime"],
    ["Who discovered that she was expecting Joel Deering's baby in November 2024?", "Dee-Dee Bailey", ["Lauren Bolton", "Sarah Platt", "Toyah Battersby"], "Easy", "2024", "Families"],
    ["Which woman learned in 2024 that her long-lost son was police detective Kit Green?", "Bernie Winter", ["Jenny Connor", "Evelyn Plummer", "Elaine Jones"], "Easy", "2024", "Families"],
    ["Who was Bernie Winter's long-lost son, introduced in May 2024?", "Kit Green", ["Paul Foreman", "Damon Hay", "Mason Radcliffe"], "Easy", "2024", "Arrivals"],
    ["Which actor joined the cast as Kit Green in 2024?", "Jacob Roberts", ["Peter Ash", "Colson Smith", "Ryan Clayton"], "Medium", "2024", "Actors"],
    ["Which resident died in September 2024 following his battle with motor neurone disease?", "Paul Foreman", ["Billy Mayhew", "Peter Barlow", "Johnny Connor"], "Easy", "2024", "Departures"],
    ["Who was Paul Foreman's husband during his final months in 2024?", "Billy Mayhew", ["Todd Grimshaw", "Sean Tully", "George Shuttleworth"], "Easy", "2024", "Relationships"],
    ["Which woman was Paul Foreman's twin sister during his final storyline?", "Gemma Winter-Brown", ["Bernie Winter", "Summer Spellman", "Alina Pop"], "Easy", "2024", "Families"],
    ["What was the name of Paul Foreman and Gemma's estranged father who reappeared in 2024?", "Denny Foreman", ["Ed Bailey", "Ronnie Bailey", "Geoff Metcalfe"], "Medium", "2024", "Returns"],
    ["Which actor portrayed Paul Foreman until his departure in 2024?", "Peter Ash", ["Daniel Brocklebank", "Jack P Shepherd", "Rob Mallard"], "Easy", "2024", "Actors"],
    ["Which mystifying self-help organisation targeted Leanne Battersby in 2024?", "The Institute", ["The Collective", "The Circle", "The Syndicate"], "Easy", "2024", "Storylines"],
    ["Which charismatic newcomer recruited Leanne Battersby into the Institute in 2024?", "Rowan Cunliffe", ["Joel Deering", "Kit Green", "Damon Hay"], "Easy", "2024", "Arrivals"],
    ["Which man did Toyah Battersby begin an affair with while her sister Leanne was involved with the Institute?", "Nick Tilsley", ["Peter Barlow", "Adam Barlow", "Ryan Connor"], "Easy", "2024", "Relationships"],
    ["Who blackmailed Nick Tilsley using knowledge of his affair with Toyah in 2024?", "Rowan Cunliffe", ["Joel Deering", "Harvey Gaskell", "Damon Hay"], "Medium", "2024", "Crime"],
    ["Which young Barlow was persuaded to invest her inheritance in the Institute in 2024?", "Amy Barlow", ["Tracy Barlow", "Sarah Barlow", "Summer Spellman"], "Easy", "2024", "Money"],
    ["Which Battersby sister became alarmed by Leanne's involvement with the Institute in 2024?", "Toyah Battersby", ["Janice Battersby", "Eva Price", "Sarah Platt"], "Easy", "2024", "Families"],
    ["Which young Platt underwent cosmetic surgery in Turkey that went badly wrong in 2024?", "Bethany Platt", ["Sarah Platt", "Shona Platt", "Lily Platt"], "Easy", "2024", "Storylines"],
    ["What kind of operation did Bethany Platt undergo in Turkey in 2024?", "Liposuction", ["A knee replacement", "Laser eye surgery", "A heart operation"], "Medium", "2024", "Storylines"],
    ["What permanent medical appliance did Bethany Platt need after complications from surgery in 2024?", "A stoma bag", ["A hearing aid", "A pacemaker", "A prosthetic hand"], "Medium", "2024", "Storylines"],
    ["Which actress played Bethany Platt during the 2024 surgery storyline?", "Lucy Fallon", ["Tina O'Brien", "Charlotte Jordan", "Sally Carman"], "Easy", "2024", "Actors"],
    ["Which footballer began an affair with Tracy McDonald in 2024?", "Tommy Orpington", ["James Bailey", "Corey Brent", "Ryan Connor"], "Easy", "2024", "Relationships"],
    ["What was Tommy Orpington's connection to Weatherfield before his 2024 romance?", "He was a footballer for Weatherfield County", ["He owned the Rovers Return", "He was the mayor", "He was a police detective"], "Medium", "2024", "Sport"],
    ["With which former footballer did Tracy McDonald travel to Spain in 2024?", "Tommy Orpington", ["James Bailey", "Aadi Alahan", "Gary Windass"], "Easy", "2024", "Departures"],
    ["Which Barlow teenager left Weatherfield in 2024 to work on his father's boat?", "Simon Barlow", ["Adam Barlow", "Bertie Osbourne", "Daniel Osbourne"], "Easy", "2024", "Departures"],
    ["Which woman returned from Romania in 2024 with Tyrone Dobbs's young son?", "Alina Pop", ["Fiz Dobbs", "Cassie Plummer", "Maria Connor"], "Easy", "2024", "Returns"],
    ["What was the name of Tyrone Dobbs and Alina Pop's son, revealed in 2024?", "Dorin", ["Bertie", "Alfie", "Oliver"], "Medium", "2024", "Families"],
    ["Which youngster's bullying ordeal continued to affect the Connor family in 2024?", "Liam Connor", ["Jack Webster", "Bertie Osbourne", "Sam Blakeman"], "Easy", "2024", "Storylines"],
    ["Which reformed school bully was offered work at Speed Daal by Stu Carpenter in 2024?", "Mason Radcliffe", ["Corey Brent", "Max Turner", "Aaron Sandford"], "Medium", "2024", "Storylines"],
    ["Who was the former Rovers entertainer whom Gail planned to marry on Christmas Day 2024?", "Jesse Chadwick", ["Martin Platt", "Michael Rodwell", "Richard Hillman"], "Easy", "2024", "Weddings"],
    ["Which country did Gail Platt leave Weatherfield for at Christmas 2024?", "France", ["Canada", "Australia", "Italy"], "Easy", "2024", "Departures"],
    ["Which actress ended her 50-year run as Gail Platt in 2024?", "Helen Worth", ["Sue Nicholls", "Sally Dynevor", "Barbara Knox"], "Easy", "2024", "Actors"],
    ["Which former husband appeared in Gail's Christmas Day dream in 2024?", "Richard Hillman", ["Brian Tilsley", "Joe McIntyre", "Michael Rodwell"], "Medium", "2024", "Storylines"],
    ["Which female detective formed a growing personal connection with Carla Connor in 2024?", "Lisa Swain", ["Dee-Dee Bailey", "Paula Martin", "Jess Heywood"], "Easy", "2024", "Relationships"],
    ["Who was the daughter of detective Lisa Swain, introduced in 2024?", "Betsy Swain", ["Kelly Neelan", "Asha Alahan", "Summer Spellman"], "Easy", "2024", "Families"],
    ["Which young woman became friendly with Carla Connor and worked at Underworld in 2024?", "Betsy Swain", ["Miley Hodge", "Glory Bailey", "Lily Platt"], "Medium", "2024", "Businesses"],
    ["Which former Coronation Street resident was reported dead after a workplace accident in November 2024?", "Les Battersby", ["Jim McDonald", "Terry Duckworth", "Curly Watts"], "Easy", "2024", "Departures"],

    // YEAR 2025

    ["Which teenager was fatally stabbed by his brothers in January 2025?", "Mason Radcliffe", ["Dylan Wilson", "Max Turner", "Simon Barlow"], "Easy", "2025", "Departures"],
    ["Which two brothers were responsible for attacking Mason Radcliffe in 2025?", "Matty and Logan Radcliffe", ["Ryan and Ali Connor", "Aadi and Asha Alahan", "Daniel and Adam Barlow"], "Easy", "2025", "Crime"],
    ["Which brother of Mason Radcliffe stabbed him during the fatal 2025 attack?", "Logan Radcliffe", ["Matty Radcliffe", "Dylan Wilson", "Corey Brent"], "Medium", "2025", "Crime"],
    ["Which policeman was murdered while on duty in May 2025?", "Craig Tinker", ["Kit Green", "Spider Nugent", "Neil Clifton"], "Easy", "2025", "Departures"],
    ["Who attacked PC Craig Tinker with a baseball bat in 2025?", "Mick Michaelis", ["Rob Donovan", "Kit Green", "Damon Hay"], "Easy", "2025", "Crime"],
    ["Which actor left the role of Craig Tinker after his 2025 death storyline?", "Colson Smith", ["Jacob Roberts", "Rob Mallard", "Sam Aston"], "Easy", "2025", "Actors"],
    ["Which returning character died during a lakeside outing with her half-sister in 2025?", "Julie Carp", ["Daisy Midgeley", "Jenny Connor", "Cathy Matthews"], "Easy", "2025", "Departures"],
    ["How was Julie Carp related to Eileen Grimshaw?", "She was Eileen's half-sister", ["She was Eileen's daughter", "She was Eileen's niece", "She was Eileen's aunt"], "Easy", "2025", "Families"],
    ["Which serious illness did Julie Carp reveal she had in 2025?", "Stage four sarcoma", ["Motor neurone disease", "Vascular dementia", "Multiple sclerosis"], "Medium", "2025", "Storylines"],
    ["Which actress returned as Julie Carp for her 2025 farewell storyline?", "Katy Cavanagh", ["Sue Cleaver", "Jane Danson", "Jodie Prenger"], "Medium", "2025", "Actors"],
    ["Which longstanding Street resident left to join son Jason in Thailand in June 2025?", "Eileen Grimshaw", ["Sally Metcalfe", "Jenny Connor", "Yasmeen Nazir"], "Easy", "2025", "Departures"],
    ["Which son of Eileen Grimshaw was waiting for her in Thailand in 2025?", "Jason Grimshaw", ["Todd Grimshaw", "Billy Mayhew", "George Shuttleworth"], "Easy", "2025", "Families"],
    ["Which actress departed Coronation Street as Eileen Grimshaw in 2025?", "Sue Cleaver", ["Sally Dynevor", "Maureen Lipman", "Shelley King"], "Easy", "2025", "Actors"],
    ["What name was given to Dee-Dee Bailey's baby girl born in March 2025?", "Laila", ["Maeve", "Glory", "Susie"], "Easy", "2025", "Families"],
    ["Who was the father of Dee-Dee Bailey's daughter Laila?", "Joel Deering", ["Adam Barlow", "Imran Habeeb", "Ronnie Bailey"], "Easy", "2025", "Families"],
    ["Which relative did Dee-Dee initially plan to have adopt baby Laila in 2025?", "Her brother James Bailey", ["Her father Ed Bailey", "Her uncle Ronnie Bailey", "Her brother Michael Bailey"], "Medium", "2025", "Families"],
    ["Which Bailey woman needed an emergency hysterectomy after giving birth in 2025?", "Dee-Dee Bailey", ["Aggie Bailey", "Grace Vickers", "Glory Bailey"], "Medium", "2025", "Storylines"],
    ["Which convicted killer returned in 2025 and arranged to donate a kidney to his sister?", "Rob Donovan", ["Pat Phelan", "Rick Neelan", "Nathan Curtis"], "Easy", "2025", "Returns"],
    ["To which sister did Rob Donovan offer a kidney transplant in 2025?", "Carla Connor", ["Tracy Barlow", "Michelle Connor", "Jenny Connor"], "Easy", "2025", "Families"],
    ["Which prison officer helped Rob Donovan with his 2025 escape plot?", "Mandy", ["Lisa", "Dee-Dee", "Betsy"], "Medium", "2025", "Crime"],
    ["Which teenage girl was shot in the arm during Rob Donovan's 2025 escape storyline?", "Betsy Swain", ["Amy Barlow", "Lily Platt", "Hope Stape"], "Medium", "2025", "Crime"],
    ["Which detective got engaged to Carla Connor in September 2025?", "Lisa Swain", ["Dee-Dee Bailey", "Paula Martin", "Jess Heywood"], "Easy", "2025", "Relationships"],
    ["Which former partner of Lisa Swain turned up alive in Weatherfield in 2025?", "Becky Swain", ["Rana Habeeb", "Kate Connor", "Tina McIntyre"], "Easy", "2025", "Returns"],
    ["What did Weatherfield residents discover about Becky Swain in 2025?", "She had not actually died", ["She was Lisa's sister", "She owned Underworld", "She had become a vicar"], "Medium", "2025", "Storylines"],
    ["Which Webster man was diagnosed with testicular cancer in 2025?", "Kevin Webster", ["Tim Metcalfe", "Carl Webster", "Jack Webster"], "Easy", "2025", "Storylines"],
    ["Which Webster woman learned she had vascular dementia in 2025?", "Debbie Webster", ["Sally Metcalfe", "Rosie Webster", "Abi Webster"], "Easy", "2025", "Storylines"],
    ["Which man arrived in 2025 as Kevin and Debbie Webster's half-brother?", "Carl Webster", ["Ronnie Bailey", "Jason Grimshaw", "Andy Carver"], "Easy", "2025", "Arrivals"],
    ["Which actor joined the cast as Carl Webster in 2025?", "Jonathan Howard", ["Michael Le Vell", "Joe Duttine", "Jack P Shepherd"], "Medium", "2025", "Actors"],
    ["Which woman had an affair with her husband Kevin's half-brother Carl in 2025?", "Abi Webster", ["Sally Metcalfe", "Debbie Webster", "Jenny Connor"], "Easy", "2025", "Relationships"],
    ["Which man was Debbie Webster's partner during her 2025 dementia diagnosis?", "Ronnie Bailey", ["Ed Bailey", "Kevin Webster", "Steve McDonald"], "Easy", "2025", "Relationships"],
    ["Who set fire to Number 8 Coronation Street in February 2025?", "Max Turner", ["David Platt", "Harvey Gaskell", "Shona Platt"], "Easy", "2025", "Crime"],
    ["Why did Max Turner set fire to the Platts' home in 2025?", "To stage an insurance claim", ["To hide a burglary", "To destroy a secret letter", "To frighten his father"], "Medium", "2025", "Crime"],
    ["Who did Max Turner owe money connected with the 2025 arson plot?", "Harvey Gaskell", ["Damon Hay", "Rowan Cunliffe", "Joel Deering"], "Medium", "2025", "Crime"],
    ["Which elder Barlow was secretly drugged by Cassie Plummer in early 2025?", "Ken Barlow", ["Peter Barlow", "Adam Barlow", "Daniel Osbourne"], "Easy", "2025", "Crime"],
    ["Which condition struck Ken Barlow after his confrontation with Cassie in February 2025?", "A heart attack", ["A stroke", "A broken hip", "A seizure"], "Medium", "2025", "Storylines"],
    ["Which couple arrived in 2025 and became known as Weatherfield's nightmare neighbours?", "Mick and Lou Michaelis", ["Kit and Lisa Swain", "Carl and Abi Webster", "Damon and Sarah Hay"], "Easy", "2025", "Arrivals"],
    ["Which actor played the violent newcomer Mick Michaelis in 2025?", "Joe Layton", ["Jacob Roberts", "Peter Ash", "Calum Lill"], "Medium", "2025", "Actors"],
    ["Which actress played Lou Michaelis in 2025?", "Farrel Hegarty", ["Charlotte Jordan", "Jodie Prenger", "Lucy Fallon"], "Medium", "2025", "Actors"],
    ["Which young man was revealed to be the biological son of Kit Green in 2025?", "Brody Michaelis", ["Dylan Wilson", "Max Turner", "Liam Connor"], "Easy", "2025", "Families"],
    ["Which woman plotted with her daughter Daisy to catfish Jenny Connor in 2025?", "Christina Boyd", ["Bernie Winter", "Elaine Jones", "Debbie Webster"], "Easy", "2025", "Crime"],
    ["What was the first name of the fake romantic interest used to deceive Jenny Connor in 2025?", "Dom", ["Damon", "Daniel", "Denny"], "Medium", "2025", "Crime"],
    ["Which character left Weatherfield in May 2025 after deceiving Jenny Connor?", "Daisy Midgeley", ["Betsy Swain", "Shona Platt", "Carla Connor"], "Easy", "2025", "Departures"],
    ["Which actress departed as Daisy Midgeley in 2025?", "Charlotte Jordan", ["Lucy Fallon", "Cait Fitton", "Tina O'Brien"], "Easy", "2025", "Actors"],
    ["To which Indonesian island did Daisy Midgeley fly after leaving Weatherfield in 2025?", "Bali", ["Java", "Sumatra", "Lombok"], "Medium", "2025", "Departures"],
    ["Which new love interest of Todd Grimshaw was involved in a conversion-therapy storyline in 2025?", "Theo Silverton", ["Mick Michaelis", "Carl Webster", "Kit Green"], "Easy", "2025", "Relationships"],
    ["Which teenager was groomed by fitness coach Megan Walsh in a storyline beginning in 2025?", "Will Driscoll", ["Brody Michaelis", "Dylan Wilson", "Liam Connor"], "Medium", "2025", "Storylines"],
    ["Which former Street resident returned with the Driscoll family in late 2025?", "Eva Price", ["Stella Price", "Michelle Connor", "Liz McDonald"], "Easy", "2025", "Returns"],
    ["Which actress returned as Eva Price in 2025?", "Catherine Tyldesley", ["Sally Ann Matthews", "Alison King", "Jane Danson"], "Easy", "2025", "Actors"],
    ["Which character was appointed the new landlady of the Rovers Return towards the end of 2025?", "Eva Price", ["Carla Connor", "Sally Metcalfe", "Leanne Battersby"], "Medium", "2025", "Businesses"],
    ["Which young Dobbs sister was revealed to be behind online messages targeting Hope in 2025?", "Ruby Dobbs", ["Lily Platt", "Summer Spellman", "Asha Alahan"], "Medium", "2025", "Families"]

];

// BUILD QUESTIONS
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(2301 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Coronation Street', '2020s', year, topic],
        dailyEligible: true
    };
});

// VALIDATION
if (
    questions.length !== 100 ||
    questions[0].id !== 'tv_2301' ||
    questions[99].id !== 'tv_2400' ||
    questions.filter(q => q.tags.includes('2024')).length !== 50 ||
    questions.filter(q => q.tags.includes('2025')).length !== 50
) {
    throw new Error('Pack 183: incorrect count, years or ID range');
}

const seenIds = new Set();
const seenQuestions = new Set();
for (const q of questions) {
    const key = q.question.toLowerCase()
        .replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
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
        throw new Error('Pack 183: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
