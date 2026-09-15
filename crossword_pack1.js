// crossword_pack1.js
// PuzzlePilot Crossword Pack 1
//
// Crossword puzzles live here rather than inside crossword.js.
//
// IMPORTANT:
// # means a black square.
// row and col start counting from 0.
// Clue numbers are NOT entered here.
// PuzzlePilot works them out automatically.

const crosswordPack1 = [
    {
        id: 'crossword_pack1_001',
        title: 'Mini Crossword',
        difficulty: 'Easy',

        solution: [
            ['I', 'F', '#', 'H', 'I'],
            ['F', 'L', 'E', 'E', 'T'],
            ['#', 'E', 'R', 'A', '#'],
            ['H', 'E', 'A', 'R', 'T'],
            ['I', 'T', '#', 'T', 'O']
        ],

        across: [
            {
                answer: 'IF',
                clue: 'Provided that',
                row: 0,
                col: 0
            },
            {
                answer: 'HI',
                clue: 'Casual greeting',
                row: 0,
                col: 3
            },
            {
                answer: 'FLEET',
                clue: 'Group of ships',
                row: 1,
                col: 0
            },
            {
                answer: 'ERA',
                clue: 'Period of history',
                row: 2,
                col: 1
            },
            {
                answer: 'HEART',
                clue: 'Organ that pumps blood',
                row: 3,
                col: 0
            },
            {
                answer: 'IT',
                clue: 'The thing being referred to',
                row: 4,
                col: 0
            },
            {
                answer: 'TO',
                clue: 'In the direction of',
                row: 4,
                col: 3
            }
        ],

        down: [
            {
                answer: 'IF',
                clue: 'On the condition that',
                row: 0,
                col: 0
            },
            {
                answer: 'FLEET',
                clue: 'Moving quickly',
                row: 0,
                col: 1
            },
            {
                answer: 'HEART',
                clue: 'Central or most important part',
                row: 0,
                col: 3
            },
            {
                answer: 'IT',
                clue: 'Pronoun for a thing',
                row: 0,
                col: 4
            },
            {
                answer: 'ERA',
                clue: 'Distinct period of time',
                row: 1,
                col: 2
            },
            {
                answer: 'HI',
                clue: 'Informal hello',
                row: 3,
                col: 0
            },
            {
                answer: 'TO',
                clue: 'Towards',
                row: 3,
                col: 4
            }
        ]
    }
];

module.exports = crosswordPack1;
