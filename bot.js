// bot.js
// Main PuzzlePilot hub
// Daily menu + Crossword + Word Ladder + Logic Grid + Connections + Quiz

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

// Load game modules
const crossword = require('./crossword');
const wordladder = require('./wordladder');
const logicgrid = require('./logicgrid');
const connections = require('./connections');
const quiz = require('./quiz');

// ─────────────────────────────────────────────
// CLIENT SETUP
// ─────────────────────────────────────────────

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.Channel
    ]
});

// ─────────────────────────────────────────────
// SLASH COMMANDS
// ─────────────────────────────────────────────

const commands = [
    new SlashCommandBuilder()
        .setName('daily')
        .setDescription(
            'Open the daily puzzle menu'
        )
].map(
    command =>
        command.toJSON()
);

const rest =
    new REST({
        version: '10'
    }).setToken(
        process.env.TOKEN
    );

(async () => {
    try {
        console.log(
            'Registering slash commands...'
        );

        await rest.put(
            Routes.applicationCommands(
                process.env.CLIENT_ID
            ),
            {
                body:
                    commands
            }
        );

        console.log(
            'Slash commands registered.'
        );

    } catch (error) {
        console.error(
            'Error registering slash commands:',
            error
        );
    }
})();

// ─────────────────────────────────────────────
// UK DATE
// ─────────────────────────────────────────────

function getUKDate() {
    return new Intl.DateTimeFormat(
        'en-GB',
        {
            timeZone:
                'Europe/London',
            year:
                'numeric',
            month:
                '2-digit',
            day:
                '2-digit'
        }
    ).format(
        new Date()
    );
}

// ─────────────────────────────────────────────
// DAILY RESET
// ─────────────────────────────────────────────
//
// Word Ladder currently uses a stored daily puzzle.
//
// Connections and Logic Grid calculate their own
// daily puzzle from the current UK date.
//
// Quiz also calculates its Daily Quiz from the
// current UK date when a player starts it.

let lastUKDate =
    getUKDate();

function checkDailyReset() {
    const currentUKDate =
        getUKDate();

    if (
        currentUKDate ===
        lastUKDate
    ) {
        return;
    }

    lastUKDate =
        currentUKDate;

    console.log(
        `UK midnight reached: ${currentUKDate}`
    );

    console.log(
        'Refreshing daily puzzles...'
    );

    try {
        const newLadder =
            wordladder.generateWordLadder(
                'medium'
            );

        wordladder.setTodaysLadder(
            newLadder
        );

        console.log(
            'Word Ladder refreshed.'
        );

    } catch (error) {
        console.error(
            'Error refreshing Word Ladder:',
            error
        );
    }

    console.log(
        'Daily puzzle refresh complete!'
    );
}

setInterval(
    checkDailyReset,
    30000
);

// ─────────────────────────────────────────────
// DAILY MENU
// ─────────────────────────────────────────────

client.on(
    'interactionCreate',
    async interaction => {

        if (
            !interaction.isChatInputCommand()
        ) {
            return;
        }

        if (
            interaction.commandName !==
            'daily'
        ) {
            return;
        }

        const menu =
            new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId(
                            'daily-menu'
                        )
                        .setPlaceholder(
                            'Choose your puzzle'
                        )
                        .addOptions([
                            {
                                label:
                                    'Word Ladder',
                                value:
                                    'wordladder',
                                description:
                                    'Solve today’s Word Ladder'
                            },
                            {
                                label:
                                    'Logic Grid',
                                value:
                                    'logicgrid',
                                description:
                                    'Solve today’s Logic Grid'
                            },
                            {
                                label:
                                    'Connections',
                                value:
                                    'connections',
                                description:
                                    'Solve today’s Connections'
                            },
                            {
                                label:
                                    'Full Crossword',
                                value:
                                    'fullcrossword',
                                description:
                                    'Play the daily crossword'
                            },
                            {
                                label:
                                    'Daily Quiz',
                                value:
                                    'dailyquiz',
                                description:
                                    'Answer today’s 10 quiz questions'
                            },
                            {
                                label:
                                    'Continuous Word Ladder',
                                value:
                                    'continuouswordladder',
                                description:
                                    'Play a fresh Word Ladder anytime'
                            },
                            {
                                label:
                                    'Continuous Crossword',
                                value:
                                    'continuouscrossword',
                                description:
                                    'Play a fresh crossword anytime'
                            },
                            {
                                label:
                                    'Continuous Logic Grid',
                                value:
                                    'continuouslogicgrid',
                                description:
                                    'Play a fresh Logic Grid anytime'
                            },
                            {
                                label:
                                    'Continuous Connections',
                                value:
                                    'continuousconnections',
                                description:
                                    'Play a fresh Connections puzzle anytime'
                            }
                        ])
                );

        await interaction.reply({
            content:
                '🧩 **Welcome to PuzzlePilot!**\n\n' +
                'Choose your puzzle:',
            components: [
                menu
            ]
        });
    }
);

// ─────────────────────────────────────────────
// DAILY MENU SELECTION
// ─────────────────────────────────────────────

client.on(
    'interactionCreate',
    async interaction => {

        if (
            !interaction.isStringSelectMenu()
        ) {
            return;
        }

        if (
            interaction.customId !==
            'daily-menu'
        ) {
            return;
        }

        const choice =
            interaction.values[0];

        // ─────────────────────────────────────
        // DAILY WORD LADDER
        // ─────────────────────────────────────

        if (
            choice ===
            'wordladder'
        ) {
            await wordladder.startDaily(
                interaction
            );

            return;
        }

        // ─────────────────────────────────────
        // DAILY LOGIC GRID
        // ─────────────────────────────────────

        if (
            choice ===
            'logicgrid'
        ) {
            await logicgrid.startDaily(
                interaction
            );

            return;
        }

        // ─────────────────────────────────────
        // DAILY CONNECTIONS
        // ─────────────────────────────────────

        if (
            choice ===
            'connections'
        ) {
            await connections.startDaily(
                interaction
            );

            return;
        }

        // ─────────────────────────────────────
        // DAILY CROSSWORD
        // ─────────────────────────────────────

        if (
            choice ===
            'fullcrossword'
        ) {
            await crossword.startDaily(
                interaction
            );

            return;
        }

        // ─────────────────────────────────────
        // DAILY QUIZ
        // ─────────────────────────────────────

        if (
            choice ===
            'dailyquiz'
        ) {
            await quiz.startDaily(
                interaction
            );

            return;
        }

        // ─────────────────────────────────────
        // CONTINUOUS WORD LADDER
        // ─────────────────────────────────────

        if (
            choice ===
            'continuouswordladder'
        ) {
            await wordladder.startContinuous(
                interaction
            );

            return;
        }

        // ─────────────────────────────────────
        // CONTINUOUS CROSSWORD
        // ─────────────────────────────────────

        if (
            choice ===
            'continuouscrossword'
        ) {
            await interaction.reply({
                content:
                    '🧩 **Continuous Crossword**\n\n' +
                    'Start a fresh crossword whenever you like!',
                components: [
                    new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId(
                                    'cw_continuous_start'
                                )
                                .setLabel(
                                    'Start Continuous Crossword'
                                )
                                .setStyle(
                                    ButtonStyle.Success
                                )
                        )
                ]
            });

            return;
        }

        // ─────────────────────────────────────
        // CONTINUOUS LOGIC GRID
        // ─────────────────────────────────────

        if (
            choice ===
            'continuouslogicgrid'
        ) {
            await interaction.reply({
                content:
                    '🧠 **Continuous Logic Grid**\n\n' +
                    'Start a fresh Logic Grid whenever you like!',
                components: [
                    new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId(
                                    'lg_continuous_start'
                                )
                                .setLabel(
                                    'Start Continuous Logic Grid'
                                )
                                .setStyle(
                                    ButtonStyle.Success
                                )
                        )
                ]
            });

            return;
        }

        // ─────────────────────────────────────
        // CONTINUOUS CONNECTIONS
        // ─────────────────────────────────────

        if (
            choice ===
            'continuousconnections'
        ) {
            await interaction.reply({
                content:
                    '🔗 **Continuous Connections**\n\n' +
                    'Start a fresh Connections puzzle whenever you like!',
                components: [
                    new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId(
                                    'conn_continuous_start'
                                )
                                .setLabel(
                                    'Start Continuous Connections'
                                )
                                .setStyle(
                                    ButtonStyle.Success
                                )
                        )
                ]
            });

            return;
        }
    }
);

// ─────────────────────────────────────────────
// BUTTON HANDLERS
// ─────────────────────────────────────────────

client.on(
    'interactionCreate',
    async interaction => {

        // ─────────────────────────────────────
        // CONTINUOUS CROSSWORD START
        // ─────────────────────────────────────

        if (
            interaction.isButton() &&
            interaction.customId ===
                'cw_continuous_start'
        ) {
            await crossword.startContinuous(
                interaction
            );

            return;
        }

        // ─────────────────────────────────────
        // CONTINUOUS LOGIC GRID START
        // ─────────────────────────────────────

        if (
            interaction.isButton() &&
            interaction.customId ===
                'lg_continuous_start'
        ) {
            await logicgrid.startContinuous(
                interaction
            );

            return;
        }

        // ─────────────────────────────────────
        // CONTINUOUS CONNECTIONS START
        // ─────────────────────────────────────

        if (
            interaction.isButton() &&
            interaction.customId ===
                'conn_continuous_start'
        ) {
            await connections.startContinuous(
                interaction
            );

            return;
        }

        // ─────────────────────────────────────
        // CROSSWORD
        // ─────────────────────────────────────

        await crossword.handleInteraction(
            interaction
        );

        // ─────────────────────────────────────
        // WORD LADDER
        // ─────────────────────────────────────

        await wordladder.handleInteraction(
            interaction
        );

        // ─────────────────────────────────────
        // LOGIC GRID
        // ─────────────────────────────────────

        await logicgrid.handleInteraction(
            interaction
        );

        // ─────────────────────────────────────
        // CONNECTIONS
        // ─────────────────────────────────────

        await connections.handleInteraction(
            interaction
        );

        // ─────────────────────────────────────
        // QUIZ
        // ─────────────────────────────────────

        await quiz.handleInteraction(
            interaction
        );
    }
);

// ─────────────────────────────────────────────
// LOGIN
// ─────────────────────────────────────────────

client.login(
    process.env.TOKEN
);
