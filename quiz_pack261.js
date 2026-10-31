// quiz_pack261.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2023
// 100 questions: tv_9984 to tv_10083
// All question tags are applied to the exported objects.
// Leave quiz_bank.js unchanged during the pack-by-pack workflow.

// Each line: question | correct answer | three wrong answers | difficulty | three specific tags.
const groups = [
  {
    topic: "Lola Jay And Farewell",
    tags: ["Lola Pearce", "Brain Tumour Storyline", "2023 Mitchell Family"],
    facts: `Which young mother died from a brain tumour in May?|Lola Pearce|Lola's mother Emma|Honey Mitchell|Whitney Dean|Easy|31 May 2023|Lola Death|Terminal Cancer
Which man married Lola before her death?|Jay Brown|Ben Mitchell|Callum Highway|Peter Beale|Easy|Jay Lola Wedding|January 2023|Husband
What was the first name of Lola's daughter who said goodbye at her bedside?|Lexi|Amy|Louise|Peggy|Easy|Lexi Pearce|Mother Daughter|Final Farewell
Which actress joined EastEnders as Lola's estranged mother Emma Harding?|Patsy Kensit|Kim Medcalf|Gillian Wright|Harriet Thorpe|Medium|Emma Harding|Patsy Kensit|Estranged Mother
To which seaside town did Jay take Lola for a special trip during her final weeks?|Margate|Brighton|Blackpool|Whitby|Medium|Jay Brown|Margate Visit|Final Wish
Which Mitchell was abroad seeking treatment options when Lola died?|Ben Mitchell|Phil Mitchell|Billy Mitchell|Sam Mitchell|Easy|Ben Mitchell|Medical Treatment Search|Missed Goodbye
Which family member was Lola's grandfather and grieved her death?|Billy Mitchell|Grant Mitchell|Jack Branning|Jim Branning|Easy|Billy Mitchell|Grandfather|Family Grief
What animal was seen in Albert Square during Lola's final farewell?|A fox|A cat|A swan|A dog|Medium|Lola Final Scene|Fox Appears|Symbolic Farewell
Which special piece of EastEnders music accompanied Lola's death episode?|Julia's Theme|The Wedding March|Kathy's Theme|The Archers theme|Medium|Julia's Theme|Lola Death Episode|Closing Music
Which man struggled with grief and later turned to ketamine after losing Lola?|Jay Brown|Callum Highway|Jack Branning|Martin Fowler|Easy|Jay Brown Grief|Ketamine Storyline|Bereavement`,
  },
  {
    topic: "Cindy Beale And The Knights",
    tags: ["Cindy Beale Return", "Knight Family", "2023 Queen Victoria"],
    facts: `Which Beale woman was revealed to be alive after being presumed dead for 25 years?|Cindy Beale|Jane Beale|Lucy Beale|Pauline Fowler|Easy|Cindy Return|June 2023 Reveal|Faked Death
Under what name had Cindy Beale lived with the Knight family?|Rose Knight|Sophie Browning|Jo Cotton|Katy Lewis|Easy|Rose Knight Identity|Witness Protection|Cindy Alias
Which former husband returned to Albert Square alongside Cindy?|Ian Beale|David Wicks|Phil Mitchell|George Knight|Easy|Ian Beale|Cindy Reunion|August Return
Which Queen Vic landlord had once been married to Cindy while she was known as Rose?|George Knight|Mick Carter|Alfie Moon|Max Branning|Easy|George Knight|Former Husband|Rose Identity
What were the names of George and Cindy's daughters?|Gina and Anna|Lauren and Abi|Ronnie and Roxy|Nancy and Frankie|Easy|Gina Knight|Anna Knight|Daughters
Which actor joined EastEnders as George Knight?|Colin Salmon|Richard Blackwood|Don Gilet|Danny Dyer|Medium|Colin Salmon|George Knight Actor|New Cast
Which actress played the younger Knight sister Anna?|Molly Rainford|Francesca Henry|Maisie Smith|Ellie Dadd|Medium|Molly Rainford|Anna Knight Actor|Casting
Which actress played George Knight's older daughter Gina?|Francesca Henry|Molly Rainford|Charlie Brooks|Diane Parish|Medium|Francesca Henry|Gina Knight Actor|Casting
Which woman arrived at the Queen Vic with George as his partner and Linda's mother?|Elaine Peacock|Shirley Carter|Kathy Beale|Kim Fox|Easy|Elaine Peacock|Linda Mother|Pub Partnership
Why had Cindy disappeared from her old life years earlier?|She entered witness protection|She emigrated to Australia|She joined the police|She was kidnapped by Phil|Medium|Witness Protection|Cindy Past|Identity Secret`,
  },
  {
    topic: "Lily Ricky And Baby Charli",
    tags: ["Lily Slater Pregnancy", "Ricky Branning", "2023 Teenage Parenthood"],
    facts: `Which Slater teenager learned she was pregnant at the start of the year?|Lily Slater|Hope Fowler|Bex Fowler|Amy Mitchell|Easy|Lily Pregnancy|New Years Day Discovery|Teen Mother
Who was the father of Lily Slater's baby?|Ricky Branning|Denzel Danes|Nugget Gulati|Tommy Moon|Easy|Ricky Branning|Baby Paternity|Teen Father
How old was Lily when her pregnancy was discovered?|Twelve|Fifteen|Sixteen|Eighteen|Easy|Lily Aged Twelve|January 2023|Pregnancy Announcement
Which Slater woman was Lily's mother and supported her decision?|Stacey Slater|Kat Slater|Jean Slater|Mo Harris|Easy|Stacey Slater|Lily Mother|Family Support
Which Branning was the father of baby Charli's young father Ricky?|Jack Branning|Max Branning|Derek Branning|Bradley Branning|Easy|Jack Branning|Ricky Father|Family Relationship
What first name did Lily give her baby daughter?|Charli|Peggy|Annie|Lexi|Easy|Charli Slater|Baby Name|September Birth
Which pop singer inspired the baby's first name Charli?|Charli XCX|Dua Lipa|Adele|Jessie J|Medium|Charli XCX|Namesake Singer|Pop Culture
Where did Lily give birth after going into labour in September?|At the Slater family home|At the Queen Vic|At Walford High|On an Underground train|Easy|September 2023 Birth|Home Delivery|31 Albert Square
Which older Slater helped Stacey deliver baby Charli at home?|Jean Slater|Mo Harris|Kat Slater|Belinda Slater|Easy|Jean Slater|Charli Delivery|Great Grandmother
Which Mitchell was Ricky Branning's mother and became Charli's grandmother?|Sam Mitchell|Roxy Mitchell|Sharon Watts|Louise Mitchell|Easy|Sam Mitchell|Ricky Mother|Charli Grandmother`,
  },
  {
    topic: "Stacey Theo And Freddie",
    tags: ["Stacey Slater Stalking", "Theo Hawthorne", "2023 Slater Family"],
    facts: `Which former teacher became obsessed with and stalked Stacey Slater?|Theo Hawthorne|Harvey Monroe|Reiss Colwell|Dean Wicks|Easy|Theo Stalker|Teacher|Stacey Threatened
Which online platform did Stacey use to earn money selling pictures?|Secret Cam|OnlyGames|Walford Shop|Live Square|Medium|Secret Cam|Online Content|Money Problems
Who was secretly paying for Stacey's online photographs?|Theo Hawthorne|Martin Fowler|Jack Branning|Alfie Moon|Easy|Secret Cam Client|Theo Obsession|Identity Revealed
Which teenage Slater did Theo offer to tutor as a way to become close to the family?|Lily Slater|Hope Fowler|Freddie Slater|Tommy Moon|Easy|Lily Tutor|Theo Deception|Family Access
Which actor played Theo Hawthorne?|William Ellis|Ross Boatman|Bobby Brazier|Jonny Freeman|Medium|William Ellis|Theo Actor|Casting
Which young Slater interrupted Theo when he attacked Stacey in her home?|Freddie Slater|Tommy Moon|Alfie Moon|Arthur Fowler|Easy|Freddie Saves Stacey|October Attack|Slater Home
What household object did Freddie use to strike Theo during the attack?|An iron|A frying pan|A lamp|A kettle|Easy|Freddie Attacks Theo|Iron|Self Defence
Which man did Freddie confront after learning the truth about his biological father?|Graham Foster|Billy Mitchell|Harvey Monroe|Alfie Moon|Easy|Graham Foster|Freddie Paternity|Little Mo
Which former Slater was Freddie's mother and had been assaulted by Graham Foster?|Little Mo Slater|Kat Slater|Jean Slater|Stacey Slater|Easy|Little Mo Slater|Freddie Mother|Graham Crime
What happened when Stacey first applied for a stalking protection order against Theo?|The court refused the order|Theo was immediately imprisoned|Theo was deported|The judge ordered Theo to marry Stacey|Medium|Stalking Protection Order|Court Refusal|October 2023`,
  },
  {
    topic: "Whitney Zack And Peach",
    tags: ["Whitney Dean", "Zack Hudson", "2023 Pregnancy Loss And HIV"],
    facts: `Which man was expecting a baby with Whitney Dean in 2023?|Zack Hudson|Martin Fowler|Callum Highway|Keanu Taylor|Easy|Zack Whitney Relationship|Expectant Father|Couple
What health diagnosis did Zack Hudson receive early in the year?|HIV|Diabetes|Leukaemia|Epilepsy|Easy|Zack HIV Diagnosis|Health Storyline|Stigma
Which former acquaintance told Zack he might have been exposed to HIV?|Brett Nelson|Harvey Monroe|George Knight|Ravi Gulati|Medium|Brett Nelson|HIV Exposure|Former Acquaintance
What condition were Whitney and Zack told their unborn baby had?|Edwards' syndrome|Down's syndrome|Cystic fibrosis|Spina bifida|Medium|Edwards Syndrome|Trisomy 18|Pregnancy Diagnosis
What name had Whitney and Zack chosen for their baby daughter?|Peach|Charli|Dolly|Peggy|Easy|Baby Peach|Unborn Daughter|Baby Name
What difficult decision did Whitney make after the diagnosis?|To terminate the pregnancy|To move to Australia|To give the baby up for adoption|To seek a surrogate|Easy|Pregnancy Termination|Edwards Syndrome|Family Grief
What type of tests revealed Peach's serious condition before her birth?|Prenatal screening|Eye screening|Hearing screening|Cardiac stress testing|Medium|Prenatal Tests|Foetal Diagnosis|Antenatal Care
Which charity was consulted on the pregnancy storyline alongside SOFT UK?|Antenatal Results and Choices|RNLI|Refuge|Stonewall|Medium|Antenatal Results and Choices|SOFT UK|Storyline Consultation
Who supported Whitney through the decision to end the pregnancy?|Zack Hudson|Phil Mitchell|Ian Beale|Ben Mitchell|Easy|Zack Supports Whitney|Pregnancy Loss|Couple Grief
Which Mitchell woman knew about Zack's HIV diagnosis before Whitney did?|Sam Mitchell|Louise Mitchell|Sharon Watts|Lola Pearce|Medium|Sam Mitchell|Zack Secret|HIV Disclosure`,
  },
  {
    topic: "Suki Eve Nish And Ravi",
    tags: ["Suki Eve Relationship", "Nish Panesar Control", "2023 Panesar Conflict"],
    facts: `Which woman was secretly in love with Suki Panesar despite Suki's marriage?|Eve Unwin|Stacey Slater|Denise Fox|Nina Gupta|Easy|Eve Unwin|Secret Romance|Suki Panesar
Which controlling husband discovered Suki and Eve's relationship?|Nish Panesar|Ravi Gulati|Kheerat Panesar|Vinny Panesar|Easy|Nish Panesar|Affair Discovered|Abuse
How did Nish discover footage of Suki and Eve kissing?|On CCTV footage|On a television quiz|On a holiday video|In a newspaper|Easy|CCTV Footage|Affair Evidence|Minute Mart
Where did Nish lure Eve before attacking her?|Walford East|The Queen Vic cellar|The Arches garage|The police station|Easy|Walford East|Nish Attacks Eve|Lured By Text
Which man was ordered to kill Eve and bury her in woodland?|Ravi Gulati|Kheerat Panesar|Phil Mitchell|Jack Branning|Easy|Ravi Gulati|Woodland Threat|Nish Orders Murder
What did Ravi secretly do instead of murdering Eve?|Let her escape|Hand her to the police|Hide her at the Queen Vic|Send her to prison|Easy|Ravi Spares Eve|Fake Death|Escape
Which two men were arrested over Eve's supposed murder in December?|Nish and Ravi|Phil and Ben|Jack and Max|Ian and Peter|Easy|Nish Ravi Arrest|Eve Alive|False Murder Allegation
Which actress played Eve Unwin during the romance storyline?|Heather Peace|Lacey Turner|Balvinder Sopal|Diane Parish|Medium|Heather Peace|Eve Actor|Casting
Which Panesar son learned that Eve was still alive and confronted Suki?|Vinny Panesar|Jags Panesar|Kheerat Panesar|Nish Panesar|Medium|Vinny Panesar|Eve Survival|Family Secret
What did Suki and Eve plan to do together in the run-up to Christmas?|Leave Walford|Buy the Queen Vic|Marry Nish and Ravi|Open a garage|Easy|Plan To Flee|Christmas 2023|Secret Couple`,
  },
  {
    topic: "Keanu Sharon And Staged Kidnap",
    tags: ["Keanu Taylor", "Sharon Watts", "2023 Albie Kidnapping Scam"],
    facts: `Which Taylor returned to Walford and rekindled a romance with Sharon?|Keanu Taylor|Keegan Baker|Chatham Taylor|Riley Taylor|Easy|Keanu Returns|Sharon Romance|2023 Reunion
Which young boy was falsely reported kidnapped in the autumn?|Albie Watts|Tommy Moon|Arthur Fowler|Raymond Fox|Easy|Albie Watts|Staged Abduction|November 2023
Who secretly arranged Albie's disappearance?|Keanu Taylor|Phil Mitchell|Ben Mitchell|Jack Branning|Easy|Keanu Stages Kidnap|Custody Plot|Deception
Which woman helped Keanu hide Albie during the fake kidnapping?|Karen Taylor|Bernadette Taylor|Sharon Watts|Sam Mitchell|Easy|Karen Taylor|Kidnap Accomplice|Mother Son Plot
How much ransom money did the fake kidnappers demand?|£50,000|£5,000|£500|£500,000|Medium|Ransom Amount|Fifty Thousand Pounds|Fake Note
Which Mitchell supplied the money for the supposed ransom?|Phil Mitchell|Billy Mitchell|Ben Mitchell|Grant Mitchell|Easy|Phil Pays Ransom|Marked Money|Albie Rescue
Where was the missing boy actually staying?|With a relative of Karen's|At a hotel in France|At Walford police station|Inside the Queen Vic cellar|Easy|Albie Hidden|Karen Family|False Kidnapping
Where did Phil discover the marked ransom money after the deception?|Under Karen's bed|In Sharon's freezer|At the Arches|In a suitcase at the Vic|Medium|Phil Finds Money|Kidnap Exposed|Karen Bedroom
Which man left Walford with Karen and her grandchildren after the scam was exposed?|Mitch Baker|Keanu Taylor|Harvey Monroe|Howie Danes|Easy|Mitch Baker Exit|December 2023|Taylor Departure
Who was revealed to be Albie's biological father rather than Keanu at the end of 2023?|Phil Mitchell|Zack Hudson|Ian Beale|Martin Fowler|Easy|Albie Paternity|Phil Mitchell|Christmas Secret`,
  },
  {
    topic: "Kathy Rocky And Cafe Fire",
    tags: ["Kathy Beale", "Rocky Cotton", "2023 Cafe Arson"],
    facts: `Which Beale woman married Rocky Cotton in summer 2023?|Kathy Beale|Cindy Beale|Jane Beale|Sharon Watts|Easy|Kathy Rocky Wedding|Summer Marriage|2023 Ceremony
Who was revealed to be Rocky Cotton's estranged wife before he could marry Kathy?|Jo Cotton|Dot Branning|Sandy Gibson|Rose Cotton|Easy|Jo Cotton|Previous Marriage|Bigamy Risk
Which actress played the outspoken Jo Cotton?|Vicki Michelle|Harriet Thorpe|Patsy Kensit|Diane Parish|Medium|Vicki Michelle|Jo Cotton Actor|Casting
Which actor played Rocky Cotton?|Brian Conley|Ross Boatman|Jonny Freeman|Colin Salmon|Medium|Brian Conley|Rocky Actor|Casting
What financial problem led Rocky to plot an insurance scam?|Gambling debts|A huge parking fine|An unpaid university loan|A stolen inheritance|Easy|Rocky Gambling|Money Problems|Insurance Fraud
Which Walford business did Rocky set on fire to claim insurance money?|Kathy's cafe|The Queen Vic|The Arches garage|The Prince Albert|Easy|Cafe Fire|Insurance Scam|Arson
Which two Beale family members became trapped in the burning cafe?|Bobby and Peter|Ian and Steven|Ben and Phil|Louie and Arthur|Easy|Bobby Beale|Peter Beale|Fire Victims
Which Beale grandson was left unconscious after the cafe blaze?|Peter Beale|Bobby Beale|Ben Mitchell|Louie Beale|Easy|Peter Hospitalised|Cafe Fire Injuries|Explosion
Who was initially arrested in connection with the cafe fire rather than the real culprit?|Kathy Beale|Suki Panesar|Cindy Beale|Elaine Peacock|Easy|Kathy Wrongly Arrested|Fire Investigation|Rocky Secret
What happened when gas ignited during the cafe fire?|An explosion|A flood|A power cut across London|A roof collapse at the Vic|Easy|Cafe Explosion|Gas Ignition|November 2023`,
  },
  {
    topic: "Other Walford Stories",
    tags: ["2023 Character Returns", "Walford Relationships", "EastEnders Family Drama"],
    facts: `Which familiar Walford resident was diagnosed with prostate cancer in 2023?|Alfie Moon|Mick Carter|George Knight|Ian Beale|Easy|Alfie Prostate Cancer|2023 Diagnosis|Moon Family
Which woman initially supported Alfie as he faced his prostate cancer diagnosis?|Linda Carter|Janine Butcher|Cindy Beale|Ruby Allen|Easy|Linda Helps Alfie|Cancer Support|Carter Friendship
Which man returned to Walford despite Linda Carter's accusations that he had raped her?|Dean Wicks|Johnny Carter|Lee Carter|Stuart Highway|Easy|Dean Wicks Return|October 2023|Linda Trauma
Which actress played Elaine Peacock after the character was recast in 2023?|Harriet Thorpe|Maria Friedman|Kellie Bright|Vicki Michelle|Medium|Harriet Thorpe|Elaine Recast|Casting
Which young Beale became involved with Anna Knight during 2023?|Bobby Beale|Peter Beale|Ian Beale|Ben Mitchell|Easy|Bobby Anna Romance|Knight Beale Connection|Dating
Which new arrivals were Ravi Gulati's daughter and her mother?|Avani and Priya|Gina and Anna|Lily and Stacey|Annie and Nancy|Easy|Avani Nandra Hart|Priya Nandra Hart|Ravi Family
Who was Ravi Gulati's teenage son living in Walford?|Nugget Gulati|Denzel Danes|Tommy Moon|Ricky Branning|Easy|Nugget Gulati|Ravi Father|Teenager
Which man suffered an accident after using ketamine to cope with Lola's death?|Jay Brown|Jack Branning|Callum Highway|Peter Beale|Easy|Jay Ketamine|Grief Crisis|Road Accident
Which woman resembled Lola and offered Jay companionship as he grieved?|Nadine|Jo Cotton|Emma Harding|Priya Nandra-Hart|Medium|Nadine Lookalike|Jay Brown|Bereavement
Which Mitchell man struggled with an eating disorder after Lola's diagnosis?|Ben Mitchell|Phil Mitchell|Billy Mitchell|Ricky Branning|Easy|Ben Bulimia|Eating Disorder|2023 Health Storyline`,
  },
  {
    topic: "The Six Christmas 2023",
    tags: ["The Six", "Queen Victoria Christmas Murder", "25 December 2023"],
    facts: `Which six women stood over a mysterious body in the show's February flash-forward?|Linda, Sharon, Denise, Kathy, Stacey and Suki|Kat, Jean, Mo, Lily, Eve and Ruby|Cindy, Gina, Anna, Elaine, Whitney and Chelsea|Karen, Bernadette, Louise, Lola, Sam and Mel|Easy|Six Women|February Flash Forward|Christmas Mystery
Which anniversary was being marked when EastEnders aired the flash-forward scene?|The 38th anniversary|The 30th anniversary|The 40th anniversary|The 25th anniversary|Medium|38th Anniversary|Flash Forward Episode|February 2023
Who was wearing a wedding dress in the flash-forward?|Sharon Watts|Linda Carter|Denise Fox|Kathy Beale|Easy|Sharon Bride|Wedding Dress|Flash Forward Clue
Which man did Denise strike with a champagne bottle on Christmas Day?|Nish Panesar|Keanu Taylor|Dean Wicks|Phil Mitchell|Easy|Denise Hits Nish|Champagne Bottle|Nish Survives
Did Nish Panesar die after Denise's blow on Christmas Day?|No, he survived|Yes, immediately|Yes, at the hospital that night|He was already dead|Easy|Nish Survived|Christmas Cliffhanger|Injured Not Killed
Which man was actually killed in the Queen Vic on Christmas Day?|Keanu Taylor|Nish Panesar|Rocky Cotton|Dean Wicks|Easy|Keanu Death|Christmas Victim|Murder Reveal
Who stabbed Keanu Taylor while trying to save Sharon?|Linda Carter|Denise Fox|Stacey Slater|Suki Panesar|Easy|Linda Kills Keanu|Protects Sharon|Self Defence
What kitchen implement was used to stab Keanu?|A meat thermometer|A bread knife|A corkscrew|A cheese grater|Medium|Meat Thermometer|Keanu Fatal Wound|Kitchen Weapon
Where did the women initially hide Keanu's body after the murder?|The burned-out cafe|The River Thames|The Arches garage|The Queen Vic cellar|Easy|Cafe Body Hidden|Cover Up|December 2023
Which man was found unconscious but alive while the women tried to cover up Keanu's death?|Nish Panesar|Phil Mitchell|Dean Wicks|Ben Mitchell|Easy|Nish Unconscious|Two Victims|Christmas Cover Up`,
  }
];

let index = 0;
const questions = groups.flatMap(group => group.facts.trim().split("\n").map(line => {
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, tag1, tag2, tag3] = line.split("|");
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  const item = {
    id: "tv_" + String(9984 + index).padStart(4, "0"),
    category: "Television",
    question,
    answers,
    correctAnswer,
    difficulty,
    tags: [...new Set([
      "British Television", "Soaps", "EastEnders", "2023",
      group.topic, ...group.tags, correctAnswer, tag1, tag2, tag3
    ])],
    dailyEligible: true
  };
  index += 1;
  return item;
}));

module.exports = questions;
