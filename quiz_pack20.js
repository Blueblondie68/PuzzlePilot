// quiz_pack20.js
// PuzzlePilot Big Quiz
// Pack 20 - 40 questions

const questions = [

    // =========================================================
    // MUSIC
    // =========================================================

    {
        id: 'music_0157',
        category: 'Music',
        question: 'Which band released the 1979 album The Wall?',
        answers: ['Pink Floyd', 'Led Zeppelin', 'Genesis', 'Yes'],
        correctAnswer: 'Pink Floyd',
        difficulty: 'Easy',
        tags: ['1970s', 'albums', 'bands'],
        dailyEligible: true
    },
    {
        id: 'music_0158',
        category: 'Music',
        question: 'Who sang the 1984 hit What’s Love Got to Do with It?',
        answers: ['Tina Turner', 'Diana Ross', 'Whitney Houston', 'Donna Summer'],
        correctAnswer: 'Tina Turner',
        difficulty: 'Easy',
        tags: ['1980s', 'female artists', 'songs'],
        dailyEligible: true
    },
    {
        id: 'music_0159',
        category: 'Music',
        question: 'Which British band had hits with Town Called Malice and Going Underground?',
        answers: ['The Jam', 'The Clash', 'The Specials', 'The Stranglers'],
        correctAnswer: 'The Jam',
        difficulty: 'Medium',
        tags: ['1970s', '1980s', 'british'],
        dailyEligible: true
    },
    {
        id: 'music_0160',
        category: 'Music',
        question: 'Which singer released the album Like a Prayer in 1989?',
        answers: ['Madonna', 'Cher', 'Cyndi Lauper', 'Janet Jackson'],
        correctAnswer: 'Madonna',
        difficulty: 'Easy',
        tags: ['1980s', 'albums', 'female artists'],
        dailyEligible: true
    },
    {
        id: 'music_0161',
        category: 'Music',
        question: 'Which group had a hit with The Final Countdown?',
        answers: ['Europe', 'Journey', 'Foreigner', 'Survivor'],
        correctAnswer: 'Europe',
        difficulty: 'Easy',
        tags: ['1980s', 'rock', 'songs'],
        dailyEligible: true
    },
    {
        id: 'music_0162',
        category: 'Music',
        question: 'Who was the lead singer of The Cranberries?',
        answers: ['Dolores O’Riordan', 'Sinéad O’Connor', 'Andrea Corr', 'Sharon Corr'],
        correctAnswer: 'Dolores O’Riordan',
        difficulty: 'Medium',
        tags: ['1990s', 'bands', 'female artists'],
        dailyEligible: true
    },
    {
        id: 'music_0163',
        category: 'Music',
        question: 'Which band released the 1991 album Out of Time?',
        answers: ['R.E.M.', 'Nirvana', 'Pearl Jam', 'U2'],
        correctAnswer: 'R.E.M.',
        difficulty: 'Medium',
        tags: ['1990s', 'albums', 'bands'],
        dailyEligible: true
    },
    {
        id: 'music_0164',
        category: 'Music',
        question: 'Which singer had a 1979 hit with Heart of Glass as a member of Blondie?',
        answers: ['Debbie Harry', 'Patti Smith', 'Chrissie Hynde', 'Stevie Nicks'],
        correctAnswer: 'Debbie Harry',
        difficulty: 'Easy',
        tags: ['1970s', 'blondie', 'female artists'],
        dailyEligible: true
    },
    {
        id: 'music_0165',
        category: 'Music',
        question: 'Which British group released the song West End Girls?',
        answers: ['Pet Shop Boys', 'Erasure', 'Soft Cell', 'New Order'],
        correctAnswer: 'Pet Shop Boys',
        difficulty: 'Easy',
        tags: ['1980s', 'british', 'duos'],
        dailyEligible: true
    },
    {
        id: 'music_0166',
        category: 'Music',
        question: 'Which singer released the 2002 album Come Away with Me?',
        answers: ['Norah Jones', 'Alicia Keys', 'Dido', 'Katie Melua'],
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
        answers: ['Richard Wilson', 'David Jason', 'Geoffrey Palmer', 'Peter Egan'],
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
        question: 'Which sitcom featured the characters René Artois and Officer Crabtree?',
        answers: ['’Allo ’Allo!', 'Dad’s Army', 'Hi-de-Hi!', 'It Ain’t Half Hot Mum'],
        correctAnswer: '’Allo ’Allo!',
        difficulty: 'Medium',
        tags: ['british', 'sitcom', '1980s'],
        dailyEligible: true
    },
    {
        id: 'tv_0152',
        category: 'TV',
        question: 'In The Simpsons, what is the name of the family’s next-door neighbour?',
        answers: ['Ned Flanders', 'Barney Gumble', 'Seymour Skinner', 'Moe Szyslak'],
        correctAnswer: 'Ned Flanders',
        difficulty: 'Easy',
        tags: ['american', 'animation', 'the simpsons'],
        dailyEligible: true
    },
    {
        id: 'tv_0153',
        category: 'TV',
        question: 'Which actress played Patsy Stone in Absolutely Fabulous?',
        answers: ['Joanna Lumley', 'Jennifer Saunders', 'Dawn French', 'Jane Horrocks'],
        correctAnswer: 'Joanna Lumley',
        difficulty: 'Easy',
        tags: ['british', 'sitcom', '1990s'],
        dailyEligible: true
    },
    {
        id: 'tv_0154',
        category: 'TV',
        question: 'Which science-fiction series featured the characters Lister, Rimmer, Cat and Kryten?',
        answers: ['Red Dwarf', 'Blake’s 7', 'Doctor Who', 'Torchwood'],
        correctAnswer: 'Red Dwarf',
        difficulty: 'Easy',
        tags: ['british', 'science fiction', 'comedy'],
        dailyEligible: true
    },
    {
        id: 'tv_0155',
        category: 'TV',
        question: 'Which actor played Detective Inspector Jack Frost in A Touch of Frost?',
        answers: ['David Jason', 'John Thaw', 'John Nettles', 'David Suchet'],
        correctAnswer: 'David Jason',
        difficulty: 'Easy',
        tags: ['british', 'crime', '1990s'],
        dailyEligible: true
    },
    {
        id: 'tv_0156',
        category: 'TV',
        question: 'In The Big Bang Theory, what is Sheldon Cooper’s profession?',
        answers: ['Physicist', 'Chemist', 'Engineer', 'Biologist'],
        correctAnswer: 'Physicist',
        difficulty: 'Easy',
        tags: ['american', 'sitcom', '2000s'],
        dailyEligible: true
    },

    // =========================================================
    // FILM
    // =========================================================

    {
        id: 'film_0123',
        category: 'Film',
        question: 'Which actor played the title role in Crocodile Dundee?',
        answers: ['Paul Hogan', 'Mel Gibson', 'Bryan Brown', 'Sam Neill'],
        correctAnswer: 'Paul Hogan',
        difficulty: 'Easy',
        tags: ['1980s', 'comedy', 'actors'],
        dailyEligible: true
    },
    {
        id: 'film_0124',
        category: 'Film',
        question: 'Which film features a hotel caretaker named Jack Torrance?',
        answers: ['The Shining', 'Misery', 'Psycho', 'The Exorcist'],
        correctAnswer: 'The Shining',
        difficulty: 'Medium',
        tags: ['1980s', 'horror', 'characters'],
        dailyEligible: true
    },
    {
        id: 'film_0125',
        category: 'Film',
        question: 'Who played the lead role of Elle Woods in Legally Blonde?',
        answers: ['Reese Witherspoon', 'Cameron Diaz', 'Jennifer Aniston', 'Renée Zellweger'],
        correctAnswer: 'Reese Witherspoon',
        difficulty: 'Easy',
        tags: ['2000s', 'comedy', 'actors'],
        dailyEligible: true
    },
    {
        id: 'film_0126',
        category: 'Film',
        question: 'Which 1984 film features the characters Peter Venkman, Ray Stantz and Egon Spengler?',
        answers: ['Ghostbusters', 'Gremlins', 'Beetlejuice', 'The Goonies'],
        correctAnswer: 'Ghostbusters',
        difficulty: 'Easy',
        tags: ['1980s', 'comedy', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0127',
        category: 'Film',
        question: 'Who played Hannibal Lecter in The Silence of the Lambs?',
        answers: ['Anthony Hopkins', 'Jack Nicholson', 'Robert De Niro', 'Jeremy Irons'],
        correctAnswer: 'Anthony Hopkins',
        difficulty: 'Easy',
        tags: ['1990s', 'actors', 'thriller'],
        dailyEligible: true
    },
    {
        id: 'film_0128',
        category: 'Film',
        question: 'Which 1997 film stars Nicolas Cage and John Travolta as enemies who exchange faces?',
        answers: ['Face/Off', 'Con Air', 'The Rock', 'Broken Arrow'],
        correctAnswer: 'Face/Off',
        difficulty: 'Medium',
        tags: ['1990s', 'action', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0129',
        category: 'Film',
        question: 'Which actress played Annie Wilkes in the film Misery?',
        answers: ['Kathy Bates', 'Glenn Close', 'Susan Sarandon', 'Jessica Lange'],
        correctAnswer: 'Kathy Bates',
        difficulty: 'Medium',
        tags: ['1990s', 'actors', 'thriller'],
        dailyEligible: true
    },
    {
        id: 'film_0130',
        category: 'Film',
        question: 'Which film follows the adventures of a young lion named Simba?',
        answers: ['The Lion King', 'The Jungle Book', 'Madagascar', 'Tarzan'],
        correctAnswer: 'The Lion King',
        difficulty: 'Easy',
        tags: ['1990s', 'animation', 'film'],
        dailyEligible: true
    },

    // =========================================================
    // GENERAL KNOWLEDGE
    // =========================================================

    {
        id: 'general_0058',
        category: 'General Knowledge',
        question: 'How many letters are there in the English alphabet?',
        answers: ['26', '24', '25', '27'],
        correctAnswer: '26',
        difficulty: 'Easy',
        tags: ['language', 'numbers'],
        dailyEligible: true
    },
    {
        id: 'general_0059',
        category: 'General Knowledge',
        question: 'Which chess piece can only move diagonally?',
        answers: ['Bishop', 'Rook', 'Knight', 'Queen'],
        correctAnswer: 'Bishop',
        difficulty: 'Easy',
        tags: ['games', 'chess'],
        dailyEligible: true
    },
    {
        id: 'general_0060',
        category: 'General Knowledge',
        question: 'What is the traditional birthstone for the month of April?',
        answers: ['Diamond', 'Ruby', 'Emerald', 'Sapphire'],
        correctAnswer: 'Diamond',
        difficulty: 'Medium',
        tags: ['gems', 'traditions'],
        dailyEligible: true
    },

    // =========================================================
    // HISTORY
    // =========================================================

    {
        id: 'history_0054',
        category: 'History',
        question: 'Which battle in 1066 resulted in William the Conqueror becoming King of England?',
        answers: ['Battle of Hastings', 'Battle of Bosworth', 'Battle of Agincourt', 'Battle of Bannockburn'],
        correctAnswer: 'Battle of Hastings',
        difficulty: 'Easy',
        tags: ['british', 'medieval', '1066'],
        dailyEligible: true
    },
    {
        id: 'history_0055',
        category: 'History',
        question: 'Which city was buried by the eruption of Mount Vesuvius in AD 79?',
        answers: ['Pompeii', 'Athens', 'Sparta', 'Carthage'],
        correctAnswer: 'Pompeii',
        difficulty: 'Easy',
        tags: ['ancient history', 'roman'],
        dailyEligible: true
    },

    // =========================================================
    // GEOGRAPHY
    // =========================================================

    {
        id: 'geography_0057',
        category: 'Geography',
        question: 'What is the capital city of New Zealand?',
        answers: ['Wellington', 'Auckland', 'Christchurch', 'Hamilton'],
        correctAnswer: 'Wellington',
        difficulty: 'Easy',
        tags: ['capitals', 'oceania'],
        dailyEligible: true
    },
    {
        id: 'geography_0058',
        category: 'Geography',
        question: 'Which mountain range separates France and Spain?',
        answers: ['Pyrenees', 'Alps', 'Carpathians', 'Apennines'],
        correctAnswer: 'Pyrenees',
        difficulty: 'Medium',
        tags: ['europe', 'mountains'],
        dailyEligible: true
    },
    {
        id: 'geography_0059',
        category: 'Geography',
        question: 'Which Scottish city stands on the River Clyde?',
        answers: ['Glasgow', 'Edinburgh', 'Aberdeen', 'Dundee'],
        correctAnswer: 'Glasgow',
        difficulty: 'Easy',
        tags: ['british', 'scotland', 'cities'],
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
        tags: ['materials', 'science'],
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
        question: 'Which type of rice is traditionally used to make risotto?',
        answers: ['Arborio', 'Basmati', 'Jasmine', 'Wild rice'],
        correctAnswer: 'Arborio',
        difficulty: 'Medium',
        tags: ['italian', 'cooking'],
        dailyEligible: true
    },

    // =========================================================
    // SPORT
    // =========================================================

    {
        id: 'sport_0034',
        category: 'Sport',
        question: 'In tennis, what word is used for a score of zero?',
        answers: ['Love', 'Nil', 'Blank', 'Duck'],
        correctAnswer: 'Love',
        difficulty: 'Easy',
        tags: ['tennis', 'rules'],
        dailyEligible: true
    },

    // =========================================================
    // LITERATURE
    // =========================================================

    {
        id: 'literature_0033',
        category: 'Literature',
        question: 'Who wrote Charlie and the Chocolate Factory?',
        answers: ['Roald Dahl', 'Enid Blyton', 'Michael Morpurgo', 'David Walliams'],
        correctAnswer: 'Roald Dahl',
        difficulty: 'Easy',
        tags: ['british', 'children', 'authors'],
        dailyEligible: true
    }

];

module.exports = questions;
