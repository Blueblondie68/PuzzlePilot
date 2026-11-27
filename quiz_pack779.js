// PuzzlePilot — Pack 779: Picture Slam
// 73 additions; seven originals in Pack 222 retained. All 32 confirmed broadcast episodes through 5 September 2026 represented. Original rules distinguished from later changes; ordinary contestant line-ups, both celebrity specials, documented series 3 winner and moments, production and music. Christmas 2026 special pending; most episode results and image boards remain unverified. Awards search found a secondary report of an NTA longlist but not independently corroborated, so excluded. Legacy packs 1–20 and 209–222 checked for title references; no full-bank semantic/ID scan. Live bank unchanged.
'use strict';
const questions = [
  {
    "id": "tv_58041",
    "question": "Which two production labels made the original Picture Slam?",
    "answers": [
      "Hat Trick and Avalon",
      "Triple Brew Media and Objective Media Group Scotland",
      "12 Yard and Possessed",
      "Tuesday's Child and Studio Lambert"
    ],
    "correctAnswer": "Triple Brew Media and Objective Media Group Scotland",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Production",
      "Source: https://www.ukgameshows.com/ukgs/Picture_Slam"
    ]
  },
  {
    "id": "tv_58042",
    "question": "Who composed the music for Picture Slam?",
    "answers": [
      "Banks & Wag",
      "Paul Farrer",
      "Howard Goodall",
      "Philip Pope"
    ],
    "correctAnswer": "Banks & Wag",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Music",
      "Source: https://www.thecomposerworks.com/news/picture-slam/"
    ]
  },
  {
    "id": "tv_58043",
    "question": "Who was the series producer of the original run of Picture Slam?",
    "answers": [
      "Dan Patterson",
      "Leon Wilson",
      "Richard Osman",
      "Adeel Amini"
    ],
    "correctAnswer": "Adeel Amini",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Production",
      "Source: https://www.thecomposerworks.com/news/picture-slam/"
    ]
  },
  {
    "id": "tv_58044",
    "question": "How many episodes were in the first series of Picture Slam?",
    "answers": [
      "Six",
      "Ten",
      "Eight",
      "Twelve"
    ],
    "correctAnswer": "Eight",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 1",
      "Source: https://www.objectivemedia.group/news/view/alan-carrs-picture-slam-returns-to-bbc-one-for-second-series"
    ]
  },
  {
    "id": "tv_58045",
    "question": "How many episodes were broadcast in the second series of Picture Slam?",
    "answers": [
      "Six",
      "Ten",
      "Eight",
      "Twelve"
    ],
    "correctAnswer": "Ten",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 2",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/2"
    ]
  },
  {
    "id": "tv_58046",
    "question": "How many episodes were in the third series of Picture Slam?",
    "answers": [
      "Six",
      "Four",
      "Eight",
      "Ten"
    ],
    "correctAnswer": "Six",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 3",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/3"
    ]
  },
  {
    "id": "tv_58047",
    "question": "Which company handles international format rights for Picture Slam?",
    "answers": [
      "Fremantle",
      "Banijay Rights",
      "ITV Studios",
      "All3Media International"
    ],
    "correctAnswer": "All3Media International",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Distribution",
      "Source: https://www.objectivemedia.group/news/view/picture-slam"
    ]
  },
  {
    "id": "tv_58048",
    "question": "Which company created the licensed Picture Slam board game?",
    "answers": [
      "Hasbro",
      "Ravensburger",
      "Big Sky Games",
      "Gibsons"
    ],
    "correctAnswer": "Big Sky Games",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Merchandise",
      "Source: https://bigskygames.co.uk/products/picture-slam"
    ]
  },
  {
    "id": "tv_58049",
    "question": "How many pictures were on each team's first board in the original Picture Slam format?",
    "answers": [
      "Three",
      "Four",
      "Five",
      "Six"
    ],
    "correctAnswer": "Four",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Original Format",
      "Source: https://www.ukgameshows.com/ukgs/Picture_Slam"
    ]
  },
  {
    "id": "tv_58050",
    "question": "How long did teams have for their first board in the original Picture Slam?",
    "answers": [
      "30 seconds",
      "20 seconds",
      "45 seconds",
      "60 seconds"
    ],
    "correctAnswer": "30 seconds",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Original Format",
      "Source: https://www.ukgameshows.com/ukgs/Picture_Slam"
    ]
  },
  {
    "id": "tv_58051",
    "question": "How many pictures appeared on the second board in the original Picture Slam?",
    "answers": [
      "Four",
      "Six",
      "Eight",
      "Five"
    ],
    "correctAnswer": "Five",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Original Format",
      "Source: https://www.ukgameshows.com/ukgs/Picture_Slam"
    ]
  },
  {
    "id": "tv_58052",
    "question": "How much was each correct answer worth on the opening boards of the original Picture Slam?",
    "answers": [
      "£25",
      "£100",
      "£50",
      "£200"
    ],
    "correctAnswer": "£50",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Original Format",
      "Source: https://www.bothersbar.co.uk/?p=14543"
    ]
  },
  {
    "id": "tv_58053",
    "question": "How much extra did clearing an opening board earn in the original Picture Slam?",
    "answers": [
      "£50",
      "£100",
      "£150",
      "£250"
    ],
    "correctAnswer": "£100",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Original Format",
      "Source: https://www.bothersbar.co.uk/?p=14543"
    ]
  },
  {
    "id": "tv_58054",
    "question": "How long did a team have for the first Picture Swipe in the original format?",
    "answers": [
      "One minute",
      "30 seconds",
      "45 seconds",
      "90 seconds"
    ],
    "correctAnswer": "One minute",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Original Picture Swipe",
      "Source: https://www.bothersbar.co.uk/?p=14543"
    ]
  },
  {
    "id": "tv_58055",
    "question": "How many consecutive correct answers earned a slam in the original Picture Swipe round?",
    "answers": [
      "Three",
      "Five",
      "Six",
      "Four"
    ],
    "correctAnswer": "Four",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Original Picture Swipe",
      "Source: https://www.bothersbar.co.uk/?p=14543"
    ]
  },
  {
    "id": "tv_58056",
    "question": "What happened to the team with the smallest bank after the first Picture Swipe in the original Picture Slam?",
    "answers": [
      "Their bank was doubled",
      "They chose the next category",
      "They were eliminated",
      "They received an extra minute"
    ],
    "correctAnswer": "They were eliminated",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Original Picture Swipe",
      "Source: https://www.bothersbar.co.uk/?p=14543"
    ]
  },
  {
    "id": "tv_58057",
    "question": "What was the original round with individually chosen themed boards on Picture Slam called?",
    "answers": [
      "Picture Twist",
      "Picture Battle",
      "Photo Finish",
      "Super Swipe"
    ],
    "correctAnswer": "Picture Battle",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Original Picture Battle",
      "Source: https://www.bothersbar.co.uk/?p=14543"
    ]
  },
  {
    "id": "tv_58058",
    "question": "How many themed categories were offered in the original Picture Battle on Picture Slam?",
    "answers": [
      "Four",
      "Two",
      "Six",
      "Eight"
    ],
    "correctAnswer": "Four",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Original Picture Battle",
      "Source: https://www.ukgameshows.com/ukgs/Picture_Slam"
    ]
  },
  {
    "id": "tv_58059",
    "question": "How many images appeared on each themed Picture Battle board in the original Picture Slam?",
    "answers": [
      "Four",
      "Five",
      "Eight",
      "Six"
    ],
    "correctAnswer": "Six",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Original Picture Battle",
      "Source: https://www.ukgameshows.com/ukgs/Picture_Slam"
    ]
  },
  {
    "id": "tv_58060",
    "question": "How much time did a player have to complete their own Picture Battle board in the original Picture Slam?",
    "answers": [
      "30 seconds",
      "60 seconds",
      "45 seconds",
      "90 seconds"
    ],
    "correctAnswer": "45 seconds",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Original Picture Battle",
      "Source: https://www.ukgameshows.com/ukgs/Picture_Slam"
    ]
  },
  {
    "id": "tv_58061",
    "question": "What happened to pictures missed in the original Picture Battle on Picture Slam?",
    "answers": [
      "They were saved for the final",
      "The opposition could identify them for cash",
      "Their values doubled for the same player",
      "They were removed without another chance"
    ],
    "correctAnswer": "The opposition could identify them for cash",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Original Picture Battle",
      "Source: https://www.bothersbar.co.uk/?p=14543"
    ]
  },
  {
    "id": "tv_58062",
    "question": "What caused control to switch between teams in the original head-to-head Picture Swipe?",
    "answers": [
      "An incorrect or missed answer",
      "A coin toss",
      "Every fourth answer",
      "An audience vote"
    ],
    "correctAnswer": "An incorrect or missed answer",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Original Head-to-Head",
      "Source: https://www.ukgameshows.com/ukgs/Picture_Slam"
    ]
  },
  {
    "id": "tv_58063",
    "question": "What is the final round of Picture Slam called?",
    "answers": [
      "Final Swipe",
      "Picture Battle",
      "Picture Twist",
      "Super Slam"
    ],
    "correctAnswer": "Super Slam",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Final",
      "Source: https://www.tvzoneuk.com/post/pr-pictureslam-s2e10"
    ]
  },
  {
    "id": "tv_58064",
    "question": "How many images were in the original Super Slam final on Picture Slam?",
    "answers": [
      "Eight",
      "Ten",
      "Twelve",
      "Fifteen"
    ],
    "correctAnswer": "Twelve",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Original Super Slam",
      "Source: https://www.bothersbar.co.uk/?p=14543"
    ]
  },
  {
    "id": "tv_58065",
    "question": "How much time was allowed in the original Super Slam final?",
    "answers": [
      "30 seconds",
      "90 seconds",
      "60 seconds",
      "120 seconds"
    ],
    "correctAnswer": "90 seconds",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Original Super Slam",
      "Source: https://www.bothersbar.co.uk/?p=14543"
    ]
  },
  {
    "id": "tv_58066",
    "question": "How many correct answers secured the team's bank in the original twelve-picture Super Slam?",
    "answers": [
      "Eight",
      "Six",
      "Seven",
      "Nine"
    ],
    "correctAnswer": "Eight",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Original Super Slam",
      "Source: https://www.bothersbar.co.uk/?p=14543"
    ]
  },
  {
    "id": "tv_58067",
    "question": "What help did a lifeline give finalists in the original Picture Slam?",
    "answers": [
      "The last letter of the answer",
      "A choice of two pictures",
      "An extra thirty seconds",
      "The initials of the answer"
    ],
    "correctAnswer": "The initials of the answer",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Original Super Slam",
      "Source: https://www.bothersbar.co.uk/?p=14543"
    ]
  },
  {
    "id": "tv_58068",
    "question": "Which named round was introduced in the second series of Picture Slam alongside a new buzzer round?",
    "answers": [
      "Picture Battle",
      "Picture Swipe",
      "Picture Twist",
      "Super Slam"
    ],
    "correctAnswer": "Picture Twist",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 2 Rules",
      "Source: https://www.tvzoneuk.com/post/pr-pictureslam-s2e10"
    ]
  },
  {
    "id": "tv_58069",
    "question": "How many pictures did the Super Slam winners need to identify in the December 2025 episode featuring Fraser and Aileen?",
    "answers": [
      "Eight",
      "Ten",
      "Twelve",
      "Fifteen"
    ],
    "correctAnswer": "Ten",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 3 Format",
      "Source: https://www.pressandjournal.co.uk/fp/news/6915838/aberdeen-primary-school-teacher-alan-carr-picture-slam/"
    ]
  },
  {
    "id": "tv_58070",
    "question": "Which pair won the jackpot in the fifth episode of series three of Picture Slam?",
    "answers": [
      "Fraser and Aileen",
      "Gemma and Andy",
      "Asha and Adam",
      "Jack and Benny"
    ],
    "correctAnswer": "Fraser and Aileen",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 3 Episode 5",
      "Source: https://www.pressandjournal.co.uk/fp/news/6915838/aberdeen-primary-school-teacher-alan-carr-picture-slam/"
    ]
  },
  {
    "id": "tv_58071",
    "question": "Which England footballer did Fraser and Aileen fail to recognise on Picture Slam?",
    "answers": [
      "Lucy Bronze",
      "Beth Mead",
      "Alessia Russo",
      "Leah Williamson"
    ],
    "correctAnswer": "Leah Williamson",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 3 Episode 5",
      "Source: https://www.pressandjournal.co.uk/fp/news/6915838/aberdeen-primary-school-teacher-alan-carr-picture-slam/"
    ]
  },
  {
    "id": "tv_58072",
    "question": "Which novelist did Fraser and Aileen miss during Picture Swipe on Picture Slam?",
    "answers": [
      "Ian Rankin",
      "John Grisham",
      "Stephen King",
      "Lee Child"
    ],
    "correctAnswer": "Stephen King",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 3 Episode 5",
      "Source: https://www.pressandjournal.co.uk/fp/news/6915838/aberdeen-primary-school-teacher-alan-carr-picture-slam/"
    ]
  },
  {
    "id": "tv_58073",
    "question": "Which plant did Aileen identify to reach the Super Slam on Picture Slam?",
    "answers": [
      "Aloe vera",
      "Yucca",
      "Rubber plant",
      "Spider plant"
    ],
    "correctAnswer": "Yucca",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 3 Episode 5",
      "Source: https://www.pressandjournal.co.uk/fp/news/6915838/aberdeen-primary-school-teacher-alan-carr-picture-slam/"
    ]
  },
  {
    "id": "tv_58074",
    "question": "Which comic-book character did Fraser and Aileen identify in their Super Slam?",
    "answers": [
      "Desperate Dan",
      "Dennis the Menace",
      "Billy Whizz",
      "Roger the Dodger"
    ],
    "correctAnswer": "Desperate Dan",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 3 Episode 5",
      "Source: https://www.pressandjournal.co.uk/fp/news/6915838/aberdeen-primary-school-teacher-alan-carr-picture-slam/"
    ]
  },
  {
    "id": "tv_58075",
    "question": "How much time did Fraser and Aileen have left when they completed their winning Super Slam?",
    "answers": [
      "9 seconds",
      "19 seconds",
      "39 seconds",
      "29 seconds"
    ],
    "correctAnswer": "29 seconds",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 3 Episode 5",
      "Source: https://www.pressandjournal.co.uk/fp/news/6915838/aberdeen-primary-school-teacher-alan-carr-picture-slam/"
    ]
  },
  {
    "id": "tv_58076",
    "question": "What musical instrument did Fraser Thomson hope to buy with his Picture Slam winnings?",
    "answers": [
      "Violin",
      "Saxophone",
      "Piano",
      "Drum kit"
    ],
    "correctAnswer": "Piano",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 3 Episode 5",
      "Source: https://www.pressandjournal.co.uk/fp/news/6915838/aberdeen-primary-school-teacher-alan-carr-picture-slam/"
    ]
  },
  {
    "id": "tv_58077",
    "question": "Which series of Picture Slam first introduced celebrity editions?",
    "answers": [
      "The first",
      "The fourth",
      "The second",
      "The third"
    ],
    "correctAnswer": "The fourth",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 4 Specials",
      "Source: https://www.objectivemedia.group/news/view/picture-slam"
    ]
  },
  {
    "id": "tv_58078",
    "question": "What type of causes benefited from contestants' winnings in the celebrity editions of Picture Slam?",
    "answers": [
      "Their chosen charities",
      "Their previous schools only",
      "Their television networks",
      "Their favourite sports clubs only"
    ],
    "correctAnswer": "Their chosen charities",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 4 Specials",
      "Source: https://www.tvzoneuk.com/post/alancarrpictureslam-05sept26"
    ]
  },
  {
    "id": "tv_58079",
    "question": "Which soap actress partnered Sue Cleaver in the first 2026 celebrity Picture Slam?",
    "answers": [
      "Jamie-Lee O'Donnell",
      "Kelle Bryan",
      "Ellie Taylor",
      "Charlie Brooks"
    ],
    "correctAnswer": "Charlie Brooks",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 4 Episode 7",
      "charity",
      "Source: https://www.tvzoneuk.com/post/pr-alancarrpictureslam-290826"
    ]
  },
  {
    "id": "tv_58080",
    "question": "Who partnered Richie Anderson in the first 2026 celebrity Picture Slam?",
    "answers": [
      "Will Best",
      "Gareth Malone",
      "Jason Mohammed",
      "Lee Latchford-Evans"
    ],
    "correctAnswer": "Jason Mohammed",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 4 Episode 7",
      "charity",
      "Source: https://www.tvzoneuk.com/post/pr-alancarrpictureslam-290826"
    ]
  },
  {
    "id": "tv_58081",
    "question": "Who was Lee Latchford-Evans's teammate in the first celebrity Picture Slam?",
    "answers": [
      "Fleur East",
      "Kelle Bryan",
      "Steph McGovern",
      "Ellie Taylor"
    ],
    "correctAnswer": "Kelle Bryan",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 4 Episode 7",
      "charity",
      "Source: https://www.tvzoneuk.com/post/pr-alancarrpictureslam-290826"
    ]
  },
  {
    "id": "tv_58082",
    "question": "Who partnered Will Best in the second 2026 celebrity Picture Slam?",
    "answers": [
      "Fleur East",
      "Ellie Taylor",
      "Charlie Brooks",
      "Sue Cleaver"
    ],
    "correctAnswer": "Fleur East",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 4 Episode 8",
      "charity",
      "Source: https://www.tvzoneuk.com/post/alancarrpictureslam-05sept26"
    ]
  },
  {
    "id": "tv_58083",
    "question": "Which presenter partnered Gareth Malone in the second 2026 celebrity Picture Slam?",
    "answers": [
      "Fleur East",
      "Kelle Bryan",
      "Charlie Brooks",
      "Steph McGovern"
    ],
    "correctAnswer": "Steph McGovern",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 4 Episode 8",
      "charity",
      "Source: https://www.tvzoneuk.com/post/alancarrpictureslam-05sept26"
    ]
  },
  {
    "id": "tv_58084",
    "question": "Which Derry Girls actress partnered Ellie Taylor in the second celebrity Picture Slam?",
    "answers": [
      "Nicola Coughlan",
      "Saoirse-Monica Jackson",
      "Jamie-Lee O'Donnell",
      "Louisa Harland"
    ],
    "correctAnswer": "Jamie-Lee O'Donnell",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 4 Episode 8",
      "charity",
      "Source: https://www.tvzoneuk.com/post/alancarrpictureslam-05sept26"
    ]
  },
  {
    "id": "tv_58085",
    "question": "Which pair competed against Lou and Jude and Sibtain and Umar in Picture Slam?",
    "answers": [
      "Astrid and Rob",
      "Steph and Jo",
      "Jay and Abi",
      "Debs and Hong"
    ],
    "correctAnswer": "Steph and Jo",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 1 Episode 1",
      "Lou and Jude",
      "Sibtain and Umar",
      "Steph and Jo",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/1"
    ]
  },
  {
    "id": "tv_58086",
    "question": "Which pair competed against Astrid and Rob and Jay and Abi in Picture Slam?",
    "answers": [
      "Debs and Hong",
      "Sibtain and Umar",
      "Steph and Jo",
      "Erin and Emma"
    ],
    "correctAnswer": "Debs and Hong",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 1 Episode 2",
      "Astrid and Rob",
      "Jay and Abi",
      "Debs and Hong",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/1"
    ]
  },
  {
    "id": "tv_58087",
    "question": "Which pair competed against Erin and Emma and Lil and Nick in Picture Slam?",
    "answers": [
      "Steph and Jo",
      "Astrid and Rob",
      "Jay and Abi",
      "Ryan and Kin"
    ],
    "correctAnswer": "Ryan and Kin",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 1 Episode 3",
      "Erin and Emma",
      "Lil and Nick",
      "Ryan and Kin",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/1"
    ]
  },
  {
    "id": "tv_58088",
    "question": "Which pair competed against Lauren and Louise and Sam and Shaun in Picture Slam?",
    "answers": [
      "Astrid and Rob",
      "Jay and Abi",
      "Alex and Lena",
      "Debs and Hong"
    ],
    "correctAnswer": "Alex and Lena",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 1 Episode 4",
      "Lauren and Louise",
      "Sam and Shaun",
      "Alex and Lena",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/1"
    ]
  },
  {
    "id": "tv_58089",
    "question": "Which pair competed against Karen and John and Sharon and Amrita in Picture Slam?",
    "answers": [
      "Jay and Abi",
      "Cal and David",
      "Debs and Hong",
      "Erin and Emma"
    ],
    "correctAnswer": "Cal and David",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 1 Episode 5",
      "Karen and John",
      "Sharon and Amrita",
      "Cal and David",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/1"
    ]
  },
  {
    "id": "tv_58090",
    "question": "Which pair competed against Natalie and Lisa and Catherine and Matt in Picture Slam?",
    "answers": [
      "Gaz and Daniel",
      "Lou and Jude",
      "Sibtain and Umar",
      "Steph and Jo"
    ],
    "correctAnswer": "Gaz and Daniel",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 1 Episode 6",
      "Natalie and Lisa",
      "Catherine and Matt",
      "Gaz and Daniel",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/1"
    ]
  },
  {
    "id": "tv_58091",
    "question": "Which pair competed against James and Amy and Angelika and Annabel in Picture Slam?",
    "answers": [
      "Sibtain and Umar",
      "Steph and Jo",
      "Astrid and Rob",
      "Jody and Mike"
    ],
    "correctAnswer": "Jody and Mike",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 1 Episode 7",
      "James and Amy",
      "Angelika and Annabel",
      "Jody and Mike",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/1"
    ]
  },
  {
    "id": "tv_58092",
    "question": "Which pair competed against Jamie John and Josh and Ruby and Lesley in Picture Slam?",
    "answers": [
      "Steph and Jo",
      "Astrid and Rob",
      "Iain and Jaclyn",
      "Jay and Abi"
    ],
    "correctAnswer": "Iain and Jaclyn",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 1 Episode 8",
      "Jamie John and Josh",
      "Ruby and Lesley",
      "Iain and Jaclyn",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/1"
    ]
  },
  {
    "id": "tv_58093",
    "question": "Which pair competed against Daniel and Neil and Ruth and Michelle in Picture Slam?",
    "answers": [
      "Ann and Steven",
      "Candice and Dan",
      "Khamisha and Jack",
      "Ella and Alex"
    ],
    "correctAnswer": "Candice and Dan",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 2 Episode 1",
      "Daniel and Neil",
      "Ruth and Michelle",
      "Candice and Dan",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/2"
    ]
  },
  {
    "id": "tv_58094",
    "question": "Which pair competed against Ann and Steven and Khamisha and Jack in Picture Slam?",
    "answers": [
      "Ella and Alex",
      "Ruth and Michelle",
      "Candice and Dan",
      "Matty and Harvey"
    ],
    "correctAnswer": "Ella and Alex",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 2 Episode 2",
      "Ann and Steven",
      "Khamisha and Jack",
      "Ella and Alex",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/2"
    ]
  },
  {
    "id": "tv_58095",
    "question": "Which pair competed against Matty and Harvey and Emilie and Kathy in Picture Slam?",
    "answers": [
      "Candice and Dan",
      "Ann and Steven",
      "Khamisha and Jack",
      "Patsy and Dave"
    ],
    "correctAnswer": "Patsy and Dave",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 2 Episode 3",
      "Matty and Harvey",
      "Emilie and Kathy",
      "Patsy and Dave",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/2"
    ]
  },
  {
    "id": "tv_58096",
    "question": "Which pair competed against Stewart and Ross and Amy and Anwar in Picture Slam?",
    "answers": [
      "Ann and Steven",
      "Khamisha and Jack",
      "George and Danielle",
      "Ella and Alex"
    ],
    "correctAnswer": "George and Danielle",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 2 Episode 4",
      "Stewart and Ross",
      "Amy and Anwar",
      "George and Danielle",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/2"
    ]
  },
  {
    "id": "tv_58097",
    "question": "Which pair competed against Sas and David and George and Joe in Picture Slam?",
    "answers": [
      "Khamisha and Jack",
      "Sanjay and Kavi",
      "Ella and Alex",
      "Matty and Harvey"
    ],
    "correctAnswer": "Sanjay and Kavi",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 2 Episode 5",
      "Sas and David",
      "George and Joe",
      "Sanjay and Kavi",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/2"
    ]
  },
  {
    "id": "tv_58098",
    "question": "Which pair competed against Gaynor and Natalie and Mica and Elodie in Picture Slam?",
    "answers": [
      "Isaac and Gordon",
      "Daniel and Neil",
      "Ruth and Michelle",
      "Candice and Dan"
    ],
    "correctAnswer": "Isaac and Gordon",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 2 Episode 6",
      "Gaynor and Natalie",
      "Mica and Elodie",
      "Isaac and Gordon",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/2"
    ]
  },
  {
    "id": "tv_58099",
    "question": "Which pair competed against Nic and Corin and Alex and David in Picture Slam?",
    "answers": [
      "Ruth and Michelle",
      "Candice and Dan",
      "Ann and Steven",
      "Abbie and Maddy"
    ],
    "correctAnswer": "Abbie and Maddy",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 2 Episode 7",
      "Nic and Corin",
      "Alex and David",
      "Abbie and Maddy",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/2"
    ]
  },
  {
    "id": "tv_58100",
    "question": "Which pair competed against Rosie and Bekah and Ciaran and Ethan in Picture Slam?",
    "answers": [
      "Candice and Dan",
      "Ann and Steven",
      "Tony and Dalv",
      "Khamisha and Jack"
    ],
    "correctAnswer": "Tony and Dalv",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 2 Episode 8",
      "Rosie and Bekah",
      "Ciaran and Ethan",
      "Tony and Dalv",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/2"
    ]
  },
  {
    "id": "tv_58101",
    "question": "Which pair competed against Sharon and Kevin and Tam Alexis and Justin in Picture Slam?",
    "answers": [
      "Ann and Steven",
      "Jodie and Victoria",
      "Khamisha and Jack",
      "Ella and Alex"
    ],
    "correctAnswer": "Jodie and Victoria",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 2 Episode 9",
      "Sharon and Kevin",
      "Tam Alexis and Justin",
      "Jodie and Victoria",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/2"
    ]
  },
  {
    "id": "tv_58102",
    "question": "Which pair competed against Tre and Maz and Lucy and Stephen in Picture Slam?",
    "answers": [
      "Jade and Curtis",
      "Khamisha and Jack",
      "Ella and Alex",
      "Matty and Harvey"
    ],
    "correctAnswer": "Jade and Curtis",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 2 Episode 10",
      "Tre and Maz",
      "Lucy and Stephen",
      "Jade and Curtis",
      "Source: https://www.tvzoneuk.com/post/pr-pictureslam-s2e10"
    ]
  },
  {
    "id": "tv_58103",
    "question": "Which pair competed against Angie and Mollie and Sean and Lee in Picture Slam?",
    "answers": [
      "Jack and Hannah",
      "Jacqui and Lola",
      "Mel and Liz",
      "Emily and Chris"
    ],
    "correctAnswer": "Emily and Chris",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 3 Episode 1",
      "Angie and Mollie",
      "Sean and Lee",
      "Emily and Chris",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/3"
    ]
  },
  {
    "id": "tv_58104",
    "question": "Which pair competed against Jack and Hannah and Jacqui and Lola in Picture Slam?",
    "answers": [
      "Sean and Lee",
      "Emily and Chris",
      "Mel and Liz",
      "Dipak and Manisha"
    ],
    "correctAnswer": "Mel and Liz",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 3 Episode 2",
      "Jack and Hannah",
      "Jacqui and Lola",
      "Mel and Liz",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/3"
    ]
  },
  {
    "id": "tv_58105",
    "question": "Which pair competed against Dipak and Manisha and Derek and Stuart in Picture Slam?",
    "answers": [
      "Emily and Chris",
      "Vikki and Fraser",
      "Jack and Hannah",
      "Jacqui and Lola"
    ],
    "correctAnswer": "Vikki and Fraser",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 3 Episode 3",
      "Dipak and Manisha",
      "Derek and Stuart",
      "Vikki and Fraser",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/3"
    ]
  },
  {
    "id": "tv_58106",
    "question": "Which pair competed against Emily and Mycul and Emefa and Zoe in Picture Slam?",
    "answers": [
      "Ryan and Charles",
      "Jack and Hannah",
      "Jacqui and Lola",
      "Mel and Liz"
    ],
    "correctAnswer": "Ryan and Charles",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 3 Episode 4",
      "Emily and Mycul",
      "Emefa and Zoe",
      "Ryan and Charles",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/3"
    ]
  },
  {
    "id": "tv_58107",
    "question": "Which pair competed against Jack and Benny and Billy and Lee in Picture Slam?",
    "answers": [
      "Angie and Mollie",
      "Sean and Lee",
      "Emily and Chris",
      "Farrah and Zeenat"
    ],
    "correctAnswer": "Farrah and Zeenat",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 3 Episode 6",
      "Jack and Benny",
      "Billy and Lee",
      "Farrah and Zeenat",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/3"
    ]
  },
  {
    "id": "tv_58108",
    "question": "Which pair competed against Selin and Harin and Gerard and Jeremy in Picture Slam?",
    "answers": [
      "Olivia and Danny",
      "Will and Charmain",
      "Kev and Bex",
      "Sharon and Lucy"
    ],
    "correctAnswer": "Kev and Bex",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 4 Episode 1",
      "Selin and Harin",
      "Gerard and Jeremy",
      "Kev and Bex",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/4"
    ]
  },
  {
    "id": "tv_58109",
    "question": "Which pair competed against Olivia and Danny and Will and Charmain in Picture Slam?",
    "answers": [
      "Gerard and Jeremy",
      "Sharon and Lucy",
      "Kev and Bex",
      "Desiree and Eliza"
    ],
    "correctAnswer": "Sharon and Lucy",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 4 Episode 2",
      "Olivia and Danny",
      "Will and Charmain",
      "Sharon and Lucy",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/4"
    ]
  },
  {
    "id": "tv_58110",
    "question": "Which pair competed against Desiree and Eliza and Jax and Des in Picture Slam?",
    "answers": [
      "Josh and Emma",
      "Kev and Bex",
      "Olivia and Danny",
      "Will and Charmain"
    ],
    "correctAnswer": "Josh and Emma",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 4 Episode 3",
      "Desiree and Eliza",
      "Jax and Des",
      "Josh and Emma",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/4"
    ]
  },
  {
    "id": "tv_58111",
    "question": "Which pair competed against Samantha and Shane and Taran and Raj in Picture Slam?",
    "answers": [
      "Olivia and Danny",
      "Will and Charmain",
      "Sharon and Lucy",
      "Adam and Oliver"
    ],
    "correctAnswer": "Adam and Oliver",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 4 Episode 4",
      "Samantha and Shane",
      "Taran and Raj",
      "Adam and Oliver",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/4"
    ]
  },
  {
    "id": "tv_58112",
    "question": "Which pair competed against Ian and Liz and Arif and Kausar in Picture Slam?",
    "answers": [
      "Will and Charmain",
      "Sharon and Lucy",
      "Rachel and Connor",
      "Desiree and Eliza"
    ],
    "correctAnswer": "Rachel and Connor",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 4 Episode 5",
      "Ian and Liz",
      "Arif and Kausar",
      "Rachel and Connor",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/4"
    ]
  },
  {
    "id": "tv_58113",
    "question": "Which pair competed against Tierney and Hannah and Mark and Glenn in Picture Slam?",
    "answers": [
      "Selin and Harin",
      "Venice and Sat",
      "Gerard and Jeremy",
      "Kev and Bex"
    ],
    "correctAnswer": "Venice and Sat",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "Picture Slam",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Picture Slam",
      "Programme: Picture Slam",
      "Alan Carr's Picture Slam",
      "BBC One",
      "Series 4 Episode 6",
      "Tierney and Hannah",
      "Mark and Glenn",
      "Venice and Sat",
      "Source: https://bbc.originals.watch/media/45158/alan-carrs-picture-slam/season/4"
    ]
  }
];
if(questions.length!==73||new Set(questions.map(q=>q.id)).size!==questions.length||new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||questions.some((q,i)=>q.id!=='tv_'+(58041+i)||q.answers.length!==4||new Set(q.answers).size!==4||q.answers.filter(a=>a===q.correctAnswer).length!==1||!q.tags.includes('Programme: '+q.topic)||q.dailyEligible!==true))throw Error('Pack 779 validation failed');
module.exports=questions;
