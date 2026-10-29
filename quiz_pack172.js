// quiz_pack172.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2002 and 2003
// 100 questions: tv_1201 to tv_1300
// 46 questions from 2002, 54 from 2003.
// Wording and specialist-tag audit; original IDs, answers and settings preserved.
// quiz_bank.js stays unchanged.

// Entry: question, correct answer, three alternatives, difficulty, year, topic, specialist tags.
const facts = [
    // 2002
    ["Whose suicide attempt on New Year's Eve 2001 led to the fatal car crash involving Dennis Stringer?", "Les Battersby", ["Dennis Stringer", "Vikram Desai", "Steve McDonald"], "Medium", "2002", "Storylines", ["Les Battersby", "Dennis Stringer", "New Year's Eve", "Suicide attempt", "Fatal car crash", "Street Cars"]],
    ["Who died after a car crash while trying to save Les Battersby on New Year's Day 2002?", "Dennis Stringer", ["Mick Hopwood", "Duggie Ferguson", "Joe Carter"], "Medium", "2002", "Departures", ["Dennis Stringer", "Les Battersby", "New Year's Day", "Fatal car crash", "Character death", "Street Cars"]],
    ["How did Dennis Stringer learn that Les Battersby was in danger?", "He heard a message on the Street Cars radio", ["He received a letter", "He saw a television appeal", "He was telephoned by the police"], "Medium", "2002", "Storylines", ["Dennis Stringer", "Les Battersby", "Street Cars", "Radio message", "Rescue attempt", "New Year's Eve"]],
    ["Which Battersby resident had been dating Dennis Stringer before his death?", "Janice Battersby", ["Leanne Battersby", "Toyah Battersby", "Cilla Brown"], "Easy", "2002", "Relationships", ["Janice Battersby", "Dennis Stringer", "Romance", "Battersby family", "Bereavement"]],
    ["What was Archie Shuttleworth's profession when he arrived in Weatherfield?", "Undertaker", ["Publican", "Solicitor", "Teacher"], "Easy", "2002", "Occupations", ["Archie Shuttleworth", "Roy Hudd", "Undertaker", "Funeral directors", "Character debut"]],
    ["Which comedian played undertaker Archie Shuttleworth?", "Roy Hudd", ["Roy Barraclough", "Johnny Briggs", "John Savident"], "Medium", "2002", "Actors", ["Archie Shuttleworth", "Roy Hudd", "Casting", "Comedian", "Character debut"]],
    ["Which sharp-tongued resident dated undertaker Archie Shuttleworth?", "Blanche Hunt", ["Rita Sullivan", "Betty Williams", "Vera Duckworth"], "Medium", "2002", "Relationships", ["Blanche Hunt", "Archie Shuttleworth", "Courtship", "Romance", "Undertaker"]],
    ["Which picture format did Coronation Street switch to in January 2002?", "16:9 widescreen", ["4:3 standard definition", "2.35:1 letterbox", "5:4 square format"], "Medium", "2002", "TV History", ["Widescreen", "16:9", "ITV", "Broadcast format", "Technical changes", "Production history"]],
    ["At which building development did Duggie Ferguson suffer his fatal fall?", "The Ridings", ["Victoria Court", "The Quays", "Weatherfield Mill"], "Medium", "2002", "Locations", ["Duggie Ferguson", "Richard Hillman", "The Ridings", "Property development", "Fatal fall"]],
    ["What caused Duggie Ferguson to fall to his death during an argument?", "A banister gave way", ["A lift cable snapped", "A ladder broke", "A roof collapsed"], "Medium", "2002", "Storylines", ["Duggie Ferguson", "Richard Hillman", "Broken banister", "Property development", "Fatal accident"]],
    ["Which businessman left Duggie Ferguson to die rather than summon help?", "Richard Hillman", ["Mike Baldwin", "Dev Alahan", "Fred Elliott"], "Easy", "2002", "Crime", ["Richard Hillman", "Duggie Ferguson", "The Ridings", "Failure to summon help", "Death", "Serial killer"]],
    ["What was the first name of Richard Hillman's ex-wife, whom he murdered?", "Patricia", ["Charlotte", "Rebecca", "Angela"], "Easy", "2002", "Crime", ["Richard Hillman", "Patricia Hillman", "Ex-wife", "Serial killer", "Murder"]],
    ["What did Richard Hillman use to kill his former wife Patricia?", "A spade", ["A crowbar", "A hammer", "A wrench"], "Medium", "2002", "Crime", ["Richard Hillman", "Patricia Hillman", "Spade", "Murder weapon", "Serial killer"]],
    ["Where did Richard Hillman hide Patricia's body?", "Beneath concrete at a building development", ["Inside a freezer at the factory", "Under the floor of the Rovers", "In the canal at Weatherfield"], "Medium", "2002", "Crime", ["Richard Hillman", "Patricia Hillman", "Underpinning trench", "Concrete", "Body concealed", "Property development"]],
    ["What was the name of Richard Hillman's property company?", "Kellett Holdings", ["Baldwin Holdings", "Weatherfield Estates", "Hillman and Sons"], "Hard", "2002", "Businesses", ["Richard Hillman", "Kellett Holdings", "Property company", "Business dealings", "Financial fraud"]],
    ["How much money did Patricia Hillman demand for her stake in Richard's company?", "£25,000", ["£5,000", "£10,000", "£50,000"], "Hard", "2002", "Money", ["Patricia Hillman", "Richard Hillman", "Kellett Holdings", "£25,000", "Shares", "Property business"]],
    ["Whom did Gail Platt marry in July 2002?", "Richard Hillman", ["Martin Platt", "Archie Shuttleworth", "Duggie Ferguson"], "Easy", "2002", "Weddings", ["Gail Platt", "Richard Hillman", "Gail and Richard wedding", "Platt family", "Marriage"]],
    ["Where did Gail Platt and Richard Hillman get married?", "Aston Manor", ["The Rovers Return", "De Lisle House", "Weatherfield Town Hall"], "Hard", "2002", "Locations", ["Gail Platt", "Richard Hillman", "Aston Manor", "Wedding venue", "Gail and Richard wedding"]],
    ["Where did Gail and Richard Hillman spend their honeymoon?", "Florida", ["France", "Spain", "Scotland"], "Medium", "2002", "Travel", ["Gail Hillman", "Richard Hillman", "Florida", "Honeymoon", "USA"]],
    ["What illness did Richard Hillman falsely suggest Audrey Roberts was developing?", "Alzheimer's disease", ["Parkinson's disease", "Multiple sclerosis", "Epilepsy"], "Easy", "2002", "Storylines", ["Richard Hillman", "Audrey Roberts", "Alzheimer's disease", "Gaslighting", "Manipulation", "Memory loss"]],
    ["Which safety device did Richard Hillman tamper with before Audrey's house caught fire?", "The smoke alarm", ["The front-door lock", "The boiler thermostat", "The telephone"], "Medium", "2002", "Crime", ["Richard Hillman", "Audrey Roberts", "Smoke alarm", "Arson", "House fire", "Attempted murder"]],
    ["Who rescued Audrey Roberts from the house fire started by Richard Hillman?", "Steve McDonald", ["Ken Barlow", "Fred Elliott", "Roy Cropper"], "Medium", "2002", "Storylines", ["Steve McDonald", "Audrey Roberts", "Archie Shuttleworth", "House fire", "Rescue", "Arson"]],
    ["Which undertaker supported Audrey Roberts in her suspicions about Richard Hillman?", "Archie Shuttleworth", ["Duggie Ferguson", "Harry Flagg", "Joe Carter"], "Medium", "2002", "Relationships", ["Archie Shuttleworth", "Audrey Roberts", "Richard Hillman", "Suspicion", "Protective friendship"]],
    ["What did Maxine and Ashley Peacock name their baby son?", "Joshua", ["James", "Jordan", "Jason"], "Easy", "2002", "Families", ["Maxine Peacock", "Ashley Peacock", "Joshua Peacock", "Birth", "Premature baby", "Peacock family"]],
    ["Which couple were bringing up baby Joshua Peacock?", "Ashley and Maxine Peacock", ["Kevin and Sally Webster", "Roy and Hayley Cropper", "Curly and Emma Watts"], "Easy", "2002", "Families", ["Ashley Peacock", "Maxine Peacock", "Joshua Peacock", "Parents", "Peacock family", "Newborn"]],
    ["Which doctor had a one-night stand with Maxine Peacock, raising doubts about Joshua's paternity?", "Matt Ramsden", ["Martin Platt", "Dr Wilson", "Dr Gaddas"], "Medium", "2002", "Families", ["Maxine Peacock", "Matt Ramsden", "Ashley Peacock", "Infidelity", "Paternity uncertainty", "Doctor"]],
    ["Which married couple left Weatherfield after their marriage was strained by Maxine Peacock's pregnancy?", "Matt and Charlie Ramsden", ["Curly and Emma Watts", "Kevin and Alison Webster", "Steve and Karen McDonald"], "Medium", "2002", "Departures", ["Matt Ramsden", "Charlie Ramsden", "Maxine Peacock", "Marriage breakdown", "Departures"]],
    ["Which young Underworld worker staged a rooftop protest over her lingerie designs?", "Fiz Brown", ["Karen McDonald", "Hayley Cropper", "Janice Battersby"], "Medium", "2002", "Comedy", ["Fiz Brown", "Mike Baldwin", "Underworld", "Rooftop protest", "Lingerie design", "Employment dispute"]],
    ["What type of clothing did Fiz Brown design before accusing Mike Baldwin of exploiting her ideas?", "Lingerie", ["Handbags", "Shoes", "Perfume"], "Medium", "2002", "Businesses", ["Fiz Brown", "Mike Baldwin", "Underworld", "Lingerie", "Fashion design", "Intellectual property"]],
    ["Which Underworld boss paid Fiz Brown £500 for her designs?", "Mike Baldwin", ["Joe Carter", "Dev Alahan", "Danny Baldwin"], "Medium", "2002", "Businesses", ["Mike Baldwin", "Fiz Brown", "Underworld", "£500 payment", "Lingerie designs", "Fashion"]],
    ["Which formerly divorced couple married each other again in December 2002?", "Kevin and Sally Webster", ["Ken and Deirdre Barlow", "Steve and Karen McDonald", "Jack and Vera Duckworth"], "Easy", "2002", "Weddings", ["Kevin Webster", "Sally Webster", "Second wedding", "Reconciliation", "Webster family"]],
    ["Where did Kevin and Sally Webster hold their second wedding?", "Weatherfield Register Office", ["All Saints Church", "Aston Manor", "The Rovers Return"], "Medium", "2002", "Weddings", ["Kevin Webster", "Sally Webster", "Weatherfield Register Office", "Second wedding", "Webster family"]],
    ["What type of shop did Sally Webster run?", "A hardware shop", ["A florist", "A bakery", "A bookshop"], "Medium", "2002", "Businesses", ["Sally Webster", "Hardware shop", "Retail business", "Employment", "Webster family"]],
    ["Which Coronation Street newcomer was played by Boyzone singer Keith Duffy?", "Ciaran McCarthy", ["Joe Carter", "Harry Flagg", "Aidan Critchley"], "Easy", "2002", "Arrivals", ["Ciaran McCarthy", "Keith Duffy", "Casting", "Character debut", "Boyzone", "Rovers Return"]],
    ["Which boyband made Keith Duffy famous before he played Ciaran McCarthy?", "Boyzone", ["Westlife", "Take That", "Blue"], "Easy", "2002", "Actors", ["Keith Duffy", "Ciaran McCarthy", "Boyzone", "Irish boyband", "Music crossover"]],
    ["Which Barlow had served in the Royal Navy with Ciaran McCarthy?", "Peter Barlow", ["Ken Barlow", "Adam Barlow", "Daniel Osbourne"], "Medium", "2002", "Friendships", ["Peter Barlow", "Ciaran McCarthy", "Royal Navy", "Old friendship", "Barlow family"]],
    ["Which ex-prisoner joined the Underworld storylines and later worked with Mike Baldwin?", "Joe Carter", ["Mick Hopwood", "Harry Flagg", "Aidan Critchley"], "Medium", "2002", "Arrivals", ["Joe Carter", "Mike Baldwin", "Underworld", "Former prisoner", "Character debut", "Factory"]],
    ["Which newcomer worked as a cleaner at the Rovers Return?", "Harry Flagg", ["Archie Shuttleworth", "Patrick Tussel", "Ciaran McCarthy"], "Medium", "2002", "Occupations", ["Harry Flagg", "Rovers Return", "Cleaner", "Character debut", "Pub employees"]],
    ["What kind of shop did Lucy Richards run when she met Peter Barlow?", "A florist", ["A pet shop", "A newsagent", "A sweet shop"], "Easy", "2002", "Businesses", ["Lucy Richards", "Peter Barlow", "Florist", "Flower shop", "Romance", "Newcomer"]],
    ["Which actress played florist Lucy Richards?", "Katy Carmichael", ["Kate Ford", "Sally Lindsay", "Angela Lonsdale"], "Medium", "2002", "Actors", ["Lucy Richards", "Katy Carmichael", "Casting", "Florist", "Character debut"]],
    ["Which surname did Tommy, Angela and their children use when they first arrived in Weatherfield?", "Nelson", ["Hopwood", "Ramsden", "Sykes"], "Medium", "2002", "Arrivals", ["Tommy Harris", "Angela Harris", "Katy Harris", "Craig Harris", "Nelson surname", "Witness protection"]],
    ["Why did Tommy and Angela Harris arrive in Weatherfield using false names?", "They were in witness protection", ["They were avoiding unpaid taxes", "They were on a television programme", "They were hiding from an inheritance claim"], "Medium", "2002", "Storylines", ["Tommy Harris", "Angela Harris", "Harris family", "Witness protection", "False identities"]],
    ["What were the first names of Tommy and Angela Harris's teenage children?", "Katy and Craig", ["Sarah and David", "Rosie and Sophie", "Todd and Jason"], "Medium", "2002", "Families", ["Tommy Harris", "Angela Harris", "Katy Harris", "Craig Harris", "Siblings", "Harris family"]],
    ["Which actress took over the role of Tracy Barlow on Christmas Day 2002?", "Kate Ford", ["Dawn Acton", "Tracy Shaw", "Katy Carmichael"], "Easy", "2002", "Actors", ["Tracy Barlow", "Kate Ford", "Recasting", "Christmas Day", "Character return"]],
    ["Which temporary Rovers manager dismissed Jack Duckworth?", "Lillian Spencer", ["Bet Lynch", "Bev Unwin", "Natalie Barnes"], "Medium", "2002", "Rovers Return", ["Lillian Spencer", "Jack Duckworth", "Rovers Return", "Temporary manager", "Dismissal"]],
    ["Which resident appeared as a medal bearer at the 2002 Commonwealth Games in Manchester?", "Norris Cole", ["Ken Barlow", "Fred Elliott", "Jack Duckworth"], "Medium", "2002", "TV History", ["Norris Cole", "Commonwealth Games", "Manchester 2002", "Medal bearer", "Television appearance", "Sport"]],

    // 2003
    ["Whom did Richard Hillman murder in January 2003 when she interrupted his attack on Emily Bishop?", "Maxine Peacock", ["Emily Bishop", "Audrey Roberts", "Gail Platt"], "Easy", "2003", "Crime", ["Richard Hillman", "Maxine Peacock", "Serial killer", "Murder", "Peacock family"]],
    ["Which elderly resident survived a crowbar attack by Richard Hillman?", "Emily Bishop", ["Rita Sullivan", "Blanche Hunt", "Betty Williams"], "Easy", "2003", "Crime", ["Richard Hillman", "Emily Bishop", "Attempted murder", "Crowbar", "Survivor", "Serial killer"]],
    ["Which weapon did Richard Hillman use to attack Emily Bishop and Maxine Peacock?", "A crowbar", ["A shovel", "A knife", "A candlestick"], "Medium", "2003", "Crime", ["Richard Hillman", "Emily Bishop", "Maxine Peacock", "Crowbar", "Murder weapon", "Attack"]],
    ["Which teenager was wrongly accused of murdering Maxine Peacock?", "Aidan Critchley", ["Todd Grimshaw", "Craig Harris", "John Arnley"], "Medium", "2003", "Crime", ["Aidan Critchley", "Richard Hillman", "Maxine Peacock", "Wrongful accusation", "Framing"]],
    ["To whom was Maxine Peacock married when she was murdered?", "Ashley Peacock", ["Fred Elliott", "Matt Ramsden", "Duggie Ferguson"], "Easy", "2003", "Families", ["Maxine Peacock", "Ashley Peacock", "Widower", "Joshua Peacock", "Peacock family"]],
    ["Which member of Gail's family had suspected Richard Hillman was dangerous before his confession?", "Audrey Roberts", ["Blanche Hunt", "Betty Williams", "Vera Duckworth"], "Medium", "2003", "Crime", ["Audrey Roberts", "Richard Hillman", "Gail Hillman", "Suspicion", "Serial killer", "Family conflict"]],
    ["To whom did Richard Hillman confess his crimes?", "Gail Hillman", ["Deirdre Barlow", "Rita Sullivan", "Shelley Unwin"], "Easy", "2003", "Storylines", ["Richard Hillman", "Gail Hillman", "Confession", "Serial killer", "Murder revelations"]],
    ["At which development site did police uncover Patricia Hillman's body?", "The Ridings", ["Weatherfield Quays", "The Red Rec", "Freshco car park"], "Medium", "2003", "Crime", ["Richard Hillman", "Patricia Hillman", "The Ridings", "Body discovery", "Police excavation"]],
    ["Where did Richard Hillman drive his car with Gail and the Platt children trapped inside?", "Into a canal", ["Over a cliff", "Into a reservoir", "Through a railway barrier"], "Easy", "2003", "Storylines", ["Richard Hillman", "Gail Hillman", "Sarah Platt", "David Platt", "Bethany Platt", "Weatherfield Canal", "Family kidnapping"]],
    ["What happened to Richard Hillman after he drove the Platts into the canal?", "He drowned", ["He was arrested at the scene", "He escaped to Spain", "He survived with a broken arm"], "Easy", "2003", "Departures", ["Richard Hillman", "Weatherfield Canal", "Drowning", "Final exit", "Serial killer"]],
    ["Who were the only two people present at Richard Hillman's funeral?", "Gail Hillman and Archie Shuttleworth", ["Audrey Roberts and Ken Barlow", "Mike Baldwin and Fred Elliott", "Martin Platt and Deirdre Barlow"], "Hard", "2003", "Funerals", ["Richard Hillman", "Gail Hillman", "Archie Shuttleworth", "Funeral", "Only two mourners", "Low-key service"]],
    ["Which doctor was confirmed by a DNA test to be Joshua Peacock's biological father?", "Matt Ramsden", ["Martin Platt", "Ashley Peacock", "Dr Wilson"], "Easy", "2003", "Families", ["Matt Ramsden", "Ashley Peacock", "Maxine Peacock", "Joshua Peacock", "DNA test", "Biological father"]],
    ["Which young nanny was hired to look after Ashley Peacock's son Joshua?", "Claire Casey", ["Cilla Brown", "Bev Unwin", "Lucy Richards"], "Easy", "2003", "Arrivals", ["Claire Casey", "Ashley Peacock", "Joshua Peacock", "Nanny", "Character debut", "Peacock family"]],
    ["Which actress played nanny Claire Casey when she arrived?", "Julia Haworth", ["Sally Lindsay", "Wendi Peters", "Sue Cleaver"], "Medium", "2003", "Actors", ["Claire Casey", "Julia Haworth", "Casting", "Nanny", "Character debut"]],
    ["Which florist did Peter Barlow marry while he was involved with Shelley Unwin?", "Lucy Richards", ["Shelley Unwin", "Tracy Barlow", "Karen McDonald"], "Easy", "2003", "Weddings", ["Peter Barlow", "Lucy Richards", "Secret wedding", "Bigamy", "Flower shop"]],
    ["Whom did Peter Barlow marry while still legally married to Lucy Richards?", "Shelley Unwin", ["Maria Sutherland", "Geena Gregory", "Sunita Parekh"], "Easy", "2003", "Weddings", ["Peter Barlow", "Shelley Unwin", "Lucy Richards", "Bigamy", "Second wedding"]],
    ["What crime did Peter Barlow commit by marrying Lucy Richards and Shelley Unwin?", "Bigamy", ["Perjury", "Fraud", "Blackmail"], "Easy", "2003", "Crime", ["Peter Barlow", "Lucy Richards", "Shelley Unwin", "Bigamy", "Marriage law"]],
    ["What name did Peter Barlow and Lucy Richards give their son?", "Simon", ["Adam", "Daniel", "Ben"], "Easy", "2003", "Families", ["Peter Barlow", "Lucy Richards", "Simon Barlow", "Birth", "Barlow family"]],
    ["To which country did Lucy Richards move with baby Simon?", "Australia", ["Canada", "France", "New Zealand"], "Medium", "2003", "Departures", ["Lucy Richards", "Simon Barlow", "Peter Barlow", "Australia", "Departure", "Emigration"]],
    ["Which Barlow worked in Lucy Richards's flower shop and knew about Peter's double life?", "Tracy Barlow", ["Susan Barlow", "Deirdre Barlow", "Blanche Hunt"], "Medium", "2003", "Relationships", ["Tracy Barlow", "Lucy Richards", "Peter Barlow", "Flower shop", "Bigamy secret"]],
    ["What was the name of Shelley Unwin's mother?", "Bev Unwin", ["Eve Sykes", "Lillian Spencer", "Doreen Heavey"], "Easy", "2003", "Families", ["Shelley Unwin", "Bev Unwin", "Mother and daughter", "Character debut", "Rovers Return"]],
    ["Which actress played Bev Unwin when she first appeared?", "Susie Blake", ["Sue Nicholls", "Wendi Peters", "Vicky Entwistle"], "Medium", "2003", "Actors", ["Bev Unwin", "Susie Blake", "Casting", "Character debut", "Rovers Return"]],
    ["What was the name of Shelley Unwin's sister, whose death was reported in 2003?", "Sharon", ["Sarah", "Susan", "Sheila"], "Medium", "2003", "Families", ["Shelley Unwin", "Sharon Unwin", "Bev Unwin", "Sister's death", "Bereavement"]],
    ["Which Battersby left Weatherfield with Spider Nugent to live in London?", "Toyah Battersby", ["Leanne Battersby", "Janice Battersby", "Les Battersby"], "Medium", "2003", "Departures", ["Toyah Battersby", "Spider Nugent", "London", "Departures", "Relationship", "Juice bar"]],
    ["Which Sutherland became pregnant after an affair with Toyah Battersby's boyfriend?", "Maria Sutherland", ["Kirk Sutherland", "Shelley Unwin", "Fiz Brown"], "Medium", "2003", "Relationships", ["Maria Sutherland", "Toyah Battersby", "John Arnley", "Pregnancy", "Affair", "Love triangle"]],
    ["What was the name of Toyah Battersby's boyfriend who had an affair with Maria Sutherland?", "John Arnley", ["Joe Carter", "Aidan Critchley", "Nick Tilsley"], "Medium", "2003", "Relationships", ["John Arnley", "Toyah Battersby", "Maria Sutherland", "Infidelity", "Love triangle"]],
    ["Who bought a half-share of Street Cars in January 2003?", "Dev Alahan", ["Mike Baldwin", "Fred Elliott", "Peter Barlow"], "Medium", "2003", "Businesses", ["Dev Alahan", "Steve McDonald", "Street Cars", "Half share", "Business partnership"]],
    ["Which Harris family member was diagnosed with diabetes?", "Katy Harris", ["Angela Harris", "Craig Harris", "Tommy Harris"], "Medium", "2003", "Storylines", ["Katy Harris", "Tommy Harris", "Diabetes", "Diagnosis", "Insulin", "Harris family"]],
    ["Which assumed surname did the Harris family drop after leaving witness protection?", "Nelson", ["Ramsden", "Hopwood", "Critchley"], "Medium", "2003", "Families", ["Harris family", "Nelson alias", "Witness protection", "Identity change", "True surname"]],
    ["Which brothers held Katy Harris hostage in her family home?", "The Morgan brothers", ["The Grimshaw brothers", "The Barlow brothers", "The Sykes brothers"], "Medium", "2003", "Crime", ["Katy Harris", "Andy Morgan", "Nick Morgan", "The Morgan brothers", "Hostage crisis", "Witness protection"]],
    ["Which older Weatherfield resident began dating teenager Katy Harris?", "Martin Platt", ["Kevin Webster", "Mike Baldwin", "Steve McDonald"], "Easy", "2003", "Relationships", ["Katy Harris", "Martin Platt", "Age-gap relationship", "Romance", "Harris family"]],
    ["Which police officer moved to Newcastle for work with husband Curly Watts?", "Emma Watts", ["Colette Graham", "Janice Battersby", "Karen McDonald"], "Medium", "2003", "Departures", ["Emma Watts", "Curly Watts", "Ben Watts", "Newcastle", "Police promotion", "Departure"]],
    ["Which long-serving resident left Weatherfield with his wife Emma and son Ben?", "Curly Watts", ["Ken Barlow", "Roy Cropper", "Fred Elliott"], "Easy", "2003", "Departures", ["Curly Watts", "Emma Watts", "Ben Watts", "Newcastle", "Family departure", "Long-serving character"]],
    ["Which university did Todd Grimshaw turn down to remain with Sarah Platt?", "Oxford University", ["Cambridge University", "Leeds University", "Manchester University"], "Medium", "2003", "Relationships", ["Todd Grimshaw", "Sarah Platt", "Oxford University", "University plans", "Relationship sacrifice"]],
    ["Which man did Todd Grimshaw attempt to kiss while questioning his sexuality?", "Nick Tilsley", ["Jason Grimshaw", "Peter Barlow", "Ciaran McCarthy"], "Easy", "2003", "Storylines", ["Todd Grimshaw", "Nick Tilsley", "Sexuality", "Same-sex kiss attempt", "Coming out storyline"]],
    ["Who did Tracy Barlow drug during Peter and Shelley's wedding celebrations?", "Roy Cropper", ["Fred Elliott", "Ken Barlow", "Dev Alahan"], "Easy", "2003", "Storylines", ["Tracy Barlow", "Roy Cropper", "Peter Barlow", "Shelley Unwin", "Drugging", "Wedding day"]],
    ["Who was the biological father of the baby Tracy Barlow conceived in 2003?", "Steve McDonald", ["Roy Cropper", "Peter Barlow", "Dev Alahan"], "Easy", "2003", "Families", ["Tracy Barlow", "Steve McDonald", "Amy Barlow", "Paternity", "Pregnancy", "McDonald family"]],
    ["Which couple agreed to pay Tracy Barlow to raise her unborn baby?", "Roy and Hayley Cropper", ["Ken and Deirdre Barlow", "Kevin and Sally Webster", "Ashley and Claire Peacock"], "Easy", "2003", "Families", ["Tracy Barlow", "Roy Cropper", "Hayley Cropper", "Unborn baby", "Adoption arrangement", "Child payment"]],
    ["How much money did Tracy Barlow initially ask the Croppers for her unborn baby?", "£20,000", ["£2,000", "£5,000", "£50,000"], "Hard", "2003", "Money", ["Tracy Barlow", "Roy Cropper", "Hayley Cropper", "£20,000", "Baby sale proposal", "Pregnancy"]],
    ["Which unlikely couple married in November 2003 as part of Tracy's baby arrangement?", "Tracy Barlow and Roy Cropper", ["Tracy Barlow and Dev Alahan", "Roy Cropper and Deirdre Barlow", "Hayley Cropper and Peter Barlow"], "Medium", "2003", "Weddings", ["Tracy Barlow", "Roy Cropper", "Hayley Cropper", "Sham wedding", "Pregnancy", "Register office"]],
    ["Which solicitor helped the Croppers over their arrangement with Tracy Barlow?", "Maya Sharma", ["Charlotte Morris", "Sunita Parekh", "Rebecca Hopkins"], "Medium", "2003", "Arrivals", ["Maya Sharma", "Roy Cropper", "Hayley Cropper", "Solicitor", "Baby arrangement", "Character debut"]],
    ["Which actress played solicitor Maya Sharma?", "Sasha Behar", ["Shobna Gulati", "Nina Wadia", "Indira Joshi"], "Medium", "2003", "Actors", ["Maya Sharma", "Sasha Behar", "Casting", "Solicitor", "Character debut"]],
    ["Which character was played by Wendi Peters when she joined Coronation Street?", "Cilla Brown", ["Bev Unwin", "Claire Casey", "Eileen Grimshaw"], "Easy", "2003", "Arrivals", ["Cilla Brown", "Wendi Peters", "Casting", "Character debut", "Battersby family"]],
    ["Who were Cilla Brown's two children when she arrived in Weatherfield?", "Fiz and Chesney", ["Rosie and Sophie", "Todd and Jason", "Sarah and David"], "Easy", "2003", "Families", ["Cilla Brown", "Fiz Brown", "Chesney Brown", "Mother and children", "Brown family"]],
    ["Which actor played Chesney Brown when he made his debut?", "Sam Aston", ["Andrew Whyment", "Jack P. Shepherd", "Bruno Langley"], "Medium", "2003", "Actors", ["Chesney Brown", "Sam Aston", "Casting", "Character debut", "Brown family"]],
    ["Which resident started dating newcomer Cilla Brown?", "Les Battersby", ["Ken Barlow", "Fred Elliott", "Roy Cropper"], "Easy", "2003", "Relationships", ["Les Battersby", "Cilla Brown", "Romance", "Battersby family", "New couple"]],
    ["Which builder did Bill Ward begin playing in 2003?", "Charlie Stubbs", ["Tommy Harris", "Joe Carter", "Mick Hopwood"], "Easy", "2003", "Arrivals", ["Charlie Stubbs", "Bill Ward", "Builder", "Character debut", "Builders' yard"]],
    ["What did builder Charlie Stubbs use to lift Mike Baldwin's Jaguar out of the way?", "A bulldozer", ["A forklift truck", "A tow truck", "A tractor"], "Medium", "2003", "Comedy", ["Charlie Stubbs", "Mike Baldwin", "Jaguar", "Bulldozer", "Building site", "Parking dispute"]],
    ["Why was Jack Duckworth arrested after police inspected his greenhouse?", "He was growing cannabis in his greenhouse", ["He sold counterfeit tickets", "He stole a racing pigeon", "He drove without a licence"], "Medium", "2003", "Comedy", ["Jack Duckworth", "Cannabis", "Greenhouse", "Allotment", "Police arrest", "Comedy"]],
    ["What did Vera Duckworth actually win after mistaking a competition prize for a dream house?", "A greenhouse", ["A caravan", "A summerhouse", "A conservatory"], "Easy", "2003", "Comedy", ["Vera Duckworth", "Jack Duckworth", "Greenhouse", "Competition prize", "Misunderstanding", "Comedy"]],
    ["Which Harris teenager tampered with Martin Platt's car brakes?", "Craig Harris", ["Katy Harris", "Todd Grimshaw", "David Platt"], "Medium", "2003", "Crime", ["Craig Harris", "Martin Platt", "Katy Harris", "Car brakes", "Sabotage", "Family conflict"]],
    ["Which factory worker punched Tracy Barlow over her treatment of Roy Cropper?", "Fiz Brown", ["Leanne Battersby", "Maria Sutherland", "Karen McDonald"], "Medium", "2003", "Storylines", ["Fiz Brown", "Tracy Barlow", "Roy Cropper", "Rovers Return", "Punch", "Retaliation"]],
    ["Which former Rovers landlady visited Blackpool in 2003 and met Liz McDonald?", "Bet Lynch", ["Natalie Barnes", "Annie Walker", "Betty Williams"], "Medium", "2003", "Returns", ["Bet Lynch", "Liz McDonald", "Blackpool", "Returning character", "Former Rovers landlady"]],
    ["What was Les Battersby wrongly convicted of in May 2003?", "Assaulting Mick Hopwood", ["Assaulting Peter Barlow", "Assaulting Dev Alahan", "Assaulting Fred Elliott"], "Medium", "2003", "Crime", ["Les Battersby", "PC Mick Hopwood", "Emma Watts", "False testimony", "Wrongful imprisonment", "Assault charge"]]

];

// Export exactly 100 questions, retaining the original rotating answer positions.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, specialistTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(1201 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '2000s', year, topic, ...specialistTags])],
        dailyEligible: true
    };
});

// Validate the actual exported objects.
if (questions.length !== 100 || questions[0].id !== 'tv_1201' ||
    questions[99].id !== 'tv_1300' ||
    questions.filter(q => q.tags.includes('2002')).length !== 46 ||
    questions.filter(q => q.tags.includes('2003')).length !== 54) {
    throw new Error('Pack 172: invalid count, ID range or year split');
}

const seenIds = new Set();
const seenWording = new Set();
for (const q of questions) {
    const wording = q.question.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
    if (seenIds.has(q.id) || seenWording.has(wording) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        !q.tags.includes('Soaps') || !q.tags.includes('Coronation Street') ||
        !q.tags.includes('2000s') || !['2002', '2003'].some(y => q.tags.includes(y)) ||
        q.tags.length < 8 || q.category !== 'Television' || q.dailyEligible !== true) {
        throw new Error('Pack 172: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenWording.add(wording);
}

module.exports = questions;
