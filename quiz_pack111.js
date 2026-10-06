// quiz_pack111.js
// PuzzlePilot Big Quiz - Pack 111
// Music - 2000s
// 100 questions
// IDs: music_9167 - music_9266

const songs = [
    ["Until the End", "Breaking Benjamin"],

    ["Blurry", "Puddle of Mudd"],
    ["She Hates Me", "Puddle of Mudd"],
    ["Away from Me", "Puddle of Mudd"],
    ["Heel Over Head", "Puddle of Mudd"],

    ["Youth of the Nation", "P.O.D."],
    ["Boom", "P.O.D."],
    ["Satellite", "P.O.D."],
    ["Will You", "P.O.D."],

    ["Click Click Boom", "Saliva"],
    ["Always", "Saliva"],
    ["Rest in Pieces", "Saliva"],
    ["Ladies and Gentlemen", "Saliva"],

    ["Hemorrhage (In My Hands)", "Fuel"],
    ["Bad Day", "Fuel"],
    ["Falls on Me", "Fuel"],

    ["Take a Picture", "Filter"],
    ["Where Do We Go from Here", "Filter"],

    ["Stillborn", "Black Label Society"],
    ["Suicide Messiah", "Black Label Society"],

    ["Remedy", "The Black Crowes"],
    ["Soul Singing", "The Black Crowes"],

    ["Feelin' Way Too Damn Good", "Nickelback"],
    ["Animals", "Nickelback"],
    ["Savin' Me", "Nickelback"],
    ["Gotta Be Somebody", "Nickelback"],
    ["If Today Was Your Last Day", "Nickelback"],

    ["Fade", "Staind"],
    ["For You", "Staind"],
    ["Price to Play", "Staind"],
    ["Right Here", "Staind"],

    ["Kryptonite", "3 Doors Down"],
    ["Loser", "3 Doors Down"],
    ["Duck and Run", "3 Doors Down"],
    ["Be Like That", "3 Doors Down"],
    ["When I'm Gone", "3 Doors Down"],
    ["Here Without You", "3 Doors Down"],
    ["Away from the Sun", "3 Doors Down"],
    ["Let Me Go", "3 Doors Down"],
    ["Landing in London", "3 Doors Down"],
    ["It's Not My Time", "3 Doors Down"],

    ["With Arms Wide Open", "Creed"],
    ["My Sacrifice", "Creed"],
    ["One Last Breath", "Creed"],
    ["Don't Stop Dancing", "Creed"],
    ["Bullets", "Creed"],
    ["Weathered", "Creed"],
    ["Overcome", "Creed"],
    ["Rain", "Creed"],

    ["Glow", "Alien Ant Farm"],
    ["Forgive and Forget", "Alien Ant Farm"],

    ["Hollywood Whore", "Papa Roach"],
    ["Lifeline", "Papa Roach"],

    ["Bodies", "Drowning Pool"],
    ["Tear Away", "Drowning Pool"],
    ["Sinner", "Drowning Pool"],
    ["Step Up", "Drowning Pool"],

    ["Down with the Sickness", "Disturbed"],
    ["Stupify", "Disturbed"],
    ["Voices", "Disturbed"],
    ["Remember", "Disturbed"],
    ["Liberate", "Disturbed"],
    ["Ten Thousand Fists", "Disturbed"],
    ["Just Stop", "Disturbed"],
    ["The Night", "Disturbed"],

    ["Thoughtless", "Korn"],
    ["Right Now", "Korn"],
    ["Coming Undone", "Korn"],
    ["Evolution", "Korn"],

    ["Change (In the House of Flies)", "Deftones"],
    ["Digital Bath", "Deftones"],
    ["Back to School (Mini Maggit)", "Deftones"],
    ["Minerva", "Deftones"],
    ["Hexagram", "Deftones"],
    ["Hole in the Earth", "Deftones"],

    ["Cochise", "Audioslave"],
    ["Like a Stone", "Audioslave"],
    ["Show Me How to Live", "Audioslave"],
    ["I Am the Highway", "Audioslave"],
    ["Be Yourself", "Audioslave"],
    ["Your Time Has Come", "Audioslave"],
    ["Doesn't Remind Me", "Audioslave"],
    ["Original Fire", "Audioslave"],

    ["Dosed", "Red Hot Chili Peppers"],
    ["Universally Speaking", "Red Hot Chili Peppers"],
    ["Fortune Faded", "Red Hot Chili Peppers"],
    ["Desecration Smile", "Red Hot Chili Peppers"],
    ["Hump de Bump", "Red Hot Chili Peppers"],

    ["Original of the Species", "U2"],
    ["Window in the Skies", "U2"],
    ["Magnificent", "U2"],
    ["I'll Go Crazy If I Don't Go Crazy Tonight", "U2"],

    ["Resolve", "Foo Fighters"],
    ["No Way Back", "Foo Fighters"],
    ["Let It Die", "Foo Fighters"],
    ["Cheer Up, Boys (Your Make Up Is Running)", "Foo Fighters"],

    ["Set It Off", "P.O.D."],
    ["Sleeping Awake", "P.O.D."],
    ["Goodbye for Now", "P.O.D."],
    ["Cold", "Crossfade"]
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
                9167 + index;

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
