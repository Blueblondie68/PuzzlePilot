// quiz_pack112.js
// PuzzlePilot Big Quiz - Pack 112
// Music - 2000s
// 100 questions
// IDs: music_9267 - music_9366

const songs = [
    ["So Far Away", "Crossfade"],
    ["Colors", "Crossfade"],

    ["Headstrong", "Trapt"],
    ["Still Frame", "Trapt"],
    ["Echo", "Trapt"],

    ["Send the Pain Below", "Chevelle"],
    ["Closure", "Chevelle"],
    ["Vitamin R (Leading Us Along)", "Chevelle"],
    ["The Clincher", "Chevelle"],
    ["Well Enough Alone", "Chevelle"],
    ["I Get It", "Chevelle"],

    ["Save Me", "Shinedown"],
    ["I Dare You", "Shinedown"],
    ["Devour", "Shinedown"],
    ["Second Chance", "Shinedown"],
    ["Sound of Madness", "Shinedown"],
    ["If You Only Knew", "Shinedown"],

    ["The Red", "Chevelle"],

    ["Wasteland", "10 Years"],
    ["Through the Iris", "10 Years"],
    ["Beautiful", "10 Years"],

    ["Lips of an Angel", "Hinder"],
    ["Get Stoned", "Hinder"],
    ["Better Than Me", "Hinder"],
    ["Use Me", "Hinder"],

    ["Hate Me", "Blue October"],
    ["Into the Ocean", "Blue October"],
    ["Dirt Room", "Blue October"],

    ["Paralyzer", "Finger Eleven"],
    ["One Thing", "Finger Eleven"],
    ["Falling On", "Finger Eleven"],

    ["Cold", "Static-X"],
    ["The Only", "Static-X"],
    ["Destroyer", "Static-X"],

    ["Happy?", "Mudvayne"],
    ["Forget to Remember", "Mudvayne"],
    ["Not Falling", "Mudvayne"],

    ["My Curse", "Killswitch Engage"],
    ["The Arms of Sorrow", "Killswitch Engage"],
    ["Rose of Sharyn", "Killswitch Engage"],
    ["The End of Heartache", "Killswitch Engage"],

    ["Pull Harder on the Strings of Your Martyr", "Trivium"],
    ["A Gunshot to the Head of Trepidation", "Trivium"],
    ["Dying in Your Arms", "Trivium"],
    ["Anthem (We Are the Fire)", "Trivium"],
    ["Down from the Sky", "Trivium"],

    ["Through Struggle", "As I Lay Dying"],
    ["Nothing Left", "As I Lay Dying"],
    ["The Sound of Truth", "As I Lay Dying"],

    ["Cloud Connected", "In Flames"],
    ["Trigger", "In Flames"],
    ["Take This Life", "In Flames"],
    ["Come Clarity", "In Flames"],

    ["Nemesis", "Arch Enemy"],
    ["Revolution Begins", "Arch Enemy"],

    ["Redneck", "Lamb of God"],
    ["Walk with Me in Hell", "Lamb of God"],
    ["Set to Fail", "Lamb of God"],

    ["Blood and Thunder", "Mastodon"],
    ["Colony of Birchmen", "Mastodon"],
    ["Oblivion", "Mastodon"],
    ["Divinations", "Mastodon"],

    ["I Stand Alone", "Godsmack"],
    ["Straight Out of Line", "Godsmack"],
    ["Serenity", "Godsmack"],
    ["Speak", "Godsmack"],

    ["Pain", "Three Days Grace"],
    ["Just Like You", "Three Days Grace"],
    ["Home", "Three Days Grace"],
    ["Animal I Have Become", "Three Days Grace"],
    ["Never Too Late", "Three Days Grace"],
    ["Riot", "Three Days Grace"],
    ["Break", "Three Days Grace"],
    ["Take Me Under", "Three Days Grace"],
    ["I Hate Everything About You", "Three Days Grace"],

    ["All Around Me", "Flyleaf"],
    ["Fully Alive", "Flyleaf"],
    ["I'm So Sick", "Flyleaf"],
    ["Again", "Flyleaf"],

    ["I'm Not an Angel", "Halestorm"],
    ["It's Not You", "Halestorm"],
    ["Familiar Taste of Poison", "Halestorm"],

    ["Going Under", "Evanescence"],
    ["Everybody's Fool", "Evanescence"],
    ["Call Me When You're Sober", "Evanescence"],
    ["Lithium", "Evanescence"],
    ["Good Enough", "Evanescence"],

    ["45", "Shinedown"],
    ["Fly from the Inside", "Shinedown"],
    ["Burning Bright", "Shinedown"],
    ["Heroes", "Shinedown"],
    ["Save Me", "Shinedown"],

    ["Bother", "Stone Sour"],
    ["Inhale", "Stone Sour"],
    ["Through Glass", "Stone Sour"],
    ["Sillyworld", "Stone Sour"],
    ["Made of Scars", "Stone Sour"],
    ["Get Inside", "Stone Sour"],

    ["Halo", "Soil"],
    ["Unreal", "Soil"]
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
                9267 + index;

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
