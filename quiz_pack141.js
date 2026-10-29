 // quiz_pack141.js
// PuzzlePilot Big Quiz - Music Pack 141
// 1950s and 1960s albums: music_12101 to music_12200
// Album identification and album-track questions.
// Corrects edition-specific questions and the Bowie reissue title.

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
    ["The Kinks Are the Village Green Preservation Society", "The Kinks", "The Village Green Preservation Society"],
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
    ["Space Oddity", "David Bowie", "Space Oddity"],
    ["Arthur (Or the Decline and Fall of the British Empire)", "The Kinks", "Victoria"],
    ["Ummagumma", "Pink Floyd"]

];

// Each year is the album's original release year, not a single's year.
// Entries correspond to the order in albums[].
const albumYears = [
    1956, 1956, 1957, 1957, 1958, 1957, 1958, 1957, 1958, 1959,
    1962, 1963, 1963, 1963, 1962, 1963, 1963, 1963, 1962, 1964,
    1964, 1964, 1965, 1964, 1964, 1965, 1965, 1965, 1965, 1965,
    1966, 1966, 1966, 1966, 1966, 1966, 1966, 1966, 1966, 1966,
    1967, 1967, 1967, 1967, 1967, 1967, 1967, 1967, 1967, 1967,
    1967, 1967, 1967, 1967, 1967, 1967, 1967, 1967, 1967, 1967,
    1968, 1968, 1968, 1968, 1968, 1968, 1968, 1968, 1968, 1968,
    1968, 1968, 1968, 1968, 1968, 1968, 1968, 1968, 1968, 1968,
    1969, 1969, 1969, 1969, 1969, 1969, 1969, 1969, 1969, 1969,
    1969, 1969, 1969, 1969, 1969, 1969, 1969, 1969, 1969, 1969
];

// Shared specialist tags, expanded into every generated question.
const artistTags = {
    "Elvis Presley": ["American music", "rock and roll", "rockabilly", "male vocalists", "Memphis music"],
    "Little Richard": ["American music", "rock and roll", "piano", "early rock"],
    "The Crickets": ["American music", "rock and roll", "rockabilly", "Buddy Holly", "bands"],
    "Buddy Holly": ["American music", "rock and roll", "rockabilly", "singer-songwriters"],
    "Chuck Berry": ["American music", "rock and roll", "guitarists", "early rock"],
    "Bob Dylan": ["American music", "folk music", "folk rock", "singer-songwriters"],
    "The Beatles": ["UK music", "Liverpool music", "British Invasion", "pop rock", "rock bands"],
    "The Beach Boys": ["American music", "California music", "surf rock", "pop rock", "Brian Wilson"],
    "The Miracles": ["American music", "Detroit music", "Motown", "soul", "Smokey Robinson"],
    "Stevie Wonder": ["American music", "Motown", "jazz", "soul", "Little Stevie Wonder"],
    "The Rolling Stones": ["UK music", "British Invasion", "blues rock", "rock bands"],
    "The Byrds": ["American music", "folk rock", "jangle pop", "rock bands"],
    "The Kinks": ["UK music", "British Invasion", "rock bands", "Ray Davies"],
    "Cream": ["UK music", "blues rock", "psychedelic rock", "power trios", "Eric Clapton"],
    "Simon & Garfunkel": ["American music", "folk rock", "folk music", "vocal duos"],
    "The Mamas & the Papas": ["American music", "folk rock", "sunshine pop", "vocal groups"],
    "The Monkees": ["American music", "pop rock", "television bands", "rock bands"],
    "The Doors": ["American music", "psychedelic rock", "Los Angeles music", "Jim Morrison"],
    "The Jimi Hendrix Experience": ["rock music", "psychedelic rock", "Jimi Hendrix", "guitarists", "power trios"],
    "The Velvet Underground & Nico": ["American music", "New York music", "art rock", "experimental rock", "Nico", "Lou Reed"],
    "Pink Floyd": ["UK music", "psychedelic rock", "progressive rock", "rock bands"],
    "The Who": ["UK music", "rock music", "rock operas", "British Invasion"],
    "Love": ["American music", "psychedelic rock", "folk rock", "Arthur Lee"],
    "The Moody Blues": ["UK music", "progressive rock", "symphonic rock", "rock bands"],
    "Jefferson Airplane": ["American music", "San Francisco music", "psychedelic rock", "Grace Slick"],
    "Buffalo Springfield": ["American music", "folk rock", "country rock", "Neil Young", "Stephen Stills"],
    "The Zombies": ["UK music", "psychedelic pop", "baroque pop", "British Invasion"],
    "The Band": ["Canadian music", "American roots rock", "Americana", "rock bands"],
    "Donovan": ["Scottish music", "UK music", "folk rock", "psychedelic folk"],
    "The Incredible String Band": ["Scottish music", "UK music", "psychedelic folk", "folk music"],
    "Big Brother and the Holding Company": ["American music", "San Francisco music", "psychedelic rock", "Janis Joplin"],
    "Soft Machine": ["UK music", "Canterbury scene", "psychedelic rock", "jazz rock"],
    "The Crazy World of Arthur Brown": ["UK music", "psychedelic rock", "Arthur Brown", "rock bands"],
    "Traffic": ["UK music", "psychedelic rock", "folk rock", "Steve Winwood"],
    "Led Zeppelin": ["UK music", "hard rock", "blues rock", "rock bands"],
    "King Crimson": ["UK music", "progressive rock", "art rock", "rock bands"],
    "Sly and the Family Stone": ["American music", "funk", "soul", "psychedelic soul"],
    "Creedence Clearwater Revival": ["American music", "swamp rock", "roots rock", "John Fogerty"],
    "Crosby, Stills & Nash": ["American music", "folk rock", "vocal harmonies", "supergroups"],
    "Neil Young with Crazy Horse": ["Canadian music", "rock music", "Neil Young", "Crazy Horse", "rock bands"],
    "Frank Zappa": ["American music", "jazz rock", "experimental rock", "guitarists"],
    "Nick Drake": ["UK music", "folk music", "singer-songwriters", "folk rock"],
    "Dusty Springfield": ["UK music", "blue-eyed soul", "soul", "female vocalists"],
    "David Bowie": ["UK music", "art rock", "folk rock", "singer-songwriters"]
};

// Specialist facts tied to the particular album (not every album by its act).
const albumTags = {
    "Loving You": ["film soundtracks", "Elvis films"],
    "Elvis' Christmas Album": ["Christmas music", "Christmas albums", "seasonal music"],
    "King Creole": ["film soundtracks", "Elvis films"],
    "Here's Little Richard": ["debut albums"],
    "The 'Chirping' Crickets": ["debut albums", "Buddy Holly and the Crickets"],
    "The Freewheelin' Bob Dylan": ["protest songs", "folk revival"],
    "Please Please Me": ["debut albums", "1960s British pop"],
    "Surfin' Safari": ["debut albums", "surf music"],
    "The Fabulous Miracles": ["Tamla Records", "Motown albums"],
    "The Jazz Soul of Little Stevie": ["debut albums", "instrumental albums", "harmonica", "Tamla Records"],
    "A Hard Day's Night": ["film soundtracks", "Beatles films"],
    "Rubber Soul": ["folk rock", "landmark albums"],
    "The Rolling Stones": ["UK debut albums", "British Invasion"],
    "12 X 5": ["US album releases"],
    "Bringing It All Back Home": ["electric folk rock"],
    "Highway 61 Revisited": ["landmark albums", "electric folk rock"],
    "Pet Sounds": ["Brian Wilson", "baroque pop", "landmark albums"],
    "Blonde on Blonde": ["double albums", "landmark albums"],
    "Fresh Cream": ["debut albums", "UK and US album editions", "US track lists"],
    "If You Can Believe Your Eyes and Ears": ["debut albums", "California sound"],
    "Sgt. Pepper's Lonely Hearts Club Band": ["concept albums", "landmark albums"],
    "Magical Mystery Tour": ["1967 US LP", "UK double EP", "Beatles films", "film soundtracks"],
    "The Doors": ["debut albums", "psychedelic rock"],
    "Are You Experienced": ["debut albums", "psychedelic rock"],
    "The Velvet Underground & Nico": ["debut albums", "Andy Warhol", "banana cover"],
    "The Who Sell Out": ["concept albums", "radio advertisements"],
    "Forever Changes": ["landmark albums", "psychedelic folk"],
    "Days of Future Passed": ["orchestral rock", "concept albums"],
    "Headquarters": ["The Monkees television series"],
    "The Beatles": ["White Album", "double albums", "1968 Beatles album"],
    "The Kinks Are the Village Green Preservation Society": ["concept albums", "English village life"],
    "Odessey and Oracle": ["psychedelic pop", "landmark albums"],
    "Music from Big Pink": ["debut albums", "Americana"],
    "Sweetheart of the Rodeo": ["country rock", "landmark albums"],
    "A Saucerful of Secrets": ["Syd Barrett", "David Gilmour"],
    "Cheap Thrills": ["Janis Joplin", "landmark albums"],
    "The Soft Machine": ["debut albums", "Canterbury scene"],
    "Tommy": ["rock operas", "concept albums"],
    "Led Zeppelin": ["debut albums", "hard rock"],
    "In the Court of the Crimson King": ["debut albums", "progressive rock", "landmark albums"],
    "Hot Rats": ["instrumental albums", "jazz rock"],
    "Five Leaves Left": ["debut albums", "British folk"],
    "Dusty in Memphis": ["Memphis soul", "blue-eyed soul"],
    "From Elvis in Memphis": ["Elvis comeback", "Memphis music"],
    "Space Oddity": ["originally titled David Bowie", "1972 reissue titles", "Man of Words/Man of Music"],
    "Ummagumma": ["double albums", "live albums", "studio recordings"]
};

// Clarify the few edition-sensitive or otherwise ambiguous questions.
const questionCorrections = {
    "Elvis Presley|Blue Suede Shoes": "Which Elvis Presley debut album features his recording of 'Blue Suede Shoes'?",
    "Fresh Cream|I Feel Free": "Which Cream album includes 'I Feel Free' on its original US edition?",
    "Magical Mystery Tour|I Am the Walrus": "Which 1967 Beatles US LP features 'I Am the Walrus'?",
    "John Wesley Harding|All Along the Watchtower": "Which Bob Dylan album contains his original recording of 'All Along the Watchtower'?",
    "The Beatles|Back in the U.S.S.R.": "Which Beatles double album, commonly called the White Album, opens with 'Back in the U.S.S.R.'?",
    "Space Oddity|Space Oddity": "Under what title was David Bowie's self-titled 1969 second album reissued in 1972?"
};

const normalise = value => String(value || "")
    .toLowerCase().replace(/[^a-z0-9]/g, "");

if (albums.length !== 100 || albumYears.length !== 100) {
    throw new Error("Pack 141 requires exactly 100 albums and release years");
}
const albumKeys = new Set();
for (const [album, artist] of albums) {
    if (!album || !artist || !artistTags[artist]) {
        throw new Error("Invalid album or missing artist tags: " + album);
    }
    const key = normalise(album) + "|" + normalise(artist);
    if (albumKeys.has(key)) throw new Error("Repeated album: " + album);
    albumKeys.add(key);
}

const artistPool = [...new Set(albums.map(entry => entry[1]))];
const albumPool = albums.map(entry => entry[0]);

// Preserve the original three-distractor selection and answer rotation.
function makeAnswers(correct, pool, index) {
    const others = pool.filter(answer => answer !== correct);
    const wrong = [];
    let position = (index * 7) % others.length;
    while (wrong.length < 3) {
        const candidate = others[position];
        if (!wrong.includes(candidate)) wrong.push(candidate);
        position = (position + 1) % others.length;
    }
    const answers = [correct, ...wrong];
    const shift = index % 4;
    return [...answers.slice(shift), ...answers.slice(0, shift)];
}

const quizPack141 = albums.map(([album, artist, song], index) => {
    const year = albumYears[index];
    const albumQuestion = Boolean(song);
    const key = album + "|" + (song || "");
    const question = questionCorrections[key] || (albumQuestion
        ? "Which album features the song '" + song + "'?"
        : "Which artist or band released the album '" + album + "'?");
    const tags = [...new Set([
        "Music", "albums", "album trivia", "album history",
        year < 1960 ? "1950s" : "1960s", String(year),
        albumQuestion ? "album identification" : "artist identification",
        album, artist, ...artistTags[artist], ...(albumTags[album] || []),
        ...(song ? [song, "album tracks"] : [])
    ])];
    return {
        id: "music_" + (12101 + index),
        category: "Music",
        question,
        answers: makeAnswers(albumQuestion ? album : artist,
            albumQuestion ? albumPool : artistPool, index),
        correctAnswer: albumQuestion ? album : artist,
        difficulty: index % 3 === 0 ? "Easy" : "Medium",
        tags,
        dailyEligible: true
    };
});

const seenQuestions = new Set();
for (const [index, q] of quizPack141.entries()) {
    const questionKey = normalise(q.question);
    if (q.id !== "music_" + (12101 + index) ||
        q.answers.length !== 4 || new Set(q.answers).size !== 4 ||
        !q.answers.includes(q.correctAnswer) ||
        seenQuestions.has(questionKey) || q.tags.length < 8 ||
        !["Easy", "Medium", "Hard"].includes(q.difficulty) ||
        q.dailyEligible !== true) {
        throw new Error("Pack 141 validation failed: " + q.id);
    }
    seenQuestions.add(questionKey);
}
if (quizPack141[0].id !== "music_12101" ||
    quizPack141[99].id !== "music_12200") {
    throw new Error("Pack 141 question ID range incorrect");
}
module.exports = quizPack141;
