
 // quiz_pack288.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: The Thin Blue Line (BBC One, 1995-1996)
 // Full original run: two series, fourteen episodes including both Christmas specials.
 // The pack length is based on distinct, verifiable material - no arbitrary question target.
 // Every question has eight individually selected subject-specific tags.
 // Do not update quiz_bank.js until the agreed end-of-session connection.
 // Row: question | correct answer | three distractors | difficulty | eight individual tags

 const groups = [
   {
     topic: 'Series Background And Cast',
     facts: `In which year did the British police sitcom The Thin Blue Line first air?|1995|1989|1999|2003|Easy|Series Premiere|BBC Comedy|Nineteen Ninety Five|Original Broadcast|British Television History|Ben Elton Sitcom|First Series|1990s Television
 On which BBC channel was The Thin Blue Line originally shown?|BBC One|BBC Two|BBC Three|BBC Four|Easy|Original Channel|BBC One Transmission|British Broadcasting|1995 Debut|1996 Finale|Television Network|Police Sitcom|BBC Programming
 How many series of The Thin Blue Line were produced?|Two|One|Three|Four|Easy|Series Count|1995 First Series|1996 Second Series|Complete Run|British Comedy|Limited Run|Programme History|Two Series
 How many episodes of The Thin Blue Line were broadcast, including its Christmas specials?|Fourteen|Twelve|Sixteen|Twenty|Medium|Episode Count|Seven Episodes Per Series|Christmas Specials|Original Run|1995|1996|Series Structure|British Sitcom
 Which comedian created and wrote The Thin Blue Line?|Ben Elton|Richard Curtis|John Sullivan|David Renwick|Easy|Ben Elton Writer|Creator|Screenwriter|Gasforth Police Sitcom|1990s BBC|Comedy Writing|Programme Credits|British Comedian
 Who directed all fourteen episodes of The Thin Blue Line?|John Birkin|Ben Elton|Geoffrey Perkins|Richard Curtis|Medium|John Birkin|Director|Production Credits|BBC Television|Both Series|1995|1996|Sitcom Production
 Which actor played Inspector Raymond Fowler?|Rowan Atkinson|David Haig|James Dreyfus|Mark Addy|Easy|Rowan Atkinson|Raymond Fowler|Police Inspector|Lead Character|Actor Casting|Uniformed Police|Gasforth Police|British Comedy Actor
 Which actor portrayed Detective Inspector Derek Grim?|David Haig|Rowan Atkinson|Rudolph Walker|Kevin Allen|Easy|David Haig|Derek Grim|Detective Inspector|CID Leader|Actor Casting|Police Rivalry|Gasforth Detectives|British Actor
 Which actress played Sergeant Patricia Dawkins?|Serena Evans|Mina Anwar|Lucy Robinson|Joy Brook|Medium|Serena Evans|Patricia Dawkins|Desk Sergeant|Raymond Fowler Partner|Actor Casting|Uniformed Officers|Gasforth Station|Female Police Character
 Which actor played Police Constable Kevin Goody?|James Dreyfus|David Haig|Kevin Allen|Mark Addy|Easy|James Dreyfus|Kevin Goody|Police Constable|Actor Casting|Maggie Habib|Comic Character|Uniformed Officers|Gasforth Station
 Which actress portrayed Police Constable Maggie Habib?|Mina Anwar|Serena Evans|Lucy Robinson|Joy Brook|Easy|Mina Anwar|Maggie Habib|Police Constable|Actor Casting|Gasforth Officers|Kevin Goody|Uniformed Police|British Actress
 Which actor played Police Constable Frank Gladstone?|Rudolph Walker|Rowan Atkinson|David Haig|James Dreyfus|Medium|Rudolph Walker Performer|Frank Gladstone|Police Constable|Actor Casting|Gasforth Station|Veteran Officer|Uniformed Team|British Television
 Which actor played Detective Constable Kray during the first series?|Kevin Allen|Mark Addy|James Dreyfus|David Haig|Medium|Kevin Allen|Robert Kray|Detective Constable|Series One|CID|Derek Grim Assistant|Actor Casting|Police Detective
 Which actor joined the second series as Detective Constable Gary Boyle?|Mark Addy|Kevin Allen|Rudolph Walker|Rowan Atkinson|Medium|Mark Addy|Gary Boyle|Detective Constable|Series Two|CID|Kray Replacement|Actor Casting|Derek Grim Colleague
 Who composed the music for The Thin Blue Line?|Howard Goodall|Ronnie Hazlehurst|John Williams|David Arnold|Hard|Howard Goodall|Music Composer|Theme Music|Television Score|Production Credits|BBC Sitcom|British Composer|1990s Soundtrack`,
   },
   {
     topic: 'Gasforth Police And Personal Relationships',
     facts: `What is the name of the fictional town served by Inspector Fowler's police station?|Gasforth|Denton|Walmington-on-Sea|Craggy Island|Easy|Gasforth|Fictional Town|Police Station|Raymond Fowler|Setting|Uniformed Officers|British Sitcom Locations|Local Community
 Which police department is led by the pompous Detective Inspector Grim?|CID|Traffic Wardens|Fire Brigade|Special Constabulary|Easy|Derek Grim|Criminal Investigation Department|CID|Detective Team|Police Hierarchy|Raymond Fowler Rivalry|Station Departments|Detective Work
 What is Sergeant Patricia Dawkins's personal relationship to Inspector Fowler?|She is his long-term partner|She is his sister|She is his former commanding officer|She is his daughter|Easy|Patricia Dawkins|Raymond Fowler|Long Term Relationship|Live In Couple|Romantic Partnership|Station Colleagues|Domestic Life|Sergeant And Inspector
 Which colleague is the object of PC Goody's persistent romantic affection?|Maggie Habib|Patricia Dawkins|Mayoress Wickham|DC Crockett|Easy|Kevin Goody|Maggie Habib|Unrequited Attraction|Workplace Romance|Police Constables|Character Relationship|Gasforth Police|Comic Infatuation
 What is the first name of Inspector Fowler's son from his earlier marriage?|Bill|Darren|Kevin|Gary|Medium|Bill Fowler|Raymond Fowler|Father Son|Former Marriage|Night Shift|Visiting Son|Family History|Teenage Character
 What is the name of Detective Inspector Grim's wife?|Tina|Patricia|Maggie|Susan|Medium|Tina Grim|Derek Grim|Marriage|Off Screen Character|Domestic Arguments|Family Background|Detective Inspector|Grim Household
 From which Caribbean country did PC Frank Gladstone originally come?|Trinidad|Jamaica|Barbados|Grenada|Medium|Frank Gladstone|Trinidad|Rudolph Walker|Character Background|Caribbean Heritage|Gasforth Constable|Police Officer|Personal History
 Which hobbyist group does Inspector Fowler enjoy performing with?|Gasforth Amateur Dramatic Society|Gasforth Rugby League Club|The Royal Ballet|The British Astronomical Association|Medium|Raymond Fowler|Amateur Dramatics|Gasforth Drama Society|Stage Performance|Christmas Pantomime|Personal Hobby|Local Theatre|Off Duty Life`,
   },
   {
     topic: 'First Series Stories And Christmas Special',
     facts: `What occasion distracts Fowler from his anniversary with Dawkins in the first episode?|The Queen's official birthday|The police station's centenary|A royal wedding|A general election|Easy|Raymond Fowler|Patricia Dawkins|Queens Birthday|Forgotten Anniversary|First Episode|1995|Royal Celebration|Relationship Tension
 How many years together are Fowler and Dawkins celebrating at the start of the first series?|Ten years|Two years|Five years|Twenty years|Medium|Raymond Fowler|Patricia Dawkins|Tenth Anniversary|First Series|Relationship Duration|Queens Birthday Present|Long Term Couple|1995 Story
 Which emergency-services worker catches Maggie Habib's eye early in the first series?|A fireman|An ambulance driver|A coastguard|A mountain rescuer|Easy|Maggie Habib|Fire And Terror|Firefighter Romance|Kevin Goody Jealousy|Emergency Services|1995 Plot|Gasforth|Attraction
 What sort of caller repeatedly pesters Inspector Fowler with implausible crime claims?|A hoaxer|A taxi dispatcher|A television producer|A missing tourist|Medium|Raymond Fowler|Fire And Terror|Hoax Calls|False Confessions|Police Telephone|Practical Joker|Station Disruption|Derek Grim
 Which constable does Grim want to use as bait in a criminal honey-trap operation?|Maggie Habib|Kevin Goody|Frank Gladstone|Gary Boyle|Medium|Maggie Habib|Derek Grim|Honey Trap|Undercover Bait|Criminal Suspect|Fowler Objections|CID Operation|1995 Story
 What event is Fowler hoping to win with Maggie Habib on his team?|A pub quiz|A ballroom competition|A cricket match|A village flower show|Easy|Raymond Fowler|Maggie Habib|Pub Quiz|Honey Trap|Best Player|Team Competition|Dawkins Jealousy|Local Pub
 Which group's antics cause trouble at Gasforth police station during Rag Week?|College students|Retired police officers|Travelling actors|Football referees|Medium|Rag Week|College Students|Student Pranks|Police Station|Fund Raising Week|Gasforth|1995 Episode|Public Disorder
 What serious crime complicates the students' Rag Week pranks?|A bank robbery|A jewellery-shop arson|A train hijacking|A museum burglary|Medium|Rag Week|Bank Robbery|Disguises|Patricia Dawkins|Raymond Fowler|Criminal Investigation|1995 Story|Student Pranks
 Who comes to stay with Fowler and Dawkins in the story involving a sex therapist?|Fowler's son Bill|Grim's wife Tina|Habib's younger sister|Goody's former schoolteacher|Medium|Bill Fowler|Raymond Fowler|Patricia Dawkins|Night Shift|Family Visit|Sex Therapist|Domestic Disruption|1995 Episode
 What outing does Fowler organise for young offenders, much to Grim's disapproval?|A camping trip|A trip to Paris|A skiing holiday|A cruise|Easy|Raymond Fowler|Derek Grim|Kids Today|Youth Offenders|Camping Trip|Rehabilitation|Policing Disagreement|1995 Episode
 Why does PC Goody face an assault charge after defending Habib in the youth-offenders story?|He punches a skinhead who racially abuses her|He accidentally hits a fireman|He breaks a window at the pub quiz|He pushes Grim down the stairs|Medium|Kevin Goody|Maggie Habib|Kids Today|Racist Abuse|Assault Charge|Young Offenders|Defending Colleague|1995 Story
 What gift intended for Habib does Goody accidentally give Fowler at Christmas?|Lingerie|A wristwatch|A box of chocolates|A theatre ticket|Medium|Kevin Goody|Maggie Habib|Raymond Fowler|Yuletide Spirit|Mixed Up Presents|Christmas Special|Lingerie|1995 Christmas
 Which character wins the role of Captain Hook that Fowler hoped to play in the Christmas pantomime?|Derek Grim|Kevin Goody|Frank Gladstone|Robert Kray|Medium|Derek Grim|Raymond Fowler|Peter Pan|Captain Hook|Amateur Dramatics|Yuletide Spirit|1995 Christmas|Pantomime`,
   },
   {
     topic: 'Second Series Stories And Final Christmas Special',
     facts: `Which local criminal is the subject of the drug raid in the opening story of Series 2?|Harry the Spike|Terry the Tank|Ike Dubaku|Dave the Hat|Hard|Harry The Spike|Drug Dealer|Court In The Act|Gasforth CID|Drugs Raid|Series Two|1996 Story|Suspect
 What misconduct does Fowler suspect after Grim and Boyle's successful drugs raid?|They planted evidence|They bribed a judge|They forged a passport|They sold police vehicles|Medium|Raymond Fowler|Derek Grim|Gary Boyle|Planted Evidence|Court In The Act|Police Corruption|Drug Raid|1996 Episode
 What unusual role does Fowler adopt to teach his officers about equality and discrimination?|A Martian dissident|A medieval knight|A French ambassador|A football referee|Medium|Raymond Fowler|Martian Dissident|Ism Ism Ism|Equality Training|Discrimination|Police Briefing|1996 Series|Role Play
 Which secret society does Grim try to join after being rejected by the Freemasons?|The Order of Todgers|The Rotary Club|The Athenaeum|The Royal Society|Medium|Derek Grim|Order Of Todgers|Freemasons|Secret Society|Social Ambition|Ism Ism Ism|1996 Story|Failed Application
 What kind of television programme is filmed at Gasforth police station during Series 2?|A fly-on-the-wall documentary|A live cooking competition|A historical drama|A children's puppet show|Easy|Fly On The Wall|Documentary Crew|BBC Television|Gasforth Police|Camera Crew|Officers On Camera|Series Two|1996 Story
 What police operation brings Maggie Habib into conflict with her younger sister?|A drugs raid at a rave|A football crowd search|A shoplifting patrol at Christmas|A traffic checkpoint|Medium|Maggie Habib|Younger Sister|Alternative Culture|Rave Raid|Drug Evidence|Family Loyalty|Police Duty|1996 Story
 What evidence does Habib conceal to protect her younger sister?|Illegal drugs|A stolen firearm|A forged driving licence|A bag of counterfeit coins|Medium|Maggie Habib|Younger Sister|Hidden Drugs|Evidence Concealment|Alternative Culture|Loyalty Conflict|CID Raid|1996 Series
 Which football club faces Gasforth FC in their FA Cup tie in Series 2?|Chelsea|Liverpool|Arsenal|Manchester United|Medium|Gasforth Football Club|Chelsea FC|FA Cup|Come On You Blues|Football Match|1996 Episode|Police Security|Cup Opponents
 What honour does the mayoress offer to recommend Fowler for if the football match remains trouble-free?|An MBE|A knighthood|An OBE|A peerage|Medium|Raymond Fowler|Mayoress Wickham|MBE|Come On You Blues|FA Cup Security|Public Service Honour|Football Hooliganism|1996 Story
 Which civic project inspires the protest that Patricia Dawkins joins in Series 2?|A new bypass|A shopping-centre extension|An airport runway|A harbour redevelopment|Easy|Patricia Dawkins|Road Rage|Bypass Protest|Environmental Campaign|Local Politics|Police Duty Conflict|1996 Episode|Activism
 Who plays Mayoress Dame Christabel Wickham in the second series?|Lucy Robinson|Serena Evans|Joy Brook|Mina Anwar|Hard|Lucy Robinson|Mayoress Wickham|Actor Casting|Gasforth Mayor|Series Two|Come On You Blues|Road Rage|Civic Figure
 Why does Fowler finally propose marriage to Dawkins in the last episode?|He thinks marriage will improve his promotion chances|He has won a romantic holiday|She has just been transferred abroad|He has inherited a wedding venue|Medium|Raymond Fowler|Patricia Dawkins|The Green Eyed Monster|Promotion Board|Marriage Proposal|Police Career|Derek Grim Rivalry|1996 Finale
 How does Dawkins react to Fowler's unromantic proposal in the final episode?|She leaves him|She immediately marries him|She announces she is moving abroad|She agrees only if Grim is best man|Medium|Patricia Dawkins|Raymond Fowler|Failed Proposal|Relationship Breakdown|The Green Eyed Monster|Final Episode|Unromantic Behaviour|1996 Christmas Special`,
   },
 ];

 const FIRST_ID = 11946;
 let index = 0;

 const questions = groups.flatMap(group =>
   group.facts.trim().split('\n').map(line => {
     const parts = line.trim().split('|').map(part => part.trim());
     const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
     if (parts.length !== 14) {
       throw new Error(`Expected eight individual tags at ${id}; got ${parts.length - 6}`);
     }
     const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
     const answers = [wrong1, wrong2, wrong3];
     if (!question || !correctAnswer || answers.some(answer => !answer)) {
       throw new Error(`Missing question or answer at ${id}`);
     }
     if (new Set([correctAnswer, ...answers].map(answer => answer.toLowerCase())).size !== 4) {
       throw new Error(`Repeated answer option at ${id}`);
     }
     if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.some(tag => !tag)) {
       throw new Error(`Invalid difficulty or specialist tag at ${id}`);
     }
     answers.splice(index % 4, 0, correctAnswer);
     const item = {
       id,
       category: 'Television',
       question,
       answers,
       correctAnswer,
       difficulty,
       tags: [...new Set([
         'British Television', 'British Sitcom', 'Police Comedy',
         'The Thin Blue Line', 'BBC One', '1990s', '1995-1996',
         'Programme: The Thin Blue Line (1995–1996)',
         correctAnswer, ...specificTags
       ])],
       dailyEligible: true
     };
     index += 1;
     return item;
   })
 );

 
// EDITORIAL AUDIT — 21 November 2026: The Thin Blue Line (1995–1996)
// Original IDs tv_11946–tv_11994 preserved. Added distinct verified scenes across all 14 episodes.
// Sources: https://www.comedy.co.uk/tv/the_thin_blue_line/episodes/1/
//          https://www.comedy.co.uk/tv/the_thin_blue_line/episodes/2/
const auditAdditions = [
  {
    "id": "tv_35476",
    "category": "Television",
    "question": "In The Thin Blue Line, What stolen item of Fowler's is later used by criminals in a drug deal?",
    "answers": [
      "His credit cards",
      "His car keys",
      "His police radio",
      "His identity badge"
    ],
    "correctAnswer": "His credit cards",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.01",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Raymond Fowler;Derek Grim",
      "Storyline: Fowler's stolen credit cards used in drug deal",
      "Question focus: What stolen item of Fowler's is later used by criminals in a drug deal?",
      "Answer focus: His credit cards",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35477",
    "category": "Television",
    "question": "In The Thin Blue Line, Which everyday street figure does PC Goody mistakenly arrest while trying to impress Habib?",
    "answers": [
      "A bus conductor",
      "A lollipop man",
      "A traffic warden",
      "A milkman"
    ],
    "correctAnswer": "A lollipop man",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.01",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Kevin Goody;Maggie Habib",
      "Storyline: Goody mistakenly arrests school crossing patrol",
      "Question focus: Which everyday street figure does PC Goody mistakenly arrest while trying to impress Habib?",
      "Answer focus: A lollipop man",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35478",
    "category": "Television",
    "question": "In The Thin Blue Line, Why does Fowler's attempted anniversary-present switch end with him in trouble?",
    "answers": [
      "He accidentally gives Patricia a police summons",
      "He forgets to remove the shop's price label",
      "He leaves Goody's embarrassing message to Maggie attached to the gift",
      "He delivers the present to Grim's wife"
    ],
    "correctAnswer": "He leaves Goody's embarrassing message to Maggie attached to the gift",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.01",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Raymond Fowler;Patricia Dawkins;Kevin Goody",
      "Storyline: Goody's intimate gift label left on Fowler's present",
      "Question focus: Why does Fowler's attempted anniversary-present switch end with him in trouble?",
      "Answer focus: He leaves Goody's embarrassing message to Maggie attached to the gift",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35479",
    "category": "Television",
    "question": "In The Thin Blue Line, What turns Grim's apparently successful terrorist investigation into an embarrassment for the station?",
    "answers": [
      "The suspected terrorist is the station's chief constable",
      "The police mistake a training exercise for an attack",
      "The suspect is a journalist filming an exposé",
      "The man arrested is the hoax caller who has been pestering Fowler"
    ],
    "correctAnswer": "The man arrested is the hoax caller who has been pestering Fowler",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.02",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Derek Grim;Raymond Fowler;Mr Dibley",
      "Storyline: Hoax caller linked to terrorist operation",
      "Question focus: What turns Grim's apparently successful terrorist investigation into an embarrassment for the station?",
      "Answer focus: The man arrested is the hoax caller who has been pestering Fowler",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35480",
    "category": "Television",
    "question": "In The Thin Blue Line, What does the hoax caller attempt as he leaves Gasforth police station?",
    "answers": [
      "To take Habib, Goody and the fireman hostage",
      "To steal Fowler's patrol car",
      "To set fire to Grim's office",
      "To expose a secret CID computer file"
    ],
    "correctAnswer": "To take Habib, Goody and the fireman hostage",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.02",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Mr Dibley;Maggie Habib;Kevin Goody;Gary",
      "Storyline: Hoax caller's attempted hostage taking",
      "Question focus: What does the hoax caller attempt as he leaves Gasforth police station?",
      "Answer focus: To take Habib, Goody and the fireman hostage",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35481",
    "category": "Television",
    "question": "In The Thin Blue Line, Which local criminal is targeted by Grim's honey-trap operation involving PC Habib?",
    "answers": [
      "Harry the Spike",
      "Terry the Tank",
      "Derek the Driver",
      "Ron the Burglar"
    ],
    "correctAnswer": "Terry the Tank",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.03",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Derek Grim;Maggie Habib;Terry the Tank",
      "Storyline: Target of honey-trap",
      "Question focus: Which local criminal is targeted by Grim's honey-trap operation involving PC Habib?",
      "Answer focus: Terry the Tank",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35482",
    "category": "Television",
    "question": "In The Thin Blue Line, Why does Patricia Dawkins suspect something improper between Fowler and PC Habib?",
    "answers": [
      "She discovers Habib living secretly in Fowler's flat",
      "Fowler gives Habib his wedding ring",
      "Habib arrives in revealing clothes and says Fowler ordered her to dress that way",
      "Grim sends Patricia a forged love letter"
    ],
    "correctAnswer": "Habib arrives in revealing clothes and says Fowler ordered her to dress that way",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.03",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Patricia Dawkins;Raymond Fowler;Maggie Habib",
      "Storyline: Honey-trap disguise fuels mistaken jealousy",
      "Question focus: Why does Patricia Dawkins suspect something improper between Fowler and PC Habib?",
      "Answer focus: Habib arrives in revealing clothes and says Fowler ordered her to dress that way",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35483",
    "category": "Television",
    "question": "In The Thin Blue Line, Who does Fowler consider recruiting for his pub quiz after Habib becomes unavailable and the other officers disappoint him?",
    "answers": [
      "The town's magistrates",
      "Grim's CID informants",
      "The station's cleaners",
      "The suspects held in the cells"
    ],
    "correctAnswer": "The suspects held in the cells",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.03",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Raymond Fowler;Maggie Habib;Kevin Goody",
      "Storyline: Fowler desperate for pub-quiz replacements",
      "Question focus: Who does Fowler consider recruiting for his pub quiz after Habib becomes unavailable and the other officers disappoint him?",
      "Answer focus: The suspects held in the cells",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35484",
    "category": "Television",
    "question": "In The Thin Blue Line, What food is the students' coded Rag Week message threatening to use as a weapon?",
    "answers": [
      "Custard",
      "Baked beans",
      "Rice pudding",
      "Tomato soup"
    ],
    "correctAnswer": "Custard",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.04",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Derek Grim;Gasforth College Students",
      "Storyline: Student prank code mentions custard",
      "Question focus: What food is the students' coded Rag Week message threatening to use as a weapon?",
      "Answer focus: Custard",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35485",
    "category": "Television",
    "question": "In The Thin Blue Line, What disguise does Fowler adopt to get inside a bank during an armed robbery?",
    "answers": [
      "A bank manager",
      "A pizza delivery man",
      "An elderly customer",
      "A security van driver"
    ],
    "correctAnswer": "A pizza delivery man",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.04",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Raymond Fowler;Patricia Dawkins",
      "Storyline: Fowler enters occupied bank with pizza",
      "Question focus: What disguise does Fowler adopt to get inside a bank during an armed robbery?",
      "Answer focus: A pizza delivery man",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35486",
    "category": "Television",
    "question": "In The Thin Blue Line, What masks lead Fowler to connect the bank robbers with the students questioned earlier in Rag Week?",
    "answers": [
      "Clown masks",
      "Witch masks",
      "Gorilla masks",
      "Horse masks"
    ],
    "correctAnswer": "Gorilla masks",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.04",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Raymond Fowler;Derek Grim;College Students",
      "Storyline: Bank robbers wear student-style gorilla masks",
      "Question focus: What masks lead Fowler to connect the bank robbers with the students questioned earlier in Rag Week?",
      "Answer focus: Gorilla masks",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35487",
    "category": "Television",
    "question": "In The Thin Blue Line, Whose teenage son does Grim discover among the suspects in his stolen-car inquiry?",
    "answers": [
      "Fowler's son Bill",
      "Goody's younger brother",
      "The chief constable's nephew",
      "His own son Darren"
    ],
    "correctAnswer": "His own son Darren",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.05",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Derek Grim;Darren Grim;Raymond Fowler",
      "Storyline: Grim's son caught up in vehicle thefts",
      "Question focus: Whose teenage son does Grim discover among the suspects in his stolen-car inquiry?",
      "Answer focus: His own son Darren",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35488",
    "category": "Television",
    "question": "In The Thin Blue Line, What overseas crime is the nationwide operation involving Scotland Yard investigating?",
    "answers": [
      "Stolen cars shipped to continental Europe for resale",
      "Illegal imports of rare birds",
      "Counterfeit wine shipped from France",
      "Fraudulent property purchases in Spain"
    ],
    "correctAnswer": "Stolen cars shipped to continental Europe for resale",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.05",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Derek Grim;Scotland Yard",
      "Storyline: Stolen-vehicle export operation",
      "Question focus: What overseas crime is the nationwide operation involving Scotland Yard investigating?",
      "Answer focus: Stolen cars shipped to continental Europe for resale",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35489",
    "category": "Television",
    "question": "In The Thin Blue Line, What kind of professional does Dawkins persuade a reluctant Fowler to visit about their intimacy problems?",
    "answers": [
      "A marriage registrar",
      "A sex therapist",
      "A family solicitor",
      "A financial counsellor"
    ],
    "correctAnswer": "A sex therapist",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.05",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Patricia Dawkins;Raymond Fowler;Maeve",
      "Storyline: Couple attend therapy",
      "Question focus: What kind of professional does Dawkins persuade a reluctant Fowler to visit about their intimacy problems?",
      "Answer focus: A sex therapist",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35490",
    "category": "Television",
    "question": "In The Thin Blue Line, What unexpected arrival at the station makes Patricia Dawkins think about starting a family?",
    "answers": [
      "A pregnant police recruit",
      "A letter from Fowler's son",
      "An abandoned baby",
      "A visit from the local nursery"
    ],
    "correctAnswer": "An abandoned baby",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.06",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Patricia Dawkins;Raymond Fowler;Maggie Habib",
      "Storyline: Abandoned infant prompts thoughts of motherhood",
      "Question focus: What unexpected arrival at the station makes Patricia Dawkins think about starting a family?",
      "Answer focus: An abandoned baby",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35491",
    "category": "Television",
    "question": "In The Thin Blue Line, Why does Grim's planned raid on a squat fail to find the young suspects he expects?",
    "answers": [
      "They have been arrested at a football match",
      "They have fled abroad on a school exchange",
      "They are giving evidence at the magistrates' court",
      "They are away on Fowler's camping trip"
    ],
    "correctAnswer": "They are away on Fowler's camping trip",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.06",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Derek Grim;Raymond Fowler;Young Offenders",
      "Storyline: Grim's raid misses camping teenagers",
      "Question focus: Why does Grim's planned raid on a squat fail to find the young suspects he expects?",
      "Answer focus: They are away on Fowler's camping trip",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35492",
    "category": "Television",
    "question": "In The Thin Blue Line, What does PC Habib receive by mistake when Goody's Christmas presents get swapped?",
    "answers": [
      "A bicycle puncture-repair kit",
      "A scarf intended for Grim",
      "A novelty police whistle",
      "A pair of gardening gloves"
    ],
    "correctAnswer": "A bicycle puncture-repair kit",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.07",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Maggie Habib;Kevin Goody;Raymond Fowler",
      "Storyline: Christmas gift mix-up",
      "Question focus: What does PC Habib receive by mistake when Goody's Christmas presents get swapped?",
      "Answer focus: A bicycle puncture-repair kit",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35493",
    "category": "Television",
    "question": "In The Thin Blue Line, What emergency occurs after homeless travellers are detained at Gasforth station on Christmas Eve?",
    "answers": [
      "A fire breaks out in the police cells",
      "A pregnant traveller goes into labour",
      "A baby is discovered in a stolen van",
      "A prisoner suffers a heart attack"
    ],
    "correctAnswer": "A pregnant traveller goes into labour",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.07",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Raymond Fowler;Patricia Dawkins;Travellers",
      "Storyline: Christmas Eve birth at station",
      "Question focus: What emergency occurs after homeless travellers are detained at Gasforth station on Christmas Eve?",
      "Answer focus: A pregnant traveller goes into labour",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35494",
    "category": "Television",
    "question": "In The Thin Blue Line, How are the carol singers pursued by Grim using the festive season to commit crimes?",
    "answers": [
      "They rob shops while dressed as Father Christmas",
      "They steal church collection money",
      "Some sing at the front door while accomplices burgle houses from behind",
      "They use carol sheets to forge cheques"
    ],
    "correctAnswer": "Some sing at the front door while accomplices burgle houses from behind",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 1.07",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Derek Grim;Criminal Carol Singers",
      "Storyline: Distraction burglaries by carolers",
      "Question focus: How are the carol singers pursued by Grim using the festive season to commit crimes?",
      "Answer focus: Some sing at the front door while accomplices burgle houses from behind",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35495",
    "category": "Television",
    "question": "In The Thin Blue Line, Where does Goody discover drugs during the police raid on Harry the Spike's home?",
    "answers": [
      "Inside the fridge",
      "Under a garden shed",
      "Behind the television",
      "Behind a cooker"
    ],
    "correctAnswer": "Behind a cooker",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.01",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Kevin Goody;Derek Grim;Harry the Spike",
      "Storyline: Suspected planted drugs found behind cooker",
      "Question focus: Where does Goody discover drugs during the police raid on Harry the Spike's home?",
      "Answer focus: Behind a cooker",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35496",
    "category": "Television",
    "question": "In The Thin Blue Line, Who unexpectedly replaces Harry the Spike's feared barrister Algernon Sourgravy?",
    "answers": [
      "Mayoress Christabel Wickham",
      "Sergeant Patricia Dawkins",
      "Inspector Raymond Fowler",
      "The chief constable"
    ],
    "correctAnswer": "Mayoress Christabel Wickham",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.01",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Christabel Wickham;Algernon Sourgravy;Harry the Spike",
      "Storyline: Mayoress becomes defence counsel",
      "Question focus: Who unexpectedly replaces Harry the Spike's feared barrister Algernon Sourgravy?",
      "Answer focus: Mayoress Christabel Wickham",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35497",
    "category": "Television",
    "question": "In The Thin Blue Line, What detail undermines Goody's arrest in the drug case?",
    "answers": [
      "He had not yet completed basic training",
      "He was wearing an unofficial new police uniform",
      "He forgot to sign his arrest warrant",
      "He used someone else's warrant card"
    ],
    "correctAnswer": "He was wearing an unofficial new police uniform",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.01",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Kevin Goody;Raymond Fowler;Harry the Spike",
      "Storyline: Unofficial uniform makes arrest unlawful",
      "Question focus: What detail undermines Goody's arrest in the drug case?",
      "Answer focus: He was wearing an unofficial new police uniform",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35498",
    "category": "Television",
    "question": "In The Thin Blue Line, Which official does the Gasforth team mistakenly arrest during its asylum-seeker operation?",
    "answers": [
      "The British Home Secretary",
      "A European customs officer",
      "The European Commissioner for Human Rights",
      "The local mayor's assistant"
    ],
    "correctAnswer": "The European Commissioner for Human Rights",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.02",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Raymond Fowler;Human Rights Commissioner",
      "Storyline: Mistaken arrest of observer",
      "Question focus: Which official does the Gasforth team mistakenly arrest during its asylum-seeker operation?",
      "Answer focus: The European Commissioner for Human Rights",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35499",
    "category": "Television",
    "question": "In The Thin Blue Line, What name does Fowler give his imaginary Martian character during the station's equality training?",
    "answers": [
      "Sergeant Blip",
      "Inspector Zorg",
      "Officer Pluto",
      "Constable Zog"
    ],
    "correctAnswer": "Constable Zog",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.02",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Raymond Fowler;Kevin Goody",
      "Storyline: Martian role-play equality lesson",
      "Question focus: What name does Fowler give his imaginary Martian character during the station's equality training?",
      "Answer focus: Constable Zog",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35500",
    "category": "Television",
    "question": "In The Thin Blue Line, What unlikely act does Goody perform for the BBC documentary crew after dyeing his hair?",
    "answers": [
      "A ventriloquist act using a sock",
      "A magic trick with a police helmet",
      "A tap dance using handcuffs",
      "A comedy song about traffic tickets"
    ],
    "correctAnswer": "A ventriloquist act using a sock",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.03",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Kevin Goody;BBC Documentary Crew",
      "Storyline: Goody's sock-puppet routine",
      "Question focus: What unlikely act does Goody perform for the BBC documentary crew after dyeing his hair?",
      "Answer focus: A ventriloquist act using a sock",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35501",
    "category": "Television",
    "question": "In The Thin Blue Line, How does Sergeant Dawkins try to make herself interesting when the BBC cameras visit?",
    "answers": [
      "She performs an operatic solo",
      "She tap-dances behind the front desk",
      "She demonstrates karate on a training dummy",
      "She poses as a chief inspector"
    ],
    "correctAnswer": "She tap-dances behind the front desk",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.03",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Patricia Dawkins;BBC Documentary Crew",
      "Storyline: Dawkins performs tap dance",
      "Question focus: How does Sergeant Dawkins try to make herself interesting when the BBC cameras visit?",
      "Answer focus: She tap-dances behind the front desk",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35502",
    "category": "Television",
    "question": "In The Thin Blue Line, What mistaken identity causes embarrassment for Habib during the fly-on-the-wall filming?",
    "answers": [
      "She is mistaken for the chief constable",
      "She is identified as a criminal informant",
      "She is mistaken for a prostitute",
      "She is mistaken for the programme's presenter"
    ],
    "correctAnswer": "She is mistaken for a prostitute",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.03",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Maggie Habib;BBC Film Crew",
      "Storyline: Habib's unfortunate documentary appearance",
      "Question focus: What mistaken identity causes embarrassment for Habib during the fly-on-the-wall filming?",
      "Answer focus: She is mistaken for a prostitute",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35503",
    "category": "Television",
    "question": "In The Thin Blue Line, What alarming incident interrupts the officers' attempts to look impressive on television?",
    "answers": [
      "A large fire breaks out in the cells",
      "A police van is stolen during filming",
      "A television light falls onto Grim",
      "An elderly visitor draws a gun on Fowler"
    ],
    "correctAnswer": "An elderly visitor draws a gun on Fowler",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.03",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Raymond Fowler;Elderly Visitor;BBC Film Crew",
      "Storyline: Armed visitor interrupts documentary",
      "Question focus: What alarming incident interrupts the officers' attempts to look impressive on television?",
      "Answer focus: An elderly visitor draws a gun on Fowler",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35504",
    "category": "Television",
    "question": "In The Thin Blue Line, Why are the women officers forced to share the men's changing facilities?",
    "answers": [
      "A plumbing problem leaves their own facilities unusable",
      "A television crew takes over their room",
      "A refurbishment turns their room into a cell",
      "The police recruit extra female officers without warning"
    ],
    "correctAnswer": "A plumbing problem leaves their own facilities unusable",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.04",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Maggie Habib;Patricia Dawkins",
      "Storyline: Broken women's facilities cause shared lockers",
      "Question focus: Why are the women officers forced to share the men's changing facilities?",
      "Answer focus: A plumbing problem leaves their own facilities unusable",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35505",
    "category": "Television",
    "question": "In The Thin Blue Line, What does Goody mean by saying he is worried about whether to come out during the CID social arrangements?",
    "answers": [
      "Whether to admit he has left the police",
      "Whether to attend a pub lock-in with CID",
      "Whether to confess his love to Grim",
      "Whether to reveal he is joining the Freemasons"
    ],
    "correctAnswer": "Whether to attend a pub lock-in with CID",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.04",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Kevin Goody;Maggie Habib;Gary Boyle",
      "Storyline: Come-out misunderstanding about pub evening",
      "Question focus: What does Goody mean by saying he is worried about whether to come out during the CID social arrangements?",
      "Answer focus: Whether to attend a pub lock-in with CID",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35506",
    "category": "Television",
    "question": "In The Thin Blue Line, Which relative does Habib discover at the nightclub where police are making drug arrests?",
    "answers": [
      "Her mother",
      "Her cousin from Trinidad",
      "Her younger sister Nazia",
      "Her brother"
    ],
    "correctAnswer": "Her younger sister Nazia",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.04",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Maggie Habib;Nazia;Derek Grim",
      "Storyline: Habib finds sister at nightclub raid",
      "Question focus: Which relative does Habib discover at the nightclub where police are making drug arrests?",
      "Answer focus: Her younger sister Nazia",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35507",
    "category": "Television",
    "question": "In The Thin Blue Line, How does Fowler train his uniformed officers to intimidate potential football hooligans?",
    "answers": [
      "By rehearsing a mounted-police charge",
      "By wearing masks shaped like footballs",
      "By reciting the club's anthem",
      "By rhythmically beating their riot shields"
    ],
    "correctAnswer": "By rhythmically beating their riot shields",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.05",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Raymond Fowler;Gasforth Police",
      "Storyline: Riot-shield rhythm training",
      "Question focus: How does Fowler train his uniformed officers to intimidate potential football hooligans?",
      "Answer focus: By rhythmically beating their riot shields",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35508",
    "category": "Television",
    "question": "In The Thin Blue Line, What publicity slogan does Mayoress Wickham promote around Gasforth's cup fixture?",
    "answers": [
      "Relocate in Gasforth",
      "Gasforth Means Business",
      "Come to Gasforth for the Cup",
      "Visit Gasforth First"
    ],
    "correctAnswer": "Relocate in Gasforth",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.05",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Christabel Wickham;Gasforth FC",
      "Storyline: Civic business campaign around football",
      "Question focus: What publicity slogan does Mayoress Wickham promote around Gasforth's cup fixture?",
      "Answer focus: Relocate in Gasforth",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35509",
    "category": "Television",
    "question": "In The Thin Blue Line, Whom does Dawkins arrest in the build-up to the Gasforth-Chelsea cup match?",
    "answers": [
      "A group of schoolchildren stealing tickets",
      "Builders who have repeatedly made lewd remarks to her",
      "A rival football manager",
      "The local newspaper's photographer"
    ],
    "correctAnswer": "Builders who have repeatedly made lewd remarks to her",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.05",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Patricia Dawkins;Football policing",
      "Storyline: Dawkins arrests harassing builders",
      "Question focus: Whom does Dawkins arrest in the build-up to the Gasforth-Chelsea cup match?",
      "Answer focus: Builders who have repeatedly made lewd remarks to her",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35510",
    "category": "Television",
    "question": "In The Thin Blue Line, What detail about Grim's own car distracts him while the bypass protest is underway?",
    "answers": [
      "A parking ticket on his patrol car",
      "A damaged tyre on his police motorcycle",
      "A dent in his Nissan Micra",
      "A missing steering wheel"
    ],
    "correctAnswer": "A dent in his Nissan Micra",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.06",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Derek Grim;Nissan Micra",
      "Storyline: Grim fusses over his car",
      "Question focus: What detail about Grim's own car distracts him while the bypass protest is underway?",
      "Answer focus: A dent in his Nissan Micra",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35511",
    "category": "Television",
    "question": "In The Thin Blue Line, Who is the protester known as the Green Avenger really working for?",
    "answers": [
      "The local council",
      "CID",
      "A construction company",
      "MI5"
    ],
    "correctAnswer": "MI5",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.06",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Stallion;Carlton;Patricia Dawkins",
      "Storyline: Green Avenger unmasked as intelligence agent",
      "Question focus: Who is the protester known as the Green Avenger really working for?",
      "Answer focus: MI5",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35512",
    "category": "Television",
    "question": "In The Thin Blue Line, Where does Dawkins take up her position among the environmental campaigners?",
    "answers": [
      "On a platform high in a tree",
      "In a boat moored on the river",
      "On the roof of police headquarters",
      "Inside a disused railway signal box"
    ],
    "correctAnswer": "On a platform high in a tree",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.06",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Patricia Dawkins;Raymond Fowler",
      "Storyline: Dawkins occupies treetop platform",
      "Question focus: Where does Dawkins take up her position among the environmental campaigners?",
      "Answer focus: On a platform high in a tree",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35513",
    "category": "Television",
    "question": "In The Thin Blue Line, What small luxury does Grim want installed on the CID side of the police station during the promotion dispute?",
    "answers": [
      "An espresso coffee machine",
      "A top-of-the-range water cooler",
      "A new colour photocopier",
      "A leather office sofa"
    ],
    "correctAnswer": "A top-of-the-range water cooler",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.07",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Derek Grim;CID",
      "Storyline: Grim's water cooler demand",
      "Question focus: What small luxury does Grim want installed on the CID side of the police station during the promotion dispute?",
      "Answer focus: A top-of-the-range water cooler",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35514",
    "category": "Television",
    "question": "In The Thin Blue Line, Where do Fowler and Patricia unexpectedly encounter one another while separately trying to recover from their split?",
    "answers": [
      "At a police awards ceremony",
      "At the station's Christmas concert",
      "At the same nightclub",
      "At a marriage guidance centre"
    ],
    "correctAnswer": "At the same nightclub",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.07",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Raymond Fowler;Patricia Dawkins;Kevin Goody;Maggie Habib",
      "Storyline: Ex-partners collide at nightclub",
      "Question focus: Where do Fowler and Patricia unexpectedly encounter one another while separately trying to recover from their split?",
      "Answer focus: At the same nightclub",
      "Viewer storyline"
    ]
  },
  {
    "id": "tv_35515",
    "category": "Television",
    "question": "In The Thin Blue Line, What choice may cost Fowler his promotion in the series finale?",
    "answers": [
      "He refuses to arrest a notorious criminal",
      "He resigns from the station to join CID",
      "He tears up his uniform in front of the mayor",
      "He leaves with Patricia just before the promotion board arrives"
    ],
    "correctAnswer": "He leaves with Patricia just before the promotion board arrives",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "British Television",
      "British Sitcom",
      "Police Comedy",
      "The Thin Blue Line",
      "BBC One",
      "1990s",
      "1995-1996",
      "Programme: The Thin Blue Line (1995–1996)",
      "Episode 2.07",
      "Gasforth Police Station",
      "Raymond Fowler Era",
      "Ben Elton",
      "Characters: Raymond Fowler;Patricia Dawkins;Derek Grim",
      "Storyline: Fowler chooses partner over career",
      "Question focus: What choice may cost Fowler his promotion in the series finale?",
      "Answer focus: He leaves with Patricia just before the promotion board arrives",
      "Viewer storyline"
    ]
  }
];
questions.push(...auditAdditions);
const EXPECTED_COUNT = 89;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_11946' || questions[48].id !== 'tv_11994' || questions[questions.length - 1].id !== 'tv_35515') {
   throw new Error('Unexpected question ID range');
 }
 if (new Set(questions.map(q => q.id)).size !== questions.length ||
     new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
   throw new Error('Duplicate question IDs or wording');
 }
 if (questions.some(q =>
   q.category !== 'Television' ||
   q.answers.length !== 4 ||
   !q.answers.includes(q.correctAnswer) ||
   q.tags.length < 15 ||
   q.tags.some(tag => !tag) ||
   q.dailyEligible !== true
 )) {
   throw new Error('Incomplete exported question metadata');
 }

 module.exports = questions;
