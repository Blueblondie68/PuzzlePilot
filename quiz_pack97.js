// quiz_pack97.js
// PuzzlePilot Big Quiz - Pack 97
// Music - 2000s
// 100 questions
// IDs: music_7767 - music_7866

const songs = [
    ["In My Place", "Coldplay"],
    ["Speed of Sound", "Coldplay"],
    ["Talk", "Coldplay"],
    ["The Hardest Part", "Coldplay"],
    ["Violet Hill", "Coldplay"],
    ["Lovers in Japan", "Coldplay"],
    ["Life in Technicolor II", "Coldplay"],
    ["Don't Panic", "Coldplay"],
    ["Trouble", "Coldplay"],
    ["God Put a Smile upon Your Face", "Coldplay"],
    ["The Importance of Being Idle", "Oasis"],
    ["Lyla", "Oasis"],
    ["Let There Be Love", "Oasis"],
    ["Stop Crying Your Heart Out", "Oasis"],
    ["Little by Little", "Oasis"],
    ["Songbird", "Oasis"],
    ["The Shock of the Lightning", "Oasis"],
    ["I'm Outta Time", "Oasis"],
    ["The Hindu Times", "Oasis"],
    ["Falling Down", "Oasis"],
    ["The Bucket", "Kings of Leon"],
    ["Four Kicks", "Kings of Leon"],
    ["On Call", "Kings of Leon"],
    ["Fans", "Kings of Leon"],
    ["Notion", "Kings of Leon"],
    ["Molly's Chambers", "Kings of Leon"],
    ["Red Morning Light", "Kings of Leon"],
    ["Charmer", "Kings of Leon"],
    ["The View from the Afternoon", "Arctic Monkeys"],
    ["Fake Tales of San Francisco", "Arctic Monkeys"],
    ["Teddy Picker", "Arctic Monkeys"],
    ["Brianstorm", "Arctic Monkeys"],
    ["D Is for Dangerous", "Arctic Monkeys"],
    ["Crying Lightning", "Arctic Monkeys"],
    ["Cornerstone", "Arctic Monkeys"],
    ["My Propeller", "Arctic Monkeys"],
    ["A Certain Romance", "Arctic Monkeys"],
    ["505", "Arctic Monkeys"],
    ["Smile Like You Mean It", "The Killers"],
    ["All These Things That I've Done", "The Killers"],
    ["Bones", "The Killers"],
    ["For Reasons Unknown", "The Killers"],
    ["Human", "The Killers"],
    ["Spaceman", "The Killers"],
    ["A Dustland Fairytale", "The Killers"],
    ["The World We Live In", "The Killers"],

    ["Ashes", "Embrace"],
    ["Gravity", "Embrace"],
    ["Nature's Law", "Embrace"],
    ["Target", "Embrace"],
    ["Looking as You Are", "Embrace"],
    ["Our Lives", "The Calling"],
    ["Anything", "The Calling"],
    ["For You", "The Calling"],
    ["Could It Be Any Harder", "The Calling"],
    ["Running Away", "Hoobastank"],
    ["Same Direction", "Hoobastank"],
    ["Remember Me", "Hoobastank"],
    ["Where Did All the Love Go?", "Kasabian"],
    ["Shoot the Runner", "Kasabian"],
    ["Empire", "Kasabian"],
    ["Fire", "Kasabian"],
    ["Underdog", "Kasabian"],
    ["Processed Beats", "Kasabian"],
    ["Me Plus One", "Kasabian"],
    ["LSF", "Kasabian"],
    ["Golden Retriever", "Super Furry Animals"],
    ["Juxtapozed with U", "Super Furry Animals"],
    ["Rings Around the World", "Super Furry Animals"],
    ["It's Not the End of the World?", "Super Furry Animals"],
    ["Do or Die", "Super Furry Animals"],
    ["Just the Way I'm Feeling", "Feeder"],
    ["Forget About Tomorrow", "Feeder"],
    ["Tumble and Fall", "Feeder"],
    ["Shatter", "Feeder"],
    ["Lost and Found", "Feeder"],
    ["Pushing the Senses", "Feeder"],
    ["Seven Days in the Sun", "Feeder"],
    ["Average Man", "Turin Brakes"],
    ["5 Mile (These Are the Days)", "Turin Brakes"],
    ["Fishing for a Dream", "Turin Brakes"],
    ["Something in My Eye", "Turin Brakes"],
    ["Pain Killer", "Turin Brakes"],
    ["Wires", "Athlete"],
    ["Half Light", "Athlete"],
    ["Twenty Four Hours", "Athlete"],
    ["Hurricane", "Athlete"],
    ["Superhuman Touch", "Athlete"],
    ["You Got the Style", "Athlete"],
    ["El Salvador", "Athlete"],
    ["Modern Mafia", "Athlete"],
    ["Bullets", "Editors"],
    ["All Sparks", "Editors"],
    ["Bones", "Editors"],
    ["The Racing Rats", "Editors"],
    ["Push Your Head Towards the Air", "Editors"],
    ["Papillon", "Editors"],

    ["Blackened Blue Eyes", "The Charlatans"],
    ["You're So Pretty - We're So Pretty", "The Charlatans"],
    ["Up at the Lake", "The Charlatans"]
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
                7767 + index;

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
