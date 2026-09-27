// quiz_pack21.js
// PuzzlePilot Big Quiz
// Pack 21 - 100 Music questions
// Music specialist bank - artist/song questions

const questions = [

    // =========================================================
    // MUSIC - 100
    // =========================================================

    {
        id: 'music_0167',
        category: 'Music',
        question: 'Which artist recorded Sweet Caroline?',
        answers: ['Neil Diamond', 'The Foundations', 'The Monkees', 'Nancy Sinatra'],
        correctAnswer: 'Neil Diamond',
        difficulty: 'Easy',
        tags: ['1960s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0168',
        category: 'Music',
        question: 'Which artist recorded Suspicious Minds?',
        answers: ['Neil Diamond', 'Dusty Springfield', 'The Supremes', 'Elvis Presley'],
        correctAnswer: 'Elvis Presley',
        difficulty: 'Medium',
        tags: ['1960s', 'rock and roll', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0169',
        category: 'Music',
        question: 'Which artist recorded Son of a Preacher Man?',
        answers: ['Elvis Presley', 'The Supremes', 'Dusty Springfield', 'Neil Diamond'],
        correctAnswer: 'Dusty Springfield',
        difficulty: 'Easy',
        tags: ['1960s', 'soul', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0170',
        category: 'Music',
        question: 'Which artist recorded You Can\'t Hurry Love?',
        answers: ['Elvis Presley', 'The Supremes', 'Four Tops', 'Neil Diamond'],
        correctAnswer: 'The Supremes',
        difficulty: 'Easy',
        tags: ['1960s', 'motown', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0171',
        category: 'Music',
        question: 'Which artist recorded Waterloo Sunset?',
        answers: ['The Kinks', 'Creedence Clearwater Revival', 'Neil Diamond', 'Elvis Presley'],
        correctAnswer: 'The Kinks',
        difficulty: 'Medium',
        tags: ['1960s', 'rock', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0172',
        category: 'Music',
        question: 'Which artist recorded Build Me Up Buttercup?',
        answers: ['Neil Diamond', 'The Monkees', 'Nancy Sinatra', 'The Foundations'],
        correctAnswer: 'The Foundations',
        difficulty: 'Easy',
        tags: ['1960s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0173',
        category: 'Music',
        question: 'Which artist recorded I\'m a Believer?',
        answers: ['The Foundations', 'Nancy Sinatra', 'The Monkees', 'Neil Diamond'],
        correctAnswer: 'The Monkees',
        difficulty: 'Easy',
        tags: ['1960s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0174',
        category: 'Music',
        question: 'Which artist recorded Proud Mary?',
        answers: ['Elvis Presley', 'Creedence Clearwater Revival', 'The Kinks', 'Neil Diamond'],
        correctAnswer: 'Creedence Clearwater Revival',
        difficulty: 'Medium',
        tags: ['1960s', 'rock', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0175',
        category: 'Music',
        question: 'Which artist recorded Reach Out I\'ll Be There?',
        answers: ['Four Tops', 'The Supremes', 'Neil Diamond', 'Elvis Presley'],
        correctAnswer: 'Four Tops',
        difficulty: 'Easy',
        tags: ['1960s', 'motown', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0176',
        category: 'Music',
        question: 'Which artist recorded These Boots Are Made for Walkin\'?',
        answers: ['Neil Diamond', 'The Foundations', 'The Monkees', 'Nancy Sinatra'],
        correctAnswer: 'Nancy Sinatra',
        difficulty: 'Easy',
        tags: ['1960s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0177',
        category: 'Music',
        question: 'Which artist recorded Tiger Feet?',
        answers: ['Sweet', 'T. Rex', 'Mud', 'Suzi Quatro'],
        correctAnswer: 'Mud',
        difficulty: 'Medium',
        tags: ['1970s', 'glam rock', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0178',
        category: 'Music',
        question: 'Which artist recorded Devil Gate Drive?',
        answers: ['T. Rex', 'Suzi Quatro', 'Mud', 'Sweet'],
        correctAnswer: 'Suzi Quatro',
        difficulty: 'Easy',
        tags: ['1970s', 'glam rock', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0179',
        category: 'Music',
        question: 'Which artist recorded Ballroom Blitz?',
        answers: ['Sweet', 'Mud', 'Suzi Quatro', 'T. Rex'],
        correctAnswer: 'Sweet',
        difficulty: 'Easy',
        tags: ['1970s', 'glam rock', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0180',
        category: 'Music',
        question: 'Which artist recorded Get It On?',
        answers: ['Mud', 'Suzi Quatro', 'Sweet', 'T. Rex'],
        correctAnswer: 'T. Rex',
        difficulty: 'Medium',
        tags: ['1970s', 'glam rock', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0181',
        category: 'Music',
        question: 'Which artist recorded Make Me Smile (Come Up and See Me)?',
        answers: ['Suzi Quatro', 'Sweet', 'Steve Harley & Cockney Rebel', 'Mud'],
        correctAnswer: 'Steve Harley & Cockney Rebel',
        difficulty: 'Easy',
        tags: ['1970s', 'glam rock', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0182',
        category: 'Music',
        question: 'Which artist recorded Heart of Glass?',
        answers: ['Thelma Houston', 'Blondie', 'Chic', 'Gloria Gaynor'],
        correctAnswer: 'Blondie',
        difficulty: 'Easy',
        tags: ['1970s', 'disco', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0183',
        category: 'Music',
        question: 'Which artist recorded Le Freak?',
        answers: ['Chic', 'Blondie', 'Gloria Gaynor', 'Thelma Houston'],
        correctAnswer: 'Chic',
        difficulty: 'Medium',
        tags: ['1970s', 'disco', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0184',
        category: 'Music',
        question: 'Which artist recorded I Will Survive?',
        answers: ['Blondie', 'Chic', 'Thelma Houston', 'Gloria Gaynor'],
        correctAnswer: 'Gloria Gaynor',
        difficulty: 'Easy',
        tags: ['1970s', 'disco', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0185',
        category: 'Music',
        question: 'Which artist recorded Don\'t Leave Me This Way?',
        answers: ['Chic', 'Gloria Gaynor', 'Thelma Houston', 'Blondie'],
        correctAnswer: 'Thelma Houston',
        difficulty: 'Easy',
        tags: ['1970s', 'disco', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0186',
        category: 'Music',
        question: 'Which artist recorded We Are Family?',
        answers: ['Gloria Gaynor', 'Sister Sledge', 'Blondie', 'Chic'],
        correctAnswer: 'Sister Sledge',
        difficulty: 'Medium',
        tags: ['1970s', 'disco', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0187',
        category: 'Music',
        question: 'Which artist recorded Jolene?',
        answers: ['Dolly Parton', 'John Denver', 'Glen Campbell', 'Kenny Rogers'],
        correctAnswer: 'Dolly Parton',
        difficulty: 'Easy',
        tags: ['1970s', 'country', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0188',
        category: 'Music',
        question: 'Which artist recorded Take Me Home, Country Roads?',
        answers: ['Dolly Parton', 'Glen Campbell', 'Kenny Rogers', 'John Denver'],
        correctAnswer: 'John Denver',
        difficulty: 'Easy',
        tags: ['1970s', 'country', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0189',
        category: 'Music',
        question: 'Which artist recorded Rhinestone Cowboy?',
        answers: ['John Denver', 'Kenny Rogers', 'Glen Campbell', 'Dolly Parton'],
        correctAnswer: 'Glen Campbell',
        difficulty: 'Medium',
        tags: ['1970s', 'country', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0190',
        category: 'Music',
        question: 'Which artist recorded The Gambler?',
        answers: ['Glen Campbell', 'Kenny Rogers', 'Dolly Parton', 'John Denver'],
        correctAnswer: 'Kenny Rogers',
        difficulty: 'Easy',
        tags: ['1970s', 'country', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0191',
        category: 'Music',
        question: 'Which artist recorded Rose Garden?',
        answers: ['Lynn Anderson', 'Dolly Parton', 'John Denver', 'Glen Campbell'],
        correctAnswer: 'Lynn Anderson',
        difficulty: 'Easy',
        tags: ['1970s', 'country', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0192',
        category: 'Music',
        question: 'Which artist recorded Come On Eileen?',
        answers: ['Culture Club', 'Frankie Goes to Hollywood', 'Madonna', 'Dexys Midnight Runners'],
        correctAnswer: 'Dexys Midnight Runners',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0193',
        category: 'Music',
        question: 'Which artist recorded Don\'t You Want Me?',
        answers: ['Yazoo', 'a-ha', 'The Human League', 'Soft Cell'],
        correctAnswer: 'The Human League',
        difficulty: 'Easy',
        tags: ['1980s', 'synth-pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0194',
        category: 'Music',
        question: 'Which artist recorded Tainted Love?',
        answers: ['a-ha', 'Soft Cell', 'The Human League', 'Yazoo'],
        correctAnswer: 'Soft Cell',
        difficulty: 'Easy',
        tags: ['1980s', 'synth-pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0195',
        category: 'Music',
        question: 'Which artist recorded Only You?',
        answers: ['Yazoo', 'The Human League', 'Soft Cell', 'a-ha'],
        correctAnswer: 'Yazoo',
        difficulty: 'Medium',
        tags: ['1980s', 'synth-pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0196',
        category: 'Music',
        question: 'Which artist recorded Vienna?',
        answers: ['Spandau Ballet', 'Nena', 'Dexys Midnight Runners', 'Ultravox'],
        correctAnswer: 'Ultravox',
        difficulty: 'Easy',
        tags: ['1980s', 'new wave', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0197',
        category: 'Music',
        question: 'Which artist recorded Gold?',
        answers: ['Nena', 'Dexys Midnight Runners', 'Spandau Ballet', 'Ultravox'],
        correctAnswer: 'Spandau Ballet',
        difficulty: 'Easy',
        tags: ['1980s', 'new wave', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0198',
        category: 'Music',
        question: 'Which artist recorded True?',
        answers: ['Dexys Midnight Runners', 'Spandau Ballet', 'Ultravox', 'Nena'],
        correctAnswer: 'Spandau Ballet',
        difficulty: 'Medium',
        tags: ['1980s', 'new wave', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0199',
        category: 'Music',
        question: 'Which artist recorded Karma Chameleon?',
        answers: ['Culture Club', 'Dexys Midnight Runners', 'Frankie Goes to Hollywood', 'Madonna'],
        correctAnswer: 'Culture Club',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0200',
        category: 'Music',
        question: 'Which artist recorded 99 Red Balloons?',
        answers: ['Ultravox', 'Spandau Ballet', 'Dexys Midnight Runners', 'Nena'],
        correctAnswer: 'Nena',
        difficulty: 'Easy',
        tags: ['1980s', 'new wave', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0201',
        category: 'Music',
        question: 'Which artist recorded Take on Me?',
        answers: ['Soft Cell', 'Yazoo', 'a-ha', 'The Human League'],
        correctAnswer: 'a-ha',
        difficulty: 'Medium',
        tags: ['1980s', 'synth-pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0202',
        category: 'Music',
        question: 'Which artist recorded The Power of Love?',
        answers: ['Madonna', 'Frankie Goes to Hollywood', 'Dexys Midnight Runners', 'Culture Club'],
        correctAnswer: 'Frankie Goes to Hollywood',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0203',
        category: 'Music',
        question: 'Which artist recorded Our House?',
        answers: ['Madness', 'Dexys Midnight Runners', 'The Human League', 'Soft Cell'],
        correctAnswer: 'Madness',
        difficulty: 'Easy',
        tags: ['1980s', 'ska', 'madness', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0204',
        category: 'Music',
        question: 'Which artist recorded House of Fun?',
        answers: ['Dexys Midnight Runners', 'The Human League', 'Soft Cell', 'Madness'],
        correctAnswer: 'Madness',
        difficulty: 'Medium',
        tags: ['1980s', 'ska', 'madness', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0205',
        category: 'Music',
        question: 'Which artist recorded Baggy Trousers?',
        answers: ['The Human League', 'Soft Cell', 'Madness', 'Dexys Midnight Runners'],
        correctAnswer: 'Madness',
        difficulty: 'Easy',
        tags: ['1980s', 'ska', 'madness', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0206',
        category: 'Music',
        question: 'Which artist recorded It Must Be Love?',
        answers: ['Soft Cell', 'Madness', 'Dexys Midnight Runners', 'The Human League'],
        correctAnswer: 'Madness',
        difficulty: 'Easy',
        tags: ['1980s', 'ska', 'madness', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0207',
        category: 'Music',
        question: 'Which artist recorded Like a Virgin?',
        answers: ['Madonna', 'Dexys Midnight Runners', 'Culture Club', 'Frankie Goes to Hollywood'],
        correctAnswer: 'Madonna',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'madonna', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0208',
        category: 'Music',
        question: 'Which artist recorded Material Girl?',
        answers: ['Dexys Midnight Runners', 'Culture Club', 'Frankie Goes to Hollywood', 'Madonna'],
        correctAnswer: 'Madonna',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'madonna', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0209',
        category: 'Music',
        question: 'Which artist recorded Papa Don\'t Preach?',
        answers: ['Culture Club', 'Frankie Goes to Hollywood', 'Madonna', 'Dexys Midnight Runners'],
        correctAnswer: 'Madonna',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'madonna', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0210',
        category: 'Music',
        question: 'Which artist recorded La Isla Bonita?',
        answers: ['Frankie Goes to Hollywood', 'Madonna', 'Dexys Midnight Runners', 'Culture Club'],
        correctAnswer: 'Madonna',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'madonna', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0211',
        category: 'Music',
        question: 'Which artist recorded Into the Groove?',
        answers: ['Madonna', 'Dexys Midnight Runners', 'Culture Club', 'Frankie Goes to Hollywood'],
        correctAnswer: 'Madonna',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'madonna', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0212',
        category: 'Music',
        question: 'Which artist recorded Summer Rain?',
        answers: ['Dexys Midnight Runners', 'Culture Club', 'Frankie Goes to Hollywood', 'Belinda Carlisle'],
        correctAnswer: 'Belinda Carlisle',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0213',
        category: 'Music',
        question: 'Which artist recorded View from a Bridge?',
        answers: ['Culture Club', 'Frankie Goes to Hollywood', 'Kim Wilde', 'Dexys Midnight Runners'],
        correctAnswer: 'Kim Wilde',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0214',
        category: 'Music',
        question: 'Which artist recorded Could\'ve Been?',
        answers: ['Frankie Goes to Hollywood', 'Tiffany', 'Dexys Midnight Runners', 'Culture Club'],
        correctAnswer: 'Tiffany',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0215',
        category: 'Music',
        question: 'Which artist recorded You Spin Me Round (Like a Record)?',
        answers: ['Dead or Alive', 'Dexys Midnight Runners', 'Culture Club', 'Frankie Goes to Hollywood'],
        correctAnswer: 'Dead or Alive',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0216',
        category: 'Music',
        question: 'Which artist recorded Together in Electric Dreams?',
        answers: ['Dexys Midnight Runners', 'Culture Club', 'Frankie Goes to Hollywood', 'Rick Astley'],
        correctAnswer: 'Rick Astley',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0217',
        category: 'Music',
        question: 'Which artist recorded Manic Monday?',
        answers: ['Culture Club', 'Frankie Goes to Hollywood', 'The Bangles', 'Dexys Midnight Runners'],
        correctAnswer: 'The Bangles',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0218',
        category: 'Music',
        question: 'Which artist recorded Walk Like an Egyptian?',
        answers: ['Frankie Goes to Hollywood', 'The Bangles', 'Dexys Midnight Runners', 'Culture Club'],
        correctAnswer: 'The Bangles',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0219',
        category: 'Music',
        question: 'Which artist recorded Total Eclipse of the Heart?',
        answers: ['Bonnie Tyler', 'Dexys Midnight Runners', 'Culture Club', 'Frankie Goes to Hollywood'],
        correctAnswer: 'Bonnie Tyler',
        difficulty: 'Medium',
        tags: ['1980s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0220',
        category: 'Music',
        question: 'Which artist recorded Holding Out for a Hero?',
        answers: ['Dexys Midnight Runners', 'Culture Club', 'Frankie Goes to Hollywood', 'Bonnie Tyler'],
        correctAnswer: 'Bonnie Tyler',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0221',
        category: 'Music',
        question: 'Which artist recorded Walking on Sunshine?',
        answers: ['Culture Club', 'Frankie Goes to Hollywood', 'Katrina and the Waves', 'Dexys Midnight Runners'],
        correctAnswer: 'Katrina and the Waves',
        difficulty: 'Easy',
        tags: ['1980s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0222',
        category: 'Music',
        question: 'Which artist recorded The Best?',
        answers: ['Bon Jovi', 'Tina Turner', 'Starship', 'Europe'],
        correctAnswer: 'Tina Turner',
        difficulty: 'Medium',
        tags: ['1980s', 'rock', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0223',
        category: 'Music',
        question: 'Which artist recorded We Built This City?',
        answers: ['Starship', 'Tina Turner', 'Europe', 'Bon Jovi'],
        correctAnswer: 'Starship',
        difficulty: 'Easy',
        tags: ['1980s', 'rock', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0224',
        category: 'Music',
        question: 'Which artist recorded The Final Countdown?',
        answers: ['Tina Turner', 'Starship', 'Bon Jovi', 'Europe'],
        correctAnswer: 'Europe',
        difficulty: 'Easy',
        tags: ['1980s', 'rock', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0225',
        category: 'Music',
        question: 'Which artist recorded Livin\' on a Prayer?',
        answers: ['Starship', 'Europe', 'Bon Jovi', 'Tina Turner'],
        correctAnswer: 'Bon Jovi',
        difficulty: 'Medium',
        tags: ['1980s', 'rock', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0226',
        category: 'Music',
        question: 'Which artist recorded Pour Some Sugar on Me?',
        answers: ['Europe', 'Def Leppard', 'Tina Turner', 'Starship'],
        correctAnswer: 'Def Leppard',
        difficulty: 'Easy',
        tags: ['1980s', 'rock', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0227',
        category: 'Music',
        question: 'Which artist recorded Nothing Compares 2 U?',
        answers: ['Sinéad O\'Connor', 'Natalie Imbruglia', 'Cher', 'Christina Aguilera'],
        correctAnswer: 'Sinéad O\'Connor',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0228',
        category: 'Music',
        question: 'Which artist recorded Torn?',
        answers: ['Sinéad O\'Connor', 'Cher', 'Christina Aguilera', 'Natalie Imbruglia'],
        correctAnswer: 'Natalie Imbruglia',
        difficulty: 'Medium',
        tags: ['1990s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0229',
        category: 'Music',
        question: 'Which artist recorded Believe?',
        answers: ['Natalie Imbruglia', 'Christina Aguilera', 'Cher', 'Sinéad O\'Connor'],
        correctAnswer: 'Cher',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0230',
        category: 'Music',
        question: 'Which artist recorded Genie in a Bottle?',
        answers: ['Cher', 'Christina Aguilera', 'Sinéad O\'Connor', 'Natalie Imbruglia'],
        correctAnswer: 'Christina Aguilera',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0231',
        category: 'Music',
        question: 'Which artist recorded ...Baby One More Time?',
        answers: ['Britney Spears', 'Sinéad O\'Connor', 'Natalie Imbruglia', 'Cher'],
        correctAnswer: 'Britney Spears',
        difficulty: 'Medium',
        tags: ['1990s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0232',
        category: 'Music',
        question: 'Which artist recorded Wannabe?',
        answers: ['Sinéad O\'Connor', 'Natalie Imbruglia', 'Cher', 'Spice Girls'],
        correctAnswer: 'Spice Girls',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0233',
        category: 'Music',
        question: 'Which artist recorded Never Ever?',
        answers: ['Natalie Imbruglia', 'Cher', 'All Saints', 'Sinéad O\'Connor'],
        correctAnswer: 'All Saints',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0234',
        category: 'Music',
        question: 'Which artist recorded MMMBop?',
        answers: ['Cher', 'Hanson', 'Sinéad O\'Connor', 'Natalie Imbruglia'],
        correctAnswer: 'Hanson',
        difficulty: 'Medium',
        tags: ['1990s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0235',
        category: 'Music',
        question: 'Which artist recorded Love Is All Around?',
        answers: ['Wet Wet Wet', 'Sinéad O\'Connor', 'Natalie Imbruglia', 'Cher'],
        correctAnswer: 'Wet Wet Wet',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0236',
        category: 'Music',
        question: 'Which artist recorded Stay?',
        answers: ['Sinéad O\'Connor', 'Natalie Imbruglia', 'Cher', 'Shakespears Sister'],
        correctAnswer: 'Shakespears Sister',
        difficulty: 'Easy',
        tags: ['1990s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0237',
        category: 'Music',
        question: 'Which artist recorded Rhythm Is a Dancer?',
        answers: ['Gala', 'Whigfield', 'Snap!', 'Haddaway'],
        correctAnswer: 'Snap!',
        difficulty: 'Medium',
        tags: ['1990s', 'dance', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0238',
        category: 'Music',
        question: 'Which artist recorded What Is Love?',
        answers: ['Whigfield', 'Haddaway', 'Snap!', 'Gala'],
        correctAnswer: 'Haddaway',
        difficulty: 'Easy',
        tags: ['1990s', 'dance', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0239',
        category: 'Music',
        question: 'Which artist recorded Freed from Desire?',
        answers: ['Gala', 'Snap!', 'Haddaway', 'Whigfield'],
        correctAnswer: 'Gala',
        difficulty: 'Easy',
        tags: ['1990s', 'dance', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0240',
        category: 'Music',
        question: 'Which artist recorded Saturday Night?',
        answers: ['Snap!', 'Haddaway', 'Gala', 'Whigfield'],
        correctAnswer: 'Whigfield',
        difficulty: 'Medium',
        tags: ['1990s', 'dance', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0241',
        category: 'Music',
        question: 'Which artist recorded Dreamer?',
        answers: ['Haddaway', 'Gala', 'Livin\' Joy', 'Snap!'],
        correctAnswer: 'Livin\' Joy',
        difficulty: 'Easy',
        tags: ['1990s', 'dance', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0242',
        category: 'Music',
        question: 'Which artist recorded Common People?',
        answers: ['Supergrass', 'Pulp', 'Blur', 'Oasis'],
        correctAnswer: 'Pulp',
        difficulty: 'Easy',
        tags: ['1990s', 'britpop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0243',
        category: 'Music',
        question: 'Which artist recorded Parklife?',
        answers: ['Blur', 'Pulp', 'Oasis', 'Supergrass'],
        correctAnswer: 'Blur',
        difficulty: 'Medium',
        tags: ['1990s', 'britpop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0244',
        category: 'Music',
        question: 'Which artist recorded Don\'t Look Back in Anger?',
        answers: ['Pulp', 'Blur', 'Supergrass', 'Oasis'],
        correctAnswer: 'Oasis',
        difficulty: 'Easy',
        tags: ['1990s', 'britpop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0245',
        category: 'Music',
        question: 'Which artist recorded Alright?',
        answers: ['Blur', 'Oasis', 'Supergrass', 'Pulp'],
        correctAnswer: 'Supergrass',
        difficulty: 'Easy',
        tags: ['1990s', 'britpop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0246',
        category: 'Music',
        question: 'Which artist recorded A Design for Life?',
        answers: ['Cher', 'Manic Street Preachers', 'Sinéad O\'Connor', 'Natalie Imbruglia'],
        correctAnswer: 'Manic Street Preachers',
        difficulty: 'Medium',
        tags: ['1990s', 'rock', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0247',
        category: 'Music',
        question: 'Which artist recorded Man! I Feel Like a Woman!?',
        answers: ['Shania Twain', 'LeAnn Rimes', 'Billy Ray Cyrus', 'Martina McBride'],
        correctAnswer: 'Shania Twain',
        difficulty: 'Easy',
        tags: ['1990s', 'country', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0248',
        category: 'Music',
        question: 'Which artist recorded How Do I Live?',
        answers: ['Shania Twain', 'Billy Ray Cyrus', 'Martina McBride', 'LeAnn Rimes'],
        correctAnswer: 'LeAnn Rimes',
        difficulty: 'Easy',
        tags: ['1990s', 'country', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0249',
        category: 'Music',
        question: 'Which artist recorded That Don\'t Impress Me Much?',
        answers: ['Billy Ray Cyrus', 'Martina McBride', 'Shania Twain', 'LeAnn Rimes'],
        correctAnswer: 'Shania Twain',
        difficulty: 'Medium',
        tags: ['1990s', 'country', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0250',
        category: 'Music',
        question: 'Which artist recorded Achy Breaky Heart?',
        answers: ['Martina McBride', 'Billy Ray Cyrus', 'Shania Twain', 'LeAnn Rimes'],
        correctAnswer: 'Billy Ray Cyrus',
        difficulty: 'Easy',
        tags: ['1990s', 'country', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0251',
        category: 'Music',
        question: 'Which artist recorded Independence Day?',
        answers: ['Martina McBride', 'Shania Twain', 'LeAnn Rimes', 'Billy Ray Cyrus'],
        correctAnswer: 'Martina McBride',
        difficulty: 'Easy',
        tags: ['1990s', 'country', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0252',
        category: 'Music',
        question: 'Which artist recorded Can\'t Get You Out of My Head?',
        answers: ['Sophie Ellis-Bextor', 'Girls Aloud', 'Sugababes', 'Kylie Minogue'],
        correctAnswer: 'Kylie Minogue',
        difficulty: 'Medium',
        tags: ['2000s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0253',
        category: 'Music',
        question: 'Which artist recorded Murder on the Dancefloor?',
        answers: ['Girls Aloud', 'Sugababes', 'Sophie Ellis-Bextor', 'Kylie Minogue'],
        correctAnswer: 'Sophie Ellis-Bextor',
        difficulty: 'Easy',
        tags: ['2000s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0254',
        category: 'Music',
        question: 'Which artist recorded Sound of the Underground?',
        answers: ['Sugababes', 'Girls Aloud', 'Kylie Minogue', 'Sophie Ellis-Bextor'],
        correctAnswer: 'Girls Aloud',
        difficulty: 'Easy',
        tags: ['2000s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0255',
        category: 'Music',
        question: 'Which artist recorded About You Now?',
        answers: ['Sugababes', 'Kylie Minogue', 'Sophie Ellis-Bextor', 'Girls Aloud'],
        correctAnswer: 'Sugababes',
        difficulty: 'Medium',
        tags: ['2000s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0256',
        category: 'Music',
        question: 'Which artist recorded The Fear?',
        answers: ['Kylie Minogue', 'Sophie Ellis-Bextor', 'Girls Aloud', 'Lily Allen'],
        correctAnswer: 'Lily Allen',
        difficulty: 'Easy',
        tags: ['2000s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0257',
        category: 'Music',
        question: 'Which artist recorded Crazy in Love?',
        answers: ['Sophie Ellis-Bextor', 'Girls Aloud', 'Beyoncé', 'Kylie Minogue'],
        correctAnswer: 'Beyoncé',
        difficulty: 'Easy',
        tags: ['2000s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0258',
        category: 'Music',
        question: 'Which artist recorded Since U Been Gone?',
        answers: ['Girls Aloud', 'Kelly Clarkson', 'Kylie Minogue', 'Sophie Ellis-Bextor'],
        correctAnswer: 'Kelly Clarkson',
        difficulty: 'Medium',
        tags: ['2000s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0259',
        category: 'Music',
        question: 'Which artist recorded Umbrella?',
        answers: ['Rihanna', 'Kylie Minogue', 'Sophie Ellis-Bextor', 'Girls Aloud'],
        correctAnswer: 'Rihanna',
        difficulty: 'Easy',
        tags: ['2000s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0260',
        category: 'Music',
        question: 'Which artist recorded Poker Face?',
        answers: ['Kylie Minogue', 'Sophie Ellis-Bextor', 'Girls Aloud', 'Lady Gaga'],
        correctAnswer: 'Lady Gaga',
        difficulty: 'Easy',
        tags: ['2000s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0261',
        category: 'Music',
        question: 'Which artist recorded Complicated?',
        answers: ['Sophie Ellis-Bextor', 'Girls Aloud', 'Avril Lavigne', 'Kylie Minogue'],
        correctAnswer: 'Avril Lavigne',
        difficulty: 'Medium',
        tags: ['2000s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0262',
        category: 'Music',
        question: 'Which artist recorded Valerie?',
        answers: ['Girls Aloud', 'Mark Ronson featuring Amy Winehouse', 'Kylie Minogue', 'Sophie Ellis-Bextor'],
        correctAnswer: 'Mark Ronson featuring Amy Winehouse',
        difficulty: 'Easy',
        tags: ['2000s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0263',
        category: 'Music',
        question: 'Which artist recorded Suddenly I See?',
        answers: ['KT Tunstall', 'Kylie Minogue', 'Sophie Ellis-Bextor', 'Girls Aloud'],
        correctAnswer: 'KT Tunstall',
        difficulty: 'Easy',
        tags: ['2000s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0264',
        category: 'Music',
        question: 'Which artist recorded Mercy?',
        answers: ['Kylie Minogue', 'Sophie Ellis-Bextor', 'Girls Aloud', 'Duffy'],
        correctAnswer: 'Duffy',
        difficulty: 'Medium',
        tags: ['2000s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0265',
        category: 'Music',
        question: 'Which artist recorded Black Horse and the Cherry Tree?',
        answers: ['Sophie Ellis-Bextor', 'Girls Aloud', 'KT Tunstall', 'Kylie Minogue'],
        correctAnswer: 'KT Tunstall',
        difficulty: 'Easy',
        tags: ['2000s', 'pop', 'songs'],
        dailyEligible: true
    },

    {
        id: 'music_0266',
        category: 'Music',
        question: 'Which artist recorded Chasing Cars?',
        answers: ['Girls Aloud', 'Snow Patrol', 'Kylie Minogue', 'Sophie Ellis-Bextor'],
        correctAnswer: 'Snow Patrol',
        difficulty: 'Easy',
        tags: ['2000s', 'rock', 'songs'],
        dailyEligible: true
    }

];

module.exports = questions;
