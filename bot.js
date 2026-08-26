const { Client, GatewayIntentBits, Partials, REST, Routes, SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
require('dotenv').config();

// ----------------------
// WORD LADDER SYSTEM
// ----------------------

// 50 ladders (Batch #1)
const wordLadders = [
  ["cat", "cot", "dot", "dog"],
  ["tea", "sea", "see", "bee"],
  ["map", "mop", "pop", "pip"],
  ["fog", "fag", "bag", "bog"],
  ["ham", "him", "rim", "ram"],
  ["sun", "sin", "sip", "sap"],
  ["cow", "caw", "saw", "paw"],
  ["bat", "bet", "bed", "bad"],
  ["jam", "ram", "rim", "rim"],
  ["tin", "tan", "man", "mat"],

  // 4‑letter UK ladders
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

  // 5‑letter UK ladders
  ["stare", "share", "shark", "spark", "spare"],
  ["plant", "plane", "flane", "flame", "frame"],
  ["heart", "heard", "herd", "hard", "hand"],
  ["bread", "bream", "dream", "dread", "tread"],
  ["shore", "score", "scare", "share", "shale"],
  ["chips", "chaps", "chats", "chets", "chefs"],
  ["crisp", "crush", "brush", "brash", "brass"],
  ["scone", "scene", "scene", "scene", "shone"],
  ["pound", "sound", "round", "found", "bound"],
  ["music", "muse", "muse", "muse", "mushy"],

  // Animals theme
  ["hare", "hard", "bard", "bird"],
  ["goose", "noose", "noise", "noise", "poise"],
  ["otter", "other", "ether", "eater", "water"],
  ["horse", "house", "mouse", "mousse", "rouse"],
  ["shark", "share", "spare", "spark", "snark"],

  // Food theme
  ["bread", "bream", "cream", "creak", "break"],
  ["fruit", "fritt", "fritt", "fritt", "flint"],
  ["grape", "grave", "grate", "crate", "crane"],
  ["lemon", "demon", "demen", "demen", "women"],
  ["chips", "chops", "shops", "shots", "short"],

  // Silly ladders
  ["bop", "pop", "pip", "lip"],
  ["yap", "lap", "lop", "log"],
  ["snug", "slug", "slum", "slim"],
  ["mild", "wild", "wilt", "will"],
  ["taco", "taco", "taco", "taco"]
[
  // 3‑letter ladders
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

  // 4‑letter ladders
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

  // 5‑letter ladders
  ["stone", "stoke", "stake", "shake", "share"],
  ["flame", "frame", "crame", "crane", "brane"],
  ["spice", "slice", "slick", "click", "clock"],
  ["train", "trait", "trail", "trial", "tribal"],
  ["piano", "piano", "piano", "piano", "piano"], // silly Sue energy
  ["cider", "rider", "riper", "riper", "riper"],
  ["bread", "broad", "brood", "blood", "bloom"],
  ["light", "tight", "tithe", "tilth", "filth"],
  ["plant", "plait", "plait", "plait", "plait"],
  ["sugar", "sugor",

];[
  // 3‑letter ladders
  ["tap", "top", "cop", "cup"],
  ["bar", "ban", "can", "con"],
  ["pit", "pin", "pan", "man"],
  ["fog", "fig", "fin", "fun"],
  ["lip", "lit", "lot", "hot"],
  ["ram", "ran", "can", "con"],
  ["sip", "sap", "lap", "lop"],
  ["dog", "dig", "fig", "fin"],
  ["cow", "cog", "log", "lag"],
  ["jam", "jam", "jam", "jam"],

  // 4‑letter ladders
  ["milk", "mill", "mild", "wild"],
  ["sand", "sang", "song", "long"],
  ["bake", "bare", "barb", "barn"],
  ["tall", "toll", "tool", "fool"],
  ["cold", "bold", "bald", "ball"],
  ["lamp", "lamb", "limb", "lime"],
  ["park", "part", "port", "post"],
  ["wave", "wane", "wine", "wire"],
  ["mint", "mine", "mane", "lane"],
  ["leaf", "lead", "load", "loan"],

  // 5‑letter ladders
  ["stone", "stony", "story", "store", "score"],
  ["flame", "blame", "blare", "flare", "flair"],
  ["spice", "slice", "slick", "slack", "stack"],
  ["train", "trait", "trail", "trial", "trill"],
  ["cider", "rider", "riper", "riper", "riper"],
  ["bread", "bream", "cream", "creak", "break"],
  ["light", "tight", "tithe", "tilth", "filth"],
  ["plant", "plank", "blank", "bland", "brand"],
  ["sugar", "suggy", "buggy", "baggy", "raggy"],
  ["piano", "piano", "piano", "piano", "piano"],

  // Animals theme
  ["bear", "bead", "head", "herd"],
  ["lion", "loan", "loon", "moon"],
  ["mole", "male", "mile", "mild"],
  ["duck", "dusk", "disk", "dish"],
  ["wolf", "wool", "pool", "poll"],

  // Food theme
  ["cake", "cane", "lane", "lame"],
  ["pear", "peal", "peel", "feel"],
  ["meat", "mean", "bean", "bead"],
  ["corn", "born", "barn", "barb"],
  ["roll", "poll", "pole", "pale"],

  // Weather theme
  ["rain", "rail", "tail", "tall"],
  ["wind", "wink", "sink", "sank"],
  ["snow", "slow", "slot", "slat"],
  ["hail", "tail", "tall", "toll"],
  ["mist", "mint", "mine", "mind"],

  // Silly ladders
  ["blob", "blab", "slab", "slam"],
  ["yeti", "yeti", "yeti", "yeti"],
  ["zoom", "boom", "book", "cook"],
  ["flap", "flip", "slip", "slit"],
  ["tuba", "tuba", "tuba", "tuba"]

][
  // 3‑letter ladders
  ["tap", "lap", "lip", "sip"],
  ["bar", "bat", "bit", "sit"],
  ["pit", "pet", "get", "got"],
  ["fog", "fop", "pop", "pip"],
  ["lip", "lop", "log", "dog"],
  ["ram", "rim", "rip", "sip"],
  ["sip", "sap", "lap", "lop"],
  ["dog", "dig", "fig", "fin"],
  ["cow", "caw", "saw", "paw"],
  ["jam", "jab", "lab", "lob"],

  // 4‑letter ladders
  ["milk", "silk", "sill", "sell"],
  ["sand", "send", "sent", "rent"],
  ["bake", "bike", "bite", "site"],
  ["tall", "tale", "sale", "sage"],
  ["cold", "cord", "card", "ward"],
  ["lamp", "lamb", "limb", "lime"],
  ["park", "pork", "port", "sort"],
  ["wave", "ware", "care", "core"],
  ["mint", "mind", "bind", "band"],
  ["leaf", "leak", "peak", "peck"],

  // 5‑letter ladders
  ["stone", "stoke", "stake", "shake", "share"],
  ["flame", "frame", "crame", "crane", "brane"],
  ["spice", "slice", "slick", "click", "clock"],
  ["train", "trait", "trail", "trial", "tribal"],
  ["cider", "rider", "riper", "riper", "riper"],
  ["bread", "bream", "dream", "dread", "tread"],
  ["light", "tight", "tithe", "tilth", "filth"],
  ["plant", "plait", "plait", "plait", "plait"],
  ["sugar", "sugor", "sugor", "sugor", "suggy"],
  ["piano", "piano", "piano", "piano", "piano"],

  // Animals theme
  ["bear", "bead", "head", "herd"],
  ["lion", "loin", "loan", "lean"],
  ["mole", "male", "mile", "mild"],
  ["duck", "dusk", "disk", "dish"],
  ["wolf", "golf", "gold", "cold"],

  // Food theme
  ["cake", "cane", "lane", "lame"],
  ["pear", "peal", "peel", "feel"],
  ["meat", "mean", "bean", "bead"],
  ["corn", "born", "barn", "barb"],
  ["roll", "poll", "pole", "pale"],

  // Weather theme
  ["rain", "rail", "tail", "tall"],
  ["wind", "wink", "sink", "sank"],
  ["snow", "slow", "slot", "slat"],
  ["hail", "tail", "tall", "toll"],
  ["mist", "mint", "mine", "mind"],

  // Silly ladders
  ["blob", "blab", "slab", "slam"],
  ["yeti", "yeti", "yeti", "yeti"],
  ["zoom", "boom", "book", "cook"],
  ["flap", "flip", "slip", "slit"],
  ["tuba", "tuba", "tuba", "tuba"]
[
  // 3‑letter ladders
  ["tap", "tip", "sip", "sap"],
  ["bar", "car", "cat", "cot"],
  ["pit", "pat", "pan", "man"],
  ["fog", "fag", "bag", "bog"],
  ["lip", "lap", "sap", "sip"],
  ["ram", "cam", "cap", "cup"],
  ["sip", "sip", "sip", "sip"], // chaos
  ["dog", "dot", "cot", "cat"],
  ["cow", "how", "hot", "hat"],
  ["jam", "jam", "jam", "jam"],

  // 4‑letter ladders
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

  // 5‑letter ladders
  ["stone", "stony", "story", "store", "score"],
  ["flame", "blame", "blare", "flare", "flair"],
  ["spice", "slice", "slick", "slack", "stack"],
  ["train", "trait", "trail", "trial", "trill"],
  ["cider", "rider", "riper", "riper", "riper"],
  ["bread", "bream", "cream", "creak", "break"],
  ["light", "tight", "tithe", "tilth", "filth"],
  ["plant", "plank", "blank", "bland", "brand"],
  ["sugar", "suggy", "buggy", "baggy", "raggy"],
  ["piano", "piano", "piano", "piano", "piano"],

  // Animals theme
  ["bear", "bead", "head", "herd"],
  ["lion", "loan", "loon", "moon"],
  ["mole", "male", "mile", "mild"],
  ["duck", "dusk", "disk", "dish"],
  ["wolf", "wool", "pool", "poll"],

  // Food theme
  ["cake", "cane", "lane", "lame"],
  ["pear", "peal", "peel", "feel"],
  ["meat", "mean", "bean", "bead"],
  ["corn", "born", "barn", "barb"],
  ["roll", "poll", "pole", "pale"],

  // Weather theme
  ["rain", "rail", "tail", "tall"],
  ["wind", "wink", "sink", "sank"],
  ["snow", "slow", "slot", "slat"],
  ["hail", "tail", "tall", "toll"],
  ["mist", "mint", "mine", "mind"],

  // Silly ladders
  ["blob", "blab", "slab", "slam"],
  ["yeti", "yeti", "yeti", "yeti"],
  ["zoom", "boom", "book", "cook"],
  ["flap", "flip", "slip", "slit"],
  ["tuba", "tuba", "tuba", "tuba"]
[
  // 3‑letter ladders
  ["tap", "tip", "sip", "sir"],
  ["bar", "bar", "bar", "bar"], 
  ["pit", "pit", "pit", "pit"], 
  ["fog", "fig", "fin", "fun"],
  ["lip", "lip", "lip", "lip"],
  ["ram", "ram", "ram", "ram"],
  ["sip", "sip", "sip", "sip"],
  ["dog", "bog", "bag", "rag"],
  ["cow", "cow", "cow", "cow"],
  ["jam", "jam", "jam", "jam"],

  // 4‑letter ladders
  ["milk", "milf", "miff", "miff"], 
  ["sand", "sang", "song", "long"],
  ["bake", "bare", "barb", "barn"],
  ["tall", "toll", "tool", "fool"],
  ["cold", "gold", "golf", "wolf"],
  ["lamp", "lame", "lime", "line"],
  ["park", "perk", "peek", "peel"],
  ["wave", "wane", "wine", "wire"],
  ["mint", "mine", "mane", "lane"],
  ["leaf", "lead", "load", "loan"],

  // 5‑letter ladders
  ["stone", "stole", "stole", "stole", "stole"],
  ["flame", "frame", "crane", "brane", "brand"],
  ["spice", "slice", "slick", "slack", "stack"],
  ["train", "trait", "trail", "trial", "trill"],
  ["cider", "rider", "riper", "riper", "riper"],
  ["bread", "bream", "cream", "creak", "break"],
  ["light", "tight", "tithe", "tilth", "filth"],
  ["plant", "plank", "blank", "bland", "brand"],
  ["sugar", "suggy", "buggy", "baggy", "raggy"],
  ["piano", "piano", "piano", "piano", "piano"],

  // Animals theme
  ["bear", "bead", "head", "herd"],
  ["lion", "loan", "loon", "moon"],
  ["mole", "male", "mile", "mild"],
  ["duck", "dusk", "disk", "dish"],
  ["wolf", "wool", "pool", "poll"],

  // Food theme
  ["cake", "cane", "lane", "lame"],
  ["pear", "peal", "peel", "feel"],
  ["meat", "mean", "bean", "bead"],
  ["corn", "born", "barn", "barb"],
  ["roll", "poll", "pole", "pale"],

  // Weather theme
  ["rain", "rail", "tail", "tall"],
  ["wind", "wink", "sink", "sank"],
  ["snow", "slow", "slot", "slat"],
  ["hail", "tail", "tall", "toll"],
  ["mist", "mint", "mine", "mind"],

  // Silly ladders (NO TUBA)
  ["blob", "blab", "slab", "slam"],
  ["yeti", "yeti", "yeti", "yeti"],
  ["zoom", "boom", "book", "cook"],
  ["flap", "flip", "slip", "slit"],
  ["bop", "pop", "pip", "lip"]
[
  // 3‑letter ladders
  ["tap", "tap", "tap", "tap"],
  ["bar", "bar", "bar", "bar"],
  ["pit", "pit", "pat", "pan"],
  ["fog", "fog", "fag", "bag"],
  ["lip", "lip", "lap", "sap"],
  ["ram", "ram", "ran", "can"],
  ["sip", "sip", "sap", "lap"],
  ["dog", "dog", "dot", "cot"],
  ["cow", "cow", "caw", "saw"],
  ["jam", "jam", "jab", "lab"],

  // 4‑letter ladders
  ["milk", "milk", "mill", "mild"],
  ["sand", "sand", "send", "sent"],
  ["bake", "bake", "bare", "barb"],
  ["tall", "tall", "tale", "sale"],
  ["cold", "cold", "cord", "card"],
  ["lamp", "lamp", "lamb", "limb"],
  ["park", "park", "pork", "port"],
  ["wave", "wave", "wane", "wine"],
  ["mint", "mint", "mind", "bind"],
  ["leaf", "leaf", "leak", "peak"],

  // 5‑letter ladders
  ["stone", "stone", "stoke", "stake", "shake"],
  ["flame", "flame", "frame", "crame", "crane"],
  ["spice", "spice", "slice", "slick", "click"],
  ["train", "train", "trait", "trail", "trial"],
  ["cider", "cider", "rider", "riper", "riper"],
  ["bread", "bread", "bream", "dream", "dread"],
  ["light", "light", "tight", "tithe", "tilth"],
  ["plant", "plant", "plank", "blank", "bland"],
  ["sugar", "sugar", "suggy", "buggy", "baggy"],
  ["piano", "piano", "piano", "piano", "piano"],

  // Animals theme
  ["bear", "bear", "bead", "head"],
  ["lion", "lion", "loin", "loan"],
  ["mole", "mole", "male", "mile"],
  ["duck", "duck", "dusk", "disk"],
  ["wolf", "wolf", "wool", "pool"],

  // Food theme
  ["cake", "cake", "cane", "lane"],
  ["pear", "pear", "peal", "peel"],
  ["meat", "meat", "mean", "bean"],
  ["corn", "corn", "born", "barn"],
  ["roll", "roll", "poll", "pole"],

  // Weather theme
  ["rain", "rain", "rail", "tail"],
  ["wind", "wind", "wink", "sink"],
  ["snow", "snow", "slow", "slot"],
  ["hail", "hail", "tail", "tall"],
  ["mist", "mist", "mint", "mine"],

  // Silly ladders (no repeats)
  ["blob", "blob", "blab", "slab"],
  ["yeti", "yeti", "yeti", "yeti"],
  ["zoom", "zoom", "boom", "book"],
  ["flap", "flap", "flip", "slip"],
  ["bop", "bop", "pop", "pip"]
[
  // 3‑letter ladders
  ["tap", "tap", "tip", "sip"],
  ["bar", "car", "cat", "cot"],
  ["pit", "pat", "pan", "man"],
  ["fog", "fop", "pop", "pip"],
  ["lip", "lit", "lot", "hot"],
  ["ram", "ran", "can", "con"],
  ["sip", "sap", "lap", "lop"],
  ["dog", "dig", "fig", "fin"],
  ["cow", "cog", "log", "lag"],
  ["jam", "jab", "lab", "lob"],

  // 4‑letter ladders
  ["milk", "mill", "mild", "wild"],
  ["sand", "sane", "lane", "lame"],
  ["bake", "bare", "barb", "barn"],
  ["tall", "toll", "tool", "fool"],
  ["cold", "bold", "bald", "ball"],
  ["lamp", "lame", "lime", "line"],
  ["park", "perk", "peek", "peel"],
  ["wave", "wane", "wine", "wire"],
  ["mint", "mine", "mane", "lane"],
  ["leaf", "lead", "load", "loan"],

  // 5‑letter ladders
  ["stone", "stole", "stole", "stole", "stole"],
  ["flame", "frame", "crane", "brane", "brand"],
  ["spice", "slice", "slick", "slack", "stack"],
  ["train", "trait", "trail", "trial", "trill"],
  ["cider", "rider", "riper", "riper", "riper"],
  ["bread", "bream", "cream", "creak", "break"],
  ["light", "tight", "tithe", "tilth", "filth"],
  ["plant", "plank", "blank", "bland", "brand"],
  ["sugar", "suggy", "buggy", "baggy", "raggy"],
  ["piano", "piano", "piano", "piano", "piano"],

  // Animals theme
  ["bear", "bead", "head", "herd"],
  ["lion", "loan", "loon", "moon"],
  ["mole", "male", "mile", "mild"],
  ["duck", "dusk", "disk", "dish"],
  ["wolf", "wool", "pool", "poll"],

  // Food theme
  ["cake", "cane", "lane", "lame"],
  ["pear", "peal", "peel", "feel"],
  ["meat", "mean", "bean", "bead"],
  ["corn", "born", "barn", "barb"],
  ["roll", "poll", "pole", "pale"],

  // Weather theme
  ["rain", "rail", "tail", "tall"],
  ["wind", "wink", "sink", "sank"],
  ["snow", "slow", "slot", "slat"],
  ["hail", "tail", "tall", "toll"],
  ["mist", "mint", "mine", "mind"],

  // Silly ladders (no repeats)
  ["blob", "blab", "slab", "slam"],
  ["yeti", "yeti", "yeti", "yeti"],
  ["zoom", "boom", "book", "cook"],
  ["flap", "flip", "slip", "slit"],
  ["bop", "pop", "pip", "lip"]
[
  // 3‑letter ladders (fresh)
  ["tap", "tar", "far", "fat"],
  ["bar", "bor", "bot", "bat"],
  ["pit", "pip", "lip", "lap"],
  ["fog", "fig", "fin", "fun"],
  ["lip", "lop", "log", "dog"],
  ["ram", "rim", "rib", "rob"],
  ["sip", "sir", "sod", "sad"],
  ["dog", "dig", "big", "bag"],
  ["cow", "caw", "cay", "day"],
  ["jam", "jam", "jam", "jam"],

  // 4‑letter ladders (fresh)
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

  // 5‑letter ladders (fresh)
  ["stone", "stony", "story", "store", "score"],
  ["flame", "frame", "frank", "crank", "crane"],
  ["spice", "slice", "slick", "slack", "stack"],
  ["train", "trait", "trail", "trial", "trill"],
  ["cider", "cider", "cider", "rider", "riper"],
  ["bread", "broad", "brood", "blood", "bloom"],
  ["light", "tight", "tithe", "tilth", "filth"],
  ["plant", "plait", "plait", "plait", "plait"],
  ["sugar", "sugar", "suggy", "buggy", "baggy"],
  ["piano", "piano", "piano", "piano", "piano"],

  // UK‑themed ladders (fresh)
  ["kent", "rent", "rend", "send"],
  ["york", "fork", "form", "farm"],
  ["bath", "math", "moth", "both"],
  ["chip", "chap", "char", "chair"],
  ["pubs", "puns", "runs", "rune"],

  // Animals theme (fresh)
  ["bear", "beat", "beet", "feet"],
  ["lion", "lino", "line", "lane"],
  ["mole", "mole", "mole", "male"],
  ["duck", "luck", "lick", "link"],
  ["wolf", "wool", "pool", "poll"],

  // Food theme (fresh)
  ["cake", "coke", "core", "cure"],
  ["pear", "pear", "peal", "peel"],
  ["meat", "mead", "head", "heal"],
  ["corn", "cord", "card", "ward"],
  ["roll", "role", "pole", "pale"],

  // Weather theme (fresh)
  ["rain", "rail", "tail", "tall"],
  ["wind", "wild", "wilt", "will"],
  ["snow", "snob", "snob", "snub"],
  ["hail", "hall", "ball", "bail"],
  ["mist", "must", "musk", "mask"],

  // Silly ladders (fresh, no repeats)
  ["blob", "glob", "glow", "slow"],
  ["yeti", "yeti", "yeti", "yeti"],
  ["zoom", "loom", "loom", "loom"],
  ["flap", "flan", "plan", "plan"],
  ["bop", "bop", "bop", "bop"]
]

]

]

]

]

]



// Pick a random ladder
function generateWordLadder() {
  return wordLadders[Math.floor(Math.random() * wordLadders.length)];
}

// Store today's puzzle
let todaysLadder = generateWordLadder();
let todaysAnswer = todaysLadder[todaysLadder.length - 1];

// ----------------------
// CLIENT SETUP
// ----------------------
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [Partials.Channel]
});

// ----------------------
// READY EVENT
// ----------------------
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// ----------------------
// REGISTER /daily AND /solve COMMANDS
// ----------------------
const commands = [
    new SlashCommandBuilder()
        .setName('daily')
        .setDescription('Open the daily puzzle menu'),

    new SlashCommandBuilder()
        .setName('solve')
        .setDescription('Submit your answer for today’s puzzle')
        .addStringOption(option =>
            option.setName('answer')
                .setDescription('Your final word')
                .setRequired(true)
        )
].map(cmd => cmd.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);


(async () => {
    try {
        console.log('Registering slash commands...');
        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands }
        );
        console.log('Slash commands registered.');
    } catch (error) {
        console.error(error);
    }
})();

// ----------------------
// /daily COMMAND HANDLER
// ----------------------
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'daily') {
        const menu = new StringSelectMenuBuilder()
            .setCustomId('daily-menu')
            .setPlaceholder('Choose your daily puzzle')
            .addOptions([
                {
                    label: 'Word Ladder',
                    value: 'wordladder'
                },
                {
                    label: 'Crossword',
                    value: 'crossword'
                },
                {
                    label: 'Connections',
                    value: 'connections'
                },
                {
                    label: 'Logic Grid',
                    value: 'logicgrid'
                }
            ]);

        const row = new ActionRowBuilder().addComponents(menu);

        await interaction.reply({
            content: '🧠 **Daily Puzzle Menu**\nChoose your puzzle:',
            components: [row]
        });
    }

    if (interaction.commandName === 'solve') {
        const userAnswer = interaction.options.getString('answer').toLowerCase();

        if (userAnswer === todaysAnswer) {
            await interaction.reply(`🎉 Correct! The final word was **${todaysAnswer.toUpperCase()}**.`);
        } else {
            await interaction.reply(`❌ Not quite. Try again!`);
        }
    }
});

// ----------------------
// DROPDOWN HANDLER
// ----------------------
client.on('interactionCreate', async interaction => {
    if (!interaction.isStringSelectMenu()) return;

    if (interaction.customId === 'daily-menu') {
        const choice = interaction.values[0];

        if (choice === 'wordladder') {
            await interaction.reply({
                content:
                    `🧩 **Daily Word Ladder**\n` +
                    `Start: **${todaysLadder[0].toUpperCase()}**\n` +
                    `End: **${todaysAnswer.toUpperCase()}**\n\n` +
                    `Use **/solve** to submit your final word!`
            });
        }

        else if (choice === 'crossword') {
            await interaction.reply({
                content: '**🧩 Daily Crossword**\nHere is today’s mini crossword:',
            });
        }

        else {
            await interaction.reply(`You selected: **${choice}**`);
        }
    }
});

// ----------------------
// LOGIN
// ----------------------
client.login(process.env.DISCORD_TOKEN);

