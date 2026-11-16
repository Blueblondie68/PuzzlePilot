// PuzzlePilot Bigggggg Quiz — Pack 459: researched written dog anatomy, senses and behaviour.
// 40 distinct facts, checked against Pack 458 and mixed quiz packs 1–20.
// IDs dogfact_00041–dogfact_00080; no picture questions changed.
'use strict';

const questions = [
  {
    "id": "dogfact_00041",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "How many baby teeth does a typical puppy have once its milk teeth have come through?",
    "answers": [
      "20",
      "28",
      "32",
      "42"
    ],
    "correctAnswer": "28",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Anatomy",
      "Dog dentition",
      "Milk Teeth",
      "Deciduous Teeth",
      "Puppy Anatomy",
      "Canine Dental Formula",
      "Twenty Eight Teeth"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00042",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "How many permanent teeth does a typical adult dog have?",
    "answers": [
      "42",
      "28",
      "32",
      "36"
    ],
    "correctAnswer": "42",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Anatomy",
      "Dog dentition",
      "Adult Dentition",
      "Permanent Teeth",
      "Canine Dental Formula",
      "Forty Two Teeth",
      "Mature Dog"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00043",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "How many pointed canine teeth does a typical adult dog have in total?",
    "answers": [
      "2",
      "6",
      "8",
      "4"
    ],
    "correctAnswer": "4",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Anatomy",
      "Dog dentition",
      "Canine Teeth",
      "Fangs",
      "Tooth Types",
      "Upper And Lower Jaws",
      "Four Canines"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00044",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which type of tooth is absent from the normal set of a puppy’s milk teeth?",
    "answers": [
      "Incisors",
      "Canines",
      "Molars",
      "Premolars"
    ],
    "correctAnswer": "Molars",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Anatomy",
      "Dog dentition",
      "Molars",
      "Deciduous Dentition",
      "Dental Development",
      "Puppy Teeth",
      "Grinding Teeth"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00045",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What name is given to the extra toe and claw located higher up on a dog’s leg?",
    "answers": [
      "Carpal pad",
      "Dewclaw",
      "Hock",
      "Stop"
    ],
    "correctAnswer": "Dewclaw",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Anatomy",
      "Paws and movement",
      "Dewclaw",
      "Fifth Digit",
      "Extra Toe",
      "Claw Anatomy",
      "Front Leg"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00046",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "When a dog makes a fast turn, a firmly attached front dewclaw can help stabilise which joint?",
    "answers": [
      "Wrist (carpal joint)",
      "Elbow",
      "Hip",
      "Stifle (knee)"
    ],
    "correctAnswer": "Wrist (carpal joint)",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Anatomy",
      "Paws and movement",
      "Front Dewclaw",
      "Carpal Joint",
      "Wrist Stabilisation",
      "Traction",
      "Turning At Speed"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00047",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What is the anatomical name for a dog’s third eyelid?",
    "answers": [
      "Retina",
      "Cornea",
      "Iris",
      "Nictitating membrane"
    ],
    "correctAnswer": "Nictitating membrane",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Senses",
      "Eyes and vision",
      "Third Eyelid",
      "Nictitating Membrane",
      "Eye Anatomy",
      "Inner Eye Corner",
      "Protective Eyelid"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00048",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "The gland associated with a dog’s third eyelid contributes significantly to the production of what?",
    "answers": [
      "Earwax",
      "Saliva",
      "Tears",
      "Sebum"
    ],
    "correctAnswer": "Tears",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Senses",
      "Eyes and vision",
      "Third Eyelid Gland",
      "Tear Film",
      "Ocular Lubrication",
      "Eye Protection",
      "Lacrimal Secretion"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00049",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What is the anatomical name for the visible outer flap of a dog’s ear?",
    "answers": [
      "Cochlea",
      "Pinna",
      "Eustachian tube",
      "Tympanum"
    ],
    "correctAnswer": "Pinna",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Senses",
      "Ears and hearing",
      "Pinna",
      "Ear Flap",
      "External Ear",
      "Ear Anatomy",
      "Sound Collection"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00050",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What is the scientific name for a dog’s specialised sensory whiskers?",
    "answers": [
      "Vibrissae",
      "Guard hairs",
      "Undercoat fibres",
      "Cilia"
    ],
    "correctAnswer": "Vibrissae",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Senses",
      "Touch and whiskers",
      "Vibrissae",
      "Tactile Hairs",
      "Whiskers",
      "Muzzle Sensory Hairs",
      "Touch Receptors"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00051",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which subtle environmental change can a dog’s whiskers sense even before its face touches an object?",
    "answers": [
      "Changes in magnetic north",
      "Changes in sound pitch",
      "Ultraviolet light",
      "Movement of nearby air"
    ],
    "correctAnswer": "Movement of nearby air",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Senses",
      "Touch and whiskers",
      "Whiskers",
      "Air Currents",
      "Proximity Detection",
      "Sensory Receptors",
      "Facial Navigation"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00052",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "During a normal two-beat trot, which pair of a dog’s legs moves forward together?",
    "answers": [
      "Both front legs",
      "Both left legs",
      "Diagonally opposite legs",
      "Both back legs"
    ],
    "correctAnswer": "Diagonally opposite legs",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Anatomy",
      "Paws and movement",
      "Trotting Gait",
      "Diagonal Pairs",
      "Two Beat Gait",
      "Locomotion",
      "Canine Conformation"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00053",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which temperature range is approximately normal for a healthy adult dog?",
    "answers": [
      "35.0–36.0°C",
      "37.7–39.2°C",
      "39.9–41.2°C",
      "32.0–34.0°C"
    ],
    "correctAnswer": "37.7–39.2°C",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Anatomy",
      "Body functions",
      "Core Body Temperature",
      "37.7 To 39.2 Celsius",
      "Thermoregulation",
      "Veterinary Physiology",
      "Normal Temperature"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00054",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "When a retriever is swimming, which body part can help it steer like a rudder?",
    "answers": [
      "Tail",
      "Whiskers",
      "Dewclaws",
      "Ear flaps"
    ],
    "correctAnswer": "Tail",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Anatomy",
      "Paws and movement",
      "Swimming",
      "Tail As Rudder",
      "Water Dogs",
      "Steering",
      "Canine Movement"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00055",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which pair of colours can dogs distinguish especially well?",
    "answers": [
      "Red and green",
      "Pink and orange",
      "Violet and red",
      "Blue and yellow"
    ],
    "correctAnswer": "Blue and yellow",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Senses",
      "Eyes and vision",
      "Colour Vision",
      "Blue And Yellow",
      "Dichromatic Vision",
      "Retinal Cones",
      "Canine Eyesight"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00056",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What is the name of the reflective structure that helps many dogs see in dim light?",
    "answers": [
      "Eustachian tube",
      "Olfactory bulb",
      "Tapetum lucidum",
      "Nictitating membrane"
    ],
    "correctAnswer": "Tapetum lucidum",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Senses",
      "Eyes and vision",
      "Tapetum Lucidum",
      "Reflective Layer",
      "Night Vision",
      "Retina",
      "Low Light Vision"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00057",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which type of retinal light-sensing cell is especially important for detecting movement in low light?",
    "answers": [
      "Cones",
      "Rods",
      "Melanocytes",
      "Olfactory neurons"
    ],
    "correctAnswer": "Rods",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Senses",
      "Eyes and vision",
      "Retina",
      "Rod Photoreceptors",
      "Low Light Sight",
      "Motion Detection",
      "Visual Anatomy"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00058",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Compared with people, which part of the sound range are dogs especially good at detecting?",
    "answers": [
      "Very high-frequency sounds",
      "Only the lowest bass notes",
      "Only sounds within speech frequencies",
      "Only sounds below 20 Hz"
    ],
    "correctAnswer": "Very high-frequency sounds",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Senses",
      "Ears and hearing",
      "High Frequency Hearing",
      "Ultrasonic Sounds",
      "Canine Auditory Range",
      "Sensitive Hearing",
      "Dog Whistles"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00059",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which special sensory organ helps dogs detect pheromones?",
    "answers": [
      "Tapetum lucidum",
      "Pinna",
      "Carpal pad",
      "Vomeronasal (Jacobson’s) organ"
    ],
    "correctAnswer": "Vomeronasal (Jacobson’s) organ",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Senses",
      "Smell and scent",
      "Vomeronasal Organ",
      "Jacobsons Organ",
      "Pheromones",
      "Chemical Communication",
      "Accessory Olfaction"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00060",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which feature of a dog has an individually distinctive pattern sometimes compared with a human fingerprint?",
    "answers": [
      "Its tongue colour",
      "Its dewclaw length",
      "Its nose print",
      "Its ear shape"
    ],
    "correctAnswer": "Its nose print",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Senses",
      "Smell and scent",
      "Nose Print",
      "Individual Identification",
      "Nasal Patterns",
      "Canine Nose",
      "Biometric Identification"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00061",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which sense plays the greatest role when a dog investigates a trail of unfamiliar odours?",
    "answers": [
      "Colour vision",
      "Smell",
      "Taste",
      "Touch through paw pads"
    ],
    "correctAnswer": "Smell",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Senses",
      "Smell and scent",
      "Scent Tracking",
      "Olfaction",
      "Trail Investigation",
      "Olfactory Sensory Neurons",
      "Tracking Behaviour"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00062",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What gives a Chow Chow’s tongue its characteristic blue-black colouring?",
    "answers": [
      "Concentrated natural pigment",
      "Traces of food dye",
      "A permanent coating of saliva",
      "An absence of blood vessels"
    ],
    "correctAnswer": "Concentrated natural pigment",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Anatomy",
      "Breed characteristics",
      "Chow Chow",
      "Blue Black Tongue",
      "Melanin",
      "Pigmentation",
      "Oral Colour"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00063",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which breed is popularly — but wrongly — assumed to be in a dog’s ancestry solely because it has black spots on its tongue?",
    "answers": [
      "Greyhound",
      "Whippet",
      "Borzoi",
      "Chow Chow"
    ],
    "correctAnswer": "Chow Chow",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Anatomy",
      "Breed characteristics",
      "Chow Chow",
      "Tongue Spot",
      "Pigment Variation",
      "Breed Ancestry",
      "Genetic Misconception"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00064",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "In a double-coated breed, what is the name for the longer protective outer hairs?",
    "answers": [
      "Vibrissae",
      "Undercoat wool",
      "Guard hairs",
      "Dewclaws"
    ],
    "correctAnswer": "Guard hairs",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Anatomy",
      "Coats and grooming",
      "Guard Hairs",
      "Topcoat",
      "Primary Hairs",
      "Weather Protection",
      "Double Coat"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00065",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What is the chief purpose of the soft, dense undercoat in many double-coated dogs?",
    "answers": [
      "Producing saliva",
      "Insulation",
      "Detecting ultrasound",
      "Sharpening claws"
    ],
    "correctAnswer": "Insulation",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Anatomy",
      "Coats and grooming",
      "Undercoat",
      "Insulating Fur",
      "Thermoregulation",
      "Secondary Hair",
      "Cold Weather Coat"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00066",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What is the common grooming term for a dog shedding a large amount of its seasonal undercoat?",
    "answers": [
      "Blowing coat",
      "Casting a paw",
      "Raking the withers",
      "Breaking stride"
    ],
    "correctAnswer": "Blowing coat",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Anatomy",
      "Coats and grooming",
      "Seasonal Shedding",
      "Blowing Coat",
      "Undercoat Release",
      "Spring Shedding",
      "Double Coat Grooming"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00067",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Why is routinely shaving a healthy double-coated dog generally discouraged?",
    "answers": [
      "It permanently removes the whiskers",
      "It makes the dog unable to bark",
      "It causes the claws to stop growing",
      "It may disrupt the coat’s protective function"
    ],
    "correctAnswer": "It may disrupt the coat’s protective function",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Anatomy",
      "Coats and grooming",
      "Shaving Double Coats",
      "Coat Protection",
      "Topcoat And Undercoat",
      "Regrowth",
      "Skin Protection"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00068",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Where are the sweat glands that can leave damp pawprints on a hot day?",
    "answers": [
      "Ear tips",
      "Tail fur",
      "Paw pads",
      "Whisker roots"
    ],
    "correctAnswer": "Paw pads",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Anatomy",
      "Body functions",
      "Paw Pads",
      "Merocrine Sweat Glands",
      "Limited Sweating",
      "Sweaty Pawprints",
      "Canine Cooling"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00069",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What is a dog’s main natural method of cooling itself during warm weather?",
    "answers": [
      "Shivering",
      "Panting",
      "Barking",
      "Shedding its whiskers"
    ],
    "correctAnswer": "Panting",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Anatomy",
      "Body functions",
      "Panting",
      "Heat Dissipation",
      "Body Cooling",
      "Temperature Regulation",
      "Evaporation"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00070",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "When a dog pants to cool down, what physical process removes heat from the tongue and airways?",
    "answers": [
      "Evaporation of moisture",
      "Absorption of ultraviolet light",
      "Freezing of saliva",
      "Contraction of ear cartilage"
    ],
    "correctAnswer": "Evaporation of moisture",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Anatomy",
      "Body functions",
      "Panting Mechanism",
      "Evaporative Cooling",
      "Moisture Loss",
      "Tongue And Airways",
      "Heat Regulation"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00071",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What is the familiar name for a playful posture with a dog’s front end lowered and rear end raised?",
    "answers": [
      "Scent mark",
      "Point",
      "Hock stand",
      "Play bow"
    ],
    "correctAnswer": "Play bow",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Behaviour",
      "Play and communication",
      "Play Bow",
      "Play Invitation",
      "Front Legs Lowered",
      "Rear End Raised",
      "Dog Body Language"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00072",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which behaviour is a particularly good sign that two dogs both want to continue their rough play?",
    "answers": [
      "One repeatedly tries to escape",
      "Both become rigid and freeze",
      "They take turns and willingly re-engage",
      "One corners the other without letting it leave"
    ],
    "correctAnswer": "They take turns and willingly re-engage",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Behaviour",
      "Play and communication",
      "Healthy Play",
      "Reciprocal Play",
      "Mutual Reengagement",
      "Turn Taking",
      "Canine Social Interaction"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00073",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which statement about growling during dog play is most accurate?",
    "answers": [
      "It always means the dogs are fighting",
      "It can be normal when their bodies remain relaxed",
      "It always means the dog is frightened",
      "It means the dog cannot hear other dogs"
    ],
    "correctAnswer": "It can be normal when their bodies remain relaxed",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Behaviour",
      "Play and communication",
      "Play Growling",
      "Relaxed Posture",
      "Play Vocalisations",
      "Canine Communication",
      "Healthy Rough Play"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00074",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Why should a wagging tail never be treated as proof that an unfamiliar dog is friendly?",
    "answers": [
      "Wagging can indicate many kinds of emotional arousal",
      "Dogs only wag when asleep",
      "All wagging signals hunger",
      "Wagging prevents a dog from seeing"
    ],
    "correctAnswer": "Wagging can indicate many kinds of emotional arousal",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Behaviour",
      "Play and communication",
      "Tail Wagging",
      "Emotional Arousal",
      "Fear And Excitement",
      "Context Matters",
      "Dog Safety"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00075",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "A dog holding its tail tightly tucked between its hind legs may be showing which emotion?",
    "answers": [
      "Only hunger",
      "Only playfulness",
      "An inability to hear",
      "Fear or anxiety"
    ],
    "correctAnswer": "Fear or anxiety",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Behaviour",
      "Play and communication",
      "Tucked Tail",
      "Fear Signals",
      "Anxiety",
      "Posture",
      "Body Language"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00076",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "In descriptions of dog body language, what does the term “whale eye” mean?",
    "answers": [
      "The dog cannot see blue",
      "Both eyelids are fully closed",
      "The whites of the eyes are clearly visible",
      "The eyes change colour in sunlight"
    ],
    "correctAnswer": "The whites of the eyes are clearly visible",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Behaviour",
      "Play and communication",
      "Whale Eye",
      "Visible Sclera",
      "Stress Signals",
      "Eye Contact",
      "Canine Expressions"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00077",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What is the safest interpretation when a dog suddenly raises the fur along its back?",
    "answers": [
      "The dog is definitely attacking",
      "The dog is aroused; context is needed",
      "The dog is necessarily cold",
      "The dog has lost its sense of smell"
    ],
    "correctAnswer": "The dog is aroused; context is needed",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Behaviour",
      "Play and communication",
      "Raised Hackles",
      "Piloerection",
      "Arousal Signal",
      "Contextual Body Language",
      "Avoid Assumptions"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00078",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Outside eating or drinking, repeated quick lip-licking can be a sign of what in a dog?",
    "answers": [
      "Stress or discomfort",
      "Improved hearing",
      "A new coat growing",
      "Loss of all taste"
    ],
    "correctAnswer": "Stress or discomfort",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Behaviour",
      "Play and communication",
      "Lip Licking",
      "Stress Signals",
      "Discomfort",
      "Calming Behaviour",
      "Subtle Canine Cues"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00079",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Approximately when is a puppy’s especially important early socialisation period?",
    "answers": [
      "6 to 12 months of age",
      "18 to 24 months of age",
      "Only after two years old",
      "3 to 14 weeks of age"
    ],
    "correctAnswer": "3 to 14 weeks of age",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Behaviour",
      "Puppy development",
      "Early Socialisation",
      "Critical Development Window",
      "Three To Fourteen Weeks",
      "Puppy Learning",
      "Positive Experiences"
    ],
    "dailyEligible": true
  },
  {
    "id": "dogfact_00080",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "During which sleep stage are dogs especially likely to show brain activity associated with dreaming?",
    "answers": [
      "Only while fully awake",
      "Only during anaesthesia",
      "REM sleep",
      "Only during the initial falling-asleep moment"
    ],
    "correctAnswer": "REM sleep",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Dog Breeds",
      "Dogs",
      "Canine",
      "Written Questions",
      "Dog Behaviour",
      "Sleep and behaviour",
      "REM Sleep",
      "Dog Dreams",
      "Rapid Eye Movement",
      "Sleep Stages",
      "Brain Activity"
    ],
    "dailyEligible": true
  }
];

if (questions.length !== 40 ||
    new Set(questions.map(q => q.id)).size !== 40 ||
    new Set(questions.map(q => q.question.toLowerCase())).size !== 40 ||
    questions.some((q,i) => q.id !== 'dogfact_'+String(i+41).padStart(5,'0') ||
      q.category !== 'Science & Nature' || q.topic !== 'Dog Breeds' ||
      !Array.isArray(q.answers) || q.answers.length !== 4 ||
      q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
      new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
      !Array.isArray(q.tags) || q.tags.length < 12 ||
      q.tags.length !== new Set(q.tags).size ||
      !q.tags.includes('Written Questions') ||
      q.picture !== undefined || q.dailyEligible !== true)) {
  throw new Error('Pack 459: written dog questions failed validation');
}

module.exports = questions;
