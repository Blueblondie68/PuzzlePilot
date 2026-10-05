// quiz_pack93.js
// PuzzlePilot Big Quiz - Pack 93
// Music - 2000s
// 100 questions
// IDs: music_7367 - music_7466

const songs = [
    ["Love at First Sight", "Kylie Minogue"],
    ["In Your Eyes", "Kylie Minogue"],
    ["Whenever, Wherever", "Shakira"],
    ["Underneath Your Clothes", "Shakira"],
    ["Hips Don't Lie", "Shakira"],
    ["Beautiful", "Christina Aguilera"],
    ["Dirrty", "Christina Aguilera"],
    ["Fighter", "Christina Aguilera"],
    ["Baby Boy", "Beyoncé"],
    ["Irreplaceable", "Beyoncé"],
    ["Single Ladies (Put a Ring on It)", "Beyoncé"],
    ["Just Dance", "Lady Gaga"],
    ["Paparazzi", "Lady Gaga"],
    ["Bad Romance", "Lady Gaga"],
    ["You Know I'm No Good", "Amy Winehouse"],
    ["Valerie", "Mark Ronson feat. Amy Winehouse"],
    ["LDN", "Lily Allen"],
    ["Do You Want To", "Franz Ferdinand"],
    ["Chelsea Dagger", "The Fratellis"],
    ["Naive", "The Kooks"],
    ["I Bet You Look Good on the Dancefloor", "Arctic Monkeys"],
    ["When the Sun Goes Down", "Arctic Monkeys"],
    ["Fluorescent Adolescent", "Arctic Monkeys"],
    ["When You Were Young", "The Killers"],
    ["Sex on Fire", "Kings of Leon"],
    ["Use Somebody", "Kings of Leon"],
    ["Have a Nice Day", "Stereophonics"],
    ["Clocks", "Coldplay"],
    ["Fix You", "Coldplay"],
    ["Viva la Vida", "Coldplay"],

    ["Get Over You", "Sophie Ellis-Bextor"],
    ["Mixed Up World", "Sophie Ellis-Bextor"],
    ["Groovejet (If This Ain't Love)", "Spiller"],
    ["Lady (Hear Me Tonight)", "Modjo"],
    ["Another Chance", "Roger Sanchez"],
    ["Lola's Theme", "Shapeshifters"],
    ["Call on Me", "Eric Prydz"],
    ["Put Your Hands Up for Detroit", "Fedde Le Grand"],
    ["Destination Calabria", "Alex Gaudino feat. Crystal Waters"],
    ["Heaven", "DJ Sammy"],
    ["Everytime We Touch", "Cascada"],
    ["Evacuate the Dancefloor", "Cascada"],
    ["Cry for You", "September"],
    ["Satisfaction", "Benny Benassi"],
    ["Rock Your Body", "Justin Timberlake"],
    ["Cry Me a River", "Justin Timberlake"],
    ["SexyBack", "Justin Timberlake"],
    ["What Goes Around... Comes Around", "Justin Timberlake"],
    ["Behind These Hazel Eyes", "Kelly Clarkson"],
    ["Who Knew", "Pink"],
    ["Please Don't Leave Me", "Pink"],
    ["Family Portrait", "Pink"],
    ["Don't Stop the Music", "Rihanna"],
    ["Disturbia", "Rihanna"],
    ["SOS", "Rihanna"],
    ["Promiscuous", "Nelly Furtado"],
    ["Maneater", "Nelly Furtado"],
    ["Say It Right", "Nelly Furtado"],
    ["I'm Like a Bird", "Nelly Furtado"],
    ["Sk8er Boi", "Avril Lavigne"],
    ["My Happy Ending", "Avril Lavigne"],
    ["Girlfriend", "Avril Lavigne"],
    ["Makes Me Wonder", "Maroon 5"],
    ["How You Remind Me", "Nickelback"],
    ["Someday", "Nickelback"],
    ["Rockstar", "Nickelback"],
    ["In the End", "Linkin Park"],
    ["Numb", "Linkin Park"],
    ["What I've Done", "Linkin Park"],
    ["Bring Me to Life", "Evanescence"],
    ["My Immortal", "Evanescence"],

    ["No Good Advice", "Girls Aloud"],
    ["Love Machine", "Girls Aloud"],
    ["Biology", "Girls Aloud"],
    ["Whole Again", "Atomic Kitten"],
    ["Eternal Flame", "Atomic Kitten"],
    ["The Tide Is High (Get the Feeling)", "Atomic Kitten"],
    ["Never Had a Dream Come True", "S Club 7"],
    ["Don't Stop Movin'", "S Club 7"],
    ["Have You Ever", "S Club 7"],
    ["All Rise", "Blue"],
    ["Too Close", "Blue"],
    ["One Love", "Blue"],
    ["If You Come Back", "Blue"],
    ["Your Game", "Will Young"],
    ["Patience", "Take That"],
    ["Shine", "Take That"],
    ["Rule the World", "Take That"],
    ["Greatest Day", "Take That"],
    ["Fill My Little World", "The Feeling"],
    ["Never Be Lonely", "The Feeling"],
    ["Sewn", "The Feeling"],
    ["Golden Touch", "Razorlight"],
    ["In the Morning", "Razorlight"],
    ["Ruby", "Kaiser Chiefs"],
    ["Everyday I Love You Less and Less", "Kaiser Chiefs"],
    ["Never Miss a Beat", "Kaiser Chiefs"],
    ["Teenage Dirtbag", "Wheatus"],
    ["Bohemian Like You", "The Dandy Warhols"],
    ["Last Nite", "The Strokes"]
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
                7367 + index;

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
