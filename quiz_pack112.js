 // quiz_pack112.js
// PuzzlePilot Big Quiz - Pack 112
// Music - 2000s
// 100 questions; IDs music_9267 - music_9366
// Expanded decade, artist, region, genre and specialist music tags
// Fixed repeated answer choices and one duplicate song question

const songs = [
    ["So Far Away", "Crossfade"],
    ["Colors", "Crossfade"],

    ["Headstrong", "Trapt"],
    ["Still Frame", "Trapt"],
    ["Echo", "Trapt"],

    ["Send the Pain Below", "Chevelle"],
    ["Closure", "Chevelle"],
    ["Vitamin R (Leading Us Along)", "Chevelle"],
    ["The Clincher", "Chevelle"],
    ["Well Enough Alone", "Chevelle"],
    ["I Get It", "Chevelle"],

    ["Save Me", "Shinedown"],
    ["I Dare You", "Shinedown"],
    ["Devour", "Shinedown"],
    ["Second Chance", "Shinedown"],
    ["Sound of Madness", "Shinedown"],
    ["If You Only Knew", "Shinedown"],

    ["The Red", "Chevelle"],

    ["Wasteland", "10 Years"],
    ["Through the Iris", "10 Years"],
    ["Beautiful", "10 Years"],

    ["Lips of an Angel", "Hinder"],
    ["Get Stoned", "Hinder"],
    ["Better Than Me", "Hinder"],
    ["Use Me", "Hinder"],

    ["Hate Me", "Blue October"],
    ["Into the Ocean", "Blue October"],
    ["Dirt Room", "Blue October"],

    ["Paralyzer", "Finger Eleven"],
    ["One Thing", "Finger Eleven"],
    ["Falling On", "Finger Eleven"],

    ["Cold", "Static-X"],
    ["The Only", "Static-X"],
    ["Destroyer", "Static-X"],

    ["Happy?", "Mudvayne"],
    ["Forget to Remember", "Mudvayne"],
    ["Not Falling", "Mudvayne"],

    ["My Curse", "Killswitch Engage"],
    ["The Arms of Sorrow", "Killswitch Engage"],
    ["Rose of Sharyn", "Killswitch Engage"],
    ["The End of Heartache", "Killswitch Engage"],

    ["Pull Harder on the Strings of Your Martyr", "Trivium"],
    ["A Gunshot to the Head of Trepidation", "Trivium"],
    ["Dying in Your Arms", "Trivium"],
    ["Anthem (We Are the Fire)", "Trivium"],
    ["Down from the Sky", "Trivium"],

    ["Through Struggle", "As I Lay Dying"],
    ["Nothing Left", "As I Lay Dying"],
    ["The Sound of Truth", "As I Lay Dying"],

    ["Cloud Connected", "In Flames"],
    ["Trigger", "In Flames"],
    ["Take This Life", "In Flames"],
    ["Come Clarity", "In Flames"],

    ["Nemesis", "Arch Enemy"],
    ["Revolution Begins", "Arch Enemy"],

    ["Redneck", "Lamb of God"],
    ["Walk with Me in Hell", "Lamb of God"],
    ["Set to Fail", "Lamb of God"],

    ["Blood and Thunder", "Mastodon"],
    ["Colony of Birchmen", "Mastodon"],
    ["Oblivion", "Mastodon"],
    ["Divinations", "Mastodon"],

    ["I Stand Alone", "Godsmack"],
    ["Straight Out of Line", "Godsmack"],
    ["Serenity", "Godsmack"],
    ["Speak", "Godsmack"],

    ["Pain", "Three Days Grace"],
    ["Just Like You", "Three Days Grace"],
    ["Home", "Three Days Grace"],
    ["Animal I Have Become", "Three Days Grace"],
    ["Never Too Late", "Three Days Grace"],
    ["Riot", "Three Days Grace"],
    ["Break", "Three Days Grace"],
    ["Take Me Under", "Three Days Grace"],
    ["I Hate Everything About You", "Three Days Grace"],

    ["All Around Me", "Flyleaf"],
    ["Fully Alive", "Flyleaf"],
    ["I'm So Sick", "Flyleaf"],
    ["Again", "Flyleaf"],

    ["I'm Not an Angel", "Halestorm"],
    ["It's Not You", "Halestorm"],
    ["Familiar Taste of Poison", "Halestorm"],

    ["Going Under", "Evanescence"],
    ["Everybody's Fool", "Evanescence"],
    ["Call Me When You're Sober", "Evanescence"],
    ["Lithium", "Evanescence"],
    ["Good Enough", "Evanescence"],

    ["45", "Shinedown"],
    ["Fly from the Inside", "Shinedown"],
    ["Burning Bright", "Shinedown"],
    ["Heroes", "Shinedown"],

    // This song already appears earlier in the pack. Use its ID
    // to test band history instead of repeating the same question.
    {
        question: 'Who is the lead singer of Shinedown?',
        answers: ['Brent Smith', 'Chad Kroeger', 'Sully Erna', 'Adam Gontier'],
        correctAnswer: 'Brent Smith',
        tags: ['2000s', 'band members', 'lead singers', 'vocalists',
            'Brent Smith', 'Shinedown', 'US music', 'hard rock',
            'post-grunge', 'band line-ups']
    },

    ["Bother", "Stone Sour"],
    ["Inhale", "Stone Sour"],
    ["Through Glass", "Stone Sour"],
    ["Sillyworld", "Stone Sour"],
    ["Made of Scars", "Stone Sour"],
    ["Get Inside", "Stone Sour"],

    ["Halo", "Soil"],
    ["Unreal", "Soil"]
];

// Artist metadata is applied to every normal song question.
// Keeping shared tags here makes the whole pack easier to manage.
const artistTags = {
    'Crossfade': ['Crossfade', 'US music', 'post-grunge', 'alternative rock', 'hard rock'],
    'Trapt': ['Trapt', 'US music', 'post-grunge', 'alternative metal', 'hard rock'],
    'Chevelle': ['Chevelle', 'US music', 'alternative metal', 'alternative rock', 'hard rock'],
    'Shinedown': ['Shinedown', 'US music', 'hard rock', 'post-grunge', 'alternative rock'],
    '10 Years': ['10 Years', 'US music', 'alternative metal', 'post-grunge', 'alternative rock'],
    'Hinder': ['Hinder', 'US music', 'post-grunge', 'hard rock', 'rock bands'],
    'Blue October': ['Blue October', 'US music', 'alternative rock', 'pop rock', 'rock bands'],
    'Finger Eleven': ['Finger Eleven', 'Canadian music', 'alternative rock', 'post-grunge', 'hard rock'],
    'Static-X': ['Static-X', 'US music', 'industrial metal', 'nu metal', 'alternative metal'],
    'Mudvayne': ['Mudvayne', 'US music', 'nu metal', 'alternative metal', 'heavy metal'],
    'Killswitch Engage': ['Killswitch Engage', 'US music', 'metalcore', 'melodic metalcore', 'heavy metal'],
    'Trivium': ['Trivium', 'US music', 'metalcore', 'heavy metal', 'thrash metal'],
    'As I Lay Dying': ['As I Lay Dying', 'US music', 'metalcore', 'melodic metalcore', 'heavy metal'],
    'In Flames': ['In Flames', 'Swedish music', 'melodic death metal', 'alternative metal', 'heavy metal'],
    'Arch Enemy': ['Arch Enemy', 'Swedish music', 'melodic death metal', 'death metal', 'heavy metal'],
    'Lamb of God': ['Lamb of God', 'US music', 'groove metal', 'heavy metal', 'metalcore'],
    'Mastodon': ['Mastodon', 'US music', 'progressive metal', 'sludge metal', 'heavy metal'],
    'Godsmack': ['Godsmack', 'US music', 'hard rock', 'alternative metal', 'nu metal'],
    'Three Days Grace': ['Three Days Grace', 'Canadian music', 'post-grunge', 'alternative metal', 'hard rock'],
    'Flyleaf': ['Flyleaf', 'US music', 'alternative metal', 'alternative rock', 'post-grunge'],
    'Halestorm': ['Halestorm', 'US music', 'hard rock', 'heavy metal', 'Lzzy Hale'],
    'Evanescence': ['Evanescence', 'US music', 'alternative metal', 'gothic metal', 'Amy Lee'],
    'Stone Sour': ['Stone Sour', 'US music', 'hard rock', 'alternative metal', 'Corey Taylor'],
    'Soil': ['Soil', 'US music', 'alternative metal', 'nu metal', 'hard rock']
};

// Retain the artist ordering of the original pack for its distractors.
// The special band-member question adds no new artist to this list.
const artists = [
    ...new Set(
        songs.filter(song => Array.isArray(song)).map(song => song[1])
    )
];

function makeAnswers(correctAnswer, index) {
    const otherArtists = artists.filter(
        artist => artist !== correctAnswer
    );

    // This pack has 24 artists and therefore 23 wrong-answer options.
    // The former index + 23 repeated the first wrong answer in all
    // 99 remaining song questions. +17 gives a different choice.
    const answers = [
        correctAnswer,
        otherArtists[index % otherArtists.length],
        otherArtists[(index + 11) % otherArtists.length],
        otherArtists[(index + 17) % otherArtists.length]
    ];

    const shift = index % answers.length;
    return [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];
}

function makeTags(title, artist) {
    const tags = [
        '2000s',
        'songs',
        'artist identification',
        'recordings',
        ...artistTags[artist]
    ];

    if (artist === 'Shinedown' && title === 'Save Me') {
        tags.push('Us and Them', '2005 songs');
    }
    if (artist === 'Shinedown' &&
        ['Devour', 'Second Chance', 'Sound of Madness', 'If You Only Knew'].includes(title)) {
        tags.push('The Sound of Madness album');
    }
    if (artist === 'Godsmack' && title === 'I Stand Alone') {
        tags.push('film soundtracks', 'The Scorpion King');
    }
    if (artist === 'Killswitch Engage' && title === 'The End of Heartache') {
        tags.push('title tracks', 'film soundtracks', 'Resident Evil: Apocalypse');
    }
    if (artist === 'Static-X' && title === 'Cold') {
        tags.push('film soundtracks', 'Queen of the Damned');
    }
    if (artist === 'Mastodon' && title === 'Blood and Thunder') {
        tags.push('Leviathan album', 'concept albums', 'Moby-Dick');
    }
    if (artist === 'Mastodon' &&
        ['Oblivion', 'Divinations'].includes(title)) {
        tags.push('Crack the Skye album');
    }
    if (artist === 'Stone Sour' && title === 'Bother') {
        tags.push('Corey Taylor', 'Slipknot connections');
    }
    if (artist === 'Soil' && ['Halo', 'Unreal'].includes(title)) {
        tags.push('Scars album');
    }

    return [...new Set(tags)];
}

const questions = songs.map((song, index) => {
    const isSpecialQuestion = !Array.isArray(song);
    const title = isSpecialQuestion ? null : song[0];
    const artist = isSpecialQuestion ? null : song[1];
    const number = 9267 + index;

    return {
        id: `music_${String(number).padStart(4, '0')}`,
        category: 'Music',
        question: isSpecialQuestion
            ? song.question
            : `Which artist recorded ${title}${title.endsWith('?') ? '' : '?'}`,
        answers: isSpecialQuestion
            ? song.answers
            : makeAnswers(artist, index),
        correctAnswer: isSpecialQuestion
            ? song.correctAnswer
            : artist,
        difficulty: index % 3 === 0 ? 'Easy' : 'Medium',
        tags: isSpecialQuestion
            ? song.tags
            : makeTags(title, artist),
        dailyEligible: true
    };
});

module.exports = questions;
