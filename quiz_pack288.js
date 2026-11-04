
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
         correctAnswer, ...specificTags
       ])],
       dailyEligible: true
     };
     index += 1;
     return item;
   })
 );

 const EXPECTED_COUNT = 49;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_11946' || questions[questions.length - 1].id !== 'tv_11994') {
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
