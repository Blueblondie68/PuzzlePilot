// quiz_pack18.js
// PuzzlePilot Big Quiz
// Pack 18 - 40 questions

const questions = [

    // =========================================================
    // MUSIC
    // =========================================================

    {
        id: 'music_0137',
        category: 'Music',
        question: 'Which band released the 1977 album Rumours?',
        answers: ['Fleetwood Mac', 'Eagles', 'ABBA', 'Queen'],
        correctAnswer: 'Fleetwood Mac',
        difficulty: 'Easy',
        tags: ['1970s', 'albums', 'bands'],
        dailyEligible: true
    },
    {
        id: 'music_0138',
        category: 'Music',
        question: 'Which singer had a 1987 hit with Never Gonna Give You Up?',
        answers: ['Rick Astley', 'Jason Donovan', 'Nik Kershaw', 'Paul Young'],
        correctAnswer: 'Rick Astley',
        difficulty: 'Easy',
        tags: ['1980s', 'british', 'pop'],
        dailyEligible: true
    },
    {
        id: 'music_0139',
        category: 'Music',
        question: 'Which group recorded the song California Dreamin’?',
        answers: ['The Mamas & the Papas', 'The Beach Boys', 'The Monkees', 'The Byrds'],
        correctAnswer: 'The Mamas & the Papas',
        difficulty: 'Medium',
        tags: ['1960s', 'groups', 'songs'],
        dailyEligible: true
    },
    {
        id: 'music_0140',
        category: 'Music',
        question: 'Who released the album Jagged Little Pill in 1995?',
        answers: ['Alanis Morissette', 'Sheryl Crow', 'Natalie Imbruglia', 'Tori Amos'],
        correctAnswer: 'Alanis Morissette',
        difficulty: 'Easy',
        tags: ['1990s', 'albums', 'female artists'],
        dailyEligible: true
    },
    {
        id: 'music_0141',
        category: 'Music',
        question: 'Which British band had hits with Rio and Hungry Like the Wolf?',
        answers: ['Duran Duran', 'Spandau Ballet', 'Ultravox', 'Culture Club'],
        correctAnswer: 'Duran Duran',
        difficulty: 'Easy',
        tags: ['1980s', 'british', 'bands'],
        dailyEligible: true
    },
    {
        id: 'music_0142',
        category: 'Music',
        question: 'Who was the lead singer of the band T. Rex?',
        answers: ['Marc Bolan', 'Bryan Ferry', 'David Essex', 'Steve Harley'],
        correctAnswer: 'Marc Bolan',
        difficulty: 'Medium',
        tags: ['1970s', 'british', 'glam rock'],
        dailyEligible: true
    },
    {
        id: 'music_0143',
        category: 'Music',
        question: 'Which singer released the 2006 hit Rehab?',
        answers: ['Amy Winehouse', 'Duffy', 'Adele', 'Lily Allen'],
        correctAnswer: 'Amy Winehouse',
        difficulty: 'Easy',
        tags: ['2000s', 'british', 'female artists'],
        dailyEligible: true
    },
    {
        id: 'music_0144',
        category: 'Music',
        question: 'Which duo consisted of George Michael and Andrew Ridgeley?',
        answers: ['Wham!', 'Erasure', 'Pet Shop Boys', 'Soft Cell'],
        correctAnswer: 'Wham!',
        difficulty: 'Easy',
        tags: ['1980s', 'british', 'duos'],
        dailyEligible: true
    },
    {
        id: 'music_0145',
        category: 'Music',
        question: 'Which singer had a hit with Walking on Sunshine in 1985?',
        answers: ['Katrina and the Waves', 'Kim Wilde', 'Belinda Carlisle', 'Cyndi Lauper'],
        correctAnswer: 'Katrina and the Waves',
        difficulty: 'Medium',
        tags: ['1980s', 'songs', 'pop'],
        dailyEligible: true
    },
    {
        id: 'music_0146',
        category: 'Music',
        question: 'Which band released the 1994 album Parklife?',
        answers: ['Blur', 'Oasis', 'Pulp', 'Suede'],
        correctAnswer: 'Blur',
        difficulty: 'Easy',
        tags: ['1990s', 'britpop', 'albums'],
        dailyEligible: true
    },

    // =========================================================
    // TV
    // =========================================================

    {
        id: 'tv_0133',
        category: 'TV',
        question: 'Which actor played Del Boy in Only Fools and Horses?',
        answers: ['David Jason', 'Nicholas Lyndhurst', 'John Sullivan', 'Roger Lloyd-Pack'],
        correctAnswer: 'David Jason',
        difficulty: 'Easy',
        tags: ['british', 'sitcom', '1980s'],
        dailyEligible: true
    },
    {
        id: 'tv_0134',
        category: 'TV',
        question: 'What is the name of the pub in Coronation Street?',
        answers: ['The Rovers Return', 'The Queen Vic', 'The Woolpack', 'The Dog in the Pond'],
        correctAnswer: 'The Rovers Return',
        difficulty: 'Easy',
        tags: ['british', 'soap', 'coronation street'],
        dailyEligible: true
    },
    {
        id: 'tv_0135',
        category: 'TV',
        question: 'Which US sitcom featured the characters Sam Malone and Diane Chambers?',
        answers: ['Cheers', 'Frasier', 'Taxi', 'Seinfeld'],
        correctAnswer: 'Cheers',
        difficulty: 'Medium',
        tags: ['american', 'sitcom', '1980s'],
        dailyEligible: true
    },
    {
        id: 'tv_0136',
        category: 'TV',
        question: 'Which actress played Hyacinth Bucket in Keeping Up Appearances?',
        answers: ['Patricia Routledge', 'Penelope Keith', 'Judi Dench', 'Prunella Scales'],
        correctAnswer: 'Patricia Routledge',
        difficulty: 'Easy',
        tags: ['british', 'sitcom', '1990s'],
        dailyEligible: true
    },
    {
        id: 'tv_0137',
        category: 'TV',
        question: 'In Friends, what is Chandler Bing’s middle name?',
        answers: ['Muriel', 'Michael', 'Matthew', 'Marcel'],
        correctAnswer: 'Muriel',
        difficulty: 'Medium',
        tags: ['friends', 'american', 'sitcom'],
        dailyEligible: true
    },
    {
        id: 'tv_0138',
        category: 'TV',
        question: 'Which British comedy series was set in the fictional seaside resort of Walmington-on-Sea?',
        answers: ['Dad’s Army', 'Hi-de-Hi!', 'It Ain’t Half Hot Mum', 'Are You Being Served?'],
        correctAnswer: 'Dad’s Army',
        difficulty: 'Medium',
        tags: ['british', 'comedy', 'classic tv'],
        dailyEligible: true
    },
    {
        id: 'tv_0139',
        category: 'TV',
        question: 'Which actor played the title character in the TV detective series Columbo?',
        answers: ['Peter Falk', 'Telly Savalas', 'Jack Klugman', 'James Garner'],
        correctAnswer: 'Peter Falk',
        difficulty: 'Easy',
        tags: ['american', 'crime', 'classic tv'],
        dailyEligible: true
    },
    {
        id: 'tv_0140',
        category: 'TV',
        question: 'Which comedy series featured hotel owner Basil Fawlty?',
        answers: ['Fawlty Towers', 'The Good Life', 'Rising Damp', 'Porridge'],
        correctAnswer: 'Fawlty Towers',
        difficulty: 'Easy',
        tags: ['british', 'sitcom', '1970s'],
        dailyEligible: true
    },

    // =========================================================
    // FILM
    // =========================================================

    {
        id: 'film_0107',
        category: 'Film',
        question: 'Who played the title role in the 1990 film Edward Scissorhands?',
        answers: ['Johnny Depp', 'Tom Cruise', 'Brad Pitt', 'Keanu Reeves'],
        correctAnswer: 'Johnny Depp',
        difficulty: 'Easy',
        tags: ['1990s', 'actors', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0108',
        category: 'Film',
        question: 'Which 1985 film features a time-travelling DeLorean?',
        answers: ['Back to the Future', 'The Goonies', 'Short Circuit', 'Weird Science'],
        correctAnswer: 'Back to the Future',
        difficulty: 'Easy',
        tags: ['1980s', 'science fiction', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0109',
        category: 'Film',
        question: 'Which actress played Bridget Jones in Bridget Jones’s Diary?',
        answers: ['Renée Zellweger', 'Sandra Bullock', 'Julia Roberts', 'Kate Winslet'],
        correctAnswer: 'Renée Zellweger',
        difficulty: 'Easy',
        tags: ['2000s', 'british film', 'actors'],
        dailyEligible: true
    },
    {
        id: 'film_0110',
        category: 'Film',
        question: 'Which film features the character Indiana Jones?',
        answers: ['Raiders of the Lost Ark', 'Top Gun', 'Die Hard', 'Rocky'],
        correctAnswer: 'Raiders of the Lost Ark',
        difficulty: 'Easy',
        tags: ['1980s', 'adventure', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0111',
        category: 'Film',
        question: 'Who directed the film Jaws?',
        answers: ['Steven Spielberg', 'George Lucas', 'Martin Scorsese', 'Francis Ford Coppola'],
        correctAnswer: 'Steven Spielberg',
        difficulty: 'Easy',
        tags: ['1970s', 'directors', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0112',
        category: 'Film',
        question: 'Which actress played the title character in Erin Brockovich?',
        answers: ['Julia Roberts', 'Meg Ryan', 'Nicole Kidman', 'Jodie Foster'],
        correctAnswer: 'Julia Roberts',
        difficulty: 'Medium',
        tags: ['2000s', 'actors', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0113',
        category: 'Film',
        question: 'In The Wizard of Oz, what colour are Dorothy’s famous slippers?',
        answers: ['Ruby red', 'Emerald green', 'Silver', 'Gold'],
        correctAnswer: 'Ruby red',
        difficulty: 'Easy',
        tags: ['classic film', '1930s', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0114',
        category: 'Film',
        question: 'Which actor played Maximus in Gladiator?',
        answers: ['Russell Crowe', 'Mel Gibson', 'Hugh Jackman', 'Clive Owen'],
        correctAnswer: 'Russell Crowe',
        difficulty: 'Easy',
        tags: ['2000s', 'actors', 'film'],
        dailyEligible: true
    },

    // =========================================================
    // GENERAL KNOWLEDGE
    // =========================================================

    {
        id: 'general_0052',
        category: 'General Knowledge',
        question: 'How many sides does a dodecagon have?',
        answers: ['12', '10', '8', '14'],
        correctAnswer: '12',
        difficulty: 'Easy',
        tags: ['numbers', 'shapes'],
        dailyEligible: true
    },
    {
        id: 'general_0053',
        category: 'General Knowledge',
        question: 'What colour is traditionally associated with an emerald?',
        answers: ['Green', 'Blue', 'Red', 'Purple'],
        correctAnswer: 'Green',
        difficulty: 'Easy',
        tags: ['gems', 'general knowledge'],
        dailyEligible: true
    },
    {
        id: 'general_0054',
        category: 'General Knowledge',
        question: 'What is the Roman numeral for 50?',
        answers: ['L', 'C', 'X', 'V'],
        correctAnswer: 'L',
        difficulty: 'Easy',
        tags: ['numbers', 'roman numerals'],
        dailyEligible: true
    },

    // =========================================================
    // HISTORY
    // =========================================================

    {
        id: 'history_0050',
        category: 'History',
        question: 'In which year did the Berlin Wall fall?',
        answers: ['1989', '1987', '1991', '1985'],
        correctAnswer: '1989',
        difficulty: 'Easy',
        tags: ['20th century', 'europe'],
        dailyEligible: true
    },
    {
        id: 'history_0051',
        category: 'History',
        question: 'Which English king had six wives?',
        answers: ['Henry VIII', 'Henry VII', 'Richard III', 'Edward VI'],
        correctAnswer: 'Henry VIII',
        difficulty: 'Easy',
        tags: ['british', 'tudors', 'monarchy'],
        dailyEligible: true
    },

    // =========================================================
    // GEOGRAPHY
    // =========================================================

    {
        id: 'geography_0051',
        category: 'Geography',
        question: 'Which river flows through Paris?',
        answers: ['Seine', 'Rhine', 'Danube', 'Loire'],
        correctAnswer: 'Seine',
        difficulty: 'Easy',
        tags: ['europe', 'rivers', 'cities'],
        dailyEligible: true
    },
    {
        id: 'geography_0052',
        category: 'Geography',
        question: 'What is the capital city of Portugal?',
        answers: ['Lisbon', 'Porto', 'Madrid', 'Faro'],
        correctAnswer: 'Lisbon',
        difficulty: 'Easy',
        tags: ['europe', 'capitals'],
        dailyEligible: true
    },
    {
        id: 'geography_0053',
        category: 'Geography',
        question: 'Which English county contains the city of Canterbury?',
        answers: ['Kent', 'Essex', 'Surrey', 'Sussex'],
        correctAnswer: 'Kent',
        difficulty: 'Medium',
        tags: ['british', 'england', 'counties'],
        dailyEligible: true
    },

    // =========================================================
    // SCIENCE & NATURE
    // =========================================================

    {
        id: 'science_0048',
        category: 'Science & Nature',
        question: 'What is the largest planet in the Solar System?',
        answers: ['Jupiter', 'Saturn', 'Neptune', 'Earth'],
        correctAnswer: 'Jupiter',
        difficulty: 'Easy',
        tags: ['space', 'planets'],
        dailyEligible: true
    },
    {
        id: 'science_0049',
        category: 'Science & Nature',
        question: 'What gas do plants absorb from the atmosphere during photosynthesis?',
        answers: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
        correctAnswer: 'Carbon dioxide',
        difficulty: 'Easy',
        tags: ['biology', 'plants'],
        dailyEligible: true
    },

    // =========================================================
    // FOOD & DRINK
    // =========================================================

    {
        id: 'food_0032',
        category: 'Food & Drink',
        question: 'Which fruit is traditionally used to make cider?',
        answers: ['Apple', 'Pear', 'Grape', 'Plum'],
        correctAnswer: 'Apple',
        difficulty: 'Easy',
        tags: ['drinks', 'fruit'],
        dailyEligible: true
    },

    // =========================================================
    // SPORT
    // =========================================================

    {
        id: 'sport_0032',
        category: 'Sport',
        question: 'How many players from one team are on the pitch at the start of a football match?',
        answers: ['11', '10', '12', '9'],
        correctAnswer: '11',
        difficulty: 'Easy',
        tags: ['football', 'rules'],
        dailyEligible: true
    },

    // =========================================================
    // LITERATURE
    // =========================================================

    {
        id: 'literature_0031',
        category: 'Literature',
        question: 'Who wrote The Wind in the Willows?',
        answers: ['Kenneth Grahame', 'A. A. Milne', 'Beatrix Potter', 'Lewis Carroll'],
        correctAnswer: 'Kenneth Grahame',
        difficulty: 'Medium',
        tags: ['british', 'classic literature', 'authors'],
        dailyEligible: true
    }

];

module.exports = questions;
