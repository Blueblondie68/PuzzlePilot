
// PuzzlePilot - Big Quiz - Pack 404
// 24 Hours in Police Custody (2014-present): broadcasts through 6 September 2026.
// Ongoing programme: mark COVERED / CONTINUING on the television tracker.
// Complete WordPad-ready CommonJS file. First ID: tv_22483.
'use strict';

const FIRST_ID = 22483;
const PROGRAMME='24 Hours in Police Custody';
const commonTags=['Television',PROGRAMME,'Programme: '+PROGRAMME,
 'Channel 4','British Documentary','True Crime Television',
 'Bedfordshire Police','Ongoing Programme','2014–2026',
 'Selected Case Coverage'];

// Question | correct answer | three distractors | difficulty | seven specific tags.
// Questions identify the programme for standalone and mixed-category play.
const rows = [
  `In which year did 24 Hours in Police Custody first air on Channel 4?|2014|2011|2017|2020|Easy|2014 premiere|original series|broadcast history|launch year|factual television|British crime series|first transmission`,
  `Which police force has been at the heart of 24 Hours in Police Custody since its launch?|Bedfordshire Police|Kent Police|Northamptonshire Police|Essex Police|Easy|Bedfordshire Police|featured force|2014 launch|police partnership|English county|original access|documentary subject`,
  `At which police station was the first series of 24 Hours in Police Custody filmed?|Luton Police Station|Bedford Police Station|Cambridge Police Station|Watford Police Station|Easy|Luton Police Station|original venue|2014|custody suite|Bedfordshire|production access|first series`,
  `Which company produces 24 Hours in Police Custody?|The Garden|Kudos|Shine TV|World Productions|Easy|The Garden Productions|production company|fixed rig documentary|factual TV|Channel 4 commission|programme credits|company`,
  `Which earlier Channel 4 hospital documentary was made by the producers of 24 Hours in Police Custody?|24 Hours in A&E|Hospital|One Born Every Minute|Ambulance|Easy|24 Hours in A and E|The Garden|related documentary|fixed rig format|medical television|shared broadcaster|production history`,
  `What type of programme is 24 Hours in Police Custody?|Observational documentary|Scripted police drama|Courtroom quiz show|Fictional detective anthology|Easy|observational format|real investigations|factual series|unscripted television|police access|documentary genre|programme style`,
  `Which mixture of camera techniques was announced for the original 24 Hours in Police Custody?|Fixed-rig and handheld cameras|Animation and motion capture|Hidden microphones only|Studio webcams only|Easy|fixed cameras|handheld filming|2014 commissioning|camera technology|documentary access|police station|production method`,
  `How many hour-long instalments were in Channel 4's original commission for 24 Hours in Police Custody?|20|Six|Ten|Forty|Medium|twenty episodes|2014 commission|60 minute format|Channel 4 announcement|original order|broadcast planning|series size`,
  `Which Channel 4 executive commissioned the original 24 Hours in Police Custody series?|Nick Mirsky|Jay Hunt|Peter Fincham|Charlotte Moore|Hard|Nick Mirsky|head of documentaries|2014|commissioning|Channel 4 commissioning|television executive|original production`,
  `Which director was named for the original 2014 series of 24 Hours in Police Custody?|Alisa Pomeroy|Ben Chanan|Tom Shankland|Jermaine Blake|Hard|Alisa Pomeroy|original director|2014|series direction|Channel 4 press|production credits|first commission`,
  `Who was the original series producer of 24 Hours in Police Custody?|Flavia Taylor|Carys Laws|Lucy Wells|Sophie Oliver|Hard|Flavia Taylor|2014 series producer|original crew|documentary making|Channel 4 press|production role|first series`,
  `Which original executive producer of 24 Hours in Police Custody was also associated with Coppers?|Simon Ford|Chris Chibnall|Jed Mercurio|Peter Morgan|Medium|Simon Ford|Coppers|executive producer|2014 commission|The Garden|police factual genre|production career`,
  `How many holding cells did the original Luton custody block have when 24 Hours in Police Custody was commissioned?|21|Nine|Fourteen|Forty|Hard|21 cells|Luton custody|2014 briefing|detention facility|police station layout|Channel 4 commissioning|commissioning facts`,
  `How many interview rooms were described at Luton Police Station in 24 Hours in Police Custody's original announcement?|Seven|Three|Twelve|Twenty|Hard|seven interview rooms|Luton Police Station|2014|police interviews|custody facilities|commissioning|police station`,
  `On average how many prisoners per twelve-hour shift did Channel 4 say the original Luton custody suite handled?|30|Five|100|200|Hard|thirty prisoners|12 hour shift|2014 commissioning|Luton custody block|station workload|detention throughput|production briefing`,
  `How many custody sergeants were described as being in charge at one time in the original 24 Hours in Police Custody brief?|Two|One|Six|Ten|Hard|two custody sergeants|Luton 2014|police management|custody supervision|original commission|staffing|detention block`,
  `Which UK organisation makes decisions about whether evidence justifies prosecuting cases featured in 24 Hours in Police Custody?|Crown Prosecution Service|National Crime Agency|Independent Office for Police Conduct|National Police Chiefs Council|Medium|CPS|charging decisions|prosecution|case evidence|criminal justice|police referral|England and Wales`,
  `What does a suspect repeatedly saying no comment mean during interviews on 24 Hours in Police Custody?|They are declining to answer questions|They have been charged automatically|The case has been dismissed|The detective has ended the interview|Easy|no comment|police interview|suspect silence|interrogation|evidence gathering|custody procedure|common phrase`,
  `If a suspect says no comment during 24 Hours in Police Custody, what must investigators still do?|Put the prepared questions and evidence to them|Immediately stop the entire investigation|Automatically release every other prisoner|Ask the television crew to decide guilt|Medium|no comment interview|interview preparation|investigating officers|evidence challenge|suspect rights|police process|continued questioning`,
  `Which type of recording can supplement the producers' fixed cameras in 24 Hours in Police Custody?|Officers' body-worn video|Hospital X-ray footage only|Audience mobile votes|Scripted dramatic reconstructions only|Easy|body worn camera|evidential footage|documentary sources|police operations|on scene material|production|recording methods`,
  `Which surveillance material often helps detectives reconstruct events in 24 Hours in Police Custody?|CCTV recordings|Weather satellite forecasts|Sporting scoreboards|Television ratings charts|Easy|CCTV|evidence|investigations|footage|police detective work|timeline reconstruction|forensics`,
  `What can extend far beyond a single day in modern episodes of 24 Hours in Police Custody?|The criminal investigation itself|Only the opening credits|The police caution wording|The station's daily rota|Medium|long investigations|evolving format|months or years|major crime|production timeline|modern episodes|documentary structure`,
  `Which type of investigation became increasingly central to later 24 Hours in Police Custody specials?|Major crime investigations|Traffic-light maintenance|Parking-meter inspections|Lost-property auctions|Easy|major crime|documentary evolution|murders|serious offences|detective teams|longform specials|later series`,
  `Which neighbouring county's major-crime detectives feature alongside Bedfordshire officers in later 24 Hours in Police Custody?|Cambridgeshire|Cornwall|Cumbria|Dorset|Medium|Cambridgeshire|collaborative force|major crime unit|regional investigations|expanded coverage|2025|later episodes`,
  `Which third county joins Bedfordshire and Cambridgeshire in the regional Major Crime Unit featured in 24 Hours in Police Custody?|Hertfordshire|Devon|Lancashire|Norfolk|Medium|Hertfordshire|BCH Major Crime Unit|joint policing|cross county detectives|regional unit|2025 coverage|investigations`,
  `In what year did 24 Hours in Police Custody receive a BAFTA nomination for Best Factual Series?|2017|2012|2021|2025|Medium|BAFTA Television Awards|2017 nomination|factual series|awards history|documentary television|The Garden|recognition`,
  `Which organisation gave 24 Hours in Police Custody an Outstanding Contribution to Policing award in 2016?|Police Federation National Detectives Forum|Royal College of Nursing|Royal Television Society|Law Society of England and Wales|Hard|Police Federation|National Detectives Forum|2016 award|public policing|documentary impact|recognition|police profession`,
  `Which awards honoured 24 Hours in Police Custody with a Viewers' Choice Award in 2024?|True Crime Awards|National Film Awards|BAFTA Film Awards|Brit Awards|Medium|True Crime Awards|Viewers Choice|2024|audience recognition|true crime documentary|prize|public vote`,
  `Which 2026 awards named 24 Hours in Police Custody Best Docu-Series/Documentary?|National Reality TV Awards|British Soap Awards|Royal Television Society Journalism Awards|The Ivors|Medium|National Reality TV Awards|2026|Best Docu Series|documentary award|The Garden|industry recognition|television prize`,
  `What was the two-part 2020 special about organised drug dealing in 24 Hours in Police Custody called?|The Home County Cartel|The Murder Messages|The Ambush|The Butcher of Suburbia|Medium|Home County Cartel|2020|organised drugs|two part special|Bedfordshire Police|programme titles|true crime`,
  `Which 2021 two-part 24 Hours in Police Custody special was titled after a predatory household?|The Horror House|The Mountain|The Secret Network|The Unusual Suspects|Medium|The Horror House|2021|two part documentary|serious abuse|special title|Bedfordshire|case investigation`,
  `What was the name of the March 2023 two-part special in 24 Hours in Police Custody about a murder plot?|The Honeytrap Murder|The Cold Case Murder|The Devil's Chain|The Night Prowler|Medium|Honeytrap Murder|March 2023|two part special|murder investigation|episode title|true crime|Channel 4 commissioning`,
  `Which two-part 24 Hours in Police Custody special aired on 9 and 10 September 2024?|Murder on Prescription|Nightclub Predator|A Family Vendetta|The Ambush|Medium|Murder on Prescription|September 2024|two part special|Wisbech|murder inquiry|programme episodes|Channel 4 commissioning`,
  `In which Cambridgeshire town was the victim's home in the 24 Hours in Police Custody special Murder on Prescription?|Wisbech|Ely|Huntingdon|St Neots|Medium|Wisbech|Murder on Prescription|Cambridgeshire|2024|murder location|local investigation|two part programme`,
  `Which weapon figured prominently in the June 2024 24 Hours in Police Custody episode The Devil's Chain?|A machete|A crossbow|A cricket bat|A hunting rifle|Medium|The Devils Chain|machete attack|June 2024|Luton doorstep|violent crime|gold chain|episode case`,
  `In the June 2024 24 Hours in Police Custody episode about an attack on a Luton doorstep, what item was stolen?|A gold chain|A bicycle|A wristwatch collection|A laptop computer|Medium|gold chain|The Devils Chain|robbery evidence|Luton|June 2024|assault|episode title`,
  `Which episode of 24 Hours in Police Custody was broadcast on 25 November 2024?|The Murder Messages|The Butcher of Suburbia|The Ambush|The Cold Case Murder|Medium|Murder Messages|25 November 2024|online threats|digital abuse|broadcast date|programme episode|investigation`,
  `In 24 Hours in Police Custody's The Murder Messages, what type of threats drive the investigation?|Online messages and death threats|Anonymous letters attached to balloons|Messages hidden in sports programmes|Threats made over police radio|Medium|The Murder Messages|online threats|death threats|young couple|November 2024|digital evidence|cyber abuse`,
  `What crime forms a central theme of the December 2024 24 Hours in Police Custody episode Living the High Life?|Drug dealing and exploitation|Counterfeit paintings|Illegal fishing|Stolen racing horses|Medium|Living the High Life|drug supply|vulnerable youths|fraud link|Bedfordshire towns|December 2024|case theme`,
  `Which immigration removal centre was involved in the 2025 24 Hours in Police Custody episode Breakout?|Yarl's Wood|Harmondsworth|Brook House|Colnbrook|Medium|Yarls Wood|Breakout|January 2025|escapees|immigration removal centre|Bedfordshire|manhunt`,
  `In the 24 Hours in Police Custody episode Breakout, what were police attempting to do?|Recapture escaped detainees|Find a lost police horse|Rescue climbers in the Alps|Recover stolen museum paintings|Easy|Breakout|escapee manhunt|January 2025|Yarls Wood|detention centre|police operation|episode plot`,
  `The January 2025 24 Hours in Police Custody episode The Norfolk Narco Cartel concerned what type of crime?|International drug trafficking|Art theft|Insurance fraud|Illegal animal trading|Medium|Norfolk Narco Cartel|international narcotics|January 2025|organised crime|special operations|drug seizure|case theme`,
  `The 2025 24 Hours in Police Custody episode The Unusual Suspects began with which organisation intercepting drugs?|UK Border Force|Royal Mail Museum|Maritime and Coastguard Agency|Environment Agency|Medium|UK Border Force|The Unusual Suspects|cannabis parcels|January 2025|Luton CID|importation|investigation trigger`,
  `What drug was central to the intercepted parcels in 24 Hours in Police Custody's The Unusual Suspects?|Cannabis|Heroin|Cocaine|Ecstasy|Medium|cannabis packages|The Unusual Suspects|UK Border Force|2025|drug imports|postal evidence|Luton CID`,
  `Which 2025 two-part 24 Hours in Police Custody special investigated the murder of landlady Annette Smith?|The Butcher of Suburbia|The Ambush|Murder Is No Game|The Secret Network|Medium|The Butcher of Suburbia|Annette Smith|June 2025|two part special|Stotfold|murder|programme title`,
  `How old was Annette Smith when she was murdered in the case shown in The Butcher of Suburbia on 24 Hours in Police Custody?|74|52|63|86|Medium|Annette Smith|aged 74|murder victim|Stotfold|June 2025 broadcast|The Butcher of Suburbia|case details`,
  `In which Bedfordshire town did Annette Smith live before her murder featured in 24 Hours in Police Custody?|Stotfold|Dunstable|Sandy|Leighton Buzzard|Medium|Stotfold|Annette Smith|Bedfordshire|landlady|2025 special|The Butcher of Suburbia|village home`,
  `Which rank did Katie Dounias hold as senior investigating officer in The Butcher of Suburbia on 24 Hours in Police Custody?|Detective Chief Inspector|Police Constable|Chief Superintendent|Detective Sergeant|Hard|Katie Dounias|DCI|senior investigating officer|Annette Smith case|2025|Bedfordshire|major crime`,
  `Which 2025 two-part special of 24 Hours in Police Custody followed a sexual assault investigation linked to a nightclub?|Nightclub Predator|The Murder Messages|The Ambush|Murder on Prescription|Medium|Nightclub Predator|July 2025|sex offences|two part special|detectives|case title|Channel 4 commissioning`,
  `Which 2025 24 Hours in Police Custody episode centred on identifying the exploitation of young boys?|Lost Boys|Living the High Life|The Murder Messages|Breakout|Medium|Lost Boys|July 2025|child exploitation|detectives|programme title|Bedfordshire|safeguarding`,
  `Which 2025 24 Hours in Police Custody special examined a family killing and a planned attack at a primary school?|Murder Is No Game|The Butcher of Suburbia|The Devil's Chain|The Norfolk Narco Cartel|Medium|Murder Is No Game|October 2025|family victims|planned school attack|Bedfordshire|crime documentary|two parts`,
  `In which month of 2025 did 24 Hours in Police Custody broadcast Murder Is No Game?|October|January|April|July|Medium|October 2025|Murder Is No Game|5 and 6 October|two part special|Channel 4 commissioning|broadcast schedule|family tragedy`,
  `Who was deputy chief constable of Bedfordshire Police and appeared in the 24 Hours in Police Custody special Murder Is No Game?|Dan Vajzovic|Nick Mirsky|Simon Ford|Iain Moor|Hard|Dan Vajzovic|Deputy Chief Constable|Gold commander|Murder Is No Game|2025|police leadership|case response`,
  `Which 2026 24 Hours in Police Custody documentary examined the sale of banned bladed weapons?|Zombie Knives|Living the High Life|Breakout|Cold to the Touch|Medium|Zombie Knives|January 2026|weapons supply|knife crime|investigative format|national surrender|public safety`,
  `What year was the national surrender of zombie knives examined in the 2026 24 Hours in Police Custody special?|2024|2014|2018|2026|Medium|2024 weapons surrender|Zombie Knives|national scheme|Bedfordshire companies|knife crime|2026 documentary|public safety`,
  `Which young murder victim's case was examined in the 24 Hours in Police Custody documentary Zombie Knives?|Ashraf Habimana|Una Crown|Annette Smith|Giselle Prosper|Hard|Ashraf Habimana|aged sixteen|September 2023|knife violence|Zombie Knives|victim story|documentary`,
  `Which earlier 24 Hours in Police Custody episode inspired further abuse survivors to come forward in the Carson Grimes case?|The Horror House|The Murder Messages|The Ambush|Breakout|Hard|The Horror House|Carson Grimes|victims came forward|new investigations|2021 special|Burying Horror|sexual offences`,
  `Which offender's crimes were revisited in the 2026 24 Hours in Police Custody episode Burying Horror?|Carson Grimes|David Newton|Stephen O Dell|Nathan Turner|Medium|Carson Grimes|Burying Horror|January 2026|serial sexual offender|Bedfordshire Police|fresh investigation|episode subject`,
  `Which elderly murder victim's 2013 case featured in the April 2026 24 Hours in Police Custody special The Cold Case Murder?|Una Crown|Annette Smith|Juliana Falcon|Giselle Prosper|Medium|Una Crown|2013 murder|April 2026 broadcast|cold case|Wisbech|retired postmistress|victim`,
  `Which Cambridgeshire town was the setting of Una Crown's murder in 24 Hours in Police Custody's The Cold Case Murder?|Wisbech|Ely|St Ives|March|Medium|Wisbech|Una Crown|Cambridgeshire|2013|The Cold Case Murder|case location|2026 special`,
  `What type of forensic breakthrough helped solve the Una Crown case examined in 24 Hours in Police Custody?|DNA evidence|Ballistic matching of bullets|Fingerprinting a stolen bicycle|An audio spectrogram|Medium|Una Crown|DNA under fingernails|2026 special|cold case forensics|investigation|David Newton|evidence`,
  `Which detective superintendent led the reopened Una Crown murder investigation featured in 24 Hours in Police Custody?|Iain Moor|Simon Ford|Adrian Stone|Nick Mirsky|Hard|Iain Moor|Detective Superintendent|Una Crown case|Major Crime Unit|April 2026|lead officer|cold case`,
  `In which year was the murder of Una Crown originally committed before it featured in 24 Hours in Police Custody?|2013|2003|2019|2025|Medium|Una Crown|2013 killing|cold case|Wisbech|decade later|2026 documentary|case timeline`,
  `What was the title of the two-part 24 Hours in Police Custody special broadcast in August and September 2026?|The Ambush|Murder on Prescription|The Honeytrap Murder|Nightclub Predator|Easy|The Ambush|2026|two part special|30 August|6 September|Luton assault|programme title`,
  `How old was the boy critically injured in the case examined by The Ambush on 24 Hours in Police Custody?|17|Nine|Twenty-four|Thirty-two|Medium|The Ambush|seventeen year old|Luton attack|2022|teenage victim|2026 broadcast|injuries`,
  `Where was the critically injured teenager found in The Ambush on 24 Hours in Police Custody?|Under a railway bridge in Luton|On a beach in Brighton|Inside a hotel in York|At a stadium in Cardiff|Medium|The Ambush|railway bridge|Luton|2022|critical injuries|teenager|crime scene`,
  `What was the boy's injury in The Ambush on 24 Hours in Police Custody initially reported as?|A hit-and-run road collision|A fall from scaffolding|A swimming accident|A house fire|Medium|The Ambush|hit and run|initial report|2022|railway bridge|assault investigation|misleading circumstances`,
  `What wider issue did detectives link to the assault investigated in The Ambush on 24 Hours in Police Custody?|Drug-gang territorial conflict|International art smuggling|Ticket fraud|Wildlife poaching|Medium|The Ambush|gang territory|drug dealing|teen exploitation|2026|serious assault|case context`,
  `Which two months spanned the broadcast dates of The Ambush on 24 Hours in Police Custody?|August and September 2026|May and June 2026|January and February 2025|October and November 2024|Hard|30 August 2026|6 September 2026|The Ambush|two episodes|broadcast dates|series coverage|final cut off`,
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 404: malformed row ${index + 1}`);
  }
  const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 404: invalid difficulty at row ${index + 1}`);
  }
  const question = stem.includes('24 Hours in Police Custody')
    ? stem
    : `In 24 Hours in Police Custody, ${stem[0].toLowerCase()}${stem.slice(1)}`;
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
    throw new Error(`Pack 404: duplicate answer option at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length < 12) {
    throw new Error(`Pack 404: expected at least 12 distinct tags at row ${index + 1}, got ${tags.length}`);
  }
  return {
    id: `tv_${FIRST_ID + index}`,
    category: 'Television',
    programme: PROGRAMME,
    coverageStatus: 'Continuing',
    question,
    answers,
    correctAnswer,
    difficulty,
    tags,
    dailyEligible: true
  };
});



// AUDIT: 24 Hours in Police Custody — ONGOING; NOT COMPLETE.
// Original tv_22483–tv_22551 preserved. New questions start tv_41454.
// Case coverage is selective through The Ambush (6 September 2026);
// the complete archive contains additional cases for later maintenance.
// The Ambush investigation remained ongoing at first broadcast.
// PRIMARY SOURCES:
// https://www.thegarden.tv/productions/24-hours-in-police-custody
// https://www.thegarden.tv/awards
// https://www.beds.police.uk/police-forces/bedfordshire-police/areas/campaigns/campaigns/24-hours-in-police-custody/
// https://www.beds.police.uk/news/bedfordshire/news/2026/01-january/24-hours-in-police-custody-episode-unravels-encrypted-drug-network/
// https://www.beds.police.uk/police-forces/bedfordshire-police/areas/campaigns/campaigns/24-hours-in-police-custody/murder-is-no-game/
// https://www.beds.police.uk/police-forces/bedfordshire-police/areas/campaigns/campaigns/24-hours-in-police-custody/zombie-knives/
// https://www.beds.police.uk/police-forces/bedfordshire-police/areas/campaigns/campaigns/24-hours-in-police-custody/breakout/
// https://www.beds.police.uk/police-forces/bedfordshire-police/areas/campaigns/campaigns/24-hours-in-police-custody/lost-boys/
// https://www.beds.police.uk/police-forces/bedfordshire-police/areas/campaigns/campaigns/24-hours-in-police-custody/the-unusual-suspects/
// https://tric.org.uk/winners-2026/
// https://nationalrealitytvawards.co.uk/press-release-2026-winners
// https://www.channel4.com/press/news/24-hours-police-custody
const audit404Rows=[["2014 opening case","What occupation did the target of the opening episode's conspiracy-to-murder case have?","Accountant","Footballer","Schoolteacher","Paramedic","Opening Luton shooting investigation"],["2020 Murder in the Woods","What crime was central to the two-part special Murder in the Woods?","The murder of a young man","The theft of a museum painting","The abduction of a police officer","The disappearance of a pensioner","Original 2020 case"],["2020 Home County Cartel","Roughly how large was the intercepted drug consignment in The Home County Cartel?","More than 100 kilograms","About two kilograms","About ten kilograms","More than one tonne","Large-scale drug importation"],["2020 Home County Cartel","From which region was the drug consignment in The Home County Cartel imported into Britain?","Continental Europe","South America","North Africa","Australia","Covert drug import investigation"],["2021 Black Widow","Whom was the woman featured in the Black Widow investigation plotting to have killed?","Her ex-husband","Her brother","Her employer","Her next-door neighbour","Planned murder"],["2021 Black Widow","How had the woman in Black Widow met the man she approached for the killing?","Through a dating website","At a football club","On a cruise ship","During jury service","Meeting arranged online"],["2021 Black Widow","What evidence alerted Cambridgeshire police to the plan in Black Widow?","A secretly recorded conversation","An intercepted shipping container","A confession printed in a newspaper","A CCTV clip of a bank robbery","Recorded evidence"],["2023 The Siege","What did the suspects in The Siege threaten a neighbour with before their standoff?","A firearm","A crossbow","A petrol bomb","A hunting knife","Threat before the siege"],["2023 The Siege","From which floor of a Bedford block did the suspects throw paint at police vehicles?","The eighth floor","The second floor","The fourth floor","The twelfth floor","Bury Court tower block"],["2023 The Siege","Which pair of men were involved in the Bedford standoff depicted in The Siege?","Paul Burton and Nathan Turner","Stephen O'Dell and Samad Ali","Simon Ford and Rob Lambie","James Nesbitt and Ken Stott","Bedford 2022 police investigation"],["2023 The Siege","How long did the standoff in The Siege last?","Twelve hours","Two hours","Six hours","Twenty-four hours","Bedford police response"],["2024 The Devil's Chain","What clothing left behind by attackers helped investigators in The Devil's Chain?","A bloodied balaclava","A high-visibility jacket","A woollen scarf","A leather glove","Crime-scene evidence"],["2024 The Devil's Chain","Which two men were sentenced in the case shown in The Devil's Chain?","Stephen O'Dell and Samad Ali","Paul Burton and Nathan Turner","Ian Garrett and Tony Hughes","David Morrissey and Tom Hollander","Real-case prosecution"],["2024 Living the High Life","What family relationship linked the fraud victim to the main suspect in Living the High Life?","Uncle and niece","Father and son","Grandmother and grandson","Former spouses","Financial exploitation"],["2024 Living the High Life","Approximately what value of suspicious transactions was found in Living the High Life?","More than £200,000","About £2,000","About £20,000","More than £2 million","Serious Fraud Investigation"],["2024 Living the High Life","Which Bedfordshire area was linked to a separate drug enquiry in Living the High Life?","Biggleswade","Ampthill","Flitwick","Dunstable","Gangs and fraud connection"],["2025 Breakout","How many people initially breached the removal-centre fence in Breakout?","Thirteen","Six","Eight","Twenty","April 2023 breakout"],["2025 Breakout","How many of the escapees were quickly detained in Breakout?","Five","Two","Seven","Eleven","Immediate arrests"],["2025 Breakout","Which regional police specialist team helped coordinate the nationwide manhunt in Breakout?","Eastern Region Special Operations Unit","National Crime Agency Financial Intelligence Unit","British Transport Police Dogs Unit","Metropolitan Police Marine Unit","Police partnership"],["2025 The Unusual Suspects","What hobby was linked to the middle-aged woman detained after receiving a parcel in The Unusual Suspects?","Making homemade crafts","Deep-sea diving","Motor racing","Horse breeding","Unusual suspect"],["2025 The Unusual Suspects","What kind of breakthrough revived the initially stalled drugs investigation in The Unusual Suspects?","Forensic evidence","A television viewer's phone vote","A diplomatic intervention","A bank's annual audit","Forensic break in case"],["2025 Lost Boys","What unexpected new belongings raised concerns in Lost Boys?","New clothes received as gifts","A newly purchased horse","Several antique paintings","A collection of rare coins","Signs of child exploitation"],["2025 Lost Boys","What initial report prompted police to investigate in Lost Boys?","His mother reports him missing","A school starts a fire drill","A shop discovers a forged receipt","A local bus is stolen","Initial police notification"],["2025 Murder Is No Game","What additional target did detectives discover in the plans in Murder Is No Game?","A local primary school","A shopping centre","A football stadium","A railway station","Potential further attack"],["2026 The Secret Network","Which encrypted messaging service features in The Secret Network?","EncroChat","WhatsApp","Signal","Telegram","Encrypted criminal messages"],["2026 The Secret Network","Which named police operation's early stages were documented in The Secret Network?","Operation Costello","Operation Musicman","Operation Yewtree","Operation Paget","Organised crime operation"],["2026 The Secret Network","What two illegal commodities were linked to a Luton suspect's encrypted messages?","Firearms and drugs","Counterfeit paintings and watches","Stolen livestock and vehicles","Unlicensed medicines and tobacco","Encrypted messages used as evidence"],["2026 Burying Horror","How many victims were linked to the further charges against Carson Grimes discussed in Burying Horror?","Thirteen victims","Four victims","Nine victims","Thirty victims","Further survivors came forward"],["2026 Burying Horror","How many additional charges did Grimes admit before the follow-up documentary aired?","Twenty-four charges","Six charges","Twelve charges","Forty-eight charges","Later criminal proceedings"],["2026 Zombie Knives","Approximately how many zombie knives were surrendered by two Luton businesses in 2024?","More than 37,000","About 400","About 3,700","More than 370,000","Weapon-surrender initiative"],["2026 Zombie Knives","How many teenagers were sentenced in connection with the murder of Ashraf Habimana?","Seven teenagers","Two teenagers","Four teenagers","Twelve teenagers","Knife-crime case"],["2026 The Ambush","On what date did officers first attend the incident investigated in The Ambush?","2 June 2022","30 August 2026","6 September 2026","2 June 2024","Initial Luton emergency"],["2026 The Ambush","How long after the original incident did The Ambush recount detectives' continuing pursuit of justice?","Four years","Four months","Ten years","Fourteen days","2022 incident to 2026 broadcast"],["Awards","Which awards named the show Factual winner in both 2025 and 2026?","TRIC Awards","BAFTA Television Awards","Royal Television Society Awards","Broadcast Awards","Two factual award wins"],["Awards","Which True Crime Awards category did the programme win in 2025?","On Screen Impact for Change","Best Animated Documentary","Best Courtroom Drama","Best Film Costume","2025 True Crime Awards"],["Awards","Which Televisual Bulldog award did the series win in 2025?","Best Documentary Series (PSB)","Best Children's Drama","Best Light Entertainment","Best Costume Design","2025 awards"],["Awards","In which documentary category did the series win a 2016 Televisual Bulldog award?","Best Documentary Series","Best Entertainment Presenter","Best Drama Performance","Best New Sitcom","2016 awards"],["Awards","Which fixed-camera category did the series win in the 2016 Televisual Bulldog Awards?","Best Fixed Rig","Best Studio Design","Best Animation","Best Visual Effects","2016 technical award"],["Production","Who filmed, produced and directed the 2026 special The Ambush?","Jermaine Blake","Charles Crich","Martha Bailey","Sophie Oliver","Ambush director"],["Production","Who was story producer for The Ambush in 2026?","Lucy Wells","Maria McNally","Tess Mawle","Valentine Landeg","Ambush story producer"],["Production","Who directed the two-part 2026 special The Cold Case Murder?","Charles Crich","Jermaine Blake","Sophie Grant","Danielle Spears","Una Crown programme"],["Production","Who produced and directed the 2026 documentary Burying Horror?","Sophie Grant","Sophie Oliver","Martha Bailey","Anna Johnston","Carson Grimes documentary"],["Production","Who made the 2025 two-part special A Family Vendetta?","Martha Bailey","Jermaine Blake","Danielle Spears","Charles Crich","2025 programme credits"],["Broadcast","On which date did the original programme first premiere on Channel 4?","29 September 2014","6 October 2014","1 January 2015","29 October 2014","UK first transmission"]];
const audit404Norm=x=>String(x).normalize('NFKC').toLocaleLowerCase('en-GB').replace(/[^\p{L}\p{N}]/gu,'');
for(const [section,stem,correctAnswer,w1,w2,w3,focus] of audit404Rows){
 const question='In '+PROGRAMME+', '+stem[0].toLowerCase()+stem.slice(1);
 const answers=[w1,w2,w3];answers.splice(questions.length%4,0,correctAnswer);
 if(new Set(answers.map(audit404Norm)).size!==4)
  throw Error('Pack 404 repeated answer choices '+stem);
 const tags=['Television','Channel 4','British Documentary','True Crime Television',
 PROGRAMME,'Programme: '+PROGRAMME,'Ongoing series','2014–2026',
 'Scope: select cases through September 2026','Section: '+section,
 'Question focus: '+focus,'Correct answer: '+correctAnswer,
 'Bedfordshire Police','The Garden Productions'];
 questions.push({id:'tv_'+(41454+questions.length-69),
 category:'Television',programme:PROGRAMME,coverageStatus:'Continuing',
 question,answers,correctAnswer,difficulty:'Medium',tags,dailyEligible:true});
}
const ids404=new Set(),stems404=new Set();
for(const q of questions){
 const stem=audit404Norm(q.question);
 const newQuestion=Number(q.id.slice(3))>=41454;
 if(q.category!=='Television'||q.programme!==PROGRAMME||
 q.coverageStatus!=='Continuing'||!q.tags.includes('Programme: '+PROGRAMME)||
 !stem.includes(audit404Norm(PROGRAMME))||
 q.answers.length!==4||new Set(q.answers.map(audit404Norm)).size!==4||
 q.answers.filter(x=>x===q.correctAnswer).length!==1||
 q.tags.length<12||q.dailyEligible!==true||
 ids404.has(q.id)||stems404.has(stem)||
 (newQuestion&&stem.includes(audit404Norm(q.correctAnswer))))
 throw Error('Pack 404 validation failure at '+q.id);
 ids404.add(q.id);stems404.add(stem);
}
module.exports=questions;
