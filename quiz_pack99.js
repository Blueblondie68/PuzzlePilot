// quiz_pack99.js
// PuzzlePilot Bigggggg Quiz - Music Pack 99
// Tagging audit: 100 questions, IDs music_7967 through music_8066.
// Three Maximo Park duplicates from Pack 94 replaced by other music trivia.
// IDs, correct answers, distractors, difficulties and Daily Quiz eligibility retained.
// "Sexual City" is Van She's 2009 remix title, not a typo.

const songs = [
    ["Dust on the Ground", "Bombay Bicycle Club"],

    ["Evening/Morning", "Bombay Bicycle Club"],
    ["The Hill", "Bombay Bicycle Club"],
    ["Open House", "Bombay Bicycle Club"],
    ["Sofa Song", "The Kooks"],
    ["Eddie's Gun", "The Kooks"],
    ["You Don't Love Me", "The Kooks"],
    ["See the World", "The Kooks"],
    ["Apply Some Pressure", "Maximo Park"],
    ["Graffiti", "Maximo Park"],
    ["Going Missing", "Maximo Park"],
    ["Our Velocity", "Maximo Park"],
    ["Books from Boxes", "Maximo Park"],
    ["Girls Who Play Guitars", "Maximo Park"],
    ["The Coast Is Always Changing", "Maximo Park"],
    ["I Want You to Stay", "Maximo Park"],
    ["22 Grand Job", "The Rakes"],
    ["Retreat", "The Rakes"],
    ["Work, Work, Work (Pub, Club, Sleep)", "The Rakes"],
    ["All Too Human", "The Rakes"],
    ["We Danced Together", "The Rakes"],
    ["The World Was a Mess but His Hair Was Perfect", "The Rakes"],
    ["House of Jealous Lovers", "The Rapture"],
    ["Get Myself into It", "The Rapture"],
    ["Whoo! Alright - Yeah... Uh Huh.", "The Rapture"],
    ["Pieces of the People We Love", "The Rapture"],
    ["Sister Saviour", "The Rapture"],
    ["Echoes", "The Rapture"],
    ["We Are Your Friends", "Justice vs Simian"],
    ["D.A.N.C.E.", "Justice"],
    ["DVNO", "Justice"],
    ["Phantom Part II", "Justice"],
    ["Waters of Nazareth", "Justice"],
    ["Stress", "Justice"],
    ["I Believe", "Simian Mobile Disco"],
    ["It's the Beat", "Simian Mobile Disco"],
    ["Hustler", "Simian Mobile Disco"],
    ["Audacity of Huge", "Simian Mobile Disco"],
    ["Kelly", "Van She"],
    ["Changes", "Van She"],
    ["Strangers", "Van She"],
    ["Sexual City", "Van She"],
    ["Paris Is Burning", "Ladyhawke"],
    ["Dusk Till Dawn", "Ladyhawke"],
    ["Magic", "Ladyhawke"],
    ["Back of the Van", "Ladyhawke"],
    ["My Delirium", "Ladyhawke"],
    ["Another Runaway", "Ladyhawke"],

    ["Rip It Up", "Razorlight"],
    ["Stumble and Fall", "Razorlight"],
    ["Reason Is Treason", "Kasabian"],
    ["Cutt Off", "Kasabian"],
    ["Fast Fuse", "Kasabian"],
    ["You're Not Alone", "The Enemy"],
    ["No Time for Tears", "The Enemy"],
    ["Sing When You're in Love", "The Enemy"],
    ["Be Somebody", "The Enemy"],
    ["Aggro", "The Enemy"],
    ["Men's Needs", "The Cribs"],
    ["Mirror Kissers", "The Cribs"],
    ["Hey Scenesters!", "The Cribs"],
    ["Our Bovine Public", "The Cribs"],
    ["I'm a Realist", "The Cribs"],
    ["Moving Pictures", "The Cribs"],
    ["Another Number", "The Cribs"],
    ["Cheat on Me", "The Cribs"],
    ["A-Punk", "Vampire Weekend"],
    ["Oxford Comma", "Vampire Weekend"],
    ["Cape Cod Kwassa Kwassa", "Vampire Weekend"],
    ["Mansard Roof", "Vampire Weekend"],
    ["The Kids Don't Stand a Chance", "Vampire Weekend"],
    ["One (Blake's Got a New Face)", "Vampire Weekend"],
    ["It's My Own Cheating Heart That Makes Me Cry", "Glasvegas"],
    ["Please Come Back Home", "Glasvegas"],
    ["Lonesome Swan", "Glasvegas"],
    ["Death", "White Lies"],
    ["To Lose My Life", "White Lies"],
    ["Farewell to the Fairground", "White Lies"],
    ["Unfinished Business", "White Lies"],
    ["From the Stars", "White Lies"],
    ["Fifty on Our Foreheads", "White Lies"],
    ["Crystalised", "The xx"],
    ["Basic Space", "The xx"],
    ["Islands", "The xx"],
    ["VCR", "The xx"],
    ["Heart Skipped a Beat", "The xx"],
    ["Shelter", "The xx"],
    ["Infinity", "The xx"],
    ["Night Time", "The xx"],

    ["Two More Years", "Bloc Party"],
    ["I Still Remember", "Bloc Party"],
    ["Hunting for Witches", "Bloc Party"],
    ["One More Chance", "Bloc Party"],
    ["Mercury", "Bloc Party"],
    ["Talons", "Bloc Party"],
    ["This Modern Love", "Bloc Party"],
    ["Like Eating Glass", "Bloc Party"],
    ["Nobody Move, Nobody Get Hurt", "We Are Scientists"],
    ["The Great Escape", "We Are Scientists"],
    ["It's a Hit", "We Are Scientists"]
];

const performerTags = {
    "Bombay Bicycle Club": ["british", "english", "indie rock", "indie pop", "bands", "london", "jack steadman"],
    "The Kooks": ["british", "english", "indie rock", "bands", "luke pritchard"],
    "Maximo Park": ["british", "english", "indie rock", "post punk revival", "bands", "newcastle upon tyne", "paul smith", "maxïmo park"],
    "The Rakes": ["british", "english", "indie rock", "post punk revival", "bands", "alan donohoe"],
    "The Rapture": ["american", "dance punk", "post punk revival", "indie dance", "bands", "luke jenner"],
    "Justice vs Simian": ["french", "british", "electro house", "indie dance", "remixes", "collaborations", "justice", "simian", "we are your friends"],
    "Justice": ["french", "electro house", "electronic music", "duos", "gaspard augé", "xavier de rosnay"],
    "Simian Mobile Disco": ["british", "english", "electronic music", "electro house", "duos", "james ford", "jas shaw"],
    "Van She": ["australian", "synth pop", "electropop", "indie dance", "bands", "van she tech"],
    "Ladyhawke": ["new zealand", "synth pop", "new wave", "indie pop", "female singers", "solo artists", "pip brown"],
    "Razorlight": ["british", "english", "indie rock", "bands", "johnny borrell"],
    "Kasabian": ["british", "english", "indie rock", "electronic rock", "bands", "leicester", "serge pizzorno", "tom meighan"],
    "The Enemy": ["british", "english", "indie rock", "bands", "coventry", "tom clarke"],
    "The Cribs": ["british", "english", "indie rock", "bands", "wakefield", "jarman brothers"],
    "Vampire Weekend": ["american", "indie rock", "indie pop", "afropop influences", "bands", "ezra koenig"],
    "Glasvegas": ["british", "scottish", "indie rock", "alternative rock", "bands", "james allan"],
    "White Lies": ["british", "english", "post punk revival", "indie rock", "bands", "harry mcveigh"],
    "The xx": ["british", "english", "indie pop", "dream pop", "minimalist pop", "bands", "romy madley croft", "oliver sim", "jamie xx"],
    "Bloc Party": ["british", "english", "indie rock", "post punk revival", "bands", "kele okereke"],
    "We Are Scientists": ["american", "indie rock", "post punk revival", "bands", "keith murray", "chris cain"]
};

// Specific recording/album metadata follows the songs in the original order.
// The 2010 single of "VCR" is tagged 2010s, while its album is dated 2009.
const recordingInfo = [
    [2009, "i had the blues but i shook them loose album"],
    [2009, "i had the blues but i shook them loose album", "2008 ep"],
    [2007, "the boy i used to be ep"],
    [2007, "the boy i used to be ep"],
    [2005, "inside in inside out album", "2006 album"],
    [2005, "inside in inside out album", "2006 album"],
    [2006, "inside in inside out album"],
    [2006, "inside in inside out album"],
    [2005, "a certain trigger album"],
    [2005, "a certain trigger album"],
    [2005, "a certain trigger album"],
    [2007, "our earthly pleasures album"],
    [2007, "our earthly pleasures album"],
    [2007, "our earthly pleasures album"],
    [2004, "a certain trigger album", "2005 album", "debut single"],
    [2005, "a certain trigger album", "2006 single"],
    [2005, "capture release album"],
    [2005, "capture release album"],
    [2005, "capture release album"],
    [2006, "standalone single"],
    [2007, "ten new messages album"],
    [2007, "ten new messages album"],
    [2002, "echoes album", "2003 album", "dfa records"],
    [2006, "pieces of the people we love album"],
    [2006, "pieces of the people we love album"],
    [2006, "pieces of the people we love album"],
    [2003, "echoes album"],
    [2003, "echoes album"],
    [2006, "justice remix of simian never be alone", "remixes", "2003 original recording"],
    [2007, "cross album"],
    [2007, "cross album"],
    [2007, "cross album"],
    [2005, "waters of nazareth ep", "2007 cross album"],
    [2007, "cross album"],
    [2007, "attack decay sustain release album"],
    [2007, "attack decay sustain release album"],
    [2006, "attack decay sustain release album", "2007 album", "char johnson vocals"],
    [2009, "temporary pleasure album", "chris keating vocals", "yeasayer", "collaborations"],
    [2005, "van she ep", "2008 v album remix"],
    [2008, "v album"],
    [2008, "v album"],
    [2009, "ze vemixes album", "van she tech remix", "sex city original", "2005 original track", "remixes"],
    [2008, "ladyhawke album"],
    [2008, "ladyhawke album"],
    [2008, "ladyhawke album"],
    [2008, "ladyhawke album"],
    [2008, "ladyhawke album"],
    [2008, "ladyhawke album"],
    [2004, "up all night album"],
    [2004, "up all night album"],
    [2004, "kasabian debut album"],
    [2004, "kasabian debut album"],
    [2007, "fast fuse single", "west ryder pauper lunatic asylum album", "2009 album"],
    [2007, "well live and die in these towns album"],
    [2009, "music for the people album"],
    [2009, "music for the people album"],
    [2009, "music for the people album"],
    [2007, "well live and die in these towns album"],
    [2007, "mens needs womens needs whatever album"],
    [2005, "the new fellas album"],
    [2005, "the new fellas album"],
    [2007, "mens needs womens needs whatever album"],
    [2007, "mens needs womens needs whatever album"],
    [2007, "mens needs womens needs whatever album"],
    [2004, "the cribs album"],
    [2009, "ignore the ignorant album", "johnny marr"],
    [2008, "vampire weekend album"],
    [2008, "vampire weekend album"],
    [2008, "vampire weekend album"],
    [2008, "vampire weekend album"],
    [2008, "vampire weekend album"],
    [2008, "vampire weekend album"],
    [2008, "glasvegas album"],
    [2008, "glasvegas album"],
    [2008, "glasvegas album"],
    [2008, "to lose my life album", "2009 album"],
    [2009, "to lose my life album"],
    [2009, "to lose my life album"],
    [2008, "to lose my life album", "2009 album"],
    [2009, "to lose my life album"],
    [2009, "to lose my life album"],
    [2009, "xx debut album"],
    [2009, "xx debut album"],
    [2009, "xx debut album"],
    [2010, "xx debut album", "2009 album", "2010 single"],
    [2009, "xx debut album"],
    [2009, "xx debut album"],
    [2009, "xx debut album"],
    [2009, "xx debut album"],
    [2005, "two more years single"],
    [2007, "a weekend in the city album"],
    [2007, "a weekend in the city album"],
    [2009, "one more chance single"],
    [2008, "intimacy album"],
    [2008, "intimacy album"],
    [2005, "silent alarm album"],
    [2005, "silent alarm album"],
    [2005, "with love and squalor album"],
    [2005, "with love and squalor album"],
    [2005, "with love and squalor album"]
];

// Tag only actual new material for the three repeat-replacement questions.
const replacementQuestions = {
    7975: {
        question: "Which band released the debut album 'A Certain Trigger'?",
        tags: ["music", "albums", "album identification", "2000s", "2000s music", "2005 releases", "a certain trigger", "debut albums", "warp records"]
    },
    7978: {
        question: "Which band released the album 'Our Earthly Pleasures'?",
        tags: ["music", "albums", "album identification", "2000s", "2000s music", "2007 releases", "our earthly pleasures", "second studio album", "gil norton production"]
    },
    7979: {
        question: "Which band's lead singer is Paul Smith?",
        tags: ["music", "band members", "lead singers", "2000s", "2000s music", "paul smith", "male singers"]
    }
};

// The original performer pool is deliberately kept unchanged; altering it
// would silently change distractors elsewhere in this pack.
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
    if (replacementQuestions[number]) {
        return [...new Set([
            ...replacementQuestions[number].tags,
            artist.toLowerCase(),
            ...performerTags[artist]
        ])];
    }
    const [year, ...releaseTags] = recordingInfo[index];
    const decade = `${Math.floor(year / 10) * 10}s`;
    return [...new Set([
        "music", "songs", "recordings", "artist identification",
        decade, `${decade} music`, `${year} releases`,
        title.toLowerCase(), artist.toLowerCase(),
        ...performerTags[artist], ...releaseTags
    ])];
}

const questions = songs.map(([title, artist], index) => {
    const number = 7967 + index;
    return {
        id: `music_${String(number).padStart(4, '0')}`,
        category: 'Music',
        question: replacementQuestions[number]?.question || `Which artist recorded ${title}?`,
        answers: makeAnswers(artist, index),
        correctAnswer: artist,
        difficulty: index % 3 === 0 ? 'Easy' : 'Medium',
        tags: makeTags(title, artist, index, number),
        dailyEligible: true
    };
});

module.exports = questions;
