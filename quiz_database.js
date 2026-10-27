// quiz_database.js
// PuzzlePilot Quiz
// PostgreSQL / Neon database handling

const { Pool } = require('pg');


// ─────────────────────────────────────────────
// DATABASE CONNECTION
// ─────────────────────────────────────────────

if (!process.env.DATABASE_URL) {
    console.error(
        'DATABASE_URL is missing. ' +
        'The Daily Quiz database cannot start.'
    );
}

const pool =
    new Pool({
        connectionString:
            process.env.DATABASE_URL
    });

const databaseReady =
    initialiseDatabase();


// ─────────────────────────────────────────────
// INITIALISE DATABASE
// ─────────────────────────────────────────────

async function initialiseDatabase() {
    if (!process.env.DATABASE_URL) {
        throw new Error(
            'DATABASE_URL has not been set.'
        );
    }

    const client =
        await pool.connect();

    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS quiz_daily (
                quiz_date DATE PRIMARY KEY,
                question_ids JSONB NOT NULL
            )
        `);

        await client.query(`
            CREATE TABLE IF NOT EXISTS quiz_question_history (
                question_id TEXT PRIMARY KEY,
                last_used_date DATE NOT NULL
            )
        `);

        await client.query(`
            CREATE TABLE IF NOT EXISTS quiz_completions (
                guild_id TEXT NOT NULL,
                user_id TEXT NOT NULL,
                completion_date DATE NOT NULL,
                score INTEGER NOT NULL,
                completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                PRIMARY KEY (
                    guild_id,
                    user_id,
                    completion_date
                )
            )
        `);

        console.log(
            'Quiz database ready.'
        );

    } finally {
        client.release();
    }
}


databaseReady.catch(
    error => {
        console.error(
            'Quiz database setup failed:',
            error
        );
    }
);


// ─────────────────────────────────────────────
// DATABASE DATE KEY
// ─────────────────────────────────────────────

function databaseDateKey(
    value
) {
    if (!value) {
        return '';
    }

    if (
        typeof value ===
        'string'
    ) {
        return value.slice(
            0,
            10
        );
    }

    if (
        value instanceof Date
    ) {
        const year =
            value.getUTCFullYear();

        const month =
            String(
                value.getUTCMonth() + 1
            ).padStart(
                2,
                '0'
            );

        const day =
            String(
                value.getUTCDate()
            ).padStart(
                2,
                '0'
            );

        return `${year}-${month}-${day}`;
    }

    return String(
        value
    ).slice(
        0,
        10
    );
}


// ─────────────────────────────────────────────
// DATABASE ACCESS
// ─────────────────────────────────────────────

async function getDatabaseClient() {
    await databaseReady;

    return pool.connect();
}


async function getQuestionHistory(
    client
) {
    const result =
        await client.query(`
            SELECT
                question_id,
                last_used_date
            FROM quiz_question_history
        `);

    const history =
        new Map();

    for (
        const row of result.rows
    ) {
        history.set(
            row.question_id,
            databaseDateKey(
                row.last_used_date
            )
        );
    }

    return history;
}


async function saveQuestionHistory(
    client,
    questionId,
    dateKey
) {
    await client.query(
        `
            INSERT INTO quiz_question_history (
                question_id,
                last_used_date
            )
            VALUES ($1, $2)
            ON CONFLICT (question_id)
            DO UPDATE SET
                last_used_date =
                    EXCLUDED.last_used_date
        `,
        [
            questionId,
            dateKey
        ]
    );
}


async function getSavedDailyIds(
    client,
    dateKey
) {
    const result =
        await client.query(
            `
                SELECT question_ids
                FROM quiz_daily
                WHERE quiz_date = $1
            `,
            [
                dateKey
            ]
        );

    if (
        result.rows.length ===
        0
    ) {
        return null;
    }

    return result.rows[0]
        .question_ids;
}


async function deleteSavedDaily(
    client,
    dateKey
) {
    await client.query(
        `
            DELETE FROM quiz_daily
            WHERE quiz_date = $1
        `,
        [
            dateKey
        ]
    );
}


async function saveDailyIds(
    client,
    dateKey,
    questionIds
) {
    await client.query(
        `
            INSERT INTO quiz_daily (
                quiz_date,
                question_ids
            )
            VALUES ($1, $2::jsonb)
        `,
        [
            dateKey,
            JSON.stringify(
                questionIds
            )
        ]
    );
}


// ─────────────────────────────────────────────
// COMPLETION STORAGE
// ─────────────────────────────────────────────

async function hasCompletedDaily(
    serverId,
    userId,
    dateKey
) {
    await databaseReady;

    const result =
        await pool.query(
            `
                SELECT 1
                FROM quiz_completions
                WHERE guild_id = $1
                  AND user_id = $2
                  AND completion_date = $3
                LIMIT 1
            `,
            [
                serverId,
                userId,
                dateKey
            ]
        );

    return (
        result.rows.length >
        0
    );
}


async function saveCompletion(
    session
) {
    await databaseReady;

    await pool.query(
        `
            INSERT INTO quiz_completions (
                guild_id,
                user_id,
                completion_date,
                score
            )
            VALUES ($1, $2, $3, $4)
            ON CONFLICT (
                guild_id,
                user_id,
                completion_date
            )
            DO NOTHING
        `,
        [
            session.serverId,
            session.userId,
            session.dateKey,
            session.score
        ]
    );
}


// ─────────────────────────────────────────────
// DAILY QUIZ LEADERBOARD
//
// Reuses the existing quiz_completions records.
// Every server has its own leaderboard for each UK day.
// Highest score ranks first; equal scores are ordered
// by earliest completion. User ID settles exact ties.
//
// Database functions return data only, so a future
// Discord Activity can reuse them without modification.
// ─────────────────────────────────────────────

async function getDailyLeaderboard(
    serverId,
    dateKey,
    limit = 10
) {
    await databaseReady;

    const safeLimit = Number.isInteger(limit)
        ? Math.max(1, Math.min(limit, 25))
        : 10;

    const result = await pool.query(
        `
            SELECT
                user_id,
                score,
                completed_at
            FROM quiz_completions
            WHERE guild_id = $1
              AND completion_date = $2
            ORDER BY
                score DESC,
                completed_at ASC,
                user_id ASC
            LIMIT $3
        `,
        [
            serverId,
            dateKey,
            safeLimit
        ]
    );

    return result.rows.map(
        (row, index) => ({
            position: index + 1,
            userId: row.user_id,
            score: Number(row.score),
            completedAt: row.completed_at
        })
    );
}


async function getDailyPlayerPosition(
    serverId,
    userId,
    dateKey
) {
    await databaseReady;

    // Rank everybody on this server before selecting
    // the requested player. Otherwise the player's
    // position would always appear as number one.

    const result = await pool.query(
        `
            SELECT
                position,
                score,
                completed_at
            FROM (
                SELECT
                    user_id,
                    score,
                    completed_at,
                    ROW_NUMBER() OVER (
                        ORDER BY
                            score DESC,
                            completed_at ASC,
                            user_id ASC
                    ) AS position
                FROM quiz_completions
                WHERE guild_id = $1
                  AND completion_date = $2
            ) AS ranked
            WHERE user_id = $3
            LIMIT 1
        `,
        [
            serverId,
            dateKey,
            userId
        ]
    );

    if (result.rows.length === 0) {
        return null;
    }

    const row = result.rows[0];

    return {
        position: Number(row.position),
        score: Number(row.score),
        completedAt: row.completed_at
    };
}


// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    databaseReady,
    databaseDateKey,
    getDatabaseClient,
    getQuestionHistory,
    saveQuestionHistory,
    getSavedDailyIds,
    deleteSavedDaily,
    saveDailyIds,
    hasCompletedDaily,
    saveCompletion,
    getDailyLeaderboard,
    getDailyPlayerPosition
};

