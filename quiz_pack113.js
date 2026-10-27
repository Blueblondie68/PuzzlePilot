
 // quiz_pack113.js
// PuzzlePilot Big Quiz - Pack 113
// Music - mainly 2000s; Staind's Mudshovel recorded in 1999
// 100 questions; IDs music_9367 - music_9466
// Complete artist, genre, geography, decade and specialist tags
// One unverifiable recording replaced with a verified band-history question
// Question-mark punctuation corrected for titles ending in '?'

const songs = [
    ["Redefine", "Soil"],
    ["Driven Under", "Seether"],

    ["The Truth", "Limp Bizkit"],
    ["Eat You Alive", "Limp Bizkit"],
    ["Behind Blue Eyes", "Limp Bizkit"],
    ["Boiler", "Limp Bizkit"],

    ["Points of Authority", "Linkin Park"],
    ["Papercut", "Linkin Park"],
    ["Crawling", "Linkin Park"],
    ["Somewhere I Belong", "Linkin Park"],
    ["Faint", "Linkin Park"],
    ["Breaking the Habit", "Linkin Park"],
    ["Bleed It Out", "Linkin Park"],
    ["Shadow of the Day", "Linkin Park"],
    ["Given Up", "Linkin Park"],
    ["New Divide", "Linkin Park"],

    ["Alive", "P.O.D."],

    ["Hands", "The Raconteurs"],
    ["Level", "The Raconteurs"],
    ["Old Enough", "The Raconteurs"],

    ["Hang Me Up to Dry", "Cold War Kids"],
    ["Hospital Beds", "Cold War Kids"],
    ["Something Is Not Right with Me", "Cold War Kids"],

    ["Build a Bridge", "Limp Bizkit"],
    ["Almost Over", "Limp Bizkit"],
    ["The One", "Limp Bizkit"],

    ["Figure.09", "Linkin Park"],
    ["From the Inside", "Linkin Park"],
    ["Lying from You", "Linkin Park"],
    ["Leave Out All the Rest", "Linkin Park"],
    ["No More Sorrow", "Linkin Park"],

    ["Control", "Puddle of Mudd"],
    ["Drift and Die", "Puddle of Mudd"],
    ["Psycho", "Puddle of Mudd"],
    ["Famous", "Puddle of Mudd"],

    ["Awake", "Godsmack"],
    ["Greed", "Godsmack"],
    ["Re-Align", "Godsmack"],
    ["Shine Down", "Godsmack"],
    ["Whiskey Hangover", "Godsmack"],

    ["Remedy", "Cold"],
    ["Stupid Girl", "Cold"],
    ["Just Got Wicked", "Cold"],
    ["Gone Away", "Cold"],

    ["Polyamorous", "Breaking Benjamin"],
    ["Skin", "Breaking Benjamin"],
    ["Medicate", "Breaking Benjamin"],
    ["Firefly", "Breaking Benjamin"],
    ["Dance with the Devil", "Breaking Benjamin"],

    ["Gasoline", "Seether"],
    ["Truth", "Seether"],
    ["The Gift", "Seether"],
    ["Careless Whisper", "Seether"],

    ["Never Again", "Nickelback"],
    ["Figured You Out", "Nickelback"],
    ["Because of You", "Nickelback"],
    ["Side of a Bullet", "Nickelback"],
    ["Something in Your Mouth", "Nickelback"],
    ["Burn It to the Ground", "Nickelback"],

    ["Mudshovel", "Staind"],
    ["Epiphany", "Staind"],
    ["How About You", "Staind"],
    ["Zoe Jane", "Staind"],
    ["Falling", "Staind"],
    ["Believe", "Staind"],

    ["Out of Control", "Hoobastank"],
    ["Disappear", "Hoobastank"],
    ["If I Were You", "Hoobastank"],

    ["Innocent", "Fuel"],
    ["Won't Back Down", "Fuel"],
    ["Million Miles", "Fuel"],

    ["Wasting My Time", "Default"],
    ["Deny", "Default"],
    ["Live a Lie", "Default"],
    ["Count on Me", "Default"],

    ["Sick Cycle Carousel", "Lifehouse"],
    ["Spin", "Lifehouse"],
    ["Take Me Away", "Lifehouse"],
    ["Blind", "Lifehouse"],
    ["First Time", "Lifehouse"],

    ["Are You Still Having Fun?", "Eagle-Eye Cherry"],

    ["Where Is the Love?", "Black Eyed Peas"],
    ["Don't Phunk with My Heart", "Black Eyed Peas"],
    ["My Humps", "Black Eyed Peas"],
    ["Pump It", "Black Eyed Peas"],
    ["Boom Boom Pow", "Black Eyed Peas"],
    ["Meet Me Halfway", "Black Eyed Peas"],

    ["Mr Rock & Roll", "Amy Macdonald"],
    ["L.A.", "Amy Macdonald"],
    ["Run", "Amy Macdonald"],
    ["Poison Prince", "Amy Macdonald"],

    ["Under the Weather", "KT Tunstall"],
    ["Another Place to Fall", "KT Tunstall"],

    ["Merry Happy", "Kate Nash"],
    ["Come Over", "Estelle"],

    // The previously listed recording could not be verified.
    // Replace it with a confirmed question about the band's founders.
    {
        question: 'Who co-founded Eagles of Death Metal with Jesse Hughes?',
        answers: ['Josh Homme', 'Jack White', 'Dave Grohl', 'Dan Auerbach'],
        correctAnswer: 'Josh Homme',
        tags: ['2000s', 'band members', 'band founders', 'Eagles of Death Metal',
            'Josh Homme', 'Jesse Hughes', 'Queens of the Stone Age',
            'US music', 'garage rock', 'hard rock', 'rock bands']
    },
    ["I Want You So Hard (Boy's Bad News)", "Eagles of Death Metal"],
    ["I Gotta Feelin (Just Nineteen)", "Eagles of Death Metal"],
    ["Wannabe in L.A.", "Eagles of Death Metal"],
    ["Get Free", "The Vines"]
];

// These tags are applied to EVERY corresponding song question.
// The artist's country and predominant styles are used for specialist quizzes.
const artistTags = {
    'Soil': ['Soil', 'US music', 'alternative metal', 'nu metal', 'hard rock'],
    'Seether': ['Seether', 'South African music', 'post-grunge', 'alternative metal', 'hard rock'],
    'Limp Bizkit': ['Limp Bizkit', 'US music', 'nu metal', 'rap rock', 'alternative metal'],
    'Linkin Park': ['Linkin Park', 'US music', 'nu metal', 'alternative rock', 'rap rock'],
    'P.O.D.': ['P.O.D.', 'US music', 'nu metal', 'rap rock', 'alternative metal'],
    'The Raconteurs': ['The Raconteurs', 'US music', 'garage rock', 'blues rock', 'alternative rock'],
    'Cold War Kids': ['Cold War Kids', 'US music', 'indie rock', 'alternative rock', 'blues rock'],
    'Puddle of Mudd': ['Puddle of Mudd', 'US music', 'post-grunge', 'alternative rock', 'hard rock'],
    'Godsmack': ['Godsmack', 'US music', 'hard rock', 'alternative metal', 'nu metal'],
    'Cold': ['Cold', 'US music', 'post-grunge', 'alternative metal', 'hard rock'],
    'Breaking Benjamin': ['Breaking Benjamin', 'US music', 'post-grunge', 'alternative metal', 'hard rock'],
    'Nickelback': ['Nickelback', 'Canadian music', 'post-grunge', 'hard rock', 'alternative rock'],
    'Staind': ['Staind', 'US music', 'post-grunge', 'alternative metal', 'nu metal'],
    'Hoobastank': ['Hoobastank', 'US music', 'alternative rock', 'post-grunge', 'pop rock'],
    'Fuel': ['Fuel', 'US music', 'post-grunge', 'alternative rock', 'hard rock'],
    'Default': ['Default', 'Canadian music', 'post-grunge', 'alternative rock', 'hard rock'],
    'Lifehouse': ['Lifehouse', 'US music', 'pop rock', 'alternative rock', 'post-grunge'],
    'Eagle-Eye Cherry': ['Eagle-Eye Cherry', 'Swedish music', 'pop rock', 'singer-songwriters', 'alternative rock'],
    'Black Eyed Peas': ['Black Eyed Peas', 'US music', 'hip hop', 'pop', 'dance-pop'],
    'Amy Macdonald': ['Amy Macdonald', 'Scottish music', 'UK music', 'folk rock', 'singer-songwriters'],
    'KT Tunstall': ['KT Tunstall', 'Scottish music', 'UK music', 'folk rock', 'pop rock'],
    'Kate Nash': ['Kate Nash', 'English music', 'UK music', 'indie pop', 'singer-songwriters'],
    'Estelle': ['Estelle', 'English music', 'UK music', 'R&B', 'hip hop'],
    'Eagles of Death Metal': ['Eagles of Death Metal', 'US music', 'garage rock', 'hard rock', 'blues rock'],
    'The Vines': ['The Vines', 'Australian music', 'garage rock revival', 'alternative rock', 'indie rock']
};

function makeTags(title, artist) {
    // The single Mudshovel and the Dysfunction album are from 1999.
    // The earlier 1996 recording was titled Mudshuvel.
    const is1990s = artist === 'Staind' && title === 'Mudshovel';

    const tags = [
        is1990s ? '1990s' : '2000s',
        'songs',
        'artist identification',
        'recordings',
        ...artistTags[artist]
    ];

    if (is1990s) {
        tags.push('1999 singles', 'Dysfunction album', 'Mudshuvel 1996 version');
    }

    if (artist === 'Limp Bizkit' && title === 'Behind Blue Eyes') {
        tags.push('cover versions', 'The Who', '1970s originals',
            'Results May Vary album', 'Gothika soundtrack');
    }
    if (artist === 'Linkin Park') {
        if (['Points of Authority', 'Papercut', 'Crawling'].includes(title)) {
            tags.push('Hybrid Theory album');
        }
        if (['Somewhere I Belong', 'Faint', 'Breaking the Habit',
            'Figure.09', 'From the Inside', 'Lying from You'].includes(title)) {
            tags.push('Meteora album');
        }
        if (['Bleed It Out', 'Shadow of the Day', 'Given Up',
            'Leave Out All the Rest', 'No More Sorrow'].includes(title)) {
            tags.push('Minutes to Midnight album');
        }
        if (title === 'New Divide') {
            tags.push('film soundtracks', 'Transformers: Revenge of the Fallen');
        }
    }
    if (artist === 'The Raconteurs') {
        tags.push('Jack White', 'Brendan Benson', 'supergroups');
    }
    if (artist === 'Nickelback' && title === 'Side of a Bullet') {
        tags.push('Dimebag Darrell', 'Pantera', 'tribute songs',
            'guitar solos', 'collaborations');
    }
    if (artist === 'Seether' && title === 'Careless Whisper') {
        tags.push('cover versions', 'George Michael', 'Wham!', '1980s originals');
    }
    if (artist === 'Black Eyed Peas' && title === 'Where Is the Love?') {
        tags.push('Justin Timberlake', 'guest vocalists', 'collaborations',
            'Elephunk album');
    }
    if (artist === 'Black Eyed Peas' && title === 'Pump It') {
        tags.push('samples', 'Dick Dale', 'Misirlou', 'surf rock');
    }
    if (artist === 'Black Eyed Peas' &&
        ['Boom Boom Pow', 'Meet Me Halfway'].includes(title)) {
        tags.push('The E.N.D. album');
    }
    if (artist === 'Estelle' && title === 'Come Over') {
        tags.push('Shine album', 'Sean Paul remix', 'collaborations');
    }
    if (artist === 'Eagles of Death Metal') {
        tags.push('Jesse Hughes', 'Josh Homme', 'Queens of the Stone Age connections');
        if (title === 'Wannabe in L.A.') tags.push('Heart On album');
        if (["I Want You So Hard (Boy's Bad News)",
            'I Gotta Feelin (Just Nineteen)'].includes(title)) {
            tags.push('Death by Sexy album');
        }
    }
    if (artist === 'Amy Macdonald') {
        tags.push('This Is the Life album');
    }
    if (artist === 'Kate Nash' && title === 'Merry Happy') {
        tags.push('Made of Bricks album');
    }
    if (artist === 'P.O.D.' && title === 'Alive') {
        tags.push('Satellite album');
    }
    return [...new Set(tags)];
}

// Keep the original order of artists for the existing answer choices.
// The band-history replacement is deliberately excluded from this list.
const artists = [
    ...new Set(songs.filter(Array.isArray).map(song => song[1]))
];

function makeAnswers(correctAnswer, index) {
    const otherArtists = artists.filter(artist => artist !== correctAnswer);

    // This pack has 25 artists, giving 24 wrong-answer possibilities.
    // All three original offsets (0, +11 and +23) are distinct.
    const answers = [
        correctAnswer,
        otherArtists[index % otherArtists.length],
        otherArtists[(index + 11) % otherArtists.length],
        otherArtists[(index + 23) % otherArtists.length]
    ];

    const shift = index % answers.length;
    return [
        ...answers.slice(shift),
        ...answers.slice(0, shift)
    ];
}

const questions = songs.map((song, index) => {
    const isSpecialQuestion = !Array.isArray(song);
    const title = isSpecialQuestion ? null : song[0];
    const artist = isSpecialQuestion ? null : song[1];
    const number = 9367 + index;

    return {
        id: `music_${String(number).padStart(4, '0')}`,
        category: 'Music',
        question: isSpecialQuestion
            ? song.question
            : `Which artist recorded ${title}${title.endsWith('?') ? '' : '?'}`,
        answers: isSpecialQuestion ? song.answers : makeAnswers(artist, index),
        correctAnswer: isSpecialQuestion ? song.correctAnswer : artist,
        difficulty: index % 3 === 0 ? 'Easy' : 'Medium',
        tags: isSpecialQuestion ? song.tags : makeTags(title, artist),
        dailyEligible: true
    };
});

module.exports = questions;

