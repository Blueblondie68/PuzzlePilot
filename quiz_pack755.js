// PuzzlePilot — Pack 755: Big Brain Game (Vorderman's Big Brain Game)
// 18 additions; six existing in Pack 221. Regular gameplay, production, sponsorship, supplier promotion and documented guests/challenges. Sources differ between launch/promotion and regular gameplay: questions explicitly distinguish these where needed. Complete episode guide, individual winners, music credits and programme award nominations not located. Packs 1–20 and 209–222 checked for title references; not full-bank semantic scan. Live bank unchanged.
'use strict';
const questions = [
  {
    "id": "tv_57149",
    "question": "Which production company made Vorderman's Big Brain Game for Sky One?",
    "answers": [
      "Hat Trick Productions",
      "Hanrahan Media",
      "Lion Television",
      "Talkback Thames"
    ],
    "correctAnswer": "Hanrahan Media",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Big Brain Game",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Big Brain Game",
      "Programme: Big Brain Game",
      "Vorderman's Big Brain Game",
      "Sky One",
      "Production",
      "Source: https://www.ukgameshows.com/ukgs/Big_Brain_Game"
    ]
  },
  {
    "id": "tv_57150",
    "question": "Which crystal jewellery company sponsored Big Brain Game?",
    "answers": [
      "Pandora",
      "Tiffany & Co.",
      "Swarovski",
      "Cartier"
    ],
    "correctAnswer": "Swarovski",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Big Brain Game",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Big Brain Game",
      "Programme: Big Brain Game",
      "Vorderman's Big Brain Game",
      "Sky One",
      "Sponsorship",
      "Source: https://www.ukgameshows.com/ukgs/Big_Brain_Game"
    ]
  },
  {
    "id": "tv_57151",
    "question": "How many rounds were played in the team stage of the regular Big Brain Game format?",
    "answers": [
      "Three",
      "Six",
      "Seven",
      "Five"
    ],
    "correctAnswer": "Five",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Big Brain Game",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Big Brain Game",
      "Programme: Big Brain Game",
      "Vorderman's Big Brain Game",
      "Sky One",
      "Format",
      "Source: https://www.ukgameshows.com/ukgs/Big_Brain_Game"
    ]
  },
  {
    "id": "tv_57152",
    "question": "Which mental skill was usually tested by a physical task on Big Brain Game?",
    "answers": [
      "Spatial awareness",
      "Verbal fluency",
      "Memory",
      "Mental arithmetic"
    ],
    "correctAnswer": "Spatial awareness",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Big Brain Game",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Big Brain Game",
      "Programme: Big Brain Game",
      "Vorderman's Big Brain Game",
      "Sky One",
      "Rounds",
      "Spatial Awareness",
      "Source: https://www.ukgameshows.com/ukgs/Big_Brain_Game"
    ]
  },
  {
    "id": "tv_57153",
    "question": "Which set lists the four mental skills tested in the regular Big Brain Game format?",
    "answers": [
      "History, geography, science and sport",
      "Creativity, logic, spatial awareness and memory",
      "Arithmetic, spelling, music and art",
      "Observation, speed, general knowledge and guessing"
    ],
    "correctAnswer": "Creativity, logic, spatial awareness and memory",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Big Brain Game",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Big Brain Game",
      "Programme: Big Brain Game",
      "Vorderman's Big Brain Game",
      "Sky One",
      "Format",
      "Mental Skills",
      "Source: https://www.ukgameshows.com/ukgs/Big_Brain_Game"
    ]
  },
  {
    "id": "tv_57154",
    "question": "How many ordinary members of the public competed in the cash final of Big Brain Game?",
    "answers": [
      "One",
      "Three",
      "Two",
      "Four"
    ],
    "correctAnswer": "Two",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Big Brain Game",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Big Brain Game",
      "Programme: Big Brain Game",
      "Vorderman's Big Brain Game",
      "Sky One",
      "Final",
      "Source: https://www.ukgameshows.com/ukgs/Big_Brain_Game"
    ]
  },
  {
    "id": "tv_57155",
    "question": "How much thinking time did the leading contestant have in the cash final of Big Brain Game?",
    "answers": [
      "30 seconds",
      "Two minutes",
      "Five minutes",
      "One minute"
    ],
    "correctAnswer": "One minute",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Big Brain Game",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Big Brain Game",
      "Programme: Big Brain Game",
      "Vorderman's Big Brain Game",
      "Sky One",
      "Final",
      "Timing",
      "Source: https://www.ukgameshows.com/ukgs/Big_Brain_Game"
    ]
  },
  {
    "id": "tv_57156",
    "question": "What happened to the final-round countdown on Big Brain Game while Carol Vorderman was reading a question?",
    "answers": [
      "It stopped",
      "It continued as normal",
      "It ran twice as fast",
      "It reset to the full minute"
    ],
    "correctAnswer": "It stopped",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Big Brain Game",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Big Brain Game",
      "Programme: Big Brain Game",
      "Vorderman's Big Brain Game",
      "Sky One",
      "Final",
      "Timing",
      "Source: https://www.ukgameshows.com/ukgs/Big_Brain_Game"
    ]
  },
  {
    "id": "tv_57157",
    "question": "What could the leading contestant do if they could not immediately answer a final question on Big Brain Game?",
    "answers": [
      "Replace it with a new question",
      "Pass and return to it later",
      "Ask their celebrity captain",
      "Take a guaranteed half-jackpot"
    ],
    "correctAnswer": "Pass and return to it later",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Big Brain Game",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Big Brain Game",
      "Programme: Big Brain Game",
      "Vorderman's Big Brain Game",
      "Sky One",
      "Final",
      "Rules",
      "Source: https://www.ukgameshows.com/ukgs/Big_Brain_Game"
    ]
  },
  {
    "id": "tv_57158",
    "question": "How much did it cost the leading finalist on Big Brain Game to buy an answer from their opponent?",
    "answers": [
      "£500",
      "£1,000",
      "£2,500",
      "£5,000"
    ],
    "correctAnswer": "£2,500",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Big Brain Game",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Big Brain Game",
      "Programme: Big Brain Game",
      "Vorderman's Big Brain Game",
      "Sky One",
      "Final",
      "Prize Money",
      "Source: https://www.ukgameshows.com/ukgs/Big_Brain_Game"
    ]
  },
  {
    "id": "tv_57159",
    "question": "What happened to both finalists' potential winnings on Big Brain Game if a final answer was wrong?",
    "answers": [
      "The opponent won the full jackpot",
      "Both kept half the jackpot",
      "The leading player received a consolation prize",
      "Both left without any prize money"
    ],
    "correctAnswer": "Both left without any prize money",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Big Brain Game",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Big Brain Game",
      "Programme: Big Brain Game",
      "Vorderman's Big Brain Game",
      "Sky One",
      "Final",
      "Prize Money",
      "Source: https://www.ukgameshows.com/ukgs/Big_Brain_Game"
    ]
  },
  {
    "id": "tv_57160",
    "question": "Which number puzzle was incorporated into the format promoted for Vorderman's Big Brain Game by its puzzle supplier?",
    "answers": [
      "Sudoku",
      "Kakuro",
      "KenKen",
      "Nonogram"
    ],
    "correctAnswer": "Sudoku",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Big Brain Game",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Big Brain Game",
      "Programme: Big Brain Game",
      "Vorderman's Big Brain Game",
      "Sky One",
      "Format",
      "Sudoku",
      "Source: https://www.sudokusyndication.com/bigbraingame/"
    ]
  },
  {
    "id": "tv_57161",
    "question": "Which island was the destination of the holiday advertised in the puzzle supplier's Big Brain Game competition?",
    "answers": [
      "Malta",
      "Mauritius",
      "Barbados",
      "Madeira"
    ],
    "correctAnswer": "Mauritius",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Big Brain Game",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Big Brain Game",
      "Programme: Big Brain Game",
      "Vorderman's Big Brain Game",
      "Sky One",
      "Promotion",
      "Source: https://www.sudokusyndication.com/bigbraingame/"
    ]
  },
  {
    "id": "tv_57162",
    "question": "Which former cricketer appeared in the launch edition of Vorderman's Big Brain Game alongside Lisa Rogers?",
    "answers": [
      "Phil Tufnell",
      "Michael Vaughan",
      "Darren Gough",
      "Andrew Flintoff"
    ],
    "correctAnswer": "Darren Gough",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Big Brain Game",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Big Brain Game",
      "Programme: Big Brain Game",
      "Vorderman's Big Brain Game",
      "Sky One",
      "2005",
      "Launch",
      "Darren Gough",
      "Lisa Rogers",
      "Source: https://ukgameshows.com/ukgs/Weaver%27s_Week_2006-01-08"
    ]
  },
  {
    "id": "tv_57163",
    "question": "Which comedian was among the guests in the launch edition of Vorderman's Big Brain Game featuring Darren Gough and Lisa Rogers?",
    "answers": [
      "Dave Gorman",
      "Russell Howard",
      "David Mitchell",
      "Danny Wallace"
    ],
    "correctAnswer": "Danny Wallace",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Big Brain Game",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Big Brain Game",
      "Programme: Big Brain Game",
      "Vorderman's Big Brain Game",
      "Sky One",
      "2005",
      "Launch",
      "Danny Wallace",
      "Source: https://ukgameshows.com/ukgs/Weaver%27s_Week_2006-01-08"
    ]
  },
  {
    "id": "tv_57164",
    "question": "Which comedian described taking part on Sara Cox's team with a contestant called Ajay on Vorderman's Big Brain Game?",
    "answers": [
      "Dave Gorman",
      "Danny Wallace",
      "Richard Herring",
      "Mark Watson"
    ],
    "correctAnswer": "Dave Gorman",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Big Brain Game",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Big Brain Game",
      "Programme: Big Brain Game",
      "Vorderman's Big Brain Game",
      "Sky One",
      "2006",
      "Guests",
      "Dave Gorman",
      "Sara Cox",
      "Source: https://gormano.blogspot.com/2006/03/"
    ]
  },
  {
    "id": "tv_57165",
    "question": "Which television presenter was on Rufus Hound's opposing team when Dave Gorman competed on Vorderman's Big Brain Game?",
    "answers": [
      "Melanie Sykes",
      "Lisa Rogers",
      "Kirsty Gallacher",
      "Konnie Huq"
    ],
    "correctAnswer": "Lisa Rogers",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Big Brain Game",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Big Brain Game",
      "Programme: Big Brain Game",
      "Vorderman's Big Brain Game",
      "Sky One",
      "2006",
      "Guests",
      "Lisa Rogers",
      "Rufus Hound",
      "Source: https://gormano.blogspot.com/2006/03/"
    ]
  },
  {
    "id": "tv_57166",
    "question": "What did Dave Gorman recall having to dodge while wearing a boiler suit on Vorderman's Big Brain Game?",
    "answers": [
      "Swinging pendulums",
      "Water jets",
      "Laser beams",
      "Rolling barrels"
    ],
    "correctAnswer": "Laser beams",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Big Brain Game",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Big Brain Game",
      "Programme: Big Brain Game",
      "Vorderman's Big Brain Game",
      "Sky One",
      "2006",
      "Physical Challenge",
      "Dave Gorman",
      "Source: https://gormano.blogspot.com/2006/03/"
    ]
  }
];
if(questions.length!==18||new Set(questions.map(q=>q.id)).size!==questions.length||new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||questions.some((q,i)=>q.id!=='tv_'+(57149+i)||q.answers.length!==4||new Set(q.answers).size!==4||q.answers.filter(a=>a===q.correctAnswer).length!==1||!q.tags.includes('Programme: '+q.topic)||q.dailyEligible!==true))throw Error('Pack 755 validation failed');
module.exports=questions;
