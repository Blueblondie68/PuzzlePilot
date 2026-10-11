
// quiz_pack144.js
// PuzzlePilot - The Bigggggg Quiz
// Music Albums: Pack 144 - The 1980s
// 100 questions, music_12401 to music_12500
// This pack is not yet connected to quiz_bank.js.

// Each entry: [year, album, artist, song].
// A blank song asks which artist released the album.
// A named song asks which original album contains it.
const albumFacts = [
    [1980, 'Back in Black', 'AC/DC', 'You Shook Me All Night Long'],
    [1980, 'The Game', 'Queen', 'Another One Bites the Dust'],
    [1980, 'Super Trouper', 'ABBA', 'The Winner Takes It All'],
    [1980, 'Scary Monsters (and Super Creeps)', 'David Bowie', 'Ashes to Ashes'],
    [1980, 'Remain in Light', 'Talking Heads', 'Once in a Lifetime'],
    [1980, 'Sandinista!', 'The Clash', ''],
    [1980, 'Making Movies', 'Dire Straits', ''],
    [1980, 'Closer', 'Joy Division', ''],
    [1980, 'Seventeen Seconds', 'The Cure', ''],
    [1980, 'Zenyatta Mondatta', 'The Police', ''],

    [1981, 'Ghost in the Machine', 'The Police', 'Every Little Thing She Does Is Magic'],
    [1981, 'Duran Duran', 'Duran Duran', 'Girls on Film'],
    [1981, 'Computer World', 'Kraftwerk', 'Pocket Calculator'],
    [1981, 'Bella Donna', 'Stevie Nicks', 'Edge of Seventeen'],
    [1981, '4', 'Foreigner', 'Waiting for a Girl Like You'],
    [1981, 'Non-Stop Erotic Cabaret', 'Soft Cell', ''],
    [1981, 'Speak & Spell', 'Depeche Mode', ''],
    [1981, 'Juju', 'Siouxsie and the Banshees', ''],
    [1981, 'The Visitors', 'ABBA', ''],
    [1981, 'Time', 'Electric Light Orchestra', ''],

    [1982, 'Thriller', 'Michael Jackson', 'Billie Jean'],
    [1982, 'The Dreaming', 'Kate Bush', 'Sat in Your Lap'],
    [1982, 'Combat Rock', 'The Clash', 'Should I Stay or Should I Go'],
    [1982, 'Toto IV', 'Toto', 'Africa'],
    [1982, 'Too-Rye-Ay', 'Dexys Midnight Runners', 'Come On Eileen'],
    [1982, 'The Nylon Curtain', 'Billy Joel', ''],
    [1982, 'Tug of War', 'Paul McCartney', ''],
    [1982, 'Nebraska', 'Bruce Springsteen', ''],
    [1982, 'New Gold Dream (81-82-83-84)', 'Simple Minds', ''],
    [1982, 'Avalon', 'Roxy Music', ''],

    [1983, "Let's Dance", 'David Bowie', "Let's Dance"],
    [1983, 'Colour by Numbers', 'Culture Club', 'Karma Chameleon'],
    [1983, 'True', 'Spandau Ballet', 'True'],
    [1983, 'An Innocent Man', 'Billy Joel', 'Uptown Girl'],
    [1983, 'Sports', 'Huey Lewis and the News', 'Heart and Soul'],
    [1983, 'Sweet Dreams (Are Made of This)', 'Eurythmics', ''],
    [1983, 'War', 'U2', ''],
    [1983, 'Pyromania', 'Def Leppard', ''],
    [1983, "She's So Unusual", 'Cyndi Lauper', ''],
    [1983, 'Seven and the Ragged Tiger', 'Duran Duran', ''],

    [1984, 'Born in the U.S.A.', 'Bruce Springsteen', 'Dancing in the Dark'],
    [1984, 'Diamond Life', 'Sade', 'Smooth Operator'],
    [1984, 'Make It Big', 'Wham!', 'Wake Me Up Before You Go-Go'],
    [1984, 'The Unforgettable Fire', 'U2', 'Pride (In the Name of Love)'],
    [1984, 'Into the Gap', 'Thompson Twins', 'Hold Me Now'],
    [1984, 'Welcome to the Pleasuredome', 'Frankie Goes to Hollywood', ''],
    [1984, 'Some Great Reward', 'Depeche Mode', ''],
    [1984, '1984', 'Van Halen', ''],
    [1984, 'Reckless', 'Bryan Adams', ''],
    [1984, 'Heartbeat City', 'The Cars', ''],

    [1985, 'Songs from the Big Chair', 'Tears for Fears', 'Everybody Wants to Rule the World'],
    [1985, 'Hounds of Love', 'Kate Bush', 'Running Up That Hill'],
    [1985, 'Whitney Houston', 'Whitney Houston', 'Saving All My Love for You'],
    [1985, 'Listen Like Thieves', 'INXS', 'What You Need'],
    [1985, 'Little Creatures', 'Talking Heads', 'Road to Nowhere'],
    [1985, 'Once Upon a Time', 'Simple Minds', ''],
    [1985, 'Be Yourself Tonight', 'Eurythmics', ''],
    [1985, 'The Dream of the Blue Turtles', 'Sting', ''],
    [1985, 'Fables of the Reconstruction', 'R.E.M.', ''],
    [1985, 'Welcome to the Real World', 'Mr. Mister', ''],

    [1986, 'True Blue', 'Madonna', "Papa Don't Preach"],
    [1986, 'Invisible Touch', 'Genesis', 'Land of Confusion'],
    [1986, 'So', 'Peter Gabriel', 'Sledgehammer'],
    [1986, 'The Queen Is Dead', 'The Smiths', 'There Is a Light That Never Goes Out'],
    [1986, 'Slippery When Wet', 'Bon Jovi', "Livin' on a Prayer"],
    [1986, 'Control', 'Janet Jackson', ''],
    [1986, 'The Final Countdown', 'Europe', ''],
    [1986, 'Rapture', 'Anita Baker', ''],
    [1986, 'Master of Puppets', 'Metallica', ''],
    [1986, 'Different Light', 'The Bangles', ''],

    [1987, 'Bad', 'Michael Jackson', 'Smooth Criminal'],
    [1987, 'Kick', 'INXS', 'Need You Tonight'],
    [1987, 'Actually', 'Pet Shop Boys', "It's a Sin"],
    [1987, 'Introducing the Hardline According to Terence Trent D\'Arby', 'Terence Trent D\'Arby', 'Wishing Well'],
    [1987, 'The Circus', 'Erasure', 'Sometimes'],
    [1987, 'Popped in Souled Out', 'Wet Wet Wet', ''],
    [1987, 'Tunnel of Love', 'Bruce Springsteen', ''],
    [1987, 'Kiss Me, Kiss Me, Kiss Me', 'The Cure', ''],
    [1987, 'Strangeways, Here We Come', 'The Smiths', ''],
    [1987, "Sign o' the Times", 'Prince', ''],

    [1988, 'Out of Order', 'Rod Stewart', 'Forever Young'],
    [1988, 'Tracy Chapman', 'Tracy Chapman', 'Fast Car'],
    [1988, 'Temple of Low Men', 'Crowded House', 'Better Be Home Soon'],
    [1988, 'Watermark', 'Enya', 'Orinoco Flow'],
    [1988, 'Open Up and Say... Ahh!', 'Poison', 'Every Rose Has Its Thorn'],
    [1988, 'Look Sharp!', 'Roxette', ''],
    [1988, 'Viva Hate', 'Morrissey', ''],
    [1988, 'Green', 'R.E.M.', ''],
    [1988, 'Introspective', 'Pet Shop Boys', ''],
    [1988, 'Push', 'Bros', ''],

    [1989, 'The Seeds of Love', 'Tears for Fears', 'Sowing the Seeds of Love'],
    [1989, 'Disintegration', 'The Cure', 'Lovesong'],
    [1989, 'The Raw & the Cooked', 'Fine Young Cannibals', 'She Drives Me Crazy'],
    [1989, 'Sleeping with the Past', 'Elton John', 'Sacrifice'],
    [1989, 'Rhythm Nation 1814', 'Janet Jackson', 'Miss You Much'],
    [1989, '...But Seriously', 'Phil Collins', ''],
    [1989, 'Club Classics Vol. One', 'Soul II Soul', ''],
    [1989, 'Steel Wheels', 'The Rolling Stones', ''],
    [1989, 'Storm Front', 'Billy Joel', ''],
    [1989, 'Trash', 'Alice Cooper', '']
];

const normalise = text => text.trim().toLowerCase().replace(/\s+/g, ' ');

if (albumFacts.length !== 100) {
    throw new Error('Pack 144 requires exactly 100 albums.');
}

const seenAlbums = new Set();

for (const [year, album, artist, song] of albumFacts) {
    if (!Number.isInteger(year) || year < 1980 || year > 1989 ||
        typeof album !== 'string' || !album.trim() ||
        typeof artist !== 'string' || !artist.trim() ||
        typeof song !== 'string') {
        throw new Error('Invalid Pack 144 album fact: ' + album);
    }

    const key = normalise(album);

    if (seenAlbums.has(key)) {
        throw new Error('Repeated Pack 144 album: ' + album);
    }

    seenAlbums.add(key);
}

// Select three different wrong answers from the same year.
// Album questions exclude other albums by the same artist.
function wrongAnswers(year, album, artist, isAlbumQuestion, index) {
    const fromYear = albumFacts.filter(entry => entry[0] === year);

    const pool = isAlbumQuestion
        ? fromYear
            .filter(entry => entry[2] !== artist)
            .map(entry => entry[1])
        : [...new Set(fromYear.map(entry => entry[2]))]
            .filter(candidate => candidate !== artist);

    const wrong = [];
    let cursor = (index * 3 + 1) % pool.length;

    while (wrong.length < 3) {
        const candidate = pool[cursor];

        if (candidate !== album &&
            candidate !== artist &&
            !wrong.includes(candidate)) {
            wrong.push(candidate);
        }

        cursor = (cursor + 1) % pool.length;
    }

    return wrong;
}

const questions = albumFacts.map(([year, album, artist, song], index) => {
    const isAlbumQuestion = song.length > 0;

    const correctAnswer = isAlbumQuestion ? album : artist;

    const answers = wrongAnswers(
        year,
        album,
        artist,
        isAlbumQuestion,
        index
    );

    // Rotate the correct answer through all four positions.
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'music_' + (12401 + index),
        category: 'Music',

        question: isAlbumQuestion
            ? `Which ${year} album features "${song}" by ${artist}?`
            : `Which artist released the ${year} album "${album}"?`,

        answers,
        correctAnswer,

        difficulty: index % 11 === 0 ? 'Hard' : 'Medium',

        tags: [
            '1980s',
            'Albums',
            isAlbumQuestion ? 'Album tracks' : 'Artists'
        ],

        dailyEligible: true
    };
});

// Validate the finished pack before exporting.
const ids = new Set();

for (const question of questions) {
    if (ids.has(question.id) ||
        question.answers.length !== 4 ||
        new Set(question.answers.map(normalise)).size !== 4 ||
        !question.answers.includes(question.correctAnswer)) {
        throw new Error(
            'Pack 144 validation failed: ' + question.id
        );
    }

    ids.add(question.id);
}

module.exports = questions;
