//
// quiz_pack132.js
// PuzzlePilot Big Quiz
// Music Pack 132 - 2010s Indie, Alternative and Electronic
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
    ["Ceremonials", "Florence and the Machine"],
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

// Artist metadata is expanded into every question at load time.
// Original answers, IDs and difficulty settings remain unchanged.
const artistTags = {
    "Jungle": ["Jungle", "UK music", "London music", "neo soul", "funk", "electronic soul", "bands"],
    "Little Dragon": ["Little Dragon", "Swedish music", "Gothenburg music", "electropop", "synthpop", "electronic soul", "bands", "Yukimi Nagano"],
    "Bon Iver": ["Bon Iver", "American music", "Wisconsin music", "indie folk", "experimental folk", "indie rock", "Justin Vernon", "bands"],
    "Beach House": ["Beach House", "American music", "Baltimore music", "dream pop", "indie pop", "shoegaze", "musical duos"],
    "Mac DeMarco": ["Mac DeMarco", "Canadian music", "indie rock", "jangle pop", "slacker rock", "singer-songwriters"],
    "Tame Impala": ["Tame Impala", "Australian music", "Perth music", "psychedelic rock", "psychedelic pop", "Kevin Parker", "music producers"],
    "King Gizzard and the Lizard Wizard": ["King Gizzard and the Lizard Wizard", "Australian music", "Melbourne music", "psychedelic rock", "progressive rock", "garage rock", "rock bands"],
    "HAIM": ["HAIM", "American music", "Los Angeles music", "pop rock", "indie pop", "sister groups", "rock bands"],
    "IDLES": ["IDLES", "UK music", "Bristol music", "post-punk", "punk rock", "alternative rock", "rock bands"],
    "Glass Animals": ["Glass Animals", "UK music", "Oxford music", "psychedelic pop", "indie pop", "electronic rock", "rock bands"],
    "Florence and the Machine": ["Florence and the Machine", "Florence + the Machine", "UK music", "indie rock", "art pop", "baroque pop", "Florence Welch", "rock bands"],
    "Maggie Rogers": ["Maggie Rogers", "American music", "indie pop", "folk pop", "singer-songwriters", "female vocalists"],
    "CHVRCHES": ["CHVRCHES", "Scottish music", "UK music", "synthpop", "electropop", "electronic music", "bands"],
    "FKA twigs": ["FKA twigs", "UK music", "alternative R&B", "art pop", "electronic music", "singer-songwriters", "female vocalists"]
};

// Album information is attached to each relevant recording.
// Album release year tags refer to the ALBUM, not necessarily the
// original release year of a single.
const albumTracks = [
    ["Jungle", "Jungle", "2014 albums", ["The Heat", "Julia"]],
    ["Jungle", "For Ever", "2018 albums", ["Heavy, California"]],
    ["Little Dragon", "Ritual Union", "2011 albums", ["Ritual Union", "Little Man"]],
    ["Little Dragon", "Nabuma Rubberband", "2014 albums", ["Klapp Klapp", "Paris"]],
    ["Little Dragon", "Season High", "2017 albums", ["High"]],
    ["Bon Iver", "Bon Iver, Bon Iver", "2011 albums", ["Holocene", "Perth", "Towers", "Calgary", "Minnesota, WI"]],
    ["Bon Iver", "22, A Million", "2016 albums", ["33 GOD", "715 CREEKS", "22 OVER SOON", "8 circle"]],
    ["Bon Iver", "i,i", "2019 albums", ["Faith"]],
    ["Beach House", "Bloom", "2012 albums", ["Myth", "Lazuli", "Wild", "Wishes"]],
    ["Beach House", "Depression Cherry", "2015 albums", ["Space Song", "Sparks", "PPP"]],
    ["Beach House", "7", "2018 albums", ["Lemon Glow", "Dive", "Dark Spring"]],
    ["Mac DeMarco", "Salad Days", "2014 albums", ["Chamber of Reflection", "Salad Days", "Passing Out Pieces", "Let Her Go"]],
    ["Mac DeMarco", "Another One", "2015 releases", ["The Way You'd Love Her", "Another One"]],
    ["Mac DeMarco", "2", "2012 albums", ["Ode to Viceroy", "My Kind of Woman"]],
    ["Mac DeMarco", "This Old Dog", "2017 albums", ["On the Level"]],
    ["Mac DeMarco", "Here Comes the Cowboy", "2019 albums", ["Nobody"]],
    ["Tame Impala", "Currents", "2015 albums", ["New Person, Same Old Mistakes", "The Less I Know the Better", "Let It Happen", "Eventually", "Cause I'm a Man"]],
    ["Tame Impala", "Lonerism", "2012 albums", ["Feels Like We Only Go Backwards", "Elephant", "Mind Mischief"]],
    ["King Gizzard and the Lizard Wizard", "Flying Microtonal Banana", "2017 albums", ["Rattlesnake", "Nuclear Fusion"]],
    ["King Gizzard and the Lizard Wizard", "Nonagon Infinity", "2016 albums", ["Gamma Knife", "People-Vultures", "Robot Stop"]],
    ["King Gizzard and the Lizard Wizard", "Polygondwanaland", "2017 albums", ["Crumbling Castle"]],
    ["King Gizzard and the Lizard Wizard", "Quarters!", "2015 albums", ["The River"]],
    ["King Gizzard and the Lizard Wizard", "I'm in Your Mind Fuzz", "2014 albums", ["Cellophane"]],
    ["King Gizzard and the Lizard Wizard", "Fishing for Fishies", "2019 albums", ["Fishing for Fishies"]],
    ["King Gizzard and the Lizard Wizard", "Infest the Rats' Nest", "2019 albums", ["Mars for the Rich"]],
    ["HAIM", "Days Are Gone", "2013 albums", ["The Wire", "Falling", "Forever", "Don't Save Me", "If I Could Change Your Mind", "Days Are Gone"]],
    ["HAIM", "Something to Tell You", "2017 albums", ["Want You Back", "Little of Your Love", "Right Now"]],
    ["IDLES", "Joy as an Act of Resistance", "2018 albums", ["Never Fight a Man with a Perm", "Danny Nedelko", "Colossus", "Samaritans", "Television", "Great"]],
    ["IDLES", "Brutalism", "2017 albums", ["Mother", "1049 Gotho", "Well Done"]],
    ["Glass Animals", "Zaba", "2014 albums", ["Cocoa Hooves", "Black Mambo", "Pools", "Hazey"]],
    ["Florence and the Machine", "Ceremonials", "2011 albums", ["Ceremonials", "Spectrum", "Shake It Out", "Never Let Me Go"]],
    ["Maggie Rogers", "Heard It in a Past Life", "2019 albums", ["Retrograde", "Alaska", "On and Off", "Light On", "Fallingwater"]],
    ["CHVRCHES", "The Bones of What You Believe", "2013 albums", ["Under the Tide", "Tether", "Science/Visions", "We Sink"]],
    ["FKA twigs", "LP1", "2014 albums", ["Two Weeks", "Pendulum", "Video Girl"]],
    ["FKA twigs", "EP2", "2013 EPs", ["Water Me"]],
    ["FKA twigs", "Magdalene", "2019 albums", ["Cellophane"]]
];

const recordingTags = {
    "Bon Iver|33 GOD": ["33 GOD", "33 G O D", "22, A Million", "stylised song titles"],
    "Bon Iver|715 CREEKS": ["715 - CRΣΣKS", "stylised song titles"],
    "Bon Iver|22 OVER SOON": ["22 (OVER S∞∞N)", "stylised song titles"],
    "Bon Iver|8 circle": ["8 (circle)", "stylised song titles"],
    "Tame Impala|Borderline": ["2019 singles", "The Slow Rush", "2020 albums"],
    "Tame Impala|Patience": ["2019 singles", "non-album singles"],
    "HAIM|Summer Girl": ["2019 singles", "Women in Music Pt. III", "2020 albums"],
    "IDLES|Mercedes Marxist": ["2019 singles", "non-album singles"],
    "Florence and the Machine|Ceremonials": ["album identification", "studio albums", "2011 albums"],
    "Maggie Rogers|Alaska": ["2016 singles", "2019 albums"],
    "King Gizzard and the Lizard Wizard|Cellophane": ["2014 songs", "psychedelic rock"],
    "FKA twigs|Cellophane": ["2019 singles", "alternative R&B"]
};

// The song 'No Light, No Light' repeats a Pack 128 question.
// Replace that recording question with an album question using
// the same correct answer, options, ID, difficulty and eligibility.
const questionCorrections = {
    82: "Which British band released the album 'Ceremonials'?"
};

function makeTags(title, artist) {
    const album = albumTracks.find(
        ([albumArtist, , , tracks]) =>
            albumArtist === artist && tracks.includes(title)
    );
    const isAlbumQuestion = artist === "Florence and the Machine" && title === "Ceremonials";
    return [...new Set([
        "2010s",
        isAlbumQuestion ? "albums" : "songs",
        isAlbumQuestion ? "album identification" : "artist identification",
        isAlbumQuestion ? "studio albums" : "recordings",
        ...artistTags[artist],
        ...(album ? [album[1], album[2]] : []),
        ...(recordingTags[`${artist}|${title}`] || [])
    ])];
}

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
            questionCorrections[index] ||
            "Which artist recorded '" +
            title +
            "'?",
        answers: makeAnswers(artist, index),
        correctAnswer: artist,
        difficulty:
            index % 3 === 0
                ? "Easy"
                : "Medium",
        tags: makeTags(title, artist),
        dailyEligible: true
    };

});

module.exports = questions;
