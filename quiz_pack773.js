// PuzzlePilot — Pack 773: The Fortune Hotel
// 73 additions; eight existing facts in Pack 222 retained. Both series, all 16 episodes represented, cast, winners, selected eliminations, games, production, music, companion show and awards. Full challenge rankings, case transfers, complete elimination order and full-bank semantic duplicate scan outstanding. Live bank unchanged.
'use strict';
const questions = [
  {
    "id": "tv_57880",
    "question": "Which company produced The Fortune Hotel?",
    "answers": [
      "Studio Lambert",
      "Tuesday's Child",
      "12 Yard",
      "Remarkable Entertainment"
    ],
    "correctAnswer": "Tuesday's Child",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Production",
      "Source: https://www.itv.com/presscentre/presscentre/presscentre/media-packs/fortune-hotel"
    ]
  },
  {
    "id": "tv_57881",
    "question": "Which production group owns Tuesday's Child, the maker of The Fortune Hotel?",
    "answers": [
      "STV Studios",
      "BBC Studios",
      "Banijay UK",
      "All3Media"
    ],
    "correctAnswer": "STV Studios",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Production",
      "Source: https://www.itv.com/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/media-packs/fortune-hotel-s2-press-pack"
    ]
  },
  {
    "id": "tv_57882",
    "question": "Who composed the theme music for The Fortune Hotel?",
    "answers": [
      "Banks & Wag",
      "Philip Pope",
      "Richard Vranch",
      "Paul Farrer"
    ],
    "correctAnswer": "Paul Farrer",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Music",
      "Source: https://www.ukgameshows.com/ukgs/The_Fortune_Hotel"
    ]
  },
  {
    "id": "tv_57883",
    "question": "On which Caribbean island was The Fortune Hotel filmed?",
    "answers": [
      "Barbados",
      "Jamaica",
      "Grenada",
      "Antigua"
    ],
    "correctAnswer": "Grenada",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Location",
      "Source: https://www.ukgameshows.com/ukgs/The_Fortune_Hotel"
    ]
  },
  {
    "id": "tv_57884",
    "question": "How many episodes were commissioned for each of the first two series of The Fortune Hotel?",
    "answers": [
      "Six",
      "Eight",
      "Ten",
      "Twelve"
    ],
    "correctAnswer": "Eight",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series Structure",
      "Source: https://www.itv.com/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/media-packs/fortune-hotel-s2-press-pack"
    ]
  },
  {
    "id": "tv_57885",
    "question": "Which challenge originally took place inside the contestants' bedrooms on The Fortune Hotel?",
    "answers": [
      "Room Service Challenge",
      "Day Trip Challenge",
      "Nightcap",
      "Final Checkout"
    ],
    "correctAnswer": "Room Service Challenge",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Rules",
      "Source: https://www.ukgameshows.com/ukgs/The_Fortune_Hotel"
    ]
  },
  {
    "id": "tv_57886",
    "question": "What choice did the winners of the Room Service Challenge get on The Fortune Hotel?",
    "answers": [
      "Eliminate one pair or win immunity",
      "Take the entire jackpot or leave",
      "Choose a new partner or change rooms",
      "Peek into another case or swap cases"
    ],
    "correctAnswer": "Peek into another case or swap cases",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Rules",
      "Source: https://www.ukgameshows.com/ukgs/The_Fortune_Hotel"
    ]
  },
  {
    "id": "tv_57887",
    "question": "What did the Day Trip Challenge determine on The Fortune Hotel?",
    "answers": [
      "The amount of the initial jackpot",
      "The allocation of hotel bedrooms",
      "The order of the evening case decisions",
      "The number of new guests"
    ],
    "correctAnswer": "The order of the evening case decisions",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Rules",
      "Source: https://www.ukgameshows.com/ukgs/The_Fortune_Hotel"
    ]
  },
  {
    "id": "tv_57888",
    "question": "What was the nightly briefcase exchange called on The Fortune Hotel?",
    "answers": [
      "The Happy Hour",
      "The Nightcap",
      "The Midnight Feast",
      "The Wake-Up Call"
    ],
    "correctAnswer": "The Nightcap",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Rules",
      "Source: https://www.ukgameshows.com/ukgs/The_Fortune_Hotel"
    ]
  },
  {
    "id": "tv_57889",
    "question": "How much could the fortune holders remove from their case on eligible nights on The Fortune Hotel?",
    "answers": [
      "£10,000",
      "£5,000",
      "£15,000",
      "£20,000"
    ],
    "correctAnswer": "£10,000",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Rules",
      "Source: https://www.ukgameshows.com/ukgs/The_Fortune_Hotel"
    ]
  },
  {
    "id": "tv_57890",
    "question": "From which night could fortune holders begin withdrawing money in series one of The Fortune Hotel?",
    "answers": [
      "The first night",
      "The second night",
      "The fourth night",
      "The third night"
    ],
    "correctAnswer": "The third night",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Rules",
      "2024",
      "Source: https://www.ukgameshows.com/ukgs/The_Fortune_Hotel"
    ]
  },
  {
    "id": "tv_57891",
    "question": "Where did the peek-or-swap decision move in series two of The Fortune Hotel?",
    "answers": [
      "The swimming pool",
      "The hotel kitchen",
      "A dedicated luggage room",
      "The reception desk"
    ],
    "correctAnswer": "A dedicated luggage room",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Rules",
      "2025",
      "Source: https://www.ukgameshows.com/ukgs/The_Fortune_Hotel"
    ]
  },
  {
    "id": "tv_57892",
    "question": "On how many of the opening nights of series two of The Fortune Hotel could money be withdrawn?",
    "answers": [
      "Two",
      "Five",
      "Three",
      "Four"
    ],
    "correctAnswer": "Five",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Rules",
      "2025",
      "Source: https://www.ukgameshows.com/ukgs/The_Fortune_Hotel"
    ]
  },
  {
    "id": "tv_57893",
    "question": "Who presented the companion programme The Fortune Hotel: Late Check Out?",
    "answers": [
      "Ellie Taylor",
      "Claudia Winkleman",
      "Emma Willis",
      "Sara Cox"
    ],
    "correctAnswer": "Ellie Taylor",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Companion Show",
      "Source: https://www.itv.com/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/media-packs/fortune-hotel-s2-press-pack"
    ]
  },
  {
    "id": "tv_57894",
    "question": "Which series of The Fortune Hotel introduced Late Check Out?",
    "answers": [
      "The first",
      "The third",
      "The fourth",
      "The second"
    ],
    "correctAnswer": "The second",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Companion Show",
      "Source: https://www.itv.com/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/media-packs/fortune-hotel-s2-press-pack"
    ]
  },
  {
    "id": "tv_57895",
    "question": "What did eliminated pairs discover during the Golden Case reveal on Late Check Out?",
    "answers": [
      "Who would host the next series",
      "How the hotel had been built",
      "Who had been holding the money",
      "Which rooms cost the most"
    ],
    "correctAnswer": "Who had been holding the money",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Companion Show",
      "Source: https://www.itv.com/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/presscentre/media-packs/fortune-hotel-s2-press-pack"
    ]
  },
  {
    "id": "tv_57896",
    "question": "Which award did The Fortune Hotel win at the 2024 National Reality Television Awards?",
    "answers": [
      "Best Dating Show",
      "Best New Show",
      "Best Documentary",
      "Best Talent Show"
    ],
    "correctAnswer": "Best New Show",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Awards",
      "Source: https://tuesdayschild.tv/news/the-fortune-hotel-wins-best-new-show/"
    ]
  },
  {
    "id": "tv_57897",
    "question": "For which international television award was The Fortune Hotel shortlisted in 2025?",
    "answers": [
      "Rose d'Or",
      "International Emmy",
      "Golden Globe",
      "Golden Nymph"
    ],
    "correctAnswer": "Rose d'Or",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Awards",
      "Source: https://tuesdayschild.tv/news/the-fortune-hotel-is-nominated-for-a-rose-dor-award/"
    ]
  },
  {
    "id": "tv_57898",
    "question": "Which pair won the first series of The Fortune Hotel?",
    "answers": [
      "Aysha and Samm",
      "Daniel and Claire",
      "Tommy and Scott",
      "Jo-Anne and Will"
    ],
    "correctAnswer": "Jo-Anne and Will",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Final",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57899",
    "question": "What was the relationship between the first winners of The Fortune Hotel, Jo-Anne and Will?",
    "answers": [
      "Brother and sister",
      "Husband and wife",
      "Mother and son",
      "Best friends"
    ],
    "correctAnswer": "Mother and son",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Final",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57900",
    "question": "How much did Jo-Anne and Will win on The Fortune Hotel before sharing any winnings?",
    "answers": [
      "£200,000",
      "£210,000",
      "£230,000",
      "£250,000"
    ],
    "correctAnswer": "£210,000",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Final",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57901",
    "question": "Which pair received a £5,000 gift from Jo-Anne and Will after The Fortune Hotel?",
    "answers": [
      "Samm and Aysha",
      "Jae and Cherish",
      "Adam and Michael",
      "Lesley and Gary"
    ],
    "correctAnswer": "Samm and Aysha",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Final",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57902",
    "question": "Which pair won series two of The Fortune Hotel?",
    "answers": [
      "Fred and Min",
      "Martina and Briony",
      "James and Yasmine",
      "Nella and Topé"
    ],
    "correctAnswer": "Nella and Topé",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Final",
      "2025",
      "Source: https://www.ukgameshows.com/ukgs/The_Fortune_Hotel"
    ]
  },
  {
    "id": "tv_57903",
    "question": "Including their earlier withdrawal, how much did Nella and Topé win on The Fortune Hotel?",
    "answers": [
      "£190,000",
      "£200,000",
      "£210,000",
      "£250,000"
    ],
    "correctAnswer": "£210,000",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Final",
      "2025",
      "Source: https://www.ukgameshows.com/ukgs/The_Fortune_Hotel"
    ]
  },
  {
    "id": "tv_57904",
    "question": "Which pair finished the last challenge in first place in series two of The Fortune Hotel?",
    "answers": [
      "Fred and Min",
      "Nella and Topé",
      "Martina and Briony",
      "Mike and Jake"
    ],
    "correctAnswer": "Nella and Topé",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Final",
      "2025",
      "Source: https://www.scotsman.com/whats-on/who-won-the-fortune-hotel-5294971"
    ]
  },
  {
    "id": "tv_57905",
    "question": "Which retired couple from Blackpool reached the second final of The Fortune Hotel?",
    "answers": [
      "Fred and Min",
      "Allan and Jacob",
      "Gurks and Guv",
      "Maz and Max"
    ],
    "correctAnswer": "Fred and Min",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Final",
      "2025",
      "Source: https://www.tvguide.co.uk/articles/the-fortune-hotel-series-2-complete-contestant-line-up-itv/"
    ]
  },
  {
    "id": "tv_57906",
    "question": "Which mother-and-daughter pair reached the second final of The Fortune Hotel?",
    "answers": [
      "Chelsey and Briony",
      "Sue and Jeremy",
      "James and Yasmine",
      "Martina and Briony"
    ],
    "correctAnswer": "Martina and Briony",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Final",
      "2025",
      "Source: https://www.tvguide.co.uk/articles/the-fortune-hotel-series-2-complete-contestant-line-up-itv/"
    ]
  },
  {
    "id": "tv_57907",
    "question": "Which pair was eliminated before checking in during the second series of The Fortune Hotel?",
    "answers": [
      "Atholl and John",
      "Gurks and Guv",
      "Chelsey and Briony",
      "Mike and Jake"
    ],
    "correctAnswer": "Chelsey and Briony",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Episode 1",
      "2025",
      "Source: https://www.radiotimes.com/tv/entertainment/reality-tv/the-fortunte-hotel-season-2-eliminated-contestants-newsupdate/"
    ]
  },
  {
    "id": "tv_57908",
    "question": "Which pair received the first Nightcap elimination in series two of The Fortune Hotel?",
    "answers": [
      "Maz and Max",
      "Atholl and John",
      "Fred and Min",
      "Sue and Jeremy"
    ],
    "correctAnswer": "Atholl and John",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Episodes 1–2",
      "2025",
      "Source: https://www.radiotimes.com/tv/entertainment/reality-tv/the-fortunte-hotel-season-2-eliminated-contestants-newsupdate/"
    ]
  },
  {
    "id": "tv_57909",
    "question": "Which pair was eliminated in the third episode of series two of The Fortune Hotel?",
    "answers": [
      "Gurks and Guv",
      "Allan and Jacob",
      "Mike and Jake",
      "James and Yasmine"
    ],
    "correctAnswer": "Gurks and Guv",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Episode 3",
      "2025",
      "Source: https://www.radiotimes.com/tv/entertainment/reality-tv/the-fortunte-hotel-season-2-eliminated-contestants-newsupdate/"
    ]
  },
  {
    "id": "tv_57910",
    "question": "What did the safe teams have to do in a twist in the fourth episode of series two of The Fortune Hotel?",
    "answers": [
      "Give their money to the host",
      "Swap partners for the final",
      "Vote for a new hotel manager",
      "Choose which of two pairs should leave"
    ],
    "correctAnswer": "Choose which of two pairs should leave",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Episode 4",
      "2025",
      "Source: https://www.radiotimes.com/tv/entertainment/reality-tv/the-fortunte-hotel-season-2-eliminated-contestants-newsupdate/"
    ]
  },
  {
    "id": "tv_57911",
    "question": "What did the contestants sample in the first Room Service task of series one of The Fortune Hotel?",
    "answers": [
      "Unusual ice creams",
      "Spicy curries",
      "Unusual cocktails",
      "Tropical fruits"
    ],
    "correctAnswer": "Unusual cocktails",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Episode 2",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57912",
    "question": "What did the pairs search for on the beach in the second episode of The Fortune Hotel?",
    "answers": [
      "Missing luggage",
      "Buried treasure",
      "A hidden camera",
      "A lost necklace"
    ],
    "correctAnswer": "Buried treasure",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Episode 2",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57913",
    "question": "What type of craft featured in the Day Trip Challenge in Speeding to Victory on The Fortune Hotel?",
    "answers": [
      "Speedboats",
      "Kayaks",
      "Sailing dinghies",
      "Rafts"
    ],
    "correctAnswer": "Speedboats",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Episode 4",
      "2024",
      "Source: https://www.itv.com/watch/the-fortune-hotel/10a5106"
    ]
  },
  {
    "id": "tv_57914",
    "question": "Which skill was tested in the Room Service challenge of Over and Out on The Fortune Hotel?",
    "answers": [
      "Singing",
      "Cooking",
      "Dancing",
      "Drawing"
    ],
    "correctAnswer": "Drawing",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Episode 5",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57915",
    "question": "What industrial location hosted the Day Trip Challenge in the sixth episode of The Fortune Hotel?",
    "answers": [
      "A sugar refinery",
      "A chocolate factory",
      "A rum distillery",
      "A coffee plantation"
    ],
    "correctAnswer": "A rum distillery",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Episode 6",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57916",
    "question": "What luxury vessel featured in Don't Rock the Boat on The Fortune Hotel?",
    "answers": [
      "A cruise liner",
      "A yacht",
      "A submarine",
      "A ferry"
    ],
    "correctAnswer": "A yacht",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Episode 7",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57917",
    "question": "What did the finalists have to decipher in the final Room Service game of the first Fortune Hotel series?",
    "answers": [
      "A riddle",
      "A musical score",
      "A crossword",
      "A Morse code broadcast"
    ],
    "correctAnswer": "A riddle",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Episode 8",
      "2024",
      "Source: https://www.tvmaze.com/shows/70901/the-fortune-hotel/episodeguide"
    ]
  },
  {
    "id": "tv_57918",
    "question": "What type of transport did finalists seek to escape an island in the first series finale of The Fortune Hotel?",
    "answers": [
      "A helicopter",
      "A seaplane",
      "A ferry",
      "A speedboat"
    ],
    "correctAnswer": "A speedboat",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Episode 8",
      "2024",
      "Source: https://www.tvmaze.com/shows/70901/the-fortune-hotel/episodeguide"
    ]
  },
  {
    "id": "tv_57919",
    "question": "What two environments were used in the opening race of series two of The Fortune Hotel?",
    "answers": [
      "Sea and air",
      "Land and air",
      "Land and sea",
      "Underground and sea"
    ],
    "correctAnswer": "Land and sea",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Episode 1",
      "2025",
      "Source: https://www.tvmaze.com/shows/70901/the-fortune-hotel/episodeguide"
    ]
  },
  {
    "id": "tv_57920",
    "question": "What mental skill was tested in the Hotel Game in Picking Up the Pieces on The Fortune Hotel?",
    "answers": [
      "Mental arithmetic",
      "Memory",
      "Spelling",
      "Musical pitch"
    ],
    "correctAnswer": "Memory",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Episode 2",
      "2025",
      "Source: https://www.tvmaze.com/shows/70901/the-fortune-hotel/episodeguide"
    ]
  },
  {
    "id": "tv_57921",
    "question": "What guided contestants to Stephen Mangan in Searching for Stephen on The Fortune Hotel?",
    "answers": [
      "Postcards",
      "Newspaper cuttings",
      "Radio broadcasts",
      "Photographs of animals"
    ],
    "correctAnswer": "Postcards",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Episode 3",
      "2025",
      "Source: https://www.tvmaze.com/shows/70901/the-fortune-hotel/episodeguide"
    ]
  },
  {
    "id": "tv_57922",
    "question": "What were contestants trying to build from cans during the beach challenge in Knowledge is Power on The Fortune Hotel?",
    "answers": [
      "The longest bridge",
      "The largest square",
      "The widest pyramid",
      "The tallest tower"
    ],
    "correctAnswer": "The tallest tower",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Episode 5",
      "2025",
      "Source: https://www.tvmaze.com/shows/70901/the-fortune-hotel/episodeguide"
    ]
  },
  {
    "id": "tv_57923",
    "question": "What unusual food featured in Under the Cloche on The Fortune Hotel?",
    "answers": [
      "Cakes",
      "Sandwiches",
      "Ice lollies",
      "Pancakes"
    ],
    "correctAnswer": "Ice lollies",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Episode 6",
      "2025",
      "Source: https://www.tvmaze.com/shows/70901/the-fortune-hotel/episodeguide"
    ]
  },
  {
    "id": "tv_57924",
    "question": "Which capital city featured in the Day Trip Challenge in Under the Cloche on The Fortune Hotel?",
    "answers": [
      "Bridgetown",
      "St George's",
      "Kingston",
      "Castries"
    ],
    "correctAnswer": "St George's",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Episode 6",
      "2025",
      "Source: https://www.tvmaze.com/shows/70901/the-fortune-hotel/episodeguide"
    ]
  },
  {
    "id": "tv_57925",
    "question": "Where was one member of each pair locked up in the penultimate episode of series two of The Fortune Hotel?",
    "answers": [
      "A historic fort",
      "A hotel basement",
      "A lighthouse",
      "A ship's cabin"
    ],
    "correctAnswer": "A historic fort",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Episode 7",
      "2025",
      "Source: https://www.tvmaze.com/shows/70901/the-fortune-hotel/episodeguide"
    ]
  },
  {
    "id": "tv_57926",
    "question": "What kind of clues helped the pairs escape in Locked Up on The Fortune Hotel?",
    "answers": [
      "Song lyrics",
      "Film quotations",
      "Mathematical equations",
      "Symbols"
    ],
    "correctAnswer": "Symbols",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Episode 7",
      "2025",
      "Source: https://www.tvmaze.com/shows/70901/the-fortune-hotel/episodeguide"
    ]
  },
  {
    "id": "tv_57927",
    "question": "How many pairs competed in the final race of the second series of The Fortune Hotel?",
    "answers": [
      "Two",
      "Four",
      "Three",
      "Five"
    ],
    "correctAnswer": "Three",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Episode 8",
      "2025",
      "Source: https://www.tvmaze.com/shows/70901/the-fortune-hotel/episodeguide"
    ]
  },
  {
    "id": "tv_57928",
    "question": "Which BBC reality competition was scheduled against the second series of The Fortune Hotel?",
    "answers": [
      "The Traitors",
      "Destination X",
      "Race Across the World",
      "The Apprentice"
    ],
    "correctAnswer": "Destination X",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Broadcast History",
      "Source: https://www.ukgameshows.com/ukgs/The_Fortune_Hotel"
    ]
  },
  {
    "id": "tv_57929",
    "question": "What was the title of the premiere of The Fortune Hotel?",
    "answers": [
      "Check In is Now Open",
      "X Marks the Spot",
      "Over and Out",
      "Coconuts at Dawn"
    ],
    "correctAnswer": "Check In is Now Open",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Episode 1",
      "2024",
      "Source: https://www.itv.com/watch/the-fortune-hotel/10a5106"
    ]
  },
  {
    "id": "tv_57930",
    "question": "What was the title of the third episode of the first series of The Fortune Hotel?",
    "answers": [
      "Speeding to Victory",
      "X Marks the Spot",
      "Don't Rock the Boat",
      "A Twist in the River Run"
    ],
    "correctAnswer": "A Twist in the River Run",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Episode 3",
      "2024",
      "Source: https://www.itv.com/watch/the-fortune-hotel/10a5106"
    ]
  },
  {
    "id": "tv_57931",
    "question": "Which episode of the second series of The Fortune Hotel featured a high-speed Day Trip Challenge after a revealing Hotel Game?",
    "answers": [
      "Searching for Stephen",
      "Knowledge is Power",
      "A Twist in the Tale",
      "Under the Cloche"
    ],
    "correctAnswer": "A Twist in the Tale",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Episode 4",
      "2025",
      "Source: https://www.tvmaze.com/shows/70901/the-fortune-hotel/episodeguide"
    ]
  },
  {
    "id": "tv_57932",
    "question": "Which pair left The Fortune Hotel in episode 1 of the first series?",
    "answers": [
      "Tracey and Abbie",
      "Chloe and Louie",
      "Lesley and Gary",
      "Jen and Susan"
    ],
    "correctAnswer": "Chloe and Louie",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Episode 1",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57933",
    "question": "Which pair left The Fortune Hotel in episode 2 of the first series?",
    "answers": [
      "Tracey and Abbie",
      "Chloe and Louie",
      "Lesley and Gary",
      "Jen and Susan"
    ],
    "correctAnswer": "Tracey and Abbie",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Episode 2",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57934",
    "question": "Which pair left The Fortune Hotel in episode 4 of the first series?",
    "answers": [
      "Chloe and Louie",
      "Tracey and Abbie",
      "Jen and Susan",
      "Lesley and Gary"
    ],
    "correctAnswer": "Lesley and Gary",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Episode 4",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57935",
    "question": "Which pair left The Fortune Hotel in episode 5 of the first series?",
    "answers": [
      "Chloe and Louie",
      "Tracey and Abbie",
      "Jen and Susan",
      "Lesley and Gary"
    ],
    "correctAnswer": "Jen and Susan",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Episode 5",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57936",
    "question": "Which pair left The Fortune Hotel in episode 6 of the first series?",
    "answers": [
      "Chloe and Louie",
      "Adam and Michael",
      "Tracey and Abbie",
      "Lesley and Gary"
    ],
    "correctAnswer": "Adam and Michael",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Episode 6",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57937",
    "question": "Which pair left The Fortune Hotel in episode 7 of the first series?",
    "answers": [
      "Tommy and Scott",
      "Chloe and Louie",
      "Tracey and Abbie",
      "Lesley and Gary"
    ],
    "correctAnswer": "Tommy and Scott",
    "difficulty": "Hard",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Episode 7",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57938",
    "question": "Who was Adam's teammate in series 1 of The Fortune Hotel?",
    "answers": [
      "Cherish",
      "Tommy",
      "Claire",
      "Michael"
    ],
    "correctAnswer": "Michael",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Contestants",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57939",
    "question": "Who was Jae's teammate in series 1 of The Fortune Hotel?",
    "answers": [
      "Michael",
      "Tommy",
      "Cherish",
      "Claire"
    ],
    "correctAnswer": "Cherish",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Contestants",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57940",
    "question": "Who was Scott's teammate in series 1 of The Fortune Hotel?",
    "answers": [
      "Michael",
      "Tommy",
      "Cherish",
      "Claire"
    ],
    "correctAnswer": "Tommy",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Contestants",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57941",
    "question": "Who was Daniel's teammate in series 1 of The Fortune Hotel?",
    "answers": [
      "Claire",
      "Michael",
      "Cherish",
      "Tommy"
    ],
    "correctAnswer": "Claire",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Contestants",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57942",
    "question": "Who was Aysha's teammate in series 1 of The Fortune Hotel?",
    "answers": [
      "Michael",
      "Cherish",
      "Tommy",
      "Samm"
    ],
    "correctAnswer": "Samm",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Contestants",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57943",
    "question": "Who was Jen's teammate in series 1 of The Fortune Hotel?",
    "answers": [
      "Michael",
      "Cherish",
      "Susan",
      "Tommy"
    ],
    "correctAnswer": "Susan",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Contestants",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57944",
    "question": "Who was Louie's teammate in series 1 of The Fortune Hotel?",
    "answers": [
      "Michael",
      "Chloe",
      "Cherish",
      "Tommy"
    ],
    "correctAnswer": "Chloe",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Contestants",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57945",
    "question": "Who was Tracey's teammate in series 1 of The Fortune Hotel?",
    "answers": [
      "Abbie",
      "Michael",
      "Cherish",
      "Tommy"
    ],
    "correctAnswer": "Abbie",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Contestants",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57946",
    "question": "Who was Gary's teammate in series 1 of The Fortune Hotel?",
    "answers": [
      "Michael",
      "Cherish",
      "Tommy",
      "Lesley"
    ],
    "correctAnswer": "Lesley",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 1 Contestants",
      "2024",
      "Source: https://www.whattowatch.com/watching-guides/the-fortune-hotel-release-date-host-players-trailer-and-everything-we-know"
    ]
  },
  {
    "id": "tv_57947",
    "question": "Who was Maz's teammate in series 2 of The Fortune Hotel?",
    "answers": [
      "Jacob",
      "Jake",
      "Max",
      "Guv"
    ],
    "correctAnswer": "Max",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Contestants",
      "2025",
      "Source: https://www.tvguide.co.uk/articles/the-fortune-hotel-series-2-complete-contestant-line-up-itv/"
    ]
  },
  {
    "id": "tv_57948",
    "question": "Who was Allan's teammate in series 2 of The Fortune Hotel?",
    "answers": [
      "Max",
      "Jacob",
      "Jake",
      "Guv"
    ],
    "correctAnswer": "Jacob",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Contestants",
      "2025",
      "Source: https://www.tvguide.co.uk/articles/the-fortune-hotel-series-2-complete-contestant-line-up-itv/"
    ]
  },
  {
    "id": "tv_57949",
    "question": "Who was Mike's teammate in series 2 of The Fortune Hotel?",
    "answers": [
      "Jake",
      "Max",
      "Jacob",
      "Guv"
    ],
    "correctAnswer": "Jake",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Contestants",
      "2025",
      "Source: https://www.tvguide.co.uk/articles/the-fortune-hotel-series-2-complete-contestant-line-up-itv/"
    ]
  },
  {
    "id": "tv_57950",
    "question": "Who was Gurks's teammate in series 2 of The Fortune Hotel?",
    "answers": [
      "Max",
      "Jacob",
      "Jake",
      "Guv"
    ],
    "correctAnswer": "Guv",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Contestants",
      "2025",
      "Source: https://www.tvguide.co.uk/articles/the-fortune-hotel-series-2-complete-contestant-line-up-itv/"
    ]
  },
  {
    "id": "tv_57951",
    "question": "Who was James's teammate in series 2 of The Fortune Hotel?",
    "answers": [
      "Max",
      "Jacob",
      "Yasmine",
      "Jake"
    ],
    "correctAnswer": "Yasmine",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Contestants",
      "2025",
      "Source: https://www.tvguide.co.uk/articles/the-fortune-hotel-series-2-complete-contestant-line-up-itv/"
    ]
  },
  {
    "id": "tv_57952",
    "question": "Who was Sue's teammate in series 2 of The Fortune Hotel?",
    "answers": [
      "Max",
      "Jeremy",
      "Jacob",
      "Jake"
    ],
    "correctAnswer": "Jeremy",
    "difficulty": "Medium",
    "dailyEligible": true,
    "topic": "The Fortune Hotel",
    "category": "TV",
    "tags": [
      "Television",
      "British Television",
      "Quiz Shows",
      "Reality TV",
      "The Fortune Hotel",
      "Programme: The Fortune Hotel",
      "ITV1",
      "Series 2 Contestants",
      "2025",
      "Source: https://www.tvguide.co.uk/articles/the-fortune-hotel-series-2-complete-contestant-line-up-itv/"
    ]
  }
];
if(questions.length!==73||new Set(questions.map(q=>q.id)).size!==questions.length||new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||questions.some((q,i)=>q.id!=='tv_'+(57880+i)||q.answers.length!==4||new Set(q.answers).size!==4||q.answers.filter(a=>a===q.correctAnswer).length!==1||!q.tags.includes('Programme: '+q.topic)||q.dailyEligible!==true))throw Error('Pack 773 validation failed');
module.exports=questions;
