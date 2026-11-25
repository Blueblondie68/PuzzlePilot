// PuzzlePilot — Pack 692: Bank Balance and Bank Balance for Red Nose Day
// 32 supplementary questions; six originals retained in Pack 217.
// Nine regular episodes plus charity special, production, scoring, credits, selected episode participants, technical award and audience poll. Extra Time duration differs by source and was omitted. Detailed episode outcomes and celebrity charity amount not verified; full-bank semantic duplicate check outstanding. Original Packs 209–222 and audit commit search checked. Bank connection unchanged.
'use strict';
const questions = [
  {
    "id": "tv_53945",
    "question": "Which television channel originally broadcast Gordon Ramsay's Bank Balance?",
    "answers": [
      "BBC One",
      "BBC Two",
      "ITV",
      "Channel 4"
    ],
    "correctAnswer": "BBC One",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Broadcast",
      "Source: https://ukgameshows.com/ukgs/Bank_Balance"
    ]
  },
  {
    "id": "tv_53946",
    "question": "Which production company made Bank Balance?",
    "answers": [
      "12 Yard",
      "Studio Ramsay",
      "Potato",
      "Celador"
    ],
    "correctAnswer": "Studio Ramsay",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Production",
      "Source: https://ukgameshows.com/ukgs/Bank_Balance"
    ]
  },
  {
    "id": "tv_53947",
    "question": "Who composed the music for Gordon Ramsay's Bank Balance?",
    "answers": [
      "Marc Sylvan",
      "Will Slater",
      "Paul Farrer",
      "Ed Welch"
    ],
    "correctAnswer": "Paul Farrer",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Music",
      "Source: https://www.thecomposerworks.com/projects/bank-balance-forthcoming/"
    ]
  },
  {
    "id": "tv_53948",
    "question": "Which four people created the format for Gordon Ramsay's Bank Balance?",
    "answers": [
      "David Young, Clive Doig, Bob Stewart and Ed Welch",
      "Glenn Hugill, Richard Osman, Paul Farrer and Will Slater",
      "Kieran Doherty, Matthew Worthy, Mark Goodson and Bill Todman",
      "Fernando De Jesus, Tom Day, Sam Smaïl and Bronson Payne"
    ],
    "correctAnswer": "Fernando De Jesus, Tom Day, Sam Smaïl and Bronson Payne",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Creators",
      "Source: https://en.wikipedia.org/wiki/Gordon_Ramsay%27s_Bank_Balance"
    ]
  },
  {
    "id": "tv_53949",
    "question": "How many regular episodes of Bank Balance aired before the charity special?",
    "answers": [
      "Nine",
      "Six",
      "Ten",
      "Twelve"
    ],
    "correctAnswer": "Nine",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Series history",
      "Source: https://ukgameshows.com/ukgs/Bank_Balance"
    ]
  },
  {
    "id": "tv_53950",
    "question": "How many series of Bank Balance were broadcast before the BBC cancelled it?",
    "answers": [
      "Two",
      "One",
      "Three",
      "Four"
    ],
    "correctAnswer": "One",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Series history",
      "Source: https://www.the-independent.com/arts-entertainment/tv/news/gordon-ramsay-bank-balance-cancelled-b1911094.html"
    ]
  },
  {
    "id": "tv_53951",
    "question": "How many arms did the balancing apparatus on Bank Balance have?",
    "answers": [
      "Two",
      "Three",
      "Four",
      "Six"
    ],
    "correctAnswer": "Four",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Game equipment",
      "Source: https://ukgameshows.com/ukgs/Bank_Balance"
    ]
  },
  {
    "id": "tv_53952",
    "question": "How many categories were available at the start of a game of Bank Balance?",
    "answers": [
      "Six",
      "Eight",
      "Ten",
      "12"
    ],
    "correctAnswer": "12",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Categories",
      "Source: https://ukgameshows.com/ukgs/Bank_Balance"
    ]
  },
  {
    "id": "tv_53953",
    "question": "How was the next zone of the Bank Balance board initially selected?",
    "answers": [
      "At random",
      "By the studio audience",
      "By a qualifying quiz",
      "By the previous contestants"
    ],
    "correctAnswer": "At random",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Game rules",
      "Source: https://ukgameshows.com/ukgs/Bank_Balance"
    ]
  },
  {
    "id": "tv_53954",
    "question": "How long were contestants normally allowed to answer and place their bars on Bank Balance?",
    "answers": [
      "30 seconds",
      "One minute",
      "90 seconds",
      "Two minutes"
    ],
    "correctAnswer": "One minute",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Time limit",
      "Source: https://ukgameshows.com/ukgs/Bank_Balance"
    ]
  },
  {
    "id": "tv_53955",
    "question": "How much was a successful stack of three bars worth on Bank Balance?",
    "answers": [
      "£3,000",
      "£6,000",
      "£9,000",
      "£12,000"
    ],
    "correctAnswer": "£9,000",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Prizes",
      "Source: https://ukgameshows.com/ukgs/Bank_Balance"
    ]
  },
  {
    "id": "tv_53956",
    "question": "How much was a successful stack of four bars worth on Bank Balance?",
    "answers": [
      "£8,000",
      "£12,000",
      "£20,000",
      "£16,000"
    ],
    "correctAnswer": "£16,000",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Prizes",
      "Source: https://ukgameshows.com/ukgs/Bank_Balance"
    ]
  },
  {
    "id": "tv_53957",
    "question": "How much was the five-bar pyramid worth on Bank Balance?",
    "answers": [
      "£25,000",
      "£15,000",
      "£20,000",
      "£50,000"
    ],
    "correctAnswer": "£25,000",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Prizes",
      "Source: https://ukgameshows.com/ukgs/Bank_Balance"
    ]
  },
  {
    "id": "tv_53958",
    "question": "Which stack sizes had no monetary value on Bank Balance?",
    "answers": [
      "Two or three bars",
      "One or two bars",
      "Three or four bars",
      "Four or five bars"
    ],
    "correctAnswer": "One or two bars",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Prizes",
      "Source: https://ukgameshows.com/ukgs/Bank_Balance"
    ]
  },
  {
    "id": "tv_53959",
    "question": "What extra object had to be placed on a failed stack on Bank Balance?",
    "answers": [
      "A second playing board",
      "A stopwatch",
      "A penalty bar",
      "A marker flag"
    ],
    "correctAnswer": "A penalty bar",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Penalty",
      "Source: https://en.wikipedia.org/wiki/Gordon_Ramsay%27s_Bank_Balance"
    ]
  },
  {
    "id": "tv_53960",
    "question": "What name was given to the lifelines on Bank Balance?",
    "answers": [
      "Jokers",
      "Passes",
      "Tokens",
      "Credits"
    ],
    "correctAnswer": "Credits",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Lifelines",
      "Source: https://en.wikipedia.org/wiki/Gordon_Ramsay%27s_Bank_Balance"
    ]
  },
  {
    "id": "tv_53961",
    "question": "Which Bank Balance credit became available after three stacks had been placed?",
    "answers": [
      "Pick Again",
      "Bank a Stack",
      "Extra Time",
      "Double Money"
    ],
    "correctAnswer": "Pick Again",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Lifelines",
      "Source: https://en.wikipedia.org/wiki/Gordon_Ramsay%27s_Bank_Balance"
    ]
  },
  {
    "id": "tv_53962",
    "question": "Which Bank Balance credit was unlocked after six stacks had been placed?",
    "answers": [
      "Pick Again",
      "Bank a Stack",
      "Extra Time",
      "Swap Players"
    ],
    "correctAnswer": "Bank a Stack",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Lifelines",
      "Source: https://en.wikipedia.org/wiki/Gordon_Ramsay%27s_Bank_Balance"
    ]
  },
  {
    "id": "tv_53963",
    "question": "Which Bank Balance credit became available after nine stacks had been placed?",
    "answers": [
      "Pick Again",
      "Bank a Stack",
      "Extra Time",
      "Double Money"
    ],
    "correctAnswer": "Extra Time",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Lifelines",
      "Source: https://en.wikipedia.org/wiki/Gordon_Ramsay%27s_Bank_Balance"
    ]
  },
  {
    "id": "tv_53964",
    "question": "How many stacks did contestants need to place successfully to finish the main game of Bank Balance?",
    "answers": [
      "Eight",
      "Ten",
      "16",
      "12"
    ],
    "correctAnswer": "12",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Final",
      "Source: https://en.wikipedia.org/wiki/Gordon_Ramsay%27s_Bank_Balance"
    ]
  },
  {
    "id": "tv_53965",
    "question": "How many teams won the full jackpot during the broadcast run of Bank Balance?",
    "answers": [
      "None",
      "One",
      "Two",
      "Three"
    ],
    "correctAnswer": "None",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Results",
      "Source: https://ukgameshows.com/ukgs/Bank_Balance"
    ]
  },
  {
    "id": "tv_53966",
    "question": "What type of audience supplied reactions for Bank Balance during pandemic-era production?",
    "answers": [
      "A school assembly",
      "An online audience",
      "A live theatre audience",
      "The contestants' families in the studio"
    ],
    "correctAnswer": "An online audience",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Production",
      "Source: https://ukgameshows.com/ukgs/Bank_Balance"
    ]
  },
  {
    "id": "tv_53967",
    "question": "Which category did Bank Balance win at the 2021 Broadcast Tech Innovation Awards?",
    "answers": [
      "Best Drama Editing",
      "Best Sports Graphics",
      "Technical Achievement (Entertainment)",
      "Best Documentary Sound"
    ],
    "correctAnswer": "Technical Achievement (Entertainment)",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Awards",
      "Source: https://www.broadcastnow.co.uk/tech/broadcast-tech-innovation-awards-2021-the-winners/5165653.article"
    ]
  },
  {
    "id": "tv_53968",
    "question": "Which feature of Bank Balance was recognised by the 2021 Broadcast Tech Innovation Awards?",
    "answers": [
      "Its opening theme",
      "Its studio audience seating",
      "Its presenter microphone",
      "Its illuminated playing bars"
    ],
    "correctAnswer": "Its illuminated playing bars",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Awards",
      "Source: https://www.broadcasttechawards.co.uk/winners-2021"
    ]
  },
  {
    "id": "tv_53969",
    "question": "What result did Bank Balance receive in UKGameshows' 2021 audience poll?",
    "answers": [
      "Worst New Show",
      "Best New Show",
      "Best Returning Show",
      "Best Daytime Show"
    ],
    "correctAnswer": "Worst New Show",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Audience poll",
      "Source: https://www.ukgameshows.com/ukgs/Poll_of_the_Year_2021"
    ]
  },
  {
    "id": "tv_53970",
    "question": "What was the relationship between contestants Kurt and Eren in episode three of Bank Balance?",
    "answers": [
      "Cousins",
      "Brothers",
      "Father and son",
      "Friends"
    ],
    "correctAnswer": "Brothers",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Episode 3",
      "Source: https://www.thetvdb.com/series/gordon-ramsays-bank-balance/allseasons/official"
    ]
  },
  {
    "id": "tv_53971",
    "question": "How were contestants Latia and Rose related on Bank Balance?",
    "answers": [
      "Twin sisters",
      "Cousins",
      "Mother and daughter",
      "Grandmother and granddaughter"
    ],
    "correctAnswer": "Mother and daughter",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Episodes 4–5",
      "Source: https://www.thetvdb.com/series/gordon-ramsays-bank-balance/allseasons/official"
    ]
  },
  {
    "id": "tv_53972",
    "question": "Which pair of twin sisters competed in episode eight of Bank Balance?",
    "answers": [
      "Latia and Rose",
      "Kate and Sophie",
      "Caroline and Sian",
      "Margaret and Ann"
    ],
    "correctAnswer": "Margaret and Ann",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Bank Balance",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance",
      "Programme: Bank Balance",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Episode 8",
      "Source: https://www.thetvdb.com/series/gordon-ramsays-bank-balance/allseasons/official"
    ]
  },
  {
    "id": "tv_53973",
    "question": "Which fellow television chef joined Gordon Ramsay for the charity edition of Bank Balance?",
    "answers": [
      "Gino D'Acampo",
      "Jamie Oliver",
      "James Martin",
      "Ainsley Harriott"
    ],
    "correctAnswer": "Gino D'Acampo",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance for Red Nose Day",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance for Red Nose Day",
      "Programme: Bank Balance for Red Nose Day",
      "Bank Balance",
      "charity",
      "Comic Relief",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Celebrity special",
      "Source: https://www.comedy.co.uk/tv/news/6246/red-nose-day-2021/"
    ]
  },
  {
    "id": "tv_53974",
    "question": "Who partnered Gino D'Acampo on Bank Balance for Red Nose Day?",
    "answers": [
      "His wife Jessica",
      "His son Luciano",
      "Fred Sirieix",
      "His fellow chef Jamie Oliver"
    ],
    "correctAnswer": "His son Luciano",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance for Red Nose Day",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance for Red Nose Day",
      "Programme: Bank Balance for Red Nose Day",
      "Bank Balance",
      "charity",
      "Comic Relief",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Celebrity special",
      "Source: https://www.comedy.co.uk/tv/news/6246/red-nose-day-2021/"
    ]
  },
  {
    "id": "tv_53975",
    "question": "Which charity benefited from the special celebrity edition of Bank Balance?",
    "answers": [
      "Children in Need",
      "Sport Relief",
      "Comic Relief",
      "Macmillan Cancer Support"
    ],
    "correctAnswer": "Comic Relief",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance for Red Nose Day",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance for Red Nose Day",
      "Programme: Bank Balance for Red Nose Day",
      "Bank Balance",
      "charity",
      "Comic Relief",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Charity",
      "Source: https://www.comedy.co.uk/tv/news/6246/red-nose-day-2021/"
    ]
  },
  {
    "id": "tv_53976",
    "question": "How long was the Red Nose Day edition of Bank Balance according to UKGameshows' broadcast history?",
    "answers": [
      "30 minutes",
      "60 minutes",
      "90 minutes",
      "45 minutes"
    ],
    "correctAnswer": "45 minutes",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Bank Balance for Red Nose Day",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Bank Balance for Red Nose Day",
      "Programme: Bank Balance for Red Nose Day",
      "Bank Balance",
      "charity",
      "Comic Relief",
      "BBC One",
      "UK Game Show",
      "Gordon Ramsay",
      "2021",
      "Special running time",
      "Source: https://ukgameshows.com/ukgs/Bank_Balance"
    ]
  }
];
if(questions.length!==32||new Set(questions.map(q=>q.id)).size!==questions.length||new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||questions.some((q,i)=>q.id!=='tv_'+(53945+i)||q.answers.length!==4||new Set(q.answers).size!==4||q.answers.filter(a=>a===q.correctAnswer).length!==1||!q.tags.includes('Programme: '+q.topic)||q.dailyEligible!==true))throw Error('Pack 692 validation failed');
module.exports=questions;
