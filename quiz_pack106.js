 // quiz_pack106.js
// PuzzlePilot Big Quiz - Pack 106
// Music - 2000s
// 100 questions; IDs music_8667 - music_8766
// Full performer, decade, genre, talent show and cover-version tags

const songs = [
    ["Sweet Dreams My LA Ex", "Rachel Stevens"],
    ["Funky Dory", "Rachel Stevens"],
    ["Some Girls", "Rachel Stevens"],
    ["More More More", "Rachel Stevens"],
    ["Negotiate with Love", "Rachel Stevens"],
    ["So Good", "Rachel Stevens"],
    ["I Said Never Again (But Here We Are)", "Rachel Stevens"],
    ["Nothing Good About This Goodbye", "Rachel Stevens"],

    ["I'll Be There", "Emma Bunton"],
    ["Crickets Sing for Anamaria", "Emma Bunton"],
    ["All I Need to Know", "Emma Bunton"],
    ["Downtown", "Emma Bunton"],
    ["Take My Breath Away", "Emma Bunton"],
    ["We're Not Gonna Sleep Tonight", "Emma Bunton"],

    ["Out of Your Mind", "True Steppers feat. Dane Bowers and Victoria Beckham"],
    ["A Mind of Its Own", "Victoria Beckham"],

    ["James Dean (I Wanna Know)", "Daniel Bedingfield"],
    ["I Can't Read You", "Daniel Bedingfield"],
    ["Friday", "Daniel Bedingfield"],

    ["Wild Horses", "Natasha Bedingfield"],
    ["Say It Again", "Natasha Bedingfield"],
    ["Angel", "Natasha Bedingfield"],

    ["DJ", "Jamelia"],
    ["Stop", "Jamelia"],
    ["Something About You", "Jamelia"],

    ["Shoulda Woulda Coulda", "Beverley Knight"],
    ["Come as You Are", "Beverley Knight"],
    ["Not Too Late for Love", "Beverley Knight"],
    ["Keep This Fire Burning", "Beverley Knight"],
    ["Piece of My Heart", "Beverley Knight"],
    ["No Man's Land", "Beverley Knight"],
    ["After You", "Beverley Knight"],

    ["Dy-Na-Mi-Tee", "Ms. Dynamite"],
    ["It Takes More", "Ms. Dynamite"],
    ["Put Him Out", "Ms. Dynamite"],
    ["Brother", "Ms. Dynamite"],
    ["Judgement Day", "Ms. Dynamite"],

    ["Just a Little Bit", "Mutya Buena"],
    ["Real Girl", "Mutya Buena"],
    ["B Boy Baby", "Mutya Buena feat. Amy Winehouse"],

    ["Never Be the Same Again", "Melanie C feat. Lisa Left Eye Lopes"],
    ["I Turn to You", "Melanie C"],
    ["If That Were Me", "Melanie C"],
    ["Here It Comes Again", "Melanie C"],
    ["On the Horizon", "Melanie C"],
    ["Melt", "Melanie C"],
    ["Next Best Superstar", "Melanie C"],
    ["Better Alone", "Melanie C"],
    ["The Moment You Believe", "Melanie C"],

    ["Maybe That's What It Takes", "Alex Parks"],
    ["Cry", "Alex Parks"],
    ["Looking for Water", "Alex Parks"],
    ["Honesty", "Alex Parks"],

    ["Suspicious Minds", "Gareth Gates"],
    ["What My Heart Wants to Say", "Gareth Gates"],
    ["Sunshine", "Gareth Gates"],
    ["Say It Isn't So", "Gareth Gates"],
    ["Spirit in the Sky", "Gareth Gates and The Kumars"],

    ["Friday's Child", "Will Young"],
    ["Switch It On", "Will Young"],
    ["All Time Love", "Will Young"],
    ["Who Am I", "Will Young"],
    ["Changes", "Will Young"],
    ["Grace", "Will Young"],
    ["Evergreen", "Will Young"],
    ["Light My Fire", "Will Young"],
    ["The Long and Winding Road", "Will Young and Gareth Gates"],

    ["See the Day", "Girls Aloud"],
    ["Whole Lotta History", "Girls Aloud"],
    ["Sexy No No No", "Girls Aloud"],

    ["All This Time", "Michelle McManus"],
    ["The Meaning of Love", "Michelle McManus"],

    ["No Promises", "Shayne Ward"],
    ["Stand by Me", "Shayne Ward"],
    ["If That's OK with You", "Shayne Ward"],
    ["No U Hang Up", "Shayne Ward"],
    ["Breathless", "Shayne Ward"],

    ["Footprints in the Sand", "Leona Lewis"],
    ["Run", "Leona Lewis"],
    ["Happy", "Leona Lewis"],

    ["Bad Boys", "Alexandra Burke feat. Flo Rida"],

    ["The Climb", "Joe McElderry"],

    ["You Give Me Something", "James Morrison"],
    ["Wonderful World", "James Morrison"],
    ["The Pieces Don't Fit Anymore", "James Morrison"],
    ["Undiscovered", "James Morrison"],
    ["You Make It Real", "James Morrison"],
    ["Broken Strings", "James Morrison feat. Nelly Furtado"],
    ["Please Don't Stop the Rain", "James Morrison"],

    ["Rewind", "Paolo Nutini"],

    ["I Need Something", "Newton Faulkner"],
    ["All I Got", "Newton Faulkner"],
    ["People Should Smile More", "Newton Faulkner"],
    ["Ageing Superhero", "Newton Faulkner"],

    ["Love It When You Call", "The Feeling"],
    ["Rosé", "The Feeling"],
    ["I Thought It Was Over", "The Feeling"],
    ["Without You", "The Feeling"],
    ["Turn It Up", "The Feeling"],
    ["Join with Us", "The Feeling"]
];

// Artist metadata is expanded into each question when the pack loads.
// This allows specialist quizzes without duplicating the questions.
const artistTags = {
    'Rachel Stevens': ['Rachel Stevens', 'UK music', 'pop', 'dance-pop', 'solo artists', 'S Club 7 solo careers'],
    'Emma Bunton': ['Emma Bunton', 'UK music', 'pop', 'pop solo artists', 'Spice Girls solo careers'],
    'True Steppers feat. Dane Bowers and Victoria Beckham': ['True Steppers', 'Dane Bowers', 'Victoria Beckham', 'UK music', 'UK garage', 'dance music', 'collaborations', 'Spice Girls solo careers'],
    'Victoria Beckham': ['Victoria Beckham', 'UK music', 'pop', 'Spice Girls solo careers', 'solo artists'],
    'Daniel Bedingfield': ['Daniel Bedingfield', 'UK music', 'pop', 'UK garage', 'singer-songwriters'],
    'Natasha Bedingfield': ['Natasha Bedingfield', 'UK music', 'pop', 'pop rock', 'singer-songwriters'],
    'Jamelia': ['Jamelia', 'UK music', 'R&B', 'pop', 'female vocalists'],
    'Beverley Knight': ['Beverley Knight', 'UK music', 'soul', 'R&B', 'singer-songwriters'],
    'Ms. Dynamite': ['Ms. Dynamite', 'UK music', 'UK garage', 'hip hop', 'R&B', 'female rappers'],
    'Mutya Buena': ['Mutya Buena', 'UK music', 'pop', 'R&B', 'Sugababes solo careers'],
    'Mutya Buena feat. Amy Winehouse': ['Mutya Buena', 'Amy Winehouse', 'UK music', 'pop', 'R&B', 'collaborations'],
    'Melanie C feat. Lisa Left Eye Lopes': ['Melanie C', 'Lisa Lopes', 'UK music', 'US music', 'pop', 'R&B', 'collaborations', 'Spice Girls solo careers'],
    'Melanie C': ['Melanie C', 'UK music', 'pop', 'pop rock', 'singer-songwriters', 'Spice Girls solo careers'],
    'Alex Parks': ['Alex Parks', 'UK music', 'pop', 'singer-songwriters', 'Fame Academy', 'talent show winners'],
    'Gareth Gates': ['Gareth Gates', 'UK music', 'pop', 'Pop Idol', 'talent show contestants'],
    'Gareth Gates and The Kumars': ['Gareth Gates', 'The Kumars', 'UK music', 'pop', 'Comic Relief', 'charity singles', 'collaborations'],
    'Will Young': ['Will Young', 'UK music', 'pop', 'soul pop', 'Pop Idol', 'talent show winners'],
    'Will Young and Gareth Gates': ['Will Young', 'Gareth Gates', 'UK music', 'pop', 'Pop Idol', 'duets', 'collaborations'],
    'Girls Aloud': ['Girls Aloud', 'UK music', 'pop', 'girl groups', 'Popstars: The Rivals'],
    'Michelle McManus': ['Michelle McManus', 'Scottish music', 'UK music', 'pop', 'Pop Idol', 'talent show winners'],
    'Shayne Ward': ['Shayne Ward', 'UK music', 'pop', 'R&B', 'The X Factor', 'talent show winners'],
    'Leona Lewis': ['Leona Lewis', 'UK music', 'pop', 'R&B', 'soul', 'The X Factor', 'talent show winners'],
    'Alexandra Burke feat. Flo Rida': ['Alexandra Burke', 'Flo Rida', 'UK music', 'US music', 'pop', 'dance-pop', 'R&B', 'The X Factor', 'collaborations'],
    'Joe McElderry': ['Joe McElderry', 'UK music', 'pop', 'The X Factor', 'talent show winners'],
    'James Morrison': ['James Morrison', 'UK music', 'pop rock', 'soul', 'singer-songwriters'],
    'James Morrison feat. Nelly Furtado': ['James Morrison', 'Nelly Furtado', 'UK music', 'Canadian music', 'pop rock', 'soul', 'duets', 'collaborations'],
    'Paolo Nutini': ['Paolo Nutini', 'Scottish music', 'UK music', 'soul', 'pop rock', 'singer-songwriters'],
    'Newton Faulkner': ['Newton Faulkner', 'UK music', 'acoustic music', 'folk rock', 'singer-songwriters'],
    'The Feeling': ['The Feeling', 'UK music', 'pop rock', 'soft rock', 'power pop', 'bands']
};

// Songs whose recordings in this pack are cover versions.
// Original artists are included as tags for specialist cover quizzes.
const coverOriginals = {
    'Rachel Stevens|More More More': 'Andrea True Connection',
    'Emma Bunton|Crickets Sing for Anamaria': 'Marcos Valle',
    'Emma Bunton|Downtown': 'Petula Clark',
    'Jamelia|Stop': 'Sam Brown',
    'Beverley Knight|Keep This Fire Burning': 'Robyn',
    'Beverley Knight|Piece of My Heart': 'Erma Franklin',
    'Gareth Gates|Suspicious Minds': 'Mark James',
    'Gareth Gates and The Kumars|Spirit in the Sky': 'Norman Greenbaum',
    'Will Young|Evergreen': 'Westlife',
    'Will Young|Light My Fire': 'The Doors',
    'Will Young and Gareth Gates|The Long and Winding Road': 'The Beatles',
    'Girls Aloud|See the Day': 'Dee C. Lee',
    'Leona Lewis|Run': 'Snow Patrol',
    'Joe McElderry|The Climb': 'Miley Cyrus'
};

// Preserve the original answer order and distractors.
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

function makeTags(title, artist) {
    const tags = [
        '2000s',
        'songs',
        'artist identification',
        'recordings',
        ...artistTags[artist]
    ];

    const originalArtist = coverOriginals[`${artist}|${title}`];
    if (originalArtist) {
        tags.push('cover versions', 'original artists', originalArtist);
    }

    // This was the 2004 Bridget Jones: The Edge of Reason soundtrack cover.
    if (artist === 'Jamelia' && title === 'Stop') {
        tags.push('film soundtracks', 'Bridget Jones: The Edge of Reason');
    }

    // The charity single was released for Comic Relief in 2003.
    if (artist === 'Gareth Gates and The Kumars' && title === 'Spirit in the Sky') {
        tags.push('2003 charity singles');
    }

    // These two songs were associated with their singers' talent show wins.
    if (artist === 'Will Young' && title === 'Evergreen') {
        tags.push('debut singles', 'Pop Idol winners singles');
    }
    if (artist === 'Joe McElderry' && title === 'The Climb') {
        tags.push('The X Factor winners singles');
    }

    // B Boy Baby is a collaboration rather than an Amy Winehouse solo recording.
    if (artist === 'Mutya Buena feat. Amy Winehouse' && title === 'B Boy Baby') {
        tags.push('featured artists');
    }

    return [...new Set(tags)];
}

const questions = songs.map((song, index) => {
    const title = song[0];
    const artist = song[1];
    const number = 8667 + index;

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
