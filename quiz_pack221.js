// quiz_pack221.js
// PuzzlePilot - The Bigggggg Quiz
// Television: British adult quiz, game and comedy panel shows
// 100 questions: tv_5904 to tv_6003
// Audit: six repeated questions replaced; one Superhive answer corrected.
// Keep quiz_bank.js unchanged until the end of the evening.

const facts = [

    // WE NEED ANSWERS
    ["Which comedian was the main host of We Need Answers?", "Mark Watson", ["Alex Horne", "Tim Key", "Dara O Briain"], "Medium", "We Need Answers", ["BBC Four", "2009 Debut", "Comedy Quiz", "Mark Watson", "Main Presenter", "Comedy Host", "Quiz Host"]],
    ["Which comedian asked the contestants their questions on We Need Answers?", "Tim Key", ["Mark Watson", "Jon Richardson", "David O'Doherty"], "Medium", "We Need Answers", ["BBC Four", "2009 Debut", "Comedy Quiz", "Tim Key", "Question Master", "Quiz Questioner", "Comedy Presenter"]],
    ["Who provided the graphics, jingles and comic analysis on We Need Answers?", "Alex Horne", ["Richard Osman", "Joe Wilkinson", "Dave Gorman"], "Medium", "We Need Answers", ["BBC Four", "2009 Debut", "Comedy Quiz", "Alex Horne", "Graphics And Jingles", "Studio Expert", "Comic Analysis"]],
    ["Where did the questions used on We Need Answers originally come from?", "Real enquiries sent to a text-answering service", ["Questions written by the studio audience", "School examination papers", "Questions from previous game shows"], "Medium", "We Need Answers", ["BBC Four", "2009 Debut", "Comedy Quiz", "Text Message Enquiries", "AQA Answer Service", "Crowdsourced Questions", "Viewer Submissions"]],
    ["What was the first round of We Need Answers called?", "Burning Issues and Fiddly Questions", ["Questions of the Day", "The Knowledge Round", "The Quickfire Challenge"], "Medium", "We Need Answers", ["BBC Four", "2009 Debut", "Comedy Quiz", "Burning Issues And Fiddly Questions", "Opening Round", "Themed Questions", "Named Round"]],
    ["Which We Need Answers round involved contestants performing physical tasks?", "Physical Challenge", ["House Prize Showdown", "Burning Issues", "You or Him"], "Easy", "We Need Answers", ["BBC Four", "2009 Debut", "Comedy Quiz", "Physical Challenge", "Practical Tasks", "Contestant Stunts", "Nonverbal Round"]],
    ["What did the losing contestant have to wear while leaving the stage on We Need Answers?", "The Clogs of Defeat", ["The Hat of Shame", "The Boots of Failure", "The Crown of Misery"], "Medium", "We Need Answers", ["BBC Four", "2009 Debut", "Comedy Quiz", "Clogs Of Defeat", "Losing Contestant", "Onstage Exit", "Comedy Forfeit"]],

    // WHAT THE DICKENS?
    ["Who presented the arts and culture panel quiz What the Dickens?", "Sandi Toksvig", ["Sue Perkins", "Jo Brand", "Victoria Coren Mitchell"], "Easy", "What the Dickens?", ["Sky Arts", "2008 Debut", "Arts And Culture Quiz", "Sandi Toksvig", "Programme Host", "Arts Presenter", "Panel Moderator"]],
    ["Which channel broadcast What the Dickens?", "Sky Arts", ["BBC Two", "Channel 4", "ITV"], "Medium", "What the Dickens?", ["Sky Arts", "2008 Debut", "Arts And Culture Quiz", "Sky Arts Broadcast", "Original Channel", "Arts Television", "Programme Network"]],
    ["Which pair were the original team captains on What the Dickens?", "Tim Brooke-Taylor and Dave Gorman", ["Sue Perkins and Chris Addison", "Alan Davies and Stephen Fry", "Paul Merton and Ian Hislop"], "Medium", "What the Dickens?", ["Sky Arts", "2008 Debut", "Arts And Culture Quiz", "Tim Brooke Taylor And Dave Gorman", "First Series Captains", "Presenter Pair", "Arts Teams"]],
    ["Who replaced the original team captains on later series of What the Dickens?", "Chris Addison and Sue Perkins", ["David Mitchell and Lee Mack", "Hugh Dennis and Jo Brand", "Richard Osman and Josh Widdicombe"], "Medium", "What the Dickens?", ["Sky Arts", "2008 Debut", "Arts And Culture Quiz", "Chris Addison And Sue Perkins", "Later Series Captains", "Captain Succession", "Second Series"]],
    ["What did teams identify from abbreviated descriptions in What the Dickens' Losing the Plot round?", "Famous works of art and entertainment", ["Celebrity childhood homes", "Unknown historical figures", "Missing television presenters"], "Medium", "What the Dickens?", ["Sky Arts", "2008 Debut", "Arts And Culture Quiz", "Losing The Plot", "Plot Summaries", "Work Identification", "Abbreviated Descriptions"]],
    ["What did teams use to identify films and other works in the Picture This round of What the Dickens?", "Photographic clues", ["Recorded sound effects", "Audience drawings", "Musical instruments"], "Medium", "What the Dickens?", ["Sky Arts", "2008 Debut", "Arts And Culture Quiz", "Picture This", "Photographic Clues", "Film And Art", "Visual Quiz"]],
    ["What did the Balance the Books round on What the Dickens ask teams to compare?", "Values such as film earnings and book advances", ["The ages of the presenters", "The lengths of television programmes", "The weights of everyday objects"], "Medium", "What the Dickens?", ["Sky Arts", "2008 Debut", "Arts And Culture Quiz", "Balance The Books", "Money Comparisons", "Film Grosses", "Book Advances"]],

    // IT'S ONLY TV... BUT I LIKE IT
    ["Who presented the BBC comedy panel game It's Only TV... But I Like It?", "Jonathan Ross", ["Clive Anderson", "Graham Norton", "Michael Parkinson"], "Easy", "It's Only TV... But I Like It", ["BBC One", "1999 Debut", "Television Comedy Panel", "Jonathan Ross", "Original Host", "1990s Presenter", "Television Quiz Presenter"]],
    ["Which comedian was a regular team captain throughout the original run of It's Only TV... But I Like It?", "Julian Clary", ["Frank Skinner", "Sean Lock", "Rhod Gilbert"], "Medium", "It's Only TV... But I Like It", ["BBC One", "1999 Debut", "Television Comedy Panel", "Julian Clary", "Long Serving Captain", "Comedy Team Leader", "Original Cast"]],
    ["Which comedian was an original team captain alongside Julian Clary on It's Only TV... But I Like It?", "Jack Dee", ["Phill Jupitus", "Alan Carr", "David Mitchell"], "Medium", "It's Only TV... But I Like It", ["BBC One", "1999 Debut", "Television Comedy Panel", "Jack Dee", "Original Captain", "Comedian Panellist", "Team Line Up"]],
    ["Who later replaced Jack Dee as a team captain on It's Only TV... But I Like It?", "Phill Jupitus", ["Lee Mack", "Rob Brydon", "Hugh Dennis"], "Medium", "It's Only TV... But I Like It", ["BBC One", "1999 Debut", "Television Comedy Panel", "Phill Jupitus", "Replacement Captain", "Panel Succession", "Comedy Team"]],
    ["What did panellists attempt to recreate in the Blue Peter round of It's Only TV... But I Like It?", "Something previously made on Blue Peter", ["A famous television studio", "A television theme tune", "A presenter’s childhood photograph"], "Medium", "It's Only TV... But I Like It", ["BBC One", "1999 Debut", "Television Comedy Panel", "Blue Peter Round", "Handmade Objects", "Recreating Makes", "Children's Television Reference"]],
    ["What did players wear in the Botticelli round of It's Only TV... But I Like It?", "Masks displaying television personalities", ["Costumes from famous sitcoms", "Blindfolds and headphones", "Hats showing television channel logos"], "Medium", "It's Only TV... But I Like It", ["BBC One", "1999 Debut", "Television Comedy Panel", "Botticelli", "Television Face Masks", "Guess The Programme", "Visual Game"]],
    ["What did teams act out during the Remote Control round of It's Only TV... But I Like It?", "Television programme titles", ["Famous football matches", "News headlines", "Radio advertisements"], "Medium", "It's Only TV... But I Like It", ["BBC One", "1999 Debut", "Television Comedy Panel", "Remote Control", "Act Out TV Titles", "Charades Round", "Oversized Remote"]],

    // CASH CAB
    ["Who presented and drove the taxi in the British version of Cash Cab?", "John Moody", ["Ben Shephard", "Richard Hammond", "Jason Manford"], "Medium", "Cash Cab", ["ITV1", "2005 Debut", "Taxi Quiz", "John Moody", "Taxi Driver Host", "Quiz Driver", "Cab Presenter"]],
    ["Where did Cash Cab contestants answer quiz questions?", "Inside a taxi", ["Inside a train carriage", "Inside a shopping centre", "Inside a television studio"], "Easy", "Cash Cab", ["ITV1", "2005 Debut", "Taxi Quiz", "Inside A Taxi", "Mobile Game Show", "Taxi Passengers", "Street Quiz"]],
    ["Which channel originally broadcast the British version of Cash Cab?", "ITV", ["BBC One", "Channel 4", "Channel 5"], "Medium", "Cash Cab", ["ITV1", "2005 Debut", "Taxi Quiz", "ITV Original Broadcast", "British Premiere", "Network History", "Taxi Programme"]],
    ["What happened after Cash Cab contestants gave three incorrect answers?", "They had to leave the taxi", ["They started the quiz again", "Their winnings doubled", "They changed destinations"], "Easy", "Cash Cab", ["ITV1", "2005 Debut", "Taxi Quiz", "Three Wrong Answers", "Cab Elimination", "Dropped Off", "Answer Penalty"]],
    ["How much was each of the first five Cash Cab questions worth?", "£10", ["£5", "£20", "£50"], "Medium", "Cash Cab", ["ITV1", "2005 Debut", "Taxi Quiz", "Ten Pounds", "First Five Questions", "Question Values", "Money Ladder"]],
    ["Who could Cash Cab contestants ask for help while answering questions?", "People they contacted or approached on the street", ["Only the taxi company's controller", "Only the presenter’s relatives", "Only previous contestants"], "Medium", "Cash Cab", ["ITV1", "2005 Debut", "Taxi Quiz", "Phone A Friend Or Passer By", "Help Lifelines", "Street Assistance", "External Answers"]],
    ["Which specialist television channel eventually broadcast previously unaired British Cash Cab episodes?", "Challenge", ["Gold", "Dave", "Yesterday"], "Medium", "Cash Cab", ["ITV1", "2005 Debut", "Taxi Quiz", "Challenge TV", "Unaired Episodes", "Later Broadcast", "2007 Screening"]],

    // DUCK QUACKS DON'T ECHO
    ["Who hosted the comedy panel show Duck Quacks Don't Echo?", "Lee Mack", ["David Mitchell", "Jimmy Carr", "Rob Brydon"], "Easy", "Duck Quacks Don't Echo", ["Sky One", "2014 Debut", "Fact Testing Panel", "Lee Mack", "Original Host", "Panel Comedian", "Fact Show Presenter"]],
    ["Which channel originally broadcast Duck Quacks Don't Echo in Britain?", "Sky 1", ["ITV2", "BBC Two", "Channel 4"], "Medium", "Duck Quacks Don't Echo", ["Sky One", "2014 Debut", "Fact Testing Panel", "Sky 1 Original", "Original Broadcaster", "British Sky", "2014 Show"]],
    ["Which former political journalist narrated Duck Quacks Don't Echo?", "John Sergeant", ["Andrew Marr", "Jeremy Paxman", "John Humphrys"], "Medium", "Duck Quacks Don't Echo", ["Sky One", "2014 Debut", "Fact Testing Panel", "John Sergeant", "Narrator", "Fact Demonstrations", "Former Journalist"]],
    ["How many celebrity guests normally appeared on each edition of Duck Quacks Don't Echo?", "Three", ["Two", "Four", "Six"], "Medium", "Duck Quacks Don't Echo", ["Sky One", "2014 Debut", "Fact Testing Panel", "Three Celebrity Guests", "Panellists", "Episode Line Up", "Fact Contest"]],
    ["What did the celebrity guests bring to Duck Quacks Don't Echo?", "Unusual facts they believed were true", ["Childhood photographs", "Their favourite recipes", "Objects they had invented"], "Easy", "Duck Quacks Don't Echo", ["Sky One", "2014 Debut", "Fact Testing Panel", "Unusual Facts", "Claims Of Truth", "Celebrity Evidence", "Fact Arguments"]],
    ["How did Duck Quacks Don't Echo investigate the celebrities' unusual claims?", "Through experiments and demonstrations", ["By interviewing their families", "By reading newspaper headlines", "By consulting a studio audience vote alone"], "Medium", "Duck Quacks Don't Echo", ["Sky One", "2014 Debut", "Fact Testing Panel", "Experiments And Demonstrations", "Fact Checking", "Scientific Testing", "Verified Claims"]],

    // BIG BRAIN GAME
    ["Who presented Sky One's Big Brain Game?", "Carol Vorderman", ["Anne Robinson", "Sue Perkins", "Jenny Ryan"], "Easy", "Big Brain Game", ["Sky One", "2005 Debut", "Brain Teaser Panel", "Carol Vorderman", "Television Presenter", "Brain Game Host", "Quiz Presenter"]],

    // THE BUTTON
    ["Which channel broadcast The Button?", "BBC One", ["ITV", "Channel 4", "BBC Three"], "Medium", "The Button", ["BBC One", "2018 Debut", "At Home Challenges", "BBC One Network", "The Button Broadcaster", "UK Channel", "Home Game Show"]],

    // BIG BRAIN GAME
    ["Which pair were the team captains on Big Brain Game?", "Rufus Hound and Sara Cox", ["David Mitchell and Lee Mack", "Sean Lock and Jon Richardson", "Hugh Dennis and Frankie Boyle"], "Medium", "Big Brain Game", ["Sky One", "2005 Debut", "Brain Teaser Panel", "Rufus Hound And Sara Cox", "Team Captains", "Celebrity Puzzlers", "Original Cast"]],
    ["How many people made up each team on Big Brain Game?", "Three", ["Two", "Four", "Five"], "Medium", "Big Brain Game", ["Sky One", "2005 Debut", "Brain Teaser Panel", "Three Person Teams", "Two Teams", "Ordinary Contestant", "Celebrity Helpers"]],
    ["What was the final buzzer round on Big Brain Game called?", "Total Brain Workout", ["The Brain Drain", "Mind Games", "The Big Recall"], "Medium", "Big Brain Game", ["Sky One", "2005 Debut", "Brain Teaser Panel", "Total Brain Workout", "Final Buzzer Round", "Mental Challenges", "Round Title"]],

    // THE BUTTON
    ["What was the cash value of the fifth and final challenge on The Button?", "£5,000", ["£1,000", "£2,500", "£10,000"], "Medium", "The Button", ["BBC One", "2018 Debut", "At Home Challenges", "Five Thousand Pounds", "Fifth Challenge", "Cash Value", "Final Task"]],

    // I LOVE MY COUNTRY
    ["Who presented the BBC comedy quiz I Love My Country?", "Gabby Logan", ["Clare Balding", "Sue Barker", "Kate Garraway"], "Easy", "I Love My Country", ["BBC One", "2013 Debut", "National Trivia Panel", "Gabby Logan", "Original Presenter", "Sports Broadcaster", "Quiz Host"]],
    ["Which two comedians were team captains on I Love My Country?", "Frank Skinner and Micky Flanagan", ["David Mitchell and Lee Mack", "Sean Lock and Jon Richardson", "Hugh Dennis and Dara O Briain"], "Medium", "I Love My Country", ["BBC One", "2013 Debut", "National Trivia Panel", "Frank Skinner And Micky Flanagan", "Team Captains", "Comedy Team Leaders", "Cast Line Up"]],
    ["Which singer provided vocals with the house band on I Love My Country?", "Jamelia", ["Beverley Knight", "Leona Lewis", "Alexandra Burke"], "Medium", "I Love My Country", ["BBC One", "2013 Debut", "National Trivia Panel", "Jamelia", "House Band Singer", "Live Vocals", "Music Guest"]],
    ["What subjects were covered in the questions on I Love My Country?", "British history, geography and popular culture", ["Only international sport", "Only classical music", "Only foreign languages"], "Easy", "I Love My Country", ["BBC One", "2013 Debut", "National Trivia Panel", "British History And Geography", "UK Popular Culture", "National Knowledge", "Quiz Subjects"]],
    ["What unusual prize did the winning team receive on I Love My Country?", "A china plate", ["A silver teapot", "A golden globe", "A crystal trophy"], "Medium", "I Love My Country", ["BBC One", "2013 Debut", "National Trivia Panel", "China Plate", "Winning Prize", "Novelty Award", "Team Victory"]],
    ["Which comedian recorded an unaired pilot of I Love My Country before Gabby Logan became presenter?", "David Walliams", ["Peter Kay", "Russell Howard", "Jack Whitehall"], "Medium", "I Love My Country", ["BBC One", "2013 Debut", "National Trivia Panel", "David Walliams", "Unaired Pilot", "Original Presenter Choice", "Programme Development"]],

    // BUSMAN'S HOLIDAY
    ["Who was the original presenter of the ITV quiz Busman's Holiday?", "Julian Pettifer", ["Michael Aspel", "Henry Kelly", "Derek Batey"], "Medium", "Busman's Holiday", ["ITV", "1985 Debut", "Travel And Occupations Quiz", "Julian Pettifer", "Original Host", "First Series", "Presenter Identity"]],
    ["Which broadcaster replaced Julian Pettifer as presenter of Busman's Holiday?", "Sarah Kennedy", ["Gloria Hunniford", "Esther Rantzen", "Anne Diamond"], "Medium", "Busman's Holiday", ["ITV", "1985 Debut", "Travel And Occupations Quiz", "Sarah Kennedy", "Host Succession", "Middle Era Presenter", "Broadcaster"]],
    ["Who presented the final series of Busman's Holiday?", "Elton Welsby", ["Nick Owen", "Des Lynam", "John Stapleton"], "Medium", "Busman's Holiday", ["ITV", "1985 Debut", "Travel And Occupations Quiz", "Elton Welsby", "Final Series Presenter", "1993 Broadcast", "Quiz Host"]],
    ["What brought the competing teams together on Busman's Holiday?", "They worked in the same profession", ["They attended the same school", "They were related to the host", "They lived in the same street"], "Medium", "Busman's Holiday", ["ITV", "1985 Debut", "Travel And Occupations Quiz", "Same Profession", "Occupational Teams", "Workmates", "Team Eligibility"]],
    ["What unusual type of holiday could winning Busman's Holiday teams receive?", "A working holiday", ["A mystery cruise", "A luxury camping trip", "A holiday chosen by the audience"], "Easy", "Busman's Holiday", ["ITV", "1985 Debut", "Travel And Occupations Quiz", "Working Holiday", "Travel Reward", "Unusual Prize", "Foreign Employment"]],
    ["What subject featured in the opening multiple-choice round of Busman's Holiday?", "World geography", ["Pop music", "Television sitcoms", "Horse racing"], "Medium", "Busman's Holiday", ["ITV", "1985 Debut", "Travel And Occupations Quiz", "World Geography", "Opening Round", "Multiple Choice", "Geography Knowledge"]],

    // YOU HAVE BEEN WATCHING
    ["Which television critic and comedian hosted You Have Been Watching?", "Charlie Brooker", ["David Mitchell", "Jimmy Carr", "Frank Skinner"], "Easy", "You Have Been Watching", ["Channel 4", "2009 Debut", "Television Comedy Quiz", "Charlie Brooker", "Television Critic", "Original Presenter", "Comedy Writer"]],
    ["Which channel broadcast You Have Been Watching?", "Channel 4", ["BBC Two", "ITV", "Channel 5"], "Medium", "You Have Been Watching", ["Channel 4", "2009 Debut", "Television Comedy Quiz", "Channel 4 Network", "Original Broadcaster", "UK Comedy Channel", "Quiz Series"]],
    ["How many celebrity guests normally joined Charlie Brooker on You Have Been Watching?", "Three", ["Two", "Four", "Six"], "Medium", "You Have Been Watching", ["Channel 4", "2009 Debut", "Television Comedy Quiz", "Three Celebrity Guests", "Panel Size", "Comedian Panellists", "Guest Players"]],
    ["What was the main subject of the panel game You Have Been Watching?", "Television programmes", ["Pop music", "Sporting achievements", "Historical inventions"], "Easy", "You Have Been Watching", ["Channel 4", "2009 Debut", "Television Comedy Quiz", "Television Programmes", "TV Clips", "Show Discussion", "Broadcasting Trivia"]],
    ["What followed many of the television discussions on You Have Been Watching?", "Quiz questions for the celebrity panellists", ["A cooking demonstration", "A public phone-in vote", "A musical performance"], "Medium", "You Have Been Watching", ["Channel 4", "2009 Debut", "Television Comedy Quiz", "Quiz Questions", "Panel Discussion", "Question Rounds", "TV Knowledge"]],
    ["Which type of round concluded You Have Been Watching?", "A quick-fire buzzer round", ["A crossword puzzle", "A physical obstacle course", "A mystery box auction"], "Medium", "You Have Been Watching", ["Channel 4", "2009 Debut", "Television Comedy Quiz", "Quick Fire Buzzer", "Last Round", "Rapid Answers", "Final Challenge"]],

    // COMEDY WORLD CUP
    ["Which former Doctor Who actor presented Comedy World Cup?", "David Tennant", ["Matt Smith", "Christopher Eccleston", "Peter Capaldi"], "Easy", "Comedy World Cup", ["Channel 4", "2012 Debut", "Comedy Tournament", "David Tennant", "Doctor Who Actor", "Original Presenter", "Scottish Actor"]],
    ["Which channel broadcast Comedy World Cup?", "Channel 4", ["BBC One", "ITV", "Channel 5"], "Medium", "Comedy World Cup", ["Channel 4", "2012 Debut", "Comedy Tournament", "Channel 4 Broadcast", "Original Network", "Comedy Panel Channel", "Programme Network"]],
    ["What subject did contestants answer questions about on Comedy World Cup?", "Comedy programmes and performers", ["International football", "World geography", "Classical literature"], "Easy", "Comedy World Cup", ["Channel 4", "2012 Debut", "Comedy Tournament", "Comedy Performers", "Comedy History", "Comedian Trivia", "Knowledge Quiz"]],
    ["How did winning teams progress through Comedy World Cup?", "They returned for later rounds of the competition", ["They joined the studio audience", "They automatically won a holiday", "They selected new team captains"], "Medium", "Comedy World Cup", ["Channel 4", "2012 Debut", "Comedy Tournament", "Winning Teams Return", "Knockout Tournament", "Progression Format", "Rounds Competition"]],
    ["Which comedian captained the winning team on Comedy World Cup?", "Johnny Vegas", ["Jack Dee", "Alan Carr", "Frankie Boyle"], "Medium", "Comedy World Cup", ["Channel 4", "2012 Debut", "Comedy Tournament", "Johnny Vegas", "Winning Captain", "2012 Champions", "Final Victory"]],

    // ARGUMENTAL
    ["Which former political journalist originally hosted Argumental?", "John Sergeant", ["Andrew Marr", "Jeremy Paxman", "John Humphrys"], "Medium", "Argumental", ["Dave Channel", "2008 Debut", "Comedy Debating", "John Sergeant", "Original Host", "Former Political Journalist", "2008 Presenter"]],
    ["Which comedian later took over as host of Argumental?", "Sean Lock", ["Lee Mack", "Jimmy Carr", "Dara O Briain"], "Medium", "Argumental", ["Dave Channel", "2008 Debut", "Comedy Debating", "Sean Lock", "Later Presenter", "Host Succession", "Comedy Host"]],
    ["Which channel originally broadcast Argumental?", "Dave", ["BBC One", "ITV", "Channel 5"], "Medium", "Argumental", ["Dave Channel", "2008 Debut", "Comedy Debating", "Dave Original Broadcast", "UKTV Channel", "Comedy Network", "Panel Show Home"]],
    ["Which pair were the original team captains on Argumental?", "Marcus Brigstocke and Rufus Hound", ["Sean Lock and Jon Richardson", "David Mitchell and Lee Mack", "Hugh Dennis and Frankie Boyle"], "Medium", "Argumental", ["Dave Channel", "2008 Debut", "Comedy Debating", "Marcus Brigstocke And Rufus Hound", "Original Captains", "Comedy Duo", "Team Leaders"]],
    ["What did comedians compete to do on Argumental?", "Win humorous debates", ["Solve mathematical puzzles", "Identify mystery songs", "Guess television theme tunes"], "Easy", "Argumental", ["Dave Channel", "2008 Debut", "Comedy Debating", "Humorous Debates", "Arguments", "Competitive Comedy", "Motion Defence"]],
    ["Who normally voted for the winning argument in each round of Argumental?", "The studio audience", ["The host alone", "A panel of judges", "The production crew"], "Medium", "Argumental", ["Dave Channel", "2008 Debut", "Comedy Debating", "Studio Audience", "Voting For Winner", "Audience Ballot", "Scored Arguments"]],
    ["What did contestants have to do in Argumental's Flip-flop round?", "Change their position on an issue when the buzzer sounded", ["Swap seats with their opponents", "Argue while standing on one leg", "Answer questions backwards"], "Medium", "Argumental", ["Dave Channel", "2008 Debut", "Comedy Debating", "Flip Flop", "Buzzer Reversal", "Changing Opinions", "Debating Rules"]],

    // THE ALPHABET GAME
    ["Who presented the original BBC television quiz The Alphabet Game?", "Andrew O'Connor", ["Paul Coia", "Bob Holness", "Tony Slattery"], "Medium", "The Alphabet Game", ["BBC One", "1996 Debut", "Alphabet Word Game", "Andrew OConnor", "Original Host", "BBC Quiz Presenter", "Game Show Creator"]],
    ["Which BBC channel originally broadcast The Alphabet Game?", "BBC One", ["BBC Two", "BBC Three", "BBC Four"], "Medium", "The Alphabet Game", ["BBC One", "1996 Debut", "Alphabet Word Game", "BBC One Original", "1990s Broadcasting", "Original Network", "Quiz Channel"]],
    ["What formed the basis of the challenges on The Alphabet Game?", "Words and letters of the alphabet", ["General knowledge about animals", "Music from the 1980s", "Numerical calculations"], "Easy", "The Alphabet Game", ["BBC One", "1996 Debut", "Alphabet Word Game", "Words And Letters", "Alphabet Challenges", "Wordplay", "Letter Games"]],

    // BIG BRAIN GAME
    ["What was the maximum cash prize on Big Brain Game?", "£10,000", ["£5,000", "£25,000", "£50,000"], "Medium", "Big Brain Game", ["Sky One", "2005 Debut", "Brain Teaser Panel", "Ten Thousand Pounds", "Grand Prize", "Winning Contestant", "Final Jackpot"]],
    ["How many questions had to be answered correctly to win Big Brain Game's final jackpot?", "Four", ["Three", "Five", "Six"], "Medium", "Big Brain Game", ["Sky One", "2005 Debut", "Brain Teaser Panel", "Four Final Questions", "Mental Skill Areas", "Correct Answer Target", "Winning Condition"]],

    // HIVE MINDS
    ["Who presented the BBC quiz Hive Minds?", "Fiona Bruce", ["Victoria Coren Mitchell", "Kirsty Young", "Jenny Ryan"], "Medium", "Hive Minds", ["BBC Four", "2015 Debut", "Letter Grid Quiz", "Fiona Bruce", "Original Presenter", "BBC News Broadcaster", "Quiz Host"]],
    ["Which channel originally broadcast Hive Minds?", "BBC Four", ["BBC One", "ITV", "Channel 4"], "Medium", "Hive Minds", ["BBC Four", "2015 Debut", "Letter Grid Quiz", "BBC Four Network", "Original Channel", "Highbrow Quiz", "Programme Broadcast"]],
    ["How many teams competed against each other in Hive Minds?", "Two", ["Three", "Four", "Five"], "Medium", "Hive Minds", ["BBC Four", "2015 Debut", "Letter Grid Quiz", "Two Teams", "Head To Head", "Competing Groups", "Studio Contestants"]],
    ["How many players made up each team on Hive Minds?", "Three", ["Two", "Four", "Five"], "Medium", "Hive Minds", ["BBC Four", "2015 Debut", "Letter Grid Quiz", "Three Per Team", "Six Competitors", "Team Size", "Contestant Count"]],
    ["What shape was used to display letters in the Hive Minds puzzles?", "Hexagons", ["Squares", "Triangles", "Circles"], "Easy", "Hive Minds", ["BBC Four", "2015 Debut", "Letter Grid Quiz", "Hexagonal Letters", "Hive Grid", "Letter Puzzle", "Word Tracing"]],
    ["What made Hive Minds' Superhive challenge particularly difficult?", "Teams had to find one answer using every letter exactly once", ["Players had to answer blindfolded", "The questions were asked in reverse", "The team had to memorise twenty pictures"], "Medium", "Hive Minds", ["BBC Four", "2015 Debut", "Letter Grid Quiz", "Superhive", "One Word Solution", "Use All Letters Once", "Final Puzzle"]],

    // WHOSE LINE IS IT ANYWAY?
    ["Who hosted the original British television version of Whose Line Is It Anyway?", "Clive Anderson", ["Drew Carey", "Paul Merton", "Stephen Fry"], "Easy", "Whose Line Is It Anyway?", ["Channel 4", "1988 Debut", "Improvisation Comedy", "Clive Anderson", "Original Host", "British Television Presenter", "Improvised Comedy Moderator"]],
    ["Which channel broadcast the British television version of Whose Line Is It Anyway?", "Channel 4", ["BBC One", "ITV", "Channel 5"], "Medium", "Whose Line Is It Anyway?", ["Channel 4", "1988 Debut", "Improvisation Comedy", "Channel 4 Network", "Original British Broadcast", "1988 Launch", "British Television Comedy"]],
    ["What type of comedy formed the basis of Whose Line Is It Anyway?", "Improvisation", ["Stand-up routines", "Scripted sketches", "Celebrity impersonations only"], "Easy", "Whose Line Is It Anyway?", ["Channel 4", "1988 Debut", "Improvisation Comedy", "Improvised Comedy", "Unscripted Scenes", "On The Spot Acting", "Comic Games"]],
    ["How many performers normally took part in each edition of Whose Line Is It Anyway?", "Four", ["Two", "Three", "Six"], "Medium", "Whose Line Is It Anyway?", ["Channel 4", "1988 Debut", "Improvisation Comedy", "Four Performers", "Player Count", "Studio Improvisers", "Comedy Line Up"]],
    ["What did the party host have to identify in the Party Quirks game on Whose Line Is It Anyway?", "The unusual characteristics of their guests", ["The guests' real occupations", "The guests' birthdays", "The guests' favourite films"], "Medium", "Whose Line Is It Anyway?", ["Channel 4", "1988 Debut", "Improvisation Comedy", "Party Quirks", "Guess Guest Characters", "Improv Party Host", "Unusual Personalities"]],
    ["Which musician regularly accompanied the British television performers on Whose Line Is It Anyway?", "Richard Vranch", ["Jools Holland", "Rick Wakeman", "Howard Goodall"], "Medium", "Whose Line Is It Anyway?", ["Channel 4", "1988 Debut", "Improvisation Comedy", "Richard Vranch", "Piano Accompanist", "Show Musician", "Improvised Songs"]],
    ["What was the winner of Whose Line Is It Anyway often required to do during the closing credits?", "Read the credits in a chosen style", ["Perform a stand-up routine", "Interview the audience", "Sing the programme theme"], "Medium", "Whose Line Is It Anyway?", ["Channel 4", "1988 Debut", "Improvisation Comedy", "Closing Credits", "Winner's Performance", "Read Credits In Style", "Comic Finale"]],

    // THANK GOD YOU'RE HERE
    ["Which comedian hosted the British television version of Thank God You're Here?", "Paul Merton", ["Clive Anderson", "Rob Brydon", "Lee Mack"], "Easy", "Thank God You're Here", ["ITV", "2008 UK Debut", "Improvised Sketch Comedy", "Paul Merton", "British Version Host", "Improvisation Presenter", "Comedy Panellist"]],
    ["Which channel broadcast the British version of Thank God You're Here?", "ITV", ["BBC Two", "Channel 4", "Sky One"], "Medium", "Thank God You're Here", ["ITV", "2008 UK Debut", "Improvised Sketch Comedy", "ITV Broadcast", "UK Adaptation", "Original British Network", "2008 ITV"]],
    ["What did contestants have to do on Thank God You're Here?", "Improvise their way through unfamiliar situations", ["Answer questions about world history", "Guess celebrity identities", "Complete a traditional crossword"], "Easy", "Thank God You're Here", ["ITV", "2008 UK Debut", "Improvised Sketch Comedy", "Unfamiliar Situations", "Improvised Dialogue", "Unexpected Scenarios", "Comic Acting"]],
    ["From which country did the format of Thank God You're Here originate?", "Australia", ["Canada", "United States", "New Zealand"], "Medium", "Thank God You're Here", ["ITV", "2008 UK Debut", "Improvised Sketch Comedy", "Australia", "Original Format", "Working Dog Productions", "International Adaptation"]],
    ["Which Australian comedian was a regular guest on the British version of Thank God You're Here?", "Hamish Blake", ["Adam Hills", "Tim Minchin", "Jim Jefferies"], "Medium", "Thank God You're Here", ["ITV", "2008 UK Debut", "Improvised Sketch Comedy", "Hamish Blake", "Australian Comedian", "Regular Guest", "Programme Cast"]],
    ["How many celebrity guests normally took part in each edition of Thank God You're Here?", "Four", ["Two", "Three", "Six"], "Medium", "Thank God You're Here", ["ITV", "2008 UK Debut", "Improvised Sketch Comedy", "Four Celebrity Guests", "Participant Count", "Improvisers", "Guest Players"]],

    // NOT A LOT OF PEOPLE KNOW THAT
    ["Who hosted the BBC comedy panel game Not a Lot of People Know That?", "Bob Mills", ["Bob Monkhouse", "Bob Mortimer", "Bob Holness"], "Medium", "Not a Lot of People Know That", ["BBC One", "1995 Debut", "Unusual Trivia Panel", "Bob Mills", "Original Host", "Comedian Presenter", "BBC Panel"]],
    ["Which BBC channel broadcast Not a Lot of People Know That?", "BBC One", ["BBC Two", "BBC Three", "BBC Four"], "Medium", "Not a Lot of People Know That", ["BBC One", "1995 Debut", "Unusual Trivia Panel", "BBC One Original", "Network Broadcast", "British Comedy Channel", "1990s Programme"]],
    ["What type of subject matter was the focus of Not a Lot of People Know That?", "Bizarre and unusual trivia", ["Only current affairs", "Only professional sport", "Only popular music"], "Medium", "Not a Lot of People Know That", ["BBC One", "1995 Debut", "Unusual Trivia Panel", "Bizarre Trivia", "Unusual Knowledge", "Odd Facts", "Comedy Quiz"]],
    ["Which unusual round featured on Not a Lot of People Know That?", "Get Your Socks Off", ["Take Your Hat Off", "Lose Your Shoes", "Show Your Hands"], "Medium", "Not a Lot of People Know That", ["BBC One", "1995 Debut", "Unusual Trivia Panel", "Get Your Socks Off", "Named Round", "Physical Mystery", "Feet Guessing"]],
    ["Which body part did contestants use to identify mystery contents during Get Your Socks Off?", "Their feet", ["Their elbows", "Their knees", "Their noses"], "Medium", "Not a Lot of People Know That", ["BBC One", "1995 Debut", "Unusual Trivia Panel", "Feet", "Touch Test", "Blind Identification", "Socks Off Challenge"]],
    ["How many series of Not a Lot of People Know That were broadcast?", "Three", ["One", "Two", "Five"], "Medium", "Not a Lot of People Know That", ["BBC One", "1995 Debut", "Unusual Trivia Panel", "Three Series", "1995 To 1998", "Programme Run", "BBC Comedy History"]],

];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, programme, specificTags], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(5904 + index).padStart(4, '0'),
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
