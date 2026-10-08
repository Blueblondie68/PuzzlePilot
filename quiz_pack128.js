
// =========================================================
// PUZZLEPILOT - MUSIC QUIZ PACK 128
// 2010s SONGS AND ARTISTS
// IDs: music_10867 - music_10966
// =========================================================

const songs = [

    // FLORENCE + THE MACHINE
    ["No Light, No Light", "Florence + The Machine"],
    ["What the Water Gave Me", "Florence + The Machine"],
    ["Queen of Peace", "Florence + The Machine"],
    ["Delilah", "Florence + The Machine"],
    ["Sky Full of Song", "Florence + The Machine"],
    ["Big God", "Florence + The Machine"],

    // ELLIE GOULDING
    ["Guns and Horses", "Ellie Goulding"],
    ["The Writer", "Ellie Goulding"],
    ["Explosions", "Ellie Goulding"],

    // MARINA AND THE DIAMONDS
    ["Oh No!", "Marina and the Diamonds"],
    ["Shampain", "Marina and the Diamonds"],
    ["Primadonna", "Marina and the Diamonds"],
    ["Power and Control", "Marina and the Diamonds"],
    ["How to Be a Heartbreaker", "Marina and the Diamonds"],
    ["Radioactive", "Marina and the Diamonds"],
    ["Froot", "Marina and the Diamonds"],
    ["Happy", "Marina and the Diamonds"],
    ["Blue", "Marina and the Diamonds"],
    ["Forget", "Marina and the Diamonds"],

    // MARINA
    ["Handmade Heaven", "Marina"],
    ["Orange Trees", "Marina"],
    ["To Be Human", "Marina"],

    // BIRDY
    ["1901", "Birdy"],
    ["Shelter", "Birdy"],
    ["Light Me Up", "Birdy"],
    ["Wild Horses", "Birdy"],
    ["Beautiful Lies", "Birdy"],
    ["Hear You Calling", "Birdy"],

    // JESSIE WARE
    ["Running", "Jessie Ware"],
    ["110%", "Jessie Ware"],
    ["Imagine It Was Us", "Jessie Ware"],
    ["Tough Love", "Jessie Ware"],
    ["Champagne Kisses", "Jessie Ware"],
    ["Kind Of...Sometimes...Maybe", "Jessie Ware"],
    ["Midnight", "Jessie Ware"],
    ["Selfish Love", "Jessie Ware"],

    // RUDIMENTAL
    ["Not Giving In", "Rudimental"],
    ["Right Here", "Rudimental"],
    ["Never Let You Go", "Rudimental"],
    ["Rumour Mill", "Rudimental"],
    ["Let Me Live", "Rudimental"],

    // CLEAN BANDIT
    ["Mozart House", "Clean Bandit"],
    ["Come Over", "Clean Bandit"],
    ["Baby", "Clean Bandit"],

    // PALOMA FAITH
    ["30 Minute Love Affair", "Paloma Faith"],
    ["Just Be", "Paloma Faith"],
    ["Trouble with My Baby", "Paloma Faith"],
    ["Ready for the Good Life", "Paloma Faith"],
    ["Guilty", "Paloma Faith"],

    // EMELI SANDE
    ["Daddy", "Emeli Sande"],
    ["Read All About It Part III", "Emeli Sande"],
    ["River", "Emeli Sande"],
    ["Breaking the Law", "Emeli Sande"],
    ["Wonder", "Emeli Sande"],

    // GABRIELLE APLIN
    ["The Power of Love", "Gabrielle Aplin"],
    ["Light Up the Dark", "Gabrielle Aplin"],
    ["Miss You", "Gabrielle Aplin"],
    ["Waking Up Slow", "Gabrielle Aplin"],
    ["My Mistake", "Gabrielle Aplin"],

    // FOXES
    ["Holding Onto Heaven", "Foxes"],
    ["Glorious", "Foxes"],
    ["Echo", "Foxes"],
    ["Amazing", "Foxes"],
    ["Cruel", "Foxes"],

    // RAYE
    ["Hotbox", "RAYE"],
    ["Flowers", "RAYE"],
    ["Decline", "RAYE"],
    ["Cigarette", "RAYE"],
    ["Friends", "RAYE"],

    // BECKY HILL
    ["Afterglow", "Becky Hill"],
    ["Gecko (Overdrive)", "Becky Hill"],
    ["Losing", "Becky Hill"],
    ["Back & Forth", "Becky Hill"],
    ["Wish You Well", "Becky Hill"],

    // LONDON GRAMMAR
    ["Hey Now", "London Grammar"],
    ["Metal & Dust", "London Grammar"],
    ["Sights", "London Grammar"],
    ["If You Wait", "London Grammar"],
    ["Rooting for You", "London Grammar"],

    // SIGRID
    ["Don't Kill My Vibe", "Sigrid"],
    ["Plot Twist", "Sigrid"],
    ["Strangers", "Sigrid"],
    ["High Five", "Sigrid"],
    ["Sucker Punch", "Sigrid"],

    // FREYA RIDINGS
    ["You Mean the World to Me", "Freya Ridings"],
    ["Ultraviolet", "Freya Ridings"],
    ["Wishbone", "Freya Ridings"],
    ["Love Is Fire", "Freya Ridings"],
    ["Holy Water", "Freya Ridings"],

    // TOM ODELL
    ["Another Love", "Tom Odell"],
    ["Can't Pretend", "Tom Odell"],
    ["Hold Me", "Tom Odell"],
    ["Grow Old with Me", "Tom Odell"],
    ["I Know", "Tom Odell"],

    // ELLA HENDERSON
    ["Hard Work", "Ella Henderson"],
    ["Giants", "Ella Henderson"],
    ["Beautifully Unfinished", "Ella Henderson"],
    ["Missed", "Ella Henderson"],
    ["Empire", "Ella Henderson"],

    // EXTRA CLEAR CANDIDATE
    ["If You Leave Me Now", "Foxes"]

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
        others[(index + 7) % others.length],
        others[(index + 13) % others.length]
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

        id: "music_" + (10867 + index),

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
