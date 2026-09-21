// wordladder_pack1.js
// PuzzlePilot Word Ladder - Pack 1
//
// 100 four-letter Word Ladder puzzles.
//
// shortestMoves has been calculated against
// PuzzlePilot's expanded 774-word approved vocabulary.
//
// Difficulty is intended to reflect the human playing
// experience as well as the mathematical route length.

module.exports = {

    // =========================================================
    // EASY - 25 PUZZLES
    // =========================================================

    easy: [
        { start: 'fact', end: 'park', shortestMoves: 4 },
        { start: 'jack', end: 'past', shortestMoves: 4 },
        { start: 'made', end: 'wore', shortestMoves: 3 },
        { start: 'face', end: 'hole', shortestMoves: 4 },
        { start: 'fine', end: 'site', shortestMoves: 3 },
        { start: 'bark', end: 'name', shortestMoves: 4 },
        { start: 'boss', end: 'role', shortestMoves: 4 },
        { start: 'gift', end: 'wife', shortestMoves: 3 },
        { start: 'belt', end: 'pull', shortestMoves: 4 },
        { start: 'coal', end: 'toll', shortestMoves: 3 },
        { start: 'hall', end: 'soil', shortestMoves: 3 },
        { start: 'base', end: 'bill', shortestMoves: 3 },
        { start: 'hold', end: 'word', shortestMoves: 3 },
        { start: 'band', end: 'need', shortestMoves: 4 },
        { start: 'hate', end: 'mode', shortestMoves: 3 },
        { start: 'most', end: 'what', shortestMoves: 4 },
        { start: 'rare', end: 'tale', shortestMoves: 3 },
        { start: 'bare', end: 'belt', shortestMoves: 4 },
        { start: 'card', end: 'send', shortestMoves: 4 },
        { start: 'toll', end: 'wood', shortestMoves: 3 },
        { start: 'boot', end: 'what', shortestMoves: 4 },
        { start: 'best', end: 'boot', shortestMoves: 3 },
        { start: 'cash', end: 'wise', shortestMoves: 3 },
        { start: 'feel', end: 'mile', shortestMoves: 4 },
        { start: 'milk', end: 'wine', shortestMoves: 3 }
    ],

    // =========================================================
    // MEDIUM - 50 PUZZLES
    // =========================================================

    medium: [
        { start: 'more', end: 'tend', shortestMoves: 5 },
        { start: 'dear', end: 'hand', shortestMoves: 5 },
        { start: 'good', end: 'land', shortestMoves: 5 },
        { start: 'seed', end: 'tail', shortestMoves: 5 },
        { start: 'cell', end: 'have', shortestMoves: 6 },
        { start: 'main', end: 'sake', shortestMoves: 6 },
        { start: 'pink', end: 'wild', shortestMoves: 4 },
        { start: 'lead', end: 'self', shortestMoves: 5 },
        { start: 'golf', end: 'self', shortestMoves: 6 },
        { start: 'foot', end: 'here', shortestMoves: 6 },
        { start: 'bend', end: 'milk', shortestMoves: 4 },
        { start: 'rate', end: 'wind', shortestMoves: 5 },
        { start: 'base', end: 'hang', shortestMoves: 5 },
        { start: 'sent', end: 'term', shortestMoves: 6 },
        { start: 'fill', end: 'salt', shortestMoves: 4 },
        { start: 'load', end: 'some', shortestMoves: 5 },
        { start: 'safe', end: 'soil', shortestMoves: 6 },
        { start: 'dark', end: 'life', shortestMoves: 6 },
        { start: 'bold', end: 'felt', shortestMoves: 5 },
        { start: 'golf', end: 'wore', shortestMoves: 5 },
        { start: 'poor', end: 'wild', shortestMoves: 5 },
        { start: 'hell', end: 'made', shortestMoves: 5 },
        { start: 'rice', end: 'tell', shortestMoves: 6 },
        { start: 'park', end: 'salt', shortestMoves: 5 },
        { start: 'boat', end: 'feed', shortestMoves: 5 },
        { start: 'bond', end: 'date', shortestMoves: 5 },
        { start: 'copy', end: 'yard', shortestMoves: 5 },
        { start: 'rare', end: 'told', shortestMoves: 5 },
        { start: 'hire', end: 'tool', shortestMoves: 6 },
        { start: 'else', end: 'lord', shortestMoves: 6 },
        { start: 'coat', end: 'held', shortestMoves: 5 },
        { start: 'boss', end: 'come', shortestMoves: 5 },
        { start: 'cash', end: 'rule', shortestMoves: 7 },
        { start: 'feel', end: 'were', shortestMoves: 5 },
        { start: 'gift', end: 'mere', shortestMoves: 6 },
        { start: 'less', end: 'rate', shortestMoves: 7 },
        { start: 'cook', end: 'text', shortestMoves: 7 },
        { start: 'been', end: 'soil', shortestMoves: 7 },
        { start: 'jack', end: 'wash', shortestMoves: 7 },
        { start: 'bowl', end: 'pull', shortestMoves: 7 },
        { start: 'main', end: 'milk', shortestMoves: 6 },
        { start: 'cost', end: 'fill', shortestMoves: 6 },
        { start: 'case', end: 'fear', shortestMoves: 7 },
        { start: 'gain', end: 'pole', shortestMoves: 7 },
        { start: 'fail', end: 'real', shortestMoves: 5 },
        { start: 'boss', end: 'held', shortestMoves: 7 },
        { start: 'pale', end: 'seem', shortestMoves: 7 },
        { start: 'help', end: 'ride', shortestMoves: 6 },
        { start: 'mean', end: 'pull', shortestMoves: 6 },
        { start: 'safe', end: 'step', shortestMoves: 10 }
    ],

    // =========================================================
    // HARD - 25 PUZZLES
    // =========================================================

    hard: [
        { start: 'case', end: 'fuel', shortestMoves: 6 },
        { start: 'paid', end: 'shot', shortestMoves: 10 },
        { start: 'door', end: 'hand', shortestMoves: 8 },
        { start: 'meat', end: 'ring', shortestMoves: 7 },
        { start: 'keen', end: 'moon', shortestMoves: 9 },
        { start: 'cold', end: 'gift', shortestMoves: 8 },
        { start: 'cost', end: 'golf', shortestMoves: 7 },
        { start: 'home', end: 'term', shortestMoves: 8 },
        { start: 'mean', end: 'site', shortestMoves: 8 },
        { start: 'hate', end: 'rain', shortestMoves: 7 },
        { start: 'boil', end: 'fast', shortestMoves: 10 },
        { start: 'gift', end: 'them', shortestMoves: 10 },
        { start: 'poor', end: 'sand', shortestMoves: 7 },
        { start: 'bank', end: 'boss', shortestMoves: 5 },
        { start: 'loss', end: 'said', shortestMoves: 7 },
        { start: 'bike', end: 'cook', shortestMoves: 8 },
        { start: 'tape', end: 'then', shortestMoves: 9 },
        { start: 'come', end: 'main', shortestMoves: 8 },
        { start: 'hate', end: 'seed', shortestMoves: 5 },
        { start: 'pair', end: 'wide', shortestMoves: 7 },
        { start: 'when', end: 'word', shortestMoves: 7 },
        { start: 'pick', end: 'wood', shortestMoves: 7 },
        { start: 'rise', end: 'term', shortestMoves: 10 },
        { start: 'firm', end: 'step', shortestMoves: 9 },
        { start: 'rock', end: 'west', shortestMoves: 7 }
    ]
};
