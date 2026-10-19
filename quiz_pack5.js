// quiz_pack5.js
// PuzzlePilot Big Quiz - Mixed Question Pack 5
// Original IDs preserved; corrections, fuller tags and 28 new questions.
// No additional Music or Television questions.

const questions = [

    // ======================================================
    // MUSIC
    // ======================================================

    {
        id: "music_0029",
        category: "Music",
        question: "Which band released the 1983 album \"Synchronicity\"?",
        answers: ["The Police", "Duran Duran", "Simple Minds", "Tears for Fears"],
        correctAnswer: "The Police",
        difficulty: "Medium",
        tags: ["1980s", "british", "bands", "albums", "rock", "the police"],
        dailyEligible: true
    },

    {
        id: "music_0030",
        category: "Music",
        question: "Which singer had a hit with \"Son of a Preacher Man\" in the 1960s?",
        answers: ["Dusty Springfield", "Sandie Shaw", "Cilla Black", "Petula Clark"],
        correctAnswer: "Dusty Springfield",
        difficulty: "Medium",
        tags: ["1960s", "british", "singers", "songs", "dusty springfield"],
        dailyEligible: true
    },

    {
        id: "music_0031",
        category: "Music",
        question: "Which band released \"Don't Look Back in Anger\"?",
        answers: ["Oasis", "Blur", "Pulp", "The Verve"],
        correctAnswer: "Oasis",
        difficulty: "Easy",
        tags: ["1990s", "british", "bands", "songs", "britpop", "oasis"],
        dailyEligible: true
    },

    {
        id: "music_0032",
        category: "Music",
        question: "Who performed the theme song for the film 9 to 5?",
        answers: ["Dolly Parton", "Cher", "Diana Ross", "Barbra Streisand"],
        correctAnswer: "Dolly Parton",
        difficulty: "Easy",
        tags: ["1980s", "american", "singers", "songs", "country", "dolly parton"],
        dailyEligible: true
    },

    {
        id: "music_0033",
        category: "Music",
        question: "Which band featured Robert Plant as lead singer?",
        answers: ["Led Zeppelin", "Deep Purple", "Black Sabbath", "The Who"],
        correctAnswer: "Led Zeppelin",
        difficulty: "Medium",
        tags: ["1970s", "british", "bands", "rock", "lead singers", "led zeppelin"],
        dailyEligible: true
    },

    {
        id: "music_0034",
        category: "Music",
        question: "Which singer released the album \"Jagged Little Pill\"?",
        answers: ["Alanis Morissette", "Sheryl Crow", "Natalie Imbruglia", "Suzanne Vega"],
        correctAnswer: "Alanis Morissette",
        difficulty: "Medium",
        tags: ["1990s", "canadian", "singers", "albums", "alanis morissette"],
        dailyEligible: true
    },

    {
        id: "music_0035",
        category: "Music",
        question: "Which group had a 1978 hit with \"Rasputin\"?",
        answers: ["Boney M.", "ABBA", "Baccara", "Chic"],
        correctAnswer: "Boney M.",
        difficulty: "Medium",
        tags: ["1970s", "disco", "groups", "songs", "boney m."],
        dailyEligible: true
    },

    {
        id: "music_0036",
        category: "Music",
        question: "Which British duo released the 1982 single \"Only You\"?",
        answers: ["Yazoo", "Eurythmics", "Erasure", "Pet Shop Boys"],
        correctAnswer: "Yazoo",
        difficulty: "Medium",
        tags: ["1980s", "british", "duos", "songs", "synth-pop", "yazoo"],
        dailyEligible: true
    },

    // ======================================================
    // TELEVISION
    // ======================================================

    {
        id: "tv_0029",
        category: "TV",
        question: "In \"Blackadder Goes Forth\", what military rank does Blackadder hold?",
        answers: ["Captain", "Major", "Lieutenant", "Colonel"],
        correctAnswer: "Captain",
        difficulty: "Medium",
        tags: ["british", "comedy", "1980s", "blackadder"],
        dailyEligible: true
    },

    {
        id: "tv_0030",
        category: "TV",
        question: "Which actress played Catherine Cawood in \"Happy Valley\"?",
        answers: ["Sarah Lancashire", "Suranne Jones", "Nicola Walker", "Keeley Hawes"],
        correctAnswer: "Sarah Lancashire",
        difficulty: "Medium",
        tags: ["british", "drama", "crime", "actors", "2010s", "happy valley"],
        dailyEligible: true
    },

    {
        id: "tv_0031",
        category: "TV",
        question: "What is the surname of Frasier and Niles in \"Frasier\"?",
        answers: ["Crane", "Banks", "Becker", "Palmer"],
        correctAnswer: "Crane",
        difficulty: "Easy",
        tags: ["american", "comedy", "1990s", "frasier"],
        dailyEligible: true
    },

    {
        id: "tv_0032",
        category: "TV",
        question: "Which comedy series featured the characters Richie and Eddie?",
        answers: ["Bottom", "The Young Ones", "Men Behaving Badly", "Red Dwarf"],
        correctAnswer: "Bottom",
        difficulty: "Medium",
        tags: ["british", "comedy", "1990s", "bottom"],
        dailyEligible: true
    },

    {
        id: "tv_0033",
        category: "TV",
        question: "Which actor played the shopkeeper Arkwright in Open All Hours?",
        answers: ["Ronnie Barker", "Ronnie Corbett", "David Jason", "Leonard Rossiter"],
        correctAnswer: "Ronnie Barker",
        difficulty: "Medium",
        tags: ["british", "comedy", "1970s", "1980s", "actors", "open all hours"],
        dailyEligible: true
    },

    {
        id: "tv_0034",
        category: "TV",
        question: "Which actor played Edmund Blackadder?",
        answers: ["Rowan Atkinson", "Hugh Laurie", "Stephen Fry", "Rik Mayall"],
        correctAnswer: "Rowan Atkinson",
        difficulty: "Easy",
        tags: ["british", "comedy", "actors", "blackadder"],
        dailyEligible: true
    },

    {
        id: "tv_0035",
        category: "TV",
        question: "In \"The Royle Family\", what is the first name of Jim Royle's wife?",
        answers: ["Barbara", "Denise", "Cheryl", "Norma"],
        correctAnswer: "Barbara",
        difficulty: "Medium",
        tags: ["british", "comedy", "1990s", "the royle family"],
        dailyEligible: true
    },

    {
        id: "tv_0036",
        category: "TV",
        question: "Which US television drama is set in the fictional advertising agency Sterling Cooper?",
        answers: ["Mad Men", "Suits", "The West Wing", "Succession"],
        correctAnswer: "Mad Men",
        difficulty: "Medium",
        tags: ["american", "drama", "2000s", "mad men"],
        dailyEligible: true
    },

    // ======================================================
    // FILM
    // ======================================================

    {
        id: "film_0025",
        category: "Film",
        question: "Which actor played the title character in the 1987 film \"Withnail and I\"?",
        answers: ["Richard E. Grant", "Paul McGann", "Gary Oldman", "Tim Roth"],
        correctAnswer: "Richard E. Grant",
        difficulty: "Medium",
        tags: ["1980s", "british", "actors", "comedy drama", "withnail and i"],
        dailyEligible: true
    },

    {
        id: "film_0026",
        category: "Film",
        question: "Which 1994 film features the characters Vincent Vega and Jules Winnfield?",
        answers: ["Pulp Fiction", "Reservoir Dogs", "Heat", "True Romance"],
        correctAnswer: "Pulp Fiction",
        difficulty: "Medium",
        tags: ["1990s", "crime", "characters", "pulp fiction"],
        dailyEligible: true
    },

    {
        id: "film_0027",
        category: "Film",
        question: "Which actress played Hermione Granger in the Harry Potter films?",
        answers: ["Emma Watson", "Keira Knightley", "Emma Stone", "Carey Mulligan"],
        correctAnswer: "Emma Watson",
        difficulty: "Easy",
        tags: ["2000s", "actors", "fantasy", "harry potter"],
        dailyEligible: true
    },

    {
        id: "film_0028",
        category: "Film",
        question: "Which film won the first Academy Award for Best Animated Feature?",
        answers: ["Shrek", "Toy Story", "Finding Nemo", "Monsters, Inc."],
        correctAnswer: "Shrek",
        difficulty: "Medium",
        tags: ["2000s", "animation", "awards", "shrek"],
        dailyEligible: true
    },

    {
        id: "film_0029",
        category: "Film",
        question: "Which actor played Dr Malcolm Crowe in \"The Sixth Sense\"?",
        answers: ["Bruce Willis", "Kevin Spacey", "Tom Hanks", "Nicolas Cage"],
        correctAnswer: "Bruce Willis",
        difficulty: "Medium",
        tags: ["1990s", "actors", "thriller", "the sixth sense"],
        dailyEligible: true
    },

    {
        id: "film_0030",
        category: "Film",
        question: "Which 1986 film features the fighter pilot Maverick?",
        answers: ["Top Gun", "Iron Eagle", "Platoon", "Days of Thunder"],
        correctAnswer: "Top Gun",
        difficulty: "Easy",
        tags: ["1980s", "characters", "action", "top gun"],
        dailyEligible: true
    },

    {
        id: "film_0144",
        category: "Film",
        question: "Which film features Dustin Hoffman as Raymond Babbitt and Tom Cruise as his brother Charlie?",
        answers: ["Rain Man", "The Color of Money", "The Firm", "A Few Good Men"],
        correctAnswer: "Rain Man",
        difficulty: "Medium",
        tags: ["1980s", "drama", "actors", "rain man"],
        dailyEligible: true
    },

    {
        id: "film_0145",
        category: "Film",
        question: "Who directed the film The Grand Budapest Hotel?",
        answers: ["Wes Anderson", "Richard Linklater", "David Fincher", "Sofia Coppola"],
        correctAnswer: "Wes Anderson",
        difficulty: "Medium",
        tags: ["2010s", "directors", "comedy drama", "the grand budapest hotel"],
        dailyEligible: true
    },

    {
        id: "film_0146",
        category: "Film",
        question: "Which actor portrayed Freddie Mercury in the film Bohemian Rhapsody?",
        answers: ["Rami Malek", "Taron Egerton", "Sacha Baron Cohen", "Ben Whishaw"],
        correctAnswer: "Rami Malek",
        difficulty: "Medium",
        tags: ["2010s", "actors", "biographical film", "bohemian rhapsody"],
        dailyEligible: true
    },

    {
        id: "film_0147",
        category: "Film",
        question: "Which actress played the welder and dancer Alex Owens in Flashdance?",
        answers: ["Jennifer Beals", "Lori Singer", "Debra Winger", "Jennifer Grey"],
        correctAnswer: "Jennifer Beals",
        difficulty: "Medium",
        tags: ["1980s", "actors", "romance", "flashdance"],
        dailyEligible: true
    },

    // ======================================================
    // GENERAL KNOWLEDGE
    // ======================================================

    {
        id: "general_0013",
        category: "General Knowledge",
        question: "On a standard six-sided die, what do the numbers on opposite faces always add up to?",
        answers: ["7", "6", "8", "9"],
        correctAnswer: "7",
        difficulty: "Easy",
        tags: ["games", "numbers", "dice"],
        dailyEligible: true
    },

    {
        id: "general_0014",
        category: "General Knowledge",
        question: "What name is given to a word that reads the same forwards and backwards?",
        answers: ["Palindrome", "Anagram", "Acronym", "Homonym"],
        correctAnswer: "Palindrome",
        difficulty: "Medium",
        tags: ["words", "language"],
        dailyEligible: true
    },

    {
        id: "general_0015",
        category: "General Knowledge",
        question: "How many squares are there on a standard chessboard?",
        answers: ["64", "56", "72", "81"],
        correctAnswer: "64",
        difficulty: "Easy",
        tags: ["games", "chess", "numbers"],
        dailyEligible: true
    },

    {
        id: "general_0073",
        category: "General Knowledge",
        question: "What is the geographical term for the place where two rivers meet?",
        answers: ["Confluence", "Estuary", "Watershed", "Tributary"],
        correctAnswer: "Confluence",
        difficulty: "Medium",
        tags: ["geography", "terminology", "rivers"],
        dailyEligible: true
    },

    {
        id: "general_0074",
        category: "General Knowledge",
        question: "What is a person who studies or collects coins and currency called?",
        answers: ["Numismatist", "Philatelist", "Genealogist", "Cartographer"],
        correctAnswer: "Numismatist",
        difficulty: "Medium",
        tags: ["hobbies", "money", "terminology"],
        dailyEligible: true
    },

    {
        id: "general_0075",
        category: "General Knowledge",
        question: "What is a word called when it sounds like another word but has a different meaning, such as sea and see?",
        answers: ["Homophone", "Palindrome", "Anagram", "Acronym"],
        correctAnswer: "Homophone",
        difficulty: "Medium",
        tags: ["language", "words", "terminology"],
        dailyEligible: true
    },

    // ======================================================
    // HISTORY
    // ======================================================

    {
        id: "history_0012",
        category: "History",
        question: "In which year was the Battle of Trafalgar fought?",
        answers: ["1805", "1815", "1798", "1825"],
        correctAnswer: "1805",
        difficulty: "Medium",
        tags: ["british", "19th century", "naval history", "battles"],
        dailyEligible: true
    },

    {
        id: "history_0013",
        category: "History",
        question: "Which Roman emperor gave his name to the wall built across northern Britain?",
        answers: ["Hadrian", "Claudius", "Nero", "Augustus"],
        correctAnswer: "Hadrian",
        difficulty: "Easy",
        tags: ["ancient rome", "british", "emperors"],
        dailyEligible: true
    },

    {
        id: "history_0014",
        category: "History",
        question: "Who became President of South Africa in 1994 after the country's first fully democratic election?",
        answers: ["Nelson Mandela", "F. W. de Klerk", "Thabo Mbeki", "Desmond Tutu"],
        correctAnswer: "Nelson Mandela",
        difficulty: "Easy",
        tags: ["south africa", "1990s", "politics", "world history"],
        dailyEligible: true
    },

    {
        id: "history_0076",
        category: "History",
        question: "Which leader of the Peasants’ Revolt was killed after meeting King Richard II in 1381?",
        answers: ["Wat Tyler", "Jack Cade", "Robert Kett", "Simon de Montfort"],
        correctAnswer: "Wat Tyler",
        difficulty: "Medium",
        tags: ["british", "14th century", "rebellions", "medieval"],
        dailyEligible: true
    },

    {
        id: "history_0077",
        category: "History",
        question: "Which African country was ruled by Emperor Haile Selassie?",
        answers: ["Ethiopia", "Kenya", "Ghana", "Sudan"],
        correctAnswer: "Ethiopia",
        difficulty: "Medium",
        tags: ["africa", "20th century", "monarchy"],
        dailyEligible: true
    },

    {
        id: "history_0078",
        category: "History",
        question: "On which ship did Charles Darwin make his famous voyage of scientific discovery?",
        answers: ["HMS Beagle", "HMS Endeavour", "HMS Victory", "HMS Challenger"],
        correctAnswer: "HMS Beagle",
        difficulty: "Medium",
        tags: ["british", "19th century", "exploration", "history of science"],
        dailyEligible: true
    },

    {
        id: "history_0079",
        category: "History",
        question: "Which monarch reigned when England and Scotland united to form the Kingdom of Great Britain in 1707?",
        answers: ["Queen Anne", "Queen Mary II", "Queen Victoria", "Queen Elizabeth I"],
        correctAnswer: "Queen Anne",
        difficulty: "Medium",
        tags: ["british", "18th century", "monarchy", "acts of union"],
        dailyEligible: true
    },

    {
        id: "history_0080",
        category: "History",
        question: "Which British evangelist founded the organisation that became the Salvation Army, alongside his wife Catherine?",
        answers: ["William Booth", "John Wesley", "George Müller", "William Wilberforce"],
        correctAnswer: "William Booth",
        difficulty: "Medium",
        tags: ["british", "19th century", "social history"],
        dailyEligible: true
    },

    // ======================================================
    // GEOGRAPHY
    // ======================================================

    {
        id: "geography_0012",
        category: "Geography",
        question: "Which is the largest island in the Mediterranean Sea?",
        answers: ["Sicily", "Sardinia", "Cyprus", "Crete"],
        correctAnswer: "Sicily",
        difficulty: "Medium",
        tags: ["europe", "islands", "mediterranean"],
        dailyEligible: true
    },

    {
        id: "geography_0013",
        category: "Geography",
        question: "Which country has the city of Dubrovnik?",
        answers: ["Croatia", "Slovenia", "Montenegro", "Albania"],
        correctAnswer: "Croatia",
        difficulty: "Medium",
        tags: ["europe", "cities", "countries", "croatia"],
        dailyEligible: true
    },

    {
        id: "geography_0014",
        category: "Geography",
        question: "What is the capital of New Zealand?",
        answers: ["Wellington", "Auckland", "Christchurch", "Hamilton"],
        correctAnswer: "Wellington",
        difficulty: "Easy",
        tags: ["capitals", "new zealand", "oceania"],
        dailyEligible: true
    },

    {
        id: "geography_0072",
        category: "Geography",
        question: "Which Central Asian country is home to the historic Silk Road city of Samarkand?",
        answers: ["Uzbekistan", "Kazakhstan", "Turkmenistan", "Tajikistan"],
        correctAnswer: "Uzbekistan",
        difficulty: "Medium",
        tags: ["asia", "historic cities", "countries", "silk road"],
        dailyEligible: true
    },

    {
        id: "geography_0073",
        category: "Geography",
        question: "Which English county contains Dartmoor National Park?",
        answers: ["Devon", "Cornwall", "Somerset", "Dorset"],
        correctAnswer: "Devon",
        difficulty: "Medium",
        tags: ["british", "england", "national parks", "counties"],
        dailyEligible: true
    },

    {
        id: "geography_0074",
        category: "Geography",
        question: "Which sea separates the Arabian Peninsula from north-east Africa?",
        answers: ["Red Sea", "Arabian Sea", "Black Sea", "Caspian Sea"],
        correctAnswer: "Red Sea",
        difficulty: "Medium",
        tags: ["africa", "asia", "seas"],
        dailyEligible: true
    },

    // ======================================================
    // SCIENCE & NATURE
    // ======================================================

    {
        id: "science_0011",
        category: "Science & Nature",
        question: "What is the chemical symbol for silver?",
        answers: ["Ag", "Si", "Sv", "Au"],
        correctAnswer: "Ag",
        difficulty: "Medium",
        tags: ["chemistry", "elements", "symbols"],
        dailyEligible: true
    },

    {
        id: "science_0012",
        category: "Science & Nature",
        question: "On which planet did Voyager 2 observe a storm known as the Great Dark Spot?",
        answers: ["Neptune", "Mercury", "Mars", "Venus"],
        correctAnswer: "Neptune",
        difficulty: "Medium",
        tags: ["space", "planets", "solar system"],
        dailyEligible: true
    },

    {
        id: "science_0013",
        category: "Science & Nature",
        question: "What is the name of the process by which a liquid changes into a gas at its surface?",
        answers: ["Evaporation", "Condensation", "Freezing", "Sublimation"],
        correctAnswer: "Evaporation",
        difficulty: "Medium",
        tags: ["physics", "states of matter"],
        dailyEligible: true
    },

    {
        id: "science_0067",
        category: "Science & Nature",
        question: "Which bone runs between the shoulder and elbow?",
        answers: ["Humerus", "Femur", "Radius", "Tibia"],
        correctAnswer: "Humerus",
        difficulty: "Medium",
        tags: ["biology", "human body", "bones"],
        dailyEligible: true
    },

    {
        id: "science_0068",
        category: "Science & Nature",
        question: "Which subatomic particle carries a negative electric charge?",
        answers: ["Electron", "Proton", "Neutron", "Alpha particle"],
        correctAnswer: "Electron",
        difficulty: "Medium",
        tags: ["physics", "atoms", "particles"],
        dailyEligible: true
    },

    {
        id: "science_0069",
        category: "Science & Nature",
        question: "Which structures inside cells produce most of the energy stored as ATP during aerobic respiration?",
        answers: ["Mitochondria", "Ribosomes", "Lysosomes", "Nuclei"],
        correctAnswer: "Mitochondria",
        difficulty: "Medium",
        tags: ["biology", "cells", "human body"],
        dailyEligible: true
    },

    // ======================================================
    // FOOD & DRINK
    // ======================================================

    {
        id: "food_0008",
        category: "Food & Drink",
        question: "What is the main ingredient used to make a traditional meringue?",
        answers: ["Egg whites", "Double cream", "Butter", "Flour"],
        correctAnswer: "Egg whites",
        difficulty: "Easy",
        tags: ["baking", "desserts", "ingredients"],
        dailyEligible: true
    },

    {
        id: "food_0009",
        category: "Food & Drink",
        question: "Which fruit is dried to make a prune?",
        answers: ["Plum", "Apricot", "Fig", "Date"],
        correctAnswer: "Plum",
        difficulty: "Easy",
        tags: ["fruit", "dried fruit"],
        dailyEligible: true
    },

    {
        id: "food_0055",
        category: "Food & Drink",
        question: "Which vegetable is the principal ingredient in baba ghanoush?",
        answers: ["Aubergine", "Courgette", "Pepper", "Carrot"],
        correctAnswer: "Aubergine",
        difficulty: "Medium",
        tags: ["middle eastern", "dips", "ingredients"],
        dailyEligible: true
    },

    {
        id: "food_0056",
        category: "Food & Drink",
        question: "Which meat is traditionally used in Lancashire hotpot?",
        answers: ["Lamb or mutton", "Beef", "Pork", "Chicken"],
        correctAnswer: "Lamb or mutton",
        difficulty: "Medium",
        tags: ["british", "lancashire", "traditional dishes"],
        dailyEligible: true
    },

    {
        id: "food_0057",
        category: "Food & Drink",
        question: "Which Italian dish is made from cooked ground maize?",
        answers: ["Polenta", "Risotto", "Gnocchi", "Couscous"],
        correctAnswer: "Polenta",
        difficulty: "Medium",
        tags: ["italian", "grains", "traditional dishes"],
        dailyEligible: true
    },

    {
        id: "food_0058",
        category: "Food & Drink",
        question: "Which Japanese soup is traditionally flavoured with fermented soya bean paste?",
        answers: ["Miso soup", "Tom yum", "Pho", "Mulligatawny"],
        correctAnswer: "Miso soup",
        difficulty: "Medium",
        tags: ["japanese", "soups", "fermented foods"],
        dailyEligible: true
    },

    {
        id: "food_0059",
        category: "Food & Drink",
        question: "Which blue-veined Italian cheese is named after a town near Milan?",
        answers: ["Gorgonzola", "Roquefort", "Stilton", "Danablu"],
        correctAnswer: "Gorgonzola",
        difficulty: "Medium",
        tags: ["italian", "cheese", "ingredients"],
        dailyEligible: true
    },

    // ======================================================
    // SPORT
    // ======================================================

    {
        id: "sport_0008",
        category: "Sport",
        question: "In golf, what name is given to a score of one under par on a hole?",
        answers: ["Birdie", "Eagle", "Bogey", "Albatross"],
        correctAnswer: "Birdie",
        difficulty: "Easy",
        tags: ["golf", "terminology", "scoring"],
        dailyEligible: true
    },

    {
        id: "sport_0009",
        category: "Sport",
        question: "In a standard game of darts, what number is at the very top of the board?",
        answers: ["20", "18", "12", "1"],
        correctAnswer: "20",
        difficulty: "Medium",
        tags: ["darts", "scoring"],
        dailyEligible: true
    },

    {
        id: "sport_0046",
        category: "Sport",
        question: "Which trophy is contested by England and Scotland in rugby union?",
        answers: ["Calcutta Cup", "Six Nations Trophy", "Bledisloe Cup", "Webb Ellis Cup"],
        correctAnswer: "Calcutta Cup",
        difficulty: "Medium",
        tags: ["rugby union", "trophies", "british"],
        dailyEligible: true
    },

    {
        id: "sport_0047",
        category: "Sport",
        question: "Which sport combines swimming, cycling and running in one race?",
        answers: ["Triathlon", "Pentathlon", "Duathlon", "Biathlon"],
        correctAnswer: "Triathlon",
        difficulty: "Medium",
        tags: ["multisport", "olympics"],
        dailyEligible: true
    },

    {
        id: "sport_0048",
        category: "Sport",
        question: "Which country won the first Rugby World Cup in 1987?",
        answers: ["New Zealand", "Australia", "England", "South Africa"],
        correctAnswer: "New Zealand",
        difficulty: "Medium",
        tags: ["rugby union", "world cup", "1980s"],
        dailyEligible: true
    },

    // ======================================================
    // LITERATURE
    // ======================================================

    {
        id: "literature_0006",
        category: "Literature",
        question: "Who wrote \"The Hitchhiker's Guide to the Galaxy\"?",
        answers: ["Douglas Adams", "Terry Pratchett", "Neil Gaiman", "Arthur C. Clarke"],
        correctAnswer: "Douglas Adams",
        difficulty: "Medium",
        tags: ["british", "authors", "science fiction", "douglas adams"],
        dailyEligible: true
    },

    {
        id: "literature_0007",
        category: "Literature",
        question: "Which Shakespeare play features the characters Rosencrantz and Guildenstern?",
        answers: ["Hamlet", "Macbeth", "Othello", "King Lear"],
        correctAnswer: "Hamlet",
        difficulty: "Medium",
        tags: ["shakespeare", "plays", "british", "hamlet"],
        dailyEligible: true
    },

    {
        id: "literature_0045",
        category: "Literature",
        question: "Which novel is narrated by Nick Carraway?",
        answers: ["The Great Gatsby", "Of Mice and Men", "The Sun Also Rises", "Tender Is the Night"],
        correctAnswer: "The Great Gatsby",
        difficulty: "Medium",
        tags: ["american", "classic literature", "novels"],
        dailyEligible: true
    },

    {
        id: "literature_0046",
        category: "Literature",
        question: "Who wrote the adventure novel Treasure Island?",
        answers: ["Robert Louis Stevenson", "Rudyard Kipling", "Jules Verne", "Arthur Conan Doyle"],
        correctAnswer: "Robert Louis Stevenson",
        difficulty: "Medium",
        tags: ["british", "adventure", "authors", "novels"],
        dailyEligible: true
    }

];

module.exports = questions;
