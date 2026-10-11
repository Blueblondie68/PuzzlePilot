
//
// quiz_pack134.js
// PuzzlePilot Music Quiz
// Pack 134 - Music of the 2020s
// Questions music_11467 to music_11566
//

const songs = [
    ["Easy On Me", "Adele"],
    ["Oh My God", "Adele"],
    ["I Drink Wine", "Adele"],
    ["To Be Loved", "Adele"],
    ["Hold On", "Adele"],
    ["Can I Get It", "Adele"],
    ["Love Is a Game", "Adele"],
    ["Strangers by Nature", "Adele"],

    ["Forget Me", "Lewis Capaldi"],
    ["Wish You the Best", "Lewis Capaldi"],
    ["Pointless", "Lewis Capaldi"],
    ["How I'm Feeling Now", "Lewis Capaldi"],

    ["Unholy", "Sam Smith and Kim Petras"],
    ["I'm Not Here to Make Friends", "Sam Smith"],
    ["Love Me More", "Sam Smith"],
    ["Diamonds", "Sam Smith"],
    ["To Die For", "Sam Smith"],

    ["Escapism.", "RAYE and 070 Shake"],
    ["Worth It.", "RAYE"],
    ["Oscar Winning Tears.", "RAYE"],
    ["Black Mascara.", "RAYE"],
    ["The Thrill Is Gone.", "RAYE"],
    ["Hard Out Here.", "RAYE"],
    ["Genesis.", "RAYE"],

    ["Strangers", "Kenya Grace"],

    ["Sprinter", "Dave and Central Cee"],
    ["Starlight", "Dave"],
    ["Verdansk", "Dave"],
    ["Clash", "Dave and Stormzy"],
    ["Location", "Dave and Burna Boy"],
    ["Doja", "Central Cee"],
    ["Let Go", "Central Cee"],
    ["Obsessed With You", "Central Cee"],

    ["Boy's a liar Pt. 2", "PinkPantheress and Ice Spice"],
    ["Pain", "PinkPantheress"],
    ["Just for me", "PinkPantheress"],
    ["Break It Off", "PinkPantheress"],
    ["Nice to meet you", "PinkPantheress and Central Cee"],
    ["Illegal", "PinkPantheress"],

    ["Water", "Tyla"],
    ["Truth or Dare", "Tyla"],
    ["Jump", "Tyla"],
    ["Push 2 Start", "Tyla"],

    ["Calm Down", "Rema"],
    ["Soundgasm", "Rema"],
    ["Charm", "Rema"],
    ["Baby (Is It a Crime)", "Rema"],

    ["Last Last", "Burna Boy"],
    ["City Boys", "Burna Boy"],
    ["For My Hand", "Burna Boy and Ed Sheeran"],
    ["Sittin' on Top of the World", "Burna Boy"],

    ["Rush", "Ayra Starr"],
    ["Commas", "Ayra Starr"],
    ["Bloody Samaritan", "Ayra Starr"],
    ["Sability", "Ayra Starr"],

    ["Where Are You Now", "Lost Frequencies and Calum Scott"],
    ["Miracle", "Calvin Harris and Ellie Goulding"],
    ["Desire", "Calvin Harris and Sam Smith"],
    ["Potion", "Calvin Harris, Dua Lipa and Young Thug"],
    ["Stay with Me", "Calvin Harris, Justin Timberlake, Halsey and Pharrell Williams"],
    ["Lovers in a Past Life", "Calvin Harris and Rag'n'Bone Man"],
    ["Blessings", "Calvin Harris and Clementine Douglas"],

    ["Baddadan", "Chase & Status"],
    ["Backbone", "Chase & Status and Stormzy"],
    ["Disconnect", "Chase & Status and Becky Hill"],

    ["React", "Switch Disco and Ella Henderson"],
    ["Prada", "cassö, RAYE and D-Block Europe"],
    ["Ferrari", "James Hype and Miggy Dela Rosa"],
    ["Make Me Feel Good", "Belters Only and Jazzy"],
    ["Giving Me", "Jazzy"],

    ["Green Green Grass", "George Ezra"],
    ["Anyone for You (Tiger Lily)", "George Ezra"],
    ["Dance All Over Me", "George Ezra"],
    ["Gold Rush Kid", "George Ezra"],
    ["I Went Hunting", "George Ezra"],

    ["Afraid to Feel", "LF SYSTEM"],
    ["21 Reasons", "Nathan Dawe and Ella Henderson"],
    ["0800 Heaven", "Nathan Dawe, Joel Corry and Ella Henderson"],
    ["Head & Heart", "Joel Corry and MNEK"],
    ["BED", "Joel Corry, RAYE and David Guetta"],

    ["Back on 74", "Jungle"],
    ["Keep Moving", "Jungle"],

    ["Chaise Longue", "Wet Leg"],

    ["Starburster", "Fontaines D.C."],
    ["Favourite", "Fontaines D.C."],

    ["Candle Flame", "Jungle and Erick the Architect"],
    ["I've Been in Love", "Jungle and Channel Tres"],
    ["All of the Time", "Jungle"],

    ["Wet Dream", "Wet Leg"],
    ["Angelica", "Wet Leg"],
    ["Ur Mum", "Wet Leg"],
    ["Too Late Now", "Wet Leg"],
    ["Being in Love", "Wet Leg"],

    ["Here's the Thing", "Fontaines D.C."],
    ["I Love You", "Fontaines D.C."],
    ["Jackie Down the Line", "Fontaines D.C."],
    ["Roman Holiday", "Fontaines D.C."],

    ["The Adults Are Talking", "The Strokes"],
    ["Bad Decisions", "The Strokes"],
    ["Brooklyn Bridge to Chorus", "The Strokes"]
];

// Build the answer pool from all credited artists.

const artistPool = [
    ...new Set(songs.map(entry => entry[1]))
];

// Generate the complete question bank.

const quizPack134 = songs.map((entry, index) => {

    const [song, artist] = entry;

    const otherArtists = artistPool.filter(
        name => name !== artist
    );

    // Choose three different incorrect artists.
    const wrongAnswers = [];
    const used = new Set([artist]);

    let position = (index * 7) % otherArtists.length;

    while (wrongAnswers.length < 3) {
        const candidate = otherArtists[position];

        if (used.has(candidate) === false) {
            wrongAnswers.push(candidate);
            used.add(candidate);
        }

        position = (position + 5) % otherArtists.length;
    }

    // Include the correct artist.
    const answers = [
        artist,
        ...wrongAnswers
    ];

    // Vary the position of the correct answer.
    const shift = index % 4;

    const rotatedAnswers = [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];

    return {
        id: "music_" + String(11467 + index),
        category: "Music",
        question: "Which artist recorded '" + song + "'?",
        answers: rotatedAnswers,
        correctAnswer: artist
    };
});

module.exports = quizPack134;
