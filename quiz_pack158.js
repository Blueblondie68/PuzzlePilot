// quiz_pack158.js
// PuzzlePilot - The Bigggggg Quiz
// Music: Duets & Collaborations - Pack 158
// 100 questions: music_13801 to music_13900.
// Leave quiz_bank.js alone until the end of the batch.
// Each entry: [song, first act, collaborating act, year, difficulty].
// Dates refer to the well-known collaborative recording, not the song's
// original composition or a different recording of the same title.

const duetFacts = {
    '1950s & 1960s': [
        ["Let's Call the Whole Thing Off", 'Ella Fitzgerald', 'Louis Armstrong', 1957, 'Medium'],
        ['Love Is Strange', 'Mickey Baker', 'Sylvia Vanterpool', 1956, 'Hard'],
        ['Once Upon a Time', 'Marvin Gaye', 'Mary Wells', 1964, 'Hard'],
        ['I Got You Babe', 'Sonny Bono', 'Cher', 1965, 'Easy'],
        ['It Takes Two', 'Marvin Gaye', 'Kim Weston', 1966, 'Medium'],
        ["Ain't No Mountain High Enough", 'Marvin Gaye', 'Tammi Terrell', 1967, 'Easy'],
        ["Somethin' Stupid", 'Frank Sinatra', 'Nancy Sinatra', 1967, 'Easy'],
        ['Jackson', 'Johnny Cash', 'June Carter', 1967, 'Medium'],
        ['Tramp', 'Otis Redding', 'Carla Thomas', 1967, 'Hard'],
        ['Some Velvet Morning', 'Nancy Sinatra', 'Lee Hazlewood', 1967, 'Hard']
    ],
    '1970s': [
        ["Don't Go Breaking My Heart", 'Elton John', 'Kiki Dee', 1976, 'Easy'],
        ["You Don't Bring Me Flowers", 'Barbra Streisand', 'Neil Diamond', 1978, 'Medium'],
        ['No More Tears (Enough Is Enough)', 'Donna Summer', 'Barbra Streisand', 1979, 'Medium'],
        ['Mockingbird', 'Carly Simon', 'James Taylor', 1974, 'Medium'],
        ['Where Is the Love', 'Roberta Flack', 'Donny Hathaway', 1972, 'Medium'],
        ["You're the One That I Want", 'John Travolta', 'Olivia Newton-John', 1978, 'Easy'],
        ["I'm Leaving It All Up to You", 'Donny Osmond', 'Marie Osmond', 1974, 'Medium'],
        ['Reunited', 'Peaches', 'Herb', 1979, 'Medium'],
        ["Stumblin' In", 'Chris Norman', 'Suzi Quatro', 1978, 'Medium'],
        ['Too Much, Too Little, Too Late', 'Johnny Mathis', 'Deniece Williams', 1978, 'Hard'],
        ["With You I'm Born Again", 'Billy Preston', 'Syreeta', 1979, 'Medium'],
        ['Love Hurts', 'Gram Parsons', 'Emmylou Harris', 1974, 'Hard'],
        ['Golden Ring', 'George Jones', 'Tammy Wynette', 1976, 'Hard'],
        ['Paradise by the Dashboard Light', 'Meat Loaf', 'Ellen Foley', 1977, 'Medium'],
        ['Whenever I Call You Friend', 'Kenny Loggins', 'Stevie Nicks', 1978, 'Hard']
    ],
    '1980s': [
        ['Endless Love', 'Diana Ross', 'Lionel Richie', 1981, 'Easy'],
        ['Under Pressure', 'David Bowie', 'Queen', 1981, 'Easy'],
        ['Ebony and Ivory', 'Paul McCartney', 'Stevie Wonder', 1982, 'Easy'],
        ['Say Say Say', 'Michael Jackson', 'Paul McCartney', 1983, 'Easy'],
        ['Up Where We Belong', 'Joe Cocker', 'Jennifer Warnes', 1982, 'Easy'],
        ['Islands in the Stream', 'Kenny Rogers', 'Dolly Parton', 1983, 'Easy'],
        ["We've Got Tonight", 'Kenny Rogers', 'Sheena Easton', 1983, 'Medium'],
        ['Guilty', 'Barbra Streisand', 'Barry Gibb', 1980, 'Medium'],
        ["(I've Had) The Time of My Life", 'Bill Medley', 'Jennifer Warnes', 1987, 'Easy'],
        ['On My Own', 'Patti LaBelle', 'Michael McDonald', 1986, 'Medium'],
        ['I Knew You Were Waiting (For Me)', 'Aretha Franklin', 'George Michael', 1987, 'Easy'],
        ["Sisters Are Doin' It for Themselves", 'Eurythmics', 'Aretha Franklin', 1985, 'Medium'],
        ['Easy Lover', 'Philip Bailey', 'Phil Collins', 1984, 'Easy'],
        ['Separate Lives', 'Phil Collins', 'Marilyn Martin', 1985, 'Medium'],
        ['The Next Time I Fall', 'Peter Cetera', 'Amy Grant', 1986, 'Medium'],
        ['After All', 'Cher', 'Peter Cetera', 1989, 'Hard'],
        ['In a Lifetime', 'Clannad', 'Bono', 1985, 'Medium'],
        ["It's Only Love", 'Bryan Adams', 'Tina Turner', 1985, 'Medium'],
        ["Stop Draggin' My Heart Around", 'Stevie Nicks', 'Tom Petty', 1981, 'Medium'],
        ["Don't Give Up", 'Peter Gabriel', 'Kate Bush', 1986, 'Easy'],
        ['Fairytale of New York', 'The Pogues', 'Kirsty MacColl', 1987, 'Easy'],
        ['Especially for You', 'Kylie Minogue', 'Jason Donovan', 1988, 'Easy'],
        ['What Have I Done to Deserve This?', 'Pet Shop Boys', 'Dusty Springfield', 1987, 'Medium'],
        ['I Know Him So Well', 'Elaine Paige', 'Barbara Dickson', 1985, 'Easy'],
        ['Barcelona', 'Freddie Mercury', 'Montserrat Caballé', 1987, 'Medium']
    ],
    '1990s': [
        ["Don't Let the Sun Go Down on Me", 'George Michael', 'Elton John', 1991, 'Easy'],
        ["When You're Gone", 'Bryan Adams', 'Melanie C', 1998, 'Easy'],
        ['One Sweet Day', 'Mariah Carey', 'Boyz II Men', 1995, 'Medium'],
        ['When You Believe', 'Whitney Houston', 'Mariah Carey', 1998, 'Easy'],
        ['The Boy Is Mine', 'Brandy', 'Monica', 1998, 'Easy'],
        ["I've Got You Under My Skin", 'Frank Sinatra', 'Bono', 1993, 'Hard'],
        ['Miss Sarajevo', 'Passengers', 'Luciano Pavarotti', 1995, 'Medium'],
        ['Where the Wild Roses Grow', 'Nick Cave', 'Kylie Minogue', 1995, 'Medium'],
        ['Henry Lee', 'Nick Cave', 'PJ Harvey', 1996, 'Hard'],
        ['Regulate', 'Warren G', 'Nate Dogg', 1994, 'Medium'],
        ['California Love', '2Pac', 'Dr. Dre', 1995, 'Medium'],
        ['The Prayer', 'Céline Dion', 'Andrea Bocelli', 1999, 'Medium'],
        ['Tell Him', 'Céline Dion', 'Barbra Streisand', 1997, 'Medium'],
        ['Beauty and the Beast', 'Céline Dion', 'Peabo Bryson', 1991, 'Medium'],
        ['A Whole New World', 'Peabo Bryson', 'Regina Belle', 1992, 'Medium'],
        ['7 Seconds', "Youssou N'Dour", 'Neneh Cherry', 1994, 'Medium'],
        ['Relight My Fire', 'Take That', 'Lulu', 1993, 'Easy'],
        ['Unforgettable', 'Natalie Cole', 'Nat King Cole', 1991, 'Medium'],
        ['Scream', 'Michael Jackson', 'Janet Jackson', 1995, 'Easy'],
        ['Sometimes Always', 'The Jesus and Mary Chain', 'Hope Sandoval', 1994, 'Hard']
    ],
    '2000s': [
        ['Kids', 'Robbie Williams', 'Kylie Minogue', 2000, 'Easy'],
        ["Somethin' Stupid", 'Robbie Williams', 'Nicole Kidman', 2001, 'Easy'],
        ['Crazy in Love', 'Beyoncé', 'Jay-Z', 2003, 'Easy'],
        ['Beautiful Liar', 'Beyoncé', 'Shakira', 2007, 'Easy'],
        ['Baby Boy', 'Beyoncé', 'Sean Paul', 2003, 'Medium'],
        ['Empire State of Mind', 'Jay-Z', 'Alicia Keys', 2009, 'Easy'],
        ['Hate That I Love You', 'Rihanna', 'Ne-Yo', 2007, 'Medium'],
        ['4 Minutes', 'Madonna', 'Justin Timberlake', 2008, 'Easy'],
        ['Me Against the Music', 'Britney Spears', 'Madonna', 2003, 'Medium'],
        ['Dilemma', 'Nelly', 'Kelly Rowland', 2002, 'Easy'],
        ['Over and Over', 'Nelly', 'Tim McGraw', 2004, 'Medium'],
        ['Promiscuous', 'Nelly Furtado', 'Timbaland', 2006, 'Medium'],
        ['Broken Strings', 'James Morrison', 'Nelly Furtado', 2008, 'Medium'],
        ['When Love Takes Over', 'David Guetta', 'Kelly Rowland', 2009, 'Medium'],
        ['Bonkers', 'Dizzee Rascal', 'Armand Van Helden', 2009, 'Medium'],
        ['Valerie', 'Mark Ronson', 'Amy Winehouse', 2007, 'Easy'],
        ['American Boy', 'Estelle', 'Kanye West', 2008, 'Medium'],
        ['Gold Digger', 'Kanye West', 'Jamie Foxx', 2005, 'Medium'],
        ['Rich Girl', 'Gwen Stefani', 'Eve', 2004, 'Medium'],
        ["Hips Don't Lie", 'Shakira', 'Wyclef Jean', 2006, 'Easy']
    ],
    '2010s': [
        ['Shallow', 'Lady Gaga', 'Bradley Cooper', 2018, 'Easy'],
        ['Perfect Duet', 'Ed Sheeran', 'Beyoncé', 2017, 'Easy'],
        ["I Don't Care", 'Ed Sheeran', 'Justin Bieber', 2019, 'Easy'],
        ["I Don't Wanna Live Forever", 'Zayn', 'Taylor Swift', 2016, 'Medium'],
        ['Love Me Harder', 'Ariana Grande', 'The Weeknd', 2014, 'Medium'],
        ['Just Give Me a Reason', 'P!nk', 'Nate Ruess', 2013, 'Medium'],
        ['Somebody That I Used to Know', 'Gotye', 'Kimbra', 2011, 'Easy']
    ],
    '2020s': [
        ['Cold Heart (PNAU Remix)', 'Elton John', 'Dua Lipa', 2021, 'Easy'],
        ['Die with a Smile', 'Lady Gaga', 'Bruno Mars', 2024, 'Easy'],
        ['Fortnight', 'Taylor Swift', 'Post Malone', 2024, 'Medium']
    ]
};

const expectedCounts = {
    '1950s & 1960s': 10,
    '1970s': 15,
    '1980s': 25,
    '1990s': 20,
    '2000s': 20,
    '2010s': 7,
    '2020s': 3
};

function normalise(value) {
    return String(value).trim().toLowerCase().replace(/\s+/g, ' ');
}

// Within this pack, no song/artist partnership is repeated.
const pairings = new Set();
const titledSongs = new Set();

for (const [era, facts] of Object.entries(duetFacts)) {
    if (!Array.isArray(facts) || facts.length !== expectedCounts[era]) {
        throw new Error('Pack 158 has an incorrect ' + era + ' count.');
    }

    for (const [song, lead, partner, year, difficulty] of facts) {
        const key = normalise(song + '|' + lead + '|' + partner);
        const titleKey = normalise(song + '|' + year);

        if (
            !song || !lead || !partner ||
            normalise(lead) === normalise(partner) ||
            !Number.isInteger(year) || year < 1950 || year > 2026 ||
            !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
            pairings.has(key) || titledSongs.has(titleKey)
        ) {
            throw new Error('Pack 158 has an invalid or repeated fact: ' + song);
        }

        pairings.add(key);
        titledSongs.add(titleKey);
    }
}

function chooseWrongAnswers(options, correct, seed) {
    const candidates = [];

    for (const option of options) {
        if (
            normalise(option) !== normalise(correct) &&
            !candidates.some(item => normalise(item) === normalise(option))
        ) {
            candidates.push(option);
        }
    }

    if (candidates.length < 3) {
        throw new Error(
            'Pack 158 needs at least three distractors for ' + correct
        );
    }

    // Shuffle alternatives so we do not repeatedly show
    // the same three wrong answers.
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
    // Borrow alternatives from the 2010s for the three
    // 2020s questions, so there are enough wrong choices.
    const optionFacts = era === '2020s'
        ? [...duetFacts['2010s'], ...facts]
        : facts;

    const songOptions = optionFacts.map(fact => fact[0]);
    const leadOptions = optionFacts.map(fact => fact[1]);
    const partnerOptions = optionFacts.map(fact => fact[2]);

    for (let i = 0; i < facts.length; i++) {
        const [song, lead, partner, year, difficulty] = facts[i];
        const position = questions.length;
        const type = i % 4;
        const askSong = type === 1 || type === 3;

        const question = (lead === 'Natalie Cole' && partner === 'Nat King Cole')
            ? 'Which song featured Natalie Cole in a posthumous duet with her father, Nat King Cole?'
            : type === 0
            ? `Who collaborated with ${lead} on "${song}" (${year})?`
            : type === 1
                ? `Which song did ${lead} record with ${partner}?`
                : type === 2
                    ? `Who teamed up with ${partner} on "${song}" (${year})?`
                    : `Which song brought together ${lead} and ${partner}?`;

        const correctAnswer = askSong
            ? song
            : (type === 0 ? partner : lead);

        const pool = askSong
            ? songOptions
            : (type === 0 ? partnerOptions : leadOptions);

        const answers = chooseWrongAnswers(
            pool, correctAnswer, position * 7 + 3
        );

        answers.splice(position % 4, 0, correctAnswer);

        questions.push({
            id: 'music_' + (13801 + position),
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

if (
    questions.length !== 100 ||
    questions[0].id !== 'music_13801' ||
    questions[99].id !== 'music_13900'
) {
    throw new Error(
        'Pack 158 has an incorrect question count or ID range.'
    );
}

const ids = new Set();
const wordings = new Set();

for (const q of questions) {
    const wording = normalise(q.question);

    if (
        !wording ||
        ids.has(q.id) ||
        wordings.has(wording) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        q.answers.filter(answer => answer === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        q.category !== 'Music' ||
        q.dailyEligible !== true ||
        !Array.isArray(q.tags) ||
        q.tags.length !== 3
    ) {
        throw new Error('Pack 158 has an invalid question: ' + q.id);
    }

    ids.add(q.id);
    wordings.add(wording);
}

module.exports = questions;
