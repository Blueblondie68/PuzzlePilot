
// quiz_pack145.js
// PuzzlePilot - The Bigggggg Quiz
// Music Albums: Pack 145 - The 1990s
// 100 questions, music_12501 to music_12600
// Keep quiz_bank.js unchanged until the end of this batch.

// Each fact is [year, album title, artist, song].
// Song supplied: identify the album. Song blank: identify the artist.
const albumFacts = [
    [1990, "Violator", "Depeche Mode", "Personal Jesus"],
    [1990, "Listen Without Prejudice Vol. 1", "George Michael", "Freedom! '90"],
    [1990, "Rhythm of Love", "Kylie Minogue", "Better the Devil You Know"],
    [1990, "The Razors Edge", "AC/DC", "Thunderstruck"],
    [1990, "Wilson Phillips", "Wilson Phillips", "Hold On"],
    [1990, "Behaviour", "Pet Shop Boys", ""],
    [1990, "The La's", "The La's", ""],
    [1990, "Shake Your Money Maker", "The Black Crowes", ""],
    [1990, "Pills 'n' Thrills and Bellyaches", "Happy Mondays", ""],
    [1990, "I'm Breathless", "Madonna", ""],
    [1991, "Nevermind", "Nirvana", "Smells Like Teen Spirit"],
    [1991, "Ten", "Pearl Jam", "Alive"],
    [1991, "Use Your Illusion I", "Guns N' Roses", "November Rain"],
    [1991, "Blood Sugar Sex Magik", "Red Hot Chili Peppers", "Under the Bridge"],
    [1991, "Dangerous", "Michael Jackson", "Black or White"],
    [1991, "Use Your Illusion II", "Guns N' Roses", ""],
    [1991, "Achtung Baby", "U2", ""],
    [1991, "Diamonds and Pearls", "Prince and the New Power Generation", ""],
    [1991, "Waking Up the Neighbours", "Bryan Adams", ""],
    [1991, "Stars", "Simply Red", ""],
    [1992, "The Chronic", "Dr. Dre", "Nuthin' but a 'G' Thang"],
    [1992, "Unplugged", "Eric Clapton", "Tears in Heaven"],
    [1992, "Core", "Stone Temple Pilots", "Plush"],
    [1992, "Experience", "The Prodigy", "Out of Space"],
    [1992, "Connected", "Stereo MC's", "Connected"],
    [1992, "The Predator", "Ice Cube", ""],
    [1992, "Little Earthquakes", "Tori Amos", ""],
    [1992, "Celine Dion", "Celine Dion", ""],
    [1992, "Images and Words", "Dream Theater", ""],
    [1992, "Dirt", "Alice in Chains", ""],
    [1993, "In Utero", "Nirvana", "Heart-Shaped Box"],
    [1993, "Debut", "Björk", "Human Behaviour"],
    [1993, "Music Box", "Mariah Carey", "Dreamlover"],
    [1993, "Tuesday Night Music Club", "Sheryl Crow", "All I Wanna Do"],
    [1993, "Siamese Dream", "The Smashing Pumpkins", "Today"],
    [1993, "Vs.", "Pearl Jam", ""],
    [1993, "Everybody Else Is Doing It, So Why Can't We?", "The Cranberries", ""],
    [1993, "Doggystyle", "Snoop Doggy Dogg", ""],
    [1993, "Very", "Pet Shop Boys", ""],
    [1993, "janet.", "Janet Jackson", ""],
    [1994, "Definitely Maybe", "Oasis", "Live Forever"],
    [1994, "Parklife", "Blur", "Girls & Boys"],
    [1994, "Dookie", "Green Day", "Basket Case"],
    [1994, "Superunknown", "Soundgarden", "Black Hole Sun"],
    [1994, "CrazySexyCool", "TLC", "Waterfalls"],
    [1994, "His 'n' Hers", "Pulp", ""],
    [1994, "The Downward Spiral", "Nine Inch Nails", ""],
    [1994, "The Division Bell", "Pink Floyd", ""],
    [1994, "Illmatic", "Nas", ""],
    [1994, "Protection", "Massive Attack", ""],
    [1995, "Different Class", "Pulp", "Common People"],
    [1995, "The Bends", "Radiohead", "High and Dry"],
    [1995, "Mellon Collie and the Infinite Sadness", "The Smashing Pumpkins", "1979"],
    [1995, "Tragic Kingdom", "No Doubt", "Don't Speak"],
    [1995, "Garbage", "Garbage", "Only Happy When It Rains"],
    [1995, "To Bring You My Love", "PJ Harvey", ""],
    [1995, "The Great Escape", "Blur", ""],
    [1995, "Life", "Simply Red", ""],
    [1995, "Post", "Björk", ""],
    [1995, "HIStory: Past, Present and Future, Book I", "Michael Jackson", ""],
    [1996, "Spice", "Spice Girls", "Wannabe"],
    [1996, "Everything Must Go", "Manic Street Preachers", "A Design for Life"],
    [1996, "Travelling Without Moving", "Jamiroquai", "Virtual Insanity"],
    [1996, "Coming Up", "Suede", "Trash"],
    [1996, "The Score", "Fugees", "Killing Me Softly with His Song"],
    [1996, "Placebo", "Placebo", ""],
    [1996, "Odelay", "Beck", ""],
    [1996, "Antichrist Superstar", "Marilyn Manson", ""],
    [1996, "Razorblade Suitcase", "Bush", ""],
    [1996, "Older", "George Michael", ""],
    [1997, "OK Computer", "Radiohead", "Karma Police"],
    [1997, "Homogenic", "Björk", "Jóga"],
    [1997, "Be Here Now", "Oasis", "D'You Know What I Mean?"],
    [1997, "The Fat of the Land", "The Prodigy", "Firestarter"],
    [1997, "The Colour and the Shape", "Foo Fighters", "Everlong"],
    [1997, "Ladies and Gentlemen We Are Floating in Space", "Spiritualized", ""],
    [1997, "Butterfly", "Mariah Carey", ""],
    [1997, "Let's Talk About Love", "Celine Dion", ""],
    [1997, "Homework", "Daft Punk", ""],
    [1997, "Life thru a Lens", "Robbie Williams", ""],
    [1998, "Mezzanine", "Massive Attack", "Teardrop"],
    [1998, "Ray of Light", "Madonna", "Frozen"],
    [1998, "The Miseducation of Lauryn Hill", "Lauryn Hill", "Doo Wop (That Thing)"],
    [1998, "Version 2.0", "Garbage", "Push It"],
    [1998, "International Velvet", "Catatonia", "Road Rage"],
    [1998, "This Is My Truth Tell Me Yours", "Manic Street Preachers", ""],
    [1998, "Celebrity Skin", "Hole", ""],
    [1998, "Moon Safari", "Air", ""],
    [1998, "The Boy with the Arab Strap", "Belle and Sebastian", ""],
    [1998, "The Globe Sessions", "Sheryl Crow", ""],
    [1999, "Californication", "Red Hot Chili Peppers", "Scar Tissue"],
    [1999, "The Slim Shady LP", "Eminem", "My Name Is"],
    [1999, "Millennium", "Backstreet Boys", "I Want It That Way"],
    [1999, "Play", "Moby", "Porcelain"],
    [1999, "Showbiz", "Muse", "Muscle Museum"],
    [1999, "The Man Who", "Travis", ""],
    [1999, "Surrender", "The Chemical Brothers", ""],
    [1999, "13", "Blur", ""],
    [1999, "The Battle of Los Angeles", "Rage Against the Machine", ""],
    [1999, "Enema of the State", "Blink-182", ""]
];

const normalise = value => value.trim().toLowerCase().replace(/\s+/g, ' ');

if (albumFacts.length !== 100) {
    throw new Error('Pack 145 must contain exactly 100 questions.');
}

const seenAlbums = new Set();
for (const [year, album, artist, song] of albumFacts) {
    if (!Number.isInteger(year) || year < 1990 || year > 1999 ||
        !album || !artist || typeof song !== 'string') {
        throw new Error('Invalid Pack 145 album fact: ' + album);
    }
    const key = normalise(album);
    if (seenAlbums.has(key)) {
        throw new Error('Repeated album in Pack 145: ' + album);
    }
    seenAlbums.add(key);
}

// Distractors come from other albums or artists released in the same year.
function chooseWrongAnswers(year, album, artist, wantsAlbum, index) {
    const sameYear = albumFacts.filter(fact => fact[0] === year);
    const candidates = wantsAlbum
        ? sameYear.filter(fact => fact[2] !== artist).map(fact => fact[1])
        : [...new Set(sameYear.map(fact => fact[2]))]
            .filter(name => name !== artist);

    const wrong = [];
    let pos = (index * 3 + 1) % candidates.length;
    while (wrong.length < 3) {
        const candidate = candidates[pos];
        if (candidate !== album && candidate !== artist &&
            !wrong.includes(candidate)) {
            wrong.push(candidate);
        }
        pos = (pos + 1) % candidates.length;
    }
    return wrong;
}

const questions = albumFacts.map(([year, album, artist, song], index) => {
    const wantsAlbum = song.length > 0;
    const correctAnswer = wantsAlbum ? album : artist;
    const answers = chooseWrongAnswers(year, album, artist, wantsAlbum, index);
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'music_' + (12501 + index),
        category: 'Music',
        question: wantsAlbum
            ? `Which ${year} album includes "${song}" by ${artist}?`
            : `Which artist released the ${year} album "${album}"?`,
        answers,
        correctAnswer,
        difficulty: index % 13 === 0 ? 'Hard' : 'Medium',
        tags: ['1990s', 'Albums', wantsAlbum ? 'Album tracks' : 'Artists'],
        dailyEligible: true
    };
});

const ids = new Set();
for (const question of questions) {
    if (ids.has(question.id) || question.answers.length !== 4 ||
        new Set(question.answers.map(normalise)).size !== 4 ||
        !question.answers.includes(question.correctAnswer)) {
        throw new Error('Pack 145 answer or ID error: ' + question.id);
    }
    ids.add(question.id);
}

module.exports = questions;
