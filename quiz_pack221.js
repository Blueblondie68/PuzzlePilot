// quiz_pack221.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British adult quiz, game and comedy panel shows
// 100 questions: tv_5904 to tv_6003

const facts = [
    // WE NEED ANSWERS (7)
    ["Which comedian was the main host of We Need Answers?", "Mark Watson", ["Alex Horne", "Tim Key", "Dara O Briain"], "Medium", "We Need Answers"],
    ["Which comedian asked the contestants their questions on We Need Answers?", "Tim Key", ["Mark Watson", "Jon Richardson", "David O'Doherty"], "Medium", "We Need Answers"],
    ["Who provided the graphics, jingles and comic analysis on We Need Answers?", "Alex Horne", ["Richard Osman", "Joe Wilkinson", "Dave Gorman"], "Medium", "We Need Answers"],
    ["Where did the questions used on We Need Answers originally come from?", "Real enquiries sent to a text-answering service", ["Questions written by the studio audience", "School examination papers", "Questions from previous game shows"], "Medium", "We Need Answers"],
    ["What was the first round of We Need Answers called?", "Burning Issues and Fiddly Questions", ["Questions of the Day", "The Knowledge Round", "The Quickfire Challenge"], "Medium", "We Need Answers"],
    ["Which We Need Answers round involved contestants performing physical tasks?", "Physical Challenge", ["House Prize Showdown", "Burning Issues", "You or Him"], "Easy", "We Need Answers"],
    ["What did the losing contestant have to wear while leaving the stage on We Need Answers?", "The Clogs of Defeat", ["The Hat of Shame", "The Boots of Failure", "The Crown of Misery"], "Medium", "We Need Answers"],

    // WHAT THE DICKENS? (7)
    ["Who presented the arts and culture panel quiz What the Dickens?", "Sandi Toksvig", ["Sue Perkins", "Jo Brand", "Victoria Coren Mitchell"], "Easy", "What the Dickens?"],
    ["Which channel broadcast What the Dickens?", "Sky Arts", ["BBC Two", "Channel 4", "ITV"], "Medium", "What the Dickens?"],
    ["Which pair were the original team captains on What the Dickens?", "Tim Brooke-Taylor and Dave Gorman", ["Sue Perkins and Chris Addison", "Alan Davies and Stephen Fry", "Paul Merton and Ian Hislop"], "Medium", "What the Dickens?"],
    ["Who replaced the original team captains on later series of What the Dickens?", "Chris Addison and Sue Perkins", ["David Mitchell and Lee Mack", "Hugh Dennis and Jo Brand", "Richard Osman and Josh Widdicombe"], "Medium", "What the Dickens?"],
    ["What did teams identify from abbreviated descriptions in What the Dickens' Losing the Plot round?", "Famous works of art and entertainment", ["Celebrity childhood homes", "Unknown historical figures", "Missing television presenters"], "Medium", "What the Dickens?"],
    ["What did teams use to identify films and other works in the Picture This round of What the Dickens?", "Photographic clues", ["Recorded sound effects", "Audience drawings", "Musical instruments"], "Medium", "What the Dickens?"],
    ["What did the Balance the Books round on What the Dickens ask teams to compare?", "Values such as film earnings and book advances", ["The ages of the presenters", "The lengths of television programmes", "The weights of everyday objects"], "Medium", "What the Dickens?"],

    // IT'S ONLY TV... BUT I LIKE IT (7)
    ["Who presented the BBC comedy panel game It's Only TV... But I Like It?", "Jonathan Ross", ["Clive Anderson", "Graham Norton", "Michael Parkinson"], "Easy", "It's Only TV... But I Like It"],
    ["Which comedian was a regular team captain throughout the original run of It's Only TV... But I Like It?", "Julian Clary", ["Frank Skinner", "Sean Lock", "Rhod Gilbert"], "Medium", "It's Only TV... But I Like It"],
    ["Which comedian was an original team captain alongside Julian Clary on It's Only TV... But I Like It?", "Jack Dee", ["Phill Jupitus", "Alan Carr", "David Mitchell"], "Medium", "It's Only TV... But I Like It"],
    ["Who later replaced Jack Dee as a team captain on It's Only TV... But I Like It?", "Phill Jupitus", ["Lee Mack", "Rob Brydon", "Hugh Dennis"], "Medium", "It's Only TV... But I Like It"],
    ["What did panellists attempt to recreate in the Blue Peter round of It's Only TV... But I Like It?", "Something previously made on Blue Peter", ["A famous television studio", "A television theme tune", "A presenter’s childhood photograph"], "Medium", "It's Only TV... But I Like It"],
    ["What did players wear in the Botticelli round of It's Only TV... But I Like It?", "Masks displaying television personalities", ["Costumes from famous sitcoms", "Blindfolds and headphones", "Hats showing television channel logos"], "Medium", "It's Only TV... But I Like It"],
    ["What did teams act out during the Remote Control round of It's Only TV... But I Like It?", "Television programme titles", ["Famous football matches", "News headlines", "Radio advertisements"], "Medium", "It's Only TV... But I Like It"],

    // CASH CAB (7)
    ["Who presented and drove the taxi in the British version of Cash Cab?", "John Moody", ["Ben Shephard", "Richard Hammond", "Jason Manford"], "Medium", "Cash Cab"],
    ["Where did Cash Cab contestants answer quiz questions?", "Inside a taxi", ["Inside a train carriage", "Inside a shopping centre", "Inside a television studio"], "Easy", "Cash Cab"],
    ["Which channel originally broadcast the British version of Cash Cab?", "ITV", ["BBC One", "Channel 4", "Channel 5"], "Medium", "Cash Cab"],
    ["What happened after Cash Cab contestants gave three incorrect answers?", "They had to leave the taxi", ["They started the quiz again", "Their winnings doubled", "They changed destinations"], "Easy", "Cash Cab"],
    ["How much was each of the first five Cash Cab questions worth?", "£10", ["£5", "£20", "£50"], "Medium", "Cash Cab"],
    ["Who could Cash Cab contestants ask for help while answering questions?", "People they contacted or approached on the street", ["Only the taxi company's controller", "Only the presenter’s relatives", "Only previous contestants"], "Medium", "Cash Cab"],
    ["Which specialist television channel eventually broadcast previously unaired British Cash Cab episodes?", "Challenge", ["Gold", "Dave", "Yesterday"], "Medium", "Cash Cab"],

    // DUCK QUACKS DON'T ECHO (6)
    ["Who hosted the comedy panel show Duck Quacks Don't Echo?", "Lee Mack", ["David Mitchell", "Jimmy Carr", "Rob Brydon"], "Easy", "Duck Quacks Don't Echo"],
    ["Which channel originally broadcast Duck Quacks Don't Echo in Britain?", "Sky 1", ["ITV2", "BBC Two", "Channel 4"], "Medium", "Duck Quacks Don't Echo"],
    ["Which former political journalist narrated Duck Quacks Don't Echo?", "John Sergeant", ["Andrew Marr", "Jeremy Paxman", "John Humphrys"], "Medium", "Duck Quacks Don't Echo"],
    ["How many celebrity guests normally appeared on each edition of Duck Quacks Don't Echo?", "Three", ["Two", "Four", "Six"], "Medium", "Duck Quacks Don't Echo"],
    ["What did the celebrity guests bring to Duck Quacks Don't Echo?", "Unusual facts they believed were true", ["Childhood photographs", "Their favourite recipes", "Objects they had invented"], "Easy", "Duck Quacks Don't Echo"],
    ["How did Duck Quacks Don't Echo investigate the celebrities' unusual claims?", "Through experiments and demonstrations", ["By interviewing their families", "By reading newspaper headlines", "By consulting a studio audience vote alone"], "Medium", "Duck Quacks Don't Echo"],

    // THE BUTTON (6)
    ["Who provided the voice of The Button in the BBC game show of that name?", "Alex Horne", ["Greg Davies", "Richard Osman", "Stephen Mulhern"], "Medium", "The Button"],
    ["Which channel broadcast The Button?", "BBC One", ["ITV", "Channel 4", "BBC Three"], "Medium", "The Button"],
    ["How many households competed in The Button?", "Five", ["Three", "Four", "Eight"], "Medium", "The Button"],
    ["Where did the contestants perform their challenges on The Button?", "In and around their own homes", ["In a purpose-built television studio", "Inside an airport", "On a cruise ship"], "Easy", "The Button"],
    ["How many challenges did the households normally attempt during each edition of The Button?", "Five", ["Three", "Four", "Ten"], "Medium", "The Button"],
    ["What was the cash value of the fifth and final challenge on The Button?", "£5,000", ["£1,000", "£2,500", "£10,000"], "Medium", "The Button"],

    // I LOVE MY COUNTRY (6)
    ["Who presented the BBC comedy quiz I Love My Country?", "Gabby Logan", ["Clare Balding", "Sue Barker", "Kate Garraway"], "Easy", "I Love My Country"],
    ["Which two comedians were team captains on I Love My Country?", "Frank Skinner and Micky Flanagan", ["David Mitchell and Lee Mack", "Sean Lock and Jon Richardson", "Hugh Dennis and Dara O Briain"], "Medium", "I Love My Country"],
    ["Which singer provided vocals with the house band on I Love My Country?", "Jamelia", ["Beverley Knight", "Leona Lewis", "Alexandra Burke"], "Medium", "I Love My Country"],
    ["What subjects were covered in the questions on I Love My Country?", "British history, geography and popular culture", ["Only international sport", "Only classical music", "Only foreign languages"], "Easy", "I Love My Country"],
    ["What unusual prize did the winning team receive on I Love My Country?", "A china plate", ["A silver teapot", "A golden globe", "A crystal trophy"], "Medium", "I Love My Country"],
    ["Which comedian recorded an unaired pilot of I Love My Country before Gabby Logan became presenter?", "David Walliams", ["Peter Kay", "Russell Howard", "Jack Whitehall"], "Medium", "I Love My Country"],

    // BUSMAN'S HOLIDAY (6)
    ["Who was the original presenter of the ITV quiz Busman's Holiday?", "Julian Pettifer", ["Michael Aspel", "Henry Kelly", "Derek Batey"], "Medium", "Busman's Holiday"],
    ["Which broadcaster replaced Julian Pettifer as presenter of Busman's Holiday?", "Sarah Kennedy", ["Gloria Hunniford", "Esther Rantzen", "Anne Diamond"], "Medium", "Busman's Holiday"],
    ["Who presented the final series of Busman's Holiday?", "Elton Welsby", ["Nick Owen", "Des Lynam", "John Stapleton"], "Medium", "Busman's Holiday"],
    ["What brought the competing teams together on Busman's Holiday?", "They worked in the same profession", ["They attended the same school", "They were related to the host", "They lived in the same street"], "Medium", "Busman's Holiday"],
    ["What unusual type of holiday could winning Busman's Holiday teams receive?", "A working holiday", ["A mystery cruise", "A luxury camping trip", "A holiday chosen by the audience"], "Easy", "Busman's Holiday"],
    ["What subject featured in the opening multiple-choice round of Busman's Holiday?", "World geography", ["Pop music", "Television sitcoms", "Horse racing"], "Medium", "Busman's Holiday"],

    // YOU HAVE BEEN WATCHING (6)
    ["Which television critic and comedian hosted You Have Been Watching?", "Charlie Brooker", ["David Mitchell", "Jimmy Carr", "Frank Skinner"], "Easy", "You Have Been Watching"],
    ["Which channel broadcast You Have Been Watching?", "Channel 4", ["BBC Two", "ITV", "Channel 5"], "Medium", "You Have Been Watching"],
    ["How many celebrity guests normally joined Charlie Brooker on You Have Been Watching?", "Three", ["Two", "Four", "Six"], "Medium", "You Have Been Watching"],
    ["What was the main subject of the panel game You Have Been Watching?", "Television programmes", ["Pop music", "Sporting achievements", "Historical inventions"], "Easy", "You Have Been Watching"],
    ["What followed many of the television discussions on You Have Been Watching?", "Quiz questions for the celebrity panellists", ["A cooking demonstration", "A public phone-in vote", "A musical performance"], "Medium", "You Have Been Watching"],
    ["Which type of round concluded You Have Been Watching?", "A quick-fire buzzer round", ["A crossword puzzle", "A physical obstacle course", "A mystery box auction"], "Medium", "You Have Been Watching"],

    // COMEDY WORLD CUP (5)
    ["Which former Doctor Who actor presented Comedy World Cup?", "David Tennant", ["Matt Smith", "Christopher Eccleston", "Peter Capaldi"], "Easy", "Comedy World Cup"],
    ["Which channel broadcast Comedy World Cup?", "Channel 4", ["BBC One", "ITV", "Channel 5"], "Medium", "Comedy World Cup"],
    ["What subject did contestants answer questions about on Comedy World Cup?", "Comedy programmes and performers", ["International football", "World geography", "Classical literature"], "Easy", "Comedy World Cup"],
    ["How did winning teams progress through Comedy World Cup?", "They returned for later rounds of the competition", ["They joined the studio audience", "They automatically won a holiday", "They selected new team captains"], "Medium", "Comedy World Cup"],
    ["Which comedian captained the winning team on Comedy World Cup?", "Johnny Vegas", ["Jack Dee", "Alan Carr", "Frankie Boyle"], "Medium", "Comedy World Cup"],

    // ARGUMENTAL (7)
    ["Which former political journalist originally hosted Argumental?", "John Sergeant", ["Andrew Marr", "Jeremy Paxman", "John Humphrys"], "Medium", "Argumental"],
    ["Which comedian later took over as host of Argumental?", "Sean Lock", ["Lee Mack", "Jimmy Carr", "Dara O Briain"], "Medium", "Argumental"],
    ["Which channel originally broadcast Argumental?", "Dave", ["BBC One", "ITV", "Channel 5"], "Medium", "Argumental"],
    ["Which pair were the original team captains on Argumental?", "Marcus Brigstocke and Rufus Hound", ["Sean Lock and Jon Richardson", "David Mitchell and Lee Mack", "Hugh Dennis and Frankie Boyle"], "Medium", "Argumental"],
    ["What did comedians compete to do on Argumental?", "Win humorous debates", ["Solve mathematical puzzles", "Identify mystery songs", "Guess television theme tunes"], "Easy", "Argumental"],
    ["Who normally voted for the winning argument in each round of Argumental?", "The studio audience", ["The host alone", "A panel of judges", "The production crew"], "Medium", "Argumental"],
    ["What did contestants have to do in Argumental's Flip-flop round?", "Change their position on an issue when the buzzer sounded", ["Swap seats with their opponents", "Argue while standing on one leg", "Answer questions backwards"], "Medium", "Argumental"],

    // THE ALPHABET GAME (5)
    ["Who presented the original BBC television quiz The Alphabet Game?", "Andrew O'Connor", ["Paul Coia", "Bob Holness", "Tony Slattery"], "Medium", "The Alphabet Game"],
    ["Which BBC channel originally broadcast The Alphabet Game?", "BBC One", ["BBC Two", "BBC Three", "BBC Four"], "Medium", "The Alphabet Game"],
    ["What formed the basis of the challenges on The Alphabet Game?", "Words and letters of the alphabet", ["General knowledge about animals", "Music from the 1980s", "Numerical calculations"], "Easy", "The Alphabet Game"],
    ["Which successful Spanish quiz was based on the format of The Alphabet Game?", "Pasapalabra", ["Saber y Ganar", "El Cazador", "Ahora Caigo"], "Medium", "The Alphabet Game"],
    ["Which later British quiz drew on the same underlying format as The Alphabet Game?", "Alphabetical", ["The Edge", "The Chase", "Tenable"], "Medium", "The Alphabet Game"],

    // HIVE MINDS (6)
    ["Who presented the BBC quiz Hive Minds?", "Fiona Bruce", ["Victoria Coren Mitchell", "Kirsty Young", "Jenny Ryan"], "Medium", "Hive Minds"],
    ["Which channel originally broadcast Hive Minds?", "BBC Four", ["BBC One", "ITV", "Channel 4"], "Medium", "Hive Minds"],
    ["How many teams competed against each other in Hive Minds?", "Two", ["Three", "Four", "Five"], "Medium", "Hive Minds"],
    ["How many players made up each team on Hive Minds?", "Three", ["Two", "Four", "Five"], "Medium", "Hive Minds"],
    ["What shape was used to display letters in the Hive Minds puzzles?", "Hexagons", ["Squares", "Triangles", "Circles"], "Easy", "Hive Minds"],
    ["What made Hive Minds' Superhive challenge particularly difficult?", "Teams had to find several answers using every letter exactly once", ["Players had to answer blindfolded", "The questions were asked in reverse", "The team had to memorise twenty pictures"], "Medium", "Hive Minds"],

    // WHOSE LINE IS IT ANYWAY? (7)
    ["Who hosted the original British television version of Whose Line Is It Anyway?", "Clive Anderson", ["Drew Carey", "Paul Merton", "Stephen Fry"], "Easy", "Whose Line Is It Anyway?"],
    ["Which channel broadcast the British television version of Whose Line Is It Anyway?", "Channel 4", ["BBC One", "ITV", "Channel 5"], "Medium", "Whose Line Is It Anyway?"],
    ["What type of comedy formed the basis of Whose Line Is It Anyway?", "Improvisation", ["Stand-up routines", "Scripted sketches", "Celebrity impersonations only"], "Easy", "Whose Line Is It Anyway?"],
    ["How many performers normally took part in each edition of Whose Line Is It Anyway?", "Four", ["Two", "Three", "Six"], "Medium", "Whose Line Is It Anyway?"],
    ["What did the party host have to identify in the Party Quirks game on Whose Line Is It Anyway?", "The unusual characteristics of their guests", ["The guests' real occupations", "The guests' birthdays", "The guests' favourite films"], "Medium", "Whose Line Is It Anyway?"],
    ["Which musician regularly accompanied the British television performers on Whose Line Is It Anyway?", "Richard Vranch", ["Jools Holland", "Rick Wakeman", "Howard Goodall"], "Medium", "Whose Line Is It Anyway?"],
    ["What was the winner of Whose Line Is It Anyway often required to do during the closing credits?", "Read the credits in a chosen style", ["Perform a stand-up routine", "Interview the audience", "Sing the programme theme"], "Medium", "Whose Line Is It Anyway?"],

    // THANK GOD YOU'RE HERE (6)
    ["Which comedian hosted the British television version of Thank God You're Here?", "Paul Merton", ["Clive Anderson", "Rob Brydon", "Lee Mack"], "Easy", "Thank God You're Here"],
    ["Which channel broadcast the British version of Thank God You're Here?", "ITV", ["BBC Two", "Channel 4", "Sky One"], "Medium", "Thank God You're Here"],
    ["What did contestants have to do on Thank God You're Here?", "Improvise their way through unfamiliar situations", ["Answer questions about world history", "Guess celebrity identities", "Complete a traditional crossword"], "Easy", "Thank God You're Here"],
    ["From which country did the format of Thank God You're Here originate?", "Australia", ["Canada", "United States", "New Zealand"], "Medium", "Thank God You're Here"],
    ["Which Australian comedian was a regular guest on the British version of Thank God You're Here?", "Hamish Blake", ["Adam Hills", "Tim Minchin", "Jim Jefferies"], "Medium", "Thank God You're Here"],
    ["How many celebrity guests normally took part in each edition of Thank God You're Here?", "Four", ["Two", "Three", "Six"], "Medium", "Thank God You're Here"],

    // NOT A LOT OF PEOPLE KNOW THAT (6)
    ["Who hosted the BBC comedy panel game Not a Lot of People Know That?", "Bob Mills", ["Bob Monkhouse", "Bob Mortimer", "Bob Holness"], "Medium", "Not a Lot of People Know That"],
    ["Which BBC channel broadcast Not a Lot of People Know That?", "BBC One", ["BBC Two", "BBC Three", "BBC Four"], "Medium", "Not a Lot of People Know That"],
    ["What type of subject matter was the focus of Not a Lot of People Know That?", "Bizarre and unusual trivia", ["Only current affairs", "Only professional sport", "Only popular music"], "Medium", "Not a Lot of People Know That"],
    ["Which unusual round featured on Not a Lot of People Know That?", "Get Your Socks Off", ["Take Your Hat Off", "Lose Your Shoes", "Show Your Hands"], "Medium", "Not a Lot of People Know That"],
    ["Which body part did contestants use to identify mystery contents during Get Your Socks Off?", "Their feet", ["Their elbows", "Their knees", "Their noses"], "Medium", "Not a Lot of People Know That"],
    ["How many series of Not a Lot of People Know That were broadcast?", "Three", ["One", "Two", "Five"], "Medium", "Not a Lot of People Know That"],
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, programme], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(5904 + index).padStart(4, '0'),
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
