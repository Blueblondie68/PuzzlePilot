
// quiz_bank_sync.js
// PuzzlePilot Bigggggg Quiz - private Activity question-bank mirror.
// Runs in the ORIGINAL Discord bot, never in the browser.
// Mirrors its existing quiz packs into Neon so the separate Activity API
// can serve questions without maintaining a second set of pack files.
//
// This module does not change the Daily Quiz, scores or leaderboards.
// The caller supplies an existing PostgreSQL client; no new credentials
// or external HTTP endpoints are required.

const { createHash } = require('node:crypto');
const { getQuestionBank } = require('./quiz_bank');

const BATCH_SIZE = 100;
const BANK_SYNC_LOCK = 74629102;
const MINIMUM_SAFE_RETENTION = 0.9;

function prepareQuestions() {
    const questions = getQuestionBank();

    if (!Array.isArray(questions) || questions.length === 0) {
        throw new Error('Activity bank sync refused an empty quiz bank.');
    }

    const seen = new Set();
    const prepared = [];

    for (const question of questions) {
        if (
            !question ||
            typeof question !== 'object' ||
            typeof question.id !== 'string' ||
            !question.id.trim() ||
            seen.has(question.id)
        ) {
            throw new Error('Activity bank sync found an invalid or duplicate question ID.');
        }

        seen.add(question.id);

        // Persist the exported question object, including programme metadata,
        // rather than guessing its content from quiz-pack source code.
        const json = JSON.stringify(question);

        if (typeof json !== 'string' || !json) {
            throw new Error('Activity bank sync could not serialise a question.');
        }

        prepared.push({
            id: question.id,
            json,
            hash: createHash('sha256').update(json).digest('hex'),
            category: typeof question.category === 'string'
                ? question.category.trim() : 'General Knowledge',
            dailyEligible: question.dailyEligible !== false
        });
    }

    return prepared;
}

async function syncQuizBankToDatabase(client) {
    if (!client || typeof client.query !== 'function') {
        throw new Error('Activity bank sync requires a database client.');
    }

    // Validate the entire source before starting a database transaction.
    const prepared = prepareQuestions();
    let began = false;

    try {
        await client.query('BEGIN');
        began = true;
        await client.query('SELECT pg_advisory_xact_lock($1)', [BANK_SYNC_LOCK]);

        await client.query(`
            CREATE TABLE IF NOT EXISTS quiz_activity_questions (
                question_id TEXT PRIMARY KEY,
                question_data JSONB NOT NULL,
                content_hash TEXT NOT NULL,
                category TEXT NOT NULL,
                daily_eligible BOOLEAN NOT NULL,
                updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
            )
        `);

        const existingResult = await client.query(`
            SELECT question_id, content_hash
            FROM quiz_activity_questions
        `);

        const existing = new Map(existingResult.rows.map(row => [
            row.question_id,
            row.content_hash
        ]));

        // Never accidentally empty a previously populated bank because
        // a deployment loaded far fewer quiz packs than expected.
        if (
            existing.size > 0 &&
            prepared.length < Math.floor(existing.size * MINIMUM_SAFE_RETENTION)
        ) {
            throw new Error('Activity bank sync refused an unexpected large bank reduction.');
        }

        const changed = prepared.filter(item => existing.get(item.id) !== item.hash);

        // Send only new or changed questions, not all 32,000+ on each deploy.
        for (let start = 0; start < changed.length; start += BATCH_SIZE) {
            const batch = changed.slice(start, start + BATCH_SIZE);
            const values = [];
            const parameters = [];

            for (const item of batch) {
                const n = values.length;
                values.push(
                    item.id,
                    item.json,
                    item.hash,
                    item.category,
                    item.dailyEligible
                );
                parameters.push(
                    `($${n + 1}, $${n + 2}::jsonb, $${n + 3}, $${n + 4}, $${n + 5})`
                );
            }

            await client.query(`
                INSERT INTO quiz_activity_questions
                    (question_id, question_data, content_hash, category, daily_eligible)
                VALUES ${parameters.join(', ')}
                ON CONFLICT (question_id) DO UPDATE SET
                    question_data = EXCLUDED.question_data,
                    content_hash = EXCLUDED.content_hash,
                    category = EXCLUDED.category,
                    daily_eligible = EXCLUDED.daily_eligible,
                    updated_at = NOW()
                WHERE quiz_activity_questions.content_hash IS DISTINCT FROM EXCLUDED.content_hash
            `, values);
        }

        // Retired pack questions must not be drawn by the Activity.
        // Use one array parameter rather than thousands of SQL placeholders.
        const removed = existing.size - prepared.filter(item => existing.has(item.id)).length;
        if (removed > 0) {
            await client.query(`
                DELETE FROM quiz_activity_questions
                WHERE NOT (question_id = ANY($1::text[]))
            `, [prepared.map(item => item.id)]);
        }

        const countResult = await client.query(`
            SELECT COUNT(*)::integer AS total
            FROM quiz_activity_questions
        `);
        const storedCount = Number(countResult.rows[0]?.total);

        if (storedCount !== prepared.length) {
            throw new Error('Activity bank sync count check failed; transaction will be rolled back.');
        }

        await client.query('COMMIT');
        began = false;

        return {
            sourceQuestions: prepared.length,
            insertedOrUpdated: changed.length,
            removed
        };
    } catch (error) {
        if (began) {
            try {
                await client.query('ROLLBACK');
            } catch (rollbackError) {
                console.error('Activity bank sync rollback failed:', rollbackError?.code || 'unknown');
            }
        }
        throw error;
    }
}

module.exports = { syncQuizBankToDatabase };
