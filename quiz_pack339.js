
 // quiz_pack339.js — PuzzlePilot Bigggggg Quiz
 // Trumptonshire: Camberwick Green, Trumpton, Chigley
 // 73 questions, IDs tv_16093–tv_16165.
 // Seven question-specific tags for every question.

 const facts = `
 Camberwick Green|Who created Camberwick Green?|Gordon Murray|Oliver Postgate|Peter Firmin|Bob Godfrey|Easy|Gordon Murray|Series Creator|Stop Motion|1966 Production|Trumptonshire|Animation History|BBC Children
 Camberwick Green|Who narrated Camberwick Green?|Brian Cant|Derek Griffiths|Bernard Cribbins|Johnny Morris|Easy|Brian Cant|Narration|Voice Cast|Children Television|1966 Series|Storytelling|BBC
 Camberwick Green|Which year did Camberwick Green first air?|1966|1964|1967|1969|Easy|1966 Debut|Broadcast Date|Series Premiere|BBC One|Trumptonshire|Television History|Programme Year
 Camberwick Green|What type of animation was used for Camberwick Green?|Stop-motion puppets|Hand-drawn cel animation|Computer-generated images|Paper cut-outs|Easy|Stop Motion|Puppet Animation|Production Method|Model Characters|Gordon Murray|Children Animation|1960s Television
 Camberwick Green|How many episodes were made of Camberwick Green?|Thirteen|Twenty-six|Thirty-nine|Six|Easy|Thirteen Episodes|Series Count|1966 Run|Programme Length|One Series|BBC Television|Episode History
 Camberwick Green|What object opens each episode of Camberwick Green?|A musical box|A railway signal|A town clock|A lighthouse|Easy|Musical Box|Opening Sequence|Character Reveal|Puppet Animation|Series Format|1966 Episodes|Intro Device
 Camberwick Green|What is Windy Miller's occupation?|Miller|Postman|Baker|Farmer|Easy|Windy Miller|Mill Worker|Colleys Mill|Character Occupation|Village Trades|Puppet Character|Local Business
 Camberwick Green|What is the name of Windy Miller's mill?|Colley's Mill|Pippin Mill|Crockett's Mill|Belborough Mill|Medium|Colleys Mill|Windy Miller|Village Landmark|Flour Milling|Series Location|Windmill|Character Home
 Camberwick Green|Who commands the soldiers at Pippin Fort?|Captain Snort|Captain Flack|PC McGarry|Lord Belborough|Easy|Captain Snort|Pippin Fort|Army Commander|Soldier Characters|Village Helpers|Military Setting|Character Role
 Camberwick Green|Who serves as the village doctor?|Doctor Mopp|Doctor Bell|Doctor Crockett|Doctor Farthing|Easy|Doctor Mopp|Village Doctor|Medical Visits|Character Occupation|Health Care|Local Service|Series Cast
 Camberwick Green|Which character works as the village postman?|Peter|Roger|Mickey|Paddy|Easy|Peter Postman|Mail Delivery|Post Office|Episode One|Character Job|Village Services|Opening Episode
 Camberwick Green|Who runs the village garage?|Mr Crockett|Mr Dagenham|Mr Carraway|Mr Munnings|Medium|Mr Crockett|Garage Man|Vehicle Repairs|Local Business|Mechanical Work|Episode Three|Character Occupation
 Camberwick Green|Which farmer supplies corn to Windy Miller?|Jonathan Bell|Willie Munn|Mr Farthing|Nick Fisher|Medium|Jonathan Bell|Farmer|Corn Delivery|Windy Miller|Village Agriculture|Flour Production|Episode Plot
 Camberwick Green|Who is the village policeman?|PC McGarry|Captain Flack|Sergeant Grout|Mr Troop|Easy|PC McGarry|Police Constable|Law Enforcement|Village Safety|Character Occupation|Series Cast|Community Service
 Camberwick Green|Which character is a chimney sweep?|Roger Varley|Paddy Murphy|Mickey Murphy|Mr Carraway|Medium|Roger Varley|Chimney Sweep|Village Trades|Bakery Chimney|Local Services|Episode Eight|Character Role
 Camberwick Green|Who is the baker in Camberwick Green?|Mickey Murphy|Paddy Murphy|Jonathan Bell|Mr Dagenham|Easy|Mickey Murphy|Village Baker|Bakery|Cakes And Bread|Character Occupation|Flour Orders|Series Character
 Camberwick Green|Which character delivers milk and works at the dairy?|Paddy Murphy|Mickey Murphy|Peter the Postman|Mr Crockett|Medium|Paddy Murphy|Milk Delivery|Dairy Work|Village Trades|Episode Seven|Character Occupation|Morning Deliveries
 Camberwick Green|Who is the travelling salesman featured in an episode?|Mr Dagenham|Mr Carraway|Mr Crockett|Mr Farthing|Medium|Mr Dagenham|Salesman|Helicopter Pitch|Pippin Fort|Episode Ten|Character Occupation|Visiting Trader
 Camberwick Green|Which character is the fishmonger?|Mr Carraway|Mr Dagenham|Mr Platt|Mr Crockett|Medium|Mr Carraway|Fishmonger|Fish Delivery|Village Trader|Sea Stories|Episode Eleven|Character Occupation
 Camberwick Green|Who is known for village gossip and appears with her baby?|Mrs Honeyman|Mrs Cobbit|Miss Lovelace|Mrs Dingle|Easy|Mrs Honeyman|Village Gossip|Baby|Community Rumours|Episode Thirteen|Character Identity|Misunderstanding
 Camberwick Green|What happens to the sails in the Windy Miller episode?|They stop turning|They catch fire|They blow off the roof|They are painted blue|Medium|Windy Miller Episode|Windmill Sails|Stopped Mill|Flour Shortage|Episode Two|Village Problem|Milling Machinery
 Camberwick Green|What are the villagers worried workmen will dig up in the final episode?|The village green|The school playground|Pippin Fort|The windmill|Medium|Mrs Honeyman Episode|Village Green|Workmen|Protest|Episode Thirteen|Rumour|Community Concern
 Camberwick Green|What invades the bakery in the PC McGarry episode?|A swarm of bees|A flock of pigeons|A herd of sheep|A family of mice|Medium|PC McGarry Episode|Bee Swarm|Bakery|Village Emergency|Episode Nine|Police Assistance|Pest Incident
 Camberwick Green|Who helps at Mickey Murphy's bakery after the baker burns his hands?|Private Lumley|Captain Flack|Mr Munnings|Lord Belborough|Hard|Private Lumley|Mickey Murphy Episode|Baking Help|Pippin Fort|Burnt Hands|Episode Twelve|Soldier Assistance
 Trumpton|Who created Trumpton?|Gordon Murray|Oliver Postgate|Ivor Wood|Peter Firmin|Easy|Gordon Murray|Series Creator|Trumptonshire|Stop Motion|1967 Series|Animation Production|BBC Children
 Trumpton|In which year did Trumpton first air?|1967|1964|1966|1969|Easy|1967 Debut|Broadcast Year|BBC One|Second Trumptonshire Series|Programme History|Series Premiere|1960s Animation
 Trumpton|Who narrated the stories in Trumpton?|Brian Cant|Michael Hordern|Johnny Morris|David Jason|Easy|Brian Cant|Narrator|Voice Performance|1967 Television|Children Programming|Storytelling|Production Credits
 Trumpton|How many episodes of Trumpton were made?|Thirteen|Twelve|Twenty-six|Thirty-nine|Easy|Thirteen Episodes|Episode Count|One Series|1967 Run|BBC One|Production Length|Series History
 Trumpton|What piece of machinery features prominently in the opening of Trumpton?|A town clock|A railway engine|A musical box|A windmill|Easy|Town Clock|Opening Titles|Trumpton Town|Timekeeping|Series Intro|Mechanical Landmark|Episode Introduction
 Trumpton|Who leads the Trumpton fire brigade?|Captain Flack|Captain Snort|Sergeant Grout|PC McGarry|Easy|Captain Flack|Fire Brigade|Fire Station|Team Leader|Emergency Services|Town Characters|Local Authority
 Trumpton|Which of these names belongs to the Trumpton firefighters?|Barney McGrew|Windy Miller|Doctor Mopp|Lord Belborough|Easy|Barney McGrew|Firefighter|Trumpton Crew|Captain Flack|Fire Brigade Roster|Character Identity|Emergency Team
 Trumpton|How many firefighters are named in the famous roll call after Captain Flack?|Six|Four|Five|Eight|Medium|Six Firefighters|Fire Brigade Roll Call|Crew Names|Pugh Pugh|Barney McGrew|Cuthbert Dibble Grubb|Series Opening
 Trumpton|Which firefighter's name is called twice in the famous roll call?|Pugh|Grubb|Dibble|Cuthbert|Easy|Pugh Pugh|Roll Call|Fire Brigade|Name Repetition|Fire Station|Catchphrase|Character Listing
 Trumpton|What musical activity closes each Trumpton episode?|A fire brigade band concert|A church choir rehearsal|A piano recital|A village ceilidh|Medium|Band Concert|Closing Scene|Fire Brigade Musicians|Town Square|Episode Format|Instrumental Music|Community Entertainment
 Trumpton|Who wrote the scripts for Trumpton?|Alison Prince|Enid Blyton|Anna Home|Julia Donaldson|Medium|Alison Prince|Scriptwriter|Production Team|1967 Scripts|Gordon Murray|BBC Animation|Writing Credits
 Trumpton|Who composed the songs heard in Trumpton?|Freddie Phillips|Ronnie Hazlehurst|Mike Hugg|Tony Hatch|Medium|Freddie Phillips|Music Composer|Songwriting|Brian Cant Singing|Programme Music|1967 Animation|Production Credits
 Trumpton|Who helps the firefighters put up their concert posters in the opening episode?|Nick Fisher|Chippy Minton|Mr Platt|Mr Troop|Medium|Nick Fisher|Bill Poster|Opening Episode|Concert Posters|Fire Brigade|Town Advertising|Episode Plot
 Trumpton|What does the wind blow into a tree in Miss Lovelace and the Mayor's Hat?|The Mayor's hat|A painting|A fireman's helmet|A shop sign|Easy|Mayors Hat|Miss Lovelace|Park|Tree Rescue|Episode Two|Fire Brigade Callout|Windy Day
 Trumpton|Who is the town's flower seller?|Mrs Cobbit|Mrs Honeyman|Miss Lovelace|Mrs Dingle|Medium|Mrs Cobbit|Flower Seller|Market Stall|Town Square|Character Occupation|Local Trade|Episode Three
 Trumpton|What kind of trader takes Mrs Cobbit's usual place in the square?|An ice-cream seller|A fishmonger|A book seller|A baker|Medium|Ice Cream Seller|Mrs Cobbit|Market Pitch|Town Square|Episode Three|Trading Dispute|Local Business
 Trumpton|Who is the carpenter associated with the Minton family?|Chippy Minton|Mr Munnings|Mr Platt|Mr Cresswell|Easy|Chippy Minton|Carpenter|Workshop|Woodworking|Family Savings|Town Trades|Character Occupation
 Trumpton|What object is mistakenly given away in The Rag and Bone Man?|A rocking horse|A piano stool|A wooden clock|A toy train|Medium|Rag And Bone Man|Rocking Horse|Chippy Minton|Workshop Clearout|Episode Eight|Family Savings|Lost Property
 Trumpton|What had Chippy Minton hidden inside the rocking horse?|The family's savings|A wedding ring|Old photographs|A golden key|Medium|Chippy Minton|Hidden Savings|Rocking Horse|Rag And Bone Man|Episode Eight|Money Secret|Workshop Possession
 Trumpton|Which firefighter has an episode named after his morning off?|Cuthbert|Dibble|Grubb|Pugh|Medium|Cuthberts Morning Off|Cuthbert|Episode Ten|Firefighter|Day Off|Episode Title|Fire Brigade Crew
 Trumpton|What animal causes trouble with the telephone wiring in The Telephone?|A dog|A cat|A horse|A pigeon|Medium|The Telephone|Miss Lovelace Dog|Manhole|Crossed Lines|Episode Seven|Telephone Engineer|Accidental Damage
 Trumpton|What happens to the window cleaner's ladder in The Window Cleaner?|Someone takes it away|It catches fire|It snaps in half|It is blown into a pond|Medium|Window Cleaner|Mr Robinson|Missing Ladder|Miss Lovelace House|Episode Nine|Roof Rescue|Mr Troop
 Trumpton|What kind of event is disrupted in The Greenhouse?|A vegetable show|A flower parade|A swimming gala|A horse show|Medium|The Greenhouse|Vegetable Show|Park|Unsafe Chimney|Episode Thirteen|Mayor|Community Event
 Trumpton|Who animated the Trumpton puppets alongside John Hardwick?|Bob Bura|Peter Firmin|Ivor Wood|Eric Thompson|Hard|Bob Bura|John Hardwick|Puppet Animators|Stop Motion|Animation Team|Production Credits|1967 Television
 Chigley|Who created Chigley, the third Trumptonshire programme?|Gordon Murray|Oliver Postgate|Gerry Anderson|Ivor Wood|Easy|Gordon Murray|Series Creator|Trumptonshire|Third Programme|Stop Motion|1969 Television|Animation History
 Chigley|In which year was Chigley first broadcast?|1969|1966|1967|1972|Easy|1969 Premiere|Broadcast Year|BBC One|Third Trumptonshire Series|1960s Animation|Television History|Programme Debut
 Chigley|Who narrated Chigley?|Brian Cant|Richard Briers|Bernard Cribbins|Michael Hordern|Easy|Brian Cant|Narration|Voice Cast|1969 Production|Children Television|Storytelling|BBC One
 Chigley|How many episodes of Chigley were made?|Thirteen|Six|Twenty|Twenty-six|Easy|Thirteen Episodes|Series Count|One Series|1969 Run|Episode History|BBC Children|Production Length
 Chigley|What is the name of the aristocrat who owns a steam engine?|Lord Belborough|Captain Flack|Mr Cresswell|Jonathan Bell|Easy|Lord Belborough|Steam Engine Owner|Winkstead Hall|Local Aristocrat|Bessie|Character Identity|Chigley Resident
 Chigley|What is the name of Lord Belborough's steam locomotive?|Bessie|Binnie|Emily|Annie|Easy|Bessie|Steam Locomotive|Lord Belborough|Rail Transport|Treddles Wharf|Named Engine|Village Railway
 Chigley|What is the name of the pumping engine at Winkstead Hall?|Binnie|Bessie|Annie|Clara|Medium|Binnie|Pumping Engine|Winkstead Hall|Water Supply|Stationary Engine|Machine Name|Lord Belborough
 Chigley|What is the name of Lord Belborough's home?|Winkstead Hall|Pippin Fort|Colley's Mill|The Fat Ox|Medium|Winkstead Hall|Lord Belborough|Country House|Chigley Setting|Evening Dance|Estate Grounds|Local Landmark
 Chigley|At what time do the workers traditionally gather for a dance at Winkstead Hall?|Six o'clock|Five o'clock|Seven o'clock|Eight o'clock|Easy|Six Oclock|Tea Dance|Factory Whistle|End Of Workday|Winkstead Hall|Evening Tradition|Closing Sequence
 Chigley|What kind of organ does Lord Belborough play at the evening dance?|Dutch organ|Pipe organ|Hammond organ|Barrel piano|Medium|Dutch Organ|Lord Belborough|Tea Dance Music|Winkstead Hall|Evening Gathering|Instrument|Closing Ritual
 Chigley|What food product is made at Chigley's factory?|Biscuits|Chocolate|Cheese|Jam|Easy|Biscuit Factory|Chigley Industry|Factory Workers|Goods Production|Local Employment|Bessie Transport|Manufacturing
 Chigley|Where does Lord Belborough collect and deliver goods using his engine?|Treddles Wharf|Pippin Fort|Trumpton Market|Colley's Mill|Medium|Treddles Wharf|Bessie|Cargo Deliveries|Railway Destination|Waterfront|Chigley Transport|Local Geography
 Chigley|Who is the butler at Winkstead Hall?|Brackett|Cuthbert|Grubb|Crockett|Medium|Brackett|Butler|Winkstead Hall|Lord Belborough|Household Staff|Character Occupation|Estate Life
 Chigley|What is the title of Chigley's first episode?|Lord Belborough's Secret|The Broken Bridge|Bessie to the Rescue|The Balloon|Medium|Lord Belboroughs Secret|Episode One|1969 Premiere|Mystery Crate|Bessie|Programme Opening|Episode Title
 Chigley|In which episode does Bessie help deliver a forgotten box of biscuits?|Bessie to the Rescue|Apples Galore|The Fountain|Willie Munn|Medium|Bessie To The Rescue|Biscuits Delivery|Farmer Bell|Treddles Wharf|Episode Two|Steam Engine|Rescue Errand
 Chigley|Which episode centres on a balloon and a charity fundraising plan?|The Balloon|The Fountain|The Garden Wall|Apples Galore|Medium|The Balloon|Charity Fundraising|Old Peoples Holiday Fund|Mayor Of Trumpton|Episode Three|Balloon Ride|Event Plan
 Chigley|What object does PC McGarry suggest for the biscuit factory grounds in The Fountain?|A stone fountain|A sundial|A clock tower|A wooden gazebo|Medium|The Fountain|PC McGarry|Mr Cresswell|Stone Sculpture|Biscuit Factory|Episode Four|Improvement Idea
 Chigley|What does Lord Belborough accidentally crash through his garden wall?|A lawnmower|A steamroller|A bicycle|A tractor|Medium|The Garden Wall|Lawnmower|Lord Belborough|Wall Damage|Mr Clutterbuck|Episode Five|Estate Repairs
 Chigley|Which character is the builder called in to repair Lord Belborough's wall?|Mr Clutterbuck|Mr Farthing|Mr Cresswell|Mr Carraway|Hard|Mr Clutterbuck|Builder|Garden Wall Repair|Lord Belborough|Brick Delivery|Episode Five|Village Trades
 Chigley|Who comes to clean the engines Bessie and Binnie?|Roger Varley|Mr Dagenham|Mickey Murphy|Nick Fisher|Medium|Roger Varley|Binnie And Bessie|Engine Cleaning|Winkstead Hall|Chimney Sweep|Episode Six|Returning Character
 Chigley|What is the title of the episode about a damaged crossing over water?|The Broken Bridge|Trouble with the Crane|The Garden Wall|The Fountain|Medium|Broken Bridge|Episode Eight|Transport Problem|Local Crossing|Chigley Roads|Episode Title|Infrastructure
 Chigley|Which character is associated with the pottery in the episode Clay for Mr Farthing?|Mr Farthing|Mr Platt|Mr Munnings|Mr Antonio|Medium|Mr Farthing|Pottery|Clay Delivery|Episode Nine|Craft Industry|Chigley Trades|Episode Title
 Chigley|Which episode focuses on problems with lifting equipment?|Trouble with the Crane|Apples Galore|Willie Munn|Bessie to the Rescue|Medium|Trouble With The Crane|Episode Ten|Lifting Machinery|Industrial Equipment|Episode Title|Chigley Industry|Mechanical Difficulty
 Chigley|What fruit is named in the title Apples Galore?|Apples|Pears|Plums|Cherries|Easy|Apples Galore|Episode Eleven|Fruit|Harvest|Episode Title|Chigley Produce|Food Supply
 Chigley|What is the title of Chigley's final episode?|A Present for Lord Belborough|Willie Munn|The Garden Wall|Lord Belborough's Lucky Day|Medium|Present For Lord Belborough|Final Episode|1969 Finale|Gift|Lord Belborough|Episode Thirteen|Series Ending
 `;

 const FIRST_ID = 16093;

 const programmeYears = {
   'Camberwick Green': '1966',
   'Trumpton': '1967',
   'Chigley': '1969'
 };

 const normalise = value =>
   String(value).normalize('NFKC')
     .trim().toLocaleLowerCase('en-GB');

 const questions = facts.trim().split('\n')
   .map(line => line.trim())
   .filter(Boolean)
   .map((line, index) => {
     const id = 'tv_' + (FIRST_ID + index);
     const fields = line.split('|').map(value => value.trim());

     if (fields.length !== 14) {
       throw new Error(`Pack 339: incorrect field count at ${id}`);
     }

     const [
       programme,
       question,
       correctAnswer,
       wrong1,
       wrong2,
       wrong3,
       difficulty,
       ...specificTags
     ] = fields;

     if (!Object.prototype.hasOwnProperty.call(
       programmeYears, programme
     )) {
       throw new Error(`Pack 339: unknown programme at ${id}`);
     }

     if (
       fields.some(value => !value) ||
       !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
       specificTags.length !== 7
     ) {
       throw new Error(`Pack 339: missing or invalid fields at ${id}`);
     }

     const answers = [wrong1, wrong2, wrong3];

     if (
       new Set([correctAnswer, ...answers].map(normalise)).size !== 4
     ) {
       throw new Error(`Pack 339: duplicate answer at ${id}`);
     }

     answers.splice(index % 4, 0, correctAnswer);

     const tags = [...new Map([
       'Television',
       'British Television',
       'Children’s Television',
       'Animation',
       'Stop Motion',
       'Classic Children’s Programmes',
       'Trumptonshire',
       'BBC',
       programmeYears[programme],
       programme,
       `Programme: ${programme}`,
       ...specificTags,
       correctAnswer
     ].map(tag => [normalise(tag), tag])).values()];

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

 // Validate the actual exported question objects.

 const expectedProgrammes = {
   'Camberwick Green': 24,
   'Trumpton': 24,
   'Chigley': 25
 };

 if (
   questions.length !== 73 ||
   questions[0].id !== 'tv_16093' ||
   questions[72].id !== 'tv_16165'
 ) {
   throw new Error('Pack 339: incorrect total or ID range');
 }

 const seen = new Set();

 for (let i = 0; i < questions.length; i++) {
   const q = questions[i];
   const key = normalise(q.programme + '|' + q.question);

   if (
     q.id !== `tv_${FIRST_ID + i}` ||
     seen.has(key) ||
     q.answers.length !== 4 ||
     new Set(q.answers.map(normalise)).size !== 4 ||
     !q.answers.includes(q.correctAnswer) ||
     q.tags.length < 14 ||
     q.dailyEligible !== true
   ) {
     throw new Error(
       `Pack 339: exported-object validation failed at ${q.id}`
     );
   }

   seen.add(key);
 }

 for (const [programme, count] of Object.entries(expectedProgrammes)) {
   if (
     questions.filter(q => q.programme === programme).length !== count
   ) {
     throw new Error(`Pack 339: incorrect ${programme} count`);
   }
 }
// 21 November 2026: episode-story audit of Trumptonshire Pack 339.
// Preserve 73 original questions and IDs tv_16093–tv_16165 unchanged.
// Episode plots verified against complete Camberwick Green, Trumpton
// and Chigley synopsis guides; every new question names its programme.
const auditAdditions = [
  {
    "id": "tv_37673",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, who helps Peter sort the village's mail before his deliveries?",
    "answers": [
      "Mrs Dingle",
      "Mrs Honeyman",
      "Mrs Cobbit",
      "Miss Lovelace"
    ],
    "correctAnswer": "Mrs Dingle",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: Peter the Postman",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Mrs Dingle",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "Post Office",
      "Mrs Dingle",
      "Sorting Post"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37674",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, where does Peter take the mail after collecting and sorting it?",
    "answers": [
      "Winkstead Hall",
      "Pippin Fort",
      "Trumpton Town Hall",
      "Chigley Pottery"
    ],
    "correctAnswer": "Pippin Fort",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: Peter the Postman",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Pippin Fort",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "Mail Delivery",
      "Pippin Fort",
      "Village Round"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37675",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, what is Windy doing when his windmill sails mysteriously stop?",
    "answers": [
      "Making bread",
      "Delivering milk",
      "Sleeping",
      "Reading a letter"
    ],
    "correctAnswer": "Sleeping",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: Windy Miller",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Sleeping",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "Windy Miller",
      "Asleep",
      "Broken Mill"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37676",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, whose delivery van breaks down and needs attention at the garage?",
    "answers": [
      "Peter Postman's",
      "Paddy Murphy's",
      "Nick Fisher's",
      "Mickey Murphy's"
    ],
    "correctAnswer": "Mickey Murphy's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: Mr Crockett the Garage Man",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Mickey Murphy's",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "Garage Repairs",
      "Baker Van",
      "Mr Crockett"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37677",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, which farmer challenges Windy Miller to a race after stopping at the garage?",
    "answers": [
      "Jonathan Bell",
      "Willie Munn",
      "Mr Farthing",
      "Mr Clamp"
    ],
    "correctAnswer": "Jonathan Bell",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: Mr Crockett the Garage Man",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Jonathan Bell",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "Windy Miller",
      "Farmer Bell",
      "Race"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37678",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, where does the doctor carry out a routine examination of soldiers?",
    "answers": [
      "Winkstead Hall",
      "Pippin Fort",
      "The biscuit factory",
      "Trumpton Town Hall"
    ],
    "correctAnswer": "Pippin Fort",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: Doctor Mopp",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Pippin Fort",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "Doctor Rounds",
      "Army Medical",
      "Pippin Fort"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37679",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, what farm animal does Doctor Mopp visit because it has a nasty cough?",
    "answers": [
      "A sheep",
      "A horse",
      "A cow",
      "A goat"
    ],
    "correctAnswer": "A cow",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: Doctor Mopp",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: A cow",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "Animal Patient",
      "Doctor Mopp",
      "Nasty Cough"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37680",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, what product is Farmer Bell struggling to sell after another supplier takes his customers?",
    "answers": [
      "Cheese",
      "Potatoes",
      "Flour",
      "Eggs"
    ],
    "correctAnswer": "Eggs",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: Jonathan Bell the Farmer",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Eggs",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "Egg Orders",
      "Rival Supplier",
      "Farm Business"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37681",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, what unexpected problem occurs while the soldiers are helping villagers?",
    "answers": [
      "A soldier goes missing",
      "Their vehicle is stolen",
      "Their tents blow away",
      "Their barracks flood"
    ],
    "correctAnswer": "A soldier goes missing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: Captain Snort",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: A soldier goes missing",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "Missing Soldier",
      "Village Tasks",
      "Pippin Fort"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37682",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, what product is lost after an accident disrupts a day's deliveries?",
    "answers": [
      "Flour",
      "Milk",
      "Coal",
      "Fish"
    ],
    "correctAnswer": "Milk",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: Paddy Murphy",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Milk",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "Paddy Murphy",
      "Delivery Accident",
      "Dairy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37683",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, what essential service has been cut off at the bakery after the chimney is swept?",
    "answers": [
      "Electricity",
      "Telephone",
      "Water",
      "Gas"
    ],
    "correctAnswer": "Water",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: Roger Varley the Sweep",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Water",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "Roger Varley",
      "Bakery",
      "Water Cut Off"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37684",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, who knows how to help when the bakery's water supply fails?",
    "answers": [
      "Captain Flack",
      "Lord Belborough",
      "Mr Cresswell",
      "Windy Miller"
    ],
    "correctAnswer": "Windy Miller",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: Roger Varley the Sweep",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Windy Miller",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "Windy Miller",
      "Sweep",
      "Bakery Emergency"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37685",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, what offence is the village policeman checking for before the bakery's bee emergency?",
    "answers": [
      "Illegal fishing",
      "Dangerous driving",
      "Shoplifting",
      "Vandalism"
    ],
    "correctAnswer": "Illegal fishing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: PC McGarry",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Illegal fishing",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "PC McGarry",
      "Patrol",
      "Fishing Rules"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37686",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, where do bees cause trouble that summons the policeman and soldiers?",
    "answers": [
      "The post office",
      "The bakery",
      "The garage",
      "The pottery"
    ],
    "correctAnswer": "The bakery",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: PC McGarry",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: The bakery",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "Bee Swarm",
      "Bakery Emergency",
      "Pippin Fort"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37687",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, what unusual vehicle does the travelling salesman try to sell at Pippin Fort?",
    "answers": [
      "A motorbike",
      "A fire engine",
      "A helicopter",
      "A steam train"
    ],
    "correctAnswer": "A helicopter",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: Mr Dagenham the Salesman",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: A helicopter",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "Mr Dagenham",
      "Sales Demonstration",
      "Helicopter"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37688",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, what village repair makes use of the helicopter despite the soldiers not buying it?",
    "answers": [
      "Repairing the church roof",
      "Replacing the village bridge",
      "Cleaning the doctor's chimney",
      "Fixing Windy Miller's mill"
    ],
    "correctAnswer": "Fixing Windy Miller's mill",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: Mr Dagenham the Salesman",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Fixing Windy Miller's mill",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "Mill Repair",
      "Helicopter",
      "Unexpected Help"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37689",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, what subject does the fishmonger talk about while making his deliveries?",
    "answers": [
      "Adventures at sea",
      "Football matches",
      "His holiday in France",
      "Local politics"
    ],
    "correctAnswer": "Adventures at sea",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: Mr Carraway the Fishmonger",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Adventures at sea",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "Mr Carraway",
      "Sea Stories",
      "Delivery Round"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37690",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, what accident prevents Mickey Murphy from baking his normal orders?",
    "answers": [
      "He sprains his ankle",
      "He burns his hands",
      "He loses his glasses",
      "He catches a cold"
    ],
    "correctAnswer": "He burns his hands",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: Mickey Murphy the Baker",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: He burns his hands",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "Baker Injury",
      "Burned Hands",
      "Missed Orders"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37691",
    "category": "Television",
    "programme": "Camberwick Green",
    "question": "In Camberwick Green, what does the village gossip organise after misunderstanding the workmen's arrival?",
    "answers": [
      "A village fete",
      "A jumble sale",
      "A protest",
      "A concert"
    ],
    "correctAnswer": "A protest",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Camberwick Green",
      "Programme: Camberwick Green",
      "Episode: Mrs Honeyman and Her Baby",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: A protest",
      "Source: https://thetvdb.com/series/camberwick-green/allseasons/official",
      "Mrs Honeyman",
      "Wrong Conclusion",
      "Village Green"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37692",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, what event is the fire brigade trying to advertise with posters?",
    "answers": [
      "A boxing tournament",
      "A charity raffle",
      "A mayoral election",
      "Their band concert"
    ],
    "correctAnswer": "Their band concert",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: The Bill Poster",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Their band concert",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Fire Brigade",
      "Concert Advertising",
      "Posters"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37693",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, what basic obstacle prevents the firemen putting their advertisements up easily?",
    "answers": [
      "They cannot find suitable places for the posters",
      "They have no paintbrushes",
      "The printed date is wrong",
      "The mayor has banned concerts"
    ],
    "correctAnswer": "They cannot find suitable places for the posters",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: The Bill Poster",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: They cannot find suitable places for the posters",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Publicity Problem",
      "Firemen",
      "Notice Boards"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37694",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, what does the mayor find damaged while inspecting the town park?",
    "answers": [
      "A fountain",
      "A bench",
      "A bridge",
      "A bandstand"
    ],
    "correctAnswer": "A bench",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: Miss Lovelace and the Mayor's Hat",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: A bench",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Mayor Park Visit",
      "Broken Bench",
      "Town Repairs"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37695",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, what crashes through Mrs Cobbit's roof before she finds her market pitch occupied?",
    "answers": [
      "A chimney pot",
      "A ladder",
      "A tree branch",
      "A football"
    ],
    "correctAnswer": "A tree branch",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: Mrs Cobbit and the Ice Cream Man",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: A tree branch",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Mrs Cobbit",
      "Roof Damage",
      "Market Day"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37696",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, where has the ice-cream seller taken Mrs Cobbit's usual trading spot?",
    "answers": [
      "The railway station",
      "The town hall",
      "The village school",
      "The town market"
    ],
    "correctAnswer": "The town market",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: Mrs Cobbit and the Ice Cream Man",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: The town market",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Mrs Cobbit",
      "Market Pitch",
      "Ice Cream Seller"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37697",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, what historic figure is depicted by the statue damaged during a chain of mishaps?",
    "answers": [
      "Queen Victoria",
      "Queen Elizabeth I",
      "King George V",
      "Oliver Cromwell"
    ],
    "correctAnswer": "Queen Victoria",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: Miss Lovelace and the Statue",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Queen Victoria",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Town Square",
      "Queen Victoria",
      "Damaged Statue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37698",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, what small maintenance problem triggers the trouble involving the statue?",
    "answers": [
      "A broken clock spring",
      "A door that sticks",
      "A leaky roof",
      "A loose railway sleeper"
    ],
    "correctAnswer": "A door that sticks",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: Miss Lovelace and the Statue",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: A door that sticks",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Miss Lovelace",
      "Sticky Door",
      "Chain Reaction"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37699",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, what part of Trumpton's town clock needs repainting?",
    "answers": [
      "The pendulum",
      "The hands only",
      "The clock face",
      "The clock tower roof"
    ],
    "correctAnswer": "The clock face",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: Mr Platt and the Painter",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: The clock face",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Mr Platt",
      "Town Clock",
      "Painter"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37700",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, what misplaced object causes havoc during the clock-painting job?",
    "answers": [
      "A ladder",
      "A bucket of sand",
      "A tin of oil",
      "A pot of paint"
    ],
    "correctAnswer": "A pot of paint",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: Mr Platt and the Painter",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: A pot of paint",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Paint Spill",
      "Town Clock",
      "Accident"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37701",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, what picture do the townspeople hope to give the mayor as a birthday surprise?",
    "answers": [
      "A painting of the Town Hall",
      "A portrait of the fire brigade",
      "A map of the town",
      "A sketch of the market"
    ],
    "correctAnswer": "A painting of the Town Hall",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: The Mayor's Birthday",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: A painting of the Town Hall",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Mayor Birthday",
      "Town Hall Painting",
      "Gift"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37702",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, who has spotted an artist painting scenes around Trumpton?",
    "answers": [
      "Captain Flack",
      "Chippy Minton",
      "Miss Lovelace",
      "Mrs Cobbit"
    ],
    "correctAnswer": "Chippy Minton",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: The Mayor's Birthday",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Chippy Minton",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Chippy Minton",
      "Visiting Artist",
      "Search"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37703",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, who causes confusion by reconnecting the town telephone wires incorrectly?",
    "answers": [
      "Captain Flack",
      "Mr Platt",
      "The engineer's assistant Fred",
      "Chippy Minton"
    ],
    "correctAnswer": "The engineer's assistant Fred",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: The Telephone",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: The engineer's assistant Fred",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Telephone Fault",
      "Fred",
      "Wrong Connections"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37704",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, what is the name of the rag-and-bone collector involved in the rocking-horse mix-up?",
    "answers": [
      "Mr Robinson",
      "Mr Wilkins",
      "Mr Platt",
      "Raggy Dan"
    ],
    "correctAnswer": "Raggy Dan",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: The Rag and Bone Man",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Raggy Dan",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Raggy Dan",
      "Old Junk",
      "Rocking Horse"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37705",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, who unknowingly hands over the rocking horse containing her husband's savings?",
    "answers": [
      "Mrs Minton",
      "Miss Lovelace",
      "Mrs Cobbit",
      "Mrs Honeyman"
    ],
    "correctAnswer": "Mrs Minton",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: The Rag and Bone Man",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Mrs Minton",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Chippy Savings",
      "Mrs Minton",
      "Rag And Bone"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37706",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, where is window cleaner Mr Robinson stranded when help is needed?",
    "answers": [
      "In a basement",
      "On a roof",
      "Inside a lift",
      "On a bridge"
    ],
    "correctAnswer": "On a roof",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: The Window Cleaner",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: On a roof",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Mr Robinson",
      "Stranded Cleaner",
      "Fire Brigade"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37707",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, whom does fireman Cuthbert set out to visit during his morning off?",
    "answers": [
      "His brother",
      "His grandfather",
      "His aunt",
      "His former teacher"
    ],
    "correctAnswer": "His aunt",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: Cuthbert's Morning Off",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: His aunt",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Cuthbert",
      "Family Visit",
      "Day Off"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37708",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, what happens to Cuthbert and his aunt while they are out in town?",
    "answers": [
      "They miss a ferry",
      "They lose their house keys",
      "They lock themselves in the park",
      "They get separated"
    ],
    "correctAnswer": "They get separated",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: Cuthbert's Morning Off",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: They get separated",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Separated Family",
      "Search",
      "Fire Brigade"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37709",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, who is the tradesman called in when a town-hall water tank needs replacing?",
    "answers": [
      "Mr Wilkins",
      "Mr Robinson",
      "Mr Crockett",
      "Mr Dagenham"
    ],
    "correctAnswer": "Mr Wilkins",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: The Plumber",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Mr Wilkins",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Leaking Tank",
      "Plumber",
      "Town Hall"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37710",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, why must the fire brigade help after the plumber inspects the water tank?",
    "answers": [
      "The water is frozen solid",
      "The old tank cannot be removed",
      "The new pipes are too short",
      "The building is closed for a parade"
    ],
    "correctAnswer": "The old tank cannot be removed",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: The Plumber",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: The old tank cannot be removed",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Trumpton Firemen",
      "Stuck Tank",
      "Water Supply"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37711",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, what blocks the road and prevents Chippy Minton from reaching town?",
    "answers": [
      "A broken delivery van",
      "A flock of sheep",
      "A fallen tree",
      "A collapsed bridge"
    ],
    "correctAnswer": "A fallen tree",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: Pigeons",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: A fallen tree",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Chippy Minton",
      "Blocked Road",
      "Fallen Tree"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37712",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, how does Chippy Minton send for assistance when the road is blocked?",
    "answers": [
      "By tapping a telegraph key",
      "Through a telephone operator",
      "By radioing the fire brigade",
      "With a messenger pigeon"
    ],
    "correctAnswer": "With a messenger pigeon",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: Pigeons",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: With a messenger pigeon",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Pigeon Message",
      "Summoning Help",
      "Road Block"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37713",
    "category": "Television",
    "programme": "Trumpton",
    "question": "In Trumpton, what danger threatens the park ahead of the fruit and vegetable show?",
    "answers": [
      "An unsafe greenhouse chimney",
      "A leaking water tank",
      "A broken road bridge",
      "A burst gas pipe"
    ],
    "correctAnswer": "An unsafe greenhouse chimney",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Trumpton",
      "Programme: Trumpton",
      "Episode: The Greenhouse",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: An unsafe greenhouse chimney",
      "Source: https://www.thetvdb.com/series/trumpton/allseasons/official",
      "Greenhouse Chimney",
      "Vegetable Show",
      "Fire Brigade"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37714",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, what does Doctor Mopp visit Chigley Pottery to buy?",
    "answers": [
      "A jug for the mayor",
      "A vase for his sister",
      "A plate for Windy Miller",
      "A cup for Lord Belborough"
    ],
    "correctAnswer": "A vase for his sister",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: Lord Belborough's Secret",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: A vase for his sister",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Doctor Mopp",
      "Pottery Visit",
      "Gift For Sister"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37715",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, where does Lord Belborough take a crate of pottery in his locomotive Bessie?",
    "answers": [
      "Pippin Fort",
      "Trumpton Town Hall",
      "Treddles Wharf",
      "Colley's Mill"
    ],
    "correctAnswer": "Treddles Wharf",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: Lord Belborough's Secret",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Treddles Wharf",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Pottery Delivery",
      "Bessie",
      "Treddles Wharf"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37716",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, where must a forgotten biscuit delivery reach in time for the train to London?",
    "answers": [
      "Pippin Fort",
      "The Trumpton market",
      "Winkstead Hall",
      "Wintelbury station"
    ],
    "correctAnswer": "Wintelbury station",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: Bessie to the Rescue",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Wintelbury station",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Biscuit Delivery",
      "Wintelbury",
      "Train Deadline"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37717",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, who takes a missing box of biscuits to Lord Belborough for emergency delivery?",
    "answers": [
      "Farmer Bell",
      "Windy Miller",
      "Mr Farthing",
      "Mr Bilton"
    ],
    "correctAnswer": "Farmer Bell",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: Bessie to the Rescue",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Farmer Bell",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Farmer Bell",
      "Forgotten Box",
      "Lord Belborough"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37718",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, what cause is the mayor trying to raise money for with Lord Belborough?",
    "answers": [
      "A children's playground",
      "The old people's holiday fund",
      "A new fire station",
      "A school library"
    ],
    "correctAnswer": "The old people's holiday fund",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: The Balloon",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: The old people's holiday fund",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Mayor Fundraising",
      "Older Residents",
      "Holiday"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37719",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, whose balloon bursts against the steam locomotive's chimney?",
    "answers": [
      "Mrs Cobbit's",
      "Miss Lovelace's",
      "Winnie's",
      "Mrs Honeyman's"
    ],
    "correctAnswer": "Winnie's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: The Balloon",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Winnie's",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Winnie Balloon",
      "Bessie Chimney",
      "Fundraising Idea"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37720",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, which businessman is asked whether a stone fountain would suit the factory grounds?",
    "answers": [
      "Mr Crockett",
      "Mr Dagenham",
      "Mr Munnings",
      "Mr Cresswell"
    ],
    "correctAnswer": "Mr Cresswell",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: The Fountain",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Mr Cresswell",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Mr Cresswell",
      "Factory Grounds",
      "Stone Fountain"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37721",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, which craftsman mentions that demand for his stone sculptures has fallen?",
    "answers": [
      "Mr Farthing",
      "Mr Clutterbuck",
      "Mr Wilkins",
      "Mr Platt"
    ],
    "correctAnswer": "Mr Farthing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: The Fountain",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Mr Farthing",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Mr Farthing",
      "Pottery Business",
      "Stone Sculptures"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37722",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, where are the bricks waiting that Mr Clutterbuck needs for the damaged wall?",
    "answers": [
      "The biscuit factory",
      "Treddles Wharf",
      "Colley's Mill",
      "Trumpton Town Hall"
    ],
    "correctAnswer": "Treddles Wharf",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: The Garden Wall",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Treddles Wharf",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Mr Clutterbuck",
      "Brick Delivery",
      "Wall Repairs"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37723",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, what fuel has run out at Winkstead Hall when Binnie is needed to pump water?",
    "answers": [
      "Petrol",
      "Diesel",
      "Coal",
      "Charcoal briquettes"
    ],
    "correctAnswer": "Coal",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: Binnie and Bessie",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Coal",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Binnie Pump",
      "Coal Shortage",
      "Winkstead Hall"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37724",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, why is the pumping engine urgently needed at Winkstead Hall?",
    "answers": [
      "The greenhouse is flooded",
      "The boiler is leaking steam",
      "The courtyard has no lights",
      "The water level is very low"
    ],
    "correctAnswer": "The water level is very low",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: Binnie and Bessie",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: The water level is very low",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Binnie",
      "Water Shortage",
      "Pumping Engine"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37725",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, what valuable old object does Lord Belborough accidentally break while showing his butler?",
    "answers": [
      "An antique vase",
      "A grandfather clock",
      "A porcelain plate",
      "A stained-glass lamp"
    ],
    "correctAnswer": "An antique vase",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: Lord Belborough's Lucky Day",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: An antique vase",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Lord Belborough",
      "Antique Vase",
      "Accidental Breakage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37726",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, where are the pieces of the smashed antique placed before being collected?",
    "answers": [
      "In a biscuit tin",
      "In a dustbin",
      "In a wooden crate",
      "In the locomotive tender"
    ],
    "correctAnswer": "In a dustbin",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: Lord Belborough's Lucky Day",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: In a dustbin",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Brackett",
      "Dustmen",
      "Broken Antique"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37727",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, which visitor warns the fishmonger that the Chigley bridge has been shut?",
    "answers": [
      "Captain Flack",
      "Mr Cresswell",
      "PC McGarry",
      "Mr Farthing"
    ],
    "correctAnswer": "PC McGarry",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: The Broken Bridge",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: PC McGarry",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Bridge Closure",
      "Mr Carraway",
      "Police Warning"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37728",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, who provides a temporary crossing at Treddles Wharf while the main bridge is closed?",
    "answers": [
      "The biscuit factory workers",
      "The Trumpton fire brigade",
      "The local railway company",
      "Soldiers from Pippin Fort"
    ],
    "correctAnswer": "Soldiers from Pippin Fort",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: The Broken Bridge",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Soldiers from Pippin Fort",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Temporary Bridge",
      "Pippin Fort",
      "Treddles Wharf"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37729",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, what construction project produces a supply of free clay for the pottery?",
    "answers": [
      "A new telephone exchange",
      "A new fire station",
      "A railway tunnel",
      "A hospital extension"
    ],
    "correctAnswer": "A new telephone exchange",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: Clay for Mr Farthing",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: A new telephone exchange",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Telephone Exchange",
      "Clay Supply",
      "Pottery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37730",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, which workers tell Mr Farthing about the available clay?",
    "answers": [
      "Railway engineers",
      "Telephone engineers",
      "Firefighters",
      "Coal miners"
    ],
    "correctAnswer": "Telephone engineers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: Clay for Mr Farthing",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Telephone engineers",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Telephone Engineers",
      "Mr Farthing",
      "Pottery Clay"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37731",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, what load is being lifted off Mr Rumpling's boat when the wharf crane malfunctions?",
    "answers": [
      "A pile of sacks of flour",
      "A box of factory biscuits",
      "A crate of antique books",
      "A drum of apple juice"
    ],
    "correctAnswer": "A crate of antique books",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: Trouble with the Crane",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: A crate of antique books",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Mr Rumpling",
      "Antique Books",
      "Wharf Crane"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37732",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, whose scrap metal is due to be loaded onto the boat during the crane accident?",
    "answers": [
      "Mr Farthing's",
      "Windy Miller's",
      "Mr Bilton's",
      "Farmer Bell's"
    ],
    "correctAnswer": "Farmer Bell's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: Trouble with the Crane",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Farmer Bell's",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Farmer Bell",
      "Scrap Metal",
      "Crane Accident"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37733",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, what product does Windy Miller suggest making from the big apple harvest?",
    "answers": [
      "Apple juice",
      "Apple jelly",
      "Apple pies",
      "Dried apple rings"
    ],
    "correctAnswer": "Apple juice",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: Apples Galore",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Apple juice",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Windy Miller",
      "Apple Harvest",
      "Fruit Press"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37734",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, what machine does Windy Miller propose using to process the apples?",
    "answers": [
      "His flour mill",
      "His cider press",
      "A bread mixer",
      "A water pump"
    ],
    "correctAnswer": "His cider press",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: Apples Galore",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: His cider press",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Cider Press",
      "Apple Processing",
      "Winkstead Orchard"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37735",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, what job is offered to the car-loving daydreamer Willie Munn?",
    "answers": [
      "Train conductor",
      "Firefighter",
      "Delivery driver",
      "Chauffeur to the mayor"
    ],
    "correctAnswer": "Delivery driver",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: Willie Munn",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Delivery driver",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Willie Munn",
      "Vehicle Enthusiast",
      "Factory Delivery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37736",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, who is the greengrocer who asks Mr Cresswell about his nephew Willie?",
    "answers": [
      "Mr Carraway",
      "Mr Farthing",
      "Mr Dagenham",
      "Mr Clamp"
    ],
    "correctAnswer": "Mr Clamp",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: Willie Munn",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Mr Clamp",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Mr Clamp",
      "Willie Munn",
      "Family Link"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37737",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, who helps the unwell gardener Mr Bilton by mowing the lawn?",
    "answers": [
      "Mr Antonio",
      "Mr Clutterbuck",
      "Mr Farthing",
      "Mr Cresswell"
    ],
    "correctAnswer": "Mr Antonio",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: A Present for Lord Belborough",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: Mr Antonio",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Mr Antonio",
      "Gardener Ill",
      "Mowing Lawns"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37738",
    "category": "Television",
    "programme": "Chigley",
    "question": "In Chigley, what new piece of equipment does Lord Belborough hope to obtain to make gardening easier?",
    "answers": [
      "A greenhouse heater",
      "A motor mower",
      "A water pump",
      "A hedge trimmer"
    ],
    "correctAnswer": "A motor mower",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Stop Motion",
      "Animation",
      "BBC",
      "Trumptonshire",
      "Chigley",
      "Programme: Chigley",
      "Episode: A Present for Lord Belborough",
      "1960s British Children's TV",
      "Episode-specific storyline",
      "Answer: A motor mower",
      "Source: https://play.google.com/store/tv/show/Chigley?id=3ilYLmHHpsE.P",
      "Mr Bilton",
      "Motor Mower",
      "Finale Gift"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
const auditedProgrammeTotals = {"Camberwick Green":43,"Trumpton":46,"Chigley":50};
if(questions.length !== 139 ||
 questions[0].id !== 'tv_16093' || questions[72].id !== 'tv_16165' ||
 auditAdditions[0].id !== 'tv_37673' || auditAdditions[auditAdditions.length-1].id !== 'tv_37738' ||
 new Set(questions.map(q=>q.id)).size !== questions.length ||
 new Set(questions.map(q=>normalise(q.programme+'|'+q.question))).size !== questions.length ||
 Object.entries(auditedProgrammeTotals).some(([p,n])=>questions.filter(q=>q.programme===p).length!==n) ||
 questions.some(q=>q.answers.length!==4 || new Set(q.answers.map(normalise)).size!==4 ||
 q.answers.filter(a=>a===q.correctAnswer).length!==1 ||
 !q.tags.includes('Programme: '+q.programme) || q.tags.length<14 || q.dailyEligible!==true) ||
 auditAdditions.some(q=>!q.question.startsWith('In '+q.programme+', ')||
 !q.tags.some(t=>t.startsWith('Episode: ')) || !q.tags.some(t=>t.startsWith('Source: https://'))))
 throw Error('Pack 339 storyline audit validation failed');
module.exports = questions;
