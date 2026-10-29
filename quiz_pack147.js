 // quiz_pack147.js
// PuzzlePilot - The Bigggggg Quiz
// Music Albums: Pack 147 - The 2010s
// 100 questions, music_12701 to music_12800
// Tagging audit: retain original facts, answers, IDs and difficulty.
// Release years remain in tags rather than routine question wording.

// Each entry: [year, album, artist, song].
// Song supplied: identify the album. Empty song: identify the artist.
const albumFacts = [
    [2010, "Loud", "Rihanna", "Only Girl (In the World)"],
    [2010, "Teenage Dream", "Katy Perry", "Firework"],
    [2010, "Speak Now", "Taylor Swift", "Mine"],
    [2010, "Recovery", "Eminem", "Not Afraid"],
    [2010, "Doo-Wops & Hooligans", "Bruno Mars", "Just the Way You Are"],
    [2010, "The Suburbs", "Arcade Fire", ""],
    [2010, "My Beautiful Dark Twisted Fantasy", "Kanye West", ""],
    [2010, "Plastic Beach", "Gorillaz", ""],
    [2010, "Progress", "Take That", ""],
    [2010, "The Lady Killer", "CeeLo Green", ""],

    [2011, "Born This Way", "Lady Gaga", "Born This Way"],
    [2011, "+", "Ed Sheeran", "The A Team"],
    [2011, "Mylo Xyloto", "Coldplay", "Paradise"],
    [2011, "Ceremonials", "Florence + the Machine", "Shake It Out"],
    [2011, "4", "Beyoncé", "Love on Top"],
    [2011, "Talk That Talk", "Rihanna", ""],
    [2011, "Wasting Light", "Foo Fighters", ""],
    [2011, "Stronger", "Kelly Clarkson", ""],
    [2011, "In Case You Didn't Know", "Olly Murs", ""],
    [2011, "Noel Gallagher's High Flying Birds", "Noel Gallagher's High Flying Birds", ""],

    [2012, "Red", "Taylor Swift", "We Are Never Ever Getting Back Together"],
    [2012, "Unapologetic", "Rihanna", "Diamonds"],
    [2012, "18 Months", "Calvin Harris", "Feel So Close"],
    [2012, "Babel", "Mumford & Sons", "I Will Wait"],
    [2012, "Some Nights", "fun.", "We Are Young"],
    [2012, "Believe", "Justin Bieber", ""],
    [2012, "Halcyon", "Ellie Goulding", ""],
    [2012, "The 2nd Law", "Muse", ""],
    [2012, "Channel Orange", "Frank Ocean", ""],
    [2012, "Jake Bugg", "Jake Bugg", ""],

    [2013, "AM", "Arctic Monkeys", "Do I Wanna Know?"],
    [2013, "Random Access Memories", "Daft Punk", "Get Lucky"],
    [2013, "Prism", "Katy Perry", "Roar"],
    [2013, "Bangerz", "Miley Cyrus", "Wrecking Ball"],
    [2013, "The Next Day", "David Bowie", "Where Are We Now?"],
    [2013, "Beyoncé", "Beyoncé", ""],
    [2013, "Midnight Memories", "One Direction", ""],
    [2013, "The 20/20 Experience", "Justin Timberlake", ""],
    [2013, "Pure Heroine", "Lorde", ""],
    [2013, "To Be Loved", "Michael Bublé", ""],

    [2014, "1989", "Taylor Swift", "Shake It Off"],
    [2014, "x", "Ed Sheeran", "Thinking Out Loud"],
    [2014, "In the Lonely Hour", "Sam Smith", "Stay with Me"],
    [2014, "Ghost Stories", "Coldplay", "A Sky Full of Stars"],
    [2014, "1000 Forms of Fear", "Sia", "Chandelier"],
    [2014, "Wanted on Voyage", "George Ezra", ""],
    [2014, "The New Classic", "Iggy Azalea", ""],
    [2014, "My Everything", "Ariana Grande", ""],
    [2014, "Four", "One Direction", ""],
    [2014, "Listen", "David Guetta", ""],

    [2015, "25", "Adele", "Hello"],
    [2015, "Purpose", "Justin Bieber", "Sorry"],
    [2015, "Beauty Behind the Madness", "The Weeknd", "Can't Feel My Face"],
    [2015, "Made in the A.M.", "One Direction", "Drag Me Down"],
    [2015, "Chaos and the Calm", "James Bay", "Hold Back the River"],
    [2015, "How Big, How Blue, How Beautiful", "Florence + the Machine", ""],
    [2015, "Get Weird", "Little Mix", ""],
    [2015, "Emotion", "Carly Rae Jepsen", ""],
    [2015, "Blurryface", "Twenty One Pilots", ""],
    [2015, "Currents", "Tame Impala", ""],

    [2016, "Lemonade", "Beyoncé", "Formation"],
    [2016, "Views", "Drake", "One Dance"],
    [2016, "Dangerous Woman", "Ariana Grande", "Into You"],
    [2016, "24K Magic", "Bruno Mars", "24K Magic"],
    [2016, "Starboy", "The Weeknd", "Starboy"],
    [2016, "Anti", "Rihanna", ""],
    [2016, "Glory", "Britney Spears", ""],
    [2016, "Joanne", "Lady Gaga", ""],
    [2016, "Blackstar", "David Bowie", ""],
    [2016, "Mind of Mine", "Zayn", ""],

    [2017, "÷", "Ed Sheeran", "Shape of You"],
    [2017, "Reputation", "Taylor Swift", "Look What You Made Me Do"],
    [2017, "Melodrama", "Lorde", "Green Light"],
    [2017, "DAMN.", "Kendrick Lamar", "HUMBLE."],
    [2017, "Evolve", "Imagine Dragons", "Believer"],
    [2017, "Beautiful Trauma", "Pink", ""],
    [2017, "Dua Lipa", "Dua Lipa", ""],
    [2017, "Harry Styles", "Harry Styles", ""],
    [2017, "One More Light", "Linkin Park", ""],
    [2017, "The Thrill of It All", "Sam Smith", ""],

    [2018, "Sweetener", "Ariana Grande", "No Tears Left to Cry"],
    [2018, "Invasion of Privacy", "Cardi B", "I Like It"],
    [2018, "Scorpion", "Drake", "God's Plan"],
    [2018, "Golden", "Kylie Minogue", "Dancing"],
    [2018, "Camila", "Camila Cabello", "Havana"],
    [2018, "Shawn Mendes", "Shawn Mendes", ""],
    [2018, "Love Yourself: Answer", "BTS", ""],
    [2018, "Phoenix", "Rita Ora", ""],
    [2018, "Always In Between", "Jess Glynne", ""],
    [2018, "beerbongs & bentleys", "Post Malone", ""],

    [2019, "When We All Fall Asleep, Where Do We Go?", "Billie Eilish", "bad guy"],
    [2019, "thank u, next", "Ariana Grande", "7 rings"],
    [2019, "Fine Line", "Harry Styles", "Adore You"],
    [2019, "Lover", "Taylor Swift", "You Need to Calm Down"],
    [2019, "No.6 Collaborations Project", "Ed Sheeran", "I Don't Care"],
    [2019, "Hollywood's Bleeding", "Post Malone", ""],
    [2019, "Divinely Uninspired to a Hellish Extent", "Lewis Capaldi", ""],
    [2019, "Norman Fucking Rockwell!", "Lana Del Rey", ""],
    [2019, "Madame X", "Madonna", ""],
    [2019, "Happiness Begins", "Jonas Brothers", ""]
];

// Artist and genre tags are added to each individual question.
const artistTagLines = {
    "Rihanna": "Barbadian music|pop music|rhythm and blues|dance-pop|female vocalists",
    "Katy Perry": "American music|pop music|dance-pop|female vocalists|singer-songwriters",
    "Taylor Swift": "American music|country pop|pop music|singer-songwriters|female vocalists",
    "Eminem": "American music|hip-hop|rap music|Detroit music|male rappers",
    "Bruno Mars": "American music|pop music|funk|rhythm and blues|male vocalists",
    "Arcade Fire": "Canadian music|indie rock|alternative rock|art rock|rock bands",
    "Kanye West": "American music|hip-hop|rap music|Chicago music|music producers",
    "Gorillaz": "UK music|alternative rock|electronic music|virtual bands|Damon Albarn",
    "Take That": "UK music|British pop|boy bands|pop groups|Gary Barlow|Robbie Williams",
    "CeeLo Green": "American music|soul|rhythm and blues|hip-hop|male vocalists",
    "Lady Gaga": "American music|dance-pop|electropop|pop music|female vocalists",
    "Ed Sheeran": "UK music|pop music|folk pop|singer-songwriters|acoustic music",
    "Coldplay": "UK music|alternative rock|pop rock|Chris Martin|rock bands",
    "Florence + the Machine": "UK music|indie rock|art pop|Florence Welch|female vocalists",
    "Beyoncé": "American music|rhythm and blues|pop music|female vocalists|Destiny's Child",
    "Foo Fighters": "American music|alternative rock|post-grunge|Dave Grohl|rock bands",
    "Kelly Clarkson": "American music|pop rock|pop music|female vocalists|American Idol",
    "Olly Murs": "UK music|British pop|pop music|male vocalists|The X Factor",
    "Noel Gallagher's High Flying Birds": "UK music|alternative rock|Britpop|Noel Gallagher|Oasis",
    "Calvin Harris": "Scottish music|UK music|electronic dance music|dance-pop|DJs",
    "Mumford & Sons": "UK music|folk rock|indie folk|Marcus Mumford|rock bands",
    "fun.": "American music|indie pop|pop rock|Nate Ruess|pop groups",
    "Justin Bieber": "Canadian music|pop music|dance-pop|rhythm and blues|male vocalists",
    "Ellie Goulding": "UK music|electropop|indie pop|female vocalists|singer-songwriters",
    "Muse": "UK music|alternative rock|progressive rock|Matt Bellamy|rock bands",
    "Frank Ocean": "American music|alternative R&B|neo soul|singer-songwriters|male vocalists",
    "Jake Bugg": "UK music|folk rock|indie rock|singer-songwriters|male vocalists",
    "Arctic Monkeys": "UK music|Sheffield music|indie rock|alternative rock|Alex Turner",
    "Daft Punk": "French music|French house|electronic music|disco|electronic duos",
    "Miley Cyrus": "American music|pop music|dance-pop|female vocalists|singer-songwriters",
    "David Bowie": "UK music|art rock|rock music|singer-songwriters|male vocalists",
    "One Direction": "UK music|Irish music|boy bands|teen pop|The X Factor",
    "Justin Timberlake": "American music|pop music|rhythm and blues|dance-pop|NSYNC",
    "Lorde": "New Zealand music|electropop|art pop|singer-songwriters|female vocalists",
    "Michael Bublé": "Canadian music|traditional pop|jazz vocals|crooners|male vocalists",
    "Sam Smith": "UK music|soul|pop music|singer-songwriters|ballads",
    "Sia": "Australian music|electropop|pop music|female vocalists|songwriters",
    "George Ezra": "UK music|folk pop|singer-songwriters|male vocalists|acoustic music",
    "Iggy Azalea": "Australian music|hip-hop|rap music|female rappers|pop rap",
    "Ariana Grande": "American music|pop music|rhythm and blues|dance-pop|female vocalists",
    "David Guetta": "French music|electronic dance music|house music|DJs|dance-pop",
    "Adele": "UK music|soul|pop music|singer-songwriters|female vocalists",
    "The Weeknd": "Canadian music|alternative R&B|pop music|synth-pop|male vocalists",
    "James Bay": "UK music|folk rock|pop rock|singer-songwriters|male vocalists",
    "Little Mix": "UK music|British pop|girl groups|dance-pop|The X Factor",
    "Carly Rae Jepsen": "Canadian music|synth-pop|dance-pop|female vocalists|pop music",
    "Twenty One Pilots": "American music|alternative rock|electropop|rap rock|musical duos",
    "Tame Impala": "Australian music|psychedelic rock|psychedelic pop|Kevin Parker|indie rock",
    "Drake": "Canadian music|hip-hop|rap music|Toronto music|rhythm and blues",
    "Britney Spears": "American music|dance-pop|pop music|female vocalists|electropop",
    "Zayn": "UK music|rhythm and blues|pop music|One Direction|male vocalists",
    "Kendrick Lamar": "American music|hip-hop|West Coast hip-hop|Compton music|rap music",
    "Imagine Dragons": "American music|pop rock|alternative rock|Las Vegas music|rock bands",
    "Pink": "American music|pop rock|pop music|female vocalists|singer-songwriters",
    "Dua Lipa": "UK music|dance-pop|pop music|female vocalists|synth-pop",
    "Harry Styles": "UK music|pop rock|pop music|One Direction|male vocalists",
    "Linkin Park": "American music|alternative rock|nu metal|Chester Bennington|Mike Shinoda",
    "Cardi B": "American music|hip-hop|rap music|female rappers|New York music",
    "Kylie Minogue": "Australian music|dance-pop|pop music|female vocalists|country pop",
    "Camila Cabello": "American music|Cuban music|Latin pop|pop music|female vocalists",
    "Shawn Mendes": "Canadian music|pop music|singer-songwriters|male vocalists|pop rock",
    "BTS": "South Korean music|K-pop|boy bands|Korean pop|vocal groups",
    "Rita Ora": "UK music|pop music|dance-pop|female vocalists|rhythm and blues",
    "Jess Glynne": "UK music|pop music|soul|dance-pop|female vocalists",
    "Post Malone": "American music|pop rap|hip-hop|trap music|male vocalists",
    "Billie Eilish": "American music|alternative pop|electropop|singer-songwriters|female vocalists",
    "Lewis Capaldi": "Scottish music|UK music|pop music|ballads|singer-songwriters",
    "Lana Del Rey": "American music|alternative pop|baroque pop|singer-songwriters|female vocalists",
    "Madonna": "American music|pop music|dance-pop|female vocalists|singer-songwriters",
    "Jonas Brothers": "American music|pop rock|pop music|boy bands|vocal groups"
};

// Album-specific tags only apply to the named album.
const albumTagLines = {
    "Loud": "Only Girl (In the World)|What's My Name?|S&M|Rihanna albums",
    "Teenage Dream": "Firework|California Gurls|Last Friday Night (T.G.I.F.)|Katy Perry albums",
    "Speak Now": "Mine|Back to December|Enchanted|Taylor Swift albums",
    "Recovery": "Not Afraid|Love the Way You Lie|Eminem albums",
    "Doo-Wops & Hooligans": "Just the Way You Are|Grenade|debut albums",
    "The Suburbs": "Ready to Start|Grammy Award-winning albums|Arcade Fire albums",
    "My Beautiful Dark Twisted Fantasy": "Power|Runaway|All of the Lights|Kanye West albums",
    "Plastic Beach": "Stylo|On Melancholy Hill|Gorillaz albums",
    "Progress": "The Flood|Robbie Williams reunion|Take That albums",
    "The Lady Killer": "Forget You|Bright Lights Bigger City|CeeLo Green albums",
    "Born This Way": "Born This Way|Judas|The Edge of Glory|Lady Gaga albums",
    "+": "The A Team|Lego House|debut albums|Ed Sheeran albums",
    "Mylo Xyloto": "Paradise|Every Teardrop Is a Waterfall|Coldplay albums",
    "Ceremonials": "Shake It Out|No Light No Light|Florence albums",
    "4": "Love on Top|Run the World (Girls)|Beyoncé albums",
    "Talk That Talk": "We Found Love|Where Have You Been|Rihanna albums",
    "Wasting Light": "Walk|Rope|Foo Fighters albums",
    "Stronger": "Stronger (What Doesn't Kill You)|Mr. Know It All|Kelly Clarkson albums",
    "In Case You Didn't Know": "Dance with Me Tonight|Heart Skips a Beat|Olly Murs albums",
    "Noel Gallagher's High Flying Birds": "debut albums|The Death of You and Me|If I Had a Gun",
    "Red": "We Are Never Ever Getting Back Together|I Knew You Were Trouble|Taylor Swift albums",
    "Unapologetic": "Diamonds|Stay|Rihanna albums",
    "18 Months": "Feel So Close|Sweet Nothing|Calvin Harris albums",
    "Babel": "I Will Wait|Lover of the Light|Mumford & Sons albums",
    "Some Nights": "We Are Young|Some Nights|Carry On|fun. albums",
    "Believe": "Boyfriend|As Long as You Love Me|Justin Bieber albums",
    "Halcyon": "Anything Could Happen|Figure 8|Ellie Goulding albums",
    "The 2nd Law": "Madness|Supremacy|Muse albums",
    "Channel Orange": "Thinkin Bout You|Pyramids|debut studio albums",
    "Jake Bugg": "Lightning Bolt|Two Fingers|debut albums",
    "AM": "Do I Wanna Know?|R U Mine?|Why'd You Only Call Me When You're High?|Arctic Monkeys albums",
    "Random Access Memories": "Get Lucky|Lose Yourself to Dance|Instant Crush|Daft Punk albums",
    "Prism": "Roar|Dark Horse|Katy Perry albums",
    "Bangerz": "Wrecking Ball|We Can't Stop|Miley Cyrus albums",
    "The Next Day": "Where Are We Now?|The Stars (Are Out Tonight)|David Bowie albums",
    "Beyoncé": "Drunk in Love|Partition|visual albums|Beyoncé albums",
    "Midnight Memories": "Story of My Life|Best Song Ever|One Direction albums",
    "The 20/20 Experience": "Mirrors|Suit & Tie|Justin Timberlake albums",
    "Pure Heroine": "Royals|Team|debut albums|Lorde albums",
    "To Be Loved": "It's a Beautiful Day|Close Your Eyes|Michael Bublé albums",
    "1989": "Shake It Off|Blank Space|Style|Taylor Swift albums",
    "x": "Thinking Out Loud|Sing|Photograph|Ed Sheeran albums",
    "In the Lonely Hour": "Stay with Me|I'm Not the Only One|debut albums|Sam Smith albums",
    "Ghost Stories": "A Sky Full of Stars|Magic|Coldplay albums",
    "1000 Forms of Fear": "Chandelier|Elastic Heart|Sia albums",
    "Wanted on Voyage": "Budapest|Blame It on Me|debut albums",
    "The New Classic": "Fancy|Black Widow|debut albums",
    "My Everything": "Problem|Break Free|Ariana Grande albums",
    "Four": "Steal My Girl|Night Changes|One Direction albums",
    "Listen": "Dangerous|Lovers on the Sun|David Guetta albums",
    "25": "Hello|When We Were Young|Send My Love (To Your New Lover)|Adele albums",
    "Purpose": "Sorry|What Do You Mean?|Love Yourself|Justin Bieber albums",
    "Beauty Behind the Madness": "Can't Feel My Face|The Hills|Earned It|The Weeknd albums",
    "Made in the A.M.": "Drag Me Down|Perfect|One Direction albums",
    "Chaos and the Calm": "Hold Back the River|Let It Go|debut albums",
    "How Big, How Blue, How Beautiful": "Ship to Wreck|What Kind of Man|Florence albums",
    "Get Weird": "Black Magic|Love Me Like You|Little Mix albums",
    "Emotion": "Run Away with Me|I Really Like You|Carly Rae Jepsen albums",
    "Blurryface": "Stressed Out|Ride|Twenty One Pilots albums",
    "Currents": "The Less I Know the Better|Let It Happen|Tame Impala albums",
    "Lemonade": "Formation|Hold Up|Sorry|Beyoncé albums|visual albums",
    "Views": "One Dance|Hotline Bling|Drake albums",
    "Dangerous Woman": "Into You|Dangerous Woman|Side to Side|Ariana Grande albums",
    "24K Magic": "24K Magic|That's What I Like|Bruno Mars albums",
    "Starboy": "Starboy|I Feel It Coming|The Weeknd albums",
    "Anti": "Work|Needed Me|Love on the Brain|Rihanna albums",
    "Glory": "Make Me...|Slumber Party|Britney Spears albums",
    "Joanne": "Million Reasons|Perfect Illusion|Lady Gaga albums",
    "Blackstar": "Lazarus|Blackstar|David Bowie albums|final studio albums",
    "Mind of Mine": "Pillowtalk|Like I Would|debut solo albums",
    "÷": "Shape of You|Castle on the Hill|Perfect|Ed Sheeran albums",
    "Reputation": "Look What You Made Me Do|Delicate|Ready for It?|Taylor Swift albums",
    "Melodrama": "Green Light|Liability|Lorde albums",
    "DAMN.": "HUMBLE.|DNA.|LOYALTY.|Pulitzer Prize for Music",
    "Evolve": "Believer|Thunder|Whatever It Takes|Imagine Dragons albums",
    "Beautiful Trauma": "What About Us|Beautiful Trauma|Pink albums",
    "Dua Lipa": "New Rules|Be the One|debut albums",
    "Harry Styles": "Sign of the Times|Kiwi|debut solo albums",
    "One More Light": "Heavy|One More Light|Linkin Park albums",
    "The Thrill of It All": "Too Good at Goodbyes|Pray|Sam Smith albums",
    "Sweetener": "No Tears Left to Cry|God Is a Woman|Ariana Grande albums",
    "Invasion of Privacy": "I Like It|Bodak Yellow|debut albums|Grammy Award-winning albums",
    "Scorpion": "God's Plan|In My Feelings|Nice for What|Drake albums",
    "Golden": "Dancing|Stop Me from Falling|Kylie Minogue albums|country pop",
    "Camila": "Havana|Never Be the Same|debut solo albums",
    "Shawn Mendes": "In My Blood|Lost in Japan|Shawn Mendes albums",
    "Love Yourself: Answer": "IDOL|Euphoria|BTS albums|K-pop albums",
    "Phoenix": "Let You Love Me|Anywhere|Rita Ora albums",
    "Always In Between": "I'll Be There|All I Am|Jess Glynne albums",
    "beerbongs & bentleys": "Rockstar|Psycho|Better Now|Post Malone albums",
    "When We All Fall Asleep, Where Do We Go?": "bad guy|bury a friend|when the party's over|debut albums",
    "thank u, next": "7 rings|thank u next|break up with your girlfriend I'm bored|Ariana Grande albums",
    "Fine Line": "Adore You|Watermelon Sugar|Falling|Harry Styles albums",
    "Lover": "You Need to Calm Down|ME!|The Man|Taylor Swift albums",
    "No.6 Collaborations Project": "I Don't Care|Beautiful People|South of the Border|Ed Sheeran albums",
    "Hollywood's Bleeding": "Circles|Sunflower|Goodbyes|Post Malone albums",
    "Divinely Uninspired to a Hellish Extent": "Someone You Loved|Before You Go|debut albums",
    "Norman Fucking Rockwell!": "Venice Bitch|Mariners Apartment Complex|Lana Del Rey albums",
    "Madame X": "Medellín|Crave|Madonna albums",
    "Happiness Begins": "Sucker|Only Human|Jonas Brothers reunion"
};

const normalise = value => String(value).trim().toLowerCase().replace(/\s+/g, ' ');
const splitTags = value => value ? value.split('|') : [];

if (albumFacts.length !== 100) {
    throw new Error('Pack 147 must contain exactly 100 albums.');
}

const seenAlbums = new Set();
for (const [year, album, artist, song] of albumFacts) {
    if (!Number.isInteger(year) || year < 2010 || year > 2019 ||
        typeof album !== 'string' || !album.trim() ||
        typeof artist !== 'string' || !artist.trim() ||
        typeof song !== 'string' || !artistTagLines[artist] ||
        !albumTagLines[album]) {
        throw new Error('Invalid or untagged Pack 147 album: ' + album);
    }
    const key = normalise(album);
    if (seenAlbums.has(key)) {
        throw new Error('Repeated album in Pack 147: ' + album);
    }
    seenAlbums.add(key);
}

// Preserve original same-year distractors and correct-answer positions.
function chooseWrongAnswers(year, album, artist, wantsAlbum, index) {
    const sameYear = albumFacts.filter(fact => fact[0] === year);
    const candidates = wantsAlbum
        ? sameYear.filter(fact => fact[2] !== artist).map(fact => fact[1])
        : [...new Set(sameYear.map(fact => fact[2]))]
            .filter(name => name !== artist);
    if (candidates.length < 3) {
        throw new Error('Insufficient answer choices for ' + album);
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
        '2010s', 'Albums', wantsAlbum ? 'Album tracks' : 'Artists',
        'Music', 'album trivia', 'album history', String(year),
        wantsAlbum ? 'album identification' : 'artist identification',
        album, artist,
        ...splitTags(artistTagLines[artist]),
        ...splitTags(albumTagLines[album]),
        ...(wantsAlbum ? [song, 'album tracks'] : [])
    ])];
    return {
        id: 'music_' + (12701 + index),
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

// Check every finished question before the quiz bank uses this pack.
const ids = new Set();
const texts = new Set();
for (const [index, q] of questions.entries()) {
    const key = normalise(q.question);
    if (q.id !== 'music_' + (12701 + index) ||
        ids.has(q.id) || texts.has(key) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        !q.answers.includes(q.correctAnswer) ||
        q.tags.length < 12 ||
        !['Medium', 'Hard'].includes(q.difficulty) ||
        q.dailyEligible !== true) {
        throw new Error('Pack 147 validation failed: ' + q.id);
    }
    ids.add(q.id);
    texts.add(key);
}

module.exports = questions;
