// quiz_pack115.js
// PuzzlePilot Big Quiz
// Music Pack 115
// 100 questions
// IDs: music_9567 to music_9666

const songs = [
    ["Girl All the Bad Guys Want", "Bowling for Soup"],
    ["Emily", "Bowling for Soup"],
    ["Almost", "Bowling for Soup"],
    ["High School Never Ends", "Bowling for Soup"],
    ["When We Die", "Bowling for Soup"],
    ["Flavor of the Weak", "American Hi-Fi"],
    ["Another Perfect Day", "American Hi-Fi"],
    ["The Art of Losing", "American Hi-Fi"],
    ["Why Don't You & I", "Santana"],
    ["Into the Night", "Santana"],
    ["Just Feel Better", "Santana"],
    ["Wherever You Are", "Hoobastank"],
    ["Inside of You", "Hoobastank"],
    ["My Turn", "Hoobastank"],
    ["You're Going Down", "Sick Puppies"],
    ["Odd One", "Sick Puppies"],
    ["All the Same", "Sick Puppies"],
    ["Everything Changes", "Staind"],
    ["King of All Excuses", "Staind"],
    ["All I Want", "Staind"],
    ["So Happy", "Theory of a Deadman"],
    ["Bad Girlfriend", "Theory of a Deadman"],
    ["Not Meant to Be", "Theory of a Deadman"],
    ["Santa Monica", "Theory of a Deadman"],
    ["First Date", "Blink-182"],
    ["Stay Together for the Kids", "Blink-182"],
    ["Feeling This", "Blink-182"],
    ["I Miss You", "Blink-182"],
    ["Down", "Blink-182"],
    ["Always", "Blink-182"],
    ["Niki FM", "Hawthorne Heights"],
    ["Screaming Infidelities", "Dashboard Confessional"],
    ["The War", "Angels & Airwaves"],
    ["Thank You for the Venom", "My Chemical Romance"],
    ["Dead!", "My Chemical Romance"],
    ["What's It Feel Like to Be a Ghost?", "Taking Back Sunday"],

    ["1985", "Bowling for Soup"],
    ["Punk Rock 101", "Bowling for Soup"],
    ["Ohio (Come Back to Texas)", "Bowling for Soup"],
    ["Running from Your Dad", "Bowling for Soup"],
    ["No Hablo Ingles", "Bowling for Soup"],
    ["The Bitch Song", "Bowling for Soup"],
    ["Wall of Sound", "American Hi-Fi"],
    ["The Breakup Song", "American Hi-Fi"],
    ["Geeks Get the Girls", "American Hi-Fi"],
    ["Hell Yeah!", "American Hi-Fi"],
    ["Winning", "Santana"],
    ["I'm Feeling You", "Santana"],
    ["Nothing at All", "Santana"],
    ["The Game of Love", "Santana"],
    ["Crawling in the Dark", "Hoobastank"],
    ["My World", "Sick Puppies"],
    ["What Are You Looking For", "Sick Puppies"],
    ["Pitiful", "Sick Puppies"],
    ["No Surprise", "Theory of a Deadman"],
    ["Hate My Life", "Theory of a Deadman"],
    ["By the Way", "Theory of a Deadman"],
    ["Rollercoaster", "Blink-182"],
    ["Reckless Abandon", "Blink-182"],
    ["Online Songs", "Blink-182"],
    ["Obvious", "Blink-182"],
    ["Stockholm Syndrome", "Blink-182"],
    ["Not Now", "Blink-182"],
    ["Breathing", "Yellowcard"],
    ["Believe", "Yellowcard"],
    ["Empty Apartment", "Yellowcard"],
    ["Saints and Sailors", "Dashboard Confessional"],
    ["The Best Deceptions", "Dashboard Confessional"],
    ["The Sharp Hint of New Tears", "Dashboard Confessional"],
    ["The Places You Have Come to Fear the Most", "Dashboard Confessional"],
    ["Box Full of Sharp Objects", "The Used"],
    ["Maybe Memories", "The Used"],
    ["Listening", "The Used"],
    ["Timberwolves at New Jersey", "Taking Back Sunday"],
    ["Bike Scene", "Taking Back Sunday"],
    ["Set Phasers to Stun", "Taking Back Sunday"],
    ["Bonus Mosh Pt. II", "Taking Back Sunday"],
    ["Silver Bullet", "Hawthorne Heights"],
    ["Giving Up", "Silverstein"],
    ["Call It Karma", "Silverstein"],
    ["Translating the Name", "Saosin"],
    ["Bury Your Head", "Saosin"],
    ["It's Far Better to Learn", "Saosin"],
    ["For the Workforce, Drowning", "Thursday"],
    ["At This Velocity", "Thursday"],
    ["The Boy Who Blocked His Own Shot", "Brand New"],
    ["Degausser", "Brand New"],
    ["The Gift", "Angels & Airwaves"],
    ["It Hurts", "Angels & Airwaves"],
    ["Call to Arms", "Angels & Airwaves"],
    ["Attention", "The Academy Is..."],
    ["Classifieds", "The Academy Is..."],
    ["Conspiracy", "Paramore"],
    ["Hallelujah", "Paramore"],
    ["Fences", "Paramore"],
    ["Turn It Off", "Paramore"],
    ["Cemetery Drive", "My Chemical Romance"],
    ["Give 'Em Hell, Kid", "My Chemical Romance"],
    ["The Jetset Life Is Gonna Kill You", "My Chemical Romance"],
    ["House of Wolves", "My Chemical Romance"]
];

const artists = [
    ...new Set(
        songs.map(song => song[1])
    )
];

function makeAnswers(correctArtist, index) {
    const wrongArtists =
        artists.filter(
            artist => artist !== correctArtist
        );

    const answers = [
        correctArtist,
        wrongArtists[
            index % wrongArtists.length
        ],
        wrongArtists[
            (index + 11) %
            wrongArtists.length
        ],
        wrongArtists[
            (index + 23) %
            wrongArtists.length
        ]
    ];

    const rotation =
        index % answers.length;

    return [
        ...answers.slice(rotation),
        ...answers.slice(0, rotation)
    ];
}

const questions =
    songs.map(
        ([title, artist], index) => {
            const number =
                9567 + index;

            return {
                id:
                    `music_${number}`,
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

module.exports = questions;
