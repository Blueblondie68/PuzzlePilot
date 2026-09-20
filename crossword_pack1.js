// crossword_pack1.js
// PuzzlePilot Crossword Pack 1
//
// 5 verified 5x5 mini crosswords
// plus three 7x7 crosswords.
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
    },

    // =========================================================
    // PUZZLE 008
    // 7x7 WORD-SQUARE CROSSWORD
    // ONE-OFF FULL GRID
    // =========================================================
    {
        id: 'crossword_pack1_008',
        title: 'Crossword 8',
        difficulty: 'Medium',

        solution: [
            ['P', 'R', 'E', 'P', 'A', 'R', 'E'],
            ['R', 'E', 'M', 'O', 'D', 'E', 'L'],
            ['E', 'M', 'U', 'L', 'A', 'T', 'E'],
            ['P', 'O', 'L', 'E', 'M', 'I', 'C'],
            ['A', 'D', 'A', 'M', 'A', 'N', 'T'],
            ['R', 'E', 'T', 'I', 'N', 'U', 'E'],
            ['E', 'L', 'E', 'C', 'T', 'E', 'D']
        ],

        across: [
            {
                answer: 'PREPARE',
                clue: 'Get ready for something',
                row: 0,
                col: 0
            },
            {
                answer: 'REMODEL',
                clue: 'Change the structure or appearance of something',
                row: 1,
                col: 0
            },
            {
                answer: 'EMULATE',
                clue: 'Try to match or equal',
                row: 2,
                col: 0
            },
            {
                answer: 'POLEMIC',
                clue: 'Strong written or spoken attack on an opinion',
                row: 3,
                col: 0
            },
            {
                answer: 'ADAMANT',
                clue: 'Refusing to change one’s mind',
                row: 4,
                col: 0
            },
            {
                answer: 'RETINUE',
                clue: 'Group of attendants accompanying an important person',
                row: 5,
                col: 0
            },
            {
                answer: 'ELECTED',
                clue: 'Chosen by a vote',
                row: 6,
                col: 0
            }
        ],

        down: [
            {
                answer: 'PREPARE',
                clue: 'Make something ready for use',
                row: 0,
                col: 0
            },
            {
                answer: 'REMODEL',
                clue: 'Alter or redesign',
                row: 0,
                col: 1
            },
            {
                answer: 'EMULATE',
                clue: 'Follow someone’s example in an attempt to equal them',
                row: 0,
                col: 2
            },
            {
                answer: 'POLEMIC',
                clue: 'Argument strongly opposing a particular view',
                row: 0,
                col: 3
            },
            {
                answer: 'ADAMANT',
                clue: 'Firm and unwilling to be persuaded',
                row: 0,
                col: 4
            },
            {
                answer: 'RETINUE',
                clue: 'Entourage of assistants or followers',
                row: 0,
                col: 5
            },
            {
                answer: 'ELECTED',
                clue: 'Selected for office through voting',
                row: 0,
                col: 6
            }
        ]
    }

 ,
{
    id: "crossword_pack1_009",
    title: "Crossword 9",
    difficulty: "Medium",
    solution: [
        "BROWSE#FORM",
        "A#########I",
        "SUN###C#SON",
        "E#AIRPORT#D",
        "##T#E#M#A##",
        "#QUESTIONS#",
        "S#R#U#N#D#W",
        "T#A#L#G#A#I",
        "A#LATE#ARTS",
        "F##C####D#H",
        "FEET#HOUSE#"
    ].map(row => row.split('')),
    across: [
        ["BROWSE","Look through casually, as in a shop or online",0,0],
        ["FORM","Shape or structure of something",0,7],
        ["SUN","Star at the centre of our solar system",2,0],
        ["SON","Male child",2,8],
        ["AIRPORT","Place where passenger aircraft arrive and depart",3,2],
        ["QUESTIONS","Things asked to obtain information",5,1],
        ["LATE","After the expected or usual time",8,2],
        ["ARTS","Creative subjects such as painting and music",8,7],
        ["FEET","Plural of foot",10,0],
        ["HOUSE","Building where people live",10,5]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col })),
    down: [
        ["BASE","Bottom or supporting part",0,0],
        ["STAFF","People employed by an organisation",6,0],
        ["NATURAL","Existing in nature rather than made artificially",2,2],
        ["ACT","Perform on stage",8,3],
        ["RESULT","Outcome of an action or event",3,4],
        ["COMING","Approaching or due to happen",2,6],
        ["STANDARDS","Accepted levels of quality or behaviour",2,8],
        ["MIND","Part of a person that thinks and remembers",0,10],
        ["WISH","Hope for something to happen",6,10]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col }))
},
{
    id: "crossword_pack1_010",
    title: "Crossword 10",
    difficulty: "Medium",
    solution: [
        "###########",
        "P##B#M###P#",
        "I##ROOF#DOG",
        "CLUE#R#W#T#",
        "T##A#N#EXAM",
        "U##KNIFE#T#",
        "R##F#N#K#O#",
        "E#LAUGH####",
        "###S#######",
        "#BUTTER####",
        "###########"
    ].map(row => row.split('')),
    across: [
        ["ROOF","Top covering of a building",2,3],
        ["DOG","Pet that may bark",2,8],
        ["CLUE","Hint used to solve a puzzle",3,0],
        ["EXAM","Formal test of knowledge",4,7],
        ["KNIFE","Cutting utensil with a blade",5,3],
        ["LAUGH","Make a sound showing amusement",7,2],
        ["BUTTER","Dairy spread made from cream",9,1]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col })),
    down: [
        ["PICTURE","Image, drawing or photograph",1,0],
        ["BREAKFAST","First meal of the day",1,3],
        ["MORNING","Early part of the day",1,5],
        ["WEEK","Period of seven days",3,7],
        ["POTATO","Starchy vegetable grown underground",1,9]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col }))
},
{
    id: "crossword_pack1_011",
    title: "Crossword 11",
    difficulty: "Medium",
    solution: [
        "##H###J##",
        "CROSSWORD",
        "A#R###U#I",
        "T#S###R#N",
        "#LESSON#N",
        "####M#EYE",
        "#FAMILY#R",
        "##R#L####",
        "LETTER###"
    ].map(row => row.split('')),
    across: [
        ["CROSSWORD","Word puzzle with intersecting answers",1,0],
        ["LESSON","Period of teaching",4,1],
        ["EYE","Organ used for seeing",5,6],
        ["FAMILY","Group of related people",6,1],
        ["LETTER","Written message sent to someone",8,0]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col })),
    down: [
        ["CAT","Pet that purrs",1,0],
        ["HORSE","Large animal often ridden",0,2],
        ["ART","Creative expression through visual work",6,2],
        ["SMILE","Happy expression on a face",4,4],
        ["JOURNEY","Travel from one place to another",0,6],
        ["DINNER","Main meal of the day",1,8]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col }))
},
{
    id: "crossword_pack1_012",
    title: "Crossword 12",
    difficulty: "Medium",
    solution: [
        "####SCHOOL#",
        "#####H####P",
        "###FOOTBALL",
        "#####C##R#A",
        "###T#O##T#Y",
        "##YELLOW##E",
        "###A#A#A##R",
        "###C#T#T###",
        "##CHEESE##T",
        "###E###RACE",
        "BEDROOM###A"
    ].map(row => row.split('')),
    across: [
        ["SCHOOL","Place where children are taught",0,4],
        ["FOOTBALL","Game played with a round ball and goals",2,3],
        ["YELLOW","Colour of a ripe lemon",5,2],
        ["CHEESE","Food made from milk",8,2],
        ["RACE","Contest to see who is fastest",9,7],
        ["BEDROOM","Room used for sleeping",10,0]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col })),
    down: [
        ["TEACHER","Person who teaches",4,3],
        ["CHOCOLATE","Sweet food made from cocoa",0,5],
        ["WATER","Clear liquid essential for life",5,7],
        ["ART","Creative expression through visual work",2,8],
        ["PLAYER","Person taking part in a game",1,10],
        ["TEA","Drink made by infusing leaves in hot water",8,10]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col }))
},
{
    id: "crossword_pack1_013",
    title: "Crossword 13",
    difficulty: "Medium",
    solution: [
        "#T#JUICE#",
        "#E####A##",
        "#ANSWER##",
        "N###E####",
        "O#BLACK##",
        "S###T####",
        "ELEPHANT#",
        "####E####",
        "BATHROOM#"
    ].map(row => row.split('')),
    across: [
        ["JUICE","Drink made from fruit or vegetables",0,3],
        ["ANSWER","Response to a question",2,1],
        ["BLACK","Darkest colour",4,2],
        ["ELEPHANT","Very large animal with a trunk",6,0],
        ["BATHROOM","Room containing a bath or shower",8,0]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col })),
    down: [
        ["NOSE","Part of the face used for smelling",3,0],
        ["TEA","Drink made by infusing leaves in hot water",0,1],
        ["WEATHER","State of the atmosphere at a particular time",2,4],
        ["CAR","Four-wheeled road vehicle",0,6]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col }))
},
{
    id: "crossword_pack1_014",
    title: "Crossword 14",
    difficulty: "Medium",
    solution: [
        "###########",
        "##HAPPY####",
        "#P##A##R###",
        "#HOSPITAL#W",
        "#O##E##I##I",
        "#N#GREEN##N",
        "YEAR###B##T",
        "###A#PEOPLE",
        "###P###W##R",
        "##BEACH####",
        "###########"
    ].map(row => row.split('')),
    across: [
        ["HAPPY","Feeling pleased or cheerful",1,2],
        ["HOSPITAL","Place where ill or injured people receive treatment",3,1],
        ["GREEN","Colour of fresh grass",5,3],
        ["YEAR","Period of twelve months",6,0],
        ["PEOPLE","Human beings collectively",7,5],
        ["BEACH","Sandy or pebbly shore",9,2]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col })),
    down: [
        ["PHONE","Device used to make calls",2,1],
        ["GRAPE","Small fruit that grows in bunches",5,3],
        ["PAPER","Material used for writing or printing",1,4],
        ["RAINBOW","Arc of colours sometimes seen after rain",2,7],
        ["WINTER","Coldest season of the year",3,10]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col }))
},
{
    id: "crossword_pack1_015",
    title: "Crossword 15",
    difficulty: "Medium",
    solution: [
        "C####SEED",
        "LAPTOP##O",
        "O##O#O##O",
        "C##D#O##R",
        "K#PAINT##",
        "#B#Y##R##",
        "#A##HEAD#",
        "#L####I##",
        "ELEPHANT#"
    ].map(row => row.split('')),
    across: [
        ["SEED","Part of a plant from which a new one can grow",0,5],
        ["LAPTOP","Portable computer",1,0],
        ["PAINT","Coloured substance applied to a surface",4,2],
        ["HEAD","Upper part of the body containing the brain",6,4],
        ["ELEPHANT","Very large animal with a trunk",8,0]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col })),
    down: [
        ["CLOCK","Device that tells the time",0,0],
        ["BALL","Round object used in many sports",5,1],
        ["TODAY","The present day",1,3],
        ["SPOON","Utensil with a small bowl at the end",0,5],
        ["TRAIN","Rail vehicle",4,6],
        ["DOOR","Entrance that opens and closes",0,8]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col }))
},
{
    id: "crossword_pack1_016",
    title: "Crossword 16",
    difficulty: "Medium",
    solution: [
        "######K####",
        "##EVENING##",
        "#B####T##S#",
        "CAR#CYCLING",
        "#N####H##O#",
        "#A#SHEEP#W#",
        "#N#P##N####",
        "CARROT#####",
        "###I#######",
        "RUNNING####",
        "###G#######"
    ].map(row => row.split('')),
    across: [
        ["EVENING","Later part of the day",1,2],
        ["CAR","Four-wheeled road vehicle",3,0],
        ["CYCLING","Riding a bicycle",3,4],
        ["SHEEP","Woolly farm animal",5,3],
        ["CARROT","Long orange root vegetable",7,0],
        ["RUNNING","Moving quickly on foot",9,0]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col })),
    down: [
        ["BANANA","Long curved yellow fruit",2,1],
        ["SPRING","Season after winter",5,3],
        ["KITCHEN","Room where meals are prepared",0,6],
        ["SNOW","Frozen flakes falling from clouds",2,9]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col }))
},
{
    id: "crossword_pack1_017",
    title: "Crossword 17",
    difficulty: "Medium",
    solution: [
        "###B###GOLD",
        "###U#W#A###",
        "###SWIMMING",
        "#####N#E##R",
        "#N###D##TEA",
        "#U#STORM##S",
        "#M#T#W#O##S",
        "#BIRD##U###",
        "#E#E##STAMP",
        "FRIEND#H###",
        "###T#######"
    ].map(row => row.split('')),
    across: [
        ["GOLD","Yellow precious metal",0,7],
        ["SWIMMING","Moving through water as a sport or activity",2,3],
        ["TEA","Drink made by infusing leaves in hot water",4,8],
        ["STORM","Period of severe weather",5,3],
        ["BIRD","Feathered animal with wings",7,1],
        ["STAMP","Small piece stuck to a letter before posting",8,6],
        ["FRIEND","Person you like and trust",9,0]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col })),
    down: [
        ["NUMBER","Mathematical value or symbol",4,1],
        ["BUS","Large road vehicle carrying passengers",0,3],
        ["STREET","Public road in a town or city",5,3],
        ["WINDOW","Glass opening in a wall",1,5],
        ["GAME","Activity played for enjoyment",0,7],
        ["MOUTH","Opening in the face used for eating and speaking",5,7],
        ["GRASS","Common green ground-covering plant",2,10]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col }))
}
,
{
    id: "crossword_pack1_018",
    title: "Crossword 18",
    difficulty: "Medium",
    solution: [
        "##I#B#H##",
        "##SCREEN#",
        "S#L#I#A##",
        "TEA#D#L##",
        "A#NIGHT##",
        "I#D#E#H##",
        "R########",
        "SPACE####",
        "#########"
    ].map(row => row.split('')),
    across: [
        ["SCREEN","Flat surface on which images or information are displayed",1,2],
        ["TEA","Drink made by infusing leaves in hot water",3,0],
        ["NIGHT","Time between evening and morning",4,2],
        ["SPACE","Area or room available",7,0]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col })),
    down: [
        ["STAIRS","Series of steps between different levels",2,0],
        ["ISLAND","Piece of land surrounded by water",0,2],
        ["BRIDGE","Structure carrying a route over an obstacle",0,4],
        ["HEALTH","Condition of a person's body or mind",0,6]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col }))
},
{
    id: "crossword_pack1_019",
    title: "Crossword 19",
    difficulty: "Medium",
    solution: [
        "########B#P",
        "##TEA#M#R#E",
        "####U#OCEAN",
        "#BUTTON#A#C",
        "K###U#K#D#I",
        "N#SUMMER###L",
        "I#I#N#Y####",
        "FILM#R#####",
        "E#V##A#####",
        "#TENNIS####",
        "##R##N#####"
    ].map(row => row.split('')),
    across: [
        ["TEA","Drink made by infusing leaves in hot water",1,2],
        ["OCEAN","Very large area of salt water",2,6],
        ["BUTTON","Small fastener on clothing",3,1],
        ["SUMMER","Warmest season of the year",5,2],
        ["FILM","Motion picture",7,0],
        ["TENNIS","Racket sport played across a net",9,1]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col })),
    down: [
        ["KNIFE","Cutting utensil with a blade",4,0],
        ["SILVER","Shiny grey precious metal",5,2],
        ["AUTUMN","Season between summer and winter",1,4],
        ["RAIN","Water falling from clouds",7,5],
        ["MONKEY","Primate often known for climbing",1,6],
        ["BREAD","Baked food commonly made from flour",0,8],
        ["PENCIL","Writing or drawing tool with a graphite core",0,10]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col }))
},
{
    id: "crossword_pack1_020",
    title: "Crossword 20",
    difficulty: "Medium",
    solution: [
        "R#######C",
        "A###LAUGH",
        "B#######O",
        "BUS#W#S#C",
        "I#PRICE#O",
        "T#O#N#E#L",
        "#GOLD#D#A",
        "##N#O###T",
        "####WHITE"
    ].map(row => row.split('')),
    across: [
        ["LAUGH","Make a sound showing amusement",1,4],
        ["BUS","Large road vehicle carrying passengers",3,0],
        ["PRICE","Amount of money something costs",4,2],
        ["GOLD","Yellow precious metal",6,1],
        ["WHITE","Colour of fresh snow",8,4]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col })),
    down: [
        ["RABBIT","Small animal with long ears",0,0],
        ["SPOON","Utensil with a small bowl at the end",3,2],
        ["WINDOW","Glass opening in a wall",3,4],
        ["SEED","Part of a plant from which a new one can grow",3,6],
        ["CHOCOLATE","Sweet food made from cocoa",0,8]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col }))
},
{
    id: "crossword_pack1_021",
    title: "Crossword 21",
    difficulty: "Medium",
    solution: [
        "##C#CHANGE#",
        "##H#I######",
        "#WINNER####",
        "##L#E##CUP#",
        "##D#M####U#",
        "#F#EARTH#Z#",
        "#O#Y##O##Z#",
        "TREE##M##L#",
        "#E##ORANGE#",
        "#S####T####",
        "#T#COLOUR##"
    ].map(row => row.split('')),
    across: [
        ["CHANGE","Make or become different",0,4],
        ["WINNER","Person or team that wins",2,1],
        ["CUP","Small drinking vessel",3,7],
        ["EARTH","Planet on which we live",5,3],
        ["TREE","Tall plant with a woody trunk",7,0],
        ["ORANGE","Citrus fruit and a colour",8,4],
        ["COLOUR","Appearance produced by reflected light",10,3]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col })),
    down: [
        ["FOREST","Large area covered chiefly with trees",5,1],
        ["CHILD","Young person",0,2],
        ["EYE","Organ used for seeing",5,3],
        ["CINEMA","Place where films are shown",0,4],
        ["TOMATO","Red fruit often used as a vegetable",5,6],
        ["PUZZLE","Problem or game designed to test ingenuity",3,9]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col }))
},
{
    id: "crossword_pack1_022",
    title: "Crossword 22",
    difficulty: "Medium",
    solution: [
        "###D##P#E",
        "#FLOWER#L",
        "R##G##I#E",
        "A#####CUP",
        "C#TABLE#H",
        "EAR#####A",
        "##A##MOON",
        "WHITE###T",
        "##N######"
    ].map(row => row.split('')),
    across: [
        ["FLOWER","Colourful part of many plants",1,1],
        ["CUP","Small drinking vessel",3,6],
        ["TABLE","Piece of furniture with a flat top",4,2],
        ["EAR","Organ used for hearing",5,0],
        ["MOON","Natural satellite of Earth",6,5],
        ["WHITE","Colour of fresh snow",7,0]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col })),
    down: [
        ["RACE","Contest to see who is fastest",2,0],
        ["TRAIN","Rail vehicle",4,2],
        ["DOG","Pet that may bark",0,3],
        ["PRICE","Amount of money something costs",0,6],
        ["ELEPHANT","Very large animal with a trunk",0,8]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col }))
},
{
    id: "crossword_pack1_023",
    title: "Crossword 23",
    difficulty: "Medium",
    solution: [
        "##M########",
        "CLOUD#PLANE",
        "A#N#O#U####",
        "M#T#CARROT#",
        "E#H#T#P##I#",
        "R##WORLD#G#",
        "A###R#E##E#",
        "#####A#WORD",
        "#####R#A##O",
        "###BOTTLE#G",
        "#######L###"
    ].map(row => row.split('')),
    across: [
        ["CLOUD","Visible mass of tiny water droplets in the sky",1,0],
        ["PLANE","Aircraft with fixed wings",1,6],
        ["CARROT","Long orange root vegetable",3,5],
        ["WORLD","Earth and all its people and places",5,3],
        ["WORD","Single unit of language",7,7],
        ["BOTTLE","Container with a narrow neck",9,3]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col })),
    down: [
        ["CAMERA","Device used for taking photographs",1,0],
        ["MONTH","One of the twelve divisions of a year",0,2],
        ["DOCTOR","Person qualified to practise medicine",1,4],
        ["ART","Creative expression through visual work",7,5],
        ["PURPLE","Colour made by combining red and blue",1,6],
        ["WALL","Vertical structure forming the side of a room or building",7,7],
        ["TIGER","Large striped wild cat",3,9],
        ["DOG","Pet that may bark",7,10]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col }))
},
{
    id: "crossword_pack1_024",
    title: "Crossword 24",
    difficulty: "Medium",
    solution: [
        "#########",
        "#MUSIC###",
        "###T##L##",
        "###A##U##",
        "#GARDEN#B",
        "N#C###CAR",
        "O#T#T#H#U",
        "SCORE###S",
        "E#R#ART#H"
    ].map(row => row.split('')),
    across: [
        ["MUSIC","Sounds arranged to create rhythm or melody",1,1],
        ["GARDEN","Area where flowers, vegetables or other plants are grown",4,1],
        ["CAR","Four-wheeled road vehicle",5,6],
        ["SCORE","Number of points achieved in a game",7,0],
        ["ART","Creative expression through visual work",8,4]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col })),
    down: [
        ["NOSE","Part of the face used for smelling",5,0],
        ["ACTOR","Person who performs a role in a play or film",4,2],
        ["STAR","Bright object seen in the night sky",1,3],
        ["TEA","Drink made by infusing leaves in hot water",6,4],
        ["LUNCH","Meal usually eaten around midday",2,6],
        ["BRUSH","Tool with bristles used for cleaning or grooming",4,8]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col }))
},
{
    id: "crossword_pack1_025",
    title: "Crossword 25",
    difficulty: "Medium",
    solution: [
        "#SPORT####W",
        "#H#####P##I",
        "#O#F##BROWN",
        "APPLE##I##D",
        "I##O###CUP#",
        "R##WHITE###",
        "P##E##A#S##",
        "O##RABBIT##",
        "R#####L#A##",
        "T#MOUSE#M##",
        "########P##"
    ].map(row => row.split('')),
    across: [
        ["SPORT","Physical activity played or competed in",0,1],
        ["BROWN","Colour of chocolate or soil",2,6],
        ["APPLE","Round fruit that may be red or green",3,0],
        ["CUP","Small drinking vessel",4,7],
        ["WHITE","Colour of fresh snow",5,3],
        ["RABBIT","Small animal with long ears",7,3],
        ["MOUSE","Small rodent with a long tail",9,2]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col })),
    down: [
        ["AIRPORT","Place where passenger aircraft arrive and depart",3,0],
        ["SHOP","Place where goods are sold",0,1],
        ["FLOWER","Colourful part of many plants",2,3],
        ["TABLE","Piece of furniture with a flat top",6,6],
        ["PRICE","Amount of money something costs",1,7],
        ["STAMP","Small piece stuck to a letter before posting",6,9],
        ["WIND","Moving air",0,10]
    ].map(([answer, clue, row, col]) => ({ answer, clue, row, col }))
}
];

module.exports = crosswordPack1;
