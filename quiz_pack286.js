
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
       question: question.includes('24: Live Another Day') ? question : 'In 24: Live Another Day, ' + question.charAt(0).toLowerCase() + question.slice(1),
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

 
// STORYLINE AUDIT: 21 November 2026 — 24: Live Another Day (2014)
// Preserved original IDs tv_11798–tv_11873 and added distinct scenes across all twelve episodes.
// Episode references: https://en.wikipedia.org/wiki/24:_Live_Another_Day#Episodes
// Cross-check: https://www.tvguide.com/tvshows/24-live-another-day/episodes-season-1/1030529017/
const auditAdditions = [
  {
    "id": "tv_35399",
    "category": "Television",
    "question": "In 24: Live Another Day, how does Belcheck create the opportunity for Jack Bauer to free Chloe from the CIA detention facility?",
    "answers": [
      "He cuts the power and blasts a hole through the road above the facility",
      "He impersonates a CIA station chief",
      "He sends a forged presidential pardon",
      "He hijacks a helicopter and lands on the roof"
    ],
    "correctAnswer": "He cuts the power and blasts a hole through the road above the facility",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 01",
      "London",
      "Jack Bauer Era",
      "Characters: Belcheck;Jack Bauer;Chloe O'Brian",
      "Storyline: CIA rescue through road blast",
      "Question focus: how does Belcheck create the opportunity for Jack Bauer to free Chloe from the CIA detention facility?",
      "Answer focus: He cuts the power and blasts a hole through the road above the facility",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35400",
    "category": "Television",
    "question": "In 24: Live Another Day, what method is being used to interrogate Chloe before Jack breaks her out?",
    "answers": [
      "She is being questioned under hypnosis",
      "She is being given truth serum",
      "She is being threatened with deportation",
      "She is being held in a soundproof isolation chamber"
    ],
    "correctAnswer": "She is being given truth serum",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 01",
      "London",
      "Jack Bauer Era",
      "Characters: Chloe O'Brian;CIA;Jack Bauer",
      "Storyline: Chloe drugged in interrogation",
      "Question focus: what method is being used to interrogate Chloe before Jack breaks her out?",
      "Answer focus: She is being given truth serum",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35401",
    "category": "Television",
    "question": "In 24: Live Another Day, why is Kate Morgan facing the end of her CIA career at the start of the London crisis?",
    "answers": [
      "She failed to protect the British prime minister",
      "She refused to testify against Jack Bauer",
      "She is blamed for failing to detect her husband's alleged treason",
      "She sold confidential drone plans to Open Cell"
    ],
    "correctAnswer": "She is blamed for failing to detect her husband's alleged treason",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 01",
      "London",
      "Jack Bauer Era",
      "Characters: Kate Morgan;Adam Morgan;Steve Navarro",
      "Storyline: Kate blamed for husband's alleged spying",
      "Question focus: why is Kate Morgan facing the end of her CIA career at the start of the London crisis?",
      "Answer focus: She is blamed for failing to detect her husband's alleged treason",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35402",
    "category": "Television",
    "question": "In 24: Live Another Day, who murders Derrick Yates and takes his drone-override device after he escapes the shootout?",
    "answers": [
      "His former hacker colleague Chloe O'Brian",
      "CIA agent Kate Morgan",
      "President Heller's adviser Audrey Boudreau",
      "His girlfriend Simone Al-Harazi"
    ],
    "correctAnswer": "His girlfriend Simone Al-Harazi",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 02",
      "London",
      "Jack Bauer Era",
      "Characters: Derrick Yates;Simone Al-Harazi",
      "Storyline: Yates betrayed by girlfriend",
      "Question focus: who murders Derrick Yates and takes his drone-override device after he escapes the shootout?",
      "Answer focus: His girlfriend Simone Al-Harazi",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35403",
    "category": "Television",
    "question": "In 24: Live Another Day, what type of place does Derrick Yates flee to just before his girlfriend kills him?",
    "answers": [
      "A pub",
      "A railway platform",
      "A hospital ward",
      "A hotel restaurant"
    ],
    "correctAnswer": "A pub",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 02",
      "London",
      "Jack Bauer Era",
      "Characters: Derrick Yates;Simone Al-Harazi",
      "Storyline: Yates murdered in pub",
      "Question focus: what type of place does Derrick Yates flee to just before his girlfriend kills him?",
      "Answer focus: A pub",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35404",
    "category": "Television",
    "question": "In 24: Live Another Day, how does Jack obtain the first lead to Derrick Yates through Adrian Cross's hacker group?",
    "answers": [
      "He wins a government auction of stolen data",
      "He storms Open Cell's hideout and demands Yates's location",
      "He finds Yates's address inside a White House letter",
      "He receives a confession from the British prime minister"
    ],
    "correctAnswer": "He storms Open Cell's hideout and demands Yates's location",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 02",
      "London",
      "Jack Bauer Era",
      "Characters: Jack Bauer;Adrian Cross;Open Cell",
      "Storyline: Jack confronts hacktivists",
      "Question focus: how does Jack obtain the first lead to Derrick Yates through Adrian Cross's hacker group?",
      "Answer focus: He storms Open Cell's hideout and demands Yates's location",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35405",
    "category": "Television",
    "question": "In 24: Live Another Day, what causes Chloe to lose sight of Simone during the pursuit through London?",
    "answers": [
      "Her tracking equipment loses its battery",
      "She is intercepted by a British police patrol",
      "Seeing a family reminds her of her dead husband and son",
      "She runs into her old colleague Audrey"
    ],
    "correctAnswer": "Seeing a family reminds her of her dead husband and son",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 03",
      "London",
      "Jack Bauer Era",
      "Characters: Chloe O'Brian;Simone Al-Harazi",
      "Storyline: Chloe distracted by grief",
      "Question focus: what causes Chloe to lose sight of Simone during the pursuit through London?",
      "Answer focus: Seeing a family reminds her of her dead husband and son",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35406",
    "category": "Television",
    "question": "In 24: Live Another Day, how does Jack create a disturbance that helps him enter the heavily guarded American embassy?",
    "answers": [
      "He pulls a fire alarm from an office",
      "He drives an ambulance into the perimeter",
      "He fakes a terrorist warning on television",
      "He shoots two protesters to provoke a rush into the building"
    ],
    "correctAnswer": "He shoots two protesters to provoke a rush into the building",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 03",
      "London",
      "Jack Bauer Era",
      "Characters: Jack Bauer;Chloe O'Brian;Kate Morgan",
      "Storyline: Embassy protest diversion",
      "Question focus: how does Jack create a disturbance that helps him enter the heavily guarded American embassy?",
      "Answer focus: He shoots two protesters to provoke a rush into the building",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35407",
    "category": "Television",
    "question": "In 24: Live Another Day, who secretly sabotages the fake identity Chloe prepares for Jack's embassy infiltration?",
    "answers": [
      "Adrian Cross",
      "Steve Navarro",
      "Mark Boudreau",
      "Margot Al-Harazi"
    ],
    "correctAnswer": "Adrian Cross",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 03",
      "London",
      "Jack Bauer Era",
      "Characters: Adrian Cross;Chloe O'Brian;Jack Bauer",
      "Storyline: Cross interferes with false ID",
      "Question focus: who secretly sabotages the fake identity Chloe prepares for Jack's embassy infiltration?",
      "Answer focus: Adrian Cross",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35408",
    "category": "Television",
    "question": "In 24: Live Another Day, how does Jack buy time to send the drone pilot's flight-key evidence to Chloe?",
    "answers": [
      "He impersonates President Heller's bodyguard",
      "He locks himself in an embassy room with three hostages",
      "He blocks the entrance with an armoured vehicle",
      "He threatens to destroy the embassy's computer servers"
    ],
    "correctAnswer": "He locks himself in an embassy room with three hostages",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 04",
      "London",
      "Jack Bauer Era",
      "Characters: Jack Bauer;Chris Tanner;Chloe O'Brian",
      "Storyline: Jack's embassy hostage standoff",
      "Question focus: how does Jack buy time to send the drone pilot's flight-key evidence to Chloe?",
      "Answer focus: He locks himself in an embassy room with three hostages",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35409",
    "category": "Television",
    "question": "In 24: Live Another Day, what secret order does Mark Boudreau give an embassy guard during Jack's standoff?",
    "answers": [
      "Hand the drone flight key to Open Cell",
      "Escort Chloe into the presidential rooms",
      "Kill Jack rather than let him be taken alive",
      "Resign from the security team immediately"
    ],
    "correctAnswer": "Kill Jack rather than let him be taken alive",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 04",
      "London",
      "Jack Bauer Era",
      "Characters: Mark Boudreau;Jack Bauer;Kate Morgan",
      "Storyline: Mark orders Jack killed",
      "Question focus: what secret order does Mark Boudreau give an embassy guard during Jack's standoff?",
      "Answer focus: Kill Jack rather than let him be taken alive",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35410",
    "category": "Television",
    "question": "In 24: Live Another Day, what does Margot Al-Harazi do to her daughter Simone to force Naveed to operate the drones?",
    "answers": [
      "She locks Simone inside a drone hangar",
      "She sends Simone to the Russian embassy",
      "She threatens to expose Simone's secret identity",
      "She has one of Simone's fingers cut off"
    ],
    "correctAnswer": "She has one of Simone's fingers cut off",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 04",
      "London",
      "Jack Bauer Era",
      "Characters: Margot Al-Harazi;Simone Al-Harazi;Naveed Shabazz",
      "Storyline: Margot tortures daughter to control son-in-law",
      "Question focus: what does Margot Al-Harazi do to her daughter Simone to force Naveed to operate the drones?",
      "Answer focus: She has one of Simone's fingers cut off",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35411",
    "category": "Television",
    "question": "In 24: Live Another Day, what trace does Naveed deliberately leave to help investigators identify the drone hijackers?",
    "answers": [
      "Clues making the commandeered drones traceable",
      "A handwritten note at the embassy",
      "A secret recording of the Russian ambassador",
      "A photograph of the British prime minister"
    ],
    "correctAnswer": "Clues making the commandeered drones traceable",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 05",
      "London",
      "Jack Bauer Era",
      "Characters: Naveed Shabazz;Simone Al-Harazi;Ian Al-Harazi",
      "Storyline: Naveed plants tracing evidence",
      "Question focus: what trace does Naveed deliberately leave to help investigators identify the drone hijackers?",
      "Answer focus: Clues making the commandeered drones traceable",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35412",
    "category": "Television",
    "question": "In 24: Live Another Day, how does Ian Al-Harazi turn Naveed's attempt to expose the group into a trap?",
    "answers": [
      "He frames Kate Morgan for buying the drones",
      "He provides the CIA with a false drone-tracing location",
      "He destroys the drone pilots' medical records",
      "He persuades Heller to turn off all surveillance"
    ],
    "correctAnswer": "He provides the CIA with a false drone-tracing location",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 05",
      "London",
      "Jack Bauer Era",
      "Characters: Ian Al-Harazi;Naveed Shabazz;CIA",
      "Storyline: False trace leads to CIA ambush",
      "Question focus: how does Ian Al-Harazi turn Naveed's attempt to expose the group into a trap?",
      "Answer focus: He provides the CIA with a false drone-tracing location",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35413",
    "category": "Television",
    "question": "In 24: Live Another Day, what stops Adrian Cross from forcibly taking Chloe away when he evacuates Open Cell?",
    "answers": [
      "Margot's drone fires on their car",
      "Kate orders Cross into British custody",
      "Belcheck intervenes and prevents him",
      "Chloe locks Cross in a safe room"
    ],
    "correctAnswer": "Belcheck intervenes and prevents him",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 05",
      "London",
      "Jack Bauer Era",
      "Characters: Belcheck;Adrian Cross;Chloe O'Brian",
      "Storyline: Belcheck protects Chloe",
      "Question focus: what stops Adrian Cross from forcibly taking Chloe away when he evacuates Open Cell?",
      "Answer focus: Belcheck intervenes and prevents him",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35414",
    "category": "Television",
    "question": "In 24: Live Another Day, which arms dealer does Jack approach by pretending to have kidnapped CIA agent Kate Morgan?",
    "answers": [
      "Sergei Bazhaev",
      "Aron Bashir",
      "Anatol Stolnavich",
      "Karl Rask"
    ],
    "correctAnswer": "Karl Rask",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 06",
      "London",
      "Jack Bauer Era",
      "Characters: Jack Bauer;Kate Morgan;Karl Rask",
      "Storyline: Jack's undercover encounter with arms dealer",
      "Question focus: which arms dealer does Jack approach by pretending to have kidnapped CIA agent Kate Morgan?",
      "Answer focus: Karl Rask",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35415",
    "category": "Television",
    "question": "In 24: Live Another Day, how does Karl Rask's interrogation of Kate become the opening Jack needs to investigate his transactions?",
    "answers": [
      "Chloe uploads a virus to Rask's computer to search the records",
      "The British prime minister supplies a sworn witness",
      "Kate steals the paper ledger from the safe",
      "Rask voluntarily gives the CIA a bank statement"
    ],
    "correctAnswer": "Chloe uploads a virus to Rask's computer to search the records",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 06",
      "London",
      "Jack Bauer Era",
      "Characters: Karl Rask;Kate Morgan;Chloe O'Brian",
      "Storyline: Chloe searches arms dealer transactions",
      "Question focus: how does Karl Rask's interrogation of Kate become the opening Jack needs to investigate his transactions?",
      "Answer focus: Chloe uploads a virus to Rask's computer to search the records",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35416",
    "category": "Television",
    "question": "In 24: Live Another Day, what happens when MI5 storms Karl Rask's hideout during Jack and Kate's operation?",
    "answers": [
      "Rask escapes with Simone in a helicopter",
      "Rask kills himself",
      "Jack takes Rask to a CIA safe house",
      "Kate is arrested for treason"
    ],
    "correctAnswer": "Rask kills himself",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 06",
      "London",
      "Jack Bauer Era",
      "Characters: Karl Rask;Jack Bauer;Kate Morgan;MI5",
      "Storyline: MI5 raid ends with Rask's suicide",
      "Question focus: what happens when MI5 storms Karl Rask's hideout during Jack and Kate's operation?",
      "Answer focus: Rask kills himself",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35417",
    "category": "Television",
    "question": "In 24: Live Another Day, whose murder does Simone carry out before pursuing the little girl who escapes from her?",
    "answers": [
      "Her brother Ian's wife",
      "President Heller's aide",
      "Her husband Naveed's sister",
      "A CIA agent's daughter"
    ],
    "correctAnswer": "Her husband Naveed's sister",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 06",
      "London",
      "Jack Bauer Era",
      "Characters: Simone Al-Harazi;Naveed Shabazz",
      "Storyline: Simone murders husband's sister",
      "Question focus: whose murder does Simone carry out before pursuing the little girl who escapes from her?",
      "Answer focus: Her husband Naveed's sister",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35418",
    "category": "Television",
    "question": "In 24: Live Another Day, what danger continues after Jack and Kate drive Simone away from the hospital under drone attack?",
    "answers": [
      "A train carrying explosives blocks the road",
      "The police arrest Kate at the scene",
      "A second drone abducts Simone",
      "The drone pursues their vehicle and tries to destroy it"
    ],
    "correctAnswer": "The drone pursues their vehicle and tries to destroy it",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 07",
      "London",
      "Jack Bauer Era",
      "Characters: Jack Bauer;Kate Morgan;Simone Al-Harazi",
      "Storyline: Drone chases escaping car",
      "Question focus: what danger continues after Jack and Kate drive Simone away from the hospital under drone attack?",
      "Answer focus: The drone pursues their vehicle and tries to destroy it",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35419",
    "category": "Television",
    "question": "In 24: Live Another Day, what private promise does President Heller make in a call to Margot after the hospital attack?",
    "answers": [
      "He agrees to surrender himself to end the strikes",
      "He offers her control of the CIA London station",
      "He says he will dismiss the British prime minister",
      "He promises a general election in Kamistan"
    ],
    "correctAnswer": "He agrees to surrender himself to end the strikes",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 07",
      "London",
      "Jack Bauer Era",
      "Characters: James Heller;Margot Al-Harazi",
      "Storyline: Heller calls Margot privately",
      "Question focus: what private promise does President Heller make in a call to Margot after the hospital attack?",
      "Answer focus: He agrees to surrender himself to end the strikes",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35420",
    "category": "Television",
    "question": "In 24: Live Another Day, what does President Heller remove so his escape to Wembley Stadium cannot be tracked?",
    "answers": [
      "His presidential identification card",
      "His location-tracking device",
      "The remote control for the drones",
      "His Secret Service protective vest"
    ],
    "correctAnswer": "His location-tracking device",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 08",
      "London",
      "Jack Bauer Era",
      "Characters: James Heller;Jack Bauer;Mark Boudreau",
      "Storyline: Heller removes personal tracker",
      "Question focus: what does President Heller remove so his escape to Wembley Stadium cannot be tracked?",
      "Answer focus: His location-tracking device",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35421",
    "category": "Television",
    "question": "In 24: Live Another Day, who is deliberately kept unaware of Heller's secret plan to surrender at Wembley?",
    "answers": [
      "CIA agent Kate Morgan",
      "British Prime Minister Davies",
      "His daughter Audrey",
      "Hacker Adrian Cross"
    ],
    "correctAnswer": "His daughter Audrey",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 08",
      "London",
      "Jack Bauer Era",
      "Characters: James Heller;Audrey Boudreau;Mark Boudreau",
      "Storyline: Heller protects daughter by hiding surrender",
      "Question focus: who is deliberately kept unaware of Heller's secret plan to surrender at Wembley?",
      "Answer focus: His daughter Audrey",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35422",
    "category": "Television",
    "question": "In 24: Live Another Day, how does Ian Al-Harazi discover that the drone strike on Wembley failed to kill Heller?",
    "answers": [
      "He reads a medical report sent from the CIA",
      "He receives a confession from Simone",
      "He hears the president speaking at a press conference",
      "He notices that Heller left the stadium before the missile landed"
    ],
    "correctAnswer": "He notices that Heller left the stadium before the missile landed",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 09",
      "London",
      "Jack Bauer Era",
      "Characters: Ian Al-Harazi;James Heller;Margot Al-Harazi",
      "Storyline: Ian spots deception in drone footage",
      "Question focus: how does Ian Al-Harazi discover that the drone strike on Wembley failed to kill Heller?",
      "Answer focus: He notices that Heller left the stadium before the missile landed",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35423",
    "category": "Television",
    "question": "In 24: Live Another Day, what does Steve Navarro hope to obtain from Adrian Cross by handing over the recovered override device?",
    "answers": [
      "Help escaping the country before the CIA catches him",
      "A position in the British cabinet",
      "A new drone fleet of his own",
      "Immunity from the Chinese government"
    ],
    "correctAnswer": "Help escaping the country before the CIA catches him",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 09",
      "London",
      "Jack Bauer Era",
      "Characters: Steve Navarro;Adrian Cross",
      "Storyline: Navarro bargains for escape",
      "Question focus: what does Steve Navarro hope to obtain from Adrian Cross by handing over the recovered override device?",
      "Answer focus: Help escaping the country before the CIA catches him",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35424",
    "category": "Television",
    "question": "In 24: Live Another Day, how do Jack and Kate obtain the code to the tracker Navarro says he planted on the stolen device?",
    "answers": [
      "They seize it from Margot's computer",
      "They trick Navarro into revealing it during a supposed immunity deal",
      "They ask the prime minister to decrypt a secret signal",
      "They find it printed on the drone's wing"
    ],
    "correctAnswer": "They trick Navarro into revealing it during a supposed immunity deal",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 10",
      "London",
      "Jack Bauer Era",
      "Characters: Steve Navarro;Jack Bauer;Kate Morgan",
      "Storyline: Navarro tricked into tracker revelation",
      "Question focus: how do Jack and Kate obtain the code to the tracker Navarro says he planted on the stolen device?",
      "Answer focus: They trick Navarro into revealing it during a supposed immunity deal",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35425",
    "category": "Television",
    "question": "In 24: Live Another Day, what does Adrian Cross confess about Chloe's family's fatal road accident?",
    "answers": [
      "He personally drove the car that struck them",
      "He has evidence that Jack caused the collision",
      "He knew it was an accident but concealed that information to keep her in Open Cell",
      "He never met Chloe until after the accident"
    ],
    "correctAnswer": "He knew it was an accident but concealed that information to keep her in Open Cell",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 10",
      "London",
      "Jack Bauer Era",
      "Characters: Adrian Cross;Chloe O'Brian;Morris O'Brian",
      "Storyline: Cross conceals truth about Chloe's grief",
      "Question focus: what does Adrian Cross confess about Chloe's family's fatal road accident?",
      "Answer focus: He knew it was an accident but concealed that information to keep her in Open Cell",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35426",
    "category": "Television",
    "question": "In 24: Live Another Day, why had Cheng Zhi been presumed dead before his return in London?",
    "answers": [
      "A drone strike appeared to kill him in Sangala",
      "He had supposedly died of an illness in Moscow",
      "He had been reported lost at sea",
      "He was thought to have died during a prison riot in China"
    ],
    "correctAnswer": "He was thought to have died during a prison riot in China",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 10",
      "London",
      "Jack Bauer Era",
      "Characters: Cheng Zhi;Chloe O'Brian",
      "Storyline: Cheng survives prison riot",
      "Question focus: why had Cheng Zhi been presumed dead before his return in London?",
      "Answer focus: He was thought to have died during a prison riot in China",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35427",
    "category": "Television",
    "question": "In 24: Live Another Day, what evidence does Chloe leave behind that tells Jack the supposed-dead Cheng Zhi has returned?",
    "answers": [
      "A recorded audio message identifying Cheng",
      "A handwritten note attached to her coat",
      "A photograph inside Navarro's passport",
      "A coded message on Heller's wristwatch"
    ],
    "correctAnswer": "A recorded audio message identifying Cheng",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 11",
      "London",
      "Jack Bauer Era",
      "Characters: Chloe O'Brian;Jack Bauer;Cheng Zhi",
      "Storyline: Chloe audio reveals Cheng",
      "Question focus: what evidence does Chloe leave behind that tells Jack the supposed-dead Cheng Zhi has returned?",
      "Answer focus: A recorded audio message identifying Cheng",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35428",
    "category": "Television",
    "question": "In 24: Live Another Day, what cover story does Mark Boudreau use when he visits Russian official Anatol Stolnavich to help Jack?",
    "answers": [
      "He says he has come to inspect a security contract",
      "He claims he wants political asylum",
      "He pretends to be a Chinese naval officer",
      "He offers the official a position in the White House"
    ],
    "correctAnswer": "He claims he wants political asylum",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 11",
      "London",
      "Jack Bauer Era",
      "Characters: Mark Boudreau;Anatol Stolnavich;Jack Bauer",
      "Storyline: Mark pretends to seek asylum",
      "Question focus: what cover story does Mark Boudreau use when he visits Russian official Anatol Stolnavich to help Jack?",
      "Answer focus: He claims he wants political asylum",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35429",
    "category": "Television",
    "question": "In 24: Live Another Day, how does Anatol Stolnavich die during Mark Boudreau's visit to the Russian compound?",
    "answers": [
      "He is shot by Chinese sailors",
      "He drinks poison after signing the treaty",
      "He is fatally injured in a struggle with Mark",
      "He is killed in a drone attack on Wembley"
    ],
    "correctAnswer": "He is fatally injured in a struggle with Mark",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 11",
      "London",
      "Jack Bauer Era",
      "Characters: Anatol Stolnavich;Mark Boudreau",
      "Storyline: Russian official dies resisting Mark",
      "Question focus: how does Anatol Stolnavich die during Mark Boudreau's visit to the Russian compound?",
      "Answer focus: He is fatally injured in a struggle with Mark",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35430",
    "category": "Television",
    "question": "In 24: Live Another Day, why does Audrey meet a contact with close ties to the Chinese government?",
    "answers": [
      "To trade Chloe for the override device",
      "To help Heller escape the Wembley stadium",
      "To find the missing bomber from the hospital",
      "To persuade China that America did not order the warship attack"
    ],
    "correctAnswer": "To persuade China that America did not order the warship attack",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 11",
      "London",
      "Jack Bauer Era",
      "Characters: Audrey Boudreau;China;Cheng Zhi",
      "Storyline: Audrey seeks to prevent war",
      "Question focus: why does Audrey meet a contact with close ties to the Chinese government?",
      "Answer focus: To persuade China that America did not order the warship attack",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35431",
    "category": "Television",
    "question": "In 24: Live Another Day, how does Audrey die even after Kate Morgan eliminates the first sniper watching her?",
    "answers": [
      "A second gunman shoots her",
      "She is struck by a vehicle escaping the scene",
      "She is killed when the Chinese aircraft explodes",
      "She is caught in a drone strike on her hotel"
    ],
    "correctAnswer": "A second gunman shoots her",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 12",
      "London",
      "Jack Bauer Era",
      "Characters: Audrey Boudreau;Kate Morgan;Cheng Zhi",
      "Storyline: Backup sniper kills Audrey",
      "Question focus: how does Audrey die even after Kate Morgan eliminates the first sniper watching her?",
      "Answer focus: A second gunman shoots her",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35432",
    "category": "Television",
    "question": "In 24: Live Another Day, what evidence does Jack transmit to the American and Chinese presidents before killing Cheng?",
    "answers": [
      "A photo of the destroyed Wembley field",
      "A recording proving Cheng's identity and involvement",
      "The Russian minister's unsigned pardon",
      "An intercepted message from Kate's husband"
    ],
    "correctAnswer": "A recording proving Cheng's identity and involvement",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 12",
      "London",
      "Jack Bauer Era",
      "Characters: Jack Bauer;Cheng Zhi;James Heller",
      "Storyline: Jack confirms Cheng's role to stop war",
      "Question focus: what evidence does Jack transmit to the American and Chinese presidents before killing Cheng?",
      "Answer focus: A recording proving Cheng's identity and involvement",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35433",
    "category": "Television",
    "question": "In 24: Live Another Day, how does Jack kill Cheng Zhi after confronting him aboard the freighter?",
    "answers": [
      "He throws Cheng into the Thames",
      "He sends a drone strike onto Cheng's cabin",
      "He beheads Cheng with a sword",
      "He shoots Cheng with a stolen police rifle"
    ],
    "correctAnswer": "He beheads Cheng with a sword",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 12",
      "London",
      "Jack Bauer Era",
      "Characters: Jack Bauer;Cheng Zhi;Audrey Boudreau",
      "Storyline: Jack avenges Audrey",
      "Question focus: how does Jack kill Cheng Zhi after confronting him aboard the freighter?",
      "Answer focus: He beheads Cheng with a sword",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35434",
    "category": "Television",
    "question": "In 24: Live Another Day, what devastating consequence of Alzheimer's does Heller contemplate after Audrey's death?",
    "answers": [
      "He is unable to read the peace treaty that night",
      "He no longer remembers travelling to London",
      "He believes that Audrey is still a little child",
      "He may eventually forget that he ever had a daughter"
    ],
    "correctAnswer": "He may eventually forget that he ever had a daughter",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24: Live Another Day",
      "24 Live Another Day",
      "24 Season 9",
      "24 Day 9",
      "2014",
      "2010s",
      "Programme: 24: Live Another Day",
      "Episode 12",
      "London",
      "Jack Bauer Era",
      "Characters: James Heller;Audrey Boudreau",
      "Storyline: Heller fears losing memory of Audrey",
      "Question focus: what devastating consequence of Alzheimer's does Heller contemplate after Audrey's death?",
      "Answer focus: He may eventually forget that he ever had a daughter",
      "Viewer storyline"
    ]
  }
];
questions.push(...auditAdditions);
const EXPECTED_COUNT = 112;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_11798' || questions[75].id !== 'tv_11873' || questions[questions.length - 1].id !== 'tv_35434') {
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
