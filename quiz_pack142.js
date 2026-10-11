
{(() => `// quiz_pack142.js
// PuzzlePilot - The Bigggggg Quiz
// Music Albums: Pack 142
// 100 different albums from the 1950s and 1960s.
// IDs music_12201 to music_12300.
// This pack is NOT yet included in quiz_bank.js.
//
// Data format: [album title, artist, song (or empty), release year].
// When a song is supplied, the question asks for its album.
// Otherwise, the question asks for the album's artist.

const albumFacts = [
    ["In the Wee Small Hours", "Frank Sinatra", "", 1955],
    ["Songs for Swingin' Lovers!", "Frank Sinatra", "I've Got You Under My Skin", 1956],
    ["Come Fly with Me", "Frank Sinatra", "", 1958],
    ["Love Is the Thing", "Nat King Cole", "Stardust", 1957],
    ["After Midnight", "Nat King Cole", "", 1957],
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

const normalise = value =>
    value.trim().toLowerCase().replace(/\\s+/g, ' ');

// Sanity checks run immediately when this pack is loaded.
if (albumFacts.length !== 100) {
    throw new Error('Pack 142 must contain exactly 100 albums.');
}

const albumNames = new Set();
for (const [album, artist, song, year] of albumFacts) {
    if (!album || !artist || !Number.isInteger(year) ||
        year < 1950 || year > 1969 || typeof song !== 'string') {
        throw new Error('Pack 142 has an incomplete album fact.');
    }
    const key = normalise(album);
    if (albumNames.has(key)) {
        throw new Error('Pack 142 repeats album: ' + album);
    }
    albumNames.add(key);
}

// Pick three different wrong answers from the same decade.
// For song questions, other albums by the same artist are excluded.
function getWrongAnswers(album, artist, year, isSongQuestion, index) {
    const sameDecade = albumFacts.filter(
        entry => Math.floor(entry[3] / 10) === Math.floor(year / 10)
    );

    const pool = isSongQuestion
        ? sameDecade
            .filter(entry => entry[1] !== artist)
            .map(entry => entry[0])
        : [...new Set(sameDecade.map(entry => entry[1]))]
            .filter(name => name !== artist);

    const wrongAnswers = [];
    let cursor = (index * 7 + 3) % pool.length;

    while (wrongAnswers.length < 3) {
        const candidate = pool[cursor];
        if (!wrongAnswers.includes(candidate) && candidate !== album &&
            candidate !== artist) {
            wrongAnswers.push(candidate);
        }
        cursor = (cursor + 1) % pool.length;
    }
    return wrongAnswers;
}

const questions = albumFacts.map(([album, artist, song, year], index) => {
    const isSongQuestion = song.length > 0;
    const correctAnswer = isSongQuestion ? album : artist;
    const wrongAnswers = getWrongAnswers(
        album, artist, year, isSongQuestion, index
    );

    // Rotate correct answers through all four button positions.
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'music_' + (12201 + index),
        category: 'Music',
        question: isSongQuestion
            ? \`Which album features "\${song}" by \${artist}?\`
            : \`Which artist released the \${year} album "\${album}"?\`,
        answers,
        correctAnswer,
        difficulty: index % 11 === 0 ? 'Hard' :
            (isSongQuestion ? 'Easy' : 'Medium'),
        tags: [year < 1960 ? '1950s' : '1960s', 'Albums',
            isSongQuestion ? 'Album tracks' : 'Artists'],
        dailyEligible: true
    };
});

// Check IDs, choices and correct answers before exporting the pack.
const ids = new Set();
for (const q of questions) {
    if (ids.has(q.id) || q.answers.length !== 4 ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        !q.answers.includes(q.correctAnswer)) {
        throw new Error('Pack 142 question validation failed: ' + q.id);
    }
    ids.add(q.id);
}

module.exports = questions;
`)()}
