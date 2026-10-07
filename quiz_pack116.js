// quiz_pack116.js
// PuzzlePilot Big Quiz
// Music Pack 116
// 2010s songs

const songs = [
    ['Someone Like You', 'Adele'],
    ['Set Fire to the Rain', 'Adele'],
    ['Hello', 'Adele'],
    ['Send My Love (To Your New Lover)', 'Adele'],
    ['When We Were Young', 'Adele'],
    ['Skyfall', 'Adele'],

    ['Shape of You', 'Ed Sheeran'],
    ['Thinking Out Loud', 'Ed Sheeran'],
    ['The A Team', 'Ed Sheeran'],
    ['Lego House', 'Ed Sheeran'],
    ['Sing', 'Ed Sheeran'],
    ['Photograph', 'Ed Sheeran'],
    ['Castle on the Hill', 'Ed Sheeran'],
    ['Perfect', 'Ed Sheeran'],
    ['Galway Girl', 'Ed Sheeran'],

    ['Domino', 'Jessie J'],
    ['Do It Like a Dude', 'Jessie J'],

    ['Roar', 'Katy Perry'],
    ['Firework', 'Katy Perry'],
    ['Teenage Dream', 'Katy Perry'],
    ['California Gurls', 'Katy Perry'],
    ['Last Friday Night (T.G.I.F.)', 'Katy Perry'],
    ['Dark Horse', 'Katy Perry'],
    ['Wide Awake', 'Katy Perry'],
    ['Part of Me', 'Katy Perry'],

    ['Just the Way You Are', 'Bruno Mars'],
    ['Grenade', 'Bruno Mars'],
    ['Locked Out of Heaven', 'Bruno Mars'],
    ['When I Was Your Man', 'Bruno Mars'],
    ['Treasure', 'Bruno Mars'],
    ['24K Magic', 'Bruno Mars'],
    ['That\'s What I Like', 'Bruno Mars'],
    ['Uptown Funk', 'Mark Ronson'],

    ['Shake It Off', 'Taylor Swift'],
    ['Blank Space', 'Taylor Swift'],
    ['Style', 'Taylor Swift'],
    ['Bad Blood', 'Taylor Swift'],
    ['Wildest Dreams', 'Taylor Swift'],
    ['Look What You Made Me Do', 'Taylor Swift'],
    ['Delicate', 'Taylor Swift'],
    ['We Are Never Ever Getting Back Together', 'Taylor Swift'],

    ['Call Me Maybe', 'Carly Rae Jepsen'],
    ['I Really Like You', 'Carly Rae Jepsen'],
    ['Run Away with Me', 'Carly Rae Jepsen'],

    ['What Makes You Beautiful', 'One Direction'],
    ['Live While We\'re Young', 'One Direction'],
    ['Story of My Life', 'One Direction'],
    ['Best Song Ever', 'One Direction'],
    ['Steal My Girl', 'One Direction'],
    ['Drag Me Down', 'One Direction'],

    ['Pillowtalk', 'Zayn'],
    ['Sign of the Times', 'Harry Styles'],

    ['Born This Way', 'Lady Gaga'],
    ['The Edge of Glory', 'Lady Gaga'],
    ['Applause', 'Lady Gaga'],
    ['Alejandro', 'Lady Gaga'],
    ['Million Reasons', 'Lady Gaga'],

    ['Diamonds', 'Rihanna'],
    ['Only Girl (In the World)', 'Rihanna'],
    ['What\'s My Name?', 'Rihanna'],
    ['We Found Love', 'Rihanna'],
    ['Where Have You Been', 'Rihanna'],
    ['Stay', 'Rihanna'],
    ['Work', 'Rihanna'],
    ['S&M', 'Rihanna'],

    ['Love the Way You Lie', 'Eminem'],
    ['Not Afraid', 'Eminem'],
    ['The Monster', 'Eminem'],
    ['Rap God', 'Eminem'],

    ['Blurred Lines', 'Robin Thicke'],
    ['Happy', 'Pharrell Williams'],

    ['Get Lucky', 'Daft Punk'],
    ['Instant Crush', 'Daft Punk'],
    ['Lose Yourself to Dance', 'Daft Punk'],

    ['Wake Me Up', 'Avicii'],
    ['Hey Brother', 'Avicii'],
    ['The Nights', 'Avicii'],
    ['Waiting for Love', 'Avicii'],
    ['Levels', 'Avicii'],

    ['Titanium', 'David Guetta'],
    ['Without You', 'David Guetta'],
    ['Turn Me On', 'David Guetta'],
    ['Play Hard', 'David Guetta'],
    ['Lovers on the Sun', 'David Guetta'],

    ['Rather Be', 'Clean Bandit'],
    ['Real Love', 'Clean Bandit'],
    ['Rockabye', 'Clean Bandit'],
    ['Symphony', 'Clean Bandit'],
    ['Solo', 'Clean Bandit'],

    ['Latch', 'Disclosure'],
    ['White Noise', 'Disclosure'],
    ['You & Me', 'Disclosure'],
    ['Omen', 'Disclosure'],
    ['Holding On', 'Disclosure'],

    ['King', 'Years & Years'],
    ['Shine', 'Years & Years'],
    ['Eyes Shut', 'Years & Years'],
    ['Desire', 'Years & Years'],
    ['Take Shelter', 'Years & Years'],

    ['Pompeii', 'Bastille']
];

const artists = [
    ...new Set(
        songs.map(song => song[1])
    )
];

function makeAnswers(correctArtist, index) {
    const wrongArtists =
        artists.filter(
            artist =>
                artist !== correctArtist
        );

    const wrong1 =
        wrongArtists[
            index %
            wrongArtists.length
        ];

    const wrong2 =
        wrongArtists[
            (index + 11) %
            wrongArtists.length
        ];

    const wrong3 =
        wrongArtists[
            (index + 23) %
            wrongArtists.length
        ];

    const answers = [
        correctArtist,
        wrong1,
        wrong2,
        wrong3
    ];

    const rotation =
        index % 4;

    return [
        ...answers.slice(rotation),
        ...answers.slice(0, rotation)
    ];
}

const questions =
    songs.map(
        ([title, artist], index) => ({
            id:
                'music_' +
                String(
                    9667 + index
                ).padStart(4, '0'),

            category: 'Music',

            question:
                `Which artist recorded '${title}'?`,

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
                '2010s',
                'songs'
            ],

            dailyEligible: true
        })
    );

module.exports = questions;
