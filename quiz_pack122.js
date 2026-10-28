 // quiz_pack122.js
// PuzzlePilot Big Quiz
// Music Pack 122
// Mainly 2010s music, including one 2009 single
// 100 questions; IDs music_10267 - music_10366
// Expanded performer, region, genre, collaboration and specialist tags

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

// Shared artist tags expand into each question at load time.
// This keeps the pack compact without leaving questions under-tagged.
const artistTags = {
    'George Ezra': ['George Ezra', 'UK music', 'folk pop', 'pop rock', 'singer-songwriters'],
    'James Bay': ['James Bay', 'UK music', 'folk rock', 'pop rock', 'singer-songwriters'],
    'John Newman': ['John Newman', 'UK music', 'soul pop', 'dance-pop', 'singer-songwriters'],
    'Avicii': ['Avicii', 'Swedish music', 'progressive house', 'electronic dance music', 'DJs and producers'],
    'Klingande': ['Klingande', 'French music', 'deep house', 'tropical house', 'DJs and producers'],
    'Faul & Wad Ad': ['Faul & Wad Ad', 'French music', 'deep house', 'tropical house', 'dance music'],
    'Clean Bandit': ['Clean Bandit', 'UK music', 'dance-pop', 'electropop', 'classical crossover'],
    'Disclosure': ['Disclosure', 'UK music', 'house music', 'UK garage', 'electronic music', 'duos'],
    'Gorgon City': ['Gorgon City', 'UK music', 'deep house', 'house music', 'electronic music', 'duos'],
    'Route 94': ['Route 94', 'UK music', 'deep house', 'house music', 'DJs and producers'],
    'Duke Dumont': ['Duke Dumont', 'UK music', 'house music', 'deep house', 'DJs and producers'],
    'Years & Years': ['Years & Years', 'UK music', 'synthpop', 'electropop', 'pop groups'],
    'Kiesza': ['Kiesza', 'Canadian music', 'house music', 'dance-pop', 'female vocalists'],
    'Rudimental': ['Rudimental', 'UK music', 'drum and bass', 'soul', 'electronic music'],
    'Jess Glynne': ['Jess Glynne', 'UK music', 'dance-pop', 'soul pop', 'female vocalists'],
    'Foals': ['Foals', 'UK music', 'indie rock', 'alternative rock', 'rock bands'],
    'Catfish and the Bottlemen': ['Catfish and the Bottlemen', 'Welsh music', 'UK music', 'indie rock', 'rock bands'],
    'Royal Blood': ['Royal Blood', 'UK music', 'hard rock', 'garage rock', 'rock duos'],
    'The Killers': ['The Killers', 'US music', 'alternative rock', 'indie rock', 'rock bands'],
    'Imagine Dragons': ['Imagine Dragons', 'US music', 'pop rock', 'alternative rock', 'rock bands'],
    'Franz Ferdinand': ['Franz Ferdinand', 'Scottish music', 'UK music', 'indie rock', 'post-punk revival'],
    'Two Door Cinema Club': ['Two Door Cinema Club', 'Northern Irish music', 'UK music', 'indie rock', 'indie pop'],
    'Foster the People': ['Foster the People', 'US music', 'indie pop', 'synthpop', 'alternative rock'],
    'Of Monsters and Men': ['Of Monsters and Men', 'Icelandic music', 'indie folk', 'folk rock', 'bands'],
    'The Lumineers': ['The Lumineers', 'US music', 'folk rock', 'Americana', 'indie folk'],
    'Lorde': ['Lorde', 'New Zealand music', 'art pop', 'electropop', 'female vocalists'],
    'Vance Joy': ['Vance Joy', 'Australian music', 'indie folk', 'folk pop', 'singer-songwriters'],
    'Passion Pit': ['Passion Pit', 'US music', 'synthpop', 'indie pop', 'electropop'],
    'Capital Cities': ['Capital Cities', 'US music', 'synthpop', 'indie pop', 'electronic music'],
    'Grouplove': ['Grouplove', 'US music', 'indie rock', 'alternative rock', 'rock bands'],
    'The Neighbourhood': ['The Neighbourhood', 'US music', 'alternative rock', 'indie pop', 'rock bands'],
    'Paramore': ['Paramore', 'US music', 'alternative rock', 'pop rock', 'rock bands'],
    'Twenty One Pilots': ['Twenty One Pilots', 'US music', 'alternative rock', 'electropop', 'rap rock', 'duos'],
    'Kygo': ['Kygo', 'Norwegian music', 'tropical house', 'house music', 'DJs and producers'],
    'Swedish House Mafia': ['Swedish House Mafia', 'Swedish music', 'progressive house', 'electronic dance music', 'DJs and producers'],
    'Florence + the Machine': ['Florence + the Machine', 'UK music', 'art pop', 'indie rock', 'baroque pop'],
    'Mumford & Sons': ['Mumford & Sons', 'UK music', 'folk rock', 'indie folk', 'rock bands'],
    'Gabrielle Aplin': ['Gabrielle Aplin', 'UK music', 'folk pop', 'indie folk', 'singer-songwriters'],
    'Birdy': ['Birdy', 'UK music', 'indie folk', 'pop', 'singer-songwriters'],
    'Pixie Lott': ['Pixie Lott', 'UK music', 'pop', 'dance-pop', 'R&B', 'female vocalists'],
    'Stooshe': ['Stooshe', 'UK music', 'pop', 'R&B', 'girl groups'],
    'Eliza Doolittle': ['Eliza Doolittle', 'UK music', 'pop', 'retro soul', 'singer-songwriters']
};

// Recording-specific tags describe featured singers, collaborations,
// covers and remixes, while preserving each question's answer.
const recordingTags = {
    'Avicii|I Could Be the One': ['Nicky Romero', 'collaborations', 'DJ partnerships'],
    'Avicii|Lay Me Down': ['Adam Lambert', 'Nile Rodgers', 'collaborations', 'guest vocals', 'guitarists'],
    'Avicii|Lonely Together': ['Rita Ora', 'featured artists', 'collaborations'],
    'Avicii|Fade into Darkness': ['Andreas Moe', 'guest vocals'],
    'Faul & Wad Ad|Changes': ['Pnau', 'Baby', 'samples', 'reworkings', 'collaborations'],
    'Clean Bandit|Extraordinary': ['Sharna Bass', 'featured artists', 'collaborations'],
    'Disclosure|Magnets': ['Lorde', 'featured artists', 'collaborations'],
    'Gorgon City|Ready for Your Love': ['MNEK', 'featured artists', 'collaborations'],
    'Gorgon City|Here for You': ['Laura Welsh', 'featured artists', 'collaborations'],
    'Gorgon City|Go All Night': ['Jennifer Hudson', 'featured artists', 'collaborations'],
    'Gorgon City|Imagination': ['Katy Menditta', 'featured artists', 'collaborations'],
    'Route 94|My Love': ['Jess Glynne', 'featured artists', 'collaborations', 'UK number ones'],
    'Duke Dumont|I Got U': ['Jax Jones', 'collaborations', 'DJ partnerships'],
    'Duke Dumont|Need U (100%)': ['A*M*E', 'featured artists', 'collaborations'],
    'Duke Dumont|Won\'t Look Back': ['Yolanda Quartey', 'guest vocals'],
    'Rudimental|Powerless': ['Becky Hill', 'featured artists', 'collaborations'],
    'Two Door Cinema Club|Something Good Can Work': ['2009 singles', 'Tourist History'],
    'Two Door Cinema Club|Undercover Martyn': ['2008 EP version', '2010 singles', 'Tourist History'],
    'Lorde|Yellow Flicker Beat': ['film soundtracks', 'The Hunger Games', 'Mockingjay Part 1'],
    'Kygo|It Ain\'t Me': ['Selena Gomez', 'collaborations', 'duets'],
    'Kygo|First Time': ['Ellie Goulding', 'featured artists', 'collaborations'],
    'Florence + the Machine|Spectrum (Say My Name)': ['Calvin Harris', 'remixes', 'dance remixes'],
    'Birdy|Skinny Love': ['Bon Iver', 'cover versions', 'original artists'],
    'Birdy|People Help the People': ['Cherry Ghost', 'cover versions', 'original artists'],
    'Gabrielle Aplin|Sweet Nothing': ['2015 singles']
};

// A handful of joint recordings need more precise player-facing wording.
// The answer choices and correct answers remain unchanged.
const questionCorrections = {
    12: "Which Swedish DJ teamed up with Nicky Romero on 'I Could Be the One'?",
    16: "Which French production duo released 'Changes' with Pnau?",
    24: "Which British producer released 'My Love' featuring Jess Glynne?",
    25: "Which British DJ released 'I Got U' with Jax Jones?",
    77: "Which Norwegian DJ collaborated with Selena Gomez on 'It Ain't Me'?",
    78: "Which Norwegian DJ collaborated with Ellie Goulding on 'First Time'?"
};

function makeTags(title, artist) {
    // Something Good Can Work first appeared as a single in 2009.
    // Undercover Martyn also had an earlier EP version, but the
    // 2010 single version stays with the 2010s.
    const original2000s =
        artist === 'Two Door Cinema Club' && title === 'Something Good Can Work';

    return [...new Set([
        original2000s ? '2000s' : '2010s',
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
                    10267 + index
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

