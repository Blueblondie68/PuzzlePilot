
//
// quiz_pack133.js
// PuzzlePilot Music Quiz — Pack 133
// 2020s Music
// 100 questions
//

const songs = [
    ["Physical", "Dua Lipa"],
    ["Levitating", "Dua Lipa"],
    ["Break My Heart", "Dua Lipa"],
    ["Hallucinate", "Dua Lipa"],
    ["We're Good", "Dua Lipa"],
    ["Houdini", "Dua Lipa"],
    ["Training Season", "Dua Lipa"],
    ["Illusion", "Dua Lipa"],
    ["Dance the Night", "Dua Lipa"],

    ["Bad Habits", "Ed Sheeran"],
    ["Shivers", "Ed Sheeran"],
    ["Overpass Graffiti", "Ed Sheeran"],
    ["Eyes Closed", "Ed Sheeran"],
    ["Celestial", "Ed Sheeran"],
    ["Curtains", "Ed Sheeran"],
    ["Boat", "Ed Sheeran"],
    ["American Town", "Ed Sheeran"],
    ["2step", "Ed Sheeran"],
    ["Visiting Hours", "Ed Sheeran"],

    ["As It Was", "Harry Styles"],
    ["Late Night Talking", "Harry Styles"],
    ["Music for a Sushi Restaurant", "Harry Styles"],
    ["Satellite", "Harry Styles"],
    ["Matilda", "Harry Styles"],
    ["Daylight", "Harry Styles"],

    ["Flowers", "Miley Cyrus"],
    ["River", "Miley Cyrus"],
    ["Jaded", "Miley Cyrus"],
    ["Midnight Sky", "Miley Cyrus"],
    ["Angels Like You", "Miley Cyrus"],
    ["Used to Be Young", "Miley Cyrus"],
    ["End of the World", "Miley Cyrus"],
    ["Easy Lover", "Miley Cyrus"],
    ["Prisoner", "Miley Cyrus and Dua Lipa"],

    ["drivers license", "Olivia Rodrigo"],
    ["good 4 u", "Olivia Rodrigo"],
    ["deja vu", "Olivia Rodrigo"],
    ["traitor", "Olivia Rodrigo"],
    ["vampire", "Olivia Rodrigo"],
    ["bad idea right?", "Olivia Rodrigo"],
    ["get him back!", "Olivia Rodrigo"],
    ["all-american bitch", "Olivia Rodrigo"],
    ["obsessed", "Olivia Rodrigo"],
    ["so american", "Olivia Rodrigo"],

    ["Espresso", "Sabrina Carpenter"],
    ["Please Please Please", "Sabrina Carpenter"],
    ["Taste", "Sabrina Carpenter"],
    ["Feather", "Sabrina Carpenter"],
    ["Nonsense", "Sabrina Carpenter"],
    ["Bed Chem", "Sabrina Carpenter"],
    ["Juno", "Sabrina Carpenter"],
    ["Manchild", "Sabrina Carpenter"],
    ["Busy Woman", "Sabrina Carpenter"],
    ["Tears", "Sabrina Carpenter"],

    ["Beautiful Things", "Benson Boone"],
    ["Slow It Down", "Benson Boone"],
    ["In the Stars", "Benson Boone"],
    ["Ghost Town", "Benson Boone"],
    ["Cry", "Benson Boone"],
    ["Mystical Magical", "Benson Boone"],
    ["Sorry I'm Here for Someone Else", "Benson Boone"],

    ["Ordinary", "Alex Warren"],
    ["Carry You Home", "Alex Warren"],
    ["Burning Down", "Alex Warren"],

    ["Messy", "Lola Young"],
    ["Conceited", "Lola Young"],
    ["One Thing", "Lola Young"],

    ["Pink Pony Club", "Chappell Roan"],
    ["Good Luck, Babe!", "Chappell Roan"],
    ["HOT TO GO!", "Chappell Roan"],
    ["Red Wine Supernova", "Chappell Roan"],
    ["Casual", "Chappell Roan"],
    ["The Giver", "Chappell Roan"],
    ["The Subway", "Chappell Roan"],

    ["Stargazing", "Myles Smith"],
    ["Nice to Meet You", "Myles Smith"],

    ["People Watching", "Sam Fender"],
    ["Seventeen Going Under", "Sam Fender"],
    ["Spit of You", "Sam Fender"],
    ["Howdon Aldi Death Queue", "Sam Fender"],
    ["Rein Me In", "Sam Fender and Olivia Dean"],

    ["Man I Need", "Olivia Dean"],
    ["Nice to Each Other", "Olivia Dean"],

    ["Save Your Tears", "The Weeknd"],
    ["Take My Breath", "The Weeknd"],
    ["Sacrifice", "The Weeknd"],
    ["Out of Time", "The Weeknd"],
    ["Less Than Zero", "The Weeknd"],
    ["Dancing in the Flames", "The Weeknd"],
    ["Cry for Me", "The Weeknd"],
    ["Timeless", "The Weeknd and Playboi Carti"],

    ["Cold Heart", "Elton John and Dua Lipa"],

    ["BIRDS OF A FEATHER", "Billie Eilish"],
    ["What Was I Made For?", "Billie Eilish"],
    ["Happier Than Ever", "Billie Eilish"],

    ["A Bar Song (Tipsy)", "Shaboozey"],
    ["Too Sweet", "Hozier"],
    ["Lose Control", "Teddy Swims"],
    ["Stick Season", "Noah Kahan"],
    ["Anti-Hero", "Taylor Swift"]
];

// Build four answer choices for every question.
// The correct artist is always included.
// The other three choices come from different artists.

const artistPool = [...new Set(
    songs.map(entry => entry[1])
)];

const quizPack133 = songs.map((entry, index) => {
    const [song, artist] = entry;

    const otherArtists = artistPool.filter(
        name => name !== artist
    );

    const start = (index * 7) % otherArtists.length;

    const wrongAnswers = [
        otherArtists[start],
        otherArtists[(start + 5) % otherArtists.length],
        otherArtists[(start + 11) % otherArtists.length]
    ];

    const answers = [artist, ...wrongAnswers];

    // Rotate answer positions between questions.
    const shift = index % 4;

    const rotatedAnswers = [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];

    return {
        id: "music_" + String(11367 + index),
        category: "Music",
        question: "Which artist recorded '" + song + "'?",
        answers: rotatedAnswers,
        correctAnswer: artist
    };
});

module.exports = quizPack133;
