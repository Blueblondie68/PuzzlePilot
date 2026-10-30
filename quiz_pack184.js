// quiz_pack184.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2026 (to 14 October)
// 70 questions: tv_2401 to tv_2470
// Final Coronation Street audit pack; complete metadata/tags.
// quiz_bank.js remains unchanged.

const facts = [
    // 2026 - aired storylines only
    ["Which other ITV soap joined Coronation Street in the crossover special?", "Emmerdale", ["EastEnders", "Hollyoaks", "Doctors"], "Easy", "2026", "TV History", ["Corriedale", "Emmerdale", "ITV Crossover", "Soap Special", "January 2026"]],
    ["What was the name of the Coronation Street and Emmerdale crossover broadcast?", "Corriedale", ["Weatherdale", "Emmeronation", "Soapland Live"], "Easy", "2026", "TV History", ["Corriedale", "Emmerdale", "ITV Special", "Crossover Episode", "January 2026"]],
    ["What sort of accident was central to the Corriedale crossover?", "A multi-vehicle road pile-up", ["A tram derailment", "A factory explosion", "A train crash"], "Easy", "2026", "Storylines", ["Corriedale", "Multi-Vehicle Collision", "Road Accident", "Pile-Up", "Hotten"]],
    ["In which English county did the Corriedale road disaster take place?", "Yorkshire", ["Lancashire", "Derbyshire", "Cumbria"], "Medium", "2026", "Locations", ["Corriedale", "Hotten", "Yorkshire", "Road Disaster", "Emmerdale Location"]],
    ["Which woman married Ronnie Bailey immediately before the Corriedale disaster?", "Debbie Webster", ["Abi Webster", "Jenny Connor", "Sally Metcalfe"], "Easy", "2026", "Weddings", ["Debbie Webster", "Ronnie Bailey", "Wedding Ceremony", "Corriedale", "January 2026"]],
    ["Which vicar died following the Corriedale crash?", "Billy Mayhew", ["George Shuttleworth", "Todd Grimshaw", "Brian Packham"], "Easy", "2026", "Departures", ["Billy Mayhew", "Corriedale", "Fatal Crash", "Vicar", "Death"]],
    ["Who deliberately left Billy Mayhew trapped in the damaged minibus during Corriedale?", "Theo Silverton", ["Carl Webster", "Ronnie Bailey", "Kit Green"], "Easy", "2026", "Crime", ["Theo Silverton", "Billy Mayhew", "Damaged Minibus", "Deliberate Abandonment", "Corriedale"]],
    ["Which vehicle was Billy Mayhew trapped inside when he died?", "A minibus", ["A taxi", "A motorbike", "A delivery van"], "Easy", "2026", "Storylines", ["Billy Mayhew", "Minibus", "Road Collision", "Corriedale", "Death"]],
    ["Which actor left Coronation Street after playing Billy Mayhew until January 2026?", "Daniel Brocklebank", ["Gareth Pierce", "Peter Ash", "Antony Cotton"], "Medium", "2026", "Actors", ["Daniel Brocklebank", "Billy Mayhew", "Actor Exit", "Corriedale", "Casting"]],
    ["Which couple's wedding guests were travelling in the ill-fated minibus?", "Debbie Webster and Ronnie Bailey", ["Carla Connor and Lisa Swain", "David Platt and Shona Ramsey", "Steve McDonald and Tracy Barlow"], "Easy", "2026", "Weddings", ["Debbie Webster", "Ronnie Bailey", "Wedding Guests", "Minibus", "Corriedale"]],
    ["Who pleaded guilty over the fatal 2026 road crash while shielding the person truly responsible?", "Debbie Webster", ["Abi Webster", "Tracy McDonald", "Lisa Swain"], "Medium", "2026", "Crime", ["Debbie Webster", "Carl Webster", "Guilty Plea", "Crash Cover-Up", "Prison Sentence"]],
    ["Which character was actually driving the car involved in the crash that Debbie took the blame for?", "Carl Webster", ["Ronnie Bailey", "Kevin Webster", "Steve McDonald"], "Easy", "2026", "Crime", ["Carl Webster", "Debbie Webster", "Drink-Driving", "Car Crash", "Framing"]],
    ["What family secret did Debbie Webster reveal to Carl?", "She was his biological mother", ["She was his older cousin", "She was his adoptive sister", "She was his aunt"], "Easy", "2026", "Families", ["Debbie Webster", "Carl Webster", "Biological Mother", "Family Secret", "Revelation"]],
    ["What relationship had Carl Webster previously believed he had with Debbie?", "That she was his half-sister", ["That she was his mother", "That she was his aunt", "That she was his niece"], "Easy", "2026", "Families", ["Carl Webster", "Debbie Webster", "Half-Siblings", "Mistaken Identity", "Family Secret"]],
    ["Which illness complicated Debbie Webster's time in prison?", "Vascular dementia", ["Parkinson's disease", "Motor neurone disease", "Multiple sclerosis"], "Easy", "2026", "Storylines", ["Debbie Webster", "Vascular Dementia", "Prison", "Health", "Cognitive Decline"]],
    ["Which former neighbour shared prison scenes with Debbie Webster?", "Lou Michaelis", ["Eva Price", "Becky Swain", "Michelle Connor"], "Medium", "2026", "Returns", ["Lou Michaelis", "Debbie Webster", "Prison Inmates", "Former Neighbours", "Imprisonment"]],
    ["Who remained Debbie Webster's devoted husband during her prison troubles?", "Ronnie Bailey", ["Kevin Webster", "Carl Webster", "Ed Bailey"], "Easy", "2026", "Relationships", ["Ronnie Bailey", "Debbie Webster", "Husband", "Marriage", "Prison Sentence"]],
    ["Which woman gave birth prematurely after the Corriedale crash?", "Shona Platt", ["Sarah Platt", "Bethany Platt", "Toyah Battersby"], "Easy", "2026", "Families", ["Shona Platt", "Premature Birth", "Corriedale", "Hospital", "Baby Harper"]],
    ["What did David and Shona Platt name their baby daughter?", "Harper", ["Laila", "Maeve", "Susie"], "Easy", "2026", "Families", ["Harper Platt", "Shona Platt", "David Platt", "Baby Name", "Daughter"]],
    ["Who was baby Harper Platt's father?", "David Platt", ["Nick Tilsley", "Kit Green", "Gary Windass"], "Easy", "2026", "Families", ["Harper Platt", "David Platt", "Shona Platt", "Fatherhood", "Parentage"]],
    ["After whom did David and Shona name their daughter Harper?", "The surgeon who delivered her", ["A former Rovers landlady", "Shona's schoolteacher", "David's grandmother"], "Medium", "2026", "Families", ["Harper Platt", "Surgeon Vincent Harper", "Baby Name", "Birth", "Hospital"]],
    ["At approximately how many weeks of pregnancy was Harper Platt born?", "28 weeks", ["34 weeks", "40 weeks", "36 weeks"], "Medium", "2026", "Families", ["Harper Platt", "28 Weeks", "Premature Birth", "Neonatal Care", "January 2026"]],
    ["What serious problem had doctors discovered affecting baby Harper Platt before her birth?", "A mass on her neck", ["A hole in her heart", "A broken collarbone", "A missing kidney"], "Medium", "2026", "Storylines", ["Harper Platt", "Neck Mass", "Unborn Baby", "Medical Diagnosis", "Foetal Surgery"]],
    ["Which new arrival was revealed to be Shona Platt's half-sister?", "Jodie Ramsey", ["Daisy Midgeley", "Megan Walsh", "Melanie Driscoll"], "Easy", "2026", "Arrivals", ["Jodie Ramsey", "Shona Platt", "Half-Sisters", "Family Reunion", "New Arrival"]],
    ["Who played the newcomer Jodie Ramsey?", "Olivia Frances-Brown", ["Lucy Fallon", "Beth Nixon", "Cait Fitton"], "Medium", "2026", "Actors", ["Olivia Frances-Brown", "Jodie Ramsey", "Actress", "Casting", "New Arrival"]],
    ["What unusual clue connected Jodie Ramsey to Shona Platt when they met?", "A matching tattoo", ["Matching birthmarks on their hands", "Identical necklaces", "The same wedding ring"], "Medium", "2026", "Families", ["Jodie Ramsey", "Shona Platt", "Matching Tattoos", "Half-Sisters", "Clue"]],
    ["What was the name of Shona and Jodie's estranged father?", "Doug Ramsey", ["Denny Foreman", "Ed Bailey", "Jim McDonald"], "Easy", "2026", "Families", ["Doug Ramsey", "Jodie Ramsey", "Shona Platt", "Estranged Father", "Family Secret"]],
    ["Which former Corrie villain's infant daughter Connie was left in Carla and Lisa's care?", "Rob Donovan", ["Stephen Reid", "Pat Phelan", "Rick Neelan"], "Medium", "2026", "Families", ["Rob Donovan", "Connie Waring", "Carla Connor", "Infant Daughter", "Family Connections"]],
    ["Who was baby Connie Waring's mother?", "Mandy Waring", ["Megan Walsh", "Melanie Driscoll", "Lisa Swain"], "Medium", "2026", "Families", ["Mandy Waring", "Connie Waring", "Rob Donovan", "Motherhood", "Parentage"]],
    ["Which couple were temporarily looking after baby Connie Waring?", "Carla Connor and Lisa Swain", ["Eva Price and Ben Driscoll", "Sally and Tim Metcalfe", "Fiz and Tyrone Dobbs"], "Medium", "2026", "Families", ["Connie Waring", "Carla Connor", "Lisa Swain", "Temporary Care", "Baby"]],
    ["Which couple finally married in April 2026 after a flood threatened their wedding arrangements?", "Carla Connor and Lisa Swain", ["Eva Price and Ben Driscoll", "Sarah Platt and Kit Green", "Toyah Battersby and Nick Tilsley"], "Easy", "2026", "Weddings", ["Carla Connor", "Lisa Swain", "Wedding", "Hotel Flood", "Marriage"]],
    ["Which hotel hosted Carla Connor and Lisa Swain's surprise wedding?", "Chariot Square Hotel", ["Monkford Hall Hotel", "The Midland Hotel", "The Queen's Hotel"], "Medium", "2026", "Weddings", ["Chariot Square Hotel", "Carla Connor", "Lisa Swain", "Wedding Venue", "Surprise Ceremony"]],
    ["Where was the surprise reception for Carla and Lisa's wedding held?", "Underworld", ["The Kabin", "Speed Daal", "Street Cars"], "Medium", "2026", "Weddings", ["Underworld", "Carla Connor", "Lisa Swain", "Wedding Reception", "Factory"]],
    ["Whose bracelet did Roy Cropper lend to Carla for her 2026 wedding?", "Hayley Cropper's", ["Deirdre Barlow's", "Rita Tanner's", "Emily Bishop's"], "Medium", "2026", "Weddings", ["Hayley Cropper", "Roy Cropper", "Carla Connor", "Wedding Bracelet", "Something Borrowed"]],
    ["Which longtime Coronation Street character died off-screen?", "Jim McDonald", ["Ken Barlow", "Roy Cropper", "Kevin Webster"], "Easy", "2026", "Departures", ["Jim McDonald", "Death Off-Screen", "Steve McDonald", "March 2026", "McDonald Family"]],
    ["Which character was devastated to learn of his father Jim McDonald's death?", "Steve McDonald", ["Peter Barlow", "David Platt", "Tyrone Dobbs"], "Easy", "2026", "Families", ["Steve McDonald", "Jim McDonald", "Father And Son", "Bereavement", "Family News"]],
    ["Who was planning to propose to Steve McDonald when news of Jim's death arrived?", "Cassie Plummer", ["Tracy Barlow", "Jenny Connor", "Abi Webster"], "Easy", "2026", "Relationships", ["Cassie Plummer", "Steve McDonald", "Marriage Proposal", "Jim McDonald", "Interrupted Plans"]],
    ["Which Rovers family member was revealed to be another son of Jim McDonald?", "Ben Driscoll", ["Ollie Driscoll", "Will Driscoll", "Kit Green"], "Medium", "2026", "Families", ["Ben Driscoll", "Jim McDonald", "Maggie Driscoll", "Secret Son", "Paternity"]],
    ["Who was revealed to be Ben Driscoll's mother, following a past relationship with Jim McDonald?", "Maggie Driscoll", ["Eva Price", "Bernie Winter", "Debbie Webster"], "Medium", "2026", "Families", ["Maggie Driscoll", "Jim McDonald", "Ben Driscoll", "Affair", "Motherhood"]],
    ["How were Steve McDonald and Ben Driscoll revealed to be related?", "They were half-brothers", ["They were cousins", "They were brothers-in-law", "They were uncle and nephew"], "Easy", "2026", "Families", ["Steve McDonald", "Ben Driscoll", "Half-Brothers", "Jim McDonald", "Family Revelation"]],
    ["Which resident faced financial and emotional abuse from Theo Silverton?", "Todd Grimshaw", ["Sean Tully", "George Shuttleworth", "Ryan Connor"], "Easy", "2026", "Storylines", ["Todd Grimshaw", "Theo Silverton", "Coercive Control", "Financial Abuse", "Domestic Abuse"]],
    ["What did Theo Silverton secretly put in Todd Grimshaw's drink to stop him attending a marathon?", "A drug", ["An energy supplement", "Alcohol-free beer", "A vitamin mix"], "Medium", "2026", "Crime", ["Theo Silverton", "Todd Grimshaw", "Drink Spiking", "Marathon Sabotage", "Coercive Control"]],
    ["Who married Todd Grimshaw in March 2026 while continuing to control him?", "Theo Silverton", ["Billy Mayhew", "Sean Tully", "George Shuttleworth"], "Easy", "2026", "Weddings", ["Theo Silverton", "Todd Grimshaw", "Surprise Wedding", "Register Office", "Domestic Abuse"]],
    ["Which police complaint did Todd Grimshaw make?", "He reported being abused by Theo", ["He reported a factory theft", "He reported vandalism of his car", "He reported a burglary at the Kabin"], "Easy", "2026", "Crime", ["Todd Grimshaw", "Theo Silverton", "Police Report", "Domestic Abuse", "Coercive Control"]],
    ["Which abusive character was discovered dead following a fall from scaffolding?", "Theo Silverton", ["Joel Deering", "Damon Hay", "Mick Michaelis"], "Easy", "2026", "Departures", ["Theo Silverton", "Scaffolding Fall", "Death", "Murder Mystery", "Betsy Swain"]],
    ["Who caused Theo Silverton's fatal fall during a confrontation?", "Sarah Platt", ["Todd Grimshaw", "Kit Green", "George Shuttleworth"], "Easy", "2026", "Crime", ["Sarah Platt", "Theo Silverton", "Scaffolding", "Fatal Fall", "Killing"]],
    ["Which object did Sarah Platt use to strike Theo during the confrontation that killed him?", "A metal pole", ["A frying pan", "A brick", "A glass bottle"], "Medium", "2026", "Crime", ["Sarah Platt", "Theo Silverton", "Scaffold Pole", "Fatal Attack", "Self-Defence"]],
    ["Which resident initially helped Sarah Platt conceal her involvement in Theo's death?", "Gary Windass", ["Adam Barlow", "Daniel Osbourne", "Ronnie Bailey"], "Easy", "2026", "Crime", ["Gary Windass", "Sarah Platt", "Theo Silverton", "Cover-Up", "Alibi"]],
    ["Who found Theo Silverton's body as the murder mystery unfolded?", "Betsy Swain", ["Summer Spellman", "Bethany Platt", "Nina Lucas"], "Medium", "2026", "Crime", ["Betsy Swain", "Theo Silverton", "Body Discovery", "Scaffolding", "Murder Investigation"]],
    ["Who was arrested after admitting responsibility for Theo Silverton's death?", "Sarah Platt", ["Maria Connor", "Jodie Ramsey", "Carla Connor"], "Easy", "2026", "Crime", ["Sarah Platt", "Theo Silverton", "Arrest", "Confession", "July 2026"]],
    ["Which teenager was being groomed by Megan Walsh in the storyline that reached court?", "Will Driscoll", ["Sam Blakeman", "Dylan Wilson", "Aadi Alahan"], "Easy", "2026", "Storylines", ["Megan Walsh", "Will Driscoll", "Grooming", "Abuse", "Court Trial"]],
    ["Which schoolboy grew suspicious of Megan Walsh's relationship with Will Driscoll?", "Sam Blakeman", ["Bertie Osbourne", "Jack Webster", "Joseph Brown"], "Easy", "2026", "Storylines", ["Sam Blakeman", "Megan Walsh", "Will Driscoll", "Suspicion", "Grooming"]],
    ["Who was the father of Will Driscoll during the Megan Walsh court storyline?", "Ben Driscoll", ["Steve McDonald", "Nick Tilsley", "Ed Bailey"], "Easy", "2026", "Families", ["Ben Driscoll", "Will Driscoll", "Father And Son", "Megan Walsh", "Court Trial"]],
    ["Which woman was Will Driscoll's stepmother at the Rovers Return?", "Eva Price", ["Jenny Connor", "Leanne Battersby", "Tracy McDonald"], "Easy", "2026", "Families", ["Eva Price", "Will Driscoll", "Ben Driscoll", "Stepmother", "Rovers Return"]],
    ["What verdict did Megan Walsh receive at her trial?", "Guilty", ["Not guilty", "The jury failed to agree", "The case was dismissed"], "Easy", "2026", "Crime", ["Megan Walsh", "Guilty Verdict", "Court Trial", "Will Driscoll", "Grooming"]],
    ["Which woman was Megan Walsh's mother, who appeared during the trial?", "Janine Walsh", ["Maggie Driscoll", "Elaine Jones", "Christina Boyd"], "Medium", "2026", "Families", ["Janine Walsh", "Megan Walsh", "Mother And Daughter", "Trial", "Family"]],
    ["Which newcomer was initially introduced as Alya Nazir's cousin before being revealed as her uncle?", "Idris Nazir", ["Zeedan Nazir", "Sharif Nazir", "Imran Habeeb"], "Easy", "2026", "Arrivals", ["Idris Nazir", "Alya Nazir", "Sharif Nazir", "Secret Uncle", "Family Revelation"]],
    ["Which Battersby sister grew close to Idris Nazir?", "Leanne Battersby", ["Toyah Battersby", "Janice Battersby", "Eva Price"], "Easy", "2026", "Relationships", ["Leanne Battersby", "Idris Nazir", "Romance", "Nazir Family", "Relationship"]],
    ["Which young Weatherfield resident suffered two strokes?", "Betsy Swain", ["Amy Barlow", "Asha Alahan", "Summer Spellman"], "Easy", "2026", "Storylines", ["Betsy Swain", "Two Strokes", "Non-Fatal Strangulation", "Hospital", "July 2026"]],
    ["Who discovered Betsy Swain unconscious at home?", "Ryan Connor", ["Dylan Wilson", "Daniel Osbourne", "Kit Green"], "Medium", "2026", "Storylines", ["Ryan Connor", "Betsy Swain", "Unconscious", "Emergency Discovery", "Ambulance"]],
    ["Which teenager was involved in the neck-compression incident that led to Betsy's strokes?", "Dylan Wilson", ["Max Turner", "Brody Michaelis", "Will Driscoll"], "Easy", "2026", "Storylines", ["Dylan Wilson", "Betsy Swain", "Neck Compression", "Non-Fatal Strangulation", "Medical Emergency"]],
    ["Who accompanied Betsy Swain to her college interview during her recovery?", "Lisa Swain", ["Carla Connor", "Becky Swain", "Jenny Connor"], "Easy", "2026", "Families", ["Lisa Swain", "Betsy Swain", "College Interview", "Stroke Recovery", "Mother And Daughter"]],
    ["Which resident left Weatherfield for Whitby at the end of August 2026?", "Nina Lucas", ["Asha Alahan", "Lauren Bolton", "Glenda Shuttleworth"], "Easy", "2026", "Departures", ["Nina Lucas", "Whitby", "Departure", "Art Gallery Job", "Roy Cropper"]],
    ["Which long-lost relative did Hope and Ruby help Tyrone Dobbs track down?", "His father Ross", ["His brother James", "His uncle Denny", "His grandfather Bill"], "Easy", "2026", "Families", ["Tyrone Dobbs", "Ross Wilkes", "Hope Stape", "Ruby Dobbs", "DNA Website"]],
    ["What stage of breast cancer was Kit Green diagnosed with?", "Stage three", ["Stage one", "Stage two", "Stage four"], "Medium", "2026", "Storylines", ["Kit Green", "Stage Three", "Breast Cancer", "Medical Diagnosis", "September 2026"]],
    ["Which type of cancer did detective Kit Green reveal he had?", "Breast cancer", ["Lung cancer", "Skin cancer", "Testicular cancer"], "Easy", "2026", "Storylines", ["Kit Green", "Male Breast Cancer", "Police Detective", "Medical Diagnosis", "Health"]],
    ["Which deceased aunt's family history prompted concerns about a BRCA gene mutation?", "Celeste Butterfield", ["Julie Carp", "Gina Seddon", "Claudia Colby"], "Medium", "2026", "Families", ["Celeste Butterfield", "BRCA Mutation", "Family History", "Breast Cancer", "Winter Family"]],
    ["Which relative of Kit Green was devastated when she learned of his cancer diagnosis?", "Bernie Winter", ["Debbie Webster", "Gail Platt", "Elaine Jones"], "Easy", "2026", "Families", ["Bernie Winter", "Kit Green", "Mother And Son", "Breast Cancer", "Family Reaction"]],
    ["Which youngster admitted to running up a large cryptocurrency debt using Nick Tilsley's identity?", "Sam Blakeman", ["Max Turner", "Liam Connor", "Bertie Osbourne"], "Medium", "2026", "Money", ["Sam Blakeman", "Nick Tilsley", "Cryptocurrency Trading", "Identity Misuse", "Debt"]],
    ["Which member of the Platt household was left worried after Jodie tampered with their father's medication?", "Shona Platt", ["Sarah Platt", "Bethany Platt", "Gail Platt"], "Medium", "2026", "Storylines", ["Jodie Ramsey", "Doug Ramsey", "Shona Platt", "Medication Tampering", "Paranoia"]]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, detailTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(2401 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '2020s', year, topic, ...detailTags])],
        dailyEligible: true
    };
});

// =====================================================
// VALIDATION
// =====================================================

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
        !q.dailyEligible ||
        q.tags.length !== 10 ||
        q.tags.some(tag => typeof tag !== 'string' || !tag.trim())
    ) {
        throw new Error('Pack 184: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
