// crossword_pack1.js
// PuzzlePilot Crossword Pack 1
//
// 5 verified 5x5 mini crosswords
// plus our first 7x7 crossword.
//
// # means a black square.
// row and col start counting from 0.
// PuzzlePilot calculates clue numbers automatically.

const crosswordPack1 = [

    // =========================================================
    // PUZZLE 001
    // =========================================================
    {
        id: 'crossword_pack1_001',
        title: 'Mini Crossword 1',
        difficulty: 'Medium',

        solution: [
            ['I', 'T', '#', 'S', 'O'],
            ['F', 'I', 'F', 'T', 'H'],
            ['#', 'T', 'E', 'A', '#'],
            ['A', 'L', 'E', 'R', 'T'],
            ['M', 'E', '#', 'T', 'O']
        ],

        across: [
            {
                answer: 'IT',
                clue: 'Pronoun for a thing',
                row: 0,
                col: 0
            },
            {
                answer: 'SO',
                clue: 'Therefore',
                row: 0,
                col: 3
            },
            {
                answer: 'FIFTH',
                clue: 'Position after fourth',
                row: 1,
                col: 0
            },
            {
                answer: 'TEA',
                clue: 'Popular hot drink',
                row: 2,
                col: 1
            },
            {
                answer: 'ALERT',
                clue: 'Watchful and ready',
                row: 3,
                col: 0
            },
            {
                answer: 'ME',
                clue: 'Object form of I',
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
                clue: 'Provided that',
                row: 0,
                col: 0
            },
            {
                answer: 'TITLE',
                clue: 'Name of a book or film',
                row: 0,
                col: 1
            },
            {
                answer: 'START',
                clue: 'Begin',
                row: 0,
                col: 3
            },
            {
                answer: 'OH',
                clue: 'Expression of surprise',
                row: 0,
                col: 4
            },
            {
                answer: 'FEE',
                clue: 'Charge for a service',
                row: 1,
                col: 2
            },
            {
                answer: 'AM',
                clue: 'First-person form of be',
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
    },

    // =========================================================
    // PUZZLE 002
    // =========================================================
    {
        id: 'crossword_pack1_002',
        title: 'Mini Crossword 2',
        difficulty: 'Medium',

        solution: [
            ['A', 'T', '#', 'N', 'O'],
            ['M', 'O', 'T', 'O', 'R'],
            ['#', 'W', 'A', 'R', '#'],
            ['D', 'E', 'P', 'T', 'H'],
            ['O', 'R', '#', 'H', 'E']
        ],

        across: [
            {
                answer: 'AT',
                clue: 'Indicating a location',
                row: 0,
                col: 0
            },
            {
                answer: 'NO',
                clue: 'Opposite of yes',
                row: 0,
                col: 3
            },
            {
                answer: 'MOTOR',
                clue: 'Machine that provides power',
                row: 1,
                col: 0
            },
            {
                answer: 'WAR',
                clue: 'Armed conflict',
                row: 2,
                col: 1
            },
            {
                answer: 'DEPTH',
                clue: 'Distance from top to bottom',
                row: 3,
                col: 0
            },
            {
                answer: 'OR',
                clue: 'Word offering an alternative',
                row: 4,
                col: 0
            },
            {
                answer: 'HE',
                clue: 'Male pronoun',
                row: 4,
                col: 3
            }
        ],

        down: [
            {
                answer: 'AM',
                clue: 'Morning abbreviation',
                row: 0,
                col: 0
            },
            {
                answer: 'TOWER',
                clue: 'Tall narrow structure',
                row: 0,
                col: 1
            },
            {
                answer: 'NORTH',
                clue: 'Direction opposite south',
                row: 0,
                col: 3
            },
            {
                answer: 'OR',
                clue: 'Otherwise',
                row: 0,
                col: 4
            },
            {
                answer: 'TAP',
                clue: 'Lightly strike',
                row: 1,
                col: 2
            },
            {
                answer: 'DO',
                clue: 'Perform an action',
                row: 3,
                col: 0
            },
            {
                answer: 'HE',
                clue: 'Pronoun for a man',
                row: 3,
                col: 4
            }
        ]
    },

    // =========================================================
    // PUZZLE 003
    // =========================================================
    {
        id: 'crossword_pack1_003',
        title: 'Mini Crossword 3',
        difficulty: 'Medium',

        solution: [
            ['U', 'S', '#', 'O', 'H'],
            ['P', 'L', 'A', 'C', 'E'],
            ['#', 'I', 'C', 'E', '#'],
            ['O', 'C', 'E', 'A', 'N'],
            ['H', 'E', '#', 'N', 'O']
        ],

        across: [
            {
                answer: 'US',
                clue: 'Object form of we',
                row: 0,
                col: 0
            },
            {
                answer: 'OH',
                clue: 'Exclamation of realisation',
                row: 0,
                col: 3
            },
            {
                answer: 'PLACE',
                clue: 'Particular location',
                row: 1,
                col: 0
            },
            {
                answer: 'ICE',
                clue: 'Frozen water',
                row: 2,
                col: 1
            },
            {
                answer: 'OCEAN',
                clue: 'Vast body of salt water',
                row: 3,
                col: 0
            },
            {
                answer: 'HE',
                clue: 'Male pronoun',
                row: 4,
                col: 0
            },
            {
                answer: 'NO',
                clue: 'Negative response',
                row: 4,
                col: 3
            }
        ],

        down: [
            {
                answer: 'UP',
                clue: 'Opposite of down',
                row: 0,
                col: 0
            },
            {
                answer: 'SLICE',
                clue: 'Thin piece cut from something',
                row: 0,
                col: 1
            },
            {
                answer: 'OCEAN',
                clue: 'The Atlantic, for example',
                row: 0,
                col: 3
            },
            {
                answer: 'HE',
                clue: 'Pronoun for a male',
                row: 0,
                col: 4
            },
            {
                answer: 'ACE',
                clue: 'Top playing card',
                row: 1,
                col: 2
            },
            {
                answer: 'OH',
                clue: 'Expression of surprise',
                row: 3,
                col: 0
            },
            {
                answer: 'NO',
                clue: 'Refusal',
                row: 3,
                col: 4
            }
        ]
    },

    // =========================================================
    // PUZZLE 004
    // =========================================================
    {
        id: 'crossword_pack1_004',
        title: 'Mini Crossword 4',
        difficulty: 'Medium',

        solution: [
            ['B', 'E', '#', 'A', 'M'],
            ['E', 'N', 'E', 'M', 'Y'],
            ['#', 'E', 'G', 'O', '#'],
            ['A', 'M', 'O', 'N', 'G'],
            ['M', 'Y', '#', 'G', 'O']
        ],

        across: [
            {
                answer: 'BE',
                clue: 'Exist',
                row: 0,
                col: 0
            },
            {
                answer: 'AM',
                clue: 'First-person form of be',
                row: 0,
                col: 3
            },
            {
                answer: 'ENEMY',
                clue: 'Hostile opponent',
                row: 1,
                col: 0
            },
            {
                answer: 'EGO',
                clue: 'Sense of self-importance',
                row: 2,
                col: 1
            },
            {
                answer: 'AMONG',
                clue: 'Surrounded by',
                row: 3,
                col: 0
            },
            {
                answer: 'MY',
                clue: 'Belonging to me',
                row: 4,
                col: 0
            },
            {
                answer: 'GO',
                clue: 'Leave or proceed',
                row: 4,
                col: 3
            }
        ],

        down: [
            {
                answer: 'BE',
                clue: 'To exist',
                row: 0,
                col: 0
            },
            {
                answer: 'ENEMY',
                clue: 'One who opposes you',
                row: 0,
                col: 1
            },
            {
                answer: 'AMONG',
                clue: 'In the middle of',
                row: 0,
                col: 3
            },
            {
                answer: 'MY',
                clue: 'Possessive word before a noun',
                row: 0,
                col: 4
            },
            {
                answer: 'EGO',
                clue: 'One’s sense of self',
                row: 1,
                col: 2
            },
            {
                answer: 'AM',
                clue: 'Part of “I am”',
                row: 3,
                col: 0
            },
            {
                answer: 'GO',
                clue: 'Move from one place to another',
                row: 3,
                col: 4
            }
        ]
    },

    // =========================================================
    // PUZZLE 005
    // =========================================================
    {
        id: 'crossword_pack1_005',
        title: 'Mini Crossword 5',
        difficulty: 'Medium',

        solution: [
            ['I', 'F', '#', 'S', 'O'],
            ['F', 'A', 'I', 'T', 'H'],
            ['#', 'I', 'C', 'E', '#'],
            ['S', 'T', 'E', 'A', 'M'],
            ['O', 'H', '#', 'M', 'E']
        ],

        across: [
            {
                answer: 'IF',
                clue: 'On the condition that',
                row: 0,
                col: 0
            },
            {
                answer: 'SO',
                clue: 'For that reason',
                row: 0,
                col: 3
            },
            {
                answer: 'FAITH',
                clue: 'Strong belief or trust',
                row: 1,
                col: 0
            },
            {
                answer: 'ICE',
                clue: 'Frozen water',
                row: 2,
                col: 1
            },
            {
                answer: 'STEAM',
                clue: 'Vapour from boiling water',
                row: 3,
                col: 0
            },
            {
                answer: 'OH',
                clue: 'Expression of surprise',
                row: 4,
                col: 0
            },
            {
                answer: 'ME',
                clue: 'Object form of I',
                row: 4,
                col: 3
            }
        ],

        down: [
            {
                answer: 'IF',
                clue: 'Provided that',
                row: 0,
                col: 0
            },
            {
                answer: 'FAITH',
                clue: 'Confidence or trust',
                row: 0,
                col: 1
            },
            {
                answer: 'STEAM',
                clue: 'Hot water vapour',
                row: 0,
                col: 3
            },
            {
                answer: 'OH',
                clue: 'Brief exclamation',
                row: 0,
                col: 4
            },
            {
                answer: 'ICE',
                clue: 'Something used to chill a drink',
                row: 1,
                col: 2
            },
            {
                answer: 'SO',
                clue: 'To such a degree',
                row: 3,
                col: 0
            },
            {
                answer: 'ME',
                clue: 'Speaker referring to themselves',
                row: 3,
                col: 4
            }
        ]
    },

    // =========================================================
    // PUZZLE 006
    // FIRST 7x7 CROSSWORD
    // =========================================================
    {
        id: 'crossword_pack1_006',
        title: 'Crossword 6',
        difficulty: 'Medium',

        solution: [
            ['C', 'A', 'T', '#', 'D', 'O', 'G'],
            ['A', 'R', 'E', '#', 'O', 'R', 'E'],
            ['T', 'E', 'N', '#', 'G', 'E', 'M'],
            ['#', '#', '#', '#', '#', '#', '#'],
            ['S', 'U', 'N', '#', 'M', 'A', 'P'],
            ['U', 'S', 'E', '#', 'A', 'P', 'E'],
            ['N', 'E', 'T', '#', 'P', 'E', 'N']
        ],

        across: [
            {
                answer: 'CAT',
                clue: 'Pet that purrs',
                row: 0,
                col: 0
            },
            {
                answer: 'DOG',
                clue: 'Pet that may bark',
                row: 0,
                col: 4
            },
            {
                answer: 'ARE',
                clue: 'Present-tense form of be',
                row: 1,
                col: 0
            },
            {
                answer: 'ORE',
                clue: 'Rock containing valuable minerals',
                row: 1,
                col: 4
            },
            {
                answer: 'TEN',
                clue: 'Number after nine',
                row: 2,
                col: 0
            },
            {
                answer: 'GEM',
                clue: 'Precious stone',
                row: 2,
                col: 4
            },
            {
                answer: 'SUN',
                clue: 'Star at the centre of our solar system',
                row: 4,
                col: 0
            },
            {
                answer: 'MAP',
                clue: 'Diagram showing roads or places',
                row: 4,
                col: 4
            },
            {
                answer: 'USE',
                clue: 'Put into service',
                row: 5,
                col: 0
            },
            {
                answer: 'APE',
                clue: 'Primate such as a gorilla',
                row: 5,
                col: 4
            },
            {
                answer: 'NET',
                clue: 'Mesh used to catch things',
                row: 6,
                col: 0
            },
            {
                answer: 'PEN',
                clue: 'Tool used for writing in ink',
                row: 6,
                col: 4
            }
        ],

        down: [
            {
                answer: 'CAT',
                clue: 'Feline household pet',
                row: 0,
                col: 0
            },
            {
                answer: 'ARE',
                clue: 'Word used with “we” before an adjective',
                row: 0,
                col: 1
            },
            {
                answer: 'TEN',
                clue: 'Half of twenty',
                row: 0,
                col: 2
            },
            {
                answer: 'DOG',
                clue: 'Canine companion',
                row: 0,
                col: 4
            },
            {
                answer: 'ORE',
                clue: 'Material mined for its metal content',
                row: 0,
                col: 5
            },
            {
                answer: 'GEM',
                clue: 'Jewel or precious stone',
                row: 0,
                col: 6
            },
            {
                answer: 'SUN',
                clue: 'Source of daylight',
                row: 4,
                col: 0
            },
            {
                answer: 'USE',
                clue: 'Purpose for which something is employed',
                row: 4,
                col: 1
            },
            {
                answer: 'NET',
                clue: 'What a goalkeeper guards',
                row: 4,
                col: 2
            },
            {
                answer: 'MAP',
                clue: 'Guide showing geographical locations',
                row: 4,
                col: 4
            },
            {
                answer: 'APE',
                clue: 'Large primate',
                row: 4,
                col: 5
            },
            {
                answer: 'PEN',
                clue: 'Enclosure for animals',
                row: 4,
                col: 6
            }
        ]

    },

    // =========================================================
    // PUZZLE 007
    // 7x7 CROSSWORD
    // =========================================================
    {
        id: 'crossword_pack1_007',
        title: 'Crossword 7',
        difficulty: 'Medium',

        solution: [
            ['A', 'C', 'T', '#', 'A', 'G', 'E'],
            ['C', 'A', 'R', '#', 'G', 'E', 'L'],
            ['T', 'R', 'Y', '#', 'E', 'L', 'F'],
            ['#', '#', '#', '#', '#', '#', '#'],
            ['B', 'A', 'D', '#', 'H', 'E', 'N'],
            ['A', 'R', 'E', '#', 'E', 'Y', 'E'],
            ['D', 'E', 'N', '#', 'N', 'E', 'T']
        ],

        across: [
            {
                answer: 'ACT',
                clue: 'Perform on stage',
                row: 0,
                col: 0
            },
            {
                answer: 'AGE',
                clue: 'Number of years someone has lived',
                row: 0,
                col: 4
            },
            {
                answer: 'CAR',
                clue: 'Four-wheeled road vehicle',
                row: 1,
                col: 0
            },
            {
                answer: 'GEL',
                clue: 'Thick jelly-like substance',
                row: 1,
                col: 4
            },
            {
                answer: 'TRY',
                clue: 'Make an attempt',
                row: 2,
                col: 0
            },
            {
                answer: 'ELF',
                clue: 'Small magical creature of folklore',
                row: 2,
                col: 4
            },
            {
                answer: 'BAD',
                clue: 'Opposite of good',
                row: 4,
                col: 0
            },
            {
                answer: 'HEN',
                clue: 'Female chicken',
                row: 4,
                col: 4
            },
            {
                answer: 'ARE',
                clue: 'Present-tense form of be',
                row: 5,
                col: 0
            },
            {
                answer: 'EYE',
                clue: 'Organ used for seeing',
                row: 5,
                col: 4
            },
            {
                answer: 'DEN',
                clue: 'Wild animal’s lair',
                row: 6,
                col: 0
            },
            {
                answer: 'NET',
                clue: 'Mesh used for catching things',
                row: 6,
                col: 4
            }
        ],

        down: [
            {
                answer: 'ACT',
                clue: 'Do something',
                row: 0,
                col: 0
            },
            {
                answer: 'CAR',
                clue: 'Vehicle driven on a road',
                row: 0,
                col: 1
            },
            {
                answer: 'TRY',
                clue: 'Have a go',
                row: 0,
                col: 2
            },
            {
                answer: 'AGE',
                clue: 'Length of time someone has been alive',
                row: 0,
                col: 4
            },
            {
                answer: 'GEL',
                clue: 'Semi-solid substance',
                row: 0,
                col: 5
            },
            {
                answer: 'ELF',
                clue: 'Mythical pointed-eared creature',
                row: 0,
                col: 6
            },
            {
                answer: 'BAD',
                clue: 'Not good',
                row: 4,
                col: 0
            },
            {
                answer: 'ARE',
                clue: 'Word used in “we are”',
                row: 4,
                col: 1
            },
            {
                answer: 'DEN',
                clue: 'Shelter used by a wild animal',
                row: 4,
                col: 2
            },
            {
                answer: 'HEN',
                clue: 'Egg-laying female bird',
                row: 4,
                col: 4
            },
            {
                answer: 'EYE',
                clue: 'Part of the body used to see',
                row: 4,
                col: 5
            },
            {
                answer: 'NET',
                clue: 'Mesh barrier in tennis',
                row: 4,
                col: 6
            }
        ]
    }
];

module.exports = crosswordPack1;
