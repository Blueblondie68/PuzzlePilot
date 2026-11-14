// PuzzlePilot - The Bigggggg Quiz - Pack 421
// All Saints (Australia): Season 2 (1999), 43 episodes.
// Follows Pack 420. First ID: tv_24066.
// WordPad-ready CommonJS. All Saints remains ongoing in the master spreadsheet.
// Each row: question | correct | wrong 1 | wrong 2 | wrong 3 | difficulty | seven individual tags.
// Episode storylines cross-checked with the 1999 episode guide; keep years in tags.
'use strict';

const FIRST_ID = 24066;
const programme = 'All Saints';
const commonTags = [
  'Television', 'Australian Television', 'Australian Medical Drama',
  'All Saints', 'Programme: All Saints', 'Seven Network',
  'All Saints Western General Hospital', 'Ward 17', 'Season 2', '1999'
];

const facts = `How many episodes are in the second season of All Saints?|43|39|41|46|Medium|Season Two|43 Episodes|Episode Count|1999 Broadcast|Series Structure|Television History|Season Length
In which month did the second season of All Saints begin on Australian television?|February|January|March|April|Easy|Season Two Premiere|9 February 1999|Australian Broadcast|Seven Network|Opening Episodes|Series Timeline|Television Scheduling
What is the title of the two-part opening story of All Saints Season 2?|Truth and Consequence|The Price of Love|Body and Soul|Valley of the Shadow|Medium|Season Premiere|Episodes One And Two|Sophie Williams|Peter Morrison|1999 Opening|Two Part Story|Episode Title
Which actor joined All Saints as the outspoken doctor Mitch Stevens in Season 2?|Erik Thomson|Martin Lynes|Andrew McKaige|Jeremy Cumpston|Easy|Erik Thomson|Mitch Stevens|New Doctor|Actor Identification|1999 Cast|Original Character Introduction|Terri Sullivan
What was Mitch Stevens's earlier connection to Terri Sullivan?|He was a former romantic partner|He was her younger brother|He had been her patient|He was her school headteacher|Medium|Mitch Stevens|Terri Sullivan|Past Relationship|Romantic History|Former Colleagues|1999 Reunion|If These Walls Could Talk
Which actress portrayed Terri's mother Eileen Sullivan during Season 2?|Melissa Jaffer|Judith McGrath|Celia Ireland|Joy Smithers|Hard|Melissa Jaffer|Eileen Sullivan|Terri Sullivan|Domestic Abuse Storyline|Ryan Sullivan|Actress Identification|1999 Guest Cast
Which actress played hospital nursing administrator Joan Marden in the 1999 season?|Kim Hilas|Celia Ireland|Joy Smithers|Melissa Jaffer|Hard|Kim Hilas|Joan Marden|Nursing Administrator|Assistant Director Of Nursing|Actress Identification|Promotion Storyline|1999 Guest Cast
Which actress played new ward clerk Regina Butcher in Season 2?|Celia Ireland|Joy Smithers|Ling-Hsueh Tang|Kirrily White|Hard|Celia Ireland|Regina Butcher|Ward Clerk|Actress Casting|Hospital Administration|1999 Recurring Cast|Ward Staff
Which actor played gay ward clerk Tony Hurst in Season 2?|Jake Blundell|Ben Tari|Brian Vriends|Terry Serio|Hard|Jake Blundell|Tony Hurst|Ward Clerk|Actor Casting|LGBT Character|New Arrival|1999 Recurring Role
Which actress portrayed Juliette McAllister, who dated Mitch Stevens in Season 2?|Alexandra Fowler|Joy Smithers|Melissa Jaffer|Ling-Hsueh Tang|Hard|Alexandra Fowler|Juliette McAllister|Mitch Stevens|Romantic Rival|Actress Identification|1999 Guest Cast|Ward Romance
Which actress played hospital staff member Rose Carlton during Season 2?|Joy Smithers|Celia Ireland|Sam Healy|Elizabeth Maywald|Hard|Joy Smithers|Rose Carlton|1999 Recurring Character|Actress Identification|Mitch Stevens|Hospital Colleague|Romantic Subplot
Which actress played young doctor Kylie Preece in Season 2?|Ling-Hsueh Tang|Kirrily White|Libby Tanner|Georgie Parker|Hard|Ling-Hsueh Tang|Kylie Preece|Junior Doctor|Actress Identification|Stephanie Markham|Professional Disagreement|1999 Cast
Who played Terri's father Ryan Sullivan in the 1999 episodes?|Martin Vaughan|Bill Hunter|Peter Lamb|Michael Caton|Hard|Martin Vaughan|Ryan Sullivan|Terri Father|Actor Identification|Family Violence|Cancer Storyline|1999 Guest Cast
Which character's father-in-law tried to take custody of her two sons in the Season 2 opener?|Sophie Williams|Stephanie Markham|Bron Craig|Samantha O'Hara|Medium|Truth And Consequence Part One|Episode 1|Sophie Williams|Child Custody|Family Dispute|Father In Law|Season Premiere
What road accident brought Sophie and her children back into hospital in the Season 2 opener?|A head-on car collision|A motorbike crash|A bus rollover|A train derailment|Medium|Truth And Consequence Part Two|Episode 2|Sophie Williams|Children In Car|Impaired Driving|Ben Markham|Emergency Response
Who was caught in the hospital siege after Sophie confronted her father-in-law?|Terri and Peter|Bron and Ben|Connor and Jared|Von and Jaz|Medium|Truth And Consequence Part Two|Episode 2|Terri Sullivan|Peter Morrison|Sophie Williams|Hostage Crisis|Hospital Siege
Which regular doctor was seriously affected by the dramatic events in the two-part premiere?|Peter Morrison|Luke Forlano|Mitch Stevens|Samantha O'Hara|Medium|Truth And Consequence Part Two|Episode 2|Peter Morrison|Siege Aftermath|Disability|Major Character Arc|Season Opening
In Aftershocks, what problem kept Ben Markham on desk duties?|Post-traumatic stress|A broken ankle|A suspended driving licence|A hearing injury|Medium|Aftershocks|Episode 3|Ben Markham|Post Traumatic Stress|Desk Duty|Rescue Worker|Trauma Recovery
Which alternative practitioner attracted Connor's attention while he had a bad back in Aftershocks?|Lily the acupuncturist|Rose the pharmacist|Kylie the radiographer|Regina the clerk|Medium|Aftershocks|Episode 3|Connor Costello|Lily|Acupuncture|Back Pain|Romance
Who was named Employee of the Month in Aftershocks?|Von Ryan|Terri Sullivan|Jared Levine|Bron Craig|Medium|Aftershocks|Episode 3|Von Ryan|Employee Of The Month|Hospital Recognition|Nursing Colleagues|Workplace Award
Which public official became a Ward 17 patient in The Longest Day?|The Health Minister|The Prime Minister|The Police Commissioner|The State Governor|Easy|The Longest Day|Episode 4|Health Minister|Overcrowding|Public Hospital System|Staffing Problems|Ward Pressure
Where did a patient have to recover after surgery because of the bed shortage in The Longest Day?|On a corridor trolley|In an ambulance bay|In a hospital chapel|In a staff canteen|Hard|The Longest Day|Episode 4|Corridor Trolley|Lack Of Beds|Early Discharge|Stephanie Markham|Hospital Conditions
In which episode did Mitch Stevens return to the hospital and meet Terri again?|If These Walls Could Talk|Truth and Consequence|Bloodlines|Judgement Day|Medium|If These Walls Could Talk|Episode 5|Mitch Stevens|Terri Sullivan|Old Flame|Return To Hospital|1999 Reunion
What personal decision did Jaz face in If These Walls Could Talk?|What to do about her pregnancy|Whether to become a paramedic|Whether to move into Connor's house|Whether to accept a promotion|Medium|If These Walls Could Talk|Episode 5|Jaz Hillerman|Pregnancy Decision|Stephanie Markham|Terri Sullivan|Personal Dilemma
What type of accident challenged Bron and Ben in Getting to Know You?|A tractor accident|A helicopter crash|A factory explosion|A swimming pool accident|Medium|Getting To Know You|Episode 6|Bron Craig|Ben Markham|Tractor Injury|Young Mother|Paramedic Return
Which doctor's unusual approach to patients irritated Terri's team in Getting to Know You?|Mitch Stevens|Samantha O'Hara|Peter Morrison|Harry Williams|Medium|Getting To Know You|Episode 6|Mitch Stevens|Unorthodox Treatment|Nursing Team|Terri Sullivan|Hospital Conflict
In Dependence Day, a street kid took which doctor hostage?|Mitch Stevens|Luke Forlano|Peter Morrison|Samantha O'Hara|Medium|Dependence Day|Episode 7|Mitch Stevens|Street Kid|Hostage Incident|Drug Dependence|Ward Security
Which emergency tested Bron and Ben during Dependence Day?|A premature childbirth|A cardiac arrest at a stadium|An industrial gas leak|A drowning at sea|Medium|Dependence Day|Episode 7|Bron Craig|Ben Markham|Premature Birth|Paramedic Skills|Neonatal Emergency
Which religious group was central to the blood-treatment dilemma in Bloodlines?|Jehovah's Witnesses|Quakers|Seventh-day Adventists|Buddhists|Easy|Bloodlines|Episode 8|Jehovah Witness Patient|Blood Transfusion|Treatment Refusal|Religious Beliefs|Medical Ethics
Which two staff members disagreed over the Jehovah's Witness patient's care in Bloodlines?|Terri and Luke|Connor and Jared|Bron and Von|Steph and Ben|Medium|Bloodlines|Episode 8|Terri Sullivan|Luke Forlano|Patient Autonomy|Transfusion Dispute|Clinical Conflict
In More Things in Heaven and Earth, a patient claimed to have spoken to whose ghost?|Sophie Williams|Jenny Morrison|Dr Harry Williams|Bron's father|Medium|More Things In Heaven And Earth|Episode 9|Sophie Williams|Psychic Patient|Ghost Claim|Ward Unrest|Media Coverage
What two callings came into conflict for Terri when counselling a young man in More Things in Heaven and Earth?|Nursing and religious life|Surgery and paramedic work|Teaching and policing|Administration and journalism|Medium|More Things In Heaven And Earth|Episode 9|Terri Sullivan|Religious Vocation|Young Gay Patient|Duty Of Care|Ethical Dilemma
Which former colleague contemplated drastic action as he struggled with his altered life in Pushed to the Limit?|Peter Morrison|Mitch Stevens|Luke Forlano|Harry Williams|Medium|Pushed To The Limit|Episode 10|Peter Morrison|Disability|Emotional Crisis|Life Changes|Mental Health
Whose relationship became public, surprising one of the partners, in Pushed to the Limit?|Jared and Samantha|Ben and Bron|Terri and Mitch|Connor and Lily|Medium|Pushed To The Limit|Episode 10|Jared Levine|Samantha O'Hara|Romantic Disclosure|Ward Gossip|Colleagues
Which man's suicide attempt forced Jaz to confront a painful past in Friends and Lovers?|Danny Bucknell|Greg Costello|Neil Phillips|Tony Hurst|Hard|Friends And Lovers|Episode 11|Danny Bucknell|Jaz Hillerman|Sexual Assault Aftermath|Suicide Attempt|Resignation
What did Jaz Hillerman decide to do on leaving Ward 17?|Return to education|Join the ambulance service|Become a hospital porter|Open a private clinic|Medium|Friends And Lovers|Episode 11|Jaz Hillerman|Nursing Resignation|Returning To School|Character Exit|Career Change
Which doctor announced his resignation from All Saints in Judgement Day?|Peter Morrison|Luke Forlano|Mitch Stevens|Samantha O'Hara|Easy|Judgement Day|Episode 12|Peter Morrison|Hospital Resignation|Staff Farewell|Disability Aftermath|Character Departure
Where had Connor's friend Stewie been shot before his admission in Judgement Day?|During a robbery at Cougars|At a police training range|During a hunting trip|At a railway station|Hard|Judgement Day|Episode 12|Connor Costello|Stewie|Security Guard|Cougars Robbery|Gunshot Wound
In Roll the Dice, a dispute between Mitch and Luke involved a girl with what condition?|A brain aneurysm|A spinal fracture|Leukaemia|A kidney infection|Medium|Roll The Dice|Episode 13|Mitch Stevens|Luke Forlano|Brain Aneurysm|Professional Boundaries|Treatment Dispute
What did Ben consider using to become a father, alarming Steph in Roll the Dice?|A sperm bank|An adoption agency|An international surrogacy service|A fertility trial overseas|Medium|Roll The Dice|Episode 13|Ben Markham|Stephanie Markham|Sperm Donation|Fatherhood Wish|Marriage Tension
Who was unexpectedly admitted to Jared's ward in My Mother Myself?|Samantha O'Hara's mother|Connor Costello's father|Bron Craig's brother|Mitch Stevens's daughter|Medium|My Mother Myself|Episode 14|Jared Levine|Samantha O'Hara|Mother Hospitalised|Family Secrets|Hip Replacement
What operation brought Samantha's mother onto Ward 17 in My Mother Myself?|A hip replacement|A liver transplant|A heart bypass|A mastectomy|Hard|My Mother Myself|Episode 14|Samantha O'Hara|Mother|Hip Surgery|Jared Levine|Family Strain
In Get a Life, which patient choice triggered an argument between Mitch and Terri?|Refusing cancer treatment|Refusing a blood transfusion|Requesting experimental surgery|Refusing a pacemaker|Medium|Get A Life|Episode 15|Mitch Stevens|Terri Sullivan|Dave Armstrong|Cancer Care|Patient Choice
What position was Terri considered for in Get a Life, raising Steph's hopes for promotion?|Assistant Director of Nursing|Head of Ambulance Training|Director of Emergency Surgery|Chief Pharmacist|Medium|Get A Life|Episode 15|Terri Sullivan|Joan Marden|Stephanie Markham|Nursing Promotion|Hospital Hierarchy
Whose mother was dying from pneumonia and a wound infection in An Irish Lullaby?|Samantha O'Hara's|Bron Craig's|Terri Sullivan's|Connor Costello's|Medium|An Irish Lullaby|Episode 16|Samantha O'Hara|Mother|Pneumonia|Wound Infection|Family Bereavement
Which two medical workers clashed about rescuing a factory worker in Head to Head?|Ben and Luke|Mitch and Peter|Connor and Jared|Steph and Terri|Medium|Head To Head|Episode 17|Ben Markham|Luke Forlano|Rescue Disagreement|Factory Worker|Field Emergency
Where was the worker trapped in Head to Head?|In machinery by his arm|Under a fallen tree by his leg|Inside a lift by his neck|In a flooded drain by his foot|Medium|Head To Head|Episode 17|Trapped Arm|Industrial Machinery|Workplace Accident|Paramedic Response|Medical Intervention
In Desperate Remedies, what did a patient claim happened during surgery?|She remained conscious under anaesthetic|She was given the wrong organ|Her operation was filmed without consent|She received an unnecessary amputation|Medium|Desperate Remedies|Episode 18|Anaesthesia Awareness|Patient Complaint|Stephanie Markham|Surgery|Patient Advocacy
Which nurse fought to have the surgical patient's concerns heard in Desperate Remedies?|Stephanie Markham|Von Ryan|Bron Craig|Terri Sullivan|Medium|Desperate Remedies|Episode 18|Stephanie Markham|Surgical Awareness|Patient Rights|Staff Advocacy|Hospital Administration
Which elderly couple's accident helped Bron reflect on love in The Human Touch?|Donald and his partner|Ryan and Eileen|Jared and Samantha|Hilary and Owen|Hard|The Human Touch|Episode 19|Donald|Elderly Couple|Campervan Collision|Bron Craig|Romantic Reflection
Whose alcoholic neighbour Hazel became a patient in The Human Touch?|Von Ryan's|Terri Sullivan's|Ben Markham's|Connor Costello's|Medium|The Human Touch|Episode 19|Von Ryan|Hazel|Alcohol Dependence|Neighbour|Hospital Rule Breaking
What prompted evacuation of Ward 17 in Disaster Plan?|Toxic fumes from a deceased patient's body|A kitchen fire in the canteen|A broken water main|A bomb scare at reception|Easy|Disaster Plan|Episode 20|Toxic Fumes|Chemical Ingestion|Ward Evacuation|Disaster Procedure|Hospital Safety
Which relative of Connor Costello was admitted in Disaster Plan?|His brother Greg|His mother|His cousin Tom|His grandfather|Easy|Disaster Plan|Episode 20|Connor Costello|Greg Costello|Estranged Brothers|Family Reunion|Drug Problems
Which young singer developed a life-threatening condition after a tonsillectomy in Forget-Me-Knots?|Zap McCafferty|Darren Rigg|Seb Connelly|Tony Hurst|Hard|Forget Me Knots|Episode 21|Zap McCafferty|Tonsillectomy|Young Musician|Luke Forlano|Postoperative Emergency
In Forget-Me-Knots, why did patient Phil Oram feel connected to Bron?|She had attended the crash that killed his family|She had once been his schoolteacher|They were childhood neighbours|She had donated blood to him|Hard|Forget Me Knots|Episode 21|Phil Oram|Bron Craig|Road Accident|Lost Wife And Child|Traumatic Memory
Which illness affected teenage twins Alan and Brett Cameron in Shoot the Messenger?|Cystic fibrosis|Muscular dystrophy|Haemophilia|Sickle cell disease|Easy|Shoot The Messenger|Episode 22|Alan Cameron|Brett Cameron|Teenage Twins|Cystic Fibrosis|Lung Transplant
Why did one Cameron twin feel guilty in Shoot the Messenger?|He qualified for donor lungs while his brother did not|He had caused a road accident|He had hidden an adoption letter|He had refused to become a donor|Medium|Shoot The Messenger|Episode 22|Cameron Twins|Donor Lungs|Sibling Guilt|Transplant Eligibility|Moral Conflict
Which stolen money caused trouble for Bron after Greg Costello stayed at the house?|Her rent money|A hospital charity collection|A lottery prize|A patient's surgery deposit|Hard|Shoot The Messenger|Episode 22|Bron Craig|Greg Costello|Stolen Rent|Gambling Temptation|Housemates
Which man became dependent on Bron after his grandmother died in In With the New?|Thomas Ferry|Neil Phillips|Tony Hurst|Greg Costello|Medium|In With The New|Episode 23|Thomas Ferry|Bron Craig|Grandmother Death|Disability Support|Social Care
What living arrangement did the authorities consider for Thomas in In With the New?|Institutional care|A boarding school|A prison hospital|A temporary ambulance hostel|Medium|In With The New|Episode 23|Thomas Ferry|Community Services|Institutionalisation|Bron Advocacy|Social Worker
Which allegation against Ben threatened his marriage in Second Chance?|That he assaulted a female patient|That he stole an ambulance|That he falsified hospital records|That he accepted a bribe|Medium|Second Chance|Episode 24|Ben Markham|Stephanie Markham|Patient Allegation|Marriage Crisis|Ambulance Work
Which ward clerk made Connor uncomfortable because of his sexuality in Endgame?|Tony Hurst|Regina Butcher|Neil Phillips|Stan Ridgeway|Medium|Endgame|Episode 25|Tony Hurst|Connor Costello|Gay Ward Clerk|Prejudice|New Colleague
What disorder did Terri suspect in Neil Phillips in Endgame?|Munchausen syndrome|Bipolar disorder|Tourette syndrome|Agoraphobia|Hard|Endgame|Episode 25|Terri Sullivan|Neil Phillips|Factitious Disorder|Repeated Injury|Clinical Suspicion
What did Neil Phillips deliberately injure with a drill in Endgame?|His arm|His foot|His shoulder|His knee|Hard|Endgame|Episode 25|Neil Phillips|Self Injury|Power Drill|Munchausen Suspicion|Manipulative Patient
Who was revealed to have been physically abusing Eileen Sullivan in Behind Closed Curtains?|Her husband Ryan|Her brother Peter|Her son-in-law Ben|Her neighbour Neil|Medium|Behind Closed Curtains|Episode 26|Eileen Sullivan|Ryan Sullivan|Domestic Violence|Terri Sullivan|Family Secret
Which couple's marital separation was still being hidden from their colleagues in Behind Closed Curtains?|Ben and Steph|Luke and Bron|Jared and Samantha|Connor and Lily|Medium|Behind Closed Curtains|Episode 26|Ben Markham|Stephanie Markham|Marriage Breakdown|Separation|Hospital Colleagues
What was Mary Ellison secretly being given to prevent menstruation in Lesser of Two Evils?|Hormones and steroids|Blood thinners|Antibiotics and vitamins|Insulin and iron|Hard|Lesser Of Two Evils|Episode 27|Mary Ellison|Religious Control|Steroids And Hormones|Menstruation Suppression|Terri Sullivan
Which nurse faced a false theft accusation after a procedural mistake in Lesser of Two Evils?|Connor Costello|Jared Levine|Von Ryan|Bron Craig|Medium|Lesser Of Two Evils|Episode 27|Connor Costello|Patient Complaint|Missing Money|Professional Reputation|Nursing Procedure
What was unusual about the patient Luke persuaded to accept surgery in A Whole Lot to Lose?|He was a priest terrified of hospitals|He was an actor pretending to be ill|He was a doctor refusing anaesthetic|He was a pilot who could not speak|Medium|A Whole Lot To Lose|Episode 28|Luke Forlano|Hospital Phobia|Anglican Priest|Dissecting Aortic Aneurysm|Patient Trust
Which medical condition did Mitch diagnose in nurse Von Ryan during A Whole Lot to Lose?|Lupus|Diabetes|Multiple sclerosis|Hepatitis B|Easy|A Whole Lot To Lose|Episode 28|Von Ryan|Mitch Stevens|Systemic Lupus Erythematosus|Autoimmune Diagnosis|Chronic Illness
How was ward clerk Tony accidentally exposed to an infection risk in A Whole Lot to Lose?|A needlestick injury|A blood transfusion mix-up|A chemical spill|A bite from a patient|Medium|A Whole Lot To Lose|Episode 28|Tony Hurst|Contaminated Needle|Hepatitis C Risk|Stephanie Markham|Workplace Safety
Which patient in Just Like a Woman had previously been Connor's football coach?|Alana Devlin|Mary Ellison|Simone Carlisle|Juliette McAllister|Medium|Just Like A Woman|Episode 29|Alana Devlin|Connor Costello|Former Football Coach|Transgender Woman|Patient Acceptance
Which disease was diagnosed in Alana Devlin during Just Like a Woman?|Breast cancer|Lung cancer|Leukaemia|Parkinson's disease|Hard|Just Like A Woman|Episode 29|Alana Devlin|Breast Cancer|Hormone Treatment|Mastectomy Refusal|Personal Identity
Which sport brought ward clerk Tony and Connor closer in Three's a Crowd?|Australian rules football|Cricket|Rugby union|Tennis|Medium|Three Is A Crowd|Episode 30|Tony Hurst|Connor Costello|Football Supporters|Colleague Friendship|Cougars
What did Bron and Ben keep receiving from children during Three's a Crowd?|Prank emergency calls|Signed football shirts|Anonymous flowers|Fake parking fines|Hard|Three Is A Crowd|Episode 30|Bron Craig|Ben Markham|Prank Calls|Ambulance Dispatch|Children
Which footballer admitted after a fall delighted Connor and Tony in Time Bombs?|Darren Rigg|Stewie|Greg Costello|Seb Connelly|Medium|Time Bombs|Episode 31|Darren Rigg|Cougars Footballer|Connor Costello|Tony Hurst|Sports Celebrity Patient
What caused athlete Roger's dangerous muscle breakdown in Time Bombs?|Extreme overtraining|A snakebite|A bacterial chest infection|A broken rib|Hard|Time Bombs|Episode 31|Roger|Rhabdomyolysis|Intense Exercise|Jared Levine|Gym Training
What relationship milestone occurred for Ben and Stephanie in Time Bombs?|They reconciled after separating|They divorced|They adopted a child|They moved to another city|Medium|Time Bombs|Episode 31|Ben Markham|Stephanie Markham|Marriage Reconciliation|Couple Storyline|1999 Turning Point
In Memories by Moonlight, a patient initially using the name Zoe Dell was actually who?|Julie Bentham|Alana Devlin|Simone Carlisle|Gabrielle Flanagan|Hard|Memories By Moonlight|Episode 32|Julie Bentham|False Student ID|Party Overdose|Bron Craig|Ben Markham
What allergy endangered Julie Bentham when staff relied on the false identity in Memories by Moonlight?|Penicillin allergy|Peanut allergy|Latex allergy|Shellfish allergy|Hard|Memories By Moonlight|Episode 32|Julie Bentham|Wrong Identity|Penicillin|Medication Safety|Stephanie Markham
What creature bit Bron while she rescued a child in True Love and the Blues?|A funnel-web spider|A redback spider|A brown snake|A scorpion|Medium|True Love And The Blues|Episode 33|Bron Craig|Funnel Web Spider|Child Rescue|Paramedic Injury|Tess
Who was revealed to have shot the Family Court judge in True Love and the Blues?|His son Nicholas|His wife|A police officer|A court clerk|Hard|True Love And The Blues|Episode 33|Judge Shooting|Nicholas|Terri Sullivan|Family Betrayal|Confession
To which US state did Luke travel for a medical conference in True Love and the Blues?|Alaska|Hawaii|California|Texas|Hard|True Love And The Blues|Episode 33|Luke Forlano|Alaska Trip|Bron Craig|Medical Conference|Couple Separation
In Knowing Me Knowing You, what illness made Denise Baumann fail to recognise her family?|Dementia|Parkinson's disease|Multiple sclerosis|Epilepsy|Medium|Knowing Me Knowing You|Episode 34|Denise Baumann|Dementia|Errol Baumann|Daughter Rachel|Family Care
Which relative's surprise visit to Terri followed domestic violence in Memories by Moonlight?|Her mother Eileen|Her sister Rose|Her niece Kylie|Her aunt Von|Medium|Memories By Moonlight|Episode 32|Eileen Sullivan|Ryan Sullivan|Domestic Violence|Terri Sullivan|Family Support
Which new ambulance partner trapped Bron in a dangerous situation in When Duty Calls?|Pete Maroney|Mick Evans|Ben Markham|Luke Forlano|Medium|When Duty Calls|Episode 35|Pete Maroney|Bron Craig|Ambulance Partner|Duty Failure|Hostage Danger
What infectious disease was diagnosed in a young mother during When Duty Calls?|Polio|Meningitis|Measles|Tuberculosis|Hard|When Duty Calls|Episode 35|Judith|Polio Diagnosis|New Mother|Jared Levine|Von Ryan
Why did Von ask to be removed from the polio patient's care in When Duty Calls?|Her lupus affected her vulnerability|She had lost her nursing licence|The patient was her sister|She was being transferred overseas|Hard|When Duty Calls|Episode 35|Von Ryan|Lupus|Immune Vulnerability|Terri Sullivan|Staff Safety
What was the name of the dying man's long-term partner whom Connor supported in The Ties That Bind?|Scott|Tim|Tony|Darren|Hard|The Ties That Bind|Episode 36|Scott Lacey|Mike|Same Sex Relationship|Patient Dignity|Connor Costello
What did the dying patient Mike's mother try to deny his partner in The Ties That Bind?|Participation in funeral arrangements|Access to his medical test results|A wedding invitation|Permission to visit the ward cafe|Medium|The Ties That Bind|Episode 36|Mike|Scott Lacey|Hostile Mother|Next Of Kin|Funeral Exclusion
What illness affected teenage patient Deb and led to a dangerous pact with Tim?|Cystic fibrosis|Type 1 diabetes|Sickle cell disease|Motor neurone disease|Medium|The Ties That Bind|Episode 36|Deb|Tim|Cystic Fibrosis|Suicide Pact|Transplant Waiting List
Which donor believed the young leukaemia patient might be her stolen daughter in Lost and Found?|Gabrielle Flanagan|Mary Ellison|Alana Devlin|Denise Baumann|Medium|Lost And Found|Episode 37|Gabrielle Flanagan|Stolen Infant|Bone Marrow Donation|Adopted Child|Connor Costello
What tissue was Gabrielle Flanagan donating to the young patient Alex in Lost and Found?|Bone marrow|A kidney|Liver tissue|Blood platelets|Medium|Lost And Found|Episode 37|Gabrielle Flanagan|Alex Richards|Bone Marrow Match|Leukaemia|Donation
Which ward clerk helped arrange a patient's wedding before leaving All Saints in Lost and Found?|Tony Hurst|Regina Butcher|Joan Marden|Kylie Preece|Hard|Lost And Found|Episode 37|Tony Hurst|Ward Clerk Departure|Wedding Arrangement|Patient Romance|Character Exit
What had drug courier Lisa swallowed in The Stuff of Dreams?|Condoms containing cocaine|Bags of stolen diamonds|A packet of sleeping pills|Small magnets|Medium|The Stuff Of Dreams|Episode 38|Lisa|Cocaine Smuggling|Drug Capsules|Emergency Surgery|Hostage Situation
Who threatened Steph with a gun to stop the drug courier being taken away in The Stuff of Dreams?|Lisa's husband Paul|Her brother Greg|A police escort|The hospital director|Medium|The Stuff Of Dreams|Episode 38|Paul|Stephanie Markham|Armed Threat|Luke Forlano|Mitch Stevens
Which pregnant patient in Outside the Square feared that having a baby would end her boxing career?|Charlie Wilde|Gabrielle Flanagan|Julie Bentham|Denise Baumann|Medium|Outside The Square|Episode 39|Charlie Wilde|Female Boxer|Pregnancy Decision|Career Pressure|Stephanie Markham
What vehicle did Jason Richards hijack while pursuing his obsession with being a paramedic in Outside the Square?|An ambulance|A fire engine|A police van|A hospital shuttle bus|Easy|Outside The Square|Episode 39|Jason Richards|Ben Markham|Ambulance Hijacking|False Paramedic Ambition|Emergency Danger
Which famous Australian horse race tempted Bron back into gambling in Everyone Loves a Winner?|Melbourne Cup|Sydney Cup|Caulfield Guineas|Golden Slipper|Easy|Everyone Loves A Winner|Episode 40|Bron Craig|Melbourne Cup|Gambling Relapse|Horse Racing|1999 Race Day
What diagnosis followed Regina Butcher's unexplained rash in Everyone Loves a Winner?|Leprosy|Chickenpox|Psoriasis|Shingles|Hard|Everyone Loves A Winner|Episode 40|Regina Butcher|Leprosy|Mitch Stevens|Unexpected Diagnosis|Infectious Disease
Which patient's lost brother became the focus of the river accident story in Blood and Water?|Eddie Furlong's|Connor Costello's|Luke Forlano's|Neil Phillips's|Hard|Blood And Water|Episode 41|Eddie Furlong|Marty Furlong|Boat Accident|Brother Death|Organ Donation
What medicine did Eddie Furlong overdose on after the boating tragedy in Blood and Water?|Paracetamol|Insulin|Warfarin|Morphine|Hard|Blood And Water|Episode 41|Eddie Furlong|Paracetamol Overdose|Liver Failure|Guilt|Transplant Need
What serious illness was discovered in Terri's father Ryan during Blood and Water?|Cancer|Alzheimer's disease|Heart failure|Lupus|Medium|Blood And Water|Episode 41|Ryan Sullivan|Terri Sullivan|Eileen Sullivan|Cancer Diagnosis|Family Crisis
Which terminal patient returned in Life Class and reminded Terri of her father's illness?|Dave Armstrong|Bob Parkin|Thomas Ferry|Roger|Medium|Life Class|Episode 42|Dave Armstrong|Terminal Lung Cancer|Terri Sullivan|Ryan Sullivan|End Of Life Care
What procedure did Luke have to consider performing at a crash scene in Life Class?|Emergency surgery on the heart|An emergency caesarean section|A kidney transplant|Spinal fusion|Hard|Life Class|Episode 42|Luke Forlano|Accident Scene|Cardiac Tamponade|Trauma Team|Life Saving Procedure
What was the title of the final episode of All Saints Season 2?|Ghosts of Christmas Past|Christmas Spice|Blood and Water|An Irish Lullaby|Easy|Ghosts Of Christmas Past|Episode 43|Season Finale|23 November 1999|Christmas Episode|1999 Ending|Final Broadcast
In Ghosts of Christmas Past, which former aid worker suffered unexplained paralysis?|Carol Sherwood|Juliette McAllister|Rose Carlton|Sophie Williams|Hard|Ghosts Of Christmas Past|Episode 43|Carol Sherwood|Somalia Aid Worker|Psychological Trauma|Paralysis|Mitch Stevens
Which festival did Jared help pregnant Rachel celebrate during Ghosts of Christmas Past?|Hanukkah|Diwali|Eid al-Fitr|Passover|Medium|Ghosts Of Christmas Past|Episode 43|Jared Levine|Rachel|Hanukkah|Jewish Family|Religious Inclusion
What early Christmas present did Steph reveal to Ben in the Season 2 finale?|She was pregnant|She had won a holiday|She had qualified as a surgeon|She had bought a new house|Easy|Ghosts Of Christmas Past|Episode 43|Stephanie Markham|Ben Markham|Pregnancy Announcement|Marital Reconciliation|Holiday Reveal
Which charity pageant role did Connor reluctantly have to play in Ghosts of Christmas Past?|Joseph|Santa Claus|An angel|A shepherd|Hard|Ghosts Of Christmas Past|Episode 43|Connor Costello|Christmas Pageant|Joseph Role|Hospital Festivities|Final Episode
Which ward staff member kissed Mitch beneath mistletoe during the 1999 Christmas finale?|Regina Butcher|Bron Craig|Samantha O'Hara|Jaz Hillerman|Medium|Regina Butcher|Mitch Stevens|Ghosts Of Christmas Past|Episode 43|Mistletoe Kiss|Christmas Romance|Season Finale
Which recurring patient was shown watching Terri from outside her home near the 1999 finale?|Neil Phillips|Thomas Ferry|Dave Armstrong|Eddie Furlong|Hard|Neil Phillips|Terri Sullivan|Ghosts Of Christmas Past|Episode 43|Stalking Behaviour|Outside Her Home|Season Finale
Which sister in religious life faced pressure to move away from her order's communal home in 1999?|Terri Sullivan|Sophie Williams|Von Ryan|Regina Butcher|Medium|Terri Sullivan|Religious Order|Sister Bernard|Superior General|Community House|Personal Independence|Forget Me Knots
Which colleague's departure brought an end to Jared's romance early in Season 2?|Samantha O'Hara|Rose Carlton|Kylie Preece|Regina Butcher|Medium|Jared Levine|Samantha O'Hara|Relationship Breakup|Family Bereavement|1999 Romance|Head To Head|Season Two Arc
Which actor portrayed Connor's estranged brother Greg Costello during the 1999 season?|Terry Serio|Jake Blundell|Peter Lamb|Myles Pollard|Hard|Terry Serio|Greg Costello|Connor Costello|Estranged Brothers|Drug Addiction|Actor Identification|1999 Recurring Cast`;

let sequence = 0;
const questions = facts.trim().split('\n').map(line => {
  const id = 'tv_' + String(FIRST_ID + sequence).padStart(5, '0');
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
  sequence++;
  return {
    id, category: 'Television', programme, question, answers,
    correctAnswer, difficulty, tags, dailyEligible: true
  };
});

if (
  !questions.length || questions[0].id !== 'tv_24066' ||
  new Set(questions.map(q => q.id)).size !== questions.length ||
  new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length ||
  questions.some(q =>
    q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
    q.tags.length < 14 || !q.tags.includes('Programme: All Saints') ||
    q.dailyEligible !== true
  )
) throw new Error('Pack 421 exported question validation failed');

module.exports = questions;