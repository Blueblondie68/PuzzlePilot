// quiz_pack2.js
// PuzzlePilot Quiz - Question Pack 2
//
// 30 additional questions for the PuzzlePilot question bank.
//
// Categories:
// - Music: 6
// - TV: 6
// - Film: 6
// - General Knowledge: 3
// - History: 2
// - Geography: 2
// - Science & Nature: 2
// - Food & Drink: 1
// - Sport: 1
// - Literature: 1

const questions = [

    // =========================================================
    // MUSIC
    // =========================================================

    {
        id: 'music_0007',
        question: 'Which band released the 1982 album The Number of the Beast?',
        answers: [
            'Iron Maiden',
            'Judas Priest',
            'Black Sabbath',
            'Def Leppard'
        ],
        correctAnswer: 'Iron Maiden',
        category: 'Music',
        tags: [
            '1980s',
            'British',
            'Bands',
            'Albums',
            'Heavy Metal'
        ],
        difficulty: 'Medium',
        dailyEligible: true
    },

    {
        id: 'music_0008',
        question: 'Which singer had a 1987 hit with Never Gonna Give You Up?',
        answers: [
            'Rick Astley',
            'Jason Donovan',
            'Nik Kershaw',
            'Paul Young'
        ],
        correctAnswer: 'Rick Astley',
        category: 'Music',
        tags: [
            '1980s',
            'British',
            'Songs',
            'Solo Artists'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'music_0009',
        question: 'Which Fleetwood Mac album includes the songs Dreams and Go Your Own Way?',
        answers: [
            'Rumours',
            'Tusk',
            'Mirage',
            'Tango in the Night'
        ],
        correctAnswer: 'Rumours',
        category: 'Music',
        tags: [
            '1970s',
            'Albums',
            'Bands',
            'Fleetwood Mac'
        ],
        difficulty: 'Medium',
        dailyEligible: true
    },

    {
        id: 'music_0010',
        question: 'Who sang the 1964 hit My Guy?',
        answers: [
            'Mary Wells',
            'Diana Ross',
            'Dusty Springfield',
            'Aretha Franklin'
        ],
        correctAnswer: 'Mary Wells',
        category: 'Music',
        tags: [
            '1960s',
            'US',
            'Songs',
            'Solo Artists',
            'Motown'
        ],
        difficulty: 'Medium',
        dailyEligible: true
    },

    {
        id: 'music_0011',
        question: 'Which British singer released the album Faith in 1987?',
        answers: [
            'George Michael',
            'Sting',
            'Phil Collins',
            'Elton John'
        ],
        correctAnswer: 'George Michael',
        category: 'Music',
        tags: [
            '1980s',
            'British',
            'Albums',
            'Solo Artists'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'music_0012',
        question: 'Which group had a 1997 hit with MMMBop?',
        answers: [
            'Hanson',
            'Backstreet Boys',
            'Boyzone',
            'Savage Garden'
        ],
        correctAnswer: 'Hanson',
        category: 'Music',
        tags: [
            '1990s',
            'US',
            'Groups',
            'Songs'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    // =========================================================
    // TELEVISION
    // =========================================================

    {
        id: 'tv_0007',
        question: 'In Fawlty Towers, what is Basil Fawlty\'s wife called?',
        answers: [
            'Sybil',
            'Polly',
            'Audrey',
            'Prunella'
        ],
        correctAnswer: 'Sybil',
        category: 'TV',
        tags: [
            'British',
            'Comedy',
            '1970s',
            'Fawlty Towers'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'tv_0008',
        question: 'Which actor played David Brent in The Office?',
        answers: [
            'Ricky Gervais',
            'Martin Freeman',
            'Mackenzie Crook',
            'Stephen Merchant'
        ],
        correctAnswer: 'Ricky Gervais',
        category: 'TV',
        tags: [
            'British',
            'Comedy',
            '2000s',
            'The Office'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'tv_0009',
        question: 'What is the name of the pub in EastEnders?',
        answers: [
            'The Queen Victoria',
            'The Rovers Return',
            'The Woolpack',
            'The Dog in the Pond'
        ],
        correctAnswer: 'The Queen Victoria',
        category: 'TV',
        tags: [
            'British',
            'Soaps',
            'EastEnders'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'tv_0010',
        question: 'In Stranger Things, what is the name of the fictional Indiana town where the story begins?',
        answers: [
            'Hawkins',
            'Hill Valley',
            'Sunnydale',
            'Riverdale'
        ],
        correctAnswer: 'Hawkins',
        category: 'TV',
        tags: [
            'US',
            '2010s',
            'Drama',
            'Science Fiction',
            'Stranger Things'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'tv_0011',
        question: 'Which sitcom features the characters Blackadder and Baldrick?',
        answers: [
            'Blackadder',
            'Red Dwarf',
            'Bottom',
            'The Young Ones'
        ],
        correctAnswer: 'Blackadder',
        category: 'TV',
        tags: [
            'British',
            'Comedy',
            '1980s',
            'Blackadder'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'tv_0012',
        question: 'In Breaking Bad, what subject does Walter White teach before becoming involved in the drug trade?',
        answers: [
            'Chemistry',
            'Physics',
            'Mathematics',
            'Biology'
        ],
        correctAnswer: 'Chemistry',
        category: 'TV',
        tags: [
            'US',
            '2000s',
            'Drama',
            'Breaking Bad'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    // =========================================================
    // FILM
    // =========================================================

    {
        id: 'film_0007',
        question: 'Which 1975 film features a great white shark terrorising the town of Amity?',
        answers: [
            'Jaws',
            'Orca',
            'The Deep',
            'Piranha'
        ],
        correctAnswer: 'Jaws',
        category: 'Film',
        tags: [
            '1970s',
            'Thriller',
            'Jaws'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'film_0008',
        question: 'Who played Bridget Jones in Bridget Jones\'s Diary?',
        answers: [
            'Renée Zellweger',
            'Sandra Bullock',
            'Julia Roberts',
            'Kate Winslet'
        ],
        correctAnswer: 'Renée Zellweger',
        category: 'Film',
        tags: [
            '2000s',
            'Actors',
            'British Film',
            'Bridget Jones'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'film_0009',
        question: 'Which film features the characters Woody and Buzz Lightyear?',
        answers: [
            'Toy Story',
            'Cars',
            'Monsters, Inc.',
            'The Incredibles'
        ],
        correctAnswer: 'Toy Story',
        category: 'Film',
        tags: [
            '1990s',
            'Animation',
            'Toy Story'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'film_0010',
        question: 'In The Matrix, which colour pill does Neo take?',
        answers: [
            'Red',
            'Blue',
            'Green',
            'White'
        ],
        correctAnswer: 'Red',
        category: 'Film',
        tags: [
            '1990s',
            'Science Fiction',
            'The Matrix'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'film_0011',
        question: 'Which actor played Indiana Jones in Raiders of the Lost Ark?',
        answers: [
            'Harrison Ford',
            'Mel Gibson',
            'Kurt Russell',
            'Kevin Costner'
        ],
        correctAnswer: 'Harrison Ford',
        category: 'Film',
        tags: [
            '1980s',
            'Actors',
            'Adventure',
            'Indiana Jones'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'film_0012',
        question: 'Which 1994 film stars Tim Robbins as prisoner Andy Dufresne?',
        answers: [
            'The Shawshank Redemption',
            'The Green Mile',
            'Good Will Hunting',
            'A Few Good Men'
        ],
        correctAnswer: 'The Shawshank Redemption',
        category: 'Film',
        tags: [
            '1990s',
            'Drama',
            'Actors'
        ],
        difficulty: 'Medium',
        dailyEligible: true
    },

    // =========================================================
    // GENERAL KNOWLEDGE
    // =========================================================

    {
        id: 'general_0004',
        question: 'How many minutes are there in two and a half hours?',
        answers: [
            '150',
            '120',
            '135',
            '180'
        ],
        correctAnswer: '150',
        category: 'General Knowledge',
        tags: [
            'Mathematics',
            'Time'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'general_0005',
        question: 'Which board game includes properties called Mayfair and Park Lane in its standard UK edition?',
        answers: [
            'Monopoly',
            'Cluedo',
            'Risk',
            'Scrabble'
        ],
        correctAnswer: 'Monopoly',
        category: 'General Knowledge',
        tags: [
            'Games',
            'British'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'general_0006',
        question: 'What is the Roman numeral for 50?',
        answers: [
            'L',
            'C',
            'X',
            'V'
        ],
        correctAnswer: 'L',
        category: 'General Knowledge',
        tags: [
            'Numbers',
            'Roman Numerals'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    // =========================================================
    // HISTORY
    // =========================================================

    {
        id: 'history_0004',
        question: 'Which British monarch was on the throne when the First World War began in 1914?',
        answers: [
            'George V',
            'Edward VII',
            'George VI',
            'Edward VIII'
        ],
        correctAnswer: 'George V',
        category: 'History',
        tags: [
            'British',
            '20th Century',
            'Monarchy',
            'First World War'
        ],
        difficulty: 'Medium',
        dailyEligible: true
    },

    {
        id: 'history_0005',
        question: 'The ancient city of Pompeii was destroyed by the eruption of which volcano?',
        answers: [
            'Mount Vesuvius',
            'Mount Etna',
            'Mount Olympus',
            'Stromboli'
        ],
        correctAnswer: 'Mount Vesuvius',
        category: 'History',
        tags: [
            'Ancient History',
            'Roman',
            'Italy'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    // =========================================================
    // GEOGRAPHY
    // =========================================================

    {
        id: 'geography_0004',
        question: 'Which is the largest country in the world by area?',
        answers: [
            'Russia',
            'Canada',
            'China',
            'United States'
        ],
        correctAnswer: 'Russia',
        category: 'Geography',
        tags: [
            'Countries',
            'World Geography'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'geography_0005',
        question: 'Which European capital city is divided by the River Danube into Buda and Pest?',
        answers: [
            'Budapest',
            'Prague',
            'Vienna',
            'Bratislava'
        ],
        correctAnswer: 'Budapest',
        category: 'Geography',
        tags: [
            'Europe',
            'Capitals',
            'Rivers'
        ],
        difficulty: 'Medium',
        dailyEligible: true
    },

    // =========================================================
    // SCIENCE & NATURE
    // =========================================================

    {
        id: 'science_0003',
        question: 'What gas do plants absorb from the atmosphere during photosynthesis?',
        answers: [
            'Carbon dioxide',
            'Oxygen',
            'Nitrogen',
            'Hydrogen'
        ],
        correctAnswer: 'Carbon dioxide',
        category: 'Science & Nature',
        tags: [
            'Biology',
            'Plants'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'science_0004',
        question: 'What is the chemical symbol for gold?',
        answers: [
            'Au',
            'Ag',
            'Go',
            'Gd'
        ],
        correctAnswer: 'Au',
        category: 'Science & Nature',
        tags: [
            'Chemistry',
            'Elements'
        ],
        difficulty: 'Medium',
        dailyEligible: true
    },

    // =========================================================
    // FOOD & DRINK
    // =========================================================

    {
        id: 'food_0003',
        question: 'Which Italian dessert is traditionally made with coffee-soaked sponge fingers and mascarpone?',
        answers: [
            'Tiramisu',
            'Panna cotta',
            'Cannoli',
            'Panettone'
        ],
        correctAnswer: 'Tiramisu',
        category: 'Food & Drink',
        tags: [
            'Food',
            'Desserts',
            'Italian'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    // =========================================================
    // SPORT
    // =========================================================

    {
        id: 'sport_0003',
        question: 'How many balls are normally bowled in an over in modern cricket?',
        answers: [
            '6',
            '5',
            '7',
            '8'
        ],
        correctAnswer: '6',
        category: 'Sport',
        tags: [
            'Cricket',
            'British'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    // =========================================================
    // LITERATURE
    // =========================================================

    {
        id: 'literature_0001',
        question: 'Who wrote the novel Pride and Prejudice?',
        answers: [
            'Jane Austen',
            'Charlotte Brontë',
            'George Eliot',
            'Mary Shelley'
        ],
        correctAnswer: 'Jane Austen',
        category: 'Literature',
        tags: [
            'British',
            'Books',
            'Classic Literature',
            'Authors'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    }

];

module.exports = questions;
