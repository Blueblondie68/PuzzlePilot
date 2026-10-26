// quiz_pack101.js
// PuzzlePilot Bigggggg Quiz - Music Pack 101
// Tagging audit: 100 questions, music_8167 to music_8266.
// Repaired repeated distractors from the original answer generator.
// One unverified recording replaced with verified album trivia.
// Bloc Party's "Sunday" clarified to distinguish it from The View's song.
// The Futureheads' 2010 "Heartbeat Song" tagged to its correct decade.

const songs = [
    ["Hummer", "Foals"],
    ["Two Steps, Twice", "Foals"],

    ["Electric Bloom", "Foals"],
    ["French Open", "Foals"],
    ["Big Big Love (Fig. 2)", "Foals"],
    ["Tron", "Foals"],
    ["Heavy Water", "Foals"],

    ["Backfire at the Disco", "The Wombats"],
    ["My First Wedding", "The Wombats"],
    ["Lost in the Post", "The Wombats"],
    ["School Uniforms", "The Wombats"],
    ["Here Comes the Anxiety", "The Wombats"],
    ["Patricia the Stripper", "The Wombats"],
    ["Little Miss Pipedream", "The Wombats"],

    ["Gravity's Rainbow", "Klaxons"],
    ["Magick", "Klaxons"],
    ["As Above, So Below", "Klaxons"],
    ["Totem on the Timeline", "Klaxons"],
    ["Isle of Her", "Klaxons"],
    ["Forgotten Works", "Klaxons"],
    ["Four Horsemen of 2012", "Klaxons"],

    ["Objects of My Affection", "Peter Bjorn and John"],
    ["Let's Call It Off", "Peter Bjorn and John"],
    ["Amsterdam", "Peter Bjorn and John"],
    ["The Chills", "Peter Bjorn and John"],
    ["Paris 2004", "Peter Bjorn and John"],
    ["Up Against the Wall", "Peter Bjorn and John"],
    ["Start to Melt", "Peter Bjorn and John"],
    ["Roll the Credits", "Peter Bjorn and John"],
    ["Nothing to Worry About", "Peter Bjorn and John"],

    ["Zoo Time", "Mystery Jets"],
    ["Alas Agnes", "Mystery Jets"],
    ["You Can't Fool Me Dennis", "Mystery Jets"],
    ["Veiled in Grey", "Mystery Jets"],

    ["Hey Girl", "The Delays"],
    ["Wanderlust", "The Delays"],
    ["Keep It Simple", "The Delays"],
    ["You and Me", "The Delays"],

    ["The Beginning of the Twist", "The Futureheads"],
    ["Area", "The Futureheads"],
    ["Skip to the End", "The Futureheads"],
    ["News and Tributes", "The Futureheads"],
    ["Radio Heart", "The Futureheads"],
    ["Walking Backwards", "The Futureheads"],
    ["Heartbeat Song", "The Futureheads"],
    ["Carnival Kids", "The Futureheads"],

    ["Positive Tension", "Bloc Party"],
    ["So Here We Are", "Bloc Party"],
    ["She's Hearing Voices", "Bloc Party"],
    ["Pioneers", "Bloc Party"],
    ["Waiting for the 7.18", "Bloc Party"],
    ["Sunday", "Bloc Party"],
    ["Uniform", "Bloc Party"],
    ["Song for Clay (Disappear Here)", "Bloc Party"],
    ["SRXT", "Bloc Party"],
    ["Kreuzberg", "Bloc Party"],
    ["Where Is Home?", "Bloc Party"],

    ["Everything Is Average Nowadays", "Kaiser Chiefs"],
    ["Good Days Bad Days", "Kaiser Chiefs"],
    ["You Want History", "Kaiser Chiefs"],
    ["Heat Dies Down", "Kaiser Chiefs"],
    ["I Can Do It Without You", "Kaiser Chiefs"],
    ["Highroyds", "Kaiser Chiefs"],
    ["Na Na Na Na Naa", "Kaiser Chiefs"],
    ["Saturday Night", "Kaiser Chiefs"],

    ["Whistle for the Choir", "The Fratellis"],
    ["Flathead", "The Fratellis"],
    ["Baby Fratelli", "The Fratellis"],
    ["Ole Black 'n' Blue Eyes", "The Fratellis"],
    ["Mistress Mabel", "The Fratellis"],
    ["Look Out Sunshine!", "The Fratellis"],
    ["A Heady Tale", "The Fratellis"],
    ["My Friend John", "The Fratellis"],
    ["Acid Jazz Singer", "The Fratellis"],
    ["Doginabag", "The Fratellis"],
    ["Vince the Loveable Stoner", "The Fratellis"],
    ["Creepin' Up the Backstairs", "The Fratellis"],
    ["For the Girl", "The Fratellis"],
    ["Got Ma Nuts from a Hippy", "The Fratellis"],

    ["That's What She Said", "The Automatic"],
    ["By My Side", "The Automatic"],
    ["Keep Your Eyes Peeled", "The Automatic"],
    ["Team Drama", "The Automatic"],
    ["Light Entertainment", "The Automatic"],
    ["Responsible Citizen", "The Automatic"],
    ["This Is a Fix", "The Automatic"],
    ["Secret Police", "The Automatic"],
    ["Accessories", "The Automatic"],
    ["Sleepwalking", "The Automatic"],

    ["Rock & Roll Queen", "The Subways"],
    ["Oh Yeah", "The Subways"],
    ["With You", "The Subways"],
    ["No Goodbyes", "The Subways"],
    ["Mary", "The Subways"],
    ["Girls & Boys", "The Subways"],
    ["Shake! Shake!", "The Subways"],
    ["Alright", "The Subways"],
    ["I Won't Let You Down", "The Subways"],
    ["Kalifornia", "The Subways"],
    ["22", "The Rifles"]
];

const performerTags = {
    "Foals": ["british", "english", "indie rock", "math rock", "dance punk", "bands", "oxford", "yannis philippakis"],
    "The Wombats": ["british", "english", "indie rock", "indie pop", "bands", "liverpool", "matthew murphy"],
    "Klaxons": ["british", "english", "new rave", "indie rock", "dance punk", "bands", "jamie reynolds"],
    "Peter Bjorn and John": ["swedish", "indie pop", "indie rock", "bands", "trios", "peter moren", "bjorn yttling", "john eriksson"],
    "Mystery Jets": ["british", "english", "indie rock", "psychedelic pop", "bands", "blaine harrison", "eel pie island"],
    "The Delays": ["british", "english", "indie pop", "indie rock", "bands", "southampton", "greg gilbert"],
    "The Futureheads": ["british", "english", "post punk revival", "indie rock", "bands", "sunderland", "barry hyde"],
    "Bloc Party": ["british", "english", "post punk revival", "indie rock", "bands", "kele okereke"],
    "Kaiser Chiefs": ["british", "english", "indie rock", "britpop", "bands", "leeds", "ricky wilson"],
    "The Fratellis": ["british", "scottish", "indie rock", "garage rock revival", "bands", "glasgow", "jon fratelli"],
    "The Automatic": ["british", "welsh", "indie rock", "alternative rock", "bands", "robin hawkins"],
    "The Subways": ["british", "english", "indie rock", "garage rock revival", "bands", "billy lunn", "charlotte cooper"],
    "The Rifles": ["british", "english", "indie rock", "mod revival", "bands", "london", "joel stoker"]
};

// Album/release details in the same sequence as the 100 recordings above.
const recordingInfo = [
    [2007, "hummer single", "non album single"],
    [2008, "antidotes album"],
    [2008, "antidotes album"],
    [2008, "antidotes album"],
    [2008, "antidotes album"],
    [2008, "antidotes album"],
    [2008, "antidotes album"],
    [2007, "a guide to love loss and desperation album"],
    [2007, "a guide to love loss and desperation album"],
    [2007, "a guide to love loss and desperation album"],
    [2007, "a guide to love loss and desperation album"],
    [2007, "a guide to love loss and desperation album"],
    [2007, "a guide to love loss and desperation album"],
    [2007, "a guide to love loss and desperation album"],
    [2007, "myths of the near future album"],
    [2007, "myths of the near future album"],
    [2007, "myths of the near future album"],
    [2007, "myths of the near future album"],
    [2007, "myths of the near future album"],
    [2007, "myths of the near future album"],
    [2007, "myths of the near future album"],
    [2006, "writers block album"],
    [2006, "writers block album"],
    [2006, "writers block album"],
    [2006, "writers block album"],
    [2006, "writers block album"],
    [2006, "writers block album"],
    [2006, "writers block album"],
    [2006, "writers block album"],
    [2009, "living thing album"],
    [2005, "zoo time single", "2006 making dens album"],
    [2005, "making dens album", "2006 album"],
    [2005, "making dens album", "2006 album", "2006 single reissue"],
    [2008, "twenty one album"],
    [2003, "faded seaside glamour album", "2004 album"],
    [2004, "lost in a melody wanderlust single", "non album single"],
    [2008, "everythings the rush album"],
    [2006, "you see colours album"],
    [2008, "this is not the world album"],
    [2005, "area ep"],
    [2006, "news and tributes album"],
    [2006, "news and tributes album"],
    [2008, "this is not the world album"],
    [2008, "this is not the world album"],
    [2010, "the chaos album", "2010 single"],
    [2004, "the futureheads debut album"],
    [2005, "silent alarm album"],
    [2005, "silent alarm album"],
    [2004, "silent alarm album", "2005 album"],
    [2005, "silent alarm album"],
    [2007, "a weekend in the city album"],
    [2007, "a weekend in the city album"],
    [2007, "a weekend in the city album"],
    [2007, "a weekend in the city album"],
    [2007, "a weekend in the city album"],
    [2007, "a weekend in the city album"],
    [2007, "a weekend in the city album"],
    [2007, "yours truly angry mob album"],
    [2008, "off with their heads album"],
    [2008, "off with their heads album"],
    [2007, "yours truly angry mob album"],
    [2007, "yours truly angry mob album"],
    [2007, "yours truly angry mob album"],
    [2005, "employment album"],
    [2005, "employment album"],
    [2006, "costello music album"],
    [2006, "costello music album"],
    [2006, "costello music album"],
    [2006, "costello music album"],
    [2008, "here we stand album"],
    [2008, "here we stand album"],
    [2008, "here we stand album"],
    [2008, "here we stand album"],
    [2008, "here we stand album"],
    [2006, "costello music album"],
    [2006, "costello music album"],
    [2006, "costello music album"],
    [2006, "costello music album"],
    [2006, "costello music album"],
    [2006, "not accepted anywhere album"],
    [2006, "not accepted anywhere album"],
    [2006, "not accepted anywhere album"],
    [2006, "not accepted anywhere album"],
    [2008, "this is a fix album"],
    [2008, "this is a fix album"],
    [2008, "this is a fix album"],
    [2008, "this is a fix album"],
    [2008, "this is a fix album"],
    [2008, "this is a fix album"],
    [2005, "young for eternity album"],
    [2005, "young for eternity album"],
    [2005, "young for eternity album"],
    [2005, "young for eternity album"],
    [2005, "young for eternity album"],
    [2008, "all or nothing album"],
    [2008, "all or nothing album"],
    [2008, "all or nothing album"],
    [2008, "all or nothing album"],
    [2008, "all or nothing album"],
    [2006, "no love lost album", "debut albums"]
];

// Preserve original answer-pool and answer-position rotation. Where two
// distractors collide, replace only the repeated option with an unused act.
const artists = [...new Set(songs.map(song => song[1]))];

function makeAnswers(correctAnswer, index) {
    const otherArtists = artists.filter(artist => artist !== correctAnswer);
    const answers = [
        correctAnswer,
        otherArtists[index % otherArtists.length],
        otherArtists[(index + 11) % otherArtists.length],
        otherArtists[(index + 23) % otherArtists.length]
    ];

    for (let slot = 1; slot < answers.length; slot++) {
        if (answers.indexOf(answers[slot]) !== slot) {
            for (let offset = 0; offset < otherArtists.length; offset++) {
                const candidate = otherArtists[(index + 5 + offset) % otherArtists.length];
                if (!answers.includes(candidate)) {
                    answers[slot] = candidate;
                    break;
                }
            }
        }
    }

    const shift = index % answers.length;
    return [...answers.slice(shift), ...answers.slice(0, shift)];
}

const specialQuestions = {
    8218: "Which band recorded 'Sunday' for the album 'A Weekend in the City'?",
    8266: "Which band released the debut album 'No Love Lost'?"
};

function makeTags(title, artist, index, number) {
    const [year, ...recordingTags] = recordingInfo[index];
    const decade = `${Math.floor(year / 10) * 10}s`;
    const base = number === 8266
        ? ["music", "albums", "album identification", "debut albums"]
        : ["music", "songs", "recordings", "artist identification", title.toLowerCase()];

    return [...new Set([
        ...base,
        decade,
        `${decade} music`,
        `${year} releases`,
        artist.toLowerCase(),
        ...performerTags[artist],
        ...recordingTags
    ])];
}

const questions = songs.map(([title, artist], index) => {
    const number = 8167 + index;

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
