// quiz_pack217.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British quiz and game shows - more classic and unusual formats
// 100 questions: tv_5504 to tv_5603

const facts = [
    // THE CUBE (7)
    ["Who presented the original ITV series of The Cube?", "Phillip Schofield", ["Vernon Kay", "Ben Shephard", "Stephen Mulhern"], "Easy", "The Cube"],
    ["What did contestants enter to perform challenges on The Cube?", "A transparent cube", ["A rotating cylinder", "A glass lift", "A giant sphere"], "Easy", "The Cube"],
    ["How many lives did a contestant begin with on the original The Cube?", "Nine", ["Five", "Seven", "Ten"], "Medium", "The Cube"],
    ["What was the one-use option that made a challenge easier on The Cube?", "Simplify", ["Swap", "Replay", "Freeze"], "Medium", "The Cube"],
    ["What did the Trial Run option allow contestants to do on The Cube?", "Attempt a game without risking a life", ["Skip a game and collect its prize", "Ask a family member to take over", "Replace a physical task with a question"], "Medium", "The Cube"],
    ["What was the original maximum prize on ITV's The Cube?", "£250,000", ["£50,000", "£100,000", "£500,000"], "Medium", "The Cube"],
    ["Which Olympic distance runner won the original top prize on The Cube?", "Mo Farah", ["Dame Kelly Holmes", "Paula Radcliffe", "Steve Cram"], "Medium", "The Cube"],

    // BEAT THE STAR (7)
    ["Who usually hosted ITV's Beat the Star?", "Vernon Kay", ["Ant McPartlin", "Chris Tarrant", "Bradley Walsh"], "Easy", "Beat the Star"],
    ["Who did members of the public compete against on Beat the Star?", "A celebrity", ["A team of professional quizzers", "A hidden family member", "A studio audience"], "Easy", "Beat the Star"],
    ["What types of challenges featured on Beat the Star?", "Physical and mental challenges", ["Singing and dancing only", "Cooking and baking only", "Word puzzles only"], "Easy", "Beat the Star"],
    ["Which presenter temporarily took over hosting Beat the Star so Vernon Kay could compete?", "Phillip Schofield", ["Dermot O'Leary", "Steve Jones", "Jason Manford"], "Medium", "Beat the Star"],
    ["Which boxer appeared as a celebrity opponent in the first series of Beat the Star?", "Amir Khan", ["Ricky Hatton", "Carl Froch", "Anthony Joshua"], "Medium", "Beat the Star"],
    ["What was the starting jackpot for a challenger on Beat the Star?", "£50,000", ["£10,000", "£25,000", "£100,000"], "Medium", "Beat the Star"],
    ["Which country supplied the original format that inspired Beat the Star?", "Germany", ["France", "Sweden", "Australia"], "Medium", "Beat the Star"],

    // 100% (6)
    ["Which television channel showed the daytime quiz 100%?", "Channel 5", ["BBC One", "ITV", "Channel 4"], "Medium", "100%"],
    ["How many questions were asked in a normal edition of 100%?", "One hundred", ["Fifty", "Seventy-five", "One hundred and fifty"], "Easy", "100%"],
    ["How many contestants competed in a standard episode of 100%?", "Three", ["Two", "Four", "Six"], "Medium", "100%"],
    ["Whose voice supplied the unseen questions on 100%?", "Robin Houston", ["Alan Dedicoat", "Peter Dickson", "John Sachs"], "Hard", "100%"],
    ["What prize did the regular daily winner of 100% receive?", "£100", ["£500", "£1,000", "£5,000"], "Medium", "100%"],
    ["Which long-running 100% champion won 75 consecutive games?", "Ian Lygo", ["Kevin Ashman", "Pat Gibson", "Barry Simmons"], "Hard", "100%"],

    // BRAINTEASER (6)
    ["On which channel was the word-game quiz Brainteaser broadcast?", "Channel 5", ["BBC Two", "ITV", "Sky One"], "Medium", "Brainteaser"],
    ["Which of these presenters regularly hosted Brainteaser?", "Alex Lovell", ["Carol Vorderman", "Anne Robinson", "Fern Britton"], "Medium", "Brainteaser"],
    ["What did players have to rearrange in Brainteaser's Scramble round?", "Mixed-up word segments", ["Shuffled playing cards", "Photographs of celebrities", "Numbered tiles"], "Medium", "Brainteaser"],
    ["What was the crossword-style general knowledge round on Brainteaser called?", "Crossfire", ["Gold Run", "Superchain", "Alphabeticals"], "Medium", "Brainteaser"],
    ["In Brainteaser's Trio round, what did contestants receive?", "Three letters to use in order", ["Three pictures of actors", "Three numerical clues", "Three musical notes"], "Medium", "Brainteaser"],
    ["What was the name of Brainteaser's word-building final?", "Pyramid", ["The Wall", "Word Storm", "The Ladder"], "Medium", "Brainteaser"],

    // WIN MY WAGE (6)
    ["Who presented the Channel 4 game show Win My Wage?", "Nick Hancock", ["Noel Edmonds", "Adrian Chiles", "Richard Madeley"], "Medium", "Win My Wage"],
    ["What did the main contestant try to identify on Win My Wage?", "The person with the highest salary", ["The youngest worker", "The most experienced manager", "The person with the fewest qualifications"], "Easy", "Win My Wage"],
    ["How many wage earners were introduced at the start of Win My Wage?", "Eight", ["Five", "Six", "Ten"], "Medium", "Win My Wage"],
    ["What happened when the player eliminated someone on Win My Wage?", "Their job and wage were revealed", ["They joined the contestant's team", "They drew a mystery bonus card", "They chose the next question"], "Medium", "Win My Wage"],
    ["How many wage earners were left for the final decision on Win My Wage?", "Three", ["Two", "Four", "Five"], "Medium", "Win My Wage"],
    ["What was the cost of asking to hear the finalists' occupations on Win My Wage?", "The possible winnings were halved", ["One finalist was eliminated", "The contestant lost a turn", "The prize became a holiday"], "Medium", "Win My Wage"],

    // SECRET FORTUNE (7)
    ["Who hosted BBC One's Secret Fortune?", "Nick Knowles", ["Dale Winton", "Nick Hancock", "John Barrowman"], "Easy", "Secret Fortune"],
    ["What did players try to preserve until the end of Secret Fortune?", "An envelope containing a cash prize", ["A sealed passport", "A golden playing card", "A numbered key"], "Easy", "Secret Fortune"],
    ["How many numbered envelopes were on offer at the beginning of Secret Fortune?", "Twenty-four", ["Twelve", "Sixteen", "Thirty"], "Medium", "Secret Fortune"],
    ["What was the largest cash amount among the envelopes on Secret Fortune?", "£100,000", ["£25,000", "£50,000", "£250,000"], "Medium", "Secret Fortune"],
    ["What type of questions helped players select envelopes on Secret Fortune?", "Ordering and comparison questions", ["Spelling bees", "Music-identification rounds", "Charades"], "Medium", "Secret Fortune"],
    ["How many envelopes remained after the first stage of Secret Fortune?", "Six", ["Two", "Four", "Eight"], "Medium", "Secret Fortune"],
    ["How many envelopes remained for the final question on Secret Fortune?", "Two", ["Three", "Four", "Six"], "Medium", "Secret Fortune"],

    // REBOUND (6)
    ["Who hosted ITV's quiz Rebound?", "Sean Fletcher", ["Ben Shephard", "Mark Durden-Smith", "Jeff Stelling"], "Medium", "Rebound"],
    ["What moved across the studio's electronic floor in Rebound?", "A moving bar", ["A row of spinning letters", "A bank of sliding doors", "A giant dice"], "Medium", "Rebound"],
    ["How many contestants started an episode of Rebound?", "Six", ["Four", "Five", "Eight"], "Medium", "Rebound"],
    ["What was the opening quick-answer round on Rebound called?", "Fast Cash", ["Cash Ladder", "Quickfire Chase", "Money Run"], "Medium", "Rebound"],
    ["What was Rebound's final challenge called?", "Beat the Bar", ["Stop the Clock", "Run the Line", "Last Player Standing"], "Medium", "Rebound"],
    ["Which future Chaser appeared as a contestant on Rebound?", "Darragh Ennis", ["Mark Labbett", "Paul Sinha", "Shaun Wallace"], "Hard", "Rebound"],

    // FREEZE OUT (6)
    ["Who presented ITV's ice-themed quiz Freeze Out?", "Mark Durden-Smith", ["Sean Fletcher", "Vernon Kay", "John Inverdale"], "Medium", "Freeze Out"],
    ["Which former football referee appeared as the Ice Judge on Freeze Out?", "Uriah Rennie", ["Howard Webb", "Graham Poll", "Mark Clattenburg"], "Medium", "Freeze Out"],
    ["What did contestants slide across the playing surface on Freeze Out?", "Discs", ["Curling stones", "Ice skates", "Playing cards"], "Easy", "Freeze Out"],
    ["What was the first round of Freeze Out called?", "Smash Out", ["Fast Cash", "Crossfire", "Quick Freeze"], "Medium", "Freeze Out"],
    ["Which sport did Freeze Out's target-sliding challenges most closely resemble?", "Curling", ["Ice hockey", "Figure skating", "Speed skating"], "Easy", "Freeze Out"],
    ["What was the top prize available in the Freeze Out final?", "£10,000", ["£2,000", "£5,000", "£25,000"], "Medium", "Freeze Out"],

    // TAKE ON THE TWISTERS (6)
    ["Who presented ITV's Take on the Twisters?", "Julia Bradbury", ["Davina McCall", "Kate Garraway", "Christine Lampard"], "Medium", "Take on the Twisters"],
    ["What objects were the centrepiece of Take on the Twisters?", "Giant sand timers", ["Oversized chess pieces", "Spinning letter wheels", "Large playing cards"], "Medium", "Take on the Twisters"],
    ["What happened to a timer when a contestant answered correctly on Take on the Twisters?", "It was turned over", ["It was smashed", "It was replaced by a clock", "It was removed from the studio"], "Medium", "Take on the Twisters"],
    ["How many contestants competed for a place in the Take on the Twisters final?", "Four", ["Two", "Three", "Six"], "Medium", "Take on the Twisters"],
    ["How many giant timers were used in the Take on the Twisters final?", "Eight", ["Four", "Six", "Ten"], "Medium", "Take on the Twisters"],
    ["Which long-running ITV quiz did Take on the Twisters temporarily replace in its teatime slot?", "The Chase", ["Pointless", "Tipping Point", "Eggheads"], "Medium", "Take on the Twisters"],

    // THE QUESTION JURY (6)
    ["On which channel was The Question Jury shown?", "Channel 4", ["BBC One", "ITV", "Channel 5"], "Medium", "The Question Jury"],
    ["How many strangers made up the jury on The Question Jury?", "Seven", ["Five", "Six", "Nine"], "Medium", "The Question Jury"],
    ["What did the contestants have to do before submitting an answer on The Question Jury?", "Agree on it together", ["Write it down independently", "Telephone an expert", "Draw a picture of it"], "Easy", "The Question Jury"],
    ["What title was given to the person leading each question's discussion on The Question Jury?", "Foreman", ["Captain", "Chairperson", "Speaker"], "Medium", "The Question Jury"],
    ["Who selected the finalist on The Question Jury?", "The other jurors", ["The studio audience", "The unseen judge", "A random computer draw"], "Medium", "The Question Jury"],
    ["How did The Question Jury's unseen judge address the contestants?", "Through an intercom", ["Through a video screen", "By handwritten notes", "By telephone call"], "Medium", "The Question Jury"],

    // BANK BALANCE (6)
    ["Which celebrity chef presented the BBC game show Bank Balance?", "Gordon Ramsay", ["Jamie Oliver", "James Martin", "Ainsley Harriott"], "Easy", "Bank Balance"],
    ["What did contestants stack on the moving structure in Bank Balance?", "Gold-coloured bars", ["Wooden cubes", "Glass bottles", "Numbered bricks"], "Easy", "Bank Balance"],
    ["What could happen if the Bank Balance structure tilted too far?", "The bars could fall off", ["A buzzer would end the question", "The presenter would swap places", "The board would spin faster"], "Easy", "Bank Balance"],
    ["How many people played together on a Bank Balance team?", "Two", ["One", "Three", "Four"], "Medium", "Bank Balance"],
    ["What was the top prize advertised on Bank Balance?", "£100,000", ["£10,000", "£50,000", "£250,000"], "Medium", "Bank Balance"],
    ["What type of quiz task earned players bars to place on Bank Balance?", "Giving several answers to a list question", ["Solving a crossword", "Identifying songs from intros", "Completing number sequences"], "Medium", "Bank Balance"],

    // TAKE IT OR LEAVE IT (6)
    ["Who hosted Challenge TV's Take It or Leave It?", "Richard Arnold", ["Richard Hammond", "Richard Bacon", "Richard Osman"], "Medium", "Take It or Leave It"],
    ["What choice did contestants make about an offered answer on Take It or Leave It?", "Accept it or reject it", ["Spell it or draw it", "Sing it or hum it", "Sell it or auction it"], "Easy", "Take It or Leave It"],
    ["What happened when a couple answered incorrectly on Take It or Leave It?", "They were sent to the Sin Bin", ["They lost their prize permanently", "They swapped partners", "They returned to the beginning"], "Medium", "Take It or Leave It"],
    ["How many sections made up the main question path on Take It or Leave It?", "Ten", ["Six", "Eight", "Twelve"], "Medium", "Take It or Leave It"],
    ["What did the contestants choose from to build up prize money on Take It or Leave It?", "A wall of safes", ["A row of suitcases", "A wheel of envelopes", "A board of playing cards"], "Medium", "Take It or Leave It"],
    ["How many different coloured safes appeared in the Take It or Leave It final?", "Six", ["Four", "Five", "Eight"], "Medium", "Take It or Leave It"],

    // 101 WAYS TO LEAVE A GAMESHOW (6)
    ["Who presented BBC One's 101 Ways to Leave a Gameshow?", "Steve Jones", ["Alex Zane", "Vernon Kay", "George Lamb"], "Medium", "101 Ways to Leave a Gameshow"],
    ["Which radio presenter co-hosted 101 Ways to Leave a Gameshow?", "Nemone Metaxas", ["Fearne Cotton", "Sara Cox", "Jo Whiley"], "Hard", "101 Ways to Leave a Gameshow"],
    ["What happened to contestants who chose the wrong answer on 101 Ways to Leave a Gameshow?", "They were eliminated by a stunt", ["They lost their voice for a round", "They had to join another team", "They answered twice as many questions"], "Easy", "101 Ways to Leave a Gameshow"],
    ["Where did eliminated contestants often land on 101 Ways to Leave a Gameshow?", "A pool of water", ["A foam-filled room", "A sand pit", "A ball pool"], "Easy", "101 Ways to Leave a Gameshow"],
    ["What was the final elimination method called on 101 Ways to Leave a Gameshow?", "The Trapdoor", ["The Big Drop", "The Final Splash", "The Exit Slide"], "Medium", "101 Ways to Leave a Gameshow"],
    ["What was the cash prize for the winner of 101 Ways to Leave a Gameshow?", "£10,000", ["£5,000", "£25,000", "£50,000"], "Medium", "101 Ways to Leave a Gameshow"],

    // THE WHOLE 19 YARDS (6)
    ["Who hosted ITV's The Whole 19 Yards?", "Vernon Kay", ["Steve Jones", "Phillip Schofield", "Jason Manford"], "Easy", "The Whole 19 Yards"],
    ["Which presenter was the Games Guru on The Whole 19 Yards?", "Caroline Flack", ["Holly Willoughby", "Fearne Cotton", "Davina McCall"], "Medium", "The Whole 19 Yards"],
    ["What did contestants have to cross before buzzing in on The Whole 19 Yards?", "An obstacle course", ["A swimming pool", "A suspension bridge", "A rotating maze"], "Easy", "The Whole 19 Yards"],
    ["How many contestants began a game of The Whole 19 Yards?", "Four", ["Three", "Five", "Six"], "Medium", "The Whole 19 Yards"],
    ["What was the catchphrase of The Whole 19 Yards?", "When you know, you go", ["Come on down", "No conferring", "Lock it in"], "Medium", "The Whole 19 Yards"],
    ["What was the maximum prize offered on The Whole 19 Yards?", "£100,000", ["£25,000", "£50,000", "£250,000"], "Medium", "The Whole 19 Yards"],

    // THE DOOR (6)
    ["Which two presenters hosted ITV's challenge show The Door?", "Amanda Holden and Chris Tarrant", ["Ant and Dec", "Holly Willoughby and Phillip Schofield", "Vernon Kay and Caroline Flack"], "Medium", "The Door"],
    ["How many celebrities competed on ITV's The Door?", "Six", ["Four", "Eight", "Ten"], "Medium", "The Door"],
    ["Which Boyzone singer won The Door?", "Keith Duffy", ["Ronan Keating", "Shane Lynch", "Mikey Graham"], "Medium", "The Door"],
    ["Which Coronation Street actress took part in The Door?", "Jennie McAlpine", ["Sally Dynevor", "Helen Worth", "Kym Marsh"], "Medium", "The Door"],
    ["Which EastEnders actor was a contestant on The Door?", "Dean Gaffney", ["Adam Woodyatt", "Steve McFadden", "Perry Fenwick"], "Medium", "The Door"],
    ["What sort of tests awaited the celebrities on The Door?", "Unpleasant physical and mental challenges", ["General knowledge questions only", "Singing duets with the hosts", "Professional dance auditions"], "Easy", "The Door"],

    // FIVE MINUTES TO A FORTUNE (7)
    ["Who presented Channel 4's Five Minutes to a Fortune?", "Davina McCall", ["Emma Willis", "Mel Giedroyc", "Kate Thornton"], "Easy", "Five Minutes to a Fortune"],
    ["What giant object held the money on Five Minutes to a Fortune?", "An hourglass", ["A spinning wheel", "A glass pyramid", "A transparent safe"], "Easy", "Five Minutes to a Fortune"],
    ["What were the two contestant roles called on Five Minutes to a Fortune?", "Timekeeper and Gameplayer", ["Captain and Challenger", "Banker and Borrower", "Leader and Runner"], "Medium", "Five Minutes to a Fortune"],
    ["What did the Timekeeper allocate to each category on Five Minutes to a Fortune?", "Time", ["Prize envelopes", "Letters", "Extra players"], "Easy", "Five Minutes to a Fortune"],
    ["How much money was initially displayed in the regular Five Minutes to a Fortune game?", "£50,000", ["£10,000", "£25,000", "£100,000"], "Medium", "Five Minutes to a Fortune"],
    ["What caused money to be lost on Five Minutes to a Fortune?", "The giant hourglass draining", ["Incorrect answers triggering an auction", "The audience voting against the team", "Each unused lifeline being removed"], "Medium", "Five Minutes to a Fortune"],
    ["How many correct responses were usually needed to finish a category on Five Minutes to a Fortune?", "Five", ["Three", "Six", "Ten"], "Medium", "Five Minutes to a Fortune"],
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, programme], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(5504 + index).padStart(4, '0'),
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
