
 // quiz_pack285.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: 24 - Season 8 (Day 8, first broadcast 2010)
 // New York CTU, Omar Hassan, Russian fuel rods, Dana Walsh, Renee Walker and the finale.
 // Seven individually selected question-specific tags per row.
 // Leave quiz_bank.js unchanged until the agreed end-of-session connection.
 // Row: question | correct answer | three wrong answers | difficulty | seven individual tags

 const groups = [
   {
     topic: 'Day Eight, Jack Bauer and CTU New York',
     facts: `How long after Season 7 does the story of 24 Season 8 begin?|Eighteen months|Three days|Five years|Ten years|Medium|Day Eight Timeline|Season Seven Aftermath|Eighteen Month Gap|Jack Bauer Recovery|New York Story|Time Jump|2010 Season
 At what time does the story of 24 Season 8 begin?|4 pm|6 am|8 am|Midnight|Medium|Four PM Opening|Day Eight Clock|Real Time Drama|New York Afternoon|Story Start|2010 Broadcast|Twenty Four Hours
 Which American city is the main setting for 24 Season 8?|New York City|Los Angeles|Chicago|Washington DC|Easy|New York City|Manhattan|CTU New York|United Nations|Season Eight Location|East Coast Setting|American City
 Which US president is negotiating a major international peace treaty in Season 8?|Allison Taylor|Charles Logan|Wayne Palmer|Noah Daniels|Easy|Allison Taylor|Cherry Jones|US President|Peace Negotiations|White House|International Diplomacy|2010 Story
 What has happened to the Counter Terrorist Unit by the beginning of Season 8?|A New York CTU office has been re-established|CTU has been moved permanently to London|CTU has become a private prison|CTU has been replaced by the Coast Guard|Medium|Counter Terrorist Unit|CTU Reopened|New York Branch|Federal Operations|Season Seven Closure|Counterterrorism|New Headquarters
 Who is the director of CTU New York at the beginning of Day 8?|Brian Hastings|Bill Buchanan|Tony Almeida|Ryan Chappelle|Easy|Brian Hastings|CTU Director|New York Office|Federal Leadership|Chloe O Brian|Field Operations|Opening Hours
 Which actor portrayed CTU director Brian Hastings?|Mykelti Williamson|James Morrison|Roger Cross|Jeffrey Nordling|Medium|Mykelti Williamson|Brian Hastings|Actor Casting|CTU Leadership|Season Eight Cast|American Actor|New York Office
 Which CTU agent serves as director of field operations in New York?|Cole Ortiz|Mike Doyle|Curtis Manning|Chase Edmunds|Easy|Cole Ortiz|CTU Field Operations|Tactical Team|Dana Walsh|Jack Bauer|New York Branch|Counterterrorism Agent
 Which actor played CTU field agent Cole Ortiz?|Freddie Prinze Jr.|John Boyd|Eric Balfour|Carlos Bernard|Medium|Freddie Prinze Jr|Cole Ortiz|Actor Casting|CTU Field Agent|Season Eight Lead|Tactical Operations|American Actor
 Which actor played CTU systems analyst Arlo Glass?|John Boyd|Carlo Rota|Louis Lombardi|Sean Astin|Medium|John Boyd|Arlo Glass|Actor Casting|CTU Systems Analyst|New York Headquarters|Surveillance Team|Season Eight Cast
 Which CTU analyst frequently monitors surveillance drones during Day 8?|Arlo Glass|Morris O'Brian|Edgar Stiles|Adam Kaufman|Medium|Arlo Glass|Drone Surveillance|CTU Analyst|Remote Cameras|Technical Operations|New York|Field Tracking
 With whom is Jack planning to return to Los Angeles before the new crisis begins?|Kim Bauer and her family|Audrey Raines and James Heller|Tony Almeida and Michelle Dessler|Martha Logan and Aaron Pierce|Easy|Jack Bauer|Kim Bauer|Family Reunion|Los Angeles Return|Retirement Plans|Granddaughter Teri|Day Eight Opening`,
   },
   {
     topic: 'Omar Hassan, His Family and the Assassination Plot',
     facts: `Of which fictional country is Omar Hassan the president?|The Islamic Republic of Kamistan|Sangala|Kundu|The Republic of Carpathia|Easy|Omar Hassan|Islamic Republic Of Kamistan|Fictional Country|Peace Treaty|Foreign President|Diplomatic Visit|United Nations
 Which actor portrayed President Omar Hassan?|Anil Kapoor|Alexander Siddig|Tony Todd|Hakeem Kae-Kazim|Easy|Anil Kapoor|Omar Hassan|Actor Casting|Kamistani President|Indian Actor|International Cast|Season Eight
 What is the name of Omar Hassan's wife?|Dalia Hassan|Martha Logan|Sherry Palmer|Karen Hayes|Easy|Dalia Hassan|Omar Hassan|First Lady Of Kamistan|Presidential Marriage|Peace Process|Kayla Hassan|Diplomatic Family
 Which actress played Dalia Hassan?|Necar Zadegan|Nazneen Contractor|Cherry Jones|Katee Sackhoff|Medium|Necar Zadegan|Dalia Hassan|Actress Casting|Kamistani First Lady|Presidential Family|Season Eight Guest|Acting President
 What is the first name of Omar and Dalia Hassan's daughter?|Kayla|Marika|Olivia|Teri|Easy|Kayla Hassan|Omar Hassan|Dalia Hassan|Presidential Daughter|Kamistani Family|Tarin Faroush|United Nations
 Which actress portrayed Kayla Hassan?|Nazneen Contractor|Necar Zadegan|Annie Wersching|Jennifer Westfeldt|Medium|Nazneen Contractor|Kayla Hassan|Actress Casting|Kamistani First Daughter|Presidential Family|Season Eight Cast|Canadian Actress
 Which member of Omar Hassan's family secretly assists the early attempt to assassinate him?|His brother Farhad|His daughter Kayla|His wife Dalia|His cousin Jamot|Medium|Farhad Hassan|Omar Hassan Brother|Family Betrayal|Assassination Plot|Russian Mafia|Kamistan Politics|Opening Hours
 Which journalist is involved in an affair with President Omar Hassan?|Meredith Reed|Renee Walker|Dana Walsh|Cara Bowden|Medium|Meredith Reed|Omar Hassan Affair|Journalist|Dalia Hassan|False Suspect|Presidential Scandal|2010 Story
 Which actress played journalist Meredith Reed?|Jennifer Westfeldt|Katee Sackhoff|Annie Wersching|Necar Zadegan|Hard|Jennifer Westfeldt|Meredith Reed|Actress Casting|Journalist Role|Omar Hassan Affair|Early Episodes|Guest Performer
 Which assassin infiltrates the police security detail protecting Hassan's motorcade?|Davros|Pavel Tokarev|Kevin Wade|Jonas Hodges|Medium|Davros|Police Officer Disguise|Assassination Attempt|Car Bomb|Hassan Motorcade|Russian Operative|Opening Attack
 Which acquaintance warns Jack Bauer about an assassination plot against Hassan?|Victor Aruz|Sergei Bazhaev|Jim Ricker|Rob Weiss|Medium|Victor Aruz|Jack Bauer Friend|Early Warning|Hassan Assassination|Opening Episode|Informant|CTU Alert
 Which CTU agent uses his vehicle to protect Hassan's motorcade from an explosion?|Cole Ortiz|Arlo Glass|Brian Hastings|Morris O'Brian|Medium|Cole Ortiz|Hassan Motorcade|Car Bomb|Protective Driving|Davros|CTU Field Operations|Failed Assassination`,
   },
   {
     topic: 'Renee Walker and the Russian Nuclear-Fuel Network',
     facts: `What material are the terrorists trying to purchase from a Russian criminal organisation?|Nuclear fuel rods|VX nerve gas|An experimental computer virus|Anti-aircraft missiles|Easy|Nuclear Fuel Rods|Russian Mafia|Radiological Plot|Kamistan Conspirators|Black Market|Samir Mehran|Nuclear Materials
 Who is the Russian arms dealer controlling the nuclear fuel rods?|Sergei Bazhaev|Vladimir Bierko|Anatoly Markov|Yuri Suvarov|Medium|Sergei Bazhaev|Russian Arms Dealer|Crime Family|Nuclear Fuel Rods|Black Market|Jack Bauer|Russian Mafia
 Which actor portrayed arms dealer Sergei Bazhaev?|Jürgen Prochnow|Rade Serbedzija|John Noble|Julian Sands|Hard|Jurgen Prochnow|Sergei Bazhaev|Actor Casting|German Actor|Russian Crime Family|Nuclear Conspiracy|Season Eight
 Which of Sergei Bazhaev's sons suffers radiation poisoning from the nuclear materials?|Oleg|Josef|Victor|Mikhail|Medium|Oleg Bazhaev|Radiation Poisoning|Sergei Bazhaev|Nuclear Fuel Rods|Younger Son|Family Tragedy|Russian Mafia
 Who kills Oleg Bazhaev after his brother tries to obtain medical care?|His father Sergei|Jack Bauer|Samir Mehran|Cole Ortiz|Medium|Oleg Bazhaev Death|Sergei Bazhaev|Family Betrayal|Radiation Exposure|Medical Treatment|Russian Mob Boss|Cruel Punishment
 What is the name of Sergei Bazhaev's older son?|Josef|Oleg|Dmitri|Pavel|Medium|Josef Bazhaev|Sergei Bazhaev|Older Son|David Anders|Crime Family|Nuclear Rods|Oleg Brother
 Why does Josef Bazhaev steal the nuclear rods from his father?|To avenge his brother Oleg's death|To finance a film studio|To supply a hospital generator|To become CTU director|Medium|Josef Bazhaev|Oleg Bazhaev|Family Revenge|Sergei Bazhaev|Stolen Fuel Rods|Farhad Hassan|Russian Crime Network
 Who receives the stolen nuclear rods after Josef Bazhaev is killed?|Farhad Hassan's associates|Chloe O'Brian's team|President Taylor's security staff|Kim Bauer's family|Medium|Josef Bazhaev Death|Farhad Hassan|Nuclear Fuel Transfer|Russian Arms Deal|Kamistani Conspiracy|Crime Network|Dangerous Material
 Which former FBI agent returns to help Jack infiltrate the Russian criminal network?|Renee Walker|Nina Myers|Janis Gold|Kate Warner|Easy|Renee Walker|Jack Bauer|Former FBI Agent|Undercover Operation|Russian Mafia|Season Seven Return|Intelligence Asset
 Which Russian criminal has a history with Renee Walker from an earlier undercover mission?|Vladimir Laitanan|Sergei Bazhaev|Pavel Tokarev|Mikhail Novakovich|Medium|Vladimir Laitanan|Renee Walker|Past Undercover Mission|Russian Criminal|Personal Trauma|Jack Bauer|Nuclear Rod Search
 Who stabs Russian criminal Vladimir Laitanan to death during the undercover operation?|Renee Walker|Chloe O'Brian|Dana Walsh|Kim Bauer|Medium|Renee Walker|Vladimir Laitanan Death|Undercover Mission|Knife Attack|Jack Bauer|Traumatic Memories|Crime Hideout
 Who is accidentally stabbed when Renee Walker attacks Vladimir Laitanan?|Jack Bauer|Cole Ortiz|Brian Hastings|Sergei Bazhaev|Medium|Jack Bauer Injury|Renee Walker|Vladimir Laitanan|Accidental Stabbing|Undercover Chaos|Russian Mob|Escape Mission`,
   },
   {
     topic: 'Dana Walsh, Cole Ortiz and CTU Secrets',
     facts: `Which actress played CTU senior data analyst Dana Walsh?|Katee Sackhoff|Annie Wersching|Mary Lynn Rajskub|Cherry Jones|Medium|Katee Sackhoff|Dana Walsh|Actress Casting|Senior Data Analyst|CTU New York|Season Eight Regular|Secret Identity
 What position does Dana Walsh hold at CTU New York?|Senior data analyst|Director of field operations|White House chief of staff|Director of the FBI|Easy|Dana Walsh|CTU Data Analysis|New York Office|Computer Intelligence|Undercover Mole|Professional Cover|Day Eight
 Which CTU colleague is engaged to Dana Walsh at the beginning of Day 8?|Cole Ortiz|Arlo Glass|Brian Hastings|Morris O'Brian|Easy|Dana Walsh|Cole Ortiz|Engaged Couple|CTU Workplace Romance|Secret Past|Relationship Betrayal|Field Agent
 What is Dana Walsh's original name, concealed from her CTU colleagues?|Jenny Scott|Meredith Reed|Cara Bowden|Jane Saunders|Medium|Jenny Scott|Dana Walsh|False Identity|Criminal Past|Kevin Wade|Name Change|CTU Background Checks
 Which former boyfriend threatens to expose Dana Walsh's criminal past?|Kevin Wade|Nick Coughlin|Samir Mehran|Jim Ricker|Medium|Kevin Wade|Dana Walsh|Ex Boyfriend|Blackmail|Jenny Scott|Prior Conviction|Personal Threat
 Who is Kevin Wade's accomplice during the attempted warehouse robbery?|Nick Coughlin|Bill Prady|Cole Ortiz|Vladimir Laitanan|Medium|Nick Coughlin|Kevin Wade|Warehouse Robbery|Dana Walsh|Criminal Accomplice|Police Evidence|Blackmail Scheme
 What crime does Kevin Wade pressure Dana Walsh into helping him commit?|Robbing a police warehouse|Kidnapping Omar Hassan|Assassinating President Taylor|Stealing a Russian submarine|Medium|Kevin Wade|Dana Walsh|Police Warehouse|Robbery Plot|Blackmail|Past Criminal Relationship|Hidden Identity
 Which CTU analyst notices suspicious camera footage involving Dana and Kevin?|Arlo Glass|Chloe O'Brian|Morris O'Brian|Janis Gold|Medium|Arlo Glass|Dana Walsh|Kevin Wade|Surveillance Camera|Cole Ortiz|Suspicious Relationship|CTU Monitoring
 Which field agent helps Dana conceal the aftermath of her confrontation with Kevin and Nick?|Cole Ortiz|Jack Bauer|Brian Hastings|Arlo Glass|Medium|Cole Ortiz|Dana Walsh|Kevin Wade|Nick Coughlin|Buried Bodies|Concealment|Loyalty Conflict
 Who is the probation officer investigating Kevin Wade's disappearance?|Bill Prady|Rob Weiss|Ethan Kanin|Frank Trammell|Medium|Bill Prady|Kevin Wade|Probation Officer|Dana Walsh|Police Warehouse|Criminal Investigation|CTU Visit
 Which CTU employee murders probation officer Bill Prady to hide her activities?|Dana Walsh|Chloe O'Brian|Renee Walker|Janis Gold|Medium|Dana Walsh|Bill Prady Murder|CTU Office|Criminal Cover Up|Kevin Wade|Hidden Body|Season Eight Betrayal
 Which foreign government's intelligence operation is Dana Walsh secretly assisting?|Russia|China|France|Canada|Easy|Dana Walsh|Russian Intelligence|CTU Mole|Samir Mehran|Omar Hassan Plot|State Sponsored Conspiracy|Hidden Allegiance`,
   },
   {
     topic: 'Samir Mehran, the Bomb and Omar Hassan',
     facts: `Which Kamistani extremist takes charge of the plan to attack New York with the nuclear material?|Samir Mehran|Ule Matobo|Hamri Al-Assad|Ike Dubaku|Easy|Samir Mehran|Kamistani Extremist|Nuclear Fuel Rods|Dirty Bomb|New York Terror Plot|Farhad Hassan|Season Eight Villain
 Which actor portrayed terrorist leader Samir Mehran?|Mido Hamada|Anil Kapoor|Akbar Kurtha|Tony Todd|Hard|Mido Hamada|Samir Mehran|Actor Casting|Kamistani Terrorist|New York Attack|Guest Cast|Season Eight
 Why does Farhad Hassan break away from Samir Mehran's group?|He refuses to attack civilians in the United States|He is offered a job at CTU|He discovers Hassan has resigned|He receives a royal pardon|Medium|Farhad Hassan|Samir Mehran|Change Of Plans|Attack On America|Failed Defection|Nuclear Fuel Rods|Internal Split
 Which young terrorist is sent to a hospital in an attempt to kill Farhad Hassan?|Marcos Al-Zacar|Tarin Faroush|Kevin Wade|Davros|Medium|Marcos Al Zacar|Hospital Bomber|Farhad Hassan|Samir Mehran|Suicide Vest|CTU Trap|Terrorist Cell
 Which actor portrayed the hospital bomber Marcos Al-Zacar?|Rami Malek|Clayne Crawford|T J Ramini|John Boyd|Medium|Rami Malek|Marcos Al Zacar|Actor Casting|Hospital Bomber|Young Extremist|Season Eight Guest|American Actor
 What deception does CTU use to lure a terrorist to Farhad's hospital room?|Announcing that Farhad is still alive|Claiming Omar Hassan has resigned|Pretending the nuclear rods are in Canada|Broadcasting a false presidential election result|Medium|Farhad Hassan|Hospital Trap|False Survival Report|Marcos Al Zacar|Jack Bauer|Terrorist Pursuit|CTU Deception
 Who is Kayla Hassan secretly romantically involved with?|Tarin Faroush|Samir Mehran|Josef Bazhaev|Cole Ortiz|Easy|Kayla Hassan|Tarin Faroush|Secret Relationship|Hassan Family|Security Chief|Presidential Daughter|Kamistan
 What position does Tarin Faroush hold in Omar Hassan's government?|Head of security|Finance minister|Ambassador to Russia|Army chief of staff|Medium|Tarin Faroush|Omar Hassan|Head Of Security|Kamistani Government|Kayla Hassan|Secret Betrayal|Internal Security
 What is File 33, demanded by the extremists during Kayla Hassan's abduction?|Information on bypassing US radiological defences|A database of federal election votes|Blueprints for the United Nations auditorium|A list of military pension payments|Hard|File Thirty Three|Samir Mehran|Radiological Defences|Kayla Hassan Hostage|National Security Information|Tarin Faroush|Countermeasure Plans
 What kind of device hidden in Kayla Hassan's car disables CTU's electronic systems?|An electromagnetic pulse bomb|A nerve-gas canister|A conventional smoke grenade|A nuclear warhead|Medium|EMP Bomb|Kayla Hassan Car|CTU Blackout|Electronic Disruption|Samir Mehran|Tarin Faroush|New York Headquarters
 What kind of attack does Samir Mehran threaten to carry out in Manhattan?|Detonating a radioactive dirty bomb|Releasing biological spores from aircraft|Setting off a volcanic eruption|Diverting a nuclear submarine missile|Medium|Radiological Dirty Bomb|Manhattan|Samir Mehran|Nuclear Fuel Rods|Civilian Casualties|President Taylor|Hostage Ultimatum
 What does Omar Hassan do to prevent the threatened bomb from killing thousands?|He voluntarily surrenders to the terrorists|He flees the country on a private jet|He shoots President Taylor|He orders the United Nations demolished|Easy|Omar Hassan|Self Sacrifice|Terrorist Surrender|Dirty Bomb|Samir Mehran|Civilian Protection|Presidential Decision`,
   },
   {
     topic: 'Hassan’s Death, Renee Walker and the Cover-up',
     facts: `Who murders President Omar Hassan after he surrenders to the terrorists?|Samir Mehran|Jack Bauer|Charles Logan|Cole Ortiz|Easy|Omar Hassan Murder|Samir Mehran|Terrorist Execution|Kamistan President|Jack Bauer Rescue|Peace Treaty|Day Eight Tragedy
 Why does Jack's team arrive too late to save Omar Hassan despite watching a broadcast of his captivity?|The broadcast is a recording rather than a live feed|Jack's helicopter runs out of fuel|The embassy denies CTU entry|The kidnappers use a false address in Canada|Medium|Omar Hassan|Recorded Broadcast|Delayed Discovery|Samir Mehran|Failed Rescue|Execution Video|CTU Search
 Which CTU analyst is exposed as the mole who alerted Hassan's kidnappers?|Dana Walsh|Chloe O'Brian|Arlo Glass|Renee Walker|Easy|Dana Walsh|CTU Mole|Tarin Faroush|Samir Mehran|Intelligence Leak|Betrayal Revealed|President Hassan
 What does Dana Walsh demand before revealing the terrorists' location to Jack?|Legal immunity|A promotion to CTU director|A helicopter to Russia|The release of her former boyfriend|Medium|Dana Walsh|Immunity Deal|Jack Bauer Interrogation|Samir Mehran Location|President Taylor|Terrorist Investigation|Mole Cooperation
 Which CTU director is dismissed after the disastrous failure to save Hassan?|Brian Hastings|Bill Buchanan|George Mason|Erin Driscoll|Easy|Brian Hastings|Dismissal|Hassan Death|CTU Director|Dana Walsh Recruitment|Leadership Change|Agency Accountability
 Who takes over as interim director of CTU New York after Brian Hastings leaves?|Chloe O'Brian|Dana Walsh|Arlo Glass|Renee Walker|Easy|Chloe O Brian|Interim Director|CTU New York|Brian Hastings|Mary Lynn Rajskub|Crisis Management|Leadership Promotion
 Who is asked to represent Kamistan in the peace negotiations after Omar Hassan's death?|Dalia Hassan|Kayla Hassan|Farhad Hassan|Meredith Reed|Medium|Dalia Hassan|Interim President|Omar Hassan Death|Peace Treaty|President Taylor|Presidential Succession|Kamistani Diplomacy
 Which former US president returns to help Allison Taylor persuade the Russians to sign the treaty?|Charles Logan|David Palmer|Wayne Palmer|John Keeler|Easy|Charles Logan|Gregory Itzin|Former US President|Russian Negotiations|Allison Taylor|Political Comeback|Peace Treaty
 Which Russian foreign minister is involved in the conspiracy to derail the peace treaty?|Mikhail Novakovich|Yuri Suvarov|Anatoly Markov|Dmitri Gredenko|Medium|Mikhail Novakovich|Russian Foreign Minister|Peace Treaty Conspiracy|Charles Logan|Pavel Tokarev|International Diplomacy|Russia
 Which Russian operative kills Renee Walker with a sniper rifle?|Pavel Tokarev|Sergei Bazhaev|Vladimir Laitanan|Josef Bazhaev|Medium|Pavel Tokarev|Renee Walker Death|Russian Assassin|Sniper Rifle|Jack Bauer|Cover Up Operation|New York
 Which returning character dies after being shot at Jack Bauer's apartment?|Renee Walker|Kim Bauer|Chloe O'Brian|Dalia Hassan|Easy|Renee Walker Death|Annie Wersching|Jack Bauer Romance|Pavel Tokarev|Apartment Sniper|Hospital|Tragic Storyline
 Where are Jack and Renee when the sniper attack that kills Renee begins?|Inside Jack's apartment|At the White House|On a subway platform|Inside a Russian embassy|Medium|Jack Bauer Apartment|Renee Walker|Sniper Attack|Russian Conspiracy|Pavel Tokarev|New York|Private Reunion`,
   },
   {
     topic: 'Jack’s Revenge, the Russian Conspiracy and Finale',
     facts: `Who persuades President Taylor to conceal Russian involvement in the attacks to preserve the treaty?|Charles Logan|Kim Bauer|Cole Ortiz|Dalia Hassan|Medium|Charles Logan|Allison Taylor|Russian Cover Up|Peace Treaty|Government Secrecy|Political Manipulation|Former President
 Which secretary of state resigns in protest over the decision to conceal the Russian conspiracy?|Ethan Kanin|Rob Weiss|Tim Woods|Blaine Mayer|Medium|Ethan Kanin|Secretary Of State|Allison Taylor|Resignation|Russian Conspiracy|Political Integrity|White House
 How does Jack escape custody after Taylor orders him taken away from CTU?|He commandeers a helicopter|He slips into a subway tunnel|He hides in a diplomatic car|He steals an ambulance|Medium|Jack Bauer Escape|Helicopter|CTU Custody|Allison Taylor|Going Rogue|Renee Walker Revenge|Pursuit
 Which old acquaintance supplies Jack with weapons and equipment during his revenge mission?|Jim Ricker|Victor Aruz|Michael Latham|Ryan Burnett|Medium|Jim Ricker|Jack Bauer|Weapons Supplier|Former Contact|Renee Walker Revenge|Covert Equipment|New York
 Where does Dana Walsh hide the evidence connecting Russia to the attacks?|A bank safe-deposit box|A locker at CTU|A United Nations filing cabinet|An aircraft cockpit|Medium|Dana Walsh|Safety Deposit Box|Bank|Memory Card|Russian Conspiracy|Jack Bauer|Hidden Evidence
 Who fatally shoots Dana Walsh after obtaining her evidence?|Jack Bauer|Cole Ortiz|Chloe O'Brian|Charles Logan|Easy|Dana Walsh Death|Jack Bauer|Construction Site|Unarmed Mole|Renee Walker Revenge|Evidence Retrieval|Season Eight
 Which Russian president is ultimately identified as the mastermind behind the conspiracy?|Yuri Suvarov|Omar Hassan|David Palmer|Noah Daniels|Medium|Yuri Suvarov|Russian President|Peace Treaty Conspiracy|Renee Walker Murder|Omar Hassan Murder|Jack Bauer|International Plot
 Which of Charles Logan's aides takes control of CTU operations during the hunt for Jack?|Jason Pillar|Rob Weiss|Tim Woods|Arlo Glass|Medium|Jason Pillar|Charles Logan Aide|CTU Takeover|Chloe O Brian|Jack Bauer Manhunt|Reed Diamond|Political Interference
 What clue recovered from Russian assassin Pavel Tokarev leads Jack to Charles Logan?|A SIM card containing Logan's number|A hotel key to Logan's office|A signed letter from President Taylor|A secret passport issued by CTU|Hard|Pavel Tokarev|SIM Card|Charles Logan|Phone Contact|Jack Bauer Revenge|Russian Assassin|Conspiracy Evidence
 Who convinces Jack not to shoot Russian President Suvarov at the end of Day 8?|Chloe O'Brian|Kim Bauer|Cole Ortiz|Allison Taylor|Easy|Chloe O Brian|Jack Bauer|Yuri Suvarov|Sniper Rifle|Revenge Abandoned|Final Confrontation|Friendship
 What does President Taylor ultimately decide at the peace treaty signing ceremony?|Refuse to sign and expose the cover-up|Sign the treaty and immediately resign privately|Arrest Dalia Hassan for treason|Hand the treaty to Charles Logan|Medium|Allison Taylor|Peace Treaty Refusal|Public Confession|Russian Conspiracy|Dalia Hassan|Moral Reversal|Finale
 How does Season 8 end for Jack Bauer?|He goes on the run after saying goodbye to Chloe|He becomes director of CTU New York|He marries Renee Walker|He moves to Kamistan as president|Easy|Jack Bauer|Chloe O Brian|Fugitive Ending|Drone Camera|Farewell Call|Russian Government|Season Eight Finale`,
   },
 ];

 const FIRST_ID = 11714;
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
     if (new Set([correctAnswer, ...answers].map(a => a.toLowerCase())).size !== 4) {
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
       question: question.includes('24') ? question : 'In 24 (Season 8), ' + question.charAt(0).toLowerCase() + question.slice(1),
       answers,
       correctAnswer,
       difficulty,
       tags: [...new Set([
         'American Television', 'Action Drama', 'Crime Thriller', '24',
         '24 Season 8', '24 Day 8', '2010', '2010s',
         group.topic, correctAnswer, ...specificTags
       ])],
       dailyEligible: true
     };
     index += 1;
     return item;
   })
 );

 
// STORYLINE AUDIT — 21 November 2026: 24 Season 8
// Original IDs tv_11714–tv_11797 preserved. Episode-by-episode missing character developments added.
// Checked against https://en.wikipedia.org/wiki/24_season_8 and https://www.thetvdb.com/series/24-show/seasons/official/8
const auditAdditions = [
  {
    "id": "tv_35348",
    "category": "Television",
    "question": "In 24 (Season 8), how does Victor Aruz's attempt to reach CTU end?",
    "answers": [
      "Davros destroys the helicopter Aruz is boarding",
      "Aruz flees to the Russian consulate",
      "Aruz is detained at the UN building",
      "Aruz changes sides and escapes with Farhad"
    ],
    "correctAnswer": "Davros destroys the helicopter Aruz is boarding",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 01",
      "Day 8 clock hour 16:00",
      "Characters: Victor Aruz;Davros;Jack Bauer",
      "Storyline: Aruz killed during evacuation",
      "Question focus: how does Victor Aruz's attempt to reach CTU end?",
      "Answer focus: Davros destroys the helicopter Aruz is boarding",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35349",
    "category": "Television",
    "question": "In 24 (Season 8), what crucial warning does Victor Aruz give before dying?",
    "answers": [
      "The Russians have already detonated the nuclear device",
      "Someone close to President Hassan is helping the assassins",
      "CTU headquarters contains a hidden bomb",
      "The president's wife has been taken hostage"
    ],
    "correctAnswer": "Someone close to President Hassan is helping the assassins",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 01",
      "Day 8 clock hour 16:00",
      "Characters: Victor Aruz;Omar Hassan",
      "Storyline: Aruz warns of an insider",
      "Question focus: what crucial warning does Victor Aruz give before dying?",
      "Answer focus: Someone close to President Hassan is helping the assassins",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35350",
    "category": "Television",
    "question": "In 24 (Season 8), who persuades Jack not to abandon the investigation and return to Los Angeles?",
    "answers": [
      "Renee Walker",
      "President Taylor",
      "His daughter Kim",
      "Brian Hastings"
    ],
    "correctAnswer": "His daughter Kim",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 02",
      "Day 8 clock hour 17:00",
      "Characters: Jack Bauer;Kim Bauer;Chloe O'Brian",
      "Storyline: Kim encourages Jack to help",
      "Question focus: who persuades Jack not to abandon the investigation and return to Los Angeles?",
      "Answer focus: His daughter Kim",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35351",
    "category": "Television",
    "question": "In 24 (Season 8), how does assassin Davros get himself assigned to President Hassan's security detail?",
    "answers": [
      "He obtains a forged Secret Service appointment",
      "He bribes CTU director Hastings",
      "He wins a security assignment in a public lottery",
      "He threatens a police officer's wife to force the officer to swap places"
    ],
    "correctAnswer": "He threatens a police officer's wife to force the officer to swap places",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 02",
      "Day 8 clock hour 17:00",
      "Characters: Davros;Omar Hassan",
      "Storyline: Davros coerces a police officer",
      "Question focus: how does assassin Davros get himself assigned to President Hassan's security detail?",
      "Answer focus: He threatens a police officer's wife to force the officer to swap places",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35352",
    "category": "Television",
    "question": "In 24 (Season 8), why is Jack briefly detained and mistreated by two police officers near Davros's home?",
    "answers": [
      "They wrongly believe he killed a fellow officer and his wife",
      "They think he is trying to bomb the UN",
      "They suspect him of stealing police uniforms",
      "They recognise him as an escaped Chinese prisoner"
    ],
    "correctAnswer": "They wrongly believe he killed a fellow officer and his wife",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 03",
      "Day 8 clock hour 18:00",
      "Characters: Jack Bauer;Davros",
      "Storyline: Jack falsely accused by police",
      "Question focus: why is Jack briefly detained and mistreated by two police officers near Davros's home?",
      "Answer focus: They wrongly believe he killed a fellow officer and his wife",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35353",
    "category": "Television",
    "question": "In 24 (Season 8), what false suspect does CTU arrest during its investigation into the assassination plot?",
    "answers": [
      "CTU analyst Chloe O'Brian",
      "Journalist Meredith Reed",
      "Dalia Hassan",
      "Jack's daughter Kim"
    ],
    "correctAnswer": "Journalist Meredith Reed",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 03",
      "Day 8 clock hour 18:00",
      "Characters: Meredith Reed;Omar Hassan;Brian Hastings",
      "Storyline: Journalist falsely accused",
      "Question focus: what false suspect does CTU arrest during its investigation into the assassination plot?",
      "Answer focus: Journalist Meredith Reed",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35354",
    "category": "Television",
    "question": "In 24 (Season 8), what personal clue on Davros helps Jack link the assassination plot to Russian criminals?",
    "answers": [
      "A signed cheque from Sergei",
      "A passport issued in Kamistan",
      "Distinctive tattoos",
      "A military identity bracelet"
    ],
    "correctAnswer": "Distinctive tattoos",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 04",
      "Day 8 clock hour 19:00",
      "Characters: Davros;Jack Bauer;Vladimir Laitanan",
      "Storyline: Assassin's tattoos",
      "Question focus: what personal clue on Davros helps Jack link the assassination plot to Russian criminals?",
      "Answer focus: Distinctive tattoos",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35355",
    "category": "Television",
    "question": "In 24 (Season 8), how does Jack prevent Davros from killing Cole Ortiz after the motorcade bombing?",
    "answers": [
      "He disables the building's electricity",
      "He throws a gas canister into their path",
      "He orders a helicopter to land between them",
      "He shoots Davros before the assassin can fire"
    ],
    "correctAnswer": "He shoots Davros before the assassin can fire",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 04",
      "Day 8 clock hour 19:00",
      "Characters: Jack Bauer;Davros;Cole Ortiz",
      "Storyline: Jack saves Cole from assassin",
      "Question focus: how does Jack prevent Davros from killing Cole Ortiz after the motorcade bombing?",
      "Answer focus: He shoots Davros before the assassin can fire",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35356",
    "category": "Television",
    "question": "In 24 (Season 8), what drastic thing does Renee Walker do to a criminal associate to conceal his GPS tracker?",
    "answers": [
      "She cuts off his fingers",
      "She destroys his mobile telephone",
      "She takes his coat and burns it",
      "She slips a sedative into his drink"
    ],
    "correctAnswer": "She cuts off his fingers",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 04",
      "Day 8 clock hour 19:00",
      "Characters: Renee Walker;Jack Bauer",
      "Storyline: Renee's disturbing undercover tactics",
      "Question focus: what drastic thing does Renee Walker do to a criminal associate to conceal his GPS tracker?",
      "Answer focus: She cuts off his fingers",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35357",
    "category": "Television",
    "question": "In 24 (Season 8), why does Dalia Hassan decide to leave her husband while he faces the assassination crisis?",
    "answers": [
      "He has agreed to relocate their daughter",
      "He refuses to stop arresting political opponents in Kamistan",
      "He secretly accepts a CTU job",
      "He has refused to sign an extradition treaty"
    ],
    "correctAnswer": "He refuses to stop arresting political opponents in Kamistan",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 05",
      "Day 8 clock hour 20:00",
      "Characters: Dalia Hassan;Omar Hassan",
      "Storyline: Dalia opposes mass arrests",
      "Question focus: why does Dalia Hassan decide to leave her husband while he faces the assassination crisis?",
      "Answer focus: He refuses to stop arresting political opponents in Kamistan",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35358",
    "category": "Television",
    "question": "In 24 (Season 8), what dangerous history between Renee and Vladimir Laitanan concerns Jack?",
    "answers": [
      "Laitanan was Renee's brother-in-law",
      "Laitanan had served alongside Jack in the Army",
      "Laitanan previously tried to sexually assault Renee during an undercover assignment",
      "Laitanan had once stolen Kim's passport"
    ],
    "correctAnswer": "Laitanan previously tried to sexually assault Renee during an undercover assignment",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 05",
      "Day 8 clock hour 20:00",
      "Characters: Renee Walker;Vladimir Laitanan;Jack Bauer",
      "Storyline: Renee's abusive former contact",
      "Question focus: what dangerous history between Renee and Vladimir Laitanan concerns Jack?",
      "Answer focus: Laitanan previously tried to sexually assault Renee during an undercover assignment",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35359",
    "category": "Television",
    "question": "In 24 (Season 8), what identity does Jack use to approach the arms dealers while pursuing the nuclear rods?",
    "answers": [
      "A Russian consular official",
      "An American hospital administrator",
      "A Kamistani nuclear inspector",
      "A German buyer offering cash for the material"
    ],
    "correctAnswer": "A German buyer offering cash for the material",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 06",
      "Day 8 clock hour 21:00",
      "Characters: Jack Bauer;Vladimir Laitanan",
      "Storyline: Jack poses as German arms buyer",
      "Question focus: what identity does Jack use to approach the arms dealers while pursuing the nuclear rods?",
      "Answer focus: A German buyer offering cash for the material",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35360",
    "category": "Television",
    "question": "In 24 (Season 8), how does Cole Ortiz protect Jack after Laitanan orders his men to kill their supposed buyer?",
    "answers": [
      "He shoots the attackers from a distant sniper position",
      "He drives a car through the warehouse",
      "He impersonates Laitanan over a radio",
      "He switches off the building's security alarms"
    ],
    "correctAnswer": "He shoots the attackers from a distant sniper position",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 06",
      "Day 8 clock hour 21:00",
      "Characters: Cole Ortiz;Jack Bauer;Vladimir Laitanan",
      "Storyline: Cole provides sniper cover",
      "Question focus: how does Cole Ortiz protect Jack after Laitanan orders his men to kill their supposed buyer?",
      "Answer focus: He shoots the attackers from a distant sniper position",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35361",
    "category": "Television",
    "question": "In 24 (Season 8), what does Jack do after Renee loses control and kills Vladimir Laitanan?",
    "answers": [
      "He accuses her of working for Kamistan",
      "He comforts her and promises she is not alone",
      "He orders her to leave the country",
      "He refuses to speak to her again"
    ],
    "correctAnswer": "He comforts her and promises she is not alone",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 07",
      "Day 8 clock hour 22:00",
      "Characters: Jack Bauer;Renee Walker",
      "Storyline: Jack comforts Renee",
      "Question focus: what does Jack do after Renee loses control and kills Vladimir Laitanan?",
      "Answer focus: He comforts her and promises she is not alone",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35362",
    "category": "Television",
    "question": "In 24 (Season 8), what unexpected development prevents Jack from leaving the Russian gang's hideout safely?",
    "answers": [
      "The authorities mistakenly arrest him as Laitanan",
      "Renee locks Jack in an evidence room",
      "Sergei Bazhaev's men arrive and abduct him",
      "A bomb blocks the only exit"
    ],
    "correctAnswer": "Sergei Bazhaev's men arrive and abduct him",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 07",
      "Day 8 clock hour 22:00",
      "Characters: Jack Bauer;Sergei Bazhaev",
      "Storyline: Jack abducted by rival gang",
      "Question focus: what unexpected development prevents Jack from leaving the Russian gang's hideout safely?",
      "Answer focus: Sergei Bazhaev's men arrive and abduct him",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35363",
    "category": "Television",
    "question": "In 24 (Season 8), why does Sergei Bazhaev order Jack tortured after the arms-deal meeting?",
    "answers": [
      "He wants Jack to reveal Dana's real name",
      "He believes Jack stole his son's passport",
      "He wants Jack to sign a peace treaty",
      "He believes Jack is working for law enforcement"
    ],
    "correctAnswer": "He believes Jack is working for law enforcement",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 08",
      "Day 8 clock hour 23:00",
      "Characters: Sergei Bazhaev;Jack Bauer",
      "Storyline: Gang boss suspects an agent",
      "Question focus: why does Sergei Bazhaev order Jack tortured after the arms-deal meeting?",
      "Answer focus: He believes Jack is working for law enforcement",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35364",
    "category": "Television",
    "question": "In 24 (Season 8), how does Arlo Glass complicate Dana Walsh's relationship with Cole Ortiz?",
    "answers": [
      "He shows Cole footage of Dana's encounter with Kevin Wade",
      "He tells Cole she has resigned from CTU",
      "He claims Dana is a Russian diplomat",
      "He sends Cole a false wedding invitation"
    ],
    "correctAnswer": "He shows Cole footage of Dana's encounter with Kevin Wade",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 08",
      "Day 8 clock hour 23:00",
      "Characters: Arlo Glass;Dana Walsh;Cole Ortiz;Kevin Wade",
      "Storyline: Arlo reveals incriminating footage",
      "Question focus: how does Arlo Glass complicate Dana Walsh's relationship with Cole Ortiz?",
      "Answer focus: He shows Cole footage of Dana's encounter with Kevin Wade",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35365",
    "category": "Television",
    "question": "In 24 (Season 8), what does Farhad Hassan discover is Samir Mehran's real plan for the stolen fuel rods?",
    "answers": [
      "Sell the rods back to the Russians",
      "Attack civilians in the United States rather than use them against Kamistan",
      "Build a civilian power station",
      "Destroy the United Nations headquarters with missiles"
    ],
    "correctAnswer": "Attack civilians in the United States rather than use them against Kamistan",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 09",
      "Day 8 clock hour 00:00",
      "Characters: Farhad Hassan;Samir Mehran",
      "Storyline: Farhad rejects US attack",
      "Question focus: what does Farhad Hassan discover is Samir Mehran's real plan for the stolen fuel rods?",
      "Answer focus: Attack civilians in the United States rather than use them against Kamistan",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35366",
    "category": "Television",
    "question": "In 24 (Season 8), why does Cole Ortiz confront Kevin Wade and Nick Coughlin while Dana is hiding her past?",
    "answers": [
      "He discovers they are installing a CTU satellite",
      "He receives a warrant from President Taylor",
      "He finds Dana preparing to kill the men who are blackmailing her",
      "He is trying to arrest Sergei Bazhaev"
    ],
    "correctAnswer": "He finds Dana preparing to kill the men who are blackmailing her",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 09",
      "Day 8 clock hour 00:00",
      "Characters: Cole Ortiz;Dana Walsh;Kevin Wade;Nick Coughlin",
      "Storyline: Cole stops Dana's retaliation",
      "Question focus: why does Cole Ortiz confront Kevin Wade and Nick Coughlin while Dana is hiding her past?",
      "Answer focus: He finds Dana preparing to kill the men who are blackmailing her",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35367",
    "category": "Television",
    "question": "In 24 (Season 8), what deception draws would-be suicide bomber Marcos Al-Zacar to the hospital?",
    "answers": [
      "CTU tells him President Taylor is visiting",
      "A nurse promises him immunity in return for medicine",
      "The hospital is falsely reported as being evacuated",
      "CTU falsely announces that Farhad survived his wounds"
    ],
    "correctAnswer": "CTU falsely announces that Farhad survived his wounds",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 10",
      "Day 8 clock hour 01:00",
      "Characters: Marcos Al-Zacar;Farhad Hassan;Jack Bauer",
      "Storyline: Farhad's fake survival",
      "Question focus: what deception draws would-be suicide bomber Marcos Al-Zacar to the hospital?",
      "Answer focus: CTU falsely announces that Farhad survived his wounds",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35368",
    "category": "Television",
    "question": "In 24 (Season 8), what does Marcos discover after entering Farhad's hospital room and shooting the patient?",
    "answers": [
      "Farhad was already dead",
      "The patient is a police officer wearing a disguise",
      "Farhad has escaped through a window",
      "The room contains only a recording device"
    ],
    "correctAnswer": "Farhad was already dead",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 10",
      "Day 8 clock hour 01:00",
      "Characters: Marcos Al-Zacar;Farhad Hassan",
      "Storyline: Hospital decoy discovered",
      "Question focus: what does Marcos discover after entering Farhad's hospital room and shooting the patient?",
      "Answer focus: Farhad was already dead",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35369",
    "category": "Television",
    "question": "In 24 (Season 8), who is brought to the hospital in an attempt to persuade Marcos to abandon his suicide bomb?",
    "answers": [
      "His brother Hamid",
      "His mother Elaine",
      "His girlfriend Kayla",
      "His father Sergei"
    ],
    "correctAnswer": "His mother Elaine",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 11",
      "Day 8 clock hour 02:00",
      "Characters: Marcos Al-Zacar;Elaine Al-Zacar;Jack Bauer",
      "Storyline: Marcos's mother tries to save him",
      "Question focus: who is brought to the hospital in an attempt to persuade Marcos to abandon his suicide bomb?",
      "Answer focus: His mother Elaine",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35370",
    "category": "Television",
    "question": "In 24 (Season 8), what does Marcos reveal just before the bomb kills him?",
    "answers": [
      "Dana Walsh is married to Jack",
      "Charles Logan has kidnapped Kim",
      "Tarin Faroush is working with Samir Mehran",
      "Dalia Hassan is secretly a Russian agent"
    ],
    "correctAnswer": "Tarin Faroush is working with Samir Mehran",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 11",
      "Day 8 clock hour 02:00",
      "Characters: Marcos Al-Zacar;Tarin Faroush;Samir Mehran",
      "Storyline: Bomber exposes Tarin's role",
      "Question focus: what does Marcos reveal just before the bomb kills him?",
      "Answer focus: Tarin Faroush is working with Samir Mehran",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35371",
    "category": "Television",
    "question": "In 24 (Season 8), what is false about Tarin Faroush's apparent death while helping Kayla escape?",
    "answers": [
      "He was never actually inside the hotel",
      "Kayla is the person who fakes her death",
      "The guards mistakenly identify a civilian",
      "He stages the escape and survives"
    ],
    "correctAnswer": "He stages the escape and survives",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 12",
      "Day 8 clock hour 03:00",
      "Characters: Tarin Faroush;Kayla Hassan;Samir Mehran",
      "Storyline: Tarin fakes his death",
      "Question focus: what is false about Tarin Faroush's apparent death while helping Kayla escape?",
      "Answer focus: He stages the escape and survives",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35372",
    "category": "Television",
    "question": "In 24 (Season 8), what happens to CTU's ability to track radiological threats after Kayla's vehicle detonates?",
    "answers": [
      "Its systems are disabled by the EMP",
      "Its surveillance satellites are transferred to Kamistan",
      "Its headquarters is flooded",
      "It accidentally launches a nuclear drone"
    ],
    "correctAnswer": "Its systems are disabled by the EMP",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 12",
      "Day 8 clock hour 03:00",
      "Characters: Kayla Hassan;Chloe O'Brian;CTU New York",
      "Storyline: EMP knocks out radiological monitoring",
      "Question focus: what happens to CTU's ability to track radiological threats after Kayla's vehicle detonates?",
      "Answer focus: Its systems are disabled by the EMP",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35373",
    "category": "Television",
    "question": "In 24 (Season 8), how does Chloe overcome the NSA technicians refusing to follow her recovery plan?",
    "answers": [
      "She asks President Taylor to dismiss them",
      "She holds them at gunpoint until they let her proceed",
      "She destroys CTU's replacement servers",
      "She disconnects all radios in the building"
    ],
    "correctAnswer": "She holds them at gunpoint until they let her proceed",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 13",
      "Day 8 clock hour 04:00",
      "Characters: Chloe O'Brian;NSA;Brian Hastings",
      "Storyline: Chloe forces repair strategy",
      "Question focus: how does Chloe overcome the NSA technicians refusing to follow her recovery plan?",
      "Answer focus: She holds them at gunpoint until they let her proceed",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35374",
    "category": "Television",
    "question": "In 24 (Season 8), who arrives in time to save Jack and Cole during the gun battle with Mehran's men?",
    "answers": [
      "Kim Bauer",
      "Dalia Hassan",
      "Renee Walker",
      "Meredith Reed"
    ],
    "correctAnswer": "Renee Walker",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 13",
      "Day 8 clock hour 04:00",
      "Characters: Renee Walker;Jack Bauer;Cole Ortiz",
      "Storyline: Renee arrives as backup",
      "Question focus: who arrives in time to save Jack and Cole during the gun battle with Mehran's men?",
      "Answer focus: Renee Walker",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35375",
    "category": "Television",
    "question": "In 24 (Season 8), which White House adviser has a heart attack while resisting a secret plan to hand over Hassan?",
    "answers": [
      "Charles Logan",
      "Brian Hastings",
      "Mikhail Novakovich",
      "Ethan Kanin"
    ],
    "correctAnswer": "Ethan Kanin",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 14",
      "Day 8 clock hour 05:00",
      "Characters: Ethan Kanin;Rob Weiss;General Brucker",
      "Storyline: Kanin collapses over coup plan",
      "Question focus: which White House adviser has a heart attack while resisting a secret plan to hand over Hassan?",
      "Answer focus: Ethan Kanin",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35376",
    "category": "Television",
    "question": "In 24 (Season 8), what order does President Taylor refuse despite pressure from senior advisers?",
    "answers": [
      "Surrender President Hassan to the terrorists",
      "Cancel the New York subway network",
      "Launch a drone against the Russian embassy",
      "Transfer CTU to the military"
    ],
    "correctAnswer": "Surrender President Hassan to the terrorists",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 14",
      "Day 8 clock hour 05:00",
      "Characters: Allison Taylor;Omar Hassan;Samir Mehran",
      "Storyline: Taylor refuses hostage trade",
      "Question focus: what order does President Taylor refuse despite pressure from senior advisers?",
      "Answer focus: Surrender President Hassan to the terrorists",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35377",
    "category": "Television",
    "question": "In 24 (Season 8), what does the secret government team attempt during Jack's protection of Hassan?",
    "answers": [
      "Arrest Jack for leaving CTU",
      "Kidnap Hassan and deliver him to the terrorists",
      "Capture Dalia and Kayla at the airport",
      "Steal the Russian fuel rods from CTU"
    ],
    "correctAnswer": "Kidnap Hassan and deliver him to the terrorists",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 14",
      "Day 8 clock hour 05:00",
      "Characters: Rob Weiss;General Brucker;Jack Bauer;Omar Hassan",
      "Storyline: Unauthorised abduction operation",
      "Question focus: what does the secret government team attempt during Jack's protection of Hassan?",
      "Answer focus: Kidnap Hassan and deliver him to the terrorists",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35378",
    "category": "Television",
    "question": "In 24 (Season 8), how does Hassan escape from Jack's protection so he can sacrifice himself?",
    "answers": [
      "He slips away during a false fire alarm",
      "He hides inside the CTU director's car",
      "He overpowers Jack and locks him with his own family",
      "He disguises himself as a Russian diplomat"
    ],
    "correctAnswer": "He overpowers Jack and locks him with his own family",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 15",
      "Day 8 clock hour 06:00",
      "Characters: Omar Hassan;Jack Bauer;Dalia Hassan;Kayla Hassan",
      "Storyline: Hassan deliberately surrenders",
      "Question focus: how does Hassan escape from Jack's protection so he can sacrifice himself?",
      "Answer focus: He overpowers Jack and locks him with his own family",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35379",
    "category": "Television",
    "question": "In 24 (Season 8), how does Tarin divert CTU agents while Hassan is secretly handed to another conspirator?",
    "answers": [
      "He declares a false emergency in the hospital",
      "He changes the number plates on a police car",
      "He drives the car into CTU headquarters",
      "He leads them away in his vehicle before killing himself"
    ],
    "correctAnswer": "He leads them away in his vehicle before killing himself",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 15",
      "Day 8 clock hour 06:00",
      "Characters: Tarin Faroush;Omar Hassan;Dana Walsh",
      "Storyline: Tarin draws pursuit away",
      "Question focus: how does Tarin divert CTU agents while Hassan is secretly handed to another conspirator?",
      "Answer focus: He leads them away in his vehicle before killing himself",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35380",
    "category": "Television",
    "question": "In 24 (Season 8), what does Hassan refuse to do even under torture during the kidnappers' supposed live broadcast?",
    "answers": [
      "Confess to crimes he did not commit",
      "Reveal the location of the fuel rods",
      "Sign away his country's independence",
      "Plead for a presidential pardon"
    ],
    "correctAnswer": "Confess to crimes he did not commit",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 16",
      "Day 8 clock hour 07:00",
      "Characters: Omar Hassan;Samir Mehran",
      "Storyline: Hassan refuses false confession",
      "Question focus: what does Hassan refuse to do even under torture during the kidnappers' supposed live broadcast?",
      "Answer focus: Confess to crimes he did not commit",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35381",
    "category": "Television",
    "question": "In 24 (Season 8), why does the team find Hassan already dead despite locating the room showing his captivity?",
    "answers": [
      "A bomb destroys the rescue helicopter",
      "His torturers used a prerecorded broadcast",
      "The kidnappers move him abroad before the search",
      "The guards direct CTU to the wrong city"
    ],
    "correctAnswer": "His torturers used a prerecorded broadcast",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 16",
      "Day 8 clock hour 07:00",
      "Characters: Omar Hassan;Samir Mehran;Jack Bauer",
      "Storyline: Recorded execution conceals time of death",
      "Question focus: why does the team find Hassan already dead despite locating the room showing his captivity?",
      "Answer focus: His torturers used a prerecorded broadcast",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35382",
    "category": "Television",
    "question": "In 24 (Season 8), how does the wounded terrorist leader Samir Mehran die after the botched rescue?",
    "answers": [
      "He escapes and dies at sea",
      "He is shot by President Taylor's bodyguards",
      "A Russian operative posing as an FBI agent gives him a lethal injection",
      "He detonates an explosive belt at CTU"
    ],
    "correctAnswer": "A Russian operative posing as an FBI agent gives him a lethal injection",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 17",
      "Day 8 clock hour 08:00",
      "Characters: Samir Mehran;Pavel Tokarev;Renee Walker",
      "Storyline: Russian spy kills witness",
      "Question focus: how does the wounded terrorist leader Samir Mehran die after the botched rescue?",
      "Answer focus: A Russian operative posing as an FBI agent gives him a lethal injection",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35383",
    "category": "Television",
    "question": "In 24 (Season 8), what does Jack do when Renee is struck by a sniper at his flat?",
    "answers": [
      "He calls President Hassan for help",
      "He arrests her as a suspected spy",
      "He leaves her with CTU and pursues the sniper immediately",
      "He rushes her to hospital"
    ],
    "correctAnswer": "He rushes her to hospital",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 17",
      "Day 8 clock hour 08:00",
      "Characters: Jack Bauer;Renee Walker",
      "Storyline: Jack races to save Renee",
      "Question focus: what does Jack do when Renee is struck by a sniper at his flat?",
      "Answer focus: He rushes her to hospital",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35384",
    "category": "Television",
    "question": "In 24 (Season 8), where does Jack force Sergei Bazhaev to tell him who helped fund the day's attacks?",
    "answers": [
      "At Bazhaev's bail hearing",
      "At a Russian embassy reception",
      "Inside CTU's medical unit",
      "In a subway carriage"
    ],
    "correctAnswer": "At Bazhaev's bail hearing",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 18",
      "Day 8 clock hour 09:00",
      "Characters: Jack Bauer;Sergei Bazhaev",
      "Storyline: Bail-hearing interrogation",
      "Question focus: where does Jack force Sergei Bazhaev to tell him who helped fund the day's attacks?",
      "Answer focus: At Bazhaev's bail hearing",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35385",
    "category": "Television",
    "question": "In 24 (Season 8), how does Charles Logan pressure Russian foreign minister Novakovich to continue the peace treaty?",
    "answers": [
      "He promises Novakovich a cabinet position",
      "He threatens to expose Russia's part in the assassination plot",
      "He offers to surrender Jack to Kamistan",
      "He secretly controls Russia's nuclear weapons"
    ],
    "correctAnswer": "He threatens to expose Russia's part in the assassination plot",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 18",
      "Day 8 clock hour 09:00",
      "Characters: Charles Logan;Mikhail Novakovich",
      "Storyline: Logan blackmails Russian minister",
      "Question focus: how does Charles Logan pressure Russian foreign minister Novakovich to continue the peace treaty?",
      "Answer focus: He threatens to expose Russia's part in the assassination plot",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35386",
    "category": "Television",
    "question": "In 24 (Season 8), what does Logan persuade Taylor to allow his private operatives to do to Dana?",
    "answers": [
      "Make her acting director of CTU",
      "Transfer her to the Russian embassy",
      "Interrogate her violently to retrieve the evidence",
      "Release her with a false identity"
    ],
    "correctAnswer": "Interrogate her violently to retrieve the evidence",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 19",
      "Day 8 clock hour 10:00",
      "Characters: Charles Logan;Allison Taylor;Dana Walsh",
      "Storyline: Logan's off-the-books interrogation",
      "Question focus: what does Logan persuade Taylor to allow his private operatives to do to Dana?",
      "Answer focus: Interrogate her violently to retrieve the evidence",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35387",
    "category": "Television",
    "question": "In 24 (Season 8), how does Jack defeat the CTU team sent to capture him at a supposed meeting place?",
    "answers": [
      "He flies away from them in a helicopter",
      "He detonates a fake dirty bomb",
      "He asks President Taylor for a pardon",
      "He anticipates the trap, overpowers the agents and persuades Cole to help"
    ],
    "correctAnswer": "He anticipates the trap, overpowers the agents and persuades Cole to help",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 19",
      "Day 8 clock hour 10:00",
      "Characters: Jack Bauer;Cole Ortiz;Chloe O'Brian",
      "Storyline: Jack reverses CTU ambush",
      "Question focus: how does Jack defeat the CTU team sent to capture him at a supposed meeting place?",
      "Answer focus: He anticipates the trap, overpowers the agents and persuades Cole to help",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35388",
    "category": "Television",
    "question": "In 24 (Season 8), how does Dana regain control of the evidence when Cole accompanies her into the bank?",
    "answers": [
      "She knocks Cole unconscious and takes the memory card",
      "She persuades the bank manager to destroy the recording",
      "She sends a forged message to the White House",
      "She trades it for her old identity papers"
    ],
    "correctAnswer": "She knocks Cole unconscious and takes the memory card",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 20",
      "Day 8 clock hour 11:00",
      "Characters: Dana Walsh;Cole Ortiz;Jack Bauer",
      "Storyline: Dana ambushes Cole at bank",
      "Question focus: how does Dana regain control of the evidence when Cole accompanies her into the bank?",
      "Answer focus: She knocks Cole unconscious and takes the memory card",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35389",
    "category": "Television",
    "question": "In 24 (Season 8), where does Jack finally corner Dana after she attempts to betray him again?",
    "answers": [
      "At the United Nations entrance",
      "At a construction site",
      "Inside the CTU control room",
      "Aboard a passenger aircraft"
    ],
    "correctAnswer": "At a construction site",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 20",
      "Day 8 clock hour 11:00",
      "Characters: Jack Bauer;Dana Walsh",
      "Storyline: Dana's final confrontation location",
      "Question focus: where does Jack finally corner Dana after she attempts to betray him again?",
      "Answer focus: At a construction site",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35390",
    "category": "Television",
    "question": "In 24 (Season 8), what does Jack discover Pavel Tokarev did to conceal a link to his Russian handlers?",
    "answers": [
      "He swallowed a key to his weapons locker",
      "He burned a diplomatic passport",
      "He swallowed the SIM card from his phone",
      "He buried a radio in the subway"
    ],
    "correctAnswer": "He swallowed the SIM card from his phone",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 21",
      "Day 8 clock hour 12:00",
      "Characters: Pavel Tokarev;Jack Bauer",
      "Storyline: Swallowed SIM card",
      "Question focus: what does Jack discover Pavel Tokarev did to conceal a link to his Russian handlers?",
      "Answer focus: He swallowed the SIM card from his phone",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35391",
    "category": "Television",
    "question": "In 24 (Season 8), who does Jack ask to carry the video evidence of the Russian conspiracy towards publication?",
    "answers": [
      "Dana Walsh",
      "Dalia Hassan",
      "Kim Bauer",
      "Journalist Meredith Reed"
    ],
    "correctAnswer": "Journalist Meredith Reed",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 21",
      "Day 8 clock hour 12:00",
      "Characters: Jack Bauer;Meredith Reed",
      "Storyline: Jack tries to expose evidence",
      "Question focus: who does Jack ask to carry the video evidence of the Russian conspiracy towards publication?",
      "Answer focus: Journalist Meredith Reed",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35392",
    "category": "Television",
    "question": "In 24 (Season 8), how does Jack force Charles Logan out of an armoured limousine?",
    "answers": [
      "He throws a smoke grenade inside",
      "He uses a cutting torch on the roof",
      "He pulls the vehicle into a river",
      "He convinces the driver to unlock the doors"
    ],
    "correctAnswer": "He throws a smoke grenade inside",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 22",
      "Day 8 clock hour 13:00",
      "Characters: Jack Bauer;Charles Logan",
      "Storyline: Armoured limousine breach",
      "Question focus: how does Jack force Charles Logan out of an armoured limousine?",
      "Answer focus: He throws a smoke grenade inside",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35393",
    "category": "Television",
    "question": "In 24 (Season 8), how does Jack learn that Russian President Suvarov personally directed the operation?",
    "answers": [
      "He reads a confession in Dana's diary",
      "He hears a telephone conversation through a listening device he planted on Logan",
      "He intercepts Suvarov's daughter at the airport",
      "He receives a handwritten order from CTU"
    ],
    "correctAnswer": "He hears a telephone conversation through a listening device he planted on Logan",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 22",
      "Day 8 clock hour 13:00",
      "Characters: Jack Bauer;Charles Logan;Yuri Suvarov",
      "Storyline: Jack overhears mastermind",
      "Question focus: how does Jack learn that Russian President Suvarov personally directed the operation?",
      "Answer focus: He hears a telephone conversation through a listening device he planted on Logan",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35394",
    "category": "Television",
    "question": "In 24 (Season 8), what does Jack force Jason Pillar to do while preparing his final sniper attack?",
    "answers": [
      "Arrange a helicopter evacuation",
      "Unlock a nuclear launch computer",
      "Stitch up Jack's wound",
      "Interrogate President Taylor"
    ],
    "correctAnswer": "Stitch up Jack's wound",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 23",
      "Day 8 clock hour 14:00",
      "Characters: Jack Bauer;Jason Pillar",
      "Storyline: Pillar forced to sew wound",
      "Question focus: what does Jack force Jason Pillar to do while preparing his final sniper attack?",
      "Answer focus: Stitch up Jack's wound",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35395",
    "category": "Television",
    "question": "In 24 (Season 8), what does Jack record for his daughter before considering an attack on Suvarov?",
    "answers": [
      "A recording of Renee's final telephone call",
      "A farewell message from President Hassan",
      "An audio confession from Dana",
      "A video explaining his actions"
    ],
    "correctAnswer": "A video explaining his actions",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 23",
      "Day 8 clock hour 14:00",
      "Characters: Jack Bauer;Kim Bauer;Yuri Suvarov",
      "Storyline: Jack records farewell evidence",
      "Question focus: what does Jack record for his daughter before considering an attack on Suvarov?",
      "Answer focus: A video explaining his actions",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35396",
    "category": "Television",
    "question": "In 24 (Season 8), what does Jack ask Chloe to do so she will not be treated as his accomplice?",
    "answers": [
      "Shoot him before other agents arrive",
      "Announce that he has fled overseas",
      "Give Suvarov immunity",
      "Destroy the recording of the conspiracy"
    ],
    "correctAnswer": "Shoot him before other agents arrive",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 24",
      "Day 8 clock hour 15:00",
      "Characters: Jack Bauer;Chloe O'Brian",
      "Storyline: Jack asks Chloe to shoot him",
      "Question focus: what does Jack ask Chloe to do so she will not be treated as his accomplice?",
      "Answer focus: Shoot him before other agents arrive",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35397",
    "category": "Television",
    "question": "In 24 (Season 8), what does Charles Logan do after Taylor refuses to sign the treaty and exposes the cover-up?",
    "answers": [
      "He admits his crimes at a press conference",
      "He shoots Jason Pillar and then himself",
      "He flees New York with Suvarov",
      "He takes Chloe hostage at CTU"
    ],
    "correctAnswer": "He shoots Jason Pillar and then himself",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 24",
      "Day 8 clock hour 15:00",
      "Characters: Charles Logan;Jason Pillar;Allison Taylor",
      "Storyline: Logan's final breakdown",
      "Question focus: what does Charles Logan do after Taylor refuses to sign the treaty and exposes the cover-up?",
      "Answer focus: He shoots Jason Pillar and then himself",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  },
  {
    "id": "tv_35398",
    "category": "Television",
    "question": "In 24 (Season 8), what does Jack ask Chloe to do for his family before going into hiding?",
    "answers": [
      "Move them to the Russian embassy",
      "Give Kim a job at CTU",
      "Look after Kim and her family",
      "Tell Kim he will return for the treaty signing"
    ],
    "correctAnswer": "Look after Kim and her family",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 8",
      "24 Day 8",
      "2010",
      "2010s",
      "Programme: 24",
      "Episode 24",
      "Day 8 clock hour 15:00",
      "Characters: Jack Bauer;Chloe O'Brian;Kim Bauer",
      "Storyline: Jack's final request",
      "Question focus: what does Jack ask Chloe to do for his family before going into hiding?",
      "Answer focus: Look after Kim and her family",
      "Viewer storyline",
      "New York storyline",
      "Fox television"
    ]
  }
];
questions.push(...auditAdditions);
const EXPECTED_COUNT = 135;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_11714' || questions[83].id !== 'tv_11797' || questions[questions.length - 1].id !== 'tv_35398') {
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
   q.tags.length < 16 ||
   q.tags.some(tag => !tag) ||
   q.dailyEligible !== true
 )) {
   throw new Error('Incomplete exported question metadata');
 }

 module.exports = questions;
