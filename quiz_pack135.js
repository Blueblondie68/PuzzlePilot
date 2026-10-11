
//
// quiz_pack135.js
// PuzzlePilot Music Quiz
// Pack 135 - Music of the 2020s
// Questions music_11567 to music_11666
//

const songs = [

    // Chappell Roan and Billie Eilish
    ["Femininomenon", "Chappell Roan"],
    ["My Kink Is Karma", "Chappell Roan"],
    ["Lunch", "Billie Eilish"],
    ["Chihiro", "Billie Eilish"],
    ["Wildflower", "Billie Eilish"],
    ["The Greatest", "Billie Eilish"],
    ["Therefore I Am", "Billie Eilish"],
    ["Your Power", "Billie Eilish"],

    // Contemporary pop and country
    ["End of Beginning", "Djo"],
    ["Basic Being Basic", "Djo"],
    ["Delete Ya", "Djo"],
    ["Back on You", "Djo"],
    ["Golden", "HUNTR/X"],
    ["APT.", "ROSÉ and Bruno Mars"],
    ["Flicker of Light", "Lola Young"],
    ["The Door", "Teddy Swims"],
    ["Bad Dreams", "Teddy Swims"],
    ["Guilty", "Teddy Swims"],
    ["Hammer to the Heart", "Teddy Swims"],
    ["Good News", "Shaboozey"],
    ["Highway", "Shaboozey"],
    ["Eat Your Young", "Hozier"],
    ["Francesca", "Hozier"],
    ["Nobody's Soldier", "Hozier"],
    ["Dial Drunk", "Noah Kahan"],

    // Indie, folk and British artists
    ["Ceilings", "Lizzy McAlpine"],
    ["Erase Me", "Lizzy McAlpine"],
    ["Older", "Lizzy McAlpine"],
    ["All My Ghosts", "Lizzy McAlpine"],
    ["I Guess", "Lizzy McAlpine"],
    ["Labour", "Paris Paloma"],
    ["The Fruits", "Paris Paloma"],
    ["As Good a Reason", "Paris Paloma"],
    ["Boys, Bugs and Men", "Paris Paloma"],
    ["Not Strong Enough", "boygenius"],
    ["Cool About It", "boygenius"],
    ["Emily I'm Sorry", "boygenius"],
    ["True Blue", "boygenius"],
    ["$20", "boygenius"],
    ["Arm's Length", "Sam Fender"],
    ["Little Bit Closer", "Sam Fender"],
    ["Dive", "Olivia Dean"],
    ["The Hardest Part", "Olivia Dean"],
    ["Carmen", "Olivia Dean"],
    ["Messy", "Olivia Dean"],
    ["Lady Lady", "Olivia Dean"],

    // British rock and indie
    ["Catch These Fists", "Wet Leg"],
    ["CPR", "Wet Leg"],
    ["Mangetout", "Wet Leg"],
    ["In the Modern World", "Fontaines D.C."],
    ["Bug", "Fontaines D.C."],
    ["Sundowner", "Fontaines D.C."],
    ["The Narcissist", "Blur"],
    ["St. Charles Square", "Blur"],
    ["Barbaric", "Blur"],
    ["The Ballad", "Blur"],
    ["Avalon", "Blur"],
    ["The Dying Light", "Noel Gallagher's High Flying Birds"],
    ["Easy Now", "Noel Gallagher's High Flying Birds"],
    ["Council Skies", "Noel Gallagher's High Flying Birds"],
    ["Pretty Boy", "Noel Gallagher's High Flying Birds"],
    ["Dead to the World", "Noel Gallagher's High Flying Birds"],
    ["Everything's Electric", "Liam Gallagher"],
    ["Better Days", "Liam Gallagher"],
    ["Diamond in the Dark", "Liam Gallagher"],
    ["Mars to Liverpool", "Liam Gallagher and John Squire"],
    ["Just Another Rainbow", "Liam Gallagher and John Squire"],
    ["Raise Your Hands", "Liam Gallagher and John Squire"],
    ["A Hunger in Your Haunt", "Biffy Clyro"],
    ["Space", "Biffy Clyro"],

    // Rock and alternative
    ["The Emptiness Machine", "Linkin Park"],
    ["Heavy Is the Crown", "Linkin Park"],
    ["Over Each Other", "Linkin Park"],
    ["Two Faced", "Linkin Park"],
    ["Up From the Bottom", "Linkin Park"],
    ["Friendly Fire", "Linkin Park"],
    ["Lost", "Linkin Park"],
    ["Rescued", "Foo Fighters"],
    ["Under You", "Foo Fighters"],
    ["The Teacher", "Foo Fighters"],
    ["Show Me How", "Foo Fighters"],
    ["The Glass", "Foo Fighters"],
    ["Waiting on a War", "Foo Fighters"],
    ["Shame Shame", "Foo Fighters"],
    ["The American Dream Is Killing Me", "Green Day"],
    ["Dilemma", "Green Day"],
    ["Bobby Sox", "Green Day"],
    ["One Eyed Bastard", "Green Day"],
    ["Look Ma, No Brains!", "Green Day"],
    ["The Foundations of Decay", "My Chemical Romance"],
    ["Now and Then", "The Beatles"],
    ["Black Summer", "Red Hot Chili Peppers"],
    ["Tippa My Tongue", "Red Hot Chili Peppers"],
    ["Eddie", "Red Hot Chili Peppers"],
    ["These Are the Ways", "Red Hot Chili Peppers"],
    ["The Drummer", "Red Hot Chili Peppers"],
    ["Won't Stand Down", "Muse"],
    ["Compliance", "Muse"],
    ["Kill or Be Killed", "Muse"],
    ["You Make Me Feel Like It's Halloween", "Muse"]

];

// Validate the source list before building questions.

if (songs.length !== 100) {
    throw new Error(
        "Pack 135 must contain 100 songs. Found: " +
        songs.length
    );
}

// Create a pool of distinct artist names.

const artistPool = [
    ...new Set(songs.map(entry => entry[1]))
];

// Generate the questions.

const quizPack135 = songs.map((entry, index) => {

    const [song, artist] = entry;

    const otherArtists = artistPool.filter(
        name => name !== artist
    );

    const wrongAnswers = [];
    const used = new Set([artist]);

    let position = (index * 7) % otherArtists.length;

    while (wrongAnswers.length < 3) {

        const candidate = otherArtists[position];

        if (!used.has(candidate)) {
            wrongAnswers.push(candidate);
            used.add(candidate);
        }

        position = (position + 5) % otherArtists.length;
    }

    const answers = [
        artist,
        ...wrongAnswers
    ];

    // Rotate the answer order to vary the
    // correct answer's position.

    const shift = index % 4;

    const rotatedAnswers = [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];

    return {
        id: "music_" + (11567 + index),
        category: "Music",
        question: "Which artist recorded '" + song + "'?",
        answers: rotatedAnswers,
        correctAnswer: artist
    };

});

module.exports = quizPack135;
