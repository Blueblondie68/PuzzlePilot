// wordladder.js
// Daily + continuous Word Ladder with difficulty selection.

// Discord components
const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle
} = require('discord.js');

// Load your Pack 1 ladders
const pack1 = require('./wordladder_pack1.js');

// Combine all ladders into a single structure
const wordLadders = {
    easy: pack1.easy,
    medium: pack1.medium,
    hard: pack1.hard
};

// Difficulty label helper
function getDifficultyLabel(arrName) {
    if (arrName === "easy") return "Easy";
    if (arrName === "medium") return "Medium";
    return "Hard";
}

// Pick a random ladder from a difficulty group
function generateWordLadder(difficulty) {
    const group = wordLadders[difficulty];
    return group[Math.floor(Math.random() * group.length)];
}

// DAILY LADDER (bot.js will set this)
let todaysLadder = generateWordLadder("medium"); // default until bot.js sets it

function setTodaysLadder(ladder) {
    todaysLadder = ladder;
}

// Start daily ladder (from /daily menu)
async function startDaily(interaction) {
    const ladder = todaysLadder;

    await interaction.reply({
        content:
            `🧩 **Daily Word Ladder**\n` +
            `Start: **${ladder.start}**\n` +
            `End: **${ladder.end}**\n` +
            `Difficulty: **Daily**\n` +
            `Steps: ${ladder.steps.length + 2} words\n\n` +
            `Click **Solve Ladder** to enter your full chain.`,
        components: [
            new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('wl_solve_daily')
                    .setLabel('Solve Ladder')
                    .setStyle(ButtonStyle.Primary)
            )
        ]
    });
}

// Start continuous ladder — user chooses difficulty
async function startContinuous(interaction) {
    await interaction.reply({
        content: `🧩 **Choose your difficulty**`,
        components: [
            new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('wl_diff_easy')
                    .setLabel('Easy')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('wl_diff_medium')
                    .setLabel('Medium')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('wl_diff_hard')
                    .setLabel('Hard')
                    .setStyle(ButtonStyle.Danger)
            )
        ]
    });
}

// Handle buttons + modal
async function handleInteraction(interaction) {

    // Difficulty buttons
    if (interaction.isButton() && interaction.customId.startsWith('wl_diff_')) {
        const difficulty = interaction.customId.replace('wl_diff_', '');
        const ladder = generateWordLadder(difficulty);

        await interaction.reply({
            content:
                `🧩 **${getDifficultyLabel(difficulty)} Word Ladder**\n` +
                `Start: **${ladder.start}**\n` +
                `End: **${ladder.end}**\n` +
                `Difficulty: **${getDifficultyLabel(difficulty)}**\n` +
                `Steps: ${ladder.steps.length + 2} words\n\n` +
                `Click **Solve Ladder** to enter your full chain.`,
            components: [
                new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setCustomId(`wl_solve_cont_${difficulty}_${ladder.start}_${ladder.end}`)
                        .setLabel('Solve Ladder')
                        .setStyle(ButtonStyle.Success)
                )
            ]
        });

        return;
    }

    // Solve daily ladder button
    if (interaction.isButton() && interaction.customId === 'wl_solve_daily') {
        const modal = new ModalBuilder()
            .setCustomId('wl_modal_daily')
            .setTitle('Solve Daily Word Ladder')
            .addComponents(
                new ActionRowBuilder().addComponents(
                    new TextInputBuilder()
                        .setCustomId('wl_chain')
                        .setLabel('Enter your ladder (e.g. cat cats carts)')
                        .setStyle(TextInputStyle.Paragraph)
                        .setRequired(true)
                )
            );

        await interaction.showModal(modal);
        return;
    }

    // Solve continuous ladder button
    if (interaction.isButton() && interaction.customId.startsWith('wl_solve_cont_')) {
        const parts = interaction.customId.split('_');
        const difficulty = parts[3];
        const start = parts[4];
        const end = parts[5];

        const modal = new ModalBuilder()
            .setCustomId(`wl_modal_cont_${difficulty}_${start}_${end}`)
            .setTitle('Solve Word Ladder')
            .addComponents(
                new ActionRowBuilder().addComponents(
                    new TextInputBuilder()
                        .setCustomId('wl_chain')
                        .setLabel('Enter your ladder (e.g. cat cats carts)')
                        .setStyle(TextInputStyle.Paragraph)
                        .setRequired(true)
                )
            );

        await interaction.showModal(modal);
        return;
    }

    // Modal submit (daily + continuous)
    if (interaction.isModalSubmit() && interaction.customId.startsWith('wl_modal_')) {
        await interaction.deferReply({ ephemeral: true });

        const chainRaw = interaction.fields.getTextInputValue('wl_chain') || '';
        const chain = chainRaw
            .split(/\s+/)
            .map(w => w.trim().toLowerCase())
            .filter(Boolean);

        let target;

        if (interaction.customId === 'wl_modal_daily') {
            target = todaysLadder;
        } else {
            const parts = interaction.customId.split('_');
            const difficulty = parts[3];
            const start = parts[4];
            const end = parts[5];

            // Find the ladder in the pack
            target = wordLadders[difficulty].find(l => l.start === start && l.end === end);
        }

        const expected = [target.start, ...target.steps, target.end];

        const correct =
            chain.length === expected.length &&
            chain.every((w, i) => w === expected[i]);

        if (correct) {
            await interaction.editReply({
                content: `✅ Correct!\nLadder: **${expected.join(' → ')}**`
            });
        } else {
            await interaction.editReply({
                content:
                    `❌ Not quite.\n` +
                    `You entered: **${chain.join(' → ') || '(nothing)'}**\n` +
                    `Expected: **${expected.join(' → ')}**`
            });
        }

        return;
    }
}

module.exports = {
    generateWordLadder,
    getDifficultyLabel,
    setTodaysLadder,
    startDaily,
    startContinuous,
    handleInteraction
};

