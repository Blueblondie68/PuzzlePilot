// quiz_pack238.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2000
// 100 new questions: tv_7604 to tv_7703
// Detailed tags included from creation.
// Do not change quiz_bank.js until the agreed bank update.

const topicTags = {
    "Ethel and Dot": ["Ethel Skinner", "Dot Cotton", "Ethel Final Storyline", "Friendship And Bereavement"],
    "Sonia and Chloe": ["Sonia Jackson", "Martin Fowler", "Chloe Jackson", "Unexpected Pregnancy And Adoption"],
    "Slater Arrivals": ["Slater Family", "Family Arrivals", "September 2000", "Walford Newcomers"],
    "Pat and Frank": ["Pat Evans", "Frank Butcher", "Peggy Mitchell", "Affair And Marriage Breakdown"],
    "Ian and Laura": ["Ian Beale", "Laura Dunn", "Beale Family", "Business And Bankruptcy"],
    "Di Marco Departure": ["Di Marco Family", "Nicky di Marco", "Family Departure", "Walford Restaurant"],
    "Phil Lisa and Dan": ["Phil Mitchell", "Lisa Shaw", "Dan Sullivan", "Relationships And Business Rivalry"],
    "Steve and Matthew": ["Steve Owen", "Matthew Rose", "Saskia Duncan Aftermath", "Nightclub Drama"],
    "New Families": ["Walford New Arrivals", "Trueman Family", "New Characters", "Casting"],
    "Other Walford Events": ["Walford Residents", "Millennium Year", "Relationships And Crime", "Albert Square"]
};

const facts = [
    // ETHEL AND DOT (10)
    ["Which much-loved Walford resident died after a final birthday celebration?", "Ethel Skinner", ["Dot Cotton", "Pauline Fowler", "Nellie Ellis"], "Easy", "Ethel and Dot", ["Ethel Death", "Birthday Farewell"]],
    ["Who was Ethel Skinner's closest friend in her final storyline?", "Dot Cotton", ["Peggy Mitchell", "Pat Evans", "Rosa di Marco"], "Easy", "Ethel and Dot", ["Dot Friendship", "Final Days"]],
    ["Which illness was Ethel suffering from?", "Cancer", ["Multiple sclerosis", "Parkinson's disease", "Diabetes"], "Medium", "Ethel and Dot", ["Terminal Cancer", "Ethel Illness"]],
    ["What did Ethel ask Dot to help her do?", "End her life", ["Move abroad", "Sell her house", "Find her relatives"], "Medium", "Ethel and Dot", ["Assisted Dying Storyline", "Final Wish"]],
    ["Which medication had Ethel stored for her plan to die?", "Morphine", ["Insulin", "Antibiotics", "Aspirin"], "Medium", "Ethel and Dot", ["Morphine Tablets", "End Of Life"]],
    ["Why did Dot initially refuse Ethel's request?", "It conflicted with her Christian beliefs", ["She feared losing her home", "She disliked Ethel's doctor", "She wanted Ethel to leave Walford"], "Medium", "Ethel and Dot", ["Religious Beliefs", "Moral Conflict"]],
    ["Which birthday did Ethel publicly celebrate shortly before her death?", "Her 85th", ["Her 75th", "Her 90th", "Her 80th"], "Medium", "Ethel and Dot", ["Eighty Fifth Birthday", "Birthday Party"]],
    ["Where was Ethel's final birthday party held?", "The Queen Victoria", ["The Arches", "E20", "The market office"], "Easy", "Ethel and Dot", ["Queen Victoria Party", "Ethel Farewell"]],
    ["Which actress portrayed Ethel Skinner?", "Gretchen Franklin", ["June Brown", "Wendy Richard", "Barbara Keogh"], "Easy", "Ethel and Dot", ["Gretchen Franklin", "Ethel Actress"]],
    ["Which month saw Ethel's death and funeral?", "September", ["March", "June", "December"], "Medium", "Ethel and Dot", ["September 2000", "Ethel Funeral"]],

    // SONIA AND BABY CHLOE (10)
    ["Which teenage Jackson unexpectedly gave birth without knowing she was pregnant?", "Sonia Jackson", ["Bianca Jackson", "Carol Jackson", "Janine Butcher"], "Easy", "Sonia and Chloe", ["Surprise Birth", "Sonia Motherhood"]],
    ["What name did Sonia originally give her newborn daughter?", "Chloe", ["Rebecca", "Courtney", "Lucy"], "Easy", "Sonia and Chloe", ["Chloe Birth Name", "Baby Name"]],
    ["Who was the biological father of Sonia's baby?", "Martin Fowler", ["Jamie Mitchell", "Robbie Jackson", "Nicky di Marco"], "Easy", "Sonia and Chloe", ["Martin Father", "Teenage Pregnancy"]],
    ["Which older Slater woman helped deliver Sonia's baby?", "Mo Harris", ["Kat Slater", "Lynne Slater", "Little Mo Morgan"], "Medium", "Sonia and Chloe", ["Mo Harris", "Home Birth"]],
    ["Where did Sonia give birth?", "On the living-room sofa", ["In the Queen Victoria", "At the hospital", "In the market"], "Medium", "Sonia and Chloe", ["Living Room Delivery", "Unexpected Labour"]],
    ["Which social worker helped Sonia with arrangements for her baby?", "Ameena Badawi", ["Laura Dunn", "Audrey Trueman", "Sandra di Marco"], "Medium", "Sonia and Chloe", ["Ameena Badawi", "Social Services"]],
    ["Which actress played social worker Ameena Badawi?", "Shobna Gulati", ["Nina Wadia", "Diane Parish", "Laila Morse"], "Medium", "Sonia and Chloe", ["Shobna Gulati", "Social Worker Casting"]],
    ["What decision did Sonia initially make about Chloe's future?", "To place her for adoption", ["To raise her with Robbie", "To move to Spain", "To leave her with Peggy"], "Easy", "Sonia and Chloe", ["Adoption Decision", "Child Welfare"]],
    ["Which Fowler was particularly determined to keep baby Chloe within the family?", "Pauline Fowler", ["Michelle Fowler", "Mark Fowler", "Arthur Fowler"], "Medium", "Sonia and Chloe", ["Pauline Fowler", "Custody Dispute"]],
    ["Which Jackson brother was Sonia living with when she unexpectedly gave birth?", "Robbie Jackson", ["Billie Jackson", "Ricky Butcher", "Jamie Mitchell"], "Medium", "Sonia and Chloe", ["Robbie Jackson", "Jackson Household"]],

    // THE SLATERS ARRIVE (10)
    ["Which new family moved into Albert Square in September?", "The Slaters", ["The Brannings", "The Kapoors", "The di Marcos"], "Easy", "Slater Arrivals", ["Slater Family Entrance", "September Arrival"]],
    ["Which house number became the Slater family's Walford home?", "23 Albert Square", ["31 Albert Square", "41 Albert Square", "45 Albert Square"], "Medium", "Slater Arrivals", ["Number Twenty Three", "Slater Home"]],
    ["Who was introduced as the head of the Slater household?", "Charlie Slater", ["Jim Branning", "Roy Evans", "Frank Butcher"], "Easy", "Slater Arrivals", ["Charlie Slater", "Family Patriarch"]],
    ["Which actor played Charlie Slater?", "Derek Martin", ["John Bardon", "Tony Caunter", "Mike Reid"], "Medium", "Slater Arrivals", ["Derek Martin", "Charlie Actor"]],
    ["Which occupation did Charlie Slater have?", "Taxi driver", ["Police officer", "Butcher", "Market inspector"], "Easy", "Slater Arrivals", ["Charlie Taxi Driver", "Occupation"]],
    ["Which actress played Kat Slater?", "Jessie Wallace", ["Elaine Lordan", "Kacey Ainsworth", "Michelle Ryan"], "Easy", "Slater Arrivals", ["Jessie Wallace", "Kat Actress"]],
    ["Which Slater sister was played by Elaine Lordan?", "Lynne Slater", ["Kat Slater", "Zoe Slater", "Little Mo Morgan"], "Medium", "Slater Arrivals", ["Elaine Lordan", "Lynne Actress"]],
    ["Which actor portrayed Lynne's boyfriend Garry Hobbs?", "Ricky Groves", ["Alex Ferns", "Jack Ryder", "Joe Absolom"], "Medium", "Slater Arrivals", ["Ricky Groves", "Garry Actor"]],
    ["What was Garry Hobbs's girlfriend's first name?", "Lynne", ["Kat", "Zoe", "Mo"], "Easy", "Slater Arrivals", ["Lynne And Garry", "Slater Romance"]],
    ["Which Slater was introduced as the youngest of Charlie's daughters?", "Zoe Slater", ["Kat Slater", "Lynne Slater", "Little Mo Morgan"], "Easy", "Slater Arrivals", ["Zoe Slater", "Initial Family Relationship"]],

    // MORE SLATER INTRODUCTIONS (10)
    ["Which actress played Zoe Slater?", "Michelle Ryan", ["Jessie Wallace", "Kacey Ainsworth", "Elaine Lordan"], "Easy", "Slater Arrivals", ["Michelle Ryan", "Zoe Actress"]],
    ["Which actress played Little Mo?", "Kacey Ainsworth", ["Laila Morse", "Jessie Wallace", "Lucy Speed"], "Medium", "Slater Arrivals", ["Kacey Ainsworth", "Little Mo Actress"]],
    ["What was Little Mo's married surname when she first arrived?", "Morgan", ["Mitchell", "Hobbs", "Branning"], "Medium", "Slater Arrivals", ["Little Mo Morgan", "Married Name"]],
    ["Who was Little Mo's husband?", "Trevor Morgan", ["Garry Hobbs", "Billy Mitchell", "Anthony Trueman"], "Easy", "Slater Arrivals", ["Trevor Morgan", "Little Mo Marriage"]],
    ["Which actor played Trevor Morgan?", "Alex Ferns", ["Ricky Groves", "Marc Bannerman", "Martin Kemp"], "Medium", "Slater Arrivals", ["Alex Ferns", "Trevor Actor"]],
    ["Which actress played Mo Harris?", "Laila Morse", ["Barbara Windsor", "June Brown", "Pam St Clement"], "Easy", "Slater Arrivals", ["Laila Morse", "Big Mo Actress"]],
    ["What nickname was Mo Harris commonly known by?", "Big Mo", ["Little Mo", "Ma Mo", "Auntie Mo"], "Easy", "Slater Arrivals", ["Big Mo Nickname", "Mo Harris"]],
    ["Which established Walford resident had a long-running feud with Mo Harris?", "Pat Evans", ["Peggy Mitchell", "Pauline Fowler", "Dot Cotton"], "Medium", "Slater Arrivals", ["Pat And Mo", "Old Rivalry"]],
    ["Which Slater sister briefly became involved with nightclub owner Steve Owen?", "Kat Slater", ["Zoe Slater", "Lynne Slater", "Little Mo Morgan"], "Medium", "Slater Arrivals", ["Kat And Steve", "Brief Affair"]],
    ["Which pub employed Kat Slater as a barmaid?", "The Queen Victoria", ["The Dagmar", "The Albert", "The Swan"], "Easy", "Slater Arrivals", ["Kat Barmaid", "Queen Vic Work"]],

    // PAT, FRANK AND PEGGY (10)
    ["Which former married couple rekindled their romance while married to other people?", "Pat Evans and Frank Butcher", ["Peggy and Phil Mitchell", "Ruth and Mark Fowler", "Mel and Ian Beale"], "Easy", "Pat and Frank", ["Pat Frank Affair", "Old Romance"]],
    ["Which three couples holidayed together in Spain before Pat and Frank's affair was exposed?", "The Butchers, Evanses and Raymonds", ["The Mitchells, Slaters and Fowlers", "The di Marcos, Beales and Jacksons", "The Roses, Kapoors and Bateses"], "Medium", "Pat and Frank", ["Spain Holiday", "Three Couples"]],
    ["Which country was the setting for the holiday that reignited Pat and Frank's romance?", "Spain", ["Italy", "France", "Portugal"], "Easy", "Pat and Frank", ["Spanish Holiday", "Costa Blanca"]],
    ["Who was Pat married to during her affair with Frank?", "Roy Evans", ["Terry Raymond", "George Palmer", "Ian Beale"], "Easy", "Pat and Frank", ["Roy Evans", "Pat Marriage"]],
    ["Who was Frank's wife when his affair with Pat began?", "Peggy Mitchell", ["Louise Raymond", "Irene Hills", "Rosa di Marco"], "Easy", "Pat and Frank", ["Peggy Mitchell", "Frank Marriage"]],
    ["What unusual item did Frank wear when he appeared naked at Pat's door?", "A spinning bow tie", ["A Santa hat", "A police helmet", "A football scarf"], "Medium", "Pat and Frank", ["Spinning Bow Tie", "Frank Comedy Scene"]],
    ["Which city did Pat and Frank plan to run away to together?", "Manchester", ["Birmingham", "Bristol", "Liverpool"], "Medium", "Pat and Frank", ["Manchester Escape Plan", "Elopement"]],
    ["What did Frank leave behind that revealed his affair to Peggy?", "A letter", ["A video recording", "A hotel receipt", "A diary"], "Easy", "Pat and Frank", ["Frank Farewell Letter", "Affair Discovery"]],
    ["Where did Peggy publicly confront Pat and Frank?", "The Queen Victoria", ["E20", "The Arches", "The market"], "Easy", "Pat and Frank", ["Queen Vic Confrontation", "Public Humiliation"]],
    ["What did Peggy do to both Pat and Frank when she exposed the affair?", "Slapped them", ["Threw wine over them", "Locked them in the cellar", "Called the police"], "Easy", "Pat and Frank", ["Peggy Double Slap", "Affair Exposed"]],

    // IAN, LAURA AND BANKRUPTCY (10)
    ["Which new nanny began working for Ian Beale's family?", "Laura Dunn", ["Lisa Shaw", "Gina Williams", "Sandra di Marco"], "Easy", "Ian and Laura", ["Laura Dunn Arrival", "Beale Nanny"]],
    ["Which actress portrayed Laura Dunn?", "Hannah Waterman", ["Tamzin Outhwaite", "Lucy Benjamin", "Nicola Cowper"], "Medium", "Ian and Laura", ["Hannah Waterman", "Laura Actress"]],
    ["Which three children did Laura care for in Ian Beale's household?", "Steven, Peter and Lucy", ["Ben, Courtney and Liam", "Jamie, Martin and Sonia", "Joe, Nicky and Teresa"], "Medium", "Ian and Laura", ["Beale Children", "Nanny Duties"]],
    ["Which businessman employed Laura as his children's nanny?", "Ian Beale", ["Roy Evans", "Steve Owen", "Frank Butcher"], "Easy", "Ian and Laura", ["Ian Employer", "Nanny Job"]],
    ["What was Laura's surname when she first arrived?", "Dunn", ["Beale", "Hobbs", "Williams"], "Medium", "Ian and Laura", ["Laura Dunn", "Original Surname"]],
    ["Which woman had married Ian at the end of 1999 but left him almost immediately?", "Melanie Healy", ["Lisa Shaw", "Laura Dunn", "Natalie Price"], "Easy", "Ian and Laura", ["Mel Beale Separation", "Marriage Aftermath"]],
    ["Which financial disaster overtook Ian Beale late in 2000?", "Bankruptcy", ["A lottery loss", "A stolen inheritance", "A tax refund"], "Easy", "Ian and Laura", ["Ian Bankruptcy", "Financial Crisis"]],
    ["Which Mitchell refused to lend Ian the money he needed?", "Phil Mitchell", ["Grant Mitchell", "Jamie Mitchell", "Billy Mitchell"], "Medium", "Ian and Laura", ["Phil Refuses Loan", "Financial Rivalry"]],
    ["Which woman helped Ian during his financial difficulties?", "Laura Dunn", ["Saskia Duncan", "Rosa di Marco", "Irene Raymond"], "Easy", "Ian and Laura", ["Laura Supports Ian", "Business Crisis"]],
    ["Which actress played Melanie Beale during Ian's separation?", "Tamzin Outhwaite", ["Hannah Waterman", "Lucy Benjamin", "Jessie Wallace"], "Easy", "Ian and Laura", ["Tamzin Outhwaite", "Mel Casting"]],

    // DI MARCO FAMILY (10)
    ["Which di Marco son's estranged wife arrived unexpectedly in Walford?", "Beppe di Marco", ["Gianni di Marco", "Joe di Marco", "Bruno di Marco"], "Easy", "Di Marco Departure", ["Beppe Marriage", "Sandra Arrival"]],
    ["What was the name of Beppe di Marco's estranged wife?", "Sandra", ["Fiona", "Teresa", "Rosa"], "Easy", "Di Marco Departure", ["Sandra di Marco", "Estranged Wife"]],
    ["Which actress played Sandra di Marco?", "Clare Wilkie", ["Louise Jameson", "Carly Hillman", "Leila Birch"], "Medium", "Di Marco Departure", ["Clare Wilkie", "Sandra Casting"]],
    ["Which child was Sandra di Marco's son?", "Joe di Marco", ["Jamie Mitchell", "Martin Fowler", "Liam Butcher"], "Easy", "Di Marco Departure", ["Joe di Marco", "Sandra Mother"]],
    ["Which di Marco teenager had a controversial relationship with her tutor?", "Nicky di Marco", ["Teresa di Marco", "Rosa di Marco", "Luisa di Marco"], "Medium", "Di Marco Departure", ["Nicky di Marco", "Tutor Storyline"]],
    ["What was the name of Nicky's private tutor?", "Rod Morris", ["Jack Robbins", "Anthony Trueman", "Fred Fonseca"], "Medium", "Di Marco Departure", ["Rod Morris", "Private Tutor"]],
    ["Which actor played tutor Rod Morris?", "Forbes Masson", ["Michael Greco", "Marc Bannerman", "Alex Ferns"], "Medium", "Di Marco Departure", ["Forbes Masson", "Rod Actor"]],
    ["Which actress played Rod Morris's wife Fiona?", "Ashley Jensen", ["Clare Wilkie", "Louise Jameson", "Hannah Waterman"], "Medium", "Di Marco Departure", ["Ashley Jensen", "Fiona Morris"]],
    ["Which di Marco brother confronted Rod over Nicky's allegations?", "Gianni di Marco", ["Beppe di Marco", "Joe di Marco", "Bruno di Marco"], "Medium", "Di Marco Departure", ["Gianni Confrontation", "Rod Allegations"]],
    ["Which di Marco remained in the programme after most of the family departed?", "Beppe di Marco", ["Gianni di Marco", "Rosa di Marco", "Nicky di Marco"], "Easy", "Di Marco Departure", ["Beppe Remains", "Di Marco Exit"]],

    // PHIL, LISA AND DAN (10)
    ["Which woman told Phil Mitchell she was pregnant early in the year?", "Lisa Shaw", ["Melanie Healy", "Laura Dunn", "Natalie Evans"], "Easy", "Phil Lisa and Dan", ["Lisa Pregnancy", "Phil Relationship"]],
    ["What happened to Lisa's pregnancy later that spring?", "She miscarried", ["She gave birth to twins", "She put the baby up for adoption", "She moved abroad"], "Medium", "Phil Lisa and Dan", ["Lisa Miscarriage", "Pregnancy Loss"]],
    ["Which actor portrayed Phil Mitchell?", "Steve McFadden", ["Ross Kemp", "Martin Kemp", "Craig Fairbrass"], "Easy", "Phil Lisa and Dan", ["Steve McFadden", "Phil Actor"]],
    ["Which former girlfriend of Phil was played by Lucy Benjamin?", "Lisa Shaw", ["Melanie Healy", "Laura Dunn", "Sandra di Marco"], "Easy", "Phil Lisa and Dan", ["Lucy Benjamin", "Lisa Casting"]],
    ["Who reported Phil's motor scam to the police?", "Dan Sullivan", ["Steve Owen", "Ian Beale", "Barry Evans"], "Easy", "Phil Lisa and Dan", ["Dan Informant", "Motor Scam"]],
    ["What sort of business was involved in Phil's scam?", "Motors", ["Restaurants", "Newspapers", "Groceries"], "Easy", "Phil Lisa and Dan", ["Motor Trade", "Phil Scheme"]],
    ["What kind of game did Phil use to win Dan's share in the Queen Vic?", "Poker", ["Darts", "Snooker", "Blackjack"], "Medium", "Phil Lisa and Dan", ["Poker Game", "Pub Ownership"]],
    ["What did Dan lose to Phil during the poker confrontation?", "His share of the Queen Vic", ["His house", "His passport", "His car"], "Medium", "Phil Lisa and Dan", ["Dan Pub Share", "Poker Loss"]],
    ["Which nightclub owner forced Dan to leave Walford after threats towards Mel?", "Steve Owen", ["Ian Beale", "Roy Evans", "Terry Raymond"], "Medium", "Phil Lisa and Dan", ["Steve Confronts Dan", "Dan Leaves"]],
    ["Which woman became involved with Dan while he was feuding with Phil?", "Melanie Healy", ["Pauline Fowler", "Dot Cotton", "Rosa di Marco"], "Medium", "Phil Lisa and Dan", ["Mel And Dan", "Romance"]],

    // STEVE, MATTHEW AND THE OWENS (10)
    ["Which young man returned to confront Steve Owen after his release from prison?", "Matthew Rose", ["Jamie Mitchell", "Martin Fowler", "Tony Hills"], "Easy", "Steve and Matthew", ["Matthew Revenge", "Prison Release"]],
    ["Which nightclub did Matthew return to during his confrontation with Steve?", "E20", ["The Queen Vic", "The Dagmar", "The Albert"], "Easy", "Steve and Matthew", ["E20 Nightclub", "Matthew Confrontation"]],
    ["What did Matthew threaten to do to Steve in his revenge plot?", "Burn him alive", ["Poison him", "Push him into a river", "Shoot him with a crossbow"], "Medium", "Steve and Matthew", ["Fire Threat", "Matthew Revenge"]],
    ["Which woman had been killed by Steve in the storyline behind Matthew's imprisonment?", "Saskia Duncan", ["Tiffany Mitchell", "Irene Raymond", "Laura Dunn"], "Easy", "Steve and Matthew", ["Saskia Death", "Matthew Conviction Aftermath"]],
    ["Who played Matthew Rose?", "Joe Absolom", ["Jack Ryder", "Martin Kemp", "James Alexandrou"], "Easy", "Steve and Matthew", ["Joe Absolom", "Matthew Actor"]],
    ["Which actress played Steve Owen's mother Barbara?", "Sheila Hancock", ["June Brown", "Pam St Clement", "Barbara Windsor"], "Medium", "Steve and Matthew", ["Sheila Hancock", "Barbara Owen"]],
    ["What was Steve Owen's mother's first name?", "Barbara", ["Peggy", "Pat", "Irene"], "Medium", "Steve and Matthew", ["Barbara Owen", "Steve Mother"]],
    ["Which actress played Steve Owen's sister Jackie?", "Race Davies", ["Hannah Waterman", "Jessie Wallace", "Lucy Benjamin"], "Medium", "Steve and Matthew", ["Race Davies", "Jackie Owen"]],
    ["Which former Spandau Ballet member portrayed Steve Owen?", "Martin Kemp", ["Gary Kemp", "Tony Hadley", "Steve Norman"], "Easy", "Steve and Matthew", ["Martin Kemp", "Steve Casting"]],
    ["Which woman was Steve romantically linked with as the Slaters settled in Walford?", "Kat Slater", ["Little Mo Morgan", "Zoe Slater", "Lynne Slater"], "Medium", "Steve and Matthew", ["Kat And Steve", "Brief Romance"]],

    // NEW FAMILIES AND OTHER EVENTS (10)
    ["Which new family surname belonged to Audrey and her son Anthony?", "Trueman", ["Slater", "Mitchell", "di Marco"], "Easy", "New Families", ["Trueman Arrivals", "New Family"]],
    ["Which actress portrayed Audrey Trueman?", "Corinne Skinner-Carter", ["Laila Morse", "Roberta Taylor", "Barbara Keogh"], "Medium", "New Families", ["Corinne Skinner Carter", "Audrey Actress"]],
    ["Which actor played Anthony Trueman?", "Nicholas Bailey", ["Gary Beadle", "Jimi Mistry", "Ricky Groves"], "Medium", "New Families", ["Nicholas Bailey", "Anthony Actor"]],
    ["Which Trueman son was a doctor?", "Anthony Trueman", ["Paul Trueman", "Patrick Trueman", "Eddie Trueman"], "Easy", "New Families", ["Anthony Doctor", "Trueman Profession"]],
    ["Which villainous husband of Little Mo appeared towards Christmas?", "Trevor Morgan", ["Garry Hobbs", "Dan Sullivan", "Rod Morris"], "Easy", "New Families", ["Trevor Arrival", "Little Mo Marriage"]],
    ["Which Cotton family member returned to Walford from prison in November?", "Nick Cotton", ["Charlie Cotton", "Ashley Cotton", "Andrew Cotton"], "Easy", "Other Walford Events", ["Nick Cotton Return", "Prison Release"]],
    ["Which grandson was reunited with Dot Cotton during the year?", "Ashley Cotton", ["Jamie Mitchell", "Liam Butcher", "Peter Beale"], "Easy", "Other Walford Events", ["Ashley Cotton", "Dot Grandson"]],
    ["Which two characters had a Christmas Day encounter that caused fresh trouble?", "Phil Mitchell and Melanie Beale", ["Ian Beale and Sonia Jackson", "Barry Evans and Kat Slater", "Frank Butcher and Zoe Slater"], "Medium", "Other Walford Events", ["Phil And Mel Affair", "Christmas Day"]],
    ["Which criminal relative of Dot supplied Martin Fowler with a dangerous pill at New Year?", "Nick Cotton", ["Ashley Cotton", "Robbie Jackson", "Jamie Mitchell"], "Medium", "Other Walford Events", ["Nick And Martin", "Dangerous Pill"]],
    ["Which Fowler discovered Nick Cotton had been supplying Martin with drugs?", "Mark Fowler", ["Ian Beale", "Arthur Fowler", "Michelle Fowler"], "Medium", "Other Walford Events", ["Mark Learns Of Drug Supply", "Nick And Martin"]]
];

const questions = facts.map(([
    question,
    correctAnswer,
    wrongAnswers,
    difficulty,
    topic,
    details
], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: "tv_" + String(7604 + index).padStart(4, "0"),
        category: "Television",
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set([
            "British Television",
            "Soaps",
            "EastEnders",
            "2000",
            topic,
            ...(topicTags[topic] || topicTags["Other Walford Events"]),
            correctAnswer,
            ...details
        ])],
        dailyEligible: true
    };
});

module.exports = questions;
