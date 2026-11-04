
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
       question,
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

 const EXPECTED_COUNT = 72;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_11874' || questions[questions.length - 1].id !== 'tv_11945') {
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
