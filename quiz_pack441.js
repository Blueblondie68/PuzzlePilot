// PuzzlePilot Bigggggg Quiz — Pack 441: Dog-breed picture identification.
// Ten illustrated dog breeds; the original bot mirrors the metadata to Neon.
// Image files are hosted separately by the public PuzzlePilot Activity.
// AI-generated breed illustrations, not authenticated breed photographs.
'use strict';

const questions = [
  {
    "id": "dogpic_00001",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which breed of dog is pictured?",
    "answers": [
      "Labrador Retriever",
      "Golden Retriever",
      "Flat-Coated Retriever",
      "German Shorthaired Pointer"
    ],
    "correctAnswer": "Labrador Retriever",
    "difficulty": "Easy",
    "tags": [
      "Labrador Retriever",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Labrador",
      "Retrieving Breed",
      "Gundog Group",
      "Water Retriever",
      "Short Yellow Coat",
      "Newfoundland Ancestry",
      "British Breed Development",
      "Drop Ears"
    ],
    "picture": {
      "file": "pp_d1fb9df03c50.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00002",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Identify the breed of this dog.",
    "answers": [
      "German Shepherd",
      "Belgian Malinois",
      "Dobermann",
      "Rottweiler"
    ],
    "correctAnswer": "German Shepherd",
    "difficulty": "Easy",
    "tags": [
      "German Shepherd",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "German Shepherd Dog",
      "Germany",
      "Herding Breed",
      "Pricked Ears",
      "Black And Tan Coat",
      "Working Breed",
      "Double Coat",
      "Sheepdog"
    ],
    "picture": {
      "file": "pp_3a9d6c456c2f.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00003",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which dog breed can you see here?",
    "answers": [
      "Dalmatian",
      "English Setter",
      "Pointer",
      "Great Dane"
    ],
    "correctAnswer": "Dalmatian",
    "difficulty": "Easy",
    "tags": [
      "Dalmatian",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Dalmatia",
      "Croatia",
      "Black Spots",
      "Short White Coat",
      "Carriage Dog",
      "Spotted Breed",
      "Athletic Build",
      "Drop Ears"
    ],
    "picture": {
      "file": "pp_0b278ed9c279.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00004",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What breed is the dog in this picture?",
    "answers": [
      "Dachshund",
      "Basset Hound",
      "Beagle",
      "Corgi"
    ],
    "correctAnswer": "Dachshund",
    "difficulty": "Easy",
    "tags": [
      "Dachshund",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Germany",
      "Badger Hunting",
      "Long Body",
      "Short Legs",
      "Scent Hound",
      "Smooth Red Coat",
      "Drop Ears",
      "Hunting Breed"
    ],
    "picture": {
      "file": "pp_6e9aac33a23d.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00005",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What breed does this dog portrait represent?",
    "answers": [
      "Poodle",
      "Bichon Frise",
      "Bedlington Terrier",
      "Cockapoo"
    ],
    "correctAnswer": "Poodle",
    "difficulty": "Easy",
    "tags": [
      "Poodle",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Standard Poodle",
      "Curly Coat",
      "White Poodle",
      "Water Dog Heritage",
      "Distinctive Grooming",
      "Long Muzzle",
      "Gundog History",
      "Elegant Build"
    ],
    "picture": {
      "file": "pp_4001b44f278d.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00006",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Which breed is shown in this picture?",
    "answers": [
      "Border Collie",
      "Australian Shepherd",
      "Rough Collie",
      "Shetland Sheepdog"
    ],
    "correctAnswer": "Border Collie",
    "difficulty": "Medium",
    "tags": [
      "Border Collie",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Scottish Borders",
      "English Scottish Border",
      "Herding Breed",
      "Black And White Coat",
      "Sheepdog",
      "Medium Length Coat",
      "Collie",
      "Working Dog"
    ],
    "picture": {
      "file": "pp_77b1a64feed2.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00007",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Choose the dog breed pictured here.",
    "answers": [
      "Beagle",
      "Basset Hound",
      "Cocker Spaniel",
      "Springer Spaniel"
    ],
    "correctAnswer": "Beagle",
    "difficulty": "Medium",
    "tags": [
      "Beagle",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "English Hound",
      "Scent Hound",
      "Tricolour Coat",
      "Drop Ears",
      "Small Hound",
      "Pack Hunting",
      "Short Coat",
      "White Tipped Tail"
    ],
    "picture": {
      "file": "pp_c25d3fdddacd.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00008",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "What is the breed of this dog?",
    "answers": [
      "Boxer",
      "Staffordshire Bull Terrier",
      "Bullmastiff",
      "Dobermann"
    ],
    "correctAnswer": "Boxer",
    "difficulty": "Medium",
    "tags": [
      "Boxer",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Germany",
      "Working Breed",
      "Fawn Coat",
      "Black Facial Mask",
      "Square Muzzle",
      "Short Coat",
      "Muscular Build",
      "Broad Head"
    ],
    "picture": {
      "file": "pp_930901d0a0ca.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00009",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Name the breed in this picture.",
    "answers": [
      "Shih Tzu",
      "Lhasa Apso",
      "Yorkshire Terrier",
      "Maltese"
    ],
    "correctAnswer": "Shih Tzu",
    "difficulty": "Medium",
    "tags": [
      "Shih Tzu",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Toy Breed",
      "Tibetan Origins",
      "Chinese Court Dog",
      "Long Silky Coat",
      "Short Muzzle",
      "Companion Dog",
      "Small Breed",
      "Drop Ears"
    ],
    "picture": {
      "file": "pp_2122baa92f48.jpg"
    },
    "dailyEligible": true
  },
  {
    "id": "dogpic_00010",
    "category": "Science & Nature",
    "topic": "Dog Breeds",
    "question": "Identify the dog breed in this portrait.",
    "answers": [
      "Siberian Husky",
      "Alaskan Malamute",
      "Samoyed",
      "Akita"
    ],
    "correctAnswer": "Siberian Husky",
    "difficulty": "Medium",
    "tags": [
      "Siberian Husky",
      "Science & Nature",
      "Dog Breeds",
      "Animal Identification",
      "Dogs",
      "Picture Round",
      "Canine",
      "Breed Recognition",
      "Siberia",
      "Sled Dog",
      "Northern Spitz",
      "Blue Eyes",
      "Grey And White Coat",
      "Pricked Ears",
      "Double Coat",
      "Working Sled Breed"
    ],
    "picture": {
      "file": "pp_a7b3f70aca56.jpg"
    },
    "dailyEligible": true
  }
];

if (questions.length !== 10 || new Set(questions.map(q => q.id)).size !== 10 ||
    new Set(questions.map(q => q.picture.file)).size !== 10 ||
    questions.some(q => q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
      new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
      q.tags.length < 15 || q.dailyEligible !== true ||
      !/^pp_[0-9a-f]{12}\.jpg$/.test(q.picture.file))) {
  throw new Error('Pack 441: exported dog-picture question validation failed');
}

module.exports = questions;
