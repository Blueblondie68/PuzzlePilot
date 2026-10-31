// quiz_pack240.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2002
// 110 questions: tv_7814 to tv_7923
// Fully tagged from creation. Do not update quiz_bank.js until the agreed bank update.

const topicTags = {
    "New Year And Weddings": ["2002 Walford Milestones", "Weddings And Family Events", "Frank Butcher", "Dot And Jim"],
    "Steve Owen Exit": ["Steve Owen", "Phil Mitchell", "Louise Mitchell", "March 2002 Car Crash"],
    "Mel Lisa And Mark": ["Melanie Owen", "Lisa Fowler", "Mark Fowler", "Marriage And Departure"],
    "Little Mo Trial": ["Little Mo Morgan", "Trevor Morgan", "Attempted Murder Trial", "Justice And Imprisonment"],
    "Trevor House Fire": ["Trevor Morgan", "Tom Banks", "Little Mo Morgan", "Slater House Fire"],
    "Sharon And Tom": ["Sharon Watts", "Tom Banks", "Angie Watts", "Illness And Bereavement"],
    "Jamie And Sonia": ["Jamie Mitchell", "Sonia Jackson", "Martin Fowler", "Christmas 2002 Tragedy"],
    "Billy And Little Mo": ["Billy Mitchell", "Little Mo Morgan", "Romance And Wedding", "Christmas Day 2002"],
    "Alfie Arrives": ["Alfie Moon", "The Queen Victoria", "November 2002 Arrival", "Moon Family"],
    "New Faces": ["Walford Arrivals", "2002 Characters", "Actor And Character Connections", "Residents"],
    "Other 2002 Stories": ["Slater Family", "Beale Family", "Relationships", "Year End Storylines"]
};

const facts = [
    // NEW YEAR AND WEDDINGS (10)
    ["Which couple married on Valentine's Day after becoming engaged on the London Eye?", "Dot Cotton and Jim Branning", ["Pat and Roy Evans", "Mark Fowler and Lisa Shaw", "Terry and Irene Raymond"], "Easy", "New Year And Weddings", ["February Wedding", "Dot Jim Marriage"]],
    ["Which month saw Dot and Jim's wedding?", "February", ["January", "June", "November"], "Medium", "New Year And Weddings", ["February 2002", "Wedding Month"]],
    ["Which family name did Dot acquire on marrying Jim?", "Branning", ["Mitchell", "Fowler", "Evans"], "Easy", "New Year And Weddings", ["Dot Branning", "Married Name"]],
    ["Which couple became parents to a son called Jack early in 2002?", "Barry and Natalie Evans", ["Ian and Laura Beale", "Mark and Lisa Fowler", "Garry and Lynne Hobbs"], "Easy", "New Year And Weddings", ["Jack Evans Birth", "Natalie And Barry"]],
    ["Which month was Barry and Natalie's son Jack born?", "January", ["March", "August", "October"], "Medium", "New Year And Weddings", ["January 2002", "Jack Birth Month"]],
    ["Which former husband did Peggy travel to Spain to mourn, only to find him alive?", "Frank Butcher", ["Roy Evans", "Terry Raymond", "George Palmer"], "Easy", "New Year And Weddings", ["Frank Fake Death", "Peggy Spain Visit"]],
    ["What had Frank Butcher faked to lure Peggy to Spain?", "His death", ["A wedding", "A lottery win", "An arrest"], "Easy", "New Year And Weddings", ["Fake Funeral", "Frank Deception"]],
    ["In which country was Frank's bogus funeral arranged?", "Spain", ["France", "Italy", "Portugal"], "Easy", "New Year And Weddings", ["Spanish Episodes", "Fake Funeral Location"]],
    ["Which Mitchell daughter did Peggy discover working as a dancer in Spain?", "Sam Mitchell", ["Louise Mitchell", "Courtney Mitchell", "Kathy Mitchell"], "Medium", "New Year And Weddings", ["Sam In Spain", "Peggy Discovers Sam"]],
    ["Which member of the Slater family died off-screen after his abuse of Kat was exposed?", "Harry Slater", ["Charlie Slater", "Garry Hobbs", "Trevor Morgan"], "Easy", "New Year And Weddings", ["Harry Death", "February 2002"]],

    // STEVE OWEN'S EXIT (10)
    ["Which nightclub owner died after a car chase involving Phil Mitchell?", "Steve Owen", ["Dan Sullivan", "Beppe di Marco", "Terry Raymond"], "Easy", "Steve Owen Exit", ["Steve Death", "Car Chase"]],
    ["Which Mitchell child was in Steve Owen's car during his final chase?", "Louise Mitchell", ["Courtney Mitchell", "Ben Mitchell", "Jamie Mitchell"], "Easy", "Steve Owen Exit", ["Louise In Car", "Child In Danger"]],
    ["Who pursued Steve Owen as he attempted to escape with Louise?", "Phil Mitchell", ["Mark Fowler", "Ian Beale", "Billy Mitchell"], "Easy", "Steve Owen Exit", ["Phil Pursuit", "Father Daughter"]],
    ["What caused Steve Owen's fatal injuries at the end of the chase?", "His car exploded", ["He was shot", "He drowned", "He fell from a bridge"], "Easy", "Steve Owen Exit", ["Car Explosion", "Fatal Crash"]],
    ["Which month did Steve Owen die?", "March", ["January", "June", "November"], "Medium", "Steve Owen Exit", ["March 2002", "Steve Final Episode"]],
    ["Who managed to rescue Louise before Steve's car exploded?", "Phil Mitchell", ["Mark Fowler", "Jamie Mitchell", "Billy Mitchell"], "Easy", "Steve Owen Exit", ["Louise Rescue", "Crash Aftermath"]],
    ["Which Mitchell woman had Steve secretly slept with shortly before his death?", "Sam Mitchell", ["Peggy Mitchell", "Lisa Shaw", "Sharon Watts"], "Medium", "Steve Owen Exit", ["Steve And Sam", "Revenge Against Phil"]],
    ["Which country had Steve hoped to flee to with Mel and his companions?", "The United States", ["Spain", "Australia", "Canada"], "Medium", "Steve Owen Exit", ["Escape To America", "Steve Plan"]],
    ["Which Mitchell planted drugs in E20, leading to Steve Owen’s arrest in January?", "Billy Mitchell", ["Jamie Mitchell", "Phil Mitchell", "Grant Mitchell"], "Medium", "Steve Owen Exit", ["Billy Plants Drugs", "E20 Arrest Plot"]],
    ["Which woman was left widowed by Steve Owen's fatal crash?", "Melanie Owen", ["Lisa Fowler", "Laura Beale", "Natalie Evans"], "Easy", "Steve Owen Exit", ["Mel Widowed", "Steve Mel Marriage"]],

    // MEL, LISA AND MARK (10)
    ["Which couple married in March with Phil Mitchell opposing their relationship?", "Mark Fowler and Lisa Shaw", ["Jamie Mitchell and Sonia Jackson", "Billy Mitchell and Little Mo Morgan", "Garry Hobbs and Lynne Slater"], "Easy", "Mel Lisa And Mark", ["March 2002 Wedding", "Mark Lisa Marriage"]],
    ["At whose wedding reception was Mel Owen arrested over Steve's criminal activities?", "Mark and Lisa's", ["Dot and Jim's", "Billy and Little Mo's", "Barry and Natalie's"], "Medium", "Mel Lisa And Mark", ["Mel Arrested", "Wedding Reception"]],
    ["Which deceased husband's criminal dealings led to Mel being questioned by police?", "Steve Owen", ["Frank Butcher", "Roy Evans", "Dan Sullivan"], "Easy", "Mel Lisa And Mark", ["Steve Criminal Activities", "Mel Investigation"]],
    ["In which month did Melanie Owen leave Walford after Steve's death?", "April", ["January", "August", "December"], "Medium", "Mel Lisa And Mark", ["Mel April Exit", "2002 Departure"]],
    ["Who admitted to Mel that she, not Steve, had shot Phil the previous year?", "Lisa Fowler", ["Sharon Watts", "Peggy Mitchell", "Janine Butcher"], "Medium", "Mel Lisa And Mark", ["Lisa Confession To Mel", "Shooting Secret"]],
    ["Which baby was the focus of Phil's custody conflict with Lisa and Mark?", "Louise", ["Chloe", "Courtney", "Lucy"], "Easy", "Mel Lisa And Mark", ["Louise Custody", "Phil Lisa Mark"]],
    ["Which country did Lisa take Louise to after leaving Phil?", "Portugal", ["Spain", "France", "Ireland"], "Easy", "Mel Lisa And Mark", ["Lisa Louise Portugal", "Departure Abroad"]],
    ["Who returned to Walford from Portugal with Louise but without Lisa?", "Phil Mitchell", ["Mark Fowler", "Steve Owen", "Jamie Mitchell"], "Easy", "Mel Lisa And Mark", ["Phil Returns With Louise", "November 2002"]],
    ["Which Fowler husband was left heartbroken when Lisa returned to Phil?", "Mark Fowler", ["Martin Fowler", "Ian Beale", "Jim Branning"], "Easy", "Mel Lisa And Mark", ["Mark And Lisa Split", "Marriage Breakdown"]],
    ["Which surname did Phil arrange for Louise to use instead of Fowler?", "Mitchell", ["Branning", "Beale", "Cotton"], "Medium", "Mel Lisa And Mark", ["Louise Surname Change", "Phil Paternity"]],

    // LITTLE MO'S TRIAL (10)
    ["Whom did Little Mo believe she had killed with an iron on New Year's Eve 2001?", "Trevor Morgan", ["Billy Mitchell", "Garry Hobbs", "Harry Slater"], "Easy", "Little Mo Trial", ["Trevor Survives", "2001 Cliffhanger Aftermath"]],
    ["What shocked the Slaters when they returned to find Trevor's body?", "He had disappeared", ["The house had been demolished", "The police had buried him", "He had left a written confession"], "Medium", "Little Mo Trial", ["Missing Trevor", "New Years Day 2002"]],
    ["Which crime was Little Mo charged with after striking Trevor?", "Attempted murder", ["Arson", "Kidnapping", "Robbery"], "Easy", "Little Mo Trial", ["Attempted Murder Charge", "Trevor Assault Case"]],
    ["What verdict did Little Mo receive at her trial?", "Guilty", ["Not guilty", "Case dismissed", "No verdict reached"], "Medium", "Little Mo Trial", ["Trial Verdict", "April 2002"]],
    ["In which month was Little Mo found guilty of attempted murder?", "April", ["January", "July", "December"], "Medium", "Little Mo Trial", ["April 2002 Trial", "Court Proceedings"]],
    ["Which family supported Little Mo during the attempted murder case?", "The Slaters", ["The di Marcos", "The Brannings", "The Evanses"], "Easy", "Little Mo Trial", ["Slater Family Support", "Court Case"]],
    ["What happened to Little Mo after the jury found her guilty?", "She was imprisoned", ["She moved to Spain", "She joined the police", "She took over the Queen Vic"], "Easy", "Little Mo Trial", ["Little Mo Prison", "Sentence"]],
    ["Which month did Little Mo return to Walford after her imprisonment?", "August", ["March", "May", "November"], "Medium", "Little Mo Trial", ["August 2002 Return", "Prison Release"]],
    ["Which relative of Little Mo was particularly determined to stop Trevor's hold over her?", "Charlie Slater", ["Harry Slater", "Anthony Trueman", "Ian Beale"], "Easy", "Little Mo Trial", ["Charlie Supports Mo", "Father Daughter"]],
    ["Which Mitchell supported Little Mo as their relationship grew during her ordeal?", "Billy Mitchell", ["Phil Mitchell", "Jamie Mitchell", "Grant Mitchell"], "Easy", "Little Mo Trial", ["Billy Supports Mo", "Growing Romance"]],

    // TREVOR'S FINAL HOUSE FIRE (10)
    ["Which abusive husband held Little Mo captive in the Slater house at Halloween?", "Trevor Morgan", ["Garry Hobbs", "Billy Mitchell", "Dan Sullivan"], "Easy", "Trevor House Fire", ["Trevor Hostage Crisis", "Halloween 2002"]],
    ["Which other vulnerable hostage was trapped with Little Mo?", "Baby Sean", ["Baby Jack", "Baby Louise", "Baby Chloe"], "Medium", "Trevor House Fire", ["Sean Andrews", "Baby Hostage"]],
    ["Who was Sean Andrews's father?", "Trevor Morgan", ["Billy Mitchell", "Garry Hobbs", "Phil Mitchell"], "Easy", "Trevor House Fire", ["Trevor Son", "Sean Andrews Parentage"]],
    ["Which woman was the mother of Trevor's baby Sean?", "Donna Andrews", ["Little Mo Morgan", "Kat Slater", "Lynne Hobbs"], "Medium", "Trevor House Fire", ["Donna Andrews", "Sean Mother"]],
    ["Which Albert Square address was the scene of Trevor’s final hostage crisis?", "23 Albert Square", ["25 Albert Square", "31 Albert Square", "45 Albert Square"], "Medium", "Trevor House Fire", ["Slater Home Address", "October 2002"]],
    ["Which firefighter rescued Little Mo and baby Sean from Trevor's burning house?", "Tom Banks", ["Phil Mitchell", "Mark Fowler", "Garry Hobbs"], "Easy", "Trevor House Fire", ["Tom Heroic Rescue", "Little Mo And Sean Saved"]],
    ["Which two characters died when the burning house exploded?", "Trevor Morgan and Tom Banks", ["Phil Mitchell and Steve Owen", "Jamie Mitchell and Martin Fowler", "Billy Mitchell and Garry Hobbs"], "Easy", "Trevor House Fire", ["Trevor And Tom Die", "November 2002 Explosion"]],
    ["Why did Tom Banks go back inside the burning house after rescuing Mo and Sean?", "To rescue Trevor", ["To collect money", "To find a pet", "To recover his coat"], "Medium", "Trevor House Fire", ["Tom Re Enters House", "Rescue Attempt"]],
    ["Which special episode format was used for the confrontation between Little Mo and Trevor on Halloween?", "A two-hander", ["A live broadcast", "A musical episode", "A silent episode"], "Medium", "Trevor House Fire", ["Little Mo Trevor Two Hander", "Halloween Episode"]],
    ["Which month did the explosion claim Trevor and Tom's lives?", "November", ["February", "June", "September"], "Medium", "Trevor House Fire", ["November 2002", "House Fire Deaths"]],

    // SHARON AND TOM (10)
    ["Which former Queen Vic landlady died off-screen in 2002?", "Angie Watts", ["Peggy Mitchell", "Pat Evans", "Rosa di Marco"], "Easy", "Sharon And Tom", ["Angie Death", "Watts Family"]],
    ["What illness caused Angie Watts's death?", "Cirrhosis of the liver", ["Lung cancer", "A brain tumour", "Pneumonia"], "Medium", "Sharon And Tom", ["Angie Liver Disease", "Alcohol Related Illness"]],
    ["Which daughter returned for Angie Watts's funeral?", "Sharon Watts", ["Vicki Fowler", "Melanie Owen", "Janine Butcher"], "Easy", "Sharon And Tom", ["Sharon Funeral Return", "April 2002"]],
    ["Beside which man did Angie wish to be buried?", "Den Watts", ["Frank Butcher", "Pete Beale", "Roy Evans"], "Medium", "Sharon And Tom", ["Den And Angie", "Burial Wish"]],
    ["Which childhood friend of Sharon reappeared at Angie's funeral?", "Tom Banks", ["Dan Sullivan", "Beppe di Marco", "Jamie Mitchell"], "Medium", "Sharon And Tom", ["Tom Returns", "Childhood Friendship"]],
    ["What was Tom Banks's occupation when he returned to Walford?", "Firefighter", ["Police officer", "Taxi driver", "Doctor"], "Easy", "Sharon And Tom", ["Tom Firefighter", "Occupation"]],
    ["Which woman was Tom Banks's ex-wife?", "Sadie Banks", ["Lisa Fowler", "Laura Beale", "Natalie Evans"], "Medium", "Sharon And Tom", ["Sadie Banks", "Tom Former Marriage"]],
    ["Which serious illness did Tom conceal from Sharon before finally telling her?", "A brain tumour", ["Heart disease", "Multiple sclerosis", "Kidney failure"], "Medium", "Sharon And Tom", ["Tom Brain Tumour", "Health Secret"]],
    ["Which woman proposed to Tom Banks shortly before his death?", "Sharon Watts", ["Peggy Mitchell", "Pat Evans", "Lisa Fowler"], "Easy", "Sharon And Tom", ["Sharon Tom Engagement", "October Proposal"]],
    ["Which actor portrayed firefighter Tom Banks?", "Colm Ó Maonlaí", ["Martin Kemp", "Craig Fairbrass", "Ricky Groves"], "Medium", "Sharon And Tom", ["Colm O Maonlai", "Tom Casting"]],

    // JAMIE AND SONIA (10)
    ["Which Mitchell relative was struck by Martin Fowler's car shortly before Christmas?", "Jamie Mitchell", ["Billy Mitchell", "Phil Mitchell", "Ben Mitchell"], "Easy", "Jamie And Sonia", ["Jamie Road Accident", "December 2002"]],
    ["Who was driving the vehicle that hit Jamie Mitchell?", "Martin Fowler", ["Robbie Jackson", "Phil Mitchell", "Ricky Butcher"], "Easy", "Jamie And Sonia", ["Martin Driving", "Fatal Collision"]],
    ["Which young Walford woman was Jamie hoping to marry?", "Sonia Jackson", ["Janine Butcher", "Zoe Slater", "Kelly Taylor"], "Easy", "Jamie And Sonia", ["Jamie Sonia Romance", "Engagement"]],
    ["Which day did Jamie Mitchell die in hospital?", "Christmas Day", ["Christmas Eve", "Boxing Day", "New Year's Day"], "Easy", "Jamie And Sonia", ["Christmas Day 2002", "Jamie Death"]],
    ["Which month saw Jamie's fatal road accident?", "December", ["March", "June", "September"], "Easy", "Jamie And Sonia", ["December 2002 Collision", "Car Accident Month"]],
    ["Which gift was Jamie carrying for Sonia when the accident happened?", "Flowers", ["A teddy bear", "A handbag", "A book"], "Medium", "Jamie And Sonia", ["Flowers For Sonia", "Accident Scene"]],
    ["Whose ring did Jamie intend to give to Sonia?", "Ethel Skinner's", ["Peggy Mitchell's", "Pat Evans's", "Angie Watts's"], "Medium", "Jamie And Sonia", ["Ethel Ring", "Engagement Gift"]],
    ["Who was by Jamie's side when he died at the hospital?", "Sonia Jackson", ["Janine Butcher", "Kat Slater", "Sharon Watts"], "Easy", "Jamie And Sonia", ["Sonia At Deathbed", "Hospital Farewell"]],
    ["Which Butcher woman told Sonia she had slept with Jamie earlier in the year?", "Janine Butcher", ["Pat Butcher", "Diane Butcher", "Bianca Butcher"], "Medium", "Jamie And Sonia", ["Janine Jamie Fling", "Sonia Jealousy"]],
    ["Which actor played Jamie Mitchell in his final Christmas storyline?", "Jack Ryder", ["James Alexandrou", "Joe Absolom", "Perry Fenwick"], "Easy", "Jamie And Sonia", ["Jack Ryder", "Jamie Actor"]],

    // BILLY AND LITTLE MO (10)
    ["Which Mitchell fell in love with Little Mo following her separation from Trevor?", "Billy Mitchell", ["Phil Mitchell", "Grant Mitchell", "Jamie Mitchell"], "Easy", "Billy And Little Mo", ["Billy Little Mo Relationship", "New Romance"]],
    ["What food did Billy use to spell out his marriage proposal to Little Mo?", "Alphabet spaghetti", ["Alphabet biscuits", "Chocolate buttons", "Jelly sweets"], "Medium", "Billy And Little Mo", ["Alphabet Spaghetti Proposal", "Marry Me Message"]],
    ["Which words did Billy spell out in food to propose to Little Mo?", "Marry me", ["I forgive you", "Come home", "Be my friend"], "Easy", "Billy And Little Mo", ["Marriage Proposal Words", "Romantic Gesture"]],
    ["From which event did Trevor abduct Little Mo before the house fire?", "Her engagement party", ["A birthday party", "A funeral", "A wedding reception"], "Medium", "Billy And Little Mo", ["Engagement Party Abduction", "Trevor Abduction"]],
    ["Which month did Billy and Little Mo become engaged?", "October", ["March", "June", "December"], "Medium", "Billy And Little Mo", ["October 2002 Engagement", "Billy Proposal Date"]],
    ["On which festive day did Billy and Little Mo marry?", "Christmas Day", ["Christmas Eve", "Boxing Day", "New Year's Eve"], "Easy", "Billy And Little Mo", ["Christmas 2002 Wedding", "Billy Mo Marriage"]],
    ["Which family name did Little Mo take after her Christmas wedding?", "Mitchell", ["Hobbs", "Evans", "Cotton"], "Easy", "Billy And Little Mo", ["Little Mo Mitchell", "Married Surname"]],
    ["Which actor portrayed Billy Mitchell during his marriage to Little Mo?", "Perry Fenwick", ["Steve McFadden", "Ross Kemp", "Ricky Groves"], "Easy", "Billy And Little Mo", ["Perry Fenwick", "Billy Casting"]],
    ["Which actress portrayed Little Mo during the 2002 Christmas wedding?", "Kacey Ainsworth", ["Jessie Wallace", "Elaine Lordan", "Michelle Ryan"], "Easy", "Billy And Little Mo", ["Kacey Ainsworth", "Little Mo Casting"]],
    ["Which former children's-home abuser did Billy confront in 2002?", "Ernie Johnson", ["Jack Dalton", "George Palmer", "Ritchie Stringer"], "Medium", "Billy And Little Mo", ["Ernie Johnson", "Billy Childhood Abuse"]],

    // ALFIE ARRIVES (10)
    ["Which future Queen Vic manager first appeared in Walford in November 2002?", "Alfie Moon", ["Minty Peterson", "Gus Smith", "Anthony Trueman"], "Easy", "Alfie Arrives", ["Alfie Debut", "November 2002"]],
    ["Which actor made his EastEnders debut as Alfie Moon?", "Shane Richie", ["Ricky Groves", "Cliff Parisi", "Mohammed George"], "Easy", "Alfie Arrives", ["Shane Richie", "Alfie Casting"]],
    ["Which pub did Alfie Moon take over as manager under a false name?", "The Queen Victoria", ["The Dagmar", "The Albert", "The Swan"], "Easy", "Alfie Arrives", ["Queen Vic Manager", "False Identity"]],
    ["Whose name did Alfie borrow to persuade Peggy he was the pub's new manager?", "Chris Wright", ["Tom Banks", "Rick Peterson", "Angel Hudson"], "Medium", "Alfie Arrives", ["Chris Wright Identity", "Alfie Con"]],
    ["Which Queen Vic landlady mistook Alfie for the manager sent by an agency?", "Peggy Mitchell", ["Sharon Watts", "Pat Evans", "Kat Slater"], "Easy", "Alfie Arrives", ["Peggy Hires Alfie", "Mistaken Identity"]],
    ["What offence saw Alfie thrown out of Walford East Underground station on his arrival?", "Fare evasion", ["Shoplifting", "Vandalism", "Public drunkenness"], "Medium", "Alfie Arrives", ["Alfie Tube Arrival", "Fare Evasion"]],
    ["Which younger brother joined Alfie in Walford?", "Spencer Moon", ["Danny Moon", "Jake Moon", "Michael Moon"], "Easy", "Alfie Arrives", ["Spencer Moon", "Alfie Brother"]],
    ["Which older relative moved in with Alfie and Spencer above the pub?", "Nana Moon", ["Mo Harris", "Peggy Mitchell", "Pauline Fowler"], "Easy", "Alfie Arrives", ["Nana Moon", "Moon Household"]],
    ["Which actor played Alfie's younger brother Spencer?", "Christopher Parker", ["Jack Ryder", "James Alexandrou", "Joe Absolom"], "Medium", "Alfie Arrives", ["Christopher Parker", "Spencer Casting"]],
    ["Which actress portrayed Nana Moon?", "Hilda Braid", ["June Brown", "Gretchen Franklin", "Barbara Windsor"], "Medium", "Alfie Arrives", ["Hilda Braid", "Nana Casting"]],

    // NEW FACES AND SMALLER STORIES (10)
    ["Which mechanic nicknamed Minty made his debut during Steve Owen's funeral?", "Rick Peterson", ["Gus Smith", "Paul Trueman", "Nathan Williams"], "Medium", "New Faces", ["Minty Real Name", "March 2002 Introduction"]],
    ["Which actor first portrayed Minty Peterson?", "Cliff Parisi", ["Perry Fenwick", "Ricky Groves", "Shane Richie"], "Medium", "New Faces", ["Cliff Parisi", "Minty Actor"]],
    ["Which new resident was played by Mohammed George in 2002?", "Gus Smith", ["Paul Trueman", "Spencer Moon", "Nathan Williams"], "Medium", "New Faces", ["Mohammed George", "Gus Arrival"]],
    ["Which gangster was married to Precious Hudson?", "Angel Hudson", ["Paul Trueman", "Anthony Trueman", "Steve Owen"], "Medium", "New Faces", ["Angel Hudson", "Precious Husband"]],
    ["Which Trueman brother fell for Precious Hudson despite her dangerous marriage?", "Paul Trueman", ["Anthony Trueman", "Patrick Trueman", "Eddie Trueman"], "Medium", "New Faces", ["Paul Precious Affair", "Trueman Romance"]],
    ["Which actor and musician played gangster Angel Hudson?", "Goldie", ["Dizzee Rascal", "Craig David", "So Solid Crew's Romeo"], "Medium", "New Faces", ["Goldie", "Angel Casting"]],
    ["Which policewoman began building a relationship with Phil Mitchell in 2002?", "Kate Morton", ["Jill Marsden", "Sharon Watts", "Lisa Fowler"], "Medium", "New Faces", ["Kate Morton Introduction", "Phil Kate Romance"]],
    ["Which actress portrayed undercover officer Kate Morton?", "Jill Halfpenny", ["Lucy Benjamin", "Tamzin Outhwaite", "Letitia Dean"], "Medium", "New Faces", ["Jill Halfpenny", "Kate Morton Casting"]],
    ["Which Slater daughter became involved with doctor Anthony Trueman during 2002?", "Zoe Slater", ["Lynne Slater", "Little Mo Morgan", "Belinda Peacock"], "Easy", "New Faces", ["Zoe Anthony Romance", "Trueman Slater Relationship"]],
    ["Which Slater woman had dated Anthony before he became involved with Zoe?", "Kat Slater", ["Mo Harris", "Lynne Slater", "Little Mo Morgan"], "Easy", "New Faces", ["Kat Anthony Previous Romance", "Family Love Triangle"]],

    // OTHER 2002 STORIES (10)
    ["Which Beale child was revealed as the writer of threatening anonymous letters?", "Steven Beale", ["Peter Beale", "Lucy Beale", "Martin Fowler"], "Medium", "Other 2002 Stories", ["Steven Poison Pen Letters", "Beale Family Trouble"]],
    ["Which man did Steven Beale discover was his biological father?", "Simon Wicks", ["Ian Beale", "David Wicks", "Phil Mitchell"], "Easy", "Other 2002 Stories", ["Steven Parentage", "Simon Wicks"]],
    ["Which country did Steven Beale leave for to meet his biological father?", "New Zealand", ["Australia", "Spain", "Canada"], "Medium", "Other 2002 Stories", ["Steven New Zealand Departure", "Simon Wicks Reunited"]],
    ["Which Beale child discovered Ian’s involvement with Janine Butcher, causing tension at home?", "Steven Beale", ["Peter Beale", "Lucy Beale", "Bobby Beale"], "Medium", "Other 2002 Stories", ["Ian Janine Secret", "Steven Beale"]],
    ["Which two characters began an affair on New Year’s Eve 2002?", "Natalie Evans and Ricky Butcher", ["Kat Slater and Alfie Moon", "Peggy Mitchell and Frank Butcher", "Sonia Jackson and Gus Smith"], "Medium", "Other 2002 Stories", ["Natalie Ricky Affair", "New Years Eve 2002"]],
    ["Which man was Natalie Evans still married to when her affair with Ricky began?", "Barry Evans", ["Roy Evans", "Ian Beale", "Garry Hobbs"], "Easy", "Other 2002 Stories", ["Natalie Married Barry", "Affair Begins"]],
    ["Which character did Zoe catch with Anthony Trueman at the end of December?", "Kat Slater", ["Lynne Hobbs", "Little Mo Mitchell", "Kelly Taylor"], "Easy", "Other 2002 Stories", ["Zoe Catches Kat Anthony", "December 2002"]],
    ["Which son of Roy Evans left Walford in May 2002?", "Nathan Williams", ["Barry Evans", "Ricky Butcher", "Steven Beale"], "Medium", "Other 2002 Stories", ["Nathan Williams Departure", "Roy Son"]],
    ["Which character returned to Walford in August with his son Liam?", "Ricky Butcher", ["Garry Hobbs", "Ian Beale", "Mark Fowler"], "Easy", "Other 2002 Stories", ["Ricky Butcher Return", "Liam Butcher"]],
    ["Which woman kissed Spencer Moon on New Year’s Eve 2002?", "Kelly Taylor", ["Zoe Slater", "Sonia Jackson", "Janine Butcher"], "Medium", "Other 2002 Stories", ["Kelly Spencer Kiss", "New Years Eve 2002"]]
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic, detailTags], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: "tv_" + String(7814 + index).padStart(4, "0"),
        category: "Television",
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set([
            "British Television",
            "Soaps",
            "EastEnders",
            "2002",
            topic,
            ...topicTags[topic],
            correctAnswer,
            ...detailTags
        ])],
        dailyEligible: true
    };
});

module.exports = questions;
