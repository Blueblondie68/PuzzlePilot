// quiz_pack117.js
// PuzzlePilot Big Quiz
// Music Pack 117
// 2010s songs

const songs = [
    ['Things We Lost in the Fire', 'Bastille'],
    ['Of the Night', 'Bastille'],
    ['Good Grief', 'Bastille'],
    ['Flaws', 'Bastille'],

    ['Radioactive', 'Imagine Dragons'],
    ['Demons', 'Imagine Dragons'],
    ['It\'s Time', 'Imagine Dragons'],
    ['Believer', 'Imagine Dragons'],
    ['Thunder', 'Imagine Dragons'],
    ['Whatever It Takes', 'Imagine Dragons'],
    ['On Top of the World', 'Imagine Dragons'],

    ['Somebody Else', 'The 1975'],
    ['Chocolate', 'The 1975'],
    ['The Sound', 'The 1975'],
    ['Love Me', 'The 1975'],
    ['Sex', 'The 1975'],
    ['Girls', 'The 1975'],
    ['Robbers', 'The 1975'],

    ['Do I Wanna Know?', 'Arctic Monkeys'],
    ['R U Mine?', 'Arctic Monkeys'],
    ['Why\'d You Only Call Me When You\'re High?', 'Arctic Monkeys'],
    ['Arabella', 'Arctic Monkeys'],
    ['Snap Out of It', 'Arctic Monkeys'],
    ['Don\'t Sit Down \'Cause I\'ve Moved Your Chair', 'Arctic Monkeys'],

    ['Pumped Up Kicks', 'Foster the People'],
    ['Houdini', 'Foster the People'],
    ['Helena Beat', 'Foster the People'],

    ['Take a Walk', 'Passion Pit'],

    ['Little Talks', 'Of Monsters and Men'],
    ['Mountain Sound', 'Of Monsters and Men'],

    ['Ho Hey', 'The Lumineers'],
    ['Stubborn Love', 'The Lumineers'],

    ['The Cave', 'Mumford & Sons'],
    ['I Will Wait', 'Mumford & Sons'],
    ['Lover of the Light', 'Mumford & Sons'],
    ['Believe', 'Mumford & Sons'],

    ['Shake It Out', 'Florence + the Machine'],
    ['Spectrum', 'Florence + the Machine'],
    ['Ship to Wreck', 'Florence + the Machine'],
    ['What Kind of Man', 'Florence + the Machine'],
    ['Hunger', 'Florence + the Machine'],

    ['Royals', 'Lorde'],
    ['Team', 'Lorde'],
    ['Green Light', 'Lorde'],
    ['Perfect Places', 'Lorde'],
    ['Tennis Court', 'Lorde'],

    ['New Rules', 'Dua Lipa'],
    ['Be the One', 'Dua Lipa'],
    ['IDGAF', 'Dua Lipa'],
    ['Hotter than Hell', 'Dua Lipa'],
    ['Blow Your Mind (Mwah)', 'Dua Lipa'],

    ['Havana', 'Camila Cabello'],
    ['Never Be the Same', 'Camila Cabello'],

    ['Shallow', 'Lady Gaga'],
    ['Always Remember Us This Way', 'Lady Gaga'],

    ['Bad at Love', 'Halsey'],
    ['Without Me', 'Halsey'],
    ['Graveyard', 'Halsey'],
    ['New Americana', 'Halsey'],

    ['Closer', 'The Chainsmokers'],
    ['Paris', 'The Chainsmokers'],
    ['Something Just Like This', 'The Chainsmokers'],
    ['Roses', 'The Chainsmokers'],
    ['Don\'t Let Me Down', 'The Chainsmokers'],

    ['Counting Stars', 'OneRepublic'],
    ['Love Runs Out', 'OneRepublic'],
    ['I Lived', 'OneRepublic'],
    ['Wherever I Go', 'OneRepublic'],
    ['Feel Again', 'OneRepublic'],

    ['Cool Kids', 'Echosmith'],

    ['Riptide', 'Vance Joy'],
    ['Mess Is Mine', 'Vance Joy'],
    ['Fire and the Flood', 'Vance Joy'],

    ['Blame It on Me', 'George Ezra'],
    ['Paradise', 'George Ezra'],
    ['Shotgun', 'George Ezra'],
    ['Hold My Girl', 'George Ezra'],

    ['Someone New', 'Hozier'],
    ['From Eden', 'Hozier'],
    ['Work Song', 'Hozier'],
    ['Cherry Wine', 'Hozier'],

    ['Human', 'Rag\'n\'Bone Man'],
    ['Skin', 'Rag\'n\'Bone Man'],
    ['Grace', 'Rag\'n\'Bone Man'],

    ['Giant', 'Calvin Harris'],
    ['Summer', 'Calvin Harris'],
    ['Feel So Close', 'Calvin Harris'],
    ['My Way', 'Calvin Harris'],
    ['Feels', 'Calvin Harris'],
    ['Sweet Nothing', 'Calvin Harris'],
    ['How Deep Is Your Love', 'Calvin Harris'],
    ['This Is What You Came For', 'Calvin Harris'],
    ['I Need Your Love', 'Calvin Harris'],
    ['Promises', 'Calvin Harris'],

    ['Stay with Me', 'Sam Smith'],
    ['I\'m Not the Only One', 'Sam Smith'],
    ['Lay Me Down', 'Sam Smith'],
    ['Too Good at Goodbyes', 'Sam Smith'],
    ['Money on My Mind', 'Sam Smith'],
    ['Writing\'s on the Wall', 'Sam Smith']
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
                    9767 + index
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
