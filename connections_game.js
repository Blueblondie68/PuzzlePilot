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

function getDailyPuzzle() {
    const ukDate = getUKDate();
    const numbers = ukDate.match(/\d+/g);

    const day = Number(numbers[0]);
    const month = Number(numbers[1]);
    const year = Number(numbers[2]);

    const seed = year * 10000 + month * 100 + day;
    const index = seed % connectionsPuzzles.length;

    return connectionsPuzzles[index];
}

// YYYY-MM-DD for the upcoming Daily completion database.
// Uses the same UK date as the existing puzzle selection.
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
