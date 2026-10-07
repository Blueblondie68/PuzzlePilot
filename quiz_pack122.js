// quiz_pack122.js
// PuzzlePilot Big Quiz
// Music Pack 122
// 2010s songs

const songs = [
    ['Cassy O', 'George Ezra'],
    ['Listen to the Man', 'George Ezra'],
    ['Barcelona', 'George Ezra'],
    ['Pretty Shining People', 'George Ezra'],

    ['Scars', 'James Bay'],
    ['Running', 'James Bay'],
    ['Wild Love', 'James Bay'],
    ['Pink Lemonade', 'James Bay'],

    ['Love Me Again', 'John Newman'],
    ['Cheating', 'John Newman'],
    ['Come and Get It', 'John Newman'],
    ['Fire in Me', 'John Newman'],

    ['I Could Be the One', 'Avicii'],
    ['Lay Me Down', 'Avicii'],
    ['Lonely Together', 'Avicii'],

    ['Jubel', 'Klingande'],
    ['Changes', 'Faul & Wad Ad'],

    ['Extraordinary', 'Clean Bandit'],

    ['F for You', 'Disclosure'],
    ['Magnets', 'Disclosure'],

    ['Ready for Your Love', 'Gorgon City'],
    ['Here for You', 'Gorgon City'],
    ['Go All Night', 'Gorgon City'],
    ['Imagination', 'Gorgon City'],

    ['My Love', 'Route 94'],

    ['I Got U', 'Duke Dumont'],
    ['Need U (100%)', 'Duke Dumont'],
    ['Won\'t Look Back', 'Duke Dumont'],
    ['Ocean Drive', 'Duke Dumont'],

    ['Sanctify', 'Years & Years'],
    ['If You\'re Over Me', 'Years & Years'],

    ['No Enemiesz', 'Kiesza'],
    ['Sound of a Woman', 'Kiesza'],

    ['Powerless', 'Rudimental'],
    ['I\'ll Be There', 'Jess Glynne'],

    ['Inhaler', 'Foals'],
    ['Late Night', 'Foals'],
    ['Birch Tree', 'Foals'],

    ['Soundcheck', 'Catfish and the Bottlemen'],
    ['Twice', 'Catfish and the Bottlemen'],
    ['Longshot', 'Catfish and the Bottlemen'],

    ['Figure It Out', 'Royal Blood'],
    ['Out of the Black', 'Royal Blood'],
    ['Little Monster', 'Royal Blood'],
    ['Lights Out', 'Royal Blood'],
    ['I Only Lie When I Love You', 'Royal Blood'],

    ['Runaways', 'The Killers'],
    ['Miss Atomic Bomb', 'The Killers'],
    ['The Man', 'The Killers'],

    ['Natural', 'Imagine Dragons'],

    ['Right Action', 'Franz Ferdinand'],
    ['Love Illumination', 'Franz Ferdinand'],
    ['Always Ascending', 'Franz Ferdinand'],

    ['Something Good Can Work', 'Two Door Cinema Club'],
    ['Undercover Martyn', 'Two Door Cinema Club'],
    ['What You Know', 'Two Door Cinema Club'],
    ['Sleep Alone', 'Two Door Cinema Club'],
    ['Changing of the Seasons', 'Two Door Cinema Club'],
    ['Are We Ready? (Wreck)', 'Two Door Cinema Club'],

    ['Coming of Age', 'Foster the People'],
    ['Sit Next to Me', 'Foster the People'],

    ['King and Lionheart', 'Of Monsters and Men'],
    ['Crystals', 'Of Monsters and Men'],

    ['Ophelia', 'The Lumineers'],
    ['Cleopatra', 'The Lumineers'],
    ['Angela', 'The Lumineers'],

    ['Yellow Flicker Beat', 'Lorde'],

    ['Georgia', 'Vance Joy'],
    ['Lay It on Me', 'Vance Joy'],

    ['Carried Away', 'Passion Pit'],
    ['Lifted Up (1985)', 'Passion Pit'],

    ['Kangaroo Court', 'Capital Cities'],
    ['Welcome to Your Life', 'Grouplove'],
    ['Daddy Issues', 'The Neighbourhood'],
    ['Told You So', 'Paramore'],

    ['Jumpsuit', 'Twenty One Pilots'],
    ['My Blood', 'Twenty One Pilots'],

    ['It Ain\'t Me', 'Kygo'],
    ['First Time', 'Kygo'],

    ['Greyhound', 'Swedish House Mafia'],
    ['Fade into Darkness', 'Avicii'],

    ['Spectrum (Say My Name)', 'Florence + the Machine'],
    ['Never Let Me Go', 'Florence + the Machine'],
    ['Lover to Lover', 'Florence + the Machine'],

    ['Babel', 'Mumford & Sons'],
    ['Hopeless Wanderer', 'Mumford & Sons'],
    ['Ditmas', 'Mumford & Sons'],

    ['Sweet Nothing', 'Gabrielle Aplin'],
    ['Please Don\'t Say You Love Me', 'Gabrielle Aplin'],
    ['Panic Cord', 'Gabrielle Aplin'],
    ['Salvation', 'Gabrielle Aplin'],

    ['Skinny Love', 'Birdy'],
    ['People Help the People', 'Birdy'],
    ['Wings', 'Birdy'],
    ['Keeping Your Head Up', 'Birdy'],

    ['All About Tonight', 'Pixie Lott'],
    ['Kiss the Stars', 'Pixie Lott'],
    ['Nasty', 'Pixie Lott'],

    ['Black Heart', 'Stooshe'],
    ['Pack Up', 'Eliza Doolittle']
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
                    10267 + index
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
