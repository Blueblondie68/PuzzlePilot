// PuzzlePilot — Pack 743: Mock the Week
// 44 additions; seven originals in Pack 220 retained. Original packs 209–222 checked for programme matches. BBC history, format, regulars, revival and selected 2026 episodes, BAFTA and NTA nomination. Current series 23 individual episodes, full guest/challenge audit, existing music theme cross-tags and full-bank semantic duplicate checking remain outstanding. Programme ongoing; January catch-up recommended. Bank unchanged.
'use strict';
const questions = [
  {
    "id": "tv_55208",
    "question": "Who created Mock the Week alongside Dan Patterson?",
    "answers": [
      "David Briggs",
      "Mark Leveson",
      "John Lloyd",
      "Richard Osman"
    ],
    "correctAnswer": "Mark Leveson",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Creators",
      "Source: https://en.wikipedia.org/wiki/Mock_the_Week"
    ]
  },
  {
    "id": "tv_55209",
    "question": "Which improvisational comedy programme was created by the team behind Mock the Week?",
    "answers": [
      "Whose Line Is It Anyway?",
      "The Fast Show",
      "Not the Nine O'Clock News",
      "The Day Today"
    ],
    "correctAnswer": "Whose Line Is It Anyway?",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Format origins",
      "Source: https://en.wikipedia.org/wiki/Mock_the_Week"
    ]
  },
  {
    "id": "tv_55210",
    "question": "Which production company makes Mock the Week?",
    "answers": [
      "Avalon",
      "Hat Trick Productions",
      "Talkback",
      "Angst Productions"
    ],
    "correctAnswer": "Angst Productions",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Production",
      "Source: https://en.wikipedia.org/wiki/Mock_the_Week"
    ]
  },
  {
    "id": "tv_55211",
    "question": "Which song by The Jam is used as the theme of Mock the Week?",
    "answers": [
      "Going Underground",
      "Town Called Malice",
      "News of the World",
      "That's Entertainment"
    ],
    "correctAnswer": "News of the World",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Theme music",
      "Source: https://en.wikipedia.org/wiki/Mock_the_Week"
    ]
  },
  {
    "id": "tv_55212",
    "question": "Where were the first eleven series of Mock the Week recorded?",
    "answers": [
      "The London Studios",
      "BBC Television Centre",
      "Pinewood Studios",
      "Dock10"
    ],
    "correctAnswer": "BBC Television Centre",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Studio",
      "Source: https://en.wikipedia.org/wiki/Mock_the_Week"
    ]
  },
  {
    "id": "tv_55213",
    "question": "Which studio complex housed series twelve to sixteen of Mock the Week?",
    "answers": [
      "The London Studios",
      "Fountain Studios",
      "Dock10",
      "BBC Elstree Centre"
    ],
    "correctAnswer": "The London Studios",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Studio",
      "Source: https://en.wikipedia.org/wiki/Mock_the_Week"
    ]
  },
  {
    "id": "tv_55214",
    "question": "Which studio complex housed series eighteen to twenty of Mock the Week?",
    "answers": [
      "The London Studios",
      "Pinewood Studios",
      "Dock10",
      "BBC Elstree Centre"
    ],
    "correctAnswer": "BBC Elstree Centre",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Studio",
      "Source: https://en.wikipedia.org/wiki/Mock_the_Week"
    ]
  },
  {
    "id": "tv_55215",
    "question": "How many comedians normally compete on Mock the Week, excluding the host?",
    "answers": [
      "Four",
      "Five",
      "Six",
      "Eight"
    ],
    "correctAnswer": "Six",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Format",
      "Source: https://en.wikipedia.org/wiki/Mock_the_Week"
    ]
  },
  {
    "id": "tv_55216",
    "question": "What was the usual scheduled length of an episode of Mock the Week during its BBC run?",
    "answers": [
      "15 minutes",
      "30 minutes",
      "45 minutes",
      "60 minutes"
    ],
    "correctAnswer": "30 minutes",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "BBC format",
      "Source: https://en.wikipedia.org/wiki/Mock_the_Week"
    ]
  },
  {
    "id": "tv_55217",
    "question": "Which Mock the Week round involves identifying a topical story from a photograph?",
    "answers": [
      "Picture of the Week",
      "Wheel of News",
      "Newsreel",
      "Scenes We'd Like to See"
    ],
    "correctAnswer": "Picture of the Week",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Rounds",
      "Source: https://en.wikipedia.org/wiki/Mock_the_Week"
    ]
  },
  {
    "id": "tv_55218",
    "question": "What type of performance does the random topic generator prompt in Mock the Week's Wheel of News?",
    "answers": [
      "Singing",
      "Celebrity impressions only",
      "Silent mime",
      "Stand-up comedy"
    ],
    "correctAnswer": "Stand-up comedy",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Rounds",
      "Source: https://en.wikipedia.org/wiki/Mock_the_Week"
    ]
  },
  {
    "id": "tv_55219",
    "question": "In which Mock the Week round does a comedian provide humorous commentary for silent footage?",
    "answers": [
      "Headliners",
      "Picture of the Week",
      "Newsreel",
      "Wheel of News"
    ],
    "correctAnswer": "Newsreel",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Rounds",
      "Source: https://en.wikipedia.org/wiki/Mock_the_Week"
    ]
  },
  {
    "id": "tv_55220",
    "question": "Which impressionist led the opposing team to Hugh Dennis and Frankie Boyle in the first series of Mock the Week?",
    "answers": [
      "Alistair McGowan",
      "Rory Bremner",
      "Jon Culshaw",
      "Phil Cornwell"
    ],
    "correctAnswer": "Rory Bremner",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Series 1",
      "Source: https://www.comedy.co.uk/tv/mock_the_week/episodes/"
    ]
  },
  {
    "id": "tv_55221",
    "question": "How many newly recorded episodes were made for the first series of Mock the Week before the last recording was cancelled?",
    "answers": [
      "Five",
      "Four",
      "Six",
      "Eight"
    ],
    "correctAnswer": "Five",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Series 1",
      "Source: https://www.comedy.co.uk/tv/mock_the_week/episodes/"
    ]
  },
  {
    "id": "tv_55222",
    "question": "Which comedian became a regular panellist in the third series of Mock the Week?",
    "answers": [
      "Russell Howard",
      "Ed Byrne",
      "Chris Addison",
      "Andy Parsons"
    ],
    "correctAnswer": "Andy Parsons",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Series 3",
      "Source: https://www.comedy.co.uk/tv/mock_the_week/episodes/"
    ]
  },
  {
    "id": "tv_55223",
    "question": "Which comedian officially joined Andy Parsons as a regular for series four of Mock the Week?",
    "answers": [
      "James Acaster",
      "Milton Jones",
      "Russell Howard",
      "Mark Watson"
    ],
    "correctAnswer": "Russell Howard",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Series 4",
      "Source: https://www.comedy.co.uk/tv/mock_the_week/episodes/"
    ]
  },
  {
    "id": "tv_55224",
    "question": "How many episodes were commissioned for the sixth series of Mock the Week?",
    "answers": [
      "Six",
      "Twelve",
      "Eight",
      "Twenty"
    ],
    "correctAnswer": "Twelve",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Series 6",
      "Source: https://www.comedy.co.uk/tv/mock_the_week/episodes/"
    ]
  },
  {
    "id": "tv_55225",
    "question": "Which series of Mock the Week was the first after Frankie Boyle's departure?",
    "answers": [
      "Series eight",
      "Series six",
      "Series seven",
      "Series ten"
    ],
    "correctAnswer": "Series eight",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Series 8",
      "Source: https://www.comedy.co.uk/tv/mock_the_week/episodes/"
    ]
  },
  {
    "id": "tv_55226",
    "question": "Which comedian became Russell Howard's regular replacement during series ten of Mock the Week?",
    "answers": [
      "Ed Byrne",
      "Gary Delaney",
      "Josh Widdicombe",
      "Chris Addison"
    ],
    "correctAnswer": "Chris Addison",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Series 10",
      "Source: https://www.comedy.co.uk/tv/mock_the_week/episodes/"
    ]
  },
  {
    "id": "tv_55227",
    "question": "During which series did Mock the Week celebrate its 100th episode?",
    "answers": [
      "Series eight",
      "Series nine",
      "Series eleven",
      "Series thirteen"
    ],
    "correctAnswer": "Series eleven",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Series 11",
      "Source: https://www.comedy.co.uk/tv/mock_the_week/episodes/"
    ]
  },
  {
    "id": "tv_55228",
    "question": "What was the title of the themed compilation series broadcast in spring 2013?",
    "answers": [
      "Mock the Week Uncovered",
      "Mock the Week Looks Back At...",
      "Mock the Week Revisited",
      "Mock the Week Extra"
    ],
    "correctAnswer": "Mock the Week Looks Back At...",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Compilation series",
      "Source: https://www.comedy.co.uk/tv/mock_the_week_looks_back_at/"
    ]
  },
  {
    "id": "tv_55229",
    "question": "How many episodes comprised Mock the Week Looks Back At...?",
    "answers": [
      "Ten",
      "Four",
      "Six",
      "Twelve"
    ],
    "correctAnswer": "Ten",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Compilation series",
      "Source: https://www.comedy.co.uk/tv/mock_the_week_looks_back_at/"
    ]
  },
  {
    "id": "tv_55230",
    "question": "Which regular panellist announced his departure at the end of the fourteenth series of Mock the Week?",
    "answers": [
      "Hugh Dennis",
      "Frankie Boyle",
      "Russell Howard",
      "Andy Parsons"
    ],
    "correctAnswer": "Andy Parsons",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Series 14",
      "Source: https://www.comedy.co.uk/tv/mock_the_week/episodes/"
    ]
  },
  {
    "id": "tv_55231",
    "question": "What major political event coincided with the return of Mock the Week for series sixteen?",
    "answers": [
      "The 2016 EU referendum",
      "The 2019 general election",
      "The 2017 general election",
      "The 2014 Scottish independence referendum"
    ],
    "correctAnswer": "The 2017 general election",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Series 16",
      "Source: https://www.comedy.co.uk/tv/mock_the_week/episodes/"
    ]
  },
  {
    "id": "tv_55232",
    "question": "Which video conferencing service allowed audiences to attend Mock the Week remotely during series nineteen?",
    "answers": [
      "Skype",
      "Zoom",
      "FaceTime",
      "Microsoft Teams"
    ],
    "correctAnswer": "Zoom",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Series 19",
      "Source: https://www.comedy.co.uk/tv/mock_the_week/episodes/"
    ]
  },
  {
    "id": "tv_55233",
    "question": "Which comedian made his Mock the Week debut during series twenty and later won Strictly Come Dancing?",
    "answers": [
      "Chris McCausland",
      "Chris Ramsey",
      "Chris Addison",
      "Chris Washington"
    ],
    "correctAnswer": "Chris McCausland",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Series 20",
      "Source: https://www.comedy.co.uk/tv/mock_the_week/episodes/"
    ]
  },
  {
    "id": "tv_55234",
    "question": "How many numbered series of Mock the Week aired on the BBC before its move to TLC?",
    "answers": [
      "17",
      "19",
      "23",
      "21"
    ],
    "correctAnswer": "21",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "BBC history",
      "Source: https://en.wikipedia.org/wiki/Mock_the_Week"
    ]
  },
  {
    "id": "tv_55235",
    "question": "What title was used for the two retrospective episodes that ended the original BBC run of Mock the Week?",
    "answers": [
      "The Best of British Comedy",
      "Goodbye Mock the Week",
      "The History of Mock the Week",
      "Mock the Week: The Final Round"
    ],
    "correctAnswer": "The History of Mock the Week",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Series 21",
      "Source: https://en.wikipedia.org/wiki/List_of_Mock_the_Week_episodes"
    ]
  },
  {
    "id": "tv_55236",
    "question": "Which channel revived Mock the Week in 2026?",
    "answers": [
      "Channel 4",
      "TLC",
      "U&Dave",
      "ITV2"
    ],
    "correctAnswer": "TLC",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "TLC",
      "2026",
      "2026 revival",
      "Source: https://rts.org.uk/article/mock-week-return-dara-briain-host"
    ]
  },
  {
    "id": "tv_55237",
    "question": "How long was the scheduled slot for the TLC revival of Mock the Week?",
    "answers": [
      "One hour",
      "30 minutes",
      "45 minutes",
      "90 minutes"
    ],
    "correctAnswer": "One hour",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "TLC",
      "2026",
      "2026 revival",
      "Source: https://press.wbd.com/emea/media-release/tlc-0/tlc-commissions-special-summer-series-mock-week"
    ]
  },
  {
    "id": "tv_55238",
    "question": "Which comedian became the regular panellist for the TLC revival of Mock the Week?",
    "answers": [
      "Rhys Darby",
      "Rhys Thomas",
      "Russell Kane",
      "Rhys James"
    ],
    "correctAnswer": "Rhys James",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "TLC",
      "2026",
      "2026 revival",
      "Source: https://press.wbd.com/emea/media-release/tlc-0/tlc-commissions-special-summer-series-mock-week"
    ]
  },
  {
    "id": "tv_55239",
    "question": "Which former regular returned for the first TLC episode of Mock the Week after last appearing in series nine?",
    "answers": [
      "Frankie Boyle",
      "Rory Bremner",
      "Russell Howard",
      "Chris Addison"
    ],
    "correctAnswer": "Russell Howard",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "TLC",
      "2026",
      "Series 22 episode 1",
      "Source: https://en.wikipedia.org/wiki/List_of_Mock_the_Week_episodes"
    ]
  },
  {
    "id": "tv_55240",
    "question": "Which comedian joined Russell Howard on Rhys James's team in the first TLC episode of Mock the Week?",
    "answers": [
      "Milton Jones",
      "Ahir Shah",
      "Mark Simmons",
      "Scott Bennett"
    ],
    "correctAnswer": "Ahir Shah",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "TLC",
      "2026",
      "Series 22 episode 1",
      "Source: https://en.wikipedia.org/wiki/List_of_Mock_the_Week_episodes"
    ]
  },
  {
    "id": "tv_55241",
    "question": "Which pair joined Angela Barnes on the guest team in the first TLC episode of Mock the Week?",
    "answers": [
      "Ed Byrne and Sara Pascoe",
      "Glenn Moore and Zoe Lyons",
      "Hugh Dennis and Katherine Ryan",
      "Lou Sanders and Ellie Taylor"
    ],
    "correctAnswer": "Ed Byrne and Sara Pascoe",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "TLC",
      "2026",
      "Series 22 episode 1",
      "Source: https://en.wikipedia.org/wiki/List_of_Mock_the_Week_episodes"
    ]
  },
  {
    "id": "tv_55242",
    "question": "How many episodes were commissioned for the 2026 Mock the Week Summer Specials?",
    "answers": [
      "Three",
      "Seven",
      "Nine",
      "Five"
    ],
    "correctAnswer": "Five",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "TLC",
      "2026",
      "2026 summer specials",
      "Source: https://press.wbd.com/emea/media-release/tlc-0/tlc-commissions-special-summer-series-mock-week"
    ]
  },
  {
    "id": "tv_55243",
    "question": "Which comedian was on Sara Pascoe and Ed Gamble's team in the first 2026 summer special of Mock the Week?",
    "answers": [
      "Scott Bennett",
      "Glenn Moore",
      "Josh Pugh",
      "Hugh Dennis"
    ],
    "correctAnswer": "Josh Pugh",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "TLC",
      "2026",
      "2026 summer special 1",
      "Source: https://en.wikipedia.org/wiki/List_of_Mock_the_Week_episodes"
    ]
  },
  {
    "id": "tv_55244",
    "question": "Which American comedian joined Glenn Moore and Hugh Dennis in the second 2026 Mock the Week summer special?",
    "answers": [
      "Katherine Ryan",
      "Michelle Wolf",
      "Janine Harouni",
      "Desiree Burch"
    ],
    "correctAnswer": "Michelle Wolf",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "TLC",
      "2026",
      "2026 summer special 2",
      "Source: https://en.wikipedia.org/wiki/List_of_Mock_the_Week_episodes"
    ]
  },
  {
    "id": "tv_55245",
    "question": "Which comedian joined Glenn Moore and Maisie Adam in the third 2026 Mock the Week summer special?",
    "answers": [
      "Chris Ramsey",
      "Chris Addison",
      "Chris McCausland",
      "Russell Howard"
    ],
    "correctAnswer": "Chris Ramsey",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "TLC",
      "2026",
      "2026 summer special 3",
      "Source: https://en.wikipedia.org/wiki/List_of_Mock_the_Week_episodes"
    ]
  },
  {
    "id": "tv_55246",
    "question": "Which BAFTA category recognised Dara Ó Briain's work on Mock the Week with a nomination in 2012?",
    "answers": [
      "Comedy Writing",
      "Comedy Programme",
      "Features",
      "Entertainment Performance"
    ],
    "correctAnswer": "Entertainment Performance",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "BAFTA nomination",
      "Source: https://www.bafta.org/awards/television/?award-year=2012"
    ]
  },
  {
    "id": "tv_55247",
    "question": "Who won the 2012 Entertainment Performance BAFTA ahead of Mock the Week host Dara Ó Briain?",
    "answers": [
      "Alan Carr",
      "Harry Hill",
      "Graham Norton",
      "Stephen Fry"
    ],
    "correctAnswer": "Graham Norton",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "BAFTA nomination",
      "Source: https://www.bafta.org/awards/television/?award-year=2012"
    ]
  },
  {
    "id": "tv_55248",
    "question": "Which programme won the 2013 Comedy Panel Show National Television Award ahead of Mock the Week?",
    "answers": [
      "Have I Got News for You",
      "QI",
      "Would I Lie to You?",
      "Celebrity Juice"
    ],
    "correctAnswer": "QI",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "NTA nomination",
      "Source: https://www.ukgameshows.com/ukgs/Award_Winners"
    ]
  },
  {
    "id": "tv_55249",
    "question": "What was the title of the first Mock the Week DVD released in 2007?",
    "answers": [
      "Mock the Week: Too Hot for TV",
      "Mock the Week: Unplugged",
      "Mock the Week: The Last Laugh",
      "Mock the Week: Live"
    ],
    "correctAnswer": "Mock the Week: Too Hot for TV",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "DVD",
      "Source: https://en.wikipedia.org/wiki/Mock_the_Week"
    ]
  },
  {
    "id": "tv_55250",
    "question": "Which Mock the Week regular round gave its name to the show's first book, published in 2008?",
    "answers": [
      "Headliners",
      "Wheel of News",
      "Picture of the Week",
      "Scenes We'd Like to See"
    ],
    "correctAnswer": "Scenes We'd Like to See",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "BBC Two",
      "2005–2022",
      "Merchandise",
      "Source: https://en.wikipedia.org/wiki/Mock_the_Week"
    ]
  },
  {
    "id": "tv_55251",
    "question": "How many further series of Mock the Week did TLC commission in July 2026 for 2027?",
    "answers": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": "Three",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Mock the Week",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Mock the Week",
      "Programme: Mock the Week",
      "TLC",
      "2026",
      "2027 commission",
      "Source: https://www.comedy.co.uk/tv/news/8801/mock-the-week-2027-order/"
    ]
  }
];
if(questions.length!==44||new Set(questions.map(q=>q.id)).size!==questions.length||new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||questions.some((q,i)=>q.id!=='tv_'+(55208+i)||q.answers.length!==4||new Set(q.answers).size!==4||q.answers.filter(a=>a===q.correctAnswer).length!==1||!q.tags.includes('Programme: '+q.topic)||q.dailyEligible!==true))throw Error('Pack 743 validation failed');
module.exports=questions;
