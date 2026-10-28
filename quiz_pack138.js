 // quiz_pack138.js
// PuzzlePilot Big Quiz - Music Pack 138
// 2020s pop, country, indie, dance and Eurovision
// IDs music_11867 to music_11966; 100 entries
// Preserves source recordings, except a genuine repeated question
// converted into a distinct album question at music_11895.

const songs = [

    // RAYE
    ["Ice Cream Man.", "RAYE"],

    // Lola Young
    ["Wish You Were Dead", "Lola Young"],
    ["Big Brown Eyes", "Lola Young"],

    // Jungle
    ["Dominoes", "Jungle"],
    ["Let's Go Back", "Jungle"],

    // Djo
    ["Gloom", "Djo"],
    ["Figure You Out", "Djo"],

    // Shaboozey
    ["Let It Burn", "Shaboozey"],
    ["Last of My Kind", "Shaboozey"],

    // Hozier
    ["De Selby (Part 2)", "Hozier"],

    // Noah Kahan
    ["Northern Attitude", "Noah Kahan"],
    ["Homesick", "Noah Kahan"],
    ["You're Gonna Go Far", "Noah Kahan"],

    // Teddy Swims
    ["Funeral", "Teddy Swims"],

    // Alex Warren
    ["Bloodline", "Alex Warren and Jelly Roll"],
    ["Eternity", "Alex Warren"],

    // Kenya Grace
    ["Paris", "Kenya Grace"],
    ["Only in My Mind", "Kenya Grace"],
    ["Someone Else", "Kenya Grace"],
    ["Afterparty Lover", "Kenya Grace"],

    // Dance and electronic
    ["Drugs from Amsterdam", "Mau P"],
    ["Where You Are", "John Summit and Hayla"],
    ["Shiver", "John Summit and Hayla"],
    ["Green & Gold", "Rudimental and Skepsis"],
    ["Dancing Is Healing",
        "Rudimental, Charlotte Plank and Vibe Chemistry"],
    ["Alibi", "Ella Henderson and Rudimental"],

    // Tom Odell
    ["Black Friday", "Tom Odell"],
    ["Best Day of My Life", "Tom Odell"],

    // Lizzy McAlpine
    ["Erase Me", "Lizzy McAlpine and Jacob Collier"],
    ["Doomsday", "Lizzy McAlpine"],

    // beabadoobee
    ["Glue Song", "beabadoobee"],
    ["The Perfect Pair", "beabadoobee"],
    ["Take a Bite", "beabadoobee"],
    ["Beaches", "beabadoobee"],
    ["Ever Seen", "beabadoobee"],

    // Clairo
    ["Amoeba", "Clairo"],
    ["Sexy to Someone", "Clairo"],
    ["Juna", "Clairo"],

    // Addison Rae
    ["Diet Pepsi", "Addison Rae"],
    ["Aquamarine", "Addison Rae"],
    ["Headphones On", "Addison Rae"],
    ["Fame Is a Gun", "Addison Rae"],
    ["High Fashion", "Addison Rae"],

    // Gracie Abrams
    ["That's So True", "Gracie Abrams"],
    ["I Love You, I'm Sorry", "Gracie Abrams"],
    ["Risk", "Gracie Abrams"],
    ["Close to You", "Gracie Abrams"],
    ["Where Do We Go Now?", "Gracie Abrams"],

    // Dasha
    ["Austin", "Dasha"],
    ["Didn't I", "Dasha"],
    ["Bye Bye Bye", "Dasha"],
    ["Not at This Party", "Dasha"],
    ["Heartbreaker from Tennessee", "Dasha"],

    // Luke Combs
    ["Ain't No Love in Oklahoma", "Luke Combs"],
    ["Fast Car", "Luke Combs"],
    ["Where the Wild Things Are", "Luke Combs"],
    ["Love You Anyway", "Luke Combs"],
    ["The Kind of Love We Make", "Luke Combs"],

    // Morgan Wallen
    ["Last Night", "Morgan Wallen"],
    ["Thinkin' Bout Me", "Morgan Wallen"],
    ["You Proof", "Morgan Wallen"],
    ["One Thing at a Time", "Morgan Wallen"],
    ["Cowgirls", "Morgan Wallen and ERNEST"],

    // Post Malone
    ["I Had Some Help", "Post Malone and Morgan Wallen"],
    ["Pour Me a Drink", "Post Malone and Blake Shelton"],
    ["Guy for That", "Post Malone and Luke Combs"],
    ["What Don't Belong to Me", "Post Malone"],
    ["Losers", "Post Malone and Jelly Roll"],

    // Zach Bryan
    ["Pink Skies", "Zach Bryan"],
    ["Something in the Orange", "Zach Bryan"],
    ["I Remember Everything",
        "Zach Bryan and Kacey Musgraves"],
    ["Nine Ball", "Zach Bryan"],
    ["28", "Zach Bryan"],

    // Beyoncé
    ["Texas Hold 'Em", "Beyoncé"],
    ["16 Carriages", "Beyoncé"],
    ["II Most Wanted", "Beyoncé and Miley Cyrus"],
    ["Ya Ya", "Beyoncé"],
    ["Bodyguard", "Beyoncé"],

    // Eurovision 2024
    ["The Code", "Nemo"],
    ["Rim Tim Tagi Dim", "Baby Lasagna"],
    ["Europapa", "Joost Klein"],
    ["Teresa & Maria", "alyona alyona and Jerry Heil"],
    ["Zorra", "Nebulossa"],

    // Eurovision 2023
    ["Tattoo", "Loreen"],
    ["Queen of Kings", "Alessandra"],
    ["Cha Cha Cha", "Käärijä"],
    ["Who the Hell Is Edgar?", "Teya and Salena"],
    ["Promise", "Voyager"],

    // Måneskin
    ["The Loneliest", "Måneskin"],
    ["Gossip", "Måneskin and Tom Morello"],
    ["Honey (Are U Coming?)", "Måneskin"],
    ["Baby Said", "Måneskin"],
    ["Valentine", "Måneskin"],

    // Wet Leg
    ["Oh No", "Wet Leg"],
    ["Supermarket", "Wet Leg"],
    ["Piece of Shit", "Wet Leg"],
    ["Convincing", "Wet Leg"],

    // The Reytons
    ["Let Me Breathe", "The Reytons"],
    ["Market Street", "The Reytons"],
    ["Listen", "The Reytons"]

];

// First release years, not necessarily years of chart success or albums.
// In particular, 2023 tracks appearing on 2024 albums remain 2023.
const releaseYears = [
    2023, 2024, 2024, 2023, 2024, 2022, 2022, 2023, 2024, 2023,
    2022, 2022, 2023, 2025, 2025, 2025, 2023, 2023, 2022, 2023,
    2022, 2023, 2024, 2024, 2023, 2024, 2023, 2022, 2021, 2021,
    2023, 2022, 2024, 2024, 2024, 2021, 2024, 2024, 2024, 2024,
    2025, 2025, 2025, 2024, 2024, 2024, 2024, 2023, 2023, 2024,
    2024, 2025, 2024, 2024, 2023, 2023, 2023, 2022, 2023, 2023,
    2022, 2023, 2023, 2024, 2024, 2024, 2024, 2024, 2024, 2022,
    2023, 2023, 2024, 2024, 2024, 2024, 2024, 2024, 2024, 2024,
    2024, 2024, 2024, 2023, 2023, 2023, 2023, 2023, 2022, 2023,
    2023, 2023, 2023, 2022, 2022, 2022, 2022, 2023, 2023, 2023
];

// Every question receives the artist and specialist genres in its tags.
const artistTags = {
    "RAYE": ["UK music", "R&B", "soul", "dance-pop", "singer-songwriters"],
    "Lola Young": ["UK music", "London music", "alternative pop", "soul pop", "singer-songwriters"],
    "Jungle": ["UK music", "London music", "neo soul", "funk", "electronic soul", "bands"],
    "Djo": ["American music", "Joe Keery", "synthpop", "indie pop", "solo projects"],
    "Shaboozey": ["American music", "country pop", "country music", "hip hop influences"],
    "Hozier": ["Irish music", "folk rock", "blues rock", "soul", "singer-songwriters"],
    "Noah Kahan": ["American music", "indie folk", "folk pop", "singer-songwriters"],
    "Teddy Swims": ["American music", "soul pop", "R&B", "male vocalists"],
    "Alex Warren": ["American music", "pop", "singer-songwriters"],
    "Jelly Roll": ["American music", "country rap", "country music"],
    "Kenya Grace": ["UK music", "drum and bass", "electronic pop", "female vocalists"],
    "Mau P": ["Dutch music", "tech house", "house music", "DJs"],
    "John Summit": ["American music", "house music", "dance music", "DJs"],
    "Hayla": ["UK music", "dance-pop", "house music", "female vocalists"],
    "Rudimental": ["UK music", "drum and bass", "dance music", "electronic groups"],
    "Skepsis": ["UK music", "bassline", "drum and bass", "DJs"],
    "Charlotte Plank": ["UK music", "drum and bass", "dance-pop", "female vocalists"],
    "Vibe Chemistry": ["UK music", "drum and bass", "music producers"],
    "Ella Henderson": ["UK music", "pop", "dance-pop", "The X Factor"],
    "Tom Odell": ["UK music", "indie pop", "piano pop", "singer-songwriters"],
    "Lizzy McAlpine": ["American music", "indie folk", "folk pop", "singer-songwriters"],
    "Jacob Collier": ["UK music", "jazz pop", "multi-instrumentalists", "music producers"],
    "beabadoobee": ["UK music", "indie rock", "alternative pop", "singer-songwriters"],
    "Clairo": ["American music", "indie pop", "bedroom pop", "singer-songwriters"],
    "Addison Rae": ["American music", "pop", "dance-pop", "female vocalists"],
    "Gracie Abrams": ["American music", "indie pop", "singer-songwriters", "female vocalists"],
    "Dasha": ["American music", "country pop", "country music", "singer-songwriters"],
    "Luke Combs": ["American music", "country music", "male vocalists", "singer-songwriters"],
    "Morgan Wallen": ["American music", "country pop", "country music", "male vocalists"],
    "ERNEST": ["American music", "country music", "singer-songwriters"],
    "Post Malone": ["American music", "country pop", "pop", "hip hop influences"],
    "Blake Shelton": ["American music", "country music", "male vocalists"],
    "Zach Bryan": ["American music", "country music", "Americana", "singer-songwriters"],
    "Kacey Musgraves": ["American music", "country music", "singer-songwriters"],
    "Beyoncé": ["American music", "country pop", "R&B", "female vocalists"],
    "Miley Cyrus": ["American music", "pop rock", "female vocalists"],
    "Nemo": ["Swiss music", "art pop", "Eurovision", "Eurovision 2024"],
    "Baby Lasagna": ["Croatian music", "rock music", "Eurovision", "Eurovision 2024"],
    "Joost Klein": ["Dutch music", "Eurodance", "Eurovision", "Eurovision 2024"],
    "alyona alyona": ["Ukrainian music", "hip hop", "Eurovision", "Eurovision 2024"],
    "Jerry Heil": ["Ukrainian music", "pop", "Eurovision", "Eurovision 2024"],
    "Nebulossa": ["Spanish music", "synthpop", "Eurovision", "Eurovision 2024"],
    "Loreen": ["Swedish music", "dance-pop", "Eurovision", "Eurovision 2023"],
    "Alessandra": ["Norwegian music", "pop", "Eurovision", "Eurovision 2023"],
    "Käärijä": ["Finnish music", "rap rock", "Eurovision", "Eurovision 2023"],
    "Teya": ["Austrian music", "pop", "Eurovision", "Eurovision 2023"],
    "Salena": ["Austrian music", "pop", "Eurovision", "Eurovision 2023"],
    "Voyager": ["Australian music", "progressive metal", "Eurovision", "Eurovision 2023"],
    "Måneskin": ["Italian music", "glam rock", "hard rock", "Eurovision 2021", "rock bands"],
    "Tom Morello": ["American music", "rock guitarists", "Rage Against the Machine"],
    "Wet Leg": ["UK music", "Isle of Wight music", "indie rock", "post-punk", "rock bands"],
    "The Reytons": ["UK music", "Rotherham music", "Yorkshire music", "indie rock", "rock bands"]
};

// Some credited artist names include collaborations. Band names are
// otherwise left intact (e.g. Jungle, Wet Leg and Måneskin).
const collaborationMembers = {
    "Alex Warren and Jelly Roll": ["Alex Warren", "Jelly Roll"],
    "John Summit and Hayla": ["John Summit", "Hayla"],
    "Rudimental and Skepsis": ["Rudimental", "Skepsis"],
    "Rudimental, Charlotte Plank and Vibe Chemistry": ["Rudimental", "Charlotte Plank", "Vibe Chemistry"],
    "Ella Henderson and Rudimental": ["Ella Henderson", "Rudimental"],
    "Lizzy McAlpine and Jacob Collier": ["Lizzy McAlpine", "Jacob Collier"],
    "Morgan Wallen and ERNEST": ["Morgan Wallen", "ERNEST"],
    "Post Malone and Morgan Wallen": ["Post Malone", "Morgan Wallen"],
    "Post Malone and Blake Shelton": ["Post Malone", "Blake Shelton"],
    "Post Malone and Luke Combs": ["Post Malone", "Luke Combs"],
    "Post Malone and Jelly Roll": ["Post Malone", "Jelly Roll"],
    "Zach Bryan and Kacey Musgraves": ["Zach Bryan", "Kacey Musgraves"],
    "Beyoncé and Miley Cyrus": ["Beyoncé", "Miley Cyrus"],
    "alyona alyona and Jerry Heil": ["alyona alyona", "Jerry Heil"],
    "Teya and Salena": ["Teya", "Salena"],
    "Måneskin and Tom Morello": ["Måneskin", "Tom Morello"]
};

function creditedActs(credit) {
    return collaborationMembers[credit] || [credit];
}
function overlappingCredit(a, b) {
    return creditedActs(a).some(part => creditedActs(b).includes(part));
}

// Album/EP membership is separate from the original release year above.
const albumTracks = [
    ["RAYE", "My 21st Century Blues", "2023 albums", ["Ice Cream Man."]],
    ["Lola Young", "This Wasn't Meant for You Anyway", "2024 albums", ["Wish You Were Dead", "Big Brown Eyes"]],
    ["Jungle", "Volcano", "2023 albums", ["Dominoes"]],
    ["Djo", "DECIDE", "2022 albums", ["Gloom", "Figure You Out"]],
    ["Shaboozey", "Where I've Been, Isn't Where I'm Going", "2024 albums", ["Let It Burn", "Last of My Kind"]],
    ["Hozier", "Unreal Unearth", "2023 albums", ["De Selby (Part 2)"]],
    ["Noah Kahan", "Stick Season", "2022 albums", ["Northern Attitude", "Homesick"]],
    ["Noah Kahan", "Stick Season (We'll All Be Here Forever)", "2023 deluxe albums", ["You're Gonna Go Far"]],
    ["Teddy Swims", "I've Tried Everything but Therapy (Part 2)", "2025 albums", ["Funeral"]],
    ["Alex Warren and Jelly Roll", "You'll Be Alright, Kid", "2025 albums", ["Bloodline"]],
    ["Alex Warren", "You'll Be Alright, Kid", "2025 albums", ["Eternity"]],
    ["Kenya Grace", "The After Taste", "2024 EPs", ["Paris", "Only in My Mind", "Afterparty Lover"]],
    ["John Summit and Hayla", "Comfort in Chaos", "2024 albums", ["Where You Are", "Shiver"]],
    ["Tom Odell", "Black Friday", "2024 albums", ["Black Friday"]],
    ["Tom Odell", "Best Day of My Life", "2022 albums", ["Best Day of My Life"]],
    ["Lizzy McAlpine", "five seconds flat", "2022 albums", ["Doomsday"]],
    ["beabadoobee", "Beatopia", "2022 albums", ["The Perfect Pair"]],
    ["beabadoobee", "This Is How Tomorrow Moves", "2024 albums", ["Take a Bite", "Beaches", "Ever Seen"]],
    ["Clairo", "Sling", "2021 albums", ["Amoeba"]],
    ["Clairo", "Charm", "2024 albums", ["Sexy to Someone", "Juna"]],
    ["Addison Rae", "Addison", "2025 albums", ["Diet Pepsi", "Aquamarine", "Headphones On", "Fame Is a Gun", "High Fashion"]],
    ["Gracie Abrams", "The Secret of Us", "2024 albums", ["I Love You, I'm Sorry", "Risk", "Close to You"]],
    ["Gracie Abrams", "The Secret of Us (Deluxe)", "2024 deluxe albums", ["That's So True"]],
    ["Gracie Abrams", "Good Riddance", "2023 albums", ["Where Do We Go Now?"]],
    ["Dasha", "What Happens Now?", "2024 albums", ["Austin"]],
    ["Dasha", "What Happens Now? (Deluxe)", "2024 deluxe albums", ["Didn't I", "Bye Bye Bye"]],
    ["Luke Combs", "Gettin' Old", "2023 albums", ["Fast Car", "Where the Wild Things Are", "Love You Anyway"]],
    ["Luke Combs", "Growin' Up", "2022 albums", ["The Kind of Love We Make"]],
    ["Morgan Wallen", "One Thing at a Time", "2023 albums", ["Last Night", "Thinkin' Bout Me", "You Proof", "One Thing at a Time"]],
    ["Morgan Wallen and ERNEST", "One Thing at a Time", "2023 albums", ["Cowgirls"]],
    ["Post Malone and Morgan Wallen", "F-1 Trillion", "2024 albums", ["I Had Some Help"]],
    ["Post Malone and Blake Shelton", "F-1 Trillion", "2024 albums", ["Pour Me a Drink"]],
    ["Post Malone and Luke Combs", "F-1 Trillion", "2024 albums", ["Guy for That"]],
    ["Post Malone", "F-1 Trillion", "2024 albums", ["What Don't Belong to Me"]],
    ["Post Malone and Jelly Roll", "F-1 Trillion", "2024 albums", ["Losers"]],
    ["Zach Bryan", "American Heartbreak", "2022 albums", ["Something in the Orange"]],
    ["Zach Bryan", "Zach Bryan", "2023 albums", ["Nine Ball"]],
    ["Zach Bryan and Kacey Musgraves", "Zach Bryan", "2023 albums", ["I Remember Everything"]],
    ["Zach Bryan", "The Great American Bar Scene", "2024 albums", ["Pink Skies", "28"]],
    ["Beyoncé", "Cowboy Carter", "2024 albums", ["Texas Hold 'Em", "16 Carriages", "Ya Ya", "Bodyguard"]],
    ["Beyoncé and Miley Cyrus", "Cowboy Carter", "2024 albums", ["II Most Wanted"]],
    ["Måneskin", "RUSH!", "2023 albums", ["The Loneliest", "Baby Said"]],
    ["Måneskin and Tom Morello", "RUSH!", "2023 albums", ["Gossip"]],
    ["Måneskin", "RUSH! (Are U Coming?)", "2023 deluxe albums", ["Honey (Are U Coming?)", "Valentine"]],
    ["Wet Leg", "Wet Leg", "2022 albums", ["Oh No", "Supermarket", "Piece of Shit", "Convincing"]],
    ["The Reytons", "Ballad of a Bystander", "2024 albums", ["Let Me Breathe", "Market Street", "Listen"]]
];

const recordingTags = {
    "Shaboozey|Let It Burn": ["2023 singles", "2024 album tracks"],
    "Shaboozey|Last of My Kind": ["Paul Cauthen", "featured artists", "2024 songs"],
    "Noah Kahan|You're Gonna Go Far": ["Stick Season deluxe", "2023 songs"],
    "Kenya Grace|Someone Else": ["3Strange", "2022 singles", "featured vocals"],
    "Rudimental and Skepsis|Green & Gold": ["Charlotte Plank", "Riko Dan", "featured artists", "2024 singles"],
    "Rudimental, Charlotte Plank and Vibe Chemistry|Dancing Is Healing": ["2023 singles", "drum and bass"],
    "Ella Henderson and Rudimental|Alibi": ["2024 singles", "Coolio", "Gangsta's Paradise", "music sampling"],
    "Tom Odell|Black Friday": ["2023 singles", "2024 albums"],
    "Lizzy McAlpine|Doomsday": ["2021 singles", "2022 albums"],
    "beabadoobee|Glue Song": ["2023 singles", "The 1975 connections"],
    "Dasha|Austin": ["2023 original releases", "2024 chart success", "country pop"],
    "Dasha|Heartbreaker from Tennessee": ["2024 singles"],
    "Dasha|Not at This Party": ["2025 singles"],
    "Luke Combs|Ain't No Love in Oklahoma": ["2024 singles", "Twisters", "film soundtracks"],
    "Luke Combs|Fast Car": ["2023 covers", "Tracy Chapman", "1980s originals", "cover versions"],
    "Beyoncé|Texas Hold 'Em": ["2024 singles", "Cowboy Carter", "country music"],
    "Nemo|The Code": ["Switzerland", "Eurovision 2024 winners", "2024 Eurovision winner"],
    "Baby Lasagna|Rim Tim Tagi Dim": ["Croatia", "Eurovision 2024 runner-up"],
    "Joost Klein|Europapa": ["Netherlands", "Eurovision 2024 contestants"],
    "alyona alyona and Jerry Heil|Teresa & Maria": ["Ukraine", "Eurovision 2024 finalists"],
    "Nebulossa|Zorra": ["Spain", "Eurovision 2024 finalists"],
    "Loreen|Tattoo": ["Sweden", "Eurovision 2023 winners", "Eurovision winners"],
    "Alessandra|Queen of Kings": ["Norway", "Eurovision 2023 contestants"],
    "Käärijä|Cha Cha Cha": ["Finland", "Eurovision 2023 runner-up"],
    "Teya and Salena|Who the Hell Is Edgar?": ["Austria", "Eurovision 2023 contestants"],
    "Voyager|Promise": ["Australia", "Eurovision 2023 finalists"],
    "Måneskin and Tom Morello|Gossip": ["Tom Morello", "featured guitarists", "2023 singles"],
    "The Reytons|Let Me Breathe": ["2023 singles", "2024 album tracks"],
    "The Reytons|Market Street": ["2023 singles", "2024 album tracks"],
    "The Reytons|Listen": ["2023 singles", "2024 album tracks"]
};

// The wording is tightened only for duplicate titles, different credits,
// featured artists or distinct original/cover recordings.
const questionCorrections = {
    "Kenya Grace|Someone Else": "Which British singer is featured on 3Strange's 2022 track 'Someone Else'?",
    "Shaboozey|Last of My Kind": "Which American country singer recorded 'Last of My Kind' featuring Paul Cauthen?",
    "Rudimental and Skepsis|Green & Gold": "Which two British dance acts released 'Green & Gold' featuring Charlotte Plank and Riko Dan?",
    "Noah Kahan|Homesick": "Which American folk-pop singer recorded 'Homesick' on his album Stick Season?",
    "Tom Odell|Best Day of My Life": "Which British singer-songwriter released 'Best Day of My Life' as the title track of his 2022 album?",
    "Luke Combs|Fast Car": "Which American country star recorded a 2023 cover of Tracy Chapman's 'Fast Car'?",
    "Dasha|Bye Bye Bye": "Which American country-pop singer recorded 'Bye Bye Bye' for What Happens Now? (Deluxe)?",
    "Måneskin|Valentine": "Which Italian rock band recorded 'Valentine' for RUSH! (Are U Coming?)?",
    "Wet Leg|Oh No": "Which Isle of Wight indie-rock duo recorded 'Oh No' for its self-titled debut album?"
};

function makeTags(title, artist, year, isAlbumQuestion) {
    const members = creditedActs(artist);
    const album = albumTracks.find(([name, , , titles]) => name === artist && titles.includes(title));
    return [...new Set([
        "2020s", String(year), "songs", "recordings",
        isAlbumQuestion ? "album identification" : "artist identification",
        artist, ...members,
        ...(members.length > 1 ? ["collaborations", "joint artist credits"] : []),
        ...members.flatMap(member => artistTags[member] || []),
        ...(album ? [album[1], album[2]] : []),
        ...(recordingTags[`${artist}|${title}`] || []),
        ...(isAlbumQuestion ? ["Lizzy McAlpine", "Jacob Collier", "five seconds flat", "2022 albums", "album tracks"] : [])
    ])];
}

// Preserve the original answer order except where the original answer
// choices would include a participant in the correct collaborative act.
const artistPool = [...new Set(songs.map(entry => entry[1]))];
function makeArtistAnswers(artist, index) {
    const otherArtists = artistPool.filter(name => name !== artist);
    const start = (index * 7) % otherArtists.length;
    const wrongAnswers = [
        otherArtists[start],
        otherArtists[(start + 1) % otherArtists.length],
        otherArtists[(start + 2) % otherArtists.length]
    ];
    for (let i = 0; i < wrongAnswers.length; i++) {
        if (overlappingCredit(artist, wrongAnswers[i])) {
            const replacement = artistPool.find(name =>
                !overlappingCredit(artist, name) && !wrongAnswers.includes(name)
            );
            if (!replacement) throw new Error("No fair answer alternative");
            wrongAnswers[i] = replacement;
        }
    }
    const answers = [artist, ...wrongAnswers];
    const shift = index % 4;
    return [...answers.slice(shift), ...answers.slice(0, shift)];
}

// Pack 135 already asks who recorded 'Erase Me' featuring Jacob Collier.
// This one tests the album instead: a different type of music knowledge.
const repeatedRecordingIndex = 28;
const quizPack138 = songs.map(([song, artist], index) => {
    const albumQuestion = index === repeatedRecordingIndex;
    const id = "music_" + (11867 + index);
    const year = releaseYears[index];
    const key = `${artist}|${song}`;
    const answers = albumQuestion
        ? ["five seconds flat", "Older", "SOUR", "The Secret of Us"]
        : makeArtistAnswers(artist, index);
    return {
        id,
        category: "Music",
        question: albumQuestion
            ? "On which Lizzy McAlpine album does 'Erase Me', featuring Jacob Collier, appear?"
            : (questionCorrections[key] ||
                (creditedActs(artist).length > 1
                    ? "Which artists collaborated on '" + song + "'?"
                    : "Which artist recorded '" + song + "'?")),
        answers,
        correctAnswer: albumQuestion ? "five seconds flat" : artist,
        difficulty: index % 3 === 0 ? "Easy" : "Medium",
        tags: makeTags(song, artist, year, albumQuestion),
        dailyEligible: true
    };
});

// Fail early for accidental typing/copying mistakes.
if (songs.length !== 100 || releaseYears.length !== 100 || quizPack138.length !== 100) {
    throw new Error("Pack 138 must contain exactly 100 questions");
}
const seenIds = new Set();
for (const [index, question] of quizPack138.entries()) {
    if (seenIds.has(question.id) || question.id !== "music_" + (11867 + index) ||
        question.answers.length !== 4 || new Set(question.answers).size !== 4 ||
        !question.answers.includes(question.correctAnswer) ||
        !question.tags.length || question.dailyEligible !== true ||
        question.answers.some(option =>
            index !== repeatedRecordingIndex && option !== question.correctAnswer &&
            overlappingCredit(option, question.correctAnswer))) {
        throw new Error("Pack 138 validation failed: " + question.id);
    }
    seenIds.add(question.id);
}

module.exports = quizPack138;


