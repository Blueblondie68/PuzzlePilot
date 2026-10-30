// quiz_pack220.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British adult quiz and game shows - classic quizzes and comedy panels
// 100 questions: tv_5804 to tv_5903
// Audited per-question tags; nine repeated questions replaced.
// quiz_bank.js remains unchanged.

const facts = [
    // BOB'S FULL HOUSE
    ["Who presented the BBC quiz Bob's Full House?", "Bob Monkhouse", ["Bruce Forsyth", "Jimmy Tarbuck", "Les Dennis"], "Easy", "Bob's Full House", ["Bob Monkhouse", "Original BBC Host", "Bob Monkhouse Quiz", "1980s Broadcasting", "Presenter Identity", "Classic BBC One", "Quiz Personality"]],
    ["Which traditional game inspired the format of Bob's Full House?", "Bingo", ["Pontoon", "Dominoes", "Roulette"], "Easy", "Bob's Full House", ["Bingo", "Bingo Inspired Format", "Number Card", "Game Show Mechanics", "Traditional Game", "House Bingo", "Card Completion"]],
    ["How many contestants played in each edition of Bob's Full House?", "Four", ["Three", "Five", "Six"], "Medium", "Bob's Full House", ["Four", "Four Contestants", "Bingo Card Players", "Player Count", "Individual Game", "Opening Line Up", "Classic Format"]],
    ["What was the opening round of Bob's Full House called?", "Four Corners", ["Middle Line", "Gold Run", "Double Chance"], "Medium", "Bob's Full House", ["Four Corners", "Game Round Details", "Opening Round", "Card Corners", "Bingo Numbers", "First Stage", "Quiz Format"]],
    ["What happened when a Bob's Full House contestant was 'Wallied'?", "They missed the next question", ["They lost all their prizes", "They had to swap seats", "They left the game immediately"], "Medium", "Bob's Full House", ["They missed the next question", "Wallied Penalty", "Missed Question", "Buzzing Restriction", "Incorrect Response", "First Stage", "Game Rules"]],
    ["What major prize could the winner play for in the Golden Bingo Card final of Bob's Full House?", "A holiday", ["A new car", "A house", "A boat"], "Medium", "Bob's Full House", ["A holiday", "Golden Bingo Card", "Final Prize", "Luxury Holiday", "Winner Challenge", "Bingo Finale", "Grand Reward"]],
    ["What was the middle-line round of Bob's Full House called?", "Monkhouse Mastercard", ["The Cash Ladder", "Lucky Links", "The Money Maze"], "Medium", "Bob's Full House", ["Monkhouse Mastercard", "Game Round Details", "Middle Line", "Second Round", "Lucky Number", "Number Categories", "Bingo Board"]],

    // GAMBIT
    ["Who presented the original ITV run of Gambit before Tom O'Connor?", "Fred Dinenage", ["Jim Bowen", "Michael Aspel", "Henry Kelly"], "Medium", "Gambit", ["Fred Dinenage", "Original ITV Host", "Fred Dinenage Era", "1970s Television", "Presenter Succession", "Anglia Television", "Quiz Presenter"]],
    ["Which comedian later hosted Gambit during the 1980s?", "Tom O'Connor", ["Les Dawson", "Bob Monkhouse", "Ted Rogers"], "Medium", "Gambit", ["Tom O'Connor", "1980s Host", "Tom OConnor Series", "Presenter Change", "Classic ITV", "Comedy Presenter", "Game Show History"]],
    ["Which card game supplied the basic rules of Gambit?", "Pontoon", ["Poker", "Rummy", "Snap"], "Easy", "Gambit", ["Pontoon", "Pontoon Rules", "Blackjack Variant", "Playing Cards", "Card Game Adaptation", "Twenty One", "Card Total"]],
    ["What card total were Gambit contestants trying to reach without exceeding?", "Twenty-one", ["Fifteen", "Eighteen", "Thirty-one"], "Easy", "Gambit", ["Twenty-one", "Target Twenty One", "Card Points", "Do Not Bust", "Pontoon Scoring", "Winning Condition", "Game Rules"]],
    ["How many couples competed against one another on Gambit?", "Two", ["Three", "Four", "Five"], "Medium", "Gambit", ["Two", "Two Couples", "Teams Of Two", "Card Quiz", "Contestant Pairs", "Player Count", "Studio Rivals"]],
    ["What was the bonus prize board on Gambit called?", "The Gambit Board", ["The Golden Grid", "The Money Ladder", "The Jackpot Wall"], "Medium", "Gambit", ["The Gambit Board", "Bonus Prize Board", "Gambit Board", "Twenty One Squares", "Prize Selection", "Winning Couple", "Bonus Round"]],

    // PERFECT RECALL
    ["Who presented the television quiz Perfect Recall?", "Terry Wogan", ["Michael Parkinson", "John Humphrys", "Des O'Connor"], "Easy", "Perfect Recall", ["Terry Wogan", "Terry Wogan Presenter", "Irish Broadcaster", "2008 Debut", "Memory Quiz", "Original Host", "Channel 4 Programme"]],
    ["Which channel broadcast Perfect Recall?", "Channel 4", ["BBC One", "ITV", "Channel 5"], "Medium", "Perfect Recall", ["Channel 4", "Channel 4 Broadcast", "2008 Series", "Commercial Television", "British Quiz", "Television Network", "2000s Broadcasting"]],
    ["How many contestants began a game of Perfect Recall?", "Four", ["Three", "Five", "Six"], "Medium", "Perfect Recall", ["Four", "Four Contestants", "Opening Line Up", "Player Count", "Memory Competition", "Studio Contestants", "Individual Quiz"]],
    ["How many general knowledge questions were asked in the opening round of Perfect Recall?", "Twenty", ["Ten", "Fifteen", "Thirty"], "Medium", "Perfect Recall", ["Twenty", "Twenty Questions", "First Round", "General Knowledge", "Memory Bank", "Question Count", "Buzzer Format"]],
    ["What was unusual about the questions in later rounds of Perfect Recall?", "Different questions shared the same answers", ["Every question was about music", "All answers were numbers", "Questions were chosen by the audience"], "Medium", "Perfect Recall", ["Different questions shared the same answers", "Same Answers", "Different Questions", "Memory Test", "Later Rounds", "Recall Challenge", "Knowledge Skills"]],
    ["What did the Perfect Recall finalist have to predict before the final round?", "How many questions they would answer correctly", ["How long the round would take", "The other players' final scores", "Which questions would be asked"], "Medium", "Perfect Recall", ["How many questions they would answer correctly", "Prediction Challenge", "Finalist Target", "Winning Goal", "Cash Prize", "Final Round", "Contestant Strategy"]],

    // WIN YOUR WISH LIST
    ["Who hosted the original BBC version of Win Your Wish List?", "Shane Richie", ["Bradley Walsh", "Vernon Kay", "Nick Knowles"], "Easy", "Win Your Wish List", ["Shane Richie", "Shane Richie Host", "BBC One Presenter", "Original Version", "2014 Debut", "Television Actor", "Family Quiz"]],
    ["Which television chef presented the Channel 5 revival of Win Your Wish List?", "Gino D'Acampo", ["Jamie Oliver", "James Martin", "Ainsley Harriott"], "Easy", "Win Your Wish List", ["Gino D'Acampo", "Gino DAcampo Host", "Channel 5 Revival", "Celebrity Chef", "Later Series", "Presenter Change", "2018 Revival"]],
    ["Which channel originally broadcast Win Your Wish List?", "BBC One", ["ITV", "Channel 4", "Sky One"], "Medium", "Win Your Wish List", ["BBC One", "BBC One Original", "First Broadcast", "Television Network", "British Game Show", "2014 Launch", "Channel History"]],
    ["What kind of team originally played together on Win Your Wish List?", "A couple", ["Three colleagues", "Four neighbours", "Five strangers"], "Easy", "Win Your Wish List", ["A couple", "Couple Contestants", "Team Of Two", "Original BBC Format", "Relationship Partners", "Prize Competition", "Studio Quiz"]],
    ["Who asked the quiz questions in the original Win Your Wish List?", "The contestants asked each other", ["A panel of celebrities", "Members of the audience", "A computer voice"], "Medium", "Win Your Wish List", ["The contestants asked each other", "Contestants Ask Questions", "Partner Quiz", "Original Format", "Asker And Answerer", "Knowledge Challenge", "Teamwork"]],
    ["What did Win Your Wish List contestants select to put at risk in each round?", "One of their chosen prizes", ["A member of their team", "A mystery envelope", "A category they had already won"], "Medium", "Win Your Wish List", ["One of their chosen prizes", "Chosen Prize At Risk", "Wishlist Rewards", "Round Selection", "Personal Prizes", "Prize Gamble", "Game Strategy"]],

    // I LITERALLY JUST TOLD YOU — replacements
    ["Who hosted the Channel 4 quiz I Literally Just Told You?", "Jimmy Carr", ["Richard Bacon", "Alan Carr", "Rob Brydon"], "Easy", "I Literally Just Told You", ["Jimmy Carr", "Jimmy Carr Presenter", "Channel 4 Comedy", "2021 Launch", "Original Host", "Memory Quiz", "British Comedy"]],
    ["Which broadcaster created I Literally Just Told You?", "Richard Bacon", ["Jimmy Carr", "Alexander Armstrong", "David Mitchell"], "Medium", "I Literally Just Told You", ["Richard Bacon", "Richard Bacon Creator", "Original Format", "Television Development", "Short Term Memory", "2021 Series", "Channel 4"]],
    ["When were many of the questions on I Literally Just Told You written?", "During the recording of the programme", ["Several months before filming", "Only after the episode aired", "Before contestants arrived in the studio"], "Easy", "I Literally Just Told You", ["During the recording of the programme", "Questions Written Live", "During Filming", "Production Format", "Spontaneous Events", "Observation Test", "Studio Questions"]],
    ["What did contestants mainly need to remember on I Literally Just Told You?", "Things that had happened during the programme", ["Answers from the previous week", "Historical events from a chosen year", "The order of previous episode winners"], "Easy", "I Literally Just Told You", ["Things that had happened during the programme", "Recent Events", "Contestant Memory", "Onscreen Happenings", "Observation Challenge", "Recall Quiz", "Attention To Detail"]],

    // IDENTITY
    ["Which Identity lifeline offered advice from specialist profilers?", "Ask the Experts", ["Phone a Friend", "Double Chance", "Audience Choice"], "Medium", "Identity", ["Ask the Experts", "Profiler Advice", "Lifeline", "Specialist Profilers", "Contestant Assistance", "Identity Matching", "Help Option"]],

    // I LITERALLY JUST TOLD YOU — replacements
    ["What did the final two contestants do on I Literally Just Told You?", "Set questions for each other", ["Compete in a dance-off", "Choose a celebrity substitute", "Play a game of charades"], "Medium", "I Literally Just Told You", ["Set questions for each other", "Finalists Set Questions", "Two Finalists", "Head To Head", "Memory Finale", "Endgame Twist", "Question Writing"]],

    // FASTEST FINGER FIRST
    ["Who presented ITV's Fastest Finger First?", "Anita Rani", ["Sara Cox", "Kate Garraway", "Davina McCall"], "Easy", "Fastest Finger First", ["Anita Rani", "Anita Rani Presenter", "ITV Host", "2022 Launch", "Original Presenter", "Quiz Spinoff", "Television Broadcaster"]],
    ["Fastest Finger First was a spin-off from which major television quiz?", "Who Wants to Be a Millionaire?", ["The Chase", "Pointless", "The Weakest Link"], "Easy", "Fastest Finger First", ["Who Wants to Be a Millionaire?", "Millionaire Spin Off", "ITV Format", "Famous Quiz Connection", "Qualifying Competition", "Question Ladder", "Franchise"]],
    ["Which presenter did the winners of Fastest Finger First qualify to face?", "Jeremy Clarkson", ["Chris Tarrant", "Bradley Walsh", "Ben Shephard"], "Medium", "Fastest Finger First", ["Jeremy Clarkson", "Presenter And Cast Roles", "Millionaire Hot Seat", "Prize Qualification", "Main Show Host", "Fast Track", "ITV Quiz"]],
    ["How many contestants competed on each edition of Fastest Finger First?", "Five", ["Three", "Four", "Six"], "Medium", "Fastest Finger First", ["Five", "Five Contestants", "Qualifying Round", "Player Count", "Opening Line Up", "Question Ladder", "Daytime Quiz"]],
    ["What did calling 'safety net' allow a player to do on Fastest Finger First?", "Pass a question without breaking their chain", ["Eliminate another contestant", "Ask the studio audience", "Restart the entire game"], "Medium", "Fastest Finger First", ["Pass a question without breaking their chain", "Safety Net", "Pass Question", "Protect Scoring Chain", "Game Rules", "Player Choice", "Question Risk"]],
    ["How many correct answers in a row could win a qualifying round of Fastest Finger First immediately?", "Twelve", ["Eight", "Ten", "Fifteen"], "Medium", "Fastest Finger First", ["Twelve", "Twelve Correct Answers", "Consecutive Streak", "Automatic Qualifier", "Opening Quiz", "Question Ladder", "Win Condition"]],

    // WINNER TAKES ALL
    ["Which entertainer originally presented ITV's Winner Takes All?", "Jimmy Tarbuck", ["Bob Monkhouse", "Jim Bowen", "Bruce Forsyth"], "Easy", "Winner Takes All", ["Jimmy Tarbuck", "Jimmy Tarbuck Host", "ITV Original", "Classic Presenter", "1970s Television", "Quiz Personality", "Game Show Host"]],
    ["Who took over as presenter of Winner Takes All after serving as its announcer?", "Geoffrey Wheeler", ["Alan Dedicoat", "Peter Dickson", "John Sachs"], "Medium", "Winner Takes All", ["Geoffrey Wheeler", "Geoffrey Wheeler Host", "Former Announcer", "Presenter Succession", "ITV Game Show", "Broadcast Voice", "Programme History"]],
    ["What gave Winner Takes All its distinctive twist on general knowledge questions?", "Betting odds", ["A word-search board", "A giant dartboard", "A roulette wheel"], "Medium", "Winner Takes All", ["Betting odds", "Programme Gameplay", "Wagering Quiz", "General Knowledge", "Money Betting", "Programme Twist", "Question Mechanism"]],
    ["What did contestants wager when answering questions on Winner Takes All?", "Their accumulated points", ["Their teammates' places", "Their holidays", "Their question categories"], "Medium", "Winner Takes All", ["Their accumulated points", "Accumulated Points", "Contestant Wagers", "Betting Rules", "Quiz Strategy", "Answer Risk", "Score Staking"]],
    ["What determined how much a correct answer paid on Winner Takes All?", "The odds attached to the answer", ["The contestant's age", "The host's chosen multiplier", "The audience's applause"], "Medium", "Winner Takes All", ["The odds attached to the answer", "Answer Odds", "Payout Ratio", "Correct Response", "Betting Mechanics", "Winning Points", "Odds Quiz"]],
    ["Which comedian presented the Challenge TV revival of Winner Takes All?", "Bobby Davro", ["Brian Conley", "Les Dennis", "Jim Davidson"], "Medium", "Winner Takes All", ["Bobby Davro", "Bobby Davro Host", "Challenge Revival", "2000s Television", "Comedian Presenter", "Later Version", "Quiz Reboot"]],

    // SHOOTING STARS
    ["Which comedy double act hosted Shooting Stars?", "Vic Reeves and Bob Mortimer", ["French and Saunders", "Ant and Dec", "Hale and Pace"], "Easy", "Shooting Stars", ["Vic Reeves and Bob Mortimer", "Presenter And Cast Roles", "Comedy Duo", "Surreal Panel", "Original Hosts", "British Comedy", "BBC Television"]],
    ["Which presenter was a long-running team captain on Shooting Stars?", "Ulrika Jonsson", ["Claudia Winkleman", "Davina McCall", "Carol Vorderman"], "Easy", "Shooting Stars", ["Ulrika Jonsson", "Presenter And Cast Roles", "Team Captain", "Original Cast", "Celebrity Presenter", "Comedy Team", "Long Running Panellist"]],
    ["Which comedian captained a Shooting Stars team opposite Ulrika Jonsson during its early series?", "Mark Lamarr", ["Sean Lock", "Jack Whitehall", "Alan Carr"], "Medium", "Shooting Stars", ["Mark Lamarr", "Presenter And Cast Roles", "Early Captain", "Ulrika Jonsson Opponent", "Comedian", "First Series", "Panel Rivalry"]],
    ["Which actor played the giant baby scorekeeper George Dawes on Shooting Stars?", "Matt Lucas", ["David Walliams", "Peter Kay", "Paul Whitehouse"], "Easy", "Shooting Stars", ["Matt Lucas", "Programme Gameplay", "George Dawes", "Giant Baby", "Scorekeeper", "BBC Comedy", "Character Actor"]],
    ["What kind of bird appeared in the Shooting Stars round 'From Above'?", "A dove", ["An owl", "A parrot", "A seagull"], "Easy", "Shooting Stars", ["A dove", "Dove From Above", "Bird Prop", "Studio Ceiling", "Question Categories", "Round Name", "Animal Theme"]],
    ["What did the cry 'Uvavu' usually mean on Shooting Stars?", "An incorrect answer", ["A bonus prize", "The end of the programme", "A tie between teams"], "Medium", "Shooting Stars", ["An incorrect answer", "Uvavu", "Wrong Answer Cry", "Dove Round", "Vic Reeves Catchphrase", "Surreal Comedy", "Panel Mistakes"]],
    ["What did the Shooting Stars cry 'Eranu' announce?", "A special prize", ["A wrong answer", "A new team captain", "The final round"], "Medium", "Shooting Stars", ["A special prize", "Eranu", "Special Prize Cry", "Dove Round", "Unusual Prize", "Vic Reeves Catchphrase", "Hidden Reward"]],
    ["Which comedian became a Shooting Stars team captain during its later revival?", "Jack Dee", ["Dara O Briain", "Stephen Fry", "Michael McIntyre"], "Medium", "Shooting Stars", ["Jack Dee", "Presenter And Cast Roles", "Revival Captain", "BBC Return", "Comedy Presenter", "Team Leader", "Later Series"]],

    // 8 OUT OF 10 CATS
    ["Who hosted the comedy panel show 8 Out of 10 Cats?", "Jimmy Carr", ["Alan Carr", "Rhod Gilbert", "David Mitchell"], "Easy", "8 Out of 10 Cats", ["Jimmy Carr", "Jimmy Carr Host", "Comedy Panel", "Channel 4", "2005 Launch", "Original Presenter", "Popular Culture"]],
    ["Which comedian was a long-running team captain on 8 Out of 10 Cats?", "Sean Lock", ["Lee Mack", "Ricky Gervais", "Jack Dee"], "Easy", "8 Out of 10 Cats", ["Sean Lock", "Presenter And Cast Roles", "Team Captain", "Long Running Cast", "British Comedian", "Panel Team", "Original Era"]],
    ["Which Phoenix Nights comedian was an original team captain on 8 Out of 10 Cats?", "Dave Spikey", ["Peter Kay", "Paddy McGuinness", "Justin Moorhouse"], "Medium", "8 Out of 10 Cats", ["Dave Spikey", "Presenter And Cast Roles", "Phoenix Nights", "Original Captain", "Comedy Performer", "Early Line Up", "Panel Leader"]],
    ["What kind of research formed the basis of many questions on 8 Out of 10 Cats?", "Public opinion polls", ["Medical trials", "School examinations", "Weather forecasts"], "Easy", "8 Out of 10 Cats", ["Public opinion polls", "Programme Gameplay", "Surveys", "Popular Opinion", "Statistical Questions", "Audience Research", "Quiz Concept"]],
    ["What was the round 'What Are You Talking About?' on 8 Out of 10 Cats about?", "The week's most discussed topics", ["Celebrity dance moves", "Hidden song lyrics", "Foreign-language phrases"], "Medium", "8 Out of 10 Cats", ["The week's most discussed topics", "Weeks Most Discussed", "Talking Points", "Topical Stories", "Discussion Round", "News And Culture", "Round Title"]],
    ["Which comedian later became a team captain alongside Sean Lock on 8 Out of 10 Cats?", "Jon Richardson", ["Greg Davies", "Russell Brand", "Tim Vine"], "Medium", "8 Out of 10 Cats", ["Jon Richardson", "Presenter And Cast Roles", "Later Captain", "Sean Lock", "Team Rivalry", "Comedian", "Panel Cast Change"]],
    ["Which word-and-numbers quiz inspired an 8 Out of 10 Cats spin-off?", "Countdown", ["Blockbusters", "Fifteen-to-One", "Catchphrase"], "Easy", "8 Out of 10 Cats", ["Countdown", "Programme Gameplay", "Numbers And Letters", "Comedy Spinoff", "Channel 4", "Word Game", "Quiz Crossover"]],

    // MOCK THE WEEK
    ["Who hosted the original BBC series of Mock the Week?", "Dara O Briain", ["Jimmy Carr", "Rob Brydon", "Stephen Fry"], "Easy", "Mock the Week", ["Dara O Briain", "Presenter And Cast Roles", "Original Host", "BBC Two", "Topical Comedy", "2005 Launch", "Panel Presenter"]],
    ["Which comedian served as a long-running team captain on Mock the Week?", "Hugh Dennis", ["Jon Richardson", "Sean Lock", "Jack Dee"], "Easy", "Mock the Week", ["Hugh Dennis", "Presenter And Cast Roles", "Team Captain", "Long Running Regular", "Stand Up Comedy", "Panel Role", "BBC Comedy"]],
    ["Which Scottish comedian was an early regular on Mock the Week?", "Frankie Boyle", ["Kevin Bridges", "Billy Connolly", "Craig Ferguson"], "Easy", "Mock the Week", ["Frankie Boyle", "Programme Gameplay", "Scottish Comedian", "Original Regular", "Panel Comedy", "Early Cast", "Topical Satire"]],
    ["Which BBC channel originally broadcast Mock the Week?", "BBC Two", ["BBC One", "BBC Three", "BBC Four"], "Medium", "Mock the Week", ["BBC Two", "Broadcast Network Detail", "Original Channel", "British Broadcaster", "2005 Premiere", "News Comedy", "Broadcast History"]],
    ["In which Mock the Week round did comedians offer one-liners for imaginary situations?", "Scenes We'd Like to See", ["Headliners", "Odd One Out", "Picture This"], "Medium", "Mock the Week", ["Scenes We'd Like to See", "Scenes Wed Like To See", "Imaginary Scenarios", "One Liners", "Stand Up Round", "Improvisation", "Comic Performances"]],
    ["Which Mock the Week round challenged panellists to work out a headline from its initial letters?", "Headliners", ["Quickfire", "The Wheel", "Connections"], "Medium", "Mock the Week", ["Headliners", "Game Round Details", "Initial Letters", "Newspaper Headlines", "Word Clues", "News Round", "Acronym Puzzle"]],
    ["In Mock the Week's 'If This Is the Answer, What Is the Question?', what did players invent?", "Questions to fit a given answer", ["Newspaper headlines", "Song titles", "Fictional advert slogans"], "Medium", "Mock the Week", ["Questions to fit a given answer", "Invent Questions", "Given Answer", "If This Is The Answer", "Improvised Comedy", "Question Invention", "Panel Challenge"]],

    // THE BIG FAT QUIZ OF THE YEAR
    ["Who presents The Big Fat Quiz of the Year?", "Jimmy Carr", ["Rob Brydon", "Jonathan Ross", "David Mitchell"], "Easy", "The Big Fat Quiz of the Year", ["Jimmy Carr", "Jimmy Carr Presenter", "Annual Quiz", "Channel 4", "2004 Launch", "Comedy Host", "Yearly Review"]],
    ["Which channel broadcasts The Big Fat Quiz of the Year?", "Channel 4", ["BBC One", "ITV", "Channel 5"], "Easy", "The Big Fat Quiz of the Year", ["Channel 4", "Broadcast Network Detail", "Original Channel", "Annual Broadcast", "Television Network", "Christmas Special", "Comedy Panel"]],
    ["What period do the questions in The Big Fat Quiz of the Year normally look back over?", "The year just ending", ["The previous decade", "The host's childhood", "The last hundred years"], "Easy", "The Big Fat Quiz of the Year", ["The year just ending", "Previous Year", "Year In Review", "News And Events", "Popular Culture", "Annual Recap", "Year End Format"]],
    ["How many celebrities usually compete in The Big Fat Quiz of the Year?", "Six", ["Four", "Five", "Eight"], "Medium", "The Big Fat Quiz of the Year", ["Six", "Six Celebrities", "Three Pairs", "Team Quiz", "Famous Contestants", "Studio Line Up", "Comedy Teams"]],
    ["Which Big Fat Quiz spin-off asks questions across history and popular culture rather than just one year?", "The Big Fat Quiz of Everything", ["The Big Fat Quiz of Sport", "The Big Fat Anniversary Quiz", "The Big Fat Quiz of the 90s"], "Medium", "The Big Fat Quiz of the Year", ["The Big Fat Quiz of Everything", "Big Fat Quiz Of Everything", "History And Culture", "Spinoff Format", "General Knowledge", "Multiple Eras", "Themed Edition"]],
    ["What was the title of the Big Fat Quiz special celebrating Channel 4's history?", "The Big Fat Anniversary Quiz", ["The Big Fat Quiz of Everything", "The Big Fat Quiz of Sport", "The Big Fat Quiz of the 90s"], "Medium", "The Big Fat Quiz of the Year", ["The Big Fat Anniversary Quiz", "Big Fat Anniversary Quiz", "Channel 4 History", "25th Anniversary", "2007 Special", "Commemorative Quiz", "Special Edition"]],
    ["Which comedian teamed up with Russell Brand to win The Big Fat Quiz of the Year in 2006?", "Noel Fielding", ["Richard Ayoade", "Jack Whitehall", "David Mitchell"], "Medium", "The Big Fat Quiz of the Year", ["Noel Fielding", "Goth Detectives Team", "Russell Brand Partner", "2006 Champions", "Goth Detectives", "Comedy Duo", "Winning Team"]],

    // ROOM 101
    ["Who first presented the television version of Room 101?", "Nick Hancock", ["Paul Merton", "Frank Skinner", "Angus Deayton"], "Medium", "Room 101", ["Nick Hancock", "Presenter And Cast Roles", "First TV Host", "1994 Debut", "BBC Two", "Guest Dislikes", "Original Presenter"]],
    ["Who succeeded Nick Hancock as the host of Room 101?", "Paul Merton", ["Stephen Fry", "Rob Brydon", "Clive Anderson"], "Medium", "Room 101", ["Paul Merton", "Presenter And Cast Roles", "Second Presenter", "Host Succession", "2000s Television", "Celebrity Interviews", "BBC Comedy"]],
    ["Which comedian hosted the three-guest revival of Room 101?", "Frank Skinner", ["Lee Mack", "Jimmy Carr", "Rhod Gilbert"], "Easy", "Room 101", ["Frank Skinner", "Presenter And Cast Roles", "Three Guest Revival", "2012 Restart", "Comedy Presenter", "Guest Rankings", "BBC One"]],
    ["Which George Orwell novel supplied the title Room 101?", "Nineteen Eighty-Four", ["Animal Farm", "Coming Up for Air", "Keep the Aspidistra Flying"], "Medium", "Room 101", ["Nineteen Eighty-Four", "Nineteen Eighty Four", "George Orwell", "Dystopian Novel", "Literary Reference", "Room Of Fear", "Programme Title Origin"]],
    ["What did celebrity guests try to consign to Room 101?", "Things they particularly disliked", ["Objects they had invented", "Items from their childhood homes", "Prizes they had won"], "Easy", "Room 101", ["Things they particularly disliked", "Pet Hates", "Guest Dislikes", "Room Disposal", "Celebrity Opinions", "Comedy Discussion", "Show Premise"]],
    ["How many celebrity guests competed in the Frank Skinner version of Room 101?", "Three", ["Two", "Four", "Five"], "Medium", "Room 101", ["Three", "Three Guests", "Frank Skinner Era", "Competitive Dislikes", "Later Format", "2012 Revival", "Celebrity Panellists"]],
    ["Which BBC channel broadcast the original television series of Room 101?", "BBC Two", ["BBC One", "BBC Three", "BBC Four"], "Medium", "Room 101", ["BBC Two", "Broadcast Network Detail", "Original Broadcast", "1990s Television", "British Panel Show", "Television Network", "Channel History"]],

    // THE BUBBLE
    ["Who presented the BBC comedy news quiz The Bubble?", "David Mitchell", ["Jimmy Carr", "Rob Brydon", "Alexander Armstrong"], "Easy", "The Bubble", ["David Mitchell", "Presenter And Cast Roles", "Presenter", "2010 Debut", "News Quiz", "Comedy Host", "BBC Two"]],
    ["Which channel broadcast The Bubble?", "BBC Two", ["ITV", "Channel 4", "Channel 5"], "Medium", "The Bubble", ["BBC Two", "Broadcast Network Detail", "Original Network", "British Broadcaster", "2010 Series", "News Panel", "Comedy Format"]],
    ["How many celebrities competed each week on The Bubble?", "Three", ["Two", "Four", "Six"], "Medium", "The Bubble", ["Three", "Three Celebrities", "Weekly Players", "Panel Line Up", "News Isolation", "Contestant Count", "Celebrity Guests"]],
    ["For how long were the celebrity contestants cut off from the outside world on The Bubble?", "Four days", ["One day", "A week", "A fortnight"], "Medium", "The Bubble", ["Four days", "Programme Duration", "News Isolation", "Outside World Blocked", "Media Blackout", "Contestant Preparation", "Comedy Experiment"]],
    ["What did celebrities have to distinguish on The Bubble?", "Real news stories from invented ones", ["Genuine antiques from replicas", "Real voices from impersonations", "True song lyrics from false ones"], "Easy", "The Bubble", ["Real news stories from invented ones", "Real Versus Fake News", "Invented Stories", "News Recognition", "Disinformation Quiz", "Guessing Game", "Topical Panel"]],

    // INSERT NAME HERE
    ["Who presented the BBC panel game Insert Name Here?", "Sue Perkins", ["Sandi Toksvig", "Jo Brand", "Victoria Coren Mitchell"], "Easy", "Insert Name Here", ["Sue Perkins", "Presenter And Cast Roles", "Original Host", "BBC Two", "2016 Debut", "Comedy Panel", "Presenter Identity"]],
    ["Which pair were the team captains on Insert Name Here?", "Richard Osman and Josh Widdicombe", ["David Mitchell and Lee Mack", "Sean Lock and Jon Richardson", "Hugh Dennis and Frankie Boyle"], "Medium", "Insert Name Here", ["Richard Osman and Josh Widdicombe", "Presenter And Cast Roles", "Team Captains", "Celebrity Duos", "Panel Rivalry", "Comic Personalities", "Team Roles"]],
    ["What linked the famous people discussed in each edition of Insert Name Here?", "Variations of the same first name", ["The same birthday", "The same occupation", "The same home town"], "Easy", "Insert Name Here", ["Variations of the same first name", "Shared First Name", "Name Variations", "Famous People", "Biographical Quiz", "Episode Theme", "First Name Connections"]],
    ["What did a correct multiple-choice answer earn a team on Insert Name Here?", "A cardboard cutout of the person", ["A cash prize", "A spinning letter", "An extra celebrity teammate"], "Medium", "Insert Name Here", ["A cardboard cutout of the person", "Cardboard Cutout", "Correct Answers", "Celebrity Reward", "Scoring Mechanic", "Visual Prize", "Panel Game"]],
    ["What sort of specialist regularly joined the teams on Insert Name Here?", "A historian", ["A chef", "A sports referee", "A magician"], "Medium", "Insert Name Here", ["A historian", "Historian", "Expert Guest", "History Context", "Famous Names", "Specialist Help", "Historical Knowledge"]],

    // DARA O BRIAIN'S GO 8 BIT — replacements
    ["Who hosted the video-game panel show Dara O Briain's Go 8 Bit?", "Dara Ó Briain", ["Jimmy Carr", "Rob Brydon", "Richard Ayoade"], "Easy", "Dara O Briain's Go 8 Bit", ["Dara Ó Briain", "Dara O Briain", "Go 8 Bit Host", "Dave Channel", "Video Game Quiz", "2016 Debut", "Irish Comedian"]],
    ["Which pair captained the competing teams on Dara O Briain's Go 8 Bit?", "Steve McNeil and Sam Pamphilon", ["Alex Horne and Greg Davies", "Sean Lock and Jon Richardson", "David Mitchell and Lee Mack"], "Medium", "Dara O Briain's Go 8 Bit", ["Steve McNeil and Sam Pamphilon", "Presenter And Cast Roles", "Team Captains", "Programme Creators", "Celebrity Teams", "Gaming Comedians", "Panel Competition"]],
    ["Who was the resident video-game expert on Dara O Briain's Go 8 Bit?", "Ellie Gibson", ["Rachel Riley", "Sue Perkins", "Vicki Butler-Henderson"], "Medium", "Dara O Briain's Go 8 Bit", ["Ellie Gibson", "Presenter And Cast Roles", "Gaming Expert", "Video Game Journalist", "Resident Analyst", "Game Rules", "Commentator"]],

    // THE GUESS LIST
    ["How did contestants score points on The Guess List?", "By choosing a celebrity's correct guess", ["By answering before the host finished", "By drawing recognisable pictures", "By naming songs from their intros"], "Medium", "The Guess List", ["By choosing a celebrity's correct guess", "Choose Celebrity Guess", "Correct Guess", "Point Scoring", "Famous Panellists", "Contestant Decision", "Panel Mechanic"]],

    // DARA O BRIAIN'S GO 8 BIT — replacements
    ["Which television channel originally broadcast Dara O Briain's Go 8 Bit?", "Dave", ["E4", "ITV2", "BBC Three"], "Medium", "Dara O Briain's Go 8 Bit", ["Dave", "Dave Channel", "Original Network", "Video Game Panel", "2016 Launch", "UK Broadcasting", "Comedy Gaming"]],

    // CELEBRITY JUICE
    ["Which comic character hosted Celebrity Juice?", "Keith Lemon", ["Ali G", "Alan Partridge", "Borat"], "Easy", "Celebrity Juice", ["Keith Lemon", "Presenter And Cast Roles", "Comic Character", "Leigh Francis", "ITV2 Comedy", "Original Host", "Celebrity Games"]],
    ["Which channel originally broadcast Celebrity Juice?", "ITV2", ["BBC Two", "Channel 4", "E4"], "Easy", "Celebrity Juice", ["ITV2", "Broadcast Network Detail", "Original Channel", "ITV Digital Channel", "2008 Launch", "Comedy Panel", "Entertainment Network"]],
    ["Who were the two original team captains on Celebrity Juice?", "Holly Willoughby and Fearne Cotton", ["Claudia Winkleman and Tess Daly", "Davina McCall and Emma Willis", "Mel Giedroyc and Sue Perkins"], "Easy", "Celebrity Juice", ["Holly Willoughby and Fearne Cotton", "Presenter And Cast Roles", "Original Captains", "Female Presenters", "Celebrity Team", "Original Cast", "Presenter Duo"]],
    ["Which television chef sometimes stood in as a team captain on Celebrity Juice?", "Gino D'Acampo", ["Jamie Oliver", "Gordon Ramsay", "James Martin"], "Medium", "Celebrity Juice", ["Gino D'Acampo", "Gino DAcampo", "Chef Captain", "Guest Captain", "Italian Chef", "Comedy Panel", "Celebrity Presenter"]],
    ["Which former Love Island presenter became a Celebrity Juice team captain in later series?", "Laura Whitmore", ["Caroline Flack", "Maya Jama", "Davina McCall"], "Medium", "Celebrity Juice", ["Laura Whitmore", "Presenter And Cast Roles", "Love Island Presenter", "Later Captain", "Series Change", "Irish Broadcaster", "Celebrity Host"]],
    ["What kind of stories inspired many of the games on Celebrity Juice?", "Celebrity gossip", ["Historical discoveries", "International finance", "Weather forecasts"], "Easy", "Celebrity Juice", ["Celebrity gossip", "Celebrity Themed Rounds", "Tabloid Stories", "Entertainment News", "Showbiz Trivia", "Comedy Challenges", "Pop Culture"]],

];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, programme, specificTags], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(5804 + index).padStart(4, '0'),
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
