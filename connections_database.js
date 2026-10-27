// connections_database.js
// PuzzlePilot Connections
// Daily completion records and leaderboard
//
// Uses the existing PuzzlePilot PostgreSQL connection
// from quiz_database.js. No second database pool.
//
// One Daily Connections result per player,
// per server, per UK calendar day.
// Both wins and losses are recorded.

const {
    getDatabaseClient
} = require('./quiz_database');

// ─────────────────────────────────────────────
// DATABASE TABLE
// ─────────────────────────────────────────────

async function initialiseConnectionsDatabase() {
    const client = await getDatabaseClient();

    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS connections_daily_results (
                guild_id TEXT NOT NULL,
                user_id TEXT NOT NULL,
                completion_date DATE NOT NULL,
                won BOOLEAN NOT NULL,
                mistakes INTEGER NOT NULL
                    CHECK (mistakes BETWEEN 0 AND 4),
                completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                PRIMARY KEY (
                    guild_id,
                    user_id,
                    completion_date
                )
            )
        `);

        console.log('Connections database ready.');
    } finally {
        client.release();
    }
}

const connectionsDatabaseReady =
    initialiseConnectionsDatabase();

connectionsDatabaseReady.catch(error => {
    console.error(
        'Connections database setup failed:',
        error
    );
});

// ─────────────────────────────────────────────
// DATABASE QUERY HELPER
// ─────────────────────────────────────────────

async function runConnectionsQuery(sql, values = []) {
    await connectionsDatabaseReady;

    const client = await getDatabaseClient();

    try {
        return await client.query(sql, values);
    } finally {
        client.release();
    }
}

// ─────────────────────────────────────────────
// DAILY COMPLETION CHECK
// ─────────────────────────────────────────────

async function hasCompletedDailyConnections(
    serverId,
    userId,
    dateKey
) {
    const result = await runConnectionsQuery(
        `
            SELECT 1
            FROM connections_daily_results
            WHERE guild_id = $1
              AND user_id = $2
              AND completion_date = $3
            LIMIT 1
        `,
        [serverId, userId, dateKey]
    );

    return result.rows.length > 0;
}

// ─────────────────────────────────────────────
// RECORD A FINISHED DAILY GAME
// ─────────────────────────────────────────────

async function saveDailyConnectionsResult(result) {
    const {
        serverId,
        userId,
        dateKey,
        won,
        mistakes
    } = result;

    if (typeof won !== 'boolean') {
        throw new Error(
            'Connections result must specify a win or loss.'
        );
    }

    if (
        !Number.isInteger(mistakes) ||
        mistakes < 0 ||
        mistakes > 4
    ) {
        throw new Error(
            'Connections mistakes must be between 0 and 4.'
        );
    }

    const saved = await runConnectionsQuery(
        `
            INSERT INTO connections_daily_results (
                guild_id,
                user_id,
                completion_date,
                won,
                mistakes
            )
            VALUES ($1, $2, $3, $4, $5)
            ON CONFLICT (
                guild_id,
                user_id,
                completion_date
            )
            DO NOTHING
            RETURNING user_id
        `,
        [serverId, userId, dateKey, won, mistakes]
    );

    // False means a result was already saved for this
    // player on this server for this UK date.
    return saved.rowCount === 1;
}

// ─────────────────────────────────────────────
// DAILY LEADERBOARD
// ─────────────────────────────────────────────

async function getDailyConnectionsLeaderboard(
    serverId,
    dateKey,
    limit = 10
) {
    const safeLimit = Number.isInteger(limit)
        ? Math.max(1, Math.min(20, limit))
        : 10;

    // Only successful games are ranked.
    // Fewer mistakes ranks higher; equal results
    // are ordered by completion time.
    const result = await runConnectionsQuery(
        `
            SELECT
                user_id,
                mistakes,
                completed_at
            FROM connections_daily_results
            WHERE guild_id = $1
              AND completion_date = $2
              AND won = TRUE
            ORDER BY
                mistakes ASC,
                completed_at ASC,
                user_id ASC
            LIMIT $3
        `,
        [serverId, dateKey, safeLimit]
    );

    return result.rows.map(row => ({
        userId: row.user_id,
        mistakes: row.mistakes,
        completedAt: row.completed_at
    }));
}

// ─────────────────────────────────────────────
// DAILY PARTICIPATION TOTALS
// ─────────────────────────────────────────────

async function getDailyConnectionsSummary(
    serverId,
    dateKey
) {
    const result = await runConnectionsQuery(
        `
            SELECT
                COUNT(*)::INTEGER AS played,
                COUNT(*) FILTER (WHERE won)::INTEGER AS wins
            FROM connections_daily_results
            WHERE guild_id = $1
              AND completion_date = $2
        `,
        [serverId, dateKey]
    );

    return result.rows[0];
}

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    connectionsDatabaseReady,
    hasCompletedDailyConnections,
    saveDailyConnectionsResult,
    getDailyConnectionsLeaderboard,
    getDailyConnectionsSummary
};
