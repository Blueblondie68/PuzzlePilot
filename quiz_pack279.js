
 // quiz_pack279.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: 24 - Season 3 (Day 3, broadcast 2003-2004)
 // Jack Bauer, the Salazars, Cordilla virus, Nina Myers, the Palmer campaign,
 // the Chandler Plaza outbreak, Stephen Saunders and the finale.
 // No episode-title recall questions. Individual specialist tags on every question.
 // Leave quiz_bank.js unchanged until the agreed end-of-session update.
 // Row: question | correct answer | three wrong answers | difficulty | individual tags

 const groups = [
   {
     topic: 'Day Three, CTU And New Faces',
     facts: `How many years after Season 2 does the main story of 24 Season 3 take place?|Three years|Six months|One year|Ten years|Medium|Day Three Timeline|Season Two Aftermath|Three Year Gap|Jack Bauer Return|2003 Premiere|Los Angeles Setting|Chronology
 At what time does the main storyline of 24 Season 3 begin?|1 pm|8 am|Midnight|6 am|Medium|Day Three Start|1 PM Opening|Real Time Format|24 Hour Story|Los Angeles|Season Premiere|2003 Broadcast
 What is the name of the deadly fictional virus threatening Los Angeles in Season 3?|Cordilla virus|Marburg virus|Nipah virus|Ebola virus|Easy|Cordilla Virus|Biological Terrorism|Deadly Infection|Los Angeles Threat|Viral Outbreak|Bioweapon Plot|CTU Investigation
 What drug is Jack Bauer struggling with an addiction to at the beginning of Season 3?|Heroin|Cocaine|Methamphetamine|Morphine|Medium|Jack Bauer|Heroin Addiction|Undercover Drug Cartel|Withdrawal|Personal Crisis|Salazar Operation|Field Agent
 How did Jack Bauer develop his drug addiction before Day 3?|While infiltrating the Salazar drug organisation|After being injured in a plane crash|While receiving treatment for cancer|During captivity in North Korea|Medium|Jack Bauer|Heroin Dependency|Salazar Undercover Mission|Drug Cartel Infiltration|Cover Identity|Agent Sacrifice|Preseason Events
 Where is Kim Bauer working when Season 3 begins?|CTU|The White House|A Los Angeles hospital|The FBI academy|Easy|Kim Bauer|CTU Employee|Elisha Cuthbert|Los Angeles Office|Father Daughter Relationship|Technology Team|New Career
 Which CTU field agent is secretly dating Kim Bauer at the start of Season 3?|Chase Edmunds|Gael Ortega|Adam Kaufman|Ryan Chappelle|Easy|Kim Bauer|Chase Edmunds|Secret Romance|Jack Bauer Daughter|Field Operations|Workplace Relationship|Season Three Couple
 Which actor played Jack Bauer's partner Chase Edmunds?|James Badge Dale|Zachary Quinto|Jesse Borrego|Paul Blackthorne|Medium|Chase Edmunds|James Badge Dale|Actor Casting|Jack Bauer Partner|CTU Field Agent|Kim Bauer Boyfriend|2003 Debut
 Which actress made her debut as CTU analyst Chloe O'Brian in Season 3?|Mary Lynn Rajskub|Reiko Aylesworth|Sarah Clarke|Elisha Cuthbert|Easy|Chloe O Brian|Mary Lynn Rajskub|Actress Casting|CTU Analyst|Technology Support|Character Introduction|Recurring Franchise Role
 Which actor portrayed CTU analyst Adam Kaufman?|Zachary Quinto|James Badge Dale|Jesse Borrego|Carlos Bernard|Medium|Adam Kaufman|Zachary Quinto|Actor Casting|CTU Analyst|Computer Operations|Chloe O Brian Colleague|Season Three Cast
 Who played CTU agent Gael Ortega?|Jesse Borrego|Vincent Laresca|Joaquim de Almeida|Greg Ellis|Hard|Gael Ortega|Jesse Borrego|Actor Casting|Covert CTU Operation|Tony Almeida Ally|Salazar Investigation|Season Three Cast
 Which two CTU colleagues are revealed to have married between Seasons 2 and 3?|Tony Almeida and Michelle Dessler|Jack Bauer and Kate Warner|Chase Edmunds and Kim Bauer|Ryan Chappelle and Chloe O'Brian|Easy|Tony Almeida|Michelle Dessler|Married Couple|CTU Leadership|Carlos Bernard|Reiko Aylesworth|Relationship Development
 Which CTU official repeatedly clashes with Jack over the handling of the Day 3 operation?|Ryan Chappelle|Adam Kaufman|Chase Edmunds|Gael Ortega|Medium|Ryan Chappelle|Regional Division Director|Jack Bauer|CTU Oversight|Operational Authority|Drug Use Investigation|Leadership Conflict
 Who is Jack Bauer's former girlfriend from Season 2, briefly seen again early in Season 3?|Kate Warner|Nina Myers|Anne Packard|Claudia Hernandez|Medium|Kate Warner|Sarah Wynter|Jack Bauer Former Partner|Relationship Breakup|Season Two Character|Season Three Appearance|Warner Family`,
   },
   {
     topic: 'The Salazars, The Prison Break And The False Alarm',
     facts: `Which imprisoned Mexican drug lord does Jack Bauer set out to free in the first part of Day 3?|Ramon Salazar|Hector Salazar|Michael Amador|Stephen Saunders|Easy|Ramon Salazar|Mexican Drug Lord|Prison Break|Jack Bauer|Hector Salazar Brother|Biological Threat|Undercover Operation
 What is the name of Ramon Salazar's brother who threatens to release the virus?|Hector Salazar|Ramon Salazar|Pedro Salazar|Luis Annicon|Easy|Hector Salazar|Ramon Salazar Brother|Mexico Drug Cartel|Virus Threat|Hostage Demand|Los Angeles|Antagonist
 Which actor played imprisoned cartel leader Ramon Salazar?|Joaquim de Almeida|Vincent Laresca|Paul Blackthorne|Greg Ellis|Medium|Ramon Salazar|Joaquim De Almeida|Actor Casting|Drug Lord|Mexican Cartel|Prisoner|Salazar Brothers
 Which actor played Hector Salazar in the third season?|Vincent Laresca|Joaquim de Almeida|Jesse Borrego|Lothaire Bluteau|Hard|Hector Salazar|Vincent Laresca|Actor Casting|Mexico|Drug Cartel|Ramon Salazar Brother|Biological Plot
 What is discovered in a body dumped outside a Los Angeles hospital at the start of Day 3?|A deadly virus infection|A concealed nuclear device|A secret military microchip|Evidence of radiation poisoning|Easy|Cordilla Virus|Infected Body|Hospital Discovery|Biological Threat|First Hour|CTU Alert|Public Health Emergency
 Which young man is initially suspected of carrying the virus through a drug shipment?|Kyle Singer|Chase Edmunds|Adam Kaufman|Arthur Rabens|Medium|Kyle Singer|Drug Courier|Hector Salazar|Potential Infection|Los Angeles|False Lead|Riley Smith
 What do medical tests ultimately reveal about Kyle Singer's suspected infection?|He is not infected|He is the original carrier|He has been vaccinated secretly|He has a different fatal virus|Medium|Kyle Singer|Negative Virus Test|False Infection Scare|Cordilla Virus|CTU Medical Examination|Salazar Deception|Biological Threat
 Which CTU leader is shot in the neck while trying to intercept Kyle Singer?|Tony Almeida|Jack Bauer|Ryan Chappelle|Chase Edmunds|Medium|Tony Almeida|Neck Gunshot|Kyle Singer Pursuit|Salazar Gunman|CTU Leadership|Hospital Treatment|Day Three Early Hours
 Who temporarily takes charge of CTU after Tony Almeida is shot?|Michelle Dessler|Kim Bauer|Chloe O'Brian|Nina Myers|Easy|Michelle Dessler|Tony Almeida Injury|Acting CTU Director|Leadership Handover|Reiko Aylesworth|Operations Control|Emergency Command
 What disturbance does Jack deliberately trigger to escape from prison with Ramon Salazar?|A prison riot|A fire drill|A power station explosion|A food poisoning scare|Medium|Jack Bauer|Ramon Salazar|Prison Riot|Cell Doors Opened|Escape Plan|Inmate Uprising|Undercover Mission
 What deadly game do rioting inmates force Jack and others to play during the prison escape?|Russian roulette|Knife throwing|A card game for hostages|A timed bomb puzzle|Hard|Jack Bauer|Ramon Salazar|Russian Roulette|Prison Hostages|Deadly Game|Season Three Action|Escape Crisis
 What does Jack use to transport Ramon away from the prison after their escape?|A helicopter|An armoured train|A speedboat|A police bus|Medium|Jack Bauer|Ramon Salazar|Prison Escape|Helicopter Flight|Army Pursuit|Airstrip Transfer|Mexico Mission
 To which country does Jack travel with Ramon to rejoin Hector's organisation?|Mexico|Canada|Colombia|Cuba|Easy|Jack Bauer|Ramon Salazar|Mexico Location|Hector Salazar|Drug Cartel|Undercover Reentry|Cross Border Operation
 Which CTU agent initially appears to be secretly communicating with the Salazar cartel?|Gael Ortega|Adam Kaufman|Chloe O'Brian|Ryan Chappelle|Medium|Gael Ortega|Apparent Mole|Salazar Communications|Kim Bauer Suspicion|CTU Mainframe|Undercover Cover Story|Internal Investigation
 Which two CTU colleagues already know that Jack's return to the Salazars is part of a secret plan?|Tony Almeida and Gael Ortega|Chloe O'Brian and Adam Kaufman|Kim Bauer and Chase Edmunds|Ryan Chappelle and Nina Myers|Hard|Tony Almeida|Gael Ortega|Jack Bauer Secret Operation|Salazar Cartel|Covert Plan|Virus Interception|Need To Know Intelligence`,
   },
   {
     topic: 'Mexico, The Virus Auction And Nina Myers',
     facts: `Which CTU agent defies orders and travels to Mexico because he fears for Jack's safety?|Chase Edmunds|Adam Kaufman|Ryan Chappelle|Aaron Pierce|Easy|Chase Edmunds|Jack Bauer Rescue Attempt|Mexico Mission|Disobeyed Orders|Salazar Compound|Field Agent|Kim Bauer Boyfriend
 Who is Hector Salazar's girlfriend and a contact from Jack's earlier undercover mission?|Claudia Hernandez|Jane Saunders|Julia Milliken|Anne Packard|Medium|Claudia Hernandez|Hector Salazar|Jack Bauer|Mexico Cartel|Captive Girlfriend|Escape Promise|Salazar Compound
 Which actress played Claudia Hernandez in Season 3?|Vanessa Ferlito|Gina Torres|Sarah Wynter|Wendy Crewson|Hard|Claudia Hernandez|Vanessa Ferlito|Actress Casting|Hector Salazar Girlfriend|Mexico Scenes|Chase Edmunds Escape|Drug Cartel Storyline
 What happens to Claudia Hernandez as she helps Chase escape the Salazars?|She is shot and killed|She escapes to Canada|She becomes a CTU analyst|She takes over the cartel|Medium|Claudia Hernandez|Chase Edmunds|Escape Attempt|Salazar Gunmen|Fatal Shooting|Family Rescue|Mexico Storyline
 Who offers a deadly biological agent for sale to rival bidders in Mexico?|Michael Amador|Stephen Saunders|Wayne Palmer|Ramon Salazar|Medium|Michael Amador|Virus Seller|Black Market Auction|Mexico|Cordilla Virus|Arms Trafficking|Criminal Broker
 Which former CTU employee unexpectedly appears as a rival buyer for the virus?|Nina Myers|Michelle Dessler|Kate Warner|Chloe O'Brian|Easy|Nina Myers|Former CTU Operative|Virus Auction|Mexico Return|Jack Bauer Nemesis|Biological Weapon Bid|Season Three Return
 Who shoots his own brother after the Salazars quarrel over the virus deal?|Ramon Salazar|Hector Salazar|Jack Bauer|Michael Amador|Medium|Ramon Salazar|Hector Salazar|Fraternal Betrayal|Mexico Warehouse|Virus Sale Dispute|Gunshot|Cartel Breakdown
 What hidden device in Jack's wristwatch is damaged when Chase attacks him in Mexico?|A tracking transponder|A miniature camera|An explosive detonator|A poison injector|Hard|Jack Bauer|Chase Edmunds|Wristwatch Transponder|Damaged Tracker|Undercover Monitoring|Mexico Captivity|CTU Location Signal
 How does Michael Amador trick buyers at the Mexican virus exchange?|He swaps the real virus for a bomb disguised as a vial|He sells a harmless vaccine|He substitutes a suitcase of counterfeit money|He gives them empty glass containers|Medium|Michael Amador|Fake Virus Vial|Hidden Bomb|Nina Myers|Ramon Salazar|Double Cross|Mexico Exchange
 Which Salazar brother dies when the rigged virus container explodes?|Ramon Salazar|Hector Salazar|Neither brother|Both brothers|Medium|Ramon Salazar|Explosive Vial|Michael Amador Trap|Mexico Warehouse|Fatal Explosion|Virus Deal|Cartel Ending
 What malicious software does Nina Myers cause to spread through CTU's systems after being captured?|A computer worm|A ransomware payment screen|A harmless pop-up advert|A website tracking cookie|Medium|Nina Myers|Computer Worm|CTU Network Attack|Undercover Agent Identities|Cyber Sabotage|Airborne Interrogation|Technology Threat
 Which CTU analyst manages to stop the computer worm triggered by Nina Myers?|Chloe O'Brian|Kim Bauer|Gael Ortega|Adam Kaufman|Medium|Chloe O Brian|Mary Lynn Rajskub|Nina Myers Worm|Computer Security|CTU Systems|Emergency Technical Fix|Undercover Agents
 Which CTU employee's daughter is threatened when Nina Myers escapes custody?|Jack Bauer's|Tony Almeida's|Ryan Chappelle's|Gael Ortega's|Easy|Kim Bauer|Jack Bauer|Nina Myers Escape|CTU Medical Area|Gunpoint Confrontation|Father Daughter|Hostage Danger
 Who fatally shoots Nina Myers after her escape attempt inside CTU?|Jack Bauer|Chase Edmunds|Tony Almeida|Michelle Dessler|Easy|Jack Bauer|Nina Myers|Death At CTU|Teri Bauer Revenge|Kim Bauer Threat|Season Three Turning Point|Former Double Agent`,
   },
   {
     topic: 'President Palmer, The Millikens And The Campaign',
     facts: `Which senator challenges President David Palmer for re-election in Season 3?|John Keeler|James Prescott|Wayne Palmer|Alan Milliken|Easy|John Keeler|David Palmer|Presidential Election|Reelection Challenger|Campaign Debate|Political Rival|2003 Storyline
 Which actor portrayed presidential challenger Senator John Keeler?|Geoff Pierson|Alan Dale|D B Woodside|Dennis Haysbert|Medium|John Keeler|Geoff Pierson|Actor Casting|Senator|Presidential Rival|Campaign Politics|Season Three Cast
 What is the first name of President Palmer's brother and chief of staff?|Wayne|Keith|David|Alan|Easy|Wayne Palmer|David Palmer Brother|Chief Of Staff|White House|Presidential Campaign|Family Politics|D B Woodside
 Which actor played Palmer's brother Wayne?|D. B. Woodside|Jude Ciccolella|Geoff Pierson|Albert Hall|Medium|Wayne Palmer|D B Woodside|Actor Casting|Chief Of Staff|Palmer Family|Political Adviser|Season Three Debut
 What is the profession of President Palmer's girlfriend Anne Packard?|Doctor|Lawyer|Television journalist|University professor|Easy|Anne Packard|Wendy Crewson|President Girlfriend|Personal Physician|Medical Profession|Election Scandal|Romantic Relationship
 Which actress portrayed Dr Anne Packard?|Wendy Crewson|Gina Torres|Michelle Forbes|Penny Johnson Jerald|Medium|Anne Packard|Wendy Crewson|Actress Casting|Presidential Physician|David Palmer Romance|Campaign Scandal|Medical Ethics
 Which wealthy campaign supporter demands that Palmer dismiss Wayne?|Alan Milliken|John Keeler|Ted Packard|Stephen Saunders|Medium|Alan Milliken|David Palmer|Wayne Palmer|Campaign Donor|Political Blackmail|Family Scandal|Dismissal Demand
 Which woman had previously been involved with Wayne Palmer despite being married to Alan Milliken?|Julia Milliken|Anne Packard|Sherry Palmer|Jane Saunders|Medium|Julia Milliken|Wayne Palmer Affair|Alan Milliken Wife|Past Relationship|Political Pressure|Campaign Threat|Marriage Secret
 Which actress played Julia Milliken?|Gina Torres|Wendy Crewson|Penny Johnson Jerald|Vanessa Ferlito|Hard|Julia Milliken|Gina Torres|Actress Casting|Alan Milliken Wife|Wayne Palmer|Political Plot|Season Three Guest
 Whom does David Palmer ask to help deal with Alan Milliken's threats?|Sherry Palmer|Anne Packard|Kim Bauer|Michelle Dessler|Medium|Sherry Palmer|David Palmer Ex Wife|Alan Milliken|Political Fixer|Presidential Campaign|Blackmail Plan|Palmer Family
 How does Sherry Palmer contribute to Alan Milliken's death?|She prevents his wife from giving him needed medication|She shoots him during an argument|She poisons his drink|She pushes him from a balcony|Hard|Sherry Palmer|Alan Milliken Death|Julia Milliken|Withheld Medication|Medical Emergency|Campaign Cover Up|Political Scandal
 Who shoots Sherry Palmer near the end of Season 3?|Julia Milliken|Anne Packard|Kim Bauer|Michelle Dessler|Medium|Julia Milliken|Sherry Palmer Death|Alan Milliken Aftermath|Murder Suicide|Political Scandal|Revenge|Campaign Crisis
 What decision does David Palmer make about his presidential campaign at the end of Day 3?|He withdraws from the re-election race|He appoints Sherry as vice president|He announces a third term|He resigns immediately to become a senator|Medium|David Palmer|Presidential Campaign|Reelection Withdrawal|Sherry Palmer Scandal|John Keeler|Political Consequences|Season Three Finale`,
   },
   {
     topic: 'The Chandler Plaza Hotel And Stephen Saunders',
     facts: `Which Los Angeles hotel becomes the main site of the virus outbreak?|Chandler Plaza Hotel|The Beverly Hilton|The Grand Pacific Hotel|The Century Plaza Hotel|Medium|Chandler Plaza Hotel|Los Angeles|Cordilla Virus|Hotel Outbreak|Quarantine Zone|Biological Terrorism|Day Three Crisis
 Which accomplice of Michael Amador releases the virus at the hotel?|Marcus Alvers|Arthur Rabens|Ryan Chappelle|Kyle Singer|Medium|Marcus Alvers|Michael Amador|Hotel Attack|Cordilla Virus|Biological Agent|Ventilation Device|Terrorist Operative
 How is the virus released inside the Chandler Plaza Hotel?|Through the ventilation system|Through contaminated drinking water|Through the television aerial|Through the hotel swimming pool|Easy|Chandler Plaza Hotel|Ventilation System|Cordilla Virus|Airborne Release|Marcus Alvers|Hotel Quarantine|Contaminated Air
 Which CTU agent becomes infected while finding the hotel virus device?|Gael Ortega|Tony Almeida|Chase Edmunds|Adam Kaufman|Medium|Gael Ortega|Hotel Virus Device|Cordilla Exposure|Chandler Plaza|CTU Field Team|Fatal Infection|Jesse Borrego
 What happens to Gael Ortega after his exposure to the virus?|He dies from the infection|He escapes to Mexico|He is secretly arrested for treason|He is transferred to Washington|Easy|Gael Ortega Death|Cordilla Virus|Chandler Plaza|CTU Agent Fatality|Hospitality Venue|Biological Attack|Season Three Loss
 Which CTU leader oversees the quarantine at the Chandler Plaza Hotel?|Michelle Dessler|Kim Bauer|Chloe O'Brian|Nina Myers|Easy|Michelle Dessler|Chandler Plaza Hotel|Hotel Quarantine|Reiko Aylesworth|Biological Emergency|Crowd Control|CTU Response
 What does Marcus Alvers admit was added to the virus to make its effects develop faster?|A chemical compound|A radioactive isotope|A colour dye|A sedative tablet|Hard|Marcus Alvers|Modified Cordilla Virus|Accelerated Symptoms|Hotel Infection|Biological Weapon|Michelle Dessler Interrogation|Fatal Outbreak
 Which former government operative is identified as the mastermind behind the virus attacks?|Stephen Saunders|Michael Amador|Ramon Salazar|Alan Milliken|Easy|Stephen Saunders|Virus Mastermind|Former Government Agent|Bioterrorism|Jack Bauer Past|Day Three Antagonist|Cordilla Plot
 Which actor played biological-terrorism mastermind Stephen Saunders?|Paul Blackthorne|Greg Ellis|Paul Schulze|James Badge Dale|Medium|Stephen Saunders|Paul Blackthorne|Actor Casting|Virus Mastermind|Former Agent|Season Three Villain|British Actor
 Stephen Saunders was believed dead after taking part in a past operation against which enemy of Jack Bauer?|Victor Drazen|Hector Salazar|Peter Kingsley|Nina Myers|Medium|Stephen Saunders|Victor Drazen|Jack Bauer Mission|Former Colleagues|Presumed Dead|Original Operation|Season One Connections
 Which British intelligence organisation assists CTU in the search for Stephen Saunders?|MI6|MI5|GCHQ|Scotland Yard|Medium|MI6|British Intelligence|Stephen Saunders|Diana White|CTU Cooperation|Attacked Substation|International Investigation
 Which CTU regional director is singled out for execution by Stephen Saunders?|Ryan Chappelle|Tony Almeida|Brad Hammond|George Mason|Easy|Ryan Chappelle|Stephen Saunders|Execution Demand|CTU Regional Director|Bank Account Investigation|Jack Bauer|Hostage Ultimatum
 Who shoots Ryan Chappelle after CTU cannot find Saunders before the deadline?|Jack Bauer|Chase Edmunds|Tony Almeida|Aaron Pierce|Easy|Ryan Chappelle Death|Jack Bauer|Stephen Saunders Ultimatum|Forced Execution|CTU Tragedy|Presidential Pressure|Season Three Defining Scene`,
   },
   {
     topic: 'Jane Saunders, The Hostage Exchange And The Finale',
     facts: `What is the first name of Stephen Saunders' daughter, whom CTU uses to pressure him?|Jane|Julia|Anne|Claudia|Easy|Jane Saunders|Stephen Saunders Daughter|Family Leverage|University Student|CTU Plan|Father Daughter|Virus Threat
 Who played Stephen Saunders' daughter Jane?|Alexandra Lydon|Agnes Bruckner|Vanessa Ferlito|Laura Harris|Hard|Jane Saunders|Alexandra Lydon|Actress Casting|Stephen Saunders|University Student|Season Three Cast|Father Daughter Storyline
 Which CTU employee impersonates Jane Saunders during an undercover operation?|Kim Bauer|Chloe O'Brian|Michelle Dessler|Anne Packard|Medium|Kim Bauer|Jane Saunders Impersonation|Undercover Disguise|Stephen Saunders|University Operation|Elisha Cuthbert|CTU Mission
 Which CTU employee is abducted by Saunders' men to force Tony Almeida to cooperate?|Michelle Dessler|Kim Bauer|Chloe O'Brian|Nina Myers|Easy|Michelle Dessler|Tony Almeida Wife|Stephen Saunders Hostage|CTU Director Blackmail|Kidnapping|Loyalty Conflict|Biological Plot
 What does Tony Almeida secretly allow Saunders to do in order to protect Michelle?|Escape from a building surrounded by CTU|Destroy CTU headquarters|Board a flight to London|Broadcast a false presidential speech|Medium|Tony Almeida|Michelle Dessler Hostage|Stephen Saunders|Escape Route|Compromised Leadership|CTU Perimeter|Husband Wife Dilemma
 Which woman does Tony remove from CTU custody to exchange for Michelle Dessler?|Jane Saunders|Julia Milliken|Kate Warner|Sherry Palmer|Medium|Tony Almeida|Jane Saunders|Michelle Dessler|Hostage Exchange|Stephen Saunders|Unauthorised Release|CTU Security Breach
 What destroys Stephen Saunders' intended getaway helicopter before his arrest?|US Marine fighter jets|A CTU sniper|A remote explosive in the landing gear|A collision with a police helicopter|Hard|Stephen Saunders Arrest|Getaway Helicopter|Marine F A 18 Jets|Hostage Exchange|CTU Operation|Air Strike|Season Three Climax
 What device attached to the remaining virus vials helps CTU locate them?|GPS trackers|Geiger counters|Barcode scanners|Infrared cameras|Medium|Cordilla Virus Vials|GPS Tracking|Stephen Saunders|Nationwide Search|Location Codes|CTU Recovery|Biological Threat
 Whose safety does Jack threaten to pressure Saunders into revealing the vial-tracking codes?|Jane Saunders|Sherry Palmer|Julia Milliken|Claudia Hernandez|Medium|Jane Saunders|Stephen Saunders|Jack Bauer Interrogation|Hotel Infection Threat|Virus Vial Codes|Father Daughter Leverage|Coerced Cooperation
 Who shoots Stephen Saunders after his capture and return to CTU?|Gael Ortega's wife|Kim Bauer|Nina Myers|Michelle Dessler|Hard|Stephen Saunders Death|Gael Ortega Widow|Revenge Shooting|CTU Building|Cordilla Virus|Family Grief|Villain Fate
 What is the name of the operative carrying the final virus vial near the end of Season 3?|Arthur Rabens|Marcus Alvers|Michael Amador|Kyle Singer|Hard|Arthur Rabens|Final Virus Vial|Stephen Saunders Operative|Los Angeles|Subway Tracking|Last Threat|Season Finale
 Where does the final confrontation with Arthur Rabens take place?|At a school|At the White House|Inside a hospital operating theatre|At a baseball stadium|Medium|Arthur Rabens|Jack Bauer|Chase Edmunds|School Confrontation|Final Virus Vial|Children Nearby|Day Three Finale
 What drastic action does Jack take to remove the last virus device from Chase Edmunds?|He cuts off Chase's hand|He amputates Chase's foot|He shoots Chase in the shoulder|He freezes Chase's arm|Medium|Jack Bauer|Chase Edmunds|Hand Amputation|Virus Vial|Handcuffed Device|Emergency Disarmament|Season Three Finale
 Why is Chase unable simply to drop the final virus vial in the last episode?|The device is secured to his hand|He is unconscious beneath rubble|He has been poisoned and cannot move|He is tied to a chair by Saunders|Medium|Chase Edmunds|Final Virus Device|Hand Secured|Arthur Rabens|Jack Bauer|Explosive Mechanism|Desperate Rescue
 What charge does Tony Almeida face after breaking CTU rules to save Michelle?|Treason|Tax evasion|Drug trafficking|Election fraud|Medium|Tony Almeida|Treason Charge|Michelle Dessler Rescue|CTU Custody|Jane Saunders Release|Compromised Operation|Season Three Consequences
 What does Jack Bauer do alone in his vehicle in the final moments of Season 3?|Breaks down crying|Calls Nina Myers|Announces his retirement to the press|Falls asleep for several hours|Medium|Jack Bauer|Emotional Breakdown|Car Scene|Psychological Toll|Day Three Aftermath|Teri Bauer Legacy|Final Moments`,
   },
 ];

 const FIRST_ID = 11247;
 let index = 0;

 const questions = groups.flatMap(group =>
   group.facts.trim().split('\n').map(line => {
     const parts = line.trim().split('|').map(part => part.trim());
     const id = 'tv_' + String(FIRST_ID + index).padStart(4, '0');
     if (parts.length < 13) {
       throw new Error(`At least seven individual tags required at ${id}; got ${parts.length - 6}`);
     }

     const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
     const answers = [wrong1, wrong2, wrong3];
     if (!question || !correctAnswer || answers.some(answer => !answer)) {
       throw new Error(`Missing question or answer at ${id}`);
     }
     if (new Set([correctAnswer, ...answers].map(answer => answer.toLowerCase())).size !== 4) {
       throw new Error(`Repeated answer option at ${id}`);
     }
     if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
       throw new Error(`Invalid difficulty at ${id}`);
     }
     if (specificTags.some(tag => !tag)) {
       throw new Error(`Empty individual tag at ${id}`);
     }

     answers.splice(index % 4, 0, correctAnswer);
     const item = {
       id,
       category: 'Television',
       question: question.includes('24') ? question : 'In 24 (Season 3), ' + question.charAt(0).toLowerCase() + question.slice(1),
       answers,
       correctAnswer,
       difficulty,
       tags: [...new Set([
         'American Television', 'Action Drama', 'Crime Thriller', '24',
         '24 Season 3', '24 Day 3', '2003', '2004', '2000s',
         group.topic, correctAnswer, ...specificTags
       ])],
       dailyEligible: true
     };
     index += 1;
     return item;
   })
 );

 
// EDITORIAL AUDIT 20 November 2026: storyline gaps in Day Three
// Preserves IDs tv_11247–tv_11331; new IDs appended after Pack 278 additions.
// Cross-check sources: TheTVDB season 3 (aired order), TV Guide episode descriptions, 24 episode scripts.
// Review factual correctness and duplication before final sign-off.
const auditAdditions = [
  {
    "id": "tv_35086",
    "category": "Television",
    "question": "In 24 (Season 3), what does Ramon Salazar do to his lawyer during Jack's visit to the prison?",
    "answers": [
      "He kills him",
      "He bribes him to disappear",
      "He hands him over to CTU",
      "He demands that he resign"
    ],
    "correctAnswer": "He kills him",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 01",
      "Clock hour: 13:00",
      "Characters: Ramon Salazar;Jack Bauer",
      "Storyline: Salazar kills his lawyer",
      "Question focus: What does Ramon Salazar do to his lawyer during Jack's visit to the prison?",
      "Answer focus: He kills him",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35087",
    "category": "Television",
    "question": "In 24 (Season 3), what political event is President Palmer preparing for as the virus crisis begins?",
    "answers": [
      "A Supreme Court nomination hearing",
      "A televised debate with Senator Keeler",
      "A vote on a peace treaty",
      "A ceremony appointing a new vice-president"
    ],
    "correctAnswer": "A televised debate with Senator Keeler",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 01",
      "Clock hour: 13:00",
      "Characters: David Palmer;John Keeler",
      "Storyline: Election debate",
      "Question focus: What political event is President Palmer preparing for as the virus crisis begins?",
      "Answer focus: A televised debate with Senator Keeler",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35088",
    "category": "Television",
    "question": "In 24 (Season 3), what personal revelation causes tension between Jack Bauer and his partner Chase Edmunds?",
    "answers": [
      "Chase has been working for Nina",
      "Chase plans to leave CTU for the FBI",
      "Chase is dating Jack's daughter Kim",
      "Chase previously investigated Teri Bauer"
    ],
    "correctAnswer": "Chase is dating Jack's daughter Kim",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 02",
      "Clock hour: 14:00",
      "Characters: Jack Bauer;Chase Edmunds;Kim Bauer",
      "Storyline: Secret relationship",
      "Question focus: What personal revelation causes tension between Jack Bauer and his partner Chase Edmunds?",
      "Answer focus: Chase is dating Jack's daughter Kim",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35089",
    "category": "Television",
    "question": "In 24 (Season 3), what news causes Linda to break up with Kyle Singer while the virus search intensifies?",
    "answers": [
      "He has accepted a job with CTU",
      "He has secretly married another woman",
      "He has been suspended from college",
      "He intends to deliver drugs"
    ],
    "correctAnswer": "He intends to deliver drugs",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 02",
      "Clock hour: 14:00",
      "Characters: Kyle Singer;Linda",
      "Storyline: Kyle's delivery",
      "Question focus: What news causes Linda to break up with Kyle Singer while the virus search intensifies?",
      "Answer focus: He intends to deliver drugs",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35090",
    "category": "Television",
    "question": "In 24 (Season 3), what must Tony Almeida be treated for after a Salazar operative attacks during the Kyle Singer operation?",
    "answers": [
      "A gunshot wound to his neck",
      "A head injury from a vehicle crash",
      "A broken leg",
      "A stab wound to his arm"
    ],
    "correctAnswer": "A gunshot wound to his neck",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 03",
      "Clock hour: 15:00",
      "Characters: Tony Almeida;Kyle Singer",
      "Storyline: Tony critically injured",
      "Question focus: What must Tony Almeida be treated for after a Salazar operative attacks during the Kyle Singer operation?",
      "Answer focus: A gunshot wound to his neck",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35091",
    "category": "Television",
    "question": "In 24 (Season 3), what happens to Kyle Singer and Linda during CTU's attempt to find the supposed virus carrier?",
    "answers": [
      "They are arrested by airport security",
      "Hector Salazar's men capture them",
      "They flee together to another state",
      "They are kidnapped by Nina Myers"
    ],
    "correctAnswer": "Hector Salazar's men capture them",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 04",
      "Clock hour: 16:00",
      "Characters: Kyle Singer;Linda;Hector Salazar",
      "Storyline: Young couple captured",
      "Question focus: What happens to Kyle Singer and Linda during CTU's attempt to find the supposed virus carrier?",
      "Answer focus: Hector Salazar's men capture them",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35092",
    "category": "Television",
    "question": "In 24 (Season 3), why does Jack tell Chase that his behaviour will be reported to CTU?",
    "answers": [
      "Chase has hidden evidence from Palmer",
      "Chase has stolen a CTU vehicle",
      "Chase has disobeyed Jack's orders",
      "Chase has resigned without notice"
    ],
    "correctAnswer": "Chase has disobeyed Jack's orders",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 04",
      "Clock hour: 16:00",
      "Characters: Jack Bauer;Chase Edmunds",
      "Storyline: Partners' dispute",
      "Question focus: Why does Jack tell Chase that his behaviour will be reported to CTU?",
      "Answer focus: Chase has disobeyed Jack's orders",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35093",
    "category": "Television",
    "question": "In 24 (Season 3), who discovers evidence of Jack Bauer's heroin addiction and alerts CTU colleagues?",
    "answers": [
      "Kim Bauer",
      "Nina Myers",
      "Michelle Dessler",
      "Chloe O'Brian"
    ],
    "correctAnswer": "Chloe O'Brian",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 05",
      "Clock hour: 17:00",
      "Characters: Chloe O'Brian;Jack Bauer",
      "Storyline: Heroin problem uncovered",
      "Question focus: Who discovers evidence of Jack Bauer's heroin addiction and alerts CTU colleagues?",
      "Answer focus: Chloe O'Brian",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35094",
    "category": "Television",
    "question": "In 24 (Season 3), what does Kyle Singer offer to do to protect Linda when they are held by the Salazars?",
    "answers": [
      "Sacrifice himself",
      "Give them his parents' savings",
      "Lead them to President Palmer",
      "Pretend to be a CTU agent"
    ],
    "correctAnswer": "Sacrifice himself",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 05",
      "Clock hour: 17:00",
      "Characters: Kyle Singer;Linda",
      "Storyline: Kyle tries to protect Linda",
      "Question focus: What does Kyle Singer offer to do to protect Linda when they are held by the Salazars?",
      "Answer focus: Sacrifice himself",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35095",
    "category": "Television",
    "question": "In 24 (Season 3), why does President Palmer end his election debate prematurely?",
    "answers": [
      "A power cut in the television studio",
      "The escalating Salazar prison-break crisis",
      "A sudden illness in Senator Keeler's family",
      "An argument over the debate rules"
    ],
    "correctAnswer": "The escalating Salazar prison-break crisis",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 06",
      "Clock hour: 18:00",
      "Characters: David Palmer;Ramon Salazar;John Keeler",
      "Storyline: Debate interrupted",
      "Question focus: Why does President Palmer end his election debate prematurely?",
      "Answer focus: The escalating Salazar prison-break crisis",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35096",
    "category": "Television",
    "question": "In 24 (Season 3), whose suspicious communications make Kim Bauer believe there may be a mole inside CTU?",
    "answers": [
      "Chloe O'Brian's",
      "Adam Kaufman's",
      "Gael Ortega's",
      "Michelle Dessler's"
    ],
    "correctAnswer": "Gael Ortega's",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 06",
      "Clock hour: 18:00",
      "Characters: Kim Bauer;Gael Ortega",
      "Storyline: Suspected CTU mole",
      "Question focus: Whose suspicious communications make Kim Bauer believe there may be a mole inside CTU?",
      "Answer focus: Gael Ortega's",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35097",
    "category": "Television",
    "question": "In 24 (Season 3), how does Tony Almeida resolve CTU's misunderstanding about Gael Ortega's apparent betrayal?",
    "answers": [
      "He announces Gael has resigned",
      "He shows that Nina has stolen Gael's identity",
      "He tells Chappelle Gael is an FBI witness",
      "He reveals Gael is part of Jack's covert operation"
    ],
    "correctAnswer": "He reveals Gael is part of Jack's covert operation",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 07",
      "Clock hour: 19:00",
      "Characters: Tony Almeida;Gael Ortega;Ryan Chappelle",
      "Storyline: Secret CTU operation revealed",
      "Question focus: How does Tony Almeida resolve CTU's misunderstanding about Gael Ortega's apparent betrayal?",
      "Answer focus: He reveals Gael is part of Jack's covert operation",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35098",
    "category": "Television",
    "question": "In 24 (Season 3), what is Ramon Salazar threatening to do to Jack while they fly towards Mexico?",
    "answers": [
      "Kill him before the plane lands",
      "Turn him over to the FBI",
      "Abandon him at an airfield",
      "Force him to join the presidential campaign"
    ],
    "correctAnswer": "Kill him before the plane lands",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 07",
      "Clock hour: 19:00",
      "Characters: Ramon Salazar;Jack Bauer",
      "Storyline: Ramon holds Jack hostage in flight",
      "Question focus: What is Ramon Salazar threatening to do to Jack while they fly towards Mexico?",
      "Answer focus: Kill him before the plane lands",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35099",
    "category": "Television",
    "question": "In 24 (Season 3), what does Chase Edmunds suffer after travelling to Mexico against CTU's orders?",
    "answers": [
      "He is stranded when his aircraft is grounded",
      "He is captured by Hector Salazar's men",
      "He is arrested by the Mexican authorities",
      "He is wounded by CTU agents"
    ],
    "correctAnswer": "He is captured by Hector Salazar's men",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 08",
      "Clock hour: 20:00",
      "Characters: Chase Edmunds;Hector Salazar",
      "Storyline: Chase's capture",
      "Question focus: What does Chase Edmunds suffer after travelling to Mexico against CTU's orders?",
      "Answer focus: He is captured by Hector Salazar's men",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35100",
    "category": "Television",
    "question": "In 24 (Season 3), what does Anne Packard decide after the accusations against her have been resolved?",
    "answers": [
      "She joins his re-election campaign",
      "She leaves medicine to become a reporter",
      "She ends her relationship with President Palmer",
      "She agrees to marry Wayne Palmer"
    ],
    "correctAnswer": "She ends her relationship with President Palmer",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 08",
      "Clock hour: 20:00",
      "Characters: Anne Packard;David Palmer",
      "Storyline: Anne leaves Palmer",
      "Question focus: What does Anne Packard decide after the accusations against her have been resolved?",
      "Answer focus: She ends her relationship with President Palmer",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35101",
    "category": "Television",
    "question": "In 24 (Season 3), what information does Alan Milliken use to pressure the Palmer campaign?",
    "answers": [
      "Jack Bauer's former drug addiction",
      "Tony Almeida's marriage to Michelle",
      "The secret identity of Kim's boyfriend",
      "Wayne Palmer's affair with Milliken's wife Julia"
    ],
    "correctAnswer": "Wayne Palmer's affair with Milliken's wife Julia",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 09",
      "Clock hour: 21:00",
      "Characters: Alan Milliken;Wayne Palmer;Julia Milliken",
      "Storyline: Campaign blackmail",
      "Question focus: What information does Alan Milliken use to pressure the Palmer campaign?",
      "Answer focus: Wayne Palmer's affair with Milliken's wife Julia",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35102",
    "category": "Television",
    "question": "In 24 (Season 3), what sudden childcare problem disrupts Chloe O'Brian's work at CTU?",
    "answers": [
      "She is left looking after a baby",
      "Her father arrives for a visit",
      "Her younger sister needs a lift home",
      "A sick nephew is brought to CTU"
    ],
    "correctAnswer": "She is left looking after a baby",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 10",
      "Clock hour: 22:00",
      "Characters: Chloe O'Brian;Angela",
      "Storyline: Baby brought to CTU",
      "Question focus: What sudden childcare problem disrupts Chloe O'Brian's work at CTU?",
      "Answer focus: She is left looking after a baby",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35103",
    "category": "Television",
    "question": "In 24 (Season 3), how does Jack try to persuade Nina Myers to co-operate in Mexico?",
    "answers": [
      "He offers her a job at CTU",
      "He pretends he still has romantic feelings for her",
      "He promises to help her escape prison",
      "He claims to be working for her buyer"
    ],
    "correctAnswer": "He pretends he still has romantic feelings for her",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 10",
      "Clock hour: 22:00",
      "Characters: Jack Bauer;Nina Myers",
      "Storyline: Jack manipulates Nina",
      "Question focus: How does Jack try to persuade Nina Myers to co-operate in Mexico?",
      "Answer focus: He pretends he still has romantic feelings for her",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35104",
    "category": "Television",
    "question": "In 24 (Season 3), what disagreement threatens the Salazar brothers' partnership before the virus exchange?",
    "answers": [
      "Ramon wants to work for the FBI",
      "Hector demands that Nina be arrested",
      "Hector wants to abandon the deal",
      "Ramon plans to move to Washington"
    ],
    "correctAnswer": "Hector wants to abandon the deal",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 11",
      "Clock hour: 23:00",
      "Characters: Ramon Salazar;Hector Salazar",
      "Storyline: Brothers fall out",
      "Question focus: What disagreement threatens the Salazar brothers' partnership before the virus exchange?",
      "Answer focus: Hector wants to abandon the deal",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35105",
    "category": "Television",
    "question": "In 24 (Season 3), what does Kim uncover about the baby Chloe claims is hers?",
    "answers": [
      "The child is already in government custody",
      "The baby's records were destroyed",
      "The child is the daughter of Nina Myers",
      "Chloe is not the baby's mother"
    ],
    "correctAnswer": "Chloe is not the baby's mother",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 12",
      "Clock hour: 00:00",
      "Characters: Kim Bauer;Chloe O'Brian;Angela",
      "Storyline: Chloe's baby secret",
      "Question focus: What does Kim uncover about the baby Chloe claims is hers?",
      "Answer focus: Chloe is not the baby's mother",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35106",
    "category": "Television",
    "question": "In 24 (Season 3), why does CTU urgently need Chloe even after Chappelle has put her under guard?",
    "answers": [
      "She can stop Nina's computer worm",
      "She alone knows Hector's location",
      "She can identify the assassin targeting Palmer",
      "She is responsible for questioning Julia"
    ],
    "correctAnswer": "She can stop Nina's computer worm",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 13",
      "Clock hour: 01:00",
      "Characters: Chloe O'Brian;Nina Myers;Ryan Chappelle",
      "Storyline: Chloe restores communications",
      "Question focus: Why does CTU urgently need Chloe even after Chappelle has put her under guard?",
      "Answer focus: She can stop Nina's computer worm",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35107",
    "category": "Television",
    "question": "In 24 (Season 3), what risky step does Sherry Palmer take to obtain evidence against Alan Milliken?",
    "answers": [
      "She visits Nina Myers in prison",
      "She sneaks into his home to steal his mobile telephone",
      "She plants a microphone at CTU",
      "She secretly sells a campaign recording"
    ],
    "correctAnswer": "She sneaks into his home to steal his mobile telephone",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 13",
      "Clock hour: 01:00",
      "Characters: Sherry Palmer;Alan Milliken",
      "Storyline: Sherry searches Milliken home",
      "Question focus: What risky step does Sherry Palmer take to obtain evidence against Alan Milliken?",
      "Answer focus: She sneaks into his home to steal his mobile telephone",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35108",
    "category": "Television",
    "question": "In 24 (Season 3), what does Nina Myers pretend has happened to her during interrogation to create a chance to escape?",
    "answers": [
      "She has been released on presidential orders",
      "She is suffering a broken leg",
      "She collapses from a medical crisis",
      "She has secretly been poisoned by Jack"
    ],
    "correctAnswer": "She collapses from a medical crisis",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 14",
      "Clock hour: 02:00",
      "Characters: Nina Myers;Tony Almeida",
      "Storyline: Nina's escape attempt",
      "Question focus: What does Nina Myers pretend has happened to her during interrogation to create a chance to escape?",
      "Answer focus: She collapses from a medical crisis",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35109",
    "category": "Television",
    "question": "In 24 (Season 3), whose daughter does Kim discover Chloe has secretly been looking after?",
    "answers": [
      "Jack Bauer's",
      "Tony Almeida's",
      "Ryan Chappelle's",
      "Chase Edmunds's"
    ],
    "correctAnswer": "Chase Edmunds's",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 14",
      "Clock hour: 02:00",
      "Characters: Kim Bauer;Chloe O'Brian;Chase Edmunds;Angela",
      "Storyline: Angela's parentage",
      "Question focus: Whose daughter does Kim discover Chloe has secretly been looking after?",
      "Answer focus: Chase Edmunds's",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35110",
    "category": "Television",
    "question": "In 24 (Season 3), what happens at the Chandler Plaza when Michelle and Gael try to prevent Marcus Alvers releasing the pathogen?",
    "answers": [
      "The virus is released before they can stop it",
      "The guests are evacuated without exposure",
      "The release device is found to be empty",
      "Alvers voluntarily destroys his equipment"
    ],
    "correctAnswer": "The virus is released before they can stop it",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 15",
      "Clock hour: 03:00",
      "Characters: Michelle Dessler;Gael Ortega;Marcus Alvers",
      "Storyline: Hotel contamination",
      "Question focus: What happens at the Chandler Plaza when Michelle and Gael try to prevent Marcus Alvers releasing the pathogen?",
      "Answer focus: The virus is released before they can stop it",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35111",
    "category": "Television",
    "question": "In 24 (Season 3), what threatens to overwhelm Michelle Dessler's quarantine operation inside the Chandler Plaza Hotel?",
    "answers": [
      "A fire that destroys the entire building",
      "A violent disturbance among trapped guests",
      "A power cut affecting all police radios",
      "A flood from the hotel's sprinkler system"
    ],
    "correctAnswer": "A violent disturbance among trapped guests",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 16",
      "Clock hour: 04:00",
      "Characters: Michelle Dessler;Chandler Plaza",
      "Storyline: Hotel quarantine panic",
      "Question focus: What threatens to overwhelm Michelle Dessler's quarantine operation inside the Chandler Plaza Hotel?",
      "Answer focus: A violent disturbance among trapped guests",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35112",
    "category": "Television",
    "question": "In 24 (Season 3), what does Michelle do when an infected hotel guest tries to break quarantine despite her warnings?",
    "answers": [
      "She follows him out of the hotel",
      "She tranquilises him with a dart",
      "She shoots him to stop his escape",
      "She orders the whole hotel evacuated"
    ],
    "correctAnswer": "She shoots him to stop his escape",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 16",
      "Clock hour: 04:00",
      "Characters: Michelle Dessler;Chandler Plaza",
      "Storyline: Michelle stops dangerous escape",
      "Question focus: What does Michelle do when an infected hotel guest tries to break quarantine despite her warnings?",
      "Answer focus: She shoots him to stop his escape",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35113",
    "category": "Television",
    "question": "In 24 (Season 3), what peculiar demand does Stephen Saunders make of President Palmer during the public briefing?",
    "answers": [
      "Announce the closure of all airports permanently",
      "Admit he has secretly resigned",
      "Order all CTU staff home",
      "Include a specific seemingly meaningless phrase"
    ],
    "correctAnswer": "Include a specific seemingly meaningless phrase",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 17",
      "Clock hour: 05:00",
      "Characters: Stephen Saunders;David Palmer",
      "Storyline: Palmer's forced phrase",
      "Question focus: What peculiar demand does Stephen Saunders make of President Palmer during the public briefing?",
      "Answer focus: Include a specific seemingly meaningless phrase",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35114",
    "category": "Television",
    "question": "In 24 (Season 3), what happens to the British intelligence building visited by Jack and Chase while pursuing Saunders?",
    "answers": [
      "It is attacked",
      "It is turned into a quarantine shelter",
      "It is closed by Palmer's executive order",
      "It is converted into a secret prison"
    ],
    "correctAnswer": "It is attacked",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 17",
      "Clock hour: 05:00",
      "Characters: Jack Bauer;Chase Edmunds;MI6",
      "Storyline: MI6 facility attacked",
      "Question focus: What happens to the British intelligence building visited by Jack and Chase while pursuing Saunders?",
      "Answer focus: It is attacked",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35115",
    "category": "Television",
    "question": "In 24 (Season 3), what does Michelle arrange to offer hotel guests suffering from the lethal infection?",
    "answers": [
      "Immediate evacuation by helicopter",
      "Optional suicide capsules to spare them further suffering",
      "A vaccine supplied from CTU",
      "A guaranteed cure from the hospital"
    ],
    "correctAnswer": "Optional suicide capsules to spare them further suffering",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 18",
      "Clock hour: 06:00",
      "Characters: Michelle Dessler;Chandler Plaza",
      "Storyline: End-of-life choice",
      "Question focus: What does Michelle arrange to offer hotel guests suffering from the lethal infection?",
      "Answer focus: Optional suicide capsules to spare them further suffering",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35116",
    "category": "Television",
    "question": "In 24 (Season 3), why does Michelle begin searching urgently for a missing person from the Chandler Plaza Hotel?",
    "answers": [
      "The guest has stolen CTU's access codes",
      "The person is suspected of murdering Gael",
      "The person may have left while carrying the virus",
      "The guest has disappeared with Jane Saunders"
    ],
    "correctAnswer": "The person may have left while carrying the virus",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 18",
      "Clock hour: 06:00",
      "Characters: Michelle Dessler;Chandler Plaza",
      "Storyline: Escape from quarantine",
      "Question focus: Why does Michelle begin searching urgently for a missing person from the Chandler Plaza Hotel?",
      "Answer focus: The person may have left while carrying the virus",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35117",
    "category": "Television",
    "question": "In 24 (Season 3), why does Kim Bauer agree to take part in an undercover operation against Stephen Saunders?",
    "answers": [
      "She has a recording of Saunders confessing",
      "She is fluent in Saunders's preferred code language",
      "She has previously worked for the MI6 office",
      "She resembles his daughter Jane closely enough to impersonate her"
    ],
    "correctAnswer": "She resembles his daughter Jane closely enough to impersonate her",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 19",
      "Clock hour: 07:00",
      "Characters: Kim Bauer;Jane Saunders;Stephen Saunders",
      "Storyline: Kim's impersonation",
      "Question focus: Why does Kim Bauer agree to take part in an undercover operation against Stephen Saunders?",
      "Answer focus: She resembles his daughter Jane closely enough to impersonate her",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35118",
    "category": "Television",
    "question": "In 24 (Season 3), what terrifying discovery does Chase make while tracking a missing guest from the quarantined hotel?",
    "answers": [
      "The infection may already be spreading outside the building",
      "The virus has turned harmless",
      "Saunders has surrendered to police",
      "The guest is a Secret Service agent"
    ],
    "correctAnswer": "The infection may already be spreading outside the building",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 19",
      "Clock hour: 07:00",
      "Characters: Chase Edmunds;Chandler Plaza",
      "Storyline: Spread beyond hotel",
      "Question focus: What terrifying discovery does Chase make while tracking a missing guest from the quarantined hotel?",
      "Answer focus: The infection may already be spreading outside the building",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35119",
    "category": "Television",
    "question": "In 24 (Season 3), what distressing news does CTU analyst Adam Kaufman receive while the outbreak spreads?",
    "answers": [
      "His brother has been taken hostage",
      "His sister has been infected",
      "His father has been accused of spying",
      "His wife has been arrested at the hotel"
    ],
    "correctAnswer": "His sister has been infected",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 20",
      "Clock hour: 08:00",
      "Characters: Adam Kaufman;Cordilla virus",
      "Storyline: Adam's family affected",
      "Question focus: What distressing news does CTU analyst Adam Kaufman receive while the outbreak spreads?",
      "Answer focus: His sister has been infected",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35120",
    "category": "Television",
    "question": "In 24 (Season 3), what do Michelle Dessler's test results reveal after her exposure at the hotel?",
    "answers": [
      "She requires emergency surgery",
      "She has developed a different infection",
      "She has not become infected",
      "She has been given a false sample"
    ],
    "correctAnswer": "She has not become infected",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 20",
      "Clock hour: 08:00",
      "Characters: Michelle Dessler;Chandler Plaza",
      "Storyline: Michelle's test result",
      "Question focus: What do Michelle Dessler's test results reveal after her exposure at the hotel?",
      "Answer focus: She has not become infected",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35121",
    "category": "Television",
    "question": "In 24 (Season 3), who begins to suspect that Tony Almeida is secretly acting against CTU's plans?",
    "answers": [
      "Anne Packard and Wayne Palmer",
      "Nina Myers and Gael Ortega",
      "Adam Kaufman and George Mason",
      "Chloe O'Brian and Jack Bauer"
    ],
    "correctAnswer": "Chloe O'Brian and Jack Bauer",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 21",
      "Clock hour: 09:00",
      "Characters: Tony Almeida;Chloe O'Brian;Jack Bauer",
      "Storyline: Tony's compromised decisions",
      "Question focus: Who begins to suspect that Tony Almeida is secretly acting against CTU's plans?",
      "Answer focus: Chloe O'Brian and Jack Bauer",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35122",
    "category": "Television",
    "question": "In 24 (Season 3), what does Senator Keeler demand from President Palmer after gaining evidence of the Milliken cover-up?",
    "answers": [
      "His resignation",
      "A presidential pardon for Nina Myers",
      "Control of CTU Los Angeles",
      "A new debate with Anne Packard"
    ],
    "correctAnswer": "His resignation",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 22",
      "Clock hour: 10:00",
      "Characters: John Keeler;David Palmer;Alan Milliken",
      "Storyline: Political ultimatum",
      "Question focus: What does Senator Keeler demand from President Palmer after gaining evidence of the Milliken cover-up?",
      "Answer focus: His resignation",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35123",
    "category": "Television",
    "question": "In 24 (Season 3), where does Jack discover the final virus courier may be heading before the last confrontation?",
    "answers": [
      "The presidential debate venue",
      "A Los Angeles subway station",
      "The Mexico border crossing",
      "The Chandler Plaza rooftop"
    ],
    "correctAnswer": "A Los Angeles subway station",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 23",
      "Clock hour: 11:00",
      "Characters: Jack Bauer;Arthur Rabens",
      "Storyline: Subway lead",
      "Question focus: Where does Jack discover the final virus courier may be heading before the last confrontation?",
      "Answer focus: A Los Angeles subway station",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35124",
    "category": "Television",
    "question": "In 24 (Season 3), why do Wayne Palmer and his associate enter Sherry Palmer's home without permission?",
    "answers": [
      "To find the missing virus vials",
      "To rescue a hostage being held by Nina",
      "To recover evidence she plans to use against David",
      "To obtain a warrant for Jack's arrest"
    ],
    "correctAnswer": "To recover evidence she plans to use against David",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 23",
      "Clock hour: 11:00",
      "Characters: Wayne Palmer;Sherry Palmer",
      "Storyline: Evidence search",
      "Question focus: Why do Wayne Palmer and his associate enter Sherry Palmer's home without permission?",
      "Answer focus: To recover evidence she plans to use against David",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35125",
    "category": "Television",
    "question": "In 24 (Season 3), how does Arthur Rabens mislead CTU's search using the tracking device fitted to the virus?",
    "answers": [
      "He leaves the device on an empty train",
      "He replaces the beacon with a police radio",
      "He sends its signal to another country",
      "He transfers its GPS beacon to an innocent person"
    ],
    "correctAnswer": "He transfers its GPS beacon to an innocent person",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 24",
      "Clock hour: 12:00",
      "Characters: Arthur Rabens;Jack Bauer;Chase Edmunds",
      "Storyline: Tracking decoy",
      "Question focus: How does Arthur Rabens mislead CTU's search using the tracking device fitted to the virus?",
      "Answer focus: He transfers its GPS beacon to an innocent person",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35126",
    "category": "Television",
    "question": "In 24 (Season 3), what does Chase do to stop Arthur Rabens carrying the final virus vial away?",
    "answers": [
      "He cuffs himself to the device",
      "He knocks out the train driver",
      "He dismantles the vial's casing",
      "He forces Rabens into a police vehicle"
    ],
    "correctAnswer": "He cuffs himself to the device",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 24",
      "Clock hour: 12:00",
      "Characters: Chase Edmunds;Arthur Rabens",
      "Storyline: Chase restrains final vial",
      "Question focus: What does Chase do to stop Arthur Rabens carrying the final virus vial away?",
      "Answer focus: He cuffs himself to the device",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35127",
    "category": "Television",
    "question": "In 24 (Season 3), what is used to contain the final virus device after Jack removes it from Chase?",
    "answers": [
      "A sealed suitcase",
      "A refrigerator",
      "An aircraft fuel tank",
      "An underground vault"
    ],
    "correctAnswer": "A refrigerator",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 3",
      "24 Day 3",
      "Episode 24",
      "Clock hour: 12:00",
      "Characters: Jack Bauer;Chase Edmunds",
      "Storyline: Final virus containment",
      "Question focus: What is used to contain the final virus device after Jack removes it from Chase?",
      "Answer focus: A refrigerator",
      "Broadcast 2003–2004",
      "Viewer storyline"
    ]
  }
];
questions.push(...auditAdditions);
const EXPECTED_COUNT = 127;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_11247' || questions[84].id !== 'tv_11331' || questions[questions.length - 1].id !== 'tv_35127') {
   throw new Error('Unexpected question ID range');
 }
 if (new Set(questions.map(q => q.id)).size !== questions.length) {
   throw new Error('Repeated question IDs');
 }
 if (new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
   throw new Error('Repeated question wording');
 }
 if (questions.some(q =>
   q.answers.length !== 4 ||
   !q.answers.includes(q.correctAnswer) ||
   q.tags.length < 14 ||
   q.tags.some(tag => !tag) ||
   q.dailyEligible !== true
 )) {
   throw new Error('Incomplete exported question metadata');
 }

 module.exports = questions;

