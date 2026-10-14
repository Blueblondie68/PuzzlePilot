// quiz_pack176.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2010 and 2011
// 100 questions: tv_1601 to tv_1700
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [

    // =====================================================
    // YEAR 2010
    // =====================================================

    ["Which man did Gail Platt marry in January 2010?", "Joe McIntyre", ["Phil Nail", "Richard Hillman", "Lewis Archer"], "Easy", "2010", "Weddings"],
    ["In which lake did Joe McIntyre drown after trying to fake his death?", "Lake Windermere", ["Ullswater", "Coniston Water", "Derwentwater"], "Medium", "2010", "Storylines"],
    ["Which loan shark was Joe McIntyre trying to escape when he planned to fake his death?", "Rick Neelan", ["Tony Gordon", "Frank Foster", "Robbie Sloane"], "Medium", "2010", "Crime"],
    ["Who was charged with the murder of Joe McIntyre despite being innocent?", "Gail McIntyre", ["Tina McIntyre", "Audrey Roberts", "Natasha Blakeman"], "Easy", "2010", "Crime"],
    ["What was the verdict at Gail McIntyre's murder trial in 2010?", "Not guilty", ["Guilty", "Not proven", "The jury could not agree"], "Easy", "2010", "Crime"],
    ["Which resident was Joe McIntyre's daughter?", "Tina McIntyre", ["Natasha Blakeman", "Sophie Webster", "Rosie Webster"], "Easy", "2010", "Families"],
    ["Which two teenage friends began a romantic relationship in 2010?", "Sophie Webster and Sian Powers", ["Rosie Webster and Katy Armstrong", "Tina McIntyre and Kylie Turner", "Maria Connor and Julie Carp"], "Easy", "2010", "Relationships"],
    ["Which Webster daughter began a relationship with Sian Powers in 2010?", "Sophie", ["Rosie", "Sarah", "Amy"], "Easy", "2010", "Relationships"],
    ["Which former schoolteacher assumed the identity of Colin Fishwick to find work in 2010?", "John Stape", ["Brian Packham", "Peter Barlow", "Graeme Proctor"], "Easy", "2010", "Crime"],
    ["Which former teaching colleague discovered John Stape's false identity in 2010?", "Charlotte Hoyle", ["Fiz Stape", "Kylie Turner", "Natasha Blakeman"], "Medium", "2010", "Storylines"],
    ["Which sharp-tongued Coronation Street favourite died while visiting Portugal in 2010?", "Blanche Hunt", ["Betty Williams", "Rita Sullivan", "Emily Bishop"], "Easy", "2010", "Departures"],
    ["Which actress was best known for playing Blanche Hunt?", "Maggie Jones", ["Anne Kirkbride", "Barbara Knox", "Jean Alexander"], "Medium", "2010", "Actors"],
    ["Which Barlow was temporarily allowed out of prison to attend Blanche Hunt's funeral in 2010?", "Tracy Barlow", ["Peter Barlow", "Adam Barlow", "Ken Barlow"], "Medium", "2010", "Families"],
    ["Which convicted murderer escaped prison and held Carla Connor hostage in 2010?", "Tony Gordon", ["John Stape", "Frank Foster", "Richard Hillman"], "Easy", "2010", "Crime"],
    ["Which other woman was held hostage at Underworld alongside Carla Connor in 2010?", "Hayley Cropper", ["Leanne Battersby", "Maria Connor", "Michelle Connor"], "Medium", "2010", "Crime"],
    ["What was the name of Tony Gordon's accomplice in his final Underworld siege?", "Robbie Sloane", ["Jimmy Dockerson", "Rick Neelan", "Joe Carter"], "Medium", "2010", "Crime"],
    ["Where did Tony Gordon die after starting a fire during a siege in 2010?", "Underworld factory", ["The Rovers Return", "The Joinery", "Street Cars"], "Easy", "2010", "Departures"],
    ["Which actor played villain Tony Gordon?", "Gray O'Brien", ["Brian Capron", "Graeme Hawley", "Andrew Lancel"], "Medium", "2010", "Actors"],
    ["Which hairdresser began a relationship with Graeme Proctor in 2010?", "Tina McIntyre", ["Maria Connor", "Natasha Blakeman", "Rosie Webster"], "Easy", "2010", "Relationships"],
    ["Which Platt was diagnosed with possible epilepsy after blacking out at the wheel in 2010?", "David Platt", ["Nick Tilsley", "Gail Platt", "Sarah Platt"], "Medium", "2010", "Storylines"],
    ["Who was struck by David Platt's car during a blackout in 2010?", "Graeme Proctor", ["Jason Grimshaw", "Steve McDonald", "Tyrone Dobbs"], "Medium", "2010", "Storylines"],
    ["Which newcomer, played by Paula Lane, first appeared in 2010?", "Kylie Turner", ["Stella Price", "Kirsty Soames", "Eva Price"], "Easy", "2010", "Arrivals"],
    ["What was the name of Kylie Turner's young son, whom she offered to Steve and Becky McDonald?", "Max", ["Simon", "Chesney", "Dylan"], "Easy", "2010", "Families"],
    ["How was Kylie Turner related to Becky McDonald when she arrived in 2010?", "She was Becky's half-sister", ["She was Becky's cousin", "She was Becky's niece", "She was Becky's stepsister"], "Medium", "2010", "Families"],
    ["Which hairdresser falsely claimed to Nick Tilsley that she was still pregnant in 2010?", "Natasha Blakeman", ["Maria Connor", "Tina McIntyre", "Kylie Turner"], "Medium", "2010", "Relationships"],
    ["Why did Gail McIntyre lose her job at the medical centre in 2010?", "She accessed Natasha Blakeman's medical records", ["She stole prescription medicine", "She argued with a patient", "She missed an important examination"], "Medium", "2010", "Occupations"],
    ["Which established couple had a legally recognised wedding in August 2010?", "Roy and Hayley Cropper", ["Ken and Deirdre Barlow", "Kevin and Sally Webster", "Steve and Becky McDonald"], "Easy", "2010", "Weddings"],
    ["Where did Roy and Hayley Cropper hold their legally recognised wedding in 2010?", "Shawbrooke Country House Hotel", ["The Rovers Return", "Weatherfield Register Office", "Victoria Court"], "Hard", "2010", "Weddings"],
    ["Which veteran Coronation Street character died in 2010 after being diagnosed with lymphoma?", "Jack Duckworth", ["Ken Barlow", "Roy Cropper", "Norris Cole"], "Easy", "2010", "Departures"],
    ["Which deceased character appeared as a vision to Jack Duckworth in his final scene?", "Vera Duckworth", ["Bet Lynch", "Blanche Hunt", "Hilda Ogden"], "Easy", "2010", "Storylines"],
    ["Which couple were raising baby Jack when a secret about his paternity emerged in 2010?", "Tyrone and Molly Dobbs", ["Kevin and Sally Webster", "Steve and Becky McDonald", "Dev and Sunita Alahan"], "Easy", "2010", "Families"],
    ["Who was revealed to be baby Jack Dobbs's biological father in 2010?", "Kevin Webster", ["Tyrone Dobbs", "Tony Gordon", "Peter Barlow"], "Easy", "2010", "Families"],
    ["Which Coronation Street anniversary was celebrated in December 2010?", "The fiftieth", ["The fortieth", "The sixtieth", "The thirtieth"], "Easy", "2010", "TV History"],
    ["What disaster struck Coronation Street during the fiftieth-anniversary week?", "A tram crashed onto the Street", ["A passenger plane hit the Rovers", "A train derailed at the station", "A flood swept away the factory"], "Easy", "2010", "Storylines"],
    ["Which bar suffered a gas explosion that triggered the 2010 tram disaster?", "The Joinery", ["The Rovers Return", "The Flying Horse", "Nick's Bistro"], "Medium", "2010", "Businesses"],
    ["Which butcher died when the damaged Joinery collapsed during the tram disaster?", "Ashley Peacock", ["Fred Elliott", "Duggie Ferguson", "Kirk Sutherland"], "Easy", "2010", "Departures"],
    ["Which mother died beneath the wreckage of the Corner Shop after the tram crash?", "Molly Dobbs", ["Claire Peacock", "Sunita Alahan", "Becky McDonald"], "Easy", "2010", "Departures"],
    ["Which Kabin resident was trapped beneath debris after the 2010 tram crash?", "Rita Sullivan", ["Emily Bishop", "Mary Taylor", "Betty Williams"], "Easy", "2010", "Storylines"],
    ["Which youngster was rescued from a burning house by Jason Grimshaw after the tram crash?", "Simon Barlow", ["Chesney Brown", "Ryan Connor", "Joshua Peacock"], "Medium", "2010", "Storylines"],
    ["Which couple married beside a hospital bed during the 2010 tram disaster?", "Peter Barlow and Leanne Battersby", ["Steve McDonald and Becky Granger", "Roy Cropper and Hayley Patterson", "Nick Tilsley and Natasha Blakeman"], "Easy", "2010", "Weddings"],
    ["Which baby girl was born prematurely during the fiftieth-anniversary tram storyline?", "Hope Stape", ["Amy Barlow", "Ruby Dobbs", "Faye Butler"], "Easy", "2010", "Families"],
    ["Who was the father of Fiz Stape's baby Hope, born in December 2010?", "John Stape", ["Tyrone Dobbs", "Chesney Brown", "Peter Barlow"], "Easy", "2010", "Families"],
    ["Which woman did John Stape strike with a hammer during the tram disaster week?", "Charlotte Hoyle", ["Joy Fishwick", "Fiz Stape", "Natasha Blakeman"], "Medium", "2010", "Crime"],
    ["To whom did dying Molly Dobbs reveal Kevin Webster's paternity secret?", "Sally Webster", ["Tyrone Dobbs", "Sunita Alahan", "Rita Sullivan"], "Easy", "2010", "Families"],
    ["Which newspaper shop was wrecked by the tram during the 2010 anniversary?", "The Kabin", ["Bettabuy", "Prima Doner", "Comptons"], "Easy", "2010", "Businesses"],
    ["What was unusual about Coronation Street's fiftieth-anniversary episode on 9 December 2010?", "It was broadcast live", ["It was entirely animated", "It had no spoken dialogue", "It was screened in black and white"], "Medium", "2010", "TV History"],
    ["Which army recruit left Weatherfield for Afghanistan in 2010?", "Gary Windass", ["David Platt", "Jason Grimshaw", "Ryan Connor"], "Medium", "2010", "Occupations"],
    ["Which couple had planned a move to France before the 2010 tram disaster?", "Ashley and Claire Peacock", ["Roy and Hayley Cropper", "Kevin and Sally Webster", "Dev and Sunita Alahan"], "Medium", "2010", "Departures"],

    // =====================================================
    // YEAR 2011
    // =====================================================

    ["Who confessed to attacking Tracy Barlow at the start of 2011?", "Claire Peacock", ["Becky McDonald", "Gail McIntyre", "Sally Webster"], "Easy", "2011", "Crime"],
    ["Which woman did Tracy Barlow falsely accuse of attacking her in early 2011?", "Becky McDonald", ["Claire Peacock", "Fiz Stape", "Kylie Turner"], "Easy", "2011", "Crime"],
    ["Which mother of Colin Fishwick died at John Stape's hands in January 2011?", "Joy Fishwick", ["Charlotte Hoyle", "Sylvia Goodwin", "Edna Hargreaves"], "Medium", "2011", "Crime"],
    ["What unusual prize did Kevin Webster win worth £200,000 in 2011?", "A scratch card jackpot", ["A television quiz prize", "A premium bonds payout", "A newspaper competition"], "Medium", "2011", "Money"],
    ["What was the name of Roy Cropper's outspoken mother, introduced in 2011?", "Sylvia Goodwin", ["Joy Fishwick", "Blanche Hunt", "Claudia Colby"], "Easy", "2011", "Families"],
    ["Which actress began playing Roy Cropper's mother Sylvia in 2011?", "Stephanie Cole", ["Maggie Smith", "Judy Cornwell", "Frances de la Tour"], "Medium", "2011", "Actors"],
    ["Which young girl entered Anna Windass's care in 2011 and was later adopted by her?", "Faye Butler", ["Amy Barlow", "Hope Stape", "Sian Powers"], "Easy", "2011", "Families"],
    ["Which actress first played Faye Butler in 2011?", "Ellie Leach", ["Brooke Vincent", "Sacha Parkinson", "Georgia May Foote"], "Medium", "2011", "Actors"],
    ["Which McDonald attempted an armed robbery at a building society in 2011?", "Jim McDonald", ["Steve McDonald", "Andy McDonald", "Tracy McDonald"], "Easy", "2011", "Crime"],
    ["What was Jim McDonald trying to raise money to buy when he attempted a robbery in 2011?", "The Rovers Return", ["Underworld", "Street Cars", "The Kabin"], "Medium", "2011", "Rovers Return"],
    ["Which young couple married in April 2011 and later lived at Number 8?", "David Platt and Kylie Turner", ["Tyrone Dobbs and Kirsty Soames", "Jason Grimshaw and Rosie Webster", "Graeme Proctor and Tina McIntyre"], "Easy", "2011", "Weddings"],
    ["Which holiday destination did David Platt and Kylie Turner visit after their 2011 wedding?", "Tenerife", ["Cyprus", "Malta", "Ibiza"], "Medium", "2011", "Travel"],
    ["Which woman did Graeme Proctor marry in 2011 to help her remain in Britain?", "Xin Chiang", ["Tina McIntyre", "Kylie Turner", "Sian Powers"], "Easy", "2011", "Weddings"],
    ["Who was Graeme Proctor's girlfriend when he married Xin for immigration reasons?", "Tina McIntyre", ["Rosie Webster", "Maria Connor", "Fiz Stape"], "Easy", "2011", "Relationships"],
    ["Why did Tina McIntyre eventually break up with Graeme Proctor in 2011?", "He fell in love with Xin", ["He moved to Australia", "He stole her savings", "He joined the army"], "Medium", "2011", "Relationships"],
    ["Which child was removed from Steve and Becky McDonald's care in 2011?", "Max Turner", ["Simon Barlow", "Jack Webster", "Joseph Brown"], "Easy", "2011", "Families"],
    ["Which couple took responsibility for Max Turner towards the end of 2011?", "David and Kylie Platt", ["Roy and Hayley Cropper", "Kevin and Sally Webster", "Peter and Leanne Barlow"], "Medium", "2011", "Families"],
    ["Which new manager of the Rovers Return arrived in June 2011?", "Stella Price", ["Bet Lynch", "Bev Unwin", "Natalie Barnes"], "Easy", "2011", "Arrivals"],
    ["Which actress began playing Stella Price in Coronation Street in 2011?", "Michelle Collins", ["Beverley Callard", "Sally Lindsay", "Sue Nicholls"], "Medium", "2011", "Actors"],
    ["Which longstanding resident was revealed to be Stella Price's daughter?", "Leanne Barlow", ["Tracy Barlow", "Carla Connor", "Becky McDonald"], "Easy", "2011", "Families"],
    ["Which woman arrived as another daughter of Stella Price in 2011?", "Eva Price", ["Kylie Platt", "Tina McIntyre", "Sian Powers"], "Easy", "2011", "Families"],
    ["Who was Stella Price's partner when she first appeared in 2011?", "Karl Munro", ["Peter Barlow", "Steve McDonald", "Frank Foster"], "Medium", "2011", "Relationships"],
    ["Which Coronation Street character returned in 2011 after being absent since 1968?", "Dennis Tanner", ["Jed Stone", "Ray Langton", "Reg Holdsworth"], "Easy", "2011", "Returns"],
    ["Which former Kabin owner invited homeless Dennis Tanner to stay with her in 2011?", "Rita Sullivan", ["Emily Bishop", "Mary Taylor", "Betty Williams"], "Medium", "2011", "Relationships"],
    ["Which actor returned to play Dennis Tanner in 2011?", "Philip Lowrie", ["Kenneth Cope", "Peter Baldwin", "Roy Hudd"], "Medium", "2011", "Actors"],
    ["Which longtime Battersby left Weatherfield in 2011 after years working at Underworld?", "Janice Battersby", ["Leanne Battersby", "Toyah Battersby", "Les Battersby"], "Easy", "2011", "Departures"],
    ["Which businessman bought a stake in Underworld in 2011 and was later accused of rape?", "Frank Foster", ["Tony Gordon", "Luke Strong", "Danny Baldwin"], "Medium", "2011", "Businesses"],
    ["Which woman reported Frank Foster for attempting to rape her before he assaulted Carla in 2011?", "Maria Connor", ["Michelle Connor", "Leanne Barlow", "Rosie Webster"], "Medium", "2011", "Crime"],
    ["Which Underworld boss was raped by fiancé Frank Foster in September 2011?", "Carla Connor", ["Maria Connor", "Kelly Crabtree", "Michelle Connor"], "Easy", "2011", "Storylines"],
    ["Which actor played businessman Frank Foster?", "Andrew Lancel", ["Gray O'Brien", "Brian Capron", "Graeme Hawley"], "Medium", "2011", "Actors"],
    ["Which Rovers manager was injured when Carla Connor crashed her car into the bookies in 2011?", "Stella Price", ["Liz McDonald", "Bev Unwin", "Betty Williams"], "Medium", "2011", "Storylines"],
    ["Which Barlow was arrested for attacking Frank Foster in September 2011?", "Peter Barlow", ["Ken Barlow", "Adam Barlow", "Simon Barlow"], "Medium", "2011", "Crime"],
    ["Which policewoman began a relationship with Tyrone Dobbs in 2011?", "Kirsty Soames", ["Emma Watts", "Claire Peacock", "Becky McDonald"], "Easy", "2011", "Relationships"],
    ["Which actress made her Coronation Street debut as Kirsty Soames in 2011?", "Natalie Gumede", ["Paula Lane", "Jennie McAlpine", "Georgia Taylor"], "Medium", "2011", "Actors"],
    ["Whose teenage sister became pregnant with Chesney Brown's baby in 2011?", "Izzy Armstrong's", ["Fiz Brown's", "Rosie Webster's", "Leanne Battersby's"], "Medium", "2011", "Families"],
    ["What was the name of Katy Armstrong and Chesney Brown's son, born in December 2011?", "Joseph", ["Jack", "Jake", "Joshua"], "Easy", "2011", "Families"],
    ["Which businessman was Katy Armstrong's father?", "Owen Armstrong", ["Dev Alahan", "Frank Foster", "Tony Gordon"], "Easy", "2011", "Families"],
    ["Which of Roy Cropper's friends was jailed after being wrongly accused of Colin Fishwick's murder?", "Fiz Stape", ["Hayley Cropper", "Anna Windass", "Becky McDonald"], "Easy", "2011", "Crime"],
    ["Which relative of Fiz Stape was held captive with the Hoyles by John Stape in 2011?", "Chesney Brown", ["Kirk Sutherland", "Tyrone Dobbs", "Peter Barlow"], "Medium", "2011", "Crime"],
    ["Which little girl did John Stape take with him when he fled in June 2011?", "Hope Stape", ["Faye Butler", "Amy Barlow", "Bethany Platt"], "Medium", "2011", "Families"],
    ["Which former victim did John Stape kidnap again in October 2011?", "Rosie Webster", ["Sarah Platt", "Sian Powers", "Tina McIntyre"], "Easy", "2011", "Crime"],
    ["How did John Stape die in 2011?", "From injuries after a car crash", ["In the tram crash", "In a factory fire", "After falling into the canal"], "Easy", "2011", "Departures"],
    ["Which large dog belonging to Chesney Brown was put to sleep in 2011?", "Schmeichel", ["Eccles", "Ozzy", "Monica"], "Easy", "2011", "Animals"],
    ["Which woman did Gary Windass lock inside a house, believing he was protecting her, in 2011?", "Izzy Armstrong", ["Faye Butler", "Katy Armstrong", "Anna Windass"], "Medium", "2011", "Relationships"],
    ["Which man falsely claimed to have a brain tumour to win back his ex-wife Cheryl in 2011?", "Chris Gray", ["Lloyd Mullaney", "Peter Barlow", "Paul Kershaw"], "Medium", "2011", "Storylines"],
    ["Which Rovers couple called off their wedding in November 2011 when she refused to return to cruise work?", "Michelle Connor and Ciaran McCarthy", ["Steve McDonald and Becky McDonald", "Carla Connor and Frank Foster", "Tina McIntyre and Graeme Proctor"], "Medium", "2011", "Weddings"],
    ["Which two young women planned to marry in December 2011 before one left Weatherfield?", "Sophie Webster and Sian Powers", ["Rosie Webster and Katy Armstrong", "Tina McIntyre and Xin Chiang", "Maria Connor and Carla Connor"], "Easy", "2011", "Weddings"],
    ["Which woman left Weatherfield after her planned wedding to Sophie Webster collapsed?", "Sian Powers", ["Rosie Webster", "Fiz Stape", "Katy Armstrong"], "Easy", "2011", "Departures"],
    ["Who falsely accused Becky McDonald of pushing her down the stairs and causing a miscarriage in 2011?", "Tracy Barlow", ["Leanne Barlow", "Kylie Platt", "Sally Webster"], "Medium", "2011", "Crime"],
    ["Which Barlow suffered a miscarriage in July 2011?", "Leanne Barlow", ["Tracy Barlow", "Deirdre Barlow", "Susan Barlow"], "Medium", "2011", "Families"],
    ["Which Weatherfield resident returned in 2011 and began dating Tina McIntyre after arriving as a young mechanic?", "Tommy Duckworth", ["Ryan Connor", "Craig Harris", "Adam Barlow"], "Medium", "2011", "Returns"],
    ["Which firefighter began seeing Eileen Grimshaw after rescuing her from railings in 2011?", "Paul Kershaw", ["Jim McDonald", "Chris Gray", "Owen Armstrong"], "Medium", "2011", "Relationships"]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(1601 + index).padStart(4, '0'),
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
    questions[0].id !== 'tv_1601' ||
    questions[99].id !== 'tv_1700' ||
    questions.filter(q => q.tags.includes('2010')).length !== 48 ||
    questions.filter(q => q.tags.includes('2011')).length !== 52
) {
    throw new Error('Pack 176: incorrect count, years or ID range');
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
        throw new Error('Pack 176: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
