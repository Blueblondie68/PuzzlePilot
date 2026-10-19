// quiz_pack6.js
// PuzzlePilot Big Quiz - Mixed Question Pack 6
// Original IDs preserved; corrections, fuller tags and 28 new questions.
// No additional Music or Television questions.

const questions = [

    // ======================================================
    // MUSIC
    // ======================================================

    {
        id: "music_0037",
        category: "Music",
        question: "Which band released the 1979 album \"The Wall\"?",
        answers: ["Pink Floyd", "Genesis", "Yes", "The Who"],
        correctAnswer: "Pink Floyd",
        difficulty: "Easy",
        tags: ["1970s", "british", "bands", "albums", "progressive rock", "pink floyd"],
        dailyEligible: true
    },

    {
        id: "music_0038",
        category: "Music",
        question: "Which singer had a 1964 hit with \"Downtown\"?",
        answers: ["Petula Clark", "Cilla Black", "Sandie Shaw", "Dusty Springfield"],
        correctAnswer: "Petula Clark",
        difficulty: "Medium",
        tags: ["1960s", "british", "singers", "songs", "petula clark"],
        dailyEligible: true
    },

    {
        id: "music_0039",
        category: "Music",
        question: "Which band recorded \"Everybody Wants to Rule the World\"?",
        answers: ["Tears for Fears", "Simple Minds", "Ultravox", "Spandau Ballet"],
        correctAnswer: "Tears for Fears",
        difficulty: "Medium",
        tags: ["1980s", "british", "bands", "songs", "new wave", "tears for fears"],
        dailyEligible: true
    },

    {
        id: "music_0040",
        category: "Music",
        question: "Which singer released the 1997 album \"Come On Over\"?",
        answers: ["Shania Twain", "Celine Dion", "Faith Hill", "LeAnn Rimes"],
        correctAnswer: "Shania Twain",
        difficulty: "Medium",
        tags: ["1990s", "canadian", "singers", "albums", "country", "shania twain"],
        dailyEligible: true
    },

    {
        id: "music_0041",
        category: "Music",
        question: "Which group had hits with \"Stayin' Alive\" and \"Night Fever\"?",
        answers: ["Bee Gees", "Earth, Wind & Fire", "KC and the Sunshine Band", "The Jacksons"],
        correctAnswer: "Bee Gees",
        difficulty: "Easy",
        tags: ["1970s", "british", "groups", "songs", "disco", "bee gees"],
        dailyEligible: true
    },

    {
        id: "music_0042",
        category: "Music",
        question: "Which singer released \"Nothing Compares 2 U\" in 1990?",
        answers: ["Sinéad O'Connor", "Annie Lennox", "Dolores O'Riordan", "Björk"],
        correctAnswer: "Sinéad O'Connor",
        difficulty: "Medium",
        tags: ["1990s", "irish", "singers", "songs", "sinéad o’connor"],
        dailyEligible: true
    },

    {
        id: "music_0043",
        category: "Music",
        question: "Which band featured Debbie Harry as its lead singer?",
        answers: ["Blondie", "The Pretenders", "Heart", "The Bangles"],
        correctAnswer: "Blondie",
        difficulty: "Easy",
        tags: ["1970s", "american", "bands", "new wave", "lead singers", "blondie"],
        dailyEligible: true
    },

    {
        id: "music_0044",
        category: "Music",
        question: "Which British singer released the album \"No Jacket Required\" in 1985?",
        answers: ["Phil Collins", "Peter Gabriel", "Elton John", "George Michael"],
        correctAnswer: "Phil Collins",
        difficulty: "Medium",
        tags: ["1980s", "british", "singers", "albums", "phil collins"],
        dailyEligible: true
    },

    // ======================================================
    // TELEVISION
    // ======================================================

    {
        id: "tv_0037",
        category: "TV",
        question: "In \"Only Fools and Horses\", what is Del Boy's first name?",
        answers: ["Derek", "David", "Douglas", "Dennis"],
        correctAnswer: "Derek",
        difficulty: "Medium",
        tags: ["british", "comedy", "1980s", "only fools and horses"],
        dailyEligible: true
    },

    {
        id: "tv_0038",
        category: "TV",
        question: "Which actress played Fleabag in the television series of the same name?",
        answers: ["Phoebe Waller-Bridge", "Olivia Colman", "Jodie Comer", "Sally Hawkins"],
        correctAnswer: "Phoebe Waller-Bridge",
        difficulty: "Easy",
        tags: ["british", "comedy", "2010s", "actors", "fleabag"],
        dailyEligible: true
    },

    {
        id: "tv_0039",
        category: "TV",
        question: "Which actor played David Addison in the television series \"Moonlighting\"?",
        answers: ["Bruce Willis", "Don Johnson", "Tom Selleck", "Ted Danson"],
        correctAnswer: "Bruce Willis",
        difficulty: "Medium",
        tags: ["american", "comedy", "drama", "1980s", "actors", "moonlighting"],
        dailyEligible: true
    },

    {
        id: "tv_0040",
        category: "TV",
        question: "Which actor played Detective Inspector Jack Frost in \"A Touch of Frost\"?",
        answers: ["David Jason", "John Thaw", "David Suchet", "Martin Shaw"],
        correctAnswer: "David Jason",
        difficulty: "Medium",
        tags: ["british", "crime", "drama", "1990s", "actors", "a touch of frost"],
        dailyEligible: true
    },

    {
        id: "tv_0041",
        category: "TV",
        question: "Which British sitcom featured Gary Strang and Tony Smart sharing a flat?",
        answers: ["Men Behaving Badly", "Bottom", "The Young Ones", "Game On"],
        correctAnswer: "Men Behaving Badly",
        difficulty: "Medium",
        tags: ["british", "comedy", "1990s", "men behaving badly"],
        dailyEligible: true
    },

    {
        id: "tv_0042",
        category: "TV",
        question: "In \"Keeping Up Appearances\", how does Hyacinth Bucket insist her surname is pronounced?",
        answers: ["Bouquet", "Bucket", "Bookay", "Boo-kett"],
        correctAnswer: "Bouquet",
        difficulty: "Easy",
        tags: ["british", "comedy", "1990s", "keeping up appearances"],
        dailyEligible: true
    },

    {
        id: "tv_0043",
        category: "TV",
        question: "Which actor played the title character in the BBC series \"Luther\"?",
        answers: ["Idris Elba", "David Oyelowo", "Adrian Lester", "Chiwetel Ejiofor"],
        correctAnswer: "Idris Elba",
        difficulty: "Easy",
        tags: ["british", "crime", "drama", "2010s", "actors", "luther"],
        dailyEligible: true
    },

    {
        id: "tv_0044",
        category: "TV",
        question: "Which ITV soap features the Woolpack pub in a fictional Yorkshire village?",
        answers: ["Emmerdale", "EastEnders", "Coronation Street", "Hollyoaks"],
        correctAnswer: "Emmerdale",
        difficulty: "Easy",
        tags: ["british", "soaps", "emmerdale"],
        dailyEligible: true
    },

    // ======================================================
    // FILM
    // ======================================================

    {
        id: "film_0031",
        category: "Film",
        question: "Which actress played Clarice Starling in \"The Silence of the Lambs\"?",
        answers: ["Jodie Foster", "Sigourney Weaver", "Michelle Pfeiffer", "Susan Sarandon"],
        correctAnswer: "Jodie Foster",
        difficulty: "Medium",
        tags: ["1990s", "thriller", "actors", "the silence of the lambs"],
        dailyEligible: true
    },

    {
        id: "film_0032",
        category: "Film",
        question: "Which 1984 film features a supernatural villain called Gozer?",
        answers: ["Ghostbusters", "Gremlins", "Beetlejuice", "Poltergeist"],
        correctAnswer: "Ghostbusters",
        difficulty: "Medium",
        tags: ["1980s", "comedy", "fantasy", "ghostbusters"],
        dailyEligible: true
    },

    {
        id: "film_0033",
        category: "Film",
        question: "Who directed the 1994 film \"Pulp Fiction\"?",
        answers: ["Quentin Tarantino", "Martin Scorsese", "David Fincher", "Oliver Stone"],
        correctAnswer: "Quentin Tarantino",
        difficulty: "Easy",
        tags: ["1990s", "directors", "crime", "pulp fiction"],
        dailyEligible: true
    },

    {
        id: "film_0034",
        category: "Film",
        question: "Which actress played the title character in the 2001 film \"Lara Croft: Tomb Raider\"?",
        answers: ["Angelina Jolie", "Charlize Theron", "Milla Jovovich", "Kate Beckinsale"],
        correctAnswer: "Angelina Jolie",
        difficulty: "Medium",
        tags: ["2000s", "actors", "action", "lara croft tomb raider"],
        dailyEligible: true
    },

    {
        id: "film_0035",
        category: "Film",
        question: "Which film features the characters Danny Zuko and Sandy Olsson?",
        answers: ["Grease", "Footloose", "Dirty Dancing", "Saturday Night Fever"],
        correctAnswer: "Grease",
        difficulty: "Easy",
        tags: ["1970s", "musicals", "characters", "grease"],
        dailyEligible: true
    },

    {
        id: "film_0036",
        category: "Film",
        question: "Which actor played the villain Hans Gruber in \"Die Hard\"?",
        answers: ["Alan Rickman", "Jeremy Irons", "Gary Oldman", "Timothy Dalton"],
        correctAnswer: "Alan Rickman",
        difficulty: "Medium",
        tags: ["1980s", "actors", "action", "die hard"],
        dailyEligible: true
    },

    {
        id: "film_0148",
        category: "Film",
        question: "Which film tells the story of runners Eric Liddell and Harold Abrahams?",
        answers: ["Chariots of Fire", "The Loneliness of the Long Distance Runner", "Bend It Like Beckham", "The Games"],
        correctAnswer: "Chariots of Fire",
        difficulty: "Medium",
        tags: ["1980s", "british", "drama", "sport", "chariots of fire"],
        dailyEligible: true
    },

    {
        id: "film_0149",
        category: "Film",
        question: "Who directed Bend It Like Beckham?",
        answers: ["Gurinder Chadha", "Mira Nair", "Danny Boyle", "Richard Curtis"],
        correctAnswer: "Gurinder Chadha",
        difficulty: "Medium",
        tags: ["2000s", "british", "directors", "comedy drama", "bend it like beckham"],
        dailyEligible: true
    },

    {
        id: "film_0150",
        category: "Film",
        question: "In The Princess Bride, what name does Westley use while disguised as a masked pirate?",
        answers: ["The Dread Pirate Roberts", "Captain Hook", "Long John Silver", "The Scarlet Pimpernel"],
        correctAnswer: "The Dread Pirate Roberts",
        difficulty: "Medium",
        tags: ["1980s", "fantasy", "adventure", "the princess bride"],
        dailyEligible: true
    },

    {
        id: "film_0151",
        category: "Film",
        question: "Which comedy film stars George Clooney as escaped convict Ulysses Everett McGill?",
        answers: ["O Brother, Where Art Thou?", "The Ladykillers", "Burn After Reading", "The Men Who Stare at Goats"],
        correctAnswer: "O Brother, Where Art Thou?",
        difficulty: "Medium",
        tags: ["2000s", "comedy", "actors", "o brother where art thou"],
        dailyEligible: true
    },

    // ======================================================
    // GENERAL KNOWLEDGE
    // ======================================================

    {
        id: "general_0016",
        category: "General Knowledge",
        question: "How many letters are there in the Greek alphabet?",
        answers: ["24", "26", "22", "20"],
        correctAnswer: "24",
        difficulty: "Medium",
        tags: ["alphabet", "language", "numbers"],
        dailyEligible: true
    },

    {
        id: "general_0017",
        category: "General Knowledge",
        question: "What is the name of the imaginary line dividing Earth into the Northern and Southern Hemispheres?",
        answers: ["Equator", "Prime Meridian", "Tropic of Cancer", "International Date Line"],
        correctAnswer: "Equator",
        difficulty: "Easy",
        tags: ["geography", "earth"],
        dailyEligible: true
    },

    {
        id: "general_0018",
        category: "General Knowledge",
        question: "How many dots are there in total on a standard six-sided die?",
        answers: ["21", "18", "24", "20"],
        correctAnswer: "21",
        difficulty: "Medium",
        tags: ["games", "dice", "numbers"],
        dailyEligible: true
    },

    {
        id: "general_0076",
        category: "General Knowledge",
        question: "Which star sign is represented by a pair of weighing scales?",
        answers: ["Libra", "Virgo", "Pisces", "Gemini"],
        correctAnswer: "Libra",
        difficulty: "Easy",
        tags: ["astrology", "symbols"],
        dailyEligible: true
    },

    {
        id: "general_0077",
        category: "General Knowledge",
        question: "What is the small plastic or metal tip at the end of a shoelace called?",
        answers: ["Aglet", "Eyelet", "Ferrule", "Rivet"],
        correctAnswer: "Aglet",
        difficulty: "Medium",
        tags: ["everyday objects", "terminology"],
        dailyEligible: true
    },

    {
        id: "general_0078",
        category: "General Knowledge",
        question: "How many lines are traditionally found in a sonnet?",
        answers: ["14", "12", "16", "10"],
        correctAnswer: "14",
        difficulty: "Medium",
        tags: ["language", "poetry", "numbers"],
        dailyEligible: true
    },

    // ======================================================
    // HISTORY
    // ======================================================

    {
        id: "history_0015",
        category: "History",
        question: "Which English king was known as Richard the Lionheart?",
        answers: ["Richard I", "Richard II", "Richard III", "Henry II"],
        correctAnswer: "Richard I",
        difficulty: "Easy",
        tags: ["british", "medieval", "monarchy"],
        dailyEligible: true
    },

    {
        id: "history_0016",
        category: "History",
        question: "Which explorer led the expedition that first reached the South Pole in 1911?",
        answers: ["Roald Amundsen", "Robert Falcon Scott", "Ernest Shackleton", "Edmund Hillary"],
        correctAnswer: "Roald Amundsen",
        difficulty: "Medium",
        tags: ["20th century", "exploration", "antarctica"],
        dailyEligible: true
    },

    {
        id: "history_0017",
        category: "History",
        question: "Which ancient civilisation used a writing system known as hieroglyphics?",
        answers: ["Ancient Egyptians", "Vikings", "Spartans", "Phoenicians"],
        correctAnswer: "Ancient Egyptians",
        difficulty: "Easy",
        tags: ["ancient egypt", "writing", "ancient history"],
        dailyEligible: true
    },

    {
        id: "history_0081",
        category: "History",
        question: "Which British monarch abdicated the throne in 1936?",
        answers: ["Edward VIII", "George V", "George VI", "Edward VII"],
        correctAnswer: "Edward VIII",
        difficulty: "Medium",
        tags: ["british", "20th century", "monarchy"],
        dailyEligible: true
    },

    {
        id: "history_0082",
        category: "History",
        question: "Which explorer completed the first circumnavigation of the globe after Ferdinand Magellan died?",
        answers: ["Juan Sebastián Elcano", "Vasco da Gama", "Francis Drake", "Amerigo Vespucci"],
        correctAnswer: "Juan Sebastián Elcano",
        difficulty: "Hard",
        tags: ["16th century", "exploration", "world history"],
        dailyEligible: true
    },

    {
        id: "history_0083",
        category: "History",
        question: "Which British campaigner played a leading role in securing the abolition of the slave trade in 1807?",
        answers: ["William Wilberforce", "John Bright", "Robert Peel", "William Pitt the Younger"],
        correctAnswer: "William Wilberforce",
        difficulty: "Medium",
        tags: ["british", "19th century", "abolitionism"],
        dailyEligible: true
    },

    {
        id: "history_0084",
        category: "History",
        question: "Who became the first Labour Prime Minister of the United Kingdom?",
        answers: ["Ramsay MacDonald", "Clement Attlee", "Harold Wilson", "Arthur Henderson"],
        correctAnswer: "Ramsay MacDonald",
        difficulty: "Medium",
        tags: ["british", "20th century", "politics", "prime ministers"],
        dailyEligible: true
    },

    {
        id: "history_0085",
        category: "History",
        question: "Which ancient civilisation built the city of Persepolis?",
        answers: ["Persians", "Romans", "Minoans", "Phoenicians"],
        correctAnswer: "Persians",
        difficulty: "Medium",
        tags: ["ancient history", "persia", "archaeology"],
        dailyEligible: true
    },

    // ======================================================
    // GEOGRAPHY
    // ======================================================

    {
        id: "geography_0015",
        category: "Geography",
        question: "Which European capital stands on the River Liffey?",
        answers: ["Dublin", "Vienna", "Prague", "Budapest"],
        correctAnswer: "Dublin",
        difficulty: "Medium",
        tags: ["europe", "capitals", "rivers", "ireland"],
        dailyEligible: true
    },

    {
        id: "geography_0016",
        category: "Geography",
        question: "Which is the largest country in South America by area?",
        answers: ["Brazil", "Argentina", "Peru", "Colombia"],
        correctAnswer: "Brazil",
        difficulty: "Easy",
        tags: ["south america", "countries"],
        dailyEligible: true
    },

    {
        id: "geography_0017",
        category: "Geography",
        question: "Mount Fuji is located on which Japanese island?",
        answers: ["Honshu", "Hokkaido", "Kyushu", "Shikoku"],
        correctAnswer: "Honshu",
        difficulty: "Medium",
        tags: ["asia", "japan", "mountains", "islands"],
        dailyEligible: true
    },

    {
        id: "geography_0075",
        category: "Geography",
        question: "Which is the largest of the Canary Islands?",
        answers: ["Tenerife", "Gran Canaria", "Lanzarote", "Fuerteventura"],
        correctAnswer: "Tenerife",
        difficulty: "Medium",
        tags: ["europe", "spain", "islands"],
        dailyEligible: true
    },

    {
        id: "geography_0076",
        category: "Geography",
        question: "What is the capital city of the US state of Alaska?",
        answers: ["Juneau", "Anchorage", "Fairbanks", "Sitka"],
        correctAnswer: "Juneau",
        difficulty: "Medium",
        tags: ["north america", "capitals", "american"],
        dailyEligible: true
    },

    {
        id: "geography_0077",
        category: "Geography",
        question: "What is the capital city of Malta?",
        answers: ["Valletta", "Mdina", "Sliema", "Victoria"],
        correctAnswer: "Valletta",
        difficulty: "Medium",
        tags: ["europe", "capitals", "malta"],
        dailyEligible: true
    },

    // ======================================================
    // SCIENCE & NATURE
    // ======================================================

    {
        id: "science_0014",
        category: "Science & Nature",
        question: "What is the chemical symbol for potassium?",
        answers: ["K", "P", "Po", "Pt"],
        correctAnswer: "K",
        difficulty: "Medium",
        tags: ["chemistry", "elements", "symbols"],
        dailyEligible: true
    },

    {
        id: "science_0015",
        category: "Science & Nature",
        question: "Which part of the ear contains the three tiny bones known as the hammer, anvil and stirrup?",
        answers: ["Middle ear", "Outer ear", "Inner ear", "Ear lobe"],
        correctAnswer: "Middle ear",
        difficulty: "Easy",
        tags: ["biology", "human body", "hearing"],
        dailyEligible: true
    },

    {
        id: "science_0016",
        category: "Science & Nature",
        question: "Which blood type is commonly described as the universal donor for red blood cells?",
        answers: ["O negative", "AB positive", "A positive", "B negative"],
        correctAnswer: "O negative",
        difficulty: "Medium",
        tags: ["biology", "human body", "blood"],
        dailyEligible: true
    },

    {
        id: "science_0070",
        category: "Science & Nature",
        question: "Which layer of the Earth lies directly beneath the crust?",
        answers: ["Mantle", "Outer core", "Inner core", "Atmosphere"],
        correctAnswer: "Mantle",
        difficulty: "Medium",
        tags: ["geology", "earth", "structure"],
        dailyEligible: true
    },

    {
        id: "science_0071",
        category: "Science & Nature",
        question: "Which element makes up most of the Sun by mass?",
        answers: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
        correctAnswer: "Hydrogen",
        difficulty: "Medium",
        tags: ["astronomy", "elements", "stars"],
        dailyEligible: true
    },

    {
        id: "science_0072",
        category: "Science & Nature",
        question: "Which part of the brain helps coordinate movement and balance?",
        answers: ["Cerebellum", "Cerebrum", "Medulla", "Hypothalamus"],
        correctAnswer: "Cerebellum",
        difficulty: "Medium",
        tags: ["biology", "human body", "brain"],
        dailyEligible: true
    },

    // ======================================================
    // FOOD & DRINK
    // ======================================================

    {
        id: "food_0010",
        category: "Food & Drink",
        question: "Which fruit is dried to produce sultanas?",
        answers: ["Grapes", "Plums", "Apricots", "Cherries"],
        correctAnswer: "Grapes",
        difficulty: "Easy",
        tags: ["fruit", "dried fruit", "ingredients"],
        dailyEligible: true
    },

    {
        id: "food_0011",
        category: "Food & Drink",
        question: "Which cheese is traditionally used in a Greek salad?",
        answers: ["Feta", "Brie", "Gouda", "Stilton"],
        correctAnswer: "Feta",
        difficulty: "Easy",
        tags: ["greek", "cheese", "salads"],
        dailyEligible: true
    },

    {
        id: "food_0060",
        category: "Food & Drink",
        question: "Which herb gives béarnaise sauce its distinctive flavour?",
        answers: ["Tarragon", "Basil", "Thyme", "Sage"],
        correctAnswer: "Tarragon",
        difficulty: "Medium",
        tags: ["french", "sauces", "herbs"],
        dailyEligible: true
    },

    {
        id: "food_0061",
        category: "Food & Drink",
        question: "Which North African dish is made from small steamed granules of semolina?",
        answers: ["Couscous", "Bulgur wheat", "Polenta", "Risotto"],
        correctAnswer: "Couscous",
        difficulty: "Medium",
        tags: ["north african", "grains", "traditional dishes"],
        dailyEligible: true
    },

    {
        id: "food_0062",
        category: "Food & Drink",
        question: "What is the name of the Korean rice dish topped with vegetables and often an egg?",
        answers: ["Bibimbap", "Kimchi", "Japchae", "Tteokbokki"],
        correctAnswer: "Bibimbap",
        difficulty: "Medium",
        tags: ["korean", "rice", "traditional dishes"],
        dailyEligible: true
    },

    {
        id: "food_0063",
        category: "Food & Drink",
        question: "Which British pudding is made by rolling suet pastry around a jam filling?",
        answers: ["Jam roly-poly", "Spotted dick", "Treacle tart", "Eton mess"],
        correctAnswer: "Jam roly-poly",
        difficulty: "Medium",
        tags: ["british", "desserts", "traditional dishes"],
        dailyEligible: true
    },

    {
        id: "food_0064",
        category: "Food & Drink",
        question: "What is the cooking method called when food is sealed in a bag and heated in precisely controlled water?",
        answers: ["Sous vide", "Bain-marie", "Blanching", "Poaching"],
        correctAnswer: "Sous vide",
        difficulty: "Medium",
        tags: ["french", "cooking methods", "terminology"],
        dailyEligible: true
    },

    // ======================================================
    // SPORT
    // ======================================================

    {
        id: "sport_0010",
        category: "Sport",
        question: "How many points is a conversion worth in rugby union?",
        answers: ["2", "3", "5", "1"],
        correctAnswer: "2",
        difficulty: "Easy",
        tags: ["rugby union", "rules", "scoring"],
        dailyEligible: true
    },

    {
        id: "sport_0011",
        category: "Sport",
        question: "Which country won the FIFA World Cup in 1966?",
        answers: ["England", "West Germany", "Brazil", "Italy"],
        correctAnswer: "England",
        difficulty: "Easy",
        tags: ["football", "world cup", "1960s"],
        dailyEligible: true
    },

    {
        id: "sport_0049",
        category: "Sport",
        question: "In which martial art can a full point be awarded for an ippon?",
        answers: ["Judo", "Fencing", "Boxing", "Taekwondo"],
        correctAnswer: "Judo",
        difficulty: "Medium",
        tags: ["martial arts", "judo", "scoring"],
        dailyEligible: true
    },

    {
        id: "sport_0050",
        category: "Sport",
        question: "Which horse won the Grand National three times during the 1970s?",
        answers: ["Red Rum", "Desert Orchid", "Arkle", "Shergar"],
        correctAnswer: "Red Rum",
        difficulty: "Medium",
        tags: ["horse racing", "british", "1970s"],
        dailyEligible: true
    },

    {
        id: "sport_0051",
        category: "Sport",
        question: "Which sport features an apparatus called the pommel horse?",
        answers: ["Gymnastics", "Equestrian sport", "Athletics", "Fencing"],
        correctAnswer: "Gymnastics",
        difficulty: "Medium",
        tags: ["gymnastics", "olympics", "equipment"],
        dailyEligible: true
    },

    // ======================================================
    // LITERATURE
    // ======================================================

    {
        id: "literature_0008",
        category: "Literature",
        question: "Who wrote the novel The Woman in White?",
        answers: ["Wilkie Collins", "Charles Dickens", "Thomas Hardy", "Anthony Trollope"],
        correctAnswer: "Wilkie Collins",
        difficulty: "Easy",
        tags: ["british", "classic literature", "authors", "wilkie collins"],
        dailyEligible: true
    },

    {
        id: "literature_0009",
        category: "Literature",
        question: "Which novel by George Orwell features the character Winston Smith?",
        answers: ["Nineteen Eighty-Four", "Animal Farm", "Keep the Aspidistra Flying", "Coming Up for Air"],
        correctAnswer: "Nineteen Eighty-Four",
        difficulty: "Medium",
        tags: ["british", "novels", "dystopian", "george orwell"],
        dailyEligible: true
    },

    {
        id: "literature_0047",
        category: "Literature",
        question: "Which Scottish author created the fictional detective Inspector Rebus?",
        answers: ["Ian Rankin", "Val McDermid", "Irvine Welsh", "Alexander McCall Smith"],
        correctAnswer: "Ian Rankin",
        difficulty: "Medium",
        tags: ["scottish", "crime fiction", "authors"],
        dailyEligible: true
    },

    {
        id: "literature_0048",
        category: "Literature",
        question: "Who wrote the novel Anne of Green Gables?",
        answers: ["L. M. Montgomery", "Louisa May Alcott", "Frances Hodgson Burnett", "Lucy Boston"],
        correctAnswer: "L. M. Montgomery",
        difficulty: "Medium",
        tags: ["canadian", "classic literature", "authors"],
        dailyEligible: true
    }

];

module.exports = questions;
