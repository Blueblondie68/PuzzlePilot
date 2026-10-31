// quiz_pack253.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2015
// 100 questions: tv_9184 to tv_9283
// Complete per-question tags from creation.
// Leave quiz_bank.js unchanged until the agreed bank connection.

const groups = [
  {
    topic: "Lucy Murder Revealed",
    tags: ["Lucy Beale", "Bobby Beale", "Jane Beale", "Ian Beale", "30th Anniversary Live Week"],
    facts: [
      ["Who was finally revealed to have killed Lucy Beale?", "Bobby Beale", ["Jane Beale", "Max Branning", "Ben Mitchell"], "Easy", ["February 2015 Killer Reveal", "Younger Brother"]],
      ["What object did Bobby use to strike Lucy during the fatal argument?", "Her jewellery box", ["A kitchen rolling pin", "A metal trophy", "A glass vase"], "Easy", ["Jewellery Box Weapon", "Flashback Episode"]],
      ["Which member of the Beale household secretly moved Lucy's body to Walford Common?", "Jane Beale", ["Ian Beale", "Peter Beale", "Cindy Williams"], "Easy", ["Jane Conceals Death", "Walford Common Cover Up"]],
      ["Where had Lucy actually been fatally injured before her body was moved?", "At the Beale family home", ["At the Arches garage", "At LB Lettings", "In the Queen Vic cellar"], "Easy", ["Beale House Crime Scene", "2014 Flashback Revealed 2015"]],
      ["Which couple's wedding provided the setting for the 30th-anniversary revelations?", "Ian and Jane Beale's", ["Phil and Sharon's", "Mick and Linda's", "Martin and Stacey's"], "Easy", ["Ian Jane Wedding", "February 2015"]],
      ["Which month marked EastEnders' 30th anniversary broadcasts?", "February", ["January", "April", "December"], "Easy", ["30th Anniversary", "Broadcast Month"]],
      ["Which episode revisited Good Friday 2014 to show the hours before Lucy's death?", "A special flashback episode", ["A courtroom documentary", "An animated episode", "A Christmas special"], "Medium", ["Flashback Format", "19 February 2015"]],
      ["Which young actor played Bobby Beale during the killer revelation?", "Eliot Carrington", ["Clay Milner Russell", "Alex Francis", "Thomas Law"], "Medium", ["Eliot Carrington", "2015 Bobby Casting"]],
      ["What did Jane falsely lead Bobby to believe about Lucy after their argument?", "That Lucy had left the house alive", ["That Lucy had emigrated", "That Lucy had been kidnapped", "That Lucy was hiding upstairs"], "Medium", ["Bobby Misled", "Jane Protects Child"]],
      ["On which date did the fully live anniversary aftermath episode air?", "20 February 2015", ["1 January 2015", "19 April 2015", "25 December 2015"], "Medium", ["Fully Live Friday Episode", "Anniversary Broadcast"]]
    ]
  },
  {
    topic: "Max And The Beales",
    tags: ["Max Branning", "Lucy Beale", "Lauren Branning", "Peter Beale", "2015 Wrongful Conviction"],
    facts: [
      ["Which Branning was wrongly convicted of murdering Lucy Beale?", "Max Branning", ["Jack Branning", "Joey Branning", "Derek Branning"], "Easy", ["Max Wrongfully Convicted", "September Trial"]],
      ["What verdict did the jury return in Max's murder trial?", "Guilty", ["Not guilty", "No verdict", "Case dismissed"], "Easy", ["Max Guilty Verdict", "Courtroom Drama"]],
      ["How did Max react immediately after the jury delivered its verdict?", "He escaped from the dock", ["He confessed to the murder", "He collapsed unconscious", "He attacked Jane in court"], "Medium", ["Max Flees Court", "Courtroom Escape"]],
      ["Which detective did Max punch while trying to escape custody?", "Cameron Bryant", ["Samantha Keeble", "Emma Summerhayes", "Jack Branning"], "Medium", ["DS Cameron Bryant", "Courtroom Assault"]],
      ["What prison sentence was Max eventually given for the murder he did not commit?", "Twenty-one years", ["Seven years", "Ten years", "A suspended sentence"], "Medium", ["Max Twenty One Years", "Miscarriage Of Justice"]],
      ["Which friend of Lucy discovered Bobby's secret and wrote a letter to Jane?", "Lauren Branning", ["Abi Branning", "Whitney Dean", "Lola Pearce"], "Easy", ["Lauren Letter To Jane", "Hidden Murder Truth"]],
      ["Which couple left Walford for New Zealand shortly after the anniversary revelations?", "Peter Beale and Lauren Branning", ["Max and Tanya Branning", "Ben Mitchell and Abi Branning", "Ian and Jane Beale"], "Easy", ["Peter Lauren New Zealand", "February Exit"]],
      ["What first name did Peter and Lauren give their son born later in 2015?", "Louie", ["Bobby", "Oscar", "Matthew"], "Easy", ["Louie Beale", "New Zealand Birth"]],
      ["Which police detective who had investigated Lucy's murder died after being struck by a car?", "Emma Summerhayes", ["Samantha Keeble", "Marsden", "Cameron Bryant"], "Medium", ["Emma Death New Year", "Police Investigator"]],
      ["Which member of the Beale family tried to protect Bobby despite knowing he had killed Lucy?", "Ian Beale", ["Steven Beale", "David Wicks", "Pauline Fowler"], "Easy", ["Ian Protects Bobby", "Family Concealment"]]
    ]
  },
  {
    topic: "Kathy And Gavin",
    tags: ["Kathy Beale", "Gavin Sullivan", "Phil Mitchell", "Sharon Mitchell", "2015 Return From The Dead"],
    facts: [
      ["Which original EastEnders character made a surprise return after being presumed dead?", "Kathy Beale", ["Pauline Fowler", "Angie Watts", "Pat Evans"], "Easy", ["Kathy Shocking Return", "February Anniversary"]],
      ["Which actress returned to portray Kathy Beale?", "Gillian Taylforth", ["Letitia Dean", "Pam St Clement", "Wendy Richard"], "Easy", ["Gillian Taylforth", "Original Cast Member"]],
      ["Which Mitchell met Kathy secretly at Canary Wharf during the anniversary week?", "Phil Mitchell", ["Grant Mitchell", "Billy Mitchell", "Ben Mitchell"], "Easy", ["Phil Kathy Secret Meeting", "Canary Wharf"]],
      ["In which country had Kathy supposedly died in a road accident years earlier?", "South Africa", ["Australia", "Spain", "New Zealand"], "Medium", ["South Africa Fake Death", "2006 Backstory"]],
      ["What deception explained how Kathy had apparently died?", "Her death had been faked", ["She had a secret identical twin", "She had suffered amnesia", "She had entered witness protection"], "Easy", ["Faked Death", "Insurance Scheme"]],
      ["Which controlling man was Kathy's husband when she reappeared?", "Gavin Sullivan", ["Buster Briggs", "Les Coker", "Carl White"], "Easy", ["Gavin Kathy Marriage", "Coercive Relationship"]],
      ["Which actor played Gavin Sullivan?", "Paul Nicholas", ["Larry Lamb", "David Essex", "Timothy West"], "Medium", ["Paul Nicholas", "Gavin Casting"]],
      ["Which woman discovered that Gavin Sullivan was her biological father?", "Sharon Mitchell", ["Kathy Beale", "Linda Carter", "Denise Fox"], "Easy", ["Sharon Biological Father", "Halloween Revelation"]],
      ["What familiar greeting did Gavin use when revealing his connection to Sharon?", "Hello, princess", ["Get outta my pub", "You ain't my mother", "Leave it out"], "Medium", ["Hello Princess", "Den Watts Connection"]],
      ["Which of Kathy's sons was stunned to discover she was still alive?", "Ian Beale", ["Bobby Beale", "Peter Beale", "Martin Fowler"], "Easy", ["Ian Reunites With Kathy", "Mother Son Return"]]
    ]
  },
  {
    topic: "Nick Ronnie And Dot",
    tags: ["Nick Cotton", "Dot Branning", "Ronnie Mitchell", "Charlie Cotton", "2015 New Year Crash And Death"],
    facts: [
      ["Which couple married on New Year's Day before their celebration was shattered by a crash?", "Ronnie Mitchell and Charlie Cotton", ["Phil Mitchell and Sharon", "Mick Carter and Linda", "Ben Mitchell and Abi"], "Easy", ["Ronnie Charlie Wedding", "1 January 2015"]],
      ["Who sabotaged the brakes of the car Ronnie was travelling in?", "Nick Cotton", ["Phil Mitchell", "Charlie Cotton", "Vincent Hubbard"], "Easy", ["Nick Brake Sabotage", "Wedding Day Crash"]],
      ["What medical condition was Ronnie left in after the crash?", "A coma", ["Amnesia", "Permanent blindness", "Paralysis from the waist down"], "Easy", ["Ronnie In Coma", "Crash Injuries"]],
      ["What first name was given to Ronnie and Charlie's baby son?", "Matthew", ["James", "Richard", "Oscar"], "Easy", ["Matthew Cotton Birth", "New Years Baby"]],
      ["Which long-running villain died after taking heroin while hiding in an abandoned house?", "Nick Cotton", ["Carl White", "Michael Moon", "Archie Mitchell"], "Easy", ["Nick Fatal Overdose", "February Death"]],
      ["Which woman obtained the heroin that Nick later used before his death?", "Dot Branning", ["Ronnie Mitchell", "Sharon Mitchell", "Roxy Mitchell"], "Medium", ["Dot Supplies Heroin", "Nick Withdrawal"]],
      ["Whose death from the original 1985 episode did Nick confess responsibility for shortly before dying?", "Reg Cox", ["Arthur Fowler", "Den Watts", "Ethel Skinner"], "Medium", ["Reg Cox Murder Confession", "30 Year Link"]],
      ["Which three residents discovered Nick's body in the anniversary recreation of the show's opening?", "Stacey, Martin and Kush", ["Ian, Sharon and Phil", "Dot, Charlie and Ronnie", "Kat, Alfie and Mo"], "Medium", ["Original Opening Recreated", "Anniversary Discovery"]],
      ["What crime did Dot face prosecution for following Nick's death?", "Manslaughter", ["Armed robbery", "Perjury", "Arson"], "Medium", ["Dot Manslaughter", "Police Confession"]],
      ["Which Mitchell sister became involved with Charlie while Ronnie was in a coma?", "Roxy Mitchell", ["Sam Mitchell", "Louise Mitchell", "Peggy Mitchell"], "Easy", ["Charlie Roxy Affair", "Ronnie Marriage Betrayal"]]
    ]
  },
  {
    topic: "Shabnam Kush And Jade",
    tags: ["Shabnam Masood", "Kush Kazemi", "Zaair Kazemi", "Jade Green", "2015 Stillbirth And Family"],
    facts: [
      ["Which couple faced the heartbreaking loss of their unborn baby in the summer?", "Shabnam Masood and Kush Kazemi", ["Stacey and Martin", "Kim and Vincent", "Linda and Mick"], "Easy", ["Shabnam Kush Stillbirth", "August 2015"]],
      ["What name did Shabnam and Kush give their stillborn son?", "Zaair", ["Kamil", "Arthur", "Yasmin"], "Medium", ["Zaair Kazemi", "31 August Birth"]],
      ["Which charity worked with EastEnders on the stillbirth storyline?", "Sands", ["Mind", "Shelter", "Cancer Research UK"], "Medium", ["Sands Charity", "Storyline Research"]],
      ["Which Masood family member supported Shabnam at hospital when she learnt her baby had died?", "Masood Ahmed", ["Tamwar Masood", "AJ Ahmed", "Syed Masood"], "Easy", ["Masood Supports Daughter", "Hospital Diagnosis"]],
      ["Which couple married in November after grieving for their son?", "Shabnam and Kush", ["Stacey and Martin", "Roxy and Dean", "Mick and Linda"], "Easy", ["Kush Shabnam Wedding", "November 2015"]],
      ["Which actress joined the soap as Kush's mother Carmel Kazemi?", "Bonnie Langford", ["Nina Wadia", "Gillian Taylforth", "Annette Badland"], "Medium", ["Bonnie Langford", "Carmel Introduction"]],
      ["Which child did Shabnam reveal she had given up when she was younger?", "Jade", ["Yasmin", "Lexi", "Scarlett"], "Easy", ["Secret Daughter Jade", "Past Pregnancy"]],
      ["Who was the biological father of Shabnam's daughter Jade?", "Dean Wicks", ["Kush Kazemi", "Syed Masood", "Tamwar Masood"], "Easy", ["Dean Jade Father", "Parentage Revelation"]],
      ["What was Jade's birth name before she was known as Jade Green?", "Roya", ["Roxy", "Rosie", "Rania"], "Medium", ["Roya Masood", "Foster Family Name"]],
      ["Which inherited condition did Jade have that required regular breathing treatments?", "Cystic fibrosis", ["Haemophilia", "Type 1 diabetes", "Asthma alone"], "Medium", ["Jade Cystic Fibrosis", "Nebuliser Treatment"]]
    ]
  },
  {
    topic: "Stacey Martin And Arthur",
    tags: ["Stacey Slater", "Martin Fowler", "Kush Kazemi", "Arthur Fowler", "Christmas 2015 Paternity Secret"],
    facts: [
      ["Which market trader became Stacey Slater's partner in 2015?", "Martin Fowler", ["Mark Fowler", "Arthur Fowler Sr", "Steven Beale"], "Easy", ["Martin Stacey Romance", "Fowler Return"]],
      ["Which actor took over the role of Martin Fowler during this period?", "James Bye", ["James Alexandrou", "Todd Carty", "David Witts"], "Medium", ["James Bye", "Martin Recast"]],
      ["Who was the biological father of Stacey's baby born at Christmas?", "Kush Kazemi", ["Martin Fowler", "Ryan Malloy", "Max Branning"], "Easy", ["Kush Baby Father", "Paternity Secret"]],
      ["Which man believed he was the father of Stacey's baby and helped raise him?", "Martin Fowler", ["Kush Kazemi", "Alfie Moon", "Phil Mitchell"], "Easy", ["Martin Unaware", "Arthur Fatherhood"]],
      ["What name was given to Stacey's son born on Christmas Eve?", "Arthur", ["Bradley", "James", "Zaair"], "Easy", ["Arthur Fowler Birth", "Christmas Eve Baby"]],
      ["Which family member was baby Arthur named after?", "Martin's father", ["Kush's brother", "Stacey's grandfather", "Martin's uncle"], "Easy", ["Arthur Fowler Sr", "Namesake"]],
      ["Where did Stacey go into labour with Arthur?", "At Lily's nativity play", ["In the Queen Vic cellar", "On a bus", "In the launderette"], "Easy", ["Nativity Play Labour", "Community Centre"]],
      ["Which Carter relative helped deliver Stacey's baby during the nativity?", "Aunt Babe", ["Linda Carter", "Tina Carter", "Shirley Carter"], "Medium", ["Babe Delivers Arthur", "Community Centre Birth"]],
      ["Which woman began to suspect Kush's connection to Arthur after watching him hold the baby?", "Shabnam Masood", ["Carmel Kazemi", "Kat Moon", "Jean Slater"], "Medium", ["Shabnam Suspects Paternity", "Christmas 2015"]],
      ["Which newcomer introduced himself as Stacey's previously unknown half-brother at Christmas?", "Kyle", ["Ryan", "Dexter", "Joey"], "Easy", ["Kyle Slater Reveal", "Brian Slater Secret Family"]]
    ]
  },
  {
    topic: "Carters In 2015",
    tags: ["Mick Carter", "Linda Carter", "Stan Carter", "Dean Wicks", "2015 Carter Family Developments"],
    facts: [
      ["Which Carter family elder died after his battle with prostate cancer?", "Stan Carter", ["Buster Briggs", "Mick Carter", "Les Coker"], "Easy", ["Stan Death April", "Cancer Storyline"]],
      ["Which celebrated actor played Stan Carter in his final episodes?", "Timothy West", ["David Essex", "Larry Lamb", "Paul Nicholas"], "Medium", ["Timothy West", "Stan Actor"]],
      ["What name did Mick and Linda give their baby son born in May?", "Ollie", ["Johnny", "Lee", "Tommy"], "Easy", ["Ollie Carter Birth", "May 2015"]],
      ["What was the first name of the character whose blood group helped reassure Mick about Ollie's paternity?", "Dean", ["Stan", "Johnny", "Lee"], "Medium", ["Dean Blood Group Comparison", "Ollie Paternity"]],
      ["Which man's blood group ruled him out as Ollie's biological father?", "Dean Wicks", ["Mick Carter", "Buster Briggs", "Lee Carter"], "Medium", ["Dean Excluded As Father", "Paternity Testing"]],
      ["Which actress played Linda's mother Elaine Peacock when she visited the Queen Vic?", "Maria Friedman", ["Kellie Bright", "Linda Henry", "Annette Badland"], "Medium", ["Maria Friedman", "Elaine Peacock"]],
      ["Which woman was Dean Wicks dating by the end of the year?", "Roxy Mitchell", ["Sharon Mitchell", "Stacey Slater", "Whitney Dean"], "Easy", ["Dean Roxy Relationship", "Roxy Boyfriend"]],
      ["Whom did Dean attempt to sexually assault after she tried to end their relationship?", "Roxy Mitchell", ["Linda Carter", "Shabnam Masood", "Denise Fox"], "Easy", ["Dean Attempts Rape Roxy", "December Assault"]],
      ["Which woman found Dean attacking Roxy and intervened?", "Shirley Carter", ["Linda Carter", "Ronnie Mitchell", "Babe Smith"], "Easy", ["Shirley Stops Dean", "Mother Sees Attack"]],
      ["In which year did Mick and Linda's wedding take place after their 2015 preparations?", "2016", ["2015", "2014", "2017"], "Medium", ["New Years Day 2016", "Wedding Year Boundary"]]
    ]
  },
  {
    topic: "Hubbards And Fatboy",
    tags: ["Vincent Hubbard", "Kim Fox", "Claudette Hubbard", "Fatboy Chubb", "Christmas 2015 Feud"],
    facts: [
      ["Which Walford newcomer was played by comedian Richard Blackwood?", "Vincent Hubbard", ["Kush Kazemi", "Dean Wicks", "Paul Coker"], "Easy", ["Richard Blackwood", "Vincent Casting"]],
      ["Which Fox sister was Vincent Hubbard's wife?", "Kim Fox", ["Denise Fox", "Chelsea Fox", "Libby Fox"], "Easy", ["Kim Vincent Marriage", "Fox Hubbard Family"]],
      ["What first name did Kim and Vincent give their daughter born during anniversary week?", "Pearl", ["Scarlett", "Lily", "Lexi"], "Easy", ["Pearl Fox Hubbard Birth", "February Baby"]],
      ["Where did Kim give birth to Pearl during the 30th-anniversary episodes?", "The Queen Vic toilets", ["The Arches office", "The café kitchen", "Albert Square Gardens"], "Medium", ["Pearl Pub Birth", "Anniversary Week"]],
      ["Which woman was revealed as Vincent Hubbard's mother?", "Claudette Hubbard", ["Cora Cross", "Pam Coker", "Denise Fox"], "Easy", ["Claudette Vincent Mother", "Family History"]],
      ["Which actress played Claudette Hubbard?", "Ellen Thomas", ["Tameka Empson", "Diane Parish", "Lin Blakley"], "Medium", ["Ellen Thomas", "Claudette Casting"]],
      ["Which family was caught in a dangerous feud with the Hubbards?", "The Mitchells", ["The Beales", "The Masoods", "The Slaters"], "Easy", ["Hubbard Mitchell Feud", "Christmas Escalation"]],
      ["Which Walford resident known as Fatboy died after being trapped in a crushed car?", "Arthur Chubb", ["Jay Brown", "Billy Mitchell", "Charlie Cotton"], "Easy", ["Fatboy Death", "Car Crusher"]],
      ["Which man discovered Fatboy's necklace after the car had been crushed?", "Vincent Hubbard", ["Phil Mitchell", "Ian Beale", "Martin Fowler"], "Medium", ["Vincent Discovers Fatboy", "Scrapyard Reveal"]],
      ["What story did Vincent tell Dot to explain Fatboy's sudden disappearance?", "He had taken a DJ job in Austria", ["He had gone to prison", "He had married in Scotland", "He was working on a ship"], "Medium", ["Fatboy Austria Cover Story", "Dot Misled"]]
    ]
  },
  {
    topic: "Kat Alfie And Departures",
    tags: ["Kat Moon", "Alfie Moon", "Carol Jackson", "Lola Pearce", "2015 Walford Departures"],
    facts: [
      ["Which Slater visited the convent where she had given birth to Zoe many years before?", "Kat Moon", ["Stacey Slater", "Mo Harris", "Belinda Slater"], "Easy", ["Kat Revisits Convent", "May 2015"]],
      ["Which veteran comedy actress played Sister Ruth at Kat's former convent?", "June Whitfield", ["June Brown", "Barbara Windsor", "Pam St Clement"], "Medium", ["June Whitfield", "Sister Ruth Casting"]],
      ["What secret did the convent's birth records reveal about Kat's delivery years earlier?", "She had given birth to twins", ["She had been adopted", "Zoe was not her daughter", "Her baby had been born abroad"], "Easy", ["Kat Secret Twin Son", "Convent Birth Records"]],
      ["Which couple won a large sum of money on a scratch card before leaving Walford?", "Kat and Alfie Moon", ["Ian and Jane Beale", "Phil and Sharon", "Mick and Linda"], "Easy", ["Kat Alfie Scratchcard", "May Departure"]],
      ["How much did Kat and Alfie win on their scratch card?", "One million pounds", ["Ten thousand pounds", "One hundred thousand pounds", "Five million pounds"], "Medium", ["Million Pound Jackpot", "Lottery Win"]],
      ["Which Jackson matriarch left Walford on a motorcycle in October?", "Carol Jackson", ["Bianca Butcher", "Sonia Fowler", "Whitney Dean"], "Easy", ["Carol Motorcycle Exit", "October 2015"]],
      ["Whose old motorcycle did Carol take when she decided to leave the Square?", "Jim Branning's", ["Phil Mitchell's", "Max Branning's", "David Wicks's"], "Medium", ["Jim Motorcycle", "Carol Independence"]],
      ["Which Mitchell granddaughter left Walford for Newcastle with her daughter?", "Lola Pearce", ["Amy Mitchell", "Roxy Mitchell", "Louise Mitchell"], "Easy", ["Lola Newcastle Exit", "Lexi Moves Away"]],
      ["Which little girl left with Lola Pearce?", "Lexi", ["Lily", "Amy", "Pearl"], "Easy", ["Lexi Pearce Departure", "Lola Daughter"]],
      ["Which long-serving Branning elder died off-screen in April 2015?", "Jim Branning", ["Max Branning", "Jack Branning", "Derek Branning"], "Easy", ["Jim Branning Death", "April 2015"]]
    ]
  },
  {
    topic: "Cokers Ben And Other Faces",
    tags: ["Paul Coker", "Pam Coker", "Les Coker", "Ben Mitchell", "2015 New And Returning Residents"],
    facts: [
      ["Which young grandson of Pam and Les Coker arrived in Walford?", "Paul Coker", ["Peter Beale", "Jay Brown", "Johnny Carter"], "Easy", ["Paul Coker Debut", "Funeral Directors Family"]],
      ["Which actor first played Paul Coker?", "Jonny Labey", ["Harry Reid", "James Bye", "Ben Hardy"], "Medium", ["Jonny Labey", "Paul Actor"]],
      ["Which Mitchell became romantically involved with Paul Coker while dating Abi?", "Ben Mitchell", ["Billy Mitchell", "Phil Mitchell", "Jay Brown"], "Easy", ["Ben Paul Romance", "Secret Relationship"]],
      ["Which Branning woman was Ben dating when he began seeing Paul?", "Abi Branning", ["Lauren Branning", "Alice Branning", "Tanya Branning"], "Easy", ["Abi Ben Relationship", "Love Triangle"]],
      ["What was the name of Les Coker's female alter ego revealed in 2015?", "Christine", ["Christine-Marie", "Patricia", "Louise"], "Medium", ["Les As Christine", "Cross Dressing Storyline"]],
      ["Which funeral business was run by Pam and Les Coker?", "Coker & Sons", ["Mitchell & Sons", "Moon & Sons", "LB Lettings"], "Easy", ["Coker And Sons", "Undertakers"]],
      ["Which relative of Les and Pam ran the flower stall on the market?", "Paul Coker", ["Billy Mitchell", "Charlie Cotton", "Kush Kazemi"], "Easy", ["Paul Flower Stall", "Market Work"]],
      ["Which actress played undertaker Les Coker's wife Pam?", "Lin Blakley", ["Ann Mitchell", "Ellen Thomas", "Gillian Wright"], "Medium", ["Lin Blakley", "Pam Casting"]],
      ["Which former Mitchell wife returned to Albert Square and reunited with Billy towards Christmas?", "Honey Mitchell", ["Little Mo Mitchell", "Kate Mitchell", "Lisa Fowler"], "Easy", ["Honey Returns", "Billy Reconciliation"]],
      ["Which actress reprised the role of Honey Mitchell?", "Emma Barton", ["Samantha Womack", "Kacey Ainsworth", "Rita Simons"], "Medium", ["Emma Barton", "Honey Casting"]]
    ]
  }
];

let index = 0;
const questions = groups.flatMap(group => group.facts.map(
  ([question, correctAnswer, wrongAnswers, difficulty, detailTags]) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);
    const item = {
      id: "tv_" + String(9184 + index).padStart(4, "0"),
      category: "Television",
      question,
      answers,
      correctAnswer,
      difficulty,
      tags: [...new Set([
        "British Television", "Soaps", "EastEnders", "2015",
        group.topic, ...group.tags, correctAnswer, ...detailTags
      ])],
      dailyEligible: true
    };
    index += 1;
    return item;
  }
));

module.exports = questions;
