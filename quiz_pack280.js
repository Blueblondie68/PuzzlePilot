
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
       question: question.includes('24') ? question : 'In 24 (Season 4), ' + question.charAt(0).toLowerCase() + question.slice(1),
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

 
// EDITORIAL AUDIT: 20 November 2026, Season 4 storylines
// Original question IDs tv_11332–tv_11415 preserved.
// Research: TVmaze season 4 episode guide; TheTVDB aired-order synopses; TV Guide.
// New IDs appended at end of latest bank question IDs; additional verification remains possible.
const auditAdditions = [
  {
    "id": "tv_35128",
    "category": "Television",
    "question": "In 24 (Season 4), why does Erin Driscoll resent Jack Bauer's unexpected return to CTU?",
    "answers": [
      "She had previously fired him",
      "He had accused her of stealing funds",
      "He had replaced her as director",
      "She had worked for the Salazars"
    ],
    "correctAnswer": "She had previously fired him",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 01",
      "Day 4 hour 07:00",
      "Characters: Erin Driscoll;Jack Bauer",
      "Storyline: Prior dismissal",
      "Question focus: Why does Erin Driscoll resent Jack Bauer's unexpected return to CTU?",
      "Answer focus: She had previously fired him",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35129",
    "category": "Television",
    "question": "In 24 (Season 4), what happens when Andrew Paige discovers suspicious terrorist activity online?",
    "answers": [
      "He is appointed CTU director",
      "The terrorists begin hunting him",
      "His computer is stolen by Audrey",
      "He voluntarily joins Marwan's group"
    ],
    "correctAnswer": "The terrorists begin hunting him",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 01",
      "Day 4 hour 07:00",
      "Characters: Andrew Paige;Chloe O'Brian",
      "Storyline: Hacker targeted",
      "Question focus: What happens when Andrew Paige discovers suspicious terrorist activity online?",
      "Answer focus: The terrorists begin hunting him",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35130",
    "category": "Television",
    "question": "In 24 (Season 4), why does Jack insist on taking part in the hunt for the kidnappers despite CTU's resistance?",
    "answers": [
      "He has been ordered back by President Palmer",
      "His daughter is inside the compound",
      "His boss and girlfriend are hostages",
      "He has recovered the stolen override"
    ],
    "correctAnswer": "His boss and girlfriend are hostages",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 02",
      "Day 4 hour 08:00",
      "Characters: Jack Bauer;James Heller;Audrey Raines",
      "Storyline: Return to action",
      "Question focus: Why does Jack insist on taking part in the hunt for the kidnappers despite CTU's resistance?",
      "Answer focus: His boss and girlfriend are hostages",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35131",
    "category": "Television",
    "question": "In 24 (Season 4), what happens to Andrew Paige while Jack follows the terrorists' trail?",
    "answers": [
      "He is transferred to a secret prison",
      "He escapes on an aircraft",
      "He is held by the police for robbery",
      "He is tortured for information"
    ],
    "correctAnswer": "He is tortured for information",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 03",
      "Day 4 hour 09:00",
      "Characters: Andrew Paige;Kalil Hasan",
      "Storyline: Interrogation of hacker",
      "Question focus: What happens to Andrew Paige while Jack follows the terrorists' trail?",
      "Answer focus: He is tortured for information",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35132",
    "category": "Television",
    "question": "In 24 (Season 4), why does Curtis Manning interrogate Richard Heller so aggressively?",
    "answers": [
      "He suspects Richard knows something about the kidnapping",
      "Richard has stolen a nuclear warhead",
      "Richard is wanted for attacking the train",
      "Richard has confessed to being Marwan"
    ],
    "correctAnswer": "He suspects Richard knows something about the kidnapping",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 03",
      "Day 4 hour 09:00",
      "Characters: Curtis Manning;Richard Heller",
      "Storyline: Heller family questioned",
      "Question focus: Why does Curtis Manning interrogate Richard Heller so aggressively?",
      "Answer focus: He suspects Richard knows something about the kidnapping",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35133",
    "category": "Television",
    "question": "In 24 (Season 4), whose assistance does Chloe secretly enlist to keep helping Jack track Kalil?",
    "answers": [
      "Sarah Gavin",
      "Edgar Stiles",
      "Marianne Taylor",
      "Maya Driscoll"
    ],
    "correctAnswer": "Edgar Stiles",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 04",
      "Day 4 hour 10:00",
      "Characters: Chloe O'Brian;Edgar Stiles;Jack Bauer",
      "Storyline: Secret technical help",
      "Question focus: Whose assistance does Chloe secretly enlist to keep helping Jack track Kalil?",
      "Answer focus: Edgar Stiles",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35134",
    "category": "Television",
    "question": "In 24 (Season 4), what do Heller and Audrey attempt while held prisoner by the terrorists?",
    "answers": [
      "Broadcast a false surrender",
      "Steal a nuclear missile",
      "Escape from their captors",
      "Send Marwan to a police station"
    ],
    "correctAnswer": "Escape from their captors",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 04",
      "Day 4 hour 10:00",
      "Characters: James Heller;Audrey Raines",
      "Storyline: Attempted escape",
      "Question focus: What do Heller and Audrey attempt while held prisoner by the terrorists?",
      "Answer focus: Escape from their captors",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35135",
    "category": "Television",
    "question": "In 24 (Season 4), what do Heller's captors threaten to do to Audrey unless he cooperates?",
    "answers": [
      "Release her into the desert",
      "Send her to the Chinese consulate",
      "Expose her relationship with Jack",
      "Harm or kill her"
    ],
    "correctAnswer": "Harm or kill her",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 05",
      "Day 4 hour 11:00",
      "Characters: James Heller;Audrey Raines",
      "Storyline: Coercing the hostage",
      "Question focus: What do Heller's captors threaten to do to Audrey unless he cooperates?",
      "Answer focus: Harm or kill her",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35136",
    "category": "Television",
    "question": "In 24 (Season 4), what does Navi Araz's treatment of Behrooz make Dina question?",
    "answers": [
      "Her loyalty to the terrorist operation",
      "Her decision to buy a new house",
      "Her support for the election",
      "Her employment at CTU"
    ],
    "correctAnswer": "Her loyalty to the terrorist operation",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 06",
      "Day 4 hour 12:00",
      "Characters: Navi Araz;Dina Araz;Behrooz Araz",
      "Storyline: Dina defends her son",
      "Question focus: What does Navi Araz's treatment of Behrooz make Dina question?",
      "Answer focus: Her loyalty to the terrorist operation",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35137",
    "category": "Television",
    "question": "In 24 (Season 4), what order does Habib Marwan give Navi regarding his own family?",
    "answers": [
      "Send them to the FBI",
      "Kill Dina and Behrooz",
      "Give them the override device",
      "Move them to the White House"
    ],
    "correctAnswer": "Kill Dina and Behrooz",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 07",
      "Day 4 hour 13:00",
      "Characters: Habib Marwan;Navi Araz",
      "Storyline: Marwan threatens the Araz family",
      "Question focus: What order does Habib Marwan give Navi regarding his own family?",
      "Answer focus: Kill Dina and Behrooz",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35138",
    "category": "Television",
    "question": "In 24 (Season 4), whom does CTU wrongly interrogate as a suspected mole after Marianne shifts suspicion?",
    "answers": [
      "Erin Driscoll",
      "Chloe O'Brian",
      "Sarah Gavin",
      "Audrey Raines"
    ],
    "correctAnswer": "Sarah Gavin",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 08",
      "Day 4 hour 14:00",
      "Characters: Marianne Taylor;Sarah Gavin",
      "Storyline: False mole accusation",
      "Question focus: Whom does CTU wrongly interrogate as a suspected mole after Marianne shifts suspicion?",
      "Answer focus: Sarah Gavin",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35139",
    "category": "Television",
    "question": "In 24 (Season 4), why does the doctor treating Dina's gunshot wound alert the police?",
    "answers": [
      "Dina is using a stolen identity card",
      "Behrooz is suffering radiation poisoning",
      "Dina has admitted working for CTU",
      "He suspects the injury is connected to a crime"
    ],
    "correctAnswer": "He suspects the injury is connected to a crime",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 08",
      "Day 4 hour 14:00",
      "Characters: Dina Araz;Behrooz Araz",
      "Storyline: Clinic suspicion",
      "Question focus: Why does the doctor treating Dina's gunshot wound alert the police?",
      "Answer focus: He suspects the injury is connected to a crime",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35140",
    "category": "Television",
    "question": "In 24 (Season 4), what personal crisis torments Edgar Stiles during the evacuation after a reactor meltdown?",
    "answers": [
      "His mother is trapped in the danger zone",
      "His daughter is missing from school",
      "His brother is held at the consulate",
      "His father has been arrested at CTU"
    ],
    "correctAnswer": "His mother is trapped in the danger zone",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 09",
      "Day 4 hour 15:00",
      "Characters: Edgar Stiles",
      "Storyline: Family in fallout zone",
      "Question focus: What personal crisis torments Edgar Stiles during the evacuation after a reactor meltdown?",
      "Answer focus: His mother is trapped in the danger zone",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35141",
    "category": "Television",
    "question": "In 24 (Season 4), whom does Behrooz contact for help as he tries to escape his father?",
    "answers": [
      "Paul Raines",
      "His uncle",
      "Andrew Paige",
      "Mike Novick"
    ],
    "correctAnswer": "His uncle",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 09",
      "Day 4 hour 15:00",
      "Characters: Behrooz Araz;Navi Araz",
      "Storyline: Behrooz seeks shelter",
      "Question focus: Whom does Behrooz contact for help as he tries to escape his father?",
      "Answer focus: His uncle",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35142",
    "category": "Television",
    "question": "In 24 (Season 4), how does Marianne Taylor attempt to improve her position after CTU identifies her?",
    "answers": [
      "She promises to locate Teri Bauer",
      "She demands to be made director",
      "She offers Curtis information in return for leniency",
      "She proposes an exchange for President Keeler"
    ],
    "correctAnswer": "She offers Curtis information in return for leniency",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 10",
      "Day 4 hour 16:00",
      "Characters: Marianne Taylor;Curtis Manning",
      "Storyline: Mole's bargain",
      "Question focus: How does Marianne Taylor attempt to improve her position after CTU identifies her?",
      "Answer focus: She offers Curtis information in return for leniency",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35143",
    "category": "Television",
    "question": "In 24 (Season 4), what does Sarah Gavin demand after CTU has wrongly treated her as a terrorist suspect?",
    "answers": [
      "The right to arrest Jack",
      "Control of the nuclear plants",
      "A meeting with Marwan",
      "Better terms for her continued employment"
    ],
    "correctAnswer": "Better terms for her continued employment",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 10",
      "Day 4 hour 16:00",
      "Characters: Sarah Gavin",
      "Storyline: Wrongly accused employee",
      "Question focus: What does Sarah Gavin demand after CTU has wrongly treated her as a terrorist suspect?",
      "Answer focus: Better terms for her continued employment",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35144",
    "category": "Television",
    "question": "In 24 (Season 4), what does Jack suspect when he investigates Paul Raines with Audrey present?",
    "answers": [
      "Paul may have been involved with the terrorists",
      "Paul has joined the US Navy",
      "Paul has been working for President Palmer",
      "Paul has hidden Behrooz at CTU"
    ],
    "correctAnswer": "Paul may have been involved with the terrorists",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 11",
      "Day 4 hour 17:00",
      "Characters: Jack Bauer;Audrey Raines;Paul Raines",
      "Storyline: Husband under suspicion",
      "Question focus: What does Jack suspect when he investigates Paul Raines with Audrey present?",
      "Answer focus: Paul may have been involved with the terrorists",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35145",
    "category": "Television",
    "question": "In 24 (Season 4), what personal crisis repeatedly distracts CTU director Erin Driscoll as the terror threat escalates?",
    "answers": [
      "Her husband's secret mission abroad",
      "Her daughter's deteriorating condition",
      "Her father's election campaign",
      "Her brother's trial"
    ],
    "correctAnswer": "Her daughter's deteriorating condition",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 11",
      "Day 4 hour 17:00",
      "Characters: Erin Driscoll;Maya Driscoll",
      "Storyline: Driscoll family crisis",
      "Question focus: What personal crisis repeatedly distracts CTU director Erin Driscoll as the terror threat escalates?",
      "Answer focus: Her daughter's deteriorating condition",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35146",
    "category": "Television",
    "question": "In 24 (Season 4), why do executives at McLennan-Forster attempt to destroy records when Jack investigates?",
    "answers": [
      "Their nuclear licence has expired",
      "The records contain Heller's medical history",
      "They want to hide their connection to Marwan",
      "Jack is investigating a tax offence"
    ],
    "correctAnswer": "They want to hide their connection to Marwan",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 12",
      "Day 4 hour 18:00",
      "Characters: McLennan-Forster;Habib Marwan;Jack Bauer",
      "Storyline: Corporate cover-up",
      "Question focus: Why do executives at McLennan-Forster attempt to destroy records when Jack investigates?",
      "Answer focus: They want to hide their connection to Marwan",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35147",
    "category": "Television",
    "question": "In 24 (Season 4), who helps Jack and Paul defend themselves when armed men target them after the EMP?",
    "answers": [
      "The Secret Service",
      "A unit led by the Chinese consul",
      "The Air Force One pilots",
      "Local civilians"
    ],
    "correctAnswer": "Local civilians",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 13",
      "Day 4 hour 19:00",
      "Characters: Jack Bauer;Paul Raines",
      "Storyline: Civilians help during blackout",
      "Question focus: Who helps Jack and Paul defend themselves when armed men target them after the EMP?",
      "Answer focus: Local civilians",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35148",
    "category": "Television",
    "question": "In 24 (Season 4), what happens to the leadership of CTU when Michelle Dessler returns?",
    "answers": [
      "She takes charge from Tony Almeida",
      "Jack replaces her immediately",
      "Erin Driscoll resumes command",
      "Sarah Gavin becomes director"
    ],
    "correctAnswer": "She takes charge from Tony Almeida",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 13",
      "Day 4 hour 19:00",
      "Characters: Michelle Dessler;Tony Almeida",
      "Storyline: Michelle returns",
      "Question focus: What happens to the leadership of CTU when Michelle Dessler returns?",
      "Answer focus: She takes charge from Tony Almeida",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35149",
    "category": "Television",
    "question": "In 24 (Season 4), what ultimatum does Sarah Gavin put to Michelle Dessler on her return to CTU?",
    "answers": [
      "Release all CTU detainees",
      "Accept Sarah's employment demands or lose her help",
      "Appoint Tony as president",
      "Close the operations room"
    ],
    "correctAnswer": "Accept Sarah's employment demands or lose her help",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 13",
      "Day 4 hour 19:00",
      "Characters: Sarah Gavin;Michelle Dessler",
      "Storyline: Sarah tests Michelle",
      "Question focus: What ultimatum does Sarah Gavin put to Michelle Dessler on her return to CTU?",
      "Answer focus: Accept Sarah's employment demands or lose her help",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35150",
    "category": "Television",
    "question": "In 24 (Season 4), how does Jack use Dina Araz to approach another suspect connected to Marwan?",
    "answers": [
      "He arranges a public press conference",
      "He has her impersonate Audrey",
      "He stages a hostage situation",
      "He swaps her for a captured CTU analyst"
    ],
    "correctAnswer": "He stages a hostage situation",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 14",
      "Day 4 hour 20:00",
      "Characters: Jack Bauer;Dina Araz",
      "Storyline: Mock hostage plan",
      "Question focus: How does Jack use Dina Araz to approach another suspect connected to Marwan?",
      "Answer focus: He stages a hostage situation",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35151",
    "category": "Television",
    "question": "In 24 (Season 4), why is Chloe O'Brian called back to support CTU's operations?",
    "answers": [
      "Driscoll needs help managing her daughter",
      "Tony has resigned to return to prison",
      "Chloe has received a presidential pardon",
      "Edgar is struggling to handle the pressure"
    ],
    "correctAnswer": "Edgar is struggling to handle the pressure",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 14",
      "Day 4 hour 20:00",
      "Characters: Chloe O'Brian;Edgar Stiles",
      "Storyline: Chloe returns",
      "Question focus: Why is Chloe O'Brian called back to support CTU's operations?",
      "Answer focus: Edgar is struggling to handle the pressure",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35152",
    "category": "Television",
    "question": "In 24 (Season 4), what trade does Marwan propose that forces CTU to weigh Jack's safety against another hostage?",
    "answers": [
      "Jack Bauer in exchange for Behrooz Araz",
      "Paul Raines in exchange for Chloe",
      "Dina Araz in exchange for Air Force One",
      "Audrey Raines in exchange for Michelle"
    ],
    "correctAnswer": "Jack Bauer in exchange for Behrooz Araz",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 15",
      "Day 4 hour 21:00",
      "Characters: Habib Marwan;Jack Bauer;Behrooz Araz",
      "Storyline: Hostage exchange",
      "Question focus: What trade does Marwan propose that forces CTU to weigh Jack's safety against another hostage?",
      "Answer focus: Jack Bauer in exchange for Behrooz Araz",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35153",
    "category": "Television",
    "question": "In 24 (Season 4), what happens when CTU raids the hideout Marwan has been using?",
    "answers": [
      "Marwan is killed at the scene",
      "Marwan escapes before he can be captured",
      "The nuclear missile is already destroyed",
      "The president is found inside"
    ],
    "correctAnswer": "Marwan escapes before he can be captured",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 16",
      "Day 4 hour 22:00",
      "Characters: Habib Marwan;Jack Bauer",
      "Storyline: Failed hideout raid",
      "Question focus: What happens when CTU raids the hideout Marwan has been using?",
      "Answer focus: Marwan escapes before he can be captured",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35154",
    "category": "Television",
    "question": "In 24 (Season 4), who unwittingly finds an object that becomes central to the hunt for Air Force One's stolen launch codes?",
    "answers": [
      "A group of schoolchildren",
      "Jack's former colleagues",
      "Two campers",
      "The Vice President's bodyguards"
    ],
    "correctAnswer": "Two campers",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 17",
      "Day 4 hour 23:00",
      "Characters: Air Force One;Habib Marwan",
      "Storyline: Innocent bystanders",
      "Question focus: Who unwittingly finds an object that becomes central to the hunt for Air Force One's stolen launch codes?",
      "Answer focus: Two campers",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35155",
    "category": "Television",
    "question": "In 24 (Season 4), what is the critical item the campers find after Air Force One is shot down?",
    "answers": [
      "A radio containing the president's speech",
      "A suitcase with money for terrorists",
      "A stolen CTU surveillance camera",
      "A briefcase containing nuclear launch codes"
    ],
    "correctAnswer": "A briefcase containing nuclear launch codes",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 17",
      "Day 4 hour 23:00",
      "Characters: Air Force One;Nuclear football",
      "Storyline: Missing briefcase",
      "Question focus: What is the critical item the campers find after Air Force One is shot down?",
      "Answer focus: A briefcase containing nuclear launch codes",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35156",
    "category": "Television",
    "question": "In 24 (Season 4), what complication prevents Curtis from freely interrogating a suspect linked to Marwan's next strike?",
    "answers": [
      "A lawyer intervenes to protect the suspect",
      "The suspect is already on an aircraft",
      "The suspect is the President's brother",
      "The suspect escapes to Mexico"
    ],
    "correctAnswer": "A lawyer intervenes to protect the suspect",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 18",
      "Day 4 hour 00:00",
      "Characters: Curtis Manning;Habib Marwan",
      "Storyline: Legal challenge",
      "Question focus: What complication prevents Curtis from freely interrogating a suspect linked to Marwan's next strike?",
      "Answer focus: A lawyer intervenes to protect the suspect",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35157",
    "category": "Television",
    "question": "In 24 (Season 4), what concern do Charles Logan's advisers have when he assumes presidential responsibilities?",
    "answers": [
      "He is planning to resign immediately",
      "He appears unable to make decisive choices during the crisis",
      "He cannot find the White House",
      "He is secretly hiding the missile"
    ],
    "correctAnswer": "He appears unable to make decisive choices during the crisis",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 18",
      "Day 4 hour 00:00",
      "Characters: Charles Logan",
      "Storyline: Logan under pressure",
      "Question focus: What concern do Charles Logan's advisers have when he assumes presidential responsibilities?",
      "Answer focus: He appears unable to make decisive choices during the crisis",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35158",
    "category": "Television",
    "question": "In 24 (Season 4), what does Chloe O'Brian do when terrorists attack during her first field assignment?",
    "answers": [
      "She escapes on a police helicopter",
      "She takes the terrorist hostage with a knife",
      "She fires an automatic rifle at an attacker",
      "She negotiates the attacker's surrender"
    ],
    "correctAnswer": "She fires an automatic rifle at an attacker",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 19",
      "Day 4 hour 01:00",
      "Characters: Chloe O'Brian",
      "Storyline: Unexpected armed defence",
      "Question focus: What does Chloe O'Brian do when terrorists attack during her first field assignment?",
      "Answer focus: She fires an automatic rifle at an attacker",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35159",
    "category": "Television",
    "question": "In 24 (Season 4), what presidential order interrupts Jack's attempt to capture Marwan?",
    "answers": [
      "A nationwide air raid is announced",
      "The airport is declared closed",
      "Jack is told to release the missile",
      "Secret Service agents are told to arrest Jack"
    ],
    "correctAnswer": "Secret Service agents are told to arrest Jack",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 19",
      "Day 4 hour 01:00",
      "Characters: Charles Logan;Jack Bauer",
      "Storyline: Logan interferes",
      "Question focus: What presidential order interrupts Jack's attempt to capture Marwan?",
      "Answer focus: Secret Service agents are told to arrest Jack",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35160",
    "category": "Television",
    "question": "In 24 (Season 4), who authorises Jack's covert raid on the Chinese consulate?",
    "answers": [
      "David Palmer",
      "Erin Driscoll",
      "John Keeler",
      "Marianne Taylor"
    ],
    "correctAnswer": "David Palmer",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 20",
      "Day 4 hour 02:00",
      "Characters: David Palmer;Jack Bauer",
      "Storyline: Covert raid decision",
      "Question focus: Who authorises Jack's covert raid on the Chinese consulate?",
      "Answer focus: David Palmer",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35161",
    "category": "Television",
    "question": "In 24 (Season 4), why does Audrey become furious with Jack at the hospital?",
    "answers": [
      "He tells her Paul has already been released",
      "He prioritises a witness's treatment over Paul's",
      "He refuses to visit Heller",
      "He blames her for the reactor meltdown"
    ],
    "correctAnswer": "He prioritises a witness's treatment over Paul's",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 20",
      "Day 4 hour 02:00",
      "Characters: Audrey Raines;Jack Bauer;Paul Raines",
      "Storyline: Paul's medical crisis",
      "Question focus: Why does Audrey become furious with Jack at the hospital?",
      "Answer focus: He prioritises a witness's treatment over Paul's",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35162",
    "category": "Television",
    "question": "In 24 (Season 4), what problem arises when Chinese officials investigate the raid on their consulate?",
    "answers": [
      "The consul is discovered to be alive",
      "Marwan claims responsibility for it",
      "They uncover evidence linking it to American agents",
      "They mistakenly accuse the FBI of destroying a power station"
    ],
    "correctAnswer": "They uncover evidence linking it to American agents",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 21",
      "Day 4 hour 03:00",
      "Characters: Cheng Zhi;Jack Bauer",
      "Storyline: Chinese evidence",
      "Question focus: What problem arises when Chinese officials investigate the raid on their consulate?",
      "Answer focus: They uncover evidence linking it to American agents",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35163",
    "category": "Television",
    "question": "In 24 (Season 4), what past contact raises new questions about Richard Heller's involvement in the attack?",
    "answers": [
      "He once shared an office with Tony Almeida",
      "He worked at the San Gabriel reactor",
      "He knew the pilot who rescued Heller",
      "He had contact with people connected to Marwan"
    ],
    "correctAnswer": "He had contact with people connected to Marwan",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 22",
      "Day 4 hour 04:00",
      "Characters: Richard Heller;Habib Marwan",
      "Storyline: Richard revisited",
      "Question focus: What past contact raises new questions about Richard Heller's involvement in the attack?",
      "Answer focus: He had contact with people connected to Marwan",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35164",
    "category": "Television",
    "question": "In 24 (Season 4), who is kidnapped as Tony and Michelle begin to reconcile?",
    "answers": [
      "Tony Almeida",
      "Chloe O'Brian",
      "Audrey Raines",
      "Mike Novick"
    ],
    "correctAnswer": "Tony Almeida",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 22",
      "Day 4 hour 04:00",
      "Characters: Tony Almeida;Michelle Dessler;Mandy",
      "Storyline: Tony abducted",
      "Question focus: Who is kidnapped as Tony and Michelle begin to reconcile?",
      "Answer focus: Tony Almeida",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35165",
    "category": "Television",
    "question": "In 24 (Season 4), what does Mandy demand from Michelle after capturing Tony?",
    "answers": [
      "Transfer the nuclear football to her",
      "Help with her escape",
      "A place in the president's cabinet",
      "Access to a reactor control room"
    ],
    "correctAnswer": "Help with her escape",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 23",
      "Day 4 hour 05:00",
      "Characters: Mandy;Michelle Dessler;Tony Almeida",
      "Storyline: Mandy blackmail",
      "Question focus: What does Mandy demand from Michelle after capturing Tony?",
      "Answer focus: Help with her escape",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35166",
    "category": "Television",
    "question": "In 24 (Season 4), what does a captured CTU operative face during the Chinese investigation of the consulate raid?",
    "answers": [
      "A public trial at the White House",
      "An order to pilot the nuclear missile",
      "Interrogation by Chinese security officers",
      "House arrest under President Keeler"
    ],
    "correctAnswer": "Interrogation by Chinese security officers",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 23",
      "Day 4 hour 05:00",
      "Characters: Cheng Zhi;Chinese security",
      "Storyline: Chinese probe",
      "Question focus: What does a captured CTU operative face during the Chinese investigation of the consulate raid?",
      "Answer focus: Interrogation by Chinese security officers",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35167",
    "category": "Television",
    "question": "In 24 (Season 4), what does Mandy demand in exchange for telling CTU where Marwan is hiding?",
    "answers": [
      "The nuclear football",
      "A post at CTU",
      "A meeting with Secretary Heller",
      "A full pardon for her previous crimes"
    ],
    "correctAnswer": "A full pardon for her previous crimes",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 24",
      "Day 4 hour 06:00",
      "Characters: Mandy;Jack Bauer;Habib Marwan",
      "Storyline: Mandy bargain",
      "Question focus: What does Mandy demand in exchange for telling CTU where Marwan is hiding?",
      "Answer focus: A full pardon for her previous crimes",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35168",
    "category": "Television",
    "question": "In 24 (Season 4), how do Jack's colleagues make his staged death appear genuine?",
    "answers": [
      "They use medication to stop and restart his vital signs",
      "They send an empty coffin to a funeral",
      "They forge a hospital death certificate without seeing Jack",
      "They substitute another person's body"
    ],
    "correctAnswer": "They use medication to stop and restart his vital signs",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 24",
      "Day 4 hour 06:00",
      "Characters: Jack Bauer;Tony Almeida;Michelle Dessler;Chloe O'Brian",
      "Storyline: Faked death",
      "Question focus: How do Jack's colleagues make his staged death appear genuine?",
      "Answer focus: They use medication to stop and restart his vital signs",
      "2005",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35169",
    "category": "Television",
    "question": "In 24 (Season 4), why must Jack remain hidden even after the immediate nuclear threat is stopped?",
    "answers": [
      "He is wanted for stealing the nuclear missile",
      "Government officials plan to kill him rather than surrender him to China",
      "He has been accused of assassinating Keeler",
      "He has promised to join Marwan's group"
    ],
    "correctAnswer": "Government officials plan to kill him rather than surrender him to China",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 4",
      "24 Day 4",
      "Episode 24",
      "Day 4 hour 06:00",
      "Characters: Jack Bauer;Chinese consulate;David Palmer",
      "Storyline: Government assassination plot",
      "Question focus: Why must Jack remain hidden even after the immediate nuclear threat is stopped?",
      "Answer focus: Government officials plan to kill him rather than surrender him to China",
      "2005",
      "Viewer storyline"
    ]
  }
];
questions.push(...auditAdditions);
const EXPECTED_COUNT = 126;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_11332' || questions[83].id !== 'tv_11415' || questions[questions.length - 1].id !== 'tv_35169') {
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
