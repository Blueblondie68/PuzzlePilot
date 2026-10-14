// quiz_pack184.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2026 (to 14 October)
// 70 questions: tv_2401 to tv_2470
// Leave quiz_bank.js unchanged until Render is behaving.

const facts = [
    // 2026: aired storylines only
    ["Which other ITV soap joined Coronation Street in the 2026 crossover special?", "Emmerdale", ["EastEnders", "Hollyoaks", "Doctors"], "Easy", "2026", "TV History"],
    ["What was the name of the Coronation Street and Emmerdale crossover broadcast in January 2026?", "Corriedale", ["Weatherdale", "Emmeronation", "Soapland Live"], "Easy", "2026", "TV History"],
    ["What sort of accident was central to the 2026 Corriedale crossover?", "A multi-vehicle road pile-up", ["A tram derailment", "A factory explosion", "A train crash"], "Easy", "2026", "Storylines"],
    ["In which English county did the Corriedale road disaster take place?", "Yorkshire", ["Lancashire", "Derbyshire", "Cumbria"], "Medium", "2026", "Locations"],
    ["Which woman married Ronnie Bailey immediately before the Corriedale disaster in January 2026?", "Debbie Webster", ["Abi Webster", "Jenny Connor", "Sally Metcalfe"], "Easy", "2026", "Weddings"],
    ["Which vicar died following the Corriedale crash in January 2026?", "Billy Mayhew", ["George Shuttleworth", "Todd Grimshaw", "Brian Packham"], "Easy", "2026", "Departures"],
    ["Who deliberately left Billy Mayhew trapped in the damaged minibus during Corriedale?", "Theo Silverton", ["Carl Webster", "Ronnie Bailey", "Kit Green"], "Easy", "2026", "Crime"],
    ["Which vehicle was Billy Mayhew trapped inside when he died in 2026?", "A minibus", ["A taxi", "A motorbike", "A delivery van"], "Easy", "2026", "Storylines"],
    ["Which actor left Coronation Street after playing Billy Mayhew until January 2026?", "Daniel Brocklebank", ["Gareth Pierce", "Peter Ash", "Antony Cotton"], "Medium", "2026", "Actors"],
    ["Which couple's wedding guests were travelling in the ill-fated minibus in January 2026?", "Debbie Webster and Ronnie Bailey", ["Carla Connor and Lisa Swain", "David Platt and Shona Ramsey", "Steve McDonald and Tracy Barlow"], "Easy", "2026", "Weddings"],
    ["Who pleaded guilty over the fatal 2026 road crash while shielding the person truly responsible?", "Debbie Webster", ["Abi Webster", "Tracy McDonald", "Lisa Swain"], "Medium", "2026", "Crime"],
    ["Which character was actually driving the car involved in the crash that Debbie took the blame for?", "Carl Webster", ["Ronnie Bailey", "Kevin Webster", "Steve McDonald"], "Easy", "2026", "Crime"],
    ["What family secret did Debbie Webster reveal to Carl in February 2026?", "She was his biological mother", ["She was his older cousin", "She was his adoptive sister", "She was his aunt"], "Easy", "2026", "Families"],
    ["What relationship had Carl Webster previously believed he had with Debbie?", "That she was his half-sister", ["That she was his mother", "That she was his aunt", "That she was his niece"], "Easy", "2026", "Families"],
    ["Which illness complicated Debbie Webster's time in prison during 2026?", "Vascular dementia", ["Parkinson's disease", "Motor neurone disease", "Multiple sclerosis"], "Easy", "2026", "Storylines"],
    ["Which former neighbour shared prison scenes with Debbie Webster in February 2026?", "Lou Michaelis", ["Eva Price", "Becky Swain", "Michelle Connor"], "Medium", "2026", "Returns"],
    ["Who remained Debbie Webster's devoted husband during her prison troubles in 2026?", "Ronnie Bailey", ["Kevin Webster", "Carl Webster", "Ed Bailey"], "Easy", "2026", "Relationships"],
    ["Which woman gave birth prematurely after the Corriedale crash in January 2026?", "Shona Platt", ["Sarah Platt", "Bethany Platt", "Toyah Battersby"], "Easy", "2026", "Families"],
    ["What name did David and Shona Platt give their daughter born in January 2026?", "Harper", ["Laila", "Maeve", "Susie"], "Easy", "2026", "Families"],
    ["Who was baby Harper Platt's father?", "David Platt", ["Nick Tilsley", "Kit Green", "Gary Windass"], "Easy", "2026", "Families"],
    ["After whom did David and Shona name their daughter Harper in 2026?", "The surgeon who delivered her", ["A former Rovers landlady", "Shona's schoolteacher", "David's grandmother"], "Medium", "2026", "Families"],
    ["At approximately how many weeks of pregnancy was Harper Platt born in January 2026?", "28 weeks", ["34 weeks", "40 weeks", "36 weeks"], "Medium", "2026", "Families"],
    ["What serious problem had doctors discovered affecting baby Harper Platt before her birth?", "A mass on her neck", ["A hole in her heart", "A broken collarbone", "A missing kidney"], "Medium", "2026", "Storylines"],
    ["Which new arrival was revealed to be Shona Platt's half-sister in 2026?", "Jodie Ramsey", ["Daisy Midgeley", "Megan Walsh", "Melanie Driscoll"], "Easy", "2026", "Arrivals"],
    ["Who played the newcomer Jodie Ramsey in 2026?", "Olivia Frances-Brown", ["Lucy Fallon", "Beth Nixon", "Cait Fitton"], "Medium", "2026", "Actors"],
    ["What unusual clue connected Jodie Ramsey to Shona Platt when they met in 2026?", "A matching tattoo", ["Matching birthmarks on their hands", "Identical necklaces", "The same wedding ring"], "Medium", "2026", "Families"],
    ["What was the name of Shona and Jodie Ramsey's estranged father who appeared in 2026?", "Doug Ramsey", ["Denny Foreman", "Ed Bailey", "Jim McDonald"], "Easy", "2026", "Families"],
    ["Which former Corrie villain's infant daughter Connie was left in Carla and Lisa's care in 2026?", "Rob Donovan", ["Stephen Reid", "Pat Phelan", "Rick Neelan"], "Medium", "2026", "Families"],
    ["Who was baby Connie Waring's mother?", "Mandy Waring", ["Megan Walsh", "Melanie Driscoll", "Lisa Swain"], "Medium", "2026", "Families"],
    ["Which couple were temporarily looking after baby Connie Waring in spring 2026?", "Carla Connor and Lisa Swain", ["Eva Price and Ben Driscoll", "Sally and Tim Metcalfe", "Fiz and Tyrone Dobbs"], "Medium", "2026", "Families"],
    ["Which couple finally married in April 2026 after a flood threatened their wedding arrangements?", "Carla Connor and Lisa Swain", ["Eva Price and Ben Driscoll", "Sarah Platt and Kit Green", "Toyah Battersby and Nick Tilsley"], "Easy", "2026", "Weddings"],
    ["Which hotel hosted Carla Connor and Lisa Swain's surprise wedding in April 2026?", "Chariot Square Hotel", ["Monkford Hall Hotel", "The Midland Hotel", "The Queen's Hotel"], "Medium", "2026", "Weddings"],
    ["Where was the surprise reception for Carla and Lisa's wedding held in 2026?", "Underworld", ["The Kabin", "Speed Daal", "Street Cars"], "Medium", "2026", "Weddings"],
    ["Whose bracelet did Roy Cropper lend to Carla for her 2026 wedding?", "Hayley Cropper's", ["Deirdre Barlow's", "Rita Tanner's", "Emily Bishop's"], "Medium", "2026", "Weddings"],
    ["Which longtime Coronation Street character died off-screen in March 2026?", "Jim McDonald", ["Ken Barlow", "Roy Cropper", "Kevin Webster"], "Easy", "2026", "Departures"],
    ["Which character was devastated to learn of his father Jim McDonald's death in 2026?", "Steve McDonald", ["Peter Barlow", "David Platt", "Tyrone Dobbs"], "Easy", "2026", "Families"],
    ["Who was planning to propose to Steve McDonald when news of Jim's death arrived in 2026?", "Cassie Plummer", ["Tracy Barlow", "Jenny Connor", "Abi Webster"], "Easy", "2026", "Relationships"],
    ["Which Rovers family member was revealed to be another son of Jim McDonald in 2026?", "Ben Driscoll", ["Ollie Driscoll", "Will Driscoll", "Kit Green"], "Medium", "2026", "Families"],
    ["Who was revealed to be Ben Driscoll's mother, following a past relationship with Jim McDonald?", "Maggie Driscoll", ["Eva Price", "Bernie Winter", "Debbie Webster"], "Medium", "2026", "Families"],
    ["How were Steve McDonald and Ben Driscoll revealed to be related in 2026?", "They were half-brothers", ["They were cousins", "They were brothers-in-law", "They were uncle and nephew"], "Easy", "2026", "Families"],
    ["Which resident faced financial and emotional abuse from Theo Silverton in 2026?", "Todd Grimshaw", ["Sean Tully", "George Shuttleworth", "Ryan Connor"], "Easy", "2026", "Storylines"],
    ["What did Theo Silverton secretly put in Todd Grimshaw's drink to stop him attending a marathon in 2026?", "A drug", ["An energy supplement", "Alcohol-free beer", "A vitamin mix"], "Medium", "2026", "Crime"],
    ["Who married Todd Grimshaw in March 2026 while continuing to control him?", "Theo Silverton", ["Billy Mayhew", "Sean Tully", "George Shuttleworth"], "Easy", "2026", "Weddings"],
    ["Which police complaint did Todd Grimshaw make in April 2026?", "He reported being abused by Theo", ["He reported a factory theft", "He reported vandalism of his car", "He reported a burglary at the Kabin"], "Easy", "2026", "Crime"],
    ["Which abusive character was discovered dead following a fall from scaffolding in 2026?", "Theo Silverton", ["Joel Deering", "Damon Hay", "Mick Michaelis"], "Easy", "2026", "Departures"],
    ["Who caused Theo Silverton's fatal fall during a confrontation in 2026?", "Sarah Platt", ["Todd Grimshaw", "Kit Green", "George Shuttleworth"], "Easy", "2026", "Crime"],
    ["Which object did Sarah Platt use to strike Theo during the confrontation that killed him?", "A metal pole", ["A frying pan", "A brick", "A glass bottle"], "Medium", "2026", "Crime"],
    ["Which resident initially helped Sarah Platt conceal her involvement in Theo's death?", "Gary Windass", ["Adam Barlow", "Daniel Osbourne", "Ronnie Bailey"], "Easy", "2026", "Crime"],
    ["Who found Theo Silverton's body as the 2026 murder mystery unfolded?", "Betsy Swain", ["Summer Spellman", "Bethany Platt", "Nina Lucas"], "Medium", "2026", "Crime"],
    ["Who was arrested after admitting responsibility for Theo Silverton's death in July 2026?", "Sarah Platt", ["Maria Connor", "Jodie Ramsey", "Carla Connor"], "Easy", "2026", "Crime"],
    ["Which teenager was being groomed by Megan Walsh in the storyline that reached court in 2026?", "Will Driscoll", ["Sam Blakeman", "Dylan Wilson", "Aadi Alahan"], "Easy", "2026", "Storylines"],
    ["Which schoolboy grew suspicious of Megan Walsh's relationship with Will Driscoll in 2026?", "Sam Blakeman", ["Bertie Osbourne", "Jack Webster", "Joseph Brown"], "Easy", "2026", "Storylines"],
    ["Who was the father of Will Driscoll during the Megan Walsh court storyline?", "Ben Driscoll", ["Steve McDonald", "Nick Tilsley", "Ed Bailey"], "Easy", "2026", "Families"],
    ["Which woman was Will Driscoll's stepmother at the Rovers Return in 2026?", "Eva Price", ["Jenny Connor", "Leanne Battersby", "Tracy McDonald"], "Easy", "2026", "Families"],
    ["What verdict did Megan Walsh receive at her trial in July 2026?", "Guilty", ["Not guilty", "The jury failed to agree", "The case was dismissed"], "Easy", "2026", "Crime"],
    ["Which woman was Megan Walsh's mother, who appeared during the 2026 trial?", "Janine Walsh", ["Maggie Driscoll", "Elaine Jones", "Christina Boyd"], "Medium", "2026", "Families"],
    ["Which 2026 arrival was introduced as Alya Nazir's cousin?", "Idris Nazir", ["Zeedan Nazir", "Sharif Nazir", "Imran Habeeb"], "Easy", "2026", "Arrivals"],
    ["Which Battersby sister grew close to Idris Nazir in 2026?", "Leanne Battersby", ["Toyah Battersby", "Janice Battersby", "Eva Price"], "Easy", "2026", "Relationships"],
    ["Which young Weatherfield resident suffered two strokes in July 2026?", "Betsy Swain", ["Amy Barlow", "Asha Alahan", "Summer Spellman"], "Easy", "2026", "Storylines"],
    ["Who discovered Betsy Swain unconscious at home in July 2026?", "Ryan Connor", ["Dylan Wilson", "Daniel Osbourne", "Kit Green"], "Medium", "2026", "Storylines"],
    ["Which teenager was involved in the neck-compression incident that led to Betsy's strokes?", "Dylan Wilson", ["Max Turner", "Brody Michaelis", "Will Driscoll"], "Easy", "2026", "Storylines"],
    ["Who was Betsy Swain's mother during her 2026 stroke recovery?", "Lisa Swain", ["Carla Connor", "Becky Swain", "Jenny Connor"], "Easy", "2026", "Families"],
    ["Which resident left Weatherfield for Whitby at the end of August 2026?", "Nina Lucas", ["Asha Alahan", "Lauren Bolton", "Glenda Shuttleworth"], "Easy", "2026", "Departures"],
    ["Which long-lost relative did Hope and Ruby help Tyrone Dobbs track down in July 2026?", "His father Ross", ["His brother James", "His uncle Denny", "His grandfather Bill"], "Easy", "2026", "Families"],
    ["What stage of breast cancer was Kit Green diagnosed with in September 2026?", "Stage three", ["Stage one", "Stage two", "Stage four"], "Medium", "2026", "Storylines"],
    ["Which type of cancer did detective Kit Green reveal he had in 2026?", "Breast cancer", ["Lung cancer", "Skin cancer", "Testicular cancer"], "Easy", "2026", "Storylines"],
    ["Which deceased aunt's family history prompted concerns about a BRCA gene mutation in 2026?", "Celeste Butterfield", ["Julie Carp", "Gina Seddon", "Claudia Colby"], "Medium", "2026", "Families"],
    ["Which relative of Kit Green was devastated when she learned of his cancer diagnosis in September 2026?", "Bernie Winter", ["Debbie Webster", "Gail Platt", "Elaine Jones"], "Easy", "2026", "Families"],
    ["Which youngster admitted to running up a large cryptocurrency debt using Nick Tilsley's identity in autumn 2026?", "Sam Blakeman", ["Max Turner", "Liam Connor", "Bertie Osbourne"], "Medium", "2026", "Money"],
    ["Which member of the Platt household was left worried after Jodie tampered with their father's medication in autumn 2026?", "Shona Platt", ["Sarah Platt", "Bethany Platt", "Gail Platt"], "Medium", "2026", "Storylines"]
];

// BUILD QUESTIONS
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(2401 + index).padStart(4, '0'),
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
    questions.length !== 70 ||
    questions[0].id !== 'tv_2401' ||
    questions[questions.length - 1].id !== 'tv_2470' ||
    !questions.every(q => q.tags.includes('2026'))
) {
    throw new Error('Pack 184: incorrect count, year or ID range');
}

const seenIds = new Set();
const seenQuestions = new Set();
for (const q of questions) {
    const key = q.question.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
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
        throw new Error('Pack 184: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
