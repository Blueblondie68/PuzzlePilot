// PuzzlePilot — The Bigggggg Quiz — Pack 464
// Chemical element NAME ORIGINS: 105 distinct, clearly stated etymologies.
// Source guide: Royal Society of Chemistry's element-by-element naming histories:
// https://periodic-table.rsc.org/
// For the 2016 names see IUPAC https://iupac.org/iupac-announces-the-names-of-the-elements-113-115-117-and-118/
// Six further verified origins: carbon, arsenic, zirconium, mercury, radon, actinium.
// Thirteen still excluded: unclear etymologies or repetition of the Ytterby fact.
// Remaining less-certain or repetitive etymologies are reserved for review.
// Fact-based name origins, not repeated symbols or atomic-number questions.
'use strict';
const questions = [
  {
    "id": "chem_origin_00001",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Hydrogen mean?",
    "answers": [
      "Stone",
      "Water-forming",
      "Acid-forming",
      "To flow"
    ],
    "correctAnswer": "Water-forming",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Hydrogen",
      "Symbol: H",
      "Atomic Number: 1",
      "Origin: Water-forming",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00002",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which celestial body inspired the name Helium?",
    "answers": [
      "The Moon",
      "The asteroid Pallas",
      "The Earth",
      "The Sun"
    ],
    "correctAnswer": "The Sun",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Helium",
      "Symbol: He",
      "Atomic Number: 2",
      "Origin: The Sun",
      "Origin Category: celestial",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00003",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Lithium mean?",
    "answers": [
      "Water-forming",
      "Stone",
      "Acid-forming",
      "To flow"
    ],
    "correctAnswer": "Stone",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Lithium",
      "Symbol: Li",
      "Atomic Number: 3",
      "Origin: Stone",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00004",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which material or mineral is reflected in the name Beryllium?",
    "answers": [
      "Borax",
      "Nitre",
      "Soda",
      "Beryl"
    ],
    "correctAnswer": "Beryl",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Beryllium",
      "Symbol: Be",
      "Atomic Number: 4",
      "Origin: Beryl",
      "Origin Category: material",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00005",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which material or mineral is reflected in the name Boron?",
    "answers": [
      "Beryl",
      "Borax",
      "Nitre",
      "Soda"
    ],
    "correctAnswer": "Borax",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Boron",
      "Symbol: B",
      "Atomic Number: 5",
      "Origin: Borax",
      "Origin Category: material",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00006",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which material or mineral is reflected in the name Nitrogen?",
    "answers": [
      "Nitre",
      "Borax",
      "Beryl",
      "Soda"
    ],
    "correctAnswer": "Nitre",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Nitrogen",
      "Symbol: N",
      "Atomic Number: 7",
      "Origin: Nitre",
      "Origin Category: material",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00007",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Oxygen mean?",
    "answers": [
      "To flow",
      "New",
      "Acid-forming",
      "Stone"
    ],
    "correctAnswer": "Acid-forming",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Oxygen",
      "Symbol: O",
      "Atomic Number: 8",
      "Origin: Acid-forming",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00008",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Fluorine mean?",
    "answers": [
      "To flow",
      "Acid-forming",
      "New",
      "Flint"
    ],
    "correctAnswer": "To flow",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Fluorine",
      "Symbol: F",
      "Atomic Number: 9",
      "Origin: To flow",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00009",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Neon mean?",
    "answers": [
      "To flow",
      "Acid-forming",
      "New",
      "Flint"
    ],
    "correctAnswer": "New",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Neon",
      "Symbol: Ne",
      "Atomic Number: 10",
      "Origin: New",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00010",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which material or mineral is reflected in the name Sodium?",
    "answers": [
      "Soda",
      "Alum",
      "Nitre",
      "Borax"
    ],
    "correctAnswer": "Soda",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Sodium",
      "Symbol: Na",
      "Atomic Number: 11",
      "Origin: Soda",
      "Origin Category: material",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00011",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Magnesium?",
    "answers": [
      "Scandinavia",
      "Cyprus",
      "Magnesia in Greece",
      "Gaul"
    ],
    "correctAnswer": "Magnesia in Greece",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Magnesium",
      "Symbol: Mg",
      "Atomic Number: 12",
      "Origin: Magnesia in Greece",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00012",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which material or mineral is reflected in the name Aluminium?",
    "answers": [
      "Alum",
      "Soda",
      "Nitre",
      "Potash"
    ],
    "correctAnswer": "Alum",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Aluminium",
      "Symbol: Al",
      "Atomic Number: 13",
      "Origin: Alum",
      "Origin Category: material",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00013",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Silicon mean?",
    "answers": [
      "Light-bearer",
      "Pale green",
      "Flint",
      "New"
    ],
    "correctAnswer": "Flint",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Silicon",
      "Symbol: Si",
      "Atomic Number: 14",
      "Origin: Flint",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00014",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Phosphorus mean?",
    "answers": [
      "Light-bearer",
      "Flint",
      "Pale green",
      "Inactive"
    ],
    "correctAnswer": "Light-bearer",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Phosphorus",
      "Symbol: P",
      "Atomic Number: 15",
      "Origin: Light-bearer",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00015",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Chlorine mean?",
    "answers": [
      "Inactive",
      "Light-bearer",
      "Flint",
      "Pale green"
    ],
    "correctAnswer": "Pale green",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Chlorine",
      "Symbol: Cl",
      "Atomic Number: 17",
      "Origin: Pale green",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00016",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Argon mean?",
    "answers": [
      "Pale green",
      "Inactive",
      "Light-bearer",
      "Flint"
    ],
    "correctAnswer": "Inactive",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Argon",
      "Symbol: Ar",
      "Atomic Number: 18",
      "Origin: Inactive",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00017",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which material or mineral is reflected in the name Potassium?",
    "answers": [
      "Lime",
      "Alum",
      "Soda",
      "Potash"
    ],
    "correctAnswer": "Potash",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Potassium",
      "Symbol: K",
      "Atomic Number: 19",
      "Origin: Potash",
      "Origin Category: material",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00018",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which material or mineral is reflected in the name Calcium?",
    "answers": [
      "Potash",
      "Lime",
      "Alum",
      "Soda"
    ],
    "correctAnswer": "Lime",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Calcium",
      "Symbol: Ca",
      "Atomic Number: 20",
      "Origin: Lime",
      "Origin Category: material",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00019",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Scandium?",
    "answers": [
      "Cyprus",
      "Magnesia in Greece",
      "Gaul",
      "Scandinavia"
    ],
    "correctAnswer": "Scandinavia",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Scandium",
      "Symbol: Sc",
      "Atomic Number: 21",
      "Origin: Scandinavia",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00020",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which mythological figure or being inspired the name Titanium?",
    "answers": [
      "Vanadis",
      "The Titans",
      "A goblin or kobold",
      "A mischievous mining spirit"
    ],
    "correctAnswer": "The Titans",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Titanium",
      "Symbol: Ti",
      "Atomic Number: 22",
      "Origin: The Titans",
      "Origin Category: myth",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00021",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which mythological figure or being inspired the name Vanadium?",
    "answers": [
      "The Titans",
      "A goblin or kobold",
      "A mischievous mining spirit",
      "Vanadis"
    ],
    "correctAnswer": "Vanadis",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Vanadium",
      "Symbol: V",
      "Atomic Number: 23",
      "Origin: Vanadis",
      "Origin Category: myth",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00022",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Chromium mean?",
    "answers": [
      "Inactive",
      "Colour",
      "Pale green",
      "Light-bearer"
    ],
    "correctAnswer": "Colour",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Chromium",
      "Symbol: Cr",
      "Atomic Number: 24",
      "Origin: Colour",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00023",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which mythological figure or being inspired the name Cobalt?",
    "answers": [
      "A mischievous mining spirit",
      "A goblin or kobold",
      "Vanadis",
      "The Titans"
    ],
    "correctAnswer": "A goblin or kobold",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Cobalt",
      "Symbol: Co",
      "Atomic Number: 27",
      "Origin: A goblin or kobold",
      "Origin Category: myth",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00024",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which mythological figure or being inspired the name Nickel?",
    "answers": [
      "A goblin or kobold",
      "Vanadis",
      "The Titans",
      "A mischievous mining spirit"
    ],
    "correctAnswer": "A mischievous mining spirit",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Nickel",
      "Symbol: Ni",
      "Atomic Number: 28",
      "Origin: A mischievous mining spirit",
      "Origin Category: myth",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00025",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Copper?",
    "answers": [
      "Gaul",
      "Cyprus",
      "Germany",
      "Scandinavia"
    ],
    "correctAnswer": "Cyprus",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Copper",
      "Symbol: Cu",
      "Atomic Number: 29",
      "Origin: Cyprus",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00026",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Gallium?",
    "answers": [
      "Gaul",
      "Germany",
      "Cyprus",
      "Strontian in Scotland"
    ],
    "correctAnswer": "Gaul",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Gallium",
      "Symbol: Ga",
      "Atomic Number: 31",
      "Origin: Gaul",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00027",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Germanium?",
    "answers": [
      "Gaul",
      "Cyprus",
      "Germany",
      "Strontian in Scotland"
    ],
    "correctAnswer": "Germany",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Germanium",
      "Symbol: Ge",
      "Atomic Number: 32",
      "Origin: Germany",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00028",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which celestial body inspired the name Selenium?",
    "answers": [
      "The asteroid Pallas",
      "The Moon",
      "The Earth",
      "Ceres"
    ],
    "correctAnswer": "The Moon",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Selenium",
      "Symbol: Se",
      "Atomic Number: 34",
      "Origin: The Moon",
      "Origin Category: celestial",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00029",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Bromine mean?",
    "answers": [
      "Hidden",
      "Deep red",
      "Lead",
      "A stench"
    ],
    "correctAnswer": "A stench",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Bromine",
      "Symbol: Br",
      "Atomic Number: 35",
      "Origin: A stench",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00030",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Krypton mean?",
    "answers": [
      "A stench",
      "Hidden",
      "Deep red",
      "Lead"
    ],
    "correctAnswer": "Hidden",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Krypton",
      "Symbol: Kr",
      "Atomic Number: 36",
      "Origin: Hidden",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00031",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Rubidium mean?",
    "answers": [
      "Hidden",
      "A stench",
      "Lead",
      "Deep red"
    ],
    "correctAnswer": "Deep red",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Rubidium",
      "Symbol: Rb",
      "Atomic Number: 37",
      "Origin: Deep red",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00032",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Strontium?",
    "answers": [
      "Ytterby in Sweden",
      "Strontian in Scotland",
      "Germany",
      "Ruthenia"
    ],
    "correctAnswer": "Strontian in Scotland",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Strontium",
      "Symbol: Sr",
      "Atomic Number: 38",
      "Origin: Strontian in Scotland",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00033",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Yttrium?",
    "answers": [
      "Strontian in Scotland",
      "Ruthenia",
      "Germany",
      "Ytterby in Sweden"
    ],
    "correctAnswer": "Ytterby in Sweden",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Yttrium",
      "Symbol: Y",
      "Atomic Number: 39",
      "Origin: Ytterby in Sweden",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00034",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which mythological figure or being inspired the name Niobium?",
    "answers": [
      "A mischievous mining spirit",
      "A goblin or kobold",
      "Niobe",
      "Vanadis"
    ],
    "correctAnswer": "Niobe",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Niobium",
      "Symbol: Nb",
      "Atomic Number: 41",
      "Origin: Niobe",
      "Origin Category: myth",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00035",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Molybdenum mean?",
    "answers": [
      "Lead",
      "Artificial",
      "Rose-coloured",
      "Deep red"
    ],
    "correctAnswer": "Lead",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Molybdenum",
      "Symbol: Mo",
      "Atomic Number: 42",
      "Origin: Lead",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00036",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Technetium mean?",
    "answers": [
      "Lead",
      "Rose-coloured",
      "Artificial",
      "Deep red"
    ],
    "correctAnswer": "Artificial",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Technetium",
      "Symbol: Tc",
      "Atomic Number: 43",
      "Origin: Artificial",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00037",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Ruthenium?",
    "answers": [
      "Ruthenia",
      "Ytterby in Sweden",
      "Strontian in Scotland",
      "Germany"
    ],
    "correctAnswer": "Ruthenia",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Ruthenium",
      "Symbol: Ru",
      "Atomic Number: 44",
      "Origin: Ruthenia",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00038",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Rhodium mean?",
    "answers": [
      "Artificial",
      "Lead",
      "Rose-coloured",
      "Indigo"
    ],
    "correctAnswer": "Rose-coloured",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Rhodium",
      "Symbol: Rh",
      "Atomic Number: 45",
      "Origin: Rose-coloured",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00039",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which celestial body inspired the name Palladium?",
    "answers": [
      "The asteroid Pallas",
      "The Earth",
      "The Moon",
      "Ceres"
    ],
    "correctAnswer": "The asteroid Pallas",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Palladium",
      "Symbol: Pd",
      "Atomic Number: 46",
      "Origin: The asteroid Pallas",
      "Origin Category: celestial",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00040",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which material or mineral is reflected in the name Cadmium?",
    "answers": [
      "Samarskite",
      "Lime",
      "Potash",
      "Calamine"
    ],
    "correctAnswer": "Calamine",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Cadmium",
      "Symbol: Cd",
      "Atomic Number: 48",
      "Origin: Calamine",
      "Origin Category: material",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00041",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Indium mean?",
    "answers": [
      "Rose-coloured",
      "Indigo",
      "Violet",
      "A stranger"
    ],
    "correctAnswer": "Indigo",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Indium",
      "Symbol: In",
      "Atomic Number: 49",
      "Origin: Indigo",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00042",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which celestial body inspired the name Tellurium?",
    "answers": [
      "The asteroid Pallas",
      "The Earth",
      "Ceres",
      "The Moon"
    ],
    "correctAnswer": "The Earth",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Tellurium",
      "Symbol: Te",
      "Atomic Number: 52",
      "Origin: The Earth",
      "Origin Category: celestial",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00043",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Iodine mean?",
    "answers": [
      "A stranger",
      "Sky blue",
      "Heavy",
      "Violet"
    ],
    "correctAnswer": "Violet",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Iodine",
      "Symbol: I",
      "Atomic Number: 53",
      "Origin: Violet",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00044",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Xenon mean?",
    "answers": [
      "Violet",
      "A stranger",
      "Sky blue",
      "Heavy"
    ],
    "correctAnswer": "A stranger",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Xenon",
      "Symbol: Xe",
      "Atomic Number: 54",
      "Origin: A stranger",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00045",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Caesium mean?",
    "answers": [
      "A stranger",
      "Heavy",
      "Violet",
      "Sky blue"
    ],
    "correctAnswer": "Sky blue",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Caesium",
      "Symbol: Cs",
      "Atomic Number: 55",
      "Origin: Sky blue",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00046",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Barium mean?",
    "answers": [
      "Sky blue",
      "Heavy",
      "To lie hidden",
      "A stranger"
    ],
    "correctAnswer": "Heavy",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Barium",
      "Symbol: Ba",
      "Atomic Number: 56",
      "Origin: Heavy",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00047",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Lanthanum mean?",
    "answers": [
      "Heavy",
      "Sky blue",
      "Green twin",
      "To lie hidden"
    ],
    "correctAnswer": "To lie hidden",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Lanthanum",
      "Symbol: La",
      "Atomic Number: 57",
      "Origin: To lie hidden",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00048",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which celestial body inspired the name Cerium?",
    "answers": [
      "The Earth",
      "Ceres",
      "The asteroid Pallas",
      "The Moon"
    ],
    "correctAnswer": "Ceres",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Cerium",
      "Symbol: Ce",
      "Atomic Number: 58",
      "Origin: Ceres",
      "Origin Category: celestial",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00049",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Praseodymium mean?",
    "answers": [
      "New twin",
      "To lie hidden",
      "Heavy",
      "Green twin"
    ],
    "correctAnswer": "Green twin",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Praseodymium",
      "Symbol: Pr",
      "Atomic Number: 59",
      "Origin: Green twin",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00050",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Neodymium mean?",
    "answers": [
      "Green twin",
      "New twin",
      "To lie hidden",
      "Heavy"
    ],
    "correctAnswer": "New twin",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Neodymium",
      "Symbol: Nd",
      "Atomic Number: 60",
      "Origin: New twin",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00051",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which mythological figure or being inspired the name Promethium?",
    "answers": [
      "Tantalus",
      "Niobe",
      "Thor",
      "Prometheus"
    ],
    "correctAnswer": "Prometheus",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Promethium",
      "Symbol: Pm",
      "Atomic Number: 61",
      "Origin: Prometheus",
      "Origin Category: myth",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00052",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which material or mineral is reflected in the name Samarium?",
    "answers": [
      "Calamine",
      "Samarskite",
      "Lime",
      "Potash"
    ],
    "correctAnswer": "Samarskite",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Samarium",
      "Symbol: Sm",
      "Atomic Number: 62",
      "Origin: Samarskite",
      "Origin Category: material",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00053",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Europium?",
    "answers": [
      "Stockholm",
      "Thule, the far north",
      "Paris",
      "Europe"
    ],
    "correctAnswer": "Europe",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Europium",
      "Symbol: Eu",
      "Atomic Number: 63",
      "Origin: Europe",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00054",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which person is honoured by the name Gadolinium?",
    "answers": [
      "Marie and Pierre Curie",
      "Johan Gadolin",
      "Albert Einstein",
      "Enrico Fermi"
    ],
    "correctAnswer": "Johan Gadolin",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Gadolinium",
      "Symbol: Gd",
      "Atomic Number: 64",
      "Origin: Johan Gadolin",
      "Origin Category: person",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00055",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Dysprosium mean?",
    "answers": [
      "Hard to obtain",
      "New twin",
      "Green twin",
      "Heavy stone"
    ],
    "correctAnswer": "Hard to obtain",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Dysprosium",
      "Symbol: Dy",
      "Atomic Number: 66",
      "Origin: Hard to obtain",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00056",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Holmium?",
    "answers": [
      "Thule, the far north",
      "Europe",
      "Stockholm",
      "Paris"
    ],
    "correctAnswer": "Stockholm",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Holmium",
      "Symbol: Ho",
      "Atomic Number: 67",
      "Origin: Stockholm",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00057",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Thulium?",
    "answers": [
      "Stockholm",
      "Thule, the far north",
      "Paris",
      "Copenhagen"
    ],
    "correctAnswer": "Thule, the far north",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Thulium",
      "Symbol: Tm",
      "Atomic Number: 69",
      "Origin: Thule, the far north",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00058",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Lutetium?",
    "answers": [
      "Paris",
      "Copenhagen",
      "Thule, the far north",
      "Stockholm"
    ],
    "correctAnswer": "Paris",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Lutetium",
      "Symbol: Lu",
      "Atomic Number: 71",
      "Origin: Paris",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00059",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Hafnium?",
    "answers": [
      "Paris",
      "Thule, the far north",
      "Copenhagen",
      "The River Rhine"
    ],
    "correctAnswer": "Copenhagen",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Hafnium",
      "Symbol: Hf",
      "Atomic Number: 72",
      "Origin: Copenhagen",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00060",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which mythological figure or being inspired the name Tantalum?",
    "answers": [
      "Tantalus",
      "Prometheus",
      "Thor",
      "Niobe"
    ],
    "correctAnswer": "Tantalus",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Tantalum",
      "Symbol: Ta",
      "Atomic Number: 73",
      "Origin: Tantalus",
      "Origin Category: myth",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00061",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Tungsten mean?",
    "answers": [
      "Smell",
      "Rainbow",
      "Heavy stone",
      "Little silver"
    ],
    "correctAnswer": "Heavy stone",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Tungsten",
      "Symbol: W",
      "Atomic Number: 74",
      "Origin: Heavy stone",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00062",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Rhenium?",
    "answers": [
      "The River Rhine",
      "Copenhagen",
      "Paris",
      "Thule, the far north"
    ],
    "correctAnswer": "The River Rhine",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Rhenium",
      "Symbol: Re",
      "Atomic Number: 75",
      "Origin: The River Rhine",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00063",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Osmium mean?",
    "answers": [
      "Rainbow",
      "Heavy stone",
      "Smell",
      "Little silver"
    ],
    "correctAnswer": "Smell",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Osmium",
      "Symbol: Os",
      "Atomic Number: 76",
      "Origin: Smell",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00064",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Iridium mean?",
    "answers": [
      "Rainbow",
      "Smell",
      "Little silver",
      "Heavy stone"
    ],
    "correctAnswer": "Rainbow",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Iridium",
      "Symbol: Ir",
      "Atomic Number: 77",
      "Origin: Rainbow",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00065",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Platinum mean?",
    "answers": [
      "Rainbow",
      "Smell",
      "Little silver",
      "A green shoot"
    ],
    "correctAnswer": "Little silver",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Platinum",
      "Symbol: Pt",
      "Atomic Number: 78",
      "Origin: Little silver",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00066",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Thallium mean?",
    "answers": [
      "Little silver",
      "Rainbow",
      "A green shoot",
      "Unstable"
    ],
    "correctAnswer": "A green shoot",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Thallium",
      "Symbol: Tl",
      "Atomic Number: 81",
      "Origin: A green shoot",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00067",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Polonium?",
    "answers": [
      "France",
      "The River Rhine",
      "Poland",
      "The Americas"
    ],
    "correctAnswer": "Poland",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Polonium",
      "Symbol: Po",
      "Atomic Number: 84",
      "Origin: Poland",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00068",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Astatine mean?",
    "answers": [
      "Unstable",
      "A ray",
      "A green shoot",
      "Before actinium"
    ],
    "correctAnswer": "Unstable",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Astatine",
      "Symbol: At",
      "Atomic Number: 85",
      "Origin: Unstable",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00069",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Francium?",
    "answers": [
      "Poland",
      "The Americas",
      "Berkeley, California",
      "France"
    ],
    "correctAnswer": "France",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Francium",
      "Symbol: Fr",
      "Atomic Number: 87",
      "Origin: France",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00070",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Radium mean?",
    "answers": [
      "Unstable",
      "A ray",
      "Before actinium",
      "A green shoot"
    ],
    "correctAnswer": "A ray",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Radium",
      "Symbol: Ra",
      "Atomic Number: 88",
      "Origin: A ray",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00071",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which mythological figure or being inspired the name Thorium?",
    "answers": [
      "Thor",
      "Tantalus",
      "Prometheus",
      "Niobe"
    ],
    "correctAnswer": "Thor",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Thorium",
      "Symbol: Th",
      "Atomic Number: 90",
      "Origin: Thor",
      "Origin Category: myth",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00072",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the historical word behind the name Protactinium mean?",
    "answers": [
      "A ray",
      "Unstable",
      "Before actinium",
      "A green shoot"
    ],
    "correctAnswer": "Before actinium",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Protactinium",
      "Symbol: Pa",
      "Atomic Number: 91",
      "Origin: Before actinium",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00073",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which celestial body inspired the name Uranium?",
    "answers": [
      "Uranus",
      "Neptune",
      "Pluto",
      "Ceres"
    ],
    "correctAnswer": "Uranus",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Uranium",
      "Symbol: U",
      "Atomic Number: 92",
      "Origin: Uranus",
      "Origin Category: celestial",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00074",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which celestial body inspired the name Neptunium?",
    "answers": [
      "Uranus",
      "Pluto",
      "Neptune",
      "Ceres"
    ],
    "correctAnswer": "Neptune",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Neptunium",
      "Symbol: Np",
      "Atomic Number: 93",
      "Origin: Neptune",
      "Origin Category: celestial",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00075",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which celestial body inspired the name Plutonium?",
    "answers": [
      "Pluto",
      "Neptune",
      "Uranus",
      "Ceres"
    ],
    "correctAnswer": "Pluto",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Plutonium",
      "Symbol: Pu",
      "Atomic Number: 94",
      "Origin: Pluto",
      "Origin Category: celestial",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00076",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Americium?",
    "answers": [
      "Berkeley, California",
      "California",
      "The Americas",
      "France"
    ],
    "correctAnswer": "The Americas",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Americium",
      "Symbol: Am",
      "Atomic Number: 95",
      "Origin: The Americas",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00077",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which person is honoured by the name Curium?",
    "answers": [
      "Marie and Pierre Curie",
      "Albert Einstein",
      "Enrico Fermi",
      "Dmitri Mendeleev"
    ],
    "correctAnswer": "Marie and Pierre Curie",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Curium",
      "Symbol: Cm",
      "Atomic Number: 96",
      "Origin: Marie and Pierre Curie",
      "Origin Category: person",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00078",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Berkelium?",
    "answers": [
      "California",
      "The Americas",
      "Berkeley, California",
      "Dubna in Russia"
    ],
    "correctAnswer": "Berkeley, California",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Berkelium",
      "Symbol: Bk",
      "Atomic Number: 97",
      "Origin: Berkeley, California",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00079",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Californium?",
    "answers": [
      "California",
      "Berkeley, California",
      "The Americas",
      "Dubna in Russia"
    ],
    "correctAnswer": "California",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Californium",
      "Symbol: Cf",
      "Atomic Number: 98",
      "Origin: California",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00080",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which person is honoured by the name Einsteinium?",
    "answers": [
      "Enrico Fermi",
      "Dmitri Mendeleev",
      "Albert Einstein",
      "Marie and Pierre Curie"
    ],
    "correctAnswer": "Albert Einstein",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Einsteinium",
      "Symbol: Es",
      "Atomic Number: 99",
      "Origin: Albert Einstein",
      "Origin Category: person",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00081",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which person is honoured by the name Fermium?",
    "answers": [
      "Enrico Fermi",
      "Albert Einstein",
      "Dmitri Mendeleev",
      "Alfred Nobel"
    ],
    "correctAnswer": "Enrico Fermi",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Fermium",
      "Symbol: Fm",
      "Atomic Number: 100",
      "Origin: Enrico Fermi",
      "Origin Category: person",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00082",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which person is honoured by the name Mendelevium?",
    "answers": [
      "Enrico Fermi",
      "Alfred Nobel",
      "Dmitri Mendeleev",
      "Albert Einstein"
    ],
    "correctAnswer": "Dmitri Mendeleev",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Mendelevium",
      "Symbol: Md",
      "Atomic Number: 101",
      "Origin: Dmitri Mendeleev",
      "Origin Category: person",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00083",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which person is honoured by the name Nobelium?",
    "answers": [
      "Alfred Nobel",
      "Dmitri Mendeleev",
      "Ernest Lawrence",
      "Enrico Fermi"
    ],
    "correctAnswer": "Alfred Nobel",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Nobelium",
      "Symbol: No",
      "Atomic Number: 102",
      "Origin: Alfred Nobel",
      "Origin Category: person",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00084",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which person is honoured by the name Lawrencium?",
    "answers": [
      "Alfred Nobel",
      "Ernest Rutherford",
      "Ernest Lawrence",
      "Dmitri Mendeleev"
    ],
    "correctAnswer": "Ernest Lawrence",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Lawrencium",
      "Symbol: Lr",
      "Atomic Number: 103",
      "Origin: Ernest Lawrence",
      "Origin Category: person",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00085",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which person is honoured by the name Rutherfordium?",
    "answers": [
      "Ernest Rutherford",
      "Ernest Lawrence",
      "Alfred Nobel",
      "Glenn Seaborg"
    ],
    "correctAnswer": "Ernest Rutherford",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Rutherfordium",
      "Symbol: Rf",
      "Atomic Number: 104",
      "Origin: Ernest Rutherford",
      "Origin Category: person",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00086",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Dubnium?",
    "answers": [
      "Hesse in Germany",
      "Darmstadt in Germany",
      "Dubna in Russia",
      "California"
    ],
    "correctAnswer": "Dubna in Russia",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Dubnium",
      "Symbol: Db",
      "Atomic Number: 105",
      "Origin: Dubna in Russia",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00087",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which person is honoured by the name Seaborgium?",
    "answers": [
      "Glenn Seaborg",
      "Niels Bohr",
      "Ernest Rutherford",
      "Ernest Lawrence"
    ],
    "correctAnswer": "Glenn Seaborg",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Seaborgium",
      "Symbol: Sg",
      "Atomic Number: 106",
      "Origin: Glenn Seaborg",
      "Origin Category: person",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00088",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which person is honoured by the name Bohrium?",
    "answers": [
      "Glenn Seaborg",
      "Lise Meitner",
      "Niels Bohr",
      "Ernest Rutherford"
    ],
    "correctAnswer": "Niels Bohr",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Bohrium",
      "Symbol: Bh",
      "Atomic Number: 107",
      "Origin: Niels Bohr",
      "Origin Category: person",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00089",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Hassium?",
    "answers": [
      "Hesse in Germany",
      "Darmstadt in Germany",
      "Dubna in Russia",
      "Japan"
    ],
    "correctAnswer": "Hesse in Germany",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Hassium",
      "Symbol: Hs",
      "Atomic Number: 108",
      "Origin: Hesse in Germany",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00090",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which person is honoured by the name Meitnerium?",
    "answers": [
      "Niels Bohr",
      "Wilhelm Röntgen",
      "Lise Meitner",
      "Glenn Seaborg"
    ],
    "correctAnswer": "Lise Meitner",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Meitnerium",
      "Symbol: Mt",
      "Atomic Number: 109",
      "Origin: Lise Meitner",
      "Origin Category: person",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00091",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Darmstadtium?",
    "answers": [
      "Darmstadt in Germany",
      "Hesse in Germany",
      "Japan",
      "Dubna in Russia"
    ],
    "correctAnswer": "Darmstadt in Germany",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Darmstadtium",
      "Symbol: Ds",
      "Atomic Number: 110",
      "Origin: Darmstadt in Germany",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00092",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which person is honoured by the name Roentgenium?",
    "answers": [
      "Nicolaus Copernicus",
      "Lise Meitner",
      "Wilhelm Röntgen",
      "Niels Bohr"
    ],
    "correctAnswer": "Wilhelm Röntgen",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Roentgenium",
      "Symbol: Rg",
      "Atomic Number: 111",
      "Origin: Wilhelm Röntgen",
      "Origin Category: person",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00093",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which person is honoured by the name Copernicium?",
    "answers": [
      "Nicolaus Copernicus",
      "Wilhelm Röntgen",
      "Lise Meitner",
      "Niels Bohr"
    ],
    "correctAnswer": "Nicolaus Copernicus",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Copernicium",
      "Symbol: Cn",
      "Atomic Number: 112",
      "Origin: Nicolaus Copernicus",
      "Origin Category: person",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00094",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Nihonium?",
    "answers": [
      "The Moscow region",
      "Darmstadt in Germany",
      "Japan",
      "Tennessee"
    ],
    "correctAnswer": "Japan",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Nihonium",
      "Symbol: Nh",
      "Atomic Number: 113",
      "Origin: Japan",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00095",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which scientific institution is honoured by the name Flerovium?",
    "answers": [
      "The Flerov Laboratory of Nuclear Reactions",
      "The Cavendish Laboratory",
      "Oak Ridge National Laboratory",
      "CERN"
    ],
    "correctAnswer": "The Flerov Laboratory of Nuclear Reactions",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Flerovium",
      "Symbol: Fl",
      "Atomic Number: 114",
      "Origin: The Flerov Laboratory of Nuclear Reactions",
      "Origin Category: institution",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00096",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Moscovium?",
    "answers": [
      "Japan",
      "Tennessee",
      "The Moscow region",
      "Darmstadt in Germany"
    ],
    "correctAnswer": "The Moscow region",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Moscovium",
      "Symbol: Mc",
      "Atomic Number: 115",
      "Origin: The Moscow region",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00097",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which scientific institution is honoured by the name Livermorium?",
    "answers": [
      "Lawrence Livermore National Laboratory",
      "Flerov Laboratory of Nuclear Reactions",
      "Oak Ridge National Laboratory",
      "Argonne National Laboratory"
    ],
    "correctAnswer": "Lawrence Livermore National Laboratory",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Livermorium",
      "Symbol: Lv",
      "Atomic Number: 116",
      "Origin: Lawrence Livermore National Laboratory",
      "Origin Category: institution",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00098",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which place or region is honoured by the name Tennessine?",
    "answers": [
      "The Moscow region",
      "Japan",
      "Tennessee",
      "Darmstadt in Germany"
    ],
    "correctAnswer": "Tennessee",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Tennessine",
      "Symbol: Ts",
      "Atomic Number: 117",
      "Origin: Tennessee",
      "Origin Category: place",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00099",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which person is honoured by the name Oganesson?",
    "answers": [
      "Yuri Oganessian",
      "Nicolaus Copernicus",
      "Wilhelm Röntgen",
      "Lise Meitner"
    ],
    "correctAnswer": "Yuri Oganessian",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Oganesson",
      "Symbol: Og",
      "Atomic Number: 118",
      "Origin: Yuri Oganessian",
      "Origin Category: person",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00100",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the Latin word carbo, from which carbon gets its name, mean?",
    "answers": [
      "Salt",
      "Lime",
      "Chalk",
      "Charcoal"
    ],
    "correctAnswer": "Charcoal",
    "difficulty": "Easy",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Carbon",
      "Symbol: C",
      "Atomic Number: 6",
      "Origin: Charcoal",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00101",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which historical yellow pigment is linked to the origin of the name arsenic?",
    "answers": [
      "Orpiment",
      "Ochre",
      "Cinnabar",
      "Ultramarine"
    ],
    "correctAnswer": "Orpiment",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Arsenic",
      "Symbol: As",
      "Atomic Number: 33",
      "Origin: Orpiment",
      "Origin Category: material",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00102",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which mineral gave the element zirconium its name?",
    "answers": [
      "Zirconia",
      "Zircon",
      "Beryl",
      "Rutile"
    ],
    "correctAnswer": "Zircon",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Zirconium",
      "Symbol: Zr",
      "Atomic Number: 40",
      "Origin: Zircon",
      "Origin Category: material",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00103",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "Which Roman god inspired the English name of the element mercury?",
    "answers": [
      "Vulcan",
      "Mars",
      "Mercury",
      "Jupiter"
    ],
    "correctAnswer": "Mercury",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Mercury",
      "Symbol: Hg",
      "Atomic Number: 80",
      "Origin: Mercury",
      "Origin Category: myth",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00104",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "The element radon was named from the name of which radioactive element?",
    "answers": [
      "Thorium",
      "Uranium",
      "Actinium",
      "Radium"
    ],
    "correctAnswer": "Radium",
    "difficulty": "Medium",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Radon",
      "Symbol: Rn",
      "Atomic Number: 86",
      "Origin: Radium",
      "Origin Category: material",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "chem_origin_00105",
    "category": "Science & Nature",
    "topic": "Chemical Element Name Origins",
    "question": "What does the Greek word behind the name actinium mean?",
    "answers": [
      "Ray",
      "Shadow",
      "Stone",
      "Light"
    ],
    "correctAnswer": "Ray",
    "difficulty": "Hard",
    "tags": [
      "Science & Nature",
      "Chemistry",
      "Periodic Table",
      "Chemical Elements",
      "Element Naming",
      "Name Etymology",
      "Element: Actinium",
      "Symbol: Ac",
      "Atomic Number: 89",
      "Origin: Ray",
      "Origin Category: meaning",
      "Historical Terminology",
      "UK Chemistry",
      "Written Questions"
    ],
    "dailyEligible": true
  }
];
if (questions.length!==105 ||
 new Set(questions.map(q=>q.id)).size!==105 ||
 new Set(questions.map(q=>q.question.toLowerCase())).size!==105 ||
 questions.some((q,i)=>
 q.id!=='chem_origin_'+String(i+1).padStart(5,'0') ||
 q.category!=='Science & Nature' || q.topic!=='Chemical Element Name Origins' ||
 !Array.isArray(q.answers) || q.answers.length!==4 ||
 new Set(q.answers.map(a=>a.toLowerCase())).size!==4 ||
 q.answers.filter(a=>a===q.correctAnswer).length!==1 ||
 !Array.isArray(q.tags) || q.tags.length<12 ||
 new Set(q.tags).size!==q.tags.length ||
 !['Easy','Medium','Hard'].includes(q.difficulty) || q.dailyEligible!==true)) {
 throw new Error('Pack 464 origin validation failed');
}
module.exports = questions;
