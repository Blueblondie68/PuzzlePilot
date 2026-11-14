// PuzzlePilot - The Bigggggg Quiz - Pack 429
// All Saints (Australia): Season 10 (2007), 41 episodes.
// Follows Pack 428. First ID: tv_24991.
// Complete WordPad-ready CommonJS. All Saints stays unfinished on the TV master.
// Each row: question | correct answer | three distractors | difficulty | seven question-specific tags.
// Episode stories checked against 2007 episode listings and detailed guides.
'use strict';

const FIRST_ID = 24991;
const programme = 'All Saints';
const commonTags = [
  'Television', 'Australian Television', 'Australian Medical Drama',
  'All Saints', 'Programme: All Saints', 'Seven Network',
  'All Saints Western General Hospital', 'Emergency Department', 'Season 10', '2007'
];

const facts = `How many episodes were broadcast in the tenth season of All Saints?|41|39|40|43|Medium|Tenth Season|Episode Count|41 Episodes|Broadcast History|Australian Television|Series Schedule|Season Length
Which episode began All Saints Season 10?|Family Matters|The Hardest Word|Thresholds|Smoke and Mirrors|Easy|Family Matters|Episode 1|Season Premiere|Opening Title|February 2007|Broadcast Order|Episode Guide
Which episode ended the tenth season of All Saints?|Against the Wall (Part 1)|Thin Ice|Cutting Free|Precious Time|Easy|Against The Wall|Episode 41|Season Finale|Cliffhanger|November 2007|Hospital Siege|Episode Title
Who was fighting for his life after being shot as Family Matters opened?|Bart West|Jack Quade|Frank Campion|Dan Goldman|Easy|Family Matters|Episode 1|Bart West|Gunshot Wounds|Operating Theatre|Opening Crisis|Medical Intern
Which two doctors worked to save Bart in the Season 10 premiere?|Vincent and Jack|Mike and Sean|Frank and Zoe|Charlotte and Steve|Medium|Family Matters|Episode 1|Vincent Hughes|Jack Quade|Bart West|Emergency Operation|Gunshot Surgery
Whose brother was Dan desperately trying to help in Family Matters?|Erica Templeton's|Cate McMasters's|Von Ryan's|Charlotte Beaumont's|Medium|Family Matters|Episode 1|Dan Goldman|Erica Templeton|AJ|Injured Brother|Prison Escape
What personal decision did Cate make while recovering from an overdose in Family Matters?|She left the Emergency Department|She became head of surgery|She moved overseas|She retired from nursing entirely|Medium|Family Matters|Episode 1|Cate McMasters|Drug Overdose Recovery|Emergency Departure|Career Decision|Paramedic Work
What type of road emergency did Cate encounter while jogging in The Hardest Word?|A serious motor-vehicle accident|A train derailment|A helicopter crash|A chemical tanker fire|Easy|The Hardest Word|Episode 2|Cate McMasters|Jogging|Road Accident|First Responder|Emergency Rescue
Which nurse brought her transitional-care patient Ian into Emergency in The Hardest Word?|Von Ryan|Jessica Singleton|Gabrielle Jaeger|Erica Templeton|Medium|The Hardest Word|Episode 2|Von Ryan|Ian|Transitional Care|Son Lance|Neglect Concerns
Who was the patient Cate treated at the roadside despite his girlfriend's distress in The Hardest Word?|Brian MacPherson|Simon McDermott|Barry Mitchell|Levi Joseph|Hard|The Hardest Word|Episode 2|Cate McMasters|Brian MacPherson|Girlfriend Lisa|Road Accident|Radical Treatment
What sort of location was central to the unusual crash in Thresholds?|A motel|A shopping centre|An airport|A cricket ground|Medium|Thresholds|Episode 3|Motel Crash|Bizarre Accident|Emergency Admissions|Patient Gossip|Road Trauma
Which two doctors disagreed about Bart's recovery in Thresholds?|Frank and Vincent|Jack and Mike|Sean and Zoe|Charlotte and Bart|Medium|Thresholds|Episode 3|Frank Campion|Vincent Hughes|Bart West|Rehabilitation Dispute|Gunshot Recovery
Whose condition was Erica investigating when his health deteriorated in Thresholds?|A teenage boy's|An elderly woman's|A newborn baby's|A professional athlete's|Medium|Thresholds|Episode 3|Erica Templeton|Teenage Boy|Unexplained Deterioration|Clinical Investigation|Medical Mystery
Which dependency had Mike Vlasek been treated for before returning in Smoke and Mirrors?|Morphine addiction|Alcohol addiction|Gambling addiction|Nicotine dependence|Easy|Smoke And Mirrors|Episode 4|Mike Vlasek|Morphine Dependence|Six Month Detox|Doctor Return|Recovery
What organ began failing in Zoe's patient Sharon after a missed diagnosis in Smoke and Mirrors?|Kidneys|Lungs|Liver|Heart|Medium|Smoke And Mirrors|Episode 4|Zoe Gallagher|Sharon|Renal Failure|Missed Diagnosis|Frank Campion
Who learned Eve's news before Frank did in Smoke and Mirrors?|Mike Vlasek|Jack Quade|Bart West|Dan Goldman|Medium|Smoke And Mirrors|Episode 4|Eve|Frank Campion|Mike Vlasek|Personal News|Bart Recovery
What substance was patient Josh dependent on in The Hearts of Men?|Methamphetamine|Alcohol|Heroin|Cannabis|Medium|The Hearts Of Men|Episode 5|Josh|Methamphetamine|Mike Vlasek|Zoe Gallagher|Addiction Treatment
What sort of injury did Vincent and Sean help stabilise in The Hearts of Men?|A degloving injury|A broken neck|A severed hand|A collapsed lung|Hard|The Hearts Of Men|Episode 5|Vincent Hughes|Sean Everleigh|Gabrielle Jaeger|Degloving Injury|Trauma Surgery
Which colleague's experience of childhood abuse was stirred by a bullied boy in The Hearts of Men?|Jack Quade's|Frank Campion's|Bart West's|Mike Vlasek's|Medium|The Hearts Of Men|Episode 5|Jack Quade|Bullied Boy|Childhood Abuse|Dan Goldman|Traumatic Memories
What event forced Cate and Heath to deliver a baby beside a wrecked car in A Fresh Start?|A road crash|A factory explosion|A bushfire|A boating accident|Easy|A Fresh Start|Episode 6|Cate McMasters|Heath|Roadside Birth|Pregnant Driver|Paramedic Return
Who told Frank difficult truths about how Bart was coping at home in A Fresh Start?|Von Ryan|Charlotte Beaumont|Erica Templeton|Gabrielle Jaeger|Medium|A Fresh Start|Episode 6|Von Ryan|Frank Campion|Bart West|Post Hospital Recovery|Emotional Support
Which professional brought an unexplained leg ulcer to Emergency in A Fresh Start?|A marine biologist|A pastry chef|A police diver|A football coach|Hard|A Fresh Start|Episode 6|Marine Biologist|Leg Ulcer|Dan Goldman|Jack Quade|Unusual Patient
What dangerous homemade activity caused injuries in Back on Track?|A horizontal bungee catapult|A backyard zipline|A homemade waterslide|A bicycle ramp|Medium|Back On Track|Episode 7|Horizontal Bungee|Catapult Accident|Cate McMasters|Heath|Park Rescue
Who was Conrad, a witness to the catapult tragedy, to Bart?|An old school adversary|His medical tutor|His childhood best friend|His cousin|Hard|Back On Track|Episode 7|Conrad|Bart West|School Bully|Catapult Accident|Rehabilitation
What news did Frank share with Bart in Back on Track?|He and Eve were expecting a baby|He was leaving the hospital|He had accepted a role overseas|He was selling his house|Medium|Back On Track|Episode 7|Frank Campion|Eve|Pregnancy Announcement|Bart West|Family Plans
Which doctor's labour began in What Lies Beneath?|Charlotte Beaumont's|Zoe Gallagher's|Erica Templeton's|Cate McMasters's|Easy|What Lies Beneath|Episode 8|Charlotte Beaumont|Childbirth|Labour|Emergency Doctor|Family Milestone
What illness did a teenager have when he risked his life trying to be like other young people in What Lies Beneath?|Cystic fibrosis|Diabetes|Haemophilia|Multiple sclerosis|Medium|What Lies Beneath|Episode 8|Teenage Patient|Cystic Fibrosis|Risk Taking|Normal Life|Emergency Admission
What prenatal procedure did Eve want despite Frank's concerns in What Lies Beneath?|Amniocentesis|An emergency caesarean|A chorionic blood transfusion|An MRI of her spine|Medium|What Lies Beneath|Episode 8|Eve|Frank Campion|Amniocentesis|Prenatal Testing|Pregnancy Risk
Which sport was teenage patient Tully riding in The Blink of an Eye?|Horse riding|BMX racing|Ice hockey|Gymnastics|Medium|The Blink Of An Eye|Episode 9|Tully|Horse Riding|Equestrian|Spinal Injury|Young Patient
What devastating diagnosis followed Tully's fall in The Blink of an Eye?|Complete spinal cord injury|A ruptured spleen|A fractured ankle|A detached retina|Medium|The Blink Of An Eye|Episode 9|Tully|Vincent Hughes|Sean Everleigh|Spinal Cord Injury|Paralysis
Which congenital condition was identified in Frank and Eve's baby in The Blink of an Eye?|Spina bifida|Down syndrome|Cleft palate|Congenital deafness|Medium|The Blink Of An Eye|Episode 9|Frank Campion|Eve|Spina Bifida|Amniocentesis Result|Unborn Baby
What offence did Cate and Von risk by taking a neglected child to safety in The Blink of an Eye?|Kidnapping|Arson|Fraud|Perjury|Hard|The Blink Of An Eye|Episode 9|Cate McMasters|Von Ryan|Neglected Girl|Protective Intervention|Legal Risk
What catastrophic neck injury did Levi Joseph survive in Life's Little Miracles?|Internal decapitation|A fractured jaw|A dislocated shoulder|A cracked rib|Hard|Lifes Little Miracles|Episode 10|Levi Joseph|Internal Decapitation|Traffic Accident|Frank Campion|Extraordinary Rescue
Which police officer's brother was Levi Joseph in Life's Little Miracles?|Constable Hugo Joseph's|Constable Peter Saunders's|Detective Frank Campion's|Sergeant Colin Blackburn's|Hard|Lifes Little Miracles|Episode 10|Hugo Joseph|Levi Joseph|Police Family|Road Trauma|Hospital Rescue
Who angered Zoe by neglecting routine patients to watch the extraordinary surgery in Life's Little Miracles?|Bart West|Dan Goldman|Mike Vlasek|Sean Everleigh|Medium|Lifes Little Miracles|Episode 10|Bart West|Zoe Gallagher|Surgical Spectacle|Neglected Patients|Clinical Duty
Which doctor's grief made him increasingly confrontational in Life Interrupted?|Frank Campion's|Vincent Hughes's|Jack Quade's|Sean Everleigh's|Easy|Life Interrupted|Episode 11|Frank Campion|Grief|Staff Conflicts|Emergency Leadership|Family Loss
Who argued with Frank about the treatment of a trauma patient in Life Interrupted?|Mike Vlasek|Bart West|Dan Goldman|Zoe Gallagher|Medium|Life Interrupted|Episode 11|Mike Vlasek|Frank Campion|Trauma Treatment|Professional Conflict|Clinical Decision
Which nursing manager clashed with Frank over Emergency administration in Life Interrupted?|Gabrielle Jaeger|Deanna Richardson|Jessica Singleton|Erica Templeton|Medium|Life Interrupted|Episode 11|Gabrielle Jaeger|Frank Campion|Department Administration|Nursing Management|Workplace Dispute
What condition did Bart and Erica encounter in Choices of the Heart when a patient believed she was infested?|Delusional parasitosis|Agoraphobia|Narcolepsy|An eating disorder|Hard|Choices Of The Heart|Episode 12|Bart West|Erica Templeton|Delusional Parasitosis|Psychiatric Presentation|False Infestation
What accident nearly severed both feet of a young athlete in Choices of the Heart?|A train accident|A motorbike crash|A skiing fall|A factory explosion|Medium|Choices Of The Heart|Episode 12|Young Athlete|Train Injury|Severed Feet|Limb Salvage|Emergency Surgery
Which doctor returned to the Emergency Department after maternity leave in Choices of the Heart?|Charlotte Beaumont|Zoe Gallagher|Erica Templeton|Cate McMasters|Easy|Choices Of The Heart|Episode 12|Charlotte Beaumont|Maternity Leave|Work Return|Emergency Department|Career Change
How many hours without sleep had Bart endured while treating a patient in Balancing Act?|36|12|24|48|Medium|Balancing Act|Episode 13|Bart West|Sleep Deprivation|Thirty Six Hours|Abdominal Pain|Internship Pressure
What type of machinery crushed an operator in Balancing Act?|An excavator|A forklift|A crane|A combine harvester|Medium|Balancing Act|Episode 13|Excavator Accident|Crush Injury|Mike Vlasek|Jack Quade|Surgical Training
Which surgeon was sidelined while Jack was allowed to operate independently in Balancing Act?|Vincent Hughes|Frank Campion|Sean Everleigh|Bart West|Medium|Balancing Act|Episode 13|Vincent Hughes|Jack Quade|Mike Vlasek|Independent Surgery|Professional Friction
What hidden injury problem threatened Drew Redman's surgically repaired legs in Balancing Act?|Swelling within the plaster casts|An infected tattoo|A damaged knee replacement|A dislocated ankle|Hard|Balancing Act|Episode 13|Drew Redman|Swollen Legs|Plaster Casts|Limb Salvage|Surgical Complication
Who rescued Benny from a street beating on their way to work in Timing?|Dan and Erica|Cate and Heath|Charlotte and Zoe|Frank and Vincent|Medium|Timing|Episode 14|Dan Goldman|Erica Templeton|Benny|Gang Assault|Street Rescue
Whom did Benny fear was trying to kill him in Timing?|Mr Terry|Mr Wesley|Mr Vlasek|Mr Connelly|Hard|Timing|Episode 14|Benny|Mr Terry|Threatening Pursuer|Von Ryan|Patient Disclosure
Which former victim of Jack's childhood abuser approached him in Timing?|Travis|Conrad|Levi|Simon|Medium|Timing|Episode 14|Jack Quade|Travis Knight|Shared Abuse|Court Testimony|Patrick Wesley
Which patient had no recollection of the sexual encounters investigated in Some Kinds of Love?|Kenya Hutton|Ann-Maree|Tegan Willis|Adriana|Hard|Some Kinds Of Love|Episode 15|Kenya Hutton|Memory Loss|Sleep Disorder|Zoe Gallagher|Sexual Behaviour
What type of sleep disorder did Zoe identify in Kenya Hutton in Some Kinds of Love?|Sexsomnia|Sleepwalking only|Narcolepsy|Sleep apnoea|Hard|Some Kinds Of Love|Episode 15|Kenya Hutton|Sexsomnia|REM Sleep Disorder|Zoe Gallagher|Unconscious Sexual Behaviour
Which inherited condition did Jack discover Travis had instead of HIV in Some Kinds of Love?|Wilson's disease|Huntington's disease|Marfan syndrome|Haemophilia|Hard|Some Kinds Of Love|Episode 15|Jack Quade|Travis Knight|Wilson Disease|Misdiagnosis|Patrick Wesley
What accident brought unidentified patients into Emergency after a rugby league win in End Game?|A man was struck by a bus|A grandstand collapsed|A bus fell from a bridge|A fireworks display exploded|Medium|End Game|Episode 16|Bus Accident|Cougars Rugby League|Unidentified Patient|Frank Campion|Trauma Resuscitation
Which dying former hospital matron did Von visit at home in End Game?|Maureen|Kerry|Deanna|Eve|Hard|End Game|Episode 16|Maureen|Former Matron|Von Ryan|Palliative Care|Nursing History
What controlled drug did Bart help Von arrange outside usual procedure in End Game?|Morphine|Insulin|Heparin|Adrenaline|Medium|End Game|Episode 16|Bart West|Von Ryan|Morphine|Dying Nun|Medication Rules
Which patient's GP suspected Guillain-Barre syndrome in End Game?|A young ballet dancer|An elderly sailor|A rugby player|A newborn baby|Medium|End Game|Episode 16|Declan|Ballet Dancer|Guillain Barre Suspicion|Charlotte Beaumont|Lumbar Puncture
Who attacked road-accident patient Barry Mitchell in The Trust Game?|Carl Woodman|Patrick Wesley|Travis Knight|Simon McDermott|Hard|The Trust Game|Episode 17|Barry Mitchell|Carl Woodman|Emergency Assault|Sean Everleigh|Patient Crisis
What went missing from Emergency's secure storage in The Trust Game?|Medication|Surgical instruments|Patient records|Blood donations|Medium|The Trust Game|Episode 17|Missing Drugs|Drug Cabinet|Hospital Investigation|Staff Suspicion|Security Failure
Whom did Jack have to face in court in The Trust Game?|Patrick Wesley|Mike Vlasek|Frank Campion|Travis Knight|Medium|The Trust Game|Episode 17|Jack Quade|Patrick Wesley|Court Hearing|Childhood Abuse|Legal Proceedings
Which doctor was in a relationship with Sean Everleigh when tragedy struck in The Trust Game?|Zoe Gallagher|Charlotte Beaumont|Erica Templeton|Cate McMasters|Medium|The Trust Game|Episode 17|Sean Everleigh|Zoe Gallagher|Romance|Sudden Tragedy|Staff Relationship
Which episode centred on the Emergency team trying desperately to save a colleague after the events of The Trust Game?|Precious Moments|Back on Track|Bad Blood|Open Hearts|Medium|Precious Moments|Episode 18|Colleague Emergency|Team Rescue|Medical Crisis|Season Storyline|Aftermath
Which doctor faced a young family needing urgent help in Precious Moments?|Bart West|Frank Campion|Jack Quade|Mike Vlasek|Medium|Precious Moments|Episode 18|Bart West|Young Family|Emergency Care|Difficult Problem|Team Response
What everyday activity triggered severe pain for patient Mia in The Pain of It All?|Eating and drinking|Walking upstairs|Reading a book|Listening to music|Medium|The Pain Of It All|Episode 19|Mia|Chronic Pain|Eating|Drinking|Diagnostic Mystery
What dangerous tool did Nathan use to try to remove his own plaster cast in The Pain of It All?|A circular saw|A carving knife|A soldering iron|An electric drill|Medium|The Pain Of It All|Episode 19|Nathan|Plaster Cast|Circular Saw|Patient Stunt|Self Inflicted Injury
Which continent had archaeologist Tim recently visited before fearing he had brought back a deadly illness in The Pain of It All?|Africa|Asia|Europe|South America|Medium|The Pain Of It All|Episode 19|Tim|Archaeologist|Africa Travel|Suspected Infection|Public Health Fear
Whose death was the Emergency team mourning in The Pain of It All?|Sean Everleigh's|Mike Vlasek's|Vincent Hughes's|Frank Campion's|Easy|The Pain Of It All|Episode 19|Sean Everleigh|Colleague Death|Emergency Staff|Grief|Aftermath
Which man was brought to Emergency with stab wounds in Crossroads, forcing Jack to operate?|Patrick Wesley|Travis Knight|Carl Woodman|Conrad|Medium|Crossroads|Episode 20|Patrick Wesley|Jack Quade|Stab Wounds|Surgical Dilemma|Past Abuse
Why did Jack insist on saving Patrick Wesley in Crossroads?|To prevent Travis being charged with murder|To secure a hospital promotion|To help Patrick win an appeal|To protect Vincent from blame|Medium|Crossroads|Episode 20|Jack Quade|Travis Knight|Patrick Wesley|Murder Charge Risk|Duty Of Care
Which patient was found to have recently given birth but could not explain where the baby was in Crossroads?|Megan Archer|Kenya Hutton|Ann-Maree|Tegan Willis|Hard|Crossroads|Episode 20|Megan Archer|Recent Birth|Missing Baby|Charlotte Beaumont|Zoe Gallagher
Which pair investigated a shocking discovery about a father and son after a road crash in Bodies in Motion?|Frank and Von|Mike and Jack|Bart and Erica|Dan and Gabrielle|Medium|Bodies In Motion|Episode 21|Frank Campion|Von Ryan|Father And Son|Road Accident|Family Discovery
Which pair dealt with a postoperative patient ignoring vital instructions in Bodies in Motion?|Bart and Erica|Jack and Zoe|Vincent and Cate|Frank and Gabrielle|Medium|Bodies In Motion|Episode 21|Bart West|Erica Templeton|Postoperative Patient|Treatment Compliance|Nursing Care
Which nurse suffered a needlestick injury from a patient with hepatitis C in One Moment in Time?|Dan Goldman|Von Ryan|Gabrielle Jaeger|Erica Templeton|Easy|One Moment In Time|Episode 22|Dan Goldman|Adriana|Needlestick Injury|Hepatitis C Exposure|Occupational Health
Where did a mother and son become trapped in One Moment in Time?|Inside a disused silo|Beneath a collapsed bridge|In an abandoned lift shaft|Inside a railway tunnel|Medium|One Moment In Time|Episode 22|Disused Silo|Mother And Son|Mike Vlasek|Frank Campion|Structural Collapse
What diagnosis did Adriana say was at its end stage in One Moment in Time?|Liver failure associated with hepatitis C|Lung cancer|Kidney failure from diabetes|Advanced Parkinson's disease|Medium|One Moment In Time|Episode 22|Adriana|Hepatitis C|End Stage Liver Failure|Dan Goldman|Patient Acceptance
Which sport was being photographed when a patient's rare blood disorder complicated his injuries in Bad Blood?|Australian Rules football|Rugby union|Cricket|Basketball|Medium|Bad Blood|Episode 23|Australian Rules|Photographer|Rare Blood Disorder|Sports Injury|Emergency Admission
What common surgical emergency did Bart initially suspect in a woman refusing an operation in Bad Blood?|Appendicitis|Gallstones|A kidney stone|A ruptured ovarian cyst|Medium|Bad Blood|Episode 23|Bart West|Appendicitis|Surgery Refusal|Jack Quade|Patient Choice
How was a university student badly burned in Bad Blood?|In a campus prank|In a house fire|During a car race|In a laboratory explosion|Medium|Bad Blood|Episode 23|Student Burns|Campus Prank|Charlotte Beaumont|Zoe Gallagher|Clinical Dispute
What longstanding relationship caused one patient to become critically ill in Push Me, Pull Me?|A feud between brothers|A bitter divorce|A father and daughter estrangement|A rivalry between neighbours|Medium|Push Me Pull Me|Episode 24|Two Brothers|Twenty Year Feud|Family Conflict|Critical Illness|Emergency Admission
What treatment contributed to a life-threatening crisis for a patient in Push Me, Pull Me?|Hormone therapy|Radiotherapy|Chemotherapy|Dialysis|Medium|Push Me Pull Me|Episode 24|Hormone Therapy|Gender Transition|Medical Complication|Emergency Treatment|Patient Care
Where was Charlotte's partner preparing to return in Push Me, Pull Me?|Africa|Canada|New Zealand|Ireland|Medium|Push Me Pull Me|Episode 24|Charlotte Beaumont|Africa|Spence Spencer|Medical Work|Relationship Decision
What kind of illegal event led to mass casualties in Pressure Point?|A pre-dawn drag race|A bare-knuckle fight|A street firework contest|A rooftop party|Medium|Pressure Point|Episode 25|Drag Racing|Mass Casualties|Mike Vlasek|Road Accident|Spectators
Whom did Cate promise the dying Claire she would help rescue in Pressure Point?|Claire's younger brother|Claire's father|Claire's boyfriend|Claire's mother|Medium|Pressure Point|Episode 25|Cate McMasters|Claire|Younger Brother|Rescue Promise|Crash Victims
Which junior doctor gave premature reassurance about an unborn baby's condition in Pressure Point?|Bart West|Jack Quade|Zoe Gallagher|Charlotte Beaumont|Medium|Pressure Point|Episode 25|Bart West|Pregnant Patient|False Reassurance|Foetal Heartbeat|Professional Lesson
Which psychiatric condition drove a patient to use a dangerous substance in an attempt to clean his hands in Under the Skin?|Obsessive-compulsive disorder|Bipolar disorder|Agoraphobia|Post-traumatic stress disorder|Medium|Under The Skin|Episode 26|OCD|Hand Washing|Toxic Cleaner|Compulsion|Patient Emergency
Who had to confront her past during interviews for a new Emergency doctor in Under the Skin?|Gabrielle Jaeger|Erica Templeton|Von Ryan|Zoe Gallagher|Medium|Under The Skin|Episode 26|Gabrielle Jaeger|Doctor Recruitment|Past Trauma|Frank Campion|Staffing
What windfall preceded a couple's violent home invasion in Mixed Blessings?|A lottery win|A large inheritance|A casino jackpot|A workplace bonus|Easy|Mixed Blessings|Episode 27|Lottery Winners|Home Invasion|Couple Victims|Unexpected Wealth|Emergency Admission
Who began his first shift as a new Emergency doctor in Mixed Blessings?|Steve Taylor|Bart West|Sean Everleigh|Oscar Wu|Easy|Mixed Blessings|Episode 27|Steve Taylor|New Doctor|First Shift|Emergency Recruitment|Hospital Staff
What infection was Dan monitoring when he received more test results in Mixed Blessings?|Hepatitis C|Hepatitis B|HIV|Tuberculosis|Medium|Mixed Blessings|Episode 27|Dan Goldman|Hepatitis C Testing|Needlestick Exposure|Medical Results|Occupational Risk
Which conflict had Travis Knight missed a court appearance about in Nowhere to Hide?|The case against Patrick Wesley|A dispute over unpaid wages|A traffic accident claim|An inheritance hearing|Medium|Nowhere To Hide|Episode 28|Travis Knight|Patrick Wesley|Court Appearance|Jack Quade|Historical Abuse
Which war veteran's background prompted a disturbing medical investigation in Nowhere to Hide?|A Vietnam War veteran|A Gulf War veteran|A Second World War pilot|An Afghanistan veteran|Medium|Nowhere To Hide|Episode 28|Vietnam Veteran|Military Service|Long Term Illness|Medical Investigation|War Legacy
Who tried to secure funding to keep Bart working at All Saints in Persona Non Grata?|Frank and Zoe|Mike and Jack|Dan and Erica|Charlotte and Von|Medium|Persona Non Grata|Episode 29|Frank Campion|Zoe Gallagher|Bart West|Staff Funding|Junior Doctor
Who offered Bart an alternative professional opportunity in Persona Non Grata?|Mike Vlasek|Steve Taylor|Sean Everleigh|Vincent Hughes|Medium|Persona Non Grata|Episode 29|Mike Vlasek|Bart West|Career Offer|Hospital Employment|Internship Future
What kind of injured athlete refused treatment in Running on Impulse?|A bodybuilder|A speed skater|A football goalkeeper|A professional cyclist|Medium|Running On Impulse|Episode 30|Bodybuilder|Treatment Refusal|Mike Vlasek|Cate McMasters|Assault Injuries
Which doctor was hungover while treating a difficult diabetic patient in Running on Impulse?|Steve Taylor|Jack Quade|Frank Campion|Bart West|Medium|Running On Impulse|Episode 30|Steve Taylor|Diabetes|Hangover|Gabrielle Jaeger|Patient Conflict
What major decision was Bart forced to make in Running on Impulse?|Arrange alternative employment|Leave medicine permanently|Move to London|Join the ambulance service|Medium|Running On Impulse|Episode 30|Bart West|Employment Search|Career Uncertainty|Emergency Department|Staffing
What equipment was stolen from Cate and Heath at an accident site in Reality Check?|Their drug bag|Their oxygen cylinder|Their ambulance radio|Their stretcher|Easy|Reality Check|Episode 31|Cate McMasters|Heath|Stolen Drug Bag|Ambulance Scene|Controlled Medicines
Which nursing manager told Frank that Steve had been drinking at work in Reality Check?|Gabrielle Jaeger|Von Ryan|Erica Templeton|Jessica Singleton|Medium|Reality Check|Episode 31|Gabrielle Jaeger|Steve Taylor|Frank Campion|Alcohol At Work|Professional Reporting
Which two doctors were forced to work together to save a young patient in Reality Check?|Zoe and Charlotte|Frank and Bart|Mike and Vincent|Jack and Steve|Medium|Reality Check|Episode 31|Zoe Gallagher|Charlotte Beaumont|Emergency Teamwork|Young Patient|Clinical Collaboration
What unhealthy fixation developed in a rescuer after a horrific road accident in If Only?|An obsession with the person he saved|A fear of driving at night|A compulsion to collect accident photographs|A fixation on becoming a paramedic|Medium|If Only|Episode 32|Road Accident|Bystander Rescuer|Obsessive Attachment|Trauma Response|Patient Relationship
Whose unexpected visit helped Jack reconsider his future in If Only?|His former landlady's|His university tutor's|His estranged mother's|His former wife's|Medium|If Only|Episode 32|Jack Quade|Former Landlady|Career Decision|Hospital Reunion|Personal Future
Who returned to his first Emergency shift after an absence in Lost and Found?|Jack Quade|Vincent Hughes|Sean Everleigh|Steve Taylor|Easy|Lost And Found|Episode 33|Jack Quade|Emergency Return|First Shift|Cardiac Patient|Staff Changes
What infection was Dan concerned his flu-like symptoms might indicate in Lost and Found?|Hepatitis C|Meningitis|Influenza alone|Malaria|Medium|Lost And Found|Episode 33|Dan Goldman|Hepatitis C|Flu Like Symptoms|Erica Templeton|Occupational Exposure
Which junior doctor struggled with a patient refusing treatment for a dangerous infection in Lost and Found?|Bart West|Mike Vlasek|Frank Campion|Zoe Gallagher|Medium|Lost And Found|Episode 33|Bart West|Treatment Refusal|Severe Infection|Patient Autonomy|Career Crossroads
What hidden problem did a scan reveal in soldier Simon McDermott in No Stranger?|A large brain aneurysm|A spinal cord tumour|A ruptured spleen|A kidney obstruction|Medium|No Stranger|Episode 34|Simon McDermott|Australian Army|Brain Aneurysm|CT Scan|Neurosurgery
Which doctor insisted Jack assist with Simon's risky procedure in No Stranger?|Mike Vlasek|Frank Campion|Zoe Gallagher|Charlotte Beaumont|Medium|No Stranger|Episode 34|Mike Vlasek|Jack Quade|Simon McDermott|Risky Surgery|Operating Theatre
Which doctor's recovery from alcohol withdrawal caused concern in No Stranger?|Steve Taylor's|Bart West's|Vincent Hughes's|Jack Quade's|Medium|No Stranger|Episode 34|Steve Taylor|Alcohol Withdrawal|Gabrielle Jaeger|Frank Campion|Medical Recovery
Which returning patient was found to have cancer after first appearing to have chickenpox in Throw Your Arms Around Me?|Ann-Maree|Adriana|Kenya Hutton|Tegan Willis|Medium|Throw Your Arms Around Me|Episode 35|Ann Maree|Bart West|Cancer Diagnosis|Suspected Chickenpox|Returning Patient
What extreme sport left Nick critically injured in Throw Your Arms Around Me?|BASE jumping|Paragliding|Cave diving|Mountain biking|Medium|Throw Your Arms Around Me|Episode 35|Nick|BASE Jump|Cate McMasters|Heath|High Risk Rescue
Who was Simon McDermott's mother, uneasy about Mike's role in her son's treatment in Throw Your Arms Around Me?|Laura|Eve|Maureen|Gabrielle|Hard|Throw Your Arms Around Me|Episode 35|Laura|Simon McDermott|Mike Vlasek|Mother Son Relationship|Recovery Tension
What procedure's failure was central to Charlotte and Jack's disagreement in Open Hearts?|An abortion|A heart transplant|A spinal tap|An appendectomy|Medium|Open Hearts|Episode 36|Charlotte Beaumont|Jack Quade|Failed Termination|Pregnant Patient|Clinical Disagreement
Who struggled to tell Erica he was avoiding hepatitis C counselling in Open Hearts?|Dan Goldman|Bart West|Frank Campion|Heath|Medium|Open Hearts|Episode 36|Dan Goldman|Erica Templeton|Hepatitis C|Counselling Avoidance|Relationship Strain
Which distressed patient mistook Dan for her missing boyfriend in True Confessions?|Tegan Willis|Ann-Maree|Kenya Hutton|Adriana|Medium|True Confessions|Episode 37|Tegan Willis|Dan Goldman|Missing Boyfriend|Delusional Identification|Frank Campion
Why did Colin Corrigan's apparent appendicitis diagnosis not make sense in True Confessions?|His appendix had already been removed|He was allergic to anaesthetic|He had no abdominal pain|His scan showed a broken rib|Hard|True Confessions|Episode 37|Colin Corrigan|Prior Appendectomy|Gabrielle Jaeger|Medical Records|Diagnostic Puzzle
What dangerous activity injured Brett Thomas in True Confessions?|Train surfing|BASE jumping|Firewalking|Illegal drag racing|Medium|True Confessions|Episode 37|Brett Thomas|Train Surfing|Electrocution|Jack Quade|Zoe Gallagher
Who acknowledged her romantic feelings for Bart during cancer treatment in True Confessions?|Ann-Maree|Charlotte Beaumont|Erica Templeton|Gabrielle Jaeger|Medium|True Confessions|Episode 37|Ann Maree|Bart West|Chemotherapy|Romantic Feelings|Von Ryan
What equipment failure contributed to a patient's death in Precious Time?|A faulty resuscitation bed|A defective ventilator|A broken defibrillator|A failed oxygen pipeline|Medium|Precious Time|Episode 38|Faulty Resus Bed|Patient Death|Frank Campion|Hospital Maintenance|Medical Accountability
Whom did Dan break up with as he decided to begin hepatitis C treatment in Precious Time?|Erica Templeton|Zoe Gallagher|Charlotte Beaumont|Cate McMasters|Medium|Precious Time|Episode 38|Erica Templeton|Dan Goldman|Relationship Breakup|Hepatitis C Therapy|Personal Choice
Which doctor sought to regain his hospital job in Precious Time?|Steve Taylor|Sean Everleigh|Mitch Stevens|Bart West|Medium|Precious Time|Episode 38|Steve Taylor|Frank Campion|Job Reinstatement|Alcohol Recovery|Employment
Which therapy did Dan begin in Cutting Free for hepatitis C?|Interferon treatment|Insulin injections|Radiotherapy|Dialysis|Hard|Cutting Free|Episode 39|Dan Goldman|Interferon|Hepatitis C Treatment|Medication Side Effects|Workplace Impact
Who investigated the leak of information about the faulty hospital bed in Cutting Free?|Oliver Maroney|Mike Vlasek|Patrick Wesley|Travis Knight|Medium|Cutting Free|Episode 39|Oliver Maroney|Director Of Medicine|Information Leak|Resus Bed|Hospital Inquiry
Which relative needed a kidney transplant, prompting Laura to approach Mike in Cutting Free?|Mike's son Simon|Frank's daughter Kathleen|Bart's brother Conrad|Sean's niece Molly|Medium|Cutting Free|Episode 39|Simon McDermott|Mike Vlasek|Laura|Kidney Transplant|Family Donor
What sporting event became a medical emergency for Jack, Erica, Gabrielle and Heath in Thin Ice?|An ice-hockey match|A rugby league final|A cricket match|A motor-racing event|Easy|Thin Ice|Episode 40|Ice Hockey|Jack Quade|Erica Templeton|Gabrielle Jaeger|Heath
How was an ice-hockey player seriously injured in Thin Ice?|His throat was cut by a skate blade|He was struck by a puck in the eye|He fractured his arm on the boards|He collapsed from heatstroke|Medium|Thin Ice|Episode 40|Ice Skate Blade|Throat Injury|Player Spectator Fight|Emergency Care|Arena Accident
What unusual object did a woman deliberately swallow to stop her boyfriend leaving her in Thin Ice?|A tack|A key|A ring|A coin|Medium|Thin Ice|Episode 40|Swallowed Tack|Relationship Distress|Erica Templeton|Self Injury|Emergency Patient
Who was behind the drug raid that shut down Emergency in Against the Wall (Part 1)?|James Byrne and accomplices|Patrick Wesley and Travis Knight|Colin and Barry Mitchell|Deanna Richardson and Beth Chandler|Easy|Against The Wall|Episode 41|James Byrne|Melissa|Armed Drug Raid|Hospital Siege|Season Finale
What organ transplant did young Georgina Feeney desperately need in the Season 10 finale?|Heart|Kidney|Liver|Lung|Medium|Against The Wall|Episode 41|Georgina Feeney|End Stage Heart Failure|Heart Transplant|Frank Campion|Dan Goldman
Where did the gunmen plant a time bomb in Against the Wall (Part 1)?|The laboratory|The hospital chapel|The cafeteria|The ambulance bay|Medium|Against The Wall|Episode 41|Hospital Laboratory|Time Bomb|Jack Quade|Ann Maree|Siege Cliffhanger
How long did the bomb planted in the laboratory have on its timer in Against the Wall (Part 1)?|Fifteen minutes|Five minutes|Thirty minutes|One hour|Hard|Against The Wall|Episode 41|Fifteen Minute Countdown|James Byrne|Laboratory Bomb|Season Finale|Hospital Threat`;

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
    throw new Error(`Invalid difficulty or question-specific tags in ${id}`);
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
  !questions.length || questions[0].id !== 'tv_24991' ||
  new Set(questions.map(q => q.id)).size !== questions.length ||
  new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length ||
  questions.some(q =>
    q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
    q.tags.length < 14 || !q.tags.includes('Programme: All Saints') ||
    q.dailyEligible !== true
  )
) throw new Error('Pack 429 exported question validation failed');

module.exports = questions;