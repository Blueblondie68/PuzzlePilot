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

// Specialist tagging for musical groups, genres and scenes.
// All original musician facts and quiz mechanics remain unchanged.
const groupTagLines = {
    'Fairport Convention': 'UK music|British folk rock|folk rock|traditional folk',
    'Jethro Tull': 'UK music|progressive rock|folk rock|classic rock',
    'The Rolling Stones': 'UK music|British rock|blues rock|classic rock',
    'Faces': 'UK music|British rock|blues rock|classic rock',
    'Free': 'UK music|blues rock|hard rock|classic rock',
    'Uriah Heep': 'UK music|progressive rock|hard rock|classic rock',
    'Status Quo': 'UK music|boogie rock|classic rock|British rock',
    'The Kinks': 'UK music|British Invasion|British rock|1960s music',
    'Sex Pistols': 'UK music|British punk|punk rock|1970s music',
    'Siouxsie and the Banshees': 'UK music|post-punk|gothic rock|new wave',
    'Echo & the Bunnymen': 'UK music|Liverpool music|post-punk|alternative rock',
    'Gang of Four': 'UK music|post-punk|dance-punk|Leeds music',
    'Radiohead': 'UK music|alternative rock|art rock|experimental rock',
    'The Hollies': 'UK music|British Invasion|pop rock|1960s music',
    'The Jam': 'UK music|mod revival|punk rock|new wave',
    'Biffy Clyro': 'Scottish music|UK music|alternative rock|post-hardcore',
    'Arctic Monkeys': 'UK music|Sheffield music|indie rock|alternative rock',
    'Kasabian': 'UK music|indie rock|alternative rock|Leicester music',
    'The Strokes': 'American music|New York music|garage rock revival|indie rock',
    'Grateful Dead': 'American music|psychedelic rock|jam bands|classic rock',
    'The Doors': 'American music|psychedelic rock|classic rock|Los Angeles music',
    'Yes': 'UK music|progressive rock|art rock|classic rock',
    'New Order': 'UK music|Manchester music|new wave|synth-pop',
    'Blur': 'UK music|Britpop|alternative rock|Damon Albarn',
    'Oasis': 'UK music|Manchester music|Britpop|alternative rock',
    'The Who': 'UK music|British rock|mod music|classic rock',
    'Phish': 'American music|jam bands|psychedelic rock|progressive rock',
    'Thin Lizzy': 'Irish music|hard rock|classic rock|rock bands',
    'Electric Light Orchestra': 'UK music|symphonic rock|pop rock|classic rock',
    'Aerosmith': 'American music|hard rock|blues rock|classic rock',
    'Queens of the Stone Age': 'American music|stoner rock|alternative rock|hard rock',
    'Linkin Park': 'American music|nu metal|alternative rock|rap rock',
    'Traveling Wilburys': 'British-American music|supergroups|rock music|classic rock',
    'Small Faces': 'UK music|mod music|psychedelic rock|1960s music',
    'The Spiders from Mars': 'UK music|glam rock|David Bowie|1970s rock',
    'Genesis': 'UK music|progressive rock|pop rock|classic rock',
    'The Buggles': 'UK music|new wave|synth-pop|1970s music',
    'King Crimson': 'UK music|progressive rock|art rock|jazz rock',
    'Def Leppard': 'UK music|hard rock|glam metal|Sheffield music',
    'Emerson, Lake & Palmer': 'UK music|progressive rock|symphonic rock|1970s rock',
    'Ramones': 'American music|New York music|punk rock|early punk',
    'Metallica': 'American music|heavy metal|thrash metal|hard rock',
    'Manowar': 'American music|heavy metal|power metal|rock bands',
    'Silversun Pickups': 'American music|alternative rock|indie rock|Los Angeles music',
    'Måneskin': 'Italian music|glam rock|hard rock|alternative rock',
    'Khruangbin': 'American music|psychedelic rock|funk|instrumental music',
    'Parliament-Funkadelic': 'American music|P-Funk|funk|George Clinton',
    "Art Blakey's Jazz Messengers": 'American music|hard bop|bebop|jazz ensembles',
    'Styx': 'American music|progressive rock|arena rock|classic rock',
    'The Band': 'Canadian-American music|roots rock|Americana|classic rock',
    'Depeche Mode': 'UK music|synth-pop|electronic music|new wave',
    'Barenaked Ladies': 'Canadian music|alternative rock|pop rock|rock bands',
    'Bring Me the Horizon': 'UK music|metalcore|alternative metal|Sheffield music',
    'Ace': 'UK music|soft rock|pub rock|1970s music',
    'The Hooters': 'American music|pop rock|new wave|Philadelphia music',
    'Procol Harum': 'UK music|progressive rock|psychedelic rock|classic rock',
    'Blondie': 'American music|new wave|punk rock|New York music',
    'Dave Brubeck Quartet': 'American music|cool jazz|West Coast jazz|jazz quartets',
    'Earth, Wind & Fire': 'American music|funk|soul music|R&B',
    'The Silver Bullet Band': 'American music|heartland rock|Bob Seger|classic rock',
    'The Paul Butterfield Blues Band': 'American music|Chicago blues|blues rock|1960s music',
    'The Wrecking Crew': 'American music|Los Angeles music|session musicians|pop recordings',
    'Supertramp': 'UK music|progressive rock|art rock|pop rock',
    'Jazz Warriors': 'UK music|British jazz|jazz ensembles|1980s jazz',
    "John Mellencamp's band": 'American music|heartland rock|John Mellencamp|rock bands',
    'Nickel Creek': 'American music|progressive bluegrass|folk music|acoustic music',
    'Squirrel Nut Zippers': 'American music|swing revival|jazz music|alternative rock',
    'The Highwomen': 'American music|country music|Americana|female country musicians',
    'of Montreal': 'American music|indie pop|psychedelic pop|experimental pop',
    'The David Grisman Quintet': 'American music|new acoustic music|bluegrass|instrumental music',
    'The RH Factor': 'American music|jazz-funk|neo-soul|jazz fusion',
    'The E-Collective': 'American music|jazz music|jazz fusion|modern jazz',
    'Masada Quartet': 'American music|avant-garde jazz|jazz ensembles|John Zorn',
    'SFJAZZ Collective': 'American music|modern jazz|jazz ensembles|San Francisco jazz',
    'Thad Jones/Mel Lewis Orchestra': 'American music|big band|jazz orchestras|jazz music',
    'Sonny Terry and Brownie McGhee': 'American music|Piedmont blues|folk blues|acoustic blues',
    'Buddy Guy and Junior Wells': 'American music|Chicago blues|electric blues|blues musicians',
    'The South Side Band': 'American music|Chicago blues|electric blues|blues bands',
    'Sons of Blues': 'American music|Chicago blues|electric blues|blues harmonica',
    'New Blood': 'American music|blues rock|blues harmonica|electric blues',
    'The Mothers of Invention': 'American music|experimental rock|psychedelic rock|Frank Zappa',
    'Return to Forever': 'American music|jazz fusion|progressive jazz|Chick Corea',
    'Shakti': 'Indian music|Indian classical music|jazz fusion|world music',
    "Elton John's touring band": 'UK music|pop rock|classic rock|Elton John',
    'Weather Report': 'American music|jazz fusion|jazz rock|instrumental music',
    'Béla Fleck and the Flecktones': 'American music|bluegrass fusion|jazz fusion|instrumental music',
    'Flatt and Scruggs': 'American music|bluegrass|country music|folk music',
    'The Weavers': 'American music|folk revival|folk music|traditional songs',
    'Nitty Gritty Dirt Band': 'American music|country rock|bluegrass|folk rock',
    'Mumford & Sons': 'UK music|folk rock|indie folk|alternative rock',
    'Flook': 'Irish folk|Celtic music|contemporary folk|instrumental music',
    'The Chieftains': 'Irish music|traditional Irish music|Celtic music|folk music',
    'The Satyrs': 'American music|jazz rock|psychedelic rock|1960s music',
    'Paco de Lucía Sextet': 'Spanish music|flamenco jazz|flamenco|jazz fusion',
};

// Instrument-specific tags for specialist quiz selection.
const instrumentTagLines = {
    Guitar: 'guitar|guitarists|electric guitar|rock guitar',
    Drums: 'drums|drummers|percussion|drum kit|rhythm section',
    Bass: 'bass|bass guitar|bassists|rhythm section',
    Keyboards: 'keyboards|keyboard players|keyboard instruments|piano|synthesisers',
    Saxophone: 'saxophone|saxophonists|woodwind instruments|horn section',
    Violin: 'violin|violinists|fiddle|string instruments',
    Trumpet: 'trumpet|trumpeters|brass instruments|jazz musicians',
    Harmonica: 'harmonica|harmonica players|mouth organ|blues instruments',
    Percussion: 'percussion|percussionists|hand percussion|rhythm section',
    Banjo: 'banjo|banjo players|plucked strings|folk instruments',
    Flute: 'flute|flautists|woodwind instruments|flute players',
};

const splitTags = value => value.split('|');

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

        if (!groupTagLines[group] || !instrumentTagLines[instrument]) {
            throw new Error(`Pack 152 missing specialist tags: ${musician}`);
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
        question.tags.length < 13 ||
        new Set(question.tags).size !== question.tags.length
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
