
```javascript
// =========================================================
// PUZZLEPILOT - MUSIC QUIZ PACK 126
// 2010s SONGS AND ARTISTS
// =========================================================

const songs = [

    // THE 1975
    ["TOOTIMETOOTIMETOOTIME", "The 1975"],
    ["Heart Out", "The 1975"],
    ["Settle Down", "The 1975"],

    // WOLF ALICE
    ["Bros", "Wolf Alice"],
    ["Moaning Lisa Smile", "Wolf Alice"],
    ["Giant Peach", "Wolf Alice"],
    ["Freazy", "Wolf Alice"],
    ["Beautifully Unconventional", "Wolf Alice"],
    ["Don't Delete the Kisses", "Wolf Alice"],
    ["Yuk Foo", "Wolf Alice"],
    ["Silk", "Wolf Alice"],

    // THE AMAZONS
    ["Black Magic", "The Amazons"],
    ["Junk Food Forever", "The Amazons"],
    ["Stay With Me", "The Amazons"],
    ["Mother", "The Amazons"],
    ["Doubt It", "The Amazons"],

    // THE WOMBATS
    ["Greek Tragedy", "The Wombats"],
    ["Give Me a Try", "The Wombats"],
    ["Your Body Is a Weapon", "The Wombats"],
    ["Lemon to a Knife Fight", "The Wombats"],
    ["Turn", "The Wombats"],
    ["Cheetah Tongue", "The Wombats"],
    ["Tokyo (Vampires & Wolves)", "The Wombats"],

    // THE PIGEON DETECTIVES
    ["Done in Secret", "The Pigeon Detectives"],
    ["I Won't Come Back", "The Pigeon Detectives"],

    // THE MACCABEES
    ["Feel to Follow", "The Maccabees"],
    ["Ayla", "The Maccabees"],
    ["Something Like Happiness", "The Maccabees"],

    // FOALS
    ["Snake Oil", "Foals"],
    ["Exits", "Foals"],
    ["Sunday", "Foals"],
    ["Bad Habit", "Foals"],

    // NOTHING BUT THIEVES
    ["Amsterdam", "Nothing But Thieves"],
    ["Trip Switch", "Nothing But Thieves"],
    ["Itch", "Nothing But Thieves"],
    ["Wake Up Call", "Nothing But Thieves"],
    ["Sorry", "Nothing But Thieves"],
    ["Particles", "Nothing But Thieves"],
    ["Forever and Ever More", "Nothing But Thieves"],
    ["If I Get High", "Nothing But Thieves"],
    ["Ban All the Music", "Nothing But Thieves"],
    ["Lover Please Stay", "Nothing But Thieves"],

    // DECLAN MCKENNA
    ["Brazil", "Declan McKenna"],
    ["Isombard", "Declan McKenna"],
    ["The Kids Don't Wanna Come Home", "Declan McKenna"],
    ["Humongous", "Declan McKenna"],
    ["Why Do You Feel So Down", "Declan McKenna"],
    ["Make Me Your Queen", "Declan McKenna"],
    ["Paracetamol", "Declan McKenna"],
    ["Rapture", "Declan McKenna"],

    // ARCTIC MONKEYS
    ["Four Out of Five", "Arctic Monkeys"],
    ["Tranquility Base Hotel & Casino", "Arctic Monkeys"],
    ["Star Treatment", "Arctic Monkeys"],
    ["Batphone", "Arctic Monkeys"],

    // YEARS & YEARS
    ["King", "Years & Years"],
    ["Shine", "Years & Years"],
    ["Desire", "Years & Years"],
    ["Eyes Shut", "Years & Years"],
    ["Worship", "Years & Years"],
    ["Meteorite", "Years & Years"],
    ["Sanctify", "Years & Years"],
    ["If You're Over Me", "Years & Years"],
    ["All for You", "Years & Years"],
    ["Play", "Years & Years"],

    // JAMES BAY
    ["Us", "James Bay"],
    ["Peer Pressure", "James Bay"],

    // GEORGE EZRA
    ["Don't Matter Now", "George Ezra"],

    // BLOSSOMS
    ["Charlemagne", "Blossoms"],
    ["At Most a Kiss", "Blossoms"],
    ["Getaway", "Blossoms"],
    ["Honey Sweet", "Blossoms"],
    ["Blown Rose", "Blossoms"],
    ["Cut Me and I'll Bleed", "Blossoms"],
    ["There's a Reason Why", "Blossoms"],
    ["I Can't Stand It", "Blossoms"],
    ["How Long Will This Last", "Blossoms"],
    ["Your Girlfriend", "Blossoms"],

    // CIRCA WAVES
    ["T-Shirt Weather", "Circa Waves"],
    ["Stuck in My Teeth", "Circa Waves"],
    ["Fossils", "Circa Waves"],
    ["Young Chasers", "Circa Waves"],
    ["Get Away", "Circa Waves"],
    ["Fire That Burns", "Circa Waves"],
    ["Wake Up", "Circa Waves"],
    ["Goodbye", "Circa Waves"],
    ["Movies", "Circa Waves"],
    ["Times Won't Change Me", "Circa Waves"],

    // SUNDARA KARMA
    ["Flame", "Sundara Karma"],
    ["She Said", "Sundara Karma"],
    ["Loveblood", "Sundara Karma"],
    ["A Young Understanding", "Sundara Karma"],
    ["Vivienne", "Sundara Karma"],
    ["Olympia", "Sundara Karma"],
    ["Happy Family", "Sundara Karma"],
    ["Indigo Puff", "Sundara Karma"],
    ["Cold Heaven", "Sundara Karma"],
    ["One Last Night on This Earth", "Sundara Karma"],

    // THE HUNNA
    ["She's Casual", "The Hunna"],
    ["Bonfire", "The Hunna"],
    ["You & Me", "The Hunna"]

];

// =========================================================
// BUILD ANSWER OPTIONS
// =========================================================

const artists = [
    ...new Set(songs.map(song => song[1]))
];

function makeAnswers(correctArtist, index) {

    const others = artists.filter(
        artist => artist !== correctArtist
    );

    const wrong = [
        others[index % others.length],
        others[(index + 11) % others.length],
        others[(index + 23) % others.length]
    ];

    const answers = [
        correctArtist,
        ...wrong
    ];

    const position = index % 4;

    answers.splice(0, 1);

    answers.splice(
        position,
        0,
        correctArtist
    );

    return answers;
}

// =========================================================
// CREATE QUESTIONS
// =========================================================

const questions = songs.map((song, index) => {

    const title = song[0];
    const artist = song[1];

    return {

        id: "music_" + (10667 + index),

        category: "Music",

        question:
            "Which artist recorded '" +
            title +
            "'?",

        answers: makeAnswers(
            artist,
            index
        ),

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
```
