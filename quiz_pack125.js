// quiz_pack125.js
// PuzzlePilot Big Quiz
// Music Pack 125
// 2010s songs

const songs = [
    ['Green Garden', 'Laura Mvula'],
    ['That\'s Alright', 'Laura Mvula'],
    ['Overcome', 'Laura Mvula'],
    ['Phenomenal Woman', 'Laura Mvula'],

    ['Money', 'Michael Kiwanuka'],
    ['Cold Little Heart', 'Michael Kiwanuka'],
    ['Black Man in a White World', 'Michael Kiwanuka'],
    ['You Ain\'t the Problem', 'Michael Kiwanuka'],

    ['Hold On', 'Alabama Shakes'],
    ['Don\'t Wanna Fight', 'Alabama Shakes'],
    ['Sound & Color', 'Alabama Shakes'],

    ['Retrograde', 'James Blake'],
    ['Life Round Here', 'James Blake'],
    ['Limit to Your Love', 'James Blake'],

    ['Strong', 'London Grammar'],
    ['Wasting My Young Years', 'London Grammar'],
    ['Nightcall', 'London Grammar'],
    ['Big Picture', 'London Grammar'],

    ['Rather Be', 'Jessie Ware'],
    ['Wildest Moments', 'Jessie Ware'],
    ['Say You Love Me', 'Jessie Ware'],
    ['You & I (Forever)', 'Jessie Ware'],

    ['Like I Can', 'Sam Smith'],
    ['Restart', 'Sam Smith'],
    ['Burning', 'Sam Smith'],

    ['Carry You', 'Union J'],
    ['Beautiful Life', 'Union J'],
    ['Tonight (We Live Forever)', 'Union J'],
    ['You Got It All', 'Union J'],

    ['Not Giving Up', 'The Saturdays'],

    ['Beneath Your Beautiful', 'Labrinth'],
    ['Express Yourself', 'Labrinth'],

    ['Recovery', 'James Arthur'],
    ['Get Down', 'James Arthur'],
    ['Safe Inside', 'James Arthur'],

    ['No Angel', 'Birdy'],
    ['Words as Weapons', 'Birdy'],
    ['Not About Angels', 'Birdy'],

    ['Home', 'Gabrielle Aplin'],

    ['Turn Up the Music', 'Chris Brown'],
    ['Don\'t Wake Me Up', 'Chris Brown'],
    ['Fine China', 'Chris Brown'],
    ['Loyal', 'Chris Brown'],

    ['Climax', 'Usher'],
    ['Scream', 'Usher'],
    ['Good Kisser', 'Usher'],

    ['Adorn', 'Miguel'],
    ['Coffee', 'Miguel'],
    ['Sky Walker', 'Miguel'],

    ['Thinkin Bout You', 'Frank Ocean'],
    ['Lost', 'Frank Ocean'],
    ['Sweet Life', 'Frank Ocean'],
    ['Pink + White', 'Frank Ocean'],

    ['Redbone', 'Childish Gambino'],
    ['3005', 'Childish Gambino'],
    ['Sober', 'Childish Gambino'],
    ['Bonfire', 'Childish Gambino'],

    ['212', 'Azealia Banks'],
    ['Chasing Time', 'Azealia Banks'],

    ['Work', 'Iggy Azalea'],
    ['Change Your Life', 'Iggy Azalea'],
    ['Trouble', 'Iggy Azalea'],

    ['Crew Love', 'Drake'],
    ['Take Care', 'Drake'],
    ['Marvins Room', 'Drake'],
    ['Worst Behavior', 'Drake'],
    ['Energy', 'Drake'],
    ['Controlla', 'Drake'],

    ['Often', 'The Weeknd'],
    ['In the Night', 'The Weeknd'],
    ['Secrets', 'The Weeknd'],
    ['Party Monster', 'The Weeknd'],
    ['Reminder', 'The Weeknd'],

    ['Exchange', 'Bryson Tiller'],
    ['Don\'t', 'Bryson Tiller'],
    ['Run Me Dry', 'Bryson Tiller'],

    ['Focus', 'H.E.R.'],
    ['Hard Place', 'H.E.R.'],

    ['Black', 'Dave'],

    ['Know Me From', 'Stormzy'],
    ['Cold', 'Stormzy'],

    ['We Dem Boyz', 'Wiz Khalifa'],

    ['Stereo Hearts', 'Gym Class Heroes'],
    ['Ass Back Home', 'Gym Class Heroes'],

    ['Some Nights', 'Fun.'],
    ['Carry On', 'Fun.'],

    ['Anna Sun', 'Walk the Moon'],

    ['Go Big or Go Home', 'American Authors'],

    ['Renegades', 'X Ambassadors'],
    ['Unsteady', 'X Ambassadors'],

    ['Dirty Paws', 'Of Monsters and Men'],

    ['In Degrees', 'Foals'],

    ['One for the Road', 'Arctic Monkeys'],
    ['Fireside', 'Arctic Monkeys'],

    ['Ten Tonne Skeleton', 'Royal Blood'],
    ['How Did We Get So Dark?', 'Royal Blood'],

    ['Outside', 'Catfish and the Bottlemen'],

    ['I Always Knew', 'The Vaccines'],

    ['Hunger of the Pine', 'alt-J'],

    ['The Phoenix', 'Fall Out Boy']
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
                    10567 + index
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
