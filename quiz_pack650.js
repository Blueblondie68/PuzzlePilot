// PuzzlePilot — Pack 650: The Code (BBC quiz)
// 29 supplementary questions; seven original questions retained in Packs 214 and 218.
// Both series, production, rules, jackpot records and viewer poll recognition. No major industry award verified. Not all individual winners identified; full-bank semantic duplicate scan outstanding. Original Packs 209–222 checked. Bank connection unchanged.
'use strict';
const questions = [
  {
    "id": "tv_52671",
    "question": "Which channel originally broadcast Matt Allwright's quiz The Code?",
    "answers": [
      "BBC One",
      "BBC Two",
      "ITV",
      "Channel 4"
    ],
    "correctAnswer": "BBC One",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Broadcast",
      "Source: https://www.ukgameshows.com/ukgs/The_Code"
    ]
  },
  {
    "id": "tv_52672",
    "question": "Which production company made the first series of The Code?",
    "answers": [
      "Primal Media",
      "Gogglebox Entertainment",
      "12 Yard",
      "Potato"
    ],
    "correctAnswer": "Gogglebox Entertainment",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Series 1",
      "Production",
      "Source: https://www.ukgameshows.com/ukgs/The_Code"
    ]
  },
  {
    "id": "tv_52673",
    "question": "Which company produced the second series of The Code?",
    "answers": [
      "Gogglebox Entertainment",
      "Celador",
      "Primal Media",
      "Endemol"
    ],
    "correctAnswer": "Primal Media",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Series 2",
      "Production",
      "Source: https://www.ukgameshows.com/ukgs/The_Code"
    ]
  },
  {
    "id": "tv_52674",
    "question": "At which studio complex were both series of The Code filmed?",
    "answers": [
      "Fountain Studios",
      "The London Studios",
      "Pinewood Studios",
      "Dock10"
    ],
    "correctAnswer": "Dock10",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Production",
      "Salford",
      "Source: https://www.ukgameshows.com/ukgs/The_Code"
    ]
  },
  {
    "id": "tv_52675",
    "question": "Whose format provided the basis for the British quiz The Code?",
    "answers": [
      "Mark van Berkel",
      "David Briggs",
      "Glenn Hugill",
      "Mark Espley"
    ],
    "correctAnswer": "Mark van Berkel",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Creator",
      "Source: https://www.ukgameshows.com/ukgs/The_Code"
    ]
  },
  {
    "id": "tv_52676",
    "question": "Who composed the music for The Code?",
    "answers": [
      "Paul Farrer",
      "Nick Foster",
      "Marc Sylvan",
      "David Lowe"
    ],
    "correctAnswer": "Nick Foster",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Theme music",
      "Source: https://www.ukgameshows.com/ukgs/The_Code"
    ]
  },
  {
    "id": "tv_52677",
    "question": "How many series of Matt Allwright's The Code were broadcast?",
    "answers": [
      "One",
      "Three",
      "Two",
      "Four"
    ],
    "correctAnswer": "Two",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Series count",
      "Source: https://en.wikipedia.org/wiki/The_Code_(game_show)"
    ]
  },
  {
    "id": "tv_52678",
    "question": "How many episodes were made for each series of The Code?",
    "answers": [
      "20",
      "30",
      "40",
      "25"
    ],
    "correctAnswer": "25",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Episode count",
      "Source: https://www.ukgameshows.com/ukgs/The_Code"
    ]
  },
  {
    "id": "tv_52679",
    "question": "What was the starting jackpot on The Code?",
    "answers": [
      "£3,000",
      "£1,000",
      "£5,000",
      "£10,000"
    ],
    "correctAnswer": "£3,000",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Jackpot",
      "Source: https://en.wikipedia.org/wiki/The_Code_(game_show)"
    ]
  },
  {
    "id": "tv_52680",
    "question": "How much was added to the jackpot each time a team failed to win on The Code?",
    "answers": [
      "£250",
      "£500",
      "£1,000",
      "£2,000"
    ],
    "correctAnswer": "£500",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Rollover",
      "Source: https://en.wikipedia.org/wiki/The_Code_(game_show)"
    ]
  },
  {
    "id": "tv_52681",
    "question": "What was the largest team size permitted on The Code?",
    "answers": [
      "Two",
      "Four",
      "Three",
      "Five"
    ],
    "correctAnswer": "Three",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Team size",
      "Source: https://en.wikipedia.org/wiki/The_Code_(game_show)"
    ]
  },
  {
    "id": "tv_52682",
    "question": "Could a digit appear more than once in the safe's combination on The Code?",
    "answers": [
      "Yes, but only zero",
      "Yes, but only the first digit",
      "Yes, without restrictions",
      "No, the digits were all different"
    ],
    "correctAnswer": "No, the digits were all different",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Combination rules",
      "Source: https://en.wikipedia.org/wiki/The_Code_(game_show)"
    ]
  },
  {
    "id": "tv_52683",
    "question": "How many possible answers were displayed for each question challenge on The Code?",
    "answers": [
      "Three",
      "Two",
      "Four",
      "Five"
    ],
    "correctAnswer": "Three",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Gameplay",
      "Source: https://en.wikipedia.org/wiki/The_Code_(game_show)"
    ]
  },
  {
    "id": "tv_52684",
    "question": "In the first stage of The Code, how many question-and-answer pairs could contestants examine before choosing?",
    "answers": [
      "Only one",
      "All three",
      "Only two",
      "None"
    ],
    "correctAnswer": "All three",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Stage one",
      "Source: https://en.wikipedia.org/wiki/The_Code_(game_show)"
    ]
  },
  {
    "id": "tv_52685",
    "question": "In the first series of The Code, what did players have to do after viewing two questions in stage two to reveal the remaining question?",
    "answers": [
      "Guess a digit",
      "Ask the expert for a clue",
      "Reject an incorrect pairing",
      "Answer an extra question"
    ],
    "correctAnswer": "Reject an incorrect pairing",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Series 1",
      "Stage two",
      "Source: https://en.wikipedia.org/wiki/The_Code_(game_show)"
    ]
  },
  {
    "id": "tv_52686",
    "question": "What changed in stage two of The Code for its second series?",
    "answers": [
      "All three questions were shown immediately",
      "The team could buy an extra question",
      "A wrong answer no longer ended the game",
      "Players had to choose an answer without seeing the third question"
    ],
    "correctAnswer": "Players had to choose an answer without seeing the third question",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Series 2",
      "Stage two",
      "Source: https://en.wikipedia.org/wiki/The_Code_(game_show)"
    ]
  },
  {
    "id": "tv_52687",
    "question": "In the final stage of The Code, when could contestants inspect a second question?",
    "answers": [
      "After correctly ruling out the first pairing",
      "After making an incorrect guess",
      "After selecting a second digit",
      "After asking for a lifeline"
    ],
    "correctAnswer": "After correctly ruling out the first pairing",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Stage three",
      "Source: https://en.wikipedia.org/wiki/The_Code_(game_show)"
    ]
  },
  {
    "id": "tv_52688",
    "question": "What did contestants earn by choosing the correct question-and-answer pairing on The Code?",
    "answers": [
      "A guaranteed cash bonus",
      "An attempt at a digit",
      "An extra contestant",
      "A free answer in the next game"
    ],
    "correctAnswer": "An attempt at a digit",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Gameplay",
      "Source: https://en.wikipedia.org/wiki/The_Code_(game_show)"
    ]
  },
  {
    "id": "tv_52689",
    "question": "What happened if a team's game was unfinished when an episode of The Code ended?",
    "answers": [
      "Their jackpot was halved",
      "They automatically won the money",
      "They returned in the next episode",
      "They were replaced immediately"
    ],
    "correctAnswer": "They returned in the next episode",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Returning contestants",
      "Source: https://www.ukgameshows.com/ukgs/The_Code"
    ]
  },
  {
    "id": "tv_52690",
    "question": "What were the informal points awarded by the resident expert in the second series of The Code called?",
    "answers": [
      "Matt points",
      "Code credits",
      "Safe points",
      "Lesley points"
    ],
    "correctAnswer": "Lesley points",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Series 2",
      "Lesley-Anne Brewis",
      "Source: https://en.wikipedia.org/wiki/The_Code_(game_show)"
    ]
  },
  {
    "id": "tv_52691",
    "question": "What did Lesley points contribute towards the cash jackpot on The Code?",
    "answers": [
      "Nothing",
      "£100 each",
      "£500 each",
      "£1,000 each"
    ],
    "correctAnswer": "Nothing",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Series 2",
      "Lesley points",
      "Source: https://en.wikipedia.org/wiki/The_Code_(game_show)"
    ]
  },
  {
    "id": "tv_52692",
    "question": "Which quiz-writing company was founded by The Code's resident expert Lesley-Anne Brewis?",
    "answers": [
      "Quiz Britain",
      "QuizQuizQuiz",
      "Quiz Nation",
      "Quiz Masters"
    ],
    "correctAnswer": "QuizQuizQuiz",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Resident expert",
      "Source: https://www.theguardian.com/tv-and-radio/2017/dec/24/answer-me-this-quiz-the-gameshow-hosts-nick-hewer-victoria-coren-mitchell-jeremy-vine"
    ]
  },
  {
    "id": "tv_52693",
    "question": "How many jackpot wins were reported in the first series finale of The Code?",
    "answers": [
      "Four",
      "Six",
      "Seven",
      "Nine"
    ],
    "correctAnswer": "Seven",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Series 1",
      "Results",
      "Source: https://subsaga.com/bbc/entertainment/the-code/episode-25.html"
    ]
  },
  {
    "id": "tv_52694",
    "question": "What was the unclaimed jackpot at the end of the first series of The Code?",
    "answers": [
      "£8,500",
      "£10,000",
      "£15,500",
      "£9,500"
    ],
    "correctAnswer": "£9,500",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Series 1",
      "Final episode",
      "Source: https://subsaga.com/bbc/entertainment/the-code/episode-25.html"
    ]
  },
  {
    "id": "tv_52695",
    "question": "How many jackpot wins were reported in the second series finale of The Code?",
    "answers": [
      "Six",
      "Four",
      "Seven",
      "Nine"
    ],
    "correctAnswer": "Six",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Series 2",
      "Results",
      "Source: https://subsaga.com/bbc/entertainment/the-code/series-2/episode-25.html"
    ]
  },
  {
    "id": "tv_52696",
    "question": "What was the largest jackpot won during the run of The Code?",
    "answers": [
      "£9,500",
      "£15,500",
      "£12,500",
      "£20,000"
    ],
    "correctAnswer": "£15,500",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Series 2",
      "Record",
      "Source: https://subsaga.com/bbc/entertainment/the-code/series-2/episode-25.html"
    ]
  },
  {
    "id": "tv_52697",
    "question": "Which solo player from Westhoughton won the record jackpot on The Code?",
    "answers": [
      "Cornelius",
      "Nathan",
      "Julian",
      "Adrian"
    ],
    "correctAnswer": "Julian",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Series 2",
      "Episode 7",
      "Winner",
      "Source: https://subsaga.com/bbc/entertainment/the-code/series-2/episode-7.html"
    ]
  },
  {
    "id": "tv_52698",
    "question": "What was the occupation of returning solo contestant Cornelius in the final episode of The Code?",
    "answers": [
      "Librarian",
      "Accountant",
      "Engineer",
      "Maths teacher"
    ],
    "correctAnswer": "Maths teacher",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Series 2",
      "Episode 25",
      "Source: https://subsaga.com/bbc/entertainment/the-code/series-2/episode-25.html"
    ]
  },
  {
    "id": "tv_52699",
    "question": "Which quiz shared second place with The Code in the 2016 UKGameshows new-show poll?",
    "answers": [
      "Tenable",
      "Cash Trapped",
      "1000 Heartbeats",
      "The Edge"
    ],
    "correctAnswer": "Tenable",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Code",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Code",
      "Programme: The Code",
      "BBC One",
      "UK Game Show",
      "Matt Allwright",
      "2016–2017",
      "Recognition",
      "2016",
      "Source: https://www.ukgameshows.com/ukgs/Poll_of_the_Year_2016"
    ]
  }
];
if(questions.length!==29||new Set(questions.map(q=>q.id)).size!==questions.length||new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||questions.some((q,i)=>q.id!=='tv_'+(52671+i)||q.answers.length!==4||new Set(q.answers).size!==4||q.answers.filter(a=>a===q.correctAnswer).length!==1||!q.tags.includes('Programme: The Code')||q.dailyEligible!==true))throw Error('Pack 650 validation failed');
module.exports=questions;
