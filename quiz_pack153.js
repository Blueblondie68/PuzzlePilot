// quiz_pack153.js
// PuzzlePilot - The Bigggggg Quiz
// Music: Musicians & Instruments - Pack 153
// 100 questions: music_13301 to music_13400.
// Do not add this pack to quiz_bank.js until the end of our batch.
// Every entry: [musician, group or musical act, difficulty].
// Group membership and playing roles refer to a particular period,
// not necessarily a group's present-day line-up.

const musicianFacts = {
    Guitar: [
        ["Stevie Ray Vaughan", "Double Trouble", "Easy"],
        ["Duane Allman", "The Allman Brothers Band", "Medium"],
        ["Joe Perry", "Aerosmith", "Easy"],
        ["Richie Sambora", "Bon Jovi", "Easy"],
        ["John Petrucci", "Dream Theater", "Medium"],
        ["Steve Vai", "Whitesnake", "Medium"],
        ["Yngwie Malmsteen", "Alcatrazz", "Hard"],
        ["Dave Mustaine", "Megadeth", "Medium"],
        ["Kerry King", "Slayer", "Medium"],
        ["Synyster Gates", "Avenged Sevenfold", "Medium"],
        ["James Hetfield", "Metallica", "Easy"],
        ["Steve Stevens", "Billy Idol's band", "Medium"],
        ["Vernon Reid", "Living Colour", "Medium"],
        ["Andy Powell", "Wishbone Ash", "Hard"],
        ["Steve Rothery", "Marillion", "Hard"],
        ["Jim Corr", "The Corrs", "Medium"],
        ["Bert Jansch", "Pentangle", "Hard"],
        ["Hank Marvin", "The Shadows", "Easy"],
        ["Dave Navarro", "Jane's Addiction", "Medium"],
        ["John 5", "Marilyn Manson", "Medium"]
    ],
    Drums: [
        ["Billy Cobham", "Mahavishnu Orchestra", "Medium"],
        ["Vinnie Colaiuta", "Frank Zappa's band", "Hard"],
        ["Omar Hakim", "Weather Report", "Hard"],
        ["Hal Blaine", "The Wrecking Crew", "Medium"],
        ["Buddy Rich", "Buddy Rich Big Band", "Easy"],
        ["Gene Krupa", "Benny Goodman Orchestra", "Medium"],
        ["Art Blakey", "The Jazz Messengers", "Medium"],
        ["Max Roach", "Clifford Brown–Max Roach Quintet", "Medium"],
        ["Elvin Jones", "John Coltrane Quartet", "Hard"],
        ["Tony Williams", "Miles Davis Quintet", "Hard"],
        ["Dennis Chambers", "Parliament-Funkadelic", "Hard"],
        ["Reni", "The Stone Roses", "Medium"],
        ["Philip Selway", "Radiohead", "Medium"],
        ["Nick Banks", "Pulp", "Medium"],
        ["George Daniel", "The 1975", "Medium"]
    ],
    Bass: [
        ["Victor Wooten", "Béla Fleck and the Flecktones", "Medium"],
        ["Stanley Clarke", "Return to Forever", "Medium"],
        ["Marcus Miller", "Miles Davis's band", "Medium"],
        ["Nathan East", "Fourplay", "Medium"],
        ["Larry Graham", "Sly and the Family Stone", "Medium"],
        ["Verdine White", "Earth, Wind & Fire", "Medium"],
        ["Rocco Prestia", "Tower of Power", "Hard"],
        ["Aston Barrett", "Bob Marley and the Wailers", "Medium"],
        ["Donald Dunn", "Booker T. & the M.G.'s", "Medium"],
        ["David Ellefson", "Megadeth", "Medium"],
        ["Tim Commerford", "Rage Against the Machine", "Medium"],
        ["Justin Chancellor", "Tool", "Medium"],
        ["Simon Jones", "The Verve", "Medium"],
        ["Mani", "The Stone Roses", "Medium"],
        ["Guy Berryman", "Coldplay", "Easy"]
    ],
    Keyboards: [
        ["Booker T. Jones", "Booker T. & the M.G.'s", "Medium"],
        ["Jan Hammer", "Mahavishnu Orchestra", "Hard"],
        ["Steve Winwood", "Traffic", "Medium"],
        ["Gregg Rolie", "Santana", "Medium"],
        ["Michael McDonald", "The Doobie Brothers", "Medium"],
        ["Kate Pierson", "The B-52's", "Medium"],
        ["Tony Kaye", "Yes", "Hard"],
        ["Doug Ingle", "Iron Butterfly", "Hard"],
        ["David Rosenthal", "Billy Joel's band", "Hard"],
        ["Billy Currie", "Ultravox", "Medium"]
    ],
    Saxophone: [
        ["Branford Marsalis", "The Tonight Show Band", "Medium"],
        ["Cannonball Adderley", "Miles Davis Sextet", "Medium"],
        ["Stan Getz", "Woody Herman's Second Herd", "Medium"],
        ["Sonny Rollins", "Clifford Brown–Max Roach Quintet", "Medium"],
        ["King Curtis", "The Kingpins", "Medium"],
        ["David Newman", "Ray Charles Orchestra", "Hard"]
    ],
    Violin: [
        ["Stéphane Grappelli", "Quintette du Hot Club de France", "Medium"],
        ["John Sheahan", "The Dubliners", "Medium"],
        ["Scarlett Rivera", "Bob Dylan's Rolling Thunder Revue", "Hard"],
        ["Jerry Goodman", "Mahavishnu Orchestra", "Hard"],
        ["Fionnuala Sherry", "Secret Garden", "Medium"],
        ["Vassar Clements", "Old & in the Way", "Hard"],
        ["Svend Asmussen", "The Swe-Danes", "Hard"],
        ["Andy Stein", "Commander Cody and His Lost Planet Airmen", "Hard"]
    ],
    Trumpet: [
        ["Lee Morgan", "Art Blakey's Jazz Messengers", "Medium"],
        ["Blue Mitchell", "Horace Silver Quintet", "Hard"],
        ["Clark Terry", "Duke Ellington Orchestra", "Medium"],
        ["Harry James", "Benny Goodman Orchestra", "Medium"],
        ["Doc Severinsen", "The Tonight Show Band", "Medium"],
        ["Louis Prima", "Louis Prima and His New Orleans Gang", "Medium"]
    ],
    Harmonica: [
        ["Toots Thielemans", "George Shearing Quintet", "Medium"],
        ["Charlie McCoy", "Area Code 615", "Hard"],
        ["Sam Myers", "Anson Funderburgh & the Rockets", "Hard"],
        ["Rod Piazza", "The Mighty Flyers", "Hard"],
        ["Rick Estrin", "Little Charlie & the Nightcats", "Hard"],
        ["Mark Feltham", "Nine Below Zero", "Medium"]
    ],
    Percussion: [
        ["Sheila E.", "Prince's touring band", "Medium"],
        ["Tito Puente", "Tito Puente Orchestra", "Medium"],
        ["Mongo Santamaría", "Cal Tjader's band", "Medium"],
        ["Giovanni Hidalgo", "Dizzy Gillespie United Nation Orchestra", "Hard"],
        ["Sikiru Adepoju", "Planet Drum", "Hard"],
        ["Glen Velez", "Steve Reich and Musicians", "Hard"],
        ["Mickey Hart", "Grateful Dead", "Medium"]
    ],
    Mandolin: [
        ["Chris Thile", "Nickel Creek", "Medium"],
        ["Ricky Skaggs", "Emmylou Harris's Hot Band", "Medium"],
        ["David Grisman", "Old & in the Way", "Medium"],
        ["Sam Bush", "New Grass Revival", "Medium"],
        ["Bill Monroe", "The Blue Grass Boys", "Easy"],
        ["Mike Marshall", "Modern Mandolin Quartet", "Hard"],
        ["Tim O'Brien", "Hot Rize", "Medium"]
    ]
};

// How the instruments appear to the player.
const instruments = {
    Guitar: 'guitar',
    Drums: 'drums',
    Bass: 'bass guitar',
    Keyboards: 'keyboards',
    Saxophone: 'saxophone',
    Violin: 'violin',
    Trumpet: 'trumpet',
    Harmonica: 'harmonica',
    Percussion: 'percussion',
    Mandolin: 'mandolin'
};

const roles = {
    Guitar: 'guitarist',
    Drums: 'drummer',
    Bass: 'bassist',
    Keyboards: 'keyboard player',
    Saxophone: 'saxophonist',
    Violin: 'violinist',
    Trumpet: 'trumpeter',
    Harmonica: 'harmonica player',
    Percussion: 'percussionist',
    Mandolin: 'mandolin player'
};

const expectedCounts = {
    Guitar: 20,
    Drums: 15,
    Bass: 15,
    Keyboards: 10,
    Saxophone: 6,
    Violin: 8,
    Trumpet: 6,
    Harmonica: 6,
    Percussion: 7,
    Mandolin: 7
};

function normalise(value) {
    return String(value)
        .trim()
        .toLowerCase()
        .replace(/\s+/g, ' ');
}

// Check source facts before generating the questions.
const featured = new Set();

for (const [instrument, expected] of Object.entries(expectedCounts)) {
    const facts = musicianFacts[instrument];

    if (!Array.isArray(facts) || facts.length !== expected) {
        throw new Error(
            `Pack 153: incorrect number of ${instrument} facts.`
        );
    }

    for (const [name, group, difficulty] of facts) {
        if (
            !name ||
            !group ||
            !['Easy', 'Medium', 'Hard'].includes(difficulty)
        ) {
            throw new Error(
                `Pack 153: invalid fact for ${name}.`
            );
        }

        if (featured.has(normalise(name))) {
            throw new Error(
                `Pack 153: repeated musician ${name}.`
            );
        }

        featured.add(normalise(name));
    }
}

// Only use distinct options, excluding the marked correct answer.
function selectWrongAnswers(candidates, correct, seed) {
    const unique = [];

    for (const candidate of candidates) {
        if (
            normalise(candidate) !== normalise(correct) &&
            !unique.some(
                item => normalise(item) === normalise(candidate)
            )
        ) {
            unique.push(candidate);
        }
    }

    if (unique.length < 3) {
        throw new Error(
            `Pack 153: fewer than three wrong answers for ${correct}.`
        );
    }

    const wrong = [];
    let pointer = seed % unique.length;

    while (wrong.length < 3) {
        const candidate = unique[pointer];

        if (!wrong.includes(candidate)) {
            wrong.push(candidate);
        }

        pointer = (pointer + 1) % unique.length;
    }

    return wrong;
}

const questions = [];
const instrumentOptions = Object.values(instruments);

// Some ensembles have featured more than one musician
// playing the same instrument. Use safer question formats.
const forceInstrument = {
    Violin: [3],
    Percussion: [2, 3]
};

const forceGroup = {
    Percussion: [1, 4]
};

const avoidInstrument = new Set([
    'Steve Winwood',
    'Kate Pierson',
    'Michael McDonald',
    'Sheila E.',
    'Mickey Hart',
    'Tito Puente',
    'Sikiru Adepoju',
    'Glen Velez',
    'Toots Thielemans',
    'Billy Currie',
    'Jim Corr',
    "Tim O'Brien",
    'Ricky Skaggs'
]);

// ─────────────────────────────────────────────
// BUILD QUESTIONS
// ─────────────────────────────────────────────

for (const [instrument, facts] of Object.entries(musicianFacts)) {
    for (let index = 0; index < facts.length; index++) {
        const [musician, group, difficulty] = facts[index];
        const number = questions.length;

        const askInstrument =
            (
                index % 4 === 0 ||
                (forceInstrument[instrument] || []).includes(index)
            ) &&
            !avoidInstrument.has(musician);

        const askGroup =
            !askInstrument &&
            (
                index % 4 === 2 ||
                (forceGroup[instrument] || []).includes(index)
            );

        const question = askInstrument
            ? `Which instrument did ${musician} play with ${group}?`
            : askGroup
                ? `Which musical act featured ${musician} as a ${roles[instrument]}?`
                : `Who played ${instruments[instrument]} with ${group}?`;

        const correctAnswer = askInstrument
            ? instruments[instrument]
            : askGroup
                ? group
                : musician;

        const pool = askInstrument
            // In percussion questions, avoid "drums":
            // congas and timbales are also types of drums.
            ? instrument === 'Percussion'
                ? instrumentOptions.filter(name => name !== 'drums')
                : instrumentOptions
            : facts
                .map(fact => fact[askGroup ? 1 : 0])
                .filter(candidate => !(
                    askGroup &&
                    musician === 'Sikiru Adepoju' &&
                    candidate === 'Grateful Dead'
                ));

        const answers = selectWrongAnswers(
            pool,
            correctAnswer,
            number * 7 + 3
        );

        answers.splice(
            number % 4,
            0,
            correctAnswer
        );

        questions.push({
            id: 'music_' + (13301 + number),
            category: 'Music',
            question,
            answers,
            correctAnswer,
            difficulty,
            tags: [
                'Musicians & Instruments',
                instrument,
                askInstrument
                    ? 'Instrument recognition'
                    : askGroup
                        ? 'Bands'
                        : 'Musicians'
            ],
            dailyEligible: true
        });
    }
}

// ─────────────────────────────────────────────
// FINAL VALIDATION
// ─────────────────────────────────────────────

if (
    questions.length !== 100 ||
    questions[0].id !== 'music_13301' ||
    questions[99].id !== 'music_13400'
) {
    throw new Error(
        'Pack 153: question count or ID range is wrong.'
    );
}

const seenIds = new Set();
const seenQuestions = new Set();

for (const item of questions) {
    const wording = normalise(item.question);

    if (
        seenIds.has(item.id) ||
        !wording ||
        seenQuestions.has(wording) ||
        item.answers.length !== 4 ||
        new Set(item.answers.map(normalise)).size !== 4 ||
        item.answers.filter(
            answer => answer === item.correctAnswer
        ).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(item.difficulty) ||
        item.category !== 'Music' ||
        item.dailyEligible !== true ||
        item.tags.length !== 3
    ) {
        throw new Error(
            `Pack 153: invalid question ${item.id}.`
        );
    }

    seenIds.add(item.id);
    seenQuestions.add(wording);
}

module.exports = questions;
