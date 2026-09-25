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
        question: 'Which band had a 1984 hit with Smalltown Boy?',
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
        question: 'Which band recorded the 1985 hit Life in a Northern Town?',
        answers: ['The Dream Academy', 'Tears for Fears', 'Talk Talk', 'The Style Council'],
        correctAnswer: 'The Dream Academy',
        difficulty: 'Medium',
        tags: ['1980s', 'british', 'bands'],
        dailyEligible: true
    },
    {
        id: 'music_0165',
        category: 'Music',
        question: 'Which British band had a 1987 hit with China in Your Hand?',
        answers: ['T\'Pau', 'Heart', 'The Bangles', 'Transvision Vamp'],
        correctAnswer: 'T\'Pau',
        difficulty: 'Medium',
        tags: ['1980s', 'british', 'bands'],
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
        question: 'Which actor played Reginald Perrin in The Fall and Rise of Reginald Perrin?',
        answers: ['Leonard Rossiter', 'Richard Briers', 'Paul Eddington', 'Geoffrey Palmer'],
        correctAnswer: 'Leonard Rossiter',
        difficulty: 'Medium',
        tags: ['british', 'sitcom', 'actors'],
        dailyEligible: true
    },
    {
        id: 'tv_0150',
        category: 'TV',
        question: 'Which British sitcom featured the character Martin Bryce?',
        answers: ['Ever Decreasing Circles', 'Butterflies', 'The Good Life', 'To the Manor Born'],
        correctAnswer: 'Ever Decreasing Circles',
        difficulty: 'Medium',
        tags: ['british', 'sitcom', '1980s'],
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
        question: 'Which actress played Miss Brahms in Are You Being Served?',
        answers: ['Wendy Richard', 'Mollie Sugden', 'Pauline Collins', 'Penelope Keith'],
        correctAnswer: 'Wendy Richard',
        difficulty: 'Medium',
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
        question: 'Which actor played Father Ted Crilly in Father Ted?',
        answers: ['Dermot Morgan', 'Ardal O’Hanlon', 'Frank Kelly', 'Graham Linehan'],
        correctAnswer: 'Dermot Morgan',
        difficulty: 'Easy',
        tags: ['british', 'irish', 'sitcom'],
        dailyEligible: true
    },
    {
        id: 'tv_0156',
        category: 'TV',
        question: 'Which actress played Phoebe Buffay in Friends?',
        answers: ['Lisa Kudrow', 'Courteney Cox', 'Jennifer Aniston', 'Jane Sibbett'],
        correctAnswer: 'Lisa Kudrow',
        difficulty: 'Easy',
        tags: ['american', 'sitcom', 'actors'],
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
        question: 'Which actress played Veronica Sawyer in the 1988 film Heathers?',
        answers: ['Winona Ryder', 'Christian Slater', 'Shannen Doherty', 'Jennifer Jason Leigh'],
        correctAnswer: 'Winona Ryder',
        difficulty: 'Medium',
        tags: ['1980s', 'actors', 'film'],
        dailyEligible: true
    },
    {
        id: 'film_0125',
        category: 'Film',
        question: 'Which actor played Jake Blues in the 1980 film The Blues Brothers?',
        answers: ['John Belushi', 'Dan Aykroyd', 'Bill Murray', 'Chevy Chase'],
        correctAnswer: 'John Belushi',
        difficulty: 'Medium',
        tags: ['1980s', 'actors', 'comedy'],
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
        question: 'Which actor played the title character in the 1982 film Tootsie?',
        answers: ['Dustin Hoffman', 'Robin Williams', 'Gene Hackman', 'Richard Dreyfuss'],
        correctAnswer: 'Dustin Hoffman',
        difficulty: 'Medium',
        tags: ['1980s', 'actors', 'comedy'],
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
        question: 'How many principal points are shown on a traditional mariner’s compass?',
        answers: ['32', '16', '24', '36'],
        correctAnswer: '32',
        difficulty: 'Medium',
        tags: ['general knowledge', 'navigation'],
        dailyEligible: true
    },

    // =========================================================
    // HISTORY - 2
    // =========================================================

    {
        id: 'history_0054',
        category: 'History',
        question: 'Who was the first monarch of the Tudor dynasty?',
        answers: ['Henry VII', 'Henry VIII', 'Edward IV', 'Richard III'],
        correctAnswer: 'Henry VII',
        difficulty: 'Medium',
        tags: ['british', 'monarchy', 'tudors'],
        dailyEligible: true
    },
    {
        id: 'history_0055',
        category: 'History',
        question: 'The Janissaries were elite soldiers of which empire?',
        answers: ['Ottoman Empire', 'Roman Empire', 'Mughal Empire', 'Byzantine Empire'],
        correctAnswer: 'Ottoman Empire',
        difficulty: 'Medium',
        tags: ['history', 'empires', 'military'],
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
        question: 'Geirangerfjord is located in which European country?',
        answers: ['Norway', 'Sweden', 'Finland', 'Iceland'],
        correctAnswer: 'Norway',
        difficulty: 'Medium',
        tags: ['europe', 'geography', 'landmarks'],
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
        question: 'What is the scientific study of fungi called?',
        answers: ['Mycology', 'Botany', 'Ecology', 'Entomology'],
        correctAnswer: 'Mycology',
        difficulty: 'Medium',
        tags: ['biology', 'science'],
        dailyEligible: true
    },
    {
        id: 'science_0053',
        category: 'Science & Nature',
        question: 'What is the hardest substance in the human body?',
        answers: ['Tooth enamel', 'Bone', 'Dentine', 'Keratin'],
        correctAnswer: 'Tooth enamel',
        difficulty: 'Medium',
        tags: ['biology', 'human body'],
        dailyEligible: true
    },

    // =========================================================
    // FOOD & DRINK - 1
    // =========================================================

    {
        id: 'food_0034',
        category: 'Food & Drink',
        question: 'Which type of pasta is shaped like small bow ties?',
        answers: ['Farfalle', 'Penne', 'Fusilli', 'Rigatoni'],
        correctAnswer: 'Farfalle',
        difficulty: 'Easy',
        tags: ['food', 'italian', 'pasta'],
        dailyEligible: true
    },

    // =========================================================
    // SPORT - 1
    // =========================================================

    {
        id: 'sport_0034',
        category: 'Sport',
        question: 'Which sport features both scrums and line-outs?',
        answers: ['Rugby union', 'Rugby league', 'American football', 'Australian rules football'],
        correctAnswer: 'Rugby union',
        difficulty: 'Easy',
        tags: ['rugby', 'sport'],
        dailyEligible: true
    },

    // =========================================================
    // LITERATURE - 2
    // =========================================================

    {
        id: 'literature_0034',
        category: 'Literature',
        question: 'Who wrote the children’s novel The Borrowers?',
        answers: ['Mary Norton', 'E. Nesbit', 'Enid Blyton', 'Noel Streatfeild'],
        correctAnswer: 'Mary Norton',
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
