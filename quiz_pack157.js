// quiz_pack157.js
// PuzzlePilot - The Bigggggg Quiz
// Music: Lead Singers - Pack 157
// 100 questions: music_13701 to music_13800.
// Keep quiz_bank.js unchanged until the end of this batch.
// Each entry: [singer, group, relevant period, difficulty].
// Groups with several lead vocalists are described as having
// "a lead vocalist" rather than one exclusive frontperson.

const singerFacts = {
    '1960s': [
        ['Brian Wilson', 'The Beach Boys', 'during the 1960s', 'Easy'],
        ['Micky Dolenz', 'The Monkees', 'during the 1960s', 'Easy'],
        ['Levi Stubbs', 'The Four Tops', 'during the 1960s', 'Medium'],
        ['David Ruffin', 'The Temptations', 'from 1964 to 1968', 'Medium'],
        ['Burton Cummings', 'The Guess Who', 'during the late 1960s', 'Medium'],
        ['Diana Ross', 'The Supremes', 'during the 1960s', 'Easy'],
        ['Grace Slick', 'Jefferson Airplane', 'during the late 1960s', 'Medium'],
        ['Jack Bruce', 'Cream', 'during the late 1960s', 'Medium'],
        ['Roger McGuinn', 'The Byrds', 'during the 1960s', 'Medium'],
        ['Shirley Owens', 'The Shirelles', 'during the early 1960s', 'Hard'],
        ['Mary Weiss', 'The Shangri-Las', 'during the 1960s', 'Hard'],
        ['Clem Curtis', 'The Foundations', 'from 1967 to 1968', 'Hard'],
        ['Steve Ellis', 'Love Affair', 'during the late 1960s', 'Medium'],
        ['Julie Driscoll', "Brian Auger's Trinity", 'during the late 1960s', 'Hard'],
        ['Scott Walker', 'The Walker Brothers', 'during the 1960s', 'Medium'],
        ['Sandy Denny', 'Fairport Convention', 'from 1968 to 1969', 'Medium'],
        ['Mike Pender', 'The Searchers', 'during the 1960s', 'Hard'],
        ['Felix Cavaliere', 'The Young Rascals', 'during the late 1960s', 'Hard'],
        ['Mitch Ryder', 'The Detroit Wheels', 'during the mid-1960s', 'Hard'],
        ['Rudy Martinez', '? and the Mysterians', 'during the late 1960s', 'Hard']
    ],

    '1970s': [
        ['Barry Gibb', 'Bee Gees', 'during the late 1970s', 'Easy'],
        ['Michael Jackson', 'The Jackson 5', 'during the early 1970s', 'Easy'],
        ['Chuck Negron', 'Three Dog Night', 'during the early 1970s', 'Medium'],
        ['David Gates', 'Bread', 'during the early 1970s', 'Medium'],
        ['Gerry Rafferty', 'Stealers Wheel', 'during the early 1970s', 'Medium'],
        ['Peter Cetera', 'Chicago', 'during the 1970s', 'Medium'],
        ['Donald Fagen', 'Steely Dan', 'during the 1970s', 'Medium'],
        ['Ann Wilson', 'Heart', 'during the 1970s', 'Easy'],
        ['Stevie Nicks', 'Fleetwood Mac', 'during the late 1970s', 'Easy'],
        ['David Cassidy', 'The Partridge Family', 'during the early 1970s', 'Easy'],
        ['Tony Orlando', 'Dawn', 'during the early 1970s', 'Easy'],
        ['Russell Mael', 'Sparks', 'during the 1970s', 'Medium'],
        ['Glenn Frey', 'Eagles', 'during the 1970s', 'Medium'],
        ['Jeff Lynne', 'Electric Light Orchestra', 'during the 1970s', 'Medium'],
        ['Jon Anderson', 'Yes', 'during the 1970s', 'Medium'],
        ['Peter Wolf', 'The J. Geils Band', 'during the 1970s', 'Hard'],
        ['Roy Wood', 'Wizzard', 'during the 1970s', 'Medium'],
        ['Bob Marley', 'The Wailers', 'during the 1970s', 'Easy'],
        ['John Wetton', 'King Crimson', 'from 1972 to 1974', 'Hard'],
        ['Todd Rundgren', 'Utopia', 'during the 1970s', 'Hard']
    ],

    '1980s': [
        ['Morten Harket', 'a-ha', 'during the 1980s', 'Easy'],
        ['Mike Score', 'A Flock of Seagulls', 'during the 1980s', 'Medium'],
        ['Tom Bailey', 'Thompson Twins', 'during the 1980s', 'Medium'],
        ['Philip Oakey', 'The Human League', 'during the 1980s', 'Easy'],
        ['Susanna Hoffs', 'The Bangles', 'during the 1980s', 'Medium'],
        ['Terri Nunn', 'Berlin', 'during the 1980s', 'Medium'],
        ['Peter Cox', 'Go West', 'during the 1980s', 'Medium'],
        ['Mark King', 'Level 42', 'during the 1980s', 'Medium'],
        ['Ricky Ross', 'Deacon Blue', 'during the late 1980s', 'Medium'],
        ['Roland Orzabal', 'Tears for Fears', 'during the 1980s', 'Medium'],
        ['Glenn Tilbrook', 'Squeeze', 'during the 1980s', 'Medium'],
        ['Steve Strange', 'Visage', 'during the early 1980s', 'Medium'],
        ['Pete Wylie', 'Wah!', 'during the early 1980s', 'Hard'],
        ['Carol Decker', "T'Pau", 'during the late 1980s', 'Easy'],
        ['Marti Pellow', 'Wet Wet Wet', 'during the late 1980s', 'Easy'],
        ['Clark Datchler', 'Johnny Hates Jazz', 'during the late 1980s', 'Medium'],
        ['Andy McCluskey', 'Orchestral Manoeuvres in the Dark', 'during the 1980s', 'Medium'],
        ['Joey Tempest', 'Europe', 'during the 1980s', 'Medium'],
        ['Jon Bon Jovi', 'Bon Jovi', 'during the 1980s', 'Easy'],
        ['Axl Rose', "Guns N' Roses", 'during the late 1980s', 'Easy']
    ],

    '1990s': [
        ['Nigel Clark', 'Dodgy', 'during the 1990s', 'Medium'],
        ['John Power', 'Cast', 'during the 1990s', 'Medium'],
        ['Simon Fowler', 'Ocean Colour Scene', 'during the 1990s', 'Medium'],
        ['Tommy Scott', 'Space', 'during the 1990s', 'Medium'],
        ['Saffron', 'Republica', 'during the 1990s', 'Medium'],
        ['Neil Hannon', 'The Divine Comedy', 'during the 1990s', 'Medium'],
        ['Gruff Rhys', 'Super Furry Animals', 'during the 1990s', 'Medium'],
        ['Tim Wheeler', 'Ash', 'during the 1990s', 'Medium'],
        ['Evan Dando', 'The Lemonheads', 'during the 1990s', 'Medium'],
        ['Courtney Love', 'Hole', 'during the 1990s', 'Medium'],
        ['Perry Farrell', "Jane's Addiction", 'during the early 1990s', 'Medium'],
        ['Kim Deal', 'The Breeders', 'during the 1990s', 'Medium'],
        ['Dexter Holland', 'The Offspring', 'during the 1990s', 'Medium'],
        ['Maynard James Keenan', 'Tool', 'during the 1990s', 'Medium'],
        ['Trent Reznor', 'Nine Inch Nails', 'during the 1990s', 'Medium'],
        ['Gary Barlow', 'Take That', 'during the 1990s', 'Easy'],
        ['Jay Kay', 'Jamiroquai', 'during the 1990s', 'Medium'],
        ['Darren Hayes', 'Savage Garden', 'during the 1990s', 'Easy'],
        ['Scott Stapp', 'Creed', 'during the late 1990s', 'Medium'],
        ['Michael Hutchence', 'INXS', 'during the early 1990s', 'Easy']
    ],

    '2000s': [
        ['Jack White', 'The White Stripes', 'during the 2000s', 'Easy'],
        ['Carl Barât', 'Dirty Pretty Things', 'during the mid-2000s', 'Medium'],
        ['Pete Doherty', 'Babyshambles', 'during the 2000s', 'Medium'],
        ['Tom Smith', 'Editors', 'during the 2000s', 'Medium'],
        ['Paul Smith', 'Maxïmo Park', 'during the 2000s', 'Medium'],
        ['Andrew Stockdale', 'Wolfmother', 'during the 2000s', 'Medium'],
        ['James Mercer', 'The Shins', 'during the 2000s', 'Medium'],
        ['Ben Gibbard', 'Death Cab for Cutie', 'during the 2000s', 'Medium'],
        ['Ezra Koenig', 'Vampire Weekend', 'during the late 2000s', 'Medium'],
        ['Joel Madden', 'Good Charlotte', 'during the 2000s', 'Medium'],
        ['Corey Taylor', 'Slipknot', 'during the 2000s', 'Medium'],
        ['Justin Hawkins', 'The Darkness', 'during the 2000s', 'Easy'],
        ['Jon Fratelli', 'The Fratellis', 'during the 2000s', 'Easy'],
        ['Roy Stride', 'Scouting for Girls', 'during the late 2000s', 'Medium'],
        ['Matthew Murphy', 'The Wombats', 'during the late 2000s', 'Medium'],
        ['Dave McCabe', 'The Zutons', 'during the 2000s', 'Medium'],
        ['Katie White', 'The Ting Tings', 'during the late 2000s', 'Easy'],
        ['Elly Jackson', 'La Roux', 'during the late 2000s', 'Medium'],
        ['Róisín Murphy', 'Moloko', 'during the early 2000s', 'Medium'],
        ['Irwin Sparkes', 'The Hoosiers', 'during the late 2000s', 'Medium']
    ]
};

// Specialist genres, origins and scenes for each musical act.
// Keep the original singer, group, period and answer data unchanged.
const groupTagLines = {
    'The Beach Boys': 'American music|California music|surf pop|vocal harmonies',
    'The Monkees': 'American music|1960s pop|pop rock|television music',
    'The Four Tops': 'American music|Motown|soul music|vocal groups',
    'The Temptations': 'American music|Motown|soul music|vocal groups',
    'The Guess Who': 'Canadian music|classic rock|hard rock|1960s rock',
    'The Supremes': 'American music|Motown|girl groups|soul music',
    'Jefferson Airplane': 'American music|San Francisco music|psychedelic rock|folk rock',
    'Cream': 'UK music|blues rock|psychedelic rock|classic rock',
    'The Byrds': 'American music|folk rock|psychedelic rock|country rock',
    'The Shirelles': 'American music|girl groups|doo-wop|1960s pop',
    'The Shangri-Las': 'American music|girl groups|1960s pop|teen pop',
    'The Foundations': 'UK music|soul music|pop soul|1960s pop',
    'Love Affair': 'UK music|pop soul|1960s pop|British pop',
    "Brian Auger's Trinity": 'UK music|jazz rock|blue-eyed soul|1960s music',
    'The Walker Brothers': 'American music|UK chart music|baroque pop|1960s pop',
    'Fairport Convention': 'UK music|British folk rock|folk rock|traditional folk',
    'The Searchers': 'UK music|Merseybeat|Liverpool music|British Invasion',
    'The Young Rascals': 'American music|blue-eyed soul|garage rock|1960s pop',
    'The Detroit Wheels': 'American music|Detroit music|blue-eyed soul|garage rock',
    '? and the Mysterians': 'American music|garage rock|1960s rock|Michigan music',
    'Bee Gees': 'British-Australian music|disco|pop music|vocal harmonies',
    'The Jackson 5': 'American music|Motown|soul music|family groups',
    'Three Dog Night': 'American music|pop rock|classic rock|vocal harmonies',
    'Bread': 'American music|soft rock|1970s pop|classic rock',
    'Stealers Wheel': 'Scottish music|UK music|folk rock|soft rock',
    'Chicago': 'American music|jazz rock|soft rock|horn bands',
    'Steely Dan': 'American music|jazz rock|soft rock|studio music',
    'Heart': 'American music|Canadian music|hard rock|classic rock',
    'Fleetwood Mac': 'British-American music|soft rock|classic rock|pop rock',
    'The Partridge Family': 'American music|1970s pop|television music|bubblegum pop',
    'Dawn': 'American music|1970s pop|soft rock|vocal groups',
    'Sparks': 'American music|glam rock|art pop|synth-pop',
    'Eagles': 'American music|country rock|soft rock|classic rock',
    'Electric Light Orchestra': 'UK music|symphonic rock|pop rock|classic rock',
    'Yes': 'UK music|progressive rock|art rock|classic rock',
    'The J. Geils Band': 'American music|blues rock|classic rock|Boston music',
    'Wizzard': 'UK music|glam rock|1970s pop|Roy Wood',
    'The Wailers': 'Jamaican music|reggae|roots reggae|Bob Marley',
    'King Crimson': 'UK music|progressive rock|art rock|jazz rock',
    'Utopia': 'American music|progressive rock|art rock|Todd Rundgren',
    'a-ha': 'Norwegian music|synth-pop|new wave|1980s pop',
    'A Flock of Seagulls': 'UK music|new wave|synth-pop|new romantic',
    'Thompson Twins': 'UK music|synth-pop|new wave|1980s pop',
    'The Human League': 'UK music|synth-pop|new wave|Sheffield music',
    'The Bangles': 'American music|pop rock|jangle pop|female rock bands',
    'Berlin': 'American music|new wave|synth-pop|Los Angeles music',
    'Go West': 'UK music|pop rock|synth-pop|1980s pop',
    'Level 42': 'UK music|jazz-funk|pop rock|1980s music',
    'Deacon Blue': 'Scottish music|UK music|pop rock|1980s music',
    'Tears for Fears': 'UK music|new wave|synth-pop|pop rock',
    'Squeeze': 'UK music|new wave|power pop|British pop',
    'Visage': 'UK music|new romantic|synth-pop|new wave',
    'Wah!': 'UK music|Liverpool music|post-punk|new wave',
    "T'Pau": 'UK music|pop rock|soft rock|1980s pop',
    'Wet Wet Wet': 'Scottish music|UK music|blue-eyed soul|pop rock',
    'Johnny Hates Jazz': 'UK music|sophisti-pop|synth-pop|1980s pop',
    'Orchestral Manoeuvres in the Dark': 'UK music|synth-pop|new wave|electronic music',
    'Europe': 'Swedish music|hard rock|glam metal|arena rock',
    'Bon Jovi': 'American music|arena rock|hard rock|glam metal',
    "Guns N' Roses": 'American music|hard rock|glam metal|Los Angeles music',
    'Dodgy': 'UK music|Britpop|indie rock|1990s music',
    'Cast': 'UK music|Britpop|Liverpool music|indie rock',
    'Ocean Colour Scene': 'UK music|Britpop|mod revival|alternative rock',
    'Space': 'UK music|Liverpool music|Britpop|alternative rock',
    'Republica': 'UK music|alternative rock|electronic rock|1990s music',
    'The Divine Comedy': 'Northern Irish music|chamber pop|baroque pop|Britpop era',
    'Super Furry Animals': 'Welsh music|UK music|psychedelic rock|alternative rock',
    'Ash': 'Northern Irish music|UK music|alternative rock|power pop',
    'The Lemonheads': 'American music|alternative rock|power pop|1990s music',
    'Hole': 'American music|alternative rock|grunge|Courtney Love',
    "Jane's Addiction": 'American music|alternative rock|alternative metal|Los Angeles music',
    'The Breeders': 'American music|alternative rock|indie rock|1990s music',
    'The Offspring': 'American music|punk rock|pop punk|California music',
    'Tool': 'American music|progressive metal|alternative metal|art rock',
    'Nine Inch Nails': 'American music|industrial rock|industrial metal|alternative rock',
    'Take That': 'UK music|boy bands|1990s pop|dance-pop',
    'Jamiroquai': 'UK music|acid jazz|jazz-funk|dance music',
    'Savage Garden': 'Australian music|pop rock|1990s pop|soft rock',
    'Creed': 'American music|post-grunge|hard rock|1990s rock',
    'INXS': 'Australian music|new wave|pop rock|alternative rock',
    'The White Stripes': 'American music|Detroit music|garage rock revival|blues rock',
    'Dirty Pretty Things': 'UK music|indie rock|garage rock revival|post-punk revival',
    'Babyshambles': 'UK music|indie rock|garage rock revival|2000s rock',
    'Editors': 'UK music|post-punk revival|indie rock|alternative rock',
    'Maxïmo Park': 'UK music|Newcastle music|indie rock|post-punk revival',
    'Wolfmother': 'Australian music|hard rock|psychedelic rock|2000s rock',
    'The Shins': 'American music|indie rock|indie pop|alternative rock',
    'Death Cab for Cutie': 'American music|indie rock|emo|alternative rock',
    'Vampire Weekend': 'American music|indie pop|indie rock|New York music',
    'Good Charlotte': 'American music|pop punk|alternative rock|2000s music',
    'Slipknot': 'American music|nu metal|heavy metal|alternative metal',
    'The Darkness': 'UK music|hard rock|glam rock|2000s rock',
    'The Fratellis': 'Scottish music|UK music|indie rock|garage rock revival',
    'Scouting for Girls': 'UK music|pop rock|indie pop|2000s pop',
    'The Wombats': 'UK music|Liverpool music|indie rock|post-punk revival',
    'The Zutons': 'UK music|Liverpool music|indie rock|alternative rock',
    'The Ting Tings': 'UK music|indie pop|dance-punk|electropop',
    'La Roux': 'UK music|synth-pop|electropop|2000s pop',
    'Moloko': 'British-Irish music|trip-hop|electronic music|dance music',
    'The Hoosiers': 'UK music|pop rock|indie pop|2000s pop'
};

function normalise(value) {
    return String(value).trim().toLowerCase().replace(/\s+/g, ' ');
}

// Check all source facts before making any questions.
const usedSingers = new Set();
const usedGroups = new Set();

for (const [decade, facts] of Object.entries(singerFacts)) {
    if (!Array.isArray(facts) || facts.length !== 20) {
        throw new Error('Pack 157 needs 20 lead singers for ' + decade);
    }

    for (const [singer, group, period, difficulty] of facts) {
        if (
            !singer ||
            !group ||
            !period ||
            !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
            usedSingers.has(normalise(singer)) ||
            usedGroups.has(normalise(group))
        ) {
            throw new Error('Pack 157 bad or repeated fact: ' + singer);
        }

        if (!groupTagLines[group]) {
            throw new Error('Pack 157 missing specialist tags: ' + group);
        }

        usedSingers.add(normalise(singer));
        usedGroups.add(normalise(group));
    }
}

// Choices are taken from the same decade. Since many bands have
// had more than one lead singer, phrase questions as "a lead vocalist"
// rather than asserting a single exclusive lead singer.
function chooseWrongAnswers(options, correct, seed) {
    const unique = [];

    for (const option of options) {
        if (
            normalise(option) !== normalise(correct) &&
            !unique.some(x => normalise(x) === normalise(option))
        ) {
            unique.push(option);
        }
    }

    if (unique.length < 3) {
        throw new Error('Pack 157 lacks alternatives for ' + correct);
    }

    const picked = [];
    let cursor = seed % unique.length;

    while (picked.length < 3) {
        const option = unique[cursor];

        if (!picked.includes(option)) {
            picked.push(option);
        }

        cursor = (cursor + 7) % unique.length;
    }

    return picked;
}

const questions = [];

for (const [decade, facts] of Object.entries(singerFacts)) {
    const decadeSingers = facts.map(fact => fact[0]);
    const decadeGroups = facts.map(fact => fact[1]);

    for (let i = 0; i < facts.length; i++) {
        const [singer, group, period, difficulty] = facts[i];
        const position = questions.length;
        const askSinger = i % 2 === 0;

        const question = askSinger
            ? (i % 4 === 0
                ? `Which of these singers provided lead vocals for ${group} ${period}?`
                : `Which of these musicians was a lead vocalist with ${group} ${period}?`)
            : (i % 4 === 1
                ? `Which group featured ${singer} as a lead vocalist ${period}?`
                : `With which band did ${singer} sing lead vocals ${period}?`);

        const correctAnswer = askSinger ? singer : group;

        const wrong = chooseWrongAnswers(
            askSinger ? decadeSingers : decadeGroups,
            correctAnswer,
            position * 11 + 3
        );

        wrong.splice(position % 4, 0, correctAnswer);

        questions.push({
            id: 'music_' + (13701 + position),
            category: 'Music',
            question,
            answers: wrong,
            correctAnswer,
            difficulty,
            tags: [...new Set([
                'Lead Singers',
                decade,
                askSinger ? 'Identify Singer' : 'Identify Group',
                'Music', 'music trivia', 'lead singers', 'lead vocals',
                'vocalists', 'band members', 'lead singer identification',
                askSinger ? 'singer identification' : 'group identification',
                singer, group,
                ...groupTagLines[group].split('|')
            ])],
            dailyEligible: true
        });
    }
}

if (
    questions.length !== 100 ||
    questions[0].id !== 'music_13701' ||
    questions[99].id !== 'music_13800'
) {
    throw new Error('Pack 157 wrong question count or ID range.');
}

const ids = new Set();
const wording = new Set();

for (const item of questions) {
    const text = normalise(item.question);

    if (
        !text ||
        ids.has(item.id) ||
        wording.has(text) ||
        item.answers.length !== 4 ||
        new Set(item.answers.map(normalise)).size !== 4 ||
        item.answers.filter(x => x === item.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(item.difficulty) ||
        item.category !== 'Music' ||
        item.dailyEligible !== true ||
        !Array.isArray(item.tags) ||
        item.tags.length < 13 ||
        new Set(item.tags).size !== item.tags.length
    ) {
        throw new Error('Pack 157 invalid question: ' + item.id);
    }

    ids.add(item.id);
    wording.add(text);
}

module.exports = questions;
