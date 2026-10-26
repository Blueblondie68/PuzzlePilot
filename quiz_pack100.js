// quiz_pack100.js
// PuzzlePilot Bigggggg Quiz - Music Pack 100
// Tagging audit: 100 questions, IDs music_8067 to music_8166.
// Original answers, options, difficulties, and Daily Quiz eligibility retained.
// music_8114: unverified "Hurricane" attribution replaced with verified album trivia.
// music_8120: corrected the single title to "5Rebbeccas".
// 2010 and 2013 releases retain accurate decade tags.

const songs = [
    ["After Hours", "We Are Scientists"],
    ["Chick Lit", "We Are Scientists"],
    ["Impatience", "We Are Scientists"],
    ["Cash Machine", "Hard-Fi"],
    ["Hard to Beat", "Hard-Fi"],
    ["Living for the Weekend", "Hard-Fi"],
    ["Tied Up Too Tight", "Hard-Fi"],
    ["Suburban Knights", "Hard-Fi"],
    ["Can't Get Along (Without You)", "Hard-Fi"],
    ["Hello Sunshine", "Super Furry Animals"],
    ["Lazer Beam", "Super Furry Animals"],
    ["Show Your Hand", "Super Furry Animals"],
    ["There Goes the Fear", "Doves"],
    ["Pounding", "Doves"],
    ["Black and White Town", "Doves"],
    ["Snowden", "Doves"],
    ["Sky Starts Falling", "Doves"],
    ["Kingdom of Rust", "Doves"],
    ["Winter Hill", "Doves"],
    ["Caught by the River", "Doves"],
    ["Firesuite", "Doves"],
    ["Words", "Doves"],
    ["Silence Is Easy", "Starsailor"],
    ["Four to the Floor", "Starsailor"],
    ["Alcoholic", "Starsailor"],
    ["Poor Misguided Fool", "Starsailor"],
    ["Born Again", "Starsailor"],
    ["In the Crossfire", "Starsailor"],
    ["This Time", "Starsailor"],
    ["Tell Me It's Not Over", "Starsailor"],
    ["Keep Us Together", "Starsailor"],
    ["Good Souls", "Starsailor"],
    ["Lights", "Editors"],
    ["Escape the Nest", "Editors"],
    ["Steve McQueen", "The Automatic"],
    ["You Shout You Shout You Shout You Shout", "The Automatic"],
    ["Magazines", "The Automatic"],
    ["Interstate", "The Automatic"],
    ["Run and Hide", "The Automatic"],
    ["Seriously... I Hate You Guys", "The Automatic"],
    ["Lost at Home", "The Automatic"],
    ["I Found Out", "The Pigeon Detectives"],
    ["Romantic Type", "The Pigeon Detectives"],
    ["This Is an Emergency", "The Pigeon Detectives"],
    ["Everybody Wants Me", "The Pigeon Detectives"],
    ["Say It Like You Mean It", "The Pigeon Detectives"],
    ["Animal", "The Pigeon Detectives"],
    ["Hurricane", "The View"],
    ["Wasted Little DJs", "The View"],
    ["Superstar Tradesman", "The View"],
    ["Skag Trendy", "The View"],
    ["Face for the Radio", "The View"],
    ["Shock Horror", "The View"],
    ["5Rebbeccas", "The View"],
    ["Temptation Dice", "The View"],
    ["Sunday", "The View"],
    ["First Love", "The Maccabees"],
    ["Toothpaste Kisses", "The Maccabees"],
    ["Precious Time", "The Maccabees"],
    ["About Your Dress", "The Maccabees"],
    ["Latchmere", "The Maccabees"],
    ["X-Ray", "The Maccabees"],
    ["No Kind Words", "The Maccabees"],
    ["Love You Better", "The Maccabees"],
    ["Can You Give It", "The Maccabees"],
    ["Young Lions", "The Maccabees"],
    ["Standing Next to Me", "The Last Shadow Puppets"],
    ["The Age of the Understatement", "The Last Shadow Puppets"],
    ["My Mistakes Were Made for You", "The Last Shadow Puppets"],
    ["Separate and Ever Deadly", "The Last Shadow Puppets"],
    ["Calm Like You", "The Last Shadow Puppets"],
    ["Black Plant", "The Last Shadow Puppets"],
    ["Meeting Place", "The Last Shadow Puppets"],
    ["Only Ones Who Know", "Arctic Monkeys"],
    ["Leave Before the Lights Come On", "Arctic Monkeys"],
    ["Perhaps Vampires Is a Bit Strong But...", "Arctic Monkeys"],
    ["Mardy Bum", "Arctic Monkeys"],
    ["Old Yellow Bricks", "Arctic Monkeys"],
    ["If You Were There, Beware", "Arctic Monkeys"],
    ["Dangerous Animals", "Arctic Monkeys"],
    ["Secret Door", "Arctic Monkeys"],
    ["Dance Little Liar", "Arctic Monkeys"],
    ["Potion Approaching", "Arctic Monkeys"],
    ["Black & White", "The Upper Room"],
    ["All Over This Town", "The Upper Room"],
    ["Combination", "The Upper Room"],
    ["Kill Kill Kill", "The Upper Room"],
    ["Never Come Back", "The Upper Room"],
    ["Ladyflash", "The Go! Team"],
    ["Huddle Formation", "The Go! Team"],
    ["Bottle Rocket", "The Go! Team"],
    ["Grip Like a Vice", "The Go! Team"],
    ["Doing It Right", "The Go! Team"],
    ["Milk Crisis", "The Go! Team"],
    ["Junior Kickstart", "The Go! Team"],
    ["Cassius", "Foals"],
    ["Red Socks Pugie", "Foals"],
    ["Olympic Airways", "Foals"],
    ["Balloons", "Foals"],
    ["Mathletics", "Foals"]
];

// Shared artist metadata; every question inherits its band's descriptors.
const performerTags = {
    "We Are Scientists": ["american", "indie rock", "post punk revival", "bands", "keith murray", "chris cain"],
    "Hard-Fi": ["british", "english", "indie rock", "post punk revival", "bands", "richard archer"],
    "Super Furry Animals": ["british", "welsh", "alternative rock", "psychedelic rock", "bands", "gruff rhys"],
    "Doves": ["british", "english", "alternative rock", "indie rock", "bands", "manchester", "jimi goodwin"],
    "Starsailor": ["british", "english", "alternative rock", "post britpop", "bands", "james walsh"],
    "Editors": ["british", "english", "indie rock", "post punk revival", "bands", "tom smith"],
    "The Automatic": ["british", "welsh", "alternative rock", "indie rock", "bands", "robin hawkins"],
    "The Pigeon Detectives": ["british", "english", "indie rock", "bands", "leeds", "matt bowman"],
    "The View": ["british", "scottish", "indie rock", "bands", "dundee", "kyle falconer"],
    "The Maccabees": ["british", "english", "indie rock", "post punk revival", "bands", "orlando weeks", "hugo white"],
    "The Last Shadow Puppets": ["british", "english", "baroque pop", "indie rock", "duos", "alex turner", "miles kane"],
    "Arctic Monkeys": ["british", "english", "indie rock", "alternative rock", "bands", "sheffield", "alex turner"],
    "The Upper Room": ["british", "english", "indie rock", "indie pop", "bands", "brighton"],
    "The Go! Team": ["british", "english", "indie pop", "alternative dance", "bands", "brighton", "ian parton", "ninja"],
    "Foals": ["british", "english", "indie rock", "math rock", "bands", "oxford", "yannis philippakis"]
};

// Recording-specific years and release information, in original question order.
// A recording may have an earlier album and a later single release.
const recordingInfo = [
    [2008, "brain thrust mastery album"],
    [2008, "brain thrust mastery album"],
    [2008, "brain thrust mastery album"],
    [2005, "stars of cctv album"],
    [2005, "stars of cctv album"],
    [2005, "stars of cctv album"],
    [2005, "stars of cctv album"],
    [2007, "once upon a time in the west album"],
    [2007, "once upon a time in the west album"],
    [2003, "phantom power album"],
    [2005, "love kraft album"],
    [2007, "hey venus album"],
    [2002, "the last broadcast album", "2002 single"],
    [2002, "the last broadcast album"],
    [2005, "some cities album"],
    [2005, "some cities album"],
    [2005, "some cities album"],
    [2009, "kingdom of rust album"],
    [2009, "kingdom of rust album"],
    [2002, "the last broadcast album"],
    [2000, "lost souls album"],
    [2002, "the last broadcast album"],
    [2003, "silence is easy album"],
    [2003, "silence is easy album", "2004 single"],
    [2001, "love is here album"],
    [2001, "love is here album", "2002 single"],
    [2003, "silence is easy album"],
    [2005, "on the outside album"],
    [2005, "on the outside album", "2006 single"],
    [2009, "all the plans album"],
    [2005, "on the outside album", "2006 single"],
    [2001, "love is here album"],
    [2005, "the back room album"],
    [2007, "an end has a start album"],
    [2008, "this is a fix album"],
    [2006, "not accepted anywhere album"],
    [2008, "this is a fix album"],
    [2009, "tear the signs down album", "2010 album", "2009 single"],
    [2010, "tear the signs down album", "2010 single"],
    [2006, "not accepted anywhere album"],
    [2006, "not accepted anywhere album"],
    [2006, "wait for me album", "2007 album"],
    [2007, "wait for me album"],
    [2008, "emergency album"],
    [2008, "emergency album"],
    [2008, "emergency album"],
    [2013, "we met at sea album", "2013 single"],
    [2007, "hats off to the buskers album", "album identification", "debut album"],
    [2006, "hats off to the buskers album", "2007 album"],
    [2006, "hats off to the buskers album", "2007 album"],
    [2007, "hats off to the buskers album"],
    [2007, "hats off to the buskers album"],
    [2009, "which bitch album"],
    [2008, "which bitch album", "2009 album", "5rebbeccas", "5 rebbeccas"],
    [2009, "which bitch album"],
    [2010, "bread and circuses album", "2011 album", "2010 single"],
    [2006, "colour it in album", "2007 album"],
    [2007, "colour it in album"],
    [2007, "colour it in album"],
    [2007, "colour it in album"],
    [2007, "colour it in album"],
    [2006, "colour it in album", "2007 album"],
    [2009, "wall of arms album"],
    [2009, "wall of arms album"],
    [2009, "wall of arms album"],
    [2009, "wall of arms album"],
    [2008, "the age of the understatement album"],
    [2008, "the age of the understatement album"],
    [2008, "the age of the understatement album"],
    [2008, "the age of the understatement album"],
    [2008, "the age of the understatement album"],
    [2008, "the age of the understatement album"],
    [2008, "the age of the understatement album"],
    [2007, "favourite worst nightmare album"],
    [2006, "non album single"],
    [2006, "whatever people say i am thats what im not album"],
    [2006, "whatever people say i am thats what im not album"],
    [2007, "favourite worst nightmare album"],
    [2007, "favourite worst nightmare album"],
    [2009, "humbug album"],
    [2009, "humbug album"],
    [2009, "humbug album"],
    [2009, "humbug album"],
    [2006, "other peoples problems album"],
    [2006, "other peoples problems album"],
    [2006, "other peoples problems album"],
    [2006, "other peoples problems album"],
    [2006, "other peoples problems album"],
    [2004, "thunder lightning strike album"],
    [2004, "thunder lightning strike album"],
    [2004, "thunder lightning strike album"],
    [2007, "proof of youth album"],
    [2007, "proof of youth album"],
    [2007, "proof of youth bonus disc", "doing it right b side"],
    [2003, "thunder lightning strike album", "2004 album", "2003 single"],
    [2008, "antidotes album"],
    [2008, "antidotes album"],
    [2008, "antidotes album"],
    [2007, "antidotes album", "2008 album", "2007 single"],
    [2007, "antidotes album", "2008 album", "2007 single"]
];

// Keep the original artist pool and distractor rotation unchanged.
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
    const [year, album, ...extra] = recordingInfo[index];
    const decade = `${Math.floor(year / 10) * 10}s`;
    if (number === 8114) {
        return [...new Set([
            "music", "albums", "album identification", "2000s", "2000s music",
            "2007 releases", "hats off to the buskers", "debut albums",
            artist.toLowerCase(), ...performerTags[artist]
        ])];
    }
    return [...new Set([
        "music", "songs", "recordings", "artist identification",
        decade, `${decade} music`, `${year} releases`,
        title.toLowerCase(), artist.toLowerCase(),
        ...performerTags[artist], album, ...extra
    ])];
}

const questions = songs.map(([title, artist], index) => {
    const number = 8067 + index;
    return {
        id: `music_${String(number).padStart(4, '0')}`,
        category: 'Music',
        question: number === 8114
            ? "Which Scottish band released the debut album 'Hats Off to the Buskers'?"
            : `Which artist recorded ${title}?`,
        answers: makeAnswers(artist, index),
        correctAnswer: artist,
        difficulty: index % 3 === 0 ? 'Easy' : 'Medium',
        tags: makeTags(title, artist, index, number),
        dailyEligible: true
    };
});

module.exports = questions;
