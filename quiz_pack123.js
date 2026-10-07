// quiz_pack123.js
// PuzzlePilot Big Quiz
// Music Pack 123
// 2010s songs

const songs = [
    ['Let Me Go', 'Gary Barlow'],
    ['Since I Saw You Last', 'Gary Barlow'],

    ['Brokenhearted', 'Lawson'],
    ['Taking Over Me', 'Lawson'],
    ['Standing in the Dark', 'Lawson'],
    ['Learn to Love Again', 'Lawson'],

    ['Glad You Came', 'The Wanted'],
    ['Chasing the Sun', 'The Wanted'],
    ['Walks Like Rihanna', 'The Wanted'],
    ['I Found You', 'The Wanted'],
    ['All Time Low', 'The Wanted'],
    ['Gold Forever', 'The Wanted'],

    ['Higher', 'The Saturdays'],
    ['Notorious', 'The Saturdays'],
    ['All Fired Up', 'The Saturdays'],
    ['What About Us', 'The Saturdays'],

    ['Love Me', 'Stooshe'],
    ['Waterfalls', 'Stooshe'],

    ['Skinny Genes', 'Eliza Doolittle'],
    ['Big When I Was Little', 'Eliza Doolittle'],

    ['Next to Me', 'Emeli Sande'],
    ['Clown', 'Emeli Sande'],
    ['Heaven', 'Emeli Sande'],
    ['My Kind of Love', 'Emeli Sande'],
    ['Read All About It, Pt. III', 'Emeli Sande'],

    ['Let Go for Tonight', 'Foxes'],
    ['Youth', 'Foxes'],
    ['Body Talk', 'Foxes'],
    ['Better Love', 'Foxes'],

    ['Picking Up the Pieces', 'Paloma Faith'],
    ['Never Tear Us Apart', 'Paloma Faith'],
    ['Only Love Can Hurt Like This', 'Paloma Faith'],
    ['Can\'t Rely on You', 'Paloma Faith'],
    ['Crybaby', 'Paloma Faith'],

    ['Wild', 'Jessie J'],
    ['It\'s My Party', 'Jessie J'],
    ['Masterpiece', 'Jessie J'],

    ['Start Without You', 'Alexandra Burke'],
    ['Elephant', 'Alexandra Burke'],
    ['Let It Go', 'Alexandra Burke'],

    ['Kiss Me', 'Olly Murs'],
    ['You Don\'t Know Love', 'Olly Murs'],
    ['Please Don\'t Let Me Go', 'Olly Murs'],
    ['Thinking of Me', 'Olly Murs'],

    ['Shine a Light', 'McFly'],
    ['Love Is Easy', 'McFly'],

    ['Kiss You', 'One Direction'],
    ['Perfect', 'One Direction'],
    ['History', 'One Direction'],

    ['Like I Would', 'Zayn'],
    ['Dusk Till Dawn', 'Zayn'],

    ['Kiwi', 'Harry Styles'],
    ['Lights Up', 'Harry Styles'],

    ['Slow Hands', 'Niall Horan'],
    ['This Town', 'Niall Horan'],
    ['Too Much to Ask', 'Niall Horan'],

    ['Strip That Down', 'Liam Payne'],
    ['Bedroom Floor', 'Liam Payne'],

    ['Just Hold On', 'Louis Tomlinson'],
    ['Back to You', 'Louis Tomlinson'],
    ['Miss You', 'Louis Tomlinson'],

    ['Want You Back', '5 Seconds of Summer'],
    ['She Looks So Perfect', '5 Seconds of Summer'],
    ['Don\'t Stop', '5 Seconds of Summer'],
    ['Amnesia', '5 Seconds of Summer'],
    ['Youngblood', '5 Seconds of Summer'],
    ['Teeth', '5 Seconds of Summer'],

    ['Coming Home', 'Sheppard'],
    ['Lay You Down Easy', 'Magic!'],

    ['Different Colors', 'Walk the Moon'],
    ['One Foot', 'Walk the Moon'],

    ['Bright', 'Echosmith'],

    ['Best Day of My Life', 'American Authors'],
    ['Believer', 'American Authors'],

    ['Home', 'Phillip Phillips'],
    ['Raging Fire', 'Phillip Phillips'],

    ['Better Place', 'Rachel Platten'],
    ['Shame', 'Elle King'],

    ['Love Myself', 'Hailee Steinfeld'],
    ['Starving', 'Hailee Steinfeld'],
    ['Most Girls', 'Hailee Steinfeld'],

    ['Uh Huh', 'Julia Michaels'],
    ['Growing Pains', 'Alessia Cara'],

    ['Hide Away', 'Daya'],
    ['Sit Still, Look Pretty', 'Daya'],

    ['Colors', 'Halsey'],
    ['Tell Me You Love Me', 'Demi Lovato'],
    ['Younger Now', 'Miley Cyrus'],

    ['Jealous', 'Nick Jonas'],
    ['Chains', 'Nick Jonas'],
    ['Close', 'Nick Jonas'],

    ['Kissing Strangers', 'DNCE'],
    ['Thank You', 'MKTO'],
    ['Swalla', 'Jason Derulo'],

    ['Sweet but Psycho', 'Ava Max'],
    ['So Am I', 'Ava Max'],
    ['Torn', 'Ava Max'],

    ['Don\'t Call Me Up', 'Mabel'],
    ['Mad Love', 'Mabel'],
    ['Finders Keepers', 'Mabel']
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
                    10367 + index
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
