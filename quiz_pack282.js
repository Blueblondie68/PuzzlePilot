
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
       question,
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

 const EXPECTED_COUNT = 84;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_11500' || questions[questions.length - 1].id !== 'tv_11583') {
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
