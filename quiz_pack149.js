// quiz_pack149.js
// PuzzlePilot - The Bigggggg Quiz
// Music: Musicians & Instruments - Pack 149
// 100 questions: music_12901 to music_13000.

const musicianFacts = {

    Guitar: [
        ["Brian May", "Queen"],
        ["Jimmy Page", "Led Zeppelin"],
        ["David Gilmour", "Pink Floyd"],
        ["Ritchie Blackmore", "Deep Purple"],
        ["Tony Iommi", "Black Sabbath"],
        ["Angus Young", "AC/DC"],
        ["Keith Richards", "The Rolling Stones"],
        ["George Harrison", "The Beatles"],
        ["Pete Townshend", "The Who"],
        ["Mark Knopfler", "Dire Straits"],
        ["Andy Summers", "The Police"],
        ["Johnny Marr", "The Smiths"],
        ["John Frusciante", "Red Hot Chili Peppers"],
        ["Slash", "Guns N' Roses"],
        ["Kirk Hammett", "Metallica"],
        ["Dave Grohl", "Foo Fighters"],
        ["Noel Gallagher", "Oasis"],
        ["The Edge", "U2"],
        ["Lindsey Buckingham", "Fleetwood Mac"],
        ["Peter Buck", "R.E.M."],
        ["Robert Smith", "The Cure"],
        ["Bernard Butler", "Suede"],
        ["Jonny Greenwood", "Radiohead"],
        ["Mick Jones", "The Clash"],
        ["Rick Nielsen", "Cheap Trick"]
    ],

    Drums: [
        ["Ringo Starr", "The Beatles"],
        ["John Bonham", "Led Zeppelin"],
        ["Roger Taylor", "Queen"],
        ["Keith Moon", "The Who"],
        ["Charlie Watts", "The Rolling Stones"],
        ["Nick Mason", "Pink Floyd"],
        ["Neil Peart", "Rush"],
        ["Phil Collins", "Genesis"],
        ["Stewart Copeland", "The Police"],
        ["Lars Ulrich", "Metallica"],
        ["Dave Grohl", "Nirvana"],
        ["Taylor Hawkins", "Foo Fighters"],
        ["Chad Smith", "Red Hot Chili Peppers"],
        ["Travis Barker", "Blink-182"],
        ["Larry Mullen Jr.", "U2"],
        ["Mick Fleetwood", "Fleetwood Mac"],
        ["Dominic Howard", "Muse"],
        ["Matt Helders", "Arctic Monkeys"],
        ["Meg White", "The White Stripes"],
        ["Tré Cool", "Green Day"]
    ],

    Bass: [
        ["John Deacon", "Queen"],
        ["Paul McCartney", "The Beatles"],
        ["John Paul Jones", "Led Zeppelin"],
        ["Roger Waters", "Pink Floyd"],
        ["Bill Wyman", "The Rolling Stones"],
        ["John Entwistle", "The Who"],
        ["Sting", "The Police"],
        ["Flea", "Red Hot Chili Peppers"],
        ["Cliff Burton", "Metallica"],
        ["Duff McKagan", "Guns N' Roses"],
        ["Adam Clayton", "U2"],
        ["Krist Novoselic", "Nirvana"],
        ["Mike Dirnt", "Green Day"],
        ["Chris Wolstenholme", "Muse"],
        ["Alex James", "Blur"],
        ["Andy Rourke", "The Smiths"],
        ["Peter Hook", "Joy Division"],
        ["Steve Harris", "Iron Maiden"],
        ["Geddy Lee", "Rush"],
        ["Kim Deal", "Pixies"]
    ],

    Keyboards: [
        ["Rick Wakeman", "Yes"],
        ["Tony Banks", "Genesis"],
        ["Ray Manzarek", "The Doors"],
        ["Jon Lord", "Deep Purple"],
        ["Richard Wright", "Pink Floyd"],
        ["Christine McVie", "Fleetwood Mac"],
        ["Nick Rhodes", "Duran Duran"],
        ["Vince Clarke", "Depeche Mode"],
        ["Dave Greenfield", "The Stranglers"],
        ["Jools Holland", "Squeeze"],
        ["Steve Nieve", "Elvis Costello and the Attractions"],
        ["Rod Argent", "The Zombies"],
        ["Keith Emerson", "Emerson, Lake & Palmer"],
        ["Jordan Rudess", "Dream Theater"],
        ["Benmont Tench", "Tom Petty and the Heartbreakers"],
        ["Ian McLagan", "Small Faces"],
        ["David Bryan", "Bon Jovi"],
        ["Andrew Farriss", "INXS"],
        ["Chris Lowe", "Pet Shop Boys"],
        ["Tuomas Holopainen", "Nightwish"]
    ],

    Saxophone: [
        ["Lee Thompson", "Madness"],
        ["Andy Mackay", "Roxy Music"],
        ["Brian Travers", "UB40"],
        ["Steve Norman", "Spandau Ballet"],
        ["Clarence Clemons", "The E Street Band"]
    ],

    Violin: [
        ["Dave Swarbrick", "Fairport Convention"],
        ["Charlie Daniels", "The Charlie Daniels Band"],
        ["Boyd Tinsley", "Dave Matthews Band"],
        ["Warren Ellis", "Dirty Three"],
        ["Jean-Luc Ponty", "Mahavishnu Orchestra"]
    ],

    Trumpet: [
        ["Louis Armstrong", "Louis Armstrong and His Hot Five"],
        ["Dizzy Gillespie", "Dizzy Gillespie All-Stars"],
        ["Miles Davis", "The Miles Davis Quintet"],
        ["Herb Alpert", "Herb Alpert & the Tijuana Brass"],
        ["Hugh Masekela", "The Jazz Epistles"]
    ]
};

// ─────────────────────────────────────────────
// SETTINGS AND VALIDATION
// ─────────────────────────────────────────────

const expectedCounts = {
    Guitar: 25,
    Drums: 20,
    Bass: 20,
    Keyboards: 20,
    Saxophone: 5,
    Violin: 5,
    Trumpet: 5
};

function normalise(value) {
    return String(value)
        .trim()
        .toLowerCase()
        .replace(/\s+/g, ' ');
}

for (const [instrument, expected] of Object.entries(expectedCounts)) {
    if (
        !Array.isArray(musicianFacts[instrument]) ||
        musicianFacts[instrument].length !== expected
    ) {
        throw new Error(
            `Pack 149 incorrect ${instrument} count.`
        );
    }

    const seenMusicians = new Set();
    const seenBands = new Set();

    for (const [musician, band] of musicianFacts[instrument]) {
        if (
            typeof musician !== 'string' ||
            !musician.trim() ||
            typeof band !== 'string' ||
            !band.trim()
        ) {
            throw new Error(
                `Invalid ${instrument} musician fact.`
            );
        }

        if (
            seenMusicians.has(normalise(musician)) ||
            seenBands.has(normalise(band))
        ) {
            throw new Error(
                `Repeated ${instrument} musician or group: ${musician}`
            );
        }

        seenMusicians.add(normalise(musician));
        seenBands.add(normalise(band));
    }
}

// ─────────────────────────────────────────────
// ANSWER HELPERS
// ─────────────────────────────────────────────

function chooseWrongAnswers(candidates, correct, seed) {
    const unique = [];

    for (const candidate of candidates) {
        if (
            normalise(candidate) !== normalise(correct) &&
            !unique.some(
                value => normalise(value) === normalise(candidate)
            )
        ) {
            unique.push(candidate);
        }
    }

    if (unique.length < 3) {
        throw new Error(
            `Not enough wrong answers for ${correct}`
        );
    }

    const wrong = [];
    let position = seed % unique.length;

    while (wrong.length < 3) {
        const candidate = unique[position];

        if (!wrong.includes(candidate)) {
            wrong.push(candidate);
        }

        position = (position + 1) % unique.length;
    }

    return wrong;
}

function instrumentName(instrument) {
    const names = {
        Guitar: 'guitar',
        Drums: 'drums',
        Bass: 'bass guitar',
        Keyboards: 'keyboards',
        Saxophone: 'saxophone',
        Violin: 'violin',
        Trumpet: 'trumpet'
    };

    return names[instrument];
}

function musicianRole(instrument) {
    const roles = {
        Guitar: 'a guitarist',
        Drums: 'a drummer',
        Bass: 'a bassist',
        Keyboards: 'a keyboard player',
        Saxophone: 'a saxophonist',
        Violin: 'a violinist',
        Trumpet: 'a trumpeter'
    };

    return roles[instrument];
}

// ─────────────────────────────────────────────
// BUILD THE 100 QUESTIONS
// ─────────────────────────────────────────────

const questions = [];

for (const [instrument, facts] of Object.entries(musicianFacts)) {
    for (let index = 0; index < facts.length; index++) {
        const [musician, band] = facts[index];
        const questionIndex = questions.length;

        // Every third question asks for the group.
        // The other questions ask for the musician.
        const askForBand = index % 3 === 2;

        let question;
        let correctAnswer;
        let candidates;

        if (askForBand) {
            question =
                `Which group featured ${musician} as ` +
                `${musicianRole(instrument)}?`;

            correctAnswer = band;
            candidates = facts.map(fact => fact[1]);

        } else {
            question =
                `Who played ${instrumentName(instrument)} ` +
                `in ${band}?`;

            correctAnswer = musician;
            candidates = facts.map(fact => fact[0]);
        }

        const wrongAnswers = chooseWrongAnswers(
            candidates,
            correctAnswer,
            questionIndex * 3 + 1
        );

        const answers = [...wrongAnswers];

        answers.splice(
            questionIndex % 4,
            0,
            correctAnswer
        );

        const difficulty =
            questionIndex % 11 === 0
                ? 'Hard'
                : questionIndex % 3 === 0
                    ? 'Easy'
                    : 'Medium';

        questions.push({
            id: 'music_' + (12901 + questionIndex),
            category: 'Music',
            question,
            answers,
            correctAnswer,
            difficulty,
            tags: [
                'Musicians & Instruments',
                instrument,
                askForBand ? 'Bands' : 'Musicians'
            ],
            dailyEligible: true
        });
    }
}

// ─────────────────────────────────────────────
// FINAL VALIDATION
// ─────────────────────────────────────────────

if (questions.length !== 100) {
    throw new Error(
        `Pack 149 must contain 100 questions. Found ${questions.length}.`
    );
}

const seenIds = new Set();
const seenQuestions = new Set();

for (const question of questions) {
    if (seenIds.has(question.id)) {
        throw new Error(
            `Duplicate question ID: ${question.id}`
        );
    }

    seenIds.add(question.id);

    const questionKey = normalise(question.question);

    if (!questionKey || seenQuestions.has(questionKey)) {
        throw new Error(
            `Empty or repeated question: ${question.id}`
        );
    }

    seenQuestions.add(questionKey);

    if (
        !Array.isArray(question.answers) ||
        question.answers.length !== 4
    ) {
        throw new Error(
            `Invalid answer count: ${question.id}`
        );
    }

    if (
        new Set(question.answers.map(normalise)).size !== 4
    ) {
        throw new Error(
            `Repeated answer options: ${question.id}`
        );
    }

    if (
        question.answers.filter(
            answer => answer === question.correctAnswer
        ).length !== 1
    ) {
        throw new Error(
            `Correct answer problem: ${question.id}`
        );
    }

    if (
        !['Easy', 'Medium', 'Hard'].includes(question.difficulty)
    ) {
        throw new Error(
            `Invalid difficulty: ${question.id}`
        );
    }

    if (
        question.category !== 'Music' ||
        question.dailyEligible !== true ||
        !Array.isArray(question.tags)
    ) {
        throw new Error(
            `Invalid question details: ${question.id}`
        );
    }
}

if (
    questions[0].id !== 'music_12901' ||
    questions[99].id !== 'music_13000'
) {
    throw new Error(
        'Pack 149 question ID range is incorrect.'
    );
}

module.exports = questions;
