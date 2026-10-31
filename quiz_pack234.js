 // quiz_pack234.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 1996
// 100 questions: tv_7204 to tv_7303
// Fully tagged audit. Leave quiz_bank.js unchanged until the end of the session.

const facts = [
    // ARTHUR FOWLER'S FINAL CHAPTER (11)
    ["Which Fowler family member became increasingly suspicious of Willy Roper's motives?", "Mark Fowler", ["Martin Fowler", "Michelle Fowler", "Nellie Ellis"], "Medium", "Arthur Fowler"],
    ["Which member of the Fowler family did Willy Roper try to romance while Arthur was in prison?", "Pauline Fowler", ["Ruth Fowler", "Kathy Mitchell", "Pat Butcher"], "Easy", "Arthur Fowler"],
    ["To which island did Willy take Pauline during his attempt to win her over?", "Jersey", ["Isle of Wight", "Guernsey", "Isle of Man"], "Medium", "Arthur Fowler"],
    ["What suspicious items helped Pauline uncover Willy Roper's dishonesty?", "Counterfeit credit cards", ["Forged passports", "Stolen car keys", "Fake driving licences"], "Medium", "Arthur Fowler"],
    ["What happened to Arthur Fowler's conviction after the truth about Willy Roper emerged?", "It was overturned", ["His sentence was doubled", "He was sent abroad", "He admitted the charges"], "Easy", "Arthur Fowler"],
    ["What disturbance took place in prison shortly before Arthur Fowler was released?", "A riot", ["A fire drill", "A hunger strike", "An attempted escape"], "Medium", "Arthur Fowler"],
    ["Which part of his body was Arthur injured in during the prison disturbance?", "His head", ["His leg", "His arm", "His chest"], "Medium", "Arthur Fowler"],
    ["Where did Arthur Fowler collapse shortly after returning to Walford?", "On his allotment", ["In the Queen Victoria", "At the launderette", "At the railway station"], "Easy", "Arthur Fowler"],
    ["What medical emergency led to Arthur Fowler's death?", "A brain haemorrhage", ["A heart attack", "A stroke caused by a clot in his leg", "A ruptured appendix"], "Easy", "Arthur Fowler"],
    ["Which actor ended his original EastEnders run as Arthur Fowler?", "Bill Treacher", ["Gretchen Franklin", "Leslie Grantham", "John Altman"], "Easy", "Arthur Fowler"],
    ["Which character punched Willy Roper when he appeared at Arthur's funeral?", "Mark Fowler", ["Phil Mitchell", "Ian Beale", "David Wicks"], "Medium", "Arthur Fowler"],

    // BEN MITCHELL IS BORN (7)
    ["Which baby boy was born to Phil and Kathy Mitchell?", "Ben Mitchell", ["Steven Beale", "Peter Beale", "Jamie Mitchell"], "Easy", "Ben Mitchell"],
    ["Which actress played Ben Mitchell's mother Kathy?", "Gillian Taylforth", ["Barbara Windsor", "Wendy Richard", "Letitia Dean"], "Easy", "Ben Mitchell"],
    ["Which Queen Vic landlady became Ben Mitchell's grandmother?", "Peggy Mitchell", ["Pat Butcher", "Pauline Fowler", "Ethel Skinner"], "Easy", "Ben Mitchell"],
    ["Which older Beale was Ben Mitchell's half-brother through their mother?", "Ian Beale", ["David Wicks", "Ricky Butcher", "Martin Fowler"], "Easy", "Ben Mitchell"],
    ["What serious illness did baby Ben Mitchell develop?", "Meningitis", ["Measles", "Whooping cough", "Chickenpox"], "Medium", "Ben Mitchell"],
    ["Which sense was permanently affected by Ben Mitchell's illness?", "Hearing", ["Sight", "Smell", "Taste"], "Medium", "Ben Mitchell"],
    ["Which child actor first portrayed Ben Mitchell as a baby?", "Matthew Silver", ["Charlie Jones", "Harry Reid", "Joshua Pascoe"], "Medium", "Ben Mitchell"],

    // JOE AND LORRAINE WICKS (9)
    ["Which teenage son arrived looking for his estranged father David Wicks?", "Joe Wicks", ["Tony Hills", "Robbie Jackson", "Simon Raymond"], "Easy", "Joe and Lorraine"],
    ["Which actor played newcomer Joe Wicks?", "Paul Nicholls", ["Mark Homer", "Andrew Lynford", "Dean Gaffney"], "Easy", "Joe and Lorraine"],
    ["Who was Joe Wicks's mother and David's former wife?", "Lorraine Wicks", ["Carol Jackson", "Pat Butcher", "Cindy Beale"], "Easy", "Joe and Lorraine"],
    ["Which actress played Lorraine Wicks?", "Jacqueline Leonard", ["Lindsey Coulson", "Caroline Paterson", "Patsy Palmer"], "Medium", "Joe and Lorraine"],
    ["From which Lancashire town did Joe travel to find David?", "Bolton", ["Burnley", "Blackburn", "Wigan"], "Medium", "Joe and Lorraine"],
    ["What was the name of Joe Wicks's sister who had died before his arrival?", "Karen", ["Clare", "Sarah", "Sonia"], "Medium", "Joe and Lorraine"],
    ["How had Joe's sister Karen died?", "In a road accident", ["In a house fire", "From a sudden illness", "In a swimming accident"], "Medium", "Joe and Lorraine"],
    ["Which mental health condition was explored through Joe Wicks's storyline?", "Schizophrenia", ["Alzheimer's disease", "Bipolar disorder", "Obsessive-compulsive disorder"], "Medium", "Joe and Lorraine"],
    ["Which Mitchell brother became romantically involved with Joe's mother Lorraine?", "Grant Mitchell", ["Phil Mitchell", "Billy Mitchell", "Jamie Mitchell"], "Easy", "Joe and Lorraine"],

    // CAROL, ALAN AND THE BRANNINGS (11)
    ["Which Branning sister was jilted when her fiancé failed to appear for their wedding?", "April Branning", ["Suzy Branning", "Sonia Jackson", "Bianca Jackson"], "Easy", "The Brannings"],
    ["What was the first name of April Branning's fiancé who abandoned her wedding plans?", "Nikos", ["Alistair", "Guillermo", "George"], "Medium", "The Brannings"],
    ["Which couple married when April Branning was jilted at the altar?", "Carol and Alan", ["Pat and Roy", "Grant and Tiffany", "Ricky and Bianca"], "Easy", "The Brannings"],
    ["Which actress played April Branning?", "Debbie Arnold", ["Lindsey Coulson", "Roberta Taylor", "Nicola Duffett"], "Medium", "The Brannings"],
    ["Which man appeared as Carol and April's father?", "Jim Branning", ["Ted Hills", "Roy Evans", "George Palmer"], "Easy", "The Brannings"],
    ["Which actor first played Jim Branning?", "John Bardon", ["Brian Croucher", "Tony Caunter", "Michael French"], "Easy", "The Brannings"],
    ["Which Branning brother joined Jim in displaying racist hostility towards Alan Jackson?", "Derek Branning", ["Max Branning", "Jack Branning", "Robbie Jackson"], "Medium", "The Brannings"],
    ["Which actor first portrayed Derek Branning?", "Terence Beesley", ["Jamie Foreman", "Jake Wood", "Scott Maslen"], "Medium", "The Brannings"],
    ["What was the name of Carol Branning's mother, who attended the family wedding?", "Reenie Branning", ["Blossom Jackson", "Nellie Ellis", "Mo Butcher"], "Medium", "The Brannings"],
    ["Which member of the Jackson family was chosen as April's bridesmaid?", "Sonia Jackson", ["Bianca Jackson", "Carol Jackson", "Blossom Jackson"], "Medium", "The Brannings"],
    ["Which Walford resident intervened when Derek Branning attacked Alan?", "David Wicks", ["Nigel Bates", "Mark Fowler", "Ricky Butcher"], "Medium", "The Brannings"],

    // RICKY, SAM, FRANK, PAT AND ROY (7)
    ["Which former wife was Ricky Butcher caught kissing, upsetting Bianca?", "Sam Mitchell", ["Natalie Price", "Tiffany Raymond", "Cindy Beale"], "Easy", "Butchers and Evanses"],
    ["What did Bianca do to Ricky's clothes after seeing him kiss Sam?", "Burned them", ["Sold them at the market", "Threw them in a pond", "Gave them to charity"], "Easy", "Butchers and Evanses"],
    ["Which country did Sam Mitchell return to with a man named Guillermo?", "Spain", ["Italy", "Portugal", "Greece"], "Medium", "Butchers and Evanses"],
    ["Which former husband did Pat sleep with, causing further trouble with Roy?", "Frank Butcher", ["Pete Beale", "Den Watts", "Arthur Fowler"], "Easy", "Butchers and Evanses"],
    ["Which car dealer married Pat Butcher later that year?", "Roy Evans", ["David Wicks", "George Palmer", "Sanjay Kapoor"], "Easy", "Butchers and Evanses"],
    ["What surname did Pat take when she married Roy?", "Evans", ["Mitchell", "Beale", "Hills"], "Easy", "Butchers and Evanses"],
    ["To which Italian city did David Wicks depart around Pat and Roy's wedding?", "Milan", ["Rome", "Naples", "Florence"], "Medium", "Butchers and Evanses"],

    // TIFFANY, GRANT, TONY AND SIMON (12)
    ["Which Queen Vic barmaid began a relationship with Grant Mitchell?", "Tiffany Raymond", ["Lorraine Wicks", "Kathy Mitchell", "April Branning"], "Easy", "Tiffany and Grant"],
    ["Who was Tiffany's boyfriend before her involvement with Grant?", "Tony Hills", ["Joe Wicks", "Ricky Butcher", "David Wicks"], "Easy", "Tiffany and Grant"],
    ["Which actor played Tiffany's boyfriend Tony Hills?", "Mark Homer", ["Andrew Lynford", "Paul Nicholls", "Richard Elis"], "Medium", "Tiffany and Grant"],
    ["Which new character was introduced as Tiffany Raymond's brother?", "Simon Raymond", ["Joe Wicks", "Huw Edwards", "Lenny Wallace"], "Easy", "Tiffany and Grant"],
    ["Which actor portrayed Simon Raymond?", "Andrew Lynford", ["Mark Homer", "Richard Elis", "Paul Nicholls"], "Medium", "Tiffany and Grant"],
    ["Which Hills family member kissed Simon Raymond, revealing his attraction to men?", "Tony Hills", ["Ted Hills", "Joe Wicks", "Robbie Jackson"], "Medium", "Tiffany and Grant"],
    ["Who caught Tony and Simon kissing, leading to a painful confrontation?", "Tiffany Raymond", ["Sarah Hills", "Peggy Mitchell", "Bianca Jackson"], "Medium", "Tiffany and Grant"],
    ["Which two men were potential fathers of Tiffany's unborn baby?", "Grant and Tony", ["Phil and Ricky", "David and Joe", "Simon and Robbie"], "Easy", "Tiffany and Grant"],
    ["Which city was the setting for Grant and Tiffany's wedding?", "Paris", ["Rome", "Dublin", "Edinburgh"], "Medium", "Tiffany and Grant"],
    ["Which member of the Mitchell family became Tiffany's mother-in-law?", "Peggy Mitchell", ["Kathy Mitchell", "Pat Evans", "Pauline Fowler"], "Easy", "Tiffany and Grant"],
    ["Which woman knew Tiffany was unsure of her baby's paternity and grew close to Grant?", "Lorraine Wicks", ["April Branning", "Carol Jackson", "Ruth Fowler"], "Medium", "Tiffany and Grant"],
    ["Who told Grant on New Year's Eve that Tiffany's baby might not be his?", "Lorraine Wicks", ["Peggy Mitchell", "Bianca Jackson", "Kathy Mitchell"], "Medium", "Tiffany and Grant"],

    // CINDY AND IAN: THE SHOOTING (11)
    ["Which relative of Ian Beale was having an affair with Ian's wife Cindy?", "David Wicks", ["Phil Mitchell", "Roy Evans", "Grant Mitchell"], "Easy", "Ian's Shooting"],
    ["Which wife did Ian Beale discover was having an affair with David?", "Cindy Beale", ["Kathy Mitchell", "Carol Jackson", "Pat Evans"], "Easy", "Ian's Shooting"],
    ["What family dispute intensified after Ian discovered Cindy's affair?", "Custody of their children", ["Ownership of the Queen Vic", "An inheritance from Arthur", "The market inspector's position"], "Medium", "Ian's Shooting"],
    ["What was the name of the gunman hired to shoot Ian Beale?", "John Valecue", ["Willy Roper", "Dan Zappieri", "Michael Rose"], "Medium", "Ian's Shooting"],
    ["Which of David Wicks's associates provided Cindy with a link to the gunman?", "Barry Evans", ["Nigel Bates", "Mark Fowler", "Ricky Butcher"], "Medium", "Ian's Shooting"],
    ["What happened to Ian Beale when the hired gunman attacked him?", "He was shot but survived", ["He was killed instantly", "He escaped unharmed", "He was taken hostage abroad"], "Easy", "Ian's Shooting"],
    ["Which actress portrayed Cindy Beale during the shooting storyline?", "Michelle Collins", ["Gillian Taylforth", "Lindsey Coulson", "Barbara Windsor"], "Easy", "Ian's Shooting"],
    ["Which of Cindy's sons was taken abroad when she fled Walford?", "Peter Beale", ["Ben Mitchell", "Martin Fowler", "Robbie Jackson"], "Easy", "Ian's Shooting"],
    ["Which older child did Cindy also take when she went on the run?", "Steven Beale", ["Joe Wicks", "Tony Hills", "Billie Jackson"], "Medium", "Ian's Shooting"],
    ["Which daughter was left behind when Cindy fled with the boys?", "Lucy Beale", ["Vicki Fowler", "Clare Bates", "Sonia Jackson"], "Easy", "Ian's Shooting"],
    ["To which country did Cindy flee with Steven and Peter?", "Italy", ["France", "Spain", "Germany"], "Easy", "Ian's Shooting"],

    // PEGGY'S CANCER STORYLINE (7)
    ["Which Queen Victoria landlady discovered a lump in her breast?", "Peggy Mitchell", ["Sharon Watts", "Pat Evans", "Kathy Mitchell"], "Easy", "Peggy's Diagnosis"],
    ["Which younger woman did Peggy confide in after finding the lump?", "Tiffany Raymond", ["Bianca Jackson", "Cindy Beale", "Ruth Fowler"], "Medium", "Peggy's Diagnosis"],
    ["Which form of cancer was Peggy Mitchell diagnosed with?", "Breast cancer", ["Lung cancer", "Ovarian cancer", "Skin cancer"], "Easy", "Peggy's Diagnosis"],
    ["What did Peggy initially avoid arranging because she was frightened of the possible diagnosis?", "A doctor's appointment", ["A family holiday", "A wedding ceremony", "A meeting with the police"], "Medium", "Peggy's Diagnosis"],
    ["What type of breast surgery did Peggy have after her diagnosis?", "A lumpectomy", ["A double mastectomy", "A heart bypass", "An appendicectomy"], "Medium", "Peggy's Diagnosis"],
    ["Which businessman was Peggy's romantic partner during her cancer scare?", "George Palmer", ["Frank Butcher", "Roy Evans", "Willy Roper"], "Medium", "Peggy's Diagnosis"],
    ["Which actress played Peggy Mitchell during the cancer storyline?", "Barbara Windsor", ["Pam St Clement", "June Brown", "Wendy Richard"], "Easy", "Peggy's Diagnosis"],

    // MARK'S HIV STATUS (5)
    ["Which Fowler son faced renewed gossip when his HIV status became known more widely?", "Mark Fowler", ["Martin Fowler", "Arthur Fowler", "Ian Beale"], "Easy", "Mark Fowler"],
    ["Which Mitchell brother told Phil and Kathy about Mark's HIV status?", "Grant Mitchell", ["Billy Mitchell", "Jamie Mitchell", "Terry Raymond"], "Medium", "Mark Fowler"],
    ["What was Mark Fowler's everyday occupation in Walford?", "Market trader", ["Taxi driver", "Mechanic", "Police officer"], "Easy", "Mark Fowler"],
    ["Which woman stood beside Mark Fowler as his wife during this period?", "Ruth Fowler", ["Shelley Lewis", "Rachel Kominski", "Lorraine Wicks"], "Easy", "Mark Fowler"],
    ["Which actor played Mark Fowler as his HIV story continued?", "Todd Carty", ["Bill Treacher", "Paul Nicholls", "Adam Woodyatt"], "Easy", "Mark Fowler"],

    // FRANKIE AND MICK (5)
    ["Which newcomer became involved with Alan Jackson, damaging his marriage to Carol?", "Frankie Pierre", ["April Branning", "Lorraine Wicks", "Tiffany Raymond"], "Easy", "Frankie and Mick"],
    ["Which actress played troublemaking Frankie Pierre?", "Syan Blake", ["Jacqueline Leonard", "Lindsey Coulson", "Patsy Palmer"], "Medium", "Frankie and Mick"],
    ["Which musician arrived with a band and was Frankie's former boyfriend?", "Mick McFarlane", ["Lenny Wallace", "Huw Edwards", "Simon Raymond"], "Medium", "Frankie and Mick"],
    ["What style of music did Mick McFarlane's band specialise in?", "Jazz", ["Punk rock", "Country music", "Heavy metal"], "Medium", "Frankie and Mick"],
    ["Who was managing the night café when Mick's band was hired to perform?", "Alan Jackson", ["David Wicks", "Grant Mitchell", "Michael Rose"], "Medium", "Frankie and Mick"],

    // THE COBRA CLUB AND NEW FACES (8)
    ["What was the name of Walford's new nightclub?", "The Cobra Club", ["The Prince Albert", "Angie's Den", "Scarlet"], "Easy", "The Cobra Club"],
    ["Which businessman owned the Cobra Club when it opened?", "George Palmer", ["Roy Evans", "Barry Evans", "Steve Owen"], "Easy", "The Cobra Club"],
    ["Which actor portrayed Cobra Club owner George Palmer?", "Paul Moriarty", ["Tony Caunter", "Russell Floyd", "Howard Antony"], "Medium", "The Cobra Club"],
    ["Which lively newcomer worked as a Cobra Club barman alongside Huw Edwards?", "Lenny Wallace", ["Joe Wicks", "Tony Hills", "Robbie Jackson"], "Easy", "The Cobra Club"],
    ["Which country did Cobra Club barman Huw Edwards come from?", "Wales", ["Scotland", "Ireland", "England"], "Easy", "The Cobra Club"],
    ["Which actor played Huw Edwards?", "Richard Elis", ["Andrew Lynford", "Mark Homer", "Paul Nicholls"], "Medium", "The Cobra Club"],
    ["Which newcomer took up the job of market inspector?", "Michael Rose", ["George Palmer", "Roy Evans", "Willy Roper"], "Easy", "The Cobra Club"],
    ["Which actor played market inspector Michael Rose?", "Russell Floyd", ["Richard Elis", "Paul Moriarty", "Brian Croucher"], "Medium", "The Cobra Club"],

    // SARAH HILLS, TONY AND DAN (7)
    ["Which Hills daughter became involved with a strict Christian fellowship?", "Sarah Hills", ["Kathy Mitchell", "Bianca Jackson", "Clare Bates"], "Easy", "Sarah and Tony"],
    ["What offence brought Sarah Hills into contact with Alistair Matthews?", "Shoplifting", ["Vandalism", "Car theft", "Fare evasion"], "Medium", "Sarah and Tony"],
    ["Which man persuaded Sarah to attend his religious fellowship instead of calling the police?", "Alistair Matthews", ["Dan Zappieri", "Michael Rose", "George Palmer"], "Medium", "Sarah and Tony"],
    ["Which actor played Alistair Matthews?", "Neil Clark", ["Carl Pizzie", "Mark Homer", "Richard Elis"], "Medium", "Sarah and Tony"],
    ["Which drug dealer drew Tony Hills into dealing?", "Dan Zappieri", ["John Valecue", "Willy Roper", "Lenny Wallace"], "Medium", "Sarah and Tony"],
    ["What drug did Dan secretly put in Sarah Hills's drink?", "Ecstasy", ["Cocaine", "Heroin", "Cannabis"], "Medium", "Sarah and Tony"],
    ["Which actor played drug dealer Dan Zappieri?", "Carl Pizzie", ["Neil Clark", "Paul Moriarty", "Desune Coleman"], "Medium", "Sarah and Tony"],
];

const topicContextTags = {
    "Arthur Fowler": [
        "Arthur Fowler",
        "Pauline Fowler",
        "Willy Roper Fraud",
        "Prison And Death"
    ],
    "Ben Mitchell": [
        "Ben Mitchell",
        "Phil Mitchell",
        "Kathy Mitchell",
        "Childhood Meningitis"
    ],
    "Joe and Lorraine": [
        "Joe Wicks",
        "David Wicks",
        "Lorraine Wicks",
        "Family And Mental Health"
    ],
    "The Brannings": [
        "Carol Jackson",
        "Alan Jackson",
        "Branning Family",
        "Wedding And Racism"
    ],
    "Butchers and Evanses": [
        "Pat Evans",
        "Ricky Butcher",
        "Roy Evans",
        "Relationships And Car Trade"
    ],
    "Tiffany and Grant": [
        "Tiffany Raymond",
        "Grant Mitchell",
        "Tony Hills",
        "Marriage And Paternity"
    ],
    "Ian's Shooting": [
        "Ian Beale",
        "Cindy Beale",
        "David Wicks",
        "Custody And Contract Shooting"
    ],
    "Peggy's Diagnosis": [
        "Peggy Mitchell",
        "Queen Victoria",
        "Breast Cancer Storyline",
        "George Palmer"
    ],
    "Mark Fowler": [
        "Mark Fowler",
        "Ruth Fowler",
        "HIV Awareness",
        "Walford Market"
    ],
    "Frankie and Mick": [
        "Frankie Pierre",
        "Mick McFarlane",
        "Alan Jackson",
        "Jazz And Relationships"
    ],
    "The Cobra Club": [
        "Cobra Club",
        "George Palmer",
        "Huw Edwards",
        "Walford Nightlife"
    ],
    "Sarah and Tony": [
        "Sarah Hills",
        "Tony Hills",
        "Alistair Matthews",
        "Religion And Drugs"
    ]
};

const factSpecificTags = [
    "Mark Suspects Willy|Fundraising Fraud",
    "Willy Courts Pauline|Prison Separation",
    "Jersey Trip|Willy Deception",
    "Counterfeit Credit Cards|Evidence Of Fraud",
    "Overturned Conviction|Arthur Exonerated",
    "Prison Riot|Arthur In Custody",
    "Head Injury|Prison Violence",
    "Allotment Collapse|Arthur Final Scenes",
    "Brain Haemorrhage|Arthur Death",
    "Bill Treacher|Actor Departure",
    "Mark Punches Willy|Arthur Funeral",
    "Ben Birth|Phil And Kathy Son",
    "Gillian Taylforth|Kathy Actress",
    "Peggy Grandmother|Mitchell Family",
    "Ian Beale|Maternal Half Brother",
    "Meningitis Diagnosis|Infant Illness",
    "Hearing Loss|Meningitis Aftermath",
    "Matthew Silver|Baby Ben Actor",
    "Joe Wicks Arrival|Estranged Father",
    "Paul Nicholls|Joe Actor",
    "Lorraine Wicks|Joe Mother",
    "Jacqueline Leonard|Lorraine Actress",
    "Bolton|Joe Home Town",
    "Karen Wicks|Bereavement",
    "Road Accident|Sister Death",
    "Schizophrenia|Joe Mental Health",
    "Grant And Lorraine|New Relationship",
    "April Branning|Jilted Bride",
    "Nikos|Wedding No Show",
    "Carol And Alan Wedding|Wedding Replacement",
    "Debbie Arnold|April Actress",
    "Jim Branning|Carol Father",
    "John Bardon|Jim Actor",
    "Derek Branning|Racist Hostility",
    "Terence Beesley|Derek Actor",
    "Reenie Branning|Carol Mother",
    "Sonia Jackson|Bridesmaid",
    "David Intervenes|Alan Assault",
    "Sam Mitchell Kiss|Ricky Infidelity",
    "Bianca Burns Clothes|Relationship Anger",
    "Spain|Sam And Guillermo",
    "Frank And Pat|Former Spouses",
    "Roy Evans Wedding|Pat New Husband",
    "Evans Surname|Pat Marriage",
    "Milan|David Departure",
    "Tiffany And Grant|Queen Vic Romance",
    "Tony Hills|Tiffany Boyfriend",
    "Mark Homer|Tony Actor",
    "Simon Raymond|Tiffany Brother",
    "Andrew Lynford|Simon Actor",
    "Tony And Simon Kiss|Coming Out Storyline",
    "Tiffany Sees Kiss|Family Conflict",
    "Grant And Tony|Uncertain Paternity",
    "Paris Wedding|Grant And Tiffany",
    "Peggy Mitchell|Tiffany Mother In Law",
    "Lorraine Wicks|Grant Affair Tension",
    "New Years Eve Revelation|Baby Paternity",
    "David Wicks|Cindy Affair",
    "Cindy Beale|Ian Marriage",
    "Child Custody Dispute|Marriage Breakdown",
    "John Valecue|Contract Gunman",
    "Barry Evans|Gunman Contact",
    "Ian Survives Shooting|Contract Killing",
    "Michelle Collins|Cindy Actress",
    "Peter Beale|Children Taken Abroad",
    "Steven Beale|Child Taken Abroad",
    "Lucy Beale|Child Left Behind",
    "Italy|Cindy Flight",
    "Peggy Breast Lump|Health Scare",
    "Tiffany Raymond|Peggy Confidante",
    "Breast Cancer|Peggy Diagnosis",
    "Delayed Doctors Appointment|Fear Of Diagnosis",
    "Lumpectomy|Cancer Treatment",
    "George Palmer|Peggy Partner",
    "Barbara Windsor|Peggy Actress",
    "Mark HIV Status|Public Disclosure",
    "Grant Mitchell|HIV Disclosure",
    "Market Trader|Mark Occupation",
    "Ruth Fowler|Mark Wife",
    "Todd Carty|Mark Actor",
    "Frankie Pierre|Alan Affair",
    "Syan Blake|Frankie Actress",
    "Mick McFarlane|Musician Arrival",
    "Jazz Band|Mick Music",
    "Alan Night Cafe|Live Performance",
    "Cobra Club|Nightclub Opening",
    "George Palmer|Club Owner",
    "Paul Moriarty|George Actor",
    "Lenny Wallace|Club Barman",
    "Wales|Huw Background",
    "Richard Elis|Huw Actor",
    "Michael Rose|Market Inspector",
    "Russell Floyd|Michael Actor",
    "Sarah Hills|Religious Fellowship",
    "Shoplifting|Sarah Offence",
    "Alistair Matthews|Christian Group",
    "Neil Clark|Alistair Actor",
    "Dan Zappieri|Drug Dealer",
    "Ecstasy|Spiked Drink",
    "Carl Pizzie|Dan Actor"
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);
    const tags = [
        'British Television', 'Soaps', 'EastEnders', '1996', topic,
        ...topicContextTags[topic], correctAnswer,
        ...factSpecificTags[index].split('|')
    ];
    return {
        id: 'tv_' + String(7204 + index).padStart(4, '0'),
        category: 'Television', question, answers, correctAnswer, difficulty,
        tags: [...new Set(tags)],
        dailyEligible: true
    };
});

module.exports = questions;
