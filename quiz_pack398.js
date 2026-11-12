
// PuzzlePilot - Big Quiz - Pack 398
// The Fall (2013-2016): complete BBC Two / RTE crime drama, all 17 episodes.
// Complete WordPad-ready CommonJS JavaScript. First ID: tv_21862.
'use strict';

const FIRST_ID = 21862;
const commonTags = ['television', 'British TV', 'BBC Two', 'The Fall', 'Allan Cubitt', 'psychological crime drama'];

// Row: question | correct answer | three wrong answers | difficulty | seven precise question-specific tags.
// Each exported question names The Fall for standalone and mixed-category play.
const rows = [
  // Production, setting and main cast
  `Who created and wrote the television crime drama The Fall?|Allan Cubitt|Jed Mercurio|Chris Chibnall|Peter Bowker|Easy|2013-2016|series creator|screenwriter|production credits|original drama|programme writer|Northern Ireland`,
  `Which actress plays detective Stella Gibson in The Fall?|Gillian Anderson|Archie Panjabi|Bronagh Waugh|Valene Kane|Easy|Gillian Anderson|Stella Gibson|leading actress|senior detective|police investigation|casting|series lead`,
  `Who portrays serial killer Paul Spector in The Fall?|Jamie Dornan|Colin Morgan|John Lynch|Stuart Graham|Easy|Jamie Dornan|Paul Spector|serial killer|lead actor|casting|family man|antagonist`,
  `In which Northern Irish city is The Fall principally set?|Belfast|Derry|Newry|Armagh|Easy|Belfast|Northern Ireland|city setting|crime locations|police jurisdiction|filming location|2013 premiere`,
  `Which television channel originally broadcast The Fall in the United Kingdom?|BBC Two|BBC One|ITV|Channel 4|Easy|UK broadcaster|2013 launch|programme history|British television|crime thriller|original channel|original network`,
  `Which broadcaster first aired The Fall in the Republic of Ireland?|RTE One|TV3|TG4|BBC Four|Medium|RTE One|Ireland broadcast|international co production|2013 premiere|Irish television|network history|original transmissions`,
  `How many series of The Fall aired between 2013 and 2016?|Three|Two|Four|Five|Easy|2013|2014|2016|series total|programme length|production chronology|final season`,
  `How many episodes make up the original run of The Fall?|Seventeen|Twelve|Eighteen|Twenty-four|Easy|five episodes series 1|six episodes series 2|six episodes series 3|episode total|broadcast history|run length|2016 finale`,
  `What rank does Stella Gibson hold when she arrives in Belfast in The Fall?|Detective Superintendent|Detective Constable|Chief Constable|Police Sergeant|Easy|Stella Gibson|police rank|London transfer|senior investigating officer|Metropolitan Police|hierarchy|Belfast review`,
  `From which police force is Stella Gibson seconded to the Belfast investigation in The Fall?|London Metropolitan Police|Police Scotland|Garda Siochana|Merseyside Police|Medium|Stella Gibson|London Metropolitan Police|secondment|PSNI|inter-force cooperation|initial appointment|2013`,
  `Which police service runs the murder investigation alongside Stella in The Fall?|Police Service of Northern Ireland|Garda National Bureau of Investigation|British Transport Police|Greater Manchester Police|Easy|PSNI|Belfast policing|murder inquiry|Stella Gibson|Northern Ireland|investigation structure|force name`,
  `Which actor plays senior police officer Jim Burns in The Fall?|John Lynch|Stuart Graham|Colin Morgan|Ian McElhinney|Medium|John Lynch|Jim Burns|assistant chief constable|Stella colleague|actor role|senior officer|2013-2016`,
  `Who plays police officer Danielle Ferrington in The Fall?|Niamh McGrady|Aisling Franciosi|Bronagh Taggart|Laura Donnelly|Medium|Niamh McGrady|Danielle Ferrington|police constable|investigative team|casting|Sarah Kay case|series 1`,
  `Which actress plays Paul Spector's wife Sally Ann in The Fall?|Bronagh Waugh|Archie Panjabi|Valene Kane|Gillian Anderson|Easy|Bronagh Waugh|Sally Ann Spector|Paul wife|family story|actor role|marriage|Belfast household`,
  `What is Paul Spector's legitimate occupation in The Fall?|Bereavement counsellor|Primary-school headteacher|Estate agent|Police forensic scientist|Easy|Paul Spector|counselling work|public persona|Liz Tyler|professional life|double life|psychological support`,
  `Which actress plays teenager Katie Benedetto in The Fall?|Aisling Franciosi|Valene Kane|Archie Panjabi|Bronagh Waugh|Medium|Aisling Franciosi|Katie Benedetto|babysitter|Spector obsession|actor role|teenage character|manipulation`,
  `Which actress plays Professor Reed Smith in The Fall?|Archie Panjabi|Gillian Anderson|Niamh McGrady|Bronagh Taggart|Medium|Archie Panjabi|Reed Smith|forensic pathologist|Stella friend|expert witness|casting|medical science`,
  `Which Belgian director directed all five episodes of The Fall's first series?|Jakob Verbruggen|Allan Cubitt|Marc Evans|Lenny Abrahamson|Hard|Jakob Verbruggen|2013|first series director|production team|five episodes|Belgian filmmaker|credits`,
  `Which company produced The Fall for the BBC alongside other partners?|Artists Studio|World Productions|Kudos|Tiger Aspect|Medium|Artists Studio|television production|BBC Northern Ireland|Gub Neal|Julian Stevens|production company|UK Ireland`,

  // Series 1, episodes 1-2: the murders and new task force
  `What kind of case is Stella originally asked to review when she arrives in The Fall?|An unsolved murder after 28 days|A bank robbery with no suspects|A prison riot investigation|A missing police helicopter|Easy|series 1|Stella Gibson|28 day review|cold case assessment|Alice Monroe|Belfast|initial assignment`,
  `Whose murder is the focus of Stella's initial review in The Fall?|Alice Monroe's|Sarah Kay's|Rose Stagg's|Liz Tyler's|Medium|series 1|Alice Monroe|architect|murder review|Stella arrival|unsolved investigation|2013`,
  `What is Alice Monroe's profession in The Fall?|Architect|Doctor|Solicitor|Journalist|Medium|series 1|Alice Monroe|architecture|murder victim|initial inquiry|first episode|Belfast`,
  `Which earlier victim does Stella link to Alice Monroe during her first review in The Fall?|Fiona Gallagher|Rose Stagg|Annie Brawley|Sally Ann Spector|Medium|series 1|Fiona Gallagher|Alice Monroe|linked murders|serial pattern|victim comparison|investigative insight`,
  `What is Paul Spector doing in the home of solicitor Sarah Kay early in The Fall?|Stalking her and searching her belongings|Repairing a broken window|Delivering a counselling report|Investigating a burglary for police|Easy|series 1|Sarah Kay|solicitor|Spector stalking|home intrusion|future victim|first episode`,
  `Which actress portrays solicitor Sarah Kay in The Fall?|Laura Donnelly|Karen Hassan|Valene Kane|Sarah Beattie|Medium|series 1|Laura Donnelly|Sarah Kay|solicitor victim|actor role|murder storyline|first episodes`,
  `Which police constable feels responsible after an earlier call to Sarah Kay's home in The Fall?|Danielle Ferrington|Gail McNally|Glen Martin|Tom Anderson|Medium|series 1|Danielle Ferrington|Sarah Kay|police visit|personal guilt|failed contact|crime scene`,
  `What detail makes Stella suspect that Sarah Kay's death belongs to the same pattern as other murders in The Fall?|The deliberate posing of the victim's body|A handwritten ransom note|A rare poisonous plant|A stolen car outside the house|Medium|series 1|Sarah Kay|staged body|serial offender profile|forensic pattern|Stella analysis|modus operandi`,
  `Which senior police officer initially resists Stella's theory of linked murders in The Fall?|Jim Burns|Tom Anderson|Danielle Ferrington|Gail McNally|Medium|series 1|Jim Burns|Stella Gibson|serial killer disagreement|murder links|police oversight|initial resistance`,
  `What personal connection does Stella have with Detective Sergeant James Olson in The Fall?|A brief sexual relationship|They are childhood siblings|He is her ex-husband|They are engaged to marry|Medium|series 1|James Olson|Stella Gibson|hotel meeting|one night stand|police ethics|personal life`,
  `Who plays Detective Sergeant James Olson in The Fall?|Ben Peel|Michael McElhatton|Colin Morgan|Stuart Graham|Hard|series 1|Ben Peel|James Olson|detective sergeant|actor role|police officer|murder subplot`,
  `Which journalist pursues Stella for a story about her arrival in The Fall?|Ned Callan|Tom Stagg|Aaron Monroe|Sean Healy|Medium|series 1|Ned Callan|press intrusion|Stella Gibson|journalist character|Belfast media|public scrutiny`,
  `What happens to DS James Olson outside his home in The Fall's first series?|He is shot dead|He is arrested for theft|He is kidnapped by Spector|He resigns and moves to London|Medium|series 1|James Olson|fatal shooting|police officer death|Eastwood inquiry|separate investigation|Belfast`,
  `Whose influential father pressures Jim Burns about an unrelated murder investigation in The Fall?|Aaron Monroe's|Katie Benedetto's|Rose Stagg's|Liz Tyler's|Hard|series 1|Morgan Monroe|Aaron Monroe|Jim Burns|police pressure|wealthy businessman|political influence`,
  `Which actor plays businessman Morgan Monroe in The Fall?|Ian McElhinney|John Lynch|Stuart Graham|Brian Milligan|Medium|series 1|Ian McElhinney|Morgan Monroe|businessman|Aaron father|police influence|casting`,
  `What is the first name of Paul and Sally Ann Spector's daughter in The Fall?|Olivia|Katie|Rose|Annie|Easy|series 1|Olivia Spector|Sally Ann Spector|Paul Spector|family relationship|child character|nightmares`,
  `Where does Spector conceal evidence connected to his crimes in The Fall's first series?|In the ceiling of his daughter's bedroom|Beneath his car's back seat|Inside a locked desk at work|Under his wife's sewing machine|Hard|series 1|Spector trophy cache|Olivia bedroom|hidden ceiling|murder souvenirs|family house|investigative evidence`,
  `Which young family acquaintance becomes fascinated by Spector while working as a babysitter in The Fall?|Katie Benedetto|Danielle Ferrington|Rose Stagg|Annie Brawley|Easy|series 1|Katie Benedetto|Spector babysitter|teenage fascination|family home|manipulation|Olivia Spector`,

  // Series 1, episodes 3-5: Operation Musicman and the failed attack
  `What name does Stella give the investigation into Belfast's serial killer in The Fall?|Operation Musicman|Operation Ottawa|Operation Trident|Operation Seabird|Easy|series 1|Operation Musicman|case codename|Stella Gibson|serial murders|police task force|2013`,
  `Whom does Stella appoint to a trusted investigative role after praising her honesty in The Fall?|Danielle Ferrington|Sally Ann Spector|Katie Benedetto|Liz Tyler|Medium|series 1|Danielle Ferrington|Stella Gibson|task force|crime scene honesty|police colleague|promotion of trust`,
  `Who is Paul's counsellor client whose abusive husband creates danger in The Fall?|Liz Tyler|Sarah Kay|Alice Monroe|Annie Brawley|Medium|series 1|Liz Tyler|Paul Spector|bereavement counselling|domestic abuse|Jimmy Tyler|professional boundary`,
  `Who is Liz Tyler's violent estranged husband in The Fall?|Jimmy Tyler|Tom Stagg|Aaron Monroe|Matt Eastwood|Medium|series 1|Jimmy Tyler|Liz Tyler|domestic violence|Spector conflict|loyalist|criminal threats`,
  `Which actor plays violent Jimmy Tyler in The Fall?|Brian Milligan|Colin Morgan|Emmett Scanlan|Ben Peel|Hard|series 1|Brian Milligan|Jimmy Tyler|Liz husband|actor role|violent loyalist|2013-2014`,
  `Who tells Stella of an earlier encounter with a man calling himself Peter in The Fall?|Rose Stagg|Katie Benedetto|Sally Ann Spector|Sarah Kay|Medium|series 1|Rose Stagg|Peter alias|past assault|university years|Reed Smith friend|witness lead`,
  `What relationship does Rose Stagg have with Professor Reed Smith in The Fall?|They are old friends|They are sisters|They are married|They were police partners|Medium|series 1|Rose Stagg|Reed Smith|university friendship|Stella introduction|past encounter|witness`,
  `What was the name used by the man Rose Stagg knew at university in The Fall?|Peter|James|Gareth|Thomas|Medium|series 1|Rose Stagg|Spector earlier identity|university encounter|false name|predator history|past relationship`,
  `Which pair does Spector attack at their home towards the end of The Fall's first series?|Annie and Joe Brawley|Rose and Tom Stagg|Sally Ann and Paul Spector|Liz and Jimmy Tyler|Medium|series 1|Annie Brawley|Joe Brawley|failed attack|brother and sister|home invasion|murder victim`,
  `Who survives Spector's assault and later wakes from a coma in The Fall?|Annie Brawley|Sarah Kay|Alice Monroe|Fiona Gallagher|Medium|series 1|Annie Brawley|coma recovery|surviving victim|assault|police witness|2013`,
  `Who plays surviving attack victim Annie Brawley in The Fall?|Karen Hassan|Laura Donnelly|Valene Kane|Bronagh Taggart|Medium|series 1|Karen Hassan|Annie Brawley|actor role|surviving victim|2013-2014|hospital recovery`,
  `What clue in footage helps police connect Spector to Sarah Kay in The Fall?|He can be seen following her near municipal gardens|His car is caught crashing into her door|A CCTV camera films a written confession|He appears on a security guard's body camera|Hard|series 1|municipal gardens|Sarah Kay|Paul Spector|surveillance footage|stalking clue|police review`,
  `What does Sally Ann unknowingly provide investigators when Paul is questioned in The Fall's first series?|A false alibi for his whereabouts|His hidden murder journal|A full confession on video|A map of the victims' homes|Medium|series 1|Sally Ann Spector|Paul alibi|police interview|family deception|misleading statement|2013`,
  `What false claim does Spector make to explain his secretive evenings to his wife in The Fall?|He has been having an affair with their babysitter|He is working for an undercover police unit|He is training to be a doctor|He is secretly supporting a second family abroad|Medium|series 1|Paul Spector|Sally Ann|Katie Benedetto|false affair admission|marriage crisis|cover story`,
  `Where does Spector take his family after contacting the police at the end of The Fall's first series?|Scotland|Wales|France|England's south coast|Medium|series 1|Spector family|Scotland move|police call|escape attempt|Sally Ann|cliffhanger`,
  `How does Spector first make a direct personal challenge to Stella near the end of The Fall's first series?|He telephones the police investigation|He attends her press conference in person|He sends her a signed painting|He posts a message on the police website|Medium|series 1|Spector phone call|Stella Gibson|Operation Musicman|killer contact|psychological duel|final episode`,

  // Series 2: Rose Stagg, identification and the surveillance net
  `Which surviving victim does Stella try to help recover memories of an attack at the start of The Fall's second series?|Annie Brawley|Sarah Kay|Alice Monroe|Fiona Gallagher|Easy|series 2|Annie Brawley|memory recall|previous attack|survivor testimony|police interview|2014`,
  `Which missing woman becomes the immediate focus of a rescue operation in The Fall's second series?|Rose Stagg|Sally Ann Spector|Reed Smith|Katie Benedetto|Easy|series 2|Rose Stagg|abduction|Stella Gibson|hostage search|Peter alias|2014`,
  `What was Rose Stagg's maiden name in The Fall?|McGill|Kay|Monroe|Benedetto|Hard|series 2|Rose Veronica Stagg|Rose McGill|former surname|university encounter|Spector identity|witness history`,
  `Which actor plays Rose Stagg's husband Tom in The Fall?|Jonjo O'Neill|Colin Morgan|John Lynch|Ben Peel|Medium|series 2|Jonjo O Neill|Tom Stagg|Rose husband|casting|family impact|kidnap case`,
  `Which actress plays Rose Stagg in The Fall?|Valene Kane|Laura Donnelly|Archie Panjabi|Bronagh Waugh|Easy|series 2|Valene Kane|Rose Stagg|kidnapping survivor|actor role|witness|university past`,
  `How does Spector abduct Rose Stagg in The Fall's second series?|He forces her into the boot of a car|He lures her onto a ferry|He locks her inside her workplace|He abducts her during a hospital visit|Medium|series 2|Rose Stagg|car boot|kidnapping method|Paul Spector|missing person|hostage`,
  `What important physical clue is found on the scissors used in the Brawley attack in The Fall?|Spector's partial fingerprint|Katie's handwritten note|Sally Ann's wedding ring|Stella's hair|Medium|series 2|decorating shears|Joe Brawley|fingerprint clue|Paul Spector|forensic identification|murder weapon`,
  `Which police officer becomes Stella's deputy senior investigating officer during The Fall's second series?|Matt Eastwood|Tom Anderson|Rob Breedlove|James Olson|Medium|series 2|Matthew Eastwood|deputy SIO|senior detective|Operation Musicman|Stella Gibson|team management`,
  `Which actor plays Detective Chief Inspector Matt Eastwood in The Fall?|Stuart Graham|John Lynch|Colin Morgan|Ian McElhinney|Medium|series 2|Stuart Graham|Matt Eastwood|detective chief inspector|actor role|police task force|Olson case`,
  `Which officer joins Stella's team and later becomes personally involved with her in The Fall?|Tom Anderson|James Olson|Rob Breedlove|Aaron Monroe|Medium|series 2|Tom Anderson|Colin Morgan|detective sergeant|Stella relationship|police reinforcements|2014`,
  `Who plays DS Tom Anderson in The Fall?|Colin Morgan|John Lynch|Stuart Graham|Jamie Dornan|Easy|series 2|Colin Morgan|Tom Anderson|actor role|detective sergeant|Stella colleague|2014-2016`,
  `Where does Spector enter Stella's private space and read her writing in The Fall's second series?|Her hotel room|Her London apartment|Her office at police headquarters|Her car at the station|Medium|series 2|Stella Gibson|hotel intrusion|Paul Spector|privacy breach|psychological manipulation|2014`,
  `What private object does Spector write a taunting message in after entering Stella's room in The Fall?|Her dream journal|Her work diary|Her passport|Her favourite novel|Medium|series 2|dream journal|Stella Gibson|Spector taunt|hotel burglary|psychological duel|personal writing`,
  `What childhood institution linked to Spector is investigated by Jim Burns in The Fall?|Gortnacul Boys' Home|Belfast Grammar School|St Jude's Hospital|Carricklea Academy|Medium|series 2|Gortnacul|boys home|Paul Spector|childhood past|Jim Burns|institutional abuse`,
  `What was Spector's surname before his adoption, as explored in The Fall?|Baldwin|McGill|Monroe|Olson|Hard|series 2|Peter Baldwin|Paul Spector|birth identity|adoption|Gortnacul|childhood records`,
  `Which former priest does Burns question about Spector's childhood in The Fall?|Fiachra Jensen|Sean Healy|August Larson|Jim Allbright|Hard|series 2|Father Jensen|Gortnacul home|Jim Burns|childhood abuse|disgraced priest|2014`,
  `Who helps police install surveillance equipment in Spector's house in The Fall?|Glen Martin and Gail McNally|Tom Stagg and Rose Stagg|Reed Smith and Annie Brawley|Katie Benedetto and Olivia Spector|Hard|series 2|Glen Martin|Gail McNally|surveillance operation|hidden cameras|family home|police team`,
  `What goes wrong during the covert police entry into Spector's home in The Fall?|The operation leaves obvious damage|Spector catches the officers in his bedroom|All the cameras are stolen by Katie|The entire house is destroyed in a fire|Medium|series 2|police surveillance|house damage|Spector suspicion|botched installation|covert operation|2014`,
  `What is the true cause of death of a woman initially feared to be Rose Stagg in The Fall's second series?|Suicide|A Spector strangling|A car crash|Poisoning by her husband|Hard|series 2|mistaken Rose identification|unknown woman|suicide|police uncertainty|Stella strategy|2014`,
  `Which teenager tries to help Spector destroy evidence while police close in during The Fall?|Katie Benedetto|Olivia Spector|Daisy Drake|Sally Ann Spector|Medium|series 2|Katie Benedetto|hotel evidence|Paul Spector|evidence destruction|police interception|2014`,
  `Why is Sally Ann arrested during The Fall's second series?|For providing a false alibi for Paul|For stealing classified police files|For attacking Rose Stagg|For hiding weapons in a school|Medium|series 2|Sally Ann Spector|perverting justice|false alibi|police arrest|marriage loyalty|2014`,
  `Who threatens Spector at gunpoint as the police operation unravels in The Fall?|Jimmy Tyler|Tom Stagg|Morgan Monroe|Aaron Monroe|Medium|series 2|Jimmy Tyler|Paul Spector|gunpoint confrontation|Liz Tyler|violent husband|2014`,
  `Which police constable is shot in a protective vest during Jimmy Tyler's confrontation in The Fall?|Danielle Ferrington|Gail McNally|Stella Gibson|Katie Benedetto|Hard|series 2|Danielle Ferrington|flak jacket|Jimmy Tyler|armed incident|police survival|2014`,
  `For which offence is Spector initially arrested by DS Anderson in The Fall's second series?|The abduction of Rose Stagg|The killing of James Olson|A robbery of the Monroe family|A drug offence at a nightclub|Medium|series 2|Paul Spector|Tom Anderson|Rose Stagg|arrest|Operation Musicman|abduction charge`,
  `What recording found by investigators shows Rose Stagg pleading to be freed in The Fall?|A video on Spector's phone|An anonymous radio broadcast|A recording on a police body camera|A voicemail sent to Tom Stagg|Medium|series 2|Rose Stagg|mobile video|hostage evidence|Spector phone|kidnap investigation|forensic media`,
  `What tragedy occurs to Sally Ann during police questioning in The Fall's second-series finale?|She suffers a miscarriage|She loses custody of her children in court|She is shot by Jimmy Tyler|She is killed in a car accident|Medium|series 2|Sally Ann Spector|miscarriage|police interview|family crisis|Paul arrest|series finale`,
  `Who does Spector finally agree to speak with face to face about the murders in The Fall?|Stella Gibson|Ned Callan|Jim Burns|Morgan Monroe|Easy|series 2|Paul Spector|Stella Gibson|interrogation|first direct meeting|murder confession|psychological battle`,
  `Where is Rose Stagg ultimately found alive in The Fall's second-series finale?|In the boot of a car in the woods|On a ferry to Scotland|In a locked room at the police station|In the cellar of Spector's family home|Medium|series 2|Rose Stagg rescue|woodland|car boot|hostage discovery|Stella Gibson|2014 finale`,
  `Who shoots Paul Spector and Tom Anderson during the rescue operation in The Fall?|Jimmy Tyler|Jim Burns|Morgan Monroe|Glen Martin|Medium|series 2|Jimmy Tyler|shooting in woods|Tom Anderson|Paul Spector|Rose Stagg rescue|ambush`,
  `What happens to Jimmy Tyler after opening fire during The Fall's second-series rescue?|Police shoot him dead|He escapes to America|He surrenders to Stella unharmed|He is released on bail|Medium|series 2|Jimmy Tyler|fatal shooting|armed ambush|police response|woodland incident|series finale`,
  `What is the title of the extended finale of The Fall's second series?|What Is in Me Dark Illumine|The Vast Abyss|Their Solitary Way|Dark Descent|Hard|series 2|sixth episode|90 minute finale|2014|episode title|Spector interrogation|Rose rescue`,

  // Series 3: intensive care, amnesia claim, hospital and legal defence
  `Where is the badly injured Spector taken at the beginning of The Fall's third series?|Belfast General Hospital|A prison in Scotland|The London Royal Free Hospital|A private clinic in Dublin|Easy|series 3|Belfast General|gunshot injuries|intensive care|Paul Spector|medical treatment|2016`,
  `Which actor plays surgeon Dr Joe O'Donnell in The Fall's third series?|Richard Coyle|Aidan McArdle|Colin Morgan|Stuart Graham|Medium|series 3|Richard Coyle|Dr Joe O Donnell|hospital surgeon|casting|trauma team|2016`,
  `Who plays nurse Kiera Sheridan, who cares for Spector in The Fall?|Aisling Bea|Ruth Bradley|Genevieve O'Reilly|Denise Gough|Medium|series 3|Aisling Bea|Kiera Sheridan|hospital nurse|patient care|cast credit|2016`,
  `What concern drives Stella's anxiety while Spector is in intensive care in The Fall?|He might die before facing justice|He might be released without any charges|He is about to be transferred to Australia|He has destroyed all evidence from prison|Medium|series 3|Stella Gibson|Paul Spector|survival|victims justice|hospitalisation|legal jeopardy`,
  `Which family member discovers online news that Paul has been identified as the Belfast killer in The Fall?|His daughter Olivia|His son Liam|His wife Sally Ann|His mother|Medium|series 3|Olivia Spector|internet news|family fallout|Paul arrest|Belfast Strangler|2016`,
  `Which two police officials come under scrutiny over their handling of Spector's arrest in The Fall?|Stella Gibson and Jim Burns|Danielle Ferrington and Katie Benedetto|Reed Smith and Tom Stagg|Morgan Monroe and Ned Callan|Easy|series 3|police ombudsman|Stella Gibson|Jim Burns|investigation review|professional conduct|2016`,
  `What does Katie Benedetto do to a former friend after becoming enraged at the media in The Fall?|Throws concentrated lemon juice into her eyes|Steals her passport|Locks her in a lift|Burns down her house|Hard|series 3|Katie Benedetto|assault|lemon juice|media coverage|teenage obsession|court case`,
  `What do detectives discover in a rented storage space connected to Spector in The Fall?|Detailed journals and photographs|A chest full of stolen gold|A list of police passwords|A hidden television studio|Medium|series 3|Spector lock up|murder journals|photographs|crime evidence|potential victims|2016`,
  `What memory problem does Spector claim after awakening in The Fall's third series?|He cannot remember events after 2006|He cannot remember his own name|He cannot remember his wife but recalls all crimes|He has lost the ability to speak English|Medium|series 3|claimed amnesia|2006 cutoff|Paul Spector|legal defence|memory loss|hospital`,
  `Which defence solicitor represents Spector in The Fall's third series?|Sean Healy|Tom Stagg|Jim Burns|Matt Eastwood|Medium|series 3|Sean Healy|Aidan McArdle|legal defence|trial preparation|Paul Spector|court`,
  `Which actor plays defence lawyer Sean Healy in The Fall?|Aidan McArdle|Richard Coyle|Martin McCann|Jonjo O'Neill|Hard|series 3|Aidan McArdle|Sean Healy|actor credit|defence lawyer|court scenes|2016`,
  `What does the evidence in Spector's storage unit suggest to Gibson in The Fall?|There may be further unidentified victims|He owned a stolen police helicopter|His wife was the killer all along|He had been planning to emigrate to France|Medium|series 3|murder diaries|unknown victims|Spector lock up|further investigations|Stella profiling|2016`,
  `Which criminal case in London becomes connected to Spector's earlier life in The Fall?|The murder of Susan Harper|The kidnapping of Rose Stagg|The death of James Olson|The disappearance of Morgan Monroe|Medium|series 3|Susan Harper|London murder|2002|Paul Spector|David Alvarez|historical offence`,
  `Who is David Alvarez in the final series of The Fall?|A former boys' home resident imprisoned for murder|The new head of Belfast police|Spector's brother-in-law|Rose Stagg's psychiatrist|Medium|series 3|David Alvarez|Gortnacul|London murder conviction|childhood acquaintance|Susan Harper|prisoner`,
  `What kind of facility is Spector transferred to for psychiatric assessment in The Fall?|A secure psychiatric hospital|An ordinary open prison|A juvenile detention centre|A military barracks|Easy|series 3|secure hospital|Foyle Clinic|mental assessment|court order|Dr Larson|custody`,
  `Which doctor is responsible for assessing Spector's mental condition in The Fall's final series?|August Larson|Joe O'Donnell|Reed Smith|James Olson|Medium|series 3|August Larson|psychiatrist|forensic hospital|fitness for trial|Spector evaluation|2016`,
  `Which actor portrays psychiatrist Dr August Larson in The Fall?|Krister Henriksson|Richard Coyle|Aidan McArdle|John Lynch|Hard|series 3|Krister Henriksson|August Larson|Swedish actor|casting|forensic psychiatrist|clinic`,
  `What endangers Sally Ann and her children during an emotional crisis in The Fall's final series?|Their car is left near a rising tide|Their house is set alight by Katie|Their car crashes into a police van|They are kidnapped on a ferry|Medium|series 3|Sally Ann Spector|Olivia and Liam|shoreline|high tide|family distress|rescue`,
  `What object does nurse Kiera secretly give Spector before he leaves the hospital in The Fall?|A twenty-pound note|A silver watch|A photograph of his daughter|A fountain pen|Hard|series 3|Kiera Sheridan|twenty pound note|gift to patient|farewell scene|Stella evidence|hospital`,
  `Which pair travels to London to question David Alvarez about an earlier murder in The Fall?|Tom Anderson and Danielle Ferrington|Jim Burns and Morgan Monroe|Stella Gibson and Rose Stagg|Katie Benedetto and Sally Ann Spector|Medium|series 3|Tom Anderson|Danielle Ferrington|London inquiry|David Alvarez|Susan Harper|police interview`,
  `What happens to Katie Benedetto after her attack on another girl in The Fall?|She is sent to a juvenile detention centre|She is appointed a police cadet|She is sent to live with Spector's family|She escapes abroad|Medium|series 3|Katie Benedetto|juvenile detention|assault conviction|legal consequences|obsession|2016`,
  `Which patient becomes friendly with Spector at the secure hospital in The Fall?|Mark Bailey|David Alvarez|Tom Stagg|Sean Healy|Medium|series 3|Mark Bailey|forensic patient|Paul Spector|Foyle Clinic|new acquaintance|final episodes`,
  `Which actress portrays Louise Wallace, part of Spector's legal team in The Fall?|Ruth Bradley|Aisling Bea|Archie Panjabi|Valene Kane|Medium|series 3|Ruth Bradley|Louise Wallace|defence team|actor role|courtroom|2016`,
  `What does Spector do to Stella when confronted about an earlier murder in The Fall's finale?|Physically attacks her during the interview|Offers her a signed confession without objection|Asks her to adopt his children|Surrenders evidence about Jim Burns|Medium|series 3|Stella Gibson|Spector violence|interview assault|Susan Harper|police custody|finale`,
  `Which officer suffers a broken arm trying to intervene during Spector's attack in The Fall?|Tom Anderson|Jim Burns|Matt Eastwood|Glen Martin|Medium|series 3|Tom Anderson|broken arm|Stella assault|interview room|Paul Spector|final episode`,
  `Who withdraws from Spector's defence team after witnessing his violence in The Fall?|Louise Wallace|Sean Healy|Reed Smith|Kiera Sheridan|Medium|series 3|Louise Wallace|legal defence withdrawal|Spector attack|professional ethics|finale|2016`,
  `What conclusion does Dr Larson reach about Spector's prospects of recovery in The Fall?|He may be treatable but not curable|He has fully recovered and can go home|He has no underlying psychiatric problems|He has been wrongly identified as a patient|Hard|series 3|August Larson|clinical judgement|Spector assessment|psychiatric treatment|final confrontation|2016`,
  `Who does Spector kill at the secure facility in the final episode of The Fall?|Mark Bailey|David Alvarez|Sean Healy|Tom Anderson|Medium|series 3|Mark Bailey|secure hospital|fellow patient|final murder|Spector violence|2016`,
  `What happens to Paul Spector at the end of The Fall?|He dies by suicide in the psychiatric facility|He is acquitted and leaves Belfast|He escapes with his family to Scotland|He receives a life sentence after a televised trial|Easy|series 3|Paul Spector|series finale|death in custody|psychiatric facility|justice denied|2016`,
  `What happens to Operation Musicman after Spector's death in The Fall?|The operation is disbanded|It is transferred to a Scottish police force|It is renamed Operation Ottawa|It becomes a permanent national task force|Medium|series 3|Operation Musicman|case closure|police task force|Spector death|finale aftermath|2016`,
  `Which senior police officer resigns as the investigation ends in The Fall?|Jim Burns|Tom Anderson|Matt Eastwood|Danielle Ferrington|Medium|series 3|Jim Burns|resignation|police leadership|personal breakdown|Operation Musicman|finale`,
  `Where does Stella return following the final events of The Fall?|London|Dublin|Edinburgh|Glasgow|Easy|series 3|Stella Gibson|London home|career aftermath|final scene|Metropolitan Police|2016`,
  `What small object does Stella place on her fridge at home in the final scene of The Fall?|The twenty-pound note given to Spector by Kiera|A photograph of Katie's school|The key to Spector's storage unit|A badge belonging to Jim Burns|Hard|series 3|Stella Gibson|fridge note|Kiera Sheridan|twenty pound gift|final image|London`,
  `In which month and year did The Fall air its final episode in the UK?|October 2016|December 2014|May 2013|February 2018|Medium|2016 finale|October|final transmission|series 3 episode 6|broadcast dates|UK television|end of run`,
  `Which title belongs to the final episode of The Fall?|Their Solitary Way|Dark Descent|The Vast Abyss|These Troublesome Disguises|Hard|series 3|sixth episode|Their Solitary Way|2016|finale title|episode guide|broadcast history`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 398: malformed row ${index + 1}`);
  }
  const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 398: invalid difficulty at row ${index + 1}`);
  }
  const question = stem.includes('The Fall')
    ? stem
    : `In The Fall, ${stem[0].toLowerCase()}${stem.slice(1)}`;
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
    throw new Error(`Pack 398: repeated answer option at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length !== 13) {
    throw new Error(`Pack 398: expected 13 distinct tags at row ${index + 1}; got ${tags.length}`);
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
