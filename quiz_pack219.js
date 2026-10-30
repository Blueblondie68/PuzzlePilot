// quiz_pack219.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British quiz and game shows - classic and lesser-known adult formats
// 100 questions: tv_5704 to tv_5803
// 21 duplicate facts replaced; full per-question tagging audit.
// Keep quiz_bank.js unchanged until the end of the evening.

const facts = [
    // THE CHAIR
    ["Which former tennis champion hosted the BBC quiz The Chair?", "John McEnroe", ["Boris Becker", "Pat Cash", "John Lloyd"], "Easy", "The Chair", ["John McEnroe", "2002 BBC Quiz", "John McEnroe Presenter", "Former Tennis Champion", "Heart Rate Quiz", "Original Host", "Celebrity Sports Host"]],
    ["What did The Chair monitor to control when contestants could answer?", "Their heart rate", ["Their breathing rate", "Their body temperature", "Their blood pressure"], "Easy", "The Chair", ["Their heart rate", "2002 BBC Quiz", "Pulse Monitoring", "Contestant Physiology", "Answering Restrictions", "Biometric Game", "Game Clock"]],
    ["What was the heart-rate limit on The Chair called?", "The redline", ["The danger point", "The ceiling", "The cut-off"], "Medium", "The Chair", ["The redline", "2002 BBC Quiz", "Redline", "Pulse Threshold", "Health Monitor", "Contestant Control", "Game Rule"]],
    ["What happened to a contestant's money when their pulse exceeded the redline on The Chair?", "It began to drain away", ["It immediately doubled", "It was frozen safely", "It went to another player"], "Easy", "The Chair", ["It began to drain away", "2002 BBC Quiz", "Redline Penalty", "Cash Drain", "Elevated Pulse", "Money Countdown", "Question Stakes"]],
    ["What was the rapid-fire round designed to raise a player's pulse called on The Chair?", "Heartstopper", ["Pulse Check", "Fast Track", "Pressure Point"], "Medium", "The Chair", ["Heartstopper", "2002 BBC Quiz", "Pulse Raising Round", "Rapid Fire Questions", "Stress Test", "Heartbeat Challenge", "Timed Round"]],
    ["What was the one-use prize safety net on The Chair called?", "Stabilizer", ["Lifeline", "Safeguard", "Heartbeat Bonus"], "Medium", "The Chair", ["Stabilizer", "2002 BBC Quiz", "Protecting Winnings", "Single Use Safety Net", "Prize Protection", "Strategic Choice", "Money Guarantee"]],
    ["What was the maximum cash prize available on the British version of The Chair?", "£50,000", ["£25,000", "£100,000", "£250,000"], "Medium", "The Chair", ["£50,000", "2002 BBC Quiz", "Fifty Thousand Pounds", "Maximum Prize", "British Edition", "Cash Jackpot", "Prize Ladder"]],

    // IN IT TO WIN IT
    ["Who hosted the BBC lottery quiz In It to Win It?", "Dale Winton", ["Eamonn Holmes", "Nick Knowles", "Simon Mayo"], "Easy", "In It to Win It", ["Dale Winton", "BBC National Lottery", "Dale Winton Presenter", "Original Host", "Saturday Lottery Quiz", "Television Presenter", "Prize Money"]],
    ["How many contestants took part in a regular In It to Win It game?", "Five", ["Three", "Four", "Six"], "Medium", "In It to Win It", ["Five", "BBC National Lottery", "Five Contestants", "Opening Line Up", "Player Count", "Winner Selection", "Saturday Game"]],
    ["What was the name of the row of seats where In It to Win It contestants could compete for the jackpot?", "Winner’s Row", ["The Money Bench", "The Gold Zone", "Champions Corner"], "Medium", "In It to Win It", ["Winner's Row", "BBC National Lottery", "Winners Row", "Prize Seats", "Eligible Players", "Cash Question Zone", "Studio Arrangement"]],

    // THE VAULT
    ["What were the contestants who sold answers to players on The Vault called?", "Brokers", ["Traders", "Bankers", "Dealers"], "Medium", "The Vault", ["Brokers", "2002 ITV Quiz", "Answer Brokers", "Selling Answers", "Studio Contestants", "Vault Contestants", "Cash Offers"]],
    ["How many studio contestants competed in each show of the first series of The Vault?", "Seven", ["Five", "Six", "Eight"], "Medium", "The Vault", ["Seven", "2002 ITV Quiz", "Seven Contestants", "First Series", "Opening Line Up", "Studio Player Count", "ITV Format"]],

    // IN IT TO WIN IT
    ["How much did a correct question add to the prize fund in In It to Win It?", "£5,000", ["£1,000", "£2,000", "£10,000"], "Medium", "In It to Win It", ["£5,000", "BBC National Lottery", "Five Thousand Pounds", "Correct Answer", "Prize Fund Increase", "Cash Builder", "Money Question"]],

    // THE VAULT
    ["What was the starting rollover jackpot on ITV's The Vault?", "£100,000", ["£25,000", "£50,000", "£250,000"], "Medium", "The Vault", ["£100,000", "2002 ITV Quiz", "One Hundred Thousand Pounds", "Starting Rollover", "Jackpot Increases", "Prize Fund", "ITV Money Quiz"]],

    // IN IT TO WIN IT
    ["Where did an In It to Win It contestant go after giving a wrong answer?", "The Red Area", ["The Isolation Booth", "The Waiting Room", "The Silver Zone"], "Easy", "In It to Win It", ["The Red Area", "BBC National Lottery", "Red Area", "Wrong Answer", "Player Penalty", "Contestant Movement", "Return Challenge"]],
    ["What was the maximum individual prize for a perfect game of In It to Win It?", "£100,000", ["£25,000", "£50,000", "£250,000"], "Medium", "In It to Win It", ["£100,000", "BBC National Lottery", "Perfect Game", "Top Prize", "Twenty Correct Answers", "Maximum Jackpot", "Final Question"]],
    ["What happened when more than one In It to Win It finalist correctly answered the last question?", "They shared the prize fund equally", ["Only the fastest won", "The total doubled", "They faced a sudden-death question"], "Easy", "In It to Win It", ["They shared the prize fund equally", "BBC National Lottery", "Final Question", "Shared Winnings", "Prize Fund Split", "Multiple Winners", "Equal Shares"]],

    // WINNING LINES
    ["What type of answers were normally required in Winning Lines' opening rounds?", "Numerical answers", ["Song titles", "Celebrity names", "Colours"], "Easy", "Winning Lines", ["Numerical answers", "BBC National Lottery", "Numbers Quiz", "Opening Rounds", "Numeric Quiz Questions", "Contestant Selection", "Question Format"]],
    ["What was the head-to-head second round of Winning Lines called?", "Looking After Number One", ["The Fastest Finger", "The Golden Line", "Double Trouble"], "Medium", "Winning Lines", ["Looking After Number One", "BBC National Lottery", "Named Second Round", "Second Round", "Head To Head", "National Lottery", "Round Name"]],

    // IDENTITY
    ["Which American singer presented the BBC quiz Identity?", "Donny Osmond", ["David Cassidy", "Cliff Richard", "Michael Bolton"], "Easy", "Identity", ["Donny Osmond", "BBC Two 2007", "Donny Osmond Host", "American Singer", "Television Presenter", "British Adaptation", "Identity Game"]],

    // WINNING LINES
    ["How many questions did a Winning Lines finalist need to solve on the Wonderwall to earn the top holiday?", "Twenty", ["Ten", "Fifteen", "Twenty-five"], "Medium", "Winning Lines", ["Twenty", "BBC National Lottery", "Wonderwall", "Final Challenge", "Twenty Correct Answers", "Round The World Prize", "Time Pressure"]],

    // IDENTITY
    ["On which BBC channel was the quiz Identity shown?", "BBC Two", ["BBC One", "BBC Three", "BBC Four"], "Medium", "Identity", ["BBC Two", "BBC Two 2007", "BBC Two Broadcast", "Original Channel", "Programme Network", "2007 Series", "British Quiz"]],
    ["How many strangers were presented to the contestant on Identity?", "Twelve", ["Eight", "Ten", "Sixteen"], "Medium", "Identity", ["Twelve", "BBC Two 2007", "Twelve Strangers", "Onstage People", "Contestant Line Up", "Identity Matching", "Observation Game"]],
    ["What did contestants have to match to the people standing on the stage in Identity?", "Their identities or descriptions", ["Their singing voices", "Their bank balances", "Their secret passwords"], "Easy", "Identity", ["Their identities or descriptions", "BBC Two 2007", "Identity Clues", "Occupation Guessing", "Match Descriptions", "Strangers On Stage", "Deduction Quiz"]],
    ["What happened on Identity when a player matched an identity to the wrong person?", "They moved down the money ladder", ["They automatically won", "They swapped places with a stranger", "The number of strangers doubled"], "Medium", "Identity", ["They moved down the money ladder", "BBC Two 2007", "Wrong Match", "Money Ladder", "Prize Reduction", "Contestant Error", "Scoring Rules"]],

    // THE PEOPLE VERSUS
    ["How many questions were offered in each subject round of the original The People Versus?", "Five", ["Three", "Four", "Six"], "Medium", "The People Versus", ["Five", "ITV 2000s Quiz", "Five Questions", "Subject Rounds", "Original Series", "Quiz Structure", "Specialist Knowledge"]],
    ["What could a contestant replace one of their questions with by using a 'flip' on The People Versus?", "A different question", ["A cash prize", "A free pass to the final", "An audience vote"], "Medium", "The People Versus", ["A different question", "ITV 2000s Quiz", "Flip Lifeline", "Replace Question", "Specialist Subject", "Contestant Help", "Quiz Strategy"]],
    ["Who took over a contestant's seat after that person was knocked out on the original The People Versus?", "The person who submitted the defeating question", ["The presenter's chosen reserve", "The oldest audience member", "The highest-scoring previous player"], "Hard", "The People Versus", ["Question Submitter Answer", "ITV 2000s Quiz", "Question Submitter", "Take Contestant Seat", "Original Series", "Player Knockout", "Public Participation"]],

    // GREED
    ["Which American talk-show host presented the British quiz Greed?", "Jerry Springer", ["Ricki Lake", "Montel Williams", "Maury Povich"], "Easy", "Greed", ["Jerry Springer", "Channel 5 Quiz", "Jerry Springer Presenter", "American Talk Show Host", "British Version", "Celebrity Presenter", "Big Money Quiz"]],
    ["Which British channel broadcast the Jerry Springer quiz Greed?", "Channel 5", ["BBC One", "ITV", "Channel 4"], "Medium", "Greed", ["Channel 5", "Channel 5 Quiz", "Channel 5 Broadcast", "Original Network", "Commercial Broadcasting", "Jerry Springer Series", "2001 Programme"]],
    ["What was the maximum jackpot advertised on the British version of Greed?", "£1 million", ["£100,000", "£250,000", "£500,000"], "Medium", "Greed", ["£1 million", "Channel 5 Quiz", "One Million Pounds", "Maximum Jackpot", "Headline Prize", "Big Money Format", "British Edition"]],
    ["How many hopefuls initially came out to play Greed before the opening elimination?", "Six", ["Four", "Five", "Eight"], "Medium", "Greed", ["Six", "Channel 5 Quiz", "Six Hopefuls", "Initial Contestants", "Opening Elimination", "Player Count", "Team Selection"]],
    ["Who had the final say over the team's answers on Greed?", "The team leader", ["The audience", "The youngest contestant", "The announcer"], "Easy", "Greed", ["The team leader", "Channel 5 Quiz", "Team Leader", "Final Decision", "Team Answers", "Group Strategy", "Contestant Authority"]],
    ["What was the challenge feature allowing one Greed player to take on a teammate called?", "The Terminator", ["The Eliminator", "The Challenger", "The Showdown"], "Medium", "Greed", ["The Terminator", "Channel 5 Quiz", "Challenge Teammate", "Teammate Duel", "Sudden Death", "Challenge Feature", "Cash Shares"]],

    // WHITTLE
    ["Which comedian presented the Channel 5 quiz Whittle?", "Tim Vine", ["Lee Mack", "Milton Jones", "Harry Hill"], "Medium", "Whittle", ["Tim Vine", "Channel 5 1997", "Tim Vine Presenter", "Comedian Host", "1997 Series", "Audience Quiz", "British Comedy"]],
    ["Approximately how many audience members started each game of Whittle?", "One hundred", ["Twenty", "Fifty", "Two hundred"], "Medium", "Whittle", ["One hundred", "Channel 5 1997", "One Hundred Players", "Audience Participation", "Opening Line Up", "Large Contestant Group", "Studio Audience"]],
    ["How did Whittle contestants register their multiple-choice answers?", "Using keypads", ["Writing on slates", "Standing in coloured zones", "Calling out together"], "Easy", "Whittle", ["Using keypads", "Channel 5 1997", "Electronic Keypads", "Multiple Choice", "Contestant Voting", "Answer Input", "Quiz Equipment"]],
    ["How long did Whittle players normally have to answer each multiple-choice question?", "Ten seconds", ["Five seconds", "Twenty seconds", "Thirty seconds"], "Medium", "Whittle", ["Ten seconds", "Channel 5 1997", "Quiz Clock", "Question Timer", "Rapid Answers", "Time Limit", "Audience Quiz"]],
    ["How many players progressed to the second half of Whittle?", "Ten", ["Five", "Eight", "Twelve"], "Medium", "Whittle", ["Ten", "Channel 5 1997", "Last Ten Players", "Second Half", "Contestant Reduction", "Elimination Progress", "Quiz Stages"]],
    ["What did Whittle's final challenge ask the winner to do with four items?", "Put them in the correct order", ["Find a rhyme for each", "Memorise their prices", "Make an anagram from them"], "Medium", "Whittle", ["Put them in the correct order", "Channel 5 1997", "Four Item Ordering", "Final Challenge", "Sequence Puzzle", "Winning Player", "Knowledge Test"]],

    // EVERYBODY'S EQUAL
    ["Who hosted ITV's audience-wide quiz Everybody's Equal?", "Chris Tarrant", ["Michael Aspel", "Les Dennis", "Bob Monkhouse"], "Easy", "Everybody's Equal", ["Chris Tarrant", "ITV 1989 Quiz", "Chris Tarrant Presenter", "Original Host", "1989 Series", "Large Audience Quiz", "British Broadcaster"]],
    ["How many studio players usually took part in Everybody's Equal?", "Two hundred", ["Fifty", "One hundred", "Three hundred"], "Medium", "Everybody's Equal", ["Two hundred", "ITV 1989 Quiz", "Two Hundred Players", "Studio Audience", "Contestant Count", "Mass Participation", "Quiz Format"]],
    ["What did the studio players use to answer questions on Everybody's Equal?", "Electronic keypads", ["Whiteboards", "Coloured flags", "Handheld microphones"], "Easy", "Everybody's Equal", ["Electronic keypads", "ITV 1989 Quiz", "Keypad Competition", "Answer Selection", "Studio Voting", "Multiple Choice Questions", "Quiz Technology"]],
    ["What happened to a player who chose a wrong answer on Everybody's Equal?", "They were eliminated", ["They lost one point", "They joined another team", "They had to change seats"], "Easy", "Everybody's Equal", ["They were eliminated", "ITV 1989 Quiz", "Wrong Answer", "Player Elimination", "Survival Game", "Knockout Rules", "Audience Contestants"]],
    ["How many players or fewer were left for the second round of Everybody's Equal?", "Ten", ["Four", "Six", "Twenty"], "Medium", "Everybody's Equal", ["Ten", "ITV 1989 Quiz", "Ten Remaining Players", "Second Round", "Elimination Stage", "Top Ten", "Contestant Survival"]],
    ["What name was given to the four featured potential winners on Everybody's Equal?", "Four to Follow", ["Fantastic Four", "Top Four", "Four in Front"], "Medium", "Everybody's Equal", ["Four to Follow", "ITV 1989 Quiz", "Four Featured Players", "Featured Contestants", "Audience Highlights", "Player Predictions", "Onscreen Personalities"]],

    // THE MOMENT OF TRUTH
    ["Who presented the ITV family challenge show The Moment of Truth?", "Cilla Black", ["Davina McCall", "Ulrika Jonsson", "Carol Smillie"], "Easy", "The Moment of Truth", ["Cilla Black", "ITV 1998 Show", "Cilla Black Presenter", "Family Entertainment", "ITV Host", "Challenge Show", "Original Host"]],
    ["What was the catalogue of family prizes called on The Moment of Truth?", "The Dream Directory", ["The Prize Pantry", "The Wish Book", "The Gift List"], "Medium", "The Moment of Truth", ["The Dream Directory", "ITV 1998 Show", "Dream Directory", "Family Prizes", "Prize Catalogue", "Wish List", "Reward Selection"]],
    ["How long did families originally have to practise their challenge for The Moment of Truth?", "Seven days", ["One day", "Three days", "Fourteen days"], "Medium", "The Moment of Truth", ["Seven days", "ITV 1998 Show", "Seven Days Practice", "Weekly Preparation", "Family Task", "Rehearsed Challenge", "Time Available"]],
    ["Who normally performed the big rehearsed task for each family on The Moment of Truth?", "One family member", ["The whole studio audience", "The presenter", "A pair of professional performers"], "Easy", "The Moment of Truth", ["One family member", "ITV 1998 Show", "Family Representative", "Single Performer", "Challenge Preparation", "Prize Attempt", "Family Competition"]],
    ["What footage showed how families prepared for their Moment of Truth challenge?", "A video diary", ["A live webcam", "A news bulletin", "A cartoon sequence"], "Easy", "The Moment of Truth", ["A video diary", "ITV 1998 Show", "Video Diary", "Family Rehearsals", "Behind The Scenes", "Preparation Footage", "Television Feature"]],
    ["Which country originated the format that became Cilla Black's The Moment of Truth?", "Japan", ["United States", "Australia", "Canada"], "Medium", "The Moment of Truth", ["Japan", "ITV 1998 Show", "Japanese Original", "Happy Family Plan", "International Adaptation", "Format Origins", "Japanese Television"]],

    // SHAFTED
    ["Who hosted ITV's short-lived quiz Shafted?", "Robert Kilroy-Silk", ["Jeremy Kyle", "Richard Madeley", "Matthew Kelly"], "Medium", "Shafted", ["Robert Kilroy-Silk", "ITV 2001 Quiz", "Robert Kilroy Silk", "Television Host", "Original Presenter", "Short Lived Quiz", "British Politics Personality"]],
    ["Which two words described the final choice on Shafted?", "Share or shaft", ["Stick or twist", "Deal or no deal", "Pass or play"], "Easy", "Shafted", ["Share or shaft", "ITV 2001 Quiz", "Prisoners Dilemma Finale", "Final Choice", "Trust And Betrayal", "Cash Division", "Contestant Strategy"]],
    ["How many contestants started each episode of Shafted before the initial elimination?", "Six", ["Four", "Five", "Eight"], "Medium", "Shafted", ["Six", "ITV 2001 Quiz", "Six Contestants", "Opening Line Up", "Initial Elimination", "Player Count", "Show Format"]],
    ["What did Shafted contestants gamble on before hearing a question in full?", "How much money to stake", ["Which host to face", "How many lifelines to lose", "Whether to leave the studio"], "Medium", "Shafted", ["How much money to stake", "ITV 2001 Quiz", "Money Stakes", "Before Full Question", "Risk Decision", "Contestant Gambling", "Wagering Round"]],
    ["What famous game-theory dilemma did Shafted's final decision resemble?", "The prisoner's dilemma", ["The Monty Hall problem", "The travelling salesman problem", "The birthday paradox"], "Hard", "Shafted", ["The prisoner's dilemma", "ITV 2001 Quiz", "Prisoners Dilemma", "Game Theory", "Cooperation Versus Betrayal", "Final Decision", "Strategic Conflict"]],
    ["What phrase did Robert Kilroy-Silk use when eliminating contestants on Shafted?", "You're off the show!", ["You are the weakest link!", "You've been bankrupted!", "You've lost the plot!"], "Medium", "Shafted", ["You're off the show!", "ITV 2001 Quiz", "Youre Off The Show", "Elimination Catchphrase", "Presenter Saying", "Quiz Exit", "Contestant Dismissal"]],

    // IDENTITY
    ["What was the highest cash prize on the British version of Identity?", "£10,000", ["£5,000", "£25,000", "£100,000"], "Medium", "Identity", ["£10,000", "BBC Two 2007", "Ten Thousand Pounds", "Maximum Prize", "Money Ladder", "British Adaptation", "Game Show Jackpot"]],
    ["From which country was the British quiz Identity adapted?", "United States", ["Germany", "France", "Australia"], "Medium", "Identity", ["United States", "BBC Two 2007", "American Format", "US Television Origins", "International Remake", "Adapted Game Show", "BBC Version"]],

    // JET SET
    ["Who hosted the BBC National Lottery game show Jet Set?", "Eamonn Holmes", ["Dale Winton", "Nick Knowles", "Phillip Schofield"], "Easy", "Jet Set", ["Eamonn Holmes", "BBC National Lottery", "Eamonn Holmes Presenter", "National Lottery Host", "2001 Launch", "British Presenter", "Travel Quiz"]],
    ["What kind of prize could the winner of Jet Set enjoy?", "A week of luxury travel", ["A new car", "A recording contract", "A holiday home"], "Easy", "Jet Set", ["A week of luxury travel", "BBC National Lottery", "Luxury Holiday", "Travel Reward", "One Week Trip", "Winning Contestant", "International Destinations"]],
    ["How did the reigning Jet Set champion compete against the studio challenger?", "By satellite from their holiday destination", ["Through a recorded audio message", "In a different studio in London", "By selecting a proxy player"], "Medium", "Jet Set", ["By satellite from their holiday destination", "BBC National Lottery", "Satellite Link", "Reigning Champion", "Studio Challenger", "Overseas Broadcast", "Final Head To Head"]],

    // 1000 HEARTBEATS
    ["Which of these puzzle types featured on 1000 Heartbeats?", "Anagrams", ["Dartboard scoring", "Charades", "Jigsaw construction"], "Medium", "1000 Heartbeats", ["Anagrams", "ITV 2015 Quiz", "Anagram Puzzle", "Word Puzzle", "Letter Rearrangement", "Quiz Challenge", "Game Round"]],

    // JET SET
    ["What did Jet Set finalists predict about the next National Lottery ball?", "Whether its number would be higher or lower", ["Whether it was red or blue", "Whether it had been used before", "Whether it was an even-numbered machine"], "Medium", "Jet Set", ["Whether its number would be higher or lower", "BBC National Lottery", "Higher Or Lower", "Lottery Balls", "Final Round", "Number Comparison", "Winning Choice"]],
    ["Which national draw featured as part of Jet Set?", "The National Lottery", ["Premium Bonds", "The Football Pools", "The Postcode Lottery"], "Easy", "Jet Set", ["The National Lottery", "BBC National Lottery", "Saturday Lotto", "BBC One Lottery Draw", "Saturday Programme", "National Draw", "Lottery Game"]],
    ["What name did Jet Set take for its final series in 2007?", "Jet Set 2012", ["Jet Set World Cup", "Jet Set International", "Jet Set Gold"], "Medium", "Jet Set", ["Jet Set 2012", "BBC National Lottery", "Retitled Series", "2007 Final Series", "Programme Retitle", "Olympic Destinations", "Final Run"]],

    // THE BANK JOB
    ["How many contestants competed in a normal daily edition of The Bank Job?", "Four", ["Two", "Three", "Six"], "Medium", "The Bank Job", ["Four", "Channel 4 2012", "Four Contestants", "Daily Episode", "Opening Line Up", "Player Count", "Bank Vault Setting"]],

    // JET SET
    ["How many contestants lined up in Jet Set Departure Lounge, the midweek spin-off?", "Nine", ["Five", "Seven", "Twelve"], "Medium", "Jet Set", ["Nine", "BBC National Lottery", "Nine Contestants", "Departure Lounge", "Midweek Spin Off", "Qualifier Round", "Contestant Line Up"]],

    // THE BANK JOB
    ["How many daily winners returned to compete in The Bank Job's weekly final?", "Five", ["Three", "Four", "Six"], "Medium", "The Bank Job", ["Five", "Channel 4 2012", "Five Daily Winners", "Weekly Final", "Returning Contestants", "Qualification", "Weekly Championship"]],

    // THE 21ST QUESTION
    ["Who presented ITV's quiz The 21st Question?", "Gethin Jones", ["Matt Allwright", "Sean Fletcher", "Jeff Stelling"], "Medium", "The 21st Question", ["Gethin Jones", "ITV 2014 Quiz", "Gethin Jones Presenter", "ITV Daytime", "2014 Series", "Original Host", "Quiz Presenter"]],
    ["How many contestants started a game of The 21st Question?", "Eleven", ["Seven", "Nine", "Thirteen"], "Medium", "The 21st Question", ["Eleven", "ITV 2014 Quiz", "Eleven Contestants", "Starting Players", "Opening Round", "Contestant Count", "Competition Format"]],
    ["What was the central position contestants tried to hold on The 21st Question?", "The Power Spot", ["The Captain's Chair", "The Golden Circle", "The Safe Zone"], "Medium", "The 21st Question", ["The Power Spot", "ITV 2014 Quiz", "Power Spot", "Central Position", "Player Control", "Head To Head Duels", "Studio Arrangement"]],
    ["What could a challenger do by answering correctly when the central player was wrong on The 21st Question?", "Take the central player's place", ["Win the jackpot immediately", "Eliminate every other challenger", "Skip the final question"], "Medium", "The 21st Question", ["Take the central player's place", "ITV 2014 Quiz", "Challenger Victory", "Central Player Error", "Power Spot Change", "Head To Head", "Contestant Replacement"]],
    ["What type of task formed the final, titular question on The 21st Question?", "Naming entries from a top-ten list", ["Solving a cryptic crossword", "Memorising a sequence of lights", "Guessing a celebrity's voice"], "Medium", "The 21st Question", ["Naming entries from a top-ten list", "ITV 2014 Quiz", "Top Ten List", "Twenty First Question", "Final Challenge", "List Recall", "Final Prize"]],
    ["How many valid answers were first requested in The 21st Question final to win half the pot?", "Three", ["Two", "Four", "Five"], "Medium", "The 21st Question", ["Three", "ITV 2014 Quiz", "Three Valid Answers", "Half The Pot", "Endgame First Stage", "Prize Threshold", "List Question"]],

    // 24 HOUR QUIZ
    ["Which former EastEnders actor presented ITV's 24 Hour Quiz?", "Shaun Williamson", ["Dean Gaffney", "Adam Woodyatt", "John Altman"], "Medium", "24 Hour Quiz", ["Shaun Williamson", "ITV 2004 Quiz", "Shaun Williamson Presenter", "EastEnders Actor", "Barry Evans", "Original Host", "2004 ITV"]],
    ["Who presented the late-night editions of 24 Hour Quiz?", "Matt Brown", ["Rob Beckett", "Matt Baker", "Mark Wright"], "Hard", "24 Hour Quiz", ["Matt Brown", "ITV 2004 Quiz", "Matt Brown Presenter", "Late Night Edition", "Additional Host", "ITV2 Broadcast", "2004 Programme"]],
    ["What was the small living space for contestants on 24 Hour Quiz called?", "The Quiz Pod", ["The Question House", "The Brain Box", "The Challenge Cell"], "Medium", "24 Hour Quiz", ["The Quiz Pod", "ITV 2004 Quiz", "Quiz Pod", "Contestant Living Space", "Reality Quiz", "Confined Accommodation", "Game Show Set"]],
    ["For roughly how many hours a day were contestants questioned on 24 Hour Quiz?", "Sixteen", ["Eight", "Twelve", "Twenty-four"], "Medium", "24 Hour Quiz", ["Sixteen", "ITV 2004 Quiz", "Sixteen Hours Daily", "Question Marathon", "Daily Schedule", "Long Duration", "Continuous Contest"]],
    ["How much were contestants usually paid for a correct question on 24 Hour Quiz?", "£1", ["10p", "£5", "£10"], "Medium", "24 Hour Quiz", ["£1", "ITV 2004 Quiz", "One Pound Per Answer", "Correct Question", "Small Cash Reward", "Daily Earnings", "Prize Mechanics"]],
    ["Which future Pointless presenter devised the format for 24 Hour Quiz?", "Richard Osman", ["Alexander Armstrong", "Bradley Walsh", "Stephen Fry"], "Medium", "24 Hour Quiz", ["Richard Osman", "ITV 2004 Quiz", "Richard Osman Creator", "Original Format", "Quiz Show Developer", "Future Pointless Host", "Television Production"]],

    // THE WAITING GAME
    ["Which comedian and presenter hosted the BBC quiz The Waiting Game?", "Ruby Wax", ["Jo Brand", "Jenny Eclair", "Victoria Wood"], "Medium", "The Waiting Game", ["Ruby Wax", "BBC Quiz Show", "Ruby Wax Presenter", "Comedian Host", "BBC Quiz", "Original Presenter", "Comedy Entertainment"]],
    ["How many couples competed on The Waiting Game?", "Three", ["Two", "Four", "Five"], "Medium", "The Waiting Game", ["Three", "BBC Quiz Show", "Three Couples", "Team Contestants", "Player Count", "Partner Quiz", "Opening Line Up"]],
    ["What happened to the points available the longer a player waited to buzz on The Waiting Game?", "They increased", ["They decreased", "They stayed the same", "They were reset to zero"], "Easy", "The Waiting Game", ["They increased", "BBC Quiz Show", "Rising Points", "Late Buzz", "Timing Strategy", "Delayed Response", "Score Multiplier"]],
    ["Who had to provide the answer when one half of a couple buzzed on The Waiting Game?", "Their partner", ["The person who buzzed", "The presenter", "A randomly selected rival"], "Medium", "The Waiting Game", ["Their partner", "BBC Quiz Show", "Partner Answers", "Buzzer Rules", "Couples Game", "Team Cooperation", "Quiz Mechanic"]],
    ["How many seconds could a player wait before a question timed out on The Waiting Game?", "Ten", ["Five", "Fifteen", "Thirty"], "Medium", "The Waiting Game", ["Ten", "BBC Quiz Show", "Ten Seconds", "Maximum Wait", "Question Time Limit", "Buzzer Countdown", "Scoring Rules"]],
    ["What happened to the points if the buzzing player's partner answered wrongly on The Waiting Game?", "They went to the other couples", ["They doubled for that team", "They were carried to the next show", "They were given to the studio audience"], "Medium", "The Waiting Game", ["They went to the other couples", "BBC Quiz Show", "Opponent Points", "Wrong Answer Penalty", "Point Transfer", "Contestant Couples", "Game Scoring"]],

    // THE OTHER HALF
    ["Who presented the BBC relationship game show The Other Half?", "Dale Winton", ["Cilla Black", "Les Dennis", "Graham Norton"], "Easy", "The Other Half", ["Dale Winton", "BBC 1997 Show", "Dale Winton Presenter", "BBC Relationship Game", "Original Host", "1997 Premiere", "BBC One Broadcasting"]],
    ["What did players try to identify on The Other Half?", "Which person was someone's real partner", ["Who had the highest salary", "Who was secretly a celebrity", "Which contestant was oldest"], "Easy", "The Other Half", ["Which person was someone's real partner", "BBC 1997 Show", "Real Life Partner", "Relationship Guessing", "Impostors", "Identity Challenge", "Couples Game"]],
    ["How many possible partners were presented for each guessing game on The Other Half?", "Four", ["Two", "Three", "Six"], "Medium", "The Other Half", ["Four", "BBC 1997 Show", "Four Possible Partners", "Guessing Round", "Contestant Count", "Partner Identities", "Game Format"]],
    ["What did the genuine partner have to do while the impostors lied on The Other Half?", "Tell the truth", ["Remain silent", "Leave the studio", "Answer only with gestures"], "Medium", "The Other Half", ["Tell the truth", "BBC 1997 Show", "Truthful Partner", "Impostors Lie", "Real Couple", "Honesty Test", "Identity Puzzle"]],
    ["What physical gesture formed part of the identity test on The Other Half?", "Kissing the potential partners", ["Shaking hands with the presenter", "Dancing with a stranger", "Exchanging rings"], "Medium", "The Other Half", ["Kissing the potential partners", "BBC 1997 Show", "Kissing Test", "Body Language", "Potential Partners", "Relationship Clues", "Physical Challenge"]],
    ["What did contestants identify from clues in The Other Half's semi-final quiz?", "Famous couples", ["Capital cities", "Pop songs", "Food ingredients"], "Medium", "The Other Half", ["Famous couples", "BBC 1997 Show", "Celebrity Couples", "Semifinal Quiz", "Celebrity Pairs", "Relationship Trivia", "Clue Based Round"]],

    // TALKING TELEPHONE NUMBERS
    ["Who was the main presenter of ITV's Talking Telephone Numbers?", "Phillip Schofield", ["Chris Tarrant", "Noel Edmonds", "Michael Barrymore"], "Easy", "Talking Telephone Numbers", ["Phillip Schofield", "ITV 1994 Show", "Phillip Schofield Presenter", "ITV Host", "1994 Debut", "Telephone Quiz", "Original Broadcast"]],
    ["Who co-presented the earlier series of Talking Telephone Numbers with Phillip Schofield?", "Emma Forbes", ["Carol Smillie", "Kirsty Young", "Ulrika Jonsson"], "Medium", "Talking Telephone Numbers", ["Emma Forbes", "ITV 1994 Show", "Emma Forbes Co Host", "Early Series", "Presenter Partnership", "ITV 1990s", "Host Identity"]],
    ["Who replaced Emma Forbes as co-presenter of Talking Telephone Numbers in its final series?", "Claudia Winkleman", ["Sara Cox", "Tess Daly", "Kate Thornton"], "Medium", "Talking Telephone Numbers", ["Claudia Winkleman", "ITV 1994 Show", "New Presenter", "Final Series", "1997 Replacement", "Co Presenter", "Host Succession"]],
    ["Which part of viewers' phone numbers had to match the numbers drawn on Talking Telephone Numbers?", "The last five digits", ["The first three digits", "Only the area code", "Every digit including the code"], "Medium", "Talking Telephone Numbers", ["The last five digits", "ITV 1994 Show", "Last Five Digits", "Phone Numbers", "Audience Call In", "Number Matching", "Viewer Participation"]],
    ["What kind of questions were callers asked on Talking Telephone Numbers?", "Number-related questions", ["Only spelling questions", "Only music questions", "Only geography questions"], "Easy", "Talking Telephone Numbers", ["Number-related questions", "ITV 1994 Show", "Number Related Questions", "Callers Quiz", "Telephone Contestants", "Numerical Trivia", "Prize Question"]],
    ["What was the name of the dog mascot seen on Talking Telephone Numbers?", "Sniff", ["Basil", "Noddy", "Buster"], "Medium", "Talking Telephone Numbers", ["Sniff", "ITV 1994 Show", "Sniff The Dog", "Dog Mascot", "Programme Character", "Television Mascot", "ITV Entertainment"]],
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, programme, specificTags], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(5704 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['British Television', 'Quiz Shows', programme, ...specificTags],
        dailyEligible: true
    };
});

module.exports = questions;
