// quiz_pack22.js
// PuzzlePilot Big Quiz
// Pack 22 - 100 Music questions
// Music specialist bank - artist/song questions

const questions = [

    // =========================================================
    // MUSIC - 100
    // =========================================================

    {
        id: 'music_0267',
        category: 'Music',
        question: 'Which artist recorded "Help!"?',
        answers: ['The Beatles', 'The Rolling Stones', 'The Who', 'The Kinks'],
        correctAnswer: 'The Beatles',
        difficulty: 'Easy',
        tags: ['1960s', 'pop', 'rock', 'the beatles', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0268',
        category: 'Music',
        question: 'Which artist recorded A Hard Day\'s Night?',
        answers: ['The Kinks', 'The Beatles', 'The Who', 'The Rolling Stones'],
        correctAnswer: 'The Beatles',
        difficulty: 'Easy',
        tags: ['1960s', 'pop', 'rock', 'the beatles', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0269',
        category: 'Music',
        question: 'Which artist recorded Paint It, Black?',
        answers: ['The Who', 'The Kinks', 'The Rolling Stones', 'The Beatles'],
        correctAnswer: 'The Rolling Stones',
        difficulty: 'Easy',
        tags: ['1960s', 'rock', 'the rolling stones', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0270',
        category: 'Music',
        question: 'Which artist recorded My Generation?',
        answers: ['The Beatles', 'The Rolling Stones', 'The Kinks', 'The Who'],
        correctAnswer: 'The Who',
        difficulty: 'Easy',
        tags: ['1960s', 'rock', 'the who', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0271',
        category: 'Music',
        question: 'Which artist recorded You Really Got Me?',
        answers: ['The Kinks', 'The Beatles', 'The Rolling Stones', 'The Who'],
        correctAnswer: 'The Kinks',
        difficulty: 'Easy',
        tags: ['1960s', 'rock', 'the kinks', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0272',
        category: 'Music',
        question: 'Which artist recorded California Dreamin\'?',
        answers: ['The Beach Boys', 'The Mamas & the Papas', 'The Byrds', 'The Monkees'],
        correctAnswer: 'The Mamas & the Papas',
        difficulty: 'Medium',
        tags: ['1960s', 'pop', 'songs', 'american', 'bands', 'the mamas and the papas'],
        dailyEligible: true
    },

    {
        id: 'music_0273',
        category: 'Music',
        question: 'Which artist recorded Good Vibrations?',
        answers: ['The Byrds', 'The Beach Boys', 'The Monkees', 'The Mamas & the Papas'],
        correctAnswer: 'The Beach Boys',
        difficulty: 'Easy',
        tags: ['1960s', 'pop', 'the beach boys', 'songs', 'american', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0274',
        category: 'Music',
        question: 'Which artist recorded Mr. Tambourine Man?',
        answers: ['The Monkees', 'The Mamas & the Papas', 'The Byrds', 'The Beach Boys'],
        correctAnswer: 'The Byrds',
        difficulty: 'Medium',
        tags: ['1960s', 'folk rock', 'songs', 'american', 'bands', 'the byrds', 'covers'],
        dailyEligible: true
    },

    {
        id: 'music_0275',
        category: 'Music',
        question: 'Which artist recorded Stop! In the Name of Love?',
        answers: ['The Supremes', 'Martha and the Vandellas', 'The Marvelettes', 'The Ronettes'],
        correctAnswer: 'The Supremes',
        difficulty: 'Easy',
        tags: ['1960s', 'motown', 'soul', 'the supremes', 'songs', 'american', 'girl groups'],
        dailyEligible: true
    },

    {
        id: 'music_0276',
        category: 'Music',
        question: 'Which artist recorded Dancing in the Street?',
        answers: ['The Supremes', 'Martha and the Vandellas', 'The Ronettes', 'The Marvelettes'],
        correctAnswer: 'Martha and the Vandellas',
        difficulty: 'Medium',
        tags: ['1960s', 'motown', 'soul', 'songs', 'american', 'girl groups', 'martha and the vandellas'],
        dailyEligible: true
    },

    {
        id: 'music_0277',
        category: 'Music',
        question: 'Which artist recorded My Guy?',
        answers: ['Diana Ross', 'Gladys Knight', 'Mary Wells', 'Aretha Franklin'],
        correctAnswer: 'Mary Wells',
        difficulty: 'Medium',
        tags: ['1960s', 'motown', 'soul', 'songs', 'american', 'singers', 'mary wells'],
        dailyEligible: true
    },

    {
        id: 'music_0278',
        category: 'Music',
        question: 'Which artist recorded Respect?',
        answers: ['Aretha Franklin', 'Diana Ross', 'Gladys Knight', 'Mary Wells'],
        correctAnswer: 'Aretha Franklin',
        difficulty: 'Easy',
        tags: ['1960s', 'soul', 'aretha franklin', 'songs', 'american', 'singers', 'covers'],
        dailyEligible: true
    },

    {
        id: 'music_0279',
        category: 'Music',
        question: 'Which artist recorded (Sittin\' On) The Dock of the Bay?',
        answers: ['Sam Cooke', 'Marvin Gaye', 'Otis Redding', 'Wilson Pickett'],
        correctAnswer: 'Otis Redding',
        difficulty: 'Easy',
        tags: ['1960s', 'soul', 'songs', 'american', 'singers', 'otis redding'],
        dailyEligible: true
    },

    {
        id: 'music_0280',
        category: 'Music',
        question: 'Which artist recorded Mustang Sally?',
        answers: ['Otis Redding', 'Wilson Pickett', 'Sam Cooke', 'Marvin Gaye'],
        correctAnswer: 'Wilson Pickett',
        difficulty: 'Medium',
        tags: ['1960s', 'soul', 'songs', 'american', 'singers', 'wilson pickett', 'covers'],
        dailyEligible: true
    },

    {
        id: 'music_0281',
        category: 'Music',
        question: 'Which artist recorded Stand by Me?',
        answers: ['Ben E. King', 'Sam Cooke', 'Otis Redding', 'Wilson Pickett'],
        correctAnswer: 'Ben E. King',
        difficulty: 'Easy',
        tags: ['1960s', 'soul', 'songs', 'american', 'singers', 'ben e king'],
        dailyEligible: true
    },

    {
        id: 'music_0282',
        category: 'Music',
        question: 'Which artist recorded Waterloo?',
        answers: ['Boney M.', 'ABBA', 'Bee Gees', 'Brotherhood of Man'],
        correctAnswer: 'ABBA',
        difficulty: 'Easy',
        tags: ['1970s', 'pop', 'abba', 'songs', 'swedish', 'bands', 'eurovision'],
        dailyEligible: true
    },

    {
        id: 'music_0283',
        category: 'Music',
        question: 'Which artist recorded Mamma Mia?',
        answers: ['Bee Gees', 'Boney M.', 'ABBA', 'Brotherhood of Man'],
        correctAnswer: 'ABBA',
        difficulty: 'Easy',
        tags: ['1970s', 'pop', 'abba', 'songs', 'swedish', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0284',
        category: 'Music',
        question: 'Which artist recorded Dancing Queen?',
        answers: ['ABBA', 'Brotherhood of Man', 'Boney M.', 'Bee Gees'],
        correctAnswer: 'ABBA',
        difficulty: 'Easy',
        tags: ['1970s', 'pop', 'disco', 'abba', 'songs', 'swedish', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0285',
        category: 'Music',
        question: 'Which artist recorded Take a Chance on Me?',
        answers: ['Boney M.', 'Bee Gees', 'Brotherhood of Man', 'ABBA'],
        correctAnswer: 'ABBA',
        difficulty: 'Easy',
        tags: ['1970s', 'pop', 'abba', 'songs', 'swedish', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0286',
        category: 'Music',
        question: 'Which artist recorded Bohemian Rhapsody?',
        answers: ['Queen', 'Electric Light Orchestra', '10cc', 'Supertramp'],
        correctAnswer: 'Queen',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'queen', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0287',
        category: 'Music',
        question: 'Which artist recorded Somebody to Love?',
        answers: ['10cc', 'Queen', 'Supertramp', 'Electric Light Orchestra'],
        correctAnswer: 'Queen',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'queen', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0288',
        category: 'Music',
        question: 'Which artist recorded We Are the Champions?',
        answers: ['Supertramp', 'Electric Light Orchestra', 'Queen', '10cc'],
        correctAnswer: 'Queen',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'queen', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0289',
        category: 'Music',
        question: 'Which artist recorded Killer Queen?',
        answers: ['Electric Light Orchestra', '10cc', 'Supertramp', 'Queen'],
        correctAnswer: 'Queen',
        difficulty: 'Medium',
        tags: ['1970s', 'rock', 'queen', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0290',
        category: 'Music',
        question: 'Which artist recorded Life on Mars?',
        answers: ['David Bowie', 'Elton John', 'Rod Stewart', 'Lou Reed'],
        correctAnswer: 'David Bowie',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'glam rock', 'david bowie', 'songs', 'british', 'singers'],
        dailyEligible: true
    },

    {
        id: 'music_0291',
        category: 'Music',
        question: 'Which artist recorded Starman?',
        answers: ['Elton John', 'David Bowie', 'Lou Reed', 'Rod Stewart'],
        correctAnswer: 'David Bowie',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'glam rock', 'david bowie', 'songs', 'british', 'singers'],
        dailyEligible: true
    },

    {
        id: 'music_0292',
        category: 'Music',
        question: 'Which artist recorded Rebel Rebel?',
        answers: ['Rod Stewart', 'Lou Reed', 'David Bowie', 'Elton John'],
        correctAnswer: 'David Bowie',
        difficulty: 'Medium',
        tags: ['1970s', 'rock', 'glam rock', 'david bowie', 'songs', 'british', 'singers'],
        dailyEligible: true
    },

    {
        id: 'music_0293',
        category: 'Music',
        question: 'Which artist recorded Rocket Man?',
        answers: ['David Bowie', 'Rod Stewart', 'Lou Reed', 'Elton John'],
        correctAnswer: 'Elton John',
        difficulty: 'Easy',
        tags: ['1970s', 'pop', 'rock', 'elton john', 'songs', 'british', 'singers'],
        dailyEligible: true
    },

    {
        id: 'music_0294',
        category: 'Music',
        question: 'Which artist recorded Goodbye Yellow Brick Road?',
        answers: ['Rod Stewart', 'Elton John', 'David Bowie', 'Lou Reed'],
        correctAnswer: 'Elton John',
        difficulty: 'Easy',
        tags: ['1970s', 'pop', 'rock', 'elton john', 'songs', 'british', 'singers'],
        dailyEligible: true
    },

    {
        id: 'music_0295',
        category: 'Music',
        question: 'Which artist recorded Maggie May?',
        answers: ['Lou Reed', 'David Bowie', 'Rod Stewart', 'Elton John'],
        correctAnswer: 'Rod Stewart',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'rod stewart', 'songs', 'british', 'singers'],
        dailyEligible: true
    },

    {
        id: 'music_0296',
        category: 'Music',
        question: 'Which artist recorded You Wear It Well?',
        answers: ['Elton John', 'Rod Stewart', 'Lou Reed', 'David Bowie'],
        correctAnswer: 'Rod Stewart',
        difficulty: 'Medium',
        tags: ['1970s', 'rock', 'rod stewart', 'songs', 'british', 'singers'],
        dailyEligible: true
    },

    {
        id: 'music_0297',
        category: 'Music',
        question: 'Which artist recorded Walk on the Wild Side?',
        answers: ['Lou Reed', 'David Bowie', 'Elton John', 'Rod Stewart'],
        correctAnswer: 'Lou Reed',
        difficulty: 'Medium',
        tags: ['1970s', 'rock', 'lou reed', 'songs', 'american', 'singers'],
        dailyEligible: true
    },

    {
        id: 'music_0298',
        category: 'Music',
        question: 'Which artist recorded Hotel California?',
        answers: ['Fleetwood Mac', 'Eagles', 'Boston', 'Foreigner'],
        correctAnswer: 'Eagles',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'eagles', 'songs', 'american', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0299',
        category: 'Music',
        question: 'Which artist recorded Go Your Own Way?',
        answers: ['Eagles', 'Fleetwood Mac', 'Foreigner', 'Boston'],
        correctAnswer: 'Fleetwood Mac',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'fleetwood mac', 'songs', 'british', 'american', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0300',
        category: 'Music',
        question: 'Which artist recorded Dreams?',
        answers: ['Boston', 'Foreigner', 'Fleetwood Mac', 'Eagles'],
        correctAnswer: 'Fleetwood Mac',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'fleetwood mac', 'songs', 'british', 'american', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0301',
        category: 'Music',
        question: 'Which artist recorded More Than a Feeling?',
        answers: ['Fleetwood Mac', 'Eagles', 'Foreigner', 'Boston'],
        correctAnswer: 'Boston',
        difficulty: 'Medium',
        tags: ['1970s', 'rock', 'boston', 'songs', 'american', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0302',
        category: 'Music',
        question: 'Which artist recorded Cold as Ice?',
        answers: ['Foreigner', 'Boston', 'Eagles', 'Fleetwood Mac'],
        correctAnswer: 'Foreigner',
        difficulty: 'Medium',
        tags: ['1970s', 'rock', 'foreigner', 'songs', 'british', 'american', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0303',
        category: 'Music',
        question: 'Which artist recorded Don\'t Bring Me Down?',
        answers: ['10cc', 'Electric Light Orchestra', 'Supertramp', 'Queen'],
        correctAnswer: 'Electric Light Orchestra',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'elo', 'songs', 'british', 'bands', 'electric light orchestra'],
        dailyEligible: true
    },

    {
        id: 'music_0304',
        category: 'Music',
        question: 'Which artist recorded Mr. Blue Sky?',
        answers: ['Queen', 'Supertramp', 'Electric Light Orchestra', '10cc'],
        correctAnswer: 'Electric Light Orchestra',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'elo', 'songs', 'british', 'bands', 'electric light orchestra'],
        dailyEligible: true
    },

    {
        id: 'music_0305',
        category: 'Music',
        question: 'Which artist recorded I\'m Not in Love?',
        answers: ['Supertramp', 'Queen', '10cc', 'Electric Light Orchestra'],
        correctAnswer: '10cc',
        difficulty: 'Medium',
        tags: ['1970s', 'rock', '10cc', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0306',
        category: 'Music',
        question: 'Which artist recorded The Logical Song?',
        answers: ['Electric Light Orchestra', '10cc', 'Queen', 'Supertramp'],
        correctAnswer: 'Supertramp',
        difficulty: 'Medium',
        tags: ['1970s', 'rock', 'supertramp', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0307',
        category: 'Music',
        question: 'Which artist recorded Baker Street?',
        answers: ['Gerry Rafferty', 'Al Stewart', 'Chris Rea', 'Dire Straits'],
        correctAnswer: 'Gerry Rafferty',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'gerry rafferty', 'songs', 'british', 'scottish', 'singers'],
        dailyEligible: true
    },

    {
        id: 'music_0308',
        category: 'Music',
        question: 'Which artist recorded Year of the Cat?',
        answers: ['Gerry Rafferty', 'Al Stewart', 'Chris Rea', 'Dire Straits'],
        correctAnswer: 'Al Stewart',
        difficulty: 'Medium',
        tags: ['1970s', 'rock', 'al stewart', 'songs', 'british', 'scottish', 'singers'],
        dailyEligible: true
    },

    {
        id: 'music_0309',
        category: 'Music',
        question: 'Which artist recorded Brass in Pocket?',
        answers: ['Blondie', 'The Pretenders', 'Siouxsie and the Banshees', 'The Police'],
        correctAnswer: 'The Pretenders',
        difficulty: 'Easy',
        tags: ['1970s', 'new wave', 'the pretenders', 'songs', 'british', 'american', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0310',
        category: 'Music',
        question: 'Which artist recorded Roxanne?',
        answers: ['The Pretenders', 'The Police', 'Blondie', 'The Jam'],
        correctAnswer: 'The Police',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'new wave', 'the police', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0311',
        category: 'Music',
        question: 'Which artist recorded Message in a Bottle?',
        answers: ['The Jam', 'The Pretenders', 'The Police', 'Blondie'],
        correctAnswer: 'The Police',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'new wave', 'the police', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0312',
        category: 'Music',
        question: 'Which artist recorded London Calling?',
        answers: ['The Clash', 'The Jam', 'Sex Pistols', 'The Stranglers'],
        correctAnswer: 'The Clash',
        difficulty: 'Easy',
        tags: ['1970s', 'punk', 'the clash', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0313',
        category: 'Music',
        question: 'Which artist recorded Going Underground?',
        answers: ['The Clash', 'The Jam', 'The Stranglers', 'Sex Pistols'],
        correctAnswer: 'The Jam',
        difficulty: 'Medium',
        tags: ['1980s', 'mod revival', 'the jam', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0314',
        category: 'Music',
        question: 'Which artist recorded Golden Brown?',
        answers: ['The Jam', 'The Clash', 'The Stranglers', 'The Police'],
        correctAnswer: 'The Stranglers',
        difficulty: 'Medium',
        tags: ['1980s', 'new wave', 'the stranglers', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0315',
        category: 'Music',
        question: 'Which artist recorded Love Will Tear Us Apart?',
        answers: ['Joy Division', 'New Order', 'The Cure', 'The Smiths'],
        correctAnswer: 'Joy Division',
        difficulty: 'Easy',
        tags: ['1980s', 'post-punk', 'joy division', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0316',
        category: 'Music',
        question: 'Which artist recorded Blue Monday?',
        answers: ['Joy Division', 'New Order', 'Depeche Mode', 'The Cure'],
        correctAnswer: 'New Order',
        difficulty: 'Easy',
        tags: ['1980s', 'new wave', 'new order', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0317',
        category: 'Music',
        question: 'Which artist recorded Just Like Heaven?',
        answers: ['The Smiths', 'New Order', 'The Cure', 'Depeche Mode'],
        correctAnswer: 'The Cure',
        difficulty: 'Medium',
        tags: ['1980s', 'alternative', 'the cure', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0318',
        category: 'Music',
        question: 'Which artist recorded There Is a Light That Never Goes Out?',
        answers: ['The Cure', 'The Smiths', 'New Order', 'Joy Division'],
        correctAnswer: 'The Smiths',
        difficulty: 'Medium',
        tags: ['1980s', 'alternative', 'the smiths', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0319',
        category: 'Music',
        question: 'Which artist recorded Personal Jesus?',
        answers: ['Depeche Mode', 'New Order', 'The Cure', 'The Smiths'],
        correctAnswer: 'Depeche Mode',
        difficulty: 'Easy',
        tags: ['1980s', 'alternative', 'depeche mode', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0320',
        category: 'Music',
        question: 'Which artist recorded Sweet Dreams (Are Made of This)?',
        answers: ['Eurythmics', 'Yazoo', 'The Human League', 'Soft Cell'],
        correctAnswer: 'Eurythmics',
        difficulty: 'Easy',
        tags: ['1980s', 'synth-pop', 'eurythmics', 'songs', 'british', 'duos'],
        dailyEligible: true
    },

    {
        id: 'music_0321',
        category: 'Music',
        question: 'Which artist recorded Girls Just Want to Have Fun?',
        answers: ['Madonna', 'Cyndi Lauper', 'Belinda Carlisle', 'Kim Wilde'],
        correctAnswer: 'Cyndi Lauper',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'cyndi lauper', 'songs', 'american', 'singers', 'covers'],
        dailyEligible: true
    },

    {
        id: 'music_0322',
        category: 'Music',
        question: 'Which artist recorded Wake Me Up Before You Go-Go?',
        answers: ['Duran Duran', 'Wham!', 'Spandau Ballet', 'Culture Club'],
        correctAnswer: 'Wham!',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'wham', 'songs', 'british', 'duos'],
        dailyEligible: true
    },

    {
        id: 'music_0323',
        category: 'Music',
        question: 'Which artist recorded Rio?',
        answers: ['Wham!', 'Duran Duran', 'Spandau Ballet', 'A-ha'],
        correctAnswer: 'Duran Duran',
        difficulty: 'Easy',
        tags: ['1980s', 'new wave', 'duran duran', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0324',
        category: 'Music',
        question: 'Which artist recorded The Reflex?',
        answers: ['Spandau Ballet', 'A-ha', 'Duran Duran', 'Wham!'],
        correctAnswer: 'Duran Duran',
        difficulty: 'Medium',
        tags: ['1980s', 'new wave', 'duran duran', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0325',
        category: 'Music',
        question: 'Which artist recorded Take My Breath Away?',
        answers: ['Berlin', 'Heart', 'Starship', 'Foreigner'],
        correctAnswer: 'Berlin',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'rock', 'songs', 'american', 'bands', 'berlin', 'film soundtracks', 'top gun'],
        dailyEligible: true
    },

    {
        id: 'music_0326',
        category: 'Music',
        question: 'Which artist recorded Alone?',
        answers: ['Berlin', 'Heart', 'Starship', 'Foreigner'],
        correctAnswer: 'Heart',
        difficulty: 'Medium',
        tags: ['1980s', 'rock', 'heart', 'songs', 'american', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0327',
        category: 'Music',
        question: 'Which artist recorded Heaven Is a Place on Earth?',
        answers: ['Cyndi Lauper', 'Belinda Carlisle', 'Kim Wilde', 'Tiffany'],
        correctAnswer: 'Belinda Carlisle',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'belinda carlisle', 'songs', 'american', 'singers'],
        dailyEligible: true
    },

    {
        id: 'music_0328',
        category: 'Music',
        question: 'Which artist recorded Kids in America?',
        answers: ['Belinda Carlisle', 'Kim Wilde', 'Tiffany', 'Cyndi Lauper'],
        correctAnswer: 'Kim Wilde',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'kim wilde', 'songs', 'british', 'singers'],
        dailyEligible: true
    },

    {
        id: 'music_0329',
        category: 'Music',
        question: 'Which artist recorded I Think We\'re Alone Now?',
        answers: ['Kim Wilde', 'Tiffany', 'Belinda Carlisle', 'Cyndi Lauper'],
        correctAnswer: 'Tiffany',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'tiffany', 'songs', 'american', 'singers', 'covers'],
        dailyEligible: true
    },

    {
        id: 'music_0330',
        category: 'Music',
        question: 'Which artist recorded Never Gonna Give You Up?',
        answers: ['Rick Astley', 'Jason Donovan', 'Bros', 'Paul Young'],
        correctAnswer: 'Rick Astley',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'rick astley', 'songs', 'british', 'singers'],
        dailyEligible: true
    },

    {
        id: 'music_0331',
        category: 'Music',
        question: 'Which artist recorded Everybody Wants to Rule the World?',
        answers: ['Tears for Fears', 'Simple Minds', 'INXS', 'Talk Talk'],
        correctAnswer: 'Tears for Fears',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'new wave', 'tears for fears', 'songs', 'british', 'duos'],
        dailyEligible: true
    },

    {
        id: 'music_0332',
        category: 'Music',
        question: 'Which artist recorded Don\'t You (Forget About Me)?',
        answers: ['Tears for Fears', 'Simple Minds', 'INXS', 'U2'],
        correctAnswer: 'Simple Minds',
        difficulty: 'Easy',
        tags: ['1980s', 'rock', 'simple minds', 'songs', 'british', 'scottish', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0333',
        category: 'Music',
        question: 'Which artist recorded Need You Tonight?',
        answers: ['Simple Minds', 'INXS', 'Tears for Fears', 'Talk Talk'],
        correctAnswer: 'INXS',
        difficulty: 'Medium',
        tags: ['1980s', 'rock', 'inxs', 'songs', 'australian', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0334',
        category: 'Music',
        question: 'Which artist recorded Red Red Wine?',
        answers: ['UB40', 'Madness', 'The Specials', 'The Beat'],
        correctAnswer: 'UB40',
        difficulty: 'Easy',
        tags: ['1980s', 'reggae', 'british', 'ub40', 'songs', 'bands', 'covers'],
        dailyEligible: true
    },

    {
        id: 'music_0335',
        category: 'Music',
        question: 'Which artist recorded Ghost Town?',
        answers: ['Madness', 'The Specials', 'UB40', 'The Beat'],
        correctAnswer: 'The Specials',
        difficulty: 'Medium',
        tags: ['1980s', 'ska', 'british', 'the specials', 'songs', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0336',
        category: 'Music',
        question: 'Which artist recorded Town Called Malice?',
        answers: ['The Jam', 'The Specials', 'Madness', 'The Clash'],
        correctAnswer: 'The Jam',
        difficulty: 'Easy',
        tags: ['1980s', 'rock', 'mod revival', 'the jam', 'songs', 'british', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0337',
        category: 'Music',
        question: 'Which artist recorded Smalltown Boy?',
        answers: ['Bronski Beat', 'Erasure', 'Pet Shop Boys', 'Communards'],
        correctAnswer: 'Bronski Beat',
        difficulty: 'Medium',
        tags: ['1980s', 'synth-pop', 'british', 'songs', 'bands', 'bronski beat'],
        dailyEligible: true
    },

    {
        id: 'music_0338',
        category: 'Music',
        question: 'Which artist recorded Back to Life (However Do You Want Me)?',
        answers: ['Soul II Soul', 'En Vogue', 'SWV', 'TLC'],
        correctAnswer: 'Soul II Soul',
        difficulty: 'Medium',
        tags: ['1980s', 'soul', 'r&b', 'british', 'songs', 'dance groups', 'soul ii soul'],
        dailyEligible: true
    },

    {
        id: 'music_0339',
        category: 'Music',
        question: 'Which artist recorded Nothing\'s Gonna Stop Us Now?',
        answers: ['Heart', 'Starship', 'Foreigner', 'REO Speedwagon'],
        correctAnswer: 'Starship',
        difficulty: 'Easy',
        tags: ['1980s', 'rock', 'pop', 'songs', 'american', 'bands', 'starship', 'film soundtracks', 'mannequin'],
        dailyEligible: true
    },

    {
        id: 'music_0340',
        category: 'Music',
        question: 'Which artist recorded Africa?',
        answers: ['Journey', 'Toto', 'Foreigner', 'Boston'],
        correctAnswer: 'Toto',
        difficulty: 'Easy',
        tags: ['1980s', 'rock', 'toto', 'songs', 'american', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0341',
        category: 'Music',
        question: 'Which artist recorded Don\'t Stop Believin\'?',
        answers: ['Toto', 'Journey', 'Boston', 'Foreigner'],
        correctAnswer: 'Journey',
        difficulty: 'Easy',
        tags: ['1980s', 'rock', 'journey', 'songs', 'american', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0342',
        category: 'Music',
        question: 'Which artist recorded Sweet Child o\' Mine?',
        answers: ['Bon Jovi', 'Guns N\' Roses', 'Aerosmith', 'Def Leppard'],
        correctAnswer: 'Guns N\' Roses',
        difficulty: 'Easy',
        tags: ['1980s', 'rock', 'guns n roses', 'songs', 'american', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0343',
        category: 'Music',
        question: 'Which artist recorded Poison?',
        answers: ['Alice Cooper', 'Bon Jovi', 'Aerosmith', 'Guns N\' Roses'],
        correctAnswer: 'Alice Cooper',
        difficulty: 'Medium',
        tags: ['1980s', 'rock', 'alice cooper', 'songs', 'american', 'singers'],
        dailyEligible: true
    },

    {
        id: 'music_0344',
        category: 'Music',
        question: 'Which artist recorded Black Velvet?',
        answers: ['Cher', 'Alannah Myles', 'Tina Turner', 'Pat Benatar'],
        correctAnswer: 'Alannah Myles',
        difficulty: 'Medium',
        tags: ['1980s', 'rock', 'songs', 'canadian', 'singers', 'alannah myles'],
        dailyEligible: true
    },

    {
        id: 'music_0345',
        category: 'Music',
        question: 'Which artist recorded Vogue?',
        answers: ['Madonna', 'Kylie Minogue', 'Cher', 'Janet Jackson'],
        correctAnswer: 'Madonna',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'madonna', 'songs', 'american', 'singers'],
        dailyEligible: true
    },

    {
        id: 'music_0346',
        category: 'Music',
        question: 'Which artist recorded Frozen?',
        answers: ['Kylie Minogue', 'Madonna', 'Janet Jackson', 'Cher'],
        correctAnswer: 'Madonna',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'madonna', 'songs', 'american', 'singers'],
        dailyEligible: true
    },

    {
        id: 'music_0347',
        category: 'Music',
        question: 'Which artist recorded Ray of Light?',
        answers: ['Cher', 'Janet Jackson', 'Madonna', 'Kylie Minogue'],
        correctAnswer: 'Madonna',
        difficulty: 'Medium',
        tags: ['1990s', 'pop', 'madonna', 'songs', 'american', 'singers'],
        dailyEligible: true
    },

    {
        id: 'music_0348',
        category: 'Music',
        question: 'Which artist recorded Step by Step?',
        answers: ['Take That', 'New Kids on the Block', 'Boyzone', 'Backstreet Boys'],
        correctAnswer: 'New Kids on the Block',
        difficulty: 'Medium',
        tags: ['1990s', 'pop', 'boy bands', 'songs', 'american', 'new kids on the block'],
        dailyEligible: true
    },

    {
        id: 'music_0349',
        category: 'Music',
        question: 'Which artist recorded Back for Good?',
        answers: ['Boyzone', 'Take That', 'Backstreet Boys', 'Westlife'],
        correctAnswer: 'Take That',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'boy bands', 'take that', 'songs', 'british'],
        dailyEligible: true
    },

    {
        id: 'music_0350',
        category: 'Music',
        question: 'Which artist recorded No Matter What?',
        answers: ['Westlife', 'Backstreet Boys', 'Boyzone', 'Take That'],
        correctAnswer: 'Boyzone',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'boy bands', 'boyzone', 'songs', 'irish'],
        dailyEligible: true
    },

    {
        id: 'music_0351',
        category: 'Music',
        question: 'Which artist recorded I Want It That Way?',
        answers: ['Take That', 'Boyzone', 'Westlife', 'Backstreet Boys'],
        correctAnswer: 'Backstreet Boys',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'boy bands', 'songs', 'american', 'backstreet boys'],
        dailyEligible: true
    },

    {
        id: 'music_0352',
        category: 'Music',
        question: 'Which artist recorded Flying Without Wings?',
        answers: ['Westlife', 'Take That', 'Boyzone', 'Backstreet Boys'],
        correctAnswer: 'Westlife',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'boy bands', 'westlife', 'songs', 'irish'],
        dailyEligible: true
    },

    {
        id: 'music_0353',
        category: 'Music',
        question: 'Which artist recorded The Boy Is Mine with Monica?',
        answers: ['Brandy', 'Toni Braxton', 'Aaliyah', 'Janet Jackson'],
        correctAnswer: 'Brandy',
        difficulty: 'Medium',
        tags: ['1990s', 'r&b', 'duets', 'songs', 'american', 'singers', 'brandy', 'monica', 'collaborations'],
        dailyEligible: true
    },

    {
        id: 'music_0354',
        category: 'Music',
        question: 'Which artist recorded Un-Break My Heart?',
        answers: ['Brandy', 'Toni Braxton', 'Aaliyah', 'Monica'],
        correctAnswer: 'Toni Braxton',
        difficulty: 'Easy',
        tags: ['1990s', 'r&b', 'songs', 'american', 'singers', 'toni braxton'],
        dailyEligible: true
    },

    {
        id: 'music_0355',
        category: 'Music',
        question: 'Which artist recorded Waterfalls?',
        answers: ['En Vogue', 'TLC', 'SWV', 'Destiny\'s Child'],
        correctAnswer: 'TLC',
        difficulty: 'Easy',
        tags: ['1990s', 'r&b', 'songs', 'american', 'girl groups', 'tlc'],
        dailyEligible: true
    },

    {
        id: 'music_0356',
        category: 'Music',
        question: 'Which artist recorded Don\'t Speak?',
        answers: ['Garbage', 'No Doubt', 'The Cardigans', 'Republica'],
        correctAnswer: 'No Doubt',
        difficulty: 'Easy',
        tags: ['1990s', 'rock', 'pop', 'songs', 'american', 'bands', 'no doubt'],
        dailyEligible: true
    },

    {
        id: 'music_0357',
        category: 'Music',
        question: 'Which artist recorded Lovefool?',
        answers: ['No Doubt', 'Garbage', 'The Cardigans', 'Republica'],
        correctAnswer: 'The Cardigans',
        difficulty: 'Medium',
        tags: ['1990s', 'pop', 'rock', 'songs', 'swedish', 'bands', 'the cardigans'],
        dailyEligible: true
    },

    {
        id: 'music_0358',
        category: 'Music',
        question: 'Which artist recorded You Oughta Know?',
        answers: ['Sheryl Crow', 'Alanis Morissette', 'Meredith Brooks', 'Natalie Imbruglia'],
        correctAnswer: 'Alanis Morissette',
        difficulty: 'Easy',
        tags: ['1990s', 'rock', 'pop', 'songs', 'canadian', 'singers', 'alanis morissette'],
        dailyEligible: true
    },

    {
        id: 'music_0359',
        category: 'Music',
        question: 'Which artist recorded All I Wanna Do?',
        answers: ['Alanis Morissette', 'Sheryl Crow', 'Meredith Brooks', 'Joan Osborne'],
        correctAnswer: 'Sheryl Crow',
        difficulty: 'Medium',
        tags: ['1990s', 'rock', 'pop', 'songs', 'american', 'singers', 'sheryl crow'],
        dailyEligible: true
    },

    {
        id: 'music_0360',
        category: 'Music',
        question: 'Which artist recorded Kiss Me?',
        answers: ['The Corrs', 'Sixpence None the Richer', 'The Cranberries', 'The Cardigans'],
        correctAnswer: 'Sixpence None the Richer',
        difficulty: 'Medium',
        tags: ['1990s', 'pop', 'songs', 'american', 'bands', 'sixpence none the richer'],
        dailyEligible: true
    },

    {
        id: 'music_0361',
        category: 'Music',
        question: 'Which artist recorded Amazed?',
        answers: ['Lonestar', 'Faith Hill', 'Tim McGraw', 'LeAnn Rimes'],
        correctAnswer: 'Lonestar',
        difficulty: 'Easy',
        tags: ['1990s', 'country', 'songs', 'american', 'bands', 'lonestar'],
        dailyEligible: true
    },

    {
        id: 'music_0362',
        category: 'Music',
        question: 'Which artist recorded This Kiss?',
        answers: ['Shania Twain', 'Faith Hill', 'LeAnn Rimes', 'Martina McBride'],
        correctAnswer: 'Faith Hill',
        difficulty: 'Medium',
        tags: ['1990s', 'country', 'songs', 'american', 'singers', 'faith hill'],
        dailyEligible: true
    },

    {
        id: 'music_0363',
        category: 'Music',
        question: 'Which artist recorded Because of You?',
        answers: ['Kelly Clarkson', 'Pink', 'Avril Lavigne', 'Michelle Branch'],
        correctAnswer: 'Kelly Clarkson',
        difficulty: 'Easy',
        tags: ['2000s', 'pop', 'kelly clarkson', 'songs', 'american', 'singers'],
        dailyEligible: true
    },

    {
        id: 'music_0364',
        category: 'Music',
        question: 'Which artist recorded Mr. Brightside?',
        answers: ['The Killers', 'Snow Patrol', 'Franz Ferdinand', 'Keane'],
        correctAnswer: 'The Killers',
        difficulty: 'Easy',
        tags: ['2000s', 'rock', 'indie', 'the killers', 'songs', 'american', 'bands'],
        dailyEligible: true
    },

    {
        id: 'music_0365',
        category: 'Music',
        question: 'Which artist recorded Take Me Out?',
        answers: ['The Killers', 'Franz Ferdinand', 'Kaiser Chiefs', 'Snow Patrol'],
        correctAnswer: 'Franz Ferdinand',
        difficulty: 'Medium',
        tags: ['2000s', 'rock', 'indie', 'songs', 'british', 'scottish', 'bands', 'franz ferdinand'],
        dailyEligible: true
    },

    {
        id: 'music_0366',
        category: 'Music',
        question: 'Which artist recorded Dakota?',
        answers: ['Stereophonics', 'Snow Patrol', 'Keane', 'Kaiser Chiefs'],
        correctAnswer: 'Stereophonics',
        difficulty: 'Easy',
        tags: ['2000s', 'rock', 'british', 'stereophonics', 'songs', 'welsh', 'bands'],
        dailyEligible: true
    }

];

module.exports = questions;
