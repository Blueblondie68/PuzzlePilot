// quiz_pack218.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British quiz and game shows - further adult formats
// 100 questions: tv_5604 to tv_5703

const facts = [
    // THE COLOUR OF MONEY (7)
    ["Who hosted ITV's The Colour of Money?", "Chris Tarrant", ["Noel Edmonds", "Vernon Kay", "Dale Winton"], "Easy", "The Colour of Money"],
    ["Who provided the statistical updates on The Colour of Money?", "Millie Clode", ["Rachel Riley", "Carol Vorderman", "Helen Chamberlain"], "Medium", "The Colour of Money"],
    ["How many differently coloured cash machines were offered on The Colour of Money?", "Twenty", ["Ten", "Fifteen", "Twenty-five"], "Medium", "The Colour of Money"],
    ["How many cash machines could a contestant use to reach their target on The Colour of Money?", "Ten", ["Five", "Eight", "Twelve"], "Medium", "The Colour of Money"],
    ["At what rate did a selected cash machine count upwards on The Colour of Money?", "£1,000 per second", ["£100 per second", "£500 per second", "£2,000 per second"], "Medium", "The Colour of Money"],
    ["What did contestants shout to halt the counting on The Colour of Money?", "Stop!", ["Bank!", "Freeze!", "Hold!"], "Easy", "The Colour of Money"],
    ["What did contestants need to reach exactly to win on The Colour of Money?", "Their cash target", ["The highest machine value", "The average machine value", "The presenter's secret total"], "Easy", "The Colour of Money"],

    // THE EXIT LIST (6)
    ["Who presented ITV's The Exit List?", "Matt Allwright", ["Nick Knowles", "Ben Shephard", "Richard Madeley"], "Medium", "The Exit List"],
    ["What did contestants navigate on The Exit List?", "A maze of rooms", ["A revolving tower", "A series of lifts", "A giant board game"], "Easy", "The Exit List"],
    ["How many rooms formed the Memory Maze on The Exit List?", "Twenty-six", ["Sixteen", "Twenty", "Thirty"], "Medium", "The Exit List"],
    ["How many contestants worked together in each game of The Exit List?", "Two", ["One", "Three", "Four"], "Easy", "The Exit List"],
    ["What did the Exit List itself require the players to remember?", "Answers encountered in the maze", ["The colours of every door", "The host's instructions word for word", "The names of previous winners"], "Medium", "The Exit List"],
    ["What were the special memory-testing rooms on The Exit List called?", "Panic Rooms", ["Trap Rooms", "Memory Vaults", "Bonus Chambers"], "Medium", "The Exit List"],

    // THE FUSE (7)
    ["Which former rugby player hosted ITV's The Fuse?", "Austin Healey", ["Matt Dawson", "Martin Bayfield", "Will Greenwood"], "Medium", "The Fuse"],
    ["How many contestants began an episode of The Fuse?", "Six", ["Four", "Five", "Eight"], "Medium", "The Fuse"],
    ["How many subject boxes were available at the beginning of The Fuse?", "Twelve", ["Six", "Eight", "Ten"], "Medium", "The Fuse"],
    ["What was the opening team challenge on The Fuse called?", "6 in a Row", ["The Gold Run", "Chain Reaction", "Beat the Clock"], "Medium", "The Fuse"],
    ["What happened to a subject box when the fuse ran out before the challenge was completed?", "Its money was lost", ["Its value doubled", "It was saved for the final", "It changed category"], "Medium", "The Fuse"],
    ["What was the round in which contestants tried to keep their fuses alight for less time called on The Fuse?", "Burnout", ["Flashpoint", "Meltdown", "Countdown"], "Medium", "The Fuse"],
    ["How many correct answers were needed in The Fuse's final challenge?", "Six", ["Four", "Five", "Eight"], "Medium", "The Fuse"],

    // BREAK THE SAFE (6)
    ["Who hosted the BBC lottery-linked quiz Break the Safe?", "Nick Knowles", ["Dale Winton", "John Barrowman", "Gethin Jones"], "Easy", "Break the Safe"],
    ["How many couples took part in each game of Break the Safe?", "Three", ["Two", "Four", "Five"], "Medium", "Break the Safe"],
    ["What was the maximum prize available on Break the Safe?", "£100,000", ["£25,000", "£50,000", "£250,000"], "Medium", "Break the Safe"],
    ["How many locks originally secured the safe on Break the Safe?", "Six", ["Four", "Five", "Eight"], "Medium", "Break the Safe"],
    ["What happened to the money earned by the surviving teams during Break the Safe?", "It was put into the safe", ["It was paid out immediately", "It went to the studio audience", "It was exchanged for extra questions"], "Medium", "Break the Safe"],
    ["What did both members of the final couple need to time correctly to open the safe?", "Pressing their buttons", ["Ringing separate bells", "Turning two numbered dials", "Opening their envelopes"], "Medium", "Break the Safe"],

    // THE EDGE (7)
    ["Who hosted the first series of the BBC quiz The Edge?", "Mark Benton", ["Mark Williams", "Mark Durden-Smith", "Mark Curry"], "Medium", "The Edge"],
    ["Who took over as presenter for the second series of The Edge?", "Gabby Logan", ["Clare Balding", "Alex Scott", "Sue Barker"], "Medium", "The Edge"],
    ["What physical skill was combined with general knowledge on The Edge?", "Bowling balls along lanes", ["Throwing darts", "Shooting basketballs", "Stacking wooden blocks"], "Easy", "The Edge"],
    ["How many contestants began a game of The Edge?", "Four", ["Three", "Five", "Six"], "Medium", "The Edge"],
    ["Which colour marked the longest lane on The Edge?", "Red", ["Green", "Blue", "Yellow"], "Medium", "The Edge"],
    ["What did a danger zone do to a cash section on The Edge?", "Reduced its value to £1", ["Doubled its value", "Ended the whole game", "Awarded an extra bowl"], "Medium", "The Edge"],
    ["How could finalists make the winning Edge larger on The Edge?", "Answer four-part questions correctly", ["Ask the audience to vote", "Trade away an opponent's cash", "Choose a shorter lane"], "Medium", "The Edge"],

    // DECIMATE (7)
    ["Which actor and presenter hosted the BBC quiz Decimate?", "Shane Richie", ["Brian Conley", "Bradley Walsh", "Craig Charles"], "Easy", "Decimate"],
    ["How many players made up a Decimate team?", "Three", ["Two", "Four", "Five"], "Medium", "Decimate"],
    ["How much money did a Decimate team start out trying to defend?", "£20,000", ["£10,000", "£25,000", "£50,000"], "Medium", "Decimate"],
    ["What large display showed the team's remaining money on Decimate?", "A wall of lights", ["A giant roulette wheel", "A scoreboard of envelopes", "A stack of glass boxes"], "Medium", "Decimate"],
    ["How many possible answers accompanied the questions on Decimate?", "Three", ["Two", "Four", "Five"], "Medium", "Decimate"],
    ["What happened to part of the prize fund after a wrong answer on Decimate?", "It was removed from the wall", ["It went to an opposing team", "It doubled for the next question", "It became a consolation prize"], "Easy", "Decimate"],
    ["What could the two players on Decimate's substitutes' bench do with their buzzer?", "Override the active player's answer", ["Freeze the host's question", "Skip the final entirely", "Restore every lost segment"], "Medium", "Decimate"],

    // THE LINK (6)
    ["Which actor presented the BBC game show The Link?", "Mark Williams", ["Mark Benton", "Martin Clunes", "David Tennant"], "Medium", "The Link"],
    ["What were players trying to identify between quiz answers on The Link?", "A connection", ["A rhyme", "A spelling mistake", "A secret number"], "Easy", "The Link"],
    ["How many pairs started each game of The Link?", "Three", ["Two", "Four", "Five"], "Medium", "The Link"],
    ["What did contestants cut to release cash prizes on The Link?", "Links", ["Ribbons", "Wires", "Ropes"], "Medium", "The Link"],
    ["Which board game provided the original inspiration for The Link?", "Linkee", ["Trivial Pursuit", "Articulate!", "Cranium"], "Medium", "The Link"],
    ["What did finalists look for among one-word clues on The Link?", "A super link", ["An anagram", "A hidden date", "A missing vowel"], "Medium", "The Link"],

    // ALPHABETICAL (6)
    ["Who presented ITV's word-based quiz Alphabetical?", "Jeff Stelling", ["Nick Hancock", "Richard Osman", "Stephen Mulhern"], "Easy", "Alphabetical"],
    ["What did answers in Alphabetical's First Letters round have in common?", "They began with the specified letter", ["They contained exactly five letters", "They ended with the same letter", "They were all anagrams"], "Medium", "Alphabetical"],
    ["What did answers in Alphabetical's Last Letters round have in common?", "They ended with the specified letter", ["They began with the same letter", "They had the same number of syllables", "They were all place names"], "Medium", "Alphabetical"],
    ["How many letters of the alphabet did the finalists aim to answer correctly in Alphabetical?", "Twenty-six", ["Thirteen", "Twenty", "Twenty-four"], "Medium", "Alphabetical"],
    ["What word did players say instead of 'pass' on Alphabetical?", "Alphabetical", ["Next", "Change", "Skip"], "Medium", "Alphabetical"],
    ["Which Spanish television quiz format inspired Alphabetical?", "Pasapalabra", ["Saber y Ganar", "El Cazador", "Ahora Caigo"], "Hard", "Alphabetical"],

    // PERFECTION (6)
    ["Who presented the BBC quiz Perfection?", "Nick Knowles", ["Nick Hancock", "Jeremy Vine", "John Barrowman"], "Easy", "Perfection"],
    ["What two answer choices did contestants use in Perfection?", "True or false", ["Yes or no", "Higher or lower", "Odd or even"], "Easy", "Perfection"],
    ["How many contestants took part in each game of Perfection?", "Four", ["Two", "Three", "Five"], "Medium", "Perfection"],
    ["How many true-or-false statements made up a main round of Perfection?", "Four", ["Three", "Five", "Six"], "Medium", "Perfection"],
    ["What nickname was given to the three waiting players on Perfection?", "The Usual Suspects", ["The Eggheads", "The Challengers", "The Brain Trust"], "Medium", "Perfection"],
    ["How much was added to Perfection's jackpot each time it went unwon?", "£1,000", ["£100", "£500", "£2,000"], "Medium", "Perfection"],

    // CASH TRAPPED (6)
    ["Who presented ITV's Cash Trapped?", "Bradley Walsh", ["Ben Shephard", "Vernon Kay", "Phillip Schofield"], "Easy", "Cash Trapped"],
    ["How many contestants competed on Cash Trapped?", "Six", ["Four", "Five", "Eight"], "Medium", "Cash Trapped"],
    ["What happened to Cash Trapped contestants when nobody won the final?", "They returned on the next programme", ["They all received the same consolation prize", "They swapped places with the audience", "Their scores were permanently erased"], "Medium", "Cash Trapped"],
    ["What was the timed individual-question round on Cash Trapped called in later series?", "Catch Up", ["Gold Run", "The Link", "Power Play"], "Medium", "Cash Trapped"],
    ["What was the last round of Cash Trapped called in later series?", "The Escape", ["The Chase", "Beat the Bar", "The Showdown"], "Medium", "Cash Trapped"],
    ["How many opponents did the leading player need to trap to escape with the cash on Cash Trapped?", "Five", ["Three", "Four", "Six"], "Medium", "Cash Trapped"],

    // THE COMMON DENOMINATOR (6)
    ["Who presented Channel 4's The Common Denominator?", "Phil Spencer", ["Kirstie Allsopp", "Richard Osman", "Nick Knowles"], "Medium", "The Common Denominator"],
    ["What did contestants have to find between two apparently unrelated phrases on The Common Denominator?", "A linking word", ["A shared number", "A hidden spelling mistake", "A matching picture"], "Easy", "The Common Denominator"],
    ["How many players began an episode of The Common Denominator?", "Three", ["Two", "Four", "Five"], "Medium", "The Common Denominator"],
    ["What replaced word pairs in The Common Denominator's second round?", "Pairs of pictures", ["Musical excerpts", "Celebrity voices", "Number sequences"], "Medium", "The Common Denominator"],
    ["How much time did finalists have for the linking challenges on The Common Denominator?", "45 seconds", ["30 seconds", "60 seconds", "90 seconds"], "Medium", "The Common Denominator"],
    ["What was the top prize available on The Common Denominator?", "£10,000", ["£2,500", "£5,000", "£25,000"], "Medium", "The Common Denominator"],

    // DON'T BLOW THE INHERITANCE (6)
    ["Which comedian presented Don't Blow the Inheritance?", "Tim Vine", ["Lee Mack", "Jason Manford", "Jack Dee"], "Easy", "Don't Blow the Inheritance"],
    ["How were teammates related in Don't Blow the Inheritance?", "They came from different generations of a family", ["They were identical twins", "They were colleagues from the same workplace", "They were former schoolmates"], "Easy", "Don't Blow the Inheritance"],
    ["Who buzzed in during the opening questions of Don't Blow the Inheritance?", "The younger family member", ["The older family member", "Both players together", "The studio audience"], "Medium", "Don't Blow the Inheritance"],
    ["Who had to supply the answer after a buzz in Don't Blow the Inheritance's opening round?", "The older family member", ["The younger family member", "The presenter", "The opposing team"], "Medium", "Don't Blow the Inheritance"],
    ["What sort of answers were sought in Don't Blow the Inheritance's Top 10s round?", "Items from a top-ten list", ["Numbers in an equation", "Words containing ten letters", "Ten different surnames"], "Medium", "Don't Blow the Inheritance"],
    ["Who answered the questions without help in the final of Don't Blow the Inheritance?", "The younger family member", ["The older family member", "Both players speaking together", "A nominated rival"], "Medium", "Don't Blow the Inheritance"],

    // DIVIDED (6)
    ["Who presented ITV's Divided?", "Andrew Castle", ["Mark Durden-Smith", "Nick Hancock", "Richard Arnold"], "Medium", "Divided"],
    ["How many strangers played together as a team on Divided?", "Three", ["Two", "Four", "Six"], "Medium", "Divided"],
    ["What did the team have to do before locking in an answer on Divided?", "Agree unanimously", ["Consult the audience", "Draw lots", "Nominate the oldest contestant"], "Easy", "Divided"],
    ["What happened to the money available on Divided while contestants debated?", "It decreased", ["It doubled", "It was frozen", "It was shared automatically"], "Easy", "Divided"],
    ["What happened to the team's prize fund after a wrong answer on Divided?", "It was halved", ["It increased by £1,000", "It was given to the host", "It was exchanged for time"], "Medium", "Divided"],
    ["What did the finalists have to agree how to divide on Divided?", "Three unequal shares of the winnings", ["Three equal shares of a holiday", "A single mystery envelope", "Three new teams for the next episode"], "Medium", "Divided"],

    // EJECTOR SEAT (6)
    ["Who hosted ITV's Ejector Seat?", "Andi Peters", ["Steve Jones", "Gethin Jones", "Sean Fletcher"], "Easy", "Ejector Seat"],
    ["What moved backwards when a player answered incorrectly on Ejector Seat?", "Their chair", ["The entire floor", "Their scoreboard", "A giant clock"], "Easy", "Ejector Seat"],
    ["How could a contestant stop their chair sliding backwards on Ejector Seat?", "Answer a question correctly", ["Ask the audience for help", "Ring a bell three times", "Swap chairs with another player"], "Easy", "Ejector Seat"],
    ["What was the emergency lifeline called on Ejector Seat?", "The Panic Button", ["The Stop Clock", "The Safe Seat", "The Rescue Rope"], "Medium", "Ejector Seat"],
    ["What happened to contestants whose chair reached the far end of Ejector Seat's track?", "They were tipped backwards and eliminated", ["They won a cash bonus", "They chose a new opponent", "They automatically qualified for the final"], "Medium", "Ejector Seat"],
    ["What was the top cash prize on Ejector Seat?", "£10,000", ["£2,000", "£5,000", "£25,000"], "Medium", "Ejector Seat"],

    // THE CODE (6)
    ["Who presented BBC One's The Code?", "Matt Allwright", ["Nick Knowles", "Sean Fletcher", "Tim Vine"], "Medium", "The Code"],
    ["Who acted as the resident expert on The Code?", "Lesley-Anne Brewis", ["Anne Hegerty", "Judith Keppel", "Jenny Ryan"], "Hard", "The Code"],
    ["What were players trying to open on The Code?", "A safe", ["A treasure chest", "A locked briefcase", "A series of doors"], "Easy", "The Code"],
    ["How many digits did players need to discover to open the safe on The Code?", "Three", ["Four", "Five", "Six"], "Medium", "The Code"],
    ["What did contestants need to match correctly on The Code?", "A question and its answer", ["A song and its singer", "A photograph and its location", "A date and its weekday"], "Medium", "The Code"],
    ["How did the choices offered to players change as they got closer to solving The Code?", "Fewer possibilities were shown", ["More helpers joined the team", "The questions became longer but easier", "Extra safes were added"], "Medium", "The Code"],

    // THE TOURNAMENT (6)
    ["Which former footballer hosted the BBC quiz The Tournament?", "Alex Scott", ["Dion Dublin", "Ian Wright", "Gary Lineker"], "Easy", "The Tournament"],
    ["How many contestants began an episode of The Tournament?", "Eight", ["Four", "Six", "Ten"], "Medium", "The Tournament"],
    ["What determined the opening leaderboard on The Tournament?", "Correct answers and response speed", ["Audience votes", "Contestants' ages", "A random draw"], "Medium", "The Tournament"],
    ["What did higher-ranked players get to choose in The Tournament's head-to-head rounds?", "Their opponent and question category", ["The episode's presenter", "A cash prize for everyone", "A replacement contestant"], "Medium", "The Tournament"],
    ["What was an early decisive victory over an opponent called on The Tournament?", "A knockout", ["A clean sweep", "A perfect link", "A grand slam"], "Medium", "The Tournament"],
    ["What was the bonus challenge after a knockout in The Tournament final called?", "Golden Run", ["Superchain", "Crossfire", "Beat the Bar"], "Medium", "The Tournament"],
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, programme], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(5604 + index).padStart(4, '0'),
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
