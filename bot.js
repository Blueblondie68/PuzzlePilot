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



// Pick a random ladder
function generateWordLadder() {
  return wordLadders[Math.floor(Math.random() * wordLadders.length)];
}

// Store today's puzzle
let todaysLadder = generateWordLadder();
let todaysAnswer = todaysLadder[todaysLadder.length - 1];
// ----------------------
// DAILY RESET AT MIDNIGHT
// ----------------------
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
        // Pick a new ladder at midnight
        todaysLadder = generateWordLadder();
        todaysAnswer = todaysLadder[todaysLadder.length - 1];

        console.log("🔄 Daily puzzle refreshed!");

        // Schedule again for the next day
        scheduleDailyReset();
    }, msUntilMidnight);
}

// Start the daily reset timer
scheduleDailyReset();

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
    `Steps: **${todaysLadder.length} words**\n\n` +
    `Submit your full ladder using /solve`

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





