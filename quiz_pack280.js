
 // quiz_pack280.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: 24 - Season 4 (Day 4, broadcast January-May 2005)
 // Heller kidnapping, Araz family, nuclear override, Marwan and the Day 4 finale.
 // No episode-title recall questions. Question-specific tags on exported objects.
 // Leave quiz_bank.js unchanged until the agreed end-of-session connection.
 // Row: question | correct answer | three wrong answers | difficulty | seven specific tags

 const groups = [
   {
     topic: 'New Roles, Relationships And Cast',
     facts: `How long after the events of Season 3 does 24 Season 4 take place?|About eighteen months|About three weeks|About five years|About ten years|Medium|Jack Bauer|Day Four Timeline|Season Three Aftermath|New CTU Staff|Story Chronology|2005 Season|Time Jump
 At what time does the fourth season's 24-hour storyline begin?|7 am|Midnight|1 pm|8 pm|Medium|Day Four Opening|Morning Start|Los Angeles|Real Time Story|Season Format|2005 Premiere|Clock Timeline
 For whom is Jack Bauer working when Season 4 begins?|Secretary of Defense James Heller|President David Palmer|FBI director Larry Moss|Senator John Keeler|Easy|Jack Bauer|James Heller|Secretary Of Defense|Government Adviser|Employment Change|CTU Dismissal|Defence Department
 Who played James Heller, the US Secretary of Defense?|William Devane|Dennis Haysbert|Gregory Itzin|Geoff Pierson|Medium|James Heller|William Devane|Actor Casting|Audrey Raines Father|Government Official|Secretary Of Defense|Heller Family
 Which actress played James Heller's daughter Audrey Raines?|Kim Raver|Reiko Aylesworth|Lana Parrilla|Shohreh Aghdashloo|Easy|Audrey Raines|Kim Raver|Actress Casting|Jack Bauer Girlfriend|Heller Family|Lead Character|Season Four Debut
 What was Audrey Raines' relationship with Jack Bauer at the beginning of Day 4?|She was his girlfriend|She was his sister|She was his CTU supervisor|She was his former wife|Easy|Audrey Raines|Jack Bauer|Romantic Couple|New Relationship|James Heller Daughter|Government Workplace|Day Four Opening
 Who was Audrey Raines' estranged husband in Season 4?|Paul Raines|Curtis Manning|Richard Heller|Bill Buchanan|Easy|Paul Raines|Audrey Raines|Estranged Marriage|Divorce Proceedings|Jack Bauer|Love Triangle|Relationship Conflict
 Which actor portrayed Audrey's estranged husband Paul Raines?|James Frain|James Morrison|Roger Cross|Paul Blackthorne|Medium|Paul Raines|James Frain|Actor Casting|Audrey Raines Husband|British Actor|Businessman|Marital Conflict
 Who was directing CTU Los Angeles when Day 4 began?|Erin Driscoll|Michelle Dessler|Chloe O'Brian|Sarah Gavin|Easy|Erin Driscoll|CTU Director|Jack Bauer Firing|Los Angeles Office|Command Authority|Agency Reshuffle|2005 New Character
 Which actress played CTU director Erin Driscoll?|Alberta Watson|Penny Johnson Jerald|Michelle Forbes|Wendy Crewson|Medium|Erin Driscoll|Alberta Watson|Actress Casting|CTU Management|Season Four Main Cast|Jack Bauer Former Boss|Canadian Actress
 Which actor played CTU field agent Curtis Manning?|Roger Cross|Carlos Bernard|Jesse Borrego|James Badge Dale|Medium|Curtis Manning|Roger Cross|Actor Casting|CTU Field Operations|Counterterrorism Team|Operational Command|Day Four Cast
 Which actor played CTU systems specialist Edgar Stiles?|Louis Lombardi|Zachary Quinto|Eric Balfour|Lukas Haas|Medium|Edgar Stiles|Louis Lombardi|Actor Casting|CTU Computer Analyst|Nuclear Reactors|Technical Operations|Day Four Cast
 Which actress portrayed CTU analyst Sarah Gavin?|Lana Parrilla|Aisha Tyler|Kim Raver|Reiko Aylesworth|Medium|Sarah Gavin|Lana Parrilla|Actress Casting|CTU Analyst|False Mole Accusation|Los Angeles Office|Season Four Cast`,
   },
   {
     topic: 'The Train Bombing And Heller Kidnapping',
     facts: `What type of public transport is bombed at the beginning of Season 4?|A commuter train|A passenger ferry|An underground tram|A school bus|Easy|Commuter Train|Los Angeles Rail|Opening Attack|Terrorist Diversion|Day Four Start|Explosion|Stolen Briefcase
 What important object is stolen from the wrecked train?|A case containing a nuclear override device|A briefcase of election ballots|A shipment of stolen jewellery|A prototype military drone|Medium|Train Bombing|Stolen Case|Nuclear Override|Power Station Sabotage|Habib Marwan Plan|Terrorist Operation|Hidden Technology
 Which two people are kidnapped early in Season 4?|James Heller and Audrey Raines|David Palmer and Sherry Palmer|Tony Almeida and Michelle Dessler|Charles Logan and Martha Logan|Easy|James Heller|Audrey Raines|Father Daughter Hostages|Kidnapping Plot|Defence Secretary|Marwan Cell|Day Four Crisis
 What public spectacle do the kidnappers plan for Secretary Heller?|A televised execution|A presidential debate|A staged military parade|A live resignation ceremony|Medium|James Heller|Hostage Video|Televised Execution|Terrorist Propaganda|Audrey Raines|Online Broadcast|Government Threat
 Which hacker alerts Chloe O'Brian to suspicious material circulating on the internet?|Andrew Paige|Edgar Stiles|Adam Kaufman|Alex Hewitt|Medium|Andrew Paige|Lukas Haas|Chloe O Brian Friend|Internet Discovery|Hidden Code|Civilian Programmer|Terrorist Investigation
 Which actor played computer programmer Andrew Paige?|Lukas Haas|Louis Lombardi|Shawn Doyle|Logan Marshall-Green|Hard|Andrew Paige|Lukas Haas|Actor Casting|Computer Programmer|Chloe O Brian Contact|Opening Episodes|Cyber Threat
 Which terrorist does Jack secretly follow to locate the people holding Heller and Audrey?|Kalil Hasan|Habib Marwan|Mitch Anderson|Navi Araz|Medium|Kalil Hasan|Terrorist Courier|Jack Bauer Surveillance|Hostage Search|Road Pursuit|Andrew Paige|Opening Hours
 What crime does Jack deliberately stage at a petrol station to keep Kalil Hasan in place?|An armed robbery|A car theft|A kidnapping|A counterfeit-money exchange|Medium|Jack Bauer|Kalil Hasan|Staged Robbery|Petrol Station|Satellite Tracking Delay|Hostage Rescue|Field Tactics
 Which member of the Heller family is interrogated by Curtis Manning about the kidnapping?|Richard Heller|Paul Raines|James Heller|Audrey Raines|Medium|Richard Heller|Curtis Manning|CTU Interrogation|James Heller Son|Withheld Information|Family Conflict|Kidnapping Investigation
 Who played James Heller's son Richard?|Logan Marshall-Green|James Frain|Lukas Haas|Cameron Bancroft|Hard|Richard Heller|Logan Marshall Green|Actor Casting|James Heller Son|Audrey Raines Brother|CTU Questioning|Heller Family
 Who rescues Secretary Heller and Audrey from their captors?|Jack Bauer|Tony Almeida|Curtis Manning|Aaron Pierce|Easy|Jack Bauer|James Heller|Audrey Raines|Hostage Rescue|Terrorist Compound|Firefight|Day Four Action
 What military action threatens to kill the hostages before Jack can save them?|An air strike on the compound|A naval blockade|A tank assault on CTU|A missile launch from Air Force One|Medium|James Heller|Audrey Raines|Planned Bombing|Terrorist Compound|President John Keeler|Jack Bauer|Rescue Deadline
 Which suspected accomplice does Audrey recognise after escaping her captors?|Henry Powell|Mitch Anderson|Walt Cummings|Navi Araz|Hard|Audrey Raines|Henry Powell|Kidnapper Recognition|McLennan Forster|Terrorist Connection|Surveillance Footage|CTU Investigation`,
   },
   {
     topic: 'The Araz Family And Their Betrayal',
     facts: `What is the surname of the family secretly assisting Marwan's terrorist operation?|Araz|Warner|Salazar|Heller|Easy|Araz Family|Terrorist Cell|Navi Araz|Dina Araz|Behrooz Araz|Family Deception|Season Four
 Who is the father of the Araz household?|Navi Araz|Behrooz Araz|Kalil Hasan|Omar|Easy|Navi Araz|Araz Family Patriarch|Dina Araz Husband|Behrooz Araz Father|Nestor Serrano|Terrorist Cell|Family Control
 Which actress played Dina Araz?|Shohreh Aghdashloo|Kim Raver|Lana Parrilla|Gina Torres|Medium|Dina Araz|Shohreh Aghdashloo|Actress Casting|Araz Family|Behrooz Araz Mother|Iranian American Actress|Terrorism Plot
 What is the first name of Navi and Dina Araz's teenage son?|Behrooz|Ramon|Kyle|Chase|Easy|Behrooz Araz|Navi Araz|Dina Araz|Teenage Son|Family Conflict|Terrorist Plot|Jonathan Ahdout
 Which actor played Behrooz Araz?|Jonathan Ahdout|Nestor Serrano|Anil Kumar|Rene Millan|Medium|Behrooz Araz|Jonathan Ahdout|Actor Casting|Dina Araz Son|Navi Araz Son|Young Character|Season Four Cast
 What is the name of Behrooz's girlfriend, whose suspicions put her in danger?|Debbie Pendleton|Jane Saunders|Claudia Hernandez|Kate Warner|Easy|Debbie Pendleton|Behrooz Araz|Teenage Romance|Araz Family Secrets|Civilian Victim|Leighton Meester|Terrorist Surveillance
 Which actress portrayed Behrooz's girlfriend Debbie Pendleton?|Leighton Meester|Elisha Cuthbert|Agnes Bruckner|Alexandra Lydon|Medium|Debbie Pendleton|Leighton Meester|Actress Casting|Behrooz Araz Girlfriend|Teenager|Guest Performer|Araz Storyline
 How does Debbie Pendleton die after visiting the Araz home?|Dina poisons her drink|Navi shoots her in the garden|Behrooz pushes her off a bridge|She is killed in the train explosion|Medium|Debbie Pendleton|Dina Araz|Poisoned Tea|Araz House|Behrooz Araz|Murder Cover Up|Family Betrayal
 Who orders an associate to kill Behrooz after Debbie's death?|Navi Araz|Dina Araz|Jack Bauer|Tony Almeida|Medium|Navi Araz|Behrooz Araz|Tariq|Death Order|Father Son Conflict|Terrorist Loyalty|Family Crisis
 Which terrorist accomplice does Behrooz kill with a shovel while burying Debbie's body?|Tariq|Kalil Hasan|Omar|Henry Powell|Hard|Behrooz Araz|Tariq|Shovel Attack|Debbie Pendleton Body|Self Defence|Navi Araz Orders|Burial Site
 Who shoots Dina Araz in the arm when she tries to escape with Behrooz?|Navi Araz|Habib Marwan|Jack Bauer|Kalil Hasan|Medium|Dina Araz|Navi Araz|Behrooz Araz|Arm Gunshot|Family Escape|Mother Son Protection|Violent Pursuit
 Which Araz family member kills Navi during the confrontation at a hospital?|Behrooz|Dina|Debbie|Karen|Medium|Behrooz Araz|Navi Araz Death|Hospital Standoff|Father Son Confrontation|Jack Bauer Intervention|Hostage Crisis|Family Tragedy
 What protection does Dina demand for Behrooz in exchange for helping CTU?|A presidential pardon|A new US passport|A place in CTU witness custody without immunity|Release of Navi from custody|Medium|Dina Araz|Behrooz Araz|Presidential Pardon|Jack Bauer Negotiation|Informant Deal|Son Protection|Counterterrorism Cooperation
 Who is revealed as the mastermind behind the Araz family's terrorist mission?|Habib Marwan|Navi Araz|Kalil Hasan|Henry Powell|Easy|Habib Marwan|Araz Family|Terrorist Mastermind|Nuclear Override|Multi Stage Attacks|Navi Araz Superior|Season Four Villain`,
   },
   {
     topic: 'The Nuclear Override And CTU Turmoil',
     facts: `What facilities does the stolen override device threaten to force into meltdown?|Nuclear power stations|Water treatment plants|Air traffic control towers|Oil refineries|Easy|Nuclear Reactors|Override Device|Forced Meltdowns|National Emergency|Power Station Control|Habib Marwan|Sabotage Plot
 Which company developed the override technology used in the nuclear threat?|McLennan-Forster|Omicron International|Davis Corporation|BXJ Technologies|Medium|McLennan Forster|Defence Contractor|Nuclear Override|Habib Marwan Employer|Computer Technology|Private Company|Corporate Cover Up
 What distraction allows terrorists to attack the digital safeguards protecting the nuclear reactors?|Online streaming of Heller's planned execution|A nationwide television quiz|A falsified weather warning|An emergency radio music broadcast|Hard|James Heller|Execution Video|Internet Traffic|Firewall Overload|Nuclear Override|Terrorist Diversion|Cyber Attack
 Which CTU computer specialist works to shut down most of the threatened nuclear reactors?|Edgar Stiles|Curtis Manning|Richard Heller|Paul Raines|Medium|Edgar Stiles|Nuclear Reactor Shutdown|Computer Analysis|Override Countermeasures|CTU Operations|Power Station Safety|Technical Emergency
 At which fictional nuclear power station does one reactor suffer a meltdown?|San Gabriel Island|Three Mile Island|Diablo Canyon|Indian Point|Hard|San Gabriel Island|Nuclear Meltdown|Habib Marwan|Edgar Stiles|Reactor Crisis|Radioactive Fallout|Season Four Disaster
 Which CTU employee worries about his mother being trapped in the nuclear fallout zone?|Edgar Stiles|Curtis Manning|Bill Buchanan|Ronnie Lobell|Medium|Edgar Stiles|Mother In Danger|San Gabriel Island|Evacuation Failure|Nuclear Fallout|Family Tragedy|CTU Duty
 Who is wrongly accused of being the mole within CTU during the reactor investigation?|Sarah Gavin|Marianne Taylor|Chloe O'Brian|Michelle Dessler|Medium|Sarah Gavin|False Accusation|CTU Mole Hunt|Erin Driscoll|Interrogation|Wrong Suspect|Intelligence Leak
 Which CTU employee is exposed as the real insider leaking intelligence to the terrorists?|Marianne Taylor|Sarah Gavin|Kim Bauer|Paula Schaeffer|Easy|Marianne Taylor|Actual CTU Mole|Terrorist Informant|Henry Powell|Intelligence Leak|Internal Security|Curtis Manning
 Which actress portrayed CTU mole Marianne Taylor?|Aisha Tyler|Lana Parrilla|Alberta Watson|Reiko Aylesworth|Medium|Marianne Taylor|Aisha Tyler|Actress Casting|CTU Mole|Curtis Manning|Terrorist Connections|Season Four Guest
 Who comes to Jack and Audrey's rescue after they are ambushed while pursuing a lead?|Tony Almeida|Ryan Chappelle|Mike Novick|Gael Ortega|Easy|Tony Almeida|Jack Bauer|Audrey Raines|Ambush Rescue|Former CTU Agent|Carlos Bernard|Return To Action
 Which former CTU agent is living apart from Michelle Dessler when Jack seeks his help?|Tony Almeida|Curtis Manning|Bill Buchanan|Ronnie Lobell|Easy|Tony Almeida|Michelle Dessler|Estranged Marriage|Career Collapse|Former CTU Career|Jack Bauer Friend|Personal Troubles
 What is the first name of Erin Driscoll's daughter, whose crisis contributes to her departure?|Maya|Jane|Debbie|Kim|Medium|Maya Driscoll|Erin Driscoll|Mother Daughter|Mental Health Emergency|CTU Workplace|Family Crisis|Angela Goethals
 What tragedy causes Erin Driscoll to leave her position at CTU?|Her daughter dies by suicide|She is arrested as a terrorist mole|Her husband is killed in a helicopter crash|She is elected to Congress|Medium|Erin Driscoll|Maya Driscoll Death|Family Bereavement|Director Resignation|CTU Leadership Change|Personal Tragedy|Day Four Crisis
 Who takes temporary charge of CTU immediately after Erin Driscoll steps down?|Tony Almeida|Michelle Dessler|Bill Buchanan|Curtis Manning|Medium|Tony Almeida|Erin Driscoll Resignation|Acting CTU Director|Leadership Transition|Carlos Bernard|Operations Continuity|Emergency Appointment
 Which former CTU colleague returns to replace Tony as the person in charge of the Los Angeles office?|Michelle Dessler|Nina Myers|Kim Bauer|Sarah Gavin|Medium|Michelle Dessler|Reiko Aylesworth|CTU Command|Tony Almeida|Estranged Spouses|Leadership Return|Office Reorganisation`,
   },
   {
     topic: 'Marwan, The EMP And Air Force One',
     facts: `Which actor played the terrorist leader Habib Marwan?|Arnold Vosloo|Nestor Serrano|William Devane|Paul Blackthorne|Medium|Habib Marwan|Arnold Vosloo|Actor Casting|Lead Antagonist|Terrorist Organisation|Nuclear Plot|South African Actor
 What kind of device does McLennan-Forster detonate to destroy records of its involvement?|An electromagnetic pulse device|A hydrogen bomb|A chemical smoke generator|A sonic weapon|Medium|McLennan Forster|EMP Device|Records Destruction|Company Cover Up|Los Angeles Blackout|Jack Bauer|Paul Raines
 What is the immediate consequence of the EMP explosion in downtown Los Angeles?|A widespread electrical blackout|A nuclear chain reaction|A major tidal wave|An airport runway collapse|Easy|EMP Explosion|Electrical Blackout|Downtown Los Angeles|Disabled Electronics|Corporate Cover Up|Defence Contractor|Security Systems
 Who accompanies Jack to the McLennan-Forster offices and is later seriously injured?|Paul Raines|Richard Heller|Mike Novick|Behrooz Araz|Medium|Paul Raines|Jack Bauer|McLennan Forster|Mercenary Attack|Gunshot Injury|Audrey Raines|Company Investigation
 Which CTU director arrives after Michelle Dessler to oversee operations later in Day 4?|Bill Buchanan|George Mason|Ryan Chappelle|Erin Driscoll|Medium|Bill Buchanan|James Morrison|CTU Leadership|Regional Oversight|Michelle Dessler|Terrorist Crisis|Day Four Return
 Who infiltrates an Air Force base to seize a stealth fighter for Marwan's next attack?|Mitch Anderson|Henry Powell|Kalil Hasan|Richard Heller|Medium|Mitch Anderson|Stealth Fighter|Air Force Infiltration|Pilot Impersonation|Habib Marwan|Aviation Attack|Terrorist Operative
 Which aircraft is shot down by a stolen military jet in Season 4?|Air Force One|A Boeing 747 cargo plane|A CTU surveillance helicopter|A civilian weather plane|Easy|Air Force One|Stealth Fighter|Mitch Anderson|Presidential Aircraft|Habib Marwan|Aircraft Attack|National Security
 Who is the sitting US president aboard Air Force One when it is attacked?|John Keeler|David Palmer|Charles Logan|James Prescott|Easy|John Keeler|Air Force One|Presidential Aircraft|Geoff Pierson|White House|Assassination Plot|Season Four Presidency
 Which actor played President John Keeler?|Geoff Pierson|Dennis Haysbert|Gregory Itzin|Alan Dale|Medium|John Keeler|Geoff Pierson|Actor Casting|President Of United States|Air Force One Attack|Political Leadership|Season Four
 Who assumes presidential powers following the attack on John Keeler's aircraft?|Charles Logan|David Palmer|James Heller|Mike Novick|Easy|Charles Logan|Vice President|John Keeler Incapacitation|Presidential Succession|Gregory Itzin|Air Force One|Transfer Of Power
 Which actor portrayed Vice President Charles Logan?|Gregory Itzin|Geoff Pierson|William Devane|Dennis Haysbert|Medium|Charles Logan|Gregory Itzin|Actor Casting|Vice President|Presidential Succession|Season Four Cast|White House
 Which former president is invited back to help the overwhelmed Charles Logan manage the crisis?|David Palmer|John Keeler|James Prescott|Wayne Palmer|Easy|David Palmer|Dennis Haysbert|Former President|Charles Logan|Mike Novick|Political Adviser|Crisis Leadership`,
   },
   {
     topic: 'The Missile, Chinese Consulate And Final Escape',
     facts: `What sensitive presidential item do Marwan's operatives steal after the Air Force One crash?|The nuclear football|The presidential seal|The State of the Union speech|The White House visitor register|Easy|Nuclear Football|Air Force One Crash|Habib Marwan|Presidential Codes|Mojave Desert|Stolen Documents|Missile Plot
 In which desert does Air Force One crash after the fighter attack?|Mojave Desert|Sahara Desert|Sonoran Desert|Atacama Desert|Medium|Mojave Desert|Air Force One|Aircraft Wreckage|California|Presidential Crash|Nuclear Football|Day Four
 What type of weapon does Marwan eventually launch towards Los Angeles?|A nuclear missile|A chemical artillery shell|A conventional cruise missile without a warhead|An unmanned drone carrying explosives|Easy|Nuclear Missile|Habib Marwan|Los Angeles Target|Stolen Launch Codes|Day Four Finale|National Emergency|Warhead
 Which CTU analyst travels into the field and survives a confrontation connected to the missile investigation?|Chloe O'Brian|Sarah Gavin|Maya Driscoll|Marianne Taylor|Medium|Chloe O Brian|Mary Lynn Rajskub|Field Assignment|Missile Investigation|Armed Confrontation|CTU Analyst|Personal Danger
 Which former president helps direct the response to the missile threat after Charles Logan takes office?|David Palmer|John Keeler|James Prescott|Alan Milliken|Easy|David Palmer|Dennis Haysbert|Former President|Charles Logan|Counterterrorism Decisions|White House Crisis|Return To Government
 Which man does Jack seek to remove from the Chinese consulate to interrogate about Marwan's plans?|Lee Jong|Cheng Zhi|Kalil Hasan|Henry Powell|Hard|Lee Jong|Chinese Consulate|Jack Bauer|Intelligence Source|Abduction Operation|Habib Marwan|Diplomatic Incident
 What happens to the Chinese consul during the unauthorised raid?|He is killed by gunfire from Chinese security personnel|He escapes in a helicopter|He is arrested by US Secret Service|He is exposed as the missile launch operator|Medium|Chinese Consul Death|Consulate Raid|Chinese Guards|Friendly Fire|Jack Bauer|Diplomatic Crisis|Los Angeles
 Which character dies in hospital after Jack prioritises treatment for a witness from the Chinese consulate?|Paul Raines|Richard Heller|Curtis Manning|Bill Buchanan|Medium|Paul Raines Death|Audrey Raines|Hospital Operation|Lee Jong|Jack Bauer Decision|Emergency Surgery|Relationship Breakdown
 Who investigates CTU's involvement in the Chinese consulate raid?|Cheng Zhi|Lee Jong|Habib Marwan|John Keeler|Medium|Cheng Zhi|Chinese Diplomatic Official|CTU Investigation|Consulate Raid|Jack Bauer Identity|Chinese Government|International Incident
 Which actor portrayed Chinese investigator Cheng Zhi?|Tzi Ma|Arnold Vosloo|Nestor Serrano|Roger Cross|Hard|Cheng Zhi|Tzi Ma|Actor Casting|Chinese Official|Consulate Investigation|Government Representative|Season Four Guest
 Which returning assassin takes Tony Almeida hostage in the last hours of Season 4?|Mandy|Nina Myers|Marie Warner|Dina Araz|Medium|Mandy|Tony Almeida|Hostage Crisis|Assassin Return|Final Hours|Michelle Dessler|Marwan Connection
 Who played the assassin Mandy when she returned in Season 4?|Mia Kirshner|Sarah Clarke|Kim Raver|Reiko Aylesworth|Hard|Mandy|Mia Kirshner|Actress Casting|Returning Season One Character|Tony Almeida Hostage|Contract Assassin|Late Season Appearance
 How is the nuclear missile heading for Los Angeles finally stopped?|It is intercepted and destroyed in flight|It lands harmlessly in the Pacific|Marwan manually disables it after a deal|It is returned to its launch silo|Medium|Nuclear Missile|Missile Interception|Los Angeles Saved|Final Hours|Habib Marwan|Military Defence|Warhead Destroyed
 Why does Jack Bauer fake his death at the end of Season 4?|To avoid being killed over the Chinese consulate incident|To infiltrate the Araz family again|To escape a prison sentence for bank robbery|To begin a presidential election campaign|Medium|Jack Bauer|Faked Death|Chinese Government|Consulate Raid|Government Cover Up|National Secrets|Day Four Ending
 Which three former colleagues help Jack make his staged death convincing?|Tony Almeida, Michelle Dessler and Chloe O'Brian|Curtis Manning, Erin Driscoll and Sarah Gavin|Bill Buchanan, Edgar Stiles and James Heller|Nina Myers, Kate Warner and Gael Ortega|Medium|Jack Bauer|Tony Almeida|Michelle Dessler|Chloe O Brian|Fake Death Plan|CTU Medical Deception|Escape From Pursuit
 Who warns Jack that elements of the US government intend to have him killed?|David Palmer|Charles Logan|John Keeler|James Heller|Medium|David Palmer|Jack Bauer|Assassination Warning|Chinese Consulate Cover Up|Presidential Intervention|Finale Escape|Former President
 How does Jack leave the story at the end of Season 4?|He walks away into the sunrise under a new identity|He returns to direct CTU|He flies to Mexico with the Araz family|He announces his engagement on television|Medium|Jack Bauer|Season Four Ending|Sunrise Departure|New Identity|Faked Death Aftermath|Secret Escape|Day Four Finale`,
   },
 ];

 const FIRST_ID = 11332;
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
         '24 Season 4', '24 Day 4', '2005', '2000s',
         correctAnswer, ...specificTags
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
 if (questions[0].id !== 'tv_11332' || questions[questions.length - 1].id !== 'tv_11415') {
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
