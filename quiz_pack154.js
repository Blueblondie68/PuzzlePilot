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

// Specialist tags for the groups and musical settings in this pack.
// Each question also receives its musician, group and instrument tags.
const groupTagLines = {
    'Albert Lee & Hogan’s Heroes': 'UK music|country rock|rockabilly|roots music',
    'Fleetwood Mac': 'British-American music|blues rock|classic rock|soft rock',
    'Blodwyn Pig': 'UK music|blues rock|jazz rock|1960s music',
    'Ten Years After': 'UK music|blues rock|classic rock|British rock',
    'Taste': 'Irish music|blues rock|classic rock|Rory Gallagher',
    'Deep Purple': 'UK music|hard rock|heavy metal|classic rock',
    'Mr. Big': 'American music|hard rock|glam metal|rock bands',
    'Journey': 'American music|arena rock|classic rock|hard rock',
    'Rush': 'Canadian music|progressive rock|hard rock|classic rock',
    'Savoy Brown': 'UK music|British blues|blues rock|classic rock',
    'Elvis Presley’s TCB Band': 'American music|rock and roll|Elvis Presley|live musicians',
    'The Nashville A-Team': 'American music|country music|Nashville music|session musicians',
    'Link Wray and His Ray Men': 'American music|instrumental rock|rock and roll|1950s music',
    'The Del-Tones': 'American music|surf rock|instrumental rock|Dick Dale',
    'Chickenfoot': 'American music|hard rock|supergroups|classic rock',
    'Scorpions': 'German music|hard rock|heavy metal|arena rock',
    'Electric Sun': 'German music|hard rock|heavy metal|Uli Jon Roth',
    'Kiss': 'American music|hard rock|glam rock|classic rock',
    "Frehley's Comet": 'American music|hard rock|glam metal|Ace Frehley',
    'Creedence Clearwater Revival': 'American music|roots rock|swamp rock|classic rock',
    'Boston': 'American music|arena rock|hard rock|classic rock',
    'The Cars': 'American music|new wave|power pop|Boston music',
    'Duran Duran': 'UK music|new romantic|new wave|synth-pop',
    'Ocean Colour Scene': 'UK music|Britpop|mod revival|alternative rock',
    'Focus': 'Dutch music|progressive rock|instrumental rock|classic rock',
    'Cheap Trick': 'American music|power pop|hard rock|classic rock',
    'Devo': 'American music|new wave|art punk|post-punk',
    'The Carpenters': 'American music|soft rock|easy listening|1970s pop',
    'Derek and the Dominos': 'British-American music|blues rock|classic rock|Eric Clapton',
    'Stuff': 'American music|jazz fusion|funk|session musicians',
    'The Yardbirds': 'UK music|British Invasion|blues rock|1960s music',
    'The Dave Clark Five': 'UK music|British Invasion|beat music|1960s pop',
    'Fairport Convention': 'UK music|British folk rock|folk rock|traditional folk',
    'The Pretenders': 'UK music|new wave|rock music|Chrissie Hynde',
    'The Damned': 'UK music|British punk|gothic rock|punk rock',
    'Judas Priest': 'UK music|heavy metal|British metal|hard rock',
    'Talking Heads': 'American music|new wave|art rock|post-punk',
    'Sly and Robbie': 'Jamaican music|reggae|dub music|rhythm section',
    'Bob Marley and the Wailers': 'Jamaican music|roots reggae|reggae|Bob Marley',
    'Japan': 'UK music|new romantic|art pop|new wave',
    'Megadeth': 'American music|thrash metal|heavy metal|metal bands',
    'The Who': 'UK music|British rock|mod music|classic rock',
    'Big Country': 'Scottish music|UK music|Celtic rock|new wave',
    'Public Image Ltd': 'UK music|post-punk|experimental rock|John Lydon',
    'R.E.M.': 'American music|alternative rock|college rock|indie rock',
    'Sweet': 'UK music|glam rock|hard rock|1970s music',
    'Kajagoogoo': 'UK music|new wave|synth-pop|1980s pop',
    'Ride': 'UK music|shoegaze|alternative rock|indie rock',
    'The Blockheads': 'UK music|pub rock|new wave|Ian Dury',
    'Supertramp': 'UK music|progressive rock|soft rock|pop rock',
    'Rainbow': 'UK music|hard rock|heavy metal|Ritchie Blackmore',
    'Talk Talk': 'UK music|synth-pop|art rock|post-rock',
    'Oasis': 'UK music|Manchester music|Britpop|alternative rock',
    'Sex Pistols': 'UK music|British punk|punk rock|1970s music',
    'Cocteau Twins': 'Scottish music|UK music|dream pop|ethereal wave',
    'Electric Light Orchestra': 'UK music|symphonic rock|pop rock|classic rock',
    'Camel': 'UK music|progressive rock|Canterbury scene|classic rock',
    'Depeche Mode': 'UK music|synth-pop|electronic music|new wave',
    'Medeski Martin & Wood': 'American music|jazz-funk|jazz fusion|experimental jazz',
    'The Allman Brothers Band': 'American music|southern rock|blues rock|jam bands',
    'The Moody Blues': 'UK music|progressive rock|psychedelic rock|classic rock',
    'Jethro Tull': 'UK music|progressive rock|folk rock|classic rock',
    'David Bowie’s touring band': 'UK music|art rock|glam rock|David Bowie',
    'Toto': 'American music|soft rock|pop rock|session musicians',
    'Gong': 'UK music|progressive rock|psychedelic rock|Canterbury scene',
    'The E Street Band': 'American music|heartland rock|Bruce Springsteen|rock bands',
    'Quicksilver Messenger Service': 'American music|San Francisco music|psychedelic rock|classic rock',
    'Louis Prima’s band': 'American music|swing music|New Orleans jazz|Louis Prima',
    'James Carter Organ Trio': 'American music|jazz music|organ jazz|jazz ensembles',
    'Ornette Coleman Quartet': 'American music|free jazz|avant-garde jazz|jazz ensembles',
    'Count Basie Orchestra': 'American music|big band|swing music|jazz orchestras',
    'Charlie Parker Quintet': 'American music|bebop|jazz music|jazz ensembles',
    'Gerry Mulligan Quartet': 'American music|cool jazz|West Coast jazz|jazz quartets',
    'The Rolling Stones’ touring band': 'UK music|British rock|classic rock|The Rolling Stones',
    'Trans-Siberian Orchestra': 'American music|symphonic rock|progressive metal|rock opera',
    'Bill Frisell’s band': 'American music|jazz guitar|contemporary jazz|Bill Frisell',
    'Shakti': 'Indian music|Indian classical music|jazz fusion|world music',
    'The Kennedy Experience': 'UK music|classical crossover|Jimi Hendrix tribute|violin music',
    'The Levellers': 'UK music|folk rock|Celtic rock|alternative rock',
    'that dog.': 'American music|alternative rock|indie rock|power pop',
    'The Brecker Brothers': 'American music|jazz fusion|jazz-funk|instrumental music',
    'Tony Williams Quintet': 'American music|post-bop|jazz music|jazz ensembles',
    'Gene Krupa Orchestra': 'American music|big band|swing music|jazz orchestras',
    'Enrico Rava Quartet': 'Italian music|modern jazz|post-bop|jazz ensembles',
    'Christian Scott Quintet': 'American music|contemporary jazz|jazz ensembles|New Orleans jazz',
    'Nicholas Payton Quintet': 'American music|modern jazz|jazz ensembles|New Orleans jazz',
    'The J. Geils Band': 'American music|blues rock|classic rock|Boston music',
    'Satan and Adam': 'American music|blues music|street blues|blues harmonica',
    'The Lovin’ Spoonful': 'American music|folk rock|pop rock|1960s music',
    'The Steve Miller Band': 'American music|blues rock|classic rock|pop rock',
    'Madcat & Kane': 'American music|blues music|folk blues|blues harmonica',
    'Yusef Lateef Quartet': 'American music|jazz music|world jazz|jazz ensembles',
    'Chico Hamilton Quintet': 'American music|West Coast jazz|cool jazz|jazz ensembles',
    'Herbie Mann Afro-Jazz Sextet': 'American music|Afro-Cuban jazz|jazz flute|jazz ensembles',
    'The L.A. Four': 'American music|West Coast jazz|jazz quartets|instrumental jazz',
    'The Stanley Brothers': 'American music|bluegrass|country music|traditional folk',
    'Carolina Chocolate Drops': 'American music|old-time music|Americana|traditional folk',
    'Punch Brothers': 'American music|progressive bluegrass|chambergrass|acoustic music',
    'Alison Brown Quartet': 'American music|progressive bluegrass|jazz fusion|banjo music'
};

// Instrument names remain the original selection labels.
const instrumentTagLines = {
    Guitar: 'guitar|guitarists|string instruments|guitar players',
    Drums: 'drums|drummers|percussion|drum kit',
    Bass: 'bass|bass guitar|bassists|rhythm section',
    Keyboards: 'keyboards|keyboard players|keyboard instruments|keyboard music',
    Saxophone: 'saxophone|saxophonists|woodwind instruments|saxophone players',
    Violin: 'violin|violinists|fiddle|string instruments',
    Trumpet: 'trumpet|trumpeters|brass instruments|trumpet players',
    Harmonica: 'harmonica|harmonica players|mouth organ|blues harmonica',
    Flute: 'flute|flautists|woodwind instruments|flute players',
    Banjo: 'banjo|banjo players|plucked strings|folk instruments'
};
const splitTags = value => value.split('|');

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
        if (!groupTagLines[group] || !instrumentTagLines[instrument]) {
            throw new Error('Pack 154: missing specialist tags for ' + musician);
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
            tags: [...new Set([
                'Musicians & Instruments',
                instrument,
                askInstrument ? 'Instrument recognition' :
                    askGroup ? 'Bands' : 'Musicians',
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
        !Array.isArray(q.tags) || q.tags.length < 13 ||
        new Set(q.tags).size !== q.tags.length) {
        throw new Error('Pack 154: invalid question ' + q.id);
    }
    ids.add(q.id);
    wordings.add(wording);
}

module.exports = questions;
