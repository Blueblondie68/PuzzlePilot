// quiz_pack99.js
// PuzzlePilot Big Quiz - Pack 99
// Music - 2000s
// 100 questions
// IDs: music_7967 - music_8066

const songs = [
    ["Dust on the Ground", "Bombay Bicycle Club"],

    ["Evening/Morning", "Bombay Bicycle Club"],
    ["The Hill", "Bombay Bicycle Club"],
    ["Open House", "Bombay Bicycle Club"],
    ["Sofa Song", "The Kooks"],
    ["Eddie's Gun", "The Kooks"],
    ["You Don't Love Me", "The Kooks"],
    ["See the World", "The Kooks"],
    ["Apply Some Pressure", "Maximo Park"],
    ["Graffiti", "Maximo Park"],
    ["Going Missing", "Maximo Park"],
    ["Our Velocity", "Maximo Park"],
    ["Books from Boxes", "Maximo Park"],
    ["Girls Who Play Guitars", "Maximo Park"],
    ["The Coast Is Always Changing", "Maximo Park"],
    ["I Want You to Stay", "Maximo Park"],
    ["22 Grand Job", "The Rakes"],
    ["Retreat", "The Rakes"],
    ["Work, Work, Work (Pub, Club, Sleep)", "The Rakes"],
    ["All Too Human", "The Rakes"],
    ["We Danced Together", "The Rakes"],
    ["The World Was a Mess but His Hair Was Perfect", "The Rakes"],
    ["House of Jealous Lovers", "The Rapture"],
    ["Get Myself into It", "The Rapture"],
    ["Whoo! Alright - Yeah... Uh Huh.", "The Rapture"],
    ["Pieces of the People We Love", "The Rapture"],
    ["Sister Saviour", "The Rapture"],
    ["Echoes", "The Rapture"],
    ["We Are Your Friends", "Justice vs Simian"],
    ["D.A.N.C.E.", "Justice"],
    ["DVNO", "Justice"],
    ["Phantom Part II", "Justice"],
    ["Waters of Nazareth", "Justice"],
    ["Stress", "Justice"],
    ["I Believe", "Simian Mobile Disco"],
    ["It's the Beat", "Simian Mobile Disco"],
    ["Hustler", "Simian Mobile Disco"],
    ["Audacity of Huge", "Simian Mobile Disco"],
    ["Kelly", "Van She"],
    ["Changes", "Van She"],
    ["Strangers", "Van She"],
    ["Sexual City", "Van She"],
    ["Paris Is Burning", "Ladyhawke"],
    ["Dusk Till Dawn", "Ladyhawke"],
    ["Magic", "Ladyhawke"],
    ["Back of the Van", "Ladyhawke"],
    ["My Delirium", "Ladyhawke"],
    ["Another Runaway", "Ladyhawke"],

    ["Rip It Up", "Razorlight"],
    ["Stumble and Fall", "Razorlight"],
    ["Reason Is Treason", "Kasabian"],
    ["Cutt Off", "Kasabian"],
    ["Fast Fuse", "Kasabian"],
    ["You're Not Alone", "The Enemy"],
    ["No Time for Tears", "The Enemy"],
    ["Sing When You're in Love", "The Enemy"],
    ["Be Somebody", "The Enemy"],
    ["Aggro", "The Enemy"],
    ["Men's Needs", "The Cribs"],
    ["Mirror Kissers", "The Cribs"],
    ["Hey Scenesters!", "The Cribs"],
    ["Our Bovine Public", "The Cribs"],
    ["I'm a Realist", "The Cribs"],
    ["Moving Pictures", "The Cribs"],
    ["Another Number", "The Cribs"],
    ["Cheat on Me", "The Cribs"],
    ["A-Punk", "Vampire Weekend"],
    ["Oxford Comma", "Vampire Weekend"],
    ["Cape Cod Kwassa Kwassa", "Vampire Weekend"],
    ["Mansard Roof", "Vampire Weekend"],
    ["The Kids Don't Stand a Chance", "Vampire Weekend"],
    ["One (Blake's Got a New Face)", "Vampire Weekend"],
    ["It's My Own Cheating Heart That Makes Me Cry", "Glasvegas"],
    ["Please Come Back Home", "Glasvegas"],
    ["Lonesome Swan", "Glasvegas"],
    ["Death", "White Lies"],
    ["To Lose My Life", "White Lies"],
    ["Farewell to the Fairground", "White Lies"],
    ["Unfinished Business", "White Lies"],
    ["From the Stars", "White Lies"],
    ["Fifty on Our Foreheads", "White Lies"],
    ["Crystalised", "The xx"],
    ["Basic Space", "The xx"],
    ["Islands", "The xx"],
    ["VCR", "The xx"],
    ["Heart Skipped a Beat", "The xx"],
    ["Shelter", "The xx"],
    ["Infinity", "The xx"],
    ["Night Time", "The xx"],

    ["Two More Years", "Bloc Party"],
    ["I Still Remember", "Bloc Party"],
    ["Hunting for Witches", "Bloc Party"],
    ["One More Chance", "Bloc Party"],
    ["Mercury", "Bloc Party"],
    ["Talons", "Bloc Party"],
    ["This Modern Love", "Bloc Party"],
    ["Like Eating Glass", "Bloc Party"],
    ["Nobody Move, Nobody Get Hurt", "We Are Scientists"],
    ["The Great Escape", "We Are Scientists"],
    ["It's a Hit", "We Are Scientists"]
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
                7967 + index;

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
