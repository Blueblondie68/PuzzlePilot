// quiz_pack210.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Quiz and game shows - classic and modern favourites
// 100 questions: tv_4804 to tv_4903
// Leave quiz_bank.js unchanged until the end of the evening.

const facts = [
    // Name That Tune
    ["Who was the original British presenter of Name That Tune?", "Tom O'Connor", ["Lionel Blair", "Jools Holland", "Bob Monkhouse"], "Easy", "Name That Tune"],
    ["Which entertainer succeeded Tom O'Connor as host of Name That Tune?", "Lionel Blair", ["Roy Walker", "Nicholas Parsons", "Michael Aspel"], "Easy", "Name That Tune"],
    ["Which musician presented the Channel 5 revival of Name That Tune?", "Jools Holland", ["Gary Barlow", "Jamie Cullum", "Rick Wakeman"], "Medium", "Name That Tune"],
    ["In Name That Tune, what did contestants have to identify from short musical excerpts?", "Song titles", ["Composers' ages", "Record labels", "Album sleeve artwork"], "Easy", "Name That Tune"],
    ["What did players bargain over in the Bid a Note round of Name That Tune?", "How few notes they needed", ["How many musicians would play", "How long the song would last", "How much the orchestra would earn"], "Easy", "Name That Tune"],
    ["What was the rapid musical finale of the original Name That Tune called?", "Golden Medley", ["Gold Run", "Fastest Finger", "Conundrum"], "Easy", "Name That Tune"],
    ["What was spun to decide cash values in Name That Tune's Melody Roulette round?", "A wheel", ["A coin", "A vinyl record", "A drum"], "Medium", "Name That Tune"],
    ["Which singer was associated with the Sing a Note round of Name That Tune?", "Maggie Moone", ["Cilla Black", "Lena Zavaroni", "Sandie Shaw"], "Medium", "Name That Tune"],

    // The Golden Shot
    ["Which entertainer is most closely associated with presenting The Golden Shot?", "Bob Monkhouse", ["Bruce Forsyth", "Ted Rogers", "Les Dennis"], "Easy", "The Golden Shot"],
    ["What type of weapon was used to aim at targets on The Golden Shot?", "A crossbow", ["An air rifle", "A bow and arrow", "A slingshot"], "Easy", "The Golden Shot"],
    ["What was the nickname of the person who loaded the crossbow on The Golden Shot?", "Bernie the Bolt", ["Bully the Bull", "Dusty Bin", "Mr Chips"], "Easy", "The Golden Shot"],
    ["On The Golden Shot, what helped contestants see where the crossbow was pointing?", "A television camera", ["A telescope", "A mirror on a stand", "A radar screen"], "Medium", "The Golden Shot"],
    ["Which hostess was famous for announcing and adding up scores on The Golden Shot?", "Anne Aston", ["Anthea Redfern", "Isla St Clair", "Judith Chalmers"], "Medium", "The Golden Shot"],
    ["Which comedian and entertainer presented The Golden Shot for a period between Bob Monkhouse's runs?", "Charlie Williams", ["Larry Grayson", "Jim Davidson", "Frank Carson"], "Medium", "The Golden Shot"],
    ["Which other entertainer presented The Golden Shot during the 1970s?", "Norman Vaughan", ["Tony Hancock", "Eric Sykes", "Roy Hudd"], "Medium", "The Golden Shot"],
    ["Who was the very first presenter of The Golden Shot before Bob Monkhouse took over?", "Jackie Rae", ["Michael Barrymore", "Michael Parkinson", "Peter Marshall"], "Medium", "The Golden Shot"],

    // Sale of the Century
    ["Who presented the best-known British version of Sale of the Century?", "Nicholas Parsons", ["Bob Holness", "Richard Whiteley", "William G. Stewart"], "Easy", "Sale of the Century"],
    ["Which English city featured in Sale of the Century's famous 'quiz of the week' introduction?", "Norwich", ["Birmingham", "Leeds", "Plymouth"], "Easy", "Sale of the Century"],
    ["Which ITV company made the classic Sale of the Century?", "Anglia Television", ["Granada Television", "Thames Television", "Yorkshire Television"], "Medium", "Sale of the Century"],
    ["What did correct quiz answers earn contestants on Sale of the Century?", "Money to spend on prizes", ["Extra time in an assault course", "Letters for a word puzzle", "Clues to a song title"], "Easy", "Sale of the Century"],
    ["What was special about the prices of prizes on Sale of the Century?", "They were heavily discounted", ["They were hidden from contestants", "They rose after every question", "They were decided by a roulette wheel"], "Easy", "Sale of the Century"],
    ["What was an Instant Sale on Sale of the Century?", "A chance to buy a discounted prize", ["A round naming songs from one note", "A race to finish a crossword", "A vote to remove a rival"], "Medium", "Sale of the Century"],
    ["Who presented a 1990s revival of Sale of the Century on Challenge TV?", "Keith Chegwin", ["Dale Winton", "Noel Edmonds", "Clive Anderson"], "Medium", "Sale of the Century"],
    ["What was the winner of the classic Sale of the Century invited to do with their accumulated money?", "Choose prizes in the final sale", ["Bet it all on a horse race", "Pay the losing players", "Donate it to a television charity"], "Easy", "Sale of the Century"],

    // Mr and Mrs
    ["Which presenter is most closely associated with the classic Mr and Mrs quiz?", "Derek Batey", ["Ted Rogers", "Jim Bowen", "Henry Kelly"], "Easy", "Mr and Mrs"],
    ["What did couples try to do in the game show Mr and Mrs?", "Match their answers about each other", ["Name songs after hearing one note", "Answer sport questions under pressure", "Guess supermarket prices"], "Easy", "Mr and Mrs"],
    ["Where did one partner often wait while the other answered questions on Mr and Mrs?", "In a soundproof booth", ["Behind a curtain on stage", "Inside a glass lift", "In the studio audience"], "Easy", "Mr and Mrs"],
    ["Which ITV company made Derek Batey's familiar version of Mr and Mrs?", "Border Television", ["Anglia Television", "Central Television", "London Weekend Television"], "Medium", "Mr and Mrs"],
    ["Which television presenter fronted All Star Mr and Mrs in the 2000s?", "Phillip Schofield", ["Chris Tarrant", "Vernon Kay", "Bradley Walsh"], "Easy", "Mr and Mrs"],
    ["Who co-presented early series of All Star Mr and Mrs alongside Phillip Schofield?", "Fern Britton", ["Holly Willoughby", "Lorraine Kelly", "Davina McCall"], "Easy", "Mr and Mrs"],
    ["Which comedian presented an ITV revival of Mr and Mrs in the late 1990s?", "Julian Clary", ["Alan Carr", "Graham Norton", "Paul O'Grady"], "Medium", "Mr and Mrs"],

    // Telly Addicts
    ["Who presented the BBC quiz Telly Addicts?", "Noel Edmonds", ["Michael Aspel", "Terry Wogan", "Les Dennis"], "Easy", "Telly Addicts"],
    ["In the original Telly Addicts, which groups competed over their television knowledge?", "Family teams", ["Teams of university students", "Professional darts players", "Pairs of musicians"], "Easy", "Telly Addicts"],
    ["What were contestants shown before answering questions in a central round of Telly Addicts?", "Clips from television programmes", ["Old newspaper adverts", "Photographs of football grounds", "Excerpts from novels"], "Easy", "Telly Addicts"],
    ["What did contestants have to do in Telly Addicts' Sing the Sig challenge?", "Sing a television theme tune", ["Name a tune from one note", "Imitate a famous presenter", "Read aloud from a television script"], "Easy", "Telly Addicts"],
    ["In the Telly Addicts round On the Box, who wrote questions for each team?", "The opposing team", ["The studio audience", "Guest musicians", "The BBC weather presenters"], "Medium", "Telly Addicts"],
    ["Which subject dominated the Channel-Hopping round of Telly Addicts?", "Television programmes", ["World capitals", "Olympic history", "Classical literature"], "Easy", "Telly Addicts"],
    ["Which actor from The Archers appeared as a scorer on Telly Addicts?", "Charles Collingwood", ["Timothy West", "Peter Sallis", "John Challis"], "Medium", "Telly Addicts"],
    ["What was the quick-fire final round of classic Telly Addicts called?", "In the Spotlight", ["Golden Medley", "Red Hot", "The Final Chase"], "Medium", "Telly Addicts"],

    // A Question of Sport
    ["Which former tennis player presented A Question of Sport for many years?", "Sue Barker", ["Virginia Wade", "Annabel Croft", "Jo Durie"], "Easy", "A Question of Sport"],
    ["Which presenter hosted A Question of Sport for much of the 1980s and 1990s before Sue Barker?", "David Coleman", ["David Vine", "Des Lynam", "John Inverdale"], "Medium", "A Question of Sport"],
    ["Who was the original regular presenter of the national series of A Question of Sport?", "David Vine", ["Bob Wilson", "Jimmy Hill", "Nick Hancock"], "Medium", "A Question of Sport"],
    ["Which comedian took over presenting the renamed Question of Sport after Sue Barker?", "Paddy McGuinness", ["Lee Mack", "Romesh Ranganathan", "Rob Brydon"], "Easy", "A Question of Sport"],
    ["Which former England rugby union captain was a long-serving Question of Sport team captain?", "Bill Beaumont", ["Ian Botham", "Emlyn Hughes", "John Parrott"], "Easy", "A Question of Sport"],
    ["Which former Liverpool footballer was a famously exuberant team captain on A Question of Sport?", "Emlyn Hughes", ["Bill Beaumont", "Phil Tufnell", "Willie Carson"], "Easy", "A Question of Sport"],
    ["Which Scottish footballer became a long-serving Question of Sport team captain?", "Ally McCoist", ["Gordon Strachan", "Kenny Dalglish", "Graeme Souness"], "Easy", "A Question of Sport"],
    ["Which England rugby union star captained a Question of Sport team alongside Phil Tufnell?", "Matt Dawson", ["Martin Johnson", "Jonny Wilkinson", "Will Carling"], "Easy", "A Question of Sport"],
    ["Which former England cricketer captained a team on A Question of Sport?", "Phil Tufnell", ["Gary Lineker", "John Parrott", "Emlyn Hughes"], "Easy", "A Question of Sport"],
    ["In A Question of Sport, what did teams predict in the round What Happened Next?", "The outcome of a sporting video clip", ["Which sports stadium would close", "The next contestant to leave", "The next number on a scoreboard"], "Easy", "A Question of Sport"],

    // A League of Their Own
    ["Who originally hosted Sky's sports comedy panel show A League of Their Own?", "James Corden", ["Nick Hancock", "Lee Mack", "Michael McIntyre"], "Easy", "A League of Their Own"],
    ["Which comedian became the regular host of A League of Their Own after James Corden?", "Romesh Ranganathan", ["Rob Brydon", "Jimmy Carr", "Rhod Gilbert"], "Easy", "A League of Their Own"],
    ["Which former Liverpool and England footballer was a team captain on A League of Their Own?", "Jamie Redknapp", ["Gary Lineker", "Ian Wright", "Peter Crouch"], "Easy", "A League of Their Own"],
    ["Which former England cricketer was a team captain on A League of Their Own?", "Freddie Flintoff", ["Phil Tufnell", "David Gower", "Ian Botham"], "Easy", "A League of Their Own"],
    ["On which broadcaster's channels was A League of Their Own shown?", "Sky", ["BBC", "ITV", "Channel 4"], "Easy", "A League of Their Own"],
    ["What physical element often joined the quiz questions in A League of Their Own?", "Comedy sporting challenges", ["Snooker trick shots", "A crossbow competition", "A supermarket trolley race"], "Easy", "A League of Their Own"],
    ["Which former England women's footballer became a team captain on A League of Their Own?", "Jill Scott", ["Alex Scott", "Kelly Smith", "Fara Williams"], "Medium", "A League of Their Own"],

    // They Think It's All Over
    ["Which comedian originally presented the televised sports panel game They Think It's All Over?", "Nick Hancock", ["James Corden", "Jim Davidson", "Henry Kelly"], "Easy", "They Think It's All Over"],
    ["Who took over as host of They Think It's All Over for its later series?", "Lee Mack", ["Bradley Walsh", "Michael Barrymore", "Chris Tarrant"], "Easy", "They Think It's All Over"],
    ["Which former England football striker was an original team captain on They Think It's All Over?", "Gary Lineker", ["Jamie Redknapp", "Wayne Rooney", "Michael Owen"], "Easy", "They Think It's All Over"],
    ["Which former England cricket captain led the opposing team on They Think It's All Over?", "David Gower", ["Freddie Flintoff", "Phil Tufnell", "Nasser Hussain"], "Easy", "They Think It's All Over"],
    ["Which comedian was a regular panellist on They Think It's All Over throughout its run?", "Rory McGrath", ["David Mitchell", "Jon Richardson", "Alan Carr"], "Medium", "They Think It's All Over"],
    ["Which BBC channel broadcast They Think It's All Over?", "BBC One", ["BBC Two", "BBC Three", "BBC Four"], "Easy", "They Think It's All Over"],
    ["Which football commentator's 1966 World Cup line inspired the title They Think It's All Over?", "Kenneth Wolstenholme", ["John Motson", "Barry Davies", "Brian Moore"], "Easy", "They Think It's All Over"],

    // The Krypton Factor
    ["Which broadcaster hosted the original run of The Krypton Factor?", "Gordon Burns", ["Henry Kelly", "Bob Holness", "Bamber Gascoigne"], "Easy", "The Krypton Factor"],
    ["Who presented ITV's revival of The Krypton Factor?", "Ben Shephard", ["Phillip Schofield", "Vernon Kay", "Nick Hewer"], "Medium", "The Krypton Factor"],
    ["What demanding physical challenge became famous on The Krypton Factor?", "An army-style assault course", ["A darts tournament", "A tennis match", "A ballroom dance"], "Easy", "The Krypton Factor"],
    ["What kind of machine did contestants sometimes have to control in The Krypton Factor's response tests?", "A flight simulator", ["A slot machine", "A printing press", "A forklift truck"], "Easy", "The Krypton Factor"],
    ["What was tested when Krypton Factor contestants answered questions about a film clip they had just watched?", "Observation", ["Singing ability", "Geographical navigation", "Dancing technique"], "Easy", "The Krypton Factor"],
    ["Which British television channel showed the original Krypton Factor?", "ITV", ["BBC One", "BBC Two", "Channel 4"], "Easy", "The Krypton Factor"],
    ["What was the name of the junior spin-off of The Krypton Factor?", "Young Krypton", ["Junior Challenge", "Krypton Kids", "Little Mastermind"], "Medium", "The Krypton Factor"],
    ["Which ITV company originally produced The Krypton Factor?", "Granada Television", ["Border Television", "Anglia Television", "Thames Television"], "Medium", "The Krypton Factor"],

    // Going for Gold
    ["Which Irish presenter hosted the original daytime quiz Going for Gold?", "Henry Kelly", ["Derek Batey", "Nicholas Parsons", "Roy Walker"], "Easy", "Going for Gold"],
    ["What made the original Going for Gold unusual compared with many British quizzes?", "Contestants came from across Europe", ["All contestants were professional athletes", "It was held outdoors in winter", "All answers had to be sung"], "Easy", "Going for Gold"],
    ["Which channel broadcast the original Going for Gold?", "BBC One", ["ITV", "Channel 4", "Sky One"], "Easy", "Going for Gold"],
    ["Who hosted the later Channel 5 revival of Going for Gold?", "John Suchet", ["Jeremy Vine", "David Vine", "John Humphrys"], "Medium", "Going for Gold"],
    ["In Going for Gold, what was the object of the Head to Head round?", "Beat one opponent by answering questions", ["Throw darts into numbered targets", "Identify song titles from piano notes", "Remember prizes on a conveyor belt"], "Easy", "Going for Gold"],

    // The Crystal Maze
    ["Who originally guided teams through The Crystal Maze?", "Richard O'Brien", ["Edward Tudor-Pole", "Stephen Merchant", "Richard Ayoade"], "Easy", "The Crystal Maze"],
    ["Which presenter succeeded Richard O'Brien in the original run of The Crystal Maze?", "Edward Tudor-Pole", ["Tim Curry", "Noel Fielding", "Stephen Fry"], "Medium", "The Crystal Maze"],
    ["Which comedian and actor hosted the revived Crystal Maze series?", "Richard Ayoade", ["David Mitchell", "James Acaster", "Rob Beckett"], "Easy", "The Crystal Maze"],
    ["Which channel originally broadcast The Crystal Maze?", "Channel 4", ["BBC One", "ITV", "Sky One"], "Easy", "The Crystal Maze"],
    ["What did teams collect by successfully completing games in The Crystal Maze?", "Time crystals", ["Golden tickets", "Silver keys", "Coloured flags"], "Easy", "The Crystal Maze"],
    ["What did each time crystal add to the team's time in the Crystal Dome?", "Five seconds", ["One second", "Ten seconds", "Thirty seconds"], "Medium", "The Crystal Maze"],
    ["What happened to contestants who failed to leave a Crystal Maze game room before time ran out?", "They were locked in", ["They lost all their winnings", "They switched teams", "They went straight to the final"], "Easy", "The Crystal Maze"],

    // Supermarket Sweep
    ["Who was the much-loved original British presenter of Supermarket Sweep?", "Dale Winton", ["Les Dennis", "Roy Walker", "Keith Chegwin"], "Easy", "Supermarket Sweep"],
    ["Who hosted the British revival of Supermarket Sweep after Dale Winton?", "Rylan Clark-Neal", ["Ben Shephard", "Stephen Mulhern", "Vernon Kay"], "Easy", "Supermarket Sweep"],
    ["What did players race around collecting during the Supermarket Sweep?", "Groceries and other products", ["Playing cards", "Sports equipment", "Musical instruments"], "Easy", "Supermarket Sweep"],
    ["What did contestants push around the aisles during the Supermarket Sweep?", "Shopping trolleys", ["Wheelbarrows", "Luggage carts", "Prams"], "Easy", "Supermarket Sweep"],
    ["What determined how much time teams had for the supermarket dash?", "Time earned in earlier quiz rounds", ["A toss of a coin", "A drawing of numbered balls", "A vote by other teams"], "Medium", "Supermarket Sweep"],

    // Big Break
    ["Who presented the original snooker-themed game show Big Break?", "Jim Davidson", ["Jim Bowen", "Tony Green", "Ted Rogers"], "Easy", "Big Break"],
    ["Which snooker player co-hosted Big Break and supervised trick shots?", "John Virgo", ["Steve Davis", "Dennis Taylor", "Ray Reardon"], "Easy", "Big Break"],
    ["Which cue sport was at the centre of Big Break?", "Snooker", ["Pool", "Carom billiards", "Bar billiards"], "Easy", "Big Break"],
    ["What did contestants earn for their snooker partners by answering questions in Big Break's Red Hot round?", "Extra playing time", ["A new cue", "An automatic free ball", "An extra frame"], "Medium", "Big Break"],
    ["What kind of challenge was often offered to departing contestants on Big Break?", "A trick shot", ["A dart throw", "A word puzzle", "A singing challenge"], "Easy", "Big Break"],

    // Give Us a Clue
    ["Who was the original presenter of the television charades game Give Us a Clue?", "Michael Aspel", ["Michael Parkinson", "Tim Clark", "Tony Slattery"], "Easy", "Give Us a Clue"],
    ["Which chat-show host later presented Give Us a Clue after Michael Aspel?", "Michael Parkinson", ["Terry Wogan", "Clive Anderson", "Graham Norton"], "Easy", "Give Us a Clue"],
    ["Which entertainer captained one team on the classic Give Us a Clue?", "Lionel Blair", ["Larry Grayson", "Bob Holness", "Derek Batey"], "Easy", "Give Us a Clue"],
    ["Which actress captained a team opposite Lionel Blair in early Give Us a Clue?", "Una Stubbs", ["Isla St Clair", "Anthea Redfern", "Barbara Windsor"], "Easy", "Give Us a Clue"],
    ["Which actress later captained the women's team on Give Us a Clue?", "Liza Goddard", ["Patricia Hodge", "Felicity Kendal", "June Whitfield"], "Medium", "Give Us a Clue"],
    ["Which traditional party game formed the basis of Give Us a Clue?", "Charades", ["Bingo", "Dominoes", "Snap"], "Easy", "Give Us a Clue"],
    ["How did Give Us a Clue contestants communicate the titles they were given?", "By acting without speaking", ["By drawing on a board", "By humming a melody", "By writing anagrams"], "Easy", "Give Us a Clue"],
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, programme] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(4804 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['British Television', 'Quiz Shows', programme],
        dailyEligible: true
    };
});

module.exports = questions;
