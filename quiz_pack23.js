// quiz_pack23.js
// PuzzlePilot Big Quiz
// Pack 23 - 100 Music questions
// Music specialist bank - artist/song questions

const questions = [

    // =========================================================
    // MUSIC - 100
    // =========================================================

    {
        id: 'music_0367',
        category: 'Music',
        question: 'Which artist recorded Penny Lane?',
        answers: ['The Beatles', 'The Kinks', 'The Who', 'The Hollies'],
        correctAnswer: 'The Beatles',
        difficulty: 'Easy',
        tags: ['1960s', 'pop', 'rock', 'the beatles', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0368',
        category: 'Music',
        question: 'Which artist recorded Ticket to Ride?',
        answers: ['The Hollies', 'The Beatles', 'The Kinks', 'The Who'],
        correctAnswer: 'The Beatles',
        difficulty: 'Easy',
        tags: ['1960s', 'pop', 'rock', 'the beatles', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0369',
        category: 'Music',
        question: 'Which artist recorded Jumpin\' Jack Flash?',
        answers: ['The Who', 'The Kinks', 'The Rolling Stones', 'The Beatles'],
        correctAnswer: 'The Rolling Stones',
        difficulty: 'Easy',
        tags: ['1960s', 'rock', 'the rolling stones', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0370',
        category: 'Music',
        question: 'Which artist recorded Gimme Shelter?',
        answers: ['The Rolling Stones', 'The Who', 'The Animals', 'The Kinks'],
        correctAnswer: 'The Rolling Stones',
        difficulty: 'Medium',
        tags: ['1960s', 'rock', 'the rolling stones', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0371',
        category: 'Music',
        question: 'Which artist recorded Sunny Afternoon?',
        answers: ['The Small Faces', 'The Who', 'The Kinks', 'The Hollies'],
        correctAnswer: 'The Kinks',
        difficulty: 'Medium',
        tags: ['1960s', 'rock', 'pop', 'the kinks', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0372',
        category: 'Music',
        question: 'Which artist recorded Bus Stop?',
        answers: ['The Hollies', 'The Searchers', 'The Tremeloes', 'The Animals'],
        correctAnswer: 'The Hollies',
        difficulty: 'Medium',
        tags: ['1960s', 'pop', 'british', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0373',
        category: 'Music',
        question: 'Which artist recorded House of the Rising Sun?',
        answers: ['The Searchers', 'The Animals', 'The Hollies', 'The Tremeloes'],
        correctAnswer: 'The Animals',
        difficulty: 'Easy',
        tags: ['1960s', 'rock', 'british', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0374',
        category: 'Music',
        question: 'Which artist recorded Needles and Pins?',
        answers: ['The Searchers', 'The Animals', 'The Hollies', 'The Tremeloes'],
        correctAnswer: 'The Searchers',
        difficulty: 'Medium',
        tags: ['1960s', 'pop', 'british', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0375',
        category: 'Music',
        question: 'Which artist recorded Be My Baby?',
        answers: ['The Crystals', 'The Ronettes', 'The Shirelles', 'The Chiffons'],
        correctAnswer: 'The Ronettes',
        difficulty: 'Easy',
        tags: ['1960s', 'pop', 'girl groups', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0376',
        category: 'Music',
        question: 'Which artist recorded He\'s So Fine?',
        answers: ['The Ronettes', 'The Shirelles', 'The Chiffons', 'The Crystals'],
        correctAnswer: 'The Chiffons',
        difficulty: 'Medium',
        tags: ['1960s', 'pop', 'girl groups', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0377',
        category: 'Music',
        question: 'Which artist recorded Baby Love?',
        answers: ['The Supremes', 'The Marvelettes', 'Martha and the Vandellas', 'The Ronettes'],
        correctAnswer: 'The Supremes',
        difficulty: 'Easy',
        tags: ['1960s', 'motown', 'soul', 'the supremes', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0378',
        category: 'Music',
        question: 'Which artist recorded Where Did Our Love Go?',
        answers: ['Martha and the Vandellas', 'The Supremes', 'The Marvelettes', 'The Ronettes'],
        correctAnswer: 'The Supremes',
        difficulty: 'Medium',
        tags: ['1960s', 'motown', 'soul', 'the supremes', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0379',
        category: 'Music',
        question: 'Which artist recorded I Heard It Through the Grapevine?',
        answers: ['Marvin Gaye', 'Stevie Wonder', 'Smokey Robinson', 'Otis Redding'],
        correctAnswer: 'Marvin Gaye',
        difficulty: 'Easy',
        tags: ['1960s', 'motown', 'soul', 'marvin gaye', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0380',
        category: 'Music',
        question: 'Which artist recorded For Once in My Life?',
        answers: ['Marvin Gaye', 'Stevie Wonder', 'Smokey Robinson', 'Sam Cooke'],
        correctAnswer: 'Stevie Wonder',
        difficulty: 'Medium',
        tags: ['1960s', 'motown', 'soul', 'stevie wonder', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0381',
        category: 'Music',
        question: 'Which artist recorded Green, Green Grass of Home?',
        answers: ['Engelbert Humperdinck', 'Tom Jones', 'Cliff Richard', 'Matt Monro'],
        correctAnswer: 'Tom Jones',
        difficulty: 'Easy',
        tags: ['1960s', 'pop', 'british', 'tom jones', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0382',
        category: 'Music',
        question: 'Which artist recorded Delilah?',
        answers: ['Tom Jones', 'Engelbert Humperdinck', 'Cliff Richard', 'Matt Monro'],
        correctAnswer: 'Tom Jones',
        difficulty: 'Easy',
        tags: ['1960s', 'pop', 'british', 'tom jones', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0383',
        category: 'Music',
        question: 'Which artist recorded Hot Legs?',
        answers: ['Elton John', 'Rod Stewart', 'David Essex', 'Leo Sayer'],
        correctAnswer: 'Rod Stewart',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'rod stewart', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0384',
        category: 'Music',
        question: 'Which artist recorded Dancing the Night Away?',
        answers: ['The Motors', 'Dr. Feelgood', 'Eddie and the Hot Rods', 'Ducks Deluxe'],
        correctAnswer: 'The Motors',
        difficulty: 'Medium',
        tags: ['1970s', 'rock', 'power pop', 'the motors', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0385',
        category: 'Music',
        question: 'Which artist recorded Back of My Hand?',
        answers: ['The Jags', 'The Motors', 'The Records', 'The Knack'],
        correctAnswer: 'The Jags',
        difficulty: 'Medium',
        tags: ['1970s', 'power pop', 'the jags', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0386',
        category: 'Music',
        question: 'Which artist recorded Saturday Night\'s Alright for Fighting?',
        answers: ['David Bowie', 'Rod Stewart', 'Elton John', 'Billy Joel'],
        correctAnswer: 'Elton John',
        difficulty: 'Medium',
        tags: ['1970s', 'rock', 'elton john', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0387',
        category: 'Music',
        question: 'Which artist recorded The Jean Genie?',
        answers: ['David Bowie', 'T. Rex', 'Sweet', 'Slade'],
        correctAnswer: 'David Bowie',
        difficulty: 'Medium',
        tags: ['1970s', 'glam rock', 'rock', 'david bowie', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0388',
        category: 'Music',
        question: 'Which artist recorded Changes?',
        answers: ['T. Rex', 'David Bowie', 'Slade', 'Sweet'],
        correctAnswer: 'David Bowie',
        difficulty: 'Medium',
        tags: ['1970s', 'rock', 'glam rock', 'david bowie', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0389',
        category: 'Music',
        question: 'Which artist recorded Children of the Revolution?',
        answers: ['Sweet', 'Slade', 'T. Rex', 'Mud'],
        correctAnswer: 'T. Rex',
        difficulty: 'Medium',
        tags: ['1970s', 'glam rock', 't rex', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0390',
        category: 'Music',
        question: 'Which artist recorded Metal Guru?',
        answers: ['Slade', 'Sweet', 'Mud', 'T. Rex'],
        correctAnswer: 'T. Rex',
        difficulty: 'Medium',
        tags: ['1970s', 'glam rock', 't rex', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0391',
        category: 'Music',
        question: 'Which artist recorded Cum On Feel the Noize?',
        answers: ['Slade', 'Sweet', 'Mud', 'T. Rex'],
        correctAnswer: 'Slade',
        difficulty: 'Easy',
        tags: ['1970s', 'glam rock', 'slade', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0392',
        category: 'Music',
        question: 'Which artist recorded Mama Weer All Crazee Now?',
        answers: ['Sweet', 'Slade', 'Mud', 'T. Rex'],
        correctAnswer: 'Slade',
        difficulty: 'Medium',
        tags: ['1970s', 'glam rock', 'slade', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0393',
        category: 'Music',
        question: 'Which artist recorded Block Buster!?',
        answers: ['Mud', 'T. Rex', 'Sweet', 'Slade'],
        correctAnswer: 'Sweet',
        difficulty: 'Medium',
        tags: ['1970s', 'glam rock', 'sweet', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0394',
        category: 'Music',
        question: 'Which artist recorded Lonely This Christmas?',
        answers: ['Slade', 'Mud', 'Sweet', 'T. Rex'],
        correctAnswer: 'Mud',
        difficulty: 'Easy',
        tags: ['1970s', 'glam rock', 'christmas', 'mud', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0395',
        category: 'Music',
        question: 'Which artist recorded You\'re My Best Friend?',
        answers: ['Queen', '10cc', 'Electric Light Orchestra', 'Supertramp'],
        correctAnswer: 'Queen',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'queen', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0396',
        category: 'Music',
        question: 'Which artist recorded Bicycle Race?',
        answers: ['Electric Light Orchestra', 'Queen', '10cc', 'Supertramp'],
        correctAnswer: 'Queen',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'queen', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0397',
        category: 'Music',
        question: 'Which artist recorded The Chain?',
        answers: ['Eagles', 'Fleetwood Mac', 'Foreigner', 'Boston'],
        correctAnswer: 'Fleetwood Mac',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'fleetwood mac', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0398',
        category: 'Music',
        question: 'Which artist recorded Rhiannon?',
        answers: ['Fleetwood Mac', 'Eagles', 'Heart', 'Jefferson Starship'],
        correctAnswer: 'Fleetwood Mac',
        difficulty: 'Medium',
        tags: ['1970s', 'rock', 'fleetwood mac', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0399',
        category: 'Music',
        question: 'Which artist recorded Take It Easy?',
        answers: ['Fleetwood Mac', 'Eagles', 'Boston', 'Foreigner'],
        correctAnswer: 'Eagles',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'eagles', 'songs'],
        dailyEligible: true
    },
    {
        id: 'music_0400',
        category: 'Music',
        question: 'Which artist recorded Heartache Tonight?',
        answers: ['Boston', 'Foreigner', 'Eagles', 'Fleetwood Mac'],
        correctAnswer: 'Eagles',
        difficulty: 'Medium',
        tags: ['1970s', 'rock', 'eagles', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0401',
        category: 'Music',
        question: 'Which artist recorded December, 1963 (Oh, What a Night)?',
        answers: ['The Four Seasons', 'The Stylistics', 'The Drifters', 'The Temptations'],
        correctAnswer: 'The Four Seasons',
        difficulty: 'Easy',
        tags: ['1970s', 'pop', 'disco', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0402',
        category: 'Music',
        question: 'Which artist recorded You to Me Are Everything?',
        answers: ['The Real Thing', 'The Stylistics', 'The Three Degrees', 'The O\'Jays'],
        correctAnswer: 'The Real Thing',
        difficulty: 'Medium',
        tags: ['1970s', 'soul', 'disco', 'british', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0403',
        category: 'Music',
        question: 'Which artist recorded Boogie Nights?',
        answers: ['Heatwave', 'Chic', 'Rose Royce', 'The Real Thing'],
        correctAnswer: 'Heatwave',
        difficulty: 'Medium',
        tags: ['1970s', 'disco', 'funk', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0404',
        category: 'Music',
        question: 'Which artist recorded Car Wash?',
        answers: ['Chic', 'Heatwave', 'Rose Royce', 'Sister Sledge'],
        correctAnswer: 'Rose Royce',
        difficulty: 'Easy',
        tags: ['1970s', 'disco', 'funk', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0405',
        category: 'Music',
        question: 'Which artist recorded Good Times?',
        answers: ['Chic', 'Sister Sledge', 'Rose Royce', 'Heatwave'],
        correctAnswer: 'Chic',
        difficulty: 'Easy',
        tags: ['1970s', 'disco', 'funk', 'chic', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0406',
        category: 'Music',
        question: 'Which artist recorded Lost in Music?',
        answers: ['Chic', 'Sister Sledge', 'Rose Royce', 'The Three Degrees'],
        correctAnswer: 'Sister Sledge',
        difficulty: 'Medium',
        tags: ['1970s', 'disco', 'sister sledge', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0407',
        category: 'Music',
        question: 'Which artist recorded Denis?',
        answers: ['Blondie', 'The Pretenders', 'The Cars', 'Talking Heads'],
        correctAnswer: 'Blondie',
        difficulty: 'Medium',
        tags: ['1970s', 'new wave', 'blondie', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0408',
        category: 'Music',
        question: 'Which artist recorded One Way or Another?',
        answers: ['The Pretenders', 'Blondie', 'The Cars', 'Talking Heads'],
        correctAnswer: 'Blondie',
        difficulty: 'Easy',
        tags: ['1970s', 'new wave', 'blondie', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0409',
        category: 'Music',
        question: 'Which artist recorded Whole Wide World?',
        answers: ['Wreckless Eric', 'Nick Lowe', 'Ian Dury', 'Elvis Costello'],
        correctAnswer: 'Wreckless Eric',
        difficulty: 'Medium',
        tags: ['1970s', 'rock', 'power pop', 'wreckless eric', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0410',
        category: 'Music',
        question: 'Which artist recorded Up the Junction?',
        answers: ['Squeeze', 'The Jam', 'The Motors', 'The Undertones'],
        correctAnswer: 'Squeeze',
        difficulty: 'Medium',
        tags: ['1970s', 'new wave', 'squeeze', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0411',
        category: 'Music',
        question: 'Which artist recorded Another Girl, Another Planet?',
        answers: ['The Only Ones', 'Buzzcocks', 'The Undertones', 'The Stranglers'],
        correctAnswer: 'The Only Ones',
        difficulty: 'Medium',
        tags: ['1970s', 'new wave', 'power pop', 'the only ones', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0412',
        category: 'Music',
        question: 'Which artist recorded Start!?',
        answers: ['The Jam', 'The Clash', 'The Police', 'The Specials'],
        correctAnswer: 'The Jam',
        difficulty: 'Medium',
        tags: ['1980s', 'rock', 'mod revival', 'the jam', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0413',
        category: 'Music',
        question: 'Which artist recorded Milk and Alcohol?',
        answers: ['Dr. Feelgood', 'The Motors', 'Eddie and the Hot Rods', 'Ian Dury and the Blockheads'],
        correctAnswer: 'Dr. Feelgood',
        difficulty: 'Medium',
        tags: ['1970s', 'pub rock', 'dr feelgood', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0414',
        category: 'Music',
        question: 'Which artist recorded Too Much Too Young?',
        answers: ['The Beat', 'Madness', 'The Specials', 'The Selecter'],
        correctAnswer: 'The Specials',
        difficulty: 'Medium',
        tags: ['1980s', 'ska', 'british', 'the specials', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0415',
        category: 'Music',
        question: 'Which artist recorded Embarrassment?',
        answers: ['Madness', 'The Specials', 'The Beat', 'Bad Manners'],
        correctAnswer: 'Madness',
        difficulty: 'Medium',
        tags: ['1980s', 'ska', 'pop', 'madness', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0416',
        category: 'Music',
        question: 'Which artist recorded My Girl?',
        answers: ['The Specials', 'Madness', 'Bad Manners', 'The Beat'],
        correctAnswer: 'Madness',
        difficulty: 'Medium',
        tags: ['1980s', 'ska', 'pop', 'madness', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0417',
        category: 'Music',
        question: 'Which artist recorded Enola Gay?',
        answers: ['Orchestral Manoeuvres in the Dark', 'Ultravox', 'Depeche Mode', 'The Human League'],
        correctAnswer: 'Orchestral Manoeuvres in the Dark',
        difficulty: 'Medium',
        tags: ['1980s', 'synth-pop', 'british', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0418',
        category: 'Music',
        question: 'Which artist recorded Just Can\'t Get Enough?',
        answers: ['The Human League', 'Depeche Mode', 'Ultravox', 'Orchestral Manoeuvres in the Dark'],
        correctAnswer: 'Depeche Mode',
        difficulty: 'Easy',
        tags: ['1980s', 'synth-pop', 'depeche mode', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0419',
        category: 'Music',
        question: 'Which artist recorded Love Action (I Believe in Love)?',
        answers: ['Depeche Mode', 'The Human League', 'Ultravox', 'Heaven 17'],
        correctAnswer: 'The Human League',
        difficulty: 'Medium',
        tags: ['1980s', 'synth-pop', 'the human league', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0420',
        category: 'Music',
        question: 'Which artist recorded Temptation?',
        answers: ['Heaven 17', 'The Human League', 'Depeche Mode', 'ABC'],
        correctAnswer: 'Heaven 17',
        difficulty: 'Medium',
        tags: ['1980s', 'synth-pop', 'british', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0421',
        category: 'Music',
        question: 'Which artist recorded The Look of Love?',
        answers: ['ABC', 'Spandau Ballet', 'Duran Duran', 'Heaven 17'],
        correctAnswer: 'ABC',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'new wave', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0422',
        category: 'Music',
        question: 'Which artist recorded Save a Prayer?',
        answers: ['Spandau Ballet', 'Duran Duran', 'ABC', 'Culture Club'],
        correctAnswer: 'Duran Duran',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'duran duran', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0423',
        category: 'Music',
        question: 'Which artist recorded No More Heroes?',
        answers: ['The Stranglers', 'The Clash', 'The Jam', 'Buzzcocks'],
        correctAnswer: 'The Stranglers',
        difficulty: 'Medium',
        tags: ['1970s', 'punk', 'new wave', 'the stranglers', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0424',
        category: 'Music',
        question: 'Which artist recorded Do You Really Want to Hurt Me?',
        answers: ['Culture Club', 'Duran Duran', 'Spandau Ballet', 'ABC'],
        correctAnswer: 'Culture Club',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'culture club', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0425',
        category: 'Music',
        question: 'Which artist recorded I\'m Still Standing?',
        answers: ['Elton John', 'Billy Joel', 'Phil Collins', 'Rod Stewart'],
        correctAnswer: 'Elton John',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'elton john', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0426',
        category: 'Music',
        question: 'Which artist recorded Uptown Girl?',
        answers: ['Elton John', 'Billy Joel', 'Phil Collins', 'Bruce Springsteen'],
        correctAnswer: 'Billy Joel',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'rock', 'billy joel', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0427',
        category: 'Music',
        question: 'Which artist recorded Easy Lover with Philip Bailey?',
        answers: ['Phil Collins', 'Peter Gabriel', 'Lionel Richie', 'Steve Winwood'],
        correctAnswer: 'Phil Collins',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'phil collins', 'duets', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0428',
        category: 'Music',
        question: 'Which artist recorded Sledgehammer?',
        answers: ['Phil Collins', 'Peter Gabriel', 'Steve Winwood', 'Robert Palmer'],
        correctAnswer: 'Peter Gabriel',
        difficulty: 'Easy',
        tags: ['1980s', 'rock', 'pop', 'peter gabriel', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0429',
        category: 'Music',
        question: 'Which artist recorded Addicted to Love?',
        answers: ['Steve Winwood', 'Robert Palmer', 'Peter Gabriel', 'Phil Collins'],
        correctAnswer: 'Robert Palmer',
        difficulty: 'Easy',
        tags: ['1980s', 'rock', 'pop', 'robert palmer', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0430',
        category: 'Music',
        question: 'Which artist recorded Summer of \'69?',
        answers: ['Bruce Springsteen', 'Bryan Adams', 'John Mellencamp', 'Bon Jovi'],
        correctAnswer: 'Bryan Adams',
        difficulty: 'Easy',
        tags: ['1980s', 'rock', 'bryan adams', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0431',
        category: 'Music',
        question: 'Which artist recorded Dancing in the Dark?',
        answers: ['Bryan Adams', 'Bruce Springsteen', 'John Mellencamp', 'Don Henley'],
        correctAnswer: 'Bruce Springsteen',
        difficulty: 'Easy',
        tags: ['1980s', 'rock', 'bruce springsteen', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0432',
        category: 'Music',
        question: 'Which artist recorded Circle in the Sand?',
        answers: ['Belinda Carlisle', 'Kim Wilde', 'Pat Benatar', 'Cyndi Lauper'],
        correctAnswer: 'Belinda Carlisle',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'belinda carlisle', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0433',
        category: 'Music',
        question: 'Which artist recorded King Rocker?',
        answers: ['Generation X', 'Buzzcocks', 'The Undertones', 'Sham 69'],
        correctAnswer: 'Generation X',
        difficulty: 'Medium',
        tags: ['1970s', 'punk', 'generation x', 'songs'],
        dailyEligible: true
    },
    {
        id: 'music_0434',
        category: 'Music',
        question: 'Which artist recorded Eternal Flame?',
        answers: ['The Bangles', 'Bananarama', 'The Go-Go\'s', 'Heart'],
        correctAnswer: 'The Bangles',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'the bangles', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0435',
        category: 'Music',
        question: 'Which artist recorded Venus in 1986?',
        answers: ['The Bangles', 'Bananarama', 'The Go-Go\'s', 'Mel and Kim'],
        correctAnswer: 'Bananarama',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'bananarama', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0436',
        category: 'Music',
        question: 'Which artist recorded Respectable?',
        answers: ['Bananarama', 'Mel and Kim', 'The Bangles', 'Pepsi & Shirlie'],
        correctAnswer: 'Mel and Kim',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'british', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0437',
        category: 'Music',
        question: 'Which artist recorded Straight Up?',
        answers: ['Paula Abdul', 'Janet Jackson', 'Jody Watley', 'Taylor Dayne'],
        correctAnswer: 'Paula Abdul',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'paula abdul', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0438',
        category: 'Music',
        question: 'Which artist recorded Nasty?',
        answers: ['Paula Abdul', 'Janet Jackson', 'Jody Watley', 'Whitney Houston'],
        correctAnswer: 'Janet Jackson',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'r&b', 'janet jackson', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0439',
        category: 'Music',
        question: 'Which artist recorded How Will I Know?',
        answers: ['Whitney Houston', 'Janet Jackson', 'Anita Baker', 'Taylor Dayne'],
        correctAnswer: 'Whitney Houston',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'whitney houston', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0440',
        category: 'Music',
        question: 'Which artist recorded I Wanna Dance with Somebody (Who Loves Me)?',
        answers: ['Janet Jackson', 'Whitney Houston', 'Paula Abdul', 'Anita Baker'],
        correctAnswer: 'Whitney Houston',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'whitney houston', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0441',
        category: 'Music',
        question: 'Which artist recorded Smooth Criminal?',
        answers: ['Prince', 'Michael Jackson', 'Lionel Richie', 'George Michael'],
        correctAnswer: 'Michael Jackson',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'michael jackson', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0442',
        category: 'Music',
        question: 'Which artist recorded Man in the Mirror?',
        answers: ['George Michael', 'Prince', 'Michael Jackson', 'Lionel Richie'],
        correctAnswer: 'Michael Jackson',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'michael jackson', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0443',
        category: 'Music',
        question: 'Which artist recorded Kiss?',
        answers: ['Prince', 'Michael Jackson', 'George Michael', 'Terence Trent D\'Arby'],
        correctAnswer: 'Prince',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'funk', 'prince', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0444',
        category: 'Music',
        question: 'Which artist recorded Raspberry Beret?',
        answers: ['Michael Jackson', 'Prince', 'George Michael', 'Lionel Richie'],
        correctAnswer: 'Prince',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'prince', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0445',
        category: 'Music',
        question: 'Which artist recorded Freedom! \'90?',
        answers: ['George Michael', 'Seal', 'Rick Astley', 'Paul Young'],
        correctAnswer: 'George Michael',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'george michael', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0446',
        category: 'Music',
        question: 'Which artist recorded Too Funky?',
        answers: ['Seal', 'George Michael', 'Simply Red', 'Rick Astley'],
        correctAnswer: 'George Michael',
        difficulty: 'Medium',
        tags: ['1990s', 'pop', 'george michael', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0447',
        category: 'Music',
        question: 'Which artist recorded Better the Devil You Know?',
        answers: ['Kylie Minogue', 'Dannii Minogue', 'Sonia', 'Lisa Stansfield'],
        correctAnswer: 'Kylie Minogue',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'kylie minogue', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0448',
        category: 'Music',
        question: 'Which artist recorded Confide in Me?',
        answers: ['Lisa Stansfield', 'Kylie Minogue', 'Dannii Minogue', 'Sonia'],
        correctAnswer: 'Kylie Minogue',
        difficulty: 'Medium',
        tags: ['1990s', 'pop', 'kylie minogue', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0449',
        category: 'Music',
        question: 'Which artist recorded Ebeneezer Goode?',
        answers: ['The Shamen', 'Snap!', '2 Unlimited', 'Culture Beat'],
        correctAnswer: 'The Shamen',
        difficulty: 'Medium',
        tags: ['1990s', 'dance', 'british', 'the shamen', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0450',
        category: 'Music',
        question: 'Which artist recorded No Limit?',
        answers: ['Culture Beat', '2 Unlimited', 'Snap!', 'Technotronic'],
        correctAnswer: '2 Unlimited',
        difficulty: 'Easy',
        tags: ['1990s', 'dance', 'eurodance', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0451',
        category: 'Music',
        question: 'Which artist recorded Mr. Vain?',
        answers: ['2 Unlimited', 'Snap!', 'Culture Beat', 'Corona'],
        correctAnswer: 'Culture Beat',
        difficulty: 'Medium',
        tags: ['1990s', 'dance', 'eurodance', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0452',
        category: 'Music',
        question: 'Which artist recorded The Rhythm of the Night?',
        answers: ['Corona', 'Culture Beat', 'La Bouche', 'Real McCoy'],
        correctAnswer: 'Corona',
        difficulty: 'Easy',
        tags: ['1990s', 'dance', 'eurodance', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0453',
        category: 'Music',
        question: 'Which artist recorded Insomnia?',
        answers: ['The Prodigy', 'Faithless', 'Underworld', 'The Chemical Brothers'],
        correctAnswer: 'Faithless',
        difficulty: 'Easy',
        tags: ['1990s', 'dance', 'electronic', 'british', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0454',
        category: 'Music',
        question: 'Which artist recorded Firestarter?',
        answers: ['Faithless', 'The Prodigy', 'Underworld', 'The Chemical Brothers'],
        correctAnswer: 'The Prodigy',
        difficulty: 'Easy',
        tags: ['1990s', 'dance', 'electronic', 'the prodigy', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0455',
        category: 'Music',
        question: 'Which artist recorded Born Slippy .NUXX?',
        answers: ['The Chemical Brothers', 'Underworld', 'Faithless', 'The Prodigy'],
        correctAnswer: 'Underworld',
        difficulty: 'Medium',
        tags: ['1990s', 'dance', 'electronic', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0456',
        category: 'Music',
        question: 'Which artist recorded Block Rockin\' Beats?',
        answers: ['Underworld', 'The Chemical Brothers', 'The Prodigy', 'Faithless'],
        correctAnswer: 'The Chemical Brothers',
        difficulty: 'Medium',
        tags: ['1990s', 'dance', 'electronic', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0457',
        category: 'Music',
        question: 'Which artist recorded Girls & Boys?',
        answers: ['Oasis', 'Blur', 'Pulp', 'Suede'],
        correctAnswer: 'Blur',
        difficulty: 'Easy',
        tags: ['1990s', 'britpop', 'blur', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0458',
        category: 'Music',
        question: 'Which artist recorded Country House?',
        answers: ['Pulp', 'Oasis', 'Blur', 'Suede'],
        correctAnswer: 'Blur',
        difficulty: 'Easy',
        tags: ['1990s', 'britpop', 'blur', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0459',
        category: 'Music',
        question: 'Which artist recorded Wonderwall?',
        answers: ['Blur', 'Oasis', 'Pulp', 'The Verve'],
        correctAnswer: 'Oasis',
        difficulty: 'Easy',
        tags: ['1990s', 'britpop', 'oasis', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0460',
        category: 'Music',
        question: 'Which artist recorded Champagne Supernova?',
        answers: ['The Verve', 'Pulp', 'Oasis', 'Blur'],
        correctAnswer: 'Oasis',
        difficulty: 'Easy',
        tags: ['1990s', 'britpop', 'oasis', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0461',
        category: 'Music',
        question: 'Which artist recorded Disco 2000?',
        answers: ['Blur', 'Suede', 'Pulp', 'Oasis'],
        correctAnswer: 'Pulp',
        difficulty: 'Easy',
        tags: ['1990s', 'britpop', 'pulp', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0462',
        category: 'Music',
        question: 'Which artist recorded Bitter Sweet Symphony?',
        answers: ['The Verve', 'Oasis', 'Blur', 'Manic Street Preachers'],
        correctAnswer: 'The Verve',
        difficulty: 'Easy',
        tags: ['1990s', 'britpop', 'rock', 'the verve', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0463',
        category: 'Music',
        question: 'Which artist recorded You\'re Still the One?',
        answers: ['Faith Hill', 'Shania Twain', 'LeAnn Rimes', 'Martina McBride'],
        correctAnswer: 'Shania Twain',
        difficulty: 'Easy',
        tags: ['1990s', 'country', 'shania twain', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0464',
        category: 'Music',
        question: 'Which artist recorded Breathe?',
        answers: ['Faith Hill', 'Shania Twain', 'LeAnn Rimes', 'Martina McBride'],
        correctAnswer: 'Faith Hill',
        difficulty: 'Medium',
        tags: ['1990s', 'country', 'faith hill', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0465',
        category: 'Music',
        question: 'Which artist recorded Are You Gonna Be My Girl?',
        answers: ['The Strokes', 'Jet', 'The White Stripes', 'Kings of Leon'],
        correctAnswer: 'Jet',
        difficulty: 'Easy',
        tags: ['2000s', 'rock', 'jet', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0466',
        category: 'Music',
        question: 'Which artist recorded Somebody Told Me?',
        answers: ['Franz Ferdinand', 'The Killers', 'Kaiser Chiefs', 'Snow Patrol'],
        correctAnswer: 'The Killers',
        difficulty: 'Easy',
        tags: ['2000s', 'rock', 'indie', 'the killers', 'songs'],
        dailyEligible: true
    }

];

module.exports = questions;
