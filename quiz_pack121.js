 // quiz_pack121.js
// PuzzlePilot Big Quiz - Pack 121
// Music - 2010s
// 100 questions; IDs music_10167 - music_10266
// Detailed artist, region, genre, collaboration and specialist tags
// Original IDs, answers, difficulty and daily settings preserved

const songs = [
    ['Trip', 'Ella Mai'],

    ['Location', 'Dave'],
    ['Funky Friday', 'Dave'],
    ['Streatham', 'Dave'],
    ['Thiago Silva', 'Dave'],

    ['Shutdown', 'Skepta'],
    ['Man', 'Skepta'],
    ['That\'s Not Me', 'Skepta'],

    ['German Whip', 'Meridian Dan'],

    ['Don\'t Waste My Time', 'Krept & Konan'],
    ['Freak of the Week', 'Krept & Konan'],

    ['Did You See', 'J Hus'],
    ['Bouff Daddy', 'J Hus'],
    ['Common Sense', 'J Hus'],

    ['Shut Up', 'Stormzy'],
    ['Big for Your Boots', 'Stormzy'],
    ['Blinded by Your Grace, Pt. 2', 'Stormzy'],
    ['Vossi Bop', 'Stormzy'],
    ['Crown', 'Stormzy'],

    ['Black and Yellow', 'Wiz Khalifa'],
    ['Roll Up', 'Wiz Khalifa'],
    ['Work Hard, Play Hard', 'Wiz Khalifa'],

    ['Thrift Shop', 'Macklemore & Ryan Lewis'],
    ['Same Love', 'Macklemore & Ryan Lewis'],
    ['Downtown', 'Macklemore & Ryan Lewis'],

    ['Airplanes', 'B.o.B'],
    ['Nothin\' on You', 'B.o.B'],
    ['Magic', 'B.o.B'],

    ['Just a Dream', 'Nelly'],
    ['Hey Porsche', 'Nelly'],

    ['Marry You', 'Bruno Mars'],

    ['Rude Boy', 'Rihanna'],

    ['You and I', 'Lady Gaga'],

    ['Kathleen', 'Catfish and the Bottlemen'],
    ['Cocoon', 'Catfish and the Bottlemen'],
    ['Pacifier', 'Catfish and the Bottlemen'],
    ['7', 'Catfish and the Bottlemen'],

    ['If You Wanna', 'The Vaccines'],
    ['Post Break-Up Sex', 'The Vaccines'],
    ['Teenage Icon', 'The Vaccines'],
    ['Handsome', 'The Vaccines'],

    ['Pelican', 'The Maccabees'],
    ['Marks to Prove It', 'The Maccabees'],
    ['Spit It Out', 'The Maccabees'],

    ['Breezeblocks', 'alt-J'],
    ['Tessellate', 'alt-J'],
    ['Left Hand Free', 'alt-J'],
    ['Every Other Freckle', 'alt-J'],

    ['Spanish Sahara', 'Foals'],
    ['My Number', 'Foals'],
    ['Mountain at My Gates', 'Foals'],
    ['What Went Down', 'Foals'],

    ['Shake Me Down', 'Cage the Elephant'],
    ['Come a Little Closer', 'Cage the Elephant'],
    ['Cigarette Daydreams', 'Cage the Elephant'],
    ['Trouble', 'Cage the Elephant'],

    ['Little Black Submarines', 'The Black Keys'],
    ['Gold on the Ceiling', 'The Black Keys'],
    ['Lonely Boy', 'The Black Keys'],
    ['Fever', 'The Black Keys'],

    ['Take a Slice', 'Glass Animals'],
    ['Gooey', 'Glass Animals'],
    ['Youth', 'Glass Animals'],
    ['Pork Soda', 'Glass Animals'],

    ['Your Life Is a Lie', 'MGMT'],
    ['Cool Song No. 2', 'MGMT'],

    ['Love Lost', 'The Temper Trap'],
    ['Fall Together', 'The Temper Trap'],

    ['Changing', 'Sigma'],
    ['Nobody to Love', 'Sigma'],
    ['Glitterball', 'Sigma'],

    ['Easy Love', 'Sigala'],
    ['Sweet Lovin\'', 'Sigala'],
    ['Give Me Your Love', 'Sigala'],
    ['Came Here for Love', 'Sigala'],
    ['Wish You Well', 'Sigala'],
    ['Just Got Paid', 'Sigala'],

    ['Gecko (Overdrive)', 'Oliver Heldens'],
    ['Last All Night (Koala)', 'Oliver Heldens'],

    ['Intoxicated', 'Martin Solveig'],
    ['Places', 'Martin Solveig'],

    ['Perfect Strangers', 'Jonas Blue'],
    ['Mama', 'Jonas Blue'],
    ['Rise', 'Jonas Blue'],
    ['Polaroid', 'Jonas Blue'],
    ['Fast Car', 'Jonas Blue'],
    ['By Your Side', 'Jonas Blue'],

    ['Happier', 'Marshmello'],
    ['Friends', 'Marshmello'],
    ['Silence', 'Marshmello'],

    ['Scared to Be Lonely', 'Martin Garrix'],
    ['There for You', 'Martin Garrix'],
    ['In the Name of Love', 'Martin Garrix'],

    ['This Girl', 'Kungs'],

    ['Are You with Me', 'Lost Frequencies'],
    ['Reality', 'Lost Frequencies'],
    ['Crazy', 'Lost Frequencies'],

    ['Slide', 'Calvin Harris'],
    ['One Kiss', 'Calvin Harris'],
    ['Under Control', 'Calvin Harris']
];

// Shared artist metadata is expanded into each question at load time.
// This keeps the full pack manageable without sacrificing tags.
const artistTags = {
    'Ella Mai': ['Ella Mai', 'UK music', 'R&B', 'contemporary R&B', 'female vocalists'],
    'Dave': ['Dave', 'UK music', 'UK rap', 'UK hip hop', 'grime', 'rappers'],
    'Skepta': ['Skepta', 'UK music', 'grime', 'UK hip hop', 'rappers'],
    'Meridian Dan': ['Meridian Dan', 'UK music', 'grime', 'UK hip hop', 'rappers'],
    'Krept & Konan': ['Krept & Konan', 'UK music', 'UK rap', 'UK hip hop', 'duos'],
    'J Hus': ['J Hus', 'UK music', 'Afroswing', 'UK rap', 'UK hip hop', 'rappers'],
    'Stormzy': ['Stormzy', 'UK music', 'grime', 'UK hip hop', 'rappers'],
    'Wiz Khalifa': ['Wiz Khalifa', 'US music', 'hip hop', 'rap', 'rappers'],
    'Macklemore & Ryan Lewis': ['Macklemore', 'Ryan Lewis', 'US music', 'hip hop', 'pop rap', 'duos'],
    'B.o.B': ['B.o.B', 'US music', 'hip hop', 'pop rap', 'rappers'],
    'Nelly': ['Nelly', 'US music', 'hip hop', 'pop rap', 'rappers'],
    'Bruno Mars': ['Bruno Mars', 'US music', 'pop', 'pop soul', 'singer-songwriters'],
    'Rihanna': ['Rihanna', 'Barbadian music', 'Caribbean music', 'dancehall', 'R&B', 'pop'],
    'Lady Gaga': ['Lady Gaga', 'US music', 'pop', 'pop rock', 'singer-songwriters'],
    'Catfish and the Bottlemen': ['Catfish and the Bottlemen', 'Welsh music', 'UK music', 'indie rock', 'rock bands'],
    'The Vaccines': ['The Vaccines', 'UK music', 'indie rock', 'garage rock', 'rock bands'],
    'The Maccabees': ['The Maccabees', 'UK music', 'indie rock', 'alternative rock', 'rock bands'],
    'alt-J': ['alt-J', 'UK music', 'indie rock', 'art rock', 'alternative rock'],
    'Foals': ['Foals', 'UK music', 'indie rock', 'alternative rock', 'rock bands'],
    'Cage the Elephant': ['Cage the Elephant', 'US music', 'alternative rock', 'indie rock', 'rock bands'],
    'The Black Keys': ['The Black Keys', 'US music', 'blues rock', 'garage rock', 'rock duos'],
    'Glass Animals': ['Glass Animals', 'UK music', 'psychedelic pop', 'indie pop', 'alternative rock'],
    'MGMT': ['MGMT', 'US music', 'neo-psychedelia', 'indie pop', 'alternative rock'],
    'The Temper Trap': ['The Temper Trap', 'Australian music', 'indie rock', 'alternative rock', 'rock bands'],
    'Sigma': ['Sigma', 'UK music', 'drum and bass', 'dance music', 'electronic music', 'duos'],
    'Sigala': ['Sigala', 'UK music', 'house music', 'dance-pop', 'tropical house', 'DJs and producers'],
    'Oliver Heldens': ['Oliver Heldens', 'Dutch music', 'future house', 'house music', 'DJs and producers'],
    'Martin Solveig': ['Martin Solveig', 'French music', 'house music', 'dance music', 'DJs and producers'],
    'Jonas Blue': ['Jonas Blue', 'UK music', 'tropical house', 'dance-pop', 'DJs and producers'],
    'Marshmello': ['Marshmello', 'US music', 'electronic music', 'dance-pop', 'DJs and producers'],
    'Martin Garrix': ['Martin Garrix', 'Dutch music', 'progressive house', 'electronic dance music', 'DJs and producers'],
    'Kungs': ['Kungs', 'French music', 'house music', 'dance music', 'DJs and producers'],
    'Lost Frequencies': ['Lost Frequencies', 'Belgian music', 'deep house', 'tropical house', 'DJs and producers'],
    'Calvin Harris': ['Calvin Harris', 'Scottish music', 'UK music', 'house music', 'dance-pop', 'DJs and producers']
};

// Extra tags for collaborations, cover versions, samples and remixes.
// These identify the other musicians while leaving the original answers intact.
const recordingTags = {
    'Dave|Location': ['Burna Boy', 'featured artists', 'collaborations', 'Afroswing'],
    'Dave|Funky Friday': ['Fredo', 'collaborations'],
    'Dave|Thiago Silva': ['AJ Tracey', 'collaborations', 'duets'],
    'Krept & Konan|Freak of the Week': ['Jeremih', 'featured artists', 'collaborations'],
    'Stormzy|Blinded by Your Grace, Pt. 2': ['MNEK', 'featured artists', 'collaborations', 'gospel influences'],
    'Macklemore & Ryan Lewis|Thrift Shop': ['Wanz', 'featured artists', 'collaborations'],
    'Macklemore & Ryan Lewis|Same Love': ['Mary Lambert', 'featured artists', 'collaborations'],
    'Macklemore & Ryan Lewis|Downtown': ['Eric Nally', 'Melle Mel', 'Kool Moe Dee', 'Grandmaster Caz', 'collaborations'],
    'B.o.B|Airplanes': ['Hayley Williams', 'featured artists', 'collaborations'],
    'B.o.B|Nothin\' on You': ['Bruno Mars', 'featured artists', 'collaborations'],
    'B.o.B|Magic': ['Rivers Cuomo', 'featured artists', 'collaborations'],
    'Rihanna|Rude Boy': ['dancehall pop', '2010 singles'],
    'Sigma|Changing': ['Paloma Faith', 'featured artists', 'collaborations'],
    'Sigma|Nobody to Love': ['Kanye West', 'Bound 2', 'samples', 'reworkings'],
    'Sigma|Glitterball': ['Ella Henderson', 'featured artists', 'collaborations'],
    'Sigala|Easy Love': ['Jackson 5', 'ABC', 'interpolations', 'Motown influences'],
    'Sigala|Sweet Lovin\'': ['Bryn Christopher', 'featured artists', 'collaborations'],
    'Sigala|Give Me Your Love': ['John Newman', 'Nile Rodgers', 'featured artists', 'collaborations'],
    'Sigala|Came Here for Love': ['Ella Eyre', 'featured artists', 'collaborations'],
    'Sigala|Wish You Well': ['Becky Hill', 'featured artists', 'collaborations'],
    'Sigala|Just Got Paid': ['Ella Eyre', 'Meghan Trainor', 'French Montana', 'collaborations'],
    'Oliver Heldens|Gecko (Overdrive)': ['Becky Hill', 'featured artists', 'collaborations', 'vocal remixes'],
    'Oliver Heldens|Last All Night (Koala)': ['KStewart', 'featured artists', 'collaborations'],
    'Martin Solveig|Intoxicated': ['GTA', 'collaborations'],
    'Martin Solveig|Places': ['Ina Wroldsen', 'featured artists', 'collaborations'],
    'Jonas Blue|Perfect Strangers': ['JP Cooper', 'featured artists', 'collaborations'],
    'Jonas Blue|Mama': ['William Singe', 'featured artists', 'collaborations'],
    'Jonas Blue|Rise': ['Jack & Jack', 'featured artists', 'collaborations'],
    'Jonas Blue|Polaroid': ['Liam Payne', 'Lennon Stella', 'collaborations'],
    'Jonas Blue|Fast Car': ['Tracy Chapman', 'Dakota', 'cover versions', 'original artists', 'collaborations'],
    'Jonas Blue|By Your Side': ['Raye', 'featured artists', 'collaborations'],
    'Marshmello|Happier': ['Bastille', 'collaborations'],
    'Marshmello|Friends': ['Anne-Marie', 'collaborations'],
    'Marshmello|Silence': ['Khalid', 'collaborations'],
    'Martin Garrix|Scared to Be Lonely': ['Dua Lipa', 'collaborations'],
    'Martin Garrix|There for You': ['Troye Sivan', 'collaborations'],
    'Martin Garrix|In the Name of Love': ['Bebe Rexha', 'collaborations'],
    'Kungs|This Girl': ['Cookin\' on 3 Burners', 'Kylie Auldist', 'remixes', 'collaborations', '2009 original recordings'],
    'Lost Frequencies|Are You with Me': ['Easton Corbin', 'remixes', 'original artists'],
    'Lost Frequencies|Reality': ['Janieck Devy', 'featured artists', 'collaborations'],
    'Lost Frequencies|Crazy': ['Zonderling', 'collaborations'],
    'Calvin Harris|Slide': ['Frank Ocean', 'Migos', 'featured artists', 'collaborations'],
    'Calvin Harris|One Kiss': ['Dua Lipa', 'collaborations'],
    'Calvin Harris|Under Control': ['Alesso', 'Hurts', 'collaborations', 'featured artists']
};

// Clarify joint recordings when the original wording could imply
// that the named answer was the only credited performer.
const questionCorrections = {
    4: "Which British rapper collaborated with AJ Tracey on 'Thiago Silva'?",
    79: "Which French DJ collaborated with GTA on 'Intoxicated'?",
    87: "Which American DJ collaborated with Bastille on 'Happier'?",
    93: "Which French DJ remixed Cookin' on 3 Burners' 'This Girl' into a hit?",
    96: "Which Belgian DJ collaborated with Zonderling on 'Crazy'?",
    99: "Which Scottish DJ collaborated with Alesso and Hurts on 'Under Control'?"
};

const artists = [
    ...new Set(songs.map(song => song[1]))
];

function makeAnswers(correctArtist, index) {
    const wrongArtists = artists.filter(artist => artist !== correctArtist);
    const answers = [
        correctArtist,
        wrongArtists[index % wrongArtists.length],
        wrongArtists[(index + 11) % wrongArtists.length],
        wrongArtists[(index + 23) % wrongArtists.length]
    ];
    const rotation = index % 4;
    return [
        ...answers.slice(rotation),
        ...answers.slice(0, rotation)
    ];
}

function makeTags(title, artist) {
    const extra = recordingTags[`${artist}|${title}`] || [];
    return [...new Set([
        '2010s',
        'songs',
        'artist identification',
        'recordings',
        ...artistTags[artist],
        ...extra
    ])];
}

const questions = songs.map(([title, artist], index) => ({
    id: 'music_' + String(10167 + index).padStart(4, '0'),
    category: 'Music',
    question: questionCorrections[index] || `Which artist recorded '${title}'?`,
    answers: makeAnswers(artist, index),
    correctAnswer: artist,
    difficulty: index % 3 === 0 ? 'Easy' : 'Medium',
    tags: makeTags(title, artist),
    dailyEligible: true
}));

module.exports = questions;

