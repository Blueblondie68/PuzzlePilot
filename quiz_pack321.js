
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
 module.exports = questions;
