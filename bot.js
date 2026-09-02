const {
    Client,
    GatewayIntentBits,
    Partials,
    REST,
    Routes,
    SlashCommandBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder
} = require('discord.js');

require('dotenv').config();
const fs = require('fs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [Partials.Channel]
});

// ⭐ CROSSWORD HOOK ⭐
const crossword = require('./crossword');
crossword.register(client);
// ⭐ END ⭐



// ----------------------
// REGISTER SLASH COMMANDS
// ----------------------
const commands = [
    new SlashCommandBuilder()
        .setName('daily')
        .setDescription('Get your daily puzzle'),

    new SlashCommandBuilder()
        .setName('solve_crossword')
        .setDescription('Submit your answer to the daily crossword clue')
        .addStringOption(option =>
            option.setName('answer')
                .setDescription('Your answer to the clue')
                .setRequired(true)
        ),
].map(cmd => cmd.toJSON());


const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...');
        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands }
        );
        console.log('Slash commands registered.');
    } catch (err) {
        console.error(err);
    }
})();


// ----------------------
// STREAK SYSTEM (WORD LADDER ONLY FOR NOW)
// ----------------------
let streaks = {};

try {
    streaks = JSON.parse(fs.readFileSync('./streaks.json', 'utf8'));
} catch (err) {
    streaks = {};
}

function saveStreaks() {
    fs.writeFileSync('./streaks.json', JSON.stringify(streaks, null, 2));
}
// ----------------------
// WORD LADDER SYSTEM
// ----------------------
const wordLadders = [
    ["cat", "cot", "dot", "dog"],
    ["tea", "sea", "see", "bee"],
    ["map", "mop", "pop", "pip"],
    ["fog", "fag", "bag", "bog"],
    ["ham", "him", "rim", "ram"],
    ["sun", "sin", "sip", "sap"],
    ["cow", "caw", "saw", "paw"],
    ["bat", "bet", "bed", "bad"],
    ["tin", "tan", "man", "mat"],
    ["bar", "bat", "bit", "sit"],
    ["lip", "lap", "sap", "sip"],
    ["fog", "hog", "hot", "hat"],
    ["pen", "pan", "tan", "tap"],
    ["rig", "rag", "bag", "bog"],
    ["cup", "cap", "sap", "sip"],
    ["pit", "pet", "get", "got"],
    ["ram", "rim", "rip", "sip"],
    ["cow", "how", "hot", "hat"],
    ["jam", "jab", "lab", "lob"],
    ["tap", "top", "cop", "cup"],
    ["bar", "ban", "can", "con"],
    ["pit", "pin", "pan", "man"],
    ["fog", "fig", "fin", "fun"],
    ["lip", "lit", "lot", "hot"],
    ["ram", "ran", "can", "con"],
    ["sip", "sap", "lap", "lop"],
    ["dog", "dig", "fig", "fin"],
    ["cow", "cog", "log", "lag"],
    ["tap", "tip", "sip", "sap"],
    ["bar", "car", "cat", "cot"],
    ["pit", "pat", "pan", "man"],
    ["ram", "cam", "cap", "cup"],
    ["dog", "dot", "cot", "cat"],
    ["tap", "tar", "far", "fat"],
    ["bar", "bor", "bot", "bat"],
    ["pit", "pip", "lip", "lap"],
    ["ram", "rim", "rib", "rob"],
    ["sip", "sir", "sod", "sad"],
    ["dog", "dig", "big", "bag"],
    ["cow", "caw", "cay", "day"],

    ["heat", "heal", "heap", "leap"],
    ["cold", "cord", "card", "ward"],
    ["farm", "form", "foam", "roam"],
    ["wind", "wand", "want", "cant"],
    ["rain", "rail", "tail", "tall"],
    ["salt", "silt", "silk", "milk"],
    ["book", "cook", "cool", "coal"],
    ["fish", "wish", "wash", "dash"],
    ["town", "torn", "born", "barn"],
    ["lane", "lone", "long", "song"],
    ["milk", "silk", "sill", "sell"],
    ["sand", "send", "sent", "rent"],
    ["bake", "bike", "bite", "site"],
    ["tall", "tale", "sale", "sage"],
    ["cold", "gold", "golf", "wolf"],
    ["lamp", "lump", "jump", "dump"],
    ["park", "pork", "port", "sort"],
    ["wave", "ware", "care", "core"],
    ["mint", "mind", "bind", "band"],
    ["leaf", "leak", "peak", "peck"],
    ["milk", "mill", "mild", "wild"],
    ["sand", "sane", "lane", "lame"],
    ["bake", "bare", "barb", "barn"],
    ["tall", "toll", "tool", "fool"],
    ["cold", "bold", "bald", "ball"],
    ["lamp", "lamb", "limb", "lime"],
    ["park", "part", "port", "post"],
    ["wave", "wane", "wine", "wire"],
    ["mint", "mine", "mane", "lane"],
    ["leaf", "lead", "load", "loan"],
    ["milk", "milt", "mild", "wild"],
    ["sand", "sank", "sink", "sick"],
    ["bake", "bike", "bile", "mile"],
    ["tall", "toll", "tool", "cool"],
    ["cold", "colt", "bolt", "belt"],
    ["lamp", "lump", "dump", "damp"],
    ["park", "perk", "peek", "peep"],
    ["wave", "wane", "wine", "pine"],
    ["mint", "mine", "mile", "mole"],
    ["leaf", "leap", "heap", "heal"],

    ["stare", "share", "shark", "spark", "spare"],
    ["plant", "plans", "plays", "slays", "stays"],
    ["heart", "heard", "hears", "years", "yarns"],
    ["bread", "bream", "dream", "dread", "tread"],
    ["shore", "score", "scare", "share", "shale"],
    ["crisp", "crush", "brush", "brash", "brass"],
    ["scone", "scene", "scend", "shend", "shone"],
    ["pound", "sound", "round", "found", "bound"],
    ["stone", "stoke", "stake", "shake", "shale"],
    ["spice", "slice", "slick", "click", "clock"],
    ["train", "trait", "trail", "trial", "trill"],
    ["light", "tight", "tithe", "tilth", "filth"],
    ["flame", "blame", "blare", "flare", "flair"]
];

function getDifficulty(ladder) {
    const length = ladder.length;
    if (length <= 3) return "Easy";
    if (length <= 5) return "Medium";
    return "Hard";
}

function generateWordLadder() {
    return wordLadders[Math.floor(Math.random() * wordLadders.length)];
}




// ----------------------
// CONNECTIONS SYSTEM (FOUR RELATED WORDS)
// ----------------------
const connectionsPuzzles = [
    { group: ["apple", "banana", "orange", "grape"], theme: "fruit" },
    { group: ["dog", "cat", "rabbit", "hamster"], theme: "pets" },
    { group: ["red", "blue", "green", "yellow"], theme: "colours" },
    { group: ["carrot", "potato", "broccoli", "onion"], theme: "vegetables" },
    { group: ["lion", "tiger", "leopard", "cheetah"], theme: "big cats" },
    { group: ["fork", "spoon", "knife", "plate"], theme: "tableware" },
    { group: ["paris", "london", "rome", "berlin"], theme: "european cities" },
    { group: ["guitar", "piano", "drums", "violin"], theme: "musical instruments" },
    { group: ["mercury", "venus", "earth", "mars"], theme: "planets" },
    { group: ["summer", "winter", "spring", "autumn"], theme: "seasons" },
    { group: ["circle", "square", "triangle", "rectangle"], theme: "shapes" },
    { group: ["gold", "silver", "bronze", "platinum"], theme: "metals" },
    { group: ["milk", "cheese", "yogurt", "butter"], theme: "dairy" },
    { group: ["football", "tennis", "cricket", "rugby"], theme: "sports" },
    { group: ["rose", "tulip", "daisy", "orchid"], theme: "flowers" },
    { group: ["shark", "whale", "dolphin", "seal"], theme: "sea animals" },
    { group: ["python", "java", "javascript", "csharp"], theme: "programming languages" },
    { group: ["ironman", "thor", "hulk", "captainamerica"], theme: "marvel heroes" },
    { group: ["harry", "ron", "hermione", "dumbledore"], theme: "harry potter characters" },
    { group: ["bread", "pasta", "rice", "noodles"], theme: "carbs" },
    { group: ["cloud", "rain", "snow", "wind"], theme: "weather" },
    { group: ["doctor", "nurse", "surgeon", "paramedic"], theme: "medical jobs" },
    { group: ["car", "bus", "train", "plane"], theme: "transport" },
    { group: ["oak", "pine", "birch", "maple"], theme: "trees" },
    { group: ["diamond", "ruby", "emerald", "sapphire"], theme: "gemstones" },
    { group: ["lion", "bear", "wolf", "fox"], theme: "wild animals" },
    { group: ["chocolate", "vanilla", "strawberry", "mint"], theme: "ice cream flavours" },
    { group: ["monday", "tuesday", "wednesday", "thursday"], theme: "weekdays" },
    { group: ["pencil", "pen", "eraser", "ruler"], theme: "stationery" },
    { group: ["jeans", "shirt", "jacket", "shorts"], theme: "clothing" },
    { group: ["dracula", "frankenstein", "werewolf", "zombie"], theme: "monsters" },
    { group: ["cookie", "cake", "brownie", "muffin"], theme: "baked goods" },
    { group: ["tea", "coffee", "juice", "water"], theme: "drinks" },
    { group: ["hammer", "screwdriver", "wrench", "saw"], theme: "tools" },
    { group: ["facebook", "twitter", "instagram", "tiktok"], theme: "social media" },
    { group: ["england", "scotland", "wales", "ireland"], theme: "uk regions" },
    { group: ["mouse", "keyboard", "monitor", "printer"], theme: "computer peripherals" },
    { group: ["sun", "moon", "stars", "planet"], theme: "space objects" },
    { group: ["carpet", "sofa", "table", "lamp"], theme: "furniture" },
    { group: ["pizza", "burger", "fries", "hotdog"], theme: "fast food" },
    { group: ["ant", "bee", "wasp", "fly"], theme: "insects" },
    { group: ["socks", "shoes", "boots", "sandals"], theme: "footwear" },
    { group: ["chess", "checkers", "scrabble", "monopoly"], theme: "board games" },
    { group: ["violin", "cello", "harp", "flute"], theme: "classical instruments" },
    { group: ["lettuce", "tomato", "cucumber", "pepper"], theme: "salad ingredients" },
    { group: ["panda", "koala", "sloth", "lemur"], theme: "cute animals" },
    { group: ["earthquake", "tsunami", "volcano", "hurricane"], theme: "natural disasters" },
    { group: ["maths", "english", "science", "history"], theme: "school subjects" },
    { group: ["sugar", "salt", "pepper", "spice"], theme: "seasonings" },
    { group: ["car", "engine", "wheel", "brake"], theme: "car parts" },
    { group: ["piano", "organ", "keyboard", "synth"], theme: "key instruments" },
    { group: ["lion", "eagle", "snake", "badger"], theme: "hogwarts houses" },
    { group: ["red", "white", "blue", "stars"], theme: "usa flag elements" },
    { group: ["sunflower", "rose", "lily", "violet"], theme: "garden flowers" },
    { group: ["cookie", "biscuit", "cracker", "wafer"], theme: "crispy snacks" },
    { group: ["socks", "gloves", "hat", "scarf"], theme: "winter clothing" },
    { group: ["lion", "tiger", "bear", "shark"], theme: "dangerous animals" },
    { group: ["pasta", "lasagna", "spaghetti", "ravioli"], theme: "italian food" },
    { group: ["chicken", "beef", "pork", "lamb"], theme: "meats" },
    { group: ["carrot", "beetroot", "turnip", "radish"], theme: "root vegetables" },
    { group: ["sapphire", "topaz", "opal", "amethyst"], theme: "precious stones" },
    { group: ["lion", "zebra", "giraffe", "elephant"], theme: "savannah animals" },
    { group: ["tulip", "rose", "sunflower", "daisy"], theme: "common flowers" },
    { group: ["rain", "snow", "hail", "sleet"], theme: "precipitation" },
    { group: ["car", "bike", "scooter", "skateboard"], theme: "personal transport" },
    { group: ["piano", "drums", "guitar", "bass"], theme: "band instruments" },
    { group: ["lion", "monkey", "gorilla", "chimpanzee"], theme: "primates" },
    { group: ["cookie", "brownie", "cupcake", "donut"], theme: "sweet treats" },
    { group: ["water", "fire", "earth", "air"], theme: "elements" },
    { group: ["car", "truck", "van", "jeep"], theme: "vehicles" },
    { group: ["rose", "orchid", "tulip", "dahlia"], theme: "bouquet flowers" },
    { group: ["cat", "lion", "tiger", "leopard"], theme: "felines" },
    { group: ["hammer", "drill", "saw", "chisel"], theme: "workshop tools" },
    { group: ["milk", "cream", "butter", "cheese"], theme: "dairy products" },
    { group: ["carrot", "peas", "corn", "beans"], theme: "vegetable sides" },
    { group: ["lion", "wolf", "bear", "cougar"], theme: "predators" },
    { group: ["pizza", "pasta", "gelato", "risotto"], theme: "italian dishes" },
    { group: ["tea", "coffee", "latte", "espresso"], theme: "cafe drinks" },
    { group: ["socks", "slippers", "boots", "heels"], theme: "footwear types" },
    { group: ["cookie", "cracker", "pretzel", "popcorn"], theme: "snacks" },
    { group: ["lion", "tiger", "cheetah", "panther"], theme: "big cats" },
    { group: ["car", "motorbike", "bus", "train"], theme: "transport modes" },
    { group: ["rose", "violet", "iris", "lily"], theme: "flower species" },
    { group: ["cat", "dog", "hamster", "fish"], theme: "common pets" },
    { group: ["hammer", "pliers", "wrench", "screwdriver"], theme: "hand tools" },
    { group: ["milk", "yogurt", "cream", "icecream"], theme: "cold dairy" },
    { group: ["carrot", "lettuce", "spinach", "kale"], theme: "leafy greens" },
    { group: ["lion", "bear", "wolf", "hyena"], theme: "carnivores" },
    { group: ["pizza", "burger", "wrap", "taco"], theme: "takeaway food" },
    { group: ["tea", "chai", "matcha", "herbal"], theme: "tea types" },
    { group: ["socks", "tights", "leggings", "jeans"], theme: "legwear" },
    { group: ["cookie", "shortbread", "gingerbread", "digestive"], theme: "biscuits" }
];


// ----------------------
// LOGIC GRID SYSTEM (TEXT DESCRIPTION)
// ----------------------
const logicGridPuzzles = [
    {
        description: "Three friends (Alice, Bob, Carol) each own a different pet: dog, cat, bird. Alice does not own the dog. Bob does not own the bird. Who owns which pet?",
        solution: "Alice has the bird, Bob has the cat, Carol has the dog."
    },
    {
        description: "Three houses (red, blue, green) are in a row. The red house is not next to the blue house. The green house is on the right. What is the order?",
        solution: "From left to right: blue, red, green."
    },
    {
        description: "Three people (Sam, Lily, Tom) each drink a different beverage: tea, coffee, juice. Sam does not drink tea. Lily drinks something warm. Who drinks what?",
        solution: "Lily drinks coffee, Sam drinks juice, Tom drinks tea."
    },
    {
        description: "Three pets (dog, cat, rabbit) belong to three owners (Mia, Jack, Zoe). Mia is allergic to fur. Jack dislikes rabbits. Who owns which pet?",
        solution: "Mia owns the rabbit, Jack owns the dog, Zoe owns the cat."
    },
    {
        description: "Three students (Anna, Ben, Chloe) each study a different subject: maths, history, science. Anna hates numbers. Ben loves experiments. Who studies what?",
        solution: "Anna studies history, Ben studies science, Chloe studies maths."
    },
    {
        description: "Three cars (red, black, white) are parked in a row. The red car is not first. The black car is not last. What is the order?",
        solution: "From left to right: white, red, black."
    },
    {
        description: "Three animals (lion, tiger, bear) each live in different habitats: forest, jungle, mountains. The lion does not live in the jungle. The bear does not live in the jungle. Who lives where?",
        solution: "Lion lives in the mountains, tiger in the jungle, bear in the forest."
    },
    {
        description: "Three siblings (Amy, Ben, Cara) each play a different instrument: piano, guitar, drums. Amy cannot lift her instrument. Ben plays strings. Who plays what?",
        solution: "Amy plays piano, Ben plays guitar, Cara plays drums."
    },
    {
        description: "Three workers (Dan, Eve, Max) each work a different shift: morning, afternoon, night. Dan hates mornings. Eve works when it's dark. Who works which shift?",
        solution: "Dan works afternoon, Eve works night, Max works morning."
    },
    {
        description: "Three houses have pets: one has a dog, one a cat, one a fish. The dog lives next to the cat. The fish does not live next to the dog. What is the order?",
        solution: "From left to right: fish, dog, cat."
    },
    {
        description: "Three people (Olivia, Paul, Quinn) each own a different vehicle: bike, car, scooter. Olivia cannot drive. Paul hates balancing. Who owns what?",
        solution: "Olivia owns the bike, Paul owns the car, Quinn owns the scooter."
    },
    {
        description: "Three desserts (cake, pie, pudding) are chosen by three friends (Ella, Finn, Grace). Ella chooses something baked. Finn chooses something with crust. Who chooses what?",
        solution: "Ella chooses cake, Finn chooses pie, Grace chooses pudding."
    },
    {
        description: "Three neighbours (Ian, Jade, Kyle) each have a different pet: snake, parrot, dog. Ian hates birds. Jade hates reptiles. Who owns which pet?",
        solution: "Ian owns the dog, Jade owns the parrot, Kyle owns the snake."
    },
    {
        description: "Three children (Leo, Mia, Noah) each have a favourite colour: red, blue, green. Leo dislikes red. Mia loves the sky. Who likes which colour?",
        solution: "Leo likes green, Mia likes blue, Noah likes red."
    },
    {
        description: "Three travellers (Ava, Ben, Cole) each visit a different country: Japan, Italy, Canada. Ava hates cold weather. Ben loves pasta. Who visits where?",
        solution: "Ava visits Italy, Ben visits Japan, Cole visits Canada."
    },
    {
        description: "Three pets (hamster, turtle, dog) each eat different food: seeds, meat, lettuce. The dog does not eat lettuce. The turtle does not eat seeds. Who eats what?",
        solution: "Hamster eats seeds, turtle eats lettuce, dog eats meat."
    },
    {
        description: "Three teachers (Ms. Ray, Mr. Lee, Mrs. Park) each teach a different subject: art, maths, music. Ms. Ray cannot sing. Mr. Lee loves numbers. Who teaches what?",
        solution: "Ms. Ray teaches art, Mr. Lee teaches maths, Mrs. Park teaches music."
    },
    {
        description: "Three animals (horse, cow, sheep) each live in different barns: red, blue, yellow. The horse is not in red. The cow is not in yellow. Who lives where?",
        solution: "Horse in blue, cow in red, sheep in yellow."
    },
    {
        description: "Three gamers (Tom, Sara, Luke) each play a different genre: racing, puzzle, shooter. Tom hates loud games. Sara loves thinking. Who plays what?",
        solution: "Tom plays puzzle, Sara plays shooter, Luke plays racing."
    },
    {
        description: "Three chefs (Ari, Bea, Cal) each cook a different dish: soup, pasta, salad. Ari cooks something cold. Bea cooks something with noodles. Who cooks what?",
        solution: "Ari cooks salad, Bea cooks pasta, Cal cooks soup."
    },
    {
        description: "Three birds (sparrow, owl, eagle) each live in different places: forest, mountains, city. The owl does not live in the city. The eagle does not live in the forest. Who lives where?",
        solution: "Sparrow in city, owl in forest, eagle in mountains."
    },
    {
        description: "Three students (Holly, Jake, Liam) each have a favourite sport: swimming, football, running. Holly hates getting wet. Jake loves team sports. Who likes what?",
        solution: "Holly likes running, Jake likes football, Liam likes swimming."
    },
    {
        description: "Three neighbours (Kim, Lee, Max) each own a different pet: frog, cat, parrot. Kim hates fur. Lee hates noise. Who owns which pet?",
        solution: "Kim owns the frog, Lee owns the cat, Max owns the parrot."
    },
    {
        description: "Three friends (Nina, Owen, Pia) each choose a different drink: cola, lemonade, water. Nina avoids sugar. Owen wants bubbles. Who chooses what?",
        solution: "Nina chooses water, Owen chooses cola, Pia chooses lemonade."
    },
    {
        description: "Three robots (A1, B2, C3) each perform a different task: cleaning, cooking, guarding. A1 cannot guard. B2 cannot cook. Who does what?",
        solution: "A1 cleans, B2 guards, C3 cooks."
    }
];

// ----------------------
// TODAY'S PUZZLES
// ----------------------
// Generate today's puzzles
let todaysLadder = generateWordLadder();


function scheduleDailyReset() {
    const now = new Date();
    const nextMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0, 0, 0
    );

    const msUntilMidnight = nextMidnight - now;

    setTimeout(() => {
        todaysLadder = generateWordLadder();
        
        console.log("Daily puzzles refreshed!");
        scheduleDailyReset();
    }, msUntilMidnight);
}

scheduleDailyReset();

// ----------------------
// START BOT
// ----------------------
// ----------------------
// DAILY PUZZLE MENU HANDLER
// ----------------------
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'daily') {
        const menu = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('daily-menu')
                .setPlaceholder('Choose your daily puzzle')
                .addOptions([
    {
        label: 'Word Ladder',
        value: 'wordladder',
        description: 'Solve today’s word ladder'
    },
    {
        label: 'Full Crossword',
        value: 'fullcrossword',
        description: 'Play the full daily crossword'
    },
    {
        label: 'Connections',
        value: 'connections',
        description: 'Find the theme between four words'
    },
    {
        label: 'Logic Grid',
        value: 'logicgrid',
        description: 'Solve a short logic puzzle'
    }
])
       );

        await interaction.reply({
            content: '🧩 **Choose your daily puzzle:**',
            components: [menu]
        });
    }
});

// ----------------------
// DAILY MENU SELECTION HANDLER
// ----------------------
client.on('interactionCreate', async interaction => {
    if (!interaction.isStringSelectMenu()) return;

    if (interaction.customId === 'daily-menu') {
        const choice = interaction.values[0];

       if (choice === 'wordladder') {
    await interaction.reply(
        `🧩 **Daily Word Ladder**\n` +
        `Start: **${todaysLadder[0]}**\n` +
        `Difficulty: **${getDifficulty(todaysLadder)}**\n` +
        `Steps: ${todaysLadder.length} words`
    );
}

if (choice === 'fullcrossword') {
    await interaction.reply(
        `🧩 **Daily Full Crossword**\nType **!crossword** to begin!`
    );
}


       
        if (choice === 'connections') {
            const puzzle = connectionsPuzzles[Math.floor(Math.random() * connectionsPuzzles.length)];
            await interaction.reply(
                `🔗 **Daily Connections:**\nWords: **${puzzle.group.join(', ')}**`
            );
        }

        if (choice === 'logicgrid') {
            const puzzle = logicGridPuzzles[Math.floor(Math.random() * logicGridPuzzles.length)];
            await interaction.reply(
                `🧠 **Daily Logic Puzzle:**\n${puzzle.description}`
            );
        }
    }
});

client.login(process.env.TOKEN);
