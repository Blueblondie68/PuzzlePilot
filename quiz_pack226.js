// quiz_pack226.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 1988, a changing Albert Square
// 100 questions: tv_6404 to tv_6503
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [
    // WATTS FAMILY CHANGES (8)
    ["Which Queen Vic former landlady was hospitalised after suffering kidney failure?", "Angie Watts", ["Pat Wicks", "Sue Osman", "Kathy Beale"], "Easy", "The Watts Family"],
    ["What had seriously damaged Angie Watts' kidneys?", "Heavy drinking", ["A childhood infection", "A car accident", "Food poisoning"], "Easy", "The Watts Family"],
    ["What decision by Michelle Holloway devastated her husband Lofty?", "She had an abortion", ["She joined the army", "She moved to Australia", "She sold their home"], "Easy", "The Watts Family"],
    ["Who secretly paid for Michelle's abortion?", "Den Watts", ["Arthur Fowler", "Pete Beale", "Ali Osman"], "Medium", "The Watts Family"],
    ["Which man became Angie Watts' new partner after her separation from Den?", "Sonny", ["Brian Wicks", "Duncan Boyd", "James Willmott-Brown"], "Medium", "The Watts Family"],
    ["To which Spanish resort did Angie move with her new partner?", "Marbella", ["Benidorm", "Torremolinos", "Salou"], "Medium", "The Watts Family"],
    ["Whose engagement ended after Sharon Watts decided not to marry him?", "Duncan Boyd's", ["Simon Wicks'", "Lofty Holloway's", "Ian Beale's"], "Medium", "The Watts Family"],
    ["What kind of business did Angie plan to run with Sonny in Spain?", "A bar", ["A hotel", "A taxi firm", "A clothes shop"], "Medium", "The Watts Family"],

    // KENNY BEALE AND SIMON'S PARENTAGE (8)
    ["Which estranged son of Lou Beale returned from New Zealand?", "Kenny Beale", ["Harry Beale", "David Wicks", "Albert Beale"], "Easy", "The Beale Family"],
    ["Who played the visiting Kenny Beale?", "Michael Attwell", ["Leslie Schofield", "Peter Dean", "Donald Tandy"], "Medium", "The Beale Family"],
    ["Which of Kenny Beale's relatives was his younger brother?", "Pete Beale", ["Arthur Fowler", "Den Watts", "Tom Clements"], "Easy", "The Beale Family"],
    ["What was the name of Kenny Beale's daughter who came to Walford with him?", "Elizabeth", ["Donna", "Diane", "Shireen"], "Medium", "The Beale Family"],
    ["What business did Kenny Beale run in New Zealand?", "Selling swimming pools", ["A taxi firm", "A hotel", "A car dealership"], "Medium", "The Beale Family"],
    ["Which Beale teenager briefly became involved with his visiting cousin Elizabeth?", "Ian Beale", ["Mark Fowler", "Simon Wicks", "Kelvin Carpenter"], "Medium", "The Beale Family"],
    ["Which former husband of Pat Wicks turned up in Walford as the mystery of Simon's father continued?", "Brian Wicks", ["Tony Carpenter", "Frank Butcher", "Charlie Cotton"], "Medium", "The Beale Family"],
    ["Who did Pat finally name as Simon Wicks' biological father?", "Brian Wicks", ["Pete Beale", "Kenny Beale", "Den Watts"], "Easy", "The Beale Family"],

    // MICHELLE, LOFTY AND THE OSMANS (8)
    ["Which pub barman left Walford after his marriage to Michelle broke down?", "Lofty Holloway", ["Simon Wicks", "Den Watts", "Kelvin Carpenter"], "Easy", "Michelle and the Osmans"],
    ["What job did Lofty Holloway take when he moved on from Albert Square?", "Handyman at a children's home", ["Driver for a taxi firm", "Chef at a hotel", "Caretaker at a school"], "Medium", "Michelle and the Osmans"],
    ["What was the nickname of Ali and Sue Osman's second baby son?", "Little Ali", ["Little Mehmet", "Little Hassan", "Little Rayif"], "Easy", "Michelle and the Osmans"],
    ["Who was Little Ali's mother?", "Sue Osman", ["Guizin Osman", "Naima Jeffery", "Mary Smith"], "Easy", "Michelle and the Osmans"],
    ["Where was Little Ali born?", "At his parents' flat", ["At the Queen Victoria", "At the market", "At the Dagmar"], "Medium", "Michelle and the Osmans"],
    ["Which neighbour helped Pauline Fowler deliver Sue Osman's baby?", "Lofty Holloway", ["Pete Beale", "Dr Legg", "Frank Butcher"], "Medium", "Michelle and the Osmans"],
    ["Which earlier tragedy made Little Ali's arrival especially emotional for the Osmans?", "The death of their son Hassan", ["The loss of their café", "The death of Mehmet Osman", "A house fire"], "Medium", "Michelle and the Osmans"],
    ["Which family member was in debt alongside Mehmet while the Osman cab business struggled?", "Ali Osman", ["Saeed Jeffery", "Pete Beale", "Tony Carpenter"], "Medium", "Michelle and the Osmans"],

    // FRANK, PAT AND THE BUTCHERS (10)
    ["Which couple took over as landlords of the Queen Victoria?", "Frank Butcher and Pat Wicks", ["Pete and Kathy Beale", "Arthur and Pauline Fowler", "Ali and Sue Osman"], "Easy", "The Butchers"],
    ["Who played Frank Butcher?", "Mike Reid", ["Leslie Grantham", "Michael Cashman", "Nick Berry"], "Easy", "The Butchers"],
    ["Which actor first played Ricky Butcher?", "Sid Owen", ["Adam Woodyatt", "Todd Carty", "Tom Watt"], "Easy", "The Butchers"],
    ["Which actress originally played Diane Butcher?", "Sophie Lawrence", ["Michelle Collins", "Matilda Ziegler", "Letitia Dean"], "Medium", "The Butchers"],
    ["How were Ricky and Diane Butcher related?", "Brother and sister", ["Husband and wife", "Cousins", "Uncle and niece"], "Easy", "The Butchers"],
    ["Who was Ricky and Diane Butcher's father?", "Frank Butcher", ["Brian Wicks", "Den Watts", "Pete Beale"], "Easy", "The Butchers"],
    ["What had happened to Ricky and Diane's mother before they moved to Walford?", "She had died", ["She had moved to France", "She had joined a convent", "She had gone to prison"], "Medium", "The Butchers"],
    ["Which elderly Butcher family member arrived and immediately clashed with Pat?", "Mo Butcher", ["Lou Beale", "Ethel Skinner", "Edie Smith"], "Easy", "The Butchers"],
    ["Which actress originally played Mo Butcher?", "Edna Doré", ["Anna Wing", "Gretchen Franklin", "June Brown"], "Medium", "The Butchers"],
    ["What relationship was Mo Butcher to Frank?", "His mother", ["His aunt", "His sister", "His mother-in-law"], "Easy", "The Butchers"],

    // CINDY, IAN AND WICKSY (10)
    ["Which future Beale family figure arrived in Walford as Cindy Williams?", "Cindy Beale", ["Kathy Beale", "Pauline Fowler", "Donna Ludlow"], "Easy", "Cindy, Ian and Wicksy"],
    ["Which actress originally played Cindy Williams?", "Michelle Collins", ["Sophie Lawrence", "Susan Tully", "Matilda Ziegler"], "Easy", "Cindy, Ian and Wicksy"],
    ["What did Cindy Williams' mother sell from her market stall?", "Hats", ["Fruit", "Flowers", "Second-hand books"], "Medium", "Cindy, Ian and Wicksy"],
    ["Which woman became jealous of Cindy's relationship with Simon Wicks?", "Donna Ludlow", ["Angie Watts", "Sue Osman", "Naima Jeffery"], "Medium", "Cindy, Ian and Wicksy"],
    ["Which man did Cindy begin dating soon after arriving in Albert Square?", "Simon Wicks", ["Lofty Holloway", "Barry Clark", "Mark Fowler"], "Easy", "Cindy, Ian and Wicksy"],
    ["Which young Beale also developed feelings for Cindy?", "Ian Beale", ["Pete Beale", "Kenny Beale", "Arthur Fowler"], "Easy", "Cindy, Ian and Wicksy"],
    ["Which qualification did Ian Beale pass before taking a job at the café?", "Catering exams", ["Driving tests", "Accountancy exams", "Teaching exams"], "Medium", "Cindy, Ian and Wicksy"],
    ["Whose café gave Ian Beale work after his exams?", "Ali Osman's", ["Dot Cotton's", "Frank Butcher's", "Lou Beale's"], "Medium", "Cindy, Ian and Wicksy"],
    ["What equipment bought from Darren Roberts was repossessed from Ian?", "Disco equipment", ["Catering ovens", "A motorbike", "Photography equipment"], "Medium", "Cindy, Ian and Wicksy"],
    ["Whose home became increasingly untidy when Ian and Simon lived there?", "Pauline Fowler's", ["Dot Cotton's", "Ethel Skinner's", "Pat Wicks'"], "Medium", "Cindy, Ian and Wicksy"],

    // KATHY AND THE DAGMAR (10)
    ["Which Beale family member began working at the Dagmar wine bar?", "Kathy Beale", ["Pauline Fowler", "Lou Beale", "Ethel Skinner"], "Easy", "Kathy and the Dagmar"],
    ["Which businessman sexually assaulted Kathy Beale?", "James Willmott-Brown", ["Gregory Mantel", "Frank Butcher", "Brian Wicks"], "Easy", "Kathy and the Dagmar"],
    ["Where did Willmott-Brown assault Kathy after work?", "In his flat above the Dagmar", ["At the launderette", "In the market", "At the Queen Victoria"], "Medium", "Kathy and the Dagmar"],
    ["Who found Kathy after the attack at the Dagmar?", "Den Watts", ["Pete Beale", "Dr Legg", "Frank Butcher"], "Medium", "Kathy and the Dagmar"],
    ["What happened to the Dagmar shortly after Kathy's attack?", "It was set on fire", ["It was flooded", "It was demolished by the council", "It was converted into flats"], "Easy", "Kathy and the Dagmar"],
    ["Who arranged for criminals to set fire to the Dagmar?", "Den Watts", ["Pete Beale", "Ian Beale", "Frank Butcher"], "Medium", "Kathy and the Dagmar"],
    ["What did Willmott-Brown claim in his defence following Kathy's accusation?", "That Kathy had consented", ["That he had been abroad", "That he had never met Kathy", "That he was acting for the police"], "Medium", "Kathy and the Dagmar"],
    ["What difficult truth did Kathy reveal to her daughter Donna?", "Donna had been conceived through rape", ["Donna was not her daughter", "Donna had a twin sister", "Donna had been born abroad"], "Medium", "Kathy and the Dagmar"],
    ["Which husband struggled to understand Kathy's feelings following her ordeal?", "Pete Beale", ["Arthur Fowler", "Den Watts", "Frank Butcher"], "Easy", "Kathy and the Dagmar"],
    ["What did Willmott-Brown offer Kathy when he returned to Walford later in the year?", "Money", ["A job abroad", "Ownership of the café", "A share in the Queen Vic"], "Medium", "Kathy and the Dagmar"],

    // LOU BEALE AND OTHER GOODBYES (10)
    ["Which Albert Square matriarch gathered her family for a final talk before dying in her sleep?", "Lou Beale", ["Ethel Skinner", "Dot Cotton", "Mo Butcher"], "Easy", "Lou and Departures"],
    ["Which elderly Walford resident moved into sheltered housing early in the year?", "Ethel Skinner", ["Pat Wicks", "Sue Osman", "Mo Butcher"], "Medium", "Lou and Departures"],
    ["Which seaside town did Lou visit to recuperate before her final days?", "Leigh-on-Sea", ["Brighton", "Hastings", "Clacton-on-Sea"], "Medium", "Lou and Departures"],
    ["Which of Lou Beale's sons drove her to Leigh-on-Sea during her final illness?", "Pete Beale", ["Kenny Beale", "Harry Beale", "Ronnie Beale"], "Medium", "Lou and Departures"],
    ["What sort of drugs was Mary Smith taking before she left Walford?", "Amphetamines", ["Sleeping tablets", "Prescription painkillers", "Cough medicine"], "Medium", "Lou and Departures"],
    ["Who pressured Pat to finally settle the question of Simon Wicks' father?", "Lou Beale", ["Sharon Watts", "Sue Osman", "Mo Butcher"], "Medium", "Lou and Departures"],
    ["What was the cause of Lou Beale's death in her final storyline?", "She died peacefully in her sleep", ["She died in a car accident", "She was attacked in the street", "She drowned"], "Easy", "Lou and Departures"],
    ["Which elderly allotment enthusiast and Queen Vic potman died after a stroke?", "Tom Clements", ["Charlie Cotton", "Dr Legg", "Benny Bloom"], "Medium", "Lou and Departures"],
    ["Which punk mother left Walford with her daughter Annie?", "Mary Smith", ["Sue Osman", "Donna Ludlow", "Naima Jeffery"], "Easy", "Lou and Departures"],
    ["Which Boxing Day spin-off explored Walford during the Second World War?", "CivvyStreet", ["Walford at War", "The Old Square", "Albert's Army"], "Medium", "Lou and Departures"],

    // DEN, THE FIRM AND PRISON (12)
    ["What was the name of the criminal organisation that drew Den Watts into dangerous dealings?", "The Firm", ["The Syndicate", "The Circle", "The Outfit"], "Easy", "Den and the Firm"],
    ["Which businessman represented The Firm under the name of Walford Investments?", "Gregory Mantel", ["Frank Butcher", "Dr David Samuels", "Reg Sparrow"], "Medium", "Den and the Firm"],
    ["Which actor played gangster Gregory Mantel?", "Pavel Douglas", ["William Boyde", "Leslie Schofield", "Mike Reid"], "Medium", "Den and the Firm"],
    ["What name did the new wine bar associated with The Firm use?", "Strokes", ["The Dagmar", "The Albert", "The Vine"], "Medium", "Den and the Firm"],
    ["Which woman managed Strokes for The Firm?", "Joanne Francis", ["Pat Wicks", "Jan Hammond", "Cindy Williams"], "Medium", "Den and the Firm"],
    ["Which actress played Joanne Francis?", "Pamela Salem", ["Jane How", "Pam St. Clement", "Judith Jacob"], "Medium", "Den and the Firm"],
    ["In which English city did Den hide while on the run from The Firm?", "Manchester", ["Liverpool", "Birmingham", "Bristol"], "Medium", "Den and the Firm"],
    ["What was the name of the prison where Den Watts was held?", "Dickens Hill", ["HMP Walford", "HMP Wentworth", "Strangeways"], "Easy", "Den and the Firm"],
    ["Which fellow prisoner became a protector and friend to Den Watts?", "Barnsey Barnes", ["Victor Hampton", "Trevor Kellow", "Roy Quick"], "Medium", "Den and the Firm"],
    ["Which prisoner was secretly supplying information to The Firm?", "Queenie Price", ["Barnsey Barnes", "Victor Hampton", "Trevor Kellow"], "Medium", "Den and the Firm"],
    ["Which old Walford villain was later placed in the same prison cell as Den?", "Nick Cotton", ["Pete Beale", "Ali Osman", "Mehmet Osman"], "Easy", "Den and the Firm"],
    ["What old crime did Nick Cotton confess to Den while they were behind bars?", "Killing Reg Cox", ["Robbing the Queen Victoria", "Attacking Pat Wicks", "Burning down the Dagmar"], "Medium", "Den and the Firm"],

    // THE KARIMS AND DOCTORS (8)
    ["Which family took over First til Last after Naima Jeffery left?", "The Karims", ["The Butchers", "The Carpenters", "The Jacksons"], "Easy", "The Karims and Doctors"],
    ["What was the first name of the Karim family shopkeeper?", "Ashraf", ["Farrukh", "Saeed", "Rezaul"], "Medium", "The Karims and Doctors"],
    ["Who was Ashraf Karim's wife?", "Sufia", ["Naima", "Guizin", "Shireen"], "Medium", "The Karims and Doctors"],
    ["Which Karim daughter attracted the attention of Ricky Butcher?", "Shireen", ["Diane", "Aisha", "Emine"], "Medium", "The Karims and Doctors"],
    ["Which Karim son took an interest in Diane Butcher?", "Sohail", ["Murat", "Rayif", "Junior"], "Medium", "The Karims and Doctors"],
    ["Which doctor joined his uncle Dr Legg at the Walford surgery?", "David Samuels", ["Anthony Trueman", "Yusef Khan", "Al Jenkins"], "Easy", "The Karims and Doctors"],
    ["From which country did Dr David Samuels arrive?", "Israel", ["Canada", "Australia", "France"], "Medium", "The Karims and Doctors"],
    ["What change did David Samuels want to introduce into Dr Legg's surgery?", "Computers", ["A gym", "A restaurant", "An ambulance garage"], "Medium", "The Karims and Doctors"],

    // COLIN, CARMEL AND NEW RELATIONSHIPS (8)
    ["Which condition did Colin Russell learn he had?", "Multiple sclerosis", ["Diabetes", "Epilepsy", "Asthma"], "Medium", "Colin and Carmel"],
    ["Which doctor disagreed with Dr Legg over whether Colin should be told his diagnosis?", "Dr David Samuels", ["Dr May Wright", "Dr Yusef Khan", "Dr Anthony Trueman"], "Medium", "Colin and Carmel"],
    ["Which new man became romantically involved with Colin Russell after Barry left?", "Guido Smith", ["Rod Norman", "Matthew Jackson", "Duncan Boyd"], "Medium", "Colin and Carmel"],
    ["What was Guido Smith's initial connection to Colin Russell?", "A business contact", ["His cousin", "His landlord", "His police officer"], "Medium", "Colin and Carmel"],
    ["Which shop manager became Carmel Roberts' boyfriend?", "Matthew Jackson", ["Simon Wicks", "Tony Carpenter", "Darren Roberts"], "Medium", "Colin and Carmel"],
    ["What type of shop did Matthew Jackson manage?", "A music shop", ["A grocery shop", "A bookshop", "A clothes shop"], "Medium", "Colin and Carmel"],
    ["Which relative objected to Carmel dating Matthew?", "Her brother Darren", ["Her father Tony", "Her cousin Ali", "Her nephew Junior"], "Medium", "Colin and Carmel"],
    ["What commitment did Matthew Jackson and Carmel Roberts agree to make?", "Get married", ["Open a café", "Move to New Zealand", "Adopt a baby"], "Medium", "Colin and Carmel"],

    // DOT, ETHEL, DONNA AND OTHER TROUBLES (8)
    ["Who stole Dot Cotton's holiday savings before leaving her again?", "Charlie Cotton", ["Nick Cotton", "Frank Butcher", "Brian Wicks"], "Easy", "Other Walford Stories"],
    ["Which community safety organisation did Dot Cotton take charge of?", "Neighbourhood Watch", ["St John Ambulance", "The Women's Institute", "The Scouts"], "Medium", "Other Walford Stories"],
    ["Which widower began courting Ethel Skinner?", "Benny Bloom", ["Tom Clements", "Charlie Cotton", "Reg Sparrow"], "Medium", "Other Walford Stories"],
    ["What was the name of Ethel's dog that became an obstacle to marriage?", "Willy", ["Roly", "Wellard", "Crush"], "Easy", "Other Walford Stories"],
    ["Why did Ethel decide not to marry Benny Bloom?", "She could not take her dog to his home", ["He was already married", "He was moving to Australia", "He wanted to sell her flat"], "Medium", "Other Walford Stories"],
    ["Which woman did Rod Norman discover was addicted to heroin?", "Donna Ludlow", ["Mary Smith", "Cindy Williams", "Sharon Watts"], "Medium", "Other Walford Stories"],
    ["Who moved into a squat together after losing their previous homes?", "Rod Norman and Donna Ludlow", ["Ian Beale and Sharon Watts", "Pete Beale and Angie Watts", "Den Watts and Ethel Skinner"], "Medium", "Other Walford Stories"],
    ["Which market trader was caught drink-driving late in the year?", "Pete Beale", ["Arthur Fowler", "Ali Osman", "Frank Butcher"], "Medium", "Other Walford Stories"],
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(6404 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['British Television', 'Soaps', 'EastEnders', '1988', topic],
        dailyEligible: true
    };
});

module.exports = questions;
