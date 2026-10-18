// quiz_pack222.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British adult quiz and game shows - important omissions
// 100 questions: tv_6004 to tv_6103

const facts = [
    // JEOPARDY! (8)
    ["Who presented ITV's modern British revival of Jeopardy!?", "Stephen Fry", ["Richard Madeley", "Paul Ross", "Steve Jones"], "Easy", "Jeopardy!"],
    ["Who hosted the earliest British television version of Jeopardy!?", "Derek Hobson", ["Chris Donat", "Steve Jones", "Paul Ross"], "Medium", "Jeopardy!"],
    ["Which channel broadcast the first British television version of Jeopardy!?", "Channel 4", ["BBC One", "ITV", "Sky One"], "Medium", "Jeopardy!"],
    ["How must contestants normally phrase their responses on Jeopardy!?", "In the form of a question", ["As a single number", "As a complete quotation", "In alphabetical order"], "Easy", "Jeopardy!"],
    ["What is the special Jeopardy! clue that allows one contestant to wager money called?", "Daily Double", ["Double Chance", "Cash Builder", "Bonus Bank"], "Medium", "Jeopardy!"],
    ["What is the concluding wager-based round of Jeopardy! called?", "Final Jeopardy", ["Ultimate Question", "Last Chance", "The Final Word"], "Easy", "Jeopardy!"],
    ["What is the Jeopardy! round with higher clue values called?", "Double Jeopardy", ["Super Jeopardy", "Golden Jeopardy", "Maximum Jeopardy"], "Medium", "Jeopardy!"],
    ["Which presenter hosted the British Sky One version of Jeopardy!?", "Paul Ross", ["Simon Mayo", "Derek Hobson", "Nick Hancock"], "Medium", "Jeopardy!"],

    // I LITERALLY JUST TOLD YOU (8)
    ["Who hosts the comedy memory quiz I Literally Just Told You?", "Jimmy Carr", ["Alan Carr", "Tom Allen", "Rob Brydon"], "Easy", "I Literally Just Told You"],
    ["Which channel broadcasts I Literally Just Told You?", "Channel 4", ["ITV", "BBC Two", "Channel 5"], "Easy", "I Literally Just Told You"],
    ["What makes the questions on I Literally Just Told You unusual?", "They test things contestants have just seen or heard", ["They are written by other contestants at home", "They must all be answered backwards", "They are drawn from old exam papers"], "Easy", "I Literally Just Told You"],
    ["How many contestants begin a regular game of I Literally Just Told You?", "Four", ["Three", "Five", "Six"], "Medium", "I Literally Just Told You"],
    ["Which former television presenter devised I Literally Just Told You?", "Richard Bacon", ["Richard Osman", "Chris Evans", "Nick Grimshaw"], "Medium", "I Literally Just Told You"],
    ["Which space scientist helped set questions during the early series of I Literally Just Told You?", "Maggie Aderin-Pocock", ["Alice Roberts", "Helen Czerski", "Hannah Fry"], "Medium", "I Literally Just Told You"],
    ["What apparently routine event on I Literally Just Told You has sometimes turned out to be part of the memory test?", "An advert break", ["The end credits", "A weather forecast", "An audience vote"], "Medium", "I Literally Just Told You"],
    ["What do the two finalists on I Literally Just Told You do with their last questions?", "Ask the questions to each other", ["Ask them to the studio audience", "Answer them simultaneously on tablets", "Pass them to the host to answer"], "Medium", "I Literally Just Told You"],

    // CATCHPOINT (7)
    ["Who presented the BBC game show Catchpoint?", "Paddy McGuinness", ["Vernon Kay", "Stephen Mulhern", "Ben Shephard"], "Easy", "Catchpoint"],
    ["What did contestants physically try to catch on Catchpoint?", "Falling balls", ["Flying rings", "Falling coins", "Thrown beanbags"], "Easy", "Catchpoint"],
    ["Which channel broadcast Catchpoint?", "BBC One", ["ITV", "BBC Two", "Channel 4"], "Medium", "Catchpoint"],
    ["How many people formed each team on Catchpoint?", "Two", ["Three", "Four", "Five"], "Medium", "Catchpoint"],
    ["What was the opening round of Catchpoint called?", "First Catch", ["Quick Drop", "Early Ball", "Catch Up"], "Medium", "Catchpoint"],
    ["What was unusual about the balls in Catchpoint's Decoy Catch round?", "Balls dropped from every answer position", ["They were thrown by the audience", "They were invisible until caught", "They bounced out of the studio"], "Medium", "Catchpoint"],
    ["Which colour of ball did teams aim to catch in Catchpoint's Decoy Catch round?", "Pink", ["Blue", "Green", "Yellow"], "Medium", "Catchpoint"],

    // PICTURE SLAM (7)
    ["Who hosts the BBC picture-identification quiz Picture Slam?", "Alan Carr", ["Jimmy Carr", "Joe Lycett", "Rob Beckett"], "Easy", "Picture Slam"],
    ["What must contestants do to score in Picture Slam?", "Identify images shown on screens", ["Arrange photographs in date order", "Draw pictures for a teammate", "Spot errors in newspaper stories"], "Easy", "Picture Slam"],
    ["Which channel broadcasts Picture Slam?", "BBC One", ["Channel 4", "ITV", "BBC Two"], "Medium", "Picture Slam"],
    ["How many pairs of contestants start a regular Picture Slam game?", "Three", ["Two", "Four", "Five"], "Medium", "Picture Slam"],
    ["What earns a team a Picture Slam bonus?", "Correctly naming every image on a board", ["Answering without looking at the pictures", "Beating a celebrity's score", "Choosing the hardest category first"], "Easy", "Picture Slam"],
    ["What is the name of the Picture Slam round where images appear one after another?", "Picture Swipe", ["Photo Finish", "Snap Decision", "The Slideshow"], "Medium", "Picture Slam"],
    ["What is the top jackpot advertised in the original Picture Slam format?", "£10,000", ["£5,000", "£20,000", "£50,000"], "Medium", "Picture Slam"],

    // TWO TRIBES (7)
    ["Who presented the BBC quiz Two Tribes?", "Richard Osman", ["Alexander Armstrong", "Nick Knowles", "Gethin Jones"], "Easy", "Two Tribes"],
    ["Which channel broadcast Two Tribes?", "BBC Two", ["BBC One", "ITV", "Channel 4"], "Medium", "Two Tribes"],
    ["How many contestants started each game of Two Tribes?", "Seven", ["Five", "Six", "Eight"], "Medium", "Two Tribes"],
    ["How were the tribes initially formed on Two Tribes?", "By whether contestants shared a characteristic", ["By drawing playing cards", "By choosing a favourite colour", "By their birth months alone"], "Easy", "Two Tribes"],
    ["How long did each tribe have to answer questions in the early rounds of Two Tribes?", "Sixty seconds", ["Thirty seconds", "Ninety seconds", "Two minutes"], "Medium", "Two Tribes"],
    ["What happened to a member of the losing tribe after an early round of Two Tribes?", "One contestant was eliminated", ["The whole tribe was eliminated", "The team had to swap captains", "Everyone lost their previous winnings"], "Medium", "Two Tribes"],
    ["What timekeeping device featured in the final head-to-head round of Two Tribes?", "A chess clock", ["An egg timer", "A stop-watch held by the audience", "A sand-filled hourglass"], "Medium", "Two Tribes"],

    // BRITAIN'S BRIGHTEST FAMILY (7)
    ["Which Chaser presented Britain's Brightest Family?", "Anne Hegerty", ["Jenny Ryan", "Mark Labbett", "Shaun Wallace"], "Easy", "Britain's Brightest Family"],
    ["Which channel showed Britain's Brightest Family?", "ITV", ["BBC One", "Channel 4", "Channel 5"], "Medium", "Britain's Brightest Family"],
    ["How many family members were on each team in Britain's Brightest Family?", "Three", ["Two", "Four", "Five"], "Medium", "Britain's Brightest Family"],
    ["Who typically captained the teams on Britain's Brightest Family?", "A younger family member", ["The oldest relative", "A celebrity chosen by the host", "A schoolteacher"], "Medium", "Britain's Brightest Family"],
    ["Which kinds of puzzles featured alongside knowledge questions on Britain's Brightest Family?", "Words, maths and logic", ["Only musical performance", "Only physical endurance", "Only cookery puzzles"], "Easy", "Britain's Brightest Family"],
    ["What happened to the points for a wrong answer in the original Britain's Brightest Family format?", "They were awarded to the opposing team", ["They were doubled for that team", "They were saved for the final", "The presenter kept them"], "Medium", "Britain's Brightest Family"],
    ["What was the celebrity spin-off called?", "Britain's Brightest Celebrity Family", ["Britain's Brightest Celebrity Challenge", "Celebrity Family Genius", "The Celebrity Brain Game"], "Medium", "Britain's Brightest Family"],

    // DUEL (7)
    ["Who hosted ITV's quiz Duel?", "Nick Hancock", ["Jeremy Clarkson", "Bradley Walsh", "Gyles Brandreth"], "Medium", "Duel"],
    ["How many contestants faced each other in a typical duel on Duel?", "Two", ["Three", "Four", "Five"], "Easy", "Duel"],
    ["How many answer options were normally shown for a question on Duel?", "Four", ["Two", "Three", "Five"], "Medium", "Duel"],
    ["How many playing chips did contestants initially receive on Duel?", "Ten", ["Six", "Eight", "Twelve"], "Medium", "Duel"],
    ["Why might a Duel contestant place chips on several possible answers?", "To cover more than one possible correct answer", ["To multiply the cash prize", "To eliminate their opponent immediately", "To shorten the next question"], "Medium", "Duel"],
    ["What happened to chips placed on incorrect answers on Duel?", "They were lost", ["They were doubled", "They transferred to the host", "They were returned for free"], "Medium", "Duel"],
    ["What was the name of the feature that forced a Duel opponent to answer quickly?", "Accelerator", ["Turbo Round", "Fast Pass", "Pressure Lock"], "Medium", "Duel"],

    // BABUSHKA (7)
    ["Who presented ITV's Babushka?", "Rylan Clark-Neal", ["Stephen Mulhern", "Ben Shephard", "Vernon Kay"], "Easy", "Babushka"],
    ["What objects hid the potential cash prizes on Babushka?", "Giant nesting dolls", ["Treasure chests", "Suitcases", "Golden eggs"], "Easy", "Babushka"],
    ["Which channel broadcast Babushka?", "ITV", ["Channel 4", "BBC One", "Channel 5"], "Medium", "Babushka"],
    ["How many giant dolls were available at the start of Babushka?", "Ten", ["Eight", "Twelve", "Fifteen"], "Medium", "Babushka"],
    ["What kind of question had to be answered before opening a Babushka doll?", "True or false", ["A four-option multiple-choice question", "A missing-lyrics question", "A picture anagram"], "Medium", "Babushka"],
    ["How many of the original giant Babushka dolls contained no money?", "Two", ["One", "Three", "Four"], "Medium", "Babushka"],
    ["Which Babushka assist let players change a true-or-false question?", "Switch", ["Peek", "X-ray", "Pass"], "Medium", "Babushka"],

    // 500 QUESTIONS (7)
    ["Who presented the British quiz 500 Questions?", "Giles Coren", ["Richard Osman", "Jeremy Vine", "John Humphrys"], "Medium", "500 Questions"],
    ["Which channel showed the British version of 500 Questions?", "ITV", ["BBC Two", "Channel 4", "Channel 5"], "Medium", "500 Questions"],
    ["How many wrong answers in a row eliminated a contestant on 500 Questions?", "Three", ["Two", "Four", "Five"], "Easy", "500 Questions"],
    ["How long did contestants usually have to answer a standard question on 500 Questions?", "Five seconds", ["Ten seconds", "Fifteen seconds", "Thirty seconds"], "Medium", "500 Questions"],
    ["How many categories were displayed on the board in 500 Questions?", "Ten", ["Six", "Eight", "Twelve"], "Medium", "500 Questions"],
    ["Which type of 500 Questions challenge had a player and challenger take turns naming valid answers?", "Battle", ["Duel", "Headliners", "Snap"], "Medium", "500 Questions"],
    ["How many correct responses were required in a 500 Questions Triple Threat challenge?", "Three", ["Two", "Four", "Five"], "Medium", "500 Questions"],

    // IN WITH A SHOUT (7)
    ["Who presented ITV's In With a Shout?", "Joel Dommett", ["Jason Manford", "Stephen Mulhern", "Rylan Clark"], "Easy", "In With a Shout"],
    ["What did players have to identify on In With a Shout?", "Images and subjects in rapid video clips", ["Songs played on a piano", "Objects hidden under cups", "Words formed from letter tiles"], "Easy", "In With a Shout"],
    ["Which channel broadcast In With a Shout?", "ITV", ["BBC One", "Channel 4", "Channel 5"], "Medium", "In With a Shout"],
    ["How many people made up each competing team on In With a Shout?", "Three", ["Two", "Four", "Five"], "Medium", "In With a Shout"],
    ["About how long was each individual video clip in an In With a Shout montage?", "Three seconds", ["One second", "Ten seconds", "Twenty seconds"], "Medium", "In With a Shout"],
    ["What was the name of the feature that briefly paused a clip on In With a Shout?", "Freeze", ["Hold It", "Pause Point", "Time Out"], "Medium", "In With a Shout"],
    ["How many freezes did each team have across an In With a Shout game?", "Ten", ["Three", "Five", "Twenty"], "Medium", "In With a Shout"],

    // GENIUS GAME (7)
    ["Which Doctor Who actor fronted ITV's Genius Game?", "David Tennant", ["Matt Smith", "Peter Capaldi", "Christopher Eccleston"], "Easy", "Genius Game"],
    ["Which channel showed the British Genius Game?", "ITV", ["BBC One", "Channel 4", "Sky Atlantic"], "Medium", "Genius Game"],
    ["How many contestants originally entered Genius Game?", "Eleven", ["Eight", "Ten", "Twelve"], "Medium", "Genius Game"],
    ["What were the two main stages of a typical Genius Game episode called?", "Main Match and Death Match", ["First Catch and Decoy Catch", "Heat and Jackpot", "Eliminator and Gold Run"], "Medium", "Genius Game"],
    ["What were the in-game currency tokens called on Genius Game?", "Garnets", ["Diamonds", "Crowns", "Credits"], "Medium", "Genius Game"],
    ["What could a Main Match winner receive to avoid the elimination contest on Genius Game?", "A Token of Life", ["An Immunity Bell", "A Gold Ticket", "A Safety Star"], "Medium", "Genius Game"],
    ["Which country originated the format adapted as Britain's Genius Game?", "South Korea", ["Japan", "United States", "The Netherlands"], "Medium", "Genius Game"],

    // QUIZNESS (7)
    ["Who hosted Channel 4's comedy quiz Quizness?", "Tom Allen", ["Jimmy Carr", "Alan Carr", "Joe Lycett"], "Easy", "Quizness"],
    ["Which channel broadcast Quizness?", "Channel 4", ["BBC One", "ITV", "Sky One"], "Medium", "Quizness"],
    ["What did contestants do to their answers in the Quizness round Subbly Jubbly?", "Replace parts of answers with silly substitute words", ["Write answers on balloons", "Translate every answer into French", "Sing the answers to a tune"], "Medium", "Quizness"],
    ["Which Quizness round made players remember and extend a string of previous answers?", "Brain Chain", ["Word Ladder", "Double Trouble", "Final Countdown"], "Medium", "Quizness"],
    ["What was the penalty for an incorrect answer in Quizness's Risky Quizness round?", "Losing two points", ["Losing one point", "Being eliminated immediately", "Losing half the jackpot"], "Medium", "Quizness"],
    ["Which Quizness round revolved around spoonerisms?", "Dental Mexterity", ["Subbly Jubbly", "Pundreds and Thousands", "Risky Quizness"], "Medium", "Quizness"],
    ["What was the advertised jackpot in Quizness's final challenge?", "£25,000", ["£5,000", "£10,000", "£50,000"], "Medium", "Quizness"],

    // THE TIME IT TAKES (7)
    ["Which comedian presented The Time It Takes?", "Joe Lycett", ["Tom Allen", "Rob Beckett", "Romesh Ranganathan"], "Easy", "The Time It Takes"],
    ["Who served as the referee on The Time It Takes?", "Alison Hammond", ["Davina McCall", "Lorraine Kelly", "Claudia Winkleman"], "Easy", "The Time It Takes"],
    ["Which channel broadcast The Time It Takes?", "BBC One", ["ITV", "Channel 4", "Channel 5"], "Medium", "The Time It Takes"],
    ["What provided the unusual timers on The Time It Takes?", "People performing odd tasks", ["The ticking of a giant grandfather clock", "A melting block of ice", "A mechanical roulette wheel"], "Medium", "The Time It Takes"],
    ["How many contestants began each edition of The Time It Takes?", "Three", ["Two", "Four", "Five"], "Medium", "The Time It Takes"],
    ["What consolation gift could losing players receive on The Time It Takes?", "A tea towel", ["A novelty mug", "A framed photograph", "A pair of slippers"], "Medium", "The Time It Takes"],
    ["What kind of main prize could a winner earn on The Time It Takes?", "A holiday", ["A sports car", "A new kitchen", "A cash-filled briefcase"], "Easy", "The Time It Takes"],

    // 5-STAR FAMILY REUNION (7)
    ["Who hosted the BBC quiz 5-Star Family Reunion?", "Nick Knowles", ["Bradley Walsh", "Alexander Armstrong", "Ben Shephard"], "Medium", "5-Star Family Reunion"],
    ["Which channel showed 5-Star Family Reunion?", "BBC One", ["ITV", "Channel 4", "BBC Two"], "Medium", "5-Star Family Reunion"],
    ["What separated the two halves of the competing family on 5-Star Family Reunion?", "They lived in different countries", ["They had never met the presenter", "They were from rival quiz teams", "They belonged to different generations only"], "Medium", "5-Star Family Reunion"],
    ["How many relatives appeared in the British studio team on 5-Star Family Reunion?", "Four", ["Two", "Three", "Six"], "Medium", "5-Star Family Reunion"],
    ["What scientific desk toy helped set the time limit on 5-Star Family Reunion?", "A Newton's cradle", ["A gyroscope", "A plasma globe", "A pendulum clock"], "Medium", "5-Star Family Reunion"],
    ["What main prize did the family try to win on 5-Star Family Reunion?", "A luxury holiday together", ["A brand-new family house", "A shared sports car", "A year of supermarket shopping"], "Easy", "5-Star Family Reunion"],
    ["How many correct answers were needed in the 5-Star Family Reunion final before the timer stopped?", "Five", ["Three", "Four", "Seven"], "Medium", "5-Star Family Reunion"],
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, programme], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(6004 + index).padStart(4, '0'),
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
