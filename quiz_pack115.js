 // quiz_pack115.js
// PuzzlePilot Big Quiz - Pack 115
// Music - mainly 2000s, with 1981 and 1998 originals
// 100 questions; IDs music_9567 - music_9666
// Complete decade, artist, region, genre and specialist tags
// All original recordings, answers and difficulty levels preserved

const songs = [
    ["Girl All the Bad Guys Want", "Bowling for Soup"],
    ["Emily", "Bowling for Soup"],
    ["Almost", "Bowling for Soup"],
    ["High School Never Ends", "Bowling for Soup"],
    ["When We Die", "Bowling for Soup"],
    ["Flavor of the Weak", "American Hi-Fi"],
    ["Another Perfect Day", "American Hi-Fi"],
    ["The Art of Losing", "American Hi-Fi"],
    ["Why Don't You & I", "Santana"],
    ["Into the Night", "Santana"],
    ["Just Feel Better", "Santana"],
    ["Wherever You Are", "Hoobastank"],
    ["Inside of You", "Hoobastank"],
    ["My Turn", "Hoobastank"],
    ["You're Going Down", "Sick Puppies"],
    ["Odd One", "Sick Puppies"],
    ["All the Same", "Sick Puppies"],
    ["Everything Changes", "Staind"],
    ["King of All Excuses", "Staind"],
    ["All I Want", "Staind"],
    ["So Happy", "Theory of a Deadman"],
    ["Bad Girlfriend", "Theory of a Deadman"],
    ["Not Meant to Be", "Theory of a Deadman"],
    ["Santa Monica", "Theory of a Deadman"],
    ["First Date", "Blink-182"],
    ["Stay Together for the Kids", "Blink-182"],
    ["Feeling This", "Blink-182"],
    ["I Miss You", "Blink-182"],
    ["Down", "Blink-182"],
    ["Always", "Blink-182"],
    ["Niki FM", "Hawthorne Heights"],
    ["Screaming Infidelities", "Dashboard Confessional"],
    ["The War", "Angels & Airwaves"],
    ["Thank You for the Venom", "My Chemical Romance"],
    ["Dead!", "My Chemical Romance"],
    ["What's It Feel Like to Be a Ghost?", "Taking Back Sunday"],

    ["1985", "Bowling for Soup"],
    ["Punk Rock 101", "Bowling for Soup"],
    ["Ohio (Come Back to Texas)", "Bowling for Soup"],
    ["Running from Your Dad", "Bowling for Soup"],
    ["No Hablo Ingles", "Bowling for Soup"],
    ["The Bitch Song", "Bowling for Soup"],
    ["Wall of Sound", "American Hi-Fi"],
    ["The Breakup Song", "American Hi-Fi"],
    ["Geeks Get the Girls", "American Hi-Fi"],
    ["Hell Yeah!", "American Hi-Fi"],
    ["Winning", "Santana"],
    ["I'm Feeling You", "Santana"],
    ["Nothing at All", "Santana"],
    ["The Game of Love", "Santana"],
    ["Crawling in the Dark", "Hoobastank"],
    ["My World", "Sick Puppies"],
    ["What Are You Looking For", "Sick Puppies"],
    ["Pitiful", "Sick Puppies"],
    ["No Surprise", "Theory of a Deadman"],
    ["Hate My Life", "Theory of a Deadman"],
    ["By the Way", "Theory of a Deadman"],
    ["Rollercoaster", "Blink-182"],
    ["Reckless Abandon", "Blink-182"],
    ["Online Songs", "Blink-182"],
    ["Obvious", "Blink-182"],
    ["Stockholm Syndrome", "Blink-182"],
    ["Not Now", "Blink-182"],
    ["Breathing", "Yellowcard"],
    ["Believe", "Yellowcard"],
    ["Empty Apartment", "Yellowcard"],
    ["Saints and Sailors", "Dashboard Confessional"],
    ["The Best Deceptions", "Dashboard Confessional"],
    ["The Sharp Hint of New Tears", "Dashboard Confessional"],
    ["The Places You Have Come to Fear the Most", "Dashboard Confessional"],
    ["Box Full of Sharp Objects", "The Used"],
    ["Maybe Memories", "The Used"],
    ["Listening", "The Used"],
    ["Timberwolves at New Jersey", "Taking Back Sunday"],
    ["Bike Scene", "Taking Back Sunday"],
    ["Set Phasers to Stun", "Taking Back Sunday"],
    ["Bonus Mosh Pt. II", "Taking Back Sunday"],
    ["Silver Bullet", "Hawthorne Heights"],
    ["Giving Up", "Silverstein"],
    ["Call It Karma", "Silverstein"],
    ["Translating the Name", "Saosin"],
    ["Bury Your Head", "Saosin"],
    ["It's Far Better to Learn", "Saosin"],
    ["For the Workforce, Drowning", "Thursday"],
    ["At This Velocity", "Thursday"],
    ["The Boy Who Blocked His Own Shot", "Brand New"],
    ["Degausser", "Brand New"],
    ["The Gift", "Angels & Airwaves"],
    ["It Hurts", "Angels & Airwaves"],
    ["Call to Arms", "Angels & Airwaves"],
    ["Attention", "The Academy Is..."],
    ["Classifieds", "The Academy Is..."],
    ["Conspiracy", "Paramore"],
    ["Hallelujah", "Paramore"],
    ["Fences", "Paramore"],
    ["Turn It Off", "Paramore"],
    ["Cemetery Drive", "My Chemical Romance"],
    ["Give 'Em Hell, Kid", "My Chemical Romance"],
    ["The Jetset Life Is Gonna Kill You", "My Chemical Romance"],
    ["House of Wolves", "My Chemical Romance"]
];

// Shared artist tags are expanded into EVERY generated song question.
// Country/region, musical styles and performers support specialist quizzes.
const artistTags = {
    'Bowling for Soup': ['Bowling for Soup', 'US music', 'pop punk', 'power pop', 'comedy rock'],
    'American Hi-Fi': ['American Hi-Fi', 'US music', 'power pop', 'pop punk', 'alternative rock'],
    'Santana': ['Santana', 'US music', 'Latin rock', 'rock guitarists', 'rock bands'],
    'Hoobastank': ['Hoobastank', 'US music', 'alternative rock', 'post-grunge', 'hard rock'],
    'Sick Puppies': ['Sick Puppies', 'Australian music', 'post-grunge', 'alternative metal', 'hard rock'],
    'Staind': ['Staind', 'US music', 'post-grunge', 'alternative metal', 'hard rock'],
    'Theory of a Deadman': ['Theory of a Deadman', 'Canadian music', 'post-grunge', 'hard rock', 'alternative rock'],
    'Blink-182': ['Blink-182', 'US music', 'pop punk', 'punk rock', 'skate punk'],
    'Hawthorne Heights': ['Hawthorne Heights', 'US music', 'emo', 'post-hardcore', 'screamo'],
    'Dashboard Confessional': ['Dashboard Confessional', 'US music', 'emo', 'acoustic rock', 'alternative rock'],
    'Angels & Airwaves': ['Angels & Airwaves', 'US music', 'alternative rock', 'space rock', 'Tom DeLonge'],
    'My Chemical Romance': ['My Chemical Romance', 'US music', 'emo', 'alternative rock', 'punk rock'],
    'Taking Back Sunday': ['Taking Back Sunday', 'US music', 'emo', 'post-hardcore', 'alternative rock'],
    'Yellowcard': ['Yellowcard', 'US music', 'pop punk', 'alternative rock', 'violin'],
    'The Used': ['The Used', 'US music', 'post-hardcore', 'emo', 'alternative rock'],
    'Silverstein': ['Silverstein', 'Canadian music', 'post-hardcore', 'emo', 'screamo'],
    'Saosin': ['Saosin', 'US music', 'post-hardcore', 'emo', 'alternative rock'],
    'Thursday': ['Thursday', 'US music', 'post-hardcore', 'emo', 'alternative rock'],
    'Brand New': ['Brand New', 'US music', 'emo', 'alternative rock', 'post-hardcore'],
    'The Academy Is...': ['The Academy Is...', 'US music', 'pop punk', 'emo pop', 'alternative rock'],
    'Paramore': ['Paramore', 'US music', 'pop punk', 'alternative rock', 'emo pop']
};

function makeTags(title, artist) {
    // Two recordings predate this largely 2000s pack.
    const is1980s = artist === 'Santana' && title === 'Winning';
    const is1990s = artist === 'Bowling for Soup' && title === 'The Bitch Song';
    const decade = is1980s ? '1980s' : is1990s ? '1990s' : '2000s';
    const tags = [
        decade, 'songs', 'artist identification', 'recordings',
        ...artistTags[artist]
    ];

    if (is1980s) {
        tags.push('1981 recordings', 'Zebop! album', 'cover versions',
            'Russ Ballard', '1970s originals');
    }
    if (is1990s) {
        tags.push('1998 recordings', 'Tell Me When to Whoa!',
            '2000s re-releases', "Let's Do It for Johnny! album");
    }
    if (artist === 'Bowling for Soup') {
        if (title === '1985') {
            tags.push('cover versions', 'SR-71', 'Mitch Allan',
                "A Hangover You Don't Deserve album");
        }
        if (['Almost', 'Ohio (Come Back to Texas)'].includes(title)) {
            tags.push("A Hangover You Don't Deserve album");
        }
        if (['Girl All the Bad Guys Want', 'Emily', 'Punk Rock 101',
            'Running from Your Dad'].includes(title)) {
            tags.push('Drunk Enough to Dance album');
        }
        if (['High School Never Ends', 'When We Die'].includes(title)) {
            tags.push('The Great Burrito Extortion Case album');
        }
        if (title === 'No Hablo Ingles') {
            tags.push("Sorry for Partyin' album");
        }
    }
    if (artist === 'American Hi-Fi') {
        if (['Flavor of the Weak', 'Another Perfect Day', 'Wall of Sound'].includes(title)) {
            tags.push('American Hi-Fi debut album');
        }
        if (['The Art of Losing', 'The Breakup Song'].includes(title)) {
            tags.push('The Art of Losing album');
        }
        if (['Geeks Get the Girls', 'Hell Yeah!'].includes(title)) {
            tags.push('Hearts on Parade album');
        }
    }
    if (artist === 'Santana') {
        if (["Why Don't You & I", 'Nothing at All', 'The Game of Love'].includes(title)) {
            tags.push('Shaman album');
        }
        if (title === "Why Don't You & I") {
            tags.push('Chad Kroeger', 'Alex Band', 'guest vocalists',
                'alternative recordings', 'collaborations');
        }
        if (title === 'Into the Night') {
            tags.push('Chad Kroeger', 'guest vocalists', 'collaborations');
        }
        if (title === 'Just Feel Better') {
            tags.push('Steven Tyler', 'Aerosmith', 'guest vocalists', 'collaborations');
        }
        if (['The Game of Love', "I'm Feeling You"].includes(title)) {
            tags.push('Michelle Branch', 'guest vocalists', 'collaborations');
        }
        if (title === 'Nothing at All') {
            tags.push('Musiq Soulchild', 'guest vocalists', 'collaborations');
        }
    }
    if (artist === 'Blink-182') {
        if (['First Date', 'Stay Together for the Kids', 'Rollercoaster',
            'Reckless Abandon', 'Online Songs'].includes(title)) {
            tags.push('Take Off Your Pants and Jacket album');
        }
        if (['Feeling This', 'I Miss You', 'Down', 'Always', 'Obvious',
            'Stockholm Syndrome'].includes(title)) {
            tags.push('Blink-182 self-titled album');
        }
        if (title === 'Not Now') {
            tags.push('2005 singles', 'Greatest Hits album');
        }
    }
    if (artist === 'Dashboard Confessional') {
        if (['Screaming Infidelities', 'The Sharp Hint of New Tears'].includes(title)) {
            tags.push('The Swiss Army Romance album', 'Chris Carrabba');
        }
        if (['Saints and Sailors', 'The Best Deceptions',
            'The Places You Have Come to Fear the Most'].includes(title)) {
            tags.push('The Places You Have Come to Fear the Most album', 'Chris Carrabba');
        }
    }
    if (artist === 'Yellowcard') tags.push('Ocean Avenue album');
    if (artist === 'My Chemical Romance') {
        if (['Thank You for the Venom', 'Cemetery Drive', "Give 'Em Hell, Kid",
            'The Jetset Life Is Gonna Kill You'].includes(title)) {
            tags.push('Three Cheers for Sweet Revenge album');
        }
        if (['Dead!', 'House of Wolves'].includes(title)) {
            tags.push('The Black Parade album');
        }
    }
    if (artist === 'Angels & Airwaves') {
        tags.push('Tom DeLonge', 'Blink-182 connections');
        if (['The War', 'The Gift', 'It Hurts'].includes(title)) {
            tags.push("We Don't Need to Whisper album");
        }
        if (title === 'Call to Arms') tags.push('I-Empire album');
    }
    if (artist === 'Taking Back Sunday') {
        if (['Timberwolves at New Jersey', 'Bike Scene'].includes(title)) {
            tags.push('Tell All Your Friends album');
        }
        if (['Set Phasers to Stun', 'Bonus Mosh Pt. II'].includes(title)) {
            tags.push('Where You Want to Be album');
        }
        if (title === "What's It Feel Like to Be a Ghost?") {
            tags.push('Louder Now album');
        }
    }
    if (artist === 'Hawthorne Heights') {
        tags.push('The Silence in Black and White album');
    }
    if (artist === 'The Used') {
        if (['Box Full of Sharp Objects', 'Maybe Memories'].includes(title)) {
            tags.push('The Used debut album');
        }
        if (title === 'Listening') tags.push('In Love and Death album');
    }
    if (artist === 'Silverstein') {
        if (title === 'Giving Up') tags.push('When Broken Is Easily Fixed album');
        if (title === 'Call It Karma') tags.push('Discovering the Waterfront album');
    }
    if (artist === 'Brand New') {
        if (title === 'The Boy Who Blocked His Own Shot') {
            tags.push('Deja Entendu album');
        }
        if (title === 'Degausser') {
            tags.push('The Devil and God Are Raging Inside Me album');
        }
    }
    if (artist === 'Thursday') {
        if (title === 'For the Workforce, Drowning') tags.push('War All the Time album');
        if (title === 'At This Velocity') tags.push('A City by the Light Divided album');
    }
    if (artist === 'The Academy Is...') tags.push('Almost Here album');
    if (artist === 'Paramore') {
        if (title === 'Conspiracy') tags.push('All We Know Is Falling album');
        if (['Hallelujah', 'Fences'].includes(title)) tags.push('Riot! album');
        if (title === 'Turn It Off') tags.push('Brand New Eyes album');
    }
    return [...new Set(tags)];
}

// Keep the same answer choices and positions as in the original pack.
const artists = [...new Set(songs.map(song => song[1]))];

function makeAnswers(correctArtist, index) {
    const wrongArtists = artists.filter(artist => artist !== correctArtist);
    const answers = [
        correctArtist,
        wrongArtists[index % wrongArtists.length],
        wrongArtists[(index + 11) % wrongArtists.length],
        wrongArtists[(index + 23) % wrongArtists.length]
    ];
    const rotation = index % answers.length;
    return [...answers.slice(rotation), ...answers.slice(0, rotation)];
}

const questions = songs.map(([title, artist], index) => ({
    id: `music_${9567 + index}`,
    category: 'Music',
    question: `Which artist recorded ${title}${title.endsWith('?') ? '' : '?'}`,
    answers: makeAnswers(artist, index),
    correctAnswer: artist,
    difficulty: index % 3 === 0 ? 'Easy' : 'Medium',
    tags: makeTags(title, artist),
    dailyEligible: true
}));

module.exports = questions;
