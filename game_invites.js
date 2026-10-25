 // game_invites.js
// PuzzlePilot - opt-in game announcements and Join Now buttons
// Admins choose a channel. No channel = no announcements.
// This helper NEVER sends a message when it is merely imported.

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ChannelType,
    MessageFlags,
    PermissionFlagsBits,
    SlashCommandBuilder
} = require('discord.js');

const { getDatabaseClient } = require('./quiz_database');

// Keys match the existing /daily menu values in bot.js.
const GAMES = Object.freeze({
    wordladder: 'Word Ladder',
    logicgrid: 'Logic Grid',
    connections: 'Connections',
    fullcrossword: 'Crossword',
    dailyquiz: 'Daily Quiz',
    continuouswordladder: 'Continuous Word Ladder',
    continuouscrossword: 'Continuous Crossword',
    continuouslogicgrid: 'Continuous Logic Grid',
    continuousconnections: 'Continuous Connections',
    continuousquiz: 'Continuous Quiz'
});

// Prevent repeated invitations for the same player's game.
const INVITE_COOLDOWN_MS = 2 * 60 * 60 * 1000;

const recentInvites = new Map();

let tableReady = null;

// ─────────────────────────────────────────────
// ADMIN COMMAND
// ─────────────────────────────────────────────

function gamesChannelCommand() {
    return new SlashCommandBuilder()
        .setName('gameschannel')
        .setDescription(
            'Choose where PuzzlePilot posts game invitations'
        )
        .setDMPermission(false)
        .setDefaultMemberPermissions(
            PermissionFlagsBits.ManageGuild
        )
        .addSubcommand(sub =>
            sub.setName('set')
                .setDescription(
                    'Send invitations to a chosen channel'
                )
                .addChannelOption(option =>
                    option.setName('channel')
                        .setDescription(
                            'The dedicated games channel'
                        )
                        .addChannelTypes(
                            ChannelType.GuildText
                        )
                        .setRequired(true)
                )
        )
        .addSubcommand(sub =>
            sub.setName('off')
                .setDescription(
                    'Stop automatic game invitations'
                )
        )
        .addSubcommand(sub =>
            sub.setName('status')
                .setDescription(
                    'Show the configured games channel'
                )
        );
}

// ─────────────────────────────────────────────
// DATABASE
// ─────────────────────────────────────────────

async function ready() {
    if (!tableReady) {
        tableReady = (async () => {
            const db = await getDatabaseClient();

            try {
                await db.query(`
                    CREATE TABLE IF NOT EXISTS
                    puzzlepilot_games_channels (
                        guild_id TEXT PRIMARY KEY,
                        channel_id TEXT NOT NULL
                    )
                `);
            } finally {
                db.release();
            }
        })().catch(error => {
            tableReady = null;
            throw error;
        });
    }

    await tableReady;
}

async function configuredChannelId(guildId) {
    await ready();

    const db = await getDatabaseClient();

    try {
        const result = await db.query(
            `SELECT channel_id
             FROM puzzlepilot_games_channels
             WHERE guild_id = $1`,
            [guildId]
        );

        return result.rows[0]?.channel_id || null;
    } finally {
        db.release();
    }
}

// ─────────────────────────────────────────────
// ADMIN RESPONSES
// ─────────────────────────────────────────────

async function respond(interaction, message) {
    if (interaction.deferred) {
        await interaction.editReply({
            content: message
        });
    } else {
        await interaction.reply({
            content: message,
            flags: MessageFlags.Ephemeral
        });
    }
}

// ─────────────────────────────────────────────
// CONFIGURE GAMES CHANNEL
// ─────────────────────────────────────────────

async function handleGamesChannelCommand(interaction) {
    if (
        !interaction.isChatInputCommand() ||
        interaction.commandName !== 'gameschannel'
    ) {
        return false;
    }

    if (
        !interaction.guildId ||
        !interaction.memberPermissions?.has(
            PermissionFlagsBits.ManageGuild
        )
    ) {
        await respond(
            interaction,
            'Only server managers can configure game invitations.'
        );

        return true;
    }

    const subcommand =
        interaction.options.getSubcommand();

    try {
        await interaction.deferReply({
            flags: MessageFlags.Ephemeral
        });

        // Check current setting.
        if (subcommand === 'status') {
            const channelId = await configuredChannelId(
                interaction.guildId
            );

            await respond(
                interaction,
                channelId
                    ? `Game invitations are enabled in <#${channelId}>.`
                    : 'Game invitations are off. Use `/gameschannel set` to choose a channel.'
            );

            return true;
        }

        // Switch announcements off.
        if (subcommand === 'off') {
            await ready();

            const db = await getDatabaseClient();

            try {
                await db.query(
                    `DELETE FROM puzzlepilot_games_channels
                     WHERE guild_id = $1`,
                    [interaction.guildId]
                );
            } finally {
                db.release();
            }

            await respond(
                interaction,
                'Game invitations are now switched off.'
            );

            return true;
        }

        // Set the dedicated games channel.
        if (subcommand === 'set') {
            const channel = interaction.options.getChannel(
                'channel',
                true
            );

            const me =
                interaction.guild.members.me ||
                await interaction.guild.members.fetchMe();

            const permissions =
                channel.permissionsFor(me);

            if (
                channel.guildId !== interaction.guildId ||
                channel.type !== ChannelType.GuildText ||
                !permissions?.has(
                    PermissionFlagsBits.ViewChannel
                ) ||
                !permissions?.has(
                    PermissionFlagsBits.SendMessages
                )
            ) {
                await respond(
                    interaction,
                    'Please choose a text channel where PuzzlePilot can view and send messages.'
                );

                return true;
            }

            await ready();

            const db = await getDatabaseClient();

            try {
                await db.query(
                    `INSERT INTO puzzlepilot_games_channels
                        (guild_id, channel_id)
                     VALUES ($1, $2)
                     ON CONFLICT (guild_id)
                     DO UPDATE SET
                        channel_id = EXCLUDED.channel_id`,
                    [
                        interaction.guildId,
                        channel.id
                    ]
                );
            } finally {
                db.release();
            }

            await respond(
                interaction,
                `Game invitations will now appear in <#${channel.id}>. ` +
                'There will be no announcement for every question.'
            );

            return true;
        }

        await respond(
            interaction,
            'Unknown games-channel setting.'
        );

        return true;

    } catch (error) {
        console.error(
            'Games channel configuration failed:',
            error
        );

        if (!interaction.replied) {
            await respond(
                interaction,
                'Could not update the games-channel setting. Please check Render logs.'
            ).catch(replyError => {
                console.error(
                    'Games-channel error reply failed:',
                    replyError
                );
            });
        }

        return true;
    }
}

// ─────────────────────────────────────────────
// ANNOUNCE GAME ACTIVITY
// ─────────────────────────────────────────────

// Called by the bot when a player has played a game.
// Never call this for individual questions or answers.
// Announcement errors must never interrupt the game.

async function announcePlayed(guild, userId, gameKey) {
    if (
        !guild ||
        !GAMES[gameKey] ||
        !userId
    ) {
        return false;
    }

    const key =
        `${guild.id}:${userId}:${gameKey}`;

    const now = Date.now();

    const last =
        recentInvites.get(key) || 0;

    if (now - last < INVITE_COOLDOWN_MS) {
        return false;
    }

    try {
        const channelId =
            await configuredChannelId(guild.id);

        // No configured channel means no announcement.
        if (!channelId) {
            return false;
        }

        const channel = await guild.channels
            .fetch(channelId)
            .catch(() => null);

        if (
            !channel ||
            channel.type !== ChannelType.GuildText
        ) {
            console.warn(
                'Configured PuzzlePilot games channel is unavailable:',
                guild.id
            );

            return false;
        }

        // Check again after asynchronous database work.
        const doubleCheck =
            recentInvites.get(key) || 0;

        if (
            now - doubleCheck <
            INVITE_COOLDOWN_MS
        ) {
            return false;
        }

        recentInvites.set(key, now);

        const invite =
            new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId(
                            `pp_join_${gameKey}`
                        )
                        .setLabel('Join Now')
                        .setStyle(
                            ButtonStyle.Success
                        )
                );

        try {
            await channel.send({
                content:
                    `🎮 <@${userId}> has played **${GAMES[gameKey]}**! ` +
                    'Fancy a go? Select **Join Now** to start your own game.',

                components: [
                    invite
                ],

                // Display the player without pinging them.
                allowedMentions: {
                    parse: []
                }
            });

            return true;

        } catch (sendError) {
            recentInvites.delete(key);
            throw sendError;
        }

    } catch (error) {
        console.error(
            `Could not announce ${gameKey} in ${guild.id}:`,
            error
        );

        return false;
    }
}

// ─────────────────────────────────────────────
// IDENTIFY JOIN NOW BUTTONS
// ─────────────────────────────────────────────

// bot.js will use this to route a Join Now click
// to the matching game.

function joinedGame(customId) {
    if (
        typeof customId !== 'string' ||
        !customId.startsWith('pp_join_')
    ) {
        return null;
    }

    const key =
        customId.slice('pp_join_'.length);

    return Object.prototype.hasOwnProperty.call(
        GAMES,
        key
    )
        ? key
        : null;
}

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    gamesChannelCommand,
    handleGamesChannelCommand,
    announcePlayed,
    joinedGame
};
