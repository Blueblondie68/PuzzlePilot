// PuzzlePilot — Pack 643: The Vault
// 42 supplementary questions; eight original programme questions in Packs 214 and 219 retained.
// Three series, production, gameplay, documented jackpot winners and 2004 NTA nomination. One of four home jackpot winners not independently verified; complete individual episode results not established. Original Packs 209–222 checked; full-bank semantic duplicate check outstanding. Bank connection unchanged.
'use strict';
const questions = [
  {
    "id": "tv_52456",
    "question": "Which channel broadcast the British quiz The Vault?",
    "answers": [
      "ITV1",
      "BBC One",
      "Channel 4",
      "Five"
    ],
    "correctAnswer": "ITV1",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Broadcast history",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52457",
    "question": "How many series of The Vault were broadcast in Britain?",
    "answers": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correctAnswer": "Three",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Series count",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52458",
    "question": "How many episodes of The Vault were broadcast in its original UK run?",
    "answers": [
      "24",
      "40",
      "32",
      "48"
    ],
    "correctAnswer": "32",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Episode count",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52459",
    "question": "Which country originated the format adapted into ITV's The Vault?",
    "answers": [
      "Australia",
      "France",
      "Netherlands",
      "Israel"
    ],
    "correctAnswer": "Israel",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Format origins",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52460",
    "question": "What was the title of the original Israeli version of The Vault?",
    "answers": [
      "HaKassefet",
      "Le Coffre",
      "O Cofre",
      "Seif"
    ],
    "correctAnswer": "HaKassefet",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Format origins",
      "Source: https://en.wikipedia.org/wiki/The_Vault_(game_show)"
    ]
  },
  {
    "id": "tv_52461",
    "question": "Which company produced The Vault alongside Carlton?",
    "answers": [
      "Celador",
      "Kingworld International Productions",
      "12 Yard",
      "Endemol"
    ],
    "correctAnswer": "Kingworld International Productions",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Production",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52462",
    "question": "Which studios initially housed the British version of The Vault?",
    "answers": [
      "Fountain Studios",
      "Maidstone Studios",
      "Teddington Studios",
      "Pinewood Studios"
    ],
    "correctAnswer": "Teddington Studios",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Production",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52463",
    "question": "Where did production of The Vault move after Teddington?",
    "answers": [
      "BBC Television Centre",
      "Dock10",
      "Elstree Film Studios",
      "The London Studios"
    ],
    "correctAnswer": "The London Studios",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Production",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52464",
    "question": "Why did Gabby Logan take over presenting The Vault during its third series?",
    "answers": [
      "Melanie Sykes went on maternity leave",
      "Melanie Sykes moved to the BBC",
      "Melanie Sykes became a contestant",
      "Melanie Sykes retired from television"
    ],
    "correctAnswer": "Melanie Sykes went on maternity leave",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "2004",
      "Presenter change",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52465",
    "question": "How many episodes of The Vault did Gabby Logan present?",
    "answers": [
      "Four",
      "Eight",
      "Six",
      "Twelve"
    ],
    "correctAnswer": "Eight",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "2004",
      "Presenter change",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52466",
    "question": "On which night did the third series of The Vault air instead of Saturday?",
    "answers": [
      "Monday",
      "Wednesday",
      "Tuesday",
      "Friday"
    ],
    "correctAnswer": "Tuesday",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "2004",
      "Scheduling",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52467",
    "question": "Which BBC medical drama competed against The Vault in its Tuesday evening slot?",
    "answers": [
      "Casualty",
      "Doctors",
      "Bodies",
      "Holby City"
    ],
    "correctAnswer": "Holby City",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "2004",
      "Scheduling",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52468",
    "question": "How many studio contestants began each episode in the third series of The Vault?",
    "answers": [
      "Nine",
      "Seven",
      "Eight",
      "Ten"
    ],
    "correctAnswer": "Nine",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "2004",
      "Format change",
      "Source: https://en.wikipedia.org/wiki/The_Vault_(game_show)"
    ]
  },
  {
    "id": "tv_52469",
    "question": "What extra source of brokers was introduced in the second series of The Vault?",
    "answers": [
      "Former studio winners",
      "Home viewers calling in",
      "Celebrity guests",
      "Professional quiz champions"
    ],
    "correctAnswer": "Home viewers calling in",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "2003",
      "Format change",
      "Source: https://en.wikipedia.org/wiki/The_Vault_(game_show)"
    ]
  },
  {
    "id": "tv_52470",
    "question": "How were the studio brokers identified on The Vault?",
    "answers": [
      "By their ages",
      "By their home towns",
      "By their occupations",
      "By their favourite subjects"
    ],
    "correctAnswer": "By their occupations",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Brokers",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52471",
    "question": "How long did each player have for the opening question round of The Vault?",
    "answers": [
      "Two minutes",
      "Four minutes",
      "Five minutes",
      "Three minutes"
    ],
    "correctAnswer": "Three minutes",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Round one",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52472",
    "question": "How much was each correct answer worth in the first round of The Vault?",
    "answers": [
      "£100",
      "£50",
      "£200",
      "£250"
    ],
    "correctAnswer": "£100",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Round one",
      "Scoring",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52473",
    "question": "What bonus was awarded for answering all ten questions in the opening round of The Vault?",
    "answers": [
      "£1,000",
      "£5,000",
      "£2,500",
      "£10,000"
    ],
    "correctAnswer": "£5,000",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Round one",
      "Scoring",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52474",
    "question": "Did a broker on The Vault receive their agreed fee if their answer proved incorrect?",
    "answers": [
      "Yes, in full",
      "Yes, at half the agreed price",
      "No, the deal was cancelled",
      "Yes, with an added bonus"
    ],
    "correctAnswer": "No, the deal was cancelled",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Brokers",
      "Rules",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52475",
    "question": "How long did the second round of The Vault last?",
    "answers": [
      "Two minutes",
      "Three minutes",
      "Five minutes",
      "Four minutes"
    ],
    "correctAnswer": "Four minutes",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Round two",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52476",
    "question": "How much was each correct answer worth in the second round of The Vault?",
    "answers": [
      "£200",
      "£100",
      "£250",
      "£500"
    ],
    "correctAnswer": "£200",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Round two",
      "Scoring",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52477",
    "question": "What nickname was given to the broker who earned the most money during an edition of The Vault?",
    "answers": [
      "Top banker",
      "Hot broker",
      "Golden trader",
      "Super seller"
    ],
    "correctAnswer": "Hot broker",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Brokers",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52478",
    "question": "Which part of The Vault was broadcast live while the earlier rounds were prerecorded?",
    "answers": [
      "The combination guesses",
      "The first question round",
      "The jackpot round",
      "The head-to-head round"
    ],
    "correctAnswer": "The jackpot round",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Production",
      "Final",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52479",
    "question": "How much time did the studio finalist have to answer the ten jackpot questions on The Vault?",
    "answers": [
      "One minute",
      "Three minutes",
      "Four minutes",
      "Two minutes"
    ],
    "correctAnswer": "Two minutes",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Final",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52480",
    "question": "How much could a studio finalist accumulate in the final round of The Vault by answering nine questions correctly?",
    "answers": [
      "£25,000",
      "£10,000",
      "£15,000",
      "£50,000"
    ],
    "correctAnswer": "£25,000",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Final",
      "Prize ladder",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52481",
    "question": "How many subject options did the studio finalist receive for the jackpot question on The Vault?",
    "answers": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correctAnswer": "Three",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Final",
      "Category choice",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52482",
    "question": "Who could help a studio contestant answer the jackpot question itself on The Vault?",
    "answers": [
      "Any studio broker",
      "A home broker",
      "Nobody",
      "The eliminated finalist"
    ],
    "correctAnswer": "Nobody",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Final",
      "Rules",
      "Source: https://en.wikipedia.org/wiki/The_Vault_(game_show)"
    ]
  },
  {
    "id": "tv_52483",
    "question": "How many questions did a home caller have to answer correctly to win The Vault's jackpot?",
    "answers": [
      "Four",
      "Eight",
      "Ten",
      "Six"
    ],
    "correctAnswer": "Six",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Home game",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52484",
    "question": "How many of the home caller's jackpot questions on The Vault had already been asked during the programme?",
    "answers": [
      "Two",
      "One",
      "Three",
      "Four"
    ],
    "correctAnswer": "Two",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Home game",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52485",
    "question": "How much was added to The Vault's jackpot after an edition in which neither finalist won it?",
    "answers": [
      "£50,000",
      "£100,000",
      "£150,000",
      "£250,000"
    ],
    "correctAnswer": "£100,000",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Jackpot",
      "Rollover",
      "Source: https://en.wikipedia.org/wiki/The_Vault_(game_show)"
    ]
  },
  {
    "id": "tv_52486",
    "question": "What was the maximum rollover jackpot on the British version of The Vault?",
    "answers": [
      "£500,000",
      "£2 million",
      "£1 million",
      "£5 million"
    ],
    "correctAnswer": "£1 million",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Jackpot",
      "Source: https://en.wikipedia.org/wiki/The_Vault_(game_show)"
    ]
  },
  {
    "id": "tv_52487",
    "question": "How many studio contestants won the jackpot during the entire UK run of The Vault?",
    "answers": [
      "One",
      "Three",
      "Four",
      "Two"
    ],
    "correctAnswer": "Two",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "Records",
      "Studio winners",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52488",
    "question": "Who became the first studio contestant to win the jackpot on The Vault?",
    "answers": [
      "Kwan Loo",
      "Mary Swain",
      "Nathan Birtle",
      "Karen Shand"
    ],
    "correctAnswer": "Kwan Loo",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "2002",
      "Winner",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52489",
    "question": "Which fear did Kwan Loo correctly identify to win The Vault's jackpot in 2002?",
    "answers": [
      "Fear of spiders",
      "Fear of ghosts",
      "Fear of heights",
      "Fear of enclosed spaces"
    ],
    "correctAnswer": "Fear of ghosts",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "2002",
      "Winning question",
      "halloween",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52490",
    "question": "Who won the £700,000 studio jackpot on The Vault in 2003?",
    "answers": [
      "Anne Parkinson",
      "Leah Nichols",
      "Mary Swain",
      "Karen Shand"
    ],
    "correctAnswer": "Mary Swain",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "2003",
      "Winner",
      "Source: https://www.ukgameshows.com/ukgs/Weaver%27s_Week_2003-08-23"
    ]
  },
  {
    "id": "tv_52491",
    "question": "What type of collectable did Mary Swain correctly associate with arctophiles to win The Vault's jackpot?",
    "answers": [
      "Postage stamps",
      "Antique clocks",
      "Model trains",
      "Teddy bears"
    ],
    "correctAnswer": "Teddy bears",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "2003",
      "Winning question",
      "Source: https://www.ukgameshows.com/ukgs/The_Vault"
    ]
  },
  {
    "id": "tv_52492",
    "question": "Which home caller won £300,000 on The Vault in May 2002?",
    "answers": [
      "Leah Nichols",
      "Anne Parkinson",
      "Mary Swain",
      "Karen Shand"
    ],
    "correctAnswer": "Leah Nichols",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "2002",
      "Home winner",
      "Source: https://www.ukgameshows.com/ukgs/All_Time_Winners_List"
    ]
  },
  {
    "id": "tv_52493",
    "question": "How much did home caller Anne Parkinson win on The Vault in June 2002?",
    "answers": [
      "£100,000",
      "£200,000",
      "£300,000",
      "£400,000"
    ],
    "correctAnswer": "£200,000",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "2002",
      "Home winner",
      "Source: https://www.ukgameshows.com/ukgs/All_Time_Winners_List"
    ]
  },
  {
    "id": "tv_52494",
    "question": "Who won the £1 million jackpot by telephone on The Vault in 2004?",
    "answers": [
      "Mary Swain",
      "Leah Nichols",
      "Karen Shand",
      "Anne Parkinson"
    ],
    "correctAnswer": "Karen Shand",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "2004",
      "Home winner",
      "Source: https://www.ukgameshows.com/ukgs/UK_Game_Show_Records"
    ]
  },
  {
    "id": "tv_52495",
    "question": "What was the occupation of The Vault's million-pound home winner Karen Shand?",
    "answers": [
      "Teacher",
      "Accountant",
      "Police officer",
      "Nurse"
    ],
    "correctAnswer": "Nurse",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "2004",
      "Home winner",
      "Source: https://www.theguardian.com/tv-and-radio/2024/feb/01/i-can-pay-my-council-tax-the-ever-shrinking-world-of-tv-prize-money"
    ]
  },
  {
    "id": "tv_52496",
    "question": "For which award was The Vault nominated in the Most Popular Quiz Programme category in 2004?",
    "answers": [
      "National Television Award",
      "BAFTA Television Award",
      "Rose d'Or",
      "Royal Television Society Award"
    ],
    "correctAnswer": "National Television Award",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "2004",
      "Awards",
      "Nomination",
      "Source: https://www.tvguide.com/tvshows/the-vault/1030031765/"
    ]
  },
  {
    "id": "tv_52497",
    "question": "Which quiz beat The Vault to the 2004 National Television Award for most popular quiz?",
    "answers": [
      "A Question of Sport",
      "Who Wants to Be a Millionaire?",
      "Have I Got News for You",
      "The Weakest Link"
    ],
    "correctAnswer": "Who Wants to Be a Millionaire?",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Vault",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Vault",
      "Programme: The Vault",
      "ITV",
      "UK Game Show",
      "2002–2004",
      "2004",
      "Awards",
      "Source: https://www.ukgameshows.com/ukgs/Award_Winners"
    ]
  }
];
if(questions.length!==42||new Set(questions.map(q=>q.id)).size!==questions.length||new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||questions.some((q,i)=>q.id!=='tv_'+(52456+i)||q.answers.length!==4||new Set(q.answers).size!==4||q.answers.filter(a=>a===q.correctAnswer).length!==1||!q.tags.includes('Programme: The Vault')||q.dailyEligible!==true))throw Error('Pack 643 validation failed');
module.exports=questions;
