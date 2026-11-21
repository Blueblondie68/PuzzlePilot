
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
// 21 Nov 2026: episode-by-episode storyline audit. The 61 original
// questions and IDs tv_16166–tv_16226 are unchanged.
const auditAdditions = [
  {
    "id": "tv_37739",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what trouble has Adam had before Ria's chance encounter with Leonard?",
    "answers": [
      "He has crashed his car",
      "He has failed his exams",
      "He has lost his job",
      "He has been caught speeding"
    ],
    "correctAnswer": "He has crashed his car",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S1E1 When Ria Met Leonard",
      "Episode storyline",
      "Correct: He has crashed his car",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Adam Car Accident",
      "Series Opening",
      "Family"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37740",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, why does Ria leave the café before Leonard arrives for their planned second meeting?",
    "answers": [
      "Ben phones her",
      "She feels guilty",
      "The café is closing",
      "She has a job interview"
    ],
    "correctAnswer": "She feels guilty",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S1E1 When Ria Met Leonard",
      "Episode storyline",
      "Correct: She feels guilty",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ria Guilt",
      "Missed Meeting",
      "Leonard"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37741",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, which failed pudding helps end the long silence between Ben and Russell?",
    "answers": [
      "Rice pudding",
      "Treacle tart",
      "Apple sponge",
      "Bread and butter pudding"
    ],
    "correctAnswer": "Apple sponge",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S1E2 Breaking the Silence",
      "Episode storyline",
      "Correct: Apple sponge",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ria Cooking",
      "Apple Sponge",
      "Father Son"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37742",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, how does Ria persuade her family to eat the disastrous apple sponge?",
    "answers": [
      "Offering money",
      "Saying Leonard made it",
      "Promising to bake another",
      "Emotional blackmail"
    ],
    "correctAnswer": "Emotional blackmail",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S1E2 Breaking the Silence",
      "Episode storyline",
      "Correct: Emotional blackmail",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ria Domestic Life",
      "Family Dinner",
      "Failed Cooking"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37743",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, which activity by Adam and Russell makes Ben furious?",
    "answers": [
      "Busking",
      "Gambling",
      "Motor racing",
      "Selling his butterflies"
    ],
    "correctAnswer": "Busking",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S1E3 Thinking About a Job",
      "Episode storyline",
      "Correct: Busking",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Adam Russell",
      "Busking",
      "Ben Anger"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37744",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, why does Leonard lose his driving licence after giving Ria a lift?",
    "answers": [
      "He fails an eyesight test",
      "He is caught speeding",
      "He crashes into a wall",
      "He forgets to renew his insurance"
    ],
    "correctAnswer": "He is caught speeding",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S1E3 Thinking About a Job",
      "Episode storyline",
      "Correct: He is caught speeding",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Speeding",
      "Leonard Driving",
      "Ria Lift"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37745",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, who is hired as Leonard's driver after Ria fails to get the job?",
    "answers": [
      "Adam",
      "Russell",
      "Thomas",
      "Ben"
    ],
    "correctAnswer": "Thomas",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S1E3 Thinking About a Job",
      "Episode storyline",
      "Correct: Thomas",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Thomas Hired",
      "Leonard Driver",
      "Ria Job"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37746",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, why does Ria never receive the note Leonard leaves on her windscreen?",
    "answers": [
      "Ben burns it",
      "It is posted to the wrong address",
      "A parking attendant removes it",
      "Her sons are using her car"
    ],
    "correctAnswer": "Her sons are using her car",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S1E4 How About Lunch?",
      "Episode storyline",
      "Correct: Her sons are using her car",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Note On Windscreen",
      "Car",
      "Missed Invitation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37747",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, how does Ben respond to Ria accusing him of being unspontaneous?",
    "answers": [
      "He takes her camping in a tent",
      "He books a Paris holiday",
      "He buys a boat",
      "He gives up dentistry"
    ],
    "correctAnswer": "He takes her camping in a tent",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S1E4 How About Lunch?",
      "Episode storyline",
      "Correct: He takes her camping in a tent",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ben Marriage",
      "Camping",
      "Spontaneity"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37748",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, why does Russell object to the sale of a local sculpture?",
    "answers": [
      "It is to be destroyed",
      "It may be sold to an American millionaire",
      "It is a forgery",
      "It is being moved to Scotland"
    ],
    "correctAnswer": "It may be sold to an American millionaire",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S1E5 The Lovers",
      "Episode storyline",
      "Correct: It may be sold to an American millionaire",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Art Sale",
      "Russell Protest",
      "Gallery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37749",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, how do Ria and Russell protest against the sculpture's planned sale?",
    "answers": [
      "They paint it red",
      "They block the gallery doors",
      "They chain themselves to it",
      "They hide it in the house"
    ],
    "correctAnswer": "They chain themselves to it",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S1E5 The Lovers",
      "Episode storyline",
      "Correct: They chain themselves to it",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ria Russell",
      "Chained Protest",
      "Sculpture"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37750",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, who eventually buys the statue to keep it in England?",
    "answers": [
      "Ben",
      "Russell",
      "The mayor",
      "Leonard"
    ],
    "correctAnswer": "Leonard",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S1E5 The Lovers",
      "Episode storyline",
      "Correct: Leonard",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Leonard Purchase",
      "Statue Saved",
      "Ria"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37751",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what hairstyle does Adam conceal under a crash helmet?",
    "answers": [
      "A poodle perm",
      "A shaved head",
      "A bright red Mohican",
      "A ponytail"
    ],
    "correctAnswer": "A poodle perm",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S1E6 He'll Have to Go",
      "Episode storyline",
      "Correct: A poodle perm",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Adam Hair",
      "Crash Helmet",
      "Poodle Perm"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37752",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, why does Ben stay out until midnight without warning Ria?",
    "answers": [
      "He is attending a dental emergency",
      "He is trying to appear unpredictable",
      "He has broken down in his car",
      "He is searching for Adam"
    ],
    "correctAnswer": "He is trying to appear unpredictable",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S1E6 He'll Have to Go",
      "Episode storyline",
      "Correct: He is trying to appear unpredictable",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ben Experiment",
      "Patient Advice",
      "Marriage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37753",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what unusual way of venting frustration does Leonard recommend to Ria?",
    "answers": [
      "Swimming in a lake",
      "Hitting a punchbag",
      "Shouting at a tree",
      "Singing loudly in a café"
    ],
    "correctAnswer": "Shouting at a tree",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S2E1 Leaving",
      "Episode storyline",
      "Correct: Shouting at a tree",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Leonard Advice",
      "Tree Shouting",
      "Ria Stress"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37754",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, whom does Ria see entering a restaurant with Leonard after Adam's breakup?",
    "answers": [
      "Susanna",
      "Amanda",
      "Ruby",
      "Adam's ex-girlfriend Annie"
    ],
    "correctAnswer": "Adam's ex-girlfriend Annie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S2E1 Leaving",
      "Episode storyline",
      "Correct: Adam's ex-girlfriend Annie",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Annie",
      "Leonard",
      "Ria Suspicion"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37755",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, why does Ria's protest fail to catch the planned fox hunt?",
    "answers": [
      "The hunt happened that morning",
      "The organisers cancelled it",
      "Heavy snow kept everyone away",
      "Police closed the route"
    ],
    "correctAnswer": "The hunt happened that morning",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S2E2 Fox Hunting",
      "Episode storyline",
      "Correct: The hunt happened that morning",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ria Protest",
      "Fox Hunt",
      "Wrong Time"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37756",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, who cooks lunch because Ria is absorbed in her anti-hunting plans?",
    "answers": [
      "Ruby and Thomas",
      "Adam and Russell",
      "Ben and Leonard",
      "Susanna and Annie"
    ],
    "correctAnswer": "Adam and Russell",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S2E2 Fox Hunting",
      "Episode storyline",
      "Correct: Adam and Russell",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Parkinson Sons",
      "Lunch Cooking",
      "Ria Campaign"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37757",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what does the doctor advise Ben after his chest pains?",
    "answers": [
      "Have immediate surgery",
      "Take an extended holiday",
      "Adopt a healthier lifestyle",
      "Give up dentistry"
    ],
    "correctAnswer": "Adopt a healthier lifestyle",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S2E3 Worrying",
      "Episode storyline",
      "Correct: Adopt a healthier lifestyle",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ben Health",
      "Doctor Advice",
      "Chest Pain"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37758",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, where does Ria unexpectedly see Ben and Leonard both exercising?",
    "answers": [
      "A swimming pool",
      "A tennis court",
      "A leisure centre gym",
      "The park"
    ],
    "correctAnswer": "The park",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S2E3 Worrying",
      "Episode storyline",
      "Correct: The park",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ben Leonard",
      "Jogging",
      "Ria Surprise"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37759",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what does the doctor diagnose after Ria nearly runs over a dog?",
    "answers": [
      "Nervous exhaustion",
      "Arthritis",
      "Diabetes",
      "Food poisoning"
    ],
    "correctAnswer": "Nervous exhaustion",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S2E4 A Dog's Life",
      "Episode storyline",
      "Correct: Nervous exhaustion",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ria Diagnosis",
      "Doctor",
      "Nerves"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37760",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, why has neighbour Mrs Conrad been seeking comfort in church?",
    "answers": [
      "Her husband has lost his job",
      "She cannot have children",
      "She is moving away",
      "Her mother has died"
    ],
    "correctAnswer": "She cannot have children",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S2E4 A Dog's Life",
      "Episode storyline",
      "Correct: She cannot have children",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Mrs Conrad",
      "Childlessness",
      "Church"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37761",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what illness is Leonard recovering from when Ria visits him?",
    "answers": [
      "Chickenpox",
      "Pneumonia",
      "Pleurisy",
      "Appendicitis"
    ],
    "correctAnswer": "Pleurisy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S2E5 Keeping Fit",
      "Episode storyline",
      "Correct: Pleurisy",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Leonard Illness",
      "Pleurisy",
      "Ria Concern"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37762",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what does Ria make for the unwell Leonard?",
    "answers": [
      "A chocolate cake",
      "A knitted scarf",
      "A drawing of the park",
      "A get-well-soon card"
    ],
    "correctAnswer": "A get-well-soon card",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S2E5 Keeping Fit",
      "Episode storyline",
      "Correct: A get-well-soon card",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ria Sympathy",
      "Card",
      "Leonard"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37763",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, where does Leonard suggest taking Ria for a weekend away?",
    "answers": [
      "Birmingham",
      "Brighton",
      "Bristol",
      "Edinburgh"
    ],
    "correctAnswer": "Birmingham",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S2E6 An Attractive Visitor",
      "Episode storyline",
      "Correct: Birmingham",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Leonard Weekend",
      "Birmingham",
      "Temptation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37764",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, whom does Leonard take away instead when Ria declines?",
    "answers": [
      "Ruby",
      "Susanna",
      "Annie",
      "Amanda"
    ],
    "correctAnswer": "Susanna",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S2E6 An Attractive Visitor",
      "Episode storyline",
      "Correct: Susanna",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Susanna Visitor",
      "Leonard Trip",
      "Ria Jealousy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37765",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what news does Leonard give Ria about his marriage?",
    "answers": [
      "He has married Susanna",
      "His wife is moving to Canada",
      "He hopes to get back with his wife",
      "He has filed for a divorce"
    ],
    "correctAnswer": "He hopes to get back with his wife",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S2E7 Lunch with Leonard",
      "Episode storyline",
      "Correct: He hopes to get back with his wife",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Leonard Wife",
      "Reconciliation",
      "Ria Upset"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37766",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, why does Ria avoid a café when Ben takes her out that evening?",
    "answers": [
      "The café has closed for repairs",
      "The owner was rude to her",
      "She has forgotten her purse there",
      "It is where she first met Leonard"
    ],
    "correctAnswer": "It is where she first met Leonard",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S2E7 Lunch with Leonard",
      "Episode storyline",
      "Correct: It is where she first met Leonard",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ria Memories",
      "Original Café",
      "Ben"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37767",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, where do Ria and Leonard meet on Christmas Eve?",
    "answers": [
      "In the park",
      "At the railway station",
      "At a restaurant",
      "At Leonard's office"
    ],
    "correctAnswer": "In the park",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S2E8 Christmas with the Parkinsons",
      "Episode storyline",
      "Correct: In the park",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Christmas Eve",
      "Park Meeting",
      "Leonard"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37768",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what anonymous gift from Leonard makes Ria wistful on Christmas Day?",
    "answers": [
      "A record player",
      "A musical Christmas card",
      "An expensive brooch",
      "A bottle of perfume"
    ],
    "correctAnswer": "A musical Christmas card",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S2E8 Christmas with the Parkinsons",
      "Episode storyline",
      "Correct: A musical Christmas card",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Leonard Gift",
      "Musical Card",
      "Christmas"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37769",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what cargo does Adam drive to London in his new job?",
    "answers": [
      "Furniture",
      "Coal",
      "Timber",
      "Farm machinery"
    ],
    "correctAnswer": "Timber",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S3E1 An Empty Cage",
      "Episode storyline",
      "Correct: Timber",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Adam Lorry",
      "Timber",
      "London"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37770",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what has happened on the road to London according to a radio traffic report?",
    "answers": [
      "A bridge has collapsed",
      "A coach has overturned",
      "A railway crossing is broken",
      "A lorry has shed its load of timber"
    ],
    "correctAnswer": "A lorry has shed its load of timber",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S3E1 An Empty Cage",
      "Episode storyline",
      "Correct: A lorry has shed its load of timber",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Timber Spill",
      "Adam Journey",
      "Traffic"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37771",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what troubling habit does Ria help the housekeeper Ruby overcome?",
    "answers": [
      "Shoplifting",
      "Gambling",
      "Smoking",
      "Drinking at work"
    ],
    "correctAnswer": "Shoplifting",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S3E2 Ruby's Crisis",
      "Episode storyline",
      "Correct: Shoplifting",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ruby Crisis",
      "Theft",
      "Ria Helps"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37772",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what does Jeannie want after telling Russell she is pregnant?",
    "answers": [
      "To move abroad with Russell",
      "To have the baby without marrying him",
      "To marry Adam instead",
      "To leave the baby with Ben and Ria"
    ],
    "correctAnswer": "To have the baby without marrying him",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S3E3 Pregnancy",
      "Episode storyline",
      "Correct: To have the baby without marrying him",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Jeannie",
      "Baby",
      "Marriage Refusal"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37773",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what does the family initially assume after Jeannie leaves Russell a note?",
    "answers": [
      "She wants to move to London",
      "She is about to marry Adam",
      "She is not pregnant after all",
      "She has lost her job"
    ],
    "correctAnswer": "She is not pregnant after all",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S3E3 Pregnancy",
      "Episode storyline",
      "Correct: She is not pregnant after all",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Jeannie Note",
      "Misunderstanding",
      "Family"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37774",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what happens to Adam's job as family tensions grow?",
    "answers": [
      "He wins a promotion",
      "He is transferred abroad",
      "He resigns to study",
      "He is sacked"
    ],
    "correctAnswer": "He is sacked",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S3E4 Problems Problems",
      "Episode storyline",
      "Correct: He is sacked",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Adam Job Loss",
      "Family Stress",
      "Employment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37775",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what has Ben taken when Ria tries to confide in him?",
    "answers": [
      "Sleeping pills",
      "A painkiller",
      "An allergy tablet",
      "A cough mixture"
    ],
    "correctAnswer": "Sleeping pills",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S3E4 Problems Problems",
      "Episode storyline",
      "Correct: Sleeping pills",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ben Asleep",
      "Ria Problems",
      "Pills"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37776",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what does Leonard secretly book near Ria during her birthday trip to London?",
    "answers": [
      "A seat on her return train",
      "An adjoining hotel room",
      "A table at Ben's restaurant",
      "A room for the boys"
    ],
    "correctAnswer": "An adjoining hotel room",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S3E5 Happy Birthday Ria",
      "Episode storyline",
      "Correct: An adjoining hotel room",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Leonard Hotel",
      "London",
      "Birthday"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37777",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what does Ria agree to do with Leonard while refusing to pursue an affair?",
    "answers": [
      "Travel to New York",
      "Stay with him for a week",
      "Spend an afternoon sightseeing",
      "Attend a wedding as his partner"
    ],
    "correctAnswer": "Spend an afternoon sightseeing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S3E5 Happy Birthday Ria",
      "Episode storyline",
      "Correct: Spend an afternoon sightseeing",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Leonard",
      "Sightseeing",
      "Ria Boundaries"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37778",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what project are Adam and Russell digging in the garden?",
    "answers": [
      "A swimming pool",
      "A vegetable plot",
      "A wine cellar",
      "A fallout shelter"
    ],
    "correctAnswer": "A fallout shelter",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S3E6 Gimme Shelter",
      "Episode storyline",
      "Correct: A fallout shelter",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Sons Digging",
      "Fallout Shelter",
      "Cold War"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37779",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what does Kathleen ask Ria to pretend to her husband Tony?",
    "answers": [
      "That they have been together while Kathleen meets her lover",
      "That Kathleen has won a lottery prize",
      "That Ria has bought a new house",
      "That Kathleen has taken a new job"
    ],
    "correctAnswer": "That they have been together while Kathleen meets her lover",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S3E6 Gimme Shelter",
      "Episode storyline",
      "Correct: That they have been together while Kathleen meets her lover",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Kathleen",
      "Tony",
      "Deception"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37780",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, who overhears enough to learn about his mother's feelings for Leonard?",
    "answers": [
      "Russell",
      "Adam",
      "Ben",
      "Thomas"
    ],
    "correctAnswer": "Adam",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S3E6 Gimme Shelter",
      "Episode storyline",
      "Correct: Adam",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Adam Overhears",
      "Ria Secret",
      "Leonard"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37781",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what disruption complicates Ben and Leonard's travel plans?",
    "answers": [
      "A rail strike",
      "A snowstorm",
      "An airport strike",
      "A motorway closure"
    ],
    "correctAnswer": "An airport strike",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S3E7 Parting",
      "Episode storyline",
      "Correct: An airport strike",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Airport Strike",
      "Departure Plans",
      "Ria Dilemma"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37782",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, where does Ria spend the night when Leonard's flight is postponed?",
    "answers": [
      "At a hotel with Ben",
      "At Ruby's home",
      "At Kathleen's house",
      "At Leonard's flat"
    ],
    "correctAnswer": "At Leonard's flat",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S3E7 Parting",
      "Episode storyline",
      "Correct: At Leonard's flat",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Leonard Flat",
      "Overnight",
      "Ria"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37783",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, where does Ria hide Leonard's letter when Ruby comes in?",
    "answers": [
      "Inside a magazine",
      "Under the sofa",
      "Behind a kitchen tile",
      "In Ben's butterfly cabinet"
    ],
    "correctAnswer": "Inside a magazine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S4E1 Back from New York",
      "Episode storyline",
      "Correct: Inside a magazine",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Secret Letter",
      "Magazine",
      "Ruby"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37784",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, who mistakenly believes Leonard's fairly innocent letter is from an old schoolfriend?",
    "answers": [
      "Adam",
      "Ben",
      "Russell",
      "Ruby"
    ],
    "correctAnswer": "Ben",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S4E1 Back from New York",
      "Episode storyline",
      "Correct: Ben",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ben Reads Letter",
      "Schoolfriend Assumption",
      "Ria"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37785",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, which city does Ben promise to take Ria to for lunch?",
    "answers": [
      "London",
      "Birmingham",
      "Paris",
      "Oxford"
    ],
    "correctAnswer": "Paris",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S4E2 Amanda",
      "Episode storyline",
      "Correct: Paris",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ben Ria",
      "Paris Trip",
      "Marriage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37786",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what do the boys' party guests leave behind that alarms Ben?",
    "answers": [
      "A box of stolen jewellery",
      "A bag of fireworks",
      "A collection of forged cheques",
      "A tin of cannabis"
    ],
    "correctAnswer": "A tin of cannabis",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S4E3 Pot",
      "Episode storyline",
      "Correct: A tin of cannabis",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Sons Party",
      "Cannabis",
      "Ben"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37787",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what personal reminder does Leonard tear up when he believes their relationship will go nowhere?",
    "answers": [
      "A photograph of Ria",
      "An airline ticket",
      "A birthday card",
      "A diary page"
    ],
    "correctAnswer": "A photograph of Ria",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S4E3 Pot",
      "Episode storyline",
      "Correct: A photograph of Ria",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Leonard",
      "Photograph",
      "Heartbreak"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37788",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what possession does Leonard deliberately leave in Ria's car?",
    "answers": [
      "His watch",
      "His diary",
      "His briefcase",
      "His umbrella"
    ],
    "correctAnswer": "His diary",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S4E4 Cleaning Windows",
      "Episode storyline",
      "Correct: His diary",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Leonard Diary",
      "Ria Car",
      "Phone Call"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37789",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what new family status makes Ria suddenly feel old?",
    "answers": [
      "She becomes a stepmother",
      "She becomes an aunt",
      "She becomes a grandmother",
      "She becomes a mother-in-law"
    ],
    "correctAnswer": "She becomes a grandmother",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S4E4 Cleaning Windows",
      "Episode storyline",
      "Correct: She becomes a grandmother",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Russell Father",
      "Jeannie Baby",
      "Ria"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37790",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what does Ben do with a butterfly after receiving a mysterious phone call from Leonard?",
    "answers": [
      "He mounts it in a frame",
      "He gives it to Ria",
      "He brings it to his surgery",
      "He lets it go free"
    ],
    "correctAnswer": "He lets it go free",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S4E5 Calling",
      "Episode storyline",
      "Correct: He lets it go free",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ben Butterfly",
      "Release",
      "Marriage Symbol"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37791",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, why does Russell feel rejected after visiting Jeannie?",
    "answers": [
      "She wants the baby but does not want a relationship with him",
      "She wants to move to America",
      "She has started dating Adam",
      "She refuses to let the baby see Ria"
    ],
    "correctAnswer": "She wants the baby but does not want a relationship with him",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S4E5 Calling",
      "Episode storyline",
      "Correct: She wants the baby but does not want a relationship with him",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Russell Jeannie",
      "Baby",
      "Heartbreak"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37792",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, which son tells Ria that Ben is lucky to have such a faithful wife?",
    "answers": [
      "Russell",
      "Adam",
      "Neither son",
      "Both sons together"
    ],
    "correctAnswer": "Adam",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S4E6 Breaking Up",
      "Episode storyline",
      "Correct: Adam",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Adam Support",
      "Mother Son",
      "Marriage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37793",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, who witnesses Ria breaking away from Leonard?",
    "answers": [
      "Ruby",
      "Adam",
      "Ben",
      "Thomas"
    ],
    "correctAnswer": "Ben",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S4E6 Breaking Up",
      "Episode storyline",
      "Correct: Ben",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ben Witness",
      "Leonard Breakup",
      "Ria"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37794",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what does Ria do before her last encounter with Leonard in the park?",
    "answers": [
      "Sells the family home",
      "Resigns from work",
      "Books a flight to New York",
      "Packs her bags to leave"
    ],
    "correctAnswer": "Packs her bags to leave",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S4E7 Loose Ends",
      "Episode storyline",
      "Correct: Packs her bags to leave",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ria Bags",
      "Final Decision",
      "Leonard"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37795",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what does Ria ultimately decide after seeing Leonard again?",
    "answers": [
      "She returns to Ben and her family",
      "She emigrates with Leonard",
      "She leaves home to live alone",
      "She takes a permanent job overseas"
    ],
    "correctAnswer": "She returns to Ben and her family",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "S4E7 Loose Ends",
      "Episode storyline",
      "Correct: She returns to Ben and her family",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ria Returns",
      "Ben",
      "Marriage Ending"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37796",
    "category": "Television",
    "programme": "Butterflies",
    "question": "In Butterflies, what milestone causes Ria to wonder how different choices might have changed her life?",
    "answers": [
      "Turning fifty",
      "Turning sixty",
      "Turning seventy",
      "Turning forty"
    ],
    "correctAnswer": "Turning sixty",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Classic Sitcom",
      "BBC Two",
      "Butterflies",
      "Programme: Butterflies",
      "1978-1983",
      "Carla Lane",
      "2000 Children in Need special",
      "Episode storyline",
      "Correct: Turning sixty",
      "Source: https://www.thetvdb.com/series/butterflies/allseasons/dvd",
      "Ria Sixty",
      "Life Reflection",
      "Reunion"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length !== 119 ||
 questions[0].id !== 'tv_16166' || questions[60].id !== 'tv_16226' ||
 auditAdditions[0].id !== 'tv_37739' || auditAdditions[auditAdditions.length-1].id !== 'tv_37796' ||
 new Set(questions.map(q=>q.id)).size !== questions.length ||
 new Set(questions.map(q=>normalise(q.question))).size !== questions.length ||
 questions.some(q=>q.answers.length!==4||new Set(q.answers.map(normalise)).size!==4||
 q.answers.filter(a=>a===q.correctAnswer).length!==1||q.programme!=='Butterflies'||
 !q.tags.includes('Programme: Butterflies')||q.tags.length<15||q.dailyEligible!==true)||
 auditAdditions.some(q=>!q.question.startsWith('In Butterflies, ')||!q.tags.some(t=>t.startsWith('Source: https://'))))
 throw Error('Pack 340 audit validation failed');
module.exports = questions;
