 // quiz_pack117.js
// PuzzlePilot Big Quiz - Pack 117
// Music - 2010s
// 100 questions; IDs music_9767 - music_9866
// Complete decade, performer, genre, country, album and specialist tags
// Corrected repeated answer choices and clarified featured artists

const songs = [
    ['Things We Lost in the Fire', 'Bastille'],
    ['Of the Night', 'Bastille'],
    ['Good Grief', 'Bastille'],
    ['Flaws', 'Bastille'],

    ['Radioactive', 'Imagine Dragons'],
    ['Demons', 'Imagine Dragons'],
    ['It\'s Time', 'Imagine Dragons'],
    ['Believer', 'Imagine Dragons'],
    ['Thunder', 'Imagine Dragons'],
    ['Whatever It Takes', 'Imagine Dragons'],
    ['On Top of the World', 'Imagine Dragons'],

    ['Somebody Else', 'The 1975'],
    ['Chocolate', 'The 1975'],
    ['The Sound', 'The 1975'],
    ['Love Me', 'The 1975'],
    ['Sex', 'The 1975'],
    ['Girls', 'The 1975'],
    ['Robbers', 'The 1975'],

    ['Do I Wanna Know?', 'Arctic Monkeys'],
    ['R U Mine?', 'Arctic Monkeys'],
    ['Why\'d You Only Call Me When You\'re High?', 'Arctic Monkeys'],
    ['Arabella', 'Arctic Monkeys'],
    ['Snap Out of It', 'Arctic Monkeys'],
    ['Don\'t Sit Down \'Cause I\'ve Moved Your Chair', 'Arctic Monkeys'],

    ['Pumped Up Kicks', 'Foster the People'],
    ['Houdini', 'Foster the People'],
    ['Helena Beat', 'Foster the People'],

    ['Take a Walk', 'Passion Pit'],

    ['Little Talks', 'Of Monsters and Men'],
    ['Mountain Sound', 'Of Monsters and Men'],

    ['Ho Hey', 'The Lumineers'],
    ['Stubborn Love', 'The Lumineers'],

    ['The Cave', 'Mumford & Sons'],
    ['I Will Wait', 'Mumford & Sons'],
    ['Lover of the Light', 'Mumford & Sons'],
    ['Believe', 'Mumford & Sons'],

    ['Shake It Out', 'Florence + the Machine'],
    ['Spectrum', 'Florence + the Machine'],
    ['Ship to Wreck', 'Florence + the Machine'],
    ['What Kind of Man', 'Florence + the Machine'],
    ['Hunger', 'Florence + the Machine'],

    ['Royals', 'Lorde'],
    ['Team', 'Lorde'],
    ['Green Light', 'Lorde'],
    ['Perfect Places', 'Lorde'],
    ['Tennis Court', 'Lorde'],

    ['New Rules', 'Dua Lipa'],
    ['Be the One', 'Dua Lipa'],
    ['IDGAF', 'Dua Lipa'],
    ['Hotter than Hell', 'Dua Lipa'],
    ['Blow Your Mind (Mwah)', 'Dua Lipa'],

    ['Havana', 'Camila Cabello'],
    ['Never Be the Same', 'Camila Cabello'],

    ['Shallow', 'Lady Gaga'],
    ['Always Remember Us This Way', 'Lady Gaga'],

    ['Bad at Love', 'Halsey'],
    ['Without Me', 'Halsey'],
    ['Graveyard', 'Halsey'],
    ['New Americana', 'Halsey'],

    ['Closer', 'The Chainsmokers'],
    ['Paris', 'The Chainsmokers'],
    ['Something Just Like This', 'The Chainsmokers'],
    ['Roses', 'The Chainsmokers'],
    ['Don\'t Let Me Down', 'The Chainsmokers'],

    ['Counting Stars', 'OneRepublic'],
    ['Love Runs Out', 'OneRepublic'],
    ['I Lived', 'OneRepublic'],
    ['Wherever I Go', 'OneRepublic'],
    ['Feel Again', 'OneRepublic'],

    ['Cool Kids', 'Echosmith'],

    ['Riptide', 'Vance Joy'],
    ['Mess Is Mine', 'Vance Joy'],
    ['Fire and the Flood', 'Vance Joy'],

    ['Blame It on Me', 'George Ezra'],
    ['Paradise', 'George Ezra'],
    ['Shotgun', 'George Ezra'],
    ['Hold My Girl', 'George Ezra'],

    ['Someone New', 'Hozier'],
    ['From Eden', 'Hozier'],
    ['Work Song', 'Hozier'],
    ['Cherry Wine', 'Hozier'],

    ['Human', 'Rag\'n\'Bone Man'],
    ['Skin', 'Rag\'n\'Bone Man'],
    ['Grace', 'Rag\'n\'Bone Man'],

    ['Giant', 'Calvin Harris'],
    ['Summer', 'Calvin Harris'],
    ['Feel So Close', 'Calvin Harris'],
    ['My Way', 'Calvin Harris'],
    ['Feels', 'Calvin Harris'],
    ['Sweet Nothing', 'Calvin Harris'],
    ['How Deep Is Your Love', 'Calvin Harris'],
    ['This Is What You Came For', 'Calvin Harris'],
    ['I Need Your Love', 'Calvin Harris'],
    ['Promises', 'Calvin Harris'],

    ['Stay with Me', 'Sam Smith'],
    ['I\'m Not the Only One', 'Sam Smith'],
    ['Lay Me Down', 'Sam Smith'],
    ['Too Good at Goodbyes', 'Sam Smith'],
    ['Money on My Mind', 'Sam Smith'],
    ['Writing\'s on the Wall', 'Sam Smith']
];

// Shared tags expand into every question when this pack loads.
// They describe the principal artist, origin and relevant genres.
const artistTags = {
    'Bastille': ['Bastille', 'English music', 'UK music', 'indie pop', 'alternative rock'],
    'Imagine Dragons': ['Imagine Dragons', 'US music', 'pop rock', 'alternative rock', 'arena rock'],
    'The 1975': ['The 1975', 'English music', 'UK music', 'indie pop', 'alternative rock'],
    'Arctic Monkeys': ['Arctic Monkeys', 'English music', 'UK music', 'indie rock', 'alternative rock'],
    'Foster the People': ['Foster the People', 'US music', 'indie pop', 'alternative rock', 'psychedelic pop'],
    'Passion Pit': ['Passion Pit', 'US music', 'indie pop', 'electropop', 'synth-pop'],
    'Of Monsters and Men': ['Of Monsters and Men', 'Icelandic music', 'indie folk', 'folk rock', 'indie pop'],
    'The Lumineers': ['The Lumineers', 'US music', 'indie folk', 'folk rock', 'Americana'],
    'Mumford & Sons': ['Mumford & Sons', 'English music', 'UK music', 'folk rock', 'indie folk'],
    'Florence + the Machine': ['Florence + the Machine', 'English music', 'UK music', 'indie pop', 'art pop', 'Florence Welch'],
    'Lorde': ['Lorde', 'New Zealand music', 'pop', 'art pop', 'electropop'],
    'Dua Lipa': ['Dua Lipa', 'English music', 'UK music', 'dance-pop', 'pop'],
    'Camila Cabello': ['Camila Cabello', 'US music', 'Cuban music', 'pop', 'Latin pop'],
    'Lady Gaga': ['Lady Gaga', 'US music', 'pop', 'soundtrack songs', 'pop singers'],
    'Halsey': ['Halsey', 'US music', 'alternative pop', 'electropop', 'pop'],
    'The Chainsmokers': ['The Chainsmokers', 'US music', 'electronic dance music', 'electropop', 'music producers'],
    'OneRepublic': ['OneRepublic', 'US music', 'pop rock', 'alternative rock', 'rock bands'],
    'Echosmith': ['Echosmith', 'US music', 'indie pop', 'pop rock', 'alternative rock'],
    'Vance Joy': ['Vance Joy', 'Australian music', 'indie folk', 'folk-pop', 'singer-songwriters'],
    'George Ezra': ['George Ezra', 'English music', 'UK music', 'folk-pop', 'singer-songwriters'],
    'Hozier': ['Hozier', 'Irish music', 'blues rock', 'soul', 'singer-songwriters'],
    "Rag'n'Bone Man": ["Rag'n'Bone Man", 'English music', 'UK music', 'soul', 'blues', 'singer-songwriters'],
    'Calvin Harris': ['Calvin Harris', 'Scottish music', 'UK music', 'electronic dance music', 'house music', 'music producers'],
    'Sam Smith': ['Sam Smith', 'English music', 'UK music', 'pop', 'soul', 'singer-songwriters']
};

// Add a recording's actual album where applicable.
const albumGroups = {
    'Bastille': [
        ['Bad Blood', ['Things We Lost in the Fire', 'Flaws']],
        ['All This Bad Blood', ['Of the Night']],
        ['Wild World', ['Good Grief']]
    ],
    'Imagine Dragons': [
        ['Night Visions', ['Radioactive', 'Demons', "It's Time", 'On Top of the World']],
        ['Evolve', ['Believer', 'Thunder', 'Whatever It Takes']]
    ],
    'The 1975': [
        ['The 1975', ['Chocolate', 'Sex', 'Girls', 'Robbers']],
        ['I Like It When You Sleep, for You Are So Beautiful Yet So Unaware of It',
            ['Somebody Else', 'The Sound', 'Love Me']]
    ],
    'Arctic Monkeys': [
        ['AM', ['Do I Wanna Know?', 'R U Mine?', "Why'd You Only Call Me When You're High?", 'Arabella', 'Snap Out of It']],
        ['Suck It and See', ["Don't Sit Down 'Cause I've Moved Your Chair"]]
    ],
    'Foster the People': [['Torches', ['Pumped Up Kicks', 'Houdini', 'Helena Beat']]],
    'Passion Pit': [['Gossamer', ['Take a Walk']]],
    'Of Monsters and Men': [['My Head Is an Animal', ['Little Talks', 'Mountain Sound']]],
    'The Lumineers': [['The Lumineers', ['Ho Hey', 'Stubborn Love']]],
    'Mumford & Sons': [
        ['Sigh No More', ['The Cave']],
        ['Babel', ['I Will Wait', 'Lover of the Light']],
        ['Wilder Mind', ['Believe']]
    ],
    'Florence + the Machine': [
        ['Ceremonials', ['Shake It Out', 'Spectrum']],
        ['How Big, How Blue, How Beautiful', ['Ship to Wreck', 'What Kind of Man']],
        ['High as Hope', ['Hunger']]
    ],
    'Lorde': [
        ['Pure Heroine', ['Royals', 'Team', 'Tennis Court']],
        ['Melodrama', ['Green Light', 'Perfect Places']]
    ],
    'Dua Lipa': [['Dua Lipa', ['New Rules', 'Be the One', 'IDGAF', 'Hotter than Hell', 'Blow Your Mind (Mwah)']]],
    'Camila Cabello': [['Camila', ['Havana', 'Never Be the Same']]],
    'Lady Gaga': [['A Star Is Born soundtrack', ['Shallow', 'Always Remember Us This Way']]],
    'Halsey': [
        ['Badlands', ['New Americana']],
        ['Hopeless Fountain Kingdom', ['Bad at Love']],
        ['Manic', ['Without Me', 'Graveyard']]
    ],
    'The Chainsmokers': [
        ['Bouquet', ['Roses']],
        ['Collage', ['Closer', "Don't Let Me Down"]],
        ['Memories...Do Not Open', ['Paris', 'Something Just Like This']]
    ],
    'OneRepublic': [
        ['Native', ['Counting Stars', 'Love Runs Out', 'I Lived', 'Feel Again']],
        ['Oh My My', ['Wherever I Go']]
    ],
    'Echosmith': [['Talking Dreams', ['Cool Kids']]],
    'Vance Joy': [['Dream Your Life Away', ['Riptide', 'Mess Is Mine', 'Fire and the Flood']]],
    'George Ezra': [
        ['Wanted on Voyage', ['Blame It on Me']],
        ["Staying at Tamara's", ['Paradise', 'Shotgun', 'Hold My Girl']]
    ],
    'Hozier': [['Hozier', ['Someone New', 'From Eden', 'Work Song', 'Cherry Wine']]],
    "Rag'n'Bone Man": [['Human', ['Human', 'Skin', 'Grace']]],
    'Calvin Harris': [
        ['18 Months', ['Feel So Close', 'Sweet Nothing', 'I Need Your Love']],
        ['Motion', ['Summer']],
        ['Funk Wav Bounces Vol. 1', ['Feels']]
    ],
    'Sam Smith': [
        ['In the Lonely Hour', ['Stay with Me', "I'm Not the Only One", 'Lay Me Down', 'Money on My Mind']],
        ['The Thrill of It All', ['Too Good at Goodbyes']]
    ]
};

// Additional tags apply only to the specific recording.
const songTags = {
    'Bastille': {
        'Of the Night': ['mashups', 'cover versions', 'Corona', 'Snap!',
            'The Rhythm of the Night', 'Rhythm Is a Dancer', '1990s originals']
    },
    'The 1975': {
        'Sex': ['2012 EP recordings', '2013 album recordings']
    },
    'Arctic Monkeys': {
        'R U Mine?': ['2012 singles', '2013 album recordings']
    },
    'Florence + the Machine': {
        'Spectrum': ['Calvin Harris remix', 'remixes', '2010s dance hits']
    },
    'Lady Gaga': {
        'Shallow': ['Bradley Cooper', 'duets', 'film soundtracks', '2018 films', 'Oscar-winning songs'],
        'Always Remember Us This Way': ['film soundtracks', '2018 films']
    },
    'Halsey': {
        'Without Me': ['2018 singles', '2020 album release'],
        'Graveyard': ['2019 singles', '2020 album release']
    },
    'The Chainsmokers': {
        'Closer': ['Halsey', 'guest vocalists', 'collaborations', 'duets'],
        'Paris': ['Emily Warren', 'uncredited vocals'],
        'Something Just Like This': ['Coldplay', 'Chris Martin', 'collaborations'],
        'Roses': ['Rozes', 'guest vocalists', 'collaborations'],
        "Don't Let Me Down": ['Daya', 'guest vocalists', 'collaborations']
    },
    'Vance Joy': {
        'Riptide': ['2013 EP recordings', 'God Loves You When You\'re Dancing']
    },
    'Calvin Harris': {
        'Giant': ["Rag'n'Bone Man", 'guest vocalists', 'collaborations', '2019 singles'],
        'Feel So Close': ['Calvin Harris vocals', 'DJ vocalists'],
        'My Way': ['Calvin Harris vocals', 'DJ vocalists'],
        'Feels': ['Pharrell Williams', 'Katy Perry', 'Big Sean', 'guest vocalists', 'collaborations'],
        'Sweet Nothing': ['Florence Welch', 'Florence + the Machine', 'guest vocalists', 'collaborations'],
        'How Deep Is Your Love': ['Disciples', 'collaborations'],
        'This Is What You Came For': ['Rihanna', 'guest vocalists', 'collaborations'],
        'I Need Your Love': ['Ellie Goulding', 'guest vocalists', 'collaborations'],
        'Promises': ['Sam Smith', 'guest vocalists', 'collaborations', '2018 singles']
    },
    'Sam Smith': {
        "Writing's on the Wall": ['James Bond', 'Spectre film', 'film soundtracks',
            'Oscar-winning songs', 'Jimmy Napes', '2015 singles']
    }
};

function makeTags(title, artist) {
    const tags = [
        '2010s', 'songs', 'artist identification', 'recordings',
        ...artistTags[artist]
    ];

    for (const [album, albumSongs] of (albumGroups[artist] || [])) {
        if (albumSongs.includes(title)) tags.push(album + ' album');
    }
    const extra = songTags[artist] && songTags[artist][title];
    if (extra) tags.push(...extra);
    return [...new Set(tags)];
}

// The lead artist or producer is specified when a featured performer
// could also be offered as a plausible answer.
const clarifiedQuestions = {
    'The Chainsmokers|Closer': "Which electronic duo released 'Closer' featuring Halsey?",
    'The Chainsmokers|Something Just Like This':
        "Which American electronic duo collaborated with Coldplay on 'Something Just Like This'?",
    'Lady Gaga|Shallow': "Which singer recorded 'Shallow' as a duet with Bradley Cooper?",
    'Calvin Harris|Giant': "Which Scottish DJ and producer released 'Giant' with Rag'n'Bone Man?",
    'Calvin Harris|Sweet Nothing': "Which Scottish DJ and producer released 'Sweet Nothing' featuring Florence Welch?",
    'Calvin Harris|Feels': "Which Scottish DJ and producer released 'Feels' featuring Pharrell Williams, Katy Perry and Big Sean?",
    'Calvin Harris|Promises': "Which Scottish DJ and producer collaborated with Sam Smith on 'Promises'?"
};

// Preserve the original artist list and answer positions except for
// replacing its duplicated fourth answer choice on every question.
const artists = [...new Set(songs.map(song => song[1]))];

function makeAnswers(correctArtist, index) {
    const wrongArtists = artists.filter(artist => artist !== correctArtist);

    // 24 artists leave 23 distractors. The old +23 matched index exactly.
    // +17 produces a different option without altering the correct answer.
    const answers = [
        correctArtist,
        wrongArtists[index % wrongArtists.length],
        wrongArtists[(index + 11) % wrongArtists.length],
        wrongArtists[(index + 17) % wrongArtists.length]
    ];
    const rotation = index % answers.length;
    return [...answers.slice(rotation), ...answers.slice(0, rotation)];
}

const questions = songs.map(([title, artist], index) => ({
    id: `music_${9767 + index}`,
    category: 'Music',
    question: clarifiedQuestions[artist + '|' + title] ||
        `Which artist recorded '${title}'${title.endsWith('?') ? '' : '?'}`,
    answers: makeAnswers(artist, index),
    correctAnswer: artist,
    difficulty: index % 3 === 0 ? 'Easy' : 'Medium',
    tags: makeTags(title, artist),
    dailyEligible: true
}));

module.exports = questions;
