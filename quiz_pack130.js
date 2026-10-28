 // quiz_pack130.js
// PuzzlePilot Big Quiz — Music Pack 130
// Mainly 2010s indie and alternative music
// 100 questions; music_11067 to music_11166
// Artist, region, genre, album and specialist tagging
// One repeated recording replaced by an album question

const songs = [

    // ARCTIC MONKEYS
    ["Brick by Brick", "Arctic Monkeys"],
    ["The Hellcat Spangled Shalalala", "Arctic Monkeys"],
    ["Suck It and See", "Arctic Monkeys"],
    ["Black Treacle", "Arctic Monkeys"],

    // BOMBAY BICYCLE CLUB
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
    ["Doom Days", "Bastille"],

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

// Shared artist metadata expands into every generated question.
// It is applied to the same original artists without changing scoring.
const artistTags = {
    "Arctic Monkeys": ["Arctic Monkeys", "UK music", "Sheffield music", "indie rock", "alternative rock", "rock bands", "Mercury Prize winners"],
    "Bombay Bicycle Club": ["Bombay Bicycle Club", "UK music", "London music", "indie rock", "indie folk", "indie pop", "rock bands"],
    "The 1975": ["The 1975", "UK music", "Manchester music", "indie pop", "synthpop", "alternative rock", "rock bands"],
    "Bastille": ["Bastille", "UK music", "indie pop", "alternative rock", "synthpop", "pop groups"],
    "Two Door Cinema Club": ["Two Door Cinema Club", "Northern Irish music", "UK music", "indie rock", "indie pop", "rock bands"],
    "Foals": ["Foals", "UK music", "Oxford music", "indie rock", "alternative rock", "rock bands"],
    "The Vaccines": ["The Vaccines", "UK music", "indie rock", "garage rock", "post-punk revival", "rock bands"],
    "Catfish and the Bottlemen": ["Catfish and the Bottlemen", "Welsh music", "UK music", "indie rock", "alternative rock", "rock bands"],
    "Wolf Alice": ["Wolf Alice", "UK music", "indie rock", "alternative rock", "shoegaze", "rock bands", "Mercury Prize winners"],
    "Blossoms": ["Blossoms", "UK music", "Manchester music", "Stockport music", "indie pop", "indie rock", "synthpop", "rock bands"],
    "The Wombats": ["The Wombats", "UK music", "Liverpool music", "indie rock", "indie pop", "rock bands"],
    "Circa Waves": ["Circa Waves", "UK music", "Liverpool music", "indie rock", "guitar rock", "rock bands"],
    "Everything Everything": ["Everything Everything", "UK music", "Manchester music", "art rock", "indie rock", "experimental pop", "rock bands"],
    "The Maccabees": ["The Maccabees", "UK music", "indie rock", "alternative rock", "rock bands"],
    "The Amazons": ["The Amazons", "UK music", "Reading music", "indie rock", "hard rock", "rock bands"],
    "Sundara Karma": ["Sundara Karma", "UK music", "Reading music", "indie rock", "psychedelic pop", "alternative rock", "rock bands"]
};

// Album memberships allow more precise specialist quizzes.
// Only tracks with a confidently matching album are grouped here.
const albumTracks = [
    ["Arctic Monkeys", "Suck It and See", "2011 albums", ["Brick by Brick", "The Hellcat Spangled Shalalala", "Suck It and See", "Black Treacle"]],
    ["Bombay Bicycle Club", "Flaws", "2010 albums", ["Ivy & Gold", "Rinse Me Down"]],
    ["Bombay Bicycle Club", "A Different Kind of Fix", "2011 albums", ["Shuffle", "Lights Out, Words Gone", "How Can You Swallow So Much Sleep"]],
    ["Bombay Bicycle Club", "So Long, See You Tomorrow", "2014 albums", ["Home by Now", "Carry Me", "Luna"]],
    ["The 1975", "The 1975 debut album", "2013 albums", ["Menswear"]],
    ["The 1975", "I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It", "2016 albums", ["Loving Someone"]],
    ["The 1975", "A Brief Inquiry Into Online Relationships", "2018 albums", ["Love It If We Made It"]],
    ["The 1975", "Notes on a Conditional Form", "2020 albums", ["People"]],
    ["Bastille", "Bad Blood", "2013 albums", ["Overjoyed", "Oblivion"]],
    ["Bastille", "VS. (Other People's Heartache, Pt. III)", "2014 mixtapes", ["Torn Apart"]],
    ["Bastille", "Wild World", "2016 albums", ["Glory"]],
    ["Bastille", "Doom Days", "2019 albums", ["Doom Days"]],
    ["Two Door Cinema Club", "Tourist History", "2010 albums", ["Come Back Home", "This Is the Life"]],
    ["Two Door Cinema Club", "Beacon", "2012 albums", ["Handshake"]],
    ["Two Door Cinema Club", "Gameshow", "2016 albums", ["Gameshow", "Ordinary"]],
    ["Two Door Cinema Club", "False Alarm", "2019 albums", ["Satellite", "Dirty Air"]],
    ["Foals", "Total Life Forever", "2010 albums", ["Blue Blood", "Miami", "Total Life Forever"]],
    ["Foals", "Holy Fire", "2013 albums", ["Everytime"]],
    ["Foals", "What Went Down", "2015 albums", ["Give It All"]],
    ["Foals", "Everything Not Saved Will Be Lost Part 1", "2019 albums", ["On the Luna"]],
    ["Foals", "Everything Not Saved Will Be Lost Part 2", "2019 albums", ["The Runner"]],
    ["The Vaccines", "What Did You Expect from the Vaccines?", "2011 albums", ["All in White", "Nørgaard", "Wetsuit"]],
    ["The Vaccines", "Come of Age", "2012 albums", ["No Hope", "Bad Mood"]],
    ["The Vaccines", "English Graffiti", "2015 albums", ["Dream Lover", "Minimal Affection"]],
    ["Catfish and the Bottlemen", "The Balcony", "2014 albums", ["Business", "Fallout"]],
    ["Catfish and the Bottlemen", "The Balance", "2019 albums", ["Conversation", "2all"]],
    ["Wolf Alice", "My Love Is Cool", "2015 albums", ["Fluffy", "You're a Germ", "Lisbon"]],
    ["Wolf Alice", "Visions of a Life", "2017 albums", ["Space & Time", "Formidable Cool", "Heavenward"]],
    ["Blossoms", "Blossoms debut album", "2016 albums", ["My Favourite Room", "Deep Grass"]],
    ["Blossoms", "Cool Like You", "2018 albums", ["Cool Like You", "Unfaithful"]],
    ["Blossoms", "Foolish Loving Spaces", "2020 albums", ["The Keeper"]],
    ["The Wombats", "This Modern Glitch", "2011 albums", ["Jump Into the Fog", "Anti-D", "Techno Fan", "Our Perfect Disease", "1996"]],
    ["The Wombats", "Glitterbug", "2015 albums", ["Emoticons", "Be Your Shadow"]],
    ["Circa Waves", "Different Creatures", "2017 albums", ["My Love", "Deserve This", "Different Creatures"]],
    ["Circa Waves", "Sad Happy", "2020 albums", ["Jacqueline"]],
    ["Everything Everything", "Man Alive", "2010 albums", ["Schoolin'", "MY KZ, UR BF", "Qwerty Finger", "Final Form"]],
    ["Everything Everything", "Arc", "2013 albums", ["Cough Cough", "Kemosabe", "Duet", "Don't Try", "The Peaks"]],
    ["Everything Everything", "Get to Heaven", "2015 albums", ["Distant Past", "Regret"]],
    ["The Maccabees", "Given to the Wild", "2012 albums", ["Went Away", "Grew Up at Midnight"]],
    ["The Maccabees", "Marks to Prove It", "2015 albums", ["Kamakura", "Ribbon Road", "Slow Sun"]],
    ["The Amazons", "The Amazons debut album", "2017 albums", ["In My Mind", "Little Something", "Burn My Eyes", "Ultraviolet", "Something in the Water"]],
    ["The Amazons", "Future Dust", "2019 albums", ["25", "End of Wonder"]],
    ["Sundara Karma", "Youth Is Only Ever Fun in Retrospect", "2017 albums", ["Explore", "Lakhey"]],
    ["Sundara Karma", "Ulfilas' Alphabet", "2019 albums", ["Illusions", "Higher States", "The Changeover", "Little Smart Houses"]]
];

const recordingTags = {
    "The 1975|People": ["2019 singles", "2020 albums"],
    "Bastille|Torn Apart": ["Grades", "collaborations", "music producers", "2014 singles"],
    "Bastille|Doom Days": ["concept albums", "album identification", "Dan Smith"],
    "The Vaccines|Tiger Blood": ["2011 singles"],
    "The Vaccines|Melody Calling": ["Melody Calling EP", "2013 singles"],
    "Blossoms|The Keeper": ["2019 singles", "2020 albums"],
    "Circa Waves|Jacqueline": ["2019 singles", "2020 albums"],
    "Everything Everything|MY KZ, UR BF": ["2009 singles", "2010 reissues", "Man Alive"],
    "Bombay Bicycle Club|Beg": ["2012 singles"],
    "The Maccabees|Went Away": ["2012 singles"]
};

// A previously covered recording (Happier) is replaced at the same ID
// by a Bastille album question. All answer choices and scoring stay intact.
// Torn Apart is jointly credited to Bastille and Grades.
const questionCorrections = {
    11: "Which British band released 'Torn Apart' with Grades?",
    13: "Which British band released the concept album 'Doom Days'?"
};

function makeTags(title, artist) {
    const album = albumTracks.find(
        ([albumArtist, , , tracks]) =>
            albumArtist === artist && tracks.includes(title)
    );
    const isAlbumQuestion = artist === "Bastille" && title === "Doom Days";
    const original2000s = artist === "Everything Everything" && title === "MY KZ, UR BF";

    return [...new Set([
        original2000s ? "2000s" : "2010s",
        isAlbumQuestion ? "albums" : "songs",
        isAlbumQuestion ? "album identification" : "artist identification",
        isAlbumQuestion ? "concept albums" : "recordings",
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
        id: "music_" + (11067 + index),
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
