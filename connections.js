// connections.js
// PuzzlePilot Connections
// Components V2 game display
// Uses puzzles from connections_pack1.js

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ContainerBuilder,
    TextDisplayBuilder,
    SeparatorBuilder,
    MessageFlags
} = require('discord.js');

const connectionsPack1 =
    require('./connections_pack1.js');

// ─────────────────────────────────────────────
// PUZZLE BANK
// ─────────────────────────────────────────────

const connectionsPuzzles = [
    ...connectionsPack1
];

// ─────────────────────────────────────────────
// SETTINGS
// ─────────────────────────────────────────────

const STARTING_LIVES = 4;

// Fixed Connections group order:
//
// 1st = yellow
// 2nd = green
// 3rd = blue
// 4th = purple

const GROUP_DISPLAY = [
    {
        emoji: '🟨',
        colour: 0xF1C40F
    },
    {
        emoji: '🟩',
        colour: 0x57F287
    },
    {
        emoji: '🟦',
        colour: 0x3498DB
    },
    {
        emoji: '🟪',
        colour: 0x9B59B6
    }
];

// Main PuzzlePilot accent colour.

const GAME_COLOUR = 0x5865F2;

// Active game boards.

const boards = new Map();

// ─────────────────────────────────────────────
// PUZZLE SELECTION
// ─────────────────────────────────────────────

function getRandomPuzzle(
    excludePuzzle = null
) {

    if (
        connectionsPuzzles.length <= 1
    ) {
        return connectionsPuzzles[0];
    }

    let choices =
        connectionsPuzzles;

    if (excludePuzzle) {

        choices =
            connectionsPuzzles.filter(
                puzzle =>
                    puzzle !==
                    excludePuzzle
            );
    }

    if (
        choices.length === 0
    ) {
        choices =
            connectionsPuzzles;
    }

    return choices[
        Math.floor(
            Math.random() *
            choices.length
        )
    ];
}

function getUKDate() {

    return new Intl.DateTimeFormat(
        'en-GB',
        {
            timeZone:
                'Europe/London',

            year:
                'numeric',

            month:
                '2-digit',

            day:
                '2-digit'
        }
    ).format(
        new Date()
    );
}

function getDailyPuzzle() {

    const ukDate =
        getUKDate();

    const numbers =
        ukDate.match(
            /\d+/g
        );

    const day =
        Number(
            numbers[0]
        );

    const month =
        Number(
            numbers[1]
        );

    const year =
        Number(
            numbers[2]
        );

    const seed =
        year * 10000 +
        month * 100 +
        day;

    const index =
        seed %
        connectionsPuzzles.length;

    return connectionsPuzzles[
        index
    ];
}

// ─────────────────────────────────────────────
// GENERAL HELPERS
// ─────────────────────────────────────────────

function shuffle(array) {

    return array
        .map(
            value => ({
                value,
                sort:
                    Math.random()
            })
        )
        .sort(
            (a, b) =>
                a.sort -
                b.sort
        )
        .map(
            item =>
                item.value
        );
}

function getModeName(mode) {

    return mode === 'daily'
        ? 'DAILY CONNECTIONS'
        : 'CONTINUOUS CONNECTIONS';
}

function getModeFooter(mode) {

    return mode === 'daily'
        ? 'Daily puzzle • Changes at midnight UK time'
        : 'Continuous mode • Play as many puzzles as you like';
}

function getMistakesDisplay(
    lives
) {

    const remaining =
        '● '.repeat(
            lives
        );

    const used =
        '○ '.repeat(
            STARTING_LIVES -
            lives
        );

    return (
        remaining +
        used
    ).trim();
}

function getPuzzleGroupNames(
    puzzle
) {

    return Object.keys(
        puzzle.groups
    );
}

function getGroupIndex(
    puzzle,
    groupName
) {

    return getPuzzleGroupNames(
        puzzle
    ).indexOf(
        groupName
    );
}

function getGroupDisplay(
    index
) {

    return (
        GROUP_DISPLAY[index] ||
        {
            emoji: '⬜',
            colour: 0x99AAB5
        }
    );
}

function getGroupNameForTile(
    puzzle,
    tile
) {

    for (
        const [
            groupName,
            groupTiles
        ]
        of Object.entries(
            puzzle.groups
        )
    ) {

        if (
            groupTiles.includes(
                tile
            )
        ) {
            return groupName;
        }
    }

    return null;
}

function getTileEmoji(
    puzzle,
    tile
) {

    const groupName =
        getGroupNameForTile(
            puzzle,
            tile
        );

    if (!groupName) {
        return '⬜';
    }

    const groupIndex =
        getGroupIndex(
            puzzle,
            groupName
        );

    return getGroupDisplay(
        groupIndex
    ).emoji;
}

function getUnsolvedTiles(
    board
) {

    return board.tiles.filter(
        tile => {

            const groupName =
                getGroupNameForTile(
                    board.puzzle,
                    tile
                );

            return (
                !board.solvedGroups.includes(
                    groupName
                )
            );
        }
    );
}

function isOneAway(
    board,
    selectedTiles
) {

    return Object.entries(
        board.puzzle.groups
    ).some(
        ([
            groupName,
            groupTiles
        ]) => {

            if (
                board.solvedGroups.includes(
                    groupName
                )
            ) {
                return false;
            }

            const matches =
                selectedTiles.filter(
                    tile =>
                        groupTiles.includes(
                            tile
                        )
                ).length;

            return (
                matches === 3
            );
        }
    );
}

function escapeMarkdownText(
    text
) {

    return String(
        text
    ).replace(
        /([\\_*~`|>])/g,
        '\\$1'
    );
}

function formatGroupName(
    groupName
) {

    return escapeMarkdownText(
        groupName.toUpperCase()
    );
}

function getDailyPuzzleNumber() {

    const ukDate =
        getUKDate();

    const numbers =
        ukDate.match(
            /\d+/g
        );

    const day =
        String(
            numbers[0]
        ).padStart(
            2,
            '0'
        );

    const month =
        String(
            numbers[1]
        ).padStart(
            2,
            '0'
        );

    const year =
        String(
            numbers[2]
        );

    return (
        `${day}/${month}/${year}`
    );
}

// ─────────────────────────────────────────────
// SHARE RESULTS
// ─────────────────────────────────────────────

function buildShareText(
    board
) {

    const rows =
        board.guessHistory
            .map(
                guess =>
                    guess.join('')
            )
            .join('\n');

    const mistakesUsed =
        STARTING_LIVES -
        board.lives;

    const mistakeWord =
        mistakesUsed === 1
            ? 'mistake'
            : 'mistakes';

    return (
        `PuzzlePilot Connections — ${getDailyPuzzleNumber()}\n` +
        `${rows}\n` +
        `🎯 ${mistakesUsed} ${mistakeWord}`
    );
}

// ─────────────────────────────────────────────
// CREATE BOARD
// ─────────────────────────────────────────────

function createBoard(
    puzzle,
    mode
) {

    const allTiles = [];

    for (
        const group
        of Object.values(
            puzzle.groups
        )
    ) {
        allTiles.push(
            ...group
        );
    }

    return {

        puzzle,

        mode,

        tiles:
            shuffle(
                allTiles
            ),

        solvedGroups: [],

        selected: [],

        lives:
            STARTING_LIVES,

        finished:
            false,

        notice:
            null,

        guessHistory:
            []
    };
}

// ─────────────────────────────────────────────
// COMPONENT HELPERS
// ─────────────────────────────────────────────

function makeText(
    content
) {

    return new TextDisplayBuilder()
        .setContent(
            content
        );
}

function makeSeparator() {

    return new SeparatorBuilder();
}

function addHeader(
    container,
    board
) {

    container.addTextDisplayComponents(
        makeText(
            '# 🔗 PUZZLEPILOT\n' +
            `## ${getModeName(board.mode)}`
        )
    );

    container.addSeparatorComponents(
        makeSeparator()
    );

    container.addTextDisplayComponents(
        makeText(
            '**Find four groups of four connected words.**\n\n' +
            `**Mistakes remaining:** ${getMistakesDisplay(board.lives)}`
        )
    );
}

// ─────────────────────────────────────────────
// SOLVED GROUP DISPLAY
// ─────────────────────────────────────────────

function getSortedSolvedGroups(
    board
) {

    return [
        ...board.solvedGroups
    ].sort(
        (a, b) =>
            getGroupIndex(
                board.puzzle,
                a
            ) -
            getGroupIndex(
                board.puzzle,
                b
            )
    );
}

function addSolvedGroups(
    container,
    board
) {

    const solvedGroups =
        getSortedSolvedGroups(
            board
        );

    if (
        solvedGroups.length === 0
    ) {
        return;
    }

    container.addSeparatorComponents(
        makeSeparator()
    );

    solvedGroups.forEach(
        groupName => {

            const groupIndex =
                getGroupIndex(
                    board.puzzle,
                    groupName
                );

            const display =
                getGroupDisplay(
                    groupIndex
                );

            const words =
                board.puzzle.groups[
                    groupName
                ];

            const wordLine =
                words
                    .map(
                        escapeMarkdownText
                    )
                    .join(
                        ' • '
                    );

            container.addTextDisplayComponents(
                makeText(
                    `### ${display.emoji} ${formatGroupName(groupName)}\n` +
                    `**${wordLine}**`
                )
            );
        }
    );
}

// ─────────────────────────────────────────────
// NOTICE DISPLAY
// ─────────────────────────────────────────────

function addNotice(
    container,
    board
) {

    if (
        !board.notice
    ) {
        return;
    }

    container.addSeparatorComponents(
        makeSeparator()
    );

    container.addTextDisplayComponents(
        makeText(
            `### ${board.notice.title}\n` +
            board.notice.text
        )
    );
}

// ─────────────────────────────────────────────
// TILE BUTTONS
// ─────────────────────────────────────────────

function buildTileRows(
    board
) {

    const rows = [];

    const unsolvedTiles =
        getUnsolvedTiles(
            board
        );

    for (
        let i = 0;
        i < unsolvedTiles.length;
        i += 4
    ) {

        const row =
            new ActionRowBuilder();

        unsolvedTiles
            .slice(
                i,
                i + 4
            )
            .forEach(
                tile => {

                    const isSelected =
                        board.selected.includes(
                            tile
                        );

                    row.addComponents(

                        new ButtonBuilder()

                            .setCustomId(
                                `conn_tile_${tile}`
                            )

                            .setLabel(
                                tile
                            )

                            .setStyle(
                                isSelected
                                    ? ButtonStyle.Primary
                                    : ButtonStyle.Secondary
                            )
                    );
                }
            );

        rows.push(
            row
        );
    }

    return rows;
}

// ─────────────────────────────────────────────
// CONTROL BUTTONS
// ─────────────────────────────────────────────

function buildControlRow(
    board
) {

    return new ActionRowBuilder()

        .addComponents(

            new ButtonBuilder()

                .setCustomId(
                    'conn_clear'
                )

                .setLabel(
                    'Deselect'
                )

                .setEmoji(
                    '↩️'
                )

                .setStyle(
                    ButtonStyle.Secondary
                )

                .setDisabled(
                    board.selected.length === 0
                ),

            new ButtonBuilder()

                .setCustomId(
                    'conn_shuffle'
                )

                .setLabel(
                    'Shuffle'
                )

                .setEmoji(
                    '🔀'
                )

                .setStyle(
                    ButtonStyle.Secondary
                ),

            new ButtonBuilder()

                .setCustomId(
                    'conn_submit'
                )

                .setLabel(
                    'Submit'
                )

                .setEmoji(
                    '✅'
                )

                .setStyle(
                    ButtonStyle.Success
                )

                .setDisabled(
                    board.selected.length !== 4
                )
        );
}

// ─────────────────────────────────────────────
// ACTIVE GAME DISPLAY
// ─────────────────────────────────────────────

function buildGameComponents(
    board
) {

    const container =
        new ContainerBuilder()
            .setAccentColor(
                GAME_COLOUR
            );

    addHeader(
        container,
        board
    );

    addSolvedGroups(
        container,
        board
    );

    addNotice(
        container,
        board
    );

    container.addSeparatorComponents(
        makeSeparator()
    );

    container.addTextDisplayComponents(
        makeText(
            `**Selected: ${board.selected.length}/4**`
        )
    );

    const tileRows =
        buildTileRows(
            board
        );

    tileRows.forEach(
        row => {

            container.addActionRowComponents(
                row
            );
        }
    );

    container.addSeparatorComponents(
        makeSeparator()
    );

    container.addActionRowComponents(
        buildControlRow(
            board
        )
    );

    container.addTextDisplayComponents(
        makeText(
            `-# ${getModeFooter(board.mode)}`
        )
    );

    return [
        container
    ];
}

// ─────────────────────────────────────────────
// FINISHED CONTROLS
// ─────────────────────────────────────────────

function buildFinishedControlRow(
    board
) {

    const buttons = [];

    if (
        board.mode ===
        'continuous'
    ) {

        buttons.push(

            new ButtonBuilder()

                .setCustomId(
                    'conn_play_again'
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
        );
    }

    if (
        board.mode === 'daily' &&
        board.solvedGroups.length === 4
    ) {

        buttons.push(

            new ButtonBuilder()

                .setCustomId(
                    'conn_share_results'
                )

                .setLabel(
                    'Share Results'
                )

                .setEmoji(
                    '📋'
                )

                .setStyle(
                    ButtonStyle.Primary
                )
        );
    }

    if (
        buttons.length === 0
    ) {
        return null;
    }

    return new ActionRowBuilder()
        .addComponents(
            ...buttons
        );
}

// ─────────────────────────────────────────────
// WIN DISPLAY
// ─────────────────────────────────────────────

function buildWinComponents(
    board
) {

    const container =
        new ContainerBuilder()
            .setAccentColor(
                0x57F287
            );

    container.addTextDisplayComponents(
        makeText(
            '# 🎉 CONNECTIONS COMPLETE!\n' +
            '**You found all four groups!**'
        )
    );

    container.addSeparatorComponents(
        makeSeparator()
    );

    container.addTextDisplayComponents(
        makeText(
            `**Mistakes remaining:** ${getMistakesDisplay(board.lives)}`
        )
    );

    addSolvedGroups(
        container,
        board
    );

    const controls =
        buildFinishedControlRow(
            board
        );

    if (controls) {

        container.addSeparatorComponents(
            makeSeparator()
        );

        container.addActionRowComponents(
            controls
        );
    }

    container.addTextDisplayComponents(
        makeText(
            `-# ${getModeFooter(board.mode)}`
        )
    );

    return [
        container
    ];
}

// ─────────────────────────────────────────────
// GAME OVER DISPLAY
// ─────────────────────────────────────────────

function buildGameOverComponents(
    board
) {

    const container =
        new ContainerBuilder()
            .setAccentColor(
                0xED4245
            );

    container.addTextDisplayComponents(
        makeText(
            '# 💀 CONNECTIONS OVER\n' +
            '**No mistakes remaining.**\n\n' +
            'The four groups were:'
        )
    );

    container.addSeparatorComponents(
        makeSeparator()
    );

    getPuzzleGroupNames(
        board.puzzle
    ).forEach(
        groupName => {

            const groupIndex =
                getGroupIndex(
                    board.puzzle,
                    groupName
                );

            const display =
                getGroupDisplay(
                    groupIndex
                );

            const words =
                board.puzzle.groups[
                    groupName
                ];

            const wordLine =
                words
                    .map(
                        escapeMarkdownText
                    )
                    .join(
                        ' • '
                    );

            container.addTextDisplayComponents(
                makeText(
                    `### ${display.emoji} ${formatGroupName(groupName)}\n` +
                    `**${wordLine}**`
                )
            );
        }
    );

    const controls =
        buildFinishedControlRow(
            board
        );

    if (controls) {

        container.addSeparatorComponents(
            makeSeparator()
        );

        container.addActionRowComponents(
            controls
        );
    }

    container.addTextDisplayComponents(
        makeText(
            `-# ${getModeFooter(board.mode)}`
        )
    );

    return [
        container
    ];
}

// ─────────────────────────────────────────────
// START GAME
// ─────────────────────────────────────────────

async function startGame(
    interaction,
    mode
) {

    const puzzle =
        mode === 'daily'
            ? getDailyPuzzle()
            : getRandomPuzzle();

    const board =
        createBoard(
            puzzle,
            mode
        );

    try {

        await interaction.reply({

            components:
                buildGameComponents(
                    board
                ),

            flags:
                MessageFlags.IsComponentsV2
        });

        const message =
            await interaction.fetchReply();

        boards.set(
            message.id,
            board
        );

        console.log(
            `${getModeName(mode)} board created: ${message.id}`
        );

    } catch (error) {

        console.error(
            `Error starting ${mode} Connections:`,
            error
        );

        if (
            !interaction.replied &&
            !interaction.deferred
        ) {

            await interaction.reply({

                content:
                    '❌ Sorry, I could not start Connections.',

                ephemeral:
                    true
            });
        }
    }
}

async function startDaily(
    interaction
) {

    return startGame(
        interaction,
        'daily'
    );
}

async function startContinuous(
    interaction
) {

    return startGame(
        interaction,
        'continuous'
    );
}

// ─────────────────────────────────────────────
// UPDATE ACTIVE BOARD
// ─────────────────────────────────────────────

async function updateBoard(
    interaction,
    state
) {

    await interaction.update({

        components:
            buildGameComponents(
                state
            )
    });
}

// ─────────────────────────────────────────────
// TILE CLICK
// ─────────────────────────────────────────────

async function handleTileClick(
    interaction,
    state
) {

    const tile =
        interaction.customId.replace(
            'conn_tile_',
            ''
        );

    state.notice =
        null;

    if (
        state.selected.includes(
            tile
        )
    ) {

        state.selected =
            state.selected.filter(
                selectedTile =>
                    selectedTile !==
                    tile
            );

        await updateBoard(
            interaction,
            state
        );

        return;
    }

    if (
        state.selected.length >= 4
    ) {

        await interaction.reply({

            content:
                '⚠️ You already have 4 tiles selected. ' +
                'Submit them or deselect one first.',

            ephemeral:
                true
        });

        return;
    }

    state.selected.push(
        tile
    );

    await updateBoard(
        interaction,
        state
    );
}

// ─────────────────────────────────────────────
// DESELECT
// ─────────────────────────────────────────────

async function handleClear(
    interaction,
    state
) {

    state.selected = [];

    state.notice =
        null;

    await updateBoard(
        interaction,
        state
    );
}

// ─────────────────────────────────────────────
// SHUFFLE
// ─────────────────────────────────────────────

async function handleShuffle(
    interaction,
    state
) {

    const unsolvedTiles =
        shuffle(
            getUnsolvedTiles(
                state
            )
        );

    const solvedTiles =
        state.tiles.filter(
            tile =>
                !unsolvedTiles.includes(
                    tile
                )
        );

    state.tiles = [
        ...unsolvedTiles,
        ...solvedTiles
    ];

    state.selected = [];

    state.notice =
        null;

    await updateBoard(
        interaction,
        state
    );
}

// ─────────────────────────────────────────────
// SUBMIT
// ─────────────────────────────────────────────

async function handleSubmit(
    interaction,
    state,
    messageId
) {

    if (
        state.selected.length !== 4
    ) {

        await interaction.reply({

            content:
                '⚠️ Select exactly 4 tiles before submitting.',

            ephemeral:
                true
        });

        return;
    }

    const selectedTiles = [
        ...state.selected
    ];

    // Save the colour pattern for
    // spoiler-free Daily sharing.

    state.guessHistory.push(

        selectedTiles.map(
            tile =>
                getTileEmoji(
                    state.puzzle,
                    tile
                )
        )
    );

    let correctGroupName =
        null;

    for (
        const [
            groupName,
            groupTiles
        ]
        of Object.entries(
            state.puzzle.groups
        )
    ) {

        if (
            state.solvedGroups.includes(
                groupName
            )
        ) {
            continue;
        }

        const allCorrect =
            selectedTiles.every(
                tile =>
                    groupTiles.includes(
                        tile
                    )
            );

        if (allCorrect) {

            correctGroupName =
                groupName;

            break;
        }
    }

    // ─────────────────────────────────────────
    // CORRECT GROUP
    // ─────────────────────────────────────────

    if (correctGroupName) {

        state.solvedGroups.push(
            correctGroupName
        );

        state.selected = [];

        state.notice =
            null;

        if (
            state.solvedGroups.length === 4
        ) {

            state.finished =
                true;

            await interaction.update({

                components:
                    buildWinComponents(
                        state
                    )
            });

            console.log(
                `Connections puzzle completed: ${messageId}`
            );

            return;
        }

        await updateBoard(
            interaction,
            state
        );

        return;
    }

    // ─────────────────────────────────────────
    // WRONG GROUP
    // ─────────────────────────────────────────

    const oneAway =
        isOneAway(
            state,
            selectedTiles
        );

    state.lives--;

    state.selected = [];

    if (
        state.lives <= 0
    ) {

        state.finished =
            true;

        await interaction.update({

            components:
                buildGameOverComponents(
                    state
                )
        });

        console.log(
            `Connections game over: ${messageId}`
        );

        return;
    }

    state.notice =
        oneAway

            ? {

                title:
                    '🔥 One away!',

                text:
                    'Three of those words belong together. ' +
                    'One mistake used.'
            }

            : {

                title:
                    '❌ Not quite',

                text:
                    'Those four do not make a group. ' +
                    'One mistake used.'
            };

    await updateBoard(
        interaction,
        state
    );
}

// ─────────────────────────────────────────────
// PLAY AGAIN
// ─────────────────────────────────────────────

async function handlePlayAgain(
    interaction,
    state,
    messageId
) {

    if (
        state.mode !==
        'continuous'
    ) {

        await interaction.reply({

            content:
                '⚠️ Play Again is only available in Continuous Connections.',

            ephemeral:
                true
        });

        return;
    }

    const puzzle =
        getRandomPuzzle(
            state.puzzle
        );

    const newBoard =
        createBoard(
            puzzle,
            'continuous'
        );

    boards.set(
        messageId,
        newBoard
    );

    await interaction.update({

        components:
            buildGameComponents(
                newBoard
            )
    });

    console.log(
        `Continuous Connections restarted: ${messageId}`
    );
}

// ─────────────────────────────────────────────
// SHARE RESULTS
// ─────────────────────────────────────────────

async function handleShareResults(
    interaction,
    state
) {

    if (
        state.mode !== 'daily' ||
        state.solvedGroups.length !== 4
    ) {

        await interaction.reply({

            content:
                '⚠️ Share Results is available after completing the Daily Connections puzzle.',

            ephemeral:
                true
        });

        return;
    }

    const shareText =
        buildShareText(
            state
        );

    await interaction.reply({

        content:
            '**Your spoiler-free result:**\n```text\n' +
            `${shareText}\n` +
            '```\nCopy that and paste it wherever you want to share it.',

        ephemeral:
            true
    });
}

// ─────────────────────────────────────────────
// MAIN INTERACTION HANDLER
// ─────────────────────────────────────────────

async function handleInteraction(
    interaction
) {

    if (
        !interaction.isButton()
    ) {
        return;
    }

    const isConnectionsButton =

        interaction.customId.startsWith(
            'conn_tile_'
        ) ||

        interaction.customId ===
            'conn_clear' ||

        interaction.customId ===
            'conn_shuffle' ||

        interaction.customId ===
            'conn_submit' ||

        interaction.customId ===
            'conn_play_again' ||

        interaction.customId ===
            'conn_share_results';

    if (
        !isConnectionsButton
    ) {
        return;
    }

    const messageId =
        interaction.message.id;

    const state =
        boards.get(
            messageId
        );

    // ─────────────────────────────────────────
    // BOARD NOT FOUND
    // ─────────────────────────────────────────

    if (!state) {

        console.error(
            `Connections board not found for message ${messageId}`
        );

        if (
            !interaction.replied &&
            !interaction.deferred
        ) {

            await interaction.reply({

                content:
                    '⚠️ Sorry, I lost this Connections puzzle. ' +
                    'Please start a new one.',

                ephemeral:
                    true
            });
        }

        return;
    }

    try {

        // These buttons still work after
        // the puzzle has finished.

        if (
            interaction.customId ===
            'conn_play_again'
        ) {

            await handlePlayAgain(
                interaction,
                state,
                messageId
            );

            return;
        }

        if (
            interaction.customId ===
            'conn_share_results'
        ) {

            await handleShareResults(
                interaction,
                state
            );

            return;
        }

        // Other controls stop once finished.

        if (
            state.finished
        ) {

            await interaction.reply({

                content:
                    '🏁 This Connections puzzle has already finished.',

                ephemeral:
                    true
            });

            return;
        }

        if (
            interaction.customId.startsWith(
                'conn_tile_'
            )
        ) {

            await handleTileClick(
                interaction,
                state
            );

            return;
        }

        if (
            interaction.customId ===
            'conn_clear'
        ) {

            await handleClear(
                interaction,
                state
            );

            return;
        }

        if (
            interaction.customId ===
            'conn_shuffle'
        ) {

            await handleShuffle(
                interaction,
                state
            );

            return;
        }

        if (
            interaction.customId ===
            'conn_submit'
        ) {

            await handleSubmit(
                interaction,
                state,
                messageId
            );
        }

    } catch (error) {

        console.error(
            'Error handling Connections interaction:',
            error
        );

        if (
            !interaction.replied &&
            !interaction.deferred
        ) {

            await interaction.reply({

                content:
                    '❌ Something went wrong with this Connections game.',

                ephemeral:
                    true
            });
        }
    }
}

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    startDaily,
    startContinuous,
    handleInteraction
};
