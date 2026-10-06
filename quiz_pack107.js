// quiz_pack107.js
// PuzzlePilot Big Quiz - Pack 107
// Music - 2000s
// 100 questions
// IDs: music_8767 - music_8866

const songs = [
    ["Nine Million Bicycles", "Katie Melua"],
    ["I Cried for You", "Katie Melua"],
    ["Spider's Web", "Katie Melua"],
    ["Shy Boy", "Katie Melua"],
    ["If You Were a Sailboat", "Katie Melua"],
    ["Mary Pickford", "Katie Melua"],
    ["Ghost Town", "Katie Melua"],

    ["The Closest Thing to Crazy", "Katie Melua"],
    ["Call Off the Search", "Katie Melua"],
    ["Crawling Up a Hill", "Katie Melua"],
    ["Blame It on the Moon", "Katie Melua"],
    ["My Aphrodisiac Is You", "Katie Melua"],
    ["Piece by Piece", "Katie Melua"],
    ["Just Like Heaven", "Katie Melua"],
    ["What I Miss About You", "Katie Melua"],

    ["I'd Like To", "Corinne Bailey Rae"],
    ["Breathless", "Corinne Bailey Rae"],
    ["Till It Happens to You", "Corinne Bailey Rae"],

    ["21st Century Life", "Sam Sparro"],
    ["Pocket", "Sam Sparro"],

    ["No Substitute Love", "Estelle"],
    ["Wait a Minute (Just a Touch)", "Estelle"],
    ["1980", "Estelle"],

    ["Badman", "Roll Deep"],
    ["Shake a Leg", "Roll Deep"],

    ["Tears", "Tinie Tempah"],

    ["Slither", "Velvet Revolver"],
    ["Fall to Pieces", "Velvet Revolver"],
    ["Dirty Little Thing", "Velvet Revolver"],
    ["Come On, Come In", "Velvet Revolver"],
    ["She Builds Quick Machines", "Velvet Revolver"],
    ["The Last Fight", "Velvet Revolver"],

    ["I Believe in a Thing Called Love", "The Darkness"],
    ["Growing on Me", "The Darkness"],
    ["Get Your Hands Off My Woman", "The Darkness"],
    ["Love Is Only a Feeling", "The Darkness"],
    ["Christmas Time (Don't Let the Bells End)", "The Darkness"],
    ["One Way Ticket", "The Darkness"],
    ["Is It Just Me?", "The Darkness"],
    ["Girlfriend", "The Darkness"],

    ["Woman", "Wolfmother"],
    ["Joker and the Thief", "Wolfmother"],
    ["White Unicorn", "Wolfmother"],
    ["Dimension", "Wolfmother"],
    ["Love Train", "Wolfmother"],

    ["Rollover DJ", "Jet"],
    ["Look What You've Done", "Jet"],
    ["Cold Hard Bitch", "Jet"],
    ["Get Me Outta Here", "Jet"],
    ["Put Your Money Where Your Mouth Is", "Jet"],
    ["Rip It Up", "Jet"],
    ["Shine On", "Jet"],

    ["Hate to Say I Told You So", "The Hives"],
    ["Main Offender", "The Hives"],
    ["Walk Idiot Walk", "The Hives"],
    ["Two-Timing Touch and Broken Bones", "The Hives"],
    ["A Little More for Little You", "The Hives"],
    ["Tick Tick Boom", "The Hives"],
    ["T.H.E.H.I.V.E.S.", "The Hives"],

    ["Woman Like a Man", "Damien Rice"],
    ["Cannonball", "Damien Rice"],
    ["Volcano", "Damien Rice"],
    ["The Blower's Daughter", "Damien Rice"],
    ["Rootless Tree", "Damien Rice"],
    ["9 Crimes", "Damien Rice"],
    ["Dogs", "Damien Rice"],
    ["Elephant", "Damien Rice"],

    ["O", "Damien Rice"],
    ["Cold Water", "Damien Rice"],
    ["Amie", "Damien Rice"],
    ["Delicate", "Damien Rice"],

    ["Wisemen", "James Blunt"],
    ["High", "James Blunt"],
    ["No Bravery", "James Blunt"],
    ["Same Mistake", "James Blunt"],
    ["Carry You Home", "James Blunt"],
    ["I Really Want You", "James Blunt"],

    ["Please Forgive Me", "David Gray"],
    ["This Year's Love", "David Gray"],
    ["Sail Away", "David Gray"],
    ["Say Hello Wave Goodbye", "David Gray"],
    ["The Other Side", "David Gray"],
    ["Be Mine", "David Gray"],
    ["Hospital Food", "David Gray"],

    ["Sing", "Travis"],
    ["Side", "Travis"],
    ["Flowers in the Window", "Travis"],
    ["Re-Offender", "Travis"],
    ["Love Will Come Through", "Travis"],
    ["Walking in the Sun", "Travis"],
    ["Closer", "Travis"],
    ["Selfish Jean", "Travis"],
    ["My Eyes", "Travis"],
    ["Something Anything", "Travis"],

    ["World at Your Feet", "Embrace"],
    ["A Glorious Day", "Embrace"],
    ["I Can't Come Down", "Embrace"],
    ["No Use Crying", "Embrace"],
    ["I Had a Time", "Embrace"],

    ["Set Me Free", "Velvet Revolver"]
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
                8767 + index;

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
