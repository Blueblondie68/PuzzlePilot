// quiz_pack109.js
// PuzzlePilot Big Quiz - Pack 109
// Music - 2000s
// 100 questions
// IDs: music_8967 - music_9066

const songs = [
    ["False Pretense", "The Red Jumpsuit Apparatus"],
    ["Your Guardian Angel", "The Red Jumpsuit Apparatus"],
    ["Checkmarks", "The Academy Is..."],

    ["Slow Down", "The Academy Is..."],
    ["We've Got a Big Mess on Our Hands", "The Academy Is..."],
    ["Everything We Had", "The Academy Is..."],
    ["About a Girl", "The Academy Is..."],
    ["Summer Hair = Forever Young", "The Academy Is..."],

    ["Ohio Is for Lovers", "Hawthorne Heights"],
    ["Saying Sorry", "Hawthorne Heights"],
    ["Pens and Needles", "Hawthorne Heights"],
    ["This Is Who We Are", "Hawthorne Heights"],

    ["The Quiet Things That No One Ever Knows", "Brand New"],
    ["Sic Transit Gloria... Glory Fades", "Brand New"],
    ["Jude Law and a Semester Abroad", "Brand New"],
    ["Seventy Times 7", "Brand New"],
    ["Jesus Christ", "Brand New"],

    ["Understanding in a Car Crash", "Thursday"],
    ["Cross Out the Eyes", "Thursday"],
    ["Signals Over the Air", "Thursday"],
    ["War All the Time", "Thursday"],

    ["Seven Years", "Saosin"],
    ["Voices", "Saosin"],
    ["You're Not Alone", "Saosin"],

    ["Smile in Your Sleep", "Silverstein"],
    ["Discovering the Waterfront", "Silverstein"],
    ["My Heroine", "Silverstein"],
    ["If You Could See into My Soul", "Silverstein"],

    ["The Artist in the Ambulance", "Thrice"],
    ["Stare at the Sun", "Thrice"],
    ["All That's Left", "Thrice"],
    ["Image of the Invisible", "Thrice"],

    ["There's a Class for This", "Cute Is What We Aim For"],
    ["Practice Makes Perfect", "Cute Is What We Aim For"],

    ["Dear Maria, Count Me In", "All Time Low"],
    ["Six Feet Under the Stars", "All Time Low"],
    ["Poppin' Champagne", "All Time Low"],
    ["Weightless", "All Time Low"],
    ["Damned If I Do Ya (Damned If I Don't)", "All Time Low"],

    ["Jamie All Over", "Mayday Parade"],
    ["Miserable at Best", "Mayday Parade"],
    ["When I Get Home, You're So Dead", "Mayday Parade"],
    ["Jersey", "Mayday Parade"],

    ["We Believe", "Good Charlotte"],
    ["Keep Your Hands Off My Girl", "Good Charlotte"],

    ["Memory", "Sugarcult"],
    ["Bouncing Off the Walls", "Sugarcult"],
    ["Pretty Girl (The Way)", "Sugarcult"],
    ["She's the Blade", "Sugarcult"],

    ["Everything Is Alright", "Motion City Soundtrack"],
    ["The Future Freaks Me Out", "Motion City Soundtrack"],
    ["My Favourite Accident", "Motion City Soundtrack"],
    ["L.G. FUAD", "Motion City Soundtrack"],
    ["This Is for Real", "Motion City Soundtrack"],

    ["Swing, Swing", "The All-American Rejects"],
    ["Top of the World", "The All-American Rejects"],
    ["Straightjacket Feeling", "The All-American Rejects"],
    ["Another Heart Calls", "The All-American Rejects"],

    ["Vindicated", "Dashboard Confessional"],
    ["Hands Down", "Dashboard Confessional"],
    ["Rapid Hope Loss", "Dashboard Confessional"],
    ["Don't Wait", "Dashboard Confessional"],
    ["Stolen", "Dashboard Confessional"],

    ["Here (In Your Arms)", "Hellogoodbye"],
    ["All of Your Love", "Hellogoodbye"],
    ["Baby, It's Fact", "Hellogoodbye"],

    ["Shake It", "Metro Station"],
    ["Seventeen Forever", "Metro Station"],
    ["Kelsey", "Metro Station"],

    ["The Curse of Curves", "Cute Is What We Aim For"],

    ["Pressure", "Paramore"],
    ["Emergency", "Paramore"],
    ["For a Pessimist, I'm Pretty Optimistic", "Paramore"],

    ["Sweet Talk 101", "Cute Is What We Aim For"],
    ["Newport Living", "Cute Is What We Aim For"],
    ["Moan", "Cute Is What We Aim For"],

    ["Coffee Shop Soundtrack", "All Time Low"],
    ["Jasey Rae", "All Time Low"],
    ["Remembering Sunday", "All Time Low"],
    ["Lost in Stereo", "All Time Low"],

    ["Three Cheers for Five Years", "Mayday Parade"],
    ["Black Cat", "Mayday Parade"],
    ["I'd Hate to Be You When People Find Out What This Song Is About", "Mayday Parade"],

    ["Ready Fuels", "Anberlin"],
    ["Paperthin Hymn", "Anberlin"],
    ["Feel Good Drag", "Anberlin"],
    ["Godspeed", "Anberlin"],
    ["A Whisper & a Clamour", "Anberlin"],

    ["The Space Between", "Valencia"],
    ["Safe to Say", "Valencia"],
    ["Holiday", "Valencia"],

    ["Honestly", "Cartel"],
    ["Say Anything (Else)", "Cartel"],
    ["Lose It", "Cartel"],

    ["The Mixed Tape", "Jack's Mannequin"],
    ["Dark Blue", "Jack's Mannequin"],
    ["The Resolution", "Jack's Mannequin"],
    ["Bruised", "Jack's Mannequin"],
    ["Holiday from Real", "Jack's Mannequin"],

    ["The Adventure", "Angels & Airwaves"]
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
                8967 + index;

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
