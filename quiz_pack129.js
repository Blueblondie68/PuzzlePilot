
//
// quiz_pack129.js
// PuzzlePilot Big Quiz
// Music Pack 129 — 2010s
// Questions music_10967 to music_11066
//

const songs = [

    // LITTLE MIX
    ["DNA", "Little Mix"],
    ["Change Your Life", "Little Mix"],
    ["How Ya Doin'?", "Little Mix"],
    ["Little Me", "Little Mix"],
    ["Word Up!", "Little Mix"],
    ["Love Me Like You", "Little Mix"],
    ["Secret Love Song", "Little Mix"],
    ["No More Sad Songs", "Little Mix"],

    // DUA LIPA
    ["New Love", "Dua Lipa"],
    ["Last Dance", "Dua Lipa"],
    ["Lost in Your Light", "Dua Lipa"],
    ["Swan Song", "Dua Lipa"],
    ["Homesick", "Dua Lipa"],

    // JESS GLYNNE
    ["Right Here", "Jess Glynne"],
    ["Ain't Got Far to Go", "Jess Glynne"],
    ["No One", "Jess Glynne"],

    // ANNE-MARIE
    ["Heavy", "Anne-Marie"],
    ["Then", "Anne-Marie"],
    ["FRIENDS", "Anne-Marie"],

    // ZARA LARSSON
    ["Uncover", "Zara Larsson"],
    ["So Good", "Zara Larsson"],
    ["Only You", "Zara Larsson"],
    ["All the Time", "Zara Larsson"],
    ["Invisible", "Zara Larsson"],

    // MABEL
    ["Know Me Better", "Mabel"],
    ["My Boy My Town", "Mabel"],
    ["Thinking of You", "Mabel"],
    ["Bedroom", "Mabel"],
    ["Fine Line", "Mabel"],
    ["One Shot", "Mabel"],
    ["Bad Behaviour", "Mabel"],

    // ADELE
    ["Rumour Has It", "Adele"],
    ["Turning Tables", "Adele"],
    ["One and Only", "Adele"],
    ["Lovesong", "Adele"],
    ["He Won't Go", "Adele"],
    ["I'll Be Waiting", "Adele"],
    ["River Lea", "Adele"],
    ["Sweetest Devotion", "Adele"],

    // SAM SMITH
    ["Leave Your Lover", "Sam Smith"],
    ["Pray", "Sam Smith"],
    ["One Last Song", "Sam Smith"],
    ["Baby, You Make Me Crazy", "Sam Smith"],
    ["How Do You Sleep?", "Sam Smith"],
    ["Fire on Fire", "Sam Smith"],

    // JAMES ARTHUR
    ["Naked", "James Arthur"],
    ["You Deserve Better", "James Arthur"],
    ["Empty Space", "James Arthur"],
    ["Falling Like the Stars", "James Arthur"],
    ["Quite Miss Home", "James Arthur"],
    ["Treehouse", "James Arthur"],

    // LEONA LEWIS
    ["Collide", "Leona Lewis"],
    ["Trouble", "Leona Lewis"],
    ["Lovebird", "Leona Lewis"],
    ["Fireflies", "Leona Lewis"],
    ["One More Sleep", "Leona Lewis"],
    ["Thunder", "Leona Lewis"],
    ["Fire Under My Feet", "Leona Lewis"],

    // OLLY MURS
    ["Oh My Goodness", "Olly Murs"],
    ["Right Place Right Time", "Olly Murs"],
    ["Hand on Heart", "Olly Murs"],
    ["Seasons", "Olly Murs"],
    ["Grow Up", "Olly Murs"],
    ["Moves", "Olly Murs"],
    ["Excuses", "Olly Murs"],

    // JOHN NEWMAN
    ["Losing Sleep", "John Newman"],
    ["Out of My Head", "John Newman"],
    ["Tiring Game", "John Newman"],
    ["Feelings", "John Newman"],
    ["Without You", "John Newman"],

    // RITA ORA
    ["Shine Ya Light", "Rita Ora"],
    ["Radioactive", "Rita Ora"],
    ["I Will Never Let You Down", "Rita Ora"],
    ["Poison", "Rita Ora"],
    ["Body on Me", "Rita Ora"],
    ["Only Want You", "Rita Ora"],

    // PIXIE LOTT
    ["What Do You Take Me For?", "Pixie Lott"],
    ["Lay Me Down", "Pixie Lott"],

    // ALEXANDRA BURKE
    ["Broken Heels", "Alexandra Burke"],
    ["All Night Long", "Alexandra Burke"],
    ["The Silence", "Alexandra Burke"],
    ["Daylight Robbery", "Alexandra Burke"],
    ["Tonight", "Alexandra Burke"],
    ["Heartbreak on Hold", "Alexandra Burke"],

    // REBECCA FERGUSON
    ["Nothing's Real but Love", "Rebecca Ferguson"],
    ["Too Good to Lose", "Rebecca Ferguson"],
    ["Glitter & Gold", "Rebecca Ferguson"],
    ["Backtrack", "Rebecca Ferguson"],
    ["I Hope", "Rebecca Ferguson"],
    ["Freedom", "Rebecca Ferguson"],

    // JORJA SMITH
    ["Blue Lights", "Jorja Smith"],
    ["Where Did I Go?", "Jorja Smith"],
    ["Teenage Fantasy", "Jorja Smith"],
    ["On My Mind", "Jorja Smith"],
    ["Let Me Down", "Jorja Smith"],
    ["February 3rd", "Jorja Smith"],
    ["The One", "Jorja Smith"],
    ["Don't Watch Me Cry", "Jorja Smith"],
    ["Be Honest", "Jorja Smith"],
    ["Lost & Found", "Jorja Smith"]

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
        id: "music_" + (10967 + index),
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
