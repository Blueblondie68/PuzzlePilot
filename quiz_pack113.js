// quiz_pack113.js
// PuzzlePilot Big Quiz - Pack 113
// Music - 2000s
// 100 questions
// IDs: music_9367 - music_9466

const songs = [
    ["Redefine", "Soil"],
    ["Driven Under", "Seether"],

    ["The Truth", "Limp Bizkit"],
    ["Eat You Alive", "Limp Bizkit"],
    ["Behind Blue Eyes", "Limp Bizkit"],
    ["Boiler", "Limp Bizkit"],

    ["Points of Authority", "Linkin Park"],
    ["Papercut", "Linkin Park"],
    ["Crawling", "Linkin Park"],
    ["Somewhere I Belong", "Linkin Park"],
    ["Faint", "Linkin Park"],
    ["Breaking the Habit", "Linkin Park"],
    ["Bleed It Out", "Linkin Park"],
    ["Shadow of the Day", "Linkin Park"],
    ["Given Up", "Linkin Park"],
    ["New Divide", "Linkin Park"],

    ["Alive", "P.O.D."],

    ["Hands", "The Raconteurs"],
    ["Level", "The Raconteurs"],
    ["Old Enough", "The Raconteurs"],

    ["Hang Me Up to Dry", "Cold War Kids"],
    ["Hospital Beds", "Cold War Kids"],
    ["Something Is Not Right with Me", "Cold War Kids"],

    ["Build a Bridge", "Limp Bizkit"],
    ["Almost Over", "Limp Bizkit"],
    ["The One", "Limp Bizkit"],

    ["Figure.09", "Linkin Park"],
    ["From the Inside", "Linkin Park"],
    ["Lying from You", "Linkin Park"],
    ["Leave Out All the Rest", "Linkin Park"],
    ["No More Sorrow", "Linkin Park"],

    ["Control", "Puddle of Mudd"],
    ["Drift and Die", "Puddle of Mudd"],
    ["Psycho", "Puddle of Mudd"],
    ["Famous", "Puddle of Mudd"],

    ["Awake", "Godsmack"],
    ["Greed", "Godsmack"],
    ["Re-Align", "Godsmack"],
    ["Shine Down", "Godsmack"],
    ["Whiskey Hangover", "Godsmack"],

    ["Remedy", "Cold"],
    ["Stupid Girl", "Cold"],
    ["Just Got Wicked", "Cold"],
    ["Gone Away", "Cold"],

    ["Polyamorous", "Breaking Benjamin"],
    ["Skin", "Breaking Benjamin"],
    ["Medicate", "Breaking Benjamin"],
    ["Firefly", "Breaking Benjamin"],
    ["Dance with the Devil", "Breaking Benjamin"],

    ["Gasoline", "Seether"],
    ["Truth", "Seether"],
    ["The Gift", "Seether"],
    ["Careless Whisper", "Seether"],

    ["Never Again", "Nickelback"],
    ["Figured You Out", "Nickelback"],
    ["Because of You", "Nickelback"],
    ["Side of a Bullet", "Nickelback"],
    ["Something in Your Mouth", "Nickelback"],
    ["Burn It to the Ground", "Nickelback"],

    ["Mudshovel", "Staind"],
    ["Epiphany", "Staind"],
    ["How About You", "Staind"],
    ["Zoe Jane", "Staind"],
    ["Falling", "Staind"],
    ["Believe", "Staind"],

    ["Out of Control", "Hoobastank"],
    ["Disappear", "Hoobastank"],
    ["If I Were You", "Hoobastank"],

    ["Innocent", "Fuel"],
    ["Won't Back Down", "Fuel"],
    ["Million Miles", "Fuel"],

    ["Wasting My Time", "Default"],
    ["Deny", "Default"],
    ["Live a Lie", "Default"],
    ["Count on Me", "Default"],

    ["Sick Cycle Carousel", "Lifehouse"],
    ["Spin", "Lifehouse"],
    ["Take Me Away", "Lifehouse"],
    ["Blind", "Lifehouse"],
    ["First Time", "Lifehouse"],

    ["Are You Still Having Fun?", "Eagle-Eye Cherry"],

    ["Where Is the Love?", "Black Eyed Peas"],
    ["Don't Phunk with My Heart", "Black Eyed Peas"],
    ["My Humps", "Black Eyed Peas"],
    ["Pump It", "Black Eyed Peas"],
    ["Boom Boom Pow", "Black Eyed Peas"],
    ["Meet Me Halfway", "Black Eyed Peas"],

    ["Mr Rock & Roll", "Amy Macdonald"],
    ["L.A.", "Amy Macdonald"],
    ["Run", "Amy Macdonald"],
    ["Poison Prince", "Amy Macdonald"],

    ["Under the Weather", "KT Tunstall"],
    ["Another Place to Fall", "KT Tunstall"],

    ["Merry Happy", "Kate Nash"],
    ["Come Over", "Estelle"],

    ["Last Resort", "Eagles of Death Metal"],
    ["I Want You So Hard (Boy's Bad News)", "Eagles of Death Metal"],
    ["I Gotta Feelin (Just Nineteen)", "Eagles of Death Metal"],
    ["Wannabe in L.A.", "Eagles of Death Metal"],
    ["Get Free", "The Vines"]
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
                9367 + index;

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
