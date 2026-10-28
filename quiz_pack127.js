// quiz_pack127.js
// PuzzlePilot Big Quiz - Music Pack 127
// Mainly 2010s indie, alternative and electronic music
// 100 questions, music_10767 - music_10866
// Full artist, region, genre, album and specialist tagging

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

// Shared tags are expanded into each question at load time.
// They preserve the original question IDs, answers and difficulty.
const artistTags = {
    "Years & Years": ["Years & Years", "UK music", "synthpop", "electropop", "dance-pop", "Olly Alexander", "pop groups"],
    "The Hunna": ["The Hunna", "UK music", "indie rock", "alternative rock", "pop rock", "rock bands"],
    "DMA's": ["DMA's", "Australian music", "indie rock", "Britpop revival", "rock bands"],
    "Lapsley": ["Lapsley", "Låpsley", "UK music", "electronic music", "alternative R&B", "electronic soul", "singer-songwriters", "female vocalists"],
    "CHVRCHES": ["CHVRCHES", "Scottish music", "UK music", "synthpop", "electropop", "electronic music", "pop groups"],
    "Two Door Cinema Club": ["Two Door Cinema Club", "Northern Irish music", "UK music", "indie rock", "indie pop", "rock bands"],
    "Bastille": ["Bastille", "UK music", "indie pop", "alternative rock", "synthpop", "pop groups"],
    "Catfish and the Bottlemen": ["Catfish and the Bottlemen", "Welsh music", "UK music", "indie rock", "alternative rock", "rock bands"],
    "The 1975": ["The 1975", "UK music", "Manchester music", "indie pop", "synthpop", "alternative rock", "rock bands"],
    "The Magic Gang": ["The Magic Gang", "UK music", "Brighton music", "indie rock", "indie pop", "rock bands"],
    "Hot Chip": ["Hot Chip", "UK music", "electropop", "synthpop", "indietronica", "electronic music", "dance music"],
    "James Blake": ["James Blake", "UK music", "electronic music", "alternative R&B", "post-dubstep", "singer-songwriters", "Mercury Prize winners"],
    "Purity Ring": ["Purity Ring", "Canadian music", "synthpop", "electropop", "dream pop", "electronic duos"],
    "Daughter": ["Daughter", "UK music", "indie folk", "dream pop", "alternative rock", "bands"],
    "Swim Deep": ["Swim Deep", "UK music", "Birmingham music", "indie pop", "psychedelic pop", "shoegaze", "rock bands"]
};

// Particular recordings, albums, versions and collaborations.
// Remix or featured-artist tags do not imply every version has that guest.
const recordingTags = {
    "DMA's|Silver": ["2019 singles", "The Glow"],
    "DMA's|For Now": ["For Now", "2018 albums"],
    "DMA's|The End": ["For Now"],
    "DMA's|In the Air": ["For Now", "2018 singles"],
    "DMA's|Do I Need You Now": ["For Now", "2018 singles"],
    "Lapsley|Operator": ["Long Way Home", "DJ Koze", "dance remixes", "disco remixes"],
    "Lapsley|Falling Short": ["2014 singles", "Understudy EP"],
    "CHVRCHES|The Mother We Share": ["The Bones of What You Believe", "2013 singles"],
    "CHVRCHES|Recover": ["Recover EP", "The Bones of What You Believe"],
    "CHVRCHES|Leave a Trace": ["Every Open Eye"],
    "CHVRCHES|Clearest Blue": ["Every Open Eye"],
    "CHVRCHES|Never Ending Circles": ["Every Open Eye"],
    "CHVRCHES|Bury It": ["Every Open Eye", "Hayley Williams", "Paramore", "alternate versions", "collaborations"],
    "CHVRCHES|Get Out": ["Love Is Dead", "2018 singles"],
    "CHVRCHES|Miracle": ["Love Is Dead", "2018 singles"],
    "CHVRCHES|Graffiti": ["Love Is Dead"],
    "Two Door Cinema Club|I Can Talk": ["2009 singles", "Tourist History"],
    "Two Door Cinema Club|Sun": ["Beacon", "2012 singles"],
    "Two Door Cinema Club|Next Year": ["Beacon"],
    "Two Door Cinema Club|Bad Decisions": ["Gameshow", "2016 singles"],
    "Two Door Cinema Club|Lavender": ["Gameshow"],
    "Two Door Cinema Club|Talk": ["False Alarm", "2019 singles"],
    "Bastille|Laura Palmer": ["Bad Blood"],
    "Bastille|Bad Blood": ["Bad Blood"],
    "Bastille|Send Them Off!": ["Wild World"],
    "Bastille|Blame": ["Wild World"],
    "Bastille|World Gone Mad": ["Bright", "film soundtracks", "2017 singles"],
    "Bastille|Quarter Past Midnight": ["Doom Days", "2018 singles"],
    "Bastille|Joy": ["Doom Days", "2019 singles"],
    "Bastille|Those Nights": ["Doom Days"],
    "The 1975|The City": ["The 1975 debut album"],
    "The 1975|UGH!": ["I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It"],
    "The 1975|A Change of Heart": ["I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It"],
    "The 1975|She's American": ["I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It"],
    "The 1975|It's Not Living (If It's Not with You)": ["A Brief Inquiry Into Online Relationships"],
    "The 1975|Sincerity Is Scary": ["A Brief Inquiry Into Online Relationships"],
    "The 1975|Give Yourself a Try": ["A Brief Inquiry Into Online Relationships"],
    "The Magic Gang|All This Way": ["The Magic Gang debut album"],
    "The Magic Gang|Your Love": ["2017 singles", "The Magic Gang debut album"],
    "Hot Chip|One Life Stand": ["One Life Stand", "2010 singles"],
    "Hot Chip|I Feel Better": ["One Life Stand"],
    "Hot Chip|Flutes": ["In Our Heads"],
    "Hot Chip|Night and Day": ["In Our Heads"],
    "Hot Chip|Huarache Lights": ["Why Make Sense?"],
    "Hot Chip|Need You Now": ["Why Make Sense?"],
    "Hot Chip|Started Right": ["Why Make Sense?"],
    "Hot Chip|Hungry Child": ["A Bath Full of Ecstasy", "2019 singles"],
    "Hot Chip|Melody of Love": ["A Bath Full of Ecstasy"],
    "James Blake|The Wilhelm Scream": ["James Litherland", "Where to Turn", "cover versions", "song reinterpretations"],
    "James Blake|Overgrown": ["Overgrown", "2013 albums", "Mercury Prize winning albums"],
    "James Blake|Voyeur": ["Overgrown"],
    "James Blake|Radio Silence": ["The Colour in Anything"],
    "James Blake|I Need a Forest Fire": ["Bon Iver", "Justin Vernon", "featured artists", "collaborations", "The Colour in Anything"],
    "James Blake|Mile High": ["Travis Scott", "Metro Boomin", "featured artists", "collaborations", "Assume Form", "2019 singles"],
    "James Blake|Assume Form": ["Assume Form", "2019 albums"],
    "Purity Ring|Fineshrine": ["Shrines", "2012 albums"],
    "Purity Ring|Obedear": ["Shrines"],
    "Purity Ring|Belispeak": ["Shrines"],
    "Purity Ring|Lofticries": ["Shrines"],
    "Purity Ring|Push Pull": ["Another Eternity"],
    "Purity Ring|Begin Again": ["Another Eternity"],
    "Purity Ring|Bodyache": ["Another Eternity"],
    "Purity Ring|Heartsigh": ["Another Eternity"],
    "Purity Ring|Sea Castle": ["Another Eternity"],
    "Purity Ring|Repetition": ["Another Eternity"],
    "Daughter|Youth": ["The Wild Youth EP", "If You Leave"],
    "Daughter|Smother": ["If You Leave"],
    "Daughter|Still": ["If You Leave"],
    "Daughter|Human": ["If You Leave"],
    "Daughter|Doing the Right Thing": ["Not to Disappear"],
    "Daughter|Numbers": ["Not to Disappear"],
    "Daughter|How": ["Not to Disappear"],
    "Daughter|No Care": ["Not to Disappear"],
    "Daughter|Burn It Down": ["Life Is Strange: Before the Storm", "video game soundtracks", "Music from Before the Storm", "2017 songs"],
    "Swim Deep|King City": ["Where the Heaven Are We"],
    "Swim Deep|Honey": ["Where the Heaven Are We"],
    "Swim Deep|The Sea": ["Where the Heaven Are We"],
    "Swim Deep|She Changes the Weather": ["Where the Heaven Are We"],
    "Swim Deep|One Great Song and I Could Change the World": ["Mothers", "2015 albums"],
    "Swim Deep|To My Brother": ["Mothers"],
    "Swim Deep|Namaste": ["Mothers"],
    "Swim Deep|Fueiho Boogie": ["Mothers"]
};

// Clarify jointly credited recordings while keeping the original
// correct artists and all answer choices intact.
const questionCorrections = {
    69: "Which British musician recorded 'I Need a Forest Fire' with Bon Iver?",
    70: "Which British musician released 'Mile High' with Travis Scott and Metro Boomin?"
};

function makeTags(title, artist) {
    const original2000s = artist === "Two Door Cinema Club" && title === "I Can Talk";
    return [...new Set([
        original2000s ? "2000s" : "2010s",
        "songs",
        "artist identification",
        "recordings",
        ...artistTags[artist],
        ...(recordingTags[`${artist}|${title}`] || [])
    ])];
}

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
            questionCorrections[index] ||
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

        tags: makeTags(title, artist),

        dailyEligible: true

    };

});

module.exports = questions;
