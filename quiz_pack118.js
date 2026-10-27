 // quiz_pack118.js
// PuzzlePilot Big Quiz - Pack 118
// Music - 2010s, artist and album questions
// 100 questions; IDs music_9867 - music_9966
// Full decade, genre, country, album and specialist tags
// One incorrectly attributed song replaced by an album question

const songs = [
    ['Dancing with a Stranger', 'Sam Smith'],

    ['Let It Go', 'James Bay'],
    ['Best Fake Smile', 'James Bay'],
    ['If You Ever Want to Be in Love', 'James Bay'],

    ['Hold My Hand', 'Jess Glynne'],
    ['Don\'t Be So Hard on Yourself', 'Jess Glynne'],
    ['Take Me Home', 'Jess Glynne'],
    ['All I Am', 'Jess Glynne'],
    ['Thursday', 'Jess Glynne'],

    ['Ghost', 'Ella Henderson'],
    ['Glow', 'Ella Henderson'],
    ['Yours', 'Ella Henderson'],
    ['Mirror Man', 'Ella Henderson'],

    ['Waiting All Night', 'Rudimental'],
    ['Feel the Love', 'Rudimental'],
    ['Free', 'Rudimental'],
    ['Lay It All on Me', 'Rudimental'],
    ['Sun Comes Up', 'Rudimental'],
    ['These Days', 'Rudimental'],

    {
        artist: 'Shura',
        question: "What is the title of Shura's debut studio album?",
        correctAnswer: "Nothing's Real",
        answers: ["Nothing's Real", 'Communion', 'Every Open Eye', 'The Altar'],
        tags: ['2016 albums', "Nothing's Real", 'synth-pop albums']
    },
    ['Touch', 'Shura'],
    ['What\'s It Gonna Be?', 'Shura'],

    ['King', 'Lauren Aquilina'],
    ['Fools', 'Lauren Aquilina'],
    ['Sinners', 'Lauren Aquilina'],

    ['Lost Boy', 'Ruth B'],
    ['Superficial Love', 'Ruth B'],

    ['All About That Bass', 'Meghan Trainor'],
    ['Lips Are Movin', 'Meghan Trainor'],
    ['Dear Future Husband', 'Meghan Trainor'],
    ['No', 'Meghan Trainor'],
    ['Me Too', 'Meghan Trainor'],
    ['Like I\'m Gonna Lose You', 'Meghan Trainor'],

    ['Sorry', 'Justin Bieber'],
    ['Love Yourself', 'Justin Bieber'],
    ['What Do You Mean?', 'Justin Bieber'],
    ['Company', 'Justin Bieber'],
    ['Boyfriend', 'Justin Bieber'],

    ['Stitches', 'Shawn Mendes'],
    ['Treat You Better', 'Shawn Mendes'],
    ['There\'s Nothing Holdin\' Me Back', 'Shawn Mendes'],
    ['In My Blood', 'Shawn Mendes'],
    ['If I Can\'t Have You', 'Shawn Mendes'],

    ['All of Me', 'John Legend'],
    ['Love Me Now', 'John Legend'],

    ['Let Her Go', 'Passenger'],
    ['Holes', 'Passenger'],

    ['7 Years', 'Lukas Graham'],
    ['Love Someone', 'Lukas Graham'],

    ['Cheerleader', 'OMI'],
    ['Shut Up and Dance', 'Walk the Moon'],
    ['Geronimo', 'Sheppard'],
    ['Rude', 'Magic!'],

    ['Somebody That I Used to Know', 'Gotye'],
    ['Eyes Wide Open', 'Gotye'],

    ['Chandelier', 'Sia'],
    ['Elastic Heart', 'Sia'],
    ['Cheap Thrills', 'Sia'],
    ['The Greatest', 'Sia'],
    ['Big Girls Cry', 'Sia'],
    ['Alive', 'Sia'],

    ['Cool for the Summer', 'Demi Lovato'],
    ['Heart Attack', 'Demi Lovato'],
    ['Sorry Not Sorry', 'Demi Lovato'],
    ['Confident', 'Demi Lovato'],
    ['Skyscraper', 'Demi Lovato'],

    ['Wrecking Ball', 'Miley Cyrus'],
    ['We Can\'t Stop', 'Miley Cyrus'],
    ['Malibu', 'Miley Cyrus'],
    ['Adore You', 'Miley Cyrus'],

    ['Problem', 'Ariana Grande'],
    ['Break Free', 'Ariana Grande'],
    ['One Last Time', 'Ariana Grande'],
    ['Into You', 'Ariana Grande'],
    ['Side to Side', 'Ariana Grande'],
    ['No Tears Left to Cry', 'Ariana Grande'],
    ['Thank U, Next', 'Ariana Grande'],
    ['7 Rings', 'Ariana Grande'],
    ['Break Up with Your Girlfriend, I\'m Bored', 'Ariana Grande'],

    ['Starships', 'Nicki Minaj'],
    ['Super Bass', 'Nicki Minaj'],
    ['Anaconda', 'Nicki Minaj'],
    ['Pound the Alarm', 'Nicki Minaj'],

    ['Fancy', 'Iggy Azalea'],
    ['Black Widow', 'Iggy Azalea'],

    ['Prayer in C', 'Lilly Wood and the Prick'],
    ['Waves', 'Mr Probz'],

    ['Pass Out', 'Tinie Tempah'],
    ['Frisky', 'Tinie Tempah'],
    ['Written in the Stars', 'Tinie Tempah'],

    ['Miami 2 Ibiza', 'Swedish House Mafia'],
    ['Don\'t You Worry Child', 'Swedish House Mafia'],
    ['Save the World', 'Swedish House Mafia'],

    ['Clarity', 'Zedd'],
    ['Stay the Night', 'Zedd'],
    ['I Want You to Know', 'Zedd'],
    ['Stay', 'Zedd'],

    ['Lean On', 'Major Lazer'],
    ['Cold Water', 'Major Lazer'],
    ['Light It Up', 'Major Lazer']
];

// Shared artist and country/genre tags are added to every question.
const artistTags = {
    'Sam Smith': ['Sam Smith', 'English music', 'UK music', 'pop', 'soul', 'singer-songwriters'],
    'James Bay': ['James Bay', 'English music', 'UK music', 'singer-songwriters', 'folk rock', 'pop rock'],
    'Jess Glynne': ['Jess Glynne', 'English music', 'UK music', 'dance-pop', 'pop', 'soul'],
    'Ella Henderson': ['Ella Henderson', 'English music', 'UK music', 'pop', 'soul', 'singer-songwriters'],
    'Rudimental': ['Rudimental', 'English music', 'UK music', 'drum and bass', 'electronic dance music', 'music producers'],
    'Shura': ['Shura', 'English music', 'UK music', 'synth-pop', 'electropop', 'singer-songwriters'],
    'Lauren Aquilina': ['Lauren Aquilina', 'English music', 'UK music', 'singer-songwriters', 'indie pop', 'pop'],
    'Ruth B': ['Ruth B', 'Canadian music', 'pop', 'singer-songwriters', 'piano ballads'],
    'Meghan Trainor': ['Meghan Trainor', 'US music', 'pop', 'doo-wop influences', 'R&B', 'singer-songwriters'],
    'Justin Bieber': ['Justin Bieber', 'Canadian music', 'pop', 'dance-pop', 'R&B'],
    'Shawn Mendes': ['Shawn Mendes', 'Canadian music', 'pop', 'pop rock', 'singer-songwriters'],
    'John Legend': ['John Legend', 'US music', 'soul', 'R&B', 'piano ballads', 'singer-songwriters'],
    'Passenger': ['Passenger', 'English music', 'UK music', 'folk-pop', 'singer-songwriters', 'acoustic music'],
    'Lukas Graham': ['Lukas Graham', 'Danish music', 'pop', 'soul-pop', 'pop bands'],
    'OMI': ['OMI', 'Jamaican music', 'reggae fusion', 'pop', 'dancehall influences'],
    'Walk the Moon': ['Walk the Moon', 'US music', 'indie pop', 'pop rock', 'dance-rock'],
    'Sheppard': ['Sheppard', 'Australian music', 'indie pop', 'pop rock', 'pop bands'],
    'Magic!': ['Magic!', 'Canadian music', 'reggae fusion', 'pop', 'pop bands'],
    'Gotye': ['Gotye', 'Australian music', 'Belgian music', 'indie pop', 'alternative pop', 'singer-songwriters'],
    'Sia': ['Sia', 'Australian music', 'pop', 'electropop', 'singer-songwriters'],
    'Demi Lovato': ['Demi Lovato', 'US music', 'pop', 'pop rock', 'dance-pop'],
    'Miley Cyrus': ['Miley Cyrus', 'US music', 'pop', 'pop rock', 'pop singers'],
    'Ariana Grande': ['Ariana Grande', 'US music', 'pop', 'R&B', 'dance-pop'],
    'Nicki Minaj': ['Nicki Minaj', 'Trinidadian music', 'US music', 'hip hop', 'rap', 'pop rap'],
    'Iggy Azalea': ['Iggy Azalea', 'Australian music', 'hip hop', 'rap', 'pop rap'],
    'Lilly Wood and the Prick': ['Lilly Wood and the Prick', 'French music', 'indie folk', 'indie pop', 'electronic remixes'],
    'Mr Probz': ['Mr Probz', 'Dutch music', 'hip hop', 'pop', 'electronic remixes'],
    'Tinie Tempah': ['Tinie Tempah', 'English music', 'UK music', 'UK rap', 'grime', 'hip hop'],
    'Swedish House Mafia': ['Swedish House Mafia', 'Swedish music', 'electronic dance music', 'progressive house', 'DJs'],
    'Zedd': ['Zedd', 'German music', 'electronic dance music', 'electro house', 'music producers'],
    'Major Lazer': ['Major Lazer', 'US music', 'electronic dance music', 'dancehall', 'music producers']
};

// Album associations are limited to the listed tracks actually on each release.
const albumGroups = {
    'Sam Smith': [['Love Goes', ['Dancing with a Stranger']]],
    'James Bay': [['Chaos and the Calm', ['Let It Go', 'Best Fake Smile', 'If You Ever Want to Be in Love']]],
    'Jess Glynne': [
        ['I Cry When I Laugh', ['Hold My Hand', "Don't Be So Hard on Yourself", 'Take Me Home']],
        ['Always in Between', ['All I Am', 'Thursday']]
    ],
    'Ella Henderson': [['Chapter One', ['Ghost', 'Glow', 'Yours', 'Mirror Man']]],
    'Rudimental': [
        ['Home', ['Waiting All Night', 'Feel the Love', 'Free']],
        ['We the Generation', ['Lay It All on Me']],
        ['Toast to Our Differences', ['Sun Comes Up', 'These Days']]
    ],
    'Shura': [["Nothing's Real", ['Touch', "What's It Gonna Be?"]]],
    'Ruth B': [['Safe Haven', ['Lost Boy', 'Superficial Love']]],
    'Meghan Trainor': [
        ['Title', ['All About That Bass', 'Lips Are Movin', 'Dear Future Husband', "Like I'm Gonna Lose You"]],
        ['Thank You', ['No', 'Me Too']]
    ],
    'Justin Bieber': [
        ['Believe', ['Boyfriend']],
        ['Purpose', ['Sorry', 'Love Yourself', 'What Do You Mean?', 'Company']]
    ],
    'Shawn Mendes': [
        ['Handwritten', ['Stitches']],
        ['Illuminate', ['Treat You Better', "There's Nothing Holdin' Me Back"]],
        ['Shawn Mendes', ['In My Blood', "If I Can't Have You"]]
    ],
    'John Legend': [
        ['Love in the Future', ['All of Me']],
        ['Darkness and Light', ['Love Me Now']]
    ],
    'Passenger': [['All the Little Lights', ['Let Her Go', 'Holes']]],
    'Lukas Graham': [
        ['Lukas Graham (Blue Album)', ['7 Years']],
        ['3 (The Purple Album)', ['Love Someone']]
    ],
    'OMI': [['Me 4 U', ['Cheerleader']]],
    'Walk the Moon': [['Talking Is Hard', ['Shut Up and Dance']]],
    'Sheppard': [['Bombs Away', ['Geronimo']]],
    'Magic!': [["Don't Kill the Magic", ['Rude']]],
    'Gotye': [['Making Mirrors', ['Somebody That I Used to Know', 'Eyes Wide Open']]],
    'Sia': [
        ['1000 Forms of Fear', ['Chandelier', 'Elastic Heart', 'Big Girls Cry']],
        ['This Is Acting', ['Cheap Thrills', 'Alive']],
        ['This Is Acting (Deluxe Edition)', ['The Greatest']]
    ],
    'Demi Lovato': [
        ['Unbroken', ['Skyscraper']],
        ['Demi', ['Heart Attack']],
        ['Confident', ['Cool for the Summer', 'Confident']],
        ['Tell Me You Love Me', ['Sorry Not Sorry']]
    ],
    'Miley Cyrus': [
        ['Bangerz', ['Wrecking Ball', "We Can't Stop", 'Adore You']],
        ['Younger Now', ['Malibu']]
    ],
    'Ariana Grande': [
        ['My Everything', ['Problem', 'Break Free', 'One Last Time']],
        ['Dangerous Woman', ['Into You', 'Side to Side']],
        ['Sweetener', ['No Tears Left to Cry']],
        ['Thank U, Next', ['Thank U, Next', '7 Rings', "Break Up with Your Girlfriend, I'm Bored"]]
    ],
    'Nicki Minaj': [
        ['Pink Friday', ['Super Bass']],
        ['Pink Friday: Roman Reloaded', ['Starships', 'Pound the Alarm']],
        ['The Pinkprint', ['Anaconda']]
    ],
    'Iggy Azalea': [['The New Classic', ['Fancy', 'Black Widow']]],
    'Lilly Wood and the Prick': [['Invincible Friends', ['Prayer in C']]],
    'Tinie Tempah': [['Disc-Overy', ['Pass Out', 'Frisky', 'Written in the Stars']]],
    'Swedish House Mafia': [
        ['Until One', ['Miami 2 Ibiza']],
        ['Until Now', ["Don't You Worry Child", 'Save the World']]
    ],
    'Zedd': [
        ['Clarity', ['Clarity', 'Stay the Night']],
        ['True Colors', ['I Want You to Know']]
    ],
    'Major Lazer': [['Peace Is the Mission', ['Lean On', 'Light It Up']]]
};

// Extra tags identify recording-specific vocalists, collaborations and remixes.
const songTags = {
    'Sam Smith': {
        'Dancing with a Stranger': ['Normani', 'duets', 'collaborations', '2019 singles', '2020 album release']
    },
    'Rudimental': {
        'Waiting All Night': ['Ella Eyre', 'guest vocalists', 'collaborations'],
        'Feel the Love': ['John Newman', 'guest vocalists', 'collaborations'],
        'Free': ['Emeli Sandé', 'guest vocalists', 'collaborations'],
        'Lay It All on Me': ['Ed Sheeran', 'guest vocalists', 'collaborations'],
        'Sun Comes Up': ['James Arthur', 'guest vocalists', 'collaborations'],
        'These Days': ['Jess Glynne', 'Macklemore', 'Dan Caplen', 'guest vocalists', 'collaborations']
    },
    'Meghan Trainor': {
        "Like I'm Gonna Lose You": ['John Legend', 'duets', 'collaborations'],
        'No': ['2016 singles', 'R&B influences']
    },
    'Justin Bieber': {
        'Love Yourself': ['Ed Sheeran', 'songwriters'],
        'Sorry': ['dancehall influences']
    },
    'OMI': {
        'Cheerleader': ['Felix Jaehn', 'remixes', '2012 originals', '2014 remixes', '2015 UK hits']
    },
    'Gotye': {
        'Somebody That I Used to Know': ['Kimbra', 'duets', 'collaborations']
    },
    'Sia': {
        'Elastic Heart': ['The Hunger Games', 'film soundtracks', '2013 singles', '2014 album recordings'],
        'Cheap Thrills': ['Sean Paul', 'alternative recordings', 'guest rappers', 'collaborations'],
        'The Greatest': ['Kendrick Lamar', 'alternative recordings', 'guest rappers', 'collaborations']
    },
    'Ariana Grande': {
        'Problem': ['Iggy Azalea', 'guest rappers', 'collaborations'],
        'Break Free': ['Zedd', 'music producers', 'collaborations'],
        'Side to Side': ['Nicki Minaj', 'guest rappers', 'collaborations']
    },
    'Iggy Azalea': {
        'Fancy': ['Charli XCX', 'guest vocalists', 'collaborations'],
        'Black Widow': ['Rita Ora', 'guest vocalists', 'collaborations']
    },
    'Lilly Wood and the Prick': {
        'Prayer in C': ['Robin Schulz', '2010 originals', '2014 remixes', 'remixes', 'house music', 'UK number ones']
    },
    'Mr Probz': {
        'Waves': ['Robin Schulz', '2013 originals', '2014 remixes', 'remixes', 'deep house', 'UK number ones']
    },
    'Tinie Tempah': {
        'Written in the Stars': ['Eric Turner', 'guest vocalists', 'collaborations']
    },
    'Swedish House Mafia': {
        'Miami 2 Ibiza': ['Tinie Tempah', 'guest rappers', 'collaborations'],
        "Don't You Worry Child": ['John Martin', 'guest vocalists', 'collaborations'],
        'Save the World': ['John Martin', 'guest vocalists', 'collaborations']
    },
    'Zedd': {
        'Clarity': ['Foxes', 'guest vocalists', 'collaborations'],
        'Stay the Night': ['Hayley Williams', 'Paramore', 'guest vocalists', 'collaborations'],
        'I Want You to Know': ['Selena Gomez', 'guest vocalists', 'collaborations'],
        'Stay': ['Alessia Cara', 'guest vocalists', 'collaborations']
    },
    'Major Lazer': {
        'Lean On': ['DJ Snake', 'MØ', 'collaborations', 'guest vocalists'],
        'Cold Water': ['Justin Bieber', 'MØ', 'collaborations', 'guest vocalists'],
        'Light It Up': ['Nyla', 'Fuse ODG remix', 'remixes', 'guest vocalists', 'collaborations']
    }
};

function makeTags(title, artist) {
    const tags = ['2010s', 'songs', 'artist identification', 'recordings', ...artistTags[artist]];
    for (const [album, albumSongs] of (albumGroups[artist] || [])) {
        if (albumSongs.includes(title)) tags.push(album + ' album');
    }
    const extra = songTags[artist] && songTags[artist][title];
    if (extra) tags.push(...extra);
    return [...new Set(tags)];
}

// Make collaboration credits precise without changing the correct answers.
const clarifiedQuestions = {
    'Sam Smith|Dancing with a Stranger':
        "Which singer released 'Dancing with a Stranger' as a duet with Normani?",
    'Rudimental|These Days':
        "Which electronic group released 'These Days' featuring Jess Glynne, Macklemore and Dan Caplen?",
    "Meghan Trainor|Like I'm Gonna Lose You":
        "Which singer recorded 'Like I'm Gonna Lose You' as a duet with John Legend?",
    'Gotye|Somebody That I Used to Know':
        "Which Australian musician recorded 'Somebody That I Used to Know' with Kimbra?",
    'Ariana Grande|Problem':
        "Which singer released 'Problem' featuring Iggy Azalea?",
    'Ariana Grande|Break Free':
        "Which singer released 'Break Free' with producer Zedd?",
    'Ariana Grande|Side to Side':
        "Which singer released 'Side to Side' featuring Nicki Minaj?",
    'Iggy Azalea|Black Widow':
        "Which Australian rapper released 'Black Widow' featuring Rita Ora?",
    'Major Lazer|Cold Water':
        "Which electronic music group released 'Cold Water' featuring Justin Bieber and MØ?",
    'Swedish House Mafia|Miami 2 Ibiza':
        "Which Swedish DJ trio released 'Miami 2 Ibiza' with Tinie Tempah?"
};

// The album question replaces a genuinely incorrect song/artist pairing.
// Its position in the songs list keeps all original artist distractor ordering.
const artists = [...new Set(songs.map(song => Array.isArray(song) ? song[1] : song.artist))];

function rotateAnswers(answers, index) {
    const rotation = index % answers.length;
    return [...answers.slice(rotation), ...answers.slice(0, rotation)];
}

function makeAnswers(correctArtist, index) {
    const wrongArtists = artists.filter(artist => artist !== correctArtist);
    const answers = [
        correctArtist,
        wrongArtists[index % wrongArtists.length],
        wrongArtists[(index + 11) % wrongArtists.length],
        wrongArtists[(index + 23) % wrongArtists.length]
    ];
    return rotateAnswers(answers, index);
}

const questions = songs.map((song, index) => {
    const base = {
        id: `music_${9867 + index}`,
        category: 'Music',
        difficulty: index % 3 === 0 ? 'Easy' : 'Medium',
        dailyEligible: true
    };

    if (!Array.isArray(song)) {
        return {
            ...base,
            question: song.question,
            answers: rotateAnswers(song.answers, index),
            correctAnswer: song.correctAnswer,
            tags: [...new Set([
                '2010s', 'albums', 'debut albums', 'album identification',
                ...artistTags[song.artist], ...song.tags
            ])]
        };
    }

    const [title, artist] = song;
    return {
        ...base,
        question: clarifiedQuestions[artist + '|' + title] ||
            `Which artist recorded '${title}'?`,
        answers: makeAnswers(artist, index),
        correctAnswer: artist,
        tags: makeTags(title, artist)
    };
});

module.exports = questions;
