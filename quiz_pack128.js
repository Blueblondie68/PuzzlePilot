 // =========================================================
// PUZZLEPILOT - MUSIC QUIZ PACK 128
// Audited: artist, country, genre, collaboration and specialist tags
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
    ["Our Version of Events", "Emeli Sande"],
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

// Artist metadata is expanded into every generated question.
const artistTags = {
    "Florence + The Machine": ["Florence + the Machine", "UK music", "indie rock", "art pop", "baroque pop", "rock bands"],
    "Ellie Goulding": ["Ellie Goulding", "UK music", "electropop", "indie pop", "singer-songwriters"],
    "Marina and the Diamonds": ["Marina and the Diamonds", "MARINA", "Marina Diamandis", "Welsh music", "UK music", "indie pop", "electropop", "synthpop", "singer-songwriters"],
    "Marina": ["MARINA", "Marina and the Diamonds", "Marina Diamandis", "Welsh music", "UK music", "electropop", "art pop", "singer-songwriters"],
    "Birdy": ["Birdy", "UK music", "indie folk", "piano pop", "singer-songwriters"],
    "Jessie Ware": ["Jessie Ware", "UK music", "alternative R&B", "soul", "electropop", "singer-songwriters"],
    "Rudimental": ["Rudimental", "UK music", "drum and bass", "electronic music", "dance music", "bands"],
    "Clean Bandit": ["Clean Bandit", "UK music", "dance-pop", "house music", "classical crossover", "electronic groups"],
    "Paloma Faith": ["Paloma Faith", "UK music", "pop soul", "retro soul", "singer-songwriters"],
    "Emeli Sande": ["Emeli Sandé", "Scottish music", "UK music", "soul", "R&B", "singer-songwriters"],
    "Gabrielle Aplin": ["Gabrielle Aplin", "UK music", "folk pop", "indie folk", "singer-songwriters"],
    "Foxes": ["Foxes", "Louisa Allen", "UK music", "electropop", "synthpop", "female vocalists"],
    "RAYE": ["RAYE", "UK music", "R&B", "dance-pop", "singer-songwriters"],
    "Becky Hill": ["Becky Hill", "UK music", "dance-pop", "house music", "electronic dance music", "female vocalists", "The Voice UK"],
    "London Grammar": ["London Grammar", "UK music", "indie pop", "dream pop", "electronic music", "bands"],
    "Sigrid": ["Sigrid", "Norwegian music", "electropop", "synthpop", "female vocalists"],
    "Freya Ridings": ["Freya Ridings", "UK music", "piano pop", "pop", "singer-songwriters"],
    "Tom Odell": ["Tom Odell", "UK music", "piano pop", "indie pop", "singer-songwriters"],
    "Ella Henderson": ["Ella Henderson", "UK music", "pop", "soul pop", "The X Factor", "singer-songwriters"]
};

// Song-specific tags identify covers, featured vocalists,
// joint credits and album connections without changing scoring.
const recordingTags = {
    "Florence + The Machine|No Light, No Light": ["Ceremonials"],
    "Florence + The Machine|What the Water Gave Me": ["Ceremonials"],
    "Florence + The Machine|Queen of Peace": ["How Big, How Blue, How Beautiful"],
    "Florence + The Machine|Delilah": ["How Big, How Blue, How Beautiful"],
    "Florence + The Machine|Sky Full of Song": ["High as Hope"],
    "Florence + The Machine|Big God": ["High as Hope"],
    "Marina and the Diamonds|Primadonna": ["Electra Heart"],
    "Marina and the Diamonds|Power and Control": ["Electra Heart"],
    "Marina and the Diamonds|How to Be a Heartbreaker": ["Electra Heart"],
    "Marina and the Diamonds|Froot": ["Froot"],
    "Marina and the Diamonds|Happy": ["Froot"],
    "Marina and the Diamonds|Blue": ["Froot"],
    "Marina and the Diamonds|Forget": ["Froot"],
    "Marina|Handmade Heaven": ["Love + Fear"],
    "Marina|Orange Trees": ["Love + Fear"],
    "Marina|To Be Human": ["Love + Fear"],
    "Birdy|1901": ["Phoenix", "cover versions", "original artists"],
    "Birdy|Shelter": ["The xx", "cover versions", "original artists"],
    "Jessie Ware|Running": ["Devotion"],
    "Jessie Ware|110%": ["Devotion"],
    "Jessie Ware|Imagine It Was Us": ["Devotion"],
    "Jessie Ware|Tough Love": ["Tough Love"],
    "Jessie Ware|Champagne Kisses": ["Tough Love"],
    "Jessie Ware|Kind Of...Sometimes...Maybe": ["Tough Love"],
    "Rudimental|Not Giving In": ["John Newman", "Alex Clare", "featured artists", "collaborations"],
    "Rudimental|Right Here": ["Foxes", "featured artists", "collaborations"],
    "Rudimental|Never Let You Go": ["Foy Vance", "guest vocals", "collaborations"],
    "Rudimental|Rumour Mill": ["Anne-Marie", "Will Heard", "featured artists", "collaborations"],
    "Rudimental|Let Me Live": ["Major Lazer", "Anne-Marie", "Mr Eazi", "collaborations", "featured artists"],
    "Clean Bandit|Mozart House": ["Love Ssega", "featured artists", "collaborations"],
    "Clean Bandit|Come Over": ["Stylo G", "featured artists", "collaborations"],
    "Clean Bandit|Baby": ["MARINA", "Luis Fonsi", "featured artists", "collaborations"],
    "Emeli Sande|Daddy": ["Naughty Boy", "featured artists", "collaborations"],
    "Emeli Sande|Wonder": ["Naughty Boy", "featured artists", "collaborations"],
    "Gabrielle Aplin|The Power of Love": ["Frankie Goes to Hollywood", "cover versions", "original artists", "Christmas adverts"],
    "Foxes|If You Leave Me Now": ["All I Need", "2015 singles"],
    "RAYE|Flowers": ["2015 singles"],
    "RAYE|Decline": ["Mr Eazi", "featured artists", "collaborations"],
    "RAYE|Cigarette": ["Mabel", "Stefflon Don", "featured artists", "collaborations"],
    "Becky Hill|Afterglow": ["Wilkinson", "featured artists", "collaborations", "drum and bass"],
    "Becky Hill|Gecko (Overdrive)": ["Oliver Heldens", "featured artists", "collaborations", "UK number ones"],
    "Becky Hill|Back & Forth": ["MK", "Jonas Blue", "collaborations", "house music"],
    "Becky Hill|Wish You Well": ["Sigala", "collaborations", "dance music"],
    "London Grammar|Hey Now": ["If You Wait"],
    "London Grammar|Metal & Dust": ["If You Wait"],
    "London Grammar|Sights": ["If You Wait"],
    "London Grammar|Rooting for You": ["Truth Is a Beautiful Thing"],
    "Tom Odell|Another Love": ["Long Way Down"],
    "Ella Henderson|Giants": ["Chapter One", "2014 albums"],
    "Ella Henderson|Beautifully Unfinished": ["Chapter One"],
    "Ella Henderson|Missed": ["The X Factor", "Chapter One"]
};

// One genuine duplicate from Pack 123 becomes an album question.
// Collaborative recordings are clarified with one unambiguous answer.
const questionCorrections = {
    36: "Which British group released 'Not Giving In' featuring John Newman and Alex Clare?",
    37: "Which British group recorded 'Right Here' featuring Foxes?",
    39: "Which British group released 'Rumour Mill' featuring Anne-Marie and Will Heard?",
    40: "Which British group collaborated with Major Lazer on 'Let Me Live'?",
    43: "Which British group recorded 'Baby' featuring MARINA and Luis Fonsi?",
    50: "Which Scottish singer released the debut album Our Version of Events?",
    53: "Which Scottish singer provided the vocals on Naughty Boy's 'Wonder'?",
    54: "Which British singer covered Frankie Goes to Hollywood's 'The Power of Love'?",
    66: "Which British singer recorded 'Decline' featuring Mr Eazi?",
    67: "Which British singer recorded 'Cigarette' featuring Mabel and Stefflon Don?",
    69: "Which British singer provided the vocals on Wilkinson's 'Afterglow'?",
    70: "Which British singer provided the vocals on Oliver Heldens' 'Gecko (Overdrive)'?",
    72: "Which British singer released 'Back & Forth' with MK and Jonas Blue?",
    73: "Which British singer collaborated with Sigala on 'Wish You Well'?"
};

function makeTags(title, artist) {
    if (artist === "Emeli Sande" && title === "Our Version of Events") {
        return [
            "2010s",
            "albums",
            "debut albums",
            "album identification",
            "2012 albums",
            "Our Version of Events",
            ...artistTags[artist]
        ];
    }

    return [...new Set([
        "2010s",
        "songs",
        "artist identification",
        "recordings",
        ...artistTags[artist],
        ...(recordingTags[`${artist}|${title}`] || [])
    ])];
}

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

    // MARINA and Marina and the Diamonds are the same singer.
    // Do not offer both stage names as two possible answers.
    if (
        correctArtist === "Marina" ||
        correctArtist === "Marina and the Diamonds"
    ) {
        const otherName = correctArtist === "Marina"
            ? "Marina and the Diamonds"
            : "Marina";

        const duplicateChoice = answers.indexOf(otherName);

        if (duplicateChoice !== -1) {
            answers[duplicateChoice] = artists.find(
                name =>
                    name !== correctArtist &&
                    name !== otherName &&
                    !answers.includes(name)
            );
        }
    }

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
