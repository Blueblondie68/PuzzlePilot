// quiz_pack150.js
// PuzzlePilot - The Bigggggg Quiz
// Music: Musicians & Instruments - Pack 150
// 100 questions: music_13001 to music_13100.
// New musicians, without repeating Pack 149's featured names.

// Each entry: [musician, group, difficulty].
// The group is one with which the musician performed.
const musicianFacts = {
    Guitar: [
        ['Eric Clapton', 'Cream', 'Easy'],
        ['Jimi Hendrix', 'The Jimi Hendrix Experience', 'Easy'],
        ['Jeff Beck', 'The Yardbirds', 'Medium'],
        ['Carlos Santana', 'Santana', 'Easy'],
        ['Steve Howe', 'Yes', 'Medium'],
        ['Joe Walsh', 'Eagles', 'Medium'],
        ['Glenn Tipton', 'Judas Priest', 'Medium'],
        ['Dave Murray', 'Iron Maiden', 'Hard'],
        ['Michael Schenker', 'UFO', 'Hard'],
        ['Gary Moore', 'Thin Lizzy', 'Medium'],
        ['Steve Hackett', 'Genesis', 'Medium'],
        ['Steve Cropper', "Booker T. & the M.G.'s", 'Hard'],
        ['Nile Rodgers', 'Chic', 'Easy'],
        ['Eddie Van Halen', 'Van Halen', 'Easy'],
        ['Nuno Bettencourt', 'Extreme', 'Medium'],
        ['Tom Morello', 'Rage Against the Machine', 'Medium'],
        ['Billy Corgan', 'The Smashing Pumpkins', 'Medium'],
        ['James Dean Bradfield', 'Manic Street Preachers', 'Medium'],
        ['Graham Coxon', 'Blur', 'Medium'],
        ['Matthew Bellamy', 'Muse', 'Medium'],
        ['Billie Joe Armstrong', 'Green Day', 'Easy'],
        ['Jack White', 'The White Stripes', 'Easy'],
        ['Josh Homme', 'Queens of the Stone Age', 'Medium'],
        ['Dan Auerbach', 'The Black Keys', 'Medium'],
        ['John Squire', 'The Stone Roses', 'Medium']
    ],
    Drums: [
        ['Ginger Baker', 'Cream', 'Easy'],
        ['Mitch Mitchell', 'The Jimi Hendrix Experience', 'Medium'],
        ['Ian Paice', 'Deep Purple', 'Medium'],
        ['Bill Ward', 'Black Sabbath', 'Medium'],
        ['Cozy Powell', 'Rainbow', 'Medium'],
        ['Carmine Appice', 'Vanilla Fudge', 'Hard'],
        ['Don Henley', 'Eagles', 'Easy'],
        ['Jeff Porcaro', 'Toto', 'Medium'],
        ['Steve Smith', 'Journey', 'Medium'],
        ['Alex Van Halen', 'Van Halen', 'Easy'],
        ['Rick Allen', 'Def Leppard', 'Easy'],
        ['Tommy Lee', 'Mötley Crüe', 'Easy'],
        ['Dave Lombardo', 'Slayer', 'Hard'],
        ['Joey Jordison', 'Slipknot', 'Medium'],
        ['Shannon Leto', 'Thirty Seconds to Mars', 'Medium'],
        ['Will Champion', 'Coldplay', 'Medium'],
        ['Ronnie Vannucci Jr.', 'The Killers', 'Hard'],
        ['Patrick Carney', 'The Black Keys', 'Medium'],
        ['Mike Joyce', 'The Smiths', 'Medium'],
        ['Clem Burke', 'Blondie', 'Medium']
    ],
    Bass: [
        ['Jack Bruce', 'Cream', 'Medium'],
        ['Noel Redding', 'The Jimi Hendrix Experience', 'Hard'],
        ['Geezer Butler', 'Black Sabbath', 'Medium'],
        ['Roger Glover', 'Deep Purple', 'Medium'],
        ['Chris Squire', 'Yes', 'Medium'],
        ['Lemmy', 'Motörhead', 'Easy'],
        ['Ian Hill', 'Judas Priest', 'Hard'],
        ['Phil Lynott', 'Thin Lizzy', 'Easy'],
        ['John Taylor', 'Duran Duran', 'Medium'],
        ['Paul Simonon', 'The Clash', 'Medium'],
        ['Bruce Foxton', 'The Jam', 'Medium'],
        ['Mark King', 'Level 42', 'Easy'],
        ['Derek Forbes', 'Simple Minds', 'Hard'],
        ['Mick Karn', 'Japan', 'Hard'],
        ['John McVie', 'Fleetwood Mac', 'Medium'],
        ['Nikki Sixx', 'Mötley Crüe', 'Medium'],
        ['Gene Simmons', 'Kiss', 'Easy'],
        ['Tina Weymouth', 'Talking Heads', 'Medium'],
        ['Kim Gordon', 'Sonic Youth', 'Medium'],
        ['Colin Greenwood', 'Radiohead', 'Medium']
    ],
    Keyboards: [
        ['Rick Davies', 'Supertramp', 'Medium'],
        ['Gary Numan', 'Tubeway Army', 'Easy'],
        ['Alan Wilder', 'Depeche Mode', 'Medium'],
        ['Dave Stewart', 'Eurythmics', 'Easy'],
        ['Donald Fagen', 'Steely Dan', 'Medium'],
        ['Joe Zawinul', 'Weather Report', 'Hard'],
        ['Herbie Hancock', 'The Headhunters', 'Medium'],
        ['Chick Corea', 'Return to Forever', 'Medium'],
        ['Richard Barbieri', 'Japan', 'Hard'],
        ["Roger O'Donnell", 'The Cure', 'Hard'],
        ['Alan Price', 'The Animals', 'Medium'],
        ['Geoff Downes', 'Asia', 'Medium'],
        ['Mike Score', 'A Flock of Seagulls', 'Medium'],
        ['Tim Rice-Oxley', 'Keane', 'Medium'],
        ['Greg Hawkes', 'The Cars', 'Hard']
    ],
    Saxophone: [
        ['Wayne Shorter', 'Weather Report', 'Medium'],
        ['Junior Walker', 'Junior Walker & the All Stars', 'Medium'],
        ['Stuart Matthewman', 'Sade', 'Hard'],
        ['Mel Collins', 'King Crimson', 'Hard'],
        ['LeRoi Moore', 'Dave Matthews Band', 'Hard']
    ],
    Violin: [
        ['Alison Krauss', 'Alison Krauss & Union Station', 'Easy'],
        ['Sarah Neufeld', 'Arcade Fire', 'Hard'],
        ['Martie Maguire', 'The Chicks', 'Medium'],
        ["Helen O'Hara", 'Dexys Midnight Runners', 'Medium'],
        ['Sharon Corr', 'The Corrs', 'Medium']
    ],
    Trumpet: [
        ['Chet Baker', 'Gerry Mulligan Quartet', 'Medium'],
        ['Arturo Sandoval', 'Irakere', 'Hard'],
        ['Wynton Marsalis', "Art Blakey's Jazz Messengers", 'Medium'],
        ['Clifford Brown', 'Clifford Brown–Max Roach Quintet', 'Hard'],
        ['Maynard Ferguson', 'Stan Kenton Orchestra', 'Medium']
    ],
    Harmonica: [
        ['John Popper', 'Blues Traveler', 'Medium'],
        ['Paul Butterfield', 'The Paul Butterfield Blues Band', 'Medium'],
        ['Lee Oskar', 'War', 'Hard'],
        ['Alan Wilson', 'Canned Heat', 'Medium'],
        ['Jimmie Fadden', 'Nitty Gritty Dirt Band', 'Hard']
    ]
};

const expectedCounts = {
    Guitar: 25,
    Drums: 20,
    Bass: 20,
    Keyboards: 15,
    Saxophone: 5,
    Violin: 5,
    Trumpet: 5,
    Harmonica: 5
};

const instrumentNames = {
    Guitar: 'guitar',
    Drums: 'drums',
    Bass: 'bass guitar',
    Keyboards: 'keyboards',
    Saxophone: 'saxophone',
    Violin: 'violin',
    Trumpet: 'trumpet',
    Harmonica: 'harmonica'
};

const roles = {
    Guitar: 'guitarist',
    Drums: 'drummer',
    Bass: 'bassist',
    Keyboards: 'keyboard player',
    Saxophone: 'saxophonist',
    Violin: 'violinist',
    Trumpet: 'trumpeter',
    Harmonica: 'harmonica player'
};

function normalise(value) {
    return String(value).trim().toLowerCase().replace(/\s+/g, ' ');
}

// Validate the source facts before building the questions.
const featuredNames = new Set();

for (const [instrument, expected] of Object.entries(expectedCounts)) {
    const facts = musicianFacts[instrument];

    if (!Array.isArray(facts) || facts.length !== expected) {
        throw new Error(`Pack 150: wrong number of ${instrument} facts.`);
    }

    const groupsInInstrument = new Set();

    for (const [musician, group, difficulty] of facts) {
        if (
            !musician ||
            !group ||
            !['Easy', 'Medium', 'Hard'].includes(difficulty)
        ) {
            throw new Error(`Pack 150: invalid ${instrument} fact.`);
        }

        if (featuredNames.has(normalise(musician))) {
            throw new Error(`Pack 150: musician repeated: ${musician}`);
        }

        featuredNames.add(normalise(musician));

        if (groupsInInstrument.has(normalise(group))) {
            throw new Error(
                `Pack 150: repeated ${instrument} group: ${group}`
            );
        }

        groupsInInstrument.add(normalise(group));
    }
}

function wrongAnswers(allAnswers, correctAnswer, seed) {
    const candidates = [...new Set(allAnswers)]
        .filter(answer => normalise(answer) !== normalise(correctAnswer));

    if (candidates.length < 3) {
        throw new Error(
            `Pack 150: not enough answers for ${correctAnswer}`
        );
    }

    const answers = [];
    let position = seed % candidates.length;

    while (answers.length < 3) {
        const candidate = candidates[position];

        if (!answers.includes(candidate)) {
            answers.push(candidate);
        }

        position = (position + 1) % candidates.length;
    }

    return answers;
}

const questions = [];

for (const [instrument, facts] of Object.entries(musicianFacts)) {
    for (let index = 0; index < facts.length; index++) {
        const [musician, group, difficulty] = facts[index];
        const number = questions.length;
        const askForGroup = index % 3 === 2;

        const question = askForGroup
            ? `Which group featured ${musician} as a ${roles[instrument]}?`
            : `Who played ${instrumentNames[instrument]} in ${group}?`;

        const correctAnswer = askForGroup ? group : musician;
        const candidates = facts.map(
            fact => fact[askForGroup ? 1 : 0]
        );

        const answers = wrongAnswers(
            candidates,
            correctAnswer,
            number * 3 + 1
        );

        answers.splice(number % 4, 0, correctAnswer);

        questions.push({
            id: 'music_' + (13001 + number),
            category: 'Music',
            question,
            answers,
            correctAnswer,
            difficulty,
            tags: [
                'Musicians & Instruments',
                instrument,
                askForGroup ? 'Bands' : 'Musicians'
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
        `Pack 150: expected 100 questions, found ${questions.length}.`
    );
}

const seenIds = new Set();
const seenQuestions = new Set();

for (const question of questions) {
    const wording = normalise(question.question);

    if (
        seenIds.has(question.id) ||
        seenQuestions.has(wording)
    ) {
        throw new Error(
            `Pack 150: repeated ID or question: ${question.id}`
        );
    }

    seenIds.add(question.id);
    seenQuestions.add(wording);

    if (
        !wording ||
        !Array.isArray(question.answers) ||
        question.answers.length !== 4 ||
        new Set(question.answers.map(normalise)).size !== 4 ||
        question.answers.filter(
            answer => answer === question.correctAnswer
        ).length !== 1 ||
        question.category !== 'Music' ||
        question.dailyEligible !== true ||
        !Array.isArray(question.tags)
    ) {
        throw new Error(
            `Pack 150: invalid question: ${question.id}`
        );
    }
}

if (
    questions[0].id !== 'music_13001' ||
    questions[99].id !== 'music_13100'
) {
    throw new Error('Pack 150: incorrect ID range.');
}

module.exports = questions;
