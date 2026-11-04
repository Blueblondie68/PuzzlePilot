
 // quiz_pack292.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: Early Doors (BBC Two, 2003-2004)
 // The original twelve episodes, across both series, of the pub sitcom.
 // Seven individually selected question-specific tags on every question.
 // The number of questions follows supported, distinct material; no padding.
 // Keep quiz_bank.js unchanged until the agreed end-of-session connection.
 // Row: question | correct answer | wrong1 | wrong2 | wrong3 | difficulty | seven specific tags

 const groups = [
   {
     topic: 'Broadcast, Creators and Music',
     facts: `In which year did the British sitcom Early Doors first air?|2003|1999|2001|2006|Easy|First Broadcast|Series One|May Premiere|Television Debut|BBC Comedy|Original Run|Noughties Television
 On which channel did Early Doors originally appear?|BBC Two|BBC One|ITV1|Channel 4|Easy|Original Channel|BBC Broadcasting|Television Scheduling|First Transmission|Public Service Television|British Comedy|2003 Debut
 How many original series of Early Doors were made?|Two|One|Three|Four|Easy|Two Series|2003 First Series|2004 Second Series|Complete Run|Programme History|Television Production|Series Count
 How many original television episodes of Early Doors were broadcast?|Twelve|Six|Eighteen|Twenty-four|Easy|Twelve Episodes|Six Per Series|Complete Sitcom|Episode Count|2003 Run|2004 Run|Original Series
 What is the name of the pub at the centre of Early Doors?|The Grapes|The Rovers Return|The Queen Vic|The Nag's Head|Easy|The Grapes|Fictional Public House|Local Regulars|Ken Landlord|Pub Setting|Community Life|Manchester Area
 Which part of England provides the setting for Early Doors?|Greater Manchester|Cornwall|West Yorkshire|East Sussex|Easy|Greater Manchester|Northern England|Local Pub|Regional Setting|English Community|Comedy Location|Pub Regulars
 Which duo wrote and created Early Doors?|Craig Cash and Phil Mealey|Ricky Gervais and Stephen Merchant|John Cleese and Connie Booth|Ben Elton and Rik Mayall|Medium|Craig Cash|Phil Mealey|Writing Partners|Programme Creators|Original Scripts|Television Collaboration|Comedy Writers
 Who directed the first series of Early Doors?|Adrian Shergold|Craig Cash|Peter Kay|Paul Jackson|Hard|Adrian Shergold|Series One Director|2003 Episodes|Production Credits|BBC Sitcom|Television Direction|First Series
 Which co-creator directed the second series of Early Doors?|Craig Cash|Phil Mealey|John Henshaw|Mark Benton|Medium|Craig Cash|Series Two Director|2004 Episodes|Co Creator|Production Credits|Directing Career|BBC Comedy
 Who performed Small World, the song used as the theme to Early Doors?|Roddy Frame|Paul Weller|Richard Hawley|David Gray|Medium|Roddy Frame|Small World|Theme Performer|Scottish Singer Songwriter|Opening Music|Television Soundtrack|BBC Theme
 What is the title of the song used as the Early Doors theme?|Small World|The Whole of the Moon|A New England|The Only Way Is Up|Medium|Small World|Roddy Frame|Theme Song|Opening Titles|Sitcom Music|Scottish Songwriter|Soundtrack`,
   },
   {
     topic: 'Main Cast and Characters',
     facts: `Which actor played The Grapes landlord Ken?|John Henshaw|Craig Cash|Mark Benton|Rodney Litchfield|Easy|John Henshaw|Ken|Landlord Role|Lead Casting|The Grapes|Manchester Actor|Pub Proprietor
 Who played pub regular Joe, one of the two drinking companions?|Craig Cash|Phil Mealey|Peter Wight|James Quinn|Easy|Craig Cash|Joe|Pub Regular|Actor Casting|Co Creator|Drinking Companion|Local Character
 Which co-writer played Joe's friend Duffy?|Phil Mealey|Craig Cash|John Henshaw|Mark Benton|Easy|Phil Mealey|Duffy|Co Writer Actor|Pub Regular|Joe Friendship|Character Casting|Comedy Partnership
 Which actress portrayed Ken's mother Jean?|Rita May|Susan Cookson|Lorraine Cheshire|Joan Kempson|Medium|Rita May|Jean|Ken Mother|Regular Casting|Family Life|Upstairs Flat|Pub Family
 Who portrayed Melanie, Ken's stepdaughter?|Christine Bottomley|Lisa Millett|Maxine Peake|Susan Cookson|Easy|Christine Bottomley|Melanie|Ken Stepdaughter|Actor Casting|Young Adult|Bar Work|Family Storyline
 Which actor played the grumpy regular Tommy?|Rodney Litchfield|Mark Benton|Peter Wight|James Quinn|Medium|Rodney Litchfield|Tommy|Regular Customer|Actor Casting|Mild Drinker|Miserly Character|Favourite Chair
 Which actor played Eddie, who loves telling rambling stories?|Mark Benton|Rodney Litchfield|Craig Cash|John Henshaw|Easy|Mark Benton|Eddie|Joan Partner|Actor Casting|Pub Storyteller|Traffic Lights|Regular Drinker
 Which actress played Eddie's partner Joan?|Lorraine Cheshire|Rita May|Susan Cookson|Joan Kempson|Hard|Lorraine Cheshire|Joan|Eddie Partner|Actor Casting|Anniversary Couple|Pub Regular|Married Life
 Which actor played the police officer Phil?|James Quinn|Peter Wight|John Henshaw|Phil Mealey|Medium|James Quinn|Phil|Police Officer|Actor Casting|Nige Partner|Back Room Drinks|Local Policeman
 Which actor portrayed Phil's fellow police officer Nige?|Peter Wight|James Quinn|Mark Benton|Craig Cash|Medium|Peter Wight|Nige|Police Officer|Actor Casting|Phil Partner|Pub Back Room|Policing Comedy
 Which actress played the barmaid Tanya?|Susan Cookson|Lisa Millett|Rita May|Lorraine Cheshire|Medium|Susan Cookson|Tanya|Barmaid|Actor Casting|Ken Romance|The Grapes Employee|Pub Staff
 Which future film star played Melanie's first-series boyfriend Liam?|James McAvoy|Lee Ingleby|Martin Freeman|Joe Gilgun|Easy|James McAvoy|Liam|Series One Boyfriend|Scottish Student|Guest Casting|Melanie Romance|Film Actor
 Which actor played Melanie's new boyfriend Dean in the second series?|Lee Ingleby|James McAvoy|Christopher Eccleston|Stephen Graham|Medium|Lee Ingleby|Dean|Series Two Boyfriend|Guest Casting|Melanie Romance|2004 Character|Young Man`,
   },
   {
     topic: 'Life at The Grapes',
     facts: `What is Melanie's family relationship to the landlord Ken?|She is his stepdaughter|She is his niece|She is his sister|She is his granddaughter|Easy|Ken|Melanie|Stepfather Stepdaughter|Family Relationship|Pub Household|Parenthood|Biological Father Search
 Which regular older character is Ken's mother?|Jean|Winnie|Joan|Debbie|Easy|Jean|Ken Mother|Family Relationship|Upstairs Flat|Household Routine|Pub Family|Rita May Character
 Why is Ken living without his wife when the series begins?|She left him for his best friend|She is working overseas|She joined the police|She moved to a different pub|Medium|Ken Separation|Estranged Wife|Best Friend Betrayal|Family Backstory|Single Landlord|Marriage Breakdown|Melanie Family
 Which Grapes employee has romantic feelings for Ken?|Tanya|Jean|Joan|Winnie|Easy|Tanya|Ken|Unspoken Attraction|Barmaid Romance|Workplace Relationship|2004 Story|Pub Staff
 Which two regulars spend much of their time chatting and drinking together?|Joe and Duffy|Phil and Tommy|Eddie and Ken|Nige and Liam|Easy|Joe|Duffy|Drinking Friends|Pub Banter|Regular Customers|After Work|Co Writers Roles
 Which drink is Tommy particularly fond of ordering?|Mild|Champagne|Gin and tonic|Cider and blackcurrant|Medium|Tommy|Pint Of Mild|Favourite Drink|Older Regular|Pub Routine|Beer Order|The Grapes
 Who is Eddie's partner and fellow regular at The Grapes?|Joan|Tanya|Debbie|Jean|Easy|Eddie|Joan|Married Couple|Pub Regulars|Anniversary|Character Relationship|Mark Benton
 What job does Winnie do at The Grapes and the flat upstairs?|Cleaner|Chef|Accountant|Taxi driver|Medium|Winnie|Pub Cleaner|Upstairs Flat|Jean Friend|Domestic Work|The Grapes Staff|Joan Kempson
 Which regular keeps leaving her two children in the car while she visits the pub?|Debbie|Tanya|Joan|Melanie|Medium|Debbie|Children In Car|Irresponsible Parenting|Pub Visits|Lisa Millett|Tanya Friend|Crisps Excuse
 What kind of entertainment business does Joe dream of running?|A mobile disco|A comedy club|A cinema|A theatre company|Medium|Joe|Aspiring DJ|Mobile Disco|Krazy Roadshow|Music Entertainment|Work Ambition|Melanie Birthday
 Which two policemen are repeatedly given drinks in exchange for overlooking after-hours drinking?|Phil and Nige|Ken and Tommy|Liam and Dean|Joe and Eddie|Medium|Phil|Nige|Free Drinks|After Hours Drinking|Police Favour|Pub Back Room|Ken Arrangement`,
   },
   {
     topic: 'Series One Stories - 2003',
     facts: `What temporary road feature outside The Grapes causes repeated annoyance in Series 1?|Traffic lights|A toll booth|A pedestrian bridge|A roundabout|Easy|Temporary Traffic Lights|Eddie|Roadworks|Opening Episode|Pub Conversation|2003 Plot|Local Nuisance
 What keeps appearing in the gentlemen's urinals during the first series?|Cigarette ends|Lost keys|Lottery tickets|Coins|Medium|Cigarette Ends|Blocked Urinals|The Grapes|Recurring Mystery|Opening Episode|Toilet Problem|2003 Plot
 Which character cooks Melanie a meal for her birthday early in the first series?|Liam|Dean|Joe|Tommy|Medium|Liam|Melanie Birthday|Romantic Meal|Young Couple|Series One Episode Two|Kitchen Plans|2003
 After a domestic disagreement in Series 1, where is Joe sleeping?|The spare room|His car|The pub cellar|His brother's flat|Medium|Joe|Spare Room|Marriage Troubles|Wardrobe Incident|Series One|Domestic Argument|2003
 What is the name of the pub regulars' much-discussed outing in Series 1?|The Big Boys' Beano|The Summer Ball|The Grapes Gala|The Annual Ramble|Medium|Big Boys Beano|Group Outing|Pub Regulars|Ken Organisation|Series One Finale|Racing Trip|2003
 Which racecourse city is the destination for the Big Boys' Beano?|York|Ascot|Chester|Newmarket|Medium|York Races|Big Boys Beano|Horse Racing|Day Trip|Pub Regulars|First Series Finale|Coach Outing
 Which Greek island does Jean hope to visit on holiday in Series 1?|Crete|Corfu|Rhodes|Kos|Medium|Jean|Crete|Holiday Plans|Greek Island|Travel Wish|First Series|2003 Story
 What traditional pub competition causes tension when a winner is drawn in Series 1?|The football card|A darts league|A dominoes tournament|A snooker championship|Medium|Football Card|Pub Competition|Prize Draw|Series One Episode Four|Regulars|Winning Entry|2003
 Which couple celebrate their wedding anniversary with a night at The Grapes?|Eddie and Joan|Joe and Tanya|Ken and Jean|Phil and Debbie|Easy|Eddie|Joan|Wedding Anniversary|Series One Episode Five|Celebration Clothes|Married Couple|Fish Supper
 Which chocolates mysteriously go missing from Jean's possessions in Series 1?|Maltesers|Quality Street|After Eights|Ferrero Rocher|Easy|Jean|Missing Maltesers|Stolen Sweets|Series One Episode Five|Household Mystery|Winnie Friendship|Chocolate
 Which notoriously reluctant round-buyer shocks the pub by paying for drinks in the Series 1 finale?|Tommy|Joe|Duffy|Phil|Medium|Tommy|Bought A Round|Unexpected Generosity|First Series Finale|Big Boys Beano|Pub Custom|2003
 Which personal milestone does Melanie achieve during the first-series finale?|She meets her biological father|She gets married|She joins the police|She buys the pub|Medium|Melanie|Biological Father|First Meeting|Series One Finale|Ken Concerns|Family Identity|2003`,
   },
   {
     topic: 'Series Two Stories and Finale - 2004',
     facts: `What type of money causes trouble at the bar at the start of Series 2?|Counterfeit banknotes|Foreign coins|Stolen casino chips|Out-of-date vouchers|Medium|Counterfeit Banknotes|Series Two Premiere|Pub Counter|Suspicious Money|Phil And Nige|2004 Plot|Cash Handling
 Which pair of police officers investigate the dodgy banknotes at The Grapes?|Phil and Nige|Ken and Joe|Eddie and Tommy|Duffy and Liam|Easy|Phil|Nige|Counterfeit Investigation|Local Police|Series Two Premiere|Bad Banknotes|Pub Mystery
 What illness keeps Ken off his feet early in the second series?|Flu|Chickenpox|Measles|Appendicitis|Easy|Ken|Flu|Feeling Poorly|Series Two Episode Two|Landlord Illness|Pub Management|2004 Story
 Which recurring pub character is facing the prospect of single life in Series 2?|Duffy|Tommy|Eddie|Nige|Medium|Duffy|Relationship Breakdown|Feeling Poorly|Single Life|Marriage Trouble|2004 Story|Joe Friend
 What event brings the regulars together in the third episode of Series 2?|A pub quiz|A karaoke contest|A charity auction|A bingo marathon|Easy|Quiz Night|The Grapes|Pub Competition|2004 Episode|Regulars Gathering|Questions And Answers|Series Two
 What is the prize offered at The Grapes quiz night?|A box of chocolates|A holiday in Spain|A new television|A year's free beer|Medium|Box Of Chocolates|Quiz Prize|Quiz Night|Pub Regulars|Series Two Episode Three|Chocolate Gift|2004
 What food does Ken provide for the regulars during the quiz night?|Sandwiches|Roast dinners|Pizzas|Fish pies|Easy|Ken|Sandwiches|Quiz Night|Pub Hospitality|Free Food|Series Two|Tanya Romance
 Which boyfriend is Melanie seeing during the second series?|Dean|Liam|Duffy|Nige|Easy|Dean|Melanie|New Boyfriend|Series Two Relationship|Lee Ingleby|Young Couple|2004
 What major decision does Ken consider making about The Grapes later in Series 2?|Giving up the pub|Turning it into a hotel|Opening a second branch|Converting it into a school|Medium|Ken|Leaving The Grapes|Landlord Decision|Business Uncertainty|Series Two Episode Four|Pub Future|2004
 What sort of venue do the regulars fear The Grapes could become?|A fun pub|A nightclub|A museum|A wine cellar|Medium|Fun Pub|Regulars Concerns|Pub Redevelopment|Series Two Episode Five|Ken Future|Local Tradition|2004
 Which older regular takes on a new job in the second series?|Tommy|Eddie|Joe|Ken|Medium|Tommy|New Job|Do You Like The Circus|Pension Income|Older Pub Regular|Series Two|2004 Story
 What birthday does Melanie celebrate in the series finale?|Her twenty-first|Her eighteenth|Her thirtieth|Her sixteenth|Easy|Melanie|Twenty First Birthday|Series Finale|2004 Celebration|Family Party|The Grapes|Part Time
 What is the name of Joe's entertainment outfit performing at Melanie's birthday party?|Jumping Joe's Krazy Roadshow|Joe's Jolly Jazz Band|Disco Duffy Productions|The Grapes All Stars|Hard|Jumping Joes Krazy Roadshow|Joe DJ|Melanie Birthday|Mobile Disco|Series Finale|Party Entertainment|2004
 What do Phil and Nige try out at Melanie's twenty-first birthday celebration?|A new business venture|A new police uniform|A new motorbike|A restaurant menu|Medium|Phil|Nige|Business Venture|Melanie Birthday|Series Finale|Side Hustle|2004 Celebration
 Which older regular is particularly eager to get to the birthday-party buffet?|Tommy|Jean|Joe|Duffy|Medium|Tommy|Birthday Buffet|Melanie Twenty First|Series Finale|Free Food|Pub Regular|2004 Ending`,
   },
 ];

 const FIRST_ID = 12201;
 let index = 0;
 const questions = groups.flatMap(group =>
   group.facts.trim().split('\n').map(line => {
     const parts = line.trim().split('|').map(part => part.trim());
     const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
     if (parts.length !== 13) {
       throw new Error(`Expected seven specialist tags at ${id}; received ${parts.length - 6}`);
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
       throw new Error(`Invalid difficulty or tag at ${id}`);
     }
     answers.splice(index % 4, 0, correctAnswer);
     const tags = [...new Map([
       'British Television', 'British Sitcom', 'Northern Comedy', 'Early Doors',
       'BBC Two', '2003-2004', '2000s', 'Manchester Pub Comedy',
       group.topic, correctAnswer, ...specificTags
     ].map(tag => [tag.toLowerCase(), tag])).values()];
     const item = {
       id,
       category: 'Television',
       question,
       answers,
       correctAnswer,
       difficulty,
       tags,
       dailyEligible: true
     };
     index += 1;
     return item;
   })
 );

 const EXPECTED_COUNT = 62;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_12201' || questions[questions.length - 1].id !== 'tv_12262') {
   throw new Error('Unexpected question ID range');
 }
 if (new Set(questions.map(q => q.id)).size !== questions.length ||
     new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
   throw new Error('Duplicate question IDs or wording');
 }
 if (questions.some(q =>
   q.category !== 'Television' || q.answers.length !== 4 ||
   !q.answers.includes(q.correctAnswer) || q.tags.length < 15 ||
   q.tags.some(tag => !tag) || q.dailyEligible !== true
 )) {
   throw new Error('Incomplete exported question metadata');
 }
 module.exports = questions;
