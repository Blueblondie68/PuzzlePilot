// bot.js
// Main puzzle hub: daily menu + crossword + word ladder + logic grid + connections

const {
    Client,
    GatewayIntentBits,
    Partials,
    REST,
    Routes,
    SlashCommandBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder,
    ButtonBuilder,
    ButtonStyle
} = require('discord.js');

require('dotenv').config();
const fs = require('fs');

// Load game modules
const crossword = require('./crossword');
const wordladder = require('./wordladder');
const logicgrid = require('./logicgrid');
const connections = require('./connections');

// ─────────────────────────────────────────────
// CLIENT SETUP
// ─────────────────────────────────────────────
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [Partials.Channel]
});

// ─────────────────────────────────────────────
// SLASH COMMANDS
// ─────────────────────────────────────────────
const commands = [
    new SlashCommandBuilder()
        .setName('daily')
        .setDescription('Open the daily puzzle menu'),
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

// ─────────────────────────────────────────────
// DAILY RESET (WORD LADDER ONLY FOR NOW)
// ─────────────────────────────────────────────
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
        const newLadder = wordladder.generateWordLadder("medium");
        wordladder.setTodaysLadder(newLadder);
        console.log("Daily puzzles refreshed!");
        scheduleDailyReset();
    }, msUntilMidnight);
}


scheduleDailyReset();

// ─────────────────────────────────────────────
// DAILY MENU
// ─────────────────────────────────────────────
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
                        label: 'Logic Grid',
                        value: 'logicgrid',
                        description: 'Solve a short logic puzzle'
                    },
                    {
                        label: 'Connections',
                        value: 'connections',
                        description: 'NYT-style 16-tile Connections'
                    },
                    {
                        label: 'Full Crossword',
                        value: 'fullcrossword',
                        description: 'Play the full daily crossword'
                    },
                    {
                        label: 'Continuous Crossword',
                        value: 'continuouscrossword',
                        description: 'Play a fresh crossword anytime'
                    }
                ])
        );

        await interaction.reply({
            content: '🧩 **Choose your daily puzzle:**',
            components: [menu]
        });
    }
});

// ─────────────────────────────────────────────
// DAILY MENU SELECTION
// ─────────────────────────────────────────────
client.on('interactionCreate', async interaction => {
    if (!interaction.isStringSelectMenu()) return;
    if (interaction.customId !== 'daily-menu') return;

    const choice = interaction.values[0];

    if (choice === 'wordladder') {
        await wordladder.startDaily(interaction);
    }

    if (choice === 'logicgrid') {
        await logicgrid.startLogicGrid(interaction);
    }

    if (choice === 'connections') {
        await connections.startDaily(interaction);
    }

    if (choice === 'fullcrossword') {
        await interaction.reply(
            `🧩 **Daily Full Crossword**\n(Coming soon using the same engine as Continuous Crossword!)`
        );
    }

    if (choice === 'continuouscrossword') {
        await interaction.reply({
            content: '🧩 **Continuous Crossword**\nClick the button below to start a fresh puzzle!',
            components: [
                new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setCustomId('cw_continuous_start')
                        .setLabel('Start Continuous Crossword')
                        .setStyle(ButtonStyle.Success)
                )
            ]
        });
    }
});

// ─────────────────────────────────────────────
// BUTTON + MODAL HANDLERS
// ─────────────────────────────────────────────
client.on('interactionCreate', async interaction => {

    // Continuous crossword start button
    if (interaction.isButton() && interaction.customId === 'cw_continuous_start') {
        await crossword.startCrossword(interaction);
        return;
    }

    // Crossword buttons + modals
    await crossword.handleInteraction(interaction);

    // Word Ladder buttons + modals
    await wordladder.handleInteraction(interaction);

    // Logic Grid buttons + modals
    await logicgrid.handleInteraction(interaction);

    // Connections buttons
    await connections.handleInteraction(interaction);
});

// ─────────────────────────────────────────────
// LOGIN
// ─────────────────────────────────────────────
client.login(process.env.TOKEN);
