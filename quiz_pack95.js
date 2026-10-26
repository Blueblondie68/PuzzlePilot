// quiz_pack95.js
// PuzzlePilot Bigggggg Quiz - Music Pack 95
// Tagging audit: 100 questions, music_7567 to music_7666.
// Existing questions, answers, difficulties and Daily Quiz eligibility preserved,
// except music_7637, corrected to identify the 2005 Stereophonics hit.
// Release and decade details are metadata, not dates in player-facing questions.

const songs = [
    ["Nine in the Afternoon", "Panic at the Disco"],
    ["That's Not My Name", "The Ting Tings"],
    ["Shut Up and Let Me Go", "The Ting Tings"],
    ["Black and Gold", "Sam Sparro"],
    ["Heartbroken", "T2 feat. Jodie Aysha"],
    ["Wearing My Rolex", "Wiley"],
    ["Dance Wiv Me", "Dizzee Rascal feat. Calvin Harris and Chrome"],
    ["Bonkers", "Dizzee Rascal"],
    ["Bulletproof", "La Roux"],
    ["In for the Kill", "La Roux"],

    ["Mercy", "The Third Degree"],
    ["Starz in Their Eyes", "Just Jack"],
    ["The Day I Died", "Just Jack"],
    ["Standing in the Way of Control", "Gossip"],
    ["Heavy Cross", "Gossip"],
    ["Young Folks", "Peter Bjorn and John"],
    ["Two Doors Down", "Mystery Jets"],
    ["Half in Love with Elizabeth", "Mystery Jets"],
    ["Golden Skans", "Klaxons"],
    ["It's Not Over Yet", "Klaxons"],
    ["Atlantis to Interzone", "Klaxons"],
    ["Let's Dance to Joy Division", "The Wombats"],
    ["Moving to New York", "The Wombats"],
    ["Kill the Director", "The Wombats"],
    ["Always Where I Need to Be", "The Kooks"],
    ["Ooh La", "The Kooks"],
    ["Shine On", "The Kooks"],
    ["Hounds of Love", "The Futureheads"],
    ["Decent Days and Nights", "The Futureheads"],
    ["Beginning of the Twist", "The Futureheads"],
    ["Banquet", "Bloc Party"],
    ["Helicopter", "Bloc Party"],
    ["Flux", "Bloc Party"],
    ["The Prayer", "Bloc Party"],
    ["Monster", "The Automatic"],
    ["Raoul", "The Automatic"],
    ["Recover", "The Automatic"],
    ["Away from Here", "The Enemy"],
    ["Had Enough", "The Enemy"],
    ["We'll Live and Die in These Towns", "The Enemy"],
    ["Geraldine", "Glasvegas"],
    ["Daddy's Gone", "Glasvegas"],
    ["Flowers & Football Tops", "Glasvegas"],
    ["Valerie", "The Zutons"],
    ["Why Won't You Give Me Your Love?", "The Zutons"],
    ["Always Right Behind You", "The Zutons"],
    ["In the Morning", "The Coral"],
    ["Pass It On", "The Coral"],
    ["Don't Think You're the First", "The Coral"],
    ["Seven Nation Army", "The White Stripes"],
    ["Icky Thump", "The White Stripes"],
    ["The Hardest Button to Button", "The White Stripes"],
    ["Steady, As She Goes", "The Raconteurs"],
    ["Salute Your Solution", "The Raconteurs"],
    ["No One Knows", "Queens of the Stone Age"],
    ["Go with the Flow", "Queens of the Stone Age"],
    ["Little Sister", "Queens of the Stone Age"],
    ["By the Way", "Red Hot Chili Peppers"],
    ["Dani California", "Red Hot Chili Peppers"],

    ["Can't Stop", "Red Hot Chili Peppers"],
    ["The Zephyr Song", "Red Hot Chili Peppers"],
    ["Tell Me Baby", "Red Hot Chili Peppers"],
    ["Snow (Hey Oh)", "Red Hot Chili Peppers"],
    ["Vertigo", "U2"],
    ["Sometimes You Can't Make It on Your Own", "U2"],
    ["City of Blinding Lights", "U2"],
    ["All Because of You", "U2"],
    ["Beautiful Day", "U2"],
    ["Elevation", "U2"],
    ["Stuck in a Moment You Can't Get Out Of", "U2"],
    // Keep the original artist in the option pool so the other 99 sets of
    // choices do not change. The live question is corrected below.
    ["Dakota", "The Shadows"],
    ["Times Like These", "Foo Fighters"],
    ["Best of You", "Foo Fighters"],
    ["The Pretender", "Foo Fighters"],
    ["All My Life", "Foo Fighters"],
    ["DOA", "Foo Fighters"],
    ["Long Road to Ruin", "Foo Fighters"],
    ["Plug In Baby", "Muse"],
    ["Supermassive Black Hole", "Muse"],
    ["Starlight", "Muse"],
    ["Knights of Cydonia", "Muse"],
    ["Uprising", "Muse"],
    ["Feeling Good", "Muse"],
    ["We Used to Be Friends", "The Dandy Warhols"],
    ["Godless", "The Dandy Warhols"],
    ["Take a Look Around", "Limp Bizkit"],
    ["Rollin' (Air Raid Vehicle)", "Limp Bizkit"],
    ["My Generation", "Limp Bizkit"],
    ["My Way", "Limp Bizkit"],
    ["Here to Stay", "Korn"],
    ["Did My Time", "Korn"],
    ["Twisted Transistor", "Korn"],
    ["Last Resort", "Papa Roach"],
    ["Scars", "Papa Roach"],
    ["Getting Away with Murder", "Papa Roach"],
    ["Too Bad", "Nickelback"],
    ["Photograph", "Nickelback"],
    ["Far Away", "Nickelback"],
    ["If Everyone Cared", "Nickelback"],
    ["It's Been Awhile", "Staind"]
];

// Shared performer tags, applied to every question for genre and artist searches.
const performerTags = {
    "Panic at the Disco": ["american", "pop rock", "alternative rock", "emo pop", "bands", "panic! at the disco", "brendon urie"],
    "The Ting Tings": ["british", "english", "indie pop", "dance punk", "duos", "katie white", "jules de martino"],
    "Sam Sparro": ["australian", "electropop", "soul", "dance pop", "male singers", "solo artists"],
    "T2 feat. Jodie Aysha": ["british", "bassline", "uk garage", "dance", "collaborations", "t2", "jodie aysha"],
    "Wiley": ["british", "english", "grime", "hip hop", "rappers", "solo artists", "eskiboy"],
    "Dizzee Rascal feat. Calvin Harris and Chrome": ["british", "english", "scottish", "hip hop", "dance", "grime", "collaborations", "dizzee rascal", "calvin harris", "chrome"],
    "Dizzee Rascal": ["british", "english", "grime", "hip hop", "dance", "rappers", "solo artists"],
    "La Roux": ["british", "english", "synth pop", "electropop", "dance pop", "duos", "elly jackson"],
    "The Third Degree": ["british", "soul", "funk", "cover versions", "groups"],
    "Just Jack": ["british", "english", "alternative hip hop", "pop", "male singers", "solo artists", "jack allsopp"],
    "Gossip": ["american", "indie rock", "dance punk", "alternative rock", "bands", "beth ditto"],
    "Peter Bjorn and John": ["swedish", "indie pop", "indie rock", "bands", "whistling"],
    "Mystery Jets": ["british", "english", "indie rock", "indie pop", "bands"],
    "Klaxons": ["british", "english", "new rave", "indie rock", "dance punk", "bands"],
    "The Wombats": ["british", "english", "indie rock", "indie pop", "bands", "liverpool"],
    "The Kooks": ["british", "english", "indie rock", "bands", "luke pritchard"],
    "The Futureheads": ["british", "english", "post punk revival", "indie rock", "bands", "sunderland"],
    "Bloc Party": ["british", "english", "indie rock", "post punk revival", "bands", "kele okereke"],
    "The Automatic": ["british", "welsh", "indie rock", "alternative rock", "bands", "the automatic automatic"],
    "The Enemy": ["british", "english", "indie rock", "bands", "coventry", "tom clarke"],
    "Glasvegas": ["british", "scottish", "indie rock", "alternative rock", "bands", "james allan"],
    "The Zutons": ["british", "english", "indie rock", "bands", "liverpool", "abi harding"],
    "The Coral": ["british", "english", "indie rock", "psychedelic rock", "bands", "liverpool"],
    "The White Stripes": ["american", "garage rock", "blues rock", "duos", "jack white", "meg white"],
    "The Raconteurs": ["american", "garage rock", "alternative rock", "bands", "jack white", "brendan benson"],
    "Queens of the Stone Age": ["american", "alternative rock", "hard rock", "desert rock", "bands", "josh homme"],
    "Red Hot Chili Peppers": ["american", "alternative rock", "funk rock", "bands", "anthony kiedis", "flea", "john frusciante"],
    "U2": ["irish", "rock", "alternative rock", "bands", "bono", "the edge"],
    "Stereophonics": ["british", "welsh", "rock", "alternative rock", "bands", "kelly jones"],
    "Foo Fighters": ["american", "alternative rock", "post grunge", "bands", "dave grohl"],
    "Muse": ["british", "english", "alternative rock", "progressive rock", "bands", "matt bellamy"],
    "The Dandy Warhols": ["american", "alternative rock", "psychedelic rock", "bands", "courtney taylor taylor"],
    "Limp Bizkit": ["american", "nu metal", "rap rock", "bands", "fred durst"],
    "Korn": ["american", "nu metal", "alternative metal", "bands", "jonathan davis"],
    "Papa Roach": ["american", "nu metal", "alternative rock", "bands", "jacoby shaddix"],
    "Nickelback": ["canadian", "post grunge", "hard rock", "bands", "chad kroeger"],
    "Staind": ["american", "post grunge", "alternative metal", "bands", "aaron lewis"]
};

// Recording-specific details; one entry per question, in songs order.
// Years are the first single issue or original album period of this recording.
// Later single dates are additional tags, where useful.
const recordingInfo = [
    [2008, "pretty odd album"],
    [2008, "we started nothing album"],
    [2008, "we started nothing album"],
    [2008, "sam sparro album"],
    [2007, "bassline house", "jodie aysha vocals"],
    [2008, "grime", "uk dance hits"],
    [2008, "tongue n cheek album", "calvin harris", "chrome", "2009 album"],
    [2009, "tongue n cheek album", "armand van helden production"],
    [2009, "la roux album"],
    [2009, "la roux album"],
    [2009, "duffy mercy cover", "cover versions", "funk soul"],
    [2007, "overtones album"],
    [2009, "all night cinema album"],
    [2006, "standing in the way of control album", "2007 uk single"],
    [2009, "music for men album"],
    [2006, "writers block album", "victoria bergsman vocals"],
    [2008, "twenty one album"],
    [2008, "twenty one album"],
    [2007, "myths of the near future album"],
    [2007, "myths of the near future album", "grace not over yet cover", "cover versions"],
    [2006, "myths of the near future album", "2007 album"],
    [2007, "a guide to love loss and desperation album"],
    [2006, "a guide to love loss and desperation album", "2007 album"],
    [2007, "a guide to love loss and desperation album"],
    [2008, "konk album"],
    [2006, "inside in inside out album"],
    [2008, "konk album"],
    [2004, "the futureheads album", "kate bush cover", "cover versions", "2005 single"],
    [2004, "the futureheads album", "2005 single"],
    [2008, "this is not the world album"],
    [2004, "silent alarm album", "2005 album"],
    [2004, "silent alarm album", "2005 album"],
    [2007, "flux single"],
    [2007, "a weekend in the city album"],
    [2006, "not accepted anywhere album"],
    [2006, "not accepted anywhere album"],
    [2006, "not accepted anywhere album"],
    [2007, "well live and die in these towns album"],
    [2007, "well live and die in these towns album"],
    [2007, "well live and die in these towns album"],
    [2008, "glasvegas album"],
    [2007, "glasvegas album", "2008 album"],
    [2008, "glasvegas album", "2009 single"],
    [2006, "tired of hanging around album", "original song", "amy winehouse cover", "mark ronson cover"],
    [2006, "tired of hanging around album"],
    [2008, "you can do anything album"],
    [2005, "the invisible invasion album"],
    [2003, "magic and medicine album"],
    [2003, "magic and medicine album"],
    [2003, "elephant album"],
    [2007, "icky thump album"],
    [2003, "elephant album"],
    [2006, "broken boy soldiers album"],
    [2008, "consolers of the lonely album"],
    [2002, "songs for the deaf album"],
    [2002, "songs for the deaf album", "2003 single"],
    [2005, "lullabies to paralyze album"],
    [2002, "by the way album"],
    [2006, "stadium arcadium album"],
    [2002, "by the way album", "2003 single"],
    [2002, "by the way album"],
    [2006, "stadium arcadium album"],
    [2006, "stadium arcadium album", "2007 single"],
    [2004, "how to dismantle an atomic bomb album"],
    [2004, "how to dismantle an atomic bomb album", "2005 single"],
    [2004, "how to dismantle an atomic bomb album", "2005 single"],
    [2004, "how to dismantle an atomic bomb album", "2005 single"],
    [2000, "all that you cant leave behind album"],
    [2000, "all that you cant leave behind album", "2001 single"],
    [2000, "all that you cant leave behind album", "2001 single"],
    [2005, "language sex violence other album", "2005 uk number one", "kelly jones songwriting"],
    [2002, "one by one album", "2003 single"],
    [2005, "in your honor album"],
    [2007, "echoes silence patience and grace album"],
    [2002, "one by one album"],
    [2005, "in your honor album"],
    [2007, "echoes silence patience and grace album"],
    [2001, "origin of symmetry album"],
    [2006, "black holes and revelations album"],
    [2006, "black holes and revelations album"],
    [2006, "black holes and revelations album"],
    [2009, "the resistance album"],
    [2001, "origin of symmetry album", "nina simone cover", "cover versions"],
    [2003, "welcome to the monkey house album", "veronica mars theme tune", "television theme music"],
    [2000, "thirteen tales from urban bohemia album"],
    [2000, "chocolate starfish and the hot dog flavored water album", "mission impossible 2 soundtrack", "film soundtracks"],
    [2000, "chocolate starfish and the hot dog flavored water album"],
    [2000, "chocolate starfish and the hot dog flavored water album"],
    [2000, "chocolate starfish and the hot dog flavored water album", "2001 single"],
    [2002, "untouchables album"],
    [2003, "take a look in the mirror album", "lara croft tomb raider the cradle of life soundtrack", "film soundtracks"],
    [2005, "see you on the other side album"],
    [2000, "infest album"],
    [2004, "getting away with murder album", "2005 single"],
    [2004, "getting away with murder album"],
    [2001, "silver side up album", "2002 single"],
    [2005, "all the right reasons album"],
    [2005, "all the right reasons album", "2006 single"],
    [2005, "all the right reasons album", "2007 single"],
    [2001, "break the cycle album"]
];

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
                7567 + index;

            return {
                id:
                    `music_${String(number).padStart(4, '0')}`,

                category:
                    'Music',

                question:
                    number === 7637
                        ? "Which band released the 2005 hit 'Dakota'?"
                        : `Which artist recorded ${title}?`,

                answers:
                    number === 7637
                        ? makeAnswers(artist, index).map(
                            answer => answer === "The Shadows"
                                ? "Stereophonics" : answer
                        )
                        : makeAnswers(artist, index),

                correctAnswer:
                    number === 7637 ? "Stereophonics" : artist,

                difficulty:
                    index % 3 === 0
                        ? 'Easy'
                        : 'Medium',

                tags: makeTags(
                    title,
                    number === 7637 ? "Stereophonics" : artist,
                    index
                ),

                dailyEligible:
                    true
            };
        }
    );

module.exports =
    questions;
