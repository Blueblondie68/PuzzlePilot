
//
// quiz_pack140.js
// PuzzlePilot - Music Quiz
// Pack 140: Music of the 2020s
// Questions music_12001 to music_12100
//

const songs = [

    // =====================================================
    // DANCE AND POP
    // =====================================================

    // Joel Corry
    ["Lonely", "Joel Corry"],
    ["Sorry", "Joel Corry"],
    ["Out Out", "Joel Corry and Jax Jones"],
    ["I Wish", "Joel Corry and Mabel"],
    ["Lionheart (Fearless)", "Joel Corry and Tom Grennan"],
    ["Dance Around It", "Joel Corry and Caity Baser"],
    ["History", "Joel Corry and Becky Hill"],

    // Nathan Dawe
    ["Flowers", "Nathan Dawe and Jaykae"],
    ["Lighter", "Nathan Dawe and KSI"],
    ["No Time for Tears", "Nathan Dawe and Little Mix"],
    ["Goodbye", "Nathan Dawe and Talia Mar"],
    ["We Ain't Here for Long", "Nathan Dawe"],
    ["Heart Still Beating", "Nathan Dawe and Bebe Rexha"],
    ["Ten (Get Back Up)", "Nathan Dawe and MNEK"],
    ["Here in Your Arms", "Nathan Dawe and Talia Mar"],
    ["Way Too Long", "Nathan Dawe, Anne-Marie and MoStack"],

    // Topic
    ["Breaking Me", "Topic and A7S"],
    ["Your Love (9PM)", "ATB, Topic and A7S"],
    ["Kernkraft 400 (A Better Day)", "Topic and A7S"],
    ["Chain My Heart", "Topic and Bebe Rexha"],
    ["In Your Arms (For an Angel)", "Topic, Robin Schulz and Nico Santos"],
    ["Why Do You Lie to Me", "Topic, A7S and Lil Baby"],
    ["All or Nothing", "Topic and HRVY"],
    ["Saving Me", "Topic and Sasha Alex Sloan"],
    ["I Adore You", "HUGEL, Topic and Arash"],
    ["Lucid Dream", "Topic"],

    // LF SYSTEM
    ["Hungry (For Love)", "LF SYSTEM"],
    ["Dancing Shoes (Take Me Higher)", "LF SYSTEM"],
    ["All I've Got", "LF SYSTEM"],
    ["Meet Me in the Middle", "LF SYSTEM"],

    // Eliza Rose
    ["Take You There", "Eliza Rose"],
    ["Pleasure Peak", "Eliza Rose"],
    ["Body Moving", "Eliza Rose and Calvin Harris"],
    ["Better Love", "Eliza Rose"],

    // Becky Hill
    ["Crazy What Love Can Do", "David Guetta, Becky Hill and Ella Henderson"],
    ["Remember", "Becky Hill and David Guetta"],
    ["My Heart Goes (La Di Da)", "Becky Hill and Topic"],
    ["Disconnect", "Becky Hill and Chase & Status"],
    ["Multiply", "Becky Hill"],

    // =====================================================
    // BRITISH INDIE AND ROCK
    // =====================================================

    // Sam Fender
    ["Long Way Off", "Sam Fender"],
    ["Remember My Name", "Sam Fender"],
    ["Wild Long Lie", "Sam Fender"],

    // Nothing But Thieves
    ["City Haunts", "Nothing But Thieves"],
    ["Moral Panic", "Nothing But Thieves"],
    ["Unperson", "Nothing But Thieves"],

    // The Last Dinner Party
    ["On Your Side", "The Last Dinner Party"],
    ["Burn Alive", "The Last Dinner Party"],
    ["Mirror", "The Last Dinner Party"],
    ["Gjuha", "The Last Dinner Party"],
    ["Beautiful Boy", "The Last Dinner Party"],

    // Blossoms
    ["If You Think This Is Real Life", "Blossoms"],
    ["Oh No (I Think I'm in Love)", "Blossoms"],
    ["Care For", "Blossoms"],
    ["Ribbon Around the Bomb", "Blossoms"],
    ["Ode to NYC", "Blossoms"],
    ["Gary", "Blossoms"],
    ["Perfect Me", "Blossoms"],
    ["What Can I Say After I'm Sorry?", "Blossoms"],

    // Wolf Alice
    ["Play the Greatest Hits", "Wolf Alice"],
    ["Lipstick on the Glass", "Wolf Alice"],
    ["Feeling Myself", "Wolf Alice"],
    ["No Hard Feelings", "Wolf Alice"],
    ["Safe from Heartbreak (If You Never Fall in Love)", "Wolf Alice"],

    // =====================================================
    // R&B, SOUL AND ALTERNATIVE POP
    // =====================================================

    // SZA
    ["I Hate U", "SZA"],
    ["Blind", "SZA"],
    ["Gone Girl", "SZA"],
    ["Seek & Destroy", "SZA"],
    ["F2F", "SZA"],

    // Victoria Monet
    ["How Does It Make You Feel", "Victoria Monét"],
    ["Cadillac (A Pimp's Anthem)", "Victoria Monét"],
    ["Hollywood", "Victoria Monét"],
    ["Coastin'", "Victoria Monét"],
    ["Moment", "Victoria Monét"],
    ["Ass Like That", "Victoria Monét"],

    // Tyla
    ["On and On", "Tyla"],
    ["Safer", "Tyla"],
    ["Butterflies", "Tyla"],
    ["Been Thinking", "Tyla"],
    ["Chanel", "Tyla"],

    // PinkPantheress
    ["Boy's a Liar", "PinkPantheress"],
    ["Passion", "PinkPantheress"],
    ["I Must Apologise", "PinkPantheress"],
    ["Mosquito", "PinkPantheress"],
    ["Capable of Love", "PinkPantheress"],
    ["Nice to Meet You", "PinkPantheress"],

    // Olivia Dean
    ["Be My Own Boyfriend", "Olivia Dean"],
    ["Reason to Stay", "Olivia Dean"],
    ["Danger", "Olivia Dean"],
    ["OK Love You Bye", "Olivia Dean"],

    // RAYE
    ["Flip a Switch.", "RAYE"],
    ["Where Is My Husband!", "RAYE"],
    ["Suzanne", "Mark Ronson and RAYE"],

    // =====================================================
    // FINAL EIGHT
    // =====================================================

    // Tom Grennan
    ["Wasted", "Tom Grennan"],
    ["Here", "Tom Grennan"],
    ["Remind Me", "Tom Grennan"],
    ["All These Nights", "Tom Grennan"],
    ["How Does It Feel", "Tom Grennan"],

    // Lewis Capaldi
    ["Strangers", "Lewis Capaldi"],
    ["Heavenly Kind of State of Mind", "Lewis Capaldi"],

    // Cat Burns
    ["Golden", "Cat Burns"]

];

// =====================================================
// SOURCE VALIDATION
// =====================================================

if (songs.length !== 100) {
    throw new Error(
        "Pack 140 must contain exactly 100 songs. Found: " +
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

const quizPack140 = songs.map(([song, artist], index) => {

    const otherArtists = artistPool.filter(
        name => name !== artist
    );

    const start =
        (index * 7) % otherArtists.length;

    const wrongAnswers = [];

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

    const shift = index % 4;

    const rotatedAnswers = [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];

    return {
        id: "music_" + (12001 + index),
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

for (const question of quizPack140) {

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

if (
    quizPack140[0].id !== "music_12001" ||
    quizPack140[99].id !== "music_12100"
) {
    throw new Error(
        "Pack 140 question IDs are incorrect."
    );
}

module.exports = quizPack140;
