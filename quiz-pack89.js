// quiz_pack89.js
// PuzzlePilot Big Quiz
// Music Pack 89
// 100 questions
// IDs: music_6967 to music_7066
// music_7000 is included in this pack

const songs = [
    ["Hey Man Nice Shot", "Filter", "Medium"],
    ["Dose", "Filter", "Hard"],
    ["Welcome to the Fold", "Filter", "Hard"],
    ["Jurassitol", "Filter", "Hard"],

    ["Unsung", "Helmet", "Medium"],
    ["Milquetoast", "Helmet", "Hard"],
    ["Exactly What You Wanted", "Helmet", "Hard"],
    ["In the Meantime", "Helmet", "Medium"],

    ["Mother", "Danzig", "Medium"],
    ["Cantspeak", "Danzig", "Hard"],
    ["It's Coming Down", "Danzig", "Hard"],

    ["Until It Sleeps", "Metallica", "Easy"],

    ["Everything About You", "Ugly Kid Joe", "Easy"],
    ["Cats in the Cradle", "Ugly Kid Joe", "Medium"],
    ["Neighbor", "Ugly Kid Joe", "Hard"],
    ["Milkman's Son", "Ugly Kid Joe", "Hard"],

    ["Mouth", "Bush", "Medium"],
    ["Greedy Fly", "Bush", "Medium"],
    ["Swallowed", "Bush", "Medium"],
    ["Cold Contagious", "Bush", "Hard"],
    ["The Chemicals Between Us", "Bush", "Medium"],
    ["Comedown", "Bush", "Easy"],
    ["Machinehead", "Bush", "Medium"],
    ["Little Things", "Bush", "Medium"],
    ["Glycerine", "Bush", "Easy"],

    ["The Pod", "Hum", "Hard"],
    ["Comin' Home", "Hum", "Hard"],
    ["Iron Clad Lou", "Hum", "Hard"],

    ["Stars", "Dubstar", "Medium"],
    ["Not So Manic Now", "Dubstar", "Medium"],
    ["St Swithin's Day", "Dubstar", "Hard"],
    ["No More Talk", "Dubstar", "Hard"],
    ["Anywhere", "Dubstar", "Hard"],

    // music_7000
    ["Begin Again", "Space", "Medium"],

    ["La Tristesse Durera (Scream to a Sigh)", "Manic Street Preachers", "Hard"],

    ["Reverend Black Grape", "Black Grape", "Medium"],
    ["In the Name of the Father", "Black Grape", "Medium"],
    ["Kelly's Heroes", "Black Grape", "Medium"],
    ["England's Irie", "Black Grape", "Hard"],
    ["Get Higher", "Black Grape", "Hard"],
    ["Marbles", "Black Grape", "Hard"],

    ["The Only Living Boy in New Cross", "Carter USM", "Medium"],
    ["Do Re Me So Far So Good", "Carter USM", "Hard"],
    ["The Impossible Dream", "Carter USM", "Medium"],
    ["After the Watershed", "Carter USM", "Hard"],
    ["Sheriff Fatman", "Carter USM", "Medium"],
    ["Glam Rock Cops", "Carter USM", "Hard"],
    ["Bloodsport for All", "Carter USM", "Hard"],
    ["Lean on Me I Won't Fall Over", "Carter USM", "Hard"],

    ["Goodnight Elizabeth", "Counting Crows", "Hard"],
    ["Daylight Fading", "Counting Crows", "Medium"],
    ["Hanginaround", "Counting Crows", "Medium"],
    ["Angels of the Silences", "Counting Crows", "Medium"],
    ["Have You Seen Me Lately", "Counting Crows", "Hard"],
    ["Catapult", "Counting Crows", "Hard"],
    ["Mercury", "Counting Crows", "Hard"],
    ["Anna Begins", "Counting Crows", "Medium"],
    ["Rain King", "Counting Crows", "Medium"],
    ["Omaha", "Counting Crows", "Medium"],
    ["Einstein on the Beach", "Counting Crows", "Hard"],

    ["The Freshmen", "The Verve Pipe", "Medium"],
    ["Photograph", "The Verve Pipe", "Hard"],
    ["Villains", "The Verve Pipe", "Hard"],
    ["Cup of Tea", "The Verve Pipe", "Hard"],

    ["Whatever", "Godsmack", "Medium"],
    ["Keep Away", "Godsmack", "Medium"],
    ["Voodoo", "Godsmack", "Medium"],
    ["Bad Religion", "Godsmack", "Hard"],

    ["Fritz's Corner", "Local H", "Hard"],
    ["High-Fiving MF", "Local H", "Hard"],
    ["Eddie Vedder", "Local H", "Medium"],

    ["High on a Happy Vibe", "Urban Cookie Collective", "Hard"],
    ["Don't Give Me Your Love", "Urban Cookie Collective", "Hard"],

    ["U and Me", "Cappella", "Medium"],
    ["Move It Up", "Cappella", "Hard"],
    ["Tell Me the Way", "Cappella", "Hard"],

    ["It's a Rainy Day", "Ice MC", "Medium"],
    ["Take Away the Colour", "Ice MC", "Hard"],
    ["Russian Roulette", "Ice MC", "Hard"],

    ["Another Night", "MC Sar and the Real McCoy", "Medium"],
    ["Run Away", "MC Sar and the Real McCoy", "Medium"],

    ["Love and Devotion", "Real McCoy", "Medium"],
    ["Come and Get Your Love", "Real McCoy", "Medium"],
    ["Automatic Lover (Call for Love)", "Real McCoy", "Hard"],

    ["Get-A-Way", "Maxx", "Medium"],
    ["No More (I Can't Stand It)", "Maxx", "Medium"],
    ["You Can Get It", "Maxx", "Hard"],

    ["Move Your Body", "Anticappella", "Hard"],

    ["2 Times", "Ann Lee", "Easy"],
    ["Voices", "Ann Lee", "Hard"],
    ["Ring My Bell", "Ann Lee", "Hard"],

    ["Big Time", "Whigfield", "Hard"],
    ["Close to You", "Whigfield", "Hard"],

    ["Try Me Out", "Corona", "Medium"],
    ["I Don't Wanna Be a Star", "Corona", "Medium"],

    ["Let the Dream Come True", "DJ Bobo", "Hard"],
    ["Love Is All Around", "DJ Bobo", "Hard"],
    ["Freedom", "DJ Bobo", "Hard"],
    ["Pray", "DJ Bobo", "Hard"],

    ["I Miss You", "Haddaway", "Medium"]
];

const artists = [...new Set(
    songs.map(song => song[1])
)];

function makeAnswers(correctArtist, index) {
    const wrong = [];

    for (
        let offset = 1;
        wrong.length < 3;
        offset++
    ) {
        const candidate =
            artists[
                (index + offset) %
                artists.length
            ];

        if (
            candidate !== correctArtist &&
            wrong.includes(candidate) === false
        ) {
            wrong.push(candidate);
        }
    }

    const answers = [
        correctArtist,
        ...wrong
    ];

    // Deterministic rotation so the correct answer
    // is not always stored in the same position.
    const shift = index % 4;

    return [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];
}

const quizPack89 = songs.map(
    ([title, artist, difficulty], index) => ({
        id: `music_${6967 + index}`,
        category: "Music",
        difficulty,
        question:
            `Which artist recorded '${title}'?`,
        answers: makeAnswers(
            artist,
            index
        ),
        correctAnswer: artist
    })
);

module.exports = quizPack89;
