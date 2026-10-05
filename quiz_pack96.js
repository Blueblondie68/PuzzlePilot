// quiz_pack96.js
// PuzzlePilot Big Quiz - Pack 96
// Music - 2000s
// 100 questions
// IDs: music_7667 - music_7766

const songs = [
    ["Outside", "Staind"],
    ["So Far Away", "Staind"],
    ["Wherever You Will Go", "The Calling"],
    ["Adrienne", "The Calling"],
    ["Why Don't You & I", "Santana feat. Alex Band"],

    ["Smooth Criminal", "Alien Ant Farm"],
    ["Movies", "Alien Ant Farm"],
    ["These Days", "Alien Ant Farm"],
    ["Where Is the Love?", "The Black Eyed Peas"],
    ["Shut Up", "The Black Eyed Peas"],
    ["Don't Phunk with My Heart", "The Black Eyed Peas"],
    ["My Humps", "The Black Eyed Peas"],
    ["Boom Boom Pow", "The Black Eyed Peas"],
    ["Meet Me Halfway", "The Black Eyed Peas"],
    ["Pump It", "The Black Eyed Peas"],
    ["Sunday Morning", "Maroon 5"],
    ["Wake Up Call", "Maroon 5"],
    ["If I Never See Your Face Again", "Maroon 5"],
    ["Beautiful Soul", "Jesse McCartney"],
    ["She's No You", "Jesse McCartney"],
    ["Because of You", "Ne-Yo"],
    ["Closer", "Ne-Yo"],
    ["Miss Independent", "Ne-Yo"],
    ["Sexy Love", "Ne-Yo"],
    ["So Sick", "Ne-Yo"],
    ["How Do I Breathe", "Mario"],
    ["Confessions Part II", "Usher"],
    ["Love in This Club", "Usher"],
    ["U Remind Me", "Usher"],
    ["U Got It Bad", "Usher"],
    ["Crazy", "Gnarls Barkley"],
    ["Smiley Faces", "Gnarls Barkley"],
    ["Run", "Gnarls Barkley"],
    ["American Boy", "Estelle feat. Kanye West"],
    ["Free", "Estelle"],
    ["Come Over", "Estelle feat. Sean Paul"],
    ["Rehab", "Rihanna"],
    ["Shut Up and Drive", "Rihanna"],
    ["Take a Bow", "Rihanna"],
    ["Russian Roulette", "Rihanna"],
    ["Pon de Replay", "Rihanna"],
    ["Unfaithful", "Rihanna"],
    ["If I Were a Boy", "Beyoncé"],
    ["Halo", "Beyoncé"],
    ["Déjà Vu", "Beyoncé feat. Jay-Z"],
    ["Sweet Dreams", "Beyoncé"],
    ["Beautiful Liar", "Beyoncé and Shakira"],
    ["When Love Takes Over", "David Guetta feat. Kelly Rowland"],
    ["Sexy Bitch", "David Guetta feat. Akon"],
    ["Love Don't Let Me Go", "David Guetta feat. Chris Willis"],

    ["Gettin' Over You", "David Guetta feat. Chris Willis, Fergie and LMFAO"],
    ["Delirious", "David Guetta feat. Tara McDonald"],
    ["Baby When the Light", "David Guetta feat. Cozi"],
    ["World, Hold On", "Bob Sinclar feat. Steve Edwards"],
    ["Love Generation", "Bob Sinclar feat. Gary Pine"],
    ["Rock This Party (Everybody Dance Now)", "Bob Sinclar"],
    ["Make Luv", "Room 5 feat. Oliver Cheatham"],
    ["Boogie 2nite", "Booty Luv"],
    ["Shine", "Booty Luv"],
    ["Some Kinda Rush", "Booty Luv"],
    ["Hot Stuff (Let's Dance)", "Craig David"],
    ["What's Your Flava?", "Craig David"],
    ["Rise & Fall", "Craig David feat. Sting"],
    ["Hidden Agenda", "Craig David"],
    ["Don't Love You No More (I'm Sorry)", "Craig David"],
    ["Never Leave Your Side", "Daniel Bedingfield"],
    ["Nothing Hurts Like Love", "Daniel Bedingfield"],
    ["Wrap My Words Around You", "Daniel Bedingfield"],
    ["Soulmate", "Natasha Bedingfield"],
    ["Love Like This", "Natasha Bedingfield feat. Sean Kingston"],
    ["Caroline's a Victim", "Kate Nash"],
    ["Stone Cold Sober", "Paloma Faith"],
    ["Do You Want the Truth or Something Beautiful?", "Paloma Faith"],
    ["Upside Down", "Paloma Faith"],
    ["Saving My Face", "KT Tunstall"],
    ["Hold On", "KT Tunstall"],
    ["Vice", "Razorlight"],
    ["Hostage of Love", "Razorlight"],
    ["Can't Stop This Feeling I've Got", "Razorlight"],
    ["Jenny Don't Be Hasty", "Paolo Nutini"],
    ["Last Request", "Paolo Nutini"],
    ["New Shoes", "Paolo Nutini"],
    ["Coming Up Easy", "Paolo Nutini"],
    ["Candy", "Paolo Nutini"],
    ["Dream Catch Me", "Newton Faulkner"],
    ["Teardrop", "Newton Faulkner"],
    ["Gone in the Morning", "Newton Faulkner"],
    ["She's So Lovely", "Scouting for Girls"],
    ["Elvis Ain't Dead", "Scouting for Girls"],
    ["Heartbeat", "Scouting for Girls"],
    ["It's Not About You", "Scouting for Girls"],
    ["I Wish I Was James Bond", "Scouting for Girls"],
    ["This Ain't a Love Song", "Scouting for Girls"],
    ["Superstar", "Lupe Fiasco feat. Matthew Santos"],
    ["Day 'n' Nite", "Kid Cudi"],
    ["Heartless", "Kanye West"],
    ["Stronger", "Kanye West"],
    ["Gold Digger", "Kanye West feat. Jamie Foxx"],
    ["Good Life", "Kanye West feat. T-Pain"],

    ["Read My Mind", "The Killers"]
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
                7667 + index;

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
