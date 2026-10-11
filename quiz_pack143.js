
// quiz_pack143.js
// PuzzlePilot - The Bigggggg Quiz
// Music Albums: Pack 143 - The 1970s
// 100 questions, music_12301 to music_12400
// This pack is not yet connected to quiz_bank.js.

// Each entry: [year, album, artist, song].
// An empty song asks which artist made the album.
// A named song asks which original studio album contains it.
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

const normalise = text => text.trim().toLowerCase().replace(/\s+/g, ' ');

if (albumFacts.length !== 100) {
    throw new Error('Pack 143 requires exactly 100 album facts.');
}

const usedAlbums = new Set();
for (const [year, album, artist, song] of albumFacts) {
    if (!Number.isInteger(year) || year < 1970 || year > 1979 ||
        !album || !artist || typeof song !== 'string') {
        throw new Error('Invalid Pack 143 album fact: ' + album);
    }
    const key = normalise(album);
    if (usedAlbums.has(key)) {
        throw new Error('Repeated Pack 143 album: ' + album);
    }
    usedAlbums.add(key);
}

function getWrongAnswers(year, artist, album, isAlbumQuestion, index) {
    // Same-year distractors, excluding the correct artist or album.
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

    return {
        id: 'music_' + (12301 + index),
        category: 'Music',
        question: isAlbumQuestion
            ? `Which ${year} album features "${song}" by ${artist}?`
            : `Which artist released the ${year} album "${album}"?`,
        answers,
        correctAnswer,
        difficulty: index % 13 === 0 ? 'Hard' : 'Medium',
        tags: ['1970s', 'Albums', isAlbumQuestion ? 'Album tracks' : 'Artists'],
        dailyEligible: true
    };
});

const ids = new Set();
for (const q of questions) {
    if (ids.has(q.id) || q.answers.length !== 4 ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        !q.answers.includes(q.correctAnswer)) {
        throw new Error('Pack 143 answer or ID error: ' + q.id);
    }
    ids.add(q.id);
}

module.exports = questions;
