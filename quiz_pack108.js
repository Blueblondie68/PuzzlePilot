// quiz_pack108.js
// PuzzlePilot Big Quiz - Pack 108
// Music - 2000s
// 100 questions
// IDs: music_8867 - music_8966

const songs = [
    ["Sucker Train Blues", "Velvet Revolver"],
    ["Do It for the Kids", "Velvet Revolver"],
    ["Big Machine", "Velvet Revolver"],
    ["Spectacle", "Velvet Revolver"],
    ["Get Out the Door", "Velvet Revolver"],

    ["Hard to Explain", "The Strokes"],
    ["Someday", "The Strokes"],
    ["The Modern Age", "The Strokes"],
    ["12:51", "The Strokes"],
    ["Reptilia", "The Strokes"],
    ["The End Has No End", "The Strokes"],
    ["Juicebox", "The Strokes"],
    ["Heart in a Cage", "The Strokes"],
    ["You Only Live Once", "The Strokes"],

    ["First It Giveth", "Queens of the Stone Age"],
    ["In My Head", "Queens of the Stone Age"],
    ["Burn the Witch", "Queens of the Stone Age"],
    ["Sick, Sick, Sick", "Queens of the Stone Age"],
    ["Make It wit Chu", "Queens of the Stone Age"],
    ["3's & 7's", "Queens of the Stone Age"],

    ["You Were the Last High", "The Dandy Warhols"],

    ["Hash Pipe", "Weezer"],
    ["Island in the Sun", "Weezer"],
    ["Photograph", "Weezer"],
    ["Dope Nose", "Weezer"],
    ["Keep Fishin'", "Weezer"],
    ["Beverly Hills", "Weezer"],
    ["Perfect Situation", "Weezer"],
    ["Pork and Beans", "Weezer"],
    ["Troublemaker", "Weezer"],

    ["Sweetness", "Jimmy Eat World"],
    ["A Praise Chorus", "Jimmy Eat World"],
    ["Pain", "Jimmy Eat World"],
    ["Work", "Jimmy Eat World"],
    ["Futures", "Jimmy Eat World"],
    ["Big Casino", "Jimmy Eat World"],
    ["Always Be", "Jimmy Eat World"],

    ["Lifestyles of the Rich and Famous", "Good Charlotte"],
    ["Hold On", "Good Charlotte"],
    ["Predictable", "Good Charlotte"],
    ["The River", "Good Charlotte"],
    ["Dance Floor Anthem", "Good Charlotte"],

    ["Motivation", "Sum 41"],
    ["The Hell Song", "Sum 41"],
    ["Over My Head (Better Off Dead)", "Sum 41"],
    ["Pieces", "Sum 41"],
    ["Some Say", "Sum 41"],
    ["Underclass Hero", "Sum 41"],
    ["Walking Disaster", "Sum 41"],

    ["Attitude", "Alien Ant Farm"],

    ["Broken Home", "Papa Roach"],
    ["Between Angels and Insects", "Papa Roach"],
    ["She Loves Me Not", "Papa Roach"],
    ["Forever", "Papa Roach"],

    ["The Taste of Ink", "The Used"],
    ["Buried Myself Alive", "The Used"],
    ["Blue and Yellow", "The Used"],
    ["Take It Away", "The Used"],
    ["All That I've Got", "The Used"],
    ["I Caught Fire", "The Used"],
    ["The Bird and the Worm", "The Used"],
    ["Pretty Handsome Awkward", "The Used"],

    ["Cute Without the E (Cut from the Team)", "Taking Back Sunday"],
    ["You're So Last Summer", "Taking Back Sunday"],
    ["A Decade Under the Influence", "Taking Back Sunday"],
    ["This Photograph Is Proof (I Know You Know)", "Taking Back Sunday"],
    ["MakeDamnSure", "Taking Back Sunday"],
    ["Liar (It Takes One to Know One)", "Taking Back Sunday"],

    ["A Little Less Sixteen Candles, a Little More Touch Me", "Fall Out Boy"],
    ["Thnks fr th Mmrs", "Fall Out Boy"],
    ["The Take Over, the Breaks Over", "Fall Out Boy"],
    ["I'm Like a Lawyer with the Way I'm Always Trying to Get You Off", "Fall Out Boy"],
    ["Beat It", "Fall Out Boy"],
    ["I Don't Care", "Fall Out Boy"],

    ["That's What You Get", "Paramore"],
    ["Ignorance", "Paramore"],
    ["Brick by Boring Brick", "Paramore"],

    ["Secret Valentine", "We the Kings"],
    ["Skyway Avenue", "We the Kings"],

    ["It Ends Tonight", "The All-American Rejects"],
    ["Gives You Hell", "The All-American Rejects"],
    ["I Wanna", "The All-American Rejects"],
    ["The Last Song", "The All-American Rejects"],

    ["Way Away", "Yellowcard"],
    ["Only One", "Yellowcard"],
    ["Lights and Sounds", "Yellowcard"],
    ["Rough Landing, Holly", "Yellowcard"],
    ["Light Up the Sky", "Yellowcard"],

    ["I'd Do Anything", "Simple Plan"],
    ["Addicted", "Simple Plan"],
    ["Perfect", "Simple Plan"],
    ["Welcome to My Life", "Simple Plan"],
    ["Shut Up", "Simple Plan"],
    ["Untitled (How Could This Happen to Me?)", "Simple Plan"],
    ["When I'm Gone", "Simple Plan"],
    ["Your Love Is a Lie", "Simple Plan"],

    ["The Great Escape", "Boys Like Girls"],
    ["Hero/Heroine", "Boys Like Girls"],
    ["Thunder", "Boys Like Girls"],
    ["Love Drunk", "Boys Like Girls"]
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
                8867 + index;

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
