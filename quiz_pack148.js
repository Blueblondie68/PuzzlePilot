
// quiz_pack148.js
// PuzzlePilot - The Bigggggg Quiz
// Music Albums: Pack 148 - The 2020s (2020-2025)
// 100 questions, music_12801 to music_12900.
// Leave quiz_bank.js unchanged until the end of the album batch.

// Each entry: [year, album, artist, song].
// A supplied song asks for its album; an empty song asks for its artist.
const albumFacts = [
    [2020, "folklore", "Taylor Swift", "cardigan"],
    [2020, "evermore", "Taylor Swift", "willow"],
    [2020, "Future Nostalgia", "Dua Lipa", "Don't Start Now"],
    [2020, "After Hours", "The Weeknd", "Blinding Lights"],
    [2020, "Chromatica", "Lady Gaga", "Rain on Me"],
    [2020, "Positions", "Ariana Grande", "positions"],
    [2020, "Music to Be Murdered By", "Eminem", "Godzilla"],
    [2020, "BE", "BTS", "Dynamite"],
    [2020, "Plastic Hearts", "Miley Cyrus", "Midnight Sky"],
    [2020, "Punisher", "Phoebe Bridgers", ""],
    [2020, "Sawayama", "Rina Sawayama", ""],
    [2020, "Women in Music Pt. III", "Haim", ""],
    [2020, "Imploding the Mirage", "The Killers", ""],
    [2020, "Notes on a Conditional Form", "The 1975", ""],
    [2020, "Letter to You", "Bruce Springsteen", ""],
    [2020, "Calm", "5 Seconds of Summer", ""],
    [2020, "Fetch the Bolt Cutters", "Fiona Apple", ""],
    [2021, "30", "Adele", "Easy on Me"],
    [2021, "Sour", "Olivia Rodrigo", "drivers license"],
    [2021, "=", "Ed Sheeran", "Bad Habits"],
    [2021, "Happier Than Ever", "Billie Eilish", "Therefore I Am"],
    [2021, "Justice", "Justin Bieber", "Peaches"],
    [2021, "Montero", "Lil Nas X", "Industry Baby"],
    [2021, "Planet Her", "Doja Cat", "Kiss Me More"],
    [2021, "An Evening with Silk Sonic", "Silk Sonic", "Leave the Door Open"],
    [2021, "Voyage", "ABBA", "Don't Shut Me Down"],
    [2021, "Seventeen Going Under", "Sam Fender", ""],
    [2021, "Blue Weekend", "Wolf Alice", ""],
    [2021, "Typhoons", "Royal Blood", ""],
    [2021, "Donda", "Kanye West", ""],
    [2021, "Certified Lover Boy", "Drake", ""],
    [2021, "Call Me If You Get Lost", "Tyler, the Creator", ""],
    [2021, "Solar Power", "Lorde", ""],
    [2021, "Music of the Spheres", "Coldplay", ""],
    [2022, "Midnights", "Taylor Swift", "Anti-Hero"],
    [2022, "Harry's House", "Harry Styles", "As It Was"],
    [2022, "Renaissance", "Beyoncé", "Break My Soul"],
    [2022, "Special", "Lizzo", "About Damn Time"],
    [2022, "Dawn FM", "The Weeknd", "Take My Breath"],
    [2022, "Un Verano Sin Ti", "Bad Bunny", "Tití Me Preguntó"],
    [2022, "Mr. Morale & the Big Steppers", "Kendrick Lamar", "N95"],
    [2022, "SOS", "SZA", "Kill Bill"],
    [2022, "The Car", "Arctic Monkeys", "Body Paint"],
    [2022, "Being Funny in a Foreign Language", "The 1975", ""],
    [2022, "Will of the People", "Muse", ""],
    [2022, "Dance Fever", "Florence + the Machine", ""],
    [2022, "Hold the Girl", "Rina Sawayama", ""],
    [2022, "Crash", "Charli XCX", ""],
    [2022, "Twelve Carat Toothache", "Post Malone", ""],
    [2022, "emails i can't send", "Sabrina Carpenter", ""],
    [2022, "Her Loss", "Drake & 21 Savage", ""],
    [2023, "Guts", "Olivia Rodrigo", "vampire"],
    [2023, "Endless Summer Vacation", "Miley Cyrus", "Flowers"],
    [2023, "Did You Know That There's a Tunnel Under Ocean Blvd", "Lana Del Rey", "A&W"],
    [2023, "the record", "boygenius", "Not Strong Enough"],
    [2023, "This Is Why", "Paramore", "This Is Why"],
    [2023, "Tension", "Kylie Minogue", "Padam Padam"],
    [2023, "The Ballad of Darren", "Blur", "The Narcissist"],
    [2023, "Hackney Diamonds", "The Rolling Stones", "Angry"],
    [2023, "1989 (Taylor's Version)", "Taylor Swift", ""],
    [2023, "Speak Now (Taylor's Version)", "Taylor Swift", ""],
    [2023, "Utopia", "Travis Scott", ""],
    [2023, "For All the Dogs", "Drake", ""],
    [2023, "Pink Friday 2", "Nicki Minaj", ""],
    [2023, "But Here We Are", "Foo Fighters", ""],
    [2023, "Rush!", "Måneskin", ""],
    [2023, "The Age of Pleasure", "Janelle Monáe", ""],
    [2023, "The Rise and Fall of a Midwest Princess", "Chappell Roan", ""],
    [2024, "The Tortured Poets Department", "Taylor Swift", "Fortnight"],
    [2024, "Hit Me Hard and Soft", "Billie Eilish", "Birds of a Feather"],
    [2024, "Short n' Sweet", "Sabrina Carpenter", "Espresso"],
    [2024, "Brat", "Charli XCX", "360"],
    [2024, "Eternal Sunshine", "Ariana Grande", "we can't be friends (wait for your love)"],
    [2024, "Cowboy Carter", "Beyoncé", "Texas Hold 'Em"],
    [2024, "Radical Optimism", "Dua Lipa", "Houdini"],
    [2024, "The Secret of Us", "Gracie Abrams", "Risk"],
    [2024, "The Death of Slim Shady (Coup de Grâce)", "Eminem", ""],
    [2024, "Moon Music", "Coldplay", ""],
    [2024, "From Zero", "Linkin Park", ""],
    [2024, "Romance", "Fontaines D.C.", ""],
    [2024, "Prelude to Ecstasy", "The Last Dinner Party", ""],
    [2024, "Songs of a Lost World", "The Cure", ""],
    [2024, "Clancy", "Twenty One Pilots", ""],
    [2024, "143", "Katy Perry", ""],
    [2024, "Luck and Strange", "David Gilmour", ""],
    [2025, "Mayhem", "Lady Gaga", "Abracadabra"],
    [2025, "Hurry Up Tomorrow", "The Weeknd", "Cry for Me"],
    [2025, "Man's Best Friend", "Sabrina Carpenter", "Manchild"],
    [2025, "Virgin", "Lorde", "What Was That"],
    [2025, "The Life of a Showgirl", "Taylor Swift", "The Fate of Ophelia"],
    [2025, "Play", "Ed Sheeran", "Sapphire"],
    [2025, "The Art of Loving", "Olivia Dean", "Man I Need"],
    [2025, "So Close to What", "Tate McRae", ""],
    [2025, "Debí Tirar Más Fotos", "Bad Bunny", ""],
    [2025, "I'm the Problem", "Morgan Wallen", ""],
    [2025, "Eusexua", "FKA twigs", ""],
    [2025, "A Matter of Time", "Laufey", ""],
    [2025, "The Clearing", "Wolf Alice", ""],
    [2025, "Something Beautiful", "Miley Cyrus", ""],
    [2025, "People Watching", "Sam Fender", ""]
];

const normalise = value => value.trim().toLowerCase().replace(/\s+/g, ' ');

if (albumFacts.length !== 100) {
    throw new Error('Pack 148 must contain exactly 100 albums.');
}

const seenAlbums = new Set();
for (const [year, album, artist, song] of albumFacts) {
    if (!Number.isInteger(year) || year < 2020 || year > 2025 ||
        typeof album !== 'string' || !album.trim() ||
        typeof artist !== 'string' || !artist.trim() ||
        typeof song !== 'string') {
        throw new Error('Invalid Pack 148 album fact: ' + album);
    }
    const key = normalise(album);
    if (seenAlbums.has(key)) {
        throw new Error('Repeated Pack 148 album: ' + album);
    }
    seenAlbums.add(key);
}

// Three different distractors from the same release year.
// Album questions exclude other albums by the same artist.
function chooseWrongAnswers(year, album, artist, wantsAlbum, index) {
    const sameYear = albumFacts.filter(fact => fact[0] === year);
    const candidates = wantsAlbum
        ? sameYear.filter(fact => fact[2] !== artist).map(fact => fact[1])
        : [...new Set(sameYear.map(fact => fact[2]))]
            .filter(name => name !== artist);

    const wrong = [];
    let position = (index * 3 + 1) % candidates.length;

    while (wrong.length < 3) {
        const candidate = candidates[position];
        if (candidate !== album && candidate !== artist &&
            !wrong.includes(candidate)) {
            wrong.push(candidate);
        }
        position = (position + 1) % candidates.length;
    }
    return wrong;
}

const questions = albumFacts.map(([year, album, artist, song], index) => {
    const wantsAlbum = song.length > 0;
    const correctAnswer = wantsAlbum ? album : artist;
    const answers = chooseWrongAnswers(
        year, album, artist, wantsAlbum, index
    );
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'music_' + (12801 + index),
        category: 'Music',
        question: wantsAlbum
            ? `Which ${year} album features "${song}" by ${artist}?`
            : `Which artist released the ${year} album "${album}"?`,
        answers,
        correctAnswer,
        difficulty: index % 13 === 0 ? 'Hard' : 'Medium',
        tags: ['2020s', 'Albums', wantsAlbum ? 'Album tracks' : 'Artists'],
        dailyEligible: true
    };
});

const ids = new Set();
for (const question of questions) {
    if (ids.has(question.id) || question.answers.length !== 4 ||
        new Set(question.answers.map(normalise)).size !== 4 ||
        !question.answers.includes(question.correctAnswer)) {
        throw new Error('Pack 148 validation failed: ' + question.id);
    }
    ids.add(question.id);
}

module.exports = questions;
