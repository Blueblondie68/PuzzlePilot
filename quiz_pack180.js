// quiz_pack180.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2018 and 2019
// 100 questions: tv_2001 to tv_2100
// Leave quiz_bank.js unchanged until Render is behaving.

const facts = [

    // =====================================================
    // YEAR 2018
    // =====================================================

    ["Which mechanic was murdered by Pat Phelan in January 2018?", "Luke Britton", ["Tyrone Dobbs", "Kevin Webster", "Gary Windass"], "Easy", "2018", "Crime"],
    ["What happened to Luke Britton's car after Pat Phelan shot him in 2018?", "It exploded after Phelan shot its fuel tank", ["It plunged into a canal", "It was crushed by a lorry", "It caught fire in a garage accident"], "Medium", "2018", "Crime"],
    ["Who was wrongly convicted of assaulting Seb Franklin in January 2018?", "Anna Windass", ["Eileen Grimshaw", "Sally Metcalfe", "Fiz Stape"], "Easy", "2018", "Crime"],
    ["Which man had manipulated the evidence against Anna Windass in her 2018 trial?", "Pat Phelan", ["Gary Windass", "Rob Donovan", "Vinny Ashford"], "Easy", "2018", "Crime"],
    ["Who was married to Pat Phelan when his crimes were exposed in 2018?", "Eileen Grimshaw", ["Anna Windass", "Liz McDonald", "Jenny Connor"], "Easy", "2018", "Relationships"],
    ["Which two murdered men's bodies were found at the disused mill in 2018?", "Andy Carver and Vinny Ashford", ["Luke Britton and Michael Rodwell", "Rob Donovan and Tony Gordon", "Clayton Hibbs and Josh Tucker"], "Medium", "2018", "Crime"],
    ["Who stabbed Pat Phelan in the final confrontation that killed him in 2018?", "Anna Windass", ["Eileen Grimshaw", "Nicola Rubinstein", "Michelle Connor"], "Easy", "2018", "Crime"],
    ["Which daughter of Pat Phelan was shot during his final rampage in 2018?", "Nicola Rubinstein", ["Sarah Platt", "Faye Windass", "Alya Nazir"], "Easy", "2018", "Families"],
    ["Which Bistro worker was also shot by Pat Phelan shortly before his death in 2018?", "Michelle Connor", ["Leanne Battersby", "Eva Price", "Carla Connor"], "Easy", "2018", "Crime"],
    ["Which actor played the villain Pat Phelan in his 2018 final storyline?", "Connor McIntyre", ["Gray O'Brien", "Marc Baylis", "Brian Capron"], "Medium", "2018", "Actors"],
    ["Who drugged and sexually assaulted David Platt in 2018?", "Josh Tucker", ["Clayton Hibbs", "Nathan Curtis", "Pat Phelan"], "Easy", "2018", "Storylines"],
    ["What type of business did Josh Tucker become involved with when he befriended David Platt?", "A boxing gym", ["A barber's shop", "A taxi firm", "A nightclub"], "Medium", "2018", "Businesses"],
    ["Which woman was David Platt's girlfriend during the 2018 Josh Tucker storyline?", "Shona Ramsey", ["Kylie Platt", "Emma Brooker", "Tina McIntyre"], "Easy", "2018", "Relationships"],
    ["Which actor portrayed Josh Tucker in Coronation Street?", "Ryan Clayton", ["Sean Ward", "Chris Gascoyne", "Rob Mallard"], "Medium", "2018", "Actors"],
    ["What stage name did Bethany Platt use when she worked as a lap dancer in 2018?", "Madison", ["Scarlett", "Crystal", "Destiny"], "Medium", "2018", "Occupations"],
    ["Which young woman befriended Bethany Platt in 2018 and was revealed as Neil Clifton's daughter?", "Kayla Clifton", ["Emma Brooker", "Abi Franklin", "Hannah Gilmore"], "Medium", "2018", "Arrivals"],
    ["Which Underworld boss died by suicide in May 2018?", "Aidan Connor", ["Johnny Connor", "Rob Donovan", "Peter Barlow"], "Easy", "2018", "Departures"],
    ["Who discovered Aidan Connor's body after he failed to arrive at work in 2018?", "Johnny Connor", ["Carla Connor", "Eva Price", "Kate Connor"], "Medium", "2018", "Families"],
    ["Which former X Factor winner played Aidan Connor in his final scenes in 2018?", "Shayne Ward", ["Matt Cardle", "Joe McElderry", "Leon Jackson"], "Easy", "2018", "Actors"],
    ["Which character gave birth to Aidan Connor's daughter in April 2018?", "Eva Price", ["Toyah Battersby", "Maria Connor", "Carla Connor"], "Easy", "2018", "Families"],
    ["What was the name of Eva Price and Aidan Connor's baby daughter?", "Susie", ["Ruby", "Lily", "Miley"], "Easy", "2018", "Families"],
    ["Which woman initially passed off Eva Price's baby as her own child in 2018?", "Toyah Battersby", ["Leanne Battersby", "Jenny Connor", "Tracy Barlow"], "Easy", "2018", "Storylines"],
    ["Whose baby did Peter Barlow believe he was raising with Toyah during the 2018 deception?", "Their surrogate's baby", ["His child with Carla", "Eva's child with Adam", "His child with Leanne"], "Medium", "2018", "Families"],
    ["Who kidnapped baby Susie while fighting Eva Price over custody in 2018?", "Johnny Connor", ["Peter Barlow", "Adam Barlow", "Rob Donovan"], "Easy", "2018", "Crime"],
    ["To which country did Eva Price take baby Susie after leaving Weatherfield in 2018?", "France", ["Spain", "Canada", "Australia"], "Easy", "2018", "Departures"],
    ["Who inherited Aidan Connor's stake in Underworld after his death in 2018?", "Alya Nazir", ["Kate Connor", "Jenny Connor", "Michelle Connor"], "Easy", "2018", "Businesses"],
    ["Which youngster developed life-threatening sepsis in summer 2018?", "Jack Webster", ["Max Turner", "Simon Barlow", "Joseph Brown"], "Easy", "2018", "Storylines"],
    ["Which part of Jack Webster's body had to be amputated after he developed sepsis?", "His lower leg and foot", ["His right arm", "His hand", "His left ear"], "Medium", "2018", "Storylines"],
    ["Which doctor recognised the warning signs of Jack Webster's sepsis in 2018?", "Ali Neeson", ["Dr Gaddas", "Marcus Dent", "Martin Platt"], "Medium", "2018", "Occupations"],
    ["Which man was Jack Webster's father during the 2018 sepsis storyline?", "Kevin Webster", ["Tim Metcalfe", "Tyrone Dobbs", "Steve McDonald"], "Easy", "2018", "Families"],
    ["Which councillor was framed for fraud by Duncan Radfield in 2018?", "Sally Metcalfe", ["Yasmeen Nazir", "Audrey Roberts", "Gail Rodwell"], "Easy", "2018", "Crime"],
    ["What happened to Sally Metcalfe after her wrongful fraud conviction in 2018?", "She was sent to prison", ["She was placed under house arrest", "She was ordered to leave Weatherfield", "She was made to work at the Rovers"], "Easy", "2018", "Crime"],
    ["Which woman was Sally Metcalfe's sister and featured in her 2018 fraud troubles?", "Gina Seddon", ["Rosie Webster", "Faye Windass", "Jenny Connor"], "Easy", "2018", "Families"],
    ["Who accidentally ran over Liz McDonald on Christmas Day 2018?", "Jenny Connor", ["Tracy Barlow", "Sally Metcalfe", "Abi Franklin"], "Medium", "2018", "Crime"],
    ["Who initially tried to take the blame for the hit-and-run involving Liz McDonald in 2018?", "Johnny Connor", ["Steve McDonald", "Peter Barlow", "Robert Preston"], "Medium", "2018", "Crime"],
    ["Which former husband returned to deceive Liz McDonald about their daughter in 2018?", "Jim McDonald", ["Vernon Tomlin", "Tony Stewart", "Steve McDonald"], "Easy", "2018", "Returns"],
    ["What name did the woman pretending to be Liz and Jim's daughter use in 2018?", "Hannah Gilmore", ["Elsa Tilsley", "Kayla Clifton", "Emma Brooker"], "Medium", "2018", "Crime"],
    ["What was the name of the daughter Liz and Jim McDonald believed had died as a baby?", "Katie", ["Amy", "Susie", "Ruby"], "Medium", "2018", "Families"],
    ["Which outspoken newcomer was revealed as Tyrone Dobbs's grandmother in 2018?", "Evelyn Plummer", ["Sylvia Goodwin", "Claudia Colby", "Gina Seddon"], "Easy", "2018", "Arrivals"],
    ["Which actress joined Coronation Street as Evelyn Plummer in 2018?", "Maureen Lipman", ["Stephanie Cole", "Rula Lenska", "Sue Johnston"], "Easy", "2018", "Actors"],
    ["How was Geoff Metcalfe related to Tim Metcalfe when he arrived in 2018?", "He was Tim's father", ["He was Tim's uncle", "He was Tim's brother", "He was Tim's cousin"], "Easy", "2018", "Families"],
    ["What broadcasting job did Geoff Metcalfe do when he first appeared in 2018?", "Hospital radio DJ", ["Television newsreader", "Sports commentator", "Local radio weather presenter"], "Medium", "2018", "Occupations"],
    ["Which young woman was diagnosed with cervical cancer while pregnant in 2018?", "Sinead Tinker", ["Kate Connor", "Rana Habeeb", "Bethany Platt"], "Easy", "2018", "Storylines"],
    ["Which man exchanged vows with Sinead Tinker in a non-legal Pagan ceremony in 2018?", "Daniel Osbourne", ["Chesney Brown", "Adam Barlow", "Ryan Connor"], "Easy", "2018", "Weddings"],
    ["Which couple married in October 2018 after an earlier wedding had collapsed years before?", "Steve McDonald and Tracy Barlow", ["Peter Barlow and Leanne Battersby", "Nick Tilsley and Carla Connor", "Tim Metcalfe and Sally Webster"], "Easy", "2018", "Weddings"],
    ["Which woman briefly dated David Platt while he was separated from Shona Ramsey in 2018?", "Emma Brooker", ["Kayla Clifton", "Vicky Jefferies", "Hannah Gilmore"], "Medium", "2018", "Relationships"],
    ["Which Weatherfield resident experienced homelessness in 2018?", "Sean Tully", ["Roy Cropper", "Ken Barlow", "Norris Cole"], "Easy", "2018", "Storylines"],
    ["Which young man was the son of gangster Ronan Truman and died from a drug overdose in 2018?", "Cormac Truman", ["Tyler Jefferies", "Seb Franklin", "Josh Tucker"], "Medium", "2018", "Crime"],
    ["Who returned to Weatherfield in 2018 with a secret wife named Elsa?", "Nick Tilsley", ["Peter Barlow", "Daniel Osbourne", "Robert Preston"], "Easy", "2018", "Returns"],
    ["Which new solicitor appeared in 2018 as Rana Habeeb's brother?", "Imran Habeeb", ["Adam Barlow", "Todd Grimshaw", "Nick Tilsley"], "Easy", "2018", "Arrivals"],

    // =====================================================
    // YEAR 2019
    // =====================================================

    ["Which councillor was released from prison after her fraud conviction was overturned in January 2019?", "Sally Metcalfe", ["Gina Seddon", "Anna Windass", "Yasmeen Nazir"], "Easy", "2019", "Crime"],
    ["Who had stolen £80,000 from Audrey Roberts, as revealed in January 2019?", "Nick Tilsley", ["Lewis Archer", "David Platt", "Gail Rodwell"], "Easy", "2019", "Crime"],
    ["Which former conman died suddenly on New Year's Day 2019?", "Lewis Archer", ["Pat Phelan", "Jim McDonald", "Tony Stewart"], "Easy", "2019", "Departures"],
    ["Which Barlow teenager discovered she was pregnant in January 2019?", "Amy Barlow", ["Faye Windass", "Bethany Platt", "Summer Spellman"], "Easy", "2019", "Families"],
    ["Who was the father of Amy Barlow's unborn baby in 2019?", "Tyler Jefferies", ["Simon Barlow", "Craig Tinker", "Aadi Alahan"], "Medium", "2019", "Families"],
    ["Which son was born prematurely to Daniel and Sinead Osbourne in January 2019?", "Bertie", ["Joseph", "Harry", "Jake"], "Easy", "2019", "Families"],
    ["Which woman was Bertie Osbourne's mother?", "Sinead Tinker", ["Beth Tinker", "Tracy Barlow", "Carla Connor"], "Easy", "2019", "Families"],
    ["Which factory collapsed shortly before Kate and Rana's wedding in March 2019?", "Underworld", ["Baldwin's Casuals", "Street Cars", "The Kabin"], "Easy", "2019", "Storylines"],
    ["Who was killed when Underworld's roof collapsed in March 2019?", "Rana Habeeb", ["Kate Connor", "Alya Nazir", "Carla Connor"], "Easy", "2019", "Departures"],
    ["Whom was Rana Habeeb due to marry when she died in 2019?", "Kate Connor", ["Zeedan Nazir", "Sophie Webster", "Alya Nazir"], "Easy", "2019", "Weddings"],
    ["Who secretly sabotaged the Underworld roof before its fatal collapse in 2019?", "Gary Windass", ["Nick Tilsley", "Peter Barlow", "Rob Donovan"], "Easy", "2019", "Crime"],
    ["Which factory boss was unfairly blamed for the 2019 Underworld roof collapse?", "Carla Connor", ["Alya Nazir", "Jenny Connor", "Michelle Connor"], "Easy", "2019", "Storylines"],
    ["Which loan shark was killed by Gary Windass in June 2019?", "Rick Neelan", ["Pat Phelan", "Callum Logan", "Josh Tucker"], "Easy", "2019", "Crime"],
    ["Where did Gary Windass conceal Rick Neelan's body after killing him in 2019?", "In woodland", ["Under the factory floor", "In a canal", "In the Rovers cellar"], "Medium", "2019", "Crime"],
    ["Which solicitor was Rana Habeeb's brother and mourned her death in 2019?", "Imran Habeeb", ["Adam Barlow", "Nick Tilsley", "Todd Grimshaw"], "Easy", "2019", "Families"],
    ["Which family moved into Number 3 Coronation Street in June 2019?", "The Baileys", ["The Nazirs", "The Metcalfes", "The Windasses"], "Easy", "2019", "Arrivals"],
    ["What was the first name of the father of the Bailey family, introduced in 2019?", "Ed", ["Michael", "James", "Ronnie"], "Easy", "2019", "Families"],
    ["What was the first name of Ed Bailey's wife, introduced in 2019?", "Aggie", ["Angie", "Alya", "Anna"], "Easy", "2019", "Families"],
    ["Which Bailey son was a professional footballer when the family arrived in 2019?", "James Bailey", ["Michael Bailey", "Ed Bailey", "Ronnie Bailey"], "Easy", "2019", "Occupations"],
    ["Which football club did James Bailey play for in 2019?", "Weatherfield County", ["Manchester United", "Bolton Wanderers", "Salford City"], "Medium", "2019", "Sport"],
    ["Which Bailey father struggled with a gambling addiction revealed in 2019?", "Ed Bailey", ["Michael Bailey", "James Bailey", "Ronnie Bailey"], "Easy", "2019", "Storylines"],
    ["What business did Ed and Michael Bailey buy when they moved to Weatherfield in 2019?", "The builders' yard", ["The Rovers Return", "Underworld", "Street Cars"], "Medium", "2019", "Businesses"],
    ["Where did Aggie Bailey take a job to help her family's finances in 2019?", "Roy's Rolls", ["The Kabin", "The Rovers Return", "Underworld"], "Medium", "2019", "Occupations"],
    ["Which woman found out she was expecting quadruplets in 2019?", "Gemma Winter", ["Sinead Tinker", "Katy Armstrong", "Eva Price"], "Easy", "2019", "Families"],
    ["Who was the father of Gemma Winter's quadruplets, born in 2019?", "Chesney Brown", ["Henry Newton", "Paul Foreman", "Dev Alahan"], "Easy", "2019", "Families"],
    ["Which Welsh seaside town did Gemma Winter visit when she went into labour in 2019?", "Llandudno", ["Rhyl", "Aberystwyth", "Tenby"], "Medium", "2019", "Travel"],
    ["What unusual form of transport was Gemma Winter riding when she went into labour in 2019?", "A cable car", ["A tram", "A ferry", "A helicopter"], "Medium", "2019", "Families"],
    ["Which set gives the four names of Gemma and Chesney's babies born in 2019?", "Aled, Bryn, Carys and Llio", ["Jack, Joseph, Ruby and Hope", "Harry, Oliver, Lily and Susie", "Aled, Alfie, Rosie and Beth"], "Medium", "2019", "Families"],
    ["Which new arrival in 2019 was Gemma Winter's mother?", "Bernie Winter", ["Evelyn Plummer", "Jenny Connor", "Gina Seddon"], "Easy", "2019", "Arrivals"],
    ["Which resident was revealed as Gemma Winter's twin brother?", "Paul Foreman", ["Billy Mayhew", "Chesney Brown", "Ryan Connor"], "Easy", "2019", "Families"],
    ["Which man began a romantic relationship with Paul Foreman in 2019?", "Billy Mayhew", ["Sean Tully", "Todd Grimshaw", "Marcus Dent"], "Easy", "2019", "Relationships"],
    ["What type of cancer returned and claimed Sinead Osbourne's life in 2019?", "Cervical cancer", ["Breast cancer", "Pancreatic cancer", "Lung cancer"], "Easy", "2019", "Storylines"],
    ["Whom did Sinead Osbourne legally marry in September 2019?", "Daniel Osbourne", ["Chesney Brown", "Adam Barlow", "Ryan Connor"], "Easy", "2019", "Weddings"],
    ["Which actress played Sinead Osbourne in her final episodes in 2019?", "Katie McGlynn", ["Georgia May Foote", "Lucy Fallon", "Bhavna Limbachia"], "Medium", "2019", "Actors"],
    ["Who was revealed in 2019 to be Emma Brooker's biological father?", "Steve McDonald", ["Nick Tilsley", "Peter Barlow", "Lloyd Mullaney"], "Easy", "2019", "Families"],
    ["Which former Street character was Emma Brooker's mother?", "Fiona Middleton", ["Vicky Arden", "Becky McDonald", "Natalie Barnes"], "Medium", "2019", "Families"],
    ["Who was Roy Cropper's newly discovered half-brother in 2019?", "Richard Lucas", ["Brian Packham", "Dennis Tanner", "Norris Cole"], "Medium", "2019", "Families"],
    ["Which teenage relative of Roy Cropper first appeared in November 2019?", "Nina Lucas", ["Summer Spellman", "Faye Windass", "Asha Alahan"], "Easy", "2019", "Arrivals"],
    ["Which Weatherfield businessman began a pattern of controlling behaviour towards Yasmeen Nazir in 2019?", "Geoff Metcalfe", ["Ed Bailey", "Robert Preston", "Nick Tilsley"], "Easy", "2019", "Storylines"],
    ["Who married David Platt in November 2019?", "Shona Ramsey", ["Emma Brooker", "Sarah Platt", "Kylie Turner"], "Easy", "2019", "Weddings"],
    ["Who discovered that Robert Preston was secretly involved with Vicky Jefferies in 2019?", "Michelle Connor", ["Carla Connor", "Jenny Connor", "Leanne Battersby"], "Easy", "2019", "Relationships"],
    ["Which woman was pregnant with Robert Preston's child during his 2019 deception?", "Vicky Jefferies", ["Tracy Barlow", "Michelle Connor", "Bethany Platt"], "Medium", "2019", "Families"],
    ["Which chef was shot dead during the Christmas 2019 Winter Wonderland siege?", "Robert Preston", ["Nick Tilsley", "Gary Windass", "Peter Barlow"], "Easy", "2019", "Departures"],
    ["Who was the gunman responsible for Robert Preston's death in December 2019?", "Derek Milligan", ["Rick Neelan", "Gary Windass", "Tyler Jefferies"], "Medium", "2019", "Crime"],
    ["Which newlywed woman was shot during the Christmas 2019 siege?", "Shona Platt", ["Michelle Connor", "Sarah Platt", "Jenny Connor"], "Easy", "2019", "Storylines"],
    ["Which fairground attraction did Derek Milligan fall from during the Christmas 2019 siege?", "A helter-skelter", ["A Ferris wheel", "A rollercoaster", "A carousel"], "Medium", "2019", "Crime"],
    ["Who purchased the Bistro from Michelle Connor before she left Weatherfield at the end of 2019?", "Ray Crosby", ["Nick Tilsley", "Gary Windass", "Ed Bailey"], "Medium", "2019", "Businesses"],
    ["Which Alahan teenager used skin-lightening cream because of worries about her appearance in 2019?", "Asha Alahan", ["Alya Nazir", "Faye Windass", "Amy Barlow"], "Easy", "2019", "Storylines"],
    ["Which classic Corrie mother died off-screen in January 2019, leaving her son Roy bereaved?", "Sylvia Goodwin", ["Blanche Hunt", "Vera Duckworth", "Betty Williams"], "Medium", "2019", "Departures"],
    ["Which man was discovered to have accidentally set fire to Peter Barlow's boat while sleepwalking in 2019?", "Roy Cropper", ["Gary Windass", "Nick Tilsley", "Steve McDonald"], "Medium", "2019", "Storylines"]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(2001 + index).padStart(4, '0'),
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
    questions[0].id !== 'tv_2001' ||
    questions[99].id !== 'tv_2100' ||
    questions.filter(q => q.tags.includes('2018')).length !== 50 ||
    questions.filter(q => q.tags.includes('2019')).length !== 50
) {
    throw new Error('Pack 180: incorrect count, years or ID range');
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
        throw new Error('Pack 180: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
