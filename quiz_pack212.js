// quiz_pack212.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British quiz, game and panel shows - more favourites
// 100 questions: tv_5004 to tv_5103
// Leave quiz_bank.js unchanged until the end of the evening.

const facts = [
    // Richard Osman's House of Games
    ["Who originally presented the BBC quiz House of Games?", "Richard Osman", ["Alexander Armstrong", "Stephen Fry", "Rob Brydon"], "Easy", "Richard Osman's House of Games"],
    ["How many celebrities compete in a regular week of House of Games?", "Four", ["Three", "Five", "Six"], "Easy", "Richard Osman's House of Games"],
    ["Across how many weekdays do House of Games contestants normally compete?", "Five", ["Three", "Four", "Seven"], "Easy", "Richard Osman's House of Games"],
    ["Which weekday is worth double leaderboard points on House of Games?", "Friday", ["Monday", "Wednesday", "Thursday"], "Easy", "Richard Osman's House of Games"],
    ["What is the usual final round of each House of Games episode called?", "Answer Smash", ["Gold Run", "Missing Vowels", "Riddle Run"], "Easy", "Richard Osman's House of Games"],
    ["What must players combine to give an Answer Smash answer on House of Games?", "Two overlapping answers", ["Two opposite numbers", "Three rhyming songs", "Four crossword clues"], "Medium", "Richard Osman's House of Games"],
    ["In House of Games' Rhyme Time round, what links the two correct answers?", "They rhyme", ["They begin with the same letter", "They have the same number of syllables", "They form an anagram"], "Easy", "Richard Osman's House of Games"],
    ["What do contestants combine in House of Games' Distinctly Average round?", "Their numerical estimates", ["Their ages", "Their daily scores", "Their prize values"], "Medium", "Richard Osman's House of Games"],
    ["Which House of Games round asks players to identify a song from parts of its written lyrics?", "Broken Karaoke", ["Rhyme Time", "The Nice Round", "Size Matters"], "Medium", "Richard Osman's House of Games"],
    ["What do contestants receive for winning an individual House of Games episode?", "A novelty branded prize", ["A holiday abroad", "A new car", "A cash jackpot"], "Easy", "Richard Osman's House of Games"],
    ["What does the overall weekly winner of House of Games receive?", "A trophy", ["A gold medal", "A record contract", "A golden ticket"], "Easy", "Richard Osman's House of Games"],
    ["Which House of Games round tests the ability to locate countries and places on a map?", "Where Is Kazakhstan?", ["Broken Karaoke", "Answer Smash", "The Rich List"], "Medium", "Richard Osman's House of Games"],

    // Romesh Ranganathan's Parents' Evening
    ["Who hosts the celebrity quiz Parents' Evening?", "Romesh Ranganathan", ["Rob Beckett", "Jimmy Carr", "Alan Carr"], "Easy", "Romesh Ranganathan's Parents' Evening"],
    ["What is the first name of Romesh's mother, who helps with the scores on Parents' Evening?", "Shanthi", ["Sharon", "Sheila", "Sonia"], "Medium", "Romesh Ranganathan's Parents' Evening"],
    ["Which family relationship is central to Romesh Ranganathan's Parents' Evening?", "Parents and their children", ["Brothers and sisters", "Grandparents and grandchildren", "Husbands and wives"], "Easy", "Romesh Ranganathan's Parents' Evening"],
    ["What must parents judge about their children on Romesh Ranganathan's Parents' Evening?", "Whether they know the answers", ["How fast they can run", "How well they can sing", "Whether they can cook"], "Easy", "Romesh Ranganathan's Parents' Evening"],
    ["What cause benefits from money won by celebrities on Parents' Evening?", "Their chosen charity", ["A local football club", "The host's holiday fund", "A television production budget"], "Easy", "Romesh Ranganathan's Parents' Evening"],
    ["Which broadcaster shows Romesh Ranganathan's Parents' Evening?", "ITV", ["BBC Two", "Channel 4", "Sky Arts"], "Easy", "Romesh Ranganathan's Parents' Evening"],

    // The Wall
    ["Which EastEnders actor hosted the British game show The Wall?", "Danny Dyer", ["Ross Kemp", "Shane Richie", "Steve McFadden"], "Easy", "The Wall"],
    ["Which veteran broadcaster provided the voice for The Wall's questions?", "Angela Rippon", ["Anne Robinson", "Moira Stuart", "Fiona Bruce"], "Medium", "The Wall"],
    ["How many contestants formed a team on the British game show The Wall?", "Two", ["One", "Three", "Four"], "Easy", "The Wall"],
    ["On The Wall, what colour balls increased the contestants' bank?", "Green", ["Red", "Blue", "Yellow"], "Easy", "The Wall"],
    ["What colour balls took money away from the bank on The Wall?", "Red", ["Green", "White", "Purple"], "Easy", "The Wall"],
    ["What sort of giant board sends balls bouncing into cash slots on The Wall?", "A pegboard", ["A dartboard", "A chessboard", "A pinball table"], "Easy", "The Wall"],
    ["What final decision does the isolated player make on The Wall?", "Whether to sign or destroy a contract", ["Whether to swap partners", "Whether to spin another wheel", "Whether to name a bonus category"], "Medium", "The Wall"],
    ["On which British channel was Danny Dyer's The Wall shown?", "BBC One", ["ITV", "Channel 5", "Sky One"], "Easy", "The Wall"],

    // Bridge of Lies
    ["Which former EastEnders actor presents Bridge of Lies?", "Ross Kemp", ["Danny Dyer", "Martin Kemp", "Shane Richie"], "Easy", "Bridge of Lies"],
    ["How many contestants make up a normal Bridge of Lies team?", "Four", ["Two", "Three", "Six"], "Easy", "Bridge of Lies"],
    ["What must contestants step on to cross the Bridge of Lies safely?", "True statements", ["False statements", "The highest numbers", "The shortest words"], "Easy", "Bridge of Lies"],
    ["What happens to a contestant's money when they step on a lie in Bridge of Lies?", "It is halved", ["It is doubled", "It remains unchanged", "It all goes to the opposing team"], "Easy", "Bridge of Lies"],
    ["How many lies eliminate a contestant during an individual Bridge of Lies crossing?", "Three", ["One", "Two", "Five"], "Medium", "Bridge of Lies"],
    ["How many possible stepping stones are there on a standard Bridge of Lies crossing?", "32", ["20", "24", "40"], "Medium", "Bridge of Lies"],
    ["How many of a Bridge of Lies crossing's 32 statements are lies?", "Ten", ["Six", "Twelve", "Sixteen"], "Medium", "Bridge of Lies"],
    ["Who can take part in Bridge of Lies' final crossing?", "Teammates who survived their individual crossings", ["Only the team captain", "The entire studio audience", "The host and one contestant"], "Medium", "Bridge of Lies"],

    // Michael McIntyre's The Wheel
    ["Which comedian hosts the BBC game show The Wheel?", "Michael McIntyre", ["Lee Mack", "John Bishop", "Rob Brydon"], "Easy", "The Wheel"],
    ["How many celebrity experts sit around the giant wheel in Michael McIntyre's The Wheel?", "Seven", ["Five", "Six", "Eight"], "Easy", "The Wheel"],
    ["How many members of the public normally compete to win money on The Wheel?", "Three", ["Two", "Four", "Five"], "Easy", "The Wheel"],
    ["What does each celebrity bring to Michael McIntyre's The Wheel?", "A specialist subject", ["A personal cash prize", "A mystery suitcase", "A sporting opponent"], "Easy", "The Wheel"],
    ["What chooses the celebrity who will help answer a question on The Wheel?", "A spinning wheel", ["A sealed envelope", "A dice roll", "A general-knowledge test"], "Easy", "The Wheel"],
    ["Where do the contestants wait before they are selected to play on The Wheel?", "Below the main wheel", ["Behind a soundproof wall", "In the studio audience", "Inside a giant cube"], "Medium", "The Wheel"],
    ["Which broadcaster originally commissioned Michael McIntyre's The Wheel?", "BBC", ["ITV", "Sky", "Channel 5"], "Easy", "The Wheel"],
    ["What do The Wheel contestants answer with help from celebrities?", "General-knowledge questions", ["Musical auditions", "Darts challenges", "Crossword puzzles only"], "Easy", "The Wheel"],

    // The Hit List
    ["Which husband-and-wife presenting duo host the music quiz The Hit List?", "Marvin and Rochelle Humes", ["Ant and Dec", "Jamie and Louise Redknapp", "Richard and Judy"], "Easy", "The Hit List"],
    ["What do contestants listen to on The Hit List before giving their answers?", "Short clips of hit songs", ["Spoken football commentaries", "Famous film speeches", "Poetry readings"], "Easy", "The Hit List"],
    ["What two things must players usually name correctly on The Hit List?", "The song and its artist", ["The album and its producer", "The genre and the year", "The label and the chart position"], "Easy", "The Hit List"],
    ["What is the top cash prize on the BBC's The Hit List?", "£10,000", ["£1,000", "£50,000", "£100,000"], "Medium", "The Hit List"],
    ["How many pairs of contestants begin a regular episode of The Hit List?", "Three", ["Two", "Four", "Five"], "Medium", "The Hit List"],
    ["What is the first round of The Hit List called?", "5 of 5 from 5", ["Golden Medley", "Next Lines", "Popmaster"], "Medium", "The Hit List"],
    ["On which broadcaster's channels does The Hit List appear?", "BBC", ["ITV", "Channel 5", "Sky"], "Easy", "The Hit List"],

    // The Million Pound Drop
    ["Who hosted Channel 4's The Million Pound Drop?", "Davina McCall", ["Emma Willis", "Claudia Winkleman", "Holly Willoughby"], "Easy", "The Million Pound Drop"],
    ["How much money did each team start with on the original Million Pound Drop?", "£1 million", ["£100,000", "£250,000", "£500,000"], "Easy", "The Million Pound Drop"],
    ["On The Million Pound Drop, where did teams place their bundles of cash?", "On trapdoors marked with answers", ["On a spinning roulette wheel", "Inside numbered suitcases", "In a glass money box"], "Easy", "The Million Pound Drop"],
    ["What happened to money placed on an incorrect answer on The Million Pound Drop?", "It fell through the floor", ["It was doubled", "It went to another contestant", "It was carried into the next round"], "Easy", "The Million Pound Drop"],
    ["Which British channel showed the original Million Pound Drop?", "Channel 4", ["BBC One", "ITV", "Channel 5"], "Easy", "The Million Pound Drop"],
    ["How many questions did contestants face on early series of The Million Pound Drop Live?", "Eight", ["Five", "Ten", "Twelve"], "Medium", "The Million Pound Drop"],
    ["What smaller starting jackpot was used for the daytime spin-off The £100K Drop?", "£100,000", ["£10,000", "£250,000", "£500,000"], "Easy", "The Million Pound Drop"],
    ["How many people usually played together as a team on The Million Pound Drop?", "Two", ["One", "Three", "Four"], "Easy", "The Million Pound Drop"],

    // The National Lottery: In It to Win It
    ["Who presented The National Lottery quiz In It to Win It?", "Dale Winton", ["Phillip Schofield", "Vernon Kay", "Noel Edmonds"], "Easy", "In It to Win It"],
    ["Which organisation's television draws were associated with In It to Win It?", "The National Lottery", ["Premium Bonds", "The Football Pools", "The Postcode Lottery"], "Easy", "In It to Win It"],
    ["How many players took part in a normal episode of In It to Win It?", "Five", ["Three", "Four", "Six"], "Medium", "In It to Win It"],
    ["What was the area for contestants eligible to win the jackpot called on In It to Win It?", "Winners' Row", ["Gold Run", "The Hot Seat", "The Final Chase"], "Easy", "In It to Win It"],
    ["How much did each correct answer add to the prize fund on In It to Win It?", "£5,000", ["£1,000", "£10,000", "£20,000"], "Medium", "In It to Win It"],
    ["Where did In It to Win It players go after giving an incorrect answer in Winners' Row?", "The Red Area", ["The Gold Zone", "The Penalty Box", "The Banker's Office"], "Easy", "In It to Win It"],
    ["How were contestants originally chosen to enter Winners' Row on In It to Win It?", "A draw of coloured balls", ["A dart thrown at a board", "An audience applause meter", "A spin of a price wheel"], "Medium", "In It to Win It"],

    // !mpossible
    ["Who hosted the BBC daytime quiz !mpossible?", "Rick Edwards", ["Richard Osman", "Rob Brydon", "Jeremy Vine"], "Easy", "!mpossible"],
    ["Which punctuation mark appears at the start of the stylised title !mpossible?", "An exclamation mark", ["A question mark", "An asterisk", "An ampersand"], "Easy", "!mpossible"],
    ["Besides right and wrong, which third type of answer features on !mpossible?", "An impossible answer", ["A secret answer", "A bonus answer", "An audience answer"], "Easy", "!mpossible"],
    ["How many choices were normally offered for opening-round questions on !mpossible?", "Three", ["Two", "Four", "Five"], "Medium", "!mpossible"],
    ["What happened if a player picked an impossible answer in !mpossible's opening round?", "They were eliminated from that round", ["They gained two points", "They could change their answer", "They won an instant cash prize"], "Medium", "!mpossible"],
    ["What was the top cash jackpot represented by the giant exclamation mark on !mpossible?", "£10,000", ["£1,000", "£50,000", "£100,000"], "Medium", "!mpossible"],
    ["On which television channel did Rick Edwards' !mpossible originally air?", "BBC One", ["ITV", "Channel 4", "Sky One"], "Easy", "!mpossible"],

    // Riddiculous
    ["Who presents ITV's word-and-knowledge quiz Riddiculous?", "Ranvir Singh", ["Anita Rani", "Naga Munchetty", "Alex Jones"], "Easy", "Riddiculous"],
    ["Which actor appears as the Riddlemaster on Riddiculous?", "Henry Lewis", ["Jonathan Sayer", "Henry Shields", "Charlie Russell"], "Medium", "Riddiculous"],
    ["How many pairs of contestants begin a regular episode of Riddiculous?", "Three", ["Two", "Four", "Five"], "Easy", "Riddiculous"],
    ["What kind of puzzles are central to the quiz Riddiculous?", "Riddles", ["Crosswords", "Sudoku grids", "Jigsaws"], "Easy", "Riddiculous"],
    ["What type of questions must Riddiculous teams tackle to earn chances at riddles?", "General knowledge", ["Celebrity gossip only", "Mental arithmetic only", "Television theme tunes only"], "Easy", "Riddiculous"],
    ["What is the fast-paced final stage of Riddiculous called?", "Riddle Run", ["Gold Run", "Answer Smash", "The Final Chase"], "Easy", "Riddiculous"],
    ["Which theatre comedy is Riddiculous's Henry Lewis known for co-creating?", "The Play That Goes Wrong", ["The Woman in Black", "The Book of Mormon", "One Man, Two Guvnors"], "Medium", "Riddiculous"],

    // The Finish Line
    ["Which presenter hosts the BBC quiz The Finish Line?", "Roman Kemp", ["Ross Kemp", "Vernon Kay", "Ben Shephard"], "Easy", "The Finish Line"],
    ["Which former Blue Peter presenter assists Roman Kemp on The Finish Line?", "Sarah Greene", ["Janet Ellis", "Konnie Huq", "Anthea Turner"], "Easy", "The Finish Line"],
    ["What unusual equipment carries The Finish Line contestants across the studio?", "Moving podiums", ["Shopping trolleys", "Electric scooters", "Conveyor-belt chairs"], "Easy", "The Finish Line"],
    ["What makes a contestant's podium move forward on The Finish Line?", "A correct quiz answer", ["An audience vote", "A lucky spin", "An opponent's mistake alone"], "Easy", "The Finish Line"],
    ["What happens to a player's progress after a wrong answer on The Finish Line?", "Their podium stops", ["Their podium doubles its speed", "They swap with the host", "They immediately win a prize"], "Easy", "The Finish Line"],
    ["Which broadcaster first showed The Finish Line with Roman Kemp?", "BBC", ["ITV", "Channel 4", "Sky"], "Easy", "The Finish Line"],
    ["What is the top cash prize for winning the standard BBC quiz The Finish Line?", "£5,000", ["£1,000", "£10,000", "£50,000"], "Medium", "The Finish Line"],

    // Beat the Chasers
    ["Who presents ITV's quiz spin-off Beat the Chasers?", "Bradley Walsh", ["Lee Mack", "Alexander Armstrong", "Stephen Mulhern"], "Easy", "Beat the Chasers"],
    ["Which long-running ITV quiz spawned Beat the Chasers?", "The Chase", ["Tipping Point", "Pointless", "The Weakest Link"], "Easy", "Beat the Chasers"],
    ["What makes Beat the Chasers different from the usual game of The Chase?", "One contestant faces several Chasers together", ["All players compete in pairs", "The Chasers answer only sports questions", "Only celebrities may compete"], "Easy", "Beat the Chasers"],
    ["How much is each correct Cash Builder question worth on Beat the Chasers?", "£1,000", ["£100", "£5,000", "£10,000"], "Medium", "Beat the Chasers"],
    ["How much time is on a contestant's clock when a Beat the Chasers head-to-head begins?", "60 seconds", ["30 seconds", "45 seconds", "90 seconds"], "Medium", "Beat the Chasers"],
    ["What must run out first for a contestant to win the head-to-head on Beat the Chasers?", "The Chasers' clock", ["The contestant's clock", "The studio audience's clock", "The presenter's clock"], "Easy", "Beat the Chasers"],

    // Win, Lose or Draw
    ["Who first hosted the British television game Win, Lose or Draw?", "Danny Baker", ["Shane Richie", "Bob Mills", "Bob Monkhouse"], "Easy", "Win, Lose or Draw"],
    ["Which comedian hosted later 1990s series of Win, Lose or Draw?", "Bob Mills", ["Paul Merton", "Jim Davidson", "Richard Digance"], "Medium", "Win, Lose or Draw"],
    ["Which traditional drawing-based party game inspired Win, Lose or Draw?", "Pictionary", ["Charades", "Scrabble", "Trivial Pursuit"], "Easy", "Win, Lose or Draw"],
    ["What did players do to help teammates guess words on Win, Lose or Draw?", "Draw pictures without speaking the answer", ["Hum popular songs", "Act out scenes silently", "Spell out words with letter tiles"], "Easy", "Win, Lose or Draw"],
    ["Which actress and presenter hosted Win, Lose or Draw Late?", "Liza Tarbuck", ["Caroline Quentin", "Amanda Holden", "Sally Lindsay"], "Medium", "Win, Lose or Draw"],

    // The Price Is Right
    ["Which entertainer presented the original ITV version of The Price Is Right?", "Leslie Crowther", ["Bruce Forsyth", "Joe Pasquale", "Bob Warman"], "Easy", "The Price Is Right"],
    ["Which comedian hosted an ITV revival of The Price Is Right in the 2000s?", "Joe Pasquale", ["Roy Walker", "Jim Bowen", "Michael Barrymore"], "Easy", "The Price Is Right"],
    ["Which famous invitation brought members of the audience forward on The Price Is Right?", "Come on down!", ["Shut that door!", "Say what you see!", "Good game, good game!"], "Easy", "The Price Is Right"],
    ["What was the large final collection of prizes called on The Price Is Right?", "The Showcase", ["The Golden Medley", "The Final Chase", "The Gold Run"], "Easy", "The Price Is Right"],
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, programme] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(5004 + index).padStart(4, '0'),
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
