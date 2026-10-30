// quiz_pack216.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British quiz and game shows - classics and newer formats
// 100 questions: tv_5404 to tv_5503
// Audited individual tags; six repeated Answer Trap questions replaced with The 1% Club.
// Leave quiz_bank.js unchanged until the end of the evening.

const facts = [
    // CHAIN LETTERS (7)
    ["Who presented the original series of Chain Letters?", "Jeremy Beadle", ["Andrew O'Connor", "Dave Spikey", "Ted Robbins"], "Easy", "Chain Letters", ["Jeremy Beadle", "Original Host", "1987 Launch", "ITV Word Game", "Presenter History", "1980s Television", "Word Chains"]],
    ["Which comedian hosted the final ITV series of Chain Letters?", "Dave Spikey", ["Bobby Davro", "Jim Davidson", "Brian Conley"], "Medium", "Chain Letters", ["Dave Spikey", "Final ITV Series", "1997 Television", "Comedy Presenter", "Presenter Succession", "Word Game Host", "ITV Revival"]],
    ["What did contestants change to make new words on Chain Letters?", "Letters", ["Numbers", "Pictures", "Musical notes"], "Easy", "Chain Letters", ["Letter Changes", "Word Transformations", "New Words", "Wordplay", "Vocabulary Quiz", "Spelling Skills", "Chain Construction"]],
    ["How long did contestants have to build a word chain in Chain Letters' opening round?", "45 seconds", ["30 seconds", "60 seconds", "90 seconds"], "Medium", "Chain Letters", ["Forty Five Seconds", "Opening Round", "Timed Word Chain", "Countdown Challenge", "Original Format", "Rapid Wordplay", "Chain Building"]],
    ["How many contestants competed in a regular game of Chain Letters?", "Three", ["Two", "Four", "Five"], "Easy", "Chain Letters", ["Three Contestants", "Opening Line Up", "Player Count", "ITV Game Format", "Individual Competitors", "Word Quiz", "Contestant Rules"]],
    ["What was the on-screen word computer on Chain Letters called?", "Wordsworth", ["Wordmaster", "Lexicon", "Letterbox"], "Medium", "Chain Letters", ["Wordsworth", "Onscreen Computer", "Word Display", "Game Technology", "Word Checker", "Computerised Quiz", "Digital Presenter"]],
    ["What was the final challenge in Chain Letters called?", "Superchain", ["Crossfire", "Gold Run", "Puzzleword"], "Medium", "Chain Letters", ["Superchain", "Final Challenge", "Endgame", "Word Chain", "Bonus Round", "Contestant Finale", "Word Transformation"]],

    // LUCKY LADDERS (6)
    ["Who presented ITV's word game Lucky Ladders?", "Lennie Bennett", ["Tom O'Connor", "Bob Holness", "Michael Barrymore"], "Medium", "Lucky Ladders", ["Lennie Bennett", "Original Presenter", "ITV Word Game", "1988 Launch", "Classic Quiz Host", "1980s Television", "Presenter Identity"]],
    ["What were Lucky Ladders contestants trying to complete?", "A chain of connected words", ["A crossword of famous names", "A set of number sequences", "A musical score"], "Easy", "Lucky Ladders", ["Connected Words", "Word Associations", "Word Ladder", "Linking Terms", "Word Puzzle", "Vocabulary", "Puzzle Completion"]],
    ["Which words were already shown to players on a Lucky Ladders puzzle?", "The first and last", ["Every second word", "Only the middle two", "None of them"], "Medium", "Lucky Ladders", ["First And Last Words", "Puzzle Endpoints", "Word Chain Clues", "Visible Words", "Missing Middle", "Word Connections", "Game Format"]],
    ["How did successive words on a Lucky Ladders board relate to one another?", "Each neighbouring pair was associated", ["Every word rhymed", "Each word had the same length", "All words were anagrams"], "Medium", "Lucky Ladders", ["Associated Words", "Adjacent Word Links", "Meaning Connections", "Sequence Puzzle", "Vocabulary Relationships", "Word Chain Mechanics", "Word Clues"]],
    ["What choice could Lucky Ladders players make when revealing letters?", "Give or take", ["Buy or sell", "Swap or steal", "Double or drop"], "Medium", "Lucky Ladders", ["Give Or Take", "Letter Reveal", "Player Decision", "Word Clues", "Game Strategy", "Missing Letters", "Choice Mechanic"]],
    ["Which American word game inspired Lucky Ladders?", "Chain Reaction", ["Password", "Jeopardy!", "The $10,000 Pyramid"], "Medium", "Lucky Ladders", ["Chain Reaction", "American Original", "Word Game Adaptation", "US Format", "International Television", "Game Show Inspiration", "1980s UK Version"]],

    // CROSSWITS (7)
    ["Which comedian was the original host of Crosswits?", "Barry Cryer", ["Tom O'Connor", "Les Dawson", "Jimmy Tarbuck"], "Medium", "Crosswits", ["Barry Cryer", "First Presenter", "1985 Launch", "British Comedian", "ITV Word Puzzle", "Early Series", "Host Identity"]],
    ["Who became the long-serving host of Crosswits after Barry Cryer?", "Tom O'Connor", ["John Junkin", "Bob Monkhouse", "Henry Kelly"], "Easy", "Crosswits", ["Tom OConnor", "Long Serving Host", "Barry Cryer", "Presenter Succession", "1980s Television", "Word Game Presenter", "ITV Quiz"]],
    ["What type of puzzle formed the main board in Crosswits?", "A crossword", ["A word search", "A maze", "A jigsaw"], "Easy", "Crosswits", ["Crossword Board", "Crossword Clues", "Word Puzzle", "Grid Answers", "Language Knowledge", "Puzzle Format", "Solving Words"]],
    ["Who partnered an ordinary contestant in each Crosswits team?", "A celebrity", ["A relative", "A schoolteacher", "A professional athlete"], "Easy", "Crosswits", ["Celebrity Partner", "Contestant Pair", "Team Of Two", "Celebrity Assistance", "Puzzle Solving", "Game Show Teams", "Cooperative Quiz"]],
    ["How many bonus points did a Crosswits team earn for solving the common keyword?", "Ten", ["Five", "Fifteen", "Twenty"], "Medium", "Crosswits", ["Ten Bonus Points", "Keyword Solution", "Common Link", "Quiz Scoring", "Clue Words", "Extra Reward", "Crossword Rules"]],
    ["What was the final crossword challenge on Crosswits called?", "Crossfire", ["Superchain", "The Money List", "The Wonderwall"], "Medium", "Crosswits", ["Crossfire", "Final Crossword", "Bonus Round", "Ten Clues", "Cash And Prizes", "Endgame Puzzle", "Winning Team"]],
    ["How much time did Crosswits finalists get to solve their final crossword?", "60 seconds", ["30 seconds", "45 seconds", "90 seconds"], "Medium", "Crosswits", ["Sixty Seconds", "Final Time Limit", "Crossfire", "Crossword Finale", "Timed Solving", "Ten Clues", "One Minute"]],

    // EVERY SECOND COUNTS (7)
    ["Which magician hosted Every Second Counts on BBC One?", "Paul Daniels", ["David Nixon", "Wayne Dobson", "Geoffrey Durham"], "Easy", "Every Second Counts", ["Paul Daniels", "Original Presenter", "BBC One", "1986 Launch", "Magician Host", "1980s Quiz", "Quiz Presenter"]],
    ["What kind of contestants competed as teams on Every Second Counts?", "Married couples", ["Groups of schoolfriends", "Celebrity siblings", "Teams of four neighbours"], "Medium", "Every Second Counts", ["Married Couples", "Husband And Wife", "Team Contestants", "Partners", "Couple Competition", "Quiz Format", "Contestant Relationship"]],
    ["How many couples played in each game of Every Second Counts?", "Three", ["Two", "Four", "Five"], "Easy", "Every Second Counts", ["Three Couples", "Six Contestants", "Opening Line Up", "Team Format", "Married Pairs", "BBC Quiz", "Player Count"]],
    ["What did correct answers earn contestants on Every Second Counts?", "Extra time", ["An extra teammate", "Playing cards", "Additional letters"], "Easy", "Every Second Counts", ["Extra Time", "Correct Answers", "Time Bank", "Accumulated Seconds", "Quiz Reward", "Final Clock", "Game Scoring"]],
    ["What happened to a player who gave a wrong answer in an Every Second Counts round?", "They were frozen out", ["Their clock doubled", "They changed partners", "They won a consolation point"], "Medium", "Every Second Counts", ["Frozen Out", "Wrong Answer", "Temporary Elimination", "Player Penalty", "Round Rules", "Time Quiz", "Contestant Status"]],
    ["What did the winning couple take into the Every Second Counts final?", "The time they had earned", ["Their opponents' scores", "A choice of three lifelines", "A new set of bonus cards"], "Easy", "Every Second Counts", ["Earned Time", "Winning Couple", "Final Round", "Accumulated Seconds", "Time Limit", "Bonus Challenge", "Endgame Rules"]],
    ["What did Every Second Counts finalists switch off by giving correct answers?", "A row of lights", ["A bank of televisions", "A set of alarms", "A moving conveyor belt"], "Medium", "Every Second Counts", ["Row Of Lights", "Switch Off Lights", "Final Challenge", "Correct Responses", "Countdown", "Winning Couple", "Quiz Finale"]],

    // WIPEOUT (7)
    ["Who originally hosted the BBC quiz Wipeout?", "Paul Daniels", ["Bob Monkhouse", "Chris Tarrant", "Michael Aspel"], "Easy", "Wipeout", ["Paul Daniels", "Original Host", "BBC One", "1994 Launch", "Magician Presenter", "Quiz Host", "1990s Television"]],
    ["Who succeeded Paul Daniels as presenter of Wipeout?", "Bob Monkhouse", ["Bruce Forsyth", "Jim Bowen", "Les Dennis"], "Easy", "Wipeout", ["Bob Monkhouse", "Presenter Succession", "Paul Daniels", "1998 Takeover", "BBC Daytime", "Classic Comedian", "Quiz Presenter"]],
    ["How many possible answers appeared on Wipeout's main question board?", "Sixteen", ["Ten", "Twelve", "Twenty"], "Medium", "Wipeout", ["Sixteen Options", "Main Answer Board", "Eleven Correct", "Five Incorrect", "Multiple Choice", "Answer Grid", "Game Format"]],
    ["What was a 'wipeout' on the BBC quiz Wipeout?", "A wrong answer that erased a player's money", ["A correct answer worth double", "A special category change", "A free pass to the final"], "Easy", "Wipeout", ["Wrong Answer", "Money Wiped Out", "Cash Penalty", "Incorrect Option", "Prize Loss", "Original Rules", "Risky Selection"]],
    ["How many wrong answers were hidden on the original sixteen-answer Wipeout board?", "Five", ["Three", "Seven", "Nine"], "Medium", "Wipeout", ["Five Wrong Answers", "Sixteen Answer Board", "Incorrect Choices", "Eleven Right Answers", "Quiz Structure", "Opening Game", "Original Format"]],
    ["In Wipeout's auction round, what did contestants bid on?", "How many correct answers they could find", ["The value of a mystery holiday", "How quickly they could solve a crossword", "How many opponents they could eliminate"], "Medium", "Wipeout", ["Wipeout Auction", "Correct Answer Bid", "Player Strategy", "Second Round", "Bidding Challenge", "Risk And Reward", "Game Mechanics"]],
    ["How many correct answers did a Wipeout finalist need to find within one minute?", "Six", ["Four", "Eight", "Ten"], "Medium", "Wipeout", ["Six Correct Answers", "One Minute", "Finalist Challenge", "Bonus Holiday", "Twelve Options", "Timed Endgame", "Game Rules"]],

    // THE PYRAMID GAME (7)
    ["Who presented the original standalone British series of The Pyramid Game?", "Steve Jones", ["Donny Osmond", "Bob Holness", "John Leslie"], "Medium", "The Pyramid Game", ["Steve Jones", "Original British Host", "1981 Series", "Presenter Identity", "ITV Game Show", "British Edition", "First Standalone Run"]],
    ["Which singer hosted the Challenge TV revival of The Pyramid Game?", "Donny Osmond", ["David Cassidy", "Cliff Richard", "David Essex"], "Easy", "The Pyramid Game", ["Donny Osmond", "Challenge TV", "2007 Revival", "American Singer", "Presenter Succession", "Music Star Host", "Reboot"]],
    ["Who teamed up with members of the public on The Pyramid Game?", "Celebrities", ["Their employers", "Their children", "Sports referees"], "Easy", "The Pyramid Game", ["Celebrity Partners", "Public Contestants", "Team Format", "Famous Teammates", "Word Guessing", "Game Pair", "Studio Participants"]],
    ["How many category screens made up the pyramid in The Pyramid Game's main round?", "Six", ["Four", "Eight", "Ten"], "Medium", "The Pyramid Game", ["Six Categories", "Main Pyramid", "Game Board", "Category Screens", "Timed Word Quiz", "Structure", "Category Choices"]],
    ["What did a Pyramid Game player do to help their partner guess words?", "Give verbal descriptions", ["Draw pictures", "Sing the answers", "Spell each word aloud"], "Easy", "The Pyramid Game", ["Verbal Descriptions", "Word Clues", "Partner Guessing", "Forbidden Answers", "Communication Skills", "Celebrity Team", "Clue Giving"]],
    ["What was The Pyramid Game's final round called?", "The Winners' Circle", ["The Gold Run", "The Star Game", "The Answer Trap"], "Medium", "The Pyramid Game", ["Winners Circle", "Final Round", "Bonus Game", "Pyramid Categories", "Word Association", "Grand Prize", "Endgame"]],
    ["What was the special seven-word challenge in Steve Jones's The Pyramid Game called?", "Lucky 7", ["Secret Six", "Golden Five", "Perfect Ten"], "Medium", "The Pyramid Game", ["Lucky Seven", "Steve Jones Series", "Seven Word Challenge", "Special Bonus", "Word Guessing", "Game Mechanics", "Original British Format"]],

    // ODD ONE OUT (6)
    ["Who hosted the BBC quiz Odd One Out?", "Paul Daniels", ["Leslie Crowther", "Terry Wogan", "Nicholas Parsons"], "Easy", "Odd One Out", ["Paul Daniels", "Original Host", "BBC One", "1980s Television", "Comedy Magician", "Panel Quiz", "Presenter Identity"]],
    ["What were players asked to identify on Odd One Out?", "The item that did not belong", ["The longest word", "The highest number", "The most expensive object"], "Easy", "Odd One Out", ["Odd Item", "Spot The Difference", "Category Link", "Connection Puzzle", "Classification", "Deductive Reasoning", "Quiz Concept"]],
    ["How many items formed a standard Odd One Out question?", "Four", ["Three", "Five", "Six"], "Easy", "Odd One Out", ["Four Items", "Standard Question", "One Different", "Multiple Choice", "Category Reasoning", "Oddity Puzzle", "Game Setup"]],
    ["How many points were awarded for identifying the odd item on Odd One Out?", "Two", ["One", "Three", "Five"], "Medium", "Odd One Out", ["Two Points", "Correct Identification", "Quiz Scoring", "Odd Item", "Round Points", "Score Rules", "Game Reward"]],
    ["What could players earn extra points for explaining on Odd One Out?", "What the other items had in common", ["Why the audience disagreed", "The presenter's next question", "Their choice of specialist subject"], "Medium", "Odd One Out", ["Shared Connection", "Extra Points", "Three Related Items", "Explaining Link", "Bonus Scoring", "Knowledge Challenge", "Category Reasoning"]],
    ["What could an Odd One Out player ask opponents to do after choosing the odd item?", "Explain the link between the other items", ["Swap their seats", "Choose a new presenter", "Give up their next question"], "Medium", "Odd One Out", ["Challenge Opponents", "Explain Shared Link", "After Odd Choice", "Opponent Question", "Tactical Play", "Related Items", "Quiz Mechanism"]],

    // ALL CLUED UP (6)
    ["Which radio DJ hosted ITV's All Clued Up?", "David Hamilton", ["Tony Blackburn", "Mike Read", "David Jensen"], "Easy", "All Clued Up", ["David Hamilton", "Radio DJ", "ITV Presenter", "1988 Launch", "Word Puzzle Host", "TVS Production", "Game Show Presenter"]],
    ["How many couples competed on All Clued Up?", "Two", ["Three", "Four", "Five"], "Medium", "All Clued Up", ["Two Couples", "Four Players", "Team Contestants", "Married Pairs", "ITV Quiz", "Word Challenge", "Opening Line Up"]],
    ["What unusual piece of equipment dominated the All Clued Up studio?", "A giant computer keyboard", ["An enormous roulette wheel", "A glass lift", "A revolving dartboard"], "Medium", "All Clued Up", ["Giant Keyboard", "Studio Computer", "Letter Board", "Digital Display", "TV Set Design", "Word Game Equipment", "Main Puzzle"]],
    ["What were contestants trying to identify in the main All Clued Up puzzle?", "A hidden phrase or saying", ["The price of a product", "A mystery celebrity's voice", "The location of a landmark"], "Easy", "All Clued Up", ["Hidden Phrase", "Saying Puzzle", "Letter Reveal", "Word Guessing", "Studio Keyboard", "Phrase Recognition", "Main Game"]],
    ["What was the hidden incorrect letter on All Clued Up's keyboard called?", "The Stinger", ["The Joker", "The Wipeout", "The Blocker"], "Medium", "All Clued Up", ["The Stinger", "False Letter", "Keyboard Trap", "Turn Penalty", "Wrong Letter", "Game Mechanic", "Lit Keys"]],
    ["How did All Clued Up's smaller word puzzles help with the main puzzle?", "They provided clues to it", ["They removed rival contestants", "They added minutes to the clock", "They automatically completed it"], "Medium", "All Clued Up", ["Toss Up Puzzles", "Main Phrase Clues", "Word Frame", "Answer Connections", "Puzzle Bank", "Letter Reveal", "Game Structure"]],

    // TURNABOUT (6)
    ["Who presented the BBC word-and-strategy quiz Turnabout?", "Rob Curling", ["Mark Curry", "Nick Hancock", "David Vine"], "Medium", "Turnabout", ["Rob Curling", "BBC One", "1990 Launch", "Word Strategy", "Original Presenter", "1990s Quiz", "Host Identity"]],
    ["How many contestants competed on Turnabout's main board?", "Three", ["Two", "Four", "Six"], "Medium", "Turnabout", ["Three Contestants", "Main Board", "Player Count", "Individual Competitors", "Word Puzzle", "Competition Format", "Quiz Players"]],
    ["What objects changed colour on Turnabout's game board?", "Spheres", ["Triangles", "Playing cards", "Darts"], "Medium", "Turnabout", ["Colour Changing Spheres", "Game Board", "Rotating Balls", "Visual Puzzle", "Player Colours", "Studio Props", "Board Mechanics"]],
    ["How many spheres were arranged on the Turnabout board?", "Sixteen", ["Nine", "Twelve", "Twenty-five"], "Medium", "Turnabout", ["Sixteen Spheres", "Four By Four Grid", "Game Board Size", "Ball Layout", "Colour Puzzle", "Spatial Reasoning", "Original Format"]],
    ["What were Turnabout contestants trying to create with spheres of their own colour?", "Lines of three or four", ["Pairs of matching numbers", "Circles of six", "Rows of letters in order"], "Medium", "Turnabout", ["Three Or Four In A Row", "Colour Matching", "Board Control", "Line Making", "Sphere Positions", "Game Objective", "Strategy Quiz"]],
    ["What was the timed word-memory round on Turnabout called?", "The Star Game", ["Crossfire", "The Gold Run", "Superchain"], "Medium", "Turnabout", ["The Star Game", "Timed Word Recall", "Memory Challenge", "Word Sequences", "Bonus Round", "Rapid Recall", "Game Format"]],

    // KEYNOTES (6)
    ["Who hosted ITV's music quiz Keynotes?", "Alistair Divall", ["Henry Kelly", "Mike Read", "David Hamilton"], "Medium", "Keynotes", ["Alistair Divall", "ITV Presenter", "Music Quiz Host", "1980s Debut", "Original Host", "Popular Music", "Presenter Identity"]],
    ["What did teams try to identify from a few notes on Keynotes?", "A popular song", ["An advert slogan", "A film star", "A television channel"], "Easy", "Keynotes", ["Popular Songs", "Melody Recognition", "Musical Notes", "Song Identification", "Tune Guessing", "Music Knowledge", "Listening Quiz"]],
    ["How many notes were available to reveal the mystery tune on Keynotes?", "Nine", ["Five", "Seven", "Twelve"], "Medium", "Keynotes", ["Nine Notes", "Mystery Tune", "Music Clues", "Melody Fragments", "Note Reveal", "Original Format", "Musical Round"]],
    ["What did contestants have to supply after the music stopped in a Keynotes clue?", "The next word of the lyric", ["The singer's birthplace", "The name of the instrument", "The song's chart position"], "Medium", "Keynotes", ["Next Lyric Word", "Music Stops", "Song Lyrics", "Missing Word", "Pop Music", "Lyric Recall", "Question Mechanic"]],
    ["How many possible lyric words did Keynotes players choose between?", "Three", ["Two", "Four", "Five"], "Medium", "Keynotes", ["Three Lyric Options", "Multiple Choice", "Next Word", "Song Recognition", "Audio Challenge", "Music Trivia", "Answer Selection"]],
    ["What could the Keynotes winners do to their winnings in the bonus round?", "Double or treble them", ["Convert them into holiday miles", "Split them with the audience", "Exchange them for a mystery box"], "Medium", "Keynotes", ["Double Or Treble", "Bonus Round", "Cash Multiplier", "Prize Risk", "Winning Team", "Endgame", "Money Game"]],

    // LIGHTNING (6)
    ["Which comedian presented the BBC quiz Lightning?", "Zoe Lyons", ["Sara Pascoe", "Lucy Porter", "Katherine Ryan"], "Easy", "Lightning", ["Zoe Lyons", "BBC Two", "2021 Launch", "Comedian Presenter", "Original Host", "Timed Quiz", "British Comedy"]],
    ["What put a contestant in danger of elimination on Lightning?", "Being caught in the light when time ran out", ["Giving a single wrong answer", "Choosing the highest prize", "Finishing a puzzle first"], "Easy", "Lightning", ["Caught In Light", "Elimination Rule", "Time Runs Out", "Spotlight Mechanic", "Player Danger", "Studio Lighting", "Game Format"]],
    ["What could a Lightning contestant do after giving the required correct answer?", "Nominate the next player", ["Choose the prize money", "Eliminate two opponents", "Restart the round"], "Easy", "Lightning", ["Nominate Next Player", "Correct Answer", "Quiz Turn", "Player Choice", "Contestant Strategy", "Timed Stage", "Gameplay Rules"]],
    ["In the first series of Lightning, what was added to the quiz questions in one round?", "Physical challenges", ["Celebrity impressions", "Musical duets", "Video-call interviews"], "Medium", "Lightning", ["Physical Challenges", "First Series", "Active Tasks", "Quiz Variety", "2021 Format", "Physical Skills", "Timed Competition"]],
    ["What did the final two Lightning players have to do as well as answering correctly?", "Spell the answer", ["Explain its origin", "Say it backwards", "Act it out"], "Medium", "Lightning", ["Spell The Answer", "Final Two Players", "Spelling Challenge", "Correct Knowledge", "Finale Rules", "Word Skills", "Head To Head"]],
    ["What was the maximum cash prize available to a daily winner of Lightning?", "£3,000", ["£1,000", "£5,000", "£10,000"], "Medium", "Lightning", ["Three Thousand Pounds", "Maximum Prize", "Daily Winner", "BBC Quiz", "Cash Reward", "Top Jackpot", "Endgame"]],

    // HEAD HUNTERS (6)
    ["Who presented the BBC quiz Head Hunters?", "Rob Beckett", ["Rob Brydon", "Romesh Ranganathan", "Richard Osman"], "Easy", "Head Hunters", ["Rob Beckett", "BBC One", "2019 Debut", "Comedy Presenter", "Original Host", "Team Recruitment", "Quiz Host"]],
    ["How many Head Hunters were selected at the start of each game?", "Three", ["Two", "Four", "Five"], "Medium", "Head Hunters", ["Three Head Hunters", "Opening Selection", "Team Leaders", "Player Count", "Quiz Captains", "Fast Finger", "Talent Pool"]],
    ["What could a Head Hunter offer other quizzers to recruit them?", "A share of the prize money", ["An extra life in every round", "A guaranteed place in the final", "A chance to change the questions"], "Medium", "Head Hunters", ["Prize Money Share", "Recruit Candidates", "Team Formation", "Player Negotiation", "Hiring Helpers", "Contestant Strategy", "Jackpot Split"]],
    ["How did a would-be Candidate first earn the chance to join a team on Head Hunters?", "Win a fastest-finger question", ["Choose a mystery envelope", "Beat the host at a puzzle", "Spin a numbered wheel"], "Medium", "Head Hunters", ["Fastest Finger", "Candidate Selection", "Recruitment Chance", "Quick Answer", "Qualifying Question", "Team Entry", "Contestant Competition"]],
    ["How many lives did each team have in the Head Hunters elimination round?", "Five", ["Three", "Four", "Six"], "Medium", "Head Hunters", ["Five Team Lives", "Elimination Round", "Survival Rules", "Shared Chances", "Incorrect Answers", "Team Quiz", "Life Counter"]],
    ["How much time did the winning Head Hunters team have to answer from nine categories in the final?", "90 seconds", ["45 seconds", "60 seconds", "120 seconds"], "Medium", "Head Hunters", ["Ninety Seconds", "Nine Categories", "Final Challenge", "Winning Team", "Jackpot Round", "Timed Answers", "Knowledge Range"]],

    // PASSWORD (6)
    ["Who presented ITV's revival of Password that began in 2024?", "Stephen Mangan", ["Bradley Walsh", "Alexander Armstrong", "Ben Shephard"], "Easy", "Password", ["Stephen Mangan", "2024 Revival", "ITV Presenter", "Actor Host", "Modern Reboot", "Word Association", "Game Show Host"]],
    ["Which two comedians were the celebrity team captains in the first series of the ITV Password revival?", "Alan Carr and Daisy May Cooper", ["Rob Beckett and Aisling Bea", "Lee Mack and Sara Pascoe", "Jimmy Carr and Katherine Ryan"], "Medium", "Password", ["Alan Carr", "Daisy May Cooper", "Celebrity Captains", "Comedy Team Leaders", "2024 Series", "Famous Partners", "ITV Revival"]],
    ["What sort of clue did players traditionally give their partners on Password?", "A single word", ["A drawing", "A rhyming couplet", "A short song"], "Easy", "Password", ["Single Word Clues", "Word Guessing", "Partner Communication", "One Word Hint", "Association Game", "Guessing Puzzle", "Traditional Rules"]],
    ["Who hosted the Channel 4 version of Password in the early 1980s?", "Tom O'Connor", ["Henry Kelly", "Bob Holness", "Michael Aspel"], "Medium", "Password", ["Tom OConnor", "Channel 4", "1982 Series", "Presenter History", "Word Game Host", "1980s Television", "British Revival"]],
    ["What was the rapid-fire alphabet-based endgame in ITV's Password revival called?", "Alphabeticals", ["Letter Ladder", "Word Wheel", "The Final Pyramid"], "Medium", "Password", ["Alphabeticals", "Endgame Round", "Alphabet Puzzle", "Timed Word Guessing", "Final Challenge", "2024 ITV Series", "Prize Finale"]],
    ["Who hosted the first British television version of Password?", "Shaw Taylor", ["Hughie Green", "Michael Miles", "Leslie Crowther"], "Hard", "Password", ["Shaw Taylor", "1963 Debut", "First British Host", "ATV For ITV", "1960s Television", "Programme History", "Original Presenter"]],

    // FIRST & LAST (5)
    ["Who presented the BBC game show First & Last?", "Jason Manford", ["Lee Mack", "Vernon Kay", "Stephen Mulhern"], "Easy", "First & Last", ["Jason Manford", "BBC One", "2020 Launch", "Comedian Presenter", "Original Host", "Elimination Games", "Prime Time Entertainment"]],
    ["Which finishing positions did First & Last contestants have to avoid?", "First and last", ["First and second", "Second and third", "Third and fourth"], "Easy", "First & Last", ["Avoid First And Last", "Finishing Positions", "Elimination Rule", "Middle Placings", "Ranking Challenge", "Contestant Strategy", "Core Format"]],
    ["How many contestants began a game of First & Last?", "Eleven", ["Eight", "Nine", "Twelve"], "Medium", "First & Last", ["Eleven Contestants", "Opening Line Up", "Player Count", "Studio Competition", "Elimination Rounds", "Original Format", "2020 Series"]],
    ["What did contestants have to jump out of in First & Last's opening challenge?", "Large boxes", ["Inflatable rings", "Swimming pools", "Toy cars"], "Medium", "First & Last", ["Large Boxes", "Opening Challenge", "Jumping Out", "Contestant Timing", "Physical Game", "First Round", "Hidden Players"]],
    ["What did the Internet Search round on First & Last compare?", "Numbers of search results", ["Prices of online shopping baskets", "Lengths of website addresses", "Numbers of social-media passwords"], "Medium", "First & Last", ["Internet Search", "Search Result Counts", "Ranking Answers", "Web Numbers", "Comparison Game", "Internet Trivia", "Quiz Round"]],

    // PRESSURE PAD (6)
    ["Who presented the BBC quiz Pressure Pad?", "John Barrowman", ["Gethin Jones", "Nick Knowles", "John Bishop"], "Easy", "Pressure Pad", ["John Barrowman", "BBC One", "2013 Launch", "Original Host", "Game Show Presenter", "Team Competition", "Quiz Host"]],
    ["How many players were on each Pressure Pad team?", "Five", ["Three", "Four", "Six"], "Medium", "Pressure Pad", ["Five Per Team", "Two Teams", "Ten Players", "Team Captains", "Contestant Count", "Group Quiz", "Head To Head"]],
    ["What dominated the studio floor in Pressure Pad?", "A giant electronic display", ["A rotating conveyor belt", "An indoor swimming pool", "A giant chessboard"], "Easy", "Pressure Pad", ["Electronic Floor Display", "Interactive Studio", "Giant Screen", "Physical Game Board", "Digital Technology", "Competition Set", "Answer Platform"]],
    ["Who was kept back to play the deciding round on Pressure Pad?", "The team captain", ["The youngest player", "The opening-round winner", "The audience favourite"], "Medium", "Pressure Pad", ["Team Captain", "Deciding Round", "Final Player", "Team Leadership", "Captain Challenge", "Prize Game", "Endgame"]],
    ["How much money did the winning Pressure Pad team secure before any jackpot gamble?", "£2,000", ["£500", "£1,000", "£5,000"], "Medium", "Pressure Pad", ["Two Thousand Pounds", "Winning Team", "Guaranteed Prize", "Cash Split", "Question Finale", "BBC Quiz", "Money Award"]],
    ["What risk did the Pressure Pad captain take by attempting the extra jackpot question?", "Losing the team's winnings", ["Having to replay the whole game", "Giving the opponents a new captain", "Losing one teammate from the show"], "Medium", "Pressure Pad", ["Lose Team Winnings", "Jackpot Gamble", "Captain Decision", "Extra Question", "Risk And Reward", "All Or Nothing", "Cash Prize"]],

    // THE 1% CLUB (6) - six new questions replace duplicates from Pack 214
    ["How much money does each contestant start with on The 1% Club?", "£1,000", ["£100", "£500", "£10,000"], "Easy", "The 1% Club", ["One Thousand Pounds Each", "Contestant Stake", "Starting Money", "Prize Pot", "Individual Players", "Opening Bank", "ITV Game Rules"]],
    ["What percentage question opens a regular episode of The 1% Club?", "90%", ["50%", "75%", "99%"], "Medium", "The 1% Club", ["Ninety Percent Question", "Opening Difficulty", "Public Survey", "Easiest Question", "Logic Puzzle", "Percentage Ranking", "First Round"]],
    ["How many seconds do contestants have to submit each answer on The 1% Club?", "30 seconds", ["15 seconds", "45 seconds", "60 seconds"], "Medium", "The 1% Club", ["Thirty Seconds", "Answer Countdown", "Time Limit", "Lock In Answer", "Fast Reasoning", "Question Timer", "Studio Tablets"]],
    ["What happens to a contestant's £1,000 when they are eliminated on The 1% Club?", "It goes into the prize pot", ["They keep it", "It goes to the host", "It is returned to the broadcaster"], "Easy", "The 1% Club", ["Eliminated Contestant", "Prize Pot Increase", "Forfeited Stake", "One Thousand Pounds", "Wrong Answer", "Jackpot Fund", "Game Elimination"]],
    ["What option can finalists choose instead of attempting the final 1% question on The 1% Club?", "Leave with a share of £10,000", ["Restart at the 90% question", "Choose the final question's topic", "Take the host's prize"], "Medium", "The 1% Club", ["Five Percent Stage", "Cash Out Option", "Ten Thousand Pounds", "Finalists Choice", "Share Prize", "Last Question", "Risk Decision"]],
    ["If several contestants answer The 1% Club's final question correctly, what happens to the jackpot?", "They share it", ["Only the fastest wins", "The host chooses the winner", "It rolls over automatically"], "Easy", "The 1% Club", ["Shared Jackpot", "Multiple Winners", "One Percent Question", "Final Round", "Prize Division", "Contestant Success", "Top Prize"]],

];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, programme, specificTags], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(5404 + index).padStart(4, '0'),
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
