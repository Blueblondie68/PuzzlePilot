// quiz_pack263.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2025
// 100 questions: tv_10184 to tv_10283
// All tags are applied to the exported question objects.
// Leave quiz_bank.js unchanged until the EastEnders expansion is finished.

// Each line: question | correct answer | three wrong answers | difficulty | three specific tags.
const groups = [
  {
    topic: "Fortieth Anniversary And Queen Vic Disaster",
    tags: ["40th Anniversary", "Queen Victoria Explosion", "February 2025"],
    facts: `Which major anniversary did EastEnders celebrate in February 2025?|Its 40th anniversary|Its 25th anniversary|Its 30th anniversary|Its 50th anniversary|Easy|Forty Years|1985 Debut|BBC Soap History
Which Albert Square pub was wrecked in the anniversary explosion?|The Queen Victoria|The Prince Albert|The Rovers Return|The Dog in the Pond|Easy|Queen Vic|Pub Disaster|Albert Square
Whose wedding reception was taking place when the disaster struck?|Billy and Honey Mitchell's|George and Elaine Knight's|Peter and Lauren's|Kat and Alfie's|Easy|Billy Mitchell|Honey Mitchell|Wedding Reception
Which resident crashed his car into the pub shortly before the explosion?|Reiss Colwell|Ian Beale|Phil Mitchell|Jack Branning|Easy|Reiss Crash|Car Collision|Disaster Trigger
What ignited when the pub was damaged, causing the devastating blast?|Gas|Fireworks|Petrol from a tanker|A coal fire|Easy|Gas Explosion|Vic Damage|February Disaster
What was unusual about the episode broadcast immediately after the anniversary disaster?|It was performed live|It was entirely animated|It had no dialogue|It was filmed in black and white|Easy|Live Episode|20 February|Special Broadcast
Which man died after being trapped beneath wreckage in the live episode?|Martin Fowler|Alfie Moon|Ian Beale|Peter Beale|Easy|Martin Death|Fatal Injuries|Anniversary Tragedy
Which man did viewers choose as Denise Fox's romantic partner in the anniversary vote?|Jack Branning|Ravi Gulati|Phil Mitchell|George Knight|Medium|Public Vote|Denise Decision|Jack Reunion
Which other romantic option did Denise reject after the public vote?|Ravi Gulati|Max Branning|Martin Fowler|Jay Brown|Medium|Ravi Gulati|Love Triangle|Audience Choice
Which character helped to deliver Sonia's baby amid the Queen Vic wreckage?|Bianca Jackson|Kathy Beale|Sharon Watts|Elaine Knight|Easy|Bianca Jackson|Emergency Delivery|Live Birth`,
  },
  {
    topic: "Cindy Beale Attacker And Family Fallout",
    tags: ["Cindy Beale", "Kathy Beale", "2025 Attacker Reveal"],
    facts: `Who was unmasked as the person who attacked Cindy Beale the previous Christmas?|Kathy Beale|Ian Beale|Peter Beale|George Knight|Easy|Kathy Confession|Cindy Attacker|February Reveal
What garden tool had Cindy's attacker used in the Christmas assault?|A shovel|A rake|A pitchfork|A spade-shaped trowel|Easy|Shovel Attack|Christmas 2024|Mystery Solved
Which late daughter's locket became a clue in Cindy's search for her attacker?|Lucy Beale's|Abi Branning's|Lola Pearce's|Danielle Jones's|Medium|Lucy Beale|Missing Locket|Attack Evidence
Which man was wounded when Cindy struggled with his mother over a gun?|Ian Beale|Peter Beale|George Knight|Junior Knight|Easy|Ian Shot|Family Confrontation|Accidental Gunshot
Where on his body was Ian injured during the confrontation?|His arm|His shoulder blade|His leg|His stomach|Medium|Ian Injury|Gunshot Wound|Beale Home
Whose gun had Cindy taken before confronting the Beales?|Phil Mitchell's|Jack Branning's|Ravi Gulati's|Harry Mitchell's|Medium|Phil Gun|Cindy Armed|Confrontation
Whom did Cindy push into the path of Reiss's car, prompting him to swerve?|Ian Beale|Junior Knight|Peter Beale|George Knight|Easy|Ian Pushed|Reiss Swerves|Pub Explosion
Which Beale family member confessed she attacked Cindy to protect Ian?|Kathy Beale|Jane Beale|Lauren Branning|Gina Knight|Easy|Protecting Ian|Kathy Motive|Cindy Conflict
Which couple's engagement celebrations did Cindy disrupt when she returned to Walford in spring?|Lauren Branning and Peter Beale|Sharon Watts and Teddy Mitchell|Kat Slater and Alfie Moon|Suki Panesar and Eve Unwin|Medium|Cindy Return|Engagement Party|May 2025
Which actress portrayed Cindy during the attacker's unmasking and her return?|Michelle Collins|Gillian Taylforth|Jacqueline Jossa|Harriet Thorpe|Medium|Michelle Collins|Cindy Casting|2025 Return`,
  },
  {
    topic: "Sonia Bianca Reiss And Baby Julia",
    tags: ["Sonia Fowler", "Bianca Jackson", "Reiss Colwell", "2025 Fowler Family"],
    facts: `Who was being held captive by Reiss when 2025 began?|Bianca Jackson|Lauren Branning|Whitney Dean|Kathy Beale|Easy|Bianca Hostage|Reiss Secret|January 2025
In what kind of premises did Reiss keep Bianca prisoner?|A lock-up|A police cell|A hotel bedroom|A church hall|Easy|Lock Up|Hostage Location|Reiss Captivity
Who had falsely confessed to Debbie's murder on video in an effort to protect Sonia?|Bianca Jackson|Sharon Watts|Cindy Beale|Stacey Slater|Medium|Bianca False Confession|Debbie Murder|Sonia Framed
Which man was ultimately exposed as the real killer of Debbie Colwell?|Reiss Colwell|Martin Fowler|Teddy Mitchell|Ravi Gulati|Easy|Debbie Killer Exposed|Reiss Murder|2025 Reveal
What fell onto Reiss and killed him during the Queen Vic disaster?|A bathtub|A ceiling fan|A piano|A wardrobe|Medium|Reiss Death|Falling Bathtub|40th Anniversary
What first name was chosen for Sonia's newborn daughter by a public vote?|Julia|Toni|Pauline|Dorothy|Easy|Julia Fowler|Audience Vote|Live Episode
Which original EastEnders co-creator inspired baby Julia's name?|Julia Smith|Tony Holland|Barbara Windsor|June Brown|Medium|Julia Smith|Soap Co Creator|Baby Namesake
What was the other name offered to viewers in the vote for Sonia's baby?|Toni|Louise|Peggy|Rose|Medium|Toni Option|Tony Holland Tribute|Public Voting
Which estranged father did Sonia meet shortly before leaving Walford?|Terry Cant|Charlie Cotton|David Wicks|Alan Jackson|Medium|Terry Cant|Sonia Father|April 2025
Which holiday destination did Sonia head for with Bianca and her daughters?|Bali|Ibiza|Malta|Cyprus|Easy|Sonia Exit|Bali Journey|Bianca And Bex`,
  },
  {
    topic: "Martin Stacey Ruby And Vicki",
    tags: ["Martin Fowler", "Stacey Slater", "Ruby Allen", "2025 Fowler Legacy"],
    facts: `What heavy object trapped Martin Fowler inside the damaged Queen Vic?|A metal beam|A fallen tree|A concrete statue|A grand piano|Easy|Martin Trapped|Metal Beam|Anniversary Rescue
Whom had Martin gone back into the pub to rescue before he was fatally injured?|Stacey Slater|Ruby Allen|Sharon Watts|Kathy Beale|Easy|Martin Rescues Stacey|Final Heroism|Queen Vic
What medical complication led to Martin's death after the beam was removed?|Cardiac arrest following crush injuries|A stroke caused by fever|An allergic reaction|Carbon monoxide poisoning|Medium|Crush Syndrome|Cardiac Arrest|Martin Death
Which actor's time as Martin Fowler ended with the anniversary storyline?|James Bye|James Alexandrou|Scott Maslen|Adam Woodyatt|Medium|James Bye|Martin Actor|Cast Departure
Which woman accepted Martin's proposal as they were trapped in the wreckage?|Stacey Slater|Ruby Allen|Sonia Fowler|Sharon Watts|Easy|Martin Proposal|Stacey Love|Final Moments
What was the name of Martin's young son with Ruby Allen?|Roman|Arthur|Tommy|Ricky|Easy|Roman Fowler|Ruby Son|Martin Family
Which actress played Ruby Allen during Martin's funeral aftermath?|Louisa Lytton|Lacey Turner|Natalie Cassidy|Jacqueline Jossa|Medium|Louisa Lytton|Ruby Actor|2025 Exit
Which relative returned to Walford for Martin's funeral after years away?|Vicki Fowler|Michelle Fowler|Pauline Fowler|Mark Fowler|Medium|Vicki Return|Martin Funeral|Fowler Family
Which actress took over the role of Vicki Fowler in 2025?|Alice Haig|Scarlett Alice Johnson|Michelle Ryan|Lucy Benjamin|Medium|Alice Haig|Vicki Recast|March 2025
Which man arrived in Walford as Vicki Fowler's new partner?|Ross Marshall|Spencer Moon|Alfie Moon|Jake Moon|Medium|Ross Marshall|Vicki Partner|New Arrival`,
  },
  {
    topic: "Phil Nigel Grant And Julie",
    tags: ["Phil Mitchell", "Nigel Bates", "2025 Mental Health And Dementia"],
    facts: `Which returning Walford favourite revealed he had young-onset dementia?|Nigel Bates|Grant Mitchell|Alfie Moon|Billy Mitchell|Easy|Nigel Dementia|Diagnosis|January 2025
To which friend did Nigel initially open up about his dementia diagnosis?|Yolande Trueman|Cindy Beale|Stacey Slater|Sharon Watts|Medium|Yolande Confidante|Nigel Secret|Early Disclosure
Which actor returned to portray Nigel Bates?|Paul Bradley|Ross Kemp|Steve McFadden|Perry Fenwick|Medium|Paul Bradley|Nigel Actor|Classic Return
What mental health condition did Phil Mitchell experience with psychotic symptoms?|Depression|Bipolar disorder|Dementia|Obsessive compulsive disorder|Medium|Phil Depression|Psychotic Symptoms|Mental Health Storyline
Which actor played Phil during his mental health crisis?|Steve McFadden|Ross Kemp|Scott Maslen|Adam Woodyatt|Medium|Steve McFadden|Phil Actor|40th Anniversary
Which of Phil's brothers returned to help him through the crisis?|Grant Mitchell|Billy Mitchell|Teddy Mitchell|Archie Mitchell|Easy|Grant Mitchell|Brother Returns|Family Support
Which actor reprised the role of Grant Mitchell?|Ross Kemp|Paul Bradley|Alan Ford|Roland Manookian|Medium|Ross Kemp|Grant Actor|2025 Return
Which Queen Vic resident joined Grant and Nigel in trying to support Phil?|Linda Carter|Cindy Beale|Elaine Knight|Kathy Beale|Easy|Linda Supports Phil|Intervention|Friendship
What was the first name of Nigel's wife, who returned looking for him?|Julie|Debbie|Karen|Clare|Easy|Julie Bates|Nigel Marriage|Wife Returns
Which actress returned as Nigel's wife Julie?|Karen Henthorn|Pam St Clement|Harriet Thorpe|Gillian Wright|Medium|Karen Henthorn|Julie Actor|July Return`,
  },
  {
    topic: "Suki Eve And Nish Wedding Tragedy",
    tags: ["Suki Panesar", "Eve Unwin", "Nish Panesar", "New Year 2025"],
    facts: `Which two women married at the start of 2025 despite Nish Panesar's threats?|Suki Panesar and Eve Unwin|Stacey Slater and Eve Unwin|Denise Fox and Suki Panesar|Sharon Watts and Kat Slater|Easy|Suki Eve Wedding|New Years Day|Marriage
Which woman did Nish poison while trying to destroy the wedding?|Eve Unwin|Denise Fox|Stacey Slater|Priya Nandra-Hart|Easy|Eve Poisoned|Nish Revenge|Wedding Attack
Which grandson secretly helped Nish while he was hiding?|Nugget Gulati|Barney Mitchell|Ricky Branning|Tommy Moon|Medium|Nugget Gulati|Nish Hideout|Family Deception
Which man intervened and pushed Nish from a balcony at the wedding venue?|Ravi Gulati|Vinny Panesar|Jack Branning|Phil Mitchell|Easy|Ravi Intervenes|Nish Fall|Family Showdown
Who was dragged over the balcony with Nish during his fall?|Suki Panesar|Eve Unwin|Denise Fox|Priya Nandra-Hart|Easy|Suki Falls|Balcony Drama|Wedding Venue
Which of the two people who fell from the balcony survived?|Suki Panesar|Nish Panesar|Neither of them|Both of them|Easy|Suki Survives|Nish Dies|January Cliffhanger
Where did Nish's fatal confrontation with Suki take place?|At the wedding venue|On a train|At the police station|At the Arches|Medium|Wedding Venue|Final Confrontation|Hotel Balcony
Which actor portrayed Nish Panesar until his departure?|Navin Chowdhry|Aaron Thiara|Shiv Jalota|Rudolph Walker|Medium|Navin Chowdhry|Nish Actor|Exit
Which actress played Suki Panesar at her wedding?|Balvinder Sopal|Heather Peace|Diane Parish|Sophie Khan Levy|Medium|Balvinder Sopal|Suki Actor|Marriage
Which actress portrayed Suki's bride Eve Unwin?|Heather Peace|Lacey Turner|Balvinder Sopal|Angela Wynter|Medium|Heather Peace|Eve Actor|Wedding`,
  },
  {
    topic: "Nicola Teddy Harry And Shireen",
    tags: ["Mitchell Family", "Nicola Mitchell", "Shireen Bashar", "2025 Family Secrets"],
    facts: `Which missing young woman was revealed to have been Harry Mitchell's girlfriend?|Shireen Bashar|Nadine Keller|Britney Wainwright|Anna Knight|Easy|Shireen Bashar|Harry Girlfriend|Disappearance Mystery
Which Mitchell woman was exposed as responsible for Shireen's death?|Nicola Mitchell|Sharon Watts|Honey Mitchell|Sam Mitchell|Easy|Nicola Killed Shireen|Murder Secret|June Reveal
Which relative of Shireen returned seeking answers about her disappearance?|Her brother Asad|Her father Patrick|Her sister Gina|Her cousin Zack|Medium|Asad Bashar|Shireen Family|Investigation
Who was revealed to be Barney Mitchell's biological father?|Zack Hudson|Teddy Mitchell|Harry Mitchell|Phil Mitchell|Easy|Barney Paternity|Zack Father|Family Revelation
Which woman was Barney's mother and had concealed the truth about his father?|Nicola Mitchell|Sharon Watts|Kat Slater|Priya Nandra-Hart|Easy|Nicola Paternity Secret|Barney Mother|2025 Reveal
Which man had brought up Barney as his son before the paternity revelation?|Teddy Mitchell|Phil Mitchell|Billy Mitchell|Ravi Gulati|Easy|Teddy Raised Barney|Family Shock|Paternity
Which older son of Nicola struggled to forgive her over Shireen's murder?|Harry Mitchell|Barney Mitchell|Ben Mitchell|Will Mitchell|Easy|Harry Confronts Nicola|Shireen Truth|Mother Son Rift
What unusual family celebration did Nicola organise in June?|Half Christmas|Half Easter|A second Halloween|A summer New Year's Eve|Medium|Half Christmas|Nicola Tradition|June Party
Which actress played Nicola Mitchell during the family revelations?|Laura Doddington|Harriet Thorpe|Emma Barton|Kim Medcalf|Medium|Laura Doddington|Nicola Actor|2025 Casting
Which actor played Harry Mitchell in the missing-girlfriend storyline?|Elijah Holloway|Lewis Bridgeman|Roland Manookian|James Farrar|Medium|Elijah Holloway|Harry Actor|Shireen Storyline`,
  },
  {
    topic: "Zoe Kat Alfie And Lost Twins",
    tags: ["Zoe Slater Return", "Kat Slater", "2025 Slater Family", "Anthony Trueman"],
    facts: `Which long-absent Slater daughter made a surprise return in June?|Zoe Slater|Lynne Slater|Belinda Slater|Little Mo Slater|Easy|Zoe Returns|June 2025|Slater Reunion
Which actress resumed the role of Zoe after two decades away?|Michelle Ryan|Jessie Wallace|Lacey Turner|Kacey Ainsworth|Medium|Michelle Ryan|Zoe Actress|Comeback
Which Walford woman is Zoe's mother?|Kat Slater|Jean Slater|Stacey Slater|Mo Harris|Easy|Kat Zoe Relationship|Mother Daughter|Family Reconciliation
Which cousin had secretly been in contact with Zoe before Kat knew she was back?|Stacey Slater|Lily Slater|Freddie Slater|Ruby Allen|Medium|Stacey Helps Zoe|Secret Contact|Return
Which man, now married to Kat, also tried to help Zoe when she resurfaced?|Alfie Moon|Phil Mitchell|Jack Branning|Teddy Mitchell|Easy|Alfie Helps Zoe|Stepfather|Family Secret
From which country had Zoe returned to Britain after encountering trouble?|Spain|France|Italy|Australia|Medium|Zoe In Spain|Return To London|Loan Sharks
To which Spanish city did Zoe flee after briefly meeting her family in June?|Barcelona|Madrid|Seville|Valencia|Medium|Barcelona Flight|Zoe Leaves Again|June Departure
Which former boyfriend of Zoe's returned to Walford and became involved in her 2025 story?|Anthony Trueman|Dennis Rickman|Spencer Moon|Sean Slater|Medium|Anthony Trueman|Former Romance|Reconnection
What did a flashback reveal Zoe had secretly given birth to years earlier?|Twins|Triplets|A single boy|A single girl|Easy|Zoe Twins|2006 Flashback|Hidden Birth
Which Slater was accidentally shot amid a confrontation involving Jack and Ravi?|Zoe Slater|Kat Slater|Stacey Slater|Jean Slater|Easy|Zoe Shot|Jack And Ravi|September 2025`,
  },
  {
    topic: "Lauren Peter Oscar And The Brannings",
    tags: ["Lauren Branning", "Peter Beale", "Oscar Branning", "2025 Beale Family"],
    facts: `What first name did Lauren and Peter give their baby boy born in 2025?|Jimmy|Roman|Louie|Arthur|Easy|Jimmy Beale|New Baby|May 2025
Who was the father of Lauren Branning's second son?|Peter Beale|Max Branning|Jack Branning|Bobby Beale|Easy|Peter Father|Jimmy Parents|Beale Family
Which late Branning relative inspired the name Jimmy?|Jim Branning|Bradley Branning|Derek Branning|Kevin Wicks|Medium|Jim Branning|Family Namesake|Great Grandfather
What eye condition was baby Jimmy diagnosed with?|Coloboma|Cataracts caused by diabetes|Glaucoma from an injury|Conjunctivitis|Medium|Jimmy Coloboma|Visual Impairment|Infant Diagnosis
What was the first name of Lauren and Peter's older son?|Louie|Roman|Tommy|Arthur|Easy|Louie Beale|Older Brother|Family Relationship
Which actress portrayed Lauren as she faced Jimmy's diagnosis?|Jacqueline Jossa|Lauren Crace|Lacey Turner|Michelle Collins|Medium|Jacqueline Jossa|Lauren Actor|2025 Storyline
Which teenage Branning returned to Walford after eight years away?|Oscar Branning|Ricky Branning|Bradley Branning|Jack Branning|Easy|Oscar Return|July 2025|Branning Family
Who were Oscar Branning's parents?|Max and Tanya|Jack and Denise|Ian and Cindy|Phil and Sharon|Easy|Max Branning|Tanya Cross|Oscar Parents
Which actor took over the role of Oscar Branning?|Pierre Moullier|Jake Wood|Thomas Law|Scott Maslen|Medium|Pierre Moullier|Oscar Recast|New Cast
Which couple had a surprise wedding in the Queen Vic in September?|Lauren Branning and Peter Beale|Zoe Slater and Anthony Trueman|Sharon Watts and Teddy Mitchell|Cindy Beale and Ian Beale|Medium|Lauren Peter Wedding|September 2025|Queen Victoria`,
  },
  {
    topic: "Weddings Returns And Christmas 2025",
    tags: ["2025 Character Returns", "Walford Weddings", "Christmas 2025", "Trueman Family"],
    facts: `Which couple married again in 2025 after overcoming a difficult period?|Patrick and Yolande Trueman|George and Elaine Knight|Phil and Kat Mitchell|Ian and Cindy Beale|Easy|Patrick Yolande Wedding|September 2025|Renewed Commitment
Which of Patrick's sons returned to Walford for the wedding?|Anthony Trueman|Paul Trueman|Isaac Baptiste|Jordan Johnson|Easy|Anthony Return|Patrick Son|Family Wedding
Which actor reprised his role as Anthony Trueman?|Nicholas Bailey|Rudolph Walker|Don Gilet|Colin Salmon|Medium|Nicholas Bailey|Anthony Actor|2025 Return
Which long-running couple married again after reconnecting in 2025?|Kat Slater and Alfie Moon|Stacey Slater and Martin Fowler|Suki Panesar and Nish Panesar|Whitney Dean and Zack Hudson|Easy|Kat Alfie Remarry|June 2025|Moon Family
What was the first name of Ross Marshall's teenage son, who arrived alongside Vicki Fowler?|Joel|Roman|Oscar|Nugget|Medium|Joel Marshall|Ross Son|2025 Newcomer
Which former Holby City actor joined EastEnders as Ross Marshall?|Alex Walkinshaw|Jake Wood|Paul Bradley|James Bye|Medium|Alex Walkinshaw|Ross Actor|Vicki Family
Which notorious Branning father returned to Walford during 2025?|Max Branning|Derek Branning|Jim Branning|Bradley Branning|Easy|Max Branning Returns|Autumn 2025|Family Drama
Which actress's character Linda Carter had a daughter, Annie, whose father was Max Branning?|Kellie Bright|Letitia Dean|Jacqueline Jossa|Jessie Wallace|Medium|Kellie Bright|Annie Carter|Max Paternity
Which two deceased Walford favourites appeared in Nigel's altered Christmas memories?|Pat and Barry Evans|Pauline Fowler and Arthur Fowler|Peggy Mitchell and Archie Mitchell|Den Watts and Angie Watts|Medium|Pat Evans|Barry Evans|Nigel Dementia Special
Which Trueman family member died in the Queen Vic during Christmas 2025?|Anthony Trueman|Patrick Trueman|Isaac Baptiste|Paul Trueman|Medium|Anthony Death|Christmas 2025|Queen Victoria`,
  },
];

let index = 0;
const questions = groups.flatMap(group => group.facts.trim().split("\n").map(line => {
  const parts = line.split("|");
  if (parts.length !== 9) throw new Error(`Invalid data at question ${index + 1}`);
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, tag1, tag2, tag3] = parts;
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  const item = {
    id: "tv_" + String(10184 + index).padStart(4, "0"),
    category: "Television",
    question,
    answers,
    correctAnswer,
    difficulty,
    tags: [...new Set([
      "British Television", "Soaps", "EastEnders", "2025",
      group.topic, ...group.tags, correctAnswer, tag1, tag2, tag3
    ])],
    dailyEligible: true
  };
  index += 1;
  return item;
}));

if (questions.length !== 100) throw new Error(`Expected 100 questions; got ${questions.length}`);
module.exports = questions;
