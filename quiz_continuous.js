 // quiz_continuous.js
// PuzzlePilot - Bigggggg Quiz continuous solo play
// Separate from the Daily Quiz: no daily completion or history changes.

const { randomBytes } = require('crypto');
const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ContainerBuilder,
    MessageFlags,
    SeparatorBuilder,
    StringSelectMenuBuilder,
    TextDisplayBuilder
} = require('discord.js');

const { getQuestionBank } = require('./quiz_bank');

const QUESTION_MS = 15000;
const REVEAL_MS = 3000;
const LENGTHS = [10, 20, 30, 50, 100];
const PAGE_SIZE = 20;

const PURPLE = 0x8B5CF6;
const GREEN = 0x57F287;
const RED = 0xED4245;
const YELLOW = 0xFEE75C;

const lobbies = new Map();
const sessions = new Map();
const lobbiesByPlayer = new Map();
const sessionsByPlayer = new Map();

function id() {
    return randomBytes(7).toString('hex');
}

function playerKey(interaction) {
    return `${interaction.guildId || 'DM'}:${interaction.user.id}`;
}

function shuffle(items) {
    const a = [...items];

    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
}

function subjectName(question) {
    const name = String(
        question.category || 'General Knowledge'
    ).trim();

    const lower = name.toLowerCase();

    if (lower === 'tv' || lower === 'television') {
        return 'Television';
    }

    if (lower === 'food and drink' || lower === 'food & drink') {
        return 'Food & Drink';
    }

    if (lower === 'science' || lower === 'science & nature') {
        return 'Science & Nature';
    }

    return name || 'General Knowledge';
}

// Only use questions that can be displayed safely
// using four Discord answer buttons.
function usableQuestions() {
    const ids = new Set();

    return getQuestionBank().filter(q => {
        if (
            !q ||
            typeof q.id !== 'string' ||
            ids.has(q.id) ||
            typeof q.question !== 'string' ||
            !q.question.trim() ||
            !Array.isArray(q.answers) ||
            q.answers.length !== 4 ||
            q.answers.some(a =>
                typeof a !== 'string' ||
                !a.trim() ||
                a.length > 80
            ) ||
            new Set(q.answers).size !== 4 ||
            !q.answers.includes(q.correctAnswer)
        ) {
            return false;
        }

        ids.add(q.id);
        return true;
    });
}

// ─────────────────────────────────────────────
// SUBJECT AND TOPIC SELECTION
// ─────────────────────────────────────────────

function categoryChoices(bank) {
    const counts = new Map();

    for (const q of bank) {
        const name = subjectName(q);
        counts.set(name, (counts.get(name) || 0) + 1);
    }

    return [
        {
            name: 'All subjects',
            count: bank.length,
            category: null
        },
        ...[...counts]
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(([name, count]) => ({
                name,
                count,
                category: name
            }))
    ];
}

function matchingQuestions(bank, category, tag) {
    return bank.filter(q =>
        (!category || subjectName(q) === category) &&
        (
            !tag ||
            (
                Array.isArray(q.tags) &&
                q.tags.some(t =>
                    typeof t === 'string' &&
                    t.trim().toLowerCase() === tag.toLowerCase()
                )
            )
        )
    );
}

function tagChoices(bank, category) {
    const counts = new Map();

    for (const q of matchingQuestions(bank, category, null)) {
        const seen = new Set();

        for (const tag of Array.isArray(q.tags) ? q.tags : []) {
            if (typeof tag !== 'string') continue;

            const name = tag.trim();
            const key = name.toLowerCase();

            if (
                !name ||
                name.length > 90 ||
                key === category.toLowerCase() ||
                key === 'television' ||
                key === 'tv' ||
                key === 'music' ||
                /^\d{4}$/.test(key) ||
                seen.has(key)
            ) {
                continue;
            }

            seen.add(key);

            const old = counts.get(key);

            counts.set(key, {
                name: old ? old.name : name,
                count: (old ? old.count : 0) + 1
            });
        }
    }

    return [...counts.values()]
        .filter(t => t.count >= 10)
        .sort(
            (a, b) =>
                b.count - a.count ||
                a.name.localeCompare(b.name)
        );
}

// Display labels only. Never change the underlying tag:
// the exact original tag is needed to filter questions.
function displayName(value) {
    const original = String(value || 'All subjects').trim();
    const lower = original.toLowerCase();

    const names = {
        'eastenders': 'EastEnders',
        'coronation street': 'Coronation Street',
        'emmerdale': 'Emmerdale',
        'emmerdale farm': 'Emmerdale Farm',
        'home and away': 'Home and Away',
        'family affairs': 'Family Affairs',
        'the weakest link': 'The Weakest Link',
        'who wants to be a millionaire?': 'Who Wants to Be a Millionaire?',
        'take the high road': 'Take the High Road',
        'play your cards right': 'Play Your Cards Right',
        'never mind the buzzcocks': 'Never Mind the Buzzcocks'
    };

    if (Object.prototype.hasOwnProperty.call(names, lower)) {
        return names[lower];
    }

    const acronyms = {
        tv: 'TV',
        bbc: 'BBC',
        itv: 'ITV',
        uk: 'UK',
        usa: 'USA',
        us: 'US'
    };

    // Preserve names already correctly capitalised, such as
    // Doctor Who or BBC, and format all-lowercase older tags.
    if (original !== lower) {
        return original;
    }

    return original.split(/(\s+)/).map(part => {
        if (/^\s+$/.test(part)) return part;
        const key = part.toLowerCase();
        if (acronyms[key]) return acronyms[key];
        return part.charAt(0).toUpperCase() + part.slice(1);
    }).join('');
}

function resultSubjectName(s) {
    return displayName(s.tag || s.category || 'All subjects');
}

// ─────────────────────────────────────────────
// DISCORD DISPLAY HELPERS
// ─────────────────────────────────────────────

function text(content) {
    return new TextDisplayBuilder().setContent(content);
}

function container(accent = PURPLE) {
    return new ContainerBuilder()
        .setAccentColor(accent)
        .addTextDisplayComponents(
            text('# 🧠 PUZZLEPILOT\n**CONTINUOUS QUIZ  •  SOLO PLAY**')
        );
}

function line(c) {
    c.addSeparatorComponents(new SeparatorBuilder());
    return c;
}

function row(...buttons) {
    return new ActionRowBuilder().addComponents(...buttons);
}

function button(
    customId,
    label,
    style = ButtonStyle.Secondary,
    disabled = false
) {
    return new ButtonBuilder()
        .setCustomId(customId)
        .setLabel(label)
        .setStyle(style)
        .setDisabled(disabled);
}

function payload(c) {
    return {
        components: [c],
        flags: MessageFlags.IsComponentsV2
    };
}

function shortCount(n) {
    return `${n.toLocaleString('en-GB')} questions`;
}

function paged(entries, page) {
    const maxPage = Math.max(
        0,
        Math.ceil(entries.length / PAGE_SIZE) - 1
    );

    const safePage = Math.max(0, Math.min(page, maxPage));

    return {
        page: safePage,
        maxPage,
        entries: entries.slice(
            safePage * PAGE_SIZE,
            (safePage + 1) * PAGE_SIZE
        )
    };
}

function addPaging(c, lobby, type, page, maxPage) {
    if (!maxPage) return;

    c.addActionRowComponents(
        row(
            button(
                `cq_page_${lobby.id}_${type}_${page - 1}`,
                '◀ Previous',
                ButtonStyle.Secondary,
                page === 0
            ),
            button(
                `cq_page_${lobby.id}_${type}_${page + 1}`,
                'Next ▶',
                ButtonStyle.Secondary,
                page === maxPage
            )
        )
    );
}

// ─────────────────────────────────────────────
// CHOOSE SUBJECT SCREEN
// ─────────────────────────────────────────────

function categoryScreen(lobby) {
    const c = container();

    const p = paged(
        lobby.categories,
        lobby.categoryPage
    );

    lobby.categoryPage = p.page;

    c.addTextDisplayComponents(
        text(
            '### Choose your subject\n' +
            `**${shortCount(lobby.bank.length)}** to play.\n` +
            'Choose a subject or select **All subjects** for a mixed quiz.'
        )
    );

    line(c);

    const choices = p.entries.map((x, i) => ({
        label: displayName(x.name).slice(0, 100),
        value: String(p.page * PAGE_SIZE + i),
        description: shortCount(x.count).slice(0, 100)
    }));

    c.addActionRowComponents(
        new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId(`cq_category_${lobby.id}`)
                .setPlaceholder('Select a subject')
                .addOptions(choices)
        )
    );

    addPaging(c, lobby, 'category', p.page, p.maxPage);

    return c;
}

// ─────────────────────────────────────────────
// CHOOSE TAGGED TOPIC SCREEN
// ─────────────────────────────────────────────

function tagScreen(lobby) {
    const c = container();

    c.addTextDisplayComponents(
        text(
            `### ${displayName(lobby.category)}\n` +
            'Play everything in this subject, or choose a specific topic.'
        )
    );

    line(c);

    const p = paged(lobby.tags, lobby.tagPage);
    lobby.tagPage = p.page;

    if (p.entries.length) {
        c.addActionRowComponents(
            new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId(`cq_tag_${lobby.id}`)
                    .setPlaceholder('Choose a tagged topic (optional)')
                    .addOptions(
                        p.entries.map((x, i) => ({
                            label: displayName(x.name).slice(0, 100),
                            description: shortCount(x.count).slice(0, 100),
                            value: String(p.page * PAGE_SIZE + i)
                        }))
                    )
            )
        );

        addPaging(c, lobby, 'tag', p.page, p.maxPage);
    }

    c.addActionRowComponents(
        row(
            button(
                `cq_alltag_${lobby.id}`,
                `All ${displayName(lobby.category)}`.slice(0, 80),
                ButtonStyle.Success
            ),
            button(`cq_back_${lobby.id}`, 'Back')
        )
    );

    return c;
}

// ─────────────────────────────────────────────
// CHOOSE QUESTION COUNT
// ─────────────────────────────────────────────

function lengthScreen(lobby) {
    const count = matchingQuestions(
        lobby.bank,
        lobby.category,
        lobby.tag
    ).length;

    const c = container();

    const chosen =
        lobby.tag ||
        lobby.category ||
        'All subjects';

    c.addTextDisplayComponents(
        text(
            `### ${displayName(chosen)}\n` +
            `**${shortCount(count)} available**\n` +
            'Choose a quiz length, or play **Endless**. ' +
            'You can stop whenever you like.'
        )
    );

    line(c);

    c.addActionRowComponents(
        row(
            ...LENGTHS.slice(0, 3).map(n =>
                button(
                    `cq_length_${lobby.id}_${n}`,
                    `${n} questions`,
                    ButtonStyle.Primary,
                    count < n
                )
            )
        )
    );

    c.addActionRowComponents(
        row(
            ...LENGTHS.slice(3).map(n =>
                button(
                    `cq_length_${lobby.id}_${n}`,
                    `${n} questions`,
                    ButtonStyle.Primary,
                    count < n
                )
            ),
            button(
                `cq_length_${lobby.id}_endless`,
                '♾️ Endless',
                ButtonStyle.Success,
                count === 0
            )
        )
    );

    c.addActionRowComponents(
        row(
            button(
                `cq_back_${lobby.id}`,
                'Change subject'
            )
        )
    );

    return c;
}

// ─────────────────────────────────────────────
// QUESTION SUBJECT LABEL
// ─────────────────────────────────────────────

// Programme tags can be at different positions in old
// and new quiz packs. Use the same programme names and
// genre conventions as the Daily Quiz display.
const TV_PROGRAMMES = [
    'EastEnders', 'Coronation Street', 'Emmerdale',
    'Emmerdale Farm', 'Brookside', 'Crossroads',
    'Eldorado', 'Family Affairs', 'Hollyoaks',
    'Doctors', 'Neighbours', 'Home and Away',
    'Take the High Road', 'River City', 'The Chase',
    'The Weakest Link', 'Mastermind', 'University Challenge',
    'Pointless', 'Who Wants to Be a Millionaire?',
    'Catchphrase', 'Blockbusters', 'Bullseye',
    'Family Fortunes', 'The Crystal Maze',
    'Countdown', 'The Generation Game',
    'Play Your Cards Right', 'Blankety Blank',
    'The Price Is Right'
];

const TV_GROUPS = new Set([
    'soaps', 'soap operas', 'quiz shows', 'game shows',
    'quiz and game shows', 'quiz & game shows',
    'sitcoms', 'dramas', 'drama series', 'tv dramas',
    'television dramas', 'comedies', 'reality shows',
    "children's television", "children's tv"
]);

function questionLabel(q) {
    const category = subjectName(q);

    if (category !== 'Television') {
        return displayName(category).toUpperCase();
    }

    for (const field of ['programme', 'program', 'show', 'series']) {
        if (typeof q[field] === 'string' && q[field].trim()) {
            return `TELEVISION • ${displayName(q[field]).toUpperCase()}`;
        }
    }

    const tags = Array.isArray(q.tags)
        ? q.tags.filter(t => typeof t === 'string')
        : [];

    for (let i = 0; i < tags.length - 1; i++) {
        if (!TV_GROUPS.has(tags[i].trim().toLowerCase())) {
            continue;
        }

        const candidate = tags[i + 1].trim();

        if (
            candidate &&
            !TV_GROUPS.has(candidate.toLowerCase()) &&
            !/^(?:19|20)\d{2}(?:s)?$/.test(candidate)
        ) {
            return `TELEVISION • ${displayName(candidate).toUpperCase()}`;
        }
    }

    for (const programme of TV_PROGRAMMES) {
        if (
            tags.some(t =>
                t.trim().toLowerCase() === programme.toLowerCase()
            )
        ) {
            return `TELEVISION • ${programme.toUpperCase()}`;
        }
    }

    return 'TELEVISION';
}

// ─────────────────────────────────────────────
// ANSWER BUTTONS
// ─────────────────────────────────────────────

function answerRows(s, revealed = false, selected = null) {
    const rows = [];

    for (let i = 0; i < 4; i += 2) {
        const r = new ActionRowBuilder();

        for (let j = i; j < i + 2; j++) {
            const answer = s.answers[j];
            const letter = String.fromCharCode(65 + j);

            let style = ButtonStyle.Primary;

            if (revealed) {
                if (answer === s.question.correctAnswer) {
                    style = ButtonStyle.Success;
                } else if (selected === answer) {
                    style = ButtonStyle.Danger;
                } else {
                    style = ButtonStyle.Secondary;
                }
            }

            r.addComponents(
                button(
                    `cq_answer_${s.id}_${j}_${s.token}`,
                    answer.length <= 77
                        ? `${letter}. ${answer}`
                        : answer,
                    style,
                    revealed
                )
            );
        }

        rows.push(r);
    }

    return rows;
}

// ─────────────────────────────────────────────
// QUESTION AND REVEAL SCREEN
// ─────────────────────────────────────────────

function gameScreen(s, result = null, selected = null) {
    let accent = PURPLE;

    if (result === 'correct') accent = GREEN;
    if (result === 'wrong') accent = RED;
    if (result === 'timeout') accent = YELLOW;

    const c = container(accent);
    const maximum = s.limit === null ? 'ENDLESS' : s.limit;
    const number = result ? s.completed : s.completed + 1;

    // Avoid showing 0/0 before the first answer.
    const progress = s.limit === null
        ? `${s.completed} completed`
        : `${s.completed}/${s.limit} completed`;

    c.addTextDisplayComponents(
        text(
            `### QUESTION ${number} OF ${maximum}\n` +
            `**Score:** ${s.score}   •   **${progress}**\n` +
            (result
                ? 'Answer revealed • Moving on automatically'
                : '⏱️ **15 seconds** to answer • First choice is final')
        )
    );

    line(c);

    c.addTextDisplayComponents(
        text(
            `**${questionLabel(s.question)}**\n` +
            `## ${s.question.question}`
        )
    );

    if (result) {
        const title = result === 'correct'
            ? '✅ CORRECT!'
            : result === 'wrong'
                ? '❌ NOT QUITE!'
                : '⏰ TIME IS UP!';

        const detail = result === 'wrong'
            ? `Your answer: **${selected}**\n`
            : '';

        c.addTextDisplayComponents(
            text(
                `### ${title}\n` +
                detail +
                `Correct answer: **${s.question.correctAnswer}**`
            )
        );
    }

    for (const r of answerRows(s, Boolean(result), selected)) {
        c.addActionRowComponents(r);
    }

    line(c);

    c.addTextDisplayComponents(
        text(
            result
                ? `*${
                    s.limit !== null && s.completed >= s.limit
                        ? 'Final results'
                        : 'Next question'
                } in 3 seconds...*`
                : '*Stop at any time to see your results.*'
        )
    );

    c.addActionRowComponents(
        row(
            button(
                `cq_stop_${s.id}`,
                'Stop Quiz',
                ButtonStyle.Danger
            )
        )
    );

    return c;
}

// ─────────────────────────────────────────────
// FINAL RESULTS
// ─────────────────────────────────────────────

function finishedScreen(s, stopped, idle = false) {
    const total = s.completed;
    const percent = total
        ? Math.round(s.score / total * 100)
        : 0;

    const accent = idle ? YELLOW : stopped ? PURPLE : GREEN;
    const c = container(accent);

    line(c);

    c.addTextDisplayComponents(
        text(
            `### ${stopped ? 'QUIZ STOPPED' : '🎉 QUIZ COMPLETE!'}\n` +
            `# ${s.score} / ${total}\n` +
            `**${percent}% correct**`
        )
    );

    line(c);

    c.addTextDisplayComponents(
        text(
            `**Subject:** ${resultSubjectName(s)}\n` +
            (idle
                ? '*Stopped after three unanswered questions.*\n'
                : '') +
            'Choose **Play Again** to start another quiz.'
        )
    );

    // Play Again needs no active session or database record.
    const serverId = s.playerKey.split(':')[0];

    c.addActionRowComponents(
        row(
            button(
                `cq_again_${s.owner}_${serverId}`,
                'Play Again',
                ButtonStyle.Success
            )
        )
    );

    return c;
}

// ─────────────────────────────────────────────
// SESSION MANAGEMENT
// ─────────────────────────────────────────────

function removeSession(s) {
    if (s.questionTimer) {
        clearTimeout(s.questionTimer);
    }

    if (s.revealTimer) {
        clearTimeout(s.revealTimer);
    }

    sessions.delete(s.id);

    if (sessionsByPlayer.get(s.playerKey) === s.id) {
        sessionsByPlayer.delete(s.playerKey);
    }
}

function nextQuestion(s) {
    if (!s.deck.length) {
        // Endless reshuffles only after using the full pool.
        s.deck = shuffle(s.pool);

        // Avoid an immediate repeat between rounds.
        if (
            s.deck.length > 1 &&
            s.question &&
            s.deck[s.deck.length - 1].id === s.question.id
        ) {
            [
                s.deck[0],
                s.deck[s.deck.length - 1]
            ] = [
                s.deck[s.deck.length - 1],
                s.deck[0]
            ];
        }
    }

    s.question = s.deck.pop();
    s.answers = shuffle(s.question.answers);
    s.answered = false;
    s.token++;
}

// ─────────────────────────────────────────────
// QUESTION TIMER
// ─────────────────────────────────────────────

function startTimer(s) {
    const token = s.token;

    s.questionTimer = setTimeout(async () => {
        if (
            sessions.get(s.id) !== s ||
            s.token !== token ||
            s.answered
        ) {
            return;
        }

        s.answered = true;
        s.questionTimer = null;
        s.completed++;
        s.idleTimeouts++;

        // Prevent unattended Endless sessions running forever.
        if (
            s.limit === null &&
            s.idleTimeouts >= 3
        ) {
            removeSession(s);

            try {
                await s.message.edit(
                    payload(finishedScreen(s, true, true))
                );
            } catch (e) {
                console.error(
                    'Continuous Quiz idle finish failed:',
                    e
                );
            }

            return;
        }

        try {
            await s.message.edit(
                payload(gameScreen(s, 'timeout'))
            );

            scheduleAdvance(s, token);

        } catch (e) {
            console.error(
                'Continuous Quiz timeout display failed:',
                e
            );

            removeSession(s);
        }
    }, QUESTION_MS);
}

// ─────────────────────────────────────────────
// AUTOMATIC QUESTION PROGRESSION
// ─────────────────────────────────────────────

function scheduleAdvance(s, token) {
    if (sessions.get(s.id) !== s) return;

    s.revealTimer = setTimeout(async () => {
        if (
            sessions.get(s.id) !== s ||
            s.token !== token
        ) {
            return;
        }

        s.revealTimer = null;

        try {
            if (
                s.limit !== null &&
                s.completed >= s.limit
            ) {
                removeSession(s);

                await s.message.edit(
                    payload(finishedScreen(s, false))
                );

                return;
            }

            nextQuestion(s);

            await s.message.edit(
                payload(gameScreen(s))
            );

            startTimer(s);

        } catch (e) {
            console.error(
                'Continuous Quiz progression failed:',
                e
            );

            removeSession(s);
        }
    }, REVEAL_MS);
}

async function notice(interaction, message) {
    await interaction.reply({
        content: message,
        flags: MessageFlags.Ephemeral
    });
}

// ─────────────────────────────────────────────
// OPEN CONTINUOUS QUIZ
// ─────────────────────────────────────────────

async function openSubjectSelector(interaction, updateExisting = false) {
    const key = playerKey(interaction);

    if (sessionsByPlayer.has(key)) {
        await notice(
            interaction,
            'You already have a Continuous Quiz in progress. ' +
            'Use Stop Quiz in that game first.'
        );

        return;
    }

    const previous = lobbiesByPlayer.get(key);

    if (previous) {
        lobbies.delete(previous);
    }

    const bank = usableQuestions();

    if (!bank.length) {
        await notice(
            interaction,
            'The quiz bank has no playable questions at present.'
        );

        return;
    }

    const lobby = {
        id: id(),
        owner: interaction.user.id,
        key,
        bank,
        categories: categoryChoices(bank),
        categoryPage: 0,
        category: null,
        tag: null,
        tags: [],
        tagPage: 0,
        stage: 'category'
    };

    lobbies.set(lobby.id, lobby);
    lobbiesByPlayer.set(key, lobby.id);

    const screen = payload(categoryScreen(lobby));

    if (updateExisting) {
        await interaction.update(screen);
    } else {
        await interaction.reply(screen);
    }
}

async function startContinuous(interaction) {
    return openSubjectSelector(interaction);
}

// ─────────────────────────────────────────────
// HANDLE CONTINUOUS QUIZ INTERACTIONS
// ─────────────────────────────────────────────

async function handleInteraction(interaction) {
    const customId = interaction.customId || '';

    if (!customId.startsWith('cq_')) return;

    if (
        !interaction.isButton() &&
        !interaction.isStringSelectMenu()
    ) {
        return;
    }

    const parts = customId.split('_');

    const type = parts[1];
    const entryId = parts[2];

    // Play Again operates on a finished quiz, so its active
    // session has already been removed. Check the owner and
    // server before replacing the results with a fresh lobby.
    if (type === 'again' && interaction.isButton()) {
        const expectedOwner = parts[2];
        const expectedServer = parts[3];

        if (
            expectedOwner !== interaction.user.id ||
            expectedServer !== (interaction.guildId || 'DM')
        ) {
            return notice(
                interaction,
                'This quiz belongs to another player.'
            );
        }

        return openSubjectSelector(interaction, true);
    }

    const s = sessions.get(entryId);
    const lobby = lobbies.get(entryId);
    const target = s || lobby;

    if (!target) {
        return notice(
            interaction,
            'This Continuous Quiz screen has expired. ' +
            'Open Continuous Quiz from the menu again.'
        );
    }

    if (
        target.owner !== interaction.user.id ||
        (target.key || target.playerKey) !== playerKey(interaction)
    ) {
        return notice(
            interaction,
            'This quiz belongs to another player. ' +
            'Open your own game from the menu.'
        );
    }

    // ─────────────────────────────────────────
    // ACTIVE GAME BUTTONS
    // ─────────────────────────────────────────

    if (s) {
        if (type === 'stop') {
            removeSession(s);

            await interaction.update(
                payload(finishedScreen(s, true))
            );

            return;
        }

        if (type !== 'answer') return;

        const answerIndex = Number(parts[3]);
        const token = Number(parts[4]);

        if (
            !Number.isInteger(answerIndex) ||
            answerIndex < 0 ||
            answerIndex > 3 ||
            s.answered ||
            token !== s.token
        ) {
            return notice(
                interaction,
                'That answer is no longer available.'
            );
        }

        // The first accepted click wins.
        // Lock the question before awaiting Discord.
        s.answered = true;

        if (s.questionTimer) {
            clearTimeout(s.questionTimer);
        }

        s.questionTimer = null;

        const chosen = s.answers[answerIndex];

        const correct =
            chosen === s.question.correctAnswer;

        if (correct) {
            s.score++;
        }

        s.idleTimeouts = 0;
        s.completed++;

        try {
            await interaction.update(
                payload(
                    gameScreen(
                        s,
                        correct ? 'correct' : 'wrong',
                        chosen
                    )
                )
            );

            scheduleAdvance(s, token);

        } catch (e) {
            console.error(
                'Continuous Quiz answer update failed:',
                e
            );

            removeSession(s);
        }

        return;
    }

    // ─────────────────────────────────────────
    // SELECT SUBJECT
    // ─────────────────────────────────────────

    if (
        lobby.stage === 'category' &&
        type === 'category' &&
        interaction.isStringSelectMenu()
    ) {
        const selected =
            lobby.categories[Number(interaction.values[0])];

        if (!selected) {
            return notice(
                interaction,
                'Please select a valid subject.'
            );
        }

        lobby.category = selected.category;
        lobby.tag = null;

        lobby.tags = lobby.category
            ? tagChoices(lobby.bank, lobby.category)
            : [];

        lobby.tagPage = 0;

        lobby.stage =
            lobby.category && lobby.tags.length
                ? 'tag'
                : 'length';

        await interaction.update(
            payload(
                lobby.stage === 'tag'
                    ? tagScreen(lobby)
                    : lengthScreen(lobby)
            )
        );

        return;
    }

    // ─────────────────────────────────────────
    // MENU PAGINATION
    // ─────────────────────────────────────────

    if (
        type === 'page' &&
        interaction.isButton()
    ) {
        const kind = parts[3];
        const page = Number(parts[4]);

        if (!Number.isInteger(page)) {
            return notice(
                interaction,
                'Invalid page.'
            );
        }

        if (
            kind === 'category' &&
            lobby.stage === 'category'
        ) {
            lobby.categoryPage = page;

            await interaction.update(
                payload(categoryScreen(lobby))
            );

        } else if (
            kind === 'tag' &&
            lobby.stage === 'tag'
        ) {
            lobby.tagPage = page;

            await interaction.update(
                payload(tagScreen(lobby))
            );

        } else {
            await notice(
                interaction,
                'That selection is no longer available.'
            );
        }

        return;
    }

    // ─────────────────────────────────────────
    // SELECT TAGGED TOPIC
    // ─────────────────────────────────────────

    if (
        lobby.stage === 'tag' &&
        type === 'tag' &&
        interaction.isStringSelectMenu()
    ) {
        const chosen =
            lobby.tags[Number(interaction.values[0])];

        if (!chosen) {
            return notice(
                interaction,
                'Please select a valid topic.'
            );
        }

        lobby.tag = chosen.name;
        lobby.stage = 'length';

        await interaction.update(
            payload(lengthScreen(lobby))
        );

        return;
    }

    // ─────────────────────────────────────────
    // PLAY WHOLE SUBJECT
    // ─────────────────────────────────────────

    if (
        lobby.stage === 'tag' &&
        type === 'alltag'
    ) {
        lobby.tag = null;
        lobby.stage = 'length';

        await interaction.update(
            payload(lengthScreen(lobby))
        );

        return;
    }

    // ─────────────────────────────────────────
    // CHANGE SUBJECT
    // ─────────────────────────────────────────

    if (
        type === 'back' &&
        interaction.isButton()
    ) {
        lobby.stage = 'category';
        lobby.category = null;
        lobby.tag = null;

        await interaction.update(
            payload(categoryScreen(lobby))
        );

        return;
    }

    // ─────────────────────────────────────────
    // START CHOSEN QUIZ LENGTH
    // ─────────────────────────────────────────

    if (
        lobby.stage === 'length' &&
        type === 'length' &&
        interaction.isButton()
    ) {
        const value = parts[3];

        const limit =
            value === 'endless'
                ? null
                : Number(value);

        if (
            limit !== null &&
            !LENGTHS.includes(limit)
        ) {
            return notice(
                interaction,
                'Invalid quiz length.'
            );
        }

        if (sessionsByPlayer.has(lobby.key)) {
            return notice(
                interaction,
                'You already have a Continuous Quiz running.'
            );
        }

        const pool = matchingQuestions(
            lobby.bank,
            lobby.category,
            lobby.tag
        );

        if (
            !pool.length ||
            (limit !== null && pool.length < limit)
        ) {
            return notice(
                interaction,
                'There are not enough questions for that choice. ' +
                'Please choose another length.'
            );
        }

        const game = {
            id: id(),
            owner: lobby.owner,
            playerKey: lobby.key,
            category: lobby.category,
            tag: lobby.tag,
            pool,
            deck: shuffle(pool),
            limit,
            completed: 0,
            score: 0,
            idleTimeouts: 0,
            question: null,
            answers: [],
            token: 0,
            answered: false,
            questionTimer: null,
            revealTimer: null,
            message: interaction.message
        };

        nextQuestion(game);

        sessions.set(game.id, game);
        sessionsByPlayer.set(lobby.key, game.id);

        lobbies.delete(lobby.id);
        lobbiesByPlayer.delete(lobby.key);

        try {
            await interaction.update(
                payload(gameScreen(game))
            );

            startTimer(game);

        } catch (e) {
            console.error(
                'Continuous Quiz start failed:',
                e
            );

            removeSession(game);
        }

        return;
    }

    await notice(
        interaction,
        'That Continuous Quiz option is no longer available.'
    );
}

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    startContinuous,
    handleInteraction
};
