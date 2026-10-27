// connections_game.js
// PuzzlePilot Connections
// Puzzle selection and game rules
//
// This file contains the puzzle logic used by both
// Daily Connections and Continuous Connections.
//
// It does not handle Discord buttons, screen display
// or database records.

const connectionsPack1 = require('./connections_pack1.js');
const connectionsPack2 = require('./connections_pack2.js');

// ─────────────────────────────────────────────
// PUZZLE BANK
// ─────────────────────────────────────────────

const connectionsPuzzles = [
    ...connectionsPack1,
    ...connectionsPack2
];

// ─────────────────────────────────────────────
// SETTINGS
// ─────────────────────────────────────────────

const STARTING_LIVES = 4;

// ─────────────────────────────────────────────
// PUZZLE SELECTION
// ─────────────────────────────────────────────

function getRandomPuzzle(excludePuzzle = null) {
    if (connectionsPuzzles.length <= 1) {
        return connectionsPuzzles[0];
    }

    let choices = connectionsPuzzles;

    if (excludePuzzle) {
        choices = connectionsPuzzles.filter(
            puzzle => puzzle !== excludePuzzle
        );
    }

    if (choices.length === 0) {
        choices = connectionsPuzzles;
    }

    return choices[
        Math.floor(Math.random() * choices.length)
    ];
}

function getUKDate() {
    return new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(new Date());
}

// Daily puzzle order is spread across the whole bank.
// The anchor preserves the existing puzzle on 27 October 2026
// (Pack 1 index 27, conn028), avoiding a mid-day change.
// With a 200-puzzle bank, a step of 73 visits every puzzle
// once before repeating, rather than only using a few dates.
const DAILY_ANCHOR_UTC = Date.UTC(2026, 9, 27);
const DAILY_ANCHOR_INDEX = 27;
const DAILY_INDEX_STEP = 73;

function getDailyPuzzle() {
    const [year, month, day] = getUKDateKey()
        .split('-')
        .map(Number);

    const currentDayUTC = Date.UTC(
        year,
        month - 1,
        day
    );

    const daysSinceAnchor = Math.round(
        (currentDayUTC - DAILY_ANCHOR_UTC) / 86400000
    );

    const rawIndex =
        DAILY_ANCHOR_INDEX +
        daysSinceAnchor * DAILY_INDEX_STEP;

    const count = connectionsPuzzles.length;
    const index = ((rawIndex % count) + count) % count;

    return connectionsPuzzles[index];
}

// YYYY-MM-DD for the Daily completion database.
// Uses the same UK date as the puzzle selection.
function getUKDateKey() {
    const numbers = getUKDate().match(/\d+/g);

    const day = numbers[0].padStart(2, '0');
    const month = numbers[1].padStart(2, '0');
    const year = numbers[2];

    return `${year}-${month}-${day}`;
}

function getDailyPuzzleNumber() {
    return getUKDate();
}

// ─────────────────────────────────────────────
// SHUFFLE
// ─────────────────────────────────────────────

function shuffle(array) {
    return array
        .map(value => ({
            value,
            sort: Math.random()
        }))
        .sort((a, b) => a.sort - b.sort)
        .map(item => item.value);
}

// ─────────────────────────────────────────────
// GROUP HELPERS
// ─────────────────────────────────────────────

function getPuzzleGroupNames(puzzle) {
    return Object.keys(puzzle.groups);
}

function getGroupIndex(puzzle, groupName) {
    return getPuzzleGroupNames(puzzle).indexOf(
        groupName
    );
}

function getGroupNameForTile(puzzle, tile) {
    for (const [groupName, groupTiles]
        of Object.entries(puzzle.groups)) {
        if (groupTiles.includes(tile)) {
            return groupName;
        }
    }

    return null;
}

function getUnsolvedTiles(board) {
    return board.tiles.filter(tile => {
        const groupName = getGroupNameForTile(
            board.puzzle,
            tile
        );

        return !board.solvedGroups.includes(
            groupName
        );
    });
}

function getSortedSolvedGroups(board) {
    return [...board.solvedGroups].sort(
        (a, b) =>
            getGroupIndex(board.puzzle, a) -
            getGroupIndex(board.puzzle, b)
    );
}

function isOneAway(board, selectedTiles) {
    return Object.entries(board.puzzle.groups).some(
        ([groupName, groupTiles]) => {
            if (board.solvedGroups.includes(groupName)) {
                return false;
            }

            const matches = selectedTiles.filter(
                tile => groupTiles.includes(tile)
            ).length;

            return matches === 3;
        }
    );
}

// ─────────────────────────────────────────────
// CREATE BOARD
// ─────────────────────────────────────────────

function createBoard(puzzle, mode) {
    const allTiles = [];

    for (const group of Object.values(puzzle.groups)) {
        allTiles.push(...group);
    }

    return {
        puzzle,
        mode,
        tiles: shuffle(allTiles),
        solvedGroups: [],
        selected: [],
        lives: STARTING_LIVES,
        finished: false,
        notice: null,
        guessHistory: []
    };
}

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    STARTING_LIVES,
    getRandomPuzzle,
    getUKDate,
    getUKDateKey,
    getDailyPuzzle,
    getDailyPuzzleNumber,
    shuffle,
    getPuzzleGroupNames,
    getGroupIndex,
    getGroupNameForTile,
    getUnsolvedTiles,
    getSortedSolvedGroups,
    isOneAway,
    createBoard
};
