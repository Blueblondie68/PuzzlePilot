 // quiz_pack236.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 1998
// 100 new questions: tv_7404 to tv_7503
// Fully tagged on creation.
// Leave quiz_bank.js unchanged during the pack audit.

const topicTags = {
    "Tiffany and Grant": [
        "Tiffany Mitchell",
        "Grant Mitchell",
        "Marriage And Tragedy"
    ],
    "The di Marcos": [
        "Di Marco Family",
        "Italian Walford Family",
        "Family Restaurant"
    ],
    "Lola and Mick": [
        "Mick McFarlane",
        "Lola Christie",
        "Music And Family"
    ],
    "The Kapoors": [
        "Gita Kapoor",
        "Sanjay Kapoor",
        "Family Departure"
    ],
    "Terry and Irene": [
        "Terry Raymond",
        "Irene Hills",
        "Wedding And Family Secrets"
    ],
    "Steve and Mel": [
        "Steve Owen",
        "Melanie Healy",
        "New Walford Arrivals"
    ],
    "Cindy and Ian": [
        "Cindy Beale",
        "Ian Beale",
        "Children And Family"
    ],
    "New Faces": [
        "Walford Newcomers",
        "Actors And Characters",
        "1998 Introductions"
    ],
    "Fowler Family": [
        "Mark Fowler",
        "Ruth Fowler",
        "Relationships And Fostering"
    ],
    "Christmas and Walford": [
        "Walford Residents",
        "Christmas 1998",
        "Family And Events"
    ]
};

const facts = [
    // TIFFANY AND GRANT
    ["Which Queen Vic barmaid died after being struck by Frank Butcher's car?", "Tiffany Mitchell", ["Bianca Butcher", "Louise Raymond", "Mel Healy"], "Easy", "Tiffany and Grant", ["New Years Eve Tragedy", "Road Accident"]],
    ["Who was driving the car that hit Tiffany Mitchell?", "Frank Butcher", ["Grant Mitchell", "Phil Mitchell", "Roy Evans"], "Easy", "Tiffany and Grant", ["Frank Butcher", "Fatal Collision"]],
    ["Which actress played Tiffany Mitchell?", "Martine McCutcheon", ["Patsy Palmer", "Tamzin Outhwaite", "Lucy Benjamin"], "Easy", "Tiffany and Grant", ["Martine McCutcheon", "Tiffany Actress"]],
    ["Who was Tiffany Mitchell's husband?", "Grant Mitchell", ["Phil Mitchell", "Ricky Butcher", "Beppe di Marco"], "Easy", "Tiffany and Grant", ["Mitchell Marriage", "Grant Husband"]],
    ["What was the name of Tiffany and Grant's young daughter?", "Courtney", ["Louise", "Lucy", "Sonia"], "Easy", "Tiffany and Grant", ["Courtney Mitchell", "Tiffany Daughter"]],
    ["What was Tiffany planning to do with Courtney on the night she died?", "Leave Grant", ["Move to Italy", "Join the police", "Open a salon"], "Medium", "Tiffany and Grant", ["Marriage Breakdown", "Mother And Daughter"]],
    ["Who was Grant carrying when Tiffany ran after him before the accident?", "Courtney Mitchell", ["Ben Mitchell", "Lucy Beale", "Sonia Jackson"], "Medium", "Tiffany and Grant", ["Courtney Mitchell", "Fatal Night"]],
    ["Which holiday marked the night Tiffany died?", "New Year's Eve", ["Christmas Eve", "Easter Sunday", "Boxing Day"], "Easy", "Tiffany and Grant", ["New Years Eve", "1998 Finale"]],

    // THE DI MARCOS
    ["Which Italian family arrived in Walford following the death of their patriarch Giuseppe?", "The di Marcos", ["The Kapoors", "The Flahertys", "The Brannings"], "Easy", "The di Marcos", ["Family Arrival", "Giuseppe Funeral"]],
    ["Which actress played di Marco matriarch Rosa?", "Louise Jameson", ["Barbara Windsor", "Pam St Clement", "Wendy Richard"], "Medium", "The di Marcos", ["Louise Jameson", "Rosa Actress"]],
    ["Which di Marco son was a police officer?", "Beppe di Marco", ["Gianni di Marco", "Joe di Marco", "Bruno di Marco"], "Easy", "The di Marcos", ["Beppe di Marco", "Police Officer"]],
    ["Which actor played Beppe di Marco?", "Michael Greco", ["Marc Bannerman", "Jack Ryder", "Joe Absolom"], "Medium", "The di Marcos", ["Michael Greco", "Beppe Actor"]],
    ["Who was Beppe di Marco's younger brother?", "Gianni di Marco", ["Joe di Marco", "Bruno di Marco", "Tony Hills"], "Easy", "The di Marcos", ["Gianni di Marco", "Brothers"]],
    ["Which actor played Gianni di Marco?", "Marc Bannerman", ["Michael Greco", "Paul Nicholls", "Richard Elis"], "Medium", "The di Marcos", ["Marc Bannerman", "Gianni Actor"]],
    ["Which di Marco was a chef in the family business?", "Gianni di Marco", ["Beppe di Marco", "Joe di Marco", "Bruno di Marco"], "Easy", "The di Marcos", ["Gianni di Marco", "Restaurant Chef"]],
    ["Which actress played Nicky di Marco?", "Carly Hillman", ["Leila Birch", "Louise Jameson", "Patsy Palmer"], "Medium", "The di Marcos", ["Carly Hillman", "Nicky Actress"]],
    ["Which di Marco daughter was played by Leila Birch?", "Teresa di Marco", ["Nicky di Marco", "Rosa di Marco", "Luisa di Marco"], "Medium", "The di Marcos", ["Leila Birch", "Teresa Actress"]],
    ["Which elder di Marco was married to Luisa?", "Bruno di Marco", ["Beppe di Marco", "Gianni di Marco", "Joe di Marco"], "Medium", "The di Marcos", ["Bruno di Marco", "Grandparents"]],
    ["Which actor played Bruno di Marco?", "Leon Lissek", ["Paul Moriarty", "Tony Caunter", "Russell Floyd"], "Medium", "The di Marcos", ["Leon Lissek", "Bruno Actor"]],
    ["Which actress played Luisa di Marco?", "Stella Tanner", ["Louise Jameson", "Nicola Cowper", "June Brown"], "Medium", "The di Marcos", ["Stella Tanner", "Luisa Actress"]],
    ["Which young boy was Beppe di Marco's son?", "Joe di Marco", ["Jamie Mitchell", "Martin Fowler", "Robbie Jackson"], "Easy", "The di Marcos", ["Joe di Marco", "Beppe Son"]],
    ["What was the name of the di Marco family's deceased patriarch?", "Giuseppe", ["Giacomo", "Antonio", "Franco"], "Medium", "The di Marcos", ["Giuseppe di Marco", "Family Funeral"]],
    ["Which character was Rosa di Marco's old friend and helped her establish a restaurant?", "George Palmer", ["Roy Evans", "Frank Butcher", "Ian Beale"], "Medium", "The di Marcos", ["George Palmer", "Restaurant Investment"]],
    ["Which di Marco daughter worked on a market stall?", "Teresa di Marco", ["Nicky di Marco", "Rosa di Marco", "Luisa di Marco"], "Medium", "The di Marcos", ["Teresa di Marco", "Market Trading"]],
    ["To which country did Bruno and Luisa choose to move after a visit?", "Italy", ["France", "Spain", "Ireland"], "Medium", "The di Marcos", ["Italy Departure", "Elderly Couple"]],

    // LOLA AND MICK
    ["Which singer auditioned to join Mick McFarlane's band?", "Lola Christie", ["Mel Healy", "Lisa Shaw", "Ruth Fowler"], "Easy", "Lola and Mick", ["Lola Christie", "Jazz Singer"]],
    ["Which actress played Lola Christie?", "Diane Parish", ["Tamzin Outhwaite", "Martine McCutcheon", "Michelle Collins"], "Medium", "Lola and Mick", ["Diane Parish", "Lola Actress"]],
    ["What musical style was associated with Mick McFarlane's band?", "Jazz", ["Punk", "Country", "Heavy metal"], "Easy", "Lola and Mick", ["Jazz Band", "Mick Music"]],
    ["What was the name of Lola Christie's young son?", "Carl", ["Ben", "Jamie", "Joe"], "Medium", "Lola and Mick", ["Carl Christie", "Lola Son"]],
    ["Why did Lola Christie leave Mick's band?", "She secured a solo recording contract", ["She joined the police", "She moved to Canada", "She opened a restaurant"], "Medium", "Lola and Mick", ["Solo Career", "Recording Contract"]],
    ["Which character did Diane Parish later return to play in EastEnders?", "Denise Fox", ["Peggy Mitchell", "Pat Evans", "Sharon Watts"], "Easy", "Lola and Mick", ["Denise Fox", "Different Character"]],
    ["Who was Mick McFarlane's mother?", "Josie McFarlane", ["Louise Raymond", "Rosa di Marco", "Irene Hills"], "Easy", "Lola and Mick", ["Josie McFarlane", "Mick Mother"]],
    ["Which actress played Josie McFarlane?", "Joan Hooley", ["Louise Jameson", "Roberta Taylor", "Barbara Windsor"], "Medium", "Lola and Mick", ["Joan Hooley", "Josie Actress"]],
    ["Who was Kim McFarlane eventually revealed to be to Mick?", "His half-sister", ["His daughter", "His aunt", "His cousin"], "Medium", "Lola and Mick", ["Kim McFarlane", "Family Secret"]],

    // THE KAPOORS
    ["What was the name of Gita Kapoor's baby son born during her absence?", "Arjun", ["Sanjay", "Kofi", "Martin"], "Medium", "The Kapoors", ["Arjun Kapoor", "Baby Boy"]],
    ["Which city did Sanjay find Gita living in with her new baby?", "Birmingham", ["Leicester", "Manchester", "Coventry"], "Medium", "The Kapoors", ["Birmingham", "Family Search"]],
    ["Who was Arjun Kapoor's mother?", "Gita Kapoor", ["Neelam Kapoor", "Meena McKenzie", "Sharmilla Kapoor"], "Easy", "The Kapoors", ["Gita Kapoor", "Arjun Mother"]],
    ["Who was Arjun Kapoor's stepfather?", "Sanjay Kapoor", ["Mark Fowler", "Roy Evans", "George Palmer"], "Easy", "The Kapoors", ["Sanjay Kapoor", "Arjun Stepdad"]],
    ["Which reporter wrote a newspaper story about Gita's baby?", "Polly Becker", ["Mel Healy", "Lisa Shaw", "Ruth Fowler"], "Medium", "The Kapoors", ["Polly Becker", "Walford Gazette"]],
    ["Which child of Sanjay and Gita faced bullying after the story became public?", "Sharmilla Kapoor", ["Courtney Mitchell", "Sonia Jackson", "Lucy Beale"], "Medium", "The Kapoors", ["Sharmilla Kapoor", "School Bullying"]],
    ["Who played Sanjay Kapoor?", "Deepak Verma", ["Jimi Mistry", "Paul Moriarty", "Michael Greco"], "Medium", "The Kapoors", ["Deepak Verma", "Sanjay Actor"]],
    ["Who played Gita Kapoor?", "Shobu Kapoor", ["Jamila Massey", "Diane Parish", "Nadia Sawalha"], "Medium", "The Kapoors", ["Shobu Kapoor", "Gita Actress"]],
    ["Which family left Walford amid unwanted attention from the press?", "The Kapoors", ["The Mitchells", "The Jacksons", "The Roses"], "Easy", "The Kapoors", ["Kapoor Departure", "Newspaper Scandal"]],

    // TERRY AND IRENE
    ["Which woman arrived at Terry Raymond's wedding to reveal she was still married to him?", "Louise Raymond", ["Peggy Mitchell", "Rosa di Marco", "Gina Williams"], "Medium", "Terry and Irene", ["Louise Raymond", "Wedding Interruption"]],
    ["Who was Terry Raymond's estranged wife?", "Louise Raymond", ["Irene Hills", "Pat Evans", "Kathy Mitchell"], "Easy", "Terry and Irene", ["Louise Raymond", "Estranged Marriage"]],
    ["Which actress played Louise Raymond?", "Carol Harrison", ["Roberta Taylor", "Barbara Windsor", "June Brown"], "Medium", "Terry and Irene", ["Carol Harrison", "Louise Actress"]],
    ["Which Walford woman was planning to marry Terry before the interruption?", "Irene Hills", ["Peggy Mitchell", "Pat Evans", "Ruth Fowler"], "Easy", "Terry and Irene", ["Irene Hills", "Wedding Plans"]],
    ["Who was Louise Raymond's daughter?", "Tiffany Mitchell", ["Bianca Butcher", "Teresa di Marco", "Mel Healy"], "Easy", "Terry and Irene", ["Tiffany Mitchell", "Mother Daughter"]],
    ["Who was Louise Raymond's son?", "Simon Raymond", ["Tony Hills", "Beppe di Marco", "Lenny Wallace"], "Easy", "Terry and Irene", ["Simon Raymond", "Mother Son"]],
    ["Which character did Roberta Taylor play?", "Irene Hills", ["Louise Raymond", "Josie McFarlane", "Rosa di Marco"], "Medium", "Terry and Irene", ["Roberta Taylor", "Irene Actress"]],
    ["Who played Terry Raymond?", "Gavin Richards", ["Tony Caunter", "Paul Moriarty", "Leon Lissek"], "Medium", "Terry and Irene", ["Gavin Richards", "Terry Actor"]],
    ["What stopped Terry and Irene's wedding going ahead as planned?", "Terry was still married", ["The church caught fire", "The bride disappeared", "The registrar was ill"], "Medium", "Terry and Irene", ["Bigamy Obstacle", "Wedding Halted"]],

    // STEVE AND MEL
    ["Which former pop singer played nightclub owner Steve Owen?", "Martin Kemp", ["Gary Kemp", "Tony Hadley", "Paul Young"], "Easy", "Steve and Mel", ["Martin Kemp", "Steve Actor"]],
    ["What was the name of Steve Owen's newly renamed nightclub?", "E20", ["The Cobra Club", "Scarlet", "Angie's Den"], "Easy", "Steve and Mel", ["E20 Club", "Nightclub Relaunch"]],
    ["Which earlier venue did Steve Owen take over before creating E20?", "The Market Cellar", ["The Queen Victoria", "Deals on Wheels", "The Arches"], "Medium", "Steve and Mel", ["Market Cellar", "Club Ownership"]],
    ["Which woman was introduced as Steve Owen's former girlfriend?", "Saskia Duncan", ["Mel Healy", "Lisa Shaw", "Polly Becker"], "Easy", "Steve and Mel", ["Saskia Duncan", "Steve Former Partner"]],
    ["Which actress played Saskia Duncan?", "Deborah Sheridan-Taylor", ["Tamzin Outhwaite", "Lucy Benjamin", "Victoria Gould"], "Medium", "Steve and Mel", ["Deborah Sheridan Taylor", "Saskia Actress"]],
    ["Which actress first played Melanie Healy?", "Tamzin Outhwaite", ["Martine McCutcheon", "Lucy Benjamin", "Nicola Cowper"], "Easy", "Steve and Mel", ["Tamzin Outhwaite", "Mel Actress"]],
    ["Which Walford clergyman was Mel Healy's brother?", "Alex Healy", ["Fred Fonseca", "Michael Rose", "Ted Hills"], "Medium", "Steve and Mel", ["Alex Healy", "Mel Brother"]],
    ["Which actress played newly arrived market inspector's assistant Lisa?", "Lucy Benjamin", ["Tamzin Outhwaite", "Victoria Gould", "Diane Parish"], "Medium", "Steve and Mel", ["Lucy Benjamin", "Lisa Actress"]],
    ["Who did Lisa work under when she first arrived?", "Michael Rose", ["Richard Cole", "George Palmer", "Roy Evans"], "Medium", "Steve and Mel", ["Michael Rose", "Market Office"]],

    // CINDY AND IAN
    ["What news was Ian Beale given about Cindy while she was in prison?", "That she had died after giving birth", ["That she had escaped abroad", "That she had bought a club", "That she had married Phil"], "Medium", "Cindy and Ian", ["Reported Death", "Cindy Prison Story"]],
    ["Which of Cindy Beale's sisters appeared following the news of her reported death?", "Gina Williams", ["Mel Healy", "Lisa Shaw", "Ruth Fowler"], "Easy", "Cindy and Ian", ["Gina Williams", "Cindy Sister"]],
    ["Which actress played Gina Williams?", "Nicola Cowper", ["Michelle Collins", "Lucy Benjamin", "Tamzin Outhwaite"], "Medium", "Cindy and Ian", ["Nicola Cowper", "Gina Actress"]],
    ["What was the name given to Cindy's newborn daughter?", "Cindy", ["Lucy", "Bianca", "Courtney"], "Easy", "Cindy and Ian", ["Cindy Junior", "Newborn Daughter"]],
    ["Who was Cindy's newborn daughter's father?", "Nick Holland", ["Ian Beale", "David Wicks", "Phil Mitchell"], "Medium", "Cindy and Ian", ["Nick Holland", "Baby Father"]],
    ["Which son of Cindy Beale was also Ian's child?", "Peter Beale", ["Ben Mitchell", "Jamie Mitchell", "Robbie Jackson"], "Easy", "Cindy and Ian", ["Peter Beale", "Beale Son"]],
    ["Which daughter of Ian Beale was Cindy's child?", "Lucy Beale", ["Courtney Mitchell", "Sonia Jackson", "Sharmilla Kapoor"], "Easy", "Cindy and Ian", ["Lucy Beale", "Beale Daughter"]],
    ["Who was Cindy's eldest son from her earlier relationship with Simon Wicks?", "Steven Beale", ["Peter Beale", "Martin Fowler", "Ben Mitchell"], "Easy", "Cindy and Ian", ["Steven Beale", "Eldest Son"]],
    ["Who took responsibility for Cindy's baby daughter after Ian agreed?", "Gina Williams", ["Peggy Mitchell", "Pat Evans", "Pauline Fowler"], "Medium", "Cindy and Ian", ["Gina Guardianship", "Childcare"]],
    ["Who was still Cindy Beale's legal husband when Walford heard of her reported death?", "Ian Beale", ["Nick Holland", "David Wicks", "Simon Wicks"], "Medium", "Cindy and Ian", ["Ian Beale", "Marriage"]],

    // NEW FACES
    ["Which actor played new GP Fred Fonseca?", "Jimi Mistry", ["Deepak Verma", "Paul Nicholls", "Michael Greco"], "Medium", "New Faces", ["Jimi Mistry", "Fred Actor"]],
    ["Which longstanding Walford doctor did Fred Fonseca replace?", "Dr Legg", ["Dr Truman", "Dr May Wright", "Dr Yusef Khan"], "Easy", "New Faces", ["Dr Legg", "GP Retirement"]],
    ["Which newcomer became Walford's local GP?", "Fred Fonseca", ["Alex Healy", "Michael Rose", "George Palmer"], "Easy", "New Faces", ["Fred Fonseca", "New Doctor"]],
    ["Which young Mitchell was first seen under Billy Mitchell's guardianship?", "Jamie Mitchell", ["Ben Mitchell", "Courtney Mitchell", "Louise Mitchell"], "Easy", "New Faces", ["Jamie Mitchell", "Abusive Guardian"]],
    ["Which actor played Jamie Mitchell?", "Jack Ryder", ["Joe Absolom", "Paul Nicholls", "Jon Lee"], "Medium", "New Faces", ["Jack Ryder", "Jamie Actor"]],
    ["Which actor played Billy Mitchell on his arrival?", "Perry Fenwick", ["Steve McFadden", "Ross Kemp", "Jack Ryder"], "Medium", "New Faces", ["Perry Fenwick", "Billy Actor"]],
    ["Which Mitchell took Jamie into his care after Billy's mistreatment?", "Phil Mitchell", ["Grant Mitchell", "Peggy Mitchell", "Ben Mitchell"], "Easy", "New Faces", ["Phil Mitchell", "Jamie Protection"]],
    ["Which actress played new character Lisa, who worked in the market office?", "Lucy Benjamin", ["Tamzin Outhwaite", "Diane Parish", "Victoria Gould"], "Medium", "New Faces", ["Lucy Benjamin", "Lisa Shaw"]],
    ["Which older woman moved into a flat with Dot Cotton after both lost their homes to fires?", "Lilly Mattock", ["Lou Beale", "Ethel Skinner", "Nellie Ellis"], "Medium", "New Faces", ["Lilly Mattock", "Dot Flatmate"]],
    ["Which actress played Lilly Mattock?", "Barbara Keogh", ["June Brown", "Gretchen Franklin", "Elizabeth Kelly"], "Medium", "New Faces", ["Barbara Keogh", "Lilly Actress"]],

    // FOWLER FAMILY
    ["Which girl were Mark and Ruth Fowler fostering when her mother returned?", "Jessie Moore", ["Clare Bates", "Sonia Jackson", "Nicky di Marco"], "Easy", "Fowler Family", ["Jessie Moore", "Foster Care"]],
    ["Who was Jessie Moore's biological mother?", "Nicole Moore", ["Ruth Fowler", "Kathy Mitchell", "Gina Williams"], "Easy", "Fowler Family", ["Nicole Moore", "Birth Mother"]],
    ["Which actress played Nicole Moore?", "Sara Stephens", ["Caroline Paterson", "Patsy Palmer", "Tamzin Outhwaite"], "Medium", "Fowler Family", ["Sara Stephens", "Nicole Actress"]],
    ["Which married Walford couple had fostered Jessie Moore?", "Mark and Ruth Fowler", ["Ricky and Bianca Butcher", "Phil and Kathy Mitchell", "Grant and Tiffany Mitchell"], "Easy", "Fowler Family", ["Fowler Foster Parents", "Jessie Moore"]],
    ["Which Irish relative of Mark Fowler grew close to Ruth?", "Conor Flaherty", ["Eamonn Flaherty", "Sean Flaherty", "Gerry McCrae"], "Medium", "Fowler Family", ["Conor Flaherty", "Ruth Relationship"]],
    ["What was the surname of Pauline Fowler's newly discovered Irish relatives?", "Flaherty", ["Mitchell", "di Marco", "Kapoor"], "Easy", "Fowler Family", ["Flaherty Family", "Irish Relatives"]],
    ["Which son of Pauline Fowler was married to Ruth?", "Mark Fowler", ["Martin Fowler", "Arthur Fowler", "Ian Beale"], "Easy", "Fowler Family", ["Mark Fowler", "Ruth Husband"]],
    ["Which daughter of Conor Flaherty lived in Walford?", "Mary Flaherty", ["Colette Flaherty", "Nicky di Marco", "Sonia Jackson"], "Medium", "Fowler Family", ["Mary Flaherty", "Conor Daughter"]],
    ["Which actress played Ruth Fowler?", "Caroline Paterson", ["Lindsey Coulson", "Lucy Benjamin", "Patsy Palmer"], "Medium", "Fowler Family", ["Caroline Paterson", "Ruth Actress"]],
    ["What issue caused tension between Mark and Ruth after Conor became close to her?", "Romantic feelings for Conor", ["A dispute over the Queen Vic", "A stolen car", "A market stall fire"], "Medium", "Fowler Family", ["Marriage Tension", "Conor And Ruth"]],

    // CHRISTMAS AND OTHER WALFORD STORIES
    ["Which couple welcomed their son Liam at Christmas?", "Ricky and Bianca Butcher", ["Grant and Tiffany Mitchell", "Ian and Cindy Beale", "Phil and Kathy Mitchell"], "Easy", "Christmas and Walford", ["Liam Butcher", "Christmas Birth"]],
    ["What was the name of Ricky and Bianca's son born at Christmas?", "Liam", ["Ben", "Jamie", "Joe"], "Easy", "Christmas and Walford", ["Liam Butcher", "Butcher Baby"]],
    ["In which Walford pub was Liam Butcher born?", "The Queen Victoria", ["The Dagmar", "The Albert", "The Swan"], "Easy", "Christmas and Walford", ["Queen Victoria Birth", "Pub Delivery"]],
    ["Which actress played Bianca Butcher when Liam was born?", "Patsy Palmer", ["Martine McCutcheon", "Lindsey Coulson", "Lucy Benjamin"], "Easy", "Christmas and Walford", ["Patsy Palmer", "Bianca Actress"]],
    ["Which actor played Liam's father Ricky Butcher?", "Sid Owen", ["Ross Kemp", "Steve McFadden", "Michael Greco"], "Easy", "Christmas and Walford", ["Sid Owen", "Ricky Actor"]],
    ["Which actress played Queen Victoria landlady Peggy Mitchell?", "Barbara Windsor", ["Wendy Richard", "June Brown", "Pam St Clement"], "Easy", "Christmas and Walford", ["Barbara Windsor", "Peggy Actress"]],
    ["Which former criminal associate of the Mitchells was called Jonah Tyler?", "A gangster", ["A doctor", "A journalist", "A vicar"], "Medium", "Christmas and Walford", ["Jonah Tyler", "Mitchell Associates"]],
    ["Which character was held hostage by gangster Jonah Tyler alongside Courtney?", "Phil Mitchell", ["Ricky Butcher", "Ian Beale", "Mark Fowler"], "Medium", "Christmas and Walford", ["Hostage Situation", "Phil And Courtney"]],
    ["Which elderly di Marco couple left for Italy late in the year?", "Bruno and Luisa", ["Beppe and Rosa", "Gianni and Teresa", "Joe and Nicky"], "Medium", "Christmas and Walford", ["Bruno And Luisa", "Italy Move"]],
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic, detailTags], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    const tags = [
        "British Television",
        "Soaps",
        "EastEnders",
        "1998",
        topic,
        ...topicTags[topic],
        correctAnswer,
        ...detailTags
    ];

    return {
        id: "tv_" + String(7404 + index).padStart(4, "0"),
        category: "Television",
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(tags)],
        dailyEligible: true
    };
});

module.exports = questions;
