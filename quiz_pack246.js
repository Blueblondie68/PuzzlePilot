// quiz_pack246.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2008
// 110 questions: tv_8474 to tv_8583
// Comprehensive per-question tagging from creation.
// Do not update quiz_bank.js until the agreed bank connection.

const topicTags = {
    "Bianca Family Return": ["Bianca Jackson", "Ricky Butcher", "Jackson Butcher Family", "April 2008 Return"],
    "Whitney And Tony": ["Whitney Dean", "Tony King", "Bianca Jackson", "Child Sexual Abuse Storyline", "December 2008 Exposure"],
    "Sean Roxy And Amy": ["Sean Slater", "Roxy Mitchell", "Jack Branning", "Amy Mitchell", "Paternity And Christmas 2008"],
    "Archie And Danielle": ["Archie Mitchell", "Ronnie Mitchell", "Danielle Jones", "Adoption Secret", "2008 Mitchell Family"],
    "Tanya And Max": ["Tanya Branning", "Max Branning", "Sean Slater", "Lauren Branning", "Burial And Hit And Run"],
    "May Final Revenge": ["May Wright", "Dawn Swann", "Summer Swann", "Mickey Miller", "June 2008 Explosion"],
    "Jase Death": ["Jase Dyer", "Jay Brown", "Billy Mitchell", "Dawn Swann", "August 2008 Gangland Murder"],
    "Christian And Steven": ["Christian Clarke", "Jane Beale", "Steven Beale", "Ian Beale", "2008 Beale Family"],
    "Masoods And Foxes": ["Masood Ahmed", "Zainab Masood", "Shabnam Masood", "Lucas Johnson", "2008 Family And Business"],
    "Frank And Janine": ["Frank Butcher", "Janine Butcher", "Pat Evans", "Ricky Butcher", "Funeral And December 2008 Return"],
    "Other Walford Stories": ["Heather Trott", "Minty Peterson", "Suzy Branning", "Wellard", "2008 Walford Residents"]
};

const facts = [
    // BIANCA BRINGS HER FAMILY BACK TO WALFORD (10)
    ["Which familiar Jackson family member returned to Albert Square with four children?", "Bianca Jackson", ["Carol Jackson", "Sonia Fowler", "Diane Butcher"], "Easy", "Bianca Family Return", ["Bianca Homecoming", "Four Children"]],
    ["Which actress resumed playing Bianca Jackson in 2008?", "Patsy Palmer", ["Natalie Cassidy", "Martine McCutcheon", "Diane Parish"], "Easy", "Bianca Family Return", ["Patsy Palmer", "Actress Return"]],
    ["Which former husband did Bianca encounter again on her return?", "Ricky Butcher", ["Ian Beale", "Martin Fowler", "Kevin Wicks"], "Easy", "Bianca Family Return", ["Ricky Bianca Reunited", "Former Marriage"]],
    ["Which teenage girl was Bianca's adopted daughter?", "Whitney Dean", ["Lauren Branning", "Demi Miller", "Ruby Allen"], "Easy", "Bianca Family Return", ["Whitney Adopted Daughter", "Bianca Children"]],
    ["Which actress was introduced as Whitney Dean?", "Shona McGarty", ["Maisie Smith", "Lacey Turner", "Madeline Duggan"], "Medium", "Bianca Family Return", ["Shona McGarty", "Whitney Casting"]],
    ["Which actress began playing Bianca's daughter Tiffany in 2008?", "Maisie Smith", ["Shona McGarty", "Lorna Fitzgerald", "Belinda Owusu"], "Medium", "Bianca Family Return", ["Maisie Smith", "Tiffany Dean Casting"]],
    ["What was the name of Bianca's youngest son on her return?", "Morgan", ["Oscar", "William", "Freddie"], "Easy", "Bianca Family Return", ["Morgan Jackson", "Youngest Son"]],
    ["Which of Bianca's sons was Ricky Butcher's biological child?", "Liam", ["Morgan", "Jay", "Bobby"], "Easy", "Bianca Family Return", ["Liam Butcher", "Ricky Son"]],
    ["Which great-grandmother gave Bianca and her children a home in Walford?", "Pat Evans", ["Dot Branning", "Peggy Mitchell", "Mo Harris"], "Easy", "Bianca Family Return", ["Pat Provides Home", "Family Lodgings"]],
    ["Why were Bianca’s children temporarily taken into care before the family settled in Walford?", "Bianca assaulted a police officer", ["Ricky took them abroad", "Their school was closed", "Pat refused to let them stay"], "Medium", "Bianca Family Return", ["Police Officer Assault", "Children In Care"]],

    // WHITNEY AND TONY'S ABUSE STORYLINE (10)
    ["Which man returned from prison and resumed his relationship with Bianca?", "Tony King", ["Rob Minter", "Jase Dyer", "Lucas Johnson"], "Easy", "Whitney And Tony", ["Tony September Arrival", "Released From Prison"]],
    ["Which actor played Tony King?", "Chris Coghill", ["Don Gilet", "Stuart Laing", "Robert Kazinsky"], "Medium", "Whitney And Tony", ["Chris Coghill", "Tony Casting"]],
    ["Which of Bianca's children was Tony secretly abusing?", "Whitney Dean", ["Tiffany Dean", "Liam Butcher", "Morgan Jackson"], "Easy", "Whitney And Tony", ["Whitney Victim", "Abuse Exposed"]],
    ["How old had Whitney been when Tony first began abusing her?", "Twelve", ["Sixteen", "Fourteen", "Eighteen"], "Medium", "Whitney And Tony", ["Abuse Began At Twelve", "Storyline History"]],
    ["Which Branning teenager did Tony begin grooming while manipulating Whitney?", "Lauren Branning", ["Abi Branning", "Stacey Slater", "Lucy Beale"], "Easy", "Whitney And Tony", ["Tony Targets Lauren", "Grooming"]],
    ["Which birthday was Whitney celebrating when she planned to run away with Tony?", "Her sixteenth", ["Her eighteenth", "Her fourteenth", "Her twenty-first"], "Medium", "Whitney And Tony", ["Whitney Sixteenth Birthday", "December Departure Plan"]],
    ["Who first became suspicious of Tony's treatment of Whitney after seeing them together?", "Ricky Butcher", ["Ian Beale", "Phil Mitchell", "Bradley Branning"], "Medium", "Whitney And Tony", ["Ricky Suspicions", "November Discovery"]],
    ["Who finally told Bianca that she and Tony were secretly involved?", "Whitney Dean", ["Lauren Branning", "Tiffany Dean", "Pat Evans"], "Easy", "Whitney And Tony", ["Whitney Confession To Bianca", "Truth Comes Out"]],
    ["What did Bianca do when she discovered Tony's abuse of Whitney?", "Called the police", ["Helped him leave the country", "Paid him to stay away", "Sold the family home"], "Easy", "Whitney And Tony", ["Bianca Reports Tony", "Police Arrest"]],
    ["What did Tony return to Bianca’s house to collect just before his arrest?", "His passport and plane ticket", ["His car keys and toolbox", "A bag of stolen jewellery", "His wedding suit"], "Medium", "Whitney And Tony", ["Tony Flight Attempt", "Passport And Ticket"]],

    // SEAN AND ROXY: A WEDDING AND A PATERNITY SECRET (10)
    ["Which Slater married Roxy Mitchell during the summer?", "Sean Slater", ["Bradley Branning", "Charlie Slater", "Garry Hobbs"], "Easy", "Sean Roxy And Amy", ["Sean Roxy Wedding", "August Marriage"]],
    ["What surname did Roxy take after marrying Sean?", "Slater", ["Branning", "Mitchell-Smith", "Fowler"], "Medium", "Sean Roxy And Amy", ["Roxy Slater Married Name", "August Wedding"]],
    ["Which man was secretly the biological father of Roxy's unborn baby?", "Jack Branning", ["Sean Slater", "Phil Mitchell", "Christian Clarke"], "Easy", "Sean Roxy And Amy", ["Jack Paternity", "Roxy Secret"]],
    ["What first name did Roxy give her baby daughter?", "Amy", ["Janet", "Summer", "Danielle"], "Easy", "Sean Roxy And Amy", ["Amy Birth Name", "Roxy Daughter"]],
    ["After whose lost daughter did Roxy name baby Amy?", "Ronnie’s", ["Peggy’s", "Tanya’s", "Bianca’s"], "Medium", "Sean Roxy And Amy", ["Baby Named For Ronnie Daughter", "Family Memorial"]],
    ["What complication brought Roxy to hospital before Amy was born?", "Premature labour", ["A broken leg", "Food poisoning", "A car accident"], "Easy", "Sean Roxy And Amy", ["Roxy Early Labour", "Hospital Emergency"]],
    ["What test established the identity of Amy's biological father?", "A DNA paternity test", ["An ultrasound scan", "A blood-pressure test", "A hospital hearing test"], "Easy", "Sean Roxy And Amy", ["Paternity DNA", "Jack Sean Rivalry"]],
    ["Which friend helped Roxy gather samples for the paternity test?", "Christian Clarke", ["Ian Beale", "Alfie Moon", "Garry Hobbs"], "Medium", "Sean Roxy And Amy", ["Christian Helps Roxy", "DNA Samples"]],
    ["Who arranged for Sean to receive Amy's true paternity results at Christmas?", "Suzy Branning", ["Peggy Mitchell", "Tanya Branning", "Stacey Slater"], "Medium", "Sean Roxy And Amy", ["Suzy Reveals Paternity", "Christmas Sabotage"]],
    ["What festive item was used to deliver the paternity result to Sean?", "A Christmas cracker", ["A Christmas card", "A wrapped photograph", "An advent calendar"], "Medium", "Sean Roxy And Amy", ["Christmas Cracker Reveal", "Fatherhood Shock"]],

    // ARCHIE'S ARRIVAL AND RONNIE'S UNKNOWN DAUGHTER (10)
    ["Which new Mitchell patriarch arrived in Walford during the summer?", "Archie Mitchell", ["Eric Mitchell", "Billy Mitchell", "Jack Branning"], "Easy", "Archie And Danielle", ["Archie Debut", "July 2008"]],
    ["Which actor first portrayed Archie Mitchell?", "Larry Lamb", ["Nicholas Ball", "Billy Murray", "John Bardon"], "Easy", "Archie And Danielle", ["Larry Lamb", "Archie Actor"]],
    ["Which two sisters were Archie Mitchell's daughters?", "Ronnie and Roxy", ["Peggy and Sal", "Lauren and Abi", "Chelsea and Libby"], "Easy", "Archie And Danielle", ["Archie Family", "Mitchell Daughters"]],
    ["At which Dorset seaside town did Archie appear during a family visit?", "Weymouth", ["Bournemouth", "Poole", "Swanage"], "Medium", "Archie And Danielle", ["Weymouth Location", "Mitchell Week"]],
    ["Which Queen Vic landlady became romantically involved with Archie?", "Peggy Mitchell", ["Pat Evans", "Shirley Carter", "Dot Branning"], "Easy", "Archie And Danielle", ["Archie Peggy Romance", "Mitchell In Laws"]],
    ["What had Ronnie been forced to do with her baby as a teenager?", "Give her up for adoption", ["Send her to boarding school", "Take her to Spain", "Leave her with Peggy"], "Easy", "Archie And Danielle", ["Ronnie Teenage Mother", "Forced Adoption"]],
    ["What did Archie falsely tell Ronnie about the child she had given up?", "That the child had died", ["That the child lived in France", "That the child was a boy", "That the child had been adopted by Peggy"], "Easy", "Archie And Danielle", ["Archie Daughter Death Lie", "Ronnie Manipulated"]],
    ["Which shy newcomer was revealed to viewers to be Ronnie's daughter?", "Danielle Jones", ["Ruby Allen", "Stacey Slater", "Libby Fox"], "Easy", "Archie And Danielle", ["Danielle Secret Identity", "Adopted Daughter"]],
    ["Which actress began playing Danielle Jones in 2008?", "Lauren Crace", ["Madeline Duggan", "Shona McGarty", "Lorna Fitzgerald"], "Medium", "Archie And Danielle", ["Lauren Crace", "Danielle Casting"]],
    ["Which Slater became Danielle's friend when she first arrived in Walford?", "Stacey Slater", ["Kat Slater", "Little Mo Mitchell", "Belinda Peacock"], "Easy", "Archie And Danielle", ["Danielle Stacey Friendship", "August Arrival"]],

    // TANYA, MAX, SEAN AND THE HIT-AND-RUN (10)
    ["Whom did Tanya take to the woods and bury alive after his affair was exposed?", "Max Branning", ["Jack Branning", "Bradley Branning", "Sean Slater"], "Easy", "Tanya And Max", ["Max Buried Alive", "Easter Revenge"]],
    ["Which Slater helped Tanya carry out Max's burial?", "Sean Slater", ["Stacey Slater", "Charlie Slater", "Jean Slater"], "Easy", "Tanya And Max", ["Sean Accomplice", "Tanya Revenge Plot"]],
    ["What did Tanya put in Max's drink before the burial?", "A sedative", ["A laxative", "A sleeping herbal tea", "An antibiotic"], "Medium", "Tanya And Max", ["Max Drugged", "Drink Spiked"]],
    ["In what type of container was Max buried while still alive?", "A coffin", ["A metal trunk", "A wardrobe", "A shipping crate"], "Easy", "Tanya And Max", ["Live Burial Coffin", "Epping Forest"]],
    ["Who ultimately returned and dug Max out of his grave?", "Tanya Branning", ["Sean Slater", "Jack Branning", "Jim Branning"], "Easy", "Tanya And Max", ["Tanya Saves Max", "Change Of Heart"]],
    ["Which season's holiday weekend featured the controversial live-burial episodes?", "Easter", ["Christmas", "Bonfire Night", "Halloween"], "Medium", "Tanya And Max", ["March Easter Episodes", "Ofcom Complaints"]],
    ["Which Branning brother began a relationship with Tanya during her separation from Max?", "Jack Branning", ["Bradley Branning", "Jim Branning", "Oscar Branning"], "Easy", "Tanya And Max", ["Jack Tanya Romance", "Brothers Feud"]],
    ["Which Branning was seriously injured in a Halloween hit-and-run?", "Max Branning", ["Jack Branning", "Jim Branning", "Bradley Branning"], "Easy", "Tanya And Max", ["Max Hit And Run", "Halloween 2008"]],
    ["Which teenage daughter was secretly responsible for driving the car that hit Max?", "Lauren Branning", ["Abi Branning", "Lucy Beale", "Chelsea Fox"], "Easy", "Tanya And Max", ["Lauren Driver Revealed", "Family Secret"]],
    ["Which woman claimed responsibility for hitting Max to protect the real driver?", "Tanya Branning", ["Stacey Slater", "Ronnie Mitchell", "Roxy Mitchell"], "Medium", "Tanya And Max", ["Tanya Protects Lauren", "False Confession"]],

    // MAY RETURNS AND THE MILLER HOUSE EXPLODES (10)
    ["Which former Walford doctor returned to terrorise Dawn and her daughter?", "May Wright", ["Stella Crawford", "Kate Morton", "Oliver Cousins"], "Easy", "May Final Revenge", ["May June Return", "Final Revenge"]],
    ["What gift did May open shortly before causing the fatal explosion?", "A music box", ["A jewellery case", "A toy train", "A birthday cake"], "Medium", "May Final Revenge", ["May Music Box", "Final Scene"]],
    ["Which baby's first birthday brought May into renewed contact with Dawn?", "Summer Swann's", ["Janet Mitchell's", "Aleesha Miller's", "Amy Mitchell's"], "Medium", "May Final Revenge", ["Summer First Birthday", "May Returns"]],
    ["Which Miller family member did May knock unconscious with a crowbar?", "Mickey Miller", ["Keith Miller", "Darren Miller", "Garry Hobbs"], "Easy", "May Final Revenge", ["Mickey Attacked", "Crowbar Assault"]],
    ["What did May reveal about her ex-husband Rob during her confrontation with Dawn?", "He was expecting a baby with someone else", ["He had bought the Queen Vic", "He had joined the police", "He was living with Peggy"], "Medium", "May Final Revenge", ["Rob New Relationship", "May Marriage Breakdown"]],
    ["Where did May lock Dawn and Summer during the final confrontation?", "In an upstairs bedroom", ["In the Queen Vic cellar", "In a garage", "In a garden shed"], "Medium", "May Final Revenge", ["Upstairs Captivity", "Dawn Protects Baby"]],
    ["What first name did May insist on calling baby Summer?", "Sophie", ["Rebecca", "Amy", "Janet"], "Medium", "May Final Revenge", ["Sophie Name Obsession", "Summer Kidnap Attempt"]],
    ["Which household fuel did May release before starting the fatal explosion?", "Gas", ["Petrol", "Paraffin", "Barbecue lighter fluid"], "Easy", "May Final Revenge", ["Gas Leak", "Miller House Explosion"]],
    ["What happened to May Wright when the house exploded?", "She died in the blast", ["She escaped to Spain", "She was arrested outside", "She went into hiding"], "Easy", "May Final Revenge", ["May Death", "June Explosion"]],
    ["Which two adult members of the Miller household survived the explosion with baby Summer?", "Dawn and Mickey", ["Rosie and Keith", "Garry and Minty", "Bianca and Ricky"], "Easy", "May Final Revenge", ["Dawn Mickey Escape", "Summer Rescued"]],

    // THE MURDER OF JASE DYER (10)
    ["Which Walford bride-to-be was devastated by Jase Dyer's murder?", "Dawn Swann", ["Roxy Mitchell", "Honey Mitchell", "Tanya Branning"], "Easy", "Jase Death", ["Dawn Jase Engagement", "Wedding Tragedy"]],
    ["Which criminal associate of Jase arranged the confrontation that killed him?", "Terry Bates", ["Johnny Allen", "Jack Dalton", "Andy Hunter"], "Easy", "Jase Death", ["Terry Sets Trap", "Gangland Murder"]],
    ["Whom did Terry's gang take hostage to lure Jase into a trap?", "Jay Brown", ["Ben Mitchell", "Darren Miller", "Liam Butcher"], "Easy", "Jase Death", ["Jay Kidnapped", "Terry Blackmail"]],
    ["Which Mitchell accompanied Jase on the ill-fated job for Terry?", "Billy Mitchell", ["Phil Mitchell", "Grant Mitchell", "Ben Mitchell"], "Easy", "Jase Death", ["Billy Accompanies Jase", "Getaway Driver"]],
    ["How much money did Jase believe he could steal from Terry's scheme?", "£100,000", ["£1,000", "£10,000", "£1 million"], "Medium", "Jase Death", ["Hundred Thousand Pounds", "Stolen Money Plan"]],
    ["Where did Billy hide while Jase was being attacked?", "In the bathroom", ["Under the stairs", "Inside a wardrobe", "In a delivery van"], "Medium", "Jase Death", ["Billy Hides", "Cowardice And Guilt"]],
    ["What kind of weapon delivered Jase's fatal wound?", "A knife", ["A gun", "A crowbar", "A glass bottle"], "Easy", "Jase Death", ["Terry Stabs Jase", "Fatal Wound"]],
    ["Where did Jase die following the attack by Terry’s gang?", "In hospital", ["At the Queen Vic", "At the railway station", "At the police station"], "Medium", "Jase Death", ["Jase Dies In Hospital", "Fatal Injuries"]],
    ["When did Dawn discover that Jase had been killed?", "On their wedding day", ["On their honeymoon", "At Christmas", "After the baby's christening"], "Easy", "Jase Death", ["Dawn Learns Death", "Wedding Cancelled"]],
    ["Who identified Jase's body at the mortuary?", "Jay Brown", ["Phil Mitchell", "Garry Hobbs", "Ricky Butcher"], "Medium", "Jase Death", ["Jay Identifies Father", "Mortuary Scene"]],

    // CHRISTIAN CLARKE AND STEVEN BEALE (10)
    ["Which brother of Jane Beale arrived in Albert Square in January?", "Christian Clarke", ["Steven Beale", "Jack Branning", "Lucas Johnson"], "Easy", "Christian And Steven", ["Christian January Arrival", "Jane Brother"]],
    ["Which actor began playing Christian Clarke?", "John Partridge", ["Aaron Sidwell", "Jake Wood", "Don Gilet"], "Medium", "Christian And Steven", ["John Partridge", "Christian Casting"]],
    ["What was the first name of Christian's wealthy fiancé when he arrived in Walford?", "Ashley", ["Steven", "Olly", "Edward"], "Medium", "Christian And Steven", ["Ashley Jennings", "Christian Engagement"]],
    ["Which troubled young Beale became romantically confused after kissing Christian?", "Steven Beale", ["Peter Beale", "Bobby Beale", "Ian Beale"], "Easy", "Christian And Steven", ["Steven Kisses Christian", "Sexuality Exploration"]],
    ["Which Slater also had a brief romantic encounter with Steven in the same storyline?", "Stacey Slater", ["Jean Slater", "Kat Slater", "Little Mo Mitchell"], "Easy", "Christian And Steven", ["Stacey Steven Romance", "Love Triangle"]],
    ["Which woman helped Steven after his mental health crisis by preventing him from harming himself?", "Stacey Slater", ["Lucy Beale", "Ronnie Mitchell", "Shirley Carter"], "Medium", "Christian And Steven", ["Stacey Helps Steven", "Psychiatric Crisis"]],
    ["Which Beale teenager did Christian catch with a boyfriend at his flat?", "Lucy Beale", ["Lauren Branning", "Abi Branning", "Chelsea Fox"], "Easy", "Christian And Steven", ["Christian Catches Lucy", "Olly Visit"]],
    ["What was the name of the boy Christian discovered with Lucy?", "Olly", ["Jay", "Freddie", "Bradley"], "Medium", "Christian And Steven", ["Olly Lucy Boyfriend", "Christian Flat"]],
    ["Which businessman started a catering venture with Christian?", "Ian Beale", ["Phil Mitchell", "Kevin Wicks", "Max Branning"], "Easy", "Christian And Steven", ["Ian Christian Partnership", "Catering Business"]],
    ["What was the name of Ian and Christian's catering business before merging with the Masoods?", "Fit for a Queen", ["Masala Queen", "Booty", "Scarlet"], "Medium", "Christian And Steven", ["Fit For A Queen", "Catering Company Name"]],

    // THE MASOODS AND THE FOX FAMILY (10)
    ["Which family had to close their Walford post office because of financial problems?", "The Masoods", ["The Millers", "The Wicks", "The Brannings"], "Easy", "Masoods And Foxes", ["Masood Post Office Closure", "Family Debts"]],
    ["What reason did the Masoods initially give neighbours for their post office closing?", "The government had closed it", ["The building had burned down", "They were moving to Spain", "They had won the lottery"], "Medium", "Masoods And Foxes", ["False Government Closure", "Debt Cover Story"]],
    ["Which daughter of Zainab left Walford for Pakistan in October?", "Shabnam Masood", ["Amira Shah", "Libby Fox", "Chelsea Fox"], "Easy", "Masoods And Foxes", ["Shabnam Pakistan Departure", "October 2008"]],
    ["What was the name of the family catering business Masood and Zainab established?", "Masala Masood", ["Masala Queen", "Fit for a Queen", "The Arches"], "Medium", "Masoods And Foxes", ["Masala Masood Catering", "New Business"]],
    ["What name was used when the Masoods joined their catering business with Ian and Christian's?", "Masala Queen", ["Angie's Den", "Booty", "Scarlet"], "Medium", "Masoods And Foxes", ["Masala Queen Merger", "Business Partnership"]],
    ["Which man returned as Chelsea Fox's biological father?", "Lucas Johnson", ["Patrick Trueman", "Kevin Wicks", "Owen Turner"], "Easy", "Masoods And Foxes", ["Lucas 2008 Return", "Chelsea Father"]],
    ["Which actor played Lucas Johnson on his arrival?", "Don Gilet", ["Lee Ross", "Phil Daniels", "Rudolph Walker"], "Medium", "Masoods And Foxes", ["Don Gilet", "Lucas Actor"]],
    ["Which religious occupation had Lucas taken up after overcoming addiction?", "Preacher", ["Rabbi", "Imam", "Choirmaster"], "Easy", "Masoods And Foxes", ["Lucas Christian Ministry", "Reformed Life"]],
    ["What was the first name of Lucas Johnson's young son?", "Jordan", ["Morgan", "Oscar", "Liam"], "Easy", "Masoods And Foxes", ["Jordan Johnson", "Lucas Son"]],
    ["Which university did Libby Fox apply to during the autumn?", "Oxford", ["Cambridge", "Leeds", "Manchester"], "Medium", "Masoods And Foxes", ["Libby Oxford Application", "University Interview"]],

    // FRANK'S FUNERAL AND JANINE'S RETURN (10)
    ["Which former Queen Vic landlord's death led to a major funeral in April?", "Frank Butcher", ["Den Watts", "Roy Evans", "Andy Hunter"], "Easy", "Frank And Janine", ["Frank Funeral", "April 2008 Tribute"]],
    ["What illness caused Frank Butcher's death?", "Throat cancer", ["Lung cancer", "A brain tumour", "Heart disease"], "Medium", "Frank And Janine", ["Frank Throat Cancer", "Death Announcement"]],
    ["In which country had Frank been living when he died?", "France", ["Spain", "Portugal", "Australia"], "Medium", "Frank And Janine", ["Diane France Home", "Frank Death Location"]],
    ["Which two former wives clashed over the arrangements for Frank's funeral?", "Pat and Peggy", ["Sharon and Angie", "Kat and Little Mo", "Denise and Shirley"], "Easy", "Frank And Janine", ["Pat Peggy Funeral Feud", "Frank Previous Marriages"]],
    ["Which daughter of Frank returned briefly to attend his funeral?", "Janine Butcher", ["Bianca Jackson", "Dawn Swann", "Carly Wicks"], "Easy", "Frank And Janine", ["Janine April Visit", "Frank Daughter"]],
    ["What did Janine do with Frank's ashes after becoming angry about his will?", "Scattered them in Albert Square", ["Buried them in Spain", "Put them in a bank vault", "Sent them to Peggy"], "Medium", "Frank And Janine", ["Janine Scatters Ashes", "No Inheritance"]],
    ["What false name did Janine adopt while trying to marry a rich elderly man?", "Judith Bernstein", ["Sarah Cairns", "Sasha Perkins", "Anya Covalenco"], "Medium", "Frank And Janine", ["Janine Judith Alias", "December Marriage Scheme"]],
    ["Where did Pat expose Janine's identity during the fraudulent marriage scheme?", "At a synagogue", ["At the registry office", "In the Queen Vic", "At the railway station"], "Easy", "Frank And Janine", ["Janine Synagogue Wedding", "Pat Unmasks Her"]],
    ["What was the first name of the elderly man Janine married in December?", "David", ["Harry", "Wilfred", "George"], "Medium", "Frank And Janine", ["David Elderly Husband", "December 2008 Marriage"]],
    ["What happened to Janine's new husband after the truth about her identity emerged?", "He died after a heart attack", ["He moved to Spain", "He was arrested for fraud", "He divorced her immediately"], "Easy", "Frank And Janine", ["David Fatal Heart Attack", "Marriage Collapse"]],

    // OTHER WALFORD STORIES, WEDDINGS AND DEPARTURES (10)
    ["Which two residents married in April after an unusual friendship turned into a marriage?", "Minty and Heather", ["Phil and Shirley", "Max and Tanya", "Ian and Jane"], "Easy", "Other Walford Stories", ["Minty Heather Wedding", "April 2008"]],
    ["What surname did Heather adopt after marrying Minty?", "Peterson", ["Branning", "Wicks", "Mitchell"], "Medium", "Other Walford Stories", ["Heather Peterson Married Name", "Minty Marriage"]],
    ["Which actor portrayed Minty Peterson?", "Cliff Parisi", ["Bobby Davro", "Perry Fenwick", "Ricky Groves"], "Medium", "Other Walford Stories", ["Cliff Parisi", "Minty Performer"]],
    ["Which entertainer played Shirley Carter's boyfriend Vinnie Monks?", "Bobby Davro", ["Mike Reid", "Shane Richie", "Les Dennis"], "Medium", "Other Walford Stories", ["Bobby Davro", "Vinnie Monks Casting"]],
    ["Which Branning sister became Phil Mitchell's girlfriend and claimed to be pregnant?", "Suzy Branning", ["Tanya Branning", "Rainie Cross", "Carol Jackson"], "Easy", "Other Walford Stories", ["Suzy Phil Relationship", "False Pregnancy"]],
    ["Which actress portrayed Suzy Branning in 2008?", "Maggie O'Neill", ["Jo Joyner", "Gillian Wright", "Diane Parish"], "Medium", "Other Walford Stories", ["Maggie O Neill", "Suzy Casting"]],
    ["Which much-loved dog died after becoming ill from eating chocolate?", "Wellard", ["Betty", "Genghis", "Terrence"], "Easy", "Other Walford Stories", ["Wellard Dies", "Chocolate Poisoning"]],
    ["Which dog-owning Walford resident had long cared for Wellard?", "Gus Smith", ["Ian Beale", "Phil Mitchell", "Max Branning"], "Easy", "Other Walford Stories", ["Gus Wellard Owner", "Pet Storyline"]],
    ["Which Walford resident accidentally fed Wellard the chocolate that made him ill?", "Bianca Jackson", ["Peggy Mitchell", "Dot Branning", "Shirley Carter"], "Medium", "Other Walford Stories", ["Bianca Fed Wellard", "Chocolate Poisoning Cause"]],
    ["Which troublesome son of Dot Branning returned near the end of the year?", "Nick Cotton", ["Ashley Cotton", "Jack Branning", "Joe Macer"], "Easy", "Other Walford Stories", ["Nick Cotton Return", "December 2008"]]
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic, detailTags], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: "tv_" + String(8474 + index).padStart(4, "0"),
        category: "Television",
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set([
            "British Television", "Soaps", "EastEnders", "2008",
            topic, ...topicTags[topic], correctAnswer, ...detailTags
        ])],
        dailyEligible: true
    };
});

module.exports = questions;
