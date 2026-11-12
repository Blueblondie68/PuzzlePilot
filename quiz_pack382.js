
 // quiz_pack382.js
// PuzzlePilot - The Bigggggg Quiz
// A Touch of Frost - Part 2: Series 4 (1996) and Series 5 (1997).
// Self-contained CommonJS; copy the ENTIRE file into WordPad.
// The programme stays PARTIAL until later series have been covered.

const FIRST_ID = 20073;
const PROGRAMME = 'A Touch of Frost';

// Format: question | correct answer | three incorrect answers | difficulty | seven specific tags.
const programmeFacts = `In which year did the fourth series first air?|1996|1994|1997|1999|Easy|Series Four|1996 Broadcast|ITV Transmission|Programme Chronology|Frost Timeline|Television History|Fourth Series
How many episodes make up the fourth series?|Five|Three|Four|Six|Medium|Series Four|Five Episodes|1996|Series Length|ITV Episodes|Programme Structure|Episode Count
Which episode opened the fourth series?|Paying the Price|Deep Waters|Unknown Soldiers|Fun Times for Swingers|Medium|Paying The Price|Series Four Premiere|1996|Episode Title|Opening Instalment|Original Broadcast|Programme Chronology
Which episode concluded the fourth series?|Deep Waters|Paying the Price|No Other Love|The Things We Do for Love|Medium|Deep Waters|Series Four Finale|1996|Episode Title|Last Instalment|Original Broadcast|Programme Chronology
In which year did the fifth series first air?|1997|1995|1996|1999|Easy|Series Five|1997 Broadcast|ITV Transmission|Programme Chronology|Frost Timeline|Television History|Fifth Series
How many episodes are in series five?|Four|Five|Three|Six|Medium|Series Five|Four Episodes|1997|Series Length|ITV Episodes|Programme Structure|Episode Count
Which episode launched the fifth series?|Penny for the Guy|House Calls|True Confessions|No Other Love|Medium|Penny For The Guy|Series Five Premiere|1997|Episode Title|Opening Instalment|Original Broadcast|Programme Chronology
Which instalment ended series five?|No Other Love|True Confessions|Deep Waters|House Calls|Medium|No Other Love|Series Five Finale|1997|Episode Title|Last Instalment|Programme Chronology|Clive Barnard
Who produced the fourth series?|Simon Lewis|Don Leaver|Martyn Auty|Richard Bates|Hard|Simon Lewis|Series Four|Producer Credit|1996|Production Team|Behind The Scenes|Yorkshire Television
Who produced the fifth series?|Martyn Auty|Simon Lewis|Don Leaver|David Reynolds|Hard|Martyn Auty|Series Five|Producer Credit|1997|Production Team|Behind The Scenes|Yorkshire Television
Which actress played DS Liz Maud during the fifth series?|Susannah Doyle|Sally Dexter|Caroline Harker|Lindy Whiteford|Easy|Susannah Doyle|Liz Maud|Detective Sergeant|Actor Casting|Series Five|1997|Police Partner
Which screenwriter wrote both Penny for the Guy and House Calls?|Malcolm Bradbury|Michael Russell|Richard Harris|Alma Cullen|Hard|Malcolm Bradbury|Penny For The Guy|House Calls|1997 Scripts|Series Five|Writer Credit|Television Adaptation`;

const payingThePrice = `In Paying the Price, what accidentally destroys Frost's house?|A cooking fire|A burst water main|A lightning strike|A gas boiler explosion|Easy|Paying The Price|House Fire|Cooking Accident|Frost Home|1996|Personal Life|Series Four
In Paying the Price, who is the woman abducted from a remote farm?|Pauline Venables|Sue Venables|Linda Brook|Vicky Phillips|Medium|Paying The Price|Pauline Venables|Kidnap Victim|Remote Farm|1996|Abduction Case|Series Four
In Paying the Price, what sort of shop do Pauline and Sue run?|A party and fancy-dress shop|A flower shop|A furniture warehouse|A second-hand bookshop|Medium|Paying The Price|Venables Sisters|Fancy Dress Shop|Retail Business|1996|Sisters Partnership|Denton
In Paying the Price, what family occasion is used to lure Pauline to the farm?|Her sister's birthday|Her mother's retirement|Her nephew's wedding|Her father's anniversary|Medium|Paying The Price|Pauline Venables|Sue Venables|Birthday Surprise|Farm Visit|1996|Kidnapping Set Up
In Paying the Price, what animal does Pauline expect to purchase as a gift?|A Labrador puppy|A kitten|A pony|A rabbit|Medium|Paying The Price|Labrador Puppy|Sue Venables|Birthday Gift|Remote Farm|1996|Abduction Trap
In Paying the Price, what is the initial ransom demand for Pauline?|£30,000|£5,000|£100,000|£500,000|Hard|Paying The Price|30000 Pounds|Pauline Venables|Ransom|1996|Abduction|Kidnap Demands
In Paying the Price, whose boyfriend is behind Pauline's kidnapping?|Linda Brook's|Sue Venables's|Shirley Fisher's|Claire Toms's|Medium|Paying The Price|Linda Brook|Controlling Boyfriend|Kidnap Plot|1996|Pauline Venables|Criminal Accomplice
In Paying the Price, what supposed group claims responsibility for the kidnapping?|The Taskforce|The Denton Brigade|The Watchmen|The People's Army|Hard|Paying The Price|Taskforce|Fictitious Group|Ransom Message|1996|Kidnapping Deception|Criminal Alias
In Paying the Price, which policewoman helps Frost search for Pauline?|Claire Toms|Hazel Wallace|Liz Maud|Maureen Lawson|Medium|Paying The Price|Claire Toms|WPC|Policewoman|1996|Kidnapping Investigation|Frost Colleague
In Paying the Price, what colour motorcycle helmet is associated with the kidnapper?|Blue|Red|Black|White|Medium|Paying The Price|Blue Helmet|Motorcycle|Kidnapper Clue|1996|Evidence|Disguise
In Paying the Price, what sound on a taped message gives Frost a clue about Pauline's location?|Farm background noises|A church organ|A railway crossing bell|A ferry horn|Medium|Paying The Price|Recorded Message|Farm Noises|Pauline Venables|1996|Sound Evidence|Kidnap Investigation
In Paying the Price, what happens to Linda when she lets Pauline see her kidnapper's face?|Her boyfriend kills her|She flees abroad|She calls the police|She is arrested immediately|Medium|Paying The Price|Linda Brook|Kidnapper Identification|Fatal Violence|1996|Guilt|Pauline Venables
In Paying the Price, how much is demanded in the final ransom request?|£50,000|£15,000|£30,000|£250,000|Hard|Paying The Price|50000 Pounds|Final Ransom|Pauline Venables|1996|Abduction Plot|Payment`;

const unknownSoldiers = `In Unknown Soldiers, where does Frost temporarily live after losing his home?|Above an Indian restaurant|In a caravan park|At the police station|In a seaside hotel|Easy|Unknown Soldiers|Indian Restaurant|Temporary Flat|Frost Housing|1996|House Fire Aftermath|Series Four
In Unknown Soldiers, what kind of reservist is killed during a training exercise?|A Territorial Army soldier|A naval diver|An RAF pilot|An army medic|Medium|Unknown Soldiers|Territorial Army|John Meredith|Training Exercise|1996|Military Murder|Reservist
In Unknown Soldiers, what is the name of the soldier shot during the exercise?|John Meredith|Neil Morrison|Steve Marson|Barry Hockey|Medium|Unknown Soldiers|John Meredith|Military Victim|Training Shoot|1996|Army Camp|Murder Case
In Unknown Soldiers, what is suspicious about the fatal gunshot at the army camp?|The exercise was meant to use blanks|No soldiers had any weapons|The victim was found at sea|The range had closed a month earlier|Medium|Unknown Soldiers|Blank Ammunition|John Meredith|Military Exercise|1996|Fatal Shooting|Suspicious Death
In Unknown Soldiers, what origin is traced for the bullet that kills John Meredith?|Russian|French|American|German|Medium|Unknown Soldiers|Russian Bullet|Forensic Ballistics|John Meredith|1996|Illegal Firearms|Military Murder
In Unknown Soldiers, which military investigator works with Frost?|Captain Carlisle|Major Harvey|Sergeant Donovan|Corporal Devenish|Medium|Unknown Soldiers|Captain Carlisle|Special Investigation Branch|Joint Enquiry|1996|Military Police|Detective Collaboration
In Unknown Soldiers, what is the secret relationship between John Meredith and Neil Morrison?|They are lovers|They are brothers|They are cousins|They are former school rivals|Medium|Unknown Soldiers|John Meredith|Neil Morrison|Secret Romance|Army Policy|1996|Military Personnel
In Unknown Soldiers, which sergeant is accused of blackmailing gay soldiers?|Donovan|Hastings|Prentice|Toolan|Hard|Unknown Soldiers|Sergeant Donovan|Blackmail|Army Personnel|1996|Secret Relationships|Military Investigation
In Unknown Soldiers, what illicit trade is Corporal Devenish linked to?|Selling Russian firearms|Forging army passports|Smuggling cigarettes|Stealing military vehicles|Medium|Unknown Soldiers|Corporal Devenish|Russian Handguns|Weapons Sales|1996|Illegal Arms|Army Scandal
In Unknown Soldiers, whose gun threatens Frost during an encounter with a young dealer?|Steve Marson's|John Meredith's|Neil Morrison's|Les James's|Medium|Unknown Soldiers|Steve Marson|Young Drug Dealer|Gunpoint|1996|Illegal Handgun|Frost Threatened
In Unknown Soldiers, what business suffers a run of armed robberies?|A security van company|A jewellery auction house|A savings bank|A department store|Easy|Unknown Soldiers|Denton Security|Armoured Vans|Armed Robbery|1996|Transport Company|Separate Case
In Unknown Soldiers, what clue links the security van drivers to staged robberies?|Fish scales found in a van|A stolen watch|A hotel key card|A paint-stained glove|Medium|Unknown Soldiers|Fish Scales|Security Drivers|False Robberies|1996|Forensic Clue|Fishing Hobby
In Unknown Soldiers, why do the security drivers stage the van robberies?|To raise money after being denied redundancy pay|To finance a secret arms deal|To cover a gambling syndicate|To fund a restaurant takeover|Medium|Unknown Soldiers|Redundancy Pay|Security Drivers|Staged Robbery|1996|Employment Dispute|Financial Motive`;

const funTimes = `In Fun Times for Swingers, who is Frost's reserved Scottish police partner?|DS Prentice|DS Maud|DC Tanner|DS Barnard|Medium|Fun Times For Swingers|Prentice|Scottish Detective|Police Partner|1996|Frost Colleague|Series Four
In Fun Times for Swingers, where does a woman die by suicide at the start of the investigation?|A multi-storey car park|A railway platform|A hotel roof|A river bridge|Medium|Fun Times For Swingers|Car Park|Suicide|Opening Death|1996|Suspicious Connection|Investigative Trigger
In Fun Times for Swingers, what item is found in the dead woman's handbag?|A photograph of a man|A stolen diamond|A restaurant receipt|A set of car keys|Medium|Fun Times For Swingers|Photograph|Dead Woman|Damien Law|1996|Evidence Clue|Handbag
In Fun Times for Swingers, what is Damien Law's secret occupation?|A male escort|A private detective|A nightclub singer|An antique dealer|Easy|Fun Times For Swingers|Damien Law|Male Escort|Gigolo|1996|Secret Job|Murder Victim
In Fun Times for Swingers, what is the real first name of the man using the name Damien Law?|Frankie|Harvey|Cyril|Barry|Medium|Fun Times For Swingers|Frankie Barton|Damien Law|Alias|1996|Joy Barton|Hidden Identity
In Fun Times for Swingers, why has Frankie Barton been earning money as a gigolo?|To pay for his son's spinal treatment|To buy his wife a business|To fund a gambling debt|To pay for an overseas holiday|Medium|Fun Times For Swingers|Frankie Barton|Disabled Son|Medical Treatment|1996|Family Motivation|Escort Work
In Fun Times for Swingers, what business does Barry Curzon operate?|An escort agency|A cricket equipment shop|A taxi company|A night school|Medium|Fun Times For Swingers|Barry Curzon|Escort Agency|Damien Law|1996|Suspect|Business Rivalry
In Fun Times for Swingers, who is Anne-Marie Pearce's husband?|Cyril Pearce|Barry Curzon|Frankie Barton|Jonathan Meyerbridge|Medium|Fun Times For Swingers|Anne Marie Pearce|Cyril Pearce|Married Couple|1996|Affair|Relationship
In Fun Times for Swingers, what financial misconduct does Damien uncover involving Cyril Pearce?|Fraud in charity accounts|An insider share deal|Counterfeit lottery tickets|Unpaid council tax|Medium|Fun Times For Swingers|Cyril Pearce|Charity Fraud|Financial Records|1996|Damien Law|Blackmail Motive
In Fun Times for Swingers, who admits to killing Damien during a confrontation?|Cyril Pearce|Barry Curzon|Harvey|Bob Bowker|Medium|Fun Times For Swingers|Cyril Pearce|Damien Law|Murder Confession|1996|Charity Fraud|Case Resolution
In Fun Times for Swingers, what club is troubled by repeated damage and break-ins?|Mullett's cricket club|A bowling alley|A private golf course|A tennis centre|Easy|Fun Times For Swingers|Cricket Club|Norman Mullett|Vandalism|1996|Side Investigation|Club Committee
In Fun Times for Swingers, who is responsible for the vandalism at the cricket club?|The captain's wife|An ex-groundskeeper|A rival team's coach|An angry umpire|Medium|Fun Times For Swingers|Mrs Hastings|Club Captain Wife|Cricket Vandalism|1996|Desire To Move|Case Resolution
In Fun Times for Swingers, which city does the cricket captain's wife hope to return to?|Oxford|Bristol|York|Brighton|Hard|Fun Times For Swingers|Mrs Hastings|Oxford|Cricket Club|1996|Reason For Vandalism|Relocation Wish`;

const thingsLove = `In The Things We Do for Love, which healthcare worker is found stabbed to death?|Vicky Phillips|Helen Tudor|Pauline Venables|Paula Tate|Easy|The Things We Do For Love|Vicky Phillips|Physiotherapist|Murder Victim|1996|Car Park|Health Professional
In The Things We Do for Love, what is Vicky Phillips's occupation?|Physiotherapist|Schoolteacher|Policewoman|Pharmacist|Medium|The Things We Do For Love|Vicky Phillips|Physiotherapy|Murder Investigation|1996|Occupation|Denton
In The Things We Do for Love, who is Frost's newly transferred detective partner?|Frank Nash|Sandy Gilmore|Carl Tanner|Liz Maud|Medium|The Things We Do For Love|Frank Nash|Detective Sergeant|New Transfer|1996|Police Partner|Marriage Pressures
In The Things We Do for Love, which religious figure is suspected because he had a secret affair with Vicky?|Jonathan Meyerbridge|Edward Gull|Mr Sykes|Cyril Pearce|Medium|The Things We Do For Love|Jonathan Meyerbridge|Vicky Phillips|Secret Affair|1996|Religious Community|Murder Suspect
In The Things We Do for Love, what shop does Mr Sykes run near the murder scene?|A butcher's shop|A bakery|A bookshop|A chemist's|Medium|The Things We Do For Love|Mr Sykes|Butcher Shop|Vicky Phillips|1996|Crime Scene|Local Business
In The Things We Do for Love, where did Vicky secretly meet Jonathan Meyerbridge?|A flat above a butcher's shop|A caravan behind a church|A flat above a pub|A hotel at the station|Medium|The Things We Do For Love|Vicky Phillips|Jonathan Meyerbridge|Secret Meetings|1996|Mr Sykes|Hidden Flat
In The Things We Do for Love, which solicitor defends Jonathan Meyerbridge?|Edward Gull|Simon Warrinder|Graham Rutherford|Frank Nash|Hard|The Things We Do For Love|Edward Gull|Solicitor|Jonathan Meyerbridge|1996|Legal Defence|Religious Group
In The Things We Do for Love, what sound in a recorded telephone call helps identify the killer?|A portable radio|Church bells|A barking dog|A ringing bicycle bell|Medium|The Things We Do For Love|Telephone Recording|Portable Radio|Audio Evidence|1996|Vicky Phillips|Forensic Clue
In The Things We Do for Love, who confesses to murdering Vicky Phillips?|Milly Atkinson|Ruth Meyerbridge|Anne-Marie Pearce|Sue Venables|Medium|The Things We Do For Love|Milly Atkinson|Vicky Phillips|Murder Confession|1996|Family Nanny|Case Resolution
In The Things We Do for Love, what job does Milly Atkinson have in the Meyerbridge household?|Live-in nanny|Cleaner|Bookkeeper|Cook|Medium|The Things We Do For Love|Milly Atkinson|Meyerbridge Family|Live In Nanny|1996|Household Employment|Witness
In The Things We Do for Love, what type of robberies does Frost also investigate?|Smash-and-grab raids|Bank safe cracking|Post-office hold-ups|Bicycle thefts|Easy|The Things We Do For Love|Smash And Grab|Commercial District|Retail Theft|1996|Separate Case|Fast Raids
In The Things We Do for Love, what decision does DS Frank Nash make about his career?|He plans to leave policing to save his marriage|He applies to join the army|He transfers to the coastguard|He takes a promotion in Scotland|Medium|The Things We Do For Love|Frank Nash|Police Resignation|Marriage|1996|Career Decision|Frost Mentorship`;

const deepWaters = `In Deep Waters, at which institution is Helen Tudor attacked?|Denton University|Denton Hospital|A secondary school|A leisure centre|Easy|Deep Waters|Helen Tudor|Denton University|Assault|1996|Student Victim|Campus
In Deep Waters, what happens to student Helen Tudor during the attack?|She is pushed down stairs|She is struck by a car|She is poisoned at dinner|She is locked in a lift|Medium|Deep Waters|Helen Tudor|Staircase Attack|1996|Campus Assault|Suspicious Incident|Investigation
In Deep Waters, which subject does Helen Tudor study?|Psychology|Chemistry|Law|Architecture|Medium|Deep Waters|Helen Tudor|Psychology Student|Denton University|1996|Academic Subject|Undergraduate
In Deep Waters, which tutor comes under suspicion because of his behaviour towards students?|Dr Keith Michaelson|Dr McKenzie|Dr Simon Hobbs|Dr Richard Evans|Medium|Deep Waters|Keith Michaelson|University Tutor|1996|Suspect|Predatory Behaviour|Psychology
In Deep Waters, which actor plays Dr Keith Michaelson?|Jonathan Hyde|Damian Lewis|Bruce Alexander|David Gooderson|Medium|Deep Waters|Jonathan Hyde|Keith Michaelson|Actor Casting|1996|Guest Performer|University Tutor
In Deep Waters, who is the young student played by Damian Lewis?|Adam Weston|Tony Jarvis|Rod Bainbridge|Peter Chandani|Medium|Deep Waters|Damian Lewis|Adam Weston|Guest Actor|1996|Student Suspect|Denton University
In Deep Waters, which earlier victim drowned after being linked to the university swimming pool?|Paula Tate|Paula Bartlett|Tricia Martin|Jane Owens|Medium|Deep Waters|Paula Tate|Earlier Drowning|Swimming Pool|1996|Cold Case|Student Victim
In Deep Waters, which former colleague assists Frost with enquiries in Boxborough?|Clive Barnard|Frank Costello|Carl Tanner|Sandy Gilmore|Easy|Deep Waters|Clive Barnard|Boxborough|Returning Detective|1996|Cross Town Investigation|Police Assistance
In Deep Waters, which officer helps Frost investigate the university attack?|WPC Lindsey Hunter|DS Liz Maud|DS Maureen Lawson|WPC Hazel Wallace|Medium|Deep Waters|Lindsey Hunter|Policewoman|University Assault|1996|Supporting Investigator|Denton CID
In Deep Waters, what mythical creatures does Tony Jarvis imagine his drowning victims become?|Mermaids|Angels|Nymphs of the forest|Sea witches|Medium|Deep Waters|Tony Jarvis|Mermaid Delusion|Paula Tate|1996|Swimming Pool|Offender Belief
In Deep Waters, who does Tony Jarvis nearly drown before Frost intervenes?|Helen Tudor|Paula Tate|Lindsey Hunter|Simone Jarvis|Medium|Deep Waters|Tony Jarvis|Helen Tudor|Swimming Pool Rescue|1996|Attempted Murder|Case Climax
In Deep Waters, whom does Tony Jarvis's mother admit seeing him drown years earlier?|His younger sister Simone|His schoolfriend Adam|His father|His childhood swimming coach|Medium|Deep Waters|Tony Jarvis|Simone Jarvis|Siblings|1996|Mother Witness|Earlier Killing
In Deep Waters, what other violent crime involving Mrs Chandani does Frost pursue?|A fatal post-office robbery|An attack at a cricket pavilion|A jewellery theft|A museum fire|Medium|Deep Waters|Mrs Chandani|Post Office Robbery|Fatal Stabbing|1996|Separate Investigation|Shop Crime
In Deep Waters, what is the name of the suspected robber who escapes prosecution for lack of evidence?|Rod Bainbridge|Cyril Pearce|Barry Curzon|Steve Marson|Hard|Deep Waters|Rod Bainbridge|Post Office|Unproven Robbery|1996|Police Frustration|Insufficient Evidence`;

const pennyGuy = `In Penny for the Guy, which annual occasion coincides with the first child's death?|Halloween|Bonfire Night|Christmas Eve|New Year's Day|Easy|Penny For The Guy|Halloween|Dean Anderton|1997|Child Victim|Calendar Setting|Kidnapping
In Penny for the Guy, which boy is found dead after being abducted?|Dean Anderton|Bobby Kirkby|Billy Conrad|Tricia Martin|Medium|Penny For The Guy|Dean Anderton|First Victim|1997|Abduction|Child Murder|Chloroform
In Penny for the Guy, which second boy is kidnapped but later found alive?|Bobby Kirkby|Dean Anderton|Matthew Lawson|Kevin Boxley|Medium|Penny For The Guy|Bobby Kirkby|Kidnapped Boy|1997|Ransom Case|Survivor|Denton Mill
In Penny for the Guy, which ambitious detective sergeant is assigned to work with Frost?|Liz Maud|Maureen Lawson|Hazel Wallace|Frank Nash|Easy|Penny For The Guy|Liz Maud|Detective Sergeant|New Partnership|1997|Child Abduction|Denton CID
In Penny for the Guy, what are Frost's personal plans before being called back to investigate?|A holiday|A wedding|A retirement party|A house move|Easy|Penny For The Guy|Holiday Cancelled|Frost Duty|1997|Police Staffing|Investigation Priority|Personal Plans
In Penny for the Guy, which wealthy supermarket boss receives the ransom demand?|Sir Richard Cordwell|Gerald Powell|Bill Boxley|Cyril Pearce|Medium|Penny For The Guy|Richard Cordwell|Supermarket Owner|1997|Ransom Recipient|Publicity Motive|Businessman
In Penny for the Guy, what is the name of Sir Richard's supermarket chain?|Cordwell Supermarkets|Bellamy's Stores|Bonley's Department Stores|Denton Security|Medium|Penny For The Guy|Cordwell Supermarkets|Richard Cordwell|1997|Retail Chain|Kidnap Ransom|Company
In Penny for the Guy, how much money does the kidnapper demand from the supermarket boss?|£500,000|£30,000|£50,000|£2 million|Medium|Penny For The Guy|500000 Pounds|Ransom Sum|Richard Cordwell|1997|Kidnapping|Money Demand
In Penny for the Guy, which elderly man is eventually identified as the kidnapper?|Henry Finch|Ronald Gould|Gerald Powell|Charlie Fairclough|Medium|Penny For The Guy|Henry Finch|Kidnapper|1997|Revenge Plot|Bobby Kirkby|Case Resolution
In Penny for the Guy, what financial wrongdoing by the supermarket chain provides a motive for revenge?|Passing counterfeit notes to customers|Paying employees with stolen cheques|Hiding a tax-free offshore account|Selling expired medicines|Medium|Penny For The Guy|Counterfeit Banknotes|Cordwell Supermarkets|1997|Corporate Misconduct|Finch Revenge|Secret
In Penny for the Guy, why does Henry Finch blame Sir Richard Cordwell for his wife's death?|Cordwell fired her after she reported wrongdoing|Cordwell refused her emergency operation|Cordwell caused a road accident|Cordwell stole her inheritance|Medium|Penny For The Guy|Henry Finch Wife|Richard Cordwell|Unfair Dismissal|1997|Suicide|Revenge Motivation
In Penny for the Guy, what document helps Frost locate the kidnapped boy?|A petrol station receipt|A library card|A railway timetable|A hotel booking|Medium|Penny For The Guy|Petrol Receipt|Henry Finch|1997|Denton Mill|Evidence Trail|Rescue
In Penny for the Guy, where does Frost find the kidnapped Bobby Kirkby?|Denton Mill|An abandoned church|A farmhouse loft|A caravan park|Medium|Penny For The Guy|Bobby Kirkby|Denton Mill|1997|Kidnap Rescue|Hidden Child|Case Resolution
In Penny for the Guy, who stages a separate kidnapping to extort money from her own father?|Carol Stansfield|Pauline Venables|Rachel Lawson|Anne Butler|Medium|Penny For The Guy|Carol Stansfield|Fake Kidnapping|1997|Father Daughter|Second Investigation|Ransom Fraud`;

const houseCalls = `In House Calls, what does a mysterious intruder inject into children?|Water|Insulin|Morphine|A sedative|Medium|House Calls|Water Injection|Children|1997|Syringe|Strange Assaults|Criminal Investigation
In House Calls, which vulnerable man becomes a suspect in the injection incidents?|Sydney Snell|Lemmy Hoxton|Mark Grover|Peter Lawson|Medium|House Calls|Sydney Snell|Police Suspect|1997|Syringe Incidents|Previous Conviction|Frost Compassion
In House Calls, why does Frost feel a duty of care towards Sydney Snell?|He promised him psychiatric help that never came|He is Frost's distant cousin|He once saved Frost from a fire|He had been Frost's police partner|Medium|House Calls|Sydney Snell|Psychiatric Care|Broken Promise|1997|Frost Guilt|Previous Sentence
In House Calls, which detective reports Frost for allowing Snell to go free?|Liz Maud|Maureen Lawson|Hazel Wallace|Clive Barnard|Medium|House Calls|Liz Maud|Sydney Snell|Professional Complaint|1997|Frost Leniency|Police Conflict
In House Calls, who is the small-time criminal found dead at an abandoned farm?|Lemmy Hoxton|Dean Anderton|Henry Finch|Mike Ross|Medium|House Calls|Lemmy Hoxton|Burglar|1997|Abandoned Farm|Murder Enquiry|Dead Criminal
In House Calls, how does Lemmy Hoxton gain entry to homes before stealing from them?|He poses as a utility worker|He claims to be a police officer|He pretends to deliver groceries|He acts as a television repairer|Medium|House Calls|Lemmy Hoxton|Utility Worker Disguise|1997|House Burglaries|Deception|Victim Access
In House Calls, which two women hide Lemmy Hoxton's death after fighting him off?|Julie and Caroline|Pauline and Sue|Jeanette and Harriet|Rachel and Joanna|Medium|House Calls|Julie|Caroline|Lemmy Hoxton|1997|Self Defence|Hidden Death
In House Calls, what is Mark Grover's occupation?|Carpet fitter|Security guard|School caretaker|Taxi driver|Medium|House Calls|Mark Grover|Carpet Fitter|1997|Bonleys Store|Family Tragedy|Employment
In House Calls, what does Mark Grover discover when he returns home?|His two young children dead and his wife missing|His home destroyed by fire|His wife's car stolen|A ransom note on the table|Easy|House Calls|Mark Grover|Dead Children|Nancy Grover|1997|Family Tragedy|Missing Wife
In House Calls, where is Nancy Grover's body eventually discovered?|A railway tunnel|A canal lock|A disused mine|A wooded quarry|Medium|House Calls|Nancy Grover|Railway Tunnel|1997|Staged Suicide|Murder|Body Discovery
In House Calls, who is revealed to have killed Nancy Grover?|Her husband Mark|Sydney Snell|Lemmy Hoxton|DCI Peters|Medium|House Calls|Nancy Grover|Mark Grover|Husband Wife|1997|Murder Confession|Family Tragedy
In House Calls, who helped conceal Nancy Grover's death?|Phil Collard|Henry Finch|Clive Barnard|Richard Sheridan|Hard|House Calls|Phil Collard|Mark Grover|Nancy Grover|1997|Body Disposal|Accomplice
In House Calls, what future step does Liz Maud announce after the investigations?|A transfer for better career prospects|An immediate retirement|An application to the army|An overseas secondment to Canada|Medium|House Calls|Liz Maud|Career Transfer|1997|Police Colleagues|Apology To Frost|Departure`;

const trueConfessions = `In True Confessions, what proves that a woman's apparent river suicide was staged?|Water in her lungs points to a bathtub|Her body contains river weed|Her clothes are completely dry|She left a forged suicide note|Medium|True Confessions|Jeanette Barr|Bathtub Drowning|1997|Autopsy|Staged Suicide|River Body
In True Confessions, which woman is found in the river after apparently jumping from a bridge?|Jeanette Barr|Nancy Grover|Olive Walters|Anne-Marie Pearce|Medium|True Confessions|Jeanette Barr|River Body|1997|False Suicide|Murder Case|Bridge
In True Confessions, who is Jeanette Barr's husband?|James Barr|Alec Barr|Richard Sheridan|Charlie Fairclough|Medium|True Confessions|James Barr|Jeanette Barr|Marriage|1997|Murder Suspect|Family Business
In True Confessions, what is the name of James Barr's first wife whose murder Frost investigated earlier?|Harriet|Jeanette|Julie|Nancy|Medium|True Confessions|Harriet Barr|Earlier Murder|James Barr|1997|Old Investigation|First Marriage
In True Confessions, who is Jeanette Barr having an affair with?|Richard Sheridan|Alec Barr|Fr Sullivan|Charlie Fairclough|Medium|True Confessions|Richard Sheridan|Jeanette Barr|Affair|1997|Suspect|Company Employee
In True Confessions, why does Father Sullivan struggle to reveal information about a planned murder?|He heard it during a religious confession|He signed a legal secrecy contract|He fears losing his police job|He is related to the victim|Medium|True Confessions|Father Sullivan|Religious Confession|Sacramental Secrecy|1997|Murder Warning|Ethical Dilemma
In True Confessions, what has Father Sullivan heard that worries him?|A confession about a planned murder|A confession about a bank robbery|A threat to burn down a church|A plan to kidnap a councillor|Medium|True Confessions|Father Sullivan|Confession|Future Murder|1997|Religious Secrecy|Investigative Clue
In True Confessions, which department investigates alleged falsification of evidence in Frost's earlier cases?|Discipline and Complaints|Special Branch|Traffic Division|Financial Crimes Unit|Medium|True Confessions|Police Discipline|Frost Suspension|1997|Misconduct Inquiry|Past Convictions|Internal Investigation
In True Confessions, who is the officer from Discipline and Complaints involved in suspending Frost?|Detective Superintendent Bailey|Superintendent Mullett|DCI Peters|DS Liz Maud|Medium|True Confessions|Bailey|Discipline And Complaints|1997|Frost Suspension|Police Oversight|Misconduct
In True Confessions, which former chief superintendent admits planting evidence in old cases?|Charlie Fairclough|Norman Mullett|Frank Nash|Jim Allen|Medium|True Confessions|Charlie Fairclough|Planted Evidence|1997|Police Corruption|Historic Investigations|Confession
In True Confessions, who is finally exposed as responsible for Jeanette's death?|Alec Barr|James Barr|Richard Sheridan|Father Sullivan|Medium|True Confessions|Alec Barr|Jeanette Barr|1997|Family Jealousy|Case Resolution|Murderer
In True Confessions, what family relationship links Alec Barr to James Barr?|They are brothers|They are father and son|They are cousins|They are brothers-in-law|Medium|True Confessions|Alec Barr|James Barr|Brothers|1997|Jealousy|Family Conflict
In True Confessions, how does Alec Barr die after Frost confronts him?|He is hit by a lorry|He falls from a hotel roof|He drowns in a river|He dies in a house fire|Medium|True Confessions|Alec Barr|Road Collision|1997|Fleeing Suspect|Fatal Ending|Case Climax`;

const noOtherLove = `In No Other Love, what type of shop belongs to Peter Lawson?|Pawn shop|Antique bookshop|Chemist's shop|Pet shop|Easy|No Other Love|Peter Lawson|Pawn Shop|1997|Business Owner|Crime Scene|Family Tragedy
In No Other Love, what financial pressure is Superintendent Mullett considering at Denton station?|Staff redundancies|A new police building|A vehicle fleet expansion|A compulsory pay rise|Medium|No Other Love|Norman Mullett|Redundancies|1997|Police Budget|Station Staffing|Management
In No Other Love, who stays in Frost's new flat while they work together?|Clive Barnard|Frank Nash|Carl Tanner|Liz Maud|Medium|No Other Love|Clive Barnard|Frost Flat|1997|Detective Partners|Shared Accommodation|Series Five
In No Other Love, which elderly woman admits killing her abusive husband?|Olive Walters|Shirley Fisher|Jeanette Barr|Pauline Venables|Medium|No Other Love|Olive Walters|Elderly Wife|1997|Domestic Abuse|Husband Murder|Separate Case
In No Other Love, what is the first name of Olive Walters's dead husband?|Harry|Charlie|Peter|Richard|Hard|No Other Love|Harry Walters|Olive Walters|Married Couple|1997|Domestic Violence|Murder Victim
In No Other Love, what past family tragedy fuels Olive Walters's resentment towards her husband?|The death of their young daughter|The disappearance of their son|A house lost to gambling|Her sister's imprisonment|Medium|No Other Love|Olive Walters|Deceased Daughter|1997|Long Marriage|Emotional Abuse|Motive
In No Other Love, where do the Lawson siblings travel to find their older sister Joanna?|Blackpool|Brighton|Cardiff|Southend|Medium|No Other Love|Joanna Lawson|Blackpool|1997|Siblings|Search Journey|Family Crisis
In No Other Love, which Lawson sibling is seeking an abortion?|Rachel|Suzanne|Joanna|Olive|Medium|No Other Love|Rachel Lawson|Abortion|1997|Sister Joanna|Family Abuse|Blackpool
In No Other Love, who is Rachel Lawson's brother?|Matthew|Kevin|Clive|Alec|Medium|No Other Love|Matthew Lawson|Rachel Lawson|Brother Sister|1997|Pawn Shop Robbery|Family Protection
In No Other Love, who is the youngest Lawson sister feared to be in danger?|Suzanne|Rachel|Joanna|Jeanette|Medium|No Other Love|Suzanne Lawson|Youngest Daughter|1997|Family Abuse|Sibling Concern|Victim Protection
In No Other Love, which member of the Lawson family kills Peter Lawson?|His father Charlie|His son Matthew|His daughter Joanna|His wife|Medium|No Other Love|Charlie Lawson|Peter Lawson|Father Son|1997|Family Murder|Case Resolution
In No Other Love, whom does Charlie Lawson hold at gunpoint in the final confrontation?|Jack Frost|Norman Mullett|Liz Maud|Maureen Lawson|Medium|No Other Love|Charlie Lawson|Jack Frost|Gunpoint|1997|Final Confrontation|Armed Suspect
In No Other Love, which returning detective dies while protecting Frost?|Clive Barnard|George Toolan|Frank Nash|Carl Tanner|Easy|No Other Love|Clive Barnard|Heroic Death|1997|Protecting Frost|Series Five Finale|Detective Sergeant
In No Other Love, what does Frost place in his fallen colleague's coffin?|His George Cross medal|His police warrant card|His wedding ring|His detective notebook|Medium|No Other Love|George Cross|Clive Barnard|Funeral|1997|Frost Grief|Honouring Heroism
In No Other Love, what action does Frost take after the death of his colleague?|He submits his resignation|He accepts a promotion|He joins Special Branch|He moves abroad|Medium|No Other Love|Frost Resignation|Clive Barnard Death|1997|Career Crisis|Police Force|Series Five Ending`;

const questionBank = [];

function addSection(data, period) {
  for (const [lineNumber, raw] of data.trim().split('\n').entries()) {
    const parts = raw.split('|').map(value => value.trim());

    if (parts.length !== 13 || parts.some(value => value.length === 0)) {
      throw new Error(
        `${period} row ${lineNumber + 1}: expected 13 non-empty fields, got ${parts.length}`
      );
    }

    const [
      stem,
      correctAnswer,
      wrong1,
      wrong2,
      wrong3,
      difficulty,
      ...specificTags
    ] = parts;

    const id = `tv_${FIRST_ID + questionBank.length}`;
    const answers = [wrong1, wrong2, wrong3];
    answers.splice(questionBank.length % 4, 0, correctAnswer);

    const tags = [...new Map([
      'Television',
      'British Television',
      'ITV',
      'Crime Drama',
      PROGRAMME,
      period,
      correctAnswer,
      ...specificTags
    ].map(value => [
      value.toLowerCase().replace(/[^a-z0-9]/g, ''),
      value
    ])).values()];

    const entry = {
      id,
      category: 'Television',
      question: `In ${PROGRAMME}, ${stem[0].toLowerCase()}${stem.slice(1)}`,
      answers,
      correctAnswer,
      difficulty,
      tags,
      dailyEligible: true
    };

    if (
      !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
      new Set(answers.map(value => value.toLowerCase())).size !== 4 ||
      tags.length < 11 ||
      !answers.includes(correctAnswer)
    ) {
      throw new Error(`Invalid question at ${id}`);
    }

    questionBank.push(entry);
  }
}

addSection(programmeFacts, 'Series 4-5 1996-1997');
addSection(payingThePrice, 'Series 4 1996 - Paying the Price');
addSection(unknownSoldiers, 'Series 4 1996 - Unknown Soldiers');
addSection(funTimes, 'Series 4 1996 - Fun Times for Swingers');
addSection(thingsLove, 'Series 4 1996 - The Things We Do for Love');
addSection(deepWaters, 'Series 4 1996 - Deep Waters');
addSection(pennyGuy, 'Series 5 1997 - Penny for the Guy');
addSection(houseCalls, 'Series 5 1997 - House Calls');
addSection(trueConfessions, 'Series 5 1997 - True Confessions');
addSection(noOtherLove, 'Series 5 1997 - No Other Love');

// Final exported-question checks; independent of question text formatting.
const seenQuestions = new Set();

for (const entry of questionBank) {
  const normalized = entry.question
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  if (seenQuestions.has(normalized)) {
    throw new Error(`Repeated question: ${entry.id}`);
  }

  seenQuestions.add(normalized);
}

module.exports = questionBank;
