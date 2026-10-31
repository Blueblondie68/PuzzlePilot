// quiz_pack255.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2017
// 100 questions: tv_9384 to tv_9483
// Complete question-level tags created and tested with this pack.
// Leave quiz_bank.js unchanged until the agreed bank connection.

const groups = [
  {
    topic: "Ronnie And Roxy Farewell",
    tags: ["Ronnie Mitchell", "Roxy Mitchell", "Jack Branning", "Mitchell Family", "New Years Day 2017 Swimming Pool Tragedy"],
    facts: [
      ["Which two Mitchell sisters died in a hotel swimming pool?", "Ronnie and Roxy", ["Sharon and Sam", "Peggy and Glenda", "Louise and Courtney"], "Easy", ["Ronnie Roxy Deaths", "1 January 2017"]],
      ["Which Branning married Ronnie shortly before she died?", "Jack Branning", ["Max Branning", "Derek Branning", "Bradley Branning"], "Easy", ["Ronnie Jack Wedding", "New Years Day Marriage"]],
      ["Where did Ronnie and Roxy's fatal accident take place?", "A hotel swimming pool", ["The Queen Vic cellar", "The River Thames", "The Albert Square fountain"], "Easy", ["Hotel Pool Deaths", "Wedding Reception"]],
      ["Which sister entered the swimming pool first and failed to resurface?", "Roxy Mitchell", ["Ronnie Mitchell", "Sam Mitchell", "Sharon Mitchell"], "Easy", ["Roxy Pool Entry", "Drowning Sequence"]],
      ["What prevented Ronnie from escaping the water as she tried to save Roxy?", "Her heavy wedding dress", ["A locked pool cover", "A broken leg", "A fallen ceiling panel"], "Easy", ["Ronnie Wedding Dress", "Rescue Attempt"]],
      ["What medical event did investigators say Roxy suffered in the pool?", "A cardiac arrest", ["An epileptic seizure", "A stroke", "A severe allergic reaction"], "Medium", ["Roxy Cardiac Arrest", "Coroners Findings"]],
      ["Which actor played Jack Branning during the sisters' final episode?", "Scott Maslen", ["Jake Wood", "Jamie Foreman", "Ross Kemp"], "Medium", ["Scott Maslen", "Jack Casting"]],
      ["Which actress played Ronnie Mitchell in her final regular episode?", "Samantha Womack", ["Rita Simons", "Letitia Dean", "Glynis Barber"], "Medium", ["Samantha Womack", "Ronnie Casting"]],
      ["Which actress played Roxy Mitchell when the character was killed off?", "Rita Simons", ["Samantha Womack", "Tilly Keeper", "Emma Barton"], "Medium", ["Rita Simons", "Roxy Casting"]],
      ["What was the first name of Roxy and Jack's daughter, left without her mother?", "Amy", ["Lexi", "Louise", "Lily"], "Easy", ["Amy Mitchell", "Roxy Daughter"]]
    ]
  },
  {
    topic: "Market Bus Crash And Denise",
    tags: ["Martin Fowler", "Denise Fox", "Phil Mitchell", "Raymond Fox", "January 2017 Bus Crash And Adoption"],
    facts: [
      ["What kind of vehicle crashed through Walford's busy market in January?", "A double-decker bus", ["A fire engine", "A freight lorry", "A tram"], "Easy", ["January Market Bus Crash", "Double Decker"]],
      ["Which market trader was trapped underneath the crashed bus?", "Martin Fowler", ["Kush Kazemi", "Billy Mitchell", "Ian Beale"], "Easy", ["Martin Under Bus", "Rescue Operation"]],
      ["How did Walford's residents help free Martin after the bus crash?", "They lifted the bus together", ["They dug a tunnel", "They used a helicopter", "They dismantled the market stalls"], "Easy", ["Community Lifts Bus", "Martin Rescued"]],
      ["What medical emergency had caused the bus driver to lose control?", "A heart attack", ["A broken wrist", "An asthma attack", "An allergic reaction"], "Medium", ["Driver Heart Attack", "Crash Cause"]],
      ["Which street business was directly affected when the bus ploughed through the market?", "The market stalls", ["The undertakers", "The launderette", "The Arches garage"], "Easy", ["Market Disruption", "Walford Traders"]],
      ["Which Fox sister gave birth to Phil Mitchell's son in January?", "Denise Fox", ["Kim Fox", "Chelsea Fox", "Libby Fox"], "Easy", ["Denise January Birth", "Phil Biological Son"]],
      ["What first name was given to Denise and Phil's baby by his adoptive family?", "Raymond", ["Matthew", "Arthur", "Dennis"], "Easy", ["Raymond Fox", "Adoptive Parents Name Baby"]],
      ["What decision did Denise make for her newborn son?", "To place him for adoption", ["To send him to boarding school", "To leave him with Max", "To move with him to Portugal"], "Easy", ["Denise Adoption Decision", "Raymond Placement"]],
      ["Who told Phil that he was the father of Denise's baby?", "Sharon Mitchell", ["Kim Fox", "Kathy Beale", "Carmel Kazemi"], "Easy", ["Sharon Reveals Paternity", "Phil Learns Secret"]],
      ["Which operation did Phil undergo after being offered a donor organ?", "A liver transplant", ["A heart transplant", "A kidney transplant", "A lung transplant"], "Easy", ["Phil Liver Transplant", "Alcohol Related Illness"]]
    ]
  },
  {
    topic: "Michelle Bex And The Prom",
    tags: ["Michelle Fowler", "Preston Cooper", "Bex Fowler", "Louise Mitchell", "2017 School Bullying And Prom Fire"],
    facts: [
      ["Which American teenager followed Michelle Fowler to Walford?", "Preston Cooper", ["Travis Law-Hughes", "Shakil Kazemi", "Keegan Baker"], "Easy", ["Preston Cooper Arrival", "Michelle Secret Relationship"]],
      ["Which teenage Fowler began dating Preston without knowing he was involved with Michelle?", "Bex Fowler", ["Lily Fowler", "Louise Mitchell", "Abi Branning"], "Easy", ["Bex Preston Romance", "Family Betrayal"]],
      ["Which vehicle did Michelle drive into the chip shop after her relationship with Preston was exposed?", "Phil Mitchell's car", ["An ambulance", "A bus", "A police van"], "Medium", ["Michelle Chip Shop Crash", "Preston Affair Fallout"]],
      ["Which two schoolgirls were the main tormentors in Bex's bullying storyline?", "Alexandra and Madison", ["Lauren and Abi", "Nancy and Whitney", "Tiffany and Louise"], "Easy", ["Alexandra D Costa", "Madison Drake", "Bex Bullies"]],
      ["Which of Bex's friends joined in the bullying before realising how cruel it had become?", "Louise Mitchell", ["Lily Fowler", "Cindy Williams", "Beth Williams"], "Easy", ["Louise Bullies Bex", "Friendship Strain"]],
      ["Which boy had sent Bex an intimate photograph that was circulated around the school?", "Shakil Kazemi", ["Travis Law-Hughes", "Keegan Baker", "Johnny Carter"], "Easy", ["Shakil Photograph Shared", "Cyberbullying"]],
      ["What revolting filling did Bex's bullies put into a truffle before filming her eating it?", "Cat faeces", ["Mud", "Raw onion", "Toothpaste"], "Medium", ["Cruel Truffle Incident", "Humiliation Video"]],
      ["Who pushed Louise onto lit candles during the school prom?", "Alexandra D'Costa", ["Bex Fowler", "Madison Drake", "Michelle Fowler"], "Medium", ["Alexandra Pushes Louise", "Prom Fire"]],
      ["What injury did Louise suffer at the school prom?", "Severe burns", ["A broken arm", "A concussion", "A fractured ankle"], "Easy", ["Louise Prom Burns", "Emergency Hospital Treatment"]],
      ["Which woman returned to Walford after Louise was injured at the prom?", "Lisa Fowler", ["Peggy Mitchell", "Sam Mitchell", "Kathy Beale"], "Easy", ["Lisa Fowler Return", "Louise Mother"]]
    ]
  },
  {
    topic: "Taylor Family Arrives",
    tags: ["Karen Taylor", "Keanu Taylor", "Keegan Baker", "Bernadette Taylor", "June 2017 Taylor Family Arrival"],
    facts: [
      ["Which outspoken single mother arrived in Walford with the Taylor family?", "Karen Taylor", ["Carmel Kazemi", "Tina Carter", "Joyce Murray"], "Easy", ["Karen Taylor Introduction", "Taylor Matriarch"]],
      ["Which actress first played Karen Taylor?", "Lorraine Stanley", ["Clair Norris", "Lisa Faulkner", "Maggie Steed"], "Medium", ["Lorraine Stanley", "Karen Casting"]],
      ["Which Taylor son was played by actor Danny Walters?", "Keanu Taylor", ["Keegan Baker", "Riley Taylor", "Chatham Taylor"], "Easy", ["Danny Walters", "Keanu Casting"]],
      ["Which previously established troublemaker was revealed to be another of Karen's sons?", "Keegan Baker", ["Shakil Kazemi", "Travis Law-Hughes", "Bex Fowler"], "Easy", ["Keegan Karen Son", "Taylor Family Secret"]],
      ["Which actress portrayed Karen's daughter Bernadette?", "Clair Norris", ["Tilly Keeper", "Jasmine Armfield", "Jacqueline Jossa"], "Medium", ["Clair Norris", "Bernadette Casting"]],
      ["What family tragedy did teenage Bernadette experience after becoming pregnant?", "A miscarriage", ["A custody battle", "An adoption refusal", "The birth of triplets"], "Easy", ["Bernadette Miscarriage", "Teen Pregnancy"]],
      ["What were the first names of Karen Taylor's two youngest sons?", "Riley and Chatham", ["Arthur and Louie", "Ben and Jay", "Matthew and Dennis"], "Medium", ["Riley Taylor", "Chatham Taylor", "Youngest Siblings"]],
      ["What was the name of the Taylor family's dog?", "Bronson", ["Lady Di", "Wellard", "Roly"], "Medium", ["Bronson The Dog", "Taylor Pets"]],
      ["What type of animal was the Taylors' pet Rooney?", "A bearded dragon", ["A rabbit", "A tortoise", "A parrot"], "Medium", ["Rooney Bearded Dragon", "Family Pet"]],
      ["At which Albert Square house number did the Taylors move in?", "23", ["1", "5", "45"], "Medium", ["Number 23 Albert Square", "Taylor Home"]]
    ]
  },
  {
    topic: "Steven Lauren And Abi",
    tags: ["Steven Beale", "Lauren Branning", "Abi Branning", "Max Branning", "September 2017 Restaurant Fire"],
    facts: [
      ["Which Beale falsely claimed to have a brain tumour?", "Steven Beale", ["Ian Beale", "Peter Beale", "Bobby Beale"], "Easy", ["Steven Fake Brain Tumour", "Medical Deception"]],
      ["Which Branning sister was Steven publicly dating while secretly seeing her sister?", "Lauren Branning", ["Abi Branning", "Penny Branning", "Tanya Branning"], "Easy", ["Steven Lauren Relationship", "Secret Affair"]],
      ["Which Branning sister became pregnant by Steven Beale?", "Abi Branning", ["Lauren Branning", "Penny Branning", "Alice Branning"], "Easy", ["Abi Steven Baby", "2017 Pregnancy"]],
      ["Which actor played Steven Beale when the character died?", "Aaron Sidwell", ["Ben Hardy", "Adam Woodyatt", "Thomas Law"], "Medium", ["Aaron Sidwell", "Steven Casting"]],
      ["What kind of business did Steven set on fire with Jane trapped inside?", "A restaurant", ["A garage", "A launderette", "An undertakers"], "Easy", ["Beales Restaurant Fire", "Jane In Danger"]],
      ["Who pressured Steven into setting the fire as part of his revenge plan?", "Max Branning", ["Phil Mitchell", "James Willmott-Brown", "Ian Beale"], "Easy", ["Max Orders Fire", "Vengeful Scheme"]],
      ["Which Beale woman was trapped in the burning restaurant?", "Jane Beale", ["Kathy Beale", "Cindy Williams", "Lucy Beale"], "Easy", ["Jane Restaurant Fire", "Attempted Murder"]],
      ["Which Branning sister entered the burning restaurant while searching for Steven?", "Abi Branning", ["Lauren Branning", "Tanya Branning", "Alice Branning"], "Easy", ["Abi Enters Fire", "Looking For Steven"]],
      ["Which man inflicted the injuries that led to Steven's death by shoving him against a counter?", "Max Branning", ["Ian Beale", "Phil Mitchell", "Josh Hemmings"], "Medium", ["Max Assaults Steven", "Fatal Internal Injuries"]],
      ["In which month did Steven Beale die after the restaurant blaze?", "September", ["February", "May", "December"], "Medium", ["8 September 2017", "Steven Death Date"]]
    ]
  },
  {
    topic: "Max Weyland And Willmott Brown",
    tags: ["Max Branning", "Weyland And Co", "James Willmott-Brown", "Fi Browning", "2017 Walford Redevelopment Scheme"],
    facts: [
      ["Which Branning secretly helped a property company target Walford as revenge for his imprisonment?", "Max Branning", ["Jack Branning", "Abi Branning", "Lauren Branning"], "Easy", ["Max Revenge Plan", "Wrongful Conviction Motive"]],
      ["What was the name of the company behind the planned redevelopment of Albert Square?", "Weyland & Co", ["LB Lettings", "Coker & Sons", "Moon & Sons"], "Easy", ["Weyland And Co", "Square Redevelopment"]],
      ["Which businessman from Kathy Beale's past returned as a key figure in the redevelopment scheme?", "James Willmott-Brown", ["Gavin Sullivan", "Carl White", "David Wicks"], "Easy", ["Willmott Brown Return", "Kathy Past Trauma"]],
      ["Which actress played the businesswoman known as Fi Browning?", "Lisa Faulkner", ["Kellie Bright", "Maggie Steed", "Jo Joyner"], "Medium", ["Lisa Faulkner", "Fi Browning Casting"]],
      ["What was Fi Browning's full first name?", "Sophie", ["Samantha", "Sarah", "Susan"], "Medium", ["Sophie Willmott Brown", "Fi Real Name"]],
      ["How was Fi Browning related to James Willmott-Brown?", "She was his daughter", ["She was his sister", "She was his niece", "She was his wife"], "Easy", ["Fi James Father Daughter", "Family Connection"]],
      ["Which businessman at Weyland was also Fi's brother and Lauren's love interest?", "Josh Hemmings", ["Luke Browning", "Hugo Browning", "Steven Beale"], "Medium", ["Josh Hemmings", "Lauren Romance"]],
      ["Which older Weyland executive was chairman of the company?", "Hugo Browning", ["Mick Carter", "Les Coker", "Masood Ahmed"], "Medium", ["Hugo Browning Chairman", "Weyland Leadership"]],
      ["What business did the company Grafton Hill acquire from the Carters?", "The Queen Vic's freehold", ["Coker & Sons", "The Arches garage", "The Minute Mart"], "Easy", ["Queen Vic Freehold Sold", "Grafton Hill"]],
      ["Who eventually obtained control of Weyland's Walford properties to undo the redevelopment scheme?", "Fi Browning", ["Max Branning", "Lauren Branning", "Phil Mitchell"], "Medium", ["Fi Recovers Properties", "Weyland Scheme Collapses"]]
    ]
  },
  {
    topic: "Carter Family And Queen Vic",
    tags: ["Mick Carter", "Linda Carter", "Whitney Dean", "Sylvie Carter", "2017 Queen Vic Family And Business"],
    facts: [
      ["Which Carter couple struggled to keep control of the Queen Victoria in 2017?", "Mick and Linda Carter", ["Lee and Whitney Carter", "Ian and Jane Beale", "Phil and Sharon Mitchell"], "Easy", ["Mick Linda Pub Crisis", "Queen Vic Ownership"]],
      ["Which singer played temporary Queen Vic bar manager Woody Woodward?", "Lee Ryan", ["Shane Richie", "David Essex", "Tony Discipline"], "Medium", ["Lee Ryan", "Woody Woodward Casting"]],
      ["Which businesswoman arrived to manage changes at the Queen Vic on behalf of the new owners?", "Fi Browning", ["Kirsty Branning", "Jane Beale", "Denise Fox"], "Easy", ["Fi Pub Management", "Grafton Hill Representative"]],
      ["Which long-serving Queen Vic barmaid was dismissed as part of the management changes?", "Tracey", ["Shirley", "Stacey", "Tina"], "Easy", ["Tracey Sacked", "Pub Staffing Cuts"]],
      ["Which man shared an illicit kiss with Whitney while married to Linda Carter?", "Mick Carter", ["Johnny Carter", "Woody Woodward", "Lee Carter"], "Easy", ["Mick Whitney Kiss", "Marriage Strain"]],
      ["Which serious illness had Linda concealed during her absence from Walford?", "Cancer", ["Heart disease", "Kidney failure", "Multiple sclerosis"], "Easy", ["Linda Cancer Secret", "2017 Diagnosis"]],
      ["Which elderly Carter relative died after an electrical accident in the bath?", "Sylvie Carter", ["Babe Smith", "Elaine Peacock", "Cora Cross"], "Easy", ["Sylvie Carter Death", "March 2017"]],
      ["What electrical item caused Sylvie Carter's fatal bathroom accident?", "A CD player", ["A toaster", "An electric fan", "A hairdryer"], "Medium", ["Sylvie CD Player Electrocution", "Bath Accident"]],
      ["Which daughter discovered Sylvie's body following the accident?", "Tina Carter", ["Shirley Carter", "Linda Carter", "Nancy Carter"], "Easy", ["Tina Finds Sylvie", "Family Bereavement"]],
      ["Which Carter son left Walford after struggling with debts and depression?", "Lee Carter", ["Johnny Carter", "Mick Carter", "Dean Wicks"], "Easy", ["Lee Carter Departure", "February 2017 Exit"]]
    ]
  },
  {
    topic: "September Explosion And Murrays",
    tags: ["Ted Murray", "Joyce Murray", "Johnny Carter", "September 2017 Gas Explosion", "Walford Emergency"],
    facts: [
      ["What major accident caused widespread destruction in Albert Square in September?", "A gas explosion", ["An earthquake", "A train derailment", "A flood"], "Easy", ["September Gas Explosion", "Walford Disaster"]],
      ["Which elderly newcomer panicked after the explosion and fired a gun at a neighbour?", "Ted Murray", ["Les Coker", "Patrick Trueman", "Jim Branning"], "Easy", ["Ted Murray Gunshot", "Explosion Panic"]],
      ["Which Carter son was accidentally shot while checking on his elderly neighbours?", "Johnny Carter", ["Lee Carter", "Mick Carter", "Dean Wicks"], "Easy", ["Johnny Shot", "Neighbour Rescue"]],
      ["Which woman initially took responsibility for the shooting to protect her husband?", "Joyce Murray", ["Pam Coker", "Linda Carter", "Dot Branning"], "Easy", ["Joyce Takes Blame", "Ted Cover Up"]],
      ["Which actor portrayed Ted Murray?", "Christopher Timothy", ["Timothy West", "Ian Lavender", "Paul Nicholas"], "Medium", ["Christopher Timothy", "Ted Casting"]],
      ["Which actress played Ted Murray's wife Joyce?", "Maggie Steed", ["Lin Blakley", "Linda Marlowe", "Ann Mitchell"], "Medium", ["Maggie Steed", "Joyce Casting"]],
      ["What aspect of Ted's past contributed to his panic after the explosion?", "His military experiences", ["Years as a professional boxer", "A childhood sailing accident", "His former career as a chef"], "Medium", ["Ted Army Past", "Traumatic Memories"]],
      ["What happened to the ambulance transporting Johnny after the shooting?", "It was struck by a lorry", ["It ran out of fuel", "It caught fire at the hospital", "It was hijacked"], "Medium", ["Ambulance Lorry Crash", "September Emergency"]],
      ["What happened to the Murray flat's windows during the gas explosion?", "They were blown in", ["They were painted over", "They were boarded up beforehand", "They remained intact"], "Medium", ["Murray Windows Shattered", "Blast Damage"]],
      ["Which Carter was furious when the truth about Ted shooting Johnny emerged?", "Linda Carter", ["Nancy Carter", "Babe Smith", "Shabnam Masood"], "Easy", ["Linda Confronts Murrays", "Johnny Mother"]]
    ]
  },
  {
    topic: "Stacey Martin And Hope",
    tags: ["Stacey Fowler", "Martin Fowler", "Hope Fowler", "Carmel Kazemi", "October 2017 Premature Birth"],
    facts: [
      ["What name did Stacey and Martin Fowler give their daughter born in autumn?", "Hope", ["Lily", "Lexi", "Pearl"], "Easy", ["Hope Fowler Birth", "October 2017"]],
      ["Which actor played Martin Fowler during Hope's birth storyline?", "James Bye", ["James Alexandrou", "Todd Carty", "Charlie Clements"], "Medium", ["James Bye", "Martin Casting"]],
      ["Which actress played Stacey Fowler in 2017?", "Lacey Turner", ["Jacqueline Jossa", "Gillian Wright", "Natalie Cassidy"], "Easy", ["Lacey Turner", "Stacey Casting"]],
      ["What pregnancy complication caused Stacey to have seizures and need urgent treatment?", "Eclampsia", ["Appendicitis", "Gallstones", "A broken rib"], "Medium", ["Stacey Eclampsia", "Pregnancy Emergency"]],
      ["How was baby Hope delivered following Stacey's medical crisis?", "By caesarean section", ["In the Queen Vic cellar", "At a roadside bus stop", "In an ambulance without surgery"], "Medium", ["Hope Caesarean Birth", "Premature Delivery"]],
      ["Which of Arthur's relatives contacted social services about bruises on him?", "Carmel Kazemi", ["Jean Slater", "Kathy Beale", "Sharon Mitchell"], "Medium", ["Carmel Reports Arthur", "Social Services Referral"]],
      ["Who was the biological father of Stacey's older son Arthur?", "Kush Kazemi", ["Martin Fowler", "Max Branning", "Ryan Malloy"], "Easy", ["Kush Arthur Paternity", "Fowler Family"]],
      ["Which former lover did Stacey grow close to again at Christmas?", "Max Branning", ["Ryan Malloy", "Bradley Branning", "Alfie Moon"], "Easy", ["Stacey Max Affair", "Christmas Reconciliation"]],
      ["Which Fowler teenager was Martin's daughter from his earlier relationship with Sonia?", "Bex Fowler", ["Lily Fowler", "Hope Fowler", "Louise Mitchell"], "Easy", ["Bex Daughter Of Martin", "Fowler Family Relationships"]],
      ["Which of Karen Taylor's younger sons took Stacey's phone and passed it to Bernadette?", "Riley Taylor", ["Chatham Taylor", "Keegan Baker", "Keanu Taylor"], "Medium", ["Riley Takes Stacey Phone", "Bernadette Receives Phone"]]
    ]
  },
  {
    topic: "Branning Christmas Cliffhanger",
    tags: ["Max Branning", "Lauren Branning", "Abi Branning", "Tanya Branning", "Christmas 2017 Queen Vic Roof Fall"],
    facts: [
      ["Which two Branning sisters fell from the roof of the Queen Vic on Christmas Day?", "Lauren and Abi", ["Ronnie and Roxy", "Tanya and Rainie", "Alice and Penny"], "Easy", ["Lauren Abi Roof Fall", "Christmas Day 2017"]],
      ["Whom were Lauren and Abi trying to stop from jumping off the roof?", "Max Branning", ["Jack Branning", "Steven Beale", "Ian Beale"], "Easy", ["Max Suicide Attempt", "Daughters Intervene"]],
      ["Which Branning mother returned at Christmas and revealed Max's role in Steven Beale's death?", "Tanya Branning", ["Cora Cross", "Rainie Cross", "Carol Jackson"], "Easy", ["Tanya Christmas Return", "Steven Death Exposed"]],
      ["Which actress played Abi Branning during the Christmas roof tragedy?", "Lorna Fitzgerald", ["Jacqueline Jossa", "Jo Joyner", "Mimi Keene"], "Medium", ["Lorna Fitzgerald", "Abi Casting"]],
      ["Which actress played Lauren Branning during the roof-fall storyline?", "Jacqueline Jossa", ["Lorna Fitzgerald", "Jo Joyner", "Jasmyn Banks"], "Medium", ["Jacqueline Jossa", "Lauren Casting"]],
      ["Which former Beale partner was the father of Abi's unborn child?", "Steven Beale", ["Josh Hemmings", "Ben Mitchell", "Jay Brown"], "Easy", ["Steven Father Of Abi Baby", "Pregnancy Secret"]],
      ["What medical condition did doctors diagnose in Abi after the fall?", "Brainstem death", ["A broken wrist", "Amnesia", "Permanent deafness"], "Medium", ["Abi Brainstem Death", "December Hospital Diagnosis"]],
      ["How did doctors deliver Abi's baby daughter before the end of the year?", "By caesarean section", ["By a home birth", "By a water birth", "By induction at the Queen Vic"], "Medium", ["Abi Baby Delivered", "29 December 2017"]],
      ["Which Branning sister began recovering from her injuries while her sister remained critically ill?", "Lauren Branning", ["Abi Branning", "Penny Branning", "Tanya Branning"], "Easy", ["Lauren Survives Fall", "Hospital Recovery"]],
      ["In which year was Abi Branning's life support finally withdrawn following the Christmas fall?", "2018", ["2017", "2016", "2019"], "Medium", ["January 2018 Death", "Year Boundary"]]
    ]
  }
];

let index = 0;
const questions = groups.flatMap(group => group.facts.map(
  ([question, correctAnswer, wrongAnswers, difficulty, detailTags]) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);
    const item = {
      id: "tv_" + String(9384 + index).padStart(4, "0"),
      category: "Television",
      question,
      answers,
      correctAnswer,
      difficulty,
      tags: [...new Set([
        "British Television", "Soaps", "EastEnders", "2017",
        group.topic, ...group.tags, correctAnswer, ...detailTags
      ])],
      dailyEligible: true
    };
    index += 1;
    return item;
  }
));

module.exports = questions;
