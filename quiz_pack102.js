// quiz_pack102.js
// PuzzlePilot Big Quiz - Pack 102
// Music - 2000s
// 100 questions
// IDs: music_8267 - music_8366

const songs = [
    ["Local Boy", "The Rifles"],
    ["Repeated Offender", "The Rifles"],
    ["Peace & Quiet", "The Rifles"],
    ["Romeo & Julie", "The Rifles"],
    ["The Great Escape", "The Rifles"],
    ["Fall to Sorrow", "The Rifles"],
    ["Sometimes", "The Rifles"],
    ["Winter Calls", "The Rifles"],

    ["Karaoke Plays", "Maximo Park"],
    ["The Unshockable", "Maximo Park"],
    ["Questing, Not Coasting", "Maximo Park"],
    ["The Kids Are Sick Again", "Maximo Park"],

    ["You Don't Know Love", "Editors"],
    ["The Weight of the World", "Editors"],
    ["When Anger Shows", "Editors"],

    ["Wide Awake", "The Twang"],
    ["Either Way", "The Twang"],
    ["Two Lovers", "The Twang"],
    ["Push the Ghosts", "The Twang"],
    ["Ice Cream Sundae", "The Twang"],
    ["Barney Rubble", "The Twang"],
    ["Encouraging Sign", "The Twang"],
    ["Got Me Sussed", "The Twang"],
    ["Cloudy Room", "The Twang"],
    ["The Neighbour", "The Twang"],

    ["This Song", "The Enemy"],
    ["It's Not OK", "The Enemy"],
    ["Elephant Song", "The Enemy"],

    ["Hold On", "Razorlight"],
    ["Who Needs Love?", "Razorlight"],

    ["Polmont on My Mind", "Glasvegas"],
    ["S.A.D. Light", "Glasvegas"],
    ["Stabbed", "Glasvegas"],
    ["Ice Cream Van", "Glasvegas"],

    ["Heavyweight Champion of the World", "Reverend and the Makers"],
    ["He Said He Loved Me", "Reverend and the Makers"],
    ["Open Your Window", "Reverend and the Makers"],
    ["The State of Things", "Reverend and the Makers"],
    ["Silence Is Talking", "Reverend and the Makers"],

    ["What About Me", "The Cribs"],
    ["You Were Always the One", "The Cribs"],
    ["Martell", "The Cribs"],
    ["You're Gonna Lose Us", "The Cribs"],
    ["We Share the Same Skies", "The Cribs"],

    ["Strasbourg", "The Rakes"],
    ["Binary Love", "The Rakes"],
    ["Open Book", "The Rakes"],
    ["1989", "The Rakes"],

    ["A Place to Hide", "White Lies"],
    ["Nothing to Give", "White Lies"],
    ["The Price of Love", "White Lies"],

    ["Arguments", "The Duke Spirit"],
    ["Darling You're Mean", "The Duke Spirit"],
    ["Cuts Across the Land", "The Duke Spirit"],
    ["Lion Rip", "The Duke Spirit"],
    ["Love Is an Unfamiliar Name", "The Duke Spirit"],
    ["Lassoo", "The Duke Spirit"],
    ["The Step and the Walk", "The Duke Spirit"],
    ["My Sunken Treasure", "The Duke Spirit"],
    ["Send a Little Love Token", "The Duke Spirit"],
    ["You Really Wake Up the Love in Me", "The Duke Spirit"],

    ["Acrylic", "Courteeners"],
    ["Cavorting", "Courteeners"],
    ["What Took You So Long?", "Courteeners"],
    ["No You Didn't, No You Don't", "Courteeners"],
    ["Bide Your Time", "Courteeners"],
    ["Fallowfield Hillbilly", "Courteeners"],
    ["Please Don't", "Courteeners"],
    ["That Kiss", "Courteeners"],
    ["Cross My Heart & Hope to Fly", "Courteeners"],
    ["You Overdid It Doll", "Courteeners"],

    ["Rockstar", "The Dandy Warhols"],
    ["Get Off", "The Dandy Warhols"],
    ["Plan A", "The Dandy Warhols"],
    ["Smoke It", "The Dandy Warhols"],
    ["All the Money or the Simple Life Honey", "The Dandy Warhols"],
    ["The New Country", "The Dandy Warhols"],

    ["Golden Age", "The Futureheads"],
    ["First Day", "The Futureheads"],
    ["A to B", "The Futureheads"],
    ["Man Ray", "The Futureheads"],
    ["Robot", "The Futureheads"],
    ["Danger of the Water", "The Futureheads"],
    ["Favours for Favours", "The Futureheads"],
    ["Back to the Sea", "The Futureheads"],
    ["Return of the Berserker", "The Futureheads"],
    ["Thursday", "The Futureheads"],
    ["Cope", "The Futureheads"],
    ["Everything's Changing Today", "The Futureheads"],
    ["Sleet", "The Futureheads"],

    ["It's Getting Boring by the Sea", "Blood Red Shoes"],
    ["I Wish I Was Someone Better", "Blood Red Shoes"],
    ["You Bring Me Down", "Blood Red Shoes"],
    ["Say Something, Say Anything", "Blood Red Shoes"],
    ["This Is Not for You", "Blood Red Shoes"],
    ["ADHD", "Blood Red Shoes"],

    ["Doesn't Matter Much", "The Zutons"],
    ["Pressure Point", "The Zutons"],
    ["Remember Me", "The Zutons"],
    ["Confusion", "The Zutons"]
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
                8267 + index;

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
