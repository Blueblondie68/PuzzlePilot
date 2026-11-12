
// quiz_pack384.js
// PuzzlePilot - The Bigggggg Quiz
// A Touch of Frost - Part 4: Series 10-13 (2003-2006).
// Complete standalone CommonJS file for WordPad and GitHub.
// Series 14-15 (2008-2010) remain for Pack 385; do not mark the programme complete.

const FIRST_ID = 20337;
const PROGRAMME = 'A Touch of Frost';
// Fact format: question | answer | wrong 1 | wrong 2 | wrong 3 | difficulty | seven specific tags.
// The exporter adds the programme, episode/series, genre, year and answer tags.

const programmeFacts = `How many episodes belong to Series 10?|Three|Two|Four|Five|Easy|Series Ten|Episode Count|2003|ITV Schedule|Programme Chronology|Opening Episode|Closing Episode
Which case opens Series 10?|Hidden Truth|Close Encounters|Held in Trust|Another Life|Easy|Series Ten|Hidden Truth|Series Premiere|Episode Order|2003|ITV|Broadcast History
Which case concludes Series 10?|Held in Trust|Close Encounters|Hidden Truth|Dancing in the Dark|Medium|Series Ten|Held In Trust|Series Finale|Episode Order|2003|ITV|Broadcast History
Which year saw both the final Series 10 episode and the opening of Series 11?|2003|2002|2004|2005|Medium|Series Ten|Series Eleven|2003|Broadcast Overlap|Television Timeline|ITV|Chronology
How many episodes were in Series 11?|Two|One|Three|Four|Medium|Series Eleven|Episode Count|2003|2004|ITV Schedule|Broadcast History|Two Episodes
Which detective story opens Series 11?|Another Life|Dancing in the Dark|Near Death Experience|Endangered Species|Medium|Series Eleven|Another Life|Series Premiere|2003|Original Broadcast|Episode Order|ITV
In which year was the single episode of Series 12 broadcast?|2005|2003|2004|2006|Easy|Series Twelve|Near Death Experience|2005|Single Episode|Broadcast History|ITV|Chronology
What is the sole episode of Series 12 called?|Near Death Experience|Dancing in the Dark|Endangered Species|Mind Games|Easy|Series Twelve|Near Death Experience|2005|Episode Title|Single Episode|ITV|Broadcast History
In which year did Series 13 air?|2006|2004|2005|2008|Easy|Series Thirteen|2006|Single Episode|Endangered Species|Broadcast History|ITV|Timeline
What is the title of the lone Series 13 story?|Endangered Species|Near Death Experience|Dead End|In the Public Interest|Medium|Series Thirteen|Endangered Species|2006|Episode Title|Single Episode|ITV|Broadcast History
Who wrote the Series 10 story Close Encounters?|Michael Russell|David Gilman|Christopher Blake|Richard Harris|Hard|Close Encounters|Michael Russell|Scriptwriter|Series Ten|2003|Production Credits|Television Writing
Who directed the 2004 story Dancing in the Dark?|Roy Battersby|Paul Harrison|Roger Bamford|Paul Jackson|Hard|Dancing In The Dark|Roy Battersby|Director|Series Eleven|2004|Production Credits|Television Direction`;

const hiddenTruth = `Which London criminal is accused of murdering a drug dealer in Denton?|Jack Flynn|Gary Tinley|George Starkey|Alan Hadley|Medium|Jack Flynn|London Gangster|Drug Dealer Killing|2003|Protected Witness|Organised Crime|Murder Case
Which woman is placed in protective custody as a witness against a drug lord?|Cathy Thompson|Eileen Cleary|Hazel Wallace|Helen Croft|Easy|Cathy Thompson|Prosecution Witness|Safe House|2003|Gangland Murder|Threats|Witness Protection
What is the first name of the protected witness's young son?|Robbie|Bobby|Kevin|Matthew|Medium|Robbie Thompson|Cathy Thompson|Mother Son|2003|Witness|Child In Danger|Safe House
Which professional hitman is hired to silence the witness?|George Starkey|Gary Tinley|Kenny Russell|Terry Reid|Medium|George Starkey|Contract Killer|Jack Flynn|2003|Witness Intimidation|Hitman|Murder Plot
Which detective sergeant helps Frost because of his Metropolitan Police connections?|Terry Reid|Clive Barnard|Frank Costello|Maureen Lawson|Easy|Terry Reid|Metropolitan Police|2003|Police Assistance|London Connections|Detective Sergeant|Safe House
Which second hitman is brought in to divert police attention from Starkey?|Gary Tinley|Alan Hadley|Kenny Russell|Martin Drew|Medium|Gary Tinley|Second Hitman|Diversion|2003|Jack Flynn|Organised Crime|Police Pursuit
Which armed response officer is killed during the pursuit of a suspected hitman?|Kenny Russell|Alan Hadley|George Toolan|Terry Reid|Medium|Kenny Russell|Armed Response|Police Officer Death|2003|Gunfire|Investigation|Fellow Officer
Who actually shoots the officer during the pursuit?|Alan Hadley|George Starkey|Gary Tinley|Jack Flynn|Hard|Alan Hadley|Kenny Russell|Police Shooting|2003|Betrayal|Ballistics|Officer Murder
What private betrayal provides the motive for the police officer's killing?|His wife had an affair with the victim|His brother had stolen from him|The victim reported his gambling debts|The victim stole a promotion from him|Medium|Alan Hadley|Kenny Russell|Extramarital Affair|2003|Jealousy|Motive|Police Scandal
How is the corrupt armed response officer later found dead?|Hanged|Drowned in a canal|Shot in a car|Struck by a train|Medium|Alan Hadley|Suicide|2003|Guilt|Police Corruption|Hanging|Case Outcome
Which prosecution-team member has been revealing the protected witness's whereabouts?|Eileen Cleary|Cathy Thompson|Shirley Fisher|Maureen Lawson|Hard|Eileen Cleary|Information Leak|Prosecution Team|2003|Safe House|Jack Flynn|Corruption
What personal connection explains the prosecution worker's loyalty to the accused gangster?|She has a child with him|He is her brother|He is her former husband|He paid for her education|Medium|Eileen Cleary|Jack Flynn|Shared Child|2003|Family Secret|Prosecution Leak|Personal Motive
Who is revealed to have actually witnessed the original gangland murder?|Cathy's son Robbie|DS Terry Reid|Eileen Cleary|WPC Hazel Wallace|Easy|Robbie Thompson|Cathy Thompson|Real Eyewitness|2003|Protective Mother|Testimony|Gangland Killing
At what unusual venue does Cathy agree to meet the suspected police leak?|An aircraft museum|A wildlife park|A railway depot|A football ground|Medium|Crannock Air Museum|Cathy Thompson|2003|Final Meeting|George Starkey|Safe House Escape|Police Rescue
What is the name of the aircraft museum where Frost tracks the witness?|Crannock Air Museum|Denton Aviation Centre|Brookfield Hangar|Millbrook Flight Museum|Hard|Crannock Air Museum|Cathy Thompson|Robbie Thompson|2003|Hitman Confrontation|Case Climax|Location
Whose courtroom testimony ultimately helps secure the case against the gangster?|Robbie's|Eileen's|Alan Hadley's|George Starkey's|Medium|Robbie Thompson|Court Testimony|Jack Flynn|2003|Witness Evidence|Conviction|Gangland Case
How much does Frost think he has won with his misplaced lottery ticket?|Five million pounds|Fifty thousand pounds|One million pounds|Ten million pounds|Medium|5000000 Pounds|Lottery Ticket|Frost Personal Life|2003|Winning Numbers|Paperwork|Comic Subplot
Why does Frost receive no jackpot despite matching the lottery numbers?|His ticket is from the wrong draw|He loses it forever|He has not signed it|Someone has already claimed it|Medium|Outdated Lottery Ticket|Wrong Draw|Frost Disappointment|2003|Five Million Pounds|Lottery Numbers|Comic Twist`;

const closeEncounters = `Which returning detective sergeant works with Frost on the two investigations?|Hazel Wallace|Liz Maud|Maureen Lawson|Ronnie Lonnegan|Easy|Hazel Wallace|Detective Sergeant|Returning Colleague|2003|Denton CID|Police Partnership|Investigation
What change in Hazel Wallace's personal life is revealed in this episode?|She has had a baby|She has married Frost|She has retired|She has moved to London|Medium|Hazel Wallace|New Baby|Family Life|2003|Detective Sergeant|Returning Character|Personal News
What kind of houses are targeted by a series of burglaries?|Recently purchased homes|Empty student halls|Seaside holiday lets|Retirement homes|Medium|Newly Bought Houses|Burglaries|2003|Property Crime|Removal Jobs|Stolen Goods|Police Investigation
Which trade links a suspect to the rash of burglaries?|Furniture removals|Window cleaning|Landscape gardening|Plumbing repairs|Medium|Removal Company|House Burglaries|2003|Inside Information|Victim Addresses|Property Crime|Criminal Connection
Why does a removals worker provide information to the burglars?|To earn extra money|To punish his former employer|To cover up an insurance claim|To pay a relative's ransom|Medium|Removals Worker|Financial Pressure|2003|Burglary Gang|Paid Tipoffs|Separate Case|Family Problems
Where is the missing son of a separated couple eventually discovered?|At his father's workplace|In a railway tunnel|In a hotel cellar|At a hospital ward|Medium|Missing Son|Removal Depot|2003|Divorced Parents|Hidden Child|Frost Search|Family Reunion
What does the missing boy hope his disappearance will achieve?|Bring his parents back together|Win a television competition|Get his father a promotion|Delay a house move|Medium|Missing Boy|Divorced Parents|2003|Family Reconciliation|Hiding Place|Child Motivation|Domestic Storyline
Which unlikely group joins the pursuit of a burglary gang scout?|Food-delivery motorcyclists|Horse riders from a stable|A cycling club|School bus drivers|Hard|Delivery Bikers|High Speed Chase|2003|Fast Food|Burglary Suspect|Police Pursuit|Comic Action
At what business is a security guard found murdered?|Lightfoot quarry|A glassworks|A supermarket warehouse|An army base|Easy|Lightfoot Quarry|Security Guard Murder|2003|Crime Scene|Industrial Site|Second Investigation|Victim
Which young man witnesses suspicious events at the quarry?|Laurence Burrell|Gary Tinley|Martin Drew|Robert Presley|Medium|Laurence Burrell|Quarry Witness|2003|Autistic Young Man|Suspect|Witness Testimony|Explosives
Which actor played quarry witness Laurence Burrell?|Jim Sturgess|Blake Ritson|Nicholas Burns|Robert Glenister|Medium|Jim Sturgess|Laurence Burrell|Guest Actor|2003|Quarry Witness|Actor Casting|Series Ten
What does the young quarry witness believe is threatening him?|Aliens|Burglars disguised as officers|A secret cult|Wild animals|Easy|Laurence Burrell|Alien Belief|2003|Quarry|Fear|UFO Interest|Character Motivation
Who owns the quarry that a developer wants to acquire?|Charlie Lightfoot|Stuart Mackintosh|Gary Tinley|Jack Flynn|Medium|Charlie Lightfoot|Quarry Owner|2003|Commercial Dispute|Property|Denton Park|Victim
Which former business partner wants to buy the quarry for a development?|Stuart Mackintosh|Charlie Lightfoot|Martin Drew|George Starkey|Medium|Stuart Mackintosh|Former Business Partner|2003|Housing Development|Quarry Purchase|Financial Pressure|Suspect
What role would the quarry have in the planned housing development?|It would become a lake|It would house a school|It would be filled with car parks|It would become a sports stadium|Hard|Denton Park|Artificial Lake|Quarry Development|2003|Stuart Mackintosh|Property Scheme|Business Motive
What dangerous materials does Laurence take back to the quarry?|Explosives|Petrol barrels|Radioactive waste|Canisters of chlorine|Medium|Laurence Burrell|Explosives|Quarry Threat|2003|Police Rescue|Explosion|Fear Of Aliens
How does Laurence respond when Frost is incapacitated near the explosives?|He helps Frost reach safety|He escapes and leaves him behind|He calls the developer|He locks Frost in a shed|Medium|Laurence Burrell|Frost Rescue|2003|Quarry Blast|Bravery|Case Climax|Explosives
Who is behind the two quarry killings?|The developer and his hired accomplice|The removals worker and his son|The witness and his father|The dead guard's brother|Medium|Stuart Mackintosh|Henchman|Quarry Murders|2003|Charlie Lightfoot|Financial Motive|Case Resolution`;

const heldInTrust = `Which boy disappears while attending a Denton Town football match?|Bobby Palmer|Robbie Thompson|Laurence Burrell|Kevin Boxley|Easy|Bobby Palmer|Missing Child|2003|Football Match|Denton Town|Kidnapping|Child Victim
Where does the disappearance of Bobby Palmer first come to police attention?|At a football match|At a swimming pool|At a school concert|At a railway station|Medium|Bobby Palmer|Denton Town|2003|Stadium|Disappearance|Father|Investigation
Where is a separate malnourished child's body discovered?|A landfill site|A canal lock|A quarry pond|An empty hospital ward|Medium|Child Body|Landfill Site|2003|Neglect|Murder Inquiry|Separate Victim|Frost Investigation
How are runaway youngsters exploited by the adults who take them into their home?|They are passed off as children to claim extra benefits|They are sent to steal cars|They are made to work in a quarry|They are forced to sell newspapers|Medium|Runaway Children|Benefit Fraud|False Dependants|2003|Neglect|Abusive Household|Welfare Payments
Which illness leaves the neglected child dangerously unwell?|Tuberculosis|Measles|Pneumonia|Meningitis|Medium|Tuberculosis|Malnourished Child|2003|Neglect|Landfill Victim|Medical Condition|Abuse
Why is the malnourished child abandoned at the landfill?|His carer wrongly believes he is already dead|His family moves to another town|He runs away from the home|Police order the house evacuated|Medium|Landfill Victim|Negligent Carer|2003|Premature Disposal|Child Death|False Assumption|Abuse
Which man initially appears to have died in a hit-and-run but was assaulted beforehand?|Peter Johnson|Anton Caldwell|Martin Drew|Charlie Lightfoot|Medium|Peter Johnson|Hit And Run|2003|Blunt Force Injury|Second Murder|Known Offender|Death Investigation
Which known child abuser taunts Frost during questioning?|Anton Caldwell|Martin Drew|Peter Johnson|Stuart Mackintosh|Medium|Anton Caldwell|Police Interview|2003|Child Abuse|Provocation|Suspect|Investigation
Where do clues from the suspect's taunts lead Frost to Bobby's body?|An abandoned railway line|A church crypt|A reservoir|An empty football stadium|Medium|Bobby Palmer|Abandoned Railway|2003|Body Discovery|Anton Caldwell|Police Search|Clue
What post is Frost unexpectedly offered during his involvement in the case?|Chief Inspector|Assistant Chief Constable|Superintendent|Sergeant|Easy|Chief Inspector Promotion|Frost Career|2003|Promotions Board|Denton Police|Police Rank|Career Milestone
What does Frost do during his promotions interview?|He leaves midway to pursue the case|He refuses to enter the room|He falls asleep|He accuses the board of fraud|Medium|Promotions Board|Frost Walkout|2003|Urgent Investigation|Chief Inspector|Career Conflict|Bobby Palmer
What former occupation did suspect Martin Drew hold?|Social worker|School headteacher|Police constable|Paediatrician|Hard|Martin Drew|Former Social Worker|2003|Bobby Palmer|Fake Visit|Child Protection|Police Inquiry
Why is a purported social-services visit to Bobby's family suspicious?|There is no official record of it|The visitor used a false police uniform|The boy was away on holiday|It occurred after the reported death|Medium|Martin Drew|Fictitious Visit|2003|Social Services Records|Bobby Palmer|Family Accusation|Investigation Clue
What disturbing material do detectives find at Martin Drew's home?|Videos of schoolchildren|Stolen hospital prescriptions|Fake lottery tickets|Secret police firearms|Medium|Martin Drew|Home Videos|2003|Schoolchildren|Evidence|Child Exploitation|Suspect Home
Why had Peter Johnson become a target of Caldwell and Drew?|He tried to stop their crimes|He threatened to report tax fraud|He exposed their forged passports|He stole their money|Medium|Peter Johnson|Anton Caldwell|Martin Drew|2003|Attempt To Intervene|Murder Motive|Abuse Investigation
What action against Caldwell brings Frost before a disciplinary inquiry?|Punching him during questioning|Destroying the case files|Letting him escape custody|Accepting a bribe|Easy|Jack Frost|Anton Caldwell|2003|Police Assault|Disciplinary Inquiry|Personal Anger|Conduct
Why does Frost refuse a suggested defence of his actions?|He will not lie about the suspect resisting arrest|He has already retired|The incident was never witnessed|He wants the suspect acquitted|Medium|Jack Frost|Police Honesty|2003|False Testimony|Norman Mullett|Disciplinary Proceedings|Professional Integrity
What happens to Frost's newly awarded promotion after the disciplinary case?|He loses it and is suspended|He is transferred to London|He receives an additional pay rise|He becomes superintendent|Medium|Jack Frost|Indefinite Suspension|2003|Lost Promotion|Chief Inspector|Anton Caldwell|Career Setback`;

const anotherLife = `What happens to Frost after his suspension from Denton CID?|He is reinstated|He joins the Metropolitan Police|He is permanently retired|He becomes a private investigator|Easy|Frost Reinstatement|2003|Return To Duty|Police Career|Denton CID|Suspension Aftermath|Series Eleven
Which detective sergeant is reunited with Frost on his return?|Maureen Lawson|Liz Maud|Hazel Wallace|Ronnie Lonnegan|Easy|Maureen Lawson|Returning Partner|2003|Detective Sergeant|Denton CID|Frost Reinstatement|Police Colleague
Which convicted offender has been killed in prison before Frost's return?|Anton Caldwell|Jack Flynn|Gary Tinley|Martin Drew|Medium|Anton Caldwell|Prison Killing|2003|Held In Trust Aftermath|Convicted Offender|Continuity|Frost Suspension
What everyday sweet causes Frost serious dental pain?|A lollipop|A boiled mint|A toffee|A sherbet lemon|Medium|Lollipop|Toothache|2003|Jack Frost|Dental Emergency|Comic Incident|Personal Trouble
What household appliance contains a dismembered murder victim?|A refrigerator|A tumble dryer|A chest freezer|A washing machine|Easy|Fridge Body|Dismembered Victim|2003|Murder Investigation|Household Appliance|Evidence|Ballroom Case
What anatomical oddity exposes confusion over the dismembered victim's remains?|There is an extra left foot|The skull is missing|The hands belong to a child|The body has two right arms|Hard|Extra Left Foot|Fridge Victim|2003|Body Identification|Forensic Discovery|Multiple Remains|Murder Clue
Which competitive pastime connects the victim to the principal suspect?|Ballroom dancing|Amateur boxing|Sailing|Competitive angling|Easy|Ballroom Dancing|Competition|2003|Murder Victim|Dance Partner|Denton Social Life|Clue
Which ruthless dancer is responsible for the ballroom-related murder?|Delores Delmonte|Antonia Knight|Diane Hawkins|Helen Croft|Medium|Delores Delmonte|Ballroom Dancer|2003|Murderer|Dance Partner|Competition|Case Resolution
Which actress portrayed Delores Delmonte?|Amanda Root|Lucy Robinson|Lia Williams|Susannah Doyle|Hard|Amanda Root|Delores Delmonte|2003|Actor Casting|Guest Actress|Ballroom Competitor|Murder Suspect
What motivates the ballroom killer's anger towards her previous partner?|He abandons her to dance with someone else|He sells their costumes|He reports her to the police|He steals the contest trophy|Medium|Delores Delmonte|Abandoned Partner|2003|Ballroom Rivalry|Jealousy|Competition|Murder Motive
What is the name of the murdered man pulled from the canal carrying a large sum of cash?|Eddie Burrows|Joe Hawkins|Patrick Knight|Stephen Richford|Medium|Eddie Burrows|Canal Body|2003|Murder Victim|Cash|Second Investigation|Stabbing
How much money is found with the murdered canal victim?|Six thousand pounds|Five hundred pounds|Fifty thousand pounds|One hundred thousand pounds|Medium|6000 Pounds|Eddie Burrows|2003|Cash Evidence|Canal Body|Murder Investigation|Forensic Clue
What secret about Eddie Burrows complicates the investigation?|He has two wives and families|He is an undercover detective|He is an escaped prisoner|He uses a forged medical licence|Medium|Eddie Burrows|Bigamy|2003|Two Families|Double Life|Motive Suspicion|Victim Background
Which medical professional is being blackmailed by Eddie Burrows?|Patrick Knight|David Rose|Martine Phillips|Helena Gibson|Hard|Patrick Knight|Local Doctor|Blackmail|2003|Eddie Burrows|Fraudulent Medicines|Murder Motive
What illicit scheme has the doctor been running with a pharmacist?|Fraud involving medicines|Smuggling rare animals|Selling stolen paintings|Forging driving licences|Medium|Patrick Knight|Pharmacist|Medicine Fraud|2003|Healthcare Scam|Eddie Burrows|Blackmail
Who actually stabs Eddie Burrows?|Antonia Knight|Delores Delmonte|Maureen Lawson|Diane Hawkins|Medium|Antonia Knight|Eddie Burrows|2003|Murder Confession|Husband Financial Scandal|Blackmail|Case Resolution
What relationship connects Antonia to the doctor being blackmailed?|She is his wife|She is his daughter|She is his sister|She is his business partner|Medium|Antonia Knight|Patrick Knight|2003|Husband Wife|Family Finances|Blackmail|Murder Suspect
Which actress portrayed Antonia Knight?|Lucy Robinson|Amanda Root|Amber Sainsbury|Lia Williams|Hard|Lucy Robinson|Antonia Knight|2003|Guest Actress|Actor Casting|Eddie Burrows Murder|Doctor Wife`;

const dancingInTheDark = `What is the name of the man whose body is found at a waste tip?|Joe Hawkins|Eddie Burrows|Stephen Richford|Terry Hirst|Medium|Joe Hawkins|Waste Tip Body|2004|Murder Victim|Abusive Husband|Police Inquiry|First Case
Who reports the waste-tip victim missing?|His wife Diane|His daughter Heather|His employer Terry|His brother Colin|Easy|Diane Hawkins|Joe Hawkins|2004|Missing Husband|Married Couple|Witness|Family Life
What is the occupation of Diane's new romantic partner Colin Bayliss?|Sleep therapist|Paramedic|Solicitor|Driving instructor|Medium|Colin Bayliss|Sleep Therapist|2004|Diane Hawkins|Secret Romance|Occupation|Murder Investigation
What kind of husband is Joe Hawkins revealed to have been?|Abusive and alcoholic|Quiet and devoted|A wealthy philanthropist|A police officer with no family|Medium|Joe Hawkins|Domestic Abuse|Alcoholism|2004|Diane Hawkins|Marriage|Victim Background
What happens when Diane tries to steal money from her sleeping husband?|He wakes and begins choking on vomit|He calls the police|He leaves the house|He attacks Colin with a knife|Medium|Diane Hawkins|Joe Hawkins|2004|Choking|Stolen Cash|Interrupted Escape|Death Circumstances
What do Diane and Colin do when Joe starts choking?|They smother him in panic|They call an ambulance immediately|They carry him to hospital|They leave him unharmed|Medium|Diane Hawkins|Colin Bayliss|Joe Hawkins|2004|Smothering|Panic|Possible Murder
What is the rank and name of Frost's cocky young new police partner?|DC Jasper Tranter|DS Terry Reid|DC Robert Presley|DS Billy Sharpe|Easy|Jasper Tranter|Detective Constable|2004|New Partner|Undergraduate|Denton CID|Police Team
Who played DC Jasper Tranter?|Nicholas Burns|Blake Ritson|Jim Sturgess|Robert Glenister|Medium|Nicholas Burns|Jasper Tranter|2004|Actor Casting|Guest Actor|Detective Constable|Police Partner
What is the name of the young escort found murdered in a hotel room?|Heather Wills|Helen Croft|Carol Haymarsh|Cathy Thompson|Medium|Heather Wills|Hotel Murder|2004|Escort|Young Victim|Police Investigation|Crime Scene
Which actress portrayed hotel-room victim Heather Wills?|Amber Sainsbury|Joanne Froggatt|Amanda Root|Michelle Joseph|Hard|Amber Sainsbury|Heather Wills|2004|Guest Actress|Actor Casting|Hotel Murder|Victim
Who booked the hotel room in which Heather Wills was killed?|Stephen Richford|Terry Hirst|Joe Hawkins|Colin Bayliss|Medium|Stephen Richford|Hotel Room Booking|2004|Heather Wills|Businessman|Suspect|Guest
What personal relationship makes the hotel booking especially troubling for Richford?|Heather is his daughter's close friend|Heather is his niece|Heather is his former wife|Heather is his employee|Medium|Stephen Richford|Heather Wills|2004|Daughter Best Friend|Family Connection|Scandal|Secret Encounter
What incriminating objects are concealed inside Heather's purse?|Forged passports|Stolen diamonds|Photographs of a police officer|Unlicensed firearms|Easy|Heather Wills|Forged Passports|2004|Purse Evidence|Human Trafficking|Police Discovery|Smuggling
What crime are the false documents being used to facilitate?|Trafficking women into Britain|Bank account fraud|Smuggling rare birds|Stealing luxury cars|Medium|Forged Passports|Women Trafficking|2004|Immigration Crime|Heather Wills|Criminal Ring|Coercion
Which ruthless businessman is exposed as Heather's killer?|Terry Hirst|Stephen Richford|Colin Bayliss|Joe Hawkins|Hard|Terry Hirst|Heather Wills|2004|Murderer|Human Trafficking|Staged Suicide|Case Resolution
At what sporting venue does Frost organise a trap to arrest the killer?|A greyhound racing track|A football stadium|A boxing club|A cricket pavilion|Medium|Greyhound Track|Terry Hirst|2004|Police Sting|Arrest Operation|Case Climax|Police Tactics`;

const nearDeath = `Which mother is attacked and murdered by a masked intruder at home?|Helen Croft|Sylvia Ford|Lucy Croft|Antonia Knight|Easy|Helen Croft|Masked Intruder|2005|Home Murder|Serial Killer|First Victim|Mother
Which member of Helen Croft's family survives the attack with injuries?|Her teenage daughter Lucy|Her husband Bill|Her brother Steve|Her sister Sylvia|Medium|Lucy Croft|Helen Croft|2005|Survivor|Teenage Daughter|Home Invasion|Witness
Which priest discovers the crime scene and contacts the authorities?|Father David Rose|Father Sullivan|Reverend Michaelson|Father Andrews|Medium|David Rose|Priest|2005|Helen Croft|Crime Discovery|Church Connection|Religious Figure
Who played Father David Rose?|Danny Webb|Jeff Rawle|Mick Ford|Philip Jackson|Medium|Danny Webb|David Rose|2005|Actor Casting|Priest|Guest Performer|Near Death Experience
What had happened to Helen Croft's standing with her church before her death?|She had been excommunicated|She had become a church warden|She had joined a convent|She had been ordained|Medium|Helen Croft|Excommunication|2005|Church Dispute|Father David Rose|Victim Backstory|Religious Community
What grievance does the murderer claim motivated his attacks?|He believes women failed to appreciate him|He was denied police promotion|He wanted their jewellery|He was trying to conceal an art theft|Medium|Bill Ford|Misogyny|2005|Serial Killer Motive|Resentment|Victim Blaming|Case Confession
Which actor portrayed Detective Sergeant Razor Sharpe?|Philip Jackson|Robert Glenister|Nicholas Burns|John Lyons|Medium|Philip Jackson|Billy Sharpe|2005|Actor Casting|Detective Sergeant|Razor Nickname|Guest Actor
Which specialist is asked to profile the offender?|Dr Martine Phillips|Dr Helena Gibson|Pam Hartley|Dr Keith Michaelson|Medium|Martine Phillips|Forensic Psychologist|2005|Criminal Profiling|Serial Killer|Specialist Assistance|Investigation
How many other similar murders does the national search initially identify?|Five|Two|Three|Seven|Hard|Five Prior Murders|Serial Killer Pattern|2005|Police Search|Similar Victims|Criminal Profile|Unsolved Cases
What recent medical history of Helen Croft becomes relevant to the investigation?|She had an abortion|She had undergone a transplant|She was recovering from a broken leg|She had been diagnosed with diabetes|Medium|Helen Croft|Abortion|2005|Autopsy|Victim Background|Medical Evidence|Suspect Motive
Which alcoholic former boyfriend falls under suspicion in Helen's murder?|Steve Markham|Bill Ford|Patrick Knight|Terry Hirst|Medium|Steve Markham|Helen Croft|2005|Former Boyfriend|Alcoholism|Murder Suspect|Relationship
Who played suspect Steve Markham?|Jeff Rawle|Danny Webb|Philip Jackson|Blake Ritson|Hard|Jeff Rawle|Steve Markham|2005|Actor Casting|Guest Actor|Murder Suspect|Former Boyfriend
What is the name of Helen's sister?|Sylvia Ford|Lucy Croft|Martine Phillips|Antonia Knight|Medium|Sylvia Ford|Helen Croft|2005|Sisters|Family Connection|Police Suspect|Personal Life
With whom is Sylvia Ford secretly having an affair?|Father David Rose|Steve Markham|Billy Sharpe|Bill Ford|Medium|Sylvia Ford|David Rose|2005|Secret Affair|Priest|Family Betrayal|Relationship
Which family member is ultimately identified as the serial murderer?|Bill Ford|Steve Markham|David Rose|Billy Sharpe|Medium|Bill Ford|Serial Killer|2005|Sylvia Ford|Helen Croft|Case Resolution|Religious Husband
What religious reference helps Frost anticipate the killer's next target?|Matthew 5:16|Psalm 23|Exodus 20:13|John 3:16|Hard|Matthew Five Sixteen|Bill Ford|2005|Biblical Clue|Serial Killer|Next Target|Frost Deduction
Which of Frost's long-standing colleagues is badly hurt while preventing a suicide?|George Toolan|Norman Mullett|Ernie Trigg|Hazel Wallace|Medium|George Toolan|Suicide Intervention|2005|Police Injury|Frost Guilt|Colleague Friendship|Personal Consequence`;

const endangeredSpecies = `Which trainee detective constable is staying at Frost's house?|Robert Presley|Jasper Tranter|Ronnie Lonnegan|Terry Reid|Easy|Robert Presley|Trainee Detective|2006|House Guest|Frost Home|Denton CID|Police Colleague
Who played trainee DC Robert Presley?|Blake Ritson|Jim Sturgess|Nicholas Burns|Robert Glenister|Medium|Blake Ritson|Robert Presley|2006|Actor Casting|Detective Constable|Guest Actor|Frost Housemate
Which criminal seeks Frost's help after being threatened by former associates?|Kevin Flanagan|Jack Flynn|Terry Hirst|Martin Drew|Medium|Kevin Flanagan|Threatened Criminal|2006|Police Protection|Animal Trafficking|Informant|Suspicious Associates
Which illegal trade is at the centre of the criminal network?|Smuggling endangered animals|Selling forged passports|Counterfeiting lottery tickets|Exporting stolen paintings|Easy|Animal Smuggling|Endangered Wildlife|2006|International Crime|Criminal Ring|Exotic Species|Trafficking
Where have the traffickers been secretly keeping exotic animals?|At a farm|Inside a hotel basement|On a canal barge|In a football ground|Medium|Exotic Animals|Hidden Farm|2006|Smuggling Operation|Kevin Flanagan|Illegal Storage|Wildlife Crime
Which Vietnamese associate is involved with Flanagan in the animal trafficking?|Lahn Loc|Dennis Prior|Colin Edwards|Kenneth Shaw|Hard|Lahn Loc|Kevin Flanagan|Vietnamese Smuggler|2006|Endangered Animals|International Network|Farm
Which government department assists Scotland Yard with the animal-smuggling case?|HM Revenue and Customs|Department for Education|Ministry of Defence|Department of Health|Medium|HMRC|Scotland Yard|Wildlife Trafficking|2006|Joint Investigation|Government Agencies|Smuggling
At what pet retailer is Flanagan lost by surveillance officers?|Shawcuts|Pets Corner|Paws and Claws|Pet Kingdom|Hard|Shawcuts|Pet Superstore|2006|Lost Surveillance|Kevin Flanagan|Animal Smuggling|Retail Front
Which apparently helpful senior associate is implicated in Flanagan's death?|Dennis Prior|Robert Presley|Adam Harris|Patrick Bartley|Medium|Dennis Prior|Kevin Flanagan|2006|False Assistance|Trafficking Ring|Murder Plot|Suspect
Which actor portrayed Dennis Prior?|Anton Lesser|Danny Webb|Philip Jackson|Mick Ford|Medium|Anton Lesser|Dennis Prior|2006|Actor Casting|Guest Performer|Animal Smuggler|Criminal Associate
Who owns the pet superstore and sits above the other traffickers?|Kenneth Shaw|Colin Edwards|Kevin Flanagan|Lahn Loc|Medium|Kenneth Shaw|Shawcuts|2006|Trafficking Ringleader|Pet Shop Owner|Exotic Animals|Criminal Network
Which associate accompanies Flanagan under false pretences before his death?|Colin Edwards|Robert Presley|Adam Harris|Patrick Bartley|Hard|Colin Edwards|Kevin Flanagan|2006|Smuggling Network|Execution Plot|Dennis Prior|Accomplice
What shocking discovery greets the Harris family after a holiday?|A naked body in their bedroom|Their house destroyed by fire|A stolen police car in the garden|Their pets missing from the house|Medium|Harris Family|Holiday Return|2006|Bedroom Corpse|Second Case|Home Discovery|Murder Investigation
What is the occupation of the dead man discovered in the Harrises' bedroom?|Art teacher|Security guard|Nurse|Solicitor|Medium|Patrick Bartley|Art Teacher|2006|Bedroom Body|Occupation|School Staff|Victim
What is the name of the deceased art teacher?|Patrick Bartley|Martin Drew|Peter Johnson|Stephen Richford|Medium|Patrick Bartley|Art Teacher|2006|Harris House|Death Inquiry|School Colleague|Victim Identification
Which female music teacher is linked to the dead art teacher?|Carol Haymarsh|Sylvia Ford|Helen Croft|Cathy Thompson|Medium|Carol Haymarsh|Music Teacher|2006|Patrick Bartley|Scandal|School|Harris Family
What personal relationship is trainee DC Presley pursuing?|A romance with a policewoman|An affair with the art teacher|Reconciliation with his former wife|A romance with the prosecution lawyer|Medium|Robert Presley|Romantic Pursuit|2006|WPC|Housemate|Police Colleague|Personal Life
Who had been given the family's house key by Adam Harris?|His teenage friend Malcolm|A school caretaker|The art teacher's brother|A local taxi driver|Hard|Adam Harris|Malcolm|2006|Borrowed House Key|Teenage Friend|Harris Family|Hidden Meetings
What is ultimately determined to have caused the art teacher's death?|A heart attack following an altercation|Poisoning by a colleague|A fall from a ladder|An accidental gunshot|Medium|Patrick Bartley|Heart Attack|2006|Altercation|Carol Haymarsh|Post Mortem|Case Outcome
Why is music teacher Carol Haymarsh arrested?|An improper relationship with a fifteen-year-old|Smuggling protected birds|Forgery of examination results|Stealing expensive paintings|Medium|Carol Haymarsh|Malcolm|2006|Underage Relationship|Teacher Misconduct|Police Arrest|Case Resolution`;

const questions = [];
const seenStems = new Set();

function addSection(facts, section, episode = null) {
  for (const [lineNo, row] of facts.trim().split('\n').entries()) {
    const fields = row.split('|').map(field => field.trim());
    if (fields.length !== 13 || fields.some(field => field.length === 0)) {
      throw new Error(`${section}, line ${lineNo + 1}: expected 13 non-empty fields, received ${fields.length}`);
    }
    const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
    const id = `tv_${FIRST_ID + questions.length}`;
    const answers = [wrong1, wrong2, wrong3];
    answers.splice(questions.length % 4, 0, correctAnswer);
    const question = episode
      ? `In ${PROGRAMME} episode "${episode}", ${stem[0].toLowerCase()}${stem.slice(1)}`
      : `In ${PROGRAMME}, ${stem[0].toLowerCase()}${stem.slice(1)}`;
    const tags = [...new Map([
      'Television', 'British Television', 'ITV', 'Crime Drama', 'Police Procedural',
      PROGRAMME, section, ...(episode ? [episode] : []), correctAnswer, ...specificTags
    ].map(tag => [tag.toLowerCase().replace(/[^a-z0-9]/g, ''), tag])).values()];
    const normalized = question.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (seenStems.has(normalized)) throw new Error(`Repeated question ${id}: ${question}`);
    if (new Set(answers.map(a => a.toLowerCase())).size !== 4 ||
        !answers.includes(correctAnswer) ||
        !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
        tags.length < 11) {
      throw new Error(`Invalid options/difficulty/tags at ${id}`);
    }
    seenStems.add(normalized);
    questions.push({id, category:'Television', question, answers, correctAnswer, difficulty, tags, dailyEligible:true});
  }
}

addSection(programmeFacts, 'Series 10-13 2003-2006 Production and Transmission');
addSection(hiddenTruth, 'Series 10 2003 Hidden Truth', 'Hidden Truth');
addSection(closeEncounters, 'Series 10 2003 Close Encounters', 'Close Encounters');
addSection(heldInTrust, 'Series 10 2003 Held in Trust', 'Held in Trust');
addSection(anotherLife, 'Series 11 2003 Another Life', 'Another Life');
addSection(dancingInTheDark, 'Series 11 2004 Dancing in the Dark', 'Dancing in the Dark');
addSection(nearDeath, 'Series 12 2005 Near Death Experience', 'Near Death Experience');
addSection(endangeredSpecies, 'Series 13 2006 Endangered Species', 'Endangered Species');

module.exports = questions;
