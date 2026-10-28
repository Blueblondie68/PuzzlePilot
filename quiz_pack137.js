// quiz_pack137.js
// PuzzlePilot Big Quiz - Music Pack 137
// 2020s rock, indie, alternative and post-punk
// 100 questions; IDs music_11767 to music_11866
// Original song/artist IDs retained; complete specialist tags.

const songs = [

    // Sam Fender
    ["Getting Started", "Sam Fender"],
    ["The Dying Light", "Sam Fender"],
    ["Wild Grey Ocean", "Sam Fender"],

    // The Last Dinner Party
    ["Nothing Matters", "The Last Dinner Party"],
    ["Sinner", "The Last Dinner Party"],
    ["My Lady of Mercy", "The Last Dinner Party"],
    ["The Feminine Urge", "The Last Dinner Party"],
    ["Caesar on a TV Screen", "The Last Dinner Party"],

    // Wolf Alice
    ["The Beach", "Wolf Alice"],
    ["How Can I Make It OK?", "Wolf Alice"],
    ["The Last Man on Earth", "Wolf Alice"],
    ["Delicious Things", "Wolf Alice"],

    // Royal Blood
    ["Trouble's Coming", "Royal Blood"],
    ["Typhoons", "Royal Blood"],
    ["Boilermaker", "Royal Blood"],
    ["Mountains at Midnight", "Royal Blood"],
    ["Pull Me Through", "Royal Blood"],

    // Blur
    ["The Heights", "Blur"],

    // Fontaines D.C.
    ["A Hero's Death", "Fontaines D.C."],
    ["Skinty Fia", "Fontaines D.C."],
    ["Nabokov", "Fontaines D.C."],
    ["Big Shot", "Fontaines D.C."],

    // The Beaches
    ["Blame Brett", "The Beaches"],
    ["Edge of the Earth", "The Beaches"],

    // Yard Act
    ["The Overload", "Yard Act"],
    ["Fixer Upper", "Yard Act"],
    ["Land of the Blind", "Yard Act"],
    ["Dream Job", "Yard Act"],
    ["We Make Hits", "Yard Act"],

    // IDLES
    ["Model Village", "IDLES"],
    ["Car Crash", "IDLES"],
    ["The Beachland Ballroom", "IDLES"],
    ["Dancer", "IDLES"],
    ["Gift Horse", "IDLES"],

    // Dry Cleaning
    ["Scratchcard Lanyard", "Dry Cleaning"],
    ["Strong Feelings", "Dry Cleaning"],
    ["Unsmart Lady", "Dry Cleaning"],
    ["Gary Ashby", "Dry Cleaning"],
    ["Hot Penny Day", "Dry Cleaning"],

    // Shame
    ["Snow Day", "Shame"],
    ["Water in the Well", "Shame"],
    ["Adderall", "Shame"],
    ["Fingers of Steel", "Shame"],
    ["Six-Pack", "Shame"],

    // Black Country, New Road
    ["Concorde", "Black Country, New Road"],
    ["Chaos Space Marine", "Black Country, New Road"],
    ["The Place Where He Inserted the Blade",
        "Black Country, New Road"],
    ["Up Song", "Black Country, New Road"],
    ["Across the Pond Friend", "Black Country, New Road"],
    ["Bread Song", "Black Country, New Road"],
    ["Good Will Hunting", "Black Country, New Road"],
    ["Basketball Shoes", "Black Country, New Road"],

    // The Dare
    ["Perfume", "The Dare"],
    ["Girls", "The Dare"],
    ["Good Time", "The Dare"],
    ["All Night", "The Dare"],
    ["You're Invited", "The Dare"],

    // Jack White
    ["Love Is Selfish", "Jack White"],
    ["Taking Me Back", "Jack White"],
    ["What's the Trick?", "Jack White"],
    ["A Tip from You to Me", "Jack White"],
    ["That Was Then (This Is Now)", "Jack White"],

    // The Strokes
    ["Ode to the Mets", "The Strokes"],
    ["Selfless", "The Strokes"],

    // Bring Me the Horizon
    ["Lost", "Bring Me the Horizon"],
    ["Kool-Aid", "Bring Me the Horizon"],
    ["DArkSide", "Bring Me the Horizon"],
    ["Teardrops", "Bring Me the Horizon"],
    ["Parasite Eve", "Bring Me the Horizon"],

    // Blink-182
    ["Edging", "Blink-182"],
    ["One More Time", "Blink-182"],
    ["Dance with Me", "Blink-182"],
    ["More Than You Know", "Blink-182"],
    ["All in My Head", "Blink-182"],

    // The Black Keys
    ["Beautiful People", "The Black Keys"],
    ["Wild Child", "The Black Keys"],
    ["It Ain't Over", "The Black Keys"],
    ["On the Game", "The Black Keys"],

    // The Killers
    ["Your Side of Town", "The Killers"],
    ["Boy", "The Killers"],
    ["Spirit", "The Killers"],
    ["Caution", "The Killers"],
    ["Dying Breed", "The Killers"],

    // Muse
    ["We Are Fucking Fucked", "Muse"],

    // Nothing But Thieves
    ["Welcome to the DCC", "Nothing But Thieves"],
    ["Overcome", "Nothing But Thieves"],
    ["Tomorrow Is Closed", "Nothing But Thieves"],
    ["Keeping You Around", "Nothing But Thieves"],
    ["Oh No :: He Said What?", "Nothing But Thieves"],
    ["Is Everybody Going Crazy?", "Nothing But Thieves"],
    ["Impossible", "Nothing But Thieves"],
    ["Real Love Song", "Nothing But Thieves"],
    ["Futureproof", "Nothing But Thieves"],
    ["Life's Coming in Slow", "Nothing But Thieves"],

    // The Snuts
    ["Fatboy Slim", "The Snuts"],
    ["Coffee & Cigarettes", "The Snuts"],
    ["Elephants", "The Snuts"],
    ["Burn the Empire", "The Snuts"],
    ["Zuckerpunch", "The Snuts"],
    ["End of the Road", "The Snuts"]

];

// Tags for every artist, including places, genres and specialist subjects.
const artistTags = {
    "Sam Fender": ["Sam Fender", "UK music", "Newcastle music", "heartland rock", "indie rock", "singer-songwriters"],
    "The Last Dinner Party": ["The Last Dinner Party", "UK music", "London music", "indie rock", "baroque pop", "art rock", "female-fronted bands"],
    "Wolf Alice": ["Wolf Alice", "UK music", "London music", "indie rock", "alternative rock", "shoegaze", "Ellie Rowsell", "Mercury Prize winners"],
    "Royal Blood": ["Royal Blood", "UK music", "Brighton music", "hard rock", "blues rock", "rock duos"],
    "Blur": ["Blur", "UK music", "Britpop", "alternative rock", "Damon Albarn", "rock bands"],
    "Fontaines D.C.": ["Fontaines D.C.", "Irish music", "Dublin music", "post-punk", "alternative rock", "rock bands"],
    "The Beaches": ["The Beaches", "Canadian music", "Toronto music", "indie rock", "pop rock", "female rock bands"],
    "Yard Act": ["Yard Act", "UK music", "Leeds music", "post-punk", "indie rock", "spoken-word vocals", "rock bands"],
    "IDLES": ["IDLES", "UK music", "Bristol music", "post-punk", "punk rock", "rock bands"],
    "Dry Cleaning": ["Dry Cleaning", "UK music", "London music", "post-punk", "spoken-word vocals", "Florence Shaw", "rock bands"],
    "Shame": ["Shame", "UK music", "London music", "post-punk", "alternative rock", "rock bands"],
    "Black Country, New Road": ["Black Country, New Road", "UK music", "experimental rock", "art rock", "post-rock", "rock bands"],
    "The Dare": ["The Dare", "American music", "New York music", "electroclash", "dance-punk", "Harrison Patrick Smith", "record producers"],
    "Jack White": ["Jack White", "American music", "Detroit music", "garage rock", "blues rock", "The White Stripes", "guitarists"],
    "The Strokes": ["The Strokes", "American music", "New York music", "indie rock", "garage rock revival", "rock bands"],
    "Bring Me the Horizon": ["Bring Me the Horizon", "UK music", "Sheffield music", "alternative metal", "metalcore", "rock bands"],
    "Blink-182": ["Blink-182", "American music", "pop punk", "punk rock", "rock bands"],
    "The Black Keys": ["The Black Keys", "American music", "Ohio music", "blues rock", "garage rock", "rock duos"],
    "The Killers": ["The Killers", "American music", "Las Vegas music", "alternative rock", "new wave", "Brandon Flowers", "rock bands"],
    "Muse": ["Muse", "UK music", "Devon music", "alternative rock", "progressive rock", "rock bands"],
    "Nothing But Thieves": ["Nothing But Thieves", "UK music", "Essex music", "alternative rock", "indie rock", "Conor Mason", "rock bands"],
    "The Snuts": ["The Snuts", "Scottish music", "UK music", "West Lothian music", "indie rock", "rock bands"]
};

// Album membership gives accurate specialist tagging. Album years are
// separate from original single release dates and reissues.
const albumTracks = [
    ["Sam Fender", "Seventeen Going Under", "2021 albums", ["Getting Started", "The Dying Light"]],
    ["Sam Fender", "Seventeen Going Under (Live Deluxe)", "2022 reissues", ["Wild Grey Ocean"]],
    ["The Last Dinner Party", "Prelude to Ecstasy", "2024 albums", ["Nothing Matters", "Sinner", "My Lady of Mercy", "The Feminine Urge", "Caesar on a TV Screen"]],
    ["Wolf Alice", "Blue Weekend", "2021 albums", ["The Beach", "How Can I Make It OK?", "The Last Man on Earth", "Delicious Things"]],
    ["Royal Blood", "Typhoons", "2021 albums", ["Trouble's Coming", "Typhoons", "Boilermaker"]],
    ["Royal Blood", "Back to the Water Below", "2023 albums", ["Mountains at Midnight", "Pull Me Through"]],
    ["Blur", "The Ballad of Darren", "2023 albums", ["The Heights"]],
    ["Fontaines D.C.", "A Hero's Death", "2020 albums", ["A Hero's Death"]],
    ["Fontaines D.C.", "Skinty Fia", "2022 albums", ["Skinty Fia", "Nabokov", "Big Shot"]],
    ["The Beaches", "Blame My Ex", "2023 albums", ["Blame Brett", "Edge of the Earth"]],
    ["Yard Act", "The Overload", "2022 albums", ["The Overload", "Land of the Blind"]],
    ["Yard Act", "Where's My Utopia?", "2024 albums", ["Dream Job", "We Make Hits"]],
    ["IDLES", "Ultra Mono", "2020 albums", ["Model Village"]],
    ["IDLES", "Crawler", "2021 albums", ["Car Crash", "The Beachland Ballroom"]],
    ["IDLES", "Tangk", "2024 albums", ["Dancer", "Gift Horse"]],
    ["Dry Cleaning", "New Long Leg", "2021 albums", ["Scratchcard Lanyard", "Strong Feelings", "Unsmart Lady"]],
    ["Dry Cleaning", "Stumpwork", "2022 albums", ["Gary Ashby", "Hot Penny Day"]],
    ["Shame", "Drunk Tank Pink", "2021 albums", ["Snow Day", "Water in the Well"]],
    ["Shame", "Food for Worms", "2023 albums", ["Adderall", "Fingers of Steel", "Six-Pack"]],
    ["Black Country, New Road", "Ants from Up There", "2022 albums", ["Concorde", "Chaos Space Marine", "The Place Where He Inserted the Blade", "Bread Song", "Good Will Hunting", "Basketball Shoes"]],
    ["Black Country, New Road", "Live at Bush Hall", "2023 live albums", ["Up Song", "Across the Pond Friend"]],
    ["The Dare", "What's Wrong with New York?", "2024 albums", ["Perfume", "Girls", "Good Time", "All Night", "You're Invited"]],
    ["Jack White", "Entering Heaven Alive", "2022 albums", ["Love Is Selfish", "A Tip from You to Me"]],
    ["Jack White", "Fear of the Dawn", "2022 albums", ["Taking Me Back", "What's the Trick?", "That Was Then (This Is Now)"]],
    ["The Strokes", "The New Abnormal", "2020 albums", ["Ode to the Mets", "Selfless"]],
    ["Bring Me the Horizon", "Post Human: Survival Horror", "2020 EPs", ["Teardrops", "Parasite Eve"]],
    ["Bring Me the Horizon", "Post Human: Nex Gen", "2024 albums", ["Lost", "Kool-Aid", "DArkSide"]],
    ["Blink-182", "One More Time...", "2023 albums", ["Edging", "One More Time", "Dance with Me", "More Than You Know"]],
    ["Blink-182", "One More Time... Part-2", "2024 deluxe albums", ["All in My Head"]],
    ["The Black Keys", "Dropout Boogie", "2022 albums", ["Wild Child", "It Ain't Over"]],
    ["The Black Keys", "Ohio Players", "2024 albums", ["Beautiful People", "On the Game"]],
    ["The Killers", "Rebel Diamonds", "2023 compilations", ["Your Side of Town", "Boy", "Spirit"]],
    ["The Killers", "Imploding the Mirage", "2020 albums", ["Caution", "Dying Breed"]],
    ["Muse", "Will of the People", "2022 albums", ["We Are Fucking Fucked"]],
    ["Nothing But Thieves", "Dead Club City", "2023 albums", ["Welcome to the DCC", "Overcome", "Tomorrow Is Closed", "Keeping You Around"]],
    ["Nothing But Thieves", "Dead Club City (Deluxe)", "2024 deluxe albums", ["Oh No :: He Said What?"]],
    ["Nothing But Thieves", "Moral Panic", "2020 albums", ["Is Everybody Going Crazy?", "Impossible", "Real Love Song"]],
    ["Nothing But Thieves", "Moral Panic II", "2021 EPs", ["Futureproof"]],
    ["The Snuts", "Mixtape EP", "2020 EPs", ["Fatboy Slim", "Coffee & Cigarettes"]],
    ["The Snuts", "W.L.", "2021 albums", ["Elephants"]],
    ["The Snuts", "Burn the Empire", "2022 albums", ["Burn the Empire", "Zuckerpunch", "End of the Road"]]
];

// Extra recording details for alternative credits and specialist quizzes.
const recordingTags = {
    "Sam Fender|Wild Grey Ocean": ["2022 singles", "deluxe bonus tracks"],
    "The Last Dinner Party|Nothing Matters": ["2023 singles", "debut singles"],
    "The Last Dinner Party|Sinner": ["2023 singles"],
    "Royal Blood|Trouble's Coming": ["2020 singles"],
    "Yard Act|Fixer Upper": ["2020 singles", "Dark Days EP", "non-album songs"],
    "Yard Act|Dream Job": ["2023 singles"],
    "IDLES|Dancer": ["LCD Soundsystem", "James Murphy", "collaborations", "2023 singles"],
    "Black Country, New Road|Up Song": ["Live at Bush Hall", "2023 live recordings", "post-Isaac Wood lineup"],
    "Black Country, New Road|Across the Pond Friend": ["Live at Bush Hall", "2023 live recordings", "post-Isaac Wood lineup"],
    "The Dare|Girls": ["2022 singles", "electroclash"],
    "Jack White|Taking Me Back": ["2021 singles"],
    "Bring Me the Horizon|Lost": ["2023 singles", "Post Human: Nex Gen", "stylised as LosT"],
    "The Black Keys|Beautiful People": ["Beautiful People (Stay High)", "2024 singles"],
    "The Killers|Spirit": ["2023 songs", "Rebel Diamonds"],
    "The Killers|Boy": ["2022 singles"],
    "Nothing But Thieves|Life's Coming in Slow": ["Gran Turismo 7", "video game soundtracks", "2022 singles"],
    "The Snuts|End of the Road": ["Rachel Chinouriri", "featured artists", "2022 singles", "collaborations"],
    "The Snuts|Fatboy Slim": ["Fat Boy Slim", "2020 singles", "Mixtape EP"]
};

// These titles also belong to DIFFERENT artists in earlier packs.
// Identifying the actual album or band prevents ambiguous mixed quizzes.
const questionCorrections = {
    "Sam Fender|The Dying Light": "Which North East English singer recorded 'The Dying Light' for Seventeen Going Under?",
    "Bring Me the Horizon|Lost": "Which Sheffield rock band released 'Lost' for its Post Human: Nex Gen project?",
    "The Killers|Spirit": "Which Las Vegas rock band included 'Spirit' on its Rebel Diamonds compilation?",
    "Nothing But Thieves|Overcome": "Which British rock band released 'Overcome' on its album Dead Club City?",
    "The Black Keys|Beautiful People": "Which American blues-rock duo released 'Beautiful People (Stay High)'?",
    "The Snuts|End of the Road": "Which Scottish indie band released 'End of the Road' featuring Rachel Chinouriri?",
    "Black Country, New Road|Up Song": "Which British experimental rock group performed 'Up Song' on Live at Bush Hall?",
    "Black Country, New Road|Across the Pond Friend": "Which British group performed 'Across the Pond Friend' on Live at Bush Hall?",
    "The Snuts|Fatboy Slim": "Which Scottish indie band recorded 'Fat Boy Slim' for its Mixtape EP?"
};

function makeTags(title, artist) {
    const album = albumTracks.find(([name, , , tracks]) =>
        name === artist && tracks.includes(title)
    );
    return [...new Set([
        "2020s", "songs", "recordings", "artist identification",
        ...artistTags[artist],
        ...(album ? [album[1], album[2]] : []),
        ...(recordingTags[`${artist}|${title}`] || [])
    ])];
}

// Keep the original answer algorithm and original correct-answer positions.
if (songs.length !== 100) throw new Error("Pack 137 requires 100 recordings");
const normalise = s => String(s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
const seen = new Set();
for (const [song, artist] of songs) {
    const key = `${normalise(song)}|${normalise(artist)}`;
    if (seen.has(key)) throw new Error("Repeated recording: " + key);
    seen.add(key);
}

const artistPool = [...new Set(songs.map(entry => entry[1]))];
const quizPack137 = songs.map(([song, artist], index) => {
    const otherArtists = artistPool.filter(name => name !== artist);
    const start = (index * 7) % otherArtists.length;
    const wrongAnswers = [
        otherArtists[start],
        otherArtists[(start + 1) % otherArtists.length],
        otherArtists[(start + 2) % otherArtists.length]
    ];
    const answers = [artist, ...wrongAnswers];
    const shift = index % 4;
    return {
        id: "music_" + (11767 + index),
        category: "Music",
        question: questionCorrections[`${artist}|${song}`] ||
            "Which artist recorded '" + song + "'?",
        answers: [...answers.slice(shift), ...answers.slice(0, shift)],
        correctAnswer: artist,
        difficulty: index % 3 === 0 ? "Easy" : "Medium",
        tags: makeTags(song, artist),
        dailyEligible: true
    };
});

for (let index = 0; index < quizPack137.length; index++) {
    const q = quizPack137[index];
    if (q.id !== "music_" + (11767 + index) ||
        q.answers.length !== 4 || new Set(q.answers).size !== 4 ||
        !q.answers.includes(q.correctAnswer) ||
        !q.tags || q.tags.length < 5 || q.dailyEligible !== true) {
        throw new Error("Pack 137 question failed: " + q.id);
    }
}

module.exports = quizPack137;
