 // quiz_pack114.js
// PuzzlePilot Big Quiz - Pack 114
// Music - 2000s
// 100 questions; IDs music_9467 - music_9566
// Full decade, artist, region, genre and specialist tags
// Two incorrect or unverifiable song attributions replaced

const songs = [
    ["Outtathaway", "The Vines"],
    ["Ride", "The Vines"],
    ["Don't Listen to the Radio", "The Vines"],

    ["Get Away", "The Music"],
    ["The People", "The Music"],
    ["Take the Long Road and Walk It", "The Music"],
    ["Welcome to the North", "The Music"],

    ["Young Love", "Mystery Jets"],

    ["Quicksand", "La Roux"],

    ["Daniel", "Bat for Lashes"],
    ["What's a Girl to Do?", "Bat for Lashes"],
    ["Pearl's Dream", "Bat for Lashes"],

    ["Rabbit Heart (Raise It Up)", "Florence + the Machine"],
    ["Drumming Song", "Florence + the Machine"],
    ["You've Got the Love", "Florence + the Machine"],

    ["Highly Evolved", "The Vines"],
    ["Homesick", "The Vines"],
    ["Winning Days", "The Vines"],
    ["Animal Machine", "The Vines"],
    ["Gross Out", "The Vines"],

    ["Freedom Fighters", "The Music"],
    ["Bleed from Within", "The Music"],
    ["Breakin'", "The Music"],
    ["Strength in Numbers", "The Music"],

    ["Tigerlily", "La Roux"],
    ["I'm Not Your Toy", "La Roux"],
    ["As If by Magic", "La Roux"],

    ["Prescilla", "Bat for Lashes"],
    ["Trophy", "Bat for Lashes"],
    ["Sleep Alone", "Bat for Lashes"],

    ["Kiss with a Fist", "Florence + the Machine"],
    ["Hurricane Drunk", "Florence + the Machine"],
    ["Howl", "Florence + the Machine"],
    ["Cosmic Love", "Florence + the Machine"],

    // The original track could not be verified in The Rifles' discography.
    // This album-history question retains its original question number.
    {
        artist: "The Rifles",
        question: "What was the title of The Rifles' debut studio album?",
        answers: ["No Love Lost", "Great Escape", "Freedom Run", "None the Wiser"],
        correctAnswer: "No Love Lost",
        tags: ["2000s", "2006 albums", "debut albums", "The Rifles",
            "UK music", "English music", "indie rock", "garage rock revival",
            "album titles", "music history", "British indie"]
    },
    ["My Circuitboard City", "The Wombats"],

    ["Shut Your Eyes", "Snow Patrol"],
    ["Set the Fire to the Third Bar", "Snow Patrol"],
    ["Take Back the City", "Snow Patrol"],
    ["Crack the Shutters", "Snow Patrol"],
    ["If There's a Rocket Tie Me to It", "Snow Patrol"],

    ["Geronimo", "The Automatic"],

    ["Lasso", "Phoenix"],
    ["It Don't Move Me", "Peter Bjorn and John"],

    ["Comfort in Sound", "Feeder"],
    ["Save Us", "Feeder"],

    ["Maybe Tomorrow", "Stereophonics"],
    ["Superman", "Stereophonics"],
    ["Devil", "Stereophonics"],
    ["It Means Nothing", "Stereophonics"],
    ["You're My Star", "Stereophonics"],

    ["Nothing in My Way", "Keane"],
    ["A Bad Dream", "Keane"],
    ["Crystal Ball", "Keane"],
    ["Spiralling", "Keane"],
    ["The Lovers Are Losing", "Keane"],
    ["Perfect Symmetry", "Keane"],
    ["Bedshaped", "Keane"],

    ["Bill McCai", "The Coral"],
    ["Jacqueline", "The Coral"],

    ["Painkiller", "Freestylers"],
    ["Push Up", "Freestylers"],
    ["In Love with You", "Freestylers"],

    ["We Come 1", "Faithless"],
    ["Tarantula", "Faithless"],
    ["Mass Destruction", "Faithless"],
    ["I Want More", "Faithless"],
    ["Bombs", "Faithless"],

    ["Starry Eyed Surprise", "Paul Oakenfold"],
    ["Ready Steady Go", "Paul Oakenfold"],
    ["Southern Sun", "Paul Oakenfold"],

    ["Days Go By", "Dirty Vegas"],
    ["Ghosts", "Dirty Vegas"],

    ["Turn on the Music", "Roger Sanchez"],

    ["At Night", "Shakedown"],
    ["Love Game", "Shakedown"],

    ["Lazy", "X-Press 2"],
    ["Smoke Machine", "X-Press 2"],

    ["The Creeps", "Camille Jones"],

    ["I Found U", "Axwell"],
    ["Watch the Sunrise", "Axwell"],

    ["Destination Calabria", "Alex Gaudino"],
    ["Watch Out", "Alex Gaudino"],

    ["Can't Get Over", "September"],

    ["Miracle", "Cascada"],
    ["What Hurts the Most", "Cascada"],

    ["The Boys of Summer", "DJ Sammy"],
    ["Sunlight", "DJ Sammy"],

    ["Pretty Green Eyes", "Ultrabeat"],
    ["Feelin' Fine", "Ultrabeat"],
    ["Elysium (I Go Crazy)", "Ultrabeat"],

    ["Something", "Lasgo"],
    ["Alone", "Lasgo"],
    ["Pray", "Lasgo"],

    ["Forever", "Dee Dee"],

    ["The Logical Song", "Scooter"],
    ["Nessaja", "Scooter"],
    ["Weekend!", "Scooter"],

    ["Satisfaction", "Benny Benassi Presents The Biz"],

    // Illusion was recorded by Benassi Bros. featuring Sandy, not this act.
    // Replace it with a verified album question, preserving the original ID.
    {
        artist: "Benny Benassi Presents The Biz",
        question: "Which 2003 album was released by Benny Benassi Presents The Biz?",
        answers: ["Hypnotica", "Pumphonia", "Electroman", "Rock 'n' Rave"],
        correctAnswer: "Hypnotica",
        tags: ["2000s", "2003 albums", "album titles", "Hypnotica",
            "Benny Benassi", "The Biz", "Italian music", "house music",
            "electro house", "electronic dance music", "music producers"]
    }
];

// Shared metadata is expanded into EVERY corresponding song question.
// The artists remain in original order, including the two special entries.
const artistTags = {
    'The Vines': ['The Vines', 'Australian music', 'garage rock revival', 'alternative rock', 'indie rock'],
    'The Music': ['The Music', 'English music', 'UK music', 'alternative rock', 'indie rock'],
    'Mystery Jets': ['Mystery Jets', 'English music', 'UK music', 'indie rock', 'indie pop'],
    'La Roux': ['La Roux', 'English music', 'UK music', 'synth-pop', 'electropop'],
    'Bat for Lashes': ['Bat for Lashes', 'English music', 'UK music', 'art pop', 'dream pop'],
    'Florence + the Machine': ['Florence + the Machine', 'English music', 'UK music', 'indie pop', 'art pop'],
    'The Rifles': ['The Rifles', 'English music', 'UK music', 'indie rock', 'garage rock revival'],
    'The Wombats': ['The Wombats', 'English music', 'UK music', 'indie rock', 'indie pop'],
    'Snow Patrol': ['Snow Patrol', 'UK music', 'Scottish music', 'indie rock', 'alternative rock'],
    'The Automatic': ['The Automatic', 'Welsh music', 'UK music', 'indie rock', 'alternative rock'],
    'Phoenix': ['Phoenix', 'French music', 'indie pop', 'indie rock', 'alternative rock'],
    'Peter Bjorn and John': ['Peter Bjorn and John', 'Swedish music', 'indie pop', 'indie rock', 'alternative rock'],
    'Feeder': ['Feeder', 'Welsh music', 'UK music', 'alternative rock', 'post-Britpop'],
    'Stereophonics': ['Stereophonics', 'Welsh music', 'UK music', 'alternative rock', 'post-Britpop'],
    'Keane': ['Keane', 'English music', 'UK music', 'piano rock', 'alternative rock'],
    'The Coral': ['The Coral', 'English music', 'UK music', 'indie rock', 'psychedelic rock'],
    'Freestylers': ['Freestylers', 'UK music', 'breakbeat', 'electronic dance music', 'big beat'],
    'Faithless': ['Faithless', 'UK music', 'house music', 'trance music', 'electronic dance music'],
    'Paul Oakenfold': ['Paul Oakenfold', 'English music', 'UK music', 'trance music', 'electronic dance music'],
    'Dirty Vegas': ['Dirty Vegas', 'English music', 'UK music', 'house music', 'electronic dance music'],
    'Roger Sanchez': ['Roger Sanchez', 'US music', 'house music', 'dance music', 'music producers'],
    'Shakedown': ['Shakedown', 'European music', 'house music', 'dance music', 'electronic dance music'],
    'X-Press 2': ['X-Press 2', 'UK music', 'house music', 'dance music', 'electronic dance music'],
    'Camille Jones': ['Camille Jones', 'Danish music', 'house music', 'dance music', 'singer-songwriters'],
    'Axwell': ['Axwell', 'Swedish music', 'house music', 'progressive house', 'music producers'],
    'Alex Gaudino': ['Alex Gaudino', 'Italian music', 'house music', 'electro house', 'music producers'],
    'September': ['September', 'Swedish music', 'dance-pop', 'Eurodance', 'electropop'],
    'Cascada': ['Cascada', 'German music', 'Eurodance', 'dance-pop', 'hands up'],
    'DJ Sammy': ['DJ Sammy', 'Spanish music', 'trance music', 'Eurodance', 'dance music'],
    'Ultrabeat': ['Ultrabeat', 'English music', 'UK music', 'happy hardcore', 'hands up'],
    'Lasgo': ['Lasgo', 'Belgian music', 'Eurodance', 'vocal trance', 'dance music'],
    'Dee Dee': ['Dee Dee', 'Belgian music', 'vocal trance', 'Eurodance', 'dance music'],
    'Scooter': ['Scooter', 'German music', 'happy hardcore', 'hard dance', 'techno'],
    'Benny Benassi Presents The Biz': ['Benny Benassi Presents The Biz', 'Italian music', 'electro house', 'house music', 'dance music']
};

function makeTags(title, artist) {
    const tags = [
        '2000s', 'songs', 'artist identification', 'recordings',
        ...artistTags[artist]
    ];

    if (artist === 'Florence + the Machine') {
        tags.push('Lungs album', 'Florence Welch');
        if (title === "You've Got the Love") {
            tags.push('cover versions', 'Candi Staton', 'The Source', '1980s originals');
        }
    }
    if (artist === 'Bat for Lashes') {
        tags.push('Natasha Khan');
        if (['Daniel', "Pearl's Dream", 'Sleep Alone'].includes(title)) {
            tags.push('Two Suns album');
        } else {
            tags.push('Fur and Gold album');
        }
    }
    if (artist === 'La Roux') {
        tags.push('La Roux debut album', 'Elly Jackson');
    }
    if (artist === 'Mystery Jets' && title === 'Young Love') {
        tags.push('Laura Marling', 'guest vocalists', 'collaborations');
    }
    if (artist === 'Snow Patrol' && title === 'Set the Fire to the Third Bar') {
        tags.push('Martha Wainwright', 'duets', 'guest vocalists');
    }
    if (artist === 'Feeder' && title === 'Comfort in Sound') {
        tags.push('title tracks', 'Comfort in Sound album');
    }
    if (artist === 'Keane') {
        if (title === 'Bedshaped') tags.push('Hopes and Fears album');
        else if (['Nothing in My Way', 'A Bad Dream', 'Crystal Ball'].includes(title)) {
            tags.push('Under the Iron Sea album');
        } else tags.push('Perfect Symmetry album');
    }
    if (artist === 'Freestylers' && title === 'Painkiller') {
        tags.push('Pendulum', 'SirReal', 'drum and bass', 'collaborations');
    }
    if (artist === 'Freestylers' && title === 'In Love with You') {
        tags.push('Adventures in Freestyle album');
    }
    if (artist === 'Faithless') tags.push('Maxi Jazz', 'Sister Bliss');
    if (artist === 'Paul Oakenfold' && title === 'Starry Eyed Surprise') {
        tags.push('Shifty Shellshock', 'guest vocalists', 'collaborations');
    }
    if (artist === 'Paul Oakenfold' && title === 'Southern Sun') {
        tags.push('Carla Werner', 'guest vocalists', 'collaborations');
    }
    if (artist === 'X-Press 2' && title === 'Lazy') {
        tags.push('David Byrne', 'guest vocalists', 'collaborations');
    }
    if (artist === 'Camille Jones' && title === 'The Creeps') {
        tags.push('Fedde Le Grand', 'remixes', '2000s dance hits');
    }
    if (artist === 'Alex Gaudino' && title === 'Destination Calabria') {
        tags.push('Crystal Waters', 'Rune RK', 'Calabria', 'samples', 'collaborations');
    }
    if (artist === 'Cascada' && title === 'What Hurts the Most') {
        tags.push('cover versions', 'Mark Wills', 'Rascal Flatts', 'country songs');
    }
    if (artist === 'DJ Sammy' && title === 'The Boys of Summer') {
        tags.push('cover versions', 'Don Henley', '1980s originals');
    }
    if (artist === 'Ultrabeat' && title === 'Pretty Green Eyes') {
        tags.push('cover versions', 'Force & Styles', '1990s originals');
    }
    if (artist === 'Ultrabeat' && title === 'Elysium (I Go Crazy)') {
        tags.push('Scott Brown', 'collaborations', 'happy hardcore');
    }
    if (artist === 'Scooter') {
        if (title === 'The Logical Song') {
            tags.push('cover versions', 'Supertramp', '1970s originals');
        }
        if (title === 'Weekend!') {
            tags.push('cover versions', 'Earth and Fire', '1970s originals');
        }
    }
    if (artist === 'Benny Benassi Presents The Biz' && title === 'Satisfaction') {
        tags.push('Hypnotica album', 'Benny Benassi', 'electro house classics');
    }

    return [...new Set(tags)];
}

// Keep the original artist order even when a song is replaced with a
// different type of question. Existing song distractors remain unchanged.
const artists = [
    ...new Set(songs.map(song => Array.isArray(song) ? song[1] : song.artist))
];

function makeAnswers(correctAnswer, index) {
    const otherArtists = artists.filter(artist => artist !== correctAnswer);
    const answers = [
        correctAnswer,
        otherArtists[index % otherArtists.length],
        otherArtists[(index + 11) % otherArtists.length],
        otherArtists[(index + 23) % otherArtists.length]
    ];
    const shift = index % answers.length;
    return [...answers.slice(shift), ...answers.slice(0, shift)];
}

const questions = songs.map((song, index) => {
    const special = !Array.isArray(song);
    const title = special ? null : song[0];
    const artist = special ? null : song[1];
    const number = 9467 + index;

    return {
        id: `music_${String(number).padStart(4, '0')}`,
        category: 'Music',
        question: special
            ? song.question
            : `Which artist recorded ${title}?`,
        answers: special ? song.answers : makeAnswers(artist, index),
        correctAnswer: special ? song.correctAnswer : artist,
        difficulty: index % 3 === 0 ? 'Easy' : 'Medium',
        tags: special ? song.tags : makeTags(title, artist),
        dailyEligible: true
    };
});

module.exports = questions;
