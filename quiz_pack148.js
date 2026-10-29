 // quiz_pack148.js
// PuzzlePilot - The Bigggggg Quiz
// Music Albums: Pack 148 - The 2020s (2020-2025)
// 100 questions, music_12801 to music_12900
// Tagging audit: IDs, original facts, answers and difficulty preserved.
// Years remain in tags rather than routine player-facing question wording.

const albumFacts = [
    [2020, "folklore", "Taylor Swift", "cardigan"],
    [2020, "evermore", "Taylor Swift", "willow"],
    [2020, "Future Nostalgia", "Dua Lipa", "Don't Start Now"],
    [2020, "After Hours", "The Weeknd", "Blinding Lights"],
    [2020, "Chromatica", "Lady Gaga", "Rain on Me"],
    [2020, "Positions", "Ariana Grande", "positions"],
    [2020, "Music to Be Murdered By", "Eminem", "Godzilla"],
    [2020, "BE", "BTS", "Dynamite"],
    [2020, "Plastic Hearts", "Miley Cyrus", "Midnight Sky"],
    [2020, "Punisher", "Phoebe Bridgers", ""],
    [2020, "Sawayama", "Rina Sawayama", ""],
    [2020, "Women in Music Pt. III", "Haim", ""],
    [2020, "Imploding the Mirage", "The Killers", ""],
    [2020, "Notes on a Conditional Form", "The 1975", ""],
    [2020, "Letter to You", "Bruce Springsteen", ""],
    [2020, "Calm", "5 Seconds of Summer", ""],
    [2020, "Fetch the Bolt Cutters", "Fiona Apple", ""],
    [2021, "30", "Adele", "Easy on Me"],
    [2021, "Sour", "Olivia Rodrigo", "drivers license"],
    [2021, "=", "Ed Sheeran", "Bad Habits"],
    [2021, "Happier Than Ever", "Billie Eilish", "Therefore I Am"],
    [2021, "Justice", "Justin Bieber", "Peaches"],
    [2021, "Montero", "Lil Nas X", "Industry Baby"],
    [2021, "Planet Her", "Doja Cat", "Kiss Me More"],
    [2021, "An Evening with Silk Sonic", "Silk Sonic", "Leave the Door Open"],
    [2021, "Voyage", "ABBA", "Don't Shut Me Down"],
    [2021, "Seventeen Going Under", "Sam Fender", ""],
    [2021, "Blue Weekend", "Wolf Alice", ""],
    [2021, "Typhoons", "Royal Blood", ""],
    [2021, "Donda", "Kanye West", ""],
    [2021, "Certified Lover Boy", "Drake", ""],
    [2021, "Call Me If You Get Lost", "Tyler, the Creator", ""],
    [2021, "Solar Power", "Lorde", ""],
    [2021, "Music of the Spheres", "Coldplay", ""],
    [2022, "Midnights", "Taylor Swift", "Anti-Hero"],
    [2022, "Harry's House", "Harry Styles", "As It Was"],
    [2022, "Renaissance", "Beyoncé", "Break My Soul"],
    [2022, "Special", "Lizzo", "About Damn Time"],
    [2022, "Dawn FM", "The Weeknd", "Take My Breath"],
    [2022, "Un Verano Sin Ti", "Bad Bunny", "Tití Me Preguntó"],
    [2022, "Mr. Morale & the Big Steppers", "Kendrick Lamar", "N95"],
    [2022, "SOS", "SZA", "Kill Bill"],
    [2022, "The Car", "Arctic Monkeys", "Body Paint"],
    [2022, "Being Funny in a Foreign Language", "The 1975", ""],
    [2022, "Will of the People", "Muse", ""],
    [2022, "Dance Fever", "Florence + the Machine", ""],
    [2022, "Hold the Girl", "Rina Sawayama", ""],
    [2022, "Crash", "Charli XCX", ""],
    [2022, "Twelve Carat Toothache", "Post Malone", ""],
    [2022, "emails i can't send", "Sabrina Carpenter", ""],
    [2022, "Her Loss", "Drake & 21 Savage", ""],
    [2023, "Guts", "Olivia Rodrigo", "vampire"],
    [2023, "Endless Summer Vacation", "Miley Cyrus", "Flowers"],
    [2023, "Did You Know That There's a Tunnel Under Ocean Blvd", "Lana Del Rey", "A&W"],
    [2023, "the record", "boygenius", "Not Strong Enough"],
    [2023, "This Is Why", "Paramore", "This Is Why"],
    [2023, "Tension", "Kylie Minogue", "Padam Padam"],
    [2023, "The Ballad of Darren", "Blur", "The Narcissist"],
    [2023, "Hackney Diamonds", "The Rolling Stones", "Angry"],
    [2023, "1989 (Taylor's Version)", "Taylor Swift", ""],
    [2023, "Speak Now (Taylor's Version)", "Taylor Swift", ""],
    [2023, "Utopia", "Travis Scott", ""],
    [2023, "For All the Dogs", "Drake", ""],
    [2023, "Pink Friday 2", "Nicki Minaj", ""],
    [2023, "But Here We Are", "Foo Fighters", ""],
    [2023, "Rush!", "Måneskin", ""],
    [2023, "The Age of Pleasure", "Janelle Monáe", ""],
    [2023, "The Rise and Fall of a Midwest Princess", "Chappell Roan", ""],
    [2024, "The Tortured Poets Department", "Taylor Swift", "Fortnight"],
    [2024, "Hit Me Hard and Soft", "Billie Eilish", "Birds of a Feather"],
    [2024, "Short n' Sweet", "Sabrina Carpenter", "Espresso"],
    [2024, "Brat", "Charli XCX", "360"],
    [2024, "Eternal Sunshine", "Ariana Grande", "we can't be friends (wait for your love)"],
    [2024, "Cowboy Carter", "Beyoncé", "Texas Hold 'Em"],
    [2024, "Radical Optimism", "Dua Lipa", "Houdini"],
    [2024, "The Secret of Us", "Gracie Abrams", "Risk"],
    [2024, "The Death of Slim Shady (Coup de Grâce)", "Eminem", ""],
    [2024, "Moon Music", "Coldplay", ""],
    [2024, "From Zero", "Linkin Park", ""],
    [2024, "Romance", "Fontaines D.C.", ""],
    [2024, "Prelude to Ecstasy", "The Last Dinner Party", ""],
    [2024, "Songs of a Lost World", "The Cure", ""],
    [2024, "Clancy", "Twenty One Pilots", ""],
    [2024, "143", "Katy Perry", ""],
    [2024, "Luck and Strange", "David Gilmour", ""],
    [2025, "Mayhem", "Lady Gaga", "Abracadabra"],
    [2025, "Hurry Up Tomorrow", "The Weeknd", "Cry for Me"],
    [2025, "Man's Best Friend", "Sabrina Carpenter", "Manchild"],
    [2025, "Virgin", "Lorde", "What Was That"],
    [2025, "The Life of a Showgirl", "Taylor Swift", "The Fate of Ophelia"],
    [2025, "Play", "Ed Sheeran", "Sapphire"],
    [2025, "The Art of Loving", "Olivia Dean", "Man I Need"],
    [2025, "So Close to What", "Tate McRae", ""],
    [2025, "Debí Tirar Más Fotos", "Bad Bunny", ""],
    [2025, "I'm the Problem", "Morgan Wallen", ""],
    [2025, "Eusexua", "FKA twigs", ""],
    [2025, "A Matter of Time", "Laufey", ""],
    [2025, "The Clearing", "Wolf Alice", ""],
    [2025, "Something Beautiful", "Miley Cyrus", ""],
    [2025, "People Watching", "Sam Fender", ""]
];

const artistTagLines = {
    "Taylor Swift": "American music|pop music|singer-songwriters|female vocalists|country pop",
    "Dua Lipa": "UK music|dance-pop|pop music|female vocalists|disco pop",
    "The Weeknd": "Canadian music|pop music|alternative R&B|synth-pop|male vocalists",
    "Lady Gaga": "American music|dance-pop|pop music|female vocalists|electropop",
    "Ariana Grande": "American music|pop music|rhythm and blues|female vocalists",
    "Eminem": "American music|hip-hop|rap music|Detroit music|male rappers",
    "BTS": "South Korean music|K-pop|boy bands|Korean pop|vocal groups",
    "Miley Cyrus": "American music|pop rock|pop music|female vocalists|singer-songwriters",
    "Phoebe Bridgers": "American music|indie folk|indie rock|singer-songwriters|female vocalists",
    "Rina Sawayama": "Japanese-British music|alternative pop|pop rock|female vocalists|singer-songwriters",
    "Haim": "American music|pop rock|soft rock|sister groups|Los Angeles music",
    "The Killers": "American music|indie rock|alternative rock|Brandon Flowers|Las Vegas music",
    "The 1975": "UK music|indie pop|pop rock|alternative rock|Matty Healy",
    "Bruce Springsteen": "American music|heartland rock|rock music|singer-songwriters|E Street Band",
    "5 Seconds of Summer": "Australian music|pop rock|pop punk|rock bands|boy bands",
    "Fiona Apple": "American music|art pop|piano rock|singer-songwriters|female vocalists",
    "Adele": "UK music|soul|pop music|singer-songwriters|female vocalists",
    "Olivia Rodrigo": "American music|pop rock|pop punk|singer-songwriters|female vocalists",
    "Ed Sheeran": "UK music|pop music|folk pop|singer-songwriters|acoustic music",
    "Billie Eilish": "American music|alternative pop|electropop|female vocalists|Finneas",
    "Justin Bieber": "Canadian music|pop music|rhythm and blues|male vocalists",
    "Lil Nas X": "American music|hip-hop|pop rap|male vocalists|rap music",
    "Doja Cat": "American music|pop rap|rhythm and blues|female rappers|dance-pop",
    "Silk Sonic": "American music|soul|rhythm and blues|Bruno Mars|Anderson .Paak|musical duos",
    "ABBA": "Swedish music|Europop|pop music|vocal groups|Björn Ulvaeus|Benny Andersson",
    "Sam Fender": "UK music|North East England music|indie rock|singer-songwriters|rock music",
    "Wolf Alice": "UK music|indie rock|alternative rock|Ellie Rowsell|British bands",
    "Royal Blood": "UK music|hard rock|alternative rock|rock duos|Mike Kerr|Ben Thatcher",
    "Kanye West": "American music|hip-hop|Chicago music|rap music|music producers",
    "Drake": "Canadian music|hip-hop|Toronto music|rap music|rhythm and blues",
    "Tyler, the Creator": "American music|hip-hop|alternative hip-hop|music producers|male rappers",
    "Lorde": "New Zealand music|art pop|electropop|singer-songwriters|female vocalists",
    "Coldplay": "UK music|pop rock|alternative rock|Chris Martin|rock bands",
    "Harry Styles": "UK music|pop rock|pop music|One Direction|male vocalists",
    "Beyoncé": "American music|rhythm and blues|pop music|female vocalists|Destiny's Child",
    "Lizzo": "American music|pop music|hip-hop|soul|female vocalists",
    "Bad Bunny": "Puerto Rican music|reggaeton|Latin trap|Latin music|male vocalists",
    "Kendrick Lamar": "American music|hip-hop|West Coast hip-hop|Compton music|rap music",
    "SZA": "American music|rhythm and blues|alternative R&B|singer-songwriters|female vocalists",
    "Arctic Monkeys": "UK music|Sheffield music|indie rock|alternative rock|Alex Turner",
    "Muse": "UK music|alternative rock|progressive rock|Matt Bellamy|rock bands",
    "Florence + the Machine": "UK music|art pop|indie rock|Florence Welch|female vocalists",
    "Charli XCX": "UK music|electropop|hyperpop|dance-pop|female vocalists",
    "Post Malone": "American music|pop rap|hip-hop|pop rock|male vocalists",
    "Sabrina Carpenter": "American music|pop music|dance-pop|singer-songwriters|female vocalists",
    "Drake & 21 Savage": "Canadian music|American music|hip-hop|rap collaborations|trap music",
    "Lana Del Rey": "American music|alternative pop|baroque pop|singer-songwriters|female vocalists",
    "boygenius": "American music|indie rock|indie folk|Phoebe Bridgers|Lucy Dacus|Julien Baker",
    "Paramore": "American music|alternative rock|pop rock|Hayley Williams|rock bands",
    "Kylie Minogue": "Australian music|dance-pop|disco pop|female vocalists|pop music",
    "Blur": "UK music|Britpop|alternative rock|Damon Albarn|Graham Coxon",
    "The Rolling Stones": "UK music|rock music|blues rock|Mick Jagger|Keith Richards",
    "Travis Scott": "American music|hip-hop|trap music|Houston music|male rappers",
    "Nicki Minaj": "Trinidadian-American music|hip-hop|pop rap|female rappers|rap music",
    "Foo Fighters": "American music|alternative rock|post-grunge|Dave Grohl|rock bands",
    "Måneskin": "Italian music|rock music|glam rock|Damiano David|rock bands",
    "Janelle Monáe": "American music|funk|rhythm and blues|art pop|female vocalists",
    "Chappell Roan": "American music|synth-pop|dance-pop|queer pop|female vocalists",
    "Gracie Abrams": "American music|indie pop|singer-songwriters|female vocalists|folk pop",
    "Linkin Park": "American music|alternative rock|nu metal|Mike Shinoda|Emily Armstrong",
    "Fontaines D.C.": "Irish music|post-punk|alternative rock|Dublin music|Grian Chatten",
    "The Last Dinner Party": "UK music|art rock|indie rock|British bands|Abigail Morris",
    "The Cure": "UK music|gothic rock|post-punk|alternative rock|Robert Smith",
    "Twenty One Pilots": "American music|alternative rock|rap rock|electropop|musical duos",
    "Katy Perry": "American music|pop music|dance-pop|female vocalists|singer-songwriters",
    "David Gilmour": "UK music|rock music|progressive rock|Pink Floyd|guitarists",
    "Olivia Dean": "UK music|soul|rhythm and blues|singer-songwriters|female vocalists",
    "Tate McRae": "Canadian music|dance-pop|pop music|female vocalists|singer-songwriters",
    "Morgan Wallen": "American music|country music|country pop|male vocalists|singer-songwriters",
    "FKA twigs": "UK music|art pop|experimental electronic music|alternative R&B|female vocalists",
    "Laufey": "Icelandic music|jazz pop|traditional pop|singer-songwriters|female vocalists"
};

// Album-specific tracks and topics, aligned with albumFacts (one per album).
const albumExtraTags = [
    "cardigan|august|exile|folk pop",
    "willow|champagne problems|no body no crime|folk pop",
    "Don't Start Now|Levitating|Physical|disco revival",
    "Blinding Lights|Save Your Tears|In Your Eyes|synth-pop classics",
    "Rain on Me|Stupid Love|911|dance-pop albums",
    "positions|34+35|pov|rhythm and blues",
    "Godzilla|Darkness|rap albums",
    "Dynamite|Life Goes On|Blue & Grey|K-pop albums",
    "Midnight Sky|Prisoner|Angels Like You|pop rock albums",
    "Kyoto|Garden Song|indie folk albums",
    "XS|Comme des Garçons (Like the Boys)|debut studio albums",
    "The Steps|Summer Girl|Los Angeles music",
    "Caution|My Own Soul's Warning|Killers albums",
    "If You're Too Shy (Let Me Know)|People|The 1975 albums",
    "Letter to You|Ghosts|E Street Band",
    "Old Me|Wildflower|5 Seconds of Summer albums",
    "Shameika|Fetch the Bolt Cutters|experimental pop albums",
    "Easy on Me|Oh My God|I Drink Wine|Adele albums",
    "drivers license|good 4 u|deja vu|debut albums",
    "Bad Habits|Shivers|Overpass Graffiti|Ed Sheeran albums",
    "Therefore I Am|Happier Than Ever|Your Power|Billie Eilish albums",
    "Peaches|Hold On|Anyone|Justin Bieber albums",
    "Industry Baby|Montero (Call Me by Your Name)|debut albums",
    "Kiss Me More|Woman|Need to Know|Doja Cat albums",
    "Leave the Door Open|Smokin Out the Window|Skate|debut albums",
    "Don't Shut Me Down|I Still Have Faith in You|ABBA reunion",
    "Seventeen Going Under|Get You Down|Sam Fender albums",
    "The Last Man on Earth|Smile|Wolf Alice albums",
    "Typhoons|Trouble's Coming|Limbo|Royal Blood albums",
    "Hurricane|Jail|Kanye West albums",
    "Way 2 Sexy|Girls Want Girls|Drake albums",
    "LUMBERJACK|WUSYANAME|Tyler the Creator albums",
    "Solar Power|Mood Ring|Lorde albums",
    "Higher Power|My Universe|Coldplay albums",
    "Anti-Hero|Lavender Haze|Karma|Taylor Swift albums",
    "As It Was|Late Night Talking|Music for a Sushi Restaurant|Harry Styles albums",
    "Break My Soul|Cuff It|Alien Superstar|dance music",
    "About Damn Time|2 Be Loved (Am I Ready)|Lizzo albums",
    "Take My Breath|Sacrifice|Out of Time|The Weeknd albums",
    "Tití Me Preguntó|Me Porto Bonito|Después de la Playa|reggaeton albums",
    "N95|Die Hard|The Heart Part 5|Kendrick Lamar albums",
    "Kill Bill|Snooze|Nobody Gets Me|SZA albums",
    "Body Paint|There'd Better Be a Mirrorball|Arctic Monkeys albums",
    "About You|I'm in Love with You|The 1975 albums",
    "Won't Stand Down|Compliance|Muse albums",
    "King|My Love|Florence albums",
    "This Hell|Hold the Girl|Rina Sawayama albums",
    "Good Ones|Beg for You|Charli XCX albums",
    "Cooped Up|I Like You (A Happier Song)|Post Malone albums",
    "Nonsense|because i liked a boy|Sabrina Carpenter albums",
    "Rich Flex|Spin Bout U|rap collaborations",
    "vampire|bad idea right?|get him back!|Olivia Rodrigo albums",
    "Flowers|River|Jaded|Miley Cyrus albums",
    "A&W|Candy Necklace|Did you know that there's a tunnel under Ocean Blvd|Lana Del Rey albums",
    "Not Strong Enough|$20|Emily I'm Sorry|debut albums",
    "This Is Why|Running Out of Time|Paramore albums",
    "Padam Padam|Tension|Kylie Minogue albums",
    "The Narcissist|Barbaric|Blur albums",
    "Angry|Sweet Sounds of Heaven|Rolling Stones albums",
    "Is It Over Now? (Taylor's Version)|Blank Space (Taylor's Version)|re-recorded albums",
    "I Can See You (Taylor's Version)|Enchanted (Taylor's Version)|re-recorded albums",
    "FE!N|MELTDOWN|Travis Scott albums",
    "First Person Shooter|IDGAF|Drake albums",
    "Everybody|FTCU|Nicki Minaj albums",
    "Rescued|Under You|Foo Fighters albums",
    "GOSSIP|THE LONELIEST|Italian rock albums",
    "Lipstick Lover|Float|Janelle Monáe albums",
    "Red Wine Supernova|Pink Pony Club|debut albums",
    "Fortnight|I Can Do It with a Broken Heart|Taylor Swift albums",
    "Birds of a Feather|Lunch|Chihiro|Billie Eilish albums",
    "Espresso|Taste|Please Please Please|Sabrina Carpenter albums",
    "360|Apple|Von dutch|hyperpop albums",
    "we can't be friends (wait for your love)|yes, and?|the boy is mine|Ariana Grande albums",
    "Texas Hold 'Em|16 Carriages|Ya Ya|country music albums",
    "Houdini|Training Season|Illusion|Dua Lipa albums",
    "Risk|Close to You|I Love You I'm Sorry|Gracie Abrams albums",
    "Houdini|Somebody Save Me|Eminem albums",
    "feelslikeimfallinginlove|WE PRAY|Coldplay albums",
    "The Emptiness Machine|Heavy Is the Crown|Linkin Park albums",
    "Starburster|Favourite|Fontaines D.C. albums",
    "Nothing Matters|Caesar on a TV Screen|debut albums",
    "Alone|A Fragile Thing|The Cure albums",
    "Overcompensate|Next Semester|Twenty One Pilots albums",
    "Woman's World|Lifetimes|Katy Perry albums",
    "Luck and Strange|Between Two Points|David Gilmour albums",
    "Abracadabra|Disease|Garden of Eden|Lady Gaga albums",
    "Cry for Me|Timeless|São Paulo|The Weeknd albums",
    "Manchild|Tears|Sabrina Carpenter albums",
    "What Was That|Man of the Year|Hammer|Lorde albums",
    "The Fate of Ophelia|Opalite|Taylor Swift albums",
    "Sapphire|Azizam|Ed Sheeran albums",
    "Man I Need|Nice to Each Other|So Easy (To Fall in Love)|Olivia Dean albums",
    "Sports car|2 hands|Tate McRae albums",
    "DtMF|NUEVAYoL|Bad Bunny albums",
    "I'm the Problem|Love Somebody|Morgan Wallen albums",
    "Eusexua|Perfect Stranger|FKA twigs albums",
    "Lover Girl|Silver Lining|Laufey albums",
    "Bloom Baby Bloom|The Sofa|Wolf Alice albums",
    "End of the World|Easy Lover|Miley Cyrus albums",
    "People Watching|Arm's Length|Sam Fender albums"
];

const normalise = value => String(value).trim().toLowerCase().replace(/\s+/g, ' ');
const splitTags = value => value ? value.split('|') : [];

if (albumFacts.length !== 100 || albumExtraTags.length !== 100) {
    throw new Error('Pack 148 must contain exactly 100 tagged albums.');
}

const seenAlbums = new Set();
for (const [year, album, artist, song] of albumFacts) {
    if (!Number.isInteger(year) || year < 2020 || year > 2025 ||
        typeof album !== 'string' || !album.trim() ||
        typeof artist !== 'string' || !artist.trim() ||
        typeof song !== 'string' || !artistTagLines[artist]) {
        throw new Error('Invalid or untagged Pack 148 album: ' + album);
    }
    const key = normalise(album);
    if (seenAlbums.has(key)) {
        throw new Error('Repeated Pack 148 album: ' + album);
    }
    seenAlbums.add(key);
}

// Preserve original same-year wrong answers and button positions.
function chooseWrongAnswers(year, album, artist, wantsAlbum, index) {
    const sameYear = albumFacts.filter(fact => fact[0] === year);
    const candidates = wantsAlbum
        ? sameYear.filter(fact => fact[2] !== artist).map(fact => fact[1])
        : [...new Set(sameYear.map(fact => fact[2]))]
            .filter(name => name !== artist);
    if (candidates.length < 3) {
        throw new Error('Insufficient answer choices: ' + album);
    }
    const wrong = [];
    let position = (index * 3 + 1) % candidates.length;
    while (wrong.length < 3) {
        const candidate = candidates[position];
        if (candidate !== album && candidate !== artist &&
            !wrong.includes(candidate)) {
            wrong.push(candidate);
        }
        position = (position + 1) % candidates.length;
    }
    return wrong;
}

const questions = albumFacts.map(([year, album, artist, song], index) => {
    const wantsAlbum = song.length > 0;
    const correctAnswer = wantsAlbum ? album : artist;
    const answers = chooseWrongAnswers(year, album, artist, wantsAlbum, index);
    answers.splice(index % 4, 0, correctAnswer);
    const tags = [...new Set([
        '2020s', 'Albums', wantsAlbum ? 'Album tracks' : 'Artists',
        'Music', 'album trivia', 'album history', String(year),
        wantsAlbum ? 'album identification' : 'artist identification',
        album, artist,
        ...splitTags(artistTagLines[artist]),
        ...splitTags(albumExtraTags[index]),
        ...(song ? [song, 'album tracks'] : [])
    ])];
    return {
        id: 'music_' + (12801 + index),
        category: 'Music',
        question: wantsAlbum
            ? `Which album features "${song}" by ${artist}?`
            : `Which artist released the album "${album}"?`,
        answers,
        correctAnswer,
        difficulty: index % 13 === 0 ? 'Hard' : 'Medium',
        tags,
        dailyEligible: true
    };
});

// Validate the generated questions before the quiz bank loads them.
const ids = new Set();
const texts = new Set();
for (const [index, question] of questions.entries()) {
    const key = normalise(question.question);
    if (question.id !== 'music_' + (12801 + index) ||
        ids.has(question.id) || texts.has(key) ||
        question.answers.length !== 4 ||
        new Set(question.answers.map(normalise)).size !== 4 ||
        !question.answers.includes(question.correctAnswer) ||
        question.tags.length < 12 ||
        !['Hard', 'Medium'].includes(question.difficulty) ||
        question.dailyEligible !== true) {
        throw new Error('Pack 148 validation failed: ' + question.id);
    }
    ids.add(question.id);
    texts.add(key);
}

module.exports = questions;
