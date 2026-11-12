
// PuzzlePilot - Big Quiz - Pack 400
// Baptiste (2019-2021): both complete six-episode BBC One series.
// Full WordPad-ready CommonJS file. First question ID: tv_22086.
'use strict';

const FIRST_ID = 22086;
const commonTags = ['television', 'British TV', 'BBC One', 'Baptiste', 'The Missing spin-off', 'crime drama'];

// Each row: question | correct answer | three distractors | difficulty | seven precise tags.
// Exported questions name Baptiste so they work in mixed-topic quizzes too.
const rows = [
  // Programme, cast and production
  `Which actor plays retired detective Julien Baptiste in the drama Baptiste?|Tcheky Karyo|Tom Hollander|Adrian Rawlins|John Lynch|Easy|Tcheky Karyo|Julien Baptiste|leading actor|French detective|casting|2019 premiere|2021 finale`,
  `Which earlier BBC mystery drama introduced Julien Baptiste before his own series?|The Missing|The Fall|Luther|Unforgotten|Easy|The Missing|character origins|TV spin-off|French investigator|2014 drama|2016 series|BBC franchise`,
  `Which brothers created and wrote Baptiste?|Harry and Jack Williams|Matt and Ross Duffer|Joe and Anthony Russo|Stephen and Christopher Chibnall|Easy|Williams brothers|Harry Williams|Jack Williams|screenwriting|creators|production credits|original scripts`,
  `Which BBC channel premiered Baptiste in 2019?|BBC One|BBC Two|BBC Four|CBBC|Easy|first channel|British broadcaster|2019 launch|original transmission|television scheduling|Sunday drama|channel`,
  `How many episodes were broadcast across both series of Baptiste?|Twelve|Eight|Sixteen|Twenty|Easy|two series|six episodes each|total episodes|2019|2021|programme length|broadcast history`,
  `In which year did the first series of Baptiste begin broadcasting?|2019|2016|2021|2023|Easy|series 1|2019 launch|February debut|Sunday primetime|premiere chronology|original run|Amsterdam story`,
  `In which year did the second and final series of Baptiste air?|2021|2018|2020|2024|Easy|series 2|2021 release|July premiere|final series|broadcast history|Hungary storyline|end of run`,
  `Which city provides the main setting for the first series of Baptiste?|Amsterdam|Budapest|Paris|Brussels|Easy|series 1|Amsterdam|Netherlands|Red Light District|Dutch police|2019|European setting`,
  `Which country provides the principal setting of Baptiste's second series?|Hungary|The Netherlands|Belgium|Austria|Easy|series 2|Hungary|Budapest|British ambassador|2021|international investigation|setting`,
  `Who plays Julien's wife Celia Baptiste?|Anastasia Hille|Barbara Sarafian|Fiona Shaw|Jessica Raine|Easy|Anastasia Hille|Celia Baptiste|Julien wife|family role|actor credit|two series|marriage`,
  `What is Julien's usual professional speciality in Baptiste?|Investigating missing people|Forensic pathology|Undercover customs work|Prosecuting financial crimes|Easy|Julien Baptiste|missing persons|private investigator|retired detective|police experience|specialist skill|searches`,
  `Which production company behind The Missing also made Baptiste?|Two Brothers Pictures|Left Bank Pictures|Red Production Company|World Productions|Medium|Two Brothers Pictures|Jack Williams|Harry Williams|production company|BBC drama|The Missing|industry`,
  `Which actor portrays Edward Stratton in Baptiste's first series?|Tom Hollander|Adrian Rawlins|Conrad Khan|Alec Secareanu|Easy|Tom Hollander|Edward Stratton|Englishman|missing Natalie|series 1|casting|Amsterdam`,
  `Who plays Europol officer Genevieve Taylor in Baptiste?|Jessica Raine|Fiona Shaw|Dorka Gryllus|Clare Calbraith|Medium|Jessica Raine|Genevieve Taylor|Europol|organised crime|series 1|actor role|investigator`,
  `Which actress portrays Dutch police commissioner Martha Horchner in Baptiste?|Barbara Sarafian|Anastasia Hille|Gabriella Hamori|Anna Prochniak|Medium|Barbara Sarafian|Martha Horchner|Dutch police|Julien former partner|series 1|cast credit|Amsterdam`,
  `Which actor plays Romanian criminal Constantin in Baptiste's first series?|Alec Secareanu|Boris Van Severen|Adrian Rawlins|Trystan Gravelle|Medium|Alec Secareanu|Constantin Baracu|gang enforcer|Brigada|series 1|casting|Romanian crime`,
  `Which actress plays missing sex worker Natalie Rose in Baptiste?|Anna Prochniak|Talisa Garcia|Clare Calbraith|Fiona Shaw|Medium|Anna Prochniak|Natalie Rose|sex worker|missing person|series 1|actor credit|Amsterdam`,
  `Which actress plays British ambassador Emma Chambers in Baptiste's second series?|Fiona Shaw|Jessica Raine|Archie Panjabi|Sarah Lancashire|Easy|Fiona Shaw|Emma Chambers|British ambassador|missing sons|series 2|casting|Budapest`,
  `Which actor plays Emma's husband Richard Chambers in Baptiste?|Adrian Rawlins|Tom Hollander|John Lynch|Stuart Campbell|Medium|Adrian Rawlins|Richard Chambers|Emma husband|family disappearance|series 2|actor role|Hungary`,
  `Which actress portrays Hungarian officer Zsofia Arslan in Baptiste?|Dorka Gryllus|Gabriella Hamori|Barbara Sarafian|Anastasia Hille|Medium|Dorka Gryllus|Zsofia Arslan|Hungarian investigator|police major|series 2|actor credit|Budapest`,

  // Series 1: Amsterdam and Natalie Rose
  `Who asks Julien to assist with a missing-person case in Amsterdam in Baptiste Series 1?|Martha Horchner|Genevieve Taylor|Emma Chambers|Celia Baptiste|Easy|series 1|Martha Horchner|police commissioner|old acquaintance|Natalie Rose|case referral|Amsterdam`,
  `Whom does Edward Stratton initially claim to be searching for in Baptiste?|His niece Natalie Rose|His wife Celia|His sister Martha|His daughter Sara|Easy|series 1|Edward Stratton|Natalie Rose|false family link|missing woman|red light district|search`,
  `What is Natalie Rose's work in Amsterdam when she disappears in Baptiste?|Sex work|Police administration|Museum conservation|Journalism|Easy|series 1|Natalie Rose|Red Light District|sex worker|missing person|Amsterdam underworld|employment`,
  `Which Amsterdam district does Julien investigate in his search for Natalie in Baptiste?|The Red Light District|The Museum Quarter|The Jordaan canals only|The Olympic Stadium quarter|Easy|series 1|Amsterdam|Red Light District|sex trafficking|Julien Baptiste|missing Natalie|location`,
  `What false relationship does Edward use to encourage police to search for Natalie in Baptiste?|He claims to be her uncle|He claims to be her brother|He claims to be her husband|He claims to be her father|Medium|series 1|Edward Stratton|Natalie Rose|false uncle|police deception|initial investigation|family claim`,
  `What is Edward's actual connection to Natalie in Baptiste?|He was one of her clients|He was her university lecturer|He was her adoptive father|He was her former employer|Medium|series 1|Edward Stratton|Natalie Rose|client relationship|red light district|hidden truth|missing girl`,
  `What does Edward eventually reveal about his late daughter Lucy in Baptiste?|She died after struggling with addiction|She became a police commissioner|She disappeared during a cruise|She was killed in a boating accident|Medium|series 1|Lucy Stratton|Edward daughter|drug addiction|family tragedy|Clare Evans|grief`,
  `Why does Edward develop an intense interest in Natalie in Baptiste?|She reminds him of his late daughter Lucy|She is a detective working undercover|She once saved his son from drowning|She owns the casino he manages|Medium|series 1|Edward Stratton|Natalie Rose|Lucy memory|bereaved father|motivation|emotional attachment`,
  `Who is Edward Stratton's former wife in Baptiste?|Clare Evans|Celia Baptiste|Martha Horchner|Genevieve Taylor|Medium|series 1|Clare Evans|Edward ex-wife|Lucy mother|England|family history|2019`,
  `Which actress plays Edward's former wife Clare in Baptiste?|Clare Calbraith|Jessica Raine|Fiona Shaw|Anastasia Hille|Medium|series 1|Clare Calbraith|Clare Evans|Edward Stratton|actor role|Lucy mother|cast`,
  `Which Romanian crime organisation is central to Baptiste's first investigation?|Brigada Serbilu|The Knezevic family|Operation Musicman|The Peaky Blinders|Medium|series 1|Brigada Serbilu|Romanian gang|human trafficking|money laundering|Constantin|organised crime`,
  `What criminal activity is especially associated with the Romanian gang in Baptiste Series 1?|Trafficking women for sexual exploitation|Illegal fishing licences|Counterfeit school diplomas|Stolen museum paintings|Easy|series 1|Brigada Serbilu|sexual exploitation|human trafficking|women victims|Amsterdam|organised crime`,
  `What sum does Natalie take from a Romanian criminal operation in Baptiste?|One million euros|Ten thousand pounds|Twenty million dollars|Five hundred euros|Medium|series 1|Natalie Rose|one million euros|stolen gang money|Edward Stratton|Brigada Serbilu|theft`,
  `Why does Natalie plan to steal the Romanian gang's money in Baptiste?|To buy her younger sister's freedom|To open a nightclub in Paris|To fund a political campaign|To buy an apartment for Edward|Medium|series 1|Natalie Rose|Cristina|younger sister|trafficking rescue|money motive|family`,
  `What is the name of Natalie's younger sister in Baptiste?|Cristina|Sara|Olivia|Lucy|Medium|series 1|Cristina|Natalie sister|trafficked woman|rescue attempt|Romanian gang|family`,
  `Who helps Natalie steal the money in Baptiste?|Edward Stratton|Julien Baptiste|Martha Horchner|Niels Horchner|Easy|series 1|Edward Stratton|Natalie Rose|cash theft|van|criminal gang|accomplice`,
  `What evidence exposes Edward's involvement in the theft in Baptiste?|A camera recorded the cash van|His name was written on every banknote|A witness filmed him at an airport|His wife gave police his signed confession|Hard|series 1|Edward Stratton|cash van camera|stolen money|Constantin|security evidence|exposure`,
  `What fate befalls Edward's father when the Romanian gang retaliates in Baptiste?|He is murdered and decapitated|He is held in a Swiss prison|He escapes to Canada|He is appointed to lead Europol|Medium|series 1|Edward father|Constantin|murder|decapitation|gang intimidation|Antwerp`,
  `What disguise does Constantin use when approaching Julien's family home in Baptiste?|A gas meter reader|A parcel courier|A postal worker|A television repairman|Medium|series 1|Constantin|false gas worker|Celia Baptiste|family threat|home intrusion|deception`,
  `Where does Celia flee after recognising Constantin's threat in Baptiste?|A laundrette with CCTV cameras|A school gymnasium|A railway signal box|A museum storeroom|Hard|series 1|Celia Baptiste|laundrette|CCTV|Constantin|escape|family safety`,
  `Which character runs a cafe and supports vulnerable sex workers in Baptiste?|Kim Vogel|Martha Horchner|Celia Baptiste|Emma Chambers|Medium|series 1|Kim Vogel|cafe|sex worker collective|Amsterdam|survivor support|confidante`,
  `Who plays Kim Vogel in Baptiste?|Talisa Garcia|Anna Prochniak|Barbara Sarafian|Dorka Gryllus|Hard|series 1|Talisa Garcia|Kim Vogel|actor role|cafe proprietor|sex worker advocate|casting`,
  `What older identity connects Kim Vogel with the Romanian trafficking operation in Baptiste?|Dragomir Zelincu|Peter Baldwin|Gomorrah|Fiachra Jensen|Hard|series 1|Kim Vogel|Dragomir Zelincu|former gang associate|identity revelation|Brigada|backstory`,
  `What is the name of Natalie's young son in Baptiste?|Matty|Ryan|Will|Alex|Medium|series 1|Matty|Natalie Rose|child|custody arrangements|stolen money|family`,
  `Where does Natalie leave the stolen money for safekeeping in Baptiste?|Buried at a tulip farm|Inside a cathedral organ|Beneath her school desk|In a bank in Luxembourg|Medium|series 1|Natalie Rose|tulip farm|hidden cash|Herman de Boer|Matty|Netherlands`,
  `What relation is tulip farmer Herman de Boer to Natalie Rose's son in Baptiste?|His grandfather|His uncle|His stepbrother|His godfather|Hard|series 1|Herman de Boer|Matty|grandfather|tulip farm|family link|money trail`,
  `Which international police organisation does Genevieve Taylor work for in Baptiste?|Europol|Interpol only|Scotland Yard|The FBI|Easy|series 1|Genevieve Taylor|Europol|international investigation|Romanian gang|law enforcement|2019`,
  `What is the name of Genevieve's injured former undercover partner in Baptiste?|Lucas|Niels|Edward|Herman|Hard|series 1|Lucas|Genevieve Taylor|undercover agent|paralysis|Europol operation|personal relationship`,
  `Which Dutch policeman works alongside Julien and is revealed to be related to him in Baptiste?|Niels Horchner|Constantin Baracu|Tom Anderson|Mehmet Arslan|Medium|series 1|Niels Horchner|Dutch detective|Martha son|Julien Baptiste|family secret|Amsterdam`,
  `Who plays police officer Niels Horchner in Baptiste?|Boris Van Severen|Alec Secareanu|Trystan Gravelle|Conrad Khan|Medium|series 1|Boris Van Severen|Niels Horchner|actor role|Dutch police|cast credit|son`,
  `What is Julien's biological relationship to Niels Horchner in Baptiste?|He is Niels's father|He is Niels's uncle|He is Niels's brother|He is Niels's grandfather|Medium|series 1|Julien Baptiste|Niels Horchner|biological father|Martha Horchner|hidden parentage|family twist`,
  `Who is Niels Horchner's mother in Baptiste?|Martha Horchner|Celia Baptiste|Clare Evans|Genevieve Taylor|Easy|series 1|Martha Horchner|Niels mother|Amsterdam police|family secret|Julien relationship|2019`,
  `Which health crisis has Niels survived before the events of Baptiste Series 1?|Testicular cancer|A severe stroke|Childhood polio|A liver transplant|Hard|series 1|Niels Horchner|testicular cancer|chemotherapy|medical recovery|backstory|2019`,
  `What is the title of Baptiste's first-ever episode?|Shell|Into the Sand|Lucy|For Blood|Medium|series 1|episode 1|Shell|opening chapter|February 2019|Amsterdam introduction|episode title`,
  `Which title belongs to the second episode of Baptiste Series 1?|Measure of a Man|Vertrouwen|The Vast Abyss|Their Solitary Way|Medium|series 1|episode 2|Measure of a Man|Edward secrets|Natalie Rose|February 2019|episode title`,
  `Which word is the title of Baptiste Series 1's fourth episode?|Vertrouwen|Gomorrah|Patagonia|Amsterdam|Hard|series 1|episode 4|Vertrouwen|Dutch language|money trail|March 2019|episode title`,
  `Which character becomes a police informant target when Genevieve orders him to wear a recording device in Baptiste?|Edward Stratton|Julien Baptiste|Kim Vogel|Matty|Medium|series 1|Edward Stratton|wire tap|Genevieve Taylor|Constantin|Europol|coercion`,
  `How does Edward secretly warn Constantin of the recording device in Baptiste?|He writes a message on a drinks coaster|He sends a coded postcard|He makes an announcement on television|He whispers into a hidden microphone|Hard|series 1|Edward Stratton|Constantin|coaster note|recording wire|betrayal|restaurant meeting`,
  `What kind of purchase does Julien make in Constantin's name to pressure him in Baptiste?|A yacht|A football club|An art gallery|A racehorse|Medium|series 1|yacht deed|Constantin|gang money|Genevieve Taylor|informant pressure|strategy`,
  `Which country does Edward flee to while attempting to protect his former wife in Baptiste?|England|Switzerland|Portugal|Norway|Easy|series 1|Edward Stratton|England|Clare Evans|escape|gang threats|episode 5`,
  `What happens to Edward's former wife Clare during the later events of Baptiste Series 1?|She is murdered by the gang|She becomes a Dutch police officer|She escapes with Natalie to Italy|She confesses to being the police mole|Medium|series 1|Clare Evans|gang murder|Edward Stratton|caravan park|danger|episode 5`,
  `Which dangerous enforcer dies after being thrown from a balcony in Baptiste Series 1?|Constantin|Niels Horchner|Edward Stratton|Lucas|Medium|series 1|Constantin|balcony death|Romanian gang|episode 5|crime plot|2019`,
  `Who is eventually exposed as the inside source feeding police information to the gang in Baptiste?|Niels Horchner|Martha Horchner|Genevieve Taylor|Celia Baptiste|Medium|series 1|Niels Horchner|police mole|Brigada Serbilu|corruption|final revelation|episode 6`,
  `Who is killed when the corrupt officer Niels tries to escape justice in Baptiste's first finale?|His mother Martha|His father Julien|His colleague Genevieve|His sister Sara|Medium|series 1|Niels Horchner|Martha Horchner|fatal shooting|family tragedy|police confrontation|finale`,
  `What injury does Julien suffer when Niels turns a gun on him in Baptiste Series 1?|A gunshot wound to his arm|A broken leg in a fall|Permanent blindness|A severe head injury|Hard|series 1|Julien Baptiste|Niels Horchner|gunshot arm|finale|family confrontation|2019`,
  `What happens to Niels after the violent events of Baptiste's first-series finale?|He is imprisoned|He becomes chief of police|He emigrates to America|He dies in a car crash|Medium|series 1|Niels Horchner|prison|mother murder|Julien son|legal outcome|2019`,
  `Which woman's younger sister remains missing despite the wider rescue efforts in Baptiste Series 1?|Natalie Rose's|Celia Baptiste's|Emma Chambers's|Martha Horchner's|Medium|series 1|Natalie Rose|Cristina|trafficking victims|unresolved disappearance|finale|human exploitation`,
  `What is the title of the sixth and final episode of Baptiste's first series?|Into the Sand|Shell|For Blood|Measure of a Man|Medium|series 1|episode 6|Into the Sand|March 2019|Niels revelation|Amsterdam finale|episode title`,

  // Series 2: British ambassador, Hungary and the family search
  `Whose family disappears in Hungary at the start of Baptiste Series 2?|British ambassador Emma Chambers's|Dutch commissioner Martha Horchner's|Europol officer Genevieve Taylor's|Edward Stratton's|Easy|series 2|Emma Chambers|British ambassador|missing family|Hungary|2021|new case`,
  `In which city does Emma Chambers serve as Britain's ambassador in Baptiste?|Budapest|Amsterdam|Paris|Prague|Easy|series 2|Emma Chambers|Budapest|embassy|Hungary|diplomatic posting|2021`,
  `On what kind of holiday do Richard and the boys disappear in Baptiste's second series?|A family hiking holiday in the mountains|A Mediterranean cruise|A skiing trip to Switzerland|A seaside holiday in Spain|Easy|series 2|Hungarian mountains|family holiday|Emma Chambers|Richard Chambers|hiking|disappearance`,
  `What is the name of Emma Chambers's elder son in Baptiste?|Alex|Will|Niels|Matty|Easy|series 2|Alex Chambers|Emma son|Richard Chambers|family mystery|older brother|2021`,
  `What is the name of Emma Chambers's younger son in Baptiste?|Will|Alex|Julien|Lucas|Easy|series 2|Will Chambers|Emma son|Conrad Khan|younger brother|disappearance|2021`,
  `Which actor plays the younger son Will Chambers in Baptiste?|Conrad Khan|Stuart Campbell|Boris Van Severen|Tom Hollander|Medium|series 2|Conrad Khan|Will Chambers|actor role|Emma son|casting|Hungary`,
  `Which actor plays Alex Chambers in Baptiste?|Stuart Campbell|Adrian Rawlins|Conrad Khan|Miklos Beres|Medium|series 2|Stuart Campbell|Alex Chambers|elder son|actor credit|Emma family|Budapest`,
  `Which child has Emma Chambers already lost before the family's mountain holiday in Baptiste?|Her daughter Laura|Her daughter Natalie|Her son Niels|Her daughter Della|Medium|series 2|Laura Chambers|Emma daughter|family bereavement|prior trauma|Richard Chambers|backstory`,
  `How does Emma's daughter Laura die before the main events of Baptiste's second series?|She is stabbed by an intruder|She dies in a skiing accident|She is killed in a train crash|She dies during surgery|Medium|series 2|Laura Chambers|stabbing death|home intruder|family tragedy|backstory|Will trauma`,
  `What effect does Laura's death have on her brother Will in Baptiste?|He stops speaking|He moves to France|He loses his sight|He becomes a police cadet|Medium|series 2|Will Chambers|non-verbal|Laura death|trauma|family dynamics|2021`,
  `Who disappears with Emma's two sons in the first episode of Baptiste Series 2?|Her husband Richard|Her aide Nadeem|Julien Baptiste|Major Arslan|Easy|series 2|Richard Chambers|Alex Chambers|Will Chambers|mountain hotel|family disappearance|opening episode`,
  `What does Julien discover in the woods during his search for Emma's family in Baptiste?|Richard's dead body|An abandoned police helicopter|A suitcase filled with euros|The missing family unharmed|Easy|series 2|Richard Chambers|woodland discovery|murder victim|Julien Baptiste|first episode|Hungary`,
  `What was Richard doing immediately before his death, as revealed by his phone in Baptiste?|Filming a bird in the woods|Calling the embassy in London|Buying train tickets for Will|Recording a speech for television|Hard|series 2|Richard Chambers|phone video|woodpecker|evidence|mountain woods|final moments`,
  `What identifying tattoo marks the man Julien pursues in Baptiste's Hungary investigation?|Four black lines on his neck|A red star on his cheek|A snake around his wrist|A blue cross on his forehead|Medium|series 2|Andras Juszt|neck tattoo|four black lines|witness description|first pursuit|Hungary`,
  `Which character is revealed as the man with distinctive neck tattoos in Baptiste?|Andras Juszt|Michael Agoston|Nadeem Chaudhry|Richard Chambers|Medium|series 2|Andras Juszt|four stripes|neck tattoo|suspect|terror network|identification`,
  `Who plays tattooed suspect Andras Juszt in Baptiste?|Miklos Beres|Alec Secareanu|Adrian Rawlins|Conrad Khan|Medium|series 2|Miklos Beres|Andras Juszt|actor role|suspect|Gomorrah|Hungary`,
  `Which Hungarian police officer clashes with Julien during the investigation in Baptiste?|Zsofia Arslan|Martha Horchner|Reed Smith|Genevieve Taylor|Easy|series 2|Zsofia Arslan|police major|Julien Baptiste|investigation leadership|Budapest|2021`,
  `Who is Emma's supportive embassy colleague in Baptiste Series 2?|Nadeem Chaudhry|Edward Stratton|Lucas Meyer|Tom Anderson|Medium|series 2|Nadeem Chaudhry|embassy aide|Emma Chambers|diplomatic staff|confidant|support`,
  `Which actor plays embassy adviser Nadeem in Baptiste?|Ace Bhatti|John Lynch|Tom Hollander|Trystan Gravelle|Medium|series 2|Ace Bhatti|Nadeem|British embassy|actor role|Emma ally|casting`,
  `Which earlier family death is Julien grieving when he becomes involved in Emma's case in Baptiste?|His daughter Sara's|His son Niels's|His wife Celia's|His granddaughter's|Easy|series 2|Sara Baptiste|Julien daughter|grief|family tragedy|drug overdose|personal crisis`,
  `What causes Sara Baptiste's death before the events of Baptiste Series 2?|A drug overdose|An aircraft crash|A fire in her apartment|A fatal heart attack|Medium|series 2|Sara Baptiste|drug overdose|Julien grief|Celia Baptiste|granddaughter|family loss`,
  `What has happened to Julien and Celia's marriage during the darker events of Baptiste Series 2?|They become estranged and discuss divorce|They celebrate a new wedding in Budapest|They move permanently to Scotland|Celia becomes Hungary's ambassador|Medium|series 2|Julien Baptiste|Celia Baptiste|estrangement|divorce papers|Sara death|grief`,
  `How does Emma capture the elusive tattooed man in the later timeline of Baptiste Series 2?|She watches him visiting Alex's grave|She tracks him through an airline loyalty card|She finds him hiding in the embassy cellar|She recognises him at a sporting event|Hard|series 2|Emma Chambers|Andras Juszt|Alex grave|fresh flowers|fourteen months later|capture`,
  `What significant change has affected Emma physically in the later timeline of Baptiste Series 2?|She uses a wheelchair|She loses her hearing|She needs a prosthetic arm|She becomes temporarily blind|Easy|series 2|Emma Chambers|wheelchair|paralysis|time jump|aftermath|2019 flashbacks`,
  `Approximately how much time separates the two main timelines of Baptiste's second series?|Fourteen months|Two weeks|Four years|Ten days|Medium|series 2|fourteen months|flashback structure|time jump|2021 narrative|Emma Chambers|aftermath`,
  `What name does the extremist leader use in the second series of Baptiste?|Gomorrah|Constantin|Dragomir|Musicman|Easy|series 2|Gomorrah|far right leader|online propaganda|terror plot|masked figure|Hungary`,
  `Which Hungarian politician comes under suspicion during the hunt for Gomorrah in Baptiste?|Kamilla Agoston|Martha Horchner|Genevieve Taylor|Zsofia Arslan|Medium|series 2|Kamilla Agoston|far right politician|Gomorrah investigation|Budapest|public speech|suspect`,
  `Which actress plays politician Kamilla Agoston in Baptiste?|Gabriella Hamori|Barbara Sarafian|Dorka Gryllus|Fiona Shaw|Medium|series 2|Gabriella Hamori|Kamilla Agoston|Hungarian politician|actor role|casting|2021`,
  `What object in Kamilla's basement links her home to Gomorrah's online videos in Baptiste?|A distinctive cracked window|A piano painted black|An antique diving helmet|A neon theatre sign|Hard|series 2|Kamilla Agoston|basement window|cracked glass|Gomorrah video|Julien deduction|evidence`,
  `Which of Emma's belongings provides an online clue to a planned extremist gathering in Baptiste?|Alex's laptop|Richard's hiking boots|Laura's camera|Will's school uniform|Medium|series 2|Alex Chambers|laptop|fake girlfriend emails|Johsefvaros|digital investigation|Julien Baptiste`,
  `Which Budapest district becomes the site of a deadly mass shooting in Baptiste?|Jozsefvaros|Buda Castle District|Obuda|Margaret Island|Medium|series 2|Jozsefvaros|market shooting|terrorism|Budapest|extremist violence|massacre`,
  `What is the shocking truth about Emma's son Alex during the market attack in Baptiste?|He is one of the masked gunmen|He is secretly a police commissioner|He has escaped to Amsterdam|He is acting as a medical volunteer|Medium|series 2|Alex Chambers|masked gunman|Jozsefvaros massacre|radicalisation|Emma Chambers|reveal`,
  `Who shoots Alex Chambers during the market attack in Baptiste?|Julien Baptiste|Emma Chambers|Andras Juszt|Nadeem Chaudhry|Hard|series 2|Julien Baptiste|Alex Chambers|fatal shooting|market massacre|Jozsefvaros|tragic discovery`,
  `What happens to Emma as a result of the attack in the Budapest market in Baptiste?|She is paralysed by a gunshot wound|She loses her memory permanently|She is imprisoned as an accomplice|She becomes deaf in one ear|Medium|series 2|Emma Chambers|gunshot|paralysis|market attack|wheelchair|2021`,
  `Why does Zsofia Arslan lose her police job in Baptiste's second series?|The catastrophic market attack and failed operation|She retires to run a bakery|She accepts a job at the British embassy|She is convicted of stealing police vehicles|Medium|series 2|Zsofia Arslan|dismissal|Jozsefvaros massacre|Hungarian police|investigation failure|career`,
  `Which member of Zsofia's family is attacked by nationalists in Baptiste?|Her father Mehmet|Her sister Kamilla|Her son Alex|Her husband Michael|Medium|series 2|Mehmet Arslan|Zsofia father|racist attack|shopkeeper|Hungarian nationalism|family`,
  `What happens to Zsofia's father Mehmet following the racist attack in Baptiste?|He dies from the assault|He joins the police|He escapes to France|He becomes a local politician|Medium|series 2|Mehmet Arslan|fatal beating|nationalist youths|shop attack|Zsofia grief|Hungary`,
  `Which teenage nationalist is connected to the attack on Mehmet in Baptiste?|Viktor Radan|Will Chambers|Niels Horchner|Matty|Hard|series 2|Viktor Radan|Mehmet Arslan|far right youth|assault video|Gomorrah movement|2021`,
  `Which company becomes important when Julien traces funding linked to extremists in Baptiste?|Crantham Ltd|Stratton Holdings|Gallagher Enterprises|Two Brothers Pictures|Hard|series 2|Crantham Ltd|Michael Agoston|shell company|financial trail|extremist funding|Budapest`,
  `Who is Kamilla Agoston's husband in Baptiste?|Michael Agoston|Richard Chambers|Edward Stratton|Julien Baptiste|Medium|series 2|Michael Agoston|Kamilla husband|construction business|property redevelopment|Crantham Ltd|suspect`,
  `Which business interest benefits from falling property prices after the violence in Baptiste?|Michael Agoston's redevelopment company|Emma's British embassy|Julien's consultancy|Zsofia's father's bakery|Hard|series 2|Michael Agoston|property development|Jozsefvaros|violence profiteering|real estate|money`,
  `Who is ultimately revealed to be the real extremist mastermind Gomorrah in Baptiste?|Andras Juszt|Kamilla Agoston|Michael Agoston|Alex Chambers|Medium|series 2|Andras Juszt|Gomorrah identity|false informant|extremist leader|series finale|revelation`,
  `Who is discovered collecting money from an isolated building in the later timeline of Baptiste?|Will Chambers|Alex Chambers|Richard Chambers|Nadeem Chaudhry|Medium|series 2|Will Chambers|money pickup|Kamilla Agoston|Julien pursuit|missing son|discovery`,
  `Under what assumed first name does Will work at the intended refugee-centre target in Baptiste?|Nicholas|Constantin|Edward|Lucas|Hard|series 2|Will Chambers|Nicholas alias|refugee centre|undercover volunteer|terror plan|2021`,
  `What kind of building is to become the target of the final attack in Baptiste?|A former abattoir converted into a refugee centre|A university sports stadium|An international airport lounge|A police academy|Medium|series 2|former abattoir|refugee centre|Gomorrah plan|anti immigrant attack|finale|Hungary`,
  `Why does Andras tell Will to collect everyday objects from refugees in Baptiste?|To plant their fingerprints on supposed weapons|To provide materials for a school project|To run a charity auction|To catalogue items for lost property|Hard|series 2|Andras Juszt|Will Chambers|staged attack|weapons fingerprints|false blame|refugees`,
  `What does Andras intend to do to Will as part of his false-flag plan in Baptiste?|Kill him and blame refugee residents|Send him safely to Britain|Make him Hungary's ambassador|Have him publicly testify against Kamilla|Hard|series 2|Andras Juszt|Will Chambers|false flag|planned murder|refugee scapegoats|finale`,
  `What clue about his surroundings helps Julien locate Will and Andras in Baptiste's finale?|The sound of a nearby waterfall|The sight of a lighthouse|A church bell from Paris|A train announcement from Amsterdam|Hard|series 2|Will Chambers|waterfall|forest cabin|Julien deduction|location clue|final hunt`,
  `How is Julien seriously injured while stopping Andras in the final Baptiste episode?|Andras stabs him during a woodland fight|A car explodes beneath him|He falls from a cliff into the sea|He is struck by a train|Medium|series 2|Julien Baptiste|Andras Juszt|knife wounds|woodland fight|final confrontation|survival`,
  `What does Emma use to help revive her injured son Will in Baptiste's finale?|Cardiopulmonary resuscitation|A defibrillator taken from a police car|An emergency blood transfusion|An antidote from her handbag|Medium|series 2|Emma Chambers|Will Chambers|CPR|emergency first aid|rescue|mother and son`,
  `What condition is Will in when he is last shown at hospital in Baptiste?|Alive but in a coma|Fully recovered and discharged|Dead on arrival|Walking out without assistance|Medium|series 2|Will Chambers|hospital|coma|survives attack|Emma bedside|finale`,
  `What does Emma disclose publicly about Alex at the end of Baptiste?|His involvement in the terrorist massacre|His secret appointment as ambassador|His friendship with Edward Stratton|His discovery of the stolen gang money|Medium|series 2|Emma Chambers|Alex Chambers|press conference|public confession|Jozsefvaros attack|truth`,
  `Which character inherits the extremist Gomorrah symbol after Andras is imprisoned in Baptiste?|Viktor Radan|Richard Chambers|Mehmet Arslan|Niels Horchner|Hard|series 2|Viktor Radan|Gomorrah mask|extremist successor|online propaganda|Andras imprisoned|ending`,
  `What happens to Julien and Celia's relationship at the close of Baptiste?|They show signs of reconciliation|Celia dies in Hungary|They move together to Amsterdam immediately|They agree never to meet again|Medium|series 2|Julien Baptiste|Celia Baptiste|reconciliation|French home|grief recovery|final scene`,
  `How does Julien reconnect with his surviving family at the end of Baptiste?|He visits Celia and plays with his granddaughter|He takes Emma's sons to Amsterdam|He moves into a police barracks|He becomes a teacher at Will's school|Medium|series 2|Julien Baptiste|Celia Baptiste|granddaughter|family reunion|ending|healing`,
  `In which month and year did the final episode of Baptiste air on BBC One?|August 2021|March 2019|December 2020|October 2022|Medium|series 2|August 2021|final episode|UK network|broadcast end|television history|2021 finale`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 400: malformed row ${index + 1}`);
  }
  const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 400: invalid difficulty at row ${index + 1}`);
  }
  const question = stem.includes('Baptiste')
    ? stem
    : `In Baptiste, ${stem[0].toLowerCase()}${stem.slice(1)}`;
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
    throw new Error(`Pack 400: repeated answer at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length !== 13) {
    throw new Error(`Pack 400: expected 13 distinct tags at row ${index + 1}, got ${tags.length}`);
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
