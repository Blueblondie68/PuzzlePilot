
//
// quiz_pack136.js
// PuzzlePilot - Music Quiz
// Pack 136: Music of the 2020s
// Questions music_11667 to music_11766
//

const songs = [

    // Dua Lipa
    ["These Walls", "Dua Lipa"],
    ["Falling Forever", "Dua Lipa"],
    ["End of an Era", "Dua Lipa"],

    // Taylor Swift
    ["Fortnight", "Taylor Swift and Post Malone"],
    ["Karma", "Taylor Swift"],
    ["Lavender Haze", "Taylor Swift"],
    ["Bejeweled", "Taylor Swift"],
    ["I Can Do It with a Broken Heart", "Taylor Swift"],
    ["The Fate of Ophelia", "Taylor Swift"],
    ["Opalite", "Taylor Swift"],
    ["Midnight Rain", "Taylor Swift"],

    // Miley Cyrus
    ["More to Lose", "Miley Cyrus"],
    ["Secrets", "Miley Cyrus"],

    // Ed Sheeran
    ["Azizam", "Ed Sheeran"],
    ["Sapphire", "Ed Sheeran"],

    // Dance and electronic
    ["B.O.T.A. (Baddest of Them All)",
        "Eliza Rose and Interplanetary Criminal"],
    ["Move", "Adam Port, Stryv and Malachiii"],
    ["The Days", "Chrystal"],

    // Purple Disco Machine
    ["Hypnotized",
        "Purple Disco Machine and Sophie and the Giants"],
    ["In the Dark",
        "Purple Disco Machine and Sophie and the Giants"],
    ["Substitution",
        "Purple Disco Machine and Kungs"],
    ["Beat of Your Heart",
        "Purple Disco Machine and ÁSDÍS"],
    ["Honey Boy",
        "Purple Disco Machine and Benjamin Ingrosso"],
    ["Dopamine",
        "Purple Disco Machine and Eyelar"],

    // Sophie and the Giants
    ["Paradise", "Sophie and the Giants"],
    ["Shut Up and Dance", "Sophie and the Giants"],

    // More dance
    ["Mwaki", "Zerb and Sofiya Nzau"],
    ["Addicted", "Zerb and The Chainsmokers"],
    ["No Bad Vibes", "Jazzy and KILIMANJARO"],
    ["Somedays", "Sonny Fodera, Jazzy and D.O.D"],
    ["Asking", "Sonny Fodera and MK"],
    ["Mind Still", "Sonny Fodera and blythe"],

    // Disclosure
    ["She's Gone, Dance On", "Disclosure"],
    ["Looking for Love", "Disclosure"],

    // SZA
    ["Snooze", "SZA"],
    ["Kill Bill", "SZA"],
    ["Saturn", "SZA"],
    ["Nobody Gets Me", "SZA"],
    ["Shirt", "SZA"],
    ["Good Days", "SZA"],
    ["30 for 30", "SZA and Kendrick Lamar"],
    ["Drive", "SZA"],
    ["BMF", "SZA"],
    ["Scorsese Baby Daddy", "SZA"],

    // Kim Petras
    ["Coconuts", "Kim Petras"],
    ["Alone", "Kim Petras and Nicki Minaj"],
    ["King of Hearts", "Kim Petras"],
    ["If Jesus Was a Rockstar", "Kim Petras"],

    // Meghan Trainor
    ["Made You Look", "Meghan Trainor"],
    ["Mother", "Meghan Trainor"],
    ["To the Moon", "Meghan Trainor"],
    ["Been Like This", "Meghan Trainor and T-Pain"],

    // Sam Smith
    ["Gimme", "Sam Smith, Koffee and Jessie Reyez"],

    // Doja Cat
    ["Paint the Town Red", "Doja Cat"],
    ["Agora Hills", "Doja Cat"],
    ["Attention", "Doja Cat"],
    ["Demons", "Doja Cat"],
    ["Woman", "Doja Cat"],
    ["Kiss Me More", "Doja Cat and SZA"],

    // Muni Long
    ["Hrs and Hrs", "Muni Long"],
    ["Made for Me", "Muni Long"],

    // Libianca
    ["People", "Libianca"],

    // Victoria Monét
    ["On My Mama", "Victoria Monét"],
    ["Alright", "Victoria Monét"],
    ["Party Girls", "Victoria Monét"],
    ["Smoke", "Victoria Monét"],
    ["SOS (Sex on Sight)", "Victoria Monét and Usher"],

    // FLO
    ["Cardboard Box", "FLO"],
    ["Immature", "FLO"],
    ["Fly Girl", "FLO and Missy Elliott"],
    ["Walk Like This", "FLO"],

    // Tems
    ["Me & U", "Tems"],
    ["Love Me JeJe", "Tems"],
    ["Free Mind", "Tems"],
    ["Higher", "Tems"],
    ["Burning", "Tems"],

    // Tinashe
    ["Nasty", "Tinashe"],
    ["Needs", "Tinashe"],
    ["Talk to Me Nice", "Tinashe"],
    ["Getting No Sleep", "Tinashe"],
    ["No Broke Boys", "Tinashe"],

    // Kehlani
    ["After Hours", "Kehlani"],
    ["Next 2 U", "Kehlani"],
    ["Folded", "Kehlani"],
    ["Little Story", "Kehlani"],
    ["Altar", "Kehlani"],

    // Ravyn Lenae
    ["Love Me Not", "Ravyn Lenae"],
    ["Skin Tight", "Ravyn Lenae and Steve Lacy"],
    ["Dream Girl", "Ravyn Lenae"],
    ["One Wish", "Ravyn Lenae"],

    // Becky Hill
    ["Outside of Love", "Becky Hill"],
    ["Never Be Alone", "Becky Hill and Sonny Fodera"],
    ["Right Here", "Becky Hill"],
    ["Side Effects", "Becky Hill and Lewis Thompson"],
    ["True Colours", "Becky Hill and Self Esteem"],

    // More 2020s R&B and pop
    ["Million Dollar Baby", "Tommy Richman"],
    ["Devil Is a Lie", "Tommy Richman"],
    ["Mutt", "Leon Thomas"],
    ["Here We Go (Uh Oh)", "Coco Jones"],
    ["ICU", "Coco Jones"]

];

// =====================================================
// SOURCE VALIDATION
// =====================================================

if (songs.length !== 100) {
    throw new Error(
        "Pack 136 must contain exactly 100 songs. Found: " +
        songs.length
    );
}

const normalise = value => String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

const songKeys = new Set();

for (const [song, artist] of songs) {

    const key = normalise(song) + "|" +
        normalise(artist);

    if (songKeys.has(key)) {
        throw new Error(
            "Repeated song and artist: " +
            song + " - " + artist
        );
    }

    songKeys.add(key);
}

// =====================================================
// ARTIST POOL
// =====================================================

const artistPool = [
    ...new Set(songs.map(entry => entry[1]))
];

if (artistPool.length < 4) {
    throw new Error(
        "Not enough distinct artists for answer choices."
    );
}

// =====================================================
// GENERATE QUESTIONS
// =====================================================

const quizPack136 = songs.map((entry, index) => {

    const [song, artist] = entry;

    const otherArtists = artistPool.filter(
        name => name !== artist
    );

    const wrongAnswers = [];

    // Select three distinct incorrect answers.
    // Use a rotating starting point to vary choices.

    const start = (index * 7) % otherArtists.length;

    for (let i = 0; i < 3; i++) {

        const position =
            (start + i * 11) % otherArtists.length;

        const candidate = otherArtists[position];

        if (!wrongAnswers.includes(candidate)) {
            wrongAnswers.push(candidate);
        }
    }

    // Fill any gaps if positions overlapped.

    for (const candidate of otherArtists) {

        if (wrongAnswers.length === 3) {
            break;
        }

        if (!wrongAnswers.includes(candidate)) {
            wrongAnswers.push(candidate);
        }
    }

    const answers = [
        artist,
        ...wrongAnswers
    ];

    // Rotate the position of the correct answer.

    const shift = index % 4;

    const rotatedAnswers = [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];

    return {
        id: "music_" + (11667 + index),
        category: "Music",
        question: "Which artist recorded '" + song + "'?",
        answers: rotatedAnswers,
        correctAnswer: artist
    };

});

// =====================================================
// FINAL VALIDATION
// =====================================================

for (const question of quizPack136) {

    if (question.answers.length !== 4) {
        throw new Error(
            "Incorrect answer count: " + question.id
        );
    }

    if (!question.answers.includes(question.correctAnswer)) {
        throw new Error(
            "Correct answer missing: " + question.id
        );
    }

    if (new Set(question.answers).size !== 4) {
        throw new Error(
            "Repeated answer choices: " + question.id
        );
    }
}

module.exports = quizPack136;
