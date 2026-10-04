// quiz_pack91.js
// PuzzlePilot Big Quiz
// Music Pack 91
// 100 questions
// IDs: music_7167 to music_7266

const songs = [
    ["Power of Love/Love Power", "Luther Vandross", "Medium"],
    ["The Best Things in Life Are Free", "Luther Vandross and Janet Jackson", "Easy"],
    ["Don't Want to Be a Fool", "Luther Vandross", "Medium"],
    ["Your Secret Love", "Luther Vandross", "Medium"],
    ["I Can Make It Better", "Luther Vandross", "Hard"],
    ["Always and Forever", "Luther Vandross", "Medium"],
    ["My Sensitivity (Gets in the Way)", "Luther Vandross", "Hard"],
    ["Love the One You're With", "Luther Vandross", "Medium"],

    ["Moan and Groan", "Mark Morrison", "Hard"],

    ["Let's Get Down", "Tony Toni Tone", "Medium"],
    ["If I Had No Loot", "Tony Toni Tone", "Medium"],
    ["Anniversary", "Tony Toni Tone", "Medium"],
    ["Thinking of You", "Tony Toni Tone", "Hard"],
    ["Feels Good", "Tony Toni Tone", "Medium"],

    ["Back and Forth", "Aaliyah", "Easy"],
    ["At Your Best (You Are Love)", "Aaliyah", "Medium"],
    ["If Your Girl Only Knew", "Aaliyah", "Medium"],
    ["One in a Million", "Aaliyah", "Easy"],
    ["The One I Gave My Heart To", "Aaliyah", "Medium"],
    ["Are You That Somebody", "Aaliyah", "Easy"],
    ["Hot Like Fire", "Aaliyah", "Medium"],

    ["Too Gone Too Long", "En Vogue", "Hard"],

    ["This Is How We Do It", "Montell Jordan", "Easy"],
    ["Somethin' 4 da Honeyz", "Montell Jordan", "Medium"],
    ["Let's Ride", "Montell Jordan", "Medium"],
    ["I Like", "Montell Jordan", "Hard"],

    ["Do You See", "Warren G", "Medium"],
    ["What's Love Got to Do with It", "Warren G", "Medium"],
    ["I Shot the Sheriff", "Warren G", "Hard"],

    ["Fantastic Voyage", "Coolio", "Easy"],
    ["1 2 3 4 (Sumpin' New)", "Coolio", "Medium"],
    ["Too Hot", "Coolio", "Medium"],
    ["C U When U Get There", "Coolio", "Easy"],
    ["Ooh La La", "Coolio", "Hard"],

    ["Jump Around", "House of Pain", "Easy"],
    ["Shamrocks and Shenanigans", "House of Pain", "Hard"],
    ["On Point", "House of Pain", "Hard"],

    ["Insane in the Brain", "Cypress Hill", "Easy"],
    ["I Ain't Goin' Out Like That", "Cypress Hill", "Medium"],
    ["When the Ship Goes Down", "Cypress Hill", "Medium"],
    ["Throw Your Set in the Air", "Cypress Hill", "Hard"],
    ["Boom Biddy Bye Bye", "Cypress Hill", "Hard"],

    ["Unsent", "Alanis Morissette", "Medium"],
    ["So Pure", "Alanis Morissette", "Hard"],

    ["Permanent Tears", "Eagle-Eye Cherry", "Hard"],

    ["Footsteps", "Stiltskin", "Hard"],

    ["Being a Girl", "Mansun", "Hard"],
    ["Negative", "Mansun", "Hard"],

    ["I Can't Imagine the World Without Me", "Echobelly", "Medium"],

    ["Nobody", "Keith Sweat", "Easy"],
    ["Twisted", "Keith Sweat", "Easy"],
    ["Come and Get with Me", "Keith Sweat", "Medium"],
    ["I'm Not Ready", "Keith Sweat", "Medium"],
    ["Keep It Comin'", "Keith Sweat", "Medium"],
    ["Get Up on It", "Keith Sweat", "Medium"],
    ["How Do You Like It", "Keith Sweat", "Hard"],
    ["Make You Sweat", "Keith Sweat", "Medium"],
    ["I'll Give All My Love to You", "Keith Sweat", "Medium"],
    ["Merry Go Round", "Keith Sweat", "Hard"],

    ["Nobody Knows", "The Tony Rich Project", "Easy"],
    ["Like a Woman", "The Tony Rich Project", "Hard"],
    ["Leavin'", "The Tony Rich Project", "Hard"],

    ["Every Little Thing I Do", "Soul for Real", "Medium"],
    ["Candy Rain", "Soul for Real", "Easy"],
    ["If You Want It", "Soul for Real", "Hard"],

    ["Just Kickin' It", "Xscape", "Medium"],
    ["Understanding", "Xscape", "Medium"],
    ["Who Can I Run To", "Xscape", "Medium"],
    ["The Arms of the One Who Loves You", "Xscape", "Hard"],
    ["My Little Secret", "Xscape", "Medium"],
    ["Feels So Good", "Xscape", "Hard"],

    ["Use Your Heart", "SWV", "Medium"],
    ["Rain", "SWV", "Medium"],

    ["Tell Me", "Groove Theory", "Easy"],
    ["Keep Tryin'", "Groove Theory", "Hard"],
    ["Baby Luv", "Groove Theory", "Hard"],

    ["Touch Me Tease Me", "Case", "Medium"],
    ["Happily Ever After", "Case", "Medium"],

    ["Big Poppa", "The Notorious BIG", "Easy"],
    ["One More Chance", "The Notorious BIG", "Medium"],

    ["I Get Around", "2Pac", "Easy"],
    ["Keep Ya Head Up", "2Pac", "Easy"],
    ["How Do U Want It", "2Pac", "Medium"],
    ["Do for Love", "2Pac", "Medium"],

    ["Shoop", "Salt N Pepa", "Easy"],
    ["Whatta Man", "Salt N Pepa", "Easy"],
    ["None of Your Business", "Salt N Pepa", "Medium"],
    ["Let's Talk About Sex", "Salt N Pepa", "Easy"],

    ["It's All About Me", "Mya", "Medium"],
    ["Movin' On", "Mya", "Medium"],
    ["My First Night with You", "Mya", "Hard"],

    ["Baby", "Brandy", "Easy"],
    ["Best Friend", "Brandy", "Medium"],
    ["Brokenhearted", "Brandy", "Medium"],

    ["You Are Not Alone", "Michael Jackson", "Easy"],
    ["Stranger in Moscow", "Michael Jackson", "Medium"],
    ["They Don't Care About Us", "Michael Jackson", "Easy"],
    ["Earth Song", "Michael Jackson", "Easy"],
    ["Remember the Time", "Michael Jackson", "Easy"],
    ["In the Closet", "Michael Jackson", "Medium"]
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

const quizPack91 = songs.map(
    ([title, artist, difficulty], index) => ({
        id: `music_${7167 + index}`,
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

module.exports = quizPack91;
