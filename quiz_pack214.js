// quiz_pack214.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British quiz and game shows - more classic and daytime favourites
// 100 questions: tv_5204 to tv_5303
// Leave quiz_bank.js unchanged until the end of the evening.

const facts = [
    // Lingo (8)
    ["Who presents ITV's modern word quiz Lingo?", "Adil Ray", ["Rick Edwards", "Ben Shephard", "Rylan Clark"], "Easy", "Lingo"],
    ["Which entertainer presented the original British version of Lingo?", "Martin Daniels", ["Paul Daniels", "Leslie Crowther", "Bob Holness"], "Medium", "Lingo"],
    ["Who hosted ITV's Celebrity Lingo?", "RuPaul", ["Graham Norton", "Alan Carr", "Stephen Mulhern"], "Easy", "Lingo"],
    ["What are contestants trying to discover in Lingo's main rounds?", "Hidden words", ["Missing numbers", "Mystery celebrities", "Film locations"], "Easy", "Lingo"],
    ["How many pairs compete at the start of a regular modern Lingo episode?", "Three", ["Two", "Four", "Five"], "Easy", "Lingo"],
    ["What other type of game featured alongside word-guessing in the original British Lingo?", "Bingo", ["Darts", "Dominoes", "Charades"], "Medium", "Lingo"],
    ["What is the name of Lingo's longer word puzzle, revealed letter by letter from a clue?", "Puzzleword", ["Conundrum", "Gold Run", "Answer Smash"], "Medium", "Lingo"],
    ["What can the winning pair do to their accumulated money in Lingo's End Game?", "Double it", ["Triple it automatically", "Exchange it for a holiday", "Give it to their opponents"], "Easy", "Lingo"],

    // Fifteen-to-One: new facts, not the Pack 209 presenter question (6)
    ["How many contestants began a regular game of Fifteen-to-One?", "Fifteen", ["Ten", "Twelve", "Twenty"], "Easy", "Fifteen-to-One"],
    ["How many lives did each contestant start with on the original Fifteen-to-One?", "Three", ["One", "Two", "Five"], "Easy", "Fifteen-to-One"],
    ["How many questions did every contestant face in the opening round of Fifteen-to-One?", "Two", ["One", "Three", "Four"], "Medium", "Fifteen-to-One"],
    ["What could a player who answered correctly do in Fifteen-to-One's nomination round?", "Choose who answered next", ["Swap places with the host", "Give an opponent a lifeline", "Skip straight to the final"], "Easy", "Fifteen-to-One"],
    ["How many contestants survived to the final round of Fifteen-to-One?", "Three", ["Two", "Four", "Five"], "Easy", "Fifteen-to-One"],
    ["Who hosted the revived daytime Fifteen-to-One on Channel 4?", "Sandi Toksvig", ["Sue Perkins", "Jo Brand", "Victoria Coren Mitchell"], "Easy", "Fifteen-to-One"],

    // Perfection (7)
    ["Who hosted the BBC quiz Perfection?", "Nick Knowles", ["John Humphrys", "Gordon Burns", "John Suchet"], "Easy", "Perfection"],
    ["What kind of answers were given to the statements in Perfection?", "True or false", ["Higher or lower", "Yes or no only", "Red or black"], "Easy", "Perfection"],
    ["What nickname was given to the other players waiting to challenge the main player on Perfection?", "The Usual Suspects", ["The Chasers", "The Eggheads", "The Challengers"], "Medium", "Perfection"],
    ["Where did Perfection's other three contestants wait while the main player faced questions?", "In a soundproof booth", ["Behind a revolving wall", "In the studio audience", "Inside a glass cube"], "Easy", "Perfection"],
    ["How many true-or-false statements were asked in an ordinary Perfection round?", "Four", ["Three", "Five", "Six"], "Medium", "Perfection"],
    ["What could Perfection's finalist request from another contestant in return for sharing the jackpot?", "Help with the final questions", ["An extra life", "A new category", "A second attempt next week"], "Easy", "Perfection"],
    ["What happened to Perfection's jackpot after a game in which nobody won it?", "It increased", ["It was halved", "It was donated immediately", "It returned to zero"], "Easy", "Perfection"],

    // Cash Trapped (7)
    ["Which presenter hosted the ITV quiz Cash Trapped?", "Bradley Walsh", ["Vernon Kay", "Chris Tarrant", "Dale Winton"], "Easy", "Cash Trapped"],
    ["How many contestants appeared in a normal Cash Trapped game?", "Six", ["Three", "Four", "Eight"], "Easy", "Cash Trapped"],
    ["What happened to Cash Trapped's contestants if nobody won the final?", "They returned to play again", ["They all received the jackpot", "They were replaced by celebrities", "They changed to a different game show"], "Easy", "Cash Trapped"],
    ["What did being 'cash trapped' mean during Cash Trapped's opening rounds?", "Being excluded from the remaining categories", ["Having to donate one's winnings", "Receiving a secret prize", "Getting a second answer attempt"], "Medium", "Cash Trapped"],
    ["What was the difference between being frozen out and cash trapped on Cash Trapped?", "Frozen-out players could return in the round", ["Cash-trapped players could choose the host", "Frozen-out players lost the entire jackpot", "Cash-trapped players gained an extra turn"], "Medium", "Cash Trapped"],
    ["What was the main subject of the questions on Cash Trapped?", "General knowledge", ["Pop music only", "Sport only", "Television adverts only"], "Easy", "Cash Trapped"],
    ["Who did Cash Trapped's leading player face in the final round?", "The other five contestants", ["A professional Chaser", "An audience-selected celebrity", "The presenter himself"], "Easy", "Cash Trapped"],

    // Winning Lines (6)
    ["Who first presented the National Lottery quiz Winning Lines?", "Simon Mayo", ["Phillip Schofield", "Dale Winton", "Nick Knowles"], "Medium", "Winning Lines"],
    ["Which presenter succeeded Simon Mayo on Winning Lines?", "Phillip Schofield", ["Ben Shephard", "Vernon Kay", "John Leslie"], "Easy", "Winning Lines"],
    ["How many contestants began the main game of Winning Lines?", "49", ["20", "36", "100"], "Medium", "Winning Lines"],
    ["Which national prize draw was associated with Winning Lines?", "The National Lottery", ["Premium Bonds", "The Football Pools", "The Postcode Lottery"], "Easy", "Winning Lines"],
    ["What was the large answer-filled board in Winning Lines' final called?", "The Wonderwall", ["The Connecting Wall", "The Golden Grid", "The Cash Ladder"], "Medium", "Winning Lines"],
    ["What type of top prize could the Winning Lines finalist earn by conquering the Wonderwall?", "A round-the-world holiday", ["A new house", "A sports car", "A recording contract"], "Easy", "Winning Lines"],

    // Who Dares Wins (8)
    ["Who hosted the BBC general-knowledge game show Who Dares Wins?", "Nick Knowles", ["Dale Winton", "Gordon Burns", "Henry Kelly"], "Easy", "Who Dares Wins"],
    ["What did teams take turns bidding on in Who Dares Wins?", "How many items they could name from a list", ["The prices of household goods", "The number of notes in a song", "The number of darts they could score"], "Easy", "Who Dares Wins"],
    ["How many people made up each team in Who Dares Wins?", "Two", ["One", "Three", "Four"], "Easy", "Who Dares Wins"],
    ["What was unusual about the teammates on Who Dares Wins?", "They were paired with strangers", ["They were always married", "They had to be siblings", "They were professional quizzers"], "Easy", "Who Dares Wins"],
    ["Where did the opposing teams sit during the bidding stage of Who Dares Wins?", "In soundproof pods", ["On moving podiums", "Inside a glass dome", "On a rotating staircase"], "Medium", "Who Dares Wins"],
    ["What could a team do when it thought its rivals had bid too high on Who Dares Wins?", "Dare them to complete the list", ["Double their opponents' prize", "Swap their list for a crossword", "Force the host to answer"], "Easy", "Who Dares Wins"],
    ["How many lists did a team need to win to reach the Who Dares Wins bonus round?", "Two", ["One", "Three", "Five"], "Medium", "Who Dares Wins"],
    ["What was the bonus round of Who Dares Wins called?", "The Money List", ["The Gold Run", "Answer Smash", "The Vortex"], "Medium", "Who Dares Wins"],

    // 1000 Heartbeats (7)
    ["Who presented the ITV quiz 1000 Heartbeats?", "Vernon Kay", ["Ben Shephard", "Stephen Mulhern", "Roman Kemp"], "Easy", "1000 Heartbeats"],
    ["What measured the time available to a 1000 Heartbeats contestant?", "Their own heartbeat", ["An hourglass", "A chess clock", "A spinning wheel"], "Easy", "1000 Heartbeats"],
    ["How many heartbeats did contestants have to complete the challenges on 1000 Heartbeats?", "1,000", ["500", "750", "1,500"], "Easy", "1000 Heartbeats"],
    ["What kind of musicians played live in the studio during 1000 Heartbeats?", "A string quartet", ["A brass band", "A jazz trio", "A rock band"], "Medium", "1000 Heartbeats"],
    ["What happened to the studio music as a 1000 Heartbeats player's pulse quickened?", "It sped up", ["It became silent", "It switched to a different genre", "It slowed to half speed"], "Easy", "1000 Heartbeats"],
    ["How many rounds stood between a 1000 Heartbeats player and the final jackpot?", "Seven", ["Four", "Five", "Ten"], "Medium", "1000 Heartbeats"],
    ["What was the top prize in the original ITV 1000 Heartbeats?", "£25,000", ["£10,000", "£50,000", "£100,000"], "Medium", "1000 Heartbeats"],

    // The Vault (5)
    ["Who was the first host of ITV's The Vault?", "Davina McCall", ["Melanie Sykes", "Gabby Logan", "Carol Smillie"], "Easy", "The Vault"],
    ["Which presenter took over The Vault after Davina McCall?", "Melanie Sykes", ["Kate Thornton", "Kirsty Gallacher", "Fern Britton"], "Medium", "The Vault"],
    ["Which sports broadcaster also presented The Vault?", "Gabby Logan", ["Sue Barker", "Clare Balding", "Jill Douglas"], "Medium", "The Vault"],
    ["How many digits were in the combination contestants guessed to try to open The Vault?", "Four", ["Three", "Five", "Six"], "Medium", "The Vault"],
    ["What could the 'brokers' offer to sell contestants on The Vault?", "Answers to quiz questions", ["Extra minutes", "A second set of keys", "A new jackpot"], "Medium", "The Vault"],

    // The Edge (6)
    ["Which actor presented the first series of the BBC quiz The Edge?", "Mark Benton", ["Mark Williams", "Stephen Tompkinson", "Jason Manford"], "Medium", "The Edge"],
    ["Which broadcaster hosted the second series of The Edge?", "Gabby Logan", ["Clare Balding", "Sue Barker", "Sian Williams"], "Medium", "The Edge"],
    ["Which physical skill was combined with general-knowledge questions on The Edge?", "Rolling balls along lanes", ["Throwing darts", "Shooting basketballs", "Hitting golf balls"], "Easy", "The Edge"],
    ["What happened if a contestant's ball rolled over the edge of a lane on The Edge?", "The roll scored nothing", ["Their winnings doubled", "They earned another question", "They swapped lanes with an opponent"], "Easy", "The Edge"],
    ["How many contestants started each game of The Edge?", "Four", ["Two", "Three", "Six"], "Medium", "The Edge"],
    ["How many bowling lanes of different lengths featured on The Edge?", "Four", ["Two", "Three", "Five"], "Medium", "The Edge"],

    // The People Versus (5)
    ["Which broadcaster originally presented ITV's The People Versus?", "Kirsty Young", ["Kaye Adams", "Carol Vorderman", "Fiona Bruce"], "Medium", "The People Versus"],
    ["Who later presented The People Versus after Kirsty Young?", "Kaye Adams", ["Carol Smillie", "Melanie Sykes", "Anne Robinson"], "Medium", "The People Versus"],
    ["What made the questions in The People Versus distinctive?", "They were submitted by viewers", ["They were all about one film", "They were selected by rival broadcasters", "They were written only by celebrities"], "Easy", "The People Versus"],
    ["Which broadcaster transmitted The People Versus in Britain?", "ITV", ["BBC One", "Channel 4", "Channel 5"], "Easy", "The People Versus"],
    ["What subjects could original contestants on The People Versus choose for their questions?", "Their specialist subjects", ["Only sport", "Only current affairs", "Only British history"], "Easy", "The People Versus"],

    // The Answer Trap (7)
    ["Who presented the Channel 4 quiz The Answer Trap?", "Anita Rani", ["Ranvir Singh", "Naga Munchetty", "Alex Jones"], "Easy", "The Answer Trap"],
    ["Which two quiz experts devised the misleading options on The Answer Trap?", "Bobby Seagull and Frank Paul", ["Paul Sinha and Mark Labbett", "Kevin Ashman and Pat Gibson", "Jenny Ryan and Anne Hegerty"], "Medium", "The Answer Trap"],
    ["What did contestants have to do with a list of answers on The Answer Trap?", "Sort them into categories", ["Rank them by price", "Write them backwards", "Use them to build a crossword"], "Easy", "The Answer Trap"],
    ["What was an 'Answer Trap' in the programme of that name?", "A misleading item that fitted neither category", ["A question worth double points", "A secret audience vote", "A safe square on the board"], "Easy", "The Answer Trap"],
    ["How many teams competed in a regular episode of The Answer Trap?", "Two", ["Three", "Four", "Five"], "Easy", "The Answer Trap"],
    ["How many players formed each team on The Answer Trap?", "Two", ["One", "Three", "Four"], "Easy", "The Answer Trap"],
    ["What was the final jackpot on The Answer Trap?", "£10,000", ["£1,000", "£25,000", "£50,000"], "Medium", "The Answer Trap"],

    // Unbeatable (6)
    ["Which comedian hosted the BBC daytime quiz Unbeatable?", "Jason Manford", ["John Bishop", "Rob Beckett", "Romesh Ranganathan"], "Easy", "Unbeatable"],
    ["What did Unbeatable ask contestants to find instead of merely a correct answer?", "The best answer among the choices", ["The shortest answer", "The most popular audience answer", "The first answer alphabetically"], "Easy", "Unbeatable"],
    ["How many possible answers appeared on a standard Unbeatable question board?", "Six", ["Three", "Four", "Eight"], "Medium", "Unbeatable"],
    ["How many players competed in a regular original episode of Unbeatable?", "Four", ["Two", "Three", "Six"], "Medium", "Unbeatable"],
    ["What happened when an Unbeatable contestant successfully challenged an inferior answer?", "They added money to their bank", ["They lost an extra life", "They switched teams", "They chose the next presenter"], "Easy", "Unbeatable"],
    ["What happened if an Unbeatable player wrongly declared their answer to be the best?", "They received nothing for that question", ["They automatically won the jackpot", "They earned another guess", "They doubled their bank"], "Easy", "Unbeatable"],

    // PopMaster TV (6)
    ["Which veteran radio DJ presents PopMaster TV?", "Ken Bruce", ["Simon Mayo", "Tony Blackburn", "Steve Wright"], "Easy", "PopMaster TV"],
    ["On which channel did PopMaster TV originally launch?", "More4", ["BBC Two", "ITV2", "Sky Arts"], "Medium", "PopMaster TV"],
    ["Which subject is at the centre of PopMaster TV?", "Popular music", ["Television soaps", "World geography", "Football history"], "Easy", "PopMaster TV"],
    ["How many contestants compete in a regular PopMaster TV heat?", "Five", ["Two", "Four", "Six"], "Medium", "PopMaster TV"],
    ["What does the PopMaster TV winner have to complete to claim the coveted gold disc?", "3 in 10", ["Gold Run", "Answer Smash", "Missing Vowels"], "Medium", "PopMaster TV"],
    ["What does the 3 in 10 challenge ask PopMaster contestants to name?", "Three chart hits by one act in ten seconds", ["Ten album titles in three minutes", "Three radio presenters in ten years", "Ten songs sharing three words"], "Easy", "PopMaster TV"],

    // The Tournament (6)
    ["Which former England footballer presented the BBC quiz The Tournament?", "Alex Scott", ["Jill Scott", "Karen Carney", "Sue Smith"], "Easy", "The Tournament"],
    ["How many competitors started each episode of The Tournament?", "Eight", ["Four", "Six", "Ten"], "Medium", "The Tournament"],
    ["What kind of quiz contests formed The Tournament's main elimination rounds?", "Head-to-head matches", ["Family surveys", "Musical auditions", "Darts tournaments"], "Easy", "The Tournament"],
    ["What was the opening stage of The Tournament used to determine?", "The initial leaderboard", ["The studio's seating plan", "The presenter's specialist subject", "The day's celebrity guest"], "Medium", "The Tournament"],
    ["What was The Tournament's final challenge called?", "The Golden Run", ["The Gold Run", "The Money List", "The Wonderwall"], "Medium", "The Tournament"],
    ["What could the winner attempt to do with their winnings in The Tournament's Golden Run?", "Double them", ["Exchange them for a car", "Split them between all players", "Donate them automatically"], "Easy", "The Tournament"],

    // The Code (5)
    ["Who presented the BBC quiz The Code?", "Matt Allwright", ["Rick Edwards", "Rob Brydon", "John Suchet"], "Medium", "The Code"],
    ["Which quiz expert joined Matt Allwright on The Code?", "Lesley-Anne Brewis", ["Jenny Ryan", "Susie Dent", "Carol Vorderman"], "Medium", "The Code"],
    ["What did contestants try to unlock in the final stage of The Code?", "A safe containing prize money", ["A glass lift", "A locked music studio", "A mystery luggage case"], "Easy", "The Code"],
    ["How many digits did contestants have to discover to open the safe on The Code?", "Three", ["Two", "Four", "Five"], "Easy", "The Code"],
    ["What happened when The Code contestants answered a question incorrectly?", "Their game ended without the prize", ["Their prize doubled", "They moved to an easier question", "They received a second key"], "Easy", "The Code"],

    // The Answer Run (5)
    ["Which comedian hosts the BBC daytime quiz The Answer Run?", "Jason Manford", ["Romesh Ranganathan", "Greg Davies", "Lee Mack"], "Easy", "The Answer Run"],
    ["How many pairs of contestants compete in The Answer Run?", "Three", ["Two", "Four", "Five"], "Easy", "The Answer Run"],
    ["What do contestants sort in The Answer Run?", "Statements into one of two categories", ["Songs into decades only", "Cards into suits", "Photographs into colour groups"], "Easy", "The Answer Run"],
    ["How do The Answer Run contestants indicate which side an answer belongs to?", "Swipe left or right", ["Ring a handbell", "Draw a circle", "Spin a roulette wheel"], "Easy", "The Answer Run"],
    ["What happens to The Answer Run players' cash total when they make an incorrect classification?", "Money is deducted", ["It is doubled", "It stays unchanged", "It transfers to the host"], "Easy", "The Answer Run"],
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, programme] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(5204 + index).padStart(4, '0'),
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
