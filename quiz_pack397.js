
// PuzzlePilot - Big Quiz - Pack 397
// Happy Valley (2014-2023): all three series, all 18 television episodes.
// Complete WordPad-ready CommonJS file. First ID: tv_21731.
'use strict';

const FIRST_ID = 21731;
const commonTags = ['television', 'British TV', 'BBC One', 'Happy Valley', 'Sally Wainwright', 'crime drama'];

// Each row: question | correct answer | three distractors | difficulty | seven precise question-specific tags.
// Every exported question explicitly names Happy Valley for standalone or mixed-topic quizzes.
const rows = [
  // Core series, cast, setting and relationships
  `Who created and wrote the television drama Happy Valley?|Sally Wainwright|Jed Mercurio|Chris Chibnall|Kay Mellor|Easy|series creator|screenwriter|British television|writer credit|2014 premiere|2016 return|2023 finale`,
  `Which actress plays police sergeant Catherine Cawood in Happy Valley?|Sarah Lancashire|Siobhan Finneran|Katherine Kelly|Amelia Bullmore|Easy|Sarah Lancashire|Catherine Cawood|police sergeant|leading actress|Calder Valley|casting|main protagonist`,
  `Which actor plays Tommy Lee Royce in Happy Valley?|James Norton|George Costigan|Steve Pemberton|Kevin Doyle|Easy|James Norton|Tommy Lee Royce|series antagonist|Ryan father|casting|criminal history|lead role`,
  `Who plays Catherine's sister Clare Cartwright in Happy Valley?|Siobhan Finneran|Sarah Lancashire|Julie Hesmondhalgh|Susan Lynch|Easy|Siobhan Finneran|Clare Cartwright|Catherine sister|recovering addict|family|casting|main character`,
  `Which actor plays Catherine's grandson Ryan Cawood throughout Happy Valley?|Rhys Connah|Karl Davies|Robert Emms|Matthew Lewis|Easy|Rhys Connah|Ryan Cawood|Catherine grandson|Tommy son|child actor|casting|family`,
  `Who portrays businessman Nevison Gallagher in Happy Valley?|George Costigan|Joe Armstrong|Vincent Franklin|Derek Riddell|Medium|George Costigan|Nevison Gallagher|Ann father|business owner|kidnapping victim family|casting|series 1`,
  `Which actress portrays Nevison's daughter Ann Gallagher in Happy Valley?|Charlie Murphy|Sophie Rundle|Amelia Bullmore|Shirley Henderson|Easy|Charlie Murphy|Ann Gallagher|Nevison daughter|kidnapping survivor|police career|casting|supporting lead`,
  `What is Catherine Cawood's rank at the beginning of Happy Valley?|Police sergeant|Chief constable|Detective inspector|Police community support officer|Easy|Catherine Cawood|sergeant rank|West Yorkshire Police|uniformed officer|career|series 1|police hierarchy`,
  `In which West Yorkshire area is Happy Valley primarily set?|The Calder Valley|The Aire Valley|The Don Valley|The Holme Valley|Easy|Calder Valley|West Yorkshire|Hebden Bridge|local setting|police district|Pennines|locations`,
  `What is the name of Catherine's late daughter in Happy Valley?|Becky|Helen|Joanna|Jenny|Easy|Becky Cawood|Catherine daughter|Ryan mother|family tragedy|past storyline|bereavement|suicide`,
  `Who is Ryan Cawood's biological father in Happy Valley?|Tommy Lee Royce|Daniel Cawood|Nevison Gallagher|Kevin Weatherill|Easy|Ryan Cawood|Tommy Lee Royce|Becky Cawood|parentage|family relationship|storyline reveal|grandson`,
  `Who plays Catherine's adult son Daniel Cawood in Happy Valley?|Karl Davies|Adam Long|Rick Warden|Joe Armstrong|Medium|Karl Davies|Daniel Cawood|Catherine son|Ryan uncle|family relationships|casting|series 1`,
  `Which actor plays Catherine's former husband Richard Cawood in Happy Valley?|Derek Riddell|George Costigan|Con O'Neill|Steve Pemberton|Medium|Derek Riddell|Richard Cawood|Catherine ex husband|Daniel father|family separation|casting|series 3 return`,
  `Which company produced the first two series of Happy Valley for the BBC?|Red Production Company|World Productions|Left Bank Pictures|Hat Trick Productions|Medium|Red Production Company|Nicola Shindler|production credits|British television|company history|crime series|BBC commission`,
  `How many episodes comprise each of Happy Valley's three series?|Six|Four|Eight|Ten|Easy|three series|18 episodes|series length|2014|2016|2023|programme format`,
  `In which year did the final series of Happy Valley begin airing?|2023|2019|2020|2025|Easy|series 3|2023 broadcast|final season|Sunday broadcast|New Years Day|closing run|release chronology`,

  // Series 1 (2014), Episodes 1 and 2: kidnapping conceived and carried out
  `Which character devises the ransom kidnapping that begins Happy Valley's first series?|Kevin Weatherill|Nevison Gallagher|Daniel Cawood|Richard Cawood|Easy|series 1|Kevin Weatherill|kidnapping plot|ransom plan|Ann Gallagher|accountant|2014`,
  `Who plays accountant Kevin Weatherill in Happy Valley's first series?|Steve Pemberton|Joe Armstrong|Vincent Franklin|George Costigan|Medium|series 1|Steve Pemberton|Kevin Weatherill|accountant character|casting|kidnap conspiracy|2014`,
  `Who is Kevin Weatherill's employer in Happy Valley's first series?|Nevison Gallagher|Ashley Cowgill|John Wadsworth|Mike Taylor|Easy|series 1|Kevin Weatherill|Nevison Gallagher|company boss|employment relationship|kidnapping motive|2014`,
  `Why does Kevin initially become resentful of Nevison in Happy Valley?|He refuses to fund schooling for Kevin's daughters|He takes Kevin's house in a divorce|He dismisses Kevin for stealing stock|He refuses Kevin permission to marry|Medium|series 1|Kevin Weatherill|Nevison Gallagher|school fees|financial resentment|private education|2014`,
  `Who is the intended kidnapping victim in the first series of Happy Valley?|Ann Gallagher|Clare Cartwright|Catherine Cawood|Helen Gallagher|Easy|series 1|Ann Gallagher|abduction victim|Nevison daughter|ransom|kidnap plot|2014`,
  `Which local criminal does Kevin approach to organise the kidnapping in Happy Valley?|Ashley Cowgill|Daryl Garrs|John Wadsworth|Faisal Bhatti|Medium|series 1|Ashley Cowgill|Kevin Weatherill|kidnapping organiser|ransom scheme|crime network|2014`,
  `Which actor plays criminal Ashley Cowgill in Happy Valley?|Joe Armstrong|Adam Long|Steve Pemberton|Matthew Lewis|Medium|series 1|Joe Armstrong|Ashley Cowgill|gang organiser|cast credit|kidnap scheme|2014`,
  `Who is Lewis Whippey's partner in carrying out the abduction in Happy Valley?|Tommy Lee Royce|John Wadsworth|Daryl Garrs|Rob Hepworth|Medium|series 1|Lewis Whippey|Tommy Lee Royce|kidnappers|Ann Gallagher|ransom crime|2014`,
  `Which actor plays Lewis Whippey in Happy Valley?|Adam Long|Rhys Connah|Robert Emms|Con O'Neill|Medium|series 1|Adam Long|Lewis Whippey|kidnapping accomplice|casting|Tommy Lee Royce|2014`,
  `What does Kevin Weatherill attempt at the police station before losing his nerve in Happy Valley?|Reporting the kidnapping plot|Applying for a job as a detective|Handing over a bag of counterfeit money|Reporting his daughters missing|Medium|series 1|Kevin Weatherill|police station|aborted confession|Catherine Cawood|guilty conscience|2014`,
  `What clue does Catherine retain after Kevin leaves the station without making a report in Happy Valley?|His vehicle registration|His fingerprint on a coffee cup|A torn train ticket|A photograph of his family|Hard|series 1|Catherine Cawood|Kevin Weatherill|number plate|investigative clue|police station encounter|2014`,
  `Whom does Kevin confess his role in the kidnapping to during Happy Valley Series 1?|His wife Jenny|His boss Nevison|His mother Clare|His colleague Ann|Medium|series 1|Kevin Weatherill|Jenny Weatherill|marital confession|guilt|kidnapping secret|2014`,
  `Who refuses to involve the police because of fears for his abducted daughter in Happy Valley?|Nevison Gallagher|Richard Cawood|Daniel Cawood|John Wadsworth|Medium|series 1|Nevison Gallagher|Ann Gallagher|ransom demands|father daughter|police reluctance|2014`,
  `What family disagreement troubles Catherine alongside the kidnapping case in Happy Valley Series 1?|Richard refuses to accept Ryan as his grandson|Daniel wants to move to France|Clare plans to marry Tommy|Becky asks to leave university|Medium|series 1|Richard Cawood|Ryan Cawood|Catherine Cawood|family division|grandparent conflict|2014`,

  // Series 1, Episodes 3 to 6: tragic escalation, rescue and arrest
  `Which young police officer does Tommy kill during a vehicle stop in Happy Valley Series 1?|Kirsten McAskill|Ann Gallagher|Jodie Shackleton|Ilinka Blazevic|Easy|series 1|Kirsten McAskill|Tommy Lee Royce|police death|roadside stop|murder|2014`,
  `Which actress plays PC Kirsten McAskill in Happy Valley?|Sophie Rundle|Shirley Henderson|Charlie Murphy|Katherine Kelly|Medium|series 1|Sophie Rundle|Kirsten McAskill|police officer|supporting cast|roadside murder|2014`,
  `Who is driving the vehicle when PC Kirsten McAskill makes her fatal traffic stop in Happy Valley?|Lewis Whippey|Ashley Cowgill|Kevin Weatherill|Tommy Lee Royce|Hard|series 1|Lewis Whippey|Kirsten McAskill|vehicle stop|kidnapped Ann|Tommy Royce|2014`,
  `What is being hidden in the vehicle stopped by Kirsten in Happy Valley?|Kidnapped Ann Gallagher|A shipment of stolen jewellery|A corpse from the river|Forged passports|Medium|series 1|Ann Gallagher|Kirsten McAskill|Lewis Whippey|abduction|vehicle inspection|2014`,
  `Who is Nevison Gallagher's wife in Happy Valley's first series?|Helen|Jenny|Amanda|Alison|Medium|series 1|Helen Gallagher|Nevison wife|Ann mother|family relationships|kidnap ordeal|2014`,
  `What illness is Helen Gallagher living with during Ann's kidnapping in Happy Valley?|Terminal cancer|Alzheimer's disease|Multiple sclerosis|Motor neurone disease|Medium|series 1|Helen Gallagher|terminal cancer|Ann Gallagher|Nevison family|family illness|2014`,
  `Whose cellar does Tommy use to imprison Ann Gallagher in Happy Valley?|His mother's|Kevin Weatherill's|Nevison Gallagher's|Ashley Cowgill's|Medium|series 1|Tommy Lee Royce|Lynn Dewhurst|Ann Gallagher|cellar captivity|kidnap hideout|2014`,
  `Who discovers Ann being held prisoner and attempts to rescue her in Happy Valley Series 1?|Catherine Cawood|Clare Cartwright|Kirsten McAskill|Jenny Weatherill|Easy|series 1|Catherine Cawood|Ann Gallagher|hostage rescue|cellar discovery|Tommy Royce|2014`,
  `What happens to Catherine during her confrontation with Tommy in the cellar in Happy Valley?|She is seriously injured in an attack|She is arrested by another officer|She accidentally shoots Ann|She immediately convinces Tommy to surrender|Easy|series 1|Catherine Cawood|Tommy Lee Royce|violent assault|hospitalisation|Ann rescued|2014`,
  `Who agrees to help investigators by entering witness protection after the failed kidnap scheme in Happy Valley?|Ashley Cowgill|Kevin Weatherill|Lewis Whippey|Tommy Lee Royce|Hard|series 1|Ashley Cowgill|witness protection|drug trafficking|police cooperation|kidnap aftermath|2014`,
  `What happens to Ashley Cowgill before he can enter witness protection in Happy Valley?|He is shot dead|He escapes to Australia|He dies in a car crash|He confesses in court|Medium|series 1|Ashley Cowgill|witness protection|fatal shooting|drug gang|betrayal|2014`,
  `Which two fugitives does Tommy kill while hiding from police late in Happy Valley Series 1?|Lewis Whippey and Brett McKendrick|Kevin Weatherill and Nevison Gallagher|Richard Cawood and Daniel Cawood|Ashley Cowgill and John Wadsworth|Hard|series 1|Lewis Whippey|Brett McKendrick|Tommy Royce|fugitives|murders|2014`,
  `What form of transport becomes Tommy's hideout in the Happy Valley Series 1 finale?|A narrowboat|A fishing trawler|A campervan|A canal-side train carriage|Medium|series 1|Tommy Lee Royce|narrowboat|Ryan Cawood|finale|hideout|2014`,
  `Whom does Tommy lure to his narrowboat in the first Happy Valley series finale?|Ryan Cawood|Daniel Cawood|Kevin Weatherill|Nevison Gallagher|Easy|series 1|Ryan Cawood|Tommy Lee Royce|narrowboat|kidnapping threat|family connection|2014`,
  `What helps Catherine locate Ryan at Tommy's boat in Happy Valley Series 1?|She spots Ryan's bicycle nearby|A helicopter lands on the canal|She receives a call from Tommy's lawyer|A child finds a map in school|Medium|series 1|Catherine Cawood|Ryan bicycle|narrowboat|hostage rescue|final pursuit|2014`,
  `Which family event becomes tense when Daniel raises troubling questions about Becky in Happy Valley Series 1?|Catherine's birthday party|Ryan's graduation dinner|Clare's wedding reception|Nevison's retirement party|Medium|series 1|Catherine Cawood|Daniel Cawood|Becky Cawood|birthday party|family confrontation|2014`,
  `Where does Catherine finally apprehend Tommy at the end of Happy Valley's first series?|At the narrowboat|At Nevison's factory|In a London hotel|Outside a football ground|Easy|series 1|Catherine Cawood|Tommy Lee Royce|narrowboat ending|Ryan rescue|arrest|2014`,

  // Series 2 (2016), Episode 1: two murder investigations and old relationships
  `Whose body does Catherine find while investigating sheep rustling in Happy Valley Series 2?|Lynn Dewhurst's|Vicky Fleming's|Helen Gallagher's|Jenny Weatherill's|Easy|series 2|Lynn Dewhurst|Tommy mother|garage discovery|sheep rustling|murder victim|2016`,
  `How is Lynn Dewhurst related to Tommy Lee Royce in Happy Valley?|She is his mother|She is his sister|She is his aunt|She is his former wife|Easy|series 2|Lynn Dewhurst|Tommy Lee Royce|mother son|family relationship|murder inquiry|2016`,
  `Why does Catherine briefly come under suspicion in Lynn Dewhurst's murder inquiry in Happy Valley?|She had previously threatened Lynn over Ryan|She held the keys to Lynn's garage|She was seen buying a murder weapon|She had inherited Lynn's house|Medium|series 2|Catherine Cawood|Lynn Dewhurst|previous threat|suspect questioning|Ryan Cawood|2016`,
  `What new role has Ann Gallagher taken when she returns in Happy Valley Series 2?|Police community support officer|Defence solicitor|School headteacher|Hospital pharmacist|Easy|series 2|Ann Gallagher|PCSO|police service|kidnapping survivor|career change|2016`,
  `Which old acquaintance of Clare returns and becomes her partner in Happy Valley Series 2?|Neil Ackroyd|Richard Cawood|John Wadsworth|Kevin Weatherill|Medium|series 2|Clare Cartwright|Neil Ackroyd|old flame|romance|recovering alcoholic|2016`,
  `Which actor plays Neil Ackroyd in Happy Valley?|Con O'Neill|George Costigan|Derek Riddell|Rick Warden|Medium|series 2|Con O Neill|Neil Ackroyd|Clare partner|casting|local shop|2016`,
  `Which detective sergeant's secret affair develops into a central crisis in Happy Valley Series 2?|John Wadsworth|Mike Taylor|Andy Shepherd|Shafiq Shah|Easy|series 2|John Wadsworth|Vicky Fleming|extramarital affair|police detective|blackmail|2016`,
  `Who plays Detective Sergeant John Wadsworth in Happy Valley?|Kevin Doyle|George Costigan|Matthew Lewis|Vincent Franklin|Medium|series 2|Kevin Doyle|John Wadsworth|CID officer|actor credit|murder subplot|2016`,
  `Who is John Wadsworth's wife in Happy Valley Series 2?|Amanda Wadsworth|Helen Gallagher|Jenny Weatherill|Alison Garrs|Medium|series 2|Amanda Wadsworth|Julie Hesmondhalgh|John marriage|family life|betrayal|2016`,
  `Who plays Amanda Wadsworth in Happy Valley?|Julie Hesmondhalgh|Siobhan Finneran|Amelia Bullmore|Susan Lynch|Medium|series 2|Julie Hesmondhalgh|Amanda Wadsworth|John wife|casting|family subplot|2016`,

  // Series 2, Episodes 1 to 3: blackmail, trafficking and Tommy's visitor
  `Who blackmails John Wadsworth after their affair in Happy Valley Series 2?|Vicky Fleming|Frances Drummond|Jodie Shackleton|Alison Garrs|Easy|series 2|Vicky Fleming|John Wadsworth|blackmail demands|affair|threatened exposure|2016`,
  `Which actress plays Vicky Fleming in Happy Valley?|Amelia Bullmore|Shirley Henderson|Katherine Kelly|Angela Pleasence|Medium|series 2|Amelia Bullmore|Vicky Fleming|blackmailer|casting|John Wadsworth|2016`,
  `What does John Wadsworth do to Vicky Fleming after their confrontation in Happy Valley?|He strangles her|He shoots her during a robbery|He pushes her into a river|He poisons her medication|Hard|series 2|John Wadsworth|Vicky Fleming|murder|violent confrontation|affair coverup|2016`,
  `What is John's strategy for concealing Vicky Fleming's murder in Happy Valley?|Making it resemble the other serial killings|Creating a fake ransom demand|Planting evidence at Nevison's house|Claiming she died in a road accident|Hard|series 2|John Wadsworth|Vicky Fleming|crime scene staging|serial killer inquiry|arson|2016`,
  `How many trafficked women are rescued in a major Happy Valley Series 2 police operation?|Twenty-one|Five|Twelve|Forty|Hard|series 2|human trafficking|21 women|police raid|Catherine Cawood|rescue operation|2016`,
  `Which Croatian survivor of trafficking gives police vital information in Happy Valley Series 2?|Ilinka Blazevic|Jodie Shackleton|Frances Drummond|Amanda Wadsworth|Medium|series 2|Ilinka Blazevic|Croatian survivor|human trafficking|witness protection|police testimony|2016`,
  `With which neighbour does Catherine arrange for Ilinka to stay in Happy Valley Series 2?|Winnie|Alison Garrs|Helen Gallagher|Jenny Weatherill|Medium|series 2|Winnie|Ilinka Blazevic|safe accommodation|trafficking survivor|Catherine neighbour|2016`,
  `Who visits the imprisoned Tommy Lee Royce and becomes involved with Ryan's school in Happy Valley Series 2?|Frances Drummond|Vicky Fleming|Jodie Shackleton|Alison Garrs|Easy|series 2|Frances Drummond|Tommy admirer|Ryan school|prison visits|manipulation|2016`,
  `Which actress portrays Frances Drummond in Happy Valley?|Shirley Henderson|Amelia Bullmore|Susan Lynch|Katherine Kelly|Medium|series 2|Shirley Henderson|Frances Drummond|teaching assistant|casting|Tommy admirer|2016`,
  `What position does Frances Drummond take to become close to Ryan in Happy Valley?|Teaching assistant at his school|Driver of his school bus|Nurse at his surgery|Coach of his football team|Medium|series 2|Frances Drummond|Ryan Cawood|teaching assistant|school access|Tommy manipulation|2016`,
  `At whose funeral does Catherine confront Tommy while he is escorted by prison officers in Happy Valley Series 2?|His mother Lynn's|Helen Gallagher's|Vicky Fleming's|Kirsten McAskill's|Medium|series 2|Tommy Lee Royce|Lynn Dewhurst|funeral|prison escort|Catherine Cawood|2016`,
  `Which senior detective oversees the investigation into the serial murders in Happy Valley Series 2?|Andy Shepherd|Richard Cawood|Kevin Weatherill|Ashley Cowgill|Medium|series 2|Andy Shepherd|Vincent Franklin|detective superintendent|serial killer inquiry|police leadership|2016`,
  `Who plays Detective Inspector Jodie Shackleton in Happy Valley?|Katherine Kelly|Sarah Lancashire|Sophie Rundle|Charlie Murphy|Medium|series 2|Katherine Kelly|Jodie Shackleton|CID investigator|casting|serial murders|2016`,

  // Series 2, Episodes 4 to 6: false suspect and revelations
  `What toy does Ryan receive as a supposedly anonymous birthday gift in Happy Valley Series 2?|A Scalextric racing set|A model train station|A football goal|A remote-control helicopter|Medium|series 2|Ryan Cawood|birthday present|Scalextric|Tommy Royce|Frances Drummond|2016`,
  `How does Catherine react to the suspicious birthday present for Ryan in Happy Valley?|She throws it away|She hands it to his school|She sends it to Tommy in prison|She keeps it hidden until Christmas|Medium|series 2|Catherine Cawood|Ryan Cawood|Scalextric|family disagreement|Tommy influence|2016`,
  `Which employee of Nevison Gallagher is wrongly suspected of the series of murders in Happy Valley Series 2?|Sean Balmforth|Neil Ackroyd|Daniel Cawood|Lewis Whippey|Easy|series 2|Sean Balmforth|Nevison employee|wrongful suspicion|serial killer case|police arrest|2016`,
  `Which Harry Potter actor plays Sean Balmforth in Happy Valley?|Matthew Lewis|Tom Felton|Alfred Enoch|Devon Murray|Medium|series 2|Matthew Lewis|Sean Balmforth|actor credit|suspect character|Nevison company|2016`,
  `What development undermines the case that Sean Balmforth committed all the murders in Happy Valley?|Another victim is found while he is in custody|He produces a confession from Tommy|His fingerprints match a police officer|A witness says the murders happened abroad|Hard|series 2|Sean Balmforth|new murder|wrongly accused|serial killer case|custody|2016`,
  `Who is revealed to be the murderer of several vulnerable women in Happy Valley Series 2?|Daryl Garrs|Sean Balmforth|John Wadsworth|Neil Ackroyd|Medium|series 2|Daryl Garrs|serial killings|farmer|Alison son|murder reveal|2016`,
  `Which actor plays Daryl Garrs in Happy Valley?|Robert Emms|Matthew Lewis|Con O'Neill|Rick Warden|Medium|series 2|Robert Emms|Daryl Garrs|young farmer|casting|murder investigation|2016`,
  `Who is the mother of Daryl Garrs in Happy Valley?|Alison Garrs|Amanda Wadsworth|Vicky Fleming|Frances Drummond|Easy|series 2|Alison Garrs|Daryl Garrs|mother and son|farmer family|Far Sunderland|2016`,
  `Which actress plays Alison Garrs in Happy Valley?|Susan Lynch|Julie Hesmondhalgh|Amelia Bullmore|Katherine Kelly|Medium|series 2|Susan Lynch|Alison Garrs|farm mother|casting|Daryl Garrs|2016`,
  `What does Alison do after Daryl confesses his crimes to her in Happy Valley?|She shoots him dead|She calls his solicitor|She helps him escape to Spain|She turns him in at the police station|Hard|series 2|Alison Garrs|Daryl Garrs|mother kills son|family tragedy|farmhouse|2016`,
  `How does Alison try to take her own life after Daryl's death in Happy Valley?|An overdose of tablets|Jumping from a bridge|Setting the farmhouse alight|Driving into a reservoir|Hard|series 2|Alison Garrs|diazepam overdose|Daryl death|Catherine rescue|farmhouse|2016`,
  `Whose murder does Daryl insist he did not commit, leading police to another culprit in Happy Valley?|Vicky Fleming's|Lynn Dewhurst's|One of the other prostitutes'|Kirsten McAskill's|Hard|series 2|Daryl Garrs|Vicky Fleming|John Wadsworth|distinct murder|final confession|2016`,
  `What real identity does the school worker Frances use deceptively in Happy Valley Series 2?|Her deceased sister Cecily Wealand's|Her mother's maiden name Catherine Gray|The name of a retired teacher from Leeds|The name of a former pupil's parent|Hard|series 2|Frances Drummond|Cecily Wealand|false identity|deceased sister|school infiltration|2016`,
  `Where does John Wadsworth die as his crimes are exposed in Happy Valley Series 2?|He jumps from a bridge|He is shot in a police interview room|He collapses at his desk|He is killed in a prison fight|Medium|series 2|John Wadsworth|bridge suicide|Vicky Fleming|Catherine investigation|murder reveal|2016`,
  `Who identifies John Wadsworth as Vicky's killer by connecting several clues in Happy Valley?|Catherine Cawood|Ryan Cawood|Tommy Lee Royce|Nevison Gallagher|Medium|series 2|Catherine Cawood|John Wadsworth|Vicky Fleming|deduction|murder investigation|2016`,
  `What happens to Frances Drummond's belief that she is Tommy's special romantic partner in Happy Valley?|She learns he has cultivated other admirers|She discovers he is secretly married to Catherine|She learns he has been released from prison|She finds he was never Ryan's father|Medium|series 2|Frances Drummond|Tommy Lee Royce|other admirers|prison visitors|manipulation exposed|2016`,

  // Series 3 (2023), Episodes 1 and 2: reservoir, family betrayal and pharmacist
  `What discovery draws Catherine into a murder inquiry at the start of Happy Valley Series 3?|Human remains in a drained reservoir|A body inside a burned-out police car|A ransom note hidden in a church|An abandoned boat carrying stolen medicines|Easy|series 3|drained reservoir|human skeleton|Catherine Cawood|cold case|Ripponden|2023`,
  `Near which village is the drained reservoir linked to the opening of Happy Valley Series 3?|Ripponden|Haworth|Ilkley|Marsden|Medium|series 3|Ripponden|reservoir scene|West Yorkshire|murder remains|episode 1|2023`,
  `Which organised-crime family is a focus of the reservoir investigation in Happy Valley's final series?|The Knezevic family|The Gallaghers|The Weatherills|The Garrs family|Medium|series 3|Knezevic gang|Darius Knezevic|reservoir murder|organised crime|police investigation|2023`,
  `What future event is Catherine preparing for at the beginning of Happy Valley Series 3?|Retirement from the police|A move to become chief constable|A university graduation|Her wedding to Nevison|Easy|series 3|Catherine Cawood|retirement plan|final police shift|career ending|personal future|2023`,
  `Who is secretly accompanying Ryan on visits to his imprisoned father in Happy Valley Series 3?|Clare and Neil|Daniel and Nevison|Richard and Ann|Mike Taylor and Joyce|Easy|series 3|Ryan Cawood|Clare Cartwright|Neil Ackroyd|prison visits|family betrayal|2023`,
  `What does Catherine discover about Ryan's contact with Tommy in Happy Valley Series 3?|He has been visiting Tommy in prison|He has adopted Tommy's surname|He is working as Tommy's solicitor|He has arranged Tommy's parole|Easy|series 3|Ryan Cawood|Tommy Lee Royce|prison visits|family secrecy|Catherine betrayal|2023`,
  `In what sort of business does Faisal Bhatti work in Happy Valley's final series?|A pharmacy|A bookmaker's|A motor garage|A florist's shop|Easy|series 3|Faisal Bhatti|pharmacist|controlled medicines|local business|neighbourhood|2023`,
  `Which actor portrays pharmacist Faisal Bhatti in Happy Valley?|Amit Shah|Alec Secareanu|Mark Stanley|Anthony Flanagan|Medium|series 3|Amit Shah|Faisal Bhatti|pharmacist|Joanna storyline|casting|2023`,
  `What illegal activity puts Faisal under pressure from a criminal gang in Happy Valley?|Supplying prescription drugs outside legal channels|Counterfeiting football match tickets|Selling stolen antiques|Manufacturing fake driving licences|Medium|series 3|Faisal Bhatti|illegal prescriptions|diazepam|gang blackmail|drug dealing|2023`,
  `Which neighbour is among Faisal Bhatti's illicit customers in Happy Valley?|Joanna Hepworth|Clare Cartwright|Ann Gallagher|Alison Garrs|Easy|series 3|Joanna Hepworth|Faisal Bhatti|drug supply|neighbours|prescription medication|2023`,
  `Who plays Joanna Hepworth in the final series of Happy Valley?|Mollie Winnard|Amelia Bullmore|Charlie Murphy|Katherine Kelly|Medium|series 3|Mollie Winnard|Joanna Hepworth|Rob wife|casting|domestic abuse subplot|2023`,
  `What position does Rob Hepworth hold at Ryan's school in Happy Valley?|PE teacher and football coach|Head of music|School librarian|Chemistry laboratory assistant|Medium|series 3|Rob Hepworth|Ryan coach|PE teacher|football|school conflict|2023`,
  `Which actor portrays Rob Hepworth in Happy Valley?|Mark Stanley|Robert Emms|Matthew Lewis|Kevin Doyle|Medium|series 3|Mark Stanley|Rob Hepworth|PE teacher|Joanna husband|casting|2023`,
  `How is Joanna Hepworth treated by her husband Rob in Happy Valley's final series?|He is coercive and physically abusive|He encourages her to take a job abroad|He supports her move to university|He helps her report the drug gang|Medium|series 3|Joanna Hepworth|Rob Hepworth|domestic abuse|coercive control|family storyline|2023`,
  `Who is Darius Knezevic in Happy Valley's third series?|A powerful organised-crime boss|A newly appointed police inspector|Ryan's geography teacher|Catherine's former husband|Easy|series 3|Darius Knezevic|organised crime|Tommy associate|gang leader|West Yorkshire|2023`,
  `Which actor plays Darius Knezevic in Happy Valley?|Alec Secareanu|Amit Shah|Con O'Neill|Vincent Franklin|Medium|series 3|Alec Secareanu|Darius Knezevic|Romanian actor|gang leader|cast credit|2023`,

  // Series 3, Episodes 2 to 4: growing conflict, killing and prison escape
  `What does Catherine do on learning Clare concealed Ryan's prison visits in Happy Valley?|Confronts Clare about the betrayal|Immediately sells the family house|Moves permanently to London|Arrests Clare for kidnapping|Medium|series 3|Catherine Cawood|Clare Cartwright|Ryan prison visits|sibling conflict|betrayal|2023`,
  `How long had Ryan been corresponding with Tommy before the final Happy Valley series, according to Clare?|Since he was ten|Since he was fifteen|Only for the previous month|Since his eighteenth birthday|Hard|series 3|Ryan Cawood|letters to Tommy|childhood correspondence|Clare revelation|prison relationship|2023`,
  `What does Joanna falsely claim Rob knows when pressuring Faisal to help her in Happy Valley?|Faisal's illegal drug-supplying business|The location of Tommy's prison cell|The identity of Catherine's informant|A stolen antiques scheme|Medium|series 3|Joanna Hepworth|Faisal Bhatti|blackmail|false claim|escape from Rob|2023`,
  `Who kills Joanna Hepworth in Happy Valley Series 3?|Faisal Bhatti|Rob Hepworth|Darius Knezevic|Tommy Lee Royce|Medium|series 3|Joanna Hepworth|Faisal Bhatti|murder|neighbour dispute|drug subplot|2023`,
  `What triggers Faisal's fatal attack on Joanna in Happy Valley?|She admits her claim about Rob knowing his crimes was false|She reports his pharmacy to police in person|She confesses to stealing a police file|She announces that she is moving abroad with him|Hard|series 3|Faisal Bhatti|Joanna Hepworth|false blackmail claim|rage|murder motive|2023`,
  `Where is Joanna Hepworth's body eventually discovered in Happy Valley?|In a suitcase in her garage|Buried beside a reservoir|Inside her husband's school office|In an abandoned railway carriage|Medium|series 3|Joanna Hepworth|suitcase|garage|Rob Hepworth|body discovery|2023`,
  `Who is initially suspected by police in Joanna Hepworth's death in Happy Valley?|Her husband Rob|Her neighbour Clare|Her teacher colleague Ann|Her mother Helen|Medium|series 3|Rob Hepworth|Joanna murder|domestic abuse history|police suspicion|investigation|2023`,
  `During what legal proceeding does Tommy escape custody in Happy Valley Series 3?|A court appearance in Leeds|A prison sports day|A parole meeting in Hebden Bridge|A police station identity parade|Easy|series 3|Tommy Lee Royce|court escape|Leeds|custody breach|Knezevic scheme|2023`,
  `What diversion helps Tommy flee from court in Happy Valley's final series?|A deliberately staged disturbance|An unexpected fire alarm drill|A city-wide power failure|A medical emergency involving Catherine|Medium|series 3|Tommy Lee Royce|courtroom distraction|Knezevic accomplices|escape plan|trial hearing|2023`,
  `What does Tommy use to get away quickly after escaping the courthouse in Happy Valley?|A bicycle|A police helicopter|A horse|A canal boat|Medium|series 3|Tommy Lee Royce|bicycle escape|Leeds courthouse|fugitive|disguise|2023`,
  `Which violent incident at a high-rise building draws police attention to organised crime in Happy Valley Series 3?|A blind woman's fatal fall|A warehouse explosion|A rooftop helicopter crash|An armed bank raid|Hard|series 3|blind woman|high rise fall|criminal exploitation|organised crime|gang attention|2023`,

  // Series 3, Episodes 5 and 6: fugitive Tommy and Catherine's final shift
  `How do Tommy and Ryan remain in contact while Tommy is on the run in Happy Valley?|Through their games consoles|By messages hidden in newspapers|Through letters at the police station|By speaking on school radio|Medium|series 3|Tommy Lee Royce|Ryan Cawood|gaming consoles|secret messages|fugitive contact|2023`,
  `What does Tommy propose to Ryan after escaping custody in Happy Valley?|Going abroad with him|Joining the West Yorkshire Police|Buying Nevison's business|Moving together into Catherine's home|Medium|series 3|Tommy Lee Royce|Ryan Cawood|escape abroad|father son offer|fugitive plans|2023`,
  `What protective step does Catherine's family take when Tommy is on the run in Happy Valley?|They move into hiding|They relocate to America permanently|They join the police academy|They enter a televised witness competition|Medium|series 3|Catherine family|Tommy escape|temporary hiding|safety measures|Ryan Cawood|2023`,
  `Which gang leader's associates turn against Tommy near the end of Happy Valley?|Darius Knezevic's|Ashley Cowgill's|Kevin Weatherill's|John Wadsworth's|Medium|series 3|Darius Knezevic|gang double cross|Tommy fugitive|safe house|criminal associates|2023`,
  `What does Tommy do when attacked by gang members in the Happy Valley finale?|He kills his attackers and escapes|He immediately surrenders to the police|He is taken abroad by helicopter|He agrees to testify against Catherine|Hard|series 3|Tommy Lee Royce|gang betrayal|armed confrontation|escape|final episode|2023`,
  `Where does the final face-to-face confrontation between Catherine and Tommy occur in Happy Valley?|At Catherine's home|In a prison visiting room|Inside Ryan's classroom|At Nevison's office|Medium|series 3|Catherine Cawood|Tommy Lee Royce|final showdown|family home|confrontation|2023`,
  `What does Tommy reveal he has realised about Catherine's upbringing of Ryan in Happy Valley's finale?|Ryan has had a good life because of Catherine|Catherine raised Ryan to become a criminal|Ryan was brought up by Nevison|Ryan has never known any of his relatives|Hard|series 3|Tommy Lee Royce|Catherine Cawood|Ryan childhood|grandmother care|final conversation|2023`,
  `What does Tommy do to himself during the final confrontation in Happy Valley?|Sets himself on fire|Jumps from the window|Drinks a fatal dose of medication|Shoots himself with a police firearm|Easy|series 3|Tommy Lee Royce|self immolation|final confrontation|Catherine home|petrol|2023`,
  `What does Catherine do when Tommy catches fire in the Happy Valley finale?|Tries to save his life|Locks him in the house|Immediately leaves for a holiday|Calls Ryan to film the scene|Medium|series 3|Catherine Cawood|Tommy Lee Royce|fire rescue|final showdown|compassion|2023`,
  `How does Catherine learn Tommy has died after their final confrontation in Happy Valley?|She receives a text message from Mike Taylor|She sees the news on a pub television|She hears it on a police radio at home|His lawyer visits her in person|Medium|series 3|Mike Taylor|Catherine Cawood|Tommy death|text message|final scene|2023`,
  `Where is Catherine when she receives confirmation of Tommy's death in Happy Valley?|At Becky's grave|At Ryan's football pitch|Inside the police cells|On a train to London|Medium|series 3|Becky Cawood|cemetery|Catherine Cawood|Mike Taylor|news of death|2023`,
  `What police retirement trip does Catherine look forward to at the end of Happy Valley?|A journey towards the Himalayas|A cruise around the Caribbean|A cycling holiday in Belgium|A safari in Kenya|Medium|series 3|Catherine retirement|Himalayas|travel plans|personal future|final episode|2023`,
  `Which former prisoner supplies Catherine with a key clue about the pharmacist in Happy Valley's finale?|Alison Garrs|Vicky Fleming|Frances Drummond|Lynn Dewhurst|Medium|series 3|Alison Garrs|Faisal Bhatti|pharmacy clue|Joanna murder|Catherine deduction|2023`,
  `What detail about Faisal Bhatti makes Catherine especially suspicious in the Happy Valley finale?|His pharmacy is very close to Joanna's home|He owns the same model of car as Tommy|He once worked for Nevison Gallagher|He lived in Italy during the first series|Hard|series 3|Faisal Bhatti|Joanna Hepworth|nearby pharmacy|murder lead|location clue|2023`,
  `Which character is revealed to have pressured a school pupil for inappropriate images in Happy Valley's finale?|Rob Hepworth|Ryan Cawood|Neil Ackroyd|Mike Taylor|Hard|series 3|Rob Hepworth|school pupil|indecent images|police questioning|teacher misconduct|2023`,
  `What is unusual about the resolution of Joanna's murder in the final Happy Valley episode?|Catherine identifies a strong lead, but Faisal's conviction is not shown|Rob confesses and is convicted on screen|Tommy admits he arranged the killing|The murder remains completely unrelated to the pharmacist|Hard|series 3|Joanna Hepworth|Faisal Bhatti|open resolution|Catherine deduction|no onscreen conviction|2023`,
  `Who wrote the final episode of Happy Valley, broadcast in February 2023?|Sally Wainwright|Peter Bowker|Jed Mercurio|Abi Morgan|Easy|series 3|final episode writer|writer credited|2023 finale|screenplay|BBC production|creator`,
  `On what date did the original television run of Happy Valley end in the UK?|5 February 2023|1 January 2023|15 March 2016|3 June 2014|Medium|series 3|5 February 2023|final transmission|Sunday broadcast|18th episode|broadcast history|series ending`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 397: malformed row ${index + 1}`);
  }
  const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 397: invalid difficulty at row ${index + 1}`);
  }
  const question = stem.includes('Happy Valley')
    ? stem
    : `In Happy Valley, ${stem[0].toLowerCase()}${stem.slice(1)}`;
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
    throw new Error(`Pack 397: repeated answer option at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length !== 13) {
    throw new Error(`Pack 397: expected 13 distinct tags at row ${index + 1}, got ${tags.length}`);
  }
  return {
    id: `tv_${FIRST_ID + index}`,
    category: 'Television',
    question,
    answers,
    correctAnswer,
    difficulty,
    tags,
    dailyEligible: true
  };
});

module.exports = questions;
