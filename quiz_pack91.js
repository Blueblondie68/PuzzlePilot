// quiz_pack91.js
// PuzzlePilot Bigggggg Quiz - Music Pack 91
// Tagging audit: 100 questions, music_7167 to music_7266.
// Original IDs, question wording, answer options, correct answers and difficulties kept.
// Comprehensive music, decade, artist, genre, album and collaboration tags added.
// Years identify the first recording / original album where practical;
// later single releases are separately labelled.

const songs = [
    ["Power of Love/Love Power", "Luther Vandross", "Medium"],
    ["The Best Things in Life Are Free", "Luther Vandross and Janet Jackson", "Easy"],
    ["Don't Want to Be a Fool", "Luther Vandross", "Medium"],
    ["Your Secret Love", "Luther Vandross", "Medium"],
    ["I Can Make It Better", "Luther Vandross", "Hard"],
    ["Always and Forever", "Luther Vandross", "Medium"],
    ["My Sensitivity (Gets in the Way)", "Luther Vandross", "Hard"],
    ["Love the One You're With", "Luther Vandross", "Medium"],

    ["Moan and Groan", "Mark Morrison", "Hard"],

    ["Let's Get Down", "Tony Toni Tone", "Medium"],
    ["If I Had No Loot", "Tony Toni Tone", "Medium"],
    ["Anniversary", "Tony Toni Tone", "Medium"],
    ["Thinking of You", "Tony Toni Tone", "Hard"],
    ["Feels Good", "Tony Toni Tone", "Medium"],

    ["Back and Forth", "Aaliyah", "Easy"],
    ["At Your Best (You Are Love)", "Aaliyah", "Medium"],
    ["If Your Girl Only Knew", "Aaliyah", "Medium"],
    ["One in a Million", "Aaliyah", "Easy"],
    ["The One I Gave My Heart To", "Aaliyah", "Medium"],
    ["Are You That Somebody", "Aaliyah", "Easy"],
    ["Hot Like Fire", "Aaliyah", "Medium"],

    ["Too Gone Too Long", "En Vogue", "Hard"],

    ["This Is How We Do It", "Montell Jordan", "Easy"],
    ["Somethin' 4 da Honeyz", "Montell Jordan", "Medium"],
    ["Let's Ride", "Montell Jordan", "Medium"],
    ["I Like", "Montell Jordan", "Hard"],

    ["Do You See", "Warren G", "Medium"],
    ["What's Love Got to Do with It", "Warren G", "Medium"],
    ["I Shot the Sheriff", "Warren G", "Hard"],

    ["Fantastic Voyage", "Coolio", "Easy"],
    ["1 2 3 4 (Sumpin' New)", "Coolio", "Medium"],
    ["Too Hot", "Coolio", "Medium"],
    ["C U When U Get There", "Coolio", "Easy"],
    ["Ooh La La", "Coolio", "Hard"],

    ["Jump Around", "House of Pain", "Easy"],
    ["Shamrocks and Shenanigans", "House of Pain", "Hard"],
    ["On Point", "House of Pain", "Hard"],

    ["Insane in the Brain", "Cypress Hill", "Easy"],
    ["I Ain't Goin' Out Like That", "Cypress Hill", "Medium"],
    ["When the Ship Goes Down", "Cypress Hill", "Medium"],
    ["Throw Your Set in the Air", "Cypress Hill", "Hard"],
    ["Boom Biddy Bye Bye", "Cypress Hill", "Hard"],

    ["Unsent", "Alanis Morissette", "Medium"],
    ["So Pure", "Alanis Morissette", "Hard"],

    ["Permanent Tears", "Eagle-Eye Cherry", "Hard"],

    ["Footsteps", "Stiltskin", "Hard"],

    ["Being a Girl", "Mansun", "Hard"],
    ["Negative", "Mansun", "Hard"],

    ["I Can't Imagine the World Without Me", "Echobelly", "Medium"],

    ["Nobody", "Keith Sweat", "Easy"],
    ["Twisted", "Keith Sweat", "Easy"],
    ["Come and Get with Me", "Keith Sweat", "Medium"],
    ["I'm Not Ready", "Keith Sweat", "Medium"],
    ["Keep It Comin'", "Keith Sweat", "Medium"],
    ["Get Up on It", "Keith Sweat", "Medium"],
    ["How Do You Like It", "Keith Sweat", "Hard"],
    ["Make You Sweat", "Keith Sweat", "Medium"],
    ["I'll Give All My Love to You", "Keith Sweat", "Medium"],
    ["Merry Go Round", "Keith Sweat", "Hard"],

    ["Nobody Knows", "The Tony Rich Project", "Easy"],
    ["Like a Woman", "The Tony Rich Project", "Hard"],
    ["Leavin'", "The Tony Rich Project", "Hard"],

    ["Every Little Thing I Do", "Soul for Real", "Medium"],
    ["Candy Rain", "Soul for Real", "Easy"],
    ["If You Want It", "Soul for Real", "Hard"],

    ["Just Kickin' It", "Xscape", "Medium"],
    ["Understanding", "Xscape", "Medium"],
    ["Who Can I Run To", "Xscape", "Medium"],
    ["The Arms of the One Who Loves You", "Xscape", "Hard"],
    ["My Little Secret", "Xscape", "Medium"],
    ["Feels So Good", "Xscape", "Hard"],

    ["Use Your Heart", "SWV", "Medium"],
    ["Rain", "SWV", "Medium"],

    ["Tell Me", "Groove Theory", "Easy"],
    ["Keep Tryin'", "Groove Theory", "Hard"],
    ["Baby Luv", "Groove Theory", "Hard"],

    ["Touch Me Tease Me", "Case", "Medium"],
    ["Happily Ever After", "Case", "Medium"],

    ["Big Poppa", "The Notorious BIG", "Easy"],
    ["One More Chance", "The Notorious BIG", "Medium"],

    ["I Get Around", "2Pac", "Easy"],
    ["Keep Ya Head Up", "2Pac", "Easy"],
    ["How Do U Want It", "2Pac", "Medium"],
    ["Do for Love", "2Pac", "Medium"],

    ["Shoop", "Salt N Pepa", "Easy"],
    ["Whatta Man", "Salt N Pepa", "Easy"],
    ["None of Your Business", "Salt N Pepa", "Medium"],
    ["Let's Talk About Sex", "Salt N Pepa", "Easy"],

    ["It's All About Me", "Mya", "Medium"],
    ["Movin' On", "Mya", "Medium"],
    ["My First Night with You", "Mya", "Hard"],

    ["Baby", "Brandy", "Easy"],
    ["Best Friend", "Brandy", "Medium"],
    ["Brokenhearted", "Brandy", "Medium"],

    ["You Are Not Alone", "Michael Jackson", "Easy"],
    ["Stranger in Moscow", "Michael Jackson", "Medium"],
    ["They Don't Care About Us", "Michael Jackson", "Easy"],
    ["Earth Song", "Michael Jackson", "Easy"],
    ["Remember the Time", "Michael Jackson", "Easy"],
    ["In the Closet", "Michael Jackson", "Medium"]
];


const performerTags = {
    "Luther Vandross": ["american", "r and b", "soul", "male singers", "solo artists", "ballads"],
    "Luther Vandross and Janet Jackson": ["american", "r and b", "soul", "duets", "collaborations", "male singers", "female singers", "luther vandross", "janet jackson"],
    "Mark Morrison": ["british", "english", "r and b", "hip hop soul", "male singers", "solo artists"],
    "Tony Toni Tone": ["american", "r and b", "new jack swing", "soul", "groups", "tony! toni! tone!", "raphael saadiq"],
    "Aaliyah": ["american", "r and b", "hip hop soul", "female singers", "solo artists", "timbaland"],
    "En Vogue": ["american", "r and b", "soul", "female vocal groups", "groups"],
    "Montell Jordan": ["american", "r and b", "hip hop soul", "male singers", "solo artists"],
    "Warren G": ["american", "hip hop", "g funk", "west coast hip hop", "rappers", "music producers"],
    "Coolio": ["american", "hip hop", "west coast hip hop", "rappers", "solo artists"],
    "House of Pain": ["american", "hip hop", "rap rock", "groups", "everlast", "dj lethal"],
    "Cypress Hill": ["american", "hip hop", "west coast hip hop", "groups", "b real", "sen dog"],
    "Alanis Morissette": ["canadian", "alternative rock", "pop rock", "female singers", "singer songwriters", "solo artists"],
    "Eagle-Eye Cherry": ["swedish", "pop rock", "alternative rock", "male singers", "singer songwriters", "solo artists"],
    "Stiltskin": ["british", "scottish", "alternative rock", "post grunge", "bands", "ray wilson"],
    "Mansun": ["british", "english", "alternative rock", "britpop", "bands", "paul draper"],
    "Echobelly": ["british", "english", "britpop", "alternative rock", "bands", "sonya madan"],
    "Keith Sweat": ["american", "r and b", "new jack swing", "soul", "male singers", "solo artists"],
    "The Tony Rich Project": ["american", "r and b", "soul", "male singers", "solo artists", "tony rich"],
    "Soul for Real": ["american", "r and b", "new jack swing", "male vocal groups", "groups"],
    "Xscape": ["american", "r and b", "soul", "female vocal groups", "groups", "kandi burruss", "tiny harris"],
    "SWV": ["american", "r and b", "new jack swing", "female vocal groups", "groups", "sisters with voices"],
    "Groove Theory": ["american", "r and b", "neo soul", "duos", "amel larrieux", "bryce wilson"],
    "Case": ["american", "r and b", "soul", "male singers", "solo artists"],
    "The Notorious BIG": ["american", "hip hop", "east coast hip hop", "rappers", "solo artists", "the notorious b.i.g.", "biggie smalls", "christopher wallace"],
    "2Pac": ["american", "hip hop", "west coast hip hop", "rappers", "solo artists", "tupac shakur"],
    "Salt N Pepa": ["american", "hip hop", "female rap groups", "groups", "salt-n-pepa", "salt", "pepa", "dj spinderella"],
    "Mya": ["american", "r and b", "pop", "female singers", "solo artists", "mya harrison", "mýa"],
    "Brandy": ["american", "r and b", "pop", "female singers", "solo artists", "brandy norwood"],
    "Michael Jackson": ["american", "pop", "r and b", "new jack swing", "male singers", "solo artists", "king of pop"]
};

const recordingTags = {
    "music_7167": [1991, "power of love album"],
    "music_7168": [1992, "mo money soundtrack", "film soundtracks", "duets", "janet jackson collaboration"],
    "music_7169": [1991, "power of love album"],
    "music_7170": [1996, "your secret love album"],
    "music_7171": [1996, "your secret love album"],
    "music_7172": [1994, "songs album", "heatwave cover", "cover versions"],
    "music_7173": [1985, "the night i fell in love album"],
    "music_7174": [1994, "songs album", "stephen stills cover", "cover versions", "1995 single"],
    "music_7175": [1996, "return of the mack album", "1997 single"],
    "music_7176": [1996, "house of music album", "dj quik collaboration"],
    "music_7177": [1993, "sons of soul album"],
    "music_7178": [1993, "sons of soul album"],
    "music_7179": [1996, "house of music album"],
    "music_7180": [1990, "the revival album"],
    "music_7181": [1994, "age aint nothing but a number album"],
    "music_7182": [1994, "age aint nothing but a number album", "the isley brothers cover", "cover versions"],
    "music_7183": [1996, "one in a million album"],
    "music_7184": [1996, "one in a million album"],
    "music_7185": [1996, "one in a million album", "1997 single"],
    "music_7186": [1998, "dr dolittle soundtrack", "film soundtracks"],
    "music_7187": [1996, "one in a million album", "1997 single"],
    "music_7188": [1997, "ev3 album"],
    "music_7189": [1995, "this is how we do it album"],
    "music_7190": [1995, "this is how we do it album"],
    "music_7191": [1998, "lets ride album", "master p collaboration", "silkk the shocker collaboration"],
    "music_7192": [1996, "more album", "the nutty professor soundtrack", "film soundtracks", "slick rick collaboration"],
    "music_7193": [1994, "regulate g funk era album", "1995 uk single"],
    "music_7194": [1996, "supercop soundtrack", "film soundtracks", "adina howard collaboration", "tina turner interpolation", "interpolations"],
    "music_7195": [1997, "take a look over your shoulder album", "bob marley interpolation", "interpolations"],
    "music_7196": [1994, "it takes a thief album"],
    "music_7197": [1995, "gangstas paradise album"],
    "music_7198": [1995, "gangstas paradise album"],
    "music_7199": [1997, "my soul album", "sissel kyrkjebo collaboration"],
    "music_7200": [1997, "my soul album"],
    "music_7201": [1992, "fine malt lyrics album"],
    "music_7202": [1992, "fine malt lyrics album"],
    "music_7203": [1994, "same as it ever was album"],
    "music_7204": [1993, "black sunday album"],
    "music_7205": [1993, "black sunday album"],
    "music_7206": [1993, "black sunday album"],
    "music_7207": [1995, "iii temples of boom album"],
    "music_7208": [1995, "iii temples of boom album", "1996 single remix"],
    "music_7209": [1998, "supposed former infatuation junkie album"],
    "music_7210": [1998, "supposed former infatuation junkie album", "1999 single"],
    "music_7211": [1997, "desireless album", "1998 international release"],
    "music_7212": [1994, "the minds eye album"],
    "music_7213": [1998, "six album"],
    "music_7214": [1998, "six album"],
    "music_7215": [1994, "everyones got one album"],
    "music_7216": [1996, "keith sweat album", "athena cage collaboration", "kut klose"],
    "music_7217": [1996, "keith sweat album", "kut klose collaboration"],
    "music_7218": [1998, "still in the game album", "snoop dogg collaboration"],
    "music_7219": [1998, "still in the game album", "1999 single"],
    "music_7220": [1991, "keep it comin album"],
    "music_7221": [1994, "get up on it album", "kut klose collaboration"],
    "music_7222": [1994, "get up on it album", "lisa left eye lopes collaboration", "tlc"],
    "music_7223": [1990, "ill give all my love to you album"],
    "music_7224": [1990, "ill give all my love to you album"],
    "music_7225": [1990, "ill give all my love to you album"],
    "music_7226": [1995, "words album", "1996 album"],
    "music_7227": [1996, "words album"],
    "music_7228": [1996, "words album"],
    "music_7229": [1995, "candy rain album"],
    "music_7230": [1994, "candy rain single", "1995 candy rain album"],
    "music_7231": [1995, "candy rain album"],
    "music_7232": [1993, "hummin comin at cha album"],
    "music_7233": [1993, "hummin comin at cha album", "1994 single"],
    "music_7234": [1995, "off the hook album", "the jones girls cover", "cover versions"],
    "music_7235": [1998, "traces of my lipstick album"],
    "music_7236": [1998, "traces of my lipstick album"],
    "music_7237": [1995, "off the hook album"],
    "music_7238": [1996, "new beginning album"],
    "music_7239": [1997, "release some tension album"],
    "music_7240": [1995, "groove theory album"],
    "music_7241": [1995, "groove theory album", "1996 single"],
    "music_7242": [1995, "groove theory album", "1996 single"],
    "music_7243": [1996, "case debut album", "the nutty professor soundtrack", "film soundtracks", "foxy brown collaboration", "mary j blige collaboration"],
    "music_7244": [1999, "personal conversation album"],
    "music_7245": [1994, "ready to die album"],
    "music_7246": [1994, "ready to die album", "1995 one more chance stay with me remix", "faith evans collaboration", "mary j blige collaboration"],
    "music_7247": [1993, "strictly 4 my n i g g a z album", "shock g collaboration", "money b collaboration"],
    "music_7248": [1993, "strictly 4 my n i g g a z album"],
    "music_7249": [1996, "all eyez on me album", "k ci and jojo collaboration"],
    "music_7250": [1997, "r u still down remember me album", "1998 single", "eric williams collaboration"],
    "music_7251": [1993, "very necessary album"],
    "music_7252": [1993, "very necessary album", "en vogue collaboration", "duets"],
    "music_7253": [1993, "very necessary album", "1994 single"],
    "music_7254": [1990, "blacks magic album", "1991 single"],
    "music_7255": [1998, "mya debut album", "sisqo collaboration"],
    "music_7256": [1998, "mya debut album", "silkk the shocker collaboration"],
    "music_7257": [1998, "mya debut album", "1999 single"],
    "music_7258": [1994, "brandy debut album", "1995 uk chart"],
    "music_7259": [1994, "brandy debut album", "1995 single"],
    "music_7260": [1994, "brandy debut album", "1995 single duet", "wanya morris collaboration", "boyz ii men"],
    "music_7261": [1995, "history past present and future book i album"],
    "music_7262": [1995, "history past present and future book i album", "1996 single"],
    "music_7263": [1995, "history past present and future book i album", "1996 single"],
    "music_7264": [1995, "history past present and future book i album"],
    "music_7265": [1991, "dangerous album", "1992 single"],
    "music_7266": [1991, "dangerous album", "1992 single"]
};

const artists = [...new Set(
    songs.map(song => song[1])
)];

function makeAnswers(correctArtist, index) {
    const wrong = [];

    for (
        let offset = 1;
        wrong.length < 3;
        offset++
    ) {
        const candidate =
            artists[
                (index + offset) %
                artists.length
            ];

        if (
            candidate !== correctArtist &&
            wrong.includes(candidate) === false
        ) {
            wrong.push(candidate);
        }
    }

    const answers = [
        correctArtist,
        ...wrong
    ];

    const shift = index % 4;

    return [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];
}

const quizPack91 = songs.map(
    ([title, artist, difficulty], index) => ({
        id: `music_${7167 + index}`,
        category: "Music",
        difficulty,
        question:
            `Which artist recorded '${title}'?`,
        answers: makeAnswers(
            artist,
            index
        ),
        correctAnswer: artist,
        tags: (() => {
            const info = recordingTags[`music_${7167 + index}`];
            const [year, ...extra] = info;
            const decade = `${Math.floor(year / 10) * 10}s`;
            return [...new Set([
                "music", "songs", "recordings", "artist identification",
                decade, `${decade} music`, `${year} releases`,
                title.toLowerCase(), artist.toLowerCase(),
                ...performerTags[artist], ...extra
            ])];
        })(),
        dailyEligible: true
    })
);

module.exports = quizPack91;
