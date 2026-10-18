// quiz_pack215.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British quiz and game shows - classic and modern
// 100 questions: tv_5304 to tv_5403

const facts = [
    // DOUBLE YOUR MONEY (6)
    ["Who hosted the classic television quiz Double Your Money?", "Hughie Green", ["Michael Miles", "Eamonn Andrews", "Leslie Crowther"], "Easy", "Double Your Money"],
    ["Which radio station broadcast Double Your Money before it moved to television?", "Radio Luxembourg", ["BBC Radio 2", "Radio Caroline", "BBC Home Service"], "Medium", "Double Your Money"],
    ["Which television network showed Double Your Money?", "ITV", ["BBC One", "BBC Two", "Channel 4"], "Easy", "Double Your Money"],
    ["How much did a contestant win for their first correct answer on Double Your Money?", "£1", ["10 shillings", "£5", "£10"], "Medium", "Double Your Money"],
    ["What was the highest prize in Double Your Money's initial series of doubling questions?", "£32", ["£16", "£64", "£128"], "Medium", "Double Your Money"],
    ["What was the higher-stakes challenge for successful returning contestants on Double Your Money called?", "The Treasure Trail", ["The Wonderwall", "The Golden Run", "The Money List"], "Medium", "Double Your Money"],

    // WHAT'S MY LINE? (6)
    ["Who was the best-known original British presenter of What's My Line?", "Eamonn Andrews", ["David Frost", "Michael Aspel", "Richard Dimbleby"], "Easy", "What's My Line?"],
    ["What did the panel try to discover about ordinary guests on What's My Line?", "Their occupations", ["Their ages", "Their hometowns", "Their middle names"], "Easy", "What's My Line?"],
    ["What type of questions could the panel ask on What's My Line?", "Questions answered yes or no", ["Multiple-choice questions", "Questions requiring a number", "Questions answered in writing"], "Easy", "What's My Line?"],
    ["Why did panellists wear blindfolds for the mystery guest on What's My Line?", "To avoid recognising a famous guest", ["To stop them reading cue cards", "To conceal the studio audience", "To test their sense of smell"], "Easy", "What's My Line?"],
    ["Which famously sharp-tongued broadcaster was a regular What's My Line? panellist?", "Gilbert Harding", ["David Coleman", "Kenneth Kendall", "Frank Bough"], "Medium", "What's My Line?"],
    ["Which actress took over as a presenter of What's My Line? after Eamonn Andrews died?", "Penelope Keith", ["Wendy Craig", "Pauline Collins", "Prunella Scales"], "Medium", "What's My Line?"],

    // CALL MY BLUFF (7)
    ["What did the teams try to identify on Call My Bluff?", "The genuine definition of a word", ["The writer of a poem", "The owner of a photograph", "The speaker of a quotation"], "Easy", "Call My Bluff"],
    ["How many possible definitions were offered for a word on Call My Bluff?", "Three", ["Two", "Four", "Five"], "Easy", "Call My Bluff"],
    ["How many of Call My Bluff's three definitions were invented?", "Two", ["One", "Three", "None"], "Easy", "Call My Bluff"],
    ["Who was the long-serving host of the original Call My Bluff?", "Robert Robinson", ["Robin Day", "Brian Walden", "Michael Parkinson"], "Medium", "Call My Bluff"],
    ["Which writer and broadcaster became a familiar Call My Bluff team captain?", "Frank Muir", ["Clive James", "John Betjeman", "Alan Bennett"], "Medium", "Call My Bluff"],
    ["Which former Blockbusters presenter hosted the daytime revival of Call My Bluff?", "Bob Holness", ["Bob Monkhouse", "John Craven", "Henry Kelly"], "Easy", "Call My Bluff"],
    ["Which comedian captained one of the teams opposite Alan Coren on the revived Call My Bluff?", "Sandi Toksvig", ["Victoria Wood", "Jo Brand", "Sue Perkins"], "Medium", "Call My Bluff"],

    // IT'S A KNOCKOUT (6)
    ["What did teams mainly compete in on It's a Knockout?", "Physical obstacle and novelty games", ["Spelling contests", "General-knowledge buzzer rounds", "Talent auditions"], "Easy", "It's a Knockout"],
    ["What did the teams in the original British It's a Knockout usually represent?", "Towns", ["Schools", "Political parties", "Radio stations"], "Easy", "It's a Knockout"],
    ["What was the international version of It's a Knockout called?", "Jeux Sans Frontières", ["Fort Boyard", "Intervilles Royale", "The Crystal Maze"], "Medium", "It's a Knockout"],
    ["Which rugby league commentator became a familiar judge and commentator on It's a Knockout?", "Eddie Waring", ["Bill McLaren", "David Coleman", "Murray Walker"], "Medium", "It's a Knockout"],
    ["What could a team play to double its points in a game on It's a Knockout?", "A joker", ["A golden ticket", "A red card", "A wild dice"], "Easy", "It's a Knockout"],
    ["Who co-presented the Channel 5 revival of It's a Knockout with Lucy Alexander?", "Keith Chegwin", ["Timmy Mallett", "Andy Crane", "John Leslie"], "Easy", "It's a Knockout"],

    // MONEYBAGS (8)
    ["Who presented Channel 4's daytime quiz Moneybags?", "Craig Charles", ["Danny Dyer", "Chris Kamara", "Rob Beckett"], "Easy", "Moneybags"],
    ["What carried the possible answers past players on Moneybags?", "A conveyor belt", ["A revolving table", "A miniature train", "A spinning wheel"], "Easy", "Moneybags"],
    ["What did Moneybags contestants have to grab to give an answer?", "A moneybag", ["A numbered envelope", "A coloured flag", "A playing card"], "Easy", "Moneybags"],
    ["How many contestants entered the studio at the start of a regular Moneybags episode?", "Ten", ["Six", "Eight", "Twelve"], "Medium", "Moneybags"],
    ["What was the value of the largest individual cash bag in Moneybags?", "£100,000", ["£10,000", "£50,000", "£250,000"], "Medium", "Moneybags"],
    ["How much cash travelled along the Moneybags conveyor belt across a week of shows?", "£1 million", ["£100,000", "£500,000", "£5 million"], "Medium", "Moneybags"],
    ["What could a Steal bag allow a player to do on Moneybags?", "Take money from an opponent", ["Skip the next question", "Choose a different presenter", "Bring back an eliminated player"], "Easy", "Moneybags"],
    ["What was the three-way round involving the leading Moneybags contestants called?", "The Triple-Header", ["The Money List", "The Golden Run", "The End Game"], "Medium", "Moneybags"],

    // SITTING ON A FORTUNE (7)
    ["Which former England footballer presented Sitting on a Fortune?", "Gary Lineker", ["Alan Shearer", "Ian Wright", "Peter Crouch"], "Easy", "Sitting on a Fortune"],
    ["How many contestants took their places on Sitting on a Fortune's line of chairs?", "Six", ["Four", "Five", "Eight"], "Easy", "Sitting on a Fortune"],
    ["Which contestant got to answer questions on Sitting on a Fortune?", "The one in the front chair", ["The one in the last chair", "The one chosen by the audience", "The one sitting in the middle"], "Easy", "Sitting on a Fortune"],
    ["What happened when the front player answered incorrectly on Sitting on a Fortune?", "They went to the back of the queue", ["They won a consolation prize", "They moved one chair forward", "They chose a new category"], "Easy", "Sitting on a Fortune"],
    ["What was the maximum jackpot on Sitting on a Fortune?", "£100,000", ["£25,000", "£50,000", "£250,000"], "Medium", "Sitting on a Fortune"],
    ["How much did a wrong answer reduce the jackpot by in Sitting on a Fortune's final?", "£10,000", ["£1,000", "£5,000", "£20,000"], "Medium", "Sitting on a Fortune"],
    ["Which traditional quiz-show feature was not offered on Sitting on a Fortune?", "Formal lifelines", ["Multiple-choice answers", "A cash jackpot", "A presenter asking questions"], "Easy", "Sitting on a Fortune"],

    // WINNING COMBINATION (7)
    ["Which comedian presented the ITV quiz Winning Combination?", "Omid Djalili", ["Jason Manford", "Jimmy Carr", "John Bishop"], "Easy", "Winning Combination"],
    ["How many contestants began a game of Winning Combination?", "Nine", ["Six", "Eight", "Ten"], "Medium", "Winning Combination"],
    ["What was each Winning Combination player allocated at the start?", "A number from one to nine", ["A playing-card suit", "A coloured ball", "A letter of the alphabet"], "Easy", "Winning Combination"],
    ["How many players made up the final Winning Combination?", "Four", ["Two", "Three", "Five"], "Easy", "Winning Combination"],
    ["What determined the amount of the final jackpot in Winning Combination?", "The order of the finalists' numbers", ["The studio audience's vote", "The time taken in round one", "The presenter's choice"], "Medium", "Winning Combination"],
    ["What were the elimination contests between contenders on Winning Combination called?", "Battle Rounds", ["Cash Duels", "The Link Round", "Answer Smash"], "Medium", "Winning Combination"],
    ["What determined how many questions each finalist had to answer in Winning Combination?", "Their assigned digit", ["Their age", "Their finishing position in round one", "The number of opponents they eliminated"], "Medium", "Winning Combination"],

    // THE SWITCH (7)
    ["Who hosted ITV's daytime quiz The Switch?", "Sanjeev Bhaskar", ["Adil Ray", "Ben Shephard", "Richard Osman"], "Easy", "The Switch"],
    ["How many contestants started a regular episode of The Switch?", "Four", ["Three", "Five", "Six"], "Medium", "The Switch"],
    ["What was The Switch's opening timed general-knowledge round called?", "Easy Money", ["Quick Fire", "The Money List", "First Past the Post"], "Medium", "The Switch"],
    ["What could a contestant do with a topic on The Switch's Category Board?", "Freeze it or swap it", ["Auction it to another contestant", "Double its prize value", "Give it to the presenter"], "Medium", "The Switch"],
    ["How many of the four possible answers were wrong in a main question on The Switch?", "One", ["Two", "Three", "Four"], "Easy", "The Switch"],
    ["What did it mean to be switched out during The Switch?", "Having to take the answer left by the others", ["Receiving a bonus question", "Choosing the next round's prize", "Moving straight to the final"], "Medium", "The Switch"],
    ["How many completed circuits of the final categories doubled the winner's bank on The Switch?", "Three", ["One", "Two", "Four"], "Medium", "The Switch"],

    // THE BOSS (6)
    ["Which Scottish comedian hosted the BBC quiz The Boss?", "Susan Calman", ["Janey Godley", "Fern Brady", "Elaine C. Smith"], "Easy", "The Boss"],
    ["How many players formed the starting workforce on The Boss?", "Five", ["Three", "Four", "Six"], "Medium", "The Boss"],
    ["What was the most powerful position in the quiz The Boss called?", "The Boss", ["The Banker", "The Chaser", "The Captain"], "Easy", "The Boss"],
    ["What could challengers attempt to become during The Boss?", "The new boss", ["The studio announcer", "A quiz expert", "A guest host"], "Easy", "The Boss"],
    ["Where did two selected players face puzzles to decide which one left The Boss?", "The boss's office", ["The vault", "The money chair", "The isolation booth"], "Medium", "The Boss"],
    ["What did The Boss contestants answer during a quickfire challenge against the clock?", "Multiple-choice questions", ["Cryptic crossword clues only", "Musical introductions only", "Celebrity photographs only"], "Easy", "The Boss"],

    // BREAKAWAY (6)
    ["Who hosted the BBC quiz Breakaway?", "Nick Hancock", ["Bob Mortimer", "Richard Bacon", "Steve Jones"], "Easy", "Breakaway"],
    ["How many contestants began together on Breakaway?", "Six", ["Four", "Five", "Eight"], "Medium", "Breakaway"],
    ["What was unusual about the contestants' progress through Breakaway?", "They moved along a track", ["They climbed a spiral staircase", "They spun in suspended chairs", "They travelled on a studio train"], "Easy", "Breakaway"],
    ["In the first series of Breakaway, how many correct answers were needed to reach the finish?", "Thirty", ["Ten", "Twenty", "Forty"], "Medium", "Breakaway"],
    ["What could a Breakaway contestant choose to do instead of staying with the main group?", "Break away to play separately", ["Ask the audience to choose a category", "Buy a second life from the host", "Swap scores with another player"], "Easy", "Breakaway"],
    ["What happened to the remaining money if the whole Breakaway team reached the finish together?", "It was shared among the team", ["It all went to the team captain", "It was doubled for one random player", "It was donated to a television charity"], "Easy", "Breakaway"],

    // THE LINK (6)
    ["Which actor hosted the BBC quiz The Link?", "Mark Williams", ["Mark Benton", "Martin Clunes", "Adrian Chiles"], "Easy", "The Link"],
    ["How many pairs competed in a regular episode of The Link?", "Three", ["Two", "Four", "Five"], "Medium", "The Link"],
    ["What did players need to discover between clues on The Link?", "A connection", ["A missing date", "A hidden celebrity photograph", "A spelling mistake"], "Easy", "The Link"],
    ["What did solving a connection allow contestants to remove on The Link?", "Links holding up cash prizes", ["Letters from a giant word", "Coloured squares from a maze", "Locks on a studio door"], "Medium", "The Link"],
    ["How many money amounts were displayed on the opening board of The Link?", "Six", ["Three", "Four", "Eight"], "Medium", "The Link"],
    ["Which board game inspired the television quiz The Link?", "Linkee", ["Articulate!", "Trivial Pursuit", "Scattergories"], "Medium", "The Link"],

    // DECIMATE (6)
    ["Which EastEnders actor presented the BBC quiz Decimate?", "Shane Richie", ["Ross Kemp", "Adam Woodyatt", "Steve McFadden"], "Easy", "Decimate"],
    ["How many players formed each team on Decimate?", "Three", ["Two", "Four", "Five"], "Easy", "Decimate"],
    ["How much money did teams begin by defending on Decimate?", "£20,000", ["£5,000", "£10,000", "£50,000"], "Medium", "Decimate"],
    ["What visual feature represented a team's prize fund on Decimate?", "A wall of golden lights", ["A tower of coins", "A row of numbered suitcases", "A spinning money wheel"], "Easy", "Decimate"],
    ["Into how many equal segments was the starting prize fund divided on Decimate?", "Ten", ["Five", "Eight", "Twelve"], "Medium", "Decimate"],
    ["What happened to part of a team's potential winnings after a wrong answer on Decimate?", "It disappeared from the money wall", ["It moved into a bonus pot", "It was awarded to the presenter", "It doubled for the next round"], "Easy", "Decimate"],

    // LETTERBOX (6)
    ["Who presented the BBC word game Letterbox?", "Mel Giedroyc", ["Sue Perkins", "Sandi Toksvig", "Sara Cox"], "Easy", "Letterbox"],
    ["What did Letterbox players try to uncover by guessing letters?", "A hidden word", ["A mystery address", "A celebrity's signature", "An unknown number"], "Easy", "Letterbox"],
    ["What happened when a guessed letter did not appear in the Letterbox word?", "Play passed to the opponent", ["The word was automatically revealed", "Both players lost their scores", "The prize money doubled"], "Easy", "Letterbox"],
    ["How many pairs took part at the start of Letterbox?", "Four", ["Two", "Three", "Six"], "Medium", "Letterbox"],
    ["How many letters were in Letterbox's final mystery password?", "Eight", ["Five", "Six", "Ten"], "Medium", "Letterbox"],
    ["What was the maximum cash prize available in Letterbox?", "£2,500", ["£1,000", "£5,000", "£10,000"], "Medium", "Letterbox"],

    // THINK TANK (6)
    ["Which former BBC Breakfast presenter hosted the quiz Think Tank?", "Bill Turnbull", ["Charlie Stayt", "Dan Walker", "Jeremy Bowen"], "Easy", "Think Tank"],
    ["How many main contestants competed on the BBC quiz Think Tank?", "Three", ["Two", "Four", "Six"], "Medium", "Think Tank"],
    ["Who supplied possible answers for contestants to use on Think Tank?", "A regular panel of helpers", ["Only the studio audience", "A celebrity guest each day", "A computer chosen at random"], "Easy", "Think Tank"],
    ["What had the Think Tank helpers done before the studio contestants played?", "Answered the quiz questions themselves", ["Written all the questions", "Interviewed the contestants", "Chosen the cash prize"], "Medium", "Think Tank"],
    ["What was the last challenge on Think Tank called?", "Question: Impossible", ["The Wonderwall", "3 in 10", "The Golden Run"], "Medium", "Think Tank"],
    ["Why was Think Tank's final Question: Impossible especially difficult?", "Every helper had answered it incorrectly", ["It had no correct option", "It required an answer in another language", "It had been written by a rival contestant"], "Medium", "Think Tank"],

    // THE $64,000 QUESTION (5)
    ["Who hosted the 1990s British revival of The $64,000 Question?", "Bob Monkhouse", ["Bob Holness", "Bruce Forsyth", "Jim Davidson"], "Easy", "The $64,000 Question"],
    ["Which entertainer hosted the original 1950s British version of The 64,000 Question?", "Jerry Desmonde", ["Hughie Green", "Michael Miles", "Leslie Crowther"], "Medium", "The $64,000 Question"],
    ["What kind of subject did contestants choose for their questions on The $64,000 Question?", "A specialist subject", ["A topic selected by another contestant", "A subject picked by the audience", "A random school subject"], "Easy", "The $64,000 Question"],
    ["What was the dramatic booth for major questions on Bob Monkhouse's The $64,000 Question called?", "The Isolator", ["The Vortex", "The Vault", "The Money Chair"], "Medium", "The $64,000 Question"],
    ["What was the actual top cash prize on Bob Monkhouse's British version of The $64,000 Question?", "£6,400", ["£64,000", "£16,000", "£32,000"], "Medium", "The $64,000 Question"],

    // ARE YOU SMARTER THAN A 10 YEAR OLD? (5)
    ["Who presented the primetime British version of Are You Smarter Than a 10 Year Old?", "Noel Edmonds", ["Phillip Schofield", "Chris Tarrant", "Dale Winton"], "Easy", "Are You Smarter Than a 10 Year Old?"],
    ["Which duo hosted the daytime version of Are You Smarter Than a 10 Year Old?", "Dick and Dom", ["Ant and Dec", "Sam and Mark", "Jedward"], "Easy", "Are You Smarter Than a 10 Year Old?"],
    ["Which television channel originally broadcast Britain's Are You Smarter Than a 10 Year Old?", "Sky One", ["BBC One", "ITV", "Channel 4"], "Medium", "Are You Smarter Than a 10 Year Old?"],
    ["Questions on Are You Smarter Than a 10 Year Old? were based on what?", "The school National Curriculum", ["University entrance exams", "Television advertising slogans", "Newspaper headlines"], "Easy", "Are You Smarter Than a 10 Year Old?"],
    ["How many schoolchildren made up the class helping adults on Are You Smarter Than a 10 Year Old?", "Five", ["Three", "Four", "Six"], "Medium", "Are You Smarter Than a 10 Year Old?"],
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, programme] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(5304 + index).padStart(4, '0'),
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
