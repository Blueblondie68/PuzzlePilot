// quiz_pack248.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2010
// 100 questions: tv_8684 to tv_8783
// Comprehensive question-level metadata from creation.
// Do not update quiz_bank.js until the agreed bank connection.

const topicTags = {
    "Live Anniversary": ["EastEnders 25th Anniversary", "Archie Mitchell Murder", "Bradley Branning", "Stacey Slater", "February 2010 Live Episode"],
    "Jackson Family": ["Bianca Jackson", "Ricky Butcher", "Carol Jackson", "Billie Jackson", "2010 Wedding And Family Tragedy"],
    "Masood Family": ["Syed Masood", "Christian Clarke", "Amira Shah", "Zainab Masood", "2010 Relationship Revelation"],
    "Lucas And Denise": ["Lucas Johnson", "Denise Fox", "Owen Turner", "Gemma Charleston", "July 2010 Captivity"],
    "Queen Vic Fire": ["Peggy Mitchell", "Phil Mitchell", "Queen Victoria Pub", "Barbara Windsor", "September 2010 Fire And Exit"],
    "Kat Alfie And Babies": ["Kat Moon", "Alfie Moon", "Tommy Moon", "Ronnie Branning", "December 2010 Birth And Baby Swap"],
    "Mitchell And Branning": ["Ronnie Mitchell", "Jack Branning", "Sam Mitchell", "Ben Mitchell", "2010 Family And Police Storylines"],
    "Stacey Ryan Janine": ["Stacey Slater", "Lily Slater", "Ryan Malloy", "Janine Butcher", "2010 Paternity And Christmas Exit"],
    "New Walford Faces": ["EastEnders E20", "Fatboy", "Zsa Zsa Carter", "Vanessa Gold", "2010 Character Introductions"],
    "Beales And Other Stories": ["Ian Beale", "Lucy Beale", "Jane Beale", "Peter Beale", "2010 Teen And Family Stories"]
};

const facts = [
    // THE LIVE 25TH-ANNIVERSARY EPISODE (10)
    ["Who was unmasked as Archie Mitchell's killer in the anniversary live episode?", "Stacey Slater", ["Ronnie Mitchell", "Peggy Mitchell", "Janine Butcher"], "Easy", "Live Anniversary", ["Stacey Killer Reveal", "Archie Whodunit Answer"]],
    ["To whom did Stacey confess that she had killed Archie?", "Max Branning", ["Jack Branning", "Jean Slater", "Ian Beale"], "Easy", "Live Anniversary", ["Stacey Confession To Max", "Final Live Scene"]],
    ["Which young Branning died while fleeing police in the live episode?", "Bradley Branning", ["Jack Branning", "Max Branning", "Jim Branning"], "Easy", "Live Anniversary", ["Bradley Fatal Fall", "Police Chase"]],
    ["From which Walford building did Bradley fall to his death?", "The Queen Victoria", ["The Arches", "The launderette", "The café"], "Easy", "Live Anniversary", ["Queen Vic Roof", "Fatal Stunt"]],
    ["Why were police pursuing Bradley during the anniversary episode?", "They suspected him of Archie's murder", ["He had robbed the post office", "He had started a fire", "He had broken out of prison"], "Medium", "Live Anniversary", ["Bradley Murder Suspect", "Wrongful Suspicion"]],
    ["Which major milestone was marked by the live EastEnders episode?", "The show's 25th anniversary", ["Its 10th anniversary", "Its 40th anniversary", "Its 1,000th episode"], "Easy", "Live Anniversary", ["Twenty Fifth Anniversary", "Broadcast Milestone"]],
    ["Who wrote the first live episode of EastEnders?", "Simon Ashdown", ["Tony Jordan", "Sarah Phelps", "Daran Little"], "Medium", "Live Anniversary", ["Simon Ashdown Writer", "Production Credits"]],
    ["Which actor gave his final performance as Bradley in the live episode?", "Charlie Clements", ["Scott Maslen", "Jake Wood", "Neil McDermott"], "Medium", "Live Anniversary", ["Charlie Clements Departure", "Bradley Actor"]],
    ["On what date was the show's first live episode broadcast?", "19 February 2010", ["19 January 2010", "25 December 2010", "1 April 2010"], "Medium", "Live Anniversary", ["Live Broadcast Date", "Anniversary Event"]],
    ["Which television channel broadcast EastEnders' first live episode?", "BBC One", ["ITV1", "Channel 4", "BBC Two"], "Easy", "Live Anniversary", ["BBC One Live Broadcast", "Broadcast History"]],

    // BIANCA AND RICKY, THE JACKSONS AND BILLIE'S DEATH (10)
    ["Which former couple remarried during EastEnders' anniversary week?", "Ricky and Bianca", ["Ian and Jane", "Phil and Shirley", "Jack and Ronnie"], "Easy", "Jackson Family", ["Ricky Bianca Second Wedding", "February Ceremony"]],
    ["Which woman returned to Walford to reunite with her daughter Bianca?", "Carol Jackson", ["Sonia Fowler", "Diane Butcher", "Debra Dean"], "Easy", "Jackson Family", ["Carol Returns", "Jackson Family Reunion"]],
    ["Which actress resumed playing Carol Jackson?", "Lindsey Coulson", ["Patsy Palmer", "Natalie Cassidy", "Gillian Wright"], "Medium", "Jackson Family", ["Lindsey Coulson", "Carol Casting"]],
    ["Which of Carol's sons returned for Bianca's wedding alongside other relatives?", "Robbie Jackson", ["Martin Fowler", "Peter Beale", "Darren Miller"], "Medium", "Jackson Family", ["Robbie Wedding Visit", "Family Return"]],
    ["Which of Carol Jackson's sons died suddenly after a night of heavy drinking?", "Billie Jackson", ["Robbie Jackson", "Liam Butcher", "Morgan Jackson"], "Easy", "Jackson Family", ["Billie Death", "October Tragedy"]],
    ["What caused Billie Jackson's fatal collapse after his birthday party?", "Alcohol poisoning", ["An asthma attack", "A drug overdose", "A heart attack"], "Easy", "Jackson Family", ["Alcohol Poisoning", "Birthday Party Death"]],
    ["Who discovered Billie unresponsive on the sofa the next morning?", "Bianca Jackson", ["Whitney Dean", "Pat Evans", "Tiffany Butcher"], "Medium", "Jackson Family", ["Bianca Finds Billie", "Family Grief"]],
    ["Which Branning teenager brought a bottle of vodka to Billie Jackson's birthday party?", "Lauren Branning", ["Abi Branning", "Lucy Beale", "Whitney Dean"], "Medium", "Jackson Family", ["Lauren Supplies Vodka", "Billie Birthday Party"]],
    ["Which former friend of Billie became involved with Carol after his death?", "Connor Stanley", ["Leon Small", "Ryan Malloy", "Fatboy Chubb"], "Medium", "Jackson Family", ["Carol Connor Relationship", "Grief Aftermath"]],
    ["Which actor played Billie Jackson in his final storyline?", "Devon Anderson", ["Dean Gaffney", "Charlie Clements", "Sam Attwater"], "Medium", "Jackson Family", ["Devon Anderson", "Billie Casting"]],

    // SYED, CHRISTIAN, AMIRA AND THE MASOODS (10)
    ["Which Masood married Amira Shah at the beginning of 2010?", "Syed Masood", ["Tamwar Masood", "Masood Ahmed", "Kamil Masood"], "Easy", "Masood Family", ["Syed Amira Wedding", "New Year Ceremony"]],
    ["Who told Zainab about Syed and Christian's relationship on Syed's wedding day?", "Christian Clarke", ["Amira Shah", "Jane Beale", "Tamwar Masood"], "Easy", "Masood Family", ["Christian Tells Zainab", "Wedding Day Secret"]],
    ["What words were exposed on a wall when Syed's secret relationship came to light?", "Syed loves Christian", ["Amira loves Masood", "Christian loves Ian", "Syed loves Lucy"], "Medium", "Masood Family", ["Graffiti Behind Wallpaper", "Affair Exposed"]],
    ["Which wealthy businessman was Amira Shah's father?", "Qadim Shah", ["Yusef Khan", "Inzamam Ahmed", "Dan Ferreira"], "Medium", "Masood Family", ["Qadim Shah", "Amira Family"]],
    ["What was Amira secretly expecting when she left Walford after the marriage broke down?", "A baby", ["A large inheritance", "A job abroad", "An invitation to remarry"], "Easy", "Masood Family", ["Amira Leaves Pregnant", "Unrevealed Pregnancy"]],
    ["Whom did Syed choose to be with despite his family's objections?", "Christian Clarke", ["Amira Shah", "Stacey Slater", "Jane Beale"], "Easy", "Masood Family", ["Syed Chooses Christian", "Family Conflict"]],
    ["What name did Zainab and Masood give their baby son born in February?", "Kamil", ["Syed", "Tamwar", "Jordan"], "Easy", "Masood Family", ["Kamil Masood Birth", "Fourth Child"]],
    ["Which younger Masood son renewed his romance with Afia Khan?", "Tamwar", ["Syed", "Kamil", "Ash"], "Easy", "Masood Family", ["Tamwar Afia Romance", "Young Couple"]],
    ["Which doctor arrived in Walford as Afia Khan's father?", "Yusef Khan", ["Lucas Johnson", "Oliver Cousins", "Rob Minter"], "Easy", "Masood Family", ["Yusef November Arrival", "Afia Father"]],
    ["Which actor first played Dr Yusef Khan?", "Ace Bhatti", ["Nitin Ganatra", "Marc Elliott", "Himesh Patel"], "Medium", "Masood Family", ["Ace Bhatti", "Yusef Casting"]],

    // LUCAS'S CRIMES AND DENISE'S FAKED DEATH (10)
    ["Whose remains were uncovered when an allotment tree was disturbed?", "Owen Turner's", ["Archie Mitchell's", "Jase Dyer's", "Kevin Wicks's"], "Easy", "Lucas And Denise", ["Owen Body Discovered", "Allotment Burial"]],
    ["Which relative of Owen pressed for answers about his disappearance?", "His mother Liz", ["His brother Jack", "His sister Kim", "His aunt Peggy"], "Medium", "Lucas And Denise", ["Liz Turner Investigation", "Missing Son"]],
    ["Which husband falsely convinced Walford that Denise had died?", "Lucas Johnson", ["Kevin Wicks", "Owen Turner", "Patrick Trueman"], "Easy", "Lucas And Denise", ["Denise False Death", "Lucas Deception"]],
    ["What did Lucas falsely claim had happened to Denise after she disappeared?", "She had taken her own life", ["She had emigrated", "She had drowned in an accident", "She had gone into witness protection"], "Medium", "Lucas And Denise", ["Fake Suicide Story", "Death Coverup"]],
    ["Where did Lucas secretly hold Denise while everyone believed she was dead?", "A basement in a neighbouring house", ["A room at the Queen Vic", "A flat above the café", "A shed by the canal"], "Easy", "Lucas And Denise", ["Denise Basement Captivity", "Neighbouring House"]],
    ["Which woman did Lucas murder to pass off her body as Denise's?", "Gemma Charleston", ["Trina Johnson", "Daphne Fox", "Chelsea Fox"], "Medium", "Lucas And Denise", ["Gemma Charleston Murder", "False Identity"]],
    ["What type of ceremony was held for Denise while she was secretly alive?", "A funeral", ["A wedding", "A christening", "A retirement party"], "Easy", "Lucas And Denise", ["Denise Funeral", "Faked Death Ceremony"]],
    ["Which two Walford residents attended the later funeral of Lucas's victim Gemma?", "Denise and Patrick", ["Kim and Chelsea", "Lucas and Jordan", "Libby and Liz"], "Medium", "Lucas And Denise", ["Gemma Funeral", "Victim Acknowledged"]],
    ["What did Lucas do when Denise exposed his crimes to her family?", "Held them hostage", ["Bought them tickets abroad", "Called a press conference", "Set fire to the café"], "Medium", "Lucas And Denise", ["Fox Family Held Captive", "Final Confrontation"]],
    ["How did Lucas's original reign of terror end in 2010?", "He was arrested by the police", ["He died in a house fire", "He fled to Australia", "He was killed by Owen"], "Easy", "Lucas And Denise", ["Lucas Arrested", "July 2010 Exit"]],

    // THE QUEEN VICTORIA BURNS AND PEGGY LEAVES (10)
    ["Which Mitchell set fire to the Queen Victoria during a confrontation with his mother?", "Phil Mitchell", ["Billy Mitchell", "Ben Mitchell", "Grant Mitchell"], "Easy", "Queen Vic Fire", ["Phil Starts Fire", "September Blaze"]],
    ["What drug addiction was Phil battling around the time of the pub fire?", "Crack cocaine", ["Heroin", "Cannabis", "Ecstasy"], "Medium", "Queen Vic Fire", ["Phil Crack Addiction", "Drug Withdrawal"]],
    ["Who locked Phil upstairs at the pub while trying to help him withdraw from drugs?", "Peggy Mitchell", ["Shirley Carter", "Roxy Mitchell", "Sam Mitchell"], "Medium", "Queen Vic Fire", ["Peggy Locks Phil In", "Attempted Detox"]],
    ["What small burning object did Phil drop to start the Queen Vic blaze?", "A match", ["A cigarette", "A candle", "A firework"], "Medium", "Queen Vic Fire", ["Dropped Match", "Pub Ignition"]],
    ["Who went back into the burning pub to help rescue Phil?", "Peggy Mitchell", ["Janine Butcher", "Carol Jackson", "Jane Beale"], "Easy", "Queen Vic Fire", ["Peggy Risks Life", "Phil Rescue"]],
    ["Which other Mitchell helped Peggy drag Phil out of the flames?", "Billy Mitchell", ["Ben Mitchell", "Grant Mitchell", "Archie Mitchell"], "Medium", "Queen Vic Fire", ["Billy Helps Rescue Phil", "Fire Escape"]],
    ["Which long-serving landlady left Walford immediately after the Queen Vic fire?", "Peggy Mitchell", ["Pat Evans", "Dot Branning", "Roxy Mitchell"], "Easy", "Queen Vic Fire", ["Peggy Departure", "September 2010 Exit"]],
    ["Which actress concluded her long original run as Peggy Mitchell after the fire?", "Barbara Windsor", ["Pam St Clement", "June Brown", "Samantha Womack"], "Easy", "Queen Vic Fire", ["Barbara Windsor Exit", "Long Running Cast"]],
    ["What special musical arrangement accompanied Peggy's departure?", "Peggy's Theme", ["Julia's Waltz", "Walford Lullaby", "Mitchell March"], "Medium", "Queen Vic Fire", ["Peggy Theme", "Special Exit Music"]],
    ["Who composed the special theme used for Peggy's departure?", "Simon May", ["Andrew Lloyd Webber", "Mike Batt", "John Barry"], "Medium", "Queen Vic Fire", ["Simon May Composer", "Peggy Exit Soundtrack"]],

    // KAT AND ALFIE RETURN; TWO NEWBORN BOYS (10)
    ["Which former Queen Vic couple returned to Walford in the autumn?", "Kat and Alfie Moon", ["Den and Angie Watts", "Ricky and Bianca", "Sharon and Grant"], "Easy", "Kat Alfie And Babies", ["Kat Alfie Return", "September 2010"]],
    ["Which actress returned to the role of Kat Moon?", "Jessie Wallace", ["Lacey Turner", "Jo Joyner", "Gillian Wright"], "Easy", "Kat Alfie And Babies", ["Jessie Wallace Return", "Kat Casting"]],
    ["Which actor returned to play Alfie Moon?", "Shane Richie", ["Alfie Allen", "Steve McFadden", "John Partridge"], "Easy", "Kat Alfie And Babies", ["Shane Richie Return", "Alfie Casting"]],
    ["Which Moon family member was the biological father of Kat's unborn child?", "Michael Moon", ["Alfie Moon", "Spencer Moon", "Jake Moon"], "Easy", "Kat Alfie And Babies", ["Michael Biological Father", "Kat Secret"]],
    ["How was Michael Moon related to Alfie?", "He was Alfie's cousin", ["He was Alfie's brother", "He was Alfie's father", "He was Alfie's son"], "Medium", "Kat Alfie And Babies", ["Michael Alfie Cousins", "Moon Family Tree"]],
    ["What name did Kat choose for her newborn son?", "Tommy", ["James", "Freddie", "George"], "Easy", "Kat Alfie And Babies", ["Tommy Moon Birth", "December Newborn"]],
    ["Where in the Queen Vic did Kat give birth to Tommy?", "The barrel store", ["The cellar bar", "The upstairs kitchen", "The garden"], "Medium", "Kat Alfie And Babies", ["Barrel Store Delivery", "Pub Birth"]],
    ["Which Slater family member delivered Kat's baby in the pub?", "Mo Harris", ["Stacey Slater", "Jean Slater", "Zoe Slater"], "Medium", "Kat Alfie And Babies", ["Mo Delivers Tommy", "Birth Assistance"]],
    ["What was the name of Ronnie and Jack's newborn son?", "James", ["Tommy", "Richard", "Oscar"], "Easy", "Kat Alfie And Babies", ["James Branning Birth", "December Newborn"]],
    ["Whose living baby did a grief-stricken Ronnie secretly take on New Year's Eve?", "Kat Moon's", ["Roxy Mitchell's", "Bianca Jackson's", "Stacey Slater's"], "Easy", "Kat Alfie And Babies", ["Ronnie Baby Swap", "31 December 2010"]],

    // RONNIE, JACK, SAM AND BEN (10)
    ["Which couple married in a major Walford wedding in November?", "Ronnie and Jack", ["Max and Tanya", "Phil and Shirley", "Tamwar and Afia"], "Easy", "Mitchell And Branning", ["Ronnie Jack Wedding", "November 2010"]],
    ["Which woman arrived as the estranged mother of Ronnie and Roxy?", "Glenda Mitchell", ["Louise Mitchell", "Kate Morton", "Lisa Fowler"], "Easy", "Mitchell And Branning", ["Glenda Mitchell Arrival", "Mitchell Mother"]],
    ["Which actress played Glenda Mitchell?", "Glynis Barber", ["Samantha Womack", "Rita Simons", "Danniella Westbrook"], "Medium", "Mitchell And Branning", ["Glynis Barber", "Glenda Casting"]],
    ["Which young woman shot Jack Branning at R&R during a gang dispute?", "Kylie", ["Lauren", "Zsa Zsa", "Lucy"], "Medium", "Mitchell And Branning", ["Jack Nightclub Shooting", "Kylie Gang"]],
    ["Which young Mitchell attacked Jordan Johnson with a spanner?", "Ben Mitchell", ["Billy Mitchell", "Jay Brown", "Will Mitchell"], "Easy", "Mitchell And Branning", ["Ben Attacks Jordan", "Spanner Assault"]],
    ["What consequence did Ben face for seriously injuring Jordan?", "Detention in a young offender institution", ["A fine only", "Deportation", "Permanent exclusion from Walford"], "Medium", "Mitchell And Branning", ["Ben Custodial Sentence", "Youth Justice"]],
    ["Which Mitchell daughter returned and was reunited with her mother Lisa Fowler?", "Louise Mitchell", ["Amy Mitchell", "Janet Mitchell", "Sam Mitchell"], "Easy", "Mitchell And Branning", ["Louise Lisa Reunion", "Phil Daughter"]],
    ["What first name did Sam Mitchell give her son born in September?", "Richard", ["James", "Oscar", "Thomas"], "Easy", "Mitchell And Branning", ["Richard Mitchell Birth", "Sam Baby"]],
    ["Who was revealed by a paternity test to be the father of Sam's son?", "Jack Branning", ["Ricky Butcher", "Phil Mitchell", "Billy Mitchell"], "Easy", "Mitchell And Branning", ["Jack Richard Paternity", "DNA Result"]],
    ["To which country did Sam leave with baby Richard?", "Portugal", ["Brazil", "Spain", "Australia"], "Medium", "Mitchell And Branning", ["Sam Portugal Departure", "September Exit"]],

    // STACEY, LILY, RYAN AND JANINE (10)
    ["What first name did Stacey give her daughter born during the summer?", "Lily", ["Amy", "Summer", "Janet"], "Easy", "Stacey Ryan Janine", ["Lily Slater Birth", "June 2010"]],
    ["Which Walford man was Lily's biological father?", "Ryan Malloy", ["Bradley Branning", "Max Branning", "Sean Slater"], "Easy", "Stacey Ryan Janine", ["Ryan Lily Father", "Paternity Secret"]],
    ["Which woman married Ryan Malloy in September?", "Janine Butcher", ["Stacey Slater", "Whitney Dean", "Roxy Mitchell"], "Easy", "Stacey Ryan Janine", ["Janine Ryan Wedding", "September Marriage"]],
    ["Who rescued Stacey and baby Lily from the burning Queen Vic?", "Ryan Malloy", ["Phil Mitchell", "Jack Branning", "Ian Beale"], "Easy", "Stacey Ryan Janine", ["Ryan Fire Rescue", "Saves Lily"]],
    ["Which agency did Janine contact with false allegations about Stacey caring for Lily?", "Social services", ["The tax office", "The fire brigade", "The local council planning team"], "Medium", "Stacey Ryan Janine", ["Janine False Neglect Report", "Child Welfare Visit"]],
    ["Whose baby did Janine briefly take as her feud with Stacey escalated?", "Lily Slater", ["Amy Mitchell", "Tommy Moon", "George Trott"], "Easy", "Stacey Ryan Janine", ["Janine Takes Lily", "Custody Conflict"]],
    ["What did Janine secretly put in Ryan's food or drink to make him seriously ill?", "Sedatives", ["Antibiotics", "Vitamins", "Antihistamines"], "Medium", "Stacey Ryan Janine", ["Ryan Poisoning", "Janine Revenge"]],
    ["How did Janine learn the truth about Stacey killing Archie?", "From Lauren's secret recording", ["From a letter written by Bradley", "From a police press release", "From a confession by Phil"], "Medium", "Stacey Ryan Janine", ["Lauren Recording", "Christmas Exposure"]],
    ["Who helped Stacey escape Walford on Christmas Day?", "Max Branning", ["Lucas Johnson", "Archie Mitchell", "Phil Mitchell"], "Easy", "Stacey Ryan Janine", ["Max Helps Stacey Flee", "Christmas Exit"]],
    ["Who accompanied Stacey when she left the country after her secret was exposed?", "Her daughter Lily", ["Her brother Sean", "Her husband Bradley", "Her friend Danielle"], "Easy", "Stacey Ryan Janine", ["Stacey Leaves With Lily", "Airport Departure"]],

    // E20 AND NEW FACES ON THE SQUARE (10)
    ["Which online EastEnders spin-off introduced a group of new young Walford residents?", "EastEnders: E20", ["EastEnders: Origins", "Walford Nights", "Albert Square Live"], "Medium", "New Walford Faces", ["E20 Spin Off", "Digital Series"]],
    ["Which new Carter teenager was Shirley Carter's niece?", "Zsa Zsa Carter", ["Carly Wicks", "Lucy Beale", "Whitney Dean"], "Easy", "New Walford Faces", ["Zsa Zsa Shirley Niece", "Young Carter Introduction"]],
    ["Which actress portrayed Zsa Zsa Carter?", "Emer Kenny", ["Shona McGarty", "Maisie Smith", "Lacey Turner"], "Medium", "New Walford Faces", ["Emer Kenny", "Zsa Zsa Casting"]],
    ["What was Fatboy Chubb's real first name?", "Arthur", ["Anthony", "Andrew", "Alfred"], "Medium", "New Walford Faces", ["Arthur Fatboy Chubb", "Nickname Reveal"]],
    ["Which actor played the new character Fatboy?", "Ricky Norwood", ["Sam Attwater", "Neil McDermott", "Devon Anderson"], "Medium", "New Walford Faces", ["Ricky Norwood", "Fatboy Casting"]],
    ["Which young newcomer was a boxer and involved with Zsa Zsa?", "Leon Small", ["Ryan Malloy", "Darren Miller", "Syed Masood"], "Easy", "New Walford Faces", ["Leon Boxing", "Zsa Zsa Romance"]],
    ["Which new woman became romantically involved with Max Branning?", "Vanessa Gold", ["Jodie Gold", "Glenda Mitchell", "Kim Fox"], "Easy", "New Walford Faces", ["Vanessa Max Romance", "Gold Family Arrival"]],
    ["Which actress played Vanessa Gold?", "Zöe Lucker", ["Jo Joyner", "Glynis Barber", "Maggie O'Neill"], "Medium", "New Walford Faces", ["Zoe Lucker", "Vanessa Casting"]],
    ["Which Gold family teenager was played by Kylie Babbington?", "Jodie Gold", ["Vanessa Gold", "Lauren Branning", "Lucy Beale"], "Medium", "New Walford Faces", ["Kylie Babbington", "Jodie Casting"]],
    ["Which Walford mechanic became the boyfriend of Jodie Gold?", "Darren Miller", ["Garry Hobbs", "Minty Peterson", "Phil Mitchell"], "Easy", "New Walford Faces", ["Jodie Darren Romance", "Young Relationship"]],

    // LUCY'S PREGNANCY AND OTHER BEALE FAMILY STORIES (10)
    ["Which Beale teenager discovered she was pregnant after a romance with Leon Small?", "Lucy Beale", ["Lauren Branning", "Abi Branning", "Whitney Dean"], "Easy", "Beales And Other Stories", ["Lucy Pregnancy", "Teen Storyline"]],
    ["Who was the father of Lucy Beale's pregnancy?", "Leon Small", ["Peter Beale", "Jay Brown", "Ryan Malloy"], "Easy", "Beales And Other Stories", ["Leon Biological Father", "Lucy Relationship"]],
    ["Which woman initially considered adopting Lucy's baby?", "Jane Beale", ["Peggy Mitchell", "Pat Evans", "Zainab Masood"], "Easy", "Beales And Other Stories", ["Jane Adoption Hope", "Family Plan"]],
    ["Who encouraged Lucy to have an abortion rather than continue her pregnancy?", "Ian Beale", ["Christian Clarke", "Max Branning", "Patrick Trueman"], "Easy", "Beales And Other Stories", ["Ian Pressures Lucy", "Pregnancy Decision"]],
    ["What did Ian and Lucy initially tell Jane had happened to the pregnancy?", "Lucy had miscarried", ["The baby had been adopted", "Lucy had never been pregnant", "Lucy had given birth abroad"], "Medium", "Beales And Other Stories", ["Miscarriage Lie", "Abortion Secret"]],
    ["Which educational video did Ian show Lucy in an effort to discourage her pregnancy?", "A childbirth video", ["A road safety film", "A school history documentary", "A fitness class recording"], "Medium", "Beales And Other Stories", ["Childbirth DVD", "Ian Persuasion"]],
    ["Which young man helped Lucy cheat in her GCSE examinations?", "Adam Best", ["Leon Small", "Bradley Branning", "Ryan Malloy"], "Medium", "Beales And Other Stories", ["Adam Best", "GCSE Cheating"]],
    ["Where did Lucy go to live after the school discovered her exam cheating?", "Devon", ["Cornwall", "Kent", "Scotland"], "Medium", "Beales And Other Stories", ["Lucy Moves To Devon", "Grandmother Home"]],
    ["What was the name of the grandmother Lucy went to stay with?", "Bev Williams", ["Pat Evans", "Mo Harris", "Dot Branning"], "Medium", "Beales And Other Stories", ["Bev Williams", "Maternal Grandmother"]],
    ["Which Beale son also left Walford near Christmas 2010?", "Peter Beale", ["Steven Beale", "Bobby Beale", "Ian Beale"], "Easy", "Beales And Other Stories", ["Peter December Departure", "Beale Family Exit"]]
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic, detailTags], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: "tv_" + String(8684 + index).padStart(4, "0"),
        category: "Television",
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set([
            "British Television", "Soaps", "EastEnders", "2010",
            topic, ...topicTags[topic], correctAnswer, ...detailTags
        ])],
        dailyEligible: true
    };
});

module.exports = questions;
