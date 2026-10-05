// quiz_pack94.js
// PuzzlePilot Big Quiz - Pack 94
// Music - 2000s
// 100 questions
// IDs: music_7467 - music_7566

const songs = [
    ["Run", "Snow Patrol"],
    ["Chocolate", "Snow Patrol"],
    ["Open Your Eyes", "Snow Patrol"],
    ["You're All I Have", "Snow Patrol"],
    ["Somewhere Else", "Razorlight"],
    ["Before I Fall to Pieces", "Razorlight"],
    ["Wire to Wire", "Razorlight"],
    ["Oh My God", "Kaiser Chiefs"],
    ["Modern Way", "Kaiser Chiefs"],
    ["The Angry Mob", "Kaiser Chiefs"],
    ["Love's Not a Competition (But I'm Winning)", "Kaiser Chiefs"],
    ["Apply Some Pressure", "Maxïmo Park"],
    ["Our Velocity", "Maxïmo Park"],
    ["Books from Boxes", "Maxïmo Park"],
    ["Munich", "Editors"],
    ["Blood", "Editors"],
    ["Smokers Outside the Hospital Doors", "Editors"],
    ["An End Has a Start", "Editors"],
    ["Take Her Back", "The Pigeon Detectives"],
    ["I'm Not Sorry", "The Pigeon Detectives"],
    ["Mouthwash", "Kate Nash"],
    ["Pumpkin Soup", "Kate Nash"],
    ["Put Your Records On", "Corinne Bailey Rae"],
    ["Like a Star", "Corinne Bailey Rae"],
    ["Trouble Sleeping", "Corinne Bailey Rae"],
    ["You Had Me", "Joss Stone"],
    ["Right to Be Wrong", "Joss Stone"],
    ["Leave (Get Out)", "JoJo"],
    ["Too Little Too Late", "JoJo"],
    ["A Thousand Miles", "Vanessa Carlton"],
    ["Everywhere", "Michelle Branch"],
    ["Are You Happy Now?", "Michelle Branch"],
    ["Pieces of Me", "Ashlee Simpson"],
    ["With You", "Jessica Simpson"],
    ["Dilemma", "Nelly feat. Kelly Rowland"],
    ["Hot in Herre", "Nelly"],
    ["Ride wit Me", "Nelly"],
    ["Yeah", "Usher feat. Lil Jon and Ludacris"],
    ["Burn", "Usher"],
    ["Caught Up", "Usher"],
    ["Let Me Love You", "Mario"],
    ["1 Thing", "Amerie"],
    ["Case of the Ex", "Mýa"],
    ["He Wasn't Man Enough", "Toni Braxton"],

    ["Single", "Natasha Bedingfield"],
    ["I Bruise Easily", "Natasha Bedingfield"],
    ["Superstar", "Jamelia"],
    ["Thank You", "Jamelia"],
    ["See It in a Boy's Eyes", "Jamelia"],
    ["Beware of the Dog", "Jamelia"],
    ["Free Me", "Emma Bunton"],
    ["Maybe", "Emma Bunton"],
    ["What Took You So Long?", "Emma Bunton"],
    ["Not Such an Innocent Girl", "Victoria Beckham"],
    ["It's Raining Men", "Geri Halliwell"],
    ["Ride It", "Geri Halliwell"],
    ["Never Leave You (Uh Oooh, Uh Oooh)", "Lumidee"],
    ["Dip It Low", "Christina Milian"],
    ["AM to PM", "Christina Milian"],
    ["Me & U", "Cassie"],
    ["When I See U", "Fantasia"],
    ["No Air", "Jordin Sparks feat. Chris Brown"],
    ["Tattoo", "Jordin Sparks"],
    ["Better in Time", "Leona Lewis"],
    ["Forgive Me", "Leona Lewis"],
    ["Once", "Diana Vickers"],
    ["Fight for This Love", "Cheryl Cole"],
    ["3 Words", "Cheryl Cole feat. will.i.am"],
    ["Hole in the Head", "Sugababes"],
    ["Freak Like Me", "Sugababes"],
    ["Never Gonna Leave Your Side", "Daniel Bedingfield"],
    ["Gotta Get Thru This", "Daniel Bedingfield"],
    ["If You're Not the One", "Daniel Bedingfield"],
    ["Bad Day", "Daniel Powter"],
    ["You're Beautiful", "James Blunt"],
    ["Goodbye My Lover", "James Blunt"],
    ["1973", "James Blunt"],
    ["This Ain't a Scene, It's an Arms Race", "Fall Out Boy"],
    ["Dance, Dance", "Fall Out Boy"],
    ["Sugar, We're Goin Down", "Fall Out Boy"],
    ["Misery Business", "Paramore"],
    ["Crushcrushcrush", "Paramore"],
    ["Decode", "Paramore"],
    ["The Middle", "Jimmy Eat World"],
    ["Move Along", "The All-American Rejects"],
    ["Dirty Little Secret", "The All-American Rejects"],

    ["In Too Deep", "Sum 41"],
    ["Fat Lip", "Sum 41"],
    ["Still Waiting", "Sum 41"],
    ["The Anthem", "Good Charlotte"],
    ["Girls & Boys", "Good Charlotte"],
    ["I Just Wanna Live", "Good Charlotte"],
    ["Check Yes Juliet", "We the Kings"],
    ["Ocean Avenue", "Yellowcard"],
    ["Face Down", "The Red Jumpsuit Apparatus"],
    ["Welcome to the Black Parade", "My Chemical Romance"],
    ["Teenagers", "My Chemical Romance"],
    ["Famous Last Words", "My Chemical Romance"],
    ["I'm Not Okay (I Promise)", "My Chemical Romance"],
    ["I Write Sins Not Tragedies", "Panic at the Disco"]
];

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
                7467 + index;

            return {
                id:
                    `music_${String(number).padStart(4, '0')}`,

                category:
                    'Music',

                question:
                    `Which artist recorded ${title}?`,

                answers:
                    makeAnswers(
                        artist,
                        index
                    ),

                correctAnswer:
                    artist,

                difficulty:
                    index % 3 === 0
                        ? 'Easy'
                        : 'Medium',

                tags: [
                    '2000s',
                    'songs'
                ],

                dailyEligible:
                    true
            };
        }
    );

module.exports =
    questions;
