// quiz_pack219.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British quiz and game shows - classic and lesser-known adult formats
// 100 questions: tv_5704 to tv_5803

const facts = [
    // THE CHAIR (7)
    ["Which former tennis champion hosted the BBC quiz The Chair?", "John McEnroe", ["Boris Becker", "Pat Cash", "John Lloyd"], "Easy", "The Chair"],
    ["What did The Chair monitor to control when contestants could answer?", "Their heart rate", ["Their breathing rate", "Their body temperature", "Their blood pressure"], "Easy", "The Chair"],
    ["What was the heart-rate limit on The Chair called?", "The redline", ["The danger point", "The ceiling", "The cut-off"], "Medium", "The Chair"],
    ["What happened to a contestant's money when their pulse exceeded the redline on The Chair?", "It began to drain away", ["It immediately doubled", "It was frozen safely", "It went to another player"], "Easy", "The Chair"],
    ["What was the rapid-fire round designed to raise a player's pulse called on The Chair?", "Heartstopper", ["Pulse Check", "Fast Track", "Pressure Point"], "Medium", "The Chair"],
    ["What was the one-use prize safety net on The Chair called?", "Stabilizer", ["Lifeline", "Safeguard", "Heartbeat Bonus"], "Medium", "The Chair"],
    ["What was the maximum cash prize available on the British version of The Chair?", "£50,000", ["£25,000", "£100,000", "£250,000"], "Medium", "The Chair"],

    // THE VAULT (7)
    ["Who originally presented the ITV quiz The Vault?", "Davina McCall", ["Melanie Sykes", "Gabby Logan", "Carol Vorderman"], "Easy", "The Vault"],
    ["Who succeeded Davina McCall as the main presenter of The Vault?", "Melanie Sykes", ["Emma Forbes", "Claudia Winkleman", "Kate Thornton"], "Medium", "The Vault"],
    ["Which sports presenter stood in for Melanie Sykes on The Vault?", "Gabby Logan", ["Sue Barker", "Clare Balding", "Helen Chamberlain"], "Medium", "The Vault"],
    ["What were the contestants who sold answers to players on The Vault called?", "Brokers", ["Traders", "Bankers", "Dealers"], "Medium", "The Vault"],
    ["How many studio contestants competed in each show of the first series of The Vault?", "Seven", ["Five", "Six", "Eight"], "Medium", "The Vault"],
    ["What did the original Vault hopefuls guess to decide who became players or brokers?", "A four-digit code", ["A six-letter word", "A cash amount", "A secret postcode"], "Medium", "The Vault"],
    ["What was the starting rollover jackpot on ITV's The Vault?", "£100,000", ["£25,000", "£50,000", "£250,000"], "Medium", "The Vault"],

    // WINNING LINES (7)
    ["Which radio presenter originally hosted the National Lottery quiz Winning Lines?", "Simon Mayo", ["Chris Evans", "Tony Blackburn", "Steve Wright"], "Medium", "Winning Lines"],
    ["Who took over from Simon Mayo as the host of Winning Lines?", "Phillip Schofield", ["Dale Winton", "Noel Edmonds", "Nick Knowles"], "Easy", "Winning Lines"],
    ["How many contestants made up the 'Forty-niners' on Winning Lines?", "Forty-nine", ["Thirty-six", "Fifty", "One hundred"], "Medium", "Winning Lines"],
    ["What type of answers were normally required in Winning Lines' opening rounds?", "Numerical answers", ["Song titles", "Celebrity names", "Colours"], "Easy", "Winning Lines"],
    ["What was the head-to-head second round of Winning Lines called?", "Looking After Number One", ["The Fastest Finger", "The Golden Line", "Double Trouble"], "Medium", "Winning Lines"],
    ["What was the final giant-answer-board challenge on Winning Lines called?", "The Wonderwall", ["The Gold Run", "The Supergrid", "The Answer Trap"], "Easy", "Winning Lines"],
    ["How many questions did a Winning Lines finalist need to solve on the Wonderwall to earn the top holiday?", "Twenty", ["Ten", "Fifteen", "Twenty-five"], "Medium", "Winning Lines"],

    // THE PEOPLE VERSUS (7)
    ["Who originally presented the ITV quiz The People Versus?", "Kirsty Young", ["Kaye Adams", "Fiona Bruce", "Anna Ford"], "Medium", "The People Versus"],
    ["Who succeeded Kirsty Young as presenter of The People Versus?", "Kaye Adams", ["Lorraine Kelly", "Anne Robinson", "Gloria Hunniford"], "Medium", "The People Versus"],
    ["Who supplied the questions that challenged contestants on The People Versus?", "Members of the public", ["A team of celebrities", "The studio audience alone", "Former champions alone"], "Easy", "The People Versus"],
    ["What subjects did contestants nominate for their questions on the original The People Versus?", "Their own specialist subjects", ["Only sport", "Only television", "Subjects chosen by opponents"], "Medium", "The People Versus"],
    ["How many questions were offered in each subject round of the original The People Versus?", "Five", ["Three", "Four", "Six"], "Medium", "The People Versus"],
    ["What could a contestant replace one of their questions with by using a 'flip' on The People Versus?", "A different question", ["A cash prize", "A free pass to the final", "An audience vote"], "Medium", "The People Versus"],
    ["Who took over a contestant's seat after that person was knocked out on the original The People Versus?", "The person who submitted the defeating question", ["The presenter's chosen reserve", "The oldest audience member", "The highest-scoring previous player"], "Hard", "The People Versus"],

    // GREED (6)
    ["Which American talk-show host presented the British quiz Greed?", "Jerry Springer", ["Ricki Lake", "Montel Williams", "Maury Povich"], "Easy", "Greed"],
    ["Which British channel broadcast the Jerry Springer quiz Greed?", "Channel 5", ["BBC One", "ITV", "Channel 4"], "Medium", "Greed"],
    ["What was the maximum jackpot advertised on the British version of Greed?", "£1 million", ["£100,000", "£250,000", "£500,000"], "Medium", "Greed"],
    ["How many hopefuls initially came out to play Greed before the opening elimination?", "Six", ["Four", "Five", "Eight"], "Medium", "Greed"],
    ["Who had the final say over the team's answers on Greed?", "The team leader", ["The audience", "The youngest contestant", "The announcer"], "Easy", "Greed"],
    ["What was the challenge feature allowing one Greed player to take on a teammate called?", "The Terminator", ["The Eliminator", "The Challenger", "The Showdown"], "Medium", "Greed"],

    // WHITTLE (6)
    ["Which comedian presented the Channel 5 quiz Whittle?", "Tim Vine", ["Lee Mack", "Milton Jones", "Harry Hill"], "Medium", "Whittle"],
    ["Approximately how many audience members started each game of Whittle?", "One hundred", ["Twenty", "Fifty", "Two hundred"], "Medium", "Whittle"],
    ["How did Whittle contestants register their multiple-choice answers?", "Using keypads", ["Writing on slates", "Standing in coloured zones", "Calling out together"], "Easy", "Whittle"],
    ["How long did Whittle players normally have to answer each multiple-choice question?", "Ten seconds", ["Five seconds", "Twenty seconds", "Thirty seconds"], "Medium", "Whittle"],
    ["How many players progressed to the second half of Whittle?", "Ten", ["Five", "Eight", "Twelve"], "Medium", "Whittle"],
    ["What did Whittle's final challenge ask the winner to do with four items?", "Put them in the correct order", ["Find a rhyme for each", "Memorise their prices", "Make an anagram from them"], "Medium", "Whittle"],

    // EVERYBODY'S EQUAL (6)
    ["Who hosted ITV's audience-wide quiz Everybody's Equal?", "Chris Tarrant", ["Michael Aspel", "Les Dennis", "Bob Monkhouse"], "Easy", "Everybody's Equal"],
    ["How many studio players usually took part in Everybody's Equal?", "Two hundred", ["Fifty", "One hundred", "Three hundred"], "Medium", "Everybody's Equal"],
    ["What did the studio players use to answer questions on Everybody's Equal?", "Electronic keypads", ["Whiteboards", "Coloured flags", "Handheld microphones"], "Easy", "Everybody's Equal"],
    ["What happened to a player who chose a wrong answer on Everybody's Equal?", "They were eliminated", ["They lost one point", "They joined another team", "They had to change seats"], "Easy", "Everybody's Equal"],
    ["How many players or fewer were left for the second round of Everybody's Equal?", "Ten", ["Four", "Six", "Twenty"], "Medium", "Everybody's Equal"],
    ["What name was given to the four featured potential winners on Everybody's Equal?", "Four to Follow", ["Fantastic Four", "Top Four", "Four in Front"], "Medium", "Everybody's Equal"],

    // THE MOMENT OF TRUTH (6)
    ["Who presented the ITV family challenge show The Moment of Truth?", "Cilla Black", ["Davina McCall", "Ulrika Jonsson", "Carol Smillie"], "Easy", "The Moment of Truth"],
    ["What was the catalogue of family prizes called on The Moment of Truth?", "The Dream Directory", ["The Prize Pantry", "The Wish Book", "The Gift List"], "Medium", "The Moment of Truth"],
    ["How long did families originally have to practise their challenge for The Moment of Truth?", "Seven days", ["One day", "Three days", "Fourteen days"], "Medium", "The Moment of Truth"],
    ["Who normally performed the big rehearsed task for each family on The Moment of Truth?", "One family member", ["The whole studio audience", "The presenter", "A pair of professional performers"], "Easy", "The Moment of Truth"],
    ["What footage showed how families prepared for their Moment of Truth challenge?", "A video diary", ["A live webcam", "A news bulletin", "A cartoon sequence"], "Easy", "The Moment of Truth"],
    ["Which country originated the format that became Cilla Black's The Moment of Truth?", "Japan", ["United States", "Australia", "Canada"], "Medium", "The Moment of Truth"],

    // SHAFTED (6)
    ["Who hosted ITV's short-lived quiz Shafted?", "Robert Kilroy-Silk", ["Jeremy Kyle", "Richard Madeley", "Matthew Kelly"], "Medium", "Shafted"],
    ["Which two words described the final choice on Shafted?", "Share or shaft", ["Stick or twist", "Deal or no deal", "Pass or play"], "Easy", "Shafted"],
    ["How many contestants started each episode of Shafted before the initial elimination?", "Six", ["Four", "Five", "Eight"], "Medium", "Shafted"],
    ["What did Shafted contestants gamble on before hearing a question in full?", "How much money to stake", ["Which host to face", "How many lifelines to lose", "Whether to leave the studio"], "Medium", "Shafted"],
    ["What famous game-theory dilemma did Shafted's final decision resemble?", "The prisoner's dilemma", ["The Monty Hall problem", "The travelling salesman problem", "The birthday paradox"], "Hard", "Shafted"],
    ["What phrase did Robert Kilroy-Silk use when eliminating contestants on Shafted?", "You're off the show!", ["You are the weakest link!", "You've been bankrupted!", "You've lost the plot!"], "Medium", "Shafted"],

    // 1000 HEARTBEATS (6)
    ["Who presented ITV's quiz 1000 Heartbeats?", "Vernon Kay", ["Ben Shephard", "Stephen Mulhern", "Nick Knowles"], "Easy", "1000 Heartbeats"],
    ["What counted down as a contestant answered questions on 1000 Heartbeats?", "Their own heartbeats", ["Seconds on a wall clock", "Points on the scoreboard", "Questions remaining"], "Easy", "1000 Heartbeats"],
    ["How many beats did contestants begin with on 1000 Heartbeats?", "One thousand", ["Five hundred", "Seven hundred and fifty", "Two thousand"], "Easy", "1000 Heartbeats"],
    ["Which musicians played live during contestants' games on 1000 Heartbeats?", "A string quartet", ["A brass band", "A jazz trio", "A full orchestra"], "Medium", "1000 Heartbeats"],
    ["What made the live music speed up on 1000 Heartbeats?", "A contestant's faster heartbeat", ["A wrong answer alone", "The presenter pressing a pedal", "A studio audience vote"], "Medium", "1000 Heartbeats"],
    ["Which of these puzzle types featured on 1000 Heartbeats?", "Anagrams", ["Dartboard scoring", "Charades", "Jigsaw construction"], "Medium", "1000 Heartbeats"],

    // THE BANK JOB (6)
    ["Who presented Channel 4's quiz The Bank Job?", "George Lamb", ["Alex Zane", "Steve Jones", "Nick Grimshaw"], "Medium", "The Bank Job"],
    ["Where did contestants play their rounds on The Bank Job?", "Inside a bank vault", ["On a moving train", "In a courtroom", "On a cruise ship"], "Easy", "The Bank Job"],
    ["What could a correct answer allow contestants to open on The Bank Job?", "A cash-filled deposit box", ["A new television studio", "A mystery holiday envelope", "An opponent's suitcase"], "Easy", "The Bank Job"],
    ["How many contestants competed in a normal daily edition of The Bank Job?", "Four", ["Two", "Three", "Six"], "Medium", "The Bank Job"],
    ["What did contestants have to do before the vault timer expired on The Bank Job?", "Leave the vault with their cash", ["Open every box", "Find a secret password", "Eliminate all opponents by voting"], "Medium", "The Bank Job"],
    ["How many daily winners returned to compete in The Bank Job's weekly final?", "Five", ["Three", "Four", "Six"], "Medium", "The Bank Job"],

    // THE 21ST QUESTION (6)
    ["Who presented ITV's quiz The 21st Question?", "Gethin Jones", ["Matt Allwright", "Sean Fletcher", "Jeff Stelling"], "Medium", "The 21st Question"],
    ["How many contestants started a game of The 21st Question?", "Eleven", ["Seven", "Nine", "Thirteen"], "Medium", "The 21st Question"],
    ["What was the central position contestants tried to hold on The 21st Question?", "The Power Spot", ["The Captain's Chair", "The Golden Circle", "The Safe Zone"], "Medium", "The 21st Question"],
    ["What could a challenger do by answering correctly when the central player was wrong on The 21st Question?", "Take the central player's place", ["Win the jackpot immediately", "Eliminate every other challenger", "Skip the final question"], "Medium", "The 21st Question"],
    ["What type of task formed the final, titular question on The 21st Question?", "Naming entries from a top-ten list", ["Solving a cryptic crossword", "Memorising a sequence of lights", "Guessing a celebrity's voice"], "Medium", "The 21st Question"],
    ["How many valid answers were first requested in The 21st Question final to win half the pot?", "Three", ["Two", "Four", "Five"], "Medium", "The 21st Question"],

    // 24 HOUR QUIZ (6)
    ["Which former EastEnders actor presented ITV's 24 Hour Quiz?", "Shaun Williamson", ["Dean Gaffney", "Adam Woodyatt", "John Altman"], "Medium", "24 Hour Quiz"],
    ["Who presented the late-night editions of 24 Hour Quiz?", "Matt Brown", ["Rob Beckett", "Matt Baker", "Mark Wright"], "Hard", "24 Hour Quiz"],
    ["What was the small living space for contestants on 24 Hour Quiz called?", "The Quiz Pod", ["The Question House", "The Brain Box", "The Challenge Cell"], "Medium", "24 Hour Quiz"],
    ["For roughly how many hours a day were contestants questioned on 24 Hour Quiz?", "Sixteen", ["Eight", "Twelve", "Twenty-four"], "Medium", "24 Hour Quiz"],
    ["How much were contestants usually paid for a correct question on 24 Hour Quiz?", "£1", ["10p", "£5", "£10"], "Medium", "24 Hour Quiz"],
    ["Which future Pointless presenter devised the format for 24 Hour Quiz?", "Richard Osman", ["Alexander Armstrong", "Bradley Walsh", "Stephen Fry"], "Medium", "24 Hour Quiz"],

    // THE WAITING GAME (6)
    ["Which comedian and presenter hosted the BBC quiz The Waiting Game?", "Ruby Wax", ["Jo Brand", "Jenny Eclair", "Victoria Wood"], "Medium", "The Waiting Game"],
    ["How many couples competed on The Waiting Game?", "Three", ["Two", "Four", "Five"], "Medium", "The Waiting Game"],
    ["What happened to the points available the longer a player waited to buzz on The Waiting Game?", "They increased", ["They decreased", "They stayed the same", "They were reset to zero"], "Easy", "The Waiting Game"],
    ["Who had to provide the answer when one half of a couple buzzed on The Waiting Game?", "Their partner", ["The person who buzzed", "The presenter", "A randomly selected rival"], "Medium", "The Waiting Game"],
    ["How many seconds could a player wait before a question timed out on The Waiting Game?", "Ten", ["Five", "Fifteen", "Thirty"], "Medium", "The Waiting Game"],
    ["What happened to the points if the buzzing player's partner answered wrongly on The Waiting Game?", "They went to the other couples", ["They doubled for that team", "They were carried to the next show", "They were given to the studio audience"], "Medium", "The Waiting Game"],

    // THE OTHER HALF (6)
    ["Who presented the BBC relationship game show The Other Half?", "Dale Winton", ["Cilla Black", "Les Dennis", "Graham Norton"], "Easy", "The Other Half"],
    ["What did players try to identify on The Other Half?", "Which person was someone's real partner", ["Who had the highest salary", "Who was secretly a celebrity", "Which contestant was oldest"], "Easy", "The Other Half"],
    ["How many possible partners were presented for each guessing game on The Other Half?", "Four", ["Two", "Three", "Six"], "Medium", "The Other Half"],
    ["What did the genuine partner have to do while the impostors lied on The Other Half?", "Tell the truth", ["Remain silent", "Leave the studio", "Answer only with gestures"], "Medium", "The Other Half"],
    ["What physical gesture formed part of the identity test on The Other Half?", "Kissing the potential partners", ["Shaking hands with the presenter", "Dancing with a stranger", "Exchanging rings"], "Medium", "The Other Half"],
    ["What did contestants identify from clues in The Other Half's semi-final quiz?", "Famous couples", ["Capital cities", "Pop songs", "Food ingredients"], "Medium", "The Other Half"],

    // TALKING TELEPHONE NUMBERS (6)
    ["Who was the main presenter of ITV's Talking Telephone Numbers?", "Phillip Schofield", ["Chris Tarrant", "Noel Edmonds", "Michael Barrymore"], "Easy", "Talking Telephone Numbers"],
    ["Who co-presented the earlier series of Talking Telephone Numbers with Phillip Schofield?", "Emma Forbes", ["Carol Smillie", "Kirsty Young", "Ulrika Jonsson"], "Medium", "Talking Telephone Numbers"],
    ["Who replaced Emma Forbes as co-presenter of Talking Telephone Numbers in its final series?", "Claudia Winkleman", ["Sara Cox", "Tess Daly", "Kate Thornton"], "Medium", "Talking Telephone Numbers"],
    ["Which part of viewers' phone numbers had to match the numbers drawn on Talking Telephone Numbers?", "The last five digits", ["The first three digits", "Only the area code", "Every digit including the code"], "Medium", "Talking Telephone Numbers"],
    ["What kind of questions were callers asked on Talking Telephone Numbers?", "Number-related questions", ["Only spelling questions", "Only music questions", "Only geography questions"], "Easy", "Talking Telephone Numbers"],
    ["What was the name of the dog mascot seen on Talking Telephone Numbers?", "Sniff", ["Basil", "Noddy", "Buster"], "Medium", "Talking Telephone Numbers"],
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, programme], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(5704 + index).padStart(4, '0'),
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
