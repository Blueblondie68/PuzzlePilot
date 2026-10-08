
// =========================================================
// PUZZLEPILOT - MUSIC QUIZ PACK 127
// 2010s SONGS AND ARTISTS
// IDs: music_10767 - music_10866
// =========================================================

const songs = [

    // YEARS & YEARS
    ["Real", "Years & Years"],

    // THE HUNNA
    ["Dare", "The Hunna"],

    // DMA'S
    ["Silver", "DMA's"],
    ["For Now", "DMA's"],
    ["The End", "DMA's"],
    ["In the Air", "DMA's"],
    ["Do I Need You Now", "DMA's"],

    // LAPSLEY
    ["Love Is Blind", "Lapsley"],
    ["Hurt Me", "Lapsley"],
    ["Station", "Lapsley"],
    ["Falling Short", "Lapsley"],
    ["Operator", "Lapsley"],

    // CHVRCHES
    ["The Mother We Share", "CHVRCHES"],
    ["Recover", "CHVRCHES"],
    ["Gun", "CHVRCHES"],
    ["Lies", "CHVRCHES"],
    ["Leave a Trace", "CHVRCHES"],
    ["Clearest Blue", "CHVRCHES"],
    ["Never Ending Circles", "CHVRCHES"],
    ["Bury It", "CHVRCHES"],
    ["Get Out", "CHVRCHES"],
    ["Miracle", "CHVRCHES"],
    ["Graffiti", "CHVRCHES"],

    // TWO DOOR CINEMA CLUB
    ["I Can Talk", "Two Door Cinema Club"],
    ["Sun", "Two Door Cinema Club"],
    ["Next Year", "Two Door Cinema Club"],
    ["Bad Decisions", "Two Door Cinema Club"],
    ["Lavender", "Two Door Cinema Club"],
    ["Talk", "Two Door Cinema Club"],

    // BASTILLE
    ["Laura Palmer", "Bastille"],
    ["Bad Blood", "Bastille"],
    ["Send Them Off!", "Bastille"],
    ["Blame", "Bastille"],
    ["World Gone Mad", "Bastille"],
    ["Quarter Past Midnight", "Bastille"],
    ["Joy", "Bastille"],
    ["Those Nights", "Bastille"],

    // CATFISH AND THE BOTTLEMEN
    ["Homesick", "Catfish and the Bottlemen"],
    ["Rango", "Catfish and the Bottlemen"],
    ["Hourglass", "Catfish and the Bottlemen"],
    ["Fluctuate", "Catfish and the Bottlemen"],

    // THE 1975
    ["The City", "The 1975"],
    ["UGH!", "The 1975"],
    ["A Change of Heart", "The 1975"],
    ["She's American", "The 1975"],
    ["It's Not Living (If It's Not with You)", "The 1975"],
    ["Sincerity Is Scary", "The 1975"],
    ["Give Yourself a Try", "The 1975"],

    // THE MAGIC GANG
    ["How Can I Compete", "The Magic Gang"],
    ["Getting Along", "The Magic Gang"],
    ["Take Care", "The Magic Gang"],
    ["Jasmine", "The Magic Gang"],
    ["All This Way", "The Magic Gang"],
    ["No Fun", "The Magic Gang"],
    ["Your Love", "The Magic Gang"],
    ["What Have You Got to Lose", "The Magic Gang"],

    // HOT CHIP
    ["One Life Stand", "Hot Chip"],
    ["I Feel Better", "Hot Chip"],
    ["Flutes", "Hot Chip"],
    ["Night and Day", "Hot Chip"],
    ["Huarache Lights", "Hot Chip"],
    ["Need You Now", "Hot Chip"],
    ["Started Right", "Hot Chip"],
    ["Hungry Child", "Hot Chip"],
    ["Melody of Love", "Hot Chip"],

    // JAMES BLAKE
    ["The Wilhelm Scream", "James Blake"],
    ["Overgrown", "James Blake"],
    ["Voyeur", "James Blake"],
    ["Radio Silence", "James Blake"],
    ["I Need a Forest Fire", "James Blake"],
    ["Mile High", "James Blake"],
    ["Assume Form", "James Blake"],

    // PURITY RING
    ["Fineshrine", "Purity Ring"],
    ["Obedear", "Purity Ring"],
    ["Belispeak", "Purity Ring"],
    ["Lofticries", "Purity Ring"],
    ["Push Pull", "Purity Ring"],
    ["Begin Again", "Purity Ring"],
    ["Bodyache", "Purity Ring"],
    ["Heartsigh", "Purity Ring"],
    ["Sea Castle", "Purity Ring"],
    ["Repetition", "Purity Ring"],

    // DAUGHTER
    ["Youth", "Daughter"],
    ["Smother", "Daughter"],
    ["Still", "Daughter"],
    ["Human", "Daughter"],
    ["Medicine", "Daughter"],
    ["Doing the Right Thing", "Daughter"],
    ["Numbers", "Daughter"],
    ["How", "Daughter"],
    ["No Care", "Daughter"],
    ["Burn It Down", "Daughter"],

    // SWIM DEEP
    ["King City", "Swim Deep"],
    ["Honey", "Swim Deep"],
    ["The Sea", "Swim Deep"],
    ["She Changes the Weather", "Swim Deep"],
    ["One Great Song and I Could Change the World", "Swim Deep"],
    ["To My Brother", "Swim Deep"],
    ["Namaste", "Swim Deep"],
    ["Fueiho Boogie", "Swim Deep"]

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

        id: "music_" + (10767 + index),

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
