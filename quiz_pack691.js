// PuzzlePilot — Pack 691: The Question Jury
// 37 supplementary questions; six originals retained in Pack 217.
// Both series, production, full documented game rules, selected episode highlights, 2017 Broadcast win and four other industry nominations. Complete individual winner records unavailable from consulted listings. Original Packs 209–222 and prior audit commits checked; full-bank semantic duplicate check outstanding. Bank connection unchanged.
'use strict';
const questions = [
  {
    "id": "tv_53908",
    "question": "Which production company developed The Question Jury for Channel 4?",
    "answers": [
      "Monkey",
      "12 Yard",
      "Potato",
      "Celador"
    ],
    "correctAnswer": "Monkey",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Production",
      "Source: https://www.channel4.com/press/news/interview-producers-question-jury"
    ]
  },
  {
    "id": "tv_53909",
    "question": "Which courtroom film inspired the format of The Question Jury?",
    "answers": [
      "A Few Good Men",
      "12 Angry Men",
      "The Verdict",
      "Witness for the Prosecution"
    ],
    "correctAnswer": "12 Angry Men",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Format inspiration",
      "Source: https://www.channel4.com/press/news/interview-producers-question-jury"
    ]
  },
  {
    "id": "tv_53910",
    "question": "Which reality series made by Monkey helped inspire the production style of The Question Jury?",
    "answers": [
      "The Only Way Is Essex",
      "Geordie Shore",
      "Made in Chelsea",
      "Big Brother"
    ],
    "correctAnswer": "Made in Chelsea",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Format inspiration",
      "Source: https://www.channel4.com/press/news/interview-producers-question-jury"
    ]
  },
  {
    "id": "tv_53911",
    "question": "Who was the executive producer interviewed alongside Will Macdonald about the launch of The Question Jury?",
    "answers": [
      "David Young",
      "Richard Osman",
      "Glenn Hugill",
      "Ollie Brack"
    ],
    "correctAnswer": "Ollie Brack",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Production",
      "Source: https://www.channel4.com/press/news/interview-producers-question-jury"
    ]
  },
  {
    "id": "tv_53912",
    "question": "How many series of The Question Jury were broadcast?",
    "answers": [
      "Two",
      "One",
      "Three",
      "Four"
    ],
    "correctAnswer": "Two",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Series history",
      "Source: https://en.wikipedia.org/wiki/The_Question_Jury"
    ]
  },
  {
    "id": "tv_53913",
    "question": "How many episodes of The Question Jury were made altogether?",
    "answers": [
      "20",
      "40",
      "30",
      "60"
    ],
    "correctAnswer": "40",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Broadcast history",
      "Source: https://en.wikipedia.org/wiki/The_Question_Jury"
    ]
  },
  {
    "id": "tv_53914",
    "question": "What filming method was used to capture the jurors' interactions on The Question Jury?",
    "answers": [
      "Handheld cameras only",
      "Contestants' own mobile phones",
      "A fixed camera rig",
      "Stop-motion filming"
    ],
    "correctAnswer": "A fixed camera rig",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Production",
      "Source: https://www.ukgameshows.com/ukgs/The_Question_Jury"
    ]
  },
  {
    "id": "tv_53915",
    "question": "Which company was credited with the music for The Question Jury?",
    "answers": [
      "Audio Network",
      "Silva Screen",
      "De Wolfe Music",
      "Rumble Music"
    ],
    "correctAnswer": "Rumble Music",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Music",
      "Source: https://www.ukgameshows.com/ukgs/The_Question_Jury"
    ]
  },
  {
    "id": "tv_53916",
    "question": "How many main group questions preceded the final on The Question Jury, excluding the quickfire rounds?",
    "answers": [
      "Seven",
      "Five",
      "Eight",
      "Ten"
    ],
    "correctAnswer": "Seven",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Gameplay",
      "Source: https://www.channel4.com/press/news/interview-producers-question-jury"
    ]
  },
  {
    "id": "tv_53917",
    "question": "How much was each of the first two main questions worth on The Question Jury?",
    "answers": [
      "£100",
      "£500",
      "£250",
      "£1,000"
    ],
    "correctAnswer": "£500",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Scoring",
      "Source: https://en.wikipedia.org/wiki/The_Question_Jury"
    ]
  },
  {
    "id": "tv_53918",
    "question": "How much was each of the third and fourth main questions worth on The Question Jury?",
    "answers": [
      "£500",
      "£1,500",
      "£1,000",
      "£2,000"
    ],
    "correctAnswer": "£1,000",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Scoring",
      "Source: https://en.wikipedia.org/wiki/The_Question_Jury"
    ]
  },
  {
    "id": "tv_53919",
    "question": "How much was each of the fifth and sixth main questions worth on The Question Jury?",
    "answers": [
      "£500",
      "£1,000",
      "£2,000",
      "£1,500"
    ],
    "correctAnswer": "£1,500",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Scoring",
      "Source: https://en.wikipedia.org/wiki/The_Question_Jury"
    ]
  },
  {
    "id": "tv_53920",
    "question": "How much was the seventh main group question worth on The Question Jury?",
    "answers": [
      "£2,000",
      "£500",
      "£1,000",
      "£5,000"
    ],
    "correctAnswer": "£2,000",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Scoring",
      "Source: https://en.wikipedia.org/wiki/The_Question_Jury"
    ]
  },
  {
    "id": "tv_53921",
    "question": "How long did each quickfire round last on The Question Jury?",
    "answers": [
      "30 seconds",
      "90 seconds",
      "60 seconds",
      "120 seconds"
    ],
    "correctAnswer": "90 seconds",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Quickfire",
      "Source: https://www.ukgameshows.com/ukgs/The_Question_Jury"
    ]
  },
  {
    "id": "tv_53922",
    "question": "How many questions could the jury attempt in each quickfire round on The Question Jury?",
    "answers": [
      "Five",
      "Seven",
      "Ten",
      "Fifteen"
    ],
    "correctAnswer": "Ten",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Quickfire",
      "Source: https://www.ukgameshows.com/ukgs/The_Question_Jury"
    ]
  },
  {
    "id": "tv_53923",
    "question": "How many jurors were required to remain silent in the first quickfire round of The Question Jury?",
    "answers": [
      "Two",
      "Three",
      "Four",
      "One"
    ],
    "correctAnswer": "One",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Quickfire",
      "Source: https://en.wikipedia.org/wiki/The_Question_Jury"
    ]
  },
  {
    "id": "tv_53924",
    "question": "How many jurors were silenced in the second quickfire round of The Question Jury?",
    "answers": [
      "Three",
      "One",
      "Two",
      "Five"
    ],
    "correctAnswer": "Three",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Quickfire",
      "Source: https://en.wikipedia.org/wiki/The_Question_Jury"
    ]
  },
  {
    "id": "tv_53925",
    "question": "What ended the third quickfire round immediately on The Question Jury?",
    "answers": [
      "A correct answer",
      "An incorrect answer",
      "A change of foreman",
      "A unanimous vote"
    ],
    "correctAnswer": "An incorrect answer",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Quickfire",
      "Source: https://en.wikipedia.org/wiki/The_Question_Jury"
    ]
  },
  {
    "id": "tv_53926",
    "question": "How much did a correct answer earn in either of the first two quickfire rounds on The Question Jury?",
    "answers": [
      "£25",
      "£100",
      "£50",
      "£200"
    ],
    "correctAnswer": "£50",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Quickfire",
      "Source: https://en.wikipedia.org/wiki/The_Question_Jury"
    ]
  },
  {
    "id": "tv_53927",
    "question": "How much did each correct answer earn in the final quickfire round on The Question Jury?",
    "answers": [
      "£25",
      "£50",
      "£250",
      "£100"
    ],
    "correctAnswer": "£100",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Quickfire",
      "Source: https://en.wikipedia.org/wiki/The_Question_Jury"
    ]
  },
  {
    "id": "tv_53928",
    "question": "What was the maximum daily prize fund on The Question Jury?",
    "answers": [
      "£10,000",
      "£5,000",
      "£20,000",
      "£50,000"
    ],
    "correctAnswer": "£10,000",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Prizes",
      "Source: https://www.channel4.com/press/news/interview-producers-question-jury"
    ]
  },
  {
    "id": "tv_53929",
    "question": "What did jurors do physically to nominate themselves for the final question on The Question Jury?",
    "answers": [
      "Raised both hands",
      "Stood up",
      "Moved to a separate desk",
      "Pressed a buzzer"
    ],
    "correctAnswer": "Stood up",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Final",
      "Source: https://en.wikipedia.org/wiki/The_Question_Jury"
    ]
  },
  {
    "id": "tv_53930",
    "question": "What happened to the selected finalist on The Question Jury whether or not they won the money?",
    "answers": [
      "They returned as judge",
      "They stayed for the rest of the week",
      "They left the jury",
      "They selected all future questions"
    ],
    "correctAnswer": "They left the jury",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Final",
      "Source: https://www.channel4.com/press/news/interview-producers-question-jury"
    ]
  },
  {
    "id": "tv_53931",
    "question": "When was the entire jury replaced by seven new contestants on The Question Jury?",
    "answers": [
      "After every question",
      "After every quickfire round",
      "At the start of each new series only",
      "At the start of each new week"
    ],
    "correctAnswer": "At the start of each new week",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Contestants",
      "Source: https://www.channel4.com/press/news/interview-producers-question-jury"
    ]
  },
  {
    "id": "tv_53932",
    "question": "What phrase introduced the jury's agreed answer on The Question Jury?",
    "answers": [
      "Our verdict is",
      "The answer has been locked",
      "Final answer please",
      "We rest our case"
    ],
    "correctAnswer": "Our verdict is",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Catchphrase",
      "Source: https://www.ukgameshows.com/ukgs/Weaver%27s_Week_2016-07-24"
    ]
  },
  {
    "id": "tv_53933",
    "question": "What courtroom title was given to the person who delivered the questions to the jury room on The Question Jury?",
    "answers": [
      "The Bailiff",
      "The Clerk",
      "The Witness",
      "The Barrister"
    ],
    "correctAnswer": "The Clerk",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Production",
      "Source: https://www.ukgameshows.com/ukgs/Weaver%27s_Week_2016-07-24"
    ]
  },
  {
    "id": "tv_53934",
    "question": "What name was given to the breaks when jurors could chat away from the game on The Question Jury?",
    "answers": [
      "Adjournment",
      "Intermission",
      "Recess",
      "Appeal"
    ],
    "correctAnswer": "Recess",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Production",
      "Source: https://www.channel4.com/press/news/interview-producers-question-jury"
    ]
  },
  {
    "id": "tv_53935",
    "question": "Which contestant was a zoologist in the first series of The Question Jury?",
    "answers": [
      "Rickesh",
      "Glen",
      "Luke",
      "Matt"
    ],
    "correctAnswer": "Matt",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Series 1 episode 13",
      "Source: https://thetvdb.com/series/the-question-jury/allseasons/official"
    ]
  },
  {
    "id": "tv_53936",
    "question": "Which two jurors' disagreements threatened team morale in the opening week of The Question Jury's second series?",
    "answers": [
      "Rickesh and Glen",
      "Luke and Nick",
      "Dan and Matt",
      "Michael and Paul"
    ],
    "correctAnswer": "Rickesh and Glen",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Series 2 episode 3",
      "Source: https://thetvdb.com/series/the-question-jury/allseasons/official"
    ]
  },
  {
    "id": "tv_53937",
    "question": "Which juror struggled with being silenced in the second week of The Question Jury's second series?",
    "answers": [
      "Jane",
      "Soraya",
      "Stacey",
      "Mairead"
    ],
    "correctAnswer": "Soraya",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Series 2 episode 7",
      "Source: https://thetvdb.com/series/the-question-jury/allseasons/official"
    ]
  },
  {
    "id": "tv_53938",
    "question": "Which juror joined the group in the final episode of The Question Jury?",
    "answers": [
      "Rickesh",
      "Luke",
      "Paul",
      "Glen"
    ],
    "correctAnswer": "Paul",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Series 2 episode 20",
      "Source: https://thetvdb.com/series/the-question-jury/allseasons/official"
    ]
  },
  {
    "id": "tv_53939",
    "question": "Which category did The Question Jury win at the 2017 Broadcast Awards?",
    "answers": [
      "Best Drama Series",
      "Best Comedy Programme",
      "Best Sports Programme",
      "Best Daytime Programme"
    ],
    "correctAnswer": "Best Daytime Programme",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Awards",
      "Source: https://www.broadcastnow.co.uk/c4-reigns-at-broadcast-awards-2017/5114444.article"
    ]
  },
  {
    "id": "tv_53940",
    "question": "In which two consecutive years did The Question Jury receive RTS Daytime Programme nominations?",
    "answers": [
      "2017 and 2018",
      "2015 and 2016",
      "2016 and 2017",
      "2018 and 2019"
    ],
    "correctAnswer": "2017 and 2018",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Awards",
      "Source: https://utasukproductions.com/awards/"
    ]
  },
  {
    "id": "tv_53941",
    "question": "Which programme beat The Question Jury to the 2017 RTS Daytime Programme award?",
    "answers": [
      "Good Morning Britain",
      "Find It, Fix It, Flog It",
      "Moving On",
      "Tipping Point"
    ],
    "correctAnswer": "Find It, Fix It, Flog It",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Awards",
      "Source: https://rts.org.uk/award/rts-programme-awards-2017"
    ]
  },
  {
    "id": "tv_53942",
    "question": "Which programme beat The Question Jury to the 2018 RTS Daytime Programme award?",
    "answers": [
      "Good Morning Britain",
      "Find It, Fix It, Flog It",
      "Moving On – Eighteen",
      "Countdown"
    ],
    "correctAnswer": "Moving On – Eighteen",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Awards",
      "Source: https://rts.org.uk/award/rts-programme-awards-2018-partnership-audio-network"
    ]
  },
  {
    "id": "tv_53943",
    "question": "In which category was The Question Jury nominated at the 2017 Televisual Bulldog Awards?",
    "answers": [
      "Drama Series",
      "Documentary Series",
      "Sports Coverage",
      "Panel, Quiz or Chat Show"
    ],
    "correctAnswer": "Panel, Quiz or Chat Show",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Awards",
      "Source: https://utasukproductions.com/awards/"
    ]
  },
  {
    "id": "tv_53944",
    "question": "In which category was The Question Jury nominated at the 2017 Format Awards?",
    "answers": [
      "Best Studio-Based Gameshow Format",
      "Best Reality Format",
      "Best Comedy Format",
      "Best Scripted Format"
    ],
    "correctAnswer": "Best Studio-Based Gameshow Format",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Question Jury",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "The Question Jury",
      "Programme: The Question Jury",
      "Channel 4",
      "UK Game Show",
      "2016–2017",
      "Awards",
      "Source: https://utasukproductions.com/awards/"
    ]
  }
];
if(questions.length!==37||new Set(questions.map(q=>q.id)).size!==questions.length||new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||questions.some((q,i)=>q.id!=='tv_'+(53908+i)||q.answers.length!==4||new Set(q.answers).size!==4||q.answers.filter(a=>a===q.correctAnswer).length!==1||!q.tags.includes('Programme: '+q.topic)||q.dailyEligible!==true))throw Error('Pack 691 validation failed');
module.exports=questions;
