// quiz_pack106.js
// PuzzlePilot Big Quiz - Pack 106
// Music - 2000s
// 100 questions
// IDs: music_8667 - music_8766

const songs = [
    ["Sweet Dreams My LA Ex", "Rachel Stevens"],
    ["Funky Dory", "Rachel Stevens"],
    ["Some Girls", "Rachel Stevens"],
    ["More More More", "Rachel Stevens"],
    ["Negotiate with Love", "Rachel Stevens"],
    ["So Good", "Rachel Stevens"],
    ["I Said Never Again (But Here We Are)", "Rachel Stevens"],
    ["Nothing Good About This Goodbye", "Rachel Stevens"],

    ["I'll Be There", "Emma Bunton"],
    ["Crickets Sing for Anamaria", "Emma Bunton"],
    ["All I Need to Know", "Emma Bunton"],
    ["Downtown", "Emma Bunton"],
    ["Take My Breath Away", "Emma Bunton"],
    ["We're Not Gonna Sleep Tonight", "Emma Bunton"],

    ["Out of Your Mind", "True Steppers feat. Dane Bowers and Victoria Beckham"],
    ["A Mind of Its Own", "Victoria Beckham"],

    ["James Dean (I Wanna Know)", "Daniel Bedingfield"],
    ["I Can't Read You", "Daniel Bedingfield"],
    ["Friday", "Daniel Bedingfield"],

    ["Wild Horses", "Natasha Bedingfield"],
    ["Say It Again", "Natasha Bedingfield"],
    ["Angel", "Natasha Bedingfield"],

    ["DJ", "Jamelia"],
    ["Stop", "Jamelia"],
    ["Something About You", "Jamelia"],

    ["Shoulda Woulda Coulda", "Beverley Knight"],
    ["Come as You Are", "Beverley Knight"],
    ["Not Too Late for Love", "Beverley Knight"],
    ["Keep This Fire Burning", "Beverley Knight"],
    ["Piece of My Heart", "Beverley Knight"],
    ["No Man's Land", "Beverley Knight"],
    ["After You", "Beverley Knight"],

    ["Dy-Na-Mi-Tee", "Ms. Dynamite"],
    ["It Takes More", "Ms. Dynamite"],
    ["Put Him Out", "Ms. Dynamite"],
    ["Brother", "Ms. Dynamite"],
    ["Judgement Day", "Ms. Dynamite"],

    ["Just a Little Bit", "Mutya Buena"],
    ["Real Girl", "Mutya Buena"],
    ["B Boy Baby", "Mutya Buena feat. Amy Winehouse"],

    ["Never Be the Same Again", "Melanie C feat. Lisa Left Eye Lopes"],
    ["I Turn to You", "Melanie C"],
    ["If That Were Me", "Melanie C"],
    ["Here It Comes Again", "Melanie C"],
    ["On the Horizon", "Melanie C"],
    ["Melt", "Melanie C"],
    ["Next Best Superstar", "Melanie C"],
    ["Better Alone", "Melanie C"],
    ["The Moment You Believe", "Melanie C"],

    ["Maybe That's What It Takes", "Alex Parks"],
    ["Cry", "Alex Parks"],
    ["Looking for Water", "Alex Parks"],
    ["Honesty", "Alex Parks"],

    ["Suspicious Minds", "Gareth Gates"],
    ["What My Heart Wants to Say", "Gareth Gates"],
    ["Sunshine", "Gareth Gates"],
    ["Say It Isn't So", "Gareth Gates"],
    ["Spirit in the Sky", "Gareth Gates and The Kumars"],

    ["Friday's Child", "Will Young"],
    ["Switch It On", "Will Young"],
    ["All Time Love", "Will Young"],
    ["Who Am I", "Will Young"],
    ["Changes", "Will Young"],
    ["Grace", "Will Young"],
    ["Evergreen", "Will Young"],
    ["Light My Fire", "Will Young"],
    ["The Long and Winding Road", "Will Young and Gareth Gates"],

    ["See the Day", "Girls Aloud"],
    ["Whole Lotta History", "Girls Aloud"],
    ["Sexy No No No", "Girls Aloud"],

    ["All This Time", "Michelle McManus"],
    ["The Meaning of Love", "Michelle McManus"],

    ["No Promises", "Shayne Ward"],
    ["Stand by Me", "Shayne Ward"],
    ["If That's OK with You", "Shayne Ward"],
    ["No U Hang Up", "Shayne Ward"],
    ["Breathless", "Shayne Ward"],

    ["Footprints in the Sand", "Leona Lewis"],
    ["Run", "Leona Lewis"],
    ["Happy", "Leona Lewis"],

    ["Bad Boys", "Alexandra Burke feat. Flo Rida"],

    ["The Climb", "Joe McElderry"],

    ["You Give Me Something", "James Morrison"],
    ["Wonderful World", "James Morrison"],
    ["The Pieces Don't Fit Anymore", "James Morrison"],
    ["Undiscovered", "James Morrison"],
    ["You Make It Real", "James Morrison"],
    ["Broken Strings", "James Morrison feat. Nelly Furtado"],
    ["Please Don't Stop the Rain", "James Morrison"],

    ["Rewind", "Paolo Nutini"],

    ["I Need Something", "Newton Faulkner"],
    ["All I Got", "Newton Faulkner"],
    ["People Should Smile More", "Newton Faulkner"],
    ["Ageing Superhero", "Newton Faulkner"],

    ["Love It When You Call", "The Feeling"],
    ["Rosé", "The Feeling"],
    ["I Thought It Was Over", "The Feeling"],
    ["Without You", "The Feeling"],
    ["Turn It Up", "The Feeling"],
    ["Join with Us", "The Feeling"]
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
                8667 + index;

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
