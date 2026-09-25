// quiz_pack20.js
// PuzzlePilot Big Quiz
// Pack 20 - 40 questions
// Corrected after full duplicate review

const questions = [

    // =========================================================
    // MUSIC - 10
    // =========================================================

    {
        id: 'music_0157',
        category: 'Music',
        question: 'Which singer had a 1984 hit with Smalltown Boy?',
        answers: ['Bronski Beat', 'Erasure', 'Soft Cell', 'The Human League'],
        correctAnswer: 'Bronski Beat',
        difficulty: 'Medium',
        tags: ['1980s', 'british', 'songs'],
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
        question: 'Which British band recorded the 1982 hit Town Called Malice?',
        answers: ['The Jam', 'The Clash', 'Madness', 'The Specials'],
        correctAnswer: 'The Jam',
        difficulty: 'Easy',
        tags: ['1980s', 'british', 'bands'],
        dailyEligible: true
    },
    {
        id: 'music_0160',
        category: 'Music',
        question: 'Which singer released the 1989 album Like a Prayer?',
        answers: ['Madonna', 'Cher', 'Cyndi Lauper', 'Janet Jackson'],
        correctAnswer: 'Madonna',
        difficulty: 'Easy',
        tags: ['1980s', 'albums', 'female artists'],
        dailyEligible: true
    },
    {
        id: 'music_0161',
        category: 'Music',
        question: 'Which American rock band had a 1987 hit with Alone?',
        answers: ['Heart', 'Starship', 'Journey', 'Foreigner'],
        correctAnswer: 'Heart',
        difficulty: 'Medium',
        tags: ['1980s', 'rock', 'bands'],
        dailyEligible: true
    },
    {
        id: 'music_0162',
        category: 'Music',
        question: 'Who was the lead singer of The Cranberries?',
        answers: ['Dolores O’Riordan', 'Sinéad O’Connor', 'Andrea Corr', 'Sharon Corr'],
        correctAnswer: 'Dolores O’Riordan',
        difficulty: 'Easy',
        tags: ['1990s', 'irish', 'bands'],
        dailyEligible: true
    },
    {
        id: 'music_0163',
        category: 'Music',
        question: 'Which band released the 1992 album Automatic for the People?',
        answers: ['R.E.M.', 'U2', 'Radiohead', 'Pearl Jam'],
        correctAnswer: 'R.E.M.',
        difficulty: 'Medium',
        tags: ['1990s', 'albums', 'bands'],
        dailyEligible: true
    },
    {
        id: 'music_0164',
        category: 'Music',
        question: 'Who was the lead singer of Blondie?',
        answers: ['Debbie Harry', 'Patti Smith', 'Chrissie Hynde', 'Joan Jett'],
        correctAnswer: 'Debbie Harry',
        difficulty: 'Easy',
        tags: ['1970s', '1980s', 'bands'],
        dailyEligible: true
    },
    {
        id: 'music_0165',
        category: 'Music',
        question: 'Which singer had a 1987 hit with Luka?',
        answers: ['Suzanne Vega', 'Tracy Chapman', 'Tanita Tikaram', 'Tori Amos'],
        correctAnswer: 'Suzanne Vega',
        difficulty: 'Medium',
        tags: ['1980s', 'female artists', 'songs'],
        dailyEligible: true
    },
    {
        id: 'music_0166',
        category: 'Music',
        question: 'Which singer released the 2002 album Come Away with Me?',
        answers: ['Norah Jones', 'Dido', 'Katie Melua', 'Sheryl Crow'],
        correctAnswer: 'Norah Jones',
        difficulty: 'Easy',
        tags: ['2000s', 'albums', 'female artists'],
        dailyEligible: true
    },

    // =========================================================
    // TV - 8
    // =========================================================

    {
        id: 'tv_0149',
        category: 'TV',
        question: 'Which actor played Jim Royle in The Royle Family?',
        answers: ['Ricky Tomlinson', 'Craig Cash', 'Geoffrey Hughes', 'Ralf Little'],
        correctAnswer: 'Ricky Tomlinson',
        difficulty: 'Easy',
        tags: ['british', 'sitcom', 'actors'],
        dailyEligible: true
    },
    {
        id: 'tv_0150',
        category: 'TV',
        question: 'Which British sitcom featured Tom and Barbara Good attempting to live self-sufficiently?',
        answers: ['The Good Life', 'Ever Decreasing Circles', 'To the Manor Born', 'Butterflies'],
        correctAnswer: 'The Good Life',
        difficulty: 'Easy',
        tags: ['british', 'sitcom', '1970s'],
        dailyEligible: true
    },
    {
        id: 'tv_0151',
        category: 'TV',
        question: 'Which comedy series featured café owner René Artois?',
        answers: ['’Allo ’Allo!', 'Dad’s Army', 'It Ain’t Half Hot Mum', 'Hi-de-Hi!'],
        correctAnswer: '’Allo ’Allo!',
        difficulty: 'Medium',
        tags: ['british', 'sitcom', '1980s'],
        dailyEligible: true
    },
    {
        id: 'tv_0152',
        category: 'TV',
        question: 'What is the first name of Bart Simpson’s mother?',
        answers: ['Marge', 'Maggie', 'Lisa', 'Patty'],
        correctAnswer: 'Marge',
        difficulty: 'Easy',
        tags: ['american', 'animation', 'the simpsons'],
        dailyEligible: true
    },
    {
        id: 'tv_0153',
        category: 'TV',
        question: 'Which actress played Edina Monsoon in Absolutely Fabulous?',
        answers: ['Jennifer Saunders', 'Joanna Lumley', 'Dawn French', 'June Whitfield'],
        correctAnswer: 'Jennifer Saunders',
        difficulty: 'Easy',
        tags: ['british', 'sitcom', 'actors'],
        dailyEligible: true
    },
    {
        id: 'tv_0154',
        category: 'TV',
        question: 'Which science-fiction comedy series features Lister, Rimmer, Kryten and Cat?',
        answers: ['Red Dwarf', 'Doctor Who', 'The Hitchhiker’s Guide to the Galaxy', 'Hyperdrive'],
        correctAnswer: 'Red Dwarf',
        difficulty: 'Easy',
        tags: ['british', 'science fiction', 'comedy'],
        dailyEligible: true
    },
    {
        id: 'tv_0155',
        category: 'TV',
        question: 'Which actress played Sybil Fawlty in Fawlty Towers?',
        answers: ['Prunella Scales', 'Connie Booth', 'Penelope Keith', 'Patricia Routledge'],
        correctAnswer: 'Prunella Scales',
        difficulty: 'Easy',
        tags: ['british', 'sitcom', 'actors'],
        dailyEligible: true
    },
    {
        id: 'tv_0156',
        category: 'TV',
        question: 'What is Sheldon Cooper’s profession in The Big Bang Theory?',
        answers: ['Physicist', 'Chemist', 'Engineer', 'Doctor'],
        correctAnswer: 'Physicist',
        difficulty: 'Easy',
        tags: ['american', 'sitcom', 'characters'],
        dailyEligible: true
    },

    // =========================================================
    // FILM - 8
    // =========================================================

    {
        id: 'film_0123',
        category: 'Film',
        question: 'Which actor played Mick Dundee in Crocodile Dundee?',
        answers: ['Paul Hogan', 'Mel Gibson', 'Bryan Brown', 'Sam Neill'],
        correctAnswer: 'Paul Hogan',
        difficulty: 'Easy',
        tags: ['1980s', 'actors', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0124',
        category: 'Film',
        question: 'Which 1987 film starred Patrick Swayze as dance instructor Johnny Castle?',
        answers: ['Dirty Dancing', 'Road House', 'Ghost', 'Footloose'],
        correctAnswer: 'Dirty Dancing',
        difficulty: 'Easy',
        tags: ['1980s', 'film', 'romance'],
        dailyEligible: true
    },
    {
        id: 'film_0125',
        category: 'Film',
        question: 'Which actress played Vivian Ward in Pretty Woman?',
        answers: ['Julia Roberts', 'Meg Ryan', 'Sandra Bullock', 'Demi Moore'],
        correctAnswer: 'Julia Roberts',
        difficulty: 'Easy',
        tags: ['1990s', 'actors', 'romantic comedy'],
        dailyEligible: true
    },
    {
        id: 'film_0126',
        category: 'Film',
        question: 'Which 1986 comedy follows a teenager who skips school for a day in Chicago?',
        answers: ['Ferris Bueller’s Day Off', 'The Breakfast Club', 'Pretty in Pink', 'Sixteen Candles'],
        correctAnswer: 'Ferris Bueller’s Day Off',
        difficulty: 'Easy',
        tags: ['1980s', 'comedy', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0127',
        category: 'Film',
        question: 'Which actor played Norman Bates in the 1960 film Psycho?',
        answers: ['Anthony Perkins', 'Gregory Peck', 'James Stewart', 'Tony Curtis'],
        correctAnswer: 'Anthony Perkins',
        difficulty: 'Medium',
        tags: ['1960s', 'actors', 'thriller'],
        dailyEligible: true
    },
    {
        id: 'film_0128',
        category: 'Film',
        question: 'Which film stars John Travolta and Nicolas Cage as enemies who exchange identities?',
        answers: ['Face/Off', 'Con Air', 'Broken Arrow', 'The Rock'],
        correctAnswer: 'Face/Off',
        difficulty: 'Easy',
        tags: ['1990s', 'action', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0129',
        category: 'Film',
        question: 'Which actress played Rose DeWitt Bukater in Titanic?',
        answers: ['Kate Winslet', 'Nicole Kidman', 'Cate Blanchett', 'Gwyneth Paltrow'],
        correctAnswer: 'Kate Winslet',
        difficulty: 'Easy',
        tags: ['1990s', 'actors', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0130',
        category: 'Film',
        question: 'Which 1993 comedy stars Bill Murray as a weatherman forced to relive the same day?',
        answers: ['Groundhog Day', 'Scrooged', 'What About Bob?', 'Multiplicity'],
        correctAnswer: 'Groundhog Day',
        difficulty: 'Easy',
        tags: ['1990s', 'comedy', 'film'],
        dailyEligible: true
    },

    // =========================================================
    // GENERAL KNOWLEDGE - 3
    // =========================================================

    {
        id: 'general_0059',
        category: 'General Knowledge',
        question: 'Which board game includes rooms such as the Conservatory, Library and Billiard Room?',
        answers: ['Cluedo', 'Monopoly', 'Scrabble', 'Risk'],
        correctAnswer: 'Cluedo',
        difficulty: 'Easy',
        tags: ['games', 'general knowledge'],
        dailyEligible: true
    },
    {
        id: 'general_0060',
        category: 'General Knowledge',
        question: 'How many pence are there in one British pound?',
        answers: ['100', '50', '20', '10'],
        correctAnswer: '100',
        difficulty: 'Easy',
        tags: ['british', 'money', 'general knowledge'],
        dailyEligible: true
    },
    {
        id: 'general_0061',
        category: 'General Knowledge',
        question: 'Which month gains an extra day during a leap year?',
        answers: ['February', 'January', 'March', 'April'],
        correctAnswer: 'February',
        difficulty: 'Easy',
        tags: ['calendar', 'general knowledge'],
        dailyEligible: true
    },

    // =========================================================
    // HISTORY - 2
    // =========================================================

    {
        id: 'history_0054',
        category: 'History',
        question: 'Which English king was defeated at the Battle of Bosworth Field in 1485?',
        answers: ['Richard III', 'Henry VI', 'Edward IV', 'John'],
        correctAnswer: 'Richard III',
        difficulty: 'Medium',
        tags: ['british', 'monarchy', 'medieval'],
        dailyEligible: true
    },
    {
        id: 'history_0055',
        category: 'History',
        question: 'Which nurse became famous for her work during the Crimean War?',
        answers: ['Florence Nightingale', 'Edith Cavell', 'Mary Seacole', 'Clara Barton'],
        correctAnswer: 'Florence Nightingale',
        difficulty: 'Easy',
        tags: ['british', '19th century', 'people'],
        dailyEligible: true
    },

    // =========================================================
    // GEOGRAPHY - 3
    // =========================================================

    {
        id: 'geography_0057',
        category: 'Geography',
        question: 'Which European capital city is home to the Acropolis?',
        answers: ['Athens', 'Rome', 'Sofia', 'Nicosia'],
        correctAnswer: 'Athens',
        difficulty: 'Easy',
        tags: ['europe', 'capitals', 'landmarks'],
        dailyEligible: true
    },
    {
        id: 'geography_0058',
        category: 'Geography',
        question: 'Which sea lies between Great Britain and Scandinavia?',
        answers: ['North Sea', 'Baltic Sea', 'Irish Sea', 'Mediterranean Sea'],
        correctAnswer: 'North Sea',
        difficulty: 'Easy',
        tags: ['europe', 'seas', 'geography'],
        dailyEligible: true
    },
    {
        id: 'geography_0059',
        category: 'Geography',
        question: 'Which Welsh city is the capital of Wales?',
        answers: ['Cardiff', 'Swansea', 'Newport', 'Bangor'],
        correctAnswer: 'Cardiff',
        difficulty: 'Easy',
        tags: ['british', 'wales', 'capitals'],
        dailyEligible: true
    },

    // =========================================================
    // SCIENCE & NATURE - 2
    // =========================================================

    {
        id: 'science_0052',
        category: 'Science & Nature',
        question: 'Which part of a plant carries out most photosynthesis?',
        answers: ['Leaves', 'Roots', 'Flowers', 'Seeds'],
        correctAnswer: 'Leaves',
        difficulty: 'Easy',
        tags: ['biology', 'plants'],
        dailyEligible: true
    },
    {
        id: 'science_0053',
        category: 'Science & Nature',
        question: 'What is the largest organ of the human body?',
        answers: ['Skin', 'Liver', 'Heart', 'Lungs'],
        correctAnswer: 'Skin',
        difficulty: 'Easy',
        tags: ['biology', 'human body'],
        dailyEligible: true
    },

    // =========================================================
    // FOOD & DRINK - 1
    // =========================================================

    {
        id: 'food_0034',
        category: 'Food & Drink',
        question: 'Which cheese is traditionally used in a Greek salad?',
        answers: ['Feta', 'Brie', 'Cheddar', 'Gouda'],
        correctAnswer: 'Feta',
        difficulty: 'Easy',
        tags: ['food', 'cheese'],
        dailyEligible: true
    },

    // =========================================================
    // SPORT - 1
    // =========================================================

    {
        id: 'sport_0034',
        category: 'Sport',
        question: 'Which sport uses the terms love, deuce and ace?',
        answers: ['Tennis', 'Badminton', 'Squash', 'Table tennis'],
        correctAnswer: 'Tennis',
        difficulty: 'Easy',
        tags: ['tennis', 'sport'],
        dailyEligible: true
    },

    // =========================================================
    // LITERATURE - 2
    // =========================================================

    {
        id: 'literature_0034',
        category: 'Literature',
        question: 'Who wrote The Railway Children?',
        answers: ['E. Nesbit', 'Frances Hodgson Burnett', 'Enid Blyton', 'Louisa May Alcott'],
        correctAnswer: 'E. Nesbit',
        difficulty: 'Medium',
        tags: ['british', 'children', 'authors'],
        dailyEligible: true
    },
    {
        id: 'literature_0035',
        category: 'Literature',
        question: 'Which author wrote The Secret Garden?',
        answers: ['Frances Hodgson Burnett', 'E. Nesbit', 'Beatrix Potter', 'Anna Sewell'],
        correctAnswer: 'Frances Hodgson Burnett',
        difficulty: 'Easy',
        tags: ['classic literature', 'children', 'authors'],
        dailyEligible: true
    }

];

module.exports = questions;
