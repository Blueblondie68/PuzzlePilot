// quiz_pack239.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2001
// 110 questions: tv_7704 to tv_7813
// Detailed question and storyline tags included from creation.
// Do not update quiz_bank.js until the agreed end-of-session bank update.

const topicTags = {
    "Who Shot Phil": ["Who Shot Phil", "Phil Mitchell", "March 2001 Shooting", "Walford Whodunnit"],
    "Shooting Aftermath": ["Who Shot Phil Aftermath", "Lisa Shaw", "Dan Sullivan", "Phil Mitchell"],
    "Steve And Mel": ["Steve Owen", "Melanie Owen", "Wedding And Kidnapping", "E20 Nightclub"],
    "Kat And Zoe": ["Kat Slater", "Zoe Slater", "Mother Daughter Revelation", "October 2001"],
    "Slater Family Fallout": ["Slater Family", "Harry Slater", "Family Secrets", "Kat And Zoe Aftermath"],
    "Little Mo And Trevor": ["Little Mo Morgan", "Trevor Morgan", "Domestic Abuse Storyline", "New Years Eve 2001"],
    "Lisa And Louise": ["Lisa Shaw", "Louise Mitchell", "Phil Mitchell", "Paternity Secret"],
    "Sharon And The Vic": ["Sharon Watts", "The Queen Victoria", "Queen Vic Ownership", "May 2001 Return"],
    "Nick And Ashley": ["Nick Cotton", "Ashley Cotton", "Dot Cotton", "Mark Fowler Motorbike Plot"],
    "Trueman Family": ["Trueman Family", "Audrey Trueman", "Patrick Trueman", "2001 New Arrivals"],
    "Walford Weddings": ["Albert Square", "2001 Weddings And Engagements", "Relationships", "Walford Family Life"]
};

const facts = [
    // WHO SHOT PHIL? (10)
    ["Which Albert Square resident was shot outside his home in March 2001?", "Phil Mitchell", ["Steve Owen", "Grant Mitchell", "Dan Sullivan"], "Easy", "Who Shot Phil", ["Phil Shot", "Doorstep Attack"]],
    ["Which month did the famous 'Who Shot Phil?' mystery begin?", "March", ["January", "May", "October"], "Medium", "Who Shot Phil", ["March 2001", "Shooting Broadcast"]],
    ["Where was Phil Mitchell when his mystery attacker shot him?", "Outside his house", ["Inside the Queen Vic", "At the E20 nightclub", "At the Arches garage"], "Easy", "Who Shot Phil", ["Phil Doorstep", "Attack Location"]],
    ["Which character found Phil after the shooting and raised the alarm?", "Beppe di Marco", ["Ian Beale", "Mark Fowler", "Billy Mitchell"], "Medium", "Who Shot Phil", ["Beppe Finds Phil", "Aftermath Rescue"]],
    ["Which woman was eventually revealed as Phil's attacker?", "Lisa Shaw", ["Melanie Owen", "Sharon Watts", "Peggy Mitchell"], "Easy", "Who Shot Phil", ["Lisa Shooter Reveal", "April 2001"]],
    ["Which football competition had a semi-final kick-off delayed for the reveal of Phil’s shooter?", "The UEFA Cup", ["The FA Cup", "The League Cup", "The Champions League"], "Medium", "Who Shot Phil", ["UEFA Cup Semi Final", "Broadcast Scheduling"]],
    ["Which club owner's gun did Lisa take before shooting Phil?", "Steve Owen", ["Dan Sullivan", "Beppe di Marco", "Ian Beale"], "Medium", "Who Shot Phil", ["Steve Gun", "Stolen Weapon"]],
    ["Which television soap was widely compared with the 'Who Shot Phil?' mystery because of J. R. Ewing?", "Dallas", ["Dynasty", "Brookside", "Emmerdale"], "Medium", "Who Shot Phil", ["Dallas Comparison", "J R Ewing"]],
    ["Which rival had argued with Phil shortly before the shooting after learning of his affair with Mel?", "Ian Beale", ["Barry Evans", "Terry Raymond", "Paul Trueman"], "Medium", "Who Shot Phil", ["Ian Phil Clash", "Mel Affair"]],
    ["Which police detective led the investigation into Phil's shooting?", "Jill Marsden", ["Kate Morton", "Ameena Badawi", "Sandra di Marco"], "Medium", "Who Shot Phil", ["DI Jill Marsden", "Police Investigation"]],

    // SHOOTING AFTERMATH AND DAN SULLIVAN (10)
    ["Which former business partner did Phil falsely identify as his shooter?", "Dan Sullivan", ["Steve Owen", "Beppe di Marco", "Roy Evans"], "Easy", "Shooting Aftermath", ["Dan Framed", "False Accusation"]],
    ["What charge did Dan Sullivan face at his trial over the shooting?", "Attempted murder", ["Manslaughter", "Kidnapping", "Armed robbery"], "Medium", "Shooting Aftermath", ["Attempted Murder Charge", "Dan Trial"]],
    ["What verdict did Dan Sullivan receive at his trial for shooting Phil?", "Not guilty", ["Guilty of attempted murder", "Guilty of manslaughter", "Guilty of grievous bodily harm"], "Medium", "Shooting Aftermath", ["Dan Acquitted", "August Trial Verdict"]],
    ["Which month did Dan's trial over Phil's shooting conclude?", "August", ["March", "May", "November"], "Medium", "Shooting Aftermath", ["August 2001", "Trial Conclusion"]],
    ["Which gangster did Phil enlist to help frame Dan for the shooting?", "Ritchie Stringer", ["George Palmer", "Andy Hunter", "Jack Dalton"], "Hard", "Shooting Aftermath", ["Ritchie Stringer", "Framing Conspiracy"]],
    ["Which younger Mitchell did Dan threaten while demanding money from Phil?", "Jamie Mitchell", ["Ben Mitchell", "Billy Mitchell", "Courtney Mitchell"], "Medium", "Shooting Aftermath", ["Jamie Threatened", "Dan Extortion"]],
    ["Who was Lisa's boyfriend when she told him she was pregnant with Phil's child?", "Mark Fowler", ["Jamie Mitchell", "Steve Owen", "Dan Sullivan"], "Easy", "Shooting Aftermath", ["Mark Fowler", "Pregnancy Disclosure"]],
    ["Which member of the Fowler family was questioned as a possible suspect because of his relationship with Lisa?", "Mark Fowler", ["Martin Fowler", "Robbie Jackson", "Jim Branning"], "Easy", "Shooting Aftermath", ["Mark Shooting Suspect", "Phil Lisa Rivalry"]],
    ["Which nightclub owner was another prominent suspect in the shooting investigation?", "Steve Owen", ["Terry Raymond", "Roy Evans", "Barry Evans"], "Easy", "Shooting Aftermath", ["Steve Shooting Suspect", "Rivalry"]],
    ["Which character returned to Walford shortly before Phil was shot, increasing suspicion around him?", "Dan Sullivan", ["Grant Mitchell", "Nick Cotton", "Paul Trueman"], "Medium", "Shooting Aftermath", ["Dan Return February", "Suspect Arrival"]],

    // STEVE, MEL AND DAN (10)
    ["Which couple married on the same day that Phil was shot?", "Steve Owen and Melanie Healy", ["Ian Beale and Laura Dunn", "Garry Hobbs and Lynne Slater", "Mark Fowler and Lisa Shaw"], "Easy", "Steve And Mel", ["Steve Mel Wedding", "March Wedding"]],
    ["Which man did Steve learn Mel had slept with shortly before their 2001 wedding?", "Phil Mitchell", ["Dan Sullivan", "Ian Beale", "Mark Fowler"], "Easy", "Steve And Mel", ["Steve Discovers Affair", "Mel And Phil"]],
    ["What did Steve Owen’s mother Barbara do to his wedding cake after arguing with Mel?", "Stubbed out her cigarette on it", ["Threw it into the street", "Cut it before the ceremony", "Poured wine over it"], "Medium", "Steve And Mel", ["Barbara Owen", "Wedding Cake Insult"]],
    ["Which man kidnapped Mel Owen in the summer to get revenge on Phil and Steve?", "Dan Sullivan", ["Beppe di Marco", "Ian Beale", "Mark Fowler"], "Easy", "Steve And Mel", ["Mel Kidnapping", "Dan Revenge"]],
    ["How much ransom did Dan demand in total from Phil and Steve for Mel's release?", "£200,000", ["£20,000", "£50,000", "£500,000"], "Medium", "Steve And Mel", ["Two Hundred Thousand Pounds", "Kidnap Ransom"]],
    ["Which two enemies were forced to deal with Dan's ransom demand?", "Phil Mitchell and Steve Owen", ["Grant Mitchell and Ian Beale", "Mark Fowler and Terry Raymond", "Barry Evans and Roy Evans"], "Easy", "Steve And Mel", ["Phil And Steve", "Rescue Negotiations"]],
    ["Which of the two men did Dan insist should personally bring the ransom money?", "Phil Mitchell", ["Steve Owen", "Ian Beale", "Jamie Mitchell"], "Medium", "Steve And Mel", ["Phil Ransom Exchange", "Dan Demand"]],
    ["What did Dan handcuff Phil to before escaping with the ransom money?", "A radiator", ["A car steering wheel", "A bed frame", "A park railing"], "Medium", "Steve And Mel", ["Phil Handcuffed", "Dan Escape"]],
    ["Which nightclub did Mel set alight following her ordeal with Dan?", "E20", ["Angie's Den", "The Dagmar", "The Queen Victoria"], "Easy", "Steve And Mel", ["E20 Fire", "Mel Revenge"]],
    ["What happened to Steve and Mel's marriage after the kidnapping and nightclub fire?", "Mel left Steve", ["They renewed their vows", "They adopted a child", "They moved to Spain together"], "Easy", "Steve And Mel", ["Marriage Breakdown", "Mel Leaves Walford"]],

    // KAT AND ZOE REVELATION (10)
    ["Which Slater revealed that she was actually Zoe's mother?", "Kat Slater", ["Lynne Slater", "Little Mo Morgan", "Mo Harris"], "Easy", "Kat And Zoe", ["Kat Mother", "Zoe Parentage"]],
    ["Before the revelation, what did Zoe believe Kat was to her?", "Her older sister", ["Her aunt", "Her cousin", "Her stepmother"], "Easy", "Kat And Zoe", ["Raised As Sisters", "Hidden Parenthood"]],
    ["Which month saw the famous Kat and Zoe mother-daughter revelation?", "October", ["February", "July", "December"], "Medium", "Kat And Zoe", ["October Revelation", "2001 Storyline"]],
    ["Which country did Zoe plan to move to with Uncle Harry, prompting Kat's objection?", "Spain", ["France", "Australia", "Ireland"], "Easy", "Kat And Zoe", ["Zoe Spain Plan", "Harry Slater"]],
    ["Who was Zoe planning to go abroad with before Kat intervened?", "Harry Slater", ["Charlie Slater", "Garry Hobbs", "Trevor Morgan"], "Easy", "Kat And Zoe", ["Uncle Harry", "Zoe Departure Plan"]],
    ["Where did Kat and Zoe have their famous confrontation about Zoe’s parentage?", "In the street", ["In the café", "Inside the Queen Vic", "At the hospital"], "Easy", "Kat And Zoe", ["Street Confrontation", "Revelation Location"]],
    ["What brief reply did Kat give when Zoe insisted she was not her mother?", "Yes I am", ["Ask your father", "You will see", "Go and ask Mo"], "Easy", "Kat And Zoe", ["Yes I Am", "Revelation Reply"]],
    ["Which EastEnders writer scripted the 2001 Kat and Zoe revelation?", "Tony Jordan", ["Simon Ashdown", "Rob Gittins", "Christopher Reason"], "Hard", "Kat And Zoe", ["Tony Jordan", "Episode Writer"]],
    ["What was the format of the follow-up episode focusing entirely on Kat and Zoe's conversation?", "A two-hander", ["A live episode", "A musical episode", "A silent episode"], "Medium", "Kat And Zoe", ["Two Hander Episode", "Kat Zoe Dialogue"]],
    ["What did Zoe do shortly after learning the full truth about her parentage?", "She ran away from Walford", ["She married Garry Hobbs", "She became landlady of the Vic", "She joined the police"], "Easy", "Kat And Zoe", ["Zoe Runs Away", "Revelation Aftermath"]],

    // SLATER FAMILY FALLOUT (10)
    ["Which Slater relative was revealed to be Zoe's biological father?", "Harry Slater", ["Charlie Slater", "Garry Hobbs", "Trevor Morgan"], "Easy", "Slater Family Fallout", ["Harry Biological Father", "Zoe Parentage"]],
    ["How was Harry Slater related to Kat?", "He was her uncle", ["He was her brother", "He was her cousin", "He was her stepfather"], "Easy", "Slater Family Fallout", ["Harry Kat Uncle", "Family Relationship"]],
    ["Which actor portrayed Harry Slater during the family secret storyline?", "Michael Elphick", ["Derek Martin", "John Bardon", "Ricky Groves"], "Medium", "Slater Family Fallout", ["Michael Elphick", "Harry Casting"]],
    ["How old was Kat when Harry sexually assaulted her and she became pregnant?", "13", ["16", "18", "21"], "Medium", "Slater Family Fallout", ["Kat Childhood Abuse", "Thirteen Years Old"]],
    ["Which Slater father assaulted Harry after learning what he had done to Kat?", "Charlie Slater", ["Jim Branning", "Garry Hobbs", "Billy Mitchell"], "Easy", "Slater Family Fallout", ["Charlie Confronts Harry", "Harry Exposed"]],
    ["Which relative had raised Zoe as his daughter before discovering her true parentage?", "Charlie Slater", ["Harry Slater", "Jim Branning", "Trevor Morgan"], "Medium", "Slater Family Fallout", ["Charlie Raised Zoe", "Slater Family Secret"]],
    ["Which character was dating Harry before the truth about his abuse emerged?", "Peggy Mitchell", ["Dot Cotton", "Pat Evans", "Pauline Fowler"], "Medium", "Slater Family Fallout", ["Peggy Harry Romance", "Harry Exposed"]],
    ["What did Charlie demand that Harry do once the family learned the truth?", "Leave Walford", ["Take over the Vic", "Marry Peggy immediately", "Move into the Slater home"], "Easy", "Slater Family Fallout", ["Harry Ordered Away", "Family Confrontation"]],
    ["Who discovered Kat after she attempted to take her own life?", "Zoe Slater", ["Peggy Mitchell", "Laura Dunn", "Lisa Shaw"], "Medium", "Slater Family Fallout", ["Zoe Finds Kat", "Kat Hospitalised"]],
    ["Which Slater sister was contacted by Zoe while she was away from Walford?", "Little Mo", ["Lynne", "Belinda", "Kat"], "Medium", "Slater Family Fallout", ["Little Mo Contact", "Zoe Runaway"]],

    // LITTLE MO AND TREVOR (10)
    ["Which character was Little Mo's abusive husband in the 2001 storyline?", "Trevor Morgan", ["Garry Hobbs", "Billy Mitchell", "Beppe di Marco"], "Easy", "Little Mo And Trevor", ["Trevor Husband", "Domestic Abuse"]],
    ["Which Slater sister was particularly furious about Trevor’s treatment of Little Mo?", "Kat Slater", ["Zoe Slater", "Lynne Slater", "Belinda Slater"], "Medium", "Little Mo And Trevor", ["Kat Confronts Trevor", "Sister Protects Mo"]],
    ["Which object did Trevor use to burn Little Mo's hand?", "An iron", ["A kettle", "A frying pan", "A cigarette lighter"], "Medium", "Little Mo And Trevor", ["Iron Burn", "October Abuse"]],
    ["Which member of Little Mo's family confronted Trevor in the Queen Vic over her burnt hand?", "Charlie Slater", ["Harry Slater", "Garry Hobbs", "Jim Branning"], "Easy", "Little Mo And Trevor", ["Charlie Confronts Trevor", "Queen Vic Dispute"]],
    ["What Slater family secret did Trevor publicly expose in the Queen Vic?", "Kat was Zoe's mother", ["Zoe was Charlie's wife", "Lynne had a secret child", "Mo Harris had inherited the pub"], "Medium", "Little Mo And Trevor", ["Trevor Reveals Secret", "Kat Zoe Parentage"]],
    ["Which celebration was approaching when Trevor assaulted Little Mo again in December?", "Lynne and Garry's wedding", ["Dot and Jim's wedding", "Ian and Laura's wedding", "Peggy and Frank's wedding"], "Medium", "Little Mo And Trevor", ["December Wedding Preparations", "Trevor Violence"]],
    ["During Christmas dinner, how did Trevor humiliate Little Mo?", "He pushed her face into her dinner", ["He cut off her hair", "He locked her in the cellar", "He destroyed her wedding dress"], "Medium", "Little Mo And Trevor", ["Christmas Dinner Abuse", "Trevor Humiliation"]],
    ["Which discovery about Little Mo's medication angered Trevor at Christmas?", "She was taking contraceptive pills", ["She was taking antibiotics", "She was taking sleeping tablets", "She was taking painkillers"], "Medium", "Little Mo And Trevor", ["Contraceptive Pills", "Christmas Abuse"]],
    ["What did Little Mo strike Trevor with in self-defence on New Year's Eve?", "An iron", ["A frying pan", "A candlestick", "A fireplace poker"], "Easy", "Little Mo And Trevor", ["Iron Attack", "31 December 2001"]],
    ["What did Little Mo initially believe after striking Trevor on New Year's Eve?", "That she had killed him", ["That he had escaped abroad", "That he had called the police", "That he was going to marry Kat"], "Medium", "Little Mo And Trevor", ["Trevor Feared Dead", "New Years Eve Cliffhanger"]],

    // LISA, LOUISE AND MARK (10)
    ["Which woman gave birth to Louise in November 2001?", "Lisa Shaw", ["Melanie Owen", "Natalie Evans", "Laura Beale"], "Easy", "Lisa And Louise", ["Louise Birth", "Lisa Mother"]],
    ["Which Mitchell was Louise's biological father?", "Phil Mitchell", ["Grant Mitchell", "Jamie Mitchell", "Billy Mitchell"], "Easy", "Lisa And Louise", ["Phil Biological Father", "Paternity"]],
    ["Which man agreed to bring up Lisa's baby as if he were the father?", "Mark Fowler", ["Steve Owen", "Ian Beale", "Dan Sullivan"], "Easy", "Lisa And Louise", ["Mark As Father", "Paternity Cover"]],
    ["Who unexpectedly helped Lisa when she went into labour?", "Phil Mitchell", ["Steve Owen", "Barry Evans", "Terry Raymond"], "Medium", "Lisa And Louise", ["Phil Helps Birth", "November Labour"]],
    ["Which month was Louise Mitchell born?", "November", ["February", "June", "September"], "Medium", "Lisa And Louise", ["November 2001", "Louise Birth Date"]],
    ["Which former Queen Vic landlady became Louise’s paternal grandmother?", "Peggy Mitchell", ["Angie Watts", "Pat Evans", "Rosa di Marco"], "Easy", "Lisa And Louise", ["Peggy Grandmother", "Louise Family"]],
    ["Which former Queen Vic landlady told Phil the truth about Louise's father at Christmas?", "Sharon Watts", ["Peggy Mitchell", "Pat Evans", "Kat Slater"], "Medium", "Lisa And Louise", ["Sharon Reveals Paternity", "Christmas Secret"]],
    ["Which baby became the centre of conflict between Lisa, Mark and Phil at the end of the year?", "Louise", ["Chloe", "Courtney", "Lucy"], "Easy", "Lisa And Louise", ["Baby Louise", "Custody Dispute"]],
    ["What did Phil want after finding out he was Louise's father?", "A role in her life", ["To send her to Spain", "To place her for adoption", "To give her to Peggy permanently"], "Easy", "Lisa And Louise", ["Phil Parental Rights", "Louise Access"]],
    ["Which Fowler had begun a relationship with Lisa after her split from Phil?", "Mark Fowler", ["Martin Fowler", "Arthur Fowler", "Robbie Jackson"], "Easy", "Lisa And Louise", ["Mark Lisa Relationship", "New Partnership"]],

    // SHARON RETURNS AND THE QUEEN VIC (10)
    ["Which former Walford resident returned in May as the Queen Vic's new owner?", "Sharon Watts", ["Angie Watts", "Cindy Beale", "Michelle Fowler"], "Easy", "Sharon And The Vic", ["Sharon Return", "New Pub Owner"]],
    ["Who was horrified to discover that Sharon had bought the Queen Vic?", "Peggy Mitchell", ["Dot Cotton", "Pat Evans", "Pauline Fowler"], "Easy", "Sharon And The Vic", ["Peggy Loses Vic", "Sharon Surprise"]],
    ["Which month did Sharon return to Walford in 2001?", "May", ["January", "August", "December"], "Medium", "Sharon And The Vic", ["May 2001", "Sharon Return Date"]],
    ["Which nightclub owner originally co-owned the Queen Vic with Sharon?", "Steve Owen", ["Dan Sullivan", "Ian Beale", "Terry Raymond"], "Medium", "Sharon And The Vic", ["Steve Pub Partner", "Joint Ownership"]],
    ["From which country did Sharon return to Walford in 2001?", "The United States", ["Australia", "South Africa", "Spain"], "Medium", "Sharon And The Vic", ["Sharon Abroad", "Return From America"]],
    ["Which Mitchell brother had previously been married to Sharon?", "Grant Mitchell", ["Phil Mitchell", "Billy Mitchell", "Jamie Mitchell"], "Easy", "Sharon And The Vic", ["Sharon Grant Marriage", "Sharongate History"]],
    ["Which Mitchell did Sharon renew her romance with after returning?", "Phil Mitchell", ["Grant Mitchell", "Billy Mitchell", "Jamie Mitchell"], "Easy", "Sharon And The Vic", ["Phil Sharon Reunion", "Renewed Romance"]],
    ["Which actor played Sharon Watts during her return?", "Letitia Dean", ["Tamzin Outhwaite", "Lucy Benjamin", "Patsy Palmer"], "Easy", "Sharon And The Vic", ["Letitia Dean", "Sharon Casting"]],
    ["Which former resident was Sharon's adoptive father?", "Den Watts", ["Frank Butcher", "Roy Evans", "Pete Beale"], "Easy", "Sharon And The Vic", ["Den Watts", "Sharon Family Background"]],
    ["Who bought Steve Owen's share of the Queen Vic after Sharon's return?", "Phil Mitchell", ["Ian Beale", "Garry Hobbs", "Mark Fowler"], "Medium", "Sharon And The Vic", ["Steve Pub Share", "Phil Co Ownership"]],

    // NICK AND ASHLEY COTTON (10)
    ["Which criminal son of Dot Cotton sabotaged Mark Fowler's motorbike?", "Nick Cotton", ["Charlie Cotton", "Ashley Cotton", "Andrew Cotton"], "Easy", "Nick And Ashley", ["Nick Sabotage", "Mark Motorbike"]],
    ["Whom did Nick Cotton intend to harm by tampering with the motorbike?", "Mark Fowler", ["Martin Fowler", "Jamie Mitchell", "Phil Mitchell"], "Easy", "Nick And Ashley", ["Mark Intended Victim", "Revenge Plot"]],
    ["Who was killed after taking the sabotaged motorbike instead?", "Ashley Cotton", ["Mark Fowler", "Nick Cotton", "Jamie Mitchell"], "Easy", "Nick And Ashley", ["Ashley Dies", "Wrong Victim"]],
    ["What was Ashley Cotton's relationship to Nick Cotton?", "His son", ["His brother", "His nephew", "His cousin"], "Easy", "Nick And Ashley", ["Nick Ashley Father Son", "Cotton Family"]],
    ["Which Walford business did Ashley crash into on the motorbike?", "The launderette", ["The café", "The Queen Vic", "The chip shop"], "Medium", "Nick And Ashley", ["Ashley Bike Crash", "Launderette Crash"]],
    ["Which month did Ashley Cotton die in the motorbike crash?", "June", ["February", "September", "December"], "Medium", "Nick And Ashley", ["June 2001", "Ashley Death Date"]],
    ["Which resident overheard Nick admit he had tampered with the motorbike?", "Dot Cotton", ["Pauline Fowler", "Pat Evans", "Peggy Mitchell"], "Easy", "Nick And Ashley", ["Dot Hears Confession", "Nick Exposed"]],
    ["What did Dot do when she learned Nick's actions had caused Ashley's death?", "Disowned Nick", ["Bought him a house", "Asked him to run the launderette", "Sent him on holiday"], "Medium", "Nick And Ashley", ["Dot Disowns Nick", "Family Breakdown"]],
    ["Which Fowler lured Nick to a railway bridge on New Year's Day in revenge for Martin's drug ordeal?", "Mark Fowler", ["Ian Beale", "Martin Fowler", "Arthur Fowler"], "Medium", "Nick And Ashley", ["Mark Railway Bridge", "New Year 2001"]],
    ["Which actor played Ashley Cotton in the fatal crash storyline?", "Frankie Fitzgerald", ["Jack Ryder", "James Alexandrou", "Joe Absolom"], "Medium", "Nick And Ashley", ["Frankie Fitzgerald", "Ashley Casting"]],

    // THE TRUEMAN FAMILY (10)
    ["Which Trueman brother arrived in Walford in April 2001?", "Paul Trueman", ["Anthony Trueman", "Patrick Trueman", "Eddie Trueman"], "Easy", "Trueman Family", ["Paul Arrival", "April Newcomer"]],
    ["Which actor played Paul Trueman?", "Gary Beadle", ["Nicholas Bailey", "Rudolph Walker", "Derek Martin"], "Medium", "Trueman Family", ["Gary Beadle", "Paul Casting"]],
    ["Which Trueman brother had actually been driving in the accident for which Paul took the blame?", "Anthony Trueman", ["Patrick Trueman", "Eddie Trueman", "Paul Trueman"], "Medium", "Trueman Family", ["Anthony Driver", "Old Car Accident"]],
    ["Who was the mother of Anthony and Paul Trueman?", "Audrey Trueman", ["Yolande Trueman", "Denise Fox", "Mo Harris"], "Easy", "Trueman Family", ["Audrey Mother", "Family Relationship"]],
    ["What struck Audrey Trueman before the injury that led to her death?", "Falling building debris", ["A speeding bicycle", "A falling tree branch", "A thrown bottle"], "Medium", "Trueman Family", ["Audrey Injury", "Building Work"]],
    ["Which month did Audrey Trueman die?", "September", ["April", "June", "December"], "Medium", "Trueman Family", ["Audrey Death", "September 2001"]],
    ["Which long-absent Trueman family member appeared at Audrey's funeral?", "Patrick Trueman", ["Eddie Trueman", "Isaac Baptiste", "Anthony Trueman"], "Easy", "Trueman Family", ["Patrick Arrival", "Audrey Funeral"]],
    ["Which actor played Patrick Trueman on his 2001 debut?", "Rudolph Walker", ["Gary Beadle", "Nicholas Bailey", "Don Gilet"], "Easy", "Trueman Family", ["Rudolph Walker", "Patrick Casting"]],
    ["What type of accommodation business did Audrey Trueman run in Walford?", "A bed and breakfast", ["A hotel", "A hostel", "A boarding school"], "Medium", "Trueman Family", ["Audrey Bed And Breakfast", "Trueman Family Business"]],
    ["Which Trueman son inherited Audrey's estate despite her difficult relationship with him?", "Paul Trueman", ["Anthony Trueman", "Patrick Trueman", "Eddie Trueman"], "Medium", "Trueman Family", ["Audrey Will", "Paul Inheritance"]],

    // 2001 WEDDINGS AND OTHER WALFORD MILESTONES (10)
    ["Which woman became Ian Beale’s wife in 2001?", "Laura Dunn", ["Melanie Healy", "Lisa Shaw", "Natalie Price"], "Easy", "Walford Weddings", ["Ian Laura Wedding", "Second Marriage"]],
    ["In which month did Ian and Laura marry in 2001?", "May", ["February", "August", "November"], "Medium", "Walford Weddings", ["May Wedding", "Ian Laura Marriage Date"]],
    ["Which Slater daughter married Garry Hobbs in December?", "Lynne Slater", ["Kat Slater", "Zoe Slater", "Little Mo Morgan"], "Easy", "Walford Weddings", ["Lynne Garry Wedding", "December Marriage"]],
    ["Which di Marco tried to stop Lynne and Garry's wedding?", "Beppe di Marco", ["Gianni di Marco", "Joe di Marco", "Bruno di Marco"], "Medium", "Walford Weddings", ["Beppe Interrupts Wedding", "Lynne Affair"]],
    ["Who proposed to Dot Cotton on the London Eye just before Christmas?", "Jim Branning", ["Nick Cotton", "Terry Raymond", "Roy Evans"], "Easy", "Walford Weddings", ["Jim Proposal", "London Eye"]],
    ["On which London attraction did Jim propose to Dot?", "The London Eye", ["Tower Bridge", "The Millennium Dome", "HMS Belfast"], "Easy", "Walford Weddings", ["London Eye Proposal", "Dot Jim Engagement"]],
    ["Which month did Jim propose marriage to Dot?", "December", ["April", "July", "September"], "Medium", "Walford Weddings", ["December 2001 Proposal", "Christmas Engagement"]],
    ["Which Evans family member decided against having an abortion in July?", "Natalie Evans", ["Pat Evans", "Melanie Owen", "Laura Beale"], "Medium", "Walford Weddings", ["Natalie Pregnancy", "July Decision"]],
    ["Who was Natalie Evans married to when she decided to continue her pregnancy?", "Barry Evans", ["Roy Evans", "Terry Raymond", "Ian Beale"], "Easy", "Walford Weddings", ["Barry Natalie", "Expecting Baby"]],
    ["Which couple reconciled in February after the fallout from Pat's affair with Frank?", "Pat and Roy Evans", ["Peggy and Frank Butcher", "Phil and Kathy Mitchell", "Terry and Irene Raymond"], "Medium", "Walford Weddings", ["Pat Roy Reconciliation", "February 2001"]]
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic, detailTags], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: "tv_" + String(7704 + index).padStart(4, "0"),
        category: "Television",
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set([
            "British Television", "Soaps", "EastEnders", "2001",
            topic, ...topicTags[topic], correctAnswer, ...detailTags
        ])],
        dailyEligible: true
    };
});

module.exports = questions;
