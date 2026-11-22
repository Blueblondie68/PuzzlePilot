// PuzzlePilot - The Bigggggg Quiz - Pack 423
// All Saints (Australia): Season 4 (2001), 43 episodes.
// Follows Pack 422. First ID: tv_24283.
// WordPad-ready CommonJS. All Saints finished in 2009; later seasons still require audit.
// Question | correct | 3 distractors | difficulty | 7 specific tags.
// Researched against 2001 episode synopses and cast guides.
'use strict';

const FIRST_ID = 24283;
const programme = 'All Saints';
const commonTags = [
  'Television', 'Australian Television', 'Medical Drama',
  'All Saints', 'Programme: All Saints', 'Seven Network',
  'All Saints Western General Hospital', 'Ward 17', 'Season 4', '2001'
];

const facts = `How many episodes made up the fourth season of All Saints?|43|41|39|46|Medium|43 Episodes|Episode Count|Season Four|Series Length|Broadcast History|Australian Drama|Season Structure
In which year did Season 4 of All Saints first air in Australia?|2001|1999|2000|2002|Easy|2001 Broadcast|Season Four|Premiere Year|Series Timeline|Broadcast Debut|Original Transmission|Programme Chronology
Which episode opened All Saints Season 4?|The Heat Is On|Happy Birthday|What Katie Did Next|Falling Down|Easy|The Heat Is On|Episode 1|Season Premiere|Bushfire Story|Opening Episode|2001 Broadcast|Episode Title
Which episode concluded Season 4 of All Saints?|Falling Down|Heartache|A Little Death|Life As We Know It|Easy|Falling Down|Episode 43|Season Finale|Rose Stevens|Final Episode|November Broadcast|Episode Title
Which actor played ambulance officer Scott Zinenko in Season 4?|Conrad Coleby|Brian Vriends|Erik Thomson|Jeremy Cumpston|Medium|Conrad Coleby|Scott Zinenko|Ambulance Officer|Actor Identification|2001 New Cast|Ben Markham Partner|Emergency Services
Which actress played acting nursing manager Kate Larsen?|Sonia Todd|Georgie Parker|Judith McGrath|Joy Smithers|Medium|Sonia Todd|Kate Larsen|Actress Identification|Nursing Unit Manager|Ward Leadership|Alcohol Dependency|2001 Cast
Which actor portrayed Dr Malcolm Pussle during Season 4?|Brett Climo|Martin Lynes|Andrew McKaige|Erik Thomson|Medium|Brett Climo|Malcolm Pussle|Actor Identification|Head Of Medicine|Terri Sullivan|New Hospital Doctor|2001 Cast
Which actor played Jodi Horner's brother Matt?|Josh Quong Tart|Ben Tari|Conrad Coleby|Jake Blundell|Hard|Josh Quong Tart|Matt Horner|Jodi Horner|Actor Identification|Ward Clerk|Sibling Relationship|2001 Arrival
Which actress portrayed ambulance officer Rebecca Green?|Natasha Beaumont|Belinda Emmett|Ling-Hsueh Tang|Joy Smithers|Hard|Natasha Beaumont|Rebecca Green|Ambulance Officer|Scott Zinenko|Actress Identification|2001 Cast|Paramedic Team
Which actress portrayed nurse Paula Morgan, a late-season addition?|Jenni Baird|Sonia Todd|Celia Ireland|Belinda Emmett|Hard|Jenni Baird|Paula Morgan|Registered Nurse|Actress Identification|2001 New Staff|Clinical Appointment|Falling Down
Which actor portrayed nurse practitioner Nelson Curtis in the finale?|Paul Tassone|Brett Climo|Conrad Coleby|Jake Blundell|Hard|Paul Tassone|Nelson Curtis|Nurse Practitioner|Actor Identification|Permanent Staff|2001 Finale|Clinical Appointment
What was the surname of Ben Markham's new ambulance partner Scott?|Zinenko|Costello|Forlano|Pussle|Medium|Scott Zinenko|Ben Markham|Surname Question|Paramedic Partner|2001 Staff|Ambulance Crew|New Colleague
Which natural disaster endangered Ben and Scott in The Heat Is On?|A bushfire|A cyclone|An earthquake|A flash flood|Easy|The Heat Is On|Episode 1|Ben Markham|Scott Zinenko|Bushfire|Ambulance Trapped|Summer Heatwave
What did Terri decide to take at the end of The Heat Is On?|A three-month holiday|A permanent hospital transfer|Early retirement|A university scholarship|Medium|The Heat Is On|Episode 1|Terri Sullivan|Leave Of Absence|Rose Stevens|Personal Decision|Hospital Absence
Who replaced Terri as Nursing Unit Manager in What Katie Did Next?|Kate Larsen|Joan Marden|Stephanie Markham|Von Ryan|Easy|What Katie Did Next|Episode 2|Kate Larsen|Terri Replacement|Nursing Unit Manager|Ward 17 Leadership|Staff Reaction
What personal difficulty later undermined Kate Larsen's work as manager?|Alcohol dependence|Compulsive gambling|An eating disorder|A sleeping disorder|Medium|What Katie Did Next|Episode 2|Kate Larsen|Alcohol Dependency|Ward Management|Professional Impairment|Season Arc
In Happy Birthday, where did terminally ill Sarah Adams give birth?|In an ambulance|In the hospital chapel|At her daughter's party|In the hospital lift|Medium|Happy Birthday|Episode 3|Sarah Adams|Ben Markham|Scott Zinenko|Ambulance Birth|Terminal Illness
Whose surprise birthday party did Bron and Connor organise in Happy Birthday?|Jared Levine's|Mitch Stevens's|Luke Forlano's|Ben Markham's|Medium|Happy Birthday|Episode 3|Jared Levine|Bron Craig|Connor Costello|Staff Party|Nursing Colleagues
Which spinal condition threatened a young ballerina's future in Bend Till You Break?|Scoliosis|Spina bifida|Osteoporosis|A slipped disc|Medium|Bend Till You Break|Episode 4|Ballerina Patient|Scoliosis|Mitch Stevens|Dance Career|Treatment Choice
Which colleague was upset by Connor's unexpected flowers in Bend Till You Break?|Jodi Horner|Kylie Preece|Rose Stevens|Regina Butcher|Medium|Bend Till You Break|Episode 4|Connor Costello|Jodi Horner|Flowers|Romantic Misunderstanding|Relationship Strain
What did Bron's bookie demand instead of repayment in A Matter of Choice?|Five vials of pethidine|Three bags of donated blood|A box of insulin|A supply of surgical gloves|Hard|A Matter Of Choice|Episode 5|Bron Craig|Loan Shark|Pethidine Theft|Gambling Debt|Drug Diversion
How much compensation was Sarah Adams awarded in A Matter of Choice?|$1.6 million|$100,000|$500,000|$3 million|Hard|A Matter Of Choice|Episode 5|Sarah Adams|Compensation Case|Court Hearing|Terminal Cancer|Workplace Claim
What personal news did Jodi learn in A Matter of Choice?|She was pregnant|She had won a scholarship|Her brother was moving overseas|She had inherited a house|Medium|A Matter Of Choice|Episode 5|Jodi Horner|Pregnancy Discovery|Connor Costello|Relationship Decisions|Season Storyline
What did Jodi tell Connor she intended to do about her pregnancy in Mixed Messages?|Have an abortion|Keep the baby and marry immediately|Arrange an adoption|Move to America|Medium|Mixed Messages|Episode 6|Jodi Horner|Connor Costello|Pregnancy Decision|Reproductive Choice|Relationship Fallout
Which doctor clashed with hospital administrator Claudia after an intern's error in Mixed Messages?|Luke Forlano|Mitch Stevens|Malcolm Pussle|Peter Morrison|Medium|Mixed Messages|Episode 6|Luke Forlano|Claudia MacKenzie|Medical Intern|Professional Defence|Hospital Dispute
Who lent Bron the money to settle her debt in Defiance and Denial?|Ben Markham|Luke Forlano|Jared Levine|Connor Costello|Medium|Defiance And Denial|Episode 7|Bron Craig|Ben Markham|Gambling Debt|Loan Shark Kevin|Financial Rescue
What medical problem threatened an overworked legal professional in Defiance and Denial?|Severe hypertension and stroke risk|Acute appendicitis|A fractured spine|Kidney stones|Medium|Defiance And Denial|Episode 7|Jonathan Healey|High Blood Pressure|Mitch Stevens|Stroke Risk|Work Stress
In Secrets and Lies, what poisoning did Von uncover in a puzzling patient?|Mercury poisoning|Carbon monoxide poisoning|Arsenic poisoning|Lead poisoning|Hard|Secrets And Lies|Episode 8|Von Ryan|Mitch Stevens|Mercury Poisoning|Diagnostic Mystery|Patient Investigation
What hidden personal history did Scott reveal after attending a suicide in Secrets and Lies?|He had discovered his own father's body|He had once worked as a police officer|He had survived a prison riot|He was adopted as a teenager|Hard|Secrets And Lies|Episode 8|Scott Zinenko|Father Suicide|Childhood Trauma|Ambulance Call|Personal Disclosure
In Changing Places, a routine hernia operation left Ian Hanrahan in what condition?|A persistent vegetative state|A temporary loss of hearing|A broken leg|A short-lived fever|Hard|Changing Places|Episode 9|Ian Hanrahan|Hernia Operation|Anaesthetic Reaction|Vegetative State|Patient Tragedy
Who confronted Kate about her drinking problem in Changing Places?|Von Ryan|Bron Craig|Jodi Horner|Ben Markham|Medium|Changing Places|Episode 9|Von Ryan|Kate Larsen|Alcohol Problem|Clinical Safety|Manager Confrontation
What new patient-handling rule was imposed in Too Little Too Late?|No lift this shift|No visitors after midday|No overnight admissions|No medication without a consultant|Medium|Too Little Too Late|Episode 10|Claudia MacKenzie|No Lift This Shift|Manual Handling|Ward Policy|Staff Workload
What equipment fault caused a patient to catch fire during a procedure in Too Little Too Late?|A faulty oxygen line|A broken anaesthetic trolley|A defibrillator battery|A ruptured water pipe|Hard|Too Little Too Late|Episode 10|Oxygen Line|Patient Fire|Luke Forlano|Operating Procedure|Equipment Failure
Whose suicide attempt alarmed Von during Night Terrors?|Kate Larsen's|Jodi Horner's|Rose Stevens's|Kylie Preece's|Medium|Night Terrors|Episode 11|Kate Larsen|Von Ryan|Alcohol Dependence|Suicide Attempt|Night Shift
Which nurse was drawn into a bet about when a patient would die in Night Terrors?|Bron Craig|Terri Sullivan|Paula Morgan|Stephanie Markham|Hard|Night Terrors|Episode 11|Bron Craig|Death Wager|Night Shift|Patient Dignity|Workplace Ethics
Which former ward clerk died after an overdose in Lest We Forget?|Tony Hurst|Regina Butcher|Matt Horner|Jodi Horner|Medium|Lest We Forget|Episode 12|Tony Hurst|Overdose|Connor Costello|Kylie Preece|Former Colleague Death
Who returned to Ward 17 after her extended absence in Lest We Forget?|Terri Sullivan|Stephanie Markham|Sophie Williams|Jaz Hillerman|Easy|Lest We Forget|Episode 12|Terri Sullivan|Hospital Return|Leave Of Absence|Nursing Leadership|Ward Reunion
Which doctor was appointed the new head of medicine in Lest We Forget?|Malcolm Pussle|Mitch Stevens|Luke Forlano|Richard Craig|Medium|Lest We Forget|Episode 12|Malcolm Pussle|Head Of Medicine|New Appointment|Terri Sullivan|Mitch Stevens
What caused injuries to pupils at a school in Lost Boys?|A homemade bomb exploded|A chemistry lab gas leak|A collapsed staircase|A school bus overturned|Medium|Lost Boys|Episode 13|School Explosion|Homemade Bomb|Injured Students|Ben Markham|Scott Zinenko
What animal did Jared help a patient find in Lost Boys?|A mouse|A rabbit|A budgerigar|A turtle|Hard|Lost Boys|Episode 13|Jared Levine|Missing Mouse|Patient Comfort|Ward Animal|Nursing Kindness
What medical condition affected the young runner Bron cared for in You Do Me Wrong?|Pericarditis|Scoliosis|Hepatitis|Asthma|Hard|You Do Me Wrong|Episode 14|Jacqui Henderson|Pericarditis|Bron Craig|Richard Craig|Young Athlete
Which young doctor crashed her car through exhaustion in You Do Me Wrong?|Kylie Preece|Samantha O'Hara|Rose Stevens|Mitch Stevens|Medium|You Do Me Wrong|Episode 14|Kylie Preece|Fatigue|Car Accident|Hospital Workload|Doctor Safety
Who returned to the ward to collaborate with Mitch in You Do Me Wrong?|Bron's father Richard Craig|Terri's father Ryan Sullivan|Ben's father|Connor's brother Greg|Medium|You Do Me Wrong|Episode 14|Richard Craig|Mitch Stevens|Bron Craig|Cardiac Case|Family History
Whose mother was diagnosed with HIV in All the Sons and Daughters?|Connor Costello's|Jared Levine's|Bron Craig's|Luke Forlano's|Medium|All The Sons And Daughters|Episode 15|Julie Costello|Connor Costello|HIV Diagnosis|Family Infection|Mitch Stevens
Which deaf patient did Bron support in All the Sons and Daughters?|Lyle Slater|Zac|Scott Zinenko|Tony Hurst|Hard|All The Sons And Daughters|Episode 15|Lyle Slater|Bron Craig|Deaf Patient|Communication Difficulty|Hospital Stay
In To Be or Not to Be, what protest brought an asylum seeker into conflict with doctors?|A hunger strike|A sit-in over housing|A hospital picket|A refusal to pay taxes|Medium|To Be Or Not To Be|Episode 16|Asylum Seeker|Hunger Strike|Terri Sullivan|Mitch Stevens|Treatment Rights
Which two characters began a romantic relationship in To Be or Not to Be?|Bron and Ben|Terri and Malcolm|Mitch and Kylie|Connor and Rose|Easy|To Be Or Not To Be|Episode 16|Bron Craig|Ben Markham|First Kiss|Romance|Moving On
What vision of his past troubled Ben after spending the night with Bron in Growing Pains?|His late wife Stephanie|A former ambulance partner|His childhood football coach|An estranged brother|Medium|Growing Pains|Episode 17|Ben Markham|Stephanie Markham|Bron Craig|Grief|Imagined Appearance
Which vehicle did a young father accidentally reverse over his toddler in Growing Pains?|A four-wheel drive|An ambulance|A forklift|A motorbike|Hard|Growing Pains|Episode 17|Toddler Fatality|Father Jack|Four Wheel Drive|Ben Markham|Scott Zinenko
What appeared on a medical fundraising calendar released in Bed of Roses?|Semi-nude hospital staff|Photographs of hospital pets|Paintings by former patients|Portraits of retired surgeons|Medium|Bed Of Roses|Episode 18|Fundraising Calendar|Jared Levine|Scott Zinenko|Charity Project|Staff Photographs
Which doctor resumed an affair with hospital administrator Claudia in Bed of Roses?|Luke Forlano|Mitch Stevens|Malcolm Pussle|Richard Craig|Medium|Bed Of Roses|Episode 18|Luke Forlano|Claudia MacKenzie|Renewed Affair|Hospital Romance|Professional Colleagues
Whom did Terri begin dating during Can You Hear Me?|Malcolm Pussle|Mitch Stevens|Connor Costello|Luke Forlano|Easy|Can You Hear Me|Episode 19|Terri Sullivan|Malcolm Pussle|First Date|Hospital Relationship|New Romance
Which medical procedure distressed a patient because of his wish to have children in Can You Hear Me?|Removal of a testicle|An appendectomy|A lung biopsy|A heart bypass|Medium|Can You Hear Me|Episode 19|Testicle Removal|Fertility Worries|Jared Levine|Patient Choice|Catholic Patient
Where were Ben and Scott taken hostage in Close to Home?|A low-security prison clinic|A shopping centre pharmacy|A bank's first-aid room|A school medical office|Medium|Close To Home|Episode 20|Ben Markham|Scott Zinenko|Prison Siege|Hostages|Ambulance Emergency
Which game did Mitch play with Malcolm before Malcolm was struck on the head in Close to Home?|Squash|Tennis|Cricket|Badminton|Hard|Close To Home|Episode 20|Mitch Stevens|Malcolm Pussle|Squash|Head Injury|Doctor Friendship
Which terminally ill child became especially close to Von in the middle of Season 4?|Zac|Lyle|Lucy|Marty|Medium|Close To Home|Episode 20|Zac|Von Ryan|Leukaemia|Childhood Cancer|Patient Friendship
Which patient did Terri and Mitch treat in Skeletons in the Closet whose housekeeper concealed a secret?|An elderly priest|A former boxer|A retired judge|A school headmaster|Medium|Skeletons In The Closet|Episode 21|Elderly Priest|Housekeeper Secret|Terri Sullivan|Mitch Stevens|Hospital Admission
What did Terri discover in the ward toilets in Skeletons in the Closet?|An abandoned newborn|A stolen morphine vial|A hidden camera|A missing wedding ring|Medium|Skeletons In The Closet|Episode 21|Terri Sullivan|Newborn Baby|Hospital Toilets|Housekeeper|Hidden Birth
Which children's charity event was held during The Sign?|A fundraising ball|A football final|An art auction|A school fete|Easy|The Sign|Episode 22|Children Oncology Ward|Charity Ball|Hospital Staff|Fundraising Event|Celebration
Which child died while Von stayed with him during The Sign?|Zac|Lyle|Alex|Thomas|Medium|The Sign|Episode 22|Von Ryan|Zac|Child Death|Leukaemia|Palliative Comfort
Who learned about Rose's bipolar disorder and passed the information to Terri in The Sign?|Malcolm Pussle|Ben Markham|Jared Levine|Connor Costello|Medium|The Sign|Episode 22|Malcolm Pussle|Rose Stevens|Terri Sullivan|Bipolar Disorder|Confidential Disclosure
What chore was Kylie doing when she saved a man's life in Maiden's Revenge?|Delivering Meals on Wheels|Staffing a blood-donation van|Collecting hospital laundry|Delivering parcels|Hard|Maidens Revenge|Episode 23|Kylie Preece|Meals On Wheels|Bill|Community Service|Emergency Rescue
What unusual visitor did Kylie and Terri bring in to comfort dying patient Bill in Maiden's Revenge?|His dog|His pet cat|His pet parrot|His horse|Medium|Maidens Revenge|Episode 23|Kylie Preece|Terri Sullivan|Patient Dog|Final Goodbye|Ward Rules
What illness was diagnosed in a menstruating patient whom Von nursed in Chains of Love?|Toxic shock syndrome|Leukaemia|Acute appendicitis|Lupus|Medium|Chains Of Love|Episode 24|Von Ryan|Toxic Shock Syndrome|Menstruation|Medical Diagnosis|Patient Assessment
What did Rose claim to Mitch in Chains of Love?|That she was pregnant|That Lucy was missing|That she was moving to London|That she had resigned as a nurse|Medium|Chains Of Love|Episode 24|Rose Stevens|Mitch Stevens|Pregnancy Claim|Marriage Strain|Trust
What mistake did Mitch make when delivering news of a death in Reality Bites?|He told the wrong woman her husband had died|He confused identical twins during a transplant|He informed a patient before the family|He rang the police instead of the next of kin|Hard|Reality Bites|Episode 25|Mitch Stevens|Wrong Family Notified|Death Notification|Patient Identity|Medical Error
What happened to Ben during the ambulance call in Reality Bites?|He was critically hurt by a thrown rock|He was bitten by a snake|He collapsed from heatstroke|He was trapped under a fallen tree|Medium|Reality Bites|Episode 25|Ben Markham|Scott Zinenko|Ambulance Rock Attack|Critical Injury|Roadside Danger
In Law of the Jungle, which supposedly deceased person unexpectedly showed signs of life?|A hypothermic woman's child|A hospital porter|An elderly priest|A pregnant woman's husband|Hard|Law Of The Jungle|Episode 26|Hypothermic Child|Unexpected Survival|Ben Markham|Scott Zinenko|Emergency Reassessment
What happened between Terri and Malcolm in Law of the Jungle?|They separated|They married|They moved overseas|They adopted a child|Medium|Law Of The Jungle|Episode 26|Terri Sullivan|Malcolm Pussle|Relationship Breakup|Intimacy Disagreement|Doctor Nurse Romance
Who blacked out at the wheel while transporting a patient in Private Lives?|Ben Markham|Scott Zinenko|Luke Forlano|Mitch Stevens|Easy|Private Lives|Episode 27|Ben Markham|Ambulance Collapse|Scott Zinenko|Patient Transport|Medical Emergency
Which doctor was made less confident before operating on Ben after Bron challenged him in Private Lives?|Luke Forlano|Mitch Stevens|Richard Craig|Malcolm Pussle|Medium|Private Lives|Episode 27|Bron Craig|Luke Forlano|Ben Markham|Surgery Anxiety|Emergency Operation
Which country offered Connor a nursing practitioner job in Empty Nest?|England|Canada|New Zealand|Ireland|Medium|Empty Nest|Episode 28|Connor Costello|London Hospital|Career Opportunity|Nurse Practitioner|Departure Plans
Who disappeared with baby Lucy during the Empty Nest storyline?|Rose Stevens|Terri Sullivan|Jodi Horner|Kylie Preece|Medium|Empty Nest|Episode 28|Rose Stevens|Lucy Stevens|Mitch Stevens|Missing Child|Marriage Crisis
Where did Connor unexpectedly discover Jodi working in Poles Apart?|At a strip club|At a bookshop|At a sports arena|At a television studio|Medium|Poles Apart|Episode 29|Connor Costello|Jodi Horner|Pole Dancing|Birthday Outing|Unexpected Reunion
Who did Terri find unconscious after an attack by a serial rapist in Poles Apart?|Former nurse Linda Davies|Rose Stevens|Jodi Horner|Kylie Preece|Medium|Poles Apart|Episode 29|Terri Sullivan|Linda Davies|Serial Rapist|Assault Survivor|Former Ward Nurse
What did the revived priest claim after a near-death experience in Delicate Matters?|That there was no God|That he had seen his missing wife|That he had forgotten his name|That he wanted to become a doctor|Hard|Delicate Matters|Episode 30|Former Priest|Near Death Experience|Religious Doubt|Luke Forlano|Operating Theatre
Which ambulance officer received clearance to return to work in Delicate Matters?|Ben Markham|Scott Zinenko|Rebecca Green|Bron Craig|Medium|Delicate Matters|Episode 30|Ben Markham|Medical Clearance|Return To Work|Accident Recovery|Ambulance Service
In Look into My Eyes, what accident caused Terri's heart to stop?|An accidental defibrillator shock|A fall from a hospital staircase|An allergic reaction to penicillin|An electric lift malfunction|Medium|Look Into My Eyes|Episode 31|Terri Sullivan|Jared Levine|Defibrillator Error|Cardiac Arrest|Clinical Accident
What had exhausted Jared been doing to keep up with his studies and shifts?|Working excessive hours|Training for a marathon|Travelling between two hospitals overseas|Caring for a newborn baby|Medium|Look Into My Eyes|Episode 31|Jared Levine|Study Pressure|Fatigue|Nursing Errors|Workload
What violent event forced Scott to risk his life in Wild Justice?|A gunman's suburban shooting spree|A ferry collision|A stadium fire|A chemical warehouse explosion|Medium|Wild Justice|Episode 32|Scott Zinenko|Gunman|Suburban Shootings|Ambulance Rescue|Career Risk
Which vital operation was disrupted because a courier was caught in the violence of Wild Justice?|A kidney transplant|A hip replacement|A cataract operation|A liver biopsy|Hard|Wild Justice|Episode 32|Kidney Transplant|Courier Delay|Gunman Rampage|Hospital Patient|Organ Transport
Who left Ward 17 for a new opportunity during Life as We Know It?|Connor Costello|Jared Levine|Ben Markham|Luke Forlano|Easy|Life As We Know It|Episode 33|Connor Costello|Departure|New Career|Last Ward Shift|2001 Exit
Which problem did Connor confront Jared about on his final day in Life as We Know It?|Drug misuse|A gambling debt|A secret marriage|Falsifying his age|Medium|Life As We Know It|Episode 33|Connor Costello|Jared Levine|Stimulant Misuse|Workplace Confrontation|Farewell
Which pair shared a kiss after Connor's departure in Life as We Know It?|Terri and Mitch|Bron and Luke|Jodi and Scott|Kylie and Malcolm|Medium|Life As We Know It|Episode 33|Terri Sullivan|Mitch Stevens|First Kiss|Relationship Turning Point|Connor Farewell
What was Jared caught selling in Simpatico?|Confidential hospital information|Prescription painkillers|Donated hospital equipment|Patient jewellery|Medium|Simpatico|Episode 34|Jared Levine|Confidential Information|Privacy Breach|Terri Sullivan|Professional Misconduct
Who discovered Jared's improper sale of hospital information in Simpatico?|Terri Sullivan|Bron Craig|Ben Markham|Joan Marden|Medium|Simpatico|Episode 34|Terri Sullivan|Jared Levine|Privacy Violation|Disciplinary Decision|Nursing Management
Which legal order complicated Mitch's search for his wife and baby in Critical Pressure?|An apprehended violence order|A bankruptcy order|A court summons for jury duty|An immigration removal order|Hard|Critical Pressure|Episode 35|Mitch Stevens|Rose Stevens|Apprehended Violence Order|Family Crisis|Police Involvement
What infection risk did Terri's clinical mistake expose Von to in Critical Pressure?|HIV|Hepatitis A|Measles|Tetanus|Medium|Critical Pressure|Episode 35|Terri Sullivan|Von Ryan|HIV Exposure|Clinical Error|Workplace Safety
Which Australian swimming champion visited Ward 17 in Bitter Medicine?|Dawn Fraser|Ian Thorpe|Susie O'Neill|Kieren Perkins|Medium|Bitter Medicine|Episode 36|Dawn Fraser|Australian Swimmer|Celebrity Appearance|Rehabilitation|Sports Motivation
Why did Rose invite Dawn Fraser onto the ward in Bitter Medicine?|To encourage an amputee to return to swimming|To award a hospital nursing prize|To promote a new ambulance|To judge a hospital choir|Hard|Bitter Medicine|Episode 36|Rose Stevens|Dawn Fraser|Amputee Swimmer|Motivational Visit|Patient Rehabilitation
To which city did Jodi decide to travel to join Connor in Heartache?|London|New York|Dublin|Auckland|Medium|Heartache|Episode 37|Jodi Horner|Connor Costello|London Move|Romantic Decision|Ward Clerk Exit
Who took over Jodi's ward clerk position in Heartache?|Her brother Matt|Her father|Tony Hurst|Regina Butcher|Medium|Heartache|Episode 37|Matt Horner|Jodi Horner|Ward Clerk Replacement|Sibling|Staff Transition
In Where There's Smoke, why did Luke refuse to perform Barbara Woods's planned operation?|He questioned the justification for a hysterectomy|She had no health insurance|Her surgeon was overseas|She refused to take antibiotics|Hard|Where Theres Smoke|Episode 38|Barbara Woods|Luke Forlano|Hysterectomy Ethics|Down Syndrome|Patient Rights
Whom did Terri choose to pursue after agonising over her romantic life in Where There's Smoke?|Malcolm Pussle|Mitch Stevens|Connor Costello|Luke Forlano|Medium|Where Theres Smoke|Episode 38|Terri Sullivan|Malcolm Pussle|Mitch Stevens|Dominic Turner|Romantic Choice
Where was Bron trapped while trying to escape a serial attacker in Child's Play?|A hospital boiler room|A locked ambulance|An abandoned farmhouse|A railway tunnel|Medium|Childs Play|Episode 39|Bron Craig|Serial Rapist|Boiler Room|Assault Threat|Hospital Danger
What did Rose leave baby Lucy doing before she disappeared into a storm in Child's Play?|Alone at home|Sleeping in the hospital nursery|With a babysitter at a cinema|In a car at the supermarket|Medium|Childs Play|Episode 39|Rose Stevens|Lucy Stevens|Child Neglect|Stormy Night|Mental Health Crisis
What item did a terminally ill patient want kept from his wife in Behind Closed Doors?|His women's clothing|A hidden painting|A gambling receipt|A secret passport|Hard|Behind Closed Doors|Episode 40|Cross Dressing Patient|Von Ryan|Mitch Stevens|End Of Life Wish|Privacy
Which organ did a patient ask to take home in a jar in Behind Closed Doors?|Part of her thyroid gland|Her appendix|One kidney|Her gallbladder|Hard|Behind Closed Doors|Episode 40|Thyroid Surgery|Unusual Patient Request|Bron Craig|Medical Specimen|Patient Autonomy
Which hospital doctor was revealed as the serial attacker in A Little Death?|Dr Richard Bird|Dr Malcolm Pussle|Dr Luke Forlano|Dr Mitch Stevens|Medium|A Little Death|Episode 41|Richard Bird|Serial Rapist|Bron Craig|Doctor Identity|Criminal Reveal
What hospital-acquired infection prompted Ward 17's special designation in A Little Death?|Golden staph|Norovirus|Chickenpox|Measles|Medium|A Little Death|Episode 41|Golden Staph|Ward Isolation|Infection Control|Joan Marden|Hospital Outbreak
Who helped rescuers locate Bron after her abduction in A Little Death?|Lyle Slater|Matt Horner|Jared Levine|Nelson Curtis|Hard|A Little Death|Episode 41|Lyle Slater|Bron Craig|Ben Markham|Scott Zinenko|Kidnapping Rescue
What important personal plan did Ben make for a picnic in The Other Side of Perfection?|Propose marriage to Bron|Tell Bron he was leaving Australia|Announce a career change|Admit he had returned to gambling|Medium|The Other Side Of Perfection|Episode 42|Ben Markham|Bron Craig|Proposal Plan|Picnic|Relationship Milestone
Who was seriously injured at a bombing scene in The Other Side of Perfection?|Rebecca Green|Rose Stevens|Jodi Horner|Kylie Preece|Medium|The Other Side Of Perfection|Episode 42|Rebecca Green|Scott Zinenko|Bombing Site|Ambulance Emergency|Paramedic Injury
Which American university offered Terri a job opportunity late in Season 4?|Stanford University|Harvard University|Yale University|Columbia University|Medium|Falling Down|Episode 43|Terri Sullivan|Stanford University|American Job Offer|Career Decision|Season Finale
What condition did Terri find Rose in at the end of Falling Down?|Unconscious and seriously ill|Celebrating a promotion|Preparing to leave on holiday|Recovering from a broken wrist|Medium|Falling Down|Episode 43|Rose Stevens|Terri Sullivan|Unconscious Patient|Season Cliffhanger|Mitch Stevens
Which two new clinical staff members joined Ward 17 in Falling Down?|Nelson Curtis and Paula Morgan|Kate Larsen and Tony Hurst|Jodi Horner and Kylie Preece|Scott Zinenko and Rebecca Green|Hard|Falling Down|Episode 43|Nelson Curtis|Paula Morgan|Nurse Practitioner|Registered Nurse|Permanent Appointments
Which recurring cast member's departure in Life as We Know It ended his original run as Connor Costello?|Jeremy Cumpston|Ben Tari|Brian Vriends|Martin Lynes|Medium|Jeremy Cumpston|Connor Costello|Life As We Know It|Episode 33|Actor Departure|Original Cast|2001 Exit
Which television quiz featured All Saints cast members in a one-off special shortly before the season finale?|The Weakest Link|Who Wants to Be a Millionaire?|Sale of the Century|Family Feud|Hard|Weakest Link Special|Cast Crossover|Australian Quiz Show|2001 Appearance|Television Promotion|November Broadcast|Spin Off Special
Which All Saints actor won the cast edition of The Weakest Link shown in 2001?|Erik Thomson|Conrad Coleby|Ben Tari|Martin Lynes|Hard|Erik Thomson|Weakest Link Winner|Cast Special|2001 Quiz Appearance|Charity Prize|Television Crossover|Actor Identification
Which All Saints actress was runner-up to Erik Thomson in The Weakest Link cast special?|Ling-Hsueh Tang|Georgie Parker|Judith McGrath|Joy Smithers|Hard|Ling Hsueh Tang|Weakest Link Runner Up|All Saints Special|2001 Game Show|Cast Crossover|Kylie Preece|Charity Quiz`;


// Season four episode and AFI/Logie awards gap audit. Earlier IDs and answers retained.
const AUDIT_ORIGINAL_COUNT = 110;
const AUDIT_FIRST_ID = 42157;
const auditFacts = `Which Logie award did All Saints win for the programme itself in 2002?|Most Popular Program|Most Outstanding Drama Series|Most Popular Comedy Program|Most Outstanding Mini Series|Medium|2002 Logies|Most Popular Program|Seven Network|audience vote|series award|Australian television|programme honour
Which All Saints actress won the 2002 Logie for Most Popular Actress?|Libby Tanner|Georgie Parker|Sonia Todd|Judith McGrath|Medium|Libby Tanner|Bron Craig|2002 Logies|Most Popular Actress|performer win|acting honour|popular vote
Which All Saints actress won a second consecutive Gold Logie in 2002?|Georgie Parker|Libby Tanner|Rachel Gordon|Celia Ireland|Medium|Georgie Parker|Terri Sullivan|2002 Gold Logie|consecutive wins|popular personality|acting recognition|Logie history
How many nominations did All Saints receive at the 2002 Logie Awards?|Ten|Three|Six|Fourteen|Medium|2002 Logies|ten nominations|most nominated|Australian television|Seven Network|awards record|recognition
Which All Saints actor received a 2002 Logie nomination for Most Popular New Male Talent?|Conrad Coleby|Erik Thomson|Brian Vriends|Brett Climo|Medium|Conrad Coleby|Scott Zinenko|2002 Logies|new male talent|award nomination|ambulance officer|actor recognition
Which All Saints Series 4 episode received a 2001 AFI nomination for Best Episode in a Long Running Television Drama Series?|The Sign|Wild Justice|The Heat Is On|A Little Death|Medium|The Sign|2001 AFI Awards|episode twenty two|award nomination|drama episode|Australian Film Institute|Season Four
Which young All Saints performer was nominated for a 2001 AFI Young Actor's Award for The Sign?|Joshua Jay|Conrad Coleby|Josh Quong Tart|Jeremy Cumpston|Hard|Joshua Jay|The Sign|2001 AFI Awards|Young Actors Award|acting nomination|episode twenty two|young performer
Which drama award was All Saints nominated for but did not win at the 2002 Logies?|Most Outstanding Drama Series|Most Outstanding Comedy Program|Most Outstanding Documentary Series|Most Outstanding Children's Program|Medium|2002 Logies|Most Outstanding Drama Series|nomination|programme recognition|not winner|Australian television|Seven Network
In All Saints episode The Heat Is On whose rejected romantic overtures made working with Bron difficult?|Connor Costello|Scott Zinenko|Jared Levine|Luke Forlano|Medium|The Heat Is On|Connor Costello|Bron Craig|unrequited feelings|season opener|workplace tension|failed courtship
In All Saints episode Bend Till You Break which former patient returned for spinal surgery?|Brett Addison|Alex Richards|Ian Hanrahan|Zac|Medium|Bend Till You Break|Brett Addison|spinal surgery|returning patient|Bron Craig|episode four|ward storyline
In All Saints episode A Matter of Choice where did Ben and Scott attend a collapsed worker?|A biscuit factory|A football stadium|An airport terminal|A railway tunnel|Medium|A Matter of Choice|Ben Markham|Scott Zinenko|biscuit factory|worker collapse|ambulance call|episode five
In All Saints episode Defiance and Denial which nurse defied a senior surgeon over patient care?|Connor Costello|Jared Levine|Bron Craig|Von Ryan|Medium|Defiance and Denial|Connor Costello|senior surgeon|patient advocacy|medical disagreement|episode seven|hospital hierarchy
In All Saints episode Secrets and Lies what medical mistake caused trouble for acting manager Kate Larsen?|Giving medicine to the wrong patient|Losing the controlled-drugs key|Forgetting to order insulin|Dispensing an expired vaccine|Medium|Secrets and Lies|Kate Larsen|medication error|wrong patient|patient safety|episode eight|nursing management
In All Saints episode Secrets and Lies which patient's physical development posed sensitive questions about identity?|A young woman born with ambiguous genitalia|An elderly patient with facial scarring|A toddler with diabetes|An adult with severe burns|Medium|Secrets and Lies|Bron Craig|intersex patient|ambiguous genitalia|patient dignity|episode eight|medical confidentiality
In All Saints episode Changing Places where did Ben and Scott attend a woman who collapsed in pain?|A train station|A shopping centre|An industrial freezer|A hospital corridor|Medium|Changing Places|Ben Markham|Scott Zinenko|train station|collapsed woman|ambulance emergency|episode nine
In All Saints episode Too Little Too Late what management decision increased risks for hospital patients?|Cutting costs at the expense of care|Opening a new private ward|Hiring more nurses|Replacing the hospital board|Medium|Too Little Too Late|hospital budget|cost cutting|patient safety|administration|Ward Seventeen|episode ten
In All Saints episode Lest We Forget where had two teenagers lived before an explosion brought them to the ward?|A state boys home|A seaside hostel|A boarding school|A prison hospital|Medium|Lest We Forget|teenage patients|state boys home|explosion|ward assumptions|episode twelve|social care
In All Saints episode All the Sons and Daughters what birthday surprise did Scott organise for Ben?|An on-stage tango with a lingerie waitress|A hot-air balloon flight|A fishing trip with Connor|A signed football shirt|Medium|All the Sons and Daughters|Scott Zinenko|Ben Markham|birthday treat|tango|ambulance colleagues|episode fifteen
In All Saints episode Growing Pains what illness did Mitch diagnose in a homeless woman who declined treatment?|Gangrene|Lupus|Scarlet fever|Appendicitis|Medium|Growing Pains|Mitch Stevens|homeless patient|gangrene|treatment refusal|medical autonomy|episode seventeen
In All Saints episode Private Lives how did a diagnostic mix-up affect a patient?|He was wrongly told he was dying|He had an unnecessary transplant|He was discharged with a broken leg|He was told his wife had died|Medium|Private Lives|terminal illness|mistaken diagnosis|patient distress|medical error|episode twenty seven|wrong prognosis
In All Saints episode Look into My Eyes which wartime chemical was linked to a patient's unusual tumours?|Agent Orange|Mustard gas|Chlorine|Phosgene|Medium|Look into My Eyes|Agent Orange|second generation exposure|tumours|Mitch Stevens|euthanasia dilemma|episode thirty one
In All Saints episode Sympatico which unusual relationship between patients intrigued Mitch Stevens?|Twin siblings with a mysterious bond|Identical patients with matching names|A father and son with matching hallucinations|Two unrelated people sharing a birthdate|Medium|Sympatico|twin patients|unusual bond|Mitch Stevens|episode thirty four|diagnostic mystery|family connection
In All Saints episode Child's Play why was a three-year-old boy left alone by his mother?|She had gone to play poker machines|She was working an overnight shift|She was attending a fitness class|She had gone to the supermarket|Medium|Childs Play|poker machines|unattended child|Ben Markham|family tragedy|episode thirty nine|parental neglect
In All Saints episode A Little Death why was Luke Forlano prohibited from operating?|He was suspected of carrying golden staph|His medical licence had expired|He refused compulsory training|His eyesight had deteriorated|Medium|A Little Death|Luke Forlano|golden staph|suspected carrier|operating ban|infection control|episode forty one
In All Saints episode The Other Side of Perfection which neurological condition prompted an innovative and risky surgery?|Parkinson's disease|Huntington's disease|Multiple sclerosis|Motor neurone disease|Medium|The Other Side of Perfection|Parkinsons disease|innovative surgery|Luke Forlano|medical breakthrough|episode forty two|operation risk`;

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
  !questions.length || questions[0].id !== 'tv_24283' ||
  new Set(questions.map(q => q.id)).size !== questions.length ||
  new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length ||
  questions.some(q =>
    q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
    q.tags.length < 14 || !q.tags.includes('Programme: All Saints') ||
    q.dailyEligible !== true
  )
) throw new Error('Pack 423 exported question validation failed');

module.exports = questions;