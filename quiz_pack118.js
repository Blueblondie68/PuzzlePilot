// quiz_pack118.js
// PuzzlePilot Big Quiz
// Music Pack 118
// 2010s songs

const songs = [
    ['Dancing with a Stranger', 'Sam Smith'],

    ['Let It Go', 'James Bay'],
    ['Best Fake Smile', 'James Bay'],
    ['If You Ever Want to Be in Love', 'James Bay'],

    ['Hold My Hand', 'Jess Glynne'],
    ['Don\'t Be So Hard on Yourself', 'Jess Glynne'],
    ['Take Me Home', 'Jess Glynne'],
    ['All I Am', 'Jess Glynne'],
    ['Thursday', 'Jess Glynne'],

    ['Ghost', 'Ella Henderson'],
    ['Glow', 'Ella Henderson'],
    ['Yours', 'Ella Henderson'],
    ['Mirror Man', 'Ella Henderson'],

    ['Waiting All Night', 'Rudimental'],
    ['Feel the Love', 'Rudimental'],
    ['Free', 'Rudimental'],
    ['Lay It All on Me', 'Rudimental'],
    ['Sun Comes Up', 'Rudimental'],
    ['These Days', 'Rudimental'],

    ['Rather Be Alone', 'Shura'],
    ['Touch', 'Shura'],
    ['What\'s It Gonna Be?', 'Shura'],

    ['King', 'Lauren Aquilina'],
    ['Fools', 'Lauren Aquilina'],
    ['Sinners', 'Lauren Aquilina'],

    ['Lost Boy', 'Ruth B'],
    ['Superficial Love', 'Ruth B'],

    ['All About That Bass', 'Meghan Trainor'],
    ['Lips Are Movin', 'Meghan Trainor'],
    ['Dear Future Husband', 'Meghan Trainor'],
    ['No', 'Meghan Trainor'],
    ['Me Too', 'Meghan Trainor'],
    ['Like I\'m Gonna Lose You', 'Meghan Trainor'],

    ['Sorry', 'Justin Bieber'],
    ['Love Yourself', 'Justin Bieber'],
    ['What Do You Mean?', 'Justin Bieber'],
    ['Company', 'Justin Bieber'],
    ['Boyfriend', 'Justin Bieber'],

    ['Stitches', 'Shawn Mendes'],
    ['Treat You Better', 'Shawn Mendes'],
    ['There\'s Nothing Holdin\' Me Back', 'Shawn Mendes'],
    ['In My Blood', 'Shawn Mendes'],
    ['If I Can\'t Have You', 'Shawn Mendes'],

    ['All of Me', 'John Legend'],
    ['Love Me Now', 'John Legend'],

    ['Let Her Go', 'Passenger'],
    ['Holes', 'Passenger'],

    ['7 Years', 'Lukas Graham'],
    ['Love Someone', 'Lukas Graham'],

    ['Cheerleader', 'OMI'],
    ['Shut Up and Dance', 'Walk the Moon'],
    ['Geronimo', 'Sheppard'],
    ['Rude', 'Magic!'],

    ['Somebody That I Used to Know', 'Gotye'],
    ['Eyes Wide Open', 'Gotye'],

    ['Chandelier', 'Sia'],
    ['Elastic Heart', 'Sia'],
    ['Cheap Thrills', 'Sia'],
    ['The Greatest', 'Sia'],
    ['Big Girls Cry', 'Sia'],
    ['Alive', 'Sia'],

    ['Cool for the Summer', 'Demi Lovato'],
    ['Heart Attack', 'Demi Lovato'],
    ['Sorry Not Sorry', 'Demi Lovato'],
    ['Confident', 'Demi Lovato'],
    ['Skyscraper', 'Demi Lovato'],

    ['Wrecking Ball', 'Miley Cyrus'],
    ['We Can\'t Stop', 'Miley Cyrus'],
    ['Malibu', 'Miley Cyrus'],
    ['Adore You', 'Miley Cyrus'],

    ['Problem', 'Ariana Grande'],
    ['Break Free', 'Ariana Grande'],
    ['One Last Time', 'Ariana Grande'],
    ['Into You', 'Ariana Grande'],
    ['Side to Side', 'Ariana Grande'],
    ['No Tears Left to Cry', 'Ariana Grande'],
    ['Thank U, Next', 'Ariana Grande'],
    ['7 Rings', 'Ariana Grande'],
    ['Break Up with Your Girlfriend, I\'m Bored', 'Ariana Grande'],

    ['Starships', 'Nicki Minaj'],
    ['Super Bass', 'Nicki Minaj'],
    ['Anaconda', 'Nicki Minaj'],
    ['Pound the Alarm', 'Nicki Minaj'],

    ['Fancy', 'Iggy Azalea'],
    ['Black Widow', 'Iggy Azalea'],

    ['Prayer in C', 'Lilly Wood and the Prick'],
    ['Waves', 'Mr Probz'],

    ['Pass Out', 'Tinie Tempah'],
    ['Frisky', 'Tinie Tempah'],
    ['Written in the Stars', 'Tinie Tempah'],

    ['Miami 2 Ibiza', 'Swedish House Mafia'],
    ['Don\'t You Worry Child', 'Swedish House Mafia'],
    ['Save the World', 'Swedish House Mafia'],

    ['Clarity', 'Zedd'],
    ['Stay the Night', 'Zedd'],
    ['I Want You to Know', 'Zedd'],
    ['Stay', 'Zedd'],

    ['Lean On', 'Major Lazer'],
    ['Cold Water', 'Major Lazer'],
    ['Light It Up', 'Major Lazer']
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
                    9867 + index
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
