 // quiz_pack143.js
// PuzzlePilot - The Bigggggg Quiz
// Music Albums: Pack 143 - The 1970s
// 100 questions, music_12301 to music_12400.
// Audit: accurate artist, album and genre tags; original IDs and answers retained.
// Years are kept in tags rather than routine player-facing questions.

// Each entry: [original release year, album, artist, song].
// An empty song asks for the artist; a named song asks for the album.
const albumFacts = [
    [1970, 'Bridge over Troubled Water', 'Simon & Garfunkel', 'The Boxer'],
    [1970, 'Paranoid', 'Black Sabbath', 'Iron Man'],
    [1970, 'Deep Purple in Rock', 'Deep Purple', ''],
    [1970, 'Fire and Water', 'Free', 'All Right Now'],
    [1970, 'Tea for the Tillerman', 'Cat Stevens', 'Wild World'],
    [1970, 'All Things Must Pass', 'George Harrison', 'My Sweet Lord'],
    [1970, 'After the Gold Rush', 'Neil Young', ''],
    [1970, 'Moondance', 'Van Morrison', ''],
    [1970, 'Abraxas', 'Santana', ''],
    [1970, 'John Lennon/Plastic Ono Band', 'John Lennon', ''],

    [1971, 'Hunky Dory', 'David Bowie', 'Changes'],
    [1971, 'Electric Warrior', 'T. Rex', 'Get It On'],
    [1971, "Who's Next", 'The Who', ''],
    [1971, 'Sticky Fingers', 'The Rolling Stones', 'Brown Sugar'],
    [1971, 'Led Zeppelin IV', 'Led Zeppelin', 'Stairway to Heaven'],
    [1971, 'Every Picture Tells a Story', 'Rod Stewart', ''],
    [1971, 'Blue', 'Joni Mitchell', ''],
    [1971, 'Fragile', 'Yes', ''],
    [1971, 'Imagine', 'John Lennon', 'Imagine'],
    [1971, 'Aqualung', 'Jethro Tull', ''],

    [1972, 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars', 'David Bowie', 'Starman'],
    [1972, 'The Slider', 'T. Rex', ''],
    [1972, 'Harvest', 'Neil Young', 'Heart of Gold'],
    [1972, 'Talking Book', 'Stevie Wonder', 'Superstition'],
    [1972, 'Slayed?', 'Slade', ''],
    [1972, 'Exile on Main St.', 'The Rolling Stones', ''],
    [1972, 'Close to the Edge', 'Yes', ''],
    [1972, 'The World Is a Ghetto', 'War', ''],
    [1972, 'No Secrets', 'Carly Simon', "You're So Vain"],
    [1972, 'Honky Château', 'Elton John', 'Rocket Man'],

    [1973, 'The Dark Side of the Moon', 'Pink Floyd', 'Money'],
    [1973, 'Aladdin Sane', 'David Bowie', 'The Jean Genie'],
    [1973, 'Band on the Run', 'Wings', ''],
    [1973, 'Innervisions', 'Stevie Wonder', 'Higher Ground'],
    [1973, 'Goats Head Soup', 'The Rolling Stones', 'Angie'],
    [1973, 'Selling England by the Pound', 'Genesis', ''],
    [1973, "Let's Get It On", 'Marvin Gaye', ''],
    [1973, 'Tubular Bells', 'Mike Oldfield', ''],
    [1973, 'Piano Man', 'Billy Joel', 'Piano Man'],
    [1973, 'Quadrophenia', 'The Who', ''],

    [1974, 'Sheer Heart Attack', 'Queen', 'Killer Queen'],
    [1974, 'Diamond Dogs', 'David Bowie', 'Rebel Rebel'],
    [1974, '461 Ocean Boulevard', 'Eric Clapton', 'I Shot the Sheriff'],
    [1974, 'Eldorado', 'Electric Light Orchestra', "Can't Get It Out of My Head"],
    [1974, 'Court and Spark', 'Joni Mitchell', ''],
    [1974, 'The Lamb Lies Down on Broadway', 'Genesis', ''],
    [1974, 'Old New Borrowed and Blue', 'Slade', ''],
    [1974, 'Pretzel Logic', 'Steely Dan', ''],
    [1974, 'Autobahn', 'Kraftwerk', 'Autobahn'],
    [1974, 'Caribou', 'Elton John', ''],

    [1975, 'A Night at the Opera', 'Queen', 'Bohemian Rhapsody'],
    [1975, 'Wish You Were Here', 'Pink Floyd', 'Wish You Were Here'],
    [1975, 'Blood on the Tracks', 'Bob Dylan', 'Tangled Up in Blue'],
    [1975, 'Physical Graffiti', 'Led Zeppelin', ''],
    [1975, 'Fleetwood Mac', 'Fleetwood Mac', 'Rhiannon'],
    [1975, 'Main Course', 'Bee Gees', ''],
    [1975, 'Born to Run', 'Bruce Springsteen', 'Born to Run'],
    [1975, 'Mothership Connection', 'Parliament', ''],
    [1975, 'Venus and Mars', 'Wings', ''],
    [1975, 'Captain Fantastic and the Brown Dirt Cowboy', 'Elton John', ''],

    [1976, 'A Day at the Races', 'Queen', 'Somebody to Love'],
    [1976, 'Arrival', 'ABBA', 'Dancing Queen'],
    [1976, 'Hotel California', 'Eagles', 'Hotel California'],
    [1976, 'Songs in the Key of Life', 'Stevie Wonder', 'Sir Duke'],
    [1976, 'Station to Station', 'David Bowie', ''],
    [1976, 'Rastaman Vibration', 'Bob Marley & the Wailers', ''],
    [1976, 'Destroyer', 'Kiss', ''],
    [1976, 'Boston', 'Boston', 'More Than a Feeling'],
    [1976, '2112', 'Rush', ''],
    [1976, 'Blue Moves', 'Elton John', ''],

    [1977, 'News of the World', 'Queen', 'We Are the Champions'],
    [1977, 'Exodus', 'Bob Marley & the Wailers', 'Three Little Birds'],
    [1977, 'The Stranger', 'Billy Joel', 'Just the Way You Are'],
    [1977, "Never Mind the Bollocks, Here's the Sex Pistols", 'Sex Pistols', 'Anarchy in the U.K.'],
    [1977, 'The Clash', 'The Clash', ''],
    [1977, 'The Album', 'ABBA', ''],
    [1977, 'Bat Out of Hell', 'Meat Loaf', "Two Out of Three Ain't Bad"],
    [1977, 'I Remember Yesterday', 'Donna Summer', ''],
    [1977, 'Aja', 'Steely Dan', ''],
    [1977, 'Slowhand', 'Eric Clapton', ''],

    [1978, 'Jazz', 'Queen', "Don't Stop Me Now"],
    [1978, 'Some Girls', 'The Rolling Stones', 'Miss You'],
    [1978, 'The Kick Inside', 'Kate Bush', 'Wuthering Heights'],
    [1978, 'Lionheart', 'Kate Bush', ''],
    [1978, '52nd Street', 'Billy Joel', ''],
    [1978, 'Powerage', 'AC/DC', ''],
    [1978, "This Year's Model", 'Elvis Costello', ''],
    [1978, 'All Mod Cons', 'The Jam', ''],
    [1978, 'Nightflight to Venus', 'Boney M.', 'Rasputin'],
    [1978, 'More Songs About Buildings and Food', 'Talking Heads', 'Take Me to the River'],

    [1979, 'The Pleasure Principle', 'Gary Numan', 'Cars'],
    [1979, 'Reggatta de Blanc', 'The Police', 'Message in a Bottle'],
    [1979, 'London Calling', 'The Clash', ''],
    [1979, 'Eat to the Beat', 'Blondie', ''],
    [1979, 'Off the Wall', 'Michael Jackson', "Don't Stop 'Til You Get Enough"],
    [1979, 'Discovery', 'Electric Light Orchestra', "Don't Bring Me Down"],
    [1979, 'Spirits Having Flown', 'Bee Gees', ''],
    [1979, 'We Are Family', 'Sister Sledge', ''],
    [1979, 'Highway to Hell', 'AC/DC', 'Highway to Hell'],
    [1979, 'Setting Sons', 'The Jam', '']
];

// Genres and specialist tags are applied to each generated question.
// The pipe-delimited values keep this full WordPad file manageable.
const artistTagLines = {
    'Simon & Garfunkel': 'American music|folk rock|folk music|vocal duos|Paul Simon|Art Garfunkel',
    'Black Sabbath': 'UK music|heavy metal|hard rock|Birmingham music|Ozzy Osbourne',
    'Deep Purple': 'UK music|hard rock|heavy metal|rock bands|Ian Gillan|Ritchie Blackmore',
    'Free': 'UK music|blues rock|hard rock|Paul Rodgers|Andy Fraser',
    'Cat Stevens': 'UK music|folk rock|singer-songwriters|Yusuf Islam|acoustic music',
    'George Harrison': 'UK music|The Beatles|solo Beatles|rock music|singer-songwriters',
    'Neil Young': 'Canadian music|folk rock|country rock|singer-songwriters|guitarists',
    'Van Morrison': 'Northern Irish music|UK music|soul|folk rock|singer-songwriters',
    'Santana': 'American music|Latin rock|blues rock|Carlos Santana|guitarists',
    'John Lennon': 'UK music|The Beatles|solo Beatles|rock music|singer-songwriters',
    'David Bowie': 'UK music|glam rock|art rock|singer-songwriters|rock music',
    'T. Rex': 'UK music|glam rock|Marc Bolan|rock bands',
    'The Who': 'UK music|hard rock|British rock|Pete Townshend|rock bands',
    'The Rolling Stones': 'UK music|rock music|blues rock|Mick Jagger|Keith Richards',
    'Led Zeppelin': 'UK music|hard rock|blues rock|Jimmy Page|Robert Plant',
    'Rod Stewart': 'UK music|rock music|soul|male vocalists|singer-songwriters',
    'Joni Mitchell': 'Canadian music|folk music|folk rock|singer-songwriters|female vocalists',
    'Yes': 'UK music|progressive rock|art rock|rock bands|Jon Anderson',
    'Jethro Tull': 'UK music|progressive rock|folk rock|Ian Anderson|flute',
    'Stevie Wonder': 'American music|soul|Motown|funk|singer-songwriters|keyboards',
    'Slade': 'UK music|glam rock|rock bands|Noddy Holder|British rock',
    'War': 'American music|funk|soul|Latin rock|Los Angeles music',
    'Carly Simon': 'American music|soft rock|singer-songwriters|female vocalists',
    'Elton John': 'UK music|pop rock|piano rock|singer-songwriters|Bernie Taupin',
    'Pink Floyd': 'UK music|progressive rock|psychedelic rock|concept albums|rock bands',
    'Wings': 'UK music|pop rock|Paul McCartney|Linda McCartney|rock bands',
    'Genesis': 'UK music|progressive rock|rock bands|Peter Gabriel|Phil Collins',
    'Marvin Gaye': 'American music|soul|Motown|rhythm and blues|male vocalists',
    'Mike Oldfield': 'UK music|progressive rock|instrumental rock|multi-instrumentalists|Virgin Records',
    'Billy Joel': 'American music|pop rock|piano rock|singer-songwriters|pianists',
    'Queen': 'UK music|rock music|glam rock|Freddie Mercury|Brian May',
    'Eric Clapton': 'UK music|blues rock|rock music|guitarists|male vocalists',
    'Electric Light Orchestra': 'UK music|orchestral rock|pop rock|Jeff Lynne|rock bands',
    'Steely Dan': 'American music|jazz rock|soft rock|Donald Fagen|Walter Becker',
    'Kraftwerk': 'German music|electronic music|krautrock|synthesizers|pioneers of electronic music',
    'Bob Dylan': 'American music|folk rock|singer-songwriters|folk music|rock music',
    'Fleetwood Mac': 'UK music|American music|soft rock|Stevie Nicks|Lindsey Buckingham|Christine McVie',
    'Bee Gees': 'UK music|Australian music|pop music|disco|Barry Gibb|vocal harmonies',
    'Bruce Springsteen': 'American music|heartland rock|rock music|singer-songwriters|E Street Band',
    'Parliament': 'American music|P-Funk|funk|George Clinton|soul',
    'ABBA': 'Swedish music|Europop|pop music|vocal groups|Björn Ulvaeus|Benny Andersson',
    'Eagles': 'American music|country rock|soft rock|Don Henley|Glenn Frey',
    'Bob Marley & the Wailers': 'Jamaican music|reggae|roots reggae|Bob Marley|The Wailers',
    'Kiss': 'American music|hard rock|glam rock|Gene Simmons|Paul Stanley',
    'Boston': 'American music|arena rock|hard rock|Tom Scholz|rock bands',
    'Rush': 'Canadian music|progressive rock|hard rock|Geddy Lee|Neil Peart',
    'Sex Pistols': 'UK music|punk rock|British punk|Johnny Rotten|Steve Jones',
    'The Clash': 'UK music|punk rock|British punk|Joe Strummer|Mick Jones',
    'Meat Loaf': 'American music|rock music|theatrical rock|Jim Steinman|male vocalists',
    'Donna Summer': 'American music|disco|dance music|female vocalists|Giorgio Moroder',
    'Kate Bush': 'UK music|art pop|art rock|singer-songwriters|female vocalists',
    'AC/DC': 'Australian music|hard rock|rock bands|Angus Young|Malcolm Young',
    'Elvis Costello': 'UK music|new wave|pub rock|singer-songwriters|punk rock',
    'The Jam': 'UK music|mod revival|punk rock|new wave|Paul Weller',
    'Boney M.': 'German music|Eurodisco|disco|dance music|Frank Farian',
    'Talking Heads': 'American music|new wave|art rock|post-punk|David Byrne',
    'Gary Numan': 'UK music|synth-pop|new wave|electronic music|male vocalists',
    'The Police': 'UK music|new wave|reggae rock|Sting|Andy Summers|Stewart Copeland',
    'Blondie': 'American music|new wave|punk rock|Debbie Harry|New York music',
    'Michael Jackson': 'American music|pop music|disco|funk|soul|Quincy Jones',
    'Sister Sledge': 'American music|disco|dance music|soul|Nile Rodgers|Bernard Edwards'
};

// Album-specific themes. These are tags, not new questions.
const albumTagLines = {
    'Bridge over Troubled Water': 'Grammy Award-winning albums|folk rock classics',
    'Paranoid': 'heavy metal classics|War Pigs|debut-era metal',
    'Deep Purple in Rock': 'hard rock classics|Child in Time',
    'Fire and Water': 'All Right Now|blues rock classics',
    'Tea for the Tillerman': 'Father and Son|folk rock classics',
    'All Things Must Pass': 'triple albums|Phil Spector|Apple Records',
    'After the Gold Rush': 'Southern Man|folk rock classics',
    'Moondance': 'jazz soul|Into the Mystic',
    'Abraxas': 'Black Magic Woman|Oye Como Va|Latin rock classics',
    'John Lennon/Plastic Ono Band': 'debut solo albums|Plastic Ono Band|Mother',
    'Hunky Dory': 'Life on Mars?|Changes|Bowie albums',
    'Electric Warrior': 'glam rock classics|Marc Bolan',
    "Who's Next": 'Baba O\'Riley|Won\'t Get Fooled Again',
    'Sticky Fingers': 'Andy Warhol|album cover art|Brown Sugar',
    'Led Zeppelin IV': 'Stairway to Heaven|Black Dog|untitled albums',
    'Every Picture Tells a Story': 'Maggie May|Rod Stewart albums',
    'Blue': 'A Case of You|River|singer-songwriter classics',
    'Fragile': 'Roundabout|progressive rock classics',
    'Imagine': 'Imagine|solo Beatles',
    'Aqualung': 'Locomotive Breath|progressive rock classics',
    'The Rise and Fall of Ziggy Stardust and the Spiders from Mars': 'Ziggy Stardust|concept albums|Bowie albums|glam rock classics',
    'The Slider': 'Metal Guru|glam rock classics',
    'Harvest': 'Heart of Gold|Old Man|country rock',
    'Talking Book': 'Superstition|You Are the Sunshine of My Life',
    'Slayed?': 'Gudbuy T\' Jane|Slade albums',
    'Exile on Main St.': 'double albums|Tumbling Dice|rock classics',
    'Close to the Edge': 'progressive rock suites|long-form tracks',
    'The World Is a Ghetto': 'The Cisco Kid|funk classics',
    'No Secrets': 'You\'re So Vain|soft rock classics',
    'Honky Château': 'Rocket Man|Honky Cat',
    'The Dark Side of the Moon': 'concept albums|Money|Time|landmark albums',
    'Aladdin Sane': 'The Jean Genie|Bowie albums|glam rock classics',
    'Band on the Run': 'Jet|title tracks|Paul McCartney albums',
    'Innervisions': 'Higher Ground|Living for the City|Motown albums',
    'Goats Head Soup': 'Angie|Rolling Stones albums',
    'Selling England by the Pound': 'Firth of Fifth|progressive rock classics',
    "Let's Get It On": 'Motown albums|soul classics',
    'Tubular Bells': 'instrumental albums|The Exorcist|Virgin Records|long-form tracks',
    'Piano Man': 'Piano Man|Billy Joel albums',
    'Quadrophenia': 'rock operas|concept albums|mod culture',
    'Sheer Heart Attack': 'Killer Queen|Queen albums',
    'Diamond Dogs': 'Rebel Rebel|dystopian themes|Bowie albums',
    '461 Ocean Boulevard': 'I Shot the Sheriff|reggae covers',
    'Eldorado': 'concept albums|orchestral rock|Jeff Lynne',
    'Court and Spark': 'Help Me|jazz pop|Joni Mitchell albums',
    'The Lamb Lies Down on Broadway': 'double albums|concept albums|Peter Gabriel',
    'Old New Borrowed and Blue': 'Everyday|Slade albums',
    'Pretzel Logic': 'Rikki Don\'t Lose That Number|jazz rock',
    'Autobahn': 'electronic music pioneers|motorway themes|long-form tracks',
    'Caribou': 'The Bitch Is Back|Don\'t Let the Sun Go Down on Me',
    'A Night at the Opera': 'Bohemian Rhapsody|Queen albums|landmark albums',
    'Wish You Were Here': 'Shine On You Crazy Diamond|Pink Floyd albums',
    'Blood on the Tracks': 'Tangled Up in Blue|singer-songwriter classics',
    'Physical Graffiti': 'double albums|Kashmir|Led Zeppelin albums',
    'Fleetwood Mac': 'Rhiannon|Landslide|Stevie Nicks era',
    'Main Course': 'Jive Talkin\'|Bee Gees albums|transition to disco',
    'Born to Run': 'Thunder Road|Born to Run|heartland rock classics',
    'Mothership Connection': 'P-Funk|George Clinton|funk classics',
    'Venus and Mars': 'Listen to What the Man Said|Wings albums',
    'Captain Fantastic and the Brown Dirt Cowboy': 'concept albums|autobiographical songs|Bernie Taupin',
    'A Day at the Races': 'Somebody to Love|Queen albums',
    'Arrival': 'Dancing Queen|Knowing Me Knowing You|ABBA albums',
    'Hotel California': 'Hotel California|New Kid in Town|Eagles albums',
    'Songs in the Key of Life': 'double albums|Sir Duke|Isn\'t She Lovely|Motown albums',
    'Station to Station': 'Thin White Duke|Bowie albums|art rock classics',
    'Rastaman Vibration': 'Roots Rock Reggae|Bob Marley albums',
    'Destroyer': 'Detroit Rock City|Beth|Kiss albums',
    'Boston': 'debut albums|More Than a Feeling|arena rock classics',
    '2112': 'concept albums|progressive rock suites|Rush albums',
    'Blue Moves': 'double albums|Sorry Seems to Be the Hardest Word',
    'News of the World': 'We Are the Champions|We Will Rock You|Queen albums',
    'Exodus': 'Three Little Birds|Jamming|reggae classics',
    'The Stranger': 'Just the Way You Are|Vienna|Billy Joel albums',
    "Never Mind the Bollocks, Here's the Sex Pistols": 'debut albums|Anarchy in the U.K.|punk rock classics',
    'The Clash': 'debut albums|London punk|punk rock classics',
    'The Album': 'ABBA - The Album|Take a Chance on Me|The Name of the Game',
    'Bat Out of Hell': 'Paradise by the Dashboard Light|Jim Steinman|theatrical rock',
    'I Remember Yesterday': 'I Feel Love|Giorgio Moroder|disco classics',
    'Aja': 'Peg|Deacon Blues|jazz rock classics',
    'Slowhand': 'Lay Down Sally|Wonderful Tonight|Eric Clapton albums',
    'Jazz': 'Don\'t Stop Me Now|Fat Bottomed Girls|Queen albums',
    'Some Girls': 'Miss You|Beast of Burden|Rolling Stones albums',
    'The Kick Inside': 'debut albums|Wuthering Heights|Kate Bush albums',
    'Lionheart': 'Wow|Kate Bush albums',
    '52nd Street': 'My Life|Honesty|Billy Joel albums',
    'Powerage': 'Riff Raff|AC/DC albums',
    "This Year's Model": 'Pump It Up|new wave classics',
    'All Mod Cons': 'Down in the Tube Station at Midnight|mod revival',
    'Nightflight to Venus': 'Rasputin|Rivers of Babylon|Eurodisco classics',
    'More Songs About Buildings and Food': 'Take Me to the River|Brian Eno|new wave classics',
    'The Pleasure Principle': 'Cars|synth-pop classics|electronic music',
    'Reggatta de Blanc': 'Message in a Bottle|Walking on the Moon|The Police albums',
    'London Calling': 'double albums|1979 UK release|1980 US release|punk rock classics',
    'Eat to the Beat': 'Dreaming|Atomic|Blondie albums',
    'Off the Wall': 'Don\'t Stop Til You Get Enough|Rock with You|Quincy Jones',
    'Discovery': 'Don\'t Bring Me Down|Shine a Little Love|ELO albums',
    'Spirits Having Flown': 'Tragedy|Too Much Heaven|Bee Gees albums',
    'We Are Family': 'We Are Family|disco classics|Chic production',
    'Highway to Hell': 'Highway to Hell|Bon Scott|hard rock classics',
    'Setting Sons': 'Eton Rifles|Paul Weller|The Jam albums'
};

const splitTags = value => value ? value.split('|') : [];
const normalise = text => String(text).trim().toLowerCase().replace(/\s+/g, ' ');

if (albumFacts.length !== 100) {
    throw new Error('Pack 143 requires exactly 100 album facts.');
}
const usedAlbums = new Set();
for (const [year, album, artist, song] of albumFacts) {
    if (!Number.isInteger(year) || year < 1970 || year > 1979 ||
        !album || !artist || typeof song !== 'string' || !artistTagLines[artist] ||
        !albumTagLines[album]) {
        throw new Error('Invalid or untagged Pack 143 album: ' + album);
    }
    const key = normalise(album);
    if (usedAlbums.has(key)) throw new Error('Repeated Pack 143 album: ' + album);
    usedAlbums.add(key);
}

// Original same-year answer pool and answer rotation preserved.
function getWrongAnswers(year, artist, album, isAlbumQuestion, index) {
    const sameYear = albumFacts.filter(fact => fact[0] === year);
    const pool = isAlbumQuestion
        ? sameYear.filter(fact => fact[2] !== artist).map(fact => fact[1])
        : [...new Set(sameYear.map(fact => fact[2]))]
            .filter(otherArtist => otherArtist !== artist);

    const wrong = [];
    let cursor = (index * 3 + 1) % pool.length;
    while (wrong.length < 3) {
        const choice = pool[cursor];
        if (choice !== album && choice !== artist && !wrong.includes(choice)) {
            wrong.push(choice);
        }
        cursor = (cursor + 1) % pool.length;
    }
    return wrong;
}

const questions = albumFacts.map(([year, album, artist, song], index) => {
    const isAlbumQuestion = song.length > 0;
    const correctAnswer = isAlbumQuestion ? album : artist;
    const answers = getWrongAnswers(year, artist, album, isAlbumQuestion, index);
    answers.splice(index % 4, 0, correctAnswer);

    // A specific clue avoids the otherwise generic title 'The Album'.
    const question = album === 'The Album'
        ? 'Which group released the album "The Album", featuring "Take a Chance on Me"?'
        : isAlbumQuestion
            ? `Which album features "${song}" by ${artist}?`
            : `Which artist released the album "${album}"?`;

    const tags = [...new Set([
        '1970s', 'Albums', isAlbumQuestion ? 'Album tracks' : 'Artists',
        'Music', 'album trivia', 'album history', String(year),
        isAlbumQuestion ? 'album identification' : 'artist identification',
        album, artist, ...splitTags(artistTagLines[artist]),
        ...splitTags(albumTagLines[album]),
        ...(song ? [song, 'album tracks'] : [])
    ])];

    return {
        id: 'music_' + (12301 + index),
        category: 'Music',
        question,
        answers,
        correctAnswer,
        difficulty: index % 13 === 0 ? 'Hard' : 'Medium',
        tags,
        dailyEligible: true
    };
});

const ids = new Set();
const texts = new Set();
for (const [index, q] of questions.entries()) {
    const key = normalise(q.question);
    if (q.id !== 'music_' + (12301 + index) || ids.has(q.id) ||
        texts.has(key) || q.answers.length !== 4 ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        !q.answers.includes(q.correctAnswer) || q.tags.length < 12 ||
        !['Medium', 'Hard'].includes(q.difficulty) || q.dailyEligible !== true) {
        throw new Error('Pack 143 answer or ID error: ' + q.id);
    }
    ids.add(q.id);
    texts.add(key);
}

module.exports = questions;
