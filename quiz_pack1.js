// quiz_pack1.js
// PuzzlePilot Big Quiz - Mixed Question Pack 1
// Existing IDs preserved; corrections and new questions included.
// Adds Film, General Knowledge, History, Geography, Science & Nature,
// Food & Drink, Sport and Literature questions.
// Music and Television question counts are unchanged.

const questions = [

    // =======================================================
    // MUSIC
    // =======================================================

    {
        id: "music_0001",
        category: "Music",
        question: "Which band released Bohemian Rhapsody?",
        answers: ["Queen", "ABBA", "Fleetwood Mac", "The Who"],
        correctAnswer: "Queen",
        difficulty: "Easy",
        tags: ["1970s", "british", "bands", "songs"],
        dailyEligible: true
    },

    {
        id: "music_0002",
        category: "Music",
        question: "Which singer released the album 21?",
        answers: ["Adele", "Amy Winehouse", "Dua Lipa", "Ellie Goulding"],
        correctAnswer: "Adele",
        difficulty: "Easy",
        tags: ["2010s", "british", "albums", "singers"],
        dailyEligible: true
    },

    {
        id: "music_0003",
        category: "Music",
        question: "Which group had a hit with Dancing Queen?",
        answers: ["ABBA", "Boney M", "Blondie", "Bee Gees"],
        correctAnswer: "ABBA",
        difficulty: "Easy",
        tags: ["1970s", "songs", "groups"],
        dailyEligible: true
    },

    {
        id: "music_0004",
        category: "Music",
        question: "Which singer was known as the King of Pop?",
        answers: ["Michael Jackson", "Prince", "Elton John", "George Michael"],
        correctAnswer: "Michael Jackson",
        difficulty: "Easy",
        tags: ["1980s", "1990s", "american", "singers"],
        dailyEligible: true
    },

    {
        id: "music_0005",
        category: "Music",
        question: "Which British band released Wonderwall?",
        answers: ["Oasis", "Blur", "Pulp", "Suede"],
        correctAnswer: "Oasis",
        difficulty: "Easy",
        tags: ["1990s", "british", "bands", "songs"],
        dailyEligible: true
    },

    {
        id: "music_0006",
        category: "Music",
        question: "Which singer had a hit with Girls Just Want to Have Fun?",
        answers: ["Cyndi Lauper", "Madonna", "Tina Turner", "Whitney Houston"],
        correctAnswer: "Cyndi Lauper",
        difficulty: "Medium",
        tags: ["1980s", "american", "songs", "singers"],
        dailyEligible: true
    },

    // =======================================================
    // TELEVISION
    // =======================================================

    {
        id: "tv_0001",
        category: "TV",
        question: "What is the surname of Del Boy and Rodney in Only Fools and Horses?",
        answers: ["Trotter", "Turner", "Trigger", "Tucker"],
        correctAnswer: "Trotter",
        difficulty: "Easy",
        tags: ["british", "comedy", "1980s", "only fools and horses"],
        dailyEligible: true
    },

    {
        id: "tv_0002",
        category: "TV",
        question: "Which fictional town is the setting for Coronation Street?",
        answers: ["Weatherfield", "Walford", "Emmerdale", "Hollyoaks"],
        correctAnswer: "Weatherfield",
        difficulty: "Easy",
        tags: ["british", "soaps", "coronation street"],
        dailyEligible: true
    },

    {
        id: "tv_0003",
        category: "TV",
        question: "What is the name of the coffee shop regularly visited by the characters in Friends?",
        answers: ["Central Perk", "Coffee Central", "Central Café", "Manhattan Perk"],
        correctAnswer: "Central Perk",
        difficulty: "Easy",
        tags: ["american", "comedy", "1990s", "friends"],
        dailyEligible: true
    },

    {
        id: "tv_0004",
        category: "TV",
        question: "Which actor played the Ninth Doctor in Doctor Who?",
        answers: ["Christopher Eccleston", "David Tennant", "Matt Smith", "Peter Capaldi"],
        correctAnswer: "Christopher Eccleston",
        difficulty: "Medium",
        tags: ["british", "science fiction", "doctor who", "2000s"],
        dailyEligible: true
    },

    {
        id: "tv_0005",
        category: "TV",
        question: "In The Simpsons, what is the name of the family dog?",
        answers: ["Santa's Little Helper", "Snowball", "Bongo", "Laddie"],
        correctAnswer: "Santa's Little Helper",
        difficulty: "Medium",
        tags: ["american", "animation", "comedy", "the simpsons"],
        dailyEligible: true
    },

    {
        id: "tv_0006",
        category: "TV",
        question: "Which British TV quiz show features The Chaser?",
        answers: ["The Chase", "Pointless", "Tipping Point", "The Weakest Link"],
        correctAnswer: "The Chase",
        difficulty: "Easy",
        tags: ["british", "quiz shows", "the chase"],
        dailyEligible: true
    },

    // =======================================================
    // FILM
    // =======================================================

    {
        id: "film_0001",
        category: "Film",
        question: "Who played Jack Dawson in Titanic?",
        answers: ["Leonardo DiCaprio", "Brad Pitt", "Matt Damon", "Johnny Depp"],
        correctAnswer: "Leonardo DiCaprio",
        difficulty: "Easy",
        tags: ["1990s", "actors", "titanic"],
        dailyEligible: true
    },

    {
        id: "film_0002",
        category: "Film",
        question: "Which film features the character Marty McFly?",
        answers: ["Back to the Future", "Ghostbusters", "The Goonies", "Gremlins"],
        correctAnswer: "Back to the Future",
        difficulty: "Easy",
        tags: ["1980s", "science fiction", "back to the future"],
        dailyEligible: true
    },

    {
        id: "film_0003",
        category: "Film",
        question: "Which actor played the title character in the 1990 film Edward Scissorhands?",
        answers: ["Johnny Depp", "Tom Cruise", "Keanu Reeves", "Nicolas Cage"],
        correctAnswer: "Johnny Depp",
        difficulty: "Easy",
        tags: ["1990s", "actors"],
        dailyEligible: true
    },

    {
        id: "film_0004",
        category: "Film",
        question: "What type of fish is Nemo in Finding Nemo?",
        answers: ["Clownfish", "Angelfish", "Pufferfish", "Butterflyfish"],
        correctAnswer: "Clownfish",
        difficulty: "Easy",
        tags: ["2000s", "animation", "finding nemo"],
        dailyEligible: true
    },

    {
        id: "film_0005",
        category: "Film",
        question: "Which actor played Forrest Gump?",
        answers: ["Tom Hanks", "Robin Williams", "Kevin Costner", "Harrison Ford"],
        correctAnswer: "Tom Hanks",
        difficulty: "Easy",
        tags: ["1990s", "actors", "forrest gump"],
        dailyEligible: true
    },

    {
        id: "film_0006",
        category: "Film",
        question: "What colour are Dorothy's famous slippers in the 1939 film The Wizard of Oz?",
        answers: ["Ruby red", "Silver", "Emerald green", "Gold"],
        correctAnswer: "Ruby red",
        difficulty: "Easy",
        tags: ["1930s", "classic film", "fantasy", "the wizard of oz"],
        dailyEligible: true
    },

    {
        id: "film_0131",
        category: "Film",
        question: "In which film does Emma Thompson play Elinor Dashwood?",
        answers: ["Sense and Sensibility", "Howards End", "The Remains of the Day", "Much Ado About Nothing"],
        correctAnswer: "Sense and Sensibility",
        difficulty: "Medium",
        tags: ["1990s", "british", "literary adaptations"],
        dailyEligible: true
    },

    {
        id: "film_0132",
        category: "Film",
        question: "Which actress played Miss Trunchbull in the film Matilda?",
        answers: ["Pam Ferris", "Miriam Margolyes", "Julie Walters", "Imelda Staunton"],
        correctAnswer: "Pam Ferris",
        difficulty: "Medium",
        tags: ["1990s", "actors", "family films"],
        dailyEligible: true
    },

    {
        id: "film_0133",
        category: "Film",
        question: "Which war film features Tom Hanks as Captain John H. Miller?",
        answers: ["Saving Private Ryan", "The Thin Red Line", "Pearl Harbor", "A Bridge Too Far"],
        correctAnswer: "Saving Private Ryan",
        difficulty: "Medium",
        tags: ["1990s", "war films", "actors"],
        dailyEligible: true
    },

    // =======================================================
    // GENERAL KNOWLEDGE
    // =======================================================

    {
        id: "general_0001",
        category: "General Knowledge",
        question: "How many sides does a hexagon have?",
        answers: ["Six", "Five", "Seven", "Eight"],
        correctAnswer: "Six",
        difficulty: "Easy",
        tags: ["mathematics"],
        dailyEligible: true
    },

    {
        id: "general_0002",
        category: "General Knowledge",
        question: "What colour are emeralds?",
        answers: ["Green", "Blue", "Red", "Purple"],
        correctAnswer: "Green",
        difficulty: "Easy",
        tags: ["gemstones"],
        dailyEligible: true
    },

    {
        id: "general_0003",
        category: "General Knowledge",
        question: "How many players does a standard football team have on the pitch at the start of a match?",
        answers: ["11", "10", "12", "9"],
        correctAnswer: "11",
        difficulty: "Easy",
        tags: ["sport", "football", "rules"],
        dailyEligible: true
    },

    {
        id: "general_0062",
        category: "General Knowledge",
        question: "What do the letters ISBN stand for on a book?",
        answers: ["International Standard Book Number", "International Serial Book Number", "International Standard Bibliography Number", "International Book Registration Number"],
        correctAnswer: "International Standard Book Number",
        difficulty: "Medium",
        tags: ["books", "abbreviations", "publishing"],
        dailyEligible: true
    },

    {
        id: "general_0063",
        category: "General Knowledge",
        question: "Which metal is commonly used to protect steel from rusting by galvanising it?",
        answers: ["Zinc", "Tin", "Copper", "Aluminium"],
        correctAnswer: "Zinc",
        difficulty: "Medium",
        tags: ["materials", "technology", "everyday science"],
        dailyEligible: true
    },

    // =======================================================
    // HISTORY
    // =======================================================

    {
        id: "history_0001",
        category: "History",
        question: "In which year did the Second World War end in Europe?",
        answers: ["1945", "1944", "1946", "1943"],
        correctAnswer: "1945",
        difficulty: "Easy",
        tags: ["20th century", "second world war"],
        dailyEligible: true
    },

    {
        id: "history_0002",
        category: "History",
        question: "Which English king had six wives?",
        answers: ["Henry VIII", "Henry VII", "Edward VI", "Richard III"],
        correctAnswer: "Henry VIII",
        difficulty: "Easy",
        tags: ["british", "monarchy", "tudors"],
        dailyEligible: true
    },

    {
        id: "history_0003",
        category: "History",
        question: "Which civilisation built Machu Picchu?",
        answers: ["Inca", "Maya", "Aztec", "Roman"],
        correctAnswer: "Inca",
        difficulty: "Medium",
        tags: ["inca", "15th century", "south america"],
        dailyEligible: true
    },

    {
        id: "history_0056",
        category: "History",
        question: "Which nurse became known as the Lady with the Lamp during the Crimean War?",
        answers: ["Florence Nightingale", "Mary Seacole", "Edith Cavell", "Elizabeth Fry"],
        correctAnswer: "Florence Nightingale",
        difficulty: "Easy",
        tags: ["british", "19th century", "crimean war"],
        dailyEligible: true
    },

    {
        id: "history_0057",
        category: "History",
        question: "Which treaty imposed peace terms on Germany after the First World War?",
        answers: ["Treaty of Versailles", "Treaty of Utrecht", "Treaty of Paris", "Treaty of Tordesillas"],
        correctAnswer: "Treaty of Versailles",
        difficulty: "Medium",
        tags: ["20th century", "first world war", "europe"],
        dailyEligible: true
    },

    {
        id: "history_0058",
        category: "History",
        question: "Which English king was deposed by Henry Bolingbroke?",
        answers: ["Richard II", "Henry V", "Edward II", "Richard III"],
        correctAnswer: "Richard II",
        difficulty: "Hard",
        tags: ["british", "medieval", "monarchy"],
        dailyEligible: true
    },

    {
        id: "history_0059",
        category: "History",
        question: "Who was the first woman to win a Nobel Prize?",
        answers: ["Marie Curie", "Ada Lovelace", "Rosalind Franklin", "Dorothy Hodgkin"],
        correctAnswer: "Marie Curie",
        difficulty: "Medium",
        tags: ["science history", "famous people", "20th century"],
        dailyEligible: true
    },

    {
        id: "history_0060",
        category: "History",
        question: "Which city was the capital of the Byzantine Empire?",
        answers: ["Constantinople", "Rome", "Athens", "Alexandria"],
        correctAnswer: "Constantinople",
        difficulty: "Medium",
        tags: ["medieval", "byzantine empire", "cities"],
        dailyEligible: true
    },

    // =======================================================
    // GEOGRAPHY
    // =======================================================

    {
        id: "geography_0001",
        category: "Geography",
        question: "What is the capital city of Australia?",
        answers: ["Canberra", "Sydney", "Melbourne", "Perth"],
        correctAnswer: "Canberra",
        difficulty: "Medium",
        tags: ["capitals", "australia"],
        dailyEligible: true
    },

    {
        id: "geography_0002",
        category: "Geography",
        question: "Which river flows through London?",
        answers: ["Thames", "Severn", "Mersey", "Tyne"],
        correctAnswer: "Thames",
        difficulty: "Easy",
        tags: ["british", "rivers"],
        dailyEligible: true
    },

    {
        id: "geography_0003",
        category: "Geography",
        question: "Mount Fuji is in which country?",
        answers: ["Japan", "China", "South Korea", "Thailand"],
        correctAnswer: "Japan",
        difficulty: "Easy",
        tags: ["asia", "mountains"],
        dailyEligible: true
    },

    {
        id: "geography_0060",
        category: "Geography",
        question: "Which strait separates southern Spain from Morocco?",
        answers: ["Strait of Gibraltar", "Strait of Dover", "Bosporus", "Strait of Messina"],
        correctAnswer: "Strait of Gibraltar",
        difficulty: "Medium",
        tags: ["europe", "africa", "straits"],
        dailyEligible: true
    },

    {
        id: "geography_0061",
        category: "Geography",
        question: "Which African country is home to the historic city of Timbuktu?",
        answers: ["Mali", "Niger", "Chad", "Senegal"],
        correctAnswer: "Mali",
        difficulty: "Medium",
        tags: ["africa", "cities", "countries"],
        dailyEligible: true
    },

    {
        id: "geography_0062",
        category: "Geography",
        question: "In which English county would you find Cheddar Gorge?",
        answers: ["Somerset", "Devon", "Dorset", "Wiltshire"],
        correctAnswer: "Somerset",
        difficulty: "Medium",
        tags: ["british", "england", "landmarks"],
        dailyEligible: true
    },

    // =======================================================
    // SCIENCE & NATURE
    // =======================================================

    {
        id: "science_0001",
        category: "Science & Nature",
        question: "Which planet is known as the Red Planet?",
        answers: ["Mars", "Venus", "Jupiter", "Mercury"],
        correctAnswer: "Mars",
        difficulty: "Easy",
        tags: ["space", "planets"],
        dailyEligible: true
    },

    {
        id: "science_0002",
        category: "Science & Nature",
        question: "What is the largest organ of the human body?",
        answers: ["Skin", "Liver", "Heart", "Lungs"],
        correctAnswer: "Skin",
        difficulty: "Medium",
        tags: ["human body"],
        dailyEligible: true
    },

    {
        id: "science_0054",
        category: "Science & Nature",
        question: "What is the SI unit of electric current?",
        answers: ["Ampere", "Volt", "Watt", "Ohm"],
        correctAnswer: "Ampere",
        difficulty: "Medium",
        tags: ["physics", "electricity", "units"],
        dailyEligible: true
    },

    {
        id: "science_0055",
        category: "Science & Nature",
        question: "Which part of a typical human cell contains most of its DNA?",
        answers: ["Nucleus", "Cytoplasm", "Cell membrane", "Ribosome"],
        correctAnswer: "Nucleus",
        difficulty: "Medium",
        tags: ["biology", "human body", "cells"],
        dailyEligible: true
    },

    {
        id: "science_0056",
        category: "Science & Nature",
        question: "Which of these mammals lays eggs?",
        answers: ["Platypus", "Otter", "Beaver", "Capybara"],
        correctAnswer: "Platypus",
        difficulty: "Medium",
        tags: ["biology", "animals", "mammals"],
        dailyEligible: true
    },

    // =======================================================
    // FOOD & DRINK
    // =======================================================

    {
        id: "food_0001",
        category: "Food & Drink",
        question: "Which fruit is traditionally used to make cider?",
        answers: ["Apple", "Orange", "Grape", "Cherry"],
        correctAnswer: "Apple",
        difficulty: "Easy",
        tags: ["cider", "fruit", "drink"],
        dailyEligible: true
    },

    {
        id: "food_0002",
        category: "Food & Drink",
        question: "Which type of pastry is traditionally used for profiteroles?",
        answers: ["Choux", "Puff", "Filo", "Shortcrust"],
        correctAnswer: "Choux",
        difficulty: "Medium",
        tags: ["baking", "pastry", "desserts"],
        dailyEligible: true
    },

    {
        id: "food_0035",
        category: "Food & Drink",
        question: "Alongside eggs, which vegetable is the main ingredient in a traditional Spanish tortilla?",
        answers: ["Potato", "Aubergine", "Courgette", "Tomato"],
        correctAnswer: "Potato",
        difficulty: "Medium",
        tags: ["spanish", "dishes", "ingredients"],
        dailyEligible: true
    },

    {
        id: "food_0036",
        category: "Food & Drink",
        question: "Which vegetable is fermented to make sauerkraut?",
        answers: ["Cabbage", "Cauliflower", "Leek", "Celery"],
        correctAnswer: "Cabbage",
        difficulty: "Easy",
        tags: ["vegetables", "fermented foods", "european cuisine"],
        dailyEligible: true
    },

    {
        id: "food_0037",
        category: "Food & Drink",
        question: "Which grain is traditionally used to make tabbouleh?",
        answers: ["Bulgur wheat", "Couscous", "Arborio rice", "Pearl barley"],
        correctAnswer: "Bulgur wheat",
        difficulty: "Medium",
        tags: ["middle eastern cuisine", "grains", "salads"],
        dailyEligible: true
    },

    {
        id: "food_0038",
        category: "Food & Drink",
        question: "Which spirit is traditionally flavoured with juniper berries?",
        answers: ["Gin", "Vodka", "Rum", "Whisky"],
        correctAnswer: "Gin",
        difficulty: "Easy",
        tags: ["drinks", "ingredients", "spirits"],
        dailyEligible: true
    },

    {
        id: "food_0039",
        category: "Food & Drink",
        question: "What is the name of a cooked mixture of flour and fat used to thicken sauces?",
        answers: ["Roux", "Reduction", "Emulsion", "Stock"],
        correctAnswer: "Roux",
        difficulty: "Medium",
        tags: ["cooking techniques", "sauces", "ingredients"],
        dailyEligible: true
    },

    // =======================================================
    // SPORT
    // =======================================================

    {
        id: "sport_0001",
        category: "Sport",
        question: "How many points is a try worth in rugby union?",
        answers: ["5", "3", "6", "7"],
        correctAnswer: "5",
        difficulty: "Medium",
        tags: ["rugby union", "scoring"],
        dailyEligible: true
    },

    {
        id: "sport_0002",
        category: "Sport",
        question: "In tennis, what word represents a score of zero?",
        answers: ["Love", "Nil", "Blank", "Duck"],
        correctAnswer: "Love",
        difficulty: "Easy",
        tags: ["tennis", "scoring"],
        dailyEligible: true
    },

    {
        id: "sport_0035",
        category: "Sport",
        question: "In cricket, what is it called when a batter reaches 100 runs in an innings?",
        answers: ["Century", "Hat-trick", "Over", "Maiden"],
        correctAnswer: "Century",
        difficulty: "Easy",
        tags: ["cricket", "scoring", "terminology"],
        dailyEligible: true
    },

    {
        id: "sport_0036",
        category: "Sport",
        question: "Which country won the first men’s FIFA World Cup in 1930?",
        answers: ["Uruguay", "Brazil", "Argentina", "Italy"],
        correctAnswer: "Uruguay",
        difficulty: "Medium",
        tags: ["football", "world cup", "1930s"],
        dailyEligible: true
    },

    // =======================================================
    // LITERATURE
    // =======================================================

    {
        id: "literature_0036",
        category: "Literature",
        question: "Which author created the Discworld series of novels?",
        answers: ["Terry Pratchett", "Douglas Adams", "Neil Gaiman", "Robert Rankin"],
        correctAnswer: "Terry Pratchett",
        difficulty: "Medium",
        tags: ["british", "authors", "fantasy"],
        dailyEligible: true
    },

    {
        id: "literature_0037",
        category: "Literature",
        question: "Which Charles Dickens novel follows an orphan named Pip?",
        answers: ["Great Expectations", "Oliver Twist", "David Copperfield", "Bleak House"],
        correctAnswer: "Great Expectations",
        difficulty: "Medium",
        tags: ["british", "classic literature", "novels"],
        dailyEligible: true
    }

];

module.exports = questions;
