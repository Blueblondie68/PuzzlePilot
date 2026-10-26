// quiz_pack93.js
// PuzzlePilot Bigggggg Quiz - Music Pack 93
// Tagging audit: 100 questions, music_7367 to music_7466.
// Original IDs, questions, answers, answer order, difficulties and eligibility preserved.
// Artist, genre, decade, release and recording-specific tags enriched.

const songs = [
    ["Love at First Sight", "Kylie Minogue"],
    ["In Your Eyes", "Kylie Minogue"],
    ["Whenever, Wherever", "Shakira"],
    ["Underneath Your Clothes", "Shakira"],
    ["Hips Don't Lie", "Shakira"],
    ["Beautiful", "Christina Aguilera"],
    ["Dirrty", "Christina Aguilera"],
    ["Fighter", "Christina Aguilera"],
    ["Baby Boy", "Beyoncé"],
    ["Irreplaceable", "Beyoncé"],
    ["Single Ladies (Put a Ring on It)", "Beyoncé"],
    ["Just Dance", "Lady Gaga"],
    ["Paparazzi", "Lady Gaga"],
    ["Bad Romance", "Lady Gaga"],
    ["You Know I'm No Good", "Amy Winehouse"],
    ["Valerie", "Mark Ronson feat. Amy Winehouse"],
    ["LDN", "Lily Allen"],
    ["Do You Want To", "Franz Ferdinand"],
    ["Chelsea Dagger", "The Fratellis"],
    ["Naive", "The Kooks"],
    ["I Bet You Look Good on the Dancefloor", "Arctic Monkeys"],
    ["When the Sun Goes Down", "Arctic Monkeys"],
    ["Fluorescent Adolescent", "Arctic Monkeys"],
    ["When You Were Young", "The Killers"],
    ["Sex on Fire", "Kings of Leon"],
    ["Use Somebody", "Kings of Leon"],
    ["Have a Nice Day", "Stereophonics"],
    ["Clocks", "Coldplay"],
    ["Fix You", "Coldplay"],
    ["Viva la Vida", "Coldplay"],

    ["Get Over You", "Sophie Ellis-Bextor"],
    ["Mixed Up World", "Sophie Ellis-Bextor"],
    ["Groovejet (If This Ain't Love)", "Spiller"],
    ["Lady (Hear Me Tonight)", "Modjo"],
    ["Another Chance", "Roger Sanchez"],
    ["Lola's Theme", "Shapeshifters"],
    ["Call on Me", "Eric Prydz"],
    ["Put Your Hands Up for Detroit", "Fedde Le Grand"],
    ["Destination Calabria", "Alex Gaudino feat. Crystal Waters"],
    ["Heaven", "DJ Sammy"],
    ["Everytime We Touch", "Cascada"],
    ["Evacuate the Dancefloor", "Cascada"],
    ["Cry for You", "September"],
    ["Satisfaction", "Benny Benassi"],
    ["Rock Your Body", "Justin Timberlake"],
    ["Cry Me a River", "Justin Timberlake"],
    ["SexyBack", "Justin Timberlake"],
    ["What Goes Around... Comes Around", "Justin Timberlake"],
    ["Behind These Hazel Eyes", "Kelly Clarkson"],
    ["Who Knew", "Pink"],
    ["Please Don't Leave Me", "Pink"],
    ["Family Portrait", "Pink"],
    ["Don't Stop the Music", "Rihanna"],
    ["Disturbia", "Rihanna"],
    ["SOS", "Rihanna"],
    ["Promiscuous", "Nelly Furtado"],
    ["Maneater", "Nelly Furtado"],
    ["Say It Right", "Nelly Furtado"],
    ["I'm Like a Bird", "Nelly Furtado"],
    ["Sk8er Boi", "Avril Lavigne"],
    ["My Happy Ending", "Avril Lavigne"],
    ["Girlfriend", "Avril Lavigne"],
    ["Makes Me Wonder", "Maroon 5"],
    ["How You Remind Me", "Nickelback"],
    ["Someday", "Nickelback"],
    ["Rockstar", "Nickelback"],
    ["In the End", "Linkin Park"],
    ["Numb", "Linkin Park"],
    ["What I've Done", "Linkin Park"],
    ["Bring Me to Life", "Evanescence"],
    ["My Immortal", "Evanescence"],

    ["No Good Advice", "Girls Aloud"],
    ["Love Machine", "Girls Aloud"],
    ["Biology", "Girls Aloud"],
    ["Whole Again", "Atomic Kitten"],
    ["Eternal Flame", "Atomic Kitten"],
    ["The Tide Is High (Get the Feeling)", "Atomic Kitten"],
    ["Never Had a Dream Come True", "S Club 7"],
    ["Don't Stop Movin'", "S Club 7"],
    ["Have You Ever", "S Club 7"],
    ["All Rise", "Blue"],
    ["Too Close", "Blue"],
    ["One Love", "Blue"],
    ["If You Come Back", "Blue"],
    ["Your Game", "Will Young"],
    ["Patience", "Take That"],
    ["Shine", "Take That"],
    ["Rule the World", "Take That"],
    ["Greatest Day", "Take That"],
    ["Fill My Little World", "The Feeling"],
    ["Never Be Lonely", "The Feeling"],
    ["Sewn", "The Feeling"],
    ["Golden Touch", "Razorlight"],
    ["In the Morning", "Razorlight"],
    ["Ruby", "Kaiser Chiefs"],
    ["Everyday I Love You Less and Less", "Kaiser Chiefs"],
    ["Never Miss a Beat", "Kaiser Chiefs"],
    ["Teenage Dirtbag", "Wheatus"],
    ["Bohemian Like You", "The Dandy Warhols"],
    ["Last Nite", "The Strokes"]
];

const performerTags = {
    "Kylie Minogue": ["australian", "pop", "dance pop", "female singers", "solo artists"],
    "Shakira": ["colombian", "latin pop", "pop rock", "female singers", "solo artists"],
    "Christina Aguilera": ["american", "pop", "r and b", "female singers", "solo artists"],
    "Beyoncé": ["american", "pop", "r and b", "female singers", "solo artists", "beyonce"],
    "Lady Gaga": ["american", "pop", "dance pop", "electropop", "female singers", "solo artists"],
    "Amy Winehouse": ["british", "english", "soul", "r and b", "female singers", "singer songwriters", "solo artists"],
    "Mark Ronson feat. Amy Winehouse": ["british", "soul", "pop", "collaborations", "cover versions", "mark ronson", "amy winehouse", "female singers", "music producers"],
    "Lily Allen": ["british", "english", "pop", "ska pop", "female singers", "solo artists"],
    "Franz Ferdinand": ["british", "scottish", "indie rock", "post punk revival", "bands"],
    "The Fratellis": ["british", "scottish", "indie rock", "bands"],
    "The Kooks": ["british", "english", "indie rock", "bands"],
    "Arctic Monkeys": ["british", "english", "indie rock", "bands", "alex turner"],
    "The Killers": ["american", "indie rock", "alternative rock", "bands", "brandon flowers"],
    "Kings of Leon": ["american", "alternative rock", "rock", "bands"],
    "Stereophonics": ["british", "welsh", "rock", "pop rock", "bands", "kelly jones"],
    "Coldplay": ["british", "english", "alternative rock", "pop rock", "bands", "chris martin"],
    "Sophie Ellis-Bextor": ["british", "english", "dance pop", "pop", "female singers", "solo artists"],
    "Spiller": ["italian", "house", "disco house", "dance", "music producers", "djs"],
    "Modjo": ["french", "french house", "house", "dance", "duos"],
    "Roger Sanchez": ["american", "house", "dance", "music producers", "djs"],
    "Shapeshifters": ["british", "house", "dance", "duos", "music producers"],
    "Eric Prydz": ["swedish", "house", "electronic", "dance", "djs", "music producers"],
    "Fedde Le Grand": ["dutch", "house", "electro house", "dance", "djs", "music producers"],
    "Alex Gaudino feat. Crystal Waters": ["italian", "american", "house", "dance", "collaborations", "alex gaudino", "crystal waters", "djs", "female singers"],
    "DJ Sammy": ["spanish", "trance", "eurodance", "dance", "djs", "music producers"],
    "Cascada": ["german", "eurodance", "dance pop", "groups", "natalie horler"],
    "September": ["swedish", "eurodance", "dance pop", "female singers", "solo artists", "petra marklund"],
    "Benny Benassi": ["italian", "electro house", "dance", "djs", "music producers"],
    "Justin Timberlake": ["american", "pop", "r and b", "male singers", "solo artists"],
    "Kelly Clarkson": ["american", "pop rock", "pop", "female singers", "solo artists"],
    "Pink": ["american", "pop rock", "pop", "female singers", "solo artists", "p!nk"],
    "Rihanna": ["barbadian", "pop", "r and b", "dance pop", "female singers", "solo artists"],
    "Nelly Furtado": ["canadian", "pop", "r and b", "female singers", "solo artists"],
    "Avril Lavigne": ["canadian", "pop rock", "pop punk", "female singers", "solo artists"],
    "Maroon 5": ["american", "pop rock", "pop", "bands", "adam levine"],
    "Nickelback": ["canadian", "post grunge", "rock", "bands", "chad kroeger"],
    "Linkin Park": ["american", "nu metal", "alternative rock", "rock", "bands", "chester bennington", "mike shinoda"],
    "Evanescence": ["american", "alternative metal", "gothic rock", "bands", "amy lee"],
    "Girls Aloud": ["british", "pop", "dance pop", "girl groups", "female vocal groups"],
    "Atomic Kitten": ["british", "english", "pop", "girl groups", "female vocal groups"],
    "S Club 7": ["british", "pop", "dance pop", "mixed vocal groups", "groups"],
    "Blue": ["british", "pop", "r and b", "boy bands", "male vocal groups"],
    "Will Young": ["british", "english", "pop", "soul", "male singers", "solo artists"],
    "Take That": ["british", "english", "pop", "pop rock", "boy bands", "male vocal groups", "gary barlow"],
    "The Feeling": ["british", "english", "pop rock", "soft rock", "bands", "dan gillespie sells"],
    "Razorlight": ["british", "english", "indie rock", "bands", "johnny borrell"],
    "Kaiser Chiefs": ["british", "english", "indie rock", "bands", "ricky wilson"],
    "Wheatus": ["american", "pop rock", "pop punk", "bands"],
    "The Dandy Warhols": ["american", "alternative rock", "psychedelic rock", "bands"],
    "The Strokes": ["american", "indie rock", "garage rock revival", "bands", "julian casablancas"]
};

// The year is the recognised single-release year (or the initial
// recording/album period when earlier). Later chart releases are noted.
// Dates are used for tags only, not player-facing questions.
const recordingInfo = [
    [2002, "fever album", "2001 album"],
    [2002, "fever album", "2001 album"],
    [2001, "laundry service album"],
    [2002, "laundry service album", "2001 album"],
    [2006, "oral fixation vol 2 album", "wyclef jean collaboration"],
    [2002, "stripped album"],
    [2002, "stripped album", "redman collaboration"],
    [2003, "stripped album", "2002 album"],
    [2003, "dangerously in love album", "sean paul collaboration"],
    [2006, "b day album"],
    [2008, "i am sasha fierce album"],
    [2008, "the fame album", "colby odonis collaboration"],
    [2009, "the fame album", "2008 album"],
    [2009, "the fame monster ep"],
    [2007, "back to black album", "2006 album"],
    [2007, "version album", "mark ronson", "amy winehouse", "the zutons original", "cover versions"],
    [2006, "alright still album"],
    [2005, "you could have it so much better album"],
    [2006, "costello music album"],
    [2006, "inside in inside out album"],
    [2005, "whatever people say i am thats what im not album", "2006 album"],
    [2006, "whatever people say i am thats what im not album"],
    [2007, "favourite worst nightmare album"],
    [2006, "sams town album"],
    [2008, "only by the night album"],
    [2008, "only by the night album"],
    [2001, "just enough education to perform album"],
    [2003, "a rush of blood to the head album", "2002 album"],
    [2005, "x and y album"],
    [2008, "viva la vida or death and all his friends album"],
    [2002, "read my lips album", "2001 album"],
    [2003, "shoot from the hip album"],
    [2000, "sophie ellis bextor vocals", "collaborations"],
    [2000, "french house"],
    [2001, "first contact album"],
    [2004, "disco house"],
    [2004, "steve winwood valerie sample", "sampling"],
    [2006, "electro house"],
    [2007, "calabria instrumental", "destination unknown vocals", "crystal waters collaboration"],
    [2001, "yanou collaboration", "do vocals", "bryan adams cover", "cover versions", "2002 uk release"],
    [2005, "everytime we touch album", "maggie reilly cover", "cover versions", "2006 uk single"],
    [2009, "evacuate the dancefloor album"],
    [2006, "in orbit album", "2005 album", "later international chart success"],
    [2002, "hypnotica album", "2003 album", "the biz collaboration"],
    [2003, "justified album", "2002 album"],
    [2002, "justified album"],
    [2006, "futuresex lovesounds album", "timbaland collaboration"],
    [2007, "futuresex lovesounds album", "2006 album"],
    [2005, "breakaway album", "2004 album"],
    [2006, "im not dead album"],
    [2009, "funhouse album", "2008 album"],
    [2002, "missundaztood album", "2001 album"],
    [2007, "good girl gone bad album"],
    [2008, "good girl gone bad reloaded album"],
    [2006, "a girl like me album", "soft cell tainted love sample", "sampling"],
    [2006, "loose album", "timbaland collaboration"],
    [2006, "loose album"],
    [2006, "loose album", "2007 single"],
    [2000, "whoa nelly album"],
    [2002, "let go album"],
    [2004, "under my skin album"],
    [2007, "the best damn thing album"],
    [2007, "it wont be soon before long album"],
    [2001, "silver side up album"],
    [2003, "the long road album"],
    [2005, "all the right reasons album", "2006 single"],
    [2001, "hybrid theory album", "2000 album"],
    [2003, "meteora album"],
    [2007, "minutes to midnight album"],
    [2003, "fallen album", "paul mccoy collaboration", "12 stones"],
    [2003, "fallen album"],
    [2003, "sound of the underground album"],
    [2004, "what will the neighbours say album"],
    [2005, "chemistry album"],
    [2001, "right now album", "2000 album"],
    [2001, "feels so good album", "the bangles cover", "cover versions"],
    [2002, "feels so good album", "blondie cover", "cover versions"],
    [2000, "children in need charity single", "7 album"],
    [2001, "sunshine album"],
    [2001, "sunshine album", "children in need charity single"],
    [2001, "all rise album"],
    [2001, "all rise album", "next cover", "cover versions"],
    [2002, "one love album"],
    [2001, "all rise album"],
    [2004, "fridays child album", "2003 album"],
    [2006, "beautiful world album"],
    [2007, "beautiful world album"],
    [2007, "stardust film soundtrack", "film soundtracks"],
    [2008, "the circus album"],
    [2005, "twelve stops and home album", "2006 album and reissue"],
    [2006, "twelve stops and home album"],
    [2006, "twelve stops and home album"],
    [2004, "up all night album"],
    [2006, "razorlight album"],
    [2007, "yours truly angry mob album"],
    [2005, "employment album"],
    [2008, "off with their heads album"],
    [2000, "wheatus album", "2001 uk hit"],
    [2000, "thirteen tales from urban bohemia album", "2001 uk single"],
    [2001, "is this it album"]
];

function makeTags(title, artist, index) {
    const info = recordingInfo[index];
    const [year, ...recordingTags] = info;
    const decade = `${Math.floor(year / 10) * 10}s`;

    return [...new Set([
        "music", "songs", "recordings", "artist identification",
        "2000s", "2000s music", decade, `${decade} music`,
        `${year} releases`, title.toLowerCase(), artist.toLowerCase(),
        ...performerTags[artist], ...recordingTags
    ])];
}

const artists = [
    ...new Set(
        songs.map(
            song => song[1]
        )
    )
];

function makeAnswers(
    correctAnswer,
    index
) {
    const otherArtists =
        artists.filter(
            artist =>
                artist !== correctAnswer
        );

    const answers = [
        correctAnswer,
        otherArtists[
            index %
            otherArtists.length
        ],
        otherArtists[
            (index + 11) %
            otherArtists.length
        ],
        otherArtists[
            (index + 23) %
            otherArtists.length
        ]
    ];

    const shift =
        index % answers.length;

    return [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];
}

const questions =
    songs.map(
        (song, index) => {
            const title =
                song[0];

            const artist =
                song[1];

            const number =
                7367 + index;

            return {
                id:
                    `music_${String(number).padStart(4, '0')}`,

                category:
                    'Music',

                question:
                    `Which artist recorded ${title}?`,

                answers:
                    makeAnswers(
                        artist,
                        index
                    ),

                correctAnswer:
                    artist,

                difficulty:
                    index % 3 === 0
                        ? 'Easy'
                        : 'Medium',

                tags: makeTags(title, artist, index),

                dailyEligible:
                    true
            };
        }
    );

module.exports =
    questions;
