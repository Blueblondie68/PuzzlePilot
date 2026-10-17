// quiz_pack209.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British Quiz and Game Shows - classic to modern
// 100 questions: tv_4704 to tv_4803
// Leave quiz_bank.js unchanged until the end of the evening.

const facts = [
    // Bruce Forsyth, The Generation Game and Play Your Cards Right
    ["Which entertainer made 'Good game, good game!' a familiar television catchphrase?", "Bruce Forsyth", ["Larry Grayson", "Jim Bowen", "Bob Holness"], "Easy", "The Generation Game"],
    ["How did audiences finish Bruce Forsyth's greeting 'Nice to see you, to see you...'?", "Nice!", ["Lovely!", "Wonderful!", "Good!"], "Easy", "The Generation Game"],
    ["Which game show did Bruce Forsyth often praise contestants with 'Didn't they do well!'?", "The Generation Game", ["Play Your Cards Right", "Blockbusters", "Bullseye"], "Easy", "The Generation Game"],
    ["What did Bruce Forsyth want his assistant to do when he said 'Give us a twirl'?", "Turn to show off her dress", ["Spin a prize wheel", "Start the next quiz round", "Fetch the next contestant"], "Easy", "The Generation Game"],
    ["Which Bruce Forsyth show featured prizes passing by on a conveyor belt?", "The Generation Game", ["Play Your Cards Right", "The Price Is Right", "Take Your Pick"], "Easy", "The Generation Game"],
    ["Which type of toy was famously among the prizes on The Generation Game's conveyor belt?", "A cuddly toy", ["A wind-up robot", "A model train", "A toy drum"], "Easy", "The Generation Game"],
    ["Which presenter took over The Generation Game after Bruce Forsyth's original run?", "Larry Grayson", ["Michael Barrymore", "Ted Rogers", "Les Dennis"], "Easy", "The Generation Game"],
    ["Which presenter of The Generation Game was famous for saying 'Shut that door!'?", "Larry Grayson", ["Bruce Forsyth", "Jim Davidson", "Bob Monkhouse"], "Easy", "The Generation Game"],
    ["Which woman was Bruce Forsyth's assistant on the original run of The Generation Game?", "Anthea Redfern", ["Isla St Clair", "Rosemarie Ford", "Carol Vorderman"], "Medium", "The Generation Game"],
    ["Which assistant did Larry Grayson introduce as 'my lovely Isla' on The Generation Game?", "Isla St Clair", ["Anthea Redfern", "Rosemarie Ford", "Judith Chalmers"], "Medium", "The Generation Game"],
    ["Which Bruce Forsyth assistant was addressed with 'What's on the board, Miss Ford?'", "Rosemarie Ford", ["Anthea Redfern", "Isla St Clair", "Susan King"], "Medium", "The Generation Game"],
    ["On The Generation Game, what did contestants have to do after watching the conveyor belt?", "Remember the prizes", ["Guess their prices", "Put them in alphabetical order", "Arrange them by weight"], "Easy", "The Generation Game"],
    ["In Play Your Cards Right, what did contestants predict about the next card?", "Whether it would be higher or lower", ["Whether it would be red or black", "Whether it would be a heart or diamond", "Whether it would be odd or even"], "Easy", "Play Your Cards Right"],
    ["Which Bruce Forsyth game show used the line 'You get nothing for a pair'?", "Play Your Cards Right", ["The Generation Game", "The Price Is Right", "Beat the Clock"], "Easy", "Play Your Cards Right"],
    ["What was the audience's response to Bruce Forsyth's 'What do points make?'", "Prizes!", ["Money!", "Winners!", "Champions!"], "Easy", "Play Your Cards Right"],
    ["Which Bruce Forsyth show featured contestants guessing the prices of items?", "Bruce's Price Is Right", ["Play Your Cards Right", "The Generation Game", "Strike It Lucky"], "Easy", "The Price Is Right"],

    // 3-2-1 and Dusty Bin
    ["Who presented the ITV game show 3-2-1?", "Ted Rogers", ["Jim Bowen", "Leslie Crowther", "Michael Aspel"], "Easy", "3-2-1"],
    ["What was the name of the robotic mascot on 3-2-1?", "Dusty Bin", ["Bully", "Mr Chips", "Noddy"], "Easy", "3-2-1"],
    ["What sort of prize did Dusty Bin represent on 3-2-1?", "The booby prize", ["The star prize", "A cash jackpot", "A bonus holiday"], "Easy", "3-2-1"],
    ["What household item did contestants actually win if they ended up with Dusty Bin?", "A dustbin", ["A vacuum cleaner", "A washing machine", "A toaster"], "Easy", "3-2-1"],
    ["What did contestants have to unravel to identify the prizes in 3-2-1?", "Cryptic clues", ["Anagrams on a screen", "A crossword grid", "Picture rebuses"], "Easy", "3-2-1"],
    ["Which famous hand gesture did Ted Rogers perform to introduce his show?", "Three-two-one with his fingers", ["A thumbs-up salute", "Two fingers to his forehead", "Clapping above his head"], "Easy", "3-2-1"],

    // Bullseye, Blockbusters and classic family shows
    ["Who was the best-known original presenter of the darts quiz Bullseye?", "Jim Bowen", ["Tony Green", "Ted Rogers", "Bob Holness"], "Easy", "Bullseye"],
    ["What was the name of Bullseye's cartoon bull mascot?", "Bully", ["Dusty", "Chips", "Bingo"], "Easy", "Bullseye"],
    ["Which sport was mixed with general-knowledge questions on Bullseye?", "Darts", ["Snooker", "Bowls", "Table tennis"], "Easy", "Bullseye"],
    ["Which Bullseye personality called out the scores and dartboard prizes?", "Tony Green", ["Bob Holness", "Fred Trueman", "John Virgo"], "Easy", "Bullseye"],
    ["Which quiz show presenter was known for saying 'Super, smashing, great!'?", "Jim Bowen", ["Ted Rogers", "Michael Barrymore", "William G. Stewart"], "Easy", "Bullseye"],
    ["What did Jim Bowen mean by 'BFH' when consoling losing Bullseye contestants?", "Bus Fare Home", ["Bonus For Honesty", "Big Final Handicap", "Back For Holidays"], "Medium", "Bullseye"],
    ["Which show asked contestants to score 101 or more with six darts in a final gamble?", "Bullseye", ["Blockbusters", "3-2-1", "Family Fortunes"], "Medium", "Bullseye"],
    ["Who was the original long-running host of Blockbusters?", "Bob Holness", ["Michael Aspel", "Richard Whiteley", "William G. Stewart"], "Easy", "Blockbusters"],
    ["Which shape formed the question board on Blockbusters?", "Hexagons", ["Triangles", "Circles", "Squares"], "Easy", "Blockbusters"],
    ["What was the final challenge on the classic version of Blockbusters called?", "Gold Run", ["Fastest Finger", "Money Ladder", "Speed Round"], "Easy", "Blockbusters"],
    ["How long did contestants get to complete the classic Blockbusters Gold Run?", "60 seconds", ["30 seconds", "90 seconds", "Two minutes"], "Medium", "Blockbusters"],
    ["In the original Blockbusters, a solo player generally competed against what?", "A team of two", ["A team of five", "Three celebrities", "Another solo player only"], "Easy", "Blockbusters"],
    ["Which game show prompted the cheeky request 'Can I have a P please, Bob?'", "Blockbusters", ["Countdown", "Mastermind", "Catchphrase"], "Easy", "Blockbusters"],
    ["Which classic game show presented by Les Dennis was built around public survey answers?", "Family Fortunes", ["Bullseye", "3-2-1", "Fifteen-to-One"], "Easy", "Family Fortunes"],
    ["What words were famously followed by a buzzer or a revealed answer on Family Fortunes?", "Our survey says", ["Final answer please", "It's a knockout", "Name your number"], "Easy", "Family Fortunes"],
    ["Which entertainer hosted the original British version of Strike It Lucky?", "Michael Barrymore", ["Jim Davidson", "Bob Monkhouse", "Les Dennis"], "Easy", "Strike It Lucky"],
    ["What were the hazards called on Strike It Lucky's game board?", "Hot Spots", ["Black Holes", "Trap Doors", "Wild Cards"], "Medium", "Strike It Lucky"],
    ["What famous consolation prize was given to unsuccessful Blankety Blank contestants?", "A chequebook and pen", ["A clock and calendar", "A teapot and cups", "A diary and pencil"], "Easy", "Blankety Blank"],
    ["Which comedian later presented Blankety Blank as Lily Savage?", "Paul O'Grady", ["Julian Clary", "Graham Norton", "Alan Carr"], "Easy", "Blankety Blank"],
    ["Which game show was associated with the catchphrase 'Say what you see'?", "Catchphrase", ["Blockbusters", "Pointless", "The Weakest Link"], "Easy", "Catchphrase"],
    ["Who hosted the original ITV run of Catchphrase?", "Roy Walker", ["Bob Holness", "Ted Rogers", "Les Dennis"], "Easy", "Catchphrase"],
    ["What was the name of the animated yellow mascot on Catchphrase?", "Mr Chips", ["Bully", "Dusty Bin", "Mr Blobby"], "Easy", "Catchphrase"],

    // Countdown, Mastermind, University Challenge
    ["Who was the original long-running presenter of Countdown?", "Richard Whiteley", ["Nick Hewer", "Des O'Connor", "Jeff Stelling"], "Easy", "Countdown"],
    ["Which channel launched with Countdown as its first programme?", "Channel 4", ["BBC Two", "ITV", "Channel 5"], "Easy", "Countdown"],
    ["Who was Countdown's original maths and numbers expert?", "Carol Vorderman", ["Rachel Riley", "Susie Dent", "Cathy Newman"], "Easy", "Countdown"],
    ["Which mathematician succeeded Carol Vorderman on Countdown?", "Rachel Riley", ["Vicky Coren Mitchell", "Anne Robinson", "Lucy Worsley"], "Easy", "Countdown"],
    ["Who is best known as Countdown's long-serving word expert in Dictionary Corner?", "Susie Dent", ["Carol Vorderman", "Jenny Ryan", "Angela Rippon"], "Easy", "Countdown"],
    ["How many letters must contestants unscramble in the Countdown Conundrum?", "Nine", ["Seven", "Eight", "Ten"], "Easy", "Countdown"],
    ["What piece of equipment famously sets the time limit for Countdown's rounds?", "A 30-second clock", ["A one-minute hourglass", "A digital stopwatch set to ten seconds", "A chess clock"], "Easy", "Countdown"],
    ["Which Countdown round asks players to use arithmetic to reach a target?", "The numbers round", ["The conundrum", "Dictionary Corner", "The letters round"], "Easy", "Countdown"],
    ["Which Mastermind presenter was famous for 'I've started, so I'll finish'?", "Magnus Magnusson", ["Jeremy Paxman", "Bamber Gascoigne", "John Humphrys"], "Easy", "Mastermind"],
    ["What colour is the famous chair used by Mastermind contestants?", "Black", ["Red", "Blue", "Green"], "Easy", "Mastermind"],
    ["What subject type do Mastermind contestants choose for their first round?", "A specialist subject", ["A surprise subject", "A subject picked by the audience", "A subject chosen by another contestant"], "Easy", "Mastermind"],
    ["Which type of questions follows the specialist-subject round in Mastermind?", "General knowledge", ["Mental arithmetic only", "Music intros only", "Sport only"], "Easy", "Mastermind"],
    ["Which newsreader succeeded Magnus Magnusson as the regular host of revived Mastermind?", "John Humphrys", ["Clive Myrie", "Jon Snow", "David Dimbleby"], "Medium", "Mastermind"],
    ["Which broadcaster became presenter of Mastermind after John Humphrys?", "Clive Myrie", ["Amol Rajan", "Huw Edwards", "Nick Robinson"], "Medium", "Mastermind"],
    ["Who was the original presenter of University Challenge?", "Bamber Gascoigne", ["Jeremy Paxman", "Magnus Magnusson", "William G. Stewart"], "Easy", "University Challenge"],
    ["Who hosted University Challenge for many years after Bamber Gascoigne?", "Jeremy Paxman", ["John Humphrys", "Chris Tarrant", "Jon Snow"], "Easy", "University Challenge"],
    ["Which journalist succeeded Jeremy Paxman as University Challenge presenter?", "Amol Rajan", ["Clive Myrie", "Jeremy Vine", "Richard Osman"], "Medium", "University Challenge"],
    ["How many points is a starter question normally worth on University Challenge?", "Ten", ["Five", "Fifteen", "Twenty"], "Easy", "University Challenge"],
    ["Who competes against whom in the main version of University Challenge?", "Teams representing universities", ["Families from different counties", "Teams of schoolteachers", "Solo celebrities"], "Easy", "University Challenge"],

    // Millionaire, Weakest Link and popular BBC quizzes
    ["Who presented the original British Who Wants to Be a Millionaire?", "Chris Tarrant", ["Jeremy Clarkson", "Phillip Schofield", "Noel Edmonds"], "Easy", "Who Wants to Be a Millionaire?"],
    ["What is the largest standard cash prize on Who Wants to Be a Millionaire?", "£1 million", ["£100,000", "£500,000", "£2 million"], "Easy", "Who Wants to Be a Millionaire?"],
    ["Which Millionaire lifeline removes two incorrect options?", "50:50", ["Phone a Friend", "Ask the Audience", "Ask the Host"], "Easy", "Who Wants to Be a Millionaire?"],
    ["Which Millionaire lifeline lets the studio crowd vote on an answer?", "Ask the Audience", ["Phone a Friend", "50:50", "Fastest Finger First"], "Easy", "Who Wants to Be a Millionaire?"],
    ["Who became the first person to win the top prize on the British Millionaire?", "Judith Keppel", ["Pat Gibson", "Kevin Ashman", "Daphne Fowler"], "Medium", "Who Wants to Be a Millionaire?"],
    ["Which television presenter took over the British version of Millionaire for its 2018 revival?", "Jeremy Clarkson", ["Chris Evans", "Bradley Walsh", "Ben Shephard"], "Easy", "Who Wants to Be a Millionaire?"],
    ["Who was the famously stern original host of The Weakest Link?", "Anne Robinson", ["Fiona Bruce", "Judith Keppel", "Sandi Toksvig"], "Easy", "The Weakest Link"],
    ["Which quiz show used the farewell 'You are the weakest link. Goodbye!'?", "The Weakest Link", ["Fifteen-to-One", "Mastermind", "The Chase"], "Easy", "The Weakest Link"],
    ["In The Weakest Link, what word secures the money built up by the team?", "Bank", ["Save", "Freeze", "Hold"], "Easy", "The Weakest Link"],
    ["How are most contestants eliminated during The Weakest Link?", "By a vote from fellow contestants", ["By drawing the shortest straw", "By losing a coin toss", "By spinning a wheel"], "Easy", "The Weakest Link"],
    ["Which comedian began presenting the revived celebrity version of The Weakest Link?", "Romesh Ranganathan", ["Rob Brydon", "Jimmy Carr", "Lee Mack"], "Easy", "The Weakest Link"],
    ["Which presenter hosts Pointless, where low scores are good?", "Alexander Armstrong", ["Richard Osman", "Bradley Walsh", "Ben Shephard"], "Easy", "Pointless"],
    ["Who was Alexander Armstrong's original co-presenter on Pointless?", "Richard Osman", ["Stephen Fry", "Jeremy Vine", "Mark Labbett"], "Easy", "Pointless"],
    ["On Pointless, what does a score of zero mean?", "Nobody surveyed gave that correct answer", ["Everybody surveyed knew the answer", "The contestant gave a wrong answer", "The contestant passed the question"], "Easy", "Pointless"],
    ["How many people are typically surveyed to produce the scores on Pointless?", "100", ["50", "500", "1,000"], "Easy", "Pointless"],
    ["Which broadcaster was the original host of Eggheads?", "Dermot Murnaghan", ["Jeremy Vine", "Chris Tarrant", "Nick Hewer"], "Medium", "Eggheads"],
    ["Which Eggheads quiz expert once scored a record 41 points on Mastermind?", "Kevin Ashman", ["Christopher Hughes", "Barry Simmons", "CJ de Mooi"], "Medium", "Eggheads"],

    // The Chase, Only Connect and other newer shows
    ["Who is the presenter of ITV's The Chase?", "Bradley Walsh", ["Alexander Armstrong", "Ben Shephard", "Jeremy Clarkson"], "Easy", "The Chase"],
    ["Which Chaser is nicknamed 'The Beast'?", "Mark Labbett", ["Shaun Wallace", "Paul Sinha", "Darragh Ennis"], "Easy", "The Chase"],
    ["Which Chaser is nicknamed 'The Governess'?", "Anne Hegerty", ["Jenny Ryan", "Judith Keppel", "Daphne Fowler"], "Easy", "The Chase"],
    ["Which Chaser is nicknamed 'The Dark Destroyer'?", "Shaun Wallace", ["Mark Labbett", "Paul Sinha", "Darragh Ennis"], "Easy", "The Chase"],
    ["Which Chaser is nicknamed 'The Sinnerman'?", "Paul Sinha", ["Shaun Wallace", "Mark Labbett", "Darragh Ennis"], "Easy", "The Chase"],
    ["Which Chaser is known as 'The Vixen'?", "Jenny Ryan", ["Anne Hegerty", "Rachel Riley", "Victoria Coren Mitchell"], "Easy", "The Chase"],
    ["Which Chaser is nicknamed 'The Menace'?", "Darragh Ennis", ["Paul Sinha", "Mark Labbett", "Shaun Wallace"], "Easy", "The Chase"],
    ["What is the final team-versus-Chaser round called on The Chase?", "The Final Chase", ["The Gold Run", "The Supermatch", "The Quickfire Finale"], "Easy", "The Chase"],
    ["Who presents the connecting-clues quiz Only Connect?", "Victoria Coren Mitchell", ["Sandi Toksvig", "Susie Dent", "Fiona Bruce"], "Easy", "Only Connect"],
    ["Which unusual symbols are used to choose questions in Only Connect?", "Egyptian hieroglyphs", ["Zodiac signs", "Playing-card suits", "Chess pieces"], "Easy", "Only Connect"],
    ["How many tiles appear on the Connecting Wall in Only Connect?", "16", ["12", "20", "25"], "Medium", "Only Connect"],
    ["What must contestants restore in Only Connect's Missing Vowels round?", "The missing vowels in phrases", ["Deleted numbers in sums", "Missing notes in tunes", "Hidden punctuation in quotations"], "Easy", "Only Connect"],
    ["Who hosts ITV's The 1% Club?", "Lee Mack", ["Jimmy Carr", "Rob Brydon", "Michael McIntyre"], "Easy", "The 1% Club"],
    ["What kind of skill does The 1% Club chiefly test?", "Logic and reasoning", ["Knowledge of celebrity gossip", "Physical endurance", "Musical performance"], "Easy", "The 1% Club"],
    ["How many contestants start a standard episode of The 1% Club?", "100", ["20", "50", "200"], "Easy", "The 1% Club"],
    ["Which ITV quiz features a giant arcade-style coin-pusher machine?", "Tipping Point", ["The Chase", "Pointless", "Tenable"], "Easy", "Tipping Point"],
    ["Who has been the regular presenter of Tipping Point?", "Ben Shephard", ["Bradley Walsh", "Alexander Armstrong", "Warwick Davis"], "Easy", "Tipping Point"],
    ["Which actor and presenter was the original host of Tenable?", "Warwick Davis", ["Richard Osman", "Lee Mack", "Stephen Mulhern"], "Easy", "Tenable"],
    ["What kind of answers must players find on Tenable?", "Items on a top-ten list", ["Answers from a telephone poll", "Names from a crossword", "Words in a nine-letter anagram"], "Easy", "Tenable"],
    ["Who presented the original run of Fifteen-to-One?", "William G. Stewart", ["Magnus Magnusson", "Bob Holness", "Bamber Gascoigne"], "Easy", "Fifteen-to-One"],
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, programme] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(4704 + index).padStart(4, '0'),
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
