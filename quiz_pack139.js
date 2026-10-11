//
// quiz_pack139.js
// PuzzlePilot - Music Quiz
// Special 12,000-question milestone pack
// Questions music_11967 to music_12000
//

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
    ["Jigsaw", "The K's"],
    ["Chancer", "The K's"],
    ["Sarajevo", "The K's"],
    ["Glass Towns", "The K's"],
    ["Take Me Out", "The K's"],
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

// =====================================================
// SOURCE VALIDATION
// =====================================================

if (songs.length !== 34) {
    throw new Error(
        "Pack 139 must contain exactly 34 songs. Found: " +
        songs.length
    );
}

const normalise = value => String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

const songKeys = new Set();

for (const [song, artist] of songs) {

    const key =
        normalise(song) + "|" + normalise(artist);

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
// Include additional genuine artists as distractors.
// =====================================================

const artistPool = [
    "The K's",
    "The Reytons",
    "The Snuts",
    "Wet Leg",
    "Jungle",
    "Djo",
    "Måneskin",
    "RAYE",
    "The Last Dinner Party",
    "Fontaines D.C.",
    "Blossoms",
    "Nothing But Thieves"
];

// =====================================================
// GENERATE QUESTIONS
// =====================================================

const quizPack139 = songs.map(([song, artist], index) => {

    const otherArtists = artistPool.filter(
        name => name !== artist
    );

    const start =
        (index * 7) % otherArtists.length;

    const wrongAnswers = [0, 1, 2].map(i =>
        otherArtists[
            (start + i) % otherArtists.length
        ]
    );

    const answers = [
        artist,
        ...wrongAnswers
    ];

    const shift = index % 4;

    const rotatedAnswers = [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];

    return {
        id: "music_" + (11967 + index),
        category: "Music",
        question:
            "Which artist recorded '" + song + "'?",
        answers: rotatedAnswers,
        correctAnswer: artist
    };

});

// =====================================================
// FINAL VALIDATION
// =====================================================

for (const question of quizPack139) {

    if (question.answers.length !== 4) {
        throw new Error(
            "Incorrect answer count: " +
            question.id
        );
    }

    if (!question.answers.includes(
        question.correctAnswer
    )) {
        throw new Error(
            "Correct answer missing: " +
            question.id
        );
    }

    if (new Set(question.answers).size !== 4) {
        throw new Error(
            "Repeated answer choices: " +
            question.id
        );
    }
}

if (quizPack139[0].id !== "music_11967" ||
    quizPack139[33].id !== "music_12000") {
    throw new Error(
        "Pack 139 question IDs are incorrect."
    );
}

module.exports = quizPack139;
