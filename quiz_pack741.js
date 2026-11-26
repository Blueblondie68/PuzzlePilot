// PuzzlePilot — Pack 741: Winner Takes All
// 33 additions; six originals in Pack 220 retained. Packs 209–222 checked. Original ITV format, daytime changes, documented specials, notable winners, music and 1997 revival. No formal awards verified; uncorroborated 2026 revival claim excluded. Full episode outcomes, complete special guest lists and full-bank semantic duplicate scan outstanding. Bank unchanged.
'use strict';
const questions = [
  {
    "id": "tv_55111",
    "question": "Which ITV company produced Winner Takes All?",
    "answers": [
      "Anglia Television",
      "Yorkshire Television",
      "Thames Television",
      "Granada Television"
    ],
    "correctAnswer": "Yorkshire Television",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Production",
      "Source: https://en.wikipedia.org/wiki/Winner_Takes_All_(game_show)"
    ]
  },
  {
    "id": "tv_55112",
    "question": "Who devised the format of Winner Takes All?",
    "answers": [
      "Geoffrey Wheeler",
      "Jimmy Tarbuck",
      "David Briggs",
      "Merv Griffin"
    ],
    "correctAnswer": "Geoffrey Wheeler",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Format creator",
      "Source: https://www.the-independent.com/news/obituaries/geoffrey-wheeler-the-face-of-songs-of-praise-and-top-of-the-form-and-deviser-of-the-gambling-game-show-winner-takes-all-9033114.html"
    ]
  },
  {
    "id": "tv_55113",
    "question": "Who assisted Geoffrey Wheeler on the later ITV series of Winner Takes All?",
    "answers": [
      "Gaynor Barnes",
      "Emma Forbes",
      "Carol Vorderman",
      "Vicky McDonald"
    ],
    "correctAnswer": "Vicky McDonald",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Presenter team",
      "Source: https://ukgameshows.com/ukgs/Winner_Takes_All"
    ]
  },
  {
    "id": "tv_55114",
    "question": "What was the name of the original instrumental theme used on Winner Takes All?",
    "answers": [
      "The Winning Hand",
      "Hearts Are Trumps",
      "Joy Ride",
      "Happy Go Lucky"
    ],
    "correctAnswer": "Joy Ride",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Music",
      "Source: https://ukgameshows.com/ukgs/Winner_Takes_All"
    ]
  },
  {
    "id": "tv_55115",
    "question": "Who composed Joy Ride, the original theme of Winner Takes All?",
    "answers": [
      "Peter Fenn",
      "Jim Lawless",
      "John Mealing",
      "Keith Strachan"
    ],
    "correctAnswer": "Jim Lawless",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Music",
      "Source: https://ukgameshows.com/ukgs/Winner_Takes_All"
    ]
  },
  {
    "id": "tv_55116",
    "question": "How many series of Winner Takes All were broadcast on ITV?",
    "answers": [
      "14",
      "10",
      "12",
      "16"
    ],
    "correctAnswer": "14",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Broadcast",
      "Source: https://en.wikipedia.org/wiki/Winner_Takes_All_(game_show)"
    ]
  },
  {
    "id": "tv_55117",
    "question": "How many contestants took part in a standard edition of Winner Takes All?",
    "answers": [
      "Two",
      "Six",
      "Eight",
      "Four"
    ],
    "correctAnswer": "Four",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Format",
      "Source: https://ukgameshows.fandom.com/wiki/Winner_Takes_All"
    ]
  },
  {
    "id": "tv_55118",
    "question": "How many points did contestants begin with in the original format of Winner Takes All?",
    "answers": [
      "20",
      "30",
      "50",
      "100"
    ],
    "correctAnswer": "50",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Heats",
      "Source: https://ukgameshows.com/ukgs/Winner_Takes_All"
    ]
  },
  {
    "id": "tv_55119",
    "question": "What was the minimum wager in the original format of Winner Takes All?",
    "answers": [
      "One point",
      "Five points",
      "Ten points",
      "Twenty points"
    ],
    "correctAnswer": "Five points",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Heats",
      "Source: https://ukgameshows.com/ukgs/Winner_Takes_All"
    ]
  },
  {
    "id": "tv_55120",
    "question": "What was the longest set of odds offered on an answer in the ITV version of Winner Takes All?",
    "answers": [
      "10–1",
      "5–1",
      "20–1",
      "50–1"
    ],
    "correctAnswer": "10–1",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Heats",
      "Source: https://ukgameshows.fandom.com/wiki/Winner_Takes_All"
    ]
  },
  {
    "id": "tv_55121",
    "question": "How many questions were played in each heat of Winner Takes All?",
    "answers": [
      "Three",
      "Six",
      "Ten",
      "Five"
    ],
    "correctAnswer": "Five",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Heats",
      "Source: https://en.wikipedia.org/wiki/Winner_Takes_All_(game_show)"
    ]
  },
  {
    "id": "tv_55122",
    "question": "How many heat winners advanced to the final of Winner Takes All?",
    "answers": [
      "One",
      "Three",
      "Two",
      "Four"
    ],
    "correctAnswer": "Two",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Final",
      "Source: https://ukgameshows.fandom.com/wiki/Winner_Takes_All"
    ]
  },
  {
    "id": "tv_55123",
    "question": "What replaced points in the original ITV final of Winner Takes All?",
    "answers": [
      "Tokens",
      "Pounds",
      "Seconds",
      "Prize vouchers"
    ],
    "correctAnswer": "Pounds",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Final",
      "Source: https://ukgameshows.com/ukgs/Winner_Takes_All"
    ]
  },
  {
    "id": "tv_55124",
    "question": "What consolation payment was normally awarded to the losing finalist on ITV's Winner Takes All?",
    "answers": [
      "£100",
      "£50",
      "£250",
      "£500"
    ],
    "correctAnswer": "£100",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Prizes",
      "Source: https://en.wikipedia.org/wiki/Winner_Takes_All_(game_show)"
    ]
  },
  {
    "id": "tv_55125",
    "question": "What was the maximum cash prize per edition in the early years of Winner Takes All?",
    "answers": [
      "£500",
      "£2,000",
      "£5,000",
      "£1,000"
    ],
    "correctAnswer": "£1,000",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Prizes",
      "Source: https://en.wikipedia.org/wiki/Winner_Takes_All_(game_show)"
    ]
  },
  {
    "id": "tv_55126",
    "question": "What did a returning champion risk losing under the revised rules in use by 1979 on Winner Takes All?",
    "answers": [
      "All their accumulated winnings",
      "A fixed £50",
      "Half their accumulated winnings",
      "Nothing"
    ],
    "correctAnswer": "Half their accumulated winnings",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Returning champions",
      "Source: https://en.wikipedia.org/wiki/Winner_Takes_All_(game_show)"
    ]
  },
  {
    "id": "tv_55127",
    "question": "What stationery organiser was given as a consolation prize in the later ITV run of Winner Takes All?",
    "answers": [
      "A desk calendar",
      "A Filofax",
      "A fountain pen",
      "A pocket calculator"
    ],
    "correctAnswer": "A Filofax",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Consolation prizes",
      "Source: https://ukgameshows.fandom.com/wiki/Winner_Takes_All"
    ]
  },
  {
    "id": "tv_55128",
    "question": "What consolation gift replaced the Filofax in the final ITV series of Winner Takes All?",
    "answers": [
      "An encyclopaedia",
      "A dictionary",
      "A board game",
      "A watch"
    ],
    "correctAnswer": "An encyclopaedia",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Consolation prizes",
      "Source: https://ukgameshows.fandom.com/wiki/Winner_Takes_All"
    ]
  },
  {
    "id": "tv_55129",
    "question": "How many starting points were used in the 1988 daytime series of Winner Takes All?",
    "answers": [
      "20",
      "40",
      "50",
      "30"
    ],
    "correctAnswer": "30",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Daytime format",
      "Source: https://en.wikipedia.org/wiki/Winner_Takes_All_(game_show)"
    ]
  },
  {
    "id": "tv_55130",
    "question": "Which production company made the final ITV series of Winner Takes All for Yorkshire Television?",
    "answers": [
      "Celador",
      "Grundy",
      "Television Techniques",
      "Action Time"
    ],
    "correctAnswer": "Television Techniques",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Daytime production",
      "Source: https://en.wikipedia.org/wiki/Winner_Takes_All_(game_show)"
    ]
  },
  {
    "id": "tv_55131",
    "question": "Which future Eggheads regular made her television quiz debut on Winner Takes All?",
    "answers": [
      "Judith Keppel",
      "Daphne Fowler",
      "Pat Gibson",
      "Anne Hegerty"
    ],
    "correctAnswer": "Daphne Fowler",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Notable contestants",
      "Source: https://www.ukgameshows.com/ukgs/Weaver%27s_Week_2014-05-25"
    ]
  },
  {
    "id": "tv_55132",
    "question": "Who defeated Daphne Fowler in the final of her first appearance on Winner Takes All?",
    "answers": [
      "Arthur Naylor",
      "John Smith",
      "Michael Dixon",
      "Kevin Ashman"
    ],
    "correctAnswer": "Arthur Naylor",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Notable contestants",
      "Source: https://www.ukgameshows.com/ukgs/Weaver%27s_Week_2014-05-25"
    ]
  },
  {
    "id": "tv_55133",
    "question": "How much did John Smith win on Winner Takes All in 1981, setting a British game-show cash prize record?",
    "answers": [
      "£5,000",
      "£7,455",
      "£10,000",
      "£6,620"
    ],
    "correctAnswer": "£6,620",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Record winners",
      "Source: https://www.the-independent.com/news/obituaries/geoffrey-wheeler-the-face-of-songs-of-praise-and-top-of-the-form-and-deviser-of-the-gambling-game-show-winner-takes-all-9033114.html"
    ]
  },
  {
    "id": "tv_55134",
    "question": "Which contestant surpassed John Smith's record on Winner Takes All in 1986?",
    "answers": [
      "Arthur Naylor",
      "Daphne Fowler",
      "Michael Dixon",
      "David Edwards"
    ],
    "correctAnswer": "Michael Dixon",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Record winners",
      "Source: https://ukgameshows.com/ukgs/Winner_Takes_All"
    ]
  },
  {
    "id": "tv_55135",
    "question": "What was Michael Dixon's record-breaking total on Winner Takes All?",
    "answers": [
      "£6,620",
      "£7,455",
      "£8,500",
      "£10,000"
    ],
    "correctAnswer": "£7,455",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Record winners",
      "Source: https://ukgameshows.com/ukgs/Winner_Takes_All"
    ]
  },
  {
    "id": "tv_55136",
    "question": "Which sporting tournament inspired a special edition of Winner Takes All in June 1986?",
    "answers": [
      "The FIFA World Cup",
      "Wimbledon",
      "The Commonwealth Games",
      "The Ryder Cup"
    ],
    "correctAnswer": "The FIFA World Cup",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "ITV",
      "1975–1988",
      "Sport special",
      "Source: https://en.wikipedia.org/wiki/Winner_Takes_All_(game_show)",
      "sport"
    ]
  },
  {
    "id": "tv_55137",
    "question": "In which year did Challenge TV revive Winner Takes All?",
    "answers": [
      "1993",
      "1995",
      "2000",
      "1997"
    ],
    "correctAnswer": "1997",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "Challenge TV",
      "1997",
      "Revival",
      "Source: https://en.wikipedia.org/wiki/Winner_Takes_All_(game_show)"
    ]
  },
  {
    "id": "tv_55138",
    "question": "Who read the questions in the Challenge TV revival of Winner Takes All?",
    "answers": [
      "Vicky McDonald",
      "Carol Vorderman",
      "Gaynor Barnes",
      "Anne Robinson"
    ],
    "correctAnswer": "Gaynor Barnes",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "Challenge TV",
      "1997",
      "Revival",
      "Source: https://ukgameshows.com/ukgs/Winner_Takes_All"
    ]
  },
  {
    "id": "tv_55139",
    "question": "How many episodes were made for the Challenge TV revival of Winner Takes All?",
    "answers": [
      "30",
      "65",
      "50",
      "100"
    ],
    "correctAnswer": "65",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "Challenge TV",
      "1997",
      "Revival",
      "Source: https://en.wikipedia.org/wiki/Winner_Takes_All_(game_show)"
    ]
  },
  {
    "id": "tv_55140",
    "question": "In which town was the Challenge TV revival of Winner Takes All recorded?",
    "answers": [
      "Maidstone",
      "Leeds",
      "Manchester",
      "Norwich"
    ],
    "correctAnswer": "Maidstone",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "Challenge TV",
      "1997",
      "Revival",
      "Source: https://en.wikipedia.org/wiki/Winner_Takes_All_(game_show)"
    ]
  },
  {
    "id": "tv_55141",
    "question": "What did the Challenge TV version of Winner Takes All use for scoring in its final instead of cash?",
    "answers": [
      "Seconds",
      "Playing cards",
      "Audience votes",
      "Points"
    ],
    "correctAnswer": "Points",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "Challenge TV",
      "1997",
      "Revival final",
      "Source: https://ukgameshows.fandom.com/wiki/Winner_Takes_All"
    ]
  },
  {
    "id": "tv_55142",
    "question": "How many successive victories earned the top holiday prize in the Challenge TV revival of Winner Takes All?",
    "answers": [
      "Three",
      "Four",
      "Five",
      "Seven"
    ],
    "correctAnswer": "Five",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "Challenge TV",
      "1997",
      "Revival prizes",
      "Source: https://ukgameshows.fandom.com/wiki/Winner_Takes_All"
    ]
  },
  {
    "id": "tv_55143",
    "question": "Which city was the destination of the top holiday prize on the Challenge TV revival of Winner Takes All?",
    "answers": [
      "New York",
      "Las Vegas",
      "Los Angeles",
      "Miami"
    ],
    "correctAnswer": "Las Vegas",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Winner Takes All",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Winner Takes All",
      "Programme: Winner Takes All",
      "Yorkshire Television",
      "Challenge TV",
      "1997",
      "Revival prizes",
      "Source: https://ukgameshows.fandom.com/wiki/Winner_Takes_All"
    ]
  }
];
if(questions.length!==33||new Set(questions.map(q=>q.id)).size!==questions.length||new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||questions.some((q,i)=>q.id!=='tv_'+(55111+i)||q.answers.length!==4||new Set(q.answers).size!==4||q.answers.filter(a=>a===q.correctAnswer).length!==1||!q.tags.includes('Programme: '+q.topic)||q.dailyEligible!==true))throw Error('Pack 741 validation failed');
module.exports=questions;
