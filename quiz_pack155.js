// quiz_pack155.js
// PuzzlePilot - The Bigggggg Quiz
// Music: Lead Singers - Pack 155
// 100 questions: music_13501 to music_13600.
// Leave quiz_bank.js unchanged until the end of the batch.
// Each fact: [lead singer, group, time period, difficulty].
// Dates identify the relevant line-up, not necessarily the entire history
// of an act. One featured singer/group per question.

const singerFacts = {
    '1960s': [
        ['Mick Jagger', 'The Rolling Stones', 'during the 1960s', 'Easy'],
        ['Roger Daltrey', 'The Who', 'during the 1960s', 'Easy'],
        ['Jim Morrison', 'The Doors', 'during the late 1960s', 'Easy'],
        ['John Fogerty', 'Creedence Clearwater Revival', 'during the late 1960s', 'Medium'],
        ['Eric Burdon', 'The Animals', 'during the 1960s', 'Medium'],
        ['Peter Noone', "Herman's Hermits", 'during the 1960s', 'Medium'],
        ['Gerry Marsden', 'Gerry and the Pacemakers', 'during the 1960s', 'Easy'],
        ['Allan Clarke', 'The Hollies', 'during the 1960s', 'Medium'],
        ['Steve Marriott', 'Small Faces', 'during the 1960s', 'Medium'],
        ['Van Morrison', 'Them', 'during the mid-1960s', 'Medium'],
        ['Reg Presley', 'The Troggs', 'during the 1960s', 'Medium'],
        ['Colin Blunstone', 'The Zombies', 'during the 1960s', 'Medium'],
        ['Paul Jones', 'Manfred Mann', 'from 1962 to 1966', 'Hard'],
        ['Steve Winwood', 'The Spencer Davis Group', 'during the mid-1960s', 'Medium'],
        ['Arthur Brown', 'The Crazy World of Arthur Brown', 'during the late 1960s', 'Medium'],
        ['Mark Lindsay', 'Paul Revere & the Raiders', 'during the 1960s', 'Hard'],
        ['Tommy James', 'Tommy James and the Shondells', 'during the late 1960s', 'Medium'],
        ['Doug Ingle', 'Iron Butterfly', 'during the late 1960s', 'Hard'],
        ['Janis Joplin', 'Big Brother and the Holding Company', 'during the late 1960s', 'Medium'],
        ['Smokey Robinson', 'The Miracles', 'during the 1960s', 'Easy']
    ],
    '1970s': [
        ['Freddie Mercury', 'Queen', 'during the 1970s', 'Easy'],
        ['Robert Plant', 'Led Zeppelin', 'during the 1970s', 'Easy'],
        ['Ozzy Osbourne', 'Black Sabbath', 'during most of the 1970s', 'Easy'],
        ['Ian Gillan', 'Deep Purple', 'from 1969 to 1973', 'Medium'],
        ['David Coverdale', 'Whitesnake', 'during the late 1970s', 'Medium'],
        ['Rod Stewart', 'Faces', 'during the early 1970s', 'Easy'],
        ['Bon Scott', 'AC/DC', 'during the 1970s', 'Medium'],
        ['Ian Anderson', 'Jethro Tull', 'during the 1970s', 'Medium'],
        ['Bryan Ferry', 'Roxy Music', 'during the 1970s', 'Medium'],
        ['Debbie Harry', 'Blondie', 'during the late 1970s', 'Easy'],
        ['Chrissie Hynde', 'The Pretenders', 'from 1979 onwards', 'Medium'],
        ['Noddy Holder', 'Slade', 'during the 1970s', 'Medium'],
        ['Brian Connolly', 'Sweet', 'during the 1970s', 'Medium'],
        ['Marc Bolan', 'T. Rex', 'during the 1970s', 'Easy'],
        ['Paul Rodgers', 'Bad Company', 'during the 1970s', 'Medium'],
        ['Peter Gabriel', 'Genesis', 'until 1975', 'Medium'],
        ['Phil Lynott', 'Thin Lizzy', 'during the 1970s', 'Medium'],
        ['Steve Harley', 'Cockney Rebel', 'during the 1970s', 'Medium'],
        ['Lou Gramm', 'Foreigner', 'during the late 1970s', 'Medium'],
        ['Greg Lake', 'Emerson, Lake & Palmer', 'during the 1970s', 'Hard']
    ],
    '1980s': [
        ['Bono', 'U2', 'during the 1980s', 'Easy'],
        ['Sting', 'The Police', 'during the early 1980s', 'Easy'],
        ['Dave Gahan', 'Depeche Mode', 'during the 1980s', 'Medium'],
        ['Jim Kerr', 'Simple Minds', 'during the 1980s', 'Medium'],
        ['Simon Le Bon', 'Duran Duran', 'during the 1980s', 'Easy'],
        ['Tony Hadley', 'Spandau Ballet', 'during the 1980s', 'Easy'],
        ['Boy George', 'Culture Club', 'during the 1980s', 'Easy'],
        ['Holly Johnson', 'Frankie Goes to Hollywood', 'during the 1980s', 'Easy'],
        ['Midge Ure', 'Ultravox', 'during the 1980s', 'Medium'],
        ['Marc Almond', 'Soft Cell', 'during the 1980s', 'Medium'],
        ['Alison Moyet', 'Yazoo', 'during the early 1980s', 'Easy'],
        ['Neil Tennant', 'Pet Shop Boys', 'during the 1980s', 'Easy'],
        ['Annie Lennox', 'Eurythmics', 'during the 1980s', 'Easy'],
        ['Kevin Rowland', 'Dexys Midnight Runners', 'during the 1980s', 'Medium'],
        ['Feargal Sharkey', 'The Undertones', 'during the early 1980s', 'Medium'],
        ['Shane MacGowan', 'The Pogues', 'during the 1980s', 'Medium'],
        ['Morrissey', 'The Smiths', 'during the 1980s', 'Easy'],
        ['Ian Curtis', 'Joy Division', 'in 1979 and 1980', 'Medium'],
        ['Bernard Sumner', 'New Order', 'during the 1980s', 'Medium'],
        ['Robert Smith', 'The Cure', 'during the 1980s', 'Easy']
    ],
    '1990s': [
        ['Liam Gallagher', 'Oasis', 'during the 1990s', 'Easy'],
        ['Damon Albarn', 'Blur', 'during the 1990s', 'Easy'],
        ['Jarvis Cocker', 'Pulp', 'during the 1990s', 'Easy'],
        ['Brett Anderson', 'Suede', 'during the 1990s', 'Medium'],
        ['Richard Ashcroft', 'The Verve', 'during the 1990s', 'Medium'],
        ['Tim Burgess', 'The Charlatans', 'during the 1990s', 'Medium'],
        ['Ian Brown', 'The Stone Roses', 'during the early 1990s', 'Medium'],
        ["Dolores O'Riordan", 'The Cranberries', 'during the 1990s', 'Easy'],
        ['Shirley Manson', 'Garbage', 'during the 1990s', 'Easy'],
        ['Skin', 'Skunk Anansie', 'during the 1990s', 'Medium'],
        ['Thom Yorke', 'Radiohead', 'during the 1990s', 'Easy'],
        ['Kurt Cobain', 'Nirvana', 'during the early 1990s', 'Easy'],
        ['Eddie Vedder', 'Pearl Jam', 'during the 1990s', 'Easy'],
        ['Chris Cornell', 'Soundgarden', 'during the 1990s', 'Medium'],
        ['Layne Staley', 'Alice in Chains', 'during the 1990s', 'Medium'],
        ['Billy Corgan', 'The Smashing Pumpkins', 'during the 1990s', 'Medium'],
        ['Anthony Kiedis', 'Red Hot Chili Peppers', 'during the 1990s', 'Easy'],
        ['Gwen Stefani', 'No Doubt', 'during the 1990s', 'Easy'],
        ['Zack de la Rocha', 'Rage Against the Machine', 'during the 1990s', 'Medium'],
        ['Michael Stipe', 'R.E.M.', 'during the 1990s', 'Medium']
    ],
    '2000s': [
        ['Dave Grohl', 'Foo Fighters', 'during the 2000s', 'Easy'],
        ['Brandon Flowers', 'The Killers', 'during the 2000s', 'Easy'],
        ['Julian Casablancas', 'The Strokes', 'during the 2000s', 'Medium'],
        ['Alex Turner', 'Arctic Monkeys', 'during the 2000s', 'Easy'],
        ['Matt Bellamy', 'Muse', 'during the 2000s', 'Medium'],
        ['Chris Martin', 'Coldplay', 'during the 2000s', 'Easy'],
        ['Hayley Williams', 'Paramore', 'during the 2000s', 'Easy'],
        ['Amy Lee', 'Evanescence', 'during the 2000s', 'Easy'],
        ['Chester Bennington', 'Linkin Park', 'during the 2000s', 'Easy'],
        ['Serj Tankian', 'System of a Down', 'during the 2000s', 'Medium'],
        ['Jonathan Davis', 'Korn', 'during the 2000s', 'Medium'],
        ['Fred Durst', 'Limp Bizkit', 'during the 2000s', 'Medium'],
        ['Karen O', 'Yeah Yeah Yeahs', 'during the 2000s', 'Medium'],
        ['Florence Welch', 'Florence + the Machine', 'during the late 2000s', 'Easy'],
        ['Caleb Followill', 'Kings of Leon', 'during the 2000s', 'Medium'],
        ['Alex Kapranos', 'Franz Ferdinand', 'during the 2000s', 'Medium'],
        ['Kele Okereke', 'Bloc Party', 'during the 2000s', 'Medium'],
        ['Ricky Wilson', 'Kaiser Chiefs', 'during the 2000s', 'Easy'],
        ['Tom Meighan', 'Kasabian', 'during the 2000s', 'Medium'],
        ['Gary Lightbody', 'Snow Patrol', 'during the 2000s', 'Medium']
    ]
};

// Genre, scene and origin tags for each act.
// Keep the player's existing question periods and answer choices unchanged.
const groupTagLines = {
    'The Rolling Stones': 'UK music|British rock|blues rock|classic rock',
    'The Who': 'UK music|British rock|mod music|classic rock',
    'The Doors': 'American music|psychedelic rock|classic rock|Los Angeles music',
    'Creedence Clearwater Revival': 'American music|roots rock|swamp rock|classic rock',
    'The Animals': 'UK music|British Invasion|blues rock|1960s rock',
    "Herman's Hermits": 'UK music|British Invasion|beat music|1960s pop',
    'Gerry and the Pacemakers': 'UK music|Merseybeat|Liverpool music|1960s pop',
    'The Hollies': 'UK music|British Invasion|pop rock|vocal harmonies',
    'Small Faces': 'UK music|mod music|psychedelic rock|1960s rock',
    'Them': 'Northern Irish music|garage rock|blues rock|1960s music',
    'The Troggs': 'UK music|garage rock|British Invasion|1960s rock',
    'The Zombies': 'UK music|psychedelic pop|British Invasion|1960s pop',
    'Manfred Mann': 'UK music|British Invasion|rhythm and blues|1960s music',
    'The Spencer Davis Group': 'UK music|British Invasion|blue-eyed soul|rhythm and blues',
    'The Crazy World of Arthur Brown': 'UK music|psychedelic rock|theatrical rock|1960s music',
    'Paul Revere & the Raiders': 'American music|garage rock|pop rock|1960s music',
    'Tommy James and the Shondells': 'American music|garage rock|psychedelic pop|1960s music',
    'Iron Butterfly': 'American music|psychedelic rock|hard rock|1960s music',
    'Big Brother and the Holding Company': 'American music|psychedelic rock|San Francisco music|blues rock',
    'The Miracles': 'American music|Motown|soul music|rhythm and blues',
    'Queen': 'UK music|glam rock|classic rock|arena rock',
    'Led Zeppelin': 'UK music|hard rock|blues rock|classic rock',
    'Black Sabbath': 'UK music|heavy metal|doom metal|classic rock',
    'Deep Purple': 'UK music|hard rock|heavy metal|classic rock',
    'Whitesnake': 'UK music|hard rock|blues rock|classic rock',
    'Faces': 'UK music|blues rock|classic rock|British rock',
    'AC/DC': 'Australian music|hard rock|classic rock|rock bands',
    'Jethro Tull': 'UK music|progressive rock|folk rock|classic rock',
    'Roxy Music': 'UK music|glam rock|art rock|new wave',
    'Blondie': 'American music|new wave|punk rock|New York music',
    'The Pretenders': 'UK music|new wave|rock music|British rock',
    'Slade': 'UK music|glam rock|hard rock|1970s rock',
    'Sweet': 'UK music|glam rock|hard rock|1970s rock',
    'T. Rex': 'UK music|glam rock|1970s rock|Marc Bolan',
    'Bad Company': 'UK music|hard rock|blues rock|classic rock',
    'Genesis': 'UK music|progressive rock|art rock|classic rock',
    'Thin Lizzy': 'Irish music|hard rock|classic rock|rock bands',
    'Cockney Rebel': 'UK music|glam rock|art rock|1970s music',
    'Foreigner': 'British-American music|arena rock|hard rock|classic rock',
    'Emerson, Lake & Palmer': 'UK music|progressive rock|symphonic rock|1970s rock',
    'U2': 'Irish music|alternative rock|post-punk|stadium rock',
    'The Police': 'UK music|new wave|reggae rock|pop rock',
    'Depeche Mode': 'UK music|synth-pop|electronic music|new wave',
    'Simple Minds': 'Scottish music|UK music|new wave|alternative rock',
    'Duran Duran': 'UK music|new romantic|new wave|synth-pop',
    'Spandau Ballet': 'UK music|new romantic|sophisti-pop|new wave',
    'Culture Club': 'UK music|new romantic|pop music|blue-eyed soul',
    'Frankie Goes to Hollywood': 'UK music|synth-pop|new wave|Liverpool music',
    'Ultravox': 'UK music|new romantic|synth-pop|new wave',
    'Soft Cell': 'UK music|synth-pop|electronic music|new wave',
    'Yazoo': 'UK music|synth-pop|electronic music|1980s pop',
    'Pet Shop Boys': 'UK music|synth-pop|dance-pop|electronic music',
    'Eurythmics': 'UK music|synth-pop|new wave|1980s pop',
    'Dexys Midnight Runners': 'UK music|blue-eyed soul|new wave|pop rock',
    'The Undertones': 'Northern Irish music|punk rock|new wave|power pop',
    'The Pogues': 'UK music|Celtic punk|folk punk|Irish folk',
    'The Smiths': 'UK music|Manchester music|indie rock|alternative rock',
    'Joy Division': 'UK music|Manchester music|post-punk|alternative rock',
    'New Order': 'UK music|Manchester music|new wave|synth-pop',
    'The Cure': 'UK music|post-punk|gothic rock|alternative rock',
    'Oasis': 'UK music|Manchester music|Britpop|alternative rock',
    'Blur': 'UK music|Britpop|alternative rock|indie rock',
    'Pulp': 'UK music|Sheffield music|Britpop|alternative rock',
    'Suede': 'UK music|Britpop|alternative rock|glam rock',
    'The Verve': 'UK music|Britpop|psychedelic rock|alternative rock',
    'The Charlatans': 'UK music|Madchester|indie rock|alternative rock',
    'The Stone Roses': 'UK music|Manchester music|Madchester|indie rock',
    'The Cranberries': 'Irish music|alternative rock|pop rock|1990s rock',
    'Garbage': 'Scottish-American music|alternative rock|electronic rock|1990s music',
    'Skunk Anansie': 'UK music|alternative rock|hard rock|1990s music',
    'Radiohead': 'UK music|alternative rock|art rock|experimental rock',
    'Nirvana': 'American music|Seattle music|grunge|alternative rock',
    'Pearl Jam': 'American music|Seattle music|grunge|alternative rock',
    'Soundgarden': 'American music|Seattle music|grunge|alternative rock',
    'Alice in Chains': 'American music|Seattle music|grunge|alternative metal',
    'The Smashing Pumpkins': 'American music|Chicago music|alternative rock|1990s rock',
    'Red Hot Chili Peppers': 'American music|funk rock|alternative rock|California music',
    'No Doubt': 'American music|ska punk|new wave|pop rock',
    'Rage Against the Machine': 'American music|rap metal|alternative metal|political rock',
    'R.E.M.': 'American music|alternative rock|college rock|indie rock',
    'Foo Fighters': 'American music|alternative rock|post-grunge|hard rock',
    'The Killers': 'American music|Las Vegas music|indie rock|new wave revival',
    'The Strokes': 'American music|New York music|garage rock revival|indie rock',
    'Arctic Monkeys': 'UK music|Sheffield music|indie rock|alternative rock',
    'Muse': 'UK music|alternative rock|progressive rock|arena rock',
    'Coldplay': 'UK music|pop rock|alternative rock|British pop',
    'Paramore': 'American music|pop punk|alternative rock|pop rock',
    'Evanescence': 'American music|gothic metal|alternative metal|hard rock',
    'Linkin Park': 'American music|nu metal|alternative rock|rap rock',
    'System of a Down': 'American music|alternative metal|nu metal|heavy metal',
    'Korn': 'American music|nu metal|alternative metal|heavy metal',
    'Limp Bizkit': 'American music|nu metal|rap metal|alternative metal',
    'Yeah Yeah Yeahs': 'American music|New York music|indie rock|garage rock revival',
    'Florence + the Machine': 'UK music|indie rock|indie pop|art pop',
    'Kings of Leon': 'American music|southern rock|alternative rock|indie rock',
    'Franz Ferdinand': 'Scottish music|UK music|indie rock|post-punk revival',
    'Bloc Party': 'UK music|indie rock|post-punk revival|alternative rock',
    'Kaiser Chiefs': 'UK music|Leeds music|indie rock|post-punk revival',
    'Kasabian': 'UK music|Leicester music|indie rock|alternative rock',
    'Snow Patrol': 'Northern Irish-Scottish music|UK music|alternative rock|pop rock'
};

function normalise(value) {
    return String(value).trim().toLowerCase().replace(/\s+/g, ' ');
}

const knownSingers = new Set();
const knownGroups = new Set();

for (const [decade, entries] of Object.entries(singerFacts)) {
    if (entries.length !== 20) {
        throw new Error('Pack 155 expected 20 singers for ' + decade);
    }

    for (const [singer, group, period, difficulty] of entries) {
        if (
            typeof singer !== 'string' || !singer.trim() ||
            typeof group !== 'string' || !group.trim() ||
            typeof period !== 'string' || !period.trim() ||
            !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
            knownSingers.has(normalise(singer)) ||
            knownGroups.has(normalise(group))
        ) {
            throw new Error(
                'Pack 155 invalid or repeated singer/group: ' + singer
            );
        }

        if (!groupTagLines[group]) {
            throw new Error('Pack 155 missing specialist tags for: ' + group);
        }

        knownSingers.add(normalise(singer));
        knownGroups.add(normalise(group));
    }
}

// Distractors are drawn from the same decade for plausible choices.
// No group or lead singer is repeated anywhere within this pack.
function getWrongAnswers(candidates, correct, seed) {
    const unique = candidates.filter(candidate =>
        normalise(candidate) !== normalise(correct)
    );

    const wrong = [];
    let pointer = seed % unique.length;

    while (wrong.length < 3) {
        const candidate = unique[pointer];

        if (!wrong.includes(candidate)) {
            wrong.push(candidate);
        }

        pointer = (pointer + 7) % unique.length;
    }

    return wrong;
}

const questions = [];

for (const [decade, entries] of Object.entries(singerFacts)) {
    const singers = entries.map(fact => fact[0]);
    const groups = entries.map(fact => fact[1]);

    for (let index = 0; index < entries.length; index++) {
        const [singer, group, period, difficulty] = entries[index];
        const position = questions.length;
        const format = index % 4;
        const askForSinger = format === 0 || format === 2;

        const question = format === 0
            ? `Who was the lead singer of ${group} ${period}?`
            : format === 1
                ? `Which group did ${singer} front ${period}?`
                : format === 2
                    ? `Who fronted ${group} ${period}?`
                    : `Which group featured ${singer} on lead vocals ${period}?`;

        const correctAnswer = askForSinger ? singer : group;

        const wrong = getWrongAnswers(
            askForSinger ? singers : groups,
            correctAnswer,
            position * 11 + 3
        );

        const answers = [...wrong];
        answers.splice(position % 4, 0, correctAnswer);

        questions.push({
            id: 'music_' + (13501 + position),
            category: 'Music',
            question,
            answers,
            correctAnswer,
            difficulty,
            tags: [...new Set([
                'Lead Singers',
                decade,
                askForSinger ? 'Identify Singer' : 'Identify Group',
                'Music', 'music trivia', 'lead vocals', 'vocalists',
                'band members', 'lead singer identification',
                askForSinger ? 'singer identification' : 'group identification',
                singer, group,
                ...groupTagLines[group].split('|')
            ])],
            dailyEligible: true
        });
    }
}

if (
    questions.length !== 100 ||
    questions[0].id !== 'music_13501' ||
    questions[99].id !== 'music_13600'
) {
    throw new Error('Pack 155 incorrect question count or ID range.');
}

const usedIds = new Set();
const usedWordings = new Set();

for (const item of questions) {
    const wording = normalise(item.question);

    if (
        usedIds.has(item.id) ||
        usedWordings.has(wording) ||
        !wording ||
        item.answers.length !== 4 ||
        new Set(item.answers.map(normalise)).size !== 4 ||
        item.answers.filter(
            answer => answer === item.correctAnswer
        ).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(item.difficulty) ||
        item.category !== 'Music' ||
        !item.dailyEligible ||
        !Array.isArray(item.tags) ||
        item.tags.length < 12 ||
        new Set(item.tags).size !== item.tags.length
    ) {
        throw new Error('Pack 155 invalid question: ' + item.id);
    }

    usedIds.add(item.id);
    usedWordings.add(wording);
}

module.exports = questions;
