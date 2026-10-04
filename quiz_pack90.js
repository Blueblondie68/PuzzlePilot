// quiz_pack90.js
// PuzzlePilot Big Quiz
// Music Pack 90
// 100 questions
// IDs: music_7067 to music_7166

const songs = [
    ["Catch a Fire", "Haddaway", "Hard"],
    ["Fly Away", "Haddaway", "Hard"],

    ["The Real Thing", "2 Unlimited", "Medium"],
    ["Here I Go", "2 Unlimited", "Hard"],
    ["Maximum Overdrive", "2 Unlimited", "Hard"],
    ["Nothing Like the Rain", "2 Unlimited", "Hard"],
    ["Let the Beat Control Your Body", "2 Unlimited", "Hard"],
    ["Workaholic", "2 Unlimited", "Hard"],
    ["Twilight Zone", "2 Unlimited", "Medium"],
    ["Get Ready for This", "2 Unlimited", "Easy"],
    ["Faces", "2 Unlimited", "Hard"],
    ["The Magic Friend", "2 Unlimited", "Hard"],
    ["Jump for Joy", "2 Unlimited", "Hard"],
    ["Spread Your Love", "2 Unlimited", "Hard"],

    ["Ooops Up", "Snap", "Medium"],
    ["Cult of Snap", "Snap", "Hard"],
    ["Mary Had a Little Boy", "Snap", "Hard"],
    ["Colour of Love", "Snap", "Hard"],
    ["Do You See the Light", "Snap", "Medium"],
    ["Welcome to Tomorrow", "Snap", "Medium"],
    ["Exterminate", "Snap", "Medium"],

    ["Move", "Moby", "Hard"],
    ["Feeling So Real", "Moby", "Medium"],
    ["Everytime You Touch Me", "Moby", "Hard"],
    ["Into the Blue", "Moby", "Hard"],
    ["Hymn", "Moby", "Hard"],
    ["James Bond Theme", "Moby", "Medium"],
    ["Honey", "Moby", "Medium"],
    ["Bodyrock", "Moby", "Medium"],
    ["Why Does My Heart Feel So Bad", "Moby", "Easy"],
    ["Go", "Moby", "Medium"],

    ["Higher State of Consciousness", "Josh Wink", "Medium"],
    ["Don't Laugh", "Josh Wink", "Hard"],
    ["Are You There", "Josh Wink", "Hard"],

    ["Everybody Be Somebody", "Ruffneck", "Hard"],

    ["The Bomb (These Sounds Fall into My Mind)", "The Bucketheads", "Medium"],

    ["Magic Carpet Ride", "Mighty Dub Katz", "Hard"],
    ["It's Just Another Groove", "Mighty Dub Katz", "Hard"],

    ["Hey Jupiter", "Tori Amos", "Medium"],
    ["Talula", "Tori Amos", "Hard"],
    ["Raspberry Swirl", "Tori Amos", "Hard"],
    ["God", "Tori Amos", "Medium"],
    ["China", "Tori Amos", "Hard"],
    ["Winter", "Tori Amos", "Medium"],

    ["Army of Me", "Bjork", "Medium"],
    ["Hyperballad", "Bjork", "Medium"],
    ["Possibly Maybe", "Bjork", "Hard"],
    ["I Miss You", "Bjork", "Hard"],
    ["Bachelorette", "Bjork", "Medium"],
    ["Hunter", "Bjork", "Medium"],
    ["Alarm Call", "Bjork", "Hard"],
    ["Big Time Sensuality", "Bjork", "Medium"],
    ["Violently Happy", "Bjork", "Hard"],
    ["Isobel", "Bjork", "Medium"],
    ["Play Dead", "Bjork", "Medium"],
    ["Human Behaviour", "Bjork", "Easy"],
    ["Venus as a Boy", "Bjork", "Medium"],
    ["It's Oh So Quiet", "Bjork", "Easy"],
    ["All Is Full of Love", "Bjork", "Medium"],

    ["Overcome", "Tricky", "Hard"],
    ["Hell Is Round the Corner", "Tricky", "Medium"],
    ["Black Steel", "Tricky", "Medium"],
    ["Pumpkin", "Tricky", "Hard"],
    ["Makes Me Wanna Die", "Tricky", "Hard"],
    ["Christiansands", "Tricky", "Hard"],

    ["6 Underground", "Sneaker Pimps", "Easy"],
    ["Spin Spin Sugar", "Sneaker Pimps", "Medium"],
    ["Post-Modern Sleaze", "Sneaker Pimps", "Hard"],
    ["Tesko Suicide", "Sneaker Pimps", "Hard"],
    ["Low Five", "Sneaker Pimps", "Hard"],

    ["Supervixen", "Garbage", "Hard"],

    ["Never Here", "Elastica", "Hard"],

    ["Vasoline", "Stone Temple Pilots", "Medium"],
    ["Interstate Love Song", "Stone Temple Pilots", "Easy"],
    ["Big Empty", "Stone Temple Pilots", "Medium"],
    ["Pretty Penny", "Stone Temple Pilots", "Hard"],
    ["Trippin on a Hole in a Paper Heart", "Stone Temple Pilots", "Medium"],
    ["Lady Picture Show", "Stone Temple Pilots", "Medium"],
    ["Big Bang Baby", "Stone Temple Pilots", "Medium"],
    ["Down", "Stone Temple Pilots", "Hard"],
    ["Plush", "Stone Temple Pilots", "Easy"],
    ["Creep", "Stone Temple Pilots", "Medium"],

    ["Mother We Just Can't Get Enough", "New Radicals", "Hard"],
    ["Maybe You've Been Brainwashed Too", "New Radicals", "Hard"],
    ["Technicolor Lover", "New Radicals", "Hard"],
    ["Cryin' Like a Church on Monday", "New Radicals", "Hard"],

    ["Choice in the Matter", "Aimee Mann", "Hard"],
    ["That's Just What You Are", "Aimee Mann", "Medium"],
    ["You Could Make a Killing", "Aimee Mann", "Hard"],
    ["I Should've Known", "Aimee Mann", "Hard"],
    ["Long Shot", "Aimee Mann", "Hard"],
    ["Ray", "Aimee Mann", "Hard"],
    ["Calling It Quits", "Aimee Mann", "Hard"],

    ["Electric Guitars", "Prefab Sprout", "Hard"],

    ["Spanish Horses", "Aztec Camera", "Hard"],
    ["Birds", "Aztec Camera", "Hard"],
    ["Sun", "Aztec Camera", "Hard"],

    ["River of People", "Love and Money", "Hard"],
    ["Jocelyn Square", "Love and Money", "Hard"],
    ["Strange Kind of Love", "Love and Money", "Hard"]
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

const quizPack90 = songs.map(
    ([title, artist, difficulty], index) => ({
        id: `music_${7067 + index}`,
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

module.exports = quizPack90;
