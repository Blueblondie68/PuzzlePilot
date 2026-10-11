
//
// quiz_pack138.js
// PuzzlePilot - Music Quiz
// Pack 138: Music of the 2020s
// Questions music_11867 to music_11966
//

const songs = [

    // RAYE
    ["Ice Cream Man.", "RAYE"],

    // Lola Young
    ["Wish You Were Dead", "Lola Young"],
    ["Big Brown Eyes", "Lola Young"],

    // Jungle
    ["Dominoes", "Jungle"],
    ["Let's Go Back", "Jungle"],

    // Djo
    ["Gloom", "Djo"],
    ["Figure You Out", "Djo"],

    // Shaboozey
    ["Let It Burn", "Shaboozey"],
    ["Last of My Kind", "Shaboozey"],

    // Hozier
    ["De Selby (Part 2)", "Hozier"],

    // Noah Kahan
    ["Northern Attitude", "Noah Kahan"],
    ["Homesick", "Noah Kahan"],
    ["You're Gonna Go Far", "Noah Kahan"],

    // Teddy Swims
    ["Funeral", "Teddy Swims"],

    // Alex Warren
    ["Bloodline", "Alex Warren and Jelly Roll"],
    ["Eternity", "Alex Warren"],

    // Kenya Grace
    ["Paris", "Kenya Grace"],
    ["Only in My Mind", "Kenya Grace"],
    ["Someone Else", "Kenya Grace"],
    ["Afterparty Lover", "Kenya Grace"],

    // Dance and electronic
    ["Drugs from Amsterdam", "Mau P"],
    ["Where You Are", "John Summit and Hayla"],
    ["Shiver", "John Summit and Hayla"],
    ["Green & Gold", "Rudimental and Skepsis"],
    ["Dancing Is Healing",
        "Rudimental, Charlotte Plank and Vibe Chemistry"],
    ["Alibi", "Ella Henderson and Rudimental"],

    // Tom Odell
    ["Black Friday", "Tom Odell"],
    ["Best Day of My Life", "Tom Odell"],

    // Lizzy McAlpine
    ["Erase Me", "Lizzy McAlpine and Jacob Collier"],
    ["Doomsday", "Lizzy McAlpine"],

    // beabadoobee
    ["Glue Song", "beabadoobee"],
    ["The Perfect Pair", "beabadoobee"],
    ["Take a Bite", "beabadoobee"],
    ["Beaches", "beabadoobee"],
    ["Ever Seen", "beabadoobee"],

    // Clairo
    ["Amoeba", "Clairo"],
    ["Sexy to Someone", "Clairo"],
    ["Juna", "Clairo"],

    // Addison Rae
    ["Diet Pepsi", "Addison Rae"],
    ["Aquamarine", "Addison Rae"],
    ["Headphones On", "Addison Rae"],
    ["Fame Is a Gun", "Addison Rae"],
    ["High Fashion", "Addison Rae"],

    // Gracie Abrams
    ["That's So True", "Gracie Abrams"],
    ["I Love You, I'm Sorry", "Gracie Abrams"],
    ["Risk", "Gracie Abrams"],
    ["Close to You", "Gracie Abrams"],
    ["Where Do We Go Now?", "Gracie Abrams"],

    // Dasha
    ["Austin", "Dasha"],
    ["Didn't I", "Dasha"],
    ["Bye Bye Bye", "Dasha"],
    ["Not at This Party", "Dasha"],
    ["Heartbreaker from Tennessee", "Dasha"],

    // Luke Combs
    ["Ain't No Love in Oklahoma", "Luke Combs"],
    ["Fast Car", "Luke Combs"],
    ["Where the Wild Things Are", "Luke Combs"],
    ["Love You Anyway", "Luke Combs"],
    ["The Kind of Love We Make", "Luke Combs"],

    // Morgan Wallen
    ["Last Night", "Morgan Wallen"],
    ["Thinkin' Bout Me", "Morgan Wallen"],
    ["You Proof", "Morgan Wallen"],
    ["One Thing at a Time", "Morgan Wallen"],
    ["Cowgirls", "Morgan Wallen and ERNEST"],

    // Post Malone
    ["I Had Some Help", "Post Malone and Morgan Wallen"],
    ["Pour Me a Drink", "Post Malone and Blake Shelton"],
    ["Guy for That", "Post Malone and Luke Combs"],
    ["What Don't Belong to Me", "Post Malone"],
    ["Losers", "Post Malone and Jelly Roll"],

    // Zach Bryan
    ["Pink Skies", "Zach Bryan"],
    ["Something in the Orange", "Zach Bryan"],
    ["I Remember Everything",
        "Zach Bryan and Kacey Musgraves"],
    ["Nine Ball", "Zach Bryan"],
    ["28", "Zach Bryan"],

    // Beyoncé
    ["Texas Hold 'Em", "Beyoncé"],
    ["16 Carriages", "Beyoncé"],
    ["II Most Wanted", "Beyoncé and Miley Cyrus"],
    ["Ya Ya", "Beyoncé"],
    ["Bodyguard", "Beyoncé"],

    // Eurovision 2024
    ["The Code", "Nemo"],
    ["Rim Tim Tagi Dim", "Baby Lasagna"],
    ["Europapa", "Joost Klein"],
    ["Teresa & Maria", "alyona alyona and Jerry Heil"],
    ["Zorra", "Nebulossa"],

    // Eurovision 2023
    ["Tattoo", "Loreen"],
    ["Queen of Kings", "Alessandra"],
    ["Cha Cha Cha", "Käärijä"],
    ["Who the Hell Is Edgar?", "Teya and Salena"],
    ["Promise", "Voyager"],

    // Måneskin
    ["The Loneliest", "Måneskin"],
    ["Gossip", "Måneskin and Tom Morello"],
    ["Honey (Are U Coming?)", "Måneskin"],
    ["Baby Said", "Måneskin"],
    ["Valentine", "Måneskin"],

    // Wet Leg
    ["Oh No", "Wet Leg"],
    ["Supermarket", "Wet Leg"],
    ["Piece of Shit", "Wet Leg"],
    ["Convincing", "Wet Leg"],

    // The Reytons
    ["Let Me Breathe", "The Reytons"],
    ["Market Street", "The Reytons"],
    ["Listen", "The Reytons"]

];

// =====================================================
// SOURCE VALIDATION
// =====================================================

if (songs.length !== 100) {
    throw new Error(
        "Pack 138 must contain exactly 100 songs. Found: " +
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

const quizPack138 = songs.map((entry, index) => {

    const [song, artist] = entry;

    const otherArtists = artistPool.filter(
        name => name !== artist
    );

    const wrongAnswers = [];

    // Vary the starting point for each question.

    const start =
        (index * 7) % otherArtists.length;

    // Three distinct incorrect answers.

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

    // Rotate the correct answer position.

    const shift = index % 4;

    const rotatedAnswers = [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];

    return {
        id: "music_" + (11867 + index),
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

for (const question of quizPack138) {

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

module.exports = quizPack138;
