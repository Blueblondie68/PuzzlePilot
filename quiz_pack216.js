// quiz_pack216.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British quiz and game shows - classics and newer formats
// 100 questions: tv_5404 to tv_5503

const facts = [
    // CHAIN LETTERS (7)
    ["Who presented the original series of Chain Letters?", "Jeremy Beadle", ["Andrew O'Connor", "Dave Spikey", "Ted Robbins"], "Easy", "Chain Letters"],
    ["Which comedian hosted the final ITV series of Chain Letters?", "Dave Spikey", ["Bobby Davro", "Jim Davidson", "Brian Conley"], "Medium", "Chain Letters"],
    ["What did contestants change to make new words on Chain Letters?", "Letters", ["Numbers", "Pictures", "Musical notes"], "Easy", "Chain Letters"],
    ["How long did contestants have to build a word chain in Chain Letters' opening round?", "45 seconds", ["30 seconds", "60 seconds", "90 seconds"], "Medium", "Chain Letters"],
    ["How many contestants competed in a regular game of Chain Letters?", "Three", ["Two", "Four", "Five"], "Easy", "Chain Letters"],
    ["What was the on-screen word computer on Chain Letters called?", "Wordsworth", ["Wordmaster", "Lexicon", "Letterbox"], "Medium", "Chain Letters"],
    ["What was the final challenge in Chain Letters called?", "Superchain", ["Crossfire", "Gold Run", "Puzzleword"], "Medium", "Chain Letters"],

    // LUCKY LADDERS (6)
    ["Who presented ITV's word game Lucky Ladders?", "Lennie Bennett", ["Tom O'Connor", "Bob Holness", "Michael Barrymore"], "Medium", "Lucky Ladders"],
    ["What were Lucky Ladders contestants trying to complete?", "A chain of connected words", ["A crossword of famous names", "A set of number sequences", "A musical score"], "Easy", "Lucky Ladders"],
    ["Which words were already shown to players on a Lucky Ladders puzzle?", "The first and last", ["Every second word", "Only the middle two", "None of them"], "Medium", "Lucky Ladders"],
    ["How did successive words on a Lucky Ladders board relate to one another?", "Each neighbouring pair was associated", ["Every word rhymed", "Each word had the same length", "All words were anagrams"], "Medium", "Lucky Ladders"],
    ["What choice could Lucky Ladders players make when revealing letters?", "Give or take", ["Buy or sell", "Swap or steal", "Double or drop"], "Medium", "Lucky Ladders"],
    ["Which American word game inspired Lucky Ladders?", "Chain Reaction", ["Password", "Jeopardy!", "The $10,000 Pyramid"], "Medium", "Lucky Ladders"],

    // CROSSWITS (7)
    ["Which comedian was the original host of Crosswits?", "Barry Cryer", ["Tom O'Connor", "Les Dawson", "Jimmy Tarbuck"], "Medium", "Crosswits"],
    ["Who became the long-serving host of Crosswits after Barry Cryer?", "Tom O'Connor", ["John Junkin", "Bob Monkhouse", "Henry Kelly"], "Easy", "Crosswits"],
    ["What type of puzzle formed the main board in Crosswits?", "A crossword", ["A word search", "A maze", "A jigsaw"], "Easy", "Crosswits"],
    ["Who partnered an ordinary contestant in each Crosswits team?", "A celebrity", ["A relative", "A schoolteacher", "A professional athlete"], "Easy", "Crosswits"],
    ["How many bonus points did a Crosswits team earn for solving the common keyword?", "Ten", ["Five", "Fifteen", "Twenty"], "Medium", "Crosswits"],
    ["What was the final crossword challenge on Crosswits called?", "Crossfire", ["Superchain", "The Money List", "The Wonderwall"], "Medium", "Crosswits"],
    ["How much time did Crosswits finalists get to solve their final crossword?", "60 seconds", ["30 seconds", "45 seconds", "90 seconds"], "Medium", "Crosswits"],

    // EVERY SECOND COUNTS (7)
    ["Which magician hosted Every Second Counts on BBC One?", "Paul Daniels", ["David Nixon", "Wayne Dobson", "Geoffrey Durham"], "Easy", "Every Second Counts"],
    ["What kind of contestants competed as teams on Every Second Counts?", "Married couples", ["Groups of schoolfriends", "Celebrity siblings", "Teams of four neighbours"], "Medium", "Every Second Counts"],
    ["How many couples played in each game of Every Second Counts?", "Three", ["Two", "Four", "Five"], "Easy", "Every Second Counts"],
    ["What did correct answers earn contestants on Every Second Counts?", "Extra time", ["An extra teammate", "Playing cards", "Additional letters"], "Easy", "Every Second Counts"],
    ["What happened to a player who gave a wrong answer in an Every Second Counts round?", "They were frozen out", ["Their clock doubled", "They changed partners", "They won a consolation point"], "Medium", "Every Second Counts"],
    ["What did the winning couple take into the Every Second Counts final?", "The time they had earned", ["Their opponents' scores", "A choice of three lifelines", "A new set of bonus cards"], "Easy", "Every Second Counts"],
    ["What did Every Second Counts finalists switch off by giving correct answers?", "A row of lights", ["A bank of televisions", "A set of alarms", "A moving conveyor belt"], "Medium", "Every Second Counts"],

    // WIPEOUT (7)
    ["Who originally hosted the BBC quiz Wipeout?", "Paul Daniels", ["Bob Monkhouse", "Chris Tarrant", "Michael Aspel"], "Easy", "Wipeout"],
    ["Who succeeded Paul Daniels as presenter of Wipeout?", "Bob Monkhouse", ["Bruce Forsyth", "Jim Bowen", "Les Dennis"], "Easy", "Wipeout"],
    ["How many possible answers appeared on Wipeout's main question board?", "Sixteen", ["Ten", "Twelve", "Twenty"], "Medium", "Wipeout"],
    ["What was a 'wipeout' on the BBC quiz Wipeout?", "A wrong answer that erased a player's money", ["A correct answer worth double", "A special category change", "A free pass to the final"], "Easy", "Wipeout"],
    ["How many wrong answers were hidden on the original sixteen-answer Wipeout board?", "Five", ["Three", "Seven", "Nine"], "Medium", "Wipeout"],
    ["In Wipeout's auction round, what did contestants bid on?", "How many correct answers they could find", ["The value of a mystery holiday", "How quickly they could solve a crossword", "How many opponents they could eliminate"], "Medium", "Wipeout"],
    ["How many correct answers did a Wipeout finalist need to find within one minute?", "Six", ["Four", "Eight", "Ten"], "Medium", "Wipeout"],

    // THE PYRAMID GAME (7)
    ["Who presented the original standalone British series of The Pyramid Game?", "Steve Jones", ["Donny Osmond", "Bob Holness", "John Leslie"], "Medium", "The Pyramid Game"],
    ["Which singer hosted the Challenge TV revival of The Pyramid Game?", "Donny Osmond", ["David Cassidy", "Cliff Richard", "David Essex"], "Easy", "The Pyramid Game"],
    ["Who teamed up with members of the public on The Pyramid Game?", "Celebrities", ["Their employers", "Their children", "Sports referees"], "Easy", "The Pyramid Game"],
    ["How many category screens made up the pyramid in The Pyramid Game's main round?", "Six", ["Four", "Eight", "Ten"], "Medium", "The Pyramid Game"],
    ["What did a Pyramid Game player do to help their partner guess words?", "Give verbal descriptions", ["Draw pictures", "Sing the answers", "Spell each word aloud"], "Easy", "The Pyramid Game"],
    ["What was The Pyramid Game's final round called?", "The Winners' Circle", ["The Gold Run", "The Star Game", "The Answer Trap"], "Medium", "The Pyramid Game"],
    ["What was the special seven-word challenge in Steve Jones's The Pyramid Game called?", "Lucky 7", ["Secret Six", "Golden Five", "Perfect Ten"], "Medium", "The Pyramid Game"],

    // ODD ONE OUT (6)
    ["Who hosted the BBC quiz Odd One Out?", "Paul Daniels", ["Leslie Crowther", "Terry Wogan", "Nicholas Parsons"], "Easy", "Odd One Out"],
    ["What were players asked to identify on Odd One Out?", "The item that did not belong", ["The longest word", "The highest number", "The most expensive object"], "Easy", "Odd One Out"],
    ["How many items formed a standard Odd One Out question?", "Four", ["Three", "Five", "Six"], "Easy", "Odd One Out"],
    ["How many points were awarded for identifying the odd item on Odd One Out?", "Two", ["One", "Three", "Five"], "Medium", "Odd One Out"],
    ["What could players earn extra points for explaining on Odd One Out?", "What the other items had in common", ["Why the audience disagreed", "The presenter's next question", "Their choice of specialist subject"], "Medium", "Odd One Out"],
    ["What could an Odd One Out player ask opponents to do after choosing the odd item?", "Explain the link between the other items", ["Swap their seats", "Choose a new presenter", "Give up their next question"], "Medium", "Odd One Out"],

    // ALL CLUED UP (6)
    ["Which radio DJ hosted ITV's All Clued Up?", "David Hamilton", ["Tony Blackburn", "Mike Read", "David Jensen"], "Easy", "All Clued Up"],
    ["How many couples competed on All Clued Up?", "Two", ["Three", "Four", "Five"], "Medium", "All Clued Up"],
    ["What unusual piece of equipment dominated the All Clued Up studio?", "A giant computer keyboard", ["An enormous roulette wheel", "A glass lift", "A revolving dartboard"], "Medium", "All Clued Up"],
    ["What were contestants trying to identify in the main All Clued Up puzzle?", "A hidden phrase or saying", ["The price of a product", "A mystery celebrity's voice", "The location of a landmark"], "Easy", "All Clued Up"],
    ["What was the hidden incorrect letter on All Clued Up's keyboard called?", "The Stinger", ["The Joker", "The Wipeout", "The Blocker"], "Medium", "All Clued Up"],
    ["How did All Clued Up's smaller word puzzles help with the main puzzle?", "They provided clues to it", ["They removed rival contestants", "They added minutes to the clock", "They automatically completed it"], "Medium", "All Clued Up"],

    // TURNABOUT (6)
    ["Who presented the BBC word-and-strategy quiz Turnabout?", "Rob Curling", ["Mark Curry", "Nick Hancock", "David Vine"], "Medium", "Turnabout"],
    ["How many contestants competed on Turnabout's main board?", "Three", ["Two", "Four", "Six"], "Medium", "Turnabout"],
    ["What objects changed colour on Turnabout's game board?", "Spheres", ["Triangles", "Playing cards", "Darts"], "Medium", "Turnabout"],
    ["How many spheres were arranged on the Turnabout board?", "Sixteen", ["Nine", "Twelve", "Twenty-five"], "Medium", "Turnabout"],
    ["What were Turnabout contestants trying to create with spheres of their own colour?", "Lines of three or four", ["Pairs of matching numbers", "Circles of six", "Rows of letters in order"], "Medium", "Turnabout"],
    ["What was the timed word-memory round on Turnabout called?", "The Star Game", ["Crossfire", "The Gold Run", "Superchain"], "Medium", "Turnabout"],

    // KEYNOTES (6)
    ["Who hosted ITV's music quiz Keynotes?", "Alistair Divall", ["Henry Kelly", "Mike Read", "David Hamilton"], "Medium", "Keynotes"],
    ["What did teams try to identify from a few notes on Keynotes?", "A popular song", ["An advert slogan", "A film star", "A television channel"], "Easy", "Keynotes"],
    ["How many notes were available to reveal the mystery tune on Keynotes?", "Nine", ["Five", "Seven", "Twelve"], "Medium", "Keynotes"],
    ["What did contestants have to supply after the music stopped in a Keynotes clue?", "The next word of the lyric", ["The singer's birthplace", "The name of the instrument", "The song's chart position"], "Medium", "Keynotes"],
    ["How many possible lyric words did Keynotes players choose between?", "Three", ["Two", "Four", "Five"], "Medium", "Keynotes"],
    ["What could the Keynotes winners do to their winnings in the bonus round?", "Double or treble them", ["Convert them into holiday miles", "Split them with the audience", "Exchange them for a mystery box"], "Medium", "Keynotes"],

    // LIGHTNING (6)
    ["Which comedian presented the BBC quiz Lightning?", "Zoe Lyons", ["Sara Pascoe", "Lucy Porter", "Katherine Ryan"], "Easy", "Lightning"],
    ["What put a contestant in danger of elimination on Lightning?", "Being caught in the light when time ran out", ["Giving a single wrong answer", "Choosing the highest prize", "Finishing a puzzle first"], "Easy", "Lightning"],
    ["What could a Lightning contestant do after giving the required correct answer?", "Nominate the next player", ["Choose the prize money", "Eliminate two opponents", "Restart the round"], "Easy", "Lightning"],
    ["In the first series of Lightning, what was added to the quiz questions in one round?", "Physical challenges", ["Celebrity impressions", "Musical duets", "Video-call interviews"], "Medium", "Lightning"],
    ["What did the final two Lightning players have to do as well as answering correctly?", "Spell the answer", ["Explain its origin", "Say it backwards", "Act it out"], "Medium", "Lightning"],
    ["What was the maximum cash prize available to a daily winner of Lightning?", "£3,000", ["£1,000", "£5,000", "£10,000"], "Medium", "Lightning"],

    // HEAD HUNTERS (6)
    ["Who presented the BBC quiz Head Hunters?", "Rob Beckett", ["Rob Brydon", "Romesh Ranganathan", "Richard Osman"], "Easy", "Head Hunters"],
    ["How many Head Hunters were selected at the start of each game?", "Three", ["Two", "Four", "Five"], "Medium", "Head Hunters"],
    ["What could a Head Hunter offer other quizzers to recruit them?", "A share of the prize money", ["An extra life in every round", "A guaranteed place in the final", "A chance to change the questions"], "Medium", "Head Hunters"],
    ["How did a would-be Candidate first earn the chance to join a team on Head Hunters?", "Win a fastest-finger question", ["Choose a mystery envelope", "Beat the host at a puzzle", "Spin a numbered wheel"], "Medium", "Head Hunters"],
    ["How many lives did each team have in the Head Hunters elimination round?", "Five", ["Three", "Four", "Six"], "Medium", "Head Hunters"],
    ["How much time did the winning Head Hunters team have to answer from nine categories in the final?", "90 seconds", ["45 seconds", "60 seconds", "120 seconds"], "Medium", "Head Hunters"],

    // PASSWORD (6)
    ["Who presented ITV's revival of Password that began in 2024?", "Stephen Mangan", ["Bradley Walsh", "Alexander Armstrong", "Ben Shephard"], "Easy", "Password"],
    ["Which two comedians were the celebrity team captains in the first series of the ITV Password revival?", "Alan Carr and Daisy May Cooper", ["Rob Beckett and Aisling Bea", "Lee Mack and Sara Pascoe", "Jimmy Carr and Katherine Ryan"], "Medium", "Password"],
    ["What sort of clue did players traditionally give their partners on Password?", "A single word", ["A drawing", "A rhyming couplet", "A short song"], "Easy", "Password"],
    ["Who hosted the Channel 4 version of Password in the early 1980s?", "Tom O'Connor", ["Henry Kelly", "Bob Holness", "Michael Aspel"], "Medium", "Password"],
    ["What was the rapid-fire alphabet-based endgame in ITV's Password revival called?", "Alphabeticals", ["Letter Ladder", "Word Wheel", "The Final Pyramid"], "Medium", "Password"],
    ["Who hosted the first British television version of Password?", "Shaw Taylor", ["Hughie Green", "Michael Miles", "Leslie Crowther"], "Hard", "Password"],

    // FIRST & LAST (5)
    ["Who presented the BBC game show First & Last?", "Jason Manford", ["Lee Mack", "Vernon Kay", "Stephen Mulhern"], "Easy", "First & Last"],
    ["Which finishing positions did First & Last contestants have to avoid?", "First and last", ["First and second", "Second and third", "Third and fourth"], "Easy", "First & Last"],
    ["How many contestants began a game of First & Last?", "Eleven", ["Eight", "Nine", "Twelve"], "Medium", "First & Last"],
    ["What did contestants have to jump out of in First & Last's opening challenge?", "Large boxes", ["Inflatable rings", "Swimming pools", "Toy cars"], "Medium", "First & Last"],
    ["What did the Internet Search round on First & Last compare?", "Numbers of search results", ["Prices of online shopping baskets", "Lengths of website addresses", "Numbers of social-media passwords"], "Medium", "First & Last"],

    // PRESSURE PAD (6)
    ["Who presented the BBC quiz Pressure Pad?", "John Barrowman", ["Gethin Jones", "Nick Knowles", "John Bishop"], "Easy", "Pressure Pad"],
    ["How many players were on each Pressure Pad team?", "Five", ["Three", "Four", "Six"], "Medium", "Pressure Pad"],
    ["What dominated the studio floor in Pressure Pad?", "A giant electronic display", ["A rotating conveyor belt", "An indoor swimming pool", "A giant chessboard"], "Easy", "Pressure Pad"],
    ["Who was kept back to play the deciding round on Pressure Pad?", "The team captain", ["The youngest player", "The opening-round winner", "The audience favourite"], "Medium", "Pressure Pad"],
    ["How much money did the winning Pressure Pad team secure before any jackpot gamble?", "£2,000", ["£500", "£1,000", "£5,000"], "Medium", "Pressure Pad"],
    ["What risk did the Pressure Pad captain take by attempting the extra jackpot question?", "Losing the team's winnings", ["Having to replay the whole game", "Giving the opponents a new captain", "Losing one teammate from the show"], "Medium", "Pressure Pad"],

    // THE ANSWER TRAP (6)
    ["Who presented Channel 4's The Answer Trap?", "Anita Rani", ["Naga Munchetty", "Sandi Toksvig", "Sara Cox"], "Easy", "The Answer Trap"],
    ["Which two quizzers devised decoy answers on The Answer Trap?", "Bobby Seagull and Frank Paul", ["Anne Hegerty and Mark Labbett", "Richard Osman and Alexander Armstrong", "Jenny Ryan and Paul Sinha"], "Medium", "The Answer Trap"],
    ["What made an answer a 'trap' on The Answer Trap?", "It fitted neither category", ["It was too easy to guess", "It was worth double points", "It appeared twice on the board"], "Easy", "The Answer Trap"],
    ["What did contestants do with genuine answers on The Answer Trap?", "Sort them into two categories", ["Arrange them alphabetically", "Guess their monetary value", "Match them to famous voices"], "Easy", "The Answer Trap"],
    ["What happened if a team chose both hidden traps on a board in The Answer Trap?", "Their turn ended", ["They swapped teammates", "They received an extra category", "They doubled their score"], "Medium", "The Answer Trap"],
    ["What was the top jackpot offered on The Answer Trap?", "£10,000", ["£5,000", "£20,000", "£50,000"], "Medium", "The Answer Trap"],

];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, programme], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(5404 + index).padStart(4, '0'),
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
