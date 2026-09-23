// quiz_pack9.js
// PuzzlePilot Quiz - Question Pack 9
// 40 additional questions

const questions = [

    // =========================================================
    // MUSIC
    // =========================================================

    {
        id: 'music_0061',
        category: 'Music',
        question:
            'Which band released the 1983 album "Synchronicity"?',
        answers: [
            'The Police',
            'Dire Straits',
            'Simple Minds',
            'Duran Duran'
        ],
        correctAnswer:
            'The Police',
        difficulty:
            'Medium',
        tags: [
            '1980s',
            'albums',
            'bands'
        ],
        dailyEligible:
            true
    },

    {
        id: 'music_0062',
        category: 'Music',
        question:
            'Which singer had a 1989 hit with "All Around the World"?',
        answers: [
            'Lisa Stansfield',
            'Alison Moyet',
            'Kim Wilde',
            'Beverley Craven'
        ],
        correctAnswer:
            'Lisa Stansfield',
        difficulty:
            'Medium',
        tags: [
            '1980s',
            'british',
            'singers'
        ],
        dailyEligible:
            true
    },

    {
        id: 'music_0063',
        category: 'Music',
        question:
            'Which band released the 1986 hit "The Final Countdown"?',
        answers: [
            'Europe',
            'Bon Jovi',
            'Foreigner',
            'Survivor'
        ],
        correctAnswer:
            'Europe',
        difficulty:
            'Easy',
        tags: [
            '1980s',
            'bands',
            'songs'
        ],
        dailyEligible:
            true
    },

    {
        id: 'music_0064',
        category: 'Music',
        question:
            'Which singer released the 1990 album "I\'m Your Baby Tonight"?',
        answers: [
            'Whitney Houston',
            'Mariah Carey',
            'Janet Jackson',
            'Anita Baker'
        ],
        correctAnswer:
            'Whitney Houston',
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
        id: 'music_0065',
        category: 'Music',
        question:
            'Which band had a 1978 hit with "Roxanne"?',
        answers: [
            'The Police',
            'The Jam',
            'Blondie',
            'The Clash'
        ],
        correctAnswer:
            'The Police',
        difficulty:
            'Medium',
        tags: [
            '1970s',
            'bands',
            'songs'
        ],
        dailyEligible:
            true
    },

    {
        id: 'music_0066',
        category: 'Music',
        question:
            'Which singer released the 2006 hit "Rehab"?',
        answers: [
            'Amy Winehouse',
            'Duffy',
            'Lily Allen',
            'Adele'
        ],
        correctAnswer:
            'Amy Winehouse',
        difficulty:
            'Easy',
        tags: [
            '2000s',
            'british',
            'singers'
        ],
        dailyEligible:
            true
    },

    {
        id: 'music_0067',
        category: 'Music',
        question:
            'Which duo consisted of George Michael and Andrew Ridgeley?',
        answers: [
            'Wham!',
            'Erasure',
            'Pet Shop Boys',
            'The Communards'
        ],
        correctAnswer:
            'Wham!',
        difficulty:
            'Easy',
        tags: [
            '1980s',
            'british',
            'duos'
        ],
        dailyEligible:
            true
    },

    {
        id: 'music_0068',
        category: 'Music',
        question:
            'Which singer released the 1973 album "Goodbye Yellow Brick Road"?',
        answers: [
            'Elton John',
            'David Bowie',
            'Rod Stewart',
            'Cat Stevens'
        ],
        correctAnswer:
            'Elton John',
        difficulty:
            'Medium',
        tags: [
            '1970s',
            'albums',
            'british'
        ],
        dailyEligible:
            true
    },

    // =========================================================
    // TELEVISION
    // =========================================================

    {
        id: 'tv_0061',
        category: 'TV',
        question:
            'Which actress played Margo Leadbetter in "The Good Life"?',
        answers: [
            'Penelope Keith',
            'Felicity Kendal',
            'Prunella Scales',
            'Wendy Craig'
        ],
        correctAnswer:
            'Penelope Keith',
        difficulty:
            'Medium',
        tags: [
            'british',
            'sitcoms',
            'actors'
        ],
        dailyEligible:
            true
    },

    {
        id: 'tv_0062',
        category: 'TV',
        question:
            'Which actor provides the voice of Homer Simpson?',
        answers: [
            'Dan Castellaneta',
            'Hank Azaria',
            'Harry Shearer',
            'Yeardley Smith'
        ],
        correctAnswer:
            'Dan Castellaneta',
        difficulty:
            'Medium',
        tags: [
            'american',
            'animation',
            'the simpsons'
        ],
        dailyEligible:
            true
    },

    {
        id: 'tv_0063',
        category: 'TV',
        question:
            'Which actor played Father Dougal McGuire in "Father Ted"?',
        answers: [
            'Ardal O\'Hanlon',
            'Dermot Morgan',
            'Frank Kelly',
            'Dylan Moran'
        ],
        correctAnswer:
            'Ardal O\'Hanlon',
        difficulty:
            'Medium',
        tags: [
            'british',
            'irish',
            'sitcoms',
            'actors'
        ],
        dailyEligible:
            true
    },

    {
        id: 'tv_0064',
        category: 'TV',
        question:
            'What is the surname of brothers Sam and Dean in "Supernatural"?',
        answers: [
            'Winchester',
            'Salvatore',
            'Bennett',
            'Gilbert'
        ],
        correctAnswer:
            'Winchester',
        difficulty:
            'Medium',
        tags: [
            'american',
            'drama',
            'supernatural'
        ],
        dailyEligible:
            true
    },

    {
        id: 'tv_0065',
        category: 'TV',
        question:
            'Which actress played Patsy Stone in "Absolutely Fabulous"?',
        answers: [
            'Joanna Lumley',
            'Jennifer Saunders',
            'Julia Sawalha',
            'Jane Horrocks'
        ],
        correctAnswer:
            'Joanna Lumley',
        difficulty:
            'Medium',
        tags: [
            'british',
            'sitcoms',
            'actors'
        ],
        dailyEligible:
            true
    },

    {
        id: 'tv_0066',
        category: 'TV',
        question:
            'Which television drama follows the Crawley family and their servants?',
        answers: [
            'Downton Abbey',
            'Upstairs, Downstairs',
            'Call the Midwife',
            'Poldark'
        ],
        correctAnswer:
            'Downton Abbey',
        difficulty:
            'Easy',
        tags: [
            'british',
            'drama',
            'period drama'
        ],
        dailyEligible:
            true
    },

    {
        id: 'tv_0067',
        category: 'TV',
        question:
            'In "Doctor Who", what is the name of the Doctor\'s time machine?',
        answers: [
            'TARDIS',
            'Nautilus',
            'Serenity',
            'Discovery'
        ],
        correctAnswer:
            'TARDIS',
        difficulty:
            'Easy',
        tags: [
            'british',
            'doctor who',
            'science fiction'
        ],
        dailyEligible:
            true
    },

    {
        id: 'tv_0068',
        category: 'TV',
        question:
            'Which actor played Jonathan Creek in the television series of the same name?',
        answers: [
            'Alan Davies',
            'Stephen Fry',
            'Hugh Laurie',
            'Martin Clunes'
        ],
        correctAnswer:
            'Alan Davies',
        difficulty:
            'Medium',
        tags: [
            'british',
            'mystery',
            'actors'
        ],
        dailyEligible:
            true
    },

    // =========================================================
    // FILM
    // =========================================================

    {
        id: 'film_0049',
        category: 'Film',
        question:
            'Which actress played Annie Wilkes in the 1990 film "Misery"?',
        answers: [
            'Kathy Bates',
            'Glenn Close',
            'Jessica Lange',
            'Susan Sarandon'
        ],
        correctAnswer:
            'Kathy Bates',
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
        id: 'film_0050',
        category: 'Film',
        question:
            'Which film features the characters Thelma Dickinson and Louise Sawyer?',
        answers: [
            'Thelma & Louise',
            'Fried Green Tomatoes',
            'Steel Magnolias',
            'A League of Their Own'
        ],
        correctAnswer:
            'Thelma & Louise',
        difficulty:
            'Medium',
        tags: [
            '1990s',
            'films',
            'characters'
        ],
        dailyEligible:
            true
    },

    {
        id: 'film_0051',
        category: 'Film',
        question:
            'Which actor played the title character in the 1992 film "Chaplin"?',
        answers: [
            'Robert Downey Jr.',
            'Johnny Depp',
            'Tom Hanks',
            'Kevin Kline'
        ],
        correctAnswer:
            'Robert Downey Jr.',
        difficulty:
            'Medium',
        tags: [
            '1990s',
            'actors',
            'biographical films'
        ],
        dailyEligible:
            true
    },

    {
        id: 'film_0052',
        category: 'Film',
        question:
            'Which 1985 film features a time-travelling DeLorean?',
        answers: [
            'Back to the Future',
            'Weird Science',
            'Short Circuit',
            'WarGames'
        ],
        correctAnswer:
            'Back to the Future',
        difficulty:
            'Easy',
        tags: [
            '1980s',
            'science fiction',
            'films'
        ],
        dailyEligible:
            true
    },

    {
        id: 'film_0053',
        category: 'Film',
        question:
            'Which actress played Sally Albright in "When Harry Met Sally..."?',
        answers: [
            'Meg Ryan',
            'Julia Roberts',
            'Demi Moore',
            'Michelle Pfeiffer'
        ],
        correctAnswer:
            'Meg Ryan',
        difficulty:
            'Medium',
        tags: [
            '1980s',
            'actors',
            'romantic comedy'
        ],
        dailyEligible:
            true
    },

    {
        id: 'film_0054',
        category: 'Film',
        question:
            'Which actor played Dr Malcolm in the 1993 film "Jurassic Park"?',
        answers: [
            'Jeff Goldblum',
            'Sam Neill',
            'Richard Attenborough',
            'Wayne Knight'
        ],
        correctAnswer:
            'Jeff Goldblum',
        difficulty:
            'Medium',
        tags: [
            '1990s',
            'actors',
            'science fiction'
        ],
        dailyEligible:
            true
    },

    // =========================================================
    // GENERAL KNOWLEDGE
    // =========================================================

    {
        id: 'general_0025',
        category: 'General Knowledge',
        question:
            'How many sides does a heptagon have?',
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
            'numbers',
            'shapes',
            'general knowledge'
        ],
        dailyEligible:
            true
    },

    {
        id: 'general_0026',
        category: 'General Knowledge',
        question:
            'How many black squares are there on a standard chessboard?',
        answers: [
            '32',
            '30',
            '36',
            '40'
        ],
        correctAnswer:
            '32',
        difficulty:
            'Medium',
        tags: [
            'chess',
            'numbers',
            'general knowledge'
        ],
        dailyEligible:
            true
    },

    {
        id: 'general_0027',
        category: 'General Knowledge',
        question:
            'Which Roman numeral represents 100?',
        answers: [
            'C',
            'L',
            'D',
            'M'
        ],
        correctAnswer:
            'C',
        difficulty:
            'Easy',
        tags: [
            'numbers',
            'roman numerals',
            'general knowledge'
        ],
        dailyEligible:
            true
    },

    // =========================================================
    // HISTORY
    // =========================================================

    {
        id: 'history_0024',
        category: 'History',
        question:
            'Which English king was defeated at the Battle of Bosworth Field in 1485?',
        answers: [
            'Richard III',
            'Henry VII',
            'Edward IV',
            'Henry VIII'
        ],
        correctAnswer:
            'Richard III',
        difficulty:
            'Medium',
        tags: [
            'british',
            'monarchy',
            '15th century'
        ],
        dailyEligible:
            true
    },

    {
        id: 'history_0025',
        category: 'History',
        question:
            'Which British nurse became known as the "Lady with the Lamp"?',
        answers: [
            'Florence Nightingale',
            'Mary Seacole',
            'Edith Cavell',
            'Elizabeth Garrett Anderson'
        ],
        correctAnswer:
            'Florence Nightingale',
        difficulty:
            'Easy',
        tags: [
            'british',
            '19th century',
            'people'
        ],
        dailyEligible:
            true
    },

    {
        id: 'history_0026',
        category: 'History',
        question:
            'Which explorer completed the first solo non-stop flight across the Atlantic in 1927?',
        answers: [
            'Charles Lindbergh',
            'Amelia Earhart',
            'Howard Hughes',
            'Louis Blériot'
        ],
        correctAnswer:
            'Charles Lindbergh',
        difficulty:
            'Medium',
        tags: [
            '20th century',
            'aviation',
            'exploration'
        ],
        dailyEligible:
            true
    },

    // =========================================================
    // GEOGRAPHY
    // =========================================================

    {
        id: 'geography_0024',
        category: 'Geography',
        question:
            'What is the capital city of Finland?',
        answers: [
            'Helsinki',
            'Oslo',
            'Stockholm',
            'Copenhagen'
        ],
        correctAnswer:
            'Helsinki',
        difficulty:
            'Easy',
        tags: [
            'europe',
            'capitals',
            'finland'
        ],
        dailyEligible:
            true
    },

    {
        id: 'geography_0025',
        category: 'Geography',
        question:
            'Which river flows through the city of Florence?',
        answers: [
            'Arno',
            'Tiber',
            'Po',
            'Adige'
        ],
        correctAnswer:
            'Arno',
        difficulty:
            'Medium',
        tags: [
            'italy',
            'rivers',
            'europe'
        ],
        dailyEligible:
            true
    },

    {
        id: 'geography_0026',
        category: 'Geography',
        question:
            'Which country has the city of Kraków?',
        answers: [
            'Poland',
            'Hungary',
            'Slovakia',
            'Romania'
        ],
        correctAnswer:
            'Poland',
        difficulty:
            'Easy',
        tags: [
            'europe',
            'cities',
            'countries'
        ],
        dailyEligible:
            true
    },

    // =========================================================
    // SCIENCE
    // =========================================================

    {
        id: 'science_0023',
        category: 'Science',
        question:
            'Which organ in the human body produces insulin?',
        answers: [
            'Pancreas',
            'Liver',
            'Kidney',
            'Spleen'
        ],
        correctAnswer:
            'Pancreas',
        difficulty:
            'Medium',
        tags: [
            'biology',
            'human body',
            'science'
        ],
        dailyEligible:
            true
    },

    {
        id: 'science_0024',
        category: 'Science',
        question:
            'What is the chemical symbol for sodium?',
        answers: [
            'Na',
            'So',
            'Sd',
            'Sn'
        ],
        correctAnswer:
            'Na',
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
        id: 'science_0025',
        category: 'Science',
        question:
            'Which planet is the largest in our Solar System?',
        answers: [
            'Jupiter',
            'Saturn',
            'Neptune',
            'Uranus'
        ],
        correctAnswer:
            'Jupiter',
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

    // =========================================================
    // FOOD AND DRINK
    // =========================================================

    {
        id: 'food_0016',
        category: 'Food and Drink',
        question:
            'Which Italian dessert is traditionally made with coffee-soaked sponge fingers and mascarpone?',
        answers: [
            'Tiramisu',
            'Panna cotta',
            'Cannoli',
            'Zabaglione'
        ],
        correctAnswer:
            'Tiramisu',
        difficulty:
            'Easy',
        tags: [
            'italian',
            'desserts',
            'food'
        ],
        dailyEligible:
            true
    },

    {
        id: 'food_0017',
        category: 'Food and Drink',
        question:
            'Which spice gives many curry dishes their distinctive yellow colour?',
        answers: [
            'Turmeric',
            'Cumin',
            'Paprika',
            'Coriander'
        ],
        correctAnswer:
            'Turmeric',
        difficulty:
            'Easy',
        tags: [
            'spices',
            'ingredients',
            'food'
        ],
        dailyEligible:
            true
    },

    // =========================================================
    // SPORT
    // =========================================================

    {
        id: 'sport_0016',
        category: 'Sport',
        question:
            'How many points is a penalty kick worth in rugby union?',
        answers: [
            '3',
            '2',
            '5',
            '7'
        ],
        correctAnswer:
            '3',
        difficulty:
            'Easy',
        tags: [
            'rugby union',
            'scoring',
            'sport'
        ],
        dailyEligible:
            true
    },

    {
        id: 'sport_0017',
        category: 'Sport',
        question:
            'Which sport uses the terms birdie, eagle and bogey?',
        answers: [
            'Golf',
            'Tennis',
            'Cricket',
            'Badminton'
        ],
        correctAnswer:
            'Golf',
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

    // =========================================================
    // LITERATURE
    // =========================================================

    {
        id: 'literature_0014',
        category: 'Literature',
        question:
            'Who wrote "The Railway Children"?',
        answers: [
            'E. Nesbit',
            'Enid Blyton',
            'Frances Hodgson Burnett',
            'Beatrix Potter'
        ],
        correctAnswer:
            'E. Nesbit',
        difficulty:
            'Medium',
        tags: [
            'british',
            'authors',
            'children\'s literature'
        ],
        dailyEligible:
            true
    },

    {
        id: 'literature_0015',
        category: 'Literature',
        question:
            'Which author wrote the novel "Rebecca"?',
        answers: [
            'Daphne du Maurier',
            'Agatha Christie',
            'Virginia Woolf',
            'Iris Murdoch'
        ],
        correctAnswer:
            'Daphne du Maurier',
        difficulty:
            'Medium',
        tags: [
            'british',
            'authors',
            'novels'
        ],
        dailyEligible:
            true
    }

];

module.exports = questions;
