// quiz_pack124.js
// PuzzlePilot Big Quiz
// Music Pack 124
// 2010s songs

const songs = [
    ['Did You Hear the Rain?', 'George Ezra'],
    ['Bang That', 'Disclosure'],

    ['Be Alright', 'Dean Lewis'],
    ['Waves', 'Dean Lewis'],

    ['Power Over Me', 'Dermot Kennedy'],
    ['Outnumbered', 'Dermot Kennedy'],

    ['Leave a Light On', 'Tom Walker'],
    ['Just You and I', 'Tom Walker'],

    ['Lost Without You', 'Freya Ridings'],
    ['Castles', 'Freya Ridings'],

    ['Dancing with Your Ghost', 'Sasha Alex Sloan'],

    ['2002', 'Anne-Marie'],
    ['Ciao Adios', 'Anne-Marie'],
    ['Alarm', 'Anne-Marie'],
    ['Perfect to Me', 'Anne-Marie'],

    ['Anywhere', 'Rita Ora'],
    ['Your Song', 'Rita Ora'],
    ['Let You Love Me', 'Rita Ora'],
    ['How We Do (Party)', 'Rita Ora'],

    ['New Man', 'Ed Sheeran'],
    ['Dive', 'Ed Sheeran'],
    ['Happier', 'Ed Sheeran'],
    ['Supermarket Flowers', 'Ed Sheeran'],
    ['What Do I Know?', 'Ed Sheeran'],
    ['Bloodstream', 'Ed Sheeran'],
    ['One', 'Ed Sheeran'],

    ['Million Years Ago', 'Adele'],
    ['Water Under the Bridge', 'Adele'],
    ['All I Ask', 'Adele'],
    ['Remedy', 'Adele'],

    ['End Game', 'Taylor Swift'],
    ['Gorgeous', 'Taylor Swift'],
    ['Getaway Car', 'Taylor Swift'],
    ['Call It What You Want', 'Taylor Swift'],
    ['I Did Something Bad', 'Taylor Swift'],
    ['Out of the Woods', 'Taylor Swift'],
    ['New Romantics', 'Taylor Swift'],

    ['Consequences', 'Camila Cabello'],
    ['Real Friends', 'Camila Cabello'],

    ['Love Lies', 'Khalid'],
    ['Saturday Nights', 'Khalid'],
    ['Saved', 'Khalid'],

    ['Youth', 'Shawn Mendes'],
    ['Mercy', 'Shawn Mendes'],
    ['Lost in Japan', 'Shawn Mendes'],
    ['Nervous', 'Shawn Mendes'],

    ['Sorry', 'Beyonce'],
    ['Pretty Hurts', 'Beyonce'],
    ['Partition', 'Beyonce'],
    ['Flawless', 'Beyonce'],

    ['Needed Me', 'Rihanna'],
    ['Kiss It Better', 'Rihanna'],
    ['Love on the Brain', 'Rihanna'],

    ['Love Me Harder', 'Ariana Grande'],
    ['Dangerous Woman', 'Ariana Grande'],
    ['God Is a Woman', 'Ariana Grande'],
    ['Breathin', 'Ariana Grande'],
    ['Focus', 'Ariana Grande'],

    ['Neon Lights', 'Demi Lovato'],
    ['Really Don\'t Care', 'Demi Lovato'],
    ['Stone Cold', 'Demi Lovato'],

    ['Can\'t Be Tamed', 'Miley Cyrus'],
    ['Mother\'s Daughter', 'Miley Cyrus'],

    ['Castle', 'Halsey'],
    ['Now or Never', 'Halsey'],
    ['Alone', 'Halsey'],
    ['Nightmare', 'Halsey'],

    ['My My My', 'Troye Sivan'],
    ['Youth', 'Troye Sivan'],
    ['Bloom', 'Troye Sivan'],
    ['Dance to This', 'Troye Sivan'],

    ['Cool', 'Jonas Brothers'],
    ['Only Human', 'Jonas Brothers'],
    ['Sucker', 'Jonas Brothers'],

    ['Body Moves', 'DNCE'],
    ['American Dream', 'MKTO'],

    ['Good as Hell', 'Lizzo'],
    ['Truth Hurts', 'Lizzo'],
    ['Juice', 'Lizzo'],
    ['Tempo', 'Lizzo'],

    ['Sweet Creature', 'Harry Styles'],
    ['Woman', 'Harry Styles'],
    ['Two Ghosts', 'Harry Styles'],

    ['On the Loose', 'Niall Horan'],
    ['Nice to Meet Ya', 'Niall Horan'],

    ['Familiar', 'Liam Payne'],
    ['Stack It Up', 'Liam Payne'],

    ['Two of Us', 'Louis Tomlinson'],
    ['Kill My Mind', 'Louis Tomlinson'],
    ['We Made It', 'Louis Tomlinson'],

    ['Good Years', 'Zayn'],
    ['Entertainer', 'Zayn'],
    ['Sour Diesel', 'Zayn'],

    ['Think About Us', 'Little Mix'],
    ['Bounce Back', 'Little Mix'],
    ['Salute', 'Little Mix'],
    ['Hair', 'Little Mix'],

    ['Disco Love', 'The Saturdays'],
    ['Gentleman', 'The Saturdays'],
    ['30 Days', 'The Saturdays']
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
                    10467 + index
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
