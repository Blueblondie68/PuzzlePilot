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

// Per-recording specialist subject tags. Year distinguishes cover versions.
const recordingTagLines = {
    '1957|Let\'s Call the Whole Thing Off': 'vocal jazz|jazz standards|traditional pop|American standards',
    '1956|Love Is Strange': 'rhythm and blues|rock and roll|1950s music|R&B duets',
    '1964|Once Upon a Time': 'Motown|soul music|rhythm and blues|1960s soul',
    '1965|I Got You Babe': '1960s pop|pop duets|folk pop|classic pop',
    '1966|It Takes Two': 'Motown|soul music|1960s soul|R&B duets',
    '1967|Ain\'t No Mountain High Enough': 'Motown|soul music|1960s soul|R&B duets',
    '1967|Somethin\' Stupid': 'pop standards|traditional pop|family duet|1960s pop',
    '1967|Jackson': 'country music|country duets|American country|1960s country',
    '1967|Tramp': 'soul music|Stax Records|Southern soul|rhythm and blues',
    '1967|Some Velvet Morning': 'psychedelic pop|country pop|1960s music|Nancy Sinatra',
    '1976|Don\'t Go Breaking My Heart': 'pop duets|1970s pop|soft rock|UK charts',
    '1978|You Don\'t Bring Me Flowers': 'pop ballads|soft rock|1970s pop|adult contemporary',
    '1979|No More Tears (Enough Is Enough)': 'disco|pop duets|1970s pop|dance music',
    '1974|Mockingbird': 'pop rock|soft rock|1970s pop|American pop',
    '1972|Where Is the Love': 'soul music|R&B duets|1970s soul|rhythm and blues',
    '1978|You\'re the One That I Want': 'musical films|Grease|film soundtracks|1970s pop',
    '1974|I\'m Leaving It All Up to You': 'country pop|pop duets|1970s pop|American pop',
    '1979|Reunited': 'soul music|R&B duets|1970s soul|pop ballads',
    '1978|Stumblin\' In': 'country rock|soft rock|1970s pop|rock duets',
    '1978|Too Much, Too Little, Too Late': 'soul music|R&B duets|1970s soul|pop ballads',
    '1979|With You I\'m Born Again': 'pop ballads|soul music|film soundtracks|1970s pop',
    '1974|Love Hurts': 'country music|country duets|Emmylou Harris|1970s country',
    '1976|Golden Ring': 'country music|country duets|Nashville music|1970s country',
    '1977|Paradise by the Dashboard Light': 'rock opera|Bat Out of Hell|rock duets|1970s rock',
    '1978|Whenever I Call You Friend': 'soft rock|pop rock|rock duets|1970s pop',
    '1981|Endless Love': 'pop ballads|film soundtracks|1980s pop|love songs',
    '1981|Under Pressure': 'rock music|classic rock|British rock|rock collaborations',
    '1982|Ebony and Ivory': 'pop rock|1980s pop|pop duets|UK charts',
    '1983|Say Say Say': 'pop rock|1980s pop|pop duets|American pop',
    '1982|Up Where We Belong': 'film soundtracks|An Officer and a Gentleman|pop ballads|1980s pop',
    '1983|Islands in the Stream': 'country pop|country duets|1980s country|American pop',
    '1983|We\'ve Got Tonight': 'country pop|pop ballads|1980s pop|country duets',
    '1980|Guilty': 'pop music|soft rock|adult contemporary|1980s pop',
    '1987|(I\'ve Had) The Time of My Life': 'film soundtracks|Dirty Dancing|pop duets|1980s pop',
    '1986|On My Own': 'soul music|R&B duets|1980s pop|pop ballads',
    '1987|I Knew You Were Waiting (For Me)': 'soul music|pop duets|1980s pop|UK charts',
    '1985|Sisters Are Doin\' It for Themselves': 'pop rock|soul music|feminist anthems|1980s pop',
    '1984|Easy Lover': 'pop rock|soul music|1980s pop|pop duets',
    '1985|Separate Lives': 'pop ballads|film soundtracks|White Nights|1980s pop',
    '1986|The Next Time I Fall': 'pop ballads|soft rock|adult contemporary|1980s pop',
    '1989|After All': 'pop ballads|film soundtracks|1980s pop|soft rock',
    '1985|In a Lifetime': 'Celtic music|Irish music|folk rock|1980s music',
    '1985|It\'s Only Love': 'rock music|rock duets|1980s rock|pop rock',
    '1981|Stop Draggin\' My Heart Around': 'rock music|rock duets|classic rock|1980s rock',
    '1986|Don\'t Give Up': 'art rock|pop ballads|1980s music|UK music',
    '1987|Fairytale of New York': 'Christmas music|Christmas songs|Celtic punk|UK music',
    '1988|Especially for You': 'pop music|UK charts|1980s pop|pop duets',
    '1987|What Have I Done to Deserve This?': 'synth-pop|soul music|UK charts|1980s pop',
    '1985|I Know Him So Well': 'musical theatre|Chess musical|show tunes|1980s pop',
    '1987|Barcelona': 'classical crossover|opera|rock opera|1980s music',
    '1991|Don\'t Let the Sun Go Down on Me': 'pop ballads|live recordings|UK charts|1990s pop',
    '1998|When You\'re Gone': 'pop rock|rock duets|1990s pop|UK charts',
    '1995|One Sweet Day': 'R&B music|pop ballads|vocal groups|1990s music',
    '1998|When You Believe': 'pop ballads|film soundtracks|The Prince of Egypt|1990s pop',
    '1998|The Boy Is Mine': 'R&B music|R&B duets|1990s pop|female vocalists',
    '1993|I\'ve Got You Under My Skin': 'jazz standards|traditional pop|1990s music|vocal jazz',
    '1995|Miss Sarajevo': 'alternative rock|opera crossover|U2|1990s music',
    '1995|Where the Wild Roses Grow': 'alternative rock|murder ballads|1990s music|Australian music',
    '1996|Henry Lee': 'alternative rock|murder ballads|1990s music|indie rock',
    '1994|Regulate': 'hip hop|G-funk|West Coast hip hop|1990s rap',
    '1995|California Love': 'hip hop|West Coast hip hop|G-funk|1990s rap',
    '1999|The Prayer': 'classical crossover|opera|pop ballads|1990s music',
    '1997|Tell Him': 'pop ballads|adult contemporary|1990s music|female vocalists',
    '1991|Beauty and the Beast': 'film soundtracks|Disney music|Beauty and the Beast|1990s pop',
    '1992|A Whole New World': 'film soundtracks|Disney music|Aladdin|1990s pop',
    '1994|7 Seconds': 'world music|African pop|1990s pop|Senegalese music',
    '1993|Relight My Fire': 'UK charts|Take That|dance-pop|1990s pop',
    '1991|Unforgettable': 'posthumous duet|jazz standards|traditional pop|1990s music',
    '1995|Scream': 'pop rock|R&B music|1990s pop|family duets',
    '1994|Sometimes Always': 'alternative rock|shoegaze|indie rock|1990s music',
    '2000|Kids': 'pop music|UK charts|2000s pop|pop duets',
    '2001|Somethin\' Stupid': 'pop standards|UK charts|2000s pop|traditional pop',
    '2003|Crazy in Love': 'R&B music|hip hop|2000s pop|American pop',
    '2007|Beautiful Liar': 'pop music|Latin pop|2000s pop|female vocalists',
    '2003|Baby Boy': 'R&B music|dancehall|2000s pop|Caribbean music',
    '2009|Empire State of Mind': 'hip hop|New York music|2000s rap|R&B music',
    '2007|Hate That I Love You': 'R&B music|pop music|2000s pop|pop duets',
    '2008|4 Minutes': 'dance-pop|2000s pop|electronic pop|pop collaborations',
    '2003|Me Against the Music': 'dance-pop|2000s pop|pop collaborations|female vocalists',
    '2002|Dilemma': 'R&B music|hip hop|2000s pop|pop duets',
    '2004|Over and Over': 'hip hop|country rap|2000s pop|country music',
    '2006|Promiscuous': 'R&B music|hip hop|dance-pop|2000s pop',
    '2008|Broken Strings': 'pop ballads|UK charts|2000s pop|pop duets',
    '2009|When Love Takes Over': 'dance music|house music|2000s pop|dance-pop',
    '2009|Bonkers': 'grime|electronic dance music|UK music|2000s music',
    '2007|Valerie': 'soul music|UK charts|2000s pop|Amy Winehouse',
    '2008|American Boy': 'R&B music|hip hop|UK music|2000s pop',
    '2005|Gold Digger': 'hip hop|soul samples|2000s rap|American music',
    '2004|Rich Girl': 'R&B music|hip hop|2000s pop|pop collaborations',
    '2006|Hips Don\'t Lie': 'Latin pop|hip hop|dance-pop|2000s pop',
    '2018|Shallow': 'film soundtracks|A Star Is Born|pop ballads|2010s music',
    '2017|Perfect Duet': 'pop ballads|2010s pop|acoustic pop|pop duets',
    '2019|I Don\'t Care': 'pop music|dance-pop|2010s pop|pop duets',
    '2016|I Don\'t Wanna Live Forever': 'film soundtracks|Fifty Shades Darker|pop ballads|2010s pop',
    '2014|Love Me Harder': 'R&B music|pop music|2010s pop|pop duets',
    '2013|Just Give Me a Reason': 'pop rock|pop ballads|2010s pop|pop duets',
    '2011|Somebody That I Used to Know': 'indie pop|alternative pop|2010s pop|Australian music',
    '2021|Cold Heart (PNAU Remix)': 'dance-pop|remix|electronic music|2020s pop',
    '2024|Die with a Smile': 'pop ballads|soul pop|2020s pop|pop duets',
    '2024|Fortnight': 'pop music|alternative pop|2020s pop|featured artists',
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

        if (!recordingTagLines[year + '|' + song]) {
            throw new Error('Pack 158 missing specialist tags: ' + song);
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
            tags: [...new Set([
                'Duets & Collaborations',
                era,
                askSong ? 'Identify Song' : 'Identify Collaborator',
                'Music', 'music trivia', 'collaborations',
                'recorded collaborations', 'artist partnerships', 'recordings',
                askSong ? 'song identification' : 'collaborator identification',
                String(year), String(Math.floor(year / 10) * 10) + 's',
                song, lead, partner,
                ...recordingTagLines[year + '|' + song].split('|')
            ])],
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
        q.tags.length < 15 ||
        new Set(q.tags).size !== q.tags.length
    ) {
        throw new Error('Pack 158 has an invalid question: ' + q.id);
    }

    ids.add(q.id);
    wordings.add(wording);
}

module.exports = questions;
