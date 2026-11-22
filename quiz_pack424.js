// PuzzlePilot - The Bigggggg Quiz - Pack 424
// All Saints (Australia): Season 5 (2002), 43 episodes.
// Follows Pack 423. First ID: tv_24393.
// WordPad-ready CommonJS. All Saints finished in 2009, with later seasons still needing audit.
// Every row contains a question, four answer choices, difficulty, and seven specialist tags.
// Storyline details checked against the 2002 episode guide and cast listings.
'use strict';

const FIRST_ID = 24393;
const programme = 'All Saints';
const commonTags = [
  'Television', 'Australian Television', 'Medical Drama',
  'All Saints', 'Programme: All Saints', 'Seven Network',
  'All Saints Western General Hospital', 'Ward 17', 'Season 5', '2002'
];

const facts = `How many episodes were broadcast in the fifth season of All Saints?|43|39|41|46|Medium|Season Five|43 Episodes|2002 Season|Episode Count|Series Structure|Australian Broadcast|Television History
Which episode began the 2002 season of All Saints?|Opening Night|The Show Must Go On|The Lap of the Gods|Slings and Arrows|Easy|Opening Night|Episode 1|Season Premiere|Train Disaster|February 2002|Episode Title|Season Opening
Which episode ended All Saints Season 5?|Yesterday, Today and Tomorrow|Musical Beds|Twice the Fun|Down to Earth|Medium|Yesterday Today And Tomorrow|Episode 43|Season Finale|November 2002|Episode Title|Season Closing|Broadcast Order
Which actress joined the medical team as Dr Charlotte Beaumont in 2002?|Tammy MacIntosh|Georgie Parker|Jenni Baird|Ling-Hsueh Tang|Medium|Tammy MacIntosh|Charlotte Beaumont|New Doctor|Actress Identification|Midseason Arrival|Physician Casting|Episode 16
Who played troubled teenager Adam Finch in the 2002 storyline?|Richard Wilson|Josh Quong Tart|Paul Tassone|Allan Vaughan|Hard|Richard Wilson|Adam Finch|Von Ryan|Teenage Patient|Actor Identification|Gina Finch|Drug Addiction
Which actor played Mitch Stevens's cousin Paul in the fifth season?|Patrick Thompson|Conrad Coleby|Chris Haywood|Martin Lynes|Hard|Patrick Thompson|Paul Stevens|Mitch Cousin|Hannah Laughlin|Guest Actor|Family History|2002 Cast
What disaster followed an earth tremor in the season premiere, Opening Night?|A passenger train derailment|A ferry sinking|An aircraft crash|A stadium collapse|Easy|Opening Night|Episode 1|Earth Tremor|Train Derailment|Emergency Response|Multiple Casualties|Sydney Railway
Which member of Ward 17 travelled with Bron to a theatre premiere before the train crash?|Lyle Slater|Nelson Curtis|Jared Levine|Matt Horner|Medium|Opening Night|Episode 1|Bron Craig|Lyle Slater|Theatre Opening|Train Passengers|Disaster Victims
Which long-serving nurse fractured her wrist during the tremor in Opening Night?|Von Ryan|Terri Sullivan|Paula Morgan|Kylie Preece|Medium|Opening Night|Episode 1|Von Ryan|Wrist Fracture|Hospital Tremor|Earthquake|Staff Injury
What emergency operation did Luke perform inside the wrecked train in The Show Must Go On?|Amputation of a trapped man's leg|A heart transplant|Removal of an appendix|A liver transplant|Medium|The Show Must Go On|Episode 2|Luke Forlano|Train Carriage|Emergency Amputation|Trauma Surgery|Crash Rescue
Which two ambulance officers argued about Scott's actions at the disaster scene in The Show Must Go On?|Rebecca and Scott|Bron and Ben|Paula and Nelson|Kylie and Jared|Medium|The Show Must Go On|Episode 2|Rebecca Green|Scott Zinenko|Paramedic Disagreement|Train Disaster|Romantic Tension
Which doctor had to perform lifesaving surgery on Ward 17 when operating theatres were unavailable?|Mitch Stevens|Luke Forlano|Charlotte Beaumont|Malcolm Pussle|Medium|The Show Must Go On|Episode 2|Mitch Stevens|Terri Sullivan|Bedside Surgery|Operating Theatre Shortage|Crash Aftermath
Whose death in the train disaster left Bron struggling to cope in The Lap of the Gods?|Lyle Slater's|Connor Costello's|Scott Zinenko's|Nelson Curtis's|Easy|The Lap Of The Gods|Episode 3|Bron Craig|Lyle Slater|Bereavement|Train Crash Aftermath|Grief
What personal dependency did Nelson reveal during the early episodes of Season 5?|Alcohol dependence|Compulsive gambling|Nicotine dependence|Prescription painkiller misuse|Medium|The Lap Of The Gods|Episode 3|Nelson Curtis|Alcoholism|Alcoholics Anonymous|Personal Secret|Nursing Practitioner
Which condition affected the patient Von cared for in Slings and Arrows, echoing her own illness?|Lupus|Diabetes|Multiple sclerosis|Cystic fibrosis|Medium|Slings And Arrows|Episode 4|Von Ryan|Claire|Lupus|Autoimmune Disease|Patient Reflection
What happened to a patient under Jared's care in Slings and Arrows?|She jumped from a ward balcony|She locked herself in an ambulance|She walked away from surgery|She swallowed a metal instrument|Medium|Slings And Arrows|Episode 4|Jared Levine|Postpartum Depression|Ward Balcony|Patient Safety|Staff Debrief
In Private Affairs, which relative of Rose did Mitch admit with a suspected cardiac problem?|Her mother Victoria|Her father Paul|Her sister Charlotte|Her cousin Gina|Medium|Private Affairs|Episode 5|Rose Stevens|Victoria|Mitch Stevens|Suspected Heart Condition|Family Conflict
What kind of sportswoman prompted Bron to reflect on independence in Private Affairs?|An Olympic figure skater|A professional golfer|An international swimmer|A teenage cyclist|Hard|Private Affairs|Episode 5|Olympic Figure Skater|Bron Craig|Solo Career|Before Marriage|Patient Parallels
Whose supposed relationship with a patient became the subject of gossip in Private Affairs?|Von Ryan's|Paula Morgan's|Kylie Preece's|Jared Levine's|Medium|Private Affairs|Episode 5|Von Ryan|Ward Gossip|Patient Relationship Rumour|Terri Sullivan|Professional Boundaries
Which two colleagues were rumoured to be having an affair in Loose Lips?|Terri and Mitch|Bron and Nelson|Kylie and Ben|Paula and Luke|Easy|Loose Lips|Episode 6|Terri Sullivan|Mitch Stevens|Affair Rumours|Hospital Gossip|Career Consequences
Which ambulance officer was attacked by a man who blamed her for his wife's death in Loose Lips?|Rebecca Green|Bron Craig|Paula Morgan|Von Ryan|Medium|Loose Lips|Episode 6|Rebecca Green|Angry Husband|Paramedic Assault|Bereavement|Ambulance Work
What treatment did Luke try for his injured arm in Invisible Things?|Chinese medicine|Radiotherapy|Hypnotherapy|Experimental gene therapy|Medium|Invisible Things|Episode 7|Luke Forlano|Chinese Medicine|Injured Arm|Surgical Career|Alternative Therapy
What caused a patient's fatal illness inside the hospital in Invisible Things?|Radiation exposure|Mercury poisoning|A contaminated blood transfusion|A laboratory snakebite|Hard|Invisible Things|Episode 7|Von Ryan|Mitch Stevens|Radiation Poisoning|Hospital Exposure|Patient Secret
Which cancer had a Chinese businessman who resisted Western treatment in Invisible Things?|Colon cancer|Skin cancer|Pancreatic cancer|Lung cancer|Medium|Invisible Things|Episode 7|Chinese Businessman|Colon Cancer|Treatment Refusal|Cultural Beliefs|Patient Autonomy
Which couple debated whether to divorce in All Choked Up?|Mitch and Rose|Ben and Bron|Jared and Kylie|Scott and Rebecca|Easy|All Choked Up|Episode 8|Mitch Stevens|Rose Stevens|Marriage Crisis|Divorce Decision|Terri Sullivan
Which staff member saved a choking patient's life by reaching into the patient's throat in All Choked Up?|Kylie Preece|Von Ryan|Paula Morgan|Bron Craig|Hard|All Choked Up|Episode 8|Kylie Preece|Airway Obstruction|Emergency Intervention|Patient Choking|Clinical Response
What condition did a woman refuse medication for in Flaws in the Glass?|Epilepsy|Asthma|Diabetes|Hypertension|Medium|Flaws In The Glass|Episode 9|Von Ryan|Luke Forlano|Epilepsy|Refused Medication|Seizure Control
Which former educator gave Nelson a difficult time while he nursed her in Flaws in the Glass?|A retired headmistress|A university vice-chancellor|A former music teacher|A school librarian|Hard|Flaws In The Glass|Episode 9|Nelson Curtis|Former Headmistress|Difficult Patient|Nursing Care|Professional Challenge
What pregnancy-related condition affected a young Muslim woman in Flaws in the Glass?|Hypertension|Gestational diabetes|Placenta praevia|Anaemia|Hard|Flaws In The Glass|Episode 9|Muslim Patient|Pregnancy Hypertension|Terri Sullivan|Nelson Curtis|Maternal Health
Which nurse faced sexual harassment from a VIP patient in Only Human?|Paula Morgan|Von Ryan|Bron Craig|Kylie Preece|Medium|Only Human|Episode 10|Paula Morgan|VIP Patient|Sexual Harassment|False Payment Accusation|Workplace Dignity
What infectious childhood illness did an unimmunised child pass to his pregnant mother in Only Human?|Rubella|Mumps|Whooping cough|Chickenpox|Hard|Only Human|Episode 10|Rubella|German Measles|Pregnant Mother|Unimmunised Child|Infection Risk
Which doctor's first return to operating after an injury nearly ended disastrously in Only Human?|Luke Forlano's|Mitch Stevens's|Charlotte Beaumont's|Malcolm Pussle's|Medium|Only Human|Episode 10|Luke Forlano|Return To Surgery|Arm Injury|Operating Theatre|Professional Recovery
In Chemistry, what did an elderly couple decide to do together, confronting Mitch with an ethical dilemma?|End their lives together|Donate their kidneys|Move into a retirement village|Adopt a grandchild|Hard|Chemistry|Episode 11|Mitch Stevens|Elderly Couple|End Of Life Decision|Medical Ethics|Patient Wishes
Which nurse was shaken when a doctor hesitated to save a patient who did not want to live in Chemistry?|Terri Sullivan|Paula Morgan|Bron Craig|Von Ryan|Medium|Chemistry|Episode 11|Terri Sullivan|Mitch Stevens|Patient Refusing Life|Clinical Hesitation|Duty Of Care
Who found Matt and Scott in bed together in No Respite, sparking Ward 17 gossip?|Jared Levine|Nelson Curtis|Ben Markham|Mitch Stevens|Medium|No Respite|Episode 12|Jared Levine|Matt Horner|Scott Zinenko|Ward Gossip|Misunderstood Situation
What had happened to Matt's former girlfriend Anna before their reunion in No Respite?|Her boyfriend had beaten her|She had survived a train derailment|She had been dismissed from nursing|She had lost her sight in an accident|Medium|No Respite|Episode 12|Matt Horner|Anna|Domestic Violence|Former Girlfriend|Patient Admission
Closure of which hospital service increased the pressure on Ward 17 in No Respite?|Respite Care Ward|Cardiac Surgery Unit|Ambulance Dispatch|Radiotherapy Centre|Medium|No Respite|Episode 12|Respite Care Ward|Service Closure|Nelson Curtis|Hospital Resources|Ward Overload
Which patient revealed disturbing memories about his missing children in Thicker Than Water?|Ross Fowler|Adam Finch|Ian Neal|Peter Buchanan|Medium|Thicker Than Water|Episode 13|Ross Fowler|Amnesia|Missing Children|Paula Morgan|Police Search
Which patient diagnosis aggravated Jared's jealousy of Kylie and Luke in Thicker Than Water?|Melanoma|Leukaemia|Hepatitis|Cystic fibrosis|Hard|Thicker Than Water|Episode 13|Jared Levine|Kylie Preece|Luke Forlano|Melanoma Patient|Relationship Jealousy
What new service did Mitch propose establishing in Pride and Prejudice?|A heroin detoxification clinic|A paediatric transplant unit|A private maternity wing|A hospital sports medicine gym|Easy|Pride And Prejudice|Episode 14|Mitch Stevens|Heroin Detox Clinic|Addiction Treatment|Hospital Opposition|New Service Proposal
What form of harassment had a man endured from an eleven-year-old in Pride and Prejudice?|Homophobic harassment|Racist graffiti|Workplace intimidation|Online identity theft|Hard|Pride And Prejudice|Episode 14|Ben Markham|Scott Zinenko|Homophobic Harassment|Eleven Year Old|Ambulance Case
Who organised an industrial stoppage over inadequate supplies in Overload?|Nelson Curtis|Jared Levine|Terri Sullivan|Mitch Stevens|Medium|Overload|Episode 15|Nelson Curtis|Ward Strike|Funding Shortage|Equipment Shortage|Staff Protest
Which nurse resigned after the tragic pressure of the staffing crisis in Overload?|Jared Levine|Von Ryan|Paula Morgan|Bron Craig|Medium|Overload|Episode 15|Jared Levine|Nursing Resignation|Ward Strike|Patient Death|Occupational Stress
What suspected infectious disease put Mitch into quarantine in Swept Away?|Ebola|Cholera|Smallpox|SARS|Easy|Swept Away|Episode 16|Mitch Stevens|Ebola Concern|Quarantine|Terri Sullivan|Infectious Disease
Which nurse detected that a supposed concussion patient had a more serious condition in Swept Away?|Nelson Curtis|Von Ryan|Paula Morgan|Jared Levine|Medium|Swept Away|Episode 16|Nelson Curtis|Concussion Admission|Clinical Vigilance|Unexpected Diagnosis|Ward Assessment
From which country did Bron return in All the Right Reasons?|England|France|Canada|New Zealand|Medium|All The Right Reasons|Episode 17|Bron Craig|Return From England|Overseas Travel|Ben Markham|Reunion
What trapped a forklift operator whom Ben and Rebecca were sent to rescue in All the Right Reasons?|Fallen rolls of newsprint|Collapsed concrete pillars|Stacked timber beams|A fallen shipping container|Hard|All The Right Reasons|Episode 17|Ben Markham|Rebecca Green|Forklift Operator|Newsprint Rolls|Industrial Accident
Why had a patient married a woman from East Timor in All the Right Reasons?|To help her gain Australian residency|To inherit a family business|To avoid military conscription|To qualify for a hospital transplant|Medium|All The Right Reasons|Episode 17|East Timorese Woman|Marriage Of Convenience|Permanent Residency|Von Ryan|Unexpected Romance
Whose death prompted a renewed coronial investigation in Coming Clean?|Dawn O'Connell's|Stephanie Markham's|Lyle Slater's|Neil Phillips's|Medium|Coming Clean|Episode 18|Dawn OConnell|Coronial Inquiry|Luke Forlano|Hospital Investigation|Past Death
What object was embedded through an outback patient's hand in Coming Clean?|A nail|A fish hook|A metal skewer|A sewing needle|Medium|Coming Clean|Episode 18|Outback Patient|Nail Through Hand|Self Treatment|Emergency Department|Patient Complications
Which doctor faced exposure of his role in Ma O'Connell's death during Shame?|Luke Forlano|Mitch Stevens|Charlotte Beaumont|Malcolm Pussle|Medium|Shame|Episode 19|Luke Forlano|Coroners Inquest|Dawn OConnell|Professional Accountability|Terri Sullivan
What did Rose's mother Victoria tell Mitch in Shame?|Rose would fight for full custody of Lucy|Rose planned to move to London|Rose had accepted a new hospital role|Rose wanted to renew their wedding vows|Medium|Shame|Episode 19|Victoria|Rose Stevens|Mitch Stevens|Lucy Stevens|Custody Battle
Which nurse taught a rescued boy how to play and enjoy games in White Noise?|Von Ryan|Paula Morgan|Bron Craig|Kylie Preece|Medium|White Noise|Episode 20|Von Ryan|Rescued Child|Play Skills|Patient Friendship|Childhood Development
Why did Terri and Mitch temporarily separate in White Noise?|Pressure from the custody battle over Lucy|A disagreement about overseas work|A dispute about medical registration|An accusation of financial fraud|Medium|White Noise|Episode 20|Terri Sullivan|Mitch Stevens|Lucy Stevens|Custody Dispute|Relationship Break
Whose mother was accidentally given an overdose by Rebecca in Personal Matters?|Paula Morgan's|Scott Zinenko's|Bron Craig's|Jared Levine's|Medium|Personal Matters|Episode 21|Paula Morgan|Cynthia Morgan|Rebecca Green|Medication Error|Ambulance Career
Which boy had missed vaccinations following a splenectomy in Personal Matters?|Adam Finch|Max Morgan|Lyle Slater|Ross Fowler|Hard|Personal Matters|Episode 21|Adam Finch|Splenectomy|Missing Vaccinations|Von Ryan|Patient Follow Up
What was the name of Bron's overseas romantic partner, whose existence complicated her wedding plans?|Andy|Paul|Ross|Michael|Hard|Personal Matters|Episode 21|Bron Craig|Andy|Overseas Affair|Ben Markham|Wedding Secret
Who introduced Terri to memories of Mitch's sister's death in M for Memory?|Mitch's cousin Paul|Mitch's brother Scott|Rose's father|Luke's uncle|Medium|M For Memory|Episode 22|Paul Stevens|Mitch Stevens|Terri Sullivan|Childhood Tragedy|Family Memories
What was the name of Mitch's sister who died when he was young?|Lucy|Hannah|Victoria|Rebecca|Medium|M For Memory|Episode 22|Mitch Stevens|Sister Lucy|Childhood Bereavement|Paul Stevens|Family Backstory
Which doctor took over Mitch's Ward 17 duties as he prepared his detox clinic in M for Memory?|Charlotte Beaumont|Malcolm Pussle|Kylie Preece|Luke Forlano|Easy|M For Memory|Episode 22|Charlotte Beaumont|Mitch Stevens|Detox Clinic|New Ward Doctor|Staff Transition
What did Rose claim about baby Lucy's paternity in Running on Empathy?|Mitch was not her biological father|Luke was her biological father|The paternity test had already been positive|Lucy was adopted overseas|Medium|Running On Empathy|Episode 23|Rose Stevens|Lucy Stevens|Mitch Stevens|Paternity Doubt|Marriage Breakdown
What neurological condition challenged Luke after he solved a patient's surgical problem in Running on Empathy?|Tourette syndrome|Parkinson's disease|Epilepsy|Multiple sclerosis|Medium|Running On Empathy|Episode 23|Luke Forlano|Tourette Syndrome|Neurological Symptoms|Diagnostic Challenge|Patient Care
Who died in Scott's arms during a callout in Running on Empathy?|Rebecca's replacement|Bron Craig|Ben Markham|A ward volunteer|Hard|Running On Empathy|Episode 23|Scott Zinenko|Paramedic Death|Replacement Officer|Rebecca Green|Ambulance Tragedy
Which test did Mitch decide to take while contesting Lucy's paternity in First Steps?|A DNA test|A liver function test|A blood glucose test|A neurological scan|Medium|First Steps|Episode 24|Mitch Stevens|Lucy Stevens|DNA Paternity Test|Custody Action|Rose Stevens
Who attacked Von after she intervened in his heroin-addicted mother's life in First Steps?|Adam Finch|Max Morgan|Ross Fowler|Matt Horner|Medium|First Steps|Episode 24|Von Ryan|Adam Finch|Gina Finch|Heroin Addiction|Family Intervention
What confession threatened Bron and Ben's wedding in Judgement Day?|Bron's affair with Andy abroad|Ben's secret marriage to Paula|Bron's plan to move to Canada|Ben's gambling losses|Easy|Judgement Day|Episode 25|Bron Craig|Ben Markham|Andy|Overseas Infidelity|Wedding Crisis
Where did Mitch arrange a surprise romantic dinner for Terri in Judgement Day?|In her hospital office|On an ambulance|At a football stadium|On a ferry|Medium|Judgement Day|Episode 25|Mitch Stevens|Terri Sullivan|Romantic Dinner|Ward Office|Relationship Gesture
What news did Terri struggle to share with Mitch in Due Diligence?|She was pregnant|She had taken a job in France|She was leaving nursing|She was adopting Lucy|Easy|Due Diligence|Episode 26|Terri Sullivan|Mitch Stevens|Pregnancy News|Unexpected Baby|Relationship Milestone
Which two people were seriously injured in the road accident at the end of Terri and Mitch's weekend in Due Diligence?|Paul and Hannah|Ben and Bron|Scott and Rebecca|Jared and Kylie|Medium|Due Diligence|Episode 26|Paul Stevens|Hannah Laughlin|Road Accident|Mitch Stevens|Terri Sullivan
Which new ward doctor did Nelson ask out in Due Diligence?|Charlotte Beaumont|Kylie Preece|Rose Stevens|Samantha O'Hara|Medium|Due Diligence|Episode 26|Nelson Curtis|Charlotte Beaumont|Proposed Date|Romantic Revelation|Ward Colleagues
What condition left Hannah's future care in dispute in In the Family Way?|A permanent coma|Paraplegia|Blindness|Kidney failure|Medium|In The Family Way|Episode 27|Hannah Laughlin|Paul Stevens|Comatose Patient|Family Decision|Long Term Care
Which relative of Paula's son Max became involved again after saving a child from a car fire in In the Family Way?|His father Michael|His grandfather Ryan|His uncle Paul|His brother Jared|Medium|In The Family Way|Episode 27|Max Morgan|Michael Plummer|Paula Morgan|Car Fire Rescue|Estranged Father
What vehicle did Paula's son Max hijack in An Itch to Scratch?|An ambulance|A hospital shuttle bus|A police van|A fire engine|Easy|An Itch To Scratch|Episode 28|Max Morgan|Paula Morgan|Ambulance Hijacking|Behaviour Problems|Paramedic Service
What housing decision did Terri and Mitch make in An Itch to Scratch?|Move in together|Sell their house and move abroad|Move into separate flats|Rent a room in Ward 17|Medium|An Itch To Scratch|Episode 28|Terri Sullivan|Mitch Stevens|Living Together|Expecting Baby|New Home
Who lost a heroin user to an overdose while helping addicts in No Expectations?|Jared Levine|Nelson Curtis|Luke Forlano|Ben Markham|Medium|No Expectations|Episode 29|Jared Levine|Heroin Overdose|Underground Drug Users|Community Outreach|Tragic Death
Which tradesman's injured fingers did Luke operate on in No Expectations?|A butcher's|A carpenter's|A chef's|A tailor's|Medium|No Expectations|Episode 29|Luke Forlano|Bernie Farelly|Butcher Shop|Finger Injuries|Surgical Repair
What assault did Jared survive in The Untouchables?|A sexual assault|A stabbing by a patient|A robbery at gunpoint|A hit-and-run collision|Medium|The Untouchables|Episode 30|Jared Levine|Sexual Assault|Trauma|Recovery Storyline|Personal Safety
What disease did Bron and Terri help a patient understand was not a sign of being unclean in The Untouchables?|Leprosy|Cholera|Scabies|Tuberculosis|Medium|The Untouchables|Episode 30|Bron Craig|Terri Sullivan|Leprosy|Patient Stigma|Infectious Disease
Which surgeon feared HIV exposure after cutting himself while operating on a transgender patient in The Untouchables?|Warwick Ellis|Mitch Stevens|Malcolm Pussle|Luke Forlano|Hard|The Untouchables|Episode 30|Warwick Ellis|HIV Exposure Fear|Transgender Patient|Operating Injury|Medical Prejudice
What medication was a young ballerina withdrawing from in Where the Heart Is?|Painkillers|Antibiotics|Antidepressants|Insulin|Medium|Where The Heart Is|Episode 31|Ballerina Patient|Painkiller Withdrawal|Paula Morgan|Nelson Curtis|Restraint Dispute
Which ambulance officer's mother was admitted following a car accident in Where the Heart Is?|Scott Zinenko's|Ben Markham's|Rebecca Green's|Bron Craig's|Medium|Where The Heart Is|Episode 31|Scott Zinenko|Mother|Road Accident|Family Emergency|Ward Admission
Which of Terri's relatives visited before her pregnancy became a medical emergency in Secrets?|Her sister|Her brother|Her aunt|Her cousin|Medium|Secrets|Episode 32|Terri Sullivan|Sister Visit|Pregnancy Emergency|Mitch Stevens|Family Tension
What medication was Jared trying to inject after his attacker's partner received an infection diagnosis in Secrets?|Antibiotics|Insulin|Morphine|An antiviral vaccine|Hard|Secrets|Episode 32|Jared Levine|Sexual Assault Aftermath|Antibiotics|Sexually Transmitted Infection|Fear Of Infection
Which unexpected donor connection unsettled Ben while helping a pregnant woman in Bedtime Stories?|The baby's father might be an ambulance sperm donor|The mother was his long-lost sister|The donor was Mitch's cousin|The baby's father was a surgeon in London|Hard|Bedtime Stories|Episode 33|Ben Markham|Pregnant Patient|Sperm Donation|Potential Paternity|Ambulance Officer
Which doctor was asked by a cancer patient to make a life-or-death decision on her behalf in Bedtime Stories?|Charlotte Beaumont|Kylie Preece|Mitch Stevens|Luke Forlano|Medium|Bedtime Stories|Episode 33|Charlotte Beaumont|Cancer Patient|Treatment Decision|Patient Autonomy|Ethical Dilemma
What disaster threatened Mitch's rehabilitation clinic in When All Is Lost?|A fire|A flood|A gas explosion|A cyberattack|Medium|When All Is Lost|Episode 34|Mitch Stevens|Detox Clinic Fire|Professional Crisis|Clinic Safety|Hospital Investigation
Which nurse gained a promotion that caused friction with Nelson in When All Is Lost?|Bron Craig|Paula Morgan|Von Ryan|Kylie Preece|Medium|When All Is Lost|Episode 34|Bron Craig|Nelson Curtis|Promotion|Ward Leadership|Staff Rivalry
Which two women were rumoured to have kissed in When All Is Lost?|Charlotte and Bron|Terri and Paula|Kylie and Von|Rose and Rebecca|Medium|When All Is Lost|Episode 34|Charlotte Beaumont|Bron Craig|Matt Horner|Staff Gossip|Same Sex Kiss
Which kind of couple did Charlotte and Von defend from separation in Into the Light?|An elderly same-sex couple|A recently married teenage couple|Two travelling foster parents|A divorced couple reunited after years|Medium|Into The Light|Episode 35|Charlotte Beaumont|Von Ryan|Elderly Same Sex Couple|Patient Advocacy|Right To Remain Together
What happened to Mitch's detox project despite his efforts in Into the Light?|The clinic was lost|It received a major government grant|It moved to London|It became the hospital's largest ward|Medium|Into The Light|Episode 35|Mitch Stevens|Detox Clinic Closure|Professional Setback|Heroin Rehabilitation|Failed Rescue
What charge followed Mitch waking injured after a drunken night in Big Kids?|Assault|Fraud|Drug possession|Dangerous driving|Medium|Big Kids|Episode 36|Mitch Stevens|Assault Arrest|Alcohol|Bruises|Personal Crisis
Which ward clerk resigned after being falsely accused of exposing himself to a child in Big Kids?|Matt Horner|Nelson Curtis|Regina Butcher|Jared Levine|Medium|Big Kids|Episode 36|Matt Horner|False Allegation|Child Patient|Ward Clerk Resignation|Professional Reputation
Who was found unconscious after a drug overdose in You Should've Said?|Adam Finch|Max Morgan|Matt Horner|Ian Neal|Medium|You Shouldve Said|Episode 37|Adam Finch|Drug Overdose|Von Ryan|Gina Finch|Teenage Addiction
In which city did Kylie learn she had secured a new job in You Should've Said?|Paris|London|Melbourne|New York|Easy|You Shouldve Said|Episode 37|Kylie Preece|Paris Job|Career Opportunity|Doctor Departure|Overseas Move
What conflict endangered Rebecca and Scott on an ambulance call in Hear Me Touch Me Heal Me?|A bikie gang war|An industrial strike|A riot at a football match|A prison escape|Medium|Hear Me Touch Me Heal Me|Episode 38|Rebecca Green|Scott Zinenko|Bikie War|Gunfire|Ambulance Emergency
What impairment explained why Von's young patient had withdrawn and was hurting himself in Hear Me Touch Me Heal Me?|Hearing loss|Blindness|Paralysis|Loss of smell|Medium|Hear Me Touch Me Heal Me|Episode 38|Von Ryan|Young Patient|Hearing Impairment|Self Injury|Misunderstood Behaviour
What did patient Ian Neal believe had taken over the world in Down to Earth?|Aliens|Secret police agents|Time travellers|Robots|Medium|Down To Earth|Episode 39|Ian Neal|Paranoid Delusion|Alien Belief|Bron Craig|Ben Markham
What transplant was jeopardised by a stroke patient's wife's reluctance to withdraw life support in Down to Earth?|A lung transplant|A heart transplant|A kidney transplant|A bone marrow transplant|Medium|Down To Earth|Episode 39|Luke Forlano|Stroke Patient|Lung Transplant|Life Support Decision|Donor Dilemma
Which former ward clerk returned after a failed marriage in Consuming Passions?|Regina Butcher|Jodi Horner|Tony Hurst|Matt Horner|Medium|Consuming Passions|Episode 40|Regina Butcher|Return To Ward|Marriage Breakdown|Nelson Curtis|Matchmaking
What violent consequence followed Ian Neal's escape from custody in Consuming Passions?|Ben Markham was stabbed|Mitch Stevens was shot|Jared Levine was abducted|Scott Zinenko was poisoned|Medium|Consuming Passions|Episode 40|Ian Neal|Ben Markham|Stab Wounds|Escape From Custody|Paramedic Danger
Which ward was Ben transferred to from intensive care in Musical Beds?|Ward 17|The maternity ward|The rehabilitation ward|The children's ward|Easy|Musical Beds|Episode 41|Ben Markham|Ward Transfer|Intensive Care Transfer|Stabbing Recovery|Bron Craig
Which doctor worked with Jared on her final hospital day to investigate a patient's kidney problem in Musical Beds?|Kylie Preece|Charlotte Beaumont|Mitch Stevens|Terri Sullivan|Medium|Musical Beds|Episode 41|Kylie Preece|Jared Levine|Kidney Diagnosis|Final Hospital Day|Professional Reunion
What patient-admission practice did Nelson and Rebecca manipulate in Musical Beds?|Bed allocations to avoid chronic-care cases|The operating theatre calendar|The ambulance driving roster|The staff training budget|Hard|Musical Beds|Episode 41|Nelson Curtis|Rebecca Green|Bed Allocation Scheme|Chronic Care|Ward Management
Which hospital department offered Nelson a promotion in Twice the Fun?|Emergency Department|Radiology|Theatre Recovery|Maternity|Medium|Twice The Fun|Episode 42|Nelson Curtis|Emergency Department|Nursing Unit Manager|Promotion Offer|Career Move
What secret complicated treatment of an injured truck driver in Twice the Fun?|He had two families|He was using a false medical licence|He had never learned to drive|He was an escaped convict|Hard|Twice The Fun|Episode 42|Truck Driver|Two Families|Nelson Curtis|Emergency Department|Ethical Dilemma
Which character's unexpected appearance rattled Mitch in Twice the Fun?|Rose Stevens|Jodi Horner|Stephanie Markham|Samantha O'Hara|Medium|Twice The Fun|Episode 42|Rose Stevens|Mitch Stevens|Unexpected Return|Divorce|Personal Crisis
Who returned to Ward 17, unsettling Terri and Mitch in Yesterday Today and Tomorrow?|Rose Stevens|Kate Larsen|Jaz Hillerman|Sophie Williams|Medium|Yesterday Today And Tomorrow|Episode 43|Rose Stevens|Terri Sullivan|Mitch Stevens|Season Finale|Family Tension
What sort of memories disturbed an elderly patient in the 2002 finale?|Distressing memories from the past|Memories of a recent holiday|A forgotten wedding anniversary|Memories of a lost lottery win|Medium|Yesterday Today And Tomorrow|Episode 43|Elderly Patient|Distressing Memories|Past Trauma|Ward 17|Season Finale
Who struggled with problems caused by a new ambulance partner in the Season 5 finale?|Scott Zinenko|Bron Craig|Ben Markham|Rebecca Green|Medium|Yesterday Today And Tomorrow|Episode 43|Scott Zinenko|New Paramedic Partner|Workplace Trouble|Ambulance Team|Season Cliffhanger`;


// 2002 Series 5 story gaps, cast and verified 2002 AFI/2003 Logie awards.
// Original question IDs and answers must remain unchanged.
const AUDIT_ORIGINAL_COUNT = 109;
const AUDIT_FIRST_ID = 42182;
const auditFacts = `Which All Saints actor won the 2003 Logie for Most Popular Actor?|Erik Thomson|Conrad Coleby|Brian Vriends|Martin Lynes|Medium|2003 Logies|Erik Thomson|Mitch Stevens|Most Popular Actor|Silver Logie|acting winner|Australian awards
Which All Saints actress won the 2003 Logie for Most Popular Actress?|Libby Tanner|Georgie Parker|Judith McGrath|Tammy MacIntosh|Medium|2003 Logies|Libby Tanner|Bron Craig|Most Popular Actress|Silver Logie|acting winner|Australian awards
Which award did All Saints win as a programme at the 2003 Logies?|Most Popular Australian Program|Most Outstanding Mini Series|Most Popular Comedy Program|Most Outstanding Documentary|Medium|2003 Logies|Most Popular Australian Program|Seven Network|viewer voted honour|programme winner|Australian drama|television awards
At the 2002 Australian Film Institute Awards which drama honour was All Saints Series 5 nominated for?|Best Drama Series|Best Comedy Series|Best Documentary Series|Best Children's Drama|Medium|2002 AFI Awards|Best Drama Series|Series Five|award nomination|Australian Film Institute|television category|programme recognition
Which All Saints producer was credited with the 2002 AFI nomination for Best Drama Series?|Di Drew|Jo Porter|Bevan Lee|John Holmes|Medium|2002 AFI Awards|Di Drew|Best Drama Series|producer credit|series five|award nomination|television drama
Which All Saints director received a 2002 AFI nomination for the episode Opening Night?|Peter Fisk|Scott Feeney|Robert Marchand|Di Drew|Medium|2002 AFI Awards|Peter Fisk|Opening Night|Best Direction|episode one|director nomination|series five
Which All Saints guest actress received a 2002 AFI supporting-actress nomination for Opening Night?|Belinda McClory|Kate Fischer|Tammy MacIntosh|Georgie Parker|Medium|2002 AFI Awards|Belinda McClory|Opening Night|supporting actress|guest performance|actor nomination|episode one
Which All Saints character was played by guest actress Belinda McClory during Series 5?|Nicola Lewis|Rose Stevens|Leanne Curtis|Hannah Laughlin|Hard|Belinda McClory|Nicola Lewis|guest actress|season five|2002 appearance|cast identification|Opening Night
Which actress played All Saints patient Hannah Laughlin during the fifth series?|Kate Fischer|Camilla Ah Kin|Genevieve O Reilly|Rochelle Whyte|Medium|Kate Fischer|Hannah Laughlin|Paul Stevens|guest actress|2002|road accident|acting role
Which actor played the All Saints character Peter Buchanan during Series 5?|Chris Haywood|Erik Thomson|Martin Lynes|Patrick Thompson|Medium|Chris Haywood|Peter Buchanan|hospital administrator|series five|2002 cast|Mitch Stevens|actor identification
Which actress played All Saints nurse Cara Windom during Series 5?|Rochelle Whyte|Jenni Baird|Judith McGrath|Ling Hsueh Tang|Medium|Rochelle Whyte|Cara Windom|ward nurse|series five|recurring character|2002 cast|actor identification
Which actress portrayed All Saints character Leanne Curtis during the fifth series?|Genevieve O'Reilly|Tammy MacIntosh|Celia Ireland|Belinda McClory|Medium|Genevieve O Reilly|Leanne Curtis|Nelson Curtis|2002 guest cast|actor identification|series finale|secret wife
Which actor played the son of Paula Morgan in All Saints Series 5?|Jack Rickard|Richard Wilson|Josh Quong Tart|Conrad Coleby|Medium|Jack Rickard|Max Morgan|Paula Morgan|2002 recurring cast|child character|ambulance hijacking|family drama
In All Saints episode Opening Night what caused a second explosion after the train derailment?|A gas leak|A lightning strike|A ruptured water main|An electrical storm|Medium|Opening Night|train disaster|gas leak|second explosion|Lyle Slater|opening episodes|earthquake aftermath
In All Saints episode The Show Must Go On what injury endangered Luke Forlano's surgical career?|A crushed hand|A broken ankle|A spinal fracture|Severe hearing loss|Medium|The Show Must Go On|Luke Forlano|crushed hand|train rescue|surgical career|emergency amputation|episode two
In All Saints episode The Show Must Go On which two ambulance officers began a romantic relationship after arguing over the disaster response?|Scott Zinenko and Rebecca Green|Ben Markham and Paula Morgan|Connor Costello and Bron Craig|Nelson Curtis and Charlotte Beaumont|Medium|The Show Must Go On|Scott Zinenko|Rebecca Green|train disaster|romantic development|ambulance colleagues|episode two
In All Saints episode Slings and Arrows what condition affected the patient who jumped from the ward balcony?|Postpartum depression|Lupus|Schizophrenia|Encephalitis|Medium|Slings and Arrows|postpartum depression|balcony incident|Jared Levine|patient crisis|ward safety|episode four
In All Saints episode Swept Away which illness was eventually diagnosed after the suspected Ebola scare?|Dengue fever|Yellow fever|Measles|Typhoid fever|Medium|Swept Away|Dengue fever|suspected Ebola|quarantine|Mitch Stevens|Charlotte Beaumont|episode sixteen
In All Saints episode All the Right Reasons who became acting nursing manager when Terri took a day off?|Nelson Curtis|Von Ryan|Bron Craig|Paula Morgan|Medium|All the Right Reasons|Nelson Curtis|acting NUM|Terri Sullivan|ward management|Bron Craig return|episode seventeen
In All Saints episode White Noise what risky action did Von Ryan take to help two teenagers lost during a trip?|Abseiled down a cliff|Swam across a flooded river|Climbed onto a train roof|Entered a burning tunnel|Medium|White Noise|Von Ryan|teenagers|abseiling|rescue|outdoor excursion|episode twenty
In All Saints episode Personal Matters what career decision did Rebecca Green make after her medication error?|Resign from ambulance work|Apply to medical school|Join the police service|Transfer to Ward 17|Medium|Personal Matters|Rebecca Green|morphine overdose|Paula Morgan mother|ambulance resignation|medication error|episode twenty one
In All Saints episode Secrets which infection helped Charlotte Beaumont understand Jared Levine's assault?|Gonorrhoea|Malaria|Chickenpox|Tuberculosis|Medium|Secrets|Jared Levine|Charlotte Beaumont|sexual assault|gonorrhoea|delayed disclosure|episode thirty two
In All Saints episode When All Is Lost what pregnancy tragedy befell Terri Sullivan?|She suffered a miscarriage|She gave birth prematurely|She discovered she was having twins|She underwent an emergency Caesarean|Medium|When All Is Lost|Terri Sullivan|miscarriage|Mitch Stevens|fractured ankle|pregnancy loss|episode thirty four
In All Saints episode Into the Light which past abuser's admission forced Bron Craig to confront childhood trauma?|The man who molested her|An estranged schoolteacher|Her former gambling bookie|A violent former employer|Medium|Into the Light|Bron Craig|childhood abuse|past abuser|patient admission|trauma confrontation|episode thirty five
In All Saints episode Bedtime Stories whose kiss with Charlotte Beaumont was intended to make Ben Markham jealous?|Bron Craig|Paula Morgan|Terri Sullivan|Rebecca Green|Medium|Bedtime Stories|Bron Craig|Charlotte Beaumont|Ben Markham|jealousy|romantic tension|episode thirty three
In All Saints season five finale Yesterday Today and Tomorrow which couple became engaged after Ben's proposal?|Ben Markham and Bron Craig|Mitch Stevens and Rose Stevens|Scott Zinenko and Rebecca Green|Nelson Curtis and Paula Morgan|Medium|Yesterday Today and Tomorrow|Ben Markham|Bron Craig|marriage proposal|season finale|2002|relationship resolution
In All Saints season five finale Yesterday Today and Tomorrow whom did Mitch Stevens propose marriage to?|Terri Sullivan|Rose Stevens|Charlotte Beaumont|Paula Morgan|Medium|Yesterday Today and Tomorrow|Mitch Stevens|Terri Sullivan|divorce finalised|marriage proposal|season finale|2002
In All Saints finale Yesterday Today and Tomorrow which nurse discovered that Leanne was Nelson Curtis's wife?|Von Ryan|Paula Morgan|Bron Craig|Charlotte Beaumont|Medium|Yesterday Today and Tomorrow|Nelson Curtis|Leanne Curtis|secret marriage|ward nurse|season finale|2002`;

let sequence = 0;
const questions = [...facts.trim().split('\n'), ...auditFacts.trim().split('\n')].map(line => {
  const id = 'tv_' + String(sequence < AUDIT_ORIGINAL_COUNT ? FIRST_ID + sequence : AUDIT_FIRST_ID + sequence - AUDIT_ORIGINAL_COUNT).padStart(5, '0');
  const fields = line.trim().split('|').map(s => s.trim());
  if (fields.length !== 13)
    throw new Error(`Expected 13 fields for ${id}; got ${fields.length}`);
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
  if (!question || [correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(v => !v))
    throw new Error(`Empty field in ${id}`);
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.length !== 7)
    throw new Error(`Invalid difficulty or specific tags in ${id}`);
  if (new Set([correctAnswer, wrong1, wrong2, wrong3].map(s => s.toLowerCase())).size !== 4)
    throw new Error(`Repeated answer option in ${id}`);
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(sequence % 4, 0, correctAnswer);
  const tags = [...new Map([...commonTags, correctAnswer, ...specificTags]
    .map(tag => [tag.toLowerCase(), tag])).values()];
  const contextualQuestion = question.includes(programme)
    ? question
    : question.startsWith('In ')
      ? 'In All Saints episode ' + question.slice(3)
      : 'In All Saints, ' + question[0].toLowerCase() + question.slice(1);
  sequence++;
  return {
    id, category: 'Television', programme, question: contextualQuestion, answers,
    correctAnswer, difficulty, tags, dailyEligible: true
  };
});

if (
  !questions.length || questions[0].id !== 'tv_24393' ||
  new Set(questions.map(q => q.id)).size !== questions.length ||
  new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length ||
  questions.some(q =>
    q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
    q.tags.length < 14 || !q.tags.includes('Programme: All Saints') ||
    q.dailyEligible !== true
  )
) throw new Error('Pack 424 exported question validation failed');

module.exports = questions;