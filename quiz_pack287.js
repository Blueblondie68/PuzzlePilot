
 // quiz_pack287.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: 24: Legacy (2017, standalone twelve-episode spin-off)
 // Eric Carter, Rebecca Ingram, CTU Washington, the sleeper-cell list,
 // the Donovan campaign, the bridge attack, Tony Almeida and the finale.
 // Seven individually selected specialist tags on every question.
 // No episode-title recall; do not connect quiz_bank.js until agreed.
 // Row: question | correct answer | three distractors | difficulty | seven specific tags

 const groups = [
   {
     topic: 'The Spin-off, Setting and New Leading Agent',
     facts: `In which year was 24: Legacy first broadcast?|2017|2014|2010|2020|Easy|Original Release|Fox Premiere|Television Spin Off|Franchise Chronology|US Drama|Broadcast Year|2010s Television
 How many episodes make up 24: Legacy?|Twelve|Twenty four|Eight|Sixteen|Easy|Twelve Episode Run|Limited Series|Production Format|Spin Off|First Season|Fox Drama|Episode Count
 Which American city is the main setting for 24: Legacy?|Washington DC|Los Angeles|New York City|Chicago|Easy|Washington DC|National CTU Headquarters|US Capital|Geographical Setting|Federal Government|2017 Story|East Coast
 At what time does the main story of 24: Legacy begin?|12 noon|6 am|4 pm|Midnight|Medium|Midday Opening|Real Time Format|Story Clock|Day Start|Washington DC|Series Timeline|Premiere
 How does the twelve-episode series cover a full twenty-four hours?|With a twelve-hour time jump near the end|By making each episode two hours long|By showing every second hour backwards|By adding a feature-length prequel|Medium|Twelve Hour Jump|Final Episode|Real Time Concept|Narrative Device|Day Length|Limited Series Format|Chronology
 Which television series is 24: Legacy a spin-off of?|24|Homeland|The Blacklist|Alias|Easy|Original Franchise|Jack Bauer Universe|Action Thriller|Counter Terrorist Unit|Television Continuity|Spin Off Format|Fox Series
 Which former Army Ranger is the main protagonist of 24: Legacy?|Eric Carter|Jack Bauer|Curtis Manning|Chase Edmunds|Easy|Eric Carter|Army Ranger|New Lead|Counterterrorism Hero|Military Veteran|Washington DC|2017 Main Character
 Which actor portrayed Eric Carter?|Corey Hawkins|Carlos Bernard|Teddy Sears|Jimmy Smits|Easy|Corey Hawkins|Eric Carter|Lead Actor|Actor Casting|Military Veteran|2017 Series|American Performer
 Which broadcaster originally aired 24: Legacy in the United States?|Fox|HBO|NBC|CBS|Easy|Fox Network|Original Broadcaster|Television Distribution|2017 Premiere|US Network|Franchise Broadcaster|Broadcast History
 Which character is absent from 24: Legacy despite being the central hero of the original series?|Jack Bauer|Tony Almeida|Eric Carter|Rebecca Ingram|Easy|Jack Bauer|Kiefer Sutherland|Original Series Lead|Absent Character|New Cast Focus|Franchise Continuity|Spin Off Casting`,
   },
   {
     topic: 'Eric Carter, His Family and the Stolen Strongbox',
     facts: `What was Eric Carter's military occupation before the events of Legacy?|US Army Ranger|Navy submarine commander|Air Force test pilot|Marine Corps lawyer|Easy|Eric Carter|United States Army|Ranger Sergeant|Military Service|Special Operations|Return Home|Military Background
 Which terrorist leader was targeted by Eric Carter's special-operations mission?|Ibrahim bin-Khalid|Abu Fayed|Benjamin Juma|Vladimir Bierko|Easy|Ibrahim Bin Khalid|Military Raid|Eric Carter|Targeted Terrorist|Opening Backstory|Special Operations|Bin Khalid Network
 Who is Eric Carter's wife?|Nicole Carter|Rebecca Ingram|Nilaa Mizrani|Mariana Stiles|Easy|Nicole Carter|Eric Carter|Married Couple|Family Relationship|Civilian In Danger|Opening Attack|2017 Cast
 Which actress portrayed Nicole Carter?|Anna Diop|Miranda Otto|Sheila Vand|Coral Peña|Medium|Anna Diop|Nicole Carter|Actor Casting|Eric Carter Wife|Main Cast|2017 Spin Off|Actress
 What is Nicole Carter's profession?|Nurse|Senator|CTU computer analyst|Police detective|Medium|Nicole Carter|Nursing Career|Medical Profession|Eric Carter Wife|Civilian Occupation|Family Storyline|Hospital Work
 Who is Eric Carter's older brother?|Isaac Carter|Ben Grimes|John Donovan|Keith Mullins|Easy|Isaac Carter|Eric Carter|Brothers|Family Rift|Drug Dealer|Nicole Carter|Washington DC
 What is Isaac Carter involved in before his brother asks him for help?|Running a drug-dealing gang|Serving as a US senator|Operating CTU's servers|Working as a schoolteacher|Medium|Isaac Carter|Drug Trade|Gang Leader|Criminal Network|Family Protection|Nicole Carter|Urban Crime
 Which former Ranger possesses the stolen strongbox after the raid?|Ben Grimes|Keith Mullins|Thomas Locke|Asim Naseri|Medium|Ben Grimes|Eric Carter Comrade|Strongbox|Military Raid|Trauma|Fugitive|Stolen Evidence
 What does the flash drive inside the strongbox contain?|A list of terrorist sleeper cells and activation codes|President Donovan's election results|CTU's employee payroll|Blueprints for the White House|Easy|USB Flash Drive|Sleeper Cells|Activation Codes|Ibrahim Bin Khalid|Terrorist Network|Strongbox Contents|Threat Intelligence
 How much money does Ben Grimes demand from Carter for the flash drive?|Two million dollars|Fifty thousand dollars|Ten million dollars|One hundred thousand dollars|Medium|Ben Grimes|Ransom Demand|Two Million Dollars|Flash Drive Exchange|Eric Carter|Stolen List|Desperate Bargain`,
   },
   {
     topic: 'Rebecca Ingram and the Washington CTU Team',
     facts: `Which former National Director of CTU helps Eric Carter after the first attack?|Rebecca Ingram|Karen Hayes|Chloe O'Brian|Nina Myers|Easy|Rebecca Ingram|Former National Director|Eric Carter Ally|CTU Washington|Counterterrorism|Leadership Transition|2017 Main Character
 Which actress portrayed Rebecca Ingram?|Miranda Otto|Anna Diop|Katee Sackhoff|Annie Wersching|Easy|Miranda Otto|Rebecca Ingram|Actor Casting|Former CTU Director|Lead Actress|2017 Spin Off|Australian Performer
 Who succeeds Rebecca Ingram as National Director of CTU?|Keith Mullins|Thomas Locke|Bill Buchanan|Ryan Chappelle|Easy|Keith Mullins|CTU National Director|Rebecca Ingram|Leadership Succession|Washington Headquarters|Agency Authority|Counterterrorism
 Which actor played CTU chief Keith Mullins?|Teddy Sears|Bailey Chase|Dan Bucatinsky|Corey Hawkins|Medium|Teddy Sears|Keith Mullins|Actor Casting|CTU National Director|Agency Leadership|2017 Main Cast|American Actor
 Which CTU communications analyst secretly assists Rebecca and Eric?|Andy Shalowitz|Sean Hillinger|Edgar Stiles|Jordan Reed|Medium|Andy Shalowitz|CTU Communications|Rebecca Ingram|Eric Carter|Covert Assistance|Computer Systems|Agency Analyst
 Which actor portrayed analyst Andy Shalowitz?|Dan Bucatinsky|Charlie Hofheimer|Carlos Bernard|Jimmy Smits|Medium|Dan Bucatinsky|Andy Shalowitz|Actor Casting|CTU Analyst|Communications Specialist|2017 Main Cast|Television Actor
 Which CTU analyst is a cousin of the original series character Edgar Stiles?|Mariana Stiles|Janis Gold|Dana Walsh|Nilaa Mizrani|Medium|Mariana Stiles|Edgar Stiles|Family Connection|CTU Computer Analyst|Original Series Continuity|Andy Shalowitz|Washington Team
 Which actress played Mariana Stiles?|Coral Peña|Sheila Vand|Anna Diop|Miranda Otto|Medium|Coral Pena|Mariana Stiles|Actor Casting|CTU Computer Analyst|Edgar Stiles Cousin|2017 Cast|Agency Staff
 Who serves as CTU's Director of Field Operations in Legacy?|Thomas Locke|Keith Mullins|Henry Donovan|Ben Grimes|Medium|Thomas Locke|CTU Field Operations|Tactical Teams|Washington Headquarters|Agency Operations|Bailey Chase|Command Role
 What does Rebecca do to Keith Mullins when he confronts her secret assistance to Carter?|She incapacitates him with a Taser|She shoots him in the leg|She locks him inside a bank vault|She sends him to the Russian embassy|Medium|Rebecca Ingram|Keith Mullins|Taser|Unauthorized Operation|Internal CTU Conflict|Eric Carter|Agency Distrust`,
   },
   {
     topic: 'The Donovan Campaign and the Hidden Intelligence Leak',
     facts: `Which US senator is seeking the presidency during 24: Legacy?|John Donovan|Blaine Mayer|Wayne Palmer|Noah Daniels|Easy|John Donovan|Presidential Candidate|US Senator|Election Campaign|Political Plot|Rebecca Ingram Husband|Washington DC
 Which actor played Senator John Donovan?|Jimmy Smits|Gerald McRaney|Powers Boothe|William Devane|Medium|Jimmy Smits|John Donovan|Actor Casting|Presidential Candidate|Senator|2017 Main Cast|American Actor
 What is Rebecca Ingram's relationship to Senator John Donovan?|She is his wife|She is his sister|She is his mother|She is his campaign manager|Easy|Rebecca Ingram|John Donovan|Marriage|Political Family|CTU Career|Presidential Campaign|Personal Relationship
 What is the first name of John Donovan's powerful businessman father?|Henry|Roger|Phillip|Ethan|Easy|Henry Donovan|John Donovan|Father Son|Businessman|Political Influence|Intelligence Leak|Donovan Family
 Which actor portrayed Henry Donovan?|Gerald McRaney|Jimmy Smits|Tony Todd|Teddy Sears|Medium|Gerald McRaney|Henry Donovan|Actor Casting|Oil Businessman|Political Family|Campaign Conspiracy|2017 Guest Star
 Which campaign manager is wrongly suspected of leaking the Rangers' identities?|Nilaa Mizrani|Mariana Stiles|Nicole Carter|Rebecca Ingram|Medium|Nilaa Mizrani|Campaign Manager|False Accusation|Rangers Identities|Donovan Campaign|Fabricated Evidence|Political Smear
 Who is ultimately revealed to have leaked the Rangers' identities?|Henry Donovan|Keith Mullins|Nicole Carter|Andy Shalowitz|Easy|Henry Donovan|Identity Leak|Ranger Team|Terrorist Blackmail|John Donovan|Corporate Scandal|Hidden Betrayal
 What threat is used to blackmail Henry Donovan into cooperating with the terrorists?|Exposure of his company's dealings with ISIS|Public disclosure of a secret marriage|Release of a stolen CTU medical file|A false report about his citizenship|Medium|Henry Donovan|Corporate Dealings|ISIS|Blackmail Motive|Company Secrets|Political Reputation|Terrorist Leverage
 Which relative of John Donovan acts as a liaison between Henry and the terrorists?|His uncle Luis Diaz|His brother Isaac|His cousin Ben Grimes|His father-in-law Keith Mullins|Hard|Luis Diaz|John Donovan Uncle|Donovan Relative|Political Operative|Terrorist Liaison|Campaign Conspiracy|Family Link
 Which former CTU director is hired to interrogate Henry Donovan privately?|Tony Almeida|Jack Bauer|Curtis Manning|George Mason|Easy|Tony Almeida|Henry Donovan|Private Interrogation|Rebecca Ingram|Former CTU Director|Contractor|Return From Original Series`,
   },
   {
     topic: 'School Sleeper Cell and the George Washington Bridge',
     facts: `Which high-school student secretly belongs to the terrorist sleeper cell?|Amira Dudayev|Kayla Hassan|Olivia Taylor|Marika Donoso|Easy|Amira Dudayev|High School Student|Sleeper Cell|Chechen Family|School Bomb Plot|2017 Story|Terrorism
 Who is Amira Dudayev's brother and fellow member of the sleeper cell?|Khasan Dudayev|Jadalla bin-Khalid|Ike Dubaku|Asim Naseri|Medium|Khasan Dudayev|Amira Dudayev|Brother Sister|Sleeper Cell|Chechen Militants|Bridge Bomb Plot|Family Relationship
 Which chemistry teacher is secretly helping Amira and Khasan prepare explosives?|David Harris|Drew Phelps|Andy Shalowitz|Keith Mullins|Medium|David Harris|Chemistry Teacher|Amira Dudayev|Explosives|School Staff|Clandestine Romance|Sleeper Cell
 Which pupil discovers suspicious behaviour connected to Amira and her teacher?|Drew Phelps|Ben Grimes|Jordan Reed|Josh Bauer|Medium|Drew Phelps|Marshall High School|Amira Dudayev|School Suspicion|Witness|Chemistry Teacher|Student Investigation
 Which actress played Amira Dudayev?|Kathryn Prescott|Anna Diop|Coral Peña|Sheila Vand|Medium|Kathryn Prescott|Amira Dudayev|Actress Casting|School Terrorist|2017 Guest Cast|Chechen Character|British Actress
 Which major bridge is struck by Amira's bomb-laden truck?|George Washington Bridge|Brooklyn Bridge|Golden Gate Bridge|London Bridge|Easy|George Washington Bridge|Truck Bomb|Amira Dudayev|Civilian Casualties|New York Area|Road Infrastructure|Sleeper Cell Attack
 What happens when police stop the vehicle Amira is driving towards the bridge?|She detonates its explosives|The truck is safely disarmed|She drives it into a river with no explosion|A helicopter lifts the truck away|Medium|Amira Dudayev|Truck Explosion|Highway Patrol|George Washington Bridge|Fatal Attack|Police Intervention|Bomb Detonation
 Who is Eric Carter's brother's girlfriend, secretly plotting to take his gang?|Aisha|Nicole Carter|Mariana Stiles|Rebecca Ingram|Medium|Aisha|Isaac Carter|Gang Betrayal|Dominican Criminals|Nicole Carter|Drug Business|Relationship
 What does Aisha arrange with a rival criminal group?|An ambush to kill Isaac Carter|A transfer of the sleeper-cell list to CTU|A presidential fundraiser|A rescue flight for Rebecca|Medium|Aisha|Isaac Carter|Dominican Gang|Murder Plot|Criminal Rivalry|Betrayal|Protection Mission
 Which member of Eric's family is kidnapped alongside Nicole by Jadalla's men?|Isaac Carter|Henry Donovan|John Donovan|Ben Grimes|Easy|Isaac Carter|Nicole Carter|Kidnapping|Jadalla bin Khalid|Eric Carter|Hostage Leverage|Family Rescue`,
   },
   {
     topic: 'Jadalla, the Terrorist Drive and Tony Almeida',
     facts: `Who commands the sleeper-cell network after the raid against Ibrahim bin-Khalid?|Jadalla bin-Khalid|Eric Carter|Henry Donovan|Thomas Locke|Easy|Jadalla Bin Khalid|Terrorist Leader|Ibrahim Son|Sleeper Cell Network|Flash Drive|Washington Threat|2017 Antagonist
 Which actor portrayed Jadalla bin-Khalid?|Raphael Acloque|Oded Fehr|Tony Todd|Corey Hawkins|Medium|Raphael Acloque|Jadalla Bin Khalid|Actor Casting|Terrorist Commander|2017 Series|Son Of Ibrahim|Main Antagonist
 What is Jadalla bin-Khalid's relationship to Sheikh Ibrahim bin-Khalid?|He is Ibrahim's son|He is Ibrahim's brother|He is Ibrahim's nephew|He is Ibrahim's uncle|Easy|Jadalla Bin Khalid|Ibrahim Bin Khalid|Father Son|Terrorist Succession|Family Legacy|Leadership|Campaign
 Which of Jadalla's men activates a sleeper cell without permission and is executed for it?|Kusuma|Asim Naseri|Ben Grimes|Gabriel|Hard|Kusuma|Jadalla Bin Khalid|Unauthorized Activation|Sleeper Cell|Khasan Dudayev|Internal Discipline|Execution
 Which arms dealer does Carter approach for information about Jadalla's network?|Gabriel|Sergei Bazhaev|Dmitri Gredenko|Jonas Hodges|Medium|Gabriel|Arms Dealer|Jadalla Network|Ben Grimes|Military Schematics|Weapons Supply|Eric Carter
 How does the arms dealer Gabriel die after Carter confronts him?|He kills himself|He is hit by a police car|He dies in a school explosion|He is shot by Senator Donovan|Medium|Gabriel Death|Arms Dealer|Eric Carter|Police Raid|Suicide|Terrorist Contacts|Computer Evidence
 What kind of software does Andy Shalowitz create to sabotage the terrorists' flash drive?|A computer virus|A navigation app|An accounting spreadsheet|A video editing program|Medium|Andy Shalowitz|Computer Virus|Flash Drive|Eric Carter|Sabotage|Hostage Exchange|Technical Countermeasure
 Who leads a rescue with his gang when Eric is trapped at Jadalla's compound?|Isaac Carter|John Donovan|Henry Donovan|Keith Mullins|Medium|Isaac Carter|Gang Rescue|Eric Carter|Jadalla Compound|Nicole Carter|Family Loyalty|Armed Assault
 Which actor reprises the role of Tony Almeida from the original 24 series?|Carlos Bernard|Kiefer Sutherland|James Morrison|Dennis Haysbert|Easy|Carlos Bernard|Tony Almeida|Returning Performer|Original Series|Mercenary|2017 Casting|Franchise Continuity
 What is Tony Almeida's former romantic connection to Rebecca Ingram?|They previously dated|They were married|They are siblings|They have never met|Medium|Tony Almeida|Rebecca Ingram|Former Romance|Personal History|Private Contractor|Interrogation Job|Trust`,
   },
   {
     topic: 'Naseri, Ibrahim and the Final Exchange',
     facts: `Which man is revealed to have infiltrated Eric Carter's original mission on Ibrahim's behalf?|Asim Naseri|Keith Mullins|David Harris|Henry Donovan|Medium|Asim Naseri|Eric Carter Team|Hidden Infiltrator|Ibrahim Bin Khalid|Special Operations Raid|Secret Agent|Late Revelation
 Which actor portrayed Asim Naseri?|Oded Fehr|Teddy Sears|Tony Todd|Jimmy Smits|Medium|Oded Fehr|Asim Naseri|Actor Casting|Ibrahim Associate|2017 Cast|Terrorist Plot|Israeli Actor
 Who is revealed to be alive despite the earlier military mission against him?|Ibrahim bin-Khalid|Ben Grimes|Gabriel|Khasan Dudayev|Easy|Ibrahim Bin Khalid|Survival Reveal|Original Raid|Jadalla Father|Terrorist Commander|Final Episodes|Hidden Leader
 Which CTU security chief helps Naseri infiltrate CTU after his girlfriend is threatened?|Stephen Grant|Thomas Locke|Keith Mullins|Andy Shalowitz|Medium|Stephen Grant|CTU Security Chief|Naseri Blackmail|Jennifer Marshall|Facility Breach|Hidden Relationship|Terrorist Escape
 What is the name of Stephen Grant's girlfriend, threatened with an explosive vest?|Jennifer Marshall|Nilaa Mizrani|Rebecca Ingram|Nicole Carter|Medium|Jennifer Marshall|Stephen Grant|Explosive Vest|Asim Naseri|Blackmail|CTU Security Breach|Hostage Threat
 Which politician is abducted when Naseri's men escape CTU with Jadalla?|John Donovan|Henry Donovan|Keith Mullins|Thomas Locke|Easy|John Donovan|Kidnapping|Asim Naseri|Jadalla Bin Khalid|CTU Escape|Senator Hostage|Rebecca Ingram
 Who is killed by Eric Carter while Rebecca is being exchanged for John Donovan?|Jadalla bin-Khalid|Keith Mullins|Tony Almeida|Henry Donovan|Medium|Jadalla Bin Khalid Death|Eric Carter|Hostage Exchange|John Donovan|Rebecca Ingram|Final Confrontation|Terrorist Leader
 Which government official secretly holds Naseri's daughter to force his cooperation?|Donald Simms|John Donovan|Keith Mullins|Henry Donovan|Medium|Donald Simms|Director Of National Intelligence|Ara Naseri|Coercive Detention|Government Secrecy|Safe House|Finale Conspiracy
 What is the first name of Asim Naseri's daughter who is secretly being held?|Ara|Amira|Nicole|Mariana|Medium|Ara Naseri|Asim Naseri|Father Daughter|Secret Detention|Hostage Negotiation|Finale|Child Prisoner
 To which country's embassy does Naseri demand his daughter be taken for her release?|Jordan|Russia|China|France|Hard|Jordanian Embassy|Ara Naseri|Asim Naseri|Prisoner Handover|Diplomatic Transfer|Final Exchange|Safety Condition
 Who fatally wounds Rebecca Ingram after she takes a bullet intended for Eric?|Ibrahim bin-Khalid|Tony Almeida|Donald Simms|Henry Donovan|Medium|Rebecca Ingram Death|Ibrahim Bin Khalid|Eric Carter|Protective Sacrifice|Final Shootout|Fatal Gunshot|Series Finale
 What does Eric Carter ultimately decide about his future after the day's events?|To pursue work with CTU|To become a presidential candidate|To join Isaac's drug gang|To move permanently to Sangala|Easy|Eric Carter|CTU Career|Nicole Carter|Finale Decision|Military To Intelligence|Future Plans|Family Reconciliation`,
   },
 ];

 const FIRST_ID = 11874;
 let index = 0;

 const questions = groups.flatMap(group =>
   group.facts.trim().split('\n').map(line => {
     const parts = line.trim().split('|').map(part => part.trim());
     const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
     if (parts.length !== 13) {
       throw new Error(`Expected seven specialist tags at ${id}; got ${parts.length - 6}`);
     }
     const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
     const answers = [wrong1, wrong2, wrong3];

     if (!question || !correctAnswer || answers.some(answer => !answer)) {
       throw new Error(`Missing question or answer at ${id}`);
     }
     if (new Set([correctAnswer, ...answers].map(answer => answer.toLowerCase())).size !== 4) {
       throw new Error(`Repeated answer option at ${id}`);
     }
     if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.some(tag => !tag)) {
       throw new Error(`Invalid difficulty or tag at ${id}`);
     }

     answers.splice(index % 4, 0, correctAnswer);

     const item = {
       id,
       category: 'Television',
       question: question.includes('24: Legacy') ? question : 'In 24: Legacy, ' + question.charAt(0).toLowerCase() + question.slice(1),
       answers,
       correctAnswer,
       difficulty,
       tags: [...new Set([
         'American Television', 'Action Drama', 'Crime Thriller', '24',
         '24 Legacy', '24 Spin Off', '2017', '2010s',
         group.topic, correctAnswer, ...specificTags
       ])],
       dailyEligible: true
     };

     index += 1;
     return item;
   })
 );

 
// STORYLINE AUDIT — 21 November 2026: 24: Legacy (2017)
// Preserved original IDs tv_11874–tv_11945; storyline additions across all 12 episodes.
// Source: https://en.wikipedia.org/wiki/24:_Legacy#Episodes
// Cross-check: https://www.tvline.com/news/24-legacy-recap-finale-rebecca-dies-819594/
const auditAdditions = [
  {
    "id": "tv_35435",
    "category": "Television",
    "question": "In 24: Legacy, how do Eric and Nicole survive the armed assault on their home?",
    "answers": [
      "Nicole helps Eric kill the intruders",
      "They escape without confronting the gunmen",
      "Rebecca sends a drone strike on the house",
      "Isaac negotiates their release"
    ],
    "correctAnswer": "Nicole helps Eric kill the intruders",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 01",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Eric Carter;Nicole Carter",
      "Storyline: Married couple repel opening attack",
      "Question focus: how do Eric and Nicole survive the armed assault on their home?",
      "Answer focus: Nicole helps Eric kill the intruders",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35436",
    "category": "Television",
    "question": "In 24: Legacy, what has happened to most of Eric's Ranger comrades by the time he calls Rebecca?",
    "answers": [
      "They have joined the presidential security detail",
      "They have been murdered by bin-Khalid's men",
      "They are all recovering in a military hospital",
      "They have fled together to Mexico"
    ],
    "correctAnswer": "They have been murdered by bin-Khalid's men",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 01",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Eric Carter;Rebecca Ingram;Ranger team",
      "Storyline: Rangers hunted after secret raid",
      "Question focus: what has happened to most of Eric's Ranger comrades by the time he calls Rebecca?",
      "Answer focus: They have been murdered by bin-Khalid's men",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35437",
    "category": "Television",
    "question": "In 24: Legacy, what is the earlier romantic connection between Isaac Carter and Eric's wife Nicole?",
    "answers": [
      "They had a secret wedding in college",
      "They never met before the day's crisis",
      "Isaac dated Nicole before she married Eric",
      "Isaac was Nicole's former employer"
    ],
    "correctAnswer": "Isaac dated Nicole before she married Eric",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 01",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Isaac Carter;Eric Carter;Nicole Carter",
      "Storyline: Old relationship fuels family tension",
      "Question focus: what is the earlier romantic connection between Isaac Carter and Eric's wife Nicole?",
      "Answer focus: Isaac dated Nicole before she married Eric",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35438",
    "category": "Television",
    "question": "In 24: Legacy, what happens to Ben Grimes's mother and sister after the terrorists overhear his escape plan?",
    "answers": [
      "They are taken into federal witness protection",
      "They are arrested for possessing the strongbox",
      "They are flown out of Washington by CTU",
      "They are murdered before the arranged meeting"
    ],
    "correctAnswer": "They are murdered before the arranged meeting",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 01",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Ben Grimes;Ranger family",
      "Storyline: Grimes family targeted at home",
      "Question focus: what happens to Ben Grimes's mother and sister after the terrorists overhear his escape plan?",
      "Answer focus: They are murdered before the arranged meeting",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35439",
    "category": "Television",
    "question": "In 24: Legacy, where does Eric seek the money needed to buy back Ben Grimes's stolen flash drive?",
    "answers": [
      "The police precinct's evidence room",
      "A cash storage room in the White House",
      "Isaac's private bank vault",
      "The security office at CTU"
    ],
    "correctAnswer": "The police precinct's evidence room",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 02",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Eric Carter;Ben Grimes;Isaac Carter",
      "Storyline: Carter raids seized police cash",
      "Question focus: where does Eric seek the money needed to buy back Ben Grimes's stolen flash drive?",
      "Answer focus: The police precinct's evidence room",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35440",
    "category": "Television",
    "question": "In 24: Legacy, what does Eric force two police officers to do during his attempt to obtain the ransom money?",
    "answers": [
      "Drive him into the presidential motorcade",
      "Help him enter the precinct and recover seized cash",
      "Hand over CTU's surveillance passwords",
      "Release Henry Donovan from custody"
    ],
    "correctAnswer": "Help him enter the precinct and recover seized cash",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 02",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Eric Carter;Metro Police",
      "Storyline: Police officers coerced at station",
      "Question focus: what does Eric force two police officers to do during his attempt to obtain the ransom money?",
      "Answer focus: Help him enter the precinct and recover seized cash",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35441",
    "category": "Television",
    "question": "In 24: Legacy, what suspicious political story is used to cast doubt on campaign manager Nilaa Mizrani?",
    "answers": [
      "She is accused of falsifying a marriage certificate",
      "She is accused of having fought in the Ranger raid",
      "Her past visits to a mosque are presented as extremist links",
      "She is identified as an associate of a drug gang"
    ],
    "correctAnswer": "Her past visits to a mosque are presented as extremist links",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 02",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Nilaa Mizrani;John Donovan",
      "Storyline: Nilaa smeared during campaign",
      "Question focus: what suspicious political story is used to cast doubt on campaign manager Nilaa Mizrani?",
      "Answer focus: Her past visits to a mosque are presented as extremist links",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35442",
    "category": "Television",
    "question": "In 24: Legacy, what does Drew discover after confiding his concerns about Amira to chemistry teacher David Harris?",
    "answers": [
      "Harris has already warned the police about her",
      "Amira is secretly working for CTU",
      "The school has been evacuated for a fire drill",
      "Harris is secretly helping Amira prepare the attack"
    ],
    "correctAnswer": "Harris is secretly helping Amira prepare the attack",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 02",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Drew Phelps;Amira Dudayev;David Harris",
      "Storyline: Teacher involved in terrorist conspiracy",
      "Question focus: what does Drew discover after confiding his concerns about Amira to chemistry teacher David Harris?",
      "Answer focus: Harris is secretly helping Amira prepare the attack",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35443",
    "category": "Television",
    "question": "In 24: Legacy, how is Ben Grimes wounded during the attempted exchange at the railway station?",
    "answers": [
      "One of Jadalla's men shoots him",
      "He is injured in a train derailment",
      "Eric accidentally shoots him while escaping",
      "He is poisoned by a CTU agent"
    ],
    "correctAnswer": "One of Jadalla's men shoots him",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 03",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Ben Grimes;Jadalla bin-Khalid;Eric Carter",
      "Storyline: Grimes wounded during drive handoff",
      "Question focus: how is Ben Grimes wounded during the attempted exchange at the railway station?",
      "Answer focus: One of Jadalla's men shoots him",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35444",
    "category": "Television",
    "question": "In 24: Legacy, how does the apparently dead Drew Phelps come to the attention of emergency workers?",
    "answers": [
      "He contacts police through a hidden transmitter",
      "He is found alive after collapsing on a school football field",
      "He walks into CTU headquarters",
      "His teacher takes him to a hospital"
    ],
    "correctAnswer": "He is found alive after collapsing on a school football field",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 03",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Drew Phelps;Amira Dudayev",
      "Storyline: Drew survives earlier attack",
      "Question focus: how does the apparently dead Drew Phelps come to the attention of emergency workers?",
      "Answer focus: He is found alive after collapsing on a school football field",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35445",
    "category": "Television",
    "question": "In 24: Legacy, how does Nicole uncover the plan to murder her brother-in-law Isaac?",
    "answers": [
      "She steals a letter from Rebecca's office",
      "She confronts Nilaa Mizrani at a fundraiser",
      "She secretly records Aisha's conversation with rival gang members",
      "She discovers a tracking device on Eric's car"
    ],
    "correctAnswer": "She secretly records Aisha's conversation with rival gang members",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 03",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Nicole Carter;Aisha;Isaac Carter",
      "Storyline: Nicole learns of gang ambush",
      "Question focus: how does Nicole uncover the plan to murder her brother-in-law Isaac?",
      "Answer focus: She secretly records Aisha's conversation with rival gang members",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35446",
    "category": "Television",
    "question": "In 24: Legacy, what valuable government material does Andy secretly obtain to help Eric approach arms dealer Gabriel?",
    "answers": [
      "The presidential nuclear launch codes",
      "A list of secret FBI witnesses",
      "The original designs for CTU headquarters",
      "Classified military schematics"
    ],
    "correctAnswer": "Classified military schematics",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 04",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Andy Shalowitz;Eric Carter;Gabriel",
      "Storyline: Classified plans traded for arms dealer access",
      "Question focus: what valuable government material does Andy secretly obtain to help Eric approach arms dealer Gabriel?",
      "Answer focus: Classified military schematics",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35447",
    "category": "Television",
    "question": "In 24: Legacy, what does John Donovan uncover about the surveillance supposedly implicating Nilaa?",
    "answers": [
      "The incriminating security footage has been fabricated",
      "The camera never recorded anyone entering the building",
      "Nilaa has already fled the country",
      "The device was installed by Eric Carter"
    ],
    "correctAnswer": "The incriminating security footage has been fabricated",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 04",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: John Donovan;Nilaa Mizrani;Henry Donovan",
      "Storyline: Campaign footage exposed as fake",
      "Question focus: what does John Donovan uncover about the surveillance supposedly implicating Nilaa?",
      "Answer focus: The incriminating security footage has been fabricated",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35448",
    "category": "Television",
    "question": "In 24: Legacy, what does Amira try to do to Drew while he lies in hospital?",
    "answers": [
      "Smother him with a hospital pillow",
      "Inject air into his intravenous line",
      "Swap his medication with sleeping tablets",
      "Persuade him to sign a false confession"
    ],
    "correctAnswer": "Inject air into his intravenous line",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 04",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Amira Dudayev;Drew Phelps;Khasan Dudayev",
      "Storyline: Amira ordered to silence witness",
      "Question focus: what does Amira try to do to Drew while he lies in hospital?",
      "Answer focus: Inject air into his intravenous line",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35449",
    "category": "Television",
    "question": "In 24: Legacy, how does Isaac ensure Nicole is released after police arrest her amid the gang dispute?",
    "answers": [
      "Rebecca provides a CTU immunity order",
      "Nicole escapes in a stolen ambulance",
      "He bribes the officers",
      "Eric hacks the police arrest records"
    ],
    "correctAnswer": "He bribes the officers",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 04",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Isaac Carter;Nicole Carter;Metro Police",
      "Storyline: Isaac secures Nicole's freedom",
      "Question focus: how does Isaac ensure Nicole is released after police arrest her amid the gang dispute?",
      "Answer focus: He bribes the officers",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35450",
    "category": "Television",
    "question": "In 24: Legacy, what choice does Eric make when Gabriel demands he shoot his former Ranger comrade Ben?",
    "answers": [
      "He shoots Ben to gain the dealer's trust",
      "He pretends Ben is an FBI agent",
      "He leaves the room without answering",
      "He refuses to kill Ben"
    ],
    "correctAnswer": "He refuses to kill Ben",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 05",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Eric Carter;Ben Grimes;Gabriel",
      "Storyline: Eric refuses arms dealer's test",
      "Question focus: what choice does Eric make when Gabriel demands he shoot his former Ranger comrade Ben?",
      "Answer focus: He refuses to kill Ben",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35451",
    "category": "Television",
    "question": "In 24: Legacy, how does Eric stop Gabriel's computer from hiding the terrorists' whereabouts after Gabriel dies?",
    "answers": [
      "He prevents the computer from automatically deleting its data",
      "He swaps the computer with a decoy",
      "He retrieves a backup from the presidential office",
      "He forces Gabriel to reveal a password"
    ],
    "correctAnswer": "He prevents the computer from automatically deleting its data",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 05",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Eric Carter;Gabriel;Thomas Locke",
      "Storyline: Preserving data from dying dealer",
      "Question focus: how does Eric stop Gabriel's computer from hiding the terrorists' whereabouts after Gabriel dies?",
      "Answer focus: He prevents the computer from automatically deleting its data",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35452",
    "category": "Television",
    "question": "In 24: Legacy, what happens to Amira and Khasan's father when he confronts them about the planned bombing?",
    "answers": [
      "They convince him to join the cell",
      "They tie him up and gag him",
      "They send him to the police station",
      "They lock him outside the family home"
    ],
    "correctAnswer": "They tie him up and gag him",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 05",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Amira Dudayev;Khasan Dudayev;Mikail Dudayev",
      "Storyline: Father tries to stop children's attack",
      "Question focus: what happens to Amira and Khasan's father when he confronts them about the planned bombing?",
      "Answer focus: They tie him up and gag him",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35453",
    "category": "Television",
    "question": "In 24: Legacy, who shoots chemistry teacher David Harris after he turns on Khasan at the bomb workshop?",
    "answers": [
      "Drew Phelps",
      "Mikail Dudayev",
      "Amira Dudayev",
      "Rebecca Ingram"
    ],
    "correctAnswer": "Amira Dudayev",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 06",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Amira Dudayev;David Harris;Khasan Dudayev",
      "Storyline: Amira kills teacher after brother shot",
      "Question focus: who shoots chemistry teacher David Harris after he turns on Khasan at the bomb workshop?",
      "Answer focus: Amira Dudayev",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35454",
    "category": "Television",
    "question": "In 24: Legacy, what does Mikail Dudayev do after escaping captivity in his own home?",
    "answers": [
      "He drives the bomb away from the city",
      "He informs Isaac Carter of a gang attack",
      "He plants another explosive device",
      "He warns the police about the planned truck bombing"
    ],
    "correctAnswer": "He warns the police about the planned truck bombing",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 06",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Mikail Dudayev;Amira Dudayev",
      "Storyline: Father attempts to avert bridge attack",
      "Question focus: what does Mikail Dudayev do after escaping captivity in his own home?",
      "Answer focus: He warns the police about the planned truck bombing",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35455",
    "category": "Television",
    "question": "In 24: Legacy, what happens even after police shoot Amira as her bomb truck approaches the bridge?",
    "answers": [
      "She manages to detonate the explosives",
      "The vehicle is recovered with no casualties",
      "The truck drives into the river without exploding",
      "Khasan disarms the bomb by telephone"
    ],
    "correctAnswer": "She manages to detonate the explosives",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 06",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Amira Dudayev;Khasan Dudayev;George Washington Bridge",
      "Storyline: Fatal bombing despite police response",
      "Question focus: what happens even after police shoot Amira as her bomb truck approaches the bridge?",
      "Answer focus: She manages to detonate the explosives",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35456",
    "category": "Television",
    "question": "In 24: Legacy, what is Eric's secret instruction to Andy when he is forced to help repair Jadalla's flash drive?",
    "answers": [
      "Copy the data to the presidential campaign",
      "Sabotage it with a virus instead of restoring access",
      "Send a false message to the Jordanian Embassy",
      "Destroy the only copy before reaching the exchange"
    ],
    "correctAnswer": "Sabotage it with a virus instead of restoring access",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 07",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Eric Carter;Andy Shalowitz;Jadalla bin-Khalid",
      "Storyline: Engineer secretly undermines terrorists",
      "Question focus: what is Eric's secret instruction to Andy when he is forced to help repair Jadalla's flash drive?",
      "Answer focus: Sabotage it with a virus instead of restoring access",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35457",
    "category": "Television",
    "question": "In 24: Legacy, what do Eric and Andy do to CTU field director Thomas Locke when he intercepts them?",
    "answers": [
      "Give him the stolen drive for safekeeping",
      "Persuade him to accompany them voluntarily",
      "Overpower him and lock him away",
      "Shoot him during a struggle"
    ],
    "correctAnswer": "Overpower him and lock him away",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 07",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Eric Carter;Andy Shalowitz;Thomas Locke",
      "Storyline: Locke stopped from disrupting plan",
      "Question focus: what do Eric and Andy do to CTU field director Thomas Locke when he intercepts them?",
      "Answer focus: Overpower him and lock him away",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35458",
    "category": "Television",
    "question": "In 24: Legacy, what does Jadalla reveal when Andy tries to upload his virus?",
    "answers": [
      "The drive contains no sleeper-cell information",
      "The CIA has already erased every file",
      "The encryption was designed by CTU",
      "The drive Andy has been given is a decoy"
    ],
    "correctAnswer": "The drive Andy has been given is a decoy",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 08",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Andy Shalowitz;Jadalla bin-Khalid",
      "Storyline: Jadalla anticipates attempted sabotage",
      "Question focus: what does Jadalla reveal when Andy tries to upload his virus?",
      "Answer focus: The drive Andy has been given is a decoy",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35459",
    "category": "Television",
    "question": "In 24: Legacy, what threat does the Director of National Intelligence authorise against Jadalla's compound?",
    "answers": [
      "An air strike even though Eric and Andy are inside",
      "An emergency presidential pardon",
      "The release of an airborne sleeping agent",
      "A citywide evacuation before an arrest"
    ],
    "correctAnswer": "An air strike even though Eric and Andy are inside",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 08",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: DNI;Eric Carter;Andy Shalowitz",
      "Storyline: Air strike puts captives at risk",
      "Question focus: what threat does the Director of National Intelligence authorise against Jadalla's compound?",
      "Answer focus: An air strike even though Eric and Andy are inside",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35460",
    "category": "Television",
    "question": "In 24: Legacy, who reaches Eric and Andy shortly before the ordered air strike hits Jadalla's compound?",
    "answers": [
      "Senator Donovan's security guards",
      "Isaac and his gang",
      "The Jordanian ambassador",
      "The US Coast Guard"
    ],
    "correctAnswer": "Isaac and his gang",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 08",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Isaac Carter;Eric Carter;Andy Shalowitz",
      "Storyline: Isaac leads last-minute rescue",
      "Question focus: who reaches Eric and Andy shortly before the ordered air strike hits Jadalla's compound?",
      "Answer focus: Isaac and his gang",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35461",
    "category": "Television",
    "question": "In 24: Legacy, what frightening device is fastened to Stephen Grant's girlfriend to force him to help Naseri?",
    "answers": [
      "A remotely controlled tracking collar",
      "A poison injector hidden in her watch",
      "An explosive vest",
      "A booby-trapped telephone"
    ],
    "correctAnswer": "An explosive vest",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 09",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Stephen Grant;Jennifer Marshall;Asim Naseri",
      "Storyline: Grant coerced via girlfriend",
      "Question focus: what frightening device is fastened to Stephen Grant's girlfriend to force him to help Naseri?",
      "Answer focus: An explosive vest",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35462",
    "category": "Television",
    "question": "In 24: Legacy, how does Eric protect Jennifer Marshall after CTU discovers the explosive vest?",
    "answers": [
      "He persuades Naseri to deactivate it remotely",
      "He evacuates her aboard a police helicopter",
      "He places her in a reinforced vault",
      "He removes it for a controlled detonation"
    ],
    "correctAnswer": "He removes it for a controlled detonation",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 09",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Eric Carter;Jennifer Marshall;Asim Naseri",
      "Storyline: Eric removes bomb from captive",
      "Question focus: how does Eric protect Jennifer Marshall after CTU discovers the explosive vest?",
      "Answer focus: He removes it for a controlled detonation",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35463",
    "category": "Television",
    "question": "In 24: Legacy, what does Nicole find at home that reveals Eric's undisclosed plans for the future?",
    "answers": [
      "His application to join CTU",
      "A plane ticket to Sangala",
      "An application to rejoin his brother's gang",
      "A letter ending their marriage"
    ],
    "correctAnswer": "His application to join CTU",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 09",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Nicole Carter;Eric Carter",
      "Storyline: Secret CTU career application",
      "Question focus: what does Nicole find at home that reveals Eric's undisclosed plans for the future?",
      "Answer focus: His application to join CTU",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35464",
    "category": "Television",
    "question": "In 24: Legacy, how does Luis Diaz respond when Henry Donovan asks for his help after John is abducted?",
    "answers": [
      "He gives the FBI a full confession",
      "He wounds Henry and flees",
      "He releases Rebecca from captivity",
      "He admits he has been working for CTU"
    ],
    "correctAnswer": "He wounds Henry and flees",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 10",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Luis Diaz;Henry Donovan;John Donovan",
      "Storyline: Luis attacks Henry to escape",
      "Question focus: how does Luis Diaz respond when Henry Donovan asks for his help after John is abducted?",
      "Answer focus: He wounds Henry and flees",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35465",
    "category": "Television",
    "question": "In 24: Legacy, what does Rebecca agree to do to obtain the release of her kidnapped husband John?",
    "answers": [
      "Hand over CTU's encryption software",
      "Resign from the presidential campaign",
      "Give herself up to Jadalla's men",
      "Offer Tony Almeida a cabinet post"
    ],
    "correctAnswer": "Give herself up to Jadalla's men",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 10",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Rebecca Ingram;John Donovan;Jadalla bin-Khalid",
      "Storyline: Rebecca swaps herself for John",
      "Question focus: what does Rebecca agree to do to obtain the release of her kidnapped husband John?",
      "Answer focus: Give herself up to Jadalla's men",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35466",
    "category": "Television",
    "question": "In 24: Legacy, what does Andy learn from Jennifer Marshall's account of Naseri's communications?",
    "answers": [
      "Naseri is secretly working for Isaac",
      "The bomb was made at Marshall High",
      "Rebecca has hidden the stolen drive",
      "A phrase points to the Director of National Intelligence"
    ],
    "correctAnswer": "A phrase points to the Director of National Intelligence",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 10",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Andy Shalowitz;Jennifer Marshall;Donald Simms",
      "Storyline: Phrase implicates DNI",
      "Question focus: what does Andy learn from Jennifer Marshall's account of Naseri's communications?",
      "Answer focus: A phrase points to the Director of National Intelligence",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35467",
    "category": "Television",
    "question": "In 24: Legacy, how does Eric gain access to Director of National Intelligence Donald Simms's office?",
    "answers": [
      "He poses as a Secret Service agent escorting John Donovan",
      "He hides inside a supply vehicle",
      "He obtains a visitor pass from Henry Donovan",
      "He wears the uniform of a captured mercenary"
    ],
    "correctAnswer": "He poses as a Secret Service agent escorting John Donovan",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 11",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Eric Carter;Donald Simms;John Donovan",
      "Storyline: Carter infiltrates DNI office",
      "Question focus: how does Eric gain access to Director of National Intelligence Donald Simms's office?",
      "Answer focus: He poses as a Secret Service agent escorting John Donovan",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35468",
    "category": "Television",
    "question": "In 24: Legacy, what does Simms reveal about the original decision to abduct Naseri's daughter Ara?",
    "answers": [
      "Tony Almeida ordered it on his own",
      "Rebecca Ingram authorised it",
      "John Donovan requested it",
      "Isaac Carter carried it out"
    ],
    "correctAnswer": "Rebecca Ingram authorised it",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 11",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Donald Simms;Rebecca Ingram;Ara;Asim Naseri",
      "Storyline: Rebecca implicated in illegal kidnapping",
      "Question focus: what does Simms reveal about the original decision to abduct Naseri's daughter Ara?",
      "Answer focus: Rebecca Ingram authorised it",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35469",
    "category": "Television",
    "question": "In 24: Legacy, why does Donald Simms secretly hire Tony Almeida to raid the safe house where Eric has found Ara?",
    "answers": [
      "To rescue John Donovan from the terrorists",
      "To interrogate Henry about his old company",
      "To kill Ara before she can be returned to Naseri",
      "To recover the chemical weapons from the high school"
    ],
    "correctAnswer": "To kill Ara before she can be returned to Naseri",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 11",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Donald Simms;Tony Almeida;Ara",
      "Storyline: DNI tries to silence kidnapped child",
      "Question focus: why does Donald Simms secretly hire Tony Almeida to raid the safe house where Eric has found Ara?",
      "Answer focus: To kill Ara before she can be returned to Naseri",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35470",
    "category": "Television",
    "question": "In 24: Legacy, what does CTU director Keith Mullins do when Simms's agent Daniel Pang closes in on Andy?",
    "answers": [
      "He gives Pang the stolen flash drive",
      "He locks Andy inside the data centre",
      "He sends Pang to the presidential residence",
      "He overpowers Pang and renders him unconscious"
    ],
    "correctAnswer": "He overpowers Pang and renders him unconscious",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 11",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Keith Mullins;Daniel Pang;Andy Shalowitz",
      "Storyline: Mullins protects analyst from DNI agent",
      "Question focus: what does CTU director Keith Mullins do when Simms's agent Daniel Pang closes in on Andy?",
      "Answer focus: He overpowers Pang and renders him unconscious",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35471",
    "category": "Television",
    "question": "In 24: Legacy, how does Eric gain the upper hand over Tony Almeida during their fight at Ara's safe house?",
    "answers": [
      "He breaks Tony's arm",
      "He traps Tony under a burning vehicle",
      "He shoots Tony with a tranquiliser",
      "He threatens to destroy Tony's bank account"
    ],
    "correctAnswer": "He breaks Tony's arm",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 12",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Eric Carter;Tony Almeida;Ara",
      "Storyline: Carter fights former CTU boss",
      "Question focus: how does Eric gain the upper hand over Tony Almeida during their fight at Ara's safe house?",
      "Answer focus: He breaks Tony's arm",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35472",
    "category": "Television",
    "question": "In 24: Legacy, who makes the telephone call that convinces Tony to stop trying to kill Ara?",
    "answers": [
      "Henry Donovan",
      "John Donovan",
      "Rebecca Ingram",
      "Isaac Carter"
    ],
    "correctAnswer": "John Donovan",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 12",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: John Donovan;Tony Almeida;Ara",
      "Storyline: Senator stops Tony's contract",
      "Question focus: who makes the telephone call that convinces Tony to stop trying to kill Ara?",
      "Answer focus: John Donovan",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35473",
    "category": "Television",
    "question": "In 24: Legacy, what must Naseri see before he releases Rebecca in the final exchange?",
    "answers": [
      "A video confession by Senator Donovan",
      "A presidential pardon for Ibrahim",
      "A live video showing Ara safely reaching the Jordanian embassy",
      "A CTU press conference about the bombing"
    ],
    "correctAnswer": "A live video showing Ara safely reaching the Jordanian embassy",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 12",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Asim Naseri;Ara;Rebecca Ingram",
      "Storyline: Naseri seeks proof daughter is safe",
      "Question focus: what must Naseri see before he releases Rebecca in the final exchange?",
      "Answer focus: A live video showing Ara safely reaching the Jordanian embassy",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35474",
    "category": "Television",
    "question": "In 24: Legacy, what happens to Donald Simms after the full consequences of his secret scheme emerge?",
    "answers": [
      "He is appointed CTU director",
      "He escapes to the Jordanian embassy",
      "He is pardoned by John Donovan",
      "He takes his own life"
    ],
    "correctAnswer": "He takes his own life",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 12",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Donald Simms;John Donovan;Ara",
      "Storyline: DNI suicide after exposure",
      "Question focus: what happens to Donald Simms after the full consequences of his secret scheme emerge?",
      "Answer focus: He takes his own life",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35475",
    "category": "Television",
    "question": "In 24: Legacy, what ultimately persuades Nicole to continue her marriage despite Eric's choice of a dangerous CTU career?",
    "answers": [
      "She accepts his need for the work and promises to try to make it work",
      "He promises never to leave the United States",
      "Rebecca offers her a job at CTU",
      "Isaac agrees to take over as his partner"
    ],
    "correctAnswer": "She accepts his need for the work and promises to try to make it work",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Legacy",
      "24 Spin Off",
      "2017",
      "2010s",
      "Programme: 24: Legacy",
      "Episode 12",
      "Washington DC",
      "CTU",
      "Eric Carter Era",
      "Characters: Nicole Carter;Eric Carter",
      "Storyline: Nicole accepts Eric's new direction",
      "Question focus: what ultimately persuades Nicole to continue her marriage despite Eric's choice of a dangerous CTU career?",
      "Answer focus: She accepts his need for the work and promises to try to make it work",
      "Viewer storyline"
    ]
  }
];
questions.push(...auditAdditions);
const EXPECTED_COUNT = 113;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_11874' || questions[71].id !== 'tv_11945' || questions[questions.length - 1].id !== 'tv_35475') {
   throw new Error('Unexpected question ID range');
 }
 if (
   new Set(questions.map(q => q.id)).size !== questions.length ||
   new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length
 ) {
   throw new Error('Duplicate question IDs or wording');
 }
 if (questions.some(q =>
   q.category !== 'Television' ||
   q.answers.length !== 4 ||
   !q.answers.includes(q.correctAnswer) ||
   q.tags.length < 15 ||
   q.tags.some(tag => !tag) ||
   q.dailyEligible !== true
 )) {
   throw new Error('Incomplete exported question metadata');
 }

 module.exports = questions;
