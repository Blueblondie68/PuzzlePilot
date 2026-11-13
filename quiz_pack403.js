
// PuzzlePilot - Big Quiz - Pack 403
// 24 Hours in A&E (2011-present) - programme history through Series 36 (2026).
// Ongoing series: mark COVERED / CONTINUING; do not mark fully completed.
// Complete WordPad-ready CommonJS file. First ID: tv_22421.
'use strict';

const FIRST_ID = 22421;
const commonTags = [
  'television', '24 Hours in A&E', 'Channel 4',
  'British documentary', 'medical television', 'NHS'
];

// Question | correct answer | three distractors | difficulty | seven precise tags.
// Question wording always identifies the programme for mixed quiz play.
const rows = [
  `In which year did 24 Hours in A&E first air on British television?|2011|2007|2014|2018|Easy|2011 launch|original broadcast|first series|television history|UK factual TV|premiere year|hospital documentary`,
  `Which hospital featured in the first six series of 24 Hours in A&E?|King's College Hospital|St George's Hospital|Queen's Medical Centre|Royal London Hospital|Easy|Kings College Hospital|first filming site|London|2011 to 2014|six series|emergency department|original venue`,
  `In which part of London is the original 24 Hours in A&E hospital King's College Hospital?|Denmark Hill|Whitechapel|Paddington|Chelsea|Medium|Denmark Hill|Camberwell|South London|Kings College Hospital|original site|London geography|hospital location`,
  `Which television production company makes 24 Hours in A&E?|The Garden|Kudos|World Productions|Tiger Aspect|Easy|The Garden Productions|documentary producers|production company|fixed rig television|factual entertainment|programme credits|British TV industry`,
  `What kind of television programme is 24 Hours in A&E?|Observational documentary|Scripted medical soap|Studio panel show|Competitive reality game|Easy|observational documentary|factual format|real patients|hospital access|unscripted series|emergency medicine|programme genre`,
  `In the original format of 24 Hours in A&E, how much hospital time does each programme follow?|One 24-hour period|One working week|One calendar month|One twelve-hour night shift|Easy|single day|24 hour filming window|programme structure|patient stories|hospital shifts|real time observation|episode format`,
  `What camera arrangement is central to filming 24 Hours in A&E?|Fixed cameras throughout the department|Handheld cameras carried only by doctors|One camera in a television studio|Patient-operated body cameras|Easy|fixed rig cameras|hospital filming|observational technique|remote filming|production method|behind the scenes|documentary access`,
  `Which hospital department forms the main setting of 24 Hours in A&E?|Accident and Emergency|Outpatient dentistry|Hospital pharmacy|Maternity admissions|Easy|accident and emergency|emergency department|A and E|hospital treatment|frontline care|clinical setting|programme title`,
  `What does the abbreviation A&E in 24 Hours in A&E stand for?|Accident and Emergency|Assessment and Examination|Ambulance and Evacuation|Anaesthetics and Endoscopy|Easy|A and E meaning|hospital terminology|emergency medicine|programme title|UK healthcare|clinical department|medical abbreviation`,
  `Which hospital resuscitation area regularly features critically ill patients in 24 Hours in A&E?|Resus|Physiotherapy|Outpatients|Day surgery|Easy|Resus area|resuscitation department|emergency patients|major trauma|hospital staff|critical care|on screen location`,
  `Approximately how many cameras were used for the original King's College Hospital series of 24 Hours in A&E?|70|12|25|200|Medium|70 cameras|2011 filming|Kings College Hospital|original production|fixed rig|technology|documentary logistics`,
  `How many episodes were commissioned for the original series of 24 Hours in A&E?|14|6|8|30|Medium|14 part first run|2011 commission|King's College Hospital|series order|original production|broadcast history|episode count`,
  `After the first series succeeded, how many episodes were ordered for the next run of 24 Hours in A&E?|14|4|9|24|Medium|second series|14 episode order|2012 run|2011 recommission|factual television|Kings College Hospital|commissioning`,
  `How many episodes of 24 Hours in A&E had been filmed at King's College Hospital before the 2014 move?|70|30|100|140|Medium|seventy episodes|Kings College Hospital|six series|2011 to 2014|series history|production output|original hospital`,
  `Who was the senior consultant treating a critically injured road-accident patient in the very first 24 Hours in A&E episode?|Malcolm Tunnicliff|Rhys Beynon|Keith Girling|Gabe Jones|Medium|Malcolm Tunnicliff|senior consultant|first episode|Kings College Hospital|road accident|trauma response|2011`,
  `In the first episode of 24 Hours in A&E, student Theodore Chatziapostolou was injured in what kind of accident?|He was dragged beneath a bus|He fell from a mountain|He crashed a racing car|He was hurt in a boating collision|Hard|Theodore Chatziapostolou|bus accident|Elephant and Castle|first episode|2011 patient story|pelvic injuries|King's College Hospital`,
  `Which member of the original King's College Hospital team was quoted describing A&E as a place reflecting life in Britain in 24 Hours in A&E's launch publicity?|Porter Brian Campbell|Surgeon Keith Girling|Nurse Lou Davies|Doctor Gabe Jones|Hard|Brian Campbell|hospital porter|launch publicity|2011|Kings College Hospital|staff voice|original cast`,
  `Which executive producer helped launch 24 Hours in A&E with Magnus Temple?|Nick Curwin|Peter Morgan|Andy Harries|John Yorke|Hard|Nick Curwin|Magnus Temple|executive producer|2011|The Garden Productions|original credits|commissioning`,
  `At which London hospital did 24 Hours in A&E begin filming new episodes in 2014?|St George's Hospital|Guy's Hospital|Charing Cross Hospital|University College Hospital|Easy|St Georges Hospital|hospital move|2014|south west London|seventh series|new filming location|broadcast history`,
  `Which south-west London district is home to St George's Hospital, featured in 24 Hours in A&E?|Tooting|Wimbledon Village|Brixton|Greenwich|Medium|Tooting|Wandsworth|St Georges Hospital|south west London|local geography|2014 site|hospital setting`,
  `Which numbered series first moved 24 Hours in A&E to St George's Hospital?|Series seven|Series four|Series ten|Series fourteen|Medium|series seven|2014 relocation|St Georges Hospital|King's departure|hospital history|new location|episode chronology`,
  `What year did the first St George's Hospital episodes of 24 Hours in A&E reach television?|2014|2011|2017|2021|Easy|2014|St Georges premiere|London filming|hospital transition|autumn broadcast|series seven|programme chronology`,
  `What was the title of the first St George's Hospital episode of 24 Hours in A&E?|One Fine Day|Pressure Point|Sunny Side Up|The Unknown|Medium|One Fine Day|series seven episode one|30 October 2014|St Georges Hospital|episode title|first at Tooting|broadcast`,
  `In the St George's episodes of 24 Hours in A&E, consultant Rhys specialised particularly in which patients?|Children|Heart-transplant recipients|Pregnant women|Patients needing dialysis|Medium|Rhys consultant|children's emergency department|paediatric emergency medicine|St Georges Hospital|series eight|staff profile|2015`,
  `Which episode of 24 Hours in A&E marked the 100th episode filmed at St George's Hospital?|Wrong Place Wrong Time|One Fine Day|Pressure Point|Legacy|Hard|Wrong Place Wrong Time|series fourteen|16 January 2018|St Georges milestone|100 hospital episodes|episode title|2018`,
  `Which 2018 episode of 24 Hours in A&E was identified as the programme's 200th overall, counting King's College Hospital?|I Will Survive|Collision Course|The Unknown|Modern Families|Hard|I Will Survive|series sixteen|December 2018|200th overall episode|milestone broadcast|St Georges|episode title`,
  `Which episode opened the twentieth series of 24 Hours in A&E at St George's in January 2020?|Pressure Point|Sunny Side Up|One Fine Day|The Mountain|Medium|Pressure Point|series twenty|14 January 2020|St Georges|resuscitation team|episode one|broadcast`,
  `In the 2018 episode The Unknown of 24 Hours in A&E, what problem affected patient Chris after collapsing in the street?|He could not remember who he was|He was unable to hear|He had lost his eyesight|He had a broken ankle|Medium|The Unknown episode|Chris patient|memory loss|street collapse|series fourteen|2018|patient story`,
  `In the 2018 24 Hours in A&E episode Collision Course, which sport was Graham playing when he suffered an injury?|Rugby|Tennis|Cycling|Cricket|Medium|Collision Course|Graham patient|rugby collision|head on impact|St Georges Hospital|series fourteen|2018 episode`,
  `Which profession did Christie work in before being brought to St George's with burns in the 24 Hours in A&E episode In the Line of Duty?|Psychiatric nursing|Firefighting|Primary teaching|Paramedic training|Hard|Christie patient|psychiatric nurse|In the Line of Duty|2018 episode|patient occupation|severe burns|series fifteen`,
  `What happened to Nikkita in the 24 Hours in A&E episode To Have and to Hold?|She suffered a severe epileptic fit|She fell from a horse|She was injured in a rugby match|She was rescued from a house fire|Hard|Nikkita patient|epileptic seizure|To Have and to Hold|December 2018|series sixteen|St Georges|emergency treatment`,
  `During one St George's filming period announced in 2016, for how many continuous days did cameras record 24 Hours in A&E?|56 days|Seven days|Fourteen days|120 days|Hard|56 days|2016|St Georges Hospital|continuous recording|production logistics|cameras and microphones|third filmed run`,
  `Which city did 24 Hours in A&E move to for its first filming outside London?|Nottingham|Birmingham|Manchester|Bristol|Easy|Nottingham|first outside London|2021 relocation|regional filming|hospital move|new city|series history`,
  `Which hospital in Nottingham became a home of 24 Hours in A&E after the 2021 move?|Queen's Medical Centre|City Hospital Birmingham|Northern General Hospital|Royal Derby Hospital|Easy|Queens Medical Centre|QMC|Nottingham|2021 relocation|major trauma centre|hospital venue|NHS Trust`,
  `In which year did the first filming for 24 Hours in A&E take place at Nottingham's Queen's Medical Centre?|2021|2014|2018|2025|Medium|2021 filming|Queens Medical Centre|Nottingham|location shift|first outside London|production schedule|recording year`,
  `Which kind of specialist centre helped make Queen's Medical Centre attractive as a 24 Hours in A&E filming location?|Major trauma centre|Fertility-only clinic|Dental surgery centre|Eye-testing centre|Medium|major trauma centre|QMC Nottingham|hospital selection|emergency medicine|regional healthcare|specialist services|2021 move`,
  `How many consecutive days did 24 Hours in A&E film at Queen's Medical Centre during its first Nottingham recording period?|46|Seven|Twenty|Ninety|Medium|46 consecutive days|September October 2021|Nottingham filming|QMC|production scale|continuous recording|hospital partnership`,
  `How many fixed cameras were used for the first Nottingham filming of 24 Hours in A&E, according to the hospital?|126|24|70|300|Hard|126 fixed cameras|QMC|2021 recording|production equipment|hospital fact sheet|remote filming|Nottingham`,
  `How many additional handheld cameras supported the fixed rig in the first Nottingham filming of 24 Hours in A&E?|Two|Eight|Twelve|None|Hard|two handheld cameras|QMC|2021 production|X ray access|filming technique|Nottingham|behind the scenes`,
  `About how many patients consented to filming during 24 Hours in A&E's first Queen's Medical Centre production?|2,000|200|500|10,000|Medium|two thousand patients|patient consent|2021 filming|QMC|Nottingham|hospital privacy|documentary participation`,
  `About how many staff consented to filming during the first Nottingham production of 24 Hours in A&E?|1,000|50|150|5,000|Medium|one thousand staff|staff consent|2021 filming|QMC|Nottingham|production figures|healthcare workers`,
  `How many 24 Hours in A&E episodes came from the initial Queen's Medical Centre filming period in 2021?|24|Five|Ten|Forty-eight|Medium|24 episodes|2021 shoot|QMC|Nottingham|production output|first filming block|programme history`,
  `Roughly how long did producers say it takes to edit one 24 Hours in A&E episode from the original Nottingham footage?|Nine weeks|One afternoon|Three days|Two years|Hard|nine week editing|Nottingham production|post production|fixed rig footage|editing workload|2021 material|production fact`,
  `What happens if a patient refuses consent to appear in 24 Hours in A&E?|Their treatment is unaffected and identifiable footage is not broadcast|They must change hospitals|They lose access to emergency medicine|They must pay for their treatment|Easy|patient consent|privacy rights|no impact on care|NHS filming|documentary ethics|identifiable footage|production policy`,
  `In which month and year did 24 Hours in A&E first broadcast episodes filmed at Queen's Medical Centre?|January 2023|January 2018|June 2021|October 2025|Medium|January 2023|first Nottingham broadcast|series thirty|QMC|3 January|production release|filming gap`,
  `Which member of Queen's Medical Centre's team featured as an emergency department Sister in the first Nottingham episode of 24 Hours in A&E?|Lou Davies|Sandra Wilkins|Liz Hobbs|Marwa Mahmoud|Medium|Lou Davies|Sister in charge|first Nottingham episode|3 January 2023|QMC|nursing staff|staff profile`,
  `What job did Iona Mowat do at Queen's Medical Centre when featured in 24 Hours in A&E?|Clinical support worker|Consultant cardiologist|Ambulance dispatcher|Operating-theatre surgeon|Medium|Iona Mowat|clinical support worker|QMC|January 2023|episode two|staff role|emergency department`,
  `Which season of 24 Hours in A&E began broadcasting from Queen's Medical Centre in January 2023?|Series 30|Series 20|Series 24|Series 36|Medium|series thirty|January 2023|QMC|Nottingham episodes|new hospital|broadcast sequence|programme history`,
  `How many episodes were listed for the 2025 series 34 of 24 Hours in A&E by its production company?|Nine|Four|Sixteen|Twenty|Hard|series thirty four|nine episodes|February 2025|production credits|The Garden|QMC|broadcast run`,
  `How many episodes were listed for 24 Hours in A&E series 35, beginning in May 2025?|Four|Nine|Twelve|Twenty-four|Hard|series thirty five|four episodes|May 2025|QMC|The Garden|broadcast count|2025`,
  `Which numbered series of 24 Hours in A&E began on Channel 4 in June 2026?|Series 36|Series 28|Series 30|Series 40|Medium|series thirty six|June 2026|latest covered run|Nottingham filming|QMC|continuing programme|broadcast chronology`,
  `How many episodes were listed for 24 Hours in A&E series 36 in 2026?|Ten|Four|Six|Twenty-four|Medium|ten episodes|series thirty six|2026|The Garden|programme commission|QMC|broadcast run`,
  `What was the title of the first 24 Hours in A&E episode in June 2026 at Queen's Medical Centre?|Sunny Side Up|Pressure Point|One Fine Day|The Unknown|Medium|Sunny Side Up|15 June 2026|series thirty six|QMC|episode title|family bonds|first episode`,
  `In the 2026 24 Hours in A&E episode Sunny Side Up, what had patient Sunny been doing when he was assaulted?|Protecting his sister|Breaking up a football match|Delivering newspapers|Cycling home from work|Medium|Sunny patient|Amandeep sister|assault|family protection|Sunny Side Up|June 2026|QMC`,
  `In the 2026 24 Hours in A&E episode Sunny Side Up, how did schoolboy Tyler injure his foot?|During football practice|While riding a horse|On a climbing wall|During a swimming lesson|Medium|Tyler patient|football injury|Claire mother|Sunny Side Up|QMC|June 2026|young patient`,
  `What symptom brought 87-year-old Eunice to Queen's Medical Centre in the 2026 24 Hours in A&E episode Sunny Side Up?|Coughing up blood|Severe toothache|An allergic skin rash|A dislocated shoulder|Hard|Eunice patient|coughing blood|Sunny Side Up|June 2026|QMC|family concern|emergency presentation`,
  `Which London hospital announced in October 2025 that filming of 24 Hours in A&E was returning there?|St George's Hospital|King's College Hospital|St Thomas' Hospital|Royal Free Hospital|Medium|St Georges return|October 2025|filming comeback|London|after Nottingham|hospital announcement|future episodes`,
  `How many cameras were installed at St George's for the announced 2025 return of 24 Hours in A&E?|136|70|24|400|Hard|136 cameras|October 2025|St Georges return|new equipment|filming infrastructure|fixed rig|hospital filming`,
  `Which award-giving organisation honoured 24 Hours in A&E as Best Documentary Series in 2012?|Royal Television Society|British Film Institute|National Television Awards|Royal Society of Medicine|Medium|Royal Television Society|RTS award|2012 winner|Best Documentary Series|factual television|programme recognition|award history`,
  `In which two years did 24 Hours in A&E receive BAFTA nominations for Best Factual Series?|2013 and 2019|2011 and 2012|2016 and 2026|2020 and 2021|Hard|BAFTA nominations|2013|2019|Best Factual Series|awards history|documentary recognition|The Garden`,
  `What did 24 Hours in A&E win at the 2013 Televisual Bulldog Awards?|Best Reality Programme|Best Situation Comedy|Best Animated Series|Best Entertainment Presenter|Hard|Televisual Bulldog Awards|2013|Best Reality Programme|award win|industry recognition|The Garden|factual TV`,
  `Which city does The Garden identify as the editing location for 24 Hours in A&E's recent series?|Manchester|Birmingham|Cardiff|Edinburgh|Hard|Manchester editing|post production|The Garden|regional production|editing centre|factual series|industry detail`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 403: malformed row ${index + 1}`);
  }

  const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 403: invalid difficulty at row ${index + 1}`);
  }

  const question = stem.includes('24 Hours in A&E')
    ? stem
    : `In 24 Hours in A&E, ${stem[0].toLowerCase()}${stem.slice(1)}`;
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
    throw new Error(`Pack 403: duplicate answer choice at row ${index + 1}`);
  }

  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length !== 13) {
    throw new Error(`Pack 403: expected 13 distinct tags at row ${index + 1}, got ${tags.length}`);
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
