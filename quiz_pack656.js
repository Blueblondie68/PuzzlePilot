// PuzzlePilot — Pack 656: Moneybags and Celebrity Moneybags
// 42 supplementary questions; eight original Pack 215 questions retained.
// Both series, format, 2022 BAFTA Daytime nomination, viewer poll, record bank, selected regular results, celebrity week outcomes and charities. Celebrity results from linked fan episode guide; amounts refer to final game, excluding consolation payments. Full-bank semantic duplicate scan outstanding. Original packs 209–222 checked. Bank connection unchanged.
'use strict';
const questions = [
  {
    "id": "tv_52887",
    "question": "Which production company made Moneybags for Channel 4?",
    "answers": [
      "Youngest Media",
      "12 Yard",
      "Potato",
      "Celador"
    ],
    "correctAnswer": "Youngest Media",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Production",
      "Source: https://www.channel4.com/press/news/channel-4-grabs-recommission-youngest-medias-daytime-quiz-moneybags"
    ]
  },
  {
    "id": "tv_52888",
    "question": "Where was Moneybags recorded?",
    "answers": [
      "Fountain Studios in Wembley",
      "Dock10 studios in Salford",
      "Elstree Studios",
      "The London Studios"
    ],
    "correctAnswer": "Dock10 studios in Salford",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Production",
      "Source: https://www.ukgameshows.com/ukgs/Moneybags"
    ]
  },
  {
    "id": "tv_52889",
    "question": "Who composed the music for Moneybags?",
    "answers": [
      "Paul Farrer",
      "Marc Sylvan",
      "Dobs Vye",
      "Keith Strachan"
    ],
    "correctAnswer": "Dobs Vye",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Theme music",
      "Source: https://www.ukgameshows.com/ukgs/Moneybags"
    ]
  },
  {
    "id": "tv_52890",
    "question": "How many episodes comprised each of the two series of Moneybags, including celebrity editions?",
    "answers": [
      "20",
      "25",
      "40",
      "30"
    ],
    "correctAnswer": "30",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Series count",
      "Source: https://en.wikipedia.org/wiki/Moneybags_(game_show)"
    ]
  },
  {
    "id": "tv_52891",
    "question": "Who stood in for Craig Charles for the final four Moneybags episodes?",
    "answers": [
      "Kevin Duala",
      "Ben Shephard",
      "Richard Osman",
      "Rick Edwards"
    ],
    "correctAnswer": "Kevin Duala",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Presenter change",
      "Source: https://www.ukgameshows.com/ukgs/Moneybags"
    ]
  },
  {
    "id": "tv_52892",
    "question": "What new afternoon time slot did Moneybags occupy when it returned for series two?",
    "answers": [
      "2 pm",
      "5 pm",
      "3 pm",
      "4 pm"
    ],
    "correctAnswer": "5 pm",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Scheduling",
      "Source: https://www.channel4.com/press/news/celebrity-moneybags-press-pack"
    ]
  },
  {
    "id": "tv_52893",
    "question": "What national event disrupted the broadcast schedule of Moneybags in September 2022?",
    "answers": [
      "The Platinum Jubilee",
      "The Commonwealth Games",
      "The death of Queen Elizabeth II",
      "The coronation of Charles III"
    ],
    "correctAnswer": "The death of Queen Elizabeth II",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Scheduling",
      "Source: https://www.ukgameshows.com/ukgs/Moneybags"
    ]
  },
  {
    "id": "tv_52894",
    "question": "How many different moneybags were allocated to each week of Moneybags?",
    "answers": [
      "50",
      "75",
      "150",
      "100"
    ],
    "correctAnswer": "100",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Gameplay",
      "Weekly format",
      "Source: https://en.wikipedia.org/wiki/Moneybags_(game_show)"
    ]
  },
  {
    "id": "tv_52895",
    "question": "How many correct-answer bags were allocated to a daily Moneybags game?",
    "answers": [
      "20",
      "10",
      "15",
      "30"
    ],
    "correctAnswer": "20",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Gameplay",
      "Source: https://en.wikipedia.org/wiki/Moneybags_(game_show)"
    ]
  },
  {
    "id": "tv_52896",
    "question": "What was the position closest to the incoming bags called on Moneybags?",
    "answers": [
      "Gold position",
      "Pole position",
      "Front row",
      "Safe zone"
    ],
    "correctAnswer": "Pole position",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Gameplay",
      "Source: https://en.wikipedia.org/wiki/Moneybags_(game_show)"
    ]
  },
  {
    "id": "tv_52897",
    "question": "What immediate penalty followed grabbing an incorrect bag during a Moneybags head-to-head?",
    "answers": [
      "Automatic elimination",
      "Losing half the bank",
      "Missing the next bag",
      "Missing the next two rounds"
    ],
    "correctAnswer": "Missing the next bag",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Gameplay",
      "Penalty",
      "Source: https://en.wikipedia.org/wiki/Moneybags_(game_show)"
    ]
  },
  {
    "id": "tv_52898",
    "question": "How many correct answers ended a head-to-head round on Moneybags?",
    "answers": [
      "Three",
      "Four",
      "Ten",
      "Five"
    ],
    "correctAnswer": "Five",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Gameplay",
      "Source: https://en.wikipedia.org/wiki/Moneybags_(game_show)"
    ]
  },
  {
    "id": "tv_52899",
    "question": "How many head-to-head matches preceded the Triple-Header in Moneybags?",
    "answers": [
      "Three",
      "Two",
      "Four",
      "Five"
    ],
    "correctAnswer": "Three",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Gameplay",
      "Source: https://en.wikipedia.org/wiki/Moneybags_(game_show)"
    ]
  },
  {
    "id": "tv_52900",
    "question": "What decided a tied head-to-head match on Moneybags?",
    "answers": [
      "A bonus question",
      "Who was in pole position",
      "The earliest correct answer",
      "A random draw"
    ],
    "correctAnswer": "Who was in pole position",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Tie-break",
      "Source: https://en.wikipedia.org/wiki/Moneybags_(game_show)"
    ]
  },
  {
    "id": "tv_52901",
    "question": "What did a Give Away bag force a Moneybags contestant to surrender?",
    "answers": [
      "Their entire bank to the host",
      "Their next turn",
      "Their highest-value bag to an opponent",
      "Half of every bag"
    ],
    "correctAnswer": "Their highest-value bag to an opponent",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Special bags",
      "Source: https://www.ukgameshows.com/ukgs/Moneybags"
    ]
  },
  {
    "id": "tv_52902",
    "question": "What did a Bankrupt bag do to a player's bank on Moneybags?",
    "answers": [
      "Halved it",
      "Froze it for a round",
      "Transferred it to the next contestant",
      "Reduced it to zero"
    ],
    "correctAnswer": "Reduced it to zero",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Special bags",
      "Source: https://www.ukgameshows.com/ukgs/Moneybags"
    ]
  },
  {
    "id": "tv_52903",
    "question": "How many categories made up the Moneybags cash final?",
    "answers": [
      "Four",
      "Two",
      "Three",
      "Five"
    ],
    "correctAnswer": "Four",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Final",
      "Source: https://en.wikipedia.org/wiki/Moneybags_(game_show)"
    ]
  },
  {
    "id": "tv_52904",
    "question": "What percentage of the bank did the first correct final answer secure in series one of Moneybags?",
    "answers": [
      "5%",
      "10%",
      "20%",
      "25%"
    ],
    "correctAnswer": "10%",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Series 1",
      "Final",
      "Source: https://en.wikipedia.org/wiki/Moneybags_(game_show)"
    ]
  },
  {
    "id": "tv_52905",
    "question": "What percentage of the bank did the first correct final answer secure in series two of Moneybags?",
    "answers": [
      "10%",
      "15%",
      "5%",
      "20%"
    ],
    "correctAnswer": "5%",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Series 2",
      "Final",
      "Source: https://en.wikipedia.org/wiki/Moneybags_(game_show)"
    ]
  },
  {
    "id": "tv_52906",
    "question": "What proportion of the bank did three correct final answers secure on Moneybags?",
    "answers": [
      "25%",
      "75%",
      "100%",
      "50%"
    ],
    "correctAnswer": "50%",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Final",
      "Source: https://en.wikipedia.org/wiki/Moneybags_(game_show)"
    ]
  },
  {
    "id": "tv_52907",
    "question": "How could a finalist keep their accumulated winnings rather than risk a further question on Moneybags?",
    "answers": [
      "Let both bags pass",
      "Grab both bags",
      "Swap bags with the host",
      "Call another contestant"
    ],
    "correctAnswer": "Let both bags pass",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Final",
      "Source: https://en.wikipedia.org/wiki/Moneybags_(game_show)"
    ]
  },
  {
    "id": "tv_52908",
    "question": "Which later BBC reality competition featured Moneybags contestant Rayan, who reached the final with a record bank?",
    "answers": [
      "The Apprentice",
      "The Traitors",
      "Race Across the World",
      "Gladiators"
    ],
    "correctAnswer": "The Traitors",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Contestant",
      "Rayan",
      "Source: https://www.ukgameshows.com/ukgs/Moneybags"
    ]
  },
  {
    "id": "tv_52909",
    "question": "What record sum did Rayan take into the final of Moneybags?",
    "answers": [
      "£100,000",
      "£125,000",
      "£159,000",
      "£200,000"
    ],
    "correctAnswer": "£159,000",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Record",
      "Rayan",
      "Source: https://www.ukgameshows.com/ukgs/Moneybags"
    ]
  },
  {
    "id": "tv_52910",
    "question": "What did Rayan actually win from his record Moneybags final bank?",
    "answers": [
      "£15,900",
      "£31,800",
      "£79,500",
      "Nothing"
    ],
    "correctAnswer": "Nothing",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Record",
      "Final outcome",
      "Source: https://docs.google.com/spreadsheets/d/1EnerpjkRQjx0DY7tEw_JM3aEy3lUEA7QIcmXsU8w12A/edit?usp=sharing"
    ]
  },
  {
    "id": "tv_52911",
    "question": "How much did Sunil win in Kevin Duala's first episode as stand-in presenter of Moneybags?",
    "answers": [
      "£23,200",
      "£11,600",
      "£58,000",
      "£116,000"
    ],
    "correctAnswer": "£23,200",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Series 2",
      "Episode 27",
      "Source: https://docs.google.com/spreadsheets/d/1EnerpjkRQjx0DY7tEw_JM3aEy3lUEA7QIcmXsU8w12A/edit?usp=sharing"
    ]
  },
  {
    "id": "tv_52912",
    "question": "How much did Drew win in the final episode of Moneybags?",
    "answers": [
      "£5,800",
      "£2,900",
      "£11,600",
      "£29,000"
    ],
    "correctAnswer": "£2,900",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Series 2",
      "Final episode",
      "Source: https://docs.google.com/spreadsheets/d/1EnerpjkRQjx0DY7tEw_JM3aEy3lUEA7QIcmXsU8w12A/edit?usp=sharing"
    ]
  },
  {
    "id": "tv_52913",
    "question": "In which category was Moneybags nominated at the 2022 BAFTA Television Awards?",
    "answers": [
      "Entertainment Performance",
      "Comedy Entertainment",
      "Daytime",
      "Features"
    ],
    "correctAnswer": "Daytime",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Awards",
      "BAFTA",
      "2022",
      "Source: https://www.bafta.org/awards/television/?award-year=2022"
    ]
  },
  {
    "id": "tv_52914",
    "question": "Which quiz won the 2022 BAFTA Daytime award for which Moneybags was nominated?",
    "answers": [
      "Richard Osman's House of Games",
      "Pointless",
      "Tipping Point",
      "The Chase"
    ],
    "correctAnswer": "The Chase",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Awards",
      "BAFTA",
      "2022",
      "Source: https://www.bafta.org/awards/television/?award-year=2022"
    ]
  },
  {
    "id": "tv_52915",
    "question": "Which quiz shared the 2021 UKGameshows Best New Show poll win with Moneybags?",
    "answers": [
      "The Answer Trap",
      "Unbeatable",
      "The Tournament",
      "The Finish Line"
    ],
    "correctAnswer": "The Answer Trap",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Recognition",
      "Viewer poll",
      "Source: https://www.ukgameshows.com/ukgs/Moneybags"
    ]
  },
  {
    "id": "tv_52916",
    "question": "What companion product was released for Moneybags when its second series launched?",
    "answers": [
      "A board game",
      "A mobile game app",
      "A weekly magazine",
      "A radio quiz"
    ],
    "correctAnswer": "A mobile game app",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "Merchandise",
      "2022",
      "Source: https://www.channel4.com/press/news/youngest-games-launches-moneybags-app-coincide-new-series-hit-quiz-show-channel-4"
    ]
  },
  {
    "id": "tv_52917",
    "question": "In which country was Moneybags adapted as A la saca?",
    "answers": [
      "Italy",
      "France",
      "Spain",
      "Portugal"
    ],
    "correctAnswer": "Spain",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Moneybags",
      "Channel 4",
      "UK Game Show",
      "International adaptation",
      "Source: https://en.wikipedia.org/wiki/Moneybags_(game_show)"
    ]
  },
  {
    "id": "tv_52918",
    "question": "Which singer from Steps took part in Celebrity Moneybags in 2022?",
    "answers": [
      "Lisa Scott-Lee",
      "Faye Tozer",
      "Ian Watkins",
      "Claire Richards"
    ],
    "correctAnswer": "Claire Richards",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "Celebrity Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Celebrity Moneybags",
      "Channel 4",
      "UK Game Show",
      "Celebrity Moneybags",
      "charity",
      "Steps",
      "Source: https://www.channel4.com/press/news/celebrity-moneybags-press-pack"
    ]
  },
  {
    "id": "tv_52919",
    "question": "Which Atomic Kitten singer competed in Celebrity Moneybags?",
    "answers": [
      "Natasha Hamilton",
      "Liz McClarnon",
      "Kerry Katona",
      "Jenny Frost"
    ],
    "correctAnswer": "Natasha Hamilton",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "Celebrity Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Celebrity Moneybags",
      "Channel 4",
      "UK Game Show",
      "Celebrity Moneybags",
      "charity",
      "Atomic Kitten",
      "Source: https://www.channel4.com/press/news/celebrity-moneybags-press-pack"
    ]
  },
  {
    "id": "tv_52920",
    "question": "Which Olympic long jumper took part in Celebrity Moneybags?",
    "answers": [
      "Jonathan Edwards",
      "Greg Rutherford",
      "Chris Tomlinson",
      "Daley Thompson"
    ],
    "correctAnswer": "Greg Rutherford",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "Celebrity Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Celebrity Moneybags",
      "Channel 4",
      "UK Game Show",
      "Celebrity Moneybags",
      "charity",
      "sport",
      "Source: https://www.channel4.com/press/news/celebrity-moneybags-press-pack"
    ]
  },
  {
    "id": "tv_52921",
    "question": "Which charity did Claire Richards support on Celebrity Moneybags?",
    "answers": [
      "Shelter",
      "Macmillan Cancer Support",
      "Marie Curie",
      "Cancer Research UK"
    ],
    "correctAnswer": "Marie Curie",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Celebrity Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Celebrity Moneybags",
      "Channel 4",
      "UK Game Show",
      "Celebrity Moneybags",
      "charity",
      "Source: https://www.channel4.com/press/news/celebrity-moneybags-press-pack"
    ]
  },
  {
    "id": "tv_52922",
    "question": "Which charity did Tom Read Wilson choose on Celebrity Moneybags?",
    "answers": [
      "Marie Curie",
      "Save the Children",
      "Mind",
      "Acting for Others"
    ],
    "correctAnswer": "Acting for Others",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Celebrity Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Celebrity Moneybags",
      "Channel 4",
      "UK Game Show",
      "Celebrity Moneybags",
      "charity",
      "Source: https://www.channel4.com/press/news/celebrity-moneybags-press-pack"
    ]
  },
  {
    "id": "tv_52923",
    "question": "Which singer played for Pershore food bank on Celebrity Moneybags?",
    "answers": [
      "Toyah Willcox",
      "Claire Richards",
      "Natasha Hamilton",
      "Kate Robbins"
    ],
    "correctAnswer": "Toyah Willcox",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Celebrity Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Celebrity Moneybags",
      "Channel 4",
      "UK Game Show",
      "Celebrity Moneybags",
      "charity",
      "Source: https://www.channel4.com/press/news/celebrity-moneybags-press-pack"
    ]
  },
  {
    "id": "tv_52924",
    "question": "Which fitness presenter reached the first Celebrity Moneybags final but failed to win money from the final game itself?",
    "answers": [
      "Dane Baptiste",
      "Mr Motivator",
      "Tom Read Wilson",
      "Nina Wadia"
    ],
    "correctAnswer": "Mr Motivator",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Celebrity Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Celebrity Moneybags",
      "Channel 4",
      "UK Game Show",
      "Celebrity Moneybags",
      "charity",
      "Episode 1",
      "Source: https://docs.google.com/spreadsheets/d/1EnerpjkRQjx0DY7tEw_JM3aEy3lUEA7QIcmXsU8w12A/edit?usp=sharing"
    ]
  },
  {
    "id": "tv_52925",
    "question": "How much did Greg Rutherford win in the second Celebrity Moneybags final?",
    "answers": [
      "£9,000",
      "£18,000",
      "£4,500",
      "£45,000"
    ],
    "correctAnswer": "£4,500",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Celebrity Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Celebrity Moneybags",
      "Channel 4",
      "UK Game Show",
      "Celebrity Moneybags",
      "charity",
      "Episode 2",
      "Source: https://docs.google.com/spreadsheets/d/1EnerpjkRQjx0DY7tEw_JM3aEy3lUEA7QIcmXsU8w12A/edit?usp=sharing"
    ]
  },
  {
    "id": "tv_52926",
    "question": "Which celebrity reached the Wednesday final of Celebrity Moneybags?",
    "answers": [
      "Toyah Willcox",
      "Catherine Tyldesley",
      "Nina Wadia",
      "Kate Robbins"
    ],
    "correctAnswer": "Kate Robbins",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Celebrity Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Celebrity Moneybags",
      "Channel 4",
      "UK Game Show",
      "Celebrity Moneybags",
      "charity",
      "Episode 3",
      "Source: https://docs.google.com/spreadsheets/d/1EnerpjkRQjx0DY7tEw_JM3aEy3lUEA7QIcmXsU8w12A/edit?usp=sharing"
    ]
  },
  {
    "id": "tv_52927",
    "question": "Which celebrity won £1,150 in the Thursday edition of Celebrity Moneybags?",
    "answers": [
      "Claire Richards",
      "Toyah Willcox",
      "Dane Baptiste",
      "Kate Robbins"
    ],
    "correctAnswer": "Claire Richards",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Celebrity Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Celebrity Moneybags",
      "Channel 4",
      "UK Game Show",
      "Celebrity Moneybags",
      "charity",
      "Episode 4",
      "Source: https://docs.google.com/spreadsheets/d/1EnerpjkRQjx0DY7tEw_JM3aEy3lUEA7QIcmXsU8w12A/edit?usp=sharing"
    ]
  },
  {
    "id": "tv_52928",
    "question": "How much did Natasha Hamilton win in the final game of the last Celebrity Moneybags episode?",
    "answers": [
      "£2,950",
      "£11,800",
      "£29,500",
      "£59,000"
    ],
    "correctAnswer": "£11,800",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Celebrity Moneybags",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Moneybags",
      "Programme: Celebrity Moneybags",
      "Channel 4",
      "UK Game Show",
      "Celebrity Moneybags",
      "charity",
      "Episode 5",
      "Source: https://docs.google.com/spreadsheets/d/1EnerpjkRQjx0DY7tEw_JM3aEy3lUEA7QIcmXsU8w12A/edit?usp=sharing"
    ]
  }
];
if(questions.length!==42||new Set(questions.map(q=>q.id)).size!==questions.length||new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||questions.some((q,i)=>q.id!=='tv_'+(52887+i)||q.answers.length!==4||new Set(q.answers).size!==4||q.answers.filter(a=>a===q.correctAnswer).length!==1||!q.tags.includes('Programme: '+q.topic)||q.dailyEligible!==true))throw Error('Pack 656 validation failed');
module.exports=questions;
