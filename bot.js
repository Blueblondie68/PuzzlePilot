

const { Client, GatewayIntentBits, Partials, REST, Routes, SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
require('dotenv').config();

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
// REGISTER /daily COMMAND
// ----------------------
const commands = [
    new SlashCommandBuilder()
        .setName('daily')
        .setDescription('Open the daily puzzle menu')
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
});

// ----------------------
// DROPDOWN HANDLER
// ----------------------
client.on('interactionCreate', async interaction => {
    if (!interaction.isStringSelectMenu()) return;

    if (interaction.customId === 'daily-menu') {
        const choice = interaction.values[0];

        if (choice === 'crossword') {
            await interaction.reply({
                content: '**🧩 Daily Crossword**\nHere is today’s mini crossword:',
            });
        } else {
            await interaction.reply(`You selected: **${choice}**`);
        }
    }
});

// ----------------------
// LOGIN
// ----------------------
client.login(process.env.TOKEN);
