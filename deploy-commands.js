const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
    new SlashCommandBuilder()
        .setName('daily')
        .setDescription('Open the daily game menu')
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken("placeholder");


rest.put(
    Routes.applicationCommands("1540439382157172847"),
    { body: commands },
)
.then(() => console.log("Slash commands registered."))
.catch(console.error);

