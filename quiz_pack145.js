 // quiz_pack145.js
// PuzzlePilot - The Bigggggg Quiz
// Music Albums: Pack 145 - The 1990s
// 100 questions, music_12501 to music_12600
// Tagging audit. Original album facts, IDs, answers and difficulty retained.
// Years kept in metadata rather than routine question wording.

// Each fact is [release year, album, artist, featured track (or empty)].
const albumFacts = [
    [1990, "Violator", "Depeche Mode", "Personal Jesus"],
    [1990, "Listen Without Prejudice Vol. 1", "George Michael", "Freedom! '90"],
    [1990, "Rhythm of Love", "Kylie Minogue", "Better the Devil You Know"],
    [1990, "The Razors Edge", "AC/DC", "Thunderstruck"],
    [1990, "Wilson Phillips", "Wilson Phillips", "Hold On"],
    [1990, "Behaviour", "Pet Shop Boys", ""],
    [1990, "The La's", "The La's", ""],
    [1990, "Shake Your Money Maker", "The Black Crowes", ""],
    [1990, "Pills 'n' Thrills and Bellyaches", "Happy Mondays", ""],
    [1990, "I'm Breathless", "Madonna", ""],
    [1991, "Nevermind", "Nirvana", "Smells Like Teen Spirit"],
    [1991, "Ten", "Pearl Jam", "Alive"],
    [1991, "Use Your Illusion I", "Guns N' Roses", "November Rain"],
    [1991, "Blood Sugar Sex Magik", "Red Hot Chili Peppers", "Under the Bridge"],
    [1991, "Dangerous", "Michael Jackson", "Black or White"],
    [1991, "Use Your Illusion II", "Guns N' Roses", ""],
    [1991, "Achtung Baby", "U2", ""],
    [1991, "Diamonds and Pearls", "Prince and the New Power Generation", ""],
    [1991, "Waking Up the Neighbours", "Bryan Adams", ""],
    [1991, "Stars", "Simply Red", ""],
    [1992, "The Chronic", "Dr. Dre", "Nuthin' but a 'G' Thang"],
    [1992, "Unplugged", "Eric Clapton", "Tears in Heaven"],
    [1992, "Core", "Stone Temple Pilots", "Plush"],
    [1992, "Experience", "The Prodigy", "Out of Space"],
    [1992, "Connected", "Stereo MC's", "Connected"],
    [1992, "The Predator", "Ice Cube", ""],
    [1992, "Little Earthquakes", "Tori Amos", ""],
    [1992, "Celine Dion", "Celine Dion", ""],
    [1992, "Images and Words", "Dream Theater", ""],
    [1992, "Dirt", "Alice in Chains", ""],
    [1993, "In Utero", "Nirvana", "Heart-Shaped Box"],
    [1993, "Debut", "Björk", "Human Behaviour"],
    [1993, "Music Box", "Mariah Carey", "Dreamlover"],
    [1993, "Tuesday Night Music Club", "Sheryl Crow", "All I Wanna Do"],
    [1993, "Siamese Dream", "The Smashing Pumpkins", "Today"],
    [1993, "Vs.", "Pearl Jam", ""],
    [1993, "Everybody Else Is Doing It, So Why Can't We?", "The Cranberries", ""],
    [1993, "Doggystyle", "Snoop Doggy Dogg", ""],
    [1993, "Very", "Pet Shop Boys", ""],
    [1993, "janet.", "Janet Jackson", ""],
    [1994, "Definitely Maybe", "Oasis", "Live Forever"],
    [1994, "Parklife", "Blur", "Girls & Boys"],
    [1994, "Dookie", "Green Day", "Basket Case"],
    [1994, "Superunknown", "Soundgarden", "Black Hole Sun"],
    [1994, "CrazySexyCool", "TLC", "Waterfalls"],
    [1994, "His 'n' Hers", "Pulp", ""],
    [1994, "The Downward Spiral", "Nine Inch Nails", ""],
    [1994, "The Division Bell", "Pink Floyd", ""],
    [1994, "Illmatic", "Nas", ""],
    [1994, "Protection", "Massive Attack", ""],
    [1995, "Different Class", "Pulp", "Common People"],
    [1995, "The Bends", "Radiohead", "High and Dry"],
    [1995, "Mellon Collie and the Infinite Sadness", "The Smashing Pumpkins", "1979"],
    [1995, "Tragic Kingdom", "No Doubt", "Don't Speak"],
    [1995, "Garbage", "Garbage", "Only Happy When It Rains"],
    [1995, "To Bring You My Love", "PJ Harvey", ""],
    [1995, "The Great Escape", "Blur", ""],
    [1995, "Life", "Simply Red", ""],
    [1995, "Post", "Björk", ""],
    [1995, "HIStory: Past, Present and Future, Book I", "Michael Jackson", ""],
    [1996, "Spice", "Spice Girls", "Wannabe"],
    [1996, "Everything Must Go", "Manic Street Preachers", "A Design for Life"],
    [1996, "Travelling Without Moving", "Jamiroquai", "Virtual Insanity"],
    [1996, "Coming Up", "Suede", "Trash"],
    [1996, "The Score", "Fugees", "Killing Me Softly with His Song"],
    [1996, "Placebo", "Placebo", ""],
    [1996, "Odelay", "Beck", ""],
    [1996, "Antichrist Superstar", "Marilyn Manson", ""],
    [1996, "Razorblade Suitcase", "Bush", ""],
    [1996, "Older", "George Michael", ""],
    [1997, "OK Computer", "Radiohead", "Karma Police"],
    [1997, "Homogenic", "Björk", "Jóga"],
    [1997, "Be Here Now", "Oasis", "D'You Know What I Mean?"],
    [1997, "The Fat of the Land", "The Prodigy", "Firestarter"],
    [1997, "The Colour and the Shape", "Foo Fighters", "Everlong"],
    [1997, "Ladies and Gentlemen We Are Floating in Space", "Spiritualized", ""],
    [1997, "Butterfly", "Mariah Carey", ""],
    [1997, "Let's Talk About Love", "Celine Dion", ""],
    [1997, "Homework", "Daft Punk", ""],
    [1997, "Life thru a Lens", "Robbie Williams", ""],
    [1998, "Mezzanine", "Massive Attack", "Teardrop"],
    [1998, "Ray of Light", "Madonna", "Frozen"],
    [1998, "The Miseducation of Lauryn Hill", "Lauryn Hill", "Doo Wop (That Thing)"],
    [1998, "Version 2.0", "Garbage", "Push It"],
    [1998, "International Velvet", "Catatonia", "Road Rage"],
    [1998, "This Is My Truth Tell Me Yours", "Manic Street Preachers", ""],
    [1998, "Celebrity Skin", "Hole", ""],
    [1998, "Moon Safari", "Air", ""],
    [1998, "The Boy with the Arab Strap", "Belle and Sebastian", ""],
    [1998, "The Globe Sessions", "Sheryl Crow", ""],
    [1999, "Californication", "Red Hot Chili Peppers", "Scar Tissue"],
    [1999, "The Slim Shady LP", "Eminem", "My Name Is"],
    [1999, "Millennium", "Backstreet Boys", "I Want It That Way"],
    [1999, "Play", "Moby", "Porcelain"],
    [1999, "Showbiz", "Muse", "Muscle Museum"],
    [1999, "The Man Who", "Travis", ""],
    [1999, "Surrender", "The Chemical Brothers", ""],
    [1999, "13", "Blur", ""],
    [1999, "The Battle of Los Angeles", "Rage Against the Machine", ""],
    [1999, "Enema of the State", "Blink-182", ""]
];

// Artist, genre and specialist names for every question.
const artistTagLines = {
    "Depeche Mode": "UK music|synth-pop|electronic music|alternative rock|Dave Gahan|Martin Gore",
    "George Michael": "UK music|pop music|soul|singer-songwriters|male vocalists",
    "Kylie Minogue": "Australian music|dance-pop|pop music|female vocalists",
    "AC/DC": "Australian music|hard rock|rock bands|Angus Young|Malcolm Young",
    "Wilson Phillips": "American music|pop rock|soft rock|vocal trios|Carnie Wilson|Wendy Wilson|Chynna Phillips",
    "Pet Shop Boys": "UK music|synth-pop|dance-pop|electronic music|Neil Tennant|Chris Lowe",
    "The La's": "UK music|Liverpool music|indie rock|jangle pop|Lee Mavers|Britpop precursors",
    "The Black Crowes": "American music|southern rock|blues rock|Chris Robinson|rock bands",
    "Happy Mondays": "UK music|Manchester music|Madchester|baggy|alternative dance|Shaun Ryder",
    "Madonna": "American music|pop music|dance-pop|female vocalists|singer-songwriters",
    "Nirvana": "American music|Seattle music|grunge|alternative rock|Kurt Cobain",
    "Pearl Jam": "American music|Seattle music|grunge|alternative rock|Eddie Vedder",
    "Guns N' Roses": "American music|hard rock|rock bands|Axl Rose|Slash",
    "Red Hot Chili Peppers": "American music|funk rock|alternative rock|Anthony Kiedis|Flea",
    "Michael Jackson": "American music|pop music|rhythm and blues|dance-pop|male vocalists",
    "U2": "Irish music|rock music|alternative rock|Bono|The Edge",
    "Prince and the New Power Generation": "American music|Minneapolis sound|funk|rhythm and blues|Prince|New Power Generation",
    "Bryan Adams": "Canadian music|pop rock|rock music|singer-songwriters",
    "Simply Red": "UK music|blue-eyed soul|sophisti-pop|pop music|Mick Hucknall",
    "Dr. Dre": "American music|hip-hop|West Coast hip-hop|G-funk|rap music|N.W.A",
    "Eric Clapton": "UK music|blues rock|guitarists|male vocalists|acoustic music",
    "Stone Temple Pilots": "American music|alternative rock|grunge|Scott Weiland|rock bands",
    "The Prodigy": "UK music|electronic dance music|breakbeat|rave|big beat|Liam Howlett",
    "Stereo MC's": "UK music|hip-hop|alternative dance|electronic music|British rap",
    "Ice Cube": "American music|hip-hop|West Coast hip-hop|gangsta rap|N.W.A",
    "Tori Amos": "American music|alternative rock|piano rock|singer-songwriters|female vocalists",
    "Celine Dion": "Canadian music|pop music|adult contemporary|female vocalists|power ballads",
    "Dream Theater": "American music|progressive metal|progressive rock|John Petrucci",
    "Alice in Chains": "American music|Seattle music|grunge|heavy metal|Layne Staley|Jerry Cantrell",
    "Björk": "Icelandic music|electronic music|art pop|experimental pop|female vocalists",
    "Mariah Carey": "American music|pop music|rhythm and blues|soul|female vocalists",
    "Sheryl Crow": "American music|pop rock|roots rock|singer-songwriters|female vocalists",
    "The Smashing Pumpkins": "American music|alternative rock|Chicago music|Billy Corgan|rock bands",
    "The Cranberries": "Irish music|alternative rock|indie rock|Dolores O'Riordan",
    "Snoop Doggy Dogg": "American music|West Coast hip-hop|G-funk|rap music|Snoop Dogg",
    "Janet Jackson": "American music|rhythm and blues|dance-pop|female vocalists|Jimmy Jam and Terry Lewis",
    "Oasis": "UK music|Manchester music|Britpop|alternative rock|Liam Gallagher|Noel Gallagher",
    "Blur": "UK music|Britpop|alternative rock|Damon Albarn|Graham Coxon",
    "Green Day": "American music|pop punk|punk rock|Billie Joe Armstrong|rock bands",
    "Soundgarden": "American music|Seattle music|grunge|hard rock|Chris Cornell",
    "TLC": "American music|rhythm and blues|hip-hop soul|girl groups|T-Boz|Chilli|Lisa Left Eye Lopes",
    "Pulp": "UK music|Britpop|Sheffield music|alternative rock|Jarvis Cocker",
    "Nine Inch Nails": "American music|industrial rock|alternative rock|Trent Reznor",
    "Pink Floyd": "UK music|progressive rock|art rock|David Gilmour|rock bands",
    "Nas": "American music|hip-hop|East Coast hip-hop|New York rap",
    "Massive Attack": "UK music|Bristol music|trip-hop|electronic music|downtempo",
    "Radiohead": "UK music|alternative rock|art rock|Thom Yorke|Jonny Greenwood",
    "No Doubt": "American music|ska punk|alternative rock|pop rock|Gwen Stefani",
    "Garbage": "Scottish-American music|alternative rock|electronic rock|Shirley Manson|Butch Vig",
    "PJ Harvey": "UK music|alternative rock|indie rock|singer-songwriters|female vocalists",
    "Spice Girls": "UK music|British pop|girl groups|teen pop|Girl Power",
    "Manic Street Preachers": "Welsh music|UK music|alternative rock|Britpop|James Dean Bradfield|Nicky Wire",
    "Jamiroquai": "UK music|acid jazz|funk|dance music|Jay Kay",
    "Suede": "UK music|Britpop|alternative rock|Brett Anderson",
    "Fugees": "American music|East Coast hip-hop|hip-hop soul|Lauryn Hill|Wyclef Jean|Pras Michel",
    "Placebo": "UK music|alternative rock|indie rock|Brian Molko",
    "Beck": "American music|alternative rock|folk rock|hip-hop influences|singer-songwriters",
    "Marilyn Manson": "American music|industrial metal|alternative metal|shock rock",
    "Bush": "UK music|post-grunge|alternative rock|Gavin Rossdale",
    "Foo Fighters": "American music|alternative rock|post-grunge|Dave Grohl",
    "Spiritualized": "UK music|space rock|neo-psychedelia|Jason Pierce",
    "Daft Punk": "French music|French house|electronic dance music|Thomas Bangalter|Guy-Manuel de Homem-Christo",
    "Robbie Williams": "UK music|British pop|pop rock|male vocalists|Take That",
    "Lauryn Hill": "American music|hip-hop soul|neo soul|East Coast hip-hop|female vocalists|Fugees",
    "Catatonia": "Welsh music|UK music|Britpop|alternative rock|Cerys Matthews",
    "Hole": "American music|alternative rock|grunge|Courtney Love",
    "Air": "French music|downtempo|electronic music|French touch|ambient pop",
    "Belle and Sebastian": "Scottish music|UK music|indie pop|chamber pop|Stuart Murdoch",
    "Eminem": "American music|hip-hop|rap music|Detroit music|Dr. Dre",
    "Backstreet Boys": "American music|boy bands|teen pop|pop music|vocal groups",
    "Moby": "American music|electronic music|downtempo|dance music|ambient music",
    "Muse": "UK music|alternative rock|progressive rock|Matt Bellamy|rock bands",
    "Travis": "Scottish music|UK music|Britpop|alternative rock|Fran Healy",
    "The Chemical Brothers": "UK music|electronic dance music|big beat|Tom Rowlands|Ed Simons",
    "Rage Against the Machine": "American music|rap metal|alternative metal|political rock|Tom Morello|Zack de la Rocha",
    "Blink-182": "American music|pop punk|punk rock|Tom DeLonge|Mark Hoppus|Travis Barker"
};

// Relevant tracks and album-specific themes (only for the named album).
const albumTagLines = {
    "Violator": "Enjoy the Silence|Personal Jesus|classic synth-pop",
    "Listen Without Prejudice Vol. 1": "Freedom! '90|Praying for Time|George Michael solo albums",
    "Rhythm of Love": "Better the Devil You Know|Step Back in Time|Kylie Minogue albums",
    "The Razors Edge": "Thunderstruck|Moneytalks|AC/DC albums",
    "Wilson Phillips": "Hold On|Release Me|debut albums",
    "Behaviour": "Being Boring|So Hard|Pet Shop Boys albums",
    "The La's": "There She Goes|debut albums|Liverpool indie",
    "Shake Your Money Maker": "Hard to Handle|She Talks to Angels|debut albums",
    "Pills 'n' Thrills and Bellyaches": "Step On|Kinky Afro|Madchester albums",
    "I'm Breathless": "Dick Tracy|Vogue|Hanky Panky|soundtrack albums",
    "Nevermind": "Smells Like Teen Spirit|Come as You Are|landmark albums",
    "Ten": "Alive|Jeremy|debut albums",
    "Use Your Illusion I": "November Rain|Don't Cry|double release",
    "Blood Sugar Sex Magik": "Under the Bridge|Give It Away|funk rock classics",
    "Dangerous": "Black or White|Remember the Time|Michael Jackson albums",
    "Use Your Illusion II": "Civil War|You Could Be Mine|double release",
    "Achtung Baby": "One|Mysterious Ways|U2 albums",
    "Diamonds and Pearls": "Cream|Gett Off|New Power Generation",
    "Waking Up the Neighbours": "Everything I Do (I Do It for You)|Can't Stop This Thing We Started",
    "Stars": "Stars|Something Got Me Started|Simply Red albums",
    "The Chronic": "Nuthin' but a G Thang|Let Me Ride|G-funk classics|debut solo albums",
    "Unplugged": "Tears in Heaven|MTV Unplugged|live albums|acoustic performances",
    "Core": "Plush|Sex Type Thing|debut albums",
    "Experience": "Out of Space|Charly|debut albums|rave music",
    "Connected": "Connected|Step It Up|Stereo MC's albums",
    "The Predator": "It Was a Good Day|Check Yo Self|West Coast rap",
    "Little Earthquakes": "Silent All These Years|Crucify|debut albums",
    "Celine Dion": "If You Asked Me To|Love Can Move Mountains|Celine Dion albums",
    "Images and Words": "Pull Me Under|progressive metal classics",
    "Dirt": "Would?|Rooster|grunge classics",
    "In Utero": "Heart-Shaped Box|All Apologies|Nirvana albums",
    "Debut": "Human Behaviour|Venus as a Boy|Björk albums",
    "Music Box": "Dreamlover|Hero|Mariah Carey albums",
    "Tuesday Night Music Club": "All I Wanna Do|Leaving Las Vegas|debut albums",
    "Siamese Dream": "Today|Cherub Rock|Smashing Pumpkins albums",
    "Vs.": "Daughter|Animal|Pearl Jam albums",
    "Everybody Else Is Doing It, So Why Can't We?": "Linger|Dreams|debut albums",
    "Doggystyle": "Gin and Juice|What's My Name?|debut albums",
    "Very": "Go West|Can You Forgive Her?|Pet Shop Boys albums",
    "janet.": "That's the Way Love Goes|Again|Janet Jackson albums",
    "Definitely Maybe": "Live Forever|Supersonic|debut albums|Britpop classics",
    "Parklife": "Girls & Boys|Parklife|Britpop classics",
    "Dookie": "Basket Case|When I Come Around|pop punk classics",
    "Superunknown": "Black Hole Sun|Spoonman|grunge classics",
    "CrazySexyCool": "Waterfalls|Creep|TLC albums",
    "His 'n' Hers": "Babies|Do You Remember the First Time?|Pulp albums",
    "The Downward Spiral": "Closer|Hurt|industrial rock classics",
    "The Division Bell": "High Hopes|Coming Back to Life|Pink Floyd albums",
    "Illmatic": "N.Y. State of Mind|The World Is Yours|debut albums|hip-hop classics",
    "Protection": "Protection|Karmacoma|trip-hop classics",
    "Different Class": "Common People|Disco 2000|Britpop classics",
    "The Bends": "High and Dry|Fake Plastic Trees|Radiohead albums",
    "Mellon Collie and the Infinite Sadness": "1979|Tonight Tonight|double albums",
    "Tragic Kingdom": "Don't Speak|Just a Girl|ska punk classics",
    "Garbage": "Only Happy When It Rains|Stupid Girl|debut albums",
    "To Bring You My Love": "Down by the Water|C'mon Billy|PJ Harvey albums",
    "The Great Escape": "Country House|The Universal|Blur albums",
    "Life": "Fairground|Never Never Love|Simply Red albums",
    "Post": "Army of Me|It's Oh So Quiet|Björk albums",
    "HIStory: Past, Present and Future, Book I": "Scream|Earth Song|double albums|greatest hits and new recordings",
    "Spice": "Wannabe|Say You'll Be There|debut albums|Girl Power",
    "Everything Must Go": "A Design for Life|Everything Must Go|Manic Street Preachers albums",
    "Travelling Without Moving": "Virtual Insanity|Cosmic Girl|acid jazz classics",
    "Coming Up": "Trash|Beautiful Ones|Suede albums",
    "The Score": "Killing Me Softly with His Song|Ready or Not|Fu-Gee-La|hip-hop classics",
    "Placebo": "Nancy Boy|36 Degrees|debut albums",
    "Odelay": "Where It's At|Devils Haircut|Beck albums",
    "Antichrist Superstar": "The Beautiful People|concept albums|industrial metal",
    "Razorblade Suitcase": "Swallowed|Greedy Fly|Bush albums",
    "Older": "Jesus to a Child|Fastlove|George Michael albums",
    "OK Computer": "Karma Police|Paranoid Android|No Surprises|landmark albums",
    "Homogenic": "Jóga|Bachelorette|Björk albums",
    "Be Here Now": "D'You Know What I Mean?|Stand by Me|Oasis albums",
    "The Fat of the Land": "Firestarter|Breathe|Smack My Bitch Up|big beat classics",
    "The Colour and the Shape": "Everlong|Monkey Wrench|Foo Fighters albums",
    "Ladies and Gentlemen We Are Floating in Space": "Come Together|Broken Heart|space rock classics",
    "Butterfly": "Honey|My All|Mariah Carey albums",
    "Let's Talk About Love": "My Heart Will Go On|Tell Him|Celine Dion albums",
    "Homework": "Around the World|Da Funk|debut albums|French house classics",
    "Life thru a Lens": "Angels|Let Me Entertain You|debut solo albums",
    "Mezzanine": "Teardrop|Angel|trip-hop classics",
    "Ray of Light": "Frozen|Ray of Light|William Orbit|Madonna albums",
    "The Miseducation of Lauryn Hill": "Doo Wop (That Thing)|Ex-Factor|debut solo albums|neo soul classics",
    "Version 2.0": "Push It|I Think I'm Paranoid|Garbage albums",
    "International Velvet": "Road Rage|Mulder and Scully|Catatonia albums",
    "This Is My Truth Tell Me Yours": "If You Tolerate This Your Children Will Be Next|The Everlasting|Manic Street Preachers albums",
    "Celebrity Skin": "Celebrity Skin|Malibu|Hole albums",
    "Moon Safari": "Sexy Boy|All I Need|debut albums|French electronic music",
    "The Boy with the Arab Strap": "Sleep the Clock Around|Dirty Dream Number Two|indie pop classics",
    "The Globe Sessions": "My Favorite Mistake|Anything but Down|Sheryl Crow albums",
    "Californication": "Scar Tissue|Otherside|Red Hot Chili Peppers albums",
    "The Slim Shady LP": "My Name Is|Guilty Conscience|debut major-label albums",
    "Millennium": "I Want It That Way|Larger than Life|Backstreet Boys albums",
    "Play": "Porcelain|Natural Blues|Why Does My Heart Feel So Bad?|electronic music classics",
    "Showbiz": "Muscle Museum|Sunburn|debut albums",
    "The Man Who": "Why Does It Always Rain on Me?|Writing to Reach You|Travis albums",
    "Surrender": "Hey Boy Hey Girl|Let Forever Be|Chemical Brothers albums",
    "13": "Tender|Coffee & TV|Blur albums",
    "The Battle of Los Angeles": "Guerrilla Radio|Sleep Now in the Fire|rap metal classics",
    "Enema of the State": "All the Small Things|What's My Age Again?|pop punk classics"
};

const normalise = value => String(value).trim().toLowerCase().replace(/\s+/g, ' ');
const splitTags = value => value ? value.split('|') : [];

if (albumFacts.length !== 100) {
    throw new Error('Pack 145 must contain exactly 100 album facts.');
}

const seenAlbums = new Set();
for (const [year, album, artist, song] of albumFacts) {
    if (!Number.isInteger(year) || year < 1990 || year > 1999 ||
        !album || !artist || typeof song !== 'string' ||
        !artistTagLines[artist] || !albumTagLines[album]) {
        throw new Error('Invalid or untagged Pack 145 album: ' + album);
    }
    const key = normalise(album);
    if (seenAlbums.has(key)) {
        throw new Error('Repeated album in Pack 145: ' + album);
    }
    seenAlbums.add(key);
}

// Retain the exact original same-year distractors and their button positions.
function chooseWrongAnswers(year, album, artist, wantsAlbum, index) {
    const sameYear = albumFacts.filter(fact => fact[0] === year);
    const candidates = wantsAlbum
        ? sameYear.filter(fact => fact[2] !== artist).map(fact => fact[1])
        : [...new Set(sameYear.map(fact => fact[2]))]
            .filter(name => name !== artist);
    if (candidates.length < 3) {
        throw new Error('Not enough distractors for ' + album);
    }
    const wrong = [];
    let pos = (index * 3 + 1) % candidates.length;
    while (wrong.length < 3) {
        const candidate = candidates[pos];
        if (candidate !== album && candidate !== artist &&
            !wrong.includes(candidate)) {
            wrong.push(candidate);
        }
        pos = (pos + 1) % candidates.length;
    }
    return wrong;
}

const questions = albumFacts.map(([year, album, artist, song], index) => {
    const wantsAlbum = song.length > 0;
    const correctAnswer = wantsAlbum ? album : artist;
    const answers = chooseWrongAnswers(year, album, artist, wantsAlbum, index);
    answers.splice(index % 4, 0, correctAnswer);

    const question = wantsAlbum
        ? `Which album includes "${song}" by ${artist}?`
        : `Which artist released the album "${album}"?`;

    const tags = [...new Set([
        '1990s', 'Albums', wantsAlbum ? 'Album tracks' : 'Artists',
        'Music', 'album trivia', 'album history', String(year),
        wantsAlbum ? 'album identification' : 'artist identification',
        album, artist,
        ...splitTags(artistTagLines[artist]),
        ...splitTags(albumTagLines[album]),
        ...(song ? [song, 'album tracks'] : [])
    ])];

    return {
        id: 'music_' + (12501 + index),
        category: 'Music',
        question,
        answers,
        correctAnswer,
        difficulty: index % 13 === 0 ? 'Hard' : 'Medium',
        tags,
        dailyEligible: true
    };
});

// Run validation when the pack is loaded by the quiz bank.
const ids = new Set();
const texts = new Set();
for (const [index, question] of questions.entries()) {
    const key = normalise(question.question);
    if (question.id !== 'music_' + (12501 + index) ||
        ids.has(question.id) || texts.has(key) ||
        question.answers.length !== 4 ||
        new Set(question.answers.map(normalise)).size !== 4 ||
        !question.answers.includes(question.correctAnswer) ||
        !['Hard', 'Medium'].includes(question.difficulty) ||
        question.tags.length < 12 || question.dailyEligible !== true) {
        throw new Error('Pack 145 validation failed: ' + question.id);
    }
    ids.add(question.id);
    texts.add(key);
}
module.exports = questions;
