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

// Specialist genre and scene tags for the groups in this pack.
// Each question also gets the musician and their group's name as tags.
const groupTagLines = {
    "Queen": "UK music|British rock|classic rock|glam rock|Freddie Mercury",
    "Led Zeppelin": "UK music|hard rock|blues rock|classic rock|British rock",
    "Pink Floyd": "UK music|progressive rock|psychedelic rock|classic rock",
    "Deep Purple": "UK music|hard rock|heavy metal|classic rock",
    "Black Sabbath": "UK music|heavy metal|hard rock|Birmingham music",
    "AC/DC": "Australian music|hard rock|classic rock|rock bands",
    "The Rolling Stones": "UK music|British rock|blues rock|classic rock",
    "The Beatles": "UK music|Liverpool music|British Invasion|classic rock|pop rock",
    "The Who": "UK music|British rock|mod music|classic rock",
    "Dire Straits": "UK music|roots rock|classic rock|rock bands",
    "The Police": "UK music|new wave|reggae rock|rock bands",
    "The Smiths": "UK music|Manchester music|indie rock|alternative rock",
    "Red Hot Chili Peppers": "American music|funk rock|alternative rock|California music",
    "Guns N' Roses": "American music|hard rock|Los Angeles music|classic rock",
    "Metallica": "American music|thrash metal|heavy metal|hard rock",
    "Foo Fighters": "American music|alternative rock|post-grunge|Dave Grohl",
    "Oasis": "UK music|Manchester music|Britpop|alternative rock",
    "U2": "Irish music|rock music|alternative rock|Bono",
    "Fleetwood Mac": "British-American music|soft rock|classic rock|pop rock",
    "R.E.M.": "American music|alternative rock|college rock|indie rock",
    "The Cure": "UK music|post-punk|gothic rock|alternative rock",
    "Suede": "UK music|Britpop|alternative rock|indie rock",
    "Radiohead": "UK music|alternative rock|art rock|experimental rock",
    "The Clash": "UK music|punk rock|British punk|post-punk",
    "Cheap Trick": "American music|power pop|hard rock|classic rock",
    "Rush": "Canadian music|progressive rock|hard rock|rock bands",
    "Genesis": "UK music|progressive rock|pop rock|classic rock",
    "Nirvana": "American music|Seattle music|grunge|alternative rock",
    "Blink-182": "American music|pop punk|punk rock|California music",
    "Muse": "UK music|alternative rock|progressive rock|rock bands",
    "Arctic Monkeys": "UK music|Sheffield music|indie rock|alternative rock",
    "The White Stripes": "American music|Detroit music|garage rock revival|blues rock",
    "Green Day": "American music|punk rock|pop punk|alternative rock",
    "Blur": "UK music|Britpop|alternative rock|British bands",
    "Joy Division": "UK music|Manchester music|post-punk|alternative rock",
    "Iron Maiden": "UK music|heavy metal|New Wave of British Heavy Metal|hard rock",
    "Pixies": "American music|alternative rock|indie rock|Boston music",
    "Yes": "UK music|progressive rock|art rock|classic rock",
    "The Doors": "American music|psychedelic rock|classic rock|Los Angeles music",
    "Duran Duran": "UK music|new romantic|new wave|synth-pop|Birmingham music",
    "Depeche Mode": "UK music|synth-pop|new wave|electronic music|Basildon music",
    "The Stranglers": "UK music|punk rock|new wave|post-punk",
    "Squeeze": "UK music|new wave|pop rock|British pop",
    "Elvis Costello and the Attractions": "UK music|new wave|pub rock|British rock",
    "The Zombies": "UK music|British Invasion|psychedelic pop|1960s music",
    "Emerson, Lake & Palmer": "UK music|progressive rock|symphonic rock|1970s rock",
    "Dream Theater": "American music|progressive metal|progressive rock|heavy metal",
    "Tom Petty and the Heartbreakers": "American music|heartland rock|roots rock|classic rock",
    "Small Faces": "UK music|mod music|psychedelic rock|1960s music",
    "Bon Jovi": "American music|hard rock|arena rock|glam metal",
    "INXS": "Australian music|new wave|rock music|pop rock",
    "Pet Shop Boys": "UK music|synth-pop|electronic music|dance-pop",
    "Nightwish": "Finnish music|symphonic metal|heavy metal|power metal",
    "Madness": "UK music|ska revival|2 Tone|British pop|Camden music",
    "Roxy Music": "UK music|glam rock|art rock|new wave",
    "UB40": "UK music|Birmingham music|reggae|reggae pop",
    "Spandau Ballet": "UK music|new romantic|sophisti-pop|new wave",
    "The E Street Band": "American music|heartland rock|Bruce Springsteen|rock bands",
    "Fairport Convention": "UK music|British folk rock|folk music|traditional music",
    "The Charlie Daniels Band": "American music|southern rock|country rock|country music",
    "Dave Matthews Band": "American music|jam bands|alternative rock|folk rock",
    "Dirty Three": "Australian music|post-rock|instrumental rock|experimental rock",
    "Mahavishnu Orchestra": "jazz fusion|progressive rock|instrumental music|jazz rock",
    "Louis Armstrong and His Hot Five": "American music|jazz music|New Orleans jazz|early jazz|1920s music",
    "Dizzy Gillespie All-Stars": "American music|bebop|jazz music|jazz ensembles",
    "The Miles Davis Quintet": "American music|jazz music|hard bop|jazz ensembles",
    "Herb Alpert & the Tijuana Brass": "American music|instrumental pop|easy listening|jazz pop|brass bands",
    "The Jazz Epistles": "South African music|jazz music|South African jazz|jazz ensembles"
};

const instrumentTagLines = {
    Guitar: "guitar|guitarists|electric guitar|rock guitar",
    Drums: "drums|drummers|percussion|drum kit",
    Bass: "bass|bass guitar|bassists|rhythm section",
    Keyboards: "keyboards|keyboardists|piano|organ|synthesizers",
    Saxophone: "saxophone|saxophonists|woodwind instruments|horn section",
    Violin: "violin|violinists|fiddle|string instruments",
    Trumpet: "trumpet|trumpeters|brass instruments|jazz musicians"
};

const splitTags = line => line ? line.split('|') : [];

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

        if (!groupTagLines[band] || !instrumentTagLines[instrument]) {
            throw new Error('Missing specialist tags: ' + musician);
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

        const tags = [...new Set([
            'Musicians & Instruments',
            instrument,
            askForBand ? 'Bands' : 'Musicians',
            'Music', 'music trivia', 'band members',
            'instrument trivia', 'instrument players',
            askForBand ? 'group identification' : 'musician identification',
            musician, band,
            ...splitTags(instrumentTagLines[instrument]),
            ...splitTags(groupTagLines[band])
        ])];

        questions.push({
            id: 'music_' + (12901 + questionIndex),
            category: 'Music',
            question,
            answers,
            correctAnswer,
            difficulty,
            tags,
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
        !Array.isArray(question.tags) ||
        question.tags.length < 13 ||
        new Set(question.tags).size !== question.tags.length
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
