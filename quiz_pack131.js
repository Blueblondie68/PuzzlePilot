
//
// quiz_pack131.js
// PuzzlePilot Big Quiz
// Music Pack 131 - 2010s Indie, Alternative & Electronic
// Questions music_11167 to music_11266
//

const songs = [

    // ALVVAYS
    ["Archie, Marry Me", "Alvvays"],
    ["Adult Diversion", "Alvvays"],
    ["Next of Kin", "Alvvays"],
    ["Atop a Cake", "Alvvays"],
    ["In Undertow", "Alvvays"],
    ["Dreams Tonite", "Alvvays"],
    ["Plimsoll Punks", "Alvvays"],
    ["Not My Baby", "Alvvays"],
    ["Saved by a Waif", "Alvvays"],
    ["Forget About Life", "Alvvays"],

    // COURTNEY BARNETT
    ["Pedestrian at Best", "Courtney Barnett"],
    ["Depreston", "Courtney Barnett"],
    ["Avant Gardener", "Courtney Barnett"],
    ["History Eraser", "Courtney Barnett"],
    ["Dead Fox", "Courtney Barnett"],
    ["Elevator Operator", "Courtney Barnett"],
    ["Nameless, Faceless", "Courtney Barnett"],
    ["Need a Little Time", "Courtney Barnett"],
    ["City Looks Pretty", "Courtney Barnett"],
    ["Charity", "Courtney Barnett"],

    // FUTURE ISLANDS
    ["Seasons (Waiting on You)", "Future Islands"],
    ["A Dream of You and Me", "Future Islands"],
    ["Spirit", "Future Islands"],
    ["Sun in the Morning", "Future Islands"],
    ["The Chase", "Future Islands"],
    ["Ran", "Future Islands"],
    ["Cave", "Future Islands"],
    ["Beauty of the Road", "Future Islands"],
    ["Time on Her Side", "Future Islands"],
    ["Ancient Water", "Future Islands"],

    // THE NATIONAL
    ["Bloodbuzz Ohio", "The National"],
    ["Terrible Love", "The National"],
    ["Afraid of Everyone", "The National"],
    ["Conversation 16", "The National"],
    ["England", "The National"],
    ["I Should Live in Salt", "The National"],
    ["Demons", "The National"],
    ["Graceless", "The National"],
    ["Sea of Love", "The National"],
    ["The System Only Dreams in Total Darkness", "The National"],

    // MITSKI
    ["Nobody", "Mitski"],
    ["Your Best American Girl", "Mitski"],
    ["Geyser", "Mitski"],
    ["Washing Machine Heart", "Mitski"],
    ["A Pearl", "Mitski"],
    ["First Love / Late Spring", "Mitski"],
    ["Townie", "Mitski"],
    ["Francis Forever", "Mitski"],
    ["I Bet on Losing Dogs", "Mitski"],
    ["Happy", "Mitski"],

    // ANGEL OLSEN
    ["Shut Up Kiss Me", "Angel Olsen"],
    ["Sister", "Angel Olsen"],
    ["Intern", "Angel Olsen"],
    ["Never Be Mine", "Angel Olsen"],
    ["Not Gonna Kill You", "Angel Olsen"],
    ["All Mirrors", "Angel Olsen"],
    ["Lark", "Angel Olsen"],
    ["Spring", "Angel Olsen"],
    ["New Love Cassette", "Angel Olsen"],
    ["What It Is", "Angel Olsen"],

    // GRIMES
    ["Oblivion", "Grimes"],
    ["Genesis", "Grimes"],
    ["Be a Body", "Grimes"],
    ["Circumambient", "Grimes"],
    ["Kill V. Maim", "Grimes"],

    // FLORENCE AND THE MACHINE
    ["Hunger", "Florence and the Machine"],
    ["Ship to Wreck", "Florence and the Machine"],
    ["What Kind of Man", "Florence and the Machine"],
    ["Queen of Peace", "Florence and the Machine"],
    ["Delilah", "Florence and the Machine"],

    // JAMIE XX
    ["Gosh", "Jamie xx"],
    ["Loud Places", "Jamie xx"],
    ["Sleep Sound", "Jamie xx"],
    ["Girl", "Jamie xx"],
    ["SeeSaw", "Jamie xx"],

    // ANGUS AND JULIA STONE
    ["Chateau", "Angus and Julia Stone"],
    ["Snow", "Angus and Julia Stone"],
    ["Grizzly Bear", "Angus and Julia Stone"],
    ["Heart Beats Slow", "Angus and Julia Stone"],
    ["A Heartbreak", "Angus and Julia Stone"],

    // CHVRCHES
    ["Empty Threat", "CHVRCHES"],

    // ALT-J
    ["Something Good", "alt-J"],
    ["Fitzpleasure", "alt-J"],

    // JON HOPKINS
    ["Open Eye Signal", "Jon Hopkins"],
    ["Breathe This Air", "Jon Hopkins"],
    ["Collider", "Jon Hopkins"],
    ["Emerald Rush", "Jon Hopkins"],
    ["Singularity", "Jon Hopkins"],

    // BONOBO
    ["Kerala", "Bonobo"],
    ["No Reason", "Bonobo"],
    ["Break Apart", "Bonobo"],
    ["Bambro Koyo Ganda", "Bonobo"],
    ["Cirrus", "Bonobo"],

    // SYLVAN ESSO
    ["Coffee", "Sylvan Esso"],
    ["Hey Mami", "Sylvan Esso"],
    ["H.S.K.T.", "Sylvan Esso"],
    ["Radio", "Sylvan Esso"],
    ["Die Young", "Sylvan Esso"],

    // JUNGLE
    ["Busy Earnin", "Jungle"],
    ["Time", "Jungle"]

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
        id: "music_" + (11167 + index),
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
