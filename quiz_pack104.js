// quiz_pack104.js
// PuzzlePilot Big Quiz - Pack 104
// Music - 2000s
// 100 questions
// IDs: music_8467 - music_8566

const songs = [
    ["Cish Cash", "Basement Jaxx"],
    ["Lucky Star", "Basement Jaxx"],
    ["Oh My Gosh", "Basement Jaxx"],
    ["Hey U", "Basement Jaxx"],

    ["Good Luck", "Basement Jaxx"],
    ["Romeo", "Basement Jaxx"],
    ["Where's Your Head At", "Basement Jaxx"],
    ["Bingo Bango", "Basement Jaxx"],
    ["Jus 1 Kiss", "Basement Jaxx"],
    ["Get Me Off", "Basement Jaxx"],
    ["Feelings Gone", "Basement Jaxx"],
    ["Raindrops", "Basement Jaxx"],

    ["Heartbeats", "The Knife"],
    ["Pass This On", "The Knife"],
    ["You Take My Breath Away", "The Knife"],
    ["Silent Shout", "The Knife"],
    ["Marble House", "The Knife"],
    ["Like a Pen", "The Knife"],
    ["We Share Our Mothers' Health", "The Knife"],
    ["Neverland", "The Knife"],
    ["Forest Families", "The Knife"],
    ["One Hit", "The Knife"],

    ["Heartbeats", "Jose Gonzalez"],
    ["Crosses", "Jose Gonzalez"],
    ["Stay in the Shade", "Jose Gonzalez"],
    ["Hand on Your Heart", "Jose Gonzalez"],
    ["Down the Line", "Jose Gonzalez"],
    ["Killing for Love", "Jose Gonzalez"],
    ["Teardrop", "Jose Gonzalez"],
    ["Cycling Trivialities", "Jose Gonzalez"],
    ["How Low", "Jose Gonzalez"],
    ["Fold", "Jose Gonzalez"],

    ["Over and Over", "Hot Chip"],
    ["Boy from School", "Hot Chip"],
    ["Colours", "Hot Chip"],
    ["No Fit State", "Hot Chip"],
    ["Ready for the Floor", "Hot Chip"],
    ["One Pure Thought", "Hot Chip"],
    ["Touch Too Much", "Hot Chip"],
    ["Shake a Fist", "Hot Chip"],
    ["Hold On", "Hot Chip"],

    ["Let's Make Love and Listen to Death from Above", "CSS"],
    ["Alala", "CSS"],
    ["Off the Hook", "CSS"],
    ["Music Is My Hot Hot Sex", "CSS"],
    ["Alcohol", "CSS"],
    ["Rat Is Dead (Rage)", "CSS"],
    ["Left Behind", "CSS"],
    ["Move", "CSS"],
    ["Air Painter", "CSS"],
    ["Art Bitch", "CSS"],

    ["Genesis", "Justice"],
    ["Newjack", "Justice"],
    ["The Party", "Justice"],
    ["Valentine", "Justice"],

    ["Acceptable in the 80s", "Calvin Harris"],
    ["The Girls", "Calvin Harris"],
    ["Merrymaking at My Place", "Calvin Harris"],
    ["I'm Not Alone", "Calvin Harris"],
    ["Ready for the Weekend", "Calvin Harris"],
    ["Flashback", "Calvin Harris"],
    ["Colours", "Calvin Harris"],
    ["Vegas", "Calvin Harris"],
    ["Neon Rocks", "Calvin Harris"],
    ["Electro Man", "Calvin Harris"],

    ["Galvanize", "The Chemical Brothers"],
    ["Believe", "The Chemical Brothers"],
    ["The Boxer", "The Chemical Brothers"],
    ["Do It Again", "The Chemical Brothers"],
    ["The Salmon Dance", "The Chemical Brothers"],
    ["Saturate", "The Chemical Brothers"],
    ["Burst Generator", "The Chemical Brothers"],
    ["Midnight Madness", "The Chemical Brothers"],
    ["Battle Scars", "The Chemical Brothers"],
    ["Surface to Air", "The Chemical Brothers"],

    ["Omen", "The Prodigy"],
    ["Warrior's Dance", "The Prodigy"],
    ["Invaders Must Die", "The Prodigy"],
    ["Take Me to the Hospital", "The Prodigy"],
    ["Spitfire", "The Prodigy"],
    ["Girls", "The Prodigy"],
    ["Hotride", "The Prodigy"],
    ["Memphis Bells", "The Prodigy"],
    ["You'll Be Under My Wheels", "The Prodigy"],
    ["Wake Up Call", "The Prodigy"],

    ["Pjanoo", "Eric Prydz"],
    ["Proper Education", "Eric Prydz"],
    ["Woz Not Woz", "Eric Prydz"],
    ["Slammin'", "Eric Prydz"],

    ["Let Me Think About It", "Ida Corr vs Fedde Le Grand"],
    ["The Creeps", "Camille Jones vs Fedde Le Grand"],
    ["Get This Feeling", "Fedde Le Grand"],
    ["3 Minutes to Explain", "Fedde Le Grand"],

    ["Watch Out", "Alex Gaudino feat. Shena"],
    ["I'm in Love (I Wanna Do It)", "Alex Gaudino"],

    ["Doctor Pressure", "Mylo vs Miami Sound Machine"],
    ["Drop the Pressure", "Mylo"],
    ["In My Arms", "Mylo"],
    ["Destroy Rock & Roll", "Mylo"],
    ["Muscle Cars", "Mylo"]
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
                8467 + index;

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
