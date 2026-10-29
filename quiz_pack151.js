// quiz_pack151.js
// PuzzlePilot - The Bigggggg Quiz
// Music: Musicians & Instruments - Pack 151
// 100 questions: music_13101 to music_13200.
// Tagging audit: original questions, answers, IDs and difficulty preserved.
// Covers instruments, musicians and groups.
// Do not connect in quiz_bank.js until the batch is complete.

// Each fact: [musician, group, difficulty]
const musicianFacts = {
    Guitar: [
        ['Gary Rossington', 'Lynyrd Skynyrd', 'Medium'],
        ['Nancy Wilson', 'Heart', 'Easy'],
        ['Stephen Stills', 'Crosby, Stills & Nash', 'Medium'],
        ['Mick Ronson', 'The Spiders from Mars', 'Medium'],
        ['Robert Fripp', 'King Crimson', 'Medium'],
        ['David Byrne', 'Talking Heads', 'Medium'],
        ['Rivers Cuomo', 'Weezer', 'Medium'],
        ['Tom DeLonge', 'Blink-182', 'Easy'],
        ['Dimebag Darrell', 'Pantera', 'Medium'],
        ['Zakk Wylde', 'Black Label Society', 'Medium'],
        ['Robin Trower', 'Procol Harum', 'Hard'],
        ['Steve Lukather', 'Toto', 'Medium'],
        ['Kim Thayil', 'Soundgarden', 'Medium'],
        ['Jerry Cantrell', 'Alice in Chains', 'Medium'],
        ['Adam Jones', 'Tool', 'Hard'],
        ['Billy Gibbons', 'ZZ Top', 'Easy'],
        ['Robin Guthrie', 'Cocteau Twins', 'Hard'],
        ['Mike Campbell', 'Tom Petty and the Heartbreakers', 'Medium'],
        ['Django Reinhardt', 'Quintette du Hot Club de France', 'Medium'],
        ['Johnny Ramone', 'Ramones', 'Easy']
    ],
    Drums: [
        ['Brad Wilk', 'Rage Against the Machine', 'Medium'],
        ['Josh Dun', 'Twenty One Pilots', 'Medium'],
        ['Chris Adler', 'Lamb of God', 'Hard'],
        ['Matt Cameron', 'Soundgarden', 'Medium'],
        ['Sean Kinney', 'Alice in Chains', 'Hard'],
        ['Danny Carey', 'Tool', 'Medium'],
        ['Bill Berry', 'R.E.M.', 'Medium'],
        ['Nicko McBrain', 'Iron Maiden', 'Medium'],
        ['Frank Beard', 'ZZ Top', 'Medium'],
        ['Phil Rudd', 'AC/DC', 'Medium'],
        ['Peter Criss', 'Kiss', 'Easy'],
        ['Andy Hurley', 'Fall Out Boy', 'Medium'],
        ['Zac Farro', 'Paramore', 'Medium'],
        ['Nick Hodgson', 'Kaiser Chiefs', 'Hard'],
        ['Paul Cook', 'Sex Pistols', 'Medium'],
        ['Topper Headon', 'The Clash', 'Medium'],
        ['Budgie', 'Siouxsie and the Banshees', 'Hard'],
        ['Questlove', 'The Roots', 'Medium'],
        ['Max Weinberg', 'The E Street Band', 'Medium'],
        ['Tony Allen', "Africa '70", 'Hard']
    ],
    Bass: [
        ['Jaco Pastorius', 'Weather Report', 'Medium'],
        ['Bootsy Collins', 'Parliament-Funkadelic', 'Medium'],
        ['Bernard Edwards', 'Chic', 'Medium'],
        ['James Jamerson', 'The Funk Brothers', 'Medium'],
        ['Carol Kaye', 'The Wrecking Crew', 'Hard'],
        ['Paul Gray', 'Slipknot', 'Medium'],
        ['Robert Trujillo', 'Suicidal Tendencies', 'Medium'],
        ['Nate Mendel', 'Sunny Day Real Estate', 'Hard'],
        ['Jeff Ament', 'Pearl Jam', 'Medium'],
        ['Mike Inez', 'Alice in Chains', 'Hard'],
        ['Robert DeLeo', 'Stone Temple Pilots', 'Medium'],
        ["D'Arcy Wretzky", 'The Smashing Pumpkins', 'Hard'],
        ['Melissa Auf der Maur', 'Hole', 'Medium'],
        ['Simon Gallup', 'The Cure', 'Medium'],
        ['Tony Kanal', 'No Doubt', 'Medium'],
        ['Mark Hoppus', 'Blink-182', 'Easy'],
        ['Jared Followill', 'Kings of Leon', 'Hard'],
        ['Michael Anthony', 'Van Halen', 'Medium'],
        ['John Illsley', 'Dire Straits', 'Medium'],
        ['Stuart Zender', 'Jamiroquai', 'Hard']
    ],
    Keyboards: [
        ['Jonathan Cain', 'Journey', 'Medium'],
        ['David Paich', 'Toto', 'Medium'],
        ['Gregg Allman', 'The Allman Brothers Band', 'Medium'],
        ['Brian Eno', 'Roxy Music', 'Medium'],
        ['Mick MacNeil', 'Simple Minds', 'Medium'],
        ['Paul Humphreys', 'Orchestral Manoeuvres in the Dark', 'Medium'],
        ['Mike Lindup', 'Level 42', 'Hard'],
        ['Ryuichi Sakamoto', 'Yellow Magic Orchestra', 'Medium'],
        ['Manfred Mann', "Manfred Mann's Earth Band", 'Medium'],
        ['Robert Lamm', 'Chicago', 'Hard'],
        ['Mick Talbot', 'The Style Council', 'Medium'],
        ['Ian Stanley', 'Tears for Fears', 'Hard'],
        ['Ben Folds', 'Ben Folds Five', 'Medium'],
        ['Don Airey', 'Rainbow', 'Hard'],
        ['Matt Johnson', 'Jamiroquai', 'Hard']
    ],
    Saxophone: [
        ['Maceo Parker', "The J.B.'s", 'Medium'],
        ['John Coltrane', 'The Miles Davis Quintet', 'Easy'],
        ['Kenny G', 'Jeff Lorber Fusion', 'Medium'],
        ['Candy Dulfer', 'The New Power Generation', 'Hard'],
        ['Michael Brecker', 'The Brecker Brothers', 'Medium']
    ],
    Violin: [
        ['Máiréad Nesbitt', 'Celtic Woman', 'Medium'],
        ['Eileen Ivers', 'Cherish the Ladies', 'Hard'],
        ['Sean Mackin', 'Yellowcard', 'Medium'],
        ['Sophie Trudeau', 'Godspeed You! Black Emperor', 'Hard'],
        ['Eliza Carthy', 'Waterson:Carthy', 'Hard']
    ],
    Trumpet: [
        ['Freddie Hubbard', "Art Blakey's Jazz Messengers", 'Hard'],
        ['Don Cherry', 'Ornette Coleman Quartet', 'Hard'],
        ['Kermit Ruffins', 'Rebirth Brass Band', 'Hard'],
        ['Fats Navarro', 'Tadd Dameron Sextet', 'Hard'],
        ['Tom Harrell', 'Phil Woods Quintet', 'Hard']
    ],
    Harmonica: [
        ['Little Walter', "Muddy Waters' band", 'Medium'],
        ['Mickey Raphael', "Willie Nelson's Family band", 'Hard'],
        ['James Cotton', 'James Cotton Blues Band', 'Medium'],
        ['Kim Wilson', 'The Fabulous Thunderbirds', 'Medium'],
        ['Howard Levy', 'Béla Fleck and the Flecktones', 'Hard']
    ],
    Flute: [
        ['Ian Anderson', 'Jethro Tull', 'Easy'],
        ['Ray Thomas', 'The Moody Blues', 'Medium'],
        ['Thijs van Leer', 'Focus', 'Medium'],
        ['Chris Wood', 'Traffic', 'Hard'],
        ['Hubert Laws', 'New York Jazz Quartet', 'Hard']
    ]
};

// Specialist group, scene and genre tags.
// Genres belong to the named group, so they do not leak across questions.
const groupTagLines = {
    'Lynyrd Skynyrd': 'American music|southern rock|classic rock|blues rock',
    'Heart': 'American music|Canadian music|hard rock|classic rock|female rock musicians',
    'Crosby, Stills & Nash': 'American music|folk rock|soft rock|vocal harmonies',
    'The Spiders from Mars': 'UK music|glam rock|David Bowie|1970s rock',
    'King Crimson': 'UK music|progressive rock|art rock|jazz rock',
    'Talking Heads': 'American music|new wave|art rock|post-punk',
    'Weezer': 'American music|alternative rock|power pop|pop rock',
    'Blink-182': 'American music|pop punk|punk rock|California music',
    'Pantera': 'American music|groove metal|heavy metal|Texas music',
    'Black Label Society': 'American music|heavy metal|southern metal|hard rock',
    'Procol Harum': 'UK music|progressive rock|psychedelic rock|classic rock',
    'Toto': 'American music|soft rock|pop rock|session musicians',
    'Soundgarden': 'American music|Seattle music|grunge|alternative rock',
    'Alice in Chains': 'American music|Seattle music|grunge|alternative metal',
    'Tool': 'American music|progressive metal|alternative metal|art rock',
    'ZZ Top': 'American music|Texas music|blues rock|southern rock',
    'Cocteau Twins': 'Scottish music|UK music|dream pop|ethereal wave',
    'Tom Petty and the Heartbreakers': 'American music|heartland rock|roots rock|classic rock',
    'Quintette du Hot Club de France': 'French music|gypsy jazz|jazz guitar|swing music',
    'Ramones': 'American music|New York music|punk rock|early punk',
    'Rage Against the Machine': 'American music|rap metal|alternative metal|political rock',
    'Twenty One Pilots': 'American music|alternative rock|electropop|rap rock',
    'Lamb of God': 'American music|groove metal|heavy metal|metal bands',
    'R.E.M.': 'American music|alternative rock|college rock|indie rock',
    'Iron Maiden': 'UK music|heavy metal|New Wave of British Heavy Metal|British metal',
    'AC/DC': 'Australian music|hard rock|classic rock|rock bands',
    'Kiss': 'American music|hard rock|glam rock|classic rock',
    'Fall Out Boy': 'American music|pop punk|emo pop|alternative rock',
    'Paramore': 'American music|pop punk|alternative rock|pop rock',
    'Kaiser Chiefs': 'UK music|Leeds music|indie rock|post-punk revival',
    'Sex Pistols': 'UK music|British punk|punk rock|1970s music',
    'The Clash': 'UK music|British punk|punk rock|post-punk',
    'Siouxsie and the Banshees': 'UK music|post-punk|gothic rock|new wave',
    'The Roots': 'American music|Philadelphia music|hip-hop|live hip-hop',
    'The E Street Band': 'American music|heartland rock|Bruce Springsteen|rock bands',
    "Africa '70": 'Nigerian music|Afrobeat|funk|Fela Kuti|African music',
    'Weather Report': 'American music|jazz fusion|jazz rock|instrumental music',
    'Parliament-Funkadelic': 'American music|P-Funk|funk|soul music|George Clinton',
    'Chic': 'American music|disco|funk|dance music|Nile Rodgers',
    'The Funk Brothers': 'American music|Motown|session musicians|soul music',
    'The Wrecking Crew': 'American music|Los Angeles music|session musicians|pop recordings',
    'Slipknot': 'American music|nu metal|heavy metal|alternative metal',
    'Suicidal Tendencies': 'American music|crossover thrash|hardcore punk|thrash metal',
    'Sunny Day Real Estate': 'American music|emo|alternative rock|Seattle music',
    'Pearl Jam': 'American music|Seattle music|grunge|alternative rock',
    'Stone Temple Pilots': 'American music|alternative rock|grunge|hard rock',
    'The Smashing Pumpkins': 'American music|Chicago music|alternative rock|grunge era',
    'Hole': 'American music|alternative rock|grunge|Courtney Love',
    'The Cure': 'UK music|post-punk|gothic rock|alternative rock',
    'No Doubt': 'American music|ska punk|new wave|pop rock',
    'Kings of Leon': 'American music|southern rock|alternative rock|indie rock',
    'Van Halen': 'American music|hard rock|arena rock|classic rock',
    'Dire Straits': 'UK music|roots rock|classic rock|Mark Knopfler',
    'Jamiroquai': 'UK music|acid jazz|jazz-funk|dance music',
    'Journey': 'American music|arena rock|hard rock|classic rock',
    'The Allman Brothers Band': 'American music|southern rock|blues rock|jam bands',
    'Roxy Music': 'UK music|glam rock|art rock|new wave|Bryan Ferry',
    'Simple Minds': 'Scottish music|UK music|new wave|alternative rock',
    'Orchestral Manoeuvres in the Dark': 'UK music|synth-pop|new wave|electronic music|OMD',
    'Level 42': 'UK music|jazz-funk|pop rock|1980s music',
    'Yellow Magic Orchestra': 'Japanese music|electronic music|synth-pop|technopop',
    "Manfred Mann's Earth Band": 'UK music|progressive rock|classic rock|1970s music',
    'Chicago': 'American music|jazz rock|soft rock|horn bands',
    'The Style Council': 'UK music|sophisti-pop|new wave|Paul Weller',
    'Tears for Fears': 'UK music|new wave|synth-pop|pop rock',
    'Ben Folds Five': 'American music|piano rock|alternative rock|pop rock',
    'Rainbow': 'UK music|hard rock|heavy metal|Ritchie Blackmore',
    "The J.B.'s": 'American music|funk|James Brown|rhythm and blues',
    'The Miles Davis Quintet': 'American music|jazz music|hard bop|modal jazz|jazz ensembles',
    'Jeff Lorber Fusion': 'American music|jazz fusion|smooth jazz|jazz keyboards',
    'The New Power Generation': 'American music|Prince|funk|rhythm and blues',
    'The Brecker Brothers': 'American music|jazz fusion|jazz funk|instrumental music',
    'Celtic Woman': 'Irish music|Celtic music|classical crossover|vocal ensemble',
    'Cherish the Ladies': 'Irish-American music|Irish folk|Celtic music|traditional fiddle',
    'Yellowcard': 'American music|pop punk|alternative rock|violin rock',
    'Godspeed You! Black Emperor': 'Canadian music|post-rock|instrumental rock|experimental rock',
    'Waterson:Carthy': 'UK music|British folk|traditional folk|folk revival',
    "Art Blakey's Jazz Messengers": 'American music|hard bop|jazz music|bebop',
    'Ornette Coleman Quartet': 'American music|free jazz|avant-garde jazz|jazz ensembles',
    'Rebirth Brass Band': 'American music|New Orleans music|brass band|jazz funk',
    'Tadd Dameron Sextet': 'American music|bebop|jazz music|1940s jazz',
    'Phil Woods Quintet': 'American music|jazz music|post-bop|jazz ensembles',
    "Muddy Waters' band": 'American music|Chicago blues|electric blues|blues bands',
    "Willie Nelson's Family band": 'American music|country music|outlaw country|Willie Nelson',
    'James Cotton Blues Band': 'American music|Chicago blues|electric blues|blues harmonica',
    'The Fabulous Thunderbirds': 'American music|Texas blues|blues rock|rhythm and blues',
    'Béla Fleck and the Flecktones': 'American music|bluegrass fusion|jazz fusion|instrumental music',
    'Jethro Tull': 'UK music|progressive rock|folk rock|classic rock',
    'The Moody Blues': 'UK music|progressive rock|psychedelic rock|classic rock',
    'Focus': 'Dutch music|progressive rock|instrumental rock|1970s rock',
    'Traffic': 'UK music|psychedelic rock|jazz rock|classic rock',
    'New York Jazz Quartet': 'American music|jazz music|post-bop|jazz ensembles'
};

const instrumentTagLines = {
    Guitar: 'guitar|guitarists|electric guitar|rock guitar',
    Drums: 'drums|drummers|percussion|drum kit|rhythm section',
    Bass: 'bass|bass guitar|bassists|rhythm section',
    Keyboards: 'keyboards|keyboardists|piano|organ|synthesisers',
    Saxophone: 'saxophone|saxophonists|woodwind instruments|horn section',
    Violin: 'violin|violinists|fiddle|string instruments',
    Trumpet: 'trumpet|trumpeters|brass instruments|jazz musicians',
    Harmonica: 'harmonica|harmonica players|mouth organ|blues instruments',
    Flute: 'flute|flautists|woodwind instruments|jazz flute'
};

const splitTags = value => value.split('|');

const expectedCounts = {
    Guitar: 20,
    Drums: 20,
    Bass: 20,
    Keyboards: 15,
    Saxophone: 5,
    Violin: 5,
    Trumpet: 5,
    Harmonica: 5,
    Flute: 5
};

const instrumentNames = {
    Guitar: 'guitar',
    Drums: 'drums',
    Bass: 'bass guitar',
    Keyboards: 'keyboards',
    Saxophone: 'saxophone',
    Violin: 'violin',
    Trumpet: 'trumpet',
    Harmonica: 'harmonica',
    Flute: 'flute'
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
    Flute: 'flautist'
};

function normalise(value) {
    return String(value).trim().toLowerCase().replace(/\s+/g, ' ');
}

// Instrument questions are limited to musicians
// strongly associated with their listed instrument.
const instrumentQuestionIndexes = {
    Guitar: [0, 4, 8, 12, 16],
    Drums: [0, 4, 8, 12, 16],
    Bass: [0, 8, 12, 16],
    Keyboards: [0, 5, 7, 10],
    Saxophone: [0],
    Violin: [0],
    Trumpet: [0],
    Harmonica: [0],
    Flute: [0]
};

const allInstruments = Object.values(instrumentNames);
const featured = new Set();

// ─────────────────────────────────────────────
// VALIDATE SOURCE FACTS
// ─────────────────────────────────────────────

for (const [instrument, count] of Object.entries(expectedCounts)) {
    const entries = musicianFacts[instrument];

    if (!Array.isArray(entries) || entries.length !== count) {
        throw new Error(
            'Pack 151 incorrect ' + instrument + ' count.'
        );
    }

    const groups = new Set();

    for (const [musician, group, difficulty] of entries) {
        if (
            typeof musician !== 'string' ||
            !musician.trim() ||
            typeof group !== 'string' ||
            !group.trim() ||
            !['Easy', 'Medium', 'Hard'].includes(difficulty)
        ) {
            throw new Error(
                'Pack 151 invalid source fact: ' + musician
            );
        }

        if (featured.has(normalise(musician))) {
            throw new Error(
                'Pack 151 repeated musician: ' + musician
            );
        }

        if (groups.has(normalise(group))) {
            throw new Error(
                'Pack 151 repeated ' + instrument +
                ' group: ' + group
            );
        }

        if (!groupTagLines[group] || !instrumentTagLines[instrument]) {
            throw new Error('Pack 151 missing specialist tags: ' + musician);
        }

        featured.add(normalise(musician));
        groups.add(normalise(group));
    }
}

// ─────────────────────────────────────────────
// ANSWER HELPERS
// ─────────────────────────────────────────────

function pickWrongAnswers(pool, correct, seed) {
    const candidates = [];

    for (const answer of pool) {
        if (
            normalise(answer) !== normalise(correct) &&
            !candidates.some(
                value => normalise(value) === normalise(answer)
            )
        ) {
            candidates.push(answer);
        }
    }

    if (candidates.length < 3) {
        throw new Error(
            'Pack 151 lacks alternatives for: ' + correct
        );
    }

    const chosen = [];
    let position = seed % candidates.length;

    while (chosen.length < 3) {
        const candidate = candidates[position];

        if (!chosen.includes(candidate)) {
            chosen.push(candidate);
        }

        position = (position + 1) % candidates.length;
    }

    return chosen;
}

// ─────────────────────────────────────────────
// BUILD QUESTIONS
// ─────────────────────────────────────────────

const questions = [];

for (const [instrument, entries] of Object.entries(musicianFacts)) {
    for (let index = 0; index < entries.length; index++) {
        const [musician, group, difficulty] = entries[index];
        const position = questions.length;

        const askInstrument =
            instrumentQuestionIndexes[instrument].includes(index);

        const askGroup =
            !askInstrument && index % 3 === 1;

        const question = askInstrument
            ? `Which instrument was ${musician} best known for playing in ${group}?`
            : askGroup
                ? `Which group featured ${musician} as a ${roles[instrument]}?`
                : `Who played ${instrumentNames[instrument]} in ${group}?`;

        const correctAnswer = askInstrument
            ? instrumentNames[instrument]
            : askGroup
                ? group
                : musician;

        const pool = askInstrument
            ? allInstruments
            : entries.map(
                fact => fact[askGroup ? 1 : 0]
            );

        const answers = pickWrongAnswers(
            pool,
            correctAnswer,
            position * 7 + 3
        );

        answers.splice(
            position % 4,
            0,
            correctAnswer
        );

        questions.push({
            id: 'music_' + (13101 + position),
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

if (questions.length !== 100) {
    throw new Error(
        'Pack 151 must have 100 questions, found ' +
        questions.length
    );
}

const ids = new Set();
const wordings = new Set();

for (const question of questions) {
    const wording = normalise(question.question);

    if (
        ids.has(question.id) ||
        !wording ||
        wordings.has(wording)
    ) {
        throw new Error(
            'Pack 151 repeated ID or wording: ' +
            question.id
        );
    }

    ids.add(question.id);
    wordings.add(wording);

    if (
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
            'Pack 151 invalid question: ' +
            question.id
        );
    }
}

if (
    questions[0].id !== 'music_13101' ||
    questions[99].id !== 'music_13200'
) {
    throw new Error(
        'Pack 151 ID range incorrect.'
    );
}

module.exports = questions;
