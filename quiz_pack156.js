// quiz_pack156.js
// PuzzlePilot - The Bigggggg Quiz
// Music: Lead Singers - Pack 156
// 100 questions: music_13601 to music_13700.
// Do not add to quiz_bank.js until the end of the batch.
// Every fact: [singer, group, period, difficulty].

const singerFacts = {
    '1960s': [
        ['Ray Davies', 'The Kinks', 'during the 1960s', 'Easy'],
        ['Mike Smith', 'The Dave Clark Five', 'during the 1960s', 'Medium'],
        ['Denny Laine', 'The Moody Blues', 'from 1964 to 1966', 'Hard'],
        ['Judith Durham', 'The Seekers', 'during the 1960s', 'Medium'],
        ['Gary Brooker', 'Procol Harum', 'during the late 1960s', 'Medium'],
        ['Peter Frampton', 'The Herd', 'during the late 1960s', 'Medium'],
        ['Eric Stewart', 'The Mindbenders', 'during the mid-1960s', 'Hard'],
        ['John Sebastian', 'The Lovin\' Spoonful', 'during the 1960s', 'Medium'],
        ['Country Joe McDonald', 'Country Joe and the Fish', 'during the late 1960s', 'Hard'],
        ['Jimi Hendrix', 'The Jimi Hendrix Experience', 'during the late 1960s', 'Easy'],
        ['Gary Puckett', 'The Union Gap', 'during the late 1960s', 'Medium'],
        ['David Clayton-Thomas', 'Blood, Sweat & Tears', 'from 1968 onwards', 'Hard'],
        ['Bob Hite', 'Canned Heat', 'during the late 1960s', 'Hard'],
        ['Dave Dee', 'Dave Dee, Dozy, Beaky, Mick & Tich', 'during the 1960s', 'Medium'],
        ['Alex Chilton', 'The Box Tops', 'during the late 1960s', 'Medium'],
        ['Roky Erickson', 'The 13th Floor Elevators', 'during the 1960s', 'Hard'],
        ['Billy J. Kramer', 'The Dakotas', 'during the 1960s', 'Medium'],
        ['Mike d\'Abo', 'Manfred Mann', 'from 1966 to 1969', 'Hard'],
        ['Phil May', 'The Pretty Things', 'during the 1960s', 'Hard'],
        ['John Kay', 'Steppenwolf', 'during the late 1960s', 'Medium']
    ],

    '1970s': [
        ['Ronnie James Dio', 'Rainbow', 'from 1975 to 1978', 'Medium'],
        ['Ian Hunter', 'Mott the Hoople', 'during the early 1970s', 'Medium'],
        ['Graham Bonnet', 'Rainbow', 'in 1979', 'Hard'],
        ['Phil Collins', 'Genesis', 'from 1976 onwards', 'Easy'],
        ['Steve Perry', 'Journey', 'from 1977 onwards', 'Easy'],
        ['David Johansen', 'New York Dolls', 'during the 1970s', 'Hard'],
        ['Patti Smith', 'Patti Smith Group', 'during the 1970s', 'Medium'],
        ['Tom Petty', 'Tom Petty and the Heartbreakers', 'during the late 1970s', 'Easy'],
        ['Bob Seger', 'The Silver Bullet Band', 'during the 1970s', 'Medium'],
        ['Peter Hammill', 'Van der Graaf Generator', 'during the early 1970s', 'Hard'],
        ['David Byrne', 'Talking Heads', 'during the late 1970s', 'Medium'],
        ['Joe Strummer', 'The Clash', 'during the late 1970s', 'Medium'],
        ['Johnny Rotten', 'Sex Pistols', 'during the late 1970s', 'Easy'],
        ['Poly Styrene', 'X-Ray Spex', 'during the late 1970s', 'Medium'],
        ['Siouxsie Sioux', 'Siouxsie and the Banshees', 'during the late 1970s', 'Medium'],
        ['Steve Walsh', 'Kansas', 'during the 1970s', 'Medium'],
        ['David Lee Roth', 'Van Halen', 'during the late 1970s', 'Easy'],
        ['Ronnie Van Zant', 'Lynyrd Skynyrd', 'until 1977', 'Medium'],
        ['Steve Miller', 'Steve Miller Band', 'during the 1970s', 'Medium'],
        ['Robin Zander', 'Cheap Trick', 'during the late 1970s', 'Medium']
    ],

    '1980s': [
        ['Paul Young', 'Q-Tips', 'during the early 1980s', 'Hard'],
        ['Billy Idol', 'Generation X', 'until 1981', 'Medium'],
        ['Ian Astbury', 'The Cult', 'during the 1980s', 'Medium'],
        ['Andrew Eldritch', 'The Sisters of Mercy', 'during the 1980s', 'Medium'],
        ['Ian McCulloch', 'Echo & the Bunnymen', 'during the 1980s', 'Medium'],
        ['Pete Burns', 'Dead or Alive', 'during the 1980s', 'Easy'],
        ['Limahl', 'Kajagoogoo', 'from 1981 to 1983', 'Easy'],
        ['John Lydon', 'Public Image Ltd', 'during the 1980s', 'Medium'],
        ['Paul Heaton', 'The Housemartins', 'during the 1980s', 'Medium'],
        ['Mike Scott', 'The Waterboys', 'during the 1980s', 'Medium'],
        ['Adam Ant', 'Adam and the Ants', 'during the early 1980s', 'Easy'],
        ['Bruce Dickinson', 'Iron Maiden', 'during most of the 1980s', 'Medium'],
        ['Joe Elliott', 'Def Leppard', 'during the 1980s', 'Medium'],
        ['David Sylvian', 'Japan', 'during the early 1980s', 'Medium'],
        ['David Sterry', 'Real Life', 'during the 1980s', 'Hard'],
        ['Richard Butler', 'The Psychedelic Furs', 'during the 1980s', 'Medium'],
        ['Mike Peters', 'The Alarm', 'during the 1980s', 'Medium'],
        ['Belinda Carlisle', 'The Go-Go\'s', 'during the early 1980s', 'Easy'],
        ['Patty Smyth', 'Scandal', 'during the 1980s', 'Medium'],
        ['Martha Davis', 'The Motels', 'during the 1980s', 'Medium']
    ],

    '1990s': [
        ['Justine Frischmann', 'Elastica', 'during the 1990s', 'Medium'],
        ['Louise Wener', 'Sleeper', 'during the 1990s', 'Medium'],
        ['Sonya Madan', 'Echobelly', 'during the 1990s', 'Hard'],
        ['Cerys Matthews', 'Catatonia', 'during the 1990s', 'Medium'],
        ['Andrea Corr', 'The Corrs', 'during the 1990s', 'Easy'],
        ['Sharleen Spiteri', 'Texas', 'during the 1990s', 'Easy'],
        ['Mark Lanegan', 'Screaming Trees', 'during the 1990s', 'Hard'],
        ['Gavin Rossdale', 'Bush', 'during the 1990s', 'Medium'],
        ['Scott Weiland', 'Stone Temple Pilots', 'during the 1990s', 'Medium'],
        ['Phil Anselmo', 'Pantera', 'during the 1990s', 'Medium'],
        ['Jonathan Donahue', 'Mercury Rev', 'during the late 1990s', 'Hard'],
        ['Gaz Coombes', 'Supergrass', 'during the 1990s', 'Medium'],
        ['Crispian Mills', 'Kula Shaker', 'during the 1990s', 'Medium'],
        ['Rick Witter', 'Shed Seven', 'during the 1990s', 'Medium'],
        ['Crispin Hunt', 'Longpigs', 'during the 1990s', 'Hard'],
        ['Gary Stringer', 'Reef', 'during the 1990s', 'Medium'],
        ['Brian Molko', 'Placebo', 'during the 1990s', 'Medium'],
        ['Mark Morriss', 'The Bluetones', 'during the 1990s', 'Medium'],
        ['James Dean Bradfield', 'Manic Street Preachers', 'during the 1990s', 'Medium'],
        ['Tim Booth', 'James', 'during the 1990s', 'Medium']
    ],

    '2000s': [
        ['Gerard Way', 'My Chemical Romance', 'during the 2000s', 'Easy'],
        ['Billie Joe Armstrong', 'Green Day', 'during the 2000s', 'Easy'],
        ['Patrick Stump', 'Fall Out Boy', 'during the 2000s', 'Medium'],
        ['Adam Levine', 'Maroon 5', 'during the 2000s', 'Easy'],
        ['Jared Leto', 'Thirty Seconds to Mars', 'during the 2000s', 'Medium'],
        ['Chad Kroeger', 'Nickelback', 'during the 2000s', 'Medium'],
        ['Deryck Whibley', 'Sum 41', 'during the 2000s', 'Medium'],
        ['Jacoby Shaddix', 'Papa Roach', 'during the 2000s', 'Hard'],
        ['Alison Goldfrapp', 'Goldfrapp', 'during the 2000s', 'Medium'],
        ['Beth Ditto', 'Gossip', 'during the 2000s', 'Medium'],
        ['Alison Mosshart', 'The Kills', 'during the 2000s', 'Hard'],
        ['Jenny Lewis', 'Rilo Kiley', 'during the 2000s', 'Hard'],
        ['Tom Chaplin', 'Keane', 'during the 2000s', 'Medium'],
        ['James Walsh', 'Starsailor', 'during the 2000s', 'Medium'],
        ['Luke Pritchard', 'The Kooks', 'during the 2000s', 'Medium'],
        ['Johnny Borrell', 'Razorlight', 'during the 2000s', 'Medium'],
        ['Kelly Jones', 'Stereophonics', 'during the 2000s', 'Medium'],
        ['Frank Turner', 'Million Dead', 'during the early 2000s', 'Hard'],
        ['Cedric Bixler-Zavala', 'The Mars Volta', 'during the 2000s', 'Hard'],
        ['Brandon Boyd', 'Incubus', 'during the 2000s', 'Medium']
    ]
};

function normalise(value) {
    return String(value).trim().toLowerCase().replace(/\s+/g, ' ');
}

// Bands can have several singers. These questions identify the
// featured singer during the period stated in the question.
const singers = new Set();
const singerGroupPairs = new Set();

for (const [decade, facts] of Object.entries(singerFacts)) {
    if (facts.length !== 20) {
        throw new Error('Pack 156 requires 20 facts for ' + decade);
    }

    for (const [singer, group, period, difficulty] of facts) {
        const pair = normalise(singer + '|' + group);

        if (
            !singer ||
            !group ||
            !period ||
            !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
            singers.has(normalise(singer)) ||
            singerGroupPairs.has(pair)
        ) {
            throw new Error(
                'Pack 156 invalid or repeated singer: ' + singer
            );
        }

        singers.add(normalise(singer));
        singerGroupPairs.add(pair);
    }
}

function wrongAnswers(options, correct, seed) {
    const candidates = [...new Set(options)]
        .filter(value => normalise(value) !== normalise(correct));

    if (candidates.length < 3) {
        throw new Error(
            'Pack 156 missing alternatives for ' + correct
        );
    }

    const result = [];
    let position = seed % candidates.length;

    while (result.length < 3) {
        const value = candidates[position];

        if (!result.includes(value)) {
            result.push(value);
        }

        position = (position + 7) % candidates.length;
    }

    return result;
}

const questions = [];

for (const [decade, facts] of Object.entries(singerFacts)) {
    const decadeSingers = facts.map(item => item[0]);
    const decadeGroups = facts.map(item => item[1]);

    for (let index = 0; index < facts.length; index++) {
        const [singer, group, period, difficulty] = facts[index];
        const number = questions.length;
        const askSinger = index % 2 === 0;

        const question = askSinger
            ? (index % 4 === 0
                ? `Who was the lead vocalist of ${group} ${period}?`
                : `Who fronted ${group} ${period}?`)
            : (index % 4 === 1
                ? `Which group did ${singer} front ${period}?`
                : `Which group featured ${singer} on lead vocals ${period}?`);

        const correctAnswer = askSinger ? singer : group;

        const answers = wrongAnswers(
            askSinger ? decadeSingers : decadeGroups,
            correctAnswer,
            number * 11 + 3
        );

        answers.splice(number % 4, 0, correctAnswer);

        questions.push({
            id: 'music_' + (13601 + number),
            category: 'Music',
            question,
            answers,
            correctAnswer,
            difficulty,
            tags: [
                'Lead Singers',
                decade,
                askSinger ? 'Identify Singer' : 'Identify Group'
            ],
            dailyEligible: true
        });
    }
}

// Final checks for the exported questions.
if (
    questions.length !== 100 ||
    questions[0].id !== 'music_13601' ||
    questions[99].id !== 'music_13700'
) {
    throw new Error(
        'Pack 156 wrong question count or ID range.'
    );
}

const ids = new Set();
const wordings = new Set();

for (const item of questions) {
    const wording = normalise(item.question);

    if (
        ids.has(item.id) ||
        wordings.has(wording) ||
        item.answers.length !== 4 ||
        new Set(item.answers.map(normalise)).size !== 4 ||
        item.answers.filter(
            answer => answer === item.correctAnswer
        ).length !== 1 ||
        item.category !== 'Music' ||
        item.dailyEligible !== true ||
        item.tags.length !== 3
    ) {
        throw new Error(
            'Pack 156 invalid question: ' + item.id
        );
    }

    ids.add(item.id);
    wordings.add(wording);
}

module.exports = questions;
