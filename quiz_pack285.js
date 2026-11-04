
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
       question,
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

 const EXPECTED_COUNT = 84;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_11714' || questions[questions.length - 1].id !== 'tv_11797') {
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
