
 // quiz_pack282.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: 24 - Season 6 (Day 6, broadcast 2007)
 // Jack's return, Fayed, the Valencia bomb, Bauer family, CTU, Wayne Palmer,
 // Gredenko, the Chinese operation, Audrey and the finale.
 // No episode-title recall questions. Seven individual specialist tags per question.
 // Do not connect in quiz_bank.js until the agreed end-of-session update.
 // Row: question | correct answer | three wrong answers | difficulty | individual tags

 const groups = [
   {
     topic: 'Jack Returns, Day Six And The Main Cast',
     facts: `How long after the events of Season 5 does the story of 24 Season 6 begin?|Twenty months|Three weeks|Five years|Ten years|Medium|Day Six Timeline|Twenty Month Gap|Season Five Aftermath|Jack Bauer Captivity|Story Chronology|2007 Broadcast|Time Jump
 At what time does the main storyline of 24 Season 6 begin?|6 am|Midnight|1 pm|8 pm|Medium|Day Six Start|Six In Morning|Real Time Format|Los Angeles|Season Premiere|Twenty Four Hours|2007 Television
 Which country's authorities have been holding Jack Bauer before the start of Day 6?|China|Russia|Mexico|France|Easy|Jack Bauer|Chinese Captivity|Season Five Cliffhanger|Cheng Zhi|Prisoner Release|Twenty Months|International Relations
 Which Palmer family member is President of the United States in Season 6?|Wayne Palmer|David Palmer|Keith Palmer|Sherry Palmer|Easy|Wayne Palmer|President Of United States|David Palmer Brother|White House|Presidential Leadership|Day Six|Palmer Family
 Which actor portrayed President Wayne Palmer?|D. B. Woodside|Dennis Haysbert|Powers Boothe|Geoff Pierson|Medium|Wayne Palmer|D B Woodside|Actor Casting|US President|Palmer Family|Season Six Lead|Political Drama
 Which terrorist demands Jack Bauer in exchange for information on the bombings?|Abu Fayed|Hamri Al-Assad|Dmitri Gredenko|Anatoly Markov|Easy|Abu Fayed|Jack Bauer Handover|Terrorist Demands|Hostage Exchange|Suicide Bombings|Presidential Negotiation|Opening Plot
 Who is initially blamed for the recent attacks but is later revealed to oppose them?|Hamri Al-Assad|Abu Fayed|Darren McCarthy|Graem Bauer|Medium|Hamri Al Assad|False Terrorist Suspect|Peace Efforts|Abu Fayed|Jack Bauer Ally|Mistaken Intelligence|Early Hours
 Which actor played Hamri Al-Assad?|Alexander Siddig|Adoni Maropis|Rade Serbedzija|John Noble|Medium|Hamri Al Assad|Alexander Siddig|Actor Casting|Former Terrorist Leader|Peace Negotiations|Jack Bauer Ally|Season Six Cast
 Which actor portrayed Abu Fayed?|Adoni Maropis|Alexander Siddig|Paul McCrane|Ricky Schroder|Hard|Abu Fayed|Adoni Maropis|Actor Casting|Suicide Bombing Campaign|Nuclear Terrorism|Main Antagonist|Season Six Guest
 Who is directing CTU Los Angeles when Jack returns from captivity?|Bill Buchanan|Tony Almeida|Ryan Chappelle|Erin Driscoll|Easy|Bill Buchanan|James Morrison|CTU Director|Jack Bauer Return|Los Angeles Branch|Operations Command|Counterterrorism Agency
 Which senior national-security adviser is married to CTU director Bill Buchanan?|Karen Hayes|Nadia Yassir|Sandra Palmer|Martha Logan|Medium|Karen Hayes|Bill Buchanan|Married Couple|White House Adviser|Homeland Security|Political Disagreements|Day Six
 Which actress played national-security adviser Karen Hayes?|Jayne Atkinson|Jean Smart|Regina King|Kim Raver|Medium|Karen Hayes|Jayne Atkinson|Actress Casting|Bill Buchanan Wife|White House Staff|National Security Adviser|Season Six Cast`,
   },
   {
     topic: 'The Bombings, Curtis And Valencia',
     facts: `For how many weeks have terrorist bombings struck the United States before Day 6 begins?|Eleven weeks|One week|Six months|Two years|Medium|Eleven Week Campaign|US Terrorist Attacks|Day Six Backstory|Civilian Casualties|National Emergency|Wayne Palmer|Opening Situation
 Who is actually directing the attacks that are initially blamed on Hamri Al-Assad?|Abu Fayed|Charles Logan|Anatoly Markov|Wayne Palmer|Easy|Abu Fayed|Hamri Al Assad|False Attribution|Terrorist Command|Suicide Bombings|Jack Bauer Discovery|Opening Revelation
 Which former militant does Jack unexpectedly join forces with after escaping Fayed?|Hamri Al-Assad|Dmitri Gredenko|Hasan Numair|Graem Bauer|Easy|Jack Bauer|Hamri Al Assad|Unexpected Alliance|Fayed Escape|Terrorist Investigation|Peace Seeking Militant|First Morning
 Whom is Jack initially expected to be handed over to as part of a presidential bargain?|Abu Fayed|Phillip Bauer|Cheng Zhi|Noah Daniels|Medium|Jack Bauer|Abu Fayed|Wayne Palmer Deal|Prisoner Exchange|Life Sacrifice|Presidential Bargain|Chinese Release
 Which CTU field agent refuses to accept Assad's change of allegiance because of a past atrocity?|Curtis Manning|Milo Pressman|Mike Doyle|Morris O'Brian|Medium|Curtis Manning|Hamri Al Assad|Past War Atrocities|Personal Grudge|CTU Field Agent|Moral Conflict|Hostage Standoff
 Who shoots Curtis Manning when he threatens to kill Hamri Al-Assad?|Jack Bauer|Bill Buchanan|Mike Doyle|Abu Fayed|Easy|Curtis Manning Death|Jack Bauer|Hamri Al Assad|Forced Shooting|Former Colleague|Day Six Trauma|Hostage Standoff
 What has Hamri Al-Assad previously done that makes Curtis Manning despise him?|He ordered the killing of Curtis's fellow soldiers|He stole CTU nuclear plans|He kidnapped Curtis's daughter|He bombed the White House|Hard|Curtis Manning|Hamri Al Assad|Army Comrades|Past Execution|War Trauma|Personal Vendetta|Reason For Hostility
 What type of weapons does Fayed's organisation plan to detonate in American cities?|Suitcase nuclear bombs|Cruise missiles with chemical warheads|Biological crop dusters|Radioactive water supplies|Easy|Abu Fayed|Suitcase Nuclear Bombs|Terrorist Weapon|Mass Casualty Threat|Day Six Crisis|Nuclear Devices|US Cities
 How many suitcase nuclear devices does Fayed's operation have in total?|Five|Two|Three|Ten|Medium|Five Nuclear Devices|Abu Fayed|Suitcase Bombs|Multiple Targets|CTU Intelligence|Valencia Explosion|Day Six Plot
 Which Los Angeles-area community is devastated by a nuclear explosion in the fourth episode of Season 6?|Valencia|Chiswick|Beverly Hills|Santa Monica Pier|Easy|Valencia|Los Angeles Suburb|Nuclear Detonation|Fourth Episode|Civilian Tragedy|Fayed Operation|Mushroom Cloud
 Which terrorist detonates the nuclear device in Valencia when CTU closes in?|Hasan Numair|Ahmed Amar|Abu Fayed|Dmitri Gredenko|Hard|Hasan Numair|Valencia Explosion|Suitcase Nuclear Bomb|CTU Raid|Terrorist Weapons Programmer|Day Six Disaster|Fatal Detonation
 Which actor played terrorist associate Ahmed Amar in the early Season 6 episodes?|Kal Penn|Adoni Maropis|Alexander Siddig|John Noble|Medium|Ahmed Amar|Kal Penn|Actor Casting|Wallace Family Hostages|Fayed Network|Early Episodes|American Actor`,
   },
   {
     topic: 'The Bauer Family And Hidden Conspiracy',
     facts: `What is the first name of Jack Bauer's estranged brother introduced in Season 6?|Graem|Josh|Curtis|Derek|Easy|Graem Bauer|Jack Bauer Brother|Bauer Family|Estranged Siblings|Corporate Conspiracy|Season Six Introduction|Older Brother
 Which actor portrayed Jack's brother Graem Bauer?|Paul McCrane|James Cromwell|Ricky Schroder|Peter MacNicol|Medium|Graem Bauer|Paul McCrane|Actor Casting|Jack Bauer Brother|Corporate Executive|Day Six Family|Season Six Cast
 What is the first name of Jack Bauer's father, who becomes involved in the terrorist investigation?|Phillip|Graham|James|George|Easy|Phillip Bauer|Jack Bauer Father|Bauer Family|Family Secrets|Corporate Links|Season Six|Patriarch
 Which actor played Phillip Bauer?|James Cromwell|William Devane|Peter Weller|Powers Boothe|Medium|Phillip Bauer|James Cromwell|Actor Casting|Jack Bauer Father|Bauer Family|Season Six Guest|Villainous Patriarch
 Who is Graem Bauer's wife and Jack's sister-in-law?|Marilyn Bauer|Martha Logan|Audrey Raines|Sandra Palmer|Easy|Marilyn Bauer|Graem Bauer Wife|Jack Bauer Sister In Law|Josh Bauer Mother|Family Crisis|Season Six Cast|Bauer Household
 Which actress portrayed Marilyn Bauer?|Rena Sofer|Regina King|Kim Raver|Kari Matchett|Medium|Marilyn Bauer|Rena Sofer|Actress Casting|Graem Bauer Wife|Josh Bauer Mother|Bauer Family|Season Six Cast
 What is the first name of Graem and Marilyn Bauer's son?|Josh|Derek|Kyle|Chase|Easy|Josh Bauer|Graem Bauer Son|Marilyn Bauer Son|Jack Bauer Nephew|Teenage Character|Family Hostage|Season Six
 Which actor played Jack Bauer's nephew Josh?|Evan Ellingson|Eric Balfour|Brady Corbet|Jonathan Ahdout|Hard|Josh Bauer|Evan Ellingson|Actor Casting|Jack Bauer Nephew|Family Drama|Teenage Cast|Season Six Guest
 Who secretly kills Graem Bauer while Graem is under interrogation?|Phillip Bauer|Jack Bauer|Abu Fayed|Mike Doyle|Medium|Graem Bauer Death|Phillip Bauer|Father Son Betrayal|Interrogation Drug|Cover Up|Family Murder|Conspiracy Secrets
 What is the name of the company connected to Graem and Phillip Bauer's dealings with nuclear technology?|BXJ Technologies|McLennan-Forster|Omicron International|Warner Enterprises|Hard|BXJ Technologies|Graem Bauer|Phillip Bauer|Dmitri Gredenko|Defence Technology|Nuclear Conspiracy|Bauer Company
 Which former US president was linked to the earlier conspiracy in which Graem Bauer participated?|Charles Logan|John Keeler|Wayne Palmer|David Palmer|Medium|Charles Logan|Graem Bauer|Day Five Conspiracy|David Palmer Assassination|Nerve Gas Crisis|White House Corruption|Family Revelation
 Whom does Marilyn Bauer tell Jack has died while trying to find him in China?|Audrey Raines|Kim Bauer|Michelle Dessler|Claudia Hernandez|Medium|Audrey Raines|Marilyn Bauer|Jack Bauer|Reported Death|Chinese Search|False Information|Lost Relationship`,
   },
   {
     topic: 'CTU Analysts, Hostages And Workplace Loyalties',
     facts: `Which returning CTU analyst develops feelings for colleague Nadia Yassir in Season 6?|Milo Pressman|Morris O'Brian|Adam Kaufman|Edgar Stiles|Medium|Milo Pressman|Nadia Yassir|CTU Romance|Workplace Loyalty|Technician|Returning Character|Day Six
 Which actor played CTU analyst Milo Pressman in Season 6?|Eric Balfour|Carlo Rota|Roger Cross|Louis Lombardi|Medium|Milo Pressman|Eric Balfour|Actor Casting|CTU Analyst|Nadia Yassir|Returning Performer|Season Six Cast
 Who is the senior CTU analyst accused of being a terrorist insider during the crisis?|Nadia Yassir|Chloe O'Brian|Karen Hayes|Sandra Palmer|Easy|Nadia Yassir|False Mole Accusation|CTU Senior Analyst|Security Investigation|Discrimination|Milo Pressman|Day Six
 Which actress portrayed CTU analyst Nadia Yassir?|Marisol Nichols|Jayne Atkinson|Regina King|Rena Sofer|Medium|Nadia Yassir|Marisol Nichols|Actress Casting|CTU Staff|Milo Pressman|Agency Leadership|Season Six Lead
 Which computer specialist is Chloe O'Brian's former husband and a member of the CTU team?|Morris O'Brian|Milo Pressman|Bill Buchanan|Graem Bauer|Easy|Morris O Brian|Chloe O Brian|Former Spouses|CTU Technician|Nuclear Bomb Detonators|Alcohol Recovery|Day Six
 Which actor portrayed CTU technician Morris O'Brian?|Carlo Rota|Eric Balfour|James Morrison|Ricky Schroder|Medium|Morris O Brian|Carlo Rota|Actor Casting|Chloe O Brian|CTU Technician|Season Six Regular|British Canadian Actor
 What is Morris O'Brian forced to do after Fayed's associates abduct him?|Make a nuclear bomb detonator operational|Stab President Palmer|Sabotage a submarine sonar system|Open the Chinese embassy vault|Medium|Morris O Brian|Abu Fayed|Forced Detonator Work|Suitcase Nuclear Bombs|Engineer Kidnapping|Technical Coercion|Hostage Crisis
 Which addiction does Morris O'Brian struggle against after the ordeal with Fayed?|Alcohol|Heroin|Cocaine|Gambling|Medium|Morris O Brian|Alcoholism|Guilt Over Detonator|Recovery Struggle|Chloe O Brian|Emotional Fallout|CTU Staff
 Which newly arrived CTU agent takes charge of field operations later in Day 6?|Mike Doyle|Curtis Manning|Ryan Chappelle|Adam Kaufman|Easy|Mike Doyle|Director Of Field Operations|CTU Division|Tactical Operations|Jack Bauer|Season Six Arrival|Field Command
 Which actor portrayed CTU field agent Mike Doyle?|Ricky Schroder|James Morrison|Roger Cross|Sean Astin|Medium|Mike Doyle|Ricky Schroder|Actor Casting|Field Operations|CTU Tactical Team|Season Six Cast|American Actor
 Which agent defends Nadia Yassir when colleagues suspect her of aiding terrorists?|Milo Pressman|Phillip Bauer|Noah Daniels|Graem Bauer|Medium|Milo Pressman|Nadia Yassir|False Mole Suspicions|Workplace Loyalty|CTU Internal Inquiry|Personal Affection|Day Six
 Which CTU operative treats Nadia as a suspected mole before learning the truth?|Mike Doyle|Jack Bauer|Bill Buchanan|Curtis Manning|Medium|Mike Doyle|Nadia Yassir|Mole Investigation|Unfair Suspicion|Interrogation|CTU Field Operations|Workplace Conflict`,
   },
   {
     topic: 'Wayne Palmer, The White House And The Attempted Coup',
     facts: `Which White House adviser pushes controversial security measures that President Wayne Palmer initially resists?|Tom Lennox|Mike Novick|Walt Cummings|James Heller|Medium|Tom Lennox|Wayne Palmer|Civil Liberties Debate|Security Policy|White House Adviser|Government Powers|Day Six
 Which actor played White House official Tom Lennox?|Peter MacNicol|Powers Boothe|Paul McCrane|James Cromwell|Medium|Tom Lennox|Peter MacNicol|Actor Casting|White House Adviser|Civil Liberties Policy|Political Plot|Season Six Cast
 Who is President Wayne Palmer's sister and a civil-rights lawyer?|Sandra Palmer|Martha Logan|Karen Hayes|Lisa Miller|Easy|Sandra Palmer|Wayne Palmer Sister|Civil Rights Lawyer|Palmer Family|Detention Policy|Legal Advocacy|Season Six
 Which actress played lawyer Sandra Palmer?|Regina King|Jean Smart|Jayne Atkinson|Marisol Nichols|Medium|Sandra Palmer|Regina King|Actress Casting|Wayne Palmer Sister|Civil Rights Lawyer|Season Six Regular|Political Drama
 Which man close to Sandra Palmer becomes caught up in a counterterrorism detention operation?|Walid Al-Rezani|Hamri Al-Assad|Darren McCarthy|Anatoly Markov|Medium|Walid Al Rezani|Sandra Palmer|Civil Rights Organisation|Detention Centre|Suspicion Of Terrorism|Legal Conflict|Civil Liberties
 Who is the vice president who takes over executive powers after Wayne Palmer is injured?|Noah Daniels|Charles Logan|John Keeler|James Prescott|Easy|Noah Daniels|Vice President|Wayne Palmer Injury|Acting President|White House|Presidential Succession|National Emergency
 Which actor played Vice President Noah Daniels?|Powers Boothe|D B Woodside|Geoff Pierson|Gregory Itzin|Medium|Noah Daniels|Powers Boothe|Actor Casting|Vice President|Political Leadership|Season Six Cast|Acting President
 Which White House staffer conspires to remove President Palmer from office by force?|Reed Pollock|Mike Novick|Aaron Pierce|Bill Buchanan|Hard|Reed Pollock|Chad Lowe|Presidential Assassination Plot|Tom Lennox|Bruce Carson|White House Conspirator|Political Extremism
 What kills Hamri Al-Assad during his visit to the presidential administration?|A bomb planted for President Palmer|A helicopter crash|Poison in a drink|A sniper on the White House roof|Medium|Hamri Al Assad Death|White House Bombing|Reed Pollock|Bruce Carson|Wayne Palmer|Assassination Attempt|Terror Attack
 Who is seriously injured and left in a coma by the same bombing that kills Assad?|Wayne Palmer|Noah Daniels|Tom Lennox|Karen Hayes|Easy|Wayne Palmer|Coma|Assad Death|Presidential Bombing|White House Crisis|Emergency Succession|Conspiracy
 What military response does acting president Noah Daniels threaten following the attacks?|A nuclear strike against a Middle Eastern country|An invasion of Canada|A naval blockade of Japan|A missile strike on Greenland|Medium|Noah Daniels|Nuclear Retaliation|Middle East|Military Escalation|Wayne Palmer Coma|Presidential Powers|Foreign Policy
 Who temporarily returns from a coma to oppose Noah Daniels' planned nuclear retaliation?|Wayne Palmer|David Palmer|Charles Logan|John Keeler|Medium|Wayne Palmer|Noah Daniels|Return From Coma|Nuclear Strike Blocked|Presidential Authority|Health Crisis|Foreign Policy`,
   },
   {
     topic: "Gredenko, The Russians And Fayed's Downfall",
     facts: `Which former president offers Jack Bauer help contacting Russian officials during the hunt for Fayed?|Charles Logan|John Keeler|David Palmer|James Prescott|Easy|Charles Logan|Jack Bauer|Former President|Russian Contacts|Diplomatic Intervention|Anatoly Markov|Day Six Return
 Which of Charles Logan's former spouses is asked to help contact the Russian president's wife?|Martha Logan|Sherry Palmer|Audrey Raines|Marilyn Bauer|Medium|Martha Logan|Charles Logan|Anya Suvarov|Russian First Lady|Diplomatic Phone Call|Former Marriage|Secret Service
 What does Martha Logan do to Charles Logan during their tense reunion?|Stabs him with a kitchen knife|Shoots him in the leg|Locks him in a cellar|Throws him from a moving car|Medium|Martha Logan|Charles Logan|Knife Attack|Reunion|Aaron Pierce|Russian Diplomacy|Personal Breakdown
 What is the name of the Russian consul who has information about Dmitri Gredenko?|Anatoly Markov|Yuri Suvarov|Vladimir Bierko|Ivan Erwich|Hard|Anatoly Markov|Russian Consulate|Dmitri Gredenko|Jack Bauer|Diplomatic Standoff|Intelligence Source|Day Six
 Which actor portrayed Russian consul Anatoly Markov?|John Noble|Rade Serbedzija|Alexander Siddig|James Cromwell|Hard|Anatoly Markov|John Noble|Actor Casting|Russian Consulate|Dmitri Gredenko|Season Six Guest|Diplomatic Plot
 Which former Russian general helps Fayed obtain and deploy the nuclear devices?|Dmitri Gredenko|Yuri Suvarov|Anatoly Markov|Victor Drazen|Easy|Dmitri Gredenko|Former Russian General|Abu Fayed|Suitcase Nuclear Devices|Arms Conspiracy|Cold War|Season Six Villain
 Which actor played former general Dmitri Gredenko?|Rade Serbedzija|John Noble|Julian Sands|Adoni Maropis|Medium|Dmitri Gredenko|Rade Serbedzija|Actor Casting|Former Russian General|Nuclear Terrorism|Season Six Cast|European Actor
 What kind of unmanned aircraft does Gredenko plan to equip with nuclear bombs?|Aerial drones|Hot-air balloons|Weather satellites|Manned helicopters|Medium|Dmitri Gredenko|Unmanned Aerial Vehicles|Nuclear Devices|Remote Controlled Aircraft|Bomb Delivery|Abu Fayed|Military Technology
 Which California city is threatened by a nuclear-armed drone controlled by Gredenko's network?|San Francisco|San Diego|Sacramento|Fresno|Medium|San Francisco|Dmitri Gredenko|Nuclear Drone|California Target|Remote Pilot|CTU Intervention|Aerial Threat
 Who agrees to help CTU find Fayed in exchange for protection from extradition?|Dmitri Gredenko|Charles Logan|Phillip Bauer|Anatoly Markov|Medium|Dmitri Gredenko|CTU Informant Deal|Abu Fayed|Russian Extradition|Negotiated Immunity|Double Cross|Field Operation
 Who ultimately kills Abu Fayed after tracking him to his remaining nuclear devices?|Jack Bauer|Mike Doyle|Bill Buchanan|Milo Pressman|Easy|Abu Fayed Death|Jack Bauer|Nuclear Weapons Recovery|Warehouse Fight|Final Terrorist Confrontation|Day Six|Counterterrorism
 How does Abu Fayed die during his final confrontation with Jack?|He is hanged using a heavy chain|He falls from a helicopter|He is struck by a subway train|He is killed in the Valencia explosion|Medium|Abu Fayed|Jack Bauer|Steel Chain|Warehouse Fight|Hanging Death|Remaining Bombs|Season Six Action`,
   },
   {
     topic: 'Cheng, The Russian Circuit Board And The Finale',
     facts: `Which woman Jack believed dead contacts him after the hunt for Fayed ends?|Audrey Raines|Kate Warner|Michelle Dessler|Nina Myers|Easy|Audrey Raines|Jack Bauer|False Death Report|Chinese Captivity|Unexpected Telephone Call|Romantic Reunion|Day Six Twist
 Which Chinese official demands a Russian nuclear circuit board in exchange for Audrey's freedom?|Cheng Zhi|Anatoly Markov|Zhou Yong|Phillip Bauer|Easy|Cheng Zhi|Chinese Intelligence|Audrey Raines Hostage|Jack Bauer|Nuclear Circuit Board|Extortion|Season Six Finale
 Which actress returned as Audrey Raines in Season 6?|Kim Raver|Rena Sofer|Regina King|Kari Matchett|Medium|Audrey Raines|Kim Raver|Actress Casting|Jack Bauer Romance|Chinese Captivity|Season Six Guest|Heller Family
 What component from the recovered nuclear devices does Cheng demand from Jack?|A Russian circuit board|An atomic fuel rod|A satellite telephone|A radioactive isotope sample|Medium|Russian Circuit Board|Cheng Zhi|Nuclear Weapons Technology|Audrey Raines|Hostage Exchange|Sensitive Intelligence|Jack Bauer
 Which country threatens military action against the United States after learning China has the stolen Russian circuit board?|Russia|France|Mexico|Canada|Medium|Russia|China|Circuit Board Theft|US Diplomatic Crisis|Cheng Zhi|Military Escalation|International Incident
 Who leads the Chinese mercenaries who attack CTU headquarters late in Day 6?|Zhou Yong|Abu Fayed|Anatoly Markov|Mike Doyle|Hard|Zhou Yong|Chinese Mercenaries|CTU Headquarters Assault|Cheng Zhi|Hostage Taking|Night Operation|Season Six Finale
 Which CTU analyst is shot dead while protecting Nadia Yassir during the Chinese assault?|Milo Pressman|Morris O'Brian|Chloe O'Brian|Bill Buchanan|Easy|Milo Pressman Death|Nadia Yassir|Chinese CTU Assault|Sacrifice|Hostage Confrontation|Eric Balfour|Final Hours
 Which young Bauer family member is sought as leverage in Phillip Bauer's dealings with the Chinese?|Josh Bauer|Kim Bauer|Derek Huxley|Kyle Singer|Easy|Josh Bauer|Phillip Bauer|Grandfather Grandson|Chinese Conspiracy|Hostage Bargain|Jack Bauer Nephew|Finale Crisis
 Where does Phillip Bauer take Josh after the attempted exchange for the circuit board?|An offshore oil rig|A Russian embassy|A mountain observatory|A military prison|Medium|Phillip Bauer|Josh Bauer|Offshore Oil Rig|Hostage Exchange|Nuclear Circuit Board|Cheng Zhi|Finale Location
 Which former CTU director helps Jack travel to the offshore rig to save Josh?|Bill Buchanan|Tony Almeida|Erin Driscoll|Ryan Chappelle|Medium|Bill Buchanan|Jack Bauer|Josh Bauer Rescue|Helicopter Mission|Former CTU Director|Offshore Rig|Final Operation
 How does Phillip Bauer die after Jack rescues Josh from the offshore oil rig?|In an air strike on the rig|In a CTU detention cell|From nerve gas at CTU|In a car bomb outside the White House|Medium|Phillip Bauer Death|Offshore Oil Rig|Air Strike|Josh Bauer|Jack Bauer|Finale Explosion|Bauer Family Tragedy
 Where does Jack stand alone at the end of Season 6 after saying goodbye to Audrey?|On a cliff overlooking the ocean|On the roof of CTU headquarters|Inside the White House|At an airport departure gate|Medium|Jack Bauer|Audrey Raines|Ocean Cliff|Final Scene|Emotional Farewell|James Heller|Season Six Ending`,
   },
 ];

 const FIRST_ID = 11500;
 let index = 0;

 const questions = groups.flatMap(group =>
   group.facts.trim().split('\n').map(line => {
     const parts = line.trim().split('|').map(part => part.trim());
     const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
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
       question: question.includes('24') ? question : 'In 24 (Season 6), ' + question.charAt(0).toLowerCase() + question.slice(1),
       answers,
       correctAnswer,
       difficulty,
       tags: [...new Set([
         'American Television', 'Action Drama', 'Crime Thriller', '24',
         '24 Season 6', '24 Day 6', '2007', '2000s',
         group.topic, correctAnswer, ...specificTags
       ])],
       dailyEligible: true
     };
     index += 1;
     return item;
   })
 );

 
// EDITORIAL AUDIT — 20 November 2026: 24 Season 6, plot and character details
// Preserved original IDs tv_11500–tv_11583. Added story-based questions across the full day.
// Primary episode guide: https://thetvdb.com/series/24-show/allseasons/official
// Scene verification: https://en.wikipedia.org/wiki/24_season_6
const auditAdditions = [
  {
    "id": "tv_35220",
    "category": "Television",
    "question": "In 24 (Season 6), why does Jack agree to be handed over to Abu Fayed after returning from China?",
    "answers": [
      "He believes sacrificing himself will help end the bombings",
      "Fayed has already captured Kim Bauer",
      "China demands his return in exchange for Audrey",
      "He has agreed to join Fayed's organisation"
    ],
    "correctAnswer": "He believes sacrificing himself will help end the bombings",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 01",
      "Day 6 clock hour 06:00",
      "Characters: Jack Bauer;Abu Fayed",
      "Storyline: Jack's apparent sacrifice",
      "Question focus: Why does Jack agree to be handed over to Abu Fayed after returning from China?",
      "Answer focus: He believes sacrificing himself will help end the bombings",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35221",
    "category": "Television",
    "question": "In 24 (Season 6), what discovery gives Jack the determination to escape from Fayed?",
    "answers": [
      "Graem has already arrested Fayed",
      "Assad is not behind the attacks after all",
      "President Palmer plans to pardon him",
      "A nuclear bomb has been disarmed"
    ],
    "correctAnswer": "Assad is not behind the attacks after all",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 01",
      "Day 6 clock hour 06:00",
      "Characters: Jack Bauer;Hamri Al-Assad;Abu Fayed",
      "Storyline: Truth about the attackers",
      "Question focus: What discovery gives Jack the determination to escape from Fayed?",
      "Answer focus: Assad is not behind the attacks after all",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35222",
    "category": "Television",
    "question": "In 24 (Season 6), how does Jack stop the suicide bomber aboard a Los Angeles subway train?",
    "answers": [
      "He disconnects the train's electrical system",
      "He uses a fire extinguisher to disable the bomb",
      "He throws the bomber out of the train before the vest explodes",
      "He persuades the bomber to surrender at the next station"
    ],
    "correctAnswer": "He throws the bomber out of the train before the vest explodes",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 02",
      "Day 6 clock hour 07:00",
      "Characters: Jack Bauer;Hamri Al-Assad",
      "Storyline: Subway suicide bomber",
      "Question focus: How does Jack stop the suicide bomber aboard a Los Angeles subway train?",
      "Answer focus: He throws the bomber out of the train before the vest explodes",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35223",
    "category": "Television",
    "question": "In 24 (Season 6), why are Sandra Palmer and Walid Al-Rezani arrested during an FBI investigation?",
    "answers": [
      "Walid is caught distributing explosives",
      "Sandra helps Fayed evade arrest",
      "They enter the White House without permission",
      "Sandra deletes records at their community organisation"
    ],
    "correctAnswer": "Sandra deletes records at their community organisation",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 02",
      "Day 6 clock hour 07:00",
      "Characters: Sandra Palmer;Walid Al-Rezani",
      "Storyline: FBI community-centre arrests",
      "Question focus: Why are Sandra Palmer and Walid Al-Rezani arrested during an FBI investigation?",
      "Answer focus: Sandra deletes records at their community organisation",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35224",
    "category": "Television",
    "question": "In 24 (Season 6), how do Jack and Assad try to get close to Fayed through his courier?",
    "answers": [
      "Jack stages a car crash so Assad can offer the courier a lift",
      "Assad disguises himself as an airport security guard",
      "Jack places a false bomb on the courier's car",
      "The courier is tricked into entering CTU"
    ],
    "correctAnswer": "Jack stages a car crash so Assad can offer the courier a lift",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 03",
      "Day 6 clock hour 08:00",
      "Characters: Jack Bauer;Hamri Al-Assad",
      "Storyline: Staged collision",
      "Question focus: How do Jack and Assad try to get close to Fayed through his courier?",
      "Answer focus: Jack stages a car crash so Assad can offer the courier a lift",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35225",
    "category": "Television",
    "question": "In 24 (Season 6), what does Fayed's courier do when cornered at a self-storage warehouse?",
    "answers": [
      "He surrenders and gives up the nuclear plans",
      "He detonates a grenade, destroying much of his laptop",
      "He sets fire to a fuel depot",
      "He escapes by helicopter"
    ],
    "correctAnswer": "He detonates a grenade, destroying much of his laptop",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 03",
      "Day 6 clock hour 08:00",
      "Characters: Jack Bauer;Hamri Al-Assad;Fayed's courier",
      "Storyline: Courier's last act",
      "Question focus: What does Fayed's courier do when cornered at a self-storage warehouse?",
      "Answer focus: He detonates a grenade, destroying much of his laptop",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35226",
    "category": "Television",
    "question": "In 24 (Season 6), why does Ahmed Amar force Ray Wallace to collect a technical component?",
    "answers": [
      "Ray has volunteered to help CTU",
      "Ray owes Ahmed a gambling debt",
      "He is holding Ray's wife and son hostage",
      "The component belongs to Ray's employer"
    ],
    "correctAnswer": "He is holding Ray's wife and son hostage",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 03",
      "Day 6 clock hour 08:00",
      "Characters: Ahmed Amar;Ray Wallace;Scott Wallace;Jillian Wallace",
      "Storyline: Wallace family held hostage",
      "Question focus: Why does Ahmed Amar force Ray Wallace to collect a technical component?",
      "Answer focus: He is holding Ray's wife and son hostage",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35227",
    "category": "Television",
    "question": "In 24 (Season 6), what does Ray Wallace do to obtain the electronic device demanded by Ahmed?",
    "answers": [
      "He steals it from CTU headquarters",
      "He obtains it from a passing courier",
      "He builds it from spare computer parts",
      "He kills a man during a struggle at the electronics shop"
    ],
    "correctAnswer": "He kills a man during a struggle at the electronics shop",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 03",
      "Day 6 clock hour 08:00",
      "Characters: Ray Wallace;Ahmed Amar",
      "Storyline: Ray's desperate collection",
      "Question focus: What does Ray Wallace do to obtain the electronic device demanded by Ahmed?",
      "Answer focus: He kills a man during a struggle at the electronics shop",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35228",
    "category": "Television",
    "question": "In 24 (Season 6), which Wallace family member is released first after Ray bargains with Ahmed?",
    "answers": [
      "Jillian Wallace",
      "Ray Wallace",
      "Scott Wallace",
      "Both parents together"
    ],
    "correctAnswer": "Jillian Wallace",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 04",
      "Day 6 clock hour 09:00",
      "Characters: Ahmed Amar;Jillian Wallace;Ray Wallace;Scott Wallace",
      "Storyline: Hostage release",
      "Question focus: Which Wallace family member is released first after Ray bargains with Ahmed?",
      "Answer focus: Jillian Wallace",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35229",
    "category": "Television",
    "question": "In 24 (Season 6), how does CTU discover where Ahmed plans to deliver the device?",
    "answers": [
      "A satellite tracks Ray's watch",
      "Scott recalls Ahmed mentioning Valencia",
      "Jillian overhears a call with Gredenko",
      "Ahmed writes the address on a receipt"
    ],
    "correctAnswer": "Scott recalls Ahmed mentioning Valencia",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 04",
      "Day 6 clock hour 09:00",
      "Characters: Scott Wallace;Ahmed Amar;CTU",
      "Storyline: Valencia lead",
      "Question focus: How does CTU discover where Ahmed plans to deliver the device?",
      "Answer focus: Scott recalls Ahmed mentioning Valencia",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35230",
    "category": "Television",
    "question": "In 24 (Season 6), what does Jack do when he sees the devastation caused by the Valencia explosion?",
    "answers": [
      "He immediately leaves the country",
      "He resigns as a CTU field agent on television",
      "He helps people caught in the aftermath",
      "He returns to the Chinese embassy"
    ],
    "correctAnswer": "He helps people caught in the aftermath",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 05",
      "Day 6 clock hour 10:00",
      "Characters: Jack Bauer;Valencia",
      "Storyline: Jack's response to disaster",
      "Question focus: What does Jack do when he sees the devastation caused by the Valencia explosion?",
      "Answer focus: He helps people caught in the aftermath",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35231",
    "category": "Television",
    "question": "In 24 (Season 6), what does Jack do to Graem after visiting his estranged brother's house?",
    "answers": [
      "He orders Graem released from CTU custody",
      "He makes Graem impersonate their father",
      "He leaves Josh in Graem's custody",
      "He locks him in a room and interrogates him"
    ],
    "correctAnswer": "He locks him in a room and interrogates him",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 05",
      "Day 6 clock hour 10:00",
      "Characters: Jack Bauer;Graem Bauer",
      "Storyline: Family interrogation",
      "Question focus: What does Jack do to Graem after visiting his estranged brother's house?",
      "Answer focus: He locks him in a room and interrogates him",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35232",
    "category": "Television",
    "question": "In 24 (Season 6), how does Tom Lennox pressure Karen Hayes into resigning from the White House?",
    "answers": [
      "He threatens to expose Bill Buchanan's earlier release of Fayed",
      "He reveals she helped Audrey escape China",
      "He accuses her of stealing classified files",
      "He offers her a diplomatic appointment"
    ],
    "correctAnswer": "He threatens to expose Bill Buchanan's earlier release of Fayed",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 06",
      "Day 6 clock hour 11:00",
      "Characters: Tom Lennox;Karen Hayes;Bill Buchanan",
      "Storyline: Political blackmail",
      "Question focus: How does Tom Lennox pressure Karen Hayes into resigning from the White House?",
      "Answer focus: He threatens to expose Bill Buchanan's earlier release of Fayed",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35233",
    "category": "Television",
    "question": "In 24 (Season 6), what happens to Walid after he secretly gathers information among the detainees?",
    "answers": [
      "He is promoted to FBI liaison",
      "Other inmates beat him for spying",
      "He escapes with Sandra",
      "He is sent to the Russian consulate"
    ],
    "correctAnswer": "Other inmates beat him for spying",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 06",
      "Day 6 clock hour 11:00",
      "Characters: Walid Al-Rezani;Sandra Palmer",
      "Storyline: Detention-centre infiltration",
      "Question focus: What happens to Walid after he secretly gathers information among the detainees?",
      "Answer focus: Other inmates beat him for spying",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35234",
    "category": "Television",
    "question": "In 24 (Season 6), what interrogation method does CTU use on Graem Bauer?",
    "answers": [
      "Sleep deprivation in an isolation cell",
      "A polygraph test broadcast to the press",
      "Injection of a painful truth serum",
      "Threatening him with extradition"
    ],
    "correctAnswer": "Injection of a painful truth serum",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 07",
      "Day 6 clock hour 12:00",
      "Characters: Graem Bauer;Jack Bauer",
      "Storyline: Graem's interrogation",
      "Question focus: What interrogation method does CTU use on Graem Bauer?",
      "Answer focus: Injection of a painful truth serum",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35235",
    "category": "Television",
    "question": "In 24 (Season 6), what is Graem Bauer forced to admit about the previous day's conspiracy?",
    "answers": [
      "He secretly adopted Josh",
      "He had helped rescue Jack from China",
      "He had worked as a CTU analyst",
      "He was involved in the events that led to David Palmer's assassination"
    ],
    "correctAnswer": "He was involved in the events that led to David Palmer's assassination",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 07",
      "Day 6 clock hour 12:00",
      "Characters: Graem Bauer;Jack Bauer;David Palmer",
      "Storyline: Graem's Season 5 involvement",
      "Question focus: What is Graem Bauer forced to admit about the previous day's conspiracy?",
      "Answer focus: He was involved in the events that led to David Palmer's assassination",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35236",
    "category": "Television",
    "question": "In 24 (Season 6), why does Phillip Bauer arrange his son's death after the interrogation?",
    "answers": [
      "He fears Graem will expose Phillip's own involvement",
      "He wants Josh to inherit the family company immediately",
      "He believes Graem has joined CTU",
      "Graem threatens to abandon the United States"
    ],
    "correctAnswer": "He fears Graem will expose Phillip's own involvement",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 07",
      "Day 6 clock hour 12:00",
      "Characters: Phillip Bauer;Graem Bauer",
      "Storyline: Phillip covers his tracks",
      "Question focus: Why does Phillip Bauer arrange his son's death after the interrogation?",
      "Answer focus: He fears Graem will expose Phillip's own involvement",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35237",
    "category": "Television",
    "question": "In 24 (Season 6), what deceptive message lures Morris O'Brian away from CTU before he is kidnapped?",
    "answers": [
      "A request for help from Audrey Raines",
      "News that his brother is in hospital",
      "A job offer from the FBI",
      "A message that Chloe has resigned"
    ],
    "correctAnswer": "News that his brother is in hospital",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 08",
      "Day 6 clock hour 13:00",
      "Characters: Morris O'Brian;Darren McCarthy",
      "Storyline: Morris lured away",
      "Question focus: What deceptive message lures Morris O'Brian away from CTU before he is kidnapped?",
      "Answer focus: News that his brother is in hospital",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35238",
    "category": "Television",
    "question": "In 24 (Season 6), what happens to Darren McCarthy during the handover of Morris to Fayed?",
    "answers": [
      "CTU arrests him at the airport",
      "Jack shoots him while he flees",
      "McCarthy's partner Rita kills him",
      "Fayed appoints him commander of the operation"
    ],
    "correctAnswer": "McCarthy's partner Rita kills him",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 08",
      "Day 6 clock hour 13:00",
      "Characters: Darren McCarthy;Rita Brady;Morris O'Brian",
      "Storyline: Engineer's kidnappers",
      "Question focus: What happens to Darren McCarthy during the handover of Morris to Fayed?",
      "Answer focus: McCarthy's partner Rita kills him",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35239",
    "category": "Television",
    "question": "In 24 (Season 6), what does Jack manage to do with a bomb left behind after rescuing Morris?",
    "answers": [
      "Transport it to the White House",
      "Conceal it beneath a bridge",
      "Deliver it to Gredenko",
      "Defuse it before it detonates"
    ],
    "correctAnswer": "Defuse it before it detonates",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 08",
      "Day 6 clock hour 13:00",
      "Characters: Jack Bauer;Morris O'Brian",
      "Storyline: Bomb made operational",
      "Question focus: What does Jack manage to do with a bomb left behind after rescuing Morris?",
      "Answer focus: Defuse it before it detonates",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35240",
    "category": "Television",
    "question": "In 24 (Season 6), why does Marilyn give Jack a false address while he is searching for Gredenko?",
    "answers": [
      "Phillip has kidnapped Josh and is threatening him",
      "She wants to protect Graem from prison",
      "CTU has ordered her to test Jack",
      "She secretly works for Fayed"
    ],
    "correctAnswer": "Phillip has kidnapped Josh and is threatening him",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 09",
      "Day 6 clock hour 14:00",
      "Characters: Marilyn Bauer;Phillip Bauer;Josh Bauer;Jack Bauer",
      "Storyline: Marilyn coerced",
      "Question focus: Why does Marilyn give Jack a false address while he is searching for Gredenko?",
      "Answer focus: Phillip has kidnapped Josh and is threatening him",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35241",
    "category": "Television",
    "question": "In 24 (Season 6), what happens when Jack enters the address Marilyn gives him?",
    "answers": [
      "He arrests Gredenko without resistance",
      "He discovers a bomb and escapes its explosion",
      "He finds Audrey waiting inside",
      "He receives a telephone call from China"
    ],
    "correctAnswer": "He discovers a bomb and escapes its explosion",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 09",
      "Day 6 clock hour 14:00",
      "Characters: Jack Bauer;Marilyn Bauer",
      "Storyline: Booby-trapped address",
      "Question focus: What happens when Jack enters the address Marilyn gives him?",
      "Answer focus: He discovers a bomb and escapes its explosion",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35242",
    "category": "Television",
    "question": "In 24 (Season 6), who is attacked alongside Marilyn while fleeing Phillip Bauer's operatives?",
    "answers": [
      "Nadia Yassir",
      "Morris O'Brian",
      "Milo Pressman",
      "Karen Hayes"
    ],
    "correctAnswer": "Milo Pressman",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 09",
      "Day 6 clock hour 14:00",
      "Characters: Marilyn Bauer;Milo Pressman;Phillip Bauer",
      "Storyline: Marilyn's escape",
      "Question focus: Who is attacked alongside Marilyn while fleeing Phillip Bauer's operatives?",
      "Answer focus: Milo Pressman",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35243",
    "category": "Television",
    "question": "In 24 (Season 6), how does Jack persuade Phillip to disclose where Josh is being held?",
    "answers": [
      "He promises to leave the Bauer family company",
      "He offers to hand over Nadia Yassir",
      "He sends the Secret Service to Phillip's office",
      "He stages a call claiming Marilyn has been captured"
    ],
    "correctAnswer": "He stages a call claiming Marilyn has been captured",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 10",
      "Day 6 clock hour 15:00",
      "Characters: Jack Bauer;Phillip Bauer;Marilyn Bauer;Josh Bauer",
      "Storyline: Rescue bluff",
      "Question focus: How does Jack persuade Phillip to disclose where Josh is being held?",
      "Answer focus: He stages a call claiming Marilyn has been captured",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35244",
    "category": "Television",
    "question": "In 24 (Season 6), what does Phillip give Jack after releasing him that leads to an unexpected ally?",
    "answers": [
      "A telephone number connecting him to Charles Logan",
      "A stolen CTU badge",
      "The keys to a military aircraft",
      "A copy of the nuclear activation codes"
    ],
    "correctAnswer": "A telephone number connecting him to Charles Logan",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 10",
      "Day 6 clock hour 15:00",
      "Characters: Phillip Bauer;Jack Bauer;Charles Logan",
      "Storyline: Logan revealed as contact",
      "Question focus: What does Phillip give Jack after releasing him that leads to an unexpected ally?",
      "Answer focus: A telephone number connecting him to Charles Logan",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35245",
    "category": "Television",
    "question": "In 24 (Season 6), why does Tom Lennox turn against Reed Pollock's plan?",
    "answers": [
      "He discovers the nuclear bombs are fake",
      "He refuses to support the assassination of President Palmer",
      "He decides to flee with Morris",
      "He is offered leadership of CTU"
    ],
    "correctAnswer": "He refuses to support the assassination of President Palmer",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 10",
      "Day 6 clock hour 15:00",
      "Characters: Tom Lennox;Reed Pollock;Wayne Palmer",
      "Storyline: Lennox refuses conspiracy",
      "Question focus: Why does Tom Lennox turn against Reed Pollock's plan?",
      "Answer focus: He refuses to support the assassination of President Palmer",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35246",
    "category": "Television",
    "question": "In 24 (Season 6), why is former president Charles Logan living under restrictions when Jack seeks his help?",
    "answers": [
      "He has been kidnapped by Fayed",
      "He is a witness being protected by CTU",
      "He avoided a public trial by accepting house arrest",
      "He has returned to office temporarily"
    ],
    "correctAnswer": "He avoided a public trial by accepting house arrest",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 11",
      "Day 6 clock hour 16:00",
      "Characters: Charles Logan;Jack Bauer",
      "Storyline: Logan under house arrest",
      "Question focus: Why is former president Charles Logan living under restrictions when Jack seeks his help?",
      "Answer focus: He avoided a public trial by accepting house arrest",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35247",
    "category": "Television",
    "question": "In 24 (Season 6), what does Hamri Al-Assad discover moments before the White House explosion?",
    "answers": [
      "Fayed hidden among the reporters",
      "A Russian fighter plane overhead",
      "The President's order to release him",
      "A bomb planted near the planned speech"
    ],
    "correctAnswer": "A bomb planted near the planned speech",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 11",
      "Day 6 clock hour 16:00",
      "Characters: Hamri Al-Assad;Wayne Palmer",
      "Storyline: Bomb before peace address",
      "Question focus: What does Hamri Al-Assad discover moments before the White House explosion?",
      "Answer focus: A bomb planted near the planned speech",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35248",
    "category": "Television",
    "question": "In 24 (Season 6), how does Jack try to get Gredenko's location after Logan fails to persuade the Russian consul?",
    "answers": [
      "He infiltrates the consulate and interrogates Anatoly Markov",
      "He hacks the Russian president's telephone",
      "He stages a bombing at the embassy",
      "He arrests Martha Logan"
    ],
    "correctAnswer": "He infiltrates the consulate and interrogates Anatoly Markov",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 12",
      "Day 6 clock hour 17:00",
      "Characters: Jack Bauer;Anatoly Markov;Charles Logan",
      "Storyline: Russian consulate interrogation",
      "Question focus: How does Jack try to get Gredenko's location after Logan fails to persuade the Russian consul?",
      "Answer focus: He infiltrates the consulate and interrogates Anatoly Markov",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35249",
    "category": "Television",
    "question": "In 24 (Season 6), what does Tom Lennox do after Reed Pollock lets him go following the bombing?",
    "answers": [
      "He joins the vice president's inner circle",
      "He reports the conspirators to the Secret Service",
      "He flees abroad with a false passport",
      "He orders the arrest of Karen Hayes"
    ],
    "correctAnswer": "He reports the conspirators to the Secret Service",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 12",
      "Day 6 clock hour 17:00",
      "Characters: Tom Lennox;Reed Pollock",
      "Storyline: Lennox reports assassination plot",
      "Question focus: What does Tom Lennox do after Reed Pollock lets him go following the bombing?",
      "Answer focus: He reports the conspirators to the Secret Service",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35250",
    "category": "Television",
    "question": "In 24 (Season 6), how does the Russian government finally respond when Consul Markov refuses to release Jack?",
    "answers": [
      "It orders Jack extradited to China",
      "It cancels diplomatic relations permanently",
      "It permits CTU to storm the consulate",
      "It pays a ransom for the captive agents"
    ],
    "correctAnswer": "It permits CTU to storm the consulate",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 13",
      "Day 6 clock hour 18:00",
      "Characters: Anatoly Markov;Yuri Suvarov;Jack Bauer",
      "Storyline: Russian-authorised CTU raid",
      "Question focus: How does the Russian government finally respond when Consul Markov refuses to release Jack?",
      "Answer focus: It permits CTU to storm the consulate",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35251",
    "category": "Television",
    "question": "In 24 (Season 6), what evidence falsely implicates Nadia Yassir in Gredenko's attempt to launch a nuclear drone?",
    "answers": [
      "A passport found in the drone",
      "A confession made by her brother",
      "A voice recording made at the White House",
      "Messages apparently sent from her compromised computer"
    ],
    "correctAnswer": "Messages apparently sent from her compromised computer",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 14",
      "Day 6 clock hour 19:00",
      "Characters: Nadia Yassir;Mike Doyle;Dmitri Gredenko",
      "Storyline: Nadia framed",
      "Question focus: What evidence falsely implicates Nadia Yassir in Gredenko's attempt to launch a nuclear drone?",
      "Answer focus: Messages apparently sent from her compromised computer",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35252",
    "category": "Television",
    "question": "In 24 (Season 6), what happens when Jack stops the nuclear-armed drone from reaching its intended target?",
    "answers": [
      "The device is damaged and radioactive material leaks",
      "The weapon explodes over the White House",
      "The drone escapes into Mexican airspace",
      "The aircraft lands safely without damage"
    ],
    "correctAnswer": "The device is damaged and radioactive material leaks",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 14",
      "Day 6 clock hour 19:00",
      "Characters: Jack Bauer;Dmitri Gredenko",
      "Storyline: Drone intercepted",
      "Question focus: What happens when Jack stops the nuclear-armed drone from reaching its intended target?",
      "Answer focus: The device is damaged and radioactive material leaks",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35253",
    "category": "Television",
    "question": "In 24 (Season 6), what evidence clears Nadia Yassir of suspicion as a CTU mole?",
    "answers": [
      "A confession from President Palmer",
      "Proof that her computer was hacked",
      "A note left by Graem Bauer",
      "A photograph taken at the consulate"
    ],
    "correctAnswer": "Proof that her computer was hacked",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 15",
      "Day 6 clock hour 20:00",
      "Characters: Nadia Yassir;Mike Doyle",
      "Storyline: Nadia's exoneration",
      "Question focus: What evidence clears Nadia Yassir of suspicion as a CTU mole?",
      "Answer focus: Proof that her computer was hacked",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35254",
    "category": "Television",
    "question": "In 24 (Season 6), how does CTU lure Dmitri Gredenko into custody through an associate?",
    "answers": [
      "Nadia secretly poses as Gredenko's sister",
      "The Russian president calls him directly",
      "An associate's brother helps with a staged meeting",
      "Morris sells him counterfeit explosives"
    ],
    "correctAnswer": "An associate's brother helps with a staged meeting",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 15",
      "Day 6 clock hour 20:00",
      "Characters: Dmitri Gredenko;Mark Hauser;Brady Hauser",
      "Storyline: Gredenko arrested",
      "Question focus: How does CTU lure Dmitri Gredenko into custody through an associate?",
      "Answer focus: An associate's brother helps with a staged meeting",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35255",
    "category": "Television",
    "question": "In 24 (Season 6), what does Gredenko do after CTU implants a tracker in his arm?",
    "answers": [
      "He hides the tracker inside a suitcase",
      "He gives CTU the codes to disarm every bomb",
      "He escapes on a military submarine",
      "He cuts off the tracked arm to evade capture"
    ],
    "correctAnswer": "He cuts off the tracked arm to evade capture",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 16",
      "Day 6 clock hour 21:00",
      "Characters: Dmitri Gredenko;Jack Bauer;Mike Doyle",
      "Storyline: Gredenko removes tracker",
      "Question focus: What does Gredenko do after CTU implants a tracker in his arm?",
      "Answer focus: He cuts off the tracked arm to evade capture",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35256",
    "category": "Television",
    "question": "In 24 (Season 6), how does Gredenko betray Abu Fayed while the two are hiding in a bar?",
    "answers": [
      "He tells the patrons that Fayed is a terrorist",
      "He secretly exchanges him for his own release",
      "He shoots Fayed with a concealed pistol",
      "He plants a false confession on his coat"
    ],
    "correctAnswer": "He tells the patrons that Fayed is a terrorist",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 16",
      "Day 6 clock hour 21:00",
      "Characters: Dmitri Gredenko;Abu Fayed",
      "Storyline: Betrayal in the bar",
      "Question focus: How does Gredenko betray Abu Fayed while the two are hiding in a bar?",
      "Answer focus: He tells the patrons that Fayed is a terrorist",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35257",
    "category": "Television",
    "question": "In 24 (Season 6), what causes the dispute over Wayne Palmer's right to resume office?",
    "answers": [
      "The president fails a military examination",
      "Daniels challenges the validity of Karen Hayes's cabinet vote",
      "The vice president is arrested for treason",
      "Congress refuses to recognise the previous election"
    ],
    "correctAnswer": "Daniels challenges the validity of Karen Hayes's cabinet vote",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 16",
      "Day 6 clock hour 21:00",
      "Characters: Wayne Palmer;Noah Daniels;Karen Hayes",
      "Storyline: Twenty-fifth Amendment dispute",
      "Question focus: What causes the dispute over Wayne Palmer's right to resume office?",
      "Answer focus: Daniels challenges the validity of Karen Hayes's cabinet vote",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35258",
    "category": "Television",
    "question": "In 24 (Season 6), how do Jack and Doyle attempt to make Fayed lead them to the remaining bombs?",
    "answers": [
      "They promise to release Gredenko from prison",
      "They stage a press conference with Assad",
      "CTU agents pose as allies sent to rescue him",
      "They let a drone follow him through the city"
    ],
    "correctAnswer": "CTU agents pose as allies sent to rescue him",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 17",
      "Day 6 clock hour 22:00",
      "Characters: Jack Bauer;Mike Doyle;Abu Fayed",
      "Storyline: Fake rescue sting",
      "Question focus: How do Jack and Doyle attempt to make Fayed lead them to the remaining bombs?",
      "Answer focus: CTU agents pose as allies sent to rescue him",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35259",
    "category": "Television",
    "question": "In 24 (Season 6), why does the staged rescue of Fayed ultimately unravel?",
    "answers": [
      "A CTU agent reveals his badge",
      "The remaining bombs explode at once",
      "Fayed recognises the rescuers as local police",
      "A captured general gives a hidden warning during a verification call"
    ],
    "correctAnswer": "A captured general gives a hidden warning during a verification call",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 17",
      "Day 6 clock hour 22:00",
      "Characters: Abu Fayed;Wayne Palmer",
      "Storyline: Sting compromised",
      "Question focus: Why does the staged rescue of Fayed ultimately unravel?",
      "Answer focus: A captured general gives a hidden warning during a verification call",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35260",
    "category": "Television",
    "question": "In 24 (Season 6), what plan does Jack propose to prevent Cheng from using the Russian circuit board after Audrey is released?",
    "answers": [
      "Hide explosives in it and destroy it",
      "Trade a non-functional mobile phone instead",
      "Transfer the board to the Russian president",
      "Remove the battery and return to CTU"
    ],
    "correctAnswer": "Hide explosives in it and destroy it",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 18",
      "Day 6 clock hour 23:00",
      "Characters: Jack Bauer;Cheng Zhi;Audrey Raines",
      "Storyline: Booby-trapped Russian board",
      "Question focus: What plan does Jack propose to prevent Cheng from using the Russian circuit board after Audrey is released?",
      "Answer focus: Hide explosives in it and destroy it",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35261",
    "category": "Television",
    "question": "In 24 (Season 6), what suddenly forces Wayne Palmer to surrender the presidency again?",
    "answers": [
      "He is arrested for the bombing",
      "He collapses during a public announcement",
      "He is kidnapped by the Chinese",
      "He resigns to become ambassador"
    ],
    "correctAnswer": "He collapses during a public announcement",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 18",
      "Day 6 clock hour 23:00",
      "Characters: Wayne Palmer;Noah Daniels",
      "Storyline: Palmer's health collapses",
      "Question focus: What suddenly forces Wayne Palmer to surrender the presidency again?",
      "Answer focus: He collapses during a public announcement",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35262",
    "category": "Television",
    "question": "In 24 (Season 6), what disturbing condition does Jack discover Audrey is suffering from after her release?",
    "answers": [
      "Radiation poisoning",
      "A gunshot wound to the leg",
      "Severe psychological trauma",
      "Drug-induced amnesia"
    ],
    "correctAnswer": "Severe psychological trauma",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 19",
      "Day 6 clock hour 00:00",
      "Characters: Jack Bauer;Audrey Raines",
      "Storyline: Audrey's condition",
      "Question focus: What disturbing condition does Jack discover Audrey is suffering from after her release?",
      "Answer focus: Severe psychological trauma",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35263",
    "category": "Television",
    "question": "In 24 (Season 6), why does Bill Buchanan lose his post as CTU director?",
    "answers": [
      "He is convicted of stealing funds",
      "He refuses to help recover Josh",
      "He joins the Russian intelligence service",
      "Karen Hayes is pressured to dismiss him over his earlier release of Fayed"
    ],
    "correctAnswer": "Karen Hayes is pressured to dismiss him over his earlier release of Fayed",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 19",
      "Day 6 clock hour 00:00",
      "Characters: Bill Buchanan;Karen Hayes;Abu Fayed",
      "Storyline: Buchanan forced out",
      "Question focus: Why does Bill Buchanan lose his post as CTU director?",
      "Answer focus: Karen Hayes is pressured to dismiss him over his earlier release of Fayed",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35264",
    "category": "Television",
    "question": "In 24 (Season 6), who secretly helps Jack reach Audrey when CTU plans a harsh interrogation?",
    "answers": [
      "Mike Doyle",
      "Charles Logan",
      "Milo Pressman",
      "Tom Lennox"
    ],
    "correctAnswer": "Mike Doyle",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 20",
      "Day 6 clock hour 01:00",
      "Characters: Jack Bauer;Mike Doyle;Audrey Raines",
      "Storyline: Doyle protects Audrey",
      "Question focus: Who secretly helps Jack reach Audrey when CTU plans a harsh interrogation?",
      "Answer focus: Mike Doyle",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35265",
    "category": "Television",
    "question": "In 24 (Season 6), what new threat does Russia make after learning that the Chinese have its circuit board?",
    "answers": [
      "It demands Jack's immediate extradition",
      "It threatens a strike against a US military base",
      "It orders an attack on Los Angeles",
      "It plans to invade the Chinese consulate"
    ],
    "correctAnswer": "It threatens a strike against a US military base",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 20",
      "Day 6 clock hour 01:00",
      "Characters: Yuri Suvarov;Cheng Zhi;Noah Daniels",
      "Storyline: Russian ultimatum",
      "Question focus: What new threat does Russia make after learning that the Chinese have its circuit board?",
      "Answer focus: It threatens a strike against a US military base",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35266",
    "category": "Television",
    "question": "In 24 (Season 6), why does Milo Pressman tell the Chinese raiders that he is in charge of CTU?",
    "answers": [
      "To negotiate his own release",
      "To lead the raiders to the nuclear device",
      "To protect Nadia Yassir from being killed",
      "To conceal Morris O'Brian's identity"
    ],
    "correctAnswer": "To protect Nadia Yassir from being killed",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 21",
      "Day 6 clock hour 02:00",
      "Characters: Milo Pressman;Nadia Yassir;Zhou Yong",
      "Storyline: Milo's sacrifice",
      "Question focus: Why does Milo Pressman tell the Chinese raiders that he is in charge of CTU?",
      "Answer focus: To protect Nadia Yassir from being killed",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35267",
    "category": "Television",
    "question": "In 24 (Season 6), how does Jack try to help Josh evade the attackers searching CTU?",
    "answers": [
      "He hides him beneath a helicopter",
      "He sends him away in a police van",
      "He disguises him as a Russian diplomat",
      "He directs him into the building's ventilation system"
    ],
    "correctAnswer": "He directs him into the building's ventilation system",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 21",
      "Day 6 clock hour 02:00",
      "Characters: Jack Bauer;Josh Bauer;Zhou Yong",
      "Storyline: Josh hides in CTU",
      "Question focus: How does Jack try to help Josh evade the attackers searching CTU?",
      "Answer focus: He directs him into the building's ventilation system",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35268",
    "category": "Television",
    "question": "In 24 (Season 6), what is Lisa Miller's assignment when she meets Russian spy Mark Bishop?",
    "answers": [
      "Plant misleading intelligence for him to copy",
      "Kill Bishop before he can speak",
      "Persuade him to arrest Daniels",
      "Steal the consulate's surveillance footage"
    ],
    "correctAnswer": "Plant misleading intelligence for him to copy",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 22",
      "Day 6 clock hour 03:00",
      "Characters: Lisa Miller;Mark Bishop;Tom Lennox",
      "Storyline: Russian disinformation",
      "Question focus: What is Lisa Miller's assignment when she meets Russian spy Mark Bishop?",
      "Answer focus: Plant misleading intelligence for him to copy",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35269",
    "category": "Television",
    "question": "In 24 (Season 6), what does Phillip Bauer offer the White House in exchange for custody of Josh?",
    "answers": [
      "The locations of new nuclear reactors",
      "The stolen Russian circuit board and safe passage",
      "His company shares and bank accounts",
      "A presidential resignation letter"
    ],
    "correctAnswer": "The stolen Russian circuit board and safe passage",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 22",
      "Day 6 clock hour 03:00",
      "Characters: Phillip Bauer;Josh Bauer;Noah Daniels",
      "Storyline: Josh exchanged for board",
      "Question focus: What does Phillip Bauer offer the White House in exchange for custody of Josh?",
      "Answer focus: The stolen Russian circuit board and safe passage",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35270",
    "category": "Television",
    "question": "In 24 (Season 6), how does Bill Buchanan help Jack escape custody against government orders?",
    "answers": [
      "He gives Jack a Russian diplomatic passport",
      "He distracts the guards by triggering a fire alarm",
      "He engineers a crash of Jack's CTU transport vehicle",
      "He intercepts Jack's transfer flight"
    ],
    "correctAnswer": "He engineers a crash of Jack's CTU transport vehicle",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 23",
      "Day 6 clock hour 04:00",
      "Characters: Bill Buchanan;Jack Bauer;Karen Hayes",
      "Storyline: Jack freed from transport",
      "Question focus: How does Bill Buchanan help Jack escape custody against government orders?",
      "Answer focus: He engineers a crash of Jack's CTU transport vehicle",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35271",
    "category": "Television",
    "question": "In 24 (Season 6), what happens to Mike Doyle when Phillip's men hand over a supposed circuit board?",
    "answers": [
      "He is arrested by Russian soldiers",
      "He is taken prisoner aboard a submarine",
      "He escapes with the real board",
      "The booby-trapped object explodes and blinds him"
    ],
    "correctAnswer": "The booby-trapped object explodes and blinds him",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 23",
      "Day 6 clock hour 04:00",
      "Characters: Mike Doyle;Phillip Bauer",
      "Storyline: Booby-trapped exchange",
      "Question focus: What happens to Mike Doyle when Phillip's men hand over a supposed circuit board?",
      "Answer focus: The booby-trapped object explodes and blinds him",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35272",
    "category": "Television",
    "question": "In 24 (Season 6), how does Josh Bauer resist being taken away by his grandfather on the oil rig?",
    "answers": [
      "He shoots Phillip in the chest",
      "He escapes through an underwater hatch",
      "He pushes Phillip into the sea",
      "He locks Phillip in a control room"
    ],
    "correctAnswer": "He shoots Phillip in the chest",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 24",
      "Day 6 clock hour 05:00",
      "Characters: Josh Bauer;Phillip Bauer",
      "Storyline: Josh defies grandfather",
      "Question focus: How does Josh Bauer resist being taken away by his grandfather on the oil rig?",
      "Answer focus: He shoots Phillip in the chest",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35273",
    "category": "Television",
    "question": "In 24 (Season 6), what unexpected personal news does Chloe receive after collapsing at CTU?",
    "answers": [
      "She has inherited her father's business",
      "She is pregnant",
      "She has been recruited by the FBI",
      "She is being transferred overseas"
    ],
    "correctAnswer": "She is pregnant",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 24",
      "Day 6 clock hour 05:00",
      "Characters: Chloe O'Brian;Morris O'Brian",
      "Storyline: Chloe's pregnancy",
      "Question focus: What unexpected personal news does Chloe receive after collapsing at CTU?",
      "Answer focus: She is pregnant",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35274",
    "category": "Television",
    "question": "In 24 (Season 6), why does Jack ultimately decide not to resume his relationship with Audrey?",
    "answers": [
      "Audrey has married Cheng",
      "The government requires him to move to Russia",
      "He believes she will be safer without him",
      "She has been appointed to lead CTU"
    ],
    "correctAnswer": "He believes she will be safer without him",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 6",
      "24 Day 6",
      "2007",
      "Episode 24",
      "Day 6 clock hour 05:00",
      "Characters: Jack Bauer;Audrey Raines;James Heller",
      "Storyline: Jack's farewell to Audrey",
      "Question focus: Why does Jack ultimately decide not to resume his relationship with Audrey?",
      "Answer focus: He believes she will be safer without him",
      "Viewer storyline"
    ]
  }
];
questions.push(...auditAdditions);
const EXPECTED_COUNT = 139;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_11500' || questions[83].id !== 'tv_11583' || questions[questions.length - 1].id !== 'tv_35274') {
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
