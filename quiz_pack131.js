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
    ["How Big, How Blue, How Beautiful", "Florence and the Machine"],
    ["Florence Welch and Isabella Summers", "Florence and the Machine"],

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

// Artist-level specialist tags.
// Each question receives its own expanded array.
const artistTags = {
    "Alvvays": ["Alvvays", "Canadian music", "Toronto music", "indie pop", "dream pop", "jangle pop", "bands"],
    "Courtney Barnett": ["Courtney Barnett", "Australian music", "Melbourne music", "indie rock", "alternative rock", "singer-songwriters", "female vocalists"],
    "Future Islands": ["Future Islands", "American music", "Baltimore music", "synthpop", "new wave", "indie pop", "bands", "Samuel T. Herring"],
    "The National": ["The National", "American music", "indie rock", "alternative rock", "Matt Berninger", "rock bands"],
    "Mitski": ["Mitski", "Japanese-American artists", "American music", "indie rock", "art pop", "singer-songwriters", "female vocalists"],
    "Angel Olsen": ["Angel Olsen", "American music", "indie rock", "indie folk", "art pop", "singer-songwriters", "female vocalists"],
    "Grimes": ["Grimes", "Canadian music", "electropop", "art pop", "synthpop", "electronic music", "female vocalists"],
    "Florence and the Machine": ["Florence and the Machine", "Florence + the Machine", "UK music", "indie rock", "art pop", "baroque pop", "Florence Welch", "rock bands"],
    "Jamie xx": ["Jamie xx", "UK music", "London music", "electronic music", "UK garage", "house music", "record producers", "The xx"],
    "Angus and Julia Stone": ["Angus and Julia Stone", "Australian music", "indie folk", "folk pop", "brother and sister duos", "musical duos"],
    "CHVRCHES": ["CHVRCHES", "Scottish music", "UK music", "electropop", "synthpop", "electronic music", "bands"],
    "alt-J": ["alt-J", "UK music", "indie rock", "art rock", "alternative rock", "Mercury Prize winners", "bands"],
    "Jon Hopkins": ["Jon Hopkins", "UK music", "ambient music", "electronic music", "techno", "record producers", "instrumental music"],
    "Bonobo": ["Bonobo", "Simon Green", "UK music", "electronica", "downtempo", "trip hop", "record producers"],
    "Sylvan Esso": ["Sylvan Esso", "American music", "electropop", "indie pop", "electronic music", "musical duos"],
    "Jungle": ["Jungle", "UK music", "London music", "neo soul", "funk", "electronic soul", "bands"]
};

// Album membership supports specialist quizzes.
// Album dates do not necessarily indicate first single release.
const albumTracks = [
    ["Alvvays", "Alvvays", "2014 albums", ["Archie, Marry Me", "Adult Diversion", "Next of Kin", "Atop a Cake"]],
    ["Alvvays", "Antisocialites", "2017 albums", ["In Undertow", "Dreams Tonite", "Plimsoll Punks", "Not My Baby", "Saved by a Waif", "Forget About Life"]],
    ["Courtney Barnett", "The Double EP: A Sea of Split Peas", "2013 EP collections", ["Avant Gardener", "History Eraser"]],
    ["Courtney Barnett", "Sometimes I Sit and Think, and Sometimes I Just Sit", "2015 albums", ["Pedestrian at Best", "Depreston", "Dead Fox", "Elevator Operator"]],
    ["Courtney Barnett", "Tell Me How You Feel", "2018 albums", ["Nameless, Faceless", "Need a Little Time", "City Looks Pretty", "Charity"]],
    ["Future Islands", "Singles", "2014 albums", ["Seasons (Waiting on You)", "A Dream of You and Me", "Spirit", "Sun in the Morning"]],
    ["Future Islands", "The Far Field", "2017 albums", ["Ran", "Cave", "Beauty of the Road", "Time on Her Side", "Ancient Water"]],
    ["The National", "High Violet", "2010 albums", ["Bloodbuzz Ohio", "Terrible Love", "Afraid of Everyone", "Conversation 16", "England"]],
    ["The National", "Trouble Will Find Me", "2013 albums", ["I Should Live in Salt", "Demons", "Graceless", "Sea of Love"]],
    ["The National", "Sleep Well Beast", "2017 albums", ["The System Only Dreams in Total Darkness"]],
    ["Mitski", "Be the Cowboy", "2018 albums", ["Nobody", "Geyser", "Washing Machine Heart", "A Pearl"]],
    ["Mitski", "Puberty 2", "2016 albums", ["Your Best American Girl", "I Bet on Losing Dogs", "Happy"]],
    ["Mitski", "Bury Me at Makeout Creek", "2014 albums", ["First Love / Late Spring", "Townie", "Francis Forever"]],
    ["Angel Olsen", "My Woman", "2016 albums", ["Shut Up Kiss Me", "Sister", "Intern", "Never Be Mine", "Not Gonna Kill You"]],
    ["Angel Olsen", "All Mirrors", "2019 albums", ["All Mirrors", "Lark", "Spring", "New Love Cassette", "What It Is"]],
    ["Grimes", "Visions", "2012 albums", ["Oblivion", "Genesis", "Be a Body", "Circumambient"]],
    ["Grimes", "Art Angels", "2015 albums", ["Kill V. Maim"]],
    ["Florence and the Machine", "High as Hope", "2018 albums", ["Hunger"]],
    ["Florence and the Machine", "How Big, How Blue, How Beautiful", "2015 albums", ["Ship to Wreck", "What Kind of Man", "How Big, How Blue, How Beautiful"]],
    ["Jamie xx", "In Colour", "2015 albums", ["Gosh", "Loud Places", "Sleep Sound", "Girl", "SeeSaw"]],
    ["Angus and Julia Stone", "Snow", "2017 albums", ["Chateau", "Snow"]],
    ["Angus and Julia Stone", "Angus & Julia Stone", "2014 albums", ["Grizzly Bear", "Heart Beats Slow", "A Heartbreak"]],
    ["CHVRCHES", "Every Open Eye", "2015 albums", ["Empty Threat"]],
    ["alt-J", "An Awesome Wave", "2012 albums", ["Something Good", "Fitzpleasure"]],
    ["Jon Hopkins", "Immunity", "2013 albums", ["Open Eye Signal", "Breathe This Air", "Collider"]],
    ["Jon Hopkins", "Singularity", "2018 albums", ["Emerald Rush", "Singularity"]],
    ["Bonobo", "Migration", "2017 albums", ["Kerala", "No Reason", "Break Apart", "Bambro Koyo Ganda"]],
    ["Bonobo", "The North Borders", "2013 albums", ["Cirrus"]],
    ["Sylvan Esso", "Sylvan Esso", "2014 albums", ["Coffee", "Hey Mami", "H.S.K.T."]],
    ["Sylvan Esso", "What Now", "2017 albums", ["Radio", "Die Young"]],
    ["Jungle", "Jungle", "2014 albums", ["Busy Earnin", "Time"]]
];

// Recording-specific tags cover collaborations and alternate versions.
const recordingTags = {
    "Future Islands|The Chase": ["2015 singles"],
    "Florence and the Machine|How Big, How Blue, How Beautiful": ["album questions", "album identification", "studio albums"],
    "Florence and the Machine|Florence Welch and Isabella Summers": ["band members", "lead singers", "keyboard players", "line-ups"],
    "Jamie xx|Loud Places": ["Romy", "Romy Madley Croft", "The xx", "featured artists", "collaborations", "2015 singles"],
    "Jamie xx|SeeSaw": ["Romy", "Romy Madley Croft", "The xx", "featured artists", "collaborations"],
    "Bonobo|No Reason": ["Nick Murphy", "Chet Faker", "featured artists", "collaborations"],
    "Bonobo|Break Apart": ["Rhye", "featured artists", "collaborations"],
    "Bonobo|Bambro Koyo Ganda": ["Innov Gnawa", "featured artists", "collaborations"],
    "Bonobo|Kerala": ["2016 singles", "music sampling"],
    "Jon Hopkins|Breathe This Air": ["Purity Ring", "alternate versions", "vocal reworks"]
};

// Questions 68 and 69 repeated recordings from Pack 128.
// They are now an album question and a band-members question.
// The other changes clarify collaborators without changing answers.
const questionCorrections = {
    68: "Which British band released the album 'How Big, How Blue, How Beautiful'?",
    69: "Which British band includes lead singer Florence Welch and keyboardist Isabella Summers?",
    71: "Which British electronic musician released 'Loud Places' featuring Romy of The xx?",
    74: "Which British electronic musician released 'SeeSaw' featuring Romy of The xx?",
    89: "Which British producer released 'No Reason' featuring Nick Murphy?",
    90: "Which British producer released 'Break Apart' featuring Rhye?",
    91: "Which British producer released 'Bambro Koyo Ganda' featuring Innov Gnawa?"
};

function makeTags(title, artist) {
    const album = albumTracks.find(
        ([albumArtist, , , tracks]) =>
            albumArtist === artist && tracks.includes(title)
    );

    const albumQuestion =
        artist === "Florence and the Machine" &&
        title === "How Big, How Blue, How Beautiful";

    const bandMembersQuestion =
        artist === "Florence and the Machine" &&
        title === "Florence Welch and Isabella Summers";

    const typeTags = albumQuestion
        ? ["albums", "album identification", "2010s albums"]
        : bandMembersQuestion
            ? ["band members", "line-ups", "2010s bands"]
            : ["songs", "artist identification", "recordings"];

    return [...new Set([
        "2010s",
        ...typeTags,
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
