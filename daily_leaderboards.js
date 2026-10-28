 // daily_leaderboards.js
// PuzzlePilot - shared public daily leaderboards
//
// This module does NOT post anything when imported.
// Game controllers will call updateDailyLeaderboard after saving a result.
// bot.js will call publishYesterdayResults after midnight UK time.
// New games can be added to GAME_TYPES when their scoring is ready.

const { ChannelType } = require('discord.js');
const { getDatabaseClient } = require('./quiz_database');
const { getDailyLeaderboard } = require('./quiz_database');
const {
    getDailyConnectionsLeaderboard,
    getDailyConnectionsSummary
} = require('./connections_database');
const { configuredChannelId } = require('./game_invites');

const GAME_TYPES = Object.freeze({
    dailyquiz: 'Daily Quiz',
    connections: 'Daily Connections'
});

// Serialise updates to the same board within this bot process.
const pendingUpdates = new Map();
let setupPromise = null;

function ukDateKey(date = new Date()) {
    const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).formatToParts(date);

    const part = name => parts.find(item => item.type === name).value;
    return `${part('year')}-${part('month')}-${part('day')}`;
}

function yesterdayUK() {
    const today = ukDateKey();
    const yesterday = new Date(`${today}T00:00:00Z`);
    yesterday.setUTCDate(yesterday.getUTCDate() - 1);
    return yesterday.toISOString().slice(0, 10);
}

async function withDatabase(callback) {
    const db = await getDatabaseClient();
    try {
        return await callback(db);
    } finally {
        db.release();
    }
}

async function ensureTable() {
    if (!setupPromise) {
        setupPromise = withDatabase(db => db.query(`
            CREATE TABLE IF NOT EXISTS puzzlepilot_daily_board_messages (
                guild_id TEXT NOT NULL,
                game_key TEXT NOT NULL,
                board_date DATE NOT NULL,
                board_kind TEXT NOT NULL
                    CHECK (board_kind IN ('live', 'final')),
                channel_id TEXT NOT NULL,
                message_id TEXT NOT NULL,
                PRIMARY KEY (guild_id, game_key, board_date, board_kind)
            )
        `)).catch(error => {
            setupPromise = null;
            throw error;
        });
    }
    await setupPromise;
}

async function getSavedMessage(guildId, gameKey, dateKey, kind) {
    return withDatabase(async db => {
        const result = await db.query(`
            SELECT channel_id, message_id
            FROM puzzlepilot_daily_board_messages
            WHERE guild_id = $1 AND game_key = $2
              AND board_date = $3 AND board_kind = $4
        `, [guildId, gameKey, dateKey, kind]);
        return result.rows[0] || null;
    });
}

async function saveMessage(guildId, gameKey, dateKey, kind, message) {
    await withDatabase(db => db.query(`
        INSERT INTO puzzlepilot_daily_board_messages
            (guild_id, game_key, board_date, board_kind, channel_id, message_id)
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (guild_id, game_key, board_date, board_kind)
        DO UPDATE SET channel_id = EXCLUDED.channel_id,
                      message_id = EXCLUDED.message_id
    `, [guildId, gameKey, dateKey, kind, message.channelId, message.id]));
}

function serialise(key, task) {
    const previous = pendingUpdates.get(key) || Promise.resolve();
    const current = previous.catch(() => {}).then(task);
    pendingUpdates.set(key, current);
    current.finally(() => {
        if (pendingUpdates.get(key) === current) pendingUpdates.delete(key);
    }).catch(() => {});
    return current;
}

async function boardText(guildId, gameKey, dateKey, final) {
    const heading = final ? "YESTERDAY'S FINAL RESULTS" : "TODAY'S LEADERBOARD";
    const lines = [`🏆 **${GAME_TYPES[gameKey].toUpperCase()} — ${heading}**`,
        `Date: ${dateKey} (UK)`, ''];

    if (gameKey === 'dailyquiz') {
        const leaders = await getDailyLeaderboard(guildId, dateKey, 10);
        if (!leaders.length) return null;
        leaders.forEach((entry, i) => {
            lines.push(`**${i + 1}.** <@${entry.userId}> — **${entry.score}/10**`);
        });
    } else if (gameKey === 'connections') {
        const [leaders, summary] = await Promise.all([
            getDailyConnectionsLeaderboard(guildId, dateKey, 10),
            getDailyConnectionsSummary(guildId, dateKey)
        ]);
        const played = Number(summary.played) || 0;
        const won = Number(summary.wins) || 0;
        if (!played) return null;
        lines.push(`Played: **${played}** • Solved: **${won}**`, '');
        if (!leaders.length) {
            lines.push('No successful solves recorded.');
        } else {
            leaders.forEach((entry, i) => {
                const mistakes = Number(entry.mistakes);
                lines.push(`**${i + 1}.** <@${entry.userId}> — ` +
                    `${mistakes} ${mistakes === 1 ? 'mistake' : 'mistakes'}`);
            });
        }
    }

    lines.push('', final ? '*Final standings for this server.*' :
        '*Updates quietly as players finish • Top 10 for this server*');
    return lines.join('\n');
}

async function getGamesChannel(client, guildId) {
    if (String(guildId).startsWith('DM_')) return null;
    const channelId = await configuredChannelId(guildId);
    if (!channelId) return null;

    const guild = client.guilds.cache.get(guildId) ||
        await client.guilds.fetch(guildId).catch(() => null);
    if (!guild) return null;
    const channel = await guild.channels.fetch(channelId).catch(() => null);
    if (!channel || channel.type !== ChannelType.GuildText) return null;
    return channel;
}

// Public API: call AFTER a game's result has been saved successfully.
async function updateDailyLeaderboard(client, guildId, gameKey, dateKey) {
    if (!GAME_TYPES[gameKey] || !/^\d{4}-\d{2}-\d{2}$/.test(String(dateKey))) {
        return false;
    }
    // Never let a late completion rewrite yesterday's board as today's.
    if (dateKey !== ukDateKey()) return false;

    const lockKey = `${guildId}:${gameKey}:${dateKey}:live`;
    return serialise(lockKey, async () => {
        try {
            await ensureTable();
            const channel = await getGamesChannel(client, guildId);
            if (!channel) return false;
            const content = await boardText(guildId, gameKey, dateKey, false);
            if (!content) return false;

            const saved = await getSavedMessage(guildId, gameKey, dateKey, 'live');
            if (saved && saved.channel_id === channel.id) {
                const message = await channel.messages.fetch(saved.message_id)
                    .catch(() => null);
                if (message) {
                    await message.edit({ content, allowedMentions: { parse: [] } });
                    return true;
                }
            }

            const message = await channel.send({
                content,
                allowedMentions: { parse: [] }
            });
            await saveMessage(guildId, gameKey, dateKey, 'live', message);
            return true;
        } catch (error) {
            console.error(`Public ${gameKey} leaderboard update failed:`, error);
            return false; // Never interrupt the player's game.
        }
    });
}

// Public API: bot.js will call this on a UK date change and at startup.
// It only posts yesterday's results, and remembers which posts were sent.
async function publishYesterdayResults(client) {
    const dateKey = yesterdayUK();
    await ensureTable();

    const guildIds = await withDatabase(async db => {
        const result = await db.query(
            'SELECT guild_id FROM puzzlepilot_games_channels'
        );
        return result.rows.map(row => row.guild_id);
    });

    for (const guildId of guildIds) {
        for (const gameKey of Object.keys(GAME_TYPES)) {
            const lockKey = `${guildId}:${gameKey}:${dateKey}:final`;
            await serialise(lockKey, async () => {
                try {
                    // A saved final post must not be posted again.
                    if (await getSavedMessage(guildId, gameKey, dateKey, 'final')) {
                        return;
                    }
                    const channel = await getGamesChannel(client, guildId);
                    if (!channel) return;
                    const content = await boardText(guildId, gameKey, dateKey, true);
                    if (!content) return;
                    const message = await channel.send({
                        content,
                        allowedMentions: { parse: [] }
                    });
                    await saveMessage(guildId, gameKey, dateKey, 'final', message);
                } catch (error) {
                    console.error(`Final ${gameKey} results failed for ${guildId}:`, error);
                }
            });
        }
    }
}

module.exports = {
    updateDailyLeaderboard,
    publishYesterdayResults,
    ukDateKey
};
