// quiz_pack154.js
// PuzzlePilot - The Bigggggg Quiz
// Music: Musicians & Instruments - Pack 154
// 100 questions, music_13401 to music_13500.
// Leave quiz_bank.js unchanged until the batch is complete.

// Each entry: [musician, group or ensemble, difficulty].
const musicianFacts = {
    Guitar: [
        ["Albert Lee", "Albert Lee & Hogan’s Heroes", "Medium"],
        ["Peter Green", "Fleetwood Mac", "Easy"],
        ["Mick Abrahams", "Blodwyn Pig", "Hard"],
        ["Alvin Lee", "Ten Years After", "Medium"],
        ["Rory Gallagher", "Taste", "Medium"],
        ["Tommy Bolin", "Deep Purple", "Hard"],
        ["Paul Gilbert", "Mr. Big", "Medium"],
        ["Neal Schon", "Journey", "Medium"],
        ["Alex Lifeson", "Rush", "Medium"],
        ["Kim Simmonds", "Savoy Brown", "Hard"],
        ["James Burton", "Elvis Presley’s TCB Band", "Medium"],
        ["Chet Atkins", "The Nashville A-Team", "Medium"],
        ["Link Wray", "Link Wray and His Ray Men", "Medium"],
        ["Dick Dale", "The Del-Tones", "Medium"],
        ["Joe Satriani", "Chickenfoot", "Medium"],
        ["Matthias Jabs", "Scorpions", "Medium"],
        ["Uli Jon Roth", "Electric Sun", "Hard"],
        ["Paul Stanley", "Kiss", "Easy"],
        ["Ace Frehley", "Frehley's Comet", "Medium"],
        ["John Fogerty", "Creedence Clearwater Revival", "Easy"],
        ["Tom Scholz", "Boston", "Medium"],
        ["Ric Ocasek", "The Cars", "Medium"],
        ["Andy Taylor", "Duran Duran", "Medium"],
        ["Steve Cradock", "Ocean Colour Scene", "Medium"],
        ["Jan Akkerman", "Focus", "Hard"],
    ],
    Drums: [
        ["Bun E. Carlos", "Cheap Trick", "Medium"],
        ["Alan Myers", "Devo", "Hard"],
        ["Karen Carpenter", "The Carpenters", "Easy"],
        ["Jim Gordon", "Derek and the Dominos", "Hard"],
        ["Steve Gadd", "Stuff", "Medium"],
        ["Jim McCarty", "The Yardbirds", "Medium"],
        ["Dave Clark", "The Dave Clark Five", "Easy"],
        ["Dave Mattacks", "Fairport Convention", "Hard"],
        ["Martin Chambers", "The Pretenders", "Medium"],
        ["Rat Scabies", "The Damned", "Medium"],
        ["Dave Holland", "Judas Priest", "Hard"],
        ["Chris Frantz", "Talking Heads", "Medium"],
        ["Sly Dunbar", "Sly and Robbie", "Medium"],
        ["Carlton Barrett", "Bob Marley and the Wailers", "Medium"],
        ["Steve Jansen", "Japan", "Hard"],
        ["Nick Menza", "Megadeth", "Medium"],
    ],
    Bass: [
        ["Pino Palladino", "The Who", "Medium"],
        ["Tony Butler", "Big Country", "Medium"],
        ["Jah Wobble", "Public Image Ltd", "Medium"],
        ["Mike Mills", "R.E.M.", "Medium"],
        ["Steve Priest", "Sweet", "Medium"],
        ["Nick Beggs", "Kajagoogoo", "Medium"],
        ["Andy Bell", "Ride", "Medium"],
        ["Norman Watt-Roy", "The Blockheads", "Medium"],
        ["Robbie Shakespeare", "Sly and Robbie", "Medium"],
        ["Dougie Thomson", "Supertramp", "Hard"],
        ["Bob Daisley", "Rainbow", "Hard"],
        ["Paul Webb", "Talk Talk", "Hard"],
        ["Paul McGuigan", "Oasis", "Medium"],
        ["Sid Vicious", "Sex Pistols", "Easy"],
        ["Simon Raymonde", "Cocteau Twins", "Hard"],
    ],
    Keyboards: [
        ["Richard Tandy", "Electric Light Orchestra", "Medium"],
        ["Peter Bardens", "Camel", "Hard"],
        ["Martin Gore", "Depeche Mode", "Medium"],
        ["John Medeski", "Medeski Martin & Wood", "Hard"],
        ["Chuck Leavell", "The Allman Brothers Band", "Medium"],
        ["Mike Pinder", "The Moody Blues", "Medium"],
        ["John Evan", "Jethro Tull", "Hard"],
        ["Mike Garson", "David Bowie’s touring band", "Medium"],
        ["Greg Phillinganes", "Toto", "Hard"],
        ["Tim Blake", "Gong", "Hard"],
        ["Roy Bittan", "The E Street Band", "Medium"],
        ["Nicky Hopkins", "Quicksilver Messenger Service", "Hard"],
    ],
    Saxophone: [
        ["Sam Butera", "Louis Prima’s band", "Medium"],
        ["James Carter", "James Carter Organ Trio", "Hard"],
        ["Ornette Coleman", "Ornette Coleman Quartet", "Medium"],
        ["Lester Young", "Count Basie Orchestra", "Medium"],
        ["Charlie Parker", "Charlie Parker Quintet", "Easy"],
        ["Gerry Mulligan", "Gerry Mulligan Quartet", "Medium"],
        ["Bobby Keys", "The Rolling Stones’ touring band", "Medium"],
    ],
    Violin: [
        ["Mark Wood", "Trans-Siberian Orchestra", "Medium"],
        ["Jenny Scheinman", "Bill Frisell’s band", "Hard"],
        ["L. Shankar", "Shakti", "Hard"],
        ["Nigel Kennedy", "The Kennedy Experience", "Medium"],
        ["Jon Sevink", "The Levellers", "Medium"],
        ["Petra Haden", "that dog.", "Hard"],
    ],
    Trumpet: [
        ["Randy Brecker", "The Brecker Brothers", "Medium"],
        ["Wallace Roney", "Tony Williams Quintet", "Hard"],
        ["Roy Eldridge", "Gene Krupa Orchestra", "Medium"],
        ["Enrico Rava", "Enrico Rava Quartet", "Hard"],
        ["Christian Scott aTunde Adjuah", "Christian Scott Quintet", "Hard"],
        ["Nicholas Payton", "Nicholas Payton Quintet", "Hard"],
    ],
    Harmonica: [
        ["Magic Dick", "The J. Geils Band", "Medium"],
        ["Adam Gussow", "Satan and Adam", "Hard"],
        ["John Sebastian", "The Lovin’ Spoonful", "Medium"],
        ["Norton Buffalo", "The Steve Miller Band", "Hard"],
        ["Peter “Madcat” Ruth", "Madcat & Kane", "Hard"],
    ],
    Flute: [
        ["Yusef Lateef", "Yusef Lateef Quartet", "Medium"],
        ["Paul Horn", "Chico Hamilton Quintet", "Hard"],
        ["Herbie Mann", "Herbie Mann Afro-Jazz Sextet", "Medium"],
        ["Bud Shank", "The L.A. Four", "Hard"],
    ],
    Banjo: [
        ["Ralph Stanley", "The Stanley Brothers", "Medium"],
        ["Rhiannon Giddens", "Carolina Chocolate Drops", "Medium"],
        ["Noam Pikelny", "Punch Brothers", "Hard"],
        ["Alison Brown", "Alison Brown Quartet", "Medium"],
    ],
};

// First number = instrument questions; second = group questions.
// The remaining questions in each section identify the musician.
const questionMix = {
    Guitar: [10, 8], Drums: [7, 5], Bass: [6, 5],
    Keyboards: [5, 4], Saxophone: [3, 2], Violin: [2, 2],
    Trumpet: [2, 2], Harmonica: [2, 1],
    Flute: [2, 1], Banjo: [1, 1]
};

const instrumentNames = {
    Guitar: 'guitar', Drums: 'drums', Bass: 'bass guitar',
    Keyboards: 'keyboards', Saxophone: 'saxophone',
    Violin: 'violin', Trumpet: 'trumpet',
    Harmonica: 'harmonica', Flute: 'flute', Banjo: 'banjo'
};

const roles = {
    Guitar: 'guitarist', Drums: 'drummer', Bass: 'bassist',
    Keyboards: 'keyboard player', Saxophone: 'saxophonist',
    Violin: 'violinist', Trumpet: 'trumpeter',
    Harmonica: 'harmonica player', Flute: 'flautist',
    Banjo: 'banjo player'
};

// Instrument alternatives deliberately avoid overlapping
// categories such as drums and percussion. The options
// are chosen to avoid a second correct instrument.
const instrumentDistractors = {
    Guitar: ['trumpet', 'flute', 'violin'],
    Drums: ['saxophone', 'violin', 'trumpet'],
    Bass: ['trumpet', 'banjo', 'flute'],
    Keyboards: ['banjo', 'saxophone', 'trumpet'],
    Saxophone: ['bass guitar', 'banjo', 'drums'],
    Violin: ['trumpet', 'drums', 'bass guitar'],
    Trumpet: ['guitar', 'banjo', 'drums'],
    Harmonica: ['bass guitar', 'violin', 'trumpet'],
    Flute: ['trumpet', 'drums', 'bass guitar'],
    Banjo: ['saxophone', 'trumpet', 'keyboards']
};

function normalise(value) {
    return String(value).trim().toLowerCase().replace(/\s+/g, ' ');
}

function selectOtherAnswers(candidates, correct, seed) {
    const unique = [];
    for (const candidate of candidates) {
        if (normalise(candidate) !== normalise(correct) &&
            !unique.some(x => normalise(x) === normalise(candidate))) {
            unique.push(candidate);
        }
    }
    if (unique.length < 3) {
        throw new Error('Pack 154: not enough alternatives for ' + correct);
    }
    const wrong = [];
    let index = seed % unique.length;
    while (wrong.length < 3) {
        const candidate = unique[index];
        if (!wrong.includes(candidate)) wrong.push(candidate);
        index = (index + 1) % unique.length;
    }
    return wrong;
}

const featured = new Set();
const questions = [];

for (const [instrument, facts] of Object.entries(musicianFacts)) {
    const mix = questionMix[instrument];
    if (!mix || !Array.isArray(facts) || facts.length < mix[0] + mix[1]) {
        throw new Error('Pack 154: bad source count for ' + instrument);
    }

    const groups = new Set();
    for (const [musician, group, difficulty] of facts) {
        if (!musician || !group ||
            !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
            featured.has(normalise(musician)) ||
            groups.has(normalise(group))) {
            throw new Error('Pack 154: repeated or invalid musician/group: ' + musician);
        }
        featured.add(normalise(musician));
        groups.add(normalise(group));
    }

    for (let index = 0; index < facts.length; index++) {
        const [musician, group, difficulty] = facts[index];
        const number = questions.length;
        const askInstrument = index < mix[0];
        const askGroup = !askInstrument && index < mix[0] + mix[1];
        let question;
        let correctAnswer;
        let wrong;

        if (askInstrument) {
            question = `Which instrument was ${musician} known for playing with ${group}?`;
            correctAnswer = instrumentNames[instrument];
            wrong = [...instrumentDistractors[instrument]];
        } else if (askGroup) {
            question = `Which group featured ${musician} as a ${roles[instrument]}?`;
            correctAnswer = group;
            wrong = selectOtherAnswers(facts.map(f => f[1]), group, number * 7 + 3);
        } else {
            question = `Who played ${instrumentNames[instrument]} with ${group}?`;
            correctAnswer = musician;
            wrong = selectOtherAnswers(facts.map(f => f[0]), musician, number * 7 + 3);
        }

        const answers = [...wrong];
        answers.splice(number % 4, 0, correctAnswer);
        questions.push({
            id: 'music_' + (13401 + number),
            category: 'Music',
            question,
            answers,
            correctAnswer,
            difficulty,
            tags: [
                'Musicians & Instruments',
                instrument,
                askInstrument ? 'Instrument recognition' :
                    askGroup ? 'Bands' : 'Musicians'
            ],
            dailyEligible: true
        });
    }
}

// Validate the complete exported question bank for this pack.
if (questions.length !== 100 || questions[0].id !== 'music_13401' ||
    questions[99].id !== 'music_13500') {
    throw new Error('Pack 154: incorrect question count or ID range.');
}

const ids = new Set();
const wordings = new Set();
for (const q of questions) {
    const wording = normalise(q.question);
    if (ids.has(q.id) || !wording || wordings.has(wording) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        q.answers.filter(answer => answer === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        q.category !== 'Music' || q.dailyEligible !== true ||
        !Array.isArray(q.tags) || q.tags.length !== 3) {
        throw new Error('Pack 154: invalid question ' + q.id);
    }
    ids.add(q.id);
    wordings.add(wording);
}

module.exports = questions;
