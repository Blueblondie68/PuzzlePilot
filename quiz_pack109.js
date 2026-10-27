 // quiz_pack109.js
// PuzzlePilot Big Quiz - Pack 109
// Music - 2000s
// 100 questions; IDs music_8967 - music_9066
// Complete decade, artist, location, genre and specialist tags
// Corrects two official song-title spellings and duplicate answer choices

const songs = [
    ["False Pretense", "The Red Jumpsuit Apparatus"],
    ["Your Guardian Angel", "The Red Jumpsuit Apparatus"],
    ["Checkmarks", "The Academy Is..."],

    ["Slow Down", "The Academy Is..."],
    ["We've Got a Big Mess on Our Hands", "The Academy Is..."],
    ["Everything We Had", "The Academy Is..."],
    ["About a Girl", "The Academy Is..."],
    ["Summer Hair = Forever Young", "The Academy Is..."],

    ["Ohio Is for Lovers", "Hawthorne Heights"],
    ["Saying Sorry", "Hawthorne Heights"],
    ["Pens and Needles", "Hawthorne Heights"],
    ["This Is Who We Are", "Hawthorne Heights"],

    ["The Quiet Things That No One Ever Knows", "Brand New"],
    ["Sic Transit Gloria... Glory Fades", "Brand New"],
    ["Jude Law and a Semester Abroad", "Brand New"],
    ["Seventy Times 7", "Brand New"],
    ["Jesus Christ", "Brand New"],

    ["Understanding in a Car Crash", "Thursday"],
    ["Cross Out the Eyes", "Thursday"],
    ["Signals Over the Air", "Thursday"],
    ["War All the Time", "Thursday"],

    ["Seven Years", "Saosin"],
    ["Voices", "Saosin"],
    ["You're Not Alone", "Saosin"],

    ["Smile in Your Sleep", "Silverstein"],
    ["Discovering the Waterfront", "Silverstein"],
    ["My Heroine", "Silverstein"],
    ["If You Could See into My Soul", "Silverstein"],

    ["The Artist in the Ambulance", "Thrice"],
    ["Stare at the Sun", "Thrice"],
    ["All That's Left", "Thrice"],
    ["Image of the Invisible", "Thrice"],

    ["There's a Class for This", "Cute Is What We Aim For"],
    ["Practice Makes Perfect", "Cute Is What We Aim For"],

    ["Dear Maria, Count Me In", "All Time Low"],
    ["Six Feet Under the Stars", "All Time Low"],
    ["Poppin' Champagne", "All Time Low"],
    ["Weightless", "All Time Low"],
    ["Damned If I Do Ya (Damned If I Don't)", "All Time Low"],

    ["Jamie All Over", "Mayday Parade"],
    ["Miserable at Best", "Mayday Parade"],
    ["When I Get Home, You're So Dead", "Mayday Parade"],
    ["Jersey", "Mayday Parade"],

    ["We Believe", "Good Charlotte"],
    ["Keep Your Hands Off My Girl", "Good Charlotte"],

    ["Memory", "Sugarcult"],
    ["Bouncing Off the Walls", "Sugarcult"],
    ["Pretty Girl (The Way)", "Sugarcult"],
    ["She's the Blade", "Sugarcult"],

    ["Everything Is Alright", "Motion City Soundtrack"],
    ["The Future Freaks Me Out", "Motion City Soundtrack"],
    ["My Favorite Accident", "Motion City Soundtrack"],
    ["L.G. FUAD", "Motion City Soundtrack"],
    ["This Is for Real", "Motion City Soundtrack"],

    ["Swing, Swing", "The All-American Rejects"],
    ["Top of the World", "The All-American Rejects"],
    ["Straightjacket Feeling", "The All-American Rejects"],
    ["Another Heart Calls", "The All-American Rejects"],

    ["Vindicated", "Dashboard Confessional"],
    ["Hands Down", "Dashboard Confessional"],
    ["Rapid Hope Loss", "Dashboard Confessional"],
    ["Don't Wait", "Dashboard Confessional"],
    ["Stolen", "Dashboard Confessional"],

    ["Here (In Your Arms)", "Hellogoodbye"],
    ["All of Your Love", "Hellogoodbye"],
    ["Baby, It's Fact", "Hellogoodbye"],

    ["Shake It", "Metro Station"],
    ["Seventeen Forever", "Metro Station"],
    ["Kelsey", "Metro Station"],

    ["The Curse of Curves", "Cute Is What We Aim For"],

    ["Pressure", "Paramore"],
    ["Emergency", "Paramore"],
    ["For a Pessimist, I'm Pretty Optimistic", "Paramore"],

    ["Sweet Talk 101", "Cute Is What We Aim For"],
    ["Newport Living", "Cute Is What We Aim For"],
    ["Moan", "Cute Is What We Aim For"],

    ["Coffee Shop Soundtrack", "All Time Low"],
    ["Jasey Rae", "All Time Low"],
    ["Remembering Sunday", "All Time Low"],
    ["Lost in Stereo", "All Time Low"],

    ["Three Cheers for Five Years", "Mayday Parade"],
    ["Black Cat", "Mayday Parade"],
    ["I'd Hate to Be You When People Find Out What This Song Is About", "Mayday Parade"],

    ["Ready Fuels", "Anberlin"],
    ["Paperthin Hymn", "Anberlin"],
    ["Feel Good Drag", "Anberlin"],
    ["Godspeed", "Anberlin"],
    ["A Whisper & a Clamor", "Anberlin"],

    ["The Space Between", "Valencia"],
    ["Safe to Say", "Valencia"],
    ["Holiday", "Valencia"],

    ["Honestly", "Cartel"],
    ["Say Anything (Else)", "Cartel"],
    ["Lose It", "Cartel"],

    ["The Mixed Tape", "Jack's Mannequin"],
    ["Dark Blue", "Jack's Mannequin"],
    ["The Resolution", "Jack's Mannequin"],
    ["Bruised", "Jack's Mannequin"],
    ["Holiday from Real", "Jack's Mannequin"],

    ["The Adventure", "Angels & Airwaves"]
];

// Metadata is added to each question when the pack loads.
// These are the artist's main relevant genres and country; every
// individual song also receives the correct performer and topic tags.
const artistTags = {
    'The Red Jumpsuit Apparatus': ['The Red Jumpsuit Apparatus', 'US music', 'post-hardcore', 'emo', 'alternative rock'],
    'The Academy Is...': ['The Academy Is...', 'US music', 'pop punk', 'emo pop', 'alternative rock'],
    'Hawthorne Heights': ['Hawthorne Heights', 'US music', 'emo', 'post-hardcore', 'screamo'],
    'Brand New': ['Brand New', 'US music', 'emo', 'alternative rock', 'post-hardcore'],
    'Thursday': ['Thursday', 'US music', 'post-hardcore', 'emo', 'alternative rock'],
    'Saosin': ['Saosin', 'US music', 'post-hardcore', 'emo', 'alternative rock'],
    'Silverstein': ['Silverstein', 'Canadian music', 'post-hardcore', 'emo', 'screamo'],
    'Thrice': ['Thrice', 'US music', 'post-hardcore', 'alternative rock', 'punk rock'],
    'Cute Is What We Aim For': ['Cute Is What We Aim For', 'US music', 'pop punk', 'emo pop', 'power pop'],
    'All Time Low': ['All Time Low', 'US music', 'pop punk', 'emo pop', 'alternative rock'],
    'Mayday Parade': ['Mayday Parade', 'US music', 'pop punk', 'emo pop', 'alternative rock'],
    'Good Charlotte': ['Good Charlotte', 'US music', 'pop punk', 'alternative rock', 'rock bands'],
    'Sugarcult': ['Sugarcult', 'US music', 'pop punk', 'power pop', 'alternative rock'],
    'Motion City Soundtrack': ['Motion City Soundtrack', 'US music', 'pop punk', 'emo pop', 'alternative rock'],
    'The All-American Rejects': ['The All-American Rejects', 'US music', 'pop rock', 'power pop', 'alternative rock'],
    'Dashboard Confessional': ['Dashboard Confessional', 'US music', 'emo', 'acoustic rock', 'alternative rock'],
    'Hellogoodbye': ['Hellogoodbye', 'US music', 'electropop', 'emo pop', 'indie pop'],
    'Metro Station': ['Metro Station', 'US music', 'electropop', 'pop rock', 'dance-rock'],
    'Paramore': ['Paramore', 'US music', 'pop punk', 'alternative rock', 'emo pop'],
    'Anberlin': ['Anberlin', 'US music', 'alternative rock', 'emo pop', 'rock bands'],
    'Valencia': ['Valencia', 'US music', 'pop punk', 'emo pop', 'rock bands'],
    'Cartel': ['Cartel', 'US music', 'pop punk', 'power pop', 'alternative rock'],
    "Jack's Mannequin": ["Jack's Mannequin", 'US music', 'piano rock', 'alternative rock', 'emo pop'],
    'Angels & Airwaves': ['Angels & Airwaves', 'US music', 'space rock', 'alternative rock', 'pop punk']
};

const artists = [
    ...new Set(songs.map(song => song[1]))
];

function makeAnswers(correctAnswer, index) {
    const otherArtists = artists.filter(
        artist => artist !== correctAnswer
    );

    // The original pack had 24 distinct artists, leaving 23 alternatives.
    // Its fourth option used index + 23, which selected the SAME artist
    // as index for every question. Keep the first three answer positions
    // and change only that duplicate fourth selection to index + 17.
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

    // A song may share its title with its band's album; this does not
    // make the song question invalid. Tag those verified title tracks.
    if ((artist === 'Thursday' && title === 'War All the Time') ||
        (artist === 'Silverstein' && title === 'Discovering the Waterfront') ||
        (artist === 'Thrice' && title === 'The Artist in the Ambulance')) {
        tags.push('title tracks', 'album title tracks');
    }

    // Dashboard Confessional recorded Vindicated for the Spider-Man 2
    // soundtrack in 2004.
    if (artist === 'Dashboard Confessional' && title === 'Vindicated') {
        tags.push('film soundtracks', 'Spider-Man 2', 'superhero films');
    }

    // Feel Good Drag appeared as an Anberlin recording in 2005 and
    // was re-recorded for New Surrender in 2008.
    if (artist === 'Anberlin' && title === 'Feel Good Drag') {
        tags.push('re-recordings', 'New Surrender');
    }

    if (artist === 'Angels & Airwaves' && title === 'The Adventure') {
        tags.push('debut singles', 'Tom DeLonge');
    }

    if (artist === 'Motion City Soundtrack' && title === 'My Favorite Accident') {
        tags.push('I Am the Movie');
    }

    if (artist === 'Anberlin' && title === 'A Whisper & a Clamor') {
        tags.push('Cities album');
    }

    return [...new Set(tags)];
}

const questions = songs.map((song, index) => {
    const title = song[0];
    const artist = song[1];
    const number = 8967 + index;

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
