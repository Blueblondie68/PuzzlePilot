// quiz_pack19.js
// PuzzlePilot Big Quiz
// Pack 19 - 41 questions
// Corrected after full duplicate review

const questions = [

    // =========================================================
    // MUSIC - 10
    // =========================================================

    {
        id: 'music_0147',
        category: 'Music',
        question: 'Which band had a 1982 hit with Come On Eileen?',
        answers: ['Dexys Midnight Runners', 'Madness', 'The Specials', 'The Jam'],
        correctAnswer: 'Dexys Midnight Runners',
        difficulty: 'Easy',
        tags: ['1980s', 'british', 'bands'],
        dailyEligible: true
    },
    {
        id: 'music_0148',
        category: 'Music',
        question: 'Which singer had a 1984 hit with Love Resurrection?',
        answers: ['Alison Moyet', 'Kim Wilde', 'Hazel O\'Connor', 'Toyah Willcox'],
        correctAnswer: 'Alison Moyet',
        difficulty: 'Medium',
        tags: ['1980s', 'british', 'female artists'],
        dailyEligible: true
    },
    {
        id: 'music_0149',
        category: 'Music',
        question: 'Who was the lead singer of The Police?',
        answers: ['Sting', 'Andy Summers', 'Stewart Copeland', 'Joe Strummer'],
        correctAnswer: 'Sting',
        difficulty: 'Easy',
        tags: ['1970s', '1980s', 'bands'],
        dailyEligible: true
    },
    {
        id: 'music_0150',
        category: 'Music',
        question: 'Which singer had a 1984 hit with Self Control?',
        answers: ['Laura Branigan', 'Pat Benatar', 'Belinda Carlisle', 'Kim Carnes'],
        correctAnswer: 'Laura Branigan',
        difficulty: 'Medium',
        tags: ['1980s', 'female artists', 'songs'],
        dailyEligible: true
    },
    {
        id: 'music_0151',
        category: 'Music',
        question: 'Which group recorded the disco hit YMCA?',
        answers: ['Village People', 'Boney M.', 'Chic', 'Earth, Wind & Fire'],
        correctAnswer: 'Village People',
        difficulty: 'Easy',
        tags: ['1970s', 'disco', 'groups'],
        dailyEligible: true
    },
    {
        id: 'music_0152',
        category: 'Music',
        question: 'Which singer had a 1984 hit with Wouldn\'t It Be Good?',
        answers: ['Nik Kershaw', 'Howard Jones', 'Paul Young', 'Limahl'],
        correctAnswer: 'Nik Kershaw',
        difficulty: 'Medium',
        tags: ['1980s', 'british', 'male artists'],
        dailyEligible: true
    },
    {
        id: 'music_0153',
        category: 'Music',
        question: 'Which singer had a 1981 hit with It\'s a Mystery?',
        answers: ['Toyah Willcox', 'Kim Wilde', 'Hazel O\'Connor', 'Siouxsie Sioux'],
        correctAnswer: 'Toyah Willcox',
        difficulty: 'Medium',
        tags: ['1980s', 'british', 'female artists'],
        dailyEligible: true
    },
    {
        id: 'music_0154',
        category: 'Music',
        question: 'What was Freddie Mercury’s birth name?',
        answers: ['Farrokh Bulsara', 'Frederick Bulsara', 'Farhad Mercury', 'Freddie Farrokh'],
        correctAnswer: 'Farrokh Bulsara',
        difficulty: 'Medium',
        tags: ['queen', 'music', 'artists'],
        dailyEligible: true
    },
    {
        id: 'music_0155',
        category: 'Music',
        question: 'Which British girl group had hits with Push the Button and About You Now?',
        answers: ['Sugababes', 'Girls Aloud', 'All Saints', 'Atomic Kitten'],
        correctAnswer: 'Sugababes',
        difficulty: 'Easy',
        tags: ['2000s', 'british', 'groups'],
        dailyEligible: true
    },
    {
        id: 'music_0156',
        category: 'Music',
        question: 'Which singer released the 1981 hit Bette Davis Eyes?',
        answers: ['Kim Carnes', 'Pat Benatar', 'Bonnie Tyler', 'Stevie Nicks'],
        correctAnswer: 'Kim Carnes',
        difficulty: 'Medium',
        tags: ['1980s', 'female artists', 'songs'],
        dailyEligible: true
    },

    // =========================================================
    // TV - 8
    // =========================================================

    {
        id: 'tv_0141',
        category: 'TV',
        question: 'Which actor played Tom Chance in the sitcom Chance in a Million?',
        answers: ['Simon Callow', 'Richard Briers', 'David Jason', 'Geoffrey Palmer'],
        correctAnswer: 'Simon Callow',
        difficulty: 'Medium',
        tags: ['british', 'sitcom', 'actors'],
        dailyEligible: true
    },
    {
        id: 'tv_0142',
        category: 'TV',
        question: 'What is the surname of Ross and Monica in Friends?',
        answers: ['Geller', 'Bing', 'Green', 'Tribbiani'],
        correctAnswer: 'Geller',
        difficulty: 'Easy',
        tags: ['friends', 'american', 'sitcom'],
        dailyEligible: true
    },
    {
        id: 'tv_0143',
        category: 'TV',
        question: 'Which actress played Bren in the sitcom dinnerladies?',
        answers: ['Victoria Wood', 'Julie Walters', 'Celia Imrie', 'Anne Reid'],
        correctAnswer: 'Victoria Wood',
        difficulty: 'Medium',
        tags: ['british', 'sitcom', 'actors'],
        dailyEligible: true
    },
    {
        id: 'tv_0144',
        category: 'TV',
        question: 'Which department store featured in Are You Being Served?',
        answers: ['Grace Brothers', 'Harrods', 'Selfridges', 'Lewis & Co.'],
        correctAnswer: 'Grace Brothers',
        difficulty: 'Medium',
        tags: ['british', 'sitcom', '1970s'],
        dailyEligible: true
    },
    {
        id: 'tv_0145',
        category: 'TV',
        question: 'Which British sitcom stars Lee Mack as a character called Lee?',
        answers: ['Not Going Out', 'Would I Lie to You?', 'The IT Crowd', 'Coupling'],
        correctAnswer: 'Not Going Out',
        difficulty: 'Easy',
        tags: ['british', 'sitcom', 'comedy'],
        dailyEligible: true
    },
    {
        id: 'tv_0146',
        category: 'TV',
        question: 'Which actress played Alice Tinker in The Vicar of Dibley?',
        answers: ['Emma Chambers', 'Dawn French', 'Liz Smith', 'Pauline McLynn'],
        correctAnswer: 'Emma Chambers',
        difficulty: 'Medium',
        tags: ['british', 'sitcom', 'actors'],
        dailyEligible: true
    },
    {
        id: 'tv_0147',
        category: 'TV',
        question: 'In which fictional English county is Midsomer Murders set?',
        answers: ['Midsomer', 'Kemble', 'Barsetshire', 'Wessex'],
        correctAnswer: 'Midsomer',
        difficulty: 'Medium',
        tags: ['british', 'crime', 'tv'],
        dailyEligible: true
    },
    {
        id: 'tv_0148',
        category: 'TV',
        question: 'Which actor played Arthur Daley in Minder?',
        answers: ['George Cole', 'Dennis Waterman', 'David Jason', 'Bob Hoskins'],
        correctAnswer: 'George Cole',
        difficulty: 'Medium',
        tags: ['british', '1980s', 'actors'],
        dailyEligible: true
    },

    // =========================================================
    // FILM - 8
    // =========================================================

    {
        id: 'film_0115',
        category: 'Film',
        question: 'Which actor played teacher John Keating in Dead Poets Society?',
        answers: ['Robin Williams', 'Tom Hanks', 'Dustin Hoffman', 'Richard Dreyfuss'],
        correctAnswer: 'Robin Williams',
        difficulty: 'Medium',
        tags: ['1980s', 'actors', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0116',
        category: 'Film',
        question: 'Which actress played the mermaid Madison in the 1984 film Splash?',
        answers: ['Daryl Hannah', 'Kim Basinger', 'Kathleen Turner', 'Meg Ryan'],
        correctAnswer: 'Daryl Hannah',
        difficulty: 'Medium',
        tags: ['1980s', 'actors', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0117',
        category: 'Film',
        question: 'Which actress played novelist Joan Wilder in Romancing the Stone?',
        answers: ['Kathleen Turner', 'Daryl Hannah', 'Michelle Pfeiffer', 'Debra Winger'],
        correctAnswer: 'Kathleen Turner',
        difficulty: 'Medium',
        tags: ['1980s', 'actors', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0118',
        category: 'Film',
        question: 'Which actor played Eliot Ness in the 1987 film The Untouchables?',
        answers: ['Kevin Costner', 'Sean Connery', 'Andy Garcia', 'Robert De Niro'],
        correctAnswer: 'Kevin Costner',
        difficulty: 'Medium',
        tags: ['1980s', 'actors', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0119',
        category: 'Film',
        question: 'Which actress played Alex Forrest in the 1987 film Fatal Attraction?',
        answers: ['Glenn Close', 'Sigourney Weaver', 'Jessica Lange', 'Meryl Streep'],
        correctAnswer: 'Glenn Close',
        difficulty: 'Medium',
        tags: ['1980s', 'actors', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0120',
        category: 'Film',
        question: 'Which actor played FBI agent Johnny Utah in the 1991 film Point Break?',
        answers: ['Keanu Reeves', 'Patrick Swayze', 'Val Kilmer', 'Christian Slater'],
        correctAnswer: 'Keanu Reeves',
        difficulty: 'Medium',
        tags: ['1990s', 'actors', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0121',
        category: 'Film',
        question: 'Which actor played Gordon Gekko in the 1987 film Wall Street?',
        answers: ['Michael Douglas', 'Charlie Sheen', 'Tom Berenger', 'William Hurt'],
        correctAnswer: 'Michael Douglas',
        difficulty: 'Medium',
        tags: ['1980s', 'actors', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0122',
        category: 'Film',
        question: 'Which musical film features the song Summer Nights?',
        answers: ['Grease', 'Saturday Night Fever', 'Footloose', 'Fame'],
        correctAnswer: 'Grease',
        difficulty: 'Easy',
        tags: ['1970s', 'musicals', 'film'],
        dailyEligible: true
    },

    // =========================================================
    // GENERAL KNOWLEDGE - 4
    // =========================================================

    {
        id: 'general_0055',
        category: 'General Knowledge',
        question: 'How many cards are there in a standard deck, excluding jokers?',
        answers: ['52', '54', '48', '50'],
        correctAnswer: '52',
        difficulty: 'Easy',
        tags: ['general knowledge', 'cards'],
        dailyEligible: true
    },
    {
        id: 'general_0056',
        category: 'General Knowledge',
        question: 'What do the letters WWW stand for in a website address?',
        answers: ['World Wide Web', 'World Web Window', 'Wide World Web', 'Web World Wide'],
        correctAnswer: 'World Wide Web',
        difficulty: 'Easy',
        tags: ['technology', 'general knowledge'],
        dailyEligible: true
    },
    {
        id: 'general_0057',
        category: 'General Knowledge',
        question: 'How many keys does a standard modern piano have?',
        answers: ['88', '76', '92', '84'],
        correctAnswer: '88',
        difficulty: 'Medium',
        tags: ['music', 'general knowledge'],
        dailyEligible: true
    },
    {
        id: 'general_0058',
        category: 'General Knowledge',
        question: 'How many semitones are there in a standard musical octave?',
        answers: ['12', '8', '10', '14'],
        correctAnswer: '12',
        difficulty: 'Medium',
        tags: ['music', 'general knowledge'],
        dailyEligible: true
    },

    // =========================================================
    // HISTORY - 2
    // =========================================================

    {
        id: 'history_0052',
        category: 'History',
        question: 'Who was British Prime Minister when the Second World War began in 1939?',
        answers: ['Neville Chamberlain', 'Winston Churchill', 'Clement Attlee', 'Stanley Baldwin'],
        correctAnswer: 'Neville Chamberlain',
        difficulty: 'Medium',
        tags: ['british', '20th century', 'politics'],
        dailyEligible: true
    },
    {
        id: 'history_0053',
        category: 'History',
        question: 'Which British monarch reigned immediately before Queen Victoria?',
        answers: ['William IV', 'George IV', 'George III', 'Edward VII'],
        correctAnswer: 'William IV',
        difficulty: 'Medium',
        tags: ['british', 'monarchy', '19th century'],
        dailyEligible: true
    },

    // =========================================================
    // GEOGRAPHY - 3
    // =========================================================

    {
        id: 'geography_0054',
        category: 'Geography',
        question: 'The Giant’s Causeway is located in which part of the United Kingdom?',
        answers: ['Northern Ireland', 'Scotland', 'Wales', 'England'],
        correctAnswer: 'Northern Ireland',
        difficulty: 'Easy',
        tags: ['british', 'landmarks', 'geography'],
        dailyEligible: true
    },
    {
        id: 'geography_0055',
        category: 'Geography',
        question: 'Lake Geneva lies on the border of Switzerland and which other country?',
        answers: ['France', 'Italy', 'Germany', 'Austria'],
        correctAnswer: 'France',
        difficulty: 'Medium',
        tags: ['europe', 'lakes'],
        dailyEligible: true
    },
    {
        id: 'geography_0056',
        category: 'Geography',
        question: 'Which English city is famous for its Roman-built baths?',
        answers: ['Bath', 'York', 'Chester', 'Lincoln'],
        correctAnswer: 'Bath',
        difficulty: 'Easy',
        tags: ['british', 'cities', 'england'],
        dailyEligible: true
    },

    // =========================================================
    // SCIENCE & NATURE - 2
    // =========================================================

    {
        id: 'science_0050',
        category: 'Science & Nature',
        question: 'Which chemical element has the symbol Au?',
        answers: ['Gold', 'Silver', 'Copper', 'Aluminium'],
        correctAnswer: 'Gold',
        difficulty: 'Easy',
        tags: ['chemistry', 'elements'],
        dailyEligible: true
    },
    {
        id: 'science_0051',
        category: 'Science & Nature',
        question: 'Which chemical element has the symbol Fe?',
        answers: ['Iron', 'Fluorine', 'Francium', 'Fermium'],
        correctAnswer: 'Iron',
        difficulty: 'Easy',
        tags: ['chemistry', 'elements'],
        dailyEligible: true
    },

    // =========================================================
    // FOOD & DRINK - 1
    // =========================================================

    {
        id: 'food_0033',
        category: 'Food & Drink',
        question: 'Which dairy ingredient forms the base of traditional tzatziki?',
        answers: ['Yoghurt', 'Cream', 'Soft cheese', 'Buttermilk'],
        correctAnswer: 'Yoghurt',
        difficulty: 'Medium',
        tags: ['food', 'greek'],
        dailyEligible: true
    },

    // =========================================================
    // SPORT - 1
    // =========================================================

    {
        id: 'sport_0033',
        category: 'Sport',
        question: 'On which surface is the Wimbledon tennis tournament played?',
        answers: ['Grass', 'Clay', 'Hard court', 'Carpet'],
        correctAnswer: 'Grass',
        difficulty: 'Easy',
        tags: ['tennis', 'sport'],
        dailyEligible: true
    },

    // =========================================================
    // LITERATURE - 2
    // =========================================================

    {
        id: 'literature_0032',
        category: 'Literature',
        question: 'Who wrote the novel I Capture the Castle?',
        answers: ['Dodie Smith', 'Daphne du Maurier', 'Elizabeth Bowen', 'Nancy Mitford'],
        correctAnswer: 'Dodie Smith',
        difficulty: 'Medium',
        tags: ['british', 'novels', 'authors'],
        dailyEligible: true
    },
    {
        id: 'literature_0033',
        category: 'Literature',
        question: 'Who wrote the novel A Kestrel for a Knave?',
        answers: ['Barry Hines', 'Alan Sillitoe', 'Stan Barstow', 'Keith Waterhouse'],
        correctAnswer: 'Barry Hines',
        difficulty: 'Medium',
        tags: ['british', 'novels', 'authors'],
        dailyEligible: true
    }

];

module.exports = questions;
