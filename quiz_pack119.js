 // quiz_pack119.js
// PuzzlePilot Big Quiz - Pack 119
// Music - 2010s; 100 questions; IDs music_9967 to music_10066
// Includes planned 10,000th music question: Gangnam Style by PSY
// Enriched country, artist, genre, album, collaboration and recording tags
// All original song credits, IDs, difficulties and daily eligibility preserved

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

// Shared tags are included in every generated question, not just in a lookup.
const artistTags = {
    'Kygo': ['Kygo', 'Norwegian music', 'tropical house', 'electronic dance music', 'DJs'],
    'Alan Walker': ['Alan Walker', 'Norwegian music', 'electronic dance music', 'electro house', 'DJs'],
    'DNCE': ['DNCE', 'US music', 'pop rock', 'dance-rock', 'funk-pop'],
    'MKTO': ['MKTO', 'US music', 'pop', 'pop duos', 'pop rock'],
    'Capital Cities': ['Capital Cities', 'US music', 'indie pop', 'synth-pop', 'electropop'],
    'Grouplove': ['Grouplove', 'US music', 'indie rock', 'alternative rock', 'indie pop'],
    'The Neighbourhood': ['The Neighbourhood', 'US music', 'alternative rock', 'indie rock', 'indie pop'],
    'Paramore': ['Paramore', 'US music', 'alternative rock', 'pop rock', 'pop punk'],
    'Twenty One Pilots': ['Twenty One Pilots', 'US music', 'alternative rock', 'alternative hip hop', 'pop rock'],
    'Fall Out Boy': ['Fall Out Boy', 'US music', 'pop rock', 'alternative rock', 'pop punk'],
    'Kings of Leon': ['Kings of Leon', 'US music', 'alternative rock', 'southern rock', 'rock bands'],
    'Coldplay': ['Coldplay', 'English music', 'UK music', 'alternative rock', 'pop rock'],
    'PSY': ['PSY', 'South Korean music', 'K-pop', 'dance-pop', 'Korean rap'],
    'Kylie Minogue': ['Kylie Minogue', 'Australian music', 'pop', 'dance-pop', 'disco-pop'],
    'Little Mix': ['Little Mix', 'English music', 'UK music', 'girl groups', 'pop', 'R&B'],
    'James Arthur': ['James Arthur', 'English music', 'UK music', 'pop', 'soul', 'singer-songwriters'],
    'Lewis Capaldi': ['Lewis Capaldi', 'Scottish music', 'UK music', 'pop', 'soul-pop', 'singer-songwriters'],
    'Drake': ['Drake', 'Canadian music', 'hip hop', 'rap', 'dancehall influences'],
    'The Weeknd': ['The Weeknd', 'Canadian music', 'pop', 'R&B', 'synth-pop'],
    'Luis Fonsi': ['Luis Fonsi', 'Puerto Rican music', 'Latin pop', 'reggaeton', 'Spanish-language music'],
    'Maroon 5': ['Maroon 5', 'US music', 'pop rock', 'funk-pop', 'pop bands'],
    'Justin Timberlake': ['Justin Timberlake', 'US music', 'pop', 'funk', 'R&B'],
    'Wiz Khalifa': ['Wiz Khalifa', 'US music', 'hip hop', 'rap', 'rappers'],
    'Macklemore & Ryan Lewis': ['Macklemore & Ryan Lewis', 'US music', 'hip hop', 'rap', 'music duos'],
    'Fun.': ['Fun.', 'US music', 'indie pop', 'pop rock', 'pop bands'],
    'Lil Nas X': ['Lil Nas X', 'US music', 'country rap', 'hip hop', 'country crossover'],
    'Ellie Goulding': ['Ellie Goulding', 'English music', 'UK music', 'pop', 'electropop', 'singer-songwriters'],
    'Zara Larsson': ['Zara Larsson', 'Swedish music', 'pop', 'dance-pop', 'electropop'],
    'Calum Scott': ['Calum Scott', 'English music', 'UK music', 'pop', 'piano ballads', 'singer-songwriters'],
    'Tones and I': ['Tones and I', 'Australian music', 'indie pop', 'pop', 'singer-songwriters'],
    'Billie Eilish': ['Billie Eilish', 'US music', 'alternative pop', 'electropop', 'singer-songwriters'],
    'Marshmello': ['Marshmello', 'US music', 'electronic dance music', 'future bass', 'DJs'],
    'Martin Garrix': ['Martin Garrix', 'Dutch music', 'electronic dance music', 'big room house', 'DJs'],
    'Avicii': ['Avicii', 'Swedish music', 'electronic dance music', 'progressive house', 'music producers'],
    'Calvin Harris': ['Calvin Harris', 'Scottish music', 'UK music', 'electronic dance music', 'house music', 'music producers']
};

// An album tag is assigned only if its particular track is listed.
const albumGroups = {
    'Kygo': [['Cloud Nine', ['Firestone', 'Stole the Show']]],
    'Alan Walker': [['Different World', ['Faded', 'Alone', 'Sing Me to Sleep']]],
    'DNCE': [['DNCE', ['Cake by the Ocean', 'Toothbrush']]],
    'MKTO': [['MKTO', ['Classic']]],
    'Capital Cities': [['In a Tidal Wave of Mystery', ['Safe and Sound']]],
    'Grouplove': [
        ['Never Trust a Happy Song', ['Tongue Tied']],
        ['Spreading Rumours', ['Ways to Go']]
    ],
    'The Neighbourhood': [['I Love You.', ['Sweater Weather', 'Afraid']]],
    'Paramore': [
        ['Paramore', ["Ain't It Fun", 'Still Into You']],
        ['After Laughter', ['Hard Times', 'Rose-Colored Boy']]
    ],
    'Twenty One Pilots': [['Blurryface', ['Stressed Out', 'Ride', 'Tear in My Heart']]],
    'Fall Out Boy': [
        ['Save Rock and Roll', ['My Songs Know What You Did in the Dark']],
        ['American Beauty/American Psycho', ['Centuries', 'Uma Thurman', 'Irresistible']]
    ],
    'Kings of Leon': [
        ['Come Around Sundown', ['Radioactive', 'Pyro']],
        ['Mechanical Bull', ['Supersoaker', 'Temple']],
        ['Walls', ['Waste a Moment']]
    ],
    'Coldplay': [
        ['Mylo Xyloto', ['Every Teardrop Is a Waterfall', 'Paradise', 'Charlie Brown']],
        ['Ghost Stories', ['Magic', 'A Sky Full of Stars']],
        ['A Head Full of Dreams', ['Adventure of a Lifetime', 'Hymn for the Weekend']]
    ],
    'PSY': [['Psy 6 (Six Rules), Part 1', ['Gangnam Style']]],
    'Kylie Minogue': [
        ['Aphrodite', ['All the Lovers', 'Get Outta My Way', 'Better than Today']],
        ['Kiss Me Once', ['Into the Blue']],
        ['Golden', ['Dancing']]
    ],
    'Little Mix': [
        ['DNA', ['Wings']],
        ['Salute', ['Move']],
        ['Get Weird', ['Black Magic']],
        ['Glory Days', ['Shout Out to My Ex', 'Touch', 'Power']],
        ['LM5', ['Woman Like Me']]
    ],
    'James Arthur': [
        ['James Arthur', ['Impossible', "You're Nobody 'Til Somebody Loves You"]],
        ['Back from the Edge', ["Say You Won't Let Go", 'Can I Be Him']]
    ],
    'Lewis Capaldi': [['Divinely Uninspired to a Hellish Extent',
        ['Someone You Loved', 'Before You Go', 'Hold Me While You Wait', 'Grace']]],
    'Drake': [['Views', ['One Dance']]],
    'The Weeknd': [
        ['After Hours', ['Blinding Lights']],
        ['Starboy', ['Starboy']],
        ['Beauty Behind the Madness', ['The Hills']]
    ],
    'Luis Fonsi': [['Vida', ['Despacito']]],
    'Maroon 5': [['Hands All Over', ['Moves Like Jagger']]],
    'Justin Timberlake': [['Trolls soundtrack', ["Can't Stop the Feeling"]]],
    'Wiz Khalifa': [['Furious 7 soundtrack', ['See You Again']]],
    'Macklemore & Ryan Lewis': [['The Heist', ["Can't Hold Us"]]],
    'Fun.': [['Some Nights', ['We Are Young']]],
    'Lil Nas X': [['7 EP', ['Old Town Road']]],
    'Ellie Goulding': [
        ['Delirium', ['On My Mind', 'Army', 'Love Me Like You Do']],
        ['Halcyon', ['Anything Could Happen', 'Figure 8']],
        ['Halcyon Days', ['Burn', 'Goodness Gracious', 'How Long Will I Love You']],
        ['Bright Lights', ['Your Song', 'Lights']],
        ["Bridget Jones's Baby soundtrack", ['Still Falling for You']]
    ],
    'Zara Larsson': [['So Good', ['Lush Life']]],
    'Calum Scott': [['Only Human', ['Dancing on My Own']]],
    'Tones and I': [['The Kids Are Coming EP', ['Dance Monkey']]],
    'Billie Eilish': [
        ['When We All Fall Asleep, Where Do We Go?', ['Bad Guy', 'Bury a Friend', "When the Party's Over"]],
        ["Don't Smile at Me EP", ['Ocean Eyes']]
    ],
    'Marshmello': [['Joytime', ['Alone']]],
    'Avicii': [
        ['True', ['Addicted to You', 'You Make Me']],
        ['Stories', ['Broken Arrows']],
        ['Avici (01) EP', ['Without You']],
        ['Tim', ['SOS']]
    ],
    'Calvin Harris': [['Motion', ['Outside', 'Blame']]]
};

// The extra tags below describe specific recordings, collaborators and covers.
const songTags = {
    'Kygo': {
        'Firestone': ['Conrad Sewell', 'guest vocalists', 'collaborations'],
        'Stole the Show': ['Parson James', 'guest vocalists', 'collaborations']
    },
    'Alan Walker': {
        'Faded': ['Iselin Solheim', 'guest vocalists', 'collaborations'],
        'Alone': ['Noonie Bao', 'uncredited vocals', '2016 singles'],
        'Sing Me to Sleep': ['Iselin Solheim', 'guest vocalists', 'collaborations']
    },
    'Paramore': {
        "Ain't It Fun": ['gospel choir', '2013 album recordings', '2014 singles'],
        'Hard Times': ['new wave influences']
    },
    'Twenty One Pilots': {
        'Heathens': ['Suicide Squad', 'film soundtracks', '2016 films']
    },
    'Fall Out Boy': {
        'Centuries': ['samples', 'Suzanne Vega', "Tom's Diner"],
        'Uma Thurman': ['samples', 'The Munsters theme', 'television themes']
    },
    'Kings of Leon': {
        'Radioactive': ['2010 singles', 'southern rock', '2010 Kings of Leon single']
    },
    'Coldplay': {
        'A Sky Full of Stars': ['Avicii', 'co-producers', 'collaborations'],
        'Hymn for the Weekend': ['Beyonce', 'guest vocalists', 'collaborations']
    },
    'PSY': {
        'Gangnam Style': ['2012 singles', 'viral hits', 'music videos', 'dance crazes',
            'international hits', 'music question 10000', 'milestone question']
    },
    'Kylie Minogue': {
        'Dancing': ['2018 singles', 'country-pop influences']
    },
    'Little Mix': {
        'Power': ['Stormzy remix', 'remixes', 'guest rappers'],
        'Woman Like Me': ['Nicki Minaj', 'guest rappers', 'collaborations']
    },
    'James Arthur': {
        'Impossible': ['Shontelle', 'cover versions', '2010 originals',
            'The X Factor UK', '2012 winner singles', 'UK talent shows']
    },
    'Drake': {
        'One Dance': ['Wizkid', 'Kyla', 'collaborations', 'dancehall influences', '2016 singles']
    },
    'The Weeknd': {
        'Blinding Lights': ['2019 singles', '2020 album release', 'synth-pop revival'],
        'Starboy': ['Daft Punk', 'collaborations', 'guest artists']
    },
    'Luis Fonsi': {
        'Despacito': ['Daddy Yankee', 'Justin Bieber remix', 'remixes',
            'collaborations', '2017 singles']
    },
    'Maroon 5': {
        'Moves Like Jagger': ['Christina Aguilera', 'guest vocalists', 'collaborations']
    },
    'Justin Timberlake': {
        "Can't Stop the Feeling": ['Trolls film', 'film soundtracks', '2016 films']
    },
    'Wiz Khalifa': {
        'See You Again': ['Charlie Puth', 'guest vocalists', 'collaborations',
            'Fast and Furious', 'Furious 7 film', 'film soundtracks']
    },
    'Macklemore & Ryan Lewis': {
        "Can't Hold Us": ['Ray Dalton', 'guest vocalists', 'collaborations']
    },
    'Fun.': {
        'We Are Young': ['Janelle Monae', 'guest vocalists', 'collaborations']
    },
    'Lil Nas X': {
        'Old Town Road': ['Billy Ray Cyrus remix', 'remixes', '2019 hits',
            'country crossover', 'viral hits']
    },
    'Ellie Goulding': {
        'Love Me Like You Do': ['Fifty Shades of Grey', 'film soundtracks', '2015 films'],
        'Still Falling for You': ["Bridget Jones's Baby", 'film soundtracks', '2016 films'],
        'Close to Me': ['Diplo', 'Swae Lee', 'collaborations', 'guest rappers'],
        'How Long Will I Love You': ['The Waterboys', 'cover versions', '1990 originals',
            'BBC Children in Need', 'charity singles', 'About Time film', 'film soundtracks'],
        'Your Song': ['Elton John', 'Bernie Taupin', 'cover versions', '1970 originals',
            'John Lewis Christmas advert', '2010 Christmas adverts']
    },
    'Billie Eilish': {
        'Lovely': ['Khalid', 'duets', 'collaborations', '13 Reasons Why', 'TV soundtracks'],
        'Ocean Eyes': ['2015 original recordings', '2017 EP release']
    },
    'Avicii': {
        'The Days': ['Robbie Williams', 'guest vocalists', 'collaborations'],
        'Addicted to You': ['Audra Mae', 'guest vocalists', 'collaborations'],
        'You Make Me': ['Salem Al Fakir', 'guest vocalists', 'collaborations'],
        'Silhouettes': ['Salem Al Fakir', 'guest vocalists', 'collaborations', '2012 singles'],
        'Broken Arrows': ['Zac Brown', 'guest vocalists', 'country influences'],
        'Without You': ['Sandro Cavazza', 'guest vocalists', 'collaborations'],
        'SOS': ['Aloe Blacc', 'guest vocalists', '2019 singles', 'posthumous releases']
    },
    'Calvin Harris': {
        'Outside': ['Ellie Goulding', 'guest vocalists', 'collaborations'],
        'Blame': ['John Newman', 'guest vocalists', 'collaborations']
    }
};

function makeTags(title, artist) {
    const tags = [
        '2010s', 'songs', 'artist identification', 'recordings',
        ...artistTags[artist]
    ];
    for (const [album, tracks] of (albumGroups[artist] || [])) {
        if (tracks.includes(title)) tags.push(album + ' album');
    }
    const specific = songTags[artist] && songTags[artist][title];
    if (specific) tags.push(...specific);
    return [...new Set(tags)];
}

// Clarify recordings that could otherwise have multiple plausible artists.
const clarifiedQuestions = {
    'Alan Walker|Alone': "Which Norwegian DJ released the 2016 single 'Alone'?",
    'Marshmello|Alone': "Which American DJ released the 2016 single 'Alone'?",
    'Kings of Leon|Radioactive': "Which rock band released 'Radioactive' from the album Come Around Sundown?",
    'James Arthur|Impossible': "Which X Factor winner recorded a cover of Shontelle's 'Impossible'?",
    'Calum Scott|Dancing on My Own': "Which singer released a 2016 cover of Robyn's 'Dancing on My Own'?",
    'Ellie Goulding|Your Song': "Which singer covered Elton John's 'Your Song' for a 2010 John Lewis Christmas advert?",
    'Ellie Goulding|How Long Will I Love You': "Which singer covered the Waterboys' 'How Long Will I Love You' for BBC Children in Need?",
    'Coldplay|A Sky Full of Stars': "Which British band released 'A Sky Full of Stars', co-produced by Avicii?",
    'Coldplay|Hymn for the Weekend': "Which British band recorded 'Hymn for the Weekend' with vocals from Beyonce?",
    'Luis Fonsi|Despacito': "Which Puerto Rican singer released 'Despacito' with Daddy Yankee?",
    'Maroon 5|Moves Like Jagger': "Which American band recorded 'Moves Like Jagger' featuring Christina Aguilera?",
    'Wiz Khalifa|See You Again': "Which rapper recorded 'See You Again' with Charlie Puth for Furious 7?",
    'Macklemore & Ryan Lewis|Can\'t Hold Us': "Which hip-hop duo released 'Can't Hold Us' featuring Ray Dalton?",
    'Lil Nas X|Old Town Road': "Which rapper first released 'Old Town Road', later remixed with Billy Ray Cyrus?",
    'The Weeknd|Starboy': "Which Canadian singer recorded 'Starboy' featuring Daft Punk?",
    'Billie Eilish|Lovely': "Which singer recorded 'Lovely' as a duet with Khalid?",
    'Calvin Harris|Outside': "Which Scottish DJ and producer released 'Outside' featuring Ellie Goulding?",
    'Calvin Harris|Blame': "Which Scottish DJ and producer released 'Blame' featuring John Newman?",
    'Drake|One Dance': "Which Canadian rapper released 'One Dance' featuring Wizkid and Kyla?",
    'Fun.|We Are Young': "Which American band recorded 'We Are Young' featuring Janelle Monae?"
};

// Original distractor ordering and rotation are preserved: 35 artists,
// leaving 34 distinct wrong options for each recording.
const artists = [...new Set(songs.map(song => song[1]))];
function makeAnswers(correctArtist, index) {
    const wrongArtists = artists.filter(artist => artist !== correctArtist);
    const answers = [
        correctArtist,
        wrongArtists[index % wrongArtists.length],
        wrongArtists[(index + 11) % wrongArtists.length],
        wrongArtists[(index + 23) % wrongArtists.length]
    ];
    const rotation = index % answers.length;
    return [...answers.slice(rotation), ...answers.slice(0, rotation)];
}

const questions = songs.map(([title, artist], index) => ({
    id: `music_${9967 + index}`,
    category: 'Music',
    question: clarifiedQuestions[artist + '|' + title] ||
        `Which artist recorded '${title}'?`,
    answers: makeAnswers(artist, index),
    correctAnswer: artist,
    difficulty: index % 3 === 0 ? 'Easy' : 'Medium',
    tags: makeTags(title, artist),
    dailyEligible: true
}));

module.exports = questions;
