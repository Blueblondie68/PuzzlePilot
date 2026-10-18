// quiz_pack220.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British adult quiz and game shows - classic quizzes and comedy panels
// 100 questions: tv_5804 to tv_5903

const facts = [
    // BOB'S FULL HOUSE (7)
    ["Who presented the BBC quiz Bob's Full House?", "Bob Monkhouse", ["Bruce Forsyth", "Jimmy Tarbuck", "Les Dennis"], "Easy", "Bob's Full House"],
    ["Which traditional game inspired the format of Bob's Full House?", "Bingo", ["Pontoon", "Dominoes", "Roulette"], "Easy", "Bob's Full House"],
    ["How many contestants played in each edition of Bob's Full House?", "Four", ["Three", "Five", "Six"], "Medium", "Bob's Full House"],
    ["What was the opening round of Bob's Full House called?", "Four Corners", ["Middle Line", "Gold Run", "Double Chance"], "Medium", "Bob's Full House"],
    ["What happened when a Bob's Full House contestant was 'Wallied'?", "They missed the next question", ["They lost all their prizes", "They had to swap seats", "They left the game immediately"], "Medium", "Bob's Full House"],
    ["What major prize could the winner play for in the Golden Bingo Card final of Bob's Full House?", "A holiday", ["A new car", "A house", "A boat"], "Medium", "Bob's Full House"],
    ["What was the middle-line round of Bob's Full House called?", "Monkhouse Mastercard", ["The Cash Ladder", "Lucky Links", "The Money Maze"], "Medium", "Bob's Full House"],

    // GAMBIT (6)
    ["Who presented the original ITV run of Gambit before Tom O'Connor?", "Fred Dinenage", ["Jim Bowen", "Michael Aspel", "Henry Kelly"], "Medium", "Gambit"],
    ["Which comedian later hosted Gambit during the 1980s?", "Tom O'Connor", ["Les Dawson", "Bob Monkhouse", "Ted Rogers"], "Medium", "Gambit"],
    ["Which card game supplied the basic rules of Gambit?", "Pontoon", ["Poker", "Rummy", "Snap"], "Easy", "Gambit"],
    ["What card total were Gambit contestants trying to reach without exceeding?", "Twenty-one", ["Fifteen", "Eighteen", "Thirty-one"], "Easy", "Gambit"],
    ["How many couples competed against one another on Gambit?", "Two", ["Three", "Four", "Five"], "Medium", "Gambit"],
    ["What was the bonus prize board on Gambit called?", "The Gambit Board", ["The Golden Grid", "The Money Ladder", "The Jackpot Wall"], "Medium", "Gambit"],

    // PERFECT RECALL (6)
    ["Who presented the television quiz Perfect Recall?", "Terry Wogan", ["Michael Parkinson", "John Humphrys", "Des O'Connor"], "Easy", "Perfect Recall"],
    ["Which channel broadcast Perfect Recall?", "Channel 4", ["BBC One", "ITV", "Channel 5"], "Medium", "Perfect Recall"],
    ["How many contestants began a game of Perfect Recall?", "Four", ["Three", "Five", "Six"], "Medium", "Perfect Recall"],
    ["How many general knowledge questions were asked in the opening round of Perfect Recall?", "Twenty", ["Ten", "Fifteen", "Thirty"], "Medium", "Perfect Recall"],
    ["What was unusual about the questions in later rounds of Perfect Recall?", "Different questions shared the same answers", ["Every question was about music", "All answers were numbers", "Questions were chosen by the audience"], "Medium", "Perfect Recall"],
    ["What did the Perfect Recall finalist have to predict before the final round?", "How many questions they would answer correctly", ["How long the round would take", "The other players' final scores", "Which questions would be asked"], "Medium", "Perfect Recall"],

    // WIN YOUR WISH LIST (6)
    ["Who hosted the original BBC version of Win Your Wish List?", "Shane Richie", ["Bradley Walsh", "Vernon Kay", "Nick Knowles"], "Easy", "Win Your Wish List"],
    ["Which television chef presented the Channel 5 revival of Win Your Wish List?", "Gino D'Acampo", ["Jamie Oliver", "James Martin", "Ainsley Harriott"], "Easy", "Win Your Wish List"],
    ["Which channel originally broadcast Win Your Wish List?", "BBC One", ["ITV", "Channel 4", "Sky One"], "Medium", "Win Your Wish List"],
    ["What kind of team originally played together on Win Your Wish List?", "A couple", ["Three colleagues", "Four neighbours", "Five strangers"], "Easy", "Win Your Wish List"],
    ["Who asked the quiz questions in the original Win Your Wish List?", "The contestants asked each other", ["A panel of celebrities", "Members of the audience", "A computer voice"], "Medium", "Win Your Wish List"],
    ["What did Win Your Wish List contestants select to put at risk in each round?", "One of their chosen prizes", ["A member of their team", "A mystery envelope", "A category they had already won"], "Medium", "Win Your Wish List"],

    // IDENTITY (6)
    ["Which singer presented the British game show Identity?", "Donny Osmond", ["David Essex", "Cliff Richard", "Jason Donovan"], "Easy", "Identity"],
    ["How many strangers appeared for contestants to identify on Identity?", "Twelve", ["Eight", "Ten", "Sixteen"], "Medium", "Identity"],
    ["Which BBC channel broadcast the British version of Identity?", "BBC Two", ["BBC One", "ITV", "Channel 4"], "Medium", "Identity"],
    ["What were contestants trying to match to the strangers on Identity?", "Their hidden identities", ["Their birthdays", "Their telephone numbers", "Their favourite songs"], "Easy", "Identity"],
    ["Which Identity lifeline offered advice from specialist profilers?", "Ask the Experts", ["Phone a Friend", "Double Chance", "Audience Choice"], "Medium", "Identity"],
    ["What was the top prize on the British version of Identity?", "£10,000", ["£5,000", "£25,000", "£50,000"], "Medium", "Identity"],

    // FASTEST FINGER FIRST (6)
    ["Who presented ITV's Fastest Finger First?", "Anita Rani", ["Sara Cox", "Kate Garraway", "Davina McCall"], "Easy", "Fastest Finger First"],
    ["Fastest Finger First was a spin-off from which major television quiz?", "Who Wants to Be a Millionaire?", ["The Chase", "Pointless", "The Weakest Link"], "Easy", "Fastest Finger First"],
    ["Which presenter did the winners of Fastest Finger First qualify to face?", "Jeremy Clarkson", ["Chris Tarrant", "Bradley Walsh", "Ben Shephard"], "Medium", "Fastest Finger First"],
    ["How many contestants competed on each edition of Fastest Finger First?", "Five", ["Three", "Four", "Six"], "Medium", "Fastest Finger First"],
    ["What did calling 'safety net' allow a player to do on Fastest Finger First?", "Pass a question without breaking their chain", ["Eliminate another contestant", "Ask the studio audience", "Restart the entire game"], "Medium", "Fastest Finger First"],
    ["How many correct answers in a row could win a qualifying round of Fastest Finger First immediately?", "Twelve", ["Eight", "Ten", "Fifteen"], "Medium", "Fastest Finger First"],

    // WINNER TAKES ALL (6)
    ["Which entertainer originally presented ITV's Winner Takes All?", "Jimmy Tarbuck", ["Bob Monkhouse", "Jim Bowen", "Bruce Forsyth"], "Easy", "Winner Takes All"],
    ["Who took over as presenter of Winner Takes All after serving as its announcer?", "Geoffrey Wheeler", ["Alan Dedicoat", "Peter Dickson", "John Sachs"], "Medium", "Winner Takes All"],
    ["What gave Winner Takes All its distinctive twist on general knowledge questions?", "Betting odds", ["A word-search board", "A giant dartboard", "A roulette wheel"], "Medium", "Winner Takes All"],
    ["What did contestants wager when answering questions on Winner Takes All?", "Their accumulated points", ["Their teammates' places", "Their holidays", "Their question categories"], "Medium", "Winner Takes All"],
    ["What determined how much a correct answer paid on Winner Takes All?", "The odds attached to the answer", ["The contestant's age", "The host's chosen multiplier", "The audience's applause"], "Medium", "Winner Takes All"],
    ["Which comedian presented the Challenge TV revival of Winner Takes All?", "Bobby Davro", ["Brian Conley", "Les Dennis", "Jim Davidson"], "Medium", "Winner Takes All"],

    // SHOOTING STARS (8)
    ["Which comedy double act hosted Shooting Stars?", "Vic Reeves and Bob Mortimer", ["French and Saunders", "Ant and Dec", "Hale and Pace"], "Easy", "Shooting Stars"],
    ["Which presenter was a long-running team captain on Shooting Stars?", "Ulrika Jonsson", ["Claudia Winkleman", "Davina McCall", "Carol Vorderman"], "Easy", "Shooting Stars"],
    ["Which comedian captained a Shooting Stars team opposite Ulrika Jonsson during its early series?", "Mark Lamarr", ["Sean Lock", "Jack Whitehall", "Alan Carr"], "Medium", "Shooting Stars"],
    ["Which actor played the giant baby scorekeeper George Dawes on Shooting Stars?", "Matt Lucas", ["David Walliams", "Peter Kay", "Paul Whitehouse"], "Easy", "Shooting Stars"],
    ["What kind of bird appeared in the Shooting Stars round 'From Above'?", "A dove", ["An owl", "A parrot", "A seagull"], "Easy", "Shooting Stars"],
    ["What did the cry 'Uvavu' usually mean on Shooting Stars?", "An incorrect answer", ["A bonus prize", "The end of the programme", "A tie between teams"], "Medium", "Shooting Stars"],
    ["What did the Shooting Stars cry 'Eranu' announce?", "A special prize", ["A wrong answer", "A new team captain", "The final round"], "Medium", "Shooting Stars"],
    ["Which comedian became a Shooting Stars team captain during its later revival?", "Jack Dee", ["Dara O Briain", "Stephen Fry", "Michael McIntyre"], "Medium", "Shooting Stars"],

    // 8 OUT OF 10 CATS (7)
    ["Who hosted the comedy panel show 8 Out of 10 Cats?", "Jimmy Carr", ["Alan Carr", "Rhod Gilbert", "David Mitchell"], "Easy", "8 Out of 10 Cats"],
    ["Which comedian was a long-running team captain on 8 Out of 10 Cats?", "Sean Lock", ["Lee Mack", "Ricky Gervais", "Jack Dee"], "Easy", "8 Out of 10 Cats"],
    ["Which Phoenix Nights comedian was an original team captain on 8 Out of 10 Cats?", "Dave Spikey", ["Peter Kay", "Paddy McGuinness", "Justin Moorhouse"], "Medium", "8 Out of 10 Cats"],
    ["What kind of research formed the basis of many questions on 8 Out of 10 Cats?", "Public opinion polls", ["Medical trials", "School examinations", "Weather forecasts"], "Easy", "8 Out of 10 Cats"],
    ["What was the round 'What Are You Talking About?' on 8 Out of 10 Cats about?", "The week's most discussed topics", ["Celebrity dance moves", "Hidden song lyrics", "Foreign-language phrases"], "Medium", "8 Out of 10 Cats"],
    ["Which comedian later became a team captain alongside Sean Lock on 8 Out of 10 Cats?", "Jon Richardson", ["Greg Davies", "Russell Brand", "Tim Vine"], "Medium", "8 Out of 10 Cats"],
    ["Which word-and-numbers quiz inspired an 8 Out of 10 Cats spin-off?", "Countdown", ["Blockbusters", "Fifteen-to-One", "Catchphrase"], "Easy", "8 Out of 10 Cats"],

    // MOCK THE WEEK (7)
    ["Who hosted the original BBC series of Mock the Week?", "Dara O Briain", ["Jimmy Carr", "Rob Brydon", "Stephen Fry"], "Easy", "Mock the Week"],
    ["Which comedian served as a long-running team captain on Mock the Week?", "Hugh Dennis", ["Jon Richardson", "Sean Lock", "Jack Dee"], "Easy", "Mock the Week"],
    ["Which Scottish comedian was an early regular on Mock the Week?", "Frankie Boyle", ["Kevin Bridges", "Billy Connolly", "Craig Ferguson"], "Easy", "Mock the Week"],
    ["Which BBC channel originally broadcast Mock the Week?", "BBC Two", ["BBC One", "BBC Three", "BBC Four"], "Medium", "Mock the Week"],
    ["In which Mock the Week round did comedians offer one-liners for imaginary situations?", "Scenes We'd Like to See", ["Headliners", "Odd One Out", "Picture This"], "Medium", "Mock the Week"],
    ["Which Mock the Week round challenged panellists to work out a headline from its initial letters?", "Headliners", ["Quickfire", "The Wheel", "Connections"], "Medium", "Mock the Week"],
    ["In Mock the Week's 'If This Is the Answer, What Is the Question?', what did players invent?", "Questions to fit a given answer", ["Newspaper headlines", "Song titles", "Fictional advert slogans"], "Medium", "Mock the Week"],

    // THE BIG FAT QUIZ OF THE YEAR (7)
    ["Who presents The Big Fat Quiz of the Year?", "Jimmy Carr", ["Rob Brydon", "Jonathan Ross", "David Mitchell"], "Easy", "The Big Fat Quiz of the Year"],
    ["Which channel broadcasts The Big Fat Quiz of the Year?", "Channel 4", ["BBC One", "ITV", "Channel 5"], "Easy", "The Big Fat Quiz of the Year"],
    ["What period do the questions in The Big Fat Quiz of the Year normally look back over?", "The year just ending", ["The previous decade", "The host's childhood", "The last hundred years"], "Easy", "The Big Fat Quiz of the Year"],
    ["How many celebrities usually compete in The Big Fat Quiz of the Year?", "Six", ["Four", "Five", "Eight"], "Medium", "The Big Fat Quiz of the Year"],
    ["Which Big Fat Quiz spin-off asks questions across history and popular culture rather than just one year?", "The Big Fat Quiz of Everything", ["The Big Fat Quiz of Sport", "The Big Fat Anniversary Quiz", "The Big Fat Quiz of the 90s"], "Medium", "The Big Fat Quiz of the Year"],
    ["What was the title of the Big Fat Quiz special celebrating Channel 4's history?", "The Big Fat Anniversary Quiz", ["The Big Fat Quiz of Everything", "The Big Fat Quiz of Sport", "The Big Fat Quiz of the 90s"], "Medium", "The Big Fat Quiz of the Year"],
    ["Which comedian teamed up with Russell Brand to win The Big Fat Quiz of the Year in 2006?", "Noel Fielding", ["Richard Ayoade", "Jack Whitehall", "David Mitchell"], "Medium", "The Big Fat Quiz of the Year"],

    // ROOM 101 (7)
    ["Who first presented the television version of Room 101?", "Nick Hancock", ["Paul Merton", "Frank Skinner", "Angus Deayton"], "Medium", "Room 101"],
    ["Who succeeded Nick Hancock as the host of Room 101?", "Paul Merton", ["Stephen Fry", "Rob Brydon", "Clive Anderson"], "Medium", "Room 101"],
    ["Which comedian hosted the three-guest revival of Room 101?", "Frank Skinner", ["Lee Mack", "Jimmy Carr", "Rhod Gilbert"], "Easy", "Room 101"],
    ["Which George Orwell novel supplied the title Room 101?", "Nineteen Eighty-Four", ["Animal Farm", "Coming Up for Air", "Keep the Aspidistra Flying"], "Medium", "Room 101"],
    ["What did celebrity guests try to consign to Room 101?", "Things they particularly disliked", ["Objects they had invented", "Items from their childhood homes", "Prizes they had won"], "Easy", "Room 101"],
    ["How many celebrity guests competed in the Frank Skinner version of Room 101?", "Three", ["Two", "Four", "Five"], "Medium", "Room 101"],
    ["Which BBC channel broadcast the original television series of Room 101?", "BBC Two", ["BBC One", "BBC Three", "BBC Four"], "Medium", "Room 101"],

    // THE BUBBLE (5)
    ["Who presented the BBC comedy news quiz The Bubble?", "David Mitchell", ["Jimmy Carr", "Rob Brydon", "Alexander Armstrong"], "Easy", "The Bubble"],
    ["Which channel broadcast The Bubble?", "BBC Two", ["ITV", "Channel 4", "Channel 5"], "Medium", "The Bubble"],
    ["How many celebrities competed each week on The Bubble?", "Three", ["Two", "Four", "Six"], "Medium", "The Bubble"],
    ["For how long were the celebrity contestants cut off from the outside world on The Bubble?", "Four days", ["One day", "A week", "A fortnight"], "Medium", "The Bubble"],
    ["What did celebrities have to distinguish on The Bubble?", "Real news stories from invented ones", ["Genuine antiques from replicas", "Real voices from impersonations", "True song lyrics from false ones"], "Easy", "The Bubble"],

    // INSERT NAME HERE (5)
    ["Who presented the BBC panel game Insert Name Here?", "Sue Perkins", ["Sandi Toksvig", "Jo Brand", "Victoria Coren Mitchell"], "Easy", "Insert Name Here"],
    ["Which pair were the team captains on Insert Name Here?", "Richard Osman and Josh Widdicombe", ["David Mitchell and Lee Mack", "Sean Lock and Jon Richardson", "Hugh Dennis and Frankie Boyle"], "Medium", "Insert Name Here"],
    ["What linked the famous people discussed in each edition of Insert Name Here?", "Variations of the same first name", ["The same birthday", "The same occupation", "The same home town"], "Easy", "Insert Name Here"],
    ["What did a correct multiple-choice answer earn a team on Insert Name Here?", "A cardboard cutout of the person", ["A cash prize", "A spinning letter", "An extra celebrity teammate"], "Medium", "Insert Name Here"],
    ["What sort of specialist regularly joined the teams on Insert Name Here?", "A historian", ["A chef", "A sports referee", "A magician"], "Medium", "Insert Name Here"],

    // THE GUESS LIST (5)
    ["Who hosted BBC One's The Guess List?", "Rob Brydon", ["Michael McIntyre", "Lee Mack", "Jason Manford"], "Easy", "The Guess List"],
    ["How many celebrity panellists offered guesses on The Guess List?", "Five", ["Three", "Four", "Six"], "Medium", "The Guess List"],
    ["How many members of the public competed in an edition of The Guess List?", "Two", ["Three", "Four", "Five"], "Medium", "The Guess List"],
    ["How did contestants score points on The Guess List?", "By choosing a celebrity's correct guess", ["By answering before the host finished", "By drawing recognisable pictures", "By naming songs from their intros"], "Medium", "The Guess List"],
    ["What type of answer was needed in The Guess List's final prize question?", "A number", ["A person's name", "A song title", "A place name"], "Medium", "The Guess List"],

    // CELEBRITY JUICE (6)
    ["Which comic character hosted Celebrity Juice?", "Keith Lemon", ["Ali G", "Alan Partridge", "Borat"], "Easy", "Celebrity Juice"],
    ["Which channel originally broadcast Celebrity Juice?", "ITV2", ["BBC Two", "Channel 4", "E4"], "Easy", "Celebrity Juice"],
    ["Who were the two original team captains on Celebrity Juice?", "Holly Willoughby and Fearne Cotton", ["Claudia Winkleman and Tess Daly", "Davina McCall and Emma Willis", "Mel Giedroyc and Sue Perkins"], "Easy", "Celebrity Juice"],
    ["Which television chef sometimes stood in as a team captain on Celebrity Juice?", "Gino D'Acampo", ["Jamie Oliver", "Gordon Ramsay", "James Martin"], "Medium", "Celebrity Juice"],
    ["Which former Love Island presenter became a Celebrity Juice team captain in later series?", "Laura Whitmore", ["Caroline Flack", "Maya Jama", "Davina McCall"], "Medium", "Celebrity Juice"],
    ["What kind of stories inspired many of the games on Celebrity Juice?", "Celebrity gossip", ["Historical discoveries", "International finance", "Weather forecasts"], "Easy", "Celebrity Juice"],
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, programme], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(5804 + index).padStart(4, '0'),
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
