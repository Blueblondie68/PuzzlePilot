 // daily_leaderboards.js
// PuzzlePilot - shared public daily leaderboards
//
// Public leaderboards for Daily Quiz and Daily Connections.
// Supports additional games when their scoring is ready.
//
// Live leaderboards update quietly in the configured games channel.
// Yesterday's final results are published after midnight UK time.
//
// Message IDs are saved in PostgreSQL.
// Recent Discord messages are checked before creating a replacement.
//
// Importing this module does not publish messages.

const { ChannelType } = require('discord.js');

const {
    getDatabaseClient,
    getDailyLeaderboard
} = require('./quiz_database');

const {
    getDailyConnectionsLeaderboard,
    getDailyConnectionsSummary
} = require('./connections_database');

const {
    configuredChannelId
} = require('./game_invites');

// ─────────────────────────────────────────────
// SUPPORTED GAMES
// ─────────────────────────────────────────────

const GAME_TYPES = Object.freeze({
    dailyquiz: 'Daily Quiz',
    connections: 'Daily Connections'
});

// Prevent overlapping updates within this bot process.
const pendingUpdates = new Map();

let setupPromise = null;

// ─────────────────────────────────────────────
// UK DATES
// ─────────────────────────────────────────────

function ukDateKey(date = new Date()) {
    const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).formatToParts(date);

    const part = name =>
        parts.find(item => item.type === name).value;

    return (
        `${part('year')}-` +
        `${part('month')}-` +
        `${part('day')}`
    );
}

function yesterdayUK() {
    const today = ukDateKey();

    const yesterday = new Date(
        `${today}T00:00:00Z`
    );

    yesterday.setUTCDate(
        yesterday.getUTCDate() - 1
    );

    return yesterday.toISOString().slice(0, 10);
}

// ─────────────────────────────────────────────
// DATABASE HELPERS
// ─────────────────────────────────────────────

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
            CREATE TABLE IF NOT EXISTS
            puzzlepilot_daily_board_messages (
                guild_id TEXT NOT NULL,
                game_key TEXT NOT NULL,
                board_date DATE NOT NULL,
                board_kind TEXT NOT NULL
                    CHECK (
                        board_kind IN ('live', 'final')
                    ),
                channel_id TEXT NOT NULL,
                message_id TEXT NOT NULL,

                PRIMARY KEY (
                    guild_id,
                    game_key,
                    board_date,
                    board_kind
                )
            )
        `)).catch(error => {
            setupPromise = null;
            throw error;
        });
    }

    await setupPromise;
}

async function getSavedMessage(
    guildId,
    gameKey,
    dateKey,
    kind
) {
    return withDatabase(async db => {
        const result = await db.query(`
            SELECT
                channel_id,
                message_id
            FROM puzzlepilot_daily_board_messages
            WHERE guild_id = $1
              AND game_key = $2
              AND board_date = $3
              AND board_kind = $4
        `, [
            guildId,
            gameKey,
            dateKey,
            kind
        ]);

        return result.rows[0] || null;
    });
}

async function saveMessage(
    guildId,
    gameKey,
    dateKey,
    kind,
    message
) {
    await withDatabase(db => db.query(`
        INSERT INTO puzzlepilot_daily_board_messages (
            guild_id,
            game_key,
            board_date,
            board_kind,
            channel_id,
            message_id
        )
        VALUES ($1, $2, $3, $4, $5, $6)

        ON CONFLICT (
            guild_id,
            game_key,
            board_date,
            board_kind
        )
        DO UPDATE SET
            channel_id = EXCLUDED.channel_id,
            message_id = EXCLUDED.message_id
    `, [
        guildId,
        gameKey,
        dateKey,
        kind,
        message.channelId,
        message.id
    ]));
}

// ─────────────────────────────────────────────
// SERIALISE UPDATES
// ─────────────────────────────────────────────

function serialise(key, task) {
    const previous =
        pendingUpdates.get(key) || Promise.resolve();

    const current = previous
        .catch(() => {})
        .then(task);

    pendingUpdates.set(key, current);

    current.finally(() => {
        if (pendingUpdates.get(key) === current) {
            pendingUpdates.delete(key);
        }
    }).catch(() => {});

    return current;
}

// ─────────────────────────────────────────────
// MESSAGE IDENTIFICATION
// ─────────────────────────────────────────────

// A small marker makes a previously posted leaderboard
// identifiable if Render restarts before its ID is saved.

function boardMarker(gameKey, dateKey, kind) {
    return (
        `PuzzlePilot board: ` +
        `${gameKey}/${dateKey}/${kind}`
    );
}

async function findExistingBoard(
    channel,
    client,
    gameKey,
    dateKey,
    kind
) {
    const marker = boardMarker(
        gameKey,
        dateKey,
        kind
    );

    // Check the most recent 100 messages.
    // Older messages may be outside this search window.

    const messages = await channel.messages.fetch({
        limit: 100
    });

    return messages.find(message =>
        message.author.id === client.user.id &&
        message.content.includes(marker)
    ) || null;
}

// ─────────────────────────────────────────────
// BUILD LEADERBOARD TEXT
// ─────────────────────────────────────────────

async function boardText(
    guildId,
    gameKey,
    dateKey,
    final
) {
    const kind = final ? 'final' : 'live';

    const heading = final
        ? "YESTERDAY'S FINAL RESULTS"
        : "TODAY'S LEADERBOARD";

    const lines = [
        `🏆 **${GAME_TYPES[gameKey].toUpperCase()} — ${heading}**`,
        `Date: ${dateKey} (UK)`,
        ''
    ];

    // DAILY QUIZ

    if (gameKey === 'dailyquiz') {
        const leaders = await getDailyLeaderboard(
            guildId,
            dateKey,
            10
        );

        if (!leaders.length) {
            return null;
        }

        leaders.forEach((entry, index) => {
            lines.push(
                `**${index + 1}.** ` +
                `<@${entry.userId}> — ` +
                `**${entry.score}/10**`
            );
        });
    }

    // DAILY CONNECTIONS

    else if (gameKey === 'connections') {
        const [leaders, summary] = await Promise.all([
            getDailyConnectionsLeaderboard(
                guildId,
                dateKey,
                10
            ),
            getDailyConnectionsSummary(
                guildId,
                dateKey
            )
        ]);

        const played =
            Number(summary.played) || 0;

        const won =
            Number(summary.wins) || 0;

        if (!played) {
            return null;
        }

        lines.push(
            `Played: **${played}** • Solved: **${won}**`,
            ''
        );

        if (!leaders.length) {
            lines.push(
                'No successful solves recorded.'
            );
        } else {
            leaders.forEach((entry, index) => {
                const mistakes =
                    Number(entry.mistakes);

                const label = mistakes === 1
                    ? 'mistake'
                    : 'mistakes';

                lines.push(
                    `**${index + 1}.** ` +
                    `<@${entry.userId}> — ` +
                    `${mistakes} ${label}`
                );
            });
        }
    }

    lines.push('');

    if (final) {
        lines.push(
            '*Final standings for this server.*'
        );
    } else {
        lines.push(
            '*Updates quietly as players finish • Top 10 for this server*'
        );
    }

    // Unique identifier for recovery after a restart.
    lines.push(
        `-# ${boardMarker(gameKey, dateKey, kind)}`
    );

    return lines.join('\n');
}

// ─────────────────────────────────────────────
// FIND CONFIGURED GAMES CHANNEL
// ─────────────────────────────────────────────

async function getGamesChannel(client, guildId) {
    if (
        String(guildId).startsWith('DM_')
    ) {
        return null;
    }

    const channelId =
        await configuredChannelId(guildId);

    if (!channelId) {
        return null;
    }

    const guild =
        client.guilds.cache.get(guildId) ||
        await client.guilds
            .fetch(guildId)
            .catch(() => null);

    if (!guild) {
        return null;
    }

    const channel =
        await guild.channels
            .fetch(channelId)
            .catch(() => null);

    if (
        !channel ||
        channel.type !== ChannelType.GuildText
    ) {
        return null;
    }

    return channel;
}

// ─────────────────────────────────────────────
// FIND OR RECOVER AN EXISTING MESSAGE
// ─────────────────────────────────────────────

async function recoverBoard(
    client,
    channel,
    guildId,
    gameKey,
    dateKey,
    kind
) {
    const saved = await getSavedMessage(
        guildId,
        gameKey,
        dateKey,
        kind
    );

    // First try the ID saved in PostgreSQL.

    if (
        saved &&
        saved.channel_id === channel.id
    ) {
        const message = await channel.messages
            .fetch(saved.message_id)
            .catch(() => null);

        if (message) {
            return message;
        }
    }

    // If the database record is missing or its message
    // is unavailable, check recent Discord messages.

    const recovered = await findExistingBoard(
        channel,
        client,
        gameKey,
        dateKey,
        kind
    );

    if (recovered) {
        await saveMessage(
            guildId,
            gameKey,
            dateKey,
            kind,
            recovered
        );

        return recovered;
    }

    return null;
}

// ─────────────────────────────────────────────
// PUBLIC LIVE LEADERBOARD UPDATE
// ─────────────────────────────────────────────

// Called after a Daily game result has been saved.

async function updateDailyLeaderboard(
    client,
    guildId,
    gameKey,
    dateKey
) {
    if (
        !GAME_TYPES[gameKey] ||
        !/^\d{4}-\d{2}-\d{2}$/.test(String(dateKey))
    ) {
        return false;
    }

    // Never update a previous day's live board.

    if (dateKey !== ukDateKey()) {
        return false;
    }

    const lockKey =
        `${guildId}:${gameKey}:${dateKey}:live`;

    return serialise(lockKey, async () => {
        try {
            await ensureTable();

            const channel =
                await getGamesChannel(client, guildId);

            if (!channel) {
                return false;
            }

            const content = await boardText(
                guildId,
                gameKey,
                dateKey,
                false
            );

            if (!content) {
                return false;
            }

            const existing = await recoverBoard(
                client,
                channel,
                guildId,
                gameKey,
                dateKey,
                'live'
            );

            if (existing) {
                await existing.edit({
                    content,
                    allowedMentions: {
                        parse: []
                    }
                });

                return true;
            }

            // Do not send yesterday's live board if
            // midnight passed during database work.

            if (dateKey !== ukDateKey()) {
                return false;
            }

            const message = await channel.send({
                content,
                allowedMentions: {
                    parse: []
                }
            });

            await saveMessage(
                guildId,
                gameKey,
                dateKey,
                'live',
                message
            );

            return true;

        } catch (error) {
            console.error(
                `Public ${gameKey} leaderboard update failed:`,
                error
            );

            // A leaderboard failure must not interrupt
            // the player or alter their saved result.
            return false;
        }
    });
}

// ─────────────────────────────────────────────
// YESTERDAY'S FINAL RESULTS
// ─────────────────────────────────────────────

// Called by bot.js after the UK date changes,
// and again when the bot starts after a restart.
//
// Do not publish empty results.
// Do not publish in servers without a games channel.

async function publishYesterdayResults(client) {
    const dateKey = yesterdayUK();

    await ensureTable();

    const guildIds = await withDatabase(async db => {
        const result = await db.query(
            'SELECT guild_id FROM puzzlepilot_games_channels'
        );

        return result.rows.map(
            row => row.guild_id
        );
    });

    for (const guildId of guildIds) {
        for (const gameKey of Object.keys(GAME_TYPES)) {
            const lockKey =
                `${guildId}:${gameKey}:${dateKey}:final`;

            await serialise(lockKey, async () => {
                try {
                    const channel =
                        await getGamesChannel(
                            client,
                            guildId
                        );

                    if (!channel) {
                        return;
                    }

                    const content = await boardText(
                        guildId,
                        gameKey,
                        dateKey,
                        true
                    );

                    if (!content) {
                        return;
                    }

                    // Find the existing final message in
                    // PostgreSQL or recover it from Discord.

                    const existing = await recoverBoard(
                        client,
                        channel,
                        guildId,
                        gameKey,
                        dateKey,
                        'final'
                    );

                    if (existing) {
                        return;
                    }

                    const message = await channel.send({
                        content,
                        allowedMentions: {
                            parse: []
                        }
                    });

                    await saveMessage(
                        guildId,
                        gameKey,
                        dateKey,
                        'final',
                        message
                    );

                } catch (error) {
                    console.error(
                        `Final ${gameKey} results failed for ${guildId}:`,
                        error
                    );
                }
            });
        }
    }
}

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    updateDailyLeaderboard,
    publishYesterdayResults,
    ukDateKey
};
