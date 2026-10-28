// quiz_pack124.js
// PuzzlePilot Big Quiz
// Music Pack 124
// 2010s songs; 100 questions, IDs music_10467 - music_10566
// Expanded artist, regional, genre and specialist tags

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

// Shared artist tags are expanded into each generated question.
// These are for specialist quizzes and do not change the answers.
const artistTags = {
    'George Ezra': ['George Ezra', 'UK music', 'folk pop', 'blues rock', 'singer-songwriters'],
    'Disclosure': ['Disclosure', 'UK music', 'house music', 'UK garage', 'electronic music', 'duos'],
    'Dean Lewis': ['Dean Lewis', 'Australian music', 'pop rock', 'singer-songwriters'],
    'Dermot Kennedy': ['Dermot Kennedy', 'Irish music', 'folk pop', 'pop', 'singer-songwriters'],
    'Tom Walker': ['Tom Walker', 'Scottish music', 'UK music', 'pop', 'singer-songwriters'],
    'Freya Ridings': ['Freya Ridings', 'UK music', 'pop', 'singer-songwriters', 'female vocalists'],
    'Sasha Alex Sloan': ['Sasha Alex Sloan', 'US music', 'indie pop', 'alternative pop', 'singer-songwriters'],
    'Anne-Marie': ['Anne-Marie', 'UK music', 'pop', 'dance-pop', 'female vocalists'],
    'Rita Ora': ['Rita Ora', 'UK music', 'Kosovo-born artists', 'pop', 'dance-pop', 'female vocalists'],
    'Ed Sheeran': ['Ed Sheeran', 'UK music', 'pop', 'folk pop', 'singer-songwriters'],
    'Adele': ['Adele', 'UK music', 'soul', 'pop', 'singer-songwriters'],
    'Taylor Swift': ['Taylor Swift', 'US music', 'pop', 'synthpop', 'singer-songwriters'],
    'Camila Cabello': ['Camila Cabello', 'US music', 'Cuban-born artists', 'pop', 'Latin pop'],
    'Khalid': ['Khalid', 'US music', 'contemporary R&B', 'pop', 'singer-songwriters'],
    'Shawn Mendes': ['Shawn Mendes', 'Canadian music', 'pop', 'pop rock', 'singer-songwriters'],
    'Beyonce': ['Beyonce', 'US music', 'R&B', 'pop', 'female vocalists'],
    'Rihanna': ['Rihanna', 'Barbadian music', 'Caribbean music', 'R&B', 'pop'],
    'Ariana Grande': ['Ariana Grande', 'US music', 'pop', 'R&B', 'female vocalists'],
    'Demi Lovato': ['Demi Lovato', 'US music', 'pop', 'pop rock', 'singer-songwriters'],
    'Miley Cyrus': ['Miley Cyrus', 'US music', 'pop', 'pop rock', 'singer-songwriters'],
    'Halsey': ['Halsey', 'US music', 'alternative pop', 'electropop', 'singer-songwriters'],
    'Troye Sivan': ['Troye Sivan', 'Australian music', 'South African-born artists', 'electropop', 'synthpop'],
    'Jonas Brothers': ['Jonas Brothers', 'US music', 'pop rock', 'pop', 'boy bands'],
    'DNCE': ['DNCE', 'US music', 'funk pop', 'pop rock', 'bands', 'Joe Jonas'],
    'MKTO': ['MKTO', 'US music', 'pop', 'pop rap', 'duos'],
    'Lizzo': ['Lizzo', 'US music', 'pop', 'hip hop', 'R&B', 'female rappers'],
    'Harry Styles': ['Harry Styles', 'UK music', 'pop rock', 'soft rock', 'One Direction solo careers'],
    'Niall Horan': ['Niall Horan', 'Irish music', 'pop rock', 'folk pop', 'One Direction solo careers'],
    'Liam Payne': ['Liam Payne', 'UK music', 'pop', 'R&B', 'One Direction solo careers'],
    'Louis Tomlinson': ['Louis Tomlinson', 'UK music', 'pop', 'pop rock', 'One Direction solo careers'],
    'Zayn': ['Zayn', 'UK music', 'pop', 'R&B', 'One Direction solo careers'],
    'Little Mix': ['Little Mix', 'UK music', 'pop', 'R&B', 'girl groups', 'The X Factor'],
    'The Saturdays': ['The Saturdays', 'UK music', 'Irish music', 'pop', 'dance-pop', 'girl groups']
};

// Track-specific context: collaborations, guest performers, remixes
// and songwriters. A remix tag does not replace the original recording.
const recordingTags = {
    'Anne-Marie|2002': ['Ed Sheeran', 'Julia Michaels', 'songwriters', 'songwriting credits'],
    'Rita Ora|Your Song': ['Ed Sheeran', 'songwriters', 'songwriting credits'],
    'Taylor Swift|End Game': ['Ed Sheeran', 'Future', 'featured artists', 'collaborations'],
    'Camila Cabello|Real Friends': ['Swae Lee', 'single remixes', 'collaborations'],
    'Khalid|Love Lies': ['Normani', 'collaborations', 'duets', 'film soundtracks', 'Love, Simon'],
    'Shawn Mendes|Youth': ['Khalid', 'featured artists', 'collaborations'],
    'Beyonce|Flawless': ['Chimamanda Ngozi Adichie', 'spoken word samples', 'samples'],
    'Ariana Grande|Love Me Harder': ['The Weeknd', 'collaborations', 'duets'],
    "Demi Lovato|Really Don't Care": ['Cher Lloyd', 'featured artists', 'collaborations'],
    'Halsey|Alone': ['Big Sean', 'Stefflon Don', 'single remixes', 'collaborations'],
    'Troye Sivan|Dance to This': ['Ariana Grande', 'featured artists', 'collaborations'],
    'Lizzo|Tempo': ['Missy Elliott', 'featured artists', 'collaborations'],
    'Liam Payne|Familiar': ['J Balvin', 'collaborations', 'duets'],
    'Liam Payne|Stack It Up': ['A Boogie wit da Hoodie', 'Ed Sheeran', 'featured artists', 'collaborations', 'songwriting credits'],
    'Little Mix|Think About Us': ['Ty Dolla Sign', 'single remixes', 'collaborations'],
    'Little Mix|Hair': ['Sean Paul', 'single remixes', 'collaborations']
};

// Clear up co-credited recordings and the song title ending in '?'.
// All correct answers and the original answer options are retained.
const questionCorrections = {
    0: "Which artist recorded the song 'Did You Hear the Rain?'",
    30: "Which American singer recorded 'End Game' with Ed Sheeran and Future?",
    39: "Which American singer collaborated with Normani on 'Love Lies'?",
    42: "Which Canadian singer recorded 'Youth' with Khalid?",
    53: "Which American singer recorded 'Love Me Harder' with The Weeknd?",
    59: "Which American singer released 'Really Don't Care' featuring Cher Lloyd?",
    70: "Which Australian singer collaborated with Ariana Grande on 'Dance to This'?",
    79: "Which American singer recorded 'Tempo' featuring Missy Elliott?",
    85: "Which former One Direction singer recorded 'Familiar' with J Balvin?",
    86: "Which former One Direction singer released 'Stack It Up' featuring A Boogie wit da Hoodie?"
};

function makeTags(title, artist) {
    return [...new Set([
        '2010s',
        'songs',
        'artist identification',
        'recordings',
        ...artistTags[artist],
        ...(recordingTags[`${artist}|${title}`] || [])
    ])];
}

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
