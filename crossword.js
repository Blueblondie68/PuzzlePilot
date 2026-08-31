const fs = require('fs');
const path = require('path');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const TODAY_FILE = path.join(__dirname, 'crossword_today.json');
const PLAYERS_FILE = path.join(__dirname, 'crossword_players.json');

// Simple word list (you can expand this later)
const WORDS = [
  'CAT', 'DOG', 'BEE', 'BAT', 'SUN', 'MOON', 'STAR', 'RAIN', 'SNOW', 'WIND',
  'TREE', 'BIRD', 'FISH', 'LION', 'BEAR', 'FROG', 'CRAB', 'DEER', 'GOAT',
  'POND', 'LAKE', 'RIVER', 'ROAD', 'CLOUD', 'STONE', 'SAND', 'GRASS', 'LEAF'
];

// --- helpers for JSON storage ---

function loadJson(file, fallback) {
  try {
    if (!fs.existsSync(file)) return fallback;
    const raw = fs.readFileSync(file, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    console.log(`[crossword] Failed to load ${file}, using fallback.`);
    return fallback;
  }
}

function saveJson(file, data) {
  try {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
  } catch (e) {
    console.log(`[crossword] Failed to save ${file}:`, e.message);
  }
}

// --- daily puzzle generation ---

function generateEmptyGrid(size = 5) {
  const grid = [];
  for (let r = 0; r < size; r++) {
    const row = [];
    for (let c = 0; c < size; c++) {
      row.push({ char: null, block: false, number: null });
    }
    grid.push(row);
  }
  return grid;
}

// very simple pattern: fixed blocks, words filled row/column-wise
function generateDailyPuzzle() {
  const size = 5;
  const grid = generateEmptyGrid(size);

  // fixed block pattern (you can tweak later)
  const blocks = [
    [0, 3], [0, 4],
    [1, 1],
    [3, 0], [3, 3],
    [4, 0], [4, 1]
  ];
  blocks.forEach(([r, c]) => {
    grid[r][c].block = true;
  });

  // choose some words
  function pickWord(len) {
    const candidates = WORDS.filter(w => w.length === len);
    if (!candidates.length) return null;
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  // across slots (row, startCol, length)
  const acrossSlots = [
    { id: '1A', row: 0, col: 0, len: 3 },
    { id: '4A', row: 1, col: 2, len: 2 },
    { id: '7A', row: 1, col: 4, len: 1 },
    { id: '10A', row: 2, col: 0, len: 2 },
    { id: '13A', row: 2, col: 2, len: 3 },
    { id: '16A', row: 3, col: 1, len: 2 },
    { id: '19A', row: 3, col: 4, len: 1 },
    { id: '20A', row: 4, col: 2, len: 3 }
  ];

  const downSlots = [
    { id: '1D', row: 0, col: 0, len: 3 },
    { id: '2D', row: 0, col: 2, len: 3 },
    { id: '3D', row: 0, col: 3, len: 2 },
    { id: '4D', row: 0, col: 4, len: 2 },
    { id: '5D', row: 1, col: 2, len: 4 },
    { id: '6D', row: 1, col: 4, len: 4 }
  ];

  const across = [];
  const down = [];

  // fill across
  for (const slot of acrossSlots) {
    const word = pickWord(slot.len) || 'X'.repeat(slot.len);
    across.push({ id: slot.id, answer: word, clue: makeClue(word) });
    for (let i = 0; i < slot.len; i++) {
      const cell = grid[slot.row][slot.col + i];
      cell.char = word[i];
    }
  }

  // fill down (respect existing letters)
  for (const slot of downSlots) {
    let word = pickWord(slot.len) || 'X'.repeat(slot.len);
    down.push({ id: slot.id, answer: word, clue: makeClue(word) });
    for (let i = 0; i < slot.len; i++) {
      const r = slot.row + i;
      const c = slot.col;
      if (grid[r] && grid[r][c] && !grid[r][c].block) {
        grid[r][c].char = word[i];
      }
    }
  }

  // assign numbers to starting cells
  let nextNumber = 1;
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const cell = grid[r][c];
      if (cell.block) continue;

      const startsAcross =
        (c === 0 || grid[r][c - 1].block) &&
        (c + 1 < size && !grid[r][c + 1].block);

      const startsDown =
        (r === 0 || grid[r - 1][c].block) &&
        (r + 1 < size && !grid[r + 1][c].block);

      if (startsAcross || startsDown) {
        cell.number = nextNumber++;
      }
    }
  }

  console.log('[crossword] Generated new daily crossword.');
  return { grid, across, down };
}

// --- REAL CLUE GENERATOR ---

function makeClue(word) {
  const clues = {
    CAT: "Small domesticated feline",
    DOG: "Common household pet that barks",
    BEE: "Striped insect that makes honey",
    BAT: "Flying mammal often seen at night",
    SUN: "Star at the centre of the solar system",
    MOON: "Earth’s natural satellite",
    STAR: "Bright point of light in the night sky",
    RAIN: "Water falling from clouds",
    SNOW: "Frozen white flakes falling from the sky",
    WIND: "Moving air",
    TREE: "Tall plant with a trunk and branches",
    BIRD: "Animal with feathers and wings",
    FISH: "Animal that lives in water and has gills",
    LION: "Large wild cat known as the king of the jungle",
    BEAR: "Large furry mammal that hibernates",
    FROG: "Green amphibian that jumps",
    CRAB: "Side-walking sea creature with claws",
    DEER: "Graceful animal with antlers",
    GOAT: "Horned farm animal known for climbing",
    POND: "Small body of still water",
    LAKE: "Large inland body of water",
    RIVER: "Flowing body of water",
    ROAD: "Path for vehicles",
    CLOUD: "White or grey mass in the sky",
    STONE: "Small piece of rock",
    SAND: "Tiny grains found on beaches",
    GRASS: "Green plant covering lawns and fields",
    LEAF: "Flat green part of a plant"
  };

  return clues[word] || `No clue available for ${word}`;
}

// --- rendering ---

function renderGridForPlayer(puzzle, playerState) {
  const size = puzzle.grid.length;
  const lines = [];
  lines.push('+---+---+---+---+---+');
  for (let r = 0; r < size; r++) {
    let row = '|';
    for (let c = 0; c < size; c++) {
      const cell = puzzle.grid[r][c];
      let display = ' ';
      if (cell.block) {
        display = '█';
      } else {
        const solvedChar = getSolvedCharAt(puzzle, playerState, r, c);
        if (solvedChar) {
          display = solvedChar;
        } else if (cell.number !== null) {
          display = String(cell.number).padStart(1, ' ');
        } else {
          display = ' ';
        }
      }
      row += ` ${display} |`;
    }
    lines.push(row);
    lines.push('+---+---+---+---+---+');
  }
  return lines.join('\n');
}

function getSolvedCharAt(puzzle, playerState, r, c) {
  if (!playerState || !playerState.solved) return null;

  for (const entry of puzzle.across) {
    if (!playerState.solved[entry.id]) continue;
    const coords = getAcrossCoords(puzzle, entry.id);
    if (!coords) continue;
    for (let i = 0; i < coords.length; i++) {
      const [rr, cc] = coords[i];
      if (rr === r && cc === c) {
        return entry.answer[i];
      }
    }
  }

  for (const entry of puzzle.down) {
    if (!playerState.solved[entry.id]) continue;
    const coords = getDownCoords(puzzle, entry.id);
    if (!coords) continue;
    for (let i = 0; i < coords.length; i++) {
      const [rr, cc] = coords[i];
      if (rr === r && cc === c) {
        return entry.answer[i];
      }
    }
  }

  return null;
}

function getAcrossCoords(puzzle, id) {
  const map = {
    '1A': { row: 0, col: 0, len: 3 },
    '4A': { row: 1, col: 2, len: 2 },
    '7A': { row: 1, col: 4, len: 1 },
    '10A': { row: 2, col: 0, len: 2 },
    '13A': { row: 2, col: 2, len: 3 },
    '16A': { row: 3, col: 1, len: 2 },
    '19A': { row: 3, col: 4, len: 1 },
    '20A': { row: 4, col: 2, len: 3 }
  };
  const slot = map[id];
  if (!slot) return null;
  const coords = [];
  for (let i = 0; i < slot.len; i++) {
    coords.push([slot.row, slot.col + i]);
  }
  return coords;
}

function getDownCoords(puzzle, id) {
  const map = {
    '1D': { row: 0, col: 0, len: 3 },
    '2D': { row: 0, col: 2, len: 3 },
    '3D': { row: 0, col: 3, len: 2 },
    '4D': { row: 0, col: 4, len: 2 },
    '5D': { row: 1, col: 2, len: 4 },
    '6D': { row: 1, col: 4, len: 4 }
  };
  const slot = map[id];
  if (!slot) return null;
  const coords = [];
  for (let i = 0; i < slot.len; i++) {
    coords.push([slot.row + i, slot.col]);
  }
  return coords;
}

// --- player state ---

function loadTodayPuzzle() {
  let today = loadJson(TODAY_FILE, null);
  if (!today) {
    today = generateDailyPuzzle();
    saveJson(TODAY_FILE, today);
  }
  return today;
}

function loadPlayers() {
  return loadJson(PLAYERS_FILE, {});
}

function savePlayers(players) {
  saveJson(PLAYERS_FILE, players);
}

function getPlayerState(players, userId) {
  if (!players[userId]) {
    players[userId] = { solved: {} };
  }
  return players[userId];
}

// --- buttons ---

function buildButtonRows() {
  const row1 = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('cw_solve_1A').setLabel('Solve 1A').setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId('cw_solve_4A').setLabel('Solve 4A').setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId('cw_solve_7A').setLabel('Solve 7A').setStyle(ButtonStyle.Primary)
  );

  const row2 = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('cw_solve_1D').setLabel('Solve 1D').setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId('cw_solve_2D').setLabel('Solve 2D').setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId('cw_solve_3D').setLabel('Solve 3D').setStyle(ButtonStyle.Primary)
  );

  const row3 = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('cw_show_grid').setLabel('Show Grid').setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId('cw_show_clues').setLabel('Show Clues').setStyle(ButtonStyle.Secondary)
  );

  return [row1, row2, row3];
}

// --- public API ---

function register(client) {
  console.log('[crossword] Crossword engine registered.');

  client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (!message.content.toLowerCase().startsWith('!crossword')) return;

    const puzzle = loadTodayPuzzle();
    const players = loadPlayers();
    const playerState = getPlayerState(players, message.author.id);

    const gridText = renderGridForPlayer(puzzle, playerState);

    const acrossText = puzzle.across
      .map(a => `${a.id} ${a.clue}`)
      .join('\n');

    const downText = puzzle.down
      .map(d => `${d.id} ${d.clue}`)
      .join('\n');

    await message.channel.send({
      content:
        '🧩 **Daily Crossword**\n\n' +
        '```' + gridText + '```\n' +
        '**Across**\n' + acrossText + '\n\n' +
        '**Down**\n' + downText,
      components: buildButtonRows()
    });
  });

  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;

    const customId = interaction.customId;
    const puzzle = loadTodayPuzzle();
    const players = loadPlayers();
    const playerState = getPlayerState(players, interaction.user.id);

    if (customId === 'cw_show_grid') {
      const gridText = renderGridForPlayer(puzzle, playerState);
      await interaction.reply({
        content: '```' + gridText + '```',
        ephemeral: true
      });
      return;
    }

    if (customId === 'cw_show_clues') {
      const acrossText = puzzle.across
        .map(a => `${a.id} ${a.clue}`)
        .join('\n');

      const downText = puzzle.down
        .map(d => `${d.id} ${d.clue}`)
        .join('\n');

      await interaction.reply({
        content: '**Across**\n' + acrossText + '\n\n**Down**\n' + downText,
        ephemeral: true
      });
      return;
    }

    const solveMap = {
      'cw_solve_1A': '1A',
      'cw_solve_4A': '4A',
      'cw_solve_7A': '7A',
      'cw_solve_1D': '1D',
      'cw_solve_2D': '2D',
      'cw_solve_3D': '3D'
    };

    if (solveMap[customId]) {
      const clueId = solveMap[customId];
      await interaction.reply({
        content: `📝 Please type your answer for **${clueId}** (next message only).`,
        ephemeral: true
      });

      const filter = (m) => m.author.id === interaction.user.id;
      const collector = interaction.channel.createMessageCollector({ filter, max: 1, time: 30000 });

      collector.on('collect', (msg) => {
        const answer = msg.content.trim().toUpperCase();

        const entry =
          puzzle.across.find(a => a.id === clueId) ||
          puzzle.down.find(d => d.id === clueId);

        if (!entry) {
          msg.reply('Something went wrong, no such clue.');
          return;
        }

        if (answer === entry.answer) {
          playerState.solved[clueId] = true;
          savePlayers(players);
          console.log(`[crossword] ${msg.author.id} solved ${clueId}.`);

          const gridText = renderGridForPlayer(puzzle, playerState);
          msg.reply('```' + gridText + '```');
        } else {
          msg.reply('Not quite. Try again!');
        }
      });

      collector.on('end', (collected) => {
        if (collected.size === 0) {
          interaction.followUp({ content: 'No answer received in time.', ephemeral: true });
        }
      });

      return;
    }
  });
}

module.exports = { register };
