// quiz_pack120.js
// PuzzlePilot Big Quiz - Pack 120
// Music - mainly 2010s, with one original 2009 recording
// 100 questions; IDs music_10067 to music_10166
// Artist, decade, genre, country, album and specialist quiz tags
// Original IDs, recordings, answers, difficulty and daily eligibility preserved

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

    ['Motivation', 'Normani'],

    // The one Render made us come back for...
    ['Boo\'d Up', 'Ella Mai']
];

// Shared tags are expanded into EVERY generated question.
const artistTags = {
    'Desiigner': ['Desiigner', 'US music', 'hip hop', 'trap music', 'rappers'],
    'Drake': ['Drake', 'Canadian music', 'hip hop', 'rap', 'R&B'],
    'The Weeknd': ['The Weeknd', 'Canadian music', 'R&B', 'pop', 'synth-pop'],
    'R. City': ['R. City', 'US Virgin Islands music', 'pop', 'R&B', 'music duos'],
    'Jason Derulo': ['Jason Derulo', 'US music', 'pop', 'R&B', 'dance-pop'],
    'Pitbull': ['Pitbull', 'US music', 'Latin pop', 'hip hop', 'dance-pop'],
    'Cher Lloyd': ['Cher Lloyd', 'English music', 'UK music', 'pop', 'The X Factor UK'],
    'Charli XCX': ['Charli XCX', 'English music', 'UK music', 'electropop', 'pop'],
    'Tove Lo': ['Tove Lo', 'Swedish music', 'electropop', 'pop', 'singer-songwriters'],
    'Elle King': ['Elle King', 'US music', 'blues rock', 'country rock', 'pop rock'],
    'Kiesza': ['Kiesza', 'Canadian music', 'house music', 'dance-pop', 'electronic music'],
    'Clean Bandit': ['Clean Bandit', 'English music', 'UK music', 'dance-pop', 'classical crossover', 'electronic music'],
    'Zara Larsson': ['Zara Larsson', 'Swedish music', 'pop', 'dance-pop', 'electropop'],
    'NEIKED': ['NEIKED', 'Swedish music', 'pop', 'electronic music', 'music producers'],
    'Mike Posner': ['Mike Posner', 'US music', 'pop', 'singer-songwriters', 'electronic remixes'],
    'G-Eazy': ['G-Eazy', 'US music', 'hip hop', 'rap', 'rappers'],
    'Khalid': ['Khalid', 'US music', 'R&B', 'pop', 'singer-songwriters'],
    'Julia Michaels': ['Julia Michaels', 'US music', 'pop', 'singer-songwriters', 'songwriters'],
    'Alessia Cara': ['Alessia Cara', 'Canadian music', 'pop', 'R&B', 'singer-songwriters'],
    'Rachel Platten': ['Rachel Platten', 'US music', 'pop', 'pop rock', 'singer-songwriters'],
    'Pink': ['Pink', 'P!nk', 'US music', 'pop rock', 'pop', 'singer-songwriters'],
    'Jessie J': ['Jessie J', 'English music', 'UK music', 'pop', 'R&B'],
    'Olly Murs': ['Olly Murs', 'English music', 'UK music', 'pop', 'The X Factor UK'],
    'Lady Antebellum': ['Lady Antebellum', 'Lady A', 'US music', 'country music', 'country pop'],
    'Little Big Town': ['Little Big Town', 'US music', 'country music', 'country groups', 'country pop'],
    'Florida Georgia Line': ['Florida Georgia Line', 'US music', 'country music', 'bro-country', 'country duos'],
    'Sam Hunt': ['Sam Hunt', 'US music', 'country music', 'country pop', 'singer-songwriters'],
    'Thomas Rhett': ['Thomas Rhett', 'US music', 'country music', 'country pop', 'singer-songwriters'],
    'Alicia Keys': ['Alicia Keys', 'US music', 'R&B', 'soul', 'piano', 'singer-songwriters'],
    'Beyonce': ['Beyonce', 'Beyoncé', 'US music', 'R&B', 'pop', 'singer-songwriters'],
    'Normani': ['Normani', 'US music', 'pop', 'R&B', 'Fifth Harmony connections'],
    'Ella Mai': ['Ella Mai', 'English music', 'UK music', 'R&B', 'soul']
};

// Album and EP tags are included only where the recording appears.
const albumGroups = {
    'Desiigner': [['New English', ['Panda']]],
    'Drake': [
        ['Views', ['Hotline Bling']],
        ['Scorpion', ["God's Plan", 'Nice for What', 'In My Feelings']],
        ['Nothing Was the Same', ['Started from the Bottom', "Hold On, We're Going Home"]]
    ],
    'The Weeknd': [
        ['Beauty Behind the Madness', ['Earned It']],
        ['Starboy', ['I Feel It Coming']],
        ['My Dear Melancholy', ['Call Out My Name']],
        ['After Hours', ['Heartless']]
    ],
    'R. City': [['What Dreams Are Made Of', ['Locked Away']]],
    'Jason Derulo': [
        ['Tattoos', ['Trumpets', 'Marry Me']],
        ['Talk Dirty', ['Talk Dirty', 'Wiggle']],
        ['Everything Is 4', ['Want to Want Me']]
    ],
    'Pitbull': [
        ['Planet Pit', ['Give Me Everything']],
        ['Global Warming', ['Feel This Moment']],
        ['Global Warming: Meltdown', ['Timber']],
        ['Globalization', ['Fireball']]
    ],
    'Cher Lloyd': [['Sticks + Stones', ['Want U Back', 'Swagger Jagger', 'With Ur Love']]],
    'Charli XCX': [
        ['Sucker', ['Boom Clap', 'Break the Rules', 'Doing It']],
        ['Charli', ['1999']]
    ],
    'Tove Lo': [
        ['Queen of the Clouds', ['Habits (Stay High)', 'Talking Body']],
        ['Lady Wood', ['Cool Girl']]
    ],
    'Elle King': [['Love Stuff', ["Ex's & Oh's", "America's Sweetheart"]]],
    'Kiesza': [['Sound of a Woman', ['Hideaway', 'Giant in My Heart']]],
    'Clean Bandit': [
        ['New Eyes (Special Edition)', ['Stronger']],
        ['What Is Love?', ['I Miss You', 'Mama']]
    ],
    'Zara Larsson': [
        ['So Good', ['Never Forget You', "Ain't My Fault", 'I Would Like']],
        ['Poster Girl', ['Ruin My Life']]
    ],
    'Mike Posner': [['At Night, Alone.', ['I Took a Pill in Ibiza']]],
    'G-Eazy': [
        ["When It's Dark Out", ['Me, Myself & I']],
        ['The Beautiful & Damned', ['Him & I', 'No Limit']]
    ],
    'Khalid': [
        ['American Teen', ['Location', 'Young Dumb & Broke']],
        ['Suncity EP', ['Better']],
        ['Free Spirit', ['Talk']]
    ],
    'Julia Michaels': [
        ['Nervous System EP', ['Issues']],
        ['Fifty Shades Freed soundtrack', ['Heaven']]
    ],
    'Alessia Cara': [['Know-It-All', ['Scars to Your Beautiful', 'Here', 'Wild Things']]],
    'Rachel Platten': [['Wildfire', ['Fight Song', 'Stand by You']]],
    'Pink': [
        ['The Truth About Love', ['Try', 'Just Give Me a Reason', 'Blow Me (One Last Kiss)']],
        ['Beautiful Trauma', ['What About Us', 'Beautiful Trauma']],
        ['Hurts 2B Human', ['Walk Me Home']],
        ['Greatest Hits... So Far!!!', ['Raise Your Glass']]
    ],
    'Jessie J': [
        ['Who You Are (Platinum Edition)', ['LaserLight']],
        ['Alive', ['Thunder']],
        ['Sweet Talker', ["Burnin' Up"]]
    ],
    'Olly Murs': [
        ["In Case You Didn't Know", ['Dance with Me Tonight', 'Heart Skips a Beat']],
        ['Right Place Right Time', ['Troublemaker', "Dear Darlin'", 'Army of Two']],
        ['Never Been Better', ['Wrapped Up', 'Up']]
    ],
    'Lady Antebellum': [
        ['Need You Now', ['Need You Now']],
        ['Own the Night', ['Just a Kiss']],
        ['747', ['Bartender']]
    ],
    'Little Big Town': [
        ['Pain Killer', ['Girl Crush']],
        ['Tornado', ['Pontoon']]
    ],
    'Florida Georgia Line': [
        ["Here's to the Good Times", ['Cruise']],
        ['Dig Your Roots', ['H.O.L.Y.']],
        ["Can't Say I Ain't Country", ['Simple']]
    ],
    'Sam Hunt': [
        ['Montevallo', ['Take Your Time', 'House Party']],
        ['Southside', ['Body Like a Back Road']]
    ],
    'Thomas Rhett': [
        ['Tangled Up', ['Die a Happy Man']],
        ['Life Changes', ['Marry Me', 'Life Changes']]
    ],
    'Alicia Keys': [['Girl on Fire', ['Girl on Fire', 'Brand New Me']]],
    'Beyonce': [
        ['4', ['Love on Top', 'Countdown']],
        ['Beyonce (2013 album)', ['XO', 'Drunk in Love']],
        ['Lemonade', ['Formation', 'Hold Up']]
    ],
    'Ella Mai': [
        ['Ready EP', ["Boo'd Up"]],
        ['Ella Mai', ["Boo'd Up"]]
    ]
};

// Recording-specific tags give useful guest, remix and soundtrack details.
const songTags = {
    'Drake': {
        'Nice for What': ['Lauryn Hill', 'Ex-Factor sample', 'samples'],
        'In My Feelings': ['viral dance challenges', 'music videos'],
        "Hold On, We're Going Home": ['Majid Jordan', 'guest artists', 'collaborations']
    },
    'The Weeknd': {
        'Earned It': ['Fifty Shades of Grey', 'film soundtracks', '2014 singles'],
        'I Feel It Coming': ['Daft Punk', 'guest artists', 'collaborations'],
        'Heartless': ['2019 singles', '2020 album release']
    },
    'R. City': {
        'Locked Away': ['Adam Levine', 'Maroon 5', 'guest vocalists', 'collaborations']
    },
    'Jason Derulo': {
        'Talk Dirty': ['2 Chainz', 'guest rappers', 'collaborations'],
        'Wiggle': ['Snoop Dogg', 'guest rappers', 'collaborations'],
        'Marry Me': ['2013 singles', 'Tattoos album', 'songs with shared titles']
    },
    'Pitbull': {
        'Timber': ['Kesha', 'guest vocalists', 'collaborations'],
        'Give Me Everything': ['Ne-Yo', 'Afrojack', 'Nayer', 'collaborations'],
        'Feel This Moment': ['Christina Aguilera', 'guest vocalists', 'collaborations', 'Take on Me sample', 'a-ha'],
        'Fireball': ['John Ryan', 'guest vocalists', 'collaborations']
    },
    'Cher Lloyd': {
        'With Ur Love': ['Mike Posner', 'guest vocalists', 'collaborations'],
        'Want U Back': ['Astro guest verse', 'alternative recordings']
    },
    'Charli XCX': {
        'Boom Clap': ['The Fault in Our Stars', 'film soundtracks'],
        'Doing It': ['Rita Ora', 'guest vocalists', 'collaborations', 'alternative recordings'],
        '1999': ['Troye Sivan', 'guest vocalists', 'collaborations']
    },
    'Clean Bandit': {
        'Tears': ['Louisa Johnson', 'guest vocalists', 'collaborations'],
        'Stronger': ['Alex Newell', 'Sean Bass', 'guest vocalists', '2014 originals', '2015 singles'],
        'I Miss You': ['Julia Michaels', 'guest vocalists', 'collaborations'],
        'Mama': ['Ellie Goulding', 'guest vocalists', 'collaborations']
    },
    'Zara Larsson': {
        'Never Forget You': ['MNEK', 'duets', 'collaborations'],
        'Ruin My Life': ['2018 singles', '2021 album release']
    },
    'NEIKED': {
        'Sexual': ['Dyo', 'guest vocalists', 'collaborations']
    },
    'Mike Posner': {
        'I Took a Pill in Ibiza': ['Seeb', 'remixes', '2015 acoustic originals', '2015 remixes', '2016 hits']
    },
    'G-Eazy': {
        'Me, Myself & I': ['Bebe Rexha', 'guest vocalists', 'collaborations'],
        'Him & I': ['Halsey', 'duets', 'collaborations'],
        'No Limit': ['A$AP Rocky', 'Cardi B', 'guest rappers', 'collaborations']
    },
    'Khalid': {
        'Better': ['2018 singles', 'Suncity EP']
    },
    'Julia Michaels': {
        'Heaven': ['Fifty Shades Freed', 'film soundtracks', '2018 films']
    },
    'Pink': {
        'Just Give Me a Reason': ['Nate Ruess', 'Fun.', 'duets', 'collaborations'],
        'Raise Your Glass': ['2010 singles', 'greatest hits albums']
    },
    'Jessie J': {
        'LaserLight': ['David Guetta', 'music producers', 'collaborations'],
        "Burnin' Up": ['2 Chainz', 'guest rappers', 'collaborations']
    },
    'Olly Murs': {
        'Troublemaker': ['Flo Rida', 'guest rappers', 'collaborations'],
        'Wrapped Up': ['Travie McCoy', 'guest rappers', 'collaborations'],
        'Heart Skips a Beat': ['Rizzle Kicks', 'guest rappers', 'collaborations'],
        'Up': ['Demi Lovato', 'duets', 'collaborations']
    },
    'Lady Antebellum': {
        'Need You Now': ['2009 originals', '2010 UK hits', '2010 album release', 'Hillary Scott', 'Charles Kelley', 'duets']
    },
    'Florida Georgia Line': {
        'Cruise': ['Nelly remix', 'remixes', 'country crossover']
    },
    'Sam Hunt': {
        'Body Like a Back Road': ['2017 singles', '2020 album release']
    },
    'Thomas Rhett': {
        'Marry Me': ['2017 singles', 'Life Changes album', 'songs with shared titles']
    },
    'Alicia Keys': {
        'Girl on Fire': ['Nicki Minaj alternate version', 'alternative recordings']
    },
    'Beyonce': {
        'Drunk in Love': ['Jay-Z', 'guest rappers', 'collaborations'],
        'Formation': ['Lemonade visual album', '2016 singles']
    },
    'Normani': {
        'Motivation': ['2019 debut solo singles', 'Ariana Grande', 'songwriters']
    },
    'Ella Mai': {
        "Boo'd Up": ['2017 EP recordings', '2018 singles', '2018 album recordings', 'UK R&B', 'US R&B hits']
    }
};

function makeTags(title, artist) {
    // 'Need You Now' was first issued as a single in 2009, not 2010.
    const decade = artist === 'Lady Antebellum' && title === 'Need You Now'
        ? '2000s' : '2010s';
    const tags = [decade, 'songs', 'artist identification', 'recordings', ...artistTags[artist]];
    for (const [album, tracks] of (albumGroups[artist] || [])) {
        if (tracks.includes(title)) tags.push(album + ' album');
    }
    const extra = songTags[artist] && songTags[artist][title];
    if (extra) tags.push(...extra);
    return [...new Set(tags)];
}

// Distinguish songs sharing a title and clarify credited featured artists.
const clarifiedQuestions = {
    'Jason Derulo|Marry Me': "Which R&B singer released the 2013 single 'Marry Me' from his album Tattoos?",
    'Thomas Rhett|Marry Me': "Which country singer released the 2017 song 'Marry Me' from Life Changes?",
    'The Weeknd|I Feel It Coming': "Which Canadian singer released 'I Feel It Coming' featuring Daft Punk?",
    'R. City|Locked Away': "Which duo released 'Locked Away' featuring Adam Levine?",
    'Cher Lloyd|With Ur Love': "Which British singer released 'With Ur Love' featuring Mike Posner?",
    'Clean Bandit|I Miss You': "Which British electronic group released 'I Miss You' featuring Julia Michaels?",
    'Clean Bandit|Mama': "Which British electronic group released 'Mama' featuring Ellie Goulding?",
    'Pitbull|Give Me Everything': "Which rapper released 'Give Me Everything' featuring Ne-Yo, Afrojack and Nayer?",
    'Mike Posner|I Took a Pill in Ibiza': "Which singer originally recorded 'I Took a Pill in Ibiza', later remixed by Seeb?",
    'G-Eazy|Him & I': "Which rapper recorded 'Him & I' with Halsey?",
    'Pink|Just Give Me a Reason': "Which singer recorded 'Just Give Me a Reason' with Nate Ruess?",
    'Olly Murs|Up': "Which British singer recorded 'Up' with Demi Lovato?",
    'Zara Larsson|Never Forget You': "Which Swedish singer released 'Never Forget You' with MNEK?",
    'Charli XCX|1999': "Which British singer recorded '1999' with Troye Sivan?",
    'Beyonce|Drunk in Love': "Which singer recorded 'Drunk in Love' featuring Jay-Z?",
    'Florida Georgia Line|Cruise': "Which country duo released 'Cruise', later remixed with rapper Nelly?",
    'Jessie J|LaserLight': "Which British singer recorded 'LaserLight' with David Guetta?"
};

// Preserve the original artist order, correct answer, and button rotation.
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
    id: `music_${10067 + index}`,
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
