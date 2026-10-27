 // logicgrid_display.js
// PuzzlePilot Logic Grid
// Components V2 board, controls and completion display
// Extracted from logicgrid.js without changing game screens.

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

const COLOUR_PURPLE =
    0x8B5CF6;

const COLOUR_GREEN =
    0x22C55E;

const COLOUR_RED =
    0xEF4444;

// ─────────────────────────────────────────────
// DISPLAY HELPERS
// ─────────────────────────────────────────────

function escapeMarkdown(
    text
) {
    return String(
        text
    ).replace(
        /([\\_*~`|>])/g,
        '\\$1'
    );
}

function getModeHeading(
    state
) {
    return state.mode ===
        'daily'
        ?
        'DAILY LOGIC GRID'
        :
        'LOGIC GRID';
}

function getModeFooter(
    state
) {
    return state.mode ===
        'daily'
        ?
        'Daily puzzle • Changes at midnight UK time'
        :
        'Continuous mode • Play as many puzzles as you like';
}

function buildGridGuide(
    puzzle
) {
    return puzzle.columns
        .map(
            (
                column,
                index
            ) =>
                `**${index + 1}.** ` +
                `${escapeMarkdown(
                    column
                )}`
        )
        .join(
            '   •   '
        );
}

function buildClueText(
    puzzle
) {
    return puzzle.clues
        .map(
            (
                clue,
                index
            ) =>
                `**${index + 1}.** ` +
                `${escapeMarkdown(
                    clue
                )}`
        )
        .join(
            '\n'
        );
}

function separator() {
    return new SeparatorBuilder();
}

// ─────────────────────────────────────────────
// COMPONENTS V2 BOARD
// ─────────────────────────────────────────────

function buildBoardContainer(
    state
) {
    const puzzle =
        state.puzzle;

    const container =
        new ContainerBuilder()
            .setAccentColor(
                state.notice &&
                state.notice.type ===
                    'error'
                    ?
                    COLOUR_RED
                    :
                    COLOUR_PURPLE
            );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                `# 🧩 PUZZLEPILOT\n` +
                `## ${getModeHeading(
                    state
                )}`
            )
    );

    container.addSeparatorComponents(
        separator()
    );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                `### ${escapeMarkdown(
                    puzzle.title
                )}\n` +
                `${escapeMarkdown(
                    puzzle.introduction
                )}`
            )
    );

    container.addSeparatorComponents(
        separator()
    );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                `### CLUES\n` +
                `${buildClueText(
                    puzzle
                )}`
            )
    );

    container.addSeparatorComponents(
        separator()
    );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                `### ${escapeMarkdown(
                    puzzle.columnLabel
                ).toUpperCase()} COLUMNS\n` +
                `${buildGridGuide(
                    puzzle
                )}`
            )
    );

    if (
        state.notice
    ) {
        container.addSeparatorComponents(
            separator()
        );

        container.addTextDisplayComponents(
            new TextDisplayBuilder()
                .setContent(
                    `### ${state.notice.title}\n` +
                    `${state.notice.text}`
                )
        );
    }

    container.addSeparatorComponents(
        separator()
    );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                `Click a cell to cycle ` +
                `**blank → ✓ → ✗ → blank**.\n` +
                `A **✓** automatically rules out ` +
                `the other choices in its row and column.`
            )
    );

    container.addSeparatorComponents(
        separator()
    );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                `${getModeFooter(
                    state
                )}\n` +
                `Press **Check Solution** when you are ready.`
            )
    );

    return container;
}

function boardPayload(
    state
) {
    return {
        components: [
            buildBoardContainer(
                state
            ),
            ...renderGridComponents(
                state
            )
        ],

        flags:
            MessageFlags
                .IsComponentsV2
    };
}

// ─────────────────────────────────────────────
// COMPONENTS V2 COMPLETION
// ─────────────────────────────────────────────

function buildWinContainer(
    state
) {
    const puzzle =
        state.puzzle;

    const solutionLines =
        puzzle.rows.map(
            row =>
                `**${escapeMarkdown(
                    row
                )}** → ` +
                `${escapeMarkdown(
                    puzzle.solution[
                        row
                    ]
                )}`
        );

    const container =
        new ContainerBuilder()
            .setAccentColor(
                COLOUR_GREEN
            );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                `# 🧩 PUZZLEPILOT\n` +
                `## 🎉 LOGIC GRID COMPLETE!`
            )
    );

    container.addSeparatorComponents(
        separator()
    );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                `You solved **${escapeMarkdown(
                    puzzle.title
                )}** correctly.`
            )
    );

    container.addSeparatorComponents(
        separator()
    );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                `### SOLUTION\n` +
                `${solutionLines.join(
                    '\n'
                )}`
            )
    );

    container.addSeparatorComponents(
        separator()
    );

    container.addTextDisplayComponents(
        new TextDisplayBuilder()
            .setContent(
                getModeFooter(
                    state
                )
            )
    );

    if (
        state.mode ===
        'daily'
    ) {
        container.addSeparatorComponents(
            separator()
        );

        container.addTextDisplayComponents(
            new TextDisplayBuilder()
                .setContent(
                    `Come back after **midnight UK time** ` +
                    `for a new Daily Logic Grid.`
                )
        );
    }

    return container;
}

function winPayload(
    state
) {
    return {
        components: [
            buildWinContainer(
                state
            ),
            ...renderFinishedControls(
                state
            )
        ],

        flags:
            MessageFlags
                .IsComponentsV2
    };
}

// ─────────────────────────────────────────────
// GRID BUTTONS
// ─────────────────────────────────────────────

function getCellButton(
    state,
    rowIndex,
    columnIndex
) {
    const cellState =
        state.grid[
            rowIndex
        ][
            columnIndex
        ];

    let label =
        '•';

    let style =
        ButtonStyle.Secondary;

    if (
        cellState ===
        'yes'
    ) {
        label =
            '✓';

        style =
            ButtonStyle.Success;
    }

    if (
        cellState ===
        'no'
    ) {
        label =
            '✗';

        style =
            ButtonStyle.Danger;
    }

    return new ButtonBuilder()
        .setCustomId(
            `lg_cell_${rowIndex}_${columnIndex}`
        )
        .setLabel(
            label
        )
        .setStyle(
            style
        )
        .setDisabled(
            state.finished
        );
}

function renderGridComponents(
    state
) {
    const rows = [];

    const puzzle =
        state.puzzle;

    for (
        let rowIndex = 0;
        rowIndex <
            puzzle.rows.length;
        rowIndex++
    ) {
        const actionRow =
            new ActionRowBuilder();

        actionRow.addComponents(
            new ButtonBuilder()
                .setCustomId(
                    `lg_label_${rowIndex}`
                )
                .setLabel(
                    puzzle.rows[
                        rowIndex
                    ]
                )
                .setStyle(
                    ButtonStyle.Secondary
                )
                .setDisabled(
                    true
                )
        );

        for (
            let columnIndex = 0;
            columnIndex <
                puzzle.columns.length;
            columnIndex++
        ) {
            actionRow.addComponents(
                getCellButton(
                    state,
                    rowIndex,
                    columnIndex
                )
            );
        }

        rows.push(
            actionRow
        );
    }

    const controlRow =
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId(
                        'lg_reset'
                    )
                    .setLabel(
                        'Reset Grid'
                    )
                    .setEmoji(
                        '↩️'
                    )
                    .setStyle(
                        ButtonStyle.Secondary
                    ),

                new ButtonBuilder()
                    .setCustomId(
                        'lg_check'
                    )
                    .setLabel(
                        'Check Solution'
                    )
                    .setEmoji(
                        '✅'
                    )
                    .setStyle(
                        ButtonStyle.Success
                    )
            );

    rows.push(
        controlRow
    );

    return rows;
}

function renderFinishedControls(
    state
) {
    if (
        state.mode !==
        'continuous'
    ) {
        return [];
    }

    return [
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId(
                        'lg_play_again'
                    )
                    .setLabel(
                        'Play Again'
                    )
                    .setEmoji(
                        '🔄'
                    )
                    .setStyle(
                        ButtonStyle.Primary
                    )
            )
    ];
}

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    getModeHeading,
    boardPayload,
    winPayload
};
