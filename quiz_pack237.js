 // quiz_pack237.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 1999
// 100 questions: tv_7504 to tv_7603
// New pack with detailed tags from creation.
// Do not update quiz_bank.js until the end of today's session
// or the completion of the EastEnders packs, whichever comes first.

const topicTags = {
    "Tiffany Aftermath": [
        "Tiffany Mitchell",
        "Grant Mitchell",
        "Tiffany Death And Family Aftermath"
    ],
    "Saskia Death": [
        "Steve Owen",
        "Saskia Duncan",
        "E20 Nightclub Death"
    ],
    "Matthew Trial": [
        "Matthew Rose",
        "Steve Owen",
        "Wrongful Conviction Storyline"
    ],
    "Carol Bianca Dan": [
        "Carol Jackson",
        "Bianca Butcher",
        "Dan Sullivan Affair"
    ],
    "Mitchell Brothers": [
        "Phil Mitchell",
        "Grant Mitchell",
        "Mitchell Brothers Breakdown"
    ],
    "Frank Peggy Wedding": [
        "Frank Butcher",
        "Peggy Mitchell",
        "Wedding And Queen Vic"
    ],
    "Ian Mel Wedding": [
        "Ian Beale",
        "Melanie Healy",
        "Millennium Wedding And Deception"
    ],
    "Terry Irene Troy": [
        "Terry Raymond",
        "Irene Raymond",
        "Troy Harvey Affair"
    ],
    "Walford Stories": [
        "Walford Residents",
        "1999 Walford Events",
        "Character Relationships"
    ],
    "Barry Natalie Wedding": [
        "Barry Evans",
        "Natalie Price",
        "Millennium Wedding"
    ]
};

const facts = [
    // TIFFANY'S DEATH AND AFTERMATH (10)
    ["Which Mitchell family member was mourned by Walford at the beginning of 1999?", "Tiffany Mitchell", ["Peggy Mitchell", "Kathy Mitchell", "Sam Mitchell"], "Easy", "Tiffany Aftermath", ["Tiffany Funeral", "New Year Mourning"]],
    ["Which man was Tiffany Mitchell's widower?", "Grant Mitchell", ["Phil Mitchell", "Ricky Butcher", "Terry Raymond"], "Easy", "Tiffany Aftermath", ["Grant Widower", "Marriage"]],
    ["Who was driving the vehicle involved in Tiffany's fatal accident?", "Frank Butcher", ["Roy Evans", "Dan Sullivan", "Barry Evans"], "Easy", "Tiffany Aftermath", ["Frank Butcher", "Road Accident"]],
    ["Which child was left without her mother after Tiffany's death?", "Courtney Mitchell", ["Louise Mitchell", "Lucy Beale", "Sonia Jackson"], "Easy", "Tiffany Aftermath", ["Courtney Mitchell", "Mother Daughter"]],
    ["Which member of the Raymond family clashed with Grant at Tiffany's funeral?", "Simon Raymond", ["Terry Raymond", "Tony Hills", "Irene Raymond"], "Medium", "Tiffany Aftermath", ["Simon Raymond", "Funeral Conflict"]],
    ["Which relative of Tiffany had also been romantically involved with Grant?", "Louise Raymond", ["Irene Raymond", "Rosa di Marco", "Pat Evans"], "Medium", "Tiffany Aftermath", ["Louise Raymond", "Grant Affair"]],
    ["Who discovered Tiffany's letter revealing Grant's affair with Louise?", "Bianca Butcher", ["Peggy Mitchell", "Kathy Mitchell", "Carol Jackson"], "Medium", "Tiffany Aftermath", ["Bianca Butcher", "Secret Letter"]],
    ["Which character took Courtney without permission, causing a frantic search?", "Simon Raymond", ["Tony Hills", "Jamie Mitchell", "Matthew Rose"], "Medium", "Tiffany Aftermath", ["Simon Raymond", "Courtney Taken"]],
    ["Which character set fire to his own flat during an emotional crisis?", "Simon Raymond", ["Tony Hills", "Grant Mitchell", "Phil Mitchell"], "Medium", "Tiffany Aftermath", ["Simon Raymond", "Flat Fire"]],
    ["Where did Grant scatter Tiffany's ashes?", "Peacehaven", ["Brighton", "Southend", "Eastbourne"], "Medium", "Tiffany Aftermath", ["Peacehaven", "Ashes Scattered"]],

    // SASKIA'S DEATH (10)
    ["Which nightclub owner killed his former girlfriend Saskia Duncan?", "Steve Owen", ["Phil Mitchell", "Grant Mitchell", "Beppe di Marco"], "Easy", "Saskia Death", ["Steve Owen", "Saskia Death"]],
    ["In which nightclub did Saskia Duncan's fatal confrontation take place?", "E20", ["The Queen Vic", "The Dagmar", "Angie's Den"], "Easy", "Saskia Death", ["E20 Nightclub", "Fatal Confrontation"]],
    ["Which celebration coincided with Saskia's death?", "Valentine's Day", ["Bonfire Night", "New Year's Eve", "Halloween"], "Medium", "Saskia Death", ["Valentines Day 1999", "Nightclub Incident"]],
    ["Which object did Steve use to strike Saskia during her attack?", "An ashtray", ["A champagne bottle", "A chair leg", "A poker"], "Medium", "Saskia Death", ["Ashtray", "Fatal Blow"]],
    ["What was Saskia using to strangle Steve before he struck her?", "His tie", ["A scarf", "A telephone cable", "A belt"], "Medium", "Saskia Death", ["Tie Strangling", "Self Defence"]],
    ["Which young nightclub employee witnessed Saskia's death?", "Matthew Rose", ["Jamie Mitchell", "Martin Fowler", "Robbie Jackson"], "Easy", "Saskia Death", ["Matthew Rose", "Death Witness"]],
    ["What job did Matthew Rose do at Steve Owen's club?", "DJ", ["Chef", "Barman", "Security guard"], "Easy", "Saskia Death", ["Nightclub DJ", "Matthew Employment"]],
    ["Where did Steve and Matthew conceal Saskia's body?", "Epping Forest", ["Walford Common", "The River Thames", "The Queen Vic cellar"], "Medium", "Saskia Death", ["Epping Forest", "Body Burial"]],
    ["Which relative of Saskia arrived in Walford looking for her?", "Claudia Fielding", ["Gina Williams", "Jackie Owen", "Susan Rose"], "Medium", "Saskia Death", ["Claudia Fielding", "Saskia Sister"]],
    ["Which actress portrayed Saskia Duncan?", "Deborah Sheridan-Taylor", ["Tamzin Outhwaite", "Lucy Benjamin", "Victoria Gould"], "Medium", "Saskia Death", ["Deborah Sheridan Taylor", "Saskia Actress"]],

    // MATTHEW ROSE AND THE TRIAL (10)
    ["Which nightclub owner persuaded Matthew Rose to help cover up Saskia's death?", "Steve Owen", ["Grant Mitchell", "George Palmer", "Beppe di Marco"], "Easy", "Matthew Trial", ["Steve Owen", "Cover Up"]],
    ["What evidence did Matthew secretly retain after Saskia's death?", "A CCTV recording", ["A bloodstained shirt", "A written confession", "A telephone bill"], "Medium", "Matthew Trial", ["CCTV Tape", "Evidence"]],
    ["Which di Marco daughter did Matthew tell about Saskia's death?", "Teresa di Marco", ["Nicky di Marco", "Rosa di Marco", "Luisa di Marco"], "Medium", "Matthew Trial", ["Teresa di Marco", "Secret Confession"]],
    ["What discovery brought the police investigation into Saskia's death to a head?", "Her body was found", ["Steve confessed", "A witness came forward", "Her passport was found"], "Easy", "Matthew Trial", ["Body Discovery", "Police Investigation"]],
    ["Which man was wrongly convicted over Saskia Duncan's death?", "Matthew Rose", ["Steve Owen", "Beppe di Marco", "Phil Mitchell"], "Easy", "Matthew Trial", ["Matthew Wrongly Convicted", "Miscarriage Of Justice"]],
    ["What crime was Matthew Rose found guilty of in Saskia's case?", "Manslaughter", ["Arson", "Kidnapping", "Armed robbery"], "Medium", "Matthew Trial", ["Manslaughter Conviction", "Trial Verdict"]],
    ["Who escaped conviction despite being responsible for Saskia's death?", "Steve Owen", ["Matthew Rose", "Michael Rose", "Gianni di Marco"], "Easy", "Matthew Trial", ["Steve Acquitted", "Court Verdict"]],
    ["Which actress played Steve Owen's sister Jackie?", "Race Davies", ["Tamzin Outhwaite", "Louise Jameson", "Roberta Taylor"], "Medium", "Matthew Trial", ["Race Davies", "Jackie Owen Actress"]],
    ["Which city did Matthew and Teresa flee to after Saskia’s body was found?", "Nottingham", ["Leicester", "Birmingham", "Derby"], "Easy", "Matthew Trial", ["Nottingham Escape", "Matthew And Teresa On The Run"]],
    ["What evidence helped secure Matthew’s release from prison in December?", "An ashtray with Steve’s fingerprints", ["A signed confession from Steve", "A letter written by Saskia", "A new witness at the nightclub"], "Medium", "Matthew Trial", ["Ashtray Fingerprints", "December Release"]],

    // CAROL, BIANCA AND DAN (10)
    ["Which newcomer arrived as Carol Jackson's boyfriend?", "Dan Sullivan", ["Steve Owen", "Troy Harvey", "Beppe di Marco"], "Easy", "Carol Bianca Dan", ["Dan Sullivan", "Carol Boyfriend"]],
    ["Which actor portrayed Dan Sullivan?", "Craig Fairbrass", ["Martin Kemp", "Michael Greco", "Marc Bannerman"], "Medium", "Carol Bianca Dan", ["Craig Fairbrass", "Dan Actor"]],
    ["Which daughter of Carol Jackson had previously been involved with Dan?", "Bianca Butcher", ["Sonia Jackson", "Billie Jackson", "Natalie Price"], "Easy", "Carol Bianca Dan", ["Bianca Butcher", "Past Romance"]],
    ["Who was Bianca Butcher married to when she began her affair with Dan?", "Ricky Butcher", ["Barry Evans", "Grant Mitchell", "Ian Beale"], "Easy", "Carol Bianca Dan", ["Ricky Butcher", "Marriage Betrayal"]],
    ["What connection did Dan Sullivan have to Carol and Bianca?", "He was Carol's boyfriend and Bianca's former lover", ["He was their landlord", "He was Bianca's employer", "He was Carol's brother"], "Medium", "Carol Bianca Dan", ["Mother Daughter Triangle", "Dan Relationships"]],
    ["What did Carol discover she was expecting while involved with Dan?", "A baby", ["A business inheritance", "A promotion", "A house purchase"], "Easy", "Carol Bianca Dan", ["Carol Pregnancy", "Dan Child"]],
    ["Which character publicly exposed Bianca and Dan's affair?", "Carol Jackson", ["Pat Evans", "Natalie Price", "Peggy Mitchell"], "Medium", "Carol Bianca Dan", ["Carol Discovers Affair", "Public Exposure"]],
    ["What happened to Carol's relationship with Dan after she learned of his affair?", "She ended it", ["They married immediately", "They moved to Spain", "They renewed their engagement"], "Easy", "Carol Bianca Dan", ["Dan Rejected", "Relationship Breakdown"]],
    ["Which city did Bianca head to for a beauty course when she left Walford?", "Manchester", ["Liverpool", "Leeds", "Bristol"], "Medium", "Carol Bianca Dan", ["Manchester", "Bianca Departure"]],
    ["Which actress played Carol Jackson during the affair storyline?", "Lindsey Coulson", ["Patsy Palmer", "Lucy Speed", "Pam St Clement"], "Easy", "Carol Bianca Dan", ["Lindsey Coulson", "Carol Actress"]],

    // THE MITCHELL BROTHERS (10)
    ["Which Mitchell brother became involved with Kathy after her return to Walford?", "Grant Mitchell", ["Phil Mitchell", "Billy Mitchell", "Jamie Mitchell"], "Medium", "Mitchell Brothers", ["Grant And Kathy", "Secret Relationship"]],
    ["Who was Kathy's estranged husband when she became involved with Grant?", "Phil Mitchell", ["Grant Mitchell", "Ian Beale", "Gavin Sullivan"], "Easy", "Mitchell Brothers", ["Phil And Kathy", "Marriage"]],
    ["What family relationship made Grant's involvement with Kathy especially explosive?", "Grant was Phil's brother", ["Grant was Kathy's cousin", "Grant was Ian's father", "Grant was Peggy's brother"], "Easy", "Mitchell Brothers", ["Brother Betrayal", "Family Conflict"]],
    ["Which character told Phil about her involvement with Grant?", "Kathy Mitchell", ["Lisa Shaw", "Melanie Healy", "Peggy Mitchell"], "Medium", "Mitchell Brothers", ["Kathy Confession", "Affair Revealed"]],
    ["Into which river did Phil and Grant crash during their confrontation?", "The Thames", ["The Lea", "The Medway", "The Severn"], "Easy", "Mitchell Brothers", ["Thames Crash", "Car In River"]],
    ["Which Mitchell brother left Walford with Courtney after the crash storyline?", "Grant Mitchell", ["Phil Mitchell", "Billy Mitchell", "Jamie Mitchell"], "Easy", "Mitchell Brothers", ["Grant Departure", "Courtney Mitchell"]],
    ["Which actress played Grant and Phil's mother Peggy?", "Barbara Windsor", ["Wendy Richard", "Pam St Clement", "June Brown"], "Easy", "Mitchell Brothers", ["Barbara Windsor", "Peggy Actress"]],
    ["Which actor played Grant Mitchell during his 1999 departure?", "Ross Kemp", ["Steve McFadden", "Perry Fenwick", "Martin Kemp"], "Easy", "Mitchell Brothers", ["Ross Kemp", "Grant Actor"]],
    ["Which actor played Phil Mitchell?", "Steve McFadden", ["Ross Kemp", "Perry Fenwick", "Jack Ryder"], "Easy", "Mitchell Brothers", ["Steve McFadden", "Phil Actor"]],
    ["Which younger Mitchell had been taken into Phil's care after mistreatment by Billy?", "Jamie Mitchell", ["Ben Mitchell", "Courtney Mitchell", "Sam Mitchell"], "Easy", "Mitchell Brothers", ["Jamie Mitchell", "Phil Protects Jamie"]],

    // FRANK AND PEGGY (10)
    ["Which couple married in Walford in April 1999?", "Frank Butcher and Peggy Mitchell", ["Ricky Butcher and Bianca Jackson", "Ian Beale and Mel Healy", "Terry Raymond and Irene Hills"], "Easy", "Frank Peggy Wedding", ["April Wedding", "Frank And Peggy"]],
    ["Which former husband of Pat Evans became Peggy Mitchell's husband?", "Frank Butcher", ["Roy Evans", "Terry Raymond", "George Palmer"], "Easy", "Frank Peggy Wedding", ["Frank Butcher", "Pat Former Husband"]],
    ["Which actor played Frank Butcher?", "Mike Reid", ["Tony Caunter", "Gavin Richards", "Paul Moriarty"], "Easy", "Frank Peggy Wedding", ["Mike Reid", "Frank Actor"]],
    ["Who did Frank Butcher ask to be his best man?", "Roy Evans", ["Ian Beale", "Grant Mitchell", "Barry Evans"], "Medium", "Frank Peggy Wedding", ["Roy Evans", "Best Man"]],
    ["Which son of Frank struggled with an ill-fitting suit on the wedding day?", "Ricky Butcher", ["Barry Evans", "Jamie Mitchell", "Martin Fowler"], "Medium", "Frank Peggy Wedding", ["Ricky Butcher", "Wedding Suit"]],
    ["Which Mitchell son objected strongly to Peggy marrying Frank?", "Grant Mitchell", ["Phil Mitchell", "Jamie Mitchell", "Billy Mitchell"], "Medium", "Frank Peggy Wedding", ["Grant Opposition", "Tiffany Aftermath"]],
    ["What was the name of the pub Peggy and Frank ran together?", "The Queen Victoria", ["The Dagmar", "The Albert", "The Swan"], "Easy", "Frank Peggy Wedding", ["Queen Victoria", "Pub Landlords"]],
    ["Which actress played Pat Evans?", "Pam St Clement", ["Barbara Windsor", "June Brown", "Roberta Taylor"], "Easy", "Frank Peggy Wedding", ["Pam St Clement", "Pat Actress"]],
    ["What health condition was Peggy dealing with around her wedding?", "Breast cancer", ["Multiple sclerosis", "Epilepsy", "Diabetes"], "Medium", "Frank Peggy Wedding", ["Peggy Breast Cancer", "Health Storyline"]],
    ["Which of Frank's former wives was married to Roy Evans at the time?", "Pat Evans", ["Peggy Mitchell", "Irene Raymond", "Louise Raymond"], "Easy", "Frank Peggy Wedding", ["Pat And Roy", "Frank Previous Marriage"]],

    // IAN AND MEL'S MILLENNIUM WEDDING (10)
    ["Which woman married Ian Beale on New Year's Eve 1999?", "Melanie Healy", ["Lisa Shaw", "Natalie Price", "Gina Williams"], "Easy", "Ian Mel Wedding", ["Melanie Healy", "Millennium Marriage"]],
    ["Which actress played Melanie Healy?", "Tamzin Outhwaite", ["Lucy Benjamin", "Martine McCutcheon", "Patsy Palmer"], "Easy", "Ian Mel Wedding", ["Tamzin Outhwaite", "Mel Actress"]],
    ["Which child of Ian's was central to the deception that destroyed his marriage?", "Lucy Beale", ["Steven Beale", "Peter Beale", "Cindy Williams"], "Medium", "Ian Mel Wedding", ["Lucy Beale", "Illness Deception"]],
    ["Which serious illness did Ian falsely claim Lucy had?", "Cancer", ["Leukaemia", "Meningitis", "Diabetes"], "Medium", "Ian Mel Wedding", ["False Cancer Claim", "Ian Lies"]],
    ["Why did Ian lie about Lucy's health?", "To stop Mel leaving him", ["To claim an inheritance", "To win a custody case", "To sell his business"], "Medium", "Ian Mel Wedding", ["Manipulation", "Relationship Control"]],
    ["Which nightclub owner was Mel romantically involved with while engaged to Ian?", "Steve Owen", ["Beppe di Marco", "Dan Sullivan", "Phil Mitchell"], "Medium", "Ian Mel Wedding", ["Steve Owen", "Mel Affair"]],
    ["Which friend of Mel's worked in the Walford market office?", "Lisa Shaw", ["Natalie Price", "Ruth Fowler", "Polly Becker"], "Easy", "Ian Mel Wedding", ["Lisa Shaw", "Mel Friendship"]],
    ["Which actor played Ian Beale?", "Adam Woodyatt", ["Martin Kemp", "Shaun Williamson", "Michael Greco"], "Easy", "Ian Mel Wedding", ["Adam Woodyatt", "Ian Actor"]],
    ["What did Mel do after learning the truth about Lucy's supposed illness?", "She left Ian", ["She renewed her vows", "She moved into the Queen Vic", "She adopted Lucy"], "Easy", "Ian Mel Wedding", ["Marriage Collapse", "Mel Leaves Ian"]],
    ["How long did Ian and Mel's first marriage last?", "Only hours", ["Six months", "Two years", "Ten years"], "Medium", "Ian Mel Wedding", ["Very Short Marriage", "Millennium Night"]],

    // TERRY, IRENE AND TROY (10)
    ["Which couple finally married in January 1999?", "Terry Raymond and Irene Hills", ["Frank Butcher and Peggy Mitchell", "Barry Evans and Natalie Price", "Ian Beale and Mel Healy"], "Easy", "Terry Irene Troy", ["January Wedding", "Terry And Irene"]],
    ["Which actor played Terry Raymond?", "Gavin Richards", ["Mike Reid", "Tony Caunter", "Ross Kemp"], "Medium", "Terry Irene Troy", ["Gavin Richards", "Terry Actor"]],
    ["Which actress played Irene Raymond?", "Roberta Taylor", ["Louise Jameson", "Barbara Windsor", "Pam St Clement"], "Medium", "Terry Irene Troy", ["Roberta Taylor", "Irene Actress"]],
    ["Which young lodger became romantically involved with Irene?", "Troy Harvey", ["Tony Hills", "Matthew Rose", "Jamie Mitchell"], "Easy", "Terry Irene Troy", ["Troy Harvey", "Irene Affair"]],
    ["Which actor played Troy Harvey?", "Jamie Jarvis", ["Mark Homer", "Joe Absolom", "Jack Ryder"], "Medium", "Terry Irene Troy", ["Jamie Jarvis", "Troy Actor"]],
    ["Which character was Troy looking for when he first arrived in Walford?", "Tony Hills", ["Simon Raymond", "Ricky Butcher", "Martin Fowler"], "Medium", "Terry Irene Troy", ["Tony Hills", "Troy Arrival"]],
    ["Which couple gave Troy a place to stay?", "Terry and Irene Raymond", ["Frank and Peggy Butcher", "Roy and Pat Evans", "Ian and Mel Beale"], "Easy", "Terry Irene Troy", ["Troy Lodger", "Raymond Home"]],
    ["In what business did Troy help Terry and Irene?", "Their shop", ["A garage", "A nightclub", "A taxi company"], "Medium", "Terry Irene Troy", ["Raymond Shop", "Troy Employment"]],
    ["Which holiday was ruined when Terry discovered Irene's affair?", "Christmas", ["Easter", "Bonfire Night", "New Year's Day"], "Easy", "Terry Irene Troy", ["Christmas Discovery", "Affair Exposed"]],
    ["Which gift from Irene helped expose her relationship with Troy?", "An engraved watch", ["A gold necklace", "A silver ring", "A leather wallet"], "Medium", "Terry Irene Troy", ["Engraved Watch", "Affair Evidence"]],

    // OTHER WALFORD STORYLINES (10)
    ["Which Walford resident was arrested after mistaking cannabis for ordinary herbs?", "Dot Cotton", ["Pauline Fowler", "Pat Evans", "Rosa di Marco"], "Easy", "Walford Stories", ["Dot Cotton", "Cannabis Mix Up"]],
    ["What drink did Dot accidentally offer a police officer?", "Herbal tea", ["Coffee", "Mulled wine", "Lemonade"], "Medium", "Walford Stories", ["Herbal Tea", "Police Officer"]],
    ["Which actor played Dot Cotton?", "June Brown", ["Wendy Richard", "Gretchen Franklin", "Barbara Keogh"], "Easy", "Walford Stories", ["June Brown", "Dot Actress"]],
    ["Which two Walford men left together to go travelling in 1999?", "Tony Hills and Simon Raymond", ["Phil and Grant Mitchell", "Ricky Butcher and Dan Sullivan", "Barry Evans and Ian Beale"], "Medium", "Walford Stories", ["Tony And Simon", "Joint Departure"]],
    ["Which country did Tony and Simon visit as part of their travels?", "The Netherlands", ["Italy", "France", "Ireland"], "Medium", "Walford Stories", ["Amsterdam", "Travel"]],
    ["Which character was Grant Mitchell's new romantic interest and a nightclub singer?", "Nina Harris", ["Melanie Healy", "Lisa Shaw", "Natalie Price"], "Medium", "Walford Stories", ["Nina Harris", "Grant Romance"]],
    ["Which actress played Nina Harris?", "Troy Titus-Adams", ["Diane Parish", "Lucy Benjamin", "Tamzin Outhwaite"], "Medium", "Walford Stories", ["Troy Titus Adams", "Nina Actress"]],
    ["Which di Marco son was trapped in a damaged building alongside Jackie Owen?", "Gianni di Marco", ["Beppe di Marco", "Joe di Marco", "Bruno di Marco"], "Medium", "Walford Stories", ["Gianni di Marco", "Building Collapse"]],
    ["Who was Jackie Owen's brother?", "Steve Owen", ["Matthew Rose", "Gianni di Marco", "Beppe di Marco"], "Easy", "Walford Stories", ["Jackie Owen", "Sibling Relationship"]],
    ["Which character was played by the actor Joe Absolom?", "Matthew Rose", ["Jamie Mitchell", "Tony Hills", "Dan Sullivan"], "Easy", "Walford Stories", ["Joe Absolom", "Matthew Actor"]],

    // BARRY AND NATALIE'S WEDDING (10)
    ["Which couple married on New Year's Eve 1999 alongside Ian and Mel?", "Barry Evans and Natalie Price", ["Ricky and Bianca Butcher", "Phil and Kathy Mitchell", "Terry and Irene Raymond"], "Easy", "Barry Natalie Wedding", ["Barry Natalie Marriage", "Millennium Weddings"]],
    ["Which actor played Barry Evans?", "Shaun Williamson", ["Adam Woodyatt", "Joe Absolom", "Martin Kemp"], "Easy", "Barry Natalie Wedding", ["Shaun Williamson", "Barry Actor"]],
    ["Which actress played Natalie Price?", "Lucy Speed", ["Tamzin Outhwaite", "Patsy Palmer", "Lucy Benjamin"], "Easy", "Barry Natalie Wedding", ["Lucy Speed", "Natalie Actress"]],
    ["Who was Barry Evans's father?", "Roy Evans", ["Frank Butcher", "George Palmer", "Terry Raymond"], "Easy", "Barry Natalie Wedding", ["Roy Evans", "Barry Father"]],
    ["Who was Barry's stepmother?", "Pat Evans", ["Peggy Mitchell", "Rosa di Marco", "Pauline Fowler"], "Easy", "Barry Natalie Wedding", ["Pat Evans", "Family Relationships"]],
    ["Which city did Barry visit for his stag celebrations?", "Amsterdam", ["Paris", "Rome", "Dublin"], "Medium", "Barry Natalie Wedding", ["Amsterdam Stag Do", "Barry Celebrations"]],
    ["What important wedding items did Barry misplace on his wedding day?", "The rings", ["The invitations", "The flowers", "The marriage certificate"], "Medium", "Barry Natalie Wedding", ["Lost Wedding Rings", "Wedding Panic"]],
    ["Who helped Barry by providing substitute wedding rings?", "Roy and Pat Evans", ["Ian and Mel Beale", "Frank and Peggy Butcher", "Terry and Irene Raymond"], "Medium", "Barry Natalie Wedding", ["Roy And Pat", "Replacement Rings"]],
    ["Which of Natalie's sisters repeatedly criticised her when Barry visited her family?", "Susie Price", ["Gina Williams", "Claudia Fielding", "Jackie Owen"], "Medium", "Barry Natalie Wedding", ["Susie Price", "Natalie Family Tension"]],
    ["What special occasion did Barry and Natalie's wedding share with the end of 1999?", "The Millennium celebrations", ["A royal wedding", "The Queen's Jubilee", "A general election"], "Easy", "Barry Natalie Wedding", ["Millennium Eve", "New Years Celebrations"]]
];

const questions = facts.map(([
    question,
    correctAnswer,
    wrongAnswers,
    difficulty,
    topic,
    detailTags
], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    const tags = [
        "British Television",
        "Soaps",
        "EastEnders",
        "1999",
        topic,
        ...topicTags[topic],
        correctAnswer,
        ...detailTags
    ];

    return {
        id: "tv_" + String(7504 + index).padStart(4, "0"),
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
