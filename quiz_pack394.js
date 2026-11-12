
// PuzzlePilot - Big Quiz - Pack 394
// The Pembrokeshire Murders (ITV, 2021): complete three-part drama.
// Dramatised case and production only; 14 January documentary is separate.
// WordPad-ready CommonJS. First ID: tv_21459.
'use strict';

const FIRST_ID = 21459;
const commonTags = ['television', 'British TV', 'ITV', 'The Pembrokeshire Murders', 'true crime drama', 'Welsh crime drama'];

// Format: question | correct answer | three incorrect answers | difficulty | seven specific tags.
const rows = [
  // Programme, cast and production
  `Which actor portrays Detective Superintendent Steve Wilkins in The Pembrokeshire Murders?|Luke Evans|Owen Teale|Keith Allen|David Fynn|Easy|2021|Luke Evans|Steve Wilkins|lead actor|detective|casting|series protagonist`,
  `Who plays convicted burglar and murder suspect John Cooper in The Pembrokeshire Murders?|Keith Allen|Luke Evans|Charles Dale|Oliver Ryan|Easy|2021|Keith Allen|John Cooper|prime suspect|serial killer|lead cast|actor role`,
  `Which actress portrays Detective Inspector Ella Richards in the ITV drama?|Alexandria Riley|Caroline Berry|Suzanne Packer|Amy Morgan|Easy|2021|Alexandria Riley|Ella Richards|police detective|investigation team|actor role|composite character`,
  `Which actor portrays journalist Jonathan Hill in The Pembrokeshire Murders?|David Fynn|Owen Teale|Steven Meo|Richard Corgan|Easy|2021|David Fynn|Jonathan Hill|ITV Wales journalist|television reporter|actor role|media investigation`,
  `Who plays John Cooper's wife Pat in the three-part drama?|Caroline Berry|Alexandria Riley|Suzanne Packer|Jo Martin|Medium|2021|Caroline Berry|Pat Cooper|Cooper wife|family relationship|actor role|seamstress`,
  `Which actor plays John Cooper's estranged son Andrew?|Oliver Ryan|Steffan Cennydd|Kyle Lima|Charles Dale|Medium|2021|Oliver Ryan|Andrew Cooper|father son conflict|estrangement|actor role|family`,
  `Which actor plays prosecution barrister Gerard Elias in the final episode?|Owen Teale|Sam Neill|David Fynn|William Thomas|Medium|2021|Owen Teale|Gerard Elias|prosecution counsel|trial|actor role|legal drama`,
  `Which writer scripted the three-part ITV drama The Pembrokeshire Murders?|Nick Stevens|Chris Chibnall|Jed Mercurio|Russell T Davies|Medium|2021|Nick Stevens|screenwriter|series writer|television adaptation|production|credits`,
  `Who directed the three television episodes of The Pembrokeshire Murders?|Marc Evans|Ed Talfan|Nick Stevens|Simon Heath|Medium|2021|Marc Evans|series director|Welsh production|television direction|three episodes|credits`,
  `Which production company, also known for Line of Duty, made The Pembrokeshire Murders?|World Productions|Red Production Company|Left Bank Pictures|Kudos|Medium|2021|World Productions|Line of Duty|crime series producer|television production|ITV commission|company credit`,
  `Which book provided the basis for The Pembrokeshire Murders television drama?|The Pembrokeshire Murders: Catching the Bullseye Killer|The Killing of the Coast Path|Undercover in Dyfed|A Murderer's Confession|Medium|2021|Catching the Bullseye Killer|source book|Steve Wilkins|Jonathan Hill|true crime adaptation|nonfiction`,
  `Who wrote the source book about the Pembrokeshire investigation together?|Steve Wilkins and Jonathan Hill|John Cooper and Pat Cooper|Ella Richards and Gerard Elias|Marc Evans and Nick Stevens|Medium|2021|source authors|Steve Wilkins|Jonathan Hill|detective and journalist|case book|adaptation`,
  `What codename does Steve Wilkins give the renewed investigation in the drama?|Operation Ottawa|Operation Seabird|Operation Vanguard|Operation Coastal Watch|Easy|2006|Operation Ottawa|Steve Wilkins|cold case operation|investigative team|codename|Pembrokeshire`,

  // Episode 1 - reopening the cold cases
  `In what year does Steve Wilkins reopen the unsolved Pembrokeshire murders in Episode 1?|2006|1996|2011|2021|Easy|episode 1|2006|Steve Wilkins|reinvestigation|cold cases|case chronology|police return`,
  `Which Welsh police force investigates the cold cases in The Pembrokeshire Murders?|Dyfed-Powys Police|South Wales Police|North Wales Police|Gwent Police|Easy|episode 1|Dyfed Powys|Steve Wilkins|police jurisdiction|West Wales|investigation|force`,
  `Which murdered couple's case is known locally as the Coastal Path Murders?|Peter and Gwenda Dixon|Richard and Helen Thomas|John and Pat Cooper|Steve and Ella Wilkins|Easy|episode 1|Peter Dixon|Gwenda Dixon|coastal path|double murder|victim names|1989`,
  `In which year were Peter and Gwenda Dixon murdered on a Pembrokeshire walking holiday?|1989|1981|1995|2004|Medium|episode 1|1989|Peter Dixon|Gwenda Dixon|coastal path killings|victims|case timeline`,
  `Which two siblings were murdered in their Pembrokeshire home in the other cold case?|Richard and Helen Thomas|Peter and Gwenda Dixon|Andrew and Amy Cooper|Jack and Ella Wilkins|Medium|episode 1|Richard Thomas|Helen Thomas|Scoveston Manor|1985 killings|siblings|double murder`,
  `In which year were Richard and Helen Thomas killed?|1985|1979|1989|1998|Medium|episode 1|1985|Richard Thomas|Helen Thomas|Scoveston Manor|murder timeline|first case`,
  `Which house is associated with the Thomas double murder in the investigation?|Scoveston Manor|Highgrove House|Glyndwr Hall|Nolton Lodge|Medium|episode 1|Scoveston Manor|Richard Thomas|Helen Thomas|Milford Haven|crime scene|family home`,
  `What was done to the Thomas siblings' home after they were murdered?|It was set on fire|It was flooded|It was demolished by an excavator|It was boarded up with the victims inside|Medium|episode 1|Thomas murders|arson|burned house|fire evidence|1985|crime scene`,
  `Which kind of offences was John Cooper already imprisoned for when Steve reopened the cases?|Burglaries and robberies|Tax fraud and bribery|Drug trafficking|Dangerous driving|Easy|episode 1|John Cooper|burglary conviction|robbery offences|prison sentence|parole|criminal history`,
  `What first revives Steve's interest in the unsolved Coastal Path murders in Episode 1?|A television news report|An anonymous letter through his door|A new confession from a prisoner|A message from an American detective|Medium|episode 1|Steve Wilkins|television news|Peter and Gwenda Dixon|case reopening|home viewing|initial lead`,
  `What does Steve find at the place where the Dixons were murdered when he visits it?|A memorial plaque|A discarded wallet|A newly buried weapon|A taped confession|Medium|episode 1|coastal path|memorial plaque|Dixon victims|crime scene visit|Steve Wilkins|site inspection`,
  `Which emerging field persuades Steve that the old evidence deserves fresh examination?|Forensic DNA analysis|Satellite tracking of vehicles|Social media profiling|Facial-recognition drones|Easy|episode 1|forensic advances|DNA profiling|cold case review|old evidence|Steve Wilkins|investigation method`,
  `Who supports Steve's proposal when senior officers are hesitant about reopening the cases?|DI Ella Richards and DCS Coles|John Cooper and his solicitor|Pat and Andrew Cooper|Jonathan Hill and Gerard Elias|Medium|episode 1|Ella Richards|DCS Coles|police approval|case proposal|senior officers|Operation Ottawa`,
  `What limits the Operation Ottawa team's choice of which exhibits to send for forensic testing?|A very tight investigation budget|A ban on using DNA evidence|A court order excluding old objects|A shortage of police vehicles|Medium|episode 1|Operation Ottawa|forensic budget|exhibit selection|case resources|evidence testing|costs`,
  `Which estate does Steve visit while considering an earlier attack on five teenagers?|Nolton Estate|Scoveston Estate|Llanerch Estate|Garrison Estate|Hard|episode 1|Nolton Estate|teenage attack|John Cooper|assault investigation|Steve Wilkins|crime locations`,
  `What does journalist Jonathan Hill initially want to make about the unsolved crimes?|A television documentary|A true-crime stage musical|A radio comedy series|A historical fiction film|Easy|episode 1|Jonathan Hill|documentary proposal|ITV Wales|unsolved murders|media project|journalist`,
  `What arrangement does Steve make with Jonathan Hill to protect the new investigation?|Delay the documentary in return for a later exclusive|Publish every witness statement immediately|Keep the filming secret from his colleagues|Let Hill join police interviews as an officer|Medium|episode 1|Steve Wilkins|Jonathan Hill|delayed documentary|exclusive interview|media strategy|confidentiality`,
  `What sport is Steve Wilkins's son Jack playing when his father tries to rebuild their relationship?|Football|Rugby union|Cricket|Basketball|Easy|episode 1|Jack Wilkins|football matches|Steve father|family subplot|Steffan Cennydd|parenting`,
  `What is the first name of Steve Wilkins's daughter, seen visiting him to do some washing?|Amy|Ella|Pat|Erin|Medium|episode 1|Amy Wilkins|Mabli Jen Eustace|Steve daughter|home visit|family subplot|cast`,
  `Where is Andrew Cooper found unconscious at the end of Episode 1?|Beside railway tracks|On a hospital roof|At a seaside hotel|In a prison courtyard|Medium|episode 1|Andrew Cooper|train yard|pill overdose|railway workers|final scene|emotional distress`,
  `How does Andrew react to the parole board calling John Cooper his father in Episode 1?|He asks them to use Cooper's name instead|He volunteers to defend him|He bursts into applause|He refuses to acknowledge the board|Hard|episode 1|Andrew Cooper|parole board|estranged father|John Cooper|family trauma|testimony`,

  // Episode 2 - interviews, family and the game-show breakthrough
  `How many days of formal interviews does Steve's team conduct with John Cooper in Episode 2?|Three|One|Five|Seven|Easy|episode 2|three day interview|John Cooper|police questioning|Operation Ottawa|Ella Richards|Gareth Rees`,
  `Which detective sergeant partners Ella Richards in the interviews with John Cooper?|Gareth Rees|Glyn Johnson|Nigel Rowe|George Jones|Medium|episode 2|Gareth Rees|Charles Dale|Ella Richards|interview pairing|police detective|questioning`,
  `Who plays DS Gareth Rees in The Pembrokeshire Murders?|Charles Dale|Richard Corgan|Kyle Lima|William Thomas|Medium|episode 2|Charles Dale|Gareth Rees|police cast|interview officer|actor role|detective sergeant`,
  `Why does Steve initially stay out of the interview room with Cooper?|Cooper has seen him on television|He is temporarily suspended|He is recovering from an injury|He is abroad on another case|Medium|episode 2|Steve Wilkins|John Cooper|televised interview|investigative strategy|police interview|public recognition`,
  `Which book is John Cooper seen taking from the prison library after Steve's TV appeal?|Traces of Guilt|Forensics for Beginners|Inside the Criminal Mind|The Murderer's Handbook|Hard|episode 2|Traces of Guilt|prison library|John Cooper|television appeal|psychological pressure|reading`,
  `Which gambling game comes up when Gareth Rees questions Cooper about losing money?|Spot the Ball|National Lottery scratchcards|Bingo|Roulette|Medium|episode 2|Spot the Ball|John Cooper|gambling losses|Gareth Rees|questioning|financial past`,
  `Whom does Cooper repeatedly suggest might be responsible for the old offences?|His son Andrew|His wife Pat|Journalist Jonathan Hill|Detective Steve Wilkins|Easy|episode 2|John Cooper|Andrew Cooper|blame shifting|interview denials|family conflict|suspect statements`,
  `What excuse does Cooper give when asked to examine a photograph during questioning?|His glasses are broken|The lighting is too bright|He cannot read English|He is suffering from amnesia|Medium|episode 2|John Cooper|broken spectacles|photographic exhibit|Ella Richards|interrogation|evasive tactic`,
  `What item does Cooper admit belongs to him before changing his explanation to say it was stolen?|A balaclava|A pair of binoculars|A red jacket|A wristwatch|Medium|episode 2|balaclava|John Cooper|contradictory account|stolen item claim|police interview|evidence`,
  `Which weapon does Cooper claim he buried to stop his son hurting himself?|A shotgun|A hunting knife|A crossbow|A pistol|Medium|episode 2|shotgun|John Cooper|Andrew Cooper|buried weapon|firearm evidence|suspect account`,
  `What similarity between two guns attracts Gareth Rees's attention during questioning?|Both have been shortened in the same way|Both have identical serial numbers|Both are made from the same unusual metal|Both contain a concealed microphone|Hard|episode 2|sawn off shotguns|Gareth Rees|weapon modifications|ballistics|Cooper interview|firearms`,
  `What colour paint is associated with the altered firearm evidence in Episode 2?|Black|White|Green|Red|Medium|episode 2|black paint|shotgun barrels|forensic tests|concealment|Steve Wilkins|gun evidence`,
  `What clothing does a witness sketch prompt detectives to search for in Episode 2?|Khaki shorts|A red overcoat|Blue dungarees|A leather waistcoat|Easy|episode 2|khaki shorts|witness sketch|clothing evidence|John Cooper|missing exhibit|investigative lead`,
  `What does Cooper claim about the length of the shorts he owned compared with those in the sketch?|His shorts were shorter|His shorts were ankle length|His shorts had long turn-ups|His shorts were exactly the same length|Medium|episode 2|khaki shorts|John Cooper|length discrepancy|witness sketch|interview claim|later clue`,
  `What does Cooper tell Pat to do when he hears police are looking for his old khaki shorts?|Ask Andrew whether he has them|Burn all their family photographs|Take them to a charity shop|Give them to his solicitor|Medium|episode 2|Pat Cooper|Andrew Cooper|khaki bathers|prison visit|evidence search|family pressure`,
  `What injury does Andrew say John Cooper inflicted on him during childhood?|A broken back|A fractured wrist|A damaged eye|A broken jaw|Hard|episode 2|Andrew Cooper|broken back|John Cooper|childhood abuse|family history|disability`,
  `Which holiday destination is central to Andrew's account of how his parents neglected him?|Spain|Ireland|France|Italy|Medium|episode 2|Andrew Cooper|family holiday|Spain|neglect allegations|Pat Cooper|childhood trauma`,
  `What does Steve notice on a local pub wall while attending Jack's football outing?|A photograph of Cooper with a darts team|A map marking all the crime scenes|A newspaper article about the Thomas house|An advertisement for the parole board|Medium|episode 2|pub photograph|darts team|John Cooper|Steve Wilkins|chance discovery|Jack football`,
  `Which classic ITV game show supplies archive footage of John Cooper?|Bullseye|The Price Is Right|Family Fortunes|Blockbusters|Easy|episode 2|Bullseye|ITV archive|John Cooper|Jim Bowen|television evidence|game show`,
  `What feature of Cooper's appearance does the recovered Bullseye footage help confirm?|He had longer hair resembling the witness sketch|He wore an eye patch|He had a distinctive beard dyed red|He walked with a wooden stick|Medium|episode 2|Bullseye footage|long hair|witness sketch|John Cooper|appearance comparison|identification`,
  `What major decision is made by the parole authorities despite Steve's doubts?|Cooper is released from prison|Cooper is transferred abroad|Cooper is given a life sentence|Cooper is immediately retried for murder|Easy|episode 2|John Cooper|second parole hearing|prison release|Steve Wilkins|renewed threat|case pressure`,
  `What does Pat do to avoid Cooper's attention after he returns home?|Locks herself in the bathroom|Leaves for a hotel|Hides in a wardrobe|Calls a television journalist|Medium|episode 2|Pat Cooper|bathroom door|John Cooper|fear at home|prison release|final scene`,

  // Episode 3 - the forensic breakthrough and trial
  `What is the cause of Pat Cooper's death as confirmed by the pathologist in the final episode?|Natural causes|A gunshot wound|Poisoning|Drowning|Medium|episode 3|Pat Cooper|pathologist|natural death|John Cooper release|home investigation|medical finding`,
  `Who declines to attend his mother Pat's funeral in Episode 3?|Andrew Cooper|Steve Wilkins|Jonathan Hill|Gerard Elias|Medium|episode 3|Andrew Cooper|Pat Cooper|funeral|family estrangement|mourning|John Cooper`,
  `What old record leads Steve to rediscover the crucial khaki shorts?|Crime-scene photographs|A hotel reservation book|A railway timetable|An archived telephone recording|Easy|episode 3|Steve Wilkins|crime scene photographs|khaki shorts|evidence discovery|cold case files|visual clue`,
  `What does Ella Richards notice about the khaki shorts found in the exhibits?|They are women's shorts|They are made of leather|They are children's school uniform|They have a manufacturer's label from abroad|Medium|episode 3|Ella Richards|women's shorts|khaki clothing|evidence examination|witness sketch|mystery clue`,
  `Where is a vital speck of blood found on the shorts after forensic scientists examine them?|Inside a stitched hem|On a belt buckle|Beneath a decorative badge|Inside a zipped pocket|Hard|episode 3|shorts hem|unpicked stitching|microscopic blood|forensic breakthrough|fabric evidence|laboratory`,
  `Whose blood is identified on the crucial pair of shorts?|Peter Dixon's|John Cooper's|Andrew Cooper's|Richard Thomas's|Hard|episode 3|Peter Dixon|khaki shorts|blood identification|DNA evidence|coastal path victim|forensic link`,
  `What was Pat Cooper's trade, relevant to the altered stitching in the shorts?|Seamstress|Florist|Hairdresser|Baker|Medium|episode 3|Pat Cooper|seamstress|altered shorts|hem stitching|blood evidence|occupation`,
  `Where is John Cooper arrested after the crucial forensic discovery?|Outside an off-licence|Inside a railway carriage|At the local courthouse|On the coastal footpath|Medium|episode 3|John Cooper|arrest scene|off licence|Operation Ottawa|forensic breakthrough|police raid`,
  `Which items found in Cooper's car suggest that another attack might have been planned?|Rope, gloves and maps|Camping chairs and blankets|Paint brushes and wallpaper|Fishing rods and spare tyres|Medium|episode 3|car boot evidence|rope|gloves|maps|planned offence|arrest search`,
  `What kind of scientific evidence is recovered from pockets of the khaki shorts?|Cooper's DNA|A rare pollen sample|An unknown animal's hair|A unique metal fragment|Hard|episode 3|John Cooper DNA|shorts pockets|forensic profiling|trace evidence|crime link|police interview`,
  `Which victim's sock provides another piece of DNA evidence discussed during Cooper's final questioning?|Richard Thomas's|Peter Dixon's|Gwenda Dixon's|Helen Thomas's|Hard|episode 3|Richard Thomas|sock evidence|DNA comparison|Scoveston case|forensic exhibits|police questioning`,
  `What does forensic examination reveal beneath paint on Cooper's shotgun?|Peter Dixon's blood|A hidden manufacturer's name|A concealed fingerprint photograph|A second gun barrel|Hard|episode 3|shotgun|black paint removed|Peter Dixon|blood evidence|forensic science|firearm link`,
  `Which survivor of an earlier sexual assault is approached about giving evidence against Cooper?|Erin Davies|Ella Richards|Pat Cooper|Amy Wilkins|Medium|episode 3|Erin Davies|survivor testimony|earlier attack|trial witness|police appeal|Amy Morgan`,
  `What option is initially offered to witnesses who are reluctant to face Cooper in court?|Giving evidence by video link|Submitting unsigned letters|Having their testimony read by a journalist|Testifying without any questions|Medium|episode 3|video link testimony|Gerard Elias trial|Erin Davies|witness protection|court process|survivors`,
  `What do Erin Davies and another survivor ultimately choose regarding their trial evidence?|They testify in person|They refuse all contact with the court|They send only written statements|They ask Cooper to interview them privately|Medium|episode 3|Erin Davies|courtroom testimony|survivor decision|prosecution witnesses|evidence|trial`,
  `What former first name does Andrew Cooper explain he changed because his father had given it to him?|Adrian|Arthur|Alan|Anthony|Hard|episode 3|Andrew Cooper|Adrian Cooper|name change|John Cooper|son's testimony|family trauma`,
  `Who leads the prosecution case against John Cooper in the final episode?|Gerard Elias|Jonathan Hill|Gareth Rees|George Jones|Easy|episode 3|Gerard Elias|Owen Teale|prosecution barrister|criminal trial|legal proceedings|courtroom`,
  `Which object does Gerard Elias use while challenging Cooper about his inconsistent testimony?|A balaclava|A pair of sunglasses|A fountain pen|A hunting trophy|Medium|episode 3|Gerard Elias|balaclava|cross examination|John Cooper|contradictory testimony|court exhibit`,
  `To how many charges is Cooper found guilty in the drama's final courtroom verdict?|Eleven|Four|Seven|Sixteen|Medium|episode 3|11 guilty counts|John Cooper|jury verdict|murder and other offences|trial outcome|conviction`,
  `In what year was the real John Cooper convicted after the investigation portrayed in the ITV drama?|2011|2006|1989|2021|Medium|episode 3|2011 conviction|John Cooper|real case|criminal trial|case chronology|justice`,
  `What does Steve say he intends to do if Cooper is found not guilty?|Resign from the police|Emigrate to Australia|Join a private detective firm|Publish the evidence online|Medium|episode 3|Steve Wilkins|resignation plan|verdict pressure|career stakes|court outcome|personal decision`,
  `What new career does Jack tell his father Steve he is considering near the end of the drama?|Joining the police|Becoming a barrister|Working as a journalist|Training as a forensic pathologist|Easy|episode 3|Jack Wilkins|police career|Steve Wilkins|father son bond|final scenes|Steffan Cennydd`,
  `Where is Andrew Cooper shown leaving flowers in the final scene?|At his mother Pat's grave|Outside the courthouse|At the Coastal Path memorial|On the steps of a police station|Medium|episode 3|Andrew Cooper|Pat grave|flowers|final scene|family grief|cemetery`,
  `Which person involved in the real investigation makes a brief appearance in the drama's courtroom public gallery?|The real Steve Wilkins|The real John Cooper|The real Gerard Elias|The real Andrew Cooper|Hard|episode 3|Steve Wilkins cameo|public gallery|courtroom scene|real detective|production detail|appearance`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 394: malformed row ${index + 1}`);
  }
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 394: invalid difficulty at row ${index + 1}`);
  }
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
    throw new Error(`Pack 394: repeated option at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length !== 13) {
    throw new Error(`Pack 394: expected 13 distinct tags at row ${index + 1}; got ${tags.length}`);
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
