// quiz_pack252.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2014
// 100 questions: tv_9084 to tv_9183
// Complete per-question tags created and validated with the questions.
// Do not change quiz_bank.js until the agreed bank connection.

const topicTags = {
  "Lucy And The Beales": ["Lucy Beale", "Ian Beale", "Peter Beale", "2014 Lucy Beale Murder Storyline"],
  "Lucy Murder Investigation": ["Lucy Beale", "Police Investigation", "2014 Whodunit"],
  "Carter Family Arrivals": ["Carter Family", "Queen Victoria Pub", "2014 Carter Family Storylines"],
  "Linda And Carter Christmas": ["Linda Carter", "Mick Carter", "Dean Wicks", "Christmas 2014 Carter Revelations"],
  "Carol And David": ["Carol Jackson", "David Wicks", "Breast Cancer Storyline", "2014 Jackson Family"],
  "Mitchell Family Drama": ["Phil Mitchell", "Sharon Rickman", "Ronnie Mitchell", "2014 Mitchell Storylines"],
  "Kat Alfie And Twins": ["Kat Moon", "Alfie Moon", "2014 Moon Family Storylines", "Twins And House Fire"],
  "Cottons Return": ["Dot Branning", "Nick Cotton", "Charlie Cotton", "2014 Cotton Family Secrets"],
  "Stacey Returns": ["Stacey Slater", "Kat Moon", "Archie Mitchell Murder", "2014 Stacey Return And Confession"],
  "Other Walford Stories": ["Walford Residents", "2014 New Arrivals And Family Stories", "Albert Square"]
};

// Each fact: question, correct answer, three wrong answers, difficulty,
//              topic, extra individual characters/storyline tags.
const facts = [
  // LUCY BEALE'S LAST DAYS AND THE DISCOVERY (10)
  ["Which Beale daughter was found dead over Easter?", "Lucy Beale", ["Cindy Williams", "Lauren Branning", "Whitney Dean"], "Easy", "Lucy And The Beales", ["April 2014 Death", "Easter Murder Mystery"]],
  ["Where was Lucy Beale's body discovered?", "Walford Common", ["Albert Square Gardens", "The Queen Vic cellar", "The Arches"], "Easy", "Lucy And The Beales", ["Body Found On Common", "Crime Scene"]],
  ["On which day of the Easter weekend did Lucy disappear from the Square?", "Good Friday", ["Easter Monday", "Palm Sunday", "Easter Sunday"], "Medium", "Lucy And The Beales", ["18 April 2014", "Final Night"]],
  ["Which businessman was Lucy Beale's father?", "Ian Beale", ["Max Branning", "Phil Mitchell", "David Wicks"], "Easy", "Lucy And The Beales", ["Ian Lucy Relationship", "Beale Father"]],
  ["Which Beale son was Lucy's twin brother?", "Peter Beale", ["Bobby Beale", "Steven Beale", "Martin Fowler"], "Easy", "Lucy And The Beales", ["Peter Lucy Twins", "Twin Siblings"]],
  ["What illegal drug did Ian discover among Lucy's belongings shortly before her death?", "Cocaine", ["Cannabis", "Heroin", "Ecstasy"], "Easy", "Lucy And The Beales", ["Lucy Cocaine Use", "Ian Discovers Drugs"]],
  ["Where in Lucy's room did Ian find the hidden drugs?", "In a jewellery box", ["Inside a shoe", "Behind a picture frame", "Under a floorboard"], "Medium", "Lucy And The Beales", ["Jewellery Box", "Hidden Cocaine"]],
  ["Which older Branning had been having a secret affair with Lucy?", "Max Branning", ["Jack Branning", "Derek Branning", "Joey Branning"], "Easy", "Lucy And The Beales", ["Max Lucy Affair", "Secret Relationship"]],
  ["Which best friend was Lucy's business partner at LB Lettings?", "Lauren Branning", ["Abi Branning", "Whitney Dean", "Lola Pearce"], "Easy", "Lucy And The Beales", ["Lauren Lucy Friendship", "LB Lettings"]],
  ["Which newly arrived Carter son briefly became involved with Lucy before her death?", "Lee Carter", ["Johnny Carter", "Dean Wicks", "Peter Beale"], "Easy", "Lucy And The Beales", ["Lee Lucy Romance", "Lee Carter"]],

  // THE ONGOING MURDER INVESTIGATION (10)
  ["Which detective constable helped investigate Lucy Beale's death?", "Emma Summerhayes", ["Samantha Keeble", "Marsden", "Eva Thorn"], "Medium", "Lucy Murder Investigation", ["DC Emma Summerhayes", "Police Detective"]],
  ["Which detective sergeant worked with Emma Summerhayes at the beginning of the investigation?", "Cameron Bryant", ["Charlie Cotton", "Jack Branning", "Duncan Willis"], "Medium", "Lucy Murder Investigation", ["DS Cameron Bryant", "Police Partnership"]],
  ["Which EastEnders character was arrested as a suspect in Lucy's murder after sending a mysterious message?", "Jake Stone", ["Terry Spraggan", "Tamwar Masood", "Kush Kazemi"], "Easy", "Lucy Murder Investigation", ["Jake Stone Suspect", "Murder Arrest"]],
  ["Which actor portrayed murder suspect Jake Stone?", "Jamie Lomas", ["Ben Hardy", "David Witts", "Daniel Coonan"], "Medium", "Lucy Murder Investigation", ["Jamie Lomas", "Casting"]],
  ["Which private business linked Lucy and Lauren to the mysterious meeting with Jake?", "LB Lettings", ["Masala Queen", "Booty", "Moon & Sons"], "Medium", "Lucy Murder Investigation", ["Lauren Branning", "Jake Stone", "Property Lettings"]],
  ["Which detective inspector took over Lucy Beale's murder enquiry after DCI Irving was reassigned?", "Samantha Keeble", ["Emma Summerhayes", "Cameron Bryant", "Jack Branning"], "Medium", "Lucy Murder Investigation", ["DI Samantha Keeble", "July 2014 Investigation Handover"]],
  ["Which woman discovered Lucy's belongings buried at Patrick's allotment?", "Denise Fox", ["Jane Beale", "Sharon Rickman", "Kat Moon"], "Medium", "Lucy Murder Investigation", ["Denise Fox", "Buried Phone And Purse", "Patrick Allotment"]],
  ["Who admitted late in the year that he had supplied cocaine to Lucy?", "Peter Beale", ["Ian Beale", "Lee Carter", "Jake Stone"], "Easy", "Lucy Murder Investigation", ["Peter Supplies Cocaine", "December Confession"]],
  ["Which detective became romantically involved with Max Branning while investigating Lucy's murder?", "Emma Summerhayes", ["Samantha Keeble", "Marsden", "Cameron Bryant"], "Medium", "Lucy Murder Investigation", ["Emma Max Romance", "Police Conflict Of Interest"]],
  ["In which year was the answer to 'Who Killed Lucy Beale?' finally revealed to viewers?", "2015", ["2014", "2013", "2016"], "Medium", "Lucy Murder Investigation", ["2015 Killer Reveal", "Anniversary Year Boundary"]],

  // CARTERS TAKE CENTRE STAGE (10)
  ["Which Carter son came out as gay to his father Mick?", "Johnny Carter", ["Lee Carter", "Dean Wicks", "Stan Carter"], "Easy", "Carter Family Arrivals", ["Johnny Comes Out", "Mick Supports Son"]],
  ["Which Carter family member initially found it difficult to accept Johnny's sexuality?", "Linda Carter", ["Nancy Carter", "Tina Carter", "Aunt Babe"], "Easy", "Carter Family Arrivals", ["Linda Johnny Conflict", "Coming Out Reaction"]],
  ["Which Carter daughter arrived in Walford after an aborted wedding?", "Nancy Carter", ["Tina Carter", "Linda Carter", "Shirley Carter"], "Easy", "Carter Family Arrivals", ["Nancy January Arrival", "Failed Wedding"]],
  ["What was the first name of Nancy Carter's unsuitable fiancé?", "Wayne", ["Dean", "Lee", "Leon"], "Medium", "Carter Family Arrivals", ["Wayne Ladlow", "Nancy Engagement"]],
  ["Which actor played Carter grandfather Stan?", "Timothy West", ["Timothy Spall", "David Essex", "Larry Lamb"], "Medium", "Carter Family Arrivals", ["Stan Carter", "Timothy West Casting"]],
  ["Which older woman known as Aunt Babe joined the Carter clan?", "Babe Smith", ["Cora Cross", "Pam Coker", "Elaine Peacock"], "Easy", "Carter Family Arrivals", ["Babe Smith Arrival", "Carter Aunt"]],
  ["Which actress portrayed Aunt Babe Smith?", "Annette Badland", ["Ann Mitchell", "Linda Marlowe", "Maria Friedman"], "Medium", "Carter Family Arrivals", ["Annette Badland", "Babe Casting"]],
  ["Which Carter son returned from the armed forces and helped at the pub?", "Lee Carter", ["Johnny Carter", "Mick Carter", "Dean Wicks"], "Easy", "Carter Family Arrivals", ["Lee Armed Forces", "Lee Returns Home"]],
  ["Which actress played the Carter daughter Nancy?", "Maddy Hill", ["Kellie Bright", "Luisa Bradshaw-White", "Lacey Turner"], "Medium", "Carter Family Arrivals", ["Maddy Hill", "Nancy Casting"]],
  ["Which Carter relative was revealed to have a terminal prostate cancer diagnosis?", "Stan Carter", ["Mick Carter", "Lee Carter", "Buster Briggs"], "Easy", "Carter Family Arrivals", ["Stan Prostate Cancer", "November Illness"]],

  // LINDA'S ORDEAL AND THE CHRISTMAS CARTER SECRETS (10)
  ["Which man sexually assaulted Linda Carter in the Queen Vic flat?", "Dean Wicks", ["Johnny Carter", "Lee Carter", "Stan Carter"], "Easy", "Linda And Carter Christmas", ["Dean Rapes Linda", "October 2014"]],
  ["Which actress portrayed Linda during the serious assault storyline?", "Kellie Bright", ["Linda Henry", "Maddy Hill", "Luisa Bradshaw-White"], "Easy", "Linda And Carter Christmas", ["Kellie Bright", "Linda Casting"]],
  ["Which Walford woman realised Linda was keeping a traumatic secret and urged her to speak out?", "Stacey Slater", ["Janine Butcher", "Sharon Rickman", "Ronnie Mitchell"], "Easy", "Linda And Carter Christmas", ["Stacey Supports Linda", "Encourages Disclosure"]],
  ["What news left Linda anxious about the identity of her baby's father?", "She was pregnant", ["She had inherited money", "She had a twin sister", "She was moving house"], "Easy", "Linda And Carter Christmas", ["Pregnancy After Assault", "Paternity Uncertainty"]],
  ["On which major holiday did Linda finally tell Mick that Dean had raped her?", "Christmas Day", ["Halloween", "Easter Sunday", "New Year's Day"], "Easy", "Linda And Carter Christmas", ["Christmas 2014 Disclosure", "Mick Learns Truth"]],
  ["Who did Mick attack after learning what had happened to Linda?", "Dean Wicks", ["Phil Mitchell", "Buster Briggs", "Stan Carter"], "Easy", "Linda And Carter Christmas", ["Mick Attacks Dean", "Christmas Confrontation"]],
  ["What was Shirley Carter's shocking revelation about her relationship to Mick?", "She was his mother", ["She was his aunt", "She was his daughter", "She was his cousin"], "Easy", "Linda And Carter Christmas", ["Shirley Mick Mother", "Hidden Parentage"]],
  ["Who was revealed to be Mick Carter's biological father?", "Buster Briggs", ["Stan Carter", "Kevin Wicks", "Dean Wicks"], "Easy", "Linda And Carter Christmas", ["Buster Briggs", "Mick Father"]],
  ["Which woman had raised Mick as her son despite actually being his grandmother?", "Sylvie Carter", ["Babe Smith", "Elaine Peacock", "Cora Cross"], "Medium", "Linda And Carter Christmas", ["Sylvie Carter", "Secret Grandmother"]],
  ["What family relationship did Mick learn he really shared with Dean Wicks?", "They were half-brothers", ["They were cousins", "Dean was Mick's father", "They were unrelated"], "Medium", "Linda And Carter Christmas", ["Mick Dean Half Brothers", "Shirley Family Secret"]],

  // CAROL'S CANCER AND DAVID'S DEPARTURE (10)
  ["Which Jackson matriarch was diagnosed with breast cancer at the start of the year?", "Carol Jackson", ["Bianca Butcher", "Sonia Fowler", "Denise Fox"], "Easy", "Carol And David", ["January Diagnosis", "Carol Breast Cancer"]],
  ["What treatment did Carol receive to shrink her breast tumours?", "Chemotherapy", ["Dialysis", "Radiotherapy alone", "A bone-marrow transplant"], "Easy", "Carol And David", ["Carol Chemotherapy", "Cancer Treatment"]],
  ["What did Carol's genetic test show that raised concerns for her children?", "An inherited cancer-risk gene mutation", ["An inherited heart condition", "A blood-clotting disorder", "An iron deficiency"], "Medium", "Carol And David", ["Hereditary Breast Cancer Risk", "Family Gene Testing"]],
  ["Which two of Carol's daughters were worried about their own genetic test results?", "Bianca and Sonia", ["Lauren and Abi", "Lucy and Cindy", "Whitney and Tiffany"], "Easy", "Carol And David", ["Bianca Butcher", "Sonia Fowler", "Family Genetic Tests"]],
  ["Which long-term love of Carol's planned to marry her in 2014?", "David Wicks", ["Masood Ahmed", "Max Branning", "Terry Spraggan"], "Easy", "Carol And David", ["David Carol Engagement", "Wedding Plans"]],
  ["What sudden medical emergency prevented David from reaching his planned wedding to Carol?", "A heart attack", ["A stroke", "A broken leg", "An asthma attack"], "Easy", "Carol And David", ["David Heart Attack", "Wedding Day Collapse"]],
  ["Which former wife of Terry Spraggan tempted David during his engagement to Carol?", "Nikki Spraggan", ["Kirsty Branning", "Vanessa Gold", "Sharon Rickman"], "Medium", "Carol And David", ["Nikki David Kiss", "Infidelity Temptation"]],
  ["Which actor left the show as David Wicks following Carol's abandoned wedding?", "Michael French", ["Nick Berry", "Sid Owen", "Phil Daniels"], "Medium", "Carol And David", ["Michael French Departure", "David Casting"]],
  ["Which airport did David head towards when he departed instead of reconciling with Carol?", "Heathrow Airport", ["Gatwick Airport", "Stansted Airport", "Manchester Airport"], "Medium", "Carol And David", ["David Leaves Via Heathrow", "Airport Exit"]],
  ["Which actress portrayed Carol during her breast-cancer storyline?", "Lindsey Coulson", ["Patsy Palmer", "Natalie Cassidy", "Jo Joyner"], "Medium", "Carol And David", ["Lindsey Coulson", "Carol Casting"]],

  // SHARON, PHIL, BEN AND RONNIE (10)
  ["Which man did Sharon Rickman marry in September?", "Phil Mitchell", ["Jack Branning", "Ian Beale", "Max Branning"], "Easy", "Mitchell Family Drama", ["Sharon Phil Wedding", "September Marriage"]],
  ["Which woman fired a gun that wounded Phil around his wedding celebrations?", "Shirley Carter", ["Ronnie Mitchell", "Peggy Mitchell", "Roxy Mitchell"], "Easy", "Mitchell Family Drama", ["Shirley Shoots Phil", "Wedding Gunshot"]],
  ["Which actor began playing Ben Mitchell after his release from custody?", "Harry Reid", ["Joshua Pascoe", "Max Bowden", "Charlie Chambers"], "Medium", "Mitchell Family Drama", ["Harry Reid", "Ben Recast"]],
  ["For which killing had Ben Mitchell previously been imprisoned?", "Heather Trott's", ["Lucy Beale's", "Archie Mitchell's", "Michael Moon's"], "Easy", "Mitchell Family Drama", ["Ben Returns From Custody", "Heather Manslaughter"]],
  ["Which man did Ronnie Mitchell kill at the start of 2014 after he threatened her?", "Carl White", ["Nick Cotton", "Michael Moon", "Jake Stone"], "Easy", "Mitchell Family Drama", ["Ronnie Kills Carl", "January 2014"]],
  ["What part of a car did Ronnie slam onto Carl White's head?", "The boot lid", ["The bonnet", "A car door", "A steering wheel"], "Medium", "Mitchell Family Drama", ["Carl Death Method", "Car Boot Lid"]],
  ["What was done to the car containing Carl White's body?", "It was crushed", ["It was driven into the canal", "It was set alight", "It was sold abroad"], "Medium", "Mitchell Family Drama", ["Carl Body Disposal", "Car Crusher"]],
  ["Which Cotton family newcomer began a relationship with Ronnie?", "Charlie Cotton", ["Nick Cotton", "Andrew Cotton", "Ashley Cotton"], "Easy", "Mitchell Family Drama", ["Ronnie Charlie Relationship", "New Romance"]],
  ["Which of Ronnie's relatives was having a relationship with market inspector Aleks?", "Roxy Mitchell", ["Peggy Mitchell", "Sam Mitchell", "Louise Mitchell"], "Easy", "Mitchell Family Drama", ["Roxy Aleks Romance", "Aleks Shirovs"]],
  ["What secret did Aleks Shirovs conceal from Roxy?", "He was already married", ["He had killed a relative", "He was secretly a policeman", "He owned the Queen Vic"], "Easy", "Mitchell Family Drama", ["Marta Shirovs", "Aleks Marriage Secret"]],

  // KAT, ALFIE AND THE TWINS (10)
  ["What were the two familiar nicknames used for Kat and Alfie's twin sons?", "Bert and Ernie", ["Tom and Jerry", "Bill and Ben", "Ant and Dec"], "Easy", "Kat Alfie And Twins", ["Bert Ernie Moon", "Twins Born August"]],
  ["What were the twins' registered first names?", "Albert and Ernest", ["Bertie and Edward", "Albert and Edward", "Arthur and Eric"], "Medium", "Kat Alfie And Twins", ["Twins Legal Names", "Albert Ernest"]],
  ["In which month did Kat give birth to her twins?", "August", ["February", "May", "November"], "Medium", "Kat Alfie And Twins", ["8 August 2014", "Twins Birth Month"]],
  ["Which Moon brother was the twins' older half-brother?", "Tommy Moon", ["Michael Moon", "Tyler Moon", "Anthony Moon"], "Easy", "Kat Alfie And Twins", ["Tommy Half Brother", "Moon Children"]],
  ["Who started the fire that destroyed Kat and Alfie's house?", "Alfie Moon", ["Phil Mitchell", "Nick Cotton", "Carl White"], "Easy", "Kat Alfie And Twins", ["Alfie Sets Fire", "September Arson"]],
  ["Why did Alfie deliberately set fire to the family home?", "To claim insurance money", ["To scare a burglar", "To destroy a threatening letter", "To hide a stolen car"], "Easy", "Kat Alfie And Twins", ["Insurance Fraud Motive", "Financial Desperation"]],
  ["Which person was trapped inside when Alfie's fire spread?", "Kat Moon", ["Mo Harris", "Stacey Slater", "Jean Slater"], "Easy", "Kat Alfie And Twins", ["Kat Trapped In Fire", "Severe Burns"]],
  ["What injuries did Kat suffer in the house fire?", "Serious burns", ["A broken ankle", "A fractured skull", "Frostbite"], "Easy", "Kat Alfie And Twins", ["Kat Burn Injuries", "Hospital Recovery"]],
  ["Which Slater woman sheltered Kat after her marriage to Alfie later broke down?", "Stacey Slater", ["Zoe Slater", "Little Mo", "Belinda Slater"], "Easy", "Kat Alfie And Twins", ["Stacey Helps Kat", "Family Shelter"]],
  ["Which couple remarried in October after their family crisis?", "Kat and Alfie", ["Mick and Linda", "Ian and Jane", "Phil and Sharon"], "Easy", "Kat Alfie And Twins", ["Kat Alfie Remarriage", "October 2014 Wedding"]],

  // NICK, DOT AND CHARLIE (10)
  ["Which young newcomer claimed to be Dot's grandson and Nick Cotton's son?", "Charlie Cotton", ["Arthur Chubb", "Jay Brown", "Ryan Malloy"], "Easy", "Cottons Return", ["Charlie Arrival", "Dot Grandson"]],
  ["What job did Charlie Cotton falsely claim to have?", "Police officer", ["Paramedic", "Teacher", "Solicitor"], "Easy", "Cottons Return", ["Charlie Fake Police Identity", "Family Deception"]],
  ["What news did Charlie initially give Dot about her troublesome son Nick?", "That Nick was dead", ["That Nick had married", "That Nick had won the lottery", "That Nick had moved to Spain"], "Easy", "Cottons Return", ["Nick Fake Death", "False Family News"]],
  ["Which character was actually alive after supposedly dying earlier in the year?", "Nick Cotton", ["Carl White", "Michael Moon", "Archie Mitchell"], "Easy", "Cottons Return", ["Nick Returns Alive", "Faked Death"]],
  ["On which spooky autumn occasion did Nick surprise Dot by reappearing?", "Halloween", ["Bonfire Night", "Christmas Eve", "Easter Sunday"], "Easy", "Cottons Return", ["Nick Halloween Reveal", "October Return"]],
  ["Which actress played Charlie Cotton's mother Yvonne?", "Pauline McLynn", ["June Brown", "Gillian Wright", "Pam St Clement"], "Medium", "Cottons Return", ["Pauline McLynn", "Yvonne Cotton Casting"]],
  ["Which Cotton newcomer was played by Declan Bennett?", "Charlie Cotton", ["Nick Cotton", "Andrew Cotton", "Ashley Cotton"], "Medium", "Cottons Return", ["Declan Bennett", "Charlie Casting"]],
  ["Whose supposed funeral drew Dot into Charlie's elaborate family deception?", "Nick Cotton's", ["Jim Branning's", "Reg Cox's", "Andrew Cotton's"], "Easy", "Cottons Return", ["Nick Fake Funeral", "Dot Grieving"]],
  ["Which Mitchell sister became pregnant by Charlie Cotton?", "Ronnie Mitchell", ["Roxy Mitchell", "Sam Mitchell", "Louise Mitchell"], "Easy", "Cottons Return", ["Ronnie Charlie Pregnancy", "Baby Matthew Expected"]],
  ["In what year did Charlie and Ronnie's wedding take place following their engagement in 2014?", "2015", ["2014", "2013", "2016"], "Medium", "Cottons Return", ["2015 New Year Wedding", "Chronology Boundary"]],

  // STACEY'S RETURN AND HER CONFESSION (10)
  ["Which Slater returned to Walford after several years away and later confessed to killing Archie?", "Stacey Slater", ["Kat Moon", "Jean Slater", "Zoe Slater"], "Easy", "Stacey Returns", ["Stacey 2014 Return", "Archie Confession"]],
  ["Which cousin spotted Stacey while travelling on a London bus?", "Kat Moon", ["Mo Harris", "Lauren Branning", "Roxy Mitchell"], "Easy", "Stacey Returns", ["Kat Spots Stacey", "London Bus"]],
  ["What false identity had Stacey been using while living away from Walford?", "Jenny Smith", ["Judith Bernstein", "Mary Evans", "Sally Brown"], "Medium", "Stacey Returns", ["Jenny Smith Alias", "Hiding In London"]],
  ["Which daughter returned with Stacey after her time away?", "Lily", ["Lexi", "Amy", "Scarlett"], "Easy", "Stacey Returns", ["Lily Slater", "Mother Daughter Return"]],
  ["Which woman withdrew her earlier accusation against Stacey after Kat intervened?", "Janine Butcher", ["Ronnie Mitchell", "Sharon Rickman", "Roxy Mitchell"], "Medium", "Stacey Returns", ["Janine Drops Allegation", "Kat Negotiates"]],
  ["Where did Stacey summon the police to confess that she had killed Archie?", "The Queen Victoria", ["The Arches", "The launderette", "The market office"], "Easy", "Stacey Returns", ["Police Confession At Pub", "March 2014"]],
  ["Why did Stacey say she needed to confess to Archie's murder?", "To clear Bradley's name", ["To inherit Archie's money", "To protect Max from fraud", "To regain ownership of the pub"], "Easy", "Stacey Returns", ["Bradley Innocence", "Guilty Conscience"]],
  ["What prison sentence did Stacey initially receive for killing Archie?", "Five years", ["Six months", "Twelve years", "A life sentence with no parole"], "Medium", "Stacey Returns", ["Initial Five Year Sentence", "2014 Conviction"]],
  ["Which medical condition played a part in Stacey's successful appeal against her sentence?", "Bipolar disorder", ["Epilepsy", "Asthma", "Diabetes"], "Easy", "Stacey Returns", ["Diminished Responsibility Appeal", "Mental Health Diagnosis"]],
  ["Which man began a relationship with Stacey later in the year before she learned what he had done to Linda?", "Dean Wicks", ["Lee Carter", "Max Branning", "Kush Kazemi"], "Easy", "Stacey Returns", ["Stacey Dean Romance", "Linda Secret"]],

  // OTHER WALFORD STORIES AND NEW ARRIVALS (10)
  ["Which Trinidadian Walford resident suffered a serious stroke during the summer?", "Patrick Trueman", ["Masood Ahmed", "Ian Beale", "Billy Mitchell"], "Easy", "Other Walford Stories", ["Patrick Stroke", "July 2014 Health Storyline"]],
  ["Which woman struggled with caring for Patrick after his stroke?", "Denise Fox", ["Roxy Mitchell", "Jane Beale", "Cora Cross"], "Easy", "Other Walford Stories", ["Denise Carer", "Patrick Rehabilitation"]],
  ["Which Fox sister returned to Walford at the end of the year and revealed she was pregnant?", "Kim Fox", ["Denise Fox", "Libby Fox", "Chelsea Fox"], "Easy", "Other Walford Stories", ["Kim December Return", "Kim Pregnancy"]],
  ["Which Spraggan teenager was the father of Cindy Williams's daughter?", "TJ Spraggan", ["Liam Butcher", "Peter Beale", "Johnny Carter"], "Easy", "Other Walford Stories", ["TJ Cindy Baby", "Teenage Parents"]],
  ["What name did Cindy Williams give her baby daughter?", "Beth", ["Lucy", "Lily", "Rosie"], "Easy", "Other Walford Stories", ["Beth Williams Birth", "August 2014"]],
  ["Which Beale helped deliver Cindy Williams's baby at home?", "Ian Beale", ["Peter Beale", "Bobby Beale", "Martin Fowler"], "Medium", "Other Walford Stories", ["Ian Delivers Beth", "Home Birth"]],
  ["Which new market inspector from Latvia began a relationship with Roxy Mitchell?", "Aleks Shirovs", ["Charlie Cotton", "Kush Kazemi", "Dexter Hartman"], "Easy", "Other Walford Stories", ["Aleks Latvian Market Inspector", "Roxy Romance"]],
  ["Which actress joined the soap as market trader Donna Yates?", "Lisa Hammond", ["Kellie Bright", "Maddy Hill", "Lin Blakley"], "Medium", "Other Walford Stories", ["Lisa Hammond", "Donna Yates Arrival"]],
  ["Which couple took over the undertakers' business in Walford?", "Les and Pam Coker", ["Mick and Linda Carter", "Kat and Alfie Moon", "Ian and Jane Beale"], "Easy", "Other Walford Stories", ["Coker And Sons", "Les Coker", "Pam Coker"]],
  ["Which returning Masood daughter was played by Rakhee Thakrar?", "Shabnam Masood", ["Amira Shah", "Afia Masood", "Ayesha Rana"], "Medium", "Other Walford Stories", ["Shabnam Masood Recast", "Rakhee Thakrar"]]
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic, detailTags], index) => {
  const answers = [...wrongAnswers];
  answers.splice(index % 4, 0, correctAnswer);
  return {
    id: "tv_" + String(9084 + index).padStart(4, "0"),
    category: "Television",
    question,
    answers,
    correctAnswer,
    difficulty,
    tags: [...new Set([
      "British Television", "Soaps", "EastEnders", "2014",
      topic, ...topicTags[topic], correctAnswer, ...detailTags
    ])],
    dailyEligible: true
  };
});

module.exports = questions;
