// quiz_pack100.js
// PuzzlePilot Big Quiz - Pack 100
// Music - 2000s
// 100 questions
// IDs: music_8067 - music_8166

const songs = [
    ["After Hours", "We Are Scientists"],
    ["Chick Lit", "We Are Scientists"],
    ["Impatience", "We Are Scientists"],
    ["Cash Machine", "Hard-Fi"],
    ["Hard to Beat", "Hard-Fi"],
    ["Living for the Weekend", "Hard-Fi"],
    ["Tied Up Too Tight", "Hard-Fi"],
    ["Suburban Knights", "Hard-Fi"],
    ["Can't Get Along (Without You)", "Hard-Fi"],

    ["Hello Sunshine", "Super Furry Animals"],
    ["Lazer Beam", "Super Furry Animals"],
    ["Show Your Hand", "Super Furry Animals"],
    ["There Goes the Fear", "Doves"],
    ["Pounding", "Doves"],
    ["Black and White Town", "Doves"],
    ["Snowden", "Doves"],
    ["Sky Starts Falling", "Doves"],
    ["Kingdom of Rust", "Doves"],
    ["Winter Hill", "Doves"],
    ["Caught by the River", "Doves"],
    ["Firesuite", "Doves"],
    ["Words", "Doves"],
    ["Silence Is Easy", "Starsailor"],
    ["Four to the Floor", "Starsailor"],
    ["Alcoholic", "Starsailor"],
    ["Poor Misguided Fool", "Starsailor"],
    ["Born Again", "Starsailor"],
    ["In the Crossfire", "Starsailor"],
    ["This Time", "Starsailor"],
    ["Tell Me It's Not Over", "Starsailor"],
    ["Keep Us Together", "Starsailor"],
    ["Good Souls", "Starsailor"],
    ["Lights", "Editors"],
    ["Escape the Nest", "Editors"],
    ["Steve McQueen", "The Automatic"],
    ["You Shout You Shout You Shout You Shout", "The Automatic"],
    ["Magazines", "The Automatic"],
    ["Interstate", "The Automatic"],
    ["Run and Hide", "The Automatic"],
    ["Seriously... I Hate You Guys", "The Automatic"],
    ["Lost at Home", "The Automatic"],

    ["I Found Out", "The Pigeon Detectives"],
    ["Romantic Type", "The Pigeon Detectives"],
    ["This Is an Emergency", "The Pigeon Detectives"],
    ["Everybody Wants Me", "The Pigeon Detectives"],
    ["Say It Like You Mean It", "The Pigeon Detectives"],
    ["Animal", "The Pigeon Detectives"],
    ["Hurricane", "The View"],
    ["Wasted Little DJs", "The View"],
    ["Superstar Tradesman", "The View"],
    ["Skag Trendy", "The View"],
    ["Face for the Radio", "The View"],
    ["Shock Horror", "The View"],
    ["5 Rebbecca's", "The View"],
    ["Temptation Dice", "The View"],
    ["Sunday", "The View"],
    ["First Love", "The Maccabees"],
    ["Toothpaste Kisses", "The Maccabees"],
    ["Precious Time", "The Maccabees"],
    ["About Your Dress", "The Maccabees"],
    ["Latchmere", "The Maccabees"],
    ["X-Ray", "The Maccabees"],
    ["No Kind Words", "The Maccabees"],
    ["Love You Better", "The Maccabees"],
    ["Can You Give It", "The Maccabees"],
    ["Young Lions", "The Maccabees"],
    ["Standing Next to Me", "The Last Shadow Puppets"],
    ["The Age of the Understatement", "The Last Shadow Puppets"],
    ["My Mistakes Were Made for You", "The Last Shadow Puppets"],
    ["Separate and Ever Deadly", "The Last Shadow Puppets"],
    ["Calm Like You", "The Last Shadow Puppets"],
    ["Black Plant", "The Last Shadow Puppets"],
    ["Meeting Place", "The Last Shadow Puppets"],
    ["Only Ones Who Know", "Arctic Monkeys"],
    ["Leave Before the Lights Come On", "Arctic Monkeys"],
    ["Perhaps Vampires Is a Bit Strong But...", "Arctic Monkeys"],
    ["Mardy Bum", "Arctic Monkeys"],
    ["Old Yellow Bricks", "Arctic Monkeys"],
    ["If You Were There, Beware", "Arctic Monkeys"],
    ["Dangerous Animals", "Arctic Monkeys"],
    ["Secret Door", "Arctic Monkeys"],
    ["Dance Little Liar", "Arctic Monkeys"],
    ["Potion Approaching", "Arctic Monkeys"],
    ["Black & White", "The Upper Room"],
    ["All Over This Town", "The Upper Room"],
    ["Combination", "The Upper Room"],
    ["Kill Kill Kill", "The Upper Room"],
    ["Never Come Back", "The Upper Room"],
    ["Ladyflash", "The Go! Team"],
    ["Huddle Formation", "The Go! Team"],
    ["Bottle Rocket", "The Go! Team"],
    ["Grip Like a Vice", "The Go! Team"],
    ["Doing It Right", "The Go! Team"],
    ["Milk Crisis", "The Go! Team"],
    ["Junior Kickstart", "The Go! Team"],
    ["Cassius", "Foals"],
    ["Red Socks Pugie", "Foals"],
    ["Olympic Airways", "Foals"],
    ["Balloons", "Foals"],
    ["Mathletics", "Foals"]
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
                8067 + index;

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
