// PuzzlePilot — Pack 669: Lucky Ladders
// 21 supplementary questions; six originals retained in Pack 216.
// Six series, production, rules, scoring, prizes and behind-the-scenes history. Sources conflict on total episodes (190 vs 195), so omitted. No verified award nominations located. Original Packs 209–222 checked; individual episode outcomes and full-bank semantic duplicate check outstanding. Bank connection unchanged.
'use strict';
const questions = [
  {
    "id": "tv_53250",
    "question": "Which ITV regional broadcaster produced Lucky Ladders?",
    "answers": [
      "Anglia Television",
      "Tyne Tees",
      "HTV",
      "Granada"
    ],
    "correctAnswer": "Anglia Television",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Production",
      "Source: https://www.ukgameshows.com/ukgs/Lucky_Ladders"
    ]
  },
  {
    "id": "tv_53251",
    "question": "Which company collaborated with Anglia and Basada Inc. to make Lucky Ladders?",
    "answers": [
      "Celador",
      "Action Time",
      "12 Yard",
      "Reg Grundy Productions"
    ],
    "correctAnswer": "Action Time",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Production",
      "Source: https://www.ukgameshows.com/ukgs/Lucky_Ladders"
    ]
  },
  {
    "id": "tv_53252",
    "question": "Who provided the voiceover for Lucky Ladders?",
    "answers": [
      "John Sachs",
      "Nick Jackson",
      "Peter Simon",
      "Peter Dickson"
    ],
    "correctAnswer": "Peter Simon",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Voiceover",
      "Source: https://tvark.org/lucky-ladders"
    ]
  },
  {
    "id": "tv_53253",
    "question": "Who created the American format adapted as Lucky Ladders?",
    "answers": [
      "Mark Goodson",
      "Merv Griffin",
      "Monty Hall",
      "Bob Stewart"
    ],
    "correctAnswer": "Bob Stewart",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Format origins",
      "Source: https://www.ukgameshows.com/ukgs/Lucky_Ladders"
    ]
  },
  {
    "id": "tv_53254",
    "question": "Who composed the Lucky Ladders theme music?",
    "answers": [
      "Mike Moran",
      "Ed Welch",
      "Keith Strachan",
      "Ronnie Hazlehurst"
    ],
    "correctAnswer": "Mike Moran",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Theme music",
      "Source: https://www.ukgameshows.com/ukgs/Lucky_Ladders"
    ]
  },
  {
    "id": "tv_53255",
    "question": "How many series of Lucky Ladders were broadcast?",
    "answers": [
      "Four",
      "Six",
      "Five",
      "Seven"
    ],
    "correctAnswer": "Six",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Series history",
      "Source: https://www.ukgameshows.com/ukgs/Lucky_Ladders"
    ]
  },
  {
    "id": "tv_53256",
    "question": "Which ITV morning time slot was associated with Lucky Ladders?",
    "answers": [
      "7.30 am",
      "11.30 am",
      "9.25 am",
      "8.45 am"
    ],
    "correctAnswer": "9.25 am",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Broadcast schedule",
      "Source: https://www.ukgameshows.com/ukgs/Lucky_Ladders"
    ]
  },
  {
    "id": "tv_53257",
    "question": "How many people made up each competing team on Lucky Ladders?",
    "answers": [
      "One",
      "Three",
      "Four",
      "Two"
    ],
    "correctAnswer": "Two",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Contestants",
      "Source: https://en.wikipedia.org/wiki/Lucky_Ladders"
    ]
  },
  {
    "id": "tv_53258",
    "question": "What was the waiting area for fresh contestants on Lucky Ladders called?",
    "answers": [
      "The Player's Paddock",
      "The Waiting Room",
      "The Winners' Circle",
      "The Word Bank"
    ],
    "correctAnswer": "The Player's Paddock",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Studio",
      "Source: https://en.wikipedia.org/wiki/Lucky_Ladders"
    ]
  },
  {
    "id": "tv_53259",
    "question": "Could partners discuss their guesses during the main game on Lucky Ladders?",
    "answers": [
      "Only once per ladder",
      "No",
      "Only during the final word",
      "Yes, at any time"
    ],
    "correctAnswer": "No",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Main game",
      "Source: https://en.wikipedia.org/wiki/Lucky_Ladders"
    ]
  },
  {
    "id": "tv_53260",
    "question": "How many points was an ordinary correct word worth at the start of Lucky Ladders?",
    "answers": [
      "5",
      "15",
      "10",
      "25"
    ],
    "correctAnswer": "10",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Scoring",
      "Source: https://en.wikipedia.org/wiki/Lucky_Ladders"
    ]
  },
  {
    "id": "tv_53261",
    "question": "How many points did the last word of the opening ladder earn on Lucky Ladders?",
    "answers": [
      "10",
      "30",
      "40",
      "20"
    ],
    "correctAnswer": "20",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Scoring",
      "Source: https://en.wikipedia.org/wiki/Lucky_Ladders"
    ]
  },
  {
    "id": "tv_53262",
    "question": "What score did a Lucky Ladders team need to reach to win the main game?",
    "answers": [
      "200 points",
      "100 points",
      "150 points",
      "300 points"
    ],
    "correctAnswer": "200 points",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Winning score",
      "Source: https://en.wikipedia.org/wiki/Lucky_Ladders"
    ]
  },
  {
    "id": "tv_53263",
    "question": "Which end of the jackpot ladder on Lucky Ladders was not revealed in advance?",
    "answers": [
      "The top",
      "The bottom",
      "Both ends",
      "Neither end"
    ],
    "correctAnswer": "The bottom",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Jackpot ladder",
      "Source: https://en.wikipedia.org/wiki/Lucky_Ladders"
    ]
  },
  {
    "id": "tv_53264",
    "question": "How many free letter clues were permitted on the jackpot ladder in Lucky Ladders?",
    "answers": [
      "Three",
      "Seven",
      "Five",
      "Ten"
    ],
    "correctAnswer": "Five",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Jackpot ladder",
      "Source: https://en.wikipedia.org/wiki/Lucky_Ladders"
    ]
  },
  {
    "id": "tv_53265",
    "question": "After completing how many jackpot ladders did champions retire from Lucky Ladders?",
    "answers": [
      "Two",
      "Three",
      "Ten",
      "Five"
    ],
    "correctAnswer": "Five",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Returning champions",
      "Source: https://en.wikipedia.org/wiki/Lucky_Ladders"
    ]
  },
  {
    "id": "tv_53266",
    "question": "What major prize was associated with successful Lucky Ladders champions?",
    "answers": [
      "A holiday",
      "A sports car",
      "A caravan",
      "A speedboat"
    ],
    "correctAnswer": "A holiday",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Prizes",
      "Source: https://www.the-independent.com/news/obituaries/lennie-bennett-standup-comedian-who-hosted-the-punchlines-game-show-1687680.html"
    ]
  },
  {
    "id": "tv_53267",
    "question": "How many promotional ladder trophies were originally made for Lucky Ladders?",
    "answers": [
      "Two",
      "Six",
      "Ten",
      "Twenty"
    ],
    "correctAnswer": "Six",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Behind the scenes",
      "Source: https://www.ukgameshows.com/ukgs/Lucky_Ladders"
    ]
  },
  {
    "id": "tv_53268",
    "question": "Which television documentary revealed why early Lucky Ladders contestants returned their trophies after filming?",
    "answers": [
      "The South Bank Show",
      "Arena",
      "One Day in the Life of Television",
      "The Story of Light Entertainment"
    ],
    "correctAnswer": "One Day in the Life of Television",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Behind the scenes",
      "Source: https://en.wikipedia.org/wiki/Lucky_Ladders"
    ]
  },
  {
    "id": "tv_53269",
    "question": "From which ITV region were the first series' Lucky Ladders contestants recruited?",
    "answers": [
      "Granada",
      "Central",
      "Scottish",
      "Anglia"
    ],
    "correctAnswer": "Anglia",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Series 1",
      "Source: https://www.ukgameshows.com/ukgs/Lucky_Ladders"
    ]
  },
  {
    "id": "tv_53270",
    "question": "What did defeated newcomers receive as a consolation gift on Lucky Ladders?",
    "answers": [
      "Watches",
      "Engraved pens",
      "Board games",
      "Key rings"
    ],
    "correctAnswer": "Watches",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Lucky Ladders",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Lucky Ladders",
      "Programme: Lucky Ladders",
      "ITV",
      "UK Game Show",
      "1988–1993",
      "Consolation prizes",
      "Source: https://en.wikipedia.org/wiki/Lucky_Ladders"
    ]
  }
];
if(questions.length!==21||new Set(questions.map(q=>q.id)).size!==questions.length||new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||questions.some((q,i)=>q.id!=='tv_'+(53250+i)||q.answers.length!==4||new Set(q.answers).size!==4||q.answers.filter(a=>a===q.correctAnswer).length!==1||!q.tags.includes('Programme: Lucky Ladders')||q.dailyEligible!==true))throw Error('Pack 669 validation failed');
module.exports=questions;
