// quiz_pack88.js
// PuzzlePilot Big Quiz
// Music Pack 88
// 100 questions
// IDs: music_6867 to music_6966

const songs = [
    ["Volcano Girls", "Veruca Salt", "Medium",
        ["Veruca Salt", "Hole", "L7", "The Breeders"]],

    ["Seether", "Veruca Salt", "Medium",
        ["Veruca Salt", "Hole", "Belly", "L7"]],

    ["Shutterbug", "Veruca Salt", "Hard",
        ["Veruca Salt", "Hole", "The Breeders", "Belly"]],

    ["Number One Blind", "Veruca Salt", "Hard",
        ["Veruca Salt", "L7", "Hole", "The Breeders"]],

    ["Supernova", "Liz Phair", "Medium",
        ["Liz Phair", "Fiona Apple", "Tracy Bonham", "Sheryl Crow"]],

    ["Polyester Bride", "Liz Phair", "Hard",
        ["Liz Phair", "Fiona Apple", "Lisa Loeb", "Tracy Bonham"]],

    ["Never Said", "Liz Phair", "Hard",
        ["Liz Phair", "Fiona Apple", "Sheryl Crow", "Lisa Loeb"]],

    ["Criminal", "Fiona Apple", "Easy",
        ["Fiona Apple", "Liz Phair", "Tori Amos", "Tracy Bonham"]],

    ["Shadowboxer", "Fiona Apple", "Medium",
        ["Fiona Apple", "Tori Amos", "Liz Phair", "Sarah McLachlan"]],

    ["Sleep to Dream", "Fiona Apple", "Medium",
        ["Fiona Apple", "Tori Amos", "Liz Phair", "Jewel"]],

    ["Fast as You Can", "Fiona Apple", "Medium",
        ["Fiona Apple", "Tori Amos", "Liz Phair", "Tracy Bonham"]],

    ["Not an Addict", "K's Choice", "Medium",
        ["K's Choice", "Republica", "Garbage", "The Cardigans"]],

    ["Everything for Free", "K's Choice", "Hard",
        ["K's Choice", "Republica", "Garbage", "Veruca Salt"]],

    ["Saints", "The Breeders", "Hard",
        ["The Breeders", "Belly", "Veruca Salt", "Hole"]],

    ["Safari", "The Breeders", "Hard",
        ["The Breeders", "Belly", "L7", "Veruca Salt"]],

    ["Feed the Tree", "Belly", "Medium",
        ["Belly", "The Breeders", "Veruca Salt", "Hole"]],

    ["Gepetto", "Belly", "Hard",
        ["Belly", "The Breeders", "Veruca Salt", "L7"]],

    ["Now They'll Sleep", "Belly", "Hard",
        ["Belly", "The Breeders", "Hole", "Veruca Salt"]],

    ["Super-Connected", "Belly", "Hard",
        ["Belly", "The Breeders", "Veruca Salt", "L7"]],

    ["Pretend We're Dead", "L7", "Medium",
        ["L7", "Hole", "Veruca Salt", "The Breeders"]],

    ["Andres", "L7", "Hard",
        ["L7", "Hole", "Veruca Salt", "Belly"]],

    ["Fuel My Fire", "L7", "Hard",
        ["L7", "Hole", "The Breeders", "Veruca Salt"]],

    ["Stuck Here Again", "L7", "Hard",
        ["L7", "Hole", "Belly", "Veruca Salt"]],

    ["Tomorrow", "Silverchair", "Easy",
        ["Silverchair", "Bush", "Candlebox", "Screaming Trees"]],

    ["Pure Massacre", "Silverchair", "Medium",
        ["Silverchair", "Bush", "Candlebox", "Sponge"]],

    ["Freak", "Silverchair", "Medium",
        ["Silverchair", "Bush", "Sponge", "Local H"]],

    ["Abuse Me", "Silverchair", "Medium",
        ["Silverchair", "Bush", "Candlebox", "Fuel"]],

    ["Anthem for the Year 2000", "Silverchair", "Medium",
        ["Silverchair", "Bush", "Sponge", "Fuel"]],

    ["Plowed", "Sponge", "Medium",
        ["Sponge", "Candlebox", "Local H", "Fuel"]],

    ["Molly (16 Candles Down the Drain)", "Sponge", "Hard",
        ["Sponge", "Candlebox", "Local H", "Everclear"]],

    ["Wax Ecstatic", "Sponge", "Hard",
        ["Sponge", "Candlebox", "Fuel", "Local H"]],

    ["Have You Seen Mary", "Sponge", "Hard",
        ["Sponge", "Candlebox", "Everclear", "Fuel"]],

    ["Far Behind", "Candlebox", "Medium",
        ["Candlebox", "Screaming Trees", "Silverchair", "Sponge"]],

    ["You", "Candlebox", "Hard",
        ["Candlebox", "Screaming Trees", "Silverchair", "Fuel"]],

    ["Cover Me", "Candlebox", "Hard",
        ["Candlebox", "Screaming Trees", "Sponge", "Local H"]],

    ["Change", "Candlebox", "Hard",
        ["Candlebox", "Screaming Trees", "Silverchair", "Sponge"]],

    ["Nearly Lost You", "Screaming Trees", "Medium",
        ["Screaming Trees", "Mudhoney", "Candlebox", "Alice in Chains"]],

    ["Dollar Bill", "Screaming Trees", "Hard",
        ["Screaming Trees", "Mudhoney", "Candlebox", "Soundgarden"]],

    ["All I Know", "Screaming Trees", "Hard",
        ["Screaming Trees", "Mudhoney", "Candlebox", "Silverchair"]],

    ["Sworn and Broken", "Screaming Trees", "Hard",
        ["Screaming Trees", "Mudhoney", "Candlebox", "Local H"]],

    ["Touch Me I'm Sick", "Mudhoney", "Medium",
        ["Mudhoney", "Screaming Trees", "Melvins", "L7"]],

    ["Suck You Dry", "Mudhoney", "Hard",
        ["Mudhoney", "Screaming Trees", "Melvins", "Candlebox"]],

    ["Generation Spokesmodel", "Mudhoney", "Hard",
        ["Mudhoney", "Screaming Trees", "Melvins", "Local H"]],

    ["Into Your Shtik", "Mudhoney", "Hard",
        ["Mudhoney", "Screaming Trees", "Melvins", "Sponge"]],

    ["Jerry Was a Race Car Driver", "Primus", "Medium",
        ["Primus", "Faith No More", "Helmet", "Filter"]],

    ["My Name Is Mud", "Primus", "Medium",
        ["Primus", "Faith No More", "Helmet", "Mudhoney"]],

    ["Wynona's Big Brown Beaver", "Primus", "Medium",
        ["Primus", "Faith No More", "Helmet", "Filter"]],

    ["Over the Falls", "Primus", "Hard",
        ["Primus", "Faith No More", "Helmet", "Mudhoney"]],

    ["Peaches", "The Presidents of the United States of America", "Easy",
        ["The Presidents of the United States of America", "Weezer", "Nada Surf", "Superdrag"]],

    ["Lump", "The Presidents of the United States of America", "Easy",
        ["The Presidents of the United States of America", "Weezer", "Nada Surf", "The Refreshments"]],

    ["Kitty", "The Presidents of the United States of America", "Medium",
        ["The Presidents of the United States of America", "Weezer", "Superdrag", "The Refreshments"]],

    ["Mach 5", "The Presidents of the United States of America", "Hard",
        ["The Presidents of the United States of America", "Weezer", "Nada Surf", "Superdrag"]],

    ["Volcano", "The Presidents of the United States of America", "Hard",
        ["The Presidents of the United States of America", "Weezer", "The Refreshments", "Superdrag"]],

    ["Banditos", "The Refreshments", "Medium",
        ["The Refreshments", "Fastball", "Cracker", "Gin Blossoms"]],

    ["Down Together", "The Refreshments", "Hard",
        ["The Refreshments", "Fastball", "Cracker", "Semisonic"]],

    ["Mekong", "The Refreshments", "Hard",
        ["The Refreshments", "Fastball", "Cracker", "Gin Blossoms"]],

    ["Low", "Cracker", "Medium",
        ["Cracker", "The Refreshments", "Soul Asylum", "Gin Blossoms"]],

    ["Get Off This", "Cracker", "Hard",
        ["Cracker", "The Refreshments", "Soul Asylum", "Fastball"]],

    ["Euro-Trash Girl", "Cracker", "Hard",
        ["Cracker", "The Refreshments", "Soul Asylum", "Semisonic"]],

    ["I Hate My Generation", "Cracker", "Hard",
        ["Cracker", "The Refreshments", "Soul Asylum", "Superdrag"]],

    ["Teen Angst (What the World Needs Now)", "Cracker", "Hard",
        ["Cracker", "The Refreshments", "Soul Asylum", "Fastball"]],

    ["Sucked Out", "Superdrag", "Medium",
        ["Superdrag", "Nada Surf", "Local H", "The Refreshments"]],

    ["Destination Ursa Major", "Superdrag", "Hard",
        ["Superdrag", "Nada Surf", "Local H", "The Refreshments"]],

    ["Do the Vampire", "Superdrag", "Hard",
        ["Superdrag", "Nada Surf", "Local H", "Harvey Danger"]],

    ["Pets", "Porno for Pyros", "Medium",
        ["Porno for Pyros", "Jane's Addiction", "Primus", "Faith No More"]],

    ["Tahitian Moon", "Porno for Pyros", "Medium",
        ["Porno for Pyros", "Jane's Addiction", "Primus", "Faith No More"]],

    ["Hard Charger", "Porno for Pyros", "Hard",
        ["Porno for Pyros", "Jane's Addiction", "Primus", "Helmet"]],

    ["Standing Outside the Fire", "Garth Brooks", "Medium",
        ["Garth Brooks", "Toby Keith", "Alan Jackson", "Tim McGraw"]],

    ["The Thunder Rolls", "Garth Brooks", "Easy",
        ["Garth Brooks", "Toby Keith", "Alan Jackson", "Clint Black"]],

    ["Ain't Going Down (Til the Sun Comes Up)", "Garth Brooks", "Medium",
        ["Garth Brooks", "Toby Keith", "Alan Jackson", "Tim McGraw"]],

    ["Callin' Baton Rouge", "Garth Brooks", "Medium",
        ["Garth Brooks", "Toby Keith", "Clint Black", "Alan Jackson"]],

    ["She's in Love with the Boy", "Trisha Yearwood", "Medium",
        ["Trisha Yearwood", "Faith Hill", "Martina McBride", "Shania Twain"]],

    ["Walkaway Joe", "Trisha Yearwood", "Medium",
        ["Trisha Yearwood", "Faith Hill", "Martina McBride", "Patty Loveless"]],

    ["XXX's and OOO's (An American Girl)", "Trisha Yearwood", "Medium",
        ["Trisha Yearwood", "Faith Hill", "Martina McBride", "Shania Twain"]],

    ["How Do I Live", "Trisha Yearwood", "Medium",
        ["Trisha Yearwood", "LeAnn Rimes", "Faith Hill", "Martina McBride"]],

    ["A Broken Wing", "Martina McBride", "Medium",
        ["Martina McBride", "Trisha Yearwood", "Faith Hill", "Shania Twain"]],

    ["Valentine", "Martina McBride", "Medium",
        ["Martina McBride", "Trisha Yearwood", "Faith Hill", "LeAnn Rimes"]],

    ["Should've Been a Cowboy", "Toby Keith", "Easy",
        ["Toby Keith", "Garth Brooks", "Alan Jackson", "Tim McGraw"]],

    ["Who's That Man", "Toby Keith", "Medium",
        ["Toby Keith", "Garth Brooks", "Alan Jackson", "Clint Black"]],

    ["How Do You Like Me Now", "Toby Keith", "Medium",
        ["Toby Keith", "Garth Brooks", "Tim McGraw", "Alan Jackson"]],

    ["Honey I'm Home", "Shania Twain", "Easy",
        ["Shania Twain", "Faith Hill", "Trisha Yearwood", "Martina McBride"]],

    ["From This Moment On", "Shania Twain", "Easy",
        ["Shania Twain", "Faith Hill", "LeAnn Rimes", "Trisha Yearwood"]],

    ["Let Me Let Go", "Faith Hill", "Medium",
        ["Faith Hill", "Shania Twain", "Trisha Yearwood", "Martina McBride"]],

    ["Miss World", "Hole", "Medium",
        ["Hole", "Veruca Salt", "L7", "The Breeders"]],

    ["Doll Parts", "Hole", "Medium",
        ["Hole", "Veruca Salt", "L7", "The Breeders"]],

    ["Softer, Softest", "Hole", "Hard",
        ["Hole", "Veruca Salt", "L7", "Belly"]],

    ["Beautiful Son", "Hole", "Hard",
        ["Hole", "Veruca Salt", "The Breeders", "L7"]],

    ["Forsythia", "Veruca Salt", "Hard",
        ["Veruca Salt", "Hole", "Belly", "The Breeders"]],

    ["All Hail Me", "Veruca Salt", "Hard",
        ["Veruca Salt", "Hole", "L7", "Belly"]],

    ["Victrola", "Veruca Salt", "Hard",
        ["Veruca Salt", "Hole", "The Breeders", "Belly"]],

    ["Straight", "Veruca Salt", "Hard",
        ["Veruca Salt", "Hole", "L7", "The Breeders"]],

    ["Girls Girls Girls", "Liz Phair", "Hard",
        ["Liz Phair", "Fiona Apple", "Tracy Bonham", "Lisa Loeb"]],

    ["Never Is a Promise", "Fiona Apple", "Hard",
        ["Fiona Apple", "Tori Amos", "Liz Phair", "Sarah McLachlan"]],

    ["The Child Is Gone", "Fiona Apple", "Hard",
        ["Fiona Apple", "Tori Amos", "Liz Phair", "Tracy Bonham"]],

    ["Carrion", "Fiona Apple", "Hard",
        ["Fiona Apple", "Tori Amos", "Liz Phair", "Sarah McLachlan"]],

    ["Slow Like Honey", "Fiona Apple", "Hard",
        ["Fiona Apple", "Tori Amos", "Liz Phair", "Lisa Loeb"]],

    ["Super Bon Bon", "Soul Coughing", "Medium",
        ["Soul Coughing", "Cake", "Primus", "Cracker"]],

    ["Circles", "Soul Coughing", "Hard",
        ["Soul Coughing", "Cake", "Primus", "Cracker"]],

    ["Screenwriter's Blues", "Soul Coughing", "Hard",
        ["Soul Coughing", "Cake", "Primus", "Cracker"]],

    ["Soundtrack to Mary", "Soul Coughing", "Hard",
        ["Soul Coughing", "Cake", "Primus", "Superdrag"]]
];

const quizPack88 = songs.map(
    ([title, artist, difficulty, answers], index) => ({
        id: `music_${6867 + index}`,
        category: "Music",
        difficulty,
        question: `Which artist recorded '${title}'?`,
        answers,
        correctAnswer: artist
    })
);

module.exports = quizPack88;
