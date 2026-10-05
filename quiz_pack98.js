// quiz_pack98.js
// PuzzlePilot Big Quiz - Pack 98
// Music - 2000s
// 100 questions
// IDs: music_7867 - music_7966

const songs = [
    ["Try Again Today", "The Charlatans"],

    ["Can't Stand Me Now", "The Libertines"],
    ["What Became of the Likely Lads", "The Libertines"],
    ["Don't Look Back into the Sun", "The Libertines"],
    ["Time for Heroes", "The Libertines"],
    ["Up the Bracket", "The Libertines"],
    ["What a Waster", "The Libertines"],
    ["Killamangiro", "Babyshambles"],
    ["Albion", "Babyshambles"],
    ["Delivery", "Babyshambles"],
    ["You Talk", "Babyshambles"],
    ["The Blinding", "Babyshambles"],
    ["Fuck Forever", "Babyshambles"],
    ["Bang Bang You're Dead", "Dirty Pretty Things"],
    ["Deadwood", "Dirty Pretty Things"],
    ["Wondering", "Dirty Pretty Things"],
    ["Tired of England", "Dirty Pretty Things"],
    ["Listen Up", "Gossip"],
    ["Jealous Girls", "Gossip"],
    ["Love Long Distance", "Gossip"],
    ["Dimestore Diamond", "Gossip"],
    ["Walking on a Dream", "Empire of the Sun"],
    ["We Are the People", "Empire of the Sun"],
    ["Standing on the Shore", "Empire of the Sun"],
    ["Kids", "MGMT"],
    ["Electric Feel", "MGMT"],
    ["Time to Pretend", "MGMT"],
    ["The Youth", "MGMT"],
    ["Weekend Wars", "MGMT"],
    ["1901", "Phoenix"],
    ["Lisztomania", "Phoenix"],
    ["Long Distance Call", "Phoenix"],
    ["Consolation Prizes", "Phoenix"],
    ["If I Ever Feel Better", "Phoenix"],
    ["Young Love", "Mystery Jets feat. Laura Marling"],
    ["Diamonds in the Dark", "Mystery Jets"],
    ["The Boy Who Ran Away", "Mystery Jets"],
    ["Flakes", "Mystery Jets"],
    ["Hideaway", "The Delays"],
    ["Nearer Than Heaven", "The Delays"],
    ["Long Time Coming", "The Delays"],
    ["Valentine", "The Delays"],
    ["Lost in a Melody", "The Delays"],

    ["Fit but You Know It", "The Streets"],
    ["Dry Your Eyes", "The Streets"],
    ["Blinded by the Lights", "The Streets"],
    ["Never Went to Church", "The Streets"],
    ["When You Wasn't Famous", "The Streets"],
    ["Prangin' Out", "The Streets"],
    ["Weak Become Heroes", "The Streets"],
    ["Don't Mug Yourself", "The Streets"],
    ["Don't Give It Up", "Siobhan Donaghy"],
    ["Overrated", "Siobhan Donaghy"],
    ["Twist of Fate", "Siobhan Donaghy"],
    ["Ghosts", "Siobhan Donaghy"],
    ["Caught in a Moment", "Sugababes"],
    ["Red Dress", "Sugababes"],
    ["Ugly", "Sugababes"],
    ["Easy", "Sugababes"],
    ["Change", "Sugababes"],
    ["Girls", "Sugababes"],
    ["Get Sexy", "Sugababes"],
    ["Wear My Kiss", "Sugababes"],
    ["Jump", "Girls Aloud"],
    ["The Show", "Girls Aloud"],
    ["I'll Stand by You", "Girls Aloud"],
    ["Wake Me Up", "Girls Aloud"],
    ["Long Hot Summer", "Girls Aloud"],
    ["Something Kinda Ooooh", "Girls Aloud"],
    ["Call the Shots", "Girls Aloud"],
    ["Can't Speak French", "Girls Aloud"],
    ["Untouchable", "Girls Aloud"],
    ["Issues", "The Saturdays"],
    ["Just Can't Get Enough", "The Saturdays"],
    ["Work", "The Saturdays"],
    ["Forever Is Over", "The Saturdays"],
    ["Ego", "The Saturdays"],
    ["If This Is Love", "The Saturdays"],
    ["Save the Lies", "Gabriella Cilmi"],
    ["Boys and Girls", "Pixie Lott"],
    ["Cry Me Out", "Pixie Lott"],
    ["Broken Arrow", "Pixie Lott"],
    ["Turn It Up", "Pixie Lott"],
    ["Gravity", "Pixie Lott"],
    ["The Boy Who Murdered Love", "Diana Vickers"],
    ["My Wicked Heart", "Diana Vickers"],
    ["Hometown Glory", "Adele"],
    ["Make You Feel My Love", "Adele"],
    ["Cold Shoulder", "Adele"],
    ["Right as Rain", "Adele"],
    ["Daydreamer", "Adele"],
    ["Rain on Your Parade", "Duffy"],
    ["Serious", "Duffy"],
    ["Rockferry", "Duffy"],

    ["She's Got You High", "Mumm-Ra"],
    ["She's Attracted To", "Young Knives"],
    ["Weekends and Bleak Days (Hot Summer)", "Young Knives"],
    ["Terra Firma", "Young Knives"],
    ["Hoppípolla", "Sigur Rós"],
    ["Always Like This", "Bombay Bicycle Club"]
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
                7867 + index;

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
