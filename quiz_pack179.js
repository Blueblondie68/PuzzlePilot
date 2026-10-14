// quiz_pack179.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2016 and 2017
// 100 questions: tv_1901 to tv_2000
// Leave quiz_bank.js unchanged until Render is behaving.

const facts = [

    // =====================================================
    // YEAR 2016
    // =====================================================

    ["Which longtime resident left Weatherfield for volunteer work in Peru in January 2016?", "Emily Bishop", ["Rita Tanner", "Audrey Roberts", "Norris Cole"], "Easy", "2016", "Departures"],
    ["Which former Coronation Street character was Emily Bishop going to help in Peru?", "Spider Nugent", ["Dennis Tanner", "Jed Stone", "Curly Watts"], "Medium", "2016", "Returns"],
    ["With which chef did Carla Connor have a one-night stand on New Year's Day 2016?", "Robert Preston", ["Nick Tilsley", "Aidan Connor", "Steve McDonald"], "Easy", "2016", "Relationships"],
    ["Which businessman was revealed to be Carla Connor's biological father in early 2016?", "Johnny Connor", ["Barry Connor", "Mike Baldwin", "Frank Foster"], "Easy", "2016", "Families"],
    ["Which young girl was declared to be in remission after cancer treatment in January 2016?", "Hope Stape", ["Ruby Dobbs", "Lily Platt", "Faye Windass"], "Easy", "2016", "Families"],
    ["What was the name of Tracy Barlow's new flower shop, opened in January 2016?", "Preston's Petals", ["Barlow's Blooms", "Weatherfield Flowers", "Tracy's Roses"], "Medium", "2016", "Businesses"],
    ["Which woman blackmailed Carla Connor over her affair with Robert Preston in 2016?", "Tracy Barlow", ["Michelle Connor", "Maria Connor", "Jenny Bradley"], "Easy", "2016", "Crime"],
    ["Which pair actually married in May 2016, only for their marriage to collapse at the reception?", "Nick Tilsley and Carla Connor", ["Steve McDonald and Michelle Connor", "Roy Cropper and Cathy Matthews", "Jason Grimshaw and Eva Price"], "Easy", "2016", "Weddings"],
    ["Which woman publicly exposed Carla Connor's deception at her 2016 wedding?", "Tracy Barlow", ["Leanne Battersby", "Kylie Platt", "Liz McDonald"], "Easy", "2016", "Weddings"],
    ["Where did Carla Connor move after the end of her marriage to Nick in 2016?", "Devon", ["Cornwall", "Scotland", "Wales"], "Medium", "2016", "Departures"],
    ["Which actress departed as Carla Connor in May 2016?", "Alison King", ["Kym Marsh", "Samia Longchambon", "Catherine Tyldesley"], "Easy", "2016", "Actors"],
    ["Which new character arrived in 2016 as an old friend of Alya Nazir?", "Rana Habeeb", ["Sonia Rahman", "Shona Ramsey", "Nicola Rubinstein"], "Easy", "2016", "Arrivals"],
    ["Which Nazir man first married Rana Habeeb in a religious ceremony in 2016?", "Zeedan Nazir", ["Sharif Nazir", "Kal Nazir", "Dev Alahan"], "Easy", "2016", "Weddings"],
    ["What kind of ceremony marked Rana Habeeb and Zeedan Nazir's first wedding in 2016?", "A Nikah ceremony", ["A registry-office ceremony", "A church blessing", "A civil partnership ceremony"], "Medium", "2016", "Weddings"],
    ["Which family was devastated when Sharif's long-running affair was revealed in 2016?", "The Nazirs", ["The Barlows", "The Websters", "The Platts"], "Easy", "2016", "Families"],
    ["With whom had Sharif Nazir been having an affair, exposed in 2016?", "Sonia Rahman", ["Rana Habeeb", "Erica Holroyd", "Liz McDonald"], "Medium", "2016", "Relationships"],
    ["Which Nazir granddaughter discovered Sharif's affair and used it to blackmail him?", "Alya Nazir", ["Rana Habeeb", "Sophie Webster", "Bethany Platt"], "Medium", "2016", "Crime"],
    ["How much money did Alya Nazir demand to stay silent about Sharif's affair in 2016?", "£14,000", ["£4,000", "£8,000", "£40,000"], "Medium", "2016", "Money"],
    ["Which man returned to Weatherfield in January 2016 and revived his feud with Anna Windass?", "Pat Phelan", ["Rob Donovan", "Tony Gordon", "Frank Foster"], "Easy", "2016", "Returns"],
    ["Which criminal partner worked with Pat Phelan on a fraudulent flats development in 2016?", "Vinny Ashford", ["Andy Carver", "Terry Duckworth", "Rick Neelan"], "Medium", "2016", "Crime"],
    ["What did Phelan and Vinny take from Weatherfield residents in their 2016 property scam?", "Deposits for flats", ["Car insurance premiums", "Lottery winnings", "Charity collections"], "Easy", "2016", "Crime"],
    ["Who fled with the proceeds of the flats scam, leaving Pat Phelan empty-handed in 2016?", "Vinny Ashford", ["Michael Rodwell", "Todd Grimshaw", "Jason Grimshaw"], "Medium", "2016", "Crime"],
    ["Which Platt gave birth to a son named Harry in March 2016?", "Sarah Platt", ["Kylie Platt", "Gail Rodwell", "Bethany Platt"], "Easy", "2016", "Families"],
    ["Who was the biological father of Sarah Platt's baby Harry, born in 2016?", "Callum Logan", ["Jason Grimshaw", "Gary Windass", "Nick Tilsley"], "Easy", "2016", "Families"],
    ["Which youngster's violence towards his stepmother Leanne led her to contact police in 2016?", "Simon Barlow", ["Max Turner", "Craig Tinker", "Chesney Brown"], "Medium", "2016", "Storylines"],
    ["Which Coronation Street character was stabbed to death in July 2016?", "Kylie Platt", ["Tina McIntyre", "Maria Connor", "Sarah Platt"], "Easy", "2016", "Departures"],
    ["Who fatally stabbed Kylie Platt in 2016?", "Clayton Hibbs", ["Callum Logan", "Pat Phelan", "Rob Donovan"], "Easy", "2016", "Crime"],
    ["Which kebab-shop worker was Kylie Platt protecting when she was stabbed in 2016?", "Gemma Winter", ["Eva Price", "Sinead Tinker", "Beth Tinker"], "Easy", "2016", "Storylines"],
    ["In whose arms did Kylie Platt die on the cobbles in 2016?", "David Platt", ["Nick Tilsley", "Michael Rodwell", "Jason Grimshaw"], "Easy", "2016", "Departures"],
    ["Which aspiring policeman witnessed Clayton Hibbs attack Kylie Platt in 2016?", "Craig Tinker", ["Simon Barlow", "Ryan Connor", "Seb Franklin"], "Medium", "2016", "Crime"],
    ["Which actress left Coronation Street when Kylie Platt was killed in 2016?", "Paula Lane", ["Julia Goulding", "Lucy Fallon", "Tina O'Brien"], "Easy", "2016", "Actors"],
    ["Which Grimshaw son left Weatherfield to start again in Thailand in June 2016?", "Jason Grimshaw", ["Todd Grimshaw", "Ryan Connor", "Billy Mayhew"], "Easy", "2016", "Departures"],
    ["Who arranged for Jason Grimshaw's van to be set on fire in 2016?", "Pat Phelan", ["Callum Logan", "Vinny Ashford", "Kevin Webster"], "Medium", "2016", "Crime"],
    ["Whose one-night stand with Steve McDonald resulted in a pregnancy in 2016?", "Leanne Battersby", ["Tracy Barlow", "Michelle Connor", "Maria Connor"], "Easy", "2016", "Families"],
    ["Which man agreed to bring up Leanne's unborn baby as his own in 2016?", "Nick Tilsley", ["Peter Barlow", "Robert Preston", "Kal Nazir"], "Medium", "2016", "Families"],
    ["Which of Ken Barlow's sons returned in October 2016, before Daniel and Adam arrived in November?", "Peter Barlow", ["Adam Barlow", "Daniel Osbourne", "Gary Windass"], "Easy", "2016", "Returns"],
    ["Which young lawyer returned to Weatherfield in November 2016 as Ken Barlow's grandson?", "Adam Barlow", ["Daniel Osbourne", "Simon Barlow", "Todd Grimshaw"], "Easy", "2016", "Returns"],
    ["Which son of Ken Barlow returned to Weatherfield in November 2016 after years away?", "Daniel Osbourne", ["Adam Barlow", "Simon Barlow", "Nick Tilsley"], "Easy", "2016", "Returns"],
    ["Who were Daniel Osbourne's parents?", "Ken Barlow and Denise Osbourne", ["Peter Barlow and Leanne Battersby", "Mike Baldwin and Susan Barlow", "Steve McDonald and Tracy Barlow"], "Medium", "2016", "Families"],
    ["What medical emergency did Ken Barlow suffer in October 2016?", "A stroke", ["A heart attack", "A broken hip", "An epileptic seizure"], "Easy", "2016", "Storylines"],
    ["Which resident suffered serious burns after David Platt's car exploded in October 2016?", "Anna Windass", ["Sally Metcalfe", "Eileen Grimshaw", "Rita Tanner"], "Easy", "2016", "Storylines"],
    ["Why was David Platt driving a car filled with petrol in October 2016?", "He planned to kill Kylie's murderer", ["He was delivering fuel to a garage", "He intended to torch Underworld", "He was trying to escape from Phelan"], "Medium", "2016", "Crime"],
    ["Which character died after a heart attack while uncovering Pat Phelan's fraud in November 2016?", "Michael Rodwell", ["Tony Stewart", "Dennis Tanner", "Jim McDonald"], "Easy", "2016", "Departures"],
    ["What did Pat Phelan do when Michael Rodwell collapsed in 2016?", "He left him to die without helping", ["He performed CPR", "He called an ambulance immediately", "He drove him to hospital"], "Easy", "2016", "Crime"],
    ["Which man, who once impersonated Gavin Rodwell, grew suspicious of Pat Phelan in 2016?", "Andy Carver", ["Vinny Ashford", "Todd Grimshaw", "Luke Britton"], "Medium", "2016", "Storylines"],
    ["Who called off her proposed wedding to Roy Cropper in December 2016?", "Cathy Matthews", ["Mary Taylor", "Audrey Roberts", "Rita Tanner"], "Easy", "2016", "Weddings"],
    ["Which long-lost son of Mary Taylor appeared in Weatherfield on Christmas Day 2016?", "Jude Appleton", ["Angie Appleton", "George Appleton", "Beth Tinker"], "Easy", "2016", "Families"],
    ["Which Battersby returned on Christmas Day 2016 after nearly fourteen years away?", "Toyah Battersby", ["Janice Battersby", "Leanne Battersby", "Les Battersby"], "Easy", "2016", "Returns"],
    ["Which newcomer first met David Platt in a nightclub in December 2016 and stole his wallet?", "Shona Ramsey", ["Nicola Rubinstein", "Rana Habeeb", "Mel Maguire"], "Medium", "2016", "Arrivals"],

    // =====================================================
    // YEAR 2017
    // =====================================================

    ["What name had Steve and Michelle McDonald chosen for the baby they lost in January 2017?", "Ruairi", ["Oliver", "Harry", "Jake"], "Medium", "2017", "Families"],
    ["Who was Steve McDonald's wife when she lost their baby in January 2017?", "Michelle Connor", ["Leanne Battersby", "Tracy Barlow", "Becky McDonald"], "Easy", "2017", "Families"],
    ["Which baby boy was born to Leanne Battersby in February 2017?", "Oliver", ["Max", "Jack", "Joseph"], "Easy", "2017", "Families"],
    ["Who was Oliver Battersby's biological father, revealed in 2017?", "Steve McDonald", ["Nick Tilsley", "Peter Barlow", "Robert Preston"], "Easy", "2017", "Families"],
    ["Where did Leanne Battersby give birth to Oliver in February 2017?", "In a lift at Victoria Court", ["In the Rovers Return", "In Roy's café", "In a taxi outside the Bistro"], "Medium", "2017", "Families"],
    ["Which relative helped deliver Leanne's baby Oliver in 2017?", "Toyah Battersby", ["Eva Price", "Liz McDonald", "Gail Rodwell"], "Medium", "2017", "Families"],
    ["Who was revealed to have pushed Ken Barlow down the stairs in 2017?", "Daniel Osbourne", ["Adam Barlow", "Pat Phelan", "Peter Barlow"], "Easy", "2017", "Crime"],
    ["In whose home did the attempt on Ken Barlow's life take place in 2017?", "Number 1 Coronation Street", ["The Rovers Return", "Number 8 Coronation Street", "Victoria Court"], "Medium", "2017", "Crime"],
    ["Which builder was arrested as an early suspect in Ken Barlow's 2017 attack?", "Pat Phelan", ["Owen Armstrong", "Jason Grimshaw", "Kevin Webster"], "Easy", "2017", "Crime"],
    ["Which police detective investigated Ken Barlow's attack in 2017?", "DS MacKinnon", ["DC Hooch", "DS Swain", "DC Tinker"], "Medium", "2017", "Crime"],
    ["Which woman had an abortion after Ken Barlow pressured her over his son's future in 2017?", "Sinead Tinker", ["Eva Price", "Kate Connor", "Bethany Platt"], "Medium", "2017", "Families"],
    ["Which university had Daniel Osbourne been offered a place at before Ken's attack?", "Oxford", ["Cambridge", "Durham", "Manchester"], "Medium", "2017", "Education"],
    ["Which character's mother Denise returned in 2017 during the investigation into Ken's attack?", "Daniel Osbourne", ["Adam Barlow", "Simon Barlow", "Peter Barlow"], "Medium", "2017", "Returns"],
    ["What did Ken Barlow tell the police after learning the truth about his attacker in 2017?", "That he had fallen accidentally", ["That Pat Phelan had attacked him", "That Peter Barlow had attacked him", "That he was attacked by a burglar"], "Medium", "2017", "Crime"],
    ["Which older man groomed teenager Bethany Platt in 2017?", "Nathan Curtis", ["Neil Clifton", "Gary Windass", "Will Chatterton"], "Easy", "2017", "Storylines"],
    ["What was Nathan Curtis's business in the 2017 Bethany Platt storyline?", "A tanning salon", ["A nightclub", "A taxi firm", "A modelling agency"], "Medium", "2017", "Businesses"],
    ["Which police officer was involved in the grooming ring exploiting Bethany Platt?", "Neil Clifton", ["Craig Tinker", "DS MacKinnon", "Jess Heywood"], "Medium", "2017", "Crime"],
    ["Which woman helped Nathan Curtis manipulate Bethany Platt in 2017?", "Mel Maguire", ["Shona Ramsey", "Sophie Webster", "Alya Nazir"], "Medium", "2017", "Crime"],
    ["Which young girl connected with Nathan's grooming gang died before the 2017 trial?", "Lara Cutler", ["Maddie Heath", "Sian Powers", "Katy Armstrong"], "Medium", "2017", "Storylines"],
    ["Which aspiring policeman helped expose one of Bethany Platt's abusers in 2017?", "Craig Tinker", ["Ryan Connor", "Simon Barlow", "Seb Franklin"], "Easy", "2017", "Crime"],
    ["Which woman was revealed in 2017 to be Clayton Hibbs's mother?", "Shona Ramsey", ["Sarah Platt", "Gemma Winter", "Nicola Rubinstein"], "Easy", "2017", "Families"],
    ["Which widowed Platt began a relationship with Shona Ramsey in 2017?", "David Platt", ["Nick Tilsley", "Michael Rodwell", "Martin Platt"], "Easy", "2017", "Relationships"],
    ["Which family member of Sally Metcalfe returned to live in Weatherfield in 2017?", "Gina Seddon", ["Natalie Barnes", "Vera Duckworth", "Linda Hancock"], "Medium", "2017", "Returns"],
    ["How was Gina Seddon related to Sally Metcalfe when she returned in 2017?", "She was Sally's sister", ["She was Sally's aunt", "She was Sally's cousin", "She was Sally's niece"], "Easy", "2017", "Families"],
    ["Which sisters returned to Weatherfield together in February 2017?", "Rosie and Sophie Webster", ["Carla and Michelle Connor", "Eva and Leanne Price", "Beth and Sinead Tinker"], "Easy", "2017", "Returns"],
    ["Who became joint landlords of the Rovers Return in July 2017?", "Peter Barlow and Toyah Battersby", ["Steve McDonald and Michelle Connor", "Liz McDonald and Tony Stewart", "Robert Preston and Michelle Connor"], "Easy", "2017", "Businesses"],
    ["Which mother and son sold their stake in the Rovers Return in 2017?", "Liz and Steve McDonald", ["Sally and Kevin Webster", "Tracy and Ken Barlow", "Rita and Dennis Tanner"], "Easy", "2017", "Businesses"],
    ["Which businessman was running the Bistro when Michelle Connor began dating him in 2017?", "Robert Preston", ["Nick Tilsley", "Aidan Connor", "Dev Alahan"], "Easy", "2017", "Relationships"],
    ["What illness was Johnny Connor diagnosed with in 2017?", "Multiple sclerosis", ["Motor neurone disease", "Parkinson's disease", "Multiple myeloma"], "Medium", "2017", "Storylines"],
    ["Whom did Johnny Connor marry in September 2017?", "Jenny Bradley", ["Liz McDonald", "Eva Price", "Carla Connor"], "Easy", "2017", "Weddings"],
    ["Which woman discovered Aidan Connor was having an affair with Maria in 2017?", "Eva Price", ["Alya Nazir", "Michelle Connor", "Jenny Bradley"], "Easy", "2017", "Relationships"],
    ["With whom had Aidan Connor secretly been having an affair while dating Eva Price?", "Maria Connor", ["Carla Connor", "Kate Connor", "Michelle Connor"], "Easy", "2017", "Relationships"],
    ["Which Barlow teamed up with Eva Price to take revenge on Aidan Connor in 2017?", "Adam Barlow", ["Peter Barlow", "Daniel Osbourne", "Ken Barlow"], "Easy", "2017", "Crime"],
    ["What did Eva Price falsely claim in 2017 while plotting revenge on Aidan Connor?", "That she was pregnant", ["That she had won the lottery", "That she had bought the Rovers", "That she had been offered a job abroad"], "Medium", "2017", "Storylines"],
    ["Which veteran resident was found to have a brain tumour in 2017?", "Rita Tanner", ["Emily Bishop", "Audrey Roberts", "Betty Williams"], "Easy", "2017", "Storylines"],
    ["Who was especially worried by Rita Tanner's memory lapses before her 2017 diagnosis?", "Gemma Winter", ["Carla Connor", "Tracy Barlow", "Kylie Platt"], "Medium", "2017", "Relationships"],
    ["Which builder kept Andy Carver prisoner in a cellar during 2017?", "Pat Phelan", ["Owen Armstrong", "Gary Windass", "Todd Grimshaw"], "Easy", "2017", "Crime"],
    ["Who did Pat Phelan force Andy Carver to shoot in October 2017?", "Vinny Ashford", ["Michael Rodwell", "Jason Grimshaw", "Robert Preston"], "Easy", "2017", "Crime"],
    ["Who killed Andy Carver in October 2017?", "Pat Phelan", ["Vinny Ashford", "Rob Donovan", "Gary Windass"], "Easy", "2017", "Crime"],
    ["Which woman discovered in 2017 that Pat Phelan was her biological father?", "Nicola Rubinstein", ["Shona Ramsey", "Rana Habeeb", "Sinead Tinker"], "Easy", "2017", "Families"],
    ["Which young man was injured in a fall from a ladder and later diagnosed HIV-positive in 2017?", "Seb Franklin", ["Craig Tinker", "Daniel Osbourne", "Ryan Connor"], "Medium", "2017", "Storylines"],
    ["Who did Pat Phelan frame for Seb Franklin's fall in 2017?", "Anna Windass", ["Eileen Grimshaw", "Nicola Rubinstein", "Sally Metcalfe"], "Easy", "2017", "Crime"],
    ["Which woman married Pat Phelan in 2017 despite warnings about his behaviour?", "Eileen Grimshaw", ["Anna Windass", "Liz McDonald", "Yasmeen Nazir"], "Easy", "2017", "Weddings"],
    ["Which couple brought their baby son George to Weatherfield in 2017?", "Jude and Angie Appleton", ["Peter and Toyah Barlow", "Zeedan and Rana Nazir", "Tim and Sally Metcalfe"], "Medium", "2017", "Families"],
    ["Which resident married Norris Cole as part of a competition scheme in 2017?", "Mary Taylor", ["Rita Tanner", "Cathy Matthews", "Audrey Roberts"], "Easy", "2017", "Weddings"],
    ["Who began a secret romance with Kate Connor while married to Zeedan Nazir in 2017?", "Rana Habeeb", ["Alya Nazir", "Maria Connor", "Eva Price"], "Easy", "2017", "Relationships"],
    ["Who discovered Kate Connor and Rana Habeeb kissing in December 2017?", "Luke Britton", ["Craig Tinker", "Peter Barlow", "Daniel Osbourne"], "Medium", "2017", "Relationships"],
    ["Which character was revealed to be behind Michelle Connor's kidnapping in 2017?", "Will Chatterton", ["Rich Collis", "Pat Phelan", "Robert Preston"], "Medium", "2017", "Crime"],
    ["What type of cancer was Robert Preston treated for in late 2017?", "Testicular cancer", ["Prostate cancer", "Bowel cancer", "Skin cancer"], "Easy", "2017", "Storylines"],
    ["Who was revealed in late 2017 to have been involved in the robbery linked to Susan Barlow's fatal crash?", "Billy Mayhew", ["Todd Grimshaw", "Pat Phelan", "Rob Donovan"], "Medium", "2017", "Storylines"],
    ["Which man pursued his romance with Toyah Battersby in 2017 after they reunited at Christmas?", "Peter Barlow", ["Steve McDonald", "Nick Tilsley", "Adam Barlow"], "Medium", "2017", "Relationships"]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(1901 + index).padStart(4, '0'),
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
    questions[0].id !== 'tv_1901' ||
    questions[99].id !== 'tv_2000' ||
    questions.filter(q => q.tags.includes('2016')).length !== 49 ||
    questions.filter(q => q.tags.includes('2017')).length !== 51
) {
    throw new Error('Pack 179: incorrect count, years or ID range');
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
        throw new Error('Pack 179: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
