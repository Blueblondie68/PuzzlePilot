// quiz_pack87.js
// PuzzlePilot Big Quiz
// Music Pack 87
// 100 questions
// IDs: music_6767 to music_6866

const songs = [
    ["Found Out About You", "Gin Blossoms", "Medium",
        ["Gin Blossoms", "Soul Asylum", "Semisonic", "Fastball"]],

    ["Until I Fall Away", "Gin Blossoms", "Hard",
        ["Gin Blossoms", "Soul Asylum", "Third Eye Blind", "Fastball"]],

    ["Follow You Down", "Gin Blossoms", "Medium",
        ["Gin Blossoms", "Semisonic", "Fastball", "The Wallflowers"]],

    ["Til I Hear It from You", "Gin Blossoms", "Medium",
        ["Gin Blossoms", "Soul Asylum", "Semisonic", "The Wallflowers"]],

    ["All for You", "Sister Hazel", "Medium",
        ["Sister Hazel", "Gin Blossoms", "Fastball", "Semisonic"]],

    ["Change Your Mind", "Sister Hazel", "Hard",
        ["Sister Hazel", "Gin Blossoms", "Everclear", "Fastball"]],

    ["Run-Around", "Blues Traveler", "Medium",
        ["Blues Traveler", "Spin Doctors", "Gin Blossoms", "The Wallflowers"]],

    ["Hook", "Blues Traveler", "Medium",
        ["Blues Traveler", "Spin Doctors", "Fastball", "Sister Hazel"]],

    ["But Anyway", "Blues Traveler", "Hard",
        ["Blues Traveler", "Spin Doctors", "Gin Blossoms", "The Wallflowers"]],

    ["The Mountains Win Again", "Blues Traveler", "Hard",
        ["Blues Traveler", "Spin Doctors", "Sister Hazel", "Fastball"]],

    ["Little Miss Can't Be Wrong", "Spin Doctors", "Medium",
        ["Spin Doctors", "Blues Traveler", "Gin Blossoms", "Soul Asylum"]],

    ["Jimmy Olsen's Blues", "Spin Doctors", "Medium",
        ["Spin Doctors", "Blues Traveler", "Sister Hazel", "Fastball"]],

    ["What Time Is It", "Spin Doctors", "Hard",
        ["Spin Doctors", "Blues Traveler", "Gin Blossoms", "Semisonic"]],

    ["Cleopatra's Cat", "Spin Doctors", "Hard",
        ["Spin Doctors", "Blues Traveler", "Soul Asylum", "Fastball"]],

    ["One Headlight", "The Wallflowers", "Easy",
        ["The Wallflowers", "Gin Blossoms", "Counting Crows", "Semisonic"]],

    ["The Difference", "The Wallflowers", "Medium",
        ["The Wallflowers", "Gin Blossoms", "Soul Asylum", "Fastball"]],

    ["Three Marlenas", "The Wallflowers", "Hard",
        ["The Wallflowers", "Counting Crows", "Gin Blossoms", "Semisonic"]],

    ["6th Avenue Heartache", "The Wallflowers", "Medium",
        ["The Wallflowers", "Counting Crows", "Soul Asylum", "Gin Blossoms"]],

    ["Heroes", "The Wallflowers", "Medium",
        ["The Wallflowers", "Counting Crows", "Gin Blossoms", "Fastball"]],

    ["Shimmer", "Fuel", "Medium",
        ["Fuel", "Everclear", "Local H", "Toadies"]],

    ["Bittersweet", "Fuel", "Hard",
        ["Fuel", "Everclear", "Local H", "Dishwalla"]],

    ["Jesus or a Gun", "Fuel", "Hard",
        ["Fuel", "Local H", "Toadies", "Everclear"]],

    ["Everything to Everyone", "Everclear", "Medium",
        ["Everclear", "Fuel", "Local H", "Eve 6"]],

    ["Father of Mine", "Everclear", "Medium",
        ["Everclear", "Fuel", "Semisonic", "Local H"]],

    ["I Will Buy You a New Life", "Everclear", "Medium",
        ["Everclear", "Fuel", "Gin Blossoms", "Dishwalla"]],

    ["Santa Monica", "Everclear", "Easy",
        ["Everclear", "Fuel", "Local H", "Toadies"]],

    ["Inside Out", "Eve 6", "Medium",
        ["Eve 6", "Semisonic", "Fastball", "Everclear"]],

    ["Leech", "Eve 6", "Hard",
        ["Eve 6", "Semisonic", "Fuel", "Local H"]],

    ["Singing in My Sleep", "Semisonic", "Hard",
        ["Semisonic", "Fastball", "Eve 6", "Gin Blossoms"]],

    ["Secret Smile", "Semisonic", "Medium",
        ["Semisonic", "Fastball", "Gin Blossoms", "The Wallflowers"]],

    ["The Way", "Fastball", "Easy",
        ["Fastball", "Semisonic", "Gin Blossoms", "Everclear"]],

    ["Out of My Head", "Fastball", "Medium",
        ["Fastball", "Semisonic", "Gin Blossoms", "Sister Hazel"]],

    ["Fire Escape", "Fastball", "Hard",
        ["Fastball", "Semisonic", "Everclear", "Eve 6"]],

    ["You're an Ocean", "Fastball", "Hard",
        ["Fastball", "Semisonic", "Gin Blossoms", "Sister Hazel"]],

    ["Sex and Candy", "Marcy Playground", "Easy",
        ["Marcy Playground", "Harvey Danger", "Toadies", "Local H"]],

    ["Saint Joe on the School Bus", "Marcy Playground", "Hard",
        ["Marcy Playground", "Harvey Danger", "Toadies", "Local H"]],

    ["Sherry Fraser", "Marcy Playground", "Hard",
        ["Marcy Playground", "Harvey Danger", "Local H", "Everclear"]],

    ["Flagpole Sitta", "Harvey Danger", "Medium",
        ["Harvey Danger", "Marcy Playground", "Local H", "Toadies"]],

    ["Private Helicopter", "Harvey Danger", "Hard",
        ["Harvey Danger", "Marcy Playground", "Local H", "Eve 6"]],

    ["Save It for Later", "Harvey Danger", "Hard",
        ["Harvey Danger", "Marcy Playground", "Everclear", "Semisonic"]],

    ["Possum Kingdom", "Toadies", "Medium",
        ["Toadies", "Local H", "Fuel", "Everclear"]],

    ["Away", "Toadies", "Hard",
        ["Toadies", "Local H", "Fuel", "Marcy Playground"]],

    ["Tyler", "Toadies", "Hard",
        ["Toadies", "Local H", "Fuel", "Harvey Danger"]],

    ["Everything Falls Apart", "Dogs Eye View", "Hard",
        ["Dogs Eye View", "Dishwalla", "Deep Blue Something", "Fastball"]],

    ["Halo", "Deep Blue Something", "Hard",
        ["Deep Blue Something", "Dishwalla", "Semisonic", "Fastball"]],

    ["Josey", "Deep Blue Something", "Hard",
        ["Deep Blue Something", "Dishwalla", "Gin Blossoms", "Fastball"]],

    ["Counting Blue Cars", "Dishwalla", "Medium",
        ["Dishwalla", "Deep Blue Something", "Fastball", "Semisonic"]],

    ["Charlie Brown's Parents", "Dishwalla", "Hard",
        ["Dishwalla", "Deep Blue Something", "Everclear", "Fastball"]],

    ["Give", "Dishwalla", "Hard",
        ["Dishwalla", "Deep Blue Something", "Fastball", "Fuel"]],

    ["Amnesia", "Chumbawamba", "Medium",
        ["Chumbawamba", "Republica", "Space", "Cornershop"]],

    ["Enough Is Enough", "Chumbawamba", "Hard",
        ["Chumbawamba", "Republica", "Space", "The Wonder Stuff"]],

    ["Top of the World (Ole Ole Ole)", "Chumbawamba", "Hard",
        ["Chumbawamba", "Republica", "Space", "Cornershop"]],

    ["On the Run", "OMC", "Hard",
        ["OMC", "Len", "Bran Van 3000", "New Radicals"]],

    ["Land of Plenty", "OMC", "Hard",
        ["OMC", "Len", "Bran Van 3000", "New Radicals"]],

    ["Standing Outside a Broken Phone Booth with Money in My Hand",
        "Primitive Radio Gods", "Medium",
        ["Primitive Radio Gods", "Marcy Playground", "Harvey Danger", "Nada Surf"]],

    ["Mother Mother", "Tracy Bonham", "Medium",
        ["Tracy Bonham", "Meredith Brooks", "Fiona Apple", "Liz Phair"]],

    ["The One", "Tracy Bonham", "Hard",
        ["Tracy Bonham", "Meredith Brooks", "Liz Phair", "Paula Cole"]],

    ["Everything's Fine", "Tracy Bonham", "Hard",
        ["Tracy Bonham", "Meredith Brooks", "Fiona Apple", "Liz Phair"]],

    ["What Would Happen", "Meredith Brooks", "Medium",
        ["Meredith Brooks", "Tracy Bonham", "Paula Cole", "Sheryl Crow"]],

    ["Stop", "Meredith Brooks", "Hard",
        ["Meredith Brooks", "Tracy Bonham", "Paula Cole", "Lisa Loeb"]],

    ["Get Out of This House", "Shawn Colvin", "Hard",
        ["Shawn Colvin", "Paula Cole", "Lisa Loeb", "Jewel"]],

    ["You and the Mona Lisa", "Shawn Colvin", "Hard",
        ["Shawn Colvin", "Paula Cole", "Lisa Loeb", "Sarah McLachlan"]],

    ["Every Little Thing", "Shawn Colvin", "Hard",
        ["Shawn Colvin", "Paula Cole", "Jewel", "Lisa Loeb"]],

    ["Who Will Save Your Soul", "Jewel", "Easy",
        ["Jewel", "Paula Cole", "Lisa Loeb", "Sarah McLachlan"]],

    ["You Were Meant for Me", "Jewel", "Easy",
        ["Jewel", "Paula Cole", "Sheryl Crow", "Lisa Loeb"]],

    ["Foolish Games", "Jewel", "Medium",
        ["Jewel", "Sarah McLachlan", "Paula Cole", "Lisa Loeb"]],

    ["Hands", "Jewel", "Medium",
        ["Jewel", "Sarah McLachlan", "Sheryl Crow", "Paula Cole"]],

    ["Down So Long", "Jewel", "Medium",
        ["Jewel", "Sheryl Crow", "Paula Cole", "Lisa Loeb"]],

    ["Truthfully", "Lisa Loeb", "Hard",
        ["Lisa Loeb", "Jewel", "Paula Cole", "Shawn Colvin"]],

    ["Waiting for Wednesday", "Lisa Loeb", "Hard",
        ["Lisa Loeb", "Jewel", "Shawn Colvin", "Paula Cole"]],

    ["Building a Mystery", "Sarah McLachlan", "Medium",
        ["Sarah McLachlan", "Jewel", "Paula Cole", "Lisa Loeb"]],

    ["Sweet Surrender", "Sarah McLachlan", "Medium",
        ["Sarah McLachlan", "Jewel", "Paula Cole", "Shawn Colvin"]],

    ["Adia", "Sarah McLachlan", "Medium",
        ["Sarah McLachlan", "Jewel", "Lisa Loeb", "Paula Cole"]],

    ["Angel", "Sarah McLachlan", "Easy",
        ["Sarah McLachlan", "Jewel", "Paula Cole", "Sheryl Crow"]],

    ["Possession", "Sarah McLachlan", "Medium",
        ["Sarah McLachlan", "Jewel", "Paula Cole", "Lisa Loeb"]],

    ["Into the Fire", "Sarah McLachlan", "Hard",
        ["Sarah McLachlan", "Jewel", "Paula Cole", "Shawn Colvin"]],

    ["I Love You Always Forever", "Donna Lewis", "Easy",
        ["Donna Lewis", "Des'ree", "Lisa Loeb", "Paula Cole"]],

    ["Without Love", "Donna Lewis", "Hard",
        ["Donna Lewis", "Des'ree", "Lisa Loeb", "Shawn Colvin"]],

    ["Love and Affection", "Donna Lewis", "Hard",
        ["Donna Lewis", "Des'ree", "Lisa Loeb", "Paula Cole"]],

    ["Barely Breathing", "Duncan Sheik", "Medium",
        ["Duncan Sheik", "Marc Cohn", "Joshua Kadison", "Curtis Stigers"]],

    ["She Runs Away", "Duncan Sheik", "Hard",
        ["Duncan Sheik", "Marc Cohn", "Joshua Kadison", "Eagle-Eye Cherry"]],

    ["Wishful Thinking", "Duncan Sheik", "Hard",
        ["Duncan Sheik", "Marc Cohn", "Joshua Kadison", "Eagle-Eye Cherry"]],

    ["Indecision", "Eagle-Eye Cherry", "Hard",
        ["Eagle-Eye Cherry", "Duncan Sheik", "David Gray", "Marc Cohn"]],

    ["Desperately Wanting", "Better Than Ezra", "Medium",
        ["Better Than Ezra", "Semisonic", "Fastball", "Gin Blossoms"]],

    ["Good", "Better Than Ezra", "Medium",
        ["Better Than Ezra", "Semisonic", "Fastball", "Everclear"]],

    ["King of New Orleans", "Better Than Ezra", "Hard",
        ["Better Than Ezra", "Semisonic", "Fastball", "Gin Blossoms"]],

    ["In the Blood", "Better Than Ezra", "Hard",
        ["Better Than Ezra", "Semisonic", "Fastball", "Everclear"]],

    ["At the Stars", "Better Than Ezra", "Hard",
        ["Better Than Ezra", "Semisonic", "Gin Blossoms", "Fastball"]],

    ["Bound for the Floor", "Local H", "Medium",
        ["Local H", "Toadies", "Fuel", "Everclear"]],

    ["Eddie's Head", "Local H", "Hard",
        ["Local H", "Toadies", "Fuel", "Harvey Danger"]],

    ["All the Kids Are Right", "Local H", "Hard",
        ["Local H", "Toadies", "Everclear", "Fuel"]],

    ["Popular", "Nada Surf", "Medium",
        ["Nada Surf", "Marcy Playground", "Harvey Danger", "Local H"]],

    ["Treehouse", "Nada Surf", "Hard",
        ["Nada Surf", "Marcy Playground", "Harvey Danger", "Semisonic"]],

    ["Beautiful in My Eyes", "Joshua Kadison", "Medium",
        ["Joshua Kadison", "Marc Cohn", "Curtis Stigers", "Duncan Sheik"]],

    ["Jessie", "Joshua Kadison", "Medium",
        ["Joshua Kadison", "Marc Cohn", "Curtis Stigers", "Duncan Sheik"]],

    ["Picture Postcards from LA", "Joshua Kadison", "Hard",
        ["Joshua Kadison", "Marc Cohn", "Curtis Stigers", "Duncan Sheik"]],

    ["In the Meantime", "Spacehog", "Medium",
        ["Spacehog", "Nada Surf", "Local H", "Marcy Playground"]],

    ["Mungo City", "Spacehog", "Hard",
        ["Spacehog", "Nada Surf", "Local H", "Harvey Danger"]],

    ["Cruel to Be Kind", "Spacehog", "Hard",
        ["Spacehog", "Nada Surf", "Local H", "Marcy Playground"]],

    ["Awful", "Hole", "Hard",
        ["Hole", "Veruca Salt", "Garbage", "L7"]]
];

const quizPack87 = songs.map(
    ([title, artist, difficulty, answers], index) => ({
        id: `music_${6767 + index}`,
        category: "Music",
        difficulty,
        question: `Which artist recorded '${title}'?`,
        answers,
        correctAnswer: artist
    })
);

module.exports = quizPack87;
