// PuzzlePilot — Pack 676: Turnabout (Rob Curling)
// 39 supplementary questions; six originals retained in Pack 216.
// Eight series, rules, production, all series champions and champion special. Star Game exact answer time omitted due to source discrepancy. No verified programme-specific awards found. Original Packs 209–222 checked; complete episode outcomes and whole-bank semantic duplicate check outstanding. Bank connection unchanged.
'use strict';
const questions = [
  {
    "id": "tv_53453",
    "question": "Who devised the BBC word quiz Turnabout?",
    "answers": [
      "Clive Doig",
      "Bob Stewart",
      "David Young",
      "Glenn Hugill"
    ],
    "correctAnswer": "Clive Doig",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Creator",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53454",
    "question": "Who composed Turnabout's theme music?",
    "answers": [
      "Ed Welch",
      "Martin Cook",
      "Mike Moran",
      "Ronnie Hazlehurst"
    ],
    "correctAnswer": "Martin Cook",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Music",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53455",
    "question": "Which production company made Turnabout?",
    "answers": [
      "Action Time",
      "Celador",
      "Turnabout Productions",
      "12 Yard"
    ],
    "correctAnswer": "Turnabout Productions",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Production",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53456",
    "question": "How many series of Rob Curling's Turnabout were broadcast?",
    "answers": [
      "Six",
      "Seven",
      "Nine",
      "Eight"
    ],
    "correctAnswer": "Eight",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Series history",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53457",
    "question": "How many episodes of the BBC quiz Turnabout were broadcast in total?",
    "answers": [
      "239",
      "199",
      "219",
      "259"
    ],
    "correctAnswer": "239",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Broadcast history",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53458",
    "question": "Where were Turnabout's first three series recorded?",
    "answers": [
      "Maidstone Studios",
      "Ewart Studios in Wandsworth",
      "Granada Studios",
      "BBC Television Centre"
    ],
    "correctAnswer": "Ewart Studios in Wandsworth",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Studio",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  },
  {
    "id": "tv_53459",
    "question": "To which city did Turnabout production move in 1993?",
    "answers": [
      "Birmingham",
      "Bristol",
      "Manchester",
      "Leeds"
    ],
    "correctAnswer": "Manchester",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Studio",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  },
  {
    "id": "tv_53460",
    "question": "Which colour was replaced by green after Turnabout's first series?",
    "answers": [
      "Blue",
      "Red",
      "Grey",
      "Orange"
    ],
    "correctAnswer": "Orange",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Series 2",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53461",
    "question": "How many neutral grey spheres were on the board at the start of Turnabout?",
    "answers": [
      "Four",
      "Two",
      "Six",
      "Eight"
    ],
    "correctAnswer": "Four",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Sphere Game",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53462",
    "question": "Where were the neutral spheres positioned from the fifth series of Turnabout?",
    "answers": [
      "In the centre",
      "At the four corners",
      "Along the bottom row",
      "Along the top row"
    ],
    "correctAnswer": "At the four corners",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Series 5",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53463",
    "question": "How many consecutive letters did all correct word answers share in a Turnabout Sphere Game?",
    "answers": [
      "Two",
      "Four",
      "Three",
      "Five"
    ],
    "correctAnswer": "Three",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Sphere Game",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53464",
    "question": "What happened to the shared letter sequence when the Turnabout Timer ran out?",
    "answers": [
      "It was replaced with numbers",
      "It gained a fourth letter",
      "It was removed from all clues",
      "Its order was reversed"
    ],
    "correctAnswer": "Its order was reversed",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Sphere Game",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53465",
    "question": "How many points did a row of three matching spheres earn on Turnabout?",
    "answers": [
      "Five",
      "Two",
      "Ten",
      "Fifteen"
    ],
    "correctAnswer": "Five",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Scoring",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53466",
    "question": "How many points did a row of four matching spheres earn on Turnabout?",
    "answers": [
      "Five",
      "Ten",
      "Fifteen",
      "Twenty"
    ],
    "correctAnswer": "Ten",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Scoring",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53467",
    "question": "What was the penalty for an incorrect word answer from Turnabout's second series onwards?",
    "answers": [
      "One point",
      "Ten points",
      "Five points",
      "Fifteen points"
    ],
    "correctAnswer": "Five points",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Scoring",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53468",
    "question": "What decided a tie for the highest score on Turnabout?",
    "answers": [
      "The faster Star Game time",
      "The number of questions passed",
      "The oldest contestant",
      "The number of spheres of each tied player's colour"
    ],
    "correctAnswer": "The number of spheres of each tied player's colour",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Tie-break",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53469",
    "question": "How many words appeared on Turnabout's Star Game grid?",
    "answers": [
      "Sixteen",
      "Nine",
      "Twelve",
      "Twenty"
    ],
    "correctAnswer": "Sixteen",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Star Game",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53470",
    "question": "From which series did all three Turnabout players get to play the Star Game?",
    "answers": [
      "Series two",
      "Series three",
      "Series four",
      "Series five"
    ],
    "correctAnswer": "Series three",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Star Game",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53471",
    "question": "What was the maximum Star Game score with the full-grid bonus in the early Turnabout series?",
    "answers": [
      "80",
      "120",
      "100",
      "160"
    ],
    "correctAnswer": "100",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Star Game",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53472",
    "question": "Which game was added to Turnabout in its fourth series?",
    "answers": [
      "About Turn",
      "Palindrome Game",
      "Crossfire",
      "Picture Puzzle"
    ],
    "correctAnswer": "Picture Puzzle",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Series 4",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  },
  {
    "id": "tv_53473",
    "question": "Which type of word pattern formed the basis of a special sphere round in Turnabout's fifth series?",
    "answers": [
      "Palindromes",
      "Anagrams of names",
      "Rhyming couplets",
      "Homophones"
    ],
    "correctAnswer": "Palindromes",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Series 5",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53474",
    "question": "What was the missing-letter round introduced in Turnabout's sixth series called?",
    "answers": [
      "Star Turn",
      "About Turn",
      "Turn Again",
      "Word Switch"
    ],
    "correctAnswer": "About Turn",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Series 6",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  },
  {
    "id": "tv_53475",
    "question": "How many points did the third-placed contestant earn for a correct answer in Turnabout's About Turn round?",
    "answers": [
      "5",
      "10",
      "15",
      "20"
    ],
    "correctAnswer": "15",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "About Turn",
      "Source: https://en.wikipedia.org/wiki/Turnabout_(game_show)"
    ]
  },
  {
    "id": "tv_53476",
    "question": "What unusual water feature was added to Turnabout's studio set in its second series?",
    "answers": [
      "A waterfall",
      "A fountain shaped like a clock",
      "A swimming pool",
      "A pond"
    ],
    "correctAnswer": "A pond",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Studio set",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  },
  {
    "id": "tv_53477",
    "question": "Which quiz did Turnabout replace in BBC One's early afternoon spring schedules?",
    "answers": [
      "Going for Gold",
      "Pointless",
      "Wipeout",
      "Every Second Counts"
    ],
    "correctAnswer": "Going for Gold",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Schedule",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  },
  {
    "id": "tv_53478",
    "question": "Which soap's repeats displaced Turnabout from its usual time slot in 1993?",
    "answers": [
      "EastEnders",
      "Eldorado",
      "Neighbours",
      "Brookside"
    ],
    "correctAnswer": "Eldorado",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Schedule",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  },
  {
    "id": "tv_53479",
    "question": "Which channel repeated Turnabout's final series shortly after its BBC run?",
    "answers": [
      "Challenge",
      "Sky One",
      "UK Living",
      "UK Gold"
    ],
    "correctAnswer": "UK Living",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Repeats",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  },
  {
    "id": "tv_53480",
    "question": "What did the animated words in Turnabout's 1991 opening titles have in common?",
    "answers": [
      "They were all contestants' surnames",
      "They were all colours",
      "They were all numbers",
      "They used letters from the programme's name"
    ],
    "correctAnswer": "They used letters from the programme's name",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Opening titles",
      "Source: https://www.ravensbourne.ac.uk/bbc-motion-graphics-archive/turnabout-1991"
    ]
  },
  {
    "id": "tv_53481",
    "question": "Who was Turnabout's first series champion?",
    "answers": [
      "Alec Dalrymple",
      "Jackie McLeod",
      "Glenys Hopkins",
      "David Poulter"
    ],
    "correctAnswer": "Alec Dalrymple",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Series 1 champion",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  },
  {
    "id": "tv_53482",
    "question": "Who won the 1991 series of Turnabout?",
    "answers": [
      "Glenys Hopkins",
      "Jackie McLeod",
      "Alec Dalrymple",
      "David Webb"
    ],
    "correctAnswer": "Jackie McLeod",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Series 2 champion",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  },
  {
    "id": "tv_53483",
    "question": "Who was crowned Turnabout champion in 1992?",
    "answers": [
      "Wendy Rosser",
      "Roger Prebble",
      "Glenys Hopkins",
      "Mike Billson"
    ],
    "correctAnswer": "Glenys Hopkins",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Series 3 champion",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  },
  {
    "id": "tv_53484",
    "question": "Who won the 1993 series of Turnabout?",
    "answers": [
      "David Webb",
      "Mike Billson",
      "Alec Dalrymple",
      "David Poulter"
    ],
    "correctAnswer": "David Poulter",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Series 4 champion",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  },
  {
    "id": "tv_53485",
    "question": "Who was Turnabout's 1994 series champion?",
    "answers": [
      "David Webb",
      "David Poulter",
      "Roger Prebble",
      "Jackie McLeod"
    ],
    "correctAnswer": "David Webb",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Series 5 champion",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  },
  {
    "id": "tv_53486",
    "question": "Who won the 1995 series of Turnabout?",
    "answers": [
      "David Webb",
      "Mike Billson",
      "Roger Prebble",
      "Alec Dalrymple"
    ],
    "correctAnswer": "Mike Billson",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Series 6 champion",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  },
  {
    "id": "tv_53487",
    "question": "Who won the spring 1996 series of Turnabout?",
    "answers": [
      "Mike Billson",
      "David Poulter",
      "Roger Prebble",
      "David Webb"
    ],
    "correctAnswer": "Roger Prebble",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Series 7 champion",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  },
  {
    "id": "tv_53488",
    "question": "Who won the final series of Turnabout in autumn 1996?",
    "answers": [
      "Jackie McLeod",
      "Glenys Hopkins",
      "Roger Prebble",
      "Wendy Rosser"
    ],
    "correctAnswer": "Wendy Rosser",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Series 8 champion",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  },
  {
    "id": "tv_53489",
    "question": "Who won the 1992 Turnabout special featuring the first three series champions?",
    "answers": [
      "Jackie McLeod",
      "Alec Dalrymple",
      "Glenys Hopkins",
      "David Webb"
    ],
    "correctAnswer": "Jackie McLeod",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Champion of Champions",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  },
  {
    "id": "tv_53490",
    "question": "Where did 1991 Turnabout champion Jackie McLeod win a holiday to?",
    "answers": [
      "Canada",
      "Australia",
      "Japan",
      "New Zealand"
    ],
    "correctAnswer": "Australia",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Series 2 prize",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  },
  {
    "id": "tv_53491",
    "question": "Which reference work did Glenys Hopkins win as Turnabout champion in 1992?",
    "answers": [
      "Oxford English Dictionary",
      "Chambers Dictionary",
      "Encyclopaedia Britannica",
      "Guinness Book of Records"
    ],
    "correctAnswer": "Encyclopaedia Britannica",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Turnabout",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Turnabout",
      "Programme: Turnabout",
      "BBC One",
      "UK Game Show",
      "1990–1996",
      "Series 3 prize",
      "Source: https://www.ukgameshows.com/ukgs/Turnabout_(1)"
    ]
  }
];
if(questions.length!==39||new Set(questions.map(q=>q.id)).size!==questions.length||new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||questions.some((q,i)=>q.id!=='tv_'+(53453+i)||q.answers.length!==4||new Set(q.answers).size!==4||q.answers.filter(a=>a===q.correctAnswer).length!==1||!q.tags.includes('Programme: Turnabout')||q.dailyEligible!==true))throw Error('Pack 676 validation failed');
module.exports=questions;
