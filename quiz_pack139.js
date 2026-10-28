 // quiz_pack139.js
// PuzzlePilot Big Quiz - Music Pack 139
// Special 12,000 music-ID milestone; music_11967 to music_12000

const songs = [

    // The K's
    ["Black and Blue", "The K's"],
    ["No Place Like Home", "The K's"],
    ["Rat Poison", "The K's"],
    ["Me and Your Sister", "The K's"],
    ["Hoping Maybe", "The K's"],

    // The Reytons
    ["Nineteen Crimes", "The Reytons"],
    ["Guilt Trip", "The Reytons"],
    ["Adrenaline", "The Reytons"],
    ["World's Greatest Actor", "The Reytons"],
    ["Not Today Mate", "The Reytons"],
    ["Knees Up", "The Reytons"],
    ["One More Reason", "The Reytons"],

    // The Snuts
    ["The Rodeo", "The Snuts"],
    ["Knuckles", "The Snuts"],
    ["Gloria", "The Snuts"],
    ["Dreams", "The Snuts"],
    ["NPC", "The Snuts"],
    ["Deep Diving", "The Snuts"],
    ["Millionaires", "The Snuts"],
    ["Somebody Loves You", "The Snuts"],
    ["Always", "The Snuts"],

    // More from The K's
    ["Before I Hit the Floor", "The K's"],
    ["Chancer", "The K's"],
    ["Sarajevo", "The K's"],
    ["Glass Towns", "The K's"],
    ["Helen, Oh I", "The K's"],
    ["Picture", "The K's"],
    ["Got a Feeling", "The K's"],
    ["Landmines", "The K's"],
    ["Icarus", "The K's"],

    // Additional 2020s tracks
    ["Yoyo", "The Snuts"],
    ["Butterside Down", "The Snuts"],
    ["Novastar", "The Snuts"],
    ["Circles", "The Snuts"]

];

// A short milestone pack, not one of the usual 100-question packs.
// Its 34 original positions finish exactly at music_12000.
// Two unverified song credits have been replaced with verified
// album and band-member questions; all other answers stay unchanged.

const artistTags = {
    "The K's": ["The K's", "UK music", "English music", "Warrington music", "indie rock", "alternative rock", "rock bands"],
    "The Reytons": ["The Reytons", "UK music", "Yorkshire music", "Rotherham music", "indie rock", "rock bands"],
    "The Snuts": ["The Snuts", "Scottish music", "UK music", "West Lothian music", "indie rock", "rock bands"]
};

// Original release year, not the year an older song was reissued.
// These years belong to the song in the same position as in songs[].
const releaseYears = [
    2024, 2024, 2025, 2025, 2023,
    2024, 2025, 2024, 2024, 2024, 2024, 2023,
    2022, 2022, 2023, 2023, 2023, 2023, 2024, 2021, 2020,
    2025, 2023, 2017, 2018, 2025, 2022, 2018, 2023, 2024,
    2024, 2024, 2024, 2024
];

// Album memberships are independent of the original recording years.
const albumTracks = [
    ["The K's", "I Wonder If the World Knows?", "2024 albums", [
        "Black and Blue", "No Place Like Home", "Hoping Maybe", "Chancer", "Landmines", "Icarus"
    ]],
    ["The K's", "I Wonder If the World Knows? (Deluxe Edition)", "2024 deluxe albums", [
        "Sarajevo", "Glass Towns", "Got a Feeling"
    ]],
    ["The K's", "Pretty on the Internet", "2025 albums", [
        "Rat Poison", "Me and Your Sister", "Before I Hit the Floor", "Helen, Oh I"
    ]],
    ["The Reytons", "Ballad of a Bystander", "2024 albums", [
        "Nineteen Crimes", "Adrenaline", "World's Greatest Actor", "Not Today Mate", "Knees Up"
    ]],
    ["The Reytons", "What's Rock and Roll?", "2023 albums", ["One More Reason"]],
    ["The Reytons", "Roll the Dice", "2025 albums", ["Guilt Trip"]],
    ["The Snuts", "Burn the Empire", "2022 albums", ["The Rodeo", "Knuckles"]],
    ["The Snuts", "W.L.", "2021 albums", ["Somebody Loves You", "Always"]],
    ["The Snuts", "Millennials", "2024 albums", [
        "Gloria", "Dreams", "NPC", "Deep Diving", "Millionaires",
        "Yoyo", "Butterside Down", "Novastar", "Circles"
    ]]
];

// Clarifying common song titles helps when several decades are mixed.
const questionCorrections = {
    "The K's|Black and Blue": "Which English indie rock band recorded 'Black and Blue' for I Wonder If the World Knows?",
    "The K's|No Place Like Home": "Which Warrington-area indie band recorded 'No Place Like Home' on its 2024 debut album?",
    "The Reytons|Guilt Trip": "Which Yorkshire indie band released 'Guilt Trip' in 2025?",
    "The Snuts|Gloria": "Which Scottish indie band recorded 'Gloria' for the album Millennials?",
    "The Snuts|Dreams": "Which Scottish indie band recorded 'Dreams' for the album Millennials?",
    "The Snuts|Always": "Which Scottish indie band recorded 'Always' for the album W.L.?",
    "The Snuts|Millionaires": "Which Scottish band recorded 'Millionaires' for its 2024 album Millennials?",
    "The Snuts|Circles": "Which Scottish indie band recorded 'Circles' for its 2024 album Millennials?"
};

// The first error slot becomes an album question, and the second a
// band-member question, rather than another artist-of-song question.
const specialQuestions = {
    21: {
        question: "Which album by The K's includes the song 'Before I Hit the Floor'?",
        correctAnswer: "Pretty on the Internet",
        answers: ["Pretty on the Internet", "I Wonder If the World Knows?", "Millennials", "Ballad of a Bystander"],
        extraTags: ["album identification", "2025 albums", "Pretty on the Internet"]
    },
    25: {
        question: "Who is the lead singer and guitarist of The K's, the band behind 'Helen, Oh I'?",
        correctAnswer: "Jamie Boyle",
        answers: ["Jamie Boyle", "Jonny Yerrell", "Jack Cochrane", "James Smith"],
        extraTags: ["band members", "lead singers", "guitarists", "Jamie Boyle", "2025 songs"]
    }
};

function makeTags(song, artist, year, special) {
    const album = albumTracks.find(([act, , , tracks]) =>
        act === artist && tracks.includes(song)
    );
    const genre = artistTags[artist];
    if (!genre) throw new Error("Missing artist tags for " + artist);
    return [...new Set([
        year < 2020 ? "2010s" : "2020s", String(year),
        "Music", "recordings", "songs",
        ...(special ? special.extraTags : ["artist identification"]),
        ...genre,
        ...(album ? [album[1], album[2]] : []),
        ...(year < 2020 ? ["original 2010s releases", "later reissues"] : [])
    ])];
}

if (songs.length !== 34 || releaseYears.length !== 34) {
    throw new Error("Pack 139 milestone must contain exactly 34 questions");
}

const normalise = value => String(value || "")
    .toLowerCase().replace(/[^a-z0-9]/g, "");
const songKeys = new Set();
for (const [song, artist] of songs) {
    const key = normalise(song) + "|" + normalise(artist);
    if (songKeys.has(key)) throw new Error("Repeated song and artist: " + song);
    songKeys.add(key);
}

// Preserve the original distractor pool and answer rotation for the
// 32 original artist-identification questions.
const artistPool = [
    "The K's", "The Reytons", "The Snuts", "Wet Leg", "Jungle",
    "Djo", "Måneskin", "RAYE", "The Last Dinner Party",
    "Fontaines D.C.", "Blossoms", "Nothing But Thieves"
];

function rotateAnswers(answers, index) {
    const shift = index % 4;
    return [...answers.slice(shift), ...answers.slice(0, shift)];
}

const quizPack139 = songs.map(([song, artist], index) => {
    const special = specialQuestions[index];
    const otherArtists = artistPool.filter(name => name !== artist);
    const start = (index * 7) % otherArtists.length;
    const wrongAnswers = [0, 1, 2].map(i =>
        otherArtists[(start + i) % otherArtists.length]
    );
    const correctAnswer = special ? special.correctAnswer : artist;
    return {
        id: "music_" + (11967 + index),
        category: "Music",
        question: special ? special.question :
            (questionCorrections[`${artist}|${song}`] ||
                "Which artist recorded '" + song + "'?"),
        answers: rotateAnswers(special ? special.answers :
            [artist, ...wrongAnswers], index),
        correctAnswer,
        difficulty: index % 3 === 0 ? "Easy" : "Medium",
        tags: makeTags(song, artist, releaseYears[index], special),
        dailyEligible: true
    };
});

for (const [index, question] of quizPack139.entries()) {
    if (question.id !== "music_" + (11967 + index) ||
        question.answers.length !== 4 ||
        new Set(question.answers).size !== 4 ||
        !question.answers.includes(question.correctAnswer) ||
        !Array.isArray(question.tags) || question.tags.length < 7 ||
        question.dailyEligible !== true) {
        throw new Error("Pack 139 validation failed at " + question.id);
    }
}
if (quizPack139[33].id !== "music_12000") {
    throw new Error("Pack 139 must finish at music_12000");
}

module.exports = quizPack139;
