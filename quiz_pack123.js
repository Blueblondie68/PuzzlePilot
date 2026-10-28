 // quiz_pack123.js
// PuzzlePilot Big Quiz
// Music Pack 123
// 2010s songs; 100 questions, IDs music_10367 - music_10466
// Expanded artist, regional, genre, cover-version and collaboration tags

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

// Shared tags expand into every generated question at load time.
// They preserve the original songs and answer choices.
const artistTags = {
    'Gary Barlow': ['Gary Barlow', 'UK music', 'pop', 'singer-songwriters', 'Take That solo careers'],
    'Lawson': ['Lawson', 'UK music', 'pop rock', 'pop bands'],
    'The Wanted': ['The Wanted', 'UK music', 'Irish music', 'pop', 'boy bands'],
    'The Saturdays': ['The Saturdays', 'UK music', 'Irish music', 'pop', 'dance-pop', 'girl groups'],
    'Stooshe': ['Stooshe', 'UK music', 'pop', 'R&B', 'girl groups'],
    'Eliza Doolittle': ['Eliza Doolittle', 'UK music', 'pop', 'retro soul', 'singer-songwriters'],
    'Emeli Sande': ['Emeli Sandé', 'Scottish music', 'UK music', 'soul', 'R&B', 'singer-songwriters'],
    'Foxes': ['Foxes', 'UK music', 'electropop', 'synthpop', 'female vocalists'],
    'Paloma Faith': ['Paloma Faith', 'UK music', 'pop soul', 'retro soul', 'female vocalists'],
    'Jessie J': ['Jessie J', 'UK music', 'pop', 'R&B', 'dance-pop', 'female vocalists'],
    'Alexandra Burke': ['Alexandra Burke', 'UK music', 'pop', 'R&B', 'The X Factor', 'talent show winners'],
    'Olly Murs': ['Olly Murs', 'UK music', 'pop', 'pop rock', 'The X Factor', 'talent show contestants'],
    'McFly': ['McFly', 'UK music', 'pop rock', 'pop bands'],
    'One Direction': ['One Direction', 'UK music', 'Irish music', 'pop', 'boy bands', 'The X Factor'],
    'Zayn': ['Zayn', 'UK music', 'pop', 'R&B', 'One Direction solo careers'],
    'Harry Styles': ['Harry Styles', 'UK music', 'pop rock', 'pop', 'One Direction solo careers'],
    'Niall Horan': ['Niall Horan', 'Irish music', 'pop rock', 'folk pop', 'One Direction solo careers'],
    'Liam Payne': ['Liam Payne', 'UK music', 'pop', 'R&B', 'One Direction solo careers'],
    'Louis Tomlinson': ['Louis Tomlinson', 'UK music', 'pop', 'pop rock', 'One Direction solo careers'],
    '5 Seconds of Summer': ['5 Seconds of Summer', 'Australian music', 'pop rock', 'pop punk', 'rock bands'],
    'Sheppard': ['Sheppard', 'Australian music', 'indie pop', 'pop rock', 'pop groups'],
    'Magic!': ['Magic!', 'Canadian music', 'reggae fusion', 'pop rock', 'bands'],
    'Walk the Moon': ['Walk the Moon', 'US music', 'indie pop', 'synthpop', 'pop rock'],
    'Echosmith': ['Echosmith', 'US music', 'indie pop', 'alternative rock', 'bands'],
    'American Authors': ['American Authors', 'US music', 'indie rock', 'folk pop', 'rock bands'],
    'Phillip Phillips': ['Phillip Phillips', 'US music', 'folk rock', 'pop rock', 'American Idol', 'talent show winners'],
    'Rachel Platten': ['Rachel Platten', 'US music', 'pop', 'singer-songwriters', 'female vocalists'],
    'Elle King': ['Elle King', 'US music', 'blues rock', 'country rock', 'singer-songwriters'],
    'Hailee Steinfeld': ['Hailee Steinfeld', 'US music', 'pop', 'dance-pop', 'female vocalists'],
    'Julia Michaels': ['Julia Michaels', 'US music', 'pop', 'singer-songwriters', 'female vocalists'],
    'Alessia Cara': ['Alessia Cara', 'Canadian music', 'pop', 'R&B', 'singer-songwriters'],
    'Daya': ['Daya', 'US music', 'electropop', 'dance-pop', 'female vocalists'],
    'Halsey': ['Halsey', 'US music', 'electropop', 'alternative pop', 'singer-songwriters'],
    'Demi Lovato': ['Demi Lovato', 'US music', 'pop', 'R&B', 'singer-songwriters'],
    'Miley Cyrus': ['Miley Cyrus', 'US music', 'pop', 'pop rock', 'singer-songwriters'],
    'Nick Jonas': ['Nick Jonas', 'US music', 'pop', 'R&B', 'Jonas Brothers solo careers'],
    'DNCE': ['DNCE', 'US music', 'funk pop', 'pop rock', 'Joe Jonas', 'bands'],
    'MKTO': ['MKTO', 'US music', 'pop', 'pop rap', 'duos'],
    'Jason Derulo': ['Jason Derulo', 'US music', 'pop', 'R&B', 'dance-pop'],
    'Ava Max': ['Ava Max', 'US music', 'dance-pop', 'electropop', 'female vocalists'],
    'Mabel': ['Mabel', 'UK music', 'Norwegian-born artists', 'pop', 'R&B', 'dance-pop']
};

// Add only track-specific context here, not repeated artist tags.
const recordingTags = {
    'Lawson|Brokenhearted': ['B.o.B', 'featured artists', 'collaborations'],
    'The Wanted|Gold Forever': ['Comic Relief', 'charity singles'],
    'The Saturdays|Higher': ['Flo Rida', 'featured artists', 'collaborations'],
    'The Saturdays|What About Us': ['Sean Paul', 'featured artists', 'collaborations'],
    'Stooshe|Love Me': ['Travie McCoy', 'featured artists', 'collaborations'],
    'Stooshe|Waterfalls': ['TLC', 'cover versions', 'original artists'],
    'Emeli Sande|Read All About It, Pt. III': ['Professor Green', 'solo versions', 'song reworkings'],
    'Paloma Faith|Never Tear Us Apart': ['INXS', 'cover versions', 'original artists', 'advert music'],
    'Jessie J|Wild': ['Big Sean', 'Dizzee Rascal', 'featured artists', 'collaborations'],
    'Alexandra Burke|Start Without You': ['Laza Morgan', 'featured artists', 'collaborations'],
    'Alexandra Burke|Elephant': ['Erick Morillo', 'collaborations', 'dance music'],
    'McFly|Shine a Light': ['Taio Cruz', 'featured artists', 'collaborations'],
    'Zayn|Dusk Till Dawn': ['Sia', 'featured artists', 'collaborations'],
    'Liam Payne|Strip That Down': ['Quavo', 'featured artists', 'collaborations'],
    'Louis Tomlinson|Just Hold On': ['Steve Aoki', 'collaborations', 'dance-pop'],
    'Louis Tomlinson|Back to You': ['Bebe Rexha', 'Digital Farm Animals', 'featured artists', 'collaborations'],
    'Magic!|Lay You Down Easy': ['Sean Paul', 'featured artists', 'collaborations'],
    'Hailee Steinfeld|Starving': ['Grey', 'Zedd', 'collaborations', 'electropop'],
    'Nick Jonas|Close': ['Tove Lo', 'featured artists', 'collaborations'],
    'DNCE|Kissing Strangers': ['Nicki Minaj', 'featured artists', 'collaborations'],
    'Jason Derulo|Swalla': ['Nicki Minaj', 'Ty Dolla $ign', 'featured artists', 'collaborations'],
    'Mabel|Finders Keepers': ['Kojo Funds', 'featured artists', 'collaborations']
};

// Reword collaborative credits where a sole-artist question is unclear.
// Keep every question's original correct answer and four choices.
const questionCorrections = {
    38: "Which British singer teamed up with Erick Morillo on 'Elephant'?",
    44: "Which British band released 'Shine a Light' featuring Taio Cruz?",
    50: "Which former One Direction singer recorded 'Dusk Till Dawn' with Sia?",
    58: "Which former One Direction singer collaborated with Steve Aoki on 'Just Hold On'?",
    59: "Which former One Direction singer released 'Back to You' featuring Bebe Rexha?",
    79: "Which American singer recorded 'Starving' with Grey and Zedd?"
};

const artists = [
    ...new Set(songs.map(song => song[1]))
];

function makeAnswers(correctArtist, index) {
    const wrongArtists = artists.filter(artist => artist !== correctArtist);
    const answers = [
        correctArtist,
        wrongArtists[index % wrongArtists.length],
        wrongArtists[(index + 11) % wrongArtists.length],
        wrongArtists[(index + 23) % wrongArtists.length]
    ];
    const rotation = index % 4;
    return [
        ...answers.slice(rotation),
        ...answers.slice(0, rotation)
    ];
}

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

const questions = songs.map(([title, artist], index) => ({
    id: 'music_' + String(10367 + index).padStart(4, '0'),
    category: 'Music',
    question: questionCorrections[index] || `Which artist recorded '${title}'?`,
    answers: makeAnswers(artist, index),
    correctAnswer: artist,
    difficulty: index % 3 === 0 ? 'Easy' : 'Medium',
    tags: makeTags(title, artist),
    dailyEligible: true
}));

module.exports = questions;
