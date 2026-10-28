//
// quiz_pack135.js
// PuzzlePilot Music Quiz
// Pack 135 - Music of the 2020s
// Questions music_11567 to music_11666
//

const songs = [

    // Chappell Roan and Billie Eilish
    ["Femininomenon", "Chappell Roan"],
    ["My Kink Is Karma", "Chappell Roan"],
    ["Lunch", "Billie Eilish"],
    ["Chihiro", "Billie Eilish"],
    ["Wildflower", "Billie Eilish"],
    ["The Greatest", "Billie Eilish"],
    ["Therefore I Am", "Billie Eilish"],
    ["Your Power", "Billie Eilish"],

    // Contemporary pop and country
    ["End of Beginning", "Djo"],
    ["Basic Being Basic", "Djo"],
    ["Delete Ya", "Djo"],
    ["Back on You", "Djo"],
    ["Golden", "HUNTR/X"],
    ["APT.", "ROSÉ and Bruno Mars"],
    ["Flicker of Light", "Lola Young"],
    ["The Door", "Teddy Swims"],
    ["Bad Dreams", "Teddy Swims"],
    ["Guilty", "Teddy Swims"],
    ["Hammer to the Heart", "Teddy Swims"],
    ["Good News", "Shaboozey"],
    ["Highway", "Shaboozey"],
    ["Eat Your Young", "Hozier"],
    ["Francesca", "Hozier"],
    ["Nobody's Soldier", "Hozier"],
    ["Dial Drunk", "Noah Kahan"],

    // Indie, folk and British artists
    ["Ceilings", "Lizzy McAlpine"],
    ["Erase Me", "Lizzy McAlpine"],
    ["Older", "Lizzy McAlpine"],
    ["All My Ghosts", "Lizzy McAlpine"],
    ["I Guess", "Lizzy McAlpine"],
    ["Labour", "Paris Paloma"],
    ["The Fruits", "Paris Paloma"],
    ["As Good a Reason", "Paris Paloma"],
    ["Boys, Bugs and Men", "Paris Paloma"],
    ["Not Strong Enough", "boygenius"],
    ["Cool About It", "boygenius"],
    ["Emily I'm Sorry", "boygenius"],
    ["True Blue", "boygenius"],
    ["$20", "boygenius"],
    ["Arm's Length", "Sam Fender"],
    ["Little Bit Closer", "Sam Fender"],
    ["Dive", "Olivia Dean"],
    ["The Hardest Part", "Olivia Dean"],
    ["Carmen", "Olivia Dean"],
    ["Messy", "Olivia Dean"],
    ["Lady Lady", "Olivia Dean"],

    // British rock and indie
    ["Catch These Fists", "Wet Leg"],
    ["CPR", "Wet Leg"],
    ["Mangetout", "Wet Leg"],
    ["In the Modern World", "Fontaines D.C."],
    ["Bug", "Fontaines D.C."],
    ["Sundowner", "Fontaines D.C."],
    ["The Narcissist", "Blur"],
    ["St. Charles Square", "Blur"],
    ["Barbaric", "Blur"],
    ["The Ballad", "Blur"],
    ["Avalon", "Blur"],
    ["The Dying Light", "Noel Gallagher's High Flying Birds"],
    ["Easy Now", "Noel Gallagher's High Flying Birds"],
    ["Council Skies", "Noel Gallagher's High Flying Birds"],
    ["Pretty Boy", "Noel Gallagher's High Flying Birds"],
    ["Dead to the World", "Noel Gallagher's High Flying Birds"],
    ["Everything's Electric", "Liam Gallagher"],
    ["Better Days", "Liam Gallagher"],
    ["Diamond in the Dark", "Liam Gallagher"],
    ["Mars to Liverpool", "Liam Gallagher and John Squire"],
    ["Just Another Rainbow", "Liam Gallagher and John Squire"],
    ["Raise Your Hands", "Liam Gallagher and John Squire"],
    ["A Hunger in Your Haunt", "Biffy Clyro"],
    ["Space", "Biffy Clyro"],

    // Rock and alternative
    ["The Emptiness Machine", "Linkin Park"],
    ["Heavy Is the Crown", "Linkin Park"],
    ["Over Each Other", "Linkin Park"],
    ["Two Faced", "Linkin Park"],
    ["Up From the Bottom", "Linkin Park"],
    ["Friendly Fire", "Linkin Park"],
    ["Lost", "Linkin Park"],
    ["Rescued", "Foo Fighters"],
    ["Under You", "Foo Fighters"],
    ["The Teacher", "Foo Fighters"],
    ["Show Me How", "Foo Fighters"],
    ["The Glass", "Foo Fighters"],
    ["Waiting on a War", "Foo Fighters"],
    ["Shame Shame", "Foo Fighters"],
    ["The American Dream Is Killing Me", "Green Day"],
    ["Dilemma", "Green Day"],
    ["Bobby Sox", "Green Day"],
    ["One Eyed Bastard", "Green Day"],
    ["Look Ma, No Brains!", "Green Day"],
    ["The Foundations of Decay", "My Chemical Romance"],
    ["Now and Then", "The Beatles"],
    ["Black Summer", "Red Hot Chili Peppers"],
    ["Tippa My Tongue", "Red Hot Chili Peppers"],
    ["Eddie", "Red Hot Chili Peppers"],
    ["These Are the Ways", "Red Hot Chili Peppers"],
    ["The Drummer", "Red Hot Chili Peppers"],
    ["Won't Stand Down", "Muse"],
    ["Compliance", "Muse"],
    ["Kill or Be Killed", "Muse"],
    ["You Make Me Feel Like It's Halloween", "Muse"]

];

// Artist and specialist tags are added to every generated question.
// The original song list, answer keys and ID order are preserved.
const artistTags = {
    "Chappell Roan": ["Chappell Roan", "American music", "dance-pop", "synthpop", "pop", "singer-songwriters"],
    "Billie Eilish": ["Billie Eilish", "American music", "alternative pop", "electropop", "pop", "singer-songwriters"],
    "Djo": ["Djo", "Joe Keery", "American music", "psychedelic pop", "indie pop", "alternative rock", "solo projects"],
    "HUNTR/X": ["HUNTR/X", "KPop Demon Hunters", "EJAE", "Audrey Nuna", "Rei Ami", "K-pop", "film soundtracks", "animated films", "fictional music groups"],
    "ROSÉ and Bruno Mars": ["ROSÉ", "Bruno Mars", "Blackpink", "South Korean music", "American music", "pop rock", "duets", "collaborations"],
    "Lola Young": ["Lola Young", "UK music", "London music", "alternative pop", "soul pop", "singer-songwriters"],
    "Teddy Swims": ["Teddy Swims", "American music", "soul pop", "R&B", "pop", "male vocalists"],
    "Shaboozey": ["Shaboozey", "American music", "country pop", "country music", "hip hop influences"],
    "Hozier": ["Hozier", "Irish music", "folk rock", "blues rock", "soul", "singer-songwriters"],
    "Noah Kahan": ["Noah Kahan", "American music", "indie folk", "folk pop", "singer-songwriters"],
    "Lizzy McAlpine": ["Lizzy McAlpine", "American music", "indie folk", "folk pop", "singer-songwriters"],
    "Paris Paloma": ["Paris Paloma", "UK music", "dark folk", "indie folk", "alternative pop", "singer-songwriters"],
    "boygenius": ["boygenius", "American music", "indie rock", "indie folk", "supergroups", "Phoebe Bridgers", "Lucy Dacus", "Julien Baker"],
    "Sam Fender": ["Sam Fender", "UK music", "Newcastle music", "heartland rock", "indie rock", "singer-songwriters"],
    "Olivia Dean": ["Olivia Dean", "UK music", "London music", "soul pop", "neo soul", "singer-songwriters"],
    "Wet Leg": ["Wet Leg", "UK music", "Isle of Wight music", "indie rock", "post-punk", "rock bands"],
    "Fontaines D.C.": ["Fontaines D.C.", "Irish music", "Dublin music", "post-punk", "alternative rock", "rock bands"],
    "Blur": ["Blur", "UK music", "Britpop", "alternative rock", "indie rock", "rock bands"],
    "Noel Gallagher's High Flying Birds": ["Noel Gallagher's High Flying Birds", "Noel Gallagher", "UK music", "Manchester music", "alternative rock", "Britpop", "Oasis connections"],
    "Liam Gallagher": ["Liam Gallagher", "UK music", "Manchester music", "Britpop", "alternative rock", "Oasis connections"],
    "Liam Gallagher and John Squire": ["Liam Gallagher", "John Squire", "Oasis", "The Stone Roses", "UK music", "Manchester music", "Britpop", "alternative rock", "collaborations", "musical duos"],
    "Biffy Clyro": ["Biffy Clyro", "Scottish music", "UK music", "alternative rock", "rock bands"],
    "Linkin Park": ["Linkin Park", "American music", "alternative rock", "nu metal", "rock bands"],
    "Foo Fighters": ["Foo Fighters", "American music", "alternative rock", "hard rock", "Dave Grohl", "rock bands"],
    "Green Day": ["Green Day", "American music", "punk rock", "pop punk", "rock bands"],
    "My Chemical Romance": ["My Chemical Romance", "American music", "alternative rock", "emo", "rock bands"],
    "The Beatles": ["The Beatles", "UK music", "Liverpool music", "classic rock", "pop rock", "archival releases", "rock bands"],
    "Red Hot Chili Peppers": ["Red Hot Chili Peppers", "American music", "funk rock", "alternative rock", "rock bands"],
    "Muse": ["Muse", "UK music", "Devon music", "alternative rock", "progressive rock", "rock bands"]
};

// Album associations are not claims that every song was first released
// in the album's year. Early singles and archival recordings are tagged
// separately where relevant.
const albumTracks = [
    ["Chappell Roan", "The Rise and Fall of a Midwest Princess", "2023 albums", ["Femininomenon", "My Kink Is Karma"]],
    ["Billie Eilish", "HIT ME HARD AND SOFT", "2024 albums", ["Lunch", "Chihiro", "Wildflower", "The Greatest"]],
    ["Billie Eilish", "Happier Than Ever", "2021 albums", ["Therefore I Am", "Your Power"]],
    ["Djo", "DECIDE", "2022 albums", ["End of Beginning"]],
    ["Djo", "The Crux", "2025 albums", ["Basic Being Basic", "Delete Ya", "Back on You"]],
    ["HUNTR/X", "KPop Demon Hunters soundtrack", "2025 soundtracks", ["Golden"]],
    ["ROSÉ and Bruno Mars", "rosie", "2024 albums", ["APT."]],
    ["Teddy Swims", "I've Tried Everything but Therapy (Part 1)", "2023 albums", ["The Door"]],
    ["Teddy Swims", "I've Tried Everything but Therapy (Part 1.5)", "2024 albums", ["Hammer to the Heart"]],
    ["Teddy Swims", "I've Tried Everything but Therapy (Part 2)", "2025 albums", ["Bad Dreams", "Guilty"]],
    ["Shaboozey", "Where I've Been, Isn't Where I'm Going", "2024 albums", ["Highway"]],
    ["Shaboozey", "Where I've Been, Isn't Where I'm Going: The Complete Edition", "2025 deluxe albums", ["Good News"]],
    ["Hozier", "Unreal Unearth", "2023 albums", ["Eat Your Young", "Francesca"]],
    ["Hozier", "Unaired EP", "2024 EPs", ["Nobody's Soldier"]],
    ["Noah Kahan", "Stick Season", "2022 albums", ["Dial Drunk"]],
    ["Lizzy McAlpine", "five seconds flat", "2022 albums", ["Ceilings", "Erase Me", "All My Ghosts"]],
    ["Lizzy McAlpine", "Older", "2024 albums", ["Older", "I Guess"]],
    ["Paris Paloma", "Cacophony", "2024 albums", ["Labour", "The Fruits", "As Good a Reason", "Boys, Bugs and Men"]],
    ["boygenius", "the record", "2023 albums", ["Not Strong Enough", "Cool About It", "Emily I'm Sorry", "True Blue", "$20"]],
    ["Sam Fender", "People Watching", "2025 albums", ["Arm's Length", "Little Bit Closer"]],
    ["Olivia Dean", "Messy", "2023 albums", ["Dive", "The Hardest Part", "Carmen", "Messy"]],
    ["Olivia Dean", "The Art of Loving", "2025 albums", ["Lady Lady"]],
    ["Wet Leg", "moisturizer", "2025 albums", ["Catch These Fists", "CPR", "Mangetout"]],
    ["Fontaines D.C.", "Romance", "2024 albums", ["In the Modern World", "Bug", "Sundowner"]],
    ["Blur", "The Ballad of Darren", "2023 albums", ["The Narcissist", "St. Charles Square", "Barbaric", "The Ballad", "Avalon"]],
    ["Noel Gallagher's High Flying Birds", "Council Skies", "2023 albums", ["The Dying Light", "Easy Now", "Council Skies", "Pretty Boy", "Dead to the World"]],
    ["Liam Gallagher", "C'mon You Know", "2022 albums", ["Everything's Electric", "Better Days", "Diamond in the Dark"]],
    ["Liam Gallagher and John Squire", "Liam Gallagher & John Squire", "2024 albums", ["Mars to Liverpool", "Just Another Rainbow", "Raise Your Hands"]],
    ["Biffy Clyro", "The Myth of the Happily Ever After", "2021 albums", ["A Hunger in Your Haunt"]],
    ["Biffy Clyro", "A Celebration of Endings", "2020 albums", ["Space"]],
    ["Linkin Park", "From Zero", "2024 albums", ["The Emptiness Machine", "Heavy Is the Crown", "Over Each Other", "Two Faced"]],
    ["Linkin Park", "From Zero (Deluxe Edition)", "2025 albums", ["Up From the Bottom"]],
    ["Linkin Park", "Papercuts", "2024 compilations", ["Friendly Fire"]],
    ["Linkin Park", "Meteora (20th Anniversary Edition)", "2023 reissues", ["Lost"]],
    ["Foo Fighters", "But Here We Are", "2023 albums", ["Rescued", "Under You", "The Teacher", "Show Me How", "The Glass"]],
    ["Foo Fighters", "Medicine at Midnight", "2021 albums", ["Waiting on a War", "Shame Shame"]],
    ["Green Day", "Saviors", "2024 albums", ["The American Dream Is Killing Me", "Dilemma", "Bobby Sox", "One Eyed Bastard", "Look Ma, No Brains!"]],
    ["Red Hot Chili Peppers", "Unlimited Love", "2022 albums", ["Black Summer", "These Are the Ways"]],
    ["Red Hot Chili Peppers", "Return of the Dream Canteen", "2022 albums", ["Tippa My Tongue", "Eddie", "The Drummer"]],
    ["Muse", "Will of the People", "2022 albums", ["Won't Stand Down", "Compliance", "Kill or Be Killed", "You Make Me Feel Like It's Halloween"]]
];

const recordingTags = {
    "Chappell Roan|Femininomenon": ["2022 singles"],
    "Chappell Roan|My Kink Is Karma": ["2022 singles"],
    "Billie Eilish|Therefore I Am": ["2020 singles"],
    "Billie Eilish|Your Power": ["2021 singles"],
    "Djo|End of Beginning": ["2022 songs", "2024 chart success", "Joe Keery"],
    "Djo|Basic Being Basic": ["2025 singles"],
    "HUNTR/X|Golden": ["2025 singles", "EJAE", "Audrey Nuna", "Rei Ami", "animated musicals", "UK number ones"],
    "ROSÉ and Bruno Mars|APT.": ["2024 singles", "duets", "Blackpink", "K-pop", "pop collaborations"],
    "Lola Young|Flicker of Light": ["2024 singles"],
    "Teddy Swims|Bad Dreams": ["2024 singles"],
    "Shaboozey|Good News": ["2024 singles"],
    "Hozier|Nobody's Soldier": ["2024 singles", "Unaired EP"],
    "Noah Kahan|Dial Drunk": ["2022 original recording", "Post Malone", "2023 duet versions"],
    "Lizzy McAlpine|Erase Me": ["Jacob Collier", "featured artists", "2022 singles"],
    "Paris Paloma|Labour": ["2023 singles", "feminist anthems", "viral songs"],
    "Olivia Dean|The Hardest Part": ["2020 original releases", "Leon Bridges", "2023 duet versions"],
    "Olivia Dean|Messy": ["2023 songs", "title tracks", "Olivia Dean debut album"],
    "Wet Leg|Catch These Fists": ["2025 singles"],
    "Linkin Park|Friendly Fire": ["2024 singles", "archival recordings", "Chester Bennington"],
    "Linkin Park|Lost": ["2023 singles", "archival recordings", "Meteora sessions", "Chester Bennington"],
    "My Chemical Romance|The Foundations of Decay": ["2022 singles", "non-album singles"],
    "The Beatles|Now and Then": ["2023 singles", "archival recordings", "John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
    "Foo Fighters|Shame Shame": ["2020 singles"]
};

const questionCorrections = {
    12: "Which fictional K-pop group performs 'Golden' in the film KPop Demon Hunters?",
    26: "Which American singer released 'Erase Me' featuring Jacob Collier?",
    44: "Which British singer recorded the title track of her 2023 debut album 'Messy'?",
    65: "Which two musicians collaborated on 'Mars to Liverpool'?",
    66: "Which two musicians collaborated on 'Just Another Rainbow'?",
    67: "Which two musicians collaborated on 'Raise Your Hands'?",
    76: "Which rock band released the previously unheard 'Lost' from its Meteora sessions?",
    90: "Which band released the completed archival single 'Now and Then' in 2023?"
};

function creditedPerformers(name) {
    return name.split(/,\s*|\s+and\s+/).map(s => s.trim());
}

function overlapsArtist(a, b) {
    return creditedPerformers(a).some(part => creditedPerformers(b).includes(part));
}

function makeTags(title, artist) {
    const album = albumTracks.find(([act, , , tracks]) =>
        act === artist && tracks.includes(title)
    );
    return [...new Set([
        "2020s", "songs", "artist identification", "recordings",
        ...artistTags[artist],
        ...(album ? [album[1], album[2]] : []),
        ...(recordingTags[`${artist}|${title}`] || [])
    ])];
}

// Validate the source list before building questions.

if (songs.length !== 100) {
    throw new Error(
        "Pack 135 must contain 100 songs. Found: " +
        songs.length
    );
}

// Create a pool of distinct artist names.

const artistPool = [
    ...new Set(songs.map(entry => entry[1]))
];

// Generate the questions.

const quizPack135 = songs.map((entry, index) => {

    const [song, artist] = entry;

    const otherArtists = artistPool.filter(
        name => name !== artist
    );

    const wrongAnswers = [];
    const used = new Set([artist]);

    let position = (index * 7) % otherArtists.length;

    while (wrongAnswers.length < 3) {

        const candidate = otherArtists[position];

        if (!used.has(candidate)) {
            wrongAnswers.push(candidate);
            used.add(candidate);
        }

        position = (position + 5) % otherArtists.length;
    }

    // Do not offer a solo singer as an alternative to a correct duet
    // containing that same singer (or vice versa).
    for (let i = 0; i < wrongAnswers.length; i++) {
        if (overlapsArtist(artist, wrongAnswers[i])) {
            const candidate = artistPool.find(name =>
                !overlapsArtist(artist, name) &&
                !wrongAnswers.includes(name)
            );
            if (!candidate) throw new Error("No fair alternative answer");
            wrongAnswers[i] = candidate;
        }
    }

    const answers = [
        artist,
        ...wrongAnswers
    ];

    // Rotate the answer order to vary the
    // correct answer's position.

    const shift = index % 4;

    const rotatedAnswers = [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];

    return {
        id: "music_" + (11567 + index),
        category: "Music",
        question: questionCorrections[index] || "Which artist recorded '" + song + "'?",
        answers: rotatedAnswers,
        correctAnswer: artist,
        difficulty: index % 3 === 0 ? "Easy" : "Medium",
        tags: makeTags(song, artist),
        dailyEligible: true
    };

});

module.exports = quizPack135;
