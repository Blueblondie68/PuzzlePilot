// quiz_pack5.js
// PuzzlePilot Quiz - Question Pack 5
// 40 additional questions

const questions = [

    // =========================================================
    // MUSIC
    // =========================================================

    {
        id: 'music_0029',
        category: 'Music',
        question:
            'Which band released the 1983 album "Synchronicity"?',
        answers: [
            'The Police',
            'Duran Duran',
            'Simple Minds',
            'Tears for Fears'
        ],
        correctAnswer:
            'The Police',
        difficulty:
            'Medium',
        tags: [
            '1980s',
            'albums',
            'british'
        ],
        dailyEligible:
            true
    },

    {
        id: 'music_0030',
        category: 'Music',
        question:
            'Which singer had a hit with "Son of a Preacher Man" in the 1960s?',
        answers: [
            'Dusty Springfield',
            'Sandie Shaw',
            'Cilla Black',
            'Petula Clark'
        ],
        correctAnswer:
            'Dusty Springfield',
        difficulty:
            'Medium',
        tags: [
            '1960s',
            'british',
            'singers'
        ],
        dailyEligible:
            true
    },

    {
        id: 'music_0031',
        category: 'Music',
        question:
            'Which band released "Don\'t Look Back in Anger"?',
        answers: [
            'Oasis',
            'Blur',
            'Pulp',
            'The Verve'
        ],
        correctAnswer:
            'Oasis',
        difficulty:
            'Easy',
        tags: [
            '1990s',
            'british',
            'bands'
        ],
        dailyEligible:
            true
    },

    {
        id: 'music_0032',
        category: 'Music',
        question:
            'Who sang the 1980 hit "9 to 5"?',
        answers: [
            'Dolly Parton',
            'Cher',
            'Diana Ross',
            'Barbra Streisand'
        ],
        correctAnswer:
            'Dolly Parton',
        difficulty:
            'Easy',
        tags: [
            '1980s',
            'american',
            'singers'
        ],
        dailyEligible:
            true
    },

    {
        id: 'music_0033',
        category: 'Music',
        question:
            'Which band featured Robert Plant as lead singer?',
        answers: [
            'Led Zeppelin',
            'Deep Purple',
            'Black Sabbath',
            'The Who'
        ],
        correctAnswer:
            'Led Zeppelin',
        difficulty:
            'Medium',
        tags: [
            'rock',
            'british',
            'bands'
        ],
        dailyEligible:
            true
    },

    {
        id: 'music_0034',
        category: 'Music',
        question:
            'Which singer released the album "Jagged Little Pill"?',
        answers: [
            'Alanis Morissette',
            'Sheryl Crow',
            'Natalie Imbruglia',
            'Suzanne Vega'
        ],
        correctAnswer:
            'Alanis Morissette',
        difficulty:
            'Medium',
        tags: [
            '1990s',
            'albums',
            'singers'
        ],
        dailyEligible:
            true
    },

    {
        id: 'music_0035',
        category: 'Music',
        question:
            'Which group had a 1978 hit with "Rasputin"?',
        answers: [
            'Boney M.',
            'ABBA',
            'Baccara',
            'Chic'
        ],
        correctAnswer:
            'Boney M.',
        difficulty:
            'Medium',
        tags: [
            '1970s',
            'disco',
            'groups'
        ],
        dailyEligible:
            true
    },

    {
        id: 'music_0036',
        category: 'Music',
        question:
            'Which British duo released the 1982 single "Only You"?',
        answers: [
            'Yazoo',
            'Eurythmics',
            'Erasure',
            'Pet Shop Boys'
        ],
        correctAnswer:
            'Yazoo',
        difficulty:
            'Medium',
        tags: [
            '1980s',
            'british',
            'duos',
            'songs'
        ],
        dailyEligible:
            true
    },

    // =========================================================
    // TELEVISION
    // =========================================================

    {
        id: 'tv_0029',
        category: 'TV',
        question:
            'In "Blackadder Goes Forth", what military rank does Blackadder hold?',
        answers: [
            'Captain',
            'Major',
            'Lieutenant',
            'Colonel'
        ],
        correctAnswer:
            'Captain',
        difficulty:
            'Medium',
        tags: [
            'british',
            'sitcoms',
            'blackadder'
        ],
        dailyEligible:
            true
    },

    {
        id: 'tv_0030',
        category: 'TV',
        question:
            'Which actress played Catherine Cawood in "Happy Valley"?',
        answers: [
            'Sarah Lancashire',
            'Suranne Jones',
            'Nicola Walker',
            'Keeley Hawes'
        ],
        correctAnswer:
            'Sarah Lancashire',
        difficulty:
            'Medium',
        tags: [
            'british',
            'drama',
            'actors'
        ],
        dailyEligible:
            true
    },

    {
        id: 'tv_0031',
        category: 'TV',
        question:
            'What is the surname of Frasier and Niles in "Frasier"?',
        answers: [
            'Crane',
            'Banks',
            'Becker',
            'Palmer'
        ],
        correctAnswer:
            'Crane',
        difficulty:
            'Easy',
        tags: [
            'american',
            'sitcoms',
            '1990s'
        ],
        dailyEligible:
            true
    },

    {
        id: 'tv_0032',
        category: 'TV',
        question:
            'Which comedy series featured the characters Richie and Eddie?',
        answers: [
            'Bottom',
            'The Young Ones',
            'Men Behaving Badly',
            'Red Dwarf'
        ],
        correctAnswer:
            'Bottom',
        difficulty:
            'Medium',
        tags: [
            'british',
            'sitcoms',
            '1990s'
        ],
        dailyEligible:
            true
    },

    {
        id: 'tv_0033',
        category: 'TV',
        question:
            'Which actor played Manny Bianco in the sitcom "Black Books"?',
        answers: [
            'Bill Bailey',
            'Dylan Moran',
            'Simon Pegg',
            'Martin Freeman'
        ],
        correctAnswer:
            'Bill Bailey',
        difficulty:
            'Medium',
        tags: [
            'british',
            'comedy',
            '2000s',
            'actors'
        ],
        dailyEligible:
            true
    },

    {
        id: 'tv_0034',
        category: 'TV',
        question:
            'Which actor played Edmund Blackadder?',
        answers: [
            'Rowan Atkinson',
            'Hugh Laurie',
            'Stephen Fry',
            'Rik Mayall'
        ],
        correctAnswer:
            'Rowan Atkinson',
        difficulty:
            'Easy',
        tags: [
            'british',
            'comedy',
            'actors'
        ],
        dailyEligible:
            true
    },

    {
        id: 'tv_0035',
        category: 'TV',
        question:
            'In "The Royle Family", what is the first name of Jim Royle\'s wife?',
        answers: [
            'Barbara',
            'Denise',
            'Cheryl',
            'Norma'
        ],
        correctAnswer:
            'Barbara',
        difficulty:
            'Medium',
        tags: [
            'british',
            'sitcoms',
            '1990s'
        ],
        dailyEligible:
            true
    },

    {
        id: 'tv_0036',
        category: 'TV',
        question:
            'Which US television drama is set in the fictional advertising agency Sterling Cooper?',
        answers: [
            'Mad Men',
            'Suits',
            'The West Wing',
            'Succession'
        ],
        correctAnswer:
            'Mad Men',
        difficulty:
            'Medium',
        tags: [
            'american',
            'drama',
            '2000s'
        ],
        dailyEligible:
            true
    },

    // =========================================================
    // FILM
    // =========================================================

    {
        id: 'film_0025',
        category: 'Film',
        question:
            'Which actor played the title character in the 1987 film "Withnail and I"?',
        answers: [
            'Richard E. Grant',
            'Paul McGann',
            'Gary Oldman',
            'Tim Roth'
        ],
        correctAnswer:
            'Richard E. Grant',
        difficulty:
            'Medium',
        tags: [
            '1980s',
            'british film',
            'actors'
        ],
        dailyEligible:
            true
    },

    {
        id: 'film_0026',
        category: 'Film',
        question:
            'Which 1994 film features the characters Vincent Vega and Jules Winnfield?',
        answers: [
            'Pulp Fiction',
            'Reservoir Dogs',
            'Heat',
            'True Romance'
        ],
        correctAnswer:
            'Pulp Fiction',
        difficulty:
            'Medium',
        tags: [
            '1990s',
            'characters',
            'films'
        ],
        dailyEligible:
            true
    },

    {
        id: 'film_0027',
        category: 'Film',
        question:
            'Which actress played Hermione Granger in the Harry Potter films?',
        answers: [
            'Emma Watson',
            'Keira Knightley',
            'Emma Stone',
            'Carey Mulligan'
        ],
        correctAnswer:
            'Emma Watson',
        difficulty:
            'Easy',
        tags: [
            'actors',
            'harry potter',
            '2000s'
        ],
        dailyEligible:
            true
    },

    {
        id: 'film_0028',
        category: 'Film',
        question:
            'Which film won the first Academy Award for Best Animated Feature?',
        answers: [
            'Shrek',
            'Toy Story',
            'Finding Nemo',
            'Monsters, Inc.'
        ],
        correctAnswer:
            'Shrek',
        difficulty:
            'Medium',
        tags: [
            'animation',
            'awards',
            '2000s'
        ],
        dailyEligible:
            true
    },

    {
        id: 'film_0029',
        category: 'Film',
        question:
            'Which actor played Dr Malcolm Crowe in "The Sixth Sense"?',
        answers: [
            'Bruce Willis',
            'Kevin Spacey',
            'Tom Hanks',
            'Nicolas Cage'
        ],
        correctAnswer:
            'Bruce Willis',
        difficulty:
            'Medium',
        tags: [
            '1990s',
            'actors',
            'thriller'
        ],
        dailyEligible:
            true
    },

    {
        id: 'film_0030',
        category: 'Film',
        question:
            'Which 1986 film features the fighter pilot Maverick?',
        answers: [
            'Top Gun',
            'Iron Eagle',
            'Platoon',
            'Days of Thunder'
        ],
        correctAnswer:
            'Top Gun',
        difficulty:
            'Easy',
        tags: [
            '1980s',
            'characters',
            'films'
        ],
        dailyEligible:
            true
    },

    // =========================================================
    // GENERAL KNOWLEDGE
    // =========================================================

    {
        id: 'general_0013',
        category: 'General Knowledge',
        question:
            'On a standard six-sided die, what do the numbers on opposite faces always add up to?',
        answers: [
            '7',
            '6',
            '8',
            '9'
        ],
        correctAnswer:
            '7',
        difficulty:
            'Easy',
        tags: [
            'games',
            'numbers',
            'general knowledge'
        ],
        dailyEligible:
            true
    },

    {
        id: 'general_0014',
        category: 'General Knowledge',
        question:
            'What name is given to a word or phrase that reads the same forwards and backwards?',
        answers: [
            'Palindrome',
            'Anagram',
            'Acronym',
            'Homonym'
        ],
        correctAnswer:
            'Palindrome',
        difficulty:
            'Medium',
        tags: [
            'words',
            'language',
            'general knowledge'
        ],
        dailyEligible:
            true
    },

    {
        id: 'general_0015',
        category: 'General Knowledge',
        question:
            'How many squares are there on a standard chessboard?',
        answers: [
            '64',
            '56',
            '72',
            '81'
        ],
        correctAnswer:
            '64',
        difficulty:
            'Easy',
        tags: [
            'games',
            'numbers',
            'general knowledge'
        ],
        dailyEligible:
            true
    },

    // =========================================================
    // HISTORY
    // =========================================================

    {
        id: 'history_0012',
        category: 'History',
        question:
            'In which year was the Battle of Trafalgar fought?',
        answers: [
            '1805',
            '1815',
            '1798',
            '1825'
        ],
        correctAnswer:
            '1805',
        difficulty:
            'Medium',
        tags: [
            'british',
            '19th century',
            'battles'
        ],
        dailyEligible:
            true
    },

    {
        id: 'history_0013',
        category: 'History',
        question:
            'Which Roman emperor gave his name to the wall built across northern Britain?',
        answers: [
            'Hadrian',
            'Claudius',
            'Nero',
            'Augustus'
        ],
        correctAnswer:
            'Hadrian',
        difficulty:
            'Easy',
        tags: [
            'ancient history',
            'roman',
            'britain'
        ],
        dailyEligible:
            true
    },

    {
        id: 'history_0014',
        category: 'History',
        question:
            'Who became President of South Africa in 1994 after the country\'s first fully democratic election?',
        answers: [
            'Nelson Mandela',
            'F. W. de Klerk',
            'Thabo Mbeki',
            'Desmond Tutu'
        ],
        correctAnswer:
            'Nelson Mandela',
        difficulty:
            'Easy',
        tags: [
            'south africa',
            '1990s',
            'world history'
        ],
        dailyEligible:
            true
    },

    // =========================================================
    // GEOGRAPHY
    // =========================================================

    {
        id: 'geography_0012',
        category: 'Geography',
        question:
            'Which is the largest island in the Mediterranean Sea?',
        answers: [
            'Sicily',
            'Sardinia',
            'Cyprus',
            'Crete'
        ],
        correctAnswer:
            'Sicily',
        difficulty:
            'Medium',
        tags: [
            'europe',
            'islands',
            'mediterranean'
        ],
        dailyEligible:
            true
    },

    {
        id: 'geography_0013',
        category: 'Geography',
        question:
            'Which country has the city of Dubrovnik?',
        answers: [
            'Croatia',
            'Slovenia',
            'Montenegro',
            'Albania'
        ],
        correctAnswer:
            'Croatia',
        difficulty:
            'Medium',
        tags: [
            'europe',
            'cities',
            'countries'
        ],
        dailyEligible:
            true
    },

    {
        id: 'geography_0014',
        category: 'Geography',
        question:
            'What is the capital of New Zealand?',
        answers: [
            'Wellington',
            'Auckland',
            'Christchurch',
            'Hamilton'
        ],
        correctAnswer:
            'Wellington',
        difficulty:
            'Easy',
        tags: [
            'capitals',
            'new zealand',
            'cities'
        ],
        dailyEligible:
            true
    },

    // =========================================================
    // SCIENCE & NATURE
    // =========================================================

    {
        id: 'science_0011',
        category: 'Science & Nature',
        question:
            'What is the chemical symbol for silver?',
        answers: [
            'Ag',
            'Si',
            'Sv',
            'Au'
        ],
        correctAnswer:
            'Ag',
        difficulty:
            'Medium',
        tags: [
            'chemistry',
            'elements',
            'science'
        ],
        dailyEligible:
            true
    },

    {
        id: 'science_0012',
        category: 'Science & Nature',
        question:
            'Which planet is closest to the Sun?',
        answers: [
            'Mercury',
            'Venus',
            'Earth',
            'Mars'
        ],
        correctAnswer:
            'Mercury',
        difficulty:
            'Easy',
        tags: [
            'space',
            'planets',
            'science'
        ],
        dailyEligible:
            true
    },

    {
        id: 'science_0013',
        category: 'Science & Nature',
        question:
            'What is the name of the process by which a liquid changes into a gas at its surface?',
        answers: [
            'Evaporation',
            'Condensation',
            'Freezing',
            'Sublimation'
        ],
        correctAnswer:
            'Evaporation',
        difficulty:
            'Medium',
        tags: [
            'physics',
            'states of matter',
            'science'
        ],
        dailyEligible:
            true
    },

    // =========================================================
    // FOOD & DRINK
    // =========================================================

    {
        id: 'food_0008',
        category: 'Food & Drink',
        question:
            'What is the main ingredient used to make a traditional meringue?',
        answers: [
            'Egg whites',
            'Double cream',
            'Butter',
            'Flour'
        ],
        correctAnswer:
            'Egg whites',
        difficulty:
            'Easy',
        tags: [
            'baking',
            'desserts',
            'food'
        ],
        dailyEligible:
            true
    },

    {
        id: 'food_0009',
        category: 'Food & Drink',
        question:
            'Which fruit is dried to make a prune?',
        answers: [
            'Plum',
            'Apricot',
            'Fig',
            'Date'
        ],
        correctAnswer:
            'Plum',
        difficulty:
            'Easy',
        tags: [
            'fruit',
            'food',
            'general knowledge'
        ],
        dailyEligible:
            true
    },

    // =========================================================
    // SPORT
    // =========================================================

    {
        id: 'sport_0008',
        category: 'Sport',
        question:
            'In golf, what name is given to a score of one under par on a hole?',
        answers: [
            'Birdie',
            'Eagle',
            'Bogey',
            'Albatross'
        ],
        correctAnswer:
            'Birdie',
        difficulty:
            'Easy',
        tags: [
            'golf',
            'terminology',
            'sport'
        ],
        dailyEligible:
            true
    },

    {
        id: 'sport_0009',
        category: 'Sport',
        question:
            'In a standard game of darts, what number is at the very top of the board?',
        answers: [
            '20',
            '18',
            '12',
            '1'
        ],
        correctAnswer:
            '20',
        difficulty:
            'Medium',
        tags: [
            'darts',
            'british',
            'sport'
        ],
        dailyEligible:
            true
    },

    // =========================================================
    // LITERATURE
    // =========================================================

    {
        id: 'literature_0006',
        category: 'Literature',
        question:
            'Who wrote "The Hitchhiker\'s Guide to the Galaxy"?',
        answers: [
            'Douglas Adams',
            'Terry Pratchett',
            'Neil Gaiman',
            'Arthur C. Clarke'
        ],
        correctAnswer:
            'Douglas Adams',
        difficulty:
            'Medium',
        tags: [
            'british',
            'authors',
            'science fiction'
        ],
        dailyEligible:
            true
    },

    {
        id: 'literature_0007',
        category: 'Literature',
        question:
            'Which Shakespeare play features the characters Rosencrantz and Guildenstern?',
        answers: [
            'Hamlet',
            'Macbeth',
            'Othello',
            'King Lear'
        ],
        correctAnswer:
            'Hamlet',
        difficulty:
            'Medium',
        tags: [
            'shakespeare',
            'plays',
            'british'
        ],
        dailyEligible:
            true
    }

];

module.exports = questions;
