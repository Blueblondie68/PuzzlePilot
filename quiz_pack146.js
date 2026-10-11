
// quiz_pack146.js
// PuzzlePilot - The Bigggggg Quiz
// Music Albums: Pack 146 - The 2000s
// 100 questions, music_12601 to music_12700
// Leave quiz_bank.js unchanged until the end of the album batch.

// Each entry is [year, album, artist, song].
// Song provided: identify the album. Blank song: identify the artist.
const albumFacts = [
    [2000, "Parachutes", "Coldplay", "Yellow"],
    [2000, "The Marshall Mathers LP", "Eminem", "The Real Slim Shady"],
    [2000, "Oops!... I Did It Again", "Britney Spears", "Oops!... I Did It Again"],
    [2000, "All That You Can't Leave Behind", "U2", "Beautiful Day"],
    [2000, "Sing When You're Winning", "Robbie Williams", "Rock DJ"],
    [2000, "Kid A", "Radiohead", ""],
    [2000, "Hybrid Theory", "Linkin Park", ""],
    [2000, "Whoa, Nelly!", "Nelly Furtado", ""],
    [2000, "White Pony", "Deftones", ""],
    [2000, "The Hour of Bewilderbeast", "Badly Drawn Boy", ""],
    [2001, "Is This It", "The Strokes", "Last Nite"],
    [2001, "Origin of Symmetry", "Muse", "Plug In Baby"],
    [2001, "Discovery", "Daft Punk", "One More Time"],
    [2001, "Fever", "Kylie Minogue", "Can't Get You Out of My Head"],
    [2001, "Songs in A Minor", "Alicia Keys", "Fallin'"],
    [2001, "Laundry Service", "Shakira", ""],
    [2001, "The Blueprint", "Jay-Z", ""],
    [2001, "Gorillaz", "Gorillaz", ""],
    [2001, "A Funk Odyssey", "Jamiroquai", ""],
    [2001, "Vespertine", "Björk", ""],
    [2002, "A Rush of Blood to the Head", "Coldplay", "The Scientist"],
    [2002, "The Eminem Show", "Eminem", "Without Me"],
    [2002, "Let Go", "Avril Lavigne", "Complicated"],
    [2002, "By the Way", "Red Hot Chili Peppers", "By the Way"],
    [2002, "Justified", "Justin Timberlake", "Cry Me a River"],
    [2002, "Heathen", "David Bowie", ""],
    [2002, "Turn on the Bright Lights", "Interpol", ""],
    [2002, "Yoshimi Battles the Pink Robots", "The Flaming Lips", ""],
    [2002, "One by One", "Foo Fighters", ""],
    [2002, "The Coral", "The Coral", ""],
    [2003, "Permission to Land", "The Darkness", "I Believe in a Thing Called Love"],
    [2003, "Fallen", "Evanescence", "Bring Me to Life"],
    [2003, "Speakerboxxx/The Love Below", "OutKast", "Hey Ya!"],
    [2003, "In the Zone", "Britney Spears", "Toxic"],
    [2003, "Life for Rent", "Dido", "White Flag"],
    [2003, "Elephant", "The White Stripes", ""],
    [2003, "Room on Fire", "The Strokes", ""],
    [2003, "Absolution", "Muse", ""],
    [2003, "Meteora", "Linkin Park", ""],
    [2003, "Frank", "Amy Winehouse", ""],
    [2004, "Confessions", "Usher", "Yeah!"],
    [2004, "How to Dismantle an Atomic Bomb", "U2", "Vertigo"],
    [2004, "Hopes and Fears", "Keane", "Somewhere Only We Know"],
    [2004, "Scissor Sisters", "Scissor Sisters", "Take Your Mama"],
    [2004, "Eye to the Telescope", "KT Tunstall", "Black Horse and the Cherry Tree"],
    [2004, "Encore", "Eminem", ""],
    [2004, "The College Dropout", "Kanye West", ""],
    [2004, "Franz Ferdinand", "Franz Ferdinand", ""],
    [2004, "Kasabian", "Kasabian", ""],
    [2004, "Three Cheers for Sweet Revenge", "My Chemical Romance", ""],
    [2005, "X&Y", "Coldplay", "Speed of Sound"],
    [2005, "Demon Days", "Gorillaz", "Feel Good Inc."],
    [2005, "Confessions on a Dance Floor", "Madonna", "Hung Up"],
    [2005, "The Emancipation of Mimi", "Mariah Carey", "We Belong Together"],
    [2005, "All the Right Reasons", "Nickelback", "Photograph"],
    [2005, "Aerial", "Kate Bush", ""],
    [2005, "Employment", "Kaiser Chiefs", ""],
    [2005, "Intensive Care", "Robbie Williams", ""],
    [2005, "Extraordinary Machine", "Fiona Apple", ""],
    [2005, "The Understanding", "Röyksopp", ""],
    [2006, "Whatever People Say I Am, That's What I'm Not", "Arctic Monkeys", "I Bet You Look Good on the Dancefloor"],
    [2006, "Back to Basics", "Christina Aguilera", "Ain't No Other Man"],
    [2006, "FutureSex/LoveSounds", "Justin Timberlake", "SexyBack"],
    [2006, "The Open Door", "Evanescence", "Call Me When You're Sober"],
    [2006, "Loose", "Nelly Furtado", "Maneater"],
    [2006, "The Black Parade", "My Chemical Romance", ""],
    [2006, "Ta-Dah", "Scissor Sisters", ""],
    [2006, "Eyes Open", "Snow Patrol", ""],
    [2006, "St. Elsewhere", "Gnarls Barkley", ""],
    [2006, "Rudebox", "Robbie Williams", ""],
    [2007, "Good Girl Gone Bad", "Rihanna", "Umbrella"],
    [2007, "Graduation", "Kanye West", "Stronger"],
    [2007, "Echoes, Silence, Patience & Grace", "Foo Fighters", "The Pretender"],
    [2007, "Spirit", "Leona Lewis", "Bleeding Love"],
    [2007, "The Reminder", "Feist", "1234"],
    [2007, "Favourite Worst Nightmare", "Arctic Monkeys", ""],
    [2007, "In Rainbows", "Radiohead", ""],
    [2007, "Blackout", "Britney Spears", ""],
    [2007, "X", "Kylie Minogue", ""],
    [2007, "Because of the Times", "Kings of Leon", ""],
    [2008, "Viva la Vida or Death and All His Friends", "Coldplay", "Viva la Vida"],
    [2008, "Only by the Night", "Kings of Leon", "Sex on Fire"],
    [2008, "19", "Adele", "Chasing Pavements"],
    [2008, "The Fame", "Lady Gaga", "Just Dance"],
    [2008, "Funhouse", "Pink", "So What"],
    [2008, "The Seldom Seen Kid", "Elbow", ""],
    [2008, "Day & Age", "The Killers", ""],
    [2008, "The Script", "The Script", ""],
    [2008, "Dig Out Your Soul", "Oasis", ""],
    [2008, "Rockferry", "Duffy", ""],
    [2009, "The E.N.D.", "The Black Eyed Peas", "I Gotta Feeling"],
    [2009, "Lungs", "Florence + the Machine", "Dog Days Are Over"],
    [2009, "The Resistance", "Muse", "Uprising"],
    [2009, "The Element of Freedom", "Alicia Keys", "Doesn't Mean Anything"],
    [2009, "The Blueprint 3", "Jay-Z", "Empire State of Mind"],
    [2009, "The Boy Who Knew Too Much", "Mika", ""],
    [2009, "The Fall", "Norah Jones", ""],
    [2009, "3 Words", "Cheryl Cole", ""],
    [2009, "Humbug", "Arctic Monkeys", ""],
    [2009, "xx", "The xx", ""]
];

const normalise = value => value.trim().toLowerCase().replace(/\s+/g, ' ');

if (albumFacts.length !== 100) {
    throw new Error('Pack 146 must contain exactly 100 albums.');
}

const seenAlbums = new Set();
for (const [year, album, artist, song] of albumFacts) {
    if (!Number.isInteger(year) || year < 2000 || year > 2009 ||
        typeof album !== 'string' || !album.trim() ||
        typeof artist !== 'string' || !artist.trim() ||
        typeof song !== 'string') {
        throw new Error('Invalid Pack 146 album fact: ' + album);
    }
    const key = normalise(album);
    if (seenAlbums.has(key)) {
        throw new Error('Repeated Pack 146 album: ' + album);
    }
    seenAlbums.add(key);
}

// Use other albums or artists from the same year as distractors.
// For song-to-album questions, exclude albums by the same artist.
function chooseWrongAnswers(year, album, artist, wantsAlbum, index) {
    const sameYear = albumFacts.filter(fact => fact[0] === year);
    const candidates = wantsAlbum
        ? sameYear.filter(fact => fact[2] !== artist).map(fact => fact[1])
        : [...new Set(sameYear.map(fact => fact[2]))]
            .filter(name => name !== artist);

    const wrong = [];
    let position = (index * 3 + 1) % candidates.length;
    while (wrong.length < 3) {
        const candidate = candidates[position];
        if (candidate !== album && candidate !== artist &&
            !wrong.includes(candidate)) {
            wrong.push(candidate);
        }
        position = (position + 1) % candidates.length;
    }
    return wrong;
}

const questions = albumFacts.map(([year, album, artist, song], index) => {
    const wantsAlbum = song.length > 0;
    const correctAnswer = wantsAlbum ? album : artist;
    const answers = chooseWrongAnswers(
        year, album, artist, wantsAlbum, index
    );
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'music_' + (12601 + index),
        category: 'Music',
        question: wantsAlbum
            ? `Which ${year} album features "${song}" by ${artist}?`
            : `Which artist released the ${year} album "${album}"?`,
        answers,
        correctAnswer,
        difficulty: index % 13 === 0 ? 'Hard' : 'Medium',
        tags: ['2000s', 'Albums', wantsAlbum ? 'Album tracks' : 'Artists'],
        dailyEligible: true
    };
});

const ids = new Set();
for (const q of questions) {
    if (ids.has(q.id) || q.answers.length !== 4 ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        !q.answers.includes(q.correctAnswer)) {
        throw new Error('Pack 146 question validation failed: ' + q.id);
    }
    ids.add(q.id);
}

module.exports = questions;
