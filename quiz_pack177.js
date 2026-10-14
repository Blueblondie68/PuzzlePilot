// quiz_pack177.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2012 and 2013
// 100 questions: tv_1701 to tv_1800
// quiz_bank.js stays unchanged until Render is behaving.

const facts = [

    // =====================================================
    // YEAR 2012
    // =====================================================

    ["Who exposed Tracy Barlow's lie about her miscarriage at her 2012 wedding reception?", "Becky McDonald", ["Carla Connor", "Leanne Barlow", "Kylie Platt"], "Easy", "2012", "Storylines"],
    ["What evidence proved that Tracy Barlow had miscarried before her fall in early 2012?", "Her medical records", ["A witness's photograph", "A recorded telephone call", "A hospital CCTV recording"], "Medium", "2012", "Storylines"],
    ["Which Caribbean island did Becky McDonald leave for in January 2012?", "Barbados", ["Jamaica", "St Lucia", "Antigua"], "Medium", "2012", "Departures"],
    ["Who left Weatherfield with Becky McDonald in January 2012?", "Danny Stratton", ["Steve McDonald", "Lloyd Mullaney", "Nick Tilsley"], "Medium", "2012", "Departures"],
    ["Whom did Steve McDonald marry in January 2012 before ending the marriage hours later?", "Tracy Barlow", ["Becky McDonald", "Michelle Connor", "Leanne Barlow"], "Easy", "2012", "Weddings"],
    ["What was the verdict in Frank Foster's rape trial in February 2012?", "Not guilty", ["Guilty", "The jury failed to agree", "The case was dismissed before trial"], "Easy", "2012", "Crime"],
    ["Where was Frank Foster found murdered in March 2012?", "Underworld factory", ["The Rovers Return", "Nick's Bistro", "Street Cars"], "Easy", "2012", "Crime"],
    ["Who was revealed to have murdered Frank Foster in 2012?", "Anne Foster", ["Carla Connor", "Sally Webster", "Jenny Sumner"], "Easy", "2012", "Crime"],
    ["Who falsely confessed to killing Frank Foster to protect Carla Connor?", "Peter Barlow", ["Rob Donovan", "Nick Tilsley", "Steve McDonald"], "Medium", "2012", "Crime"],
    ["Which businesswoman secretly worked with Frank Foster to take control of Underworld?", "Jenny Sumner", ["Michelle Connor", "Julie Carp", "Beth Tinker"], "Medium", "2012", "Businesses"],
    ["What type of television programme did Rosie Webster leave to take part in during 2012?", "A reality television show", ["A soap opera", "A cooking competition", "A period drama"], "Easy", "2012", "Departures"],
    ["Which former conman resumed his romance with Audrey Roberts in 2012?", "Lewis Archer", ["Joe McIntyre", "Rick Neelan", "Frank Foster"], "Easy", "2012", "Relationships"],
    ["Which longtime Rovers favourite was reported to have died in April 2012?", "Betty Williams", ["Rita Sullivan", "Emily Bishop", "Sylvia Goodwin"], "Easy", "2012", "Departures"],
    ["Which actress was famous for portraying Betty Williams?", "Betty Driver", ["Jean Alexander", "Doris Speed", "Pat Phoenix"], "Medium", "2012", "Actors"],
    ["Which estranged father returned to Weatherfield and became involved in Tommy Duckworth's life in 2012?", "Terry Duckworth", ["Bill Webster", "Kevin Webster", "Jim McDonald"], "Easy", "2012", "Families"],
    ["What was the name of Terry Duckworth's proposed nightclub in 2012?", "Se7enth Hea7en", ["Valentino's", "The Joinery", "The Flying Horse"], "Hard", "2012", "Businesses"],
    ["Which loan shark pursued Tommy Duckworth over a debt in 2012?", "Rick Neelan", ["Frank Foster", "Karl Munro", "Rob Donovan"], "Medium", "2012", "Crime"],
    ["What did Terry Duckworth take from Tommy before disappearing again in 2012?", "£9,000", ["£900", "£3,000", "£20,000"], "Medium", "2012", "Money"],
    ["Who actually assaulted Tina McIntyre during Tommy's debt troubles in 2012?", "Terry Duckworth", ["Rick Neelan", "Tyrone Dobbs", "Jason Grimshaw"], "Medium", "2012", "Crime"],
    ["Which mechanic suffered domestic abuse from his partner Kirsty Soames in 2012?", "Tyrone Dobbs", ["Tommy Duckworth", "Kevin Webster", "Luke Britton"], "Easy", "2012", "Storylines"],
    ["What was Kirsty Soames's profession before she was suspended in 2012?", "Police officer", ["Nurse", "Solicitor", "Social worker"], "Easy", "2012", "Occupations"],
    ["What name did Tyrone Dobbs and Kirsty Soames give their daughter, born in 2012?", "Ruby", ["Hope", "Lily", "Amy"], "Easy", "2012", "Families"],
    ["Where did Kirsty Soames give birth to Ruby in September 2012?", "The Rovers Return", ["Underworld", "The Kabin", "Nick's Bistro"], "Medium", "2012", "Families"],
    ["What did Kirsty Soames leave blank when registering Ruby's birth in 2012?", "The father's name", ["The baby's surname", "The baby's date of birth", "The mother's address"], "Medium", "2012", "Families"],
    ["Which woman discovered that a suspected pregnancy was actually an ovarian growth in 2012?", "Julie Carp", ["Fiz Stape", "Maria Connor", "Eileen Grimshaw"], "Medium", "2012", "Storylines"],
    ["Which medical procedure left Julie Carp unable to have children in 2012?", "An operation on her ovary", ["An appendectomy", "A kidney transplant", "An emergency caesarean"], "Medium", "2012", "Storylines"],
    ["How did Paul Kershaw's wife Lesley die in 2012?", "She was electrocuted", ["She drowned", "She fell down stairs", "She was killed in a road accident"], "Medium", "2012", "Departures"],
    ["Which resident was in a relationship with firefighter Paul Kershaw in 2012?", "Eileen Grimshaw", ["Gail McIntyre", "Sally Webster", "Audrey Roberts"], "Easy", "2012", "Relationships"],
    ["Whom did Rita Sullivan marry in June 2012?", "Dennis Tanner", ["Norris Cole", "Ken Barlow", "Roy Cropper"], "Easy", "2012", "Weddings"],
    ["Which married shopkeeper began an affair with Karl Munro in 2012?", "Sunita Alahan", ["Maria Connor", "Carla Connor", "Tracy Barlow"], "Easy", "2012", "Relationships"],
    ["Who was Karl Munro's partner before his affair with Sunita Alahan came to light?", "Stella Price", ["Gloria Price", "Leanne Barlow", "Eva Price"], "Easy", "2012", "Relationships"],
    ["How was newcomer Gloria Price related to Stella Price?", "She was Stella's mother", ["She was Stella's sister", "She was Stella's aunt", "She was Stella's cousin"], "Easy", "2012", "Families"],
    ["Why was the Rovers stripped of a 'Pub of the Year' award in 2012?", "Gloria Price had forged customer comments", ["It had failed a hygiene inspection", "It had served drinks after closing time", "It had entered under a false pub name"], "Medium", "2012", "Rovers Return"],
    ["Which woman suffered a miscarriage in July 2012 while expecting Gary Windass's child?", "Izzy Armstrong", ["Katy Armstrong", "Fiz Stape", "Tina McIntyre"], "Medium", "2012", "Families"],
    ["Who initially offered to be a surrogate for her sister Izzy Armstrong in 2012?", "Katy Armstrong", ["Tina McIntyre", "Anna Windass", "Faye Windass"], "Easy", "2012", "Families"],
    ["Who agreed in September 2012 to carry a baby for Gary Windass and Izzy Armstrong?", "Tina McIntyre", ["Maria Connor", "Kylie Platt", "Sophie Webster"], "Easy", "2012", "Surrogacy"],
    ["How much money was Tina McIntyre offered for acting as a surrogate in 2012?", "£15,000", ["£5,000", "£10,000", "£25,000"], "Medium", "2012", "Money"],
    ["Which boyfriend strongly opposed Tina McIntyre's decision to become a surrogate?", "Tommy Duckworth", ["Jason Grimshaw", "David Platt", "Ryan Connor"], "Easy", "2012", "Relationships"],
    ["Which character arrived in July 2012 as Carla Connor's brother?", "Rob Donovan", ["Frank Foster", "Marcus Dent", "Chris Gray"], "Easy", "2012", "Arrivals"],
    ["Where had Rob Donovan been immediately before arriving in Weatherfield in 2012?", "Prison", ["The army", "Australia", "University"], "Medium", "2012", "Arrivals"],
    ["Which character returned in July 2012 as Michelle Connor's son?", "Ryan Connor", ["Dylan Wilson", "Simon Barlow", "Craig Tinker"], "Easy", "2012", "Returns"],
    ["Which illegal drug caused trouble for Ryan Connor after his 2012 return?", "Cocaine", ["Cannabis", "Heroin", "Ecstasy"], "Medium", "2012", "Storylines"],
    ["Who discovered in September 2012 that Jenna Kamara was his daughter?", "Lloyd Mullaney", ["Steve McDonald", "Dev Alahan", "Owen Armstrong"], "Medium", "2012", "Families"],
    ["Which former girlfriend did Ken Barlow encounter again on the school governors in 2012?", "Wendy Crozier", ["Martha Fraser", "Stephanie Beacham", "Valerie Barlow"], "Medium", "2012", "Returns"],
    ["Which pub worker had been Marcus Dent's boyfriend before they split in 2012?", "Sean Tully", ["Todd Grimshaw", "Jason Grimshaw", "Paul Kershaw"], "Easy", "2012", "Relationships"],
    ["Which hairdresser began a relationship with Marcus Dent in November 2012?", "Maria Connor", ["Natasha Blakeman", "Audrey Roberts", "Kylie Platt"], "Easy", "2012", "Relationships"],
    ["Whose Christmas Day wedding to Nick Tilsley failed to go ahead in 2012?", "Leanne Barlow", ["Eva Price", "Tracy Barlow", "Michelle Connor"], "Easy", "2012", "Weddings"],
    ["With whom did Nick Tilsley have a one-night stand on Christmas Day 2012?", "Kylie Platt", ["Carla Connor", "Becky McDonald", "Tina McIntyre"], "Easy", "2012", "Relationships"],
    ["Who was elected head of governors at Bessie Street School in September 2012?", "Ken Barlow", ["Brian Packham", "Norris Cole", "Roy Cropper"], "Medium", "2012", "Occupations"],

    // =====================================================
    // YEAR 2013
    // =====================================================

    ["Which couple finally married in January 2013 after their Christmas wedding collapsed?", "Nick Tilsley and Leanne Barlow", ["Peter Barlow and Carla Connor", "David Platt and Kylie Turner", "Steve McDonald and Michelle Connor"], "Easy", "2013", "Weddings"],
    ["After discovering she was pregnant in 2013, which two men did Kylie Platt fear might be the father?", "David Platt and Nick Tilsley", ["Tommy Duckworth and Jason Grimshaw", "Peter Barlow and Steve McDonald", "Rob Donovan and Ryan Connor"], "Easy", "2013", "Families"],
    ["Who arrived in January 2013 as Faye Windass's biological father?", "Tim Metcalfe", ["Owen Armstrong", "Eddie Windass", "Rick Neelan"], "Easy", "2013", "Arrivals"],
    ["Which physiotherapist began a relationship with Sophie Webster in 2013?", "Jenna Kamara", ["Sian Powers", "Maddie Heath", "Katy Armstrong"], "Medium", "2013", "Relationships"],
    ["What was the name of Gloria Price's wealthy fiancé who arrived in 2013?", "Eric Babbage", ["Lewis Archer", "Dennis Tanner", "Milton Fanshaw"], "Medium", "2013", "Arrivals"],
    ["Which actor played Gloria Price's fiancé Eric Babbage?", "Timothy West", ["Philip Lowrie", "John Michie", "Bill Tarmey"], "Medium", "2013", "Actors"],
    ["How much money did Lewis Archer steal from Gail McIntyre before fleeing in 2013?", "£40,000", ["£4,000", "£10,000", "£100,000"], "Medium", "2013", "Money"],
    ["Which secret did Lewis Archer use to blackmail Kylie Platt in 2013?", "She had slept with Nick Tilsley", ["She had stolen from the Rovers", "She had forged David's signature", "She had sold Max's belongings"], "Medium", "2013", "Crime"],
    ["Who stopped her planned wedding to Tyrone Dobbs and exposed his affair in 2013?", "Kirsty Soames", ["Fiz Stape", "Maria Connor", "Sally Webster"], "Easy", "2013", "Weddings"],
    ["With whom was Tyrone Dobbs secretly in love during his failed wedding to Kirsty Soames?", "Fiz Stape", ["Tina McIntyre", "Maria Connor", "Kylie Platt"], "Easy", "2013", "Relationships"],
    ["Which character falsely accused Tyrone Dobbs of being the abusive partner in 2013?", "Kirsty Soames", ["Sally Webster", "Tracy Barlow", "Carla Connor"], "Easy", "2013", "Crime"],
    ["Where did Kirsty Soames finally admit that she, not Tyrone, had been the abuser?", "In court", ["At the Rovers", "At the police station", "At the garage"], "Easy", "2013", "Crime"],
    ["What happened to Tyrone and Kirsty's daughter Ruby when Tyrone was arrested in 2013?", "She went into temporary foster care", ["She went to live with Rita", "She was sent to boarding school", "She moved abroad with Kirsty"], "Medium", "2013", "Families"],
    ["Who deliberately set fire to the Rovers Return in March 2013?", "Karl Munro", ["Jason Grimshaw", "Dev Alahan", "Rob Donovan"], "Easy", "2013", "Crime"],
    ["Which firefighter died after entering the burning Rovers Return in 2013?", "Toni Griffiths", ["Paul Kershaw", "Kirsty Soames", "Emma Watts"], "Medium", "2013", "Departures"],
    ["Who was wrongly suspected of starting the Rovers fire in 2013?", "Sunita Alahan", ["Stella Price", "Eileen Grimshaw", "Gloria Price"], "Easy", "2013", "Crime"],
    ["How did Karl Munro murder Sunita Alahan in hospital after the 2013 Rovers fire?", "He removed her breathing tube", ["He poisoned her food", "He smothered her with a pillow", "He tampered with her medication"], "Medium", "2013", "Crime"],
    ["Which shopkeeper tried to clear his former wife Sunita's name after the Rovers fire?", "Dev Alahan", ["Nick Tilsley", "Steve McDonald", "Norris Cole"], "Easy", "2013", "Families"],
    ["Who was trapped upstairs in the Rovers during the 2013 blaze?", "Stella Price", ["Rita Sullivan", "Sally Webster", "Mary Taylor"], "Easy", "2013", "Storylines"],
    ["Which firefighter became engaged to Eileen Grimshaw in March 2013?", "Paul Kershaw", ["Karl Munro", "Owen Armstrong", "Jim McDonald"], "Medium", "2013", "Relationships"],
    ["Which Coronation Street pub reopened after the fire damage was repaired in 2013?", "The Rovers Return", ["The Flying Horse", "The Weatherfield Arms", "The Joinery"], "Easy", "2013", "Businesses"],
    ["Which teenager's account of seeing Karl Munro at the Rovers helped expose his arson?", "Craig Tinker", ["Simon Barlow", "Chesney Brown", "Ryan Connor"], "Easy", "2013", "Crime"],
    ["Who was Craig Tinker's mother when his role in the Rovers fire came to light?", "Beth Tinker", ["Julie Carp", "Katy Armstrong", "Anna Windass"], "Easy", "2013", "Families"],
    ["Whom did Stella Price marry shortly before the truth about the Rovers fire emerged?", "Karl Munro", ["Jason Grimshaw", "Steve McDonald", "Lewis Archer"], "Easy", "2013", "Weddings"],
    ["What prison sentence did Karl Munro receive for his crimes in 2013?", "Twenty-five years", ["Ten years", "Fifteen years", "Life with no minimum term stated"], "Medium", "2013", "Crime"],
    ["Which woman gave birth to Gary and Izzy's baby as their surrogate in May 2013?", "Tina McIntyre", ["Katy Armstrong", "Fiz Stape", "Maria Connor"], "Easy", "2013", "Surrogacy"],
    ["What name did Gary Windass and Izzy Armstrong choose for their son born in 2013?", "Jake", ["Jack", "Joseph", "Max"], "Easy", "2013", "Families"],
    ["Who was the biological father of the baby carried by Tina McIntyre in 2013?", "Gary Windass", ["Tommy Duckworth", "David Platt", "Tyrone Dobbs"], "Easy", "2013", "Families"],
    ["Who was the intended mother of the baby Tina McIntyre carried in 2013?", "Izzy Armstrong", ["Katy Armstrong", "Anna Windass", "Faye Windass"], "Easy", "2013", "Families"],
    ["Why did baby Jake need specialist hospital care after his birth in 2013?", "He was born prematurely", ["He was injured in a car crash", "He had been born at home without help", "He had contracted measles"], "Easy", "2013", "Families"],
    ["Which expectant father made an unwanted romantic advance towards his surrogate Tina in 2013?", "Gary Windass", ["Tommy Duckworth", "Peter Barlow", "Nick Tilsley"], "Medium", "2013", "Relationships"],
    ["What name did Tina McIntyre briefly give the surrogate baby when she decided to keep him?", "Joe", ["Jack", "Max", "Dylan"], "Medium", "2013", "Surrogacy"],
    ["What health problem required baby Jake to undergo surgery in 2013?", "An intestinal infection", ["A broken leg", "A heart murmur", "A damaged kidney"], "Medium", "2013", "Storylines"],
    ["What did Tina McIntyre ultimately decide to do with baby Jake in 2013?", "Hand him over to Gary and Izzy", ["Take him to Spain", "Leave him in foster care", "Give him to Tommy's father"], "Easy", "2013", "Surrogacy"],
    ["How was newcomer Sinead Tinker related to Beth Tinker in 2013?", "She was Beth's niece", ["She was Beth's daughter", "She was Beth's sister", "She was Beth's cousin"], "Medium", "2013", "Families"],
    ["Which young father began a relationship with Sinead Tinker in 2013?", "Chesney Brown", ["Ryan Connor", "Gary Windass", "Jason Grimshaw"], "Easy", "2013", "Relationships"],
    ["Which Connor family member had an affair with Katy Armstrong in 2013?", "Ryan Connor", ["Liam Connor", "Paul Connor", "Rob Donovan"], "Medium", "2013", "Relationships"],
    ["What type of cancer was Hayley Cropper diagnosed with in 2013?", "Pancreatic cancer", ["Lung cancer", "Breast cancer", "Bowel cancer"], "Easy", "2013", "Storylines"],
    ["Which character was Hayley Cropper's husband throughout her 2013 cancer storyline?", "Roy Cropper", ["Brian Packham", "Dennis Tanner", "Ken Barlow"], "Easy", "2013", "Relationships"],
    ["What devastating news did Hayley Cropper receive following surgery in 2013?", "Her cancer was terminal", ["Her diagnosis had been mistaken", "Her tumour was benign", "Her treatment had cured the disease"], "Easy", "2013", "Storylines"],
    ["What name did Kylie and David Platt give their baby daughter born in August 2013?", "Lily", ["Ruby", "Hope", "Bethany"], "Easy", "2013", "Families"],
    ["Who helped deliver Kylie Platt's daughter at home in 2013?", "Gail McIntyre", ["Audrey Roberts", "Anna Windass", "Rita Sullivan"], "Medium", "2013", "Families"],
    ["Whose paternity of Lily Platt was eventually confirmed by a DNA test in 2013?", "David Platt", ["Nick Tilsley", "Jason Grimshaw", "Peter Barlow"], "Easy", "2013", "Families"],
    ["Who was left with a brain injury after a car crash involving David Platt in August 2013?", "Nick Tilsley", ["Peter Barlow", "Steve McDonald", "Tommy Duckworth"], "Easy", "2013", "Storylines"],
    ["Which character caused the 2013 crash while trying to stop Nick revealing his affair with Kylie?", "David Platt", ["Gary Windass", "Tyrone Dobbs", "Rob Donovan"], "Medium", "2013", "Crime"],
    ["Which former Rovers landlady returned in October 2013 as the pub's joint owner?", "Liz McDonald", ["Bet Lynch", "Natalie Barnes", "Bev Unwin"], "Easy", "2013", "Returns"],
    ["Who joined his mother Liz McDonald in buying the Rovers in 2013?", "Steve McDonald", ["Andy McDonald", "Jim McDonald", "Lloyd Mullaney"], "Easy", "2013", "Businesses"],
    ["Which Grimshaw son returned from London to live in Weatherfield in November 2013?", "Todd Grimshaw", ["Jason Grimshaw", "Billy Grimshaw", "Ryan Connor"], "Easy", "2013", "Returns"],
    ["Whom did Peter Barlow marry in December 2013?", "Carla Connor", ["Tina McIntyre", "Leanne Barlow", "Michelle Connor"], "Easy", "2013", "Weddings"],
    ["With whom did Peter Barlow begin an affair at the end of 2013?", "Tina McIntyre", ["Kylie Platt", "Maria Connor", "Sophie Webster"], "Easy", "2013", "Relationships"],
    ["Which builder was confronted by Owen Armstrong over an unpaid debt in October 2013?", "Pat Phelan", ["Terry Duckworth", "Frank Foster", "Charlie Stubbs"], "Medium", "2013", "Arrivals"]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(1701 + index).padStart(4, '0'),
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
    questions[0].id !== 'tv_1701' ||
    questions[99].id !== 'tv_1800' ||
    questions.filter(q => q.tags.includes('2012')).length !== 49 ||
    questions.filter(q => q.tags.includes('2013')).length !== 51
) {
    throw new Error('Pack 177: incorrect count, years or ID range');
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
        throw new Error('Pack 177: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
