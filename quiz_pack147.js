
// quiz_pack147.js
// PuzzlePilot - The Bigggggg Quiz
// Music Albums: Pack 147 - The 2010s
// 100 questions, music_12701 to music_12800
// Leave quiz_bank.js unchanged until the album batch is complete.

// Each entry: [year, album, artist, song].
// Song supplied: identify the album. Empty song: identify the artist.
const albumFacts = [
    [2010, "Loud", "Rihanna", "Only Girl (In the World)"],
    [2010, "Teenage Dream", "Katy Perry", "Firework"],
    [2010, "Speak Now", "Taylor Swift", "Mine"],
    [2010, "Recovery", "Eminem", "Not Afraid"],
    [2010, "Doo-Wops & Hooligans", "Bruno Mars", "Just the Way You Are"],
    [2010, "The Suburbs", "Arcade Fire", ""],
    [2010, "My Beautiful Dark Twisted Fantasy", "Kanye West", ""],
    [2010, "Plastic Beach", "Gorillaz", ""],
    [2010, "Progress", "Take That", ""],
    [2010, "The Lady Killer", "CeeLo Green", ""],

    [2011, "Born This Way", "Lady Gaga", "Born This Way"],
    [2011, "+", "Ed Sheeran", "The A Team"],
    [2011, "Mylo Xyloto", "Coldplay", "Paradise"],
    [2011, "Ceremonials", "Florence + the Machine", "Shake It Out"],
    [2011, "4", "Beyoncé", "Love on Top"],
    [2011, "Talk That Talk", "Rihanna", ""],
    [2011, "Wasting Light", "Foo Fighters", ""],
    [2011, "Stronger", "Kelly Clarkson", ""],
    [2011, "In Case You Didn't Know", "Olly Murs", ""],
    [2011, "Noel Gallagher's High Flying Birds", "Noel Gallagher's High Flying Birds", ""],

    [2012, "Red", "Taylor Swift", "We Are Never Ever Getting Back Together"],
    [2012, "Unapologetic", "Rihanna", "Diamonds"],
    [2012, "18 Months", "Calvin Harris", "Feel So Close"],
    [2012, "Babel", "Mumford & Sons", "I Will Wait"],
    [2012, "Some Nights", "fun.", "We Are Young"],
    [2012, "Believe", "Justin Bieber", ""],
    [2012, "Halcyon", "Ellie Goulding", ""],
    [2012, "The 2nd Law", "Muse", ""],
    [2012, "Channel Orange", "Frank Ocean", ""],
    [2012, "Jake Bugg", "Jake Bugg", ""],

    [2013, "AM", "Arctic Monkeys", "Do I Wanna Know?"],
    [2013, "Random Access Memories", "Daft Punk", "Get Lucky"],
    [2013, "Prism", "Katy Perry", "Roar"],
    [2013, "Bangerz", "Miley Cyrus", "Wrecking Ball"],
    [2013, "The Next Day", "David Bowie", "Where Are We Now?"],
    [2013, "Beyoncé", "Beyoncé", ""],
    [2013, "Midnight Memories", "One Direction", ""],
    [2013, "The 20/20 Experience", "Justin Timberlake", ""],
    [2013, "Pure Heroine", "Lorde", ""],
    [2013, "To Be Loved", "Michael Bublé", ""],

    [2014, "1989", "Taylor Swift", "Shake It Off"],
    [2014, "x", "Ed Sheeran", "Thinking Out Loud"],
    [2014, "In the Lonely Hour", "Sam Smith", "Stay with Me"],
    [2014, "Ghost Stories", "Coldplay", "A Sky Full of Stars"],
    [2014, "1000 Forms of Fear", "Sia", "Chandelier"],
    [2014, "Wanted on Voyage", "George Ezra", ""],
    [2014, "The New Classic", "Iggy Azalea", ""],
    [2014, "My Everything", "Ariana Grande", ""],
    [2014, "Four", "One Direction", ""],
    [2014, "Listen", "David Guetta", ""],

    [2015, "25", "Adele", "Hello"],
    [2015, "Purpose", "Justin Bieber", "Sorry"],
    [2015, "Beauty Behind the Madness", "The Weeknd", "Can't Feel My Face"],
    [2015, "Made in the A.M.", "One Direction", "Drag Me Down"],
    [2015, "Chaos and the Calm", "James Bay", "Hold Back the River"],
    [2015, "How Big, How Blue, How Beautiful", "Florence + the Machine", ""],
    [2015, "Get Weird", "Little Mix", ""],
    [2015, "Emotion", "Carly Rae Jepsen", ""],
    [2015, "Blurryface", "Twenty One Pilots", ""],
    [2015, "Currents", "Tame Impala", ""],

    [2016, "Lemonade", "Beyoncé", "Formation"],
    [2016, "Views", "Drake", "One Dance"],
    [2016, "Dangerous Woman", "Ariana Grande", "Into You"],
    [2016, "24K Magic", "Bruno Mars", "24K Magic"],
    [2016, "Starboy", "The Weeknd", "Starboy"],
    [2016, "Anti", "Rihanna", ""],
    [2016, "Glory", "Britney Spears", ""],
    [2016, "Joanne", "Lady Gaga", ""],
    [2016, "Blackstar", "David Bowie", ""],
    [2016, "Mind of Mine", "Zayn", ""],

    [2017, "÷", "Ed Sheeran", "Shape of You"],
    [2017, "Reputation", "Taylor Swift", "Look What You Made Me Do"],
    [2017, "Melodrama", "Lorde", "Green Light"],
    [2017, "DAMN.", "Kendrick Lamar", "HUMBLE."],
    [2017, "Evolve", "Imagine Dragons", "Believer"],
    [2017, "Beautiful Trauma", "Pink", ""],
    [2017, "Dua Lipa", "Dua Lipa", ""],
    [2017, "Harry Styles", "Harry Styles", ""],
    [2017, "One More Light", "Linkin Park", ""],
    [2017, "The Thrill of It All", "Sam Smith", ""],

    [2018, "Sweetener", "Ariana Grande", "No Tears Left to Cry"],
    [2018, "Invasion of Privacy", "Cardi B", "I Like It"],
    [2018, "Scorpion", "Drake", "God's Plan"],
    [2018, "Golden", "Kylie Minogue", "Dancing"],
    [2018, "Camila", "Camila Cabello", "Havana"],
    [2018, "Shawn Mendes", "Shawn Mendes", ""],
    [2018, "Love Yourself: Answer", "BTS", ""],
    [2018, "Phoenix", "Rita Ora", ""],
    [2018, "Always In Between", "Jess Glynne", ""],
    [2018, "beerbongs & bentleys", "Post Malone", ""],

    [2019, "When We All Fall Asleep, Where Do We Go?", "Billie Eilish", "bad guy"],
    [2019, "thank u, next", "Ariana Grande", "7 rings"],
    [2019, "Fine Line", "Harry Styles", "Adore You"],
    [2019, "Lover", "Taylor Swift", "You Need to Calm Down"],
    [2019, "No.6 Collaborations Project", "Ed Sheeran", "I Don't Care"],
    [2019, "Hollywood's Bleeding", "Post Malone", ""],
    [2019, "Divinely Uninspired to a Hellish Extent", "Lewis Capaldi", ""],
    [2019, "Norman Fucking Rockwell!", "Lana Del Rey", ""],
    [2019, "Madame X", "Madonna", ""],
    [2019, "Happiness Begins", "Jonas Brothers", ""]
];

const normalise = value =>
    value.trim().toLowerCase().replace(/\s+/g, ' ');

if (albumFacts.length !== 100) {
    throw new Error('Pack 147 must contain exactly 100 albums.');
}

const seenAlbums = new Set();

for (const [year, album, artist, song] of albumFacts) {
    if (!Number.isInteger(year) ||
        year < 2010 ||
        year > 2019 ||
        typeof album !== 'string' ||
        !album.trim() ||
        typeof artist !== 'string' ||
        !artist.trim() ||
        typeof song !== 'string') {
        throw new Error('Invalid Pack 147 album fact: ' + album);
    }

    const key = normalise(album);

    if (seenAlbums.has(key)) {
        throw new Error('Repeated album in Pack 147: ' + album);
    }

    seenAlbums.add(key);
}

// Distractors are albums or artists from the same year.
// Exclude other albums by the artist in album-from-song questions.
function chooseWrongAnswers(year, album, artist, wantsAlbum, index) {
    const sameYear = albumFacts.filter(
        fact => fact[0] === year
    );

    const candidates = wantsAlbum
        ? sameYear
            .filter(fact => fact[2] !== artist)
            .map(fact => fact[1])
        : [...new Set(sameYear.map(fact => fact[2]))]
            .filter(name => name !== artist);

    const wrong = [];
    let position = (index * 3 + 1) % candidates.length;

    while (wrong.length < 3) {
        const candidate = candidates[position];

        if (candidate !== album &&
            candidate !== artist &&
            !wrong.includes(candidate)) {
            wrong.push(candidate);
        }

        position = (position + 1) % candidates.length;
    }

    return wrong;
}

const questions = albumFacts.map(
    ([year, album, artist, song], index) => {
        const wantsAlbum = song.length > 0;
        const correctAnswer = wantsAlbum ? album : artist;

        const answers = chooseWrongAnswers(
            year,
            album,
            artist,
            wantsAlbum,
            index
        );

        // Rotate the correct answer through four positions.
        answers.splice(index % 4, 0, correctAnswer);

        return {
            id: 'music_' + (12701 + index),
            category: 'Music',

            question: wantsAlbum
                ? `Which ${year} album features "${song}" by ${artist}?`
                : `Which artist released the ${year} album "${album}"?`,

            answers,
            correctAnswer,

            difficulty: index % 13 === 0 ? 'Hard' : 'Medium',

            tags: [
                '2010s',
                'Albums',
                wantsAlbum ? 'Album tracks' : 'Artists'
            ],

            dailyEligible: true
        };
    }
);

// Validate the finished question pack.
const ids = new Set();

for (const question of questions) {
    if (ids.has(question.id) ||
        question.answers.length !== 4 ||
        new Set(question.answers.map(normalise)).size !== 4 ||
        !question.answers.includes(question.correctAnswer)) {
        throw new Error(
            'Pack 147 validation failed: ' + question.id
        );
    }

    ids.add(question.id);
}

module.exports = questions;
