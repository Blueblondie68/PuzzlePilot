
 // quiz_pack284.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: 24 - Season 7 (Day 7, broadcast 2009)
 // Senate hearing, FBI, Tony Almeida, Dubaku, White House siege,
 // Starkwood bioweapon, Taylor administration and the finale.
 // Seven individually selected specialist tags for each question.
 // No episode-title recall questions.
 // Do not connect in quiz_bank.js until the agreed end-of-session update.
 // Row: question | correct answer | three wrong answers | difficulty | seven specific tags

 const groups = [
   {
     topic: "The New Day, Washington And The FBI",
     facts: `At what time does the storyline of 24 Season 7 begin?|8 am|6 am|1 pm|Midnight|Medium|Day Seven|Eight AM Opening|Real Time Drama|Washington DC|Series Chronology|2009 Premiere|Day Start
 Which American city provides the main setting for 24 Season 7?|Washington DC|Los Angeles|Chicago|Boston|Easy|Washington DC|Federal Capital|FBI Headquarters|White House|Season Seven Setting|Location Change|Day Seven
 What happened to CTU before the events of Season 7?|It was disbanded|It merged with the CIA|It moved to London|It became a military academy|Easy|Counter Terrorist Unit|CTU Closure|Government Reform|Interrogation Controversy|Senate Oversight|Federal Agencies|Season Seven
 At what type of proceeding is Jack Bauer questioned in the opening scene?|A US Senate hearing|A murder trial before a jury|A presidential debate|A military court martial|Easy|Jack Bauer|Senate Hearing|Past Interrogations|Accountability|Blaine Mayer|Congressional Oversight|Season Seven Opening
 Which senator challenges Jack Bauer over his past interrogation methods?|Blaine Mayer|John Keeler|Wayne Palmer|Hal Gardner|Medium|Blaine Mayer|Jack Bauer|Senate Hearing|Torture Debate|Government Oversight|Kurtwood Smith|Political Scrutiny
 Which actress played FBI agent Renee Walker?|Annie Wersching|Janeane Garofalo|Cherry Jones|Kim Raver|Easy|Renee Walker|Annie Wersching|FBI Special Agent|Actor Casting|Jack Bauer Ally|Season Seven Debut|Federal Investigation
 Which FBI agent interrupts the hearing to enlist Jack Bauer's assistance?|Renee Walker|Janis Gold|Erika|Olivia Taylor|Easy|Renee Walker|Jack Bauer|Senate Interruption|FBI Request|Urgent Investigation|Washington DC|Opening Episode
 Which actor portrayed FBI Special Agent in Charge Larry Moss?|Jeffrey Nordling|James Morrison|Rhys Coiro|Bob Gunton|Medium|Larry Moss|Jeffrey Nordling|FBI Supervisor|Actor Casting|Renee Walker Boss|Federal Investigation|Season Seven Cast
 Who played FBI analyst Janis Gold?|Janeane Garofalo|Mary Lynn Rajskub|Sprague Grayden|Ever Carradine|Medium|Janis Gold|Janeane Garofalo|FBI Analyst|Actor Casting|Computer Operations|Chloe O Brian Rivalry|Season Seven
 Which actor portrayed FBI analyst Sean Hillinger?|Rhys Coiro|Carlos Bernard|Jeffrey Nordling|Frank John Hughes|Hard|Sean Hillinger|Rhys Coiro|FBI Analyst|Actor Casting|Internal Betrayal|Erika|Day Seven Cast
 Who is President of the United States during Season 7?|Allison Taylor|Martha Logan|Karen Hayes|Sherry Palmer|Easy|Allison Taylor|Cherry Jones|President|White House|Inaugurated In Redemption|Sangala Policy|Day Seven
 Which actress played President Allison Taylor?|Cherry Jones|Jean Smart|Penny Johnson Jerald|Jayne Atkinson|Medium|Cherry Jones|Allison Taylor|Actor Casting|Woman President|White House|Political Leadership|Season Seven Lead`,
   },
   {
     topic: "Tony Almeida, The CIP Device And The Secret Operation",
     facts: `Which supposedly deceased former CTU agent is revealed to be alive in Season 7?|Tony Almeida|Ryan Chappelle|George Mason|Curtis Manning|Easy|Tony Almeida|Carlos Bernard|Survival Reveal|Season Five Aftermath|Jack Bauer|Former CTU Agent|Day Seven Twist
 Which actor returned to play Tony Almeida?|Carlos Bernard|James Morrison|Roger Cross|Eric Balfour|Easy|Carlos Bernard|Tony Almeida|Actor Return|Former CTU|Covert Mission|Season Seven|Main Cast
 Which computer system is hijacked using the terrorists' CIP device?|Air traffic control|Hospital payroll|University admissions|Bank cash machines only|Medium|CIP Device|Air Traffic Control|Flight Safety|Computer Intrusion|Federal Infrastructure|Tony Almeida|Terrorist Technology
 Which kidnapped specialist is forced to finish the CIP device?|Michael Latham|Doug Knowles|Ryan Burnett|Alan Wilson|Hard|Michael Latham|CIP Device|Kidnapped Engineer|Computer Override|Terrorist Demands|Air Traffic Control|Early Episodes
 Which two former CTU colleagues secretly work with Tony to uncover government corruption?|Bill Buchanan and Chloe O'Brian|Morris O'Brian and Edgar Stiles|Ryan Chappelle and Nina Myers|Curtis Manning and Michelle Dessler|Easy|Bill Buchanan|Chloe O Brian|Tony Almeida|Underground CTU|Covert Team|Government Corruption|Secret Alliance
 Who is the former CTU director organising the undercover operation with Tony?|Bill Buchanan|Erin Driscoll|George Mason|Ryan Chappelle|Easy|Bill Buchanan|James Morrison|Underground CTU|Secret Command|Tony Almeida|Chloe O Brian|Day Seven
 Which former CTU computer analyst helps the covert team access federal systems?|Chloe O'Brian|Janis Gold|Sarah Gavin|Paula Schaeffer|Easy|Chloe O Brian|Mary Lynn Rajskub|Computer Intelligence|Underground CTU|Bill Buchanan|Tony Almeida|Covert Support
 Which man leads the mercenary team that Jack and Tony infiltrate?|David Emerson|Jonas Hodges|Ike Dubaku|Ryan Burnett|Medium|David Emerson|Mercenary Leader|Tony Almeida Past|Jack Bauer Undercover|Sangala Operation|Matobo Kidnapping|CIP Hunt
 Which Sangalan political leader is kidnapped as part of the mission to recover the CIP device?|Ule Matobo|Benjamin Juma|Ike Dubaku|Noah Daniels|Medium|Ule Matobo|Sangalan Prime Minister|Hostage Abduction|CIP Device|Jack Bauer|Tony Almeida|Government Rescue
 Who is Ule Matobo's wife, captured alongside him during the mission?|Alama Matobo|Marika Donoso|Olivia Taylor|Samantha Roth|Hard|Alama Matobo|Ule Matobo|Married Couple|Safe Room|Sangalan Politics|Kidnapping|Covert Operation
 What extreme deception does Jack use to convince Emerson that he has killed Renee Walker?|He shoots her to simulate her death and arranges a rescue|He places her on a flight abroad|He gives her a fake police badge|He stages a car crash with no one inside|Medium|Jack Bauer|Renee Walker|Staged Shooting|Buried Alive|Chloe O Brian|Bill Buchanan|Undercover Deception
 Which criminal ultimately receives Matobo before Jack and Tony recover the CIP device?|Ike Dubaku|Jonas Hodges|Alan Wilson|Christopher Henderson|Medium|Ike Dubaku|Ule Matobo|CIP Device|Sangala Insurgency|Kidnapping Exchange|Jack Bauer|Tony Almeida`,
   },
   {
     topic: "Dubaku, The First Gentleman And FBI Betrayal",
     facts: `Which Sangalan colonel uses the CIP device to blackmail President Taylor?|Ike Dubaku|Benjamin Juma|Ule Matobo|Jonas Hodges|Easy|Ike Dubaku|Sangalan Colonel|CIP Device|Government Blackmail|Allison Taylor|Terrorist Conspiracy|Day Seven
 Which government infrastructure facility is threatened with a disastrous chemical release using the CIP device?|A chemical plant|A naval shipyard|A television studio|A sports arena|Medium|CIP Device|Chemical Plant|Industrial Sabotage|Public Safety|Ike Dubaku|Infrastructure Attack|Technical Specialist
 Whose kidnapping is intended to force President Taylor to change policy towards Sangala?|Her husband Henry Taylor|Her chief of staff Ethan Kanin|Her daughter Olivia Taylor|Her son Roger Taylor|Easy|Henry Taylor|First Gentleman|Allison Taylor|Hostage Blackmail|Sangala Policy|Ike Dubaku|Kidnapping
 Who is the First Gentleman of the United States during Day 7?|Henry Taylor|Ethan Kanin|Tim Woods|Blaine Mayer|Easy|Henry Taylor|Colm Feore|First Gentleman|Allison Taylor Husband|Roger Taylor Father|White House Family|Season Seven
 What was Henry Taylor investigating about his son Roger?|Whether Roger's reported suicide concealed a murder|Whether Roger had won the election|Whether Roger was secretly a CTU agent|Whether Roger had joined the military|Medium|Henry Taylor|Roger Taylor|Suspicious Death|Staged Suicide|Government Conspiracy|Family Grief|Political Cover Up
 Who was Roger Taylor's former girlfriend and a witness in the investigation?|Samantha Roth|Marika Donoso|Erika|Cara Bowden|Medium|Samantha Roth|Roger Taylor|Henry Taylor|Evidence Witness|Financial Corruption|Assassination Cover Up|Redemption Continuity
 Which Secret Service bodyguard is revealed to have murdered Roger Taylor?|Brian Gedge|Aaron Pierce|Edward Vossler|Tim Woods|Hard|Brian Gedge|Secret Service|Roger Taylor Murder|Henry Taylor|Staged Suicide|Corrupt Bodyguard|Conspiracy
 Which Secret Service agent helps Dubaku's accomplices capture Henry Taylor?|Edward Vossler|Aaron Pierce|Curtis Manning|Bill Buchanan|Medium|Edward Vossler|Henry Taylor|Secret Service Traitor|Ike Dubaku|Hostage Transport|Jack Bauer|Renee Walker
 Which woman does Dubaku date in Washington while hiding his true identity?|Marika Donoso|Alama Matobo|Jane Saunders|Samantha Roth|Medium|Marika Donoso|Ike Dubaku|False Identity Samuel|Romantic Relationship|Rosa Donoso|Fugitive Colonel|Washington DC
 How does Marika Donoso die after helping the FBI track Dubaku?|In a car crash during the chase|In a helicopter crash|From a poisoned injection|In the White House attack|Medium|Marika Donoso|Ike Dubaku|Car Chase|FBI Operation|Tragic Death|Rosa Donoso|Attempted Capture
 Which FBI analyst is discovered to be secretly helping Dubaku's network?|Sean Hillinger|Janis Gold|Renee Walker|Larry Moss|Medium|Sean Hillinger|FBI Mole|Ike Dubaku|Corrupt Analyst|Confidential Intelligence|Agency Breach|Rhys Coiro
 What does Jack recover from the injured Dubaku that identifies accomplices inside the government?|A data chip containing names|A passport full of visas|A handwritten confession|A sealed DNA kit|Medium|Ike Dubaku|Accomplice List|Implanted Data Chip|Corrupt Officials|Government Infiltration|Jack Bauer|FBI Evidence`,
   },
   {
     topic: "General Juma, The White House Siege And Sacrifice",
     facts: `Which Sangalan general leads the assault on the White House?|Benjamin Juma|Ike Dubaku|Ule Matobo|Phillip Bauer|Easy|Benjamin Juma|White House Assault|Sangalan Commandos|Rebel General|Hostage Crisis|President Taylor|Day Seven
 Which actor played General Benjamin Juma in Season 7?|Tony Todd|Hakeem Kae-Kazim|Isaach de Bankole|Jon Voight|Medium|Tony Todd|Benjamin Juma|Actor Casting|Sangalan Warlord|White House Siege|Redemption Return|Guest Cast
 How do Juma's soldiers approach the White House before entering it?|Underwater through access routes|By landing on the roof in a helicopter|By posing as TV camera operators|Through a tunnel from the Capitol|Medium|General Juma|Underwater Infiltration|White House Security|Sangalan Soldiers|Surprise Assault|Washington DC|Hostage Takeover
 Which US president is taken hostage during the White House assault?|Allison Taylor|Charles Logan|Noah Daniels|Wayne Palmer|Easy|Allison Taylor|White House Hostage|Benjamin Juma|Sangalan Assault|Presidential Security|Government Crisis|Season Seven
 Which member of the Taylor family is used to pressure Allison into leaving her secure room?|Olivia Taylor|Roger Taylor|Henry Taylor|Martha Logan|Medium|Olivia Taylor|Allison Taylor|Secure Room|Hostage Leverage|White House Siege|Mother Daughter|General Juma
 Which veteran Secret Service agent protects Olivia Taylor during the siege?|Aaron Pierce|Brian Gedge|Edward Vossler|Jack Bauer|Medium|Aaron Pierce|Olivia Taylor|Secret Service|Glenn Morshower|White House Siege|Protective Duty|Presidential Family
 Who sacrifices himself by triggering an explosion during the White House rescue?|Bill Buchanan|Larry Moss|Tony Almeida|Ethan Kanin|Easy|Bill Buchanan|White House Explosion|Sacrifice|Jack Bauer Ally|General Juma|Presidential Rescue|Final Mission
 Who personally shoots General Juma during the final moments of the White House siege?|Jack Bauer|Renee Walker|Bill Buchanan|Larry Moss|Easy|Jack Bauer|Benjamin Juma Death|Hostage Rescue|White House Assault|Counterterrorism|Shooting|Day Seven Action
 What is the job of Ryan Burnett, who is questioned over the next attack?|Senator Mayer's chief of staff|CTU director|White House physician|Secretary of Defense|Medium|Ryan Burnett|Blaine Mayer|Senate Staff|Corrupt Insider|White House Interrogation|Conspiracy Details|Jack Bauer
 Which mercenary murders Ryan Burnett and frames Jack Bauer?|John Quinn|Greg Seaton|Robert Galvez|David Emerson|Medium|John Quinn|Ryan Burnett Murder|Jack Bauer Frame Up|Starkwood|Mercenary Assassin|Hospital Attack|Government Conspiracy
 Which senator is killed at his home after helping Jack investigate Starkwood?|Blaine Mayer|John Keeler|James Prescott|Hal Gardner|Easy|Blaine Mayer|John Quinn|Senator Murder|Starkwood Inquiry|Jack Bauer|Political Reform|Conspiracy Silencing
 Which company employing John Quinn draws Jack into a new weapons conspiracy?|Starkwood|McLennan-Forster|BXJ Technologies|Omicron International|Easy|Starkwood|John Quinn|Private Military Contractor|Bioweapons|Jonas Hodges|Secret Conspiracy|Defence Industry`,
   },
   {
     topic: "Starkwood, Jonas Hodges And Jack's Infection",
     facts: `Which businessman leads the private military company Starkwood?|Jonas Hodges|Alan Wilson|Ethan Kanin|Doug Knowles|Easy|Jonas Hodges|Starkwood Leader|Private Military Company|Sangala Conspiracy|Biological Weapons|Corporate Antagonist|Day Seven
 Which actor portrayed Starkwood boss Jonas Hodges?|Jon Voight|Bob Gunton|Will Patton|Kurtwood Smith|Medium|Jon Voight|Jonas Hodges|Actor Casting|Starkwood|Redemption Crossover|Season Seven Villain|American Actor
 What class of biological agent does Starkwood plan to deploy in the United States?|A prion-based pathogen|A nuclear isotope|A synthetic sleeping drug|A corrosive acid|Medium|Starkwood Bioweapon|Prion Pathogen|Biological Warfare|Military Contractor|Infectious Agent|Season Seven Threat|Sangala Testing
 In which fictional African country did Starkwood test its biological weapon on civilians?|Sangala|Kundu|Genosha|Wakanda|Medium|Sangala|Starkwood|Human Testing|Bioweapon Research|General Juma|Civilian Victims|Jonas Hodges
 How does Jack Bauer become exposed to Starkwood's deadly biological agent?|He stops to seal a leaking canister|He is injected during his Senate hearing|He drinks contaminated water at the White House|He receives it in an envelope from Tony|Medium|Jack Bauer|Leaking Canister|Starkwood Shipment|Pathogen Exposure|Freight Yard|Hazmat Assessment|Health Crisis
 What neurological symptoms develop as Jack's infection worsens?|Seizures and worsening cognitive problems|Temporary colour blindness only|Sudden improved memory|Instant loss of hearing with no other symptoms|Medium|Jack Bauer|Prion Disease|Seizures|Neurological Deterioration|Biological Exposure|Medical Crisis|Dementia Symptoms
 Which medical organisation sends specialists to examine Jack after his exposure?|CDC|NASA|Federal Reserve|Interpol|Easy|CDC|Jack Bauer|Biological Exposure|Hazmat Team|Medical Assessment|Pathogen Testing|Health Emergency
 Which Starkwood executive assists Tony in locating the biological weapons before being murdered?|Doug Knowles|Ryan Burnett|Sean Hillinger|Martin Collier|Hard|Doug Knowles|Starkwood Chairman|Tony Almeida|Weapons Search|Jonas Hodges|Whistleblowing|Executive Murder
 Which of Hodges's employees pretends to betray Starkwood but actually leads the FBI into a trap?|Greg Seaton|John Quinn|David Emerson|Alan Wilson|Hard|Greg Seaton|Jonas Hodges Assistant|False Defector|FBI Trap|Starkwood Compound|Tony Almeida|Betrayal
 What does Hodges threaten to fire at American cities to prevent an attack on Starkwood?|Missiles carrying the pathogen|Nuclear artillery shells|Conventional rockets with no warheads|Drones carrying fire extinguishers|Medium|Jonas Hodges|Missile Threat|Prion Weapon|Starkwood|Presidential Blackmail|Civilian Targets|Air Strike
 Who destroys Starkwood's missiles by setting explosives at the site?|Tony Almeida|Larry Moss|Jonas Hodges|Blaine Mayer|Medium|Tony Almeida|Starkwood Missiles|Explosive Charges|Sabotage|Presidential Crisis|Weapons Destruction|Covert Operation
 Which family member is suggested as a possible source for experimental treatment of Jack's infection?|His daughter Kim Bauer|His father Phillip Bauer|His brother Graem Bauer|His nephew Josh Bauer|Easy|Jack Bauer|Kim Bauer|Experimental Therapy|Stem Cell Treatment|Family Genetic Match|Infection Crisis|Father Daughter`,
   },
   {
     topic: "Tony's Betrayal, The Subway Plot And Alan Wilson",
     facts: `Which FBI supervisor is murdered by Tony Almeida after Starkwood's defeat?|Larry Moss|Ryan Burnett|Ethan Kanin|Tim Woods|Easy|Larry Moss|Tony Almeida Betrayal|FBI Death|Starkwood Aftermath|Robert Galvez|Federal Agent|Day Seven Twist
 Which Starkwood operative steals a surviving biological weapon canister?|Robert Galvez|John Quinn|Ryan Burnett|Doug Knowles|Medium|Robert Galvez|Bioweapon Canister|Starkwood Escape|Tony Almeida|Last Pathogen|FBI Pursuit|Mercenary
 Which woman works closely with Tony after he reveals his role in the conspiracy?|Cara Bowden|Olivia Taylor|Marika Donoso|Janis Gold|Medium|Cara Bowden|Tony Almeida|Secret Society|Co Conspirator|Biological Attack|Criminal Partnership|FBI Hunt
 Who played conspiracy operative Cara Bowden?|Amy Price-Francis|Ever Carradine|Enuka Okuma|Sprague Grayden|Hard|Cara Bowden|Amy Price Francis|Actor Casting|Tony Almeida Partner|Secret Organisation|Day Seven Guest|Bioweapon Plot
 Which group of people does Tony plan to blame for a biological attack using fabricated evidence?|Muslim Americans|Canadian tourists|FBI trainees|Retired CTU directors|Medium|Tony Almeida|False Blame|Fabricated Extremism|Scapegoating|Bioweapon Attack|Jibraan Al Zarian|Conspiracy Strategy
 What is the name of the innocent man coerced into appearing responsible for the subway attack?|Jibraan Al-Zarian|Hamid Al-Zarian|Michael Latham|Ryan Burnett|Medium|Jibraan Al Zarian|Subway Plot|False Confession|Coerced Video|Brother Held Hostage|Tony Almeida|Falsely Accused Civilian
 Which relative of Jibraan is held to compel his participation in the subway plot?|His brother Hamid|His father Ule|His daughter Teri|His wife Marika|Medium|Hamid Al Zarian|Jibraan Al Zarian|Brother Held Hostage|Coercion|Metro Station|Tony Almeida|Subway Attack
 Where is the remaining pathogen canister planted to cause mass casualties?|A Washington Metro train|An airport luggage carousel|A White House fountain|A hotel lift|Easy|Washington Metro|Prion Canister|Subway Attack|Cara Bowden|Jibraan Al Zarian|Terrorist Plot|Public Transport
 Who prevents the pathogen device from harming passengers on the Metro train?|Jack Bauer|Jonas Hodges|Larry Moss|Ethan Kanin|Easy|Jack Bauer|Subway Rescue|Washington Metro|Bioweapon Canister|Jibraan Al Zarian|Prevented Attack|Last Minute Intervention
 Whose safety is used to make Jack secure Tony's release from FBI custody?|Kim Bauer|Olivia Taylor|Chloe O'Brian|Allison Taylor|Easy|Kim Bauer|Jack Bauer|Hostage Blackmail|Tony Almeida Release|Airport Surveillance|Cara Bowden|Father Daughter
 Which businessman does Tony really want to kill for his part in the conspiracy behind Michelle Dessler's death?|Alan Wilson|Jonas Hodges|Doug Knowles|Ethan Kanin|Medium|Alan Wilson|Tony Almeida Revenge|Michelle Dessler|Day Five Conspiracy|Charles Logan|Secret Group|Personal Motivation
 Who ultimately stops Tony from killing Alan Wilson in the Season 7 finale?|Jack Bauer|Renee Walker|Kim Bauer|Aaron Pierce|Medium|Tony Almeida|Jack Bauer|Alan Wilson|Failed Revenge|Final Confrontation|Arrest|Season Seven Ending`,
   },
   {
     topic: "The Taylor Family, Olivia And The Closing Decisions",
     facts: `Which of President Taylor's children becomes involved in the White House's political decisions?|Olivia Taylor|Roger Taylor|Jane Saunders|Kim Bauer|Easy|Olivia Taylor|Allison Taylor Daughter|White House Staff|Presidential Family|Political Influence|Season Seven|First Daughter
 Which actress played Olivia Taylor?|Sprague Grayden|Cherry Jones|Carly Pope|Janeane Garofalo|Medium|Olivia Taylor|Sprague Grayden|Actor Casting|First Daughter|Political Adviser|White House|Season Seven Cast
 Who serves as Allison Taylor's chief of staff before Olivia takes the position?|Ethan Kanin|Tom Lennox|Mike Novick|Tim Woods|Medium|Ethan Kanin|Bob Gunton|White House Chief Of Staff|Allison Taylor|Olivia Taylor|Internal Politics|Resignation
 Which actor played chief of staff Ethan Kanin?|Bob Gunton|Colm Feore|Jeffrey Nordling|Kurtwood Smith|Medium|Ethan Kanin|Bob Gunton|Actor Casting|White House|Allison Taylor Adviser|Chief Of Staff|Season Seven
 Who does Olivia Taylor seek revenge against for her brother Roger's death?|Jonas Hodges|Tony Almeida|Ike Dubaku|Ule Matobo|Medium|Olivia Taylor|Jonas Hodges|Roger Taylor Murder|Personal Revenge|Hitman Plot|Political Scandal|Family Grief
 Which intermediary does Olivia contact to arrange the attempted murder of Jonas Hodges?|Martin Collier|Ryan Burnett|Sean Hillinger|Michael Latham|Hard|Martin Collier|Olivia Taylor|Hired Killer Arrangement|Jonas Hodges|Assassination Conspiracy|White House Scandal|Secret Calls
 How is Jonas Hodges killed while being transferred into witness protection?|A bomb explodes in his vehicle|He is shot at a courtroom|He is poisoned during a broadcast|He dies from the prion infection|Medium|Jonas Hodges Death|Car Bomb|Witness Protection|Olivia Taylor|Martin Collier|Assassination|Conspiracy Aftermath
 Which adviser helps uncover Olivia's involvement in Hodges's murder by obtaining call records?|Ethan Kanin|Larry Moss|Bill Buchanan|Ryan Burnett|Medium|Ethan Kanin|Olivia Taylor|Phone Records|Jonas Hodges Murder|Aaron Pierce|Evidence|White House Investigation
 What does President Taylor do after learning her daughter helped arrange Hodges's death?|She reports Olivia to the Justice Department|She burns the evidence and pardons her|She makes Olivia vice president|She sends Olivia to work for CTU|Easy|Allison Taylor|Olivia Taylor|Justice Department|Family Loyalty Conflict|Political Accountability|Arrest|Season Seven Finale
 What is the first name of Kim Bauer's daughter, introduced through Season 7's family storyline?|Teri|Audrey|Michelle|Jane|Easy|Teri|Kim Bauer|Jack Bauer Granddaughter|Family Continuity|Named After Teri Bauer|Next Generation|Season Seven
 Which FBI agent considers coercive interrogation of Alan Wilson as Day 7 draws to a close?|Renee Walker|Janis Gold|Larry Moss|Olivia Taylor|Medium|Renee Walker|Alan Wilson|Interrogation Dilemma|Jack Bauer Influence|Moral Conflict|FBI Custody|Finale
 What treatment is prepared in an attempt to save Jack's life as the seventh season ends?|Experimental stem cell therapy using Kim Bauer as a donor|A blood transfusion from Tony Almeida|A vaccine supplied by Jonas Hodges|An emergency heart transplant|Medium|Jack Bauer|Kim Bauer|Stem Cell Treatment|Experimental Therapy|Induced Coma|Prion Infection|Season Seven Cliffhanger`,
   },
 ];

 const FIRST_ID = 11630;
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
         '24 Season 7', '24 Day 7', '2009', '2000s',
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
 if (questions[0].id !== 'tv_11630' || questions[questions.length - 1].id !== 'tv_11713') {
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
