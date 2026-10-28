 // quiz_pack126.js
// PuzzlePilot Big Quiz
// Music Pack 126
// Mostly 2010s indie/alternative music; one verified 2020 track
// 100 questions; IDs music_10667 - music_10766
// Expanded artist, region, genre, album and collaboration tags

const songs = [
    ["TOOTIMETOOTIMETOOTIME", "The 1975"],
    ["Heart Out", "The 1975"],
    ["Settle Down", "The 1975"],

    ["Bros", "Wolf Alice"],
    ["Moaning Lisa Smile", "Wolf Alice"],
    ["Giant Peach", "Wolf Alice"],
    ["Freazy", "Wolf Alice"],
    ["Beautifully Unconventional", "Wolf Alice"],
    ["Don't Delete the Kisses", "Wolf Alice"],
    ["Yuk Foo", "Wolf Alice"],
    ["Silk", "Wolf Alice"],

    ["Black Magic", "The Amazons"],
    ["Junk Food Forever", "The Amazons"],
    ["Stay With Me", "The Amazons"],
    ["Mother", "The Amazons"],
    ["Doubt It", "The Amazons"],

    ["Greek Tragedy", "The Wombats"],
    ["Give Me a Try", "The Wombats"],
    ["Your Body Is a Weapon", "The Wombats"],
    ["Lemon to a Knife Fight", "The Wombats"],
    ["Turn", "The Wombats"],
    ["Cheetah Tongue", "The Wombats"],
    ["Tokyo (Vampires & Wolves)", "The Wombats"],

    ["Done in Secret", "The Pigeon Detectives"],
    ["I Won't Come Back", "The Pigeon Detectives"],

    ["Feel to Follow", "The Maccabees"],
    ["Ayla", "The Maccabees"],
    ["Something Like Happiness", "The Maccabees"],

    ["Snake Oil", "Foals"],
    ["Exits", "Foals"],
    ["Sunday", "Foals"],
    ["Bad Habit", "Foals"],

    ["Amsterdam", "Nothing But Thieves"],
    ["Trip Switch", "Nothing But Thieves"],
    ["Itch", "Nothing But Thieves"],
    ["Wake Up Call", "Nothing But Thieves"],
    ["Sorry", "Nothing But Thieves"],
    ["Particles", "Nothing But Thieves"],
    ["Forever and Ever More", "Nothing But Thieves"],
    ["If I Get High", "Nothing But Thieves"],
    ["Ban All the Music", "Nothing But Thieves"],
    ["Lover Please Stay", "Nothing But Thieves"],

    ["Brazil", "Declan McKenna"],
    ["Isombard", "Declan McKenna"],
    ["The Kids Don't Wanna Come Home", "Declan McKenna"],
    ["Humongous", "Declan McKenna"],
    ["Why Do You Feel So Down", "Declan McKenna"],
    ["Make Me Your Queen", "Declan McKenna"],
    ["Paracetamol", "Declan McKenna"],
    ["Rapture", "Declan McKenna"],

    ["Four Out of Five", "Arctic Monkeys"],
    ["Tranquility Base Hotel & Casino", "Arctic Monkeys"],
    ["Star Treatment", "Arctic Monkeys"],
    ["Batphone", "Arctic Monkeys"],

    ["Delete", "DMA's"],
    ["Lay Down", "DMA's"],
    ["Feels Like 37", "DMA's"],
    ["Worship", "Years & Years"],
    ["Meteorite", "Years & Years"],
    ["Step Up the Morphine", "DMA's"],
    ["In the Moment", "DMA's"],
    ["All for You", "Years & Years"],
    ["Play", "Years & Years"],
    ["Too Soon", "DMA's"],

    ["Us", "James Bay"],
    ["Peer Pressure", "James Bay"],

    ["Don't Matter Now", "George Ezra"],

    ["Charlemagne", "Blossoms"],
    ["At Most a Kiss", "Blossoms"],
    ["Getaway", "Blossoms"],
    ["Honey Sweet", "Blossoms"],
    ["Blown Rose", "Blossoms"],
    ["Cut Me and I'll Bleed", "Blossoms"],
    ["There's a Reason Why (I Never Returned Your Calls)", "Blossoms"],
    ["I Can't Stand It", "Blossoms"],
    ["How Long Will This Last", "Blossoms"],
    ["Your Girlfriend", "Blossoms"],

    ["T-Shirt Weather", "Circa Waves"],
    ["Stuck in My Teeth", "Circa Waves"],
    ["Fossils", "Circa Waves"],
    ["Young Chasers", "Circa Waves"],
    ["Get Away", "Circa Waves"],
    ["Fire That Burns", "Circa Waves"],
    ["Wake Up", "Circa Waves"],
    ["Goodbye", "Circa Waves"],
    ["Movies", "Circa Waves"],
    ["Times Won't Change Me", "Circa Waves"],

    ["Flame", "Sundara Karma"],
    ["She Said", "Sundara Karma"],
    ["Loveblood", "Sundara Karma"],
    ["A Young Understanding", "Sundara Karma"],
    ["Vivienne", "Sundara Karma"],
    ["Olympia", "Sundara Karma"],
    ["Happy Family", "Sundara Karma"],
    ["Indigo Puff", "Sundara Karma"],
    ["Cold Heaven", "Sundara Karma"],
    ["One Last Night on This Earth", "Sundara Karma"],

    ["She's Casual", "The Hunna"],
    ["Bonfire", "The Hunna"],
    ["You & Me", "The Hunna"]
];

// Every question receives these shared artist, region and genre tags.
// Recordings and question IDs are otherwise preserved.
const artistTags = {
    "The 1975": ["The 1975", "UK music", "Manchester music", "indie pop", "synthpop", "alternative rock", "rock bands"],
    "Wolf Alice": ["Wolf Alice", "UK music", "indie rock", "alternative rock", "shoegaze", "rock bands", "Mercury Prize winners"],
    "The Amazons": ["The Amazons", "UK music", "indie rock", "hard rock", "rock bands"],
    "The Wombats": ["The Wombats", "UK music", "Liverpool music", "indie rock", "indie pop", "rock bands"],
    "The Pigeon Detectives": ["The Pigeon Detectives", "UK music", "Leeds music", "indie rock", "post-punk revival", "rock bands"],
    "The Maccabees": ["The Maccabees", "UK music", "indie rock", "alternative rock", "rock bands"],
    "Foals": ["Foals", "UK music", "Oxford music", "indie rock", "alternative rock", "rock bands"],
    "Nothing But Thieves": ["Nothing But Thieves", "UK music", "alternative rock", "indie rock", "rock bands"],
    "Declan McKenna": ["Declan McKenna", "UK music", "indie pop", "alternative rock", "singer-songwriters"],
    "Arctic Monkeys": ["Arctic Monkeys", "UK music", "Sheffield music", "indie rock", "alternative rock", "rock bands", "Mercury Prize winners"],
    "DMA's": ["DMA's", "Australian music", "indie rock", "Britpop revival", "rock bands"],
    "Years & Years": ["Years & Years", "UK music", "synthpop", "electropop", "dance-pop", "Olly Alexander", "pop groups"],
    "James Bay": ["James Bay", "UK music", "folk rock", "pop rock", "singer-songwriters"],
    "George Ezra": ["George Ezra", "UK music", "folk pop", "pop rock", "singer-songwriters"],
    "Blossoms": ["Blossoms", "UK music", "Manchester music", "Stockport music", "indie pop", "indie rock", "synthpop", "rock bands"],
    "Circa Waves": ["Circa Waves", "UK music", "Liverpool music", "indie rock", "guitar rock", "rock bands"],
    "Sundara Karma": ["Sundara Karma", "UK music", "indie rock", "psychedelic pop", "alternative rock", "rock bands"],
    "The Hunna": ["The Hunna", "UK music", "indie rock", "pop rock", "rock bands"]
};

// Track-specific context for specialist quizzes. Only recorded
// collaborations are described as collaborations.
const recordingTags = {
    "The 1975|TOOTIMETOOTIMETOOTIME": ["2018 singles", "A Brief Inquiry Into Online Relationships"],
    "Wolf Alice|Don't Delete the Kisses": ["Visions of a Life", "2017 singles"],
    "Wolf Alice|Beautifully Unconventional": ["Visions of a Life"],
    "Wolf Alice|Yuk Foo": ["Visions of a Life"],
    "Wolf Alice|Silk": ["My Love Is Cool"],
    "The Wombats|Tokyo (Vampires & Wolves)": ["2010 singles", "This Modern Glitch"],
    "The Pigeon Detectives|I Won't Come Back": ["2013 singles", "We Met at Sea"],
    "Foals|Snake Oil": ["What Went Down"],
    "Foals|Exits": ["2019 singles", "Everything Not Saved Will Be Lost Part 1"],
    "Foals|Sunday": ["Everything Not Saved Will Be Lost Part 1"],
    "Nothing But Thieves|Amsterdam": ["2017 singles", "Broken Machine"],
    "Declan McKenna|Brazil": ["2015 singles", "What Do You Think About the Car?"],
    "Declan McKenna|Rapture": ["2020 singles", "Zeros"],
    "Arctic Monkeys|Four Out of Five": ["2018 singles", "Tranquility Base Hotel & Casino"],
    "Arctic Monkeys|Tranquility Base Hotel & Casino": ["Tranquility Base Hotel & Casino", "2018 albums"],
    "Arctic Monkeys|Star Treatment": ["Tranquility Base Hotel & Casino"],
    "Arctic Monkeys|Batphone": ["Tranquility Base Hotel & Casino"],
    "Years & Years|Meteorite": ["2016 singles", "film soundtracks", "Bridget Jones's Baby"],
    "Years & Years|Play": ["Jax Jones", "collaborations", "DJ partnerships", "2018 singles"],
    "James Bay|Peer Pressure": ["Julia Michaels", "collaborations", "duets", "2019 singles"],
    "Blossoms|Charlemagne": ["2015 singles", "Blossoms debut album"],
    "Blossoms|There's a Reason Why (I Never Returned Your Calls)": ["Cool Like You", "2018 singles"]
};

// Jointly credited singles need precise wording so the
// answer selected from the original choices is unambiguous.
const questionCorrections = {
    62: "Which British pop group collaborated with Jax Jones on 'Play'?",
    65: "Which British singer recorded 'Peer Pressure' featuring Julia Michaels?"
};

function makeTags(title, artist) {
    // Rapture appeared in 2020 on Zeros, not in the 2010s.
    const era = artist === "Declan McKenna" && title === "Rapture"
        ? "2020s"
        : "2010s";

    return [...new Set([
        era,
        "songs",
        "artist identification",
        "recordings",
        ...artistTags[artist],
        ...(recordingTags[`${artist}|${title}`] || [])
    ])];
}

const artists = [
    ...new Set(songs.map(song => song[1]))
];

function makeAnswers(correctArtist, index) {
    const others = artists.filter(
        artist => artist !== correctArtist
    );

    const wrong = [
        others[index % others.length],
        others[(index + 11) % others.length],
        others[(index + 23) % others.length]
    ];

    const answers = [
        correctArtist,
        ...wrong
    ];

    const position = index % 4;

    answers.splice(0, 1);
    answers.splice(position, 0, correctArtist);

    return answers;
}

const questions = songs.map((song, index) => {
    const title = song[0];
    const artist = song[1];

    return {
        id: "music_" + (10667 + index),
        category: "Music",
        question:
            questionCorrections[index] ||
            "Which artist recorded '" +
            title +
            "'?",
        answers: makeAnswers(artist, index),
        correctAnswer: artist,
        difficulty:
            index % 3 === 0
                ? "Easy"
                : "Medium",
        tags: makeTags(title, artist),
        dailyEligible: true
    };
});

module.exports = questions;
