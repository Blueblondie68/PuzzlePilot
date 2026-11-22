// PuzzlePilot - The Bigggggg Quiz - Pack 422
// All Saints (Australia): Season 3 (2000), 41 broadcast episodes.
// Follows Pack 421. First ID: tv_24181.
// WordPad-ready CommonJS. All Saints ended in 2009; later seasons still require auditing.
// Each row: question | correct | three distractors | difficulty | seven specific tags.
// Research: 2000 episode listings and story synopses (TheTVDB, TV Guide,
// All Saints Season 3 episode guide).
'use strict';

const FIRST_ID = 24181;
const programme = 'All Saints';
const commonTags = [
  'Television', 'Australian Television', 'Medical Drama',
  'All Saints', 'Programme: All Saints', 'Seven Network',
  'All Saints Western General Hospital', 'Ward 17', 'Season 3', '2000'
];

const facts = `How many broadcast episodes are listed for All Saints Season 3?|41|37|43|46|Medium|41 Episodes|Season Length|2000 Broadcast|Episode Guide|Television History|Aired Order|Season Three
Which two-part story opened the third season of All Saints?|Valley of the Shadow|Truth and Consequence|Judge Not|Ghosts of Christmas Past|Medium|Valley Of The Shadow|Two Part Premiere|Opening Story|Hospital Explosion|Season Structure|Episode 1|Episode 2
Which actor played the hospital bomber Rob Biletsky in Season 3?|Eric Bana|Martin Lynes|Erik Thomson|Brian Vriends|Medium|Eric Bana|Rob Biletsky|Guest Actor|Bombing Plot|Hospital Emergency|Actor Identification|Season Premiere
Which actress played the new ward clerk Jodi Horner in Season 3?|Belinda Emmett|Celia Ireland|Pia Miranda|Rachel Gordon|Medium|Belinda Emmett|Jodi Horner|Ward Clerk|Ghosts|New Arrival|Actress Identification|Recurring Character
Who portrayed student nurse Brittany Finlay in the third season?|Pia Miranda|Joy Smithers|Ling Hsueh Tang|Celia Ireland|Medium|Pia Miranda|Brittany Finlay|Student Nurse|Nursing Training|Actress Identification|Guest Cast|Ward Staff
Which actress portrayed hospital administrator Claudia MacKenzie in 2000?|Rachel Gordon|Belinda Emmett|Marta Dusseldorp|Melissa Jaffer|Hard|Rachel Gordon|Claudia MacKenzie|Administrator|Luke Forlano|Actress Identification|Hospital Management|2000 Cast
Who played Detective Inspector Debbie Bloom in the third season?|Marta Dusseldorp|Georgie Parker|Pia Miranda|Celia Ireland|Hard|Marta Dusseldorp|Debbie Bloom|Police Inspector|Jared Levine|Police Investigation|Actress Identification|Recurring Role
Which actress played Sarah Adams, Mitch's seriously ill pregnant patient?|Zoe Carides|Joy Smithers|Pia Miranda|Belinda Emmett|Hard|Zoe Carides|Sarah Adams|Pregnancy|Terminal Cancer|Actress Identification|Best Laid Plans|Patient Casting
Which actor portrayed Neil Phillips during his final appearance in Season 3?|Peter Lamb|Terry Serio|Myles Pollard|Andrew McKaige|Hard|Peter Lamb|Neil Phillips|Actor Identification|After The Ball|Stalking Storyline|2000 Appearance|Guest Cast
In the Valley of the Shadow premiere, what triggered a hospital-wide emergency?|A bomb explosion|A major flood|An influenza outbreak|A railway derailment|Easy|Valley Of The Shadow Part One|Episode 1|Hospital Bombing|Medical Centre|Emergency Lockdown|Multiple Casualties|Rob Biletsky
Which veteran nurse went missing during the hospital explosion in Valley of the Shadow?|Von Ryan|Stephanie Markham|Bron Craig|Jared Levine|Easy|Valley Of The Shadow Part One|Episode 1|Von Ryan|Missing Staff Member|Rescue Effort|Medical Centre Blast|Bombing Emergency
Which former patient was critically injured in the season-opening hospital bombing?|Alex Richards|Bob Parkin|Thomas Ferry|Rachel McMahon|Hard|Valley Of The Shadow Part Two|Episode 2|Alex Richards|Brain Surgery|Bone Marrow History|Medical Centre Explosion|Survival
Who proposed marriage to Rose amid the chaos in Valley of the Shadow?|Mitch Stevens|Luke Forlano|Connor Costello|Ben Markham|Medium|Valley Of The Shadow Part Two|Episode 2|Mitch Stevens|Rose Carlton|Marriage Proposal|Bomb Scare|Romantic Decision
Which staff members removed the final bomb from the building in Valley of the Shadow?|Terri and Mitch|Bron and Ben|Connor and Jared|Von and Stephanie|Hard|Valley Of The Shadow Part Two|Episode 2|Terri Sullivan|Mitch Stevens|Final Bomb|Hospital Evacuation|Emergency Rescue
What contest did Ward 17 win in Bending and Breaking?|A hospital bed race|A charity football match|A baking competition|A medical quiz|Medium|Bending And Breaking|Episode 3|Fundraising Competition|Ward 17 Team|Terri Sullivan|Jared Levine|Winning Team
Which ward clerk announced plans to marry an Irish patient in Bending and Breaking?|Regina Butcher|Jodi Horner|Tony Hurst|Joan Marden|Medium|Bending And Breaking|Episode 3|Regina Butcher|Fergus Tiegan|Irish Patient|Marriage Plan|Expired Visa
In Eye of the Beholder, what caused the former television star's facial scarring?|An acid attack|A kitchen fire|A road collision|A chemical peel|Medium|Eye Of The Beholder|Episode 4|Television Presenter|Facial Burns|Patient Backstory|Terri Sullivan|Jared Levine
Which nurse suffered a miscarriage during Eye of the Beholder?|Stephanie Markham|Terri Sullivan|Bron Craig|Von Ryan|Easy|Eye Of The Beholder|Episode 4|Stephanie Markham|Miscarriage|Ben Markham|Pregnancy Loss|Ward Crisis
What did a patient and her female partner unexpectedly ask Luke Forlano to provide?|Sperm for conception|A kidney for transplant|A home nursing visit|Witness evidence for court|Hard|Eye Of The Beholder|Episode 4|Luke Forlano|Same Sex Couple|Sperm Donor Request|Fertility|Patient Boundaries
In First Do No Harm, whose granddaughter asked Mitch for the contraceptive pill?|Professor Caroline Edgewater's|Terri Sullivan's|Joan Marden's|Dr John Madsen's|Hard|First Do No Harm|Episode 5|Caroline Edgewater|Phoebe|Mitch Stevens|Contraception Request|Former Medical Professor
Why did Mitch insist on examining Phoebe before prescribing contraception?|He suspected a serious gynaecological condition|He thought she had a broken rib|She had lost her medical records|She was allergic to latex|Medium|First Do No Harm|Episode 5|Phoebe|Abnormal Cells|Cancer Concern|Clinical Examination|Patient Choice
Which hospital social event was being held when Neil Phillips threatened Terri in After the Ball?|A fundraising ball|A retirement dinner|A graduation ceremony|A Christmas pageant|Easy|After The Ball|Episode 6|Hospital Fundraiser|Terri Sullivan|Neil Phillips|Staff Celebration|Danger At Home
Who died after Terri stabbed him while defending herself in After the Ball?|Neil Phillips|Ryan Sullivan|Rob Biletsky|Rick Forlano|Easy|After The Ball|Episode 6|Neil Phillips|Terri Sullivan|Self Defence|Fatal Stabbing|Murder Charge
In Command and Control, which former paramedic began hydrotherapy following paralysis?|Mick Todd|Ben Markham|Pete Maroney|Eddie Furlong|Medium|Command And Control|Episode 7|Mick Todd|Paraplegia|Hydrotherapy|Stephanie Markham|Rehabilitation
Which nurse became upset by a patient's excessive tea drinking in Command and Control?|Jared Levine|Connor Costello|Von Ryan|Stephanie Markham|Hard|Command And Control|Episode 7|Jared Levine|Tea Addiction|Difficult Patient|Ward Routine|Patient Habits
In A Fraction Too Much Friction, which relative of Luke swallowed razor blades?|His brother Rick|His father|His cousin Fergus|His uncle John|Medium|A Fraction Too Much Friction|Episode 8|Rick Forlano|Luke Forlano|Razor Blades|Prison Trauma|Family Emergency
What legal charge did Terri learn she would face in A Fraction Too Much Friction?|Murder|Fraud|Arson|Kidnapping|Medium|A Fraction Too Much Friction|Episode 8|Terri Sullivan|Neil Phillips|Murder Charge|Criminal Trial|Legal Aftermath
In A Fine Balance, which athlete accused Mitch of inappropriate behaviour?|A teenage gymnast|A teenage swimmer|A young boxer|A football captain|Hard|A Fine Balance|Episode 9|Mitch Stevens|Gymnast Patient|Molestation Allegation|Sports Medicine|Professional Reputation
Which horrific accident task confronted Bron in A Fine Balance?|Finding a decapitated victim's head|Rescuing someone from a well|Freeing a patient from an MRI scanner|Searching for a lost child in a forest|Hard|A Fine Balance|Episode 9|Bron Craig|Decapitation|Ambulance Callout|Traumatic Scene|Emergency Services
In In the Blood, who rescued Ben after he was knocked unconscious in a pool?|Bron Craig|Luke Forlano|Connor Costello|Mitch Stevens|Medium|In The Blood|Episode 10|Ben Markham|Bron Craig|Swimming Pool|Unconscious Paramedic|Rescue
What procedure led to a negligence complaint against Luke in In the Blood?|A colonoscopy|A heart transplant|A caesarean section|A bone marrow biopsy|Medium|In The Blood|Episode 10|Luke Forlano|Colonoscopy|Bowel Injury|Patient Complaint|Medical Negligence
In Hearts and Minds, what organ's transplant made a young patient believe he was possessed?|A heart|A liver|A kidney|A lung|Medium|Hearts And Minds|Episode 11|Heart Transplant|Donor Memories|Patient Belief|Kylie Preece|Medical Psychology
What was the outcome of the hospital board's negligence inquiry into Luke in Hearts and Minds?|He was cleared|He was dismissed|He lost his medical licence|He was transferred overseas|Medium|Hearts And Minds|Episode 11|Luke Forlano|Hospital Board|Professional Inquiry|Stephanie Markham|Medical Career
In Food for Thought, what disease was diagnosed in a young man offered a documentary role?|Melanoma|Leukaemia|Meningitis|Tuberculosis|Medium|Food For Thought|Episode 12|Young Male Patient|Melanoma|Documentary Offer|Skin Cancer|Luke Forlano
Which two staff members disagreed over a patient suspected of having tuberculosis in Food for Thought?|Kylie and Von|Terri and Regina|Bron and Stephanie|Mitch and Ben|Hard|Food For Thought|Episode 12|Kylie Preece|Von Ryan|Tuberculosis Suspicion|Nursing Conflict|Infection Concern
In Blessed Release, which member of Terri's family asked her to end his suffering?|Her father Ryan|Her mother Eileen|Her brother Peter|Her cousin Fergus|Medium|Blessed Release|Episode 13|Ryan Sullivan|Terri Sullivan|Euthanasia Request|Terminal Cancer|Family Conflict
What order did Ryan Sullivan sign before suffering cardiac arrest in Blessed Release?|Do-not-resuscitate order|Immediate discharge order|Organ donor consent|Court protection order|Medium|Blessed Release|Episode 13|Ryan Sullivan|Resuscitation Decision|Cardiac Arrest|Medical Ethics|No Further Resuscitation
In Rush to Judgement, which ward did Mitch investigate following an unexplained patient death?|Sacred Heart Rehabilitation Unit|Paediatric Intensive Care|The Maternity Suite|The Surgical Recovery Unit|Hard|Rush To Judgement|Episode 14|Mitch Stevens|Sacred Heart|Rehabilitation Patients|Suspicious Death|Clinical Investigation
What unusual food made Bron unexpectedly intoxicated in Rush to Judgement?|Brownies|A fruit smoothie|A wedding cake|Homemade biscuits|Hard|Rush To Judgement|Episode 14|Bron Craig|Cannabis Brownies|Patient Gift|Paramedic Callout|Intoxication
Which important court proceedings began in Judge Not...?|Terri Sullivan's murder trial|Luke Forlano's divorce case|Ben Markham's assault trial|Mitch Stevens's disciplinary appeal|Easy|Judge Not|Episode 15|Terri Sullivan|Neil Phillips|Court Proceedings|Trial Begins|Criminal Justice
Which two colleagues gave evidence during Terri's trial in Judge Not...?|Luke and Von|Bron and Ben|Connor and Jared|Regina and Tony|Medium|Judge Not|Episode 15|Luke Forlano|Von Ryan|Witness Testimony|Terri Sullivan|Prosecution
What verdict did the jury reach in ...Lest Ye Be Judged?|Not guilty|Guilty of murder|Guilty of manslaughter|No verdict after a hung jury|Easy|Lest Ye Be Judged|Episode 16|Terri Sullivan|Jury Verdict|Murder Trial|Court Outcome|Acquittal
Which unusual allergy troubled a married patient in ...Lest Ye Be Judged?|An allergy to her husband's seminal fluid|An allergy to her own hair|An allergy to clean water|An allergy to sunlight|Hard|Lest Ye Be Judged|Episode 16|Married Patient|Seminal Fluid Allergy|Jared Levine|Kylie Preece|Rare Condition
What threatened Ward 17's future in Duty of Care?|A proposed closure|A fire in its storeroom|An ambulance strike|A compulsory relocation abroad|Easy|Duty Of Care|Episode 17|Ward Closure Threat|Hospital Management|Staff Anxiety|Budget Cuts|Public Health
Who organised a staff walkout in protest at Ward 17's threatened closure?|Stephanie Markham|Terri Sullivan|Von Ryan|Jared Levine|Medium|Duty Of Care|Episode 17|Stephanie Markham|Industrial Action|Ward 17 Closure|Staff Walkout|Protest
Which pair married despite Fergus facing deportation in Duty of Care?|Regina and Fergus|Bron and Luke|Terri and Mitch|Jared and Debbie|Medium|Duty Of Care|Episode 17|Regina Butcher|Fergus Tiegan|Marriage|Immigration Problem|Irish Partner
Which nursing honour did Terri win in Beyond All Praise?|Employee of the Year|Nurse of the Decade|Medical Innovator Award|Paramedic of the Year|Medium|Beyond All Praise|Episode 18|Terri Sullivan|Employee Of The Year|Hospital Award|Nursing Excellence|Joan Marden
How did Terri help prevent Ward 17's closure in Beyond All Praise?|By giving a powerful award speech|By staging a televised surgery|By winning a lawsuit|By obtaining a private donation from Luke|Medium|Beyond All Praise|Episode 18|Terri Sullivan|Award Speech|Ward Survival|Hospital Closure|Staff Morale
In Out of Nowhere, who discovered a nurse injecting drugs in the bathroom?|Connor Costello|Jared Levine|Ben Markham|Von Ryan|Medium|Out Of Nowhere|Episode 19|Connor Costello|Linda Davies|Injecting Drugs|Nurse Addiction|Staff Crisis
What fate befell Tom Snowdon in Out of Nowhere after Linda discussed his role in her drug use?|He died by suicide|He was promoted|He fled overseas|He was arrested for fraud|Hard|Out Of Nowhere|Episode 19|Tom Snowdon|Linda Davies|Drug Dependency|Suicide|Luke Forlano
Which ward clerk returned from New York in Frozen in Time?|Tony Hurst|Regina Butcher|Jodi Horner|Joan Marden|Medium|Frozen In Time|Episode 20|Tony Hurst|New York Return|Ward Clerk|Regina Butcher|Staff Changes
Who served as acting Nursing Unit Manager when Terri went on retreat in Frozen in Time?|Stephanie Markham|Von Ryan|Bron Craig|Jared Levine|Medium|Frozen In Time|Episode 20|Stephanie Markham|Acting NUM|Terri Sullivan|Religious Retreat|Ward Leadership
What was Steph criticised for during her stint running Ward 17 in Girl of the Moment?|Being excessively strict|Ignoring every shift roster|Refusing all new admissions|Leaving the ward unattended|Medium|Girl Of The Moment|Episode 21|Stephanie Markham|Acting Ward Manager|Staff Complaints|Leadership Style|Nursing Team
What family revelation upset a patient whom Bron comforted in Girl of the Moment?|Her supposed sister was actually her mother|Her brother was her father|Her aunt had adopted her husband|Her cousin was a stranger|Hard|Girl Of The Moment|Episode 21|Bron Craig|Family Secret|Mother Daughter Identity|Patient Support|Emotional Revelation
In Dead on Time, what kind of collision fatally injured Stephanie Markham?|A head-on road crash|A train derailment|An ambulance rollover|A motorcycle collision|Easy|Dead On Time|Episode 22|Stephanie Markham|Fatal Car Accident|Road Trauma|Ben Markham|Bron Craig
Which surgeon operated on Steph before her death in Dead on Time?|Luke Forlano|Mitch Stevens|Peter Morrison|John Madsen|Medium|Dead On Time|Episode 22|Luke Forlano|Stephanie Markham|Emergency Surgery|Fatal Injuries|Medical Colleagues
Who arrived to confront Ben following Steph's funeral in Blood, Sweat and Tears?|Steph's brother Chris|Terri's father Ryan|Bron's father Richard|Connor's brother Greg|Medium|Blood Sweat And Tears|Episode 23|Steph Brother Chris|Ben Markham|Steph Funeral|Family Conflict|Grief
Which activity had injured a teenager with a rare blood disorder in Blood, Sweat and Tears?|Skateboarding|Surfing|Rock climbing|Horse riding|Hard|Blood Sweat And Tears|Episode 23|Teenage Patient|Rare Blood Disorder|Skateboarding Injury|Mitch Stevens|Kylie Preece
Which nurse temporarily managed Ward 17 in Twentieth Century Blues?|Connor Costello|Von Ryan|Jared Levine|Bron Craig|Medium|Twentieth Century Blues|Episode 24|Connor Costello|Nursing Unit Manager|Temporary Promotion|Hospital Staff|Leadership Burden
What did Rose fear might destroy her relationship with Mitch in Twentieth Century Blues?|His continuing medical work|His interest in horse racing|His wish to relocate to London|His refusal to have children|Medium|Twentieth Century Blues|Episode 24|Rose Carlton|Mitch Stevens|Medical Career|Marriage Doubts|Relationship Strain
What major decision about her vocation did Terri make in Into the Unknown?|Leave her religious order|Become a hospital chaplain|Transfer to a monastery overseas|Train as a doctor|Easy|Into The Unknown|Episode 25|Terri Sullivan|Religious Order|Personal Faith|Major Life Decision|Von Ryan
At whose pre-wedding party did Luke become drunk and angry in Into the Unknown?|Mitch Stevens's|Ben Markham's|Connor Costello's|Jared Levine's|Medium|Into The Unknown|Episode 25|Mitch Stevens|Bachelor Party|Luke Forlano|Grief|Ward Friends
Who married Rose in Promise of Things to Come?|Mitch Stevens|Luke Forlano|Connor Costello|Ben Markham|Easy|Promise Of Things To Come|Episode 26|Mitch Stevens|Rose Carlton|Wedding Ceremony|Season Romance|Marriage
What did Mitch obtain for a patient's nausea despite Connor's objection in Promise of Things to Come?|Marijuana|Sleeping tablets|A bottle of wine|A herbal tincture|Hard|Promise Of Things To Come|Episode 26|Mitch Stevens|Connor Costello|Cannabis For Nausea|Patient Care|Medical Ethics
What did Terri do at the wedding of Mitch and Rose?|Left before the vows were completed|Caught the bridal bouquet|Sang at the reception|Gave the couple a wedding cake|Medium|Promise Of Things To Come|Episode 26|Terri Sullivan|Mitch Stevens|Rose Carlton|Unspoken Feelings|Wedding Attendance
In What Becomes of the Broken Hearted?, how many children did grieving patient Leanne lose in a crash?|Two|One|Three|Four|Medium|What Becomes Of The Broken Hearted|Episode 27|Leanne|Fatal Car Crash|Bereaved Mother|Ben Markham|Grief
Which young doctor received a surprise birthday celebration in What Becomes of the Broken Hearted?|Kylie Preece|Von Ryan|Bron Craig|Terri Sullivan|Medium|What Becomes Of The Broken Hearted|Episode 27|Kylie Preece|Birthday Surprise|Ward Colleagues|Staff Celebration|Junior Doctor
What serious blood infection was diagnosed in an airport patient in The Cost of Living?|Septicaemia|Malaria|Measles|Haemophilia|Medium|The Cost Of Living|Episode 28|Airport Patient|Septicaemia|Mitch Stevens|Emergency Diagnosis|Infection
What crime involving Jared's father surfaced in The Cost of Living?|Corporate fraud|Armed robbery|Tax evasion|Insurance arson|Hard|The Cost Of Living|Episode 28|Jared Levine|Father|Corporate Fraud|Connor Costello|Tony Hurst
Which student nurse was caught kissing a patient in One for the Road?|Brittany Finlay|Kylie Preece|Jodi Horner|Rose Carlton|Medium|One For The Road|Episode 29|Brittany Finlay|Jared Levine|Patient Romance|Professional Boundaries|Nursing Student
Whose affair with administrator Claudia finally ended his relationship with Bron in One for the Road?|Luke Forlano's|Mitch Stevens's|Connor Costello's|Jared Levine's|Medium|One For The Road|Episode 29|Luke Forlano|Claudia MacKenzie|Bron Craig|Romantic Breakup|Infidelity
How much gambling money did Luke demand back from Bron in Another Place, Another Time?|$10,000|$500|$2,000|$25,000|Hard|Another Place Another Time|Episode 30|Luke Forlano|Bron Craig|Gambling Debt|Personal Loan|Broken Trust
What hospital management role did Connor decide he no longer wanted in Another Place, Another Time?|Nursing Unit Manager|Director of Surgery|Ambulance Supervisor|Head Pharmacist|Medium|Another Place Another Time|Episode 30|Connor Costello|Leadership Decision|Nursing Unit Manager|Return To Ward|Career Choice
What emergency surgical procedure did Ben perform following an accident in Bosom of the Family?|Fasciotomy|Appendectomy|Craniotomy|Tracheostomy|Hard|Bosom Of The Family|Episode 31|Ben Markham|Fasciotomy|Car Accident|Luke Forlano|Paramedic Procedure
Which computerised nursing system was implicated in a patient's death in Bosom of the Family?|NurseCare|MediTrack|CareLink|WardNet|Medium|Bosom Of The Family|Episode 31|NurseCare|Hospital Computer Program|Patient Safety|Terri Sullivan|System Failure
In Duty Bound, where were two women found stuck together by freezing conditions?|An industrial freezer|A refrigerated lorry|A mountain shelter|An ice rink storeroom|Hard|Duty Bound|Episode 32|Ben Markham|Bron Craig|Industrial Freezer|Cold Emergency|Rescue Callout
What did Mitch and Rose learn unexpectedly about her pregnancy in Duty Bound?|She was over five months pregnant|She was carrying triplets|She was not pregnant|She was expecting twins|Medium|Duty Bound|Episode 32|Rose Carlton|Mitch Stevens|Advanced Pregnancy|Pregnancy Discovery|Marriage
Which mental health diagnosis did Mitch discover Rose had in Tender Loving Care?|Bipolar disorder|Obsessive compulsive disorder|Schizophrenia|Panic disorder|Medium|Tender Loving Care|Episode 33|Rose Carlton|Mitch Stevens|Bipolar Disorder|Medication|Mental Health
What contagious skin infestation affected ward staff in Tender Loving Care?|Scabies|Ringworm|Head lice|Chickenpox|Medium|Tender Loving Care|Episode 33|Scabies|Ward Staff|Skin Infestation|Infection Control|Hospital Exposure
Which new ward clerk arrived during Ghosts?|Jodi Horner|Regina Butcher|Tony Hurst|Joan Marden|Easy|Ghosts|Episode 34|Jodi Horner|Ward Clerk Arrival|Staff Change|Reception Work|New Character
What disturbing accusation did Jared's grandmother make about one patient in Ghosts?|He had been a Nazi doctor|He had stolen her inheritance|He was her long-lost son|He had deserted the army|Hard|Ghosts|Episode 34|Jared Levine|Grandmother|Nazi Doctor Accusation|Wartime Memory|Patient Identity
Which belief about preserving bodies fascinated the surgical patient Evan in More Than Life?|Cryonics|Reincarnation|Cloning|Hypnosis|Hard|More Than Life|Episode 35|Evan|Cryonics|Brain Surgery|Luke Forlano|John Madsen
How much did Bron lose on a single horse-racing bet in More Than Life?|$2,000|$200|$10,000|$20,000|Medium|More Than Life|Episode 35|Bron Craig|Horse Gambling|Lost Wager|Ben Markham|Gambling Problem
Which pregnant patient was told she had terminal cancer in The Best Laid Plans?|Sarah Adams|Jodi Horner|Rose Carlton|Brittany Finlay|Medium|The Best Laid Plans|Episode 36|Sarah Adams|Mitch Stevens|Terminal Cancer|Pregnancy|Difficult Diagnosis
Whose help did Eileen Sullivan request in caring for the ill Ryan in The Best Laid Plans?|Terri Sullivan's|Ben Markham's|Luke Forlano's|Jared Levine's|Medium|The Best Laid Plans|Episode 36|Eileen Sullivan|Ryan Sullivan|Terri Sullivan|Family Care|Cancer
In Lottery of Life, why were paramedics called to a lottery winner's house?|He threatened suicide|He suffered frostbite|He was struck by lightning|He was injured by a horse|Medium|Lottery Of Life|Episode 37|Lottery Winner|Suicide Threat|Ben Markham|Paramedic Response|Sudden Wealth
Whose declined credit card exposed worsening money troubles in Lottery of Life?|Bron Craig's|Terri Sullivan's|Von Ryan's|Kylie Preece's|Medium|Lottery Of Life|Episode 37|Bron Craig|Credit Card Declined|Gambling Losses|Financial Crisis|Personal Debt
In Fate Dances with Lady Luck, which medical donation was needed from a boy for his sick sister?|Bone marrow|A kidney|Skin grafts|Part of a lung|Medium|Fate Dances With Lady Luck|Episode 38|Young Brother|Sick Sister|Bone Marrow Donor|Cancer Treatment|Family Medical Dilemma
Who told Bron he loved her but was rejected in Fate Dances with Lady Luck?|Connor Costello|Ben Markham|Luke Forlano|Mitch Stevens|Medium|Fate Dances With Lady Luck|Episode 38|Connor Costello|Bron Craig|Love Confession|Romantic Rejection|Friendship
What condition did a patient treated by Mitch and Jared display in Me, Myself and I?|Dissociative identity disorder|Huntington's disease|Chronic fatigue syndrome|Multiple sclerosis|Hard|Me Myself And I|Episode 39|Mitch Stevens|Jared Levine|Multiple Personalities|Psychiatric Patient|Diagnosis
Which ward clerk began a romantic involvement with Connor in Me, Myself and I?|Jodi Horner|Regina Butcher|Tony Hurst|Joan Marden|Medium|Me Myself And I|Episode 39|Jodi Horner|Connor Costello|Romantic Kiss|Colleague Relationship|Melbourne Cup
In Heart and Soul, where did Bron become trapped during an ambulance callout?|Beneath fallen beams in a flooding hole|Inside a crashed lift|Under an overturned ambulance|Inside a locked railway carriage|Medium|Heart And Soul|Episode 40|Bron Craig|Flooding Hole|Collapsed Floorboards|Ben Markham|Trapped Paramedic
Who confessed his love to Bron while she was trapped and water was rising in Heart and Soul?|Ben Markham|Connor Costello|Luke Forlano|Mitch Stevens|Medium|Heart And Soul|Episode 40|Ben Markham|Bron Craig|Love Confession|Flood Rescue|Relationship Turning Point
What caused a serious emergency for Rose after giving birth in Stolen Moments?|A haemorrhage|An allergic skin rash|A broken rib|A collapsed lung|Medium|Stolen Moments|Episode 41|Rose Carlton|Childbirth|Postpartum Haemorrhage|Mitch Stevens|Emergency Theatre
What did Bron decide to do professionally at the end of Stolen Moments?|Return to nursing on Ward 17|Become an ambulance dispatcher|Begin surgical training|Move to a hospital overseas|Easy|Stolen Moments|Episode 41|Bron Craig|Career Decision|Ambulance Service|Ward 17 Return|Finale
Which festival prompted Kylie to help Jared with his credit-card debt in Stolen Moments?|Hanukkah|Diwali|Easter|Lunar New Year|Medium|Stolen Moments|Episode 41|Kylie Preece|Jared Levine|Hanukkah Gift|Credit Card Debt|Season Finale
Which police inspector had a relationship with Jared during Terri's trial?|Debbie Bloom|Joan Marden|Claudia MacKenzie|Caroline Edgewater|Medium|Debbie Bloom|Jared Levine|Police Inspector|Hospital Romance|Judge Not|Trial Investigation|Relationship Breakup
In Bending and Breaking, who was secretly involved with Dr Madsen's wife?|Her husband's brother|A hospital orderly|A visiting paramedic|The ward pharmacist|Hard|Bending And Breaking|Episode 3|Madsen Family|Affair Discovery|Bron Craig|Injured Relatives|Marriage Secret
What did immigration officials plan for Fergus in Duty of Care?|Deportation to Ireland|Compulsory military service|Hospital imprisonment|Transfer to New Zealand|Medium|Duty Of Care|Episode 17|Fergus Tiegan|Irish Residency|Regina Butcher|Immigration Enforcement|Wedding Complication
In Another Place, Another Time, where had Von previously nursed former patient Will Harrington?|London|Dublin|Melbourne|Perth|Hard|Another Place Another Time|Episode 30|Von Ryan|Will Harrington|Nursing Career|Former Patient|Overseas Work
In Tender Loving Care, who bought Tony a ticket to see him in New York?|His boyfriend Alistair|His brother Greg|His father Ryan|His friend Fergus|Hard|Tender Loving Care|Episode 33|Tony Hurst|Alistair|New York Visit|Same Sex Relationship|Airfare
In Stolen Moments, what competition did Jodi Horner want Ward 17 to win?|Best-decorated Christmas ward|Best hospital garden|Annual bed race|Staff talent contest|Medium|Stolen Moments|Episode 41|Jodi Horner|Christmas Decorations|Ward Competition|Season Finale|Holiday Celebration`;


// 2000 season episode, production and AFI/Logie awards audit. Preserve original IDs.
const AUDIT_ORIGINAL_COUNT = 102;
const AUDIT_FIRST_ID = 42136;
const auditFacts = `Which All Saints Series 3 two-part opener won a 2000 Australian Film Institute Award?|Valley of the Shadow|Judge Not|Promise of Things to Come|Stolen Moments|Medium|Valley of the Shadow|2000 AFI Award|episode prize|series premiere|television drama|award winner|Australian Film Institute
Which part of the All Saints story Valley of the Shadow won the 2000 AFI television drama episode prize?|Part One|Part Two|Both parts jointly|Neither part|Medium|Valley of the Shadow|Part One|2000 AFI Award|television drama episode|opening instalment|Jo Porter|winning entry
Which All Saints producer was named with the AFI-winning 2000 episode Valley of the Shadow?|Jo Porter|Di Drew|Bevan Lee|John Holmes|Medium|Jo Porter|Valley of the Shadow|2000 AFI Award|producer credit|television drama|industry recognition|Season 3
Which other All Saints Series 3 episode was nominated alongside the winning Valley of the Shadow at the 2000 AFI Awards?|Dead on Time|Stolen Moments|After the Ball|Ghosts|Medium|Dead on Time|Valley of the Shadow|2000 AFI Awards|episode nomination|Stephanie Markham|Australian Film Institute|drama category
Which All Saints actress received the Gold Logie at the 2001 TV Week awards?|Georgie Parker|Libby Tanner|Judith McGrath|Belinda Emmett|Medium|Georgie Parker|Terri Sullivan|2001 Gold Logie|popular personality|Australian television|acting recognition|award winner
Which All Saints award did the programme itself win at the 2001 TV Week Logies?|Most Popular Program|Most Outstanding Documentary|Most Popular Comedy|Most Outstanding Mini Series|Medium|2001 Logies|Most Popular Program|Seven Network|programme award|Australian television|viewers choice|winning category
In All Saints episode Valley of the Shadow who joined Luke Forlano in operating on the injured Alex Richards?|John Madsen|Mitch Stevens|Peter Morrison|Richard Craig|Medium|Valley of the Shadow|John Madsen|Luke Forlano|Alex Richards|head injury|craniotomy|Season 3 opener
In All Saints episode Valley of the Shadow who entertained two frightened children during rescue operations?|Bosco the clown|Professor Caroline Edgewater|Jodi Horner|Regina Butcher|Medium|Valley of the Shadow|Bosco|Caitlin and Rowen|child rescue|hospital bombing|clown|disaster response
In All Saints episode First Do No Harm which medical problem made Mitch investigate Phoebe beyond her contraceptive request?|Suspicious abnormal cervical or vaginal cells|A broken collarbone|Severe asthma|Food poisoning|Medium|First Do No Harm|Phoebe|Mitch Stevens|abnormal cells|cancer concern|gynaecological examination|patient welfare
In All Saints episode After the Ball who was revealed to have bought Terri Sullivan's dress?|Neil Phillips|Mitch Stevens|Von Ryan|Luke Forlano|Medium|After the Ball|Neil Phillips|Terri Sullivan|fundraising ball|gift|obsessive stalking|attack aftermath
In All Saints episode After the Ball which doctor overlooked Ruby Nolan's pathology results?|Kylie Preece|Samantha O Hara|Mitch Stevens|Luke Forlano|Medium|After the Ball|Kylie Preece|Ruby Nolan|pathology results|patient deterioration|clinical oversight|fundraising ball
In All Saints episode Command and Control which former ambulance officer struggled to adjust to paraplegia?|Mick Todd|Ben Markham|Pete Moroney|Connor Costello|Medium|Command and Control|Mick Todd|paraplegia|post accident recovery|Stephanie Markham|family strain|former paramedic
In All Saints episode A Fine Balance what prison abuse did Luke discover his brother Rick had experienced?|Violent beatings and torture|Food poisoning|Identity theft|A falsified release order|Medium|A Fine Balance|Rick Forlano|Luke Forlano|prison violence|razor blades|family estrangement|criminal justice
In All Saints episode In the Blood which patient did Terri incorrectly suspect of a factitious illness?|Graham Farmer|Alex Richards|Len Gould|Tom Snowdon|Medium|In the Blood|Graham Farmer|Terri Sullivan|Munchausen suspicion|rare blood disorder|Neil Phillips trauma|diagnostic error
In All Saints episode In the Blood which anaesthetist had an addiction to pethidine?|Tom Snowdon|John Madsen|Luke Forlano|Richard Craig|Medium|In the Blood|Tom Snowdon|anaesthetist|pethidine addiction|Luke Forlano|professional conflict|drug dependency
In All Saints episode Food for Thought what hardship forced patients relatives to sleep in the hospital car park?|They could not afford accommodation|Hospital security barred visitors|They missed the last train|Their home had flooded|Medium|Food for Thought|patients relatives|car park|accommodation poverty|Mitch Stevens|hospital management|social hardship
In All Saints episode Blessed Release which emergency involved a boy trapped in a security door and stung by an insect?|A bee sting|A snake bite|A spider bite|A jellyfish sting|Medium|Blessed Release|Ben Markham|Bron Craig|security door|bee sting|rescue call|child patient
In All Saints episode What Becomes of the Broken Hearted what caused the deaths of two children?|A drink-driving collision|A house fire|A boating accident|A building collapse|Medium|What Becomes of the Broken Hearted|two children|grieving mother|drink driving|road collision|Brittany Finlay|hospital tragedy
In All Saints episode The Cost of Living what recreational accident began Ben and Brons emergency callout?|A jet-ski crash|A skydiving injury|A motorcycle race|A swimming pool fall|Medium|The Cost of Living|Ben Markham|Bron Craig|jet ski|accident callout|rescue|paramedics
In All Saints episode Duty Bound what difficulty was the sick mans wife experiencing while caring for him?|Reliance on a mixture of drugs|Loss of hearing|A broken leg|Temporary blindness|Medium|Duty Bound|patients wife|caregiver strain|mixed medication|Terri Sullivan|Mitch Stevens|patient care
In All Saints episode The Best Laid Plans what difficult medical choice confronted pregnant patient Sarah Adams?|Cancer treatment or ending her pregnancy|Heart surgery or amputation|A kidney donation or chemotherapy|An overseas transfer or home care|Medium|The Best Laid Plans|Sarah Adams|pregnancy|terminal cancer|treatment decision|Mitch Stevens|medical ethics`;

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
  !questions.length || questions[0].id !== 'tv_24181' ||
  new Set(questions.map(q => q.id)).size !== questions.length ||
  new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length ||
  questions.some(q =>
    q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
    q.tags.length < 14 || !q.tags.includes('Programme: All Saints') ||
    q.dailyEligible !== true
  )
) throw new Error('Pack 422 exported question validation failed');

module.exports = questions;