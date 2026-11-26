// PuzzlePilot — Pack 759: Comedy World Cup (UK)
// 37 additions; five legacy questions retained in Pack 221. Seven episodes, eight team line-ups, all match scores, named rounds, production and theme credit. Scores for episodes 3, 5 and 6 rely on the secondary episode table; captain swap accounts conflict, so no new captain-swap question. No confirmed major awards or nominations found in the reviewed sources. Packs 1–20 and 209–222 checked for title references, not a full-bank semantic scan. Live bank unchanged.
'use strict';
const questions = [
  {
    "id": "tv_57364",
    "question": "How many editions of Comedy World Cup were broadcast?",
    "answers": [
      "Five",
      "Seven",
      "Six",
      "Eight"
    ],
    "correctAnswer": "Seven",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Series Count",
      "Source: https://www.ukgameshows.com/ukgs/Comedy_World_Cup"
    ]
  },
  {
    "id": "tv_57365",
    "question": "How many teams entered the knockout competition on Comedy World Cup?",
    "answers": [
      "Eight",
      "Four",
      "Six",
      "Ten"
    ],
    "correctAnswer": "Eight",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Tournament Entrants",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/episodes/1/"
    ]
  },
  {
    "id": "tv_57366",
    "question": "What was the usual age-based composition of each Comedy World Cup team?",
    "answers": [
      "Three recent newcomers",
      "A presenter and two television critics",
      "Three retired comedians",
      "A captain, a comedy veteran and a newcomer"
    ],
    "correctAnswer": "A captain, a comedy veteran and a newcomer",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Team Format",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/"
    ]
  },
  {
    "id": "tv_57367",
    "question": "Which production company made Comedy World Cup?",
    "answers": [
      "Avalon",
      "Zeppotron",
      "Open Mike Productions",
      "Hat Trick Productions"
    ],
    "correctAnswer": "Open Mike Productions",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Production",
      "Source: https://www.channel4.com/press/news/comedy-world-cup-coming-soon"
    ]
  },
  {
    "id": "tv_57368",
    "question": "Who commissioned Comedy World Cup for Channel 4?",
    "answers": [
      "Peter Fincham",
      "Justin Gorman",
      "Danny Cohen",
      "Shane Allen"
    ],
    "correctAnswer": "Justin Gorman",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Commissioning",
      "Source: https://www.channel4.com/press/news/comedy-world-cup-coming-soon"
    ]
  },
  {
    "id": "tv_57369",
    "question": "Which pair were executive producers of Comedy World Cup?",
    "answers": [
      "Andrew Beint and Addison Cresswell",
      "Richard Osman and Alexander Armstrong",
      "Jon Thoday and Richard Allen-Turner",
      "Jimmy Mulville and Denise O'Donoghue"
    ],
    "correctAnswer": "Andrew Beint and Addison Cresswell",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Executive Producers",
      "Source: https://www.channel4.com/press/news/comedy-world-cup-coming-soon"
    ]
  },
  {
    "id": "tv_57370",
    "question": "Which pair are credited as directors on Comedy World Cup?",
    "answers": [
      "Paul Wheeler and Ian Lorimer",
      "Richard Valentine and Simon Staffurth",
      "Graham C. Williams and Diccon Ramsay",
      "Chris Howe and John McCormack"
    ],
    "correctAnswer": "Chris Howe and John McCormack",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Directors",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/cast_crew/"
    ]
  },
  {
    "id": "tv_57371",
    "question": "Who was the series producer of Comedy World Cup?",
    "answers": [
      "Colin Pigott",
      "Steve Andrews",
      "Anthony Caveney",
      "Damian Coldwell"
    ],
    "correctAnswer": "Anthony Caveney",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Series Producer",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/cast_crew/"
    ]
  },
  {
    "id": "tv_57372",
    "question": "Who composed the music for Comedy World Cup?",
    "answers": [
      "Howard Goodall",
      "Damian Coldwell",
      "Philip Pope",
      "Paul Farrer"
    ],
    "correctAnswer": "Damian Coldwell",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Theme Music",
      "Source: https://www.ukgameshows.com/ukgs/Comedy_World_Cup"
    ]
  },
  {
    "id": "tv_57373",
    "question": "At which studios was Comedy World Cup recorded?",
    "answers": [
      "Teddington Studios",
      "Pinewood Studios",
      "Fountain Studios",
      "Elstree Studios"
    ],
    "correctAnswer": "Teddington Studios",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Recording Location",
      "Source: https://en.wikipedia.org/wiki/Comedy_World_Cup"
    ]
  },
  {
    "id": "tv_57374",
    "question": "Which two performers joined Jo Brand's team in the opening edition of Comedy World Cup?",
    "answers": [
      "Sara Pascoe and Clive Anderson",
      "Roisin Conaty and Barry Cryer",
      "Kevin Bridges and Stan Boardman",
      "Shappi Khorsandi and Dave Spikey"
    ],
    "correctAnswer": "Shappi Khorsandi and Dave Spikey",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Episode 1",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/episodes/1/1/"
    ]
  },
  {
    "id": "tv_57375",
    "question": "Which two performers played alongside Jason Manford on Comedy World Cup?",
    "answers": [
      "Daniel Sloss and Joe Pasquale",
      "Josh Widdicombe and Mick Miller",
      "Paul Chowdhry and Nicholas Parsons",
      "Jon Richardson and the Chuckle Brothers"
    ],
    "correctAnswer": "Paul Chowdhry and Nicholas Parsons",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Episode 1",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/episodes/1/1/"
    ]
  },
  {
    "id": "tv_57376",
    "question": "Which team won the opening match on Comedy World Cup, and by what score?",
    "answers": [
      "Jo Brand's team, 15–14",
      "Jason Manford's team, 15–14",
      "Jason Manford's team, 25–11",
      "Jo Brand's team, 27–13"
    ],
    "correctAnswer": "Jason Manford's team, 15–14",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Episode 1 Result",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/episodes/1/1/"
    ]
  },
  {
    "id": "tv_57377",
    "question": "Who joined Alan Carr's team on Comedy World Cup?",
    "answers": [
      "Sara Pascoe and Clive Anderson",
      "Shappi Khorsandi and Dave Spikey",
      "Roisin Conaty and Barry Cryer",
      "Josh Widdicombe and Mick Miller"
    ],
    "correctAnswer": "Sara Pascoe and Clive Anderson",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Episode 2",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/episodes/1/2/"
    ]
  },
  {
    "id": "tv_57378",
    "question": "Who competed alongside Micky Flanagan on Comedy World Cup?",
    "answers": [
      "Daniel Sloss and Joe Pasquale",
      "Paul Chowdhry and Nicholas Parsons",
      "Jon Richardson and the Chuckle Brothers",
      "Kevin Bridges and Stan Boardman"
    ],
    "correctAnswer": "Kevin Bridges and Stan Boardman",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Episode 2",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/episodes/1/2/"
    ]
  },
  {
    "id": "tv_57379",
    "question": "What was Alan Carr's team's winning score against Micky Flanagan's team on Comedy World Cup?",
    "answers": [
      "15–14",
      "27–13",
      "25–11",
      "21–20"
    ],
    "correctAnswer": "25–11",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Episode 2 Result",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/episodes/1/2/"
    ]
  },
  {
    "id": "tv_57380",
    "question": "To whose memory was the second episode of Comedy World Cup dedicated?",
    "answers": [
      "David Croft",
      "Michael Hurll",
      "Jeremy Lloyd",
      "Ray Galton"
    ],
    "correctAnswer": "Michael Hurll",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Episode 2 Dedication",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/episodes/1/2/"
    ]
  },
  {
    "id": "tv_57381",
    "question": "Which two comedians joined Phill Jupitus's team on Comedy World Cup?",
    "answers": [
      "Roisin Conaty and Barry Cryer",
      "Sara Pascoe and Clive Anderson",
      "Shappi Khorsandi and Dave Spikey",
      "Kevin Bridges and Stan Boardman"
    ],
    "correctAnswer": "Roisin Conaty and Barry Cryer",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Episode 3",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/episodes/1/3/"
    ]
  },
  {
    "id": "tv_57382",
    "question": "Which two performers were originally announced as Johnny Vegas's teammates on Comedy World Cup?",
    "answers": [
      "Paul Chowdhry and Nicholas Parsons",
      "Daniel Sloss and Joe Pasquale",
      "Jon Richardson and the Chuckle Brothers",
      "Josh Widdicombe and Mick Miller"
    ],
    "correctAnswer": "Josh Widdicombe and Mick Miller",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Episode 3",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/episodes/1/3/"
    ]
  },
  {
    "id": "tv_57383",
    "question": "What was the winning score for Johnny Vegas's team against Phill Jupitus's team on Comedy World Cup?",
    "answers": [
      "25–11",
      "15–14",
      "26–14",
      "27–13"
    ],
    "correctAnswer": "26–14",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Episode 3 Result",
      "Source: https://en.wikipedia.org/wiki/Comedy_World_Cup"
    ]
  },
  {
    "id": "tv_57384",
    "question": "Which performers competed alongside Andy Parsons on Comedy World Cup?",
    "answers": [
      "Josh Widdicombe and Mick Miller",
      "Jon Richardson and the Chuckle Brothers",
      "Kevin Bridges and Stan Boardman",
      "Paul Chowdhry and Nicholas Parsons"
    ],
    "correctAnswer": "Jon Richardson and the Chuckle Brothers",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Episode 4",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/episodes/1/4/"
    ]
  },
  {
    "id": "tv_57385",
    "question": "Who were Omid Djalili's teammates on Comedy World Cup?",
    "answers": [
      "Daniel Sloss and Joe Pasquale",
      "Jon Richardson and the Chuckle Brothers",
      "Kevin Bridges and Stan Boardman",
      "Josh Widdicombe and Mick Miller"
    ],
    "correctAnswer": "Daniel Sloss and Joe Pasquale",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Episode 4",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/episodes/1/4/"
    ]
  },
  {
    "id": "tv_57386",
    "question": "What was Omid Djalili's team's winning score against Andy Parsons's team on Comedy World Cup?",
    "answers": [
      "26–14",
      "25–11",
      "20–19",
      "27–13"
    ],
    "correctAnswer": "27–13",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Episode 4 Result",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/episodes/1/4/"
    ]
  },
  {
    "id": "tv_57387",
    "question": "Whose team did Johnny Vegas's team beat in the first Comedy World Cup semi-final?",
    "answers": [
      "Jason Manford's",
      "Omid Djalili's",
      "Alan Carr's",
      "Jo Brand's"
    ],
    "correctAnswer": "Alan Carr's",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Episode 5",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/episodes/1/"
    ]
  },
  {
    "id": "tv_57388",
    "question": "What was the score in the first Comedy World Cup semi-final, won by Johnny Vegas's team?",
    "answers": [
      "26–14",
      "25–16",
      "20–19",
      "21–20"
    ],
    "correctAnswer": "25–16",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Episode 5 Result",
      "Source: https://en.wikipedia.org/wiki/Comedy_World_Cup"
    ]
  },
  {
    "id": "tv_57389",
    "question": "Which team knocked Omid Djalili's team out of Comedy World Cup in the second semi-final?",
    "answers": [
      "Jason Manford's",
      "Alan Carr's",
      "Phill Jupitus's",
      "Micky Flanagan's"
    ],
    "correctAnswer": "Jason Manford's",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Episode 6",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/episodes/1/"
    ]
  },
  {
    "id": "tv_57390",
    "question": "By what score did Jason Manford's team win the second Comedy World Cup semi-final?",
    "answers": [
      "21–20",
      "25–16",
      "15–14",
      "20–19"
    ],
    "correctAnswer": "20–19",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Episode 6 Result",
      "Source: https://en.wikipedia.org/wiki/Comedy_World_Cup"
    ]
  },
  {
    "id": "tv_57391",
    "question": "What was the winning score in the Comedy World Cup grand final?",
    "answers": [
      "20–19",
      "25–16",
      "21–20",
      "27–13"
    ],
    "correctAnswer": "21–20",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Episode 7 Final Result",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/episodes/1/7/"
    ]
  },
  {
    "id": "tv_57392",
    "question": "In the Comedy World Cup round The Year in Question, what linked the television clips?",
    "answers": [
      "Their shared director",
      "The year they were originally broadcast",
      "Their original channel",
      "Their leading actor"
    ],
    "correctAnswer": "The year they were originally broadcast",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "The Year in Question",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/"
    ]
  },
  {
    "id": "tv_57393",
    "question": "Who performed the routines that teams had to identify in The Young Ones round of Comedy World Cup?",
    "answers": [
      "Schoolchildren",
      "Retired comedians",
      "The opposing team captains",
      "Television newsreaders"
    ],
    "correctAnswer": "Schoolchildren",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "The Young Ones",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/"
    ]
  },
  {
    "id": "tv_57394",
    "question": "What did contestants identify in the Comedy World Cup round Book Group?",
    "answers": [
      "A sitcom adapted from a novel",
      "A comedian's favourite children's book",
      "A fictional character from a comedy film",
      "The comedian who wrote the autobiography being quoted"
    ],
    "correctAnswer": "The comedian who wrote the autobiography being quoted",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Book Group",
      "Source: https://en.wikipedia.org/wiki/Comedy_World_Cup"
    ]
  },
  {
    "id": "tv_57395",
    "question": "What unusual alteration was made to film stills in the Comedy World Cup picture round?",
    "answers": [
      "All the costumes were recoloured",
      "The images were printed upside down",
      "The visible parts of the actors' bodies were removed digitally",
      "All scenery was replaced with cartoons"
    ],
    "correctAnswer": "The visible parts of the actors' bodies were removed digitally",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Picture Round",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/"
    ]
  },
  {
    "id": "tv_57396",
    "question": "What did teams try to pick out in Comedy World Cup's Sitcom Graveyard?",
    "answers": [
      "The sitcom with the most episodes",
      "The genuine sitcom synopsis among invented ones",
      "The comedy series with the lowest ratings",
      "The original actor in a sitcom remake"
    ],
    "correctAnswer": "The genuine sitcom synopsis among invented ones",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Sitcom Graveyard",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/"
    ]
  },
  {
    "id": "tv_57397",
    "question": "What type of clips featured in the Comedy World Cup round Mind Your Language?",
    "answers": [
      "Foreign adaptations of British sitcoms",
      "British comedians speaking invented languages",
      "Silent films with new soundtracks",
      "American stand-up routines translated into Latin"
    ],
    "correctAnswer": "Foreign adaptations of British sitcoms",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Mind Your Language",
      "Source: https://en.wikipedia.org/wiki/Comedy_World_Cup"
    ]
  },
  {
    "id": "tv_57398",
    "question": "How long did a team member have to answer questions in the Comedy World Cup round In the Spotlight?",
    "answers": [
      "Thirty seconds",
      "Two minutes",
      "Three minutes",
      "One minute"
    ],
    "correctAnswer": "One minute",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "In the Spotlight",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/"
    ]
  },
  {
    "id": "tv_57399",
    "question": "What did a team have to predict in Comedy World Cup's What Happens Next round?",
    "answers": [
      "The next opposing team captain",
      "The next question category",
      "The continuation of an interrupted comedy clip",
      "The final programme ratings"
    ],
    "correctAnswer": "The continuation of an interrupted comedy clip",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "What Happens Next",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/"
    ]
  },
  {
    "id": "tv_57400",
    "question": "How did panellists claim the chance to answer in the final quick-fire round of Comedy World Cup?",
    "answers": [
      "By raising score cards",
      "By using their buzzers",
      "By writing their answers",
      "By throwing a ball"
    ],
    "correctAnswer": "By using their buzzers",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Comedy World Cup",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Comedy World Cup",
      "Programme: Comedy World Cup",
      "Channel 4",
      "2012",
      "Quick-fire Round",
      "Source: https://www.comedy.co.uk/tv/comedy_world_cup/"
    ]
  }
];
if(questions.length!==37||new Set(questions.map(q=>q.id)).size!==questions.length||new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||questions.some((q,i)=>q.id!=='tv_'+(57364+i)||q.answers.length!==4||new Set(q.answers).size!==4||q.answers.filter(a=>a===q.correctAnswer).length!==1||!q.tags.includes('Programme: '+q.topic)||q.dailyEligible!==true))throw Error('Pack 759 validation failed');
module.exports=questions;
