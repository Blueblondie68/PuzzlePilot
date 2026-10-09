
//
// quiz_pack132.js
// PuzzlePilot Big Quiz
// Music Pack 132 - Final 2010s Songs
// Questions music_11267 to music_11366
//

const songs = [

    // JUNGLE
    ["The Heat", "Jungle"],
    ["Julia", "Jungle"],
    ["Heavy, California", "Jungle"],

    // LITTLE DRAGON
    ["Ritual Union", "Little Dragon"],
    ["Little Man", "Little Dragon"],
    ["Klapp Klapp", "Little Dragon"],
    ["Paris", "Little Dragon"],
    ["High", "Little Dragon"],

    // BON IVER
    ["Holocene", "Bon Iver"],
    ["Perth", "Bon Iver"],
    ["Towers", "Bon Iver"],
    ["Calgary", "Bon Iver"],
    ["Minnesota, WI", "Bon Iver"],
    ["33 GOD", "Bon Iver"],
    ["715 CREEKS", "Bon Iver"],
    ["22 OVER SOON", "Bon Iver"],
    ["8 circle", "Bon Iver"],
    ["Faith", "Bon Iver"],

    // BEACH HOUSE
    ["Myth", "Beach House"],
    ["Lazuli", "Beach House"],
    ["Wild", "Beach House"],
    ["Wishes", "Beach House"],
    ["Space Song", "Beach House"],
    ["Sparks", "Beach House"],
    ["PPP", "Beach House"],
    ["Lemon Glow", "Beach House"],
    ["Dive", "Beach House"],
    ["Dark Spring", "Beach House"],

    // MAC DEMARCO
    ["Chamber of Reflection", "Mac DeMarco"],
    ["Salad Days", "Mac DeMarco"],
    ["Passing Out Pieces", "Mac DeMarco"],
    ["Let Her Go", "Mac DeMarco"],
    ["The Way You'd Love Her", "Mac DeMarco"],
    ["Another One", "Mac DeMarco"],
    ["Ode to Viceroy", "Mac DeMarco"],
    ["My Kind of Woman", "Mac DeMarco"],
    ["On the Level", "Mac DeMarco"],
    ["Nobody", "Mac DeMarco"],

    // TAME IMPALA
    ["New Person, Same Old Mistakes", "Tame Impala"],
    ["The Less I Know the Better", "Tame Impala"],
    ["Let It Happen", "Tame Impala"],
    ["Eventually", "Tame Impala"],
    ["Cause I'm a Man", "Tame Impala"],
    ["Feels Like We Only Go Backwards", "Tame Impala"],
    ["Elephant", "Tame Impala"],
    ["Mind Mischief", "Tame Impala"],
    ["Borderline", "Tame Impala"],
    ["Patience", "Tame Impala"],

    // KING GIZZARD AND THE LIZARD WIZARD
    ["Rattlesnake", "King Gizzard and the Lizard Wizard"],
    ["Gamma Knife", "King Gizzard and the Lizard Wizard"],
    ["People-Vultures", "King Gizzard and the Lizard Wizard"],
    ["Robot Stop", "King Gizzard and the Lizard Wizard"],
    ["Nuclear Fusion", "King Gizzard and the Lizard Wizard"],
    ["Crumbling Castle", "King Gizzard and the Lizard Wizard"],
    ["The River", "King Gizzard and the Lizard Wizard"],
    ["Cellophane", "King Gizzard and the Lizard Wizard"],
    ["Fishing for Fishies", "King Gizzard and the Lizard Wizard"],
    ["Mars for the Rich", "King Gizzard and the Lizard Wizard"],

    // HAIM
    ["The Wire", "HAIM"],
    ["Falling", "HAIM"],
    ["Forever", "HAIM"],
    ["Don't Save Me", "HAIM"],
    ["If I Could Change Your Mind", "HAIM"],
    ["Days Are Gone", "HAIM"],
    ["Want You Back", "HAIM"],
    ["Little of Your Love", "HAIM"],
    ["Right Now", "HAIM"],
    ["Summer Girl", "HAIM"],

    // IDLES
    ["Never Fight a Man with a Perm", "IDLES"],
    ["Danny Nedelko", "IDLES"],
    ["Colossus", "IDLES"],
    ["Mother", "IDLES"],
    ["1049 Gotho", "IDLES"],
    ["Well Done", "IDLES"],
    ["Samaritans", "IDLES"],
    ["Television", "IDLES"],
    ["Mercedes Marxist", "IDLES"],
    ["Great", "IDLES"],

    // GLASS ANIMALS
    ["Cocoa Hooves", "Glass Animals"],
    ["Black Mambo", "Glass Animals"],
    ["Pools", "Glass Animals"],
    ["Hazey", "Glass Animals"],

    // FLORENCE AND THE MACHINE
    ["No Light, No Light", "Florence and the Machine"],
    ["Spectrum", "Florence and the Machine"],
    ["Shake It Out", "Florence and the Machine"],
    ["Never Let Me Go", "Florence and the Machine"],

    // MAGGIE ROGERS
    ["Retrograde", "Maggie Rogers"],
    ["Alaska", "Maggie Rogers"],
    ["On and Off", "Maggie Rogers"],
    ["Light On", "Maggie Rogers"],
    ["Fallingwater", "Maggie Rogers"],

    // CHVRCHES
    ["Under the Tide", "CHVRCHES"],
    ["Tether", "CHVRCHES"],
    ["Science/Visions", "CHVRCHES"],
    ["We Sink", "CHVRCHES"],

    // FKA TWIGS
    ["Two Weeks", "FKA twigs"],
    ["Pendulum", "FKA twigs"],
    ["Video Girl", "FKA twigs"],
    ["Water Me", "FKA twigs"],
    ["Cellophane", "FKA twigs"]

];

// --------------------------------------------------
// CREATE FOUR ANSWER OPTIONS
// --------------------------------------------------

const artists = [
    ...new Set(
        songs.map(song => song[1])
    )
];

function makeAnswers(correctArtist, index) {

    const others = artists.filter(
        artist => artist !== correctArtist
    );

    const wrong = [
        others[index % others.length],
        others[(index + 4) % others.length],
        others[(index + 8) % others.length]
    ];

    const answers = [
        correctArtist,
        ...wrong
    ];

    const position = index % 4;

    answers.splice(0, 1);
    answers.splice(position, 0, correctArtist);

    return answers;
}

// --------------------------------------------------
// CREATE QUIZ QUESTIONS
// --------------------------------------------------

const questions = songs.map((song, index) => {

    const title = song[0];
    const artist = song[1];

    return {
        id: "music_" + (11267 + index),
        category: "Music",
        question:
            "Which artist recorded '" +
            title +
            "'?",
        answers: makeAnswers(artist, index),
        correctAnswer: artist,
        difficulty:
            index % 3 === 0
                ? "Easy"
                : "Medium",
        tags: [
            "2010s",
            "songs"
        ],
        dailyEligible: true
    };

});

module.exports = questions;
