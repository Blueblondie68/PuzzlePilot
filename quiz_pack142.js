 // quiz_pack142.js
// PuzzlePilot - The Bigggggg Quiz
// Music Albums: Pack 142
// 100 albums from the 1950s and 1960s.
// IDs music_12201 to music_12300.
// Original question and answer generation retained; one date corrected.

const albumFacts = [
    ["In the Wee Small Hours", "Frank Sinatra", "", 1955],
    ["Songs for Swingin' Lovers!", "Frank Sinatra", "I've Got You Under My Skin", 1956],
    ["Come Fly with Me", "Frank Sinatra", "", 1958],
    ["Love Is the Thing", "Nat King Cole", "Stardust", 1957],
    ["After Midnight", "Nat King Cole", "", 1956],
    ["Johnny Cash with His Hot and Blue Guitar!", "Johnny Cash", "", 1957],
    ["Gunfighter Ballads and Trail Songs", "Marty Robbins", "El Paso", 1959],
    ["The Everly Brothers", "The Everly Brothers", "", 1958],
    ["Songs Our Daddy Taught Us", "The Everly Brothers", "", 1958],
    ["Bluejean Bop!", "Gene Vincent", "", 1956],
    ["Singin' to My Baby", "Eddie Cochran", "", 1957],
    ["After School Session", "Chuck Berry", "", 1957],
    ["This Is Fats Domino!", "Fats Domino", "", 1956],
    ["Rock Around the Clock", "Bill Haley and His Comets", "Rock Around the Clock", 1955],
    ["Bo Diddley", "Bo Diddley", "", 1958],
    ["Time Out", "The Dave Brubeck Quartet", "Take Five", 1959],
    ["Kind of Blue", "Miles Davis", "So What", 1959],
    ["The Genius of Ray Charles", "Ray Charles", "Let the Good Times Roll", 1959],
    ["Little Girl Blue", "Nina Simone", "I Loves You, Porgy", 1959],
    ["The Fabulous Johnny Cash", "Johnny Cash", "", 1958],
    ["The Sound of Fury", "Billy Fury", "", 1960],
    ["Lonely and Blue", "Roy Orbison", "", 1961],
    ["Crying", "Roy Orbison", "Crying", 1962],
    ["The Shadows", "The Shadows", "", 1961],
    ["In the Wind", "Peter, Paul and Mary", "Blowin' in the Wind", 1963],
    ["Another Side of Bob Dylan", "Bob Dylan", "", 1964],
    ["Sounds of Silence", "Simon & Garfunkel", "I Am a Rock", 1966],
    ["Meet the Searchers", "The Searchers", "", 1963],
    ["Sugar and Spice", "The Searchers", "", 1963],
    ["The Five Faces of Manfred Mann", "Manfred Mann", "", 1964],
    ["A Girl Called Dusty", "Dusty Springfield", "", 1964],
    ["Where Did Our Love Go", "The Supremes", "Baby Love", 1964],
    ["Heat Wave", "Martha and the Vandellas", "", 1963],
    ["Meet the Temptations", "The Temptations", "", 1964],
    ["Four Tops", "The Four Tops", "", 1965],
    ["Help!", "The Beatles", "Help!", 1965],
    ["Kinda Kinks", "The Kinks", "", 1965],
    ["The Kink Kontroversy", "The Kinks", "Till the End of the Day", 1965],
    ["My Generation", "The Who", "My Generation", 1965],
    ["A Quick One", "The Who", "", 1966],
    ["Begin Here", "The Zombies", "", 1965],
    ["Stay with the Hollies", "The Hollies", "", 1964],
    ["Evolution", "The Hollies", "", 1967],
    ["Roger the Engineer", "The Yardbirds", "", 1966],
    ["The Mamas & the Papas", "The Mamas & the Papas", "", 1966],
    ["Daydream", "The Lovin' Spoonful", "Daydream", 1966],
    ["Hums of the Lovin' Spoonful", "The Lovin' Spoonful", "Summer in the City", 1966],
    ["More of the Monkees", "The Monkees", "I'm a Believer", 1967],
    ["Surfer Girl", "The Beach Boys", "", 1963],
    ["All Summer Long", "The Beach Boys", "I Get Around", 1964],
    ["Smiley Smile", "The Beach Boys", "Good Vibrations", 1967],
    ["Wild Honey", "The Beach Boys", "", 1967],
    ["Between the Buttons", "The Rolling Stones", "", 1967],
    ["Sunshine Superman", "Donovan", "Sunshine Superman", 1966],
    ["Mellow Yellow", "Donovan", "", 1967],
    ["Bee Gees' 1st", "Bee Gees", "To Love Somebody", 1967],
    ["Odessa", "Bee Gees", "", 1969],
    ["In Dreams", "Roy Orbison", "", 1963],
    ["I Never Loved a Man the Way I Love You", "Aretha Franklin", "", 1967],
    ["Lady Soul", "Aretha Franklin", "Chain of Fools", 1968],
    ["Aretha Now", "Aretha Franklin", "Think", 1968],
    ["Otis Blue", "Otis Redding", "", 1965],
    ["The Dock of the Bay", "Otis Redding", "(Sittin' On) The Dock of the Bay", 1968],
    ["Reach Out", "The Four Tops", "Reach Out I'll Be There", 1967],
    ["Gettin' Ready", "The Temptations", "Ain't Too Proud to Beg", 1966],
    ["Up-Tight", "Stevie Wonder", "Uptight (Everything's Alright)", 1966],
    ["For Once in My Life", "Stevie Wonder", "", 1968],
    ["I Heard It Through the Grapevine!", "Marvin Gaye", "I Heard It Through the Grapevine", 1968],
    ["In the Midnight Hour", "Wilson Pickett", "", 1965],
    ["The Exciting Wilson Pickett", "Wilson Pickett", "Land of 1000 Dances", 1966],
    ["Soul Men", "Sam & Dave", "Soul Man", 1967],
    ["Green Onions", "Booker T. & the M.G.'s", "Green Onions", 1962],
    ["At Last!", "Etta James", "At Last", 1960],
    ["Pastel Blues", "Nina Simone", "", 1965],
    ["Live at the Regal", "B.B. King", "", 1965],
    ["Papa's Got a Brand New Bag", "James Brown", "Papa's Got a Brand New Bag", 1965],
    ["The Age of Aquarius", "The 5th Dimension", "Aquarius/Let the Sunshine In", 1969],
    ["Whipped Cream & Other Delights", "Herb Alpert & the Tijuana Brass", "", 1965],
    ["Groovin'", "The Young Rascals", "Groovin'", 1967],
    ["Happy Together", "The Turtles", "", 1967],
    ["Insight Out", "The Association", "Windy", 1967],
    ["The Letter/Neon Rainbow", "The Box Tops", "The Letter", 1967],
    ["From the Foundations", "The Foundations", "", 1967],
    ["Astral Weeks", "Van Morrison", "", 1968],
    ["Clouds", "Joni Mitchell", "Both Sides, Now", 1969],
    ["Songs of Leonard Cohen", "Leonard Cohen", "Suzanne", 1967],
    ["Songs from a Room", "Leonard Cohen", "", 1969],
    ["Eli and the Thirteenth Confession", "Laura Nyro", "", 1968],
    ["The Soft Parade", "The Doors", "Touch Me", 1969],
    ["Then Play On", "Fleetwood Mac", "", 1969],
    ["A Salty Dog", "Procol Harum", "", 1969],
    ["Shades of Deep Purple", "Deep Purple", "Hush", 1968],
    ["Blind Faith", "Blind Faith", "Can't Find My Way Home", 1969],
    ["Goodbye", "Cream", "Badge", 1969],
    ["Ogdens' Nut Gone Flake", "Small Faces", "", 1968],
    ["With a Little Help from My Friends", "Joe Cocker", "", 1969],
    ["In-A-Gadda-Da-Vida", "Iron Butterfly", "In-A-Gadda-Da-Vida", 1968],
    ["Steppenwolf", "Steppenwolf", "Born to Be Wild", 1968],
    ["Kick Out the Jams", "MC5", "", 1969],
    ["The Stooges", "The Stooges", "I Wanna Be Your Dog", 1969]
];

// Artist and genre tags expand into each question, not just a shared heading.
const artistTags = {
    "Frank Sinatra": ["American music", "traditional pop", "jazz vocals", "crooners", "male vocalists", "Capitol Records"],
    "Nat King Cole": ["American music", "jazz", "traditional pop", "pianists", "crooners", "Capitol Records"],
    "Johnny Cash": ["American music", "country music", "rockabilly", "Sun Records", "male vocalists"],
    "Marty Robbins": ["American music", "country music", "western ballads", "story songs"],
    "The Everly Brothers": ["American music", "rock and roll", "close harmony", "vocal duos", "country rock"],
    "Gene Vincent": ["American music", "rock and roll", "rockabilly", "Capitol Records"],
    "Eddie Cochran": ["American music", "rock and roll", "rockabilly", "guitarists"],
    "Chuck Berry": ["American music", "rock and roll", "guitarists", "Chess Records"],
    "Fats Domino": ["American music", "New Orleans music", "rhythm and blues", "rock and roll", "pianists"],
    "Bill Haley and His Comets": ["American music", "rock and roll", "early rock", "rock bands"],
    "Bo Diddley": ["American music", "rhythm and blues", "rock and roll", "guitarists", "Chess Records"],
    "The Dave Brubeck Quartet": ["American music", "jazz", "cool jazz", "instrumental music", "piano", "jazz quartets"],
    "Miles Davis": ["American music", "jazz", "modal jazz", "trumpeters", "instrumental music"],
    "Ray Charles": ["American music", "soul", "rhythm and blues", "jazz", "pianists"],
    "Nina Simone": ["American music", "jazz", "blues", "soul", "pianists", "female vocalists"],
    "Billy Fury": ["UK music", "British rock and roll", "rockabilly", "male vocalists"],
    "Roy Orbison": ["American music", "rock and roll", "pop rock", "male vocalists", "Monument Records"],
    "The Shadows": ["UK music", "instrumental rock", "guitar music", "British rock and roll"],
    "Peter, Paul and Mary": ["American music", "folk music", "folk revival", "vocal trios"],
    "Bob Dylan": ["American music", "folk music", "singer-songwriters", "folk revival"],
    "Simon & Garfunkel": ["American music", "folk rock", "folk music", "vocal duos"],
    "The Searchers": ["UK music", "Merseybeat", "British Invasion", "pop rock", "rock bands"],
    "Manfred Mann": ["UK music", "British Invasion", "beat music", "rhythm and blues", "rock bands"],
    "Dusty Springfield": ["UK music", "soul", "traditional pop", "female vocalists", "blue-eyed soul"],
    "The Supremes": ["American music", "Detroit music", "Motown", "soul", "girl groups"],
    "Martha and the Vandellas": ["American music", "Detroit music", "Motown", "soul", "girl groups"],
    "The Temptations": ["American music", "Detroit music", "Motown", "soul", "vocal groups"],
    "The Four Tops": ["American music", "Detroit music", "Motown", "soul", "vocal groups"],
    "The Beatles": ["UK music", "Liverpool music", "Merseybeat", "British Invasion", "pop rock", "rock bands"],
    "The Kinks": ["UK music", "British Invasion", "rock music", "Ray Davies", "rock bands"],
    "The Who": ["UK music", "British Invasion", "rock music", "mod music", "rock bands"],
    "The Zombies": ["UK music", "British Invasion", "baroque pop", "rock bands"],
    "The Hollies": ["UK music", "Manchester music", "British Invasion", "pop rock", "vocal harmonies"],
    "The Yardbirds": ["UK music", "British Invasion", "blues rock", "guitarists", "rock bands"],
    "The Mamas & the Papas": ["American music", "folk rock", "sunshine pop", "vocal groups"],
    "The Lovin' Spoonful": ["American music", "folk rock", "sunshine pop", "rock bands"],
    "The Monkees": ["American music", "pop rock", "television bands", "rock bands"],
    "The Beach Boys": ["American music", "California music", "surf rock", "sunshine pop", "Brian Wilson"],
    "The Rolling Stones": ["UK music", "British Invasion", "blues rock", "rock bands"],
    "Donovan": ["Scottish music", "UK music", "folk rock", "psychedelic folk", "singer-songwriters"],
    "Bee Gees": ["UK music", "Australian music", "pop rock", "vocal harmonies", "Barry Gibb"],
    "Aretha Franklin": ["American music", "soul", "rhythm and blues", "female vocalists", "Atlantic Records"],
    "Otis Redding": ["American music", "Memphis music", "southern soul", "Stax Records", "male vocalists"],
    "Stevie Wonder": ["American music", "Detroit music", "Motown", "soul", "singer-songwriters"],
    "Marvin Gaye": ["American music", "Detroit music", "Motown", "soul", "male vocalists"],
    "Wilson Pickett": ["American music", "southern soul", "rhythm and blues", "Atlantic Records"],
    "Sam & Dave": ["American music", "southern soul", "Stax Records", "vocal duos"],
    "Booker T. & the M.G.'s": ["American music", "Memphis music", "instrumental soul", "Stax Records", "organ", "instrumental music"],
    "Etta James": ["American music", "blues", "soul", "rhythm and blues", "female vocalists"],
    "B.B. King": ["American music", "electric blues", "blues guitarists", "live albums"],
    "James Brown": ["American music", "funk", "soul", "rhythm and blues", "male vocalists"],
    "The 5th Dimension": ["American music", "sunshine pop", "pop soul", "vocal groups"],
    "Herb Alpert & the Tijuana Brass": ["American music", "instrumental pop", "easy listening", "brass music", "trumpeters"],
    "The Young Rascals": ["American music", "blue-eyed soul", "rock music", "psychedelic pop"],
    "The Turtles": ["American music", "sunshine pop", "folk rock", "rock bands"],
    "The Association": ["American music", "sunshine pop", "folk rock", "vocal harmonies"],
    "The Box Tops": ["American music", "Memphis music", "blue-eyed soul", "pop rock", "Alex Chilton"],
    "The Foundations": ["UK music", "soul", "pop soul", "British soul", "vocal groups"],
    "Van Morrison": ["Northern Irish music", "UK music", "folk rock", "soul", "singer-songwriters"],
    "Joni Mitchell": ["Canadian music", "folk music", "singer-songwriters", "female vocalists"],
    "Leonard Cohen": ["Canadian music", "folk music", "singer-songwriters", "male vocalists"],
    "Laura Nyro": ["American music", "singer-songwriters", "soul", "pop rock", "female vocalists"],
    "The Doors": ["American music", "Los Angeles music", "psychedelic rock", "Jim Morrison", "rock bands"],
    "Fleetwood Mac": ["UK music", "British blues", "blues rock", "Peter Green", "rock bands"],
    "Procol Harum": ["UK music", "progressive rock", "art rock", "rock bands"],
    "Deep Purple": ["UK music", "hard rock", "psychedelic rock", "rock bands"],
    "Blind Faith": ["UK music", "blues rock", "supergroups", "Steve Winwood", "Eric Clapton"],
    "Cream": ["UK music", "blues rock", "psychedelic rock", "power trios", "Eric Clapton"],
    "Small Faces": ["UK music", "mod music", "psychedelic rock", "rock bands", "Steve Marriott"],
    "Joe Cocker": ["UK music", "blues rock", "blue-eyed soul", "male vocalists"],
    "Iron Butterfly": ["American music", "psychedelic rock", "hard rock", "rock bands"],
    "Steppenwolf": ["American music", "Canadian music", "hard rock", "rock bands"],
    "MC5": ["American music", "Detroit music", "proto-punk", "garage rock", "live albums"],
    "The Stooges": ["American music", "Michigan music", "proto-punk", "garage rock", "Iggy Pop"]
};

// Specific album tags apply only to the appropriate release.
const albumTags = {
    "In the Wee Small Hours": ["concept albums", "Nelson Riddle", "torch songs"],
    "Songs for Swingin' Lovers!": ["Nelson Riddle", "swing music", "Great American Songbook"],
    "Come Fly with Me": ["Billy May", "travel songs", "concept albums"],
    "Love Is the Thing": ["Gordon Jenkins", "orchestral pop", "string arrangements"],
    "After Midnight": ["Nat King Cole Trio", "small-group jazz", "1956 Capitol album"],
    "Johnny Cash with His Hot and Blue Guitar!": ["debut albums", "Sun Records"],
    "Gunfighter Ballads and Trail Songs": ["western music", "concept albums", "cowboy songs"],
    "The Everly Brothers": ["debut albums", "Cadence Records"],
    "Songs Our Daddy Taught Us": ["traditional folk songs", "close harmony", "roots music"],
    "Bluejean Bop!": ["debut albums", "rockabilly"],
    "Singin' to My Baby": ["debut albums", "Liberty Records"],
    "After School Session": ["debut albums", "Chess Records"],
    "Rock Around the Clock": ["rock and roll history", "Decca Records"],
    "Bo Diddley": ["debut albums", "Chess Records"],
    "Time Out": ["unusual time signatures", "instrumental jazz", "Paul Desmond"],
    "Kind of Blue": ["modal jazz", "landmark albums", "John Coltrane"],
    "The Genius of Ray Charles": ["big band", "jazz standards", "Atlantic Records"],
    "Little Girl Blue": ["debut albums", "Bethlehem Records", "jazz standards"],
    "The Fabulous Johnny Cash": ["Columbia Records", "early country albums"],
    "The Sound of Fury": ["debut albums", "British rock and roll"],
    "The Shadows": ["debut albums", "instrumental rock"],
    "In the Wind": ["folk revival", "protest songs"],
    "Sounds of Silence": ["electric folk rock"],
    "A Girl Called Dusty": ["debut albums", "British soul"],
    "Where Did Our Love Go": ["Motown albums", "Holland-Dozier-Holland"],
    "Heat Wave": ["Motown albums", "Holland-Dozier-Holland"],
    "Help!": ["Beatles films", "film soundtracks"],
    "My Generation": ["debut albums", "mod music"],
    "Begin Here": ["debut albums", "British Invasion"],
    "Roger the Engineer": ["UK album titles", "Jeff Beck"],
    "Hums of the Lovin' Spoonful": ["folk rock", "summer songs"],
    "More of the Monkees": ["television music", "pop rock"],
    "Smiley Smile": ["experimental pop", "Brian Wilson"],
    "Sunshine Superman": ["psychedelic folk"],
    "Bee Gees' 1st": ["international breakthrough albums", "baroque pop"],
    "Odessa": ["double albums", "concept albums", "orchestral pop"],
    "I Never Loved a Man the Way I Love You": ["Atlantic Records", "Memphis soul", "landmark albums"],
    "Lady Soul": ["Atlantic Records", "southern soul", "landmark albums"],
    "Otis Blue": ["Stax Records", "soul classics"],
    "The Dock of the Bay": ["posthumous albums", "Stax Records"],
    "Reach Out": ["Holland-Dozier-Holland", "Motown albums"],
    "Gettin' Ready": ["Motown albums", "Smokey Robinson"],
    "I Heard It Through the Grapevine!": ["Motown albums", "song titles as album titles"],
    "The Exciting Wilson Pickett": ["Atlantic Records", "southern soul"],
    "Soul Men": ["Stax Records", "southern soul"],
    "Green Onions": ["debut albums", "instrumental soul"],
    "At Last!": ["debut albums", "Chess Records", "jazz standards"],
    "Live at the Regal": ["live albums", "Chicago blues", "landmark albums"],
    "Papa's Got a Brand New Bag": ["funk origins", "King Records"],
    "The Age of Aquarius": ["musicals", "Hair", "sunshine pop"],
    "Whipped Cream & Other Delights": ["album cover art", "easy listening"],
    "Astral Weeks": ["landmark albums", "folk jazz", "song cycles"],
    "Clouds": ["folk music", "Grammy Award-winning albums"],
    "Songs of Leonard Cohen": ["debut albums", "poetic lyrics"],
    "Eli and the Thirteenth Confession": ["singer-songwriter albums", "soul"],
    "Then Play On": ["Peter Green", "British blues"],
    "Shades of Deep Purple": ["debut albums", "psychedelic rock"],
    "Blind Faith": ["debut albums", "supergroups"],
    "Goodbye": ["farewell albums", "live and studio recordings"],
    "Ogdens' Nut Gone Flake": ["concept albums", "psychedelic rock", "round album sleeve"],
    "With a Little Help from My Friends": ["debut albums", "Beatles covers"],
    "In-A-Gadda-Da-Vida": ["extended tracks", "psychedelic rock"],
    "Steppenwolf": ["debut albums", "hard rock"],
    "Kick Out the Jams": ["debut albums", "live albums", "proto-punk"],
    "The Stooges": ["debut albums", "proto-punk", "Iggy Pop"]
};

const normalise = value =>
    String(value || "").trim().toLowerCase().replace(/\s+/g, " ");

if (albumFacts.length !== 100) {
    throw new Error("Pack 142 must contain exactly 100 albums.");
}

const albumNames = new Set();
for (const [album, artist, song, year] of albumFacts) {
    if (!album || !artist || !Number.isInteger(year) ||
        year < 1950 || year > 1969 || typeof song !== "string" ||
        !artistTags[artist]) {
        throw new Error("Pack 142 has an invalid entry: " + album);
    }
    const albumKey = normalise(album);
    if (albumNames.has(albumKey)) {
        throw new Error("Pack 142 repeats album: " + album);
    }
    albumNames.add(albumKey);
}

// Keep the original same-decade distractors and answer rotation.
function getWrongAnswers(album, artist, year, isSongQuestion, index) {
    const sameDecade = albumFacts.filter(entry =>
        Math.floor(entry[3] / 10) === Math.floor(year / 10));
    const pool = isSongQuestion
        ? sameDecade.filter(entry => entry[1] !== artist).map(entry => entry[0])
        : [...new Set(sameDecade.map(entry => entry[1]))]
            .filter(name => name !== artist);
    if (pool.length < 3) throw new Error("Insufficient distractors: " + album);
    const wrongAnswers = [];
    let cursor = (index * 7 + 3) % pool.length;
    while (wrongAnswers.length < 3) {
        const candidate = pool[cursor];
        if (!wrongAnswers.includes(candidate) &&
            candidate !== album && candidate !== artist) {
            wrongAnswers.push(candidate);
        }
        cursor = (cursor + 1) % pool.length;
    }
    return wrongAnswers;
}

const questions = albumFacts.map(([album, artist, song, year], index) => {
    const isSongQuestion = song.length > 0;
    const correctAnswer = isSongQuestion ? album : artist;
    const answers = getWrongAnswers(album, artist, year, isSongQuestion, index);
    answers.splice(index % 4, 0, correctAnswer);
    const tags = [...new Set([
        year < 1960 ? "1950s" : "1960s",
        "Albums", isSongQuestion ? "Album tracks" : "Artists",
        "Music", "albums", "album trivia", "album history", String(year),
        isSongQuestion ? "album identification" : "artist identification",
        album, artist, ...artistTags[artist], ...(albumTags[album] || []),
        ...(isSongQuestion ? [song, "album tracks"] : [])
    ])];
    return {
        id: "music_" + (12201 + index),
        category: "Music",
        question: isSongQuestion
            ? `Which album features "${song}" by ${artist}?`
            : `Which artist released the ${year} album "${album}"?`,
        answers,
        correctAnswer,
        difficulty: index % 11 === 0 ? "Hard" :
            (isSongQuestion ? "Easy" : "Medium"),
        tags,
        dailyEligible: true
    };
});

const ids = new Set();
const texts = new Set();
for (const [index, q] of questions.entries()) {
    const textKey = normalise(q.question);
    if (q.id !== "music_" + (12201 + index) ||
        ids.has(q.id) || texts.has(textKey) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        !q.answers.includes(q.correctAnswer) || q.tags.length < 9 ||
        !["Easy", "Medium", "Hard"].includes(q.difficulty) ||
        q.dailyEligible !== true) {
        throw new Error("Pack 142 question validation failed: " + q.id);
    }
    ids.add(q.id);
    texts.add(textKey);
}
module.exports = questions;


