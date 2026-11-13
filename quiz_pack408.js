
// PuzzlePilot - Big Quiz - Pack 408
// A Place in the Sun - Channel 4 property programme and spin-offs (2000-2026).
// Coverage cut-off: episodes broadcast through 13 November 2026.
// Ongoing programme: spreadsheet status LAVENDER, next review 1 January 2027.
// Complete WordPad-ready CommonJS file. First ID: tv_22756.
'use strict';

const FIRST_ID = 22756;
const commonTags = [
  'television', 'A Place in the Sun', 'Channel 4',
  'British property television', 'overseas house hunting', 'lifestyle programme'
];

// Question | correct answer | three distractors | difficulty | seven precise tags.
const rows = [
  `In which year did A Place in the Sun first air on British television?|2000|1996|2004|2008|Easy|series premiere|2000 launch|original run|property broadcasting|Freeform Productions|millennium television|programme history`,
  `Which British channel launched A Place in the Sun?|Channel 4|BBC One|ITV1|Channel 5|Easy|original broadcaster|2000|network launch|daytime schedule|Freeform Productions|UK television|commercial broadcaster`,
  `Which production company created A Place in the Sun for Channel 4?|Freeform Productions|Endemol Shine|Kudos|Tiger Aspect|Medium|Freeform Productions|show creators|2000 debut|independent production|regional company|programme credits|industry history`,
  `Who presented the original series of A Place in the Sun?|Amanda Lamb|Jasmine Harman|Laura Hamilton|Jean Johansson|Easy|Amanda Lamb|original presenter|launch era|first host|2000s property TV|series origins|casting`,
  `What is the main aim of house hunters appearing in A Place in the Sun?|To find a property abroad to buy|To exchange council homes|To build a home in 24 hours|To win a house by answering questions|Easy|overseas property purchase|buyers|programme premise|holiday home|permanent relocation|property search|format`,
  `How many properties does a presenter usually show house hunters in an episode of A Place in the Sun?|Three to five|Exactly one|Ten to twelve|Twenty or more|Easy|three to five homes|property viewings|show structure|presenter visits|selection|buyers preferences|programme format`,
  `Which kind of buyers normally feature in A Place in the Sun?|British people looking for overseas homes|American developers building London offices|Only professional estate agents|Only international hotel chains|Easy|British house hunters|holiday homes|expatriate relocation|target audience|buyers|property dreams|search format`,
  `Which of these is a destination frequently featured in A Place in the Sun?|Spain|Antarctica|Iceland's interior|Greenland's ice sheet|Easy|Spain|Spanish property|Costa Blanca|Costa del Sol|Mediterranean|holiday home buyers|filming destinations`,
  `Which subject does an A Place in the Sun presenter explain as well as showing houses?|Local buying costs and practicalities|How to qualify as a pilot|Competitive baking rules|How to design a racing engine|Medium|local property advice|running costs|buying process|overseas rules|lifestyle considerations|research|buyer information`,
  `At the end of a typical A Place in the Sun property search, what decision may the buyers make?|Whether to make an offer on a property|Which presenter wins a cash prize|Whether to hire a celebrity chef|How to vote off another contestant|Easy|property offer|final decision|buyers choice|house tour|episode conclusion|negotiation|property purchase`,
  `Which A Place in the Sun spin-off compares buying property in Britain with buying abroad?|Home or Away?|Summer Sun|Winter Sun|What Happened Next?|Easy|Home or Away|UK versus overseas|spin-off format|property dilemma|dual search|2000s|programme titles`,
  `Who co-presented A Place in the Sun: Home or Away? with Jonnie Irwin from its early years?|Jasmine Harman|Amanda Lamb|Lucy Alexander|Danni Menzies|Easy|Jasmine Harman|Jonnie Irwin|2004|presenter partnership|Home or Away|joint hosts|career beginnings`,
  `Which A Place in the Sun presenter previously worked as a commercial property surveyor?|Jonnie Irwin|Craig Rowe|Scarlette Douglas|Leah Charles-King|Medium|Jonnie Irwin|surveyor|commercial property|prior career|professional background|real estate|casting`,
  `At which university did A Place in the Sun presenter Jonnie Irwin study estate management?|Birmingham City University|University of Oxford|University of Exeter|University of Dundee|Hard|Jonnie Irwin|estate management|Birmingham City University|qualification|surveyor training|property career|biography`,
  `Which BBC property programme did A Place in the Sun presenter Jonnie Irwin also front?|Escape to the Country|Homes Under the Hammer|Grand Designs|Changing Rooms|Medium|Jonnie Irwin|Escape to the Country|BBC|presenter career|rural property|programme crossover|other television`,
  `In which year did former A Place in the Sun presenter Jonnie Irwin die?|2024|2019|2021|2026|Medium|Jonnie Irwin|2024|presenter remembrance|career history|television personality|February|biography`,
  `Which A Place in the Sun presenter first joined the team alongside Jonnie Irwin in 2004?|Jasmine Harman|Laura Hamilton|Jean Johansson|Leah Charles-King|Easy|Jasmine Harman|2004 arrival|Jonnie Irwin|Home or Away|original duo|property presenting|early career`,
  `Which BBC documentary did A Place in the Sun presenter Jasmine Harman make about her mother's hoarding?|My Hoarder Mum and Me|My Family and Other Homes|The Hoarding Inspectors|House of Secrets|Medium|Jasmine Harman|My Hoarder Mum and Me|2011 documentary|BBC One|personal project|presenter career|family story`,
  `Which part of the world has A Place in the Sun presenter Jasmine Harman called a favourite filming region?|The Caribbean|The Arctic Circle|Siberia|The Himalayas|Medium|Jasmine Harman|Caribbean islands|Barbados|St Vincent|filming preference|international travel|presenter profile`,
  `Which A Place in the Sun spin-off was designed to explore sunny destinations during colder months?|Winter Sun|Home or Away?|By the Sea|What Happened Next?|Easy|Winter Sun|seasonal spin-off|colder months|2012|Caribbean|Canary Islands|holiday properties`,
  `Which A Place in the Sun spin-off began exploring summer holiday-home destinations in 2012?|Summer Sun|Winter Sun|A Million Pound Place in the Sun|By the Sea|Easy|Summer Sun|2012 launch|seasonal property|spin-off show|overseas homes|Mediterranean|series expansion`,
  `Which presenter featured in the first series of A Place in the Sun: Winter Sun in 2012?|Laura Hamilton|Amanda Lamb|Lucy Alexander|Craig Rowe|Medium|Laura Hamilton|Winter Sun|2012 first series|new presenter|winter destinations|winter format launch|career milestone`,
  `Which Spanish location appeared in Laura Hamilton's first A Place in the Sun: Winter Sun episode in February 2012?|Torrevieja|Bilbao|Salamanca|Valladolid|Hard|Laura Hamilton|Torrevieja|Costa Blanca|2012 debut|Winter Sun|Frampton house hunters|Spain filming`,
  `Which A Place in the Sun spin-off focused on coastal homes in Britain?|By the Sea|Summer Sun|Home or USA?|Winter Sun|Medium|By the Sea|British coastline|coastal property|UK homes|related series|seaside locations|spin-off format`,
  `Which presenter was associated with A Million Pound Place in the Sun?|Amanda Lamb|Danni Menzies|Jean Johansson|Craig Rowe|Medium|Amanda Lamb|A Million Pound Place|luxury properties|special format|high budgets|presenter history|spin-off`,
  `What is the focus of A Place in the Sun: What Happened Next?|Revisiting earlier buyers to see how life changed|Finding new jobs for the presenters|Testing home security systems|Making contestants build their own villas|Easy|What Happened Next|former house hunters|follow-up visits|after purchase|reunion|property journeys|spin-off premise`,
  `Which former original presenter returned for A Place in the Sun: What Happened Next?|Amanda Lamb|Kirstie Allsopp|Sarah Beeny|Mary Portas|Medium|Amanda Lamb|return appearance|What Happened Next|2023 commission|original host|reunion series|show heritage`,
  `How many episodes were announced in the initial commission of A Place in the Sun: What Happened Next?|Forty|Ten|Twenty|One hundred|Hard|forty episodes|initial commission|2023 announcement|follow-up spin-off|Freeform Productions|production order|commission details`,
  `In which year did A Place in the Sun: What Happened Next first air?|2024|2012|2018|2020|Medium|2024 debut|What Happened Next|January|return visits|programme chronology|new spin-off|broadcast launch`,
  `Which A Place in the Sun spin-off compared homes in Britain with homes in the United States?|Home or USA?|Winter Sun|Summer Sun|By the Sea|Medium|Home or USA|UK and USA|American property|comparison format|United States|related series|two countries`,
  `In which year did the A Place in the Sun magazine first launch?|2004|2000|2008|2012|Medium|2004|companion magazine|property brand|publishing|overseas homes|brand history|print edition`,
  `In which year did the A Place in the Sun Live property exhibitions begin?|2005|1999|2011|2018|Medium|2005 exhibition|A Place in the Sun Live|brand extension|overseas property events|public shows|advice|business history`,
  `When did A Place in the Sun launch its property-search website?|2006|1997|2014|2022|Medium|2006 website|aplaceinthesun.com|digital expansion|property listings|buyers guides|online brand|history`,
  `Which of these UK cities has hosted A Place in the Sun Live exhibitions?|Birmingham|Inverness|Norwich|Truro|Medium|Birmingham|A Place in the Sun Live|exhibitions|property seminars|UK events|international real estate|audience meetups`,
  `Which Scottish city hosted a new A Place in the Sun Property Showcase format in 2019?|Glasgow|Aberdeen|Dundee|Stirling|Hard|Glasgow|2019|Property Showcase|Scottish property fair|brand event|expo format|expansion`,
  `Which A Place in the Sun service launched a physical office in Cabo Roig in Spain in 2024?|Its currency exchange service|Its television casting department|Its film production studio|Its magazine printworks|Hard|Cabo Roig|2024|currency exchange|Spanish office|business development|foreign exchange|property transactions`,
  `Which A Place in the Sun presenter joined the regular presenting team in 2011?|Laura Hamilton|Jean Johansson|Lee Juggurnauth|Craig Rowe|Medium|Laura Hamilton|2011|joining date|Winter Sun|presenter history|property expert|career milestone`,
  `Which television celebrity competition did A Place in the Sun presenter Laura Hamilton finish as runner-up in during 2011?|Dancing on Ice|Strictly Come Dancing|Celebrity MasterChef|The Masked Singer|Medium|Laura Hamilton|Dancing on Ice|2011 runner up|ITV competition|television crossover|ice skating|presenter profile`,
  `Which Channel 4 sporting challenge series also featured A Place in the Sun presenter Laura Hamilton?|The Jump|The Games|SAS Who Dares Wins|Ninja Warrior UK|Medium|Laura Hamilton|The Jump|ski jumping|adventure series|sports television|presenter career|ski competition`,
  `Which Greek island is named as a favourite filming location by A Place in the Sun presenter Laura Hamilton?|Kefalonia|Rhodes|Santorini|Mykonos|Hard|Laura Hamilton|Kefalonia|Greece|Ionian islands|favourite filming location|presenter profile|travel`,
  `Which A Place in the Sun presenter joined the show in 2016 after working in interior design?|Ben Hillman|Craig Rowe|Jonnie Irwin|Lee Juggurnauth|Easy|Ben Hillman|2016|interior designer|presenter debut|property expertise|casting|architecture`,
  `Which ITV makeover programme had A Place in the Sun host Ben Hillman also appeared on?|60 Minute Makeover|Changing Rooms|DIY SOS|Ground Force|Medium|Ben Hillman|60 Minute Makeover|Peter Andre|home improvement|interior design|programme crossover|presenter CV`,
  `Which college did A Place in the Sun presenter Ben Hillman attend to study product and furniture design?|Ravensbourne College|Royal College of Music|Leeds Conservatoire|Manchester School of Art|Hard|Ben Hillman|Ravensbourne College|product design|furniture design|education|professional training|designer career`,
  `Which 2010 ITV design search did future A Place in the Sun presenter Ben Hillman win?|The Next Big Thing|The Great Design Off|The Big Build|Designer of the Year Live|Hard|Ben Hillman|The Next Big Thing|2010|ITV|interior design contest|This Morning|career milestone`,
  `Which A Place in the Sun presenter joined the team in 2018 and also worked on Animal Park?|Jean Johansson|Sara Damergi|Lucy Alexander|Amanda Lamb|Medium|Jean Johansson|2018|Animal Park|BBC|presenter profile|television crossover|career history`,
  `From which Scottish city is A Place in the Sun presenter Jean Johansson associated?|Glasgow|Perth|Inverness|Aberdeen|Medium|Jean Johansson|Glaswegian|Scotland|2018 joining|presenter biography|home city|regional background`,
  `Which A Place in the Sun presenter joined in 2015 and previously performed in the West End?|Scarlette Douglas|Jasmine Harman|Danni Menzies|Jean Johansson|Medium|Scarlette Douglas|2015|West End|performer career|property development|presenter background|casting`,
  `With which family member has A Place in the Sun presenter Scarlette Douglas worked on property projects?|Her brother|Her aunt|Her grandfather|Her cousin|Medium|Scarlette Douglas|brother|property development|family partnership|renovations|television career|business background`,
  `Which football club did A Place in the Sun presenter Scarlette Douglas play for when younger?|Arsenal|Chelsea|Leeds United|Bristol City|Hard|Scarlette Douglas|Arsenal|youth football|sports background|presenter biography|career before TV|London club`,
  `Which Channel 4 property show featured Scarlette Douglas and her brother during the Black to Front initiative?|Love It or List It|The Great House Giveaway|George Clarke's Amazing Spaces|Location Location Location|Hard|Scarlette Douglas|Love It or List It|Black to Front|brother|2021 initiative|property renovation|guest presentation`,
  `Which A Place in the Sun presenter joined in 2016 and grew up in the Scottish village of Kenmore?|Danni Menzies|Jean Johansson|Laura Hamilton|Sara Damergi|Medium|Danni Menzies|2016 joining|Kenmore|Scotland|family holiday business|presenter biography|rural upbringing`,
  `What kind of family business helped give A Place in the Sun presenter Danni Menzies property experience?|Holiday accommodation and leisure property|Commercial airlines|Software engineering|A record label|Medium|Danni Menzies|family enterprise|holiday houses|caravan park|property background|riding stables|business upbringing`,
  `Which presenter returned to A Place in the Sun in September 2021 after an absence dating back to 2015?|Sara Damergi|Amanda Lamb|Scarlette Douglas|Lucy Alexander|Medium|Sara Damergi|2021 return|2015 gap|Italy|presenter history|series comeback|property expert`,
  `On which A Place in the Sun spin-off did Sara Damergi initially present property searches?|Summer Sun|By the Sea|Home or USA?|What Happened Next?|Medium|Sara Damergi|Summer Sun|original hosting role|Mediterranean properties|Spain France Portugal|presenter debut|programme variant`,
  `Which A Place in the Sun presenter first appeared in the line-up in 2021 after working in the music industry?|Lee Juggurnauth|Ben Hillman|Jonnie Irwin|Craig Rowe|Medium|Lee Juggurnauth|2021 debut|music manager|property developer|career switch|presenter profile|new host`,
  `Which Spanish town was the setting of Lee Juggurnauth's first A Place in the Sun assignment?|Oliva|Seville|Madrid|Zaragoza|Hard|Lee Juggurnauth|Oliva|Spain|2021 first episode|presenter debut|rainy filming|Costa Blanca`,
  `Which singer was among the acts A Place in the Sun host Lee Juggurnauth worked with before presenting?|Billy Ocean|Elton John|Ed Sheeran|Robbie Williams|Medium|Lee Juggurnauth|Billy Ocean|music industry|artist management|career history|presenter profile|entertainment`,
  `With which island nation does A Place in the Sun presenter Lee Juggurnauth have a family connection?|Mauritius|Malta|Iceland|Cuba|Hard|Lee Juggurnauth|Mauritius|family origins|childhood|Indian Ocean|presenter biography|international background`,
  `Which A Place in the Sun presenter joined the team in 2021 after a career in music and children's television?|Leah Charles-King|Laura Hamilton|Lucy Alexander|Danni Menzies|Medium|Leah Charles-King|2021 arrival|music career|children TV|presenter biography|broadcasting|casting`,
  `Which 1990s girl group included future A Place in the Sun presenter Leah Charles-King?|Kleshay|All Saints|Eternal|Mis-Teeq|Hard|Leah Charles-King|Kleshay|1990s R&B|girl group|Sony Music|music career|artist biography`,
  `Which children's television service did A Place in the Sun presenter Leah Charles-King work for as a continuity presenter?|CITV|CBBC|Nick Jr|Milkshake|Medium|Leah Charles-King|CITV|continuity presenter|2001|children television|career history|ITV`,
  `Which A Place in the Sun presenter was announced in December 2021 and made an on-screen debut in 2022?|Craig Rowe|Ben Hillman|Jonnie Irwin|Scarlette Douglas|Medium|Craig Rowe|2022 first episode|December 2021 announcement|new presenter|host recruitment|programme chronology|casting`,
  `Which Spanish coastal town hosted Craig Rowe's first A Place in the Sun assignment?|Denia|Granada|Toledo|Cuenca|Hard|Craig Rowe|Denia|Spain|Alison and Gabriel|2022 debut|holiday home|presenter first search`,
  `On which shopping television channel had A Place in the Sun presenter Craig Rowe worked?|QVC|Ideal World only|Shop at Bid|Jewellery Maker|Medium|Craig Rowe|QVC|shopping television|presenter experience|career background|broadcasting|other programmes`,
  `Which part of the BBC had A Place in the Sun host Craig Rowe worked in for seven years?|Television production|Radio drama acting|Sports commentary only|Weather forecasting|Hard|Craig Rowe|BBC production|seven years|behind the camera|career experience|television industry|presenter biography`,
  `Which BBC daytime property series made A Place in the Sun presenter Lucy Alexander well known?|Homes Under the Hammer|Escape to the Country|DIY SOS|The Repair Shop|Medium|Lucy Alexander|Homes Under the Hammer|BBC|property presenter|career history|show crossover|auction properties`,
  `What television property format did Lucy Alexander front on Channel 4 before joining A Place in the Sun?|Bang on Budget|Grand Designs|Changing Rooms|Selling Houses Australia|Hard|Lucy Alexander|Bang on Budget|interior design show|interior design|presenter CV|television crossover|previous show`,
  `In which year did A Place in the Sun launch its currency exchange service under its own name?|2024|2000|2009|2016|Hard|2024 currency expansion|foreign exchange|property buyers|money transfers|brand services|international transactions|business milestone`,
  `Which A Place in the Sun follow-up series returned to Channel 4 on 16 March 2026?|What Happened Next?|Home or Away?|By the Sea|A Million Pound Place in the Sun|Medium|What Happened Next|16 March 2026|returning series|former house hunters|reunion episodes|return date|broadcast schedule`,
  `At what time did the March 2026 run of A Place in the Sun: What Happened Next air on weekdays?|6 pm|9 am|12 midnight|10 pm|Medium|What Happened Next|March 2026|weekday time|18:00|broadcast hours|early evening|schedule`,
  `In which month did brand-new A Place in the Sun original-format episodes resume on Channel 4 late in 2026?|November|June|August|September|Medium|2026 autumn run|2 November|new episodes|late year return|early evening|season launch|broadcast news`,
  `At what time did the November 2026 episodes of A Place in the Sun air on Channel 4?|6 pm|8 am|11 pm|1 am|Medium|November 2026|18:00 broadcast|weekday episodes|early evening broadcast|schedule|new series|air time`,
  `Which presenter helped Pauline and her son Robert search around Moraira in A Place in the Sun on 13 November 2026?|Lee Juggurnauth|Ben Hillman|Craig Rowe|Jean Johansson|Hard|Lee Juggurnauth|Moraira|13 November 2026|Pauline and Robert|Costa Blanca|episode guide|2026 series`,
  `Where did Jean Johansson search for a home with Peter and Clare on A Place in the Sun on 12 November 2026?|Portugal's Silver Coast|Italy's Amalfi Coast|France's Brittany coast|Greece's Crete|Medium|Jean Johansson|Silver Coast|Portugal|12 November 2026|Peter and Clare|2026 episodes|holiday home`,
  `Which presenter was house hunting with Suzanne and Carsten on Spain's Costa Tropical in A Place in the Sun on 11 November 2026?|Laura Hamilton|Jasmine Harman|Jean Johansson|Leah Charles-King|Medium|Laura Hamilton|Suzanne and Carsten|Costa Tropical|11 November 2026|Spain|episode guide|2026 search`,
  `What unusual parking requirement did Janine and Paul have in A Place in the Sun's northern Dordogne search in November 2026?|Space for a motorhome|An aircraft hangar|A boat slipway|Parking for a double-decker bus|Medium|Janine and Paul|motorhome|northern Dordogne|Ben Hillman|10 November 2026|property needs|French house hunt`,
  `What was the name of Janine and Paul's dog featured in the November 2026 Dordogne edition of A Place in the Sun?|Fred|Barney|Oscar|Bertie|Hard|Janine and Paul|Fred dog|northern Dordogne|Ben Hillman|10 November 2026|pet friendly property|France`,
  `Which presenter helped Linda and Hassan look around the western Costa del Sol on A Place in the Sun in November 2026?|Jean Johansson|Lee Juggurnauth|Jasmine Harman|Ben Hillman|Medium|Jean Johansson|Linda and Hassan|western Costa del Sol|9 November 2026|Spain|2026 episode|holiday property`,
  `Which Spanish coastal area featured in a November 2026 A Place in the Sun episode with a £80,000 budget for Debbie and Martin?|Costa Almería|Costa Brava|Costa de la Luz|Costa Verde|Medium|Debbie and Martin|80000 pounds|Costa Almeria|Mojacar|6 November 2026|Ben Hillman|episode budget`,
  `Which presenter searched for a property in Ciudad Quesada with globetrotters Sarah and Neil on A Place in the Sun in November 2026?|Lee Juggurnauth|Laura Hamilton|Craig Rowe|Jean Johansson|Medium|Lee Juggurnauth|Sarah and Neil|Ciudad Quesada|4 November 2026|Spain|travellers|holiday bolthole`,
  `Which Greek island featured in A Place in the Sun's 3 November 2026 house search with presenter Ben Hillman?|Lefkada|Corfu|Kos|Rhodes|Medium|Ben Hillman|Lefkada|3 November 2026|Greek islands|Jacqueline|permanent home|house hunt`,
  `Which presenter opened the November 2026 run of A Place in the Sun with a search on the northern Costa Blanca?|Jasmine Harman|Scarlette Douglas|Danni Menzies|Craig Rowe|Medium|Jasmine Harman|2 November 2026|northern Costa Blanca|Clare and Paul|new episodes|Spain|programme return`,
  `Which region featured in a January 2026 A Place in the Sun episode with Pam and Andrew looking for a future retirement home?|Bordeaux in France|Bavaria in Germany|Sicily in Italy|Algarve in Portugal|Hard|Pam and Andrew|Bordeaux|Garonne River|29 January 2026|Jean Johansson|French property|retirement home`,
  `Which US destination was highlighted among the countries and regions visited in the January 2026 run of A Place in the Sun?|Florida|Alaska|Montana|Vermont|Medium|Florida|2026 episodes|United States|American properties|winter sun|US locations|international filming`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 408: malformed row ${index + 1} (${parts.length} parts)`);
  }
  const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 408: invalid difficulty at row ${index + 1}`);
  }
  const question = stem.includes('A Place in the Sun')
    ? stem
    : `In A Place in the Sun, ${stem[0].toLowerCase()}${stem.slice(1)}`;
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(a => a.toLowerCase())).size !== 4) {
    throw new Error(`Pack 408: repeated option at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length !== 13) {
    throw new Error(`Pack 408: expected 13 distinct tags at row ${index + 1}, got ${tags.length}`);
  }
  return {
    id: `tv_${FIRST_ID + index}`,
    category: 'Television',
    question,
    answers,
    correctAnswer,
    difficulty,
    tags,
    dailyEligible: true
  };
});

module.exports = questions;
