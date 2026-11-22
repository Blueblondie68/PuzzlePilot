
// quiz_pack385.js
// PuzzlePilot - The Bigggggg Quiz
// A Touch of Frost - Part 5: Series 14 (2008) and Series 15 (2010).
// Final Frost pack. Complete standalone CommonJS file for WordPad.
// Only mark the programme COMPLETE after this saved copy passes validation.

const FIRST_ID = 20474;
const PROGRAMME = 'A Touch of Frost';
// Format: question | correct answer | three wrong answers | difficulty | seven precise tags.
// The exporter adds programme, period, episode, genre and answer tags.

const programmeFacts = `How many episodes make up the penultimate series?|Three|Two|Four|Five|Easy|Series Fourteen|2008|Episode Count|Penultimate Series|ITV Broadcast|Production History|Television Schedule
Which year saw the penultimate series broadcast?|2008|2006|2009|2010|Easy|Series Fourteen|2008|Broadcast Year|ITV|Late Period|Programme History|Television Chronology
Which story opens the penultimate series?|Mind Games|Dead End|In the Public Interest|If Dogs Run Free|Easy|Mind Games|Series Fourteen|2008|First Episode|Broadcast Sequence|ITV|Programme Chronology
Which episode is second in the penultimate series?|Dead End|Mind Games|In the Public Interest|Held in Trust|Medium|Dead End|Series Fourteen|2008|Second Episode|Broadcast Sequence|ITV|Programme Chronology
Which story closes the 2008 series?|In the Public Interest|Mind Games|Dead End|If Dogs Run Free|Medium|In The Public Interest|Series Fourteen|2008|Third Episode|Broadcast Sequence|ITV|Programme Chronology
How many episodes make up the final series?|Two|Three|Four|One|Easy|Series Fifteen|2010|Episode Count|Two Part Finale|ITV Broadcast|Final Series|Television History
What year did the very last episode air?|2010|2008|2009|2011|Easy|Final Episode|2010|Series Fifteen|End Of Programme|ITV Broadcast|Television History|Finale
What is the title of the two-part story that ends the programme?|If Dogs Run Free|Mind Games|No Other Love|Endangered Species|Easy|If Dogs Run Free|Series Fifteen|Two Part Finale|2010|Last Case|Episode Title|Broadcast History
Who directed the 2008 episode Dead End?|Roger Bamford|Paul Harrison|Roy Battersby|Don Leaver|Hard|Roger Bamford|Dead End|Director|2008|Series Fourteen|Production Credit|Television Direction
Who wrote the script for the 2008 episode Dead End?|David Gilman|Michael Russell|Richard Harris|Thomas Ellice|Hard|David Gilman|Dead End|Screenwriter|2008|Series Fourteen|Production Credit|Television Writing
Which writer scripted In the Public Interest?|Thomas Ellice|Richard Harris|David Gilman|Christopher Blake|Hard|Thomas Ellice|In The Public Interest|Screenwriter|2008|Series Fourteen|Script Credit|Television Writing
Who directed both parts of the series finale?|Paul Harrison|Roger Bamford|Roy Battersby|Paul Jackson|Medium|Paul Harrison|If Dogs Run Free|Series Fifteen|2010|Director|Final Episodes|Production Credit
Which scriptwriter wrote both instalments of the 2010 finale?|Michael Russell|Richard Harris|David Gilman|Alma Cullen|Medium|Michael Russell|If Dogs Run Free|Series Fifteen|2010|Scriptwriter|Final Episodes|Production Credit
Who portrayed Detective Sergeant Annie Marsh in the 2008 series?|Cherie Lunghi|Phyllis Logan|Niamh Cusack|Susan Penhaligon|Medium|Cherie Lunghi|Annie Marsh|Dead End|Series Fourteen|2008|Actor Casting|Detective Sergeant
Who played RSPCA inspector Christine Moorhead in the final story?|Phyllis Logan|Niamh Cusack|Cherie Lunghi|Fiona Glascott|Easy|Phyllis Logan|Christine Moorhead|If Dogs Run Free|2010|Guest Actress|RSPCA Inspector|Frost Romance
Which actor portrayed crime boss Gerry Berland in the final story?|Adrian Dunbar|Adrian Lukis|George Costigan|Joseph Marcell|Medium|Adrian Dunbar|Gerry Berland|If Dogs Run Free|2010|Organised Crime|Actor Casting|Gangster
Which actress portrayed Gerry Berland's wife Sally?|Niamh Cusack|Phyllis Logan|Cherie Lunghi|Elizabeth Berrington|Medium|Niamh Cusack|Sally Berland|If Dogs Run Free|2010|Actor Casting|Family Storyline|Crime Boss Wife`;

const mindGames = `Which former prisoner returns to his village after serving twenty years?|Carl Meyer|Tom Brody|Jason Cohu|Roman Cassell|Medium|Carl Meyer|Released Prisoner|2008|Old Murder|Wrongful Conviction|Village Hostility|Childhood Case
How old was Jane Crewes when she was murdered in the historic case?|Fourteen|Twelve|Sixteen|Eighteen|Medium|Jane Crewes|Age Fourteen|2008|Historic Murder|Carl Meyer|Teenage Victim|Old Investigation
Which girl disappeared the same day as Jane Crewes's murder?|Harriet Collingham|Babs Sellwood|Gloria Ray|Cathy Thompson|Medium|Harriet Collingham|Missing Girl|Jane Crewes|2008|Unsolved Case|Cousins|Historic Crime
What is the family connection between the two girls in the old murder enquiry?|They were cousins|They were sisters|They were stepsisters|They were school rivals|Medium|Jane Crewes|Harriet Collingham|Cousin Relationship|Historic Murder|2008|Families|Cold Case
What event brings new physical evidence to light in the twenty-year-old case?|A housing development uncovers remains|A flood exposes a submerged car|A tree falls onto a hidden bunker|A retired officer finds a lost confession|Medium|Harriet Collingham|Housing Development|Human Remains|2008|Cold Case|Excavation|Forensic Evidence
Which local figure argues that the released man's innocence deserves consideration?|A vicar|A school governor|A magistrate|A newspaper editor|Medium|Carl Meyer|Vicar|2008|Presumption Of Innocence|Frost Reassessment|Village|Defence Of Suspect
Which earlier assumption does Frost come to question in the reunited girls' case?|That the convicted man committed the original murder|That the missing girl had emigrated|That the girls were unrelated|That both girls had survived|Medium|Carl Meyer|Wrongful Conviction|2008|Old Murder|Frost Doubt|Forensic Review|Reinvestigation
What does forensic examination suggest happened to Harriet before her body was buried?|She drowned in a river|She died in a house fire|She was killed in a traffic collision|She was poisoned at school|Hard|Harriet Collingham|River Drowning|Forensic Pathology|2008|Buried Remains|Cold Case|Cause Of Death
Which photograph helps Frost solve the old murders?|A photograph of a boat|A photograph of a school bus|A picture of a cricket match|A picture of a birthday cake|Hard|Boat Photograph|David Crewes|2008|Visual Clue|Frost Deduction|Cold Case|Historic Murders
Who is finally exposed as the killer of both girls?|David Crewes|Carl Meyer|Charlie Collingham|Joshua Ray|Medium|David Crewes|Jane Crewes|Harriet Collingham|2008|Double Murder|Case Resolution|Family Secret
What connection does the real killer have to murdered Jane Crewes?|He is her father|He is her uncle|He is her schoolteacher|He is her neighbour|Medium|David Crewes|Jane Crewes|Father Daughter|2008|Family Relationship|Historic Case|Murderer
Where does the man responsible for the girls' deaths take his own life?|At Jane's grave|At the police station|At a railway station|On a canal bridge|Medium|David Crewes|Graveside|2008|Suicide|Jane Crewes|Case Climax|Cold Case
What does Frost regret after clearing the wrongly convicted man?|Failing to question the families more closely years earlier|Not searching the river for stolen money|Arresting the vicar|Trusting an unreliable fingerprint expert|Medium|Jack Frost|Carl Meyer|2008|Investigative Regret|Historic Error|Wrongful Conviction|Self Reflection
Which police superior reassures Frost that he must learn from past mistakes?|Norman Mullett|George Toolan|Annie Marsh|Terry Reid|Easy|Norman Mullett|Jack Frost|2008|Old Case|Police Colleagues|Professional Regret|Moral Support
What work do Roman Cassell and Tom Brody do in the contemporary investigation?|Motivational speaking|Property surveying|Football coaching|Security consulting|Medium|Roman Cassell|Tom Brody|Motivational Speakers|2008|Second Investigation|Business Partners|Occupation
What prank leaves Roman Cassell and Tom Brody without their clothing?|Their lovers steal their clothes during a midnight swim|Their bags are taken from a gym|Their car is towed from a beach|Their hotel room is locked from outside|Medium|Roman Cassell|Tom Brody|Midnight Swim|Practical Joke|2008|Naked Streak|Opening Events
Where is Roman Cassell found murdered after the prank?|At his office|At a swimming pool|At his father's farm|Inside a hotel lift|Medium|Roman Cassell|Office Murder|2008|Assault Victim|Second Investigation|Body Discovery|Denton
Which millionaire initially falls under suspicion over Roman Cassell's death?|Jason Cohu|Joshua Ray|Tom Brody|Carl Meyer|Medium|Jason Cohu|Roman Cassell|2008|Murder Suspect|Family Grievance|Millionaire|Steroid Scandal
What family relationship links Joshua Ray to Jason Cohu?|Joshua is Jason's father-in-law|Joshua is Jason's brother|Joshua is Jason's uncle|Joshua is Jason's business partner|Hard|Joshua Ray|Jason Cohu|Father In Law|2008|Family Link|Suspicion|Steroid Scandal
What illegal substances lie behind the grievance against the murdered motivational speaker?|Anabolic steroids|Counterfeit antibiotics|Prescription sedatives|Illegal painkillers|Medium|Roman Cassell|Illegal Steroids|2008|Sporting Ambitions|Jason Cohu|Criminal Distribution|Motive
What ambition was ruined for Jason Cohu's wife by the illegal drug dealings?|Competing in the Olympics|Joining the police|Performing at the Royal Opera|Becoming a surgeon|Medium|Jason Cohu|Wife|Olympic Ambition|2008|Steroid Distribution|Family Grievance|Sport
Which forensic observation helps rule out the two men suspected of killing Cassell?|Too little blood at the office crime scene|A fingerprint on a swimming cap|A matching shoeprint in the garden|An unidentified hair on a jacket|Medium|Roman Cassell|Office Crime Scene|Lack Of Blood|2008|Forensic Deduction|Jason Cohu|Joshua Ray
Which woman actually kills Roman Cassell after suffering abuse from him?|Babs Sellwood|Harriet Collingham|Gloria Crewes|Jane Crewes|Hard|Babs Sellwood|Roman Cassell|2008|Abusive Relationship|Murder Confession|Case Resolution|Domestic Violence
Which actress played the woman responsible for Cassell's death?|Elizabeth Berrington|Paula Wilcox|Cherie Lunghi|Niamh Cusack|Hard|Elizabeth Berrington|Babs Sellwood|Mind Games|2008|Actor Casting|Guest Actress|Case Resolution`;

const deadEnd = `What type of vehicle is involved in the earlier fatal road accident at the heart of the revenge plot?|A lorry|A coach|A taxi|A motorcycle|Easy|Mark Harrison|Fatal Road Accident|2008|Lorry|Revenge|Transport Case|Historic Collision
How many people died in the earlier collision involving the former lorry driver?|Four|Two|Three|Five|Medium|Mark Harrison|Four Victims|Road Collision|2008|Heal Family|Robert Trusham|Historic Tragedy
Which family lost three relatives in the earlier vehicle collision?|The Heal family|The Crewes family|The Harris family|The Berland family|Medium|Heal Family|Three Relatives|Lorry Collision|2008|Bereavement|Revenge Plot|Victims
What is the name of the former lorry driver now working on local buses?|Mark Harrison|Robert Trusham|Lofty Parker|Andy Heal|Medium|Mark Harrison|Bus Driver|2008|Overturned Conviction|Road Accident|Abduction Victim|Denton Buses
What fault helped the driver overturn his conviction for the old collision?|A mechanical defect in the lorry|A traffic light malfunction|An incorrectly fitted road sign|A defective tyre on the bus|Hard|Mark Harrison|Mechanical Fault|2008|Appeal|Conviction Overturned|Lorry Accident|Legal History
Who confronts the former lorry driver at the bus depot on behalf of the bereaved family?|Andy Heal|George Toolan|Robert Trusham|Joan Atkins|Medium|Andy Heal|Heal Family|Bus Depot|2008|Grievance|Confrontation|Road Accident
Which two bus employees are abducted together?|The driver and the conductress|Two ticket inspectors|The driver and a mechanic|Two bus cleaners|Easy|Bus Kidnapping|Mark Harrison|Jessica Green|2008|Abduction|Public Transport|Victims
What is the name of the female bus employee taken hostage?|Jessica Green|Joan Atkins|Annie Marsh|Babs Sellwood|Medium|Jessica Green|Bus Conductress|2008|Kidnap Victim|Mark Harrison|Hostage|Transport
Which medical condition makes the female hostage's captivity especially dangerous?|Diabetes|Asthma|Epilepsy|Heart failure|Medium|Jessica Green|Diabetes|2008|Medical Risk|Bus Hostage|Insulin|Kidnapping
Which former police colleague is assigned to Frost despite their past disagreement?|Annie Marsh|Maureen Lawson|Liz Maud|Hazel Wallace|Medium|Annie Marsh|DS Marsh|2008|Frost Partner|Former Complaint|Police Tensions|Denton CID
What did Frost's assigned partner once complain about in his policing?|He pursued a knife suspect without backup|He misplaced a firearm|He interviewed a prisoner without a solicitor|He lost a stolen vehicle|Medium|Annie Marsh|Jack Frost|2008|Dereliction Complaint|Unorthodox Methods|Officer Injured|Police Discipline
Which entertainer is discovered dead in an alley during the other investigation?|Lofty Parker|Tom Brody|Roman Cassell|Mark Harrison|Medium|Lofty Parker|Clown|2008|Alley Body|Entertainer Murder|Separate Investigation|Victim
What was the murdered entertainer's performing persona?|A clown|A magician|A puppeteer|A ventriloquist|Easy|Lofty Parker|Clown|Childrens Parties|2008|Performing Career|Murder Victim|Entertainment
What secret offence was committed while the entertainer visited houses for performances?|Stealing jewellery|Selling illegal fireworks|Forging charity receipts|Installing hidden cameras|Medium|Lofty Parker|Jewellery Theft|2008|House Parties|Burglary|Criminal Secret|Clown
Which woman hosted the clown's final performance?|Joan Atkins|Jessica Green|Annie Marsh|Babs Sellwood|Hard|Joan Atkins|Lofty Parker|2008|Final Show|Childrens Party|Homeowner|Witness
Who actually inflicted the blow that killed the children's entertainer?|Joan Atkins's husband|Robert Trusham|Andy Heal|Mark Harrison|Hard|Lofty Parker|Joan Atkins|Husband|2008|Fatal Blow|Jewellery Confrontation|Case Resolution
What made the blow to the entertainer unexpectedly fatal?|An existing head injury|A severe allergy|A concealed knife wound|A heart condition caused by drugs|Medium|Lofty Parker|Previous Head Injury|2008|Cause Of Death|Assault|Forensic Finding|Clown Murder
Which widower joins the bereaved family's youngest son in abducting the bus driver?|Robert Trusham|Joshua Ray|Jason Cohu|Gerry Berland|Medium|Robert Trusham|Mark Harrison|2008|Revenge Kidnapping|Loss Of Wife|Heal Family|Accomplice
What distraction does the bus driver ultimately confess caused the old lorry accident?|Using his mobile phone|Adjusting a radio|Looking at a map|Smoking a cigarette|Medium|Mark Harrison|Mobile Phone|2008|Recorded Confession|Distracted Driving|Fatal Collision|Responsibility
Where does the vengeful kidnapper suspend his prisoner with a noose?|In an elevator shaft|Over a river bridge|Inside a mine shaft|Above a disused swimming pool|Medium|Robert Trusham|Mark Harrison|2008|Elevator Shaft|Noose|Kidnap Torture|Condemned Building
What police action unintentionally causes the trapped bus driver's death?|Using the elevator|Cutting a telephone line|Switching off the building's lights|Opening a security gate|Hard|George Toolan|Robert Trusham|Elevator|2008|Mark Harrison|Unwitting Action|Fatal Trap
What lesson does DS Marsh give Frost after he risks himself in the rescue?|His disregard for rules may eventually get him killed|He should request an immediate promotion|He ought to join the traffic division|He should avoid working with Toolan|Medium|Annie Marsh|Jack Frost|2008|Rule Breaking|Personal Warning|Police Partnership|Final Conversation`;

const publicInterest = `How many men's bodies are found in the unusual grave at the opening of the story?|Three|Two|Four|Five|Easy|Three Bodies|Old Burial Site|2008|Murder Enquiry|Crime Scene|Eastern European Workers|Discovery
How are the bodies positioned in the grave?|In a triangle|In a straight line|In a circle|In a cross shape|Medium|Triangle Arrangement|Old Burial Site|2008|Staged Ritual|Three Victims|Crime Scene|Grave
Where did the three dead men come from?|Eastern Europe|South America|North Africa|South Asia|Medium|Eastern European Workers|2008|Migrant Labour|Burial Site|Victims|Housing Conditions|Investigation
Which foreign academic suggests that the unusual burial is linked to dark rituals?|An American anthropologist|A French archaeologist|A German historian|An Italian criminologist|Medium|American Anthropologist|Ritual Theory|2008|Academic|Grave|False Lead|Investigation
What motive does the academic have for publicising the ritual-killing theory?|Promoting an upcoming book|Winning a university grant|Protecting a relative|Obtaining a police post|Hard|American Anthropologist|Book Promotion|2008|Sensational Theory|False Lead|Media Publicity|Ritual Claims
What actually causes the deaths of the buried workers?|Carbon monoxide poisoning|Poisoned food|Deliberate strangulation|An industrial explosion|Medium|Carbon Monoxide|Immigrant Workers|2008|Faulty Heater|Actual Cause|Forensics|Multiple Deaths
Why are the bodies buried to resemble a ritual killing?|To conceal negligent accommodation conditions|To hide a dispute over inheritance|To protect an archaeological discovery|To mislead an insurance assessor|Medium|Staged Ritual|Worker Deaths|2008|Negligent Landlord|Carbon Monoxide|False Crime Scene|Cover Up
Which wealthy businessman plans to replace a youth club with offices?|James Callum|Jason Cohu|Joshua Ray|Roman Cassell|Medium|James Callum|Businessman|2008|Youth Club|Office Development|Property Plan|Denton
Which actor plays the businessman involved in the youth-club dispute?|Adrian Lukis|Adrian Dunbar|Joseph Marcell|Keith Barron|Medium|Adrian Lukis|James Callum|2008|Actor Casting|Guest Star|Property Developer|Businessman
What media businesses does the developer purchase to attack his opponents?|Local newspapers|Radio stations|Television channels|Advertising agencies|Medium|James Callum|Local Newspapers|2008|Smear Campaign|Youth Club Leaders|Media Ownership|Intimidation
Which profession is held by Rosemary, the developer's lover?|Fitness instructor|Solicitor|Teacher|Nurse|Medium|Rosemary|James Callum|2008|Fitness Instructor|Secret Affair|Murder Victim|Occupation
Where is Rosemary found dead?|On her houseboat|At a health club|In the newspaper office|Beside a church|Medium|Rosemary|Houseboat|2008|Body Discovery|James Callum|Murder Investigation|Crime Scene
What is the name of the businessman's fiercely loyal personal assistant?|Michael Carne|Carl Meyer|Robert Trusham|Joshua Ray|Medium|Michael Carne|James Callum|2008|Personal Assistant|Work Relationship|Secret Life|Suspect
Which other name is connected to the personal assistant's private identity?|Michelle|Marianne|Melissa|Miranda|Medium|Michael Carne|Michelle|2008|Private Identity|Character Secret|James Callum|Investigation
What happens to Frost's home as he closes in on the developer?|It is broken into and ransacked|Its garage is deliberately flooded|Its windows are boarded up by police|It is bought by the council|Medium|Jack Frost|Home Ransacked|2008|James Callum|Intimidation|Investigative Pressure|Break In
Who is implicated in Rosemary's death after jealousy over the businessman's affairs?|Michael Carne|Joshua Ray|Carl Meyer|Jason Cohu|Hard|Michael Carne|Rosemary|2008|Jealousy|James Callum|Murder Plot|Case Resolution
Who shoots the personal assistant during the confrontation at the businessman's home?|James Callum|Jack Frost|George Toolan|Annie Marsh|Medium|James Callum|Michael Carne|2008|Fatal Shooting|House Confrontation|Murder|Case Climax
Why does the businessman want his assistant dead rather than facing trial?|To prevent public exposure of their relationship and crimes|To recover a stolen passport|To claim compensation for the youth club|To stop a financial audit of the newspapers|Medium|James Callum|Michael Carne|2008|Reputation|Trial Exposure|Planned Shooting|Motive
What evidence secretly records the developer's explanation of the killing?|An audio recording made by Frost|A neighbour's CCTV recording|A telephone voicemail|A recording hidden in a wristwatch|Hard|Frost Recording|James Callum|2008|Secret Confession|Audio Evidence|Case Resolution|Police Tactics
Which investigator discovers the faulty-heater explanation for the workers' deaths?|George Toolan|Annie Marsh|Terry Reid|Norman Mullett|Easy|George Toolan|Carbon Monoxide|2008|Worker Deaths|False Ritual|Forensic Breakthrough|Denton CID`;

const finalCase = `Which animal-welfare organisation helps police investigate the illegal fighting operation?|RSPCA|RSPB|Dogs Trust|Blue Cross|Easy|RSPCA|Dog Fighting|2010|Animal Welfare|Police Cooperation|Finale|Raid
What illegal activity is targeted in the opening raid of the finale?|Organised dog fighting|Horse-racing fraud|Exotic bird smuggling|Illegal seal hunting|Easy|Dog Fighting|2010|Criminal Ring|Gerry Berland|Animal Cruelty|Police Raid|Finale
Which inspector from the animal-welfare charity begins working with Frost?|Christine Moorhead|Annie Marsh|Sally Berland|Jennifer Mallinger|Medium|Christine Moorhead|RSPCA Inspector|2010|Jack Frost|Animal Welfare|New Relationship|Case Partner
Which wealthy local criminal controls the illegal dog-fighting operation?|Gerry Berland|James Callum|Robert Trusham|Mark Harrison|Medium|Gerry Berland|Dog Fighting|2010|Crime Boss|Animal Cruelty|Organised Crime|Money Laundering
What other illegal trade is linked to the dog-fighting organiser?|Drug smuggling|Counterfeit clothes|Stolen paintings|Illegal arms exports|Medium|Gerry Berland|Drug Smuggling|2010|Dog Fighting|Organised Crime|Money Laundering|Hidden Operation
Why does the organiser avoid arrest during the initial raid?|He arrives after the police have completed it|He hides inside a veterinary clinic|He is mistaken for a police officer|He escapes by boat|Medium|Gerry Berland|Police Raid|2010|Late Arrival|Dog Fighting|Escape Arrest|Timing
Which teenager kills his former friend Brian?|Sean Berland|Neil|Allen Moorhead|Greg Salmond|Medium|Sean Berland|Brian|2010|Teenage Killing|Knife Attack|Gerry Berland|Fatal Confrontation
How is Sean related to the crime boss running the ring?|He is his son|He is his nephew|He is his brother|He is his stepson|Easy|Sean Berland|Gerry Berland|Father Son|2010|Family Link|Dog Fighting|Crime Boss
What weapon is used to kill teenager Brian?|A knife|A firearm|A metal bar|A broken bottle|Medium|Brian|Sean Berland|Knife Attack|2010|Fatal Injury|Teenage Violence|Murder
Why does Sean blame Brian for the police interest in the operation?|He believes Brian tipped off the animal-welfare inspectors|He thinks Brian stole the fighting dogs|He believes Brian forged his father's accounts|He accuses Brian of stealing drugs|Medium|Sean Berland|Brian|2010|RSPCA Tip Off|False Suspicion|Teenage Conflict|Murder Motive
Which other teenager witnesses the fatal confrontation?|Neil|Robbie|Matthew|Carl|Medium|Neil|Sean Berland|Brian|2010|Witness|Teenage Accomplice|Police Investigation
How does Christine recognise the two teenagers involved in Brian's death?|They attend the same school as her children|They work at the animal shelter|They are her nephews|They live on the same street as Frost|Medium|Christine Moorhead|Sean Berland|Neil|2010|School Connection|Witness Identification|Family
What is the name of the crime boss's wife, pressured to protect their son?|Sally|Christine|Jenny Mallinger|Annie|Medium|Sally Berland|Gerry Berland|Sean Berland|2010|Mother|False Alibi|Family Pressure
How does the crime boss try to shield the teenagers from prosecution?|He arranges false alibis|He sends them to a boarding school|He bribes a magistrate|He destroys the police station files|Medium|Gerry Berland|Sean Berland|Neil|2010|False Alibis|Cover Up|Witness Tampering
Which hired criminal is sent to burn down the animal-welfare unit?|Lisowski|Greg Salmond|Robert Trusham|Michael Carne|Medium|Lisowski|RSPCA Fire|2010|Gerry Berland|Arsonist|Witness Intimidation|Criminal Employee
Why does the gang organiser order the animal-welfare centre attacked?|To silence the inspector who can identify his son|To destroy records about stolen horses|To recover a confiscated painting|To collect insurance on the building|Medium|Christine Moorhead|Gerry Berland|2010|Witness Threat|RSPCA Centre|Arson Motive|Sean Berland
What happens to the animal-welfare inspector during the attack?|She survives the fire|She is killed in the blaze|She flees the country|She is arrested for the fire|Easy|Christine Moorhead|RSPCA Arson|2010|Survivor|Police Rescue|Finale|Romance
What pattern emerges from a separate series of crimes aimed at frightening Frost?|They imitate incidents from his earlier career|They all happen at the same house|They involve stolen veterinary equipment|They target only police vehicles|Medium|Copycat Crimes|Jack Frost|2010|Old Cases|Threat Campaign|Revenge Plot|Mysterious Offender
What warning is written on Frost's car during the threats?|You Die Next|Leave Denton Now|Remember Clive|Your Time Is Up|Medium|You Die Next|Threat On Car|2010|Jack Frost|Vandalism|Copycat|Intimidation
Which police-station employee is revealed as the obsessive copycat criminal?|The new archivist Jenny Mallinger|A forensic pathologist|A civilian cleaner|An emergency dispatcher|Medium|Jenny Mallinger|Police Archivist|2010|Copycat Crimes|Jack Frost|Case Resolution|Revenge
Which actress portrayed the police archivist obsessed with Frost?|Fiona Glascott|Niamh Cusack|Phyllis Logan|Cherie Lunghi|Hard|Fiona Glascott|Jenny Mallinger|2010|Archivist|Casting|Copycat Criminal|Finale
What collection found at Jenny Mallinger's home reveals her fixation on Frost?|Newspaper clippings about his old investigations|Stolen police uniforms|Maps of dog-fighting venues|A collection of forged passports|Hard|Jenny Mallinger|Newspaper Clippings|Jack Frost|2010|Obsession|Old Cases|Evidence
What happened to Jenny Mallinger's father years earlier?|Frost exposed his police corruption|He died while rescuing Frost|He was promoted ahead of Frost|He was wrongly accused of smuggling dogs|Hard|Jenny Mallinger|Father|Corrupt Police Officer|2010|Jack Frost|Old Grudge|Revenge Motive
Where does Jenny Mallinger threaten Frost with a gun?|On a rooftop|Inside a police cell|At the wedding church|Inside the animal shelter|Medium|Jenny Mallinger|Jack Frost|2010|Rooftop Confrontation|Gunpoint|Final Threat|Police Arrest
What does Jenny Mallinger demand Frost do during their confrontation?|Jump from the roof|Confess to stealing money|Surrender his George Cross|Release a prisoner|Medium|Jenny Mallinger|Rooftop|2010|Threat|Revenge|Gunpoint|Frost Survival
How does Frost escape Jenny Mallinger's armed confrontation?|He tackles the attacker and has her arrested|He jumps into a river|He is rescued by a police helicopter|He persuades her to shoot herself|Medium|Jack Frost|Jenny Mallinger|2010|Rooftop Struggle|Arrest|Survival|Copycat Crimes
How does Berland silence the thug who set the animal centre on fire?|He gives him a lethal dose of cocaine|He arranges a staged road crash|He sends him abroad|He locks him in a warehouse|Medium|Gerry Berland|Lisowski|2010|Cocaine Overdose|Murder Cover Up|Arsonist|Organised Crime
Which lawyer's stolen car leads police towards the drug operation?|Greg Salmond's|James Callum's|Joshua Ray's|Annie Marsh's|Hard|Greg Salmond|Stolen Car|2010|Drug Stash|Police Lead|Solicitor|Berland Ring
What incriminating substance is found in the lawyer's stolen vehicle?|Cocaine|Heroin|Cannabis|Methamphetamine|Medium|Greg Salmond|Cocaine|2010|Stolen Car|Drug Evidence|Joyriding|Police Discovery
Where is the crime boss's main illegal operation located?|At a farm|At a harbour warehouse|At a university laboratory|In a railway tunnel|Medium|Gerry Berland|Farm|2010|Dog Fighting|Drugs|Money Laundering|Police Raid
What ultimately happens to the boss's son after his involvement in Brian's death?|He takes his own life|He flees overseas|He becomes a police informant abroad|He is acquitted in court|Medium|Sean Berland|Suicide|2010|Guilt|Brian Murder|Family Tragedy|Finale
Which member of Berland's family finally leaves him as his empire collapses?|His wife Sally|His brother Michael|His father|His daughter Jennifer|Medium|Sally Berland|Gerry Berland|2010|Marriage Breakdown|Family Coercion|Departure|Crime Family
What decision does Berland make after his son's death and the collapse of his business?|He surrenders to Frost|He escapes to Spain|He takes Frost hostage|He joins witness protection|Medium|Gerry Berland|Jack Frost|2010|Surrender|Sean Berland|Drug Empire|Case Resolution
What is the first name of Christine's former husband who returns before the wedding?|Allen|George|Gerry|Charlie|Medium|Allen Moorhead|Christine Moorhead|2010|Ex Husband|Wedding|Alcoholism|Finale
Which actor portrayed Christine's former husband?|George Costigan|Adrian Dunbar|Adrian Lukis|Joseph Marcell|Medium|George Costigan|Allen Moorhead|2010|Actor Casting|Guest Actor|Wedding Crash|Finale
What personal problem has Christine's former husband relapsed into?|Alcohol dependence|A gambling addiction|A dangerous driving habit|A drug-smuggling operation|Medium|Allen Moorhead|Alcoholism|2010|Relapse|Christine Moorhead|Ex Husband|Wedding Rehearsal
What violent event disrupts Frost and Christine's wedding day?|A car is deliberately driven into the arrivals at the church|An armed robbery takes place in the church|A fire destroys the reception venue|An explosion hits the police station|Easy|Wedding Day|Allen Moorhead|2010|Car Attack|Church|Series Finale|Tragedy
Who deliberately drives into Frost and his companions outside the church?|Allen Moorhead|Gerry Berland|Greg Salmond|Sean Berland|Medium|Allen Moorhead|Car Attack|2010|Wedding|Christine Moorhead|Jealousy|Finale
Which long-serving detective dies after the collision outside the church?|George Toolan|Norman Mullett|Jack Frost|Terry Reid|Easy|George Toolan|Death|2010|Wedding Crash|Finale|Denton CID|Longtime Colleague
What role is George Toolan due to play at Frost's wedding?|Best man|Registrar|Witness for the bride|Organist|Medium|George Toolan|Best Man|Jack Frost|2010|Wedding Ceremony|Friendship|Finale
Which other senior police figure is struck by the wedding-day car alongside Frost and Toolan?|Norman Mullett|Terry Reid|Annie Marsh|Robert Presley|Medium|Norman Mullett|Car Attack|2010|Wedding|George Toolan|Jack Frost|Senior Officer
Which person dies immediately in the deliberately caused collision?|Allen Moorhead|Jack Frost|Norman Mullett|Christine Moorhead|Medium|Allen Moorhead|Death|Car Crash|2010|Wedding Attack|Ex Husband|Finale
Who survives the collision and chooses to build a life with Christine?|Jack Frost|George Toolan|Allen Moorhead|Gerry Berland|Easy|Jack Frost|Christine Moorhead|2010|Survives|Personal Future|Series Ending|Wedding
What is revealed about how the final scene could have played out differently?|Alternative endings were filmed with Frost or Mullett dying|The whole cast filmed a wedding on a beach|A second wedding was filmed in Scotland|The finale was originally meant to have no deaths|Hard|Alternate Endings|2010|Frost Dies Version|Mullett Dies Version|Filming Choices|Behind The Scenes|Series Finale
What new priority does Frost acknowledge after grieving his longtime colleague?|Making time for his personal life with Christine|Seeking promotion to superintendent|Moving to a police unit abroad|Reopening every case from his first series|Medium|Jack Frost|Christine Moorhead|George Toolan|2010|Life After Police|Personal Priorities|Series Farewell`;

const questions = [];
const seen = new Set();

function addFacts(block, section, episode = null) {
  for (const [lineNo, row] of block.trim().split('\n').entries()) {
    const fields = row.split('|').map(s => s.trim());
    if (fields.length !== 13 || fields.some(s => s.length === 0)) {
      throw new Error(`${section} row ${lineNo + 1}: expected 13 non-empty fields, got ${fields.length}`);
    }
    const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specific] = fields;
    const id = `tv_${FIRST_ID + questions.length}`;
    const answers = [wrong1, wrong2, wrong3];
    answers.splice(questions.length % 4, 0, correctAnswer);
    const question = episode
      ? `In ${PROGRAMME} episode "${episode}", ${stem[0].toLowerCase()}${stem.slice(1)}`
      : `In ${PROGRAMME}, ${stem[0].toLowerCase()}${stem.slice(1)}`;
    const tags = [...new Map([
      'Television', 'British Television', 'ITV', 'Crime Drama', 'Police Procedural',
      PROGRAMME, 'Programme: '+PROGRAMME, section, ...(episode ? [episode] : []), correctAnswer, ...specific
    ].map(tag => [tag.toLowerCase().replace(/[^a-z0-9]/g, ''), tag])).values()];
    const key = question.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (seen.has(key)) throw new Error(`Repeated question: ${id}`);
    if (!['Easy', 'Medium', 'Hard'].includes(difficulty) ||
        new Set(answers.map(a => a.toLowerCase())).size !== 4 ||
        !answers.includes(correctAnswer) || tags.length < 11) {
      throw new Error(`Invalid options, difficulty or tags: ${id}`);
    }
    seen.add(key);
    questions.push({ id, category: 'Television', programme: PROGRAMME, question, answers, correctAnswer, difficulty, tags, dailyEligible: true });
  }
}

addFacts(programmeFacts, 'Series 14-15 2008-2010 Production and Cast');
addFacts(mindGames, 'Series 14 2008 Mind Games', 'Mind Games');
addFacts(deadEnd, 'Series 14 2008 Dead End', 'Dead End');
addFacts(publicInterest, 'Series 14 2008 In the Public Interest', 'In the Public Interest');
addFacts(finalCase, 'Series 15 2010 If Dogs Run Free', 'If Dogs Run Free');



// Final A Touch of Frost audit: original tv_20474–tv_20601 preserved.
// Series 14 (2008): Mind Games, Dead End, In the Public Interest.
// Series 15 (2010): If Dogs Run Free Parts One and Two.
// Independent episode / cast research:
// https://en.wikipedia.org/wiki/List_of_A_Touch_of_Frost_episodes
// https://epguides.com/touchoffrost/guide.shtml
// https://www.tvmaze.com/episodes/371951/a-touch-of-frost-15x01-if-dogs-run-free-part-1
// https://www.tvmaze.com/episodes/371952/a-touch-of-frost-15x02-if-dogs-run-free-part-2
// New IDs start at tv_40718.
const audit385_mind=`In Mind Games, which actor portrayed wrongly convicted villager Carl Meyer?|Jonathan Slinger|John Castle|Nicholas Farrell|Keith Barron|Mind Games|Series 14|Carl Meyer guest actor
In Mind Games, who played David Crewes, father of one of the murdered girls?|Keith Barron|John Castle|Joseph Marcell|Julian Forsyth|Mind Games|Series 14|David Crewes performer
In Mind Games, which actress played Harriet Collingham's mother Gloria?|Paula Wilcox|Julia Watson|Elizabeth Berrington|Juliet Howland|Mind Games|Series 14|Gloria Collingham performer
In Mind Games, who portrayed Harriet's father Charlie Collingham?|John Castle|Keith Barron|Jonathan Slinger|Nicholas Farrell|Mind Games|Series 14|Charlie Collingham actor
In Mind Games, which actress portrayed the Reverend Lucy Daniels?|Julia Watson|Paula Wilcox|Elizabeth Berrington|Sarah-Jayne Steed|Mind Games|Series 14|Village vicar actress
In Mind Games, who played millionaire Jason Cohu?|Ariyon Bakare|Joseph Marcell|Vincent Leigh|Dhafer L'Abidine|Mind Games|Series 14|Jason Cohu guest actor
In Mind Games, who portrayed Joshua Ray, the millionaire's father-in-law?|Joseph Marcell|Ariyon Bakare|John Castle|Keith Barron|Mind Games|Series 14|Joshua Ray guest actor
In Mind Games, which actor played motivational speaker Roman Cassell?|Dhafer L'Abidine|Vincent Leigh|Jonathan Slinger|Joseph Marcell|Mind Games|Series 14|Roman Cassell guest actor
In Mind Games, who portrayed Roman Cassell's fellow motivational speaker Tom Brody?|Vincent Leigh|Jonathan Slinger|Ariyon Bakare|Nicholas Farrell|Mind Games|Series 14|Tom Brody guest actor
In Mind Games, what did the discovery of Harriet's remains establish about when she was buried?|She was buried after Carl Meyer's imprisonment|She was buried before Jane disappeared|She was buried during the week of Carl's trial|She was buried by a new housing contractor|Mind Games|Series 14|Evidence establishing Carl's innocence
In Mind Games, what had David Crewes done to his niece Harriet that he was trying to conceal?|Sexually abused her|Stolen her inheritance|Coerced her to join a gang|Used her identity to commit fraud|Mind Games|Series 14|Motive behind the killings
In Mind Games, who first came across Jane Crewes's body before being wrongly convicted?|Carl Meyer|Charlie Collingham|Roman Cassell|Jason Cohu|Mind Games|Series 14|Wrongful-conviction case origin`;

const audit385_dead=`In Dead End, which actor played the bereaved family's son Andy Heal?|Stephen Kennedy|Jason Maza|Brett Allen|Daren Elliott Holmes|Dead End|Series 14|Andy Heal guest actor
In Dead End, who portrayed former lorry driver Mark Harrison?|Daren Elliott Holmes|Stephen Kennedy|Brett Allen|Richard Clews|Dead End|Series 14|Mark Harrison performer
In Dead End, which actress played Linda Heal?|Dearbhla Molloy|Sarah Ball|Joanne Mitchell|Sally Hurst|Dead End|Series 14|Linda Heal guest actress
In Dead End, which actor played the youngest Heal son John?|Jason Maza|Brett Allen|Stephen Kennedy|Joe Renton|Dead End|Series 14|John Heal guest actor
In Dead End, who portrayed the bereaved widower Robert Trusham?|Brett Allen|Stephen Kennedy|Daren Elliott Holmes|Joe Renton|Dead End|Series 14|Robert Trusham performer
In Dead End, which actor played clown and jewellery thief Lofty Parker?|Richard Clews|Vincent Riotta|Daren Elliott Holmes|Stephen Kennedy|Dead End|Series 14|Lofty Parker guest actor
In Dead End, who portrayed Joan Atkins, who had hosted the clown's final performance?|Joanne Mitchell|Dearbhla Molloy|Sarah Ball|Sally Hurst|Dead End|Series 14|Joan Atkins performer
In Dead End, what piece of jewellery on the dead clown helps expose his thefts?|A gold ring|A diamond necklace|A silver brooch|A pearl bracelet|Dead End|Series 14|Clown's stolen jewellery evidence
In Dead End, what blunder does Joan Atkins's husband make after confronting the thief?|He takes back the wrong jewellery|He leaves his wallet at the scene|He calls the wrong police station|He mistakes the victim for a bus conductor|Dead End|Series 14|Mistake after clown confrontation
In Dead End, what does the abduction gang do once they learn the conductress needs insulin?|They release her from captivity|They take her to the hospital|They let her use a mobile phone|They give her a second hostage|Dead End|Series 14|Diabetic hostage released
In Dead End, which officer unknowingly operates the lift that kills the hanging bus driver?|George Toolan|Norman Mullett|Annie Marsh|Ernie Trigg|Dead End|Series 14|Fatal lift-shaft incident
In Dead End, what does widower Robert Trusham do after the lift-shaft killing?|He gives himself up to police|He runs away to Scotland|He tries to kill Frost|He leaves the country by ferry|Dead End|Series 14|Kidnapper's surrender`;

const audit385_public=`In In the Public Interest, which actress played the murder victim Rosemary Morrow?|Sarah Matravers|Mel Martin|Lauren Ward|Julia Dalkin|In the Public Interest|Series 14|Rosemary Morrow guest actress
In In the Public Interest, who portrayed Callum's personal assistant Michael Carne?|Tam Williams|Adrian Lukis|Paul Shane|Andrew Havill|In the Public Interest|Series 14|Michael Carne actor
In In the Public Interest, what is the name of the visiting anthropologist who promotes the ritual-murder theory?|Miriam Walker|Michelle Carne|Vanessa Allen|Rosemary Morrow|In the Public Interest|Series 14|Visiting anthropologist's name
In In the Public Interest, which actress played anthropologist Miriam Walker?|Lauren Ward|Sarah Matravers|Mel Martin|Julia Dalkin|In the Public Interest|Series 14|Miriam Walker actress
In In the Public Interest, which actor portrayed a character known as Diesel Bob?|Paul Shane|Tam Williams|Adrian Lukis|Andrew Havill|In the Public Interest|Series 14|Diesel Bob guest actor
In In the Public Interest, who played the local newspaper's deputy editor?|Mel Martin|Lauren Ward|Sarah Matravers|Aoife McMahon|In the Public Interest|Series 14|Deputy editor guest performer
In In the Public Interest, what personal crisis follows the newspapers' smear of the youth-club leadership?|One youth leader attempts suicide|The club treasurer leaves the country|The chairman is arrested for bribery|A volunteer burns down the premises|In the Public Interest|Series 14|Effect of smear campaign
In In the Public Interest, what does Michael Carne try to do to Frost during the confrontation at Callum's house?|Kill him|Kidnap him|Bribe him|Frame him for fraud|In the Public Interest|Series 14|Assistant attacks detective`;

const audit385_final=`In If Dogs Run Free, which actor played crime boss Berland's teenage son Sean?|Chris Overton|Peter Kelly|Adam James|Simon Shepherd|If Dogs Run Free|Series 15|Sean Berland guest actor
In If Dogs Run Free, which actor portrayed the murdered teenager Brian?|Peter Kelly|Chris Overton|Simon Shepherd|Adam James|If Dogs Run Free|Series 15|Brian guest performer
In If Dogs Run Free, who played solicitor Greg Salmond?|Adam James|George Costigan|Simon Shepherd|James McKenna|If Dogs Run Free|Series 15|Greg Salmond performer
In If Dogs Run Free, which actress portrayed Christine's daughter Sophie Moorhead?|Poppy Lee Friar|Fiona Glascott|Niamh Cusack|Phyllis Logan|If Dogs Run Free|Series 15|Sophie Moorhead performer
In If Dogs Run Free, which actor played Tom Viner?|Simon Shepherd|Adam James|Adrian Dunbar|James McKenna|If Dogs Run Free|Series 15|Tom Viner guest actor
In If Dogs Run Free, who portrayed Sergeant Don Brady?|James McKenna|John Lyons|Arthur White|Adam James|If Dogs Run Free|Series 15|Sgt Brady actor
In If Dogs Run Free, which actress portrayed Dr Amanda Chase?|Julia St. John|Fiona Glascott|Poppy Lee Friar|Niamh Cusack|If Dogs Run Free|Series 15|Dr Chase actress
In If Dogs Run Free, what additional financial crime does Berland run alongside drug dealing and dog fighting?|Money laundering|Counterfeit art auctions|Insurance-claims fraud|Illegal bank lending|If Dogs Run Free|Series 15|Crime boss financial operation
In If Dogs Run Free, which other parents does Berland pressure into providing false alibis for the boys?|Neil's parents|Christine's parents|Brian's parents|Jenny's parents|If Dogs Run Free|Series 15|False alibi coercion
In If Dogs Run Free, which long-serving officer recognises witness descriptions that implicate the police archivist?|George Toolan|Norman Mullett|Jack Frost|Ernie Trigg|If Dogs Run Free|Series 15|Copycat investigator's discovery
In If Dogs Run Free, how had Frost known archivist Jenny Mallinger years before the crimes?|He knew her when she was a child|They were married briefly|They attended the same university|She had been his superior officer|If Dogs Run Free|Series 15|Frost's childhood acquaintance
In If Dogs Run Free, what kind of crime from Frost's early cases is recreated by the copycat?|A mugging|An armed bank siege|A jewellery-shop robbery|An art-gallery theft|If Dogs Run Free|Series 15|Copycat incident
In If Dogs Run Free, what violent incident involves solicitor Greg Salmond's stolen car?|A hit-and-run involving a girl|A shoot-out at a railway station|An arson attack on a warehouse|A robbery at the zoo|If Dogs Run Free|Series 15|Stolen car used in a collision
In If Dogs Run Free, what recording links Salmond to the criminal who supplied cocaine?|CCTV footage of a drug purchase|A secretly recorded phone call|A police body-camera interview|A recording from a nightclub DJ|If Dogs Run Free|Series 15|Solicitor's drug-deal evidence
In If Dogs Run Free, who had taken Salmond's stolen car on a joyride?|His colleagues|Sean Berland and Neil|His estranged wife and daughter|Officers from Denton CID|If Dogs Run Free|Series 15|Solicitor vehicle thieves
In If Dogs Run Free, why do Neil and his parents finally decide to tell police the truth?|They believe Sean wanted them to come clean|They receive a financial reward|They are being offered immunity by Frost|They have moved abroad|If Dogs Run Free|Series 15|Witnesses agree to cooperate`;
const audit385Key=x=>String(x).normalize('NFKC').toLocaleLowerCase('en-GB')
 .replace(/[^\p{L}\p{N}]/gu,'');
function addAudit385(block,episode){
 for(const [index,line] of block.trim().split('\n').entries()){
  const f=line.split('|').map(x=>x.trim());
  if(f.length!==8||f.some(x=>!x))throw Error('Pack 385 row '+episode+' '+index+' invalid');
  const [stem,correctAnswer,a,b,c,sourceEpisode,series,focus]=f;
  const match=/^In (.+?), (.+)$/.exec(stem);
  if(!match||sourceEpisode!==episode||match[1]!==sourceEpisode)throw Error('Pack 385 episode mismatch '+index);
  const question='In '+PROGRAMME+' episode "'+episode+'", '+match[2];
  const answers=[a,b,c];answers.splice(questions.length%4,0,correctAnswer);
  const tags=['Television','British Television','ITV','Crime Drama','Police Procedural',
   PROGRAMME,'Programme: '+PROGRAMME,'Series: '+series,'Episode: '+episode,
   'Story or guest cast: '+focus,'Correct answer: '+correctAnswer,
   'Episode case: '+episode,'Focus: '+focus,'Era: 2008–2010'];
  questions.push({id:'tv_'+(40718+questions.length-128),
   category:'Television',programme:PROGRAMME,question,answers,correctAnswer,
   difficulty:'Medium',tags,dailyEligible:true});
 }
}
addAudit385(audit385_mind,'Mind Games');
addAudit385(audit385_dead,'Dead End');
addAudit385(audit385_public,'In the Public Interest');
addAudit385(audit385_final,'If Dogs Run Free');
const audit385IDs=new Set(),audit385Stems=new Set();
for(const q of questions){
 const text=audit385Key(q.question);
 if(q.programme!==PROGRAMME||q.category!=='Television'||
 !q.tags.includes('Programme: '+PROGRAMME)||
 q.answers.length!==4||new Set(q.answers.map(audit385Key)).size!==4||
 q.answers.filter(a=>a===q.correctAnswer).length!==1||
 q.tags.length<12||q.dailyEligible!==true||
 audit385IDs.has(q.id)||audit385Stems.has(text))
 throw Error('Pack 385 final audit failed '+q.id);
 audit385IDs.add(q.id);audit385Stems.add(text);
}
module.exports=questions;
