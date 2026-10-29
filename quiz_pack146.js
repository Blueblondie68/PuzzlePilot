 // quiz_pack146.js
// PuzzlePilot - The Bigggggg Quiz
// Music Albums: Pack 146 - The 2000s
// 100 questions, music_12601 to music_12700.
// Audit: original facts, answer choices, IDs, difficulty and eligibility retained.
// Release years appear in tags, not routinely in player-facing wording.

// Each entry: [year, album, artist, song].
// A named song asks for the album; a blank song asks for the artist.
const albumFacts = [
    [2000, "Parachutes", "Coldplay", "Yellow"],
    [2000, "The Marshall Mathers LP", "Eminem", "The Real Slim Shady"],
    [2000, "Oops!... I Did It Again", "Britney Spears", "Oops!... I Did It Again"],
    [2000, "All That You Can't Leave Behind", "U2", "Beautiful Day"],
    [2000, "Sing When You're Winning", "Robbie Williams", "Rock DJ"],
    [2000, "Kid A", "Radiohead", ""],
    [2000, "Hybrid Theory", "Linkin Park", ""],
    [2000, "Whoa, Nelly!", "Nelly Furtado", ""],
    [2000, "White Pony", "Deftones", ""],
    [2000, "The Hour of Bewilderbeast", "Badly Drawn Boy", ""],
    [2001, "Is This It", "The Strokes", "Last Nite"],
    [2001, "Origin of Symmetry", "Muse", "Plug In Baby"],
    [2001, "Discovery", "Daft Punk", "One More Time"],
    [2001, "Fever", "Kylie Minogue", "Can't Get You Out of My Head"],
    [2001, "Songs in A Minor", "Alicia Keys", "Fallin'"],
    [2001, "Laundry Service", "Shakira", ""],
    [2001, "The Blueprint", "Jay-Z", ""],
    [2001, "Gorillaz", "Gorillaz", ""],
    [2001, "A Funk Odyssey", "Jamiroquai", ""],
    [2001, "Vespertine", "Björk", ""],
    [2002, "A Rush of Blood to the Head", "Coldplay", "The Scientist"],
    [2002, "The Eminem Show", "Eminem", "Without Me"],
    [2002, "Let Go", "Avril Lavigne", "Complicated"],
    [2002, "By the Way", "Red Hot Chili Peppers", "By the Way"],
    [2002, "Justified", "Justin Timberlake", "Cry Me a River"],
    [2002, "Heathen", "David Bowie", ""],
    [2002, "Turn on the Bright Lights", "Interpol", ""],
    [2002, "Yoshimi Battles the Pink Robots", "The Flaming Lips", ""],
    [2002, "One by One", "Foo Fighters", ""],
    [2002, "The Coral", "The Coral", ""],
    [2003, "Permission to Land", "The Darkness", "I Believe in a Thing Called Love"],
    [2003, "Fallen", "Evanescence", "Bring Me to Life"],
    [2003, "Speakerboxxx/The Love Below", "OutKast", "Hey Ya!"],
    [2003, "In the Zone", "Britney Spears", "Toxic"],
    [2003, "Life for Rent", "Dido", "White Flag"],
    [2003, "Elephant", "The White Stripes", ""],
    [2003, "Room on Fire", "The Strokes", ""],
    [2003, "Absolution", "Muse", ""],
    [2003, "Meteora", "Linkin Park", ""],
    [2003, "Frank", "Amy Winehouse", ""],
    [2004, "Confessions", "Usher", "Yeah!"],
    [2004, "How to Dismantle an Atomic Bomb", "U2", "Vertigo"],
    [2004, "Hopes and Fears", "Keane", "Somewhere Only We Know"],
    [2004, "Scissor Sisters", "Scissor Sisters", "Take Your Mama"],
    [2004, "Eye to the Telescope", "KT Tunstall", "Black Horse and the Cherry Tree"],
    [2004, "Encore", "Eminem", ""],
    [2004, "The College Dropout", "Kanye West", ""],
    [2004, "Franz Ferdinand", "Franz Ferdinand", ""],
    [2004, "Kasabian", "Kasabian", ""],
    [2004, "Three Cheers for Sweet Revenge", "My Chemical Romance", ""],
    [2005, "X&Y", "Coldplay", "Speed of Sound"],
    [2005, "Demon Days", "Gorillaz", "Feel Good Inc."],
    [2005, "Confessions on a Dance Floor", "Madonna", "Hung Up"],
    [2005, "The Emancipation of Mimi", "Mariah Carey", "We Belong Together"],
    [2005, "All the Right Reasons", "Nickelback", "Photograph"],
    [2005, "Aerial", "Kate Bush", ""],
    [2005, "Employment", "Kaiser Chiefs", ""],
    [2005, "Intensive Care", "Robbie Williams", ""],
    [2005, "Extraordinary Machine", "Fiona Apple", ""],
    [2005, "The Understanding", "Röyksopp", ""],
    [2006, "Whatever People Say I Am, That's What I'm Not", "Arctic Monkeys", "I Bet You Look Good on the Dancefloor"],
    [2006, "Back to Basics", "Christina Aguilera", "Ain't No Other Man"],
    [2006, "FutureSex/LoveSounds", "Justin Timberlake", "SexyBack"],
    [2006, "The Open Door", "Evanescence", "Call Me When You're Sober"],
    [2006, "Loose", "Nelly Furtado", "Maneater"],
    [2006, "The Black Parade", "My Chemical Romance", ""],
    [2006, "Ta-Dah", "Scissor Sisters", ""],
    [2006, "Eyes Open", "Snow Patrol", ""],
    [2006, "St. Elsewhere", "Gnarls Barkley", ""],
    [2006, "Rudebox", "Robbie Williams", ""],
    [2007, "Good Girl Gone Bad", "Rihanna", "Umbrella"],
    [2007, "Graduation", "Kanye West", "Stronger"],
    [2007, "Echoes, Silence, Patience & Grace", "Foo Fighters", "The Pretender"],
    [2007, "Spirit", "Leona Lewis", "Bleeding Love"],
    [2007, "The Reminder", "Feist", "1234"],
    [2007, "Favourite Worst Nightmare", "Arctic Monkeys", ""],
    [2007, "In Rainbows", "Radiohead", ""],
    [2007, "Blackout", "Britney Spears", ""],
    [2007, "X", "Kylie Minogue", ""],
    [2007, "Because of the Times", "Kings of Leon", ""],
    [2008, "Viva la Vida or Death and All His Friends", "Coldplay", "Viva la Vida"],
    [2008, "Only by the Night", "Kings of Leon", "Sex on Fire"],
    [2008, "19", "Adele", "Chasing Pavements"],
    [2008, "The Fame", "Lady Gaga", "Just Dance"],
    [2008, "Funhouse", "Pink", "So What"],
    [2008, "The Seldom Seen Kid", "Elbow", ""],
    [2008, "Day & Age", "The Killers", ""],
    [2008, "The Script", "The Script", ""],
    [2008, "Dig Out Your Soul", "Oasis", ""],
    [2008, "Rockferry", "Duffy", ""],
    [2009, "The E.N.D.", "The Black Eyed Peas", "I Gotta Feeling"],
    [2009, "Lungs", "Florence + the Machine", "Dog Days Are Over"],
    [2009, "The Resistance", "Muse", "Uprising"],
    [2009, "The Element of Freedom", "Alicia Keys", "Doesn't Mean Anything"],
    [2009, "The Blueprint 3", "Jay-Z", "Empire State of Mind"],
    [2009, "The Boy Who Knew Too Much", "Mika", ""],
    [2009, "The Fall", "Norah Jones", ""],
    [2009, "3 Words", "Cheryl Cole", ""],
    [2009, "Humbug", "Arctic Monkeys", ""],
    [2009, "xx", "The xx", ""]
];

// Genre, location, artist and specialist tags expanded into every question.
const artistTagLines = {
    "Coldplay": "UK music|alternative rock|pop rock|Chris Martin|British bands",
    "Eminem": "American music|hip-hop|rap music|Detroit music|Dr. Dre",
    "Britney Spears": "American music|teen pop|dance-pop|pop music|female vocalists",
    "U2": "Irish music|rock music|alternative rock|Bono|The Edge",
    "Robbie Williams": "UK music|British pop|pop rock|male vocalists|Take That",
    "Radiohead": "UK music|alternative rock|art rock|experimental rock|Thom Yorke",
    "Linkin Park": "American music|nu metal|alternative rock|rap rock|Chester Bennington|Mike Shinoda",
    "Nelly Furtado": "Canadian music|pop music|rhythm and blues|female vocalists|singer-songwriters",
    "Deftones": "American music|alternative metal|nu metal|Chino Moreno|rock bands",
    "Badly Drawn Boy": "UK music|Manchester music|indie rock|singer-songwriters|Damon Gough",
    "The Strokes": "American music|New York music|indie rock|garage rock revival|Julian Casablancas",
    "Muse": "UK music|alternative rock|progressive rock|Matt Bellamy|rock bands",
    "Daft Punk": "French music|French house|electronic dance music|Thomas Bangalter|Guy-Manuel de Homem-Christo",
    "Kylie Minogue": "Australian music|dance-pop|pop music|female vocalists|synth-pop",
    "Alicia Keys": "American music|rhythm and blues|neo soul|singer-songwriters|pianists|female vocalists",
    "Shakira": "Colombian music|Latin pop|pop rock|female vocalists|singer-songwriters",
    "Jay-Z": "American music|hip-hop|East Coast hip-hop|New York rap|Brooklyn music",
    "Gorillaz": "UK music|alternative rock|virtual bands|Damon Albarn|electronic music",
    "Jamiroquai": "UK music|acid jazz|funk|dance music|Jay Kay",
    "Björk": "Icelandic music|art pop|electronic music|experimental pop|female vocalists",
    "Avril Lavigne": "Canadian music|pop punk|pop rock|female vocalists|singer-songwriters",
    "Red Hot Chili Peppers": "American music|funk rock|alternative rock|Anthony Kiedis|Flea",
    "Justin Timberlake": "American music|pop music|rhythm and blues|dance-pop|NSYNC",
    "David Bowie": "UK music|art rock|rock music|singer-songwriters|male vocalists",
    "Interpol": "American music|New York music|post-punk revival|indie rock|Paul Banks",
    "The Flaming Lips": "American music|neo-psychedelia|alternative rock|Wayne Coyne|experimental rock",
    "Foo Fighters": "American music|alternative rock|post-grunge|Dave Grohl|rock bands",
    "The Coral": "UK music|Liverpool music|indie rock|neo-psychedelia|James Skelly",
    "The Darkness": "UK music|hard rock|glam rock|Justin Hawkins|rock bands",
    "Evanescence": "American music|alternative metal|gothic rock|Amy Lee|rock bands",
    "OutKast": "American music|Atlanta music|southern hip-hop|rap music|André 3000|Big Boi",
    "Dido": "UK music|pop music|downtempo|singer-songwriters|female vocalists",
    "The White Stripes": "American music|Detroit music|garage rock revival|Jack White|Meg White",
    "Amy Winehouse": "UK music|soul|jazz vocals|rhythm and blues|female vocalists",
    "Usher": "American music|rhythm and blues|pop music|male vocalists|Atlanta music",
    "Keane": "UK music|piano rock|alternative rock|pop rock|Tom Chaplin",
    "Scissor Sisters": "American music|dance-rock|disco|glam rock|Jake Shears|Ana Matronic",
    "KT Tunstall": "Scottish music|UK music|folk rock|pop rock|singer-songwriters|female vocalists",
    "Kanye West": "American music|hip-hop|Chicago music|rap music|music producers",
    "Franz Ferdinand": "Scottish music|UK music|indie rock|post-punk revival|Alex Kapranos",
    "Kasabian": "UK music|indie rock|alternative rock|electronic rock|Leicester music",
    "My Chemical Romance": "American music|alternative rock|emo|pop punk|Gerard Way",
    "Madonna": "American music|pop music|dance-pop|female vocalists|singer-songwriters",
    "Mariah Carey": "American music|rhythm and blues|pop music|soul|female vocalists",
    "Nickelback": "Canadian music|post-grunge|hard rock|Chad Kroeger|rock bands",
    "Kate Bush": "UK music|art pop|art rock|experimental pop|female vocalists",
    "Kaiser Chiefs": "UK music|indie rock|post-punk revival|Leeds music|Ricky Wilson",
    "Fiona Apple": "American music|alternative rock|piano rock|singer-songwriters|female vocalists",
    "Röyksopp": "Norwegian music|electronic music|downtempo|synth-pop|electronic duos",
    "Arctic Monkeys": "UK music|Sheffield music|indie rock|alternative rock|Alex Turner",
    "Christina Aguilera": "American music|pop music|rhythm and blues|female vocalists|soul",
    "Snow Patrol": "UK music|Northern Irish music|Scottish music|alternative rock|Gary Lightbody",
    "Gnarls Barkley": "American music|alternative soul|soul|hip-hop|Danger Mouse|CeeLo Green",
    "Rihanna": "Barbadian music|pop music|rhythm and blues|dance-pop|female vocalists",
    "Leona Lewis": "UK music|pop music|soul|rhythm and blues|female vocalists",
    "Feist": "Canadian music|indie pop|folk pop|singer-songwriters|female vocalists",
    "Kings of Leon": "American music|alternative rock|southern rock|rock bands|Caleb Followill",
    "Adele": "UK music|soul|pop music|singer-songwriters|female vocalists",
    "Lady Gaga": "American music|dance-pop|electropop|pop music|female vocalists",
    "Pink": "American music|pop rock|pop music|female vocalists|singer-songwriters",
    "Elbow": "UK music|Manchester music|alternative rock|indie rock|Guy Garvey",
    "The Killers": "American music|Las Vegas music|indie rock|new wave|Brandon Flowers",
    "The Script": "Irish music|pop rock|soft rock|Danny O'Donoghue",
    "Oasis": "UK music|Manchester music|Britpop|alternative rock|Noel Gallagher|Liam Gallagher",
    "Duffy": "Welsh music|UK music|soul|blue-eyed soul|female vocalists",
    "The Black Eyed Peas": "American music|hip-hop|dance-pop|electropop|will.i.am|Fergie",
    "Florence + the Machine": "UK music|indie rock|art pop|indie pop|Florence Welch|female vocalists",
    "Cheryl Cole": "UK music|dance-pop|pop music|female vocalists|Girls Aloud",
    "Norah Jones": "American music|jazz vocals|pop music|singer-songwriters|female vocalists",
    "Mika": "UK music|pop music|glam pop|singer-songwriters|male vocalists",
    "The xx": "UK music|London music|indie pop|dream pop|minimalist music|Jamie xx"
};

// Album-specific tracks and themes; no tags leak across unrelated albums.
const albumTagLines = {
    "Parachutes": "debut albums|Yellow|Trouble",
    "The Marshall Mathers LP": "The Real Slim Shady|Stan|hip-hop classics",
    "Oops!... I Did It Again": "Oops!... I Did It Again|Lucky|teen pop albums",
    "All That You Can't Leave Behind": "Beautiful Day|Walk On|U2 albums",
    "Sing When You're Winning": "Rock DJ|Supreme|Robbie Williams albums",
    "Kid A": "Everything in Its Right Place|experimental rock|Radiohead albums",
    "Hybrid Theory": "debut albums|In the End|Crawling|nu metal classics",
    "Whoa, Nelly!": "debut albums|I'm Like a Bird|Turn Off the Light",
    "White Pony": "Change (In the House of Flies)|alternative metal albums",
    "The Hour of Bewilderbeast": "debut albums|The Shining|Mercury Prize winners",
    "Is This It": "debut albums|Last Nite|Someday|garage rock revival",
    "Origin of Symmetry": "Plug In Baby|New Born|Muse albums",
    "Discovery": "One More Time|Harder Better Faster Stronger|French house classics",
    "Fever": "Can't Get You Out of My Head|In Your Eyes|Kylie Minogue albums",
    "Songs in A Minor": "Fallin'|A Woman's Worth|debut albums",
    "Laundry Service": "Whenever Wherever|Underneath Your Clothes|English-language crossover albums",
    "The Blueprint": "Izzo (H.O.V.A.)|Song Cry|hip-hop classics",
    "Gorillaz": "debut albums|Clint Eastwood|19-2000|virtual bands",
    "A Funk Odyssey": "Little L|You Give Me Something|Jamiroquai albums",
    "Vespertine": "Hidden Place|Pagan Poetry|Björk albums",
    "A Rush of Blood to the Head": "The Scientist|Clocks|Coldplay albums",
    "The Eminem Show": "Without Me|Cleanin' Out My Closet|hip-hop classics",
    "Let Go": "Complicated|Sk8er Boi|debut albums",
    "By the Way": "By the Way|Can't Stop|Red Hot Chili Peppers albums",
    "Justified": "Cry Me a River|Rock Your Body|debut solo albums",
    "Heathen": "Slow Burn|Everyone Says Hi|David Bowie albums",
    "Turn on the Bright Lights": "debut albums|Obstacle 1|post-punk revival",
    "Yoshimi Battles the Pink Robots": "Do You Realize??|psychedelic rock albums",
    "One by One": "All My Life|Times Like These|Foo Fighters albums",
    "The Coral": "debut albums|Dreaming of You|Liverpool indie",
    "Permission to Land": "debut albums|I Believe in a Thing Called Love|Growing on Me",
    "Fallen": "debut albums|Bring Me to Life|My Immortal",
    "Speakerboxxx/The Love Below": "Hey Ya!|The Way You Move|double albums|Grammy Award-winning albums",
    "In the Zone": "Toxic|Everytime|Britney Spears albums",
    "Life for Rent": "White Flag|Life for Rent|Dido albums",
    "Elephant": "Seven Nation Army|The Hardest Button to Button|White Stripes albums",
    "Room on Fire": "12:51|Reptilia|Strokes albums",
    "Absolution": "Time Is Running Out|Hysteria|Muse albums",
    "Meteora": "Numb|Somewhere I Belong|Linkin Park albums",
    "Frank": "debut albums|Stronger Than Me|Amy Winehouse albums",
    "Confessions": "Yeah!|Burn|Confessions Part II|Usher albums",
    "How to Dismantle an Atomic Bomb": "Vertigo|Sometimes You Can't Make It on Your Own|U2 albums",
    "Hopes and Fears": "Somewhere Only We Know|Everybody's Changing|debut albums",
    "Scissor Sisters": "Take Your Mama|Laura|debut albums",
    "Eye to the Telescope": "Black Horse and the Cherry Tree|Suddenly I See|debut albums",
    "Encore": "Mockingbird|Like Toy Soldiers|Eminem albums",
    "The College Dropout": "Through the Wire|Jesus Walks|debut albums",
    "Franz Ferdinand": "Take Me Out|This Fire|debut albums",
    "Kasabian": "Club Foot|L.S.F.|debut albums",
    "Three Cheers for Sweet Revenge": "I'm Not Okay (I Promise)|Helena|My Chemical Romance albums",
    "X&Y": "Speed of Sound|Fix You|Coldplay albums",
    "Demon Days": "Feel Good Inc.|DARE|Gorillaz albums",
    "Confessions on a Dance Floor": "Hung Up|Sorry|disco revival|Madonna albums",
    "The Emancipation of Mimi": "We Belong Together|It's Like That|Mariah Carey albums",
    "All the Right Reasons": "Photograph|Rockstar|Nickelback albums",
    "Aerial": "double albums|King of the Mountain|Kate Bush albums",
    "Employment": "I Predict a Riot|Oh My God|debut albums",
    "Intensive Care": "Tripping|Advertising Space|Robbie Williams albums",
    "Extraordinary Machine": "O' Sailor|Not About Love|Fiona Apple albums",
    "The Understanding": "Only This Moment|What Else Is There?|Röyksopp albums",
    "Whatever People Say I Am, That's What I'm Not": "debut albums|I Bet You Look Good on the Dancefloor|When the Sun Goes Down",
    "Back to Basics": "Ain't No Other Man|Hurt|double albums",
    "FutureSex/LoveSounds": "SexyBack|My Love|Justin Timberlake albums",
    "The Open Door": "Call Me When You're Sober|Lithium|Evanescence albums",
    "Loose": "Maneater|Promiscuous|Say It Right|Nelly Furtado albums",
    "The Black Parade": "Welcome to the Black Parade|Teenagers|concept albums",
    "Ta-Dah": "I Don't Feel Like Dancin'|Scissor Sisters albums",
    "Eyes Open": "Chasing Cars|Open Your Eyes|Snow Patrol albums",
    "St. Elsewhere": "Crazy|Smiley Faces|debut albums",
    "Rudebox": "Rudebox|Lovelight|Robbie Williams albums",
    "Good Girl Gone Bad": "Umbrella|Don't Stop the Music|Rihanna albums",
    "Graduation": "Stronger|Good Life|Kanye West albums",
    "Echoes, Silence, Patience & Grace": "The Pretender|Long Road to Ruin|Foo Fighters albums",
    "Spirit": "Bleeding Love|Better in Time|debut albums",
    "The Reminder": "1234|My Moon My Man|Feist albums",
    "Favourite Worst Nightmare": "Brianstorm|Fluorescent Adolescent|Arctic Monkeys albums",
    "In Rainbows": "Nude|Jigsaw Falling into Place|Radiohead albums",
    "Blackout": "Gimme More|Piece of Me|Britney Spears albums",
    "X": "2 Hearts|Wow|Kylie Minogue albums",
    "Because of the Times": "On Call|Fans|Kings of Leon albums",
    "Viva la Vida or Death and All His Friends": "Viva la Vida|Violet Hill|Coldplay albums",
    "Only by the Night": "Sex on Fire|Use Somebody|Kings of Leon albums",
    "19": "debut albums|Chasing Pavements|Hometown Glory|Adele albums",
    "The Fame": "debut albums|Just Dance|Poker Face|Lady Gaga albums",
    "Funhouse": "So What|Sober|Pink albums",
    "The Seldom Seen Kid": "One Day Like This|Grounds for Divorce|Mercury Prize winners",
    "Day & Age": "Human|Spaceman|Killers albums",
    "The Script": "debut albums|The Man Who Can't Be Moved|We Cry",
    "Dig Out Your Soul": "The Shock of the Lightning|I'm Outta Time|Oasis albums",
    "Rockferry": "debut albums|Mercy|Warwick Avenue|Duffy albums",
    "The E.N.D.": "I Gotta Feeling|Boom Boom Pow|The Black Eyed Peas albums",
    "Lungs": "debut albums|Dog Days Are Over|Rabbit Heart|Florence Welch",
    "The Resistance": "Uprising|Undisclosed Desires|Muse albums",
    "The Element of Freedom": "Doesn't Mean Anything|Try Sleeping with a Broken Heart|Alicia Keys albums",
    "The Blueprint 3": "Empire State of Mind|Run This Town|Jay-Z albums",
    "The Boy Who Knew Too Much": "We Are Golden|Blame It on the Girls|Mika albums",
    "The Fall": "Chasing Pirates|Norah Jones albums",
    "3 Words": "Fight for This Love|3 Words|debut solo albums",
    "Humbug": "Crying Lightning|Cornerstone|Arctic Monkeys albums",
    "xx": "debut albums|Crystalised|Islands|indie pop classics"
};

// Keep the original same-year distractors and answer positions.
const normalise = value => String(value).trim().toLowerCase().replace(/\s+/g, ' ');
const splitTags = value => value ? value.split('|') : [];

if (albumFacts.length !== 100) {
    throw new Error('Pack 146 must contain exactly 100 albums.');
}

const seenAlbums = new Set();
for (const [year, album, artist, song] of albumFacts) {
    if (!Number.isInteger(year) || year < 2000 || year > 2009 ||
        typeof album !== 'string' || !album.trim() ||
        typeof artist !== 'string' || !artist.trim() ||
        typeof song !== 'string' || !artistTagLines[artist] ||
        !albumTagLines[album]) {
        throw new Error('Invalid or untagged Pack 146 album: ' + album);
    }
    const key = normalise(album);
    if (seenAlbums.has(key)) {
        throw new Error('Repeated Pack 146 album: ' + album);
    }
    seenAlbums.add(key);
}

function chooseWrongAnswers(year, album, artist, wantsAlbum, index) {
    const sameYear = albumFacts.filter(fact => fact[0] === year);
    const candidates = wantsAlbum
        ? sameYear.filter(fact => fact[2] !== artist).map(fact => fact[1])
        : [...new Set(sameYear.map(fact => fact[2]))]
            .filter(name => name !== artist);
    if (candidates.length < 3) {
        throw new Error('Not enough answer choices for ' + album);
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
        '2000s', 'Albums', wantsAlbum ? 'Album tracks' : 'Artists',
        'Music', 'album trivia', 'album history', String(year),
        wantsAlbum ? 'album identification' : 'artist identification',
        album, artist,
        ...splitTags(artistTagLines[artist]),
        ...splitTags(albumTagLines[album]),
        ...(wantsAlbum ? [song, 'album tracks'] : [])
    ])];
    return {
        id: 'music_' + (12601 + index),
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

// Validate every generated question before the bank uses this pack.
const ids = new Set();
const texts = new Set();
for (const [index, q] of questions.entries()) {
    const key = normalise(q.question);
    if (q.id !== 'music_' + (12601 + index) ||
        ids.has(q.id) || texts.has(key) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        !q.answers.includes(q.correctAnswer) ||
        q.tags.length < 12 ||
        !['Medium', 'Hard'].includes(q.difficulty) ||
        q.dailyEligible !== true) {
        throw new Error('Pack 146 validation failed: ' + q.id);
    }
    ids.add(q.id);
    texts.add(key);
}

module.exports = questions;
