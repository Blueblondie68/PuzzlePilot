// PuzzlePilot - The Bigggggg Quiz - Pack 440
// Bake Off: The Professionals - Series 7-11 (2022-2026).
// Completes coverage through the final broadcast on 22 July 2026.
// The programme is ongoing; revisit after further series air.
// First ID tv_26066. WordPad-ready CommonJS. Verify saved copy before deployment.
'use strict';

const FIRST_ID = 26066;
const programme = 'Bake Off: The Professionals';
const commonTags = [
  'Television', 'British Television', 'Reality Television', 'Cookery Television',
  'Bake Off: The Professionals', 'Programme: Bake Off: The Professionals',
  'Professional Patisserie', 'Channel 4', '2020s Television'
];

// Question | correct answer | three wrong answers | difficulty | seven specific tags.
const facts = `Which presenter replaced Tom Allen for the 2022 series?|Stacey Solomon|Ellie Taylor|Sandi Toksvig|Sara Pascoe|Easy|Stacey Solomon|Presenter Change|Series Seven|2022|Liam Charles|Channel Four|Hosting
Which returning presenter co-hosted the 2022 series with Stacey Solomon?|Liam Charles|Angus Deayton|Matt Lucas|Tom Kerridge|Easy|Liam Charles|Stacey Solomon|Series Seven|2022|Presenters|Channel Four|Former Contestant
How many two-person teams entered the 2022 competition?|Twelve|Ten|Eleven|Fourteen|Medium|Twelve Teams|Series Seven|2022|Competition Format|Professional Pairs|Opening Heats|Contestants
Which pair won Bake Off: The Professionals in 2022?|Nathan and Kevin|Mauro and Daniel|Tanuj and Narayan|Darian and Yadira|Easy|Nathan Rave|Kevin Marmion|2022 Winners|Series Seven|Champion Pair|Grand Final|Pastry Chefs
What was the surname of 2022 winner Nathan?|Rave|Marmion|Di Lieto|Schmidt|Medium|Nathan Rave|Kevin Marmion|2022 Winners|Series Seven|Champion|Finalists|London
Who partnered Nathan Rave to win in 2022?|Kevin Marmion|Daniel Schevenels|Zack Georges|Bharat Chandegra|Medium|Kevin Marmion|Nathan Rave|Series Seven|2022 Champions|French Pastry|Winning Duo|Final
Which London hotel was represented by 2022 finalists I Shan and Jojo?|Hotel Café Royal|The Landmark London|The Ned|The Dorchester|Medium|Hotel Cafe Royal|I Shan|Jojo|2022 Finalists|London Hotel|Series Seven|Runners Up
Who partnered I Shan in the 2022 final?|Jojo|Jemima|Ellie|Saskia|Medium|Jojo Closa|I Shan Lin|Hotel Cafe Royal|Series Seven|2022 Final|Pastry Team|London
Which patisserie did 2022 finalists Jemima and Zack represent?|Puddles Bespoke Patisserie|Cocorico Patisserie|Soko Patisserie|Harwoods Patisserie|Medium|Puddles Bespoke Patisserie|Jemima Paddon|Zack Georges|Series Seven|2022|Finalist Team|London
Who founded Puddles Bespoke Patisserie, represented in the 2022 final?|Jemima|Jojo|Stacey|Ellie|Medium|Jemima Paddon|Puddles Bespoke Patisserie|2022 Final|Series Seven|Cake Business|Zack Georges|Founder
Where had 2022 finalists Jemima and Zack first worked together?|The Fat Duck|The Dorchester|The Lanesborough|Hotel Café Royal|Hard|Jemima Paddon|Zack Georges|The Fat Duck|Team History|Heston Blumenthal|2022 Final|Restaurant
What sporting setting inspired the 2022 grand-final banquet?|A day at the races|A cricket final|A tennis championship|A football cup final|Medium|2022 Finale|Day At The Races|Showpiece Theme|Grand Final|Series Seven|Banquet|Patisserie
What sort of tarts featured in the 2022 final's window-display challenge?|Finger tarts|Custard tarts|Bakewell tarts|Treacle tarts|Medium|2022 Final|Finger Tarts|Window Display|Series Seven|Pastry Challenge|Patisserie|Judging
Which French dessert formed the tower in Nathan and Kevin's 2022 winning centrepiece?|Croquembouche|Paris-Brest|Mille-feuille|Tarte Tatin|Medium|Nathan Rave|Kevin Marmion|Croquembouche|2022 Winning Showpiece|Series Seven|Choux Pastry|Finale
What animals decorated the top of Nathan and Kevin's 2022 showpiece?|Galloping horses|Flying swans|Dancing bears|Swimming dolphins|Medium|2022 Final|Galloping Horses|Croquembouche Tower|Day At The Races|Nathan And Kevin|Winning Display|Series Seven
Which profession had I Shan pursued before becoming a pastry chef?|Graphic design|Dentistry|Civil engineering|Law|Hard|I Shan Lin|Hotel Cafe Royal|Graphic Designer|Career Change|2022 Finalist|Jojo Closa|Series Seven
Who joined Liam Charles as a new co-host for the 2023 series?|Ellie Taylor|Stacey Solomon|Tom Allen|Angus Deayton|Easy|Ellie Taylor|Liam Charles|New Presenter|Series Eight|2023|Hosting|Channel Four
Which series was the first presented by Liam Charles and Ellie Taylor together?|Series eight|Series six|Series seven|Series ten|Medium|Series Eight|2023|Ellie Taylor|Liam Charles|Host Duo|Programme History|Presenters
How many competing teams began the 2023 series?|Eleven|Twelve|Eight|Fourteen|Medium|Eleven Teams|2023|Series Eight|Professional Pairs|Competition Format|Opening Round|Channel Four
Which hotel won the 2023 series?|The Landmark London|Kimpton Fitzroy London|InterContinental London The O2|The Ned|Easy|The Landmark London|2023 Winners|Mauro Di Lieto|Daniel Schevenels|Series Eight|London Hotel|Champion
Who captained the winning Landmark London team in 2023?|Mauro Di Lieto|Nathan Rave|Darian Schmidt|Tanuj|Medium|Mauro Di Lieto|Landmark London|2023 Champion|Series Eight|Head Pastry Chef|Daniel Schevenels|Italian Chef
Who won the 2023 title alongside Mauro Di Lieto?|Daniel Schevenels|Kevin Marmion|Narayan|Yadira Jauffrineau|Medium|Daniel Schevenels|Mauro Di Lieto|Landmark London|2023 Champion|Series Eight|Pastry Sous Chef|Winning Pair
Which country was 2023 winner Mauro Di Lieto originally from?|Italy|Belgium|France|Portugal|Medium|Mauro Di Lieto|Italy|The Landmark London|Series Eight|2023 Champion|Head Pastry Chef|Nationality
Which country was 2023 winner Daniel Schevenels originally from?|Belgium|Italy|France|Spain|Medium|Daniel Schevenels|Belgium|The Landmark London|Series Eight|2023 Champion|Pastry Sous Chef|Nationality
Which Wigan business reached the 2023 final?|Harwoods Patisserie|Puddles Bespoke Patisserie|Gin and Bake|Squires Kitchen|Medium|Harwoods Patisserie|Wigan|2023 Final|Andrew And Raf|Series Eight|Runners Up|Pastry Business
Which team represented The Dorchester in the 2023 final?|Annie and Subin|I Shan and Jojo|Saskia and Ashik|Aubin and Avneet|Medium|The Dorchester|Annie|Subin|2023 Final|Series Eight|London Hotel|Runners Up
Which three desserts appeared on the 2023 final's dessert trolley?|Chiffon pie, jelly and baked Alaska|Macarons, churros and éclairs|Tiramisu, trifle and cheesecake|Custard tart, profiteroles and pavlova|Medium|2023 Final|Dessert Trolley|Chiffon Pie|Jelly|Baked Alaska|Sharing Desserts|Series Eight
What era inspired the banquet in the 2023 grand final?|The 1920s|The 1950s|The Victorian era|The 1980s|Medium|2023 Final|1920s Banquet|Opulent Display|Series Eight|Period Theme|Landmark London|Grand Finale
How many diners did the 2023 finalists have to cater for in their grand-final banquet?|Eighty|Forty|Sixty|One hundred and twenty|Medium|2023 Final|Eighty Diners|Banquet|Series Eight|Dessert Service|Competition Challenge|September
Which pastry chef set the special plant-based semi-final challenge in 2023?|Philip Khoury|Paul Hollywood|Ravneet Gill|Michel Roux Jr|Medium|Philip Khoury|2023 Semi Final|Plant Based Pastry|Harrods|Guest Judge|Series Eight|Signature Dessert
What was the title of Philip Khoury's signature dessert set in the 2023 semi-final?|Dawn of a New Day|The Great Chocolate Escape|Midnight in Paris|A Taste of Spring|Hard|Dawn Of A New Day|Philip Khoury|2023 Semi Final|Plant Based Dessert|Series Eight|Guest Challenge|Harrods
What unusual display engineering challenge was introduced in the 2023 series?|Suspending a showpiece from the ceiling|Building a sculpture that floated on water|Baking while wearing blindfolds|Constructing a cake on a moving train|Medium|2023|Hanging Showpiece|Suspended From Ceiling|Chocolate And Sugar|Series Eight|Engineering|Patisserie Display
What animal theme inspired a 2023 quarter-final showpiece?|Amphibians and reptiles|Domestic cats and dogs|Arctic mammals|Farm animals|Medium|2023 Quarter Final|Amphibians|Reptiles|Chocolate And Sugar|Series Eight|Nature Theme|Showpiece
What familiar dessert did contestants transform in the 2023 opening episode?|Banoffee pie|Sticky toffee pudding|Eton mess|Jam roly-poly|Medium|2023 Episode One|Banoffee Pie|Reimagined Dessert|Series Eight|Opening Heat|Patisserie|British Puddings
Which London hotel won the 2024 competition?|InterContinental London - The O2|The Landmark London|Hotel Café Royal|The Stafford|Easy|InterContinental London The O2|2024 Winners|Series Nine|London Hotel|Tanuj|Narayan|Champions
Which pair represented the 2024 winning hotel?|Tanuj and Narayan|Mauro and Daniel|Nathan and Kevin|Darian and Yadira|Easy|Tanuj|Narayan|InterContinental London The O2|2024 Champions|Series Nine|Winning Team|Final
Which club supplied the 2024 finalist team of Gerol and Michael?|The Royal Air Force Club|The Garrick Club|The Athenaeum|The Reform Club|Medium|Gerol|Michael|Royal Air Force Club|2024 Finalists|Series Nine|London|Runners Up
Which patisserie was represented by Bharat and John in the 2024 final?|Soko Patisserie|Harwoods Patisserie|Cocorico Patisserie|Puddles Bespoke Patisserie|Medium|Soko Patisserie|Bharat|John|2024 Final|Series Nine|Runner Up|Team
What national theme inspired the 2024 final banquet?|Best of British|A journey through Italy|A world of deserts|Ancient Greek myths|Medium|2024 Final|Best Of British|Banquet Theme|Series Nine|Dessert Showpiece|Competition Finale|British Food
Which shared meal was one of the two challenges in the 2024 final?|Afternoon tea|Midnight supper|Breakfast buffet|Sunday roast|Medium|2024 Final|Afternoon Tea|Grand Final|Series Nine|Patisserie Display|Judges|Competition
Which French strawberry pastry were chefs asked to produce in the 2024 opening challenge?|Tarte aux fraises|Paris-Brest|Opéra cake|Religieuse|Medium|2024 Episode One|Tarte Aux Fraises|Secret Challenge|Series Nine|French Pastry|Strawberries|Opening Heat
What optical-illusion technique inspired a 2024 opening-episode showpiece?|Trompe-l'oeil|Origami|Pointillism|Marquetry|Medium|2024 Episode One|Trompe Loeil|Illusion|Chocolate Showpiece|Series Nine|Artistic Skill|Patisserie
Which delicate Japanese-inspired dessert featured in the second episode of 2024?|Cotton cheesecake|Mochi ice cream|Matcha dorayaki|Taiyaki|Medium|2024 Episode Two|Cotton Cheesecake|Series Nine|Japanese Style|Soft Texture|Competition Challenge|Patisserie
Which Swiss-style laminated pastry was a challenge in the third episode of 2024?|Pain suisse|Brioche feuilletée|Kouign-amann|Palmier|Hard|2024 Episode Three|Pain Suisse|Laminated Pastry|Series Nine|Swiss Style|Pastry Technique|Competition
What fashion-based theme inspired a showpiece in the 2024 series?|Haute couture|Sportswear|School uniforms|Winter knitwear|Medium|2024|Haute Couture|Fashion Theme|Showpiece|Series Nine|Pastry Sculpture|Design Challenge
What was unusual about a chocolate showpiece challenge in the 2024 series?|It had to hang from the ceiling|It had to sail across a swimming pool|It had to rotate on a treadmill|It had to be built on ice|Medium|2024|Hanging Showpiece|Suspension|Chocolate Sculpture|Series Nine|Engineering Challenge|Episode Seven
What seasonal landscape inspired the frozen-lollipop display in 2024?|Winter Wonderland|Tropical rainforest|Autumn harvest|Summer beach|Medium|2024 Quarter Final|Winter Wonderland|Frozen Lollipops|Series Nine|Seasonal Theme|Showpiece|Desserts
Which classic fruit dessert featured in the 2024 semi-final?|Peach Melba|Banoffee pie|Cherry clafoutis|Apple crumble|Medium|2024 Semi Final|Peach Melba|Series Nine|Classic Dessert|Fruit Patisserie|Final Qualification|Episode Nine
What fantastical scenes were required alongside the Peach Melbas in 2024?|Fairy-tale scenes|Space-station scenes|Ancient Roman scenes|Underwater shipwrecks|Medium|2024 Semi Final|Fairy Tales|Edible Scenes|Series Nine|Showpiece|Peach Melba|Creative Challenge
Which London hotel won the 2025 series?|The Ned|The Landmark London|The Lanesborough|The Savoy|Easy|The Ned|2025 Winners|Series Ten|Darian Schmidt|Yadira Jauffrineau|London Hotel|Champion
Who captained The Ned's winning pair in 2025?|Darian Schmidt|Mauro Di Lieto|Ashish Wagh|Tanuj|Medium|Darian Schmidt|The Ned|2025 Champion|Series Ten|Executive Pastry Chef|Winning Captain|London
Who was Darian Schmidt's winning teammate in 2025?|Yadira Jauffrineau|Daniel Schevenels|Ellie Taylor|Avneet Kaur|Medium|Yadira Jauffrineau|Darian Schmidt|The Ned|2025 Champion|Series Ten|Pastry Chef|Winning Pair
Which specialist caterer was runner-up to The Ned in 2025?|Vacherin|Lexington Catering|Compass Group|Sodexo|Medium|Vacherin|2025 Runner Up|Series Ten|Erycsson|Jamie|Catering Company|Final
Which pair represented Vacherin in the 2025 final?|Erycsson and Jamie|Saskia and Ashik|Aubin and Avneet|Nathan and Kevin|Medium|Erycsson Barbosa|Jamie Akitoye|Vacherin|2025 Final|Series Ten|Caterers|Runner Up
Which hotel was represented by 2025 finalists Saskia and Ashik?|Hyatt Regency London - The Churchill|The Dorchester|Hotel Café Royal|The Stafford|Medium|Hyatt Regency London The Churchill|Saskia|Ashik|2025 Final|Series Ten|London Hotel|Finalist
Which 2025 finalist team was eliminated halfway through the grand final?|Hyatt Regency London - The Churchill|The Ned|Vacherin|Edwardian Hotels|Medium|The Churchill|Saskia And Ashik|2025 Final|Mid Final Elimination|Series Ten|Judges Decision|Three Teams
What was the theme of the final 2025 banquet?|Great Train Journeys|A Masquerade Ball|The Roaring Twenties|A Day at the Races|Medium|2025 Final|Great Train Journeys|Banquet|Series Ten|Sugar Sculpture|Chocolate Showpiece|Transport Theme
For how many guests did the remaining 2025 finalists create desserts?|One hundred and twenty|Sixty|Eighty|Forty five|Medium|2025 Final|120 Guests|Great Train Journeys|Banquet|Series Ten|Dessert Production|Judging
Which type of promotional display did the 2025 finalists create in their opening final challenge?|A viral patisserie window|A supermarket bakery counter|A wedding cake exhibition|A cruise-ship buffet|Medium|2025 Final|Viral Patisserie Window|First Challenge|Series Ten|Social Media Theme|Gourmet Cookies|Shop Display
Which three items were required in the 2025 viral window display?|Cookies, gateaux de voyage and laminated buns|Macarons, doughnuts and croissants|Eclairs, truffles and ice cream|Tarts, brioches and sorbets|Medium|2025 Final|Gourmet Cookies|Gateaux De Voyage|Laminated Buns|Viral Window|Series Ten|Pastry Challenge
Which unusual environment had to support an edible showpiece in the 2025 semi-final?|The surface of water|A spinning merry-go-round|A trampoline|A giant glass dome|Medium|2025 Semi Final|Floating Cities|Water Showpiece|Series Ten|Edible Sculpture|Engineering|Creative Challenge
Which film inspired a special chocolate-bar challenge in the 2025 semi-final?|Wonka|Paddington|The Little Mermaid|Matilda|Medium|2025 Semi Final|Wonka|Chocolate Bars|Series Ten|Film Theme|Gabriella Cugno|Guest Chef
Who joined the judges as the guest chocolatier for the 2025 semi-final?|Gabriella Cugno|Claire Clark|Ravneet Gill|Prue Leith|Medium|Gabriella Cugno|2025 Semi Final|Wonka Chocolatier|Series Ten|Chocolate Challenge|Guest Judge|Film
What floral setting inspired one showpiece challenge in the 2025 series?|Japanese gardens|English cottage gardens|Desert oases|Alpine meadows|Medium|2025|Japanese Gardens|Showpiece Theme|Series Ten|Patisserie Design|Cultural Inspiration|Sugar Art
What was the theme of a 2025 showpiece involving desserts that looked like objects dropped by accident?|Whoops I Dropped the|Under the Sea|Midnight Feast|Into the Jungle|Hard|2025|Whoops I Dropped The|Suspended Showpiece|Series Ten|Illusion Challenge|Dessert Sculpture|Creative Theme
Where was the 2025 series filmed?|Firle Place in Sussex|Welbeck Abbey in Nottinghamshire|Leeds Castle in Kent|The Ned in London|Medium|Firle Place|East Sussex|2025 Filming|Series Ten|Production Location|Historic House|Channel Four
Which hotel group won Bake Off: The Professionals in 2026?|Edwardian Hotels|The Stafford|The Ned|The Landmark London|Easy|Edwardian Hotels|2026 Champions|Series Eleven|Ashish|Loki|Hotel Group|Winning Team
Which pair won the 2026 final for Edwardian Hotels?|Ashish and Loki|Aubin and Avneet|Valentina and Aurora|Darian and Yadira|Easy|Ashish Wagh|Loki|Edwardian Hotels|2026 Champions|Series Eleven|Winning Pair|Grand Final
What was the surname of 2026 winning captain Ashish?|Wagh|Farges|Schmidt|Marmion|Medium|Ashish Wagh|Edwardian Hotels|2026 Winner|Series Eleven|Team Captain|Manchester|Pastry Chef
Which nickname was used by Ashish's winning teammate in 2026?|Loki|Jojo|Mikey|Mima|Medium|Loki|Lokeshwari Vinayagamoorthy|2026 Champion|Edwardian Hotels|Series Eleven|London|Pastry Chef
Which hotel group did 2026 runners-up Aubin and Avneet represent?|The Stafford London|The Ned|The Dorchester|The Lanesborough|Medium|The Stafford London|Aubin Farges|Avneet Kaur|2026 Runners Up|Series Eleven|Hotel Team|Final
Which pair were the third finalists in the 2026 series alongside Edwardian Hotels and The Stafford?|Valentina and Aurora|Saskia and Ashik|Jemima and Zack|Annie and Subin|Medium|Valentina|Aurora|2026 Finalists|Series Eleven|Third Team|Italian Duo|Grand Final
Which team was eliminated after the first six hours of the 2026 grand final?|Valentina and Aurora|Edwardian Hotels|The Stafford|The Ned|Medium|2026 Final|Valentina And Aurora|Halfway Elimination|Six Hours|Series Eleven|Judges Decision|Masquerade
What theme inspired the twelve-hour finale in 2026?|Masquerade Ball|Great Train Journeys|A Day at the Races|The Roaring Twenties|Easy|2026 Final|Masquerade Ball|Twelve Hour Challenge|Series Eleven|Banquet|Showpiece|Competition Format
How long was the full banquet challenge in the 2026 final?|Twelve hours|Six hours|Eight hours|Ten hours|Medium|2026 Final|Twelve Hours|Masquerade Ball|Longest Challenge|Series Eleven|Judges|Banquet
How many teams began the 2026 series?|Twelve|Ten|Eleven|Fourteen|Medium|2026 Contestants|Twelve Teams|Series Eleven|Professional Pairs|Competition Entry|Channel Four|Format
Which French choux-pastry classic featured in the 2026 opening secret challenge?|Paris-Brest|Croquembouche|Religieuse|Mille-feuille|Medium|2026 Episode One|Paris Brest|Secret Challenge|Series Eleven|French Patisserie|Choux Pastry|Opening Heat
What childhood-inspired subject shaped the first 2026 showpiece challenge?|Toys|School dinners|Playground games|Children's books|Medium|2026 Episode One|Childhood Toys|Showpiece|Series Eleven|Crumble And Custard|Nostalgia|Creative Theme
Which traditional layered cake was a test in the second episode of 2026?|Battenberg|Victoria sponge|Black Forest gateau|Carrot cake|Medium|2026 Episode Two|Battenberg|Series Eleven|Secret Challenge|Classic Cake|British Baking|Precision
Which playwright's work inspired showpieces during the 2026 series?|William Shakespeare|Oscar Wilde|Noel Coward|Alan Ayckbourn|Medium|2026 Episode Two|Shakespeare|Theatre Showpiece|Series Eleven|Literary Theme|Pastry Sculpture|Drama
Which traditional pudding was used for a 2026 showpiece challenge alongside Bakewell slices?|Jam roly-poly|Spotted dick|Eton mess|Rice pudding|Medium|2026 Episode Five|Jam Roly Poly|Bakewell Slices|Series Eleven|British Puddings|Dessert Reinterpretation|Showpiece
Which Eastern European-style sweet bread appeared alongside mille-feuille in 2026?|Babka buns|Stollen|Panettone|Brioche Nanterre|Hard|2026 Episode Six|Babka Buns|Mille Feuille|Series Eleven|Sweet Bread|Laminated Pastry|Challenge
Which two items helped define the eighth episode's 2026 challenges?|Afternoon tea desserts and piñatas|Croissants and Halloween masks|Chocolate shoes and wedding cakes|Custard tarts and model boats|Medium|2026 Episode Eight|Afternoon Tea|Pinatas|Series Eleven|Showpiece Challenge|Celebrations|Patisserie
Which floating dessert featured in a late-series 2026 challenge?|Île flottante|Baked Alaska|Poached pear|Panna cotta|Medium|2026 Episode Nine|Ile Flottante|Floating Island|Series Eleven|French Dessert|Semi Final|Classic Patisserie
Which guest judge, a Waitrose development chef, appeared during the 2026 series?|Will Torrent|Paul Hollywood|Philip Khoury|Eric Lanlard|Medium|Will Torrent|Waitrose|Guest Judge|Series Eleven|2026 Episode Seven|Pastry Challenge|Development Chef
In which month was the 2026 series final broadcast?|July|June|August|September|Easy|July 2026|Series Eleven Finale|Broadcast Date|Edwardian Hotels|Channel Four|Masquerade Ball|Final Result
Where did Ashish Wagh work while representing Edwardian Hotels in 2026?|Edwardian Manchester|The Stafford London|The Ned|The Dorchester|Medium|Ashish Wagh|Edwardian Manchester|2026 Champion|Series Eleven|Hotel Group|Pastry Sous Chef|Team Captain
Which Leicester Square hotel was represented by 2026 winner Loki?|The Londoner|The Savoy|The Ritz|Claridge's|Medium|Loki|The Londoner|Leicester Square|Edwardian Hotels|2026 Champion|Senior Chef De Partie|London
How many different desserts were required in the completed 2026 final banquet?|Five|Three|Four|Seven|Medium|2026 Final|Five Desserts|Masquerade Ball|Forty Five Each|Series Eleven|Banquet|Production Scale`;

let sequence = 0;
const questions = facts.trim().split('\n').map(line => {
  const id = 'tv_' + String(FIRST_ID + sequence).padStart(5, '0');
  const fields = line.trim().split('|').map(value => value.trim());
  if (fields.length !== 13)
    throw new Error(`Expected 13 fields in ${id}; found ${fields.length}`);
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
  if ([question, correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(value => !value))
    throw new Error(`Blank question, option or tag in ${id}`);
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.length !== 7)
    throw new Error(`Invalid difficulty or specific tags in ${id}`);
  if (new Set([correctAnswer, wrong1, wrong2, wrong3].map(value => value.toLowerCase())).size !== 4)
    throw new Error(`Duplicate answer options in ${id}`);
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(sequence % 4, 0, correctAnswer);
  const tags = [...new Map([...commonTags, correctAnswer, ...specificTags]
    .map(tag => [tag.toLowerCase(), tag])).values()];
  sequence++;
  return { id, category: 'Television', programme, question, answers,
    correctAnswer, difficulty, tags, dailyEligible: true };
});

if (!questions.length || questions[0].id !== 'tv_26066' ||
    new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length ||
    questions.some(q => q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
      q.tags.length < 14 || !q.tags.includes('Programme: Bake Off: The Professionals') ||
      q.dailyEligible !== true))
  throw new Error('Pack 440 exported question validation failed');

module.exports = questions;