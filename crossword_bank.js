// crossword_bank.js
// PuzzlePilot crossword pack loader and daily/continuous selection.
// When adding packs, add the require and the array spread here only.

const { preparePuzzle } = require('./crossword_engine');

const crosswordPack1 = require('./crossword_pack1');
const crosswordPack2 = require('./crossword_pack2');
const crosswordPack3 = require('./crossword_pack3');
const crosswordPack4 = require('./crossword_pack4');
const crosswordPack5 = require('./crossword_pack5');
const crosswordPack6 = require('./crossword_pack6');
const crosswordPack7 = require('./crossword_pack7');
const crosswordPack8 = require('./crossword_pack8');

const crosswordPuzzles = [
    ...crosswordPack1,
    ...crosswordPack2,
    ...crosswordPack3,
    ...crosswordPack4,
    ...crosswordPack5,
    ...crosswordPack6,
    ...crosswordPack7,
    ...crosswordPack8
].map(puzzle => preparePuzzle(puzzle));

console.log(`Crosswords loaded: ${crosswordPuzzles.length}`);

function getUKDateParts() {
    const parts =
        new Intl.DateTimeFormat(
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
        ).formatToParts(
            new Date()
        );

    const values = {};

    for (const part of parts) {
        if (
            part.type !==
            'literal'
        ) {
            values[part.type] =
                Number(part.value);
        }
    }

    return {
        year:
            values.year,
        month:
            values.month,
        day:
            values.day
    };
}


function getDailyPuzzle() {
    const {
        year,
        month,
        day
    } = getUKDateParts();

    const dayNumber =
        Math.floor(
            Date.UTC(
                year,
                month - 1,
                day
            ) /
            86400000
        );

    const index =
        ((dayNumber % crosswordPuzzles.length) +
            crosswordPuzzles.length) %
        crosswordPuzzles.length;

    return crosswordPuzzles[index];
}

function getRandomPuzzle(
    excludedPuzzleId = null
) {
    let choices =
        crosswordPuzzles;

    if (
        excludedPuzzleId &&
        crosswordPuzzles.length > 1
    ) {
        choices =
            crosswordPuzzles.filter(
                puzzle =>
                    puzzle.id !==
                    excludedPuzzleId
            );
    }

    return choices[
        Math.floor(
            Math.random() *
            choices.length
        )
    ];
}


module.exports = {
    crosswordPuzzles,
    getUKDateParts,
    getDailyPuzzle,
    getRandomPuzzle
};
