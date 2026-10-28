 // bot.js
// Main PuzzlePilot hub
// Daily menu + games + opt-in invitations

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
    ButtonStyle,
    MessageFlags
} = require('discord.js');

require('dotenv').config();

// ─────────────────────────────────────────────
// GAME MODULES
// ─────────────────────────────────────────────

const crossword = require('./crossword');
const wordladder = require('./wordladder');
const logicgrid = require('./logicgrid');
const connections = require('./connections');
const quiz = require('./quiz');
const quizContinuous = require('./quiz_continuous');
const gameInvites = require('./game_invites');
const { publishYesterdayResults } = require('./daily_leaderboards');

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
        .setDescription('Open the daily puzzle menu'),

    gameInvites.gamesChannelCommand()
].map(command => command.toJSON());

const rest = new REST({
    version: '10'
}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...');

        await rest.put(
            Routes.applicationCommands(
                process.env.CLIENT_ID
            ),
            {
                body: commands
            }
        );

        console.log('Slash commands registered.');

    } catch (error) {
        console.error(
            'Error registering slash commands:',
            error
        );
    }
})();

// ─────────────────────────────────────────────
// SAFE DISCORD INTERACTION HANDLING
// ─────────────────────────────────────────────

// Discord requires an interaction to be acknowledged
// promptly. If an acknowledgement fails or a game
// handler throws, log the error without crashing the bot.

async function reportInteractionError(interaction, label, error) {
    console.error(`PuzzlePilot interaction error (${label}):`, error);

    // Unknown/expired or already-acknowledged interactions
    // cannot safely be answered a second time.
    if (error?.code === 10062 || error?.code === 40060) {
        return;
    }

    try {
        if (!interaction.isRepliable()) {
            return;
        }

        const message =
            '⚠️ PuzzlePilot had trouble processing that action. ' +
            'Please try again.';

        if (interaction.deferred || interaction.replied) {
            await interaction.followUp({
                content: message,
                flags: MessageFlags.Ephemeral
            });
        } else {
            await interaction.reply({
                content: message,
                flags: MessageFlags.Ephemeral
            });
        }
    } catch (replyError) {
        console.error('PuzzlePilot error response failed:', replyError);
    }
}

function onInteraction(label, handler) {
    client.on('interactionCreate', interaction => {
        void Promise.resolve()
            .then(() => handler(interaction))
            .catch(error => reportInteractionError(
                interaction,
                label,
                error
            ))
            .catch(error => {
                console.error('PuzzlePilot error handler failed:', error);
            });
    });
}

// ─────────────────────────────────────────────
// GAMES CHANNEL ADMIN COMMAND
// ─────────────────────────────────────────────

onInteraction('gameschannel', async interaction => {
    if (
        interaction.isChatInputCommand() &&
        interaction.commandName === 'gameschannel'
    ) {
        await gameInvites.handleGamesChannelCommand(
            interaction
        );
    }
});

// ─────────────────────────────────────────────
// GAME INVITATIONS
// ─────────────────────────────────────────────

// Only the configured games channel receives
// announcements. The new helper handles
// opt-in settings and anti-flood protection.
//
// Announcement failures never interrupt a game.

function announceGameStart(interaction, gameKey) {
    if (
        !interaction.guild ||
        !interaction.user?.id
    ) {
        return;
    }

    void gameInvites.announcePlayed(
        interaction.guild,
        interaction.user.id,
        gameKey
    ).catch(error => {
        console.error(
            'PuzzlePilot game announcement error:',
            error
        );
    });
}

// ─────────────────────────────────────────────
// UK DATE
// ─────────────────────────────────────────────

function getUKDate() {
    return new Intl.DateTimeFormat(
        'en-GB',
        {
            timeZone: 'Europe/London',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }
    ).format(new Date());
}

// ─────────────────────────────────────────────
// DAILY RESET
// ─────────────────────────────────────────────

let lastUKDate = getUKDate();

function checkDailyReset() {
    const currentUKDate = getUKDate();

    if (currentUKDate === lastUKDate) {
        return;
    }

    lastUKDate = currentUKDate;

    // Publish the completed UK day's results without delaying puzzle resets.
    void publishYesterdayResults(client).catch(error => {
        console.error("Yesterday's leaderboard publication failed:", error);
    });

    console.log(
        `UK midnight reached: ${currentUKDate}`
    );

    console.log('Refreshing daily puzzles...');

    try {
        const newLadder =
            wordladder.generateWordLadder(
                'medium'
            );

        wordladder.setTodaysLadder(
            newLadder
        );

        console.log('Word Ladder refreshed.');

    } catch (error) {
        console.error(
            'Error refreshing Word Ladder:',
            error
        );
    }

    console.log('Daily puzzle refresh complete!');
}

setInterval(checkDailyReset, 30000);

// ─────────────────────────────────────────────
// DAILY MENU
// ─────────────────────────────────────────────

onInteraction('daily menu', async interaction => {
    if (
        !interaction.isChatInputCommand() ||
        interaction.commandName !== 'daily'
    ) {
        return;
    }

    // Acknowledge before assembling the menu so Discord
    // does not expire the command if the server is busy.
    await interaction.deferReply();

    const menu = new ActionRowBuilder()
        .addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('daily-menu')
                .setPlaceholder('Choose your puzzle')
                .addOptions([
                    {
                        label: 'Word Ladder',
                        value: 'wordladder',
                        description:
                            'Solve today’s Word Ladder'
                    },
                    {
                        label: 'Logic Grid',
                        value: 'logicgrid',
                        description:
                            'Solve today’s Logic Grid'
                    },
                    {
                        label: 'Connections',
                        value: 'connections',
                        description:
                            'Solve today’s Connections'
                    },
                    {
                        label: 'Full Crossword',
                        value: 'fullcrossword',
                        description:
                            'Play the daily crossword'
                    },
                    {
                        label: 'Daily Quiz',
                        value: 'dailyquiz',
                        description:
                            'Answer today’s 10 quiz questions'
                    },
                    {
                        label: 'Continuous Quiz',
                        value: 'continuousquiz',
                        description:
                            'Choose subjects and play as long as you like'
                    },
                    {
                        label: 'Continuous Word Ladder',
                        value: 'continuouswordladder',
                        description:
                            'Play a fresh Word Ladder anytime'
                    },
                    {
                        label: 'Continuous Crossword',
                        value: 'continuouscrossword',
                        description:
                            'Play a fresh crossword anytime'
                    },
                    {
                        label: 'Continuous Logic Grid',
                        value: 'continuouslogicgrid',
                        description:
                            'Play a fresh Logic Grid anytime'
                    },
                    {
                        label: 'Continuous Connections',
                        value: 'continuousconnections',
                        description:
                            'Play a fresh Connections puzzle anytime'
                    }
                ])
        );

    await interaction.editReply({
        content:
            '🧩 **Welcome to PuzzlePilot!**\n\n' +
            'Choose your puzzle:',
        components: [menu]
    });
});

// ─────────────────────────────────────────────
// CONTINUOUS GAME LAUNCHERS
// ─────────────────────────────────────────────

// These three games already use a Start button.
// Retaining that launcher also prevents a
// Join Now click from replacing or deleting
// the public invitation message.

async function showContinuousLauncher(
    interaction,
    gameKey,
    fromInvite = false
) {
    const launchers = {
        continuouscrossword: {
            title: '🧩 Continuous Crossword',
            description:
                'Start a fresh crossword whenever you like!',
            customId: 'cw_continuous_start',
            button: 'Start Continuous Crossword'
        },
        continuouslogicgrid: {
            title: '🧠 Continuous Logic Grid',
            description:
                'Start a fresh Logic Grid whenever you like!',
            customId: 'lg_continuous_start',
            button: 'Start Continuous Logic Grid'
        },
        continuousconnections: {
            title: '🔗 Continuous Connections',
            description:
                'Start a fresh Connections puzzle anytime!',
            customId: 'conn_continuous_start',
            button: 'Start Continuous Connections'
        }
    };

    const game = launchers[gameKey];

    if (!game) {
        return;
    }

    await interaction.reply({
        content:
            `**${game.title}**\n\n` +
            game.description,

        components: [
            new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId(
                            fromInvite
                                ? `${game.customId}_join`
                                : game.customId
                        )
                        .setLabel(game.button)
                        .setStyle(ButtonStyle.Success)
                )
        ]
    });
}

// ─────────────────────────────────────────────
// START A GAME
// ─────────────────────────────────────────────

// Used by /daily and Join Now.
//
// fromInvite prevents invitations from creating
// additional invitations when somebody joins.

async function startSelectedGame(
    interaction,
    choice,
    fromInvite = false
) {
    let started = false;

    switch (choice) {
        case 'wordladder':
            await wordladder.startDaily(interaction);
            started = true;
            break;

        case 'logicgrid':
            await logicgrid.startDaily(interaction);
            started = true;
            break;

        case 'connections':
            await connections.startDaily(interaction);
            started = true;
            break;

        case 'fullcrossword':
            await crossword.startDaily(interaction);
            started = true;
            break;

        case 'dailyquiz':
            await quiz.startDaily(interaction);
            started = true;
            break;

        case 'continuousquiz':
            await quizContinuous.startContinuous(
                interaction
            );
            started = true;
            break;

        case 'continuouswordladder':
            await wordladder.startContinuous(
                interaction
            );
            started = true;
            break;

        case 'continuouscrossword':
        case 'continuouslogicgrid':
        case 'continuousconnections':
            await showContinuousLauncher(
                interaction,
                choice,
                fromInvite
            );

            // These games are announced when the
            // player presses the actual Start button.
            break;

        default:
            return false;
    }

    if (started && !fromInvite) {
        announceGameStart(interaction, choice);
    }

    return true;
}

// ─────────────────────────────────────────────
// DAILY MENU SELECTION
// ─────────────────────────────────────────────

onInteraction('daily menu choice', async interaction => {
    if (
        !interaction.isStringSelectMenu() ||
        interaction.customId !== 'daily-menu'
    ) {
        return;
    }

    const choice = interaction.values[0];

    await startSelectedGame(
        interaction,
        choice,
        false
    );
});

// ─────────────────────────────────────────────
// JOIN NOW BUTTONS
// ─────────────────────────────────────────────

onInteraction('Join Now', async interaction => {
    if (!interaction.isButton()) {
        return;
    }

    const invitedGame = gameInvites.joinedGame(
        interaction.customId
    );

    if (!invitedGame) {
        return;
    }

    if (!interaction.guild) {
        await interaction.reply({
            content:
                'Please use Join Now in a server games channel.',
            flags: MessageFlags.Ephemeral
        });

        return;
    }

    try {
        // Each player starts their own game.
        // Never overwrite the public invitation.
        // Never create another invitation from
        // somebody pressing Join Now.

        await startSelectedGame(
            interaction,
            invitedGame,
            true
        );

    } catch (error) {
        console.error(
            'PuzzlePilot Join Now failed:',
            invitedGame,
            error
        );

        if (!interaction.replied && !interaction.deferred) {
            await interaction.reply({
                content:
                    'Sorry, that game could not start. ' +
                    'Please try `/daily`.',
                flags: MessageFlags.Ephemeral
            }).catch(console.error);

        } else if (
            interaction.deferred &&
            !interaction.replied
        ) {
            await interaction.editReply({
                content:
                    'Sorry, that game could not start. ' +
                    'Please try `/daily`.'
            }).catch(console.error);
        }
    }
});

// ─────────────────────────────────────────────
// EXISTING CONTINUOUS START BUTTONS
// ─────────────────────────────────────────────

onInteraction('continuous start buttons', async interaction => {
    if (!interaction.isButton()) {
        return;
    }

    if (
        (
            interaction.customId === 'cw_continuous_start' ||
            interaction.customId === 'cw_continuous_start_join'
        )
    ) {
        await crossword.startContinuous(
            interaction
        );

        // An invited player must not create another
        // public invitation when starting their game.
        if (interaction.customId === 'cw_continuous_start') {
            announceGameStart(
                interaction,
                'continuouscrossword'
            );
        }

        return;
    }

    if (
        (
            interaction.customId === 'lg_continuous_start' ||
            interaction.customId === 'lg_continuous_start_join'
        )
    ) {
        await logicgrid.startContinuous(
            interaction
        );

        // An invited player must not create another
        // public invitation when starting their game.
        if (interaction.customId === 'lg_continuous_start') {
            announceGameStart(
                interaction,
                'continuouslogicgrid'
            );
        }

        return;
    }

    if (
        (
            interaction.customId === 'conn_continuous_start' ||
            interaction.customId === 'conn_continuous_start_join'
        )
    ) {
        await connections.startContinuous(
            interaction
        );

        // An invited player must not create another
        // public invitation when starting their game.
        if (interaction.customId === 'conn_continuous_start') {
            announceGameStart(
                interaction,
                'continuousconnections'
            );
        }

        return;
    }
});

// ─────────────────────────────────────────────
// EXISTING GAME INTERACTION HANDLERS
// ─────────────────────────────────────────────

// Keep all existing game buttons, select menus,
// modals, answer handling and Play Again working.

onInteraction('game buttons', async interaction => {
    await crossword.handleInteraction(interaction);
    await wordladder.handleInteraction(interaction);
    await logicgrid.handleInteraction(interaction);
    await connections.handleInteraction(interaction);
    await quiz.handleInteraction(interaction);
    await quizContinuous.handleInteraction(interaction);
});

// ─────────────────────────────────────────────
// LEADERBOARD STARTUP RECOVERY
// ─────────────────────────────────────────────

// Also check after a restart, in case PuzzlePilot was offline at midnight.
client.once('ready', () => {
    void publishYesterdayResults(client).catch(error => {
        console.error('Startup leaderboard publication failed:', error);
    });
});

// ─────────────────────────────────────────────
// LOGIN
// ─────────────────────────────────────────────

client.login(process.env.TOKEN);
