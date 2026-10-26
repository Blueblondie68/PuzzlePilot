// quiz_pack92.js
// PuzzlePilot Bigggggg Quiz - Music Pack 92
// Tagging audit: 100 questions, music_7267 to music_7366.
// All original question wording, answers, IDs and difficulties retained.
// Complete artist, genre, period, recording and release tags added.

const songs = [
    ["Black Cat", "Janet Jackson", "Easy"],
    ["Alright", "Janet Jackson", "Medium"],
    ["Come Back to Me", "Janet Jackson", "Medium"],

    ["Thieves in the Temple", "Prince", "Medium"],
    ["New Power Generation", "Prince", "Medium"],
    ["Gett Off", "Prince", "Easy"],
    ["Cream", "Prince", "Easy"],
    ["Diamonds and Pearls", "Prince", "Easy"],
    ["Money Don't Matter 2 Night", "Prince", "Medium"],
    ["Sexy MF", "Prince", "Medium"],
    ["My Name Is Prince", "Prince", "Medium"],
    ["The Morning Papers", "Prince", "Hard"],
    ["Peach", "Prince", "Medium"],
    ["The Most Beautiful Girl in the World", "Prince", "Easy"],
    ["Gold", "Prince", "Medium"],

    ["Yesterday", "Wet Wet Wet", "Hard"],

    ["My 16th Apology", "Shakespears Sister", "Hard"],

    ["Space Jungle", "Adamski", "Hard"],

    ["Won't Talk About It", "Beats International", "Hard"],
    ["Burundi Blues", "Beats International", "Hard"],

    ["U R the Best Thing", "D Ream", "Medium"],
    ["Take Me Away", "D Ream", "Hard"],
    ["Shoot Me with Your Love", "D Ream", "Hard"],

    ["Swamp Thing", "The Grid", "Medium"],
    ["Texas Cowboys", "The Grid", "Hard"],
    ["Rollercoaster", "The Grid", "Hard"],
    ["Crystal Clear", "The Grid", "Hard"],

    ["Comin' On", "The Shamen", "Hard"],

    ["The Sun Rising", "The Beloved", "Medium"],

    ["Children", "EMF", "Hard"],
    ["Lies", "EMF", "Hard"],
    ["They're Here", "EMF", "Hard"],
    ["Perfect Day", "EMF", "Hard"],

    ["The Devil You Know", "Jesus Jones", "Medium"],
    ["The Right Decision", "Jesus Jones", "Hard"],

    ["Hot Love Now", "The Wonder Stuff", "Hard"],

    ["Higher Than the Sun", "Primal Scream", "Medium"],
    ["Kowalski", "Primal Scream", "Medium"],

    ["Born of Frustration", "James", "Medium"],

    ["Happy", "Sister Hazel", "Hard"],

    ["All I Want", "Toad the Wet Sprocket", "Medium"],
    ["Something's Always Wrong", "Toad the Wet Sprocket", "Medium"],
    ["Fall Down", "Toad the Wet Sprocket", "Medium"],
    ["Walk on the Ocean", "Toad the Wet Sprocket", "Medium"],
    ["Good Intentions", "Toad the Wet Sprocket", "Hard"],

    ["Carolina Blues", "Blues Traveler", "Hard"],

    ["You Let Your Heart Go Too Fast", "Spin Doctors", "Hard"],

    ["Allison Road", "Gin Blossoms", "Medium"],

    ["Small Wonders", "Dogs Eye View", "Hard"],

    ["Right Hand Man", "Joan Osborne", "Medium"],
    ["St Teresa", "Joan Osborne", "Medium"],
    ["Ladder", "Joan Osborne", "Hard"],

    ["Me", "Paula Cole", "Hard"],

    ["Taffy", "Lisa Loeb", "Hard"],

    ["There She Goes", "Sixpence None the Richer", "Easy"],

    ["Feelin' Alright", "Len", "Hard"],

    ["Afrodiziak", "Bran Van 3000", "Hard"],

    ["Luv 4 Luv", "Robin S", "Medium"],
    ["What I Do Best", "Robin S", "Hard"],
    ["Back It Up", "Robin S", "Hard"],

    ["I'm Not Over You", "CeCe Peniston", "Hard"],

    ["Makin' Happy", "Crystal Waters", "Medium"],
    ["What I Need", "Crystal Waters", "Hard"],

    ["Strike It Up", "Black Box", "Medium"],
    ["Everybody Everybody", "Black Box", "Medium"],
    ["Fantasy", "Black Box", "Hard"],
    ["Open Your Eyes", "Black Box", "Hard"],

    ["Fallin' in Love", "La Bouche", "Hard"],
    ["I Love to Love", "La Bouche", "Hard"],

    ["Follow the Rules", "Livin Joy", "Hard"],
    ["Where Can I Find Love", "Livin Joy", "Hard"],

    ["Come into My Life", "Gala", "Medium"],
    ["Suddenly", "Gala", "Hard"],

    ["Only When I Sleep", "The Corrs", "Medium"],

    ["Crush", "Jennifer Paige", "Easy"],
    ["Sober", "Jennifer Paige", "Hard"],
    ["Always You", "Jennifer Paige", "Hard"],

    ["Where Do You Go", "No Mercy", "Easy"],
    ["Please Don't Go", "No Mercy", "Medium"],
    ["When I Die", "No Mercy", "Medium"],

    ["Wrong", "Everything but the Girl", "Medium"],
    ["Walking Wounded", "Everything but the Girl", "Medium"],
    ["Single", "Everything but the Girl", "Hard"],

    ["You're Not Alone", "Olive", "Easy"],
    ["Miracle", "Olive", "Hard"],

    ["Pay for Me", "Whale", "Hard"],
    ["Four Big Speakers", "Whale", "Hard"],

    ["Wanted", "White Town", "Hard"],

    ["Pepper", "Butthole Surfers", "Medium"],
    ["Cough Syrup", "Butthole Surfers", "Hard"],

    ["Money", "Space", "Hard"],

    ["Korean Bodega", "Fun Lovin Criminals", "Hard"],

    ["In Your Care", "Tasmin Archer", "Hard"],

    ["Constant Craving", "k.d. lang", "Easy"],
    ["Miss Chatelaine", "k.d. lang", "Medium"],

    ["Save the Best for Last", "Vanessa Williams", "Easy"],
    ["The Sweetest Days", "Vanessa Williams", "Medium"],

    ["Blowing Kisses in the Wind", "Paula Abdul", "Medium"],
    ["Vibeology", "Paula Abdul", "Medium"],

    ["I Wonder Why", "Curtis Stigers", "Easy"]
];


const performerTags = {
    "Janet Jackson": ["american", "pop", "r and b", "new jack swing", "dance pop", "female singers", "solo artists"],
    "Prince": ["american", "pop", "funk", "rock", "r and b", "minneapolis sound", "male singers", "solo artists", "multi instrumentalists"],
    "Wet Wet Wet": ["british", "scottish", "pop", "pop rock", "soul pop", "bands", "marti pellow"],
    "Shakespears Sister": ["british", "pop rock", "alternative pop", "female groups", "siobhan fahey", "marcella detroit"],
    "Adamski": ["british", "english", "acid house", "dance", "electronic", "djs", "music producers"],
    "Beats International": ["british", "dance", "electronic", "hip hop", "groups", "norman cook", "fatboy slim"],
    "D Ream": ["british", "northern irish", "dance", "house", "dance pop", "groups", "d:ream", "peter cunnah"],
    "The Grid": ["british", "electronic", "house", "techno", "dance", "duos", "dave ball", "richard norris"],
    "The Shamen": ["british", "scottish", "electronic", "rave", "dance", "bands", "mr c"],
    "The Beloved": ["british", "english", "electronic", "synth pop", "house", "groups", "jon marsh"],
    "EMF": ["british", "english", "alternative rock", "dance rock", "grebo", "bands"],
    "Jesus Jones": ["british", "english", "alternative rock", "dance rock", "bands", "mike edwards"],
    "The Wonder Stuff": ["british", "english", "indie rock", "alternative rock", "bands", "miles hunt"],
    "Primal Scream": ["british", "scottish", "alternative rock", "dance rock", "psychedelic rock", "bands", "bobby gillespie"],
    "James": ["british", "english", "alternative rock", "indie rock", "bands", "tim booth"],
    "Sister Hazel": ["american", "alternative rock", "pop rock", "southern rock", "bands"],
    "Toad the Wet Sprocket": ["american", "alternative rock", "folk rock", "pop rock", "bands", "glen phillips"],
    "Blues Traveler": ["american", "blues rock", "jam bands", "rock", "bands", "john popper"],
    "Spin Doctors": ["american", "alternative rock", "pop rock", "funk rock", "bands"],
    "Gin Blossoms": ["american", "alternative rock", "jangle pop", "bands"],
    "Dogs Eye View": ["american", "alternative rock", "pop rock", "bands", "dog's eye view", "peter stuart"],
    "Joan Osborne": ["american", "pop rock", "blues rock", "singer songwriters", "female singers", "solo artists"],
    "Paula Cole": ["american", "pop rock", "folk rock", "singer songwriters", "female singers", "solo artists"],
    "Lisa Loeb": ["american", "pop rock", "folk rock", "singer songwriters", "female singers", "solo artists", "nine stories"],
    "Sixpence None the Richer": ["american", "pop rock", "alternative rock", "bands", "leigh nash"],
    "Len": ["canadian", "alternative rock", "pop", "bands", "marc costanzo", "sharon costanzo"],
    "Bran Van 3000": ["canadian", "alternative hip hop", "electronic", "pop", "collectives", "james di salvio"],
    "Robin S": ["american", "house", "dance pop", "r and b", "female singers", "solo artists"],
    "CeCe Peniston": ["american", "house", "dance pop", "r and b", "female singers", "solo artists"],
    "Crystal Waters": ["american", "house", "dance", "female singers", "solo artists"],
    "Black Box": ["italian", "house", "italo house", "dance", "groups"],
    "La Bouche": ["german", "eurodance", "dance pop", "duos", "melanie thornton", "lane mccray"],
    "Livin Joy": ["italian", "eurodance", "house", "dance", "groups", "livin' joy"],
    "Gala": ["italian", "eurodance", "dance pop", "female singers", "solo artists", "gala rizzatto"],
    "The Corrs": ["irish", "pop rock", "folk rock", "celtic pop", "bands", "andrea corr"],
    "Jennifer Paige": ["american", "pop", "pop rock", "female singers", "solo artists"],
    "No Mercy": ["american", "eurodance", "pop", "male vocal groups", "trios"],
    "Everything but the Girl": ["british", "english", "trip hop", "downtempo", "electronic", "duos", "tracey thorn", "ben watt"],
    "Olive": ["british", "english", "trip hop", "electronic", "dance", "groups", "ruth ann boyle"],
    "Whale": ["swedish", "alternative rock", "electronic rock", "bands", "cia berg"],
    "White Town": ["british", "english", "indie pop", "electronic", "solo artists", "jyoti mishra"],
    "Butthole Surfers": ["american", "alternative rock", "psychedelic rock", "bands", "gibby haynes"],
    "Space": ["british", "english", "britpop", "indie rock", "bands", "liverpool", "tommy scott"],
    "Fun Lovin Criminals": ["american", "alternative rock", "hip hop", "funk rock", "bands", "fun lovin' criminals", "huey morgan"],
    "Tasmin Archer": ["british", "english", "pop rock", "singer songwriters", "female singers", "solo artists"],
    "k.d. lang": ["canadian", "country pop", "adult contemporary", "singer songwriters", "female singers", "solo artists"],
    "Vanessa Williams": ["american", "pop", "r and b", "adult contemporary", "female singers", "solo artists"],
    "Paula Abdul": ["american", "pop", "dance pop", "r and b", "female singers", "solo artists"],
    "Curtis Stigers": ["american", "pop rock", "adult contemporary", "jazz", "male singers", "solo artists", "saxophonists"]
};

// Release details refer to this artist's version. For album tracks, the
// album year is used; a later single date is noted separately where known.
// Release dates do not affect question wording or difficulty.
const recordingInfo = [
    [1990, "rhythm nation 1814 album", "1989 album", "1990 single"],
    [1990, "rhythm nation 1814 album", "1989 album", "1990 single"],
    [1990, "rhythm nation 1814 album", "1989 album", "1990 single"],
    [1990, "graffiti bridge album", "graffiti bridge film soundtrack"],
    [1990, "graffiti bridge album"],
    [1991, "diamonds and pearls album", "the new power generation"],
    [1991, "diamonds and pearls album", "the new power generation"],
    [1991, "diamonds and pearls album", "the new power generation"],
    [1991, "diamonds and pearls album", "1992 single"],
    [1992, "love symbol album", "the new power generation"],
    [1992, "love symbol album", "the new power generation"],
    [1992, "love symbol album", "1993 single"],
    [1993, "the hits the b sides album", "1993 single"],
    [1994, "1994 single", "the artist formerly known as prince"],
    [1995, "the gold experience album"],
    [1997, "10 album", "beatles cover", "cover versions"],
    [1992, "hormonally yours album"],
    [1990, "doctor adamskis musical pharmacy album", "the space jungle", "ricardo da force", "elvis presley all shook up interpolation"],
    [1990, "let them eat bingo album", "lindy layton"],
    [1990, "let them eat bingo album", "janet kay collaboration"],
    [1993, "d ream on volume 1 album", "1994 reissue"],
    [1993, "d ream on volume 1 album"],
    [1995, "world album"],
    [1994, "evolver album"],
    [1993, "texas cowboys single", "1994 reissue", "evolver album"],
    [1994, "evolver album"],
    [1992, "456 album", "1993 single"],
    [1992, "boss drum album"],
    [1989, "happiness album", "1990 single"],
    [1991, "schubert dip album"],
    [1991, "schubert dip album"],
    [1992, "stigma album"],
    [1995, "cha cha cha album"],
    [1993, "perverse album"],
    [1993, "perverse album"],
    [1994, "hot love now ep"],
    [1991, "screamadelica album"],
    [1997, "vanishing point album"],
    [1992, "seven album"],
    [1997, "somewhere more familiar album"],
    [1991, "fear album", "1992 single"],
    [1994, "dulcinea album"],
    [1994, "dulcinea album"],
    [1991, "fear album", "1992 single"],
    [1995, "friends film soundtrack", "film soundtracks", "in light syrup album"],
    [1997, "straight on till morning album"],
    [1994, "turn it upside down album"],
    [1992, "new miserable experience album"],
    [1995, "happy nowhere album", "1996 single"],
    [1995, "relish album"],
    [1995, "relish album"],
    [1995, "relish album"],
    [1996, "this fire album", "1997 single"],
    [1995, "tails album", "lisa loeb and nine stories"],
    [1999, "sixpence none the richer album", "the las cover", "cover versions"],
    [1999, "you cant stop the bum rush album"],
    [1997, "glee album"],
    [1993, "show me love album", "love for love"],
    [1993, "show me love album"],
    [1993, "show me love album"],
    [1994, "thought ya knew album"],
    [1991, "surprise album"],
    [1994, "storyteller album"],
    [1990, "dreamland album"],
    [1990, "dreamland album"],
    [1990, "dreamland album"],
    [1990, "dreamland album"],
    [1995, "sweet dreams album"],
    [1995, "sweet dreams album"],
    [1996, "dont stop movin album"],
    [1996, "dont stop movin album"],
    [1997, "come into my life album"],
    [1997, "come into my life album"],
    [1997, "talk on corners album"],
    [1998, "jennifer paige debut album"],
    [1998, "jennifer paige debut album"],
    [1998, "jennifer paige debut album"],
    [1996, "my promise album"],
    [1996, "my promise album"],
    [1996, "my promise album"],
    [1996, "walking wounded album"],
    [1996, "walking wounded album"],
    [1996, "walking wounded album"],
    [1996, "extra virgin album", "1997 single"],
    [1997, "extra virgin album"],
    [1995, "we care album"],
    [1998, "all disco dance must end in broken bones album"],
    [1997, "women in technology album"],
    [1996, "electriclarryland album"],
    [1996, "electriclarryland album"],
    [1995, "money kill me single", "spiders album"],
    [1998, "100 percent colombian album"],
    [1993, "great expectations album"],
    [1992, "ingenue album"],
    [1992, "ingenue album"],
    [1991, "the comfort zone album", "1992 single"],
    [1994, "the sweetest days album"],
    [1991, "spellbound album"],
    [1991, "spellbound album", "1992 single"],
    [1991, "curtis stigers album", "1992 uk single"]
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

    const shift = index % 4;

    return [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];
}

const quizPack92 = songs.map(
    ([title, artist, difficulty], index) => ({
        id: `music_${7267 + index}`,
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
            const [year, ...releaseDetails] = recordingInfo[index];
            const decade = `${Math.floor(year / 10) * 10}s`;
            return [...new Set([
                "music", "songs", "recordings", "artist identification",
                ...(decade === "1990s" ? ["1990s", "1990s music"] : []),
                decade, `${decade} music`, `${year} releases`,
                title.toLowerCase(), artist.toLowerCase(),
                ...performerTags[artist], ...releaseDetails
            ])];
        })(),
        dailyEligible: true
    })
);

module.exports = quizPack92;
