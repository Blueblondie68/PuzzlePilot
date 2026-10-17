// quiz_pack211.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British quiz, game and panel shows
// 100 questions: tv_4904 to tv_5003
// Leave quiz_bank.js unchanged until the end of the evening.

const facts = [
    // Wheel of Fortune
    ["Who presented the original British Wheel of Fortune for most of its first decade?", "Nicky Campbell", ["John Leslie", "Bradley Walsh", "Graham Norton"], "Easy", "Wheel of Fortune"],
    ["Which television personality turned the letters on Wheel of Fortune during much of Nicky Campbell's run?", "Carol Smillie", ["Rachel Riley", "Anthea Turner", "Isla St Clair"], "Easy", "Wheel of Fortune"],
    ["Who succeeded Carol Smillie as a regular letter-turner on Wheel of Fortune?", "Jenny Powell", ["Carol Vorderman", "Fern Britton", "Angela Rippon"], "Medium", "Wheel of Fortune"],
    ["Which future host of The Chase presented a series of the British Wheel of Fortune?", "Bradley Walsh", ["Alexander Armstrong", "Ben Shephard", "Jeremy Vine"], "Easy", "Wheel of Fortune"],
    ["Which comedian and chat-show presenter fronted ITV's revived Wheel of Fortune?", "Graham Norton", ["Alan Carr", "Jonathan Ross", "Michael McIntyre"], "Easy", "Wheel of Fortune"],
    ["On Wheel of Fortune, what did contestants usually try to solve from gradually revealed letters?", "A word or phrase puzzle", ["A number grid", "A picture jigsaw", "A crossword with clues"], "Easy", "Wheel of Fortune"],
    ["What could players buy using their points on the classic British Wheel of Fortune?", "Vowels", ["Extra contestants", "New puzzle categories", "Longer time limits"], "Easy", "Wheel of Fortune"],
    ["What happened when a Wheel of Fortune contestant landed on Bankrupt?", "They lost their points for that round", ["They won a bonus prize", "They changed places with the host", "They skipped straight to the final"], "Easy", "Wheel of Fortune"],
    ["Which space on the Wheel of Fortune wheel made a contestant miss their go without losing their points?", "Lose a Turn", ["Free Spin", "Jackpot", "Bonus Prize"], "Easy", "Wheel of Fortune"],
    ["How many contestants normally competed in a classic British Wheel of Fortune game?", "Three", ["Two", "Four", "Six"], "Easy", "Wheel of Fortune"],

    // Never Mind the Buzzcocks
    ["Who was the original host of Never Mind the Buzzcocks?", "Mark Lamarr", ["Simon Amstell", "Greg Davies", "Rhod Gilbert"], "Easy", "Never Mind the Buzzcocks"],
    ["Which comedian became a regular Buzzcocks presenter after Mark Lamarr?", "Simon Amstell", ["Jimmy Carr", "Dara O Briain", "Jack Dee"], "Easy", "Never Mind the Buzzcocks"],
    ["Who hosts the Sky revival of Never Mind the Buzzcocks?", "Greg Davies", ["Lee Mack", "Rob Brydon", "Romesh Ranganathan"], "Easy", "Never Mind the Buzzcocks"],
    ["Which comedian was a team captain throughout the original BBC run of Never Mind the Buzzcocks?", "Phill Jupitus", ["Frank Skinner", "David Mitchell", "Peter Kay"], "Easy", "Never Mind the Buzzcocks"],
    ["Which Irish comedian was an original team captain on Never Mind the Buzzcocks?", "Sean Hughes", ["Ardal O'Hanlon", "Dylan Moran", "Ed Byrne"], "Medium", "Never Mind the Buzzcocks"],
    ["Which musical comedian became a Buzzcocks team captain after Sean Hughes?", "Bill Bailey", ["Tim Minchin", "Ross Noble", "Milton Jones"], "Easy", "Never Mind the Buzzcocks"],
    ["Which Mighty Boosh star became a regular Buzzcocks team captain?", "Noel Fielding", ["Julian Barratt", "Richard Ayoade", "Matt Berry"], "Easy", "Never Mind the Buzzcocks"],
    ["What must a Buzzcocks teammate identify in the famous Intros Round?", "A song from a teammate's vocal imitation", ["A singer from a photograph", "A record from its sleeve", "A song from its first lyric"], "Easy", "Never Mind the Buzzcocks"],
    ["What do teams try to pick out from a line-up in Buzzcocks' Identity Parade?", "A former musician or singer", ["A mystery television presenter", "A disguised sports referee", "A record company executive"], "Easy", "Never Mind the Buzzcocks"],
    ["In the Buzzcocks round Next Lines, what must players supply?", "The following line of a song", ["The next note of a melody", "The title of an album", "The next artist on a chart"], "Easy", "Never Mind the Buzzcocks"],

    // Take Your Pick
    ["Who was the original presenter of the classic British game show Take Your Pick?", "Michael Miles", ["Hughie Green", "Bob Monkhouse", "Nicholas Parsons"], "Medium", "Take Your Pick"],
    ["Which entertainer presented the popular 1990s revival of Take Your Pick?", "Des O'Connor", ["Les Dennis", "Michael Aspel", "Terry Wogan"], "Easy", "Take Your Pick"],
    ["Which two short words were forbidden during Take Your Pick's famous opening interlude?", "Yes and no", ["True and false", "Right and wrong", "Please and thanks"], "Easy", "Take Your Pick"],
    ["What sound signalled a contestant's failure in Take Your Pick's Yes-No Interlude?", "A gong", ["A whistle", "An air horn", "A bell on a bicycle"], "Easy", "Take Your Pick"],
    ["What did contestants choose to discover their mystery prize on Take Your Pick?", "A key to a numbered box", ["A sealed playing card", "A coloured balloon", "A ticket from a raffle drum"], "Easy", "Take Your Pick"],
    ["Which numbered box became a particularly famous mystery on Take Your Pick?", "Box 13", ["Box 7", "Box 21", "Box 99"], "Easy", "Take Your Pick"],
    ["What offer did the presenter make to tempt Take Your Pick contestants away from a mystery prize?", "Cash to buy back their key", ["A second attempt at the quiz", "A place in next week's show", "The chance to swap opponents"], "Easy", "Take Your Pick"],
    ["How long did contestants have to avoid the forbidden words in Take Your Pick's Yes-No Interlude?", "One minute", ["Thirty seconds", "Two minutes", "Five minutes"], "Medium", "Take Your Pick"],

    // Celebrity Squares
    ["Who presented the classic ITV game show Celebrity Squares?", "Bob Monkhouse", ["Leslie Crowther", "Michael Barrymore", "Roy Walker"], "Easy", "Celebrity Squares"],
    ["Which actor hosted ITV's later revival of Celebrity Squares?", "Warwick Davis", ["David Tennant", "Stephen Fry", "Richard Ayoade"], "Easy", "Celebrity Squares"],
    ["How many celebrities occupied the squares on Celebrity Squares' main game board?", "Nine", ["Six", "Twelve", "Sixteen"], "Easy", "Celebrity Squares"],
    ["Which traditional pen-and-paper game inspired the Celebrity Squares format?", "Noughts and crosses", ["Battleships", "Hangman", "Consequences"], "Easy", "Celebrity Squares"],
    ["What did contestants decide after a Celebrity Squares star answered a question?", "Whether they agreed or disagreed", ["Whether they wanted another celebrity", "Whether to double their stake", "Whether to change teams"], "Easy", "Celebrity Squares"],
    ["Which satirist and comedian was a familiar occupant of the centre square on Celebrity Squares?", "Willie Rushton", ["Peter Cook", "Bernard Manning", "Ken Dodd"], "Medium", "Celebrity Squares"],
    ["What was special about the Secret Square on Celebrity Squares?", "It carried an extra prize", ["It removed a contestant", "It was never occupied", "It counted as two crosses"], "Medium", "Celebrity Squares"],
    ["Which American game show was the model for Britain's Celebrity Squares?", "Hollywood Squares", ["The Match Game", "Jeopardy!", "Let's Make a Deal"], "Medium", "Celebrity Squares"],

    // Ask the Family
    ["Who was the long-serving original host of the BBC quiz Ask the Family?", "Robert Robinson", ["Bamber Gascoigne", "Derek Batey", "Kenneth Kendall"], "Medium", "Ask the Family"],
    ["Which gardening television presenter later hosted a revival of Ask the Family?", "Alan Titchmarsh", ["Monty Don", "Charlie Dimmock", "Diarmuid Gavin"], "Medium", "Ask the Family"],
    ["Which children's television double act later fronted a version of Ask the Family?", "Dick and Dom", ["Ant and Dec", "Sam and Mark", "Trev and Simon"], "Easy", "Ask the Family"],
    ["How many people made up each family team on the original Ask the Family?", "Four", ["Two", "Three", "Five"], "Medium", "Ask the Family"],
    ["Which relatives made up the standard teams in the original Ask the Family?", "Two parents and two children", ["Four grandparents", "Four siblings", "An aunt and three cousins"], "Medium", "Ask the Family"],
    ["What type of programme was Ask the Family?", "A family general-knowledge quiz", ["A television talent contest", "A home renovation competition", "A celebrity cooking competition"], "Easy", "Ask the Family"],

    // Treasure Hunt
    ["Which former BBC newsreader hosted Channel 4's original Treasure Hunt?", "Kenneth Kendall", ["Richard Whiteley", "Peter Sissons", "Michael Buerk"], "Medium", "Treasure Hunt"],
    ["Which presenter became famous as the original Skyrunner on Treasure Hunt?", "Anneka Rice", ["Suzi Perry", "Annabel Croft", "Wincey Willis"], "Easy", "Treasure Hunt"],
    ["Which means of transport carried Treasure Hunt's Skyrunner between clues?", "A helicopter", ["A hot-air balloon", "A speedboat", "A vintage train"], "Easy", "Treasure Hunt"],
    ["Which television weather presenter helped monitor progress in the studio on Treasure Hunt?", "Wincey Willis", ["Carol Kirkwood", "Sian Lloyd", "Ulrika Jonsson"], "Medium", "Treasure Hunt"],
    ["Which former tennis player took over as Treasure Hunt's Skyrunner after Anneka Rice?", "Annabel Croft", ["Sue Barker", "Virginia Wade", "Jo Durie"], "Medium", "Treasure Hunt"],
    ["What did Treasure Hunt's studio contestants have to solve to guide the Skyrunner?", "Cryptic location clues", ["Crosswords about celebrities", "Sports betting slips", "Anagrams of song titles"], "Easy", "Treasure Hunt"],

    // Don't Forget Your Toothbrush
    ["Who presented the Channel 4 entertainment show Don't Forget Your Toothbrush?", "Chris Evans", ["Noel Edmonds", "Jonathan Ross", "Michael Barrymore"], "Easy", "Don't Forget Your Toothbrush"],
    ["Which channel originally broadcast Don't Forget Your Toothbrush?", "Channel 4", ["ITV", "BBC One", "Sky One"], "Easy", "Don't Forget Your Toothbrush"],
    ["Which two travel essentials did audience members need to bring to Don't Forget Your Toothbrush?", "A passport and packed suitcase", ["A map and a camera", "A ticket and a timetable", "A sleeping bag and a tent"], "Easy", "Don't Forget Your Toothbrush"],
    ["What type of prize could successful contestants leave the studio to enjoy immediately on Don't Forget Your Toothbrush?", "A holiday", ["A new car", "A house", "A cruise ship job"], "Easy", "Don't Forget Your Toothbrush"],
    ["What was the name of the holiday-deciding quiz finale on Don't Forget Your Toothbrush?", "Light Your Lemon", ["Spin to Win", "Golden Medley", "Gold Run"], "Medium", "Don't Forget Your Toothbrush"],

    // You Bet!
    ["Which entertainer was the first presenter of ITV's You Bet!?", "Bruce Forsyth", ["Matthew Kelly", "Darren Day", "Les Dennis"], "Easy", "You Bet!"],
    ["Who followed Bruce Forsyth as the main host of You Bet!?", "Matthew Kelly", ["Ted Rogers", "Roy Walker", "Keith Chegwin"], "Easy", "You Bet!"],
    ["Which singer and actor presented the final series of the original You Bet!?", "Darren Day", ["Shane Richie", "Jason Donovan", "Michael Ball"], "Medium", "You Bet!"],
    ["What were celebrities and the studio audience asked to predict on You Bet!?", "Whether a challenger could complete a feat", ["Which song would top the chart", "Which television show would win an award", "Who would win a general-knowledge quiz"], "Easy", "You Bet!"],
    ["Which presenting duo hosted the ITV revival of You Bet!?", "Holly Willoughby and Stephen Mulhern", ["Ant and Dec", "Claudia Winkleman and Tess Daly", "Bradley Walsh and Holly Walsh"], "Medium", "You Bet!"],

    // Deal or No Deal
    ["Who originally hosted the British Deal or No Deal?", "Noel Edmonds", ["Chris Tarrant", "Des O'Connor", "Richard Madeley"], "Easy", "Deal or No Deal"],
    ["Which presenter took over the revived British Deal or No Deal on ITV?", "Stephen Mulhern", ["Ben Shephard", "Rylan Clark", "Vernon Kay"], "Easy", "Deal or No Deal"],
    ["What was the mysterious person making cash offers called on Deal or No Deal?", "The Banker", ["The Broker", "The Dealer", "The Treasurer"], "Easy", "Deal or No Deal"],
    ["How many sealed boxes were in play on the classic British Deal or No Deal?", "22", ["16", "20", "26"], "Easy", "Deal or No Deal"],
    ["What was the smallest cash amount hidden in an original British Deal or No Deal box?", "1p", ["10p", "50p", "£1"], "Easy", "Deal or No Deal"],
    ["What was the biggest prize in the original Noel Edmonds version of Deal or No Deal?", "£250,000", ["£100,000", "£500,000", "£1 million"], "Easy", "Deal or No Deal"],
    ["What did a contestant agree to accept by saying 'Deal' on Deal or No Deal?", "The Banker's cash offer", ["The smallest unopened box", "An extra turn to open a box", "A prize chosen by the audience"], "Easy", "Deal or No Deal"],
    ["Why did Deal or No Deal contestants open other players' boxes?", "To reveal amounts that were no longer available", ["To award each player a consolation prize", "To collect letters for a puzzle", "To determine the next studio presenter"], "Easy", "Deal or No Deal"],

    // The Cube
    ["Who presented ITV's original physical challenge show The Cube?", "Phillip Schofield", ["Stephen Mulhern", "Ben Shephard", "Gordon Burns"], "Easy", "The Cube"],
    ["How many lives did contestants start with on the original version of The Cube?", "Nine", ["Five", "Seven", "Twelve"], "Medium", "The Cube"],
    ["How many games stood between contestants and the original jackpot on The Cube?", "Seven", ["Four", "Five", "Ten"], "Medium", "The Cube"],
    ["What was the original maximum cash prize on The Cube?", "£250,000", ["£50,000", "£100,000", "£500,000"], "Easy", "The Cube"],
    ["What was the masked demonstrator on The Cube known as?", "The Body", ["The Shadow", "The Master", "The Phantom"], "Medium", "The Cube"],
    ["What did the Simplify aid do on The Cube?", "Made a challenge easier", ["Restored every lost life", "Doubled the prize money", "Skipped directly to the final"], "Easy", "The Cube"],
    ["What did the Trial Run aid allow a contestant on The Cube to do?", "Practise a challenge without risking a life", ["Watch another contestant compete", "Replace the challenge with a quiz", "Add a minute to every future game"], "Medium", "The Cube"],

    // Have I Got News for You
    ["Who originally hosted Have I Got News for You before guest presenters took over?", "Angus Deayton", ["Jeremy Clarkson", "Clive Anderson", "Jonathan Ross"], "Easy", "Have I Got News for You"],
    ["Which magazine editor is a long-serving Have I Got News for You team captain?", "Ian Hislop", ["Andrew Neil", "Piers Morgan", "David Aaronovitch"], "Easy", "Have I Got News for You"],
    ["Which comedian is the other long-serving Have I Got News for You team captain?", "Paul Merton", ["Lee Mack", "Dara O Briain", "Jack Dee"], "Easy", "Have I Got News for You"],
    ["Which satirical magazine is closely associated with Have I Got News for You captain Ian Hislop?", "Private Eye", ["The Spectator", "Punch", "New Statesman"], "Easy", "Have I Got News for You"],
    ["What kind of presenter has Have I Got News for You used since Angus Deayton left?", "A different guest host", ["A rotating newsreader from a single channel", "A member of the studio audience", "The winning team captain"], "Easy", "Have I Got News for You"],
    ["What do panellists complete in Have I Got News for You's Missing Words round?", "Gaps in newspaper headlines", ["Lyrics of famous songs", "Crossword grids", "Quotes from Shakespeare"], "Easy", "Have I Got News for You"],
    ["In Have I Got News for You's Odd One Out round, what must teams identify?", "Which item does not fit a particular connection", ["Which newspaper sold the most copies", "Which guest was once a presenter", "Which word completes a headline"], "Easy", "Have I Got News for You"],

    // Would I Lie to You?
    ["Who presented the earliest series of Would I Lie to You?", "Angus Deayton", ["Rob Brydon", "Jimmy Carr", "Stephen Fry"], "Easy", "Would I Lie to You?"],
    ["Which Welsh comedian took over as presenter of Would I Lie to You?", "Rob Brydon", ["Rhod Gilbert", "Greg Davies", "Alex Jones"], "Easy", "Would I Lie to You?"],
    ["Which comedian captains one of the teams on Would I Lie to You? alongside David Mitchell?", "Lee Mack", ["Frank Skinner", "Jack Whitehall", "Josh Widdicombe"], "Easy", "Would I Lie to You?"],
    ["Which Peep Show actor is a team captain on Would I Lie to You?", "David Mitchell", ["Robert Webb", "Matt King", "Paterson Joseph"], "Easy", "Would I Lie to You?"],
    ["What are players trying to identify in the basic game of Would I Lie to You?", "Whether a personal story is true or invented", ["Whether a song reached number one", "Whether a celebrity can act a charade", "Whether a word is in the dictionary"], "Easy", "Would I Lie to You?"],
    ["What must contestants identify in Would I Lie to You?'s This Is My... round?", "Who genuinely knows a mystery guest", ["Who has won the most television awards", "Who can recognise a theme tune", "Who has the highest quiz score"], "Easy", "Would I Lie to You?"],
    ["What is the name of the round where Would I Lie to You? panellists read unusual statements about themselves?", "Home Truths", ["General Ignorance", "Mystery Voices", "Gold Run"], "Medium", "Would I Lie to You?"],

    // QI
    ["What do the initials QI stand for in the BBC comedy quiz?", "Quite Interesting", ["Quick Intelligence", "Quiz International", "Question Investigation"], "Easy", "QI"],
    ["Who was the original host of QI?", "Stephen Fry", ["Sandi Toksvig", "Alan Davies", "John Lloyd"], "Easy", "QI"],
    ["Which broadcaster succeeded Stephen Fry as host of QI?", "Sandi Toksvig", ["Victoria Coren Mitchell", "Jo Brand", "Sue Perkins"], "Easy", "QI"],
    ["Which comedian is QI's regular panellist, usually sitting nearest the host?", "Alan Davies", ["Bill Bailey", "Jimmy Carr", "David Mitchell"], "Easy", "QI"],
    ["What often sounds on QI when a panellist gives an obvious but mistaken answer?", "A klaxon", ["A bicycle bell", "A drum roll", "A trumpet fanfare"], "Easy", "QI"],
    ["How are the main series of QI organised by theme?", "Each is based on a letter of the alphabet", ["Each follows one British county", "Each is named after a planet", "Each covers one Olympic sport"], "Medium", "QI"],

    // Taskmaster
    ["Which comedian plays the all-powerful judge on Taskmaster?", "Greg Davies", ["Alex Horne", "Frank Skinner", "Jimmy Carr"], "Easy", "Taskmaster"],
    ["Who acts as the Taskmaster's assistant, supervising the unusual challenges?", "Alex Horne", ["Richard Osman", "Tim Key", "Ed Gamble"], "Easy", "Taskmaster"],
    ["On which channel did Taskmaster originally appear before moving to Channel 4?", "Dave", ["BBC Three", "Sky One", "ITV2"], "Medium", "Taskmaster"],
    ["Which channel became Taskmaster's home after its original run on Dave?", "Channel 4", ["BBC Two", "ITV", "Channel 5"], "Easy", "Taskmaster"],
    ["How many comedians usually compete across a full series of Taskmaster?", "Five", ["Three", "Four", "Six"], "Easy", "Taskmaster"],
    ["What unusual trophy does the winner of a Taskmaster series receive?", "A golden head of Greg Davies", ["A crystal cube", "A giant silver key", "A golden microphone"], "Easy", "Taskmaster"],
    ["Which Taskmaster regular originally devised the programme?", "Alex Horne", ["Greg Davies", "Richard Ayoade", "Bob Mortimer"], "Medium", "Taskmaster"],
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, programme] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(4904 + index).padStart(4, '0'),
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
