// quiz_pack20.js
// PuzzlePilot Big Quiz
// Pack 20 - 40 questions
// Corrected after duplicate check

const questions = [

    // =========================================================
    // MUSIC
    // =========================================================

    {
        id: 'music_0157',
        category: 'Music',
        question: 'Which band released the 1979 album The Wall?',
        answers: ['Pink Floyd', 'Genesis', 'Queen', 'Led Zeppelin'],
        correctAnswer: 'Pink Floyd',
        difficulty: 'Easy',
        tags: ['1970s', 'albums', 'bands'],
        dailyEligible: true
    },
    {
        id: 'music_0158',
        category: 'Music',
        question: 'Which singer had a 1989 hit with If I Could Turn Back Time?',
        answers: ['Cher', 'Tina Turner', 'Belinda Carlisle', 'Bonnie Tyler'],
        correctAnswer: 'Cher',
        difficulty: 'Easy',
        tags: ['1980s', 'female artists', 'songs'],
        dailyEligible: true
    },
    {
        id: 'music_0159',
        category: 'Music',
        question: 'Which British band recorded the song Town Called Malice?',
        answers: ['The Jam', 'The Clash', 'The Specials', 'Madness'],
        correctAnswer: 'The Jam',
        difficulty: 'Medium',
        tags: ['1980s', 'british', 'bands'],
        dailyEligible: true
    },
    {
        id: 'music_0160',
        category: 'Music',
        question: 'Which Madonna album includes the title track Like a Prayer?',
        answers: ['Like a Prayer', 'True Blue', 'Erotica', 'Bedtime Stories'],
        correctAnswer: 'Like a Prayer',
        difficulty: 'Easy',
        tags: ['1980s', 'madonna', 'albums'],
        dailyEligible: true
    },
    {
        id: 'music_0161',
        category: 'Music',
        question: 'Which band had a 1987 hit with Alone?',
        answers: ['Heart', 'Starship', 'Toto', 'Foreigner'],
        correctAnswer: 'Heart',
        difficulty: 'Medium',
        tags: ['1980s', 'rock', 'songs'],
        dailyEligible: true
    },
    {
        id: 'music_0162',
        category: 'Music',
        question: 'Who was the lead singer of The Cranberries?',
        answers: ['Dolores O’Riordan', 'Andrea Corr', 'Sharon Corr', 'Sinéad O’Connor'],
        correctAnswer: 'Dolores O’Riordan',
        difficulty: 'Easy',
        tags: ['1990s', 'irish', 'bands'],
        dailyEligible: true
    },
    {
        id: 'music_0163',
        category: 'Music',
        question: 'Which band released the 1992 album Automatic for the People?',
        answers: ['R.E.M.', 'Pearl Jam', 'U2', 'Radiohead'],
        correctAnswer: 'R.E.M.',
        difficulty: 'Medium',
        tags: ['1990s', 'albums', 'bands'],
        dailyEligible: true
    },
    {
        id: 'music_0164',
        category: 'Music',
        question: 'Which singer fronted the band Blondie?',
        answers: ['Debbie Harry', 'Chrissie Hynde', 'Patti Smith', 'Siouxsie Sioux'],
        correctAnswer: 'Debbie Harry',
        difficulty: 'Easy',
        tags: ['1970s', '1980s', 'bands'],
        dailyEligible: true
    },
    {
        id: 'music_0165',
        category: 'Music',
        question: 'Which duo recorded the 1985 hit West End Girls?',
        answers: ['Pet Shop Boys', 'Erasure', 'Wham!', 'Soft Cell'],
        correctAnswer: 'Pet Shop Boys',
        difficulty: 'Easy',
        tags: ['1980s', 'british', 'duos'],
        dailyEligible: true
    },
    {
        id: 'music_0166',
        category: 'Music',
        question: 'Which singer released the album Come Away with Me in 2002?',
        answers: ['Norah Jones', 'Dido', 'Katie Melua', 'Sheryl Crow'],
        correctAnswer: 'Norah Jones',
        difficulty: 'Medium',
        tags: ['2000s', 'albums', 'female artists'],
        dailyEligible: true
    },

    // =========================================================
    // TV
    // =========================================================

    {
        id: 'tv_0149',
        category: 'TV',
        question: 'Which actor played Victor Meldrew in One Foot in the Grave?',
        answers: ['Richard Wilson', 'David Jason', 'Richard Briers', 'Peter Egan'],
        correctAnswer: 'Richard Wilson',
        difficulty: 'Easy',
        tags: ['british', 'sitcom', '1990s'],
        dailyEligible: true
    },
    {
        id: 'tv_0150',
        category: 'TV',
        question: 'What is the name of the pub in EastEnders?',
        answers: ['The Queen Victoria', 'The Rovers Return', 'The Woolpack', 'The Nag’s Head'],
        correctAnswer: 'The Queen Victoria',
        difficulty: 'Easy',
        tags: ['british', 'soap', 'eastenders'],
        dailyEligible: true
    },
    {
        id: 'tv_0151',
        category: 'TV',
        question: 'Which sitcom featured café owner René Artois and Officer Crabtree?',
        answers: ['’Allo ’Allo!', 'Dad’s Army', 'Hi-de-Hi!', 'You Rang, M’Lord?'],
        correctAnswer: '’Allo ’Allo!',
        difficulty: 'Medium',
        tags: ['british', 'sitcom', '1980s'],
        dailyEligible: true
    },
    {
        id: 'tv_0152',
        category: 'TV',
        question: 'What is the first name of Bart Simpson’s younger sister?',
        answers: ['Lisa', 'Maggie', 'Marge', 'Patty'],
        correctAnswer: 'Lisa',
        difficulty: 'Easy',
        tags: ['american', 'animation', 'simpsons'],
        dailyEligible: true
    },
    {
        id: 'tv_0153',
        category: 'TV',
        question: 'Which actress played Patsy Stone in Absolutely Fabulous?',
        answers: ['Joanna Lumley', 'Jennifer Saunders', 'June Whitfield', 'Jane Horrocks'],
        correctAnswer: 'Joanna Lumley',
        difficulty: 'Easy',
        tags: ['british', 'sitcom', '1990s'],
        dailyEligible: true
    },
    {
        id: 'tv_0154',
        category: 'TV',
        question: 'Which science-fiction comedy featured Lister, Rimmer, Kryten and Cat?',
        answers: ['Red Dwarf', 'Doctor Who', 'Blake’s 7', 'The Hitchhiker’s Guide to the Galaxy'],
        correctAnswer: 'Red Dwarf',
        difficulty: 'Easy',
        tags: ['british', 'science fiction', 'comedy'],
        dailyEligible: true
    },
    {
        id: 'tv_0155',
        category: 'TV',
        question: 'Which actor played Detective Inspector Jack Frost in A Touch of Frost?',
        answers: ['David Jason', 'John Nettles', 'John Thaw', 'Kevin Whately'],
        correctAnswer: 'David Jason',
        difficulty: 'Easy',
        tags: ['british', 'crime', 'actors'],
        dailyEligible: true
    },
    {
        id: 'tv_0156',
        category: 'TV',
        question: 'What is Sheldon Cooper’s profession in The Big Bang Theory?',
        answers: ['Physicist', 'Chemist', 'Engineer', 'Biologist'],
        correctAnswer: 'Physicist',
        difficulty: 'Easy',
        tags: ['american', 'sitcom', 'big bang theory'],
        dailyEligible: true
    },

    // =========================================================
    // FILM
    // =========================================================

    {
        id: 'film_0123',
        category: 'Film',
        question: 'Which actor played the title character in Crocodile Dundee?',
        answers: ['Paul Hogan', 'Mel Gibson', 'Bryan Brown', 'Hugh Jackman'],
        correctAnswer: 'Paul Hogan',
        difficulty: 'Easy',
        tags: ['1980s', 'actors', 'australian'],
        dailyEligible: true
    },
    {
        id: 'film_0124',
        category: 'Film',
        question: 'Which 1984 film features a supernatural villain called Gozer?',
        answers: ['Ghostbusters', 'Gremlins', 'Beetlejuice', 'Poltergeist'],
        correctAnswer: 'Ghostbusters',
        difficulty: 'Medium',
        tags: ['1980s', 'comedy', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0125',
        category: 'Film',
        question: 'Which actress played the title role in the 2000 film Miss Congeniality?',
        answers: ['Sandra Bullock', 'Reese Witherspoon', 'Julia Roberts', 'Cameron Diaz'],
        correctAnswer: 'Sandra Bullock',
        difficulty: 'Easy',
        tags: ['2000s', 'actors', 'comedy'],
        dailyEligible: true
    },
    {
        id: 'film_0126',
        category: 'Film',
        question: 'Which 1980s film features a character called Ferris Bueller?',
        answers: ['Ferris Bueller’s Day Off', 'The Breakfast Club', 'Pretty in Pink', 'Footloose'],
        correctAnswer: 'Ferris Bueller’s Day Off',
        difficulty: 'Easy',
        tags: ['1980s', 'comedy', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0127',
        category: 'Film',
        question: 'Which actor played Hannibal Lecter in The Silence of the Lambs?',
        answers: ['Anthony Hopkins', 'Jack Nicholson', 'Gene Hackman', 'Robert De Niro'],
        correctAnswer: 'Anthony Hopkins',
        difficulty: 'Easy',
        tags: ['1990s', 'actors', 'thriller'],
        dailyEligible: true
    },
    {
        id: 'film_0128',
        category: 'Film',
        question: 'Which 1997 film starred John Travolta and Nicolas Cage as men who exchange identities?',
        answers: ['Face/Off', 'Con Air', 'Broken Arrow', 'The Rock'],
        correctAnswer: 'Face/Off',
        difficulty: 'Medium',
        tags: ['1990s', 'action', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0129',
        category: 'Film',
        question: 'Which actress played Annie Wilkes in Misery?',
        answers: ['Kathy Bates', 'Jessica Lange', 'Susan Sarandon', 'Glenn Close'],
        correctAnswer: 'Kathy Bates',
        difficulty: 'Medium',
        tags: ['1990s', 'actors', 'thriller'],
        dailyEligible: true
    },
    {
        id: 'film_0130',
        category: 'Film',
        question: 'Which 1993 comedy film stars Bill Murray as a weatherman repeatedly living the same day?',
        answers: ['Groundhog Day', 'Scrooged', 'What About Bob?', 'Multiplicity'],
        correctAnswer: 'Groundhog Day',
        difficulty: 'Easy',
        tags: ['1990s', 'comedy', 'film'],
        dailyEligible: true
    },

    // =========================================================
    // GENERAL KNOWLEDGE
    // =========================================================

    {
        id: 'general_0058',
        category: 'General Knowledge',
        question: 'How many letters are there in the English alphabet?',
        answers: ['26', '24', '25', '28'],
        correctAnswer: '26',
        difficulty: 'Easy',
        tags: ['language', 'numbers'],
        dailyEligible: true
    },
    {
        id: 'general_0059',
        category: 'General Knowledge',
        question: 'In chess, which piece moves only diagonally?',
        answers: ['Bishop', 'Rook', 'Knight', 'King'],
        correctAnswer: 'Bishop',
        difficulty: 'Easy',
        tags: ['games', 'chess'],
        dailyEligible: true
    },
    {
        id: 'general_0060',
        category: 'General Knowledge',
        question: 'Which instrument is used to measure atmospheric pressure?',
        answers: ['Barometer', 'Thermometer', 'Hygrometer', 'Altimeter'],
        correctAnswer: 'Barometer',
        difficulty: 'Medium',
        tags: ['general knowledge', 'instruments'],
        dailyEligible: true
    },

    // =========================================================
    // HISTORY
    // =========================================================

    {
        id: 'history_0054',
        category: 'History',
        question: 'In which year was the Battle of Hastings?',
        answers: ['1066', '1215', '1415', '1485'],
        correctAnswer: '1066',
        difficulty: 'Easy',
        tags: ['british', 'medieval', 'england'],
        dailyEligible: true
    },
    {
        id: 'history_0055',
        category: 'History',
        question: 'Which volcano destroyed Pompeii in AD 79?',
        answers: ['Mount Vesuvius', 'Mount Etna', 'Stromboli', 'Mount Olympus'],
        correctAnswer: 'Mount Vesuvius',
        difficulty: 'Easy',
        tags: ['ancient history', 'rome'],
        dailyEligible: true
    },

    // =========================================================
    // GEOGRAPHY
    // =========================================================

    {
        id: 'geography_0057',
        category: 'Geography',
        question: 'What is the capital of Norway?',
        answers: ['Oslo', 'Stockholm', 'Helsinki', 'Copenhagen'],
        correctAnswer: 'Oslo',
        difficulty: 'Easy',
        tags: ['europe', 'capitals'],
        dailyEligible: true
    },
    {
        id: 'geography_0058',
        category: 'Geography',
        question: 'Which mountain range forms a natural border between France and Spain?',
        answers: ['Pyrenees', 'Alps', 'Carpathians', 'Apennines'],
        correctAnswer: 'Pyrenees',
        difficulty: 'Easy',
        tags: ['europe', 'mountains'],
        dailyEligible: true
    },
    {
        id: 'geography_0059',
        category: 'Geography',
        question: 'Which river flows through Glasgow?',
        answers: ['Clyde', 'Tay', 'Tweed', 'Forth'],
        correctAnswer: 'Clyde',
        difficulty: 'Easy',
        tags: ['british', 'scotland', 'rivers'],
        dailyEligible: true
    },

    // =========================================================
    // SCIENCE & NATURE
    // =========================================================

    {
        id: 'science_0052',
        category: 'Science & Nature',
        question: 'What is the hardest natural substance?',
        answers: ['Diamond', 'Quartz', 'Granite', 'Iron'],
        correctAnswer: 'Diamond',
        difficulty: 'Easy',
        tags: ['geology', 'materials'],
        dailyEligible: true
    },
    {
        id: 'science_0053',
        category: 'Science & Nature',
        question: 'Which planet is famous for its prominent ring system?',
        answers: ['Saturn', 'Mars', 'Venus', 'Mercury'],
        correctAnswer: 'Saturn',
        difficulty: 'Easy',
        tags: ['space', 'planets'],
        dailyEligible: true
    },

    // =========================================================
    // FOOD & DRINK
    // =========================================================

    {
        id: 'food_0034',
        category: 'Food & Drink',
        question: 'Which type of rice is commonly used to make risotto?',
        answers: ['Arborio', 'Basmati', 'Jasmine', 'Wild rice'],
        correctAnswer: 'Arborio',
        difficulty: 'Medium',
        tags: ['italian', 'rice'],
        dailyEligible: true
    },

    // =========================================================
    // SPORT
    // =========================================================

    {
        id: 'sport_0034',
        category: 'Sport',
        question: 'In golf, what name is given to a score of one under par on a hole?',
        answers: ['Birdie', 'Eagle', 'Bogey', 'Albatross'],
        correctAnswer: 'Birdie',
        difficulty: 'Easy',
        tags: ['golf', 'scoring'],
        dailyEligible: true
    },

    // =========================================================
    // LITERATURE
    // =========================================================

    {
        id: 'literature_0033',
        category: 'Literature',
        question: 'Who wrote Charlie and the Chocolate Factory?',
        answers: ['Roald Dahl', 'Michael Morpurgo', 'David Walliams', 'Enid Blyton'],
        correctAnswer: 'Roald Dahl',
        difficulty: 'Easy',
        tags: ['british', 'children', 'authors'],
        dailyEligible: true
    }

];

module.exports = questions;
