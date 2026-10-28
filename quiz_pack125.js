// quiz_pack125.js
// PuzzlePilot Big Quiz
// Music Pack 125
// 2010s songs; 100 questions, IDs music_10567 - music_10666
// Expanded performer, region, genre, collaboration and specialist tags

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

    ['Devotion', 'Jessie Ware'],
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

// Shared artist metadata is applied to each generated question.
// It allows specialist quizzes without repeating the same tags 100 times.
const artistTags = {
    'Laura Mvula': ['Laura Mvula', 'UK music', 'neo soul', 'art pop', 'soul', 'singer-songwriters'],
    'Michael Kiwanuka': ['Michael Kiwanuka', 'UK music', 'soul', 'psychedelic soul', 'singer-songwriters'],
    'Alabama Shakes': ['Alabama Shakes', 'US music', 'blues rock', 'soul', 'rock bands'],
    'James Blake': ['James Blake', 'UK music', 'electronic music', 'alternative R&B', 'singer-songwriters'],
    'London Grammar': ['London Grammar', 'UK music', 'indie pop', 'dream pop', 'electronic music', 'bands'],
    'Jessie Ware': ['Jessie Ware', 'UK music', 'soul', 'electropop', 'R&B', 'singer-songwriters'],
    'Sam Smith': ['Sam Smith', 'UK music', 'soul pop', 'pop', 'singer-songwriters'],
    'Union J': ['Union J', 'UK music', 'pop', 'boy bands', 'The X Factor'],
    'The Saturdays': ['The Saturdays', 'UK music', 'Irish music', 'pop', 'dance-pop', 'girl groups'],
    'Labrinth': ['Labrinth', 'UK music', 'pop', 'R&B', 'hip hop', 'singer-songwriters'],
    'James Arthur': ['James Arthur', 'UK music', 'pop rock', 'soul pop', 'The X Factor', 'talent show winners'],
    'Birdy': ['Birdy', 'UK music', 'indie folk', 'pop', 'singer-songwriters'],
    'Gabrielle Aplin': ['Gabrielle Aplin', 'UK music', 'folk pop', 'indie folk', 'singer-songwriters'],
    'Chris Brown': ['Chris Brown', 'US music', 'R&B', 'dance-pop', 'pop'],
    'Usher': ['Usher', 'US music', 'R&B', 'soul', 'dance-pop'],
    'Miguel': ['Miguel', 'US music', 'alternative R&B', 'R&B', 'soul'],
    'Frank Ocean': ['Frank Ocean', 'US music', 'alternative R&B', 'soul', 'singer-songwriters'],
    'Childish Gambino': ['Childish Gambino', 'US music', 'hip hop', 'funk', 'R&B', 'rappers'],
    'Azealia Banks': ['Azealia Banks', 'US music', 'hip house', 'hip hop', 'female rappers'],
    'Iggy Azalea': ['Iggy Azalea', 'Australian music', 'hip hop', 'pop rap', 'female rappers'],
    'Drake': ['Drake', 'Canadian music', 'hip hop', 'R&B', 'rappers'],
    'The Weeknd': ['The Weeknd', 'Canadian music', 'alternative R&B', 'R&B', 'pop'],
    'Bryson Tiller': ['Bryson Tiller', 'US music', 'trap soul', 'R&B', 'singer-songwriters'],
    'H.E.R.': ['H.E.R.', 'US music', 'contemporary R&B', 'soul', 'singer-songwriters'],
    'Dave': ['Dave', 'UK music', 'UK rap', 'UK hip hop', 'rappers'],
    'Stormzy': ['Stormzy', 'UK music', 'grime', 'UK hip hop', 'rappers'],
    'Wiz Khalifa': ['Wiz Khalifa', 'US music', 'hip hop', 'rap', 'rappers'],
    'Gym Class Heroes': ['Gym Class Heroes', 'US music', 'alternative hip hop', 'pop rap', 'bands'],
    'Fun.': ['Fun.', 'US music', 'indie pop', 'pop rock', 'bands'],
    'Walk the Moon': ['Walk the Moon', 'US music', 'indie pop', 'synthpop', 'pop rock'],
    'American Authors': ['American Authors', 'US music', 'indie rock', 'folk pop', 'rock bands'],
    'X Ambassadors': ['X Ambassadors', 'US music', 'alternative rock', 'pop rock', 'rock bands'],
    'Of Monsters and Men': ['Of Monsters and Men', 'Icelandic music', 'indie folk', 'folk rock', 'bands'],
    'Foals': ['Foals', 'UK music', 'indie rock', 'alternative rock', 'rock bands'],
    'Arctic Monkeys': ['Arctic Monkeys', 'UK music', 'indie rock', 'alternative rock', 'rock bands'],
    'Royal Blood': ['Royal Blood', 'UK music', 'hard rock', 'garage rock', 'rock duos'],
    'Catfish and the Bottlemen': ['Catfish and the Bottlemen', 'Welsh music', 'UK music', 'indie rock', 'rock bands'],
    'The Vaccines': ['The Vaccines', 'UK music', 'indie rock', 'garage rock', 'rock bands'],
    'alt-J': ['alt-J', 'UK music', 'indie rock', 'art rock', 'alternative rock'],
    'Fall Out Boy': ['Fall Out Boy', 'US music', 'pop punk', 'alternative rock', 'rock bands']
};

// Track-specific tags add collaborations, cover versions and related
// subjects without altering the original answers or distractors.
const recordingTags = {
    'Laura Mvula|Overcome': ['Nile Rodgers', 'featured artists', 'collaborations', 'guitarists'],
    'Michael Kiwanuka|Money': ['Tom Misch', 'collaborations', 'duets', '2019 singles'],
    'James Blake|Limit to Your Love': ['Feist', 'cover versions', 'original artists'],
    'London Grammar|Nightcall': ['Kavinsky', 'cover versions', 'original artists'],
    'Labrinth|Beneath Your Beautiful': ['Emeli Sandé', 'featured artists', 'collaborations'],
    'Birdy|Not About Angels': ['film soundtracks', 'The Fault in Our Stars'],
    'Chris Brown|Loyal': ['Lil Wayne', 'Tyga', 'featured artists', 'collaborations'],
    'Miguel|Sky Walker': ['Travis Scott', 'featured artists', 'collaborations'],
    'Azealia Banks|212': ['Lazy Jay', 'featured artists', 'collaborations'],
    'Iggy Azalea|Change Your Life': ['T.I.', 'featured artists', 'collaborations'],
    'Iggy Azalea|Trouble': ['Jennifer Hudson', 'featured artists', 'collaborations'],
    'Drake|Crew Love': ['The Weeknd', 'featured artists', 'collaborations'],
    'Drake|Take Care': ['Rihanna', 'featured artists', 'collaborations'],
    'Gym Class Heroes|Stereo Hearts': ['Adam Levine', 'Maroon 5', 'featured artists', 'collaborations'],
    'Gym Class Heroes|Ass Back Home': ['Neon Hitch', 'featured artists', 'collaborations']
};

// Only the miscredited Jessie Ware track is replaced: the verified
// album Devotion provides a different type of music question.
// Joint recordings and covers are worded so there is one clear answer.
const questionCorrections = {
    2: "Which British singer released 'Overcome' featuring Nile Rodgers?",
    4: "Which British singer teamed up with Tom Misch on 'Money'?",
    13: "Which British singer and producer covered Feist's 'Limit to Your Love'?",
    16: "Which British group recorded a cover of Kavinsky's 'Nightcall'?",
    18: "Which British singer released the debut album Devotion, featuring 'Wildest Moments'?",
    30: "Which British singer recorded 'Beneath Your Beautiful' with Emeli Sandé?",
    42: "Which American R&B singer recorded 'Loyal' featuring Lil Wayne and Tyga?",
    48: "Which American R&B singer released 'Sky Walker' featuring Travis Scott?",
    57: "Which American rapper released '212' featuring Lazy Jay?",
    60: "Which Australian rapper recorded 'Change Your Life' featuring T.I.?",
    61: "Which Australian rapper recorded 'Trouble' featuring Jennifer Hudson?",
    62: "Which Canadian rapper recorded 'Crew Love' featuring The Weeknd?",
    63: "Which Canadian rapper recorded 'Take Care' featuring Rihanna?",
    82: "Which American group recorded 'Stereo Hearts' featuring Adam Levine?",
    83: "Which American group released 'Ass Back Home' featuring Neon Hitch?"
};

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

function makeTags(title, artist) {
    // The Jessie Ware replacement tests her album, not a song.
    if (artist === 'Jessie Ware' && title === 'Devotion') {
        return [
            '2010s',
            'albums',
            'album identification',
            'debut albums',
            '2012 albums',
            'Devotion',
            ...artistTags[artist]
        ];
    }

    return [...new Set([
        '2010s',
        'songs',
        'artist identification',
        'recordings',
        ...artistTags[artist],
        ...(recordingTags[`${artist}|${title}`] || [])
    ])];
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
                questionCorrections[index] || `Which artist recorded '${title}'?`,

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

            tags: makeTags(title, artist),

            dailyEligible: true
        })
    );

module.exports = questions;
