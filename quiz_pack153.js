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

// Specialist music subjects for this tagging-only audit.
// Group tags describe the act, while instrument tags identify the role.
const groupTagLines = {
    'Double Trouble': 'American music|Texas blues|blues rock|Stevie Ray Vaughan',
    'The Allman Brothers Band': 'American music|southern rock|blues rock|classic rock',
    'Aerosmith': 'American music|hard rock|blues rock|classic rock',
    'Bon Jovi': 'American music|arena rock|hard rock|glam metal',
    'Dream Theater': 'American music|progressive metal|progressive rock|heavy metal',
    'Whitesnake': 'UK music|hard rock|blues rock|glam metal',
    'Alcatrazz': 'American music|heavy metal|hard rock|1980s metal',
    'Megadeth': 'American music|thrash metal|heavy metal|metal bands',
    'Slayer': 'American music|thrash metal|heavy metal|metal bands',
    'Avenged Sevenfold': 'American music|heavy metal|metalcore|hard rock',
    'Metallica': 'American music|thrash metal|heavy metal|hard rock',
    "Billy Idol's band": 'UK music|new wave|hard rock|Billy Idol',
    'Living Colour': 'American music|funk metal|alternative metal|hard rock',
    'Wishbone Ash': 'UK music|hard rock|progressive rock|twin guitars',
    'Marillion': 'UK music|neo-progressive rock|progressive rock|British rock',
    'The Corrs': 'Irish music|Celtic pop|folk rock|pop rock',
    'Pentangle': 'UK music|British folk|folk jazz|folk rock',
    'The Shadows': 'UK music|instrumental rock|British rock|1960s music',
    "Jane's Addiction": 'American music|alternative rock|alternative metal|Los Angeles music',
    'Marilyn Manson': 'American music|industrial rock|industrial metal|alternative metal',
    'Mahavishnu Orchestra': 'jazz fusion|jazz rock|progressive rock|instrumental music',
    "Frank Zappa's band": 'American music|experimental rock|jazz rock|Frank Zappa',
    'Weather Report': 'American music|jazz fusion|jazz rock|instrumental music',
    'The Wrecking Crew': 'American music|Los Angeles music|session musicians|studio recordings',
    'Buddy Rich Big Band': 'American music|big band|jazz drums|swing jazz',
    'Benny Goodman Orchestra': 'American music|big band|swing music|jazz orchestras',
    'The Jazz Messengers': 'American music|hard bop|jazz music|jazz ensembles',
    'Clifford Brown–Max Roach Quintet': 'American music|hard bop|jazz music|1950s jazz',
    'John Coltrane Quartet': 'American music|modal jazz|post-bop|jazz ensembles',
    'Miles Davis Quintet': 'American music|hard bop|modal jazz|jazz ensembles',
    'Parliament-Funkadelic': 'American music|P-Funk|funk|George Clinton',
    'The Stone Roses': 'UK music|Manchester music|Madchester|indie rock',
    'Radiohead': 'UK music|alternative rock|art rock|experimental rock',
    'Pulp': 'UK music|Britpop|Sheffield music|alternative rock',
    'The 1975': 'UK music|alternative pop|indie pop|Manchester music',
    'Béla Fleck and the Flecktones': 'American music|bluegrass fusion|jazz fusion|instrumental music',
    'Return to Forever': 'American music|jazz fusion|progressive jazz|Chick Corea',
    "Miles Davis's band": 'American music|jazz fusion|jazz music|Miles Davis',
    'Fourplay': 'American music|smooth jazz|jazz fusion|instrumental music',
    'Sly and the Family Stone': 'American music|funk|psychedelic soul|soul music',
    'Earth, Wind & Fire': 'American music|funk|soul music|rhythm and blues',
    'Tower of Power': 'American music|funk|soul music|horn section',
    'Bob Marley and the Wailers': 'Jamaican music|reggae|roots reggae|Bob Marley',
    "Booker T. & the M.G.'s": 'American music|Memphis soul|instrumental soul|Stax Records',
    'Rage Against the Machine': 'American music|rap metal|alternative metal|political rock',
    'Tool': 'American music|progressive metal|alternative metal|art rock',
    'The Verve': 'UK music|Britpop|psychedelic rock|alternative rock',
    'Coldplay': 'UK music|pop rock|alternative rock|British pop',
    'Traffic': 'UK music|psychedelic rock|jazz rock|classic rock',
    'Santana': 'American music|Latin rock|blues rock|Carlos Santana',
    'The Doobie Brothers': 'American music|pop rock|soft rock|blue-eyed soul',
    "The B-52's": 'American music|new wave|dance-rock|Athens Georgia music',
    'Yes': 'UK music|progressive rock|art rock|classic rock',
    'Iron Butterfly': 'American music|psychedelic rock|hard rock|1960s music',
    "Billy Joel's band": 'American music|pop rock|piano rock|Billy Joel',
    'Ultravox': 'UK music|new wave|synth-pop|new romantic',
    'The Tonight Show Band': 'American music|television music|jazz ensemble|big band',
    'Miles Davis Sextet': 'American music|hard bop|modal jazz|jazz ensembles',
    "Woody Herman's Second Herd": 'American music|big band|bebop|jazz music',
    'The Kingpins': 'American music|instrumental soul|rhythm and blues|King Curtis',
    'Ray Charles Orchestra': 'American music|rhythm and blues|soul music|Ray Charles',
    'Quintette du Hot Club de France': 'French music|gypsy jazz|swing music|jazz strings',
    'The Dubliners': 'Irish music|traditional Irish music|folk music|Celtic music',
    "Bob Dylan's Rolling Thunder Revue": 'American music|folk rock|Bob Dylan|live performances',
    'Secret Garden': 'Norwegian-Irish music|new age music|neoclassical music|Celtic music',
    'Old & in the Way': 'American music|bluegrass|progressive bluegrass|folk music',
    'The Swe-Danes': 'Scandinavian music|jazz music|vocal jazz|swing music',
    'Commander Cody and His Lost Planet Airmen': 'American music|country rock|western swing|roots rock',
    "Art Blakey's Jazz Messengers": 'American music|hard bop|bebop|jazz ensembles',
    'Horace Silver Quintet': 'American music|hard bop|jazz ensembles|jazz piano',
    'Duke Ellington Orchestra': 'American music|big band|swing jazz|jazz orchestra',
    'Louis Prima and His New Orleans Gang': 'American music|New Orleans jazz|swing music|Louis Prima',
    'George Shearing Quintet': 'American music|cool jazz|jazz ensembles|jazz piano',
    'Area Code 615': 'American music|Nashville music|country rock|session musicians',
    'Anson Funderburgh & the Rockets': 'American music|Texas blues|electric blues|blues bands',
    'The Mighty Flyers': 'American music|West Coast blues|electric blues|blues bands',
    'Little Charlie & the Nightcats': 'American music|electric blues|West Coast blues|blues bands',
    'Nine Below Zero': 'UK music|British blues|blues rock|pub rock',
    "Prince's touring band": 'American music|funk|pop music|Prince',
    'Tito Puente Orchestra': 'American music|Latin jazz|mambo|Afro-Cuban music',
    "Cal Tjader's band": 'American music|Latin jazz|jazz percussion|Afro-Cuban music',
    'Dizzy Gillespie United Nation Orchestra': 'American music|Latin jazz|jazz fusion|Dizzy Gillespie',
    'Planet Drum': 'world music|global percussion|percussion ensembles|Mickey Hart',
    'Steve Reich and Musicians': 'American music|minimalism|contemporary classical|percussion music',
    'Grateful Dead': 'American music|psychedelic rock|jam bands|classic rock',
    'Nickel Creek': 'American music|progressive bluegrass|folk music|acoustic music',
    "Emmylou Harris's Hot Band": 'American music|country music|bluegrass|Emmylou Harris',
    'New Grass Revival': 'American music|progressive bluegrass|newgrass|acoustic music',
    'The Blue Grass Boys': 'American music|bluegrass|country music|Bill Monroe',
    'Modern Mandolin Quartet': 'American music|chamber music|mandolin music|instrumental music',
    'Hot Rize': 'American music|bluegrass|progressive bluegrass|acoustic music'
};

const instrumentTagLines = {
    Guitar: 'guitar|guitarists|electric guitar|rock guitar',
    Drums: 'drums|drummers|percussion|drum kit|rhythm section',
    Bass: 'bass|bass guitar|bassists|rhythm section',
    Keyboards: 'keyboards|keyboard players|organ|piano|synthesisers',
    Saxophone: 'saxophone|saxophonists|woodwind instruments|jazz saxophone',
    Violin: 'violin|violinists|fiddle|string instruments',
    Trumpet: 'trumpet|trumpeters|brass instruments|jazz trumpet',
    Harmonica: 'harmonica|harmonica players|mouth organ|blues harmonica',
    Percussion: 'percussion|percussionists|hand percussion|rhythm section',
    Mandolin: 'mandolin|mandolin players|plucked strings|acoustic instruments'
};

const splitTags = value => value.split('|');

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

        if (!groupTagLines[group] || !instrumentTagLines[instrument]) {
            throw new Error(`Pack 153: missing specialist tags for ${name}.`);
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
            tags: [...new Set([
                'Musicians & Instruments',
                instrument,
                askInstrument
                    ? 'Instrument recognition'
                    : askGroup
                        ? 'Bands'
                        : 'Musicians',
                'Music', 'music trivia', 'band members',
                'instrument trivia', 'instrument players',
                askInstrument ? 'instrument identification' :
                    askGroup ? 'group identification' : 'musician identification',
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
        item.tags.length < 13 ||
        new Set(item.tags).size !== item.tags.length
    ) {
        throw new Error(
            `Pack 153: invalid question ${item.id}.`
        );
    }

    seenIds.add(item.id);
    seenQuestions.add(wording);
}

module.exports = questions;
