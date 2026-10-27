 // quiz_pack116.js
// PuzzlePilot Big Quiz - Pack 116
// Music - 2010s
// 100 questions; IDs music_9667 - music_9766
// Expanded decade, artist, genre, country, album and specialist tags
// Three ambiguous guest-artist questions clarified; original answers kept

const songs = [
    ['Someone Like You', 'Adele'],
    ['Set Fire to the Rain', 'Adele'],
    ['Hello', 'Adele'],
    ['Send My Love (To Your New Lover)', 'Adele'],
    ['When We Were Young', 'Adele'],
    ['Skyfall', 'Adele'],

    ['Shape of You', 'Ed Sheeran'],
    ['Thinking Out Loud', 'Ed Sheeran'],
    ['The A Team', 'Ed Sheeran'],
    ['Lego House', 'Ed Sheeran'],
    ['Sing', 'Ed Sheeran'],
    ['Photograph', 'Ed Sheeran'],
    ['Castle on the Hill', 'Ed Sheeran'],
    ['Perfect', 'Ed Sheeran'],
    ['Galway Girl', 'Ed Sheeran'],

    ['Domino', 'Jessie J'],
    ['Do It Like a Dude', 'Jessie J'],

    ['Roar', 'Katy Perry'],
    ['Firework', 'Katy Perry'],
    ['Teenage Dream', 'Katy Perry'],
    ['California Gurls', 'Katy Perry'],
    ['Last Friday Night (T.G.I.F.)', 'Katy Perry'],
    ['Dark Horse', 'Katy Perry'],
    ['Wide Awake', 'Katy Perry'],
    ['Part of Me', 'Katy Perry'],

    ['Just the Way You Are', 'Bruno Mars'],
    ['Grenade', 'Bruno Mars'],
    ['Locked Out of Heaven', 'Bruno Mars'],
    ['When I Was Your Man', 'Bruno Mars'],
    ['Treasure', 'Bruno Mars'],
    ['24K Magic', 'Bruno Mars'],
    ['That\'s What I Like', 'Bruno Mars'],
    ['Uptown Funk', 'Mark Ronson'],

    ['Shake It Off', 'Taylor Swift'],
    ['Blank Space', 'Taylor Swift'],
    ['Style', 'Taylor Swift'],
    ['Bad Blood', 'Taylor Swift'],
    ['Wildest Dreams', 'Taylor Swift'],
    ['Look What You Made Me Do', 'Taylor Swift'],
    ['Delicate', 'Taylor Swift'],
    ['We Are Never Ever Getting Back Together', 'Taylor Swift'],

    ['Call Me Maybe', 'Carly Rae Jepsen'],
    ['I Really Like You', 'Carly Rae Jepsen'],
    ['Run Away with Me', 'Carly Rae Jepsen'],

    ['What Makes You Beautiful', 'One Direction'],
    ['Live While We\'re Young', 'One Direction'],
    ['Story of My Life', 'One Direction'],
    ['Best Song Ever', 'One Direction'],
    ['Steal My Girl', 'One Direction'],
    ['Drag Me Down', 'One Direction'],

    ['Pillowtalk', 'Zayn'],
    ['Sign of the Times', 'Harry Styles'],

    ['Born This Way', 'Lady Gaga'],
    ['The Edge of Glory', 'Lady Gaga'],
    ['Applause', 'Lady Gaga'],
    ['Alejandro', 'Lady Gaga'],
    ['Million Reasons', 'Lady Gaga'],

    ['Diamonds', 'Rihanna'],
    ['Only Girl (In the World)', 'Rihanna'],
    ['What\'s My Name?', 'Rihanna'],
    ['We Found Love', 'Rihanna'],
    ['Where Have You Been', 'Rihanna'],
    ['Stay', 'Rihanna'],
    ['Work', 'Rihanna'],
    ['S&M', 'Rihanna'],

    ['Love the Way You Lie', 'Eminem'],
    ['Not Afraid', 'Eminem'],
    ['The Monster', 'Eminem'],
    ['Rap God', 'Eminem'],

    ['Blurred Lines', 'Robin Thicke'],
    ['Happy', 'Pharrell Williams'],

    ['Get Lucky', 'Daft Punk'],
    ['Instant Crush', 'Daft Punk'],
    ['Lose Yourself to Dance', 'Daft Punk'],

    ['Wake Me Up', 'Avicii'],
    ['Hey Brother', 'Avicii'],
    ['The Nights', 'Avicii'],
    ['Waiting for Love', 'Avicii'],
    ['Levels', 'Avicii'],

    ['Titanium', 'David Guetta'],
    ['Without You', 'David Guetta'],
    ['Turn Me On', 'David Guetta'],
    ['Play Hard', 'David Guetta'],
    ['Lovers on the Sun', 'David Guetta'],

    ['Rather Be', 'Clean Bandit'],
    ['Real Love', 'Clean Bandit'],
    ['Rockabye', 'Clean Bandit'],
    ['Symphony', 'Clean Bandit'],
    ['Solo', 'Clean Bandit'],

    ['Latch', 'Disclosure'],
    ['White Noise', 'Disclosure'],
    ['You & Me', 'Disclosure'],
    ['Omen', 'Disclosure'],
    ['Holding On', 'Disclosure'],

    ['King', 'Years & Years'],
    ['Shine', 'Years & Years'],
    ['Eyes Shut', 'Years & Years'],
    ['Desire', 'Years & Years'],
    ['Take Shelter', 'Years & Years'],

    ['Pompeii', 'Bastille']
];

// These tags are expanded into every individual question when loaded.
// Genre and location describe the main artist; album and guest tags
// below are chosen separately for the specific recording.
const artistTags = {
    'Adele': ['Adele', 'English music', 'UK music', 'pop', 'soul', 'singer-songwriters'],
    'Ed Sheeran': ['Ed Sheeran', 'English music', 'UK music', 'pop', 'folk-pop', 'singer-songwriters'],
    'Jessie J': ['Jessie J', 'English music', 'UK music', 'pop', 'R&B', 'dance-pop'],
    'Katy Perry': ['Katy Perry', 'US music', 'pop', 'dance-pop', 'pop singers'],
    'Bruno Mars': ['Bruno Mars', 'US music', 'pop', 'funk', 'R&B', 'singer-songwriters'],
    'Mark Ronson': ['Mark Ronson', 'UK music', 'funk', 'pop', 'music producers', 'record producers'],
    'Taylor Swift': ['Taylor Swift', 'US music', 'pop', 'singer-songwriters', 'pop singers'],
    'Carly Rae Jepsen': ['Carly Rae Jepsen', 'Canadian music', 'pop', 'synth-pop', 'dance-pop'],
    'One Direction': ['One Direction', 'UK music', 'Irish music', 'boy bands', 'pop', 'pop rock'],
    'Zayn': ['Zayn', 'English music', 'UK music', 'pop', 'R&B', 'One Direction connections'],
    'Harry Styles': ['Harry Styles', 'English music', 'UK music', 'pop rock', 'pop', 'One Direction connections'],
    'Lady Gaga': ['Lady Gaga', 'US music', 'pop', 'dance-pop', 'electropop'],
    'Rihanna': ['Rihanna', 'Barbadian music', 'pop', 'R&B', 'dance-pop'],
    'Eminem': ['Eminem', 'US music', 'hip hop', 'rap', 'rappers'],
    'Robin Thicke': ['Robin Thicke', 'US music', 'R&B', 'pop', 'soul'],
    'Pharrell Williams': ['Pharrell Williams', 'US music', 'pop', 'funk', 'R&B', 'music producers'],
    'Daft Punk': ['Daft Punk', 'French music', 'electronic music', 'French house', 'disco'],
    'Avicii': ['Avicii', 'Swedish music', 'electronic dance music', 'progressive house', 'music producers'],
    'David Guetta': ['David Guetta', 'French music', 'electronic dance music', 'house music', 'music producers'],
    'Clean Bandit': ['Clean Bandit', 'English music', 'UK music', 'dance-pop', 'electronic music', 'classical crossover'],
    'Disclosure': ['Disclosure', 'English music', 'UK music', 'house music', 'UK garage', 'electronic dance music'],
    'Years & Years': ['Years & Years', 'English music', 'UK music', 'synth-pop', 'electropop', 'Olly Alexander'],
    'Bastille': ['Bastille', 'English music', 'UK music', 'indie pop', 'alternative rock', 'pop rock']
};

// Albums are assigned only to recordings that appear on them.
const albumGroups = {
    'Adele': [
        ['21', ['Someone Like You', 'Set Fire to the Rain']],
        ['25', ['Hello', 'Send My Love (To Your New Lover)', 'When We Were Young']]
    ],
    'Ed Sheeran': [
        ['Plus (+)', ['The A Team', 'Lego House']],
        ['Multiply (x)', ['Thinking Out Loud', 'Sing', 'Photograph']],
        ['Divide', ['Shape of You', 'Castle on the Hill', 'Perfect', 'Galway Girl']]
    ],
    'Jessie J': [
        ['Who You Are', ['Domino', 'Do It Like a Dude']]
    ],
    'Katy Perry': [
        ['Teenage Dream', ['Firework', 'Teenage Dream', 'California Gurls', 'Last Friday Night (T.G.I.F.)']],
        ['Teenage Dream: The Complete Confection', ['Wide Awake', 'Part of Me']],
        ['Prism', ['Roar', 'Dark Horse']]
    ],
    'Bruno Mars': [
        ['Doo-Wops & Hooligans', ['Just the Way You Are', 'Grenade']],
        ['Unorthodox Jukebox', ['Locked Out of Heaven', 'When I Was Your Man', 'Treasure']],
        ['24K Magic', ['24K Magic', "That's What I Like"]]
    ],
    'Mark Ronson': [['Uptown Special', ['Uptown Funk']]],
    'Taylor Swift': [
        ['Red', ['We Are Never Ever Getting Back Together']],
        ['1989', ['Shake It Off', 'Blank Space', 'Style', 'Bad Blood', 'Wildest Dreams']],
        ['Reputation', ['Look What You Made Me Do', 'Delicate']]
    ],
    'Carly Rae Jepsen': [
        ['Kiss', ['Call Me Maybe']],
        ['Emotion', ['I Really Like You', 'Run Away with Me']]
    ],
    'One Direction': [
        ['Up All Night', ['What Makes You Beautiful']],
        ['Take Me Home', ["Live While We're Young"]],
        ['Midnight Memories', ['Story of My Life', 'Best Song Ever']],
        ['Four', ['Steal My Girl']],
        ['Made in the A.M.', ['Drag Me Down']]
    ],
    'Zayn': [['Mind of Mine', ['Pillowtalk']]],
    'Harry Styles': [['Harry Styles', ['Sign of the Times']]],
    'Lady Gaga': [
        ['Born This Way', ['Born This Way', 'The Edge of Glory']],
        ['Artpop', ['Applause']],
        ['The Fame Monster', ['Alejandro']],
        ['Joanne', ['Million Reasons']]
    ],
    'Rihanna': [
        ['Loud', ['Only Girl (In the World)', "What's My Name?", 'S&M']],
        ['Talk That Talk', ['We Found Love', 'Where Have You Been']],
        ['Unapologetic', ['Diamonds', 'Stay']],
        ['Anti', ['Work']]
    ],
    'Eminem': [
        ['Recovery', ['Love the Way You Lie', 'Not Afraid']],
        ['The Marshall Mathers LP 2', ['The Monster', 'Rap God']]
    ],
    'Daft Punk': [['Random Access Memories', ['Get Lucky', 'Instant Crush', 'Lose Yourself to Dance']]],
    'Avicii': [
        ['True', ['Wake Me Up', 'Hey Brother']],
        ['Stories', ['Waiting for Love']]
    ],
    'David Guetta': [
        ['Nothing but the Beat', ['Titanium', 'Without You', 'Turn Me On', 'Play Hard']],
        ['Listen', ['Lovers on the Sun']]
    ],
    'Clean Bandit': [
        ['New Eyes', ['Rather Be', 'Real Love']],
        ['What Is Love?', ['Rockabye', 'Symphony', 'Solo']]
    ],
    'Disclosure': [
        ['Settle', ['Latch', 'White Noise', 'You & Me']],
        ['Caracal', ['Omen', 'Holding On']]
    ],
    'Years & Years': [['Communion', ['King', 'Shine', 'Eyes Shut', 'Desire', 'Take Shelter']]],
    'Bastille': [['Bad Blood', ['Pompeii']]]
};

// Recording-specific guests, soundtrack links and other useful topics.
const songTags = {
    'Adele': {
        'Skyfall': ['James Bond', 'film soundtracks', 'Skyfall film', 'Paul Epworth', 'Oscar-winning songs']
    },
    'Ed Sheeran': {
        'Galway Girl': ['Irish folk influences', 'folk-pop']
    },
    'Katy Perry': {
        'California Gurls': ['Snoop Dogg', 'guest rappers', 'collaborations'],
        'Dark Horse': ['Juicy J', 'guest rappers', 'collaborations']
    },
    'Mark Ronson': {
        'Uptown Funk': ['Bruno Mars', 'guest vocalists', 'collaborations', 'funk revival']
    },
    'Taylor Swift': {
        'Bad Blood': ['Kendrick Lamar remix', 'remixes', 'collaborations']
    },
    'One Direction': {
        'What Makes You Beautiful': ['debut singles']
    },
    'Zayn': {'Pillowtalk': ['debut solo singles']},
    'Harry Styles': {'Sign of the Times': ['debut solo singles']},
    'Lady Gaga': {
        'Alejandro': ['2009 album recordings', '2010 singles']
    },
    'Rihanna': {
        "What's My Name?": ['Drake', 'guest rappers', 'collaborations'],
        'We Found Love': ['Calvin Harris', 'dance music', 'collaborations'],
        'Stay': ['Mikky Ekko', 'duets', 'guest vocalists'],
        'Work': ['Drake', 'guest rappers', 'collaborations']
    },
    'Eminem': {
        'Love the Way You Lie': ['Rihanna', 'guest vocalists', 'collaborations'],
        'The Monster': ['Rihanna', 'guest vocalists', 'collaborations']
    },
    'Robin Thicke': {
        'Blurred Lines': ['Pharrell Williams', 'T.I.', 'guest rappers', 'collaborations']
    },
    'Pharrell Williams': {
        'Happy': ['film soundtracks', 'Despicable Me 2', 'G I R L album']
    },
    'Daft Punk': {
        'Get Lucky': ['Pharrell Williams', 'Nile Rodgers', 'guest vocalists', 'guitarists', 'collaborations'],
        'Instant Crush': ['Julian Casablancas', 'The Strokes', 'guest vocalists', 'collaborations'],
        'Lose Yourself to Dance': ['Pharrell Williams', 'Nile Rodgers', 'guest vocalists', 'guitarists', 'collaborations']
    },
    'Avicii': {
        'Wake Me Up': ['Aloe Blacc', 'guest vocalists', 'folk influences'],
        'Hey Brother': ['Dan Tyminski', 'guest vocalists', 'bluegrass influences'],
        'The Nights': ['Nicholas Furlong', 'guest vocalists'],
        'Levels': ['Etta James', 'samples', '1960s originals']
    },
    'David Guetta': {
        'Titanium': ['Sia', 'guest vocalists', 'collaborations'],
        'Without You': ['Usher', 'guest vocalists', 'collaborations'],
        'Turn Me On': ['Nicki Minaj', 'guest vocalists', 'collaborations'],
        'Play Hard': ['Ne-Yo', 'Akon', 'guest vocalists', 'collaborations'],
        'Lovers on the Sun': ['Sam Martin', 'guest vocalists', 'collaborations']
    },
    'Clean Bandit': {
        'Rather Be': ['Jess Glynne', 'guest vocalists', 'collaborations'],
        'Real Love': ['Jess Glynne', 'guest vocalists', 'collaborations'],
        'Rockabye': ['Anne-Marie', 'Sean Paul', 'guest vocalists', 'collaborations'],
        'Symphony': ['Zara Larsson', 'guest vocalists', 'collaborations'],
        'Solo': ['Demi Lovato', 'guest vocalists', 'collaborations']
    },
    'Disclosure': {
        'Latch': ['Sam Smith', 'guest vocalists', 'collaborations'],
        'White Noise': ['AlunaGeorge', 'guest vocalists', 'collaborations'],
        'You & Me': ['Eliza Doolittle', 'guest vocalists', 'collaborations'],
        'Omen': ['Sam Smith', 'guest vocalists', 'collaborations'],
        'Holding On': ['Gregory Porter', 'guest vocalists', 'collaborations']
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

// Featured performers are sometimes among the answer options. Make the
// lead-artist credit explicit so there is only one defensible answer.
const clarifiedQuestions = {
    'Mark Ronson|Uptown Funk': "Which producer released 'Uptown Funk' featuring Bruno Mars?",
    'Eminem|The Monster': "Which rapper released 'The Monster' featuring Rihanna?",
    'Robin Thicke|Blurred Lines': "Which singer released 'Blurred Lines' featuring Pharrell Williams and T.I.?"
};

const artists = [
    ...new Set(
        songs.map(song => song[1])
    )
];

function makeAnswers(correctArtist, index) {
    const wrongArtists =
        artists.filter(
            artist =>
                artist !== correctArtist
        );

    const wrong1 =
        wrongArtists[
            index %
            wrongArtists.length
        ];

    const wrong2 =
        wrongArtists[
            (index + 11) %
            wrongArtists.length
        ];

    const wrong3 =
        wrongArtists[
            (index + 23) %
            wrongArtists.length
        ];

    const answers = [
        correctArtist,
        wrong1,
        wrong2,
        wrong3
    ];

    const rotation =
        index % 4;

    return [
        ...answers.slice(rotation),
        ...answers.slice(0, rotation)
    ];
}

const questions =
    songs.map(
        ([title, artist], index) => ({
            id:
                'music_' +
                String(
                    9667 + index
                ).padStart(4, '0'),

            category: 'Music',

            question:
                clarifiedQuestions[artist + '|' + title] ||
                `Which artist recorded '${title}'?`,

            answers:
                makeAnswers(
                    artist,
                    index
                ),

            correctAnswer:
                artist,

            difficulty:
                index % 3 === 0
                    ? 'Easy'
                    : 'Medium',

            tags: makeTags(title, artist),

            dailyEligible: true
        })
    );

module.exports = questions;
