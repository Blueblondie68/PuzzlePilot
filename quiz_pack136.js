 // quiz_pack136.js
// PuzzlePilot Big Quiz - Music Pack 136
// Mainly 2020s dance, pop and R&B
// Questions music_11667 to music_11766
// Expanded artist, genre, album and collaboration tags.
// Correct answers and IDs preserved; ambiguous alternatives corrected.

const songs = [

    // Dua Lipa
    ["These Walls", "Dua Lipa"],
    ["Falling Forever", "Dua Lipa"],
    ["End of an Era", "Dua Lipa"],

    // Taylor Swift
    ["Fortnight", "Taylor Swift and Post Malone"],
    ["Karma", "Taylor Swift"],
    ["Lavender Haze", "Taylor Swift"],
    ["Bejeweled", "Taylor Swift"],
    ["I Can Do It with a Broken Heart", "Taylor Swift"],
    ["The Fate of Ophelia", "Taylor Swift"],
    ["Opalite", "Taylor Swift"],
    ["Midnight Rain", "Taylor Swift"],

    // Miley Cyrus
    ["More to Lose", "Miley Cyrus"],
    ["Secrets", "Miley Cyrus"],

    // Ed Sheeran
    ["Azizam", "Ed Sheeran"],
    ["Sapphire", "Ed Sheeran"],

    // Dance and electronic
    ["B.O.T.A. (Baddest of Them All)",
        "Eliza Rose and Interplanetary Criminal"],
    ["Move", "Adam Port, Stryv and Malachiii"],
    ["The Days", "Chrystal"],

    // Purple Disco Machine
    ["Hypnotized",
        "Purple Disco Machine and Sophie and the Giants"],
    ["In the Dark",
        "Purple Disco Machine and Sophie and the Giants"],
    ["Substitution",
        "Purple Disco Machine and Kungs"],
    ["Beat of Your Heart",
        "Purple Disco Machine and ÁSDÍS"],
    ["Honey Boy",
        "Purple Disco Machine and Benjamin Ingrosso"],
    ["Dopamine",
        "Purple Disco Machine and Eyelar"],

    // Sophie and the Giants
    ["Paradise", "Sophie and the Giants"],
    ["Shut Up and Dance", "Sophie and the Giants"],

    // More dance
    ["Mwaki", "Zerb and Sofiya Nzau"],
    ["Addicted", "Zerb and The Chainsmokers"],
    ["No Bad Vibes", "Jazzy and KILIMANJARO"],
    ["Somedays", "Sonny Fodera, Jazzy and D.O.D"],
    ["Asking", "Sonny Fodera and MK"],
    ["Mind Still", "Sonny Fodera and blythe"],

    // Disclosure
    ["She's Gone, Dance On", "Disclosure"],
    ["Looking for Love", "Disclosure"],

    // SZA
    ["Snooze", "SZA"],
    ["Kill Bill", "SZA"],
    ["Saturn", "SZA"],
    ["Nobody Gets Me", "SZA"],
    ["Shirt", "SZA"],
    ["Good Days", "SZA"],
    ["30 for 30", "SZA and Kendrick Lamar"],
    ["Drive", "SZA"],
    ["BMF", "SZA"],
    ["Scorsese Baby Daddy", "SZA"],

    // Kim Petras
    ["Coconuts", "Kim Petras"],
    ["Alone", "Kim Petras and Nicki Minaj"],
    ["King of Hearts", "Kim Petras"],
    ["If Jesus Was a Rockstar", "Kim Petras"],

    // Meghan Trainor
    ["Made You Look", "Meghan Trainor"],
    ["Mother", "Meghan Trainor"],
    ["To the Moon", "Meghan Trainor"],
    ["Been Like This", "Meghan Trainor and T-Pain"],

    // Sam Smith
    ["Gimme", "Sam Smith, Koffee and Jessie Reyez"],

    // Doja Cat
    ["Paint the Town Red", "Doja Cat"],
    ["Agora Hills", "Doja Cat"],
    ["Attention", "Doja Cat"],
    ["Demons", "Doja Cat"],
    ["Woman", "Doja Cat"],
    ["Kiss Me More", "Doja Cat and SZA"],

    // Muni Long
    ["Hrs and Hrs", "Muni Long"],
    ["Made for Me", "Muni Long"],

    // Libianca
    ["People", "Libianca"],

    // Victoria Monét
    ["On My Mama", "Victoria Monét"],
    ["Alright", "Victoria Monét"],
    ["Party Girls", "Victoria Monét"],
    ["Smoke", "Victoria Monét"],
    ["SOS (Sex on Sight)", "Victoria Monét and Usher"],

    // FLO
    ["Cardboard Box", "FLO"],
    ["Immature", "FLO"],
    ["Fly Girl", "FLO and Missy Elliott"],
    ["Walk Like This", "FLO"],

    // Tems
    ["Me & U", "Tems"],
    ["Love Me JeJe", "Tems"],
    ["Free Mind", "Tems"],
    ["Higher", "Tems"],
    ["Burning", "Tems"],

    // Tinashe
    ["Nasty", "Tinashe"],
    ["Needs", "Tinashe"],
    ["Talk to Me Nice", "Tinashe"],
    ["Getting No Sleep", "Tinashe"],
    ["No Broke Boys", "Tinashe"],

    // Kehlani
    ["After Hours", "Kehlani"],
    ["Next 2 U", "Kehlani"],
    ["Folded", "Kehlani"],
    ["Little Story", "Kehlani"],
    ["Altar", "Kehlani"],

    // Ravyn Lenae
    ["Love Me Not", "Ravyn Lenae"],
    ["Skin Tight", "Ravyn Lenae and Steve Lacy"],
    ["Dream Girl", "Ravyn Lenae"],
    ["One Wish", "Ravyn Lenae"],

    // Becky Hill
    ["Outside of Love", "Becky Hill"],
    ["Never Be Alone", "Becky Hill and Sonny Fodera"],
    ["Right Here", "Becky Hill"],
    ["Side Effects", "Becky Hill and Lewis Thompson"],
    ["True Colours", "Becky Hill and Self Esteem"],

    // More 2020s R&B and pop
    ["Million Dollar Baby", "Tommy Richman"],
    ["Devil Is a Lie", "Tommy Richman"],
    ["Mutt", "Leon Thomas"],
    ["Here We Go (Uh Oh)", "Coco Jones"],
    ["ICU", "Coco Jones"]

];

// Full credited performers. Band names containing "and" are kept intact.
// These entries support fair answer choices and specialist tagging.
const collaborations = {
    "Taylor Swift and Post Malone": ["Taylor Swift", "Post Malone"],
    "Eliza Rose and Interplanetary Criminal": ["Eliza Rose", "Interplanetary Criminal"],
    "Adam Port, Stryv and Malachiii": ["Adam Port", "Stryv", "Malachiii"],
    "Purple Disco Machine and Sophie and the Giants": ["Purple Disco Machine", "Sophie and the Giants"],
    "Purple Disco Machine and Kungs": ["Purple Disco Machine", "Kungs"],
    "Purple Disco Machine and ÁSDÍS": ["Purple Disco Machine", "ÁSDÍS"],
    "Purple Disco Machine and Benjamin Ingrosso": ["Purple Disco Machine", "Benjamin Ingrosso"],
    "Purple Disco Machine and Eyelar": ["Purple Disco Machine", "Eyelar"],
    "Zerb and Sofiya Nzau": ["Zerb", "Sofiya Nzau"],
    "Zerb and The Chainsmokers": ["Zerb", "The Chainsmokers"],
    "Jazzy and KILIMANJARO": ["Jazzy", "KILIMANJARO"],
    "Sonny Fodera, Jazzy and D.O.D": ["Sonny Fodera", "Jazzy", "D.O.D"],
    "Sonny Fodera and MK": ["Sonny Fodera", "MK"],
    "Sonny Fodera and blythe": ["Sonny Fodera", "blythe"],
    "SZA and Kendrick Lamar": ["SZA", "Kendrick Lamar"],
    "Kim Petras and Nicki Minaj": ["Kim Petras", "Nicki Minaj"],
    "Meghan Trainor and T-Pain": ["Meghan Trainor", "T-Pain"],
    "Sam Smith, Koffee and Jessie Reyez": ["Sam Smith", "Koffee", "Jessie Reyez"],
    "Doja Cat and SZA": ["Doja Cat", "SZA"],
    "Victoria Monét and Usher": ["Victoria Monét", "Usher"],
    "FLO and Missy Elliott": ["FLO", "Missy Elliott"],
    "Ravyn Lenae and Steve Lacy": ["Ravyn Lenae", "Steve Lacy"],
    "Becky Hill and Sonny Fodera": ["Becky Hill", "Sonny Fodera"],
    "Becky Hill and Lewis Thompson": ["Becky Hill", "Lewis Thompson"],
    "Becky Hill and Self Esteem": ["Becky Hill", "Self Esteem"]
};

function performers(credit) {
    return collaborations[credit] || [credit];
}

function overlapsArtist(a, b) {
    return performers(a).some(person => performers(b).includes(person));
}

const actTags = {
    "Dua Lipa": ["UK music", "dance-pop", "disco pop", "female vocalists"],
    "Taylor Swift": ["American music", "pop", "singer-songwriters"],
    "Post Malone": ["American music", "pop", "hip hop"],
    "Miley Cyrus": ["American music", "pop rock", "female vocalists"],
    "Ed Sheeran": ["UK music", "pop", "singer-songwriters"],
    "Eliza Rose": ["UK music", "house music", "dance music", "DJs"],
    "Interplanetary Criminal": ["UK music", "UK garage", "dance music", "DJs"],
    "Adam Port": ["German music", "Afro house", "house music", "DJs"],
    "Stryv": ["American music", "Afro house", "music producers"],
    "Malachiii": ["American music", "singers"],
    "Chrystal": ["UK music", "Bolton music", "house music", "dance music"],
    "Purple Disco Machine": ["German music", "nu-disco", "house music", "DJs"],
    "Sophie and the Giants": ["UK music", "indie pop", "dance-pop", "bands"],
    "Kungs": ["French music", "house music", "DJs"],
    "ÁSDÍS": ["Icelandic music", "pop", "female vocalists"],
    "Benjamin Ingrosso": ["Swedish music", "pop", "male vocalists"],
    "Eyelar": ["Dutch music", "pop", "female vocalists"],
    "Zerb": ["Brazilian music", "house music", "DJs"],
    "Sofiya Nzau": ["Kenyan music", "Afro house", "female vocalists"],
    "The Chainsmokers": ["American music", "electronic dance music", "DJ duos"],
    "Jazzy": ["Irish music", "house music", "dance-pop"],
    "KILIMANJARO": ["UK music", "dance music", "DJs"],
    "Sonny Fodera": ["Australian music", "house music", "DJs"],
    "D.O.D": ["UK music", "house music", "DJs"],
    "MK": ["American music", "house music", "DJs"],
    "blythe": ["UK music", "dance-pop", "singers"],
    "Disclosure": ["UK music", "house music", "UK garage", "electronic duos"],
    "SZA": ["American music", "alternative R&B", "neo soul", "singer-songwriters"],
    "Kendrick Lamar": ["American music", "hip hop", "rappers"],
    "Kim Petras": ["German music", "dance-pop", "electropop"],
    "Nicki Minaj": ["American music", "hip hop", "rappers"],
    "Meghan Trainor": ["American music", "pop", "doo-wop influences"],
    "T-Pain": ["American music", "R&B", "hip hop"],
    "Sam Smith": ["UK music", "soul pop", "pop", "singer-songwriters"],
    "Koffee": ["Jamaican music", "reggae", "singers"],
    "Jessie Reyez": ["Canadian music", "R&B", "singer-songwriters"],
    "Doja Cat": ["American music", "hip hop", "R&B", "rappers"],
    "Muni Long": ["American music", "R&B", "singer-songwriters"],
    "Libianca": ["Cameroonian music", "American music", "Afropop", "soul"],
    "Victoria Monét": ["American music", "R&B", "neo soul", "singer-songwriters"],
    "Usher": ["American music", "R&B", "male vocalists"],
    "FLO": ["UK music", "London music", "R&B", "girl groups"],
    "Missy Elliott": ["American music", "hip hop", "rappers"],
    "Tems": ["Nigerian music", "Afrobeats", "alternative R&B", "female vocalists"],
    "Tinashe": ["American music", "R&B", "alternative R&B", "female vocalists"],
    "Kehlani": ["American music", "R&B", "singer-songwriters"],
    "Ravyn Lenae": ["American music", "alternative R&B", "neo soul", "singer-songwriters"],
    "Steve Lacy": ["American music", "alternative R&B", "guitarists"],
    "Becky Hill": ["UK music", "dance-pop", "house music", "female vocalists"],
    "Lewis Thompson": ["UK music", "dance music", "record producers"],
    "Self Esteem": ["UK music", "alternative pop", "female vocalists"],
    "Tommy Richman": ["American music", "R&B", "funk", "male vocalists"],
    "Leon Thomas": ["American music", "R&B", "singer-songwriters"],
    "Coco Jones": ["American music", "R&B", "female vocalists"]
};

// These groupings represent album or EP membership, not necessarily
// the first release date of a single or a later chart breakthrough.
const albumTracks = [
    ["Dua Lipa", "Radical Optimism", "2024 albums", ["These Walls", "Falling Forever", "End of an Era"]],
    ["Taylor Swift", "Midnights", "2022 albums", ["Karma", "Lavender Haze", "Bejeweled", "Midnight Rain"]],
    ["Taylor Swift and Post Malone", "The Tortured Poets Department", "2024 albums", ["Fortnight"]],
    ["Taylor Swift", "The Tortured Poets Department", "2024 albums", ["I Can Do It with a Broken Heart"]],
    ["Taylor Swift", "The Life of a Showgirl", "2025 albums", ["The Fate of Ophelia", "Opalite"]],
    ["Miley Cyrus", "Something Beautiful", "2025 albums", ["More to Lose"]],
    ["Miley Cyrus", "Something Beautiful (Deluxe)", "2025 deluxe albums", ["Secrets"]],
    ["Ed Sheeran", "Play", "2025 albums", ["Azizam", "Sapphire"]],
    ["Disclosure", "Alchemy", "2023 albums", ["Looking for Love"]],
    ["SZA", "SOS", "2022 albums", ["Snooze", "Kill Bill", "Nobody Gets Me", "Shirt", "Good Days"]],
    ["SZA", "SOS Deluxe: LANA", "2024 deluxe albums", ["Saturn", "Drive", "BMF", "Scorsese Baby Daddy"]],
    ["SZA and Kendrick Lamar", "SOS Deluxe: LANA", "2024 deluxe albums", ["30 for 30"]],
    ["Kim Petras", "Feed the Beast", "2023 albums", ["Coconuts", "King of Hearts"]],
    ["Kim Petras and Nicki Minaj", "Feed the Beast", "2023 albums", ["Alone"]],
    ["Meghan Trainor", "Takin' It Back", "2022 albums", ["Made You Look"]],
    ["Meghan Trainor", "Takin' It Back (Deluxe)", "2023 deluxe albums", ["Mother"]],
    ["Meghan Trainor", "Timeless", "2024 albums", ["To the Moon"]],
    ["Meghan Trainor and T-Pain", "Timeless", "2024 albums", ["Been Like This"]],
    ["Sam Smith, Koffee and Jessie Reyez", "Gloria", "2023 albums", ["Gimme"]],
    ["Doja Cat", "Scarlet", "2023 albums", ["Paint the Town Red", "Agora Hills", "Attention", "Demons"]],
    ["Doja Cat", "Planet Her", "2021 albums", ["Woman"]],
    ["Doja Cat and SZA", "Planet Her", "2021 albums", ["Kiss Me More"]],
    ["Muni Long", "Public Displays of Affection", "2021 EPs", ["Hrs and Hrs"]],
    ["Muni Long", "Revenge", "2024 albums", ["Made for Me"]],
    ["Victoria Monét", "Jaguar II", "2023 albums", ["On My Mama", "Alright", "Party Girls", "Smoke"]],
    ["Victoria Monét and Usher", "Jaguar II (Deluxe)", "2024 deluxe albums", ["SOS (Sex on Sight)"]],
    ["FLO", "The Lead", "2022 EPs", ["Cardboard Box", "Immature"]],
    ["FLO", "Access All Areas", "2024 albums", ["Walk Like This"]],
    ["Tems", "For Broken Ears", "2020 EPs", ["Free Mind", "Higher"]],
    ["Tems", "Born in the Wild", "2024 albums", ["Me & U", "Love Me JeJe", "Burning"]],
    ["Tinashe", "BB/ANG3L", "2023 EPs", ["Needs", "Talk to Me Nice"]],
    ["Tinashe", "Quantum Baby", "2024 albums", ["Nasty", "Getting No Sleep", "No Broke Boys"]],
    ["Kehlani", "Crash", "2024 albums", ["After Hours", "Next 2 U"]],
    ["Kehlani", "Blue Water Road", "2022 albums", ["Little Story", "Altar"]],
    ["Ravyn Lenae", "Bird's Eye", "2024 albums", ["Love Me Not", "Dream Girl", "One Wish"]],
    ["Ravyn Lenae and Steve Lacy", "Hypnos", "2022 albums", ["Skin Tight"]],
    ["Becky Hill", "Believe Me Now?", "2024 albums", ["Outside of Love", "Right Here"]],
    ["Becky Hill and Sonny Fodera", "Believe Me Now?", "2024 albums", ["Never Be Alone"]],
    ["Becky Hill and Lewis Thompson", "Believe Me Now?", "2024 albums", ["Side Effects"]],
    ["Becky Hill and Self Esteem", "Believe Me Now?", "2024 albums", ["True Colours"]],
    ["Leon Thomas", "MUTT", "2024 albums", ["Mutt"]],
    ["Coco Jones", "What I Didn't Tell You", "2022 EPs", ["ICU"]]
];

// Recording-specific details make specialist quizzes possible without
// duplicating the same song-and-artist question.
const recordingTags = {
    "Miley Cyrus|Secrets": ["Lindsey Buckingham", "Mick Fleetwood", "Fleetwood Mac", "2025 singles", "featured musicians"],
    "Taylor Swift and Post Malone|Fortnight": ["Post Malone", "collaborations", "2024 singles"],
    "Eliza Rose and Interplanetary Criminal|B.O.T.A. (Baddest of Them All)": ["2022 singles", "UK number ones", "UK garage"],
    "Chrystal|The Days": ["2024 singles", "2025 chart success", "Notion remix"],
    "Adam Port, Stryv and Malachiii|Move": ["Keinemusik", "Afro house", "2024 singles"],
    "Purple Disco Machine and Benjamin Ingrosso|Honey Boy": ["Nile Rodgers", "Shenseea", "featured musicians", "2024 singles"],
    "Purple Disco Machine and Sophie and the Giants|Hypnotized": ["2020 singles", "nu-disco"],
    "Purple Disco Machine and Eyelar|Dopamine": ["2021 singles", "nu-disco"],
    "Sophie and the Giants|Shut Up and Dance": ["2024 singles", "Sophie Scott"],
    "SZA|Good Days": ["2020 singles", "2022 albums"],
    "SZA|Saturn": ["2024 singles", "SOS Deluxe: LANA"],
    "Kim Petras and Nicki Minaj|Alone": ["Nicki Minaj", "collaborations", "2023 singles"],
    "Meghan Trainor|Mother": ["2023 singles", "Takin' It Back (Deluxe)"],
    "Doja Cat|Woman": ["2021 singles", "Afrobeats influences"],
    "Tems|Higher": ["2020 songs", "For Broken Ears"],
    "Tems|Burning": ["2024 singles", "Born in the Wild"],
    "Tinashe|Nasty": ["2024 singles", "viral songs"],
    "Libianca|People": ["2022 singles", "Afropop", "breakthrough hits"],
    "Doja Cat|Demons": ["2023 singles", "Scarlet"],
    "Ravyn Lenae|Dream Girl": ["Ty Dolla $ign", "featured artists", "2024 singles"],
    "Ravyn Lenae|One Wish": ["Childish Gambino", "Donald Glover", "featured artists"],
    "Becky Hill|Right Here": ["2024 songs", "Believe Me Now?", "Chase & Status production"],
    "Kehlani|Folded": ["2025 singles"],
    "Tinashe|No Broke Boys": ["2024 songs", "2025 remixes"]
};

// Earlier packs used some of these titles for DIFFERENT artists.
// These questions must remain unambiguous even if both recordings
// occur in a mixed quiz. Dates are only in the question where helpful.
const questionCorrections = {
    "Miley Cyrus|Secrets": "Which American singer released 'Secrets' featuring Lindsey Buckingham and Mick Fleetwood?",
    "Kim Petras and Nicki Minaj|Alone": "Which German pop singer and American rapper collaborated on 'Alone'?",
    "Meghan Trainor|Mother": "Which American pop singer recorded 'Mother' for the deluxe album Takin' It Back?",
    "Doja Cat|Woman": "Which American rapper and singer recorded the Afrobeats-influenced song 'Woman'?",
    "Tems|Higher": "Which Nigerian singer released 'Higher' on the EP For Broken Ears?",
    "Tems|Burning": "Which Nigerian singer recorded 'Burning' for the album Born in the Wild?",
    "Tinashe|Nasty": "Which American R&B singer released the viral 2024 track 'Nasty'?",
    "Libianca|People": "Which Cameroonian-American singer had a breakthrough hit with 'People'?",
    "Doja Cat|Demons": "Which American rapper released 'Demons' on the album Scarlet?",
    "Becky Hill|Right Here": "Which British dance singer included 'Right Here' on her album Believe Me Now?",
    "Ravyn Lenae|Dream Girl": "Which American singer released 'Dream Girl' with Ty Dolla $ign?",
    "Ravyn Lenae|One Wish": "Which American singer recorded 'One Wish' featuring Childish Gambino?",
    "Purple Disco Machine and Benjamin Ingrosso|Honey Boy": "Which German DJ and Swedish singer released 'Honey Boy' featuring Nile Rodgers and Shenseea?",
    "Adam Port, Stryv and Malachiii|Move": "Which three artists released the Afro-house hit 'Move'?"
};

function makeTags(title, artist) {
    const album = albumTracks.find(([credit, , , tracks]) =>
        credit === artist && tracks.includes(title)
    );
    const members = performers(artist);
    return [...new Set([
        "2020s", "songs", "recordings", "artist identification",
        artist, ...members,
        ...(members.length > 1 ? ["collaborations", "joint artist credits"] : []),
        ...members.flatMap(name => actTags[name] || []),
        ...(album ? [album[1], album[2]] : []),
        ...(recordingTags[`${artist}|${title}`] || [])
    ])];
}

// =====================================================
// SOURCE AND ANSWER VALIDATION
// =====================================================

if (songs.length !== 100) {
    throw new Error("Pack 136 must contain 100 songs; found " + songs.length);
}

const normalise = value => String(value || "")
    .toLowerCase().replace(/[^a-z0-9]/g, "");
const songKeys = new Set();
for (const [song, artist] of songs) {
    const key = normalise(song) + "|" + normalise(artist);
    if (songKeys.has(key)) throw new Error("Repeated recording: " + song);
    songKeys.add(key);
}

const artistPool = [...new Set(songs.map(entry => entry[1]))];
if (artistPool.length < 4) throw new Error("Not enough artists");

function makeAnswers(artist, index) {
    const otherArtists = artistPool.filter(name => name !== artist);
    const wrongAnswers = [];
    const start = (index * 7) % otherArtists.length;
    for (let i = 0; i < 3; i++) {
        const candidate = otherArtists[(start + i * 11) % otherArtists.length];
        if (!wrongAnswers.includes(candidate)) wrongAnswers.push(candidate);
    }
    for (const candidate of otherArtists) {
        if (wrongAnswers.length === 3) break;
        if (!wrongAnswers.includes(candidate)) wrongAnswers.push(candidate);
    }

    // Replace ONLY a misleading distractor whose artist belongs to the
    // correct credit (or whose credit includes the correct solo artist).
    for (let i = 0; i < wrongAnswers.length; i++) {
        if (overlapsArtist(artist, wrongAnswers[i])) {
            const replacement = artistPool.find(candidate =>
                !overlapsArtist(artist, candidate) &&
                !wrongAnswers.includes(candidate)
            );
            if (!replacement) throw new Error("No unambiguous answer choices");
            wrongAnswers[i] = replacement;
        }
    }
    const answers = [artist, ...wrongAnswers];
    const shift = index % 4;
    return [...answers.slice(shift), ...answers.slice(0, shift)];
}

const quizPack136 = songs.map(([song, artist], index) => {
    const key = `${artist}|${song}`;
    const isCollaboration = performers(artist).length > 1;
    return {
        id: "music_" + (11667 + index),
        category: "Music",
        question: questionCorrections[key] ||
            (isCollaboration
                ? "Which artists collaborated on '" + song + "'?"
                : "Which artist recorded '" + song + "'?"),
        answers: makeAnswers(artist, index),
        correctAnswer: artist,
        difficulty: index % 3 === 0 ? "Easy" : "Medium",
        tags: makeTags(song, artist),
        dailyEligible: true
    };
});

for (const q of quizPack136) {
    if (q.answers.length !== 4 || new Set(q.answers).size !== 4 ||
        !q.answers.includes(q.correctAnswer) ||
        q.answers.some(answer => answer !== q.correctAnswer &&
            overlapsArtist(q.correctAnswer, answer)) ||
        !Array.isArray(q.tags) || q.tags.length < 5) {
        throw new Error("Pack 136 question failed validation: " + q.id);
    }
}

module.exports = quizPack136;
