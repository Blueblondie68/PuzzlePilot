 // wordladder_pack2.js
// PuzzlePilot Word Ladder - Pack 2
// 100 new four-letter Word Ladder puzzles.
// 25 Easy, 50 Medium, 25 Hard.
//
// shortestMoves was calculated against the existing
// 774-word reference vocabulary in wordladder_words.js.
// The live game continues to use its larger English dictionary.
// Players may find shorter valid alternative routes.

module.exports = {

    // ==============================================
    // EASY - 25 PUZZLES
    // ==============================================

    easy: [
        { start: 'safe', end: 'damp', shortestMoves: 4 },
        { start: 'walk', end: 'full', shortestMoves: 3 },
        { start: 'feet', end: 'fail', shortestMoves: 4 },
        { start: 'live', end: 'form', shortestMoves: 4 },
        { start: 'make', end: 'give', shortestMoves: 4 },
        { start: 'sire', end: 'line', shortestMoves: 3 },
        { start: 'home', end: 'lamp', shortestMoves: 4 },
        { start: 'worn', end: 'fond', shortestMoves: 4 },
        { start: 'zone', end: 'role', shortestMoves: 4 },
        { start: 'here', end: 'sore', shortestMoves: 3 },
        { start: 'gold', end: 'dead', shortestMoves: 4 },
        { start: 'sent', end: 'head', shortestMoves: 3 },
        { start: 'heal', end: 'holy', shortestMoves: 4 },
        { start: 'firm', end: 'wine', shortestMoves: 3 },
        { start: 'lift', end: 'lake', shortestMoves: 3 },
        { start: 'game', end: 'cart', shortestMoves: 3 },
        { start: 'bald', end: 'feel', shortestMoves: 4 },
        { start: 'pain', end: 'lane', shortestMoves: 4 },
        { start: 'band', end: 'pack', shortestMoves: 3 },
        { start: 'wait', end: 'lest', shortestMoves: 4 },
        { start: 'held', end: 'bear', shortestMoves: 3 },
        { start: 'land', end: 'hare', shortestMoves: 3 },
        { start: 'gave', end: 'find', shortestMoves: 4 },
        { start: 'side', end: 'life', shortestMoves: 3 },
        { start: 'heat', end: 'want', shortestMoves: 4 }
    ],

    // ==============================================
    // MEDIUM - 50 PUZZLES
    // ==============================================

    medium: [
        { start: 'main', end: 'yard', shortestMoves: 6 },
        { start: 'soft', end: 'hope', shortestMoves: 5 },
        { start: 'till', end: 'meet', shortestMoves: 5 },
        { start: 'nine', end: 'save', shortestMoves: 5 },
        { start: 'lead', end: 'toll', shortestMoves: 5 },
        { start: 'mood', end: 'hear', shortestMoves: 6 },
        { start: 'paid', end: 'fire', shortestMoves: 6 },
        { start: 'bank', end: 'half', shortestMoves: 5 },
        { start: 'year', end: 'wept', shortestMoves: 5 },
        { start: 'bill', end: 'back', shortestMoves: 5 },
        { start: 'easy', end: 'rose', shortestMoves: 5 },
        { start: 'fine', end: 'loss', shortestMoves: 5 },
        { start: 'pair', end: 'harm', shortestMoves: 6 },
        { start: 'sale', end: 'sofa', shortestMoves: 5 },
        { start: 'cord', end: 'call', shortestMoves: 5 },
        { start: 'wild', end: 'task', shortestMoves: 5 },
        { start: 'date', end: 'last', shortestMoves: 5 },
        { start: 'pure', end: 'nose', shortestMoves: 6 },
        { start: 'ride', end: 'list', shortestMoves: 5 },
        { start: 'none', end: 'vast', shortestMoves: 5 },
        { start: 'read', end: 'rest', shortestMoves: 5 },
        { start: 'mind', end: 'warm', shortestMoves: 6 },
        { start: 'lack', end: 'hard', shortestMoves: 5 },
        { start: 'hero', end: 'ease', shortestMoves: 5 },
        { start: 'tied', end: 'road', shortestMoves: 5 },
        { start: 'face', end: 'most', shortestMoves: 5 },
        { start: 'wise', end: 'gaze', shortestMoves: 6 },
        { start: 'same', end: 'pass', shortestMoves: 5 },
        { start: 'lost', end: 'wore', shortestMoves: 5 },
        { start: 'mine', end: 'fact', shortestMoves: 6 },
        { start: 'real', end: 'weep', shortestMoves: 5 },
        { start: 'come', end: 'post', shortestMoves: 5 },
        { start: 'kind', end: 'word', shortestMoves: 5 },
        { start: 'vein', end: 'hand', shortestMoves: 6 },
        { start: 'site', end: 'lose', shortestMoves: 5 },
        { start: 'ring', end: 'milk', shortestMoves: 5 },
        { start: 'kill', end: 'card', shortestMoves: 6 },
        { start: 'food', end: 'hide', shortestMoves: 6 },
        { start: 'told', end: 'came', shortestMoves: 5 },
        { start: 'dare', end: 'note', shortestMoves: 5 },
        { start: 'move', end: 'king', shortestMoves: 6 },
        { start: 'wool', end: 'five', shortestMoves: 6 },
        { start: 'bond', end: 'wave', shortestMoves: 6 },
        { start: 'east', end: 'rule', shortestMoves: 6 },
        { start: 'farm', end: 'tone', shortestMoves: 6 },
        { start: 'base', end: 'love', shortestMoves: 5 },
        { start: 'hall', end: 'done', shortestMoves: 6 },
        { start: 'rate', end: 'sort', shortestMoves: 5 },
        { start: 'luck', end: 'sang', shortestMoves: 5 },
        { start: 'bone', end: 'camp', shortestMoves: 5 }
    ],

    // ==============================================
    // HARD - 25 PUZZLES
    // ==============================================

    hard: [
        { start: 'door', end: 'loud', shortestMoves: 7 },
        { start: 'cure', end: 'went', shortestMoves: 7 },
        { start: 'cast', end: 'roar', shortestMoves: 7 },
        { start: 'bent', end: 'vain', shortestMoves: 7 },
        { start: 'mere', end: 'tent', shortestMoves: 7 },
        { start: 'silk', end: 'sons', shortestMoves: 8 },
        { start: 'dull', end: 'keep', shortestMoves: 7 },
        { start: 'cent', end: 'palm', shortestMoves: 7 },
        { start: 'name', end: 'down', shortestMoves: 7 },
        { start: 'deep', end: 'calm', shortestMoves: 7 },
        { start: 'bell', end: 'moon', shortestMoves: 7 },
        { start: 'sing', end: 'roll', shortestMoves: 7 },
        { start: 'salt', end: 'days', shortestMoves: 9 },
        { start: 'tear', end: 'late', shortestMoves: 7 },
        { start: 'fair', end: 'dose', shortestMoves: 8 },
        { start: 'text', end: 'tide', shortestMoves: 8 },
        { start: 'lord', end: 'mass', shortestMoves: 7 },
        { start: 'rays', end: 'pace', shortestMoves: 8 },
        { start: 'well', end: 'time', shortestMoves: 7 },
        { start: 'west', end: 'nice', shortestMoves: 7 },
        { start: 'made', end: 'look', shortestMoves: 7 },
        { start: 'step', end: 'draw', shortestMoves: 9 },
        { start: 'cook', end: 'left', shortestMoves: 7 },
        { start: 'wing', end: 'deal', shortestMoves: 7 },
        { start: 'rain', end: 'seen', shortestMoves: 7 }
    ]

};
