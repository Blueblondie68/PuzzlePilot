// quiz_pack2.js
// PuzzlePilot Big Quiz - Mixed Question Pack 2
// Existing IDs retained; corrections, consistent tags and fresh questions added.
// No additional Music or Television questions.

const questions = [

    // ======================================================
    // MUSIC
    // ======================================================

    {
        id: "music_0007",
        category: "Music",
        question: "Which band released the 1982 album The Number of the Beast?",
        answers: ["Iron Maiden", "Judas Priest", "Black Sabbath", "Def Leppard"],
        correctAnswer: "Iron Maiden",
        difficulty: "Medium",
        tags: ["1980s", "british", "bands", "albums", "heavy metal"],
        dailyEligible: true
    },

    {
        id: "music_0008",
        category: "Music",
        question: "Which singer had a 1987 hit with Never Gonna Give You Up?",
        answers: ["Rick Astley", "Jason Donovan", "Nik Kershaw", "Paul Young"],
        correctAnswer: "Rick Astley",
        difficulty: "Easy",
        tags: ["1980s", "british", "songs", "singers"],
        dailyEligible: true
    },

    {
        id: "music_0009",
        category: "Music",
        question: "Which Fleetwood Mac album includes the songs Dreams and Go Your Own Way?",
        answers: ["Rumours", "Tusk", "Mirage", "Tango in the Night"],
        correctAnswer: "Rumours",
        difficulty: "Medium",
        tags: ["1970s", "albums", "bands", "fleetwood mac"],
        dailyEligible: true
    },

    {
        id: "music_0010",
        category: "Music",
        question: "Who sang the 1964 hit My Guy?",
        answers: ["Mary Wells", "Diana Ross", "Dusty Springfield", "Aretha Franklin"],
        correctAnswer: "Mary Wells",
        difficulty: "Medium",
        tags: ["1960s", "american", "songs", "singers", "motown"],
        dailyEligible: true
    },

    {
        id: "music_0011",
        category: "Music",
        question: "Which British singer released the album Faith in 1987?",
        answers: ["George Michael", "Sting", "Phil Collins", "Elton John"],
        correctAnswer: "George Michael",
        difficulty: "Easy",
        tags: ["1980s", "british", "albums", "singers"],
        dailyEligible: true
    },

    {
        id: "music_0012",
        category: "Music",
        question: "Which group had a 1997 hit with MMMBop?",
        answers: ["Hanson", "Backstreet Boys", "Boyzone", "Savage Garden"],
        correctAnswer: "Hanson",
        difficulty: "Easy",
        tags: ["1990s", "american", "groups", "songs"],
        dailyEligible: true
    },

    // ======================================================
    // TELEVISION
    // ======================================================

    {
        id: "tv_0007",
        category: "TV",
        question: "In Fawlty Towers, what is Basil Fawlty's wife called?",
        answers: ["Sybil", "Polly", "Audrey", "Prunella"],
        correctAnswer: "Sybil",
        difficulty: "Easy",
        tags: ["british", "comedy", "1970s", "fawlty towers"],
        dailyEligible: true
    },

    {
        id: "tv_0008",
        category: "TV",
        question: "Which actor played David Brent in The Office?",
        answers: ["Ricky Gervais", "Martin Freeman", "Mackenzie Crook", "Stephen Merchant"],
        correctAnswer: "Ricky Gervais",
        difficulty: "Easy",
        tags: ["british", "comedy", "2000s", "the office"],
        dailyEligible: true
    },

    {
        id: "tv_0009",
        category: "TV",
        question: "What is the name of the pub in EastEnders?",
        answers: ["The Queen Victoria", "The Rovers Return", "The Woolpack", "The Dog in the Pond"],
        correctAnswer: "The Queen Victoria",
        difficulty: "Easy",
        tags: ["british", "soaps", "eastenders"],
        dailyEligible: true
    },

    {
        id: "tv_0010",
        category: "TV",
        question: "In Stranger Things, what is the name of the fictional Indiana town where the story begins?",
        answers: ["Hawkins", "Hill Valley", "Sunnydale", "Riverdale"],
        correctAnswer: "Hawkins",
        difficulty: "Easy",
        tags: ["american", "2010s", "science fiction", "drama", "stranger things"],
        dailyEligible: true
    },

    {
        id: "tv_0011",
        category: "TV",
        question: "Which British historical sitcom features Baldrick and his famously 'cunning plans'?",
        answers: ["Blackadder", "Red Dwarf", "Bottom", "The Young Ones"],
        correctAnswer: "Blackadder",
        difficulty: "Easy",
        tags: ["british", "comedy", "1980s", "blackadder"],
        dailyEligible: true
    },

    {
        id: "tv_0012",
        category: "TV",
        question: "In Breaking Bad, what subject does Walter White teach before becoming involved in the drug trade?",
        answers: ["Chemistry", "Physics", "Mathematics", "Biology"],
        correctAnswer: "Chemistry",
        difficulty: "Easy",
        tags: ["american", "2000s", "drama", "crime", "breaking bad"],
        dailyEligible: true
    },

    // ======================================================
    // FILM
    // ======================================================

    {
        id: "film_0007",
        category: "Film",
        question: "Which 1975 film features a great white shark terrorising the town of Amity?",
        answers: ["Jaws", "Orca", "The Deep", "Piranha"],
        correctAnswer: "Jaws",
        difficulty: "Easy",
        tags: ["1970s", "thriller", "jaws"],
        dailyEligible: true
    },

    {
        id: "film_0008",
        category: "Film",
        question: "Who played Bridget Jones in Bridget Jones's Diary?",
        answers: ["Renée Zellweger", "Sandra Bullock", "Julia Roberts", "Kate Winslet"],
        correctAnswer: "Renée Zellweger",
        difficulty: "Easy",
        tags: ["2000s", "actors", "british", "bridget jones"],
        dailyEligible: true
    },

    {
        id: "film_0009",
        category: "Film",
        question: "Which film features the characters Woody and Buzz Lightyear?",
        answers: ["Toy Story", "Cars", "Monsters, Inc.", "The Incredibles"],
        correctAnswer: "Toy Story",
        difficulty: "Easy",
        tags: ["1990s", "animation", "toy story"],
        dailyEligible: true
    },

    {
        id: "film_0010",
        category: "Film",
        question: "In The Matrix, which colour pill does Neo take?",
        answers: ["Red", "Blue", "Green", "White"],
        correctAnswer: "Red",
        difficulty: "Easy",
        tags: ["1990s", "science fiction", "the matrix"],
        dailyEligible: true
    },

    {
        id: "film_0011",
        category: "Film",
        question: "Which actor played Indiana Jones in Raiders of the Lost Ark?",
        answers: ["Harrison Ford", "Mel Gibson", "Kurt Russell", "Kevin Costner"],
        correctAnswer: "Harrison Ford",
        difficulty: "Easy",
        tags: ["1980s", "actors", "adventure", "indiana jones"],
        dailyEligible: true
    },

    {
        id: "film_0012",
        category: "Film",
        question: "Which 1994 film stars Tim Robbins as prisoner Andy Dufresne?",
        answers: ["The Shawshank Redemption", "The Green Mile", "Good Will Hunting", "A Few Good Men"],
        correctAnswer: "The Shawshank Redemption",
        difficulty: "Medium",
        tags: ["1990s", "drama", "actors"],
        dailyEligible: true
    },

    {
        id: "film_0134",
        category: "Film",
        question: "Which 1999 romantic comedy features Julia Roberts as actress Anna Scott?",
        answers: ["Notting Hill", "Four Weddings and a Funeral", "Bridget Jones's Diary", "Love Actually"],
        correctAnswer: "Notting Hill",
        difficulty: "Medium",
        tags: ["1990s", "romantic comedy", "british"],
        dailyEligible: true
    },

    {
        id: "film_0135",
        category: "Film",
        question: "Which actor played private detective Eddie Valiant in Who Framed Roger Rabbit?",
        answers: ["Bob Hoskins", "Christopher Lloyd", "Michael Caine", "Danny DeVito"],
        correctAnswer: "Bob Hoskins",
        difficulty: "Medium",
        tags: ["1980s", "actors", "comedy", "animation"],
        dailyEligible: true
    },

    {
        id: "film_0136",
        category: "Film",
        question: "Which actress played Emma Woodhouse in the 1996 film Emma?",
        answers: ["Gwyneth Paltrow", "Emma Thompson", "Helena Bonham Carter", "Julia Roberts"],
        correctAnswer: "Gwyneth Paltrow",
        difficulty: "Medium",
        tags: ["1990s", "actors", "literary adaptations"],
        dailyEligible: true
    },

    // ======================================================
    // GENERAL KNOWLEDGE
    // ======================================================

    {
        id: "general_0004",
        category: "General Knowledge",
        question: "How many minutes are there in two and a half hours?",
        answers: ["150", "120", "135", "180"],
        correctAnswer: "150",
        difficulty: "Easy",
        tags: ["mathematics", "time"],
        dailyEligible: true
    },

    {
        id: "general_0005",
        category: "General Knowledge",
        question: "Which board game includes properties called Mayfair and Park Lane in its standard UK edition?",
        answers: ["Monopoly", "Cluedo", "Risk", "Scrabble"],
        correctAnswer: "Monopoly",
        difficulty: "Easy",
        tags: ["games", "british"],
        dailyEligible: true
    },

    {
        id: "general_0006",
        category: "General Knowledge",
        question: "What is the Roman numeral for 50?",
        answers: ["L", "C", "X", "V"],
        correctAnswer: "L",
        difficulty: "Easy",
        tags: ["numbers", "roman numerals"],
        dailyEligible: true
    },

    {
        id: "general_0064",
        category: "General Knowledge",
        question: "What is the small dot above a lowercase i or j called?",
        answers: ["Tittle", "Serif", "Apostrophe", "Cedilla"],
        correctAnswer: "Tittle",
        difficulty: "Hard",
        tags: ["language", "typography", "terminology"],
        dailyEligible: true
    },

    {
        id: "general_0065",
        category: "General Knowledge",
        question: "What do the letters PIN stand for in a bank card PIN?",
        answers: ["Personal Identification Number", "Private Identity Number", "Personal Information Number", "Protected Identification Number"],
        correctAnswer: "Personal Identification Number",
        difficulty: "Easy",
        tags: ["abbreviations", "money", "everyday life"],
        dailyEligible: true
    },

    {
        id: "general_0066",
        category: "General Knowledge",
        question: "How many degrees separate adjacent hour marks on a standard clock face?",
        answers: ["30", "15", "45", "60"],
        correctAnswer: "30",
        difficulty: "Medium",
        tags: ["mathematics", "time"],
        dailyEligible: true
    },

    // ======================================================
    // HISTORY
    // ======================================================

    {
        id: "history_0004",
        category: "History",
        question: "Which British monarch was on the throne when the First World War began in 1914?",
        answers: ["George V", "Edward VII", "George VI", "Edward VIII"],
        correctAnswer: "George V",
        difficulty: "Medium",
        tags: ["british", "20th century", "monarchy", "first world war"],
        dailyEligible: true
    },

    {
        id: "history_0005",
        category: "History",
        question: "Which Roman statesman was assassinated on the Ides of March?",
        answers: ["Julius Caesar", "Augustus", "Mark Antony", "Nero"],
        correctAnswer: "Julius Caesar",
        difficulty: "Easy",
        tags: ["ancient rome", "politics", "classical history"],
        dailyEligible: true
    },

    {
        id: "history_0061",
        category: "History",
        question: "Which British engineer designed the Clifton Suspension Bridge in Bristol?",
        answers: ["Isambard Kingdom Brunel", "Thomas Telford", "George Stephenson", "John Rennie"],
        correctAnswer: "Isambard Kingdom Brunel",
        difficulty: "Medium",
        tags: ["british", "19th century", "engineering"],
        dailyEligible: true
    },

    {
        id: "history_0062",
        category: "History",
        question: "Which French heroine helped lift the siege of Orléans during the Hundred Years' War?",
        answers: ["Joan of Arc", "Catherine de Medici", "Eleanor of Aquitaine", "Marie Antoinette"],
        correctAnswer: "Joan of Arc",
        difficulty: "Medium",
        tags: ["france", "medieval", "hundred years war"],
        dailyEligible: true
    },

    {
        id: "history_0063",
        category: "History",
        question: "Which Portuguese explorer reached India by sea after sailing around the Cape of Good Hope?",
        answers: ["Vasco da Gama", "Ferdinand Magellan", "Bartolomeu Dias", "Pedro Álvares Cabral"],
        correctAnswer: "Vasco da Gama",
        difficulty: "Medium",
        tags: ["exploration", "portugal", "15th century"],
        dailyEligible: true
    },

    {
        id: "history_0064",
        category: "History",
        question: "Whose tomb was discovered by Howard Carter in the Valley of the Kings?",
        answers: ["Tutankhamun", "Ramesses II", "Akhenaten", "Seti I"],
        correctAnswer: "Tutankhamun",
        difficulty: "Easy",
        tags: ["ancient egypt", "archaeology", "20th century"],
        dailyEligible: true
    },

    {
        id: "history_0065",
        category: "History",
        question: "What was the Allied code name for the overall invasion of Normandy during the Second World War?",
        answers: ["Operation Overlord", "Operation Market Garden", "Operation Torch", "Operation Husky"],
        correctAnswer: "Operation Overlord",
        difficulty: "Medium",
        tags: ["second world war", "military", "20th century"],
        dailyEligible: true
    },

    // ======================================================
    // GEOGRAPHY
    // ======================================================

    {
        id: "geography_0004",
        category: "Geography",
        question: "Which is the largest country in the world by area?",
        answers: ["Russia", "Canada", "China", "United States"],
        correctAnswer: "Russia",
        difficulty: "Easy",
        tags: ["countries", "world geography"],
        dailyEligible: true
    },

    {
        id: "geography_0005",
        category: "Geography",
        question: "Which European capital city stands on the River Daugava?",
        answers: ["Riga", "Tallinn", "Vilnius", "Helsinki"],
        correctAnswer: "Riga",
        difficulty: "Medium",
        tags: ["europe", "capitals", "rivers"],
        dailyEligible: true
    },

    {
        id: "geography_0063",
        category: "Geography",
        question: "What is the largest lake in Africa by surface area?",
        answers: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Turkana"],
        correctAnswer: "Lake Victoria",
        difficulty: "Medium",
        tags: ["africa", "lakes"],
        dailyEligible: true
    },

    {
        id: "geography_0064",
        category: "Geography",
        question: "Which modern country is home to the ruins of the ancient city of Carthage?",
        answers: ["Tunisia", "Morocco", "Egypt", "Algeria"],
        correctAnswer: "Tunisia",
        difficulty: "Medium",
        tags: ["africa", "historic sites", "countries"],
        dailyEligible: true
    },

    {
        id: "geography_0065",
        category: "Geography",
        question: "Which country includes the Mediterranean island of Corsica?",
        answers: ["France", "Italy", "Spain", "Greece"],
        correctAnswer: "France",
        difficulty: "Medium",
        tags: ["europe", "islands"],
        dailyEligible: true
    },

    // ======================================================
    // SCIENCE & NATURE
    // ======================================================

    {
        id: "science_0003",
        category: "Science & Nature",
        question: "What gas do plants absorb from the atmosphere during photosynthesis?",
        answers: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon dioxide",
        difficulty: "Easy",
        tags: ["biology", "plants"],
        dailyEligible: true
    },

    {
        id: "science_0004",
        category: "Science & Nature",
        question: "Which scientist formulated the three laws of motion?",
        answers: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "James Clerk Maxwell"],
        correctAnswer: "Isaac Newton",
        difficulty: "Medium",
        tags: ["physics", "scientists", "history of science"],
        dailyEligible: true
    },

    {
        id: "science_0057",
        category: "Science & Nature",
        question: "Which element has atomic number six?",
        answers: ["Carbon", "Oxygen", "Nitrogen", "Boron"],
        correctAnswer: "Carbon",
        difficulty: "Medium",
        tags: ["chemistry", "elements"],
        dailyEligible: true
    },

    {
        id: "science_0058",
        category: "Science & Nature",
        question: "Which part of an insect's body are its six legs attached to?",
        answers: ["Thorax", "Abdomen", "Head", "Antennae"],
        correctAnswer: "Thorax",
        difficulty: "Medium",
        tags: ["biology", "insects", "animals"],
        dailyEligible: true
    },

    {
        id: "science_0059",
        category: "Science & Nature",
        question: "What type of rock forms when molten lava cools and solidifies?",
        answers: ["Igneous", "Sedimentary", "Metamorphic", "Fossiliferous"],
        correctAnswer: "Igneous",
        difficulty: "Medium",
        tags: ["geology", "rocks", "volcanoes"],
        dailyEligible: true
    },

    // ======================================================
    // FOOD & DRINK
    // ======================================================

    {
        id: "food_0003",
        category: "Food & Drink",
        question: "Which Italian dessert is traditionally made with coffee-soaked sponge fingers and mascarpone?",
        answers: ["Tiramisu", "Panna cotta", "Cannoli", "Panettone"],
        correctAnswer: "Tiramisu",
        difficulty: "Easy",
        tags: ["desserts", "italian"],
        dailyEligible: true
    },

    {
        id: "food_0040",
        category: "Food & Drink",
        question: "What is the Italian name for small pasta parcels filled with cheese, meat or vegetables?",
        answers: ["Ravioli", "Rigatoni", "Fusilli", "Pappardelle"],
        correctAnswer: "Ravioli",
        difficulty: "Easy",
        tags: ["italian", "pasta", "dishes"],
        dailyEligible: true
    },

    {
        id: "food_0041",
        category: "Food & Drink",
        question: "Which fruit is traditionally used in a Black Forest gateau?",
        answers: ["Cherries", "Raspberries", "Strawberries", "Blackcurrants"],
        correctAnswer: "Cherries",
        difficulty: "Easy",
        tags: ["baking", "desserts", "fruit"],
        dailyEligible: true
    },

    {
        id: "food_0042",
        category: "Food & Drink",
        question: "Which cheese is typically paired with tomato and basil in a Caprese salad?",
        answers: ["Mozzarella", "Feta", "Gorgonzola", "Ricotta"],
        correctAnswer: "Mozzarella",
        difficulty: "Medium",
        tags: ["italian", "cheese", "salads"],
        dailyEligible: true
    },

    {
        id: "food_0043",
        category: "Food & Drink",
        question: "Which Japanese dish is based on specially prepared vinegared rice?",
        answers: ["Sushi", "Tempura", "Ramen", "Udon"],
        correctAnswer: "Sushi",
        difficulty: "Easy",
        tags: ["japanese", "rice", "dishes"],
        dailyEligible: true
    },

    {
        id: "food_0044",
        category: "Food & Drink",
        question: "Which fish is traditionally used in the Scottish soup Cullen skink?",
        answers: ["Smoked haddock", "Smoked salmon", "Cod", "Kippers"],
        correctAnswer: "Smoked haddock",
        difficulty: "Medium",
        tags: ["scottish", "soup", "fish"],
        dailyEligible: true
    },

    // ======================================================
    // SPORT
    // ======================================================

    {
        id: "sport_0003",
        category: "Sport",
        question: "How many balls are normally bowled in an over in modern cricket?",
        answers: ["6", "5", "7", "8"],
        correctAnswer: "6",
        difficulty: "Easy",
        tags: ["cricket", "british"],
        dailyEligible: true
    },

    {
        id: "sport_0037",
        category: "Sport",
        question: "In which athletics event is a heavy metal ball put from the shoulder?",
        answers: ["Shot put", "Discus", "Hammer throw", "Javelin"],
        correctAnswer: "Shot put",
        difficulty: "Easy",
        tags: ["athletics", "field events"],
        dailyEligible: true
    },

    {
        id: "sport_0038",
        category: "Sport",
        question: "Which circuit hosts the British Formula One Grand Prix?",
        answers: ["Silverstone", "Brands Hatch", "Donington Park", "Oulton Park"],
        correctAnswer: "Silverstone",
        difficulty: "Medium",
        tags: ["formula one", "motorsport", "british"],
        dailyEligible: true
    },

    {
        id: "sport_0039",
        category: "Sport",
        question: "How many points is the inner bullseye worth on a standard dartboard?",
        answers: ["50", "25", "40", "60"],
        correctAnswer: "50",
        difficulty: "Easy",
        tags: ["darts", "scoring"],
        dailyEligible: true
    },

    // ======================================================
    // LITERATURE
    // ======================================================

    {
        id: "literature_0001",
        category: "Literature",
        question: "Who wrote the novel Pride and Prejudice?",
        answers: ["Jane Austen", "Charlotte Brontë", "George Eliot", "Mary Shelley"],
        correctAnswer: "Jane Austen",
        difficulty: "Easy",
        tags: ["british", "books", "classic literature", "authors"],
        dailyEligible: true
    },

    {
        id: "literature_0038",
        category: "Literature",
        question: "Which school does Harry Potter attend in the novels?",
        answers: ["Hogwarts", "Beauxbatons", "Durmstrang", "Ilvermorny"],
        correctAnswer: "Hogwarts",
        difficulty: "Easy",
        tags: ["fantasy", "british", "children"],
        dailyEligible: true
    },

    {
        id: "literature_0039",
        category: "Literature",
        question: "Which Emily Brontë novel features Heathcliff and Catherine Earnshaw?",
        answers: ["Wuthering Heights", "Jane Eyre", "Shirley", "Villette"],
        correctAnswer: "Wuthering Heights",
        difficulty: "Medium",
        tags: ["british", "classic literature", "novels"],
        dailyEligible: true
    },

    {
        id: "literature_0040",
        category: "Literature",
        question: "Who wrote the novel The Picture of Dorian Gray?",
        answers: ["Oscar Wilde", "Bram Stoker", "Thomas Hardy", "Arthur Conan Doyle"],
        correctAnswer: "Oscar Wilde",
        difficulty: "Medium",
        tags: ["irish", "classic literature", "authors"],
        dailyEligible: true
    }

];

module.exports = questions;
