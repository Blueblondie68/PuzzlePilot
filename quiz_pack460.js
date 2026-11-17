// PuzzlePilot Bigggggg Quiz — Pack 460: written dog knowledge, 45 new questions.
// Breed groups, dog sports, canine terminology, real historic dogs and assistance roles.
// Source URLs and overlap audit are retained in the Dog Breeds master workbook.
// IDs dogfact_00081–dogfact_00125; no changes to the 240 picture questions.
'use strict';

const questions = [
  {
    "id": "dogfact_00081",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "How many main pedigree breed groups does the Royal Kennel Club use in the UK?",
    "answers": [
      "Seven",
      "Five",
      "Six",
      "Ten"
    ],
    "correctAnswer": "Seven",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Breed groups",
      "UK pedigree groups",
      "seven groups",
      "UK classification",
      "pedigree dogs",
      "breed classification",
      "United Kingdom",
      "breed standards"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00082",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "In the UK Royal Kennel Club classification, which group contains the Samoyed?",
    "answers": [
      "Working",
      "Gundog",
      "Utility",
      "Pastoral"
    ],
    "correctAnswer": "Pastoral",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Breed groups",
      "Samoyed",
      "Pastoral Group",
      "reindeer herding",
      "herding dog",
      "northern breeds",
      "UK classification"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00083",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which UK Royal Kennel Club breed group contains Poodles?",
    "answers": [
      "Toy",
      "Pastoral",
      "Utility",
      "Gundog"
    ],
    "correctAnswer": "Utility",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Breed groups",
      "Poodle",
      "Utility Group",
      "breed classification",
      "United Kingdom",
      "breed standard",
      "water retriever heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00084",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which UK Royal Kennel Club group includes the Newfoundland?",
    "answers": [
      "Pastoral",
      "Working",
      "Gundog",
      "Hound"
    ],
    "correctAnswer": "Working",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Breed groups",
      "Newfoundland",
      "Working Group",
      "water rescue",
      "large dog",
      "breed groups",
      "United Kingdom"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00085",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which UK Royal Kennel Club group contains the Whippet?",
    "answers": [
      "Hound",
      "Terrier",
      "Toy",
      "Gundog"
    ],
    "correctAnswer": "Hound",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Breed groups",
      "Whippet",
      "Hound Group",
      "sighthound",
      "coursing",
      "UK classification",
      "running dog"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00086",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Despite the word “Terrier” in its name, which UK Royal Kennel Club group contains the Tibetan Terrier?",
    "answers": [
      "Terrier",
      "Pastoral",
      "Toy",
      "Utility"
    ],
    "correctAnswer": "Utility",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Breed groups",
      "Tibetan Terrier",
      "Utility Group",
      "breed naming",
      "Tibet",
      "UK classification",
      "non terrier group"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00087",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What was the primary traditional purpose of many breeds in the UK Toy group?",
    "answers": [
      "Driving cattle",
      "Tracking wild boar",
      "Companionship and lap-dog roles",
      "Retrieving shot game"
    ],
    "correctAnswer": "Companionship and lap-dog roles",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Breed groups",
      "Toy dogs",
      "Toy Group",
      "companion dogs",
      "lap dogs",
      "breed history",
      "small dogs",
      "UK group purpose"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00088",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "In flyball, what object does a dog collect from a spring-loaded box before racing back?",
    "answers": [
      "A retrieving dummy",
      "A tennis ball",
      "A flying disc",
      "A wooden dumbbell"
    ],
    "correctAnswer": "A tennis ball",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Dog sports",
      "Flyball",
      "tennis ball",
      "dog relay",
      "spring loaded box",
      "hurdles",
      "team sport"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00089",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "In a standard flyball relay race, how many dogs are on each competing team?",
    "answers": [
      "Four",
      "Two",
      "Three",
      "Six"
    ],
    "correctAnswer": "Four",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Dog sports",
      "Flyball",
      "four dog team",
      "relay racing",
      "canine sport",
      "hurdles",
      "team competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00090",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which agility obstacle consists of a row of upright poles that a dog threads between?",
    "answers": [
      "Long jump",
      "A-frame",
      "See-saw",
      "Weave poles"
    ],
    "correctAnswer": "Weave poles",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Dog sports",
      "Agility",
      "weave poles",
      "weaving",
      "obstacle course",
      "handling",
      "canine sport"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00091",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What does a sighthound chase in modern lure coursing trials?",
    "answers": [
      "A scent-dragged tracking article",
      "A ball launched from a box",
      "A moving artificial lure",
      "A live fox"
    ],
    "correctAnswer": "A moving artificial lure",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Dog sports",
      "Lure coursing",
      "sighthounds",
      "mechanical lure",
      "plastic lure",
      "field trial",
      "chasing by sight"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00092",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Lure coursing chiefly tests a sighthound’s ability to pursue a target using which sense?",
    "answers": [
      "Touch",
      "Sight",
      "Smell",
      "Hearing"
    ],
    "correctAnswer": "Sight",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Dog sports",
      "Lure coursing",
      "sighthound",
      "visual pursuit",
      "sight",
      "sighthound instinct",
      "hunting sport"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00093",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "In rally obedience, what tells a dog-and-handler team which exercise to perform at each station?",
    "answers": [
      "Signs along the course",
      "A constantly changing whistle code",
      "Coloured flags held by spectators",
      "Commands given by an opposing team"
    ],
    "correctAnswer": "Signs along the course",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Dog sports",
      "Rally",
      "Rally Obedience",
      "exercise stations",
      "instruction signs",
      "handler and dog",
      "course navigation",
      "UK dog sport"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00094",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which activity asks a dog and handler to perform a coordinated routine set to music?",
    "answers": [
      "Flyball",
      "Lure coursing",
      "Tracking trials",
      "Heelwork to Music"
    ],
    "correctAnswer": "Heelwork to Music",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Dog sports",
      "Heelwork to music",
      "Heelwork to Music",
      "canine freestyle",
      "musical routine",
      "dog training",
      "choreography",
      "handler teamwork"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00095",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Royal Kennel Club working trials combine nosework, agility and which third broad skill?",
    "answers": [
      "Cattle driving",
      "Coursing",
      "Control",
      "Swimming"
    ],
    "correctAnswer": "Control",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Dog sports",
      "Working trials",
      "Working Trials",
      "nosework",
      "agility",
      "control",
      "working dog sport",
      "obedience skills"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00096",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "In the American Kennel Club Fast CAT sport, dogs race over which timed straight-line distance?",
    "answers": [
      "One mile",
      "100 yards",
      "50 yards",
      "200 yards"
    ],
    "correctAnswer": "100 yards",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Dog sports",
      "Fast CAT",
      "AKC",
      "100 yard dash",
      "timed sprint",
      "coursing ability test",
      "dog racing"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00097",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What distinguishes a Royal Kennel Club gundog working test from a shooting field trial?",
    "answers": [
      "It does not involve shooting live game",
      "Only toy breeds may enter",
      "It is performed entirely underwater",
      "Dogs must work without any handler"
    ],
    "correctAnswer": "It does not involve shooting live game",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Dog sports",
      "Gundog working tests",
      "Gundog Working Test",
      "gundogs",
      "natural working ability",
      "simulated game work",
      "no live shooting",
      "retrievers and spaniels"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00098",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Where is a dog’s height normally measured in breed standards?",
    "answers": [
      "At the highest tip of the ears",
      "From the nose to the tail root",
      "From the floor to the hip joint",
      "At the withers, just behind the neck"
    ],
    "correctAnswer": "At the withers, just behind the neck",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Canine terminology",
      "Withers",
      "dog height measurement",
      "shoulder height",
      "breed standard",
      "body structure",
      "conformation"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00099",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "In canine conformation, what is the “stop”?",
    "answers": [
      "The tip of the breastbone",
      "The spot where the tail joins the back",
      "The indentation where the muzzle meets the skull",
      "The joint immediately above the rear paw"
    ],
    "correctAnswer": "The indentation where the muzzle meets the skull",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Canine terminology",
      "Stop",
      "skull to muzzle transition",
      "dog head",
      "foreface",
      "canine conformation",
      "head anatomy"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00100",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What part of a dog is described as the “stifle”?",
    "answers": [
      "The base of the tail",
      "The hind-leg knee joint",
      "The front wrist joint",
      "The shoulder blade"
    ],
    "correctAnswer": "The hind-leg knee joint",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Canine terminology",
      "Stifle",
      "knee joint",
      "hindquarters",
      "rear leg",
      "canine conformation",
      "joint terminology"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00101",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which joint is the “hock” on a dog?",
    "answers": [
      "A hind-leg joint above the rear pastern",
      "The joint at the base of the skull",
      "A foreleg elbow joint",
      "The connection between the ribs and spine"
    ],
    "correctAnswer": "A hind-leg joint above the rear pastern",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Canine terminology",
      "Hock",
      "rear leg",
      "hindquarter joint",
      "rear pastern",
      "conformation",
      "leg anatomy"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00102",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "In canine conformation, the front pastern lies between the wrist and which part?",
    "answers": [
      "The shoulder",
      "The elbow",
      "The ribcage",
      "The foot"
    ],
    "correctAnswer": "The foot",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Canine terminology",
      "Pastern",
      "front leg",
      "wrist",
      "paw",
      "carpal anatomy",
      "canine conformation"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00103",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What shape are a dog’s “rose ears”?",
    "answers": [
      "Fully upright with no bend",
      "Rounded and tightly curled against the skull",
      "Folded back to expose part of the inner ear",
      "Long and hanging flat against the cheeks"
    ],
    "correctAnswer": "Folded back to expose part of the inner ear",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Canine terminology",
      "Rose ears",
      "ear carriage",
      "Greyhound",
      "Whippet",
      "ear folds",
      "breed standard"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00104",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What does “feathering” describe in a dog’s coat?",
    "answers": [
      "A striped pattern down the spine",
      "Longer fringes of hair on ears, legs or tail",
      "The dense hairs around the nose",
      "A short, completely hairless muzzle"
    ],
    "correctAnswer": "Longer fringes of hair on ears, legs or tail",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Canine terminology",
      "Feathering",
      "coat fringes",
      "ears",
      "tail",
      "legs",
      "long haired dogs",
      "breed description"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00105",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What does a brindle coat pattern look like?",
    "answers": [
      "Dark stripes or streaks over a different background colour",
      "A fully white coat with single black spots",
      "A single solid shade from head to tail",
      "Patches made up only of white and brown"
    ],
    "correctAnswer": "Dark stripes or streaks over a different background colour",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Canine terminology",
      "Brindle",
      "striped coat",
      "Whippet",
      "Boxer",
      "colour pattern",
      "dog genetics"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00106",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What is meant by a merle dog coat?",
    "answers": [
      "An even coat of unbroken black",
      "A coat with long cords from head to tail",
      "A complete lack of fur",
      "A mottled or marbled pattern of darker and lighter areas"
    ],
    "correctAnswer": "A mottled or marbled pattern of darker and lighter areas",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Canine terminology",
      "Merle",
      "marbled coat",
      "coat pattern",
      "Australian Shepherd",
      "Collie",
      "pigment variation"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00107",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "In the Great Dane, the harlequin coat pattern is chiefly what?",
    "answers": [
      "A tan coat with regularly spaced white dots",
      "An even grey coat without markings",
      "A white background with irregular dark patches",
      "A solid golden coat with a black muzzle"
    ],
    "correctAnswer": "A white background with irregular dark patches",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Canine terminology",
      "Harlequin Great Dane",
      "Harlequin",
      "Great Dane",
      "white coat",
      "irregular patches",
      "breed standard",
      "coat genetics"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00108",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "In a dog’s coat, what does “ticked” mean?",
    "answers": [
      "A large solid-colour saddle on the back",
      "Small coloured flecks scattered over a white background",
      "Wide stripes running down the back",
      "A completely hairless chest"
    ],
    "correctAnswer": "Small coloured flecks scattered over a white background",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Canine terminology",
      "Ticked coat",
      "flecks",
      "white background",
      "coat markings",
      "German pointer",
      "breed glossary"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00109",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What is a “roan” coat in dog-breed terminology?",
    "answers": [
      "A base colour interspersed with hairs of another colour",
      "A coat that is white only at the tail tip",
      "A black coat with a single large white patch",
      "A coat with no visible pigmentation anywhere"
    ],
    "correctAnswer": "A base colour interspersed with hairs of another colour",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Canine terminology",
      "Roan coat",
      "Roan",
      "intermixed coat hairs",
      "Cocker Spaniel",
      "coat colours",
      "breed standard",
      "roan pattern"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00110",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What is a “ruff” in descriptions of a dog’s coat?",
    "answers": [
      "A short smooth patch across the nose",
      "A bare strip along the spine",
      "A dark spot over each eye",
      "A thick stand-off collar of fur around the neck"
    ],
    "correctAnswer": "A thick stand-off collar of fur around the neck",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Canine terminology",
      "Ruff",
      "neck coat",
      "Keeshond",
      "thick fur collar",
      "coat structure",
      "breed standard"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00111",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What does “dewlap” mean in canine conformation?",
    "answers": [
      "The dark pigment on the lips",
      "A stripe of fur along the back",
      "Loose hanging skin under the throat",
      "A curved claw on the rear foot"
    ],
    "correctAnswer": "Loose hanging skin under the throat",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Canine terminology",
      "Dewlap",
      "throat skin",
      "loose skin",
      "canine conformation",
      "head and neck",
      "breed glossary"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00112",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which description best matches the canine coat colour “sable”?",
    "answers": [
      "Alternating horizontal blue and red stripes",
      "Darker-tipped hairs over a lighter underlying colour",
      "Only clear white spots on a black coat",
      "Completely hairless except for feet"
    ],
    "correctAnswer": "Darker-tipped hairs over a lighter underlying colour",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Canine terminology",
      "Sable",
      "dark hair tips",
      "German Shepherd",
      "coat colouring",
      "pigmentation",
      "breed glossary"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00113",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What is a correct scissor bite in a dog’s mouth?",
    "answers": [
      "Upper front teeth closely overlap the lower front teeth",
      "Lower front teeth project far beyond the upper ones",
      "The front teeth meet only at their tips with no overlap",
      "The jaws do not meet when the mouth is closed"
    ],
    "correctAnswer": "Upper front teeth closely overlap the lower front teeth",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Canine terminology",
      "Scissor bite",
      "incisors",
      "dentition",
      "jaw alignment",
      "breed standard",
      "conformation"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00114",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What breed was Hachikō, the loyal dog commemorated by a statue in Tokyo?",
    "answers": [
      "Shiba Inu",
      "Japanese Chin",
      "Kishu Ken",
      "Akita"
    ],
    "correctAnswer": "Akita",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Famous real dogs",
      "Hachiko",
      "Akita",
      "Japan",
      "faithful dog",
      "Tokyo",
      "memorial statue",
      "real dog history"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00115",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Outside which Tokyo railway station did the dog Hachikō famously wait for his owner?",
    "answers": [
      "Tokyo Central",
      "Shinjuku",
      "Shibuya",
      "Ueno"
    ],
    "correctAnswer": "Shibuya",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Famous real dogs",
      "Hachiko",
      "Shibuya Station",
      "Japan",
      "railway",
      "faithful dog",
      "Tokyo",
      "dog history"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00116",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What was the name of the dog who became the first animal to orbit Earth in 1957?",
    "answers": [
      "Dezik",
      "Laika",
      "Belka",
      "Strelka"
    ],
    "correctAnswer": "Laika",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Famous real dogs",
      "Laika",
      "Sputnik 2",
      "1957",
      "space exploration",
      "first animal in orbit",
      "Soviet programme",
      "space dog"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00117",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which Soviet spacecraft carried Laika into Earth orbit?",
    "answers": [
      "Sputnik 2",
      "Sputnik 1",
      "Vostok 1",
      "Luna 2"
    ],
    "correctAnswer": "Sputnik 2",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Famous real dogs",
      "Laika",
      "Sputnik 2",
      "Soviet satellite",
      "space history",
      "orbital flight",
      "1957",
      "animal spaceflight"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00118",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which Alaskan town was the destination of the 1925 serum relay led on its final leg by Balto?",
    "answers": [
      "Fairbanks",
      "Juneau",
      "Anchorage",
      "Nome"
    ],
    "correctAnswer": "Nome",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Famous real dogs",
      "Balto",
      "Nome Alaska",
      "1925 serum run",
      "diphtheria",
      "sled dog",
      "Alaska history",
      "medical relay"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00119",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which sled dog led Leonhard Seppala’s especially long and hazardous stretch of the 1925 Alaska serum relay?",
    "answers": [
      "Laika",
      "Hachiko",
      "Togo",
      "Balto"
    ],
    "correctAnswer": "Togo",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Famous real dogs",
      "Togo",
      "Leonhard Seppala",
      "1925 serum run",
      "Nome",
      "sled dog",
      "Alaska",
      "historic dogs"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00120",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "In which Scottish city is Greyfriars Bobby, the faithful graveyard dog, commemorated by a statue?",
    "answers": [
      "Inverness",
      "Edinburgh",
      "Aberdeen",
      "Perth"
    ],
    "correctAnswer": "Edinburgh",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Famous real dogs",
      "Greyfriars Bobby",
      "Edinburgh",
      "Greyfriars Kirkyard",
      "Scotland",
      "historic dog",
      "memorial statue",
      "loyalty"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00121",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "A guide dog helping someone with sight loss is trained to identify and indicate which pavement feature?",
    "answers": [
      "Kerbs and crossings",
      "Traffic-light colours from a distance",
      "Bus routes printed on timetables",
      "Pedestrian names on street signs"
    ],
    "correctAnswer": "Kerbs and crossings",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Assistance dogs",
      "Guide dogs",
      "sight loss",
      "kerbs",
      "crossings",
      "navigation",
      "assistance dogs",
      "mobility"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00122",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What does a guide dog chiefly help its handler do when approaching an obstruction on the pavement?",
    "answers": [
      "Choose the shortest driving route",
      "Read the obstruction’s warning sign aloud",
      "Automatically call the police",
      "Avoid or navigate around the obstacle"
    ],
    "correctAnswer": "Avoid or navigate around the obstacle",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Assistance dogs",
      "Guide dogs",
      "obstacle avoidance",
      "mobility assistance",
      "sight impairment",
      "navigation",
      "pavement hazards"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00123",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which household warning can a hearing dog be trained to alert a deaf partner to?",
    "answers": [
      "A tap dripping silently",
      "An unlit television screen",
      "A smoke alarm sounding",
      "The colour of the wall changing"
    ],
    "correctAnswer": "A smoke alarm sounding",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Assistance dogs",
      "Hearing dogs",
      "deaf assistance",
      "smoke alarm",
      "sound alerts",
      "home safety",
      "Hearing Dogs for Deaf People"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00124",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "How may a trained hearing dog physically alert its deaf partner to a sound?",
    "answers": [
      "By fetching a telephone directory",
      "By nudging the partner with its nose",
      "By switching off every appliance",
      "By barking continuously until someone arrives"
    ],
    "correctAnswer": "By nudging the partner with its nose",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Assistance dogs",
      "Hearing dogs",
      "nose nudge",
      "auditory alert",
      "deaf partner",
      "sound training",
      "assistance dog behaviour"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00125",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Some specially trained medical-alert assistance dogs warn their partners of changes detectable in what?",
    "answers": [
      "The person’s body odour",
      "The colour of the person’s clothing",
      "The sound of a wristwatch",
      "The handwriting in a diary"
    ],
    "correctAnswer": "The person’s body odour",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Facts",
      "Assistance dogs",
      "Medical alert dogs",
      "body odour changes",
      "trained detection",
      "assistance dogs",
      "health alert",
      "scent detection"
    ],
    "dailyEligible": true
  }
];

// Validate the exact objects exported into the live bank.
if (questions.length !== 45 ||
    new Set(questions.map(q => q.id)).size !== 45 ||
    new Set(questions.map(q => q.question.toLowerCase().trim())).size !== 45 ||
    questions.some((q,i) =>
      q.id !== 'dogfact_' + String(81+i).padStart(5, '0') ||
      q.category !== 'Science & Nature' || q.topic !== 'Dog Breeds' ||
      !Array.isArray(q.answers) || q.answers.length !== 4 ||
      q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
      new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
      !Array.isArray(q.tags) || q.tags.length < 12 ||
      q.tags.length !== new Set(q.tags).size ||
      !q.tags.includes('Written Questions') || q.picture !== undefined ||
      q.dailyEligible !== true || !['Easy','Medium','Hard'].includes(q.difficulty))) {
  throw new Error('Pack 460: exported dog-question validation failed');
}

module.exports = questions;