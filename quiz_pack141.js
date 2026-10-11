
//
// quiz_pack141.js
// PuzzlePilot - Music Quiz
// Pack 141: Albums of the 1950s and 1960s
// Questions music_12101 to music_12200
//

// Each entry contains:
// [album, artist, song from album (optional)]
//
// Entries with a song ask which album contains it.
// Other entries ask who released the album.
//

const albums = [

    // =====================================================
    // 1950s
    // =====================================================

    ["Elvis Presley", "Elvis Presley", "Blue Suede Shoes"],
    ["Elvis", "Elvis Presley"],
    ["Loving You", "Elvis Presley", "(Let Me Be Your) Teddy Bear"],
    ["Elvis' Christmas Album", "Elvis Presley"],
    ["King Creole", "Elvis Presley", "Hard Headed Woman"],
    ["Here's Little Richard", "Little Richard", "Tutti Frutti"],
    ["Little Richard", "Little Richard"],
    ["The 'Chirping' Crickets", "The Crickets", "That'll Be the Day"],
    ["Buddy Holly", "Buddy Holly", "Peggy Sue"],
    ["Chuck Berry Is on Top", "Chuck Berry", "Johnny B. Goode"],

    // =====================================================
    // EARLY 1960s
    // =====================================================

    ["Bob Dylan", "Bob Dylan", "Song to Woody"],
    ["The Freewheelin' Bob Dylan", "Bob Dylan", "Blowin' in the Wind"],
    ["Please Please Me", "The Beatles", "I Saw Her Standing There"],
    ["With the Beatles", "The Beatles", "All My Loving"],
    ["Surfin' Safari", "The Beach Boys"],
    ["Surfin' U.S.A.", "The Beach Boys", "Surfin' U.S.A."],
    ["Little Deuce Coupe", "The Beach Boys"],
    ["The Fabulous Miracles", "The Miracles"],
    ["The Jazz Soul of Little Stevie", "Stevie Wonder"],
    ["The Times They Are a-Changin'", "Bob Dylan"],

    // =====================================================
    // 1964-1965
    // =====================================================

    ["A Hard Day's Night", "The Beatles", "Can't Buy Me Love"],
    ["Beatles for Sale", "The Beatles", "Eight Days a Week"],
    ["Rubber Soul", "The Beatles", "Norwegian Wood (This Bird Has Flown)"],
    ["The Rolling Stones", "The Rolling Stones"],
    ["12 X 5", "The Rolling Stones"],
    ["Out of Our Heads", "The Rolling Stones"],
    ["Bringing It All Back Home", "Bob Dylan", "Subterranean Homesick Blues"],
    ["Highway 61 Revisited", "Bob Dylan", "Like a Rolling Stone"],
    ["Mr. Tambourine Man", "The Byrds"],
    ["Turn! Turn! Turn!", "The Byrds"],

    // =====================================================
    // 1966
    // =====================================================

    ["Revolver", "The Beatles", "Eleanor Rigby"],
    ["Pet Sounds", "The Beach Boys", "God Only Knows"],
    ["Blonde on Blonde", "Bob Dylan", "Visions of Johanna"],
    ["Aftermath", "The Rolling Stones", "Under My Thumb"],
    ["Face to Face", "The Kinks", "Sunny Afternoon"],
    ["Fresh Cream", "Cream", "I Feel Free"],
    ["Fifth Dimension", "The Byrds", "Eight Miles High"],
    ["Parsley, Sage, Rosemary and Thyme", "Simon & Garfunkel", "Scarborough Fair/Canticle"],
    ["If You Can Believe Your Eyes and Ears", "The Mamas & the Papas", "California Dreamin'"],
    ["The Monkees", "The Monkees", "Last Train to Clarksville"],

    // =====================================================
    // 1967 - PART ONE
    // =====================================================

    ["Sgt. Pepper's Lonely Hearts Club Band", "The Beatles", "Lucy in the Sky with Diamonds"],
    ["Magical Mystery Tour", "The Beatles", "I Am the Walrus"],
    ["The Doors", "The Doors", "Light My Fire"],
    ["Strange Days", "The Doors", "People Are Strange"],
    ["Are You Experienced", "The Jimi Hendrix Experience", "Purple Haze"],
    ["Axis: Bold as Love", "The Jimi Hendrix Experience", "Little Wing"],
    ["Disraeli Gears", "Cream", "Sunshine of Your Love"],
    ["The Velvet Underground & Nico", "The Velvet Underground & Nico", "Sunday Morning"],
    ["The Piper at the Gates of Dawn", "Pink Floyd", "Astronomy Domine"],
    ["The Who Sell Out", "The Who", "I Can See for Miles"],

    // =====================================================
    // 1967 - PART TWO
    // =====================================================

    ["Something Else by the Kinks", "The Kinks", "Waterloo Sunset"],
    ["Forever Changes", "Love", "Alone Again Or"],
    ["Days of Future Passed", "The Moody Blues", "Nights in White Satin"],
    ["Surrealistic Pillow", "Jefferson Airplane", "White Rabbit"],
    ["Younger Than Yesterday", "The Byrds", "So You Want to Be a Rock 'n' Roll Star"],
    ["Headquarters", "The Monkees"],
    ["Pisces, Aquarius, Capricorn & Jones Ltd.", "The Monkees"],
    ["John Wesley Harding", "Bob Dylan", "All Along the Watchtower"],
    ["Their Satanic Majesties Request", "The Rolling Stones", "She's a Rainbow"],
    ["Buffalo Springfield Again", "Buffalo Springfield"],

    // =====================================================
    // 1968 - PART ONE
    // =====================================================

    ["The Beatles", "The Beatles", "Back in the U.S.S.R."],
    ["Beggars Banquet", "The Rolling Stones", "Sympathy for the Devil"],
    ["Electric Ladyland", "The Jimi Hendrix Experience", "Voodoo Child (Slight Return)"],
    ["Wheels of Fire", "Cream", "White Room"],
    ["Waiting for the Sun", "The Doors", "Hello, I Love You"],
    ["The Kinks Are the Village Green Preservation Society", "The Kinks", "Village Green Preservation Society"],
    ["Odessey and Oracle", "The Zombies", "Time of the Season"],
    ["Music from Big Pink", "The Band", "The Weight"],
    ["The Notorious Byrd Brothers", "The Byrds"],
    ["Sweetheart of the Rodeo", "The Byrds"],

    // =====================================================
    // 1968 - PART TWO
    // =====================================================

    ["Bookends", "Simon & Garfunkel", "America"],
    ["The Birds, the Bees & the Monkees", "The Monkees", "Daydream Believer"],
    ["Head", "The Monkees"],
    ["A Saucerful of Secrets", "Pink Floyd", "Set the Controls for the Heart of the Sun"],
    ["The Hurdy Gurdy Man", "Donovan"],
    ["The Hangman's Beautiful Daughter", "The Incredible String Band"],
    ["Cheap Thrills", "Big Brother and the Holding Company", "Piece of My Heart"],
    ["The Soft Machine", "Soft Machine"],
    ["The Crazy World of Arthur Brown", "The Crazy World of Arthur Brown", "Fire"],
    ["Traffic", "Traffic", "Feelin' Alright?"],

    // =====================================================
    // 1969 - PART ONE
    // =====================================================

    ["Let It Bleed", "The Rolling Stones", "Gimme Shelter"],
    ["Tommy", "The Who", "Pinball Wizard"],
    ["Led Zeppelin", "Led Zeppelin", "Good Times Bad Times"],
    ["Led Zeppelin II", "Led Zeppelin", "Whole Lotta Love"],
    ["In the Court of the Crimson King", "King Crimson", "21st Century Schizoid Man"],
    ["Stand!", "Sly and the Family Stone", "Everyday People"],
    ["Green River", "Creedence Clearwater Revival", "Bad Moon Rising"],
    ["Willy and the Poor Boys", "Creedence Clearwater Revival", "Fortunate Son"],
    ["Bayou Country", "Creedence Clearwater Revival", "Proud Mary"],
    ["Nashville Skyline", "Bob Dylan", "Lay Lady Lay"],

    // =====================================================
    // 1969 - PART TWO
    // =====================================================

    ["The Band", "The Band", "The Night They Drove Old Dixie Down"],
    ["Crosby, Stills & Nash", "Crosby, Stills & Nash", "Suite: Judy Blue Eyes"],
    ["Everybody Knows This Is Nowhere", "Neil Young with Crazy Horse", "Cinnamon Girl"],
    ["Hot Rats", "Frank Zappa", "Peaches en Regalia"],
    ["Five Leaves Left", "Nick Drake", "River Man"],
    ["Dusty in Memphis", "Dusty Springfield", "Son of a Preacher Man"],
    ["From Elvis in Memphis", "Elvis Presley", "In the Ghetto"],
    ["David Bowie (Space Oddity)", "David Bowie", "Space Oddity"],
    ["Arthur (Or the Decline and Fall of the British Empire)", "The Kinks", "Victoria"],
    ["Ummagumma", "Pink Floyd"]

];

// =====================================================
// SOURCE VALIDATION
// =====================================================

if (albums.length !== 100) {
    throw new Error(
        "Pack 141 must contain exactly 100 albums. Found: " +
        albums.length
    );
}

const normalise = value =>
    String(value || "")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

const albumKeys = new Set();

for (const entry of albums) {

    const [album, artist, song] = entry;

    if (!album || !artist) {
        throw new Error(
            "Album or artist missing from Pack 141."
        );
    }

    const key =
        normalise(album) + "|" + normalise(artist);

    if (albumKeys.has(key)) {
        throw new Error(
            "Repeated album and artist: " +
            album + " - " + artist
        );
    }

    albumKeys.add(key);

    if (entry.length > 3) {
        throw new Error(
            "Too many fields for album: " + album
        );
    }
}

// =====================================================
// ANSWER POOLS
// =====================================================

const artistPool = [
    ...new Set(albums.map(entry => entry[1]))
];

const albumPool = albums.map(entry => entry[0]);

if (
    artistPool.length < 4 ||
    albumPool.length < 4
) {
    throw new Error(
        "Not enough distinct answers in Pack 141."
    );
}

// =====================================================
// BUILD FOUR ANSWER CHOICES
// =====================================================

function makeAnswers(correct, pool, index) {

    const otherAnswers = pool.filter(
        answer => answer !== correct
    );

    const wrongAnswers = [];

    let position =
        (index * 7) % otherAnswers.length;

    while (wrongAnswers.length < 3) {

        const candidate =
            otherAnswers[position];

        if (!wrongAnswers.includes(candidate)) {
            wrongAnswers.push(candidate);
        }

        position =
            (position + 1) % otherAnswers.length;
    }

    const answers = [
        correct,
        ...wrongAnswers
    ];

    const shift = index % 4;

    return [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];
}

// =====================================================
// GENERATE QUESTIONS
// =====================================================

const quizPack141 = albums.map(
    ([album, artist, song], index) => {

        let question;
        let correctAnswer;
        let answerPool;

        if (song) {

            // Ask which album contains a song.

            question =
                "Which album features the song '" +
                song + "'?";

            correctAnswer = album;
            answerPool = albumPool;

        } else {

            // Ask which artist released an album.

            question =
                "Which artist or band released the album '" +
                album + "'?";

            correctAnswer = artist;
            answerPool = artistPool;
        }

        return {
            id: "music_" + (12101 + index),
            category: "Music",
            question: question,
            answers: makeAnswers(
                correctAnswer,
                answerPool,
                index
            ),
            correctAnswer: correctAnswer
        };
    }
);

// =====================================================
// FINAL VALIDATION
// =====================================================

const questionIds = new Set();
const questionTexts = new Set();

for (const question of quizPack141) {

    if (questionIds.has(question.id)) {
        throw new Error(
            "Repeated question ID: " + question.id
        );
    }

    questionIds.add(question.id);

    const textKey = normalise(question.question);

    if (questionTexts.has(textKey)) {
        throw new Error(
            "Repeated question: " + question.question
        );
    }

    questionTexts.add(textKey);

    if (question.answers.length !== 4) {
        throw new Error(
            "Incorrect answer count: " + question.id
        );
    }

    if (!question.answers.includes(
        question.correctAnswer
    )) {
        throw new Error(
            "Correct answer missing: " + question.id
        );
    }

    if (new Set(question.answers).size !== 4) {
        throw new Error(
            "Repeated answer choices: " + question.id
        );
    }
}

if (
    quizPack141[0].id !== "music_12101" ||
    quizPack141[99].id !== "music_12200"
) {
    throw new Error(
        "Pack 141 question IDs are incorrect."
    );
}

// =====================================================
// EXPORT PACK
// =====================================================

module.exports = quizPack141;
