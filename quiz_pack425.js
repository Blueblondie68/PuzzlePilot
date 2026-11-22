// PuzzlePilot - The Bigggggg Quiz - Pack 425
// All Saints (Australia): Season 6 (2003), 43 episodes.
// Follows Pack 424. First ID: tv_24502.
// WordPad-ready CommonJS. All Saints ended in 2009; later seasons still require auditing.
// Each row: question | correct | three wrong answers | difficulty | seven specific tags.
// Storylines cross-checked with the 2003 episode guides and cast listings.
'use strict';

const FIRST_ID = 24502;
const programme = 'All Saints';
const commonTags = [
  'Television', 'Australian Television', 'Australian Medical Drama',
  'All Saints', 'Programme: All Saints', 'Seven Network',
  'All Saints Western General Hospital', 'Ward 17', 'Season 6', '2003'
];

const facts = `How many episodes were broadcast in the sixth season of All Saints?|43|39|41|45|Medium|Season Six|Episode Count|43 Episodes|Australian Broadcast|Season Length|Television History|2003 Season
Which episode opened the sixth season of All Saints?|Trust|Heroic Measures|Vale|Never Forget|Easy|Trust|Episode 1|Season Premiere|Ben And Bron Wedding|2003 Opening|Episode Titles|Broadcast Order
Which episode concluded All Saints Season 6?|Never Forget|Loser Pays|The Right Thing|Safety Net|Easy|Never Forget|Episode 43|Season Finale|Hospital Gunman|November 2003|Episode Title|Broadcast Order
Which actor joined All Saints as Dr Vincent Hughes in 2003?|Christopher Gabardi|Brett Climo|Conrad Coleby|Martin Lynes|Medium|Christopher Gabardi|Vincent Hughes|Actor Identification|New Doctor|Emergency Department|Charlotte Beaumont|2003 Cast
Who portrayed new nurse Sterling 'Sterlo' McCormack in Season 6?|Henry Nixon|Ben Tari|Paul Tassone|Jeremy Cumpston|Medium|Henry Nixon|Sterling McCormack|Sterlo|Nurse Casting|Actor Identification|Ward Staff|2003 Arrival
Which actor portrayed ambulance officer Alex Kearns in the 2003 season?|Fletcher Humphrys|Brian Vriends|Erik Thomson|Josh Quong Tart|Hard|Fletcher Humphrys|Alex Kearns|Ambulance Officer|Actor Identification|Scott Zinenko|New Paramedic|2003 Cast
Who played nurse Frances Regan, who arrived from overseas?|Rachel McNamara|Jenni Baird|Natasha Beaumont|Celia Ireland|Hard|Rachel McNamara|Frances Regan|Nurse Casting|Actor Identification|Bron Craig Friend|New Arrival|2003 Recurring Cast
Which two characters married in the season-opening episode Trust?|Bron and Ben|Terri and Mitch|Paula and Luke|Charlotte and Vincent|Easy|Trust|Episode 1|Bron Craig|Ben Markham|Wedding Ceremony|Married Couple|Season Opening
Which relative unexpectedly arrived for Bron's wedding in Trust?|Her estranged father|Her long-lost sister|Her aunt from London|Her former husband|Medium|Trust|Episode 1|Bron Craig|Estranged Father|Family Reunion|Wedding Tension|Ben Markham
What new doctor's role did Angus Drummond begin in Trust?|Medical intern|Nursing unit manager|Hospital pharmacist|Ambulance supervisor|Medium|Trust|Episode 1|Angus Drummond|New Intern|Medical Training|Ward Orientation|Hospital Staff
Which ambulance officer dived into a river to rescue a woman in Heroic Measures?|Scott Zinenko|Ben Markham|Alex Kearns|Rebecca Green|Easy|Heroic Measures|Episode 2|Scott Zinenko|River Rescue|Sinking Car|Ambulance Emergency|Risky Rescue
What condition brought Rebecca Green's younger brother Charlie to hospital in Heroic Measures?|Appendicitis|Pneumonia|A fractured arm|Kidney failure|Medium|Heroic Measures|Episode 2|Rebecca Green|Charlie Green|Appendicitis|Younger Brother|Family Tension
What drug did Angus suspect Mitch had given a patient in an overdose in Heroic Measures?|Heparin|Insulin|Morphine|Warfarin|Hard|Heroic Measures|Episode 2|Angus Drummond|Mitch Stevens|Heparin Overdose|Diabetic Patient|Medical Allegation
Which nurse learned she was pregnant in Destiny's Child?|Paula Morgan|Von Ryan|Charlotte Beaumont|Regina Butcher|Easy|Destinys Child|Episode 3|Paula Morgan|Pregnancy Discovery|Hospital Colleagues|Family Plans|Season Storyline
Which two professionals disagreed about a decision at a crash scene in Destiny's Child?|Ben and Luke|Scott and Alex|Mitch and Vincent|Nelson and Jared|Medium|Destinys Child|Episode 3|Ben Markham|Luke Forlano|Accident Scene|Clinical Disagreement|Child Death
Which sense was Mitch losing as his behaviour became more erratic in Destiny's Child?|Hearing|Sight|Taste|Smell|Medium|Destinys Child|Episode 3|Mitch Stevens|Hearing Loss|Terri Sullivan|Neurological Symptoms|Brain Illness
Which scan revealed a serious problem with Mitch's brain in Broken English?|CT scan|Ultrasound|Bone-density scan|Chest X-ray|Medium|Broken English|Episode 4|Mitch Stevens|Brain CT|Terri Sullivan|Neurological Investigation|Serious Diagnosis
Where did Terri seek refuge after Mitch struck her in Broken English?|At her sister Margaret's home|At Bron's parents' farm|In the hospital chapel|At Regina's flat|Medium|Broken English|Episode 4|Terri Sullivan|Margaret|Domestic Violence|Mitch Stevens|Family Support
What nationality was the elderly boarder whose living conditions Charlotte uncovered in Broken English?|Polish|Italian|German|Greek|Hard|Broken English|Episode 4|Charlotte Beaumont|Elderly Polish Man|Boarding House|Translator|Living Conditions
What test determined whether Mitch's brain tumour could be treated in All Our Tomorrows?|A brain biopsy|A spinal tap|An ECG|A kidney biopsy|Medium|All Our Tomorrows|Episode 5|Mitch Stevens|Brain Biopsy|Brain Tumour|Diagnosis|Terminal Illness
What substance was a schoolchild habitually inhaling in All Our Tomorrows?|Paint thinners|Glue from stamps|Petrol fumes|A cleaning spray|Hard|All Our Tomorrows|Episode 5|Young Student|Paint Thinner Sniffing|Substance Misuse|School Patient|Clinical Care
What animal belonging to Charlotte injured a neighbour's child in All Our Tomorrows?|Her dog|Her cat|Her horse|Her pet snake|Medium|All Our Tomorrows|Episode 5|Charlotte Beaumont|Dog Attack|Neighbour Child|Responsibility|Ethical Decision
Whose father was admitted after a multiple-vehicle collision in Older and Wiser?|Luke Forlano's|Ben Markham's|Scott Zinenko's|Jared Levine's|Medium|Older And Wiser|Episode 6|Luke Forlano|Father Sal|Road Collision|Family Patient|Refused Diagnosis
Which ambulance officer completed his last working day in Older and Wiser?|Ben Markham|Scott Zinenko|Alex Kearns|Rebecca Green|Easy|Older And Wiser|Episode 6|Ben Markham|Final Shift|Ambulance Departure|Bron Craig|Moving Away
What job did Bron encourage Jared to apply for before her departure in Older and Wiser?|Her second-in-command position|Ambulance dispatcher|Head of surgery|Ward clerk|Medium|Older And Wiser|Episode 6|Bron Craig|Jared Levine|Second In Command|Nursing Promotion|Career Opportunity
Which colleague had her final shift on Ward 17 in Separation Pains?|Bron Craig|Terri Sullivan|Von Ryan|Regina Butcher|Easy|Separation Pains|Episode 7|Bron Craig|Last Shift|Ward Departure|Ben Markham|Country Move
What did Mitch have frozen as his medical outlook worsened in Separation Pains?|A sperm sample|Bone marrow|A blood donation|An embryo from IVF|Medium|Separation Pains|Episode 7|Mitch Stevens|Sperm Freezing|Fertility Preservation|Terri Sullivan|Terminal Prognosis
What elective operation divided Terri and Charlotte in Separation Pains?|Hysterectomy|Heart bypass|Cataract removal|Appendectomy|Hard|Separation Pains|Episode 7|Terri Sullivan|Charlotte Beaumont|Elective Hysterectomy|Patient Choice|Medical Ethics
Which occasion did Terri arrange for Mitch and the Ward 17 family in The Last Supper?|A celebration of his life|A nursing graduation|A retirement party for Nelson|A baby shower for Paula|Medium|The Last Supper|Episode 8|Terri Sullivan|Mitch Stevens|Ward 17 Family|Life Celebration|Romantic Surprise
What accident had left the son of Rebecca's patient missing in The Last Supper?|A boating accident|A plane crash|A mountain fall|A train derailment|Medium|The Last Supper|Episode 8|Rebecca Green|Missing Son|Boating Accident|Grieving Parents|Hopeful Rescue
Which colleague's struggle for survival dominated Only the Good Die Young?|Mitch Stevens's|Luke Forlano's|Nelson Curtis's|Scott Zinenko's|Easy|Only The Good Die Young|Episode 9|Mitch Stevens|Operating Theatre|Brain Tumour|Critical Surgery|Patient Outcome
Which episode centred on the funeral of Mitch Stevens?|Vale|Trust|The Last Supper|Past Tense|Easy|Vale|Episode 10|Mitch Stevens|Funeral|Ward Grief|Character Death|Episode Title
Which new nurse arrived at Ward 17 during Vale?|Sterling McCormack|Frances Regan|Samantha O'Hara|Jaz Hillerman|Medium|Vale|Episode 10|Sterling McCormack|Sterlo|New Nurse|Staff Arrival|Mitch Stevens Funeral
Which hospital executive did Sterlo try especially hard to avoid in Vale?|Colin Blackburn|Joan Marden|Malcolm Pussle|Alan Marden|Medium|Vale|Episode 10|Sterlo|Colin Blackburn|Hospital CEO|Avoidance|Professional Secret
In The Art of Flowers, which former ward clerk returned as a hospital orderly?|Matt Horner|Tony Hurst|Jodi Horner|Regina Butcher|Medium|The Art Of Flowers|Episode 11|Matt Horner|Hospital Orderly|Return To Work|Ward Staff|Career Change
What kind of business did Regina's new romantic interest Morris run in The Art of Flowers?|A florist's shop|A bookshop|A bakery|A pharmacy|Medium|The Art Of Flowers|Episode 11|Regina Butcher|Morris|Florist|Romantic Date|Flower Arrangements
What illness brought a grieving Terri into hospital herself in Fanning the Flames?|Pneumonia|Meningitis|Appendicitis|Influenza|Easy|Fanning The Flames|Episode 12|Terri Sullivan|Pneumonia|Mitch Stevens Death|Bereavement|Patient Admission
Which doctor made his first appearance in Fanning the Flames?|Vincent Hughes|Malcolm Pussle|Harry Williams|Peter Morrison|Easy|Fanning The Flames|Episode 12|Vincent Hughes|New Doctor|Emergency Department|2003 Arrival|Hospital Colleagues
What academic challenge were Von and Luke both facing in Fanning the Flames?|Examinations|A driving test|A hospital interview|An overseas scholarship|Medium|Fanning The Flames|Episode 12|Von Ryan|Luke Forlano|Examinations|Professional Training|Different Outcomes
What did Terri telephone Nelson to announce in Breathing Space?|Her resignation|Her engagement|Her pregnancy|Her promotion|Medium|Breathing Space|Episode 13|Terri Sullivan|Nelson Curtis|Resignation Announcement|Mitch Bereavement|Ward Leadership
What longstanding symptom puzzled Vincent while treating Tina Blake in Breathing Space?|Bad breath|Persistent hiccups|Night blindness|A persistent cough|Hard|Breathing Space|Episode 13|Tina Blake|Vincent Hughes|Halitosis|Ovarian Cyst|Diagnostic Mystery
Who was the cancer patient whose care tested Matt and Kirsten's new romance in Breathing Space?|Jenny Garfield|Liz Fleming|Rose Stevens|Carmen Ellis|Hard|Breathing Space|Episode 13|Jenny Garfield|Matt Horner|Kirsten|Cancer Care|Relationship Test
Which doctor's care of a heart-transplant patient brought him into conflict with Terri in Past Tense?|Vincent Hughes|Luke Forlano|Malcolm Pussle|Mitch Stevens|Medium|Past Tense|Episode 14|Vincent Hughes|Terri Sullivan|Heart Transplant Patient|Broken Leg|Clinical Clash
Which hospital counsellor was revealed to be Nelson Curtis's wife in Past Tense?|Leanne Curtis|Paula Morgan|Charlotte Beaumont|Frances Regan|Medium|Past Tense|Episode 14|Leanne Curtis|Nelson Curtis|Hospital Counsellor|Marital Relationship|Jared Levine
What infectious disease affected the patient from a detention centre in Seeking Asylum?|Tuberculosis|Malaria|Rubella|Typhoid fever|Medium|Seeking Asylum|Episode 15|Vincent Hughes|Tuberculosis Patient|Detention Centre|Infectious Disease|Refugee Health
How had Vincent Hughes's second wife died, as revealed in Seeking Asylum?|In a landmine explosion|In an aircraft accident|During a hospital fire|From a brain tumour|Hard|Seeking Asylum|Episode 15|Vincent Hughes|Second Wife|Landmine Accident|Traumatic Past|Charlotte Beaumont
Which hospital doctor did Terri defend against criticism in Seeking Asylum?|Malcolm Pussle|Luke Forlano|Mitch Stevens|Harry Williams|Medium|Seeking Asylum|Episode 15|Terri Sullivan|Malcolm Pussle|Vincent Hughes|Professional Reputation|Hospital CEO
Whose parents were injured in the road accident attended by Scott and Alex in In Control?|Rebecca Green's|Scott Zinenko's|Paula Morgan's|Jared Levine's|Medium|In Control|Episode 16|Rebecca Green|Scott Zinenko|Alex Kearns|Parents Car Crash|Family Emergency
What did Rebecca's father ask her to remove after his accident in In Control?|His blood sample|His driving licence|A hospital security recording|His car keys|Hard|In Control|Episode 16|Lindsay Green|Rebecca Green|Blood Sample|Possible Drink Driving|Ethical Dilemma
Which new nurse arrived from abroad hoping to work with her friend Bron in Best Intentions?|Frances Regan|Kate Larsen|Samantha O'Hara|Jaz Hillerman|Medium|Best Intentions|Episode 17|Frances Regan|Bron Craig|Overseas Arrival|New Ward Nurse|Old Friends
What condition kept Terri's neighbour Carmen fearful of leaving home in Best Intentions?|Agoraphobia|Epilepsy|Alzheimer's disease|Narcolepsy|Medium|Best Intentions|Episode 17|Terri Sullivan|Carmen|Agoraphobia|Psychiatric Ward|Neighbour Support
What accident left a mother convinced her son had not survived in Best Intentions?|A car collision|A fire at a shopping centre|A boating incident|A fall from a ladder|Medium|Best Intentions|Episode 17|Mother And Son|Car Accident|Trauma Memory|Survival Denial|Nursing Reassurance
Which annual social event was held in Night Moves?|All Saints Charity Ball|Christmas Pageant|Hospital Bed Race|Nursing Graduation|Easy|Night Moves|Episode 18|Hospital Charity Ball|Fundraising Event|Terri Sullivan|Vincent Hughes|Ward Social Life
Which doctor did Terri begin to reconsider her opinion of during Night Moves?|Vincent Hughes|Luke Forlano|Malcolm Pussle|Mitch Stevens|Medium|Night Moves|Episode 18|Terri Sullivan|Vincent Hughes|Changed Opinion|Charity Ball|Relationship Development
Which two nurses argued over how to handle a suicide attempt in Sins of the Past?|Nelson and Jared|Von and Paula|Bron and Terri|Frances and Regina|Medium|Sins Of The Past|Episode 19|Nelson Curtis|Jared Levine|Suicide Attempt|Nursing Disagreement|Patient Welfare
Whose death prompted the custody dispute over Lucy in No Place Like Home?|Rose Stevens's|Victoria's|Leanne Curtis's|Paula Morgan's|Easy|No Place Like Home|Episode 20|Rose Stevens|Lucy Stevens|Mitch Stevens|Death Investigation|Custody Dispute
Who fought Terri over Lucy's future after Rose died in No Place Like Home?|Rose's mother Victoria|Mitch's cousin Paul|Bron's father Richard|Luke's father Sal|Medium|No Place Like Home|Episode 20|Terri Sullivan|Victoria|Lucy Stevens|Family Custody|Orphaned Child
What aggressive encounter affected Scott while he was driving in No Place Like Home?|Road rage|A carjacking|An armed robbery|A hit and run|Medium|No Place Like Home|Episode 20|Scott Zinenko|Road Rage|Anger Management|Ambulance Officer|Road Incident
Why did police question Terri in Presumption of Guilt?|She was among the last to see Rose alive|She had stolen hospital drugs|She witnessed a bank robbery|She had forged a medical certificate|Medium|Presumption Of Guilt|Episode 21|Terri Sullivan|Rose Stevens|Police Questions|Last Visitor|Murder Investigation
Which two people supplied evidence that made Terri a person of interest in Rose's death?|Vincent and Victoria|Luke and Paula|Von and Nelson|Scott and Alex|Hard|Presumption Of Guilt|Episode 21|Vincent Hughes|Victoria|Terri Sullivan|Rose Stevens|Police Evidence
What charge was brought against Terri in A Rock and a Hard Place?|Murder|Medical fraud|Assaulting a patient|Arson|Easy|A Rock And A Hard Place|Episode 22|Terri Sullivan|Rose Stevens|Murder Charge|Police Custody|Criminal Proceedings
Which colleague tried to raise Terri's bail money in A Rock and a Hard Place?|Von Ryan|Regina Butcher|Jared Levine|Charlotte Beaumont|Medium|A Rock And A Hard Place|Episode 22|Von Ryan|Terri Sullivan|Bail Money|Loyal Colleague|Police Station
What vocation was the terminal patient considering leaving in A Rock and a Hard Place?|Religious sisterhood|Professional nursing|Law practice|University lecturing|Hard|A Rock And A Hard Place|Episode 22|Dying Nun|Religious Order|Von Ryan|End Of Life Choice|Patient Independence
Which problem in Leanne's behaviour alarmed Jared in The Things We Do for Love?|Alcohol dependence|Compulsive gambling|Drug dealing|Shoplifting|Medium|The Things We Do For Love|Episode 23|Leanne Curtis|Jared Levine|Alcoholism|Hospital Counselling|Workplace Concerns
What service background did a psychologically distressed patient have in The Things We Do for Love?|The Navy|The Air Force|The Fire Brigade|The Police|Medium|The Things We Do For Love|Episode 23|Former Navy Patient|Vincent Hughes|Psychological Trauma|Military Responsibility|Patient Support
Which disorder did Charlotte identify in a patient's daughter in The Things We Do for Love?|An eating disorder|A sleep disorder|A hearing disorder|A blood-clotting disorder|Medium|The Things We Do For Love|Episode 23|Charlotte Beaumont|Patient Daughter|Eating Disorder|Family Health|Medical Detection
Which colleague began to be suspected in the Rose Stevens investigation during Suspicious Minds?|Vincent Hughes|Nelson Curtis|Ben Markham|Jared Levine|Medium|Suspicious Minds|Episode 24|Vincent Hughes|Rose Stevens|Murder Investigation|Charlotte Beaumont|Police Suspicion
Which doctor received a career promotion while his date with Paula went badly in Suspicious Minds?|Luke Forlano|Malcolm Pussle|Vincent Hughes|Mitch Stevens|Medium|Suspicious Minds|Episode 24|Luke Forlano|Paula Morgan|Professional Promotion|Romantic Date|Career Progress
In which episode did the investigation into Rose Stevens's death reach its conclusion?|Now You See Me|Presumption of Guilt|Question of Guilt|No Place Like Home|Easy|Now You See Me|Episode 25|Rose Stevens|Murder Investigation|Case Resolution|Terri Sullivan|Episode Title
What disability did a young man hope surgery would reverse in Now You See Me?|Blindness|Deafness|Paralysis|Loss of speech|Medium|Now You See Me|Episode 25|Blind Young Man|Sight Restoring Operation|Surgical Anxiety|Patient Hope|Vision
Who was helped by Luke after Paula's son Max was hit by a car in A Second Look?|Paula Morgan|Terri Sullivan|Regina Butcher|Frances Regan|Medium|A Second Look|Episode 26|Paula Morgan|Luke Forlano|Max Morgan|Road Accident|Reconciliation
Which doctor's professional reputation suffered after she appeared intoxicated in Emergency in A Second Look?|Charlotte Beaumont's|Terri Sullivan's|Von Ryan's|Paula Morgan's|Medium|A Second Look|Episode 26|Charlotte Beaumont|Apparent Intoxication|Emergency Department|Professional Reputation|Drugged Drink
Who did Von realise Nelson was secretly romantically interested in during A Second Look?|Terri Sullivan|Regina Butcher|Charlotte Beaumont|Frances Regan|Medium|A Second Look|Episode 26|Von Ryan|Nelson Curtis|Terri Sullivan|Secret Affection|Colleague Relationship
Whose possible negligence was suggested by an autopsy in Some You Win?|Von Ryan's|Paula Morgan's|Nelson Curtis's|Terri Sullivan's|Medium|Some You Win|Episode 27|Von Ryan|Patient Autopsy|Professional Negligence|Patient Death|Civil Case
Which former partner did Charlotte tell she could not rekindle their relationship in Some You Win?|Vincent Hughes|Luke Forlano|Mitch Stevens|Malcolm Pussle|Medium|Some You Win|Episode 27|Charlotte Beaumont|Vincent Hughes|Former Marriage|Romantic Rejection|Personal Boundaries
Where did a supposedly dead patient suddenly revive in Eyes Wide Open?|The morgue|The hospital chapel|An ambulance|A radiology suite|Medium|Eyes Wide Open|Episode 28|Matt Horner|Morgue|Unexpected Revival|Patient Ellen|Death Mistake
What condition explained why patient Ellen appeared dead in Eyes Wide Open?|Hypothermia|Diabetic shock|Carbon monoxide poisoning|A stroke|Medium|Eyes Wide Open|Episode 28|Ellen|Hypothermia|Charlotte Beaumont|Apparent Death|Clinical Reassessment
What celebration went badly for Regina after Morris ended their relationship in Eyes Wide Open?|Her birthday|Their wedding day|Her graduation|Christmas Eve|Medium|Eyes Wide Open|Episode 28|Regina Butcher|Morris|Birthday|Relationship Breakup|Health Scare
Which transplant recipient was central to Von's clash with an interfering volunteer in Friends in Need?|A lung transplant patient|A heart transplant patient|A kidney transplant patient|A liver transplant patient|Medium|Friends In Need|Episode 29|Von Ryan|Hospital Volunteer|Lung Transplant|Interfering Care|Terri Sullivan
Which sport did Scott and Alex begin trying in Friends in Need?|Golf|Cricket|Tennis|Rugby league|Medium|Friends In Need|Episode 29|Scott Zinenko|Alex Kearns|Golf|Ambulance Partners|Sporting Hobby
Where did a large bomb explode in Too Close for Comfort?|The hospital car park|The medical library|An ambulance garage|The maternity theatre|Easy|Too Close For Comfort|Episode 30|Hospital Car Park|Bomb Explosion|Disgruntled Patient|Mass Casualties|2003 Attack
Which doctor worked with Terri in treating a severely injured bombing victim in Too Close for Comfort?|Vincent Hughes|Malcolm Pussle|Luke Forlano|Mitch Stevens|Medium|Too Close For Comfort|Episode 30|Vincent Hughes|Terri Sullivan|Blast Injury|Professional Cooperation|Emergency Treatment
Which medical doctor faced suspicion after the husband of her former lover died in Complicity?|Charlotte Beaumont|Paula Morgan|Terri Sullivan|Frances Regan|Medium|Complicity|Episode 31|Charlotte Beaumont|Liz|Husband Death|Professional Suspicion|Death Certificate
What illness had caused the death of Liz's husband in Complicity?|Pneumonia|Leukaemia|Meningitis|Tuberculosis|Medium|Complicity|Episode 31|Liz|Husband|Pneumonia|Charlotte Beaumont|Autopsy Dispute
What examination did Liz beg Charlotte not to order after her husband's death in Complicity?|An autopsy|A genetic test|An MRI scan|A psychiatric assessment|Medium|Complicity|Episode 31|Liz|Charlotte Beaumont|Autopsy Request|Death Investigation|Medical Ethics
Who discovered an abandoned baby and was suspected of being its father in The Devil to Pay?|Matt Horner|Sterling McCormack|Jared Levine|Alex Kearns|Medium|The Devil To Pay|Episode 32|Matt Horner|Abandoned Baby|Paternity Accusation|Kirsten|Ward Orderly
What pregnancy news complicated Matt's relationship with Kirsten in The Devil to Pay?|She was expecting a child|She was expecting triplets|She had already given birth|She had agreed to a surrogate pregnancy|Medium|The Devil To Pay|Episode 32|Kirsten|Matt Horner|Unexpected Pregnancy|Relationship Dilemma|Baby Decision
What infection threatened a professional athlete and Ward 17's administration in The Devil to Pay?|Drug-resistant staph|Chickenpox|Rubella|Seasonal influenza|Medium|The Devil To Pay|Episode 32|Professional Athlete|Resistant Staphylococcus|Hospital Infection|Terri Sullivan|Outbreak Management
Which doctor made a tragic life-or-death choice in Wrong Call?|Luke Forlano|Vincent Hughes|Charlotte Beaumont|Malcolm Pussle|Medium|Wrong Call|Episode 33|Luke Forlano|Clinical Decision|Family Tragedy|Medical Responsibility|Lasting Consequences
Which returning patient caused disagreement between Nelson and Terri in Wrong Call?|Charlie Ellis|Ellen|Tina Blake|Alex Richards|Hard|Wrong Call|Episode 33|Charlie Ellis|Nelson Curtis|Terri Sullivan|Returning Patient|Care Dispute
Which nurse nearly caused a fatal mistake while trying to help a patient in Wrong Call?|Regina Butcher|Von Ryan|Paula Morgan|Frances Regan|Medium|Wrong Call|Episode 33|Regina Butcher|Near Fatal Mistake|Patient Assistance|Ward Clerk|Safety Incident
Which family donation was withdrawn at the last moment in To Forgive, Divine?|Bone marrow for a sister|A kidney for a brother|Liver tissue for a father|Blood for a newborn|Medium|To Forgive Divine|Episode 34|Bone Marrow Donor|Sisters|Consent Withdrawal|Terri Sullivan|Charlotte Beaumont
What organ did Luke donate to his father Sal in To Forgive, Divine?|A kidney|Part of his liver|A lung|Bone marrow|Easy|To Forgive Divine|Episode 34|Luke Forlano|Sal Forlano|Kidney Donation|Father And Son|Living Organ Donor
What animal bit ambulance officer Alex in To Forgive, Divine?|A venomous snake|A funnel-web spider|A feral dog|A scorpion|Medium|To Forgive Divine|Episode 34|Alex Kearns|Snakebite|Paramedic Emergency|Venomous Animal|Ambulance Officer
Who brought a civil negligence case against Von in Question of Guilt?|Madeline Fleming|Liz|Victoria Stevens|Kirsten|Hard|Question Of Guilt|Episode 35|Madeline Fleming|Von Ryan|Civil Court Case|Mother Death|Negligence Allegation
What unexpected celebration did Matt plan for Kirsten in Question of Guilt?|A surprise wedding|A surprise birthday dinner|A graduation party|An engagement picnic|Medium|Question Of Guilt|Episode 35|Matt Horner|Kirsten|Surprise Wedding|Marriage Plans|Celebration Disaster
What problem left Ward 17 under enormous pressure in Safety Net?|A shortage of available beds|A prolonged power outage|A broken hospital lift|A staff food-poisoning outbreak|Medium|Safety Net|Episode 36|Ward 17|Bed Shortage|Emergency Overcrowding|Discharge Pressure|Hospital Administration
Which type of patient's discharge caused Terri and Nelson to clash in Safety Net?|A homeless patient's|A professional athlete's|A retired surgeon's|A newborn baby's|Medium|Safety Net|Episode 36|Terri Sullivan|Nelson Curtis|Homeless Patient|Discharge Dispute|Social Care
Which temporary ambulance partner caught Sterlo's eye in Look Before You Leap?|Harri Stapleton|Rebecca Green|Frances Regan|Jodi Horner|Medium|Look Before You Leap|Episode 37|Harri Stapleton|Sterlo|Alex Kearns|Temporary Paramedic|Romantic Interest
How did Troy Davies's girlfriend lose her memory in Look Before You Leap?|After a fall from a cliff|After a train collision|After a swimming pool accident|After being struck by lightning|Medium|Look Before You Leap|Episode 37|Troy Davies|Girlfriend Amnesia|Cliff Fall|Alex Kearns|Harri Stapleton
Which injured patient brought Vincent into conflict with senior surgeon Mr Madsen in Look Before You Leap?|Lauren Wellham|Sarah Adams|Jenny Garfield|Ellen|Hard|Look Before You Leap|Episode 37|Lauren Wellham|Vincent Hughes|Dr Madsen|Car Bomb Victim|Treatment Dispute
What controlled medication did a violent patient steal from Alex in Doctor of Choice?|Morphine|Insulin|Heparin|Antibiotics|Medium|Doctor Of Choice|Episode 38|Alex Kearns|Harri Stapleton|Stolen Morphine|Ambulance Assault|Drug Theft
Which teenage patient received support from Charlotte after her parents rejected her in Doctor of Choice?|Sasha|Kirsten|Ellen|Carmen|Medium|Doctor Of Choice|Episode 38|Charlotte Beaumont|Sasha|Family Rejection|Teenage Patient|Patient Advocacy
Who did Charlotte find bloodied and distressed at home in Harm's Way?|Sasha|Harri Stapleton|Kirsten|Leanne Curtis|Medium|Harms Way|Episode 39|Charlotte Beaumont|Sasha|Assault Allegation|Emergency Admission|Home Crisis
Which family member's presence prompted Paula to reconsider a personal decision in Harm's Way?|Max's father Michael|Her brother Scott|Her cousin Paul|Her uncle Sal|Medium|Harms Way|Episode 39|Paula Morgan|Michael Plummer|Max Morgan|Family Decision|Patient Transport
Which pair had to work out how to live and work together in Other People's Business?|Von and Nelson|Terri and Vincent|Scott and Alex|Paula and Luke|Medium|Other Peoples Business|Episode 40|Von Ryan|Nelson Curtis|Shared Home|Workplace Boundaries|Nursing Colleagues
Which treatment did a patient's son object to as experimental in Other People's Business?|Chemotherapy|Kidney dialysis|Physiotherapy|An emergency appendectomy|Medium|Other Peoples Business|Episode 40|Charlotte Beaumont|Patient Son|Chemotherapy|Guinea Pig Concern|Cancer Treatment
Which hospital employee with a head wound raised Charlotte's suspicions in The Right Thing?|Cleaner Greg Roberts|Orderly Matt Horner|Nurse Sterling McCormack|Doctor Vincent Hughes|Medium|The Right Thing|Episode 41|Greg Roberts|Hospital Cleaner|Head Injury|Charlotte Beaumont|Robbery Suspicion
What crime was linked to the missing driver whom Charlotte suspected might be Greg in The Right Thing?|An armed robbery|A house burglary|A bank fraud|A car theft|Medium|The Right Thing|Episode 41|Greg Roberts|Getaway Driver|Armed Robbery|Charlotte Beaumont|Criminal Investigation
What painkiller theft provoked cleaner Greg Roberts to attack a patient in Loser Pays?|Pethidine|Paracetamol|Ibuprofen|Codeine|Medium|Loser Pays|Episode 42|Greg Roberts|Patient Assault|Pethidine Theft|Hospital Security|Ward Crime
Which hospital official suffered heat illness and saw the effects of his own budget cuts in Loser Pays?|Alan Marden|Colin Blackburn|Joan Marden|Malcolm Pussle|Hard|Loser Pays|Episode 42|Alan Marden|Financial Controller|Hyperthermia|Hospital Budget|Patient Admission
What did Luke ask Paula to do in Loser Pays?|Marry him|Move to London|Leave Ward 17|Adopt a child|Easy|Loser Pays|Episode 42|Luke Forlano|Paula Morgan|Marriage Proposal|Romantic Commitment|Relationship Milestone
What legal complication did Paula reveal after Luke proposed in Loser Pays?|She had not divorced Max's father|She was already married to Luke|She had been declared bankrupt|She was awaiting a custody hearing|Medium|Loser Pays|Episode 42|Paula Morgan|Michael Plummer|Max Morgan|Undissolved Marriage|Divorce Delay
Who was stalked through the hospital by an armed gunman in Never Forget?|Charlotte Beaumont|Terri Sullivan|Von Ryan|Regina Butcher|Easy|Never Forget|Episode 43|Charlotte Beaumont|Hospital Gunman|Shooting Spree|Finale Danger|Armed Stalker
Which hospital celebration ended tragically for Regina and Morris in Never Forget?|Their anniversary|Their engagement party|A retirement ceremony|A birthday dinner|Medium|Never Forget|Episode 43|Regina Butcher|Morris Florist|Anniversary|Tragic Event|Season Finale
What rule did Terri break in the Season 6 finale to save her superior's life?|Hospital rules|Immigration rules|Court reporting rules|University examination rules|Hard|Never Forget|Episode 43|Terri Sullivan|Supervisor Emergency|Clinical Ethics|Rule Breaking|Life Saving Choice`;


// Series 6 research audit: episode, cast, production and 2004 Logie nominations.
// Preserve all original question IDs and answer data; new questions use unused IDs.
const AUDIT_ORIGINAL_COUNT = 116;
const AUDIT_FIRST_ID = 42209;
const auditFacts = `Which All Saints actress was nominated for the Gold Logie at the 2004 TV Week awards?|Georgie Parker|Libby Tanner|Judith McGrath|Tammy MacIntosh|Medium|2004 Logies|Georgie Parker|Gold Logie nomination|Terri Sullivan|popular personality|Australian awards|acting recognition
Which All Saints actor received a 2004 Logie nomination for Most Popular Actor?|Erik Thomson|Conrad Coleby|Christopher Gabardi|Martin Lynes|Medium|2004 Logies|Erik Thomson|Most Popular Actor nomination|Mitch Stevens|Australian awards|acting recognition|cast honour
For which prestigious industry-voted drama prize was All Saints nominated at the 2004 Logies?|Most Outstanding Drama Series|Most Outstanding Documentary Series|Most Outstanding Comedy Program|Most Outstanding News Coverage|Medium|2004 Logies|Most Outstanding Drama Series|award nomination|Australian television|industry vote|drama recognition|not a win
In which audience-voted drama category did All Saints receive a nomination at the 2004 Logies?|Most Popular Australian Drama Series|Most Popular Overseas Drama Series|Most Popular Comedy Series|Most Popular Children's Series|Medium|2004 Logies|Most Popular Australian Drama Series|award nomination|public vote|Seven Network|Australian television|not a win
Who directed the All Saints Series 6 premiere Trust?|Scott Feeney|Peter Fisk|Catherine Roden|Geoffrey Nottage|Medium|Scott Feeney|Trust|2003 premiere|episode director|production credits|season six|behind the scenes
Who wrote the All Saints Series 6 finale Never Forget?|David Hannam|Sarah Walker|John Banas|Denise Morgan|Medium|David Hannam|Never Forget|2003 finale|episode writer|screenplay credit|production history|season six
Who directed the All Saints Series 6 finale Never Forget?|Peter Fisk|Scott Feeney|Aarne Neeme|Jean Pierre Mignon|Medium|Peter Fisk|Never Forget|2003 finale|episode director|production credit|season six|behind the scenes
Which actor portrayed intern Angus Drummond in All Saints Series 6?|Nick Flint|Fletcher Humphrys|Henry Nixon|Christopher Gabardi|Medium|Nick Flint|Angus Drummond|2003 cast|medical intern|new character|actor identification|Season Six
Which All Saints actor played hospital cleaner Greg Roberts during Series 6?|Brett Stiller|John Noble|Josh Quong Tart|Ben Tari|Medium|Brett Stiller|Greg Roberts|2003 cast|hospital cleaner|late season|actor identification|violent story
Who portrayed ambulance officer Harri Stapleton in All Saints Series 6?|Jessica Gower|Natasha Beaumont|Rachel McNamara|Jenni Baird|Medium|Jessica Gower|Harri Stapleton|2003 cast|ambulance officer|temporary partner|actor identification|new romance
Which All Saints guest actor portrayed Luke Forlano's father Sal in Series 6?|Helmut Bakaitis|John Noble|Patrick Thompson|Robert Coleby|Medium|Helmut Bakaitis|Sal Forlano|Luke Forlano|2003 cast|father character|kidney donation|guest actor
Which actress played Terri Sullivan's troubled neighbour Carmen Shaw in All Saints Series 6?|Angela Punch McGregor|Kate Sheil|Penne Hackforth Jones|Joy Smithers|Hard|Angela Punch McGregor|Carmen Shaw|Terri Sullivan|2003 guest cast|agoraphobia|neighbour storyline|actor
Which actress portrayed troubled teenager Sasha Netterfield in All Saints Series 6?|Victoria Thaine|Jessica Gower|Emma Coppin|Rachael Coopes|Medium|Victoria Thaine|Sasha Netterfield|Charlotte Beaumont|2003 guest cast|teenage patient|actor identification|hospital drama
In All Saints episode Trust which rare condition was diagnosed in a patient who caused tension between Mitch and the new intern?|Amyloidosis|Motor neurone disease|Multiple sclerosis|Lupus|Hard|Trust|episode one|Mitch Stevens|Angus Drummond|amyloidosis|diagnostic disagreement|rare condition
In All Saints episode Destiny's Child what serious finding led Paula Morgan to end her pregnancy?|Severe foetal abnormality|An ectopic pregnancy|A multiple pregnancy|A positive diabetes test|Medium|Destinys Child|Paula Morgan|ultrasound|foetal abnormality|termination|pregnancy decision|episode three
In All Saints episode All Our Tomorrows what prognosis did Mitch receive after his brain biopsy?|His tumour was deemed inoperable|The tumour had vanished|His symptoms were only caused by stress|He had no need for further treatment|Medium|All Our Tomorrows|Mitch Stevens|brain biopsy|inoperable tumour|terminal prognosis|Terri Sullivan|episode five
In All Saints episode The Last Supper which two colleagues married at a surprise ceremony?|Terri Sullivan and Mitch Stevens|Bron Craig and Ben Markham|Luke Forlano and Paula Morgan|Regina Butcher and Morris|Medium|The Last Supper|Terri Sullivan|Mitch Stevens|surprise wedding|celebrant|Von Ryan|episode eight
In All Saints episode Only the Good Die Young what event ultimately caused Mitch Stevens's death following brain surgery?|Cardiac arrest|A hospital fire|A fall from a staircase|A transfusion reaction|Medium|Only the Good Die Young|Mitch Stevens|brain surgery|cardiac arrest|tragic death|Terri Sullivan|episode nine
In All Saints episode Vale how was new nurse Sterling McCormack related to hospital executive Colin Blackburn?|He was Colin's nephew|He was Colin's brother|He was Colin's son|He was Colin's cousin|Medium|Vale|Sterling McCormack|Colin Blackburn|nephew|hidden family connection|hospital executive|episode ten
In All Saints episode Vale which ambulance officer was betrayed when Rebecca Green had an affair with Jared Levine?|Scott Zinenko|Ben Markham|Alex Kearns|Harri Stapleton|Medium|Vale|Rebecca Green|Jared Levine|Scott Zinenko|infidelity|funeral wake|episode ten
In All Saints episode The Art of Flowers what housing crisis struck Terri Sullivan while she grieved for Mitch?|Her landlord evicted her|Her flat was destroyed by fire|Her rent doubled overnight|Her house was sold at auction|Medium|The Art of Flowers|Terri Sullivan|landlord|eviction|grief|Mitch Stevens|episode eleven
In All Saints episode Seeking Asylum which ward clerk was sexually assaulted and left traumatised?|Regina Butcher|Frances Regan|Paula Morgan|Leanne Curtis|Medium|Seeking Asylum|Regina Butcher|sexual assault|ward clerk|hospital employee|trauma|episode fifteen
In All Saints episode In Control how did Rebecca Green interfere with evidence from her father's crash?|She took and discarded his blood alcohol sample|She altered a police statement|She swapped ambulance patient names|She erased a hospital security video|Medium|In Control|Rebecca Green|Lindsay Green|blood alcohol sample|concealing evidence|family loyalty|episode sixteen
In All Saints episode A Second Look why did Charlotte Beaumont appear intoxicated during her hospital shift?|Someone had put party drugs into her drink|She had drunk alcohol before work|She had taken an incorrect prescription|She was suffering from food poisoning|Medium|A Second Look|Charlotte Beaumont|spiked drink|party drugs|professional reputation|hospital staff|episode twenty six
In All Saints episode Too Close for Comfort who was responsible for the explosion in the hospital car park?|A disgruntled patient|A passing taxi driver|An escaped prisoner|A hospital employee on strike|Medium|Too Close for Comfort|disgruntled patient|car park bombing|hospital threat|Ward 17|explosive device|episode thirty
In All Saints episode Harm's Way which troubled young woman had been taken into Charlotte Beaumont's home?|Sasha Netterfield|Lucy Stevens|Carmen Shaw|Kirsten Sutton|Medium|Harms Way|Charlotte Beaumont|Sasha Netterfield|teenage patient|protective home|assault aftermath|episode thirty nine
In All Saints episode Doctor of Choice which two ambulance officers were romantically involved while working together?|Alex Kearns and Harri Stapleton|Scott Zinenko and Rebecca Green|Ben Markham and Bron Craig|Nelson Curtis and Paula Morgan|Medium|Doctor of Choice|Alex Kearns|Harri Stapleton|ambulance romance|temporary partners|episode thirty eight|relationship development`;

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
    throw new Error(`Invalid difficulty or individual tags in ${id}`);
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
  !questions.length || questions[0].id !== 'tv_24502' ||
  new Set(questions.map(q => q.id)).size !== questions.length ||
  new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length ||
  questions.some(q =>
    q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
    q.tags.length < 14 || !q.tags.includes('Programme: All Saints') ||
    q.dailyEligible !== true
  )
) throw new Error('Pack 425 exported question validation failed');

module.exports = questions;