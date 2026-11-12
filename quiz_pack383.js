
 // quiz_pack383.js
// PuzzlePilot - The Bigggggg Quiz
// A Touch of Frost - Part 3: Series 6-9 (1999-2002).
// Full self-contained CommonJS file for copying into WordPad.
// Do not mark A Touch of Frost complete: later series remain for Pack 384.

const FIRST_ID = 20205;
const PROGRAMME = 'A Touch of Frost';

// Fact format: question | correct answer | three distinct distractors | difficulty | seven question-specific tags.
const programmeFacts = `How many episodes were broadcast in series six?|Four|Two|Three|Five|Easy|Series Six|1999|Episode Count|Original Broadcast|ITV Schedule|Programme History|Production
Which instalment opened series six?|Appendix Man|One Man's Meat|Private Lives|Keys to the Car|Medium|Appendix Man|Series Six|1999|Series Premiere|Episode Order|Broadcast History|Television Episode
Which instalment brought series six to a close?|Keys to the Car|Private Lives|Appendix Man|One Man's Meat|Medium|Keys To The Car|Series Six|1999|Final Episode|Programme Chronology|Episode Order|ITV
In what year did series six originally air?|1999|1997|2000|2001|Easy|Series Six|1999|Broadcast Year|Television History|Episode Dates|ITV Transmission|Programme Chronology
What was the title of the two-part seventh series?|Line of Fire|Benefit of the Doubt|Mistaken Identity|Dead End|Easy|Line Of Fire|Series Seven|1999|2000|Two Part Story|Episode Title|ITV
On which holiday did the first part of series seven premiere?|Christmas Day|Boxing Day|New Year's Day|Easter Sunday|Medium|Christmas Day|Line Of Fire|Series Seven|1999|Original Broadcast|Holiday Episode|ITV
What year saw the conclusion of the two-part seventh series?|2000|1999|2001|2002|Medium|Series Seven|Line Of Fire|New Year's Day|2000|Second Part|Broadcast Date|Programme Chronology
What was the title of the eighth series' two-part investigation?|Benefit of the Doubt|Line of Fire|Mistaken Identity|Held in Trust|Medium|Benefit Of The Doubt|Series Eight|2001|Two Part Episode|Original Title|Broadcast History|ITV
In which year was series eight first broadcast?|2001|1999|2002|2003|Easy|Series Eight|2001|Broadcast Year|ITV Schedule|Two Part Series|Episode Chronology|Programme History
Which two-part story made up the ninth series?|Mistaken Identity|Benefit of the Doubt|Line of Fire|No Other Love|Medium|Mistaken Identity|Series Nine|2002|Episode Title|Two Part Story|Broadcast History|Television Drama
In what year was the ninth series originally transmitted?|2002|2000|2001|2003|Easy|Series Nine|2002|Broadcast Year|ITV|Two Episodes|Television Timeline|Programme History
Who played the detective sergeant Terry Reid in the eighth series?|Robert Glenister|Neil Dudgeon|John Lyons|Matt Bardock|Easy|Robert Glenister|Terry Reid|Series Eight|Actor Casting|2001|Denton CID|Detective Sergeant
Which actress played the young woman Anne, who believes Frost may be her father?|Joanne Froggatt|Caroline Harker|Susannah Doyle|Paloma Baeza|Medium|Joanne Froggatt|Anne|Frost Paternity|Benefit Of The Doubt|Actor Casting|2001|Guest Role
Who played Detective Constable Ronnie Lonnegan in the ninth series?|Michelle Joseph|Sally Dexter|Caroline Harker|Isla Blair|Medium|Michelle Joseph|Ronnie Lonnegan|Series Nine|2002|Detective Constable|Actor Casting|Denton CID
Who portrayed psychologist Pam Hartley in the ninth series?|Susan Penhaligon|Arkie Whiteley|Yolanda Vazquez|Joanne Froggatt|Medium|Susan Penhaligon|Pam Hartley|Psychologist|Mistaken Identity|2002|Guest Actor|Profiler`;

const appendixMan = `After Clive Barnard's death, what is Frost officially placed on instead of having his resignation accepted?|Extended compassionate leave|Suspension without pay|Early retirement|A foreign secondment|Easy|Appendix Man|Jack Frost|Clive Barnard|Compassionate Leave|1999|Police Career|Series Six
Which career advancement is Superintendent Mullett hoping to obtain when Frost returns?|Assistant Chief Constable|Chief Inspector|Police and Crime Commissioner|Chief Superintendent|Medium|Appendix Man|Norman Mullett|Assistant Chief Constable|Promotion|1999|Police Hierarchy|Senior Management
What name is given to the old murder investigation that resurfaces in the series-six opener?|The Black Farm Murders|The Felton Robbery|The Eastdean Killings|The Glassworks Murder|Medium|Appendix Man|Black Farm Murders|Old Investigation|1999|Wrongful Conviction|Cold Case|Stolen Paintings
Which policewoman returns to Denton as a newly qualified detective sergeant?|Hazel Wallace|Liz Maud|Maureen Lawson|Claire Toms|Easy|Appendix Man|Hazel Wallace|Detective Sergeant|Promotion|1999|Denton Police|Returning Officer
Which reclusive art collector is found dead in his home?|Lester Bryce-Jones|Graham Rutherford|Leo Armfield|Ian Priest|Hard|Appendix Man|Lester Bryce Jones|Art Collector|Suspicious Death|1999|Hazel Wallace|Police Investigation
Which artist created the valuable painting discovered missing from the collector's home?|David Hockney|L. S. Lowry|J. M. W. Turner|John Constable|Medium|Appendix Man|David Hockney|Stolen Painting|Lester Bryce Jones|1999|Art Theft|Forgery
What is unusual about fingerprints discovered in the art collector's home?|They match a man whose body was found a year earlier|They match Frost's deceased wife|They belong to the Chief Constable|They were left in paint rather than ink|Easy|Appendix Man|Fingerprints|Appendix Man Body|River Corpse|1999|Forensic Evidence|Cold Case Link
What is the occupation of the collector who secretly deals in expensive artwork?|Hospital porter|Art gallery curator|University lecturer|Solicitor|Medium|Appendix Man|Lester Bryce Jones|Hospital Porter|Secret Art Trade|1999|Hidden Occupation|Crime Link
Which neighbour takes the collector's painting instead of helping him when she finds him dying?|Debbie Viner|Diana Priest|Bryony Darrow|Marion Williams|Medium|Appendix Man|Debbie Viner|Lester Bryce Jones|Stolen Painting|1999|Failure To Help|Neighbour
What does the neighbour discover about the painting she took?|It is a forgery|It is part of a matching pair|It has a hidden message|It is painted on wood|Medium|Appendix Man|Debbie Viner|Fake Painting|Hockney|1999|Art Forgery|Stolen Artwork
What is the true identity of the previously unidentified man found in the river?|Ian Priest|Lester Bryce-Jones|David Viner|Leo Armfield|Medium|Appendix Man|Ian Priest|Unidentified River Body|1999|Cold Case Resolution|Art Theft|Blackmail
Who had altered the dead man's fingerprints to protect a relative?|A pathology laboratory assistant|A police archivist|A senior surgeon|A hospital receptionist|Hard|Appendix Man|Diana|Pathology Lab Assistant|Fingerprints|Ian Priest|1999|Evidence Tampering
What medical condition had brought the river victim into hospital before he died?|Appendicitis|Pneumonia|A broken hip|Kidney failure|Hard|Appendix Man|Ian Priest|Appendicitis|Hospital|1999|Episode Title|Medical Treatment
How does the collector dispose of Ian Priest after helping him leave hospital?|He throws him from a bridge into the river|He buries him under a garage|He hides him inside a factory freezer|He leaves him on railway tracks|Medium|Appendix Man|Ian Priest|Lester Bryce Jones|River Body|1999|Killing|Bridge
What misconduct prevents Mullett from receiving his hoped-for promotion?|He approved expense receipts Frost had signed himself|He disclosed a witness's address|He lost the case evidence|He failed a firearms test|Hard|Appendix Man|Norman Mullett|False Expense Receipts|1999|Promotion Failure|Police Administration|Frost Paperwork
What happens to Frost's former home by the end of the opening 1999 case?|It has been repaired and he moves back in|It is sold to Mullett|It becomes a police safe house|It is demolished for redevelopment|Medium|Appendix Man|Jack Frost|Repaired House|1999|Personal Life|Returning Home|Series Six`;

const oneMansMeat = `What is the name of the police dog Frost looks after when its handler is injured?|Kaiser|Rex|Max|Buster|Easy|One Mans Meat|Kaiser|Police Dog|1999|Frost Lodger|Dog Handler|Working Dog
Which police constable normally handles the dog Frost temporarily cares for?|Tom Haliday|Ernie Trigg|George Toolan|Billy Sharpe|Hard|One Mans Meat|Tom Haliday|Police Constable|Kaiser|1999|Injured Handler|Frost Tenant
Which homeless teenager is found in the Denton River?|Jane Owens|Bryony Darrow|Sylvia Carter|Tricia Martin|Medium|One Mans Meat|Jane Owens|Homeless Teenager|River Body|1999|Investigated Death|Denton
How old is the homeless girl found in the river?|Sixteen|Twelve|Fourteen|Nineteen|Medium|One Mans Meat|Jane Owens|Age Sixteen|1999|Youth Homelessness|Denton River|Victim
Who assaults the homeless girl after she rejects his advances?|Alan Deering|Gerry Ryan|Jim Scott|Warren Barber|Medium|One Mans Meat|Alan Deering|Jane Owens|Violent Assault|1999|Prostitution Approach|Suspect
Which friend of the girl helps Frost identify her attacker?|Rickie|Kaiser|David|George|Medium|One Mans Meat|Rickie|Jane Owens|Friendship|1999|Witness|Alan Deering
What is eventually established as the immediate cause of the girl's death?|She took her own life by drowning|She was strangled by a customer|She suffered a fatal fall|She died from a drug overdose|Medium|One Mans Meat|Jane Owens|Suicide|Drowning|1999|Death Investigation|Case Outcome
What occupation does missing man Warren Barber hold?|Environmental health officer|Veterinary surgeon|Warehouse manager|Forensic pathologist|Medium|One Mans Meat|Warren Barber|Environmental Health|Meat Factory|1999|Missing Person|Official Inspection
What body part washes ashore and reveals the missing officer has been killed?|An arm|A foot|A hand|A leg|Easy|One Mans Meat|Warren Barber|Severed Arm|Estuary|1999|Body Discovery|Murder Enquiry
Who owns the meat-processing business connected to the missing officer?|Gerry Ryan|Jim Scott|Alan Deering|Leo Armfield|Medium|One Mans Meat|Gerry Ryan|Meat Processing Plant|1999|Factory Owner|Drug Smuggling|Businessman
What illegal cargo is moved through the meat-processing factory?|Drugs smuggled from Amsterdam|Stolen paintings from Paris|Unlicensed firearms from Spain|Counterfeit watches from Milan|Medium|One Mans Meat|Drug Smuggling|Amsterdam|Meat Factory|1999|Gerry Ryan|Criminal Operation
Who actually kills Warren Barber after catching him inside the factory?|Jim Scott|Gerry Ryan|Alan Deering|Tom Haliday|Medium|One Mans Meat|Jim Scott|Warren Barber|Factory Murder|1999|Drug Smuggling|Killer
From what kind of aircraft are the victim's remains dumped into the sea?|A Cessna|A helicopter|A glider|A military transport plane|Hard|One Mans Meat|Cessna Aircraft|Jim Scott|Body Disposal|1999|Estuary Evidence|Aviation
Who stops the armed factory accomplice when Frost is wounded?|Kaiser the police dog|DS George Toolan|Superintendent Mullett|PC Tom Haliday|Medium|One Mans Meat|Kaiser|Jim Scott|Frost Wounded|1999|Police Dog Intervention|Arrest`;

const privateLives = `Which detective nicknamed Razor temporarily partners Frost while Toolan is ill?|Billy Sharpe|Terry Reid|Clive Barnard|Carl Tanner|Medium|Private Lives|Billy Razor Sharpe|Partner|1999|George Toolan Ill|Denton CID|Detective Sergeant
What apparent road offence begins the central village investigation?|A hit-and-run|An illegal street race|A road-rage shooting|A motorway pile-up|Easy|Private Lives|Hit And Run|Bryony Darrow|1999|Village Case|Suspicious Injury|Road Crime
Which charity worker is left critically injured after the village incident?|Bryony Darrow|Jane Owens|Marijka Hoogenbloom|Helen Fox|Medium|Private Lives|Bryony Darrow|Charity Worker|1999|Coma|Hit And Run|Victim
What other name had the injured charity worker previously used?|Natalie Williams|Rachel Rutherford|Debbie Viner|Marion Hartley|Hard|Private Lives|Natalie Williams|Bryony Darrow|Alias|1999|Secret Past|Identity
What second occupation had the supposedly respectable charity worker concealed?|Sex worker|Stockbroker|Private investigator|Art dealer|Medium|Private Lives|Bryony Darrow|Hidden Sex Work|1999|Double Life|Secret Flat|Murder Enquiry
In which city does Frost discover the injured woman's secret flat?|London|Birmingham|Oxford|Liverpool|Medium|Private Lives|London Flat|Bryony Darrow|1999|Marion|Hidden Accommodation|Investigation
Who lives at the flat and reveals the injured woman's original identity?|Her mother Marion|Her husband Richard|Her daughter Rachel|Her solicitor Graham|Medium|Private Lives|Marion|Natalie Williams|Bryony Darrow|1999|Mother Daughter|Family Secret
What is the first name of the injured woman's daughter?|Rachel|Tracy|Joanna|Anne|Easy|Private Lives|Rachel|Bryony Darrow|Richard Darrow|1999|Daughter|Family Relationship
Which solicitor is linked to the charity worker's secret arrangements?|Graham Rutherford|Simon Warrinder|Edward Gull|James Ingram|Medium|Private Lives|Graham Rutherford|Solicitor|Trust Fund|1999|Bryony Darrow|Confidential Arrangements
What does the solicitor help establish for the woman's daughter?|A trust fund|A university scholarship|A new passport|A guardianship order|Medium|Private Lives|Rachel|Trust Fund|Graham Rutherford|1999|Financial Provision|Family Secret
Who ultimately confesses to driving the car that struck the charity worker?|Her husband Richard|Owen Kimble|Billy Sharpe|Graham Rutherford|Medium|Private Lives|Richard Darrow|Bryony Darrow|Hit And Run|1999|Murder Confession|Husband Wife
What is unusual about the safe when criminals attempt to rob a local brewery?|It is empty|It is already open|It is filled with counterfeit money|It contains only jewellery|Easy|Private Lives|Brewery Robbery|Empty Safe|1999|Leo Armfield|Failed Theft|Separate Case
Which pair is caught after Frost predicts that brewery robbers will return?|Leo Armfield and Garmon|Jim Scott and Gerry Ryan|Harry Plummer and Marijka|Mark Newcombe and Finlay|Medium|Private Lives|Leo Armfield|Garmon|1999|Brewery Trap|Repeat Robbery|Arrests
Which police archivist recognises the pattern behind the brewery gang's repeated attempts?|Ernie Trigg|Derek Simpkins|Norman Mullett|Billy Sharpe|Hard|Private Lives|Ernie Trigg|Police Archives|Brewery Case|1999|Criminal Pattern|Old Records`;

const keysToTheCar = `Which senior officer temporarily takes charge while Mullett is on leave?|Assistant Chief Constable Cremond|Detective Superintendent Finlay|DCI Charlie Hawkes|Detective Superintendent Bailey|Medium|Keys To The Car|ACC Cremond|Temporary Command|1999|Denton Station|Senior Officer|Norman Mullett
Which drug dealer becomes the focus of a complaint about Frost's interview tactics?|Richie Dearne|Gerry Ryan|Jim Scott|Ray English|Medium|Keys To The Car|Richie Dearne|Drug Dealer|1999|Police Complaint|Off Record Interview|Frost Methods
Who acts as the drug dealer's solicitor and challenges Frost's conduct?|Simon Warrinder|Graham Rutherford|Edward Gull|Richard Sheridan|Medium|Keys To The Car|Simon Warrinder|Solicitor|Richie Dearne|1999|Police Complaint|Legal Representation
What make of car is stolen from Mullett's golfing partner?|Mercedes-Benz|Jaguar|Volvo|BMW|Easy|Keys To The Car|Mercedes|Stolen Car|Ben Pecksmith|1999|Golf Club|Vehicle Theft
What colour is the stolen luxury car?|Red|Silver|Black|Blue|Medium|Keys To The Car|Red Mercedes|Ben Pecksmith|1999|Stolen Vehicle|Golf Club|Investigation
Who owns the car stolen from the golf club?|Ben Pecksmith|Richie Dearne|Luke Hands|Simon Warrinder|Medium|Keys To The Car|Ben Pecksmith|Golfing Partner|1999|Norman Mullett|Stolen Mercedes|Car Owner
What alias does the con man use when he joins the golf club?|Harry Plummer|Alan Deering|Richard Darrow|Graham Rutherford|Medium|Keys To The Car|Harry Plummer|Golf Club Impostor|1999|Car Theft|False Identity|Con Man
What is the golf club trickster's real name?|Alan Carpenter|Simon Warrinder|Ben Pecksmith|Richie Dearne|Hard|Keys To The Car|Alan Carpenter|Harry Plummer|1999|Alias Revealed|Car Thief|Identity
Which woman travels with the car thief to Holland?|Marijka Hoogenbloom|Philly Williams|Debbie Viner|Bryony Darrow|Medium|Keys To The Car|Marijka Hoogenbloom|Holland|1999|Dutch Connection|Car Thief|Travel
What is discovered in the boot of the recovered stolen Mercedes?|The body of a drug dealer|A kidnapped child|A missing painting|A cache of rifles|Easy|Keys To The Car|Richie Dearne|Body In Boot|1999|Stolen Mercedes|Murder Discovery|Forensics
What is the Dutch woman's real role?|Undercover drugs officer|Airline stewardess|International art dealer|Private insurance investigator|Medium|Keys To The Car|Marijka Hoogenbloom|Undercover Dutch Police|1999|Drug Smuggling Investigation|Hidden Identity|Holland
What family relationship connects Philly Williams to car owner Pecksmith?|She is his stepdaughter|She is his niece|She is his younger sister|She is his goddaughter|Hard|Keys To The Car|Philly Williams|Ben Pecksmith|Stepdaughter|1999|Drug Addiction|Family Relationship
Which lawyer is finally exposed as the murderer of the drug dealer?|Simon Warrinder|Graham Rutherford|Edward Gull|Richard Sheridan|Medium|Keys To The Car|Simon Warrinder|Richie Dearne|1999|Murder Confession|Blackmail|Drug Addiction
How much money had the dealer demanded while blackmailing the lawyer?|£5,000|£500|£30,000|£50,000|Hard|Keys To The Car|5000 Pounds|Simon Warrinder|Richie Dearne|1999|Blackmail Sum|Motive
Who holds the lawyer at gunpoint in court and demands a confession?|Luke Hands|Alan Carpenter|Ben Pecksmith|Gerry Ryan|Medium|Keys To The Car|Luke Hands|Courtroom Hostage|1999|Simon Warrinder|Armed Confrontation|Confession
What had Frost secretly done to the weapon after the courtroom hostage incident?|Removed its bullet|Swapped it for a replica|Thrown it into the river|Filed off its serial number|Medium|Keys To The Car|Frost|Unloaded Gun|1999|Luke Hands|Courtroom Crisis|Police Tactics`;

const lineOfFire = `Which police detective is found murdered during the seventh series?|Tim Fox|Terry Reid|Clive Barnard|Carl Tanner|Easy|Line Of Fire|Tim Fox|Regional Crime Squad|Murdered Detective|1999|2000|Police Investigation
Which police unit had the murdered detective belonged to?|Regional crime squad|Traffic police|Marine division|Special Branch protection unit|Medium|Line Of Fire|Regional Crime Squad|Tim Fox|1999|Police Operation|Organised Crime|Investigation
Which criminal trade is central to the operation the murdered detective was working on?|Stolen cars|Fake passports|Stolen paintings|Counterfeit jewellery|Medium|Line Of Fire|Car Theft Ring|Tim Fox|1999|Organised Crime|Police Raid|Detective Killing
Which detective superintendent leads the murdered officer's own squad?|Finlay|Mullett|Bailey|Cremond|Medium|Line Of Fire|Detective Superintendent Finlay|Regional Crime Squad|Tim Fox|1999|Senior Police Officer|Case Command
Which detective inspector is revealed to have had an affair with the victim's wife?|Mark Newcombe|Terry Reid|Billy Sharpe|Frank Nash|Medium|Line Of Fire|Mark Newcombe|Helen Fox|Affair|1999|Tim Fox|Police Suspicion
What sum of cash found in the murdered officer's car raises fears of corruption?|£1,000|£5,000|£10,000|£50,000|Hard|Line Of Fire|1000 Pounds|Tim Fox|Corruption Suspicion|1999|Car Evidence|Police Integrity
Which piece of sporting equipment provides a tyre-track clue in the officer's murder?|Mountain bike|Motorcycle|Golf trolley|Racing go-kart|Medium|Line Of Fire|Mountain Bike|Tyre Tracks|Mark Newcombe|1999|Forensic Clue|Helen Fox
Which woman is eventually arrested for killing Detective Tim Fox?|Helen Fox|Susan Kavanaugh|Shirley Fisher|Anne Wainwright|Medium|Line Of Fire|Helen Fox|Tim Fox|2000|Murder Arrest|Husband Wife|Case Resolution
How had Newcombe and Helen tried to make the murdered officer appear corrupt?|By planting money|By forging his passport|By hiding stolen jewellery in his locker|By altering his fingerprints|Medium|Line Of Fire|Tim Fox|Mark Newcombe|Helen Fox|Planted Cash|2000|Blackmail Scheme
Which station record reveals a gun had gone missing from official records?|A firearms amnesty register|A vehicle inspection book|A missing-persons database|A custody lunch log|Hard|Line Of Fire|Gun Amnesty|Ernie Trigg|2000|Missing Firearm|Police Records|Murder Evidence
What happens to the pets of several local residents during a separate investigation?|They are shot with a rifle|They are stolen for ransom|They are poisoned at a show|They are abandoned at kennels|Medium|Line Of Fire|Pet Shootings|Rifle|1999|2000|Cruelty Investigation|Separate Case
What happens to power station employee Cockcroft?|He falls to his death at work|He disappears on a ferry|He is kidnapped at the golf club|He dies in a hospital fire|Medium|Line Of Fire|Cockcroft|Power Station|Fatal Fall|1999|Workplace Death|Murder Enquiry
Who is the power-station worker linked to attacks on women and burglary victims?|Ray English|Sam Goodwin|Mark Newcombe|Tim Fox|Medium|Line Of Fire|Ray English|Power Station|Violence|1999|2000|Burglaries
Which friend of Ray English shoots Sally Wainwright's dog?|Sam Goodwin|Tim Fox|Cockcroft|George English|Hard|Line Of Fire|Sam Goodwin|Sally Wainwright|Dog Shooting|2000|Rifle Crime|Ray English
How does Ray English cause Sally Wainwright's serious road accident?|He cuts her car's brakes|He tampers with her steering wheel|He drives into her vehicle|He punctures her tyres|Medium|Line Of Fire|Ray English|Sally Wainwright|Sabotaged Brakes|2000|Car Crash|Victim
Which ambitious policewoman is kidnapped after investigating the rifle crimes?|Susan Kavanaugh|Hazel Wallace|Ronnie Lonnegan|Liz Maud|Medium|Line Of Fire|Susan Kavanaugh|WPC|Kidnapping|2000|Rifle Investigation|Police Officer
Where does Ray English fall to his death after fleeing from Frost?|A power station gantry|A motorway bridge|A police station roof|A quarry ledge|Medium|Line Of Fire|Ray English|Power Station Gantry|2000|Fatal Fall|Frost Pursuit|Climax
Who is Ray English's father, a former police officer?|George English|Finlay|Tim Fox|Sam Goodwin|Medium|Line Of Fire|George English|Ray English|Ex Police Officer|2000|Father Son|Bereavement
Which former romantic partner of Frost returns during the Christmas and New Year story?|Shirley Fisher|Liz Maud|Anne Fox|Bryony Darrow|Easy|Line Of Fire|Shirley Fisher|Frost Romance|1999|2000|New Year|Hospital Nurse`;

const benefitOfTheDoubt = `Which detective sergeant is transferred to work with Frost in the eighth series?|Terry Reid|Billy Sharpe|Clive Barnard|Carl Tanner|Easy|Benefit Of The Doubt|Terry Reid|New Partner|2001|Detective Sergeant|Denton Police|Transferred Officer
What criminal activity has Terry Reid been investigating that angers a wealthy student's father?|Contraband cigarette sales|Horse theft|International art smuggling|Illegal gambling|Medium|Benefit Of The Doubt|Terry Reid|Tim Hamilton|Contraband Cigarettes|2001|Protection Racket|Prior Case
Which student is suspected of running the illicit cigarette operation?|Tim Hamilton|Adam Weston|Jeffrey Meadows|Mike Patterson|Medium|Benefit Of The Doubt|Tim Hamilton|Terry Reid|2001|Illegal Cigarettes|University Student|Suspect
What form of transport is responsible for the dismemberment of Sylvia Carter's body?|Trains|A canal barge|A road sweeper|A ferry|Medium|Benefit Of The Doubt|Sylvia Carter|Railway Tracks|2001|Fatal Accident|Body Discovery|Train
What type of business employed Sylvia Carter before her death?|A sandwich-making business|A supermarket bakery|A meat-processing plant|A golf club|Medium|Benefit Of The Doubt|Sylvia Carter|Sandwich Maker|2001|Employment|Extra Stock|Investigation
What explains Sylvia Carter's death when the railway case is solved?|She was accidentally hit while crossing with her lover|She was pushed in front of a train by a stranger|She died during a warehouse robbery|She was poisoned and placed on the tracks|Medium|Benefit Of The Doubt|Sylvia Carter|Railway Accident|Secret Affair|2001|Case Resolution|Train Crossing
Which hospital surgeon goes missing during Frost's eighth-series investigation?|Helena Gibson|Nancy Grover|Jeanette Barr|Pam Hartley|Medium|Benefit Of The Doubt|Helena Gibson|Senior Surgeon|2001|Missing Doctor|Denton Hospital|Medical Investigation
Which actress played the missing surgeon?|Arkie Whiteley|Joanne Froggatt|Susan Penhaligon|Michelle Joseph|Medium|Benefit Of The Doubt|Arkie Whiteley|Helena Gibson|2001|Guest Actress|Hospital Doctor|Actor Casting
What item taken from Terry Reid becomes part of the investigation after his apparent assault?|His war medal|His police radio|His wedding ring|His passport|Medium|Benefit Of The Doubt|Terry Reid|War Medal|2001|Stolen Property|Evidence|Police Partner
Who is the man exposed as impersonating Frost to assault women?|Larry Brewer|Tim Hamilton|James Ingram|Jameson|Medium|Benefit Of The Doubt|Larry Brewer|Frost Impersonator|2001|Sexual Assaults|False Identity|Arrest
What really caused Terry Reid's head injury during the investigation?|He slipped and struck a sink|He was stabbed by a suspect|He was hit by a car|He was assaulted in a nightclub|Medium|Benefit Of The Doubt|Terry Reid|Head Injury|Sink|2001|Accident|False Suspicion
What vehicle helps Frost trace the surgeon's missing remains?|An abandoned medical-waste lorry|A stolen ambulance|A hospital shuttle bus|A freezer delivery van|Medium|Benefit Of The Doubt|Helena Gibson|Medical Waste|Abandoned Lorry|2001|Body Recovery|Forensic Clue
Which medical facility is due to destroy the surgeon's remains?|A specialist waste incinerator|A hospital laundry|A pathology teaching room|A dental surgery|Hard|Benefit Of The Doubt|Helena Gibson|Incinerator|Medical Waste|2001|Body Disposal|Evidence Destruction
Who is finally revealed as the surgeon's murderer?|Dr Retnik|Jameson|James Ingram|Tim Hamilton|Medium|Benefit Of The Doubt|Dr Retnik|Helena Gibson|2001|Surgeon Murder|Case Resolution|Hospital Staff
What hospital location had been used to conceal the surgeon's body and distort the apparent time of death?|A hospital freezer|A pharmacy cupboard|A surgical theatre|A maternity ward|Hard|Benefit Of The Doubt|Helena Gibson|Hospital Freezer|2001|Time Of Death|Murder Cover Up|Forensics
What explains the mysterious deaths associated with Bed 5 in the hospital?|A cleaner unplugging vital equipment|A faulty oxygen delivery system|Contaminated medicine|A deliberate poisoning spree|Medium|Benefit Of The Doubt|Bed Five|Unplugged Equipment|Hospital Cleaner|2001|Unexplained Deaths|Medical Error
Which young woman arrives believing that Frost is her biological father?|Anne|Rachel|Melanie|Sylvia|Medium|Benefit Of The Doubt|Anne|Frost Paternity|2001|Possible Daughter|Personal Storyline|Joanne Froggatt
What does the paternity test ultimately reveal about Anne and Frost?|They are not biologically related|He is her father|They share the same mother|They are half-siblings|Medium|Benefit Of The Doubt|Anne|Jack Frost|DNA Test|2001|Not His Daughter|Personal Life`;

const mistakenIdentity = `Which new female detective constable partners Frost in the ninth series?|Ronnie Lonnegan|Susan Kavanaugh|Hazel Wallace|Liz Maud|Easy|Mistaken Identity|Ronnie Lonnegan|New Partner|2002|Detective Constable|Denton CID|Series Nine
What type of reservoir discovery begins the murder investigation?|An unidentified body in the water|A submerged police car|A suitcase of cash|A stolen motorbike|Easy|Mistaken Identity|Reservoir|Unidentified Corpse|2002|Body Discovery|Murder Case|Opening Investigation
Which married couple are found brutally murdered in their home?|Paul and Jean Harris|James and Jeanette Barr|Mark and Nancy Grover|Richard and Bryony Darrow|Medium|Mistaken Identity|Paul Harris|Jean Harris|2002|Married Couple|Double Murder|Victims
What is distinctive about the way the couple are murdered?|They are tied up and set alight|They are poisoned at a dinner party|They are drowned in a swimming pool|They are struck by a stolen car|Medium|Mistaken Identity|Harris Couple|Arson Murders|2002|Bound Victims|Fatal Fire|Crime Scene
Which handyman is questioned over his affair with the murdered wife?|Mike Patterson|Jeffrey Meadows|Charlie Layman|Harry Monkton|Medium|Mistaken Identity|Mike Patterson|Jean Harris|2002|Handyman|Secret Affair|Murder Suspect
What condition affects Paul Harris and contributes to the couple's troubled marriage?|Paraplegia|Blindness|Deafness|Amnesia|Medium|Mistaken Identity|Paul Harris|Paraplegia|2002|Marriage|Jean Harris|Character Backstory
What material at both crime scenes links the unidentified reservoir body to the murdered couple?|Garden lime|Motor oil|Gold leaf|Horse hair|Hard|Mistaken Identity|Garden Lime|Reservoir Victim|Harris Murders|2002|Forensic Link|Crime Scene Evidence
In what professional field does Pam Hartley work when Frost asks for help profiling the killer?|Psychology|Forensic accounting|Pathology|Journalism|Medium|Mistaken Identity|Pam Hartley|Psychologist|2002|Criminal Profiler|Frost Colleague|Specialist Witness
Which former armed robber is first thought to be linked to the apparently connected killings?|Charlie Layman|Ronnie Eustace|Gerry Ryan|Lemmy Hoxton|Hard|Mistaken Identity|Charlie Layman|Armed Robbery|2002|Old Trial|Suspect Theory|Crime History
Why can Charlie Layman not have committed the new murders himself?|He had died in prison the previous year|He had emigrated to Australia|He was paralysed in hospital|He was in police custody abroad|Medium|Mistaken Identity|Charlie Layman|Died In Prison|2002|Alibi By Death|Old Conviction|Case Clue
What is the true identity of the corpse recovered from the reservoir?|Reginald Molloy|Paul Harris|Jeffrey Meadows|Mike Patterson|Medium|Mistaken Identity|Reginald Molloy|Reservoir Body|2002|Victim Identification|Old Trial|Murder Investigation
Who is ultimately revealed as the killer targeting families connected to an earlier trial?|Jeffrey Meadows|Mike Patterson|Charlie Layman|Harry Monkton|Medium|Mistaken Identity|Jeffrey Meadows|Serial Killer|2002|Revenge Plot|Case Resolution|Family Victims
How is killer Jeffrey Meadows related to the man convicted in the old robbery case?|He is his son|He is his nephew|He is his brother|He is his former cellmate|Medium|Mistaken Identity|Jeffrey Meadows|Charlie Layman|Father Son|2002|Revenge Motivation|Old Robbery Trial
Why did the killer target relatives of people who testified years earlier?|To make the witnesses suffer through their families|To inherit the witnesses' property|To cover up horse theft|To pressure them into changing bank statements|Medium|Mistaken Identity|Jeffrey Meadows|Old Trial Witnesses|2002|Revenge|Families Targeted|Serial Murders
Which psychologist had earlier recommended that Jeffrey be placed into care?|Pam Hartley|Helena Gibson|Liz Maud|Anne|Hard|Mistaken Identity|Pam Hartley|Jeffrey Meadows|Care Recommendation|2002|Childhood Backstory|Profiler
Where does the killer trap the psychologist during the climax?|A pumping station's pipes|A deserted church tower|A quarry tunnel|A warehouse freezer|Medium|Mistaken Identity|Pam Hartley|Pumping Station|2002|Flooding Trap|Abduction|Case Climax
How does Jeffrey Meadows die after police track him down?|He jumps from a bridge|He is shot by Frost|He crashes a stolen car|He drowns in the reservoir|Medium|Mistaken Identity|Jeffrey Meadows|Bridge Jump|2002|Suicide|Final Confrontation|Killer Death
What illegal business is uncovered during a dispute between ice-cream vans?|Selling ecstasy alongside sweets|Smuggling rare animals|Transporting stolen cars|Selling counterfeit medicines|Medium|Mistaken Identity|Ice Cream Vans|Ecstasy Dealing|2002|Turf Dispute|Separate Investigation|Drug Trade
Which young woman disappears after her beloved horse is supposedly put down?|Melanie Monkton|Anne|Rachel Darrow|Helen Fox|Medium|Mistaken Identity|Melanie Monkton|Missing Woman|Horse|2002|Family Search|Separate Case
What financial deceit lies behind the supposed death of Melanie's horse?|Her father faked its euthanasia for insurance money|A vet switched it for a cheaper horse|The stables sold it to a racehorse syndicate|A jockey forged its ownership papers|Medium|Mistaken Identity|Harry Monkton|Horse Insurance Fraud|Melanie Monkton|2002|Faked Euthanasia|Debt Cover`;

const questionBank = [];

function addFacts(block, section) {
  for (const [index, line] of block.trim().split('\n').entries()) {
    const f = line.split('|').map(s => s.trim());

    if (f.length !== 13 || f.some(s => !s)) {
      throw new Error(
        `${section}, fact ${index + 1}: expected 13 nonempty fields, received ${f.length}`
      );
    }

    const [
      stem,
      correctAnswer,
      wrongA,
      wrongB,
      wrongC,
      difficulty,
      ...specific
    ] = f;

    const id = `tv_${FIRST_ID + questionBank.length}`;
    const answers = [wrongA, wrongB, wrongC];
    answers.splice(questionBank.length % 4, 0, correctAnswer);

    const tags = [...new Map([
      'Television',
      'British Television',
      'ITV',
      'Crime Drama',
      PROGRAMME,
      section,
      correctAnswer,
      ...specific
    ].map(t => [
      t.toLowerCase().replace(/[^a-z0-9]/g, ''),
      t
    ])).values()];

    const question = `In ${PROGRAMME}, ${stem[0].toLowerCase()}${stem.slice(1)}`;

    if (
      !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
      new Set(answers.map(a => a.toLowerCase())).size !== 4 ||
      !answers.includes(correctAnswer) ||
      tags.length < 11
    ) {
      throw new Error(`Invalid answer options, difficulty or tags for ${id}`);
    }

    questionBank.push({
      id,
      category: 'Television',
      question,
      answers,
      correctAnswer,
      difficulty,
      tags,
      dailyEligible: true
    });
  }
}

addFacts(programmeFacts, 'Series 6-9 1999-2002 Production and Cast');
addFacts(appendixMan, 'Series 6 1999 Appendix Man');
addFacts(oneMansMeat, 'Series 6 1999 One Mans Meat');
addFacts(privateLives, 'Series 6 1999 Private Lives');
addFacts(keysToTheCar, 'Series 6 1999 Keys to the Car');
addFacts(lineOfFire, 'Series 7 1999-2000 Line of Fire');
addFacts(benefitOfTheDoubt, 'Series 8 2001 Benefit of the Doubt');
addFacts(mistakenIdentity, 'Series 9 2002 Mistaken Identity');

const seen = new Set();

for (const item of questionBank) {
  const normalized = item.question
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  if (seen.has(normalized)) {
    throw new Error(`Duplicate question: ${item.id}`);
  }

  seen.add(normalized);
}

module.exports = questionBank;
