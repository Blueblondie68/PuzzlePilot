// quiz_pack97.js
// PuzzlePilot Bigggggg Quiz - Music Pack 97
// Tagging audit: 100 questions, music_7767 to music_7866.
// IDs, correct answers, choices, difficulties and Daily eligibility retained.
// Three ambiguous questions clarified without changing their correct answers.

const songs = [
    ["In My Place", "Coldplay"],
    ["Speed of Sound", "Coldplay"],
    ["Talk", "Coldplay"],
    ["The Hardest Part", "Coldplay"],
    ["Violet Hill", "Coldplay"],
    ["Lovers in Japan", "Coldplay"],
    ["Life in Technicolor II", "Coldplay"],
    ["Don't Panic", "Coldplay"],
    ["Trouble", "Coldplay"],
    ["God Put a Smile upon Your Face", "Coldplay"],
    ["The Importance of Being Idle", "Oasis"],
    ["Lyla", "Oasis"],
    ["Let There Be Love", "Oasis"],
    ["Stop Crying Your Heart Out", "Oasis"],
    ["Little by Little", "Oasis"],
    ["Songbird", "Oasis"],
    ["The Shock of the Lightning", "Oasis"],
    ["I'm Outta Time", "Oasis"],
    ["The Hindu Times", "Oasis"],
    ["Falling Down", "Oasis"],
    ["The Bucket", "Kings of Leon"],
    ["Four Kicks", "Kings of Leon"],
    ["On Call", "Kings of Leon"],
    ["Fans", "Kings of Leon"],
    ["Notion", "Kings of Leon"],
    ["Molly's Chambers", "Kings of Leon"],
    ["Red Morning Light", "Kings of Leon"],
    ["Charmer", "Kings of Leon"],
    ["The View from the Afternoon", "Arctic Monkeys"],
    ["Fake Tales of San Francisco", "Arctic Monkeys"],
    ["Teddy Picker", "Arctic Monkeys"],
    ["Brianstorm", "Arctic Monkeys"],
    ["D Is for Dangerous", "Arctic Monkeys"],
    ["Crying Lightning", "Arctic Monkeys"],
    ["Cornerstone", "Arctic Monkeys"],
    ["My Propeller", "Arctic Monkeys"],
    ["A Certain Romance", "Arctic Monkeys"],
    ["505", "Arctic Monkeys"],
    ["Smile Like You Mean It", "The Killers"],
    ["All These Things That I've Done", "The Killers"],
    ["Bones", "The Killers"],
    ["For Reasons Unknown", "The Killers"],
    ["Human", "The Killers"],
    ["Spaceman", "The Killers"],
    ["A Dustland Fairytale", "The Killers"],
    ["The World We Live In", "The Killers"],

    ["Ashes", "Embrace"],
    ["Gravity", "Embrace"],
    ["Nature's Law", "Embrace"],
    ["Target", "Embrace"],
    ["Looking as You Are", "Embrace"],
    ["Our Lives", "The Calling"],
    ["Anything", "The Calling"],
    ["For You", "The Calling"],
    ["Could It Be Any Harder", "The Calling"],
    ["Running Away", "Hoobastank"],
    ["Same Direction", "Hoobastank"],
    ["Remember Me", "Hoobastank"],
    ["Where Did All the Love Go?", "Kasabian"],
    ["Shoot the Runner", "Kasabian"],
    ["Empire", "Kasabian"],
    ["Fire", "Kasabian"],
    ["Underdog", "Kasabian"],
    ["Processed Beats", "Kasabian"],
    ["Me Plus One", "Kasabian"],
    ["LSF", "Kasabian"],
    ["Golden Retriever", "Super Furry Animals"],
    ["Juxtapozed with U", "Super Furry Animals"],
    ["Rings Around the World", "Super Furry Animals"],
    ["It's Not the End of the World?", "Super Furry Animals"],
    ["Do or Die", "Super Furry Animals"],
    ["Just the Way I'm Feeling", "Feeder"],
    ["Forget About Tomorrow", "Feeder"],
    ["Tumble and Fall", "Feeder"],
    ["Shatter", "Feeder"],
    ["Lost and Found", "Feeder"],
    ["Pushing the Senses", "Feeder"],
    ["Seven Days in the Sun", "Feeder"],
    ["Average Man", "Turin Brakes"],
    ["5 Mile (These Are the Days)", "Turin Brakes"],
    ["Fishing for a Dream", "Turin Brakes"],
    ["Something in My Eye", "Turin Brakes"],
    ["Pain Killer", "Turin Brakes"],
    ["Wires", "Athlete"],
    ["Half Light", "Athlete"],
    ["Twenty Four Hours", "Athlete"],
    ["Hurricane", "Athlete"],
    ["Superhuman Touch", "Athlete"],
    ["You Got the Style", "Athlete"],
    ["El Salvador", "Athlete"],
    ["Modern Mafia", "Athlete"],
    ["Bullets", "Editors"],
    ["All Sparks", "Editors"],
    ["Bones", "Editors"],
    ["The Racing Rats", "Editors"],
    ["Push Your Head Towards the Air", "Editors"],
    ["Papillon", "Editors"],

    ["Blackened Blue Eyes", "The Charlatans"],
    ["You're So Pretty - We're So Pretty", "The Charlatans"],
    ["Up at the Lake", "The Charlatans"]
];

// Genre, nationality and performer tags shared by the artist's questions.
const performerTags = {
    "Coldplay": ["british", "english", "alternative rock", "pop rock", "bands", "chris martin"],
    "Oasis": ["british", "english", "britpop", "rock", "bands", "liam gallagher", "noel gallagher", "manchester"],
    "Kings of Leon": ["american", "alternative rock", "southern rock", "bands", "followill family"],
    "Arctic Monkeys": ["british", "english", "indie rock", "alternative rock", "bands", "sheffield", "alex turner"],
    "The Killers": ["american", "alternative rock", "indie rock", "new wave", "bands", "brandon flowers", "las vegas"],
    "Embrace": ["british", "english", "alternative rock", "post britpop", "bands", "danny mc namara"],
    "The Calling": ["american", "post grunge", "alternative rock", "bands", "alex band"],
    "Hoobastank": ["american", "alternative rock", "post grunge", "bands", "doug robb"],
    "Kasabian": ["british", "english", "indie rock", "alternative rock", "electronic rock", "bands", "leicester", "serge pizzorno", "tom meighan"],
    "Super Furry Animals": ["british", "welsh", "alternative rock", "psychedelic rock", "bands", "gruff rhys"],
    "Feeder": ["british", "welsh", "alternative rock", "post grunge", "bands", "grant nicholas"],
    "Turin Brakes": ["british", "english", "folk rock", "indie folk", "duos", "olly knights", "gale paridjanian"],
    "Athlete": ["british", "english", "indie rock", "pop rock", "bands", "joel pott"],
    "Editors": ["british", "english", "indie rock", "post punk revival", "bands", "tom smith"],
    "The Charlatans": ["british", "english", "alternative rock", "britpop", "bands", "tim burgess"]
};

// Recording and album tags follow the song list in exactly the same order.
// A few singles were released a year or two after their original album tracks.
// "Do or Die" first appeared on a 1999 album but was a single in 2000.
const recordingInfo = [
    [2002, "a rush of blood to the head album"],
    [2005, "x and y album"],
    [2005, "x and y album", "2005 single", "kraftwerk computer love melody"],
    [2005, "x and y album", "2006 single"],
    [2008, "viva la vida or death and all his friends album"],
    [2008, "viva la vida or death and all his friends album"],
    [2008, "prospekts march ep", "2009 single"],
    [2000, "parachutes album", "1999 the blue room ep version"],
    [2000, "parachutes album"],
    [2002, "a rush of blood to the head album"],
    [2005, "dont believe the truth album"],
    [2005, "dont believe the truth album"],
    [2005, "dont believe the truth album"],
    [2002, "heathen chemistry album"],
    [2002, "heathen chemistry album"],
    [2002, "heathen chemistry album"],
    [2008, "dig out your soul album"],
    [2008, "dig out your soul album"],
    [2002, "heathen chemistry album"],
    [2008, "dig out your soul album", "2009 single"],
    [2004, "aha shake heartbreak album"],
    [2004, "aha shake heartbreak album"],
    [2007, "because of the times album"],
    [2007, "because of the times album"],
    [2008, "only by the night album", "2009 single"],
    [2003, "youth and young manhood album"],
    [2003, "youth and young manhood album"],
    [2007, "because of the times album"],
    [2006, "whatever people say i am thats what im not album"],
    [2006, "whatever people say i am thats what im not album"],
    [2007, "favourite worst nightmare album"],
    [2007, "favourite worst nightmare album"],
    [2007, "favourite worst nightmare album"],
    [2009, "humbug album"],
    [2009, "humbug album"],
    [2009, "humbug album", "2010 single"],
    [2006, "whatever people say i am thats what im not album"],
    [2007, "favourite worst nightmare album"],
    [2004, "hot fuss album", "2005 single"],
    [2004, "hot fuss album", "2005 single"],
    [2006, "sams town album"],
    [2006, "sams town album", "2007 single"],
    [2008, "day and age album"],
    [2008, "day and age album"],
    [2008, "day and age album", "2009 single"],
    [2008, "day and age album", "2009 single"],
    [2004, "out of nothing album"],
    [2004, "out of nothing album", "chris martin songwriting", "coldplay composed", "2004 single"],
    [2006, "this new day album"],
    [2006, "this new day album"],
    [2004, "out of nothing album", "2005 single"],
    [2004, "two album"],
    [2004, "two album"],
    [2003, "daredevil film soundtrack", "film soundtracks"],
    [2001, "camino palmero album", "2002 single"],
    [2001, "hoobastank debut album", "2002 single"],
    [2003, "the reason album", "2004 single"],
    [2001, "hoobastank debut album"],
    [2009, "west ryder pauper lunatic asylum album"],
    [2006, "empire album"],
    [2006, "empire album"],
    [2009, "west ryder pauper lunatic asylum album"],
    [2009, "west ryder pauper lunatic asylum album"],
    [2004, "kasabian debut album"],
    [2006, "empire album"],
    [2004, "kasabian debut album", "lsf lost souls forever"],
    [2003, "phantom power album"],
    [2001, "rings around the world album"],
    [2001, "rings around the world album"],
    [2001, "rings around the world album"],
    [2000, "1999 guerrilla album", "2000 single", "1990s album tracks"],
    [2002, "comfort in sound album", "2003 single"],
    [2002, "comfort in sound album", "2003 single"],
    [2005, "pushing the senses album"],
    [2005, "2005 single", "the singles compilation album", "2006 compilation"],
    [2006, "the singles compilation album", "2006 single"],
    [2005, "pushing the senses album"],
    [2001, "echo park album"],
    [2003, "ether song album"],
    [2003, "ether song bonus disc", "2003 single"],
    [2005, "jackinabox album"],
    [2007, "dark on fire album", "2008 single"],
    [2003, "ether song album", "painkiller summer rain"],
    [2005, "tourist album"],
    [2005, "tourist album"],
    [2005, "tourist album"],
    [2007, "beyond the neighbourhood album"],
    [2009, "black swan album"],
    [2002, "vehicles and animals album", "2003 album"],
    [2003, "vehicles and animals album"],
    [2005, "tourist album"],
    [2005, "the back room album"],
    [2005, "the back room album"],
    [2007, "an end has a start album"],
    [2007, "an end has a start album"],
    [2007, "an end has a start album"],
    [2009, "in this light and on this evening album"],
    [2006, "simpatico album"],
    [2001, "wonderland album", "2002 single"],
    [2004, "up at the lake album"],
];

// Retain the original artist pool and answer-order logic unchanged.
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

function makeTags(title, artist, index) {
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
    const number = 7767 + index;
    let question = `Which artist recorded ${title}?`;

    // Both bands in the choices recorded "Gravity". Embrace released
    // their version as a single in 2004; Coldplay's followed in 2005.
    if (number === 7814) {
        question = "Which band released 'Gravity' as a UK single in 2004?";
    }

    // The Killers and Editors both recorded songs entitled "Bones".
    if (number === 7807) {
        question = "Which band recorded 'Bones' for the album 'Sam's Town'?";
    }
    if (number === 7860) {
        question = "Which band recorded 'Bones' for the album 'An End Has a Start'?";
    }

    return {
        id: `music_${String(number).padStart(4, '0')}`,
        category: 'Music',
        question,
        answers: makeAnswers(artist, index),
        correctAnswer: artist,
        difficulty: index % 3 === 0 ? 'Easy' : 'Medium',
        tags: makeTags(title, artist, index),
        dailyEligible: true
    };
});

module.exports = questions;
