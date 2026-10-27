 // quiz_pack107.js
// PuzzlePilot Big Quiz - Pack 107
// Music - mainly 2000s, with four original 1990s recordings
// 100 questions; IDs music_8767 - music_8866
// Detailed performer, region, genre and specialist tags

const songs = [
    ["Nine Million Bicycles", "Katie Melua"],
    ["I Cried for You", "Katie Melua"],
    ["Spider's Web", "Katie Melua"],
    ["Shy Boy", "Katie Melua"],
    ["If You Were a Sailboat", "Katie Melua"],
    ["Mary Pickford", "Katie Melua"],
    ["Ghost Town", "Katie Melua"],

    ["The Closest Thing to Crazy", "Katie Melua"],
    ["Call Off the Search", "Katie Melua"],
    ["Crawling Up a Hill", "Katie Melua"],
    ["Blame It on the Moon", "Katie Melua"],
    ["My Aphrodisiac Is You", "Katie Melua"],
    ["Piece by Piece", "Katie Melua"],
    ["Just Like Heaven", "Katie Melua"],
    ["What I Miss About You", "Katie Melua"],

    ["I'd Like To", "Corinne Bailey Rae"],
    ["Breathless", "Corinne Bailey Rae"],
    ["Till It Happens to You", "Corinne Bailey Rae"],

    ["21st Century Life", "Sam Sparro"],
    ["Pocket", "Sam Sparro"],

    ["No Substitute Love", "Estelle"],
    ["Wait a Minute (Just a Touch)", "Estelle"],
    ["1980", "Estelle"],

    ["Badman", "Roll Deep"],
    ["Shake a Leg", "Roll Deep"],

    ["Tears", "Tinie Tempah"],

    ["Slither", "Velvet Revolver"],
    ["Fall to Pieces", "Velvet Revolver"],
    ["Dirty Little Thing", "Velvet Revolver"],
    ["Come On, Come In", "Velvet Revolver"],
    ["She Builds Quick Machines", "Velvet Revolver"],
    ["The Last Fight", "Velvet Revolver"],

    ["I Believe in a Thing Called Love", "The Darkness"],
    ["Growing on Me", "The Darkness"],
    ["Get Your Hands Off My Woman", "The Darkness"],
    ["Love Is Only a Feeling", "The Darkness"],
    ["Christmas Time (Don't Let the Bells End)", "The Darkness"],
    ["One Way Ticket", "The Darkness"],
    ["Is It Just Me?", "The Darkness"],
    ["Girlfriend", "The Darkness"],

    ["Woman", "Wolfmother"],
    ["Joker and the Thief", "Wolfmother"],
    ["White Unicorn", "Wolfmother"],
    ["Dimension", "Wolfmother"],
    ["Love Train", "Wolfmother"],

    ["Rollover DJ", "Jet"],
    ["Look What You've Done", "Jet"],
    ["Cold Hard Bitch", "Jet"],
    ["Get Me Outta Here", "Jet"],
    ["Put Your Money Where Your Mouth Is", "Jet"],
    ["Rip It Up", "Jet"],
    ["Shine On", "Jet"],

    ["Hate to Say I Told You So", "The Hives"],
    ["Main Offender", "The Hives"],
    ["Walk Idiot Walk", "The Hives"],
    ["Two-Timing Touch and Broken Bones", "The Hives"],
    ["A Little More for Little You", "The Hives"],
    ["Tick Tick Boom", "The Hives"],
    ["T.H.E.H.I.V.E.S.", "The Hives"],

    ["Woman Like a Man", "Damien Rice"],
    ["Cannonball", "Damien Rice"],
    ["Volcano", "Damien Rice"],
    ["The Blower's Daughter", "Damien Rice"],
    ["Rootless Tree", "Damien Rice"],
    ["9 Crimes", "Damien Rice"],
    ["Dogs", "Damien Rice"],
    ["Elephant", "Damien Rice"],

    // O is a Damien Rice album, not a song. Keep this question ID,
    // and test the album instead of an incorrectly named recording.
    {
        question: 'Which Damien Rice album includes Cannonball, Volcano and The Blower\'s Daughter?',
        answers: ['O', '9', 'My Favourite Faded Fantasy', 'Live at Fingerprints: Warts and All'],
        correctAnswer: 'O',
        tags: ['2000s', 'albums', 'album identification', 'debut albums',
            'Damien Rice', 'Irish music', 'indie folk', 'acoustic music',
            'singer-songwriters']
    },
    ["Cold Water", "Damien Rice"],
    ["Amie", "Damien Rice"],
    ["Delicate", "Damien Rice"],

    ["Wisemen", "James Blunt"],
    ["High", "James Blunt"],
    ["No Bravery", "James Blunt"],
    ["Same Mistake", "James Blunt"],
    ["Carry You Home", "James Blunt"],
    ["I Really Want You", "James Blunt"],

    ["Please Forgive Me", "David Gray"],
    ["This Year's Love", "David Gray"],
    ["Sail Away", "David Gray"],
    ["Say Hello Wave Goodbye", "David Gray"],
    ["The Other Side", "David Gray"],
    ["Be Mine", "David Gray"],
    ["Hospital Food", "David Gray"],

    ["Sing", "Travis"],
    ["Side", "Travis"],
    ["Flowers in the Window", "Travis"],
    ["Re-Offender", "Travis"],
    ["Love Will Come Through", "Travis"],
    ["Walking in the Sun", "Travis"],
    ["Closer", "Travis"],
    ["Selfish Jean", "Travis"],
    ["My Eyes", "Travis"],
    ["Something Anything", "Travis"],

    ["World at Your Feet", "Embrace"],
    ["A Glorious Day", "Embrace"],
    ["I Can't Come Down", "Embrace"],
    ["No Use Crying", "Embrace"],
    ["I Had a Time", "Embrace"],

    ["Set Me Free", "Velvet Revolver"]
];

// These tags expand into every ordinary music question.
// Shared tags keep this 100-question pack manageable in WordPad.
const artistTags = {
    'Katie Melua': ['Katie Melua', 'UK music', 'Georgian-born artists', 'jazz pop', 'blues pop', 'singer-songwriters'],
    'Corinne Bailey Rae': ['Corinne Bailey Rae', 'UK music', 'neo soul', 'R&B', 'singer-songwriters'],
    'Sam Sparro': ['Sam Sparro', 'Australian music', 'electropop', 'dance-pop', 'soul pop'],
    'Estelle': ['Estelle', 'UK music', 'R&B', 'soul', 'UK hip hop', 'female vocalists'],
    'Roll Deep': ['Roll Deep', 'UK music', 'grime', 'UK hip hop', 'music collectives'],
    'Tinie Tempah': ['Tinie Tempah', 'UK music', 'grime', 'UK hip hop', 'rappers'],
    'Velvet Revolver': ['Velvet Revolver', 'US music', 'hard rock', 'alternative rock', 'supergroups'],
    'The Darkness': ['The Darkness', 'UK music', 'hard rock', 'glam rock', 'rock bands'],
    'Wolfmother': ['Wolfmother', 'Australian music', 'hard rock', 'psychedelic rock', 'rock bands'],
    'Jet': ['Jet', 'Australian music', 'garage rock', 'hard rock', 'rock bands'],
    'The Hives': ['The Hives', 'Swedish music', 'garage rock', 'punk rock', 'rock bands'],
    'Damien Rice': ['Damien Rice', 'Irish music', 'indie folk', 'acoustic music', 'singer-songwriters'],
    'James Blunt': ['James Blunt', 'UK music', 'pop rock', 'soft rock', 'singer-songwriters'],
    'David Gray': ['David Gray', 'UK music', 'folk rock', 'soft rock', 'singer-songwriters'],
    'Travis': ['Travis', 'Scottish music', 'UK music', 'indie rock', 'alternative rock', 'rock bands'],
    'Embrace': ['Embrace', 'UK music', 'alternative rock', 'post-Britpop', 'rock bands']
};

// Cover versions receive extra tags, including the original performer.
// The player-facing question still asks who recorded THIS version.
const coverOriginals = {
    'Katie Melua|Crawling Up a Hill': 'John Mayall',
    'Katie Melua|Just Like Heaven': 'The Cure',
    'David Gray|Say Hello Wave Goodbye': 'Soft Cell'
};

// Keep all 16 artists in their original order so that song-question
// answer choices retain their original positions and distractors.
const artists = [
    ...new Set(
        songs.filter(song => Array.isArray(song)).map(song => song[1])
    )
];

function makeTags(title, artist) {
    // These four David Gray recordings first appeared on White Ladder
    // in 1998, although singles and reissues continued in the 2000s.
    const original1990s = artist === 'David Gray' &&
        ['Please Forgive Me', "This Year's Love", 'Sail Away',
            'Say Hello Wave Goodbye'].includes(title);

    const tags = [
        original1990s ? '1990s' : '2000s',
        'songs',
        'artist identification',
        'recordings',
        ...artistTags[artist]
    ];

    if (original1990s) {
        tags.push('1998 recordings', 'White Ladder');
    }

    const originalArtist = coverOriginals[`${artist}|${title}`];
    if (originalArtist) {
        tags.push('cover versions', 'original artists', originalArtist);
    }

    if (artist === 'The Darkness' &&
        title === "Christmas Time (Don't Let the Bells End)") {
        tags.push('Christmas songs', 'Christmas singles', 'seasonal music');
    }

    if (artist === 'Embrace' && title === 'World at Your Feet') {
        tags.push('football songs', '2006 World Cup', 'England football');
    }

    if (artist === 'Tinie Tempah' && title === 'Tears') {
        tags.push('mixtape tracks', '2007 recordings');
    }

    if (artist === 'David Gray' && title === 'Sail Away') {
        tags.push('2001 singles');
    }

    return [...new Set(tags)];
}

function makeAnswers(
    correctAnswer,
    index
) {
    const otherArtists =
        artists.filter(
            artist =>
                artist !== correctAnswer
        );

    const answers = [
        correctAnswer,
        otherArtists[
            index %
            otherArtists.length
        ],
        otherArtists[
            (index + 11) %
            otherArtists.length
        ],
        otherArtists[
            (index + 23) %
            otherArtists.length
        ]
    ];

    const shift =
        index % answers.length;

    return [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];
}

const questions = songs.map((song, index) => {
    const isAlbumQuestion = !Array.isArray(song);
    const title = isAlbumQuestion ? null : song[0];
    const artist = isAlbumQuestion ? null : song[1];
    const number = 8767 + index;

    return {
        id: `music_${String(number).padStart(4, '0')}`,
        category: 'Music',
        question: isAlbumQuestion
            ? song.question
            : `Which artist recorded ${title}?`,
        answers: isAlbumQuestion
            ? song.answers
            : makeAnswers(artist, index),
        correctAnswer: isAlbumQuestion
            ? song.correctAnswer
            : artist,
        difficulty: index % 3 === 0 ? 'Easy' : 'Medium',
        tags: isAlbumQuestion
            ? song.tags
            : makeTags(title, artist),
        dailyEligible: true
    };
});

module.exports = questions;
