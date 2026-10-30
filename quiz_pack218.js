// quiz_pack218.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British quiz and game shows - further adult formats
// 100 questions: tv_5604 to tv_5703
// Tagging audit: 44 repeated questions replaced; two minor factual wording fixes.
// Keep quiz_bank.js unchanged until the end of the evening.

const facts = [

    // 500 QUESTIONS
    ["Who hosted ITV's demanding quiz 500 Questions?", "Giles Coren", ["Richard Osman", "John Humphrys", "Jeremy Vine"], "Medium", "500 Questions", ["Giles Coren", "ITV 2016", "Quiz Presenter", "Original Host", "General Knowledge", "Television Broadcaster", "British Journalist"]],
    ["How many wrong answers in succession eliminated a contestant on 500 Questions?", "Three", ["Two", "Four", "Five"], "Easy", "500 Questions", ["Three Wrong In A Row", "Elimination Rule", "Consecutive Errors", "Quiz Streak", "Main Player", "Survival Challenge", "Game Over"]],
    ["How much time did contestants normally have to answer a question on 500 Questions?", "Five seconds", ["Ten seconds", "Fifteen seconds", "Thirty seconds"], "Medium", "500 Questions", ["Five Seconds", "Question Timer", "Fast Answers", "Timed General Knowledge", "Game Format", "Rapid Recall", "Contestant Pressure"]],
    ["How much was added to the bank for a correct answer on ITV's 500 Questions?", "£500", ["£100", "£250", "£1,000"], "Medium", "500 Questions", ["Five Hundred Pounds", "Correct Answer Reward", "Cash Bank", "Prize Scoring", "Winning Money", "General Knowledge", "Question Value"]],

    // THE COLOUR OF MONEY
    ["At what rate did a selected cash machine count upwards on The Colour of Money?", "£1,000 per second", ["£100 per second", "£500 per second", "£2,000 per second"], "Medium", "The Colour of Money", ["One Thousand Pounds Per Second", "Cash Counting Rate", "Chosen Machine", "Money Counter", "Hidden Machine Limit", "Game Rules", "Time Pressure"]],

    // 500 QUESTIONS
    ["When could a challenger choose the next category on 500 Questions?", "After the main contestant got two wrong in a row", ["After every correct answer", "Only after a Lightning round", "When the main contestant had banked £5,000"], "Medium", "500 Questions", ["Two Consecutive Wrongs", "Challenger Choice", "Category Selection", "Quiz Tactics", "Opponent Decision", "Main Contestant", "Game Rules"]],

    // THE COLOUR OF MONEY
    ["What cash figure did contestants need to reach or exceed to win on The Colour of Money?", "Their cash target", ["The highest machine value", "The average machine value", "The presenter's secret total"], "Easy", "The Colour of Money", ["Cash Target", "Win Condition", "Machine Totals", "Minimum Banked Amount", "Contestant Goal", "Prize Threshold", "Cash Accumulation"]],

    // TWO TRIBES
    ["Who presented the BBC Two quiz Two Tribes?", "Richard Osman", ["Alexander Armstrong", "Ben Shephard", "Jeremy Vine"], "Easy", "Two Tribes", ["Richard Osman", "BBC Two", "2014 Launch", "Game Show Host", "Original Presenter", "General Knowledge", "British Broadcaster"]],
    ["What divided players into teams on Two Tribes?", "Their answers to personal yes-or-no statements", ["Their scores in a spelling test", "Their ages", "Their chosen specialist subjects"], "Easy", "Two Tribes", ["Yes Or No Statements", "Personal Facts", "Team Division", "Tribe Formation", "Contestant Characteristics", "Group Quiz", "Programme Mechanism"]],
    ["How many contestants began a regular game of Two Tribes?", "Seven", ["Five", "Six", "Eight"], "Medium", "Two Tribes", ["Seven Players", "Contestant Count", "Opening Line Up", "BBC Two", "2014 Format", "Group Competition", "Initial Tribes"]],

    // THE EXIT LIST
    ["How many contestants worked together in each game of The Exit List?", "Two", ["One", "Three", "Four"], "Easy", "The Exit List", ["Two Contestants", "Playing Pair", "Maze Partnership", "Memory Team", "ITV Format", "Question Recall", "Game Participants"]],

    // TWO TRIBES
    ["What happened to the losing tribe after a round on Two Tribes?", "One of its members was eliminated", ["It earned a bonus prize", "It chose a new presenter", "All its members went straight to the final"], "Medium", "Two Tribes", ["Losing Tribe", "One Player Eliminated", "Quiz Defeat", "Surviving Players", "Group Loss", "Team Round", "Elimination Format"]],

    // THE EXIT LIST
    ["What were the special memory-testing rooms on The Exit List called?", "Panic Rooms", ["Trap Rooms", "Memory Vaults", "Bonus Chambers"], "Medium", "The Exit List", ["Panic Rooms", "Special Rooms", "Memory Tests", "Maze Design", "Recall Challenge", "Puzzle Location", "Memory Maze"]],

    // THE FUSE
    ["Which former rugby player hosted ITV's The Fuse?", "Austin Healey", ["Matt Dawson", "Martin Bayfield", "Will Greenwood"], "Medium", "The Fuse", ["Austin Healey", "Rugby Union Player", "ITV Host", "2009 Programme", "Original Presenter", "Sports Personality", "Quiz Presenter"]],
    ["How many contestants began an episode of The Fuse?", "Six", ["Four", "Five", "Eight"], "Medium", "The Fuse", ["Six Contestants", "Player Count", "Team Line Up", "ITV Daytime", "2009 Format", "Quiz Players", "Starting Group"]],
    ["How many subject boxes were available at the beginning of The Fuse?", "Twelve", ["Six", "Eight", "Ten"], "Medium", "The Fuse", ["Twelve Boxes", "Subject Selection", "Category Board", "Prize Amounts", "Starting Setup", "Money Boxes", "General Knowledge"]],
    ["What was the opening team challenge on The Fuse called?", "6 in a Row", ["The Gold Run", "Chain Reaction", "Beat the Clock"], "Medium", "The Fuse", ["Six In A Row", "Opening Challenge", "Consecutive Answers", "Team Cooperation", "Fuse Countdown", "Original Round", "Question Sequence"]],
    ["What happened to a subject box when the fuse ran out before the challenge was completed?", "Its money was lost", ["Its value doubled", "It was saved for the final", "It changed category"], "Medium", "The Fuse", ["Money Lost", "Fuse Burns Out", "Exploding Box", "Subject Category", "Failed Challenge", "Cash Penalty", "Game Mechanic"]],
    ["What was the round in which contestants tried to keep their fuses alight for less time called on The Fuse?", "Burnout", ["Flashpoint", "Meltdown", "Countdown"], "Medium", "The Fuse", ["Burnout", "Lit Fuses", "Timed Round", "Fuse Tactics", "Elimination Contest", "Round Title", "Player Strategy"]],
    ["How many correct answers were needed in The Fuse's final challenge?", "Six", ["Four", "Five", "Eight"], "Medium", "The Fuse", ["Six Correct Answers", "Final Fuse", "Timed Finale", "Cash Multiplier", "General Knowledge", "Winning Prize", "Quiz Endgame"]],

    // BREAK THE SAFE
    ["Who hosted the BBC lottery-linked quiz Break the Safe?", "Nick Knowles", ["Dale Winton", "John Barrowman", "Gethin Jones"], "Easy", "Break the Safe", ["Nick Knowles", "BBC Lottery Quiz", "2013 Debut", "Original Host", "Saturday Evening", "Game Show Presenter", "National Lottery"]],
    ["How many couples took part in each game of Break the Safe?", "Three", ["Two", "Four", "Five"], "Medium", "Break the Safe", ["Three Couples", "Six Players", "Opening Teams", "Partner Game", "Couples Competition", "2013 Format", "Team Count"]],
    ["What was the maximum prize available on Break the Safe?", "£100,000", ["£25,000", "£50,000", "£250,000"], "Medium", "Break the Safe", ["One Hundred Thousand Pounds", "Maximum Prize", "Safe Jackpot", "BBC One", "Final Couple", "Top Winnings", "Cash Stakes"]],
    ["How many locks originally secured the safe on Break the Safe?", "Six", ["Four", "Five", "Eight"], "Medium", "Break the Safe", ["Six Locks", "Safe Security", "Opening Mechanism", "Lock Count", "Final Challenge", "Money Safe", "Combination Puzzle"]],
    ["What happened to the money earned by the surviving teams during Break the Safe?", "It was put into the safe", ["It was paid out immediately", "It went to the studio audience", "It was exchanged for extra questions"], "Medium", "Break the Safe", ["Money Put In Safe", "Surviving Teams", "Earned Prize", "Cash Bank", "Safe Fund", "Team Competition", "Game Rules"]],
    ["What did both members of the final couple need to time correctly to open the safe?", "Pressing their buttons", ["Ringing separate bells", "Turning two numbered dials", "Opening their envelopes"], "Medium", "Break the Safe", ["Button Pressing", "Final Couple", "Synchronised Timing", "Open The Safe", "Final Stage", "Contestant Coordination", "Prize Win"]],

    // THE TIME IT TAKES
    ["Which comedian presented the BBC One game show The Time It Takes?", "Joe Lycett", ["Jason Manford", "Rob Beckett", "Jimmy Carr"], "Easy", "The Time It Takes", ["Joe Lycett", "Comedian Presenter", "BBC One", "2018 Launch", "Original Host", "Celebrity Timers", "British Comedy"]],
    ["Who served as the referee carrying out comic timed tasks on The Time It Takes?", "Alison Hammond", ["Sara Cox", "Claudia Winkleman", "Davina McCall"], "Easy", "The Time It Takes", ["Alison Hammond", "Referee", "Timed Tasks", "Comic Challenges", "Co Host", "BBC One", "Timekeeping"]],
    ["How many contestants started an edition of The Time It Takes?", "Three", ["Two", "Four", "Five"], "Medium", "The Time It Takes", ["Three Contestants", "Opening Line Up", "Individual Players", "General Knowledge", "2018 Format", "Player Count", "Quiz Challengers"]],
    ["What determined how long contestants had to answer questions on The Time It Takes?", "The duration of a chosen unusual task", ["A fixed one-minute clock", "The number of viewers voting", "Their age in seconds"], "Easy", "The Time It Takes", ["Unusual Task", "Chosen Timer", "Answering Time", "Comedy Challenge", "General Knowledge", "Contestant Choice", "Variable Countdown"]],

    // THE EDGE
    ["Which colour marked the longest lane on The Edge?", "Red", ["Green", "Blue", "Yellow"], "Medium", "The Edge", ["Red Lane", "Longest Lane", "Bowling Game", "Lane Colours", "Distance Challenge", "Physical Skill", "BBC Quiz"]],
    ["In the first series of The Edge, what did a danger zone do to a cash section?", "Reduced its value to £1", ["Doubled its value", "Ended the whole game", "Awarded an extra bowl"], "Medium", "The Edge", ["Danger Zone", "One Pound Value", "Cash Section", "Bowling Score", "Money Reduction", "Hazard Area", "Risky Target"]],
    ["How could finalists make the winning Edge larger on The Edge?", "Answer four-part questions correctly", ["Ask the audience to vote", "Trade away an opponent's cash", "Choose a shorter lane"], "Medium", "The Edge", ["Four Part Questions", "Winning Edge", "Larger Target", "Final Challenge", "Bowling Precision", "Correct Answers", "Physical Bonus"]],

    // SMALL FORTUNE
    ["Who hosted ITV's miniature-challenge game show Small Fortune?", "Dermot O'Leary", ["Vernon Kay", "Phillip Schofield", "Stephen Mulhern"], "Easy", "Small Fortune", ["Dermot OLeary", "ITV Presenter", "2019 Launch", "Miniature Challenges", "Original Host", "Entertainment Show", "Game Show Host"]],
    ["Which actor provided the booming 'Big Voice' on Small Fortune?", "Brian Blessed", ["Stephen Fry", "Patrick Stewart", "Tom Baker"], "Medium", "Small Fortune", ["Brian Blessed", "Big Voice", "Voiceover", "Dramatic Narration", "Actor Announcer", "Game Show Sound", "Presenter Support"]],
    ["How many people formed each team on Small Fortune?", "Three", ["Two", "Four", "Five"], "Medium", "Small Fortune", ["Three Team Members", "Team Format", "Contestant Trio", "Miniature Games", "Player Count", "Group Competition", "Qualification"]],
    ["What was unusual about the physical challenges on Small Fortune?", "They took place on miniature models", ["They were played in complete darkness", "They took place underwater", "They were directed entirely by audience votes"], "Easy", "Small Fortune", ["Miniature Models", "Small Scale Tasks", "Physical Accuracy", "Game Props", "Miniature World", "Prize Challenges", "Precision Games"]],

    // DECIMATE
    ["How many possible answers accompanied the questions on Decimate?", "Three", ["Two", "Four", "Five"], "Medium", "Decimate", ["Three Possible Answers", "Multiple Choice", "Decimate Question", "Answer Options", "Quiz Format", "Game Design", "Contestant Choices"]],

    // SMALL FORTUNE
    ["What was the potential maximum cash prize on ITV's Small Fortune?", "£150,000", ["£50,000", "£100,000", "£250,000"], "Medium", "Small Fortune", ["One Hundred Fifty Thousand Pounds", "Maximum Jackpot", "Top Prize", "Team Winnings", "2019 Format", "Cash Reward", "ITV Gameshow"]],

    // DECIMATE
    ["What could the two players on Decimate's substitutes' bench do with their buzzer?", "Override the active player's answer", ["Freeze the host's question", "Skip the final entirely", "Restore every lost segment"], "Medium", "Decimate", ["Substitutes Bench", "Override Buzzer", "Team Players", "Correcting Answer", "Active Contestant", "Team Intervention", "Game Mechanic"]],

    // THE GETAWAY CAR
    ["Which television presenter hosted The Getaway Car?", "Dermot O'Leary", ["Richard Hammond", "Vernon Kay", "Chris Evans"], "Easy", "The Getaway Car", ["Dermot OLeary", "BBC One Host", "2016 Launch", "Driving Competition", "Original Presenter", "British Broadcaster", "Motor Challenge"]],
    ["How many couples began each edition of The Getaway Car?", "Five", ["Three", "Four", "Six"], "Medium", "The Getaway Car", ["Five Couples", "Ten Players", "Opening Pairs", "Driving Teams", "Contestant Count", "Road Challenges", "Game Format"]],
    ["Which Top Gear character raced the finalists on The Getaway Car?", "The Stig", ["Lewis Hamilton", "Jeremy Clarkson", "Richard Hammond"], "Easy", "The Getaway Car", ["The Stig", "Top Gear", "Professional Driver", "Final Race", "Motoring Celebrity", "Team Opponent", "Driving Chase"]],
    ["What was the first obstacle-driving course on The Getaway Car called?", "Hazard Highway", ["Off-Road Rage", "The Drive Thru", "The Getaway Chase"], "Medium", "The Getaway Car", ["Hazard Highway", "Opening Driving Course", "Obstacle Track", "Vehicle Skills", "Course Name", "First Challenge", "Car Competition"]],
    ["What was the concluding race against a professional driver on The Getaway Car called?", "The Getaway Chase", ["Hazard Highway", "The Money List", "The Final Gear"], "Medium", "The Getaway Car", ["Getaway Chase", "Final Race", "Professional Driver", "Two Laps", "Money Stakes", "Driving Finale", "BBC Game Show"]],

    // THE LINK
    ["What did finalists look for among one-word clues on The Link?", "A super link", ["An anagram", "A hidden date", "A missing vowel"], "Medium", "The Link", ["Super Link", "One Word Clues", "Finalists", "Connection Puzzle", "Last Challenge", "Word Associations", "Jackpot Round"]],

    // ALPHABETICAL
    ["Who presented ITV's word-based quiz Alphabetical?", "Jeff Stelling", ["Nick Hancock", "Richard Osman", "Stephen Mulhern"], "Easy", "Alphabetical", ["Jeff Stelling", "ITV Presenter", "2016 Debut", "Original Host", "Word Based Quiz", "Countdown Presenter", "Quiz Host"]],
    ["What did answers in Alphabetical's First Letters round have in common?", "They began with the specified letter", ["They contained exactly five letters", "They ended with the same letter", "They were all anagrams"], "Medium", "Alphabetical", ["First Letters", "Starting Letter", "Word Quiz", "Specified Letter", "Opening Round", "Vocabulary Recall", "Answer Pattern"]],
    ["What did answers in Alphabetical's Last Letters round have in common?", "They ended with the specified letter", ["They began with the same letter", "They had the same number of syllables", "They were all place names"], "Medium", "Alphabetical", ["Last Letters", "Ending Letter", "Word Quiz", "Final Character", "Language Puzzle", "Answer Pattern", "Second Round"]],
    ["How many letters of the alphabet did the finalists aim to answer correctly in Alphabetical?", "Twenty-six", ["Thirteen", "Twenty", "Twenty-four"], "Medium", "Alphabetical", ["Twenty Six Letters", "Alphabet Final", "A To Z", "Finalist Challenge", "Letter Questions", "Jackpot Goal", "Full Alphabet"]],
    ["What word did players say instead of 'pass' on Alphabetical?", "Alphabetical", ["Next", "Change", "Skip"], "Medium", "Alphabetical", ["Say Alphabetical", "Passing A Question", "Special Command", "Clock Management", "Quiz Vocabulary", "Pass Rule", "Spanish Format"]],
    ["Which Spanish television quiz format inspired Alphabetical?", "Pasapalabra", ["Saber y Ganar", "El Cazador", "Ahora Caigo"], "Hard", "Alphabetical", ["Pasapalabra", "Spanish Television", "Original Format", "International Adaptation", "Alphabet Quiz", "Game Show Origins", "Spain"]],

    // A QUESTION OF GENIUS
    ["Which BBC journalist presented A Question of Genius?", "Kirsty Wark", ["Fiona Bruce", "Martha Kearney", "Emily Maitlis"], "Medium", "A Question of Genius", ["Kirsty Wark", "BBC Newsnight", "Original Host", "Scottish Broadcaster", "2009 Launch", "Daytime Presenter", "Television Journalist"]],
    ["Which television channel originally broadcast A Question of Genius?", "BBC Two", ["BBC One", "ITV", "Channel 4"], "Medium", "A Question of Genius", ["BBC Two", "Original Broadcaster", "2009 Series", "Television Network", "General Knowledge", "British Daytime", "Quiz Channel"]],

    // PERFECTION
    ["How many contestants took part in each game of Perfection?", "Four", ["Two", "Three", "Five"], "Medium", "Perfection", ["Four Contestants", "Main Player", "Three Waiting Rivals", "Original Format", "BBC Quiz", "Player Count", "Game Line Up"]],

    // A QUESTION OF GENIUS
    ["How many players reached the televised opening stage of each episode in the first series of A Question of Genius?", "Eight", ["Four", "Six", "Ten"], "Hard", "A Question of Genius", ["Eight Contestants", "First Series", "Televised Opening", "Player Count", "Qualification Stage", "Competition Format", "Initial Line Up"]],
    ["What happened to the possible prize if the finalist requested multiple-choice options on A Question of Genius?", "It was halved", ["It was doubled", "It stayed the same", "It was replaced by a holiday"], "Medium", "A Question of Genius", ["Multiple Choice Option", "Half The Prize", "Final Question", "Risk Reduction", "Four Answers", "Cash Reward", "Prize Gamble"]],

    // PERFECTION
    ["How much was added to Perfection's jackpot each time it went unwon?", "£1,000", ["£100", "£500", "£2,000"], "Medium", "Perfection", ["One Thousand Pounds", "Jackpot Increase", "Unwon Game", "Cash Rollover", "Prize Accumulation", "BBC Daytime", "Money Rule"]],

    // THE GUESS LIST
    ["Which comedian hosted the BBC One panel game The Guess List?", "Rob Brydon", ["Lee Mack", "David Walliams", "Michael McIntyre"], "Easy", "The Guess List", ["Rob Brydon", "BBC One Host", "2014 Launch", "Comedy Panel", "Original Presenter", "British Comedian", "Entertainment Show"]],
    ["How many celebrities made up the panel helping contestants on The Guess List?", "Five", ["Three", "Four", "Six"], "Medium", "The Guess List", ["Five Celebrities", "Celebrity Panel", "Contestant Advice", "Famous Panellists", "Guessing Game", "Studio Guests", "Panel Size"]],
    ["How many members of the public competed in a regular edition of The Guess List?", "Two", ["One", "Three", "Four"], "Medium", "The Guess List", ["Two Public Contestants", "Player Count", "Studio Rivals", "Competition Format", "Celebrity Assistance", "Game Participants", "2014 Show"]],

    // CASH TRAPPED
    ["What was the timed individual-question round on Cash Trapped called in later series?", "Catch Up", ["Gold Run", "The Link", "Power Play"], "Medium", "Cash Trapped", ["Catch Up", "Later Series", "Timed Questions", "Individual Challenge", "Named Round", "Question Clock", "Quiz Format"]],
    ["What was the last round of Cash Trapped called in later series?", "The Escape", ["The Chase", "Beat the Bar", "The Showdown"], "Medium", "Cash Trapped", ["The Escape", "Final Round", "Later Series", "Prize Win", "Contestant Knockout", "Game Finale", "Last Challenge"]],

    // THE GUESS LIST
    ["What sort of answer did The Guess List's final prize question require?", "A number", ["A song title", "A person's surname", "A colour"], "Medium", "The Guess List", ["Numerical Answer", "Final Prize Question", "Two Options", "Celebrity Guesses", "Prize Challenge", "Numbers Quiz", "Game Finale"]],

    // THE COMMON DENOMINATOR
    ["Who presented Channel 4's The Common Denominator?", "Phil Spencer", ["Kirstie Allsopp", "Richard Osman", "Nick Knowles"], "Medium", "The Common Denominator", ["Phil Spencer", "Channel 4 Host", "2013 Launch", "Property Presenter", "Puzzle Quiz", "Original Host", "British Broadcaster"]],
    ["What did contestants have to find between two apparently unrelated phrases on The Common Denominator?", "A linking word", ["A shared number", "A hidden spelling mistake", "A matching picture"], "Easy", "The Common Denominator", ["Linking Word", "Two Phrases", "Word Connection", "Common Denominator", "Language Puzzle", "Clue Solving", "Reasoning Challenge"]],
    ["How many players began an episode of The Common Denominator?", "Three", ["Two", "Four", "Five"], "Medium", "The Common Denominator", ["Three Contestants", "Opening Line Up", "Player Count", "Daytime Quiz", "Individual Competitors", "2013 Series", "Quiz Competition"]],
    ["What replaced word pairs in The Common Denominator's second round?", "Pairs of pictures", ["Musical excerpts", "Celebrity voices", "Number sequences"], "Medium", "The Common Denominator", ["Picture Pairs", "Second Round", "Visual Clues", "Word Associations", "Linking Pictures", "Puzzle Progression", "Connections Game"]],
    ["How much time did finalists have for the linking challenges on The Common Denominator?", "45 seconds", ["30 seconds", "60 seconds", "90 seconds"], "Medium", "The Common Denominator", ["Forty Five Seconds", "Final Time Limit", "Linking Challenges", "Timed Puzzle", "Endgame", "Question Countdown", "Fast Answers"]],
    ["What was the top prize available on The Common Denominator?", "£10,000", ["£2,500", "£5,000", "£25,000"], "Medium", "The Common Denominator", ["Ten Thousand Pounds", "Maximum Prize", "Final Jackpot", "Channel 4", "Cash Winnings", "Top Award", "Prize Amount"]],

    // DON'T BLOW THE INHERITANCE
    ["Which comedian presented Don't Blow the Inheritance?", "Tim Vine", ["Lee Mack", "Jason Manford", "Jack Dee"], "Easy", "Don't Blow the Inheritance", ["Tim Vine", "Stand Up Comedian", "ITV Presenter", "2012 Series", "Original Host", "Generation Gap Quiz", "British Comedy"]],
    ["How were teammates related in Don't Blow the Inheritance?", "They came from different generations of a family", ["They were identical twins", "They were colleagues from the same workplace", "They were former schoolmates"], "Easy", "Don't Blow the Inheritance", ["Different Generations", "Family Teams", "Older And Younger", "Inheritance Theme", "Relatives", "Team Relationship", "Generation Gap"]],
    ["Who buzzed in during the opening questions of Don't Blow the Inheritance?", "The younger family member", ["The older family member", "Both players together", "The studio audience"], "Medium", "Don't Blow the Inheritance", ["Younger Family Member", "Opening Questions", "Buzzer Role", "Family Team", "Generation Challenge", "Quick Responses", "Round Rules"]],
    ["Who had to supply the answer after a buzz in Don't Blow the Inheritance's opening round?", "The older family member", ["The younger family member", "The presenter", "The opposing team"], "Medium", "Don't Blow the Inheritance", ["Older Family Member", "Provide Answer", "Opening Round", "After The Buzzer", "Generational Knowledge", "Teamwork", "Question Mechanic"]],
    ["What sort of answers were sought in Don't Blow the Inheritance's Top 10s round?", "Items from a top-ten list", ["Numbers in an equation", "Words containing ten letters", "Ten different surnames"], "Medium", "Don't Blow the Inheritance", ["Top Tens", "List Answers", "Named Round", "Knowledge Categories", "Ten Items", "Inheritance Building", "Quiz Round"]],
    ["Who answered the questions without help in the final of Don't Blow the Inheritance?", "The younger family member", ["The older family member", "Both players speaking together", "A nominated rival"], "Medium", "Don't Blow the Inheritance", ["Younger Family Member", "Solo Final", "Inheritance Gamble", "Final Questions", "Prize Risk", "Family Heir", "Endgame Format"]],

    // THE BUTTON
    ["Whose voice spoke from the household game-show device on The Button?", "Alex Horne", ["Richard Osman", "Rob Brydon", "Greg Davies"], "Easy", "The Button", ["Alex Horne", "Button Voice", "Taskmaster Creator", "BBC One", "2018 Launch", "Comedy Games", "Voice Presenter"]],
    ["How many households took part in BBC One's The Button?", "Five", ["Three", "Four", "Six"], "Medium", "The Button", ["Five Households", "Home Competitors", "Family Groups", "Contestant Count", "2018 Format", "Household Competition", "Opening Teams"]],
    ["Where did families normally undertake challenges on The Button?", "In their own homes", ["In a studio arena", "At a holiday camp", "Inside a television shopping centre"], "Easy", "The Button", ["Own Homes", "Remote Tasks", "Household Challenges", "Cameras At Home", "No Studio Arena", "Family Participation", "Domestic Games"]],
    ["Which colour did The Button turn to signal that a challenge was ready?", "Red", ["Blue", "Green", "Yellow"], "Medium", "The Button", ["Red Button", "Challenge Signal", "Press Button", "Task Notification", "Game Device", "Household Instructions", "Colour Cue"]],
    ["How many challenges were normally set during a filming day on The Button?", "Five", ["Three", "Four", "Seven"], "Medium", "The Button", ["Five Daily Challenges", "Filming Day", "Household Tasks", "Round Count", "Comedy Games", "Task Schedule", "Game Format"]],
    ["What bonus was offered to winning households to return the following week on The Button?", "£10,000", ["£1,000", "£5,000", "£25,000"], "Medium", "The Button", ["Ten Thousand Pounds", "Return Bonus", "Winning Households", "Next Week", "Cash Incentive", "Repeat Contestants", "Prize Offer"]],

    // EJECTOR SEAT
    ["Who hosted ITV's Ejector Seat?", "Andi Peters", ["Steve Jones", "Gethin Jones", "Sean Fletcher"], "Easy", "Ejector Seat", ["Andi Peters", "ITV Presenter", "2014 Launch", "Original Host", "Moving Chairs", "Quiz Broadcaster", "Chair Game"]],
    ["What moved backwards when a player answered incorrectly on Ejector Seat?", "Their chair", ["The entire floor", "Their scoreboard", "A giant clock"], "Easy", "Ejector Seat", ["Moving Chair", "Wrong Answer", "Backward Track", "Player Penalty", "Ejection Mechanism", "Game Set", "Chair Movement"]],
    ["How could a contestant stop their chair sliding backwards on Ejector Seat?", "Answer a question correctly", ["Ask the audience for help", "Ring a bell three times", "Swap chairs with another player"], "Easy", "Ejector Seat", ["Correct Answer", "Stop Chair Movement", "Backward Slide", "Player Rescue", "Question Challenge", "Game Rules", "Seat Control"]],
    ["What was the emergency lifeline called on Ejector Seat?", "The Panic Button", ["The Stop Clock", "The Safe Seat", "The Rescue Rope"], "Medium", "Ejector Seat", ["Panic Button", "Emergency Lifeline", "Multiple Choice", "Seat Stop", "One Use Help", "Ejection Risk", "Quiz Mechanic"]],
    ["What happened to contestants whose chair reached the far end of Ejector Seat's track?", "They were tipped backwards and eliminated", ["They won a cash bonus", "They chose a new opponent", "They automatically qualified for the final"], "Medium", "Ejector Seat", ["Chair Ejection", "End Of Track", "Eliminated Player", "Tipped Backwards", "Physical Mechanism", "Studio Effect", "Failed Questions"]],
    ["What was the top cash prize on Ejector Seat?", "£10,000", ["£2,000", "£5,000", "£25,000"], "Medium", "Ejector Seat", ["Ten Thousand Pounds", "Final Jackpot", "Top Cash Prize", "ITV Game Show", "Winning Player", "Final Stages", "Prize Award"]],

    // BEAT THE NATION
    ["Which two former Goodies presented Channel 4's Beat the Nation?", "Graeme Garden and Tim Brooke-Taylor", ["Bill Oddie and Tim Brooke-Taylor", "Graeme Garden and Bill Oddie", "Tim Brooke-Taylor and John Cleese"], "Medium", "Beat the Nation", ["Graeme Garden", "Tim Brooke Taylor", "The Goodies", "Joint Presenters", "2004 Channel 4", "Comedy Hosts", "Quiz Duo"]],
    ["Which channel broadcast the quiz Beat the Nation?", "Channel 4", ["BBC One", "BBC Two", "ITV"], "Medium", "Beat the Nation", ["Channel 4", "2004 Quiz", "Original Network", "British Broadcaster", "Daytime Television", "Audience Survey", "Quiz Programme"]],
    ["What determined the points scored for a correct answer on Beat the Nation?", "The percentage of surveyed people who got it wrong", ["The length of the answer", "The number of players remaining", "The time left on the clock"], "Hard", "Beat the Nation", ["Percentage Wrong", "Public Survey", "Difficulty Based Points", "General Knowledge", "Scoring Rules", "National Sample", "Question Value"]],
    ["How many questions did a Beat the Nation finalist attempt against a 90-second clock?", "Ten", ["Five", "Eight", "Twelve"], "Medium", "Beat the Nation", ["Ten Final Questions", "Ninety Seconds", "Finalist Challenge", "Timed Answers", "Quiz Finale", "Cash Prize", "Knowledge Sprint"]],

    // THE CODE
    ["What did contestants need to match correctly on The Code?", "A question and its answer", ["A song and its singer", "A photograph and its location", "A date and its weekday"], "Medium", "The Code", ["Question Answer Matching", "Quiz Pairs", "Safe Puzzle", "Correct Combinations", "Code Breaking", "Knowledge Test", "BBC Game Format"]],
    ["How did the choices offered to players change as they got closer to solving The Code?", "Fewer possibilities were shown", ["More helpers joined the team", "The questions became longer but easier", "Extra safes were added"], "Medium", "The Code", ["Fewer Choices", "Puzzle Progression", "Safe Code", "Reduced Options", "Final Stage", "Answer Elimination", "Game Mechanics"]],

    // TEST THE NATION
    ["Who was the main presenter of the BBC's Test the Nation?", "Anne Robinson", ["Fiona Bruce", "Kirsty Wark", "Carol Vorderman"], "Easy", "Test the Nation", ["Anne Robinson", "BBC One", "2002 Launch", "Main Host", "The Weakest Link", "National Knowledge", "Presenter Identity"]],
    ["Who co-presented Test the Nation alongside Anne Robinson during its early years?", "Phillip Schofield", ["Richard Osman", "Dale Winton", "Ben Shephard"], "Easy", "Test the Nation", ["Phillip Schofield", "Early Co Presenter", "2002 To 2006", "BBC Interactive Quiz", "Anne Robinson", "Studio Contestants", "Television Host"]],

    // THE TOURNAMENT
    ["What determined the opening leaderboard on The Tournament?", "Correct answers and response speed", ["Audience votes", "Contestants' ages", "A random draw"], "Medium", "The Tournament", ["Correct Answers", "Response Speed", "Opening Leaderboard", "Ranking Competitors", "Quiz Scoring", "Tournament Seeds", "First Stage"]],
    ["What did higher-ranked players get to choose in The Tournament's head-to-head rounds?", "Their opponent and question category", ["The episode's presenter", "A cash prize for everyone", "A replacement contestant"], "Medium", "The Tournament", ["Higher Ranked Players", "Opponent Choice", "Category Selection", "Head To Head", "Leaderboard Advantage", "Contestant Tactics", "Quiz Duels"]],
    ["What was an early decisive victory over an opponent called on The Tournament?", "A knockout", ["A clean sweep", "A perfect link", "A grand slam"], "Medium", "The Tournament", ["Knockout", "Early Victory", "Tournament Duel", "Head To Head Win", "Quiz Elimination", "Round Result", "Match Terminology"]],

    // TEST THE NATION
    ["Which national knowledge test launched the BBC's Test the Nation in 2002?", "The National IQ Test", ["The National Spelling Test", "The National History Test", "The National Music Test"], "Medium", "Test the Nation", ["National IQ Test", "2002 Premiere", "Intelligence Quiz", "Launch Topic", "Audience Playalong", "General Knowledge", "BBC One"]],

];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, programme, specificTags], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(5604 + index).padStart(4, '0'),
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
