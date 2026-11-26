// PuzzlePilot — Pack 757: Busman's Holiday
// 33 additions; six existing in Pack 221. Eight series, 103 broadcasts, production, announcer, occupational rounds, three eras' prize/endgame changes, documented winning teams, practical challenges, celebrity special and broadcast history. Source pages retrieved for this audit: UKGameshows, TVARK, Wikipedia and TVmaze. Complete episode-by-episode results and music credits not located; BAFTA/RTS searches produced no verified programme awards. Legacy packs 1–20 and 209–222 checked for title references; not a full-bank semantic scan. Live bank unchanged.
'use strict';
const questions = [
  {
    "id": "tv_57216",
    "question": "Which ITV company produced Busman's Holiday?",
    "answers": [
      "Granada Television",
      "Central Television",
      "Yorkshire Television",
      "Thames Television"
    ],
    "correctAnswer": "Granada Television",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Production",
      "Source: https://tvark.org/busmans-holiday"
    ]
  },
  {
    "id": "tv_57217",
    "question": "Who created and produced Busman's Holiday?",
    "answers": [
      "Paul Smith",
      "Stephen Leahy",
      "John Lloyd",
      "David Briggs"
    ],
    "correctAnswer": "Stephen Leahy",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Production",
      "Stephen Leahy",
      "Source: https://tvark.org/busmans-holiday"
    ]
  },
  {
    "id": "tv_57218",
    "question": "Who was the announcer on Busman's Holiday?",
    "answers": [
      "John Benson",
      "Peter Dickson",
      "Charles Foster",
      "Philip Elsmore"
    ],
    "correctAnswer": "Charles Foster",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Announcer",
      "Source: https://en.wikipedia.org/wiki/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57219",
    "question": "How many series of Busman's Holiday were broadcast?",
    "answers": [
      "Six",
      "Seven",
      "Nine",
      "Eight"
    ],
    "correctAnswer": "Eight",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Series Count",
      "1985–1993",
      "Source: https://en.wikipedia.org/wiki/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57220",
    "question": "How many episodes of Busman's Holiday were broadcast altogether?",
    "answers": [
      "103",
      "78",
      "91",
      "104"
    ],
    "correctAnswer": "103",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Episode Count",
      "Source: https://en.wikipedia.org/wiki/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57221",
    "question": "How many contestants made up each team on Busman's Holiday?",
    "answers": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correctAnswer": "Three",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Format",
      "Source: https://www.tvmaze.com/shows/9158/busmans-holiday"
    ]
  },
  {
    "id": "tv_57222",
    "question": "How many teams competed in a regular edition of Busman's Holiday during Julian Pettifer's run?",
    "answers": [
      "Two",
      "Four",
      "Three",
      "Five"
    ],
    "correctAnswer": "Three",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Format",
      "Julian Pettifer",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57223",
    "question": "How many teams competed in the Elton Welsby series of Busman's Holiday?",
    "answers": [
      "Three",
      "Four",
      "Five",
      "Two"
    ],
    "correctAnswer": "Two",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "1993",
      "Format Change",
      "Elton Welsby",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57224",
    "question": "What did contestants on Busman's Holiday normally wear in the studio?",
    "answers": [
      "Their usual work clothes",
      "Matching tracksuits",
      "Evening dress",
      "Traditional dress from their destination"
    ],
    "correctAnswer": "Their usual work clothes",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Format",
      "Source: https://en.wikipedia.org/wiki/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57225",
    "question": "What was the subject of the second round of Busman's Holiday?",
    "answers": [
      "Current affairs",
      "The occupations of the opposing teams",
      "British sporting records",
      "Television programmes"
    ],
    "correctAnswer": "The occupations of the opposing teams",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Rounds",
      "Source: https://en.wikipedia.org/wiki/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57226",
    "question": "What was the focus of the third round of Busman's Holiday?",
    "answers": [
      "The presenter's occupation",
      "The geography of Britain",
      "Each team's own occupation",
      "Holiday prices"
    ],
    "correctAnswer": "Each team's own occupation",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Rounds",
      "Source: https://en.wikipedia.org/wiki/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57227",
    "question": "What was the subject of the last main quiz round of Busman's Holiday?",
    "answers": [
      "A famous traveller",
      "The history of aviation",
      "The previous week's winners",
      "A particular travel destination"
    ],
    "correctAnswer": "A particular travel destination",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Rounds",
      "Source: https://en.wikipedia.org/wiki/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57228",
    "question": "How many possible destinations were teams given to research before the final main round of Busman's Holiday?",
    "answers": [
      "Four",
      "Two",
      "Three",
      "Six"
    ],
    "correctAnswer": "Four",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Final Round",
      "Preparation",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57229",
    "question": "What type of working holiday did the winning team initially earn on Busman's Holiday?",
    "answers": [
      "A round-the-world holiday",
      "A European holiday",
      "A holiday in Australia",
      "A holiday in North America"
    ],
    "correctAnswer": "A European holiday",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Prize",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57230",
    "question": "How could a winning team earn an additional overseas holiday beyond Europe during Julian Pettifer's run on Busman's Holiday?",
    "answers": [
      "Win a telephone vote",
      "Answer a single question before leaving",
      "Return to compete the following week",
      "Trade their original holiday for a mystery prize"
    ],
    "correctAnswer": "Return to compete the following week",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Julian Pettifer",
      "Prize",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57231",
    "question": "What selected the destination for the bonus round during Sarah Kennedy's run of Busman's Holiday?",
    "answers": [
      "A spinning globe",
      "A set of numbered suitcases",
      "A model aeroplane",
      "A departures board"
    ],
    "correctAnswer": "A departures board",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Sarah Kennedy",
      "Endgame",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57232",
    "question": "How many team members tackled the bonus questions during the Sarah Kennedy era of Busman's Holiday?",
    "answers": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": "One",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Sarah Kennedy",
      "Endgame",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57233",
    "question": "What was the name of the final bonus round introduced when Elton Welsby hosted Busman's Holiday?",
    "answers": [
      "Around the World in 80 Days",
      "Around the World in 80 Seconds",
      "Passport to Paradise",
      "The Final Destination"
    ],
    "correctAnswer": "Around the World in 80 Seconds",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "1993",
      "Elton Welsby",
      "Endgame",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57234",
    "question": "What feature of Busman's Holiday allowed viewers to see what the winning teams had done abroad?",
    "answers": [
      "An interview with their travel agent",
      "A postcard read by the announcer",
      "A filmed report on the previous winners' trip",
      "A telephone call to their hotel"
    ],
    "correctAnswer": "A filmed report on the previous winners' trip",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Format",
      "Prize",
      "Source: https://en.wikipedia.org/wiki/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57235",
    "question": "Which signalling system was used by sea cadets in a practical challenge on Busman's Holiday?",
    "answers": [
      "Morse code",
      "Braille",
      "International maritime signal lights",
      "Semaphore"
    ],
    "correctAnswer": "Semaphore",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Practical Challenge",
      "Royal Navy",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57236",
    "question": "Which team's practical challenge involved identifying mistakes made by a driver in a film on Busman's Holiday?",
    "answers": [
      "Driving instructors",
      "Dentists",
      "Helicopter pilots",
      "Firefighters"
    ],
    "correctAnswer": "Driving instructors",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Practical Challenge",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57237",
    "question": "Which occupation won the Busman's Holiday edition featuring wedding photographers and rabbis?",
    "answers": [
      "Wedding photographers",
      "Registrars",
      "Rabbis",
      "Florists"
    ],
    "correctAnswer": "Registrars",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Winning Teams",
      "Wedding",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57238",
    "question": "Which team beat dog groomers and student buskers on Busman's Holiday?",
    "answers": [
      "Dog groomers",
      "Student buskers",
      "Bus drivers",
      "Taxi drivers"
    ],
    "correctAnswer": "Bus drivers",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Winning Teams",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57239",
    "question": "Where were the winning bus drivers on Busman's Holiday reported to have come from?",
    "answers": [
      "Nottingham",
      "Norwich",
      "Newcastle upon Tyne",
      "Northampton"
    ],
    "correctAnswer": "Northampton",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Winning Teams",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57240",
    "question": "Which team defeated dinner ladies and traffic wardens on Busman's Holiday in 1987?",
    "answers": [
      "Football referees",
      "Dinner ladies",
      "Traffic wardens",
      "Cricket umpires"
    ],
    "correctAnswer": "Football referees",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "1987",
      "Winning Teams",
      "sport",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57241",
    "question": "Which two teams were beaten by returning football referees on Busman's Holiday in 1987?",
    "answers": [
      "Dentists and fishmongers",
      "Rock climbers and nuns",
      "Pilots and police officers",
      "Teachers and nurses"
    ],
    "correctAnswer": "Rock climbers and nuns",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "1987",
      "Winning Teams",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57242",
    "question": "Which disaster led to an edition featuring ship workers being withheld from broadcast on Busman's Holiday?",
    "answers": [
      "The King's Cross fire",
      "The Piper Alpha disaster",
      "The Zeebrugge ferry disaster",
      "The Kegworth air disaster"
    ],
    "correctAnswer": "The Zeebrugge ferry disaster",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "1987",
      "Broadcast History",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57243",
    "question": "Which team won twice around the time that a ship-workers edition of Busman's Holiday was withdrawn?",
    "answers": [
      "Police officers",
      "Helicopter pilots",
      "University lecturers",
      "Sports teachers"
    ],
    "correctAnswer": "Sports teachers",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "1987",
      "Winning Teams",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57244",
    "question": "Which Australian soap supplied a team for the 1991 celebrity special of Busman's Holiday?",
    "answers": [
      "Home and Away",
      "Neighbours",
      "A Country Practice",
      "The Flying Doctors"
    ],
    "correctAnswer": "Home and Away",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "1991",
      "Celebrity Special",
      "Home and Away",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57245",
    "question": "Which two other groups competed against Home and Away actors in the 1991 celebrity Busman's Holiday?",
    "answers": [
      "Newsreaders and weather presenters",
      "Television detectives and sports commentators",
      "Comedians and pop singers",
      "Chefs and travel presenters"
    ],
    "correctAnswer": "Television detectives and sports commentators",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "1991",
      "Celebrity Special",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57246",
    "question": "Which type of dancers demonstrated their skills while their captain questioned opponents on Busman's Holiday?",
    "answers": [
      "Ballet dancers",
      "Morris dancers",
      "Ballroom dancers",
      "Tap dancers"
    ],
    "correctAnswer": "Ballroom dancers",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Sarah Kennedy",
      "Practical Challenge",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57247",
    "question": "Which destination was won by a team of clergymen including the Reverend David Smith on Busman's Holiday?",
    "answers": [
      "Jerusalem",
      "Canterbury",
      "Athens",
      "Vatican City"
    ],
    "correctAnswer": "Vatican City",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Winning Teams",
      "Travel",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  },
  {
    "id": "tv_57248",
    "question": "Who was identified alongside Sarah Kennedy in a location photograph taken in Grenada for Busman's Holiday?",
    "answers": [
      "Director Jenny Dodd",
      "Producer Stephen Leahy",
      "Announcer Charles Foster",
      "Presenter Elton Welsby"
    ],
    "correctAnswer": "Director Jenny Dodd",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Busman's Holiday",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Game Shows",
      "Busman's Holiday",
      "Programme: Busman's Holiday",
      "ITV",
      "Sarah Kennedy",
      "Production",
      "Grenada",
      "Source: https://www.ukgameshows.com/ukgs/Busman%27s_Holiday"
    ]
  }
];
if(questions.length!==33||new Set(questions.map(q=>q.id)).size!==questions.length||new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||questions.some((q,i)=>q.id!=='tv_'+(57216+i)||q.answers.length!==4||new Set(q.answers).size!==4||q.answers.filter(a=>a===q.correctAnswer).length!==1||!q.tags.includes('Programme: '+q.topic)||q.dailyEligible!==true))throw Error('Pack 757 validation failed');
module.exports=questions;
