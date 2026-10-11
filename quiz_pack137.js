
//
// quiz_pack137.js
// PuzzlePilot - Music Quiz
// Pack 137: Music of the 2020s
// Questions music_11767 to music_11866
//

const songs = [

    // Sam Fender
    ["Getting Started", "Sam Fender"],
    ["The Dying Light", "Sam Fender"],
    ["Wild Grey Ocean", "Sam Fender"],

    // The Last Dinner Party
    ["Nothing Matters", "The Last Dinner Party"],
    ["Sinner", "The Last Dinner Party"],
    ["My Lady of Mercy", "The Last Dinner Party"],
    ["The Feminine Urge", "The Last Dinner Party"],
    ["Caesar on a TV Screen", "The Last Dinner Party"],

    // Wolf Alice
    ["The Beach", "Wolf Alice"],
    ["How Can I Make It OK?", "Wolf Alice"],
    ["The Last Man on Earth", "Wolf Alice"],
    ["Delicious Things", "Wolf Alice"],

    // Royal Blood
    ["Trouble's Coming", "Royal Blood"],
    ["Typhoons", "Royal Blood"],
    ["Boilermaker", "Royal Blood"],
    ["Mountains at Midnight", "Royal Blood"],
    ["Pull Me Through", "Royal Blood"],

    // Blur
    ["The Heights", "Blur"],

    // Fontaines D.C.
    ["A Hero's Death", "Fontaines D.C."],
    ["Skinty Fia", "Fontaines D.C."],
    ["Nabokov", "Fontaines D.C."],
    ["Big Shot", "Fontaines D.C."],

    // The Beaches
    ["Blame Brett", "The Beaches"],
    ["Edge of the Earth", "The Beaches"],

    // Yard Act
    ["The Overload", "Yard Act"],
    ["Fixer Upper", "Yard Act"],
    ["Land of the Blind", "Yard Act"],
    ["Dream Job", "Yard Act"],
    ["We Make Hits", "Yard Act"],

    // IDLES
    ["Model Village", "IDLES"],
    ["Car Crash", "IDLES"],
    ["The Beachland Ballroom", "IDLES"],
    ["Dancer", "IDLES"],
    ["Gift Horse", "IDLES"],

    // Dry Cleaning
    ["Scratchcard Lanyard", "Dry Cleaning"],
    ["Strong Feelings", "Dry Cleaning"],
    ["Unsmart Lady", "Dry Cleaning"],
    ["Gary Ashby", "Dry Cleaning"],
    ["Hot Penny Day", "Dry Cleaning"],

    // Shame
    ["Snow Day", "Shame"],
    ["Water in the Well", "Shame"],
    ["Adderall", "Shame"],
    ["Fingers of Steel", "Shame"],
    ["Six-Pack", "Shame"],

    // Black Country, New Road
    ["Concorde", "Black Country, New Road"],
    ["Chaos Space Marine", "Black Country, New Road"],
    ["The Place Where He Inserted the Blade",
        "Black Country, New Road"],
    ["Up Song", "Black Country, New Road"],
    ["Across the Pond Friend", "Black Country, New Road"],
    ["Bread Song", "Black Country, New Road"],
    ["Good Will Hunting", "Black Country, New Road"],
    ["Basketball Shoes", "Black Country, New Road"],

    // The Dare
    ["Perfume", "The Dare"],
    ["Girls", "The Dare"],
    ["Good Time", "The Dare"],
    ["All Night", "The Dare"],
    ["You're Invited", "The Dare"],

    // Jack White
    ["Love Is Selfish", "Jack White"],
    ["Taking Me Back", "Jack White"],
    ["What's the Trick?", "Jack White"],
    ["A Tip from You to Me", "Jack White"],
    ["That Was Then (This Is Now)", "Jack White"],

    // The Strokes
    ["Ode to the Mets", "The Strokes"],
    ["Selfless", "The Strokes"],

    // Bring Me the Horizon
    ["Lost", "Bring Me the Horizon"],
    ["Kool-Aid", "Bring Me the Horizon"],
    ["DArkSide", "Bring Me the Horizon"],
    ["Teardrops", "Bring Me the Horizon"],
    ["Parasite Eve", "Bring Me the Horizon"],

    // Blink-182
    ["Edging", "Blink-182"],
    ["One More Time", "Blink-182"],
    ["Dance with Me", "Blink-182"],
    ["More Than You Know", "Blink-182"],
    ["All in My Head", "Blink-182"],

    // The Black Keys
    ["Beautiful People", "The Black Keys"],
    ["Wild Child", "The Black Keys"],
    ["It Ain't Over", "The Black Keys"],
    ["On the Game", "The Black Keys"],

    // The Killers
    ["Your Side of Town", "The Killers"],
    ["Boy", "The Killers"],
    ["Spirit", "The Killers"],
    ["Caution", "The Killers"],
    ["Dying Breed", "The Killers"],

    // Muse
    ["We Are Fucking Fucked", "Muse"],

    // Nothing But Thieves
    ["Welcome to the DCC", "Nothing But Thieves"],
    ["Overcome", "Nothing But Thieves"],
    ["Tomorrow Is Closed", "Nothing But Thieves"],
    ["Keeping You Around", "Nothing But Thieves"],
    ["Oh No :: He Said What?", "Nothing But Thieves"],
    ["Is Everybody Going Crazy?", "Nothing But Thieves"],
    ["Impossible", "Nothing But Thieves"],
    ["Real Love Song", "Nothing But Thieves"],
    ["Futureproof", "Nothing But Thieves"],
    ["Life's Coming in Slow", "Nothing But Thieves"],

    // The Snuts
    ["Fatboy Slim", "The Snuts"],
    ["Coffee & Cigarettes", "The Snuts"],
    ["Elephants", "The Snuts"],
    ["Burn the Empire", "The Snuts"],
    ["Zuckerpunch", "The Snuts"],
    ["End of the Road", "The Snuts"]

];

// =====================================================
// SOURCE VALIDATION
// =====================================================

if (songs.length !== 100) {
    throw new Error(
        "Pack 137 must contain exactly 100 songs. Found: " +
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

const quizPack137 = songs.map((entry, index) => {

    const [song, artist] = entry;

    const otherArtists = artistPool.filter(
        name => name !== artist
    );

    const wrongAnswers = [];

    // Vary the starting position for each question.

    const start =
        (index * 7) % otherArtists.length;

    // Take three consecutive distinct artists.
    // This avoids repeating an incorrect answer.

    for (let i = 0; i < 3; i++) {

        const position =
            (start + i) % otherArtists.length;

        wrongAnswers.push(
            otherArtists[position]
        );
    }

    const answers = [
        artist,
        ...wrongAnswers
    ];

    // Rotate correct answers across positions.

    const shift = index % 4;

    const rotatedAnswers = [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];

    return {
        id: "music_" + (11767 + index),
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

for (const question of quizPack137) {

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

module.exports = quizPack137;
