
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
       question: question.includes('24') ? question : 'In 24 (Season 7), ' + question.charAt(0).toLowerCase() + question.slice(1),
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

 
// STORYLINE AUDIT — 21 November 2026, 24 Season 7
// Original IDs tv_11630–tv_11713 preserved. Episode-based storyline additions to fill viewer-recognisable gaps.
// Grounding: https://en.wikipedia.org/wiki/24_season_7 (episode-by-episode synopses)
// Corroboration: https://www.tvmaze.com/shows/167/24/episodeguide
const auditAdditions = [
  {
    "id": "tv_35297",
    "category": "Television",
    "question": "In 24 (Season 7), what happens to a contact Jack and Renee visit while seeking Tony Almeida?",
    "answers": [
      "A sniper kills him before he can speak",
      "He is arrested by the Secret Service",
      "He disappears into witness protection",
      "He dies in an accident while fleeing"
    ],
    "correctAnswer": "A sniper kills him before he can speak",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 01",
      "Day 7 clock hour 08:00",
      "Characters: Jack Bauer;Renee Walker;Tony Almeida",
      "Storyline: Contact killed before questioning",
      "Question focus: what happens to a contact Jack and Renee visit while seeking Tony Almeida?",
      "Answer focus: A sniper kills him before he can speak",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35298",
    "category": "Television",
    "question": "In 24 (Season 7), what is Tony Almeida originally trying to demonstrate by taking over air traffic control?",
    "answers": [
      "He can shut down every military radar",
      "The terrorists can endanger civilian aircraft",
      "The FBI has been selling passenger data",
      "A presidential flight plan has been stolen"
    ],
    "correctAnswer": "The terrorists can endanger civilian aircraft",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 01",
      "Day 7 clock hour 08:00",
      "Characters: Tony Almeida;Michael Latham",
      "Storyline: CIP demonstration",
      "Question focus: what is Tony Almeida originally trying to demonstrate by taking over air traffic control?",
      "Answer focus: The terrorists can endanger civilian aircraft",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35299",
    "category": "Television",
    "question": "In 24 (Season 7), why does Jack suspect the FBI investigation has been compromised?",
    "answers": [
      "The FBI suddenly closes the case against Tony",
      "An investigator admits tampering with medical tests",
      "A sniper reaches a secret meeting almost as quickly as the agents",
      "Renee receives a false order from the President"
    ],
    "correctAnswer": "A sniper reaches a secret meeting almost as quickly as the agents",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 02",
      "Day 7 clock hour 09:00",
      "Characters: Jack Bauer;Renee Walker;Alan Tanner",
      "Storyline: Suspicion of FBI mole",
      "Question focus: why does Jack suspect the FBI investigation has been compromised?",
      "Answer focus: A sniper reaches a secret meeting almost as quickly as the agents",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35300",
    "category": "Television",
    "question": "In 24 (Season 7), what does Tony secretly give Jack during their confrontation in the FBI interrogation room?",
    "answers": [
      "The keys to a safe-deposit box",
      "A handwritten letter from Bill Buchanan",
      "A USB drive containing the CIP plans",
      "A coded telephone message"
    ],
    "correctAnswer": "A coded telephone message",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 03",
      "Day 7 clock hour 10:00",
      "Characters: Tony Almeida;Jack Bauer",
      "Storyline: Tony's coded message",
      "Question focus: what does Tony secretly give Jack during their confrontation in the FBI interrogation room?",
      "Answer focus: A coded telephone message",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35301",
    "category": "Television",
    "question": "In 24 (Season 7), why does FBI analyst Sean Hillinger access restricted flight information?",
    "answers": [
      "He is checking on his wife's endangered flight",
      "He is tracing a fugitive on an aircraft",
      "He wants to find Tony's travel history",
      "He is searching for a secret CIA charter"
    ],
    "correctAnswer": "He is checking on his wife's endangered flight",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 03",
      "Day 7 clock hour 10:00",
      "Characters: Sean Hillinger;Janis Gold",
      "Storyline: Unauthorised flight check",
      "Question focus: why does FBI analyst Sean Hillinger access restricted flight information?",
      "Answer focus: He is checking on his wife's endangered flight",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35302",
    "category": "Television",
    "question": "In 24 (Season 7), how do Jack and Tony make their dramatic escape from the FBI parking structure?",
    "answers": [
      "They steal a police helicopter from the roof",
      "They drive a car off an upper level into a vehicle below",
      "They escape through a maintenance tunnel",
      "They hide in an ambulance leaving the building"
    ],
    "correctAnswer": "They drive a car off an upper level into a vehicle below",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 03",
      "Day 7 clock hour 10:00",
      "Characters: Jack Bauer;Tony Almeida;Chloe O'Brian",
      "Storyline: Parking-garage escape",
      "Question focus: how do Jack and Tony make their dramatic escape from the FBI parking structure?",
      "Answer focus: They drive a car off an upper level into a vehicle below",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35303",
    "category": "Television",
    "question": "In 24 (Season 7), who helped revive Tony after he was thought to have died in the events of Season 5?",
    "answers": [
      "Bill Buchanan",
      "Larry Moss",
      "David Emerson",
      "Ike Dubaku"
    ],
    "correctAnswer": "David Emerson",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 04",
      "Day 7 clock hour 11:00",
      "Characters: Tony Almeida;David Emerson",
      "Storyline: Explanation for Tony's survival",
      "Question focus: who helped revive Tony after he was thought to have died in the events of Season 5?",
      "Answer focus: David Emerson",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35304",
    "category": "Television",
    "question": "In 24 (Season 7), which captive does Renee Walker personally subject to harsh interrogation to learn Emerson's target?",
    "answers": [
      "Michael Latham",
      "Ryan Burnett",
      "Sean Hillinger",
      "Alan Tanner"
    ],
    "correctAnswer": "Alan Tanner",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 04",
      "Day 7 clock hour 11:00",
      "Characters: Renee Walker;Alan Tanner",
      "Storyline: Renee interrogates sniper",
      "Question focus: which captive does Renee Walker personally subject to harsh interrogation to learn Emerson's target?",
      "Answer focus: Alan Tanner",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35305",
    "category": "Television",
    "question": "In 24 (Season 7), how do Jack and Emerson force the Matobos out of their reinforced safe room?",
    "answers": [
      "They pump improvised toxic fumes through its ventilation",
      "They cut the building's main water supply",
      "They threaten to arrest Matobo's bodyguards",
      "They use a cutting torch to open the door"
    ],
    "correctAnswer": "They pump improvised toxic fumes through its ventilation",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 05",
      "Day 7 clock hour 12:00",
      "Characters: Jack Bauer;Ule Matobo;Alama Matobo",
      "Storyline: Matobo safe-room escape",
      "Question focus: how do Jack and Emerson force the Matobos out of their reinforced safe room?",
      "Answer focus: They pump improvised toxic fumes through its ventilation",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35306",
    "category": "Television",
    "question": "In 24 (Season 7), what does Henry Taylor's own Secret Service bodyguard do to stop his investigation?",
    "answers": [
      "He locks Henry inside the presidential bunker",
      "He poisons Henry with a paralysing agent",
      "He sends Henry abroad under a false name",
      "He has Henry arrested for treason"
    ],
    "correctAnswer": "He poisons Henry with a paralysing agent",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 05",
      "Day 7 clock hour 12:00",
      "Characters: Henry Taylor;Brian Gedge",
      "Storyline: Henry betrayed by bodyguard",
      "Question focus: what does Henry Taylor's own Secret Service bodyguard do to stop his investigation?",
      "Answer focus: He poisons Henry with a paralysing agent",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35307",
    "category": "Television",
    "question": "In 24 (Season 7), how do Bill Buchanan and Chloe O'Brian rescue Renee after Jack's staged execution?",
    "answers": [
      "They retrieve her from the river",
      "They extract her from a prison transport",
      "They dig her out of the shallow grave",
      "They help her escape from a police station"
    ],
    "correctAnswer": "They dig her out of the shallow grave",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 06",
      "Day 7 clock hour 13:00",
      "Characters: Renee Walker;Bill Buchanan;Chloe O'Brian",
      "Storyline: Renee buried alive",
      "Question focus: how do Bill Buchanan and Chloe O'Brian rescue Renee after Jack's staged execution?",
      "Answer focus: They dig her out of the shallow grave",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35308",
    "category": "Television",
    "question": "In 24 (Season 7), what does Brian Gedge intend to make investigators believe about Samantha Roth's killing?",
    "answers": [
      "A burglar murdered her during a robbery",
      "Roger Taylor was secretly still alive",
      "A Sangalan assassin killed both witnesses",
      "Henry murdered her before Gedge apparently killed himself"
    ],
    "correctAnswer": "Henry murdered her before Gedge apparently killed himself",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 06",
      "Day 7 clock hour 13:00",
      "Characters: Brian Gedge;Henry Taylor;Samantha Roth",
      "Storyline: False murder-suicide plot",
      "Question focus: what does Brian Gedge intend to make investigators believe about Samantha Roth's killing?",
      "Answer focus: Henry murdered her before Gedge apparently killed himself",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35309",
    "category": "Television",
    "question": "In 24 (Season 7), how does Henry Taylor finally overcome Brian Gedge after recovering from the paralysing drug?",
    "answers": [
      "He kills Gedge in a struggle",
      "He escapes through the bedroom window",
      "He convinces Gedge to surrender to police",
      "He traps Gedge in a locked garage"
    ],
    "correctAnswer": "He kills Gedge in a struggle",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 06",
      "Day 7 clock hour 13:00",
      "Characters: Henry Taylor;Brian Gedge",
      "Storyline: Henry resists his attacker",
      "Question focus: how does Henry Taylor finally overcome Brian Gedge after recovering from the paralysing drug?",
      "Answer focus: He kills Gedge in a struggle",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35310",
    "category": "Television",
    "question": "In 24 (Season 7), what happens to the lead technician who tries to stop the toxic release at the chemical plant?",
    "answers": [
      "He is abducted by Dubaku's soldiers",
      "He dies while containing the gas",
      "He escapes with the CIP device",
      "He is arrested for aiding the attackers"
    ],
    "correctAnswer": "He dies while containing the gas",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 07",
      "Day 7 clock hour 14:00",
      "Characters: Chemical plant technician;Ike Dubaku;Janis Gold",
      "Storyline: Technician's sacrifice",
      "Question focus: what happens to the lead technician who tries to stop the toxic release at the chemical plant?",
      "Answer focus: He dies while containing the gas",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35311",
    "category": "Television",
    "question": "In 24 (Season 7), how does Michael Latham die after the CIP device is recovered from Dubaku's operation?",
    "answers": [
      "He is shot by a Secret Service agent",
      "He dies from the chemical-plant fumes",
      "A bomb planted on him detonates",
      "He crashes a car while escaping"
    ],
    "correctAnswer": "A bomb planted on him detonates",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 07",
      "Day 7 clock hour 14:00",
      "Characters: Michael Latham;Ike Dubaku",
      "Storyline: Kidnapped technician killed",
      "Question focus: how does Michael Latham die after the CIP device is recovered from Dubaku's operation?",
      "Answer focus: A bomb planted on him detonates",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35312",
    "category": "Television",
    "question": "In 24 (Season 7), whose family does Renee Walker threaten to force Secret Service agent Edward Vossler to reveal Henry's location?",
    "answers": [
      "Vossler's elderly parents",
      "The Matobos and their guards",
      "Samantha Roth's relatives",
      "Vossler's wife and child"
    ],
    "correctAnswer": "Vossler's wife and child",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 08",
      "Day 7 clock hour 15:00",
      "Characters: Renee Walker;Edward Vossler;Jack Bauer",
      "Storyline: Renee threatens Vossler family",
      "Question focus: whose family does Renee Walker threaten to force Secret Service agent Edward Vossler to reveal Henry's location?",
      "Answer focus: Vossler's wife and child",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35313",
    "category": "Television",
    "question": "In 24 (Season 7), what deception is used during the attempted exchange for the kidnapped Henry Taylor?",
    "answers": [
      "A man impersonating Ule Matobo is sent as a decoy",
      "A fake presidential convoy is sent",
      "Tony impersonates the First Gentleman",
      "The CIA sends an empty prisoner van"
    ],
    "correctAnswer": "A man impersonating Ule Matobo is sent as a decoy",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 08",
      "Day 7 clock hour 15:00",
      "Characters: Henry Taylor;Ule Matobo;Ike Dubaku",
      "Storyline: Failed decoy exchange",
      "Question focus: what deception is used during the attempted exchange for the kidnapped Henry Taylor?",
      "Answer focus: A man impersonating Ule Matobo is sent as a decoy",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35314",
    "category": "Television",
    "question": "In 24 (Season 7), under which false first name has Ike Dubaku been dating Marika Donoso?",
    "answers": [
      "David",
      "Samuel",
      "Martin",
      "Michael"
    ],
    "correctAnswer": "Samuel",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 09",
      "Day 7 clock hour 16:00",
      "Characters: Ike Dubaku;Marika Donoso;Rosa Donoso",
      "Storyline: Dubaku's assumed name",
      "Question focus: under which false first name has Ike Dubaku been dating Marika Donoso?",
      "Answer focus: Samuel",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35315",
    "category": "Television",
    "question": "In 24 (Season 7), why is Jack's attempt to follow Marika and Dubaku suddenly interrupted by police?",
    "answers": [
      "Jack has been reported for stealing an ambulance",
      "A presidential motorcade blocks the route",
      "The FBI mole has alerted the authorities to their vehicle",
      "Marika calls police to report a kidnapping"
    ],
    "correctAnswer": "The FBI mole has alerted the authorities to their vehicle",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 09",
      "Day 7 clock hour 16:00",
      "Characters: Jack Bauer;Renee Walker;Sean Hillinger",
      "Storyline: Mole disrupts surveillance",
      "Question focus: why is Jack's attempt to follow Marika and Dubaku suddenly interrupted by police?",
      "Answer focus: The FBI mole has alerted the authorities to their vehicle",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35316",
    "category": "Television",
    "question": "In 24 (Season 7), how does Marika stop Dubaku's car while he tries to escape with her?",
    "answers": [
      "She shoots out its tyres",
      "She cuts the engine wiring",
      "She pulls the emergency brake on a bridge",
      "She covers the driver's face, causing a crash"
    ],
    "correctAnswer": "She covers the driver's face, causing a crash",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 10",
      "Day 7 clock hour 17:00",
      "Characters: Marika Donoso;Ike Dubaku",
      "Storyline: Marika sacrifices herself",
      "Question focus: how does Marika stop Dubaku's car while he tries to escape with her?",
      "Answer focus: She covers the driver's face, causing a crash",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35317",
    "category": "Television",
    "question": "In 24 (Season 7), what does FBI mole Sean Hillinger do to his colleague Erika to conceal his betrayal?",
    "answers": [
      "He kills her and tries to frame her as the mole",
      "He persuades her to flee overseas",
      "He steals her identification to enter a prison",
      "He hides her in a safe house"
    ],
    "correctAnswer": "He kills her and tries to frame her as the mole",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 10",
      "Day 7 clock hour 17:00",
      "Characters: Sean Hillinger;Erika;Janis Gold",
      "Storyline: Sean tries to frame Erika",
      "Question focus: what does FBI mole Sean Hillinger do to his colleague Erika to conceal his betrayal?",
      "Answer focus: He kills her and tries to frame her as the mole",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35318",
    "category": "Television",
    "question": "In 24 (Season 7), what does Jack ask Chloe to remove from the recovered list of Dubaku's collaborators?",
    "answers": [
      "Senator Mayer's name",
      "Ryan Burnett's name",
      "Henry Taylor's name",
      "Larry Moss's name"
    ],
    "correctAnswer": "Ryan Burnett's name",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 11",
      "Day 7 clock hour 18:00",
      "Characters: Jack Bauer;Chloe O'Brian;Ryan Burnett",
      "Storyline: Concealed name on list",
      "Question focus: what does Jack ask Chloe to remove from the recovered list of Dubaku's collaborators?",
      "Answer focus: Ryan Burnett's name",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35319",
    "category": "Television",
    "question": "In 24 (Season 7), how does Renee first discover the Sangalan commandos' next operation?",
    "answers": [
      "She intercepts a message from Allison Taylor",
      "She finds a hidden map at FBI headquarters",
      "She follows an assassin from Dubaku's hospital room to the waterfront",
      "She receives an anonymous letter from Juma"
    ],
    "correctAnswer": "She follows an assassin from Dubaku's hospital room to the waterfront",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 11",
      "Day 7 clock hour 18:00",
      "Characters: Renee Walker;Benjamin Juma",
      "Storyline: Renee discovers boat operation",
      "Question focus: how does Renee first discover the Sangalan commandos' next operation?",
      "Answer focus: She follows an assassin from Dubaku's hospital room to the waterfront",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35320",
    "category": "Television",
    "question": "In 24 (Season 7), what does Vice President Hayworth refuse to authorise during Juma's White House siege?",
    "answers": [
      "An evacuation of the building",
      "The use of any presidential communications",
      "The arrest of the captured senator",
      "A rescue operation while Taylor's safety is uncertain"
    ],
    "correctAnswer": "A rescue operation while Taylor's safety is uncertain",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 12",
      "Day 7 clock hour 19:00",
      "Characters: Mitchell Hayworth;Allison Taylor;Benjamin Juma",
      "Storyline: Vice President refuses rescue",
      "Question focus: what does Vice President Hayworth refuse to authorise during Juma's White House siege?",
      "Answer focus: A rescue operation while Taylor's safety is uncertain",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35321",
    "category": "Television",
    "question": "In 24 (Season 7), what does Juma threaten to do to force President Taylor out of the secure room?",
    "answers": [
      "Mutilate her daughter Olivia",
      "Destroy the presidential aircraft",
      "Execute former president Daniels",
      "Release the CIP device into the water supply"
    ],
    "correctAnswer": "Mutilate her daughter Olivia",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 12",
      "Day 7 clock hour 19:00",
      "Characters: Allison Taylor;Olivia Taylor;Benjamin Juma",
      "Storyline: Taylor surrenders for daughter",
      "Question focus: what does Juma threaten to do to force President Taylor out of the secure room?",
      "Answer focus: Mutilate her daughter Olivia",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35322",
    "category": "Television",
    "question": "In 24 (Season 7), how does Bill Buchanan create the opening for the FBI to retake the White House?",
    "answers": [
      "He unlocks every exit from the control room",
      "He detonates an explosive gas charge in the bunker area",
      "He shoots out the building's power supply",
      "He sends a false surrender order to Juma"
    ],
    "correctAnswer": "He detonates an explosive gas charge in the bunker area",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 13",
      "Day 7 clock hour 20:00",
      "Characters: Bill Buchanan;Jack Bauer;Benjamin Juma",
      "Storyline: Bill's method of sacrifice",
      "Question focus: how does Bill Buchanan create the opening for the FBI to retake the White House?",
      "Answer focus: He detonates an explosive gas charge in the bunker area",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35323",
    "category": "Television",
    "question": "In 24 (Season 7), why does Larry Moss suspend Renee after the White House siege?",
    "answers": [
      "She refuses to testify against Juma",
      "She loses the list of Dubaku's collaborators",
      "She goes behind his back to obtain permission for Jack to question Burnett",
      "She tries to resign during the siege"
    ],
    "correctAnswer": "She goes behind his back to obtain permission for Jack to question Burnett",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 13",
      "Day 7 clock hour 20:00",
      "Characters: Larry Moss;Renee Walker;Ryan Burnett",
      "Storyline: Renee suspended",
      "Question focus: why does Larry Moss suspend Renee after the White House siege?",
      "Answer focus: She goes behind his back to obtain permission for Jack to question Burnett",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35324",
    "category": "Television",
    "question": "In 24 (Season 7), how does John Quinn get close enough to murder Senator Mayer in his home?",
    "answers": [
      "He poses as a hospital orderly",
      "He uses a stolen White House security badge",
      "He pretends to deliver a package from the FBI",
      "He arrives pretending to be a police officer"
    ],
    "correctAnswer": "He arrives pretending to be a police officer",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 14",
      "Day 7 clock hour 21:00",
      "Characters: John Quinn;Senator Blaine Mayer;Jack Bauer",
      "Storyline: Quinn's police disguise",
      "Question focus: how does John Quinn get close enough to murder Senator Mayer in his home?",
      "Answer focus: He arrives pretending to be a police officer",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35325",
    "category": "Television",
    "question": "In 24 (Season 7), what does Morris O'Brian demand in return for decrypting a file that could reveal Jack's location?",
    "answers": [
      "His wife Chloe's release from FBI custody",
      "A presidential pardon for Tony",
      "A job at the FBI",
      "Protection for his brother"
    ],
    "correctAnswer": "His wife Chloe's release from FBI custody",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 14",
      "Day 7 clock hour 21:00",
      "Characters: Morris O'Brian;Chloe O'Brian;Larry Moss",
      "Storyline: Morris bargains for Chloe",
      "Question focus: what does Morris O'Brian demand in return for decrypting a file that could reveal Jack's location?",
      "Answer focus: His wife Chloe's release from FBI custody",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35326",
    "category": "Television",
    "question": "In 24 (Season 7), why does Jack interrupt the Starkwood shipment interception to save a freight-yard guard?",
    "answers": [
      "The guard has been exposed to a leaking canister",
      "Starkwood mercenaries are about to execute the guard",
      "The guard is being held hostage by the FBI",
      "The guard is trapped in a burning warehouse"
    ],
    "correctAnswer": "Starkwood mercenaries are about to execute the guard",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 15",
      "Day 7 clock hour 22:00",
      "Characters: Jack Bauer;Tony Almeida;Carl Gadsen",
      "Storyline: Jack refuses to sacrifice innocent",
      "Question focus: why does Jack interrupt the Starkwood shipment interception to save a freight-yard guard?",
      "Answer focus: Starkwood mercenaries are about to execute the guard",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35327",
    "category": "Television",
    "question": "In 24 (Season 7), what does Greg Seaton do after persuading authorities that he will expose Starkwood's weapons?",
    "answers": [
      "He secretly moves the weapons to CTU",
      "He gives Jack the missile launch codes",
      "He leads the FBI into a Starkwood ambush",
      "He kills Jonas Hodges during questioning"
    ],
    "correctAnswer": "He leads the FBI into a Starkwood ambush",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 16",
      "Day 7 clock hour 23:00",
      "Characters: Greg Seaton;Tony Almeida;Larry Moss",
      "Storyline: False Starkwood defector",
      "Question focus: what does Greg Seaton do after persuading authorities that he will expose Starkwood's weapons?",
      "Answer focus: He leads the FBI into a Starkwood ambush",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35328",
    "category": "Television",
    "question": "In 24 (Season 7), what happens to Starkwood chairman Doug Knowles after he helps Tony locate the weapons?",
    "answers": [
      "He escapes into FBI protective custody",
      "He is killed in the missile strike",
      "He is taken prisoner by the Sangalan government",
      "Jonas Hodges executes him"
    ],
    "correctAnswer": "Jonas Hodges executes him",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 17",
      "Day 7 clock hour 00:00",
      "Characters: Doug Knowles;Jonas Hodges;Tony Almeida",
      "Storyline: Knowles murdered for helping",
      "Question focus: what happens to Starkwood chairman Doug Knowles after he helps Tony locate the weapons?",
      "Answer focus: Jonas Hodges executes him",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35329",
    "category": "Television",
    "question": "In 24 (Season 7), what does President Taylor call off when Hodges threatens to launch biological weapons at American cities?",
    "answers": [
      "A planned air strike against Starkwood",
      "The entire Senate hearing against Jack",
      "The evacuation of Washington",
      "A scheduled peace summit with Sangala"
    ],
    "correctAnswer": "A planned air strike against Starkwood",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 17",
      "Day 7 clock hour 00:00",
      "Characters: Allison Taylor;Jonas Hodges",
      "Storyline: Starkwood nuclear-level blackmail",
      "Question focus: what does President Taylor call off when Hodges threatens to launch biological weapons at American cities?",
      "Answer focus: A planned air strike against Starkwood",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35330",
    "category": "Television",
    "question": "In 24 (Season 7), how does Jack interpret President Taylor's silence when he asks about Tony's covert plan to destroy the missiles?",
    "answers": [
      "As an instruction to arrest Tony",
      "As permission to proceed without an explicit order",
      "As a rejection of all secret operations",
      "As a demand for a full cabinet vote"
    ],
    "correctAnswer": "As permission to proceed without an explicit order",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 18",
      "Day 7 clock hour 01:00",
      "Characters: Jack Bauer;Allison Taylor;Tony Almeida",
      "Storyline: Silent approval",
      "Question focus: how does Jack interpret President Taylor's silence when he asks about Tony's covert plan to destroy the missiles?",
      "Answer focus: As permission to proceed without an explicit order",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35331",
    "category": "Television",
    "question": "In 24 (Season 7), how does Tony Almeida secretly kill FBI supervisor Larry Moss during the pursuit of the last canister?",
    "answers": [
      "He injects him with the pathogen",
      "He shoots him from a helicopter",
      "He suffocates him to death",
      "He pushes him into the river"
    ],
    "correctAnswer": "He suffocates him to death",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 18",
      "Day 7 clock hour 01:00",
      "Characters: Tony Almeida;Larry Moss;Robert Galvez",
      "Storyline: Tony murders Larry",
      "Question focus: how does Tony Almeida secretly kill FBI supervisor Larry Moss during the pursuit of the last canister?",
      "Answer focus: He suffocates him to death",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35332",
    "category": "Television",
    "question": "In 24 (Season 7), how does Robert Galvez lure FBI agents into a fatal trap while escaping with the remaining pathogen?",
    "answers": [
      "He tricks them into opening the canister",
      "He places a bomb in their helicopter",
      "He leads them into a contaminated subway station",
      "He rigs a building to explode as agents enter"
    ],
    "correctAnswer": "He rigs a building to explode as agents enter",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 19",
      "Day 7 clock hour 02:00",
      "Characters: Robert Galvez;FBI;Tony Almeida",
      "Storyline: Galvez ambush",
      "Question focus: how does Robert Galvez lure FBI agents into a fatal trap while escaping with the remaining pathogen?",
      "Answer focus: He rigs a building to explode as agents enter",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35333",
    "category": "Television",
    "question": "In 24 (Season 7), what happens when Jack confronts Tony about Larry Moss's death?",
    "answers": [
      "Jack collapses and Tony steals his medication",
      "Tony surrenders and makes a confession",
      "Jack disarms a booby-trapped canister",
      "Renee arrives and arrests both men"
    ],
    "correctAnswer": "Jack collapses and Tony steals his medication",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 19",
      "Day 7 clock hour 02:00",
      "Characters: Jack Bauer;Tony Almeida;Larry Moss",
      "Storyline: Jack's illness enables escape",
      "Question focus: what happens when Jack confronts Tony about Larry Moss's death?",
      "Answer focus: Jack collapses and Tony steals his medication",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35334",
    "category": "Television",
    "question": "In 24 (Season 7), what threat accompanies the suicide pill Cara Bowden gives Jonas Hodges in detention?",
    "answers": [
      "His secret bank account will be frozen",
      "His family will be harmed if he refuses to take it",
      "Jack will arrest his son",
      "His company will be nationalised immediately"
    ],
    "correctAnswer": "His family will be harmed if he refuses to take it",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 19",
      "Day 7 clock hour 02:00",
      "Characters: Cara Bowden;Jonas Hodges",
      "Storyline: Forced suicide attempt",
      "Question focus: what threat accompanies the suicide pill Cara Bowden gives Jonas Hodges in detention?",
      "Answer focus: His family will be harmed if he refuses to take it",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35335",
    "category": "Television",
    "question": "In 24 (Season 7), what ultimately happens to Robert Galvez after he tries to double-cross Tony at a motel?",
    "answers": [
      "He is arrested by Renee Walker",
      "He flees abroad with the canister",
      "Tony kills him",
      "He dies from the pathogen"
    ],
    "correctAnswer": "Tony kills him",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 20",
      "Day 7 clock hour 03:00",
      "Characters: Robert Galvez;Tony Almeida",
      "Storyline: Tony eliminates accomplice",
      "Question focus: what ultimately happens to Robert Galvez after he tries to double-cross Tony at a motel?",
      "Answer focus: Tony kills him",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35336",
    "category": "Television",
    "question": "In 24 (Season 7), why does the secret network of defence contractors provoke attacks on the government?",
    "answers": [
      "To replace the President with a foreign ruler",
      "To force the FBI to relocate to Sangala",
      "To secure exclusive rights to the CIP device",
      "To make the government dependent on private security companies"
    ],
    "correctAnswer": "To make the government dependent on private security companies",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 20",
      "Day 7 clock hour 03:00",
      "Characters: Jonas Hodges;Alan Wilson;Tony Almeida",
      "Storyline: Private-sector conspiracy",
      "Question focus: why does the secret network of defence contractors provoke attacks on the government?",
      "Answer focus: To make the government dependent on private security companies",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35337",
    "category": "Television",
    "question": "In 24 (Season 7), how does Tony force Jibraan Al-Zarian to confess falsely to an upcoming attack?",
    "answers": [
      "He threatens to kill Jibraan's brother Hamid",
      "He promises him an FBI job",
      "He offers him witness protection in Sangala",
      "He threatens to deport his mother"
    ],
    "correctAnswer": "He threatens to kill Jibraan's brother Hamid",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 21",
      "Day 7 clock hour 04:00",
      "Characters: Tony Almeida;Jibraan Al-Zarian;Hamid Al-Zarian",
      "Storyline: Coerced false confession",
      "Question focus: how does Tony force Jibraan Al-Zarian to confess falsely to an upcoming attack?",
      "Answer focus: He threatens to kill Jibraan's brother Hamid",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35338",
    "category": "Television",
    "question": "In 24 (Season 7), who helps Jack and Renee locate the Al-Zarian brothers after Tony's planted evidence leads them to a mosque?",
    "answers": [
      "A Secret Service protection agent",
      "A local imam",
      "Senator Mayer's chief of staff",
      "The British ambassador"
    ],
    "correctAnswer": "A local imam",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 21",
      "Day 7 clock hour 04:00",
      "Characters: Jack Bauer;Renee Walker;Jibraan Al-Zarian",
      "Storyline: Mosque leader helps",
      "Question focus: who helps Jack and Renee locate the Al-Zarian brothers after Tony's planted evidence leads them to a mosque?",
      "Answer focus: A local imam",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35339",
    "category": "Television",
    "question": "In 24 (Season 7), what does Olivia Taylor decide after initially contacting a hitman to murder Jonas Hodges?",
    "answers": [
      "She personally plants a bomb in Hodges' car",
      "She alerts Jack before making any call",
      "She changes her mind and tries to cancel the killing",
      "She offers the assassin a White House post"
    ],
    "correctAnswer": "She changes her mind and tries to cancel the killing",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 21",
      "Day 7 clock hour 04:00",
      "Characters: Olivia Taylor;Jonas Hodges;Martin Collier",
      "Storyline: Olivia's remorse comes too late",
      "Question focus: what does Olivia Taylor decide after initially contacting a hitman to murder Jonas Hodges?",
      "Answer focus: She changes her mind and tries to cancel the killing",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35340",
    "category": "Television",
    "question": "In 24 (Season 7), what stops Jibraan from warning officers openly that he is being forced onto the Metro train?",
    "answers": [
      "A closed station gate traps him",
      "The terrorist has taken his passport",
      "His brother refuses to answer his call",
      "A corrupt officer orders him to obey the voice in his earpiece"
    ],
    "correctAnswer": "A corrupt officer orders him to obey the voice in his earpiece",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 22",
      "Day 7 clock hour 05:00",
      "Characters: Jibraan Al-Zarian;Cara Bowden",
      "Storyline: Corrupt officer silences Jibraan",
      "Question focus: what stops Jibraan from warning officers openly that he is being forced onto the Metro train?",
      "Answer focus: A corrupt officer orders him to obey the voice in his earpiece",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35341",
    "category": "Television",
    "question": "In 24 (Season 7), how does Jack make the device on the Metro safe after Jibraan finds the canister?",
    "answers": [
      "He puts it into a chamber for controlled detonation",
      "He throws it into a nearby river",
      "He freezes it inside a portable cooler",
      "He attaches it to a military drone"
    ],
    "correctAnswer": "He puts it into a chamber for controlled detonation",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 22",
      "Day 7 clock hour 05:00",
      "Characters: Jack Bauer;Jibraan Al-Zarian",
      "Storyline: Metro device neutralised",
      "Question focus: how does Jack make the device on the Metro safe after Jibraan finds the canister?",
      "Answer focus: He puts it into a chamber for controlled detonation",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35342",
    "category": "Television",
    "question": "In 24 (Season 7), what does Kim Bauer retrieve from a burning car that helps the FBI find Jack?",
    "answers": [
      "A satellite tracking beacon",
      "The fleeing attacker's laptop",
      "A handwritten confession from Tony",
      "A stolen police radio"
    ],
    "correctAnswer": "The fleeing attacker's laptop",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 23",
      "Day 7 clock hour 06:00",
      "Characters: Kim Bauer;Renee Walker",
      "Storyline: Kim saves digital evidence",
      "Question focus: what does Kim Bauer retrieve from a burning car that helps the FBI find Jack?",
      "Answer focus: The fleeing attacker's laptop",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35343",
    "category": "Television",
    "question": "In 24 (Season 7), how does Ethan Kanin outsmart Olivia when she destroys evidence about the Hodges murder?",
    "answers": [
      "He keeps a second laptop in his car",
      "He secretly mails the files to the Senate",
      "He has already given the genuine recording card to Aaron Pierce",
      "He arranges for a live television broadcast"
    ],
    "correctAnswer": "He has already given the genuine recording card to Aaron Pierce",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 23",
      "Day 7 clock hour 06:00",
      "Characters: Ethan Kanin;Olivia Taylor;Aaron Pierce",
      "Storyline: Kanin decoy memory card",
      "Question focus: how does Ethan Kanin outsmart Olivia when she destroys evidence about the Hodges murder?",
      "Answer focus: He has already given the genuine recording card to Aaron Pierce",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35344",
    "category": "Television",
    "question": "In 24 (Season 7), why do Tony and Cara Bowden capture the infected Jack rather than killing him immediately?",
    "answers": [
      "They want to exchange him for Jonas Hodges",
      "They need his approval to operate the CIP",
      "They want to force him to identify FBI moles",
      "They hope to reproduce the pathogen from his body"
    ],
    "correctAnswer": "They hope to reproduce the pathogen from his body",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 23",
      "Day 7 clock hour 06:00",
      "Characters: Tony Almeida;Cara Bowden;Jack Bauer",
      "Storyline: Jack as pathogen source",
      "Question focus: why do Tony and Cara Bowden capture the infected Jack rather than killing him immediately?",
      "Answer focus: They hope to reproduce the pathogen from his body",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35345",
    "category": "Television",
    "question": "In 24 (Season 7), what does Tony strap onto Jack when Alan Wilson finally arrives for the confrontation?",
    "answers": [
      "An explosive device",
      "A hidden camera and microphone",
      "A tracking band",
      "A chemical test sensor"
    ],
    "correctAnswer": "An explosive device",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 24",
      "Day 7 clock hour 07:00",
      "Characters: Tony Almeida;Jack Bauer;Alan Wilson",
      "Storyline: Tony weaponises Jack",
      "Question focus: what does Tony strap onto Jack when Alan Wilson finally arrives for the confrontation?",
      "Answer focus: An explosive device",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35346",
    "category": "Television",
    "question": "In 24 (Season 7), what decision does Renee Walker make after Jack advises her about her conscience in the final hour?",
    "answers": [
      "She resigns from the FBI immediately",
      "She prepares to interrogate Alan Wilson using coercion",
      "She gives Tony immunity from prosecution",
      "She agrees to destroy the evidence against Olivia"
    ],
    "correctAnswer": "She prepares to interrogate Alan Wilson using coercion",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 24",
      "Day 7 clock hour 07:00",
      "Characters: Renee Walker;Alan Wilson;Jack Bauer",
      "Storyline: Renee's final moral choice",
      "Question focus: what decision does Renee Walker make after Jack advises her about her conscience in the final hour?",
      "Answer focus: She prepares to interrogate Alan Wilson using coercion",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  },
  {
    "id": "tv_35347",
    "category": "Television",
    "question": "In 24 (Season 7), what does Kim do after Jack has been placed in a medically induced coma?",
    "answers": [
      "She refuses any further treatment",
      "She orders Jack transferred overseas",
      "She asks the doctors to proceed with the treatment that might save him",
      "She asks the FBI to release Tony"
    ],
    "correctAnswer": "She asks the doctors to proceed with the treatment that might save him",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "American Television",
      "Action Drama",
      "Crime Thriller",
      "24",
      "24 Season 7",
      "24 Day 7",
      "2009",
      "Episode 24",
      "Day 7 clock hour 07:00",
      "Characters: Kim Bauer;Jack Bauer",
      "Storyline: Kim's determination to save father",
      "Question focus: what does Kim do after Jack has been placed in a medically induced coma?",
      "Answer focus: She asks the doctors to proceed with the treatment that might save him",
      "Viewer storyline",
      "Fox US Television: 24",
      "Story setting: Washington DC"
    ]
  }
];
questions.push(...auditAdditions);
const EXPECTED_COUNT = 135;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_11630' || questions[83].id !== 'tv_11713' || questions[questions.length - 1].id !== 'tv_35347') {
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
