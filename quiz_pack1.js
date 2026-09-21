// quiz_pack1.js
// PuzzlePilot Quiz - Test Question Pack 1
//
// This is the small development pack used while
// building and testing the Quiz game.
//
// Each question has:
// - a unique ID
// - the question
// - four possible answers
// - the correct answer
// - a main category
// - useful tags
// - a rough difficulty
// - whether it may appear in the Daily Quiz

const questions = [

    // =========================================================
    // MUSIC
    // =========================================================

    {
        id: 'music_0001',
        question: 'Which band released Bohemian Rhapsody?',
        answers: [
            'Queen',
            'ABBA',
            'Fleetwood Mac',
            'The Who'
        ],
        correctAnswer: 'Queen',
        category: 'Music',
        tags: [
            '1970s',
            'British',
            'Bands',
            'Songs'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'music_0002',
        question: 'Which singer released the album 21?',
        answers: [
            'Adele',
            'Amy Winehouse',
            'Dua Lipa',
            'Ellie Goulding'
        ],
        correctAnswer: 'Adele',
        category: 'Music',
        tags: [
            '2010s',
            'British',
            'Albums',
            'Solo Artists'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'music_0003',
        question: 'Which group had a hit with Dancing Queen?',
        answers: [
            'ABBA',
            'Boney M',
            'Blondie',
            'Bee Gees'
        ],
        correctAnswer: 'ABBA',
        category: 'Music',
        tags: [
            '1970s',
            'Songs',
            'Groups'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'music_0004',
        question: 'Which singer was known as the King of Pop?',
        answers: [
            'Michael Jackson',
            'Prince',
            'Elton John',
            'George Michael'
        ],
        correctAnswer: 'Michael Jackson',
        category: 'Music',
        tags: [
            '1980s',
            '1990s',
            'US',
            'Solo Artists'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'music_0005',
        question: 'Which British band released Wonderwall?',
        answers: [
            'Oasis',
            'Blur',
            'Pulp',
            'Suede'
        ],
        correctAnswer: 'Oasis',
        category: 'Music',
        tags: [
            '1990s',
            'British',
            'Bands',
            'Songs'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'music_0006',
        question: 'Which singer had a hit with Girls Just Want to Have Fun?',
        answers: [
            'Cyndi Lauper',
            'Madonna',
            'Tina Turner',
            'Whitney Houston'
        ],
        correctAnswer: 'Cyndi Lauper',
        category: 'Music',
        tags: [
            '1980s',
            'US',
            'Songs',
            'Solo Artists'
        ],
        difficulty: 'Medium',
        dailyEligible: true
    },

    // =========================================================
    // TELEVISION
    // =========================================================

    {
        id: 'tv_0001',
        question: 'What is the surname of Del Boy and Rodney in Only Fools and Horses?',
        answers: [
            'Trotter',
            'Turner',
            'Trigger',
            'Tucker'
        ],
        correctAnswer: 'Trotter',
        category: 'TV',
        tags: [
            'British',
            'Comedy',
            '1980s',
            'Only Fools and Horses'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'tv_0002',
        question: 'Which fictional town is the setting for Coronation Street?',
        answers: [
            'Weatherfield',
            'Walford',
            'Emmerdale',
            'Hollyoaks'
        ],
        correctAnswer: 'Weatherfield',
        category: 'TV',
        tags: [
            'British',
            'Soaps',
            'Coronation Street'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'tv_0003',
        question: 'What is the name of the coffee shop regularly visited by the characters in Friends?',
        answers: [
            'Central Perk',
            'Coffee Central',
            'Central Café',
            'Manhattan Perk'
        ],
        correctAnswer: 'Central Perk',
        category: 'TV',
        tags: [
            'US',
            'Comedy',
            '1990s',
            'Friends'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'tv_0004',
        question: 'Which actor played the Ninth Doctor in Doctor Who?',
        answers: [
            'Christopher Eccleston',
            'David Tennant',
            'Matt Smith',
            'Peter Capaldi'
        ],
        correctAnswer: 'Christopher Eccleston',
        category: 'TV',
        tags: [
            'British',
            'Science Fiction',
            'Doctor Who',
            '2000s'
        ],
        difficulty: 'Medium',
        dailyEligible: true
    },

    {
        id: 'tv_0005',
        question: 'In The Simpsons, what is the name of the family dog?',
        answers: [
            "Santa's Little Helper",
            'Snowball',
            'Bongo',
            'Laddie'
        ],
        correctAnswer: "Santa's Little Helper",
        category: 'TV',
        tags: [
            'US',
            'Animation',
            'Comedy',
            'The Simpsons'
        ],
        difficulty: 'Medium',
        dailyEligible: true
    },

    {
        id: 'tv_0006',
        question: 'Which British TV quiz show features The Chaser?',
        answers: [
            'The Chase',
            'Pointless',
            'Tipping Point',
            'The Weakest Link'
        ],
        correctAnswer: 'The Chase',
        category: 'TV',
        tags: [
            'British',
            'Quiz Shows',
            'The Chase'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    // =========================================================
    // FILM
    // =========================================================

    {
        id: 'film_0001',
        question: 'Who played Jack Dawson in Titanic?',
        answers: [
            'Leonardo DiCaprio',
            'Brad Pitt',
            'Matt Damon',
            'Johnny Depp'
        ],
        correctAnswer: 'Leonardo DiCaprio',
        category: 'Film',
        tags: [
            '1990s',
            'Actors',
            'Titanic'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'film_0002',
        question: 'Which film features the character Marty McFly?',
        answers: [
            'Back to the Future',
            'Ghostbusters',
            'The Goonies',
            'Gremlins'
        ],
        correctAnswer: 'Back to the Future',
        category: 'Film',
        tags: [
            '1980s',
            'Science Fiction',
            'Back to the Future'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'film_0003',
        question: 'Which actor played the title character in the 1990 film Edward Scissorhands?',
        answers: [
            'Johnny Depp',
            'Tom Cruise',
            'Keanu Reeves',
            'Nicolas Cage'
        ],
        correctAnswer: 'Johnny Depp',
        category: 'Film',
        tags: [
            '1990s',
            'Actors'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'film_0004',
        question: 'What type of fish is Nemo in Finding Nemo?',
        answers: [
            'Clownfish',
            'Angelfish',
            'Pufferfish',
            'Butterflyfish'
        ],
        correctAnswer: 'Clownfish',
        category: 'Film',
        tags: [
            '2000s',
            'Animation',
            'Finding Nemo'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'film_0005',
        question: 'Which actor played Forrest Gump?',
        answers: [
            'Tom Hanks',
            'Robin Williams',
            'Kevin Costner',
            'Harrison Ford'
        ],
        correctAnswer: 'Tom Hanks',
        category: 'Film',
        tags: [
            '1990s',
            'Actors',
            'Forrest Gump'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'film_0006',
        question: 'In The Wizard of Oz, what colour is the Yellow Brick Road?',
        answers: [
            'Yellow',
            'Red',
            'Green',
            'Gold'
        ],
        correctAnswer: 'Yellow',
        category: 'Film',
        tags: [
            'Classic Film',
            'The Wizard of Oz'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    // =========================================================
    // GENERAL KNOWLEDGE
    // =========================================================

    {
        id: 'general_0001',
        question: 'How many sides does a hexagon have?',
        answers: [
            'Six',
            'Five',
            'Seven',
            'Eight'
        ],
        correctAnswer: 'Six',
        category: 'General Knowledge',
        tags: [
            'Mathematics'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'general_0002',
        question: 'What colour are emeralds?',
        answers: [
            'Green',
            'Blue',
            'Red',
            'Purple'
        ],
        correctAnswer: 'Green',
        category: 'General Knowledge',
        tags: [
            'Gemstones'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'general_0003',
        question: 'How many players does a standard football team have on the pitch at the start of a match?',
        answers: [
            '11',
            '10',
            '12',
            '9'
        ],
        correctAnswer: '11',
        category: 'General Knowledge',
        tags: [
            'Sport',
            'Football'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    // =========================================================
    // HISTORY
    // =========================================================

    {
        id: 'history_0001',
        question: 'In which year did the Second World War end in Europe?',
        answers: [
            '1945',
            '1944',
            '1946',
            '1943'
        ],
        correctAnswer: '1945',
        category: 'History',
        tags: [
            '20th Century',
            'Second World War'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'history_0002',
        question: 'Which English king had six wives?',
        answers: [
            'Henry VIII',
            'Henry VII',
            'Edward VI',
            'Richard III'
        ],
        correctAnswer: 'Henry VIII',
        category: 'History',
        tags: [
            'British',
            'Monarchy',
            'Tudors'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'history_0003',
        question: 'Which ancient civilisation built Machu Picchu?',
        answers: [
            'Inca',
            'Maya',
            'Aztec',
            'Roman'
        ],
        correctAnswer: 'Inca',
        category: 'History',
        tags: [
            'Ancient History',
            'South America'
        ],
        difficulty: 'Medium',
        dailyEligible: true
    },

    // =========================================================
    // GEOGRAPHY
    // =========================================================

    {
        id: 'geography_0001',
        question: 'What is the capital city of Australia?',
        answers: [
            'Canberra',
            'Sydney',
            'Melbourne',
            'Perth'
        ],
        correctAnswer: 'Canberra',
        category: 'Geography',
        tags: [
            'Capitals',
            'Australia'
        ],
        difficulty: 'Medium',
        dailyEligible: true
    },

    {
        id: 'geography_0002',
        question: 'Which river flows through London?',
        answers: [
            'Thames',
            'Severn',
            'Mersey',
            'Tyne'
        ],
        correctAnswer: 'Thames',
        category: 'Geography',
        tags: [
            'British',
            'Rivers'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'geography_0003',
        question: 'Mount Fuji is in which country?',
        answers: [
            'Japan',
            'China',
            'South Korea',
            'Thailand'
        ],
        correctAnswer: 'Japan',
        category: 'Geography',
        tags: [
            'Asia',
            'Mountains'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    // =========================================================
    // SCIENCE & NATURE
    // =========================================================

    {
        id: 'science_0001',
        question: 'Which planet is known as the Red Planet?',
        answers: [
            'Mars',
            'Venus',
            'Jupiter',
            'Mercury'
        ],
        correctAnswer: 'Mars',
        category: 'Science & Nature',
        tags: [
            'Space',
            'Planets'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'science_0002',
        question: 'What is the largest organ of the human body?',
        answers: [
            'Skin',
            'Liver',
            'Heart',
            'Lungs'
        ],
        correctAnswer: 'Skin',
        category: 'Science & Nature',
        tags: [
            'Human Body'
        ],
        difficulty: 'Medium',
        dailyEligible: true
    },

    // =========================================================
    // FOOD & DRINK
    // =========================================================

    {
        id: 'food_0001',
        question: 'Which fruit is traditionally used to make cider?',
        answers: [
            'Apple',
            'Orange',
            'Grape',
            'Cherry'
        ],
        correctAnswer: 'Apple',
        category: 'Food & Drink',
        tags: [
            'Food',
            'Drink'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    },

    {
        id: 'food_0002',
        question: 'Which type of pastry is traditionally used for profiteroles?',
        answers: [
            'Choux',
            'Puff',
            'Filo',
            'Shortcrust'
        ],
        correctAnswer: 'Choux',
        category: 'Food & Drink',
        tags: [
            'Food',
            'Baking'
        ],
        difficulty: 'Medium',
        dailyEligible: true
    },

    // =========================================================
    // SPORT
    // =========================================================

    {
        id: 'sport_0001',
        question: 'How many points is a try worth in rugby union?',
        answers: [
            '5',
            '3',
            '6',
            '7'
        ],
        correctAnswer: '5',
        category: 'Sport',
        tags: [
            'Rugby Union'
        ],
        difficulty: 'Medium',
        dailyEligible: true
    },

    {
        id: 'sport_0002',
        question: 'In tennis, what word represents a score of zero?',
        answers: [
            'Love',
            'Nil',
            'Blank',
            'Duck'
        ],
        correctAnswer: 'Love',
        category: 'Sport',
        tags: [
            'Tennis'
        ],
        difficulty: 'Easy',
        dailyEligible: true
    }

];

module.exports = questions;
