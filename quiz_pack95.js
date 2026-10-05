// quiz_pack95.js
// PuzzlePilot Big Quiz - Pack 95
// Music - 2000s
// 100 questions
// IDs: music_7567 - music_7666

const songs = [
    ["Nine in the Afternoon", "Panic at the Disco"],
    ["That's Not My Name", "The Ting Tings"],
    ["Shut Up and Let Me Go", "The Ting Tings"],
    ["Black and Gold", "Sam Sparro"],
    ["Heartbroken", "T2 feat. Jodie Aysha"],
    ["Wearing My Rolex", "Wiley"],
    ["Dance Wiv Me", "Dizzee Rascal feat. Calvin Harris and Chrome"],
    ["Bonkers", "Dizzee Rascal"],
    ["Bulletproof", "La Roux"],
    ["In for the Kill", "La Roux"],

    ["Mercy", "The Third Degree"],
    ["Starz in Their Eyes", "Just Jack"],
    ["The Day I Died", "Just Jack"],
    ["Standing in the Way of Control", "Gossip"],
    ["Heavy Cross", "Gossip"],
    ["Young Folks", "Peter Bjorn and John"],
    ["Two Doors Down", "Mystery Jets"],
    ["Half in Love with Elizabeth", "Mystery Jets"],
    ["Golden Skans", "Klaxons"],
    ["It's Not Over Yet", "Klaxons"],
    ["Atlantis to Interzone", "Klaxons"],
    ["Let's Dance to Joy Division", "The Wombats"],
    ["Moving to New York", "The Wombats"],
    ["Kill the Director", "The Wombats"],
    ["Always Where I Need to Be", "The Kooks"],
    ["Ooh La", "The Kooks"],
    ["Shine On", "The Kooks"],
    ["Hounds of Love", "The Futureheads"],
    ["Decent Days and Nights", "The Futureheads"],
    ["Beginning of the Twist", "The Futureheads"],
    ["Banquet", "Bloc Party"],
    ["Helicopter", "Bloc Party"],
    ["Flux", "Bloc Party"],
    ["The Prayer", "Bloc Party"],
    ["Monster", "The Automatic"],
    ["Raoul", "The Automatic"],
    ["Recover", "The Automatic"],
    ["Away from Here", "The Enemy"],
    ["Had Enough", "The Enemy"],
    ["We'll Live and Die in These Towns", "The Enemy"],
    ["Geraldine", "Glasvegas"],
    ["Daddy's Gone", "Glasvegas"],
    ["Flowers & Football Tops", "Glasvegas"],
    ["Valerie", "The Zutons"],
    ["Why Won't You Give Me Your Love?", "The Zutons"],
    ["Always Right Behind You", "The Zutons"],
    ["In the Morning", "The Coral"],
    ["Pass It On", "The Coral"],
    ["Don't Think You're the First", "The Coral"],
    ["Seven Nation Army", "The White Stripes"],
    ["Icky Thump", "The White Stripes"],
    ["The Hardest Button to Button", "The White Stripes"],
    ["Steady, As She Goes", "The Raconteurs"],
    ["Salute Your Solution", "The Raconteurs"],
    ["No One Knows", "Queens of the Stone Age"],
    ["Go with the Flow", "Queens of the Stone Age"],
    ["Little Sister", "Queens of the Stone Age"],
    ["By the Way", "Red Hot Chili Peppers"],
    ["Dani California", "Red Hot Chili Peppers"],

    ["Can't Stop", "Red Hot Chili Peppers"],
    ["The Zephyr Song", "Red Hot Chili Peppers"],
    ["Tell Me Baby", "Red Hot Chili Peppers"],
    ["Snow (Hey Oh)", "Red Hot Chili Peppers"],
    ["Vertigo", "U2"],
    ["Sometimes You Can't Make It on Your Own", "U2"],
    ["City of Blinding Lights", "U2"],
    ["All Because of You", "U2"],
    ["Beautiful Day", "U2"],
    ["Elevation", "U2"],
    ["Stuck in a Moment You Can't Get Out Of", "U2"],
    ["Dakota", "The Shadows"],
    ["Times Like These", "Foo Fighters"],
    ["Best of You", "Foo Fighters"],
    ["The Pretender", "Foo Fighters"],
    ["All My Life", "Foo Fighters"],
    ["DOA", "Foo Fighters"],
    ["Long Road to Ruin", "Foo Fighters"],
    ["Plug In Baby", "Muse"],
    ["Supermassive Black Hole", "Muse"],
    ["Starlight", "Muse"],
    ["Knights of Cydonia", "Muse"],
    ["Uprising", "Muse"],
    ["Feeling Good", "Muse"],
    ["We Used to Be Friends", "The Dandy Warhols"],
    ["Godless", "The Dandy Warhols"],
    ["Take a Look Around", "Limp Bizkit"],
    ["Rollin' (Air Raid Vehicle)", "Limp Bizkit"],
    ["My Generation", "Limp Bizkit"],
    ["My Way", "Limp Bizkit"],
    ["Here to Stay", "Korn"],
    ["Did My Time", "Korn"],
    ["Twisted Transistor", "Korn"],
    ["Last Resort", "Papa Roach"],
    ["Scars", "Papa Roach"],
    ["Getting Away with Murder", "Papa Roach"],
    ["Too Bad", "Nickelback"],
    ["Photograph", "Nickelback"],
    ["Far Away", "Nickelback"],
    ["If Everyone Cared", "Nickelback"],
    ["It's Been Awhile", "Staind"]
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
                7567 + index;

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
