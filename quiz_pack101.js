// quiz_pack101.js
// PuzzlePilot Big Quiz - Pack 101
// Music - 2000s
// 100 questions
// IDs: music_8167 - music_8266

const songs = [
    ["Hummer", "Foals"],
    ["Two Steps, Twice", "Foals"],

    ["Electric Bloom", "Foals"],
    ["French Open", "Foals"],
    ["Big Big Love (Fig. 2)", "Foals"],
    ["Tron", "Foals"],
    ["Heavy Water", "Foals"],

    ["Backfire at the Disco", "The Wombats"],
    ["My First Wedding", "The Wombats"],
    ["Lost in the Post", "The Wombats"],
    ["School Uniforms", "The Wombats"],
    ["Here Comes the Anxiety", "The Wombats"],
    ["Patricia the Stripper", "The Wombats"],
    ["Little Miss Pipedream", "The Wombats"],

    ["Gravity's Rainbow", "Klaxons"],
    ["Magick", "Klaxons"],
    ["As Above, So Below", "Klaxons"],
    ["Totem on the Timeline", "Klaxons"],
    ["Isle of Her", "Klaxons"],
    ["Forgotten Works", "Klaxons"],
    ["Four Horsemen of 2012", "Klaxons"],

    ["Objects of My Affection", "Peter Bjorn and John"],
    ["Let's Call It Off", "Peter Bjorn and John"],
    ["Amsterdam", "Peter Bjorn and John"],
    ["The Chills", "Peter Bjorn and John"],
    ["Paris 2004", "Peter Bjorn and John"],
    ["Up Against the Wall", "Peter Bjorn and John"],
    ["Start to Melt", "Peter Bjorn and John"],
    ["Roll the Credits", "Peter Bjorn and John"],
    ["Nothing to Worry About", "Peter Bjorn and John"],

    ["Zoo Time", "Mystery Jets"],
    ["Alas Agnes", "Mystery Jets"],
    ["You Can't Fool Me Dennis", "Mystery Jets"],
    ["Veiled in Grey", "Mystery Jets"],

    ["Hey Girl", "The Delays"],
    ["Wanderlust", "The Delays"],
    ["Keep It Simple", "The Delays"],
    ["You and Me", "The Delays"],

    ["The Beginning of the Twist", "The Futureheads"],
    ["Area", "The Futureheads"],
    ["Skip to the End", "The Futureheads"],
    ["News and Tributes", "The Futureheads"],
    ["Radio Heart", "The Futureheads"],
    ["Walking Backwards", "The Futureheads"],
    ["Heartbeat Song", "The Futureheads"],
    ["Carnival Kids", "The Futureheads"],

    ["Positive Tension", "Bloc Party"],
    ["So Here We Are", "Bloc Party"],
    ["She's Hearing Voices", "Bloc Party"],
    ["Pioneers", "Bloc Party"],
    ["Waiting for the 7.18", "Bloc Party"],
    ["Sunday", "Bloc Party"],
    ["Uniform", "Bloc Party"],
    ["Song for Clay (Disappear Here)", "Bloc Party"],
    ["SRXT", "Bloc Party"],
    ["Kreuzberg", "Bloc Party"],
    ["Where Is Home?", "Bloc Party"],

    ["Everything Is Average Nowadays", "Kaiser Chiefs"],
    ["Good Days Bad Days", "Kaiser Chiefs"],
    ["You Want History", "Kaiser Chiefs"],
    ["Heat Dies Down", "Kaiser Chiefs"],
    ["I Can Do It Without You", "Kaiser Chiefs"],
    ["Highroyds", "Kaiser Chiefs"],
    ["Na Na Na Na Naa", "Kaiser Chiefs"],
    ["Saturday Night", "Kaiser Chiefs"],

    ["Whistle for the Choir", "The Fratellis"],
    ["Flathead", "The Fratellis"],
    ["Baby Fratelli", "The Fratellis"],
    ["Ole Black 'n' Blue Eyes", "The Fratellis"],
    ["Mistress Mabel", "The Fratellis"],
    ["Look Out Sunshine!", "The Fratellis"],
    ["A Heady Tale", "The Fratellis"],
    ["My Friend John", "The Fratellis"],
    ["Acid Jazz Singer", "The Fratellis"],
    ["Doginabag", "The Fratellis"],
    ["Vince the Loveable Stoner", "The Fratellis"],
    ["Creepin Up the Backstairs", "The Fratellis"],
    ["For the Girl", "The Fratellis"],
    ["Got Ma Nuts from a Hippy", "The Fratellis"],

    ["That's What She Said", "The Automatic"],
    ["By My Side", "The Automatic"],
    ["Keep Your Eyes Peeled", "The Automatic"],
    ["Team Drama", "The Automatic"],
    ["Light Entertainment", "The Automatic"],
    ["Responsible Citizen", "The Automatic"],
    ["This Is a Fix", "The Automatic"],
    ["Secret Police", "The Automatic"],
    ["Accessories", "The Automatic"],
    ["Sleepwalking", "The Automatic"],

    ["Rock & Roll Queen", "The Subways"],
    ["Oh Yeah", "The Subways"],
    ["With You", "The Subways"],
    ["No Goodbyes", "The Subways"],
    ["Mary", "The Subways"],
    ["Girls & Boys", "The Subways"],
    ["Shake! Shake!", "The Subways"],
    ["Alright", "The Subways"],
    ["I Won't Let You Down", "The Subways"],
    ["Kalifornia", "The Subways"],
    ["22", "The Rifles"]
];

const artists = [
    ...new Set(
        songs.map(
            song => song[1]
        )
    )
];

function makeAnswers(
    correctAnswer,
    index
) {
    const otherArtists =
        artists.filter(
            artist =>
                artist !== correctAnswer
        );

    const answers = [
        correctAnswer,
        otherArtists[
            index %
            otherArtists.length
        ],
        otherArtists[
            (index + 11) %
            otherArtists.length
        ],
        otherArtists[
            (index + 23) %
            otherArtists.length
        ]
    ];

    const shift =
        index % answers.length;

    return [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];
}

const questions =
    songs.map(
        (song, index) => {
            const title =
                song[0];

            const artist =
                song[1];

            const number =
                8167 + index;

            return {
                id:
                    `music_${String(number).padStart(4, '0')}`,

                category:
                    'Music',

                question:
                    `Which artist recorded ${title}?`,

                answers:
                    makeAnswers(
                        artist,
                        index
                    ),

                correctAnswer:
                    artist,

                difficulty:
                    index % 3 === 0
                        ? 'Easy'
                        : 'Medium',

                tags: [
                    '2000s',
                    'songs'
                ],

                dailyEligible:
                    true
            };
        }
    );

module.exports =
    questions;
