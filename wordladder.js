// wordladder.js
// Daily + continuous Word Ladder with single-text-box modal input.

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle
} = require('discord.js');

const wordLadders = [
    ["cat", "cot", "dot", "dog"],
    ["tea", "sea", "see", "bee"],
    ["map", "mop", "pop", "pip"],
    ["fog", "hog", "hot", "hat"],
    ["pen", "pan", "tan", "tap"],
];

function getDifficulty(ladder) {
    const length = ladder.length;
    if (length <= 3) return "Easy";
    if (length <= 5) return "Medium";
    return "Hard";
}

function generateWordLadder() {
    return wordLadders[Math.floor(Math.random() * wordLadders.length)];
}

// DAILY LADDER (bot.js will set this)
let todaysLadder = generateWordLadder();

function setTodaysLadder(ladder) {
    todaysLadder = ladder;
}

// Start daily ladder (from /daily menu)
async function startDaily(interaction) {
    const ladder = todaysLadder;
    await interaction.reply({
        content:
            `🧩 **Daily Word Ladder**\n` +
            `Start: **${ladder[0]}**\n` +
            `Difficulty: **${getDifficulty(ladder)}**\n` +
            `Steps: ${ladder.length} words\n\n` +
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

// Start continuous ladder (fresh random)
async function startContinuous(interaction) {
    const ladder = generateWordLadder();
    await interaction.reply({
        content:
            `🧩 **Continuous Word Ladder**\n` +
            `Start: **${ladder[0]}**\n` +
            `Difficulty: **${getDifficulty(ladder)}**\n` +
            `Steps: ${ladder.length} words\n\n` +
            `Click **Solve Ladder** to enter your full chain.`,
        components: [
            new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId(`wl_solve_cont_${ladder.join('_')}`)
                    .setLabel('Solve Ladder')
                    .setStyle(ButtonStyle.Success)
            )
        ]
    });
}

// Handle buttons + modal
async function handleInteraction(interaction) {
    // Solve daily ladder button
    if (interaction.isButton() && interaction.customId === 'wl_solve_daily') {
        const modal = new ModalBuilder()
            .setCustomId('wl_modal_daily')
            .setTitle('Solve Daily Word Ladder')
            .addComponents(
                new ActionRowBuilder().addComponents(
                    new TextInputBuilder()
                        .setCustomId('wl_chain')
                        .setLabel('Enter your ladder (e.g. cat cot dot dog)')
                        .setStyle(TextInputStyle.Paragraph)
                        .setRequired(true)
                )
            );

        await interaction.showModal(modal);
        return;
    }

    // Solve continuous ladder button
    if (interaction.isButton() && interaction.customId.startsWith('wl_solve_cont_')) {
        const ladderStr = interaction.customId.replace('wl_solve_cont_', '');
        const ladder = ladderStr.split('_');

        const modal = new ModalBuilder()
            .setCustomId(`wl_modal_cont_${ladder.join('_')}`)
            .setTitle('Solve Word Ladder')
            .addComponents(
                new ActionRowBuilder().addComponents(
                    new TextInputBuilder()
                        .setCustomId('wl_chain')
                        .setLabel('Enter your ladder (e.g. cat cot dot dog)')
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

        let targetLadder;

        if (interaction.customId === 'wl_modal_daily') {
            targetLadder = todaysLadder;
        } else if (interaction.customId.startsWith('wl_modal_cont_')) {
            const ladderStr = interaction.customId.replace('wl_modal_cont_', '');
            targetLadder = ladderStr.split('_');
        } else {
            return;
        }

        const correct =
            chain.length === targetLadder.length &&
            chain.every((w, i) => w === targetLadder[i]);

        if (correct) {
            await interaction.editReply({
                content:
                    `✅ Correct!\n` +
                    `Ladder: **${targetLadder.join(' → ')}**`
            });
        } else {
            await interaction.editReply({
                content:
                    `❌ Not quite.\n` +
                    `You entered: **${chain.join(' → ') || '(nothing)'}**\n` +
                    `Expected: **${targetLadder.join(' → ')}**`
            });
        }

        return;
    }
}

module.exports = {
    generateWordLadder,
    getDifficulty,
    setTodaysLadder,
    startDaily,
    startContinuous,
    handleInteraction
};
