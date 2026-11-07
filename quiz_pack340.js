
 // quiz_pack340.js — PuzzlePilot Bigggggg Quiz
 // Butterflies (1978–1983), 28 regular episodes and short specials.
 // 61 questions, IDs tv_16166–tv_16226.
 // Seven individually selected specialist tags per question.

 const facts = `
 Who wrote the BBC sitcom Butterflies?|Carla Lane|Victoria Wood|Lynda La Plante|Susan Belbin|Easy|Carla Lane|Writer|Creator|BBC Comedy|1978 Debut|Writing Credits|Production
 Who portrayed Ria Parkinson?|Wendy Craig|Penelope Keith|Felicity Kendal|Pauline Collins|Easy|Ria Parkinson|Wendy Craig|Lead Actress|Casting|Housewife|Family|Main Character
 Who played Ria's husband Ben Parkinson?|Geoffrey Palmer|Richard Briers|John Cleese|Peter Bowles|Easy|Ben Parkinson|Geoffrey Palmer|Husband|Casting|Dentist|Marriage|Main Character
 Which actor played Leonard Dunn?|Bruce Montague|Michael Ripper|Andrew Hall|Geoffrey Palmer|Easy|Leonard Dunn|Bruce Montague|Casting|Ria Friendship|Businessman|Romantic Interest|Main Character
 Who played Adam Parkinson?|Nicholas Lyndhurst|Andrew Hall|David Jason|Mark Curry|Easy|Adam Parkinson|Nicholas Lyndhurst|Older Son|Casting|Family|Brothers|Main Cast
 Which actor played Russell Parkinson?|Andrew Hall|Nicholas Lyndhurst|Michael Ripper|Bruce Montague|Easy|Russell Parkinson|Andrew Hall|Younger Son|Casting|Family|Brothers|Main Cast
 What is Ben Parkinson's profession?|Dentist|Solicitor|Architect|Accountant|Easy|Ben Parkinson|Dentist|Profession|Family Income|Geoffrey Palmer|Work|Character Background
 Which hobby gives the sitcom its title a literal connection to Ben?|Collecting butterflies|Painting birds|Breeding pigeons|Gardening roses|Easy|Butterfly Collecting|Ben Parkinson|Hobby|Series Title|Family Home|Geoffrey Palmer|Character Detail
 How many sons do Ria and Ben have?|Two|One|Three|Four|Easy|Ria Parkinson|Ben Parkinson|Adam|Russell|Family Size|Parenthood|Series Premise
 Who played the Parkinson family's cleaner Ruby?|Joyce Windsor|Sarah James|Wendy Craig|Sheila Fearn|Medium|Ruby|Joyce Windsor|Cleaner|Domestic Work|Casting|Supporting Character|Family Home
 Which actor portrayed Thomas, a recurring character in Butterflies?|Michael Ripper|Gareth Gwenlan|Sydney Lotterby|Bruce Montague|Medium|Thomas|Michael Ripper|Supporting Cast|Actor Identification|Recurring Character|BBC Comedy|Casting
 Which actress played Jeannie in later series of Butterflies?|Sarah James|Joyce Windsor|Brigit Forsyth|Patricia Brake|Medium|Jeannie|Sarah James|Russell Relationship|Series Three|Series Four|Actress|Supporting Cast
 On which BBC channel did Butterflies originally premiere?|BBC Two|BBC One|ITV|Channel 4|Easy|BBC Two|Original Broadcast|Network|1978|Broadcast History|British Sitcom|Television Premiere
 In which year did Butterflies first air?|1978|1976|1980|1983|Easy|1978|Premiere Year|Series One|BBC Two|Carla Lane|1970s Television|Broadcast History
 In which year did the original run of Butterflies finish?|1983|1980|1985|1988|Easy|1983|Series Four|Final Year|BBC Two|Original Run|Television History|Broadcast Date
 How many regular series of Butterflies were produced?|Four|Three|Five|Six|Easy|Four Series|Programme Run|1978 To 1983|BBC Two|Season Count|Production History|Series Format
 How many regular episodes of Butterflies were made, excluding short specials?|Twenty-eight|Twenty-four|Thirty|Thirty-six|Medium|Twenty Eight Episodes|Regular Episodes|Series Count|Broadcast History|BBC Two|Four Series|Programme Length
 How many regular episodes were in Butterflies series one?|Six|Seven|Eight|Ten|Medium|Series One|Six Episodes|1978|First Series|Broadcast Schedule|Episode Count|BBC Comedy
 How many regular episodes were in Butterflies series two?|Eight|Six|Seven|Nine|Medium|Series Two|Eight Episodes|1979|Broadcast Schedule|Episode Count|BBC Comedy|Programme History
 How many regular episodes were in Butterflies series three?|Seven|Six|Eight|Ten|Medium|Series Three|Seven Episodes|1980|Episode Count|Broadcast Schedule|Programme History|BBC Comedy
 Which year saw Butterflies return for its fourth series after a break?|1983|1981|1982|1985|Medium|Series Four|1983 Return|Broadcast Gap|BBC Two|Revival|Carla Lane|Programme Timeline
 Who performed the Butterflies theme song used on television?|Clare Torry|Dolly Parton|Cilla Black|Barbara Dickson|Medium|Clare Torry|Theme Vocal|Love Is Like A Butterfly|Television Music|Opening Credits|Song Performance|Soundtrack
 Which singer-songwriter originally wrote Love Is Like a Butterfly, used as the theme?|Dolly Parton|Clare Torry|Carla Lane|Judie Tzuke|Medium|Dolly Parton|Theme Song|Songwriter|Love Is Like A Butterfly|Country Music|Television Adaptation|Music Credits
 Who arranged the theme music for Butterflies?|Ronnie Hazlehurst|Mike Hugg|Tony Hatch|John Barry|Medium|Ronnie Hazlehurst|Theme Arrangement|Soundtrack|BBC Music|Love Is Like A Butterfly|Production Credits|Music
 Which director worked on the later series of Butterflies?|Sydney Lotterby|Dick Clement|Gerry Anderson|Michael Tuchner|Medium|Sydney Lotterby|Director|Series Three|Series Four|Production Team|BBC Sitcom|Direction
 Which director was associated with the opening series of Butterflies?|Gareth Gwenlan|Sydney Lotterby|Alan Parker|Tony Dow|Medium|Gareth Gwenlan|Series One|Director|Production Team|1978|BBC Comedy|Direction
 In which English town was location filming associated with Butterflies?|Cheltenham|Blackpool|York|Bath|Medium|Cheltenham|Gloucestershire|Location Filming|Production Setting|British Town|BBC Comedy|Filming
 Which character is Ria tempted to begin an affair with?|Leonard Dunn|Thomas|Russell Parkinson|Mr Conrad|Easy|Ria Parkinson|Leonard Dunn|Unconsummated Romance|Marriage Dilemma|Affair Temptation|Character Relationship|Central Storyline
 What recurring domestic problem provides humour in Ria's family life?|Her poor cooking|Her unreliable car|Her broken television|Her missing garden gate|Easy|Ria Parkinson|Cooking|Domestic Comedy|Family Meals|Kitchen|Running Joke|Marriage
 What is the title of Butterflies' very first episode?|When Ria Met Leonard|Breaking the Silence|How About Lunch?|Leaving|Medium|When Ria Met Leonard|Series One|Episode One|1978|Episode Title|First Meeting|Ria And Leonard
 In When Ria Met Leonard, where does Ria initially meet Leonard?|In a café|At a cinema|At the dentist|On a train|Medium|When Ria Met Leonard|Cafe|First Meeting|Ria Parkinson|Leonard Dunn|Series One|Romantic Plot
 In Breaking the Silence, which father and son try speaking after a long silence?|Ben and Russell|Ben and Adam|Leonard and Russell|Thomas and Adam|Medium|Breaking The Silence|Ben Parkinson|Russell Parkinson|Family Conflict|Series One|Estrangement|Episode Plot
 What personal detail has Ria lied to Leonard about in Breaking the Silence?|Her age|Her surname|Her profession|Her birthplace|Medium|Breaking The Silence|Ria Age|Leonard Dunn|Small Lie|Series One|Episode Detail|Romance
 Which episode concerns Ria's wish to find work outside the home?|Thinking About a Job|The Lovers|A Dog's Life|Calling|Medium|Thinking About A Job|Employment|Ria Independence|Ben Parkinson|Series One|Career Plans|Episode Title
 What occasion prompts Leonard to invite Ria to lunch in How About Lunch??|His birthday|His promotion|His retirement|His anniversary|Medium|How About Lunch|Leonard Birthday|Lunch Invitation|Ria Parkinson|Series One|Dating|Episode Storyline
 Which first-series episode is named The Lovers?|Episode five|Episode one|Episode three|Episode six|Hard|The Lovers|Series One|Fifth Episode|1978|Episode Order|Art Work|Leonard Dunn
 Which episode ends the first regular series of Butterflies?|He'll Have to Go|Breaking the Silence|Leaving|Parting|Medium|Hell Have To Go|Series One Finale|1978|Episode Title|Ria Choices|Relationships|Sixth Episode
 In Leaving, whose girlfriend ends their relationship because she finds him boring?|Adam's|Russell's|Ben's|Thomas's|Medium|Leaving|Adam Parkinson|Girlfriend|Breakup|Series Two|1979|Episode Storyline
 Which outdoor activity upsets Ria during Fox Hunting?|A fox hunt|A shooting competition|A horse race|A dog show|Easy|Fox Hunting|Ria Parkinson|Animal Welfare|Protest|Series Two|Countryside|Episode Plot
 In Worrying, which character fears he is having a heart attack?|Ben Parkinson|Leonard Dunn|Adam Parkinson|Thomas|Medium|Worrying|Ben Parkinson|Chest Pains|Family Argument|Series Two|Health Scare|Episode Plot
 In A Dog's Life, which animal does Ria nearly run over?|A dog|A cat|A fox|A rabbit|Easy|A Dogs Life|Ria Parkinson|Near Accident|Church Visit|Series Two|Animal|Episode Event
 Which episode sends Ria to an exercise class before an encounter with Leonard?|Keeping Fit|Fox Hunting|Pregnancy|Cleaning Windows|Medium|Keeping Fit|Exercise Class|Leonard Dunn|Ria Parkinson|Series Two|Health|Episode Storyline
 What is the name of the visiting woman who unsettles Ria in An Attractive Visitor?|Susanna|Amanda|Kathleen|Jeannie|Medium|An Attractive Visitor|Susanna|Holiday Acquaintance|Family Guest|Series Two|Ria Anxiety|Character Name
 In Lunch with Leonard, what does Leonard telephone Ria to arrange?|A lunch meeting|A cinema trip|A country walk|A dinner with Ben|Medium|Lunch With Leonard|Telephone Call|Ria Parkinson|Leonard Dunn|Series Two|Invitation|Episode Plot
 Which festive episode concludes the second regular series?|Christmas with the Parkinsons|Happy Birthday Ria|An Empty Cage|Breaking Up|Medium|Christmas With The Parkinsons|Series Two Finale|1979|Family Christmas|Episode Title|Holiday Episode|Ria Parkinson
 Where have Adam and Russell travelled in An Empty Cage?|Scotland|Wales|France|Spain|Medium|An Empty Cage|Adam Parkinson|Russell Parkinson|Scotland Trip|Series Three|1980|Episode Plot
 Which housekeeper has a personal crisis in an episode named after her?|Ruby|Jeannie|Susanna|Amanda|Easy|Rubys Crisis|Ruby|Joyce Windsor|Series Three|Domestic Staff|Personal Problem|Episode Title
 Which son faces a dilemma in Pregnancy?|Russell|Adam|Neither son|Both sons|Medium|Pregnancy|Russell Parkinson|Family Support|Ria Parkinson|Ben Parkinson|Series Three|Episode Storyline
 Whose birthday is celebrated in Happy Birthday, Ria?|Ria Parkinson's|Ben Parkinson's|Adam Parkinson's|Leonard Dunn's|Easy|Happy Birthday Ria|Ria Parkinson|Birthday|Ben Plans|Leonard Plans|Series Three|Romantic Competition
 Who is Kathleen in Gimme Shelter?|Ria's old schoolfriend|Ben's sister|Leonard's colleague|Ruby's daughter|Medium|Gimme Shelter|Kathleen|Schoolfriend|Ria Parkinson|Friendship Conflict|Series Three|Episode Plot
 In Parting, who is away while Adam and Russell attend an all-night party?|Ben Parkinson|Leonard Dunn|Ruby|Thomas|Medium|Parting|Ben Away|Adam And Russell|All Night Party|Ria Temptation|Series Three Finale|Episode Plot
 Which episode begins the fourth series of Butterflies?|Back from New York|Amanda|Pot|Calling|Medium|Back From New York|Series Four Premiere|1983|Episode Title|Ria Parkinson|Sequel Timeline|BBC Two
 Which newly widowed woman catches Ben's attention in the fourth series?|Amanda|Susanna|Kathleen|Jeannie|Medium|Amanda|Ben Parkinson|Widow|Old Friend|Series Four|Relationship Dilemma|Character Identity
 In Cleaning Windows, what business do Adam and Russell try to start?|Window cleaning|Lawn mowing|Car washing|House painting|Easy|Cleaning Windows|Adam Parkinson|Russell Parkinson|Small Business|Series Four|Earning Money|Episode Plot
 Which character is Russell's girlfriend in Calling?|Jeannie|Amanda|Ruby|Susanna|Medium|Calling|Jeannie|Russell Parkinson|Pregnancy Storyline|Series Four|Sarah James|Character Relationship
 In Calling, who answers the telephone when Leonard rings Ria?|Ben|Adam|Russell|Ruby|Medium|Calling|Ben Parkinson|Telephone Call|Leonard Dunn|Ria Parkinson|Series Four|Episode Plot
 In which episode does Ria finally break away from Leonard?|Breaking Up|Pot|Amanda|An Empty Cage|Medium|Breaking Up|Ria Parkinson|Leonard Dunn|Relationship Ending|Series Four|1983|Episode Storyline
 What is the title of the last regular Butterflies episode?|Loose Ends|Parting|He'll Have to Go|Back from New York|Medium|Loose Ends|Series Four Finale|1983|Episode Title|Marriage Future|Ending|Original Run
 In Loose Ends, which woman's advances does Ben resist?|Amanda's|Susanna's|Ruby's|Jeannie's|Medium|Loose Ends|Ben Parkinson|Amanda|Romantic Advances|Series Four Finale|Marriage|Episode Detail
 In which year was a Butterflies reunion made for Children in Need?|2000|1983|1993|2010|Medium|Children In Need|2000 Reunion|Charity Special|BBC|Returning Cast|Television Reunion|Production History
 Besides the 28 regular episodes, how many short specials are recognised in the programme guide?|Two|One|Three|Five|Medium|Two Specials|Christmas Sketch|Children In Need|Episode Count|Programme History|BBC Comedy|Special Broadcasts
 `;

 const FIRST_ID = 16166;

 const normalise = value =>
   String(value).normalize('NFKC')
     .trim().toLocaleLowerCase('en-GB');

 const questions = facts.trim().split('\n')
   .map(line => line.trim())
   .filter(Boolean)
   .map((line, index) => {
     const fields = line.split('|').map(value => value.trim());
     const id = `tv_${FIRST_ID + index}`;

     if (fields.length !== 13 || fields.some(x => !x)) {
       throw new Error(`Pack 340 fields at ${id}`);
     }

     const [
       question,
       correctAnswer,
       wrong1,
       wrong2,
       wrong3,
       difficulty,
       ...specificTags
     ] = fields;

     if (
       !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
       specificTags.length !== 7
     ) {
       throw new Error(`Pack 340 metadata at ${id}`);
     }

     const answers = [wrong1, wrong2, wrong3];

     if (
       new Set([correctAnswer, ...answers].map(normalise)).size !== 4
     ) {
       throw new Error(`Pack 340 answer choices at ${id}`);
     }

     answers.splice(index % 4, 0, correctAnswer);

     const tags = [...new Map([
       'Television',
       'British Television',
       'British Comedy',
       'Sitcom',
       'Classic Sitcom',
       'Carla Lane',
       '1978-1983',
       'BBC Two',
       'Butterflies',
       'Programme: Butterflies',
       ...specificTags,
       correctAnswer
     ].map(t => [normalise(t), t])).values()];

     return {
       id,
       category: 'Television',
       programme: 'Butterflies',
       question,
       answers,
       correctAnswer,
       difficulty,
       tags,
       dailyEligible: true
     };
   });

 // Validate the actual exported question objects.

 if (
   questions.length !== 61 ||
   questions[0].id !== 'tv_16166' ||
   questions[questions.length - 1].id !== 'tv_16226'
 ) {
   throw new Error('Pack 340 incorrect count or ID range');
 }

 const seen = new Set();

 for (let index = 0; index < questions.length; index++) {
   const q = questions[index];
   const key = normalise(q.question);

   if (
     seen.has(key) ||
     q.id !== `tv_${FIRST_ID + index}` ||
     q.answers.length !== 4 ||
     new Set(q.answers.map(normalise)).size !== 4 ||
     !q.answers.includes(q.correctAnswer) ||
     q.tags.length < 15 ||
     q.dailyEligible !== true
   ) {
     throw new Error(`Pack 340 export at ${q.id}`);
   }

   seen.add(key);
 }

 module.exports = questions;
