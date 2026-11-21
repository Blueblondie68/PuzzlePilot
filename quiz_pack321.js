
 // quiz_pack321.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: Four completed cookery programmes
 // Nigella Bites; The Naked Chef; The Big Family Cooking Showdown;
 // The Hairy Bikers' Food Tour of Britain.
 // Seven individually chosen specialist tags per question, plus programme metadata.
 // Format: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven tags

 const groups = [
     {
         programme: 'Nigella Bites',
         era: '2000-2002',
         broadcaster: 'Channel 4',
         topic: 'Nigella Lawson cooking for family, friends and everyday life',
         facts: `Who presented the Channel 4 cookery programme Nigella Bites?|Nigella Lawson|Delia Smith|Mary Berry|Rachel Allen|Easy|Nigella Lawson|Presenter|Home Cook|British Food Writer|On Screen Host|Domestic Cooking|Channel Four Personality
 On which channel did Nigella Bites originally appear?|Channel 4|BBC Two|ITV|Channel 5|Easy|Channel 4|Original Broadcaster|British Cookery Television|Programme Launch|Food Series|Television Scheduling|UK Lifestyle Shows
 In which year did Nigella Bites make its Channel 4 debut?|2000|1995|2004|2008|Medium|2000 Debut|Millennium Television|First Series|Broadcast History|British Food Television|Programme Premiere|Early Career
 What was the title of the first episode of Nigella Bites in 2000?|Fast Food|Comfort Food|Party Girl|Slow Cook Weekend|Medium|Fast Food Episode|Series One Premiere|Quick Recipes|August 2000|Episode Title|Everyday Cooking|Time Saving Dishes
 Which pasta dish featured in the first Nigella Bites episode, Fast Food?|Lemon linguine|Beef lasagne|Penne arrabbiata|Spinach cannelloni|Medium|Lemon Linguine|Fast Food Episode|Pasta Recipe|Citrus Flavour|First Broadcast|Quick Cooking|Italian Inspired Food
 In Nigella Bites' Fast Food episode, chicken was served with which grain-based accompaniment?|Couscous|Risotto|Polenta|Barley|Medium|Chicken And Couscous|Fast Food Episode|Grain Side Dish|Quick Supper|North African Influence|Weeknight Meal|Programme Recipe
 Which Middle Eastern style of serving several small dishes inspired Nigella Bites' Entertaining episode?|Meze|Fondue|Hotpot|Sunday roast|Medium|Meze|Entertaining Episode|Middle Eastern Style|Sharing Platters|Relaxed Hosting|Small Dishes|Dinner Parties
 In the Entertaining episode of Nigella Bites, hummus was garnished with which toasted nuts?|Pine nuts|Walnuts|Hazelnuts|Pecans|Hard|Hummus|Toasted Pine Nuts|Entertaining Episode|Meze Spread|Middle Eastern Flavours|Appetiser Garnish|Entertaining Recipe
 Which steak dish did Nigella Lawson recall as her mother's favourite preparation in Nigella Bites' Family Food episode?|Steak béarnaise|Steak Diane|Beef Wellington|Pepper steak|Hard|Steak Bearnaise|Family Food Episode|Mother's Cooking|Childhood Memories|Family Recipe|French Sauce|Food Heritage
 In the Family Food episode of Nigella Bites, Nigella remembered her grandmother's poached pears with what?|Vanilla ice cream and chocolate sauce|Clotted cream and jam|Custard and caramel|Lemon sorbet and honey|Hard|Poached Pears|Grandmother's Pudding|Vanilla Ice Cream|Chocolate Sauce|Family Food Episode|Childhood Dessert|Food Memories
 Which cookery writer's tagliatelle recipe featured in the Family Food episode of Nigella Bites?|Claudia Roden|Elizabeth David|Marguerite Patten|Madhur Jaffrey|Hard|Claudia Roden|Tagliatelle Recipe|Family Food Episode|Influential Food Writer|Pine Nuts And Sultanas|Chicken Pasta|Cookbook Inspiration
 What were the 'greencakes' Nigella prepared with her children in Nigella Bites mainly made from?|Broccoli, peas and potatoes|Carrots, beetroot and parsnips|Spinach, rice and chicken|Cabbage, lentils and apples|Hard|Greencakes|Broccoli And Peas|Potato Patties|Cooking With Children|Family Food Episode|Vegetable Recipe|Breadcrumb Coating
 What fruit flavoured the pavlova Nigella Lawson made in the Family Food episode of Nigella Bites?|Passion fruit|Mango|Raspberry|Pineapple|Medium|Passion Fruit Pavlova|Meringue Dessert|Family Food Episode|Fruit Topping|Family Pudding|Sweet Recipe|Dessert Preparation
 Which Nigella Bites episode focused on the pleasures of cooking for oneself?|Home Alone|Entertaining|Party Girl|Legacy|Easy|Home Alone|Solo Cooking|Episode Theme|Meals For One|Personal Favourites|Domestic Independence|Comfortable Eating
 Which phrase summed up Nigella's relaxed philosophy in the Weekend episode of Nigella Bites?|Minimum effort for maximum pleasure|Cook fast and eat faster|Every meal needs five courses|Never use leftovers|Medium|Minimum Effort Maximum Pleasure|Weekend Episode|Relaxed Home Cooking|Food Philosophy|Unfussy Recipes|Enjoyable Cooking|Kitchen Approach
 What was the title of Nigella Bites' festive television special broadcast in December 2001?|Nigella's Christmas Bites|Nigella's Festive Feast|A Very Nigella Christmas|The Holiday Kitchen|Medium|Nigella's Christmas Bites|December 2001|Festive Special|Christmas Recipes|Channel 4 Special|Holiday Cooking|Programme Spin Off
 Which Indian-influenced egg dish did Nigella make in the All Day Breakfast episode of Nigella Bites?|Masala omelettes|Scotch eggs|Eggs Benedict|Baked shakshuka|Hard|Masala Omelettes|All Day Breakfast|Spiced Eggs|Breakfast Recipe|Indian Inspired Food|Egg Cookery|Episode Dish
 Which Nigella Bites episode was devoted to soothing and restorative food?|Temple Food|Trashy|Party Girl|Fast Food|Medium|Temple Food|Restorative Dishes|Episode Title|Feel Good Cooking|Comforting Meals|Nourishing Food|Kitchen Wellbeing`
     },
     {
         programme: 'The Naked Chef',
         era: '1999-2001',
         broadcaster: 'BBC Two',
         topic: 'Jamie Oliver informal cookery series and its themed episodes',
         facts: `Which chef presented the original BBC Two series The Naked Chef?|Jamie Oliver|Gordon Ramsay|Gary Rhodes|Ainsley Harriott|Easy|Jamie Oliver|Programme Star|Young Chef|Television Debut|British Food Presenter|Informal Cookery|Original Host
 On which television channel did The Naked Chef first air?|BBC Two|Channel 4|ITV|BBC One|Easy|BBC Two|Original Broadcaster|Public Service Television|Nineties Cooking Shows|UK Broadcast|Programme Debut|Cookery Scheduling
 In what year did Jamie Oliver's The Naked Chef begin?|1999|1994|2002|2007|Easy|1999 Premiere|Late Nineties|Jamie Oliver Debut|First Series|British Cookery Boom|Television History|Programme Launch
 Which producer developed The Naked Chef and is credited as its creator?|Patricia Llewellyn|Mary Portas|Jane Tranter|Sarah Beeny|Hard|Patricia Llewellyn|Programme Creator|Executive Producer|Television Development|Original Concept|Jamie Oliver Career|Behind The Scenes
 Which production company made the original BBC series The Naked Chef?|Optomen Television|Studio Lambert|Love Productions|Tiger Aspect|Hard|Optomen Television|Production Company|BBC Commission|Factual Television|Programme Credits|British Independent Producer|Cookery Format
 How many main series of The Naked Chef were made between 1999 and 2001?|Three|One|Five|Seven|Medium|Three Series|1999 To 2001|Programme Run|Series Count|BBC Two|Broadcast Chronology|Cookery Programme
 What did 'naked' refer to in the title of Jamie Oliver's The Naked Chef?|Stripping cooking back to simple essentials|Cooking without an oven|Serving only raw ingredients|Filming outdoors exclusively|Easy|Naked Chef Title|Simple Food Philosophy|Back To Basics|Uncomplicated Recipes|Programme Branding|Accessible Cooking|Title Meaning
 What was the title of the first episode of The Naked Chef?|Chefs' Night Off|Wedding Bells|The Italian Job|Moving House|Medium|Chefs Night Off|Series One Opener|April 1999|Episode Title|Professional Colleagues|Debut Broadcast|Restaurant Staff
 For whom did Jamie Oliver prepare a meal in The Naked Chef's opening episode, Chefs' Night Off?|His chef colleagues and boss|A class of schoolchildren|A wedding party|A panel of food critics|Medium|Chefs Night Off|Colleagues Dinner|Restaurant Team|Opening Episode|Dinner Guests|Jamie Oliver|Professional Chefs
 Which meat did Jamie Oliver roast with pancetta, sage and rosemary in The Naked Chef's first episode?|Lamb|Pork|Turkey|Venison|Hard|Roast Lamb|Pancetta|Sage And Rosemary|Chefs Night Off|First Episode Recipe|Herb Roasting|Meat Dish
 For which family occasion did Jamie Oliver cook in the early Naked Chef episode Hen Night?|His sister's hen night|His parents' anniversary|His cousin's christening|His brother's graduation|Medium|Hen Night|Sister's Celebration|Series One|Family Occasion|Party Catering|1999 Episode|Special Meal
 Which fish did Jamie Oliver bake with olives and tomatoes for The Naked Chef's Hen Night episode?|Salmon|Haddock|Cod|Trout|Hard|Baked Salmon|Hen Night Episode|Olives And Tomatoes|Fish Recipe|Celebration Food|First Series|Mediterranean Flavours
 In The Naked Chef's Babysitting episode, Jamie cooked for which youngsters?|His young cousins|His neighbours' twins|A school cookery club|His nieces and nephews|Medium|Babysitting Episode|Young Cousins|1999 Programme|Family Cooking|Children's Meals|Home Kitchen|Episode Guests
 Which crunchy breadcrumb topping featured in the spaghetti Jamie prepared for The Naked Chef's Babysitting episode?|Pangrattato|Gremolata|Dukkah|Tempura crumbs|Hard|Pangrattato|Spaghetti With Chilli|Anchovies|Babysitting Episode|Italian Breadcrumbs|Pasta Topping|Jamie Oliver Recipe
 What was the name of Jamie Oliver's band featured in a Naked Chef episode?|Scarlet Division|The River Boys|The Kitchenettes|Sunday Service|Hard|Scarlet Division|Jamie Oliver Band|The Band Episode|1999 Series|Music And Cooking|Personal Life|Bandmates
 In The Naked Chef episode The Band, which London district did Jamie visit to buy ingredients for Thai green curry?|Chinatown|Camden Town|Notting Hill|Greenwich|Medium|London Chinatown|The Band Episode|Thai Green Curry|Ingredient Shopping|Chinese Quarter|1999 London|Location Visit
 What was the title of the episode that opened The Naked Chef's second series in 2000?|Neal Street Reunion|The Italian Job|Godfather|A Perfect Day|Hard|Neal Street Reunion|Series Two Premiere|2000 Episode|Restaurant Friends|Episode Title|BBC Two|Programme Chronology
 Which episode began the third series of The Naked Chef in October 2001?|Moving House|Hen Night|Chefs' Night Off|A Birthday Barbecue|Hard|Moving House|Series Three Premiere|2001 Return|Episode Title|Jamie Oliver|New Locations|Broadcast Timeline
 What was the title of Jamie Oliver's first cookbook, published in 1999 to accompany his television breakthrough?|The Naked Chef|Happy Days with the Naked Chef|Jamie's Dinners|The Return of the Naked Chef|Medium|The Naked Chef Cookbook|1999 Publication|First TV Tie In|Jamie Oliver Author|Cookery Books|Publication History|Television Success`
     },
     {
         programme: 'The Big Family Cooking Showdown',
         era: '2017-2018',
         broadcaster: 'BBC Two',
         topic: 'British family cooking competition with two different series formats',
         facts: `Which channel first broadcast The Big Family Cooking Showdown in 2017?|BBC Two|Channel 4|ITV|BBC One|Easy|BBC Two|2017 Launch|Original Broadcaster|Cooking Competition|Public Service Television|Programme Premiere|British Reality TV
 Who co-presented the first series of The Big Family Cooking Showdown with Zoe Ball?|Nadiya Hussain|Mary Berry|Rochelle Humes|Claudia Winkleman|Easy|Nadiya Hussain|Zoe Ball|2017 Presenters|Series One|Home Cooking|Television Hosts|Family Competition
 Which radio and television presenter co-hosted the first series of The Big Family Cooking Showdown?|Zoe Ball|Sara Cox|Fearne Cotton|Jo Whiley|Easy|Zoe Ball|Original Host|2017 Series|Broadcast Presenter|Nadiya Hussain|BBC Two|Competition Introductions
 Before presenting The Big Family Cooking Showdown, Nadiya Hussain had won which baking competition?|The Great British Bake Off|MasterChef|Bake Off The Professionals|Hell's Kitchen|Easy|Nadiya Hussain|Bake Off Champion|Presenter Background|Baking Competition|BBC Food Shows|Television Career|Previous Win
 Which Italian chef judged the original series of The Big Family Cooking Showdown?|Giorgio Locatelli|Gennaro Contaldo|Antonio Carluccio|Aldo Zilli|Medium|Giorgio Locatelli|2017 Judge|Italian Chef|Michelin Star|Series One Panel|Food Judging|Professional Cooking
 Which British cookery teacher joined Giorgio Locatelli as a judge on the first Big Family Cooking Showdown?|Rosemary Shrager|Mary Berry|Prue Leith|Delia Smith|Medium|Rosemary Shrager|2017 Judge|Cookery Teacher|Giorgio Locatelli|Original Judging Panel|Family Dishes|BBC Competition
 How many family teams competed at the start of the first Big Family Cooking Showdown series?|Sixteen|Eight|Twelve|Twenty-four|Medium|Sixteen Families|2017 Heats|Competition Entrants|Series One Format|Home Cooks|Initial Lineup|Elimination Contest
 How many family members represented each team in the original Big Family Cooking Showdown?|Three|Two|Five|Six|Easy|Three Family Members|Team Composition|Family Cooking|2017 Format|Relatives Competing|Home Kitchen|Competition Rules
 In the original show's £10 Challenge, what was the total ingredients budget for each family?|£10|£25|£50|£100|Easy|Ten Pound Challenge|2017 First Round|Food Budget|Affordable Cooking|Family Meals|Cost Limit|Challenge Rules
 How many people did a family have to feed in the £10 Challenge on The Big Family Cooking Showdown?|Four|Two|Eight|Twelve|Medium|Four Diners|Ten Pound Challenge|Meal Portions|Family Budget|Affordable Food|2017 Round|Serving Requirement
 How long were teams given for the first series' £10 Challenge?|One hour and fifteen minutes|Thirty minutes|Two hours|Four hours|Hard|Seventy Five Minutes|Ten Pound Challenge|Timed Cooking|2017 Competition|Budget Meal|Kitchen Pressure|Original Rules
 During the first series' Home Visits Challenge, where did families prepare food for the judges?|In their own home kitchens|Inside a food truck|In a hotel restaurant|In a school canteen|Easy|Home Visits Challenge|Family Kitchens|Judges Visit|Authentic Family Meals|Series One Round|Domestic Setting|At Home Cooking
 In the first series' Home Visits Challenge, what two courses did families serve the judges?|A main course and a dessert|A starter and a soup|A breakfast and a snack|Two desserts|Medium|Main And Dessert|Home Visits Challenge|Two Course Meal|Rosemary Shrager|Giorgio Locatelli|2017 Rules|Home Dining
 What was the name of the deciding studio challenge in the first Big Family Cooking Showdown?|Impress the Neighbours|Kitchen Knockout|Ready Set Serve|The Final Plate|Medium|Impress The Neighbours|Deciding Round|Studio Kitchen|Series One Format|Starter And Main|2017 Challenges|Neighbour Tasting
 Which family won the first series of The Big Family Cooking Showdown in 2017?|The Gangotra family|The Charles family|The Pigott family|The Marks family|Medium|Gangotra Family|2017 Winners|Bobby Lorna Monika|Series One Final|Family Champions|Competition Result|Winning Cooks
 In 2018, The Big Family Cooking Showdown returned under which shorter title?|Family Cooking Showdown|Family Food Fight UK|The Great Family Bake|Britain's Home Chefs|Medium|Family Cooking Showdown|2018 Retitle|Second Series|Programme Rebrand|New Format|BBC Two|Broadcast Identity
 Who co-presented and judged the second series of Family Cooking Showdown with Angellica Bell?|Tommy Banks|Giorgio Locatelli|Tom Kerridge|James Martin|Medium|Tommy Banks|Angellica Bell|2018 Hosts|Second Series Panel|Michelin Star Chef|Presenter Change|Judging Role
 Who was the female presenter and judge of the second Family Cooking Showdown series in 2018?|Angellica Bell|Zoe Ball|Nadiya Hussain|Rosemary Shrager|Medium|Angellica Bell|Second Series|2018 Judging Panel|Presenter Change|Tommy Banks|Celebrity MasterChef Winner|BBC Host
 Which family won the 2018 series of Family Cooking Showdown?|The Mistry family|The Gangotra family|The Charles family|The Boyes family|Hard|Mistry Family|2018 Champions|Mitesh Prachi Anup|Second Series Winner|Family Cooks|Competition Final|Showdown Result
 Which production company made The Big Family Cooking Showdown for BBC Two?|Voltage TV|Studio Lambert|Love Productions|Shine TV|Hard|Voltage TV|Production Company|BBC Two Commission|British Reality Competition|Television Credits|Independent Production|Family Format`
     },
     {
         programme: "The Hairy Bikers' Food Tour of Britain",
         era: '2009',
         broadcaster: 'BBC Two',
         topic: 'Si King and Dave Myers exploring local produce across British counties',
         facts: `Which two presenters toured the counties in The Hairy Bikers' Food Tour of Britain?|Si King and Dave Myers|Jamie Oliver and Gennaro Contaldo|John Torode and Gregg Wallace|Rick Stein and James Martin|Easy|Si King|Dave Myers|Hairy Bikers Duo|Programme Presenters|Motorcycling Cooks|British Food Travel|2009 Series
 Which BBC channel originally showed The Hairy Bikers' Food Tour of Britain?|BBC Two|BBC One|BBC Four|Channel 4|Easy|BBC Two|Original Broadcaster|2009 Broadcast|Food And Travel|Daytime Television|British Counties|Cookery Series
 In which year was The Hairy Bikers' Food Tour of Britain first broadcast?|2009|2004|2013|2018|Easy|2009 Broadcast|August Premiere|British Food Tour|Programme History|Original Run|BBC Lifestyle Shows|Touring Series
 How many counties featured in the Hairy Bikers' Food Tour of Britain series?|Thirty|Twelve|Forty-eight|Sixty|Medium|Thirty Counties|Episode Count|Regional Tour|British Isles|Single Series|Local Food|Travel Itinerary
 Approximately how many miles did the Hairy Bikers cover for their Food Tour of Britain?|15,000 miles|1,500 miles|150 miles|50,000 miles|Medium|Fifteen Thousand Miles|Motorcycle Journey|County Touring|Long Distance Travel|Programme Scale|UK Routes|2009 Production
 What did the Hairy Bikers sample in each county before preparing its traditional favourite?|A local signature dish|A celebrity's packed lunch|A mystery imported dessert|A restaurant chain meal|Easy|Signature Dish|Regional Cuisine|County Tradition|Local Ingredients|Traditional Recipes|Food Culture|Show Structure
 Who supplied the verdict when the Hairy Bikers cooked traditional county favourites in public?|Local people tasting the food|A jury of television critics|Online viewers voting by phone|A panel of politicians|Medium|Local Audience|Public Food Tasting|County Favourites|Community Verdict|Outdoor Cooking|Regional Traditions|Cookery Demonstration
 Against whom did the Hairy Bikers compete in their county-by-county cook-offs?|Local professional chefs|Teams of schoolchildren|Restaurant inspectors|Other television presenters|Easy|Local Chefs|Cook Off Format|Restaurant Challenge|County Produce|Friendly Competition|Professional Rivals|Regional Gastronomy
 How did restaurant diners judge the competing dishes in the Hairy Bikers' Food Tour of Britain?|By blind tasting|By watching a cooking video|By reading the recipe only|By voting before eating|Medium|Blind Tasting|Restaurant Diners|Taste Off|Food Judging|Unknown Cook Identity|Cook Off Result|Programme Format
 Which English county was visited in the first episode of the Hairy Bikers' Food Tour of Britain?|Suffolk|Kent|Cornwall|Norfolk|Medium|Suffolk|Opening Episode|August 2009|County One|Regional Food|Programme Premiere|East Anglia
 At which Suffolk arts centre did the Hairy Bikers cook a traditional favourite during the first episode?|Snape Maltings|The Barbican|The Eden Project|The Sage Gateshead|Hard|Snape Maltings|Suffolk Episode|First Broadcast|Local Audience|Cooking Venue|East Anglian Landmark|Regional Dish
 In the Anglesey episode of the Hairy Bikers' Food Tour of Britain, which shellfish did they harvest from the Menai Strait?|Mussels|Oysters|Lobsters|Scallops|Medium|Anglesey|Menai Strait|Mussel Harvesting|Welsh Seafood|Coastal Produce|Second Episode|Local Ingredients
 Which freshwater fish did the Hairy Bikers seek in County Fermanagh?|Brown trout|Pike|Carp|Perch|Hard|Fermanagh Episode|Brown Trout|Northern Ireland|Freshwater Fishing|Crom Castle|County Produce|2009 Tour
 Which food famously associated with Cheshire did the Hairy Bikers sample there?|Cheshire cheese|Cornish pasties|Welsh cakes|Arbroath smokies|Easy|Cheshire Cheese|Cheshire Episode|Dairy Produce|Local Food|Regional Speciality|Food Sampling|Traditional Cheese
 Which vegetable did the Hairy Bikers help harvest on a Lincolnshire farm?|Cauliflowers|Asparagus|Tomatoes|Artichokes|Medium|Lincolnshire Episode|Cauliflower Farm|Local Agriculture|Vegetable Harvest|Food Producers|2009 Tour|Field Visit
 At which historic Kent landmark did the Hairy Bikers cook a traditional county dish?|Leeds Castle|Dover Castle|Hever Castle|Canterbury Cathedral|Hard|Leeds Castle|Kent Episode|Historic Cooking Venue|Regional Favourite|Outdoor Demonstration|2009 Series|County Landmark
 Which Scottish dish did the Hairy Bikers serve in Dumfries during their Food Tour of Britain?|Haggis|Cullen skink|Cranachan|Scotch broth|Medium|Haggis|Dumfries And Galloway|Scottish Cuisine|Traditional Dish|Public Tasting|2009 County Visit|Regional Food Heritage
 Which edible seaweed did the Hairy Bikers seek along the County Antrim coast?|Dulse|Kelp noodles|Nori sheets|Wakame|Hard|Dulse Seaweed|Antrim Episode|Northern Ireland Coast|Foraging|Local Seafood Heritage|Coastal Ingredients|Traditional Food
 Which Blur musician made cheese with the Hairy Bikers during their Oxfordshire episode?|Alex James|Damon Albarn|Graham Coxon|Dave Rowntree|Medium|Alex James|Oxfordshire Episode|Blur Bassist|Cheese Making|Music And Food|Local Dairy|Celebrity Guest
 Which Welsh village provided a setting for the Gwynedd episode of the Hairy Bikers' Food Tour of Britain?|Portmeirion|Hay-on-Wye|Betws-y-Coed|Llandudno|Hard|Portmeirion|Gwynedd Episode|Welsh Village|Cookery Location|North Wales|2009 Tour|Regional Food
 Which Cornish attraction hosted a traditional county favourite cooked by the Hairy Bikers?|The Eden Project|St Michael's Mount|Tate St Ives|The Minack Theatre|Hard|Eden Project|Cornwall Episode|Food Demonstration|West Country|2009 County Tour|Cornish Food|Programme Location
 Which Scottish region was featured in the final episode of The Hairy Bikers' Food Tour of Britain?|Moray|Fife|Orkney|Borders|Medium|Moray Finale|Final Episode|Scottish Region|October 2009|County Tour Ending|Episode Thirty|Programme Geography
 On which Scottish river did the Hairy Bikers seek wild salmon in the series finale?|River Spey|River Clyde|River Tay|River Tweed|Medium|River Spey|Wild Salmon|Moray Episode|Scottish Fishing|Finale Expedition|Local Produce|Salmon River`
     }
 ];

 const FIRST_ID = 14467;
 let index = 0;
 const questions = groups.flatMap(group =>
     group.facts.trim().split('\n').map(line => {
         const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
         const parts = line.trim().split('|').map(part => part.trim());
         if (parts.length !== 13) {
             throw new Error(`Expected seven specialist tags at ${id}; got ${parts.length - 6}`);
         }
         const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
         const wrongAnswers = [wrong1, wrong2, wrong3];
         if (!question || !correctAnswer || wrongAnswers.some(answer => !answer)) {
             throw new Error(`Missing question or answer at ${id}`);
         }
         if (new Set([correctAnswer, ...wrongAnswers].map(answer => answer.toLowerCase())).size !== 4) {
             throw new Error(`Repeated answer option at ${id}`);
         }
         if (!['Easy', 'Medium', 'Hard'].includes(difficulty) ||
             specificTags.length !== 7 || specificTags.some(tag => !tag)) {
             throw new Error(`Invalid difficulty or specialist tags at ${id}`);
         }
         const answers = [...wrongAnswers];
         answers.splice(index % 4, 0, correctAnswer);
         const tags = [...new Map([
             'Television', 'British Television', 'Cookery', 'Food Programmes',
             group.broadcaster, group.era, group.programme,
             `Programme: ${group.programme}`, group.topic,
             correctAnswer, ...specificTags
         ].map(tag => [tag.toLowerCase(), tag])).values()];
         const item = {
             id,
             category: 'Television',
             programme: group.programme,
             question,
             answers,
             correctAnswer,
             difficulty,
             tags,
             dailyEligible: true
         };
         index++;
         return item;
     })
 );

 const EXPECTED_COUNT = 80;
 if (questions.length !== EXPECTED_COUNT) {
     throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_14467' ||
     questions[questions.length - 1].id !== 'tv_14546') {
     throw new Error('Unexpected question ID range');
 }
 if (new Set(questions.map(q => q.id)).size !== questions.length ||
     new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
     throw new Error('Duplicate question IDs or wording');
 }
 if (questions.some(q => q.category !== 'Television' || !q.programme ||
     q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
     !q.tags.includes(`Programme: ${q.programme}`) ||
     q.tags.length < 15 || q.tags.some(tag => !tag) || q.dailyEligible !== true)) {
     throw new Error('Incomplete exported question metadata');
 }
 
// 21 November 2026 TV Pack 321 audit: four completed cookery programmes.
// All original IDs tv_14467–tv_14546 preserved; 72 additions tv_36520–tv_36591.
// Research sources: TheTVDB original episode descriptions for Nigella Bites,
// The Naked Chef, and Big Family Cooking Showdown; HairyBikers.com official
// 30-county tour guide cross-checked with TheTVDB's county-by-county synopses.
// https://thetvdb.com/series/nigella-bites/allseasons/official
// https://thetvdb.com/series/the-naked-chef/allseasons/official
// https://thetvdb.com/series/the-big-family-cooking-showdown/allseasons/official
// https://thetvdb.com/series/the-hairy-bikers-food-tour-of-britain/allseasons/official
// https://www.hairybikers.com/shows/view/the-hairy-bikers-food-tour-of-britain
// https://www.ukgameshows.com/ukgs/The_Big_Family_Cooking_Showdown
const auditAdditions = [
  {
    "id": "tv_36520",
    "category": "Television",
    "programme": "Nigella Bites",
    "question": "Which festive shepherd's pie did Nigella Lawson prepare in the Nigella Bites Christmas special?",
    "answers": [
      "Rudolph Pie",
      "Reindeer Risotto",
      "Snowman Soufflé",
      "Santa's Lasagne"
    ],
    "correctAnswer": "Rudolph Pie",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "Nigella Bites",
      "Programme: Nigella Bites",
      "Channel 4",
      "2000–2002",
      "Series episode or visit: Christmas 2001",
      "Specific cookery focus: Festive savoury dish",
      "Correct answer: Rudolph Pie",
      "Source: TheTVDB Nigella Bites aired episodes and 2001 Christmas special",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Nigella Lawson recipes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36521",
    "category": "Television",
    "programme": "Nigella Bites",
    "question": "What chocolate traybake appeared in the Nigella Bites Christmas special?",
    "answers": [
      "Cherry Bakewell slices",
      "Snow-flecked brownies",
      "Chocolate éclairs",
      "Ginger flapjacks"
    ],
    "correctAnswer": "Snow-flecked brownies",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "Nigella Bites",
      "Programme: Nigella Bites",
      "Channel 4",
      "2000–2002",
      "Series episode or visit: Christmas 2001",
      "Specific cookery focus: Festive chocolate brownies",
      "Correct answer: Snow-flecked brownies",
      "Source: TheTVDB Nigella Bites aired episodes and 2001 Christmas special",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Nigella Lawson recipes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36522",
    "category": "Television",
    "programme": "Nigella Bites",
    "question": "Which Italian-style salad did Nigella Lawson include in the Nigella Bites Christmas special?",
    "answers": [
      "Panzanella",
      "Insalata caprese",
      "Insalata di rinforzo",
      "Puntarelle alla romana"
    ],
    "correctAnswer": "Insalata di rinforzo",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "Nigella Bites",
      "Programme: Nigella Bites",
      "Channel 4",
      "2000–2002",
      "Series episode or visit: Christmas 2001",
      "Specific cookery focus: Christmas Italian salad",
      "Correct answer: Insalata di rinforzo",
      "Source: TheTVDB Nigella Bites aired episodes and 2001 Christmas special",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Nigella Lawson recipes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36523",
    "category": "Television",
    "programme": "Nigella Bites",
    "question": "Which seafood did Nigella Lawson serve hot and spiced in the Nigella Bites Christmas special?",
    "answers": [
      "Scallops",
      "Crab",
      "Lobster",
      "Prawns"
    ],
    "correctAnswer": "Prawns",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "Nigella Bites",
      "Programme: Nigella Bites",
      "Channel 4",
      "2000–2002",
      "Series episode or visit: Christmas 2001",
      "Specific cookery focus: Hot spiced seafood starter",
      "Correct answer: Prawns",
      "Source: TheTVDB Nigella Bites aired episodes and 2001 Christmas special",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Nigella Lawson recipes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36524",
    "category": "Television",
    "programme": "Nigella Bites",
    "question": "What Italian cured sausage flavours chicken in Nigella Bites' TV Dinners episode?",
    "answers": [
      "Chorizo",
      "Salami Milano",
      "Prosciutto cotto",
      "Bresaola"
    ],
    "correctAnswer": "Chorizo",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "Nigella Bites",
      "Programme: Nigella Bites",
      "Channel 4",
      "2000–2002",
      "Series episode or visit: Series 2 TV Dinners",
      "Specific cookery focus: Chicken and chorizo meal",
      "Correct answer: Chorizo",
      "Source: TheTVDB Nigella Bites aired episodes and 2001 Christmas special",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Nigella Lawson recipes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36525",
    "category": "Television",
    "programme": "Nigella Bites",
    "question": "What crunchy garnish accompanied vanilla ice cream and warm honey in Nigella Bites' TV Dinners episode?",
    "answers": [
      "Candied pecans",
      "Toasted pine nuts",
      "Crushed amaretti",
      "Dried coconut"
    ],
    "correctAnswer": "Toasted pine nuts",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "Nigella Bites",
      "Programme: Nigella Bites",
      "Channel 4",
      "2000–2002",
      "Series episode or visit: Series 2 TV Dinners",
      "Specific cookery focus: Ice cream dessert topping",
      "Correct answer: Toasted pine nuts",
      "Source: TheTVDB Nigella Bites aired episodes and 2001 Christmas special",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Nigella Lawson recipes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36526",
    "category": "Television",
    "programme": "Nigella Bites",
    "question": "What did Nigella Lawson turn leftover mashed potatoes into in Nigella Bites' Comfort Food?",
    "answers": [
      "Potato bread",
      "Gnocchi",
      "Salmon cakes",
      "Fish pie pastry"
    ],
    "correctAnswer": "Salmon cakes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "Nigella Bites",
      "Programme: Nigella Bites",
      "Channel 4",
      "2000–2002",
      "Series episode or visit: Series 2 Comfort Food",
      "Specific cookery focus: Leftover mashed potato recipe",
      "Correct answer: Salmon cakes",
      "Source: TheTVDB Nigella Bites aired episodes and 2001 Christmas special",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Nigella Lawson recipes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36527",
    "category": "Television",
    "programme": "Nigella Bites",
    "question": "Which rice-based dish was described as both comforting food and comforting cooking in Nigella Bites?",
    "answers": [
      "Paella",
      "Pilau",
      "Biryani",
      "Risotto"
    ],
    "correctAnswer": "Risotto",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "Nigella Bites",
      "Programme: Nigella Bites",
      "Channel 4",
      "2000–2002",
      "Series episode or visit: Series 2 Comfort Food",
      "Specific cookery focus: Rice meal preparation",
      "Correct answer: Risotto",
      "Source: TheTVDB Nigella Bites aired episodes and 2001 Christmas special",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Nigella Lawson recipes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36528",
    "category": "Television",
    "programme": "Nigella Bites",
    "question": "Which sweet German cake featured at the end of Nigella Bites' All Day Breakfast episode?",
    "answers": [
      "Kugel",
      "Black Forest gâteau",
      "Stollen",
      "Baumkuchen"
    ],
    "correctAnswer": "Kugel",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "Nigella Bites",
      "Programme: Nigella Bites",
      "Channel 4",
      "2000–2002",
      "Series episode or visit: Series 2 All Day Breakfast",
      "Specific cookery focus: All-day breakfast German pudding",
      "Correct answer: Kugel",
      "Source: TheTVDB Nigella Bites aired episodes and 2001 Christmas special",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Nigella Lawson recipes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36529",
    "category": "Television",
    "programme": "Nigella Bites",
    "question": "Which tomato-based cocktail accompanied the breakfast recipes in Nigella Bites' All Day Breakfast?",
    "answers": [
      "Bellini",
      "Bloody Mary",
      "Mimosa",
      "Espresso Martini"
    ],
    "correctAnswer": "Bloody Mary",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "Nigella Bites",
      "Programme: Nigella Bites",
      "Channel 4",
      "2000–2002",
      "Series episode or visit: Series 2 All Day Breakfast",
      "Specific cookery focus: Breakfast cocktail",
      "Correct answer: Bloody Mary",
      "Source: TheTVDB Nigella Bites aired episodes and 2001 Christmas special",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Nigella Lawson recipes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36530",
    "category": "Television",
    "programme": "Nigella Bites",
    "question": "Which herb features alongside shredded lamb in a salad from Nigella Bites' Slow Cook Weekend?",
    "answers": [
      "Thyme",
      "Sage",
      "Mint",
      "Rosemary"
    ],
    "correctAnswer": "Mint",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "Nigella Bites",
      "Programme: Nigella Bites",
      "Channel 4",
      "2000–2002",
      "Series episode or visit: Series 2 Slow Cook Weekend",
      "Specific cookery focus: Shredded lamb salad ingredient",
      "Correct answer: Mint",
      "Source: TheTVDB Nigella Bites aired episodes and 2001 Christmas special",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Nigella Lawson recipes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36531",
    "category": "Television",
    "programme": "Nigella Bites",
    "question": "Which sweet Turkish confection appeared with the leisurely recipes in Nigella Bites' Slow Cook Weekend?",
    "answers": [
      "Baklava",
      "Halva",
      "Lokma",
      "Turkish delight"
    ],
    "correctAnswer": "Turkish delight",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "Nigella Bites",
      "Programme: Nigella Bites",
      "Channel 4",
      "2000–2002",
      "Series episode or visit: Series 2 Slow Cook Weekend",
      "Specific cookery focus: Weekend sweet treat",
      "Correct answer: Turkish delight",
      "Source: TheTVDB Nigella Bites aired episodes and 2001 Christmas special",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Nigella Lawson recipes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36532",
    "category": "Television",
    "programme": "The Naked Chef",
    "question": "What drink was served at Jamie Oliver's birthday celebration in The Naked Chef's Birthday Party episode?",
    "answers": [
      "Jungle Boogie cocktail",
      "Espresso martini",
      "Mimosa",
      "Mulled cider"
    ],
    "correctAnswer": "Jungle Boogie cocktail",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Naked Chef",
      "Programme: The Naked Chef",
      "BBC Two",
      "1999–2001",
      "Series episode or visit: 1999 Birthday Party",
      "Specific cookery focus: Birthday party drink",
      "Correct answer: Jungle Boogie cocktail",
      "Source: TheTVDB The Naked Chef three-series and specials episode guide",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Jamie Oliver early programmes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36533",
    "category": "Television",
    "programme": "The Naked Chef",
    "question": "Which fish did Jamie Oliver bake in a bag for his girlfriend in The Naked Chef?",
    "answers": [
      "Haddock",
      "Sea bass",
      "Halibut",
      "Monkfish"
    ],
    "correctAnswer": "Sea bass",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Naked Chef",
      "Programme: The Naked Chef",
      "BBC Two",
      "1999–2001",
      "Series episode or visit: 1999 Girlfriend",
      "Specific cookery focus: Romantic dinner fish",
      "Correct answer: Sea bass",
      "Source: TheTVDB The Naked Chef three-series and specials episode guide",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Jamie Oliver early programmes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36534",
    "category": "Television",
    "programme": "The Naked Chef",
    "question": "Which German chef and old restaurant friend joined Jamie Oliver in The Naked Chef's Neal Street Reunion?",
    "answers": [
      "Gennaro Contaldo",
      "Gordon Ramsay",
      "Tim Mälzer",
      "Marco Pierre White"
    ],
    "correctAnswer": "Tim Mälzer",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Naked Chef",
      "Programme: The Naked Chef",
      "BBC Two",
      "1999–2001",
      "Series episode or visit: 2000 Neal Street Reunion",
      "Specific cookery focus: Friend from restaurant kitchen",
      "Correct answer: Tim Mälzer",
      "Source: TheTVDB The Naked Chef three-series and specials episode guide",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Jamie Oliver early programmes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36535",
    "category": "Television",
    "programme": "The Naked Chef",
    "question": "Which shellfish did Jamie Oliver add to his pea-and-mint risotto in The Naked Chef's Girls, Girls, Girls?",
    "answers": [
      "Mussels",
      "Scallops",
      "Clams",
      "Prawns"
    ],
    "correctAnswer": "Prawns",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Naked Chef",
      "Programme: The Naked Chef",
      "BBC Two",
      "1999–2001",
      "Series episode or visit: 2000 Girls Girls Girls",
      "Specific cookery focus: Post-night-out risotto",
      "Correct answer: Prawns",
      "Source: TheTVDB The Naked Chef three-series and specials episode guide",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Jamie Oliver early programmes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36536",
    "category": "Television",
    "programme": "The Naked Chef",
    "question": "What motorsport outing formed part of Jamie Oliver's perfect day in The Naked Chef's A Perfect Day?",
    "answers": [
      "Go-karting",
      "Rally driving",
      "Motorcycle trials",
      "Formula One racing"
    ],
    "correctAnswer": "Go-karting",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Naked Chef",
      "Programme: The Naked Chef",
      "BBC Two",
      "1999–2001",
      "Series episode or visit: 2000 A Perfect Day",
      "Specific cookery focus: Ideal day leisure activity",
      "Correct answer: Go-karting",
      "Source: TheTVDB The Naked Chef three-series and specials episode guide",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Jamie Oliver early programmes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36537",
    "category": "Television",
    "programme": "The Naked Chef",
    "question": "At which London greyhound track did Jamie Oliver take his mates in The Naked Chef's Going to the Dogs?",
    "answers": [
      "Wimbledon",
      "Walthamstow",
      "White City",
      "Romford"
    ],
    "correctAnswer": "Walthamstow",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Naked Chef",
      "Programme: The Naked Chef",
      "BBC Two",
      "1999–2001",
      "Series episode or visit: 2000 Going to the Dogs",
      "Specific cookery focus: Greyhound-racing venue",
      "Correct answer: Walthamstow",
      "Source: TheTVDB The Naked Chef three-series and specials episode guide",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Jamie Oliver early programmes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36538",
    "category": "Television",
    "programme": "The Naked Chef",
    "question": "What North African-inspired bread did Jamie Oliver pack for a British seaside picnic in The Naked Chef?",
    "answers": [
      "Focaccia",
      "Naan",
      "Moroccan chickpea flatbread",
      "Pitta with za'atar"
    ],
    "correctAnswer": "Moroccan chickpea flatbread",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Naked Chef",
      "Programme: The Naked Chef",
      "BBC Two",
      "1999–2001",
      "Series episode or visit: 2000 Picnic on the Pier",
      "Specific cookery focus: Beach picnic bread",
      "Correct answer: Moroccan chickpea flatbread",
      "Source: TheTVDB The Naked Chef three-series and specials episode guide",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Jamie Oliver early programmes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36539",
    "category": "Television",
    "programme": "The Naked Chef",
    "question": "What main course did Jamie Oliver cook after learning he would become an uncle in The Naked Chef?",
    "answers": [
      "Beef Wellington",
      "Coq au vin",
      "Vegetable lasagne",
      "Fish pie"
    ],
    "correctAnswer": "Fish pie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Naked Chef",
      "Programme: The Naked Chef",
      "BBC Two",
      "1999–2001",
      "Series episode or visit: 2000 A Bun in the Oven",
      "Specific cookery focus: Celebratory family supper",
      "Correct answer: Fish pie",
      "Source: TheTVDB The Naked Chef three-series and specials episode guide",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Jamie Oliver early programmes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36540",
    "category": "Television",
    "programme": "The Naked Chef",
    "question": "Who was Jamie Oliver about to marry when The Naked Chef filmed Wedding Bells?",
    "answers": [
      "Jules",
      "Nigella",
      "Sally",
      "Laura"
    ],
    "correctAnswer": "Jules",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Naked Chef",
      "Programme: The Naked Chef",
      "BBC Two",
      "1999–2001",
      "Series episode or visit: 2000 Wedding Bells",
      "Specific cookery focus: Pre-wedding family feast",
      "Correct answer: Jules",
      "Source: TheTVDB The Naked Chef three-series and specials episode guide",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Jamie Oliver early programmes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36541",
    "category": "Television",
    "programme": "The Naked Chef",
    "question": "Which New York chef did Jamie Oliver visit at the Danube restaurant in The Naked Chef's Christmas special?",
    "answers": [
      "Daniel Boulud",
      "David Bouley",
      "Jean-Georges Vongerichten",
      "Thomas Keller"
    ],
    "correctAnswer": "David Bouley",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Naked Chef",
      "Programme: The Naked Chef",
      "BBC Two",
      "1999–2001",
      "Series episode or visit: 2000 Christmas in New York",
      "Specific cookery focus: Danube restaurant kitchen",
      "Correct answer: David Bouley",
      "Source: TheTVDB The Naked Chef three-series and specials episode guide",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Jamie Oliver early programmes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36542",
    "category": "Television",
    "programme": "The Naked Chef",
    "question": "Which Jamiroquai frontman invited Jamie Oliver to cook for his band in The Naked Chef's Rock & Roast?",
    "answers": [
      "Chris Martin",
      "Damon Albarn",
      "Jay Kay",
      "Mick Hucknall"
    ],
    "correctAnswer": "Jay Kay",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Naked Chef",
      "Programme: The Naked Chef",
      "BBC Two",
      "1999–2001",
      "Series episode or visit: 2001 Rock & Roast",
      "Specific cookery focus: Singer's home at Princes Risborough",
      "Correct answer: Jay Kay",
      "Source: TheTVDB The Naked Chef three-series and specials episode guide",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Jamie Oliver early programmes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36543",
    "category": "Television",
    "programme": "The Naked Chef",
    "question": "Which photographer was Jamie Oliver's friend in The Naked Chef episode Godfather?",
    "answers": [
      "Mario Testino",
      "Rankin",
      "David Bailey",
      "David Loftus"
    ],
    "correctAnswer": "David Loftus",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Naked Chef",
      "Programme: The Naked Chef",
      "BBC Two",
      "1999–2001",
      "Series episode or visit: 2001 Godfather",
      "Specific cookery focus: Christening dinner for friend's daughter",
      "Correct answer: David Loftus",
      "Source: TheTVDB The Naked Chef three-series and specials episode guide",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Jamie Oliver early programmes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36544",
    "category": "Television",
    "programme": "The Naked Chef",
    "question": "Which chef at Rasca gave Jamie Oliver curry-making tips in The Naked Chef's Curryfest?",
    "answers": [
      "Das Sreedharan",
      "Atul Kochhar",
      "Vivek Singh",
      "Cyrus Todiwala"
    ],
    "correctAnswer": "Das Sreedharan",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Naked Chef",
      "Programme: The Naked Chef",
      "BBC Two",
      "1999–2001",
      "Series episode or visit: 2001 Curryfest",
      "Specific cookery focus: Indian cookery advice",
      "Correct answer: Das Sreedharan",
      "Source: TheTVDB The Naked Chef three-series and specials episode guide",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Jamie Oliver early programmes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36545",
    "category": "Television",
    "programme": "The Naked Chef",
    "question": "Which Essex school did Jamie Oliver return to in The Naked Chef's Back to School?",
    "answers": [
      "Eton College",
      "Newport Grammar",
      "Brentwood School",
      "Colchester Royal Grammar"
    ],
    "correctAnswer": "Newport Grammar",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Naked Chef",
      "Programme: The Naked Chef",
      "BBC Two",
      "1999–2001",
      "Series episode or visit: 2001 Back to School",
      "Specific cookery focus: Annual school prize-giving",
      "Correct answer: Newport Grammar",
      "Source: TheTVDB The Naked Chef three-series and specials episode guide",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Jamie Oliver early programmes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36546",
    "category": "Television",
    "programme": "The Naked Chef",
    "question": "Which Italian chef accompanied Jamie Oliver on a New Forest foraging trip in The Naked Chef?",
    "answers": [
      "Antonio Carluccio",
      "Giorgio Locatelli",
      "Gennaro Contaldo",
      "Aldo Zilli"
    ],
    "correctAnswer": "Gennaro Contaldo",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Naked Chef",
      "Programme: The Naked Chef",
      "BBC Two",
      "1999–2001",
      "Series episode or visit: 2001 The Italian Job",
      "Specific cookery focus: Italian friend and wild ingredients",
      "Correct answer: Gennaro Contaldo",
      "Source: TheTVDB The Naked Chef three-series and specials episode guide",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Jamie Oliver early programmes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36547",
    "category": "Television",
    "programme": "The Naked Chef",
    "question": "Which Cornish village hosted Jamie Oliver's barbecue with Australian chefs in The Naked Chef's At the Beach?",
    "answers": [
      "Padstow",
      "St Ives",
      "Bude",
      "Porth"
    ],
    "correctAnswer": "Porth",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Naked Chef",
      "Programme: The Naked Chef",
      "BBC Two",
      "1999–2001",
      "Series episode or visit: 2001 At the Beach",
      "Specific cookery focus: North Cornwall surf destination",
      "Correct answer: Porth",
      "Source: TheTVDB The Naked Chef three-series and specials episode guide",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Jamie Oliver early programmes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36548",
    "category": "Television",
    "programme": "The Big Family Cooking Showdown",
    "question": "Which Scandinavian dish did the Marks family hope would impress judges on The Big Family Cooking Showdown?",
    "answers": [
      "Swedish meatballs",
      "Danish smørrebrød",
      "Finnish salmon soup",
      "Norwegian waffles"
    ],
    "correctAnswer": "Swedish meatballs",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Big Family Cooking Showdown",
      "Programme: The Big Family Cooking Showdown",
      "BBC Two",
      "2017–2018",
      "Series episode or visit: 2017 opening heat",
      "Specific cookery focus: Grandmother Toren's heritage recipe",
      "Correct answer: Swedish meatballs",
      "Source: TheTVDB official 2017 and 2018 broadcast episode summaries",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Family cooking competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36549",
    "category": "Television",
    "programme": "The Big Family Cooking Showdown",
    "question": "Which UK county did the Dawes family come from in The Big Family Cooking Showdown?",
    "answers": [
      "Dorset",
      "Hampshire",
      "Sussex",
      "Devon"
    ],
    "correctAnswer": "Hampshire",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Big Family Cooking Showdown",
      "Programme: The Big Family Cooking Showdown",
      "BBC Two",
      "2017–2018",
      "Series episode or visit: 2017 second heat",
      "Specific cookery focus: Dawes versus Karim 2017",
      "Correct answer: Hampshire",
      "Source: TheTVDB official 2017 and 2018 broadcast episode summaries",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Family cooking competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36550",
    "category": "Television",
    "programme": "The Big Family Cooking Showdown",
    "question": "From which county did the Pigott brothers arrive for The Big Family Cooking Showdown?",
    "answers": [
      "Essex",
      "Wiltshire",
      "Oxfordshire",
      "Somerset"
    ],
    "correctAnswer": "Oxfordshire",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Big Family Cooking Showdown",
      "Programme: The Big Family Cooking Showdown",
      "BBC Two",
      "2017–2018",
      "Series episode or visit: 2017 third heat",
      "Specific cookery focus: Pigotts versus Hilliards",
      "Correct answer: Oxfordshire",
      "Source: TheTVDB official 2017 and 2018 broadcast episode summaries",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Family cooking competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36551",
    "category": "Television",
    "programme": "The Big Family Cooking Showdown",
    "question": "From which Middle Eastern country did the Ayoubi family originally come in The Big Family Cooking Showdown?",
    "answers": [
      "Lebanon",
      "Jordan",
      "Turkey",
      "Syria"
    ],
    "correctAnswer": "Syria",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Big Family Cooking Showdown",
      "Programme: The Big Family Cooking Showdown",
      "BBC Two",
      "2017–2018",
      "Series episode or visit: 2017 fifth heat",
      "Specific cookery focus: Family sharing-dish heritage",
      "Correct answer: Syria",
      "Source: TheTVDB official 2017 and 2018 broadcast episode summaries",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Family cooking competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36552",
    "category": "Television",
    "programme": "The Big Family Cooking Showdown",
    "question": "Which culinary heritage influenced the Bellamy family's dishes on The Big Family Cooking Showdown?",
    "answers": [
      "Persian",
      "Spanish",
      "Greek",
      "Japanese"
    ],
    "correctAnswer": "Persian",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Big Family Cooking Showdown",
      "Programme: The Big Family Cooking Showdown",
      "BBC Two",
      "2017–2018",
      "Series episode or visit: 2017 seventh heat",
      "Specific cookery focus: Dorset mother and daughters",
      "Correct answer: Persian",
      "Source: TheTVDB official 2017 and 2018 broadcast episode summaries",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Family cooking competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36553",
    "category": "Television",
    "programme": "The Big Family Cooking Showdown",
    "question": "What inexpensive brunch task opened the second series of The Big Family Cooking Showdown?",
    "answers": [
      "A £50 seafood buffet",
      "A £10 brunch for four",
      "A £5 afternoon tea for ten",
      "A £100 banquet for two"
    ],
    "correctAnswer": "A £10 brunch for four",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Big Family Cooking Showdown",
      "Programme: The Big Family Cooking Showdown",
      "BBC Two",
      "2017–2018",
      "Series episode or visit: 2018 first heat",
      "Specific cookery focus: Revised 2018 competition format",
      "Correct answer: A £10 brunch for four",
      "Source: TheTVDB official 2017 and 2018 broadcast episode summaries",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Family cooking competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36554",
    "category": "Television",
    "programme": "The Big Family Cooking Showdown",
    "question": "What dessert did one family member have to prepare alone in The Big Family Cooking Showdown's second-series Episode 2?",
    "answers": [
      "Lemon drizzle cake",
      "Chocolate soufflé",
      "Salted caramel tart",
      "Sticky toffee pudding"
    ],
    "correctAnswer": "Salted caramel tart",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Big Family Cooking Showdown",
      "Programme: The Big Family Cooking Showdown",
      "BBC Two",
      "2017–2018",
      "Series episode or visit: 2018 second episode",
      "Specific cookery focus: Surprise solo bake",
      "Correct answer: Salted caramel tart",
      "Source: TheTVDB official 2017 and 2018 broadcast episode summaries",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Family cooking competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36555",
    "category": "Television",
    "programme": "The Big Family Cooking Showdown",
    "question": "Which classic takeaway dish did families reinvent during the third episode of The Big Family Cooking Showdown in 2018?",
    "answers": [
      "Pizza",
      "Kebab",
      "Currywurst",
      "Fish and chips"
    ],
    "correctAnswer": "Fish and chips",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Big Family Cooking Showdown",
      "Programme: The Big Family Cooking Showdown",
      "BBC Two",
      "2017–2018",
      "Series episode or visit: 2018 third episode",
      "Specific cookery focus: Family fish and chips with a twist",
      "Correct answer: Fish and chips",
      "Source: TheTVDB official 2017 and 2018 broadcast episode summaries",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Family cooking competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36556",
    "category": "Television",
    "programme": "The Big Family Cooking Showdown",
    "question": "Which citrus meringue dessert was the solo challenge in The Big Family Cooking Showdown's 2018 Episode 4?",
    "answers": [
      "Lemon meringue pie",
      "Key lime pie",
      "Orange soufflé",
      "Lemon posset"
    ],
    "correctAnswer": "Lemon meringue pie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Big Family Cooking Showdown",
      "Programme: The Big Family Cooking Showdown",
      "BBC Two",
      "2017–2018",
      "Series episode or visit: 2018 fourth episode",
      "Specific cookery focus: Pastry preparation under pressure",
      "Correct answer: Lemon meringue pie",
      "Source: TheTVDB official 2017 and 2018 broadcast episode summaries",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Family cooking competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36557",
    "category": "Television",
    "programme": "The Big Family Cooking Showdown",
    "question": "Which breaded chicken dish did solo cooks recreate during The Big Family Cooking Showdown's 2018 Episode 7?",
    "answers": [
      "Chicken cordon bleu",
      "Chicken Kiev",
      "Chicken à la king",
      "Chicken Parmesan"
    ],
    "correctAnswer": "Chicken Kiev",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Big Family Cooking Showdown",
      "Programme: The Big Family Cooking Showdown",
      "BBC Two",
      "2017–2018",
      "Series episode or visit: 2018 seventh episode",
      "Specific cookery focus: Favourite of judge Tommy Banks",
      "Correct answer: Chicken Kiev",
      "Source: TheTVDB official 2017 and 2018 broadcast episode summaries",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Family cooking competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36558",
    "category": "Television",
    "programme": "The Big Family Cooking Showdown",
    "question": "What fish-based dish was the second family challenge in The Big Family Cooking Showdown's 2018 Episode 8?",
    "answers": [
      "Fish pie",
      "Ceviche",
      "Fishcakes",
      "Fish fingers"
    ],
    "correctAnswer": "Fishcakes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Big Family Cooking Showdown",
      "Programme: The Big Family Cooking Showdown",
      "BBC Two",
      "2017–2018",
      "Series episode or visit: 2018 eighth episode",
      "Specific cookery focus: Family reinterpretation of fishcakes",
      "Correct answer: Fishcakes",
      "Source: TheTVDB official 2017 and 2018 broadcast episode summaries",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Family cooking competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36559",
    "category": "Television",
    "programme": "The Big Family Cooking Showdown",
    "question": "Which two surprise ingredients formed the second family challenge in The Big Family Cooking Showdown's 2018 Episode 9?",
    "answers": [
      "Chicken and strawberries",
      "Lamb and cinnamon",
      "Prawns and pears",
      "Smoked haddock and chocolate"
    ],
    "correctAnswer": "Smoked haddock and chocolate",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Big Family Cooking Showdown",
      "Programme: The Big Family Cooking Showdown",
      "BBC Two",
      "2017–2018",
      "Series episode or visit: 2018 ninth episode",
      "Specific cookery focus: Two unlikely star ingredients",
      "Correct answer: Smoked haddock and chocolate",
      "Source: TheTVDB official 2017 and 2018 broadcast episode summaries",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Family cooking competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36560",
    "category": "Television",
    "programme": "The Big Family Cooking Showdown",
    "question": "What Spanish seafood dish did finalists attempt to copy in The Big Family Cooking Showdown's Taste It Now Make It challenge?",
    "answers": [
      "Catalan fish stew",
      "Paella valenciana",
      "Gazpacho",
      "Fideuà"
    ],
    "correctAnswer": "Catalan fish stew",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Big Family Cooking Showdown",
      "Programme: The Big Family Cooking Showdown",
      "BBC Two",
      "2017–2018",
      "Series episode or visit: 2018 eleventh episode",
      "Specific cookery focus: Blind tasting and recreation",
      "Correct answer: Catalan fish stew",
      "Source: TheTVDB official 2017 and 2018 broadcast episode summaries",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Family cooking competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36561",
    "category": "Television",
    "programme": "The Big Family Cooking Showdown",
    "question": "Which pair of desserts were described as Angellica Bell's favourites in The Big Family Cooking Showdown's 2018 Episode 12?",
    "answers": [
      "Pavlova and mousse",
      "Carrot cake and trifle",
      "Tiramisu and gelato",
      "Fruit crumble and custard"
    ],
    "correctAnswer": "Carrot cake and trifle",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Big Family Cooking Showdown",
      "Programme: The Big Family Cooking Showdown",
      "BBC Two",
      "2017–2018",
      "Series episode or visit: 2018 twelfth episode",
      "Specific cookery focus: Two familiar British desserts",
      "Correct answer: Carrot cake and trifle",
      "Source: TheTVDB official 2017 and 2018 broadcast episode summaries",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Family cooking competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36562",
    "category": "Television",
    "programme": "The Big Family Cooking Showdown",
    "question": "Which meat-based centrepiece formed a challenge in The Big Family Cooking Showdown's 2018 semi-final?",
    "answers": [
      "Whole suckling pig",
      "Roast turkey crown",
      "Lamb rib guard of honour",
      "Beef brisket pie"
    ],
    "correctAnswer": "Lamb rib guard of honour",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Big Family Cooking Showdown",
      "Programme: The Big Family Cooking Showdown",
      "BBC Two",
      "2017–2018",
      "Series episode or visit: 2018 thirteenth episode",
      "Specific cookery focus: Impressive rib presentation",
      "Correct answer: Lamb rib guard of honour",
      "Source: TheTVDB official 2017 and 2018 broadcast episode summaries",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Family cooking competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36563",
    "category": "Television",
    "programme": "The Big Family Cooking Showdown",
    "question": "How many main courses did finalists have to serve in The Big Family Cooking Showdown's 2018 finale?",
    "answers": [
      "One",
      "Three",
      "Four",
      "Two"
    ],
    "correctAnswer": "Two",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Big Family Cooking Showdown",
      "Programme: The Big Family Cooking Showdown",
      "BBC Two",
      "2017–2018",
      "Series episode or visit: 2018 finale",
      "Specific cookery focus: Three-course celebration with canapés and puddings",
      "Correct answer: Two",
      "Source: TheTVDB official 2017 and 2018 broadcast episode summaries",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "Family cooking competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36564",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "Which local chef competed against Si King and Dave Myers in the Suffolk episode of The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Chris Lee",
      "Andrew Pern",
      "Richard Guest",
      "Noel McMeel"
    ],
    "correctAnswer": "Chris Lee",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 1 Suffolk",
      "Specific cookery focus: Suffolk cook-off after Snape Maltings",
      "Correct answer: Chris Lee",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36565",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "What condiment did the Bikers sample alongside Menai Strait mussels on Anglesey in The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Black garlic",
      "Sea salt",
      "Malt vinegar",
      "Horseradish cream"
    ],
    "correctAnswer": "Sea salt",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 2 Anglesey",
      "Specific cookery focus: Anglesey speciality harvested from sea",
      "Correct answer: Sea salt",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36566",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "At which castle did the Bikers cook in County Fermanagh on The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Enniskillen Castle",
      "Castle Coole",
      "Crom Castle",
      "Dunluce Castle"
    ],
    "correctAnswer": "Crom Castle",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 3 Fermanagh",
      "Specific cookery focus: Fermanagh country landmark",
      "Correct answer: Crom Castle",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36567",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "At which wildlife attraction did the Bikers cook in Cheshire during The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Knowsley Safari Park",
      "Peak Wildlife Park",
      "The Deep aquarium",
      "Chester Zoo"
    ],
    "correctAnswer": "Chester Zoo",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 4 Cheshire",
      "Specific cookery focus: Cheshire episode cookery site",
      "Correct answer: Chester Zoo",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36568",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "What wild fruit did the Bikers gather alongside game birds in Shropshire on The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Hedgerow berries",
      "Pineapples",
      "Olives",
      "Coconuts"
    ],
    "correctAnswer": "Hedgerow berries",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 5 Shropshire",
      "Specific cookery focus: Pheasant shoot and hedgerows",
      "Correct answer: Hedgerow berries",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36569",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "What did the Bikers forage for in Kent during The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "White truffles",
      "Wild vegetables",
      "Sea urchins",
      "Wild coffee beans"
    ],
    "correctAnswer": "Wild vegetables",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 7 Kent",
      "Specific cookery focus: Local foraged produce",
      "Correct answer: Wild vegetables",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36570",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "What insect-keeping activity did the Bikers try in Dumfries and Galloway on The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Silkworm farming",
      "Butterfly breeding",
      "Beekeeping",
      "Ant farming"
    ],
    "correctAnswer": "Beekeeping",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 8 Dumfries and Galloway",
      "Specific cookery focus: Honey production visit",
      "Correct answer: Beekeeping",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36571",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "Which female chef competed against the Bikers in Oxfordshire on The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Rosemary Shrager",
      "Angela Hartnett",
      "Clare Johnson",
      "Emily Watkins"
    ],
    "correctAnswer": "Emily Watkins",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 10 Oxfordshire",
      "Specific cookery focus: Henley Oxfordshire cook-off",
      "Correct answer: Emily Watkins",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36572",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "Which seafood celebration did the Bikers visit in East Sussex during The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Rye Scallop Festival",
      "Whitby Fish Festival",
      "Padstow Lobster Festival",
      "Weymouth Crab Fair"
    ],
    "correctAnswer": "Rye Scallop Festival",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 11 East Sussex",
      "Specific cookery focus: East Sussex shellfish celebration",
      "Correct answer: Rye Scallop Festival",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36573",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "In what unlikely containers did a Gwynedd grower cultivate exotic mushrooms in The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Disused buses",
      "Shipping containers",
      "Railway carriages",
      "Stone water tanks"
    ],
    "correctAnswer": "Shipping containers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 12 Gwynedd",
      "Specific cookery focus: Welsh county mushroom producer",
      "Correct answer: Shipping containers",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36574",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "Which unusual livestock did the Bikers visit on a West Country farm in The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Alpacas",
      "Llamas",
      "Buffalo",
      "Reindeer"
    ],
    "correctAnswer": "Buffalo",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 13 Somerset",
      "Specific cookery focus: Somerset buffalo herd",
      "Correct answer: Buffalo",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36575",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "Which normally imported drink crop did the Bikers find being grown in Cornwall on The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Coffee",
      "Cocoa",
      "Sugar cane",
      "Tea"
    ],
    "correctAnswer": "Tea",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 14 Cornwall",
      "Specific cookery focus: Cornish tea plantation",
      "Correct answer: Tea",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36576",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "What regional speciality known as Black Porkies did the Bikers discover in North Yorkshire on The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "A local breed of pig",
      "A dark chocolate cake",
      "A smoked haddock dish",
      "A black pudding dessert"
    ],
    "correctAnswer": "A local breed of pig",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 15 North Yorkshire",
      "Specific cookery focus: Yorkshire native pig breed",
      "Correct answer: A local breed of pig",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36577",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "What unusual small livestock did the Bikers visit on a Herefordshire farm in The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Frogs",
      "Snails",
      "Crayfish",
      "Silkworms"
    ],
    "correctAnswer": "Snails",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 16 Herefordshire",
      "Specific cookery focus: English edible-snail farming",
      "Correct answer: Snails",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36578",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "Which celebrated blue cheese did the Bikers sample in Leicestershire on The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Wensleydale",
      "Caerphilly",
      "Stilton",
      "Red Leicester"
    ],
    "correctAnswer": "Stilton",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 17 Leicestershire",
      "Specific cookery focus: Protected traditional blue cheese",
      "Correct answer: Stilton",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36579",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "Which poultry did the Bikers source from the Cotswolds in The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Ostrich",
      "Turkey",
      "Duck",
      "Guinea fowl"
    ],
    "correctAnswer": "Guinea fowl",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 18 Gloucestershire",
      "Specific cookery focus: Cotswolds speciality bird",
      "Correct answer: Guinea fowl",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36580",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "Which named Lancashire potatoes were among the first crop gathered by the Bikers in The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Ormskirk new potatoes",
      "Jersey Royals",
      "Maris Piper",
      "King Edward potatoes"
    ],
    "correctAnswer": "Ormskirk new potatoes",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 19 Lancashire",
      "Specific cookery focus: Ormskirk early potato crop",
      "Correct answer: Ormskirk new potatoes",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36581",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "Near which Welsh town did the Bikers go cockling in Carmarthenshire on The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Tenby",
      "Laugharne",
      "Aberystwyth",
      "Porthcawl"
    ],
    "correctAnswer": "Laugharne",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 20 Carmarthenshire",
      "Specific cookery focus: Carmarthenshire cockle gathering",
      "Correct answer: Laugharne",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36582",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "Which pear-based alcoholic drink did the Bikers find being made in a Worcestershire garage in The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Mead",
      "Cider",
      "Perry",
      "Sloe gin"
    ],
    "correctAnswer": "Perry",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 21 Worcestershire",
      "Specific cookery focus: Small-batch pear fermentation",
      "Correct answer: Perry",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36583",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "From which historic Derbyshire estate did the Bikers source venison in The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Chatsworth House",
      "Hardwick Hall",
      "Bolsover Castle",
      "Calke Abbey"
    ],
    "correctAnswer": "Calke Abbey",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 22 Derbyshire",
      "Specific cookery focus: Historic estate's deer",
      "Correct answer: Calke Abbey",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36584",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "Which traditional honey-based drink did the Bikers taste in Monmouthshire during The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Mead",
      "Perry",
      "Cider",
      "Gin"
    ],
    "correctAnswer": "Mead",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 23 Monmouthshire",
      "Specific cookery focus: Welsh honey drink",
      "Correct answer: Mead",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36585",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "Which shellfish from Colchester did the Bikers harvest in Essex on The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Mussels",
      "Oysters",
      "Cockles",
      "Scallops"
    ],
    "correctAnswer": "Oysters",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 24 Essex",
      "Specific cookery focus: Colchester shellfish beds",
      "Correct answer: Oysters",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36586",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "Which lobster-like shellfish did the Bikers catch in Argyll and Bute during The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Crawfish",
      "Spider crabs",
      "Langoustines",
      "Whelks"
    ],
    "correctAnswer": "Langoustines",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 25 Argyll and Bute",
      "Specific cookery focus: West Scotland fishing boats",
      "Correct answer: Langoustines",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36587",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "Which salty marshland vegetable did the Bikers forage in Norfolk during The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Asparagus",
      "Broccoli",
      "Fennel",
      "Samphire"
    ],
    "correctAnswer": "Samphire",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 26 Norfolk",
      "Specific cookery focus: Norfolk marsh foraging",
      "Correct answer: Samphire",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36588",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "Which famous Scottish beef cattle breed did the Bikers source in Aberdeenshire on The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Aberdeen Angus",
      "Highland",
      "Hereford",
      "Charolais"
    ],
    "correctAnswer": "Aberdeen Angus",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 27 Aberdeenshire",
      "Specific cookery focus: Aberdeenshire prime beef",
      "Correct answer: Aberdeen Angus",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36589",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "Which cathedral city served as the cookery setting for Staffordshire in The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Stoke-on-Trent",
      "Lichfield",
      "Stafford",
      "Burton upon Trent"
    ],
    "correctAnswer": "Lichfield",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 28 Staffordshire",
      "Specific cookery focus: County cookery location",
      "Correct answer: Lichfield",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36590",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "In which Hampshire forest did the Bikers forage for wild mushrooms on The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Epping Forest",
      "Sherwood Forest",
      "The New Forest",
      "The Forest of Dean"
    ],
    "correctAnswer": "The New Forest",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 29 Hampshire",
      "Specific cookery focus: Wild fungi in Hampshire",
      "Correct answer: The New Forest",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36591",
    "category": "Television",
    "programme": "The Hairy Bikers' Food Tour of Britain",
    "question": "Which Scottish town was the setting for the Bikers' traditional county cooking in Moray on The Hairy Bikers' Food Tour of Britain?",
    "answers": [
      "Inverness",
      "Aberdeen",
      "Perth",
      "Elgin"
    ],
    "correctAnswer": "Elgin",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Food and Drink Television",
      "Cookery",
      "TV food series",
      "The Hairy Bikers' Food Tour of Britain",
      "Programme: The Hairy Bikers' Food Tour of Britain",
      "BBC Two",
      "2009",
      "Series episode or visit: Episode 30 Moray",
      "Specific cookery focus: Morayshire finale place",
      "Correct answer: Elgin",
      "Source: TheTVDB all thirty county episode descriptions and official Hairy Bikers programme page",
      "Chefs and cooks",
      "Food culture and ingredients",
      "Cookery episode details",
      "Television episode history",
      "British food programmes",
      "UK English",
      "Audited November 2026",
      "County food heritage"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==152||
 new Set(questions.map(q=>q.id)).size!==questions.length||
 new Set(questions.map(q=>q.question.trim().toLowerCase())).size!==questions.length||
 questions.some(q=>q.category!=='Television'||!q.programme||
 q.answers.length!==4||new Set(q.answers.map(a=>a.trim().toLowerCase())).size!==4||
 q.answers.filter(a=>a===q.correctAnswer).length!==1||
 !q.tags.includes(`Programme: ${q.programme}`)||q.tags.length<15||q.dailyEligible!==true)||
 auditAdditions.some(q=>q.tags.length<18||!q.question.includes(q.programme)))
 throw Error('Pack 321 audit validation failed');

module.exports = questions;
