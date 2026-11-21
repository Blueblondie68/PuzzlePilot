
 // quiz_pack341.js — PuzzlePilot Bigggggg Quiz
 // The Good Life (1975–1978): 4 series and 2 specials.
 // 83 questions, IDs tv_16227–tv_16309.
 // Seven individually selected specialist tags per question.

 const facts = `
 Who played Tom Good in The Good Life?|Richard Briers|Paul Eddington|Peter Bowles|Richard Beckinsale|Easy|Tom Good|Richard Briers|Lead Actor|Character Casting|Self Sufficiency|1975 Sitcom|Good Family
 Which actress portrayed Barbara Good?|Felicity Kendal|Penelope Keith|Wendy Craig|Prunella Scales|Easy|Barbara Good|Felicity Kendal|Lead Actress|Character Casting|Tom Wife|1970s Sitcom|Good Family
 Who played the Goods' neighbour Margo Leadbetter?|Penelope Keith|Felicity Kendal|Mollie Sugden|Judy Cornwell|Easy|Margo Leadbetter|Penelope Keith|Character Casting|Neighbour|Suburban Society|1970s Sitcom|Leadbetter Family
 Which actor portrayed Jerry Leadbetter?|Paul Eddington|Richard Briers|Geoffrey Palmer|Derek Fowlds|Easy|Jerry Leadbetter|Paul Eddington|Character Casting|Neighbour|Margo Husband|1970s Sitcom|Leadbetter Family
 Which writing partnership created The Good Life?|John Esmonde and Bob Larbey|Dick Clement and Ian La Frenais|Ray Galton and Alan Simpson|Jimmy Perry and David Croft|Medium|John Esmonde|Bob Larbey|Creators|Sitcom Writing|BBC Credits|Writing Partnership|Programme Origins
 Who directed and produced the original sitcom The Good Life?|John Howard Davies|Sydney Lotterby|Gareth Gwenlan|David Croft|Medium|John Howard Davies|Television Direction|Series Producer|BBC Comedy|Behind The Scenes|Programme Credits|1970s Production
 In which year did The Good Life begin on BBC television?|1975|1973|1977|1980|Easy|1975 Premiere|Original Transmission|First Broadcast|Series One|Programme Timeline|1970s Television|Show Launch
 Which BBC channel first broadcast The Good Life?|BBC One|BBC Two|BBC Three|ITV|Easy|BBC One|Broadcaster|1975 Debut|National Channel|Series Network|Programme History|Transmission
 In which part of London do Tom and Barbara attempt self-sufficiency?|Surbiton|Hampstead|Croydon|Highgate|Easy|Surbiton|South West London|Series Setting|Suburban Life|Good Family|Self Sufficiency|Location
 What birthday prompts Tom Good to reconsider his career?|His fortieth|His thirtieth|His fiftieth|His sixty-fifth|Easy|Tom Good|Fortieth Birthday|Career Change|Series Premiere|Life Crisis|Plough Your Own Furrow|Self Sufficiency
 What was Tom Good's job before he resigned to live self-sufficiently?|Draughtsman|Dentist|Schoolteacher|Journalist|Medium|Tom Good|Draughtsman|Previous Employment|Office Work|Career Resignation|Self Sufficiency|Character Background
 What lifestyle do Tom and Barbara adopt after Tom gives up his job?|Self-sufficiency|Working on a cruise ship|Running a hotel|Travelling in a caravan|Easy|Self Sufficiency|Tom And Barbara|Growing Food|Home Farming|Sustainable Living|Suburban Garden|Series Premise
 What is the surname of Tom and Barbara's socially ambitious neighbours?|Leadbetter|Parkinson|Ferris|Collier|Easy|Leadbetter Family|Margo Leadbetter|Jerry Leadbetter|Next Door Neighbours|Character Names|Suburban Society|Family Surname
 By what title was The Good Life also known in the United States?|Good Neighbors|The Suburbanites|The Happy Gardeners|Neighbourhood Watch|Medium|Good Neighbors|American Title|International Broadcast|Programme Naming|US Television|Syndication|Alternative Title
 How many regular series of The Good Life were produced?|Four|Three|Five|Six|Easy|Four Series|Programme Run|1975 To 1977|Series Structure|Series Count|Weekly Broadcast|Production History
 How many regular episodes of The Good Life were made before counting its two specials?|Twenty-eight|Thirty|Twenty-four|Thirty-two|Medium|Twenty Eight Episodes|Regular Run|Four Series|Programme Count|Episode History|1975 To 1977|British Sitcom
 Including its Christmas and Royal Command specials, how many original episodes of The Good Life aired?|Thirty|Twenty-eight|Thirty-two|Twenty-six|Medium|Thirty Episodes|Two Specials|Royal Command|Christmas Special|Broadcast Total|Programme History|Episode Count
 Which year saw the fourth and final regular series of The Good Life?|1977|1976|1978|1980|Medium|1977|Series Four|Regular Finale|Programme Timeline|Final Season|Original Run|Broadcast Year
 Which animals are named Pinky and Perky in The Good Life?|The Goods' pigs|The Goods' hens|The Leadbetters' dogs|The Goods' goats|Easy|Pinky And Perky|Pigs|Good Household|Animal Names|Urban Farming|Livestock|Character Detail
 Which animal is named after neighbour Margo in the first series?|A goat|A duck|A pig|A cockerel|Medium|Margo Goat|Animal Naming|Say Little Hen|Series One|Good Livestock|Neighbour Reference|Character Joke
 What name do the Goods give their cockerel?|Lenin|Stalin|Trotsky|Marx|Medium|Lenin Cockerel|Poultry|Say Little Hen|Animal Name|Good Livestock|Series One|Hen House
 Which actor portrayed the boss often addressed as Sir Andrew?|Reginald Marsh|George Cole|John Howard Davies|Peter Vaughan|Medium|Reginald Marsh|Sir Andrew|Character Casting|Company Boss|Recurring Role|Office Career|Supporting Cast
 In what real London-area location were the exteriors of the Good and Leadbetter houses filmed?|Northwood|Richmond|Greenwich|Brixton|Hard|Northwood|Kewferry Road|Exterior Filming|Location Production|Hillingdon|Suburban Houses|BBC Setting
 Which episode opens The Good Life with Tom deciding to abandon his career?|Plough Your Own Furrow|Just My Bill|The Early Birds|Away from It All|Medium|Plough Your Own Furrow|Series One Premiere|Tom Resigns|Career Change|1975 Episode|Self Sufficiency|Episode Title
 In Plough Your Own Furrow, who agrees to join Tom's self-sufficiency plan?|Barbara|Margo|Jerry|Sir Andrew|Easy|Barbara Good|Plough Your Own Furrow|Marriage Support|Career Change|Series One|Self Sufficiency|Character Decision
 Which first-series episode introduces a goat and a cockerel to the Goods' new lifestyle?|Say Little Hen...|Pig's Lib|The Pagan Rite|The Weaker Sex?|Medium|Say Little Hen|Goat|Cockerel|Village Poultry|Series One|Animal Keeping|Episode Title
 In The Weaker Sex?, what old household appliance must Barbara restore?|A kitchen range|A washing machine|A refrigerator|A television set|Medium|The Weaker Sex|Kitchen Range|Barbara Good|Domestic Labour|Series One|Equipment Repair|Episode Detail
 Which menace threatens the Goods' emerging vegetables in The Weaker Sex??|Birds|Rabbits|Foxes|Deer|Medium|The Weaker Sex|Vegetable Patch|Garden Birds|Crop Protection|Series One|Good Garden|Episode Problem
 Which episode introduces the pigs Pinky and Perky?|Pig's Lib|The Happy Event|Going to Pot?|Just My Bill|Medium|Pigs Lib|Pinky|Perky|New Livestock|Series One|Pig Keeping|Episode Title
 Who initially objects so strongly to Pinky and Perky that they are sent away?|Margo Leadbetter|Jerry Leadbetter|Sir Andrew|Barbara Good|Easy|Margo Leadbetter|Pinky And Perky|Pigs Lib|Neighbour Conflict|Series One|Animal Complaints|Episode Conflict
 In The Thing in the Cellar, what does Tom attempt to generate from animal waste?|Electricity|Cooking oil|Drinking water|Fertiliser pellets|Medium|Thing In The Cellar|Animal Waste|Electric Generator|Off Grid|Series One|Homemade Engineering|Episode Plot
 Whose freezer does Tom need when his homemade electricity generator fails?|Jerry's|Margo's brother's|Sir Andrew's|A shopkeeper's|Easy|Thing In The Cellar|Jerry Leadbetter|Freezer|Failed Generator|Series One|Neighbourly Help|Episode Consequence
 In The Pagan Rite, what kind of paid work does Tom consider accepting again?|Freelance work|Taxi driving|Teaching|Running a shop|Medium|The Pagan Rite|Freelance Work|Old Boss|Barbara Gift|Series One|Employment Temptation|Episode Plot
 Why does Tom want to earn extra money in The Pagan Rite?|To give Barbara a treat|To buy a sports car|To pay for a holiday abroad|To move house|Medium|The Pagan Rite|Barbara Good|Personal Treat|Freelance Income|Tom Good|Series One|Marriage Gesture
 In Backs to the Wall, what injury prevents Tom from helping with the harvest?|A back injury|A broken ankle|A sprained wrist|A fractured arm|Medium|Backs To The Wall|Tom Injury|Harvest|Series One Finale|Medical Problem|Garden Work|Episode Plot
 What danger makes gathering the harvest particularly urgent in Backs to the Wall?|Approaching storms|A planned demolition|An invasion of locusts|A water shortage|Medium|Backs To The Wall|Storm Warning|Harvest Deadline|Barbara Good|Series One Finale|Crop Protection|Episode Stakes
 Which episode begins series two with the Goods struggling to pay their rates?|Just My Bill|Mutiny|Going to Pot?|The Guru of Surbiton|Medium|Just My Bill|Rates Bill|Series Two Premiere|Financial Struggle|Selling Produce|1975 Episode|Episode Title
 What leaves Tom and Barbara with just one penny in Just My Bill?|Paying their rates|Buying a new generator|Paying a fine|Buying livestock|Medium|Just My Bill|One Penny|Rates Payment|Household Finances|Series Two|Good Poverty|Episode Ending
 Which episode features students observing the Goods' self-sufficient lifestyle?|The Guru of Surbiton|Mr. Fix-It|Home Sweet Home|A Tug of the Forelock|Medium|Guru Of Surbiton|Visiting Students|Self Sufficiency|Series Two|Commune Idea|Lifestyle Study|Episode Title
 What kind of community do Guy and Ruth suggest in The Guru of Surbiton?|A self-sufficiency commune|A religious boarding school|A suburban business park|A retirement village|Medium|Guru Of Surbiton|Guy And Ruth|Commune Plan|Tom Good|Series Two|Student Visitors|Episode Proposal
 In which episode does a journalist want to interview Tom and Barbara?|Mr. Fix-It|Mutiny|The Early Birds|Suit Yourself|Medium|Mr Fix It|Journalist|Publicity|Margo Leadbetter|Series Two|Newspaper Feature|Episode Title
 Who sees an opportunity for self-promotion when a journalist approaches the Goods?|Margo|Barbara|Jerry|Mrs. Weaver|Medium|Mr Fix It|Margo Leadbetter|Self Promotion|Journalist|Series Two|Social Ambition|Episode Conflict
 What crop disappears from Tom's garden in The Day Peace Broke Out?|Leeks|Carrots|Cabbages|Potatoes|Medium|Day Peace Broke Out|Leek Theft|Vegetable Garden|Tom Good|Series Two|Crime Mystery|Episode Plot
 In Mutiny, what musical is Margo involved in performing?|The Sound of Music|My Fair Lady|Oliver!|The King and I|Medium|Mutiny|Margo Leadbetter|Sound Of Music|Amateur Theatre|Series Two|Performance|Episode Plot
 What important business event clashes with Margo's performance in Mutiny?|Entertaining an important client|Jerry's retirement party|A company merger vote|Tom's job interview|Medium|Mutiny|Business Client|Jerry Leadbetter|Sir Andrew|Margo Performance|Series Two|Scheduling Conflict
 Which episode offers the Goods an opportunity to improve their income?|Home Sweet Home|The Early Birds|The Green Door|Whose Fleas Are These?|Medium|Home Sweet Home|Income Opportunity|Series Two|Good Household|Business Prospects|1976 Episode|Episode Title
 In Going to Pot?, which craft does Barbara learn alongside Margo?|Pottery|Weaving|Woodcarving|Glassblowing|Medium|Going To Pot|Pottery Class|Barbara Good|Margo Leadbetter|Series Two|Evening School|Episode Skill
 What type of college do the Goods attend after a home-repair mishap in Going to Pot??|A council-run evening school|A residential art college|An agricultural university|A boarding school|Medium|Going To Pot|Evening Classes|House Maintenance|Adult Education|Series Two Finale|Local Council|Episode Setting
 Which episode begins series three with the Goods adopting nature's daily timetable?|The Early Birds|I Talk to the Trees|The Happy Event|Away from It All|Medium|Early Birds|Nature Clock|Series Three Premiere|Early Rising|Leadbetter Disturbance|Self Sufficiency|Episode Title
 Whom do Tom and Barbara accidentally disturb by rising too early in The Early Birds?|Margo and Jerry|Sir Andrew and his wife|Guy and Ruth|A pair of visiting students|Medium|Early Birds|Margo And Jerry|Early Morning Noise|Series Three|Neighbours|Natural Routine|Episode Conflict
 Which animal gives birth in The Happy Event?|Pinky the pig|Margo the goat|Lenin the cockerel|A visiting cow|Easy|The Happy Event|Pinky Pig|Animal Birth|Series Three|Livestock Care|Night Labour|Episode Title
 In A Tug of the Forelock, what work do the Goods do for the Leadbetters?|Cleaning their house|Driving their car|Building their garage|Caring for their children|Medium|Tug Of The Forelock|House Cleaning|Leadbetter Employment|Series Three|Service Work|Class Tensions|Episode Plot
 Why do Tom and Barbara take cleaning work for the Leadbetters in A Tug of the Forelock?|To pay for fuel for their transport|To pay an overdue television licence|To buy a holiday cottage|To repay a bank loan|Medium|Tug Of The Forelock|Transport Fuel|House Cleaning|Good Finances|Series Three|Paid Work|Episode Motivation
 Which episode follows Tom and Barbara experimenting to improve vegetable yields?|I Talk to the Trees|The Wind-Break War|The Weaver's Tale|Mr. Fix-It|Medium|I Talk To The Trees|Garden Experiments|Produce Yield|Series Three|Plant Growth|Fellow Gardener|Episode Title
 What does Margo plan to erect that threatens the Goods' fruit patch in The Wind-Break War?|A wind-break|A conservatory|A summerhouse|A greenhouse|Medium|Wind Break War|Garden Screen|Fruit Patch|Margo Leadbetter|Series Three|Neighbour Dispute|Episode Plot
 Why does the proposed structure in The Wind-Break War worry Tom and Barbara?|It would cast shade on their fruit patch|It would block their front door|It would attract foxes|It would ruin their water supply|Medium|Wind Break War|Cast Shadow|Fruit Patch|Sunlight|Series Three|Garden Conflict|Episode Consequence
 What pest infests the Goods' home in Whose Fleas Are These??|Fleas|Moths|Ants|Mice|Easy|Whose Fleas Are These|Flea Infestation|Good House|Series Three|Household Pests|Neighbour Contamination|Episode Plot
 Which household do the Goods fear they have contaminated with fleas?|The Leadbetters'|Sir Andrew's|Mrs. Weaver's|Guy and Ruth's|Medium|Whose Fleas Are These|Leadbetter House|Cross Household Contamination|Fleas|Series Three|Neighbour Concern|Episode Stakes
 In The Last Posh Frock, who misses the more glamorous side of her former life?|Barbara Good|Margo Leadbetter|Jerry Leadbetter|Sir Andrew|Easy|Last Posh Frock|Barbara Good|Self Sufficiency Sacrifice|Personal Identity|Series Three Finale|Clothing|Episode Storyline
 Which episode ends the third regular series of The Good Life?|The Last Posh Frock|The Early Birds|Anniversary|Going to Pot?|Medium|Last Posh Frock|Series Three Finale|1976|Episode Order|Barbara Good|Regular Run|Episode Title
 In Away from It All, who looks after the Goods' house during their weekend break?|Margo and Jerry|Guy and Ruth|Sir Andrew and his wife|Barbara's parents|Easy|Away From It All|Margo And Jerry|House Sitting|Series Four Premiere|Weekend Away|Neighbourly Help|Episode Plot
 Which episode sees Tom and Barbara become suspicious about Margo's secretive behaviour?|The Green Door|Our Speaker Today|Suit Yourself|The Weaver's Tale|Medium|The Green Door|Margo Secret|Marital Worries|Series Four|Suspicion|Leadbetter Marriage|Episode Title
 Where are the Goods collecting manure when their suspicions begin in The Green Door?|A pony club|A riding school in France|A zoo|A cattle market|Hard|The Green Door|Pony Club|Manure Collection|Good Garden|Margo Leadbetter|Series Four|Episode Detail
 Who is asked to give a talk on self-sufficiency in Our Speaker Today?|Barbara Good|Tom Good|Jerry Leadbetter|Margo Leadbetter|Medium|Our Speaker Today|Barbara Speaker|Self Sufficiency Talk|Series Four|Public Speaking|Women's Group|Episode Plot
 Which titled visitor encourages Barbara's speaking engagements in Our Speaker Today?|Lady George Truskett|Lady Bracknell|Dame Edith Evans|Lady Felicity Marsh|Hard|Our Speaker Today|Lady George Truskett|Barbara Good|Public Lectures|Series Four|Guest Character|Speaking Engagement
 In The Weaver's Tale, what piece of equipment does Tom decide to buy?|A loom|A lathe|A pottery wheel|A printing press|Medium|Weavers Tale|Loom|Cloth Production|Tom Good|Series Four|Home Industry|Episode Plot
 What goods do Tom and Barbara hope to produce after buying a loom?|Cloth|Leather shoes|Pottery vases|Soap|Medium|Weavers Tale|Cloth Making|Loom|Cottage Industry|Series Four|Textiles|Episode Objective
 In Suit Yourself, what major career opportunity is Jerry being considered for?|Taking over from Sir Andrew|Becoming a television presenter|Managing a school|Becoming a local councillor|Medium|Suit Yourself|Jerry Leadbetter|Sir Andrew Retirement|Promotion|Series Four|Company Succession|Episode Plot
 Which episode involves an oil spill contaminating the Goods' land?|Sweet and Sour Charity|The Day Peace Broke Out|Backs to the Wall|Just My Bill|Medium|Sweet And Sour Charity|Oil Spill|Land Pollution|Series Four|Garden Damage|Neighbour Conflict|Episode Title
 What causes trouble in the Goods' garden in Sweet and Sour Charity?|An oil spill from next door|A bee swarm|A landslide|A fox hunt|Medium|Sweet And Sour Charity|Oil Pollution|Neighbour Garden|Self Sufficiency|Series Four|Soil Contamination|Episode Plot
 What is the title of the final regular episode of The Good Life?|Anniversary|The Last Posh Frock|Going to Pot?|Away from It All|Medium|Anniversary|Series Four Finale|1977|Last Regular Episode|Finale Naming|Programme History|Episode Title
 What work-related worry troubles Jerry in Anniversary?|He may have missed out on a promotion|His company is closing permanently|He has been posted abroad|He is being investigated for theft|Medium|Anniversary|Jerry Leadbetter|Promotion Worry|Sir Andrew|Series Four Finale|Office Career|Episode Conflict
 What is the title of The Good Life's 1977 Christmas special?|Silly, But It's Fun...|A Christmas Good Life|Home Sweet Home|The Festive Furrow|Medium|Silly But Its Fun|Christmas 1977|Special Episode|Festive Sitcom|1977 Broadcast|Episode Title|Good Household
 Why does Margo reject the department-store Christmas delivery in the 1977 special?|The Christmas tree is too short|The food is missing|The turkey is too small|The decorations are the wrong colour|Medium|Silly But Its Fun|Margo Leadbetter|Christmas Tree|Delivery Refusal|Festive Episode|Consumer Demands|Episode Plot
 Whose home hosts the Leadbetters when their Christmas delivery fails?|Tom and Barbara's|Sir Andrew's|A local vicar's|The family hotel|Easy|Silly But Its Fun|Good Christmas|Neighbour Hospitality|Margo And Jerry|Christmas Special|Homemade Festivities|Episode Ending
 What do Tom and Barbara make themselves for Christmas in Silly, But It's Fun...?|Decorations and crackers|An electric train set|An inflatable snowman|A television set|Medium|Silly But Its Fun|Homemade Crackers|Paper Decorations|Self Sufficiency|Christmas 1977|Recycled Materials|Festive Preparations
 What animal do Margo and Jerry give the Goods as a Christmas present?|A cow|A horse|A goat|A donkey|Hard|Silly But Its Fun|Cow Gift|Margo And Jerry|Christmas Presents|Livestock|1977 Special|Neighbour Kindness
 Which special was recorded as a Royal Command Performance?|When I'm 65|Silly, But It's Fun...|The Last Posh Frock|Anniversary|Medium|When Im 65|Royal Command Performance|1978 Special|BBC One|Royal Audience|Final Episode|Episode Title
 Who attended the recording of the 1978 Royal Command Performance?|Queen Elizabeth II and Prince Philip|King Charles III and Queen Camilla|Princess Margaret and Lord Snowdon|The Queen Mother and Princess Anne|Medium|Elizabeth II|Prince Philip|Royal Command|When Im 65|BBC Television Centre|1978 Recording|Royal Guests
 What future concern worries Tom in When I'm 65?|Having no pension provision|Running out of seeds|Losing a football bet|Buying another house|Medium|When Im 65|Tom Good|Pension Planning|Retirement|Royal Command|1978 Finale|Episode Storyline
 Which actor played bank manager Mr Downs in When I'm 65?|George Cole|Paul Eddington|Reginald Marsh|Peter Bowles|Medium|George Cole|Mr Downs|Bank Manager|Guest Casting|When Im 65|1978 Special|Financial Advice
 What kind of competition do Tom and Jerry undertake in When I'm 65?|A running race|A swimming race|A gardening contest|A bicycle race|Medium|When Im 65|Running Race|Tom And Jerry|Fitness Rivalry|Retirement Anxiety|1978 Special|Episode Climax
 What exposes Tom and Jerry's attempt to cheat in the race?|Jerry's wallet is returned by a taxi driver|A neighbour takes a photograph|A television crew films them|A police officer recognises them|Hard|When Im 65|Jerry Wallet|Taxi Driver|Cheating|Fitness Race|1978 Special|Final Joke
 `;

 const FIRST_ID = 16227;
 const EXPECTED_COUNT = 83;

 const normalise = value =>
   String(value).normalize('NFKC').trim().toLocaleLowerCase('en-GB');

 const questions = facts.trim().split('\n')
   .map(line => line.trim())
   .filter(Boolean)
   .map((line, index) => {
     const id = `tv_${FIRST_ID + index}`;
     const fields = line.split('|').map(value => value.trim());

     if (fields.length !== 13 || fields.some(value => !value)) {
       throw new Error(`Pack 341: missing or invalid field at ${id}`);
     }

     const [
       question, correctAnswer, wrong1, wrong2, wrong3,
       difficulty, ...specificTags
     ] = fields;

     if (
       !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
       specificTags.length !== 7
     ) {
       throw new Error(`Pack 341: invalid difficulty or tags at ${id}`);
     }

     const answers = [wrong1, wrong2, wrong3];

     if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4) {
       throw new Error(`Pack 341: duplicate answer at ${id}`);
     }

     answers.splice(index % 4, 0, correctAnswer);

     const tags = [...new Map([
       'Television',
       'British Television',
       'British Comedy',
       'Sitcom',
       'Classic Sitcom',
       'BBC One',
       '1975-1978',
       'The Good Life',
       'Programme: The Good Life',
       ...specificTags,
       correctAnswer
     ].map(tag => [normalise(tag), tag])).values()];

     return {
       id,
       category: 'Television',
       programme: 'The Good Life',
       question,
       answers,
       correctAnswer,
       difficulty,
       tags,
       dailyEligible: true
     };
   });

 // Validate the actual exported question objects, not just the source lines.
 if (
   questions.length !== EXPECTED_COUNT ||
   questions[0].id !== 'tv_16227' ||
   questions[questions.length - 1].id !== 'tv_16309'
 ) {
   throw new Error('Pack 341: incorrect question count or ID range');
 }

 const seen = new Set();
 for (let index = 0; index < questions.length; index++) {
   const q = questions[index];
   const key = normalise(q.question);

   if (
     q.id !== `tv_${FIRST_ID + index}` ||
     q.category !== 'Television' ||
     q.programme !== 'The Good Life' ||
     seen.has(key) ||
     q.answers.length !== 4 ||
     new Set(q.answers.map(normalise)).size !== 4 ||
     q.answers.filter(answer => answer === q.correctAnswer).length !== 1 ||
     q.tags.length < 15 ||
     !q.tags.includes('Programme: The Good Life') ||
     q.dailyEligible !== true
   ) {
     throw new Error(`Pack 341: exported-object check failed at ${q.id}`);
   }

   seen.add(key);
 }
// 21 November 2026 — The Good Life storyline audit.
// All 83 original questions remain unchanged, IDs tv_16227–tv_16309.
// New entries cover 28 regular episodes across four series and both
// original specials; sources/episodes are documented within each item.
const auditAdditions = [
  {
    "id": "tv_37797",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what is Tom weary of when he decides to change his life at forty?",
    "answers": [
      "The commuting and office rat race",
      "His role as a parent",
      "Running a country hotel",
      "A failed farming business"
    ],
    "correctAnswer": "The commuting and office rat race",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S1E1 Plough Your Own Furrow",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: The commuting and office rat race",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1/",
      "Tom Dissatisfaction",
      "Suburban Routine",
      "Life Change"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37798",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what aspect of the Goods' new plans particularly unsettles Margo and Jerry?",
    "answers": [
      "Moving abroad without telling them",
      "Turning the suburban garden into a working smallholding",
      "Opening a nightclub",
      "Taking up caravan racing"
    ],
    "correctAnswer": "Turning the suburban garden into a working smallholding",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S1E1 Plough Your Own Furrow",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Turning the suburban garden into a working smallholding",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1/",
      "Neighbour Relations",
      "Self Sufficiency",
      "Suburban Garden"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37799",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what difficulty do the Goods encounter with their first chickens?",
    "answers": [
      "They escape into the road",
      "They refuse to eat their feed",
      "They are slow to lay eggs",
      "They chase the neighbours"
    ],
    "correctAnswer": "They are slow to lay eggs",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S1E2 Say Little Hen...",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: They are slow to lay eggs",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1/",
      "Shy Hens",
      "Egg Production",
      "First Livestock"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37800",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what do Tom and Barbara consider serving for dinner to challenge the Leadbetters' belief they are poor?",
    "answers": [
      "A roast goose",
      "A homegrown turkey",
      "A rabbit caught in the garden",
      "One of their chickens"
    ],
    "correctAnswer": "One of their chickens",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S1E2 Say Little Hen...",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: One of their chickens",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1/",
      "Chicken Dinner",
      "Margo Condescension",
      "Dinner Guests"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37801",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, from whom does Tom acquire the old-fashioned range Barbara must repair?",
    "answers": [
      "A rag-and-bone man",
      "Jerry Leadbetter",
      "A local auctioneer",
      "His former boss"
    ],
    "correctAnswer": "A rag-and-bone man",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S1E3 The Weaker Sex?",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: A rag-and-bone man",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1/",
      "Kitchen Range",
      "Rag And Bone",
      "Barbara Workload"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37802",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, why does Barbara feel she is doing more than her share of work?",
    "answers": [
      "Tom goes on holiday with Jerry",
      "Tom leaves her to restore the range while he protects the crops",
      "Tom returns to full-time employment",
      "Tom hires an unreliable builder"
    ],
    "correctAnswer": "Tom leaves her to restore the range while he protects the crops",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S1E3 The Weaker Sex?",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Tom leaves her to restore the range while he protects the crops",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1/",
      "Unfair Workload",
      "Crop Scare Device",
      "Marriage Tension"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37803",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, who is summoned by Margo to object formally to the Goods keeping pigs?",
    "answers": [
      "The local police inspector",
      "The borough mayor",
      "The residents' association chairman",
      "A visiting health minister"
    ],
    "correctAnswer": "The residents' association chairman",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S1E4 Pigs Lib",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: The residents' association chairman",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1/",
      "Margo Objection",
      "Residents Association",
      "Pigs"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37804",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what finally pushes Margo to demand the pigs' removal?",
    "answers": [
      "They trample her front door",
      "The pigs destroy her car",
      "A pig enters her dining room during a party",
      "One escapes into her garden"
    ],
    "correctAnswer": "One escapes into her garden",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S1E4 Pigs Lib",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: One escapes into her garden",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1/",
      "Escaped Pig",
      "Leadbetter Garden",
      "Neighbour Conflict"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37805",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what workman becomes involved in a misunderstanding while Barbara tries to barter?",
    "answers": [
      "The window cleaner",
      "The gas fitter",
      "An electrician",
      "A chimney sweep"
    ],
    "correctAnswer": "The window cleaner",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S1E4 Pigs Lib",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: The window cleaner",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1/",
      "Barbara Bartering",
      "Window Cleaner",
      "Comic Misunderstanding"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37806",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what resource powers Tom's homemade electricity generator?",
    "answers": [
      "A stream running beneath the cellar",
      "Waste from the farm animals",
      "Solar panels on the roof",
      "Coal from Jerry's garden"
    ],
    "correctAnswer": "Waste from the farm animals",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S1E5 The Thing in the Cellar",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Waste from the farm animals",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1/",
      "Homemade Generator",
      "Animal Waste",
      "Energy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37807",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what do Tom and Jerry do that leaves the Goods with excess food to preserve?",
    "answers": [
      "Attend a cattle auction",
      "Buy a freezer full of lamb",
      "Go fishing together",
      "Harvest an apple orchard"
    ],
    "correctAnswer": "Go fishing together",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S1E5 The Thing in the Cellar",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Go fishing together",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1/",
      "Tom Jerry Fishing",
      "Freezer",
      "Generator Breakdown"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37808",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, where does Tom secretly take a short contract to earn money for Barbara?",
    "answers": [
      "The local council",
      "A poultry farm",
      "Jerry's favourite restaurant",
      "His former company"
    ],
    "correctAnswer": "His former company",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S1E6 The Pagan Rite",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: His former company",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1/",
      "Secret Paid Work",
      "Old Firm",
      "Barbara Treat"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37809",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, which neighbour's curiosity threatens to expose Tom's secret employment?",
    "answers": [
      "Margo Leadbetter",
      "Jerry Leadbetter",
      "A new neighbour called Ruth",
      "The bank manager"
    ],
    "correctAnswer": "Margo Leadbetter",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S1E6 The Pagan Rite",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Margo Leadbetter",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1/",
      "Margo Meddling",
      "Secret Contract",
      "Tom"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37810",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what sort of job is Tom performing when he hurts his back?",
    "answers": [
      "Loading pigs into a lorry",
      "Digging in the garden",
      "Painting the kitchen",
      "Mending the roof"
    ],
    "correctAnswer": "Digging in the garden",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S1E7 Backs to the Wall",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Digging in the garden",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1/",
      "Tom Injury",
      "Digging",
      "Harvest Time"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37811",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what happens to the Goods' garden when bad weather arrives during the harvest?",
    "answers": [
      "It is buried beneath heavy snow",
      "A tree falls across the street",
      "It turns into a mud bath",
      "The greenhouse catches fire"
    ],
    "correctAnswer": "It turns into a mud bath",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S1E7 Backs to the Wall",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: It turns into a mud bath",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1/",
      "Storm",
      "Garden Mud",
      "Barbara Struggle"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37812",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what does Tom discover about selling the garden's spare produce to raise money?",
    "answers": [
      "Every market is closed for a national strike",
      "Margo has bought all the surplus",
      "He needs a licence from Jerry",
      "Finding buyers is harder than he expected"
    ],
    "correctAnswer": "Finding buyers is harder than he expected",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S2E1 Just My Bill",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Finding buyers is harder than he expected",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/2/",
      "Rates Crisis",
      "Surplus Produce",
      "Money"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37813",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, where does a desperate search produce the last money the Goods need for their bills?",
    "answers": [
      "Behind a sofa",
      "Inside an old wellington boot",
      "In the roof space",
      "Under the greenhouse floor"
    ],
    "correctAnswer": "Behind a sofa",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S2E1 Just My Bill",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Behind a sofa",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/2/",
      "Sofa Coins",
      "Rates Deadline",
      "Household Money"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37814",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what are the first names of the two students who come to observe the Goods?",
    "answers": [
      "Tom and Daisy",
      "Guy and Ruth",
      "Peter and Jane",
      "Bill and Helen"
    ],
    "correctAnswer": "Guy and Ruth",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S2E2 The Guru of Surbiton",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Guy and Ruth",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/2/",
      "Students",
      "Guy And Ruth",
      "Work Experience"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37815",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what neighbouring property do the admiring students propose buying?",
    "answers": [
      "A cottage in Devon",
      "Jerry's office",
      "The house next door",
      "A nearby allotment shed"
    ],
    "correctAnswer": "The house next door",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S2E2 The Guru of Surbiton",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: The house next door",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/2/",
      "Communal Living",
      "House Next Door",
      "Margo Alarm"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37816",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what promise allows Jerry to obtain free goods for Tom and Barbara?",
    "answers": [
      "They have won a local gardening prize",
      "A BBC documentary is paying expenses",
      "Tom has been named businessman of the year",
      "They will be featured in a national Sunday newspaper"
    ],
    "correctAnswer": "They will be featured in a national Sunday newspaper",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S2E3 Mr Fix-It",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: They will be featured in a national Sunday newspaper",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/2/",
      "Jerry Free Merchandise",
      "Newspaper Article",
      "Publicity"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37817",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what personal project does Margo attempt to publicise through the journalist's visit?",
    "answers": [
      "Her amateur dramatic production",
      "A new charity hospital",
      "A garden design business",
      "A collection of butterfly specimens"
    ],
    "correctAnswer": "Her amateur dramatic production",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S2E3 Mr Fix-It",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Her amateur dramatic production",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/2/",
      "Margo Publicity",
      "Amateur Dramatics",
      "Journalist"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37818",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, who does Tom wrongly suspect when produce begins disappearing from his garden?",
    "answers": [
      "Barbara Good",
      "Margo Leadbetter",
      "Jerry's boss",
      "The postman"
    ],
    "correctAnswer": "Margo Leadbetter",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S2E4 The Day Peace Broke Out",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Margo Leadbetter",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/2/",
      "Leeks Theft",
      "False Accusation",
      "Margo"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37819",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what gets Tom into worse trouble than the original vegetable thief?",
    "answers": [
      "Refusing to pay the rates",
      "Selling stolen vegetables",
      "Trying to deal with the culprit himself",
      "Blocking a police patrol"
    ],
    "correctAnswer": "Trying to deal with the culprit himself",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S2E4 The Day Peace Broke Out",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Trying to deal with the culprit himself",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/2/",
      "Tom Vigilante",
      "Theft Reaction",
      "Garden Security"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37820",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, why is Jerry dismissed from his job by Sir Andrew?",
    "answers": [
      "He gives company secrets to Tom",
      "He deliberately loses an important contract",
      "He insults a government minister",
      "He refuses to host a visiting businessman"
    ],
    "correctAnswer": "He refuses to host a visiting businessman",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S2E5 Mutiny",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: He refuses to host a visiting businessman",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/2/",
      "Jerry Sacked",
      "Client Entertainment",
      "Career Crisis"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37821",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what do the Goods attempt after Jerry loses his position?",
    "answers": [
      "To persuade Sir Andrew to reinstate him",
      "To start an independent dental practice",
      "To take over Jerry's house",
      "To persuade Margo to join a protest march"
    ],
    "correctAnswer": "To persuade Sir Andrew to reinstate him",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S2E5 Mutiny",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: To persuade Sir Andrew to reinstate him",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/2/",
      "Tom Barbara",
      "Jerry Reinstatement",
      "Friendship"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37822",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what visitor first draws the Goods' attention to a potentially better farm?",
    "answers": [
      "An estate agent from London",
      "A boar-walker",
      "A journalist",
      "A government agricultural adviser"
    ],
    "correctAnswer": "A boar-walker",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S2E6 Home Sweet Home",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: A boar-walker",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/2/",
      "Boar Walker",
      "Larger Smallholding",
      "Pig Breeding"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37823",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, how do Tom and Barbara feel about moving despite the attractive opportunity?",
    "answers": [
      "Both immediately want to emigrate",
      "Barbara wants to go but Tom refuses outright",
      "Neither really wants to leave their home",
      "They agree to move the same day"
    ],
    "correctAnswer": "Neither really wants to leave their home",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S2E6 Home Sweet Home",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Neither really wants to leave their home",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/2/",
      "House Move Doubts",
      "Surbiton Attachment",
      "Self Sufficiency"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37824",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, which craft does Tom originally try at the evening school before swapping with Barbara?",
    "answers": [
      "Pottery",
      "Woodcarving",
      "Blacksmithing",
      "Weaving"
    ],
    "correctAnswer": "Weaving",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S2E7 Going to Pot?",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Weaving",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/2/",
      "Tom Evening Class",
      "Weaving",
      "Craft Swap"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37825",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what temptation arises once Tom discovers an unexpected talent in pottery?",
    "answers": [
      "Turning the hobby into a commercial business",
      "Becoming a full-time arts teacher",
      "Selling the house to build a studio",
      "Taking a job at a museum"
    ],
    "correctAnswer": "Turning the hobby into a commercial business",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S2E7 Going to Pot?",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Turning the hobby into a commercial business",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/2/",
      "Tom Pottery Talent",
      "Commercial Temptation",
      "Money"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37826",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, why do Tom and Barbara begin working at unusually early hours?",
    "answers": [
      "To avoid a planning inspector",
      "To make full use of daylight for sowing",
      "Because their animals have escaped",
      "To prepare for an evening television appearance"
    ],
    "correctAnswer": "To make full use of daylight for sowing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S3E1 The Early Birds",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: To make full use of daylight for sowing",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/3/",
      "Early Rising",
      "Sowing Crops",
      "Daylight"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37827",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what becomes difficult for the Goods when they try to compensate for their early starts?",
    "answers": [
      "Finding someone to cook supper",
      "Taking the train to work",
      "Getting to sleep early at night",
      "Looking after Jerry's children"
    ],
    "correctAnswer": "Getting to sleep early at night",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S3E1 The Early Birds",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Getting to sleep early at night",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/3/",
      "Early Bedtime",
      "Household Interruptions",
      "Neighbours"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37828",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what health problem affects one of the newborn piglets?",
    "answers": [
      "It is born with an extra leg",
      "It breaks a leg escaping the sty",
      "It refuses to leave the garden",
      "It is unusually small and weak"
    ],
    "correctAnswer": "It is unusually small and weak",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S3E2 The Happy Event",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: It is unusually small and weak",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/3/",
      "Piglet Runt",
      "Newborn Litter",
      "Animal Welfare"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37829",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what does Jerry rush to the hospital to obtain for the struggling piglet?",
    "answers": [
      "Oxygen",
      "An incubator",
      "A blood transfusion",
      "A bottle of antibiotics"
    ],
    "correctAnswer": "Oxygen",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S3E2 The Happy Event",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Oxygen",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/3/",
      "Jerry Rescue",
      "Oxygen",
      "Speeding"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37830",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what farm tool does Tom adapt to replace a broken trolley?",
    "answers": [
      "A wheelbarrow",
      "A rotavator",
      "A threshing machine",
      "A water pump"
    ],
    "correctAnswer": "A rotavator",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S3E3 A Tug of the Forelock",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: A rotavator",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/3/",
      "Rotavator Conversion",
      "Transport",
      "Broken Trolley"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37831",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, why do the Goods need extra cash after modifying the rotavator?",
    "answers": [
      "To hire a mechanic",
      "To insure a horse",
      "To pay for its fuel",
      "To build a new garage"
    ],
    "correctAnswer": "To pay for its fuel",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S3E3 A Tug of the Forelock",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: To pay for its fuel",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/3/",
      "Rotavator Fuel",
      "Leadbetter Jobs",
      "Cash Shortage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37832",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what unusual crop-growing practice inspires Tom to conduct an experiment?",
    "answers": [
      "Painting the leaves white",
      "Growing vegetables without daylight",
      "Planting crops upside down",
      "Talking and playing music to plants"
    ],
    "correctAnswer": "Talking and playing music to plants",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S3E4 I Talk to the Trees",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Talking and playing music to plants",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/3/",
      "Talking To Plants",
      "Music Experiment",
      "Allotment Theory"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37833",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what is Margo seeking election to while the Goods play music to their plants?",
    "answers": [
      "President of the local amateur operatic society",
      "Chair of the residents' association",
      "Mayor of Surbiton",
      "President of a gardening federation"
    ],
    "correctAnswer": "President of the local amateur operatic society",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S3E4 I Talk to the Trees",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: President of the local amateur operatic society",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/3/",
      "Margo Election",
      "Operatic Society",
      "Disruptive Music"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37834",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what homemade drink helps everyone recover their sense of humour after the neighbour dispute?",
    "answers": [
      "Elderflower cordial",
      "Peapod Burgundy",
      "Carrot champagne",
      "Blackberry gin"
    ],
    "correctAnswer": "Peapod Burgundy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S3E5 The Wind-Break War",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Peapod Burgundy",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/3/",
      "Peapod Wine",
      "Neighbour Reconciliation",
      "Garden Conflict"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37835",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, why does the disagreement grow even after the Goods ask Margo to move her garden structure?",
    "answers": [
      "Jerry refuses to discuss it",
      "The structure is stolen overnight",
      "There is a misunderstanding about its new position",
      "A surveyor declares their property boundaries wrong"
    ],
    "correctAnswer": "There is a misunderstanding about its new position",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S3E5 The Wind-Break War",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: There is a misunderstanding about its new position",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/3/",
      "Windbreak Siting",
      "Misunderstanding",
      "Garden Argument"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37836",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, where do the Goods suspect their flea infestation may actually have originated?",
    "answers": [
      "A local pet shop",
      "An animal rescue centre",
      "The council allotments",
      "The Leadbetters' home"
    ],
    "correctAnswer": "The Leadbetters' home",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S3E6 Whose Fleas Are These?",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: The Leadbetters' home",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/3/",
      "Fleas",
      "Neighbour Visit",
      "Source Of Infestation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37837",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what do Tom and Barbara initially believe is responsible for the parasites?",
    "answers": [
      "Their own livestock",
      "Tom's new loom",
      "A visiting school class",
      "The municipal swimming pool"
    ],
    "correctAnswer": "Their own livestock",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S3E6 Whose Fleas Are These?",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Their own livestock",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/3/",
      "Infestation",
      "Farm Animals",
      "Mistaken Theory"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37838",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what happens to Barbara's remaining smart dress?",
    "answers": [
      "It is stolen from a hotel",
      "It gets torn",
      "Margo gives it away",
      "It is ruined by red paint"
    ],
    "correctAnswer": "It gets torn",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S3E7 The Last Posh Frock",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: It gets torn",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/3/",
      "Barbara Dress",
      "Accidental Tear",
      "Femininity"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37839",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what treatment of a dinner guest makes Barbara even more insecure?",
    "answers": [
      "Jerry invites her without telling anyone",
      "Margo leaves Barbara to host alone",
      "Tom lavishes attention on a glamorous woman",
      "The guest mocks Barbara's cooking"
    ],
    "correctAnswer": "Tom lavishes attention on a glamorous woman",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S3E7 The Last Posh Frock",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Tom lavishes attention on a glamorous woman",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/3/",
      "Elegant Guest",
      "Tom Attention",
      "Marriage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37840",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what motivates the Leadbetters to suggest the Goods take a holiday?",
    "answers": [
      "The Goods have won a prize holiday",
      "The neighbours want to sell their garden",
      "Margo needs a house to film a documentary",
      "The Goods are exhausted by a poor harvest and setbacks"
    ],
    "correctAnswer": "The Goods are exhausted by a poor harvest and setbacks",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S4E1 Away From It All",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: The Goods are exhausted by a poor harvest and setbacks",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/4/",
      "Holiday Offer",
      "Bad Harvest",
      "Neighbour Help"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37841",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what responsibility do Margo and Jerry volunteer to take on while Tom and Barbara are away?",
    "answers": [
      "Caring for the Good household and animals",
      "Managing Jerry's old factory",
      "Supervising a building site",
      "Running a village fair"
    ],
    "correctAnswer": "Caring for the Good household and animals",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S4E1 Away From It All",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Caring for the Good household and animals",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/4/",
      "Farm Sitting",
      "Margo Jerry",
      "Holiday"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37842",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what does the Goods' visit to Margo's pony club reveal?",
    "answers": [
      "Margo has bought a new racehorse",
      "Margo has not been attending recently",
      "The club has closed permanently",
      "Jerry has become its chairman"
    ],
    "correctAnswer": "Margo has not been attending recently",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S4E2 The Green Door",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Margo has not been attending recently",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/4/",
      "Pony Club",
      "Secret Absences",
      "Margo"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37843",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what substance are Tom and Barbara hoping to collect from the pony club for their crops?",
    "answers": [
      "Sawdust",
      "Limewash",
      "Manure",
      "Compostable leaves"
    ],
    "correctAnswer": "Manure",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S4E2 The Green Door",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Manure",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/4/",
      "Horse Manure",
      "Fertiliser",
      "Garden Sowing"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37844",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, why does Barbara agree to give a public talk at short notice?",
    "answers": [
      "She is standing for local election",
      "Tom has been invited to a university",
      "Jerry is launching a gardening magazine",
      "Margo's original society speaker pulls out"
    ],
    "correctAnswer": "Margo's original society speaker pulls out",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S4E3 Our Speaker Today",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Margo's original society speaker pulls out",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/4/",
      "Society Talk",
      "Absent Speaker",
      "Barbara"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37845",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what cost of Barbara's successful talks increasingly becomes a problem?",
    "answers": [
      "They take time away from the smallholding",
      "They force her to sell the pigs",
      "They cause Tom to give up farming",
      "They require expensive foreign travel"
    ],
    "correctAnswer": "They take time away from the smallholding",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S4E3 Our Speaker Today",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: They take time away from the smallholding",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/4/",
      "Speaking Engagements",
      "Farm Neglected",
      "New Demands"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37846",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, why does Tom's new loom initially become almost useless?",
    "answers": [
      "Barbara loses the only weaving pattern",
      "Margo cancels the spinning wheel purchase he hoped to borrow",
      "The loom cannot fit through the back door",
      "It needs industrial electricity"
    ],
    "correctAnswer": "Margo cancels the spinning wheel purchase he hoped to borrow",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S4E4 The Weavers Tale",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Margo cancels the spinning wheel purchase he hoped to borrow",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/4/",
      "Loom",
      "Margo Spinning Wheel",
      "Cancelled Purchase"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37847",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, who persuades Jerry to restrict Margo's spending on household purchases?",
    "answers": [
      "Tom Good",
      "Sir Andrew",
      "Barbara Good",
      "The bank manager"
    ],
    "correctAnswer": "Barbara Good",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S4E4 The Weavers Tale",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Barbara Good",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/4/",
      "Barbara Advice",
      "Jerry Spending Ban",
      "Spinning Wheel"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37848",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, which raw material do the Goods acquire to make homemade clothing?",
    "answers": [
      "Flax bales",
      "Cotton rolls",
      "Silk cocoons",
      "Sheep fleeces"
    ],
    "correctAnswer": "Sheep fleeces",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S4E5 Suit Yourself",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Sheep fleeces",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/4/",
      "Sheep Fleece",
      "Homemade Clothes",
      "Weaving"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37849",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what do Tom and Barbara use to colour their homemade clothing?",
    "answers": [
      "Dyes made from vegetables",
      "Commercial fabric sprays",
      "Paint from the garden shed",
      "Synthetic printer's ink"
    ],
    "correctAnswer": "Dyes made from vegetables",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S4E5 Suit Yourself",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Dyes made from vegetables",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/4/",
      "Vegetable Dyes",
      "Home Weaving",
      "Self Sufficiency"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37850",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, which neighbour's abandoned property tempts Tom into taking something he has no right to?",
    "answers": [
      "Their unused wheelbarrow",
      "The heating-oil tank contents",
      "A garden bench",
      "A pile of bricks"
    ],
    "correctAnswer": "The heating-oil tank contents",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S4E6 Sweet and Sour Charity",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: The heating-oil tank contents",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/4/",
      "Heating Oil",
      "Temptation",
      "Neighbour Property"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37851",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what ultimately makes taking the leftover heating oil acceptable to Barbara?",
    "answers": [
      "The council declares it waste",
      "Jerry volunteers to pay for it",
      "The neighbours give their permission",
      "Tom offers to exchange vegetables for it"
    ],
    "correctAnswer": "The neighbours give their permission",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S4E6 Sweet and Sour Charity",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: The neighbours give their permission",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/4/",
      "Heating Oil",
      "Permission",
      "Ethical Dilemma"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37852",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what new home-security system does Margo install that the Goods feel they do not need?",
    "answers": [
      "An electric gate",
      "A night-watch service",
      "A security camera network",
      "A burglar alarm"
    ],
    "correctAnswer": "A burglar alarm",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S4E7 Anniversary",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: A burglar alarm",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/4/",
      "Margo Alarm",
      "No Possessions",
      "Suburban Security"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37853",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, which outgoing company chief does Jerry hope to succeed?",
    "answers": [
      "Sir Andrew",
      "Sir Leonard",
      "Mr Downs",
      "Mr Barrowclough"
    ],
    "correctAnswer": "Sir Andrew",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: S4E7 Anniversary",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Sir Andrew",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/4/",
      "Jerry Promotion",
      "Company Boss",
      "Career Worries"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37854",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what is the approximate cost of the Goods' largely homemade Christmas?",
    "answers": [
      "Five pounds",
      "Fifteen pence",
      "Fifteen pounds",
      "Fifty pence"
    ],
    "correctAnswer": "Fifteen pence",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: Christmas 1977 Silly But Its Fun",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Fifteen pence",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1977/",
      "Low Cost Christmas",
      "Homemade Celebration",
      "Neighbours"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37855",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, which neighbours unexpectedly join Tom and Barbara when their own Christmas delivery is rejected?",
    "answers": [
      "Guy and Ruth",
      "Sir Andrew and his wife",
      "Margo and Jerry",
      "The local residents' association"
    ],
    "correctAnswer": "Margo and Jerry",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: Christmas 1977 Silly But Its Fun",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: Margo and Jerry",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1977/",
      "Cancelled Christmas",
      "Leadbetters Join",
      "Homemade Gifts"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37856",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what does Margo arrange in response to concerns about Jerry's future and ageing?",
    "answers": [
      "A smallholding in the countryside",
      "A pension from Tom's old firm",
      "A family trust managed by Barbara",
      "A further life-insurance policy for Jerry"
    ],
    "correctAnswer": "A further life-insurance policy for Jerry",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: 1978 When Im 65",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: A further life-insurance policy for Jerry",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1978/",
      "Margo Insurance",
      "Future Worries",
      "Retirement"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37857",
    "category": "Television",
    "programme": "The Good Life",
    "question": "In The Good Life, what machine does Jerry use to improve his fitness before racing Tom?",
    "answers": [
      "A rowing machine",
      "An exercise bicycle",
      "A treadmill",
      "A skipping machine"
    ],
    "correctAnswer": "A rowing machine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC One",
      "1970s television",
      "The Good Life",
      "Programme: The Good Life",
      "Episode: 1978 When Im 65",
      "Episode storyline",
      "Characters and plot",
      "Correct answer: A rowing machine",
      "Source: https://www.comedy.co.uk/tv/the_good_life/episodes/1978/",
      "Jerry Training",
      "Rowing Machine",
      "Running Race"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length !== 144 ||
 questions[0].id !== 'tv_16227' || questions[82].id !== 'tv_16309' ||
 auditAdditions[0].id !== 'tv_37797' ||
 auditAdditions[auditAdditions.length-1].id !== 'tv_37857' ||
 new Set(questions.map(q=>q.id)).size !== questions.length ||
 new Set(questions.map(q=>normalise(q.question))).size !== questions.length ||
 questions.some(q=>q.answers.length!==4||new Set(q.answers.map(normalise)).size!==4||
 q.answers.filter(a=>a===q.correctAnswer).length!==1||q.programme!=='The Good Life'||
 !q.tags.includes('Programme: The Good Life')||q.tags.length<15||q.dailyEligible!==true)||
 auditAdditions.some(q=>!q.question.startsWith('In The Good Life, ')||
 !q.tags.some(t=>t.startsWith('Source: https://'))))
 throw Error('Pack 341 storyline audit validation failed');
module.exports = questions;
