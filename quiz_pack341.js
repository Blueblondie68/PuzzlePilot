
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

 module.exports = questions;
