 // wordladder_display.js
// PuzzlePilot Word Ladder
// Components V2 display builders
// Extracted from wordladder.js without changing the game screens.

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ContainerBuilder,
    MessageFlags,
    SeparatorBuilder,
    TextDisplayBuilder
} = require('discord.js');

// ─────────────────────────────────────────────
// COLOURS
// ─────────────────────────────────────────────

const COLOUR_PURPLE = 0x8B5CF6;
const COLOUR_GREEN = 0x22C55E;
const COLOUR_RED = 0xEF4444;

// ─────────────────────────────────────────────
// DISPLAY HELPERS
// ─────────────────────────────────────────────

function getDifficultyLabel(
    difficulty
) {
    if (
        difficulty ===
        'easy'
    ) {
        return 'Easy';
    }

    if (
        difficulty ===
        'medium'
    ) {
        return 'Medium';
    }

    return 'Hard';
}

function ladderDisplay(
    session
) {
    return session.words
        .map(
            word =>
                `**${word.toUpperCase()}**`
        )
        .join('  →  ');
}

// ─────────────────────────────────────────────
// COMPONENTS V2 BUILDERS
// ─────────────────────────────────────────────

function separator() {
    return new SeparatorBuilder();
}

function headerText(
    session
) {
    const modeTitle =
        session.mode === 'daily'
            ?
            'DAILY WORD LADDER'
            :
            'WORD LADDER';

    let text =
        `# 🧩 PUZZLEPILOT\n` +
        `## ${modeTitle}`;

    if (
        session.mode !== 'daily' &&
        session.difficulty
    ) {
        text +=
            `\n**${getDifficultyLabel(
                session.difficulty
            )} difficulty**`;
    }

    return text;
}

function targetText(
    session
) {
    return (
        `### START\n` +
        `# ${session.start.toUpperCase()}\n\n` +
        `### TARGET\n` +
        `# ${session.end.toUpperCase()}`
    );
}

function ladderText(
    session
) {
    const moves =
        session.words.length - 1;

    return (
        `### YOUR LADDER\n` +
        `${ladderDisplay(session)}\n\n` +
        `**Moves so far:** ${moves}`
    );
}

function rulesText() {
    return (
        `Change **exactly one letter** each move.\n` +
        `Every entry must be a recognised English word.`
    );
}

function gameButtons(
    sessionId
) {
    return new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId(
                    `wl_next_${sessionId}`
                )
                .setLabel(
                    'Enter Next Word'
                )
                .setStyle(
                    ButtonStyle.Primary
                )
        );
}

function buildGameContainer(
    session,
    message = '',
    messageType = 'normal'
) {
    let accentColour =
        COLOUR_PURPLE;

    if (
        messageType === 'success'
    ) {
        accentColour =
            COLOUR_GREEN;
    }

    if (
        messageType === 'error'
    ) {
        accentColour =
            COLOUR_RED;
    }

    const container =
        new ContainerBuilder()
            .setAccentColor(
                accentColour
            );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                headerText(
                    session
                )
            )
    );

    container.addSeparatorComponents(
        separator()
    );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                targetText(
                    session
                )
            )
    );

    container.addSeparatorComponents(
        separator()
    );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                ladderText(
                    session
                )
            )
    );

    if (
        message
    ) {
        container.addSeparatorComponents(
            separator()
        );

        container.addTextDisplayComponents(
            new TextDisplayBuilder()
                .setContent(
                    message
                )
        );
    }

    container.addSeparatorComponents(
        separator()
    );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                rulesText()
            )
    );

    container.addActionRowComponents(
        gameButtons(
            session.id
        )
    );

    return container;
}

function gamePayload(
    session,
    message = '',
    messageType = 'normal'
) {
    return {
        components: [
            buildGameContainer(
                session,
                message,
                messageType
            )
        ],
        flags:
            MessageFlags.IsComponentsV2
    };
}

function buildDifficultyContainer() {
    const container =
        new ContainerBuilder()
            .setAccentColor(
                COLOUR_PURPLE
            );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                `# 🧩 PUZZLEPILOT\n` +
                `## WORD LADDER`
            )
    );

    container.addSeparatorComponents(
        separator()
    );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                `Choose your difficulty.\n\n` +
                `Change **one letter at a time** ` +
                `until you reach the target word.`
            )
    );

    container.addSeparatorComponents(
        separator()
    );

    container.addActionRowComponents(
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId(
                        'wl_diff_easy'
                    )
                    .setLabel(
                        'Easy'
                    )
                    .setStyle(
                        ButtonStyle.Success
                    ),

                new ButtonBuilder()
                    .setCustomId(
                        'wl_diff_medium'
                    )
                    .setLabel(
                        'Medium'
                    )
                    .setStyle(
                        ButtonStyle.Primary
                    ),

                new ButtonBuilder()
                    .setCustomId(
                        'wl_diff_hard'
                    )
                    .setLabel(
                        'Hard'
                    )
                    .setStyle(
                        ButtonStyle.Danger
                    )
            )
    );

    return container;
}

function difficultyPayload() {
    return {
        components: [
            buildDifficultyContainer()
        ],
        flags:
            MessageFlags.IsComponentsV2
    };
}

function buildSolvedContainer(
    session,
    moves
) {
    const container =
        new ContainerBuilder()
            .setAccentColor(
                COLOUR_GREEN
            );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                `# 🧩 PUZZLEPILOT\n` +
                `## 🎉 WORD LADDER COMPLETE!`
            )
    );

    container.addSeparatorComponents(
        separator()
    );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                `### YOUR LADDER\n` +
                `${ladderDisplay(
                    session
                )}`
            )
    );

    container.addSeparatorComponents(
        separator()
    );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                `You reached **${session.end.toUpperCase()}** ` +
                `in **${moves} ` +
                `${moves === 1 ? 'move' : 'moves'}**!`
            )
    );

    if (
        session.mode === 'daily'
    ) {
        container.addSeparatorComponents(
            separator()
        );

        container.addTextDisplayComponents(
            new TextDisplayBuilder()
                .setContent(
                    `Come back after **midnight UK time** ` +
                    `for a new Daily Word Ladder.`
                )
        );
    }

    return container;
}

function solvedPayload(
    session,
    moves
) {
    return {
        components: [
            buildSolvedContainer(
                session,
                moves
            )
        ],
        flags:
            MessageFlags.IsComponentsV2
    };
}

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    getDifficultyLabel,
    gamePayload,
    difficultyPayload,
    solvedPayload
};
