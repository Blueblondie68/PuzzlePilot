// quiz_pack213.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British quiz and game shows - new and forgotten favourites
// 100 questions: tv_5104 to tv_5203
// Leave quiz_bank.js unchanged until the end of the evening.

const facts = [
    // The Floor
    ["Who hosts the British version of The Floor on ITV?", "Rob Brydon", ["Alexander Armstrong", "Lee Mack", "Michael McIntyre"], "Easy", "The Floor"],
    ["How many contestants begin the British game show The Floor?", "81", ["64", "100", "121"], "Easy", "The Floor"],
    ["What does each square on The Floor represent at the start of the competition?", "A different knowledge category", ["A cash prize", "A television channel", "A secret lifeline"], "Easy", "The Floor"],
    ["Who can a contestant challenge to a duel on The Floor?", "A contestant on an adjoining square", ["Any player chosen by the host", "Only the reigning champion", "The player with the lowest score"], "Easy", "The Floor"],
    ["Which contestant's subject is used for a duel on The Floor?", "The challenged contestant's", ["The challenger's", "The presenter's", "The previous winner's"], "Medium", "The Floor"],
    ["How much time does each contestant have on their clock at the start of a standard Floor duel?", "45 seconds", ["30 seconds", "60 seconds", "90 seconds"], "Medium", "The Floor"],
    ["What happens to a player who loses a duel on The Floor?", "They leave the competition", ["They return to their original square", "They lose half their territory", "They switch categories"], "Easy", "The Floor"],
    ["What cash prize goes to the player holding the most territory at the end of an ordinary episode of The Floor?", "£5,000", ["£500", "£10,000", "£25,000"], "Medium", "The Floor"],
    ["What is the overall champion's cash prize on the British version of The Floor?", "£50,000", ["£10,000", "£100,000", "£250,000"], "Easy", "The Floor"],

    // Ant & Dec's Limitless Win
    ["Which presenting duo host Limitless Win?", "Ant and Dec", ["Dick and Dom", "Marvin and Rochelle Humes", "Richard and Judy"], "Easy", "Limitless Win"],
    ["What kind of answer does every main-game question require on Limitless Win?", "A number", ["A person's name", "A song title", "A colour"], "Easy", "Limitless Win"],
    ["What is unusual about Limitless Win's money ladder?", "It has no upper prize limit", ["It starts at £1 million", "It moves down after each answer", "It has only five rungs"], "Easy", "Limitless Win"],
    ["What happens if a Limitless Win contestant gives a number higher than the correct answer?", "Their game ends with no winnings", ["They lose just one life", "They move down one rung", "They get another guess"], "Easy", "Limitless Win"],
    ["On Limitless Win, what happens when an answer is lower than the correct number?", "Lives are deducted for the difference", ["The prize money doubles", "The question is passed to the audience", "The ladder resets to zero"], "Medium", "Limitless Win"],
    ["What is required to bank a cash amount on Limitless Win?", "An exact numerical answer", ["Three consecutive guesses", "A vote from the audience", "Finishing a timed physical task"], "Easy", "Limitless Win"],
    ["Which Limitless Win lifeline tells players whether an answer is odd or even?", "Odd or Even", ["Take Two", "More Than", "Range"], "Easy", "Limitless Win"],
    ["Which Limitless Win lifeline gives contestants an interval containing the answer?", "Range", ["Odd or Even", "Phone a Friend", "More Than"], "Easy", "Limitless Win"],
    ["How many lives does each correct opening-round answer normally earn on Limitless Win?", "Five", ["One", "Three", "Ten"], "Medium", "Limitless Win"],

    // Red or Black?
    ["Who presented the ITV game show Red or Black?", "Ant and Dec", ["Chris Tarrant and Carol Vorderman", "Phillip Schofield and Holly Willoughby", "Vernon Kay and Tess Daly"], "Easy", "Red or Black?"],
    ["What were the two choices at the heart of Red or Black?", "Red and black", ["Gold and silver", "High and low", "Heads and tails"], "Easy", "Red or Black?"],
    ["What was the original top cash prize offered on Red or Black?", "£1 million", ["£100,000", "£250,000", "£500,000"], "Easy", "Red or Black?"],
    ["What device decided the final red-or-black gamble in the first series?", "A roulette wheel", ["A coin toss", "A giant dartboard", "A spinning arrow"], "Medium", "Red or Black?"],
    ["What was the ball-and-bowl final challenge in the later version of Red or Black? called?", "The Vortex", ["The Gold Run", "The Dome", "The Drop"], "Medium", "Red or Black?"],
    ["Which television producer devised Red or Black?", "Simon Cowell", ["John de Mol", "Peter Bazalgette", "Richard Osman"], "Easy", "Red or Black?"],
    ["Which famous London arena hosted thousands of hopefuls during Red or Black?'s original selection stages?", "Wembley Arena", ["The O2 Arena", "Royal Albert Hall", "Alexandra Palace"], "Medium", "Red or Black?"],

    // Push the Button
    ["Which famous presenting partnership hosted Push the Button?", "Ant and Dec", ["Rob Brydon and Lee Mack", "Richard Madeley and Judy Finnigan", "Marvin and Rochelle Humes"], "Easy", "Push the Button"],
    ["Who competed against each other on Push the Button?", "Two families", ["Two university teams", "Two pairs of comedians", "Two school classes"], "Easy", "Push the Button"],
    ["How many members were on each Push the Button family team?", "Five", ["Three", "Four", "Six"], "Medium", "Push the Button"],
    ["How much potential prize money did each family begin with on Push the Button?", "£100,000", ["£10,000", "£50,000", "£250,000"], "Medium", "Push the Button"],
    ["What generally happened to a family's prize money while they took time completing challenges on Push the Button?", "It decreased", ["It doubled", "It remained frozen", "It transferred to a charity"], "Easy", "Push the Button"],
    ["What were players often required to press to start and stop timed challenges on Push the Button?", "A large button", ["A foot pedal", "A computer keyboard", "A light switch"], "Easy", "Push the Button"],
    ["What did the winning family have to copy in Push the Button's final memory game?", "A sequence of musical notes", ["A row of dance steps", "A list of shopping prices", "A sequence of playing cards"], "Medium", "Push the Button"],
    ["Which comic actor was an announcer on the first series of Push the Button?", "Ronnie Corbett", ["Ronnie Barker", "David Jason", "John Cleese"], "Medium", "Push the Button"],

    // PokerFace
    ["Which duo hosted the bluffing quiz PokerFace?", "Ant and Dec", ["Ian Wright and Alan Shearer", "Rob Brydon and Lee Mack", "Chris Tarrant and Michael Barrymore"], "Easy", "PokerFace"],
    ["How many contestants competed in each original heat of PokerFace?", "Six", ["Four", "Five", "Eight"], "Medium", "PokerFace"],
    ["What could PokerFace contestants conceal from their rivals?", "How well they were scoring", ["Which channel aired the show", "The identity of the presenter", "The value of the final prize"], "Easy", "PokerFace"],
    ["What action could a PokerFace contestant take to leave a round voluntarily?", "Press a fold button", ["Raise a white flag", "Spin a penalty wheel", "Ring a handbell"], "Easy", "PokerFace"],
    ["What did a player who folded on PokerFace get to keep?", "The cash they had earned", ["The entire jackpot", "Half another player's winnings", "Only a consolation trophy"], "Medium", "PokerFace"],
    ["If nobody folded during a PokerFace elimination, who was knocked out?", "The player with the lowest total", ["The player with the highest total", "The player picked by the audience", "The player sitting nearest the host"], "Easy", "PokerFace"],
    ["What top prize awaited the overall winner of the original PokerFace competition?", "£1 million", ["£10,000", "£100,000", "£250,000"], "Easy", "PokerFace"],

    // My Kind of Music
    ["Which entertainer hosted the ITV music quiz My Kind of Music?", "Michael Barrymore", ["Les Dennis", "Bob Monkhouse", "Roy Walker"], "Easy", "My Kind of Music"],
    ["How many couples began a typical episode of My Kind of Music?", "Three", ["Two", "Four", "Five"], "Medium", "My Kind of Music"],
    ["What kind of knowledge was chiefly tested on My Kind of Music?", "Popular music", ["World geography", "Football history", "Film special effects"], "Easy", "My Kind of Music"],
    ["What did My Kind of Music contestants connect to a song in the Pick the Picture round?", "A celebrity photograph", ["A football shirt", "A map location", "A playing-card suit"], "Medium", "My Kind of Music"],
    ["What did contestants identify from music-video clips in My Kind of Music's Mega Mix?", "Songs and performers", ["Actors and directors", "Countries and capitals", "Sports teams and stadiums"], "Easy", "My Kind of Music"],
    ["What was the name of the My Kind of Music jackpot round built around an imaginary family of singers?", "Musical Families", ["The Gold Run", "Family Fortunes", "Pop the Question"], "Medium", "My Kind of Music"],
    ["In My Kind of Music, what did the My Kind of People clips show?", "Members of the public singing", ["Sports stars competing", "Chefs preparing meals", "Actors reading scripts"], "Easy", "My Kind of Music"],
    ["What were contestants shown as clues in the Pop Props round of My Kind of Music?", "Objects suggesting a singer or group", ["Unlabelled record contracts", "Snippets of sheet music", "Photographs of concert venues"], "Medium", "My Kind of Music"],

    // Friends Like These
    ["Which duo originally presented Friends Like These?", "Ant and Dec", ["Dick and Dom", "Hale and Pace", "Richard and Judy"], "Easy", "Friends Like These"],
    ["Which former Arsenal footballer later presented Friends Like These?", "Ian Wright", ["Gary Lineker", "Alan Shearer", "Paul Merson"], "Easy", "Friends Like These"],
    ["How many friends made up a team on Friends Like These?", "Five", ["Three", "Four", "Six"], "Easy", "Friends Like These"],
    ["What sort of prize did the winning group compete to earn on Friends Like These?", "A holiday", ["A new house", "A record deal", "A sports car"], "Easy", "Friends Like These"],
    ["What was the deciding challenge between the two teams called on Friends Like These?", "The Decider", ["The Final Chase", "The Gold Run", "The Vortex"], "Medium", "Friends Like These"],
    ["How did friends help one another claim their holiday places at the end of Friends Like These?", "By matching answers to personal questions", ["By throwing darts", "By buying vowels", "By singing a duet"], "Medium", "Friends Like These"],

    // 1 vs 100
    ["Who originally hosted the British quiz 1 vs 100?", "Dermot O'Leary", ["Ben Shephard", "Dale Winton", "Phillip Schofield"], "Easy", "1 vs 100"],
    ["Which presenter later hosted the British version of 1 vs 100?", "Ben Shephard", ["Rob Brydon", "Stephen Mulhern", "Nick Hewer"], "Easy", "1 vs 100"],
    ["How many opponents did the main contestant face at the start of 1 vs 100?", "100", ["50", "75", "150"], "Easy", "1 vs 100"],
    ["What was the name used for the single player opposing the crowd on 1 vs 100?", "The One", ["The Banker", "The Chaser", "The Captain"], "Easy", "1 vs 100"],
    ["How many possible answers were offered to each multiple-choice question on Britain's 1 vs 100?", "Three", ["Two", "Four", "Five"], "Medium", "1 vs 100"],
    ["What happened to members of the 100 who answered a question incorrectly?", "They were eliminated", ["They joined the main contestant", "They earned an extra life", "They replaced the host"], "Easy", "1 vs 100"],
    ["How much was added to the main player's bank for each opponent eliminated by a question?", "£1,000", ["£100", "£500", "£5,000"], "Medium", "1 vs 100"],

    // Golden Balls
    ["Which comedian presented the ITV show Golden Balls?", "Jasper Carrott", ["Jim Bowen", "Jim Davidson", "Michael Barrymore"], "Easy", "Golden Balls"],
    ["Who served as the on-screen assistant on Golden Balls?", "Amanda Grant", ["Carol Smillie", "Jenny Powell", "Anthea Redfern"], "Medium", "Golden Balls"],
    ["What was hidden inside many of the golden balls used in the show?", "Cash amounts", ["Playing cards", "Song lyrics", "Questions about sport"], "Easy", "Golden Balls"],
    ["What were the special balls that could slash the jackpot called?", "Killer balls", ["Joker balls", "Banker balls", "Bonus balls"], "Easy", "Golden Balls"],
    ["What were the two final choices made by Golden Balls contestants?", "Split or Steal", ["Deal or No Deal", "Higher or Lower", "Red or Black"], "Easy", "Golden Balls"],
    ["What happened if both Golden Balls finalists chose Split?", "They shared the jackpot equally", ["Neither received anything", "The jackpot doubled", "They played another quiz round"], "Easy", "Golden Balls"],
    ["What happened if both Golden Balls finalists chose Steal?", "Both went home with nothing", ["They each took half", "They each received the full sum", "They spun a wheel to decide"], "Easy", "Golden Balls"],
    ["What happened to the jackpot when a Killer ball was selected to win during Bin or Win?", "It was divided by ten", ["It doubled", "It rose by £1,000", "It was sent to charity"], "Medium", "Golden Balls"],
    ["What was the name of the Golden Balls round in which finalists discarded balls and built a cash prize?", "Bin or Win", ["Gold Run", "Answer Smash", "The Big Push"], "Easy", "Golden Balls"],

    // Divided
    ["Who presented ITV's game show Divided?", "Andrew Castle", ["Nick Hancock", "Henry Kelly", "Richard Whiteley"], "Medium", "Divided"],
    ["How many strangers formed a team on the quiz Divided?", "Three", ["Two", "Four", "Five"], "Easy", "Divided"],
    ["What did Divided's teammates have to agree on before locking in an answer?", "One unanimous answer", ["A team name", "Who would take the most money", "A category for the next episode"], "Easy", "Divided"],
    ["What happened to the amount of money available for a question as time passed on Divided?", "It decreased", ["It doubled", "It stayed fixed", "It went to the fastest player"], "Easy", "Divided"],
    ["How long was the team given to agree on an answer to each question in Divided?", "100 seconds", ["30 seconds", "60 seconds", "Two minutes"], "Medium", "Divided"],
    ["How was Divided's final prize fund offered to the three teammates?", "As three unequal shares", ["As three identical sums", "As one winner-takes-all amount", "As a choice of holidays"], "Easy", "Divided"],
    ["What happened to the prize pot when a team answered a question incorrectly on Divided?", "It was halved", ["It doubled", "It rose by £5,000", "It remained unchanged"], "Medium", "Divided"],

    // 5 Gold Rings
    ["Who hosted ITV's 5 Gold Rings?", "Phillip Schofield", ["Ben Shephard", "Rob Brydon", "Vernon Kay"], "Easy", "5 Gold Rings"],
    ["What kind of surface displayed the enormous pictures in 5 Gold Rings?", "An LED screen in the studio floor", ["A wall of rotating cubes", "A giant video curtain", "A revolving table"], "Easy", "5 Gold Rings"],
    ["What did contestants place on a picture to indicate an answer in 5 Gold Rings?", "A gold ring", ["A coloured flag", "A magnetic arrow", "A numbered tile"], "Easy", "5 Gold Rings"],
    ["What happened to the size of the answer ring as teams advanced in 5 Gold Rings?", "It became smaller", ["It became larger", "It stayed the same", "It disappeared"], "Easy", "5 Gold Rings"],
    ["How long did players have to place their ring for a standard 5 Gold Rings question?", "30 seconds", ["15 seconds", "45 seconds", "60 seconds"], "Medium", "5 Gold Rings"],
    ["How many contestants were on each team in 5 Gold Rings?", "Two", ["One", "Three", "Four"], "Easy", "5 Gold Rings"],
    ["What choice was given to the leading team before the final question in 5 Gold Rings?", "Play the question or pass it to their rivals", ["Choose a different presenter", "Swap the prize for a holiday", "Add a third teammate"], "Medium", "5 Gold Rings"],

    // The Colour of Money
    ["Who hosted ITV's The Colour of Money?", "Chris Tarrant", ["Noel Edmonds", "Bob Monkhouse", "Des O'Connor"], "Easy", "The Colour of Money"],
    ["Which sports broadcaster assisted Chris Tarrant on The Colour of Money?", "Millie Clode", ["Gabby Logan", "Kirsty Gallacher", "Georgie Thompson"], "Medium", "The Colour of Money"],
    ["What objects were each assigned a colour on The Colour of Money?", "Cash machines", ["Suitcases", "Playing cards", "Telephone booths"], "Easy", "The Colour of Money"],
    ["How many differently coloured machines were available on The Colour of Money?", "20", ["10", "15", "25"], "Medium", "The Colour of Money"],
    ["What instruction did contestants shout to halt a cash machine's count on The Colour of Money?", "Stop!", ["Deal!", "Bank!", "Freeze!"], "Easy", "The Colour of Money"],
    ["What happened if a machine's count exceeded its hidden amount on The Colour of Money?", "The player won nothing from that machine", ["The machine doubled its payout", "The machine gave a bonus clue", "The player changed the target total"], "Medium", "The Colour of Money"],
    ["From how many machines at most could a player collect money to hit their target on The Colour of Money?", "Ten", ["Five", "Fifteen", "Twenty"], "Medium", "The Colour of Money"],

    // The Bank Job
    ["Who presented the Channel 4 quiz The Bank Job?", "George Lamb", ["Chris Evans", "Ben Shephard", "Nick Hancock"], "Medium", "The Bank Job"],
    ["What unusual setting was used for the game on The Bank Job?", "A bank vault", ["A courtroom", "A submarine", "An airport lounge"], "Easy", "The Bank Job"],
    ["What could players open after giving a correct answer on The Bank Job?", "Security deposit drawers containing money", ["A locked wardrobe of costumes", "A mystery music box", "A cabinet of sporting trophies"], "Easy", "The Bank Job"],
    ["What forced contestants to leave the vault promptly on The Bank Job?", "A countdown clock", ["An approaching train", "A rotating floor", "A moving spotlight"], "Easy", "The Bank Job"],
    ["If everyone escaped the vault in time on The Bank Job, who was eliminated?", "The player who took out the least money", ["The player who took out the most money", "The first player to leave", "The player nearest the door"], "Medium", "The Bank Job"],

    // The Exit List
    ["Who hosted ITV's memory-based quiz The Exit List?", "Matt Allwright", ["John Barrowman", "Chris Tarrant", "George Lamb"], "Medium", "The Exit List"],
    ["What sort of structure did The Exit List contestants navigate?", "A maze of rooms", ["A revolving wheel", "A tower of ladders", "A set of supermarket aisles"], "Easy", "The Exit List"],
    ["How many rooms made up the maze on The Exit List?", "26", ["12", "20", "36"], "Medium", "The Exit List"],
    ["What information did contestants have to remember to win money on The Exit List?", "Answers collected while travelling through the maze", ["Prices on a conveyor belt", "Names of former quiz champions", "Colours of falling balls"], "Easy", "The Exit List"],
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, programme] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(5104 + index).padStart(4, '0'),
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
