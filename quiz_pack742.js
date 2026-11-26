// PuzzlePilot — Pack 742: Shooting Stars
// 64 additions; eight originals in Pack 220 retained. Packs 209–222 checked for exact programme matches. Eight series, pilot, regulars, recurring rounds, selected guests/challenges, specials, production and verified BAFTA and comedy award recognition covered. Not a complete episode-by-episode guest/challenge audit; further awards and full-bank semantic duplicate scan remain outstanding. Bank connection unchanged.
'use strict';
const questions = [
  {
    "id": "tv_55144",
    "question": "Which channel broadcast the original pilot of Shooting Stars?",
    "answers": [
      "BBC One",
      "BBC Two",
      "Channel 4",
      "ITV"
    ],
    "correctAnswer": "BBC Two",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Pilot",
      "Source: https://en.wikipedia.org/wiki/Shooting_Stars_(British_TV_series)"
    ]
  },
  {
    "id": "tv_55145",
    "question": "Which channel first broadcast the two 2002 series of Shooting Stars?",
    "answers": [
      "BBC Choice",
      "BBC Four",
      "BBC One",
      "Channel 4"
    ],
    "correctAnswer": "BBC Choice",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Broadcast history",
      "Source: https://en.wikipedia.org/wiki/Shooting_Stars_(British_TV_series)"
    ]
  },
  {
    "id": "tv_55146",
    "question": "How many regular series of Shooting Stars were made?",
    "answers": [
      "Six",
      "Seven",
      "Ten",
      "Eight"
    ],
    "correctAnswer": "Eight",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Broadcast history",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/episodes/all/"
    ]
  },
  {
    "id": "tv_55147",
    "question": "How many televised editions of Shooting Stars are listed by British Comedy Guide?",
    "answers": [
      "62",
      "82",
      "72",
      "92"
    ],
    "correctAnswer": "72",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Broadcast history",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/episodes/all/"
    ]
  },
  {
    "id": "tv_55148",
    "question": "Which production company made the original series of Shooting Stars?",
    "answers": [
      "Pett Productions",
      "Channel X",
      "Avalon",
      "Hat Trick"
    ],
    "correctAnswer": "Channel X",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Production",
      "Source: https://channelx.co.uk/shows/shooting-stars-series-1/"
    ]
  },
  {
    "id": "tv_55149",
    "question": "Which production company made the final three series of Shooting Stars?",
    "answers": [
      "Pett Productions",
      "Channel X",
      "Celador",
      "12 Yard"
    ],
    "correctAnswer": "Pett Productions",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Production",
      "Source: https://www.ukgameshows.com/ukgs/Shooting_Stars"
    ]
  },
  {
    "id": "tv_55150",
    "question": "Who produced Shooting Stars during its original 1995–1997 run?",
    "answers": [
      "Lisa Clark",
      "Jon Plowman",
      "Geoffrey Perkins",
      "Alan Marke"
    ],
    "correctAnswer": "Alan Marke",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Production",
      "Source: https://en.wikipedia.org/wiki/Shooting_Stars_(British_TV_series)"
    ]
  },
  {
    "id": "tv_55151",
    "question": "Who took over as producer of Shooting Stars for its 2002 return?",
    "answers": [
      "Alan Marke",
      "Lissa Evans",
      "Lisa Clark",
      "Sioned Wiliam"
    ],
    "correctAnswer": "Lisa Clark",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Production",
      "Source: https://en.wikipedia.org/wiki/Shooting_Stars_(British_TV_series)"
    ]
  },
  {
    "id": "tv_55152",
    "question": "Who provided the announcer's voice during the original run and 2002 series of Shooting Stars?",
    "answers": [
      "Peter Dickson",
      "Graham Skidmore",
      "John Sachs",
      "Alan Dedicoat"
    ],
    "correctAnswer": "Graham Skidmore",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Voiceover",
      "Source: https://en.wikipedia.org/wiki/Shooting_Stars_(British_TV_series)"
    ]
  },
  {
    "id": "tv_55153",
    "question": "Who provided the announcer's voice during the 2008–2011 revival of Shooting Stars?",
    "answers": [
      "Nico Tatarowicz",
      "Graham Skidmore",
      "Mitch Johnson",
      "Roger Tilling"
    ],
    "correctAnswer": "Nico Tatarowicz",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Voiceover",
      "Source: https://en.wikipedia.org/wiki/Shooting_Stars_(British_TV_series)"
    ]
  },
  {
    "id": "tv_55154",
    "question": "Which two broadcasters captained the teams in the original Shooting Stars pilot?",
    "answers": [
      "Mark Lamarr and Ulrika Jonsson",
      "Will Self and Jack Dee",
      "Chris Evans and Simon Bates",
      "Jonathan Ross and Danny Baker"
    ],
    "correctAnswer": "Jonathan Ross and Danny Baker",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Pilot",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/episodes/0/1/"
    ]
  },
  {
    "id": "tv_55155",
    "question": "What were the two teams called in the Shooting Stars pilot?",
    "answers": [
      "Eagles and Falcons",
      "Jets and Rockets",
      "Starbirds and Helicopters",
      "Doves and Crows"
    ],
    "correctAnswer": "Starbirds and Helicopters",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Pilot",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55156",
    "question": "Which character from The Smell of Reeves and Mortimer acted as the judge in the Shooting Stars pilot?",
    "answers": [
      "Dave the Barman",
      "Uncle Peter",
      "George Dawes",
      "Angelos Epithemiou"
    ],
    "correctAnswer": "Uncle Peter",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Pilot",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/about/"
    ]
  },
  {
    "id": "tv_55157",
    "question": "Who played Uncle Peter, the judge in the Shooting Stars pilot?",
    "answers": [
      "Charlie Chuck",
      "Matt Lucas",
      "Dan Skinner",
      "David Walliams"
    ],
    "correctAnswer": "Charlie Chuck",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Pilot",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/about/"
    ]
  },
  {
    "id": "tv_55158",
    "question": "Which EastEnders actress was on Jonathan Ross's team with Martin Clunes in the Shooting Stars pilot?",
    "answers": [
      "June Brown",
      "Pam St Clement",
      "Barbara Windsor",
      "Wendy Richard"
    ],
    "correctAnswer": "Wendy Richard",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Pilot",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/episodes/0/1/"
    ]
  },
  {
    "id": "tv_55159",
    "question": "What replaced the later Dove from Above prop in the original Shooting Stars pilot?",
    "answers": [
      "A red umbrella",
      "A green trunk",
      "A blue suitcase",
      "A yellow hat"
    ],
    "correctAnswer": "A blue suitcase",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Pilot",
      "Source: https://en.wikipedia.org/wiki/Shooting_Stars_(British_TV_series)"
    ]
  },
  {
    "id": "tv_55160",
    "question": "Which writer replaced Mark Lamarr as a team captain when Shooting Stars returned in 2002?",
    "answers": [
      "Stephen Fry",
      "Will Self",
      "Ian Hislop",
      "David Baddiel"
    ],
    "correctAnswer": "Will Self",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series four and five",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55161",
    "question": "Who temporarily replaced Ulrika Jonsson as a captain for a 2002 special of Shooting Stars?",
    "answers": [
      "Sara Cox",
      "Zoe Ball",
      "Emma Forbes",
      "Kate Garraway"
    ],
    "correctAnswer": "Sara Cox",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "2002 special",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55162",
    "question": "Which comedian was a permanent member of Ulrika Jonsson's team during the fourth and fifth series of Shooting Stars?",
    "answers": [
      "Peter Kay",
      "Lee Mack",
      "Sean Lock",
      "Johnny Vegas"
    ],
    "correctAnswer": "Johnny Vegas",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series four and five",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55163",
    "question": "Who played Angelos Epithemiou on Shooting Stars?",
    "answers": [
      "Rhys Thomas",
      "Matt Lucas",
      "Dan Renton Skinner",
      "David Walliams"
    ],
    "correctAnswer": "Dan Renton Skinner",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Regular characters",
      "Source: https://en.wikipedia.org/wiki/Shooting_Stars_(British_TV_series)"
    ]
  },
  {
    "id": "tv_55164",
    "question": "What was Angelos Epithemiou's occupation in Shooting Stars?",
    "answers": [
      "Taxi driver",
      "Burger van owner",
      "Postman",
      "Window cleaner"
    ],
    "correctAnswer": "Burger van owner",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Regular characters",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/episodes/6/"
    ]
  },
  {
    "id": "tv_55165",
    "question": "In which series did Angelos Epithemiou replace George Dawes as scorekeeper on Shooting Stars?",
    "answers": [
      "Series seven",
      "Series four",
      "Series five",
      "Series six"
    ],
    "correctAnswer": "Series seven",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series seven",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/about/"
    ]
  },
  {
    "id": "tv_55166",
    "question": "Which musical instrument did George Dawes play when announcing the scores on Shooting Stars?",
    "answers": [
      "Piano",
      "Trumpet",
      "Guitar",
      "Drums"
    ],
    "correctAnswer": "Drums",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "George Dawes",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/about/"
    ]
  },
  {
    "id": "tv_55167",
    "question": "What did George Dawes wear instead of the originally proposed nappy on Shooting Stars?",
    "answers": [
      "A blue sailor suit",
      "A green tracksuit",
      "A pink romper suit",
      "A yellow dinner jacket"
    ],
    "correctAnswer": "A pink romper suit",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "George Dawes",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/about/"
    ]
  },
  {
    "id": "tv_55168",
    "question": "How many members including the captain made up each team on Shooting Stars?",
    "answers": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correctAnswer": "Three",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Format",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/about/"
    ]
  },
  {
    "id": "tv_55169",
    "question": "What did the apparent film and television excerpts in the regular film-clip round of Shooting Stars usually consist of?",
    "answers": [
      "Parodies performed by the show's cast",
      "Original cinema trailers",
      "Advertisements submitted by viewers",
      "Live news reports"
    ],
    "correctAnswer": "Parodies performed by the show's cast",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Film clip round",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/about/"
    ]
  },
  {
    "id": "tv_55170",
    "question": "What selected a panellist to perform an impression on Shooting Stars?",
    "answers": [
      "A spinning wheel",
      "A numbered ball",
      "A telephone call",
      "The Random Light"
    ],
    "correctAnswer": "The Random Light",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Impressions round",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/about/"
    ]
  },
  {
    "id": "tv_55171",
    "question": "What were panellists trying to identify when Vic Reeves performed in his deliberately unintelligible club singer style on Shooting Stars?",
    "answers": [
      "A film character",
      "A football team",
      "A song",
      "A television presenter"
    ],
    "correctAnswer": "A song",
    "difficulty": "Easy",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Club singer",
      "Source: https://en.wikipedia.org/wiki/Shooting_Stars_(British_TV_series)"
    ]
  },
  {
    "id": "tv_55172",
    "question": "How many subject words were carried by the Dove from Above prop on Shooting Stars?",
    "answers": [
      "Four",
      "Six",
      "Five",
      "Eight"
    ],
    "correctAnswer": "Six",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Dove round",
      "Source: https://en.wikipedia.org/wiki/Shooting_Stars_(British_TV_series)"
    ]
  },
  {
    "id": "tv_55173",
    "question": "Which remote-controlled prop replaced the Dove from Above during series four of Shooting Stars?",
    "answers": [
      "The Wonderful, Wonderful Car",
      "The Amazing Flying Carpet",
      "The Magic Bus",
      "The Incredible Tractor"
    ],
    "correctAnswer": "The Wonderful, Wonderful Car",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series four",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/about/"
    ]
  },
  {
    "id": "tv_55174",
    "question": "What was Donald Cox, the replacement question-delivery character in series five of Shooting Stars?",
    "answers": [
      "A badger",
      "A bear",
      "A rabbit",
      "A fox"
    ],
    "correctAnswer": "A fox",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series five",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/about/"
    ]
  },
  {
    "id": "tv_55175",
    "question": "Who voiced Donald Cox on Shooting Stars?",
    "answers": [
      "Dan Renton Skinner",
      "Matt Lucas",
      "Rhys Thomas",
      "David Walliams"
    ],
    "correctAnswer": "Rhys Thomas",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series five",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/about/"
    ]
  },
  {
    "id": "tv_55176",
    "question": "What drink was associated with summoning Donald Cox on Shooting Stars?",
    "answers": [
      "Whisky",
      "Gin",
      "Beer",
      "Brandy"
    ],
    "correctAnswer": "Gin",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series five",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/about/"
    ]
  },
  {
    "id": "tv_55177",
    "question": "Which performance skill did guests use to interpret a subject in the Maverick Round on Shooting Stars?",
    "answers": [
      "Dance",
      "Mime alone",
      "Ventriloquism",
      "Opera"
    ],
    "correctAnswer": "Dance",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Maverick Round",
      "Source: https://en.wikipedia.org/wiki/Shooting_Stars_(British_TV_series)"
    ]
  },
  {
    "id": "tv_55178",
    "question": "How many points did George Dawes normally award for the Maverick Round performances on Shooting Stars?",
    "answers": [
      "One",
      "Five",
      "Ten",
      "None"
    ],
    "correctAnswer": "None",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Maverick Round",
      "Source: https://en.wikipedia.org/wiki/Shooting_Stars_(British_TV_series)"
    ]
  },
  {
    "id": "tv_55179",
    "question": "Who selected the member of the winning team to perform the final challenge on Shooting Stars?",
    "answers": [
      "The losing captain",
      "The studio audience",
      "The winning captain",
      "The show's announcer"
    ],
    "correctAnswer": "The winning captain",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Final challenge",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/about/"
    ]
  },
  {
    "id": "tv_55180",
    "question": "Which comedian was protected by a toy shield while trying not to be knocked off a podium by stuffed animals in a Shooting Stars challenge?",
    "answers": [
      "Jack Dee",
      "Mark Lamarr",
      "Will Self",
      "Johnny Vegas"
    ],
    "correctAnswer": "Mark Lamarr",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Final challenge",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/about/"
    ]
  },
  {
    "id": "tv_55181",
    "question": "Which actor had to balance roast chickens on Les Dennis's back in a Shooting Stars challenge?",
    "answers": [
      "Martin Clunes",
      "Neil Morrissey",
      "Rowan Atkinson",
      "David Jason"
    ],
    "correctAnswer": "Martin Clunes",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Final challenge",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/about/"
    ]
  },
  {
    "id": "tv_55182",
    "question": "Which EastEnders actress and nightclub owner appeared together on Mark Lamarr's team in the first regular episode of Shooting Stars?",
    "answers": [
      "Patsy Palmer and Norman Pace",
      "Wendy Richard and Noddy Holder",
      "Leslie Ash and Syd Little",
      "Martine McCutcheon and Peter Stringfellow"
    ],
    "correctAnswer": "Martine McCutcheon and Peter Stringfellow",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series 1 episode 1",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55183",
    "question": "Which Pulp singer appeared alongside Carol Vorderman in the second regular episode of Shooting Stars?",
    "answers": [
      "Richard Ashcroft",
      "Brett Anderson",
      "Jarvis Cocker",
      "Damon Albarn"
    ],
    "correctAnswer": "Jarvis Cocker",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series 1 episode 2",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55184",
    "question": "Which comedy double act appeared on opposite teams in the fifth episode of the first series of Shooting Stars?",
    "answers": [
      "Cannon and Ball",
      "Hale and Pace",
      "Little and Large",
      "French and Saunders"
    ],
    "correctAnswer": "Hale and Pace",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series 1 episode 5",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55185",
    "question": "Which comedy double act appeared on opposite teams in the opening episode of series two of Shooting Stars?",
    "answers": [
      "Cannon and Ball",
      "Little and Large",
      "Hale and Pace",
      "Mel and Griff"
    ],
    "correctAnswer": "Cannon and Ball",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series 2 episode 1",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55186",
    "question": "Which singer appeared alongside Alice Beer on Mark Lamarr's team in series two, episode two of Shooting Stars?",
    "answers": [
      "Gary Barlow",
      "Mark Owen",
      "Ronan Keating",
      "Robbie Williams"
    ],
    "correctAnswer": "Robbie Williams",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series 2 episode 2",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55187",
    "question": "Which Catchphrase presenter was teamed with Zoe Ball in series two, episode twelve of Shooting Stars?",
    "answers": [
      "Nick Weir",
      "Stephen Mulhern",
      "Roy Walker",
      "Jimmy Tarbuck"
    ],
    "correctAnswer": "Roy Walker",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series 2 episode 12",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55188",
    "question": "Which Trainspotting actor appeared with Emma Forbes on Mark Lamarr's team in the 1996 Christmas Shooting Stars?",
    "answers": [
      "Ewan McGregor",
      "Ewen Bremner",
      "Robert Carlyle",
      "Jonny Lee Miller"
    ],
    "correctAnswer": "Ewen Bremner",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Christmas special 1996",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes",
      "christmas"
    ]
  },
  {
    "id": "tv_55189",
    "question": "Which singer appeared with Tania Bryer on Mark Lamarr's team in the third-series opener of Shooting Stars?",
    "answers": [
      "Leo Sayer",
      "Chris Rea",
      "Elton John",
      "David Essex"
    ],
    "correctAnswer": "Leo Sayer",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series 3 episode 1",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55190",
    "question": "Which magician's assistant appeared with Bradley Walsh in series four, episode four of Shooting Stars?",
    "answers": [
      "Fay Presto",
      "Sophie Evans",
      "Samantha Fox",
      "Debbie McGee"
    ],
    "correctAnswer": "Debbie McGee",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series 4 episode 4",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55191",
    "question": "Which film director was Ulrika Jonsson's guest in series four, episode five of Shooting Stars?",
    "answers": [
      "Alan Parker",
      "Ken Loach",
      "Michael Winner",
      "Mike Leigh"
    ],
    "correctAnswer": "Michael Winner",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series 4 episode 5",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55192",
    "question": "What was the title of the documentary about Shooting Stars shown immediately before the 2008 anniversary episode?",
    "answers": [
      "Shooting Stars: The Final Word",
      "Shooting Stars: The Inside Story",
      "Shooting Stars: Behind the Dove",
      "Shooting Stars: The Big Quiz"
    ],
    "correctAnswer": "Shooting Stars: The Inside Story",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "2008 special",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/episodes/all/"
    ]
  },
  {
    "id": "tv_55193",
    "question": "Which rapper appeared in the 2008 anniversary episode of Shooting Stars?",
    "answers": [
      "Dizzee Rascal",
      "Tinie Tempah",
      "Example",
      "Professor Green"
    ],
    "correctAnswer": "Dizzee Rascal",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "2008 special",
      "Source: https://en.wikipedia.org/wiki/Shooting_Stars_(British_TV_series)"
    ]
  },
  {
    "id": "tv_55194",
    "question": "Which presenter from The One Show appeared in the first episode of the 2009 Shooting Stars series?",
    "answers": [
      "Alex Jones",
      "Gabby Logan",
      "Tess Daly",
      "Christine Bleakley"
    ],
    "correctAnswer": "Christine Bleakley",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series 6 episode 1",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/episodes/6/"
    ]
  },
  {
    "id": "tv_55195",
    "question": "Which actor appeared alongside Angelos Epithemiou on Ulrika's team during series six of Shooting Stars?",
    "answers": [
      "Daniel Craig",
      "Simon Pegg",
      "Paddy Considine",
      "Colin Firth"
    ],
    "correctAnswer": "Paddy Considine",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series six",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/episodes/6/"
    ]
  },
  {
    "id": "tv_55196",
    "question": "Which Hairy Biker was a guest on Ulrika's team in the fourth episode of series six of Shooting Stars?",
    "answers": [
      "Si King",
      "Dave Myers",
      "James Martin",
      "Gino D'Acampo"
    ],
    "correctAnswer": "Dave Myers",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series 6 episode 4",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55197",
    "question": "Which broadcaster appeared with Noel Fielding and Zoe Salmon in the final episode of series six of Shooting Stars?",
    "answers": [
      "Tony Blackburn",
      "Ken Bruce",
      "Steve Wright",
      "Terry Wogan"
    ],
    "correctAnswer": "Tony Blackburn",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series 6 episode 6",
      "Source: https://www.comedy.co.uk/tv/shooting_stars/episodes/6/"
    ]
  },
  {
    "id": "tv_55198",
    "question": "Which EastEnders actress appeared alongside Example in the opening episode of series seven of Shooting Stars?",
    "answers": [
      "Jessie Wallace",
      "Patsy Palmer",
      "Diane Parish",
      "Linda Henry"
    ],
    "correctAnswer": "Linda Henry",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series 7 episode 1",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55199",
    "question": "Which football pundit appeared with Brendan Cole on Ulrika's team in series seven, episode three of Shooting Stars?",
    "answers": [
      "Jeff Stelling",
      "Gary Lineker",
      "Chris Kamara",
      "Alan Hansen"
    ],
    "correctAnswer": "Chris Kamara",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series 7 episode 3",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55200",
    "question": "Which Danish actress appeared alongside Graeme Hawley in the eighth-series opener of Shooting Stars?",
    "answers": [
      "Sofie Gråbøl",
      "Brigitte Nielsen",
      "Sidse Babett Knudsen",
      "Connie Nielsen"
    ],
    "correctAnswer": "Brigitte Nielsen",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series 8 episode 1",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55201",
    "question": "Which wildlife presenter appeared with Tess Daly in series eight, episode two of Shooting Stars?",
    "answers": [
      "Chris Packham",
      "Steve Backshall",
      "Bill Oddie",
      "Simon King"
    ],
    "correctAnswer": "Chris Packham",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series 8 episode 2",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55202",
    "question": "Which EastEnders actor appeared alongside Gabby Logan in series eight, episode three of Shooting Stars?",
    "answers": [
      "Steve McFadden",
      "Adam Woodyatt",
      "Scott Maslen",
      "Jake Wood"
    ],
    "correctAnswer": "Jake Wood",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Series 8 episode 3",
      "Source: https://en.wikipedia.org/wiki/List_of_Shooting_Stars_episodes"
    ]
  },
  {
    "id": "tv_55203",
    "question": "Which television award category did Shooting Stars win at the 1997 BAFTAs?",
    "answers": [
      "Comedy Performance",
      "Comedy Programme or Series",
      "Light Entertainment",
      "Factual Series"
    ],
    "correctAnswer": "Light Entertainment",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "BAFTA win",
      "Source: https://www.bafta.org/awards/television/?award-year=1997"
    ]
  },
  {
    "id": "tv_55204",
    "question": "Which show beat Shooting Stars to the 1996 BAFTA for Light Entertainment?",
    "answers": [
      "The Fast Show",
      "The Mrs Merton Show",
      "Father Ted",
      "Ruby Wax Meets"
    ],
    "correctAnswer": "The Mrs Merton Show",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "BAFTA nomination",
      "Source: https://www.bafta.org/awards/television/?award-year=1996"
    ]
  },
  {
    "id": "tv_55205",
    "question": "Which director was credited with Alan Marke for the 1997 BAFTA-winning Shooting Stars?",
    "answers": [
      "Mark Mylod",
      "Dominic Brigstocke",
      "Bob Spiers",
      "Peter Cattaneo"
    ],
    "correctAnswer": "Mark Mylod",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "BAFTA win",
      "Source: https://www.bafta.org/awards/television/?award-year=1997"
    ]
  },
  {
    "id": "tv_55206",
    "question": "Which category nominated Shooting Stars at the British Comedy Awards for 2010?",
    "answers": [
      "Best Sitcom",
      "Best Sketch Show",
      "Best Comedy Film",
      "Best Comedy Panel Show"
    ],
    "correctAnswer": "Best Comedy Panel Show",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "British Comedy Awards",
      "Source: https://www.tvguide.com/tvshows/shooting-stars/1000031637/"
    ]
  },
  {
    "id": "tv_55207",
    "question": "What physical format accompanied the 1996 Shooting Stars game book for its club singer round?",
    "answers": [
      "A vinyl LP",
      "A VHS cassette",
      "A CD",
      "A DVD"
    ],
    "correctAnswer": "A CD",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Shooting Stars",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Comedy Panel Shows",
      "Shooting Stars",
      "Programme: Shooting Stars",
      "BBC",
      "1993–2011",
      "Merchandise",
      "Source: https://en.wikipedia.org/wiki/Shooting_Stars_(British_TV_series)"
    ]
  }
];
if(questions.length!==64||new Set(questions.map(q=>q.id)).size!==questions.length||new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||questions.some((q,i)=>q.id!=='tv_'+(55144+i)||q.answers.length!==4||new Set(q.answers).size!==4||q.answers.filter(a=>a===q.correctAnswer).length!==1||!q.tags.includes('Programme: '+q.topic)||q.dailyEligible!==true))throw Error('Pack 742 validation failed');
module.exports=questions;
