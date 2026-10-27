 // quiz_pack105.js
// PuzzlePilot Big Quiz - Pack 105
// Music - mainly 2000s, plus one original 1990s recording
// 100 questions; IDs music_8567 - music_8666
// Expanded decade, performer, genre and specialist quiz tags

const songs = [
    ["Valley of the Dolls", "Mylo"],
    ["Guilty of Love", "Mylo"],
    ["Superstylin'", "Groove Armada"],
    ["Purple Haze", "Groove Armada"],
    ["Easy", "Groove Armada"],
    ["Song 4 Mutya (Out of Control)", "Groove Armada"],

    ["At the River", "Groove Armada"],
    ["My Friend", "Groove Armada"],
    ["But I Feel Good", "Groove Armada"],
    ["Love Sweet Sound", "Groove Armada"],
    ["Get Down", "Groove Armada"],
    ["Paris", "Groove Armada"],
    ["Think Twice", "Groove Armada"],
    ["Lightsonic", "Groove Armada"],
    ["Drop That Thing", "Groove Armada"],

    // The original "Romeo" entry could not be verified as a recording
    // by Mr Hudson and the Library. This checks band history instead.
    {
        question: 'Which instrument did Joy Joseph play in Mr Hudson and the Library?',
        answers: ['Steelpan', 'Piano', 'Bass guitar', 'Drums'],
        correctAnswer: 'Steelpan',
        tags: ['2000s', 'band members', 'line-up', 'instruments',
            'steelpan', 'Joy Joseph', 'Mr Hudson and the Library',
            'UK music', 'reggae fusion', 'alternative pop']
    },
    ["Too Late, Too Late", "Mr Hudson and the Library"],
    ["Picture of You", "Mr Hudson and the Library"],
    ["On the Street Where You Live", "Mr Hudson and the Library"],
    ["Ask the DJ", "Mr Hudson and the Library"],

    ["White Lies", "Mr Hudson"],
    ["There Will Be Tears", "Mr Hudson"],
    ["Supernova", "Mr Hudson feat. Kanye West"],
    ["Anyone but Him", "Mr Hudson"],
    ["Instant Messenger", "Mr Hudson"],

    ["Number 1", "Tinchy Stryder feat. N-Dubz"],
    ["Never Leave You", "Tinchy Stryder feat. Amelle"],
    ["Take Me Back", "Tinchy Stryder feat. Taio Cruz"],
    ["You're Not Alone", "Tinchy Stryder"],
    ["Stryderman", "Tinchy Stryder"],

    ["I Need You", "N-Dubz"],
    ["Papa Can You Hear Me", "N-Dubz"],
    ["Strong Again", "N-Dubz"],
    ["Wouldn't You", "N-Dubz"],
    ["Playing with Fire", "N-Dubz feat. Mr Hudson"],
    ["Ouch", "N-Dubz"],
    ["Better Not Waste My Time", "N-Dubz"],
    ["Feva Las Vegas", "N-Dubz"],
    ["Defeat You", "N-Dubz"],
    ["Comfortable", "N-Dubz"],

    ["She's Like a Star", "Taio Cruz"],
    ["Come On Girl", "Taio Cruz feat. Luciana"],
    ["I Can Be", "Taio Cruz"],
    ["Moving On", "Taio Cruz"],
    ["No Other One", "Taio Cruz"],
    ["Break Your Heart", "Taio Cruz"],
    ["Driving Me Crazy", "Taio Cruz"],
    ["I'll Never Love Again", "Taio Cruz"],
    ["She's Like a Star Remix", "Taio Cruz feat. Busta Rhymes"],

    ["What's It Gonna Be", "H Two O feat. Platnum"],
    ["Cash in My Pocket", "Wiley feat. Daniel Merriweather"],
    ["Rolex Sweep", "Skepta"],

    ["Pow (Forward)", "Lethal Bizzle"],
    ["Uh Oh (I'm Back)", "Lethal Bizzle"],
    ["Babylon's Burning the Ghetto", "Lethal Bizzle"],
    ["Police on My Back", "Lethal Bizzle"],
    ["Going Out Tonight", "Lethal Bizzle"],

    ["Fix Up, Look Sharp", "Dizzee Rascal"],
    ["Jus' a Rascal", "Dizzee Rascal"],
    ["Stand Up Tall", "Dizzee Rascal"],
    ["Dream", "Dizzee Rascal"],
    ["Sirens", "Dizzee Rascal"],
    ["Holiday", "Dizzee Rascal"],
    ["Bonkers", "Dizzee Rascal and Armand Van Helden"],
    ["Old Skool", "Dizzee Rascal"],
    ["Flex", "Dizzee Rascal"],

    ["Has It Come to This?", "The Streets"],
    ["Let's Push Things Forward", "The Streets"],
    ["The Irony of It All", "The Streets"],
    ["Could Well Be In", "The Streets"],
    ["Everything Is Borrowed", "The Streets"],
    ["Heaven for the Weather", "The Streets"],
    ["The Escapist", "The Streets"],

    ["Got to Have Your Love", "Liberty X"],
    ["Holding on for You", "Liberty X"],
    ["Being Nobody", "Richard X vs Liberty X"],
    ["Jumpin'", "Liberty X"],

    ["Stronger", "Sugababes"],
    ["Too Lost in You", "Sugababes"],
    ["In the Middle", "Sugababes"],

    ["Fly by II", "Blue"],
    ["Sorry Seems to Be the Hardest Word", "Blue feat. Elton John"],
    ["U Make Me Wanna", "Blue"],
    ["Guilty", "Blue"],
    ["Breathe Easy", "Blue"],
    ["Bubblin'", "Blue"],

    ["Life Got Cold", "Girls Aloud"],

    ["The Way to Your Love", "Hear'Say"],
    ["Everybody", "Hear'Say"],
    ["Lovin' Is Easy", "Hear'Say"],

    ["You Are", "Atomic Kitten"],
    ["It's OK", "Atomic Kitten"],
    ["Be with You", "Atomic Kitten"],
    ["If You Come to Me", "Atomic Kitten"],
    ["Ladies Night", "Atomic Kitten"],
    ["Someone Like Me", "Atomic Kitten"],

    ["Overload", "Sugababes"],
    ["Run for Cover", "Sugababes"],
    ["Soul Sound", "Sugababes"],
    ["Shape", "Sugababes"]
];

// These tags are applied to every ordinary song question.
// Shared artist metadata avoids repeating the same tags 99 times.
const artistTags = {
    'Mylo': ['Mylo', 'Scottish music', 'UK music', 'house music', 'electronic music', 'DJs and producers'],
    'Groove Armada': ['Groove Armada', 'UK music', 'electronic music', 'house music', 'big beat'],
    'Mr Hudson and the Library': ['Mr Hudson and the Library', 'UK music', 'reggae fusion', 'alternative pop', 'bands'],
    'Mr Hudson': ['Mr Hudson', 'UK music', 'electropop', 'pop', 'singer-songwriters'],
    'Mr Hudson feat. Kanye West': ['Mr Hudson', 'Kanye West', 'UK music', 'US music', 'pop', 'hip hop', 'collaborations'],
    'Tinchy Stryder feat. N-Dubz': ['Tinchy Stryder', 'N-Dubz', 'UK music', 'grime', 'UK hip hop', 'collaborations'],
    'Tinchy Stryder feat. Amelle': ['Tinchy Stryder', 'Amelle Berrabah', 'UK music', 'grime', 'dance-pop', 'collaborations'],
    'Tinchy Stryder feat. Taio Cruz': ['Tinchy Stryder', 'Taio Cruz', 'UK music', 'grime', 'UK hip hop', 'collaborations'],
    'Tinchy Stryder': ['Tinchy Stryder', 'UK music', 'grime', 'UK hip hop'],
    'N-Dubz': ['N-Dubz', 'UK music', 'UK hip hop', 'R&B', 'grime', 'groups'],
    'N-Dubz feat. Mr Hudson': ['N-Dubz', 'Mr Hudson', 'UK music', 'UK hip hop', 'R&B', 'collaborations'],
    'Taio Cruz': ['Taio Cruz', 'UK music', 'R&B', 'dance-pop', 'pop'],
    'Taio Cruz feat. Luciana': ['Taio Cruz', 'Luciana', 'UK music', 'R&B', 'dance-pop', 'collaborations'],
    'Taio Cruz feat. Busta Rhymes': ['Taio Cruz', 'Busta Rhymes', 'UK music', 'US music', 'R&B', 'hip hop', 'remixes', 'collaborations'],
    'H Two O feat. Platnum': ['H Two O', 'Platnum', 'UK music', 'bassline house', 'UK garage', 'collaborations'],
    'Wiley feat. Daniel Merriweather': ['Wiley', 'Daniel Merriweather', 'UK music', 'Australian music', 'grime', 'UK hip hop', 'collaborations'],
    'Skepta': ['Skepta', 'UK music', 'grime', 'UK hip hop'],
    'Lethal Bizzle': ['Lethal Bizzle', 'UK music', 'grime', 'UK hip hop'],
    'Dizzee Rascal': ['Dizzee Rascal', 'UK music', 'grime', 'UK hip hop'],
    'Dizzee Rascal and Armand Van Helden': ['Dizzee Rascal', 'Armand Van Helden', 'UK music', 'US music', 'dance music', 'house music', 'collaborations'],
    'The Streets': ['The Streets', 'Mike Skinner', 'UK music', 'UK garage', 'alternative hip hop'],
    'Liberty X': ['Liberty X', 'UK music', 'pop', 'R&B', 'pop groups'],
    'Richard X vs Liberty X': ['Richard X', 'Liberty X', 'UK music', 'electropop', 'mashups', 'collaborations'],
    'Sugababes': ['Sugababes', 'UK music', 'pop', 'R&B', 'girl groups'],
    'Blue': ['Blue', 'UK music', 'pop', 'R&B', 'boy bands'],
    'Blue feat. Elton John': ['Blue', 'Elton John', 'UK music', 'pop', 'boy bands', 'duets', 'collaborations'],
    'Girls Aloud': ['Girls Aloud', 'UK music', 'pop', 'girl groups'],
    "Hear'Say": ["Hear'Say", 'UK music', 'pop', 'pop groups', 'Popstars'],
    'Atomic Kitten': ['Atomic Kitten', 'UK music', 'pop', 'girl groups']
};

// Retain the original artist ordering and answer distractors.
const artists = [
    ...new Set(
        songs
            .filter(song => Array.isArray(song))
            .map(song => song[1])
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

function makeTags(title, artist) {
    // At the River was first released in 1997, then reissued in 1999.
    const decade = artist === 'Groove Armada' && title === 'At the River'
        ? '1990s'
        : '2000s';

    const tags = [
        decade,
        'songs',
        'artist identification',
        'recordings',
        ...artistTags[artist]
    ];

    if (artist === 'Groove Armada' && title === 'At the River') {
        tags.push('1997 songs', '1999 reissues');
    }
    if (artist === 'Groove Armada' && title === 'Song 4 Mutya (Out of Control)') {
        tags.push('Mutya Buena', 'collaborations');
    }
    if (artist === 'Mr Hudson and the Library' && title === 'On the Street Where You Live') {
        tags.push('cover versions', 'musical theatre songs', 'My Fair Lady');
    }
    if (artist === 'Blue feat. Elton John' && title === 'Sorry Seems to Be the Hardest Word') {
        tags.push('cover versions', 'Elton John songs');
    }
    if (artist === 'Liberty X' && title === 'Got to Have Your Love') {
        tags.push('cover versions');
    }
    if (artist === 'Dizzee Rascal' && title === 'Holiday') {
        tags.push('dance music');
    }
    if (artist === 'Taio Cruz feat. Busta Rhymes') {
        tags.push('remix recordings');
    }

    return [...new Set(tags)];
}

const questions = songs.map((song, index) => {
    const isSpecialQuestion = !Array.isArray(song);
    const title = isSpecialQuestion ? null : song[0];
    const artist = isSpecialQuestion ? null : song[1];
    const number = 8567 + index;

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
