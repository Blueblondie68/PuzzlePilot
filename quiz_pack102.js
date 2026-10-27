// quiz_pack102.js
// PuzzlePilot Bigggggg Quiz - Music Pack 102
// Tagging audit: 100 questions, IDs music_8267 to music_8366.
// All original IDs, answers, answer options, difficulties and Daily Quiz settings kept.
// Three unverified recordings replaced with verified album questions.
// Courteeners' 2010 single has accurate decade metadata.

const songs = [
    ["Local Boy", "The Rifles"],
    ["Repeated Offender", "The Rifles"],
    ["Peace & Quiet", "The Rifles"],
    ["Romeo & Julie", "The Rifles"],
    ["The Great Escape", "The Rifles"],
    ["Fall to Sorrow", "The Rifles"],
    ["Sometimes", "The Rifles"],
    ["Winter Calls", "The Rifles"],

    ["Karaoke Plays", "Maximo Park"],
    ["The Unshockable", "Maximo Park"],
    ["Questing, Not Coasting", "Maximo Park"],
    ["The Kids Are Sick Again", "Maximo Park"],

    ["You Don't Know Love", "Editors"],
    ["The Weight of the World", "Editors"],
    ["When Anger Shows", "Editors"],

    ["Wide Awake", "The Twang"],
    ["Either Way", "The Twang"],
    ["Two Lovers", "The Twang"],
    ["Push the Ghosts", "The Twang"],
    ["Ice Cream Sundae", "The Twang"],
    ["Barney Rubble", "The Twang"],
    ["Encouraging Sign", "The Twang"],
    ["Got Me Sussed", "The Twang"],
    ["Cloudy Room", "The Twang"],
    ["The Neighbour", "The Twang"],

    ["This Song", "The Enemy"],
    ["It's Not OK", "The Enemy"],
    ["Elephant Song", "The Enemy"],

    ["Hold On", "Razorlight"],
    ["Who Needs Love?", "Razorlight"],

    ["Polmont on My Mind", "Glasvegas"],
    ["S.A.D. Light", "Glasvegas"],
    ["Stabbed", "Glasvegas"],
    ["Ice Cream Van", "Glasvegas"],

    ["Heavyweight Champion of the World", "Reverend and the Makers"],
    ["He Said He Loved Me", "Reverend and the Makers"],
    ["Open Your Window", "Reverend and the Makers"],
    ["The State of Things", "Reverend and the Makers"],
    ["Silence Is Talking", "Reverend and the Makers"],

    ["What About Me", "The Cribs"],
    ["You Were Always the One", "The Cribs"],
    ["Martell", "The Cribs"],
    ["You're Gonna Lose Us", "The Cribs"],
    ["We Share the Same Skies", "The Cribs"],

    ["Strasbourg", "The Rakes"],
    ["Binary Love", "The Rakes"],
    ["Open Book", "The Rakes"],
    ["1989", "The Rakes"],

    ["A Place to Hide", "White Lies"],
    ["Nothing to Give", "White Lies"],
    ["The Price of Love", "White Lies"],

    ["Arguments", "The Duke Spirit"],
    ["Darling You're Mean", "The Duke Spirit"],
    ["Cuts Across the Land", "The Duke Spirit"],
    ["Lion Rip", "The Duke Spirit"],
    ["Love Is an Unfamiliar Name", "The Duke Spirit"],
    ["Lassoo", "The Duke Spirit"],
    ["The Step and the Walk", "The Duke Spirit"],
    ["My Sunken Treasure", "The Duke Spirit"],
    ["Send a Little Love Token", "The Duke Spirit"],
    ["You Really Wake Up the Love in Me", "The Duke Spirit"],

    ["Acrylic", "Courteeners"],
    ["Cavorting", "Courteeners"],
    ["What Took You So Long?", "Courteeners"],
    ["No You Didn't, No You Don't", "Courteeners"],
    ["Bide Your Time", "Courteeners"],
    ["Fallowfield Hillbilly", "Courteeners"],
    ["Please Don't", "Courteeners"],
    ["That Kiss", "Courteeners"],
    ["Cross My Heart & Hope to Fly", "Courteeners"],
    ["You Overdid It Doll", "Courteeners"],

    ["Rockstar", "The Dandy Warhols"],
    ["Get Off", "The Dandy Warhols"],
    ["Plan A", "The Dandy Warhols"],
    ["Smoke It", "The Dandy Warhols"],
    ["All the Money or the Simple Life Honey", "The Dandy Warhols"],
    ["The New Country", "The Dandy Warhols"],

    ["Golden Age", "The Futureheads"],
    ["First Day", "The Futureheads"],
    ["A to B", "The Futureheads"],
    ["Man Ray", "The Futureheads"],
    ["Robot", "The Futureheads"],
    ["Danger of the Water", "The Futureheads"],
    ["Favours for Favours", "The Futureheads"],
    ["Back to the Sea", "The Futureheads"],
    ["Return of the Berserker", "The Futureheads"],
    ["Thursday", "The Futureheads"],
    ["Cope", "The Futureheads"],
    ["Everything's Changing Today", "The Futureheads"],
    ["Sleet", "The Futureheads"],

    ["It's Getting Boring by the Sea", "Blood Red Shoes"],
    ["I Wish I Was Someone Better", "Blood Red Shoes"],
    ["You Bring Me Down", "Blood Red Shoes"],
    ["Say Something, Say Anything", "Blood Red Shoes"],
    ["This Is Not for You", "Blood Red Shoes"],
    ["ADHD", "Blood Red Shoes"],

    ["Doesn't Matter Much", "The Zutons"],
    ["Pressure Point", "The Zutons"],
    ["Remember Me", "The Zutons"],
    ["Confusion", "The Zutons"]
];

// Every question inherits its artist's genres, origins and relevant members.
const performerTags = {
    "The Rifles": ["british", "english", "indie rock", "mod revival", "bands", "london", "joel stoker"],
    "Maximo Park": ["british", "english", "indie rock", "post punk revival", "bands", "newcastle upon tyne", "paul smith", "maxïmo park"],
    "Editors": ["british", "english", "indie rock", "post punk revival", "bands", "tom smith"],
    "The Twang": ["british", "english", "indie rock", "bands", "birmingham", "phil etheridge"],
    "The Enemy": ["british", "english", "indie rock", "bands", "coventry", "tom clarke"],
    "Razorlight": ["british", "english", "indie rock", "bands", "johnny borrell"],
    "Glasvegas": ["british", "scottish", "indie rock", "alternative rock", "bands", "james allan"],
    "Reverend and the Makers": ["british", "english", "indie rock", "electronic rock", "bands", "sheffield", "jon mcclure"],
    "The Cribs": ["british", "english", "indie rock", "bands", "wakefield", "jarman brothers"],
    "The Rakes": ["british", "english", "indie rock", "post punk revival", "bands", "alan donohoe"],
    "White Lies": ["british", "english", "indie rock", "post punk revival", "bands", "harry mcveigh"],
    "The Duke Spirit": ["british", "english", "alternative rock", "garage rock", "bands", "liela moss"],
    "Courteeners": ["british", "english", "indie rock", "bands", "manchester", "liam fray"],
    "The Dandy Warhols": ["american", "alternative rock", "psychedelic rock", "bands", "portland oregon", "courtney taylor taylor", "zia mccabe"],
    "The Futureheads": ["british", "english", "indie rock", "post punk revival", "bands", "sunderland", "barry hyde"],
    "Blood Red Shoes": ["british", "english", "alternative rock", "indie rock", "duos", "brighton", "laura mary carter", "steven ansell"],
    "The Zutons": ["british", "english", "indie rock", "psychedelic rock", "bands", "liverpool", "dave mccabe"]
};

// Recording-specific release year and album metadata, aligned to songs.
const recordingInfo = [
    [2005, "no love lost album", "2006 album"],
    [2006, "no love lost album"],
    [2006, "no love lost album", "2005 original demo"],
    [2009, "great escape album"],
    [2009, "great escape album"],
    [2009, "great escape album"],
    [2009, "great escape album"],
    [2009, "great escape album"],
    [2007, "our earthly pleasures album"],
    [2007, "our earthly pleasures album"],
    [2009, "quicken the heart album"],
    [2009, "quicken the heart album"],
    [2009, "in this light and on this evening album", "2010 single"],
    [2007, "an end has a start album"],
    [2007, "an end has a start album"],
    [2007, "love it when i feel like this album"],
    [2007, "love it when i feel like this album"],
    [2007, "love it when i feel like this album"],
    [2007, "love it when i feel like this album"],
    [2007, "love it when i feel like this album"],
    [2009, "jewellery quarter album"],
    [2009, "jewellery quarter album"],
    [2007, "love it when i feel like this album"],
    [2007, "love it when i feel like this album"],
    [2007, "love it when i feel like this album"],
    [2007, "well live and die in these towns album"],
    [2007, "well live and die in these towns album"],
    [2009, "music for the people album"],
    [2006, "razorlight second album"],
    [2006, "razorlight second album"],
    [2008, "glasvegas debut album"],
    [2008, "glasvegas debut album"],
    [2008, "glasvegas debut album"],
    [2008, "glasvegas debut album"],
    [2007, "the state of things album"],
    [2007, "the state of things album"],
    [2007, "the state of things album"],
    [2007, "the state of things album"],
    [2009, "a french kiss in the chaos album"],
    [2004, "the cribs debut album"],
    [2004, "the cribs debut album"],
    [2005, "the new fellas album"],
    [2005, "non album single"],
    [2009, "ignore the ignorant album", "johnny marr"],
    [2005, "capture release album"],
    [2005, "capture release album"],
    [2005, "capture release album"],
    [2009, "klang album"],
    [2009, "to lose my life album"],
    [2009, "to lose my life album"],
    [2009, "to lose my life album"],
    [2005, "cuts across the land album"],
    [2005, "cuts across the land album"],
    [2005, "cuts across the land album"],
    [2005, "cuts across the land album"],
    [2005, "cuts across the land album"],
    [2008, "neptune album"],
    [2008, "neptune album"],
    [2008, "neptune album"],
    [2008, "neptune album"],
    [2008, "neptune album"],
    [2007, "non album single"],
    [2007, "st jude album", "2008 album"],
    [2008, "st jude album"],
    [2008, "st jude album"],
    [2008, "st jude album"],
    [2008, "st jude album"],
    [2008, "st jude album"],
    [2008, "non album single"],
    [2009, "falcon album", "2010 album", "2009 single"],
    [2010, "falcon album", "2010 single"],
    [2005, "odditorium or warlords of mars album"],
    [2000, "thirteen tales from urban bohemia album"],
    [2003, "welcome to the monkey house album"],
    [2005, "odditorium or warlords of mars album"],
    [2005, "odditorium or warlords of mars album"],
    [2005, "odditorium or warlords of mars album"],
    [2004, "the futureheads debut album"],
    [2004, "the futureheads debut album"],
    [2004, "the futureheads debut album"],
    [2004, "the futureheads debut album"],
    [2004, "the futureheads debut album"],
    [2004, "the futureheads debut album"],
    [2006, "news and tributes album"],
    [2006, "news and tributes album"],
    [2006, "news and tributes album"],
    [2006, "news and tributes album"],
    [2006, "news and tributes album"],
    [2008, "this is not the world album"],
    [2008, "this is not the world album"],
    [2008, "box of secrets album"],
    [2008, "box of secrets album"],
    [2006, "box of secrets album", "2008 album"],
    [2008, "box of secrets album"],
    [2008, "box of secrets album"],
    [2006, "standalone single", "limited edition vinyl"],
    [2006, "tired of hanging around album", "second studio album"],
    [2004, "who killed the zutons debut album"],
    [2004, "who killed the zutons debut album"],
    [2004, "who killed the zutons debut album"]
];

// Replace only genuinely unverified song identifications.
const specialQuestions = {
    8318: "Which band released the album 'Cuts Across the Land'?",
    8338: "Which band released the album 'Odditorium or Warlords of Mars'?",
    8363: "Which band released the album 'Tired of Hanging Around'?"
};

// Preserve all original answer choices and their original positions.
const artists = [...new Set(songs.map(song => song[1]))];

function makeAnswers(correctAnswer, index) {
    const otherArtists = artists.filter(artist => artist !== correctAnswer);
    const answers = [
        correctAnswer,
        otherArtists[index % otherArtists.length],
        otherArtists[(index + 11) % otherArtists.length],
        otherArtists[(index + 23) % otherArtists.length]
    ];
    const shift = index % answers.length;
    return [...answers.slice(shift), ...answers.slice(0, shift)];
}

function makeTags(title, artist, index, number) {
    const [year, ...recordingTags] = recordingInfo[index];
    const decade = `${Math.floor(year / 10) * 10}s`;
    const questionType = specialQuestions[number]
        ? ['albums', 'album identification']
        : ['songs', 'recordings', 'artist identification', title.toLowerCase()];
    return [...new Set([
        'music', ...questionType,
        decade, `${decade} music`, `${year} releases`,
        artist.toLowerCase(), ...performerTags[artist], ...recordingTags
    ])];
}

const questions = songs.map(([title, artist], index) => {
    const number = 8267 + index;
    return {
        id: `music_${String(number).padStart(4, '0')}`,
        category: 'Music',
        question: specialQuestions[number] || `Which artist recorded ${title}?`,
        answers: makeAnswers(artist, index),
        correctAnswer: artist,
        difficulty: index % 3 === 0 ? 'Easy' : 'Medium',
        tags: makeTags(title, artist, index, number),
        dailyEligible: true
    };
});

module.exports = questions;
