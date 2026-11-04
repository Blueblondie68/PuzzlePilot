
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
       question,
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

 const EXPECTED_COUNT = 85;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_11247' || questions[questions.length - 1].id !== 'tv_11331') {
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

