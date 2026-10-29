 // quiz_pack144.js
// PuzzlePilot - The Bigggggg Quiz
// Music Albums: Pack 144 - The 1980s
// 100 questions, music_12401 to music_12500
// Original questions, answers, order and difficulty preserved.
// Years retained in tags rather than routine question wording.

// Each entry: [year, album, artist, song].
const albumFacts = [
    [1980, 'Back in Black', 'AC/DC', 'You Shook Me All Night Long'],
    [1980, 'The Game', 'Queen', 'Another One Bites the Dust'],
    [1980, 'Super Trouper', 'ABBA', 'The Winner Takes It All'],
    [1980, 'Scary Monsters (and Super Creeps)', 'David Bowie', 'Ashes to Ashes'],
    [1980, 'Remain in Light', 'Talking Heads', 'Once in a Lifetime'],
    [1980, 'Sandinista!', 'The Clash', ''],
    [1980, 'Making Movies', 'Dire Straits', ''],
    [1980, 'Closer', 'Joy Division', ''],
    [1980, 'Seventeen Seconds', 'The Cure', ''],
    [1980, 'Zenyatta Mondatta', 'The Police', ''],

    [1981, 'Ghost in the Machine', 'The Police', 'Every Little Thing She Does Is Magic'],
    [1981, 'Duran Duran', 'Duran Duran', 'Girls on Film'],
    [1981, 'Computer World', 'Kraftwerk', 'Pocket Calculator'],
    [1981, 'Bella Donna', 'Stevie Nicks', 'Edge of Seventeen'],
    [1981, '4', 'Foreigner', 'Waiting for a Girl Like You'],
    [1981, 'Non-Stop Erotic Cabaret', 'Soft Cell', ''],
    [1981, 'Speak & Spell', 'Depeche Mode', ''],
    [1981, 'Juju', 'Siouxsie and the Banshees', ''],
    [1981, 'The Visitors', 'ABBA', ''],
    [1981, 'Time', 'Electric Light Orchestra', ''],

    [1982, 'Thriller', 'Michael Jackson', 'Billie Jean'],
    [1982, 'The Dreaming', 'Kate Bush', 'Sat in Your Lap'],
    [1982, 'Combat Rock', 'The Clash', 'Should I Stay or Should I Go'],
    [1982, 'Toto IV', 'Toto', 'Africa'],
    [1982, 'Too-Rye-Ay', 'Dexys Midnight Runners', 'Come On Eileen'],
    [1982, 'The Nylon Curtain', 'Billy Joel', ''],
    [1982, 'Tug of War', 'Paul McCartney', ''],
    [1982, 'Nebraska', 'Bruce Springsteen', ''],
    [1982, 'New Gold Dream (81-82-83-84)', 'Simple Minds', ''],
    [1982, 'Avalon', 'Roxy Music', ''],

    [1983, "Let's Dance", 'David Bowie', "Let's Dance"],
    [1983, 'Colour by Numbers', 'Culture Club', 'Karma Chameleon'],
    [1983, 'True', 'Spandau Ballet', 'True'],
    [1983, 'An Innocent Man', 'Billy Joel', 'Uptown Girl'],
    [1983, 'Sports', 'Huey Lewis and the News', 'Heart and Soul'],
    [1983, 'Sweet Dreams (Are Made of This)', 'Eurythmics', ''],
    [1983, 'War', 'U2', ''],
    [1983, 'Pyromania', 'Def Leppard', ''],
    [1983, "She's So Unusual", 'Cyndi Lauper', ''],
    [1983, 'Seven and the Ragged Tiger', 'Duran Duran', ''],

    [1984, 'Born in the U.S.A.', 'Bruce Springsteen', 'Dancing in the Dark'],
    [1984, 'Diamond Life', 'Sade', 'Smooth Operator'],
    [1984, 'Make It Big', 'Wham!', 'Wake Me Up Before You Go-Go'],
    [1984, 'The Unforgettable Fire', 'U2', 'Pride (In the Name of Love)'],
    [1984, 'Into the Gap', 'Thompson Twins', 'Hold Me Now'],
    [1984, 'Welcome to the Pleasuredome', 'Frankie Goes to Hollywood', ''],
    [1984, 'Some Great Reward', 'Depeche Mode', ''],
    [1984, '1984', 'Van Halen', ''],
    [1984, 'Reckless', 'Bryan Adams', ''],
    [1984, 'Heartbeat City', 'The Cars', ''],

    [1985, 'Songs from the Big Chair', 'Tears for Fears', 'Everybody Wants to Rule the World'],
    [1985, 'Hounds of Love', 'Kate Bush', 'Running Up That Hill'],
    [1985, 'Whitney Houston', 'Whitney Houston', 'Saving All My Love for You'],
    [1985, 'Listen Like Thieves', 'INXS', 'What You Need'],
    [1985, 'Little Creatures', 'Talking Heads', 'Road to Nowhere'],
    [1985, 'Once Upon a Time', 'Simple Minds', ''],
    [1985, 'Be Yourself Tonight', 'Eurythmics', ''],
    [1985, 'The Dream of the Blue Turtles', 'Sting', ''],
    [1985, 'Fables of the Reconstruction', 'R.E.M.', ''],
    [1985, 'Welcome to the Real World', 'Mr. Mister', ''],

    [1986, 'True Blue', 'Madonna', "Papa Don't Preach"],
    [1986, 'Invisible Touch', 'Genesis', 'Land of Confusion'],
    [1986, 'So', 'Peter Gabriel', 'Sledgehammer'],
    [1986, 'The Queen Is Dead', 'The Smiths', 'There Is a Light That Never Goes Out'],
    [1986, 'Slippery When Wet', 'Bon Jovi', "Livin' on a Prayer"],
    [1986, 'Control', 'Janet Jackson', ''],
    [1986, 'The Final Countdown', 'Europe', ''],
    [1986, 'Rapture', 'Anita Baker', ''],
    [1986, 'Master of Puppets', 'Metallica', ''],
    [1986, 'Different Light', 'The Bangles', ''],

    [1987, 'Bad', 'Michael Jackson', 'Smooth Criminal'],
    [1987, 'Kick', 'INXS', 'Need You Tonight'],
    [1987, 'Actually', 'Pet Shop Boys', "It's a Sin"],
    [1987, "Introducing the Hardline According to Terence Trent D'Arby", "Terence Trent D'Arby", 'Wishing Well'],
    [1987, 'The Circus', 'Erasure', 'Sometimes'],
    [1987, 'Popped in Souled Out', 'Wet Wet Wet', ''],
    [1987, 'Tunnel of Love', 'Bruce Springsteen', ''],
    [1987, 'Kiss Me, Kiss Me, Kiss Me', 'The Cure', ''],
    [1987, 'Strangeways, Here We Come', 'The Smiths', ''],
    [1987, "Sign o' the Times", 'Prince', ''],

    [1988, 'Out of Order', 'Rod Stewart', 'Forever Young'],
    [1988, 'Tracy Chapman', 'Tracy Chapman', 'Fast Car'],
    [1988, 'Temple of Low Men', 'Crowded House', 'Better Be Home Soon'],
    [1988, 'Watermark', 'Enya', 'Orinoco Flow'],
    [1988, 'Open Up and Say... Ahh!', 'Poison', 'Every Rose Has Its Thorn'],
    [1988, 'Look Sharp!', 'Roxette', ''],
    [1988, 'Viva Hate', 'Morrissey', ''],
    [1988, 'Green', 'R.E.M.', ''],
    [1988, 'Introspective', 'Pet Shop Boys', ''],
    [1988, 'Push', 'Bros', ''],

    [1989, 'The Seeds of Love', 'Tears for Fears', 'Sowing the Seeds of Love'],
    [1989, 'Disintegration', 'The Cure', 'Lovesong'],
    [1989, 'The Raw & the Cooked', 'Fine Young Cannibals', 'She Drives Me Crazy'],
    [1989, 'Sleeping with the Past', 'Elton John', 'Sacrifice'],
    [1989, 'Rhythm Nation 1814', 'Janet Jackson', 'Miss You Much'],
    [1989, '...But Seriously', 'Phil Collins', ''],
    [1989, 'Club Classics Vol. One', 'Soul II Soul', ''],
    [1989, 'Steel Wheels', 'The Rolling Stones', ''],
    [1989, 'Storm Front', 'Billy Joel', ''],
    [1989, 'Trash', 'Alice Cooper', '']
];

// Artist and genre tags expand into each question.
const artistTagLines = {
    'AC/DC': 'Australian music|hard rock|rock bands|Angus Young|Malcolm Young|Brian Johnson',
    'Queen': 'UK music|rock music|glam rock|Freddie Mercury|Brian May|rock bands',
    'ABBA': 'Swedish music|Europop|pop music|vocal groups|Björn Ulvaeus|Benny Andersson',
    'David Bowie': 'UK music|art rock|new wave|rock music|singer-songwriters',
    'Talking Heads': 'American music|new wave|art rock|post-punk|David Byrne|Brian Eno',
    'The Clash': 'UK music|punk rock|British punk|post-punk|Joe Strummer|Mick Jones',
    'Dire Straits': 'UK music|rock music|roots rock|Mark Knopfler|guitarists',
    'Joy Division': 'UK music|Manchester music|post-punk|Ian Curtis|alternative rock',
    'The Cure': 'UK music|post-punk|gothic rock|alternative rock|Robert Smith',
    'The Police': 'UK music|new wave|reggae rock|Sting|Andy Summers|Stewart Copeland',
    'Duran Duran': 'UK music|new romantic|new wave|synth-pop|Birmingham music|Simon Le Bon',
    'Kraftwerk': 'German music|electronic music|synth-pop|electropop|synthesizers',
    'Stevie Nicks': 'American music|rock music|Fleetwood Mac|female vocalists|singer-songwriters',
    'Foreigner': 'British-American music|arena rock|soft rock|hard rock|Lou Gramm|Mick Jones',
    'Soft Cell': 'UK music|synth-pop|electronic music|new wave|Marc Almond|David Ball',
    'Depeche Mode': 'UK music|synth-pop|electronic music|new wave|Martin Gore|Dave Gahan',
    'Siouxsie and the Banshees': 'UK music|post-punk|gothic rock|Siouxsie Sioux|alternative rock',
    'Electric Light Orchestra': 'UK music|pop rock|orchestral rock|Jeff Lynne|rock bands',
    'Michael Jackson': 'American music|pop music|soul|dance-pop|Quincy Jones|male vocalists',
    'Kate Bush': 'UK music|art pop|art rock|singer-songwriters|female vocalists|experimental pop',
    'Toto': 'American music|soft rock|arena rock|pop rock|Steve Lukather',
    'Dexys Midnight Runners': 'UK music|Birmingham music|blue-eyed soul|pop music|Kevin Rowland',
    'Billy Joel': 'American music|piano rock|pop rock|singer-songwriters|pianists',
    'Paul McCartney': 'UK music|The Beatles|solo Beatles|pop rock|singer-songwriters',
    'Bruce Springsteen': 'American music|heartland rock|rock music|singer-songwriters|E Street Band',
    'Simple Minds': 'Scottish music|UK music|new wave|synth-pop|Jim Kerr',
    'Roxy Music': 'UK music|art rock|new wave|glam rock|Bryan Ferry',
    'Culture Club': 'UK music|new romantic|pop music|blue-eyed soul|Boy George',
    'Spandau Ballet': 'UK music|new romantic|pop music|sophisti-pop|Tony Hadley|Gary Kemp',
    'Huey Lewis and the News': 'American music|pop rock|rock music|blue-eyed soul|Huey Lewis',
    'Eurythmics': 'UK music|synth-pop|new wave|Annie Lennox|Dave Stewart|electronic music',
    'U2': 'Irish music|rock music|post-punk|Bono|The Edge|rock bands',
    'Def Leppard': 'UK music|Sheffield music|hard rock|glam metal|Joe Elliott',
    'Cyndi Lauper': 'American music|pop music|new wave|female vocalists|singer-songwriters',
    'Sade': 'UK music|sophisti-pop|smooth soul|quiet storm|Sade Adu|soul',
    'Wham!': 'UK music|pop music|dance-pop|George Michael|Andrew Ridgeley|pop duos',
    'Thompson Twins': 'UK music|synth-pop|new wave|pop music|Tom Bailey|Alannah Currie',
    'Frankie Goes to Hollywood': 'UK music|Liverpool music|synth-pop|new wave|Holly Johnson|Trevor Horn',
    'Van Halen': 'American music|hard rock|guitarists|Eddie Van Halen|David Lee Roth',
    'Bryan Adams': 'Canadian music|rock music|pop rock|singer-songwriters|male vocalists',
    'The Cars': 'American music|new wave|pop rock|Ric Ocasek|Benjamin Orr',
    'Tears for Fears': 'UK music|synth-pop|new wave|pop rock|Roland Orzabal|Curt Smith',
    'Whitney Houston': 'American music|pop music|soul|rhythm and blues|female vocalists',
    'INXS': 'Australian music|rock music|new wave|Michael Hutchence|rock bands',
    'Sting': 'UK music|The Police|solo artists|jazz pop|pop rock|male vocalists',
    'R.E.M.': 'American music|alternative rock|college rock|Michael Stipe|Peter Buck',
    'Mr. Mister': 'American music|pop rock|soft rock|new wave|Richard Page',
    'Madonna': 'American music|dance-pop|pop music|female vocalists|singer-songwriters',
    'Genesis': 'UK music|pop rock|progressive rock|Phil Collins|Tony Banks|Mike Rutherford',
    'Peter Gabriel': 'UK music|art rock|pop rock|world music|Genesis|solo artists',
    'The Smiths': 'UK music|Manchester music|indie rock|alternative rock|Morrissey|Johnny Marr',
    'Bon Jovi': 'American music|hard rock|glam metal|arena rock|Jon Bon Jovi|Richie Sambora',
    'Janet Jackson': 'American music|pop music|rhythm and blues|dance-pop|female vocalists|Jimmy Jam and Terry Lewis',
    'Europe': 'Swedish music|hard rock|glam metal|arena rock|Joey Tempest',
    'Anita Baker': 'American music|quiet storm|soul|rhythm and blues|female vocalists',
    'Metallica': 'American music|thrash metal|heavy metal|James Hetfield|Lars Ulrich',
    'The Bangles': 'American music|pop rock|jangle pop|female rock bands|Susanna Hoffs',
    'Pet Shop Boys': 'UK music|synth-pop|electronic music|dance-pop|Neil Tennant|Chris Lowe',
    "Terence Trent D'Arby": 'American music|soul|pop rock|rhythm and blues|male vocalists|Sananda Maitreya',
    'Erasure': 'UK music|synth-pop|electronic music|Vince Clarke|Andy Bell',
    'Wet Wet Wet': 'Scottish music|UK music|pop rock|blue-eyed soul|Marti Pellow',
    'Prince': 'American music|Minneapolis sound|funk|pop rock|singer-songwriters|multi-instrumentalists',
    'Rod Stewart': 'UK music|rock music|pop rock|male vocalists|singer-songwriters',
    'Tracy Chapman': 'American music|folk rock|singer-songwriters|female vocalists|folk music',
    'Crowded House': 'Australian music|New Zealand music|pop rock|Neil Finn|alternative rock',
    'Enya': 'Irish music|new-age music|Celtic music|female vocalists|electronic music',
    'Poison': 'American music|glam metal|hard rock|Bret Michaels|rock bands',
    'Roxette': 'Swedish music|pop rock|power pop|Marie Fredriksson|Per Gessle',
    'Morrissey': 'UK music|indie rock|alternative rock|The Smiths|male vocalists',
    'Bros': 'UK music|teen pop|dance-pop|Matt Goss|Luke Goss|British pop',
    'Fine Young Cannibals': 'UK music|Birmingham music|pop rock|blue-eyed soul|Roland Gift',
    'Elton John': 'UK music|pop rock|piano rock|singer-songwriters|Bernie Taupin',
    'Phil Collins': 'UK music|pop rock|Genesis|male vocalists|singer-songwriters',
    'Soul II Soul': 'UK music|British soul|dance music|rhythm and blues|Jazzie B',
    'The Rolling Stones': 'UK music|rock music|blues rock|Mick Jagger|Keith Richards',
    'Alice Cooper': 'American music|hard rock|glam metal|shock rock|male vocalists'
};

// Album-specific specialist tags.
const albumTagLines = {
    'Back in Black': 'Brian Johnson debut with AC/DC|Hells Bells|hard rock classics',
    'The Game': 'Another One Bites the Dust|Crazy Little Thing Called Love|Queen albums',
    'Super Trouper': 'The Winner Takes It All|Super Trouper|ABBA albums',
    'Scary Monsters (and Super Creeps)': 'Ashes to Ashes|Fashion|David Bowie albums',
    'Remain in Light': 'Once in a Lifetime|Brian Eno|art rock classics',
    'Sandinista!': 'triple albums|The Magnificent Seven|The Clash albums',
    'Making Movies': 'Romeo and Juliet|Tunnel of Love|Dire Straits albums',
    'Closer': 'posthumous albums|Isolation|Joy Division albums',
    'Seventeen Seconds': 'A Forest|The Cure albums|post-punk classics',
    'Zenyatta Mondatta': "Don't Stand So Close to Me|De Do Do Do De Da Da Da|The Police albums",
    'Ghost in the Machine': 'Every Little Thing She Does Is Magic|Invisible Sun|The Police albums',
    'Duran Duran': 'debut albums|Girls on Film|Planet Earth|1981 debut album',
    'Computer World': 'Pocket Calculator|Computer Love|electronic music classics',
    'Bella Donna': "debut solo albums|Edge of Seventeen|Stop Draggin' My Heart Around",
    '4': 'Waiting for a Girl Like You|Juke Box Hero|Foreigner albums',
    'Non-Stop Erotic Cabaret': 'debut albums|Tainted Love|Say Hello Wave Goodbye',
    'Speak & Spell': "debut albums|Just Can't Get Enough|Vince Clarke era",
    'Juju': 'Spellbound|Arabian Knights|gothic rock classics',
    'The Visitors': 'One of Us|When All Is Said and Done|ABBA albums',
    'Time': 'concept albums|Hold On Tight|time travel|ELO albums',
    'Thriller': 'Billie Jean|Beat It|Thriller|Quincy Jones|landmark albums',
    'The Dreaming': 'Sat in Your Lap|Suspended in Gaffa|Kate Bush albums',
    'Combat Rock': 'Should I Stay or Should I Go|Rock the Casbah|The Clash albums',
    'Toto IV': 'Africa|Rosanna|Grammy Award-winning albums',
    'Too-Rye-Ay': 'Come On Eileen|Celtic soul|Dexys albums',
    'The Nylon Curtain': 'Allentown|Goodnight Saigon|Billy Joel albums',
    'Tug of War': 'Ebony and Ivory|Take It Away|Paul McCartney albums',
    'Nebraska': 'Atlantic City|acoustic albums|Bruce Springsteen albums',
    'New Gold Dream (81-82-83-84)': 'Promised You a Miracle|Glittering Prize|Simple Minds albums',
    'Avalon': 'More Than This|Avalon|Roxy Music albums',
    "Let's Dance": 'title tracks|China Girl|Modern Love|Nile Rodgers|David Bowie albums',
    'Colour by Numbers': 'Karma Chameleon|Church of the Poison Mind|Culture Club albums',
    'True': 'True|Gold|Spandau Ballet albums',
    'An Innocent Man': 'Uptown Girl|Tell Her About It|Billy Joel albums',
    'Sports': 'Heart and Soul|I Want a New Drug|Huey Lewis and the News albums',
    'Sweet Dreams (Are Made of This)': 'Sweet Dreams|Love Is a Stranger|Eurythmics albums',
    'War': "Sunday Bloody Sunday|New Year's Day|U2 albums",
    'Pyromania': 'Photograph|Rock of Ages|Def Leppard albums',
    "She's So Unusual": 'debut albums|Girls Just Want to Have Fun|Time After Time',
    'Seven and the Ragged Tiger': 'The Reflex|Union of the Snake|Duran Duran albums',
    'Born in the U.S.A.': 'Dancing in the Dark|Glory Days|Bruce Springsteen albums',
    'Diamond Life': 'debut albums|Smooth Operator|Your Love Is King|Sade albums',
    'Make It Big': 'Wake Me Up Before You Go-Go|Careless Whisper|Wham albums',
    'The Unforgettable Fire': 'Pride (In the Name of Love)|Bad|U2 albums',
    'Into the Gap': 'Hold Me Now|Doctor Doctor|Thompson Twins albums',
    'Welcome to the Pleasuredome': 'debut albums|Relax|Two Tribes|Trevor Horn',
    'Some Great Reward': 'People Are People|Master and Servant|Depeche Mode albums',
    '1984': 'Jump|Panama|Van Halen albums',
    'Reckless': "Summer of '69|Heaven|Run to You|Bryan Adams albums",
    'Heartbeat City': 'Drive|You Might Think|The Cars albums',
    'Songs from the Big Chair': 'Everybody Wants to Rule the World|Shout|Tears for Fears albums',
    'Hounds of Love': 'Running Up That Hill|Cloudbusting|The Ninth Wave|Kate Bush albums',
    'Whitney Houston': 'debut albums|Saving All My Love for You|How Will I Know',
    'Listen Like Thieves': 'What You Need|Listen Like Thieves|INXS albums',
    'Little Creatures': 'Road to Nowhere|And She Was|Talking Heads albums',
    'Once Upon a Time': 'Alive and Kicking|Sanctify Yourself|Simple Minds albums',
    'Be Yourself Tonight': "There Must Be an Angel|Sisters Are Doin' It for Themselves|Eurythmics albums",
    'The Dream of the Blue Turtles': 'debut solo albums|If You Love Somebody Set Them Free|Russians',
    'Fables of the Reconstruction': "Can't Get There from Here|Driver 8|R.E.M. albums",
    'Welcome to the Real World': 'Broken Wings|Kyrie|Mr. Mister albums',
    'True Blue': "Papa Don't Preach|Open Your Heart|Live to Tell|Madonna albums",
    'Invisible Touch': 'Land of Confusion|Invisible Touch|Genesis albums',
    'So': "Sledgehammer|Don't Give Up|In Your Eyes|Peter Gabriel albums",
    'The Queen Is Dead': 'There Is a Light That Never Goes Out|Bigmouth Strikes Again|The Smiths albums',
    'Slippery When Wet': "Livin' on a Prayer|You Give Love a Bad Name|Bon Jovi albums",
    'Control': 'Nasty|What Have You Done for Me Lately|Jimmy Jam and Terry Lewis|Janet Jackson albums',
    'The Final Countdown': 'The Final Countdown|Carrie|Europe albums',
    'Rapture': 'Sweet Love|Caught Up in the Rapture|Anita Baker albums',
    'Master of Puppets': 'Battery|Master of Puppets|thrash metal classics',
    'Different Light': 'Manic Monday|Walk Like an Egyptian|The Bangles albums',
    'Bad': 'Smooth Criminal|The Way You Make Me Feel|Michael Jackson albums',
    'Kick': 'Need You Tonight|Never Tear Us Apart|New Sensation|INXS albums',
    'Actually': "It's a Sin|What Have I Done to Deserve This?|Pet Shop Boys albums",
    "Introducing the Hardline According to Terence Trent D'Arby": 'Wishing Well|Sign Your Name|debut albums',
    'The Circus': 'Sometimes|Victim of Love|Erasure albums',
    'Popped in Souled Out': 'Wishing I Was Lucky|Sweet Little Mystery|debut albums',
    'Tunnel of Love': 'Brilliant Disguise|Tougher Than the Rest|Bruce Springsteen albums',
    'Kiss Me, Kiss Me, Kiss Me': "Just Like Heaven|Why Can't I Be You?|The Cure albums",
    'Strangeways, Here We Come': 'Girlfriend in a Coma|Last Night I Dreamt That Somebody Loved Me|The Smiths albums',
    "Sign o' the Times": "double albums|Sign o' the Times|If I Was Your Girlfriend|Prince albums",
    'Out of Order': 'Forever Young|Lost in You|Rod Stewart albums',
    'Tracy Chapman': "debut albums|Fast Car|Talkin' 'bout a Revolution",
    'Temple of Low Men': 'Better Be Home Soon|Into Temptation|Crowded House albums',
    'Watermark': 'Orinoco Flow|new-age classics|Enya albums',
    'Open Up and Say... Ahh!': "Every Rose Has Its Thorn|Nothin' but a Good Time|Poison albums",
    'Look Sharp!': 'The Look|Listen to Your Heart|Roxette albums',
    'Viva Hate': 'debut solo albums|Suedehead|Everyday Is Like Sunday',
    'Green': 'Orange Crush|Stand|R.E.M. albums',
    'Introspective': 'Domino Dancing|Always on My Mind|Pet Shop Boys albums',
    'Push': 'debut albums|When Will I Be Famous|I Owe You Nothing|Bros albums',
    'The Seeds of Love': 'Sowing the Seeds of Love|Woman in Chains|Tears for Fears albums',
    'Disintegration': 'Lovesong|Pictures of You|The Cure albums',
    'The Raw & the Cooked': 'She Drives Me Crazy|Good Thing|Fine Young Cannibals albums',
    'Sleeping with the Past': 'Sacrifice|Healing Hands|Elton John albums',
    'Rhythm Nation 1814': 'Miss You Much|Rhythm Nation|Jimmy Jam and Terry Lewis|Janet Jackson albums',
    '...But Seriously': 'Another Day in Paradise|Something Happened on the Way to Heaven|Phil Collins albums',
    'Club Classics Vol. One': "Keep On Movin'|Back to Life|British soul classics",
    'Steel Wheels': 'Mixed Emotions|Rock and a Hard Place|Rolling Stones albums',
    'Storm Front': "We Didn't Start the Fire|I Go to Extremes|Billy Joel albums",
    'Trash': 'Poison|Bed of Nails|Alice Cooper albums'
};

const splitTags = value => value ? value.split('|') : [];
const normalise = text => String(text).trim().toLowerCase().replace(/\s+/g, ' ');

if (albumFacts.length !== 100) {
    throw new Error('Pack 144 requires exactly 100 albums.');
}

const seenAlbums = new Set();

for (const [year, album, artist, song] of albumFacts) {
    if (!Number.isInteger(year) || year < 1980 || year > 1989 ||
        typeof album !== 'string' || !album.trim() ||
        typeof artist !== 'string' || !artist.trim() ||
        typeof song !== 'string' || !artistTagLines[artist] ||
        !albumTagLines[album]) {
        throw new Error('Invalid or untagged Pack 144 album: ' + album);
    }

    const key = normalise(album);
    if (seenAlbums.has(key)) {
        throw new Error('Repeated Pack 144 album: ' + album);
    }
    seenAlbums.add(key);
}

// Original same-year wrong answers and answer rotation are preserved.
function wrongAnswers(year, album, artist, isAlbumQuestion, index) {
    const fromYear = albumFacts.filter(entry => entry[0] === year);

    const pool = isAlbumQuestion
        ? fromYear.filter(entry => entry[2] !== artist).map(entry => entry[1])
        : [...new Set(fromYear.map(entry => entry[2]))]
            .filter(candidate => candidate !== artist);

    if (pool.length < 3) {
        throw new Error('Insufficient answer choices: ' + album);
    }

    const wrong = [];
    let cursor = (index * 3 + 1) % pool.length;

    while (wrong.length < 3) {
        const candidate = pool[cursor];

        if (candidate !== album &&
            candidate !== artist &&
            !wrong.includes(candidate)) {
            wrong.push(candidate);
        }

        cursor = (cursor + 1) % pool.length;
    }

    return wrong;
}

const questions = albumFacts.map(([year, album, artist, song], index) => {
    const isAlbumQuestion = song.length > 0;
    const correctAnswer = isAlbumQuestion ? album : artist;

    const answers = wrongAnswers(year, album, artist, isAlbumQuestion, index);

    answers.splice(index % 4, 0, correctAnswer);

    const question = isAlbumQuestion
        ? `Which album features "${song}" by ${artist}?`
        : `Which artist released the album "${album}"?`;

    const tags = [...new Set([
        '1980s',
        'Albums',
        isAlbumQuestion ? 'Album tracks' : 'Artists',
        'Music',
        'album trivia',
        'album history',
        String(year),
        isAlbumQuestion ? 'album identification' : 'artist identification',
        album,
        artist,
        ...splitTags(artistTagLines[artist]),
        ...splitTags(albumTagLines[album]),
        ...(song ? [song, 'album tracks'] : [])
    ])];

    return {
        id: 'music_' + (12401 + index),
        category: 'Music',
        question,
        answers,
        correctAnswer,
        difficulty: index % 11 === 0 ? 'Hard' : 'Medium',
        tags,
        dailyEligible: true
    };
});

const ids = new Set();
const texts = new Set();

for (const [index, question] of questions.entries()) {
    const key = normalise(question.question);

    if (question.id !== 'music_' + (12401 + index) ||
        ids.has(question.id) ||
        texts.has(key) ||
        question.answers.length !== 4 ||
        new Set(question.answers.map(normalise)).size !== 4 ||
        !question.answers.includes(question.correctAnswer) ||
        question.tags.length < 12 ||
        !['Medium', 'Hard'].includes(question.difficulty) ||
        question.dailyEligible !== true) {
        throw new Error('Pack 144 validation failed: ' + question.id);
    }

    ids.add(question.id);
    texts.add(key);
}

module.exports = questions;
