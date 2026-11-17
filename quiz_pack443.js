// PuzzlePilot Bigggggg Quiz — Pack 443: Dog-breed picture identification (15 new breeds).
// The original bot mirrors this new content into Neon for the public Activity.
// Pictures are AI-generated draft breed illustrations hosted by puzzlepilot-activity.
// Each dog has one unique picture. This pack adds no duplicate correct breeds from Packs 441 or 442.
'use strict';

const questions = [
  {
    "id": "dogpic_00026",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which breed of dog is pictured here?",
    "answers": [
      "Golden Retriever",
      "Labrador Retriever",
      "Flat-Coated Retriever",
      "Chesapeake Bay Retriever"
    ],
    "correctAnswer": "Golden Retriever",
    "difficulty": "Easy",
    "tags": [
      "Golden Retriever",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Scotland",
      "Retriever",
      "Gundog Group",
      "Golden Coat",
      "Feathered Fur",
      "Friendly Expression",
      "Medium Large Dog",
      "Sporting Breed"
    ],
    "picture": {
      "file": "pp_b4f9d2a1c8e7.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00027",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Identify the breed of the dog pictured here.",
    "answers": [
      "Rottweiler",
      "Dobermann",
      "Beauceron",
      "German Shepherd"
    ],
    "correctAnswer": "Rottweiler",
    "difficulty": "Medium",
    "tags": [
      "Rottweiler",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Germany",
      "Working Breed",
      "Black And Tan Coat",
      "Broad Head",
      "Muscular Build",
      "Guard Dog",
      "Drop Ears",
      "Robust Frame"
    ],
    "picture": {
      "file": "pp_8c3e71f2a9bd.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00028",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which dog breed is shown in this picture?",
    "answers": [
      "Great Dane",
      "Saint Bernard",
      "Irish Wolfhound",
      "Bullmastiff"
    ],
    "correctAnswer": "Great Dane",
    "difficulty": "Medium",
    "tags": [
      "Great Dane",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Germany",
      "Giant Breed",
      "Very Tall Dog",
      "Smooth Coat",
      "Deep Chest",
      "Long Legs",
      "Working Breed",
      "Mastiff Type"
    ],
    "picture": {
      "file": "pp_f2a47bc981de.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00029",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What breed is the dog in this image?",
    "answers": [
      "Pug",
      "French Bulldog",
      "Boston Terrier",
      "Pekingese"
    ],
    "correctAnswer": "Pug",
    "difficulty": "Easy",
    "tags": [
      "Pug",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "China",
      "Toy Breed",
      "Short Muzzle",
      "Wrinkled Face",
      "Curled Tail",
      "Fawn Or Black Coat",
      "Companion Dog",
      "Compact Build"
    ],
    "picture": {
      "file": "pp_94e1c7ab52d0.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00030",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which breed of dog is represented by this picture?",
    "answers": [
      "French Bulldog",
      "Pug",
      "Boston Terrier",
      "English Bulldog"
    ],
    "correctAnswer": "French Bulldog",
    "difficulty": "Medium",
    "tags": [
      "French Bulldog",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "France",
      "Bat Ears",
      "Short Muzzle",
      "Companion Dog",
      "Compact Muscular Body",
      "Smooth Coat",
      "Brachycephalic Breed",
      "Small Bulldog Type"
    ],
    "picture": {
      "file": "pp_61bd28fe93ac.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00031",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which dog breed can you identify here?",
    "answers": [
      "Chihuahua",
      "Papillon",
      "Pomeranian",
      "Yorkshire Terrier"
    ],
    "correctAnswer": "Chihuahua",
    "difficulty": "Medium",
    "tags": [
      "Chihuahua",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Mexico",
      "Toy Breed",
      "Very Small Dog",
      "Large Eyes",
      "Prominent Ears",
      "Companion Dog",
      "Smooth Or Long Coat",
      "Apple Head"
    ],
    "picture": {
      "file": "pp_c8a52f1d7e34.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00032",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Name the breed shown in this dog portrait.",
    "answers": [
      "Dobermann",
      "Rottweiler",
      "German Pinscher",
      "Beauceron"
    ],
    "correctAnswer": "Dobermann",
    "difficulty": "Medium",
    "tags": [
      "Dobermann",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Germany",
      "Working Breed",
      "Black And Tan Markings",
      "Sleek Short Coat",
      "Athletic Build",
      "Deep Chest",
      "Guard Dog",
      "Elegant Outline"
    ],
    "picture": {
      "file": "pp_2f9b6c1ea4d8.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00033",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which breed of dog is shown in this picture?",
    "answers": [
      "Pomeranian",
      "Keeshond",
      "Japanese Spitz",
      "Volpino Italiano"
    ],
    "correctAnswer": "Pomeranian",
    "difficulty": "Medium",
    "tags": [
      "Pomeranian",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Toy Spitz",
      "Pomerania",
      "Germany And Poland",
      "Fluffy Double Coat",
      "Foxlike Face",
      "Pricked Ears",
      "Plumed Tail",
      "Small Companion Dog"
    ],
    "picture": {
      "file": "pp_7d1ea9c35b64.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00034",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which dog breed is shown in this picture?",
    "answers": [
      "Saint Bernard",
      "Bernese Mountain Dog",
      "Newfoundland",
      "Leonberger"
    ],
    "correctAnswer": "Saint Bernard",
    "difficulty": "Medium",
    "tags": [
      "Saint Bernard",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Switzerland",
      "Alpine Rescue Dog",
      "Giant Breed",
      "White And Brown Coat",
      "Heavy Build",
      "Large Head",
      "Mountain Dog",
      "Working Breed"
    ],
    "picture": {
      "file": "pp_e4c28a7d1f95.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00035",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Identify the dog breed in the picture.",
    "answers": [
      "Irish Setter",
      "Gordon Setter",
      "English Setter",
      "Golden Retriever"
    ],
    "correctAnswer": "Irish Setter",
    "difficulty": "Medium",
    "tags": [
      "Irish Setter",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Ireland",
      "Setter",
      "Rich Red Coat",
      "Long Feathering",
      "Gundog Group",
      "Elegant Build",
      "Sporting Dog",
      "Drop Ears"
    ],
    "picture": {
      "file": "pp_5ab97c2e1d40.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00036",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which breed is shown in this picture?",
    "answers": [
      "English Springer Spaniel",
      "Clumber Spaniel",
      "Welsh Springer Spaniel",
      "Brittany Spaniel"
    ],
    "correctAnswer": "English Springer Spaniel",
    "difficulty": "Hard",
    "tags": [
      "English Springer Spaniel",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "England",
      "Spaniel",
      "Flushing Dog",
      "Long Feathered Ears",
      "Black And White Or Liver And White",
      "Gundog Group",
      "Medium Sized Sporting Dog",
      "Friendly Expression"
    ],
    "picture": {
      "file": "pp_d6f14a8bc203.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00037",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which breed is represented here?",
    "answers": [
      "Border Terrier",
      "Cairn Terrier",
      "Scottish Terrier",
      "Jack Russell Terrier"
    ],
    "correctAnswer": "Border Terrier",
    "difficulty": "Hard",
    "tags": [
      "Border Terrier",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Border Country",
      "England And Scotland",
      "Small Terrier",
      "Otter Shaped Head",
      "Wiry Coat",
      "Working Terrier",
      "Grizzle And Tan",
      "Compact Build"
    ],
    "picture": {
      "file": "pp_1e4ad79c8b52.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00038",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which dog breed is shown here?",
    "answers": [
      "Bull Terrier",
      "Staffordshire Bull Terrier",
      "American Pit Bull Terrier",
      "Boxer"
    ],
    "correctAnswer": "Bull Terrier",
    "difficulty": "Medium",
    "tags": [
      "Bull Terrier",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "England",
      "Terrier Type",
      "Egg Shaped Head",
      "Small Triangular Eyes",
      "Muscular Body",
      "Short Smooth Coat",
      "Companion And Sporting Breed",
      "Strong Profile"
    ],
    "picture": {
      "file": "pp_a93d17c4e620.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00039",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Name the dog breed in this picture.",
    "answers": [
      "Chow Chow",
      "Akita",
      "Eurasier",
      "Samoyed"
    ],
    "correctAnswer": "Chow Chow",
    "difficulty": "Medium",
    "tags": [
      "Chow Chow",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "China",
      "Spitz Type",
      "Lionlike Ruff",
      "Blue Black Tongue",
      "Dense Double Coat",
      "Curled Tail",
      "Broad Head",
      "Distinctive Mane"
    ],
    "picture": {
      "file": "pp_3c7ab91e5d24.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00040",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which dog breed is shown in this picture?",
    "answers": [
      "Scottish Terrier",
      "West Highland White Terrier",
      "Cairn Terrier",
      "Sealyham Terrier"
    ],
    "correctAnswer": "Scottish Terrier",
    "difficulty": "Medium",
    "tags": [
      "Scottish Terrier",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Scotland",
      "Scottie",
      "Small Terrier",
      "Wiry Black Coat",
      "Beard And Eyebrows",
      "Pricked Ears",
      "Short Legs",
      "Distinctive Silhouette"
    ],
    "picture": {
      "file": "pp_6fa2c84d1b73.jpg"
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
  throw new Error('Pack 443: exported dog-picture question validation failed');
}

module.exports = questions;