// wordladder_pack1.js
// PuzzlePilot Word Ladder - TEST PACK
//
// Proper word ladder rules:
// - Start and target are the same length
// - Change exactly one letter per move
// - No adding, removing or rearranging letters
// - Every step must be a recognised word
//
// This small pack is for testing the rebuilt game.
// It will be replaced with the full puzzle bank once gameplay is approved.

module.exports.easy = [
    {
        start: 'cat',
        end: 'dog',
        shortestMoves: 3
    },
    {
        start: 'cold',
        end: 'warm',
        shortestMoves: 4
    }
];

module.exports.medium = [
    {
        start: 'cold',
        end: 'warm',
        shortestMoves: 4
    },
    {
        start: 'cold',
        end: 'word',
        shortestMoves: 3
    }
];

module.exports.hard = [
    {
        start: 'cold',
        end: 'worm',
        shortestMoves: 5
    },
    {
        start: 'cold',
        end: 'work',
        shortestMoves: 4
    }
];

