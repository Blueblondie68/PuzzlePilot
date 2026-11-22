// PuzzlePilot - The Bigggggg Quiz - Pack 420
// All Saints (Australia): Season 1 (1998), 41 episodes.
// Follows Pack 419 (Albion Market). First ID: tv_23942.
// WordPad-ready CommonJS. The series ended in 2009; master tracker coverage is still incomplete.
// One question per line: question | correct | three wrong | difficulty | seven individual tags.
// Checked against the 1998 episode guide, cast listings and character summaries.
'use strict';

const FIRST_ID = 23942;
const programme = 'All Saints';
const commonTags = [
  'Television', 'Australian Television', 'Medical Drama',
  'All Saints', 'Programme: All Saints', 'Seven Network',
  'All Saints Western General Hospital', 'Ward 17', '1998', 'Season 1'
];

const facts = `Which Australian network first broadcast All Saints in 1998?|Seven Network|Nine Network|Network Ten|ABC Television|Easy|Original Broadcaster|Australian Network|1998 Premiere|Television History|Hospital Series|Programme Launch|National Television
In which year did the Australian drama All Saints begin?|1998|1996|2000|2002|Easy|Original Premiere|1998 Start|First Season|Australian Television History|Series Chronology|Broadcast Debut|Programme History
How many episodes made up the first season of All Saints?|41|26|32|52|Medium|Season One|41 Episodes|Episode Count|First Year|1998 Broadcast|Series Length|Season Structure
Which hospital ward was the original focus of All Saints?|Ward 17|Ward 12|Ward 8|Ward 24|Easy|Original Setting|Nursing Staff|Hospital Ward|Opening Seasons|Medical Workplace|General Medicine|Fictional Location
What nickname did staff give the general medical ward in early All Saints?|The Garbage Ward|The Sunshine Ward|The Waiting Ward|The Golden Ward|Easy|Garbage Ward|Overflow Patients|Informal Nickname|General Medicine|Hospital Staff|Ward Identity|Patient Admissions
What was the full name of the fictional hospital in the original All Saints?|All Saints Western General Hospital|All Saints Eastern City Hospital|Saint Mark's Western Hospital|Royal Southside General Hospital|Medium|Western General Hospital|Hospital Name|Fictional Institution|Medical Drama Setting|Australian Hospital|Series Location|Original Format
What position did Terri Sullivan hold when All Saints began?|Nursing Unit Manager|Head of Surgery|Hospital Administrator|Ambulance Supervisor|Easy|Terri Sullivan|Nursing Management|Ward Leadership|Hospital Hierarchy|Original Role|Senior Nurse|Staff Supervision
Which actress portrayed Terri Sullivan in the first season of All Saints?|Georgie Parker|Libby Tanner|Judith McGrath|Kirrily White|Easy|Georgie Parker|Terri Sullivan|Lead Performer|1998 Original Cast|Nursing Unit Manager|Actress Identification|Main Character
Which actress played experienced nurse Von Ryan in All Saints?|Judith McGrath|Georgie Parker|Sam Healy|Kirrily White|Easy|Judith McGrath|Von Ryan|Veteran Nurse|Original Ensemble|Actress Identification|Senior Colleague|1998 Casting
Who played nurse Connor Costello in the opening season of All Saints?|Jeremy Cumpston|Ben Tari|Martin Lynes|Andrew McKaige|Medium|Jeremy Cumpston|Connor Costello|Actor Identification|Male Nurse|Original Ensemble|Hospital Worker|1998 Casting
Which actress played Bronwyn 'Bron' Craig in the original All Saints cast?|Libby Tanner|Georgie Parker|Sam Healy|Kirrily White|Easy|Libby Tanner|Bronwyn Craig|Bron|Nurse And Paramedic|Actress Identification|Original Cast|1998 Role
Which actor played Jared Levine in Season 1 of All Saints?|Ben Tari|Jeremy Cumpston|Martin Lynes|Brian Vriends|Medium|Ben Tari|Jared Levine|Actor Identification|Nurse Character|Young Colleague|Original Cast|1998 Role
Which actor portrayed doctor Luke Forlano in early All Saints?|Martin Lynes|Andrew McKaige|Jeremy Cumpston|Ben Tari|Medium|Martin Lynes|Luke Forlano|Doctor Character|Actor Identification|Surgical Work|Original Cast|1998 Role
Which actor played Dr Peter Morrison in the first All Saints season?|Andrew McKaige|Martin Lynes|Brian Vriends|Jeremy Cumpston|Medium|Andrew McKaige|Peter Morrison|Doctor Character|Actor Identification|Widower Storyline|Original Cast|1998 Role
Which actress played nurse Jaz Hillerman in Season 1 of All Saints?|Sam Healy|Libby Tanner|Kirrily White|Judith McGrath|Medium|Sam Healy|Jaz Hillerman|Nurse Character|Actress Identification|Original Cast|1998 Role|Hospital Staff
Who portrayed Stephanie 'Steph' Markham in the original All Saints cast?|Kirrily White|Georgie Parker|Libby Tanner|Sam Healy|Medium|Kirrily White|Stephanie Markham|Steph|Nursing Character|Actress Identification|Original Cast|1998 Role
What was the full name of Stephanie's husband in the first All Saints season?|Ben Markham|Peter Morrison|Connor Costello|Luke Forlano|Easy|Stephanie Markham|Ben Markham|Married Couple|Family Relationship|Paramedic Husband|1998 Storyline|Home Life
Which actor played Ben Markham, Stephanie's husband, in All Saints?|Brian Vriends|Ben Tari|Andrew McKaige|Jeremy Cumpston|Medium|Brian Vriends|Ben Markham|Actor Identification|Paramedic Character|Stephanie Husband|Original Cast|1998 Role
Which actress played the returning nurse Sophie Williams in Season 1 of All Saints?|Elizabeth Maywald|Justine Clarke|Kirrily White|Judith McGrath|Hard|Elizabeth Maywald|Sophie Williams|Nurse Return|Actress Identification|Widowed Mother|1998 Cast|Ward Colleague
Which actress played Dr Samantha O'Hara in the first All Saints season?|Justine Clarke|Georgie Parker|Libby Tanner|Sam Healy|Hard|Justine Clarke|Samantha O'Hara|Doctor Character|Actress Identification|Recurring Role|1998 Appearance|Hospital Staff
Who portrayed demanding Dr Harry Williams, a patient in an early All Saints episode?|Steve Jacobs|Michael Caton|Andrew McKaige|Martin Lynes|Hard|Steve Jacobs|Harry Williams|Recurring Actor|Hospital Doctor|Cardiac Patient|Everybody's Human|1998 Guest Casting
Which actor portrayed recurring patient Bob Parkin in the first season?|Michael Caton|John Walton|Steve Jacobs|Brian Vriends|Hard|Michael Caton|Bob Parkin|Guest Actor|Recurring Patient|Bron's Friend|1998 Casting|HIV Storyline
Which episode opened the All Saints series in February 1998?|Body and Soul|Night Shift|Heart to Heart|Revelations|Easy|Body And Soul|Episode 1|Series Premiere|Opening Episode|24 February 1998|Ward Introduction|Broadcast Order
What sort of patients made Ward 17 known as the Garbage Ward in the premiere?|Overflow patients from other wards|Only patients awaiting surgery|Only children under twelve|Only terminal cancer patients|Easy|Body And Soul|Episode 1|Ward 17 Purpose|Hospital Overflow|Patient Transfers|Nursing Workload|Opening Premise
In Body and Soul, what serious illness affected the elderly patient whose right to refuse treatment Terri defended?|Terminal cancer|Kidney failure|Pneumonia|Diabetes|Medium|Body And Soul|Episode 1|Terri Sullivan|Treatment Refusal|Patient Autonomy|Terminal Illness|Harry Williams
Which doctor accused Terri of advocating euthanasia during the pilot episode?|Dr Harry Williams|Dr Peter Morrison|Dr Luke Forlano|Dr Samantha O'Hara|Medium|Body And Soul|Episode 1|Harry Williams|Terri Sullivan|End Of Life Care|Medical Ethics|Treatment Dispute
What unusual celebration took place on Ward 17 during Body and Soul?|A bikie's wedding|A retirement ball|A child's christening|A hospital anniversary|Hard|Body And Soul|Episode 1|Bikie Wedding|Ward Celebration|Unusual Admission|Patient Visitors|Opening Story
In Everybody's Human, what condition brought Dr Harry Williams into Ward 17 as a patient?|A heart condition|A broken hip|A stroke|A fractured wrist|Medium|Everybody's Human|Episode 2|Harry Williams|Cardiac Admission|Difficult Patient|Role Reversal|Hospital Doctor
Which episode featured Dr Harry Williams becoming an especially demanding patient?|Everybody's Human|Combat Zone|Little White Lies|Hard Rain|Medium|Everybody's Human|Episode 2|Harry Williams|Patient Behaviour|Doctor Hospitalised|Cardiac Condition|Episode Title
In Gut Feeling, Ben saved a drug dealer who had suffered which injury?|A stabbing|A gunshot wound|Severe burns|A snakebite|Medium|Gut Feeling|Episode 3|Ben Markham|Drug Dealer|Knife Wound|Emergency Rescue|Ward Admission
Which nurse returned to work after her husband's death in Gut Feeling?|Sophie Williams|Von Ryan|Bron Craig|Jaz Hillerman|Medium|Gut Feeling|Episode 3|Sophie Williams|Widowhood|Nursing Return|Terri Sullivan|Bereavement
Which colleague agreed to let Jared Levine move in during Gut Feeling?|Connor Costello|Ben Markham|Luke Forlano|Peter Morrison|Medium|Gut Feeling|Episode 3|Jared Levine|Connor Costello|Flatmates|Living Arrangement|Nursing Friendship
What accident led to muscleman Arnie Walker's admission in A Question of Strength?|Falling off a motorbike|Falling down stairs|A rugby tackle|A workplace explosion|Hard|A Question Of Strength|Episode 4|Arnie Walker|Bron Craig|Motorcycle Accident|Patient Attachment|Admission Cause
Which nurse struggled with becoming too emotionally attached to Arnie Walker?|Bron Craig|Von Ryan|Steph Markham|Jaz Hillerman|Medium|A Question Of Strength|Episode 4|Bron Craig|Arnie Walker|Nursing Boundaries|Patient Relationship|Professional Judgement
In Night Shift, which nurse collapsed after being given a party drug?|Jaz Hillerman|Bron Craig|Steph Markham|Sophie Williams|Medium|Night Shift|Episode 5|Jaz Hillerman|Party Drug|Sudden Collapse|Ward Staff|Emergency Treatment
Who secretly cared for Jaz on the ward after her collapse in Night Shift?|Connor and Bron|Terri and Von|Jared and Sophie|Peter and Luke|Hard|Night Shift|Episode 5|Connor Costello|Bron Craig|Jaz Hillerman|Undeclared Admission|Career Risk
In Give and Take, what organ was Emily Watson intending to donate to her brother Robbie?|A kidney|Part of her liver|A lung|Bone marrow|Medium|Give And Take|Episode 6|Emily Watson|Robbie Watson|Sibling Donation|Kidney Transplant|Dialysis
Which patient in Give and Take was an athlete facing the loss of an arm to bone cancer?|Rachel McMahon|Raelene Gregson|Angie|Margaret Quinell|Hard|Give And Take|Episode 6|Rachel McMahon|Triathlete|Bone Cancer|Amputation|Bron Craig
What type of sportswoman was Rachel McMahon before her operation in Give and Take?|A triathlete|A tennis professional|A gymnast|A marathon swimmer|Hard|Give And Take|Episode 6|Rachel McMahon|Sports Career|Triathlon|Arm Amputation|Cancer Treatment
In Combat Zone, Von's encounter with an old friend revived memories of service in which country?|Vietnam|Cambodia|Korea|Afghanistan|Hard|Combat Zone|Episode 7|Von Ryan|Old Friend|Vietnam Memories|Past Trauma|Treatment Refusal
Which episode revisited Von Ryan's past through the admission of an old friend?|Combat Zone|Truth or Dare|The Hard Yards|Christmas Spice|Medium|Combat Zone|Episode 7|Von Ryan|Long Lost Friend|Personal History|Vietnam Experience|Episode Identification
Which recurring patient returned to Ward 17 with pneumonia in Think Positive?|Bob Parkin|Harry Williams|Bryan Taylor|Arnie Walker|Medium|Think Positive|Episode 8|Bob Parkin|Pneumonia|Bron Craig|Return Admission|Health Anxiety
In Think Positive, doctors worried that Bob Parkin's illness might be connected to which virus?|HIV|Influenza A|Hepatitis A|Measles|Medium|Think Positive|Episode 8|Bob Parkin|HIV Risk|Pneumonia|Bron Craig|Medical Testing
What challenge did Sophie Williams face away from nursing in Think Positive?|Raising children as a single mother|Training for a marathon|Moving to another country|Opening a restaurant|Medium|Think Positive|Episode 8|Sophie Williams|Single Motherhood|Work Life Balance|Bereaved Parent|Family Responsibilities
In Forget Me Not, whose disappearance caused alarm on the ward?|A new mother's baby|An elderly surgeon|A student nurse|A transplant donor|Medium|Forget Me Not|Episode 9|Missing Infant|Teenage Mother|Jared Levine|Postnatal Crisis|Patient Care
Which condition affected the retired nurse whom Von encouraged in Forget Me Not?|Alzheimer's disease|Parkinson's disease|Epilepsy|Multiple sclerosis|Hard|Forget Me Not|Episode 9|Von Ryan|Retired Nurse|Alzheimer's Disease|Dementia Diagnosis|Patient Support
In A Little Magic, a mother delayed her son's brain operation to perform what?|A Wiccan healing ritual|A traditional dance|A meditation class|A family reunion|Medium|A Little Magic|Episode 10|Wiccan Ritual|Brain Tumour|Terri Sullivan|Religious Belief|Treatment Delay
Whose personal beliefs conflicted with a patient's family in A Little Magic?|Terri Sullivan's|Bron Craig's|Jared Levine's|Sophie Williams's|Medium|A Little Magic|Episode 10|Terri Sullivan|Spiritual Conflict|Clinical Ethics|Child Surgery|Patient Advocacy
Which nurse decided to pursue the ambition of becoming a doctor in Terminal Speed?|Stephanie Markham|Von Ryan|Bron Craig|Sophie Williams|Medium|Terminal Speed|Episode 11|Stephanie Markham|Medical Education|Career Ambition|Nurse To Doctor|Study Plans
What eating disorder did Peter and Connor suspect in patient Raelene during Terminal Speed?|Bulimia|Anorexia nervosa|Pica|Binge-eating disorder|Hard|Terminal Speed|Episode 11|Raelene Gregson|Peter Morrison|Connor Costello|Bulimia Suspicion|Eating Disorder
In Heart to Heart, surgeons postponed a prominent lawyer's bypass because she would not stop doing what?|Smoking|Drinking coffee|Taking holidays|Playing tennis|Medium|Heart To Heart|Episode 12|Prominent Lawyer|Coronary Bypass|Smoking|Surgical Risk|Hospital Decision
What caused the life-threatening injuries to Peter Morrison's wife Jenny in Heart to Heart?|A car accident|A fall from a horse|A house fire|A boating accident|Medium|Heart To Heart|Episode 12|Jenny Morrison|Peter Morrison|Road Accident|Family Tragedy|Intensive Care
Which episode first showed the devastating accident involving Jenny Morrison?|Heart to Heart|Crimes of the Heart|Possession|The Price of Love|Hard|Heart To Heart|Episode 12|Jenny Morrison|Car Collision|Peter Morrison|Major Plot Turning Point|Episode Chronology
In The Hard Yards, Connor was disappointed in what kind of sporting hero admitted to his ward?|A rugby player|A cricketer|A football goalkeeper|A boxer|Medium|The Hard Yards|Episode 13|Connor Costello|Rugby Hero|Stabbing Injuries|Shattered Idol|Ward Patient
Which character was keeping vigil over his injured wife during The Hard Yards?|Peter Morrison|Ben Markham|Luke Forlano|Connor Costello|Medium|The Hard Yards|Episode 13|Peter Morrison|Jenny Morrison|Intensive Care Vigil|Marriage|Grief Storyline
Which former fiancée reconciled with Jared Levine in The Hard Yards?|Amanda|Angie|Jaz|Samantha|Hard|The Hard Yards|Episode 13|Jared Levine|Amanda|Former Engagement|Relationship Reconciliation|Ward Staff Romance
In Goodnight Sweetheart, what medical finding made Jenny Morrison's condition irreversible?|Brain death|Kidney failure|A broken spine|Blindness|Medium|Goodnight Sweetheart|Episode 14|Jenny Morrison|Brain Death|Peter Morrison|Intensive Care|End Of Life
Who asked Peter Morrison for consent to donate Jenny's organs in Goodnight Sweetheart?|Terri Sullivan|Von Ryan|Bron Craig|Samantha O'Hara|Medium|Goodnight Sweetheart|Episode 14|Terri Sullivan|Peter Morrison|Organ Donation|Jenny Morrison|Transplant Consent
Who was made temporary ward team leader in Goodnight Sweetheart?|Connor Costello|Jared Levine|Stephanie Markham|Von Ryan|Hard|Goodnight Sweetheart|Episode 14|Connor Costello|Team Leader|Terri Sullivan|Ward Organisation|Temporary Promotion
In Crimes of the Heart, which patient group did Connor care for despite his own prejudices?|A dying patient with AIDS and his partner|Two elderly sisters with flu|A family of crash victims|A child awaiting a transplant|Medium|Crimes Of The Heart|Episode 15|Connor Costello|AIDS Patient|Distraught Partner|Overcoming Prejudice|Palliative Care
How soon after Jenny's funeral did Peter Morrison return to work in Crimes of the Heart?|The next day|The next month|Six weeks later|After a full year|Hard|Crimes Of The Heart|Episode 15|Peter Morrison|Jenny Funeral|Return To Work|Bereavement|Terri Friendship
Which hospital unit transferred two high-dependency patients to Ward 17 in Nothing but the Truth?|Intensive Care Unit|Maternity Unit|Paediatric Ward|Orthopaedics|Medium|Nothing But The Truth|Episode 16|High Dependency Patients|ICU Transfer|Ward Pressure|Staff Shortage|Nursing Workload
In Nothing but the Truth, which nurse's romance with Luke became public?|Bron Craig|Von Ryan|Jaz Hillerman|Sophie Williams|Medium|Nothing But The Truth|Episode 16|Bron Craig|Luke Forlano|Romantic Relationship|Ward Colleagues|Public Disclosure
What new job did Angie take at All Saints in Babes in the Woods?|Ward cleaner|Hospital receptionist|Student doctor|Ambulance dispatcher|Medium|Babes In The Woods|Episode 17|Angie|Jared Levine|Cleaner Job|Ward 17|Recovering Addict
In Babes in the Woods, a young girl's unwanted pregnancy resulted in what crisis?|An abandoned newborn|A missing teenage father|A stolen ambulance|A cancelled organ donation|Medium|Babes In The Woods|Episode 17|Unwanted Pregnancy|Abandoned Child|Newborn Emergency|Terri Sullivan|Peter Morrison
In Sounds of Silence, what implant did a pregnant patient want despite her husband's objections?|A cochlear implant|A pacemaker|An insulin pump|A hip replacement|Medium|Sounds Of Silence|Episode 18|Cochlear Implant|Pregnant Woman|Deaf Husband|Stephanie Markham|Patient Choice
Which nurse supported the pregnant patient's decision about the cochlear implant?|Stephanie Markham|Bron Craig|Sophie Williams|Jaz Hillerman|Hard|Sounds Of Silence|Episode 18|Stephanie Markham|Patient Advocacy|Cochlear Implant|Marital Disagreement|Hearing Loss
In A Hard Day's Night, where did Jared discover Angie was working?|As a sex worker|As a theatre usher|As a radio producer|As a school caretaker|Medium|A Hard Day's Night|Episode 19|Jared Levine|Angie|Sex Work|Difficult Discovery|Relationship Crisis
Who did Terri ask to help Peter Morrison with his grief in A Hard Day's Night?|Sophie Williams|Jaz Hillerman|Bron Craig|Stephanie Markham|Medium|A Hard Day's Night|Episode 19|Terri Sullivan|Peter Morrison|Sophie Williams|Bereavement Support|Jenny Morrison
In Revelations, a new mother suffered a severe infection approximately how long after giving birth?|Six weeks|Two days|Six months|One year|Hard|Revelations|Episode 20|Postpartum Infection|Six Weeks After Birth|Cardiac Arrest|New Mother|Near Death Experience
Which nurse helped three elderly women feel useful during Revelations?|Jaz Hillerman|Von Ryan|Bron Craig|Sophie Williams|Hard|Revelations|Episode 20|Jaz Hillerman|Three Elderly Patients|Emotional Care|Patient Dignity|Ward Community
In Smooth Operator, which doctor became attracted to a visiting surgical consultant?|Luke Forlano|Peter Morrison|Harry Williams|Samantha O'Hara|Medium|Smooth Operator|Episode 21|Luke Forlano|Visiting Consultant|Surgical Career|Professional Attraction|Misdiagnosis
What emergency service assignment placed Ben at risk from a knife-wielding gang member in Smooth Operator?|Rapid Response|Air Rescue|Coastguard|Fire Investigation|Hard|Smooth Operator|Episode 21|Ben Markham|Rapid Response|Gang Member|Knife Threat|First Shift
In Truth or Dare, who was injured in a park attack and became an A&E patient?|Ben Markham|Connor Costello|Peter Morrison|Jared Levine|Medium|Truth Or Dare|Episode 22|Ben Markham|Park Assault|Ambulance Worker|A And E Admission|Violence Aftermath
In Truth or Dare, the mysterious disappearance of which medication raised suspicion on Ward 17?|Insulin|Morphine|Penicillin|Warfarin|Hard|Truth Or Dare|Episode 22|Missing Insulin|Ward 17|Medication Security|Clinical Suspicion|Hospital Mystery
Who arrived as head of cardiothoracic surgery in Possession?|Professor Richard Craig|Dr Harry Williams|Dr Peter Morrison|Dr Samantha O'Hara|Medium|Possession|Episode 23|Richard Craig|Cardiothoracic Surgery|New Consultant|Hospital Leadership|Family Conflict
What was Professor Richard Craig's family relationship to Bron?|Her father|Her uncle|Her husband|Her older brother|Medium|Possession|Episode 23|Richard Craig|Bronwyn Craig|Father Daughter|Family Tension|Surgeon Arrival
In The Price You Pay, what was the occupation of the young shooting victim whom Ben attended?|Police officer|Firefighter|School teacher|Taxi driver|Medium|The Price You Pay|Episode 24|Ben Markham|Shot Policeman|Armed Robbery|Emergency Response|Spinal Injury
Who knew the injured police officer from school in The Price You Pay?|Jaz Hillerman|Bron Craig|Terri Sullivan|Sophie Williams|Hard|The Price You Pay|Episode 24|Jaz Hillerman|Old Schoolmate|Police Officer Patient|Spinal Trauma|Ward Personal Link
What personal news was Stephanie trying to come to terms with in A Mother's Love?|She was pregnant|She was leaving Australia|Her husband had retired|She had inherited a farm|Medium|A Mother's Love|Episode 25|Stephanie Markham|Pregnancy|Ben Markham|Family Planning|Nursing Patient
Which sport had injured the young male patient Jared wanted Dr O'Hara to re-examine in A Mother's Love?|Cricket|Rugby|Tennis|Cycling|Hard|A Mother's Love|Episode 25|Jared Levine|Samantha O'Hara|Cricket Injury|Clinical Reassessment|Patient Deterioration
Which nun and mentor of Terri Sullivan was admitted in Touch and Go?|Sister Marguerite|Sister Bernadette|Sister Monica|Sister Agnes|Hard|Touch And Go|Episode 26|Sister Marguerite|Terri Sullivan|Religious Mentor|Personality Change|Crisis Of Faith
Which surgeon carried out a risky emergency procedure in Touch and Go?|Professor Richard Craig|Dr Harry Williams|Dr Samantha O'Hara|Dr Peter Morrison|Medium|Touch And Go|Episode 26|Richard Craig|Risky Procedure|Emergency Surgery|Surgical Expertise|Patient Rescue
In Yesterday's News, a television celebrity came to hospital for what operation?|A double mastectomy|A hip replacement|A kidney transplant|A heart bypass|Medium|Yesterday's News|Episode 27|TV Celebrity Patient|Double Mastectomy|Medical Documentary Crew|Breast Surgery|Terri Sullivan
What accompanied the celebrity patient into hospital in Yesterday's News?|A television filming crew|A marching band|A police escort|A group of student nurses|Medium|Yesterday's News|Episode 27|Television Crew|Patient Privacy|Double Mastectomy|Medical Programme|Media Presence
In Family Feud, who blamed Bron when a patient refused a groundbreaking heart operation?|Luke Forlano|Peter Morrison|Jared Levine|Ben Markham|Hard|Family Feud|Episode 28|Luke Forlano|Bron Craig|Richard Craig|Heart Surgery Refusal|Professional Conflict
Which nurse organised a party meant to repair Bron and Connor's friendship in Family Feud?|Jared Levine|Von Ryan|Sophie Williams|Stephanie Markham|Hard|Family Feud|Episode 28|Jared Levine|Bron Craig|Connor Costello|Reconciliation Party|Friendship Breakdown
In Little White Lies, which hospitalised man was kept unaware of his wife's death?|An English tourist|A retired surgeon|A rugby coach|A teenage father|Hard|Little White Lies|Episode 29|English Tourist|Fatal Road Accident|Richard Craig|Stephanie Markham|Withheld Bad News
Who ordered Stephanie not to tell an injured tourist that his wife had died in Little White Lies?|Richard Craig|Peter Morrison|Luke Forlano|Harry Williams|Hard|Little White Lies|Episode 29|Richard Craig|Stephanie Markham|English Couple|Medical Disclosure|Car Crash
In Best Laid Plans, who took charge of Ward 17 while Terri acted as Assistant Director of Nursing?|Stephanie Markham|Von Ryan|Connor Costello|Jared Levine|Medium|Best Laid Plans|Episode 30|Stephanie Markham|Terri Sullivan|Acting Ward Leader|Assistant Director|Nursing Management
What unsafe procedure left a young woman seriously injured in Best Laid Plans?|A backstreet abortion|An unlicensed tattoo|A failed dental extraction|A home blood transfusion|Medium|Best Laid Plans|Episode 30|Backstreet Abortion|Stephanie Markham|Hysterectomy|Reproductive Health|Patient Crisis
Which patient underwent lung surgery that went badly wrong in Parting Friends?|Bob Parkin|Harry Williams|Bryan Taylor|Arnie Walker|Medium|Parting Friends|Episode 31|Bob Parkin|Lung Resection|Surgical Complications|Bron Craig|Friendship
Which nurse submitted a resignation during the September storyline in Parting Friends?|Bron Craig|Terri Sullivan|Von Ryan|Jaz Hillerman|Medium|Parting Friends|Episode 31|Bron Craig|Ward Resignation|Career Change|Bob Parkin|Ambulance Ambition
In Cards on the Table, what serious allegation was made against Jared by a patient?|Rape|Theft of jewellery|Forgery|Medical negligence|Hard|Cards On The Table|Episode 32|Jared Levine|Patient Accusation|Professional Reputation|Sexual Assault Allegation|Ward Crisis
Which consultant's departure became inevitable after a patient refused surgery in Cards on the Table?|Professor Richard Craig|Dr Samantha O'Hara|Dr Harry Williams|Dr Peter Morrison|Hard|Cards On The Table|Episode 32|Richard Craig|Forced Resignation|Patient Refusal|Surgical Authority|Hospital Dispute
What new role was Bron beginning in Boys Will Be Boys?|Ambulance duty|Hospital administration|Medical school teaching|Ward management|Medium|Boys Will Be Boys|Episode 33|Bron Craig|First Ambulance Shift|Paramedic Training|Career Transition|Field Emergency
Which father had to confront his own relationship with his son in Boys Will Be Boys?|Peter Morrison|Richard Craig|Ben Markham|Harry Williams|Hard|Boys Will Be Boys|Episode 33|Peter Morrison|Teenage Binge Drinking|Parenting Reflection|Father Son Relationship|Family Story
In Live Now, Pay Later, which tragedy reopened Ben's grief over Steph's lost pregnancy?|The death of an infant|A bus driver killed in traffic|A terminally ill surgeon|A missing baby at the hospital|Hard|Live Now Pay Later|Episode 34|Ben Markham|Infant Death|Pregnancy Loss|Bron Craig|Grieving Mother
Which unusual patient made Ward 17 staff uncomfortable in Live Now, Pay Later?|A nudist|A magician|A professional clown|A ventriloquist|Hard|Live Now Pay Later|Episode 34|Nudist Patient|Connor Costello|Von Ryan|Ward Embarrassment|Comic Subplot
In Out of Control, what diagnosis prompted Connor to confront his prejudices?|Schizophrenia|Alzheimer's disease|Cystic fibrosis|Epilepsy|Medium|Out Of Control|Episode 35|Connor Costello|Schizophrenia|Psychiatric Patient|Stigma|Nursing Ethics
Which nurse revealed she had been date-raped by Danny in the Out of Control storyline?|Jaz Hillerman|Bron Craig|Sophie Williams|Stephanie Markham|Medium|Out Of Control|Episode 35|Jaz Hillerman|Danny|Date Rape|Personal Trauma|Disclosure
In Mirror Mirror on the Wall, who informed colleagues about what had happened to Jaz?|Terri Sullivan|Samantha O'Hara|Von Ryan|Bron Craig|Medium|Mirror Mirror On The Wall|Episode 36|Terri Sullivan|Jaz Hillerman|Ward Disclosure|Staff Support|Trauma Aftermath
Which nurse recognised her own prejudice while caring for an overweight woman in Mirror Mirror on the Wall?|Von Ryan|Bron Craig|Sophie Williams|Stephanie Markham|Hard|Mirror Mirror On The Wall|Episode 36|Von Ryan|Weight Bias|Self Reflection|Patient Respect|Clinical Empathy
In The Price of Love, Steph suspected her friend had deliberately hastened whose death?|Her terminally ill husband|Her estranged father|Her critically ill daughter|Her elderly neighbour|Medium|The Price Of Love|Episode 37|Stephanie Markham|Friend's Husband|Euthanasia Concern|Brain Tumour|Moral Dilemma
Which nurse returned to Ward 17 as an agency worker in The Price of Love?|Bron Craig|Jaz Hillerman|Sophie Williams|Von Ryan|Hard|The Price Of Love|Episode 37|Bron Craig|Agency Nursing|Paramedic Stories|Former Ward Nurse|Shift Return
In Happy Death Day, which inherited disease did Bryan Taylor fear developing?|Huntington's disease|Motor neurone disease|Cystic fibrosis|Haemophilia|Hard|Happy Death Day|Episode 38|Bryan Taylor|Huntington's Disease|Genetic Risk|Suicide Attempt|Terri Sullivan
What kind of emergency trapped Ben and Bron together in Happy Death Day?|A siege at a drug laboratory|An earthquake in a tunnel|A shipboard fire|A flood in a shopping centre|Hard|Happy Death Day|Episode 38|Ben Markham|Bron Craig|Drug Laboratory Siege|Paramedic Danger|Relationship Bond
In Moment of Truth, which nurse's life was threatened by the illness she caught alongside two patients?|Stephanie Markham|Von Ryan|Bron Craig|Jaz Hillerman|Medium|Moment Of Truth|Episode 39|Stephanie Markham|Rare Infection|Two Patients|Medical Emergency|Staff Illness
Who told Bron he was falling in love with her after they were trapped in a collapsed building?|Ben Markham|Connor Costello|Luke Forlano|Jared Levine|Medium|Moment Of Truth|Episode 39|Ben Markham|Bron Craig|Love Confession|Collapsed Building|Romantic Tension
In Hard Rain, whom did Ben and Bron race to rescue from a storm-water drain?|A little girl|An injured police officer|A stranded dog walker|An elderly fisherman|Medium|Hard Rain|Episode 40|Ben Markham|Bron Craig|Child Rescue|Storm Water Drain|Flood Danger
Which doctor's growing attraction to Jared was explored in Hard Rain?|Samantha O'Hara|Phoebe Gibbs|Terri Sullivan|Sophie Williams|Hard|Hard Rain|Episode 40|Samantha O'Hara|Jared Levine|Growing Romance|Doctor Nurse Relationship|Hospital Staff
What was the title of the 41st and final episode of All Saints Season 1?|Christmas Spice|Hard Rain|The Price of Love|Moment of Truth|Medium|Christmas Spice|Episode 41|Season Finale|17 November 1998|Christmas At Ward 17|Final Episode|Festive Broadcast
In Christmas Spice, whose father-in-law threatened to seek custody of her children?|Sophie Williams's|Bron Craig's|Stephanie Markham's|Jaz Hillerman's|Medium|Christmas Spice|Episode 41|Sophie Williams|Father In Law|Custody Threat|Young Sons|Season Finale
What festive meal motivated a homeless man to remain in hospital in Christmas Spice?|Christmas dinner|An Easter breakfast|A wedding banquet|A New Year's brunch|Medium|Christmas Spice|Episode 41|Homeless Patient|Christmas Dinner|Ward Celebration|Hospital Stay|Festive Storyline
Who planned to reveal his romantic feelings to Bron in the Christmas Spice finale?|Connor Costello|Luke Forlano|Peter Morrison|Jared Levine|Medium|Christmas Spice|Episode 41|Connor Costello|Bron Craig|Planned Confession|Romantic Feelings|Finale Cliffhanger
Which two Ward 17 characters were awaiting test results at the end of Season 1?|Jared and Jaz|Terri and Von|Peter and Sophie|Connor and Luke|Hard|Christmas Spice|Episode 41|Jared Levine|Jaz Hillerman|Test Results|Finale Suspense|Season One Ending
Which recurring patient had an especially close friendship with Bron during his 1998 health crises?|Bob Parkin|Dr Harry Williams|Bryan Taylor|Raelene Gregson|Medium|Bob Parkin|Bron Craig|Recurring Patient|HIV Worries|Lung Operation|Friendship|1998 Patient Arc
What was Professor Richard Craig's medical specialty in the first series?|Cardiothoracic surgery|Paediatric neurology|Dermatology|Obstetrics|Medium|Richard Craig|Cardiothoracic Surgeon|Bron Craig Father|1998 Consultant|Heart Operations|Surgical Specialty|Possession
What former relationship linked Jared and Amanda during the first season?|They had been engaged|They were siblings|They were school teachers|They were cousins|Hard|Jared Levine|Amanda|Former Fiancée|Broken Engagement|Relationship History|The Hard Yards|1998 Reconciliation
Which doctor was still grieving for Jenny when he struggled to reconnect with colleagues later in 1998?|Peter Morrison|Luke Forlano|Harry Williams|Samantha O'Hara|Easy|Peter Morrison|Jenny Morrison|Widowhood|Grief|Ward Colleagues|Season One Arc|Emotional Recovery
Which emergency-services colleague became Bron's partner during her move into ambulance work?|Ben Markham|Connor Costello|Jared Levine|Richard Craig|Easy|Bron Craig|Ben Markham|Paramedics|Ambulance Partnership|Career Change|Late 1998|Boys Will Be Boys
Whose pregnancy loss strained the marriage of Ben and Stephanie Markham?|Stephanie's|Terri's|Bron's|Sophie's|Medium|Stephanie Markham|Ben Markham|Pregnancy Loss|Marriage Tension|Family Planning|1998 Storyline|Live Now Pay Later
Which patient was linked to Jared's worries about HIV exposure near the end of the first season?|Angie|Amanda|Rachel McMahon|Margaret Quinell|Hard|Jared Levine|Angie|HIV Exposure Concern|First Aid|Little White Lies|Nursing Safety|Exposure Fear
Which two colleagues helped an elderly doctor accept retirement in Moment of Truth?|Von Ryan and Samantha O'Hara|Terri Sullivan and Peter Morrison|Bron Craig and Luke Forlano|Jared Levine and Connor Costello|Medium|Moment Of Truth|Episode 39|Von Ryan|Samantha O'Hara|Elderly Doctor|Retirement Decision|Professional Dignity`;


// 1998 story, production and awards-nomination gap audit. Original IDs stay fixed.
// The programme ended in 2009; coverage remains incomplete until later season packs are audited.
const AUDIT_ORIGINAL_COUNT = 124;
const AUDIT_FIRST_ID = 42088;
const auditFacts = `Which writer and television producer created the Australian medical drama All Saints?|Bevan Lee|Jo Porter|John Holmes|Susan Bower|Medium|Bevan Lee|series creator|1998|programme development|original concept|Australian television|behind the scenes
Who developed the television drama All Saints alongside creator Bevan Lee?|Jo Porter|Di Drew|Georgie Parker|Judith McGrath|Medium|Jo Porter|series development|Bevan Lee|1998 debut|producer career|Seven Network|creative origins
Who served as the executive producer of the medical drama All Saints when it began?|John Holmes|Peter Sharp|Grant Brown|Mark Piper|Medium|John Holmes|executive producer|1998|production leadership|Seven Network|medical drama|programme origins
Who directed the first All Saints episode, Body and Soul, in 1998?|Peter Sharp|Karl Zwicky|Di Drew|Grant Brown|Medium|Peter Sharp|Body and Soul|episode 1|1998 pilot|director credit|series premiere|production team
Who wrote the premiere episode Body and Soul for All Saints?|Howard Griffiths|Bevan Lee|Susan Bower|Greg Haddrick|Medium|Howard Griffiths|Body and Soul|episode 1|1998|writer credit|screenplay|premiere
Which instrument featured prominently in the original opening theme of All Saints?|Saxophone|Bagpipes|Accordion|Harp|Medium|opening credits|theme music|saxophone|1998|title sequence|instrumentation|production design
Which All Saints Season 1 episode about a sibling kidney transplant received a 1998 AFI nomination?|Give and Take|Combat Zone|Terminal Speed|Heart to Heart|Medium|Give and Take|episode 6|1998 AFI Awards|best drama episode nomination|kidney transplant|industry recognition|award history
Which All Saints Season 1 episode involving a young mother's near-death experience was nominated for a 1998 AFI Award?|Revelations|Night Shift|Possession|Happy Death Day|Medium|Revelations|episode 20|1998 AFI Awards|best drama episode nomination|near death experience|industry recognition|award history
Which All Saints actress was nominated for Most Popular New Female Talent at the 1999 Logie Awards?|Libby Tanner|Georgie Parker|Judith McGrath|Kirrily White|Medium|Libby Tanner|Bron Craig|1999 Logies|new female talent nomination|acting recognition|debut season|Australian television
For which programme award was All Saints nominated at the 1999 TV Week Logies?|Most Popular Program|Best Sports Program|Most Popular Comedy Program|Best Children's Program|Medium|1999 Logies|Most Popular Program|programme nomination|Seven Network|first season response|Australian television award|industry recognition
Which All Saints actress received 1999 Logie nominations for both Most Popular Actress and the Gold Logie?|Georgie Parker|Libby Tanner|Justine Clarke|Sam Healy|Medium|Georgie Parker|Terri Sullivan|1999 Logies|Most Popular Actress nomination|Gold Logie nomination|early career recognition|acting awards
In All Saints episode Gut Feeling, which anxious country boy had his diagnosis disputed by Connor Costello?|Scott|Arnie|Robbie|Bryan|Hard|Gut Feeling|episode 3|Connor Costello|Scott|intern diagnosis|country patient|medical disagreement
In All Saints episode A Question of Strength, which patient's missed outpatient treatment worried Jared Levine?|Angie|Raelene|Rachel McMahon|Jenny Morrison|Medium|A Question of Strength|episode 4|Jared Levine|Angie|outpatient treatment|concealed nonattendance|continuity
In All Saints episode Night Shift, to which couple did Jared introduce his fiancée?|Ben and Stephanie Markham|Terri and Peter Morrison|Bron and Luke Forlano|Von and Connor Costello|Medium|Night Shift|episode 5|Jared Levine|Amanda|engagement|Ben Markham|Stephanie Markham
In All Saints episode Forget Me Not, who became the chief suspect when a newborn baby disappeared?|The baby's teenage mother|The nurse unit manager|The baby's grandfather|The attending surgeon|Medium|Forget Me Not|episode 9|missing baby|teenage mother|ward investigation|new parent|police suspicion
In All Saints episode Terminal Speed, which infection was Luke Forlano discovered to be carrying?|Staphylococcal infection|Malaria|Whooping cough|Tuberculosis|Medium|Terminal Speed|episode 11|Luke Forlano|staph infection|hospital transmission|surgical risks|infection control
In All Saints episode Nothing But the Truth, what extra staffing problem compounded the pressure from two high-dependency patients?|An incompetent agency nurse|A hospital-wide nursing strike|A missing ambulance driver|A cancelled visiting surgeon|Medium|Nothing But the Truth|episode 16|agency nurse|ward staff|high dependency|workload pressure|clinical competence
In All Saints episode Sounds of Silence, which nurse taught an elderly patient to be more independent?|Jared Levine|Connor Costello|Von Ryan|Bron Craig|Medium|Sounds of Silence|episode 18|Jared Levine|elderly patient|independence|nursing care|personal lesson
In All Saints episode Smooth Operator, what was the name of the visiting surgical consultant who attracted Luke Forlano?|Francesca Norman|Samantha O'Hara|Jenny Morrison|Stephanie Markham|Medium|Smooth Operator|episode 21|Francesca Norman|Luke Forlano|surgical consultant|romantic attraction|visiting doctor
In All Saints episode Truth or Dare, what condition affected the young person Von helped prepare for work?|Diabetes|Epilepsy|Asthma|Arthritis|Medium|Truth or Dare|episode 22|Von Ryan|diabetic youth|employment adjustment|patient counselling|clinical support
In All Saints episode The Price You Pay, which risky habit of a young patient concerned Bron Craig?|Binge drinking|Smoking cannabis|Steroid injections|Speeding on a motorbike|Medium|The Price You Pay|episode 24|Bron Craig|young patient|alcohol misuse|health education|risk behaviour
In All Saints episode Cards on the Table, what did Stephanie Markham feel ready to tell her husband Ben?|That she might never want children|That she had resigned from nursing|That she wanted a divorce|That she planned to move overseas|Medium|Cards on the Table|episode 32|Stephanie Markham|Ben Markham|family planning|marriage honesty|reproductive choice
In All Saints episode Live Now Pay Later, what condition did Bron recognise in ambulance officer Ben Markham?|Post-traumatic stress disorder|Epilepsy|Diabetes|Amnesia|Medium|Live Now Pay Later|episode 34|Ben Markham|Bron Craig|trauma response|ambulance work|mental health
In All Saints episode Out of Control, who endangered Terri Sullivan after a patient was treated for domestic violence?|The patient's husband|The patient's sister|The hospital cleaner|The ambulance supervisor|Medium|Out of Control|episode 35|Terri Sullivan|domestic violence|patient's husband|threat to nurse|clinical safety
In All Saints episode The Price of Love, what worried Peter Morrison about his late wife's organ donation?|Who had received her organs|Whether she had signed a will|Whether her funeral was delayed|Whether the hospital had lost her records|Medium|The Price of Love|episode 37|Peter Morrison|Jenny Morrison|organ recipients|bereavement|transplant donation
In All Saints episode Happy Death Day, which document complicated care for a suicidal patient admitted after an overdose?|A do-not-resuscitate directive|A signed adoption order|A marriage certificate|A property deed|Medium|Happy Death Day|episode 38|suicide attempt|overdose|do not resuscitate|ethical conflict|Terri Sullivan
In All Saints season one finale Christmas Spice, what hopeful development occurred for a young patient with leukaemia?|Her illness went into remission|She received a new kidney|She was offered a place at medical school|She learned she had been adopted|Medium|Christmas Spice|episode 41|leukaemia|remission|sick child|festive episode|hopeful outcome`;

let sequence = 0;
const questions = [...facts.trim().split('\n'), ...auditFacts.trim().split('\n')].map(line => {
  const id = 'tv_' + String(sequence < AUDIT_ORIGINAL_COUNT ? FIRST_ID + sequence : AUDIT_FIRST_ID + sequence - AUDIT_ORIGINAL_COUNT).padStart(5, '0');
  const fields = line.trim().split('|').map(s => s.trim());

  if (fields.length !== 13)
    throw new Error(`Expected 13 fields for ${id}; got ${fields.length}`);

  const [
    question, correctAnswer, wrong1, wrong2, wrong3,
    difficulty, ...specificTags
  ] = fields;

  if (!question || [
    correctAnswer, wrong1, wrong2, wrong3, ...specificTags
  ].some(v => !v))
    throw new Error(`Empty field in ${id}`);

  if (!['Easy', 'Medium', 'Hard'].includes(difficulty) ||
      specificTags.length !== 7)
    throw new Error(`Invalid difficulty or individual tags in ${id}`);

  if (new Set([
    correctAnswer, wrong1, wrong2, wrong3
  ].map(s => s.toLowerCase())).size !== 4)
    throw new Error(`Repeated answer option in ${id}`);

  const answers = [wrong1, wrong2, wrong3];
  answers.splice(sequence % 4, 0, correctAnswer);

  const tags = [...new Map([
    ...commonTags, correctAnswer, ...specificTags
  ].map(tag => [tag.toLowerCase(), tag])).values()];

  sequence++;

  return {
    id,
    category: 'Television',
    programme,
    question,
    answers,
    correctAnswer,
    difficulty,
    tags,
    dailyEligible: true
  };
});

if (
  !questions.length ||
  questions[0].id !== 'tv_23942' ||
  new Set(questions.map(q => q.id)).size !== questions.length ||
  new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length ||
  questions.some(q =>
    q.answers.length !== 4 ||
    !q.answers.includes(q.correctAnswer) ||
    q.tags.length < 14 ||
    !q.tags.includes('Programme: All Saints') ||
    q.dailyEligible !== true
  )
) {
  throw new Error('Pack 420 exported question validation failed');
}

module.exports = questions;