// quiz_pack8.js
// PuzzlePilot Big Quiz - Mixed Question Pack 8
// Original IDs preserved; corrections, fuller tags and 28 new questions.
// No additional Music or Television questions.

const questions = [

    // ======================================================
    // MUSIC
    // ======================================================

    {
        id: "music_0053",
        category: "Music",
        question: "Which band released the 1979 album \"Breakfast in America\"?",
        answers: ["Supertramp", "Genesis", "Electric Light Orchestra", "10cc"],
        correctAnswer: "Supertramp",
        difficulty: "Medium",
        tags: ["1970s", "british", "bands", "albums", "rock", "supertramp"],
        dailyEligible: true
    },

    {
        id: "music_0054",
        category: "Music",
        question: "Which singer had a 1987 hit with \"Heaven Is a Place on Earth\"?",
        answers: ["Belinda Carlisle", "Kim Wilde", "Cyndi Lauper", "Tiffany"],
        correctAnswer: "Belinda Carlisle",
        difficulty: "Medium",
        tags: ["1980s", "american", "singers", "songs", "pop", "belinda carlisle"],
        dailyEligible: true
    },

    {
        id: "music_0055",
        category: "Music",
        question: "Which singer had a 1981 hit with \"Kids in America\"?",
        answers: ["Kim Wilde", "Toyah Willcox", "Hazel O'Connor", "Sheena Easton"],
        correctAnswer: "Kim Wilde",
        difficulty: "Medium",
        tags: ["1980s", "british", "singers", "songs", "pop", "kim wilde"],
        dailyEligible: true
    },

    {
        id: "music_0056",
        category: "Music",
        question: "Which singer released the 1998 hit \"...Baby One More Time\"?",
        answers: ["Britney Spears", "Christina Aguilera", "Jessica Simpson", "Mandy Moore"],
        correctAnswer: "Britney Spears",
        difficulty: "Easy",
        tags: ["1990s", "american", "singers", "songs", "pop", "britney spears"],
        dailyEligible: true
    },

    {
        id: "music_0057",
        category: "Music",
        question: "Which band featured Morrissey as its lead singer?",
        answers: ["The Smiths", "The Cure", "Joy Division", "Echo & the Bunnymen"],
        correctAnswer: "The Smiths",
        difficulty: "Medium",
        tags: ["1980s", "british", "bands", "alternative rock", "lead singers", "the smiths", "morrissey"],
        dailyEligible: true
    },

    {
        id: "music_0058",
        category: "Music",
        question: "Which singer released the 1971 album \"Tapestry\"?",
        answers: ["Carole King", "Joni Mitchell", "Carly Simon", "Joan Baez"],
        correctAnswer: "Carole King",
        difficulty: "Medium",
        tags: ["1970s", "american", "singers", "albums", "singer-songwriters", "carole king"],
        dailyEligible: true
    },

    {
        id: "music_0059",
        category: "Music",
        question: "Which British group released the 1996 single \"Wannabe\"?",
        answers: ["Spice Girls", "All Saints", "Eternal", "Bananarama"],
        correctAnswer: "Spice Girls",
        difficulty: "Easy",
        tags: ["1990s", "british", "groups", "songs", "pop", "spice girls"],
        dailyEligible: true
    },

    {
        id: "music_0060",
        category: "Music",
        question: "Which singer released the album \"Graceland\" in 1986?",
        answers: ["Paul Simon", "Billy Joel", "Bruce Springsteen", "Don Henley"],
        correctAnswer: "Paul Simon",
        difficulty: "Medium",
        tags: ["1980s", "american", "singers", "albums", "paul simon"],
        dailyEligible: true
    },

    // ======================================================
    // TELEVISION
    // ======================================================

    {
        id: "tv_0053",
        category: "TV",
        question: "Which actress played Edina Monsoon in \"Absolutely Fabulous\"?",
        answers: ["Jennifer Saunders", "Dawn French", "Joanna Lumley", "Julia Sawalha"],
        correctAnswer: "Jennifer Saunders",
        difficulty: "Medium",
        tags: ["british", "comedy", "1990s", "actors", "absolutely fabulous"],
        dailyEligible: true
    },

    {
        id: "tv_0054",
        category: "TV",
        question: "In \"Friends\", what is the first name of Ross Geller's sister?",
        answers: ["Monica", "Rachel", "Phoebe", "Janice"],
        correctAnswer: "Monica",
        difficulty: "Easy",
        tags: ["american", "comedy", "1990s", "friends"],
        dailyEligible: true
    },

    {
        id: "tv_0055",
        category: "TV",
        question: "Which actor played Sam Tyler in the BBC drama Life on Mars?",
        answers: ["John Simm", "Philip Glenister", "Dean Andrews", "Marshall Lancaster"],
        correctAnswer: "John Simm",
        difficulty: "Medium",
        tags: ["british", "crime", "drama", "science fiction", "2000s", "actors", "life on mars"],
        dailyEligible: true
    },

    {
        id: "tv_0056",
        category: "TV",
        question: "Which sitcom features the characters Mark Corrigan and Jeremy Usborne?",
        answers: ["Peep Show", "Spaced", "The IT Crowd", "Green Wing"],
        correctAnswer: "Peep Show",
        difficulty: "Medium",
        tags: ["british", "comedy", "2000s", "peep show"],
        dailyEligible: true
    },

    {
        id: "tv_0057",
        category: "TV",
        question: "Which actress played DCI Jane Tennison in \"Prime Suspect\"?",
        answers: ["Helen Mirren", "Amanda Redman", "Suranne Jones", "Lesley Sharp"],
        correctAnswer: "Helen Mirren",
        difficulty: "Medium",
        tags: ["british", "crime", "drama", "1990s", "actors", "prime suspect"],
        dailyEligible: true
    },

    {
        id: "tv_0058",
        category: "TV",
        question: "Which British sitcom is set in the offices of Reynholm Industries?",
        answers: ["The IT Crowd", "The Office", "Green Wing", "Black Books"],
        correctAnswer: "The IT Crowd",
        difficulty: "Medium",
        tags: ["british", "comedy", "2000s", "the it crowd"],
        dailyEligible: true
    },

    {
        id: "tv_0059",
        category: "TV",
        question: "Which actress played Villanelle in \"Killing Eve\"?",
        answers: ["Jodie Comer", "Sandra Oh", "Suranne Jones", "Keeley Hawes"],
        correctAnswer: "Jodie Comer",
        difficulty: "Easy",
        tags: ["british", "crime", "drama", "2010s", "actors", "killing eve"],
        dailyEligible: true
    },

    {
        id: "tv_0060",
        category: "TV",
        question: "What do Del Boy and Rodney usually call their grandfather in Only Fools and Horses?",
        answers: ["Grandad", "Albert", "Freddie", "Reg"],
        correctAnswer: "Grandad",
        difficulty: "Medium",
        tags: ["british", "comedy", "1980s", "only fools and horses"],
        dailyEligible: true
    },

    // ======================================================
    // FILM
    // ======================================================

    {
        id: "film_0043",
        category: "Film",
        question: "Which actor played Neo in \"The Matrix\"?",
        answers: ["Keanu Reeves", "Brad Pitt", "Tom Cruise", "Johnny Depp"],
        correctAnswer: "Keanu Reeves",
        difficulty: "Easy",
        tags: ["1990s", "actors", "science fiction", "the matrix"],
        dailyEligible: true
    },

    {
        id: "film_0044",
        category: "Film",
        question: "Which 1993 film stars Robin Williams as a father disguised as an elderly housekeeper?",
        answers: ["Mrs. Doubtfire", "Hook", "Jumanji", "Patch Adams"],
        correctAnswer: "Mrs. Doubtfire",
        difficulty: "Easy",
        tags: ["1990s", "comedy", "actors", "mrs doubtfire"],
        dailyEligible: true
    },

    {
        id: "film_0045",
        category: "Film",
        question: "Which film features a hotel called the Overlook?",
        answers: ["The Shining", "Psycho", "The Exorcist", "Poltergeist"],
        correctAnswer: "The Shining",
        difficulty: "Medium",
        tags: ["1980s", "horror", "the shining"],
        dailyEligible: true
    },

    {
        id: "film_0046",
        category: "Film",
        question: "Which actor played Captain Jack Sparrow in the \"Pirates of the Caribbean\" films?",
        answers: ["Johnny Depp", "Orlando Bloom", "Geoffrey Rush", "Jude Law"],
        correctAnswer: "Johnny Depp",
        difficulty: "Easy",
        tags: ["2000s", "actors", "adventure", "pirates of the caribbean"],
        dailyEligible: true
    },

    {
        id: "film_0047",
        category: "Film",
        question: "Which 1982 film features an alien who wants to \"phone home\"?",
        answers: ["E.T. the Extra-Terrestrial", "Cocoon", "Starman", "The Last Starfighter"],
        correctAnswer: "E.T. the Extra-Terrestrial",
        difficulty: "Easy",
        tags: ["1980s", "science fiction", "et the extra terrestrial"],
        dailyEligible: true
    },

    {
        id: "film_0048",
        category: "Film",
        question: "Who directed the film Terminator 2: Judgment Day?",
        answers: ["James Cameron", "Ridley Scott", "Paul Verhoeven", "John McTiernan"],
        correctAnswer: "James Cameron",
        difficulty: "Medium",
        tags: ["1990s", "directors", "science fiction", "action", "terminator 2 judgment day"],
        dailyEligible: true
    },

    {
        id: "film_0156",
        category: "Film",
        question: "Which British comedy-drama follows a brass band from a Yorkshire mining town?",
        answers: ["Brassed Off", "The Full Monty", "Calendar Girls", "Billy Elliot"],
        correctAnswer: "Brassed Off",
        difficulty: "Medium",
        tags: ["1990s", "british", "comedy drama", "music", "brassed off"],
        dailyEligible: true
    },

    {
        id: "film_0157",
        category: "Film",
        question: "Which actor played King George VI in the film The King’s Speech?",
        answers: ["Colin Firth", "Hugh Grant", "Tom Hiddleston", "Benedict Cumberbatch"],
        correctAnswer: "Colin Firth",
        difficulty: "Medium",
        tags: ["2010s", "british", "actors", "historical", "the kings speech"],
        dailyEligible: true
    },

    {
        id: "film_0158",
        category: "Film",
        question: "Which film features Holly Hunter as Ada McGrath, a mute woman who communicates through music?",
        answers: ["The Piano", "The English Patient", "The Hours", "The Piano Teacher"],
        correctAnswer: "The Piano",
        difficulty: "Medium",
        tags: ["1990s", "drama", "actors", "the piano"],
        dailyEligible: true
    },

    {
        id: "film_0159",
        category: "Film",
        question: "Who directed the film Trainspotting?",
        answers: ["Danny Boyle", "Ken Loach", "Mike Leigh", "Guy Ritchie"],
        correctAnswer: "Danny Boyle",
        difficulty: "Medium",
        tags: ["1990s", "british", "directors", "drama", "trainspotting"],
        dailyEligible: true
    },

    // ======================================================
    // GENERAL KNOWLEDGE
    // ======================================================

    {
        id: "general_0022",
        category: "General Knowledge",
        question: "What is a sentence containing every letter of the alphabet at least once called?",
        answers: ["Pangram", "Palindrome", "Anagram", "Acronym"],
        correctAnswer: "Pangram",
        difficulty: "Medium",
        tags: ["language", "words", "terminology"],
        dailyEligible: true
    },

    {
        id: "general_0023",
        category: "General Knowledge",
        question: "Which precious stone is traditionally associated with a 40th wedding anniversary?",
        answers: ["Ruby", "Diamond", "Sapphire", "Emerald"],
        correctAnswer: "Ruby",
        difficulty: "Medium",
        tags: ["traditions", "anniversaries"],
        dailyEligible: true
    },

    {
        id: "general_0024",
        category: "General Knowledge",
        question: "Which chess piece moves in an L-shape?",
        answers: ["Knight", "Bishop", "Rook", "Queen"],
        correctAnswer: "Knight",
        difficulty: "Easy",
        tags: ["chess", "games"],
        dailyEligible: true
    },

    {
        id: "general_0082",
        category: "General Knowledge",
        question: "What is the hobby of collecting postage stamps called?",
        answers: ["Philately", "Numismatics", "Genealogy", "Calligraphy"],
        correctAnswer: "Philately",
        difficulty: "Medium",
        tags: ["hobbies", "terminology", "collecting"],
        dailyEligible: true
    },

    {
        id: "general_0083",
        category: "General Knowledge",
        question: "In the NATO phonetic alphabet, which word represents the letter Q?",
        answers: ["Quebec", "Queen", "Quick", "Quincy"],
        correctAnswer: "Quebec",
        difficulty: "Medium",
        tags: ["language", "communication", "phonetic alphabet"],
        dailyEligible: true
    },

    {
        id: "general_0084",
        category: "General Knowledge",
        question: "Which board game is played by making words from letter tiles that carry point values?",
        answers: ["Scrabble", "Boggle", "Cluedo", "Monopoly"],
        correctAnswer: "Scrabble",
        difficulty: "Easy",
        tags: ["board games", "language", "words"],
        dailyEligible: true
    },

    // ======================================================
    // HISTORY
    // ======================================================

    {
        id: "history_0021",
        category: "History",
        question: "Which British monarch was on the throne when the Second World War began in 1939?",
        answers: ["George VI", "George V", "Edward VIII", "Elizabeth II"],
        correctAnswer: "George VI",
        difficulty: "Medium",
        tags: ["british", "20th century", "monarchy", "second world war"],
        dailyEligible: true
    },

    {
        id: "history_0022",
        category: "History",
        question: "Which ancient civilisation built the Colosseum?",
        answers: ["Romans", "Greeks", "Egyptians", "Vikings"],
        correctAnswer: "Romans",
        difficulty: "Easy",
        tags: ["ancient rome", "architecture", "landmarks"],
        dailyEligible: true
    },

    {
        id: "history_0023",
        category: "History",
        question: "Who was the first person to walk on the Moon?",
        answers: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
        correctAnswer: "Neil Armstrong",
        difficulty: "Easy",
        tags: ["20th century", "space exploration", "moon landing"],
        dailyEligible: true
    },

    {
        id: "history_0091",
        category: "History",
        question: "Which German physicist discovered X-rays in 1895?",
        answers: ["Wilhelm Röntgen", "Max Planck", "Albert Einstein", "Heinrich Hertz"],
        correctAnswer: "Wilhelm Röntgen",
        difficulty: "Medium",
        tags: ["germany", "19th century", "physics", "history of science"],
        dailyEligible: true
    },

    {
        id: "history_0092",
        category: "History",
        question: "Which Scottish queen was executed at Fotheringhay Castle?",
        answers: ["Mary, Queen of Scots", "Mary I of England", "Anne of Denmark", "Margaret Tudor"],
        correctAnswer: "Mary, Queen of Scots",
        difficulty: "Medium",
        tags: ["scottish", "16th century", "monarchy"],
        dailyEligible: true
    },

    {
        id: "history_0093",
        category: "History",
        question: "Which revolutionary leader fought against French colonial rule in Saint-Domingue and is closely associated with Haitian independence?",
        answers: ["Toussaint Louverture", "Simón Bolívar", "José de San Martín", "Maximilien Robespierre"],
        correctAnswer: "Toussaint Louverture",
        difficulty: "Hard",
        tags: ["caribbean", "haiti", "18th century", "revolutions"],
        dailyEligible: true
    },

    {
        id: "history_0094",
        category: "History",
        question: "Which Dutch artist painted The Night Watch?",
        answers: ["Rembrandt", "Johannes Vermeer", "Frans Hals", "Vincent van Gogh"],
        correctAnswer: "Rembrandt",
        difficulty: "Medium",
        tags: ["netherlands", "17th century", "art history"],
        dailyEligible: true
    },

    {
        id: "history_0095",
        category: "History",
        question: "Which astronomer proposed a Sun-centred model of the Solar System in his landmark 1543 book?",
        answers: ["Nicolaus Copernicus", "Tycho Brahe", "Johannes Kepler", "Galileo Galilei"],
        correctAnswer: "Nicolaus Copernicus",
        difficulty: "Medium",
        tags: ["16th century", "astronomy", "history of science"],
        dailyEligible: true
    },

    // ======================================================
    // GEOGRAPHY
    // ======================================================

    {
        id: "geography_0021",
        category: "Geography",
        question: "What is the capital city of Spain?",
        answers: ["Madrid", "Barcelona", "Seville", "Valencia"],
        correctAnswer: "Madrid",
        difficulty: "Easy",
        tags: ["europe", "capitals", "spain"],
        dailyEligible: true
    },

    {
        id: "geography_0022",
        category: "Geography",
        question: "Which river flows through Rome?",
        answers: ["Tiber", "Po", "Arno", "Adige"],
        correctAnswer: "Tiber",
        difficulty: "Medium",
        tags: ["europe", "italy", "rivers"],
        dailyEligible: true
    },

    {
        id: "geography_0023",
        category: "Geography",
        question: "Which European country has Ljubljana as its capital?",
        answers: ["Slovenia", "Slovakia", "Croatia", "Serbia"],
        correctAnswer: "Slovenia",
        difficulty: "Medium",
        tags: ["europe", "capitals", "slovenia"],
        dailyEligible: true
    },

    {
        id: "geography_0081",
        category: "Geography",
        question: "Which European capital lies where the Sava and Danube rivers meet?",
        answers: ["Belgrade", "Budapest", "Bratislava", "Zagreb"],
        correctAnswer: "Belgrade",
        difficulty: "Medium",
        tags: ["europe", "capitals", "rivers", "serbia"],
        dailyEligible: true
    },

    {
        id: "geography_0082",
        category: "Geography",
        question: "Which Australian state has Hobart as its capital?",
        answers: ["Tasmania", "Victoria", "Queensland", "South Australia"],
        correctAnswer: "Tasmania",
        difficulty: "Medium",
        tags: ["australia", "states", "capitals"],
        dailyEligible: true
    },

    {
        id: "geography_0083",
        category: "Geography",
        question: "In which South American country is Mount Aconcagua?",
        answers: ["Argentina", "Chile", "Peru", "Bolivia"],
        correctAnswer: "Argentina",
        difficulty: "Medium",
        tags: ["south america", "mountains", "argentina"],
        dailyEligible: true
    },

    // ======================================================
    // SCIENCE & NATURE
    // ======================================================

    {
        id: "science_0020",
        category: "Science & Nature",
        question: "Which gas do humans need to breathe in to survive?",
        answers: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
        correctAnswer: "Oxygen",
        difficulty: "Easy",
        tags: ["biology", "human body", "respiration"],
        dailyEligible: true
    },

    {
        id: "science_0021",
        category: "Science & Nature",
        question: "What type of joint connects the upper arm to the shoulder?",
        answers: ["Ball-and-socket joint", "Hinge joint", "Pivot joint", "Fixed joint"],
        correctAnswer: "Ball-and-socket joint",
        difficulty: "Medium",
        tags: ["biology", "human body", "anatomy"],
        dailyEligible: true
    },

    {
        id: "science_0022",
        category: "Science & Nature",
        question: "What force resists the movement of two surfaces sliding against one another?",
        answers: ["Friction", "Gravity", "Magnetism", "Buoyancy"],
        correctAnswer: "Friction",
        difficulty: "Easy",
        tags: ["physics", "forces", "motion"],
        dailyEligible: true
    },

    {
        id: "science_0076",
        category: "Science & Nature",
        question: "Which coloured part of the eye controls the size of the pupil?",
        answers: ["Iris", "Retina", "Cornea", "Lens"],
        correctAnswer: "Iris",
        difficulty: "Easy",
        tags: ["biology", "human body", "vision"],
        dailyEligible: true
    },

    {
        id: "science_0077",
        category: "Science & Nature",
        question: "What type of electrical circuit provides more than one path for current to flow?",
        answers: ["Parallel circuit", "Series circuit", "Open circuit", "Short circuit"],
        correctAnswer: "Parallel circuit",
        difficulty: "Medium",
        tags: ["physics", "electricity", "circuits"],
        dailyEligible: true
    },

    {
        id: "science_0078",
        category: "Science & Nature",
        question: "What is the smallest bone in the human body?",
        answers: ["Stapes", "Femur", "Patella", "Clavicle"],
        correctAnswer: "Stapes",
        difficulty: "Medium",
        tags: ["biology", "human body", "bones"],
        dailyEligible: true
    },

    // ======================================================
    // FOOD & DRINK
    // ======================================================

    {
        id: "food_0014",
        category: "Food & Drink",
        question: "Which type of pastry is traditionally used to make baklava?",
        answers: ["Filo", "Puff", "Shortcrust", "Choux"],
        correctAnswer: "Filo",
        difficulty: "Medium",
        tags: ["pastry", "desserts", "baking"],
        dailyEligible: true
    },

    {
        id: "food_0015",
        category: "Food & Drink",
        question: "Which Italian dish is made with layers of pasta, sauce and typically cheese?",
        answers: ["Lasagne", "Risotto", "Gnocchi", "Focaccia"],
        correctAnswer: "Lasagne",
        difficulty: "Easy",
        tags: ["italian", "pasta", "traditional dishes"],
        dailyEligible: true
    },

    {
        id: "food_0070",
        category: "Food & Drink",
        question: "Which fruit gives crème de cassis liqueur its flavour?",
        answers: ["Blackcurrants", "Cherries", "Raspberries", "Plums"],
        correctAnswer: "Blackcurrants",
        difficulty: "Medium",
        tags: ["french", "fruit", "drinks"],
        dailyEligible: true
    },

    {
        id: "food_0071",
        category: "Food & Drink",
        question: "Which vegetable is mixed with yoghurt to make traditional tzatziki?",
        answers: ["Cucumber", "Aubergine", "Courgette", "Spinach"],
        correctAnswer: "Cucumber",
        difficulty: "Medium",
        tags: ["greek", "dips", "ingredients"],
        dailyEligible: true
    },

    {
        id: "food_0072",
        category: "Food & Drink",
        question: "Which Scottish soup traditionally contains chicken, leeks and prunes?",
        answers: ["Cock-a-leekie", "Cullen skink", "Scotch broth", "Mulligatawny"],
        correctAnswer: "Cock-a-leekie",
        difficulty: "Medium",
        tags: ["scottish", "soups", "traditional dishes"],
        dailyEligible: true
    },

    {
        id: "food_0073",
        category: "Food & Drink",
        question: "Which vegetable is most commonly used to make traditional baechu kimchi?",
        answers: ["Chinese cabbage", "Cauliflower", "Aubergine", "Leek"],
        correctAnswer: "Chinese cabbage",
        difficulty: "Medium",
        tags: ["korean", "fermented foods", "vegetables"],
        dailyEligible: true
    },

    {
        id: "food_0074",
        category: "Food & Drink",
        question: "Which French stew is traditionally made with beef braised in red wine?",
        answers: ["Boeuf bourguignon", "Bouillabaisse", "Cassoulet", "Coq au vin"],
        correctAnswer: "Boeuf bourguignon",
        difficulty: "Medium",
        tags: ["french", "stews", "traditional dishes"],
        dailyEligible: true
    },

    // ======================================================
    // SPORT
    // ======================================================

    {
        id: "sport_0014",
        category: "Sport",
        question: "How many holes are played in a standard round of golf?",
        answers: ["18", "16", "20", "24"],
        correctAnswer: "18",
        difficulty: "Easy",
        tags: ["golf", "rules"],
        dailyEligible: true
    },

    {
        id: "sport_0015",
        category: "Sport",
        question: "In snooker, which coloured ball is worth six points?",
        answers: ["Pink", "Blue", "Brown", "Green"],
        correctAnswer: "Pink",
        difficulty: "Medium",
        tags: ["snooker", "scoring"],
        dailyEligible: true
    },

    {
        id: "sport_0055",
        category: "Sport",
        question: "Which sport awards the Stanley Cup to its championship-winning team?",
        answers: ["Ice hockey", "Basketball", "Baseball", "American football"],
        correctAnswer: "Ice hockey",
        difficulty: "Easy",
        tags: ["ice hockey", "trophies"],
        dailyEligible: true
    },

    {
        id: "sport_0056",
        category: "Sport",
        question: "In tennis scoring, what does love mean?",
        answers: ["Zero", "One point", "An advantage", "A tie"],
        correctAnswer: "Zero",
        difficulty: "Easy",
        tags: ["tennis", "terminology", "scoring"],
        dailyEligible: true
    },

    {
        id: "sport_0057",
        category: "Sport",
        question: "How far is the penalty spot from the goal line in association football?",
        answers: ["12 yards", "10 yards", "15 yards", "18 yards"],
        correctAnswer: "12 yards",
        difficulty: "Medium",
        tags: ["football", "rules", "distances"],
        dailyEligible: true
    },

    // ======================================================
    // LITERATURE
    // ======================================================

    {
        id: "literature_0012",
        category: "Literature",
        question: "Who wrote \"The Hobbit\"?",
        answers: ["J. R. R. Tolkien", "C. S. Lewis", "George Orwell", "H. G. Wells"],
        correctAnswer: "J. R. R. Tolkien",
        difficulty: "Easy",
        tags: ["british", "authors", "fantasy", "j r r tolkien"],
        dailyEligible: true
    },

    {
        id: "literature_0013",
        category: "Literature",
        question: "Which novel by Mary Shelley features Victor Frankenstein?",
        answers: ["Frankenstein", "Dracula", "The Woman in White", "Wuthering Heights"],
        correctAnswer: "Frankenstein",
        difficulty: "Easy",
        tags: ["british", "classic literature", "novels", "mary shelley"],
        dailyEligible: true
    },

    {
        id: "literature_0051",
        category: "Literature",
        question: "Which Daphne du Maurier novel features the estate of Manderley?",
        answers: ["Rebecca", "Jamaica Inn", "My Cousin Rachel", "Frenchman’s Creek"],
        correctAnswer: "Rebecca",
        difficulty: "Medium",
        tags: ["british", "novels", "classic literature", "daphne du maurier"],
        dailyEligible: true
    },

    {
        id: "literature_0052",
        category: "Literature",
        question: "Who wrote the novel Black Beauty?",
        answers: ["Anna Sewell", "Louisa May Alcott", "Beatrix Potter", "Frances Hodgson Burnett"],
        correctAnswer: "Anna Sewell",
        difficulty: "Medium",
        tags: ["british", "classic literature", "authors"],
        dailyEligible: true
    }

];

module.exports = questions;
