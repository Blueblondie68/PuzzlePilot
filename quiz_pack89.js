// quiz_pack89.js
// PuzzlePilot Bigggggg Quiz - Music Pack 89
// Tagging audit: 100 questions, music_6967 through music_7066.
// IDs and difficulties preserved. Generated answer choices kept except one
// duplicate question: music_7037 is now a Local H album question.
// MC Sar & the Real McCoy and Real McCoy are the same act under two credits.
// Release years in tags refer to original recordings where known.

const performerTags = {
    "Filter": ["american", "industrial rock", "alternative metal", "bands", "richard patrick"],
    "Helmet": ["american", "alternative metal", "post hardcore", "bands", "page hamilton"],
    "Danzig": ["american", "heavy metal", "hard rock", "bands", "glenn danzig"],
    "Metallica": ["american", "heavy metal", "metal", "bands", "james hetfield", "lars ulrich"],
    "Ugly Kid Joe": ["american", "hard rock", "alternative metal", "bands", "whitfield crane"],
    "Bush": ["british", "english", "post grunge", "alternative rock", "bands", "gavin rossdale"],
    "Hum": ["american", "alternative rock", "space rock", "bands", "matt talbott"],
    "Dubstar": ["british", "english", "synth pop", "alternative pop", "groups", "sarah blackwood", "steve hillier"],
    "Space": ["british", "english", "britpop", "indie rock", "bands", "tommy scott", "liverpool"],
    "Manic Street Preachers": ["welsh", "british", "alternative rock", "bands", "james dean bradfield", "nicky wire", "richey edwards"],
    "Black Grape": ["british", "english", "alternative dance", "britpop", "bands", "shaun ryder", "bez"],
    "Carter USM": ["british", "english", "indie rock", "alternative rock", "duos", "jim bob", "les fruitbat"],
    "Counting Crows": ["american", "alternative rock", "roots rock", "bands", "adam duritz"],
    "The Verve Pipe": ["american", "alternative rock", "post grunge", "bands", "brian vander ark"],
    "Godsmack": ["american", "alternative metal", "hard rock", "bands", "sully erna"],
    "Local H": ["american", "alternative rock", "post grunge", "duos", "scott lucas"],
    "Urban Cookie Collective": ["british", "english", "eurodance", "house music", "groups", "rohan heath", "diane charlemagne"],
    "Cappella": ["italian", "eurodance", "italo house", "groups", "gianfranco bortolotti"],
    "Ice MC": ["british", "english", "italian dance music", "eurodance", "male singers", "solo artists", "ian campbell", "robyx"],
    "MC Sar and the Real McCoy": ["german", "eurodance", "groups", "real mccoy", "mc sar", "olaf jeglitza"],
    "Real McCoy": ["german", "eurodance", "groups", "mc sar and the real mccoy", "olaf jeglitza"],
    "Maxx": ["german", "eurodance", "groups", "gary bokoe", "linda meek"],
    "Anticappella": ["italian", "eurodance", "house music", "groups", "gianfranco bortolotti", "mc fixx it"],
    "Ann Lee": ["british", "english", "italian dance music", "eurodance", "female singers", "solo artists"],
    "Whigfield": ["danish", "eurodance", "dance pop", "female singers", "solo artists", "sannie carlson"],
    "Corona": ["italian", "eurodance", "groups", "olga souza"],
    "DJ Bobo": ["swiss", "eurodance", "dance pop", "male singers", "solo artists", "rene baumann"],
    "Haddaway": ["trinidadian", "german dance music", "eurodance", "male singers", "solo artists", "nester alexander haddaway"],
};

const recordingTags = {
    "music_6967": [1995, "short bus album"],
    "music_6968": [1995, "short bus album"],
    "music_6969": [1999, "title of record album"],
    "music_6970": [1996, "the crow city of angels soundtrack", "film soundtracks"],
    "music_6971": [1992, "meantime album"],
    "music_6972": [1994, "betty album", "the crow soundtrack", "film soundtracks"],
    "music_6973": [1997, "aftertaste album"],
    "music_6974": [1992, "meantime album"],
    "music_6975": [1988, "danzig debut album", "1993 hit single"],
    "music_6976": [1994, "danzig 4 album"],
    "music_6977": [1993, "thrall demonsweatlive ep"],
    "music_6978": [1996, "load album"],
    "music_6979": [1992, "americas least wanted album"],
    "music_6980": [1992, "americas least wanted album", "harry chapin cover", "cover versions"],
    "music_6981": [1992, "americas least wanted album"],
    "music_6982": [1995, "menace to sobriety album"],
    "music_6983": [1996, "razorblade suitcase album", "1997 single remix"],
    "music_6984": [1996, "razorblade suitcase album"],
    "music_6985": [1996, "razorblade suitcase album"],
    "music_6986": [1996, "razorblade suitcase album"],
    "music_6987": [1999, "the science of things album"],
    "music_6988": [1994, "sixteen stone album", "1995 single"],
    "music_6989": [1994, "sixteen stone album", "1996 single"],
    "music_6990": [1994, "sixteen stone album", "1995 single"],
    "music_6991": [1994, "sixteen stone album", "1995 single"],
    "music_6992": [1995, "youd prefer an astronaut album"],
    "music_6993": [1998, "downward is heavenward album"],
    "music_6994": [1993, "electra 2000 album"],
    "music_6995": [1995, "disgraceful album"],
    "music_6996": [1995, "disgraceful album"],
    "music_6997": [1995, "disgraceful era", "billy bragg cover", "cover versions"],
    "music_6998": [1997, "goodbye album"],
    "music_6999": [1995, "disgraceful album", "album track"],
    "music_7000": [1998, "tin planet album"],
    "music_7001": [1993, "gold against the soul album"],
    "music_7002": [1995, "its great when youre straight yeah album"],
    "music_7003": [1995, "its great when youre straight yeah album"],
    "music_7004": [1995, "its great when youre straight yeah album"],
    "music_7005": [1996, "englands irie", "joe strummer", "keith allen", "football songs"],
    "music_7006": [1997, "stupid stupid stupid album"],
    "music_7007": [1997, "stupid stupid stupid album", "1998 single", "marbles why you say yes"],
    "music_7008": [1992, "1992 the love album"],
    "music_7009": [1992, "1992 the love album"],
    "music_7010": [1992, "1992 the love album"],
    "music_7011": [1991, "1992 the love album", "1991 single"],
    "music_7012": [1989, "101 damnations album", "1990 single"],
    "music_7013": [1994, "worry bomb album", "1995 album"],
    "music_7014": [1991, "1992 the love album"],
    "music_7015": [1994, "worry bomb album", "1995 album"],
    "music_7016": [1996, "recovering the satellites album"],
    "music_7017": [1996, "recovering the satellites album", "1997 single"],
    "music_7018": [1999, "this desert life album"],
    "music_7019": [1996, "recovering the satellites album", "1997 single"],
    "music_7020": [1996, "recovering the satellites album"],
    "music_7021": [1996, "recovering the satellites album", "album track"],
    "music_7022": [1996, "recovering the satellites album", "album track"],
    "music_7023": [1993, "august and everything after album", "album track"],
    "music_7024": [1993, "august and everything after album", "1994 single"],
    "music_7025": [1993, "august and everything after album", "1994 single"],
    "music_7026": [1994, "dgc rarities vol 1 compilation", "1993 recording", "non album single"],
    "music_7027": [1996, "villains album", "1997 hit single"],
    "music_7028": [1996, "villains album"],
    "music_7029": [1996, "villains album", "album track"],
    "music_7030": [1996, "villains album", "album track"],
    "music_7031": [1998, "godsmack debut album"],
    "music_7032": [1998, "godsmack debut album"],
    "music_7033": [1998, "godsmack debut album", "1999 single"],
    "music_7034": [1998, "godsmack debut album", "album track"],
    "music_7035": [1996, "as good as dead album"],
    "music_7036": [1996, "as good as dead album", "high fivin mf"],
    "music_7037": [1996, "as good as dead album", "albums", "pearl jam singer eddie vedder"],
    "music_7038": [1994, "high on a happy vibe album", "1994 single"],
    "music_7039": [1995, "tales from the magic fountain album"],
    "music_7040": [1994, "u got 2 know album"],
    "music_7041": [1994, "u got 2 know album"],
    "music_7042": [1995, "war in heaven album", "1996 album"],
    "music_7043": [1994, "ice n green album"],
    "music_7044": [1994, "ice n green album"],
    "music_7045": [1994, "ice n green album", "1995 single", "1996 remix"],
    "music_7046": [1993, "space invaders album", "1994 international hit", "real mccoy"],
    "music_7047": [1994, "space invaders album", "1995 uk hit", "real mccoy"],
    "music_7048": [1995, "another night album", "space invaders album", "mc sar and the real mccoy"],
    "music_7049": [1995, "another night album", "redbone cover", "cover versions"],
    "music_7050": [1994, "space invaders album", "1995 uk single", "mc sar and the real mccoy"],
    "music_7051": [1993, "to the maxximum album", "1994 chart hit"],
    "music_7052": [1994, "to the maxximum album"],
    "music_7053": [1994, "to the maxximum album"],
    "music_7054": [1994, "anticappella album", "mc fixx it guest vocals", "guest vocals"],
    "music_7055": [1998, "dreams album", "1999 uk hit"],
    "music_7056": [1999, "dreams album"],
    "music_7057": [2000, "ring my bell single", "2000s dance music"],
    "music_7058": [1995, "whigfield debut album"],
    "music_7059": [1995, "whigfield debut album"],
    "music_7060": [1995, "the rhythm of the night album"],
    "music_7061": [1995, "the rhythm of the night album"],
    "music_7062": [1994, "there is a party album"],
    "music_7063": [1995, "there is a party album"],
    "music_7064": [1995, "there is a party album"],
    "music_7065": [1996, "world in motion album"],
    "music_7066": [1993, "the album album", "1994 single"],
};

const songs = [
    ["Hey Man Nice Shot", "Filter", "Medium"],
    ["Dose", "Filter", "Hard"],
    ["Welcome to the Fold", "Filter", "Hard"],
    ["Jurassitol", "Filter", "Hard"],

    ["Unsung", "Helmet", "Medium"],
    ["Milquetoast", "Helmet", "Hard"],
    ["Exactly What You Wanted", "Helmet", "Hard"],
    ["In the Meantime", "Helmet", "Medium"],

    ["Mother", "Danzig", "Medium"],
    ["Cantspeak", "Danzig", "Hard"],
    ["It's Coming Down", "Danzig", "Hard"],

    ["Until It Sleeps", "Metallica", "Easy"],

    ["Everything About You", "Ugly Kid Joe", "Easy"],
    ["Cats in the Cradle", "Ugly Kid Joe", "Medium"],
    ["Neighbor", "Ugly Kid Joe", "Hard"],
    ["Milkman's Son", "Ugly Kid Joe", "Hard"],

    ["Mouth", "Bush", "Medium"],
    ["Greedy Fly", "Bush", "Medium"],
    ["Swallowed", "Bush", "Medium"],
    ["Cold Contagious", "Bush", "Hard"],
    ["The Chemicals Between Us", "Bush", "Medium"],
    ["Comedown", "Bush", "Easy"],
    ["Machinehead", "Bush", "Medium"],
    ["Little Things", "Bush", "Medium"],
    ["Glycerine", "Bush", "Easy"],

    ["The Pod", "Hum", "Hard"],
    ["Comin' Home", "Hum", "Hard"],
    ["Iron Clad Lou", "Hum", "Hard"],

    ["Stars", "Dubstar", "Medium"],
    ["Not So Manic Now", "Dubstar", "Medium"],
    ["St Swithin's Day", "Dubstar", "Hard"],
    ["No More Talk", "Dubstar", "Hard"],
    ["Anywhere", "Dubstar", "Hard"],

    // music_7000
    ["Begin Again", "Space", "Medium"],

    ["La Tristesse Durera (Scream to a Sigh)", "Manic Street Preachers", "Hard"],

    ["Reverend Black Grape", "Black Grape", "Medium"],
    ["In the Name of the Father", "Black Grape", "Medium"],
    ["Kelly's Heroes", "Black Grape", "Medium"],
    ["England's Irie", "Black Grape", "Hard"],
    ["Get Higher", "Black Grape", "Hard"],
    ["Marbles", "Black Grape", "Hard"],

    ["The Only Living Boy in New Cross", "Carter USM", "Medium"],
    ["Do Re Me So Far So Good", "Carter USM", "Hard"],
    ["The Impossible Dream", "Carter USM", "Medium"],
    ["After the Watershed", "Carter USM", "Hard"],
    ["Sheriff Fatman", "Carter USM", "Medium"],
    ["Glam Rock Cops", "Carter USM", "Hard"],
    ["Bloodsport for All", "Carter USM", "Hard"],
    ["Lean on Me I Won't Fall Over", "Carter USM", "Hard"],

    ["Goodnight Elizabeth", "Counting Crows", "Hard"],
    ["Daylight Fading", "Counting Crows", "Medium"],
    ["Hanginaround", "Counting Crows", "Medium"],
    ["Angels of the Silences", "Counting Crows", "Medium"],
    ["Have You Seen Me Lately", "Counting Crows", "Hard"],
    ["Catapult", "Counting Crows", "Hard"],
    ["Mercury", "Counting Crows", "Hard"],
    ["Anna Begins", "Counting Crows", "Medium"],
    ["Rain King", "Counting Crows", "Medium"],
    ["Omaha", "Counting Crows", "Medium"],
    ["Einstein on the Beach", "Counting Crows", "Hard"],

    ["The Freshmen", "The Verve Pipe", "Medium"],
    ["Photograph", "The Verve Pipe", "Hard"],
    ["Villains", "The Verve Pipe", "Hard"],
    ["Cup of Tea", "The Verve Pipe", "Hard"],

    ["Whatever", "Godsmack", "Medium"],
    ["Keep Away", "Godsmack", "Medium"],
    ["Voodoo", "Godsmack", "Medium"],
    ["Bad Religion", "Godsmack", "Hard"],

    ["Fritz's Corner", "Local H", "Hard"],
    ["High-Fiving MF", "Local H", "Hard"],
    ["Eddie Vedder", "Local H", "Medium"],

    ["High on a Happy Vibe", "Urban Cookie Collective", "Hard"],
    ["Don't Give Me Your Love", "Urban Cookie Collective", "Hard"],

    ["U and Me", "Cappella", "Medium"],
    ["Move It Up", "Cappella", "Hard"],
    ["Tell Me the Way", "Cappella", "Hard"],

    ["It's a Rainy Day", "Ice MC", "Medium"],
    ["Take Away the Colour", "Ice MC", "Hard"],
    ["Russian Roulette", "Ice MC", "Hard"],

    ["Another Night", "MC Sar and the Real McCoy", "Medium"],
    ["Run Away", "MC Sar and the Real McCoy", "Medium"],

    ["Love and Devotion", "Real McCoy", "Medium"],
    ["Come and Get Your Love", "Real McCoy", "Medium"],
    ["Automatic Lover (Call for Love)", "Real McCoy", "Hard"],

    ["Get-A-Way", "Maxx", "Medium"],
    ["No More (I Can't Stand It)", "Maxx", "Medium"],
    ["You Can Get It", "Maxx", "Hard"],

    ["Move Your Body", "Anticappella", "Hard"],

    ["2 Times", "Ann Lee", "Easy"],
    ["Voices", "Ann Lee", "Hard"],
    ["Ring My Bell", "Ann Lee", "Hard"],

    ["Big Time", "Whigfield", "Hard"],
    ["Close to You", "Whigfield", "Hard"],

    ["Try Me Out", "Corona", "Medium"],
    ["I Don't Wanna Be a Star", "Corona", "Medium"],

    ["Let the Dream Come True", "DJ Bobo", "Hard"],
    ["Love Is All Around", "DJ Bobo", "Hard"],
    ["Freedom", "DJ Bobo", "Hard"],
    ["Pray", "DJ Bobo", "Hard"],

    ["I Miss You", "Haddaway", "Medium"]
];

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

    // Deterministic rotation so the correct answer
    // is not always stored in the same position.
    const shift = index % 4;

    return [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];
}

const quizPack89 = songs.map(([title, artist, difficulty], index) => {
    const id = `music_${6967 + index}`;
    const artistTags = performerTags[artist];
    const recording = recordingTags[id];
    if (!artistTags || !recording) throw new Error(`Missing metadata for ${id}`);

    const year = recording[0];
    const decade = `${Math.floor(year / 10) * 10}s`;
    const albumQuestion = id === "music_7037";

    const question = albumQuestion
        ? "Which Local H album features the song 'Eddie Vedder'?"
        : `Which artist recorded '${title}'?`;

    const answers = albumQuestion
        ? ["As Good as Dead", "Pack Up the Cats", "Ham Fisted", "Here Comes the Zoo"]
        : makeAnswers(artist, index);

    const correctAnswer = albumQuestion ? "As Good as Dead" : artist;
    const isAlbumTrack = recording.includes("album track");

    return {
        id,
        category: "Music",
        difficulty,
        question,
        answers,
        correctAnswer,
        tags: [...new Set([
            "music",
            albumQuestion ? "albums" : "songs",
            "recordings",
            ...(albumQuestion ? [] : [isAlbumTrack ? "album tracks" : "singles"]),
            decade,
            `${decade} music`,
            `${year} releases`,
            title.toLowerCase(),
            artist.toLowerCase(),
            ...artistTags,
            ...recording.slice(1)
        ])],
        dailyEligible: true
    };
});

module.exports = quizPack89;
