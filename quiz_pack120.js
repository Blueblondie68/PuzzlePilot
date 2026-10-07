// quiz_pack120.js
// PuzzlePilot Big Quiz
// Music Pack 120
// 2010s songs

const songs = [
    ['Panda', 'Desiigner'],

    ['Hotline Bling', 'Drake'],
    ['God\'s Plan', 'Drake'],
    ['Nice for What', 'Drake'],
    ['In My Feelings', 'Drake'],
    ['Started from the Bottom', 'Drake'],
    ['Hold On, We\'re Going Home', 'Drake'],

    ['Earned It', 'The Weeknd'],
    ['I Feel It Coming', 'The Weeknd'],
    ['Call Out My Name', 'The Weeknd'],
    ['Heartless', 'The Weeknd'],

    ['Locked Away', 'R. City'],

    ['Want to Want Me', 'Jason Derulo'],
    ['Talk Dirty', 'Jason Derulo'],
    ['Trumpets', 'Jason Derulo'],
    ['Wiggle', 'Jason Derulo'],
    ['Marry Me', 'Jason Derulo'],

    ['Timber', 'Pitbull'],
    ['Give Me Everything', 'Pitbull'],
    ['Feel This Moment', 'Pitbull'],
    ['Fireball', 'Pitbull'],

    ['Want U Back', 'Cher Lloyd'],
    ['Swagger Jagger', 'Cher Lloyd'],
    ['With Ur Love', 'Cher Lloyd'],

    ['Boom Clap', 'Charli XCX'],
    ['Break the Rules', 'Charli XCX'],
    ['Doing It', 'Charli XCX'],
    ['1999', 'Charli XCX'],

    ['Habits (Stay High)', 'Tove Lo'],
    ['Talking Body', 'Tove Lo'],
    ['Cool Girl', 'Tove Lo'],

    ['Ex\'s & Oh\'s', 'Elle King'],
    ['America\'s Sweetheart', 'Elle King'],

    ['Hideaway', 'Kiesza'],
    ['Giant in My Heart', 'Kiesza'],

    ['Tears', 'Clean Bandit'],
    ['Stronger', 'Clean Bandit'],
    ['I Miss You', 'Clean Bandit'],
    ['Mama', 'Clean Bandit'],

    ['Never Forget You', 'Zara Larsson'],
    ['Ain\'t My Fault', 'Zara Larsson'],
    ['I Would Like', 'Zara Larsson'],
    ['Ruin My Life', 'Zara Larsson'],

    ['Sexual', 'NEIKED'],
    ['I Took a Pill in Ibiza', 'Mike Posner'],

    ['Me, Myself & I', 'G-Eazy'],
    ['Him & I', 'G-Eazy'],
    ['No Limit', 'G-Eazy'],

    ['Location', 'Khalid'],
    ['Young Dumb & Broke', 'Khalid'],
    ['Better', 'Khalid'],
    ['Talk', 'Khalid'],

    ['Issues', 'Julia Michaels'],
    ['Heaven', 'Julia Michaels'],

    ['Scars to Your Beautiful', 'Alessia Cara'],
    ['Here', 'Alessia Cara'],
    ['Wild Things', 'Alessia Cara'],

    ['Fight Song', 'Rachel Platten'],
    ['Stand by You', 'Rachel Platten'],

    ['Try', 'Pink'],
    ['Just Give Me a Reason', 'Pink'],
    ['What About Us', 'Pink'],
    ['Walk Me Home', 'Pink'],
    ['Beautiful Trauma', 'Pink'],
    ['Raise Your Glass', 'Pink'],
    ['Blow Me (One Last Kiss)', 'Pink'],

    ['LaserLight', 'Jessie J'],
    ['Thunder', 'Jessie J'],
    ['Burnin\' Up', 'Jessie J'],

    ['Dance with Me Tonight', 'Olly Murs'],
    ['Troublemaker', 'Olly Murs'],
    ['Dear Darlin\'', 'Olly Murs'],
    ['Wrapped Up', 'Olly Murs'],
    ['Heart Skips a Beat', 'Olly Murs'],
    ['Army of Two', 'Olly Murs'],
    ['Up', 'Olly Murs'],

    ['Need You Now', 'Lady Antebellum'],
    ['Just a Kiss', 'Lady Antebellum'],
    ['Bartender', 'Lady Antebellum'],

    ['Girl Crush', 'Little Big Town'],
    ['Pontoon', 'Little Big Town'],

    ['Cruise', 'Florida Georgia Line'],
    ['H.O.L.Y.', 'Florida Georgia Line'],
    ['Simple', 'Florida Georgia Line'],

    ['Body Like a Back Road', 'Sam Hunt'],
    ['Take Your Time', 'Sam Hunt'],
    ['House Party', 'Sam Hunt'],

    ['Die a Happy Man', 'Thomas Rhett'],
    ['Marry Me', 'Thomas Rhett'],
    ['Life Changes', 'Thomas Rhett'],

    ['Girl on Fire', 'Alicia Keys'],
    ['Brand New Me', 'Alicia Keys'],

    ['Love on Top', 'Beyonce'],
    ['Countdown', 'Beyonce'],
    ['XO', 'Beyonce'],
    ['Drunk in Love', 'Beyonce'],
    ['Formation', 'Beyonce'],
    ['Hold Up', 'Beyonce'],

    ['Motivation', 'Normani']
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
                    10067 + index
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
