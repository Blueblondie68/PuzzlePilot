// quiz_pack110.js
// PuzzlePilot Big Quiz - Pack 110
// Music - 2000s
// 100 questions
// IDs: music_9067 - music_9166

const songs = [
    ["Do It for Me Now", "Angels & Airwaves"],
    ["Everything's Magic", "Angels & Airwaves"],
    ["Secret Crowds", "Angels & Airwaves"],

    ["Make a Move", "Incubus"],
    ["Anna Molly", "Incubus"],
    ["Dig", "Incubus"],
    ["Oil and Water", "Incubus"],

    ["The Kill", "Thirty Seconds to Mars"],
    ["From Yesterday", "Thirty Seconds to Mars"],
    ["A Beautiful Lie", "Thirty Seconds to Mars"],
    ["Attack", "Thirty Seconds to Mars"],

    ["Miss Murder", "AFI"],
    ["Love Like Winter", "AFI"],
    ["Silver and Cold", "AFI"],
    ["The Leaving Song Pt. II", "AFI"],

    ["Prayer of the Refugee", "Rise Against"],
    ["Ready to Fall", "Rise Against"],
    ["Re-Education (Through Labor)", "Rise Against"],
    ["Audience of One", "Rise Against"],
    ["Swing Life Away", "Rise Against"],

    ["Damn Regret", "The Red Jumpsuit Apparatus"],
    ["Cat and Mouse", "The Red Jumpsuit Apparatus"],
    ["You Better Pray", "The Red Jumpsuit Apparatus"],

    ["Night Drive", "The All-American Rejects"],
    ["Dance Inside", "The All-American Rejects"],

    ["Beating Heart Baby", "Head Automatica"],
    ["Graduation Day", "Head Automatica"],

    ["Honestly", "Zwan"],
    ["Lyric", "Zwan"],

    ["My Friends Over You", "New Found Glory"],
    ["Head on Collision", "New Found Glory"],
    ["All Downhill from Here", "New Found Glory"],
    ["Failure's Not Flattering", "New Found Glory"],
    ["I Don't Wanna Know", "New Found Glory"],
    ["It's Not Your Fault", "New Found Glory"],
    ["Kiss Me", "New Found Glory"],

    ["Bleed American", "Jimmy Eat World"],
    ["Hear You Me", "Jimmy Eat World"],
    ["Authority Song", "Jimmy Eat World"],
    ["Get It Faster", "Jimmy Eat World"],
    ["Kill", "Jimmy Eat World"],
    ["Polaris", "Jimmy Eat World"],
    ["Let It Happen", "Jimmy Eat World"],

    ["The Downfall of Us All", "A Day to Remember"],
    ["If It Means a Lot to You", "A Day to Remember"],
    ["Have Faith in Me", "A Day to Remember"],
    ["I'm Made of Wax, Larry, What Are You Made Of?", "A Day to Remember"],

    ["Situations", "Escape the Fate"],
    ["Not Good Enough for Truth in Cliche", "Escape the Fate"],
    ["The Flood", "Escape the Fate"],
    ["Something", "Escape the Fate"],

    ["Writing on the Walls", "Underoath"],
    ["Reinventing Your Exit", "Underoath"],
    ["It's Dangerous Business Walking Out Your Front Door", "Underoath"],
    ["A Boy Brushed Red Living in Black and White", "Underoath"],
    ["Desperate Times, Desperate Measures", "Underoath"],

    ["Baby, You Wouldn't Last a Minute on the Creek", "Chiodos"],
    ["The Words Best Friend Become Redefined", "Chiodos"],
    ["Lexington (Joey Pea-Pot with a Monkey Face)", "Chiodos"],

    ["Helena", "My Chemical Romance"],
    ["The Ghost of You", "My Chemical Romance"],
    ["I Don't Love You", "My Chemical Romance"],

    ["Duality", "Slipknot"],
    ["Before I Forget", "Slipknot"],
    ["Vermilion", "Slipknot"],
    ["Psychosocial", "Slipknot"],
    ["Dead Memories", "Slipknot"],

    ["Bat Country", "Avenged Sevenfold"],
    ["Beast and the Harlot", "Avenged Sevenfold"],
    ["Seize the Day", "Avenged Sevenfold"],
    ["Almost Easy", "Avenged Sevenfold"],
    ["Afterlife", "Avenged Sevenfold"],
    ["Dear God", "Avenged Sevenfold"],

    ["Tears Don't Fall", "Bullet for My Valentine"],
    ["All These Things I Hate (Revolve Around Me)", "Bullet for My Valentine"],
    ["Scream Aim Fire", "Bullet for My Valentine"],
    ["Hearts Burst into Fire", "Bullet for My Valentine"],
    ["Waking the Demon", "Bullet for My Valentine"],

    ["Last Train Home", "Lostprophets"],
    ["Wake Up (Make a Move)", "Lostprophets"],
    ["Last Summer", "Lostprophets"],
    ["Rooftops (A Liberation Broadcast)", "Lostprophets"],
    ["Can't Catch Tomorrow (Good Shoes Won't Save You This Time)", "Lostprophets"],
    ["4:AM Forever", "Lostprophets"],

    ["Come Back Around", "Feeder"],

    ["Prayer", "Disturbed"],
    ["Stricken", "Disturbed"],
    ["Land of Confusion", "Disturbed"],
    ["Inside the Fire", "Disturbed"],
    ["Indestructible", "Disturbed"],

    ["Remedy", "Seether"],
    ["Fake It", "Seether"],
    ["Rise Above This", "Seether"],
    ["Breakdown", "Seether"],
    ["Fine Again", "Seether"],
    ["Broken", "Seether"],

    ["So Cold", "Breaking Benjamin"],
    ["Sooner or Later", "Breaking Benjamin"],
    ["The Diary of Jane", "Breaking Benjamin"],
    ["Breath", "Breaking Benjamin"]
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
                9067 + index;

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
