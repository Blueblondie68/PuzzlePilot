
 // quiz_pack295.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: dinnerladies (BBC One, 1998-2000)
 // Both series: 16 original episodes, characters, cast and storylines.
 // Seven individually chosen specialist tags per question; no arbitrary question quota.
 // Leave quiz_bank.js unchanged until the agreed end-of-session bank connection.
 // Row: question | correct answer | three distractors | difficulty | seven specialist tags

 const groups = [
   {
     topic: 'Programme History and Setting',
     facts: `Which comedian created and wrote every episode of dinnerladies?|Victoria Wood|Caroline Aherne|Jennifer Saunders|Dawn French|Easy|Victoria Wood|Programme Creator|Sole Writer|Comedy Scripts|British Sitcom|BBC Production|1998 Debut
 In which year did dinnerladies first appear on British television?|1998|1995|2000|2003|Easy|1998 Premiere|First Broadcast|Series One|British Television History|BBC Comedy|November Debut|Programme Origins
 Which television channel originally broadcast dinnerladies?|BBC One|BBC Two|ITV|Channel 4|Easy|BBC One|Original Broadcaster|British Television|Programme Scheduling|Public Service Broadcasting|1998 Television|Broadcast Network
 How many series of dinnerladies were made?|Two|One|Three|Four|Easy|Two Series|1998 Series|1999 Series|2000 Finale|Complete Programme|Production History|Series Count
 How many original episodes of dinnerladies were broadcast?|Sixteen|Twelve|Eighteen|Twenty-four|Easy|Sixteen Episodes|Six First Series|Ten Second Series|Full Programme|Original Run|Episode Count|British Sitcom
 What sort of workplace is the main setting of dinnerladies?|A factory canteen|A hospital kitchen|A school dining hall|A hotel restaurant|Easy|Factory Canteen|Catering Workers|Industrial Workplace|Staff Breaks|Kitchen Comedy|Manchester Factory|Daily Work
 In which English city is the fictional dinnerladies factory located?|Manchester|Sheffield|Birmingham|Leeds|Easy|Manchester|North West England|Factory Setting|Northern Comedy|Canteen Staff|Industrial City|Regional Television
 What is the name of the fictional factory served by the canteen?|HWD Components|Weatherfield Motors|Goliath Books|Underworld Textiles|Hard|HWD Components|Factory Name|Manufacturing Business|Manchester Setting|Employee Canteen|Workplace Details|Fictional Company
 Who directed all sixteen episodes of dinnerladies?|Geoff Posner|Edgar Wright|Adrian Shergold|Craig Cash|Medium|Geoff Posner|Series Director|Sixteen Episodes|Television Production|BBC Comedy|1998 To 2000|Production Credits
 Who composed the main theme music for dinnerladies?|Victoria Wood|Richard Hawley|Howard Goodall|David Arnold|Medium|Victoria Wood|Theme Music|Programme Composer|Opening Titles|Television Soundtrack|Original Score|Comedy Music
 Which award did dinnerladies win for Best New TV Comedy in 1999?|British Comedy Award|BAFTA Film Award|Olivier Award|Mercury Prize|Medium|British Comedy Awards|Best New TV Comedy|1999 Award|Programme Recognition|Victoria Wood|Comedy Accolade|British Television`,
   },
   {
     topic: 'Regular Characters, Performers and Relationships',
     facts: `Which actress played canteen worker Brenda Furlong, usually called Bren?|Victoria Wood|Julie Walters|Anne Reid|Thelma Barlow|Easy|Brenda Furlong|Bren|Victoria Wood|Lead Character|Canteen Worker|Actor Casting|Manchester Sitcom
 Who played the canteen manager Tony Martin?|Andrew Dunn|Duncan Preston|Peter Martin|Christopher Greet|Easy|Andrew Dunn|Tony Martin|Canteen Manager|Actor Casting|Bren Romance|Workplace Boss|Main Character
 Which actress portrayed the outspoken Dolly Bellfield?|Thelma Barlow|Anne Reid|Celia Imrie|Shobna Gulati|Easy|Thelma Barlow|Dolly Bellfield|Actor Casting|Canteen Regular|Jean Friendship|Main Character|British Actress
 Who played Dolly's fellow dinnerlady Jean?|Anne Reid|Julie Walters|Maxine Peake|Thelma Barlow|Easy|Anne Reid|Jean|Actor Casting|Canteen Worker|Dolly Friendship|Marriage Troubles|Main Cast
 Which actress played the sharp-tongued younger worker Twinkle?|Maxine Peake|Shobna Gulati|Sue Devaney|Celia Imrie|Easy|Maxine Peake|Twinkle|Actor Casting|Younger Dinnerlady|Canteen Banter|Main Cast|British Actress
 Who played the cheerful and talkative Anita?|Shobna Gulati|Maxine Peake|Anne Reid|Julia Deakin|Easy|Shobna Gulati|Anita|Actor Casting|Canteen Worker|Millennium Baby|Main Cast|Character Comedy
 Which performer played maintenance man Stan Meadowcroft?|Duncan Preston|Andrew Dunn|Geoff Posner|Eric Sykes|Easy|Duncan Preston|Stan Meadowcroft|Maintenance Man|Actor Casting|Canteen Regular|Factory Worker|Main Cast
 Who played the new human resources manager Philippa Moorcroft?|Celia Imrie|Victoria Wood|Anne Reid|Julie Walters|Easy|Celia Imrie|Philippa Moorcroft|Human Resources|Actor Casting|Factory Management|Main Cast|Staff Relations
 Which actress played Bren's eccentric mother Petula Gardeno?|Julie Walters|Thelma Barlow|Dora Bryan|Thora Hird|Easy|Julie Walters|Petula Gardeno|Bren Mother|Actor Casting|Family Disruption|Comic Guest|Mother Daughter
 Which actress portrayed the factory secretary Jane?|Sue Devaney|Celia Imrie|Maxine Peake|Shobna Gulati|Medium|Sue Devaney|Jane|Factory Secretary|Actor Casting|Planning Office|Supporting Character|Regular Appearances
 Who is the principal romantic interest of Bren throughout dinnerladies?|Tony Martin|Stan Meadowcroft|Mr Michael|Norman|Easy|Bren|Tony Martin|Workplace Romance|Slow Burn Relationship|Canteen Manager|Character Relationship|Love Story
 What is Stan Meadowcroft's job at the factory?|Maintenance man|Head chef|Accountant|Sales director|Easy|Stan Meadowcroft|Factory Maintenance|Duncan Preston|Repairs|Canteen Visits|Workplace Role|Supporting Staff
 Who is Bren's mother in the series?|Petula Gardeno|Jean Bellfield|Philippa Moorcroft|Connie|Easy|Brenda Furlong|Petula Gardeno|Mother Daughter|Family Relationship|Julie Walters|Difficult Parent|Recurring Storyline
 Which two dinnerladies are established friends who frequently bicker?|Dolly and Jean|Bren and Philippa|Twinkle and Petula|Anita and Jane|Medium|Dolly Bellfield|Jean|Canteen Friendship|Workplace Arguments|Older Colleagues|Recurring Banter|Staff Relationships`,
   },
   {
     topic: 'Series One - Monday and Royals',
     facts: `What kind of delivery is missing from the factory canteen in the first episode, Monday?|Granary torpedoes|Frozen turkeys|Cooking oil|Tea bags|Medium|Monday Episode|Granary Torpedoes|Bread Delivery|Canteen Supplies|Opening Episode|Norman|1998 Story
 What family event is Jean trying to arrange in Monday?|Her daughter's wedding|Her son's graduation|Her parents' anniversary|Her sister's retirement|Easy|Jean|Daughter Wedding|Monday Episode|Family Preparations|Lisa|Canteen Conversation|1998 Premiere
 What does Jean's daughter Lisa do instead of holding the wedding Jean plans?|Marries in secret|Cancels her engagement|Moves to Australia|Joins a convent|Medium|Lisa|Jean Daughter|Secret Marriage|Monday Episode|Wedding Nerves|Family Expectations|1998 Story
 What activity does new HR manager Philippa try to introduce in Monday?|Scottish country dancing|Line dancing|Yoga|A karaoke contest|Easy|Philippa Moorcroft|Scottish Country Dancing|Monday Episode|Staff Morale|Human Resources|Team Building|First Episode
 What kind of guest is expected at the factory in Royals?|A member of the Royal Family|An Olympic athlete|A television chef|A Hollywood actor|Easy|Royal Visit|Royals Episode|Factory Visitors|Staff Preparations|Special Guest|1998 Story|Canteen Excitement
 Which royal title does the visitor in Royals hold?|Duke of Danby|Duke of York|Earl of Wessex|Marquess of Bath|Medium|Duke Of Danby|Prince James|Royals Episode|Fictional Aristocrat|Factory Visit|Stan Meadowcroft|Royal Guest
 Which actor portrayed the visiting Duke of Danby?|Simon Williams|Eric Sykes|Christopher Greet|Geoffrey Palmer|Medium|Simon Williams|Duke Of Danby|Guest Actor|Royals Episode|Royal Visit|1998 Cast|Television Performer
 Which worker recalls meeting the Duke years earlier at Catterick Garrison?|Stan|Tony|Bren|Dolly|Medium|Stan Meadowcroft|Catterick Garrison|Duke Of Danby|Royals Episode|Military Past|Royal Encounter|1967 Memory
 What food does the Duke of Danby particularly request from Bren?|A bacon sandwich|A vegetarian curry|A cream cake|A plate of chips|Medium|Duke Of Danby|Bren|Bacon Sandwich|Royals Episode|Canteen Food|Royal Appetite|Factory Visit`,
   },
   {
     topic: 'Series One - Scandal and Moods',
     facts: `What is the name of Petula's much younger fiancé in Scandal?|Clint|Keith|Martin|Steve|Easy|Petula Gardeno|Clint|Scandal Episode|Much Younger Fiancé|Bren Embarrassment|Romantic Controversy|1998 Story
 Which actor played Petula's young fiancé Clint?|Kenny Doughty|Andrew Dunn|Duncan Preston|Simon Williams|Hard|Kenny Doughty|Clint|Guest Actor|Scandal Episode|Petula Romance|1998 Casting|Teenage Fiancé
 Where does Petula park her caravan in Scandal?|In the factory car park|Outside a police station|In Bren's garden|Beside a seaside hotel|Easy|Petula Gardeno|Caravan|Factory Car Park|Scandal Episode|Unwelcome Arrival|Family Trouble|Manchester
 Who chains herself to the factory gates to protest Petula's engagement?|Clint's mother|Bren|Jean|Philippa|Medium|Shelagh|Clint Mother|Factory Gates|Protest|Scandal Episode|Petula Engagement|Picket Line
 Which American talk-show host inspires an attempted on-site confrontation in Scandal?|Oprah Winfrey|Jerry Springer|Ellen DeGeneres|Ricki Lake|Medium|Oprah Winfrey|Scandal Episode|Talk Show Parody|Bren|Petula|Public Confrontation|Local Journalist
 Which character worries she might be pregnant in Moods?|Twinkle|Bren|Jean|Philippa|Easy|Twinkle|Pregnancy Scare|Moods Episode|Staff Worries|False Alarm|1998 Plot|Younger Worker
 What special workplace gathering does Philippa organise in Moods?|Bring Your Mother to Work day|A fathers' sports day|An office talent show|A factory charity auction|Easy|Philippa Moorcroft|Moods Episode|Bring Your Mother To Work|Staff Relations|Family Visitors|Team Morale|Canteen Gathering
 Which actress played Dolly's sharp-tongued mother Enid?|Thora Hird|Dora Bryan|Julie Walters|Anne Reid|Medium|Thora Hird|Enid|Dolly Mother|Moods Episode|Guest Actress|Family Visit|1998 Cast
 Who played Jean's mother Connie during the family gathering?|Dora Bryan|Thora Hird|Thelma Barlow|Celia Imrie|Medium|Dora Bryan|Connie|Jean Mother|Moods Episode|Guest Actress|Family Event|1998 Cast
 Which actor appeared as Stan's father Jim in Moods?|Eric Sykes|Simon Williams|Duncan Preston|Andrew Dunn|Medium|Eric Sykes|Jim|Stan Father|Moods Episode|Guest Actor|Family Visit|British Comedian`,
   },
   {
     topic: 'Series One - Party and Nightshift',
     facts: `Which country inspires the theme of the factory Christmas party in Party?|Japan|Italy|Brazil|France|Easy|Japan|Christmas Party|Party Episode|Factory Merger|International Theme|Catering Plans|1998 Story
 Why is the factory Christmas party given a Japanese theme?|A merger with a Japanese company is being discussed|The staff have won a trip to Tokyo|A Japanese television crew is filming|The chef has joined a Japanese restaurant|Medium|Japanese Merger|Party Episode|Business Negotiation|Christmas Catering|Company Theme|Factory Management|1998
 Who disrupts Tony and Bren's plans to attend the Christmas party as a couple?|Petula|Twinkle|Dolly|Jane|Easy|Petula Gardeno|Tony Martin|Brenda Furlong|Party Episode|Romantic Interference|Christmas Celebration|Mother Daughter
 What shift are the dinnerladies unexpectedly required to cover in Nightshift?|An overnight shift|An early Sunday shift|A week of split shifts|A bank-holiday breakfast shift|Easy|Nightshift Episode|Overnight Work|Unexpected Factory Order|Canteen Staffing|Work Schedule|1998 Finale|Factory Production
 What treatment is Tony receiving when he is absent during Nightshift?|Chemotherapy|Physiotherapy|Dialysis|Dental surgery|Medium|Tony Martin|Chemotherapy|Nightshift Episode|Cancer Treatment|Manager Absence|Health Storyline|Hospital Visit
 What is the name of Tony's bad-tempered temporary replacement in Nightshift?|Nicola Bodeux|Philippa Moorcroft|Petula Gardeno|Carmel|Medium|Nicola Bodeux|Temporary Manager|Nightshift Episode|Staff Conflict|Canteen Walkout|Guest Character|1998 Finale
 What job does Nicola Bodeux decide to pursue after leaving the canteen?|Lighthouse keeper|Train driver|Travel agent|Museum curator|Medium|Nicola Bodeux|Lighthouse Keeper|Nightshift Episode|Career Change|Temporary Manager|Staff Walkout|First Series Finale
 Who stays behind when most workers walk out in protest at Nicola's behaviour?|Bren|Dolly|Jean|Twinkle|Easy|Brenda Furlong|Nightshift Episode|Staff Walkout|Loyal Employee|Temporary Manager|Canteen Crisis|Overnight Work`,
   },
   {
     topic: 'Series Two - Catering, Trouble and Holidays',
     facts: `What renovation is taking place without closing the canteen in Catering?|Painting and decorating|Installing a swimming pool|Replacing the roof|Building a second floor|Easy|Catering Episode|Decorators|Canteen Painting|Workplace Disruption|Series Two Premiere|Renovations|1999 Story
 What object traps the bread delivery worker Glenda in Catering?|A large ladder|A broken lift|A fallen cupboard|A loading trolley|Medium|Glenda|Ladder|Catering Episode|Delivery Worker|Decorators|Canteen Accident|1999 Story
 Which actress played the inexperienced work-experience girl Sigourney in Catering?|Joanne Froggatt|Sue Cleaver|Maxine Peake|Sue Devaney|Medium|Joanne Froggatt|Sigourney|Work Experience|Catering Episode|Guest Actress|Series Two Opening|1999 Cast
 Why is Jean especially upset in Trouble?|Her husband has left her|She has been made redundant|Her daughter is moving abroad|She has lost her home|Easy|Jean|Marriage Breakdown|Trouble Episode|Husband Leaves|Workplace Anger|Dolly Friendship|1999 Plot
 What is the profession of the woman Jean's husband leaves her for?|Dental hygienist|Police officer|Travel agent|Nurse|Medium|Jean Husband|Dental Hygienist|Trouble Episode|Affair|South Wales|Marriage Separation|Romantic Betrayal
 Who secretly sends Bren flowers in Trouble to thank her for helping his father?|Stan|Tony|Mr Michael|Norman|Medium|Stan Meadowcroft|Brenda Furlong|Thank You Flowers|Trouble Episode|Father Support|Rumoured Lover|Anonymous Bouquet
 Which Hollywood actor does Petula claim is the father of her baby in Trouble?|Leonardo DiCaprio|Brad Pitt|George Clooney|Tom Cruise|Medium|Petula Gardeno|Leonardo DiCaprio|Trouble Episode|Pregnancy Claim|Celebrity Joke|Bren Mother|1999 Story
 To which Spanish resort are Tony and Bren hoping to travel in Holidays?|Marbella|Benidorm|Ibiza Town|Salou|Easy|Tony Martin|Brenda Furlong|Marbella|Holidays Episode|Spanish Resort|Romantic Trip|1999 Plot
 What happens to Petula's caravan in Holidays?|It explodes|It is stolen|It is flooded|It is sold|Medium|Petula Gardeno|Caravan Explosion|Holidays Episode|Financial Demand|Family Crisis|Bren Savings|1999 Story
 What does Bren sacrifice to help her mother after the caravan disaster?|Her holiday money|Her wedding ring|Her car|Her job|Easy|Brenda Furlong|Petula Gardeno|Holiday Savings|Holidays Episode|Family Sacrifice|Marbella Plans|Generosity`,
   },
   {
     topic: 'Series Two - Fog, Gamble and Christmas',
     facts: `What weather condition creates confusion around an escaped prisoner in Fog?|Thick fog|Heavy snow|A thunderstorm|A heatwave|Easy|Fog Episode|Thick Fog|Escaped Convict|Poor Visibility|Factory Security|1999 Plot|Prison Escape
 From which Manchester prison has a prisoner escaped in Fog?|Strangeways|Wandsworth|Pentonville|Holloway|Medium|Strangeways Prison|Fog Episode|Escaped Murderer|Manchester|Prison Break|Police Concern|Mistaken Identity
 Which visiting service asks factory staff to give blood in Fog?|National Blood Service|Mountain Rescue|The fire brigade|The Coastguard|Easy|Blood Donation|National Blood Service|Fog Episode|Canteen Visitors|Factory Health|Medical Appeal|1999 Story
 What is Bren secretly afraid of during the blood-donation visit?|Needles|The sight of food|Elevators|Heights|Easy|Brenda Furlong|Needle Phobia|Fog Episode|Blood Donation|Medical Anxiety|Faintness|Secret Fear
 Who is wrongly suspected of being the escaped convict in Fog?|Jean's new boyfriend|Tony's brother|Stan's father|The bread delivery driver|Medium|Jean|New Boyfriend|Fog Episode|Mistaken Convict|Philippa Moorcroft|Police Alert|1999 Plot
 What do the canteen workers and Planning department bet on in Gamble?|Whether Bren and Tony become a couple before Christmas|Whether Stan retires before Christmas|Whether the canteen passes an inspection|Whether Twinkle leaves the factory|Medium|Gamble Episode|Bren Tony Romance|Workplace Wager|Planning Department|Christmas Deadline|Fifty Pound Bet|1999 Story
 Who unexpectedly arrives just after Bren and Tony's first kiss in Gamble?|Bren's estranged husband|Tony's father|Petula's fiancé|Jean's daughter|Medium|Martin|Bren Husband|Gamble Episode|First Kiss|Surprise Arrival|Marriage Secret|Romantic Complication
 What personal occasion does Bren celebrate on Christmas Eve in Christmas?|Her birthday|Her wedding anniversary|Her retirement|Her graduation|Easy|Brenda Furlong|Christmas Eve Birthday|Christmas Episode|Surprise Party|Tony Martin|December Celebration|1999 Special
 What surprise has Tony arranged for Bren in the episode Christmas?|A birthday party|A new car|A holiday cottage|A job promotion|Easy|Tony Martin|Brenda Furlong|Surprise Birthday Party|Christmas Episode|Romantic Gesture|Canteen Colleagues|1999 Special
 Where do Bren and Tony travel to spend Christmas together?|Scotland|France|Wales|Portugal|Medium|Tony Martin|Brenda Furlong|Scotland Trip|Christmas Episode|Holiday Together|New Relationship|Christmas Plans`,
   },
   {
     topic: 'Series Two - Millennium and Christine',
     facts: `What major event are the factory workers preparing for in Minnellium?|New Year's Eve 1999|The Queen's Jubilee|The 2002 World Cup|The factory centenary|Easy|Minnellium Episode|New Years Eve|1999 Millennium|Factory Dinner|Century Change|December 1999|Celebration
 What unexpected discovery is made on the factory fire escape in Minnellium?|An abandoned baby|A suitcase of money|A stray dog|A hidden camera|Easy|Abandoned Baby|Factory Fire Escape|Minnellium Episode|Mystery Parent|Canteen Staff|New Year|1999 Special
 Who turns out to be the mother of the abandoned baby in Minnellium?|Anita|Twinkle|Bren|Jean|Medium|Anita|Abandoned Baby|Minnellium Episode|New Mother|Surprise Return|Baby Identity|1999 Finale
 Which couple begin a romantic relationship around the millennium celebrations?|Stan and Jean|Tony and Philippa|Dolly and Mr Michael|Twinkle and Norman|Medium|Stan Meadowcroft|Jean|Minnellium Episode|New Years Eve|New Romance|Canteen Staff|1999 Story
 Who replaces Anita while she is away from the canteen in Christine?|Christine|Jane|Petula|Lisa|Easy|Christine|Anita Absence|Christine Episode|Temporary Worker|Canteen Replacement|2000 Story|New Staff
 Which actress plays the unpopular new worker Christine?|Kay Adshead|Sue Cleaver|Sue Devaney|Julie Walters|Hard|Kay Adshead|Christine|Guest Actress|Christine Episode|Temporary Dinnerlady|2000 Cast|Replacement Worker
 Which personal problem makes Christine especially unpopular with her colleagues?|Persistent flatulence|Compulsive singing|Constant sneezing|Excessive lateness|Medium|Christine|Flatulence|Christine Episode|Staff Discomfort|Hygiene Problem|Unpopular Worker|Workplace Complaints
 What does social services want Bren to do about her mother in Christine?|Take Petula into her home|Move Petula into the factory|Send Petula to Scotland|Give Petula a job in the canteen|Medium|Social Services|Brenda Furlong|Petula Gardeno|Christine Episode|Living Arrangements|Family Responsibility|2000 Plot`,
   },
   {
     topic: 'Series Two - Gravy and Toast',
     facts: `Which television quiz show chooses Bren as a contestant in Gravy?|Totally Trivial|Mastermind|The Weakest Link|University Challenge|Easy|Brenda Furlong|Totally Trivial|Gravy Episode|Quiz Contestant|Television Appearance|Prize Money|2000 Story
 Which presenter appears as the host of Totally Trivial?|Henry Kelly|Michael Barrymore|Chris Tarrant|Bob Holness|Medium|Henry Kelly|Totally Trivial|Quiz Host|Gravy Episode|Guest Appearance|Television Presenter|2000 Finale
 Who puts Bren forward to appear on Totally Trivial?|Jean|Dolly|Stan|Philippa|Medium|Jean|Brenda Furlong|Quiz Application|Gravy Episode|Totally Trivial|Friend Support|TV Contest
 Where do Bren and Tony consider moving to begin a new life?|Scotland|Ireland|Cornwall|Spain|Easy|Bren Tony Romance|Scotland Move|Gravy Episode|New Life|Relocation Plans|Leaving Factory|2000 Finale
 What does Petula announce about her health in Gravy?|She has only weeks to live|She has made a full recovery|She is expecting twins|She needs new glasses|Medium|Petula Gardeno|Terminal Illness|Gravy Episode|Ambulance Arrival|Family News|Mother Daughter|Final Episodes
 What is the main prize Bren hopes to win in the final round of Totally Trivial?|Ten thousand pounds|One hundred pounds|A new car|A holiday cruise|Easy|Ten Thousand Pounds|Totally Trivial|Bren Contestant|Toast Episode|Final Round|Quiz Prize|2000 Finale
 Why does Bren miss the chance to play the final quiz-show round in Toast?|Her mother dies during a hospital visit|Her train is cancelled|She loses her invitation|She forgets the programme date|Medium|Brenda Furlong|Petula Death|Hospital Visit|Toast Episode|Missed Quiz|Family Loss|Series Finale
 What household appliance breaks down in the final episode, Toast?|The toaster|The dishwasher|The freezer|The microwave|Easy|Broken Toaster|Toast Episode|Canteen Equipment|Factory Budget|Kitchen Problem|Final Episode|2000
 What does Petula leave Bren in a large rubbish bag?|A large sum of money|Old photograph albums|A collection of books|Her caravan keys|Medium|Petula Gardeno|Rubbish Bag|Hidden Inheritance|Toast Episode|Video Will|Brenda Furlong|Finale Twist
 Which character mistakenly throws away Petula's money-filled bag?|Dolly|Jean|Twinkle|Philippa|Medium|Dolly Bellfield|Thrown Away Bag|Petula Inheritance|Toast Episode|Lost Money|Canteen Confusion|2000 Finale
 What unwelcome news does Philippa announce about the canteen in Toast?|It is closing down|It is moving to London|It is being taken over by a school|It must open twenty-four hours a day|Easy|Philippa Moorcroft|Canteen Closure|Toast Episode|Redundancy|Factory Change|Finale Announcement|Workplace Ending
 How does Bren choose to use the recovered inheritance in the final episode?|Share it with her colleagues|Buy the factory|Donate it all to the police|Spend it on a yacht|Easy|Brenda Furlong|Shared Inheritance|Toast Episode|Canteen Colleagues|Petula Money|Generous Ending|Final Scene`,
   },
 ];

 const FIRST_ID = 12418;
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
       throw new Error(`Invalid difficulty or specialist tags at ${id}`);
     }
     answers.splice(index % 4, 0, correctAnswer);
     const rawTags = [
       'British Television', 'British Sitcom', 'Comedy', 'dinnerladies', 'BBC One',
       'Victoria Wood', '1998-2000', '1990s', '2000s', 'Factory Canteen Comedy',
       group.topic, correctAnswer, ...specificTags
     ];
     const tags = [...new Map(rawTags.map(tag => [tag.toLowerCase(), tag])).values()];
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

 const EXPECTED_COUNT = 92;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_12418' ||
     questions[questions.length - 1].id !== 'tv_12509') {
   throw new Error('Unexpected question ID range');
 }
 if (new Set(questions.map(q => q.id)).size !== questions.length ||
     new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
   throw new Error('Duplicate IDs or question wording');
 }
 if (questions.some(q =>
   q.category !== 'Television' || q.answers.length !== 4 ||
   !q.answers.includes(q.correctAnswer) || q.tags.length < 16 ||
   q.tags.some(tag => !tag) || q.dailyEligible !== true
 )) {
   throw new Error('Incomplete exported question metadata');
 }
 module.exports = questions;
