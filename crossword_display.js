// crossword_display.js
// PuzzlePilot Discord Components V2 crossword presentation.
// Crossword appearance and button IDs are preserved.

const {
    ActionRowBuilder,
    AttachmentBuilder,
    ButtonBuilder,
    ButtonStyle,
    ContainerBuilder,
    MediaGalleryBuilder,
    MediaGalleryItemBuilder,
    MessageFlags,
    SeparatorBuilder,
    StringSelectMenuBuilder,
    TextDisplayBuilder
} = require('discord.js');

const { createCrosswordImage } = require('./crosswordImage');
const { escapeMarkdown, findClue, getClueCells } = require('./crossword_engine');

const COLOUR_PURPLE = 0x8B5CF6;
const COLOUR_GREEN = 0x22C55E;
const COLOUR_RED = 0xEF4444;

function buildClueList(
    clues
) {
    return clues.map(
        clue =>
            `**${clue.number}.** ` +
            `${escapeMarkdown(clue.clue)} ` +
            `(${clue.answer.length})`
    ).join('\n');
}


// ─────────────────────────────────────────────
// SELECTED CLUE TEXT
// ─────────────────────────────────────────────

function buildSelectedClueText(
    session
) {
    if (
        !session.selectedClueId
    ) {
        return (
            'Choose a clue from the ' +
            'dropdown below to start.'
        );
    }

    const clue =
        findClue(
            session.puzzle,
            session.selectedClueId
        );

    if (!clue) {
        return (
            'Choose a clue from the ' +
            'dropdown below to start.'
        );
    }

    const direction =
        clue.direction ===
            'across'
            ?
            'Across'
            :
            'Down';

    // Preserve the positions of crossing letters, including blanks.
    const display = getClueCells(clue).map(cell =>
        session.grid[cell.row][cell.col] || '•'
    ).join(' ');

    return (
        `### ${clue.number} ${direction}\n` +
        `**${escapeMarkdown(clue.clue)}**\n` +
        `Answer: \`${display}\``
    );
}


// ─────────────────────────────────────────────
// BUILD CROSSWORD IMAGE
// ─────────────────────────────────────────────

async function buildCrosswordImage(
    session
) {
    return await createCrosswordImage({
        puzzle:
            session.puzzle,

        grid:
            session.grid,

        selectedClueId:
            session.selectedClueId,

        completed:
            session.completed,

        gaveUp:
            session.gaveUp
    });
}


// ─────────────────────────────────────────────
// COMPONENT HELPERS
// ─────────────────────────────────────────────

function addText(
    container,
    text
) {
    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(text)
    );
}


function addSeparator(
    container
) {
    container.addSeparatorComponents(
        new SeparatorBuilder()
    );
}


// ─────────────────────────────────────────────
// BUILD CLUE SELECT MENU
// ─────────────────────────────────────────────

function buildClueSelect(
    session
) {
    const puzzle =
        session.puzzle;

    const allClues = [
        ...puzzle.across,
        ...puzzle.down
    ];

    const options =
        allClues.map(
            clue => {
                const direction =
                    clue.direction ===
                    'across'
                    ?
                    'Across'
                    :
                    'Down';

                return {
                    label:
                        `${clue.number} ${direction}`,

                    description:
                        `${clue.clue}`.slice(
                            0,
                            100
                        ),

                    value:
                        clue.id,

                    default:
                        session.selectedClueId ===
                        clue.id
                };
            }
        );

    const select =
        new StringSelectMenuBuilder()
            .setCustomId(
                `cw_select_${session.id}`
            )
            .setPlaceholder(
                'Choose a clue'
            )
            .addOptions(options);

    return new ActionRowBuilder()
        .addComponents(select);
}

// ─────────────────────────────────────────────
// BUILD BUTTONS
// ─────────────────────────────────────────────

function buildButtons(
    session
) {
    const buttons = [];

    buttons.push(
        new ButtonBuilder()
            .setCustomId(
                `cw_enter_${session.id}`
            )
            .setLabel(
                'Enter Answer'
            )
            .setStyle(
                ButtonStyle.Primary
            )
            .setDisabled(
                !session.selectedClueId ||
                session.completed ||
                session.gaveUp
            )
    );

    buttons.push(
        new ButtonBuilder()
            .setCustomId(
                `cw_clear_${session.id}`
            )
            .setLabel(
                'Clear Answer'
            )
            .setStyle(
                ButtonStyle.Secondary
            )
            .setDisabled(
                !session.selectedClueId ||
                session.completed ||
                session.gaveUp
            )
    );

    buttons.push(
        new ButtonBuilder()
            .setCustomId(
                `cw_check_${session.id}`
            )
            .setLabel(
                'Check'
            )
            .setStyle(
                ButtonStyle.Success
            )
            .setDisabled(
                session.completed ||
                session.gaveUp
            )
    );

    buttons.push(
        new ButtonBuilder()
            .setCustomId(
                `cw_giveup_${session.id}`
            )
            .setLabel(
                'Give Up'
            )
            .setStyle(
                ButtonStyle.Danger
            )
            .setDisabled(
                session.completed ||
                session.gaveUp
            )
    );

    return new ActionRowBuilder()
        .addComponents(
            buttons
        );
}


// ─────────────────────────────────────────────
// BUILD PLAY AGAIN BUTTON
// ─────────────────────────────────────────────

function buildPlayAgainButton(
    session
) {
    return new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId(
                    `cw_again_${session.id}`
                )
                .setLabel(
                    'Play Again'
                )
                .setStyle(
                    ButtonStyle.Primary
                )
        );
}

// ─────────────────────────────────────────────
// BUILD CROSSWORD DISPLAY
// ─────────────────────────────────────────────

async function buildCrosswordDisplay(
    session
) {
    const imageBuffer =
        await buildCrosswordImage(
            session
        );

    const imageName =
        `crossword_${session.id}.png`;

    const attachment =
        new AttachmentBuilder(
            imageBuffer,
            {
                name:
                    imageName
            }
        );

    const container =
        new ContainerBuilder()
            .setAccentColor(
                session.completed
                    ?
                    COLOUR_GREEN
                    :
                    session.gaveUp
                        ?
                        COLOUR_RED
                        :
                        COLOUR_PURPLE
            );

    const title =
        session.mode ===
            'daily'
            ?
            'DAILY CROSSWORD'
            :
            'CONTINUOUS CROSSWORD';

    addText(
        container,
        `# 🧩 ${title}`
    );

    addText(
        container,
        `**${escapeMarkdown(session.puzzle.title)}** ` +
        `• ${session.puzzle.size}×${session.puzzle.size} ` +
        `• ${session.puzzle.difficulty}`
    );

    addSeparator(
        container
    );

    const gallery =
        new MediaGalleryBuilder()
            .addItems(
                new MediaGalleryItemBuilder()
                    .setURL(
                        `attachment://${imageName}`
                    )
            );

    container.addMediaGalleryComponents(
        gallery
    );

    addSeparator(
        container
    );

    if (
        session.completed
    ) {
        addText(
            container,
            '## 🎉 Crossword completed!'
        );

        addText(
            container,
            'Every letter is correct. ' +
            'Well played!'
        );
    } else if (
        session.gaveUp
    ) {
        addText(
            container,
            '## 🏳️ Crossword revealed'
        );

        addText(
            container,
            'The full solution is now shown.'
        );
    } else {
        addText(
            container,
            '## Choose a Clue'
        );

        addText(
            container,
            buildSelectedClueText(
                session
            )
        );

        addSeparator(
            container
        );

        addText(
            container,
            '### Across\n' +
            buildClueList(
                session.puzzle.across
            )
        );

        addSeparator(
            container
        );

        addText(
            container,
            '### Down\n' +
            buildClueList(
                session.puzzle.down
            )
        );

        addSeparator(
            container
        );

        addText(
            container,
            'Choose a clue, then press ' +
            '**Enter Answer** to fill it in. ' +
            'Crossing letters are kept ' +
            'unless you change them.'
        );
    }

    const components = [
        container
    ];

    if (
        !session.completed &&
        !session.gaveUp
    ) {
        components.push(
            buildClueSelect(
                session
            )
        );

        components.push(
            buildButtons(
                session
            )
        );
    } else if (
        session.mode ===
        'continuous'
    ) {
        components.push(
            buildPlayAgainButton(
                session
            )
        );
    }

    return {
        content:
            '',

        components,

        files: [
            attachment
        ],

        flags:
            MessageFlags.IsComponentsV2
    };
}


module.exports = { buildCrosswordDisplay };
