
// quiz_pack222.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British adult quiz and game shows - important omissions
// 100 questions: tv_6004 to tv_6103
// Audit: 15 repeated questions replaced and all questions comprehensively tagged.
// Keep quiz_bank.js unchanged until the end of the evening.

const facts = [
    // JEOPARDY!
    ["Who presented ITV's modern British revival of Jeopardy!?", "Stephen Fry", ["Richard Madeley", "Paul Ross", "Steve Jones"], "Easy", "Jeopardy!", ["British Jeopardy Format", "Classic Answer First Quiz", "General Knowledge Board", "Television Adaptation", "Stephen Fry", "Jeopardy! Presenter Identity", "2024 Revival Presenter"]],
    ["Who hosted the earliest British television version of Jeopardy!?", "Derek Hobson", ["Chris Donat", "Steve Jones", "Paul Ross"], "Medium", "Jeopardy!", ["British Jeopardy Format", "Classic Answer First Quiz", "General Knowledge Board", "Television Adaptation", "Derek Hobson", "Jeopardy! Presenter Identity", "First British Host"]],
    ["Which channel broadcast the first British television version of Jeopardy!?", "Channel 4", ["BBC One", "ITV", "Sky One"], "Medium", "Jeopardy!", ["British Jeopardy Format", "Classic Answer First Quiz", "General Knowledge Board", "Television Adaptation", "Channel 4", "Jeopardy! Broadcast Network", "1983 Original Broadcast"]],
    ["How must contestants normally phrase their responses on Jeopardy!?", "In the form of a question", ["As a single number", "As a complete quotation", "In alphabetical order"], "Easy", "Jeopardy!", ["British Jeopardy Format", "Classic Answer First Quiz", "General Knowledge Board", "Television Adaptation", "In the form of a question", "Question Form Answers", "Reverse Quiz Responses"]],
    ["What is the special Jeopardy! clue that allows one contestant to wager money called?", "Daily Double", ["Double Chance", "Cash Builder", "Bonus Bank"], "Medium", "Jeopardy!", ["British Jeopardy Format", "Classic Answer First Quiz", "General Knowledge Board", "Television Adaptation", "Daily Double", "Jeopardy! Quiz Rules And Answers", "Cash Wager Clue"]],
    ["What is the concluding wager-based round of Jeopardy! called?", "Final Jeopardy", ["Ultimate Question", "Last Chance", "The Final Word"], "Easy", "Jeopardy!", ["British Jeopardy Format", "Classic Answer First Quiz", "General Knowledge Board", "Television Adaptation", "Final Jeopardy", "Jeopardy! Quiz Rules And Answers", "Closing Wager Round"]],
    ["What is the Jeopardy! round with higher clue values called?", "Double Jeopardy", ["Super Jeopardy", "Golden Jeopardy", "Maximum Jeopardy"], "Medium", "Jeopardy!", ["British Jeopardy Format", "Classic Answer First Quiz", "General Knowledge Board", "Television Adaptation", "Double Jeopardy", "Jeopardy! Quiz Rules And Answers", "Higher Clue Values"]],
    ["Which presenter hosted the British Sky One version of Jeopardy!?", "Paul Ross", ["Simon Mayo", "Derek Hobson", "Nick Hancock"], "Medium", "Jeopardy!", ["British Jeopardy Format", "Classic Answer First Quiz", "General Knowledge Board", "Television Adaptation", "Paul Ross", "Jeopardy! Presenter Identity", "Sky One Presenter"]],

    // THE FORTUNE HOTEL
    ["Who hosted ITV's reality competition The Fortune Hotel?", "Stephen Mangan", ["Richard Osman", "Alexander Armstrong", "Rob Brydon"], "Easy", "The Fortune Hotel", ["ITV1 Competition", "2024 Premiere", "Caribbean Reality Game", "Briefcase Decisions", "Stephen Mangan", "The Fortune Hotel Presenter Identity", "Original Presenter"]],

    // I LITERALLY JUST TOLD YOU
    ["Which channel broadcasts I Literally Just Told You?", "Channel 4", ["ITV", "BBC Two", "Channel 5"], "Easy", "I Literally Just Told You", ["Channel 4 Comedy Quiz", "Memory And Observation", "Studio Events", "2020s Game Show", "Channel 4", "I Literally Just Told You Broadcast Network", "Original Broadcaster"]],

    // THE FORTUNE HOTEL
    ["How many pairs of contestants checked into The Fortune Hotel at the start of its first series?", "Ten", ["Six", "Eight", "Twelve"], "Medium", "The Fortune Hotel", ["ITV1 Competition", "2024 Premiere", "Caribbean Reality Game", "Briefcase Decisions", "Ten", "Ten Pairs", "Starting Contestant Teams"]],

    // I LITERALLY JUST TOLD YOU
    ["How many contestants begin a regular game of I Literally Just Told You?", "Four", ["Three", "Five", "Six"], "Medium", "I Literally Just Told You", ["Channel 4 Comedy Quiz", "Memory And Observation", "Studio Events", "2020s Game Show", "Four", "Four Contestants", "Opening Line Up"]],

    // THE FORTUNE HOTEL
    ["What was the cash prize hidden in one of The Fortune Hotel's briefcases?", "£250,000", ["£50,000", "£100,000", "£500,000"], "Medium", "The Fortune Hotel", ["ITV1 Competition", "2024 Premiere", "Caribbean Reality Game", "Briefcase Decisions", "£250,000", "Two Hundred Fifty Thousand Pounds", "Hidden Jackpot"]],

    // I LITERALLY JUST TOLD YOU
    ["Which space scientist helped set questions during the early series of I Literally Just Told You?", "Maggie Aderin-Pocock", ["Alice Roberts", "Helen Czerski", "Hannah Fry"], "Medium", "I Literally Just Told You", ["Channel 4 Comedy Quiz", "Memory And Observation", "Studio Events", "2020s Game Show", "Maggie Aderin-Pocock", "Maggie Aderin Pocock", "Guest Question Scientist"]],
    ["What apparently routine event on I Literally Just Told You has sometimes turned out to be part of the memory test?", "An advert break", ["The end credits", "A weather forecast", "An audience vote"], "Medium", "I Literally Just Told You", ["Channel 4 Comedy Quiz", "Memory And Observation", "Studio Events", "2020s Game Show", "An advert break", "Advert Break", "Hidden Memory Test"]],

    // THE FORTUNE HOTEL
    ["What was the card called that eliminated its holders from The Fortune Hotel?", "Early Checkout Card", ["Eviction Notice", "Last Chance Card", "Check-In Card"], "Medium", "The Fortune Hotel", ["ITV1 Competition", "2024 Premiere", "Caribbean Reality Game", "Briefcase Decisions", "Early Checkout Card", "The Fortune Hotel Quiz Rules And Answers", "Elimination Briefcase"]],

    // CATCHPOINT
    ["Who presented the BBC game show Catchpoint?", "Paddy McGuinness", ["Vernon Kay", "Stephen Mulhern", "Ben Shephard"], "Easy", "Catchpoint", ["BBC One Physical Quiz", "Falling Ball Game", "Answer Positions", "2019 Launch", "Paddy McGuinness", "Catchpoint Presenter Identity", "Original Presenter"]],
    ["What did contestants physically try to catch on Catchpoint?", "Falling balls", ["Flying rings", "Falling coins", "Thrown beanbags"], "Easy", "Catchpoint", ["BBC One Physical Quiz", "Falling Ball Game", "Answer Positions", "2019 Launch", "Falling balls", "Catchpoint Quiz Rules And Answers", "Catch Game"]],
    ["Which channel broadcast Catchpoint?", "BBC One", ["ITV", "BBC Two", "Channel 4"], "Medium", "Catchpoint", ["BBC One Physical Quiz", "Falling Ball Game", "Answer Positions", "2019 Launch", "BBC One", "Catchpoint Broadcast Network", "Original Broadcaster"]],
    ["How many people formed each team on Catchpoint?", "Two", ["Three", "Four", "Five"], "Medium", "Catchpoint", ["BBC One Physical Quiz", "Falling Ball Game", "Answer Positions", "2019 Launch", "Two", "Two Players Per Team", "Pair Contestants"]],
    ["What was the opening round of Catchpoint called?", "First Catch", ["Quick Drop", "Early Ball", "Catch Up"], "Medium", "Catchpoint", ["BBC One Physical Quiz", "Falling Ball Game", "Answer Positions", "2019 Launch", "First Catch", "Catchpoint Quiz Rules And Answers", "Opening Game Round"]],
    ["What was unusual about the balls in Catchpoint's Decoy Catch round?", "Balls dropped from every answer position", ["They were thrown by the audience", "They were invisible until caught", "They bounced out of the studio"], "Medium", "Catchpoint", ["BBC One Physical Quiz", "Falling Ball Game", "Answer Positions", "2019 Launch", "Balls dropped from every answer position", "Decoy Catch", "Balls Drop At Every Answer"]],
    ["Which colour of ball did teams aim to catch in Catchpoint's Decoy Catch round?", "Pink", ["Blue", "Green", "Yellow"], "Medium", "Catchpoint", ["BBC One Physical Quiz", "Falling Ball Game", "Answer Positions", "2019 Launch", "Pink", "Pink Balls", "Correct Answer Colours"]],

    // PICTURE SLAM
    ["Who hosts the BBC picture-identification quiz Picture Slam?", "Alan Carr", ["Jimmy Carr", "Joe Lycett", "Rob Beckett"], "Easy", "Picture Slam", ["BBC One Picture Quiz", "Image Identification", "Saturday Night Game Show", "2023 Launch", "Alan Carr", "Picture Slam Presenter Identity", "Programme Host"]],
    ["What must contestants do to score in Picture Slam?", "Identify images shown on screens", ["Arrange photographs in date order", "Draw pictures for a teammate", "Spot errors in newspaper stories"], "Easy", "Picture Slam", ["BBC One Picture Quiz", "Image Identification", "Saturday Night Game Show", "2023 Launch", "Identify images shown on screens", "Identify Pictures", "Fast Recognition"]],
    ["Which channel broadcasts Picture Slam?", "BBC One", ["Channel 4", "ITV", "BBC Two"], "Medium", "Picture Slam", ["BBC One Picture Quiz", "Image Identification", "Saturday Night Game Show", "2023 Launch", "BBC One", "Picture Slam Broadcast Network", "Original Broadcaster"]],
    ["How many pairs of contestants start a regular Picture Slam game?", "Three", ["Two", "Four", "Five"], "Medium", "Picture Slam", ["BBC One Picture Quiz", "Image Identification", "Saturday Night Game Show", "2023 Launch", "Three", "Three Pairs", "Opening Contestant Teams"]],
    ["What earns a team a Picture Slam bonus?", "Correctly naming every image on a board", ["Answering without looking at the pictures", "Beating a celebrity's score", "Choosing the hardest category first"], "Easy", "Picture Slam", ["BBC One Picture Quiz", "Image Identification", "Saturday Night Game Show", "2023 Launch", "Correctly naming every image on a board", "Picture Slam Bonus", "Complete Board"]],
    ["What is the name of the Picture Slam round where images appear one after another?", "Picture Swipe", ["Photo Finish", "Snap Decision", "The Slideshow"], "Medium", "Picture Slam", ["BBC One Picture Quiz", "Image Identification", "Saturday Night Game Show", "2023 Launch", "Picture Swipe", "Picture Slam Quiz Rules And Answers", "Sequential Images"]],
    ["What is the top jackpot advertised in the original Picture Slam format?", "£10,000", ["£5,000", "£20,000", "£50,000"], "Medium", "Picture Slam", ["BBC One Picture Quiz", "Image Identification", "Saturday Night Game Show", "2023 Launch", "£10,000", "Ten Thousand Pounds", "Original Jackpot"]],

    // THE FORTUNE HOTEL
    ["How many of the ten original briefcases in The Fortune Hotel were empty?", "Eight", ["Five", "Six", "Nine"], "Medium", "The Fortune Hotel", ["ITV1 Competition", "2024 Premiere", "Caribbean Reality Game", "Briefcase Decisions", "Eight", "Eight Empty Cases", "Briefcase Contents"]],

    // TWO TRIBES
    ["Which channel broadcast Two Tribes?", "BBC Two", ["BBC One", "ITV", "Channel 4"], "Medium", "Two Tribes", ["BBC Two Format", "Team Based Knowledge", "Grouping Contestants", "2014 Launch", "BBC Two", "Two Tribes Broadcast Network", "Original Broadcaster"]],

    // THE FORTUNE HOTEL
    ["Where did contestants make their final case-swap decisions on The Fortune Hotel?", "The Lady Luck bar", ["The reception desk", "The hotel rooftop", "The swimming pool"], "Medium", "The Fortune Hotel", ["ITV1 Competition", "2024 Premiere", "Caribbean Reality Game", "Briefcase Decisions", "The Lady Luck bar", "Lady Luck Bar", "Case Swap Decisions"]],
    ["In which region was the luxury resort used for The Fortune Hotel?", "The Caribbean", ["The Mediterranean", "The Canary Islands", "The Indian Ocean"], "Medium", "The Fortune Hotel", ["ITV1 Competition", "2024 Premiere", "Caribbean Reality Game", "Briefcase Decisions", "The Caribbean", "Caribbean Resort", "Filming Location"]],

    // TWO TRIBES
    ["How long did each tribe have to answer questions in the early rounds of Two Tribes?", "Sixty seconds", ["Thirty seconds", "Ninety seconds", "Two minutes"], "Medium", "Two Tribes", ["BBC Two Format", "Team Based Knowledge", "Grouping Contestants", "2014 Launch", "Sixty seconds", "Two Tribes Question Count", "Early Round Timer"]],

    // THE FORTUNE HOTEL
    ["Which broadcaster originally showed The Fortune Hotel in the UK?", "ITV1", ["BBC One", "Channel 4", "Channel 5"], "Easy", "The Fortune Hotel", ["ITV1 Competition", "2024 Premiere", "Caribbean Reality Game", "Briefcase Decisions", "ITV1", "The Fortune Hotel Broadcast Network", "Original Broadcaster"]],

    // TWO TRIBES
    ["What timekeeping device featured in the final head-to-head round of Two Tribes?", "A chess clock", ["An egg timer", "A stop-watch held by the audience", "A sand-filled hourglass"], "Medium", "Two Tribes", ["BBC Two Format", "Team Based Knowledge", "Grouping Contestants", "2014 Launch", "A chess clock", "Chess Clock", "Head To Head Final"]],

    // BRITAIN'S BRIGHTEST FAMILY
    ["Which Chaser presented Britain's Brightest Family?", "Anne Hegerty", ["Jenny Ryan", "Mark Labbett", "Shaun Wallace"], "Easy", "Britain's Brightest Family", ["ITV Family Quiz", "Words Maths And Logic", "Young Team Captains", "2018 Launch", "Anne Hegerty", "Britain's Brightest Family Quiz Rules And Answers", "Chaser Presenter"]],
    ["Which channel showed Britain's Brightest Family?", "ITV", ["BBC One", "Channel 4", "Channel 5"], "Medium", "Britain's Brightest Family", ["ITV Family Quiz", "Words Maths And Logic", "Young Team Captains", "2018 Launch", "ITV", "Britain's Brightest Family Broadcast Network", "Original Broadcaster"]],
    ["How many family members were on each team in Britain's Brightest Family?", "Three", ["Two", "Four", "Five"], "Medium", "Britain's Brightest Family", ["ITV Family Quiz", "Words Maths And Logic", "Young Team Captains", "2018 Launch", "Three", "Three Family Members", "Contestant Team Size"]],
    ["Who typically captained the teams on Britain's Brightest Family?", "A younger family member", ["The oldest relative", "A celebrity chosen by the host", "A schoolteacher"], "Medium", "Britain's Brightest Family", ["ITV Family Quiz", "Words Maths And Logic", "Young Team Captains", "2018 Launch", "A younger family member", "Younger Team Captain", "Family Captain"]],
    ["Which kinds of puzzles featured alongside knowledge questions on Britain's Brightest Family?", "Words, maths and logic", ["Only musical performance", "Only physical endurance", "Only cookery puzzles"], "Easy", "Britain's Brightest Family", ["ITV Family Quiz", "Words Maths And Logic", "Young Team Captains", "2018 Launch", "Words, maths and logic", "Words Maths Logic", "Knowledge Puzzles"]],
    ["What happened to the points for a wrong answer in the original Britain's Brightest Family format?", "They were awarded to the opposing team", ["They were doubled for that team", "They were saved for the final", "The presenter kept them"], "Medium", "Britain's Brightest Family", ["ITV Family Quiz", "Words Maths And Logic", "Young Team Captains", "2018 Launch", "They were awarded to the opposing team", "Points Awarded To Opponents", "Wrong Answer Penalty"]],
    ["What was the celebrity spin-off called?", "Britain's Brightest Celebrity Family", ["Britain's Brightest Celebrity Challenge", "Celebrity Family Genius", "The Celebrity Brain Game"], "Medium", "Britain's Brightest Family", ["ITV Family Quiz", "Words Maths And Logic", "Young Team Captains", "2018 Launch", "Britain's Brightest Celebrity Family", "Britains Brightest Celebrity Family", "Celebrity Spin Off"]],

    // DUEL
    ["Who hosted ITV's quiz Duel?", "Nick Hancock", ["Jeremy Clarkson", "Bradley Walsh", "Gyles Brandreth"], "Medium", "Duel", ["ITV 2008 Quiz", "Four Way Multiple Choice", "Chip Betting Strategy", "Head To Head Game", "Nick Hancock", "Duel Presenter Identity", "Original Host"]],
    ["How many contestants faced each other in a typical duel on Duel?", "Two", ["Three", "Four", "Five"], "Easy", "Duel", ["ITV 2008 Quiz", "Four Way Multiple Choice", "Chip Betting Strategy", "Head To Head Game", "Two", "Two Players", "One On One Duel"]],
    ["How many answer options were normally shown for a question on Duel?", "Four", ["Two", "Three", "Five"], "Medium", "Duel", ["ITV 2008 Quiz", "Four Way Multiple Choice", "Chip Betting Strategy", "Head To Head Game", "Four", "Four Answers", "Multiple Choice Board"]],
    ["How many playing chips did contestants initially receive on Duel?", "Ten", ["Six", "Eight", "Twelve"], "Medium", "Duel", ["ITV 2008 Quiz", "Four Way Multiple Choice", "Chip Betting Strategy", "Head To Head Game", "Ten", "Ten Chips", "Starting Wager Tokens"]],
    ["Why might a Duel contestant place chips on several possible answers?", "To cover more than one possible correct answer", ["To multiply the cash prize", "To eliminate their opponent immediately", "To shorten the next question"], "Medium", "Duel", ["ITV 2008 Quiz", "Four Way Multiple Choice", "Chip Betting Strategy", "Head To Head Game", "To cover more than one possible correct answer", "Multiple Chip Bets", "Cover Several Answers"]],
    ["What happened to chips placed on incorrect answers on Duel?", "They were lost", ["They were doubled", "They transferred to the host", "They were returned for free"], "Medium", "Duel", ["ITV 2008 Quiz", "Four Way Multiple Choice", "Chip Betting Strategy", "Head To Head Game", "They were lost", "Lost Incorrect Chips", "Chip Penalty"]],
    ["What was the name of the feature that forced a Duel opponent to answer quickly?", "Accelerator", ["Turbo Round", "Fast Pass", "Pressure Lock"], "Medium", "Duel", ["ITV 2008 Quiz", "Four Way Multiple Choice", "Chip Betting Strategy", "Head To Head Game", "Accelerator", "Duel Quiz Rules And Answers", "Forced Speed"]],

    // BABUSHKA
    ["Who presented ITV's Babushka?", "Rylan Clark-Neal", ["Stephen Mulhern", "Ben Shephard", "Vernon Kay"], "Easy", "Babushka", ["ITV Daytime Gameshow", "Nested Doll Gameplay", "2017 Programme", "Cash Risk", "Rylan Clark-Neal", "Rylan Clark Neal", "Original Host"]],
    ["What objects hid the potential cash prizes on Babushka?", "Giant nesting dolls", ["Treasure chests", "Suitcases", "Golden eggs"], "Easy", "Babushka", ["ITV Daytime Gameshow", "Nested Doll Gameplay", "2017 Programme", "Cash Risk", "Giant nesting dolls", "Babushka Quiz Rules And Answers", "Money Hiding Place"]],
    ["Which channel broadcast Babushka?", "ITV", ["Channel 4", "BBC One", "Channel 5"], "Medium", "Babushka", ["ITV Daytime Gameshow", "Nested Doll Gameplay", "2017 Programme", "Cash Risk", "ITV", "Babushka Broadcast Network", "Original Channel"]],
    ["How many giant dolls were available at the start of Babushka?", "Ten", ["Eight", "Twelve", "Fifteen"], "Medium", "Babushka", ["ITV Daytime Gameshow", "Nested Doll Gameplay", "2017 Programme", "Cash Risk", "Ten", "Ten Dolls", "Starting Selection"]],
    ["What kind of question had to be answered before opening a Babushka doll?", "True or false", ["A four-option multiple-choice question", "A missing-lyrics question", "A picture anagram"], "Medium", "Babushka", ["ITV Daytime Gameshow", "Nested Doll Gameplay", "2017 Programme", "Cash Risk", "True or false", "Babushka Quiz Rules And Answers", "Question Format"]],
    ["How many of the original giant Babushka dolls contained no money?", "Two", ["One", "Three", "Four"], "Medium", "Babushka", ["ITV Daytime Gameshow", "Nested Doll Gameplay", "2017 Programme", "Cash Risk", "Two", "Two Empty Dolls", "No Cash Dolls"]],
    ["Which Babushka assist let players change a true-or-false question?", "Switch", ["Peek", "X-ray", "Pass"], "Medium", "Babushka", ["ITV Daytime Gameshow", "Nested Doll Gameplay", "2017 Programme", "Cash Risk", "Switch", "Babushka Quiz Rules And Answers", "Question Change Assist"]],

    // THE TRAITORS
    ["Who presented the original British series of The Traitors?", "Claudia Winkleman", ["Davina McCall", "Emma Willis", "Tess Daly"], "Easy", "The Traitors", ["BBC One Reality Game", "Scottish Castle Competition", "Trust And Betrayal", "Hidden Identities", "Claudia Winkleman", "The Traitors Presenter Identity", "Programme Host"]],

    // 500 QUESTIONS
    ["Which channel showed the British version of 500 Questions?", "ITV", ["BBC Two", "Channel 4", "Channel 5"], "Medium", "500 Questions", ["ITV Knowledge Quiz", "Rapid Recall", "Challenger Competition", "2016 British Version", "ITV", "500 Questions Broadcast Network", "British Broadcast"]],

    // THE TRAITORS
    ["What were the non-Traitor players called on the BBC game The Traitors?", "The Faithful", ["The Innocents", "The Loyalists", "The Seekers"], "Easy", "The Traitors", ["BBC One Reality Game", "Scottish Castle Competition", "Trust And Betrayal", "Hidden Identities", "The Faithful", "Faithful Players", "Non Traitor Contestants"]],
    ["Where was the castle used to film the original British series of The Traitors?", "The Scottish Highlands", ["The Welsh Marches", "The Yorkshire Dales", "The Lake District"], "Medium", "The Traitors", ["BBC One Reality Game", "Scottish Castle Competition", "Trust And Betrayal", "Hidden Identities", "The Scottish Highlands", "Scottish Highlands", "Castle Location"]],

    // 500 QUESTIONS
    ["How many categories were displayed on the board in 500 Questions?", "Ten", ["Six", "Eight", "Twelve"], "Medium", "500 Questions", ["ITV Knowledge Quiz", "Rapid Recall", "Challenger Competition", "2016 British Version", "Ten", "Ten Categories", "Category Board"]],
    ["Which type of 500 Questions challenge had a player and challenger take turns naming valid answers?", "Battle", ["Duel", "Headliners", "Snap"], "Medium", "500 Questions", ["ITV Knowledge Quiz", "Rapid Recall", "Challenger Competition", "2016 British Version", "Battle", "500 Questions Quiz Rules And Answers", "Alternating Valid Answers"]],
    ["How many correct responses were required in a 500 Questions Triple Threat challenge?", "Three", ["Two", "Four", "Five"], "Medium", "500 Questions", ["ITV Knowledge Quiz", "Rapid Recall", "Challenger Competition", "2016 British Version", "Three", "Triple Threat", "Three Correct Responses"]],

    // IN WITH A SHOUT
    ["Who presented ITV's In With a Shout?", "Joel Dommett", ["Jason Manford", "Stephen Mulhern", "Rylan Clark"], "Easy", "In With a Shout", ["ITV Entertainment", "Video Recognition Quiz", "Timed Film Montages", "Family Team Challenge", "Joel Dommett", "In With a Shout Presenter Identity", "Original Presenter"]],
    ["What did players have to identify on In With a Shout?", "Images and subjects in rapid video clips", ["Songs played on a piano", "Objects hidden under cups", "Words formed from letter tiles"], "Easy", "In With a Shout", ["ITV Entertainment", "Video Recognition Quiz", "Timed Film Montages", "Family Team Challenge", "Images and subjects in rapid video clips", "Fast Video Clips", "Image Identification"]],
    ["Which channel broadcast In With a Shout?", "ITV", ["BBC One", "Channel 4", "Channel 5"], "Medium", "In With a Shout", ["ITV Entertainment", "Video Recognition Quiz", "Timed Film Montages", "Family Team Challenge", "ITV", "In With a Shout Broadcast Network", "Original Channel"]],
    ["How many people made up each competing team on In With a Shout?", "Three", ["Two", "Four", "Five"], "Medium", "In With a Shout", ["ITV Entertainment", "Video Recognition Quiz", "Timed Film Montages", "Family Team Challenge", "Three", "Three Players Per Team", "Family Team Size"]],
    ["About how long was each individual video clip in an In With a Shout montage?", "Three seconds", ["One second", "Ten seconds", "Twenty seconds"], "Medium", "In With a Shout", ["ITV Entertainment", "Video Recognition Quiz", "Timed Film Montages", "Family Team Challenge", "Three seconds", "Three Second Clips", "Montage Speed"]],
    ["What was the name of the feature that briefly paused a clip on In With a Shout?", "Freeze", ["Hold It", "Pause Point", "Time Out"], "Medium", "In With a Shout", ["ITV Entertainment", "Video Recognition Quiz", "Timed Film Montages", "Family Team Challenge", "Freeze", "In With a Shout Quiz Rules And Answers", "Pause Function"]],
    ["How many freezes did each team have across an In With a Shout game?", "Ten", ["Three", "Five", "Twenty"], "Medium", "In With a Shout", ["ITV Entertainment", "Video Recognition Quiz", "Timed Film Montages", "Family Team Challenge", "Ten", "Ten Freezes", "Team Allowance"]],

    // GENIUS GAME
    ["Which Doctor Who actor fronted ITV's Genius Game?", "David Tennant", ["Matt Smith", "Peter Capaldi", "Christopher Eccleston"], "Easy", "Genius Game", ["ITV 2025 Series", "Strategic Reality Game", "Mental Competition", "Elimination Format", "David Tennant", "Genius Game Quiz Rules And Answers", "Original Presenter"]],
    ["Which channel showed the British Genius Game?", "ITV", ["BBC One", "Channel 4", "Sky Atlantic"], "Medium", "Genius Game", ["ITV 2025 Series", "Strategic Reality Game", "Mental Competition", "Elimination Format", "ITV", "Genius Game Broadcast Network", "Original Broadcaster"]],
    ["How many contestants originally entered Genius Game?", "Eleven", ["Eight", "Ten", "Twelve"], "Medium", "Genius Game", ["ITV 2025 Series", "Strategic Reality Game", "Mental Competition", "Elimination Format", "Eleven", "Eleven Contestants", "Starting Player Count"]],
    ["What were the two main stages of a typical Genius Game episode called?", "Main Match and Death Match", ["First Catch and Decoy Catch", "Heat and Jackpot", "Eliminator and Gold Run"], "Medium", "Genius Game", ["ITV 2025 Series", "Strategic Reality Game", "Mental Competition", "Elimination Format", "Main Match and Death Match", "Genius Game Quiz Rules And Answers", "Two Contest Stages"]],
    ["What were the in-game currency tokens called on Genius Game?", "Garnets", ["Diamonds", "Crowns", "Credits"], "Medium", "Genius Game", ["ITV 2025 Series", "Strategic Reality Game", "Mental Competition", "Elimination Format", "Garnets", "Genius Game Quiz Rules And Answers", "In Game Currency"]],
    ["What could a Main Match winner receive to avoid the elimination contest on Genius Game?", "A Token of Life", ["An Immunity Bell", "A Gold Ticket", "A Safety Star"], "Medium", "Genius Game", ["ITV 2025 Series", "Strategic Reality Game", "Mental Competition", "Elimination Format", "A Token of Life", "Token Of Life", "Elimination Protection"]],
    ["Which country originated the format adapted as Britain's Genius Game?", "South Korea", ["Japan", "United States", "The Netherlands"], "Medium", "Genius Game", ["ITV 2025 Series", "Strategic Reality Game", "Mental Competition", "Elimination Format", "South Korea", "Genius Game Quiz Rules And Answers", "Original Format Country"]],

    // QUIZNESS
    ["Who hosted Channel 4's comedy quiz Quizness?", "Tom Allen", ["Jimmy Carr", "Alan Carr", "Joe Lycett"], "Easy", "Quizness", ["Channel 4 Comedy Quiz", "Wordplay Challenges", "2021 Series", "Unusual Question Rounds", "Tom Allen", "Quizness Presenter Identity", "Original Host"]],
    ["Which channel broadcast Quizness?", "Channel 4", ["BBC One", "ITV", "Sky One"], "Medium", "Quizness", ["Channel 4 Comedy Quiz", "Wordplay Challenges", "2021 Series", "Unusual Question Rounds", "Channel 4", "Quizness Broadcast Network", "Original Broadcaster"]],
    ["What did contestants do to their answers in the Quizness round Subbly Jubbly?", "Replace parts of answers with silly substitute words", ["Write answers on balloons", "Translate every answer into French", "Sing the answers to a tune"], "Medium", "Quizness", ["Channel 4 Comedy Quiz", "Wordplay Challenges", "2021 Series", "Unusual Question Rounds", "Replace parts of answers with silly substitute words", "Subbly Jubbly", "Nonsense Answer Substitutions"]],
    ["Which Quizness round made players remember and extend a string of previous answers?", "Brain Chain", ["Word Ladder", "Double Trouble", "Final Countdown"], "Medium", "Quizness", ["Channel 4 Comedy Quiz", "Wordplay Challenges", "2021 Series", "Unusual Question Rounds", "Brain Chain", "Quizness Quiz Rules And Answers", "Answer Memory Sequence"]],
    ["What was the penalty for an incorrect answer in Quizness's Risky Quizness round?", "Losing two points", ["Losing one point", "Being eliminated immediately", "Losing half the jackpot"], "Medium", "Quizness", ["Channel 4 Comedy Quiz", "Wordplay Challenges", "2021 Series", "Unusual Question Rounds", "Losing two points", "Two Points Lost", "Wrong Answer Penalty"]],
    ["Which Quizness round revolved around spoonerisms?", "Dental Mexterity", ["Subbly Jubbly", "Pundreds and Thousands", "Risky Quizness"], "Medium", "Quizness", ["Channel 4 Comedy Quiz", "Wordplay Challenges", "2021 Series", "Unusual Question Rounds", "Dental Mexterity", "Quizness Quiz Rules And Answers", "Spoonerism Round"]],
    ["What was the advertised jackpot in Quizness's final challenge?", "£25,000", ["£5,000", "£10,000", "£50,000"], "Medium", "Quizness", ["Channel 4 Comedy Quiz", "Wordplay Challenges", "2021 Series", "Unusual Question Rounds", "£25,000", "Twenty Five Thousand Pounds", "Final Jackpot"]],

    // THE TRAITORS
    ["What term did The Traitors use for a contestant secretly eliminated by the Traitors?", "Murdered", ["Banished", "Exiled", "Disqualified"], "Medium", "The Traitors", ["BBC One Reality Game", "Scottish Castle Competition", "Trust And Betrayal", "Hidden Identities", "Murdered", "The Traitors Quiz Rules And Answers", "Secret Night Removal"]],
    ["At what gathering did contestants vote to banish someone on The Traitors?", "The Round Table", ["The Breakfast Table", "The Council Chamber", "The Jury Box"], "Medium", "The Traitors", ["BBC One Reality Game", "Scottish Castle Competition", "Trust And Betrayal", "Hidden Identities", "The Round Table", "Round Table", "Banishing Vote"]],

    // THE TIME IT TAKES
    ["Which channel broadcast The Time It Takes?", "BBC One", ["ITV", "Channel 4", "Channel 5"], "Medium", "The Time It Takes", ["BBC One Comedy Quiz", "Unusual Timers", "2018 Series", "Variable Time Challenges", "BBC One", "The Time It Takes Broadcast Network", "Original Broadcaster"]],

    // THE TRAITORS
    ["What was the main purpose of the group missions on The Traitors?", "Build up the shared prize pot", ["Identify every Traitor automatically", "Choose a new host", "Award immunity to all players"], "Easy", "The Traitors", ["BBC One Reality Game", "Scottish Castle Competition", "Trust And Betrayal", "Hidden Identities", "Build up the shared prize pot", "Group Missions", "Prize Pot Growth"]],
    ["What was the name of the protection that could prevent a contestant being murdered on The Traitors?", "A shield", ["A token of life", "A golden ticket", "A safe key"], "Medium", "The Traitors", ["BBC One Reality Game", "Scottish Castle Competition", "Trust And Betrayal", "Hidden Identities", "A shield", "The Traitors Quiz Rules And Answers", "Murder Protection"]],

    // THE TIME IT TAKES
    ["What consolation gift could losing players receive on The Time It Takes?", "A tea towel", ["A novelty mug", "A framed photograph", "A pair of slippers"], "Medium", "The Time It Takes", ["BBC One Comedy Quiz", "Unusual Timers", "2018 Series", "Variable Time Challenges", "A tea towel", "Tea Towel", "Consolation Gift"]],
    ["What kind of main prize could a winner earn on The Time It Takes?", "A holiday", ["A sports car", "A new kitchen", "A cash-filled briefcase"], "Easy", "The Time It Takes", ["BBC One Comedy Quiz", "Unusual Timers", "2018 Series", "Variable Time Challenges", "A holiday", "Holiday Prize", "Winning Reward"]],

    // 5-STAR FAMILY REUNION
    ["Who hosted the BBC quiz 5-Star Family Reunion?", "Nick Knowles", ["Bradley Walsh", "Alexander Armstrong", "Ben Shephard"], "Medium", "5-Star Family Reunion", ["BBC One Family Quiz", "Relatives Across Countries", "Remote Family Reunion", "2016 Series", "Nick Knowles", "5-Star Family Reunion Presenter Identity", "Original Presenter"]],
    ["Which channel showed 5-Star Family Reunion?", "BBC One", ["ITV", "Channel 4", "BBC Two"], "Medium", "5-Star Family Reunion", ["BBC One Family Quiz", "Relatives Across Countries", "Remote Family Reunion", "2016 Series", "BBC One", "5-Star Family Reunion Broadcast Network", "Original Broadcaster"]],
    ["What separated the two halves of the competing family on 5-Star Family Reunion?", "They lived in different countries", ["They had never met the presenter", "They were from rival quiz teams", "They belonged to different generations only"], "Medium", "5-Star Family Reunion", ["BBC One Family Quiz", "Relatives Across Countries", "Remote Family Reunion", "2016 Series", "They lived in different countries", "International Family", "Separated Relatives"]],
    ["How many relatives appeared in the British studio team on 5-Star Family Reunion?", "Four", ["Two", "Three", "Six"], "Medium", "5-Star Family Reunion", ["BBC One Family Quiz", "Relatives Across Countries", "Remote Family Reunion", "2016 Series", "Four", "Four British Relatives", "Studio Team"]],
    ["What scientific desk toy helped set the time limit on 5-Star Family Reunion?", "A Newton's cradle", ["A gyroscope", "A plasma globe", "A pendulum clock"], "Medium", "5-Star Family Reunion", ["BBC One Family Quiz", "Relatives Across Countries", "Remote Family Reunion", "2016 Series", "A Newton's cradle", "Newtons Cradle", "Quiz Timekeeper"]],
    ["What main prize did the family try to win on 5-Star Family Reunion?", "A luxury holiday together", ["A brand-new family house", "A shared sports car", "A year of supermarket shopping"], "Easy", "5-Star Family Reunion", ["BBC One Family Quiz", "Relatives Across Countries", "Remote Family Reunion", "2016 Series", "A luxury holiday together", "Luxury Holiday", "Family Reunion Prize"]],
    ["How many correct answers were needed in the 5-Star Family Reunion final before the timer stopped?", "Five", ["Three", "Four", "Seven"], "Medium", "5-Star Family Reunion", ["BBC One Family Quiz", "Relatives Across Countries", "Remote Family Reunion", "2016 Series", "Five", "Five Correct Answers", "Final Target"]],

];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, programme, specificTags], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(6004 + index).padStart(4, '0'),
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
