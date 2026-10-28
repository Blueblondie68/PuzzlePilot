 // quiz_pack129.js
// PuzzlePilot Big Quiz — Music Pack 129
// Mostly 2010s pop, soul and R&B
// 100 questions; IDs music_10967 - music_11066
// Expanded artist, country, genre, collaboration and specialist tags

const songs = [

    // LITTLE MIX
    ["DNA", "Little Mix"],
    ["Change Your Life", "Little Mix"],
    ["How Ya Doin'?", "Little Mix"],
    ["Little Me", "Little Mix"],
    ["Word Up!", "Little Mix"],
    ["Love Me Like You", "Little Mix"],
    ["Secret Love Song", "Little Mix"],
    ["No More Sad Songs", "Little Mix"],

    // DUA LIPA
    ["New Love", "Dua Lipa"],
    ["Last Dance", "Dua Lipa"],
    ["Lost in Your Light", "Dua Lipa"],
    ["Swan Song", "Dua Lipa"],
    ["Homesick", "Dua Lipa"],

    // JESS GLYNNE
    ["Right Here", "Jess Glynne"],
    ["Ain't Got Far to Go", "Jess Glynne"],
    ["No One", "Jess Glynne"],

    // ANNE-MARIE
    ["Heavy", "Anne-Marie"],
    ["Then", "Anne-Marie"],
    ["FRIENDS", "Anne-Marie"],

    // ZARA LARSSON
    ["Uncover", "Zara Larsson"],
    ["So Good", "Zara Larsson"],
    ["Only You", "Zara Larsson"],
    ["All the Time", "Zara Larsson"],
    ["Invisible", "Zara Larsson"],

    // MABEL
    ["Know Me Better", "Mabel"],
    ["My Boy My Town", "Mabel"],
    ["Thinking of You", "Mabel"],
    ["Bedroom", "Mabel"],
    ["Fine Line", "Mabel"],
    ["One Shot", "Mabel"],
    ["Bad Behaviour", "Mabel"],

    // ADELE
    ["Rumour Has It", "Adele"],
    ["Turning Tables", "Adele"],
    ["One and Only", "Adele"],
    ["Lovesong", "Adele"],
    ["He Won't Go", "Adele"],
    ["I'll Be Waiting", "Adele"],
    ["River Lea", "Adele"],
    ["Sweetest Devotion", "Adele"],

    // SAM SMITH
    ["Leave Your Lover", "Sam Smith"],
    ["Pray", "Sam Smith"],
    ["One Last Song", "Sam Smith"],
    ["Baby, You Make Me Crazy", "Sam Smith"],
    ["How Do You Sleep?", "Sam Smith"],
    ["Fire on Fire", "Sam Smith"],

    // JAMES ARTHUR
    ["Naked", "James Arthur"],
    ["You Deserve Better", "James Arthur"],
    ["Empty Space", "James Arthur"],
    ["Falling Like the Stars", "James Arthur"],
    ["Quite Miss Home", "James Arthur"],
    ["Treehouse", "James Arthur"],

    // LEONA LEWIS
    ["Collide", "Leona Lewis"],
    ["Trouble", "Leona Lewis"],
    ["Lovebird", "Leona Lewis"],
    ["Fireflies", "Leona Lewis"],
    ["One More Sleep", "Leona Lewis"],
    ["Thunder", "Leona Lewis"],
    ["Fire Under My Feet", "Leona Lewis"],

    // OLLY MURS
    ["Oh My Goodness", "Olly Murs"],
    ["Right Place Right Time", "Olly Murs"],
    ["Hand on Heart", "Olly Murs"],
    ["Seasons", "Olly Murs"],
    ["Grow Up", "Olly Murs"],
    ["Moves", "Olly Murs"],
    ["Excuses", "Olly Murs"],

    // JOHN NEWMAN
    ["Losing Sleep", "John Newman"],
    ["Out of My Head", "John Newman"],
    ["Tiring Game", "John Newman"],
    ["Feelings", "John Newman"],
    ["Without You", "John Newman"],

    // RITA ORA
    ["Shine Ya Light", "Rita Ora"],
    ["Radioactive", "Rita Ora"],
    ["I Will Never Let You Down", "Rita Ora"],
    ["Poison", "Rita Ora"],
    ["Body on Me", "Rita Ora"],
    ["Only Want You", "Rita Ora"],

    // PIXIE LOTT
    ["What Do You Take Me For?", "Pixie Lott"],
    ["Lay Me Down", "Pixie Lott"],

    // ALEXANDRA BURKE
    ["Broken Heels", "Alexandra Burke"],
    ["All Night Long", "Alexandra Burke"],
    ["The Silence", "Alexandra Burke"],
    ["Daylight Robbery", "Alexandra Burke"],
    ["Tonight", "Alexandra Burke"],
    ["Heartbreak on Hold", "Alexandra Burke"],

    // REBECCA FERGUSON
    ["Nothing's Real but Love", "Rebecca Ferguson"],
    ["Too Good to Lose", "Rebecca Ferguson"],
    ["Glitter & Gold", "Rebecca Ferguson"],
    ["Backtrack", "Rebecca Ferguson"],
    ["I Hope", "Rebecca Ferguson"],
    ["Freedom", "Rebecca Ferguson"],

    // JORJA SMITH
    ["Blue Lights", "Jorja Smith"],
    ["Where Did I Go?", "Jorja Smith"],
    ["Teenage Fantasy", "Jorja Smith"],
    ["On My Mind", "Jorja Smith"],
    ["Let Me Down", "Jorja Smith"],
    ["February 3rd", "Jorja Smith"],
    ["The One", "Jorja Smith"],
    ["Don't Watch Me Cry", "Jorja Smith"],
    ["Be Honest", "Jorja Smith"],
    ["Lost & Found", "Jorja Smith"]

];

// Shared artist tags expand into each question at load time.
// Preserve the existing answer options, difficulty and Daily Quiz flags.
const artistTags = {
    "Little Mix": ["Little Mix", "UK music", "pop", "R&B", "girl groups", "The X Factor", "talent show winners"],
    "Dua Lipa": ["Dua Lipa", "UK music", "dance-pop", "electropop", "female vocalists"],
    "Jess Glynne": ["Jess Glynne", "UK music", "dance-pop", "soul pop", "female vocalists"],
    "Anne-Marie": ["Anne-Marie", "UK music", "dance-pop", "pop", "female vocalists"],
    "Zara Larsson": ["Zara Larsson", "Swedish music", "dance-pop", "pop", "female vocalists"],
    "Mabel": ["Mabel", "UK music", "Norwegian-born artists", "dance-pop", "R&B", "female vocalists"],
    "Adele": ["Adele", "UK music", "soul", "pop", "singer-songwriters", "female vocalists"],
    "Sam Smith": ["Sam Smith", "UK music", "soul pop", "pop", "singer-songwriters"],
    "James Arthur": ["James Arthur", "UK music", "pop rock", "soul pop", "singer-songwriters", "The X Factor", "talent show winners"],
    "Leona Lewis": ["Leona Lewis", "UK music", "pop", "R&B", "soul", "The X Factor", "talent show winners"],
    "Olly Murs": ["Olly Murs", "UK music", "pop", "pop rock", "The X Factor", "talent show contestants"],
    "John Newman": ["John Newman", "UK music", "soul pop", "dance-pop", "singer-songwriters"],
    "Rita Ora": ["Rita Ora", "UK music", "Kosovo-born artists", "dance-pop", "pop", "R&B"],
    "Pixie Lott": ["Pixie Lott", "UK music", "dance-pop", "pop", "R&B", "female vocalists"],
    "Alexandra Burke": ["Alexandra Burke", "UK music", "pop", "R&B", "dance-pop", "The X Factor", "talent show winners"],
    "Rebecca Ferguson": ["Rebecca Ferguson", "UK music", "Liverpool music", "soul", "pop", "The X Factor", "talent show contestants"],
    "Jorja Smith": ["Jorja Smith", "UK music", "contemporary R&B", "soul", "UK garage", "singer-songwriters"]
};

// Recording-specific tags support collaborative and specialist quizzes.
// Featured or remix artists are identified without miscrediting solo versions.
const recordingTags = {
    "Little Mix|How Ya Doin'?": ["Missy Elliott", "featured artists", "collaborations", "2013 singles"],
    "Little Mix|Word Up!": ["Cameo", "cover versions", "original artists", "Sport Relief", "charity singles"],
    "Little Mix|Secret Love Song": ["Jason Derulo", "featured artists", "collaborations", "Get Weird"],
    "Little Mix|No More Sad Songs": ["Machine Gun Kelly", "featured artists", "collaborations", "Glory Days"],
    "Dua Lipa|Lost in Your Light": ["Miguel", "featured artists", "collaborations"],
    "Dua Lipa|Swan Song": ["Alita: Battle Angel", "film soundtracks", "2019 singles"],
    "Anne-Marie|FRIENDS": ["Marshmello", "collaborations", "electronic dance music", "2018 singles"],
    "Zara Larsson|So Good": ["Ty Dolla $ign", "featured artists", "collaborations"],
    "Zara Larsson|Invisible": ["Klaus", "film soundtracks", "2019 singles"],
    "Mabel|Fine Line": ["Not3s", "featured artists", "collaborations"],
    "Adele|Lovesong": ["The Cure", "cover versions", "original artists", "21"],
    "Adele|Rumour Has It": ["21", "2011 albums"],
    "Adele|Turning Tables": ["21"],
    "Adele|One and Only": ["21"],
    "Adele|He Won't Go": ["21"],
    "Adele|I'll Be Waiting": ["21"],
    "Adele|River Lea": ["25", "2015 albums"],
    "Adele|Sweetest Devotion": ["25"],
    "Sam Smith|Pray": ["Logic", "single remixes", "collaborations"],
    "Sam Smith|Fire on Fire": ["Watership Down", "television soundtracks", "2018 songs"],
    "James Arthur|Treehouse": ["Ty Dolla $ign", "Shotty Horroh", "featured artists", "collaborations", "2019 singles"],
    "Leona Lewis|Collide": ["Avicii", "collaborations", "dance-pop", "2011 singles"],
    "Leona Lewis|Trouble": ["Childish Gambino", "featured artists", "collaborations"],
    "Leona Lewis|One More Sleep": ["Christmas music", "Christmas singles", "2013 singles"],
    "Olly Murs|Moves": ["Snoop Dogg", "featured artists", "collaborations", "Johnny English Strikes Again", "film soundtracks"],
    "John Newman|Tiring Game": ["Charlie Wilson", "featured artists", "collaborations"],
    "John Newman|Without You": ["Nina Nesbitt", "collaborations", "duets", "2019 singles"],
    "Rita Ora|Body on Me": ["Chris Brown", "featured artists", "collaborations"],
    "Rita Ora|Only Want You": ["6LACK", "single remixes", "alternate versions", "Phoenix"],
    "Pixie Lott|What Do You Take Me For?": ["Pusha T", "featured artists", "collaborations"],
    "Alexandra Burke|All Night Long": ["Pitbull", "single versions", "collaborations"],
    "Alexandra Burke|Tonight": ["DJ Smash", "featured artists", "collaborations", "Heartbreak on Hold"],
    "Alexandra Burke|Heartbreak on Hold": ["Heartbreak on Hold", "2012 albums"],
    "Jorja Smith|On My Mind": ["Preditah", "collaborations", "UK garage", "2017 singles"],
    "Jorja Smith|Let Me Down": ["Stormzy", "featured artists", "collaborations", "2018 singles"],
    "Jorja Smith|Be Honest": ["Burna Boy", "featured artists", "collaborations", "2019 singles"],
    "Jorja Smith|Lost & Found": ["Lost & Found", "2018 albums"]
};

// Keep the correct answer the same while clarifying joint credits and covers.
const questionCorrections = {
    2: "Which British girl group released the song How Ya Doin'? featuring Missy Elliott?",
    4: "Which British girl group covered Cameo's 'Word Up!'?",
    6: "Which British girl group recorded 'Secret Love Song' featuring Jason Derulo?",
    7: "Which British girl group released 'No More Sad Songs' featuring Machine Gun Kelly?",
    10: "Which British singer recorded 'Lost in Your Light' with Miguel?",
    18: "Which British singer collaborated with Marshmello on 'FRIENDS'?",
    20: "Which Swedish singer recorded 'So Good' featuring Ty Dolla $ign?",
    28: "Which British singer released 'Fine Line' featuring Not3s?",
    34: "Which British singer covered The Cure's 'Lovesong' on the album 21?",
    50: "Which British singer released 'Treehouse' with Ty Dolla $ign and Shotty Horroh?",
    51: "Which British singer recorded 'Collide' with Avicii?",
    52: "Which British singer released 'Trouble' featuring Childish Gambino?",
    63: "Which British singer released 'Moves' featuring Snoop Dogg?",
    67: "Which British singer recorded 'Tiring Game' with Charlie Wilson?",
    69: "Which British singer recorded 'Without You' with Nina Nesbitt?",
    74: "Which British singer recorded 'Body on Me' with Chris Brown?",
    75: "Which British singer released 'Only Want You', later remixed with 6LACK?",
    76: "Which British singer released 'What Do You Take Me For?' featuring Pusha T?",
    79: "Which British singer recorded 'All Night Long', later released with Pitbull?",
    82: "Which British singer recorded 'Tonight' featuring DJ Smash?",
    93: "Which British singer released 'On My Mind' with Preditah?",
    94: "Which British singer recorded 'Let Me Down' featuring Stormzy?",
    98: "Which British singer released 'Be Honest' featuring Burna Boy?"
};

function makeTags(title, artist) {
    return [...new Set([
        "2010s",
        "songs",
        "artist identification",
        "recordings",
        ...artistTags[artist],
        ...(recordingTags[`${artist}|${title}`] || [])
    ])];
}

// Original answer-generation logic is retained.
const artists = [
    ...new Set(songs.map(song => song[1]))
];

function makeAnswers(correctArtist, index) {
    const others = artists.filter(artist => artist !== correctArtist);
    const wrong = [
        others[index % others.length],
        others[(index + 7) % others.length],
        others[(index + 13) % others.length]
    ];
    const answers = [correctArtist, ...wrong];
    const position = index % 4;
    answers.splice(0, 1);
    answers.splice(position, 0, correctArtist);
    return answers;
}

const questions = songs.map((song, index) => {
    const title = song[0];
    const artist = song[1];
    return {
        id: "music_" + (10967 + index),
        category: "Music",
        question: questionCorrections[index] ||
            "Which artist recorded '" + title + "'?",
        answers: makeAnswers(artist, index),
        correctAnswer: artist,
        difficulty: index % 3 === 0 ? "Easy" : "Medium",
        tags: makeTags(title, artist),
        dailyEligible: true
    };
});

module.exports = questions;
