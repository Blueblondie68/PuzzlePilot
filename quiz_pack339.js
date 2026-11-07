
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

 module.exports = questions;
