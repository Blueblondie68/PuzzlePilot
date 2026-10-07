// quiz_pack119.js
// PuzzlePilot Big Quiz
// Music Pack 119
// 2010s songs
// Includes music_10000 milestone: Gangnam Style - PSY

const songs = [
    ['Firestone', 'Kygo'],
    ['Stole the Show', 'Kygo'],

    ['Faded', 'Alan Walker'],
    ['Alone', 'Alan Walker'],
    ['Sing Me to Sleep', 'Alan Walker'],

    ['Cake by the Ocean', 'DNCE'],
    ['Toothbrush', 'DNCE'],

    ['Classic', 'MKTO'],
    ['Safe and Sound', 'Capital Cities'],

    ['Tongue Tied', 'Grouplove'],
    ['Ways to Go', 'Grouplove'],

    ['Sweater Weather', 'The Neighbourhood'],
    ['Afraid', 'The Neighbourhood'],

    ['Ain\'t It Fun', 'Paramore'],
    ['Still Into You', 'Paramore'],
    ['Hard Times', 'Paramore'],
    ['Rose-Colored Boy', 'Paramore'],

    ['Heathens', 'Twenty One Pilots'],
    ['Stressed Out', 'Twenty One Pilots'],
    ['Ride', 'Twenty One Pilots'],
    ['Tear in My Heart', 'Twenty One Pilots'],

    ['Centuries', 'Fall Out Boy'],
    ['My Songs Know What You Did in the Dark', 'Fall Out Boy'],
    ['Uma Thurman', 'Fall Out Boy'],
    ['Irresistible', 'Fall Out Boy'],

    ['Radioactive', 'Kings of Leon'],
    ['Pyro', 'Kings of Leon'],
    ['Supersoaker', 'Kings of Leon'],
    ['Temple', 'Kings of Leon'],
    ['Waste a Moment', 'Kings of Leon'],

    ['Every Teardrop Is a Waterfall', 'Coldplay'],
    ['Paradise', 'Coldplay'],
    ['Charlie Brown', 'Coldplay'],

    // MUSIC QUESTION 10,000
    ['Gangnam Style', 'PSY'],

    ['Magic', 'Coldplay'],
    ['A Sky Full of Stars', 'Coldplay'],
    ['Adventure of a Lifetime', 'Coldplay'],
    ['Hymn for the Weekend', 'Coldplay'],

    ['All the Lovers', 'Kylie Minogue'],
    ['Get Outta My Way', 'Kylie Minogue'],
    ['Better than Today', 'Kylie Minogue'],
    ['Into the Blue', 'Kylie Minogue'],
    ['Dancing', 'Kylie Minogue'],

    ['Black Magic', 'Little Mix'],
    ['Shout Out to My Ex', 'Little Mix'],
    ['Touch', 'Little Mix'],
    ['Power', 'Little Mix'],
    ['Woman Like Me', 'Little Mix'],
    ['Wings', 'Little Mix'],
    ['Move', 'Little Mix'],

    ['Say You Won\'t Let Go', 'James Arthur'],
    ['Impossible', 'James Arthur'],
    ['You\'re Nobody \'Til Somebody Loves You', 'James Arthur'],
    ['Can I Be Him', 'James Arthur'],

    ['Someone You Loved', 'Lewis Capaldi'],
    ['Before You Go', 'Lewis Capaldi'],
    ['Hold Me While You Wait', 'Lewis Capaldi'],
    ['Grace', 'Lewis Capaldi'],

    ['One Dance', 'Drake'],
    ['Blinding Lights', 'The Weeknd'],
    ['Despacito', 'Luis Fonsi'],
    ['Moves Like Jagger', 'Maroon 5'],
    ['Can\'t Stop the Feeling', 'Justin Timberlake'],
    ['See You Again', 'Wiz Khalifa'],
    ['Can\'t Hold Us', 'Macklemore & Ryan Lewis'],
    ['We Are Young', 'Fun.'],
    ['Old Town Road', 'Lil Nas X'],
    ['Starboy', 'The Weeknd'],
    ['The Hills', 'The Weeknd'],
    ['Love Me Like You Do', 'Ellie Goulding'],
    ['Lush Life', 'Zara Larsson'],
    ['Dancing on My Own', 'Calum Scott'],

    ['Dance Monkey', 'Tones and I'],

    ['Bad Guy', 'Billie Eilish'],
    ['Bury a Friend', 'Billie Eilish'],
    ['When the Party\'s Over', 'Billie Eilish'],
    ['Lovely', 'Billie Eilish'],
    ['Ocean Eyes', 'Billie Eilish'],

    ['Alone', 'Marshmello'],
    ['Animals', 'Martin Garrix'],

    ['The Days', 'Avicii'],
    ['Addicted to You', 'Avicii'],
    ['You Make Me', 'Avicii'],
    ['Silhouettes', 'Avicii'],
    ['Broken Arrows', 'Avicii'],
    ['Without You', 'Avicii'],
    ['SOS', 'Avicii'],

    ['On My Mind', 'Ellie Goulding'],
    ['Burn', 'Ellie Goulding'],
    ['Anything Could Happen', 'Ellie Goulding'],
    ['Lights', 'Ellie Goulding'],
    ['Army', 'Ellie Goulding'],
    ['Still Falling for You', 'Ellie Goulding'],
    ['Close to Me', 'Ellie Goulding'],
    ['Figure 8', 'Ellie Goulding'],
    ['How Long Will I Love You', 'Ellie Goulding'],
    ['Your Song', 'Ellie Goulding'],
    ['Goodness Gracious', 'Ellie Goulding'],

    ['Outside', 'Calvin Harris'],
    ['Blame', 'Calvin Harris']
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
                    9967 + index
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
