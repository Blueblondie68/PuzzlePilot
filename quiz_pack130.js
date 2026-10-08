
//
// quiz_pack130.js
// PuzzlePilot Big Quiz
// Music Pack 130 — 2010s Indie & Alternative
// Questions music_11067 to music_11166
//

const songs = [

    // ARCTIC MONKEYS
    ["Brick by Brick", "Arctic Monkeys"],
    ["The Hellcat Spangled Shalalala", "Arctic Monkeys"],
    ["Suck It and See", "Arctic Monkeys"],
    ["Black Treacle", "Arctic Monkeys"],

    // BOMBAY BICYCLE CLUB — REPLACEMENT
    ["Home by Now", "Bombay Bicycle Club"],

    // THE 1975
    ["Menswear", "The 1975"],
    ["Loving Someone", "The 1975"],
    ["Love It If We Made It", "The 1975"],
    ["People", "The 1975"],

    // BASTILLE
    ["Overjoyed", "Bastille"],
    ["Oblivion", "Bastille"],
    ["Torn Apart", "Bastille"],
    ["Glory", "Bastille"],
    ["Happier", "Bastille"],

    // TWO DOOR CINEMA CLUB
    ["Come Back Home", "Two Door Cinema Club"],
    ["This Is the Life", "Two Door Cinema Club"],
    ["Handshake", "Two Door Cinema Club"],
    ["Gameshow", "Two Door Cinema Club"],
    ["Ordinary", "Two Door Cinema Club"],
    ["Satellite", "Two Door Cinema Club"],
    ["Dirty Air", "Two Door Cinema Club"],

    // FOALS
    ["Blue Blood", "Foals"],
    ["Miami", "Foals"],
    ["Total Life Forever", "Foals"],
    ["Everytime", "Foals"],
    ["Give It All", "Foals"],
    ["On the Luna", "Foals"],
    ["The Runner", "Foals"],

    // BOMBAY BICYCLE CLUB
    ["Ivy & Gold", "Bombay Bicycle Club"],
    ["Rinse Me Down", "Bombay Bicycle Club"],
    ["Shuffle", "Bombay Bicycle Club"],
    ["Lights Out, Words Gone", "Bombay Bicycle Club"],
    ["How Can You Swallow So Much Sleep", "Bombay Bicycle Club"],
    ["Beg", "Bombay Bicycle Club"],
    ["Carry Me", "Bombay Bicycle Club"],
    ["Luna", "Bombay Bicycle Club"],

    // THE VACCINES
    ["All in White", "The Vaccines"],
    ["Nørgaard", "The Vaccines"],
    ["Wetsuit", "The Vaccines"],
    ["Tiger Blood", "The Vaccines"],
    ["No Hope", "The Vaccines"],
    ["Bad Mood", "The Vaccines"],
    ["Melody Calling", "The Vaccines"],
    ["Dream Lover", "The Vaccines"],
    ["Minimal Affection", "The Vaccines"],

    // CATFISH AND THE BOTTLEMEN
    ["Business", "Catfish and the Bottlemen"],
    ["Fallout", "Catfish and the Bottlemen"],
    ["Conversation", "Catfish and the Bottlemen"],
    ["2all", "Catfish and the Bottlemen"],

    // WOLF ALICE
    ["Fluffy", "Wolf Alice"],
    ["You're a Germ", "Wolf Alice"],
    ["Lisbon", "Wolf Alice"],
    ["Space & Time", "Wolf Alice"],
    ["Formidable Cool", "Wolf Alice"],
    ["Heavenward", "Wolf Alice"],

    // BLOSSOMS
    ["My Favourite Room", "Blossoms"],
    ["Deep Grass", "Blossoms"],
    ["Unfaithful", "Blossoms"],
    ["Cool Like You", "Blossoms"],
    ["The Keeper", "Blossoms"],

    // THE WOMBATS
    ["Jump Into the Fog", "The Wombats"],
    ["Anti-D", "The Wombats"],
    ["Techno Fan", "The Wombats"],
    ["Our Perfect Disease", "The Wombats"],
    ["1996", "The Wombats"],
    ["Emoticons", "The Wombats"],
    ["Be Your Shadow", "The Wombats"],

    // CIRCA WAVES
    ["My Love", "Circa Waves"],
    ["Deserve This", "Circa Waves"],
    ["Different Creatures", "Circa Waves"],
    ["Jacqueline", "Circa Waves"],

    // EVERYTHING EVERYTHING
    ["Schoolin'", "Everything Everything"],
    ["MY KZ, UR BF", "Everything Everything"],
    ["Qwerty Finger", "Everything Everything"],
    ["Final Form", "Everything Everything"],
    ["Cough Cough", "Everything Everything"],
    ["Kemosabe", "Everything Everything"],
    ["Duet", "Everything Everything"],
    ["Don't Try", "Everything Everything"],
    ["The Peaks", "Everything Everything"],
    ["Distant Past", "Everything Everything"],
    ["Regret", "Everything Everything"],

    // THE MACCABEES
    ["Went Away", "The Maccabees"],
    ["Grew Up at Midnight", "The Maccabees"],
    ["Kamakura", "The Maccabees"],
    ["Ribbon Road", "The Maccabees"],
    ["Slow Sun", "The Maccabees"],

    // THE AMAZONS
    ["In My Mind", "The Amazons"],
    ["Little Something", "The Amazons"],
    ["Burn My Eyes", "The Amazons"],
    ["Ultraviolet", "The Amazons"],
    ["Something in the Water", "The Amazons"],
    ["25", "The Amazons"],
    ["End of Wonder", "The Amazons"],

    // SUNDARA KARMA
    ["Explore", "Sundara Karma"],
    ["Lakhey", "Sundara Karma"],
    ["Illusions", "Sundara Karma"],
    ["Higher States", "Sundara Karma"],
    ["The Changeover", "Sundara Karma"],
    ["Little Smart Houses", "Sundara Karma"]

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
        others[(index + 7) % others.length],
        others[(index + 13) % others.length]
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
        id: "music_" + (11067 + index),
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
