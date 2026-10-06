// quiz_pack114.js
// PuzzlePilot Big Quiz - Pack 114
// Music - 2000s
// 100 questions
// IDs: music_9467 - music_9566

const songs = [
    ["Outtathaway", "The Vines"],
    ["Ride", "The Vines"],
    ["Don't Listen to the Radio", "The Vines"],

    ["Get Away", "The Music"],
    ["The People", "The Music"],
    ["Take the Long Road and Walk It", "The Music"],
    ["Welcome to the North", "The Music"],

    ["Young Love", "Mystery Jets"],

    ["Quicksand", "La Roux"],

    ["Daniel", "Bat for Lashes"],
    ["What's a Girl to Do?", "Bat for Lashes"],
    ["Pearl's Dream", "Bat for Lashes"],

    ["Rabbit Heart (Raise It Up)", "Florence + the Machine"],
    ["Drumming Song", "Florence + the Machine"],
    ["You've Got the Love", "Florence + the Machine"],

    ["Highly Evolved", "The Vines"],
    ["Homesick", "The Vines"],
    ["Winning Days", "The Vines"],
    ["Animal Machine", "The Vines"],
    ["Gross Out", "The Vines"],

    ["Freedom Fighters", "The Music"],
    ["Bleed from Within", "The Music"],
    ["Breakin'", "The Music"],
    ["Strength in Numbers", "The Music"],

    ["Tigerlily", "La Roux"],
    ["I'm Not Your Toy", "La Roux"],
    ["As If by Magic", "La Roux"],

    ["Prescilla", "Bat for Lashes"],
    ["Trophy", "Bat for Lashes"],
    ["Sleep Alone", "Bat for Lashes"],

    ["Kiss with a Fist", "Florence + the Machine"],
    ["Hurricane Drunk", "Florence + the Machine"],
    ["Howl", "Florence + the Machine"],
    ["Cosmic Love", "Florence + the Machine"],

    ["22:22", "The Rifles"],
    ["My Circuitboard City", "The Wombats"],

    ["Shut Your Eyes", "Snow Patrol"],
    ["Set the Fire to the Third Bar", "Snow Patrol"],
    ["Take Back the City", "Snow Patrol"],
    ["Crack the Shutters", "Snow Patrol"],
    ["If There's a Rocket Tie Me to It", "Snow Patrol"],

    ["Geronimo", "The Automatic"],

    ["Lasso", "Phoenix"],
    ["It Don't Move Me", "Peter Bjorn and John"],

    ["Comfort in Sound", "Feeder"],
    ["Save Us", "Feeder"],

    ["Maybe Tomorrow", "Stereophonics"],
    ["Superman", "Stereophonics"],
    ["Devil", "Stereophonics"],
    ["It Means Nothing", "Stereophonics"],
    ["You're My Star", "Stereophonics"],

    ["Nothing in My Way", "Keane"],
    ["A Bad Dream", "Keane"],
    ["Crystal Ball", "Keane"],
    ["Spiralling", "Keane"],
    ["The Lovers Are Losing", "Keane"],
    ["Perfect Symmetry", "Keane"],
    ["Bedshaped", "Keane"],

    ["Bill McCai", "The Coral"],
    ["Jacqueline", "The Coral"],

    ["Painkiller", "Freestylers"],
    ["Push Up", "Freestylers"],
    ["In Love with You", "Freestylers"],

    ["We Come 1", "Faithless"],
    ["Tarantula", "Faithless"],
    ["Mass Destruction", "Faithless"],
    ["I Want More", "Faithless"],
    ["Bombs", "Faithless"],

    ["Starry Eyed Surprise", "Paul Oakenfold"],
    ["Ready Steady Go", "Paul Oakenfold"],
    ["Southern Sun", "Paul Oakenfold"],

    ["Days Go By", "Dirty Vegas"],
    ["Ghosts", "Dirty Vegas"],

    ["Turn on the Music", "Roger Sanchez"],

    ["At Night", "Shakedown"],
    ["Love Game", "Shakedown"],

    ["Lazy", "X-Press 2"],
    ["Smoke Machine", "X-Press 2"],

    ["The Creeps", "Camille Jones"],

    ["I Found U", "Axwell"],
    ["Watch the Sunrise", "Axwell"],

    ["Destination Calabria", "Alex Gaudino"],
    ["Watch Out", "Alex Gaudino"],

    ["Can't Get Over", "September"],

    ["Miracle", "Cascada"],
    ["What Hurts the Most", "Cascada"],

    ["The Boys of Summer", "DJ Sammy"],
    ["Sunlight", "DJ Sammy"],

    ["Pretty Green Eyes", "Ultrabeat"],
    ["Feelin' Fine", "Ultrabeat"],
    ["Elysium (I Go Crazy)", "Ultrabeat"],

    ["Something", "Lasgo"],
    ["Alone", "Lasgo"],
    ["Pray", "Lasgo"],

    ["Forever", "Dee Dee"],

    ["The Logical Song", "Scooter"],
    ["Nessaja", "Scooter"],
    ["Weekend!", "Scooter"],

    ["Satisfaction", "Benny Benassi Presents The Biz"],
    ["Illusion", "Benny Benassi Presents The Biz"]
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
                9467 + index;

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
