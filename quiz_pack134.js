// quiz_pack134.js
// PuzzlePilot Big Quiz - Music Pack 134
// Mainly 2020s music, with one verified 2019 recording
// 100 questions; IDs music_11467 to music_11566
// Original correct answers retained; full metadata restored

const songs = [
    ["Easy On Me", "Adele", 2021],
    ["Oh My God", "Adele", 2021],
    ["I Drink Wine", "Adele", 2021],
    ["To Be Loved", "Adele", 2021],
    ["Hold On", "Adele", 2021],
    ["Can I Get It", "Adele", 2021],
    ["Love Is a Game", "Adele", 2021],
    ["Strangers by Nature", "Adele", 2021],
    ["Forget Me", "Lewis Capaldi", 2022],
    ["Wish You the Best", "Lewis Capaldi", 2023],
    ["Pointless", "Lewis Capaldi", 2022],
    ["How I'm Feeling Now", "Lewis Capaldi", 2023],
    ["Unholy", "Sam Smith and Kim Petras", 2022],
    ["I'm Not Here to Make Friends", "Sam Smith", 2023],
    ["Love Me More", "Sam Smith", 2022],
    ["Diamonds", "Sam Smith", 2020],
    ["To Die For", "Sam Smith", 2020],
    ["Escapism.", "RAYE and 070 Shake", 2022],
    ["Worth It.", "RAYE", 2023],
    ["Oscar Winning Tears.", "RAYE", 2023],
    ["Black Mascara.", "RAYE", 2022],
    ["The Thrill Is Gone.", "RAYE", 2023],
    ["Hard Out Here.", "RAYE", 2022],
    ["Genesis.", "RAYE", 2024],
    ["Strangers", "Kenya Grace", 2023],
    ["Sprinter", "Dave and Central Cee", 2023],
    ["Starlight", "Dave", 2022],
    ["Verdansk", "Dave", 2021],
    ["Clash", "Dave and Stormzy", 2021],
    ["Location", "Dave and Burna Boy", 2019],
    ["Doja", "Central Cee", 2022],
    ["Let Go", "Central Cee", 2022],
    ["Obsessed With You", "Central Cee", 2021],
    ["Boy's a liar Pt. 2", "PinkPantheress and Ice Spice", 2023],
    ["Pain", "PinkPantheress", 2021],
    ["Just for me", "PinkPantheress", 2021],
    ["Break It Off", "PinkPantheress", 2021],
    ["Nice to meet you", "PinkPantheress and Central Cee", 2023],
    ["Illegal", "PinkPantheress", 2025],
    ["Water", "Tyla", 2023],
    ["Truth or Dare", "Tyla", 2023],
    ["Jump", "Tyla", 2024],
    ["Push 2 Start", "Tyla", 2024],
    ["Calm Down", "Rema", 2022],
    ["Soundgasm", "Rema", 2021],
    ["Charm", "Rema", 2023],
    ["Baby (Is It a Crime)", "Rema", 2025],
    ["Last Last", "Burna Boy", 2022],
    ["City Boys", "Burna Boy", 2023],
    ["For My Hand", "Burna Boy and Ed Sheeran", 2022],
    ["Sittin' on Top of the World", "Burna Boy", 2023],
    ["Rush", "Ayra Starr", 2022],
    ["Commas", "Ayra Starr", 2024],
    ["Bloody Samaritan", "Ayra Starr", 2021],
    ["Sability", "Ayra Starr", 2023],
    ["Where Are You Now", "Lost Frequencies and Calum Scott", 2021],
    ["Miracle", "Calvin Harris and Ellie Goulding", 2023],
    ["Desire", "Calvin Harris and Sam Smith", 2023],
    ["Potion", "Calvin Harris, Dua Lipa and Young Thug", 2022],
    ["Stay with Me", "Calvin Harris, Justin Timberlake, Halsey and Pharrell Williams", 2022],
    ["Lovers in a Past Life", "Calvin Harris and Rag'n'Bone Man", 2024],
    ["Blessings", "Calvin Harris and Clementine Douglas", 2025],
    ["Baddadan", "Chase & Status", 2023],
    ["Backbone", "Chase & Status and Stormzy", 2024],
    ["Disconnect", "Chase & Status and Becky Hill", 2023],
    ["React", "Switch Disco and Ella Henderson", 2023],
    ["Prada", "cassö, RAYE and D-Block Europe", 2023],
    ["Ferrari", "James Hype and Miggy Dela Rosa", 2022],
    ["Make Me Feel Good", "Belters Only and Jazzy", 2021],
    ["Giving Me", "Jazzy", 2023],
    ["Green Green Grass", "George Ezra", 2022],
    ["Anyone for You (Tiger Lily)", "George Ezra", 2022],
    ["Dance All Over Me", "George Ezra", 2022],
    ["Gold Rush Kid", "George Ezra", 2022],
    ["I Went Hunting", "George Ezra", 2022],
    ["Afraid to Feel", "LF SYSTEM", 2022],
    ["21 Reasons", "Nathan Dawe and Ella Henderson", 2022],
    ["0800 Heaven", "Nathan Dawe, Joel Corry and Ella Henderson", 2023],
    ["Head & Heart", "Joel Corry and MNEK", 2020],
    ["BED", "Joel Corry, RAYE and David Guetta", 2021],
    ["Back on 74", "Jungle", 2023],
    ["Keep Moving", "Jungle", 2021],
    ["Chaise Longue", "Wet Leg", 2021],
    ["Starburster", "Fontaines D.C.", 2024],
    ["Favourite", "Fontaines D.C.", 2024],
    ["Candle Flame", "Jungle and Erick the Architect", 2023],
    ["I've Been in Love", "Jungle and Channel Tres", 2023],
    ["All of the Time", "Jungle", 2021],
    ["Wet Dream", "Wet Leg", 2021],
    ["Angelica", "Wet Leg", 2022],
    ["Ur Mum", "Wet Leg", 2022],
    ["Too Late Now", "Wet Leg", 2021],
    ["Being in Love", "Wet Leg", 2022],
    ["Here's the Thing", "Fontaines D.C.", 2024],
    ["I Love You", "Fontaines D.C.", 2022],
    ["Jackie Down the Line", "Fontaines D.C.", 2022],
    ["Roman Holiday", "Fontaines D.C.", 2022],
    ["The Adults Are Talking", "The Strokes", 2020],
    ["Bad Decisions", "The Strokes", 2020],
    ["Brooklyn Bridge to Chorus", "The Strokes", 2020]
];

// These are tags for individual acts. Collaborations combine the
// relevant members' tags and add a collaboration tag automatically.
const actTags = {
    "Adele": ["UK music", "soul", "pop", "singer-songwriters"],
    "Lewis Capaldi": ["Scottish music", "UK music", "pop ballads", "singer-songwriters"],
    "Sam Smith": ["UK music", "soul pop", "pop", "singer-songwriters"],
    "Kim Petras": ["German music", "dance-pop", "pop"],
    "RAYE": ["UK music", "R&B", "soul", "dance-pop", "singer-songwriters"],
    "070 Shake": ["American music", "alternative R&B", "hip hop"],
    "Kenya Grace": ["UK music", "drum and bass", "dance-pop", "female vocalists"],
    "Dave": ["UK music", "British hip hop", "UK rap", "rappers"],
    "Central Cee": ["UK music", "UK drill", "British hip hop", "rappers"],
    "Stormzy": ["UK music", "grime", "British hip hop", "rappers"],
    "Burna Boy": ["Nigerian music", "Afrobeats", "African music", "singer-songwriters"],
    "PinkPantheress": ["UK music", "UK garage", "drum and bass", "electronic pop"],
    "Ice Spice": ["American music", "hip hop", "rappers"],
    "Tyla": ["South African music", "amapiano", "Afropop", "R&B"],
    "Rema": ["Nigerian music", "Afrobeats", "Afropop"],
    "Ed Sheeran": ["UK music", "pop", "singer-songwriters"],
    "Ayra Starr": ["Nigerian music", "Afrobeats", "Afropop", "R&B"],
    "Lost Frequencies": ["Belgian music", "house music", "dance music", "DJs"],
    "Calum Scott": ["UK music", "pop", "singer-songwriters"],
    "Calvin Harris": ["Scottish music", "UK music", "house music", "dance music", "DJs"],
    "Ellie Goulding": ["UK music", "electropop", "dance-pop"],
    "Dua Lipa": ["UK music", "dance-pop", "disco pop"],
    "Young Thug": ["American music", "hip hop", "rappers"],
    "Justin Timberlake": ["American music", "pop", "R&B"],
    "Halsey": ["American music", "electropop", "pop"],
    "Pharrell Williams": ["American music", "R&B", "hip hop", "record producers"],
    "Rag'n'Bone Man": ["UK music", "soul", "blues pop"],
    "Clementine Douglas": ["UK music", "dance-pop", "singer-songwriters"],
    "Chase & Status": ["UK music", "drum and bass", "electronic music", "DJ duos"],
    "Becky Hill": ["UK music", "dance-pop", "house music", "female vocalists"],
    "Switch Disco": ["UK music", "dance music", "DJ duos"],
    "Ella Henderson": ["UK music", "pop", "dance-pop", "The X Factor"],
    "cassö": ["UK music", "dance music", "record producers", "DJs"],
    "D-Block Europe": ["UK music", "British hip hop", "rap duos"],
    "James Hype": ["UK music", "house music", "DJs"],
    "Miggy Dela Rosa": ["UK music", "dance-pop", "singers"],
    "Belters Only": ["Irish music", "house music", "DJ duos"],
    "Jazzy": ["Irish music", "house music", "dance-pop", "female vocalists"],
    "George Ezra": ["UK music", "folk pop", "pop", "singer-songwriters"],
    "LF SYSTEM": ["Scottish music", "UK music", "house music", "DJ duos"],
    "Nathan Dawe": ["UK music", "house music", "dance music", "DJs"],
    "Joel Corry": ["UK music", "house music", "dance music", "DJs"],
    "MNEK": ["UK music", "pop", "dance-pop", "singer-songwriters"],
    "David Guetta": ["French music", "house music", "electronic dance music", "DJs"],
    "Jungle": ["UK music", "London music", "neo soul", "funk", "electronic soul", "bands"],
    "Wet Leg": ["UK music", "indie rock", "post-punk", "rock bands"],
    "Fontaines D.C.": ["Irish music", "Dublin music", "post-punk", "alternative rock", "rock bands"],
    "Erick the Architect": ["American music", "hip hop", "rappers"],
    "Channel Tres": ["American music", "house music", "hip hop", "singers"],
    "The Strokes": ["American music", "New York music", "indie rock", "garage rock revival", "rock bands"]
};

// These are album/EP memberships, not claims about first single dates.
// For collaborations, the artist credit must match the entry exactly.
const albumTracks = [
    ["Adele", "30", ["Easy On Me", "Oh My God", "I Drink Wine", "To Be Loved", "Hold On", "Can I Get It", "Love Is a Game", "Strangers by Nature"]],
    ["Lewis Capaldi", "Broken by Desire to Be Heavenly Sent", ["Forget Me", "Wish You the Best", "Pointless", "How I'm Feeling Now"]],
    ["Sam Smith and Kim Petras", "Gloria", ["Unholy"]],
    ["Sam Smith", "Gloria", ["I'm Not Here to Make Friends", "Love Me More"]],
    ["Sam Smith", "Love Goes", ["Diamonds", "To Die For"]],
    ["RAYE and 070 Shake", "My 21st Century Blues", ["Escapism."]],
    ["RAYE", "My 21st Century Blues", ["Worth It.", "Oscar Winning Tears.", "Black Mascara.", "The Thrill Is Gone.", "Hard Out Here."]],
    ["Dave", "We're All Alone in This Together", ["Verdansk"]],
    ["Dave and Stormzy", "We're All Alone in This Together", ["Clash"]],
    ["Dave and Burna Boy", "Psychodrama", ["Location"]],
    ["PinkPantheress", "to hell with it", ["Pain", "Just for me", "Break It Off"]],
    ["PinkPantheress and Ice Spice", "Heaven knows", ["Boy's a liar Pt. 2"]],
    ["PinkPantheress and Central Cee", "Heaven knows", ["Nice to meet you"]],
    ["PinkPantheress", "Fancy That", ["Illegal"]],
    ["Tyla", "TYLA", ["Water", "Truth or Dare", "Jump"]],
    ["Tyla", "TYLA+", ["Push 2 Start"]],
    ["Rema", "Rave & Roses", ["Calm Down", "Soundgasm"]],
    ["Rema", "Rave & Roses Ultra", ["Charm"]],
    ["Burna Boy", "Love, Damini", ["Last Last"]],
    ["Burna Boy and Ed Sheeran", "Love, Damini", ["For My Hand"]],
    ["Burna Boy", "I Told Them...", ["City Boys", "Sittin' on Top of the World"]],
    ["Ayra Starr", "19 & Dangerous", ["Bloody Samaritan", "Rush"]],
    ["Ayra Starr", "The Year I Turned 21", ["Commas"]],
    ["Calvin Harris, Dua Lipa and Young Thug", "Funk Wav Bounces Vol. 2", ["Potion"]],
    ["Calvin Harris, Justin Timberlake, Halsey and Pharrell Williams", "Funk Wav Bounces Vol. 2", ["Stay with Me"]],
    ["Chase & Status", "2 RUFF, Vol. 1", ["Baddadan"]],
    ["Chase & Status and Becky Hill", "2 RUFF, Vol. 1", ["Disconnect"]],
    ["George Ezra", "Gold Rush Kid", ["Green Green Grass", "Anyone for You (Tiger Lily)", "Dance All Over Me", "Gold Rush Kid", "I Went Hunting"]],
    ["Jungle", "Volcano", ["Back on 74"]],
    ["Jungle and Erick the Architect", "Volcano", ["Candle Flame"]],
    ["Jungle and Channel Tres", "Volcano", ["I've Been in Love"]],
    ["Jungle", "Loving in Stereo", ["Keep Moving", "All of the Time"]],
    ["Wet Leg", "Wet Leg", ["Chaise Longue", "Wet Dream", "Angelica", "Ur Mum", "Too Late Now", "Being in Love"]],
    ["Fontaines D.C.", "Romance", ["Starburster", "Favourite", "Here's the Thing"]],
    ["Fontaines D.C.", "Skinty Fia", ["I Love You", "Jackie Down the Line", "Roman Holiday"]],
    ["The Strokes", "The New Abnormal", ["The Adults Are Talking", "Bad Decisions", "Brooklyn Bridge to Chorus"]]
];

const recordingTags = {
    "Unholy": ["Kim Petras", "Sam Smith", "2022 singles", "UK number ones"],
    "Escapism.": ["070 Shake", "UK number ones", "2022 singles"],
    "Genesis.": ["2024 singles", "jazz", "gospel influences"],
    "Location": ["2019 singles", "Psychodrama", "Dave", "Burna Boy"],
    "Boy's a liar Pt. 2": ["Ice Spice", "remixes", "alternate versions"],
    "Nice to meet you": ["Central Cee", "featured artists"],
    "Illegal": ["2025 singles", "Underworld", "music sampling", "Fancy That"],
    "Jump": ["Gunna", "Skillibeng", "featured artists", "amapiano"],
    "Calm Down": ["Selena Gomez", "alternate versions", "remixes", "2022 singles"],
    "Baby (Is It a Crime)": ["Sade", "music sampling", "2025 singles"],
    "For My Hand": ["Ed Sheeran", "collaborations"],
    "Sittin' on Top of the World": ["21 Savage", "alternate versions", "remixes"],
    "Baddadan": ["Bou", "IRAH", "Flowdan", "Trigga", "Takura", "drum and bass", "featured artists"],
    "Backbone": ["Stormzy", "grime", "drum and bass"],
    "Disconnect": ["Becky Hill", "drum and bass"],
    "Prada": ["cassö", "RAYE", "D-Block Europe", "2023 singles"],
    "Ferrari": ["James Hype", "Miggy Dela Rosa", "2022 singles"],
    "React": ["Switch Disco", "Ella Henderson", "music sampling"],
    "Head & Heart": ["Joel Corry", "MNEK", "UK number ones"],
    "Candle Flame": ["Erick the Architect", "featured artists", "2023 singles"],
    "I've Been in Love": ["Channel Tres", "featured artists", "2023 singles"],
    "Starburster": ["2024 singles", "Romance"],
    "Favourite": ["2024 singles", "Romance"]
};

// Collaboration wording keeps each existing correct answer. Baddadan
// is jointly credited to Chase & Status and Bou; the question asks
// specifically for the duo to avoid excluding the other credited act.
const questionCorrections = {
    "Unholy": "Which two singers recorded 'Unholy'?",
    "Escapism.": "Which two performers released 'Escapism.'?",
    "Sprinter": "Which two British rappers recorded 'Sprinter'?",
    "Clash": "Which two British rappers recorded 'Clash'?",
    "Location": "Which British rapper and Nigerian singer recorded 'Location'?",
    "Boy's a liar Pt. 2": "Which two artists recorded 'Boy's a liar Pt. 2'?",
    "Nice to meet you": "Which two artists recorded 'Nice to meet you'?",
    "Jump": "Which South African singer recorded 'Jump' featuring Gunna and Skillibeng?",
    "Calm Down": "Which Nigerian singer originally released 'Calm Down', later remixed with Selena Gomez?",
    "For My Hand": "Which Nigerian singer and British singer recorded 'For My Hand'?",
    "Where Are You Now": "Which Belgian DJ and British singer recorded 'Where Are You Now'?",
    "Miracle": "Which Scottish DJ and English singer collaborated on 'Miracle'?",
    "Desire": "Which Scottish DJ and English singer collaborated on 'Desire'?",
    "Potion": "Which three artists collaborated on 'Potion'?",
    "Stay with Me": "Which four artists recorded 'Stay with Me'?",
    "Lovers in a Past Life": "Which Scottish DJ and English singer recorded 'Lovers in a Past Life'?",
    "Blessings": "Which Scottish DJ and British singer recorded 'Blessings'?",
    "Baddadan": "Which British drum and bass duo worked with Bou on 'Baddadan'?",
    "Backbone": "Which British drum and bass duo and rapper recorded 'Backbone'?",
    "Disconnect": "Which British drum and bass duo and singer recorded 'Disconnect'?",
    "React": "Which DJ duo and British singer recorded 'React'?",
    "Prada": "Which three acts released 'Prada'?",
    "Ferrari": "Which DJ and singer released 'Ferrari'?",
    "Make Me Feel Good": "Which Irish DJ duo and singer recorded 'Make Me Feel Good'?",
    "21 Reasons": "Which British DJ and singer recorded '21 Reasons'?",
    "0800 Heaven": "Which three artists collaborated on '0800 Heaven'?",
    "Head & Heart": "Which DJ and British singer recorded 'Head & Heart'?",
    "BED": "Which three artists collaborated on 'BED'?",
    "Candle Flame": "Which British group and American rapper recorded 'Candle Flame'?",
    "I've Been in Love": "Which British group and American artist recorded 'I've Been in Love'?"
};

// 'And' and comma-separated artist names represent multiple credited
// performers. Ampersands within band names (Chase & Status) do not.
function creditedPerformers(credit) {
    return credit.split(/,\s*|\s+and\s+/).map(name => name.trim());
}

function overlapsArtist(a, b) {
    return creditedPerformers(a).some(name => creditedPerformers(b).includes(name));
}

function makeTags(title, artist, year) {
    const parts = creditedPerformers(artist);
    const album = albumTracks.find(([act, , titles]) => act === artist && titles.includes(title));
    const tags = [
        year < 2020 ? "2010s" : "2020s", String(year), "songs", "recordings", "artist identification",
        ...parts, ...(parts.length > 1 ? ["collaborations", "joint artist credits"] : []),
        ...parts.flatMap(part => actTags[part] || []),
        ...(album ? [album[1]] : []),
        ...(recordingTags[title] || [])
    ];
    return [...new Set(tags)];
}

// Preserve original answer generation. The only changes are to
// alternatives that include one of the actual credited performers.
const artistPool = [...new Set(songs.map(entry => entry[1]))];

function makeAnswers(correctArtist, index) {
    const otherArtists = artistPool.filter(name => name !== correctArtist);
    const wrongAnswers = [];
    const used = new Set([correctArtist]);
    let position = (index * 7) % otherArtists.length;

    while (wrongAnswers.length < 3) {
        const candidate = otherArtists[position];
        if (!used.has(candidate)) {
            wrongAnswers.push(candidate);
            used.add(candidate);
        }
        position = (position + 5) % otherArtists.length;
    }

    for (let i = 0; i < wrongAnswers.length; i++) {
        if (overlapsArtist(correctArtist, wrongAnswers[i])) {
            const first = (index * 7 + i * 11 + 17) % artistPool.length;
            let replacement = null;
            for (let offset = 0; offset < artistPool.length; offset++) {
                const candidate = artistPool[(first + offset) % artistPool.length];
                if (!overlapsArtist(correctArtist, candidate) &&
                    !wrongAnswers.includes(candidate)) {
                    replacement = candidate;
                    break;
                }
            }
            if (!replacement) throw new Error("No unambiguous answer option");
            wrongAnswers[i] = replacement;
        }
    }

    const answers = [correctArtist, ...wrongAnswers];
    const shift = index % 4;
    return [...answers.slice(shift), ...answers.slice(0, shift)];
}

const quizPack134 = songs.map(([song, artist, year], index) => ({
    id: "music_" + String(11467 + index),
    category: "Music",
    question: questionCorrections[song] || "Which artist recorded '" + song + "'?",
    answers: makeAnswers(artist, index),
    correctAnswer: artist,
    difficulty: index % 3 === 0 ? "Easy" : "Medium",
    tags: makeTags(song, artist, year),
    dailyEligible: true
}));

module.exports = quizPack134;
