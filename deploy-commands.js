require('dotenv').config();
const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
    new SlashCommandBuilder()
        .setName('crossword-leaderboard')
        .setDescription('Show today’s crossword leaderboard'),

    new SlashCommandBuilder()
        .setName('crossword-stats')
        .setDescription('Show your crossword stats'),
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

rest.put(
    Routes.applicationCommands("1540439382157172847"),
    { body: commands },
)
.then(() => console.log("Slash commands registered."))
.catch(console.error);
