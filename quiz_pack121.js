// quiz_pack121.js
// PuzzlePilot Big Quiz
// Music Pack 121
// 2010s songs

const songs = [
    ['Trip', 'Ella Mai'],

    ['Location', 'Dave'],
    ['Funky Friday', 'Dave'],
    ['Streatham', 'Dave'],
    ['Thiago Silva', 'Dave'],

    ['Shutdown', 'Skepta'],
    ['Man', 'Skepta'],
    ['That\'s Not Me', 'Skepta'],

    ['German Whip', 'Meridian Dan'],

    ['Don\'t Waste My Time', 'Krept & Konan'],
    ['Freak of the Week', 'Krept & Konan'],

    ['Did You See', 'J Hus'],
    ['Bouff Daddy', 'J Hus'],
    ['Common Sense', 'J Hus'],

    ['Shut Up', 'Stormzy'],
    ['Big for Your Boots', 'Stormzy'],
    ['Blinded by Your Grace, Pt. 2', 'Stormzy'],
    ['Vossi Bop', 'Stormzy'],
    ['Crown', 'Stormzy'],

    ['Black and Yellow', 'Wiz Khalifa'],
    ['Roll Up', 'Wiz Khalifa'],
    ['Work Hard, Play Hard', 'Wiz Khalifa'],

    ['Thrift Shop', 'Macklemore & Ryan Lewis'],
    ['Same Love', 'Macklemore & Ryan Lewis'],
    ['Downtown', 'Macklemore & Ryan Lewis'],

    ['Airplanes', 'B.o.B'],
    ['Nothin\' on You', 'B.o.B'],
    ['Magic', 'B.o.B'],

    ['Just a Dream', 'Nelly'],
    ['Hey Porsche', 'Nelly'],

    ['Marry You', 'Bruno Mars'],

    ['Rude Boy', 'Rihanna'],

    ['You and I', 'Lady Gaga'],

    ['Kathleen', 'Catfish and the Bottlemen'],
    ['Cocoon', 'Catfish and the Bottlemen'],
    ['Pacifier', 'Catfish and the Bottlemen'],
    ['7', 'Catfish and the Bottlemen'],

    ['If You Wanna', 'The Vaccines'],
    ['Post Break-Up Sex', 'The Vaccines'],
    ['Teenage Icon', 'The Vaccines'],
    ['Handsome', 'The Vaccines'],

    ['Pelican', 'The Maccabees'],
    ['Marks to Prove It', 'The Maccabees'],
    ['Spit It Out', 'The Maccabees'],

    ['Breezeblocks', 'alt-J'],
    ['Tessellate', 'alt-J'],
    ['Left Hand Free', 'alt-J'],
    ['Every Other Freckle', 'alt-J'],

    ['Spanish Sahara', 'Foals'],
    ['My Number', 'Foals'],
    ['Mountain at My Gates', 'Foals'],
    ['What Went Down', 'Foals'],

    ['Shake Me Down', 'Cage the Elephant'],
    ['Come a Little Closer', 'Cage the Elephant'],
    ['Cigarette Daydreams', 'Cage the Elephant'],
    ['Trouble', 'Cage the Elephant'],

    ['Little Black Submarines', 'The Black Keys'],
    ['Gold on the Ceiling', 'The Black Keys'],
    ['Lonely Boy', 'The Black Keys'],
    ['Fever', 'The Black Keys'],

    ['Take a Slice', 'Glass Animals'],
    ['Gooey', 'Glass Animals'],
    ['Youth', 'Glass Animals'],
    ['Pork Soda', 'Glass Animals'],

    ['Your Life Is a Lie', 'MGMT'],
    ['Cool Song No. 2', 'MGMT'],

    ['Love Lost', 'The Temper Trap'],
    ['Fall Together', 'The Temper Trap'],

    ['Changing', 'Sigma'],
    ['Nobody to Love', 'Sigma'],
    ['Glitterball', 'Sigma'],

    ['Easy Love', 'Sigala'],
    ['Sweet Lovin\'', 'Sigala'],
    ['Give Me Your Love', 'Sigala'],
    ['Came Here for Love', 'Sigala'],
    ['Wish You Well', 'Sigala'],
    ['Just Got Paid', 'Sigala'],

    ['Gecko (Overdrive)', 'Oliver Heldens'],
    ['Last All Night (Koala)', 'Oliver Heldens'],

    ['Intoxicated', 'Martin Solveig'],
    ['Places', 'Martin Solveig'],

    ['Perfect Strangers', 'Jonas Blue'],
    ['Mama', 'Jonas Blue'],
    ['Rise', 'Jonas Blue'],
    ['Polaroid', 'Jonas Blue'],
    ['Fast Car', 'Jonas Blue'],
    ['By Your Side', 'Jonas Blue'],

    ['Happier', 'Marshmello'],
    ['Friends', 'Marshmello'],
    ['Silence', 'Marshmello'],

    ['Scared to Be Lonely', 'Martin Garrix'],
    ['There for You', 'Martin Garrix'],
    ['In the Name of Love', 'Martin Garrix'],

    ['This Girl', 'Kungs'],

    ['Are You with Me', 'Lost Frequencies'],
    ['Reality', 'Lost Frequencies'],
    ['Crazy', 'Lost Frequencies'],

    ['Slide', 'Calvin Harris'],
    ['One Kiss', 'Calvin Harris'],
    ['Under Control', 'Calvin Harris']
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
                    10167 + index
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
