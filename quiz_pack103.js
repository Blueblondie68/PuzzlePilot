// quiz_pack103.js
// PuzzlePilot Big Quiz - Pack 103
// Music - 2000s
// 100 questions
// IDs: music_8367 - music_8466

const songs = [
    ["Oh Stacey (Look What You've Done)", "The Zutons"],
    ["What's Your Problem", "The Zutons"],
    ["Stay Free", "The Zutons"],
    ["Generator", "The Holloways"],
    ["Dancefloor", "The Holloways"],
    ["Two Left Feet", "The Holloways"],
    ["Happiness and Penniless", "The Holloways"],

    ["Goodbye Mr A", "The Hoosiers"],
    ["Worried About Ray", "The Hoosiers"],
    ["Worst Case Scenario", "The Hoosiers"],
    ["Cops and Robbers", "The Hoosiers"],
    ["Run Rabbit Run", "The Hoosiers"],
    ["A Sadness Runs Through Him", "The Hoosiers"],
    ["Clinging on for Life", "The Hoosiers"],
    ["Everything Goes Dark", "The Hoosiers"],
    ["Killer", "The Hoosiers"],

    ["Daddy-O", "The Wideboys"],
    ["Sambuca", "The Wideboys"],

    ["Money to Be Made", "The Hoosiers"],
    ["The Feeling You Get When", "The Hoosiers"],

    ["Lloyd, I'm Ready to Be Heartbroken", "Camera Obscura"],
    ["Let's Get Out of This Country", "Camera Obscura"],
    ["If Looks Could Kill", "Camera Obscura"],
    ["Tears for Affairs", "Camera Obscura"],
    ["French Navy", "Camera Obscura"],
    ["Honey in the Sun", "Camera Obscura"],
    ["My Maudlin Career", "Camera Obscura"],
    ["Swans", "Camera Obscura"],
    ["Come Back Margaret", "Camera Obscura"],
    ["The Sweetest Thing", "Camera Obscura"],

    ["Gerard Love", "Teenage Fanclub"],
    ["Dumb Dumb Dumb", "Teenage Fanclub"],
    ["Near You", "Teenage Fanclub"],
    ["Did I Say", "Teenage Fanclub"],
    ["It's All in My Mind", "Teenage Fanclub"],
    ["Fallen Leaves", "Teenage Fanclub"],
    ["Cells", "Teenage Fanclub"],
    ["Born Under a Good Sign", "Teenage Fanclub"],
    ["Slow Fade", "Teenage Fanclub"],

    ["Scratch Your Name", "Noisettes"],
    ["Don't Give Up", "Noisettes"],
    ["Sister Rosetta (Capture the Spirit)", "Noisettes"],
    ["The Count of Monte Christo", "Noisettes"],
    ["Wild Young Hearts", "Noisettes"],
    ["Never Forget You", "Noisettes"],
    ["Don't Upset the Rhythm", "Noisettes"],
    ["Every Now and Then", "Noisettes"],
    ["24 Hours", "Noisettes"],
    ["Saturday Night", "Noisettes"],

    ["Bullets", "Tunng"],
    ["Woodcat", "Tunng"],
    ["Jenny Again", "Tunng"],
    ["It's Because... We've Got Hair", "Tunng"],
    ["Bricks", "Tunng"],
    ["Good Arrows", "Tunng"],
    ["Take", "Tunng"],
    ["Soup", "Tunng"],
    ["Hustle", "Tunng"],
    ["Spoons", "Tunng"],

    ["Inaction", "We Are Scientists"],
    ["This Scene Is Dead", "We Are Scientists"],
    ["Callbacks", "We Are Scientists"],
    ["Textbook", "We Are Scientists"],
    ["Lousy Reputation", "We Are Scientists"],
    ["Worth the Wait", "We Are Scientists"],
    ["What's the Word", "We Are Scientists"],

    ["Out of the Question", "Mumm-Ra"],
    ["What Would Steve Do?", "Mumm-Ra"],
    ["Song B", "Mumm-Ra"],
    ["Starlight", "Mumm-Ra"],

    ["Westside", "Athlete"],
    ["Beautiful", "Athlete"],
    ["Tourist", "Athlete"],
    ["Yesterday Threw Everything at Me", "Athlete"],

    ["Formed a Band", "Art Brut"],
    ["Emily Kane", "Art Brut"],
    ["Good Weekend", "Art Brut"],
    ["Modern Art", "Art Brut"],
    ["My Little Brother", "Art Brut"],
    ["Nag Nag Nag Nag", "Art Brut"],
    ["Direct Hit", "Art Brut"],
    ["Pump Up the Volume", "Art Brut"],
    ["St Pauli", "Art Brut"],
    ["Post Soothing Out", "Art Brut"],

    ["Thou Shalt Always Kill", "Dan Le Sac vs Scroobius Pip"],
    ["The Beat That My Heart Skipped", "Dan Le Sac vs Scroobius Pip"],
    ["Look for the Woman", "Dan Le Sac vs Scroobius Pip"],
    ["Letter from God to Man", "Dan Le Sac vs Scroobius Pip"],
    ["Fixed", "Dan Le Sac vs Scroobius Pip"],
    ["Angles", "Dan Le Sac vs Scroobius Pip"],
    ["Development", "Dan Le Sac vs Scroobius Pip"],
    ["Tommy C", "Dan Le Sac vs Scroobius Pip"],
    ["Waiting for the Beat to Kick In", "Dan Le Sac vs Scroobius Pip"],
    ["Magician's Assistant", "Dan Le Sac vs Scroobius Pip"],

    ["Housewives", "Basement Jaxx"],
    ["Take Me Back to Your House", "Basement Jaxx"],
    ["Hush Boy", "Basement Jaxx"],
    ["U Don't Know Me", "Basement Jaxx"],
    ["Do Your Thing", "Basement Jaxx"],
    ["Plug It In", "Basement Jaxx"]
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
                8367 + index;

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
