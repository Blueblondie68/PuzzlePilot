 // quiz_pack150.js
// PuzzlePilot - The Bigggggg Quiz
// Music: Musicians & Instruments - Pack 150
// 100 questions: music_13001 to music_13100.
// Tagging audit: original facts, answer positions and difficulty preserved.
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

// Relevant group, country, genre and specialist subject tags.
// Keep genre tags attached to the group, not to unrelated performers.
const groupTagLines = {
    'Cream': 'UK music|blues rock|psychedelic rock|classic rock',
    'The Jimi Hendrix Experience': 'psychedelic rock|blues rock|classic rock|Jimi Hendrix',
    'The Yardbirds': 'UK music|British blues|blues rock|1960s music',
    'Santana': 'Latin rock|blues rock|American music|Carlos Santana',
    'Yes': 'UK music|progressive rock|classic rock',
    'Eagles': 'American music|country rock|soft rock|classic rock',
    'Judas Priest': 'UK music|heavy metal|British metal',
    'Iron Maiden': 'UK music|heavy metal|New Wave of British Heavy Metal',
    'UFO': 'UK music|hard rock|heavy metal',
    'Thin Lizzy': 'Irish music|hard rock|classic rock',
    'Genesis': 'UK music|progressive rock|pop rock|classic rock',
    "Booker T. & the M.G.'s": 'American music|Memphis soul|instrumental soul|Stax Records',
    'Chic': 'American music|disco|funk|dance music',
    'Van Halen': 'American music|hard rock|arena rock|classic rock',
    'Extreme': 'American music|funk metal|hard rock|glam metal',
    'Rage Against the Machine': 'American music|rap metal|alternative metal|political rock',
    'The Smashing Pumpkins': 'American music|alternative rock|Chicago music|grunge era',
    'Manic Street Preachers': 'Welsh music|UK music|alternative rock|Britpop era',
    'Blur': 'UK music|Britpop|alternative rock|Damon Albarn',
    'Muse': 'UK music|alternative rock|progressive rock|Matt Bellamy',
    'Green Day': 'American music|punk rock|pop punk|California music',
    'The White Stripes': 'American music|garage rock revival|Detroit music|blues rock',
    'Queens of the Stone Age': 'American music|stoner rock|alternative rock|hard rock',
    'The Black Keys': 'American music|blues rock|garage rock|Ohio music',
    'The Stone Roses': 'UK music|Manchester music|Madchester|indie rock',
    'Deep Purple': 'UK music|hard rock|heavy metal|classic rock',
    'Black Sabbath': 'UK music|Birmingham music|heavy metal|doom metal',
    'Rainbow': 'UK music|hard rock|heavy metal|Ritchie Blackmore',
    'Vanilla Fudge': 'American music|psychedelic rock|hard rock|1960s music',
    'Toto': 'American music|soft rock|pop rock|session musicians',
    'Journey': 'American music|arena rock|hard rock|classic rock',
    'Def Leppard': 'UK music|hard rock|glam metal|Sheffield music',
    'Mötley Crüe': 'American music|glam metal|hard rock|Los Angeles music',
    'Slayer': 'American music|thrash metal|heavy metal',
    'Slipknot': 'American music|nu metal|alternative metal|heavy metal',
    'Thirty Seconds to Mars': 'American music|alternative rock|Jared Leto|rock bands',
    'Coldplay': 'UK music|alternative rock|pop rock|Chris Martin',
    'The Killers': 'American music|indie rock|new wave|Las Vegas music',
    'The Smiths': 'UK music|Manchester music|indie rock|alternative rock',
    'Blondie': 'American music|new wave|punk rock|New York music',
    'Motörhead': 'UK music|heavy metal|hard rock|speed metal',
    'Duran Duran': 'UK music|Birmingham music|new romantic|new wave|synth-pop',
    'The Clash': 'UK music|punk rock|British punk|post-punk',
    'The Jam': 'UK music|mod revival|punk rock|new wave',
    'Level 42': 'UK music|jazz-funk|pop rock|1980s music',
    'Simple Minds': 'Scottish music|UK music|new wave|alternative rock',
    'Japan': 'UK music|new romantic|art pop|synth-pop',
    'Fleetwood Mac': 'British-American music|soft rock|classic rock|blues rock',
    'Kiss': 'American music|hard rock|glam rock|classic rock',
    'Talking Heads': 'American music|new wave|art rock|post-punk',
    'Sonic Youth': 'American music|noise rock|alternative rock|New York music',
    'Radiohead': 'UK music|alternative rock|art rock|experimental rock',
    'Supertramp': 'UK music|progressive rock|art rock|pop rock',
    'Tubeway Army': 'UK music|new wave|synth-pop|Gary Numan',
    'Depeche Mode': 'UK music|synth-pop|new wave|electronic music',
    'Eurythmics': 'UK music|synth-pop|new wave|Annie Lennox',
    'Steely Dan': 'American music|jazz rock|soft rock|jazz fusion',
    'Weather Report': 'American music|jazz fusion|instrumental music|jazz rock',
    'The Headhunters': 'American music|jazz-funk|jazz fusion|Herbie Hancock',
    'Return to Forever': 'American music|jazz fusion|progressive jazz|Chick Corea',
    'The Cure': 'UK music|gothic rock|post-punk|alternative rock',
    'The Animals': 'UK music|British Invasion|blues rock|1960s music',
    'Asia': 'UK music|progressive rock|arena rock|classic rock',
    'A Flock of Seagulls': 'UK music|new wave|synth-pop|Liverpool music',
    'Keane': 'UK music|piano rock|alternative rock|pop rock',
    'The Cars': 'American music|new wave|power pop|Boston music',
    'Junior Walker & the All Stars': 'American music|Motown|soul|rhythm and blues',
    'Sade': 'UK music|sophisti-pop|smooth jazz|soul music',
    'King Crimson': 'UK music|progressive rock|jazz rock|art rock',
    'Dave Matthews Band': 'American music|jam bands|folk rock|alternative rock',
    'Alison Krauss & Union Station': 'American music|bluegrass|country music|folk music',
    'Arcade Fire': 'Canadian music|indie rock|art rock|alternative rock',
    'The Chicks': 'American music|country music|country pop|bluegrass',
    'Dexys Midnight Runners': 'UK music|soul|new wave|Celtic folk|British pop',
    'The Corrs': 'Irish music|folk rock|pop rock|Celtic music',
    'Gerry Mulligan Quartet': 'American music|cool jazz|West Coast jazz|jazz quartets',
    'Irakere': 'Cuban music|Afro-Cuban jazz|Latin jazz|jazz fusion',
    "Art Blakey's Jazz Messengers": 'American music|hard bop|bebop|jazz ensembles',
    'Clifford Brown–Max Roach Quintet': 'American music|hard bop|jazz ensembles|1950s jazz',
    'Stan Kenton Orchestra': 'American music|big band|jazz orchestras|swing jazz',
    'Blues Traveler': 'American music|blues rock|jam bands|alternative rock',
    'The Paul Butterfield Blues Band': 'American music|Chicago blues|blues rock|1960s music',
    'War': 'American music|funk|Latin rock|soul',
    'Canned Heat': 'American music|blues rock|boogie rock|1960s music',
    'Nitty Gritty Dirt Band': 'American music|country rock|bluegrass|folk rock'
};

// Specific instrument topics make each item available to specialist quizzes.
const instrumentTagLines = {
    Guitar: 'guitar|guitarists|electric guitar|rock guitar',
    Drums: 'drums|drummers|percussion|drum kit|rhythm section',
    Bass: 'bass|bass guitar|bassists|rhythm section',
    Keyboards: 'keyboards|keyboardists|piano|organ|synthesisers',
    Saxophone: 'saxophone|saxophonists|woodwind instruments|horn sections',
    Violin: 'violin|violinists|fiddle|string instruments',
    Trumpet: 'trumpet|trumpeters|brass instruments|jazz musicians',
    Harmonica: 'harmonica|harmonica players|mouth organ|blues instruments'
};

const splitTags = value => value.split('|');

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

        if (!groupTagLines[group] || !instrumentTagLines[instrument]) {
            throw new Error(`Pack 150: missing specialist tags for ${musician}`);
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
            tags: [...new Set([
                'Musicians & Instruments',
                instrument,
                askForGroup ? 'Bands' : 'Musicians',
                'Music', 'music trivia', 'band members',
                'instrument trivia', 'instrument players',
                askForGroup ? 'group identification' : 'musician identification',
                musician, group,
                ...splitTags(instrumentTagLines[instrument]),
                ...splitTags(groupTagLines[group])
            ])],
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
        !Array.isArray(question.tags) ||
        question.tags.length < 13 ||
        new Set(question.tags).size !== question.tags.length
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
