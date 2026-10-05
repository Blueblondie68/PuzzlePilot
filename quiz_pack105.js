// quiz_pack105.js
// PuzzlePilot Big Quiz - Pack 105
// Music - 2000s
// 100 questions
// IDs: music_8567 - music_8666

const songs = [
    ["Valley of the Dolls", "Mylo"],
    ["Guilty of Love", "Mylo"],
    ["Superstylin'", "Groove Armada"],
    ["Purple Haze", "Groove Armada"],
    ["Easy", "Groove Armada"],
    ["Song 4 Mutya (Out of Control)", "Groove Armada"],

    ["At the River", "Groove Armada"],
    ["My Friend", "Groove Armada"],
    ["But I Feel Good", "Groove Armada"],
    ["Love Sweet Sound", "Groove Armada"],
    ["Get Down", "Groove Armada"],
    ["Paris", "Groove Armada"],
    ["Think Twice", "Groove Armada"],
    ["Lightsonic", "Groove Armada"],
    ["Drop That Thing", "Groove Armada"],

    ["Romeo", "Mr Hudson and the Library"],
    ["Too Late, Too Late", "Mr Hudson and the Library"],
    ["Picture of You", "Mr Hudson and the Library"],
    ["On the Street Where You Live", "Mr Hudson and the Library"],
    ["Ask the DJ", "Mr Hudson and the Library"],

    ["White Lies", "Mr Hudson"],
    ["There Will Be Tears", "Mr Hudson"],
    ["Supernova", "Mr Hudson feat. Kanye West"],
    ["Anyone but Him", "Mr Hudson"],
    ["Instant Messenger", "Mr Hudson"],

    ["Number 1", "Tinchy Stryder feat. N-Dubz"],
    ["Never Leave You", "Tinchy Stryder feat. Amelle"],
    ["Take Me Back", "Tinchy Stryder feat. Taio Cruz"],
    ["You're Not Alone", "Tinchy Stryder"],
    ["Stryderman", "Tinchy Stryder"],

    ["I Need You", "N-Dubz"],
    ["Papa Can You Hear Me", "N-Dubz"],
    ["Strong Again", "N-Dubz"],
    ["Wouldn't You", "N-Dubz"],
    ["Playing with Fire", "N-Dubz feat. Mr Hudson"],
    ["Ouch", "N-Dubz"],
    ["Better Not Waste My Time", "N-Dubz"],
    ["Feva Las Vegas", "N-Dubz"],
    ["Defeat You", "N-Dubz"],
    ["Comfortable", "N-Dubz"],

    ["She's Like a Star", "Taio Cruz"],
    ["Come On Girl", "Taio Cruz feat. Luciana"],
    ["I Can Be", "Taio Cruz"],
    ["Moving On", "Taio Cruz"],
    ["No Other One", "Taio Cruz"],
    ["Break Your Heart", "Taio Cruz"],
    ["Driving Me Crazy", "Taio Cruz"],
    ["I'll Never Love Again", "Taio Cruz"],
    ["She's Like a Star Remix", "Taio Cruz feat. Busta Rhymes"],

    ["What's It Gonna Be", "H Two O feat. Platnum"],
    ["Cash in My Pocket", "Wiley feat. Daniel Merriweather"],
    ["Rolex Sweep", "Skepta"],

    ["Pow (Forward)", "Lethal Bizzle"],
    ["Uh Oh (I'm Back)", "Lethal Bizzle"],
    ["Babylon's Burning the Ghetto", "Lethal Bizzle"],
    ["Police on My Back", "Lethal Bizzle"],
    ["Going Out Tonight", "Lethal Bizzle"],

    ["Fix Up, Look Sharp", "Dizzee Rascal"],
    ["Jus' a Rascal", "Dizzee Rascal"],
    ["Stand Up Tall", "Dizzee Rascal"],
    ["Dream", "Dizzee Rascal"],
    ["Sirens", "Dizzee Rascal"],
    ["Holiday", "Dizzee Rascal"],
    ["Bonkers", "Dizzee Rascal and Armand Van Helden"],
    ["Old Skool", "Dizzee Rascal"],
    ["Flex", "Dizzee Rascal"],

    ["Has It Come to This?", "The Streets"],
    ["Let's Push Things Forward", "The Streets"],
    ["The Irony of It All", "The Streets"],
    ["Could Well Be In", "The Streets"],
    ["Everything Is Borrowed", "The Streets"],
    ["Heaven for the Weather", "The Streets"],
    ["The Escapist", "The Streets"],

    ["Got to Have Your Love", "Liberty X"],
    ["Holding on for You", "Liberty X"],
    ["Being Nobody", "Richard X vs Liberty X"],
    ["Jumpin'", "Liberty X"],

    ["Stronger", "Sugababes"],
    ["Too Lost in You", "Sugababes"],
    ["In the Middle", "Sugababes"],

    ["Fly by II", "Blue"],
    ["Sorry Seems to Be the Hardest Word", "Blue feat. Elton John"],
    ["U Make Me Wanna", "Blue"],
    ["Guilty", "Blue"],
    ["Breathe Easy", "Blue"],
    ["Bubblin'", "Blue"],

    ["Life Got Cold", "Girls Aloud"],

    ["The Way to Your Love", "Hear'Say"],
    ["Everybody", "Hear'Say"],
    ["Lovin' Is Easy", "Hear'Say"],

    ["You Are", "Atomic Kitten"],
    ["It's OK", "Atomic Kitten"],
    ["Be with You", "Atomic Kitten"],
    ["If You Come to Me", "Atomic Kitten"],
    ["Ladies Night", "Atomic Kitten"],
    ["Someone Like Me", "Atomic Kitten"],

    ["Overload", "Sugababes"],
    ["Run for Cover", "Sugababes"],
    ["Soul Sound", "Sugababes"],
    ["Shape", "Sugababes"]
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
                8567 + index;

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
