// quiz_pack27.js
// PuzzlePilot Big Quiz
// Pack 27 - 100 Music questions
// Music specialist bank - artist/song questions

const questions = [

    // =========================================================
    // MUSIC - 1960s
    // =========================================================

    {
        id: 'music_0767',
        category: 'Music',
        question: 'Which artist recorded I Close My Eyes and Count to Ten?',
        answers: ['Dusty Springfield', 'Cilla Black', 'Petula Clark', 'Sandie Shaw'],
        correctAnswer: 'Dusty Springfield',
        difficulty: 'Medium',
        tags: ['1960s', 'pop', 'dusty springfield', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0768',
        category: 'Music',
        question: 'Which artist recorded I Only Want to Be with You?',
        answers: ['Dusty Springfield', 'Lulu', 'Cilla Black', 'Petula Clark'],
        correctAnswer: 'Dusty Springfield',
        difficulty: 'Easy',
        tags: ['1960s', 'pop', 'dusty springfield', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0769',
        category: 'Music',
        question: 'Which artist recorded Shout in 1964?',
        answers: ['Lulu', 'Cilla Black', 'Sandie Shaw', 'Dusty Springfield'],
        correctAnswer: 'Lulu',
        difficulty: 'Medium',
        tags: ['1960s', 'pop', 'lulu', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0770',
        category: 'Music',
        question: 'Which artist recorded You\'re My World?',
        answers: ['Cilla Black', 'Petula Clark', 'Sandie Shaw', 'Lulu'],
        correctAnswer: 'Cilla Black',
        difficulty: 'Medium',
        tags: ['1960s', 'pop', 'cilla black', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0771',
        category: 'Music',
        question: 'Which artist recorded Always Something There to Remind Me in 1964?',
        answers: ['Sandie Shaw', 'Cilla Black', 'Dusty Springfield', 'Petula Clark'],
        correctAnswer: 'Sandie Shaw',
        difficulty: 'Medium',
        tags: ['1960s', 'pop', 'sandie shaw', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0772',
        category: 'Music',
        question: 'Which artist recorded Don\'t Sleep in the Subway?',
        answers: ['Petula Clark', 'Cilla Black', 'Dusty Springfield', 'Sandie Shaw'],
        correctAnswer: 'Petula Clark',
        difficulty: 'Medium',
        tags: ['1960s', 'pop', 'petula clark', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0773',
        category: 'Music',
        question: 'Which artist recorded The Young Ones?',
        answers: ['Cliff Richard', 'Adam Faith', 'Billy Fury', 'Marty Wilde'],
        correctAnswer: 'Cliff Richard',
        difficulty: 'Easy',
        tags: ['1960s', 'pop', 'cliff richard', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0774',
        category: 'Music',
        question: 'Which artist recorded Summer Holiday?',
        answers: ['Cliff Richard', 'Billy Fury', 'Adam Faith', 'Marty Wilde'],
        correctAnswer: 'Cliff Richard',
        difficulty: 'Easy',
        tags: ['1960s', 'pop', 'cliff richard', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0775',
        category: 'Music',
        question: 'Which artist recorded Halfway to Paradise?',
        answers: ['Billy Fury', 'Cliff Richard', 'Adam Faith', 'Marty Wilde'],
        correctAnswer: 'Billy Fury',
        difficulty: 'Medium',
        tags: ['1960s', 'pop', 'billy fury', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0776',
        category: 'Music',
        question: 'Which artist recorded What Do You Want?',
        answers: ['Adam Faith', 'Billy Fury', 'Cliff Richard', 'Marty Wilde'],
        correctAnswer: 'Adam Faith',
        difficulty: 'Medium',
        tags: ['1950s', 'pop', 'adam faith', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0777',
        category: 'Music',
        question: 'Which artist recorded Bad to Me?',
        answers: ['Billy J. Kramer with The Dakotas', 'Gerry and the Pacemakers', 'The Searchers', 'The Swinging Blue Jeans'],
        correctAnswer: 'Billy J. Kramer with The Dakotas',
        difficulty: 'Medium',
        tags: ['1960s', 'pop', 'merseybeat', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0778',
        category: 'Music',
        question: 'Which artist recorded How Do You Do It?',
        answers: ['Gerry and the Pacemakers', 'The Searchers', 'The Hollies', 'The Swinging Blue Jeans'],
        correctAnswer: 'Gerry and the Pacemakers',
        difficulty: 'Medium',
        tags: ['1960s', 'pop', 'merseybeat', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0779',
        category: 'Music',
        question: 'Which artist recorded Ferry Cross the Mersey?',
        answers: ['Gerry and the Pacemakers', 'The Searchers', 'The Hollies', 'The Merseybeats'],
        correctAnswer: 'Gerry and the Pacemakers',
        difficulty: 'Easy',
        tags: ['1960s', 'pop', 'merseybeat', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0780',
        category: 'Music',
        question: 'Which artist recorded Hippy Hippy Shake?',
        answers: ['The Swinging Blue Jeans', 'The Searchers', 'The Merseybeats', 'The Hollies'],
        correctAnswer: 'The Swinging Blue Jeans',
        difficulty: 'Medium',
        tags: ['1960s', 'rock', 'merseybeat', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0781',
        category: 'Music',
        question: 'Which artist recorded Sweets for My Sweet in 1963?',
        answers: ['The Searchers', 'The Hollies', 'The Swinging Blue Jeans', 'The Merseybeats'],
        correctAnswer: 'The Searchers',
        difficulty: 'Medium',
        tags: ['1960s', 'pop', 'merseybeat', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0782',
        category: 'Music',
        question: 'Which artist recorded I\'m Alive in 1965?',
        answers: ['The Hollies', 'The Searchers', 'The Kinks', 'The Animals'],
        correctAnswer: 'The Hollies',
        difficulty: 'Medium',
        tags: ['1960s', 'pop', 'the hollies', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0783',
        category: 'Music',
        question: 'Which artist recorded We Gotta Get Out of This Place?',
        answers: ['The Animals', 'The Kinks', 'The Who', 'The Yardbirds'],
        correctAnswer: 'The Animals',
        difficulty: 'Easy',
        tags: ['1960s', 'rock', 'the animals', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0784',
        category: 'Music',
        question: 'Which artist recorded For Your Love?',
        answers: ['The Yardbirds', 'The Animals', 'The Kinks', 'The Who'],
        correctAnswer: 'The Yardbirds',
        difficulty: 'Medium',
        tags: ['1960s', 'rock', 'the yardbirds', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0785',
        category: 'Music',
        question: 'Which artist recorded Go Now?',
        answers: ['The Moody Blues', 'The Animals', 'The Zombies', 'Procol Harum'],
        correctAnswer: 'The Moody Blues',
        difficulty: 'Medium',
        tags: ['1960s', 'rock', 'the moody blues', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0786',
        category: 'Music',
        question: 'Which artist recorded Pictures of Matchstick Men?',
        answers: ['Status Quo', 'The Move', 'The Small Faces', 'Traffic'],
        correctAnswer: 'Status Quo',
        difficulty: 'Medium',
        tags: ['1960s', 'rock', 'status quo', 'songs'],
        dailyEligible: true
    },

    // =========================================================
    // MUSIC - 1970s
    // =========================================================

    {
        id: 'music_0787',
        category: 'Music',
        question: 'Which artist recorded The Man with the Child in His Eyes?',
        answers: ['Kate Bush', 'Elkie Brooks', 'Joan Armatrading', 'Judie Tzuke'],
        correctAnswer: 'Kate Bush',
        difficulty: 'Medium',
        tags: ['1970s', 'pop', 'kate bush', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0788',
        category: 'Music',
        question: 'Which artist recorded Pearl\'s a Singer?',
        answers: ['Elkie Brooks', 'Joan Armatrading', 'Kate Bush', 'Judie Tzuke'],
        correctAnswer: 'Elkie Brooks',
        difficulty: 'Medium',
        tags: ['1970s', 'pop', 'rock', 'elkie brooks', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0789',
        category: 'Music',
        question: 'Which artist recorded Love and Affection?',
        answers: ['Joan Armatrading', 'Elkie Brooks', 'Judie Tzuke', 'Carly Simon'],
        correctAnswer: 'Joan Armatrading',
        difficulty: 'Medium',
        tags: ['1970s', 'pop', 'rock', 'joan armatrading', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0790',
        category: 'Music',
        question: 'Which artist recorded Stay with Me Till Dawn?',
        answers: ['Judie Tzuke', 'Elkie Brooks', 'Joan Armatrading', 'Kate Bush'],
        correctAnswer: 'Judie Tzuke',
        difficulty: 'Medium',
        tags: ['1970s', 'pop', 'rock', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0791',
        category: 'Music',
        question: 'Which artist recorded On the Border?',
        answers: ['Al Stewart', 'Gerry Rafferty', 'Chris Rea', 'Leo Sayer'],
        correctAnswer: 'Al Stewart',
        difficulty: 'Medium',
        tags: ['1970s', 'rock', 'al stewart', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0792',
        category: 'Music',
        question: 'Which artist recorded Dreadlock Holiday?',
        answers: ['10cc', 'Supertramp', 'Squeeze', 'Stealers Wheel'],
        correctAnswer: '10cc',
        difficulty: 'Easy',
        tags: ['1970s', 'pop', 'rock', '10cc', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0793',
        category: 'Music',
        question: 'Which artist recorded Rubber Bullets?',
        answers: ['10cc', 'Squeeze', 'Supertramp', 'Sailor'],
        correctAnswer: '10cc',
        difficulty: 'Medium',
        tags: ['1970s', 'pop', 'rock', '10cc', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0794',
        category: 'Music',
        question: 'Which artist recorded Girls, Girls, Girls in 1975?',
        answers: ['Sailor', 'Pilot', 'Smokie', 'Mud'],
        correctAnswer: 'Sailor',
        difficulty: 'Medium',
        tags: ['1970s', 'pop', 'sailor', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0795',
        category: 'Music',
        question: 'Which artist recorded Living Next Door to Alice?',
        answers: ['Smokie', 'Sailor', 'Pilot', 'Racey'],
        correctAnswer: 'Smokie',
        difficulty: 'Easy',
        tags: ['1970s', 'pop', 'rock', 'smokie', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0796',
        category: 'Music',
        question: 'Which artist recorded Some Girls in 1979?',
        answers: ['Racey', 'Smokie', 'Sailor', 'Showaddywaddy'],
        correctAnswer: 'Racey',
        difficulty: 'Medium',
        tags: ['1970s', 'pop', 'racey', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0797',
        category: 'Music',
        question: 'Which artist recorded Under the Moon of Love?',
        answers: ['Showaddywaddy', 'Mud', 'Racey', 'Rubettes'],
        correctAnswer: 'Showaddywaddy',
        difficulty: 'Easy',
        tags: ['1970s', 'pop', 'showaddywaddy', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0798',
        category: 'Music',
        question: 'Which artist recorded Sugar Baby Love?',
        answers: ['The Rubettes', 'Showaddywaddy', 'Mud', 'Racey'],
        correctAnswer: 'The Rubettes',
        difficulty: 'Easy',
        tags: ['1970s', 'pop', 'the rubettes', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0799',
        category: 'Music',
        question: 'Which artist recorded Rock Me Gently in 1974?',
        answers: ['Andy Kim', 'David Cassidy', 'Leo Sayer', 'Gilbert O\'Sullivan'],
        correctAnswer: 'Andy Kim',
        difficulty: 'Medium',
        tags: ['1970s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0800',
        category: 'Music',
        question: 'Which artist recorded Alone Again (Naturally)?',
        answers: ['Gilbert O\'Sullivan', 'Leo Sayer', 'David Essex', 'David Cassidy'],
        correctAnswer: 'Gilbert O\'Sullivan',
        difficulty: 'Medium',
        tags: ['1970s', 'pop', 'gilbert osullivan', 'songs'],
        dailyEligible: true
    },
    {
        id: 'music_0801',
        category: 'Music',
        question: 'Which artist recorded How Can I Be Sure in 1972?',
        answers: ['David Cassidy', 'Gilbert O\'Sullivan', 'Leo Sayer', 'Donny Osmond'],
        correctAnswer: 'David Cassidy',
        difficulty: 'Medium',
        tags: ['1970s', 'pop', 'david cassidy', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0802',
        category: 'Music',
        question: 'Which artist recorded Puppy Love in 1972?',
        answers: ['Donny Osmond', 'David Cassidy', 'David Essex', 'Leo Sayer'],
        correctAnswer: 'Donny Osmond',
        difficulty: 'Easy',
        tags: ['1970s', 'pop', 'donny osmond', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0803',
        category: 'Music',
        question: 'Which artist recorded Crazy Horses?',
        answers: ['The Osmonds', 'Bay City Rollers', 'Sweet', 'Mud'],
        correctAnswer: 'The Osmonds',
        difficulty: 'Easy',
        tags: ['1970s', 'pop', 'rock', 'the osmonds', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0804',
        category: 'Music',
        question: 'Which artist recorded Dyna-mite?',
        answers: ['Mud', 'Sweet', 'Slade', 'The Rubettes'],
        correctAnswer: 'Mud',
        difficulty: 'Medium',
        tags: ['1970s', 'glam rock', 'mud', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0805',
        category: 'Music',
        question: 'Which artist recorded Action?',
        answers: ['Sweet', 'Slade', 'Mud', 'T. Rex'],
        correctAnswer: 'Sweet',
        difficulty: 'Easy',
        tags: ['1970s', 'glam rock', 'sweet', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0806',
        category: 'Music',
        question: 'Which artist recorded Jeepster?',
        answers: ['T. Rex', 'Sweet', 'Slade', 'Mud'],
        correctAnswer: 'T. Rex',
        difficulty: 'Easy',
        tags: ['1970s', 'glam rock', 't rex', 'songs'],
        dailyEligible: true
    },

    // =========================================================
    // MUSIC - 1980s
    // =========================================================

    {
        id: 'music_0807',
        category: 'Music',
        question: 'Which artist recorded Big Apple?',
        answers: ['Kajagoogoo', 'Duran Duran', 'Spandau Ballet', 'A Flock of Seagulls'],
        correctAnswer: 'Kajagoogoo',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'new wave', 'kajagoogoo', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0808',
        category: 'Music',
        question: 'Which artist recorded Wishing (If I Had a Photograph of You)?',
        answers: ['A Flock of Seagulls', 'Kajagoogoo', 'Talk Talk', 'Visage'],
        correctAnswer: 'A Flock of Seagulls',
        difficulty: 'Medium',
        tags: ['1980s', 'new wave', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0809',
        category: 'Music',
        question: 'Which artist recorded Tempted?',
        answers: ['Squeeze', 'The Jam', 'The Police', 'Elvis Costello and the Attractions'],
        correctAnswer: 'Squeeze',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'rock', 'squeeze', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0810',
        category: 'Music',
        question: 'Which artist recorded Labelled with Love?',
        answers: ['Squeeze', 'The Jam', 'Madness', 'The Specials'],
        correctAnswer: 'Squeeze',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'squeeze', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0811',
        category: 'Music',
        question: 'Which artist recorded A Good Heart?',
        answers: ['Feargal Sharkey', 'Paul Young', 'Nik Kershaw', 'Howard Jones'],
        correctAnswer: 'Feargal Sharkey',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'feargal sharkey', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0812',
        category: 'Music',
        question: 'Which artist recorded Invisible?',
        answers: ['Alison Moyet', 'Annie Lennox', 'Kim Wilde', 'Toyah'],
        correctAnswer: 'Alison Moyet',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'alison moyet', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0813',
        category: 'Music',
        question: 'Which artist recorded Weak in the Presence of Beauty?',
        answers: ['Alison Moyet', 'Kim Wilde', 'Belinda Carlisle', 'Annie Lennox'],
        correctAnswer: 'Alison Moyet',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'alison moyet', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0814',
        category: 'Music',
        question: 'Which artist recorded Chequered Love?',
        answers: ['Kim Wilde', 'Belinda Carlisle', 'Toyah', 'Alison Moyet'],
        correctAnswer: 'Kim Wilde',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'kim wilde', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0815',
        category: 'Music',
        question: 'Which artist recorded Cambodia?',
        answers: ['Kim Wilde', 'Toyah', 'Alison Moyet', 'Hazel O\'Connor'],
        correctAnswer: 'Kim Wilde',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'kim wilde', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0816',
        category: 'Music',
        question: 'Which artist recorded It\'s a Mystery?',
        answers: ['Toyah', 'Kim Wilde', 'Hazel O\'Connor', 'Siouxsie and the Banshees'],
        correctAnswer: 'Toyah',
        difficulty: 'Medium',
        tags: ['1980s', 'new wave', 'toyah', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0817',
        category: 'Music',
        question: 'Which artist recorded Eighth Day?',
        answers: ['Hazel O\'Connor', 'Toyah', 'Kim Wilde', 'Lene Lovich'],
        correctAnswer: 'Hazel O\'Connor',
        difficulty: 'Medium',
        tags: ['1980s', 'new wave', 'hazel oconnor', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0818',
        category: 'Music',
        question: 'Which artist recorded Something Better Change?',
        answers: ['The Stranglers', 'The Cure', 'The Jam', 'The Psychedelic Furs'],
        correctAnswer: 'The Stranglers',
        difficulty: 'Easy',
        tags: ['1970s', 'rock', 'new wave', 'the stranglers', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0819',
        category: 'Music',
        question: 'Which artist recorded Heaven?',
        answers: ['The Psychedelic Furs', 'The Cure', 'Echo & the Bunnymen', 'The Stranglers'],
        correctAnswer: 'The Psychedelic Furs',
        difficulty: 'Medium',
        tags: ['1980s', 'alternative', 'rock', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0820',
        category: 'Music',
        question: 'Which artist recorded The Killing Moon?',
        answers: ['Echo & the Bunnymen', 'The Cure', 'The Psychedelic Furs', 'The Smiths'],
        correctAnswer: 'Echo & the Bunnymen',
        difficulty: 'Medium',
        tags: ['1980s', 'alternative', 'rock', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0821',
        category: 'Music',
        question: 'Which artist recorded Bigmouth Strikes Again?',
        answers: ['The Smiths', 'The Cure', 'Echo & the Bunnymen', 'New Order'],
        correctAnswer: 'The Smiths',
        difficulty: 'Easy',
        tags: ['1980s', 'alternative', 'rock', 'the smiths', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0822',
        category: 'Music',
        question: 'Which artist recorded Bizarre Love Triangle?',
        answers: ['New Order', 'Depeche Mode', 'The Cure', 'Pet Shop Boys'],
        correctAnswer: 'New Order',
        difficulty: 'Medium',
        tags: ['1980s', 'alternative', 'new order', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0823',
        category: 'Music',
        question: 'Which artist recorded Always on My Mind in 1987?',
        answers: ['Pet Shop Boys', 'Erasure', 'New Order', 'Depeche Mode'],
        correctAnswer: 'Pet Shop Boys',
        difficulty: 'Easy',
        tags: ['1980s', 'synth-pop', 'pet shop boys', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0824',
        category: 'Music',
        question: 'Which artist recorded Chains of Love?',
        answers: ['Erasure', 'Pet Shop Boys', 'Depeche Mode', 'Bronski Beat'],
        correctAnswer: 'Erasure',
        difficulty: 'Medium',
        tags: ['1980s', 'synth-pop', 'erasure', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0825',
        category: 'Music',
        question: 'Which artist recorded Don\'t Leave Me This Way in 1986?',
        answers: ['The Communards', 'Bronski Beat', 'Erasure', 'Pet Shop Boys'],
        correctAnswer: 'The Communards',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'dance', 'the communards', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0826',
        category: 'Music',
        question: 'Which artist recorded Never Can Say Goodbye in 1987?',
        answers: ['The Communards', 'Erasure', 'Bronski Beat', 'Pet Shop Boys'],
        correctAnswer: 'The Communards',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'dance', 'the communards', 'songs'],
        dailyEligible: true
    },

    // =========================================================
    // MUSIC - 1990s
    // =========================================================

    {
        id: 'music_0827',
        category: 'Music',
        question: 'Which artist recorded The One and Only?',
        answers: ['Chesney Hawkes', 'Nik Kershaw', 'Rick Astley', 'Jason Donovan'],
        correctAnswer: 'Chesney Hawkes',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'chesney hawkes', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0828',
        category: 'Music',
        question: 'Which artist recorded Sleeping Satellite?',
        answers: ['Tasmin Archer', 'Des\'ree', 'Gabrielle', 'Lisa Stansfield'],
        correctAnswer: 'Tasmin Archer',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'tasmin archer', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0829',
        category: 'Music',
        question: 'Which artist recorded Dreams in 1993?',
        answers: ['Gabrielle', 'Des\'ree', 'Lisa Stansfield', 'Tasmin Archer'],
        correctAnswer: 'Gabrielle',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'gabrielle', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0830',
        category: 'Music',
        question: 'Which artist recorded You Gotta Be?',
        answers: ['Des\'ree', 'Gabrielle', 'Lisa Stansfield', 'Beverley Knight'],
        correctAnswer: 'Des\'ree',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'soul', 'desree', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0831',
        category: 'Music',
        question: 'Which artist recorded This Is the Right Time?',
        answers: ['Lisa Stansfield', 'Gabrielle', 'Des\'ree', 'Beverley Knight'],
        correctAnswer: 'Lisa Stansfield',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'soul', 'lisa stansfield', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0832',
        category: 'Music',
        question: 'Which artist recorded Don\'t Stop Movin\'?',
        answers: ['Livin\' Joy', 'Baby D', 'Strike', 'N-Trance'],
        correctAnswer: 'Livin\' Joy',
        difficulty: 'Medium',
        tags: ['1990s', 'dance', 'livin joy', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0833',
        category: 'Music',
        question: 'Which artist recorded Let Me Be Your Fantasy?',
        answers: ['Baby D', 'Livin\' Joy', 'Strike', 'N-Trance'],
        correctAnswer: 'Baby D',
        difficulty: 'Medium',
        tags: ['1990s', 'dance', 'songs'],
        dailyEligible: true
    },
    {
        id: 'music_0834',
        category: 'Music',
        question: 'Which artist recorded U Sure Do?',
        answers: ['Strike', 'Baby D', 'Livin\' Joy', 'N-Trance'],
        correctAnswer: 'Strike',
        difficulty: 'Medium',
        tags: ['1990s', 'dance', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0835',
        category: 'Music',
        question: 'Which artist recorded Set You Free?',
        answers: ['N-Trance', 'Strike', 'Baby D', 'Livin\' Joy'],
        correctAnswer: 'N-Trance',
        difficulty: 'Easy',
        tags: ['1990s', 'dance', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0836',
        category: 'Music',
        question: 'Which artist recorded Children?',
        answers: ['Robert Miles', 'Faithless', 'ATB', 'Sash!'],
        correctAnswer: 'Robert Miles',
        difficulty: 'Easy',
        tags: ['1990s', 'dance', 'electronic', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0837',
        category: 'Music',
        question: 'Which artist recorded Encore une fois?',
        answers: ['Sash!', 'Robert Miles', 'ATB', 'Faithless'],
        correctAnswer: 'Sash!',
        difficulty: 'Medium',
        tags: ['1990s', 'dance', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0838',
        category: 'Music',
        question: 'Which artist recorded 9 PM (Till I Come)?',
        answers: ['ATB', 'Sash!', 'Robert Miles', 'Darude'],
        correctAnswer: 'ATB',
        difficulty: 'Medium',
        tags: ['1990s', 'dance', 'trance', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0839',
        category: 'Music',
        question: 'Which artist recorded Sandstorm?',
        answers: ['Darude', 'ATB', 'Sash!', 'Robert Miles'],
        correctAnswer: 'Darude',
        difficulty: 'Easy',
        tags: ['1990s', 'dance', 'trance', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0840',
        category: 'Music',
        question: 'Which artist recorded Mysterious Girl?',
        answers: ['Peter Andre', 'Mark Morrison', 'Shaggy', 'Lou Bega'],
        correctAnswer: 'Peter Andre',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'peter andre', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0841',
        category: 'Music',
        question: 'Which artist recorded Boombastic?',
        answers: ['Shaggy', 'Peter Andre', 'Ini Kamoze', 'Lou Bega'],
        correctAnswer: 'Shaggy',
        difficulty: 'Easy',
        tags: ['1990s', 'reggae', 'pop', 'shaggy', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0842',
        category: 'Music',
        question: 'Which artist recorded Here Comes the Hotstepper?',
        answers: ['Ini Kamoze', 'Shaggy', 'Snow', 'Chaka Demus & Pliers'],
        correctAnswer: 'Ini Kamoze',
        difficulty: 'Medium',
        tags: ['1990s', 'reggae', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0843',
        category: 'Music',
        question: 'Which artist recorded Informer?',
        answers: ['Snow', 'Shaggy', 'Ini Kamoze', 'Apache Indian'],
        correctAnswer: 'Snow',
        difficulty: 'Medium',
        tags: ['1990s', 'reggae', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0844',
        category: 'Music',
        question: 'Which artist recorded Mambo No. 5?',
        answers: ['Lou Bega', 'Ricky Martin', 'Shaggy', 'Los del Río'],
        correctAnswer: 'Lou Bega',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'lou bega', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0845',
        category: 'Music',
        question: 'Which artist recorded Macarena?',
        answers: ['Los del Río', 'Lou Bega', 'Ricky Martin', 'Bellini'],
        correctAnswer: 'Los del Río',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'dance', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0846',
        category: 'Music',
        question: 'Which artist recorded Livin\' la Vida Loca?',
        answers: ['Ricky Martin', 'Enrique Iglesias', 'Lou Bega', 'Marc Anthony'],
        correctAnswer: 'Ricky Martin',
        difficulty: 'Easy',
        tags: ['1990s', 'latin pop', 'ricky martin', 'songs'],
        dailyEligible: true
    },

    // =========================================================
    // MUSIC - 2000s AND COUNTRY
    // =========================================================

    {
        id: 'music_0847',
        category: 'Music',
        question: 'Which artist recorded This Love in 2004?',
        answers: ['Maroon 5', 'The Script', 'OneRepublic', 'The Fray'],
        correctAnswer: 'Maroon 5',
        difficulty: 'Easy',
        tags: ['2000s', 'pop', 'rock', 'maroon 5', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0848',
        category: 'Music',
        question: 'Which artist recorded She Will Be Loved?',
        answers: ['Maroon 5', 'The Fray', 'The Script', 'OneRepublic'],
        correctAnswer: 'Maroon 5',
        difficulty: 'Easy',
        tags: ['2000s', 'pop', 'rock', 'maroon 5', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0849',
        category: 'Music',
        question: 'Which artist recorded How to Save a Life?',
        answers: ['The Fray', 'OneRepublic', 'The Script', 'Snow Patrol'],
        correctAnswer: 'The Fray',
        difficulty: 'Easy',
        tags: ['2000s', 'pop', 'rock', 'the fray', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0850',
        category: 'Music',
        question: 'Which artist recorded Apologize with Timbaland?',
        answers: ['OneRepublic', 'The Fray', 'The Script', 'Maroon 5'],
        correctAnswer: 'OneRepublic',
        difficulty: 'Easy',
        tags: ['2000s', 'pop', 'rock', 'onerepublic', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0851',
        category: 'Music',
        question: 'Which artist recorded The Man Who Can\'t Be Moved?',
        answers: ['The Script', 'OneRepublic', 'The Fray', 'Snow Patrol'],
        correctAnswer: 'The Script',
        difficulty: 'Easy',
        tags: ['2000s', 'pop', 'rock', 'the script', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0852',
        category: 'Music',
        question: 'Which artist recorded Somewhere Only We Know?',
        answers: ['Keane', 'Snow Patrol', 'Coldplay', 'The Fray'],
        correctAnswer: 'Keane',
        difficulty: 'Easy',
        tags: ['2000s', 'alternative', 'rock', 'keane', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0853',
        category: 'Music',
        question: 'Which artist recorded Everybody\'s Changing?',
        answers: ['Keane', 'Coldplay', 'Snow Patrol', 'Travis'],
        correctAnswer: 'Keane',
        difficulty: 'Medium',
        tags: ['2000s', 'alternative', 'rock', 'keane', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0854',
        category: 'Music',
        question: 'Which artist recorded Yellow?',
        answers: ['Coldplay', 'Keane', 'Travis', 'Snow Patrol'],
        correctAnswer: 'Coldplay',
        difficulty: 'Easy',
        tags: ['2000s', 'alternative', 'rock', 'coldplay', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0855',
        category: 'Music',
        question: 'Which artist recorded The Scientist?',
        answers: ['Coldplay', 'Keane', 'Snow Patrol', 'Travis'],
        correctAnswer: 'Coldplay',
        difficulty: 'Easy',
        tags: ['2000s', 'alternative', 'rock', 'coldplay', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0856',
        category: 'Music',
        question: 'Which artist recorded Why Does It Always Rain on Me?',
        answers: ['Travis', 'Coldplay', 'Keane', 'Snow Patrol'],
        correctAnswer: 'Travis',
        difficulty: 'Easy',
        tags: ['1990s', 'alternative', 'rock', 'travis', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0857',
        category: 'Music',
        question: 'Which artist recorded Drops of Jupiter?',
        answers: ['Train', 'The Fray', 'Lifehouse', 'Matchbox Twenty'],
        correctAnswer: 'Train',
        difficulty: 'Easy',
        tags: ['2000s', 'pop', 'rock', 'train', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0858',
        category: 'Music',
        question: 'Which artist recorded Hanging by a Moment?',
        answers: ['Lifehouse', 'Train', 'The Calling', 'Hoobastank'],
        correctAnswer: 'Lifehouse',
        difficulty: 'Medium',
        tags: ['2000s', 'rock', 'lifehouse', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0859',
        category: 'Music',
        question: 'Which artist recorded The Reason?',
        answers: ['Hoobastank', 'Lifehouse', 'The Calling', 'Train'],
        correctAnswer: 'Hoobastank',
        difficulty: 'Easy',
        tags: ['2000s', 'rock', 'hoobastank', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0860',
        category: 'Music',
        question: 'Which artist recorded Man of Constant Sorrow for the film O Brother, Where Art Thou??',
        answers: ['The Soggy Bottom Boys', 'Alison Krauss & Union Station', 'Old Crow Medicine Show', 'The Steeldrivers'],
        correctAnswer: 'The Soggy Bottom Boys',
        difficulty: 'Medium',
        tags: ['2000s', 'country', 'bluegrass', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0861',
        category: 'Music',
        question: 'Which artist recorded When You Say Nothing at All in 1995?',
        answers: ['Alison Krauss', 'Trisha Yearwood', 'Faith Hill', 'Patty Loveless'],
        correctAnswer: 'Alison Krauss',
        difficulty: 'Medium',
        tags: ['1990s', 'country', 'alison krauss', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0862',
        category: 'Music',
        question: 'Which artist recorded Wild Angels?',
        answers: ['Martina McBride', 'Faith Hill', 'Trisha Yearwood', 'Deana Carter'],
        correctAnswer: 'Martina McBride',
        difficulty: 'Medium',
        tags: ['1990s', 'country', 'martina mcbride', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0863',
        category: 'Music',
        question: 'Which artist recorded Fancy in 1990?',
        answers: ['Reba McEntire', 'Martina McBride', 'Trisha Yearwood', 'Patty Loveless'],
        correctAnswer: 'Reba McEntire',
        difficulty: 'Medium',
        tags: ['1990s', 'country', 'reba mcentire', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0864',
        category: 'Music',
        question: 'Which artist recorded Heads Carolina, Tails California?',
        answers: ['Jo Dee Messina', 'Deana Carter', 'Sara Evans', 'Terri Clark'],
        correctAnswer: 'Jo Dee Messina',
        difficulty: 'Medium',
        tags: ['1990s', 'country', 'jo dee messina', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0865',
        category: 'Music',
        question: 'Which artist recorded I Hope You Dance?',
        answers: ['Lee Ann Womack', 'Jo Dee Messina', 'Sara Evans', 'Faith Hill'],
        correctAnswer: 'Lee Ann Womack',
        difficulty: 'Medium',
        tags: ['2000s', 'country', 'lee ann womack', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0866',
        category: 'Music',
        question: 'Which artist recorded No News?',
        answers: ['Lonestar', 'Diamond Rio', 'Alabama', 'Brooks & Dunn'],
        correctAnswer: 'Lonestar',
        difficulty: 'Medium',
        tags: ['1990s', 'country', 'lonestar', 'songs'],
        dailyEligible: true
    }

];

module.exports = questions;
