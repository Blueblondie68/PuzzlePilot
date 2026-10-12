// quiz_pack152.js
// PuzzlePilot - The Bigggggg Quiz
// Music: Musicians & Instruments - Pack 152
// 100 questions: music_13201 to music_13300.
// Do not connect in quiz_bank.js until this batch is complete.

// Each entry: [musician, group, difficulty].
// For questions about group membership, names refer to groups
// with which the musician is documented to have performed.
const musicianFacts = {
    Guitar: [
        ['Richard Thompson', 'Fairport Convention', 'Medium'],
        ['Martin Barre', 'Jethro Tull', 'Medium'],
        ['Mick Taylor', 'The Rolling Stones', 'Medium'],
        ['Ronnie Wood', 'Faces', 'Medium'],
        ['Paul Kossoff', 'Free', 'Medium'],
        ['Mick Box', 'Uriah Heep', 'Hard'],
        ['Francis Rossi', 'Status Quo', 'Easy'],
        ['Dave Davies', 'The Kinks', 'Medium'],
        ['Steve Jones', 'Sex Pistols', 'Medium'],
        ['John McGeoch', 'Siouxsie and the Banshees', 'Hard'],
        ['Will Sergeant', 'Echo & the Bunnymen', 'Medium'],
        ['Andy Gill', 'Gang of Four', 'Hard'],
        ["Ed O'Brien", 'Radiohead', 'Medium'],
        ['Graham Nash', 'The Hollies', 'Medium'],
        ['Paul Weller', 'The Jam', 'Easy'],
        ['Simon Neil', 'Biffy Clyro', 'Medium'],
        ['Jamie Cook', 'Arctic Monkeys', 'Medium'],
        ['Sergio Pizzorno', 'Kasabian', 'Medium'],
        ['Nick Valensi', 'The Strokes', 'Medium'],
        ['Jerry Garcia', 'Grateful Dead', 'Easy']
    ],
    Drums: [
        ['Simon Kirke', 'Free', 'Medium'],
        ['John Densmore', 'The Doors', 'Medium'],
        ['Alan White', 'Yes', 'Medium'],
        ['Stephen Morris', 'New Order', 'Medium'],
        ['Dave Rowntree', 'Blur', 'Medium'],
        ['Tony McCarroll', 'Oasis', 'Medium'],
        ['Zak Starkey', 'The Who', 'Medium'],
        ['Jon Fishman', 'Phish', 'Medium'],
        ['Brian Downey', 'Thin Lizzy', 'Medium'],
        ['Bev Bevan', 'Electric Light Orchestra', 'Medium'],
        ['Joey Kramer', 'Aerosmith', 'Medium'],
        ['Joey Castillo', 'Queens of the Stone Age', 'Hard'],
        ['Rob Bourdon', 'Linkin Park', 'Medium'],
        ['Bill Kreutzmann', 'Grateful Dead', 'Medium'],
        ['Jim Keltner', 'Traveling Wilburys', 'Hard']
    ],
    Bass: [
        ['Ronnie Lane', 'Small Faces', 'Medium'],
        ['Andy Fraser', 'Free', 'Medium'],
        ['Trevor Bolder', 'The Spiders from Mars', 'Hard'],
        ['Mike Rutherford', 'Genesis', 'Medium'],
        ['Trevor Horn', 'The Buggles', 'Medium'],
        ['Tony Levin', 'King Crimson', 'Medium'],
        ['Rick Savage', 'Def Leppard', 'Medium'],
        ['Greg Lake', 'Emerson, Lake & Palmer', 'Medium'],
        ['Dee Dee Ramone', 'Ramones', 'Medium'],
        ['Jason Newsted', 'Metallica', 'Medium'],
        ['Joey DeMaio', 'Manowar', 'Hard'],
        ['Nikki Monninger', 'Silversun Pickups', 'Hard'],
        ['Victoria De Angelis', 'Måneskin', 'Medium'],
        ['Laura Lee', 'Khruangbin', 'Hard'],
        ["Nick O'Malley", 'Arctic Monkeys', 'Medium']
    ],
    Keyboards: [
        ['Bernie Worrell', 'Parliament-Funkadelic', 'Medium'],
        ['Keith Jarrett', "Art Blakey's Jazz Messengers", 'Hard'],
        ['Dennis DeYoung', 'Styx', 'Medium'],
        ['Garth Hudson', 'The Band', 'Medium'],
        ['Patrick Moraz', 'Yes', 'Hard'],
        ['Andy Fletcher', 'Depeche Mode', 'Medium'],
        ['Kevin Hearn', 'Barenaked Ladies', 'Hard'],
        ['Jordan Fish', 'Bring Me the Horizon', 'Medium'],
        ['Paul Carrack', 'Ace', 'Medium'],
        ['Rob Hyman', 'The Hooters', 'Hard'],
        ['Matthew Fisher', 'Procol Harum', 'Medium'],
        ['Jimmy Destri', 'Blondie', 'Hard']
    ],
    Saxophone: [
        ['Paul Desmond', 'Dave Brubeck Quartet', 'Medium'],
        ['Andrew Woolfolk', 'Earth, Wind & Fire', 'Medium'],
        ['Alto Reed', 'The Silver Bullet Band', 'Medium'],
        ['David Sanborn', 'The Paul Butterfield Blues Band', 'Hard'],
        ['Steve Douglas', 'The Wrecking Crew', 'Hard'],
        ['John Helliwell', 'Supertramp', 'Medium'],
        ['Courtney Pine', 'Jazz Warriors', 'Hard']
    ],
    Violin: [
        ['Lisa Germano', "John Mellencamp's band", 'Hard'],
        ['Sara Watkins', 'Nickel Creek', 'Medium'],
        ['Andrew Bird', 'Squirrel Nut Zippers', 'Hard'],
        ['Amanda Shires', 'The Highwomen', 'Medium'],
        ['Kishi Bashi', 'of Montreal', 'Hard'],
        ["Mark O'Connor", 'The David Grisman Quintet', 'Hard']
    ],
    Trumpet: [
        ['Roy Hargrove', 'The RH Factor', 'Medium'],
        ['Terence Blanchard', 'The E-Collective', 'Hard'],
        ['Dave Douglas', 'Masada Quartet', 'Hard'],
        ['Sean Jones', 'SFJAZZ Collective', 'Hard'],
        ['Jon Faddis', 'Thad Jones/Mel Lewis Orchestra', 'Hard']
    ],
    Harmonica: [
        ['Sonny Terry', 'Sonny Terry and Brownie McGhee', 'Medium'],
        ['Junior Wells', 'Buddy Guy and Junior Wells', 'Medium'],
        ['Charlie Musselwhite', 'The South Side Band', 'Hard'],
        ['Billy Branch', 'Sons of Blues', 'Hard'],
        ['Jason Ricci', 'New Blood', 'Hard']
    ],
    Percussion: [
        ['Ruth Underwood', 'The Mothers of Invention', 'Hard'],
        ['Airto Moreira', 'Return to Forever', 'Hard'],
        ['Zakir Hussain', 'Shakti', 'Medium'],
        ['Ray Cooper', "Elton John's touring band", 'Medium'],
        ['Mino Cinelu', 'Weather Report', 'Hard']
    ],
    Banjo: [
        ['Béla Fleck', 'Béla Fleck and the Flecktones', 'Medium'],
        ['Earl Scruggs', 'Flatt and Scruggs', 'Medium'],
        ['Pete Seeger', 'The Weavers', 'Medium'],
        ['John McEuen', 'Nitty Gritty Dirt Band', 'Hard'],
        ['Winston Marshall', 'Mumford & Sons', 'Medium']
    ],
    Flute: [
        ['Brian Finnegan', 'Flook', 'Hard'],
        ['Matt Molloy', 'The Chieftains', 'Medium'],
        ['Ian McDonald', 'King Crimson', 'Medium'],
        ['Jeremy Steig', 'The Satyrs', 'Hard'],
        ['Jorge Pardo', 'Paco de Lucía Sextet', 'Hard']
    ]
};

const expectedCounts = {
    Guitar: 20, Drums: 15, Bass: 15, Keyboards: 12,
    Saxophone: 7, Violin: 6, Trumpet: 5, Harmonica: 5,
    Percussion: 5, Banjo: 5, Flute: 5
};

const instrumentNames = {
    Guitar: 'guitar', Drums: 'drums', Bass: 'bass guitar',
    Keyboards: 'keyboards', Saxophone: 'saxophone',
    Violin: 'violin', Trumpet: 'trumpet', Harmonica: 'harmonica',
    Percussion: 'percussion', Banjo: 'banjo', Flute: 'flute'
};

const roles = {
    Guitar: 'guitarist', Drums: 'drummer', Bass: 'bassist',
    Keyboards: 'keyboard player', Saxophone: 'saxophonist',
    Violin: 'violinist', Trumpet: 'trumpeter',
    Harmonica: 'harmonica player', Percussion: 'percussionist',
    Banjo: 'banjo player', Flute: 'flautist'
};

function normalise(value) {
    return String(value).trim().toLowerCase().replace(/\s+/g, ' ');
}

// Validate entries before generating the quiz.
const allFeatured = new Set();

for (const [instrument, expected] of Object.entries(expectedCounts)) {
    const facts = musicianFacts[instrument];

    if (!Array.isArray(facts) || facts.length !== expected) {
        throw new Error(`Pack 152 incorrect ${instrument} count.`);
    }

    const groups = new Set();

    for (const [musician, group, difficulty] of facts) {
        if (
            typeof musician !== 'string' ||
            !musician.trim() ||
            typeof group !== 'string' ||
            !group.trim() ||
            !['Easy', 'Medium', 'Hard'].includes(difficulty)
        ) {
            throw new Error(`Pack 152 invalid fact: ${musician}`);
        }

        if (allFeatured.has(normalise(musician))) {
            throw new Error(`Pack 152 repeated musician: ${musician}`);
        }

        if (groups.has(normalise(group))) {
            throw new Error(
                `Pack 152 repeated ${instrument} group: ${group}`
            );
        }

        allFeatured.add(normalise(musician));
        groups.add(normalise(group));
    }
}

function chooseWrongAnswers(pool, correct, seed) {
    const choices = [];

    for (const candidate of pool) {
        if (
            normalise(candidate) !== normalise(correct) &&
            !choices.some(
                existing =>
                    normalise(existing) === normalise(candidate)
            )
        ) {
            choices.push(candidate);
        }
    }

    if (choices.length < 3) {
        throw new Error(
            `Pack 152 lacks wrong answers for: ${correct}`
        );
    }

    const wrong = [];
    let position = seed % choices.length;

    while (wrong.length < 3) {
        const candidate = choices[position];

        if (!wrong.includes(candidate)) {
            wrong.push(candidate);
        }

        position = (position + 1) % choices.length;
    }

    return wrong;
}

// The three formats rotate within each instrument.
// Questions about a group's instrumentalist are limited
// to one musician per group within this pack.
const questions = [];
const allInstruments = Object.values(instrumentNames);

// Avoid repeats of band/instrument facts from earlier packs,
// or ambiguous group choices for musicians in several bands.
const instrumentOverrides = {
    Guitar: [2, 12],
    Drums: [6],
    Bass: [7, 9]
};

for (const [instrument, facts] of Object.entries(musicianFacts)) {
    for (let index = 0; index < facts.length; index++) {
        const [musician, group, difficulty] = facts[index];
        const position = questions.length;

        const askInstrument =
            index % 5 === 0 ||
            (instrumentOverrides[instrument] || []).includes(index);

        const askGroup = !askInstrument && index % 3 === 1;

        const question = askInstrument
            ? `Which instrument did ${musician} play with ${group}?`
            : askGroup
                ? `Which group featured ${musician} as a ${roles[instrument]}?`
                : `Who played ${instrumentNames[instrument]} with ${group}?`;

        const correctAnswer = askInstrument
            ? instrumentNames[instrument]
            : askGroup
                ? group
                : musician;

        const pool = askInstrument
            ? allInstruments
            : facts.map(
                fact => fact[askGroup ? 1 : 0]
            );

        const answers = chooseWrongAnswers(
            pool,
            correctAnswer,
            position * 7 + 3
        );

        answers.splice(position % 4, 0, correctAnswer);

        questions.push({
            id: 'music_' + (13201 + position),
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

if (questions.length !== 100) {
    throw new Error(
        `Pack 152 expected 100 questions, found ${questions.length}.`
    );
}

const ids = new Set();
const wordings = new Set();

for (const question of questions) {
    const wording = normalise(question.question);

    if (
        !wording ||
        ids.has(question.id) ||
        wordings.has(wording)
    ) {
        throw new Error(
            `Pack 152 duplicate ID or wording: ${question.id}`
        );
    }

    ids.add(question.id);
    wordings.add(wording);

    if (
        !Array.isArray(question.answers) ||
        question.answers.length !== 4 ||
        new Set(question.answers.map(normalise)).size !== 4 ||
        question.answers.filter(
            answer => answer === question.correctAnswer
        ).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(question.difficulty) ||
        question.category !== 'Music' ||
        question.dailyEligible !== true ||
        !Array.isArray(question.tags) ||
        question.tags.length !== 3
    ) {
        throw new Error(
            `Pack 152 invalid question: ${question.id}`
        );
    }
}

if (
    questions[0].id !== 'music_13201' ||
    questions[99].id !== 'music_13300'
) {
    throw new Error('Pack 152 ID range incorrect.');
}

module.exports = questions;
