// quiz_pack92.js
// PuzzlePilot Big Quiz
// Music Pack 92
// 100 questions
// IDs: music_7267 to music_7366

const songs = [
    ["Black Cat", "Janet Jackson", "Easy"],
    ["Alright", "Janet Jackson", "Medium"],
    ["Come Back to Me", "Janet Jackson", "Medium"],

    ["Thieves in the Temple", "Prince", "Medium"],
    ["New Power Generation", "Prince", "Medium"],
    ["Gett Off", "Prince", "Easy"],
    ["Cream", "Prince", "Easy"],
    ["Diamonds and Pearls", "Prince", "Easy"],
    ["Money Don't Matter 2 Night", "Prince", "Medium"],
    ["Sexy MF", "Prince", "Medium"],
    ["My Name Is Prince", "Prince", "Medium"],
    ["The Morning Papers", "Prince", "Hard"],
    ["Peach", "Prince", "Medium"],
    ["The Most Beautiful Girl in the World", "Prince", "Easy"],
    ["Gold", "Prince", "Medium"],

    ["Yesterday", "Wet Wet Wet", "Hard"],

    ["My 16th Apology", "Shakespears Sister", "Hard"],

    ["Space Jungle", "Adamski", "Hard"],

    ["Won't Talk About It", "Beats International", "Hard"],
    ["Burundi Blues", "Beats International", "Hard"],

    ["U R the Best Thing", "D Ream", "Medium"],
    ["Take Me Away", "D Ream", "Hard"],
    ["Shoot Me with Your Love", "D Ream", "Hard"],

    ["Swamp Thing", "The Grid", "Medium"],
    ["Texas Cowboys", "The Grid", "Hard"],
    ["Rollercoaster", "The Grid", "Hard"],
    ["Crystal Clear", "The Grid", "Hard"],

    ["Comin' On", "The Shamen", "Hard"],

    ["The Sun Rising", "The Beloved", "Medium"],

    ["Children", "EMF", "Hard"],
    ["Lies", "EMF", "Hard"],
    ["They're Here", "EMF", "Hard"],
    ["Perfect Day", "EMF", "Hard"],

    ["The Devil You Know", "Jesus Jones", "Medium"],
    ["The Right Decision", "Jesus Jones", "Hard"],

    ["Hot Love Now", "The Wonder Stuff", "Hard"],

    ["Higher Than the Sun", "Primal Scream", "Medium"],
    ["Kowalski", "Primal Scream", "Medium"],

    ["Born of Frustration", "James", "Medium"],

    ["Happy", "Sister Hazel", "Hard"],

    ["All I Want", "Toad the Wet Sprocket", "Medium"],
    ["Something's Always Wrong", "Toad the Wet Sprocket", "Medium"],
    ["Fall Down", "Toad the Wet Sprocket", "Medium"],
    ["Walk on the Ocean", "Toad the Wet Sprocket", "Medium"],
    ["Good Intentions", "Toad the Wet Sprocket", "Hard"],

    ["Carolina Blues", "Blues Traveler", "Hard"],

    ["You Let Your Heart Go Too Fast", "Spin Doctors", "Hard"],

    ["Allison Road", "Gin Blossoms", "Medium"],

    ["Small Wonders", "Dogs Eye View", "Hard"],

    ["Right Hand Man", "Joan Osborne", "Medium"],
    ["St Teresa", "Joan Osborne", "Medium"],
    ["Ladder", "Joan Osborne", "Hard"],

    ["Me", "Paula Cole", "Hard"],

    ["Taffy", "Lisa Loeb", "Hard"],

    ["There She Goes", "Sixpence None the Richer", "Easy"],

    ["Feelin' Alright", "Len", "Hard"],

    ["Afrodiziak", "Bran Van 3000", "Hard"],

    ["Luv 4 Luv", "Robin S", "Medium"],
    ["What I Do Best", "Robin S", "Hard"],
    ["Back It Up", "Robin S", "Hard"],

    ["I'm Not Over You", "CeCe Peniston", "Hard"],

    ["Makin' Happy", "Crystal Waters", "Medium"],
    ["What I Need", "Crystal Waters", "Hard"],

    ["Strike It Up", "Black Box", "Medium"],
    ["Everybody Everybody", "Black Box", "Medium"],
    ["Fantasy", "Black Box", "Hard"],
    ["Open Your Eyes", "Black Box", "Hard"],

    ["Fallin' in Love", "La Bouche", "Hard"],
    ["I Love to Love", "La Bouche", "Hard"],

    ["Follow the Rules", "Livin Joy", "Hard"],
    ["Where Can I Find Love", "Livin Joy", "Hard"],

    ["Come into My Life", "Gala", "Medium"],
    ["Suddenly", "Gala", "Hard"],

    ["Only When I Sleep", "The Corrs", "Medium"],

    ["Crush", "Jennifer Paige", "Easy"],
    ["Sober", "Jennifer Paige", "Hard"],
    ["Always You", "Jennifer Paige", "Hard"],

    ["Where Do You Go", "No Mercy", "Easy"],
    ["Please Don't Go", "No Mercy", "Medium"],
    ["When I Die", "No Mercy", "Medium"],

    ["Wrong", "Everything but the Girl", "Medium"],
    ["Walking Wounded", "Everything but the Girl", "Medium"],
    ["Single", "Everything but the Girl", "Hard"],

    ["You're Not Alone", "Olive", "Easy"],
    ["Miracle", "Olive", "Hard"],

    ["Pay for Me", "Whale", "Hard"],
    ["Four Big Speakers", "Whale", "Hard"],

    ["Wanted", "White Town", "Hard"],

    ["Pepper", "Butthole Surfers", "Medium"],
    ["Cough Syrup", "Butthole Surfers", "Hard"],

    ["Money", "Space", "Hard"],

    ["Korean Bodega", "Fun Lovin Criminals", "Hard"],

    ["In Your Care", "Tasmin Archer", "Hard"],

    ["Constant Craving", "k.d. lang", "Easy"],
    ["Miss Chatelaine", "k.d. lang", "Medium"],

    ["Save the Best for Last", "Vanessa Williams", "Easy"],
    ["The Sweetest Days", "Vanessa Williams", "Medium"],

    ["Blowing Kisses in the Wind", "Paula Abdul", "Medium"],
    ["Vibeology", "Paula Abdul", "Medium"],

    ["I Wonder Why", "Curtis Stigers", "Easy"]
];

const artists = [...new Set(
    songs.map(song => song[1])
)];

function makeAnswers(correctArtist, index) {
    const wrong = [];

    for (
        let offset = 1;
        wrong.length < 3;
        offset++
    ) {
        const candidate =
            artists[
                (index + offset) %
                artists.length
            ];

        if (
            candidate !== correctArtist &&
            wrong.includes(candidate) === false
        ) {
            wrong.push(candidate);
        }
    }

    const answers = [
        correctArtist,
        ...wrong
    ];

    const shift = index % 4;

    return [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];
}

const quizPack92 = songs.map(
    ([title, artist, difficulty], index) => ({
        id: `music_${7267 + index}`,
        category: "Music",
        difficulty,
        question:
            `Which artist recorded '${title}'?`,
        answers: makeAnswers(
            artist,
            index
        ),
        correctAnswer: artist
    })
);

module.exports = quizPack92;
