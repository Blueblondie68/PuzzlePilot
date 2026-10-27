 // quiz_pack104.js
// PuzzlePilot Big Quiz - Pack 104
// Music - mainly 2000s, with one 2010 release
// 100 questions; IDs music_8467 - music_8566
// Full artist, decade, genre, song type and specialist tags.
// Original questions and answers retained except genuine credit ambiguity.

const songs = [
    ["Cish Cash", "Basement Jaxx"],
    ["Lucky Star", "Basement Jaxx"],
    ["Oh My Gosh", "Basement Jaxx"],
    ["Hey U", "Basement Jaxx"],

    ["Good Luck", "Basement Jaxx"],
    ["Romeo", "Basement Jaxx"],
    ["Where's Your Head At", "Basement Jaxx"],
    ["Bingo Bango", "Basement Jaxx"],
    ["Jus 1 Kiss", "Basement Jaxx"],
    ["Get Me Off", "Basement Jaxx"],
    ["Feelings Gone", "Basement Jaxx"],
    ["Raindrops", "Basement Jaxx"],

    ["Heartbeats", "The Knife"],
    ["Pass This On", "The Knife"],
    ["You Take My Breath Away", "The Knife"],
    ["Silent Shout", "The Knife"],
    ["Marble House", "The Knife"],
    ["Like a Pen", "The Knife"],
    ["We Share Our Mothers' Health", "The Knife"],
    ["Neverland", "The Knife"],
    ["Forest Families", "The Knife"],
    ["One Hit", "The Knife"],

    ["Heartbeats", "Jose Gonzalez"],
    ["Crosses", "Jose Gonzalez"],
    ["Stay in the Shade", "Jose Gonzalez"],
    ["Hand on Your Heart", "Jose Gonzalez"],
    ["Down the Line", "Jose Gonzalez"],
    ["Killing for Love", "Jose Gonzalez"],
    ["Teardrop", "Jose Gonzalez"],
    ["Cycling Trivialities", "Jose Gonzalez"],
    ["How Low", "Jose Gonzalez"],
    ["Fold", "Jose Gonzalez"],

    ["Over and Over", "Hot Chip"],
    ["Boy from School", "Hot Chip"],
    ["Colours", "Hot Chip"],
    ["No Fit State", "Hot Chip"],
    ["Ready for the Floor", "Hot Chip"],
    ["One Pure Thought", "Hot Chip"],
    ["Touch Too Much", "Hot Chip"],
    ["Shake a Fist", "Hot Chip"],
    ["Hold On", "Hot Chip"],

    ["Let's Make Love and Listen to Death from Above", "CSS"],
    ["Alala", "CSS"],
    ["Off the Hook", "CSS"],
    ["Music Is My Hot Hot Sex", "CSS"],
    ["Alcohol", "CSS"],
    ["Rat Is Dead (Rage)", "CSS"],
    ["Left Behind", "CSS"],
    ["Move", "CSS"],
    ["Air Painter", "CSS"],
    ["Art Bitch", "CSS"],

    ["Genesis", "Justice"],
    ["Newjack", "Justice"],
    ["The Party", "Justice"],
    ["Valentine", "Justice"],

    ["Acceptable in the 80s", "Calvin Harris"],
    ["The Girls", "Calvin Harris"],
    ["Merrymaking at My Place", "Calvin Harris"],
    ["I'm Not Alone", "Calvin Harris"],
    ["Ready for the Weekend", "Calvin Harris"],
    ["Flashback", "Calvin Harris"],
    ["Colours", "Calvin Harris"],
    ["Vegas", "Calvin Harris"],
    ["Neon Rocks", "Calvin Harris"],
    ["Electro Man", "Calvin Harris"],

    ["Galvanize", "The Chemical Brothers"],
    ["Believe", "The Chemical Brothers"],
    ["The Boxer", "The Chemical Brothers"],
    ["Do It Again", "The Chemical Brothers"],
    ["The Salmon Dance", "The Chemical Brothers"],
    ["Saturate", "The Chemical Brothers"],
    ["Burst Generator", "The Chemical Brothers"],
    ["Midnight Madness", "The Chemical Brothers"],
    ["Battle Scars", "The Chemical Brothers"],
    ["Surface to Air", "The Chemical Brothers"],

    ["Omen", "The Prodigy"],
    ["Warrior's Dance", "The Prodigy"],
    ["Invaders Must Die", "The Prodigy"],
    ["Take Me to the Hospital", "The Prodigy"],
    ["Spitfire", "The Prodigy"],
    ["Girls", "The Prodigy"],
    ["Hotride", "The Prodigy"],
    ["Memphis Bells", "The Prodigy"],
    ["You'll Be Under My Wheels", "The Prodigy"],
    ["Wake Up Call", "The Prodigy"],

    ["Pjanoo", "Eric Prydz"],
    ["Proper Education", "Eric Prydz"],
    ["Woz Not Woz", "Eric Prydz"],
    ["Slammin'", "Eric Prydz"],

    ["Let Me Think About It", "Ida Corr vs Fedde Le Grand"],
    ["The Creeps", "Camille Jones vs Fedde Le Grand"],
    ["Get This Feeling", "Fedde Le Grand"],
    ["3 Minutes to Explain", "Fedde Le Grand"],

    ["Watch Out", "Alex Gaudino feat. Shena"],
    ["I'm in Love (I Wanna Do It)", "Alex Gaudino"],

    ["Doctor Pressure", "Mylo vs Miami Sound Machine"],
    ["Drop the Pressure", "Mylo"],
    ["In My Arms", "Mylo"],
    ["Destroy Rock & Roll", "Mylo"],
    ["Muscle Cars", "Mylo"]
];

// Artist metadata supports decade, regional and specialist music quizzes.
// Each question receives its own expanded tags when the pack loads.
const artistTags = {
    'Basement Jaxx': ['Basement Jaxx', 'UK music', 'house music', 'dance music', 'electronic music'],
    'The Knife': ['The Knife', 'Swedish music', 'electropop', 'synthpop', 'electronic music'],
    'Jose Gonzalez': ['Jose Gonzalez', 'Swedish music', 'indie folk', 'acoustic music', 'singer-songwriters'],
    'Hot Chip': ['Hot Chip', 'UK music', 'electropop', 'indie dance', 'electronic music'],
    'CSS': ['CSS', 'Brazilian music', 'dance-punk', 'electroclash', 'indie rock'],
    'Justice': ['Justice', 'French music', 'French house', 'electro house', 'electronic music'],
    'Calvin Harris': ['Calvin Harris', 'Scottish music', 'UK music', 'electropop', 'house music', 'dance music'],
    'The Chemical Brothers': ['The Chemical Brothers', 'UK music', 'big beat', 'breakbeat', 'electronic music'],
    'The Prodigy': ['The Prodigy', 'UK music', 'big beat', 'breakbeat', 'electronic music'],
    'Eric Prydz': ['Eric Prydz', 'Swedish music', 'progressive house', 'house music', 'DJs and producers'],
    'Ida Corr vs Fedde Le Grand': ['Ida Corr', 'Fedde Le Grand', 'Danish music', 'Dutch music', 'house music', 'collaborations'],
    'Camille Jones vs Fedde Le Grand': ['Camille Jones', 'Fedde Le Grand', 'Danish music', 'Dutch music', 'house music', 'collaborations', 'remixes'],
    'Fedde Le Grand': ['Fedde Le Grand', 'Dutch music', 'house music', 'dance music', 'DJs and producers'],
    'Alex Gaudino feat. Shena': ['Alex Gaudino', 'Shena', 'Italian music', 'UK music', 'house music', 'collaborations'],
    'Alex Gaudino': ['Alex Gaudino', 'Italian music', 'house music', 'dance music', 'DJs and producers'],
    'Mylo vs Miami Sound Machine': ['Mylo', 'Miami Sound Machine', 'Scottish music', 'US music', 'house music', 'mashups', 'collaborations'],
    'Mylo': ['Mylo', 'Scottish music', 'house music', 'electronic music', 'DJs and producers']
};

// More precise wording is required in three places:
// - Both The Knife and Jose Gonzalez recorded Heartbeats, and
//   The Knife occurs among the Gonzalez question's answers.
// - Woz Not Woz was credited to Eric Prydz AND Steve Angello.
// - 3 Minutes to Explain was credited to Fedde Le Grand AND Funkerman.
// All three keep their original correct answers and answer choices.
const questionCorrections = {
    22: "Which singer recorded an acoustic cover of The Knife's Heartbeats?",
    87: 'Who collaborated with Steve Angello on Woz Not Woz?',
    92: 'Which DJ collaborated with Funkerman on 3 Minutes to Explain?'
};

const artists = [
    ...new Set(
        songs.map(song => song[1])
    )
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

function makeTags(title, artist, index) {
    // Alex Gaudino's I'm in Love (I Wanna Do It) was released in 2010.
    const decade = artist === 'Alex Gaudino' &&
        title === "I'm in Love (I Wanna Do It)"
        ? '2010s'
        : '2000s';

    const tags = [
        decade,
        'songs',
        'artist identification',
        'recordings',
        ...artistTags[artist]
    ];

    // These were cover versions of songs originally recorded
    // by The Knife, Kylie Minogue and Massive Attack respectively.
    if (artist === 'Jose Gonzalez' &&
        ['Heartbeats', 'Hand on Your Heart', 'Teardrop'].includes(title)) {
        tags.push('cover versions', 'acoustic covers');
    }

    if (artist === 'The Knife' && title === 'Heartbeats') {
        tags.push('original recordings');
    }

    if (artist === 'Basement Jaxx' && title === 'Bingo Bango') {
        // From the 1999 album Remedy, issued as a single in 2000.
        tags.push('2000 singles');
    }

    if (index === 87) {
        tags.push('Steve Angello', 'collaborations', 'DJ partnerships');
    }

    if (index === 92) {
        tags.push('Funkerman', 'collaborations', 'DJ partnerships');
    }

    return [...new Set(tags)];
}

const questions = songs.map((song, index) => {
    const title = song[0];
    const artist = song[1];
    const number = 8467 + index;

    return {
        id: `music_${String(number).padStart(4, '0')}`,
        category: 'Music',
        question: questionCorrections[index] ||
            `Which artist recorded ${title}?`,
        answers: makeAnswers(artist, index),
        correctAnswer: artist,
        difficulty: index % 3 === 0 ? 'Easy' : 'Medium',
        tags: makeTags(title, artist, index),
        dailyEligible: true
    };
});

module.exports = questions;
