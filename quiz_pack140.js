//
// quiz_pack140.js
// PuzzlePilot Big Quiz - Music Pack 140
// 2020s pop, indie, dance and R&B; music_12001 to music_12100
// Original IDs preserved; corrected two mistaken collaborative credits.
// Two duplicate song-identification questions are now different music trivia.
// One unsupported song credit replaced with a verified debut-album question.
//

const songs = [

    // =====================================================
    // DANCE AND POP
    // =====================================================

    // Joel Corry
    ["Lonely", "Joel Corry"],
    ["People Pleaser", "Cat Burns"],
    ["Out Out", "Joel Corry and Jax Jones"],
    ["I Wish", "Joel Corry and Mabel"],
    ["Lionheart (Fearless)", "Joel Corry and Tom Grennan"],
    ["Dance Around It", "Joel Corry and Caity Baser"],
    ["History", "Joel Corry and Becky Hill"],

    // Nathan Dawe
    ["Know That You're Not Alone", "Cat Burns"],
    ["Lighter", "Nathan Dawe and KSI"],
    ["No Time for Tears", "Nathan Dawe and Little Mix"],
    ["Goodbye", "Nathan Dawe and T. Matthias"],
    ["We Ain't Here for Long", "Nathan Dawe"],
    ["Heart Still Beating", "Nathan Dawe and Bebe Rexha"],
    ["Ten (Get Back Up)", "Nathan Dawe and MNEK"],
    ["Here in Your Arms", "Nathan Dawe and Abi Flynn"],
    ["Way Too Long", "Nathan Dawe, Anne-Marie and MoStack"],

    // Topic
    ["Breaking Me", "Topic and A7S"],
    ["Your Love (9PM)", "ATB, Topic and A7S"],
    ["Kernkraft 400 (A Better Day)", "Topic and A7S"],
    ["Chain My Heart", "Topic and Bebe Rexha"],
    ["In Your Arms (For an Angel)", "Topic, Robin Schulz and Nico Santos"],
    ["Why Do You Lie to Me", "Topic, A7S and Lil Baby"],
    ["All or Nothing", "Topic and HRVY"],
    ["Saving Me", "Topic and Sasha Alex Sloan"],
    ["I Adore You", "HUGEL, Topic and Arash"],
    ["Lucid Dream", "Topic"],

    // LF SYSTEM
    ["Hungry (For Love)", "LF SYSTEM"],
    ["Dancing Shoes (Take Me Higher)", "LF SYSTEM"],
    ["All I've Got", "LF SYSTEM"],
    ["Meet Me in the Middle", "LF SYSTEM"],

    // Eliza Rose
    ["Take You There", "Eliza Rose"],
    ["Pleasure Peak", "Eliza Rose"],
    ["Body Moving", "Eliza Rose and Calvin Harris"],
    ["Better Love", "Eliza Rose"],

    // Becky Hill
    ["Crazy What Love Can Do", "David Guetta, Becky Hill and Ella Henderson"],
    ["Remember", "Becky Hill and David Guetta"],
    ["My Heart Goes (La Di Da)", "Becky Hill and Topic"],
    ["Disconnect", "Becky Hill and Chase & Status"],
    ["Multiply", "Becky Hill"],

    // =====================================================
    // BRITISH INDIE AND ROCK
    // =====================================================

    // Sam Fender
    ["Long Way Off", "Sam Fender"],
    ["Remember My Name", "Sam Fender"],
    ["Wild Long Lie", "Sam Fender"],

    // Nothing But Thieves
    ["City Haunts", "Nothing But Thieves"],
    ["Moral Panic", "Nothing But Thieves"],
    ["Unperson", "Nothing But Thieves"],

    // The Last Dinner Party
    ["On Your Side", "The Last Dinner Party"],
    ["Burn Alive", "The Last Dinner Party"],
    ["Mirror", "The Last Dinner Party"],
    ["Gjuha", "The Last Dinner Party"],
    ["Beautiful Boy", "The Last Dinner Party"],

    // Blossoms
    ["End Game", "Cat Burns"],
    ["Oh No (I Think I'm in Love)", "Blossoms"],
    ["Care For", "Blossoms"],
    ["Ribbon Around the Bomb", "Blossoms"],
    ["Ode to NYC", "Blossoms"],
    ["Gary", "Blossoms"],
    ["Perfect Me", "Blossoms"],
    ["What Can I Say After I'm Sorry?", "Blossoms"],

    // Wolf Alice
    ["Play the Greatest Hits", "Wolf Alice"],
    ["Lipstick on the Glass", "Wolf Alice"],
    ["Feeling Myself", "Wolf Alice"],
    ["No Hard Feelings", "Wolf Alice"],
    ["Safe from Heartbreak (If You Never Fall in Love)", "Wolf Alice"],

    // =====================================================
    // R&B, SOUL AND ALTERNATIVE POP
    // =====================================================

    // SZA
    ["I Hate U", "SZA"],
    ["Blind", "SZA"],
    ["Gone Girl", "SZA"],
    ["Seek & Destroy", "SZA"],
    ["F2F", "SZA"],

    // Victoria Monét
    ["How Does It Make You Feel", "Victoria Monét"],
    ["Cadillac (A Pimp's Anthem)", "Victoria Monét"],
    ["Hollywood", "Victoria Monét"],
    ["Coastin'", "Victoria Monét"],
    ["Moment", "Victoria Monét"],
    ["NDA", "Billie Eilish"],

    // Tyla
    ["On and On", "Tyla"],
    ["Safer", "Tyla"],
    ["Butterflies", "Tyla"],
    ["Been Thinking", "Tyla"],
    ["Chanel", "Tyla"],

    // PinkPantheress
    ["Boy's a Liar", "PinkPantheress"],
    ["Passion", "PinkPantheress"],
    ["I Must Apologise", "PinkPantheress"],
    ["Mosquito", "PinkPantheress"],
    ["Capable of Love", "PinkPantheress"],
    ["Nice to Meet You", "PinkPantheress"],

    // Olivia Dean
    ["Be My Own Boyfriend", "Olivia Dean"],
    ["Reason to Stay", "Olivia Dean"],
    ["Danger", "Olivia Dean"],
    ["Male Fantasy", "Billie Eilish"],

    // RAYE
    ["Flip a Switch.", "RAYE"],
    ["Where Is My Husband!", "RAYE"],
    ["Suzanne", "Mark Ronson and RAYE"],

    // =====================================================
    // FINAL EIGHT
    // =====================================================

    // Tom Grennan
    ["Wasted", "Tom Grennan"],
    ["Here", "Tom Grennan"],
    ["Remind Me", "Tom Grennan"],
    ["All These Nights", "Tom Grennan"],
    ["How Does It Feel", "Tom Grennan"],

    // Lewis Capaldi
    ["Strangers", "Lewis Capaldi"],
    ["Heavenly Kind of State of Mind", "Lewis Capaldi"],

    // Cat Burns
    ["early twenties", "Cat Burns"]

];

// Recording years follow the corresponding entries in songs[].
// Years refer to the original recording or original single, not its
// later album release or chart breakthrough.
const releaseYears = [
    2020, 2022, 2021, 2021, 2022, 2023, 2022, 2023, 2020, 2020,
    2021, 2024, 2023, 2024, 2025, 2021, 2020, 2021, 2022, 2021,
    2022, 2020, 2022, 2023, 2024, 2023, 2022, 2023, 2024, 2024,
    2023, 2023, 2023, 2023, 2022, 2021, 2021, 2023, 2024, 2021,
    2025, 2024, 2023, 2020, 2020, 2024, 2024, 2024, 2024, 2024,
    2024, 2020, 2021, 2022, 2022, 2024, 2024, 2024, 2021, 2021,
    2021, 2021, 2021, 2021, 2022, 2022, 2022, 2022, 2023, 2023,
    2023, 2021, 2020, 2021, 2023, 2024, 2024, 2023, 2025, 2022,
    2021, 2021, 2023, 2023, 2023, 2023, 2021, 2023, 2021, 2023,
    2025, 2025, 2023, 2023, 2022, 2022, 2023, 2024, 2023, 2024
];

// Stable profiles are assembled for solo artists and collaborations.
// A multi-artist credit has its own accurate participating-act tags.
const actTags = {
    "Joel Corry": ["UK music", "house music", "dance music", "DJs"],
    "Cat Burns": ["UK music", "London music", "pop", "soul pop", "singer-songwriters"],
    "Jax Jones": ["UK music", "house music", "dance music", "DJs"],
    "Mabel": ["UK music", "dance-pop", "pop", "female vocalists"],
    "Tom Grennan": ["UK music", "pop rock", "indie pop", "singer-songwriters"],
    "Caity Baser": ["UK music", "pop", "female vocalists"],
    "Becky Hill": ["UK music", "dance-pop", "house music", "female vocalists"],
    "Nathan Dawe": ["UK music", "dance music", "house music", "DJs"],
    "KSI": ["UK music", "pop rap", "rappers"],
    "Little Mix": ["UK music", "girl groups", "pop", "The X Factor"],
    "T. Matthias": ["UK music", "dance music", "record producers"],
    "Bebe Rexha": ["American music", "pop", "dance-pop", "female vocalists"],
    "MNEK": ["UK music", "pop", "dance-pop", "songwriters"],
    "Abi Flynn": ["UK music", "dance-pop", "female vocalists"],
    "Anne-Marie": ["UK music", "pop", "female vocalists"],
    "MoStack": ["UK music", "British hip hop", "rappers"],
    "Topic": ["German music", "dance music", "house music", "DJs"],
    "A7S": ["Swedish music", "dance-pop", "male vocalists"],
    "ATB": ["German music", "trance", "DJs"],
    "Robin Schulz": ["German music", "house music", "DJs"],
    "Nico Santos": ["German music", "pop", "male vocalists"],
    "Lil Baby": ["American music", "hip hop", "rappers"],
    "HRVY": ["UK music", "pop", "male vocalists"],
    "Sasha Alex Sloan": ["American music", "indie pop", "singer-songwriters"],
    "HUGEL": ["French music", "house music", "DJs"],
    "Arash": ["Iranian music", "Swedish music", "dance-pop", "male vocalists"],
    "LF SYSTEM": ["Scottish music", "UK music", "house music", "DJ duos"],
    "Eliza Rose": ["UK music", "London music", "house music", "UK garage", "female vocalists"],
    "Calvin Harris": ["Scottish music", "UK music", "house music", "DJs"],
    "David Guetta": ["French music", "house music", "DJs"],
    "Ella Henderson": ["UK music", "pop", "dance-pop", "The X Factor"],
    "Chase & Status": ["UK music", "drum and bass", "electronic music", "DJ duos"],
    "Sam Fender": ["UK music", "Newcastle music", "heartland rock", "indie rock", "singer-songwriters"],
    "Nothing But Thieves": ["UK music", "Essex music", "alternative rock", "rock bands"],
    "The Last Dinner Party": ["UK music", "London music", "baroque pop", "indie rock", "rock bands"],
    "Blossoms": ["UK music", "Manchester music", "indie pop", "Britpop", "rock bands"],
    "Wolf Alice": ["UK music", "London music", "indie rock", "alternative rock", "rock bands"],
    "SZA": ["American music", "alternative R&B", "neo soul", "singer-songwriters"],
    "Victoria Monét": ["American music", "R&B", "neo soul", "singer-songwriters"],
    "Billie Eilish": ["American music", "alternative pop", "pop", "singer-songwriters"],
    "Tyla": ["South African music", "amapiano", "Afropop", "R&B"],
    "PinkPantheress": ["UK music", "UK garage", "drum and bass", "electronic pop"],
    "Olivia Dean": ["UK music", "London music", "soul pop", "neo soul", "singer-songwriters"],
    "RAYE": ["UK music", "R&B", "soul pop", "singer-songwriters"],
    "Mark Ronson": ["UK music", "funk", "soul", "record producers"],
    "Lewis Capaldi": ["Scottish music", "UK music", "pop ballads", "singer-songwriters"]
};

// These titles belong to albums as well as to specialist quiz subjects.
// Album year tags do not replace the original release year above.
const albumTracks = [
    ["Cat Burns", "early twenties", ["People Pleaser", "Know That You're Not Alone", "End Game"]],
    ["Sam Fender", "Seventeen Going Under", ["Long Way Off"]],
    ["Sam Fender", "People Watching", ["Remember My Name", "Wild Long Lie"]],
    ["Nothing But Thieves", "Moral Panic", ["Moral Panic", "Unperson"]],
    ["Nothing But Thieves", "Dead Club City", ["City Haunts"]],
    ["The Last Dinner Party", "Prelude to Ecstasy", ["On Your Side", "Burn Alive", "Mirror", "Gjuha", "Beautiful Boy"]],
    ["Blossoms", "Foolish Loving Spaces", ["Oh No (I Think I'm in Love)"]],
    ["Blossoms", "Ribbon Around the Bomb", ["Care For", "Ribbon Around the Bomb", "Ode to NYC"]],
    ["Blossoms", "Gary", ["Gary", "Perfect Me", "What Can I Say After I'm Sorry?"]],
    ["Wolf Alice", "Blue Weekend", ["Play the Greatest Hits", "Lipstick on the Glass", "Feeling Myself", "No Hard Feelings", "Safe from Heartbreak (If You Never Fall in Love)"]],
    ["SZA", "SOS", ["I Hate U", "Blind", "Gone Girl", "Seek & Destroy", "F2F"]],
    ["Victoria Monét", "Jaguar II", ["How Does It Make You Feel", "Cadillac (A Pimp's Anthem)", "Hollywood"]],
    ["Victoria Monét", "Jaguar", ["Moment"]],
    ["Billie Eilish", "Happier Than Ever", ["NDA", "Male Fantasy"]],
    ["Tyla", "TYLA", ["On and On", "Safer", "Butterflies", "Been Thinking"]],
    ["PinkPantheress", "Take Me Home", ["Boy's a Liar"]],
    ["PinkPantheress", "to hell with it", ["Passion", "I Must Apologise"]],
    ["PinkPantheress", "Heaven knows", ["Mosquito", "Capable of Love", "Nice to Meet You"]],
    ["Olivia Dean", "Messy", ["Be My Own Boyfriend", "Reason to Stay", "Danger"]],
    ["RAYE", "My 21st Century Blues", ["Flip a Switch."]],
    ["Tom Grennan", "What Ifs & Maybes", ["Wasted", "Here", "Remind Me", "All These Nights", "How Does It Feel"]],
    ["Lewis Capaldi", "Broken by Desire to Be Heavenly Sent", ["Heavenly Kind of State of Mind"]]
];

// A credit such as 'Sophie and the Giants' would be a band name,
// but every 'and' or comma credit used in this pack is a collaboration.
function creditedActs(credit) {
    return credit.split(/,\s*|\s+and\s+/).map(name => name.trim());
}
function overlapsArtist(a, b) {
    return creditedActs(a).some(name => creditedActs(b).includes(name));
}

const recordingTags = {
    "Out Out": ["Charli XCX", "Saweetie", "featured vocalists", "2021 singles"],
    "People Pleaser": ["2022 singles", "early twenties"],
    "Know That You're Not Alone": ["2023 singles", "early twenties"],
    "Goodbye": ["T. Matthias", "2021 singles"],
    "Here in Your Arms": ["Abi Flynn", "2025 singles"],
    "Lucid Dream": ["2023 singles"],
    "I Adore You": ["Daecolm", "featured vocalists", "2024 singles"],
    "Pleasure Peak": ["The Martinez Brothers", "collaborations", "2023 singles"],
    "Better Love": ["2023 singles", "house music"],
    "Body Moving": ["Calvin Harris", "2023 singles"],
    "Disconnect": ["Becky Hill", "Chase & Status", "2 RUFF, Vol. 1", "2023 singles"],
    "End Game": ["2024 singles", "early twenties", "title shared by different artists"],
    "Gjuha": ["Albanian language", "Aurora Nishevci", "Prelude to Ecstasy"],
    "I Hate U": ["2021 singles", "SOS"],
    "Hollywood": ["Earth, Wind & Fire", "Hazel Monét", "featured musicians"],
    "Chanel": ["2025 singles", "amapiano"],
    "Boy's a Liar": ["2022 original versions", "2023 remixes", "Ice Spice"],
    "Nice to Meet You": ["Central Cee", "featured rappers", "Heaven knows", "2023 singles"],
    "Where Is My Husband!": ["2025 singles"],
    "Suzanne": ["2025 singles", "Mark Ronson", "RAYE", "collaborations"],
    "Strangers": ["2024 singles", "title shared by different artists"]
};

// Only titles with competing recordings, misleading credits or
// special versions need different player-facing wording.
const questionCorrections = {
    "Joel Corry and Becky Hill|History": "Which British DJ and singer released the 2022 dance single 'History'?",
    "Nathan Dawe and T. Matthias|Goodbye": "Which two dance producers released the 2021 single 'Goodbye'?",
    "Eliza Rose|Pleasure Peak": "Which British singer collaborated with The Martinez Brothers on 'Pleasure Peak'?",
    "Eliza Rose|Better Love": "Which London dance singer released 'Better Love' in 2023?",
    "Cat Burns|End Game": "Which British singer recorded 'end game' for her debut album early twenties?",
    "PinkPantheress|Boy's a Liar": "Which British singer released the original 2022 version of 'Boy's a liar' before the Ice Spice remix?",
    "Lewis Capaldi|Strangers": "Which Scottish singer released 'Strangers' in 2024?",
    "The Last Dinner Party|Gjuha": "Which British indie-rock band recorded the Albanian-language song 'Gjuha'?",
    "Blossoms|Gary": "Which Manchester indie band recorded the song 'Gary' for its 2024 album of the same name?",
    "Nathan Dawe and Abi Flynn|Here in Your Arms": "Which British DJ and singer recorded 'Here in Your Arms' in 2025?",
    "Joel Corry and Jax Jones|Out Out": "Which two British DJs collaborated on 'Out Out', featuring Charli XCX and Saweetie?",
    "HUGEL, Topic and Arash|I Adore You": "Which three lead artists released 'I Adore You' featuring Daecolm?"
};

// Different kinds of music trivia replace two questions already asked
// in Pack 134 and an unsupported song credit in the source list.
const specialQuestions = {
    37: {
        question: "On which Chase & Status album does the Becky Hill collaboration 'Disconnect' appear?",
        correctAnswer: "2 RUFF, Vol. 1",
        answers: ["Believe Me Now?", "2 RUFF, Vol. 1", "Dead Club City", "Alchemy"],
        extraTags: ["album identification", "Chase & Status", "Becky Hill", "2023 albums"]
    },
    84: {
        question: "Which British rapper features on PinkPantheress's 2023 song 'Nice to meet you'?",
        correctAnswer: "Central Cee",
        answers: ["Dave", "Stormzy", "Central Cee", "Aitch"],
        extraTags: ["featured artists", "rappers", "Central Cee", "PinkPantheress", "Heaven knows"]
    },
    99: {
        question: "What is the title of Cat Burns' debut studio album, released in 2024?",
        correctAnswer: "early twenties",
        answers: ["How to Be Human", "Messy", "early twenties", "The Secret of Us"],
        extraTags: ["album identification", "debut albums", "Cat Burns", "2024 albums"]
    }
};

function makeTags(song, artist, year, special) {
    const members = creditedActs(artist);
    const album = albumTracks.find(([name, , tracks]) =>
        name === artist && tracks.includes(song)
    );
    return [...new Set([
        "2020s", String(year), "Music",
        ...(special && (special.extraTags.includes("album identification")) ?
            ["albums", "album identification"] : ["songs", "recordings"]),
        special ? "specialist music trivia" : "artist identification",
        artist, ...members,
        ...(members.length > 1 ? ["collaborations", "joint artist credits"] : []),
        ...members.flatMap(name => actTags[name] || []),
        ...(album ? [album[1]] : []),
        ...(recordingTags[song] || []),
        ...(special ? special.extraTags : [])
    ])];
}

// =====================================================
// SOURCE VALIDATION
// =====================================================

if (songs.length !== 100) {
    throw new Error(
        "Pack 140 must contain exactly 100 songs. Found: " +
        songs.length
    );
}

const normalise = value => String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

const songKeys = new Set();

for (const [song, artist] of songs) {

    const key =
        normalise(song) + "|" +
        normalise(artist);

    if (songKeys.has(key)) {
        throw new Error(
            "Repeated song and artist: " +
            song + " - " + artist
        );
    }

    songKeys.add(key);
}

// =====================================================
// ARTIST POOL
// =====================================================

const artistPool = [
    ...new Set(songs.map(entry =>
        (entry[0] === "Goodbye" || entry[0] === "Here in Your Arms") ?
            "Nathan Dawe and Talia Mar" : entry[1]
    ))
];
const validArtistPool = [...new Set(songs.map(entry => entry[1]))];

if (artistPool.length < 4) {
    throw new Error(
        "Not enough distinct artists for answer choices."
    );
}

// =====================================================
// GENERATE QUESTIONS
// =====================================================

const quizPack140 = songs.map(([song, artist], index) => {
    const special = specialQuestions[index];

    // Recreate the original artist pool to preserve unchanged choices.
    // The two old Nathan Dawe miscredits are filtered from other answers.
    const originalCredit = (song === "Goodbye" || song === "Here in Your Arms") ?
        "Nathan Dawe and Talia Mar" : artist;
    const otherArtists = artistPool.filter(name => name !== originalCredit);
    const start = (index * 7) % otherArtists.length;
    const wrongAnswers = [0, 1, 2].map(i =>
        otherArtists[(start + i) % otherArtists.length]
    );

    // A solo artist must not appear as a distractor against a duet
    // including that artist, and vice versa.
    for (let i = 0; i < wrongAnswers.length; i++) {
        if (wrongAnswers[i] === "Nathan Dawe and Talia Mar" ||
            overlapsArtist(artist, wrongAnswers[i])) {
            const replacement = validArtistPool.find(name =>
                !overlapsArtist(artist, name) && !wrongAnswers.includes(name)
            );
            if (!replacement) throw new Error("No fair artist distractor");
            wrongAnswers[i] = replacement;
        }
    }

    const answerList = [artist, ...wrongAnswers];
    const answers = special ? special.answers : answerList;
    const shift = index % 4;
    const questionKey = `${artist}|${song}`;
    return {
        id: "music_" + (12001 + index),
        category: "Music",
        question: special ? special.question :
            (questionCorrections[questionKey] ||
             (creditedActs(artist).length > 1 ?
                "Which artists collaborated on '" + song + "'?" :
                "Which artist recorded '" + song + "'?")),
        answers: [...answers.slice(shift), ...answers.slice(0, shift)],
        correctAnswer: special ? special.correctAnswer : artist,
        difficulty: index % 3 === 0 ? "Easy" : "Medium",
        tags: makeTags(song, artist, releaseYears[index], special),
        dailyEligible: true
    };
});

// =====================================================
// FINAL VALIDATION
// =====================================================

if (songs.length !== 100 || releaseYears.length !== 100) {
    throw new Error("Pack 140 must have 100 recordings and release-year entries");
}
for (const [index, question] of quizPack140.entries()) {
    const special = specialQuestions[index];
    if (question.id !== "music_" + (12001 + index) ||
        question.answers.length !== 4 ||
        new Set(question.answers).size !== 4 ||
        !question.answers.includes(question.correctAnswer) ||
        !Array.isArray(question.tags) || question.tags.length < 7 ||
        question.dailyEligible !== true ||
        (!special && question.answers.some(choice =>
            choice !== question.correctAnswer &&
            overlapsArtist(choice, question.correctAnswer)))) {
        throw new Error("Pack 140 question failed validation: " + question.id);
    }
}
if (quizPack140[0].id !== "music_12001" ||
    quizPack140[99].id !== "music_12100") {
    throw new Error("Pack 140 ID range is wrong");
}

module.exports = quizPack140;
