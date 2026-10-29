// quiz_pack159.js
// PuzzlePilot - The Bigggggg Quiz
// Music: Duets & Collaborations - Pack 159
// 100 questions: music_13901 to music_14000.
// Do not add to quiz_bank.js until the end of our batch.
// Each fact: [song, artist, collaborator, recording year, difficulty].
// Some collaborations are duos or featured appearances rather than
// two singers sharing every verse. Years refer to these recordings.

const duetFacts = {
    '1950s & 1960s': [
        ['Let the Good Times Roll', 'Shirley Goodman', 'Leonard Lee', 1956, 'Hard'],
        ["You've Lost That Lovin' Feelin'", 'Bill Medley', 'Bobby Hatfield', 1964, 'Medium'],
        ["I'm Your Puppet", 'James Purify', 'Bobby Purify', 1966, 'Hard'],
        ["Hold On, I'm Comin'", 'Sam Moore', 'Dave Prater', 1966, 'Medium'],
        ["Baby (You've Got What It Takes)", 'Dinah Washington', 'Brook Benton', 1960, 'Medium'],
        ["Je t'aime... moi non plus", 'Serge Gainsbourg', 'Jane Birkin', 1969, 'Medium'],
        ['My Elusive Dreams', 'David Houston', 'Tammy Wynette', 1967, 'Hard'],
        ['Let It Be Me', 'Betty Everett', 'Jerry Butler', 1964, 'Hard'],
        ["Don't Let Me Cross Over", 'Carl Butler', 'Pearl Butler', 1962, 'Hard'],
        ['Deep Purple', 'Nino Tempo', 'April Stevens', 1963, 'Medium']
    ],

    '1970s': [
        ['After the Fire Is Gone', 'Conway Twitty', 'Loretta Lynn', 1971, 'Medium'],
        ['How Do You Do?', 'Willem Duyn', 'Maggie MacNeal', 1971, 'Hard'],
        ['Never Ending Song of Love', 'Delaney Bramlett', 'Bonnie Bramlett', 1971, 'Hard'],
        ["I'd Really Love to See You Tonight", 'England Dan', 'John Ford Coley', 1976, 'Medium'],
        ['Summer Breeze', 'Jim Seals', 'Dash Crofts', 1972, 'Medium'],
        ["You're a Part of Me", 'Gene Cotton', 'Kim Carnes', 1978, 'Hard'],
        ['Shame, Shame, Shame', 'Shirley Goodman', 'Jesus Alvarez', 1974, 'Hard'],
        ['Loving Arms', 'Kris Kristofferson', 'Rita Coolidge', 1973, 'Medium']
    ],

    '1980s': [
        ['Suddenly', 'Olivia Newton-John', 'Cliff Richard', 1980, 'Easy'],
        ['Leather and Lace', 'Stevie Nicks', 'Don Henley', 1981, 'Medium'],
        ["Don't Fall in Love with a Dreamer", 'Kenny Rogers', 'Kim Carnes', 1980, 'Medium'],
        ['Baby, Come to Me', 'Patti Austin', 'James Ingram', 1982, 'Medium'],
        ['Yah Mo B There', 'James Ingram', 'Michael McDonald', 1983, 'Medium'],
        ['Somewhere Out There', 'Linda Ronstadt', 'James Ingram', 1986, 'Easy'],
        ['Friends and Lovers', 'Gloria Loring', 'Carl Anderson', 1986, 'Medium'],
        ['Almost Paradise', 'Mike Reno', 'Ann Wilson', 1984, 'Medium'],
        ["You're the Reason God Made Oklahoma", 'David Frizzell', 'Shelly West', 1981, 'Hard'],
        ['You and I', 'Eddie Rabbitt', 'Crystal Gayle', 1982, 'Medium'],
        ["Nothing's Gonna Stop Us Now", 'Grace Slick', 'Mickey Thomas', 1987, 'Easy'],
        ['Obsession', 'Bill Wadhams', 'Astrid Plane', 1984, 'Hard'],
        ["Don't You Want Me", 'Philip Oakey', 'Susan Ann Sulley', 1981, 'Easy'],
        ['Close My Eyes Forever', 'Lita Ford', 'Ozzy Osbourne', 1988, 'Medium'],
        ['U Got the Look', 'Prince', 'Sheena Easton', 1987, 'Medium'],
        ["Something's Gotten Hold of My Heart", 'Marc Almond', 'Gene Pitney', 1989, 'Medium'],
        ["Don't Know Much", 'Linda Ronstadt', 'Aaron Neville', 1989, 'Medium'],
        ['State of Shock', 'The Jacksons', 'Mick Jagger', 1984, 'Medium'],
        ['Dancing in the Street', 'David Bowie', 'Mick Jagger', 1985, 'Easy'],
        ["Don't Look Any Further", 'Dennis Edwards', 'Siedah Garrett', 1984, 'Medium'],
        ['Teardrops', 'Cecil Womack', 'Linda Womack', 1988, 'Medium'],
        ['Rise to the Occasion', 'Simon Climie', 'Rob Fisher', 1987, 'Hard']
    ],

    '1990s': [
        ['Stay', 'Siobhan Fahey', 'Marcella Detroit', 1992, 'Medium'],
        ['Set the Night to Music', 'Roberta Flack', 'Maxi Priest', 1991, 'Medium'],
        ['Would I Lie to You?', 'Charles Pettigrew', 'Eddie Chacon', 1992, 'Medium'],
        ['Justified & Ancient', 'The KLF', 'Tammy Wynette', 1991, 'Medium'],
        ['Nobody', 'Keith Sweat', 'Athena Cage', 1996, 'Hard'],
        ["Gangsta's Paradise", 'Coolio', 'L.V.', 1995, 'Medium'],
        ['Fantasy (Bad Boy Remix)', 'Mariah Carey', "Ol' Dirty Bastard", 1995, 'Medium'],
        ['Heartbreaker', 'Mariah Carey', 'Jay-Z', 1999, 'Medium'],
        ['Be My Lover', 'Melanie Thornton', 'Lane McCray', 1995, 'Medium'],
        ['Mr. Vain', 'Tania Evans', 'Jay Supreme', 1993, 'Hard'],
        ['Rhythm Is a Dancer', 'Thea Austin', 'Turbo B', 1992, 'Medium'],
        ['Set You Free', 'N-Trance', 'Kelly Llorenna', 1995, 'Medium'],
        ['One and One', 'Robert Miles', 'Maria Nayler', 1996, 'Medium'],
        ['Smooth', 'Santana', 'Rob Thomas', 1999, 'Easy'],
        ['Maria Maria', 'Santana', 'The Product G&B', 1999, 'Medium'],
        ['Put Your Lights On', 'Santana', 'Everlast', 1999, 'Hard'],
        ['Be Careful', 'Ricky Martin', 'Madonna', 1999, 'Medium'],
        ['Music of My Heart', '*NSYNC', 'Gloria Estefan', 1999, 'Medium'],
        ['From This Moment On (Duet)', 'Shania Twain', 'Bryan White', 1998, 'Medium'],
        ['How Do U Want It', '2Pac', 'K-Ci & JoJo', 1996, 'Hard']
    ],

    '2000s': [
        ['Nobody Wants to Be Lonely', 'Ricky Martin', 'Christina Aguilera', 2001, 'Easy'],
        ['Clint Eastwood', 'Gorillaz', 'Del the Funky Homosapien', 2001, 'Medium'],
        ['Feel Good Inc.', 'Gorillaz', 'De La Soul', 2005, 'Medium'],
        ['DARE', 'Gorillaz', 'Shaun Ryder', 2005, 'Medium'],
        ['Stan', 'Eminem', 'Dido', 2000, 'Easy'],
        ['Goodies', 'Ciara', 'Petey Pablo', 2004, 'Medium'],
        ['1, 2 Step', 'Ciara', 'Missy Elliott', 2004, 'Medium'],
        ['Smack That', 'Akon', 'Eminem', 2006, 'Medium'],
        ['The Sweet Escape', 'Gwen Stefani', 'Akon', 2006, 'Easy'],
        ['SexyBack', 'Justin Timberlake', 'Timbaland', 2006, 'Medium'],
        ['Apologize (Timbaland Remix)', 'Timbaland', 'OneRepublic', 2007, 'Medium'],
        ['Dead and Gone', 'T.I.', 'Justin Timberlake', 2009, 'Medium'],
        ['Live Your Life', 'T.I.', 'Rihanna', 2008, 'Medium'],
        ['Turnin Me On', 'Keri Hilson', 'Lil Wayne', 2008, 'Hard'],
        ['The Game of Love', 'Santana', 'Michelle Branch', 2002, 'Medium'],
        ['Into the Night', 'Santana', 'Chad Kroeger', 2007, 'Medium'],
        ['Touch Me', 'Rui da Silva', 'Cassandra Fox', 2001, 'Medium'],
        ["Drop It Like It's Hot", 'Snoop Dogg', 'Pharrell Williams', 2004, 'Medium'],
        ['Always on Time', 'Ja Rule', 'Ashanti', 2001, 'Medium'],
        ["What's Luv?", 'Fat Joe', 'Ashanti', 2002, 'Medium'],
        ['Hey Baby', 'No Doubt', 'Bounty Killer', 2001, 'Medium'],
        ['Down', 'Jay Sean', 'Lil Wayne', 2009, 'Medium']
    ],

    '2010s': [
        ['Love the Way You Lie', 'Eminem', 'Rihanna', 2010, 'Easy'],
        ['Airplanes', 'B.o.B', 'Hayley Williams', 2010, 'Easy'],
        ['Billionaire', 'Travie McCoy', 'Bruno Mars', 2010, 'Easy'],
        ['Stereo Hearts', 'Gym Class Heroes', 'Adam Levine', 2011, 'Medium'],
        ['Uptown Funk', 'Mark Ronson', 'Bruno Mars', 2014, 'Easy'],
        ['One Kiss', 'Calvin Harris', 'Dua Lipa', 2018, 'Easy'],
        ['Rather Be', 'Clean Bandit', 'Jess Glynne', 2014, 'Easy'],
        ['Symphony', 'Clean Bandit', 'Zara Larsson', 2017, 'Easy'],
        ['Problem', 'Ariana Grande', 'Iggy Azalea', 2014, 'Medium'],
        ['Moves Like Jagger', 'Maroon 5', 'Christina Aguilera', 2011, 'Easy'],
        ['See You Again', 'Wiz Khalifa', 'Charlie Puth', 2015, 'Easy'],
        ['Closer', 'The Chainsmokers', 'Halsey', 2016, 'Easy'],
        ['Wake Me Up', 'Avicii', 'Aloe Blacc', 2013, 'Medium']
    ],

    '2020s': [
        ['Rain on Me', 'Lady Gaga', 'Ariana Grande', 2020, 'Easy'],
        ['Industry Baby', 'Lil Nas X', 'Jack Harlow', 2021, 'Medium'],
        ['Stay', 'The Kid LAROI', 'Justin Bieber', 2021, 'Easy'],
        ['Unholy', 'Sam Smith', 'Kim Petras', 2022, 'Easy'],
        ['APT.', 'ROSÉ', 'Bruno Mars', 2024, 'Medium']
    ]
};

// Recording-specific genres, styles and related specialist topics.
// Year and title together distinguish recordings with shared song names.
const recordingTagLines = {
    "1956|Let the Good Times Roll": "rhythm and blues|rock and roll|1950s R&B|vocal duos",
    "1964|You've Lost That Lovin' Feelin'": "blue-eyed soul|pop soul|1960s pop|vocal duos",
    "1966|I'm Your Puppet": "soul music|Southern soul|rhythm and blues|1960s soul",
    "1966|Hold On, I'm Comin'": "Stax Records|Southern soul|rhythm and blues|soul duos",
    "1960|Baby (You've Got What It Takes)": "rhythm and blues|vocal jazz|traditional pop|1960s R&B",
    "1969|Je t'aime... moi non plus": "French pop|chanson|European pop|1960s music",
    "1967|My Elusive Dreams": "country music|country duets|Nashville music|1960s country",
    "1964|Let It Be Me": "soul music|rhythm and blues|1960s soul|pop standards",
    "1962|Don't Let Me Cross Over": "country music|country duets|1960s country|Nashville music",
    "1963|Deep Purple": "traditional pop|pop standards|1960s pop|vocal duos",
    "1971|After the Fire Is Gone": "country music|country duets|Nashville music|1970s country",
    "1971|How Do You Do?": "Dutch pop|European pop|pop duos|1970s pop",
    "1971|Never Ending Song of Love": "country rock|folk rock|1970s music|rock duos",
    "1976|I'd Really Love to See You Tonight": "soft rock|yacht rock|1970s pop|American music",
    "1972|Summer Breeze": "soft rock|folk rock|1970s music|acoustic pop",
    "1978|You're a Part of Me": "soft rock|pop rock|1970s pop|pop duets",
    "1974|Shame, Shame, Shame": "disco|funk|1970s music|dance music",
    "1973|Loving Arms": "country music|country duets|country pop|1970s music",
    "1980|Suddenly": "pop ballads|film soundtracks|Xanadu|1980s pop",
    "1981|Leather and Lace": "soft rock|rock duets|pop ballads|1980s rock",
    "1980|Don't Fall in Love with a Dreamer": "country pop|country duets|pop ballads|1980s pop",
    "1982|Baby, Come to Me": "R&B music|soul music|adult contemporary|1980s pop",
    "1983|Yah Mo B There": "R&B music|blue-eyed soul|soul music|1980s pop",
    "1986|Somewhere Out There": "film soundtracks|An American Tail|pop ballads|1980s pop",
    "1986|Friends and Lovers": "pop ballads|adult contemporary|1980s pop|vocal duets",
    "1984|Almost Paradise": "film soundtracks|Footloose|pop ballads|1980s rock",
    "1981|You're the Reason God Made Oklahoma": "country music|country duets|Nashville music|1980s country",
    "1982|You and I": "country pop|country duets|1980s country|adult contemporary",
    "1987|Nothing's Gonna Stop Us Now": "film soundtracks|Mannequin|pop rock|1980s pop",
    "1984|Obsession": "synth-pop|new wave|electronic music|1980s pop",
    "1981|Don't You Want Me": "synth-pop|new wave|UK music|1980s pop",
    "1988|Close My Eyes Forever": "hard rock|heavy metal|rock duets|1980s rock",
    "1987|U Got the Look": "funk|dance-pop|Minneapolis sound|1980s pop",
    "1989|Something's Gotten Hold of My Heart": "synth-pop|pop ballads|UK charts|1980s pop",
    "1989|Don't Know Much": "pop ballads|adult contemporary|1980s pop|soft rock",
    "1984|State of Shock": "pop rock|funk rock|1980s pop|rock collaborations",
    "1985|Dancing in the Street": "pop rock|Motown covers|Live Aid|1980s pop",
    "1984|Don't Look Any Further": "soul music|R&B music|1980s music|funk",
    "1988|Teardrops": "soul music|R&B music|UK charts|1980s music",
    "1987|Rise to the Occasion": "synth-pop|pop ballads|UK charts|1980s pop",
    "1992|Stay": "alternative pop|gothic rock|UK charts|1990s pop",
    "1991|Set the Night to Music": "R&B music|reggae pop|adult contemporary|1990s music",
    "1992|Would I Lie to You?": "blue-eyed soul|soul pop|1990s pop|American music",
    "1991|Justified & Ancient": "electronic music|dance music|UK charts|1990s pop",
    "1996|Nobody": "R&B music|new jack swing|1990s R&B|soul music",
    "1995|Gangsta's Paradise": "hip hop|West Coast hip hop|film soundtracks|1990s rap",
    "1995|Fantasy (Bad Boy Remix)": "hip hop|R&B music|remixes|1990s pop",
    "1999|Heartbreaker": "R&B music|hip hop|1990s pop|American pop",
    "1995|Be My Lover": "Eurodance|dance music|1990s pop|European music",
    "1993|Mr. Vain": "Eurodance|dance music|1990s pop|European music",
    "1992|Rhythm Is a Dancer": "Eurodance|dance music|1990s pop|European music",
    "1995|Set You Free": "Eurodance|rave music|UK dance|1990s pop",
    "1996|One and One": "electronic music|Eurodance|dance music|1990s pop",
    "1999|Smooth": "Latin rock|pop rock|American music|1990s pop",
    "1999|Maria Maria": "Latin rock|R&B music|1990s pop|American music",
    "1999|Put Your Lights On": "Latin rock|alternative rock|1990s music|rock collaborations",
    "1999|Be Careful": "Latin pop|dance-pop|1990s pop|pop duets",
    "1999|Music of My Heart": "film soundtracks|pop ballads|1990s pop|vocal groups",
    "1998|From This Moment On (Duet)": "country pop|country duets|pop ballads|1990s music",
    "1996|How Do U Want It": "hip hop|West Coast hip hop|1990s rap|R&B music",
    "2001|Nobody Wants to Be Lonely": "Latin pop|pop ballads|2000s pop|pop duets",
    "2001|Clint Eastwood": "alternative hip hop|trip-hop|British music|2000s music",
    "2005|Feel Good Inc.": "alternative hip hop|alternative rock|2000s pop|British music",
    "2005|DARE": "alternative dance|electronic rock|2000s pop|British music",
    "2000|Stan": "hip hop|storytelling rap|2000s rap|Dido sample",
    "2004|Goodies": "crunk&B|R&B music|hip hop|2000s pop",
    "2004|1, 2 Step": "R&B music|hip hop|dance-pop|2000s pop",
    "2006|Smack That": "hip hop|R&B music|2000s pop|American music",
    "2006|The Sweet Escape": "pop music|ska pop|2000s pop|pop collaborations",
    "2006|SexyBack": "electropop|dance-pop|2000s pop|American pop",
    "2007|Apologize (Timbaland Remix)": "pop rock|remixes|2000s pop|adult contemporary",
    "2009|Dead and Gone": "hip hop|pop rap|2000s music|American music",
    "2008|Live Your Life": "hip hop|pop rap|2000s music|American music",
    "2008|Turnin Me On": "R&B music|hip hop|2000s pop|American pop",
    "2002|The Game of Love": "Latin rock|pop rock|2000s pop|American music",
    "2007|Into the Night": "Latin rock|pop rock|2000s pop|rock collaborations",
    "2001|Touch Me": "house music|dance music|UK charts|2000s electronic",
    "2004|Drop It Like It's Hot": "hip hop|West Coast hip hop|2000s rap|American music",
    "2001|Always on Time": "R&B music|hip hop|2000s pop|pop duets",
    "2002|What's Luv?": "R&B music|hip hop|2000s pop|pop collaborations",
    "2001|Hey Baby": "dancehall|ska punk|2000s pop|Jamaican music",
    "2009|Down": "R&B music|pop rap|2000s pop|British music",
    "2010|Love the Way You Lie": "hip hop|pop rap|2010s pop|pop duets",
    "2010|Airplanes": "hip hop|pop rap|2010s pop|pop collaborations",
    "2010|Billionaire": "pop rap|hip hop|2010s pop|American music",
    "2011|Stereo Hearts": "pop rap|pop rock|2010s pop|American music",
    "2014|Uptown Funk": "funk|dance-pop|2010s pop|Minneapolis sound",
    "2018|One Kiss": "house music|dance-pop|2010s pop|UK charts",
    "2014|Rather Be": "dance-pop|house music|UK charts|2010s pop",
    "2017|Symphony": "dance-pop|electropop|UK charts|2010s pop",
    "2014|Problem": "dance-pop|hip hop|2010s pop|American pop",
    "2011|Moves Like Jagger": "dance-pop|pop rock|2010s pop|American pop",
    "2015|See You Again": "hip hop|film soundtracks|Furious 7|2010s pop",
    "2016|Closer": "electropop|dance-pop|2010s pop|American music",
    "2013|Wake Me Up": "EDM|folktronica|dance-pop|2010s pop",
    "2020|Rain on Me": "house music|dance-pop|2020s pop|female vocalists",
    "2021|Industry Baby": "hip hop|pop rap|2020s pop|American music",
    "2021|Stay": "pop rock|electropop|2020s pop|pop duets",
    "2022|Unholy": "dance-pop|electropop|2020s pop|UK charts",
    "2024|APT.": "pop rock|pop punk|2020s pop|K-pop"
};

const expectedCounts = {
    '1950s & 1960s': 10,
    '1970s': 8,
    '1980s': 22,
    '1990s': 20,
    '2000s': 22,
    '2010s': 13,
    '2020s': 5
};

function normalise(value) {
    return String(value).trim().toLowerCase().replace(/\s+/g, ' ');
}

// Validate the source facts before generating any questions.
const pairKeys = new Set();
const songKeys = new Set();

for (const [era, facts] of Object.entries(duetFacts)) {
    if (!Array.isArray(facts) || facts.length !== expectedCounts[era]) {
        throw new Error('Pack 159 incorrect fact count for ' + era);
    }

    for (const [song, lead, partner, year, difficulty] of facts) {
        const pair = [lead, partner].map(normalise).sort().join('|');
        const songKey = normalise(song + '|' + year);

        if (
            !song || !lead || !partner || lead === partner ||
            !Number.isInteger(year) || year < 1950 || year > 2026 ||
            !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
            pairKeys.has(pair) || songKeys.has(songKey)
        ) {
            throw new Error('Pack 159 invalid or repeated duet: ' + song);
        }

        if (!recordingTagLines[year + '|' + song]) {
            throw new Error('Pack 159 missing specialist tags: ' + song);
        }

        pairKeys.add(pair);
        songKeys.add(songKey);
    }
}

function chooseWrongAnswers(options, correct, seed) {
    const candidates = [...new Set(options)].filter(
        x => normalise(x) !== normalise(correct)
    );

    if (candidates.length < 3) {
        throw new Error('Pack 159 not enough alternatives for ' + correct);
    }

    let state = (Math.imul(seed + 1, 2654435761) >>> 0);

    for (let i = candidates.length - 1; i > 0; i--) {
        state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
        const j = state % (i + 1);
        [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
    }

    return candidates.slice(0, 3);
}

const questions = [];

for (const [era, facts] of Object.entries(duetFacts)) {
    // The 2020s list is small, so draw its incorrect choices
    // from both the 2010s and 2020s.
    const options = era === '2020s'
        ? [...duetFacts['2010s'], ...facts]
        : facts;

    const songs = options.map(x => x[0]);
    const firstArtists = options.map(x => x[1]);
    const partners = options.map(x => x[2]);

    for (let i = 0; i < facts.length; i++) {
        const [song, lead, partner, year, difficulty] = facts[i];
        const position = questions.length;
        const type = i % 4;
        const askSong = type === 1 || type === 3;

        const question = type === 0
            ? `Who collaborated with ${lead} on "${song}" (${year})?`
            : type === 1
                ? `Which song was recorded by ${lead} and ${partner}?`
                : type === 2
                    ? `Who teamed up with ${partner} on "${song}" (${year})?`
                    : `Which recording brought together ${lead} and ${partner}?`;

        const correctAnswer = askSong
            ? song
            : type === 0 ? partner : lead;

        const pool = askSong
            ? songs
            : type === 0 ? partners : firstArtists;

        const answers = chooseWrongAnswers(
            pool,
            correctAnswer,
            position * 7 + 3
        );

        answers.splice(position % 4, 0, correctAnswer);

        questions.push({
            id: 'music_' + (13901 + position),
            category: 'Music',
            question,
            answers,
            correctAnswer,
            difficulty,
            tags: [...new Set([
                'Duets & Collaborations',
                era,
                askSong ? 'Identify Song' : 'Identify Collaborator',
                'Music', 'music trivia', 'duets', 'collaborations',
                'recorded collaborations', 'artist partnerships',
                askSong ? 'song identification' : 'collaborator identification',
                String(year), String(Math.floor(year / 10) * 10) + 's',
                song, lead, partner,
                ...recordingTagLines[year + '|' + song].split('|')
            ])],
            dailyEligible: true
        });
    }
}

// Check the complete generated questions.
if (
    questions.length !== 100 ||
    questions[0].id !== 'music_13901' ||
    questions[99].id !== 'music_14000'
) {
    throw new Error('Pack 159 count or ID range incorrect.');
}

const ids = new Set();
const wordings = new Set();

for (const item of questions) {
    const wording = normalise(item.question);

    if (
        !wording ||
        ids.has(item.id) ||
        wordings.has(wording) ||
        item.answers.length !== 4 ||
        new Set(item.answers.map(normalise)).size !== 4 ||
        item.answers.filter(x => x === item.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(item.difficulty) ||
        item.category !== 'Music' ||
        item.dailyEligible !== true ||
        !Array.isArray(item.tags) ||
        item.tags.length < 15 ||
        new Set(item.tags).size !== item.tags.length
    ) {
        throw new Error('Pack 159 invalid question: ' + item.id);
    }

    ids.add(item.id);
    wordings.add(wording);
}

module.exports = questions;
