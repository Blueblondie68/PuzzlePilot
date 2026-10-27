 // quiz_pack110.js
// PuzzlePilot Big Quiz - Pack 110
// Music - 2000s
// 100 questions; IDs music_9067 - music_9166
// Expanded artist, decade, region, genre and specialist tags
// Corrected duplicate answer choices and verified song-title formatting

const songs = [
    ["Do It for Me Now", "Angels & Airwaves"],
    ["Everything's Magic", "Angels & Airwaves"],
    ["Secret Crowds", "Angels & Airwaves"],

    ["Make a Move", "Incubus"],
    ["Anna Molly", "Incubus"],
    ["Dig", "Incubus"],
    ["Oil and Water", "Incubus"],

    ["The Kill", "Thirty Seconds to Mars"],
    ["From Yesterday", "Thirty Seconds to Mars"],
    ["A Beautiful Lie", "Thirty Seconds to Mars"],
    ["Attack", "Thirty Seconds to Mars"],

    ["Miss Murder", "AFI"],
    ["Love Like Winter", "AFI"],
    ["Silver and Cold", "AFI"],
    ["The Leaving Song Pt. II", "AFI"],

    ["Prayer of the Refugee", "Rise Against"],
    ["Ready to Fall", "Rise Against"],
    ["Re-Education (Through Labor)", "Rise Against"],
    ["Audience of One", "Rise Against"],
    ["Swing Life Away", "Rise Against"],

    ["Damn Regret", "The Red Jumpsuit Apparatus"],
    ["Cat and Mouse", "The Red Jumpsuit Apparatus"],
    ["You Better Pray", "The Red Jumpsuit Apparatus"],

    ["Night Drive", "The All-American Rejects"],
    ["Dance Inside", "The All-American Rejects"],

    ["Beating Heart Baby", "Head Automatica"],
    ["Graduation Day", "Head Automatica"],

    ["Honestly", "Zwan"],
    ["Lyric", "Zwan"],

    ["My Friends Over You", "New Found Glory"],
    ["Head on Collision", "New Found Glory"],
    ["All Downhill from Here", "New Found Glory"],
    ["Failure's Not Flattering", "New Found Glory"],
    ["I Don't Wanna Know", "New Found Glory"],
    ["It's Not Your Fault", "New Found Glory"],
    ["Kiss Me", "New Found Glory"],

    ["Bleed American", "Jimmy Eat World"],
    ["Hear You Me", "Jimmy Eat World"],
    ["The Authority Song", "Jimmy Eat World"],
    ["Get It Faster", "Jimmy Eat World"],
    ["Kill", "Jimmy Eat World"],
    ["Polaris", "Jimmy Eat World"],
    ["Let It Happen", "Jimmy Eat World"],

    ["The Downfall of Us All", "A Day to Remember"],
    ["If It Means a Lot to You", "A Day to Remember"],
    ["Have Faith in Me", "A Day to Remember"],
    ["I'm Made of Wax, Larry, What Are You Made Of?", "A Day to Remember"],

    ["Situations", "Escape the Fate"],
    ["Not Good Enough for Truth in Cliché", "Escape the Fate"],
    ["The Flood", "Escape the Fate"],
    ["Something", "Escape the Fate"],

    ["Writing on the Walls", "Underoath"],
    ["Reinventing Your Exit", "Underoath"],
    ["It's Dangerous Business Walking Out Your Front Door", "Underoath"],
    ["A Boy Brushed Red Living in Black and White", "Underoath"],
    ["Desperate Times, Desperate Measures", "Underoath"],

    ["Baby, You Wouldn't Last a Minute on the Creek", "Chiodos"],
    ["The Words \"Best Friend\" Become Redefined", "Chiodos"],
    ["Lexington (Joey Pea-Pot with a Monkey Face)", "Chiodos"],

    ["Helena", "My Chemical Romance"],
    ["The Ghost of You", "My Chemical Romance"],
    ["I Don't Love You", "My Chemical Romance"],

    ["Duality", "Slipknot"],
    ["Before I Forget", "Slipknot"],
    ["Vermilion", "Slipknot"],
    ["Psychosocial", "Slipknot"],
    ["Dead Memories", "Slipknot"],

    ["Bat Country", "Avenged Sevenfold"],
    ["Beast and the Harlot", "Avenged Sevenfold"],
    ["Seize the Day", "Avenged Sevenfold"],
    ["Almost Easy", "Avenged Sevenfold"],
    ["Afterlife", "Avenged Sevenfold"],
    ["Dear God", "Avenged Sevenfold"],

    ["Tears Don't Fall", "Bullet for My Valentine"],
    ["All These Things I Hate (Revolve Around Me)", "Bullet for My Valentine"],
    ["Scream Aim Fire", "Bullet for My Valentine"],
    ["Hearts Burst into Fire", "Bullet for My Valentine"],
    ["Waking the Demon", "Bullet for My Valentine"],

    ["Last Train Home", "Lostprophets"],
    ["Wake Up (Make a Move)", "Lostprophets"],
    ["Last Summer", "Lostprophets"],
    ["Rooftops (A Liberation Broadcast)", "Lostprophets"],
    ["Can't Catch Tomorrow (Good Shoes Won't Save You This Time)", "Lostprophets"],
    ["4:AM Forever", "Lostprophets"],

    ["Come Back Around", "Feeder"],

    ["Prayer", "Disturbed"],
    ["Stricken", "Disturbed"],
    ["Land of Confusion", "Disturbed"],
    ["Inside the Fire", "Disturbed"],
    ["Indestructible", "Disturbed"],

    ["Remedy", "Seether"],
    ["Fake It", "Seether"],
    ["Rise Above This", "Seether"],
    ["Breakdown", "Seether"],
    ["Fine Again", "Seether"],
    ["Broken", "Seether"],

    ["So Cold", "Breaking Benjamin"],
    ["Sooner or Later", "Breaking Benjamin"],
    ["The Diary of Jane", "Breaking Benjamin"],
    ["Breath", "Breaking Benjamin"]
];

// These artist-specific tags are added to EACH generated question,
// rather than only appearing once in the source file.
const artistTags = {
    "A Day to Remember": ["A Day to Remember", "US music", "pop punk", "metalcore", "post-hardcore"],
    "AFI": ["AFI", "US music", "alternative rock", "punk rock", "emo"],
    "Angels & Airwaves": ["Angels & Airwaves", "US music", "alternative rock", "space rock", "Tom DeLonge", "Blink-182 connections"],
    "Avenged Sevenfold": ["Avenged Sevenfold", "US music", "heavy metal", "hard rock", "metalcore"],
    "Breaking Benjamin": ["Breaking Benjamin", "US music", "post-grunge", "alternative metal", "hard rock"],
    "Bullet for My Valentine": ["Bullet for My Valentine", "Welsh music", "UK music", "metalcore", "heavy metal"],
    "Chiodos": ["Chiodos", "US music", "post-hardcore", "progressive rock", "emo"],
    "Disturbed": ["Disturbed", "US music", "heavy metal", "alternative metal", "nu metal"],
    "Escape the Fate": ["Escape the Fate", "US music", "post-hardcore", "metalcore", "emo"],
    "Feeder": ["Feeder", "Welsh music", "UK music", "alternative rock", "post-Britpop"],
    "Head Automatica": ["Head Automatica", "US music", "dance-rock", "power pop", "alternative rock"],
    "Incubus": ["Incubus", "US music", "alternative rock", "funk rock", "rock bands"],
    "Jimmy Eat World": ["Jimmy Eat World", "US music", "alternative rock", "emo", "pop punk"],
    "Lostprophets": ["Lostprophets", "Welsh music", "UK music", "alternative rock", "nu metal"],
    "My Chemical Romance": ["My Chemical Romance", "US music", "alternative rock", "emo", "punk rock"],
    "New Found Glory": ["New Found Glory", "US music", "pop punk", "punk rock", "rock bands"],
    "Rise Against": ["Rise Against", "US music", "punk rock", "melodic hardcore", "rock bands"],
    "Seether": ["Seether", "South African music", "post-grunge", "alternative metal", "hard rock"],
    "Slipknot": ["Slipknot", "US music", "heavy metal", "nu metal", "alternative metal"],
    "The All-American Rejects": ["The All-American Rejects", "US music", "pop rock", "power pop", "alternative rock"],
    "The Red Jumpsuit Apparatus": ["The Red Jumpsuit Apparatus", "US music", "post-hardcore", "emo", "alternative rock"],
    "Thirty Seconds to Mars": ["Thirty Seconds to Mars", "US music", "alternative rock", "emo", "rock bands"],
    "Underoath": ["Underoath", "US music", "post-hardcore", "metalcore", "emo"],
    "Zwan": ["Zwan", "US music", "alternative rock", "supergroups", "Billy Corgan"]
};

// Preserve original artist list ordering for the answer choices.
const artists = [
    ...new Set(songs.map(song => song[1]))
];

function makeAnswers(correctAnswer, index) {
    const otherArtists = artists.filter(
        artist => artist !== correctAnswer
    );

    // There are 24 artists and 23 possible wrong answers per question.
    // Using +23 duplicated the first wrong answer in every question.
    // +17 supplies a third distinct wrong answer instead.
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

    // Film soundtrack recording from the 2005 film Stealth.
    if (artist === 'Incubus' && title === 'Make a Move') {
        tags.push('film soundtracks', 'Stealth');
    }

    // New Found Glory covered the Sixpence None the Richer song.
    if (artist === 'New Found Glory' && title === 'Kiss Me') {
        tags.push('cover versions', 'Sixpence None the Richer',
            'From the Screen to Your Stereo Part II');
    }

    // Disturbed covered the original Genesis song.
    if (artist === 'Disturbed' && title === 'Land of Confusion') {
        tags.push('cover versions', 'Genesis', '1980s originals');
    }

    // Seether recorded Broken in 2002 and later released a duet
    // version featuring Amy Lee in 2004.
    if (artist === 'Seether' && title === 'Broken') {
        tags.push('2002 recordings', '2004 duets', 'Amy Lee',
            'featured artists', 'The Punisher soundtrack');
    }

    // Album associations and band-history topics for specialist quizzes.
    if (artist === 'Zwan' && (title === 'Honestly' || title === 'Lyric')) {
        tags.push('Mary Star of the Sea', 'Billy Corgan');
    }
    if (artist === 'Jimmy Eat World' && title === 'The Authority Song') {
        tags.push('Bleed American album');
    }
    if (artist === 'My Chemical Romance' &&
        (title === 'Helena' || title === 'The Ghost of You')) {
        tags.push('Three Cheers for Sweet Revenge');
    }

    return [...new Set(tags)];
}

const questions = songs.map((song, index) => {
    const title = song[0];
    const artist = song[1];
    const number = 9067 + index;

    return {
        id: `music_${String(number).padStart(4, '0')}`,
        category: 'Music',
        question: `Which artist recorded ${title}${title.endsWith('?') ? '' : '?'}`,
        answers: makeAnswers(artist, index),
        correctAnswer: artist,
        difficulty: index % 3 === 0 ? 'Easy' : 'Medium',
        tags: makeTags(title, artist),
        dailyEligible: true
    };
});

module.exports = questions;
