// quiz_pack160.js
// PuzzlePilot - The Bigggggg Quiz
// Music: Duets & Collaborations - Pack 160
// 100 questions: music_14001 to music_14100.
// Leave quiz_bank.js unchanged until the end-of-batch update.
// Each fact: [recording, principal artist, collaborator, year, difficulty].
// Remixes and recordings with several performers are named precisely.

const duetFacts = {
    "1950s & 1960s": [
        ["All I Have to Do Is Dream", "Don Everly", "Phil Everly", 1958, "Easy"],
        ["The Sound of Silence", "Paul Simon", "Art Garfunkel", 1965, "Easy"],
        ["Hey Paula", "Ray Hildebrand", "Jill Jackson", 1962, "Hard"],
        ["A World Without Love", "Peter Asher", "Gordon Waller", 1964, "Medium"],
        ["Happy Together", "Howard Kaylan", "Mark Volman", 1967, "Medium"],
    ],
    "1970s": [
        ["Boogie Wonderland", "Earth, Wind & Fire", "The Emotions", 1979, "Easy"],
        ["You Are Everything", "Diana Ross", "Marvin Gaye", 1973, "Medium"],
        ["Ain't No Stoppin' Us Now", "Gene McFadden", "John Whitehead", 1979, "Medium"],
        ["Yes Sir, I Can Boogie", "Mayte Mateos", "María Mendiola", 1977, "Medium"],
        ["Don't Stop", "Christine McVie", "Lindsey Buckingham", 1977, "Medium"],
    ],
    "1980s": [
        ["Just the Two of Us", "Grover Washington Jr.", "Bill Withers", 1981, "Easy"],
        ["Tonight I Celebrate My Love", "Roberta Flack", "Peabo Bryson", 1983, "Medium"],
        ["Tell Me I'm Not Dreamin' (Too Good to Be True)", "Jermaine Jackson", "Michael Jackson", 1984, "Medium"],
        ["Hold Me", "Teddy Pendergrass", "Whitney Houston", 1984, "Medium"],
        ["Somebody's Watching Me", "Rockwell", "Michael Jackson", 1984, "Easy"],
        ["Opposites Attract", "Paula Abdul", "MC Skat Kat", 1989, "Easy"],
        ["Friends", "Jody Watley", "Eric B. & Rakim", 1989, "Hard"],
        ["Never Gonna Let You Go", "Sérgio Mendes", "Joe Pizzulo", 1983, "Medium"],
        ["In Your Eyes", "Peter Gabriel", "Youssou N'Dour", 1986, "Medium"],
        ["Respectable", "Mel Appleby", "Kim Appleby", 1987, "Easy"],
        ["Don't Leave Me This Way", "Jimmy Somerville", "Sarah Jane Morris", 1986, "Medium"],
        ["I Feel for You", "Chaka Khan", "Melle Mel", 1984, "Medium"],
        ["Push It", "Cheryl James", "Sandra Denton", 1987, "Medium"],
        ["Keep on Movin'", "Soul II Soul", "Caron Wheeler", 1989, "Medium"],
        ["Rockit", "Herbie Hancock", "Grandmixer D.ST", 1983, "Hard"],
        ["Don't Forget Me (When I'm Gone)", "Glass Tiger", "Bryan Adams", 1986, "Medium"],
    ],
    "1990s": [
        ["All for Love", "Bryan Adams", "Sting", 1993, "Easy"],
        ["I'll Be There", "Mariah Carey", "Trey Lorenz", 1992, "Medium"],
        ["Thank God I Found You", "Mariah Carey", "Joe", 1999, "Medium"],
        ["Sweetheart", "Mariah Carey", "Jermaine Dupri", 1998, "Hard"],
        ["Breakdown", "Mariah Carey", "Bone Thugs-n-Harmony", 1997, "Hard"],
        ["No Diggity", "Blackstreet", "Dr. Dre", 1996, "Medium"],
        ["I'll Be Missing You", "Puff Daddy", "Faith Evans", 1997, "Easy"],
        ["Mo Money Mo Problems", "The Notorious B.I.G.", "Puff Daddy", 1997, "Medium"],
        ["Ghetto Supastar (That Is What You Are)", "Pras", "Mýa", 1998, "Medium"],
        ["Got 'til It's Gone", "Janet Jackson", "Q-Tip", 1997, "Medium"],
        ["Wild Wild West", "Will Smith", "Dru Hill", 1999, "Medium"],
        ["Time to Say Goodbye", "Sarah Brightman", "Andrea Bocelli", 1996, "Easy"],
        ["When I Fall in Love", "Céline Dion", "Clive Griffin", 1993, "Medium"],
        ["Written in the Stars", "Elton John", "LeAnn Rimes", 1999, "Medium"],
        ["You Got the Love", "The Source", "Candi Staton", 1991, "Medium"],
        ["Dreamer", "Livin' Joy", "Janice Robinson", 1994, "Medium"],
        ["Right in the Night (Fall in Love with Music)", "Jam & Spoon", "Plavka", 1993, "Hard"],
        ["Ready or Not", "Wyclef Jean", "Lauryn Hill", 1996, "Medium"],
        ["Still Not a Player", "Big Pun", "Joe", 1998, "Medium"],
        ["Thug Luv", "Bone Thugs-n-Harmony", "2Pac", 1997, "Hard"],
    ],
    "2000s": [
        ["One", "U2", "Mary J. Blige", 2005, "Easy"],
        ["Could I Have This Kiss Forever", "Enrique Iglesias", "Whitney Houston", 2000, "Medium"],
        ["Don't Cha", "The Pussycat Dolls", "Busta Rhymes", 2005, "Easy"],
        ["Buttons", "The Pussycat Dolls", "Snoop Dogg", 2006, "Medium"],
        ["Girlfriend (Remix)", "Avril Lavigne", "Lil Mama", 2007, "Medium"],
        ["Lady Marmalade", "Christina Aguilera", "Lil’ Kim", 2001, "Easy"],
        ["Bossy", "Kelis", "Too $hort", 2006, "Hard"],
        ["Lil Star", "Kelis", "CeeLo Green", 2006, "Medium"],
        ["Dance Wiv Me", "Dizzee Rascal", "Calvin Harris", 2008, "Easy"],
        ["Number 1", "Tinchy Stryder", "N-Dubz", 2009, "Medium"],
        ["Never Leave You", "Tinchy Stryder", "Amelle Berrabah", 2009, "Medium"],
        ["Not in Love", "Enrique Iglesias", "Kelis", 2004, "Medium"],
        ["Takin' Back My Love", "Enrique Iglesias", "Ciara", 2009, "Medium"],
        ["Boys (The Co-Ed Remix)", "Britney Spears", "Pharrell Williams", 2002, "Medium"],
        ["Like I Love You", "Justin Timberlake", "Clipse", 2002, "Medium"],
        ["The Way I Are", "Timbaland", "Keri Hilson", 2007, "Medium"],
        ["Good Life", "Kanye West", "T-Pain", 2007, "Medium"],
        ["Touch the Sky", "Kanye West", "Lupe Fiasco", 2006, "Medium"],
        ["Kiss Me Thru the Phone", "Soulja Boy", "Sammie", 2008, "Hard"],
        ["Rise & Fall", "Craig David", "Sting", 2003, "Easy"],
        ["No Air", "Jordin Sparks", "Chris Brown", 2008, "Easy"],
        ["Love Like This", "Natasha Bedingfield", "Sean Kingston", 2007, "Medium"],
        ["Set the Fire to the Third Bar", "Snow Patrol", "Martha Wainwright", 2006, "Hard"],
        ["Underneath It All", "No Doubt", "Lady Saw", 2001, "Medium"],
    ],
    "2010s": [
        ["Telephone", "Lady Gaga", "Beyoncé", 2010, "Easy"],
        ["E.T. (Remix)", "Katy Perry", "Kanye West", 2011, "Easy"],
        ["Marvin Gaye", "Charlie Puth", "Meghan Trainor", 2015, "Medium"],
        ["Like I'm Gonna Lose You", "Meghan Trainor", "John Legend", 2015, "Easy"],
        ["We Don't Talk Anymore", "Charlie Puth", "Selena Gomez", 2016, "Easy"],
        ["Bang Bang", "Jessie J", "Ariana Grande", 2014, "Easy"],
        ["Price Tag", "Jessie J", "B.o.B", 2011, "Easy"],
        ["Heart Skips a Beat", "Olly Murs", "Rizzle Kicks", 2011, "Medium"],
        ["Troublemaker", "Olly Murs", "Flo Rida", 2012, "Medium"],
        ["For You", "Liam Payne", "Rita Ora", 2018, "Medium"],
        ["Rockabye", "Clean Bandit", "Anne-Marie", 2016, "Easy"],
        ["FRIENDS", "Marshmello", "Anne-Marie", 2018, "Easy"],
        ["Rewrite the Stars", "James Arthur", "Anne-Marie", 2018, "Medium"],
        ["Higher", "Taio Cruz", "Kylie Minogue", 2010, "Medium"],
        ["Work", "Rihanna", "Drake", 2016, "Easy"],
        ["Latch", "Disclosure", "Sam Smith", 2012, "Medium"],
        ["La La La", "Naughty Boy", "Sam Smith", 2013, "Easy"],
        ["Waiting All Night", "Rudimental", "Ella Eyre", 2013, "Medium"],
        ["Feel the Love", "Rudimental", "John Newman", 2012, "Medium"],
        ["Fancy", "Iggy Azalea", "Charli XCX", 2014, "Easy"],
    ],
    "2020s": [
        ["Bam Bam", "Camila Cabello", "Ed Sheeran", 2022, "Easy"],
        ["Kiss Me More", "Doja Cat", "SZA", 2021, "Easy"],
        ["Boy's a liar Pt. 2", "PinkPantheress", "Ice Spice", 2023, "Medium"],
        ["Left and Right", "Charlie Puth", "Jung Kook", 2022, "Medium"],
        ["Seven", "Jung Kook", "Latto", 2023, "Medium"],
        ["II Most Wanted", "Beyoncé", "Miley Cyrus", 2024, "Medium"],
        ["I Remember Everything", "Zach Bryan", "Kacey Musgraves", 2023, "Medium"],
        ["Head & Heart", "Joel Corry", "MNEK", 2020, "Easy"],
        ["I'm Good (Blue)", "David Guetta", "Bebe Rexha", 2022, "Easy"],
        ["Miracle", "Calvin Harris", "Ellie Goulding", 2023, "Easy"],
    ],
};

const expectedCounts = {
    "1950s & 1960s": 5,
    "1970s": 5,
    "1980s": 16,
    "1990s": 20,
    "2000s": 24,
    "2010s": 20,
    "2020s": 10,
};

function normalise(value) {
    return String(value).trim().toLowerCase().replace(/\s+/g, ' ');
}

const seenRecordings = new Set();
const seenPartnerships = new Set();

for (const [era, facts] of Object.entries(duetFacts)) {
    if (!Array.isArray(facts) || facts.length !== expectedCounts[era]) {
        throw new Error('Pack 160 wrong fact count for ' + era);
    }

    for (const [song, lead, partner, year, difficulty] of facts) {
        const titleKey = normalise(song + '|' + year);
        const pairKey = [lead, partner].map(normalise).sort().join('|');

        if (
            !song || !lead || !partner ||
            normalise(lead) === normalise(partner) ||
            !Number.isInteger(year) || year < 1950 || year > 2026 ||
            !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
            seenRecordings.has(titleKey) ||
            seenPartnerships.has(pairKey)
        ) {
            throw new Error(
                'Pack 160 repeated or invalid recording: ' + song
            );
        }

        seenRecordings.add(titleKey);
        seenPartnerships.add(pairKey);
    }
}

// Select distinct alternatives, deterministic for every question.
function pickWrongAnswers(pool, correct, seed) {
    const candidates = [];

    for (const value of pool) {
        if (
            normalise(value) !== normalise(correct) &&
            !candidates.some(x => normalise(x) === normalise(value))
        ) {
            candidates.push(value);
        }
    }

    if (candidates.length < 3) {
        throw new Error(
            'Pack 160 lacks alternatives for ' + correct
        );
    }

    let state = (Math.imul(seed + 1, 2654435761) >>> 0);

    for (let i = candidates.length - 1; i > 0; i--) {
        state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
        const j = state % (i + 1);
        [candidates[i], candidates[j]] =
            [candidates[j], candidates[i]];
    }

    return candidates.slice(0, 3);
}

const questions = [];

for (const [era, facts] of Object.entries(duetFacts)) {
    // Take plausible alternatives from the same era.
    const alternatives = facts;
    const songPool = alternatives.map(x => x[0]);
    const leadPool = alternatives.map(x => x[1]);
    const partnerPool = alternatives.map(x => x[2]);

    for (let i = 0; i < facts.length; i++) {
        const [song, lead, partner, year, difficulty] = facts[i];
        const position = questions.length;
        const format = i % 4;
        const askSong = format === 1 || format === 3;

        const question = format === 0
            ? `Who collaborated with ${lead} on "${song}" (${year})?`
            : format === 1
                ? `Which recording featured both ${lead} and ${partner}?`
                : format === 2
                    ? `Which artist joined ${partner} on "${song}" (${year})?`
                    : `Which song brought together ${lead} and ${partner}?`;

        const correctAnswer = askSong
            ? song
            : (format === 0 ? partner : lead);

        const pool = askSong
            ? songPool
            : (format === 0 ? partnerPool : leadPool)
                .filter(name =>
                    normalise(name) !== normalise(lead) &&
                    normalise(name) !== normalise(partner)
                );

        const answers = pickWrongAnswers(
            pool, correctAnswer, position * 7 + 3
        );

        answers.splice(position % 4, 0, correctAnswer);

        questions.push({
            id: 'music_' + (14001 + position),
            category: 'Music',
            question,
            answers,
            correctAnswer,
            difficulty,
            tags: [
                'Duets & Collaborations',
                era,
                askSong ? 'Identify Song' : 'Identify Collaborator'
            ],
            dailyEligible: true
        });
    }
}

// Final validation of the generated questions.
if (
    questions.length !== 100 ||
    questions[0].id !== 'music_14001' ||
    questions[99].id !== 'music_14100'
) {
    throw new Error(
        'Pack 160 wrong question count or ID range.'
    );
}

const usedIds = new Set();
const usedWordings = new Set();

for (const q of questions) {
    const wording = normalise(q.question);

    if (
        !wording ||
        usedIds.has(q.id) ||
        usedWordings.has(wording) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        q.category !== 'Music' ||
        q.dailyEligible !== true ||
        !Array.isArray(q.tags) ||
        q.tags.length !== 3
    ) {
        throw new Error(
            'Pack 160 invalid question: ' + q.id
        );
    }

    usedIds.add(q.id);
    usedWordings.add(wording);
}

module.exports = questions;
