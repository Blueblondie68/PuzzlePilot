 // quiz_pack133.js
// PuzzlePilot Big Quiz - Music Pack 133
// 2020s songs and artists; music_11367 to music_11466
// Restored difficulty, daily eligibility and specialist tags.
// Original artist answers retained; misleading duet options corrected.

const songs = [
    ["Physical", "Dua Lipa", 2020],
    ["Levitating", "Dua Lipa", 2020],
    ["Break My Heart", "Dua Lipa", 2020],
    ["Hallucinate", "Dua Lipa", 2020],
    ["We're Good", "Dua Lipa", 2021],
    ["Houdini", "Dua Lipa", 2023],
    ["Training Season", "Dua Lipa", 2024],
    ["Illusion", "Dua Lipa", 2024],
    ["Dance the Night", "Dua Lipa", 2023],

    ["Bad Habits", "Ed Sheeran", 2021],
    ["Shivers", "Ed Sheeran", 2021],
    ["Overpass Graffiti", "Ed Sheeran", 2021],
    ["Eyes Closed", "Ed Sheeran", 2023],
    ["Celestial", "Ed Sheeran", 2022],
    ["Curtains", "Ed Sheeran", 2023],
    ["Boat", "Ed Sheeran", 2023],
    ["American Town", "Ed Sheeran", 2023],
    ["2step", "Ed Sheeran", 2021],
    ["Visiting Hours", "Ed Sheeran", 2021],

    ["As It Was", "Harry Styles", 2022],
    ["Late Night Talking", "Harry Styles", 2022],
    ["Music for a Sushi Restaurant", "Harry Styles", 2022],
    ["Satellite", "Harry Styles", 2022],
    ["Matilda", "Harry Styles", 2022],
    ["Daylight", "Harry Styles", 2022],

    ["Flowers", "Miley Cyrus", 2023],
    ["River", "Miley Cyrus", 2023],
    ["Jaded", "Miley Cyrus", 2023],
    ["Midnight Sky", "Miley Cyrus", 2020],
    ["Angels Like You", "Miley Cyrus", 2020],
    ["Used to Be Young", "Miley Cyrus", 2023],
    ["End of the World", "Miley Cyrus", 2025],
    ["Easy Lover", "Miley Cyrus", 2025],
    ["Prisoner", "Miley Cyrus and Dua Lipa", 2020],

    ["drivers license", "Olivia Rodrigo", 2021],
    ["good 4 u", "Olivia Rodrigo", 2021],
    ["deja vu", "Olivia Rodrigo", 2021],
    ["traitor", "Olivia Rodrigo", 2021],
    ["vampire", "Olivia Rodrigo", 2023],
    ["bad idea right?", "Olivia Rodrigo", 2023],
    ["get him back!", "Olivia Rodrigo", 2023],
    ["all-american bitch", "Olivia Rodrigo", 2023],
    ["obsessed", "Olivia Rodrigo", 2024],
    ["so american", "Olivia Rodrigo", 2024],

    ["Espresso", "Sabrina Carpenter", 2024],
    ["Please Please Please", "Sabrina Carpenter", 2024],
    ["Taste", "Sabrina Carpenter", 2024],
    ["Feather", "Sabrina Carpenter", 2023],
    ["Nonsense", "Sabrina Carpenter", 2022],
    ["Bed Chem", "Sabrina Carpenter", 2024],
    ["Juno", "Sabrina Carpenter", 2024],
    ["Manchild", "Sabrina Carpenter", 2025],
    ["Busy Woman", "Sabrina Carpenter", 2025],
    ["Tears", "Sabrina Carpenter", 2025],

    ["Beautiful Things", "Benson Boone", 2024],
    ["Slow It Down", "Benson Boone", 2024],
    ["In the Stars", "Benson Boone", 2022],
    ["Ghost Town", "Benson Boone", 2021],
    ["Cry", "Benson Boone", 2024],
    ["Mystical Magical", "Benson Boone", 2025],
    ["Sorry I'm Here for Someone Else", "Benson Boone", 2025],

    ["Ordinary", "Alex Warren", 2025],
    ["Carry You Home", "Alex Warren", 2024],
    ["Burning Down", "Alex Warren", 2024],

    ["Messy", "Lola Young", 2024],
    ["Conceited", "Lola Young", 2023],
    ["One Thing", "Lola Young", 2025],

    ["Pink Pony Club", "Chappell Roan", 2020],
    ["Good Luck, Babe!", "Chappell Roan", 2024],
    ["HOT TO GO!", "Chappell Roan", 2023],
    ["Red Wine Supernova", "Chappell Roan", 2023],
    ["Casual", "Chappell Roan", 2022],
    ["The Giver", "Chappell Roan", 2025],
    ["The Subway", "Chappell Roan", 2025],

    ["Stargazing", "Myles Smith", 2024],
    ["Nice to Meet You", "Myles Smith", 2024],

    ["People Watching", "Sam Fender", 2024],
    ["Seventeen Going Under", "Sam Fender", 2021],
    ["Spit of You", "Sam Fender", 2021],
    ["Howdon Aldi Death Queue", "Sam Fender", 2021],
    ["Rein Me In", "Sam Fender and Olivia Dean", 2025],

    ["Man I Need", "Olivia Dean", 2025],
    ["Nice to Each Other", "Olivia Dean", 2025],

    ["Save Your Tears", "The Weeknd", 2020],
    ["Take My Breath", "The Weeknd", 2021],
    ["Sacrifice", "The Weeknd", 2022],
    ["Out of Time", "The Weeknd", 2022],
    ["Less Than Zero", "The Weeknd", 2022],
    ["Dancing in the Flames", "The Weeknd", 2024],
    ["Cry for Me", "The Weeknd", 2025],
    ["Timeless", "The Weeknd and Playboi Carti", 2024],

    ["Cold Heart", "Elton John and Dua Lipa", 2021],

    ["BIRDS OF A FEATHER", "Billie Eilish", 2024],
    ["What Was I Made For?", "Billie Eilish", 2023],
    ["Happier Than Ever", "Billie Eilish", 2021],

    ["A Bar Song (Tipsy)", "Shaboozey", 2024],
    ["Too Sweet", "Hozier", 2024],
    ["Lose Control", "Teddy Swims", 2023],
    ["Stick Season", "Noah Kahan", 2022],
    ["Anti-Hero", "Taylor Swift", 2022]
];

// Every entry includes its original release year (third column).
// The year is for the recording, not necessarily its album or a later remix.
const artistTags = {
    "Dua Lipa": ["Dua Lipa", "UK music", "dance-pop", "disco pop", "pop", "female vocalists"],
    "Ed Sheeran": ["Ed Sheeran", "UK music", "pop", "singer-songwriters", "male vocalists"],
    "Harry Styles": ["Harry Styles", "UK music", "pop rock", "pop", "One Direction", "male vocalists"],
    "Miley Cyrus": ["Miley Cyrus", "American music", "pop rock", "pop", "female vocalists"],
    "Miley Cyrus and Dua Lipa": ["Miley Cyrus", "Dua Lipa", "American music", "UK music", "pop rock", "duets", "collaborations"],
    "Olivia Rodrigo": ["Olivia Rodrigo", "American music", "pop rock", "alternative pop", "singer-songwriters"],
    "Sabrina Carpenter": ["Sabrina Carpenter", "American music", "pop", "dance-pop", "female vocalists"],
    "Benson Boone": ["Benson Boone", "American music", "pop rock", "pop", "singer-songwriters"],
    "Alex Warren": ["Alex Warren", "American music", "pop", "singer-songwriters"],
    "Lola Young": ["Lola Young", "UK music", "London music", "soul pop", "alternative pop", "singer-songwriters"],
    "Chappell Roan": ["Chappell Roan", "American music", "synthpop", "dance-pop", "pop", "singer-songwriters"],
    "Myles Smith": ["Myles Smith", "UK music", "folk pop", "pop", "singer-songwriters"],
    "Sam Fender": ["Sam Fender", "UK music", "Newcastle music", "indie rock", "heartland rock", "singer-songwriters"],
    "Sam Fender and Olivia Dean": ["Sam Fender", "Olivia Dean", "UK music", "indie rock", "soul", "duets", "collaborations"],
    "Olivia Dean": ["Olivia Dean", "UK music", "soul", "soul pop", "singer-songwriters"],
    "The Weeknd": ["The Weeknd", "Canadian music", "R&B", "synthpop", "pop", "male vocalists"],
    "The Weeknd and Playboi Carti": ["The Weeknd", "Playboi Carti", "Canadian music", "American music", "R&B", "hip hop", "collaborations"],
    "Elton John and Dua Lipa": ["Elton John", "Dua Lipa", "UK music", "dance-pop", "duets", "collaborations", "remixes"],
    "Billie Eilish": ["Billie Eilish", "American music", "alternative pop", "pop", "female vocalists"],
    "Shaboozey": ["Shaboozey", "American music", "country pop", "country music", "male vocalists"],
    "Hozier": ["Hozier", "Irish music", "soul", "blues rock", "singer-songwriters"],
    "Teddy Swims": ["Teddy Swims", "American music", "soul pop", "R&B", "male vocalists"],
    "Noah Kahan": ["Noah Kahan", "American music", "indie folk", "folk pop", "singer-songwriters"],
    "Taylor Swift": ["Taylor Swift", "American music", "pop", "synthpop", "singer-songwriters"]
};

// Group recording titles by album. This also supports specialist quizzes.
// Song release years remain separate from album release years.
const albumTracks = [
    ["Dua Lipa", "Future Nostalgia", ["Physical", "Levitating", "Break My Heart", "Hallucinate"]],
    ["Dua Lipa", "Future Nostalgia: The Moonlight Edition", ["We're Good"]],
    ["Dua Lipa", "Radical Optimism", ["Houdini", "Training Season", "Illusion"]],
    ["Ed Sheeran", "= (Equals)", ["Bad Habits", "Shivers", "Overpass Graffiti", "2step", "Visiting Hours"]],
    ["Ed Sheeran", "- (Subtract)", ["Eyes Closed", "Curtains", "Boat"]],
    ["Ed Sheeran", "Autumn Variations", ["American Town"]],
    ["Harry Styles", "Harry's House", ["As It Was", "Late Night Talking", "Music for a Sushi Restaurant", "Satellite", "Matilda", "Daylight"]],
    ["Miley Cyrus", "Endless Summer Vacation", ["Flowers", "River", "Jaded"]],
    ["Miley Cyrus", "Plastic Hearts", ["Midnight Sky", "Angels Like You"]],
    ["Miley Cyrus and Dua Lipa", "Plastic Hearts", ["Prisoner"]],
    ["Miley Cyrus", "Something Beautiful", ["End of the World", "Easy Lover"]],
    ["Olivia Rodrigo", "SOUR", ["drivers license", "good 4 u", "deja vu", "traitor"]],
    ["Olivia Rodrigo", "GUTS", ["vampire", "bad idea right?", "get him back!", "all-american bitch"]],
    ["Olivia Rodrigo", "GUTS (spilled)", ["obsessed", "so american"]],
    ["Sabrina Carpenter", "Short n' Sweet", ["Espresso", "Please Please Please", "Taste", "Bed Chem", "Juno"]],
    ["Sabrina Carpenter", "emails i can't send", ["Nonsense"]],
    ["Sabrina Carpenter", "emails i can't send fwd:", ["Feather"]],
    ["Sabrina Carpenter", "Short n' Sweet (Deluxe)", ["Busy Woman"]],
    ["Sabrina Carpenter", "Man's Best Friend", ["Manchild", "Tears"]],
    ["Benson Boone", "Fireworks & Rollerblades", ["Beautiful Things", "Slow It Down", "In the Stars", "Cry"]],
    ["Benson Boone", "Walk Me Home...", ["Ghost Town"]],
    ["Benson Boone", "American Heart", ["Mystical Magical", "Sorry I'm Here for Someone Else"]],
    ["Alex Warren", "You'll Be Alright, Kid", ["Ordinary", "Carry You Home", "Burning Down"]],
    ["Lola Young", "This Wasn't Meant for You Anyway", ["Messy"]],
    ["Lola Young", "My Mind Wanders and Sometimes Leaves Completely", ["Conceited"]],
    ["Lola Young", "I'm Only F**king Myself", ["One Thing"]],
    ["Chappell Roan", "The Rise and Fall of a Midwest Princess", ["Pink Pony Club", "HOT TO GO!", "Red Wine Supernova", "Casual"]],
    ["Sam Fender", "People Watching", ["People Watching"]],
    ["Sam Fender", "Seventeen Going Under", ["Seventeen Going Under", "Spit of You"]],
    ["Olivia Dean", "The Art of Loving", ["Man I Need", "Nice to Each Other"]],
    ["The Weeknd", "After Hours", ["Save Your Tears"]],
    ["The Weeknd", "Dawn FM", ["Take My Breath", "Sacrifice", "Out of Time", "Less Than Zero"]],
    ["The Weeknd", "Hurry Up Tomorrow", ["Cry for Me"]],
    ["The Weeknd and Playboi Carti", "Hurry Up Tomorrow", ["Timeless"]],
    ["Billie Eilish", "HIT ME HARD AND SOFT", ["BIRDS OF A FEATHER"]],
    ["Billie Eilish", "Happier Than Ever", ["Happier Than Ever"]],
    ["Shaboozey", "Where I've Been, Isn't Where I'm Going", ["A Bar Song (Tipsy)"]],
    ["Hozier", "Unheard EP", ["Too Sweet"]],
    ["Teddy Swims", "I've Tried Everything but Therapy (Part 1)", ["Lose Control"]],
    ["Noah Kahan", "Stick Season", ["Stick Season"]],
    ["Taylor Swift", "Midnights", ["Anti-Hero"]]
];

const recordingTags = {
    "Dua Lipa|Dance the Night": ["Barbie", "film soundtracks", "2023 singles"],
    "Ed Sheeran|Celestial": ["Pokémon", "video game music", "2022 singles"],
    "Ed Sheeran|2step": ["Lil Baby", "alternate versions", "remixes"],
    "Miley Cyrus|Used to Be Young": ["2023 singles"],
    "Miley Cyrus and Dua Lipa|Prisoner": ["Miley Cyrus", "Dua Lipa", "duets", "2020 singles"],
    "Olivia Rodrigo|so american": ["deluxe albums", "2024 songs"],
    "Sabrina Carpenter|Busy Woman": ["deluxe albums", "2025 releases"],
    "Sabrina Carpenter|Tears": ["2025 singles"],
    "Chappell Roan|Pink Pony Club": ["2020 original releases", "2025 chart success"],
    "Chappell Roan|Good Luck, Babe!": ["2024 singles"],
    "Chappell Roan|The Giver": ["2025 singles", "country pop"],
    "Chappell Roan|The Subway": ["2025 singles"],
    "Sam Fender|Howdon Aldi Death Queue": ["2021 B-sides", "Seventeen Going Under single"],
    "Sam Fender and Olivia Dean|Rein Me In": ["2025 duet version", "2025 singles", "Sam Fender", "Olivia Dean", "People Watching", "duets"],
    "The Weeknd|Dancing in the Flames": ["2024 singles"],
    "The Weeknd and Playboi Carti|Timeless": ["2024 singles", "The Weeknd", "Playboi Carti", "collaborations"],
    "Elton John and Dua Lipa|Cold Heart": ["PNAU", "PNAU remix", "2021 singles", "Elton John", "Dua Lipa", "duets", "remixes"],
    "Billie Eilish|What Was I Made For?": ["Barbie", "film soundtracks", "2023 singles"]
};

// Four collaboration questions should ask for both credited artists,
// rather than implying that just one participant is the complete answer.
const questionCorrections = {
    33: "Which two singers recorded the duet 'Prisoner'?",
    80: "Which two British singers released the duet version of 'Rein Me In'?",
    90: "Which two artists collaborated on 'Timeless'?",
    91: "Which two singers recorded 'Cold Heart' in the PNAU remix?"
};

function makeTags(title, artist, year) {
    const album = albumTracks.find(
        ([name, , titles]) => name === artist && titles.includes(title)
    );
    return [...new Set([
        "2020s", String(year), "songs", "artist identification",
        "recordings", ...artistTags[artist],
        ...(album ? [album[1]] : []),
        ...(recordingTags[`${artist}|${title}`] || [])
    ])];
}

const artistPool = [...new Set(songs.map(entry => entry[1]))];

// A duet must never appear alongside one of its own members as a
// misleading alternative. Keep every original choice unless this occurs.
function creditedPerformers(name) {
    return name.split(" and ");
}

function overlapsArtist(a, b) {
    return creditedPerformers(a).some(
        performer => creditedPerformers(b).includes(performer)
    );
}

function makeAnswers(correctArtist, index) {
    const otherArtists = artistPool.filter(name => name !== correctArtist);
    const start = (index * 7) % otherArtists.length;
    const wrongAnswers = [
        otherArtists[start],
        otherArtists[(start + 5) % otherArtists.length],
        otherArtists[(start + 11) % otherArtists.length]
    ];

    // Replace only an alternative that credits part of the correct act.
    for (let i = 0; i < wrongAnswers.length; i++) {
        if (overlapsArtist(correctArtist, wrongAnswers[i])) {
            const replacement = artistPool.find(name =>
                !overlapsArtist(correctArtist, name) &&
                !wrongAnswers.includes(name)
            );
            if (!replacement) throw new Error("No valid alternative answer");
            wrongAnswers[i] = replacement;
        }
    }

    const answers = [correctArtist, ...wrongAnswers];
    const shift = index % 4;
    return [...answers.slice(shift), ...answers.slice(0, shift)];
}

const quizPack133 = songs.map(([song, artist, year], index) => ({
    id: "music_" + String(11367 + index),
    category: "Music",
    question: questionCorrections[index] ||
        "Which artist recorded '" + song + "'?",
    answers: makeAnswers(artist, index),
    correctAnswer: artist,
    difficulty: index % 3 === 0 ? "Easy" : "Medium",
    tags: makeTags(song, artist, year),
    dailyEligible: true
}));

module.exports = quizPack133;
