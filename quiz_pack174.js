// quiz_pack174.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2006 and 2007
// 100 questions: tv_1401 to tv_1500
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [

    // =====================================================
    // YEAR 2006
    // =====================================================

    ["What were the names of Dev and Sunita Alahan's twins, born in 2006?", "Aadi and Asha", ["Amy and Adam", "Ryan and Rosie", "Ben and Bethany"], "Easy", "2006", "Families"],
    ["Which shopkeeper was the father of twins Aadi and Asha, born in 2006?", "Dev Alahan", ["Vikram Desai", "Steve McDonald", "Lloyd Mullaney"], "Easy", "2006", "Families"],
    ["Why did Sunita Alahan leave her husband Dev with their twins in 2006?", "He had concealed other children from her", ["He sold their house without telling her", "He moved abroad for work", "He refused to support her career"], "Medium", "2006", "Relationships"],
    ["Which factory worker was befriended and later framed for theft by Becky Granger in 2006?", "Kelly Crabtree", ["Fiz Brown", "Janice Battersby", "Joanne Jackson"], "Medium", "2006", "Crime"],
    ["Which actress first played Becky Granger in Coronation Street in 2006?", "Katherine Kelly", ["Suranne Jones", "Jennie McAlpine", "Vicky Binns"], "Medium", "2006", "Actors"],
    ["Which long-serving factory owner died in Ken Barlow's arms in April 2006?", "Mike Baldwin", ["Fred Elliott", "Duggie Ferguson", "Danny Baldwin"], "Easy", "2006", "Departures"],
    ["What condition affected Mike Baldwin's memory before his death in 2006?", "Alzheimer's disease", ["Parkinson's disease", "Multiple sclerosis", "Huntington's disease"], "Easy", "2006", "Storylines"],
    ["Where did Mike Baldwin go after leaving hospital shortly before his death?", "His factory", ["The Rovers Return", "The Corner Shop", "The Kabin"], "Medium", "2006", "Storylines"],
    ["Which relative manipulated Mike Baldwin's affairs as his health declined in 2006?", "Danny Baldwin", ["Ken Barlow", "Adam Barlow", "Peter Barlow"], "Medium", "2006", "Families"],
    ["Which young heir contested Mike Baldwin's will after his death in 2006?", "Adam Barlow", ["Peter Barlow", "Jamie Baldwin", "Mark Redman"], "Easy", "2006", "Families"],
    ["Which character kept the original of Mike Baldwin's later will as leverage over Danny in 2006?", "Leanne Battersby", ["Frankie Baldwin", "Deirdre Barlow", "Carla Connor"], "Medium", "2006", "Crime"],
    ["Which company was at the centre of the battle over Mike Baldwin's inheritance?", "Underworld", ["Street Cars", "Freshco", "Bettabuy"], "Easy", "2006", "Businesses"],
    ["Who sent Gail Platt disturbing cards pretending to be her dead husband Richard Hillman in 2006?", "David Platt", ["Phil Nail", "Martin Platt", "Charlie Stubbs"], "Easy", "2006", "Storylines"],
    ["Which man was Gail Platt dating when David tried to break them up in 2006?", "Phil Nail", ["Archie Shuttleworth", "Joe McIntyre", "Richard Hillman"], "Medium", "2006", "Relationships"],
    ["Which young character was officially adopted by Les Battersby-Brown in 2006?", "Chesney Brown", ["David Platt", "Craig Harris", "Ryan Connor"], "Easy", "2006", "Families"],
    ["Which former Rovers landlady left Weatherfield for Derbyshire in July 2006?", "Shelley Unwin", ["Bet Lynch", "Natalie Barnes", "Liz McDonald"], "Medium", "2006", "Departures"],
    ["What was the name of Ashley and Claire Peacock's second son, born in July 2006?", "Freddie", ["Joshua", "Billy", "Ben"], "Easy", "2006", "Families"],
    ["What condition led Claire Peacock to believe she had been given the wrong baby in 2006?", "Postnatal depression", ["Amnesia", "An ear infection", "Epilepsy"], "Medium", "2006", "Storylines"],
    ["Which bride was jilted by Jason Grimshaw on her wedding day in August 2006?", "Sarah Platt", ["Violet Wilson", "Maria Sutherland", "Rosie Webster"], "Easy", "2006", "Weddings"],
    ["Which Grimshaw brother was supposed to marry Sarah Platt in 2006?", "Jason Grimshaw", ["Todd Grimshaw", "Peter Barlow", "Jamie Baldwin"], "Easy", "2006", "Relationships"],
    ["Which young man left for Berlin after Rosie Webster decided not to run away with him in 2006?", "Craig Harris", ["David Platt", "Ryan Connor", "Todd Grimshaw"], "Medium", "2006", "Departures"],
    ["Which European city did the Webster family visit in October 2006?", "Paris", ["Rome", "Madrid", "Prague"], "Medium", "2006", "Travel"],
    ["Which relative did Kevin Webster reconnect with during the family's 2006 holiday?", "His father Bill", ["His brother Carl", "His uncle Jack", "His son Jake"], "Medium", "2006", "Families"],
    ["Which new character, played by Kym Marsh, became a Rovers barmaid in 2006?", "Michelle Connor", ["Carla Connor", "Violet Wilson", "Kelly Crabtree"], "Easy", "2006", "Arrivals"],
    ["What was the first name of Michelle Connor's teenage son when they arrived in 2006?", "Ryan", ["Adam", "Jason", "Craig"], "Easy", "2006", "Families"],
    ["Which newcomer bought Adam Barlow's share of Underworld in 2006?", "Liam Connor", ["Tony Gordon", "Steve McDonald", "Joe Carter"], "Medium", "2006", "Businesses"],
    ["Who was Liam Connor's older brother and fellow factory investor?", "Paul Connor", ["Ryan Connor", "Jamie Baldwin", "Danny Baldwin"], "Medium", "2006", "Families"],
    ["Which actor first played Liam Connor in 2006?", "Rob James-Collier", ["Sean Gallagher", "Rupert Hill", "Ryan Thomas"], "Medium", "2006", "Actors"],
    ["Which actress arrived as Carla Connor in December 2006?", "Alison King", ["Kym Marsh", "Debra Stephenson", "Sally Lindsay"], "Easy", "2006", "Actors"],
    ["Who was Carla Connor married to when she first arrived in Weatherfield?", "Paul Connor", ["Liam Connor", "Tony Gordon", "Danny Baldwin"], "Medium", "2006", "Families"],
    ["Which Rovers owner collapsed and died on his wedding day in October 2006?", "Fred Elliott", ["Alec Gilroy", "Duggie Ferguson", "Mike Baldwin"], "Easy", "2006", "Departures"],
    ["Whom was Fred Elliott due to marry on the day he died?", "Bev Unwin", ["Audrey Roberts", "Eve Sykes", "Rita Sullivan"], "Easy", "2006", "Weddings"],
    ["At whose home did Fred Elliott suffer his fatal stroke in 2006?", "Audrey Roberts's", ["Betty Williams's", "Deirdre Barlow's", "Eileen Grimshaw's"], "Medium", "2006", "Storylines"],
    ["Which actor had played butcher Fred Elliott since 1994?", "John Savident", ["John Bowe", "John Thomson", "Roy Hudd"], "Medium", "2006", "Actors"],
    ["Which river received Fred Elliott's ashes in December 2006?", "The River Tame", ["The River Irwell", "The River Mersey", "The River Dee"], "Hard", "2006", "Funerals"],
    ["Which McDonald purchased the Rovers Return following Fred Elliott's death?", "Steve McDonald", ["Jim McDonald", "Andy McDonald", "Liz McDonald"], "Easy", "2006", "Rovers Return"],
    ["Who became landlady of the Rovers Return after Steve McDonald bought it in 2006?", "Liz McDonald", ["Bev Unwin", "Shelley Unwin", "Bet Lynch"], "Easy", "2006", "Rovers Return"],
    ["Which builder forced David Platt's head underwater during a confrontation in 2006?", "Charlie Stubbs", ["Jason Grimshaw", "Nathan Cooper", "Bill Webster"], "Medium", "2006", "Storylines"],
    ["Which hairdresser revealed her affair with Charlie Stubbs to Tracy Barlow in 2006?", "Maria Sutherland", ["Violet Wilson", "Leanne Battersby", "Kelly Crabtree"], "Medium", "2006", "Relationships"],
    ["Which woman did Charlie Stubbs live with while conducting an affair with Maria in 2006?", "Tracy Barlow", ["Shelley Unwin", "Bev Unwin", "Sarah Platt"], "Easy", "2006", "Relationships"],
    ["Which Baldwin son's affair with his former stepmother devastated his father in 2006?", "Jamie Baldwin", ["Adam Barlow", "Warren Baldwin", "Mark Redman"], "Medium", "2006", "Relationships"],
    ["Who was the woman at the centre of Jamie and Danny Baldwin's bitter 2006 feud?", "Frankie Baldwin", ["Leanne Battersby", "Carla Connor", "Linda Baldwin"], "Medium", "2006", "Families"],
    ["Which character disappeared after threatening to jump from a viaduct in December 2006?", "Danny Baldwin", ["Jamie Baldwin", "Peter Barlow", "Liam Connor"], "Medium", "2006", "Storylines"],
    ["What illness did Cilla Battersby-Brown falsely claim was terminal in late 2006?", "Skin cancer", ["Lung cancer", "Breast cancer", "Leukaemia"], "Medium", "2006", "Comedy"],
    ["Which US state did Cilla Battersby-Brown fly to alone at the end of 2006?", "Florida", ["California", "Nevada", "Texas"], "Medium", "2006", "Departures"],
    ["Which Rovers worker returned to Weatherfield in 2006 pregnant with Charlie Stubbs's child?", "Shelley Unwin", ["Violet Wilson", "Bev Unwin", "Geena Gregory"], "Medium", "2006", "Families"],

    // =====================================================
    // YEAR 2007
    // =====================================================

    ["Which builder was killed by Tracy Barlow in January 2007?", "Charlie Stubbs", ["Jason Grimshaw", "Bill Webster", "Nathan Cooper"], "Easy", "2007", "Crime"],
    ["What defence did Tracy Barlow use after killing Charlie Stubbs in 2007?", "Self-defence", ["Accidental poisoning", "Mistaken identity", "Temporary amnesia"], "Easy", "2007", "Crime"],
    ["Which family member did Tracy confess to that Charlie's murder was planned?", "Her mother Deirdre", ["Her father Ken", "Her brother Peter", "Her daughter Amy"], "Medium", "2007", "Families"],
    ["What was Tracy Barlow's verdict at her 2007 murder trial?", "Guilty", ["Not guilty", "Not proven", "Case dismissed"], "Easy", "2007", "Crime"],
    ["What sentence did Tracy Barlow receive for murdering Charlie Stubbs?", "Life imprisonment", ["Community service", "Five years in prison", "A suspended sentence"], "Easy", "2007", "Crime"],
    ["Which Platt teenager lied to help Tracy Barlow get bail during her murder case?", "David Platt", ["Sarah Platt", "Nick Tilsley", "Bethany Platt"], "Medium", "2007", "Crime"],
    ["Which Barlow returned to Weatherfield shortly before Charlie Stubbs died?", "Peter Barlow", ["Adam Barlow", "Daniel Osbourne", "Susan Barlow"], "Medium", "2007", "Returns"],
    ["Which Rovers barmaid lost a baby after an ectopic pregnancy in January 2007?", "Violet Wilson", ["Michelle Connor", "Liz McDonald", "Bev Unwin"], "Medium", "2007", "Storylines"],
    ["Which young resident discovered a buried Second World War bomb with a metal detector in 2007?", "Chesney Brown", ["David Platt", "Craig Harris", "Ryan Connor"], "Easy", "2007", "Comedy"],
    ["Where was the unexploded wartime bomb found that caused a 2007 evacuation?", "The Peacocks' garden", ["The Rovers cellar", "Underworld's storeroom", "The Corner Shop roof"], "Medium", "2007", "Community"],
    ["Which new family moved into Number 6 Coronation Street in March 2007?", "The Mortons", ["The Connors", "The Harrises", "The Malletts"], "Easy", "2007", "Arrivals"],
    ["What was the first name of the Morton family's father, who ran a kebab shop?", "Jerry", ["Darryl", "Wilf", "Paul"], "Easy", "2007", "Families"],
    ["What kind of food business did Jerry Morton open on Victoria Street?", "A kebab shop", ["A fish-and-chip shop", "A pizza restaurant", "A bakery"], "Medium", "2007", "Businesses"],
    ["Which two members of the Morton family were twins?", "Mel and Darryl", ["Jodie and Kayleigh", "Jerry and Wilf", "Ryan and Alex"], "Medium", "2007", "Families"],
    ["Which actor played Jerry Morton when the family arrived in 2007?", "Michael Starke", ["John Savident", "Craig Charles", "Ian Reddington"], "Medium", "2007", "Actors"],
    ["Which Rovers barmaid discovered that fiancé Sonny Dhillon had kissed Sean Tully?", "Michelle Connor", ["Violet Wilson", "Liz McDonald", "Bev Unwin"], "Medium", "2007", "Relationships"],
    ["Which character became romantically involved with Michelle Connor after her split from Sonny?", "Steve McDonald", ["Lloyd Mullaney", "Peter Barlow", "Dev Alahan"], "Easy", "2007", "Relationships"],
    ["Which factory worker died after falling down stairs during an illegal night shift in 2007?", "Kasia Barowicz", ["Wiki Dankowska", "Joanne Jackson", "Kelly Crabtree"], "Medium", "2007", "Storylines"],
    ["Where did Kasia Barowicz suffer her fatal fall in 2007?", "Underworld", ["The Rovers Return", "Roy's Rolls", "The Kabin"], "Medium", "2007", "Businesses"],
    ["Which Polish Underworld employee was asked to help cover up details of Kasia's death?", "Wiki Dankowska", ["Kasia Barowicz", "Fiz Brown", "Janice Battersby"], "Medium", "2007", "Storylines"],
    ["Which factory worker revealed she was an undocumented immigrant born in Liberia in 2007?", "Joanne Jackson", ["Kelly Crabtree", "Carla Connor", "Becky Granger"], "Medium", "2007", "Storylines"],
    ["Which former Battersby returned to Weatherfield in 2007 with a secret job as an escort?", "Leanne Battersby", ["Toyah Battersby", "Janice Battersby", "Cilla Brown"], "Easy", "2007", "Returns"],
    ["Which Connor brother dated Leanne Battersby before discovering her escort work?", "Liam Connor", ["Paul Connor", "Ryan Connor", "Tony Gordon"], "Medium", "2007", "Relationships"],
    ["Who locked Leanne Battersby in the boot of his car before a fatal crash in 2007?", "Paul Connor", ["Liam Connor", "Steve McDonald", "Charlie Stubbs"], "Medium", "2007", "Crime"],
    ["How did Underworld businessman Paul Connor die in 2007?", "In a car crash", ["In a factory fire", "From a heart attack", "In a boating accident"], "Easy", "2007", "Departures"],
    ["Which widow inherited Paul Connor's factory share after his death?", "Carla Connor", ["Michelle Connor", "Frankie Baldwin", "Leanne Battersby"], "Medium", "2007", "Businesses"],
    ["Who had been driving when Michelle Connor's partner Dean died in a crash years earlier?", "Paul Connor", ["Liam Connor", "Dean himself", "Steve McDonald"], "Medium", "2007", "Families"],
    ["Which of Ken Barlow's former partners returned in 2007 with their son Daniel?", "Denise Osbourne", ["Susan Barlow", "Deirdre Barlow", "Martha Fraser"], "Medium", "2007", "Returns"],
    ["What was the name of Ken Barlow's son with Denise Osbourne?", "Daniel", ["Simon", "Adam", "Peter"], "Easy", "2007", "Families"],
    ["Which woman slapped Denise Osbourne in the Rovers during her 2007 return?", "Deirdre Barlow", ["Blanche Hunt", "Audrey Roberts", "Rita Sullivan"], "Medium", "2007", "Relationships"],
    ["Who kidnapped baby Freddie Peacock during a 2007 arson storyline?", "Casey Carswell", ["Brenda Fearns", "Cilla Brown", "Tracy Barlow"], "Medium", "2007", "Crime"],
    ["Where was baby Freddie Peacock found after his 2007 abduction?", "In a park", ["At the railway station", "In a hospital", "Outside the Rovers"], "Medium", "2007", "Families"],
    ["Which member of the Peacock family was initially suspected of starting their house fire?", "Claire Peacock", ["Ashley Peacock", "Joshua Peacock", "Fred Elliott"], "Medium", "2007", "Crime"],
    ["Which teacher began dating Fiz Brown in 2007?", "John Stape", ["Martin Platt", "Roger Stiles", "Tony Gordon"], "Easy", "2007", "Relationships"],
    ["Which Webster teenager secretly had an affair with teacher John Stape in 2007?", "Rosie Webster", ["Sophie Webster", "Sarah Platt", "Kayleigh Morton"], "Easy", "2007", "Relationships"],
    ["Which couple celebrated their golden wedding anniversary in August 2007?", "Jack and Vera Duckworth", ["Ken and Deirdre Barlow", "Kevin and Sally Webster", "Roy and Hayley Cropper"], "Easy", "2007", "Families"],
    ["Which grandson of Jack and Vera Duckworth arrived in 2007 and stole Jack's identity?", "Paul Clayton", ["Tyrone Dobbs", "Chesney Brown", "Craig Harris"], "Medium", "2007", "Crime"],
    ["Which Rovers barman agreed to father Violet Wilson's baby in 2007?", "Sean Tully", ["Jamie Baldwin", "Jason Grimshaw", "Lloyd Mullaney"], "Easy", "2007", "Families"],
    ["Who planned to raise Violet Wilson's baby with her, upsetting its biological father Sean Tully?", "Jamie Baldwin", ["Jason Grimshaw", "Todd Grimshaw", "Liam Connor"], "Medium", "2007", "Families"],
    ["Which friend accompanied Steve McDonald on a holiday to Malta in 2007?", "Eileen Grimshaw", ["Lloyd Mullaney", "Liz McDonald", "Michelle Connor"], "Medium", "2007", "Travel"],
    ["Which woman discovered that she had an adult son named Christian Gatley in 2007?", "Hayley Cropper", ["Eileen Grimshaw", "Rita Sullivan", "Bev Unwin"], "Medium", "2007", "Families"],
    ["Which woman did Norris Cole propose to in September 2007?", "Rita Sullivan", ["Blanche Hunt", "Doreen Fenwick", "Betty Williams"], "Medium", "2007", "Relationships"],
    ["To which American city did Cilla Battersby-Brown move in October 2007?", "Las Vegas", ["Los Angeles", "New York", "Miami"], "Easy", "2007", "Departures"],
    ["Which child accidentally took an Ecstasy tablet that David Platt had hidden in a doll in 2007?", "Bethany Platt", ["Sophie Webster", "Amy Barlow", "Kayleigh Morton"], "Easy", "2007", "Storylines"],
    ["Which Platt staged a suicide attempt to disrupt his sister's wedding in October 2007?", "David Platt", ["Nick Tilsley", "Martin Platt", "Todd Grimshaw"], "Easy", "2007", "Weddings"],
    ["Whom did Sarah Platt marry on Halloween 2007 despite David's interference?", "Jason Grimshaw", ["Todd Grimshaw", "Nick Tilsley", "Liam Connor"], "Easy", "2007", "Weddings"],
    ["Who loosened scaffolding bolts, causing Jason Grimshaw to fall in October 2007?", "David Platt", ["Charlie Stubbs", "Todd Grimshaw", "Craig Harris"], "Medium", "2007", "Crime"],
    ["Which family member invited Todd Grimshaw back to Weatherfield to disrupt Sarah's wedding?", "David Platt", ["Eileen Grimshaw", "Jason Grimshaw", "Gail Platt"], "Medium", "2007", "Families"],
    ["Which Italian city did Sarah Platt move to with Bethany at the end of 2007?", "Milan", ["Rome", "Florence", "Turin"], "Easy", "2007", "Departures"],
    ["Which husband refused to accompany Sarah Platt when she left for Italy?", "Jason Grimshaw", ["Todd Grimshaw", "Peter Barlow", "Steve McDonald"], "Medium", "2007", "Relationships"],
    ["Who married Liz McDonald on New Year's Eve 2007?", "Vernon Tomlin", ["Jim McDonald", "Lloyd Mullaney", "Harry Mason"], "Easy", "2007", "Weddings"],
    ["Which salon worker was offered a job in Milan that Sarah Platt later took for herself?", "David Platt", ["Maria Sutherland", "Audrey Roberts", "Candice Stowe"], "Medium", "2007", "Departures"],
    ["Which businessman began dating Carla Connor in 2007, unsettling Liam Connor?", "Tony Gordon", ["Danny Baldwin", "Dev Alahan", "Roger Stiles"], "Medium", "2007", "Relationships"],
    ["Which hairdresser gave Liam Connor a dog named Ozzy in 2007?", "Maria Sutherland", ["Rosie Webster", "Violet Wilson", "Leanne Battersby"], "Medium", "2007", "Relationships"]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(1401 + index).padStart(4, '0'),
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
    questions[0].id !== 'tv_1401' ||
    questions[99].id !== 'tv_1500' ||
    questions.filter(q => q.tags.includes('2006')).length !== 46 ||
    questions.filter(q => q.tags.includes('2007')).length !== 54
) {
    throw new Error('Pack 174: incorrect count, years or ID range');
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
        throw new Error('Pack 174: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
