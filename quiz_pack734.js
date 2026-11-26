// PuzzlePilot — Pack 734: Bob's Full House
// 27 additions; seven existing questions in Pack 220 retained. Original Packs 209–222 checked for programme matches. Six series, eight specials, all rounds, production, music, documented episode outcomes and adaptations. No formal programme award verified in web searches; complete individual episode results and full-bank semantic duplicate check outstanding. Bank connection unchanged.
'use strict';
const questions = [
  {
    "id": "tv_54956",
    "question": "Which channel originally broadcast Bob's Full House?",
    "answers": [
      "BBC Two",
      "BBC One",
      "ITV",
      "Channel 4"
    ],
    "correctAnswer": "BBC One",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Broadcast",
      "Source: https://en.wikipedia.org/wiki/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54957",
    "question": "How many series of Bob's Full House were broadcast?",
    "answers": [
      "Six",
      "Four",
      "Five",
      "Seven"
    ],
    "correctAnswer": "Six",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Broadcast",
      "Source: https://en.wikipedia.org/wiki/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54958",
    "question": "How many regular episodes of Bob's Full House were made, excluding specials?",
    "answers": [
      "101",
      "117",
      "125",
      "109"
    ],
    "correctAnswer": "109",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Broadcast",
      "Source: https://www.ukgameshows.com/ukgs/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54959",
    "question": "How many festive specials of Bob's Full House were made?",
    "answers": [
      "Four",
      "Six",
      "Eight",
      "Ten"
    ],
    "correctAnswer": "Eight",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Specials",
      "Source: https://en.wikipedia.org/wiki/Bob%27s_Full_House",
      "christmas",
      "easter"
    ]
  },
  {
    "id": "tv_54960",
    "question": "Which two festive periods featured special editions of Bob's Full House?",
    "answers": [
      "Christmas and Halloween",
      "Christmas and Easter",
      "Easter and Halloween",
      "Christmas and Valentine's Day"
    ],
    "correctAnswer": "Christmas and Easter",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Specials",
      "Source: https://en.wikipedia.org/wiki/Bob%27s_Full_House",
      "christmas",
      "easter"
    ]
  },
  {
    "id": "tv_54961",
    "question": "Which television complex housed Bob's Full House?",
    "answers": [
      "BBC Television Centre",
      "Elstree Studios",
      "Fountain Studios",
      "Teddington Studios"
    ],
    "correctAnswer": "BBC Television Centre",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Production",
      "Source: https://en.wikipedia.org/wiki/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54962",
    "question": "Who devised Bob's Full House with Terry Mardell?",
    "answers": [
      "David Briggs",
      "Mitchell Symons",
      "Glenn Hugill",
      "David Moore"
    ],
    "correctAnswer": "David Moore",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Creators",
      "Source: https://www.ukgameshows.com/ukgs/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54963",
    "question": "Which comedian and writer contributed material to Bob's Full House?",
    "answers": [
      "Barry Cryer",
      "Spike Milligan",
      "John Junkin",
      "Eric Sykes"
    ],
    "correctAnswer": "John Junkin",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Writing",
      "Source: https://www.ukgameshows.com/ukgs/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54964",
    "question": "Who composed the theme music for Bob's Full House?",
    "answers": [
      "Keith Strachan",
      "John Mealing",
      "Paul Farrer",
      "Ronnie Hazlehurst"
    ],
    "correctAnswer": "John Mealing",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Music",
      "Source: https://www.ukgameshows.com/ukgs/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54965",
    "question": "Who contributed the brass band effects for the Bob's Full House theme?",
    "answers": [
      "Viv Fisher",
      "David Lowe",
      "Rick Turk",
      "George Fenton"
    ],
    "correctAnswer": "Viv Fisher",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Music",
      "Source: https://www.ukgameshows.com/ukgs/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54966",
    "question": "How many numbers were visible on each player's card at the start of Bob's Full House?",
    "answers": [
      "12",
      "18",
      "24",
      "15"
    ],
    "correctAnswer": "15",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Cards",
      "Source: https://en.wikipedia.org/wiki/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54967",
    "question": "What was the highest number used on the bingo cards in Bob's Full House?",
    "answers": [
      "50",
      "75",
      "60",
      "90"
    ],
    "correctAnswer": "60",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Cards",
      "Source: https://en.wikipedia.org/wiki/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54968",
    "question": "How many subject categories appeared on the Monkhouse Mastercard at any one time?",
    "answers": [
      "Four",
      "Six",
      "Five",
      "Eight"
    ],
    "correctAnswer": "Six",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Middle Line",
      "Source: https://en.wikipedia.org/wiki/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54969",
    "question": "When could a contestant collect their Lucky Number prize on Bob's Full House?",
    "answers": [
      "By selecting it and answering correctly on their own turn",
      "By buzzing in on another player's question",
      "By lighting all four corners first",
      "By identifying another contestant's Lucky Number"
    ],
    "correctAnswer": "By selecting it and answering correctly on their own turn",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Lucky Number",
      "Source: https://www.ukgameshows.com/ukgs/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54970",
    "question": "What determined the overall winner of Bob's Full House?",
    "answers": [
      "Winning the most expensive individual prize",
      "Having the fewest numbers lit",
      "Winning the first two rounds",
      "Completing all the numbers on their card first"
    ],
    "correctAnswer": "Completing all the numbers on their card first",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Full House",
      "Source: https://en.wikipedia.org/wiki/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54971",
    "question": "What consolation gift did players who had won no prizes receive on Bob's Full House?",
    "answers": [
      "A wristwatch",
      "A record voucher",
      "A hamper",
      "A telephone"
    ],
    "correctAnswer": "A hamper",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Prizes",
      "Source: https://en.wikipedia.org/wiki/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54972",
    "question": "How much time was available in the Golden Card game on Bob's Full House?",
    "answers": [
      "30 seconds",
      "60 seconds",
      "45 seconds",
      "90 seconds"
    ],
    "correctAnswer": "60 seconds",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Golden Card",
      "Source: https://en.wikipedia.org/wiki/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54973",
    "question": "How many questions could the finalist face in the Golden Card game of Bob's Full House?",
    "answers": [
      "15",
      "10",
      "12",
      "20"
    ],
    "correctAnswer": "15",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Golden Card",
      "Source: https://en.wikipedia.org/wiki/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54974",
    "question": "What did the hidden letters on the Golden Card spell out in Bob's Full House?",
    "answers": [
      "The presenter's name",
      "A sponsor's slogan",
      "A contestant's surname",
      "The holiday destination"
    ],
    "correctAnswer": "The holiday destination",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Golden Card",
      "Source: https://en.wikipedia.org/wiki/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54975",
    "question": "How was spending money accumulated on the Golden Card in Bob's Full House?",
    "answers": [
      "Every correct answer paid a fixed £100",
      "Each letter paid £50",
      "Uncovering spaces without letters paid their number in pounds",
      "The remaining seconds were worth £10 each"
    ],
    "correctAnswer": "Uncovering spaces without letters paid their number in pounds",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Golden Card",
      "Source: https://www.ukgameshows.com/ukgs/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54976",
    "question": "What holiday destination did Tim win in the first episode of Bob's Full House?",
    "answers": [
      "Rome",
      "Seville",
      "Athens",
      "Paris"
    ],
    "correctAnswer": "Seville",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "First episode",
      "Source: https://www.ukgameshows.com/ukgs/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54977",
    "question": "Which organisation did the winning contestant in the 1984 Boxing Day Bob's Full House special represent?",
    "answers": [
      "St John Ambulance",
      "RNLI",
      "British Red Cross",
      "Salvation Army"
    ],
    "correctAnswer": "St John Ambulance",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Charity special",
      "Source: https://www.ukgameshows.com/ukgs/Bob%27s_Full_House",
      "charity"
    ]
  },
  {
    "id": "tv_54978",
    "question": "How much was each correct answer worth to a player's charity in the charity editions of Bob's Full House?",
    "answers": [
      "£5",
      "£25",
      "£100",
      "£10"
    ],
    "correctAnswer": "£10",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Charity special",
      "Source: https://en.wikipedia.org/wiki/Bob%27s_Full_House",
      "charity"
    ]
  },
  {
    "id": "tv_54979",
    "question": "Which title was used for the American adaptation of Bob's Full House?",
    "answers": [
      "Card Sharks",
      "High Rollers",
      "Trump Card",
      "Blockbusters"
    ],
    "correctAnswer": "Trump Card",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "International format",
      "Source: https://www.ukgameshows.com/ukgs/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54980",
    "question": "Which software publisher released the home computer adaptation of Bob's Full House in 1988?",
    "answers": [
      "Ocean",
      "Domark",
      "Codemasters",
      "Gremlin Graphics"
    ],
    "correctAnswer": "Domark",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Merchandise",
      "Source: https://en.wikipedia.org/wiki/Bob%27s_Full_House"
    ]
  },
  {
    "id": "tv_54981",
    "question": "Which designer is credited with the 1987 Bob's Full House title graphics in the BBC Motion Graphics Archive?",
    "answers": [
      "Marc Ortmans",
      "Bernard Lodge",
      "Martin Lambie-Nairn",
      "Oliver Elmes"
    ],
    "correctAnswer": "Marc Ortmans",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Title graphics",
      "Source: https://www.ravensbourne.ac.uk/bbc-motion-graphics-archive/bobs-full-house-1987"
    ]
  },
  {
    "id": "tv_54982",
    "question": "Which of these home game formats was commercially released for Bob's Full House in 1987?",
    "answers": [
      "A pinball machine",
      "A handheld LCD game",
      "A role-playing gamebook",
      "A board game"
    ],
    "correctAnswer": "A board game",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bob's Full House",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bob's Full House",
      "Programme: Bob's Full House",
      "Bob Monkhouse",
      "BBC One",
      "1984–1990",
      "Merchandise",
      "Source: https://boardgamegeek.com/boardgame/114440/bobs-full-house"
    ]
  }
];
if(questions.length!==27||new Set(questions.map(q=>q.id)).size!==questions.length||new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||questions.some((q,i)=>q.id!=='tv_'+(54956+i)||q.answers.length!==4||new Set(q.answers).size!==4||q.answers.filter(a=>a===q.correctAnswer).length!==1||!q.tags.includes('Programme: '+q.topic)||q.dailyEligible!==true))throw Error('Pack 734 validation failed');
module.exports=questions;
