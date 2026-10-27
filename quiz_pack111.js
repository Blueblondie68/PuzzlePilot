 // quiz_pack111.js
// PuzzlePilot Big Quiz - Pack 111
// Music - mainly 2000s, with three original 1990s recordings
// 100 questions; IDs music_9167 - music_9266
// Expanded artist, decade, genre, region and specialist tags
// Original questions, correct answers, difficulty and daily eligibility preserved

const songs = [
    ["Until the End", "Breaking Benjamin"],

    ["Blurry", "Puddle of Mudd"],
    ["She Hates Me", "Puddle of Mudd"],
    ["Away from Me", "Puddle of Mudd"],
    ["Heel Over Head", "Puddle of Mudd"],

    ["Youth of the Nation", "P.O.D."],
    ["Boom", "P.O.D."],
    ["Satellite", "P.O.D."],
    ["Will You", "P.O.D."],

    ["Click Click Boom", "Saliva"],
    ["Always", "Saliva"],
    ["Rest in Pieces", "Saliva"],
    ["Ladies and Gentlemen", "Saliva"],

    ["Hemorrhage (In My Hands)", "Fuel"],
    ["Bad Day", "Fuel"],
    ["Falls on Me", "Fuel"],

    ["Take a Picture", "Filter"],
    ["Where Do We Go from Here", "Filter"],

    ["Stillborn", "Black Label Society"],
    ["Suicide Messiah", "Black Label Society"],

    ["Remedy", "The Black Crowes"],
    ["Soul Singing", "The Black Crowes"],

    ["Feelin' Way Too Damn Good", "Nickelback"],
    ["Animals", "Nickelback"],
    ["Savin' Me", "Nickelback"],
    ["Gotta Be Somebody", "Nickelback"],
    ["If Today Was Your Last Day", "Nickelback"],

    ["Fade", "Staind"],
    ["For You", "Staind"],
    ["Price to Play", "Staind"],
    ["Right Here", "Staind"],

    ["Kryptonite", "3 Doors Down"],
    ["Loser", "3 Doors Down"],
    ["Duck and Run", "3 Doors Down"],
    ["Be Like That", "3 Doors Down"],
    ["When I'm Gone", "3 Doors Down"],
    ["Here Without You", "3 Doors Down"],
    ["Away from the Sun", "3 Doors Down"],
    ["Let Me Go", "3 Doors Down"],
    ["Landing in London", "3 Doors Down"],
    ["It's Not My Time", "3 Doors Down"],

    ["With Arms Wide Open", "Creed"],
    ["My Sacrifice", "Creed"],
    ["One Last Breath", "Creed"],
    ["Don't Stop Dancing", "Creed"],
    ["Bullets", "Creed"],
    ["Weathered", "Creed"],
    ["Overcome", "Creed"],
    ["Rain", "Creed"],

    ["Glow", "Alien Ant Farm"],
    ["Forgive and Forget", "Alien Ant Farm"],

    ["Hollywood Whore", "Papa Roach"],
    ["Lifeline", "Papa Roach"],

    ["Bodies", "Drowning Pool"],
    ["Tear Away", "Drowning Pool"],
    ["Sinner", "Drowning Pool"],
    ["Step Up", "Drowning Pool"],

    ["Down with the Sickness", "Disturbed"],
    ["Stupify", "Disturbed"],
    ["Voices", "Disturbed"],
    ["Remember", "Disturbed"],
    ["Liberate", "Disturbed"],
    ["Ten Thousand Fists", "Disturbed"],
    ["Just Stop", "Disturbed"],
    ["The Night", "Disturbed"],

    ["Thoughtless", "Korn"],
    ["Right Now", "Korn"],
    ["Coming Undone", "Korn"],
    ["Evolution", "Korn"],

    ["Change (In the House of Flies)", "Deftones"],
    ["Digital Bath", "Deftones"],
    ["Back to School (Mini Maggit)", "Deftones"],
    ["Minerva", "Deftones"],
    ["Hexagram", "Deftones"],
    ["Hole in the Earth", "Deftones"],

    ["Cochise", "Audioslave"],
    ["Like a Stone", "Audioslave"],
    ["Show Me How to Live", "Audioslave"],
    ["I Am the Highway", "Audioslave"],
    ["Be Yourself", "Audioslave"],
    ["Your Time Has Come", "Audioslave"],
    ["Doesn't Remind Me", "Audioslave"],
    ["Original Fire", "Audioslave"],

    ["Dosed", "Red Hot Chili Peppers"],
    ["Universally Speaking", "Red Hot Chili Peppers"],
    ["Fortune Faded", "Red Hot Chili Peppers"],
    ["Desecration Smile", "Red Hot Chili Peppers"],
    ["Hump de Bump", "Red Hot Chili Peppers"],

    ["Original of the Species", "U2"],
    ["Window in the Skies", "U2"],
    ["Magnificent", "U2"],
    ["I'll Go Crazy If I Don't Go Crazy Tonight", "U2"],

    ["Resolve", "Foo Fighters"],
    ["No Way Back", "Foo Fighters"],
    ["Let It Die", "Foo Fighters"],
    ["Cheer Up, Boys (Your Make Up Is Running)", "Foo Fighters"],

    ["Set It Off", "P.O.D."],
    ["Sleeping Awake", "P.O.D."],
    ["Goodbye for Now", "P.O.D."],
    ["Cold", "Crossfade"]
];

// These artist tags are expanded into EACH generated question.
// Shared definitions keep the full 100-question pack WordPad-friendly.
const artistTags = {
    'Breaking Benjamin': ['Breaking Benjamin', 'US music', 'post-grunge', 'alternative metal', 'hard rock'],
    'Puddle of Mudd': ['Puddle of Mudd', 'US music', 'post-grunge', 'alternative rock', 'hard rock'],
    'P.O.D.': ['P.O.D.', 'US music', 'nu metal', 'rap rock', 'alternative metal'],
    'Saliva': ['Saliva', 'US music', 'nu metal', 'hard rock', 'rap rock'],
    'Fuel': ['Fuel', 'US music', 'post-grunge', 'alternative rock', 'hard rock'],
    'Filter': ['Filter', 'US music', 'alternative rock', 'industrial rock', 'hard rock'],
    'Black Label Society': ['Black Label Society', 'US music', 'heavy metal', 'southern metal', 'hard rock'],
    'The Black Crowes': ['The Black Crowes', 'US music', 'blues rock', 'southern rock', 'rock bands'],
    'Nickelback': ['Nickelback', 'Canadian music', 'post-grunge', 'hard rock', 'alternative rock'],
    'Staind': ['Staind', 'US music', 'post-grunge', 'alternative metal', 'hard rock'],
    '3 Doors Down': ['3 Doors Down', 'US music', 'post-grunge', 'alternative rock', 'hard rock'],
    'Creed': ['Creed', 'US music', 'post-grunge', 'hard rock', 'alternative rock'],
    'Alien Ant Farm': ['Alien Ant Farm', 'US music', 'alternative metal', 'alternative rock', 'nu metal'],
    'Papa Roach': ['Papa Roach', 'US music', 'alternative metal', 'nu metal', 'hard rock'],
    'Drowning Pool': ['Drowning Pool', 'US music', 'nu metal', 'alternative metal', 'heavy metal'],
    'Disturbed': ['Disturbed', 'US music', 'heavy metal', 'alternative metal', 'nu metal'],
    'Korn': ['Korn', 'US music', 'nu metal', 'alternative metal', 'rock bands'],
    'Deftones': ['Deftones', 'US music', 'alternative metal', 'nu metal', 'alternative rock'],
    'Audioslave': ['Audioslave', 'US music', 'alternative rock', 'hard rock', 'supergroups'],
    'Red Hot Chili Peppers': ['Red Hot Chili Peppers', 'US music', 'funk rock', 'alternative rock', 'rock bands'],
    'U2': ['U2', 'Irish music', 'alternative rock', 'rock bands', 'arena rock'],
    'Foo Fighters': ['Foo Fighters', 'US music', 'alternative rock', 'post-grunge', 'hard rock'],
    'Crossfade': ['Crossfade', 'US music', 'post-grunge', 'alternative rock', 'hard rock']
};

function makeTags(title, artist) {
    // These songs were first released in the 1990s, even though
    // Take a Picture and With Arms Wide Open were also 2000 hits.
    const firstReleasedIn1990s =
        (artist === 'The Black Crowes' && title === 'Remedy') ||
        (artist === 'Filter' && title === 'Take a Picture') ||
        (artist === 'Creed' && title === 'With Arms Wide Open');

    const tags = [
        firstReleasedIn1990s ? '1990s' : '2000s',
        'songs',
        'artist identification',
        'recordings',
        ...artistTags[artist]
    ];

    if (artist === 'The Black Crowes' && title === 'Remedy') {
        tags.push('1992 songs', 'The Southern Harmony and Musical Companion');
    }
    if (artist === 'Filter' && title === 'Take a Picture') {
        tags.push('1999 recordings', '2000 singles', 'Title of Record');
    }
    if (artist === 'Creed' && title === 'With Arms Wide Open') {
        tags.push('1999 recordings', '2000 singles', 'Human Clay');
    }
    if (artist === 'Black Label Society' && title === 'Stillborn') {
        tags.push('Ozzy Osbourne', 'guest vocalists', 'collaborations');
    }
    if (artist === 'Saliva' && title === 'Rest in Pieces') {
        tags.push('Nikki Sixx', 'songwriters', 'co-written songs');
    }
    if (artist === '3 Doors Down' && title === 'Landing in London') {
        tags.push('Bob Seger', 'guest vocalists', 'collaborations');
    }
    if (artist === 'P.O.D.' && title === 'Sleeping Awake') {
        tags.push('film soundtracks', 'The Matrix Reloaded');
    }
    if (artist === 'Disturbed' && title === 'Ten Thousand Fists') {
        tags.push('title tracks', 'Ten Thousand Fists album');
    }
    if (artist === 'Creed' && title === 'Weathered') {
        tags.push('title tracks', 'Weathered album');
    }
    if (artist === 'Red Hot Chili Peppers' && title === 'Dosed') {
        tags.push('By the Way album');
    }

    return [...new Set(tags)];
}

// Preserve the original artist order and answer choices.
const artists = [
    ...new Set(songs.map(song => song[1]))
];

function makeAnswers(correctAnswer, index) {
    const otherArtists = artists.filter(
        artist => artist !== correctAnswer
    );

    const answers = [
        correctAnswer,
        otherArtists[index % otherArtists.length],
        otherArtists[(index + 11) % otherArtists.length],
        otherArtists[(index + 23) % otherArtists.length]
    ];

    const shift = index % answers.length;
    return [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];
}

const questions = songs.map((song, index) => {
    const title = song[0];
    const artist = song[1];
    const number = 9167 + index;

    return {
        id: `music_${String(number).padStart(4, '0')}`,
        category: 'Music',
        question: `Which artist recorded ${title}?`,
        answers: makeAnswers(artist, index),
        correctAnswer: artist,
        difficulty: index % 3 === 0 ? 'Easy' : 'Medium',
        tags: makeTags(title, artist),
        dailyEligible: true
    };
});

module.exports = questions;
