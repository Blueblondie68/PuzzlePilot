// PuzzlePilot Bigggggg Quiz — Pack 442: Dog-breed picture identification (15 new breeds).
// The original bot only mirrors this new content into Neon for the public Activity.
// Pictures are AI-generated draft breed illustrations hosted by puzzlepilot-activity.
// Each dog has one unique picture. This pack adds no duplicate breeds from Pack 441.
'use strict';

const questions = [
  {
    "id": "dogpic_00011",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which breed of dog is in this photograph?",
    "answers": [
      "Basset Hound",
      "Beagle",
      "Bloodhound",
      "Dachshund"
    ],
    "correctAnswer": "Basset Hound",
    "difficulty": "Easy",
    "tags": [
      "Basset Hound",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Long Ears",
      "Scent Hound",
      "Short Legs",
      "Long Body",
      "Tricolour Coat",
      "French Hound Ancestry",
      "Wrinkled Face",
      "Hound Group"
    ],
    "picture": {
      "file": "pp_c7aeb5920cfe.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00012",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which breed is represented by the dog in this image?",
    "answers": [
      "English Cocker Spaniel",
      "English Springer Spaniel",
      "Sussex Spaniel",
      "Irish Setter"
    ],
    "correctAnswer": "English Cocker Spaniel",
    "difficulty": "Medium",
    "tags": [
      "English Cocker Spaniel",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "British Spaniel",
      "Gundog Group",
      "Long Feathered Ears",
      "Golden Coat",
      "Flushing Dog",
      "Working And Show Lines",
      "Sporting Breed",
      "Medium Sized Dog"
    ],
    "picture": {
      "file": "pp_03fea20ce4b3.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00013",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What is the exact breed shown in this photograph?",
    "answers": [
      "Pembroke Welsh Corgi",
      "Cardigan Welsh Corgi",
      "Swedish Vallhund",
      "Finnish Spitz"
    ],
    "correctAnswer": "Pembroke Welsh Corgi",
    "difficulty": "Hard",
    "tags": [
      "Pembroke Welsh Corgi",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Pembrokeshire",
      "Welsh Herding Breed",
      "Short Legs",
      "Pricked Ears",
      "Low Long Body",
      "Red And White Coat",
      "Foxlike Face",
      "Corgi Type"
    ],
    "picture": {
      "file": "pp_bec2d00705e6.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00014",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which dog breed is represented here?",
    "answers": [
      "Bernese Mountain Dog",
      "Greater Swiss Mountain Dog",
      "Newfoundland",
      "Saint Bernard"
    ],
    "correctAnswer": "Bernese Mountain Dog",
    "difficulty": "Medium",
    "tags": [
      "Bernese Mountain Dog",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Switzerland",
      "Bernese Alps",
      "Swiss Mountain Dog",
      "Black Tan White Coat",
      "Large Working Dog",
      "Mountain Farm Dog",
      "Long Thick Coat",
      "Tri Colour Dog"
    ],
    "picture": {
      "file": "pp_add54c42294b.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00015",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Identify the dog breed in the image below.",
    "answers": [
      "Weimaraner",
      "Hungarian Vizsla",
      "German Shorthaired Pointer",
      "Rhodesian Ridgeback"
    ],
    "correctAnswer": "Weimaraner",
    "difficulty": "Medium",
    "tags": [
      "Weimaraner",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Germany",
      "Silver Grey Coat",
      "Gundog Group",
      "Short Coat",
      "Amber Eyes",
      "Long Drop Ears",
      "Pointing Breed",
      "Athletic Hunting Dog"
    ],
    "picture": {
      "file": "pp_8fec02b4b6a3.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00016",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which breed of dog is pictured in this round?",
    "answers": [
      "Whippet",
      "Italian Greyhound",
      "Greyhound",
      "Saluki"
    ],
    "correctAnswer": "Whippet",
    "difficulty": "Medium",
    "tags": [
      "Whippet",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Sighthound",
      "British Breed",
      "Lean Build",
      "Brindle Coat",
      "Deep Chest",
      "Fast Running",
      "Smooth Coat",
      "Long Slender Legs"
    ],
    "picture": {
      "file": "pp_adf2c3e47ec0.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00017",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Name the particular breed shown by this dog.",
    "answers": [
      "Miniature Schnauzer",
      "Scottish Terrier",
      "Wire Fox Terrier",
      "Cesky Terrier"
    ],
    "correctAnswer": "Miniature Schnauzer",
    "difficulty": "Medium",
    "tags": [
      "Miniature Schnauzer",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Germany",
      "Distinctive Beard",
      "Prominent Eyebrows",
      "Salt And Pepper Coat",
      "Small Terrier Type",
      "Wiry Coat",
      "Schnauzer Family",
      "Square Build"
    ],
    "picture": {
      "file": "pp_10260168cf9d.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00018",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What breed of dog is shown in this picture?",
    "answers": [
      "Samoyed",
      "Japanese Spitz",
      "American Eskimo Dog",
      "Great Pyrenees"
    ],
    "correctAnswer": "Samoyed",
    "difficulty": "Medium",
    "tags": [
      "Samoyed",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Siberian Origins",
      "Northern Spitz",
      "White Double Coat",
      "Curled Tail",
      "Pricked Ears",
      "Samoyedic Peoples",
      "Working Sled Breed",
      "Smiling Expression"
    ],
    "picture": {
      "file": "pp_3f4bade1b129.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00019",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which recognised breed is this small dog?",
    "answers": [
      "Papillon",
      "Pomeranian",
      "Japanese Chin",
      "Long-haired Chihuahua"
    ],
    "correctAnswer": "Papillon",
    "difficulty": "Hard",
    "tags": [
      "Papillon",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Continental Toy Spaniel",
      "Butterfly Ears",
      "Fringed Ears",
      "Small Companion Dog",
      "White And Brown Coat",
      "Toy Breed",
      "Long Silky Coat",
      "European Origins"
    ],
    "picture": {
      "file": "pp_56ee5d90a945.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00020",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which breed can you identify from this image?",
    "answers": [
      "Afghan Hound",
      "Saluki",
      "Borzoi",
      "Irish Wolfhound"
    ],
    "correctAnswer": "Afghan Hound",
    "difficulty": "Medium",
    "tags": [
      "Afghan Hound",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Afghanistan",
      "Sighthound",
      "Long Flowing Coat",
      "Elegant Build",
      "Long Narrow Muzzle",
      "High Set Hips",
      "Running Hound",
      "Silky Hair"
    ],
    "picture": {
      "file": "pp_d003bf16e7e2.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00021",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Name the breed shown in this dog picture.",
    "answers": [
      "Hungarian Vizsla",
      "Rhodesian Ridgeback",
      "Redbone Coonhound",
      "German Shorthaired Pointer"
    ],
    "correctAnswer": "Hungarian Vizsla",
    "difficulty": "Hard",
    "tags": [
      "Hungarian Vizsla",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Hungary",
      "Rust Gold Coat",
      "Pointing Dog",
      "Gundog Group",
      "Drop Ears",
      "Athletic Build",
      "Short Smooth Coat",
      "Hunting Companion"
    ],
    "picture": {
      "file": "pp_552095ea344d.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00022",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which breed is represented in the photograph?",
    "answers": [
      "Chinese Shar-Pei",
      "Pug",
      "English Bulldog",
      "Dogue de Bordeaux"
    ],
    "correctAnswer": "Chinese Shar-Pei",
    "difficulty": "Medium",
    "tags": [
      "Chinese Shar-Pei",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "China",
      "Wrinkled Skin",
      "Rolled Skin Folds",
      "Broad Muzzle",
      "Short Bristly Coat",
      "Small Folded Ears",
      "Curled Tail",
      "Distinctive Face"
    ],
    "picture": {
      "file": "pp_093ec10d0fd7.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00023",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Identify the breed of the dog pictured below.",
    "answers": [
      "Newfoundland",
      "Tibetan Mastiff",
      "Leonberger",
      "Portuguese Water Dog"
    ],
    "correctAnswer": "Newfoundland",
    "difficulty": "Medium",
    "tags": [
      "Newfoundland",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Canada",
      "Newfoundland Island",
      "Giant Working Dog",
      "Thick Black Coat",
      "Water Rescue",
      "Webbed Feet",
      "Heavy Build",
      "Water Working Dog"
    ],
    "picture": {
      "file": "pp_125b0fefede5.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00024",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which breed of dog is shown in this photograph?",
    "answers": [
      "West Highland White Terrier",
      "Cairn Terrier",
      "Scottish Terrier",
      "Sealyham Terrier"
    ],
    "correctAnswer": "West Highland White Terrier",
    "difficulty": "Easy",
    "tags": [
      "West Highland White Terrier",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Scotland",
      "Westie",
      "White Coat",
      "Small Terrier",
      "Pricked Ears",
      "Rough Double Coat",
      "Compact Build",
      "Highland Hunting Dog"
    ],
    "picture": {
      "file": "pp_95b35f6059bf.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00025",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What is the correct breed for the dog shown?",
    "answers": [
      "Basenji",
      "Shiba Inu",
      "Pharaoh Hound",
      "Ibizan Hound"
    ],
    "correctAnswer": "Basenji",
    "difficulty": "Hard",
    "tags": [
      "Basenji",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Central Africa",
      "Barkless Dog",
      "Curled Tail",
      "Pricked Ears",
      "Short Rust Coat",
      "Wrinkled Forehead",
      "Sighthound Type",
      "African Hunting Dog"
    ],
    "picture": {
      "file": "pp_7e6beb54ba3f.jpg"
    },
    "dailyEligible": true
  }
];

if (questions.length !== 15 || new Set(questions.map(q => q.id)).size !== 15 ||
    new Set(questions.map(q => q.correctAnswer.toLowerCase())).size !== 15 ||
    new Set(questions.map(q => q.picture.file)).size !== 15 ||
    questions.some(q => q.answers.length !== 4 ||
      !q.answers.includes(q.correctAnswer) ||
      new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
      q.tags.length < 15 || q.dailyEligible !== true ||
      !/^pp_[0-9a-f]{12}\.jpg$/.test(q.picture.file))) {
  throw new Error('Pack 442: exported dog-picture question validation failed');
}

module.exports = questions;
