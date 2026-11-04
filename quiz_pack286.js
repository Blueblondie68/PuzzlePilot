
 // quiz_pack286.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: 24: Live Another Day (2014, Day 9)
 // London, the CIA, Open Cell, Margot Al-Harazi, President Heller,
 // the drone override, Cheng Zhi and Jack Bauer's final exchange.
 // A twelve-episode event series: no padding with episode-title recall.
 // Seven individually selected specialist tags per question.
 // Leave quiz_bank.js unchanged until the agreed end-of-session connection.
 // Row: question | correct answer | three wrong answers | difficulty | seven specific tags

 const groups = [
   {
     topic: 'Return to London and the Presidential Visit',
     facts: `In what year was 24: Live Another Day first broadcast?|2014|2010|2012|2016|Easy|2014 Premiere|Fox Broadcasting|Limited Event Series|Jack Bauer Return|Television Revival|May Debut|US Drama
 How many episodes comprise 24: Live Another Day?|Twelve|Six|Eighteen|Twenty-four|Easy|Twelve Episodes|Limited Series Format|2014 Television|Day Nine|Event Season|Fox Network|Production Format
 Which city is the principal setting for 24: Live Another Day?|London|Los Angeles|New York City|Washington DC|Easy|London|United Kingdom|CIA London Station|British Setting|Location Filming|Jack Bauer Exile|Day Nine
 How many years have passed in the story since the events of 24 Season 8?|Four years|One year|Eight years|Six months|Medium|Four Year Gap|Season Eight Aftermath|Jack Bauer Fugitive|Series Chronology|London Return|Time Jump|Day Nine
 At what time does Day 9 begin in 24: Live Another Day?|11 am|7 am|4 pm|Midnight|Medium|Eleven AM Opening|Real Time Format|Day Nine Timeline|London Morning|Season Premiere|Clock Display|2014
 What unusual time change allows the twelve episodes to cover a complete day?|A twelve-hour jump in the final episode|The story runs backwards for six hours|Every episode covers two hours|The opening skips twenty-four hours|Medium|Twelve Hour Jump|Final Episode|Real Time Structure|Eleven AM End|Day Nine|2014 Series|Storytelling Format
 Who is President of the United States during 24: Live Another Day?|James Heller|Allison Taylor|Charles Logan|Wayne Palmer|Easy|James Heller|US Presidency|London Visit|Former Defence Secretary|Audrey Father|William Devane|White House
 Which actor returned to portray President James Heller?|William Devane|Powers Boothe|Gregory Itzin|Dennis Haysbert|Medium|William Devane|James Heller|Actor Casting|Returning Character|American President|Season Four Link|2014
 Which British prime minister holds talks with President Heller?|Alastair Davies|Thomas Lennox|John Keeler|Ethan Kanin|Medium|Alastair Davies|British Prime Minister|James Heller|UK US Diplomacy|London Summit|Political Negotiations|Downing Street
 Which actor played British Prime Minister Alastair Davies?|Stephen Fry|Hugh Laurie|Colin Salmon|Robert Carlyle|Easy|Stephen Fry|Alastair Davies|Actor Casting|British Prime Minister|British Television Personality|2014 Guest Star|Diplomacy
 Which illness is President Heller struggling with during his London visit?|Alzheimer's disease|Parkinson's disease|Motor neurone disease|Multiple sclerosis|Medium|James Heller|Alzheimers Disease|Memory Loss|Presidential Fitness|Political Secrecy|Ageing|Medical Condition
 Which television network originally broadcast Live Another Day in the United States?|Fox|CBS|HBO|NBC|Easy|Fox Network|Original Broadcaster|24 Franchise|2014 Premiere|American Television|Limited Event Series|Television Distribution`,
   },
   {
     topic: 'Jack, Chloe and the CIA London Team',
     facts: `Who is the CIA agent who realises Jack Bauer has deliberately allowed himself to be captured?|Kate Morgan|Renee Walker|Dana Walsh|Janis Gold|Easy|Kate Morgan|CIA Field Agent|Jack Bauer Capture|London Station|Fugitive Pursuit|Suspicious Arrest|Day Nine
 Which actress portrayed CIA agent Kate Morgan?|Yvonne Strahovski|Annie Wersching|Kim Raver|Katee Sackhoff|Easy|Yvonne Strahovski|Kate Morgan|Actress Casting|CIA London|Australian Actress|Season Nine Lead|2014 Cast
 Which CIA station chief is secretly involved in selling intelligence?|Steve Navarro|Erik Ritter|Jordan Reed|Brian Hastings|Medium|Steve Navarro|CIA London Chief|Intelligence Sales|Hidden Corruption|Adam Morgan|Agency Betrayal|Station Leadership
 Which actor played CIA station chief Steve Navarro?|Benjamin Bratt|Carlos Bernard|Gbenga Akinnagbe|Tate Donovan|Medium|Benjamin Bratt|Steve Navarro|Actor Casting|CIA Station Chief|London Bureau|2014 Main Cast|Hidden Villain
 Which CIA field agent frequently works alongside Kate Morgan?|Erik Ritter|Mike Doyle|Curtis Manning|Chase Edmunds|Medium|Erik Ritter|Kate Morgan|CIA Partner|Field Operations|London Team|Jack Bauer Search|2014 Character
 Which actor portrayed CIA agent Erik Ritter?|Gbenga Akinnagbe|Giles Matthey|John Boyega|Ross McCall|Hard|Gbenga Akinnagbe|Erik Ritter|Actor Casting|CIA Field Agent|London Station|Season Nine Ensemble|American Actor
 Which young CIA communications officer uncovers evidence about Kate's husband?|Jordan Reed|Arlo Glass|Morris O'Brian|Sean Hillinger|Medium|Jordan Reed|CIA Communications|Adam Morgan|Suspicious Evidence|Internal Investigation|Steve Navarro|London Station
 Which actor played CIA analyst Jordan Reed?|Giles Matthey|Michael Wincott|John Boyd|Sacha Dhawan|Hard|Giles Matthey|Jordan Reed|Actor Casting|CIA Analyst|2014 Cast|London Headquarters|Technical Officer
 Why does Jack intentionally let the CIA capture him at the start of Day 9?|To reach Chloe O'Brian and free her|To demand a meeting with the Queen|To enter witness protection|To become CIA director|Easy|Jack Bauer|Chloe O Brian|Deliberate Capture|CIA Interrogation|Rescue Mission|Belcheck|Fugitive Plan
 Which ally helps Jack free Chloe from CIA custody?|Belcheck|Ian Al-Harazi|Adrian Cross|Anatol Stolnavich|Medium|Belcheck|Jack Bauer Ally|Chloe Rescue|Former Serbian Enforcer|CIA Facility|Covert Support|London Operations
 Which former CTU analyst has joined the hacker collective Open Cell?|Chloe O'Brian|Dana Walsh|Sarah Gavin|Marianne Taylor|Easy|Chloe O Brian|Open Cell|Mary Lynn Rajskub|Hacktivist|Former CTU Analyst|Government Surveillance|2014 Return
 Who are the two family members Chloe says were killed in a hit-and-run accident?|Her husband Morris and son Prescott|Her father and brother|Her husband Jack and daughter Teri|Her sister and nephew|Medium|Chloe O Brian|Morris O Brian|Prescott O Brian|Hit And Run|Family Bereavement|Jack Bauer Guilt|Backstory`,
   },
   {
     topic: 'Open Cell, the Override Device and the Drone Threat',
     facts: `Who leads the hacktivist collective called Open Cell?|Adrian Cross|Derrick Yates|Steve Navarro|Cheng Zhi|Easy|Adrian Cross|Open Cell|Hacktivist Leader|Freedom Of Information|Chloe O Brian|London Hackers|Cyber Activism
 Which actor portrayed hacker Adrian Cross?|Michael Wincott|Tate Donovan|Benjamin Bratt|William Devane|Medium|Michael Wincott|Adrian Cross|Actor Casting|Open Cell Leader|Canadian Actor|2014 Main Cast|Hacker Collective
 Which former Open Cell member develops the device that can commandeer American drones?|Derrick Yates|Jordan Reed|Erik Ritter|Mark Boudreau|Medium|Derrick Yates|Override Device|Open Cell Defector|Drone Hacking|Cyber Weapon|Margot Al Harazi|Technical Specialist
 What type of military equipment does the stolen override device control?|Unmanned aerial drones|Nuclear submarines only|Satellite weather balloons|Armoured troop carriers|Easy|Override Device|Unmanned Drones|Military Cyberattack|US Air Force|Remote Hijacking|Margot Al Harazi|London Attacks
 Which US Air Force pilot is wrongly blamed when a drone kills allied troops?|Chris Tanner|Cole Ortiz|Mike Doyle|Greg Denovo|Medium|Chris Tanner|Air Force Pilot|False Accusation|Drone Strike|Allied Casualties|Flight Control Hack|Military Investigation
 Which actor played US Air Force pilot Chris Tanner?|John Boyega|Branko Tomovic|Sacha Dhawan|Liam Garrigan|Medium|John Boyega|Chris Tanner|Actor Casting|US Air Force|Drone Incident|British Actor|Guest Appearance
 What proof does Jack seek from Tanner inside the US embassy?|His drone flight key|His passport|A signed presidential pardon|An encrypted bank card|Medium|Chris Tanner|Drone Flight Key|US Embassy|Jack Bauer|Digital Evidence|Flight Data|Margot Investigation
 Which terrorist leader gains control of the American drones over London?|Margot Al-Harazi|Nina Myers|Cara Bowden|Dalia Hassan|Easy|Margot Al Harazi|Drone Attacks|London Threat|Terrorist Leader|President Heller|Revenge Plot|Day Nine
 Which actress played Margot Al-Harazi?|Michelle Fairley|Lena Headey|Kim Raver|Cherry Jones|Medium|Michelle Fairley|Margot Al Harazi|Actress Casting|Irish Actress|Drone Terrorism|Season Nine Antagonist|2014
 Whose death is Margot attempting to avenge through her attacks?|Her husband Mahmoud's|Her son Ian's|Her brother Naveed's|Her father Juma's|Medium|Margot Al Harazi|Mahmoud Al Harazi|Revenge Motive|US Drone Strike|Family Grievance|President Heller|Past Attack
 How many American drones does Margot seize control of?|Six|Two|Twelve|Twenty|Medium|Six Drones|Margot Al Harazi|Drone Override|Remote Hijacking|Air Attack|London|Terrorist Ultimatum
 What does Margot demand from President Heller in return for stopping her attacks?|That he surrender himself to her|That he resign and move to France|That he release all prisoners at CTU|That he appoint her prime minister|Medium|Margot Al Harazi|James Heller|Surrender Demand|Drone Ultimatum|Political Coercion|London Civilians|President Targeted`,
   },
   {
     topic: 'The Al-Harazi Family, Simone and the Hospital',
     facts: `What is the first name of Margot Al-Harazi's daughter?|Simone|Audrey|Chloe|Marika|Easy|Simone Al Harazi|Margot Daughter|Family Loyalty|London Terror Cell|Naveed Shabazz|2014 Character|Mother Daughter
 Which actress played Simone Al-Harazi?|Emily Berrington|Michelle Fairley|Miranda Raison|Mandeep Dhillon|Medium|Emily Berrington|Simone Al Harazi|Actress Casting|Margot Daughter|2014 Guest Cast|Terrorist Family|British Actress
 Which of Margot's children helps operate the drones after Naveed's death?|Ian|Simone|Mahmoud|Naveed|Medium|Ian Al Harazi|Drone Control|Margot Son|Naveed Death|Technical Operations|Drone Attacks|Terrorist Family
 Which actor portrayed Ian Al-Harazi?|Liam Garrigan|Sacha Dhawan|Joseph Millson|Giles Matthey|Medium|Liam Garrigan|Ian Al Harazi|Actor Casting|Drone Operator|Margot Son|2014 Guest Cast|Irish Actor
 Who is Simone Al-Harazi's husband?|Naveed Shabazz|Derrick Yates|Adrian Cross|Erik Ritter|Easy|Naveed Shabazz|Simone Al Harazi|Marriage|Drone Operation|Margot Al Harazi|Family Conflict|Terrorist Plot
 Which actor played Naveed Shabazz?|Sacha Dhawan|Liam Garrigan|John Boyega|Tamer Hassan|Medium|Sacha Dhawan|Naveed Shabazz|Actor Casting|Simone Husband|Drone Pilot|British Actor|2014
 What does Margot do when Naveed attempts to sabotage the drone operation?|She has him executed|She allows him to escape|She hands him to British police|She gives him command of all the drones|Medium|Margot Al Harazi|Naveed Shabazz Death|Sabotage Attempt|Family Betrayal|Drone Operation|Execution|Terror Cell
 Why does Margot send Simone to visit Naveed's relatives?|To silence anyone who might expose the plot|To invite them to a wedding|To collect a family inheritance|To ask for a presidential pardon|Medium|Simone Al Harazi|Naveed Family|Silencing Witnesses|Margot Orders|Secret Cell|Murder Plot|Family Pressure
 What happens to Simone as she pursues Naveed's young niece?|She is struck by a vehicle|She is arrested at an airport|She falls from a helicopter|She is trapped in a lift|Medium|Simone Al Harazi|Traffic Accident|Naveed Niece|Pursuit|Hospitalisation|Witness Chase|London Streets
 Where is Simone questioned after being injured?|In a hospital|At Wembley Stadium|On a naval vessel|At the Russian embassy|Easy|Simone Al Harazi|Hospital Interrogation|Jack Bauer|Kate Morgan|Drone Plot Evidence|Injured Witness|London
 How does Margot try to kill Simone once she learns her daughter is being questioned?|She orders a drone strike on the hospital|She sends a poisoned meal|She detonates a bomb in a taxi|She sends a sniper to a railway bridge|Medium|Margot Al Harazi|Simone Al Harazi|Hospital Drone Strike|Witness Elimination|Jack Bauer|Kate Morgan|Civilian Threat
 Who helps Jack get Simone away from the threatened hospital?|Kate Morgan|Dana Walsh|Marika Donoso|Olivia Taylor|Easy|Kate Morgan|Simone Al Harazi Rescue|Jack Bauer|Hospital Evacuation|CIA Field Agent|Drone Missile|London Operation`,
   },
   {
     topic: 'Wembley, the Last Drone and the CIA Conspiracy',
     facts: `At which London stadium does Heller apparently face Margot's drone strike?|Wembley Stadium|Twickenham Stadium|Emirates Stadium|Stamford Bridge|Easy|Wembley Stadium|James Heller|Drone Strike|Margot Ultimatum|London Landmark|Football Venue|Presidential Sacrifice
 What does Heller do for Jack before agreeing to Margot's surrender demand?|He grants Jack a presidential pardon|He appoints Jack secretary of state|He gives Jack control of the CIA|He revokes Jack's American citizenship|Medium|James Heller|Jack Bauer|Presidential Pardon|Surrender Plan|Past Charges|Drone Ultimatum|Wembley
 How does Jack prevent President Heller from being killed at Wembley?|Chloe loops the drone video while Heller leaves|Heller wears a bulletproof suit|The missile misses the stadium entirely|British troops shoot the drone down first|Medium|Chloe O Brian|Looped Video|James Heller Survival|Wembley Stadium|Drone Camera|Jack Bauer|Deception
 After believing Heller has died, how many hijacked drones does Margot deliberately destroy?|Five|One|Three|All six|Medium|Five Drones|Margot Al Harazi|Apparent Heller Death|Promise To Stop|Drone Disposal|Wembley Aftermath|Remote Control
 Which major London transport hub is threatened by Margot's final remaining drone?|Waterloo station|King's Cross station|Heathrow Terminal 5|Victoria Coach Station|Medium|Waterloo Station|Final Drone|London Railway|Civilian Targets|Margot Al Harazi|Last Attack|Public Transport
 Who kills Ian Al-Harazi while stopping the final drone attack?|Jack Bauer|Kate Morgan|Erik Ritter|Steve Navarro|Easy|Ian Al Harazi Death|Jack Bauer|Drone Control Room|Waterloo Threat|Counterterrorist Raid|Margot Son|Final Strike
 How does Margot Al-Harazi die after Jack stops her final drone?|Jack throws her from a window|She escapes to Russia|She dies in a helicopter crash|She detonates her own explosives|Medium|Margot Al Harazi Death|Jack Bauer|Thrown From Window|Drone Plot End|London Building|Final Confrontation|Antagonist Death
 Which CIA analyst discovers evidence suggesting Kate Morgan's convicted husband was innocent?|Jordan Reed|Arlo Glass|Erik Ritter|Gavin Leonard|Medium|Jordan Reed|Adam Morgan|Wrongful Conviction|CIA Investigation|Steve Navarro|Evidence Discovery|Financial Records
 Which senior CIA official is revealed to have framed Adam Morgan?|Steve Navarro|Erik Ritter|Jordan Reed|Brian Hastings|Easy|Steve Navarro|Adam Morgan|Framed Husband|Selling Intelligence|CIA Corruption|Kate Morgan|Betrayal
 Which assassin is hired to silence Jordan Reed before he can expose the CIA conspiracy?|James Harman|Derrick Yates|Ian Al-Harazi|Mark Boudreau|Medium|James Harman|Jordan Reed|Contract Killing|Former CIA Operative|Steve Navarro|Silencing Witness|Fatal Confrontation
 What happens when Jordan Reed struggles with the assassin who attacks him?|Both men are fatally wounded|Jordan captures him unharmed|Both escape on a motorbike|The assassin changes sides and protects him|Medium|Jordan Reed Death|James Harman Death|Mutual Struggle|Failed Assassination|CIA Cover Up|Steve Navarro|London
 To whom does Steve Navarro deliver the stolen override device after fleeing the CIA?|Adrian Cross|James Heller|Margot Al-Harazi|Alastair Davies|Medium|Steve Navarro|Adrian Cross|Stolen Override|CIA Escape|Open Cell|Secret Deal|Tech Transfer`,
   },
   {
     topic: 'Cheng Zhi, Russia, Audrey and Jack’s Fate',
     facts: `Which former Chinese intelligence official returns as the final major antagonist?|Cheng Zhi|Yuri Suvarov|Anatoly Markov|Ike Dubaku|Easy|Cheng Zhi|Chinese Intelligence|Former Captor|Season Six Link|Naval Conspiracy|2014 Return|Jack Bauer Enemy
 Which actor returned to play Cheng Zhi?|Tzi Ma|John Noble|Tony Todd|Michael Wincott|Medium|Tzi Ma|Cheng Zhi|Actor Casting|Chinese Official|Returning Antagonist|2014 Cast|International Thriller
 Who does Cheng kill when he seizes the override device from Open Cell?|Adrian Cross|Kate Morgan|Steve Navarro|Belcheck|Medium|Adrian Cross Death|Cheng Zhi|Open Cell Massacre|Override Device|Hacker Leader|Chinese Operatives|Betrayal
 Who is forced by Cheng to help adapt the override device for his naval operation?|Chloe O'Brian|Audrey Boudreau|Simone Al-Harazi|Kate Morgan|Medium|Chloe O Brian|Cheng Zhi|Override Reprogramming|Coercion|Naval Weapons|Hostage|Cyberattack
 What American military vessel does Cheng trick into firing on a Chinese warship?|A submarine|An aircraft carrier|A destroyer escort|A naval supply ship|Medium|American Submarine|Cheng Zhi|False Torpedo Order|Naval Provocation|Stolen Override|US China Tensions|War Threat
 Which type of Chinese vessel is sunk by the falsified American torpedo order?|An aircraft carrier|A hospital ship|A fishing trawler|An icebreaker|Medium|Chinese Aircraft Carrier|False Torpedo Launch|Cheng Zhi|Submarine Attack|China US Crisis|Naval Escalation|Override Device
 Which Russian deputy foreign minister pressures Mark Boudreau over Jack's extradition?|Anatol Stolnavich|Mikhail Novakovich|Yuri Suvarov|Dmitri Gredenko|Hard|Anatol Stolnavich|Russian Deputy Foreign Minister|Mark Boudreau|Extradition Threat|Jack Bauer|Russian Intelligence|Political Blackmail
 Which presidential chief of staff forges Heller's signature on Jack's extradition papers?|Mark Boudreau|Ethan Kanin|Tom Lennox|Mike Novick|Easy|Mark Boudreau|Forged Signature|James Heller|Extradition To Russia|Presidential Authority|Political Scandal|Chief Of Staff
 To whom is Mark Boudreau married during Live Another Day?|Audrey Boudreau|Kate Morgan|Chloe O'Brian|Simone Al-Harazi|Easy|Mark Boudreau|Audrey Boudreau|Marriage|Heller Family|Tate Donovan|White House Staff|Jack Bauer Rivalry
 What information does Mark give the Russians that puts Jack's mission in danger?|Jack's secure communications frequency|The address of the British prime minister|A list of drone pilots' birthdays|The coordinates of CTU in Los Angeles|Medium|Mark Boudreau|Secure Radio Frequency|Russian Ambush|Anatol Stolnavich|Jack Bauer|Betrayal|Communications Leak
 Which daughter of President Heller is killed during Cheng's escape plot?|Audrey Boudreau|Kim Bauer|Olivia Taylor|Kayla Hassan|Easy|Audrey Boudreau|James Heller Daughter|Cheng Zhi|London Snipers|Kate Morgan|Finale Tragedy|Political Family
 Which actress portrayed Audrey Boudreau in the 2014 series?|Kim Raver|Cherry Jones|Michelle Fairley|Yvonne Strahovski|Medium|Kim Raver|Audrey Boudreau|Actress Casting|James Heller Daughter|Mark Boudreau Wife|Returning Character|2014
 Where does Jack confront Cheng during the final pursuit?|On a freighter|Inside Wembley Stadium|In the Houses of Parliament|In a hospital basement|Medium|Jack Bauer|Cheng Zhi|Freighter|London Waterfront|Final Assault|Belcheck|Escape Attempt
 What does Jack do after obtaining confirmation of Cheng's identity for the US and Chinese presidents?|He kills Cheng Zhi|He extradites Cheng to Russia|He allows Cheng to escape|He appoints Cheng to the CIA|Medium|Cheng Zhi Death|Jack Bauer|Identity Verification|President Wei|James Heller|Final Revenge|Naval Crisis Resolved
 What decision does Kate Morgan make after the deaths and betrayals of Day 9?|She resigns from the CIA|She becomes British prime minister|She joins Open Cell as leader|She becomes President Heller's chief of staff|Medium|Kate Morgan|CIA Resignation|Audrey Death|Adam Morgan|Finale Aftermath|Career Decision|2014 Ending
 To secure Chloe's release at the end of Live Another Day, whom does Jack surrender to?|Russian agents|British police|Chinese naval officers|The US Senate|Easy|Jack Bauer Surrender|Russian Custody|Chloe O Brian Freedom|Prisoner Exchange|Finale|London Airfield|Day Nine Ending`,
   },
 ];

 const FIRST_ID = 11798;
 let index = 0;

 const questions = groups.flatMap(group =>
   group.facts.trim().split('\n').map(line => {
     const parts = line.trim().split('|').map(part => part.trim());
     const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
     if (parts.length !== 13) {
       throw new Error(`Expected seven individual tags at ${id}; got ${parts.length - 6}`);
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
         '24 Live Another Day', '24 Season 9', '24 Day 9', '2014', '2010s',
         group.topic, correctAnswer, ...specificTags
       ])],
       dailyEligible: true
     };
     index += 1;
     return item;
   })
 );

 const EXPECTED_COUNT = 76;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_11798' || questions[questions.length - 1].id !== 'tv_11873') {
   throw new Error('Unexpected question ID range');
 }
 if (new Set(questions.map(q => q.id)).size !== questions.length) {
   throw new Error('Duplicate question IDs');
 }
 if (new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
   throw new Error('Duplicate question wording');
 }
 if (questions.some(q =>
   q.category !== 'Television' ||
   q.answers.length !== 4 ||
   !q.answers.includes(q.correctAnswer) ||
   q.tags.length < 16 ||
   q.tags.some(tag => !tag) ||
   q.dailyEligible !== true
 )) {
   throw new Error('Incomplete exported question metadata');
 }

 module.exports = questions;
