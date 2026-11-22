// PuzzlePilot - The Bigggggg Quiz - Pack 426
// All Saints (Australia): Season 7 (2004), 40 episodes.
// Follows Pack 425. First ID: tv_24618.
// WordPad-ready CommonJS. Series finished in 2009; later seasons still require audit.
// Each row: question | correct answer | three distractors | difficulty | seven specific tags.
// Researched from 2004 episode guides and cast information.
'use strict';

const FIRST_ID = 24618;
const programme = 'All Saints';
const commonTags = [
  'Television', 'Australian Television', 'Australian Medical Drama',
  'All Saints', 'Programme: All Saints', 'Seven Network',
  'All Saints Western General Hospital', 'Emergency Department', 'Season 7', '2004'
];

const facts = `How many episodes were broadcast in the seventh season of All Saints?|40|41|43|37|Medium|40 Episodes|Season Length|Seventh Season|Episode Guide|Broadcast Count|Programme History|2004 Broadcast
Which episode opened All Saints Season 7?|One Day at a Time|Opening Up|Brave New World|Ground Zero|Easy|One Day At A Time|Episode 1|Premiere Title|February Broadcast|Season Opening|2004 Timeline|Episode Name
Which episode concluded All Saints Season 7?|The Season to Be Jolly|Cries for Help|The Last Resort|Panic Stations|Medium|The Season To Be Jolly|Episode 40|Finale Title|November Broadcast|Season Ending|Christmas Story|Episode Name
In which month did All Saints Season 7 begin airing in Australia?|February|January|March|April|Easy|17 February 2004|Season Premiere|Australian Broadcast|Television Scheduling|Broadcast Month|Seven Network|Series Timeline
Which actor joined the regular cast as emergency physician Frank Campion?|John Howard|Brett Climo|Christopher Gabardi|Martin Lynes|Medium|John Howard|Frank Campion|Emergency Department Head|Actor Identification|2004 Cast|Brave New World|New Character
Who portrayed the young emergency doctor Jack Quade?|Wil Traval|Conrad Coleby|Mark Priestley|Henry Nixon|Medium|Wil Traval|Jack Quade|Junior Doctor|Actor Identification|2004 Arrival|Terri Sullivan|Emergency Staff
Which actress played ambulance officer Cate McMasters?|Alexandra Davies|Natalie Saleeba|Georgie Parker|Celia Ireland|Medium|Alexandra Davies|Cate McMasters|Paramedic|Actor Identification|2004 Cast|Scott Zinenko|Ambulance Service
Who portrayed Emergency Department nurse Jessica Singleton?|Natalie Saleeba|Judith McGrath|Jenni Baird|Tammy MacIntosh|Medium|Natalie Saleeba|Jessica Singleton|Emergency Nurse|Actor Identification|2004 Debut|Dan Goldman|Staff Casting
Which actor played nurse Dan Goldman in the 2004 episodes?|Mark Priestley|Paul Tassone|Henry Nixon|Grant Bowler|Medium|Mark Priestley|Dan Goldman|Nurse Casting|Actor Identification|Emergency Shift Team|Jessica Singleton|2004 Arrival
Who portrayed ambulance officer Nigel 'Mac' MacPherson?|Grant Bowler|Conrad Coleby|Fletcher Humphrys|Brian Vriends|Hard|Grant Bowler|Nigel MacPherson|Mac|Paramedic Casting|Actor Identification|Cate McMasters|Emergency Services
Which actress portrayed Charlotte Beaumont's sister Sophia?|Adrienne Pickering|Katrina Campbell|Kimberley Joseph|Anne Looby|Hard|Adrienne Pickering|Sophia Beaumont|Charlotte Sister|Actress Identification|Agency Nurse|Family Relationship|2004 Guest Cast
Who played hospital executive Julia Archer in Season 7?|Anne Looby|Liz Alexander|Rachel Gordon|Sonia Todd|Hard|Anne Looby|Julia Archer|Hospital Chief Executive|Actress Identification|Ward Closure|Hospital Administration|2004 Casting
Which actress played Vincent Hughes's intern Grace Connelly?|Kimberley Joseph|Natalie Saleeba|Adrienne Pickering|Alexandra Davies|Hard|Kimberley Joseph|Grace Connelly|Medical Intern|Actress Identification|Vincent Hughes|Country Doctor Family|2004 Recurring Cast
Who portrayed Charlotte's romantic partner Addy in the 2004 episodes?|Katrina Campbell|Tammy MacIntosh|Natasha Beaumont|Jenni Baird|Hard|Katrina Campbell|Addy|Charlotte Beaumont|Actress Identification|Same Sex Relationship|Fertility Storyline|Recurring Cast
Who portrayed hospital manager Dr Alison Newell?|Liz Alexander|Anne Looby|Rachel Gordon|Judith McGrath|Hard|Liz Alexander|Alison Newell|Senior Management|Actress Identification|Hospital Politics|Frank Campion|Management Disputes
Which ward faced closure as Season 7 opened?|Ward 17|Ward 12|Ward 5|Ward 24|Easy|One Day At A Time|Episode 1|Ward 17|Closure Threat|Julia Archer|Nursing Staff|Hospital Cuts
Who was the new hospital chief executive monitoring the ward in One Day at a Time?|Julia Archer|Alison Newell|Joan Marden|Claudia MacKenzie|Medium|One Day At A Time|Episode 1|Julia Archer|Terri Sullivan|Staff Shortage|Ward Review|Management Pressure
Which colleague broke down near the site where Morris had been shot in One Day at a Time?|Regina Butcher|Charlotte Beaumont|Von Ryan|Paula Morgan|Medium|One Day At A Time|Episode 1|Regina Butcher|Morris|Shooting Aftermath|Traumatic Grief|Hospital Return
Who organised a blind date for Terri in Opening Up?|Regina Butcher|Charlotte Beaumont|Paula Morgan|Von Ryan|Medium|Opening Up|Episode 2|Regina Butcher|Terri Sullivan|Blind Date|Matchmaking|Ward Clerk
How was Regina's proposed date for Terri related to her?|He was her cousin|He was her uncle|He was her brother|He was her nephew|Hard|Opening Up|Episode 2|Regina Butcher|Cousin|Terri Sullivan|Date Arrangement|Family Matchmaking
What went wrong at a pre-wedding celebration in Happy Families?|A bucks-night prank seriously injured the groom|The reception hall burned down|The wedding rings were stolen|A guest crashed a helicopter|Medium|Happy Families|Episode 3|Bucks Night|Groom Injury|Sterlo|Best Man|Pre Wedding Disaster
Which man sought more access to his son Max in Happy Families?|Michael Plummer|Luke Forlano|Scott Zinenko|Matt Horner|Medium|Happy Families|Episode 3|Michael Plummer|Max Morgan|Paula Morgan|Father Son Access|Family Dispute
What was Sophia Beaumont's true relationship to Charlotte, initially mistaken for a former lover?|She was Charlotte's sister|She was Charlotte's mother|She was Charlotte's cousin|She was Charlotte's daughter|Medium|Happy Families|Episode 3|Sophia Beaumont|Charlotte Beaumont|Sisters|Mistaken Identity|Family Reunion
In Wolf, what kind of offender caused a dispute over the staff's duty to treat him?|A convicted child sex offender|An armed bank robber|A serial arsonist|A drug smuggler|Medium|Wolf|Episode 4|Assaulted Offender|Medical Ethics|Treatment Refusal|Nurse Disagreement|Patient Rights
Which organs did some nurses refuse to help save in Wolf?|The patient's reproductive organs|The patient's kidneys|The patient's lungs|The patient's liver|Hard|Wolf|Episode 4|Emergency Surgery|Reproductive Organs|Professional Duty|Assault Victim|Ethical Conflict
Who tried to persuade Paula Morgan to reunite their family in In Too Deep?|Michael Plummer|Vincent Hughes|Scott Zinenko|Jack Quade|Medium|In Too Deep|Episode 5|Michael Plummer|Paula Morgan|Max Morgan|Luke Forlano|Family Pressure
Where had Sophia's lonely patient met the man she planned to marry in In Too Deep?|An internet chatroom|A cruise ship|A hospital fundraiser|A university lecture|Medium|In Too Deep|Episode 5|Sophia Beaumont|Online Romance|Internet Chatroom|Marriage Plans|Patient Storyline
Who was transferred away from Ward 17 by Julia Archer in In Too Deep?|Nelson Curtis|Jared Levine|Von Ryan|Sterling McCormack|Medium|In Too Deep|Episode 5|Nelson Curtis|Julia Archer|Emergency Transfer|Terri Sullivan|Management Conflict
What vehicle was the child riding when Nelson struck her in Peripheral Vision?|A bicycle|A scooter|A skateboard|A go-kart|Easy|Peripheral Vision|Episode 6|Nelson Curtis|Cyclist Child|Road Accident|Intensive Care|Guilt
What procedure did Jack's patient want reversed secretly in Peripheral Vision?|Tubal ligation|Vasectomy|Appendectomy|Tonsillectomy|Hard|Peripheral Vision|Episode 6|Jack Quade|Tubal Ligation Reversal|Fertility|Husband Unaware|Medical Consent
Which couple were injured in an accident just before a major life event in Fight or Flight?|Matt Horner and Kirsten|Luke Forlano and Paula Morgan|Terri Sullivan and Vincent Hughes|Scott Zinenko and Cate McMasters|Medium|Fight Or Flight|Episode 7|Matt Horner|Kirsten|Ambulance Callout|Pregnant Partner|Wedding Day
Which pair of paramedics discovered their friends among the accident victims in Fight or Flight?|Scott and Alex|Cate and Mac|Ben and Bron|Rebecca and Scott|Medium|Fight Or Flight|Episode 7|Scott Zinenko|Alex Kearns|Matt Horner|Kirsten|Crash Response
What had a menacing criminal deliberately cut off in Prison Walls?|His hand|His ear|His foot|His thumb|Medium|Prison Walls|Episode 8|Prisoner Patient|Self Amputation|Bail Extension|Sophia Beaumont|Desperate Act
Which nurse pressed Nelson to confront his drinking problem in Prison Walls?|Von Ryan|Regina Butcher|Paula Morgan|Charlotte Beaumont|Medium|Prison Walls|Episode 8|Von Ryan|Nelson Curtis|Alcohol Dependence|Recovery Concern|Colleague Intervention
What rare condition was discovered in Terri Sullivan in Deceptions?|A tumour in her heart|A brain aneurysm|A lung infection|A kidney cyst|Easy|Deceptions|Episode 9|Terri Sullivan|Cardiac Tumour|Medical Diagnosis|Personal Mortality|Clinical Investigation
Which infection did a male patient conceal from his fiancée in Deceptions?|A sexually transmitted infection|Tuberculosis|Measles|Norovirus|Medium|Deceptions|Episode 9|Fiancee Deception|Sexually Transmitted Disease|Honesty|Patient Secret|Relationship Risk
What major change became permanent in A Place in the Heart?|The closure of Ward 17|The opening of a maternity wing|The closure of the ambulance service|A move to another hospital|Easy|A Place In The Heart|Episode 10|Ward 17 Closure|Hospital Restructure|Staff Redeployment|End Of An Era|Management Decision
What type of surgery did Terri undergo in A Place in the Heart?|Open-heart surgery|A kidney transplant|An appendectomy|Spinal fusion|Medium|A Place In The Heart|Episode 10|Terri Sullivan|Cardiac Tumour|Open Heart Operation|Biopsy Question|Surgical Patient
Which nursing qualification did Von Ryan achieve in A Place in the Heart?|Registered nurse|Nurse practitioner|Midwife|Paramedic|Medium|A Place In The Heart|Episode 10|Von Ryan|Registered Nurse|Professional Qualification|Career Milestone|Nursing Studies
Who took charge of the Emergency Department in Brave New World?|Frank Campion|Malcolm Pussle|Luke Forlano|Vincent Hughes|Easy|Brave New World|Episode 11|Frank Campion|Emergency Consultant|New Boss|Ward Staff Transfer|Medical Leadership
What object was lodged inside a patient being treated by Vincent and Sterlo in Brave New World?|A mobile phone|A golf ball|A toothbrush|A small flashlight|Hard|Brave New World|Episode 11|Vincent Hughes|Sterlo McCormack|Rectal Foreign Body|Unusual Patient|Emergency Treatment
In which American city was Luke Forlano offered a new medical job in Brave New World?|New York|Boston|Chicago|Los Angeles|Medium|Brave New World|Episode 11|Luke Forlano|New York Job|American Opportunity|Career Departure|Hospital Transfer
Who had to decide whether to follow Luke overseas in Bad Pennies?|Paula Morgan|Charlotte Beaumont|Regina Butcher|Von Ryan|Easy|Bad Pennies|Episode 12|Paula Morgan|Luke Forlano|Max Morgan|Moving Abroad|Family Decision
Which young patient sought confidential treatment from Charlotte in Bad Pennies?|A 15-year-old Muslim girl|A six-year-old boy|A retired nurse|A pregnant police officer|Medium|Bad Pennies|Episode 12|Charlotte Beaumont|Yasmin Hayek|Confidential Care|Teenage Patient|Family Consent
What was new for Terri in Ground Zero?|Her first working day in Emergency|Her first shift as a paramedic|Her first day as a medical student|Her return to a maternity ward|Easy|Ground Zero|Episode 13|Terri Sullivan|Emergency Department|New Position|Frank Campion|Staff Adjustment
What object had impaled the patient whose family Terri comforted in Ground Zero?|An iron bar|A wooden fence post|A metal bicycle pedal|A glass bottle|Medium|Ground Zero|Episode 13|Impaled Patient|Iron Bar|Terri Sullivan|Family Support|Emergency Trauma
Which patient's potential organ donation raised difficult consent questions in Life After Death?|A Chinese boy|An elderly priest|A teenage swimmer|A hospital porter|Medium|Life After Death|Episode 14|Chinese Boy|Organ Donation|Family Consent|Violent Assault|Transplant Ethics
Which patient's pregnancy caused Frank to raise a controversial question in Life After Death?|A woman with Down syndrome|A woman with cystic fibrosis|A woman with epilepsy|A woman with lupus|Medium|Life After Death|Episode 14|Frank Campion|Down Syndrome|Pregnancy Ethics|Grandfather Pressure|Patient Autonomy
Which ambulance officer witnessed a shooting and faced a moral decision in Zero Tolerance?|Alex Kearns|Scott Zinenko|Cate McMasters|Nigel MacPherson|Medium|Zero Tolerance|Episode 15|Alex Kearns|Witnessed Shooting|Moral Choice|Ambulance Officer|Professional Dilemma
Which doctor faced a threat of legal action from a grieving parent in Zero Tolerance?|Charlotte Beaumont|Vincent Hughes|Jack Quade|Luke Forlano|Medium|Zero Tolerance|Episode 15|Charlotte Beaumont|Grieving Parent|Litigation Threat|Professional Conduct|Patient Death
Which hazard forced Emergency staff into isolation in Meltdown?|Suspected radiation contamination|A chlorine gas cloud|A measles outbreak|A kitchen fire|Easy|Meltdown|Episode 16|Radiation Scare|Emergency Lockdown|Contaminated Patient|Hospital Safety|Staff Isolation
Which doctor unexpectedly drove his car into a wall to attract Terri's attention in Meltdown?|Jack Quade|Vincent Hughes|Frank Campion|Luke Forlano|Hard|Meltdown|Episode 16|Jack Quade|Terri Sullivan|Car Crash|Romantic Pursuit|Emergency Staff
Who became Scott Zinenko's new ambulance partner in Meltdown?|Cate McMasters|Rebecca Green|Bron Craig|Paula Morgan|Medium|Meltdown|Episode 16|Cate McMasters|Scott Zinenko|New Partner|Ambulance Service|Staff Introduction
What investigation put Sterlo under suspicion in Into the Fire?|The theft of prohibited drugs|A missing hospital laptop|A forged medical diploma|A patient jewellery theft|Medium|Into The Fire|Episode 17|Sterlo McCormack|Drug Theft|Nelson Curtis|Police Investigation|Hospital Misconduct
What did Sterlo steal from a patient's jacket in Into the Fire?|Hidden cash|A passport|Prescription forms|A mobile phone|Hard|Into The Fire|Episode 17|Sterlo McCormack|Patient Jacket|Concealed Money|Drug Debt|Police Pursuit
Who was Charlotte romantically involved with during Into the Fire?|Megan|Addy|Grace|Sophia|Medium|Into The Fire|Episode 17|Charlotte Beaumont|Megan|Romantic Relationship|Staff Private Life|Same Sex Partner
Which young patient needed a bone marrow transplant in Clean?|Georgia Price|Yasmin Hayek|April|Lana|Medium|Clean|Episode 18|Georgia Price|Bone Marrow Transplant|Charlotte Beaumont|Paediatric Patient|Donor Search
What family secret complicated finding a donor for Georgia Price in Clean?|Her father Ray was not her biological father|Her mother had been adopted|Her brother was her twin|Her grandparents were cousins|Medium|Clean|Episode 18|Georgia Price|Ray Price|Biological Father|Donor Compatibility|Family Secret
What caused Sterlo's serious infection in Clean?|A dirty injection needle|A contaminated blood transfusion|A spider bite|An infected tattoo|Medium|Clean|Episode 18|Sterlo McCormack|Dirty Needle|Drug Use|Severe Infection|Ambulance Rescue
What kind of calls repeatedly distracted Scott and Cate in Under the Skin?|Hoax ambulance calls|False fire alarms|Wrong-number surgical requests|Fraudulent charity calls|Medium|Under The Skin|Episode 19|Scott Zinenko|Cate McMasters|Serial Hoaxer|Ambulance Delays|Emergency Dispatch
What disturbing sight triggered Scott's memory of his father's death in Under the Skin?|A dummy hanging from a tree|A stuffed bear on a fence|A mannequin tied to a car|A doll floating in water|Hard|Under The Skin|Episode 19|Scott Zinenko|Hanging Dummy|Father Suicide|Traumatic Memory|Hoax Caller
What illness did Jack mistakenly suspect before discovering a dental-source infection in Feet of Clay?|Meningitis|Malaria|Leukaemia|Epilepsy|Hard|Feet Of Clay|Episode 20|Jack Quade|Meningitis Suspicion|Dental Abscess|Sepsis|Diagnostic Error
Which condition explained the student's collapse after a root canal infection in Feet of Clay?|Sepsis|A stroke|Diabetic ketoacidosis|An allergic reaction|Medium|Feet Of Clay|Episode 20|Dental Infection|Sepsis|Root Canal Abscess|Unconscious Patient|Diagnosis
Who joined Vincent Hughes as an intern in Feet of Clay?|Grace Connelly|Charlotte Beaumont|Sophia Beaumont|Jessica Singleton|Medium|Feet Of Clay|Episode 20|Grace Connelly|Vincent Hughes|Medical Intern|Clinical Experience|Country Practice
What injury was found in eleven-year-old Callum Chifley in Pecking Order?|A brain tumour|A fractured pelvis|A ruptured spleen|A kidney infection|Medium|Pecking Order|Episode 21|Callum Chifley|Brain Tumour|Vincent Hughes|Child Patient|Neurosurgery
Which hospital event raised pressure on the Emergency Department in Pecking Order?|An international medical conference|A nursing graduation|A charity football match|A hospital inspection by firefighters|Medium|Pecking Order|Episode 21|International Conference|Hospital Politics|Frank Campion|Departmental Pressure|Visiting Doctors
Why did Charlotte end her relationship with Addy in Luck of the Draw?|She wanted to have a baby|She planned to leave medicine|She was moving to London|She had accepted a job in Melbourne|Medium|Luck Of The Draw|Episode 22|Charlotte Beaumont|Addy|Motherhood Ambition|Relationship Breakup|Fertility Plans
What suspected injury was Charlotte treating in a three-month-old baby in Luck of the Draw?|Shaken baby syndrome|A dog bite|A fractured ankle|An allergic rash|Medium|Luck Of The Draw|Episode 22|Infant Patient|Shaken Baby Syndrome|Charlotte Beaumont|Child Protection|Family Investigation
Which young patient returned injured after confidential care from Charlotte in Consequences?|Yasmin Hayek|Georgia Price|Grace Connelly|April|Medium|Consequences|Episode 23|Yasmin Hayek|Charlotte Beaumont|Teenage Patient|Family Conflict|Previous Treatment
What serious internal injury did Yasmin suffer in Consequences?|A ruptured spleen|A punctured lung|A fractured skull|A torn kidney|Hard|Consequences|Episode 23|Yasmin Hayek|Ruptured Spleen|Emergency Surgery|Domestic Dispute|Medical Crisis
What occasion was Eleni Caridakis travelling to celebrate before the crash in When Worlds Collide?|Her daughter's sixteenth birthday|Her wedding anniversary|Her son's university graduation|Her retirement|Hard|When Worlds Collide|Episode 24|Eleni Caridakis|Sixteenth Birthday|Family Road Trip|Multiple Vehicle Accident|Tragic Collision
Which doctor stopped at a multi-vehicle accident and organised the response in When Worlds Collide?|Frank Campion|Vincent Hughes|Jack Quade|Luke Forlano|Medium|When Worlds Collide|Episode 24|Frank Campion|Road Accident|Scene Leadership|Emergency Care|Ambulance Coordination
What pet was elderly crash patient Joe McLean worried about in When Worlds Collide?|His cat Edgar|His dog Max|His parrot Charlie|His rabbit Lucy|Hard|When Worlds Collide|Episode 24|Joe McLean|Edgar Cat|Elderly Driver|Veterinary Visit|Road Accident
What were the unusual wounds of homeless patient John Carpenter in Mind Over Matter?|Pierced hands resembling stigmata|Burns shaped like a cross|Scars around his ankles|A rash across his forehead|Hard|Mind Over Matter|Episode 25|John Carpenter|Moses|Stigmata|Religious Belief|Church Patient
What emergency item was stolen when Scott and Cate's ambulance was burgled in Mind Over Matter?|A defibrillator|An oxygen cylinder|A stretcher|A blood-pressure cuff|Medium|Mind Over Matter|Episode 25|Scott Zinenko|Cate McMasters|Ambulance Burglary|Missing Defibrillator|Street Crime
Which neurosurgeon operated on young Callum Chifley in Mind Over Matter?|Oscar Wu|Malcolm Pussle|Frank Campion|Richard Craig|Hard|Mind Over Matter|Episode 25|Oscar Wu|Callum Chifley|Brain Tumour|Neurosurgery|Vincent Hughes
What illness affected Grace Connelly's father in Falling from Grace?|Advanced Parkinson's disease|Lung cancer|Multiple sclerosis|Alzheimer's disease|Medium|Falling From Grace|Episode 26|Doc Connelly|Parkinson Disease|Grace Connelly|Country Doctor|Failing Eyesight
Who stayed with Grace Connelly at her family home in Falling from Grace?|Vincent Hughes|Jack Quade|Frank Campion|Scott Zinenko|Medium|Falling From Grace|Episode 26|Vincent Hughes|Grace Connelly|Romantic Weekend|Family Secrets|Country Visit
What medical emergency afflicted pregnant patient Lana in Bad Seed after she left Emergency?|An eclamptic seizure|An asthma attack|A ruptured appendix|A broken ankle|Medium|Bad Seed|Episode 27|Lana|Eclampsia|Pregnancy Emergency|Hospital Waiting Time|Shopping Centre
Which new ambulance officer helped Scott and Cate with pregnant patient Lana in Bad Seed?|Nigel|Ben|Alex|Matt|Medium|Bad Seed|Episode 27|Nigel MacPherson|Scott Zinenko|Cate McMasters|Eclamptic Patient|Off Duty Rescuer
What was being filmed in the Emergency Department in Out of Focus?|A television documentary|A feature film|A hospital advertisement|A training video for police|Easy|Out Of Focus|Episode 28|Television Crew|Emergency Documentary|Staff Interviews|Publicity|Hospital Life
Which department's working day was the focus of the film crew in Out of Focus?|Emergency|Maternity|Radiology|Pathology|Medium|Out Of Focus|Episode 28|Emergency Department|Documentary Team|Staff Pressures|Television Filming|Public Perception
Which paramedic asked for a different ambulance partner in Odd Couples?|Cate McMasters|Scott Zinenko|Alex Kearns|Rebecca Green|Medium|Odd Couples|Episode 29|Cate McMasters|Scott Zinenko|Partner Change Request|Ambulance Service|Workplace Tension
Who was offered Nelson's nursing-management job after he resigned in Odd Couples?|Terri Sullivan|Regina Butcher|Jessica Singleton|Von Ryan|Medium|Odd Couples|Episode 29|Terri Sullivan|Nelson Curtis|Nursing Unit Manager|Emergency Management|Career Promotion
Which of Von's relatives arrived seriously ill in Benefit of the Doubt?|Her sister Anne|Her daughter Kerry|Her brother John|Her father Ryan|Medium|Benefit Of The Doubt|Episode 30|Von Ryan|Anne|Terminal Cancer|Family Estrangement|Emergency Admission
Which paramedic was reported for breaking protocol after saving a badly burned worker in Benefit of the Doubt?|Mac MacPherson|Cate McMasters|Scott Zinenko|Alex Kearns|Medium|Benefit Of The Doubt|Episode 30|Nigel MacPherson|Scott Zinenko|Protocol Breach|Burns Rescue|Paramedic Complaint
Why did Regina face a difficult employment decision in Benefit of the Doubt?|A patient died after missing records and an interpreter were not arranged|She arrived late for a charity ball|She lost a doctor's mobile phone|She missed a shift because of a wedding|Hard|Benefit Of The Doubt|Episode 30|Regina Butcher|Patient Death|Missing Medical Records|Interpreter Delay|Terri Sullivan
Which two doctors had a secret encounter that threatened their relationships in Don't Look Back?|Charlotte and Jack|Charlotte and Vincent|Terri and Frank|Jessica and Dan|Medium|Dont Look Back|Episode 31|Charlotte Beaumont|Jack Quade|Secret Affair|Terri Sullivan|Relationship Risk
What important decision did Von consider as her sister's condition worsened in Don't Look Back?|Put her family before her career|Transfer to London|Return to paramedic training|Join the police force|Medium|Dont Look Back|Episode 31|Von Ryan|Anne|Family Priorities|Terminal Illness|Career Decision
Who secretly put alcohol in Nelson's orange juice before the events of Karma?|Dan Goldman|Frank Campion|Jack Quade|Vincent Hughes|Hard|Karma|Episode 32|Dan Goldman|Nelson Curtis|Alcohol Relapse|Orange Juice|Night Out
Which ambulance officer quit the service in Karma?|Scott Zinenko|Cate McMasters|Nigel MacPherson|Alex Kearns|Easy|Karma|Episode 32|Scott Zinenko|Ambulance Service|Resignation|Career Exit|2004 Departure
What chemical scare brought crowds of frightened people to Emergency in Panic Stations?|Cyanide|Chlorine|Ammonia|Mercury|Easy|Panic Stations|Episode 33|Cyanide Spill|Mass Panic|Emergency Overload|Chemical Exposure|Triage
What pregnancy secret was Charlotte keeping during Panic Stations?|She was carrying Jack's baby|She was expecting Vincent's twins|She had adopted a newborn|She was a surrogate for Addy|Medium|Panic Stations|Episode 33|Charlotte Beaumont|Jack Quade|Unexpected Pregnancy|Paternity Secret|Romance
What did Charlotte initially do after Frank criticised her career commitment in Three Strikes?|Resigned|Transferred to maternity|Became a paramedic|Requested unpaid leave abroad|Medium|Three Strikes|Episode 34|Charlotte Beaumont|Frank Campion|Resignation|Emergency Career|Workplace Dispute
Which colleague persuaded Charlotte to seek Emergency Fellowship training in Three Strikes?|Vincent Hughes|Terri Sullivan|Jack Quade|Nelson Curtis|Medium|Three Strikes|Episode 34|Vincent Hughes|Charlotte Beaumont|Emergency Fellowship|Professional Support|Career Development
Which former ward clerk was reinstated after an unfair dismissal complaint in Three Strikes?|Regina Butcher|Tony Hurst|Jodi Horner|Matt Horner|Medium|Three Strikes|Episode 34|Regina Butcher|Terri Sullivan|Unfair Dismissal|Reinstatement|Clerical Staff
What outbreak on a cruise ship sent Jack and Terri into action in Out on a Limb?|Suspected food poisoning|An influenza epidemic|A radiation leak|A norovirus outbreak confirmed by tests|Medium|Out On A Limb|Episode 35|Cruise Ship|Food Poisoning|Jack Quade|Terri Sullivan|Passenger Illness
What concern at a brothel did Cate and Mac investigate in Out on a Limb?|A girl apparently underage|Missing ambulance equipment|A forged medical licence|An illegal pharmaceutical laboratory|Medium|Out On A Limb|Episode 35|Cate McMasters|Nigel MacPherson|Underage Girl|Brothel Investigation|Child Protection
Which nurse took on a new staff-education role in Out on a Limb?|Nelson Curtis|Dan Goldman|Jessica Singleton|Von Ryan|Medium|Out On A Limb|Episode 35|Nelson Curtis|Staff Educator|Emergency Team|Training Conflict|New Role
What opportunity was Charlotte in danger of missing while treating a patient in The Extra Mile?|Her Emergency Fellowship interview|Her wedding ceremony|A flight to Paris|A nursing licence examination|Medium|The Extra Mile|Episode 36|Charlotte Beaumont|Fellowship Interview|Patient Advocacy|Career Opportunity|Emergency Medicine
Who arranged another interview for Charlotte after she missed her first one in The Extra Mile?|Frank Campion|Vincent Hughes|Jack Quade|Alison Newell|Medium|The Extra Mile|Episode 36|Frank Campion|Charlotte Beaumont|Second Interview|Professional Backing|Medical Training
Which emergency operation did Vincent perform on Jessica in The Extra Mile?|Appendectomy|Gallbladder removal|Kidney transplant|Heart bypass|Medium|The Extra Mile|Episode 36|Vincent Hughes|Jessica Singleton|Appendicitis|Emergency Surgery|Romantic Misunderstanding
Which two ambulance officers were taken hostage in On the Brink?|Cate and Mac|Scott and Alex|Ben and Rebecca|Paula and Nelson|Easy|On The Brink|Episode 37|Cate McMasters|Nigel MacPherson|Ambulance Hostages|Armed Gunman|Emergency Rescue
Which young woman brought into Emergency helped Vincent investigate the gunman's violence in On the Brink?|April|Georgia|Yasmin|Lana|Medium|On The Brink|Episode 37|April|Vincent Hughes|Gunshot Victim|Domestic Violence|Police Report
What medical condition did Jack diagnose in an aggressive patient in The Last Resort?|Frontotemporal dementia|Schizophrenia|Meningitis|Multiple sclerosis|Hard|The Last Resort|Episode 38|Jack Quade|Frontotemporal Dementia|Aggressive Patient|Family Disclosure|Clinical Compassion
What object impaled a man inside his vehicle in The Last Resort?|A pole through the windscreen|A fallen tree branch|A metal fence gate|A bicycle frame|Medium|The Last Resort|Episode 38|Impaled Passenger|Cate McMasters|Nigel MacPherson|Car Crash|Rescue Procedure
Who did Charlotte confide in after being kicked in the stomach and fearing for her pregnancy in The Last Resort?|Nelson Curtis|Terri Sullivan|Jack Quade|Regina Butcher|Medium|The Last Resort|Episode 38|Charlotte Beaumont|Nelson Curtis|Pregnancy Scare|Unborn Baby|Confidant
Which type of medical procedure did Vincent undertake in Emergency despite the risks in Cries for Help?|An orthopaedic procedure|A heart transplant|A caesarean section|A cataract operation|Hard|Cries For Help|Episode 39|Vincent Hughes|Orthopaedic Procedure|Emergency Surgery|Professional Risk|Operating Theatre Unavailable
Whose recent death left Von struggling with grief in Cries for Help?|Her sister Anne's|Her husband Morris's|Her colleague Mitch's|Her father Ryan's|Medium|Cries For Help|Episode 39|Von Ryan|Anne|Bereavement|Family Tragedy|Young Patient
Who learned he was the father of Charlotte's baby in The Season to Be Jolly?|Jack Quade|Vincent Hughes|Frank Campion|Dan Goldman|Easy|The Season To Be Jolly|Episode 40|Jack Quade|Charlotte Beaumont|Pregnancy Revelation|Fatherhood|Season Finale
Which pair finally admitted their romantic feelings in The Season to Be Jolly?|Cate and Mac|Jessica and Vincent|Regina and Frank|Von and Nelson|Medium|The Season To Be Jolly|Episode 40|Cate McMasters|Nigel MacPherson|Love Confession|Ambulance Romance|Finale
Which character surprised staff by dressing up as Santa in the 2004 finale?|Frank Campion|Jack Quade|Vincent Hughes|Nelson Curtis|Hard|The Season To Be Jolly|Episode 40|Frank Campion|Santa Claus|Christmas Celebration|Regina Butcher|Seasonal Staff Surprise
What group was involved in a tragic road accident on the way to a Christmas party in the finale?|Children with cancer|Retired hospital nurses|Ambulance recruits|A school football team|Medium|The Season To Be Jolly|Episode 40|Paediatric Cancer|Christmas Party|Road Accident|Frank Campion|Terminal Illness`;


// 2004 Season 7 episode and 2005 Logie audit; preserve original question IDs.
const AUDIT_ORIGINAL_COUNT = 113;
const AUDIT_FIRST_ID = 42236;
const auditFacts = `Which All Saints actress received a 2005 Gold Logie nomination?|Georgie Parker|Libby Tanner|Judith McGrath|Natalie Saleeba|Medium|2005 Logies|Georgie Parker|Gold Logie nomination|Terri Sullivan|popular personality|award recognition|Australian television
Which All Saints actor was nominated for Most Popular New Male Talent at the 2005 Logies?|Wil Traval|John Howard|Conrad Coleby|Mark Priestley|Medium|2005 Logies|Wil Traval|Jack Quade|new male talent nomination|acting recognition|Australian awards|Emergency doctor
Which All Saints actress was nominated for Most Popular New Female Talent at the 2005 Logies?|Natalie Saleeba|Tammy MacIntosh|Georgie Parker|Celia Ireland|Medium|2005 Logies|Natalie Saleeba|Jessica Singleton|new female talent nomination|acting recognition|Australian awards|Emergency nurse
In which programme category was All Saints nominated at the 2005 Logie Awards?|Most Popular Australian Drama Series|Most Popular Australian Comedy|Most Outstanding News Coverage|Most Popular Reality Show|Medium|2005 Logies|Most Popular Australian Drama Series|programme nomination|Seven Network|Australian television|industry awards|not a win
Which All Saints episode first switched the main setting from Ward 17 to the Emergency Department?|Brave New World|One Day at a Time|A Place in the Heart|Ground Zero|Medium|Brave New World|2004 overhaul|Emergency Department|episode eleven|new setting|Frank Campion|production change
Which instrument featured in the revised All Saints opening theme for Series 7?|Saxophone|Trumpet|Accordion|Flute|Medium|opening titles|saxophone|series seven|2004|theme music|Emergency overhaul|production design
What imagery featured in the revamped All Saints opening sequence for Series 7?|Ambulances and emergency equipment|A city skyline and beach|A police station and courtroom|A university and lecture theatre|Medium|opening credits|ambulances|emergency equipment|2004 revamp|title sequence|visual design|Emergency Department
Which All Saints episode prompted complaints about Frank Campion's use of strong language?|Brave New World|The Season to Be Jolly|Panic Stations|Opening Up|Medium|Brave New World|Frank Campion|2004 controversy|coarse language|viewer complaints|Seven Network|episode eleven
What classification did Seven Network cite to defend strong language in the All Saints episode Brave New World?|M classification|G classification|MA15 classification|C classification|Medium|Brave New World|M classification|2004 controversy|Seven Network|coarse language|broadcast standards|network response
Which All Saints episode was directed by Catherine Millar and written by Sarah Walker during the Emergency overhaul?|Brave New World|One Day at a Time|The Last Resort|Out on a Limb|Medium|Catherine Millar|Sarah Walker|Brave New World|2004|episode eleven|director and writer|production credits
Which family member of Frank Campion had autism in All Saints Series 7?|His daughter Kathleen|His brother Peter|His wife Martha|His son Daniel|Medium|Frank Campion|Kathleen Campion|autism|family storyline|Emergency chief|2004|domestic tension
Which actress portrayed Frank Campion's daughter Kathleen in All Saints Series 7?|Trilby Beresford|Adrienne Pickering|Natalie Saleeba|Kimberley Joseph|Medium|Trilby Beresford|Kathleen Campion|Frank Campion|autism|2004 guest cast|family drama|performer
In All Saints episode Opening Up which doctor was frustrated when a young resident solved a diagnosis first?|Charlotte Beaumont|Vincent Hughes|Frank Campion|Luke Forlano|Medium|Opening Up|Charlotte Beaumont|young resident|diagnosis competition|2004|professional rivalry|episode two
In All Saints episode Happy Families who was the best man at the disastrous pre-wedding celebration?|Sterling McCormack|Nelson Curtis|Dan Goldman|Scott Zinenko|Medium|Happy Families|Sterling McCormack|best man|bucks night|2004|wedding prank|episode three
In All Saints episode In Too Deep whose feelings for Vincent Hughes became apparent?|Sophia Beaumont|Cate McMasters|Jessica Singleton|Paula Morgan|Medium|In Too Deep|Sophia Beaumont|Vincent Hughes|unrequited feelings|internet romance|2004|episode five
In All Saints episode Brave New World whose proposals for changes clashed with Frank Campion?|Sophia Beaumont|Regina Butcher|Cate McMasters|Grace Connelly|Medium|Brave New World|Sophia Beaumont|Frank Campion|new department|change proposals|2004|episode eleven
In All Saints episode Zero Tolerance which younger doctor had begun attracting Terri Sullivan's attention?|Jack Quade|Vincent Hughes|Luke Forlano|Malcolm Pussle|Medium|Zero Tolerance|Terri Sullivan|Jack Quade|new romance|2004|age difference|episode fifteen
In All Saints episode Under the Skin what did a grieving mother blame Charlotte Beaumont for?|The death of her son|A mistaken cancer diagnosis|The loss of her savings|A failed kidney transplant|Medium|Under the Skin|Charlotte Beaumont|grieving mother|patient death|accountability|2004|episode nineteen
In All Saints episode Pecking Order which doctor challenged a senior colleague about treating a young boy?|Vincent Hughes|Frank Campion|Jack Quade|Luke Forlano|Medium|Pecking Order|Vincent Hughes|senior doctor|young boy|treatment disagreement|2004|episode twenty one
In All Saints episode Luck of the Draw which ambulance officer witnessed a stranger give his life to save another?|Cate McMasters|Scott Zinenko|Alex Kearns|Nigel MacPherson|Medium|Luck of the Draw|Cate McMasters|self sacrifice|rescuer|traumatic memories|2004|episode twenty two
In All Saints episode Consequences whose difficulties with his daughter influenced how he treated families in crisis?|Frank Campion|Vincent Hughes|Nelson Curtis|Jack Quade|Medium|Consequences|Frank Campion|family problems|daughter Kathleen|patient families|2004|episode twenty three
In All Saints episode Bad Seed which Emergency nurse was affected by post-traumatic stress?|Jessica Singleton|Regina Butcher|Von Ryan|Charlotte Beaumont|Medium|Bad Seed|Jessica Singleton|post traumatic stress|Emergency nurse|2004|trauma|episode twenty seven
In All Saints episode Odd Couples which nurse became attached to an injured prison-van passenger?|Jessica Singleton|Von Ryan|Regina Butcher|Cate McMasters|Medium|Odd Couples|Jessica Singleton|injured nurse|prison van|Dan Goldman|patient attachment|episode twenty nine
In All Saints episode Benefit of the Doubt which management role did Terri Sullivan take over from Nelson?|Nursing Unit Manager of Emergency|Chief of Surgery|Hospital Chief Executive|Ambulance Supervisor|Medium|Benefit of the Doubt|Terri Sullivan|Nelson Curtis|Emergency NUM|management change|2004|episode thirty
In All Saints episode Don't Look Back which two doctors disagreed over the care of a pregnant patient with Down syndrome?|Frank Campion and Vincent Hughes|Terri Sullivan and Luke Forlano|Jack Quade and Malcolm Pussle|Charlotte Beaumont and Oscar Wu|Medium|Dont Look Back|Frank Campion|Vincent Hughes|Down syndrome|pregnancy|medical ethics|2004
In All Saints episode Karma whose death left Vincent Hughes grieving?|Grace Connelly|Sophia Beaumont|Regina Butcher|Paula Morgan|Medium|Karma|Vincent Hughes|Grace Connelly|grief|professional relationships|2004|episode thirty two
In All Saints episode The Extra Mile who realised Jessica Singleton had feelings for him?|Vincent Hughes|Jack Quade|Frank Campion|Dan Goldman|Medium|The Extra Mile|Jessica Singleton|Vincent Hughes|unspoken feelings|nursing staff|2004|episode thirty six
In All Saints episode Cries for Help what secret nearly cost an unfaithful patient his life?|An extramarital affair|A fraudulent insurance claim|An undisclosed adoption|A secret gambling debt|Medium|Cries for Help|unfaithful patient|secrecy|medical emergency|staff relationships|2004|episode thirty nine`;

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
    throw new Error(`Invalid difficulty or question-specific tags in ${id}`);
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
  !questions.length || questions[0].id !== 'tv_24618' ||
  new Set(questions.map(q => q.id)).size !== questions.length ||
  new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length ||
  questions.some(q =>
    q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
    q.tags.length < 14 || !q.tags.includes('Programme: All Saints') ||
    q.dailyEligible !== true
  )
) throw new Error('Pack 426 exported question validation failed');

module.exports = questions;