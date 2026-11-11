
// quiz_pack380.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Ghosts (UK, 2019-2023) and Two Doors Down (2013-2025 coverage).
// Two Doors Down remains ongoing: Series 8 has been commissioned; coverage ends 24 December 2025.
// Complete WordPad-ready CommonJS file. No external dependencies.
// Seven question-specific tags per row, plus category, genre, show and coverage era.
// Research: British Comedy Guide cast, character and episode guides; BBC programme information.

const FIRST_ID = 19846;

// question | correct answer | wrong one | wrong two | wrong three | difficulty | seven specific tags
const ghostFacts = `Who played Alison Cooper in the British sitcom Ghosts?|Charlotte Ritchie|Lolly Adefope|Katy Wix|Martha Howe-Douglas|Easy|Charlotte Ritchie|Alison Cooper|Living Resident|Button House|Lead Actress|Character Casting|2019 BBC
Who portrayed Alison's husband Mike Cooper?|Kiell Smith-Bynoe|Jim Howick|Mathew Baynton|Ben Willbond|Easy|Kiell Smith Bynoe|Mike Cooper|Alison Husband|Living Resident|Lead Actor|Character Casting|BBC Comedy
What is the name of the country mansion inherited by Alison and Mike?|Button House|Blandings Castle|Fenn Street House|Cranford Hall|Easy|Button House|Country Mansion|Haunted Residence|Inherited Estate|Alison Mike|Fictional Setting|English Manor
How do Alison and Mike come to own Button House?|They inherit it|They buy it at auction|They win it in a competition|They rent it from a neighbour|Easy|Inheritance|Button House|New Owners|Alison Cooper|Mike Cooper|Country Estate|Series One Premise
What accident enables Alison to see the spirits living in the house?|A fall from an upstairs window|An electric shock in the cellar|A car collision outside the gates|A fall from a horse|Medium|Alison Cooper|Window Fall|Near Death Experience|Seeing Ghosts|Series One|Supernatural Ability|Accident
Which of the living couple can see and hear the ghosts?|Alison|Mike|Both Alison and Mike|Neither of them|Easy|Alison Cooper|Ghost Visibility|Mike Cooper|Supernatural Sight|Living Residents|Haunting|Special Ability
Who played the Romantic poet Thomas Thorne?|Mathew Baynton|Simon Farnaby|Jim Howick|Ben Willbond|Easy|Mathew Baynton|Thomas Thorne|Romantic Poet|Regency Ghost|Actor Casting|Literary Character|Main Ensemble
Which resident ghost is an excessively dramatic Romantic poet?|Thomas Thorne|Julian Fawcett|Pat Butcher|Robin|Easy|Thomas Thorne|Romantic Literature|Poet|Regency Period|Dramatic Character|Alison Infatuation|Ghost Identity
What feeling does Thomas Thorne repeatedly express towards Alison?|Romantic infatuation|Political rivalry|Professional jealousy|Fear of her voice|Medium|Thomas Thorne|Alison Cooper|Unrequited Love|Romantic Poet|Character Obsession|Regency Ghost|Relationship
Who portrayed former politician Julian Fawcett?|Simon Farnaby|Ben Willbond|Mathew Baynton|Laurence Rickard|Easy|Simon Farnaby|Julian Fawcett|Former MP|Actor Casting|1990s Ghost|Political Satire|Main Cast
What profession did Julian Fawcett have during his lifetime?|Member of Parliament|School headmaster|Army surgeon|Antique dealer|Medium|Julian Fawcett|MP|Politics|Westminster|Public Office|Character History|Scandal
What distinctive item of clothing is Julian missing after his death?|His trousers|His jacket|His tie|His shoes|Easy|Julian Fawcett|Missing Trousers|Death Circumstances|Visual Joke|Parliamentarian|1990s|Ghost Costume
Which ghost can exert a small physical force on objects despite being dead?|Julian Fawcett|Thomas Thorne|Kitty|Mary|Medium|Julian Fawcett|Poltergeist Ability|Moving Objects|Ghost Powers|Physical Contact|Household Items|Supernatural Rules
Which actor played the eternally enthusiastic youth-group leader Pat?|Jim Howick|Simon Farnaby|Kiell Smith-Bynoe|Mathew Baynton|Easy|Jim Howick|Pat Butcher|Youth Group Leader|Actor Casting|Arrow Accident|1980s Ghost|Main Ensemble
What caused Pat's death on an outing with his youth group?|An arrow through his neck|A boating accident|A lightning strike|A fall down a staircase|Medium|Pat Butcher|Archery Accident|Arrow|Adventure Club|Youth Group|Death Story|1980s
Which ghost is particularly keen to organise activities for the others?|Pat Butcher|Julian Fawcett|Humphrey Bone|Mary|Easy|Pat Butcher|Organising Activities|Youth Leader|Group Morale|Ghost Events|Jim Howick|Personality
Who plays the prehistoric ghost Robin?|Laurence Rickard|Ben Willbond|Jim Howick|Simon Farnaby|Easy|Laurence Rickard|Robin|Caveman|Prehistoric Ghost|Actor Casting|Ancient Resident|Main Cast
Which of the Button House ghosts lived in prehistoric times?|Robin|Thomas Thorne|Julian Fawcett|Lady Button|Easy|Robin|Prehistory|Caveman|Stone Age|Ancient Spirit|Oldest Inhabitant|Character Era
Which ghost can cause electrical lights to flicker?|Robin|Pat Butcher|Kitty|Captain|Medium|Robin|Electrical Interference|Light Flicker|Supernatural Power|Ancient Ghost|House Electricity|Paranormal Ability
Who played the stern Second World War officer known as the Captain?|Ben Willbond|Mathew Baynton|Simon Farnaby|Jim Howick|Easy|Ben Willbond|The Captain|Military Ghost|Second World War|Actor Casting|Officer|Main Ensemble
During which conflict did the Captain serve?|Second World War|First World War|Crimean War|Falklands War|Medium|The Captain|World War Two|Military Service|Wartime Button House|Army Officer|Historical Era|1940s
Which character regularly tries to impose military discipline on the ghosts?|The Captain|Thomas Thorne|Kitty|Humphrey|Easy|The Captain|Military Discipline|Drills|Wartime Officer|Command|Group Organisation|Ben Willbond
Who portrayed the cheerful Georgian-era ghost Kitty?|Lolly Adefope|Charlotte Ritchie|Katy Wix|Martha Howe-Douglas|Easy|Lolly Adefope|Kitty|Georgian Ghost|Actor Casting|Enthusiasm|Main Ensemble|Female Spirit
Which ghost idolises Alison and is determined to be everyone's friend?|Kitty|Lady Button|Mary|Julian|Medium|Kitty|Alison Idolisation|Optimism|Friendship|Georgian Era|Social Enthusiasm|Character Personality
Who played the Edwardian lady of the manor known as Lady Button?|Martha Howe-Douglas|Katy Wix|Lolly Adefope|Charlotte Ritchie|Easy|Martha Howe Douglas|Lady Fanny Button|Edwardian Ghost|Lady Of Manor|Actor Casting|Main Ensemble|Aristocracy
What period is associated with Lady Fanny Button's lifetime?|Edwardian|Tudor|Regency|Victorian|Medium|Lady Fanny Button|Edwardian Period|Early 1900s|Aristocracy|Period Setting|Manor Life|Ghost Era
Which ghost repeatedly relives falling from a window?|Lady Button|Mary|Kitty|Julian|Medium|Lady Fanny Button|Window Fall|Death Reenactment|Scream|Edwardian Lady|Recurring Gag|Ghost Routine
Who played the seventeenth-century ghost Mary?|Katy Wix|Lolly Adefope|Martha Howe-Douglas|Charlotte Ritchie|Easy|Katy Wix|Mary|Seventeenth Century|Burned At Stake|Actor Casting|Series One Four|Ghost Ensemble
How was Mary killed in her lifetime?|Burned at the stake|Drowned at sea|Poisoned at a banquet|Killed in a duel|Medium|Mary|Witch Trial|Burning At Stake|Early Modern Britain|Death Story|Historical Superstition|Seventeenth Century
What smell accompanies Mary's ghostly presence for people who cannot see her?|Burning|Lavender|Sea salt|Fresh bread|Medium|Mary|Burning Smell|Ghost Power|Witch Trial|Smoke|Sensory Haunting|Supernatural Rules
Which actor plays both Robin and the ghostly head of Humphrey?|Laurence Rickard|Simon Farnaby|Mathew Baynton|Ben Willbond|Hard|Laurence Rickard|Double Role|Robin|Humphrey Bone|Actor Casting|Headless Ghost|Main Ensemble
Which ghost's head is often separated from the rest of his body?|Humphrey Bone|Pat Butcher|Thomas Thorne|Julian Fawcett|Easy|Humphrey Bone|Headless Ghost|Decapitation|Tudor Period|Separated Head|Physical Comedy|Character Trait
Which historical monarch's reign is associated with Humphrey Bone's execution?|Elizabeth I|Henry VIII|Charles I|Victoria|Hard|Humphrey Bone|Elizabethan England|Beheading|Tudor History|Execution|Royal Reign|Historical Era
Who co-created Ghosts alongside Mathew Baynton, Simon Farnaby, Martha Howe-Douglas, Jim Howick and Ben Willbond?|Laurence Rickard|David Croft|Roy Clarke|Gregor Sharp|Medium|Laurence Rickard|Creators Ensemble|Writing Team|Horrible Histories|Comedy Collective|Behind The Scenes|Original Programme
On which British television channel did Ghosts first air?|BBC One|BBC Two|ITV|Channel 4|Easy|BBC One|First Broadcast|Television Channel|2019 Premiere|UK Television|Programme History|Broadcast Network
What year did the British version of Ghosts first air?|2019|2016|2021|2023|Easy|2019 Premiere|Series One|Broadcast Debut|BBC Comedy|Programme Timeline|First Transmission|Opening Season
How many regular series of British Ghosts were made?|Five|Three|Four|Six|Medium|Five Series|2019 To 2023|Programme Count|Sitcom Run|BBC One|Production History|Final Series
In which year did British Ghosts conclude with its final Christmas special?|2023|2020|2022|2025|Medium|2023 Finale|Christmas Special|BBC One|Programme Ending|Broadcast Timeline|Final Farewell|Series Five
What is the title of the first episode of British Ghosts?|Who Do You Think You Are?|Gorilla War|Happy Death Day|Getting Out|Medium|Who Do You Think You Are|Series One|Pilot Episode|First Broadcast|2019|Episode Title|Inheritance Story
Whose annual death anniversary is central to an early first-series episode?|Pat's|Thomas's|Julian's|Kitty's|Medium|Pat Butcher|Death Anniversary|Archery Accident|Series One|Family Pilgrimage|Happy Death Day|Backstory
What sort of production hires Button House as a filming location in the first series?|A television period drama|A science documentary|A music video|A live quiz show|Medium|Series One|Film Crew|Period Drama|Location Hire|House Income|Free Pass|Production Visit
Which organisation offers to buy Button House towards the end of series one?|A luxury hotel chain|A local school trust|A national museum|A university college|Medium|Series One Finale|Hotel Chain|Property Sale|Mike Alison|Financial Pressure|Getting Out|Business Offer
What kind of professional comes to help Alison and Mike secure an event booking in series two?|An event planner|A criminal lawyer|A wildlife ranger|A driving instructor|Medium|Series Two|Event Planner Martin|Booking|Business Venture|Wedding Venue|Redding Weddy|Commercial Plan
Which ghost's past is revisited through conflicting stories in the second series?|Thomas Thorne's|Robin's|Lady Button's|Pat Butcher's|Medium|Thomas Thorne|Romantic Past|Conflicting Memories|Series Two|Backstory|The Thomas Thorne Affair|Ghost Accounts
What treatment forces Alison and Mike to camp outside in the third series?|Woodworm fumigation|Roof rethatching|Flood damage repairs|Pest trapping for rats|Medium|Series Three|Woodworm|Fumigation|Garden Camping|House Maintenance|The Woodworm Men|Repairs
What type of programme brings a film crew to Button House early in series three?|A historical documentary|A gardening competition|A travel reality show|A cooking series|Medium|Series Three Premiere|Historical Documentary|Research Crew|The Bone Plot|House History|Investigation|Visitors
Who is the mysterious woman who claims a family connection to Alison in series three?|Lucy|Claire|Kitty|Sophie|Medium|Lucy|Alison Cooper|Supposed Sister|Inheritance|Series Three|Visitor Mystery|I Love Lucy
Which ghost is offered an improvised therapy session by Alison in series three?|Kitty|Julian|Pat|Humphrey|Medium|Kitty|Therapy Session|Alison|Series Three|Emotional Backstory|Something To Share|Ghost Support
What kind of guest business opens in Button House's gatehouse in series four?|Bed and breakfast|Pet boarding kennel|Cinema club|Art gallery|Medium|Series Four|Gatehouse|Bed And Breakfast|Guest Accommodation|Alison Mike|Business Plan|Hospitality
Whose departure from the ghostly group is revealed in the fourth series?|Mary's|Robin's|Julian's|Kitty's|Medium|Mary|Moving On|Afterlife|Series Four|Gone Gone|Ghost Departure|Katy Wix
Who disrupts Alison and Mike's efforts to attract guests by competing for business in series four?|Their neighbour Barclay|Their solicitor Charles|Mike's brother|A visiting historian|Medium|Barclay Beg Chetwynde|Business Rivalry|Series Four|Neighbour|Guest Poaching|Bed And Breakfast|Hospitality Competition
Which singer appears as herself in the 2023 Comic Relief Ghosts special?|Kylie Minogue|Sophie Ellis-Bextor|Annie Lennox|Paloma Faith|Medium|Kylie Minogue|Comic Relief 2023|Celebrity Cameo|Music Guest|BBC Charity|Button House|Special Appearance
During series five, whose past death becomes the focus of a group investigation?|Kitty's|Julian's|Pat's|Thomas's|Medium|Kitty|Death Mystery|Series Five|Pineapple Day|Ghost Investigation|Georgian Backstory|Historical Puzzle
Which ghost recruits a playful Humphrey for an April Fools prank in series five?|Alison|Mary|Lady Button|Kitty|Medium|Alison Cooper|Humphrey|April Fools Day|Series Five|Prank|Fools Episode|Household Rivalry
Whose mother Betty stays with Alison and Mike during the final Christmas special?|Mike's|Alison's|Pat's|Thomas's|Medium|Betty Cooper|Mike Mother|Christmas 2023|Family Visit|A Christmas Gift|Guest Relative|Final Special
What future decision forms the emotional conclusion of the British Ghosts finale?|Alison and Mike leave Button House|The ghosts all return to life|The manor is demolished|Mike becomes a ghost|Medium|Christmas 2023|Button House Departure|Alison Mike|Family Future|Finale|Household Decision|Series Conclusion`;

const doorsFacts = `Which actress plays Beth Baird in Two Doors Down?|Arabella Weir|Doon Mackichan|Elaine C. Smith|Joy McAvoy|Easy|Arabella Weir|Beth Baird|Lead Actress|Glasgow Neighbours|Household Host|Actor Casting|Scottish Sitcom
Which actor plays Beth's husband Eric Baird?|Alex Norton|Jonathan Watson|Jamie Quinn|Kieran Hodgson|Easy|Alex Norton|Eric Baird|Beth Husband|Lead Actor|Family House|Actor Casting|Scottish Television
What is the surname of central couple Beth and Eric?|Baird|Baxter|Boyd|Bennett|Easy|Beth Baird|Eric Baird|Family Name|Central Couple|Scottish Household|Character Surname|Sitcom Setting
What street is the principal setting for Two Doors Down?|Latimer Crescent|Argyle Road|Waterloo Terrace|Victoria Square|Easy|Latimer Crescent|Fictional Street|Glasgow|Neighbourhood Setting|Beth Eric|Scottish Suburbs|Location Name
In which Scottish city is Two Doors Down set?|Glasgow|Edinburgh|Dundee|Aberdeen|Easy|Glasgow|Scotland|Suburban Comedy|Latimer Crescent|Scottish Sitcom|Filming|Geographic Setting
Who plays the often cutting and demanding neighbour Cathy?|Doon Mackichan|Arabella Weir|Elaine C. Smith|Sharon Rooney|Easy|Doon Mackichan|Cathy|Neighbour|Sharp Tongue|Actor Casting|Main Ensemble|Colin Partner
Which actor plays Cathy's partner Colin?|Jonathan Watson|Alex Norton|Jamie Quinn|Graeme Stevely|Easy|Jonathan Watson|Colin|Cathy Partner|Neighbour|Actor Casting|Central Ensemble|Latimer Crescent
Which actress portrays outspoken neighbour Christine?|Elaine C. Smith|Doon Mackichan|Joy McAvoy|Arabella Weir|Easy|Elaine C Smith|Christine|Neighbour|Frank Speaking|Actor Casting|Scottish Comedy|Main Ensemble
Which actor plays Beth and Eric's son Ian?|Jamie Quinn|Kieran Hodgson|Graeme Stevely|Jonathan Watson|Easy|Jamie Quinn|Ian Baird|Beth Son|Eric Son|Actor Casting|Family Relationship|Younger Cast
Who portrays Ian's boyfriend Gordon from the third series onward?|Kieran Hodgson|Harki Bhambra|Jamie Quinn|Graeme Stevely|Medium|Kieran Hodgson|Gordon|Ian Boyfriend|Series Three|Actor Casting|Couple|Character Arrival
Who plays the neighbour Michelle?|Joy McAvoy|Sharon Rooney|Elaine C. Smith|Doon Mackichan|Medium|Joy McAvoy|Michelle|New Neighbour|Alan Partner|Actor Casting|Series Three|Supporting Lead
Which performer plays Michelle's partner Alan?|Graeme Stevely|Jonathan Watson|Alex Norton|Jamie Quinn|Medium|Graeme Stevely|Alan|Michelle Partner|New Neighbour|Actor Casting|Series Three|Couple
Who played Christine's daughter Sophie in the early series?|Sharon Rooney|Joy McAvoy|Doon Mackichan|Arabella Weir|Medium|Sharon Rooney|Sophie|Christine Daughter|Original Cast|Actor Casting|Series One Two|Family Relationship
Who portrayed Ian's earlier boyfriend Jaz?|Harki Bhambra|Kieran Hodgson|Jamie Quinn|Graeme Stevely|Hard|Harki Bhambra|Jaz|Ian Boyfriend|Series One Two|Actor Casting|Young Couple|Early Cast
Who played Colin's new partner Anne Marie during series six?|Siobhan Redmond|Doon Mackichan|Elaine C. Smith|Joy McAvoy|Medium|Siobhan Redmond|Anne Marie|Colin New Partner|Series Six|Actor Casting|Post Cathy Breakup|Character Introduction
Which two writers originally created Two Doors Down?|Simon Carlyle and Gregor Sharp|Roy Clarke and Jimmy Perry|Andy Hamilton and Guy Jenkin|John Esmonde and Bob Larbey|Medium|Simon Carlyle|Gregor Sharp|Creator Pair|Scottish Writing|Programme Origins|Comedy Scripts|BBC Sitcom
In which year was the original one-hour Two Doors Down pilot shown?|2013|2011|2015|2018|Easy|2013 Pilot|Hogmanay|New Years Eve|BBC One|Programme Debut|Special|Broadcast History
In which year did the first regular series of Two Doors Down begin?|2016|2013|2018|2020|Easy|2016 Series One|BBC Two|Regular Run|First Season|Programme Timeline|Scottish Television|Broadcast History
Which BBC channel originally showed the first regular series?|BBC Two|BBC One|BBC Three|BBC Four|Medium|BBC Two|2016|Original Regular Channel|Programme Launch|Scotland|Broadcast Network|Series One
How many regular series had aired by the end of 2025?|Seven|Five|Six|Eight|Medium|Seven Series|Coverage Cutoff 2025|BBC Catalogue|Programme Count|2016 To 2023|Series Eight Commissioned|Ongoing Show
What kind of celebration forms the premise of the 2013 pilot?|A Hogmanay party|A wedding reception|A Burns Night dinner|A retirement party|Easy|Hogmanay|2013 Pilot|New Year|Family Party|Beth Eric|Scottish Tradition|Programme Origins
What dish is a centrepiece of Beth's cooking in the original New Year's Eve special?|Steak pie|Haggis|Roast turkey|Fish and chips|Medium|Steak Pie|2013 Pilot|Hogmanay Meal|Beth Baird|Scottish Food|New Years Party|Domestic Hospitality
What outdoor structure is destroyed during the chaotic original pilot?|A gazebo|A garden shed|A greenhouse|A carport|Medium|Gazebo|2013 Pilot|Garden Mishap|Hogmanay Party|Household Disaster|New Year|Neighbour Gathering
What freezer mistake sparks a huge meal for the neighbours in the first regular episode?|Eric leaves the freezer door open|Beth forgets to switch the freezer on|Cathy unplugs the freezer|Ian sets the thermostat too high|Medium|Eric Baird|Freezer Door|Defrosted Food|Series One Premiere|Emergency Meal|2016|Kitchen Mishap
Which food does Cathy want replaced after Beth cooks everything from the freezer?|A whole Scottish salmon|A Christmas turkey|A leg of lamb|A tray of prawns|Medium|Scottish Salmon|Series One|Cathy|Colin Freezer|Food Replacement|Dinner Party|2016 Episode
Whose birthday celebration is disrupted by unwanted visitors in the first series?|Eric's|Colin's|Ian's|Christine's|Medium|Eric Birthday|Series One|Surprise Visitors|Neighbour Chaos|2016|Family Photographs|Quiet Day
Which character locks her daughter in a garden hut to discover the father of her baby?|Christine|Cathy|Beth|Michelle|Medium|Christine|Sophie|Garden Hut|Pregnancy Question|Series One|Mother Daughter|2016 Episode
What does Cathy and Colin invite the neighbours to see before Beth and Eric's first holiday in years?|Their new hot tub|Their garden pond|Their conservatory|Their new kitchen|Medium|Hot Tub|Cathy Colin|Series One Finale|Holiday Plans|Neighbour Gathering|Home Improvement|2016
What kind of holiday have Cathy and Colin just enjoyed when the second series begins?|A luxury cruise|A ski trip|A camping tour|A walking holiday|Medium|Luxury Cruise|Cathy Colin|Series Two Premiere|Travel Bragging|2016|Holiday Return|Neighbours
What dietary preference does Beth forget about Jaz when she plans a meal in series two?|He is vegetarian|He avoids gluten|He dislikes fish|He is allergic to nuts|Medium|Jaz|Vegetarian|Dinner Invitation|Series Two|Beth Baird|Meal Planning|2016
Who is the father whose birthday Colin and Cathy celebrate in series two?|Willie|Gordon|Alan|Jaz|Hard|Willie|Colin Father|Birthday Party|Series Two|Family Relation|2016 Episode|Cathy
What garment causes Eric an embarrassing incident when Colin lends him one in series two?|A kilt|A wetsuit|A dressing gown|A dinner jacket|Medium|Eric Baird|Kilt|Colin Clothing|Embarrassment|Series Two|Tartan Army|2016
What party does Beth organise for Sophie's approaching parenthood?|A baby shower|A christening|A first birthday party|A wedding reception|Medium|Sophie|Baby Shower|Christine Daughter|Series Two Finale|Beth Host|Pregnancy|2016
What traditional Scottish event forms the meal at the beginning of series three?|Burns Night|St Andrew's Day|Hogmanay|Highland Games|Medium|Burns Supper|Series Three|Scottish Tradition|Haggis|Latimer Crescent|2018|Dinner Party
What special version of haggis is prepared for Gordon at the Scottish supper?|Vegetarian haggis|Gluten-free haggis|Spicy lamb haggis|Haggis with fish|Medium|Gordon|Vegetarian Haggis|Burns Night|Series Three|Dietary Preference|2018|Shared Supper
Which couple's house suffers a burglary during the third series?|Cathy and Colin's|Beth and Eric's|Ian and Gordon's|Alan and Michelle's|Medium|Cathy Colin|Burglary|Series Three|Break In|2018|Neighbour Emergency|Home Security
Which new couple move into the street during the third series?|Alan and Michelle|Ian and Jaz|Colin and Anne Marie|Gordon and Sophie|Medium|Alan Michelle|New Neighbours|Series Three|Latimer Crescent|2018|Character Introductions|Across The Road
Who surprises Beth and Eric with a party for their thirtieth wedding anniversary?|Ian and Gordon|Cathy and Colin|Christine and Sophie|Alan and Michelle|Medium|Ian Gordon|Thirtieth Anniversary|Series Four|Beth Eric|Surprise Party|2019|Family Event
Whose father's funeral brings the neighbours together in series four?|Colin's|Eric's|Ian's|Alan's|Medium|Willie|Colin Father|Funeral|Series Four|Bereavement|2019|Neighbour Support
Which character spends time in hospital in the fourth series?|Christine|Cathy|Beth|Michelle|Medium|Christine|Hospital Stay|Series Four|NHS|2019|Patient|Neighbour Reactions
From which English county do Gordon's parents visit in the fourth series?|Yorkshire|Kent|Devon|Norfolk|Hard|Gordon Parents|Yorkshire|Graham Sandra|Series Four|Family Visit|2019|Meeting Relatives
Which new neighbours stay with Beth and Eric while their house is being redecorated?|Alan and Michelle|Cathy and Colin|Ian and Gordon|Sophie and Jaz|Medium|Alan Michelle|Overnight Stay|Series Four|Floor Sanding|2019|House Redecoration|Neighbours
Where do the neighbours spend their troubled 2020 festive holiday?|A luxury lodge in the Scottish Highlands|A hotel in Edinburgh|A cottage on Skye|A seaside house in Fife|Medium|2020 Christmas Special|Scottish Highlands|Luxury Lodge|Cathy Colin|Holiday Break|Christmas Trip|Neighbour Conflict
What meal does Beth prepare to mark Ian and Gordon's anniversary in series five?|Vegetable curry|Roast beef|Lasagne|Fish pie|Medium|Vegetarian Curry|Ian Gordon|Anniversary Meal|Series Five|2021|Beth Cooking|Celebration
Where is the 2021 Christmas gathering held?|Michelle and Alan's house|Cathy and Colin's house|Christine's house|Ian and Gordon's flat|Medium|2021 Christmas Special|Michelle Alan|Festive Party|House Party|Beth Eric|Neighbour Gathering|2021
Who is Alan's brother getting married during series five?|Michael|Gordon|Willie|Jaz|Hard|Brother Michael|Alan|Wedding|Series Five|2022|Best Man|Family Relation
What newly arrived neighbours object to the unhealthy doughnuts offered in series five?|Ash and Iqbal|Gordon and Jaz|Willie and Sandra|Eric and Christine|Hard|Ash Iqbal|Health Conscious|Doughnuts|Series Five|New Residents|2022|Food Debate
To which part of Italy do Cathy and Colin travel before hosting friends in series five?|Amalfi Coast|Lake Como|Sicily|Tuscany|Medium|Amalfi Coast|Cathy Colin|Italian Holiday|Series Five|2022|Soiree|Travel Boasting
Who is Colin's partner at the start of series six after his break-up with Cathy?|He is single|Anne Marie|Christine|Michelle|Medium|Colin|Cathy Breakup|Series Six Premiere|Single Life|2022|Relationship Status|New Partner Later
What item is Alan wearing while recovering from an accident in series six?|A surgical boot|A neck brace|An arm sling|A knee splint|Medium|Alan|Surgical Boot|Series Six|Injury|2022|Sofa Recovery|Michelle Away
Which new partner does Colin present to the neighbours during series six?|Anne Marie|Sophie|Mavis|Beth|Medium|Anne Marie|Colin Partner|Series Six|Dinner Party|2022|New Romance|Siobhan Redmond
What age birthday do Beth and Eric celebrate for Christine in series six?|Sixty-nine|Sixty-five|Seventy|Seventy-five|Medium|Christine|Sixty Ninth Birthday|Series Six|2022|Beth Eric Hosts|Birthday Party|Funeral Talk
What food-service venue hosts the neighbours in the 2022 Christmas special?|A coffee shop|A hotel restaurant|A pub beer garden|A fish bar|Medium|2022 Christmas Special|Coffee Shop|Shopping Break|Christine Generosity|Loyalty Points|Festive Outing|Snow
What surprises Colin at Anne Marie's birthday gathering at the start of series seven?|Cathy returns|His father arrives|Gordon proposes|Michelle moves away|Medium|Cathy Return|Colin|Anne Marie Birthday|Series Seven|2023|Unexpected Guest|Relationship Reunion
Who is the former school friend whose visit unsettles Gordon in series seven?|Darren|Michael|Willie|Jaz|Hard|Darren|Ian School Friend|Gordon Jealousy|Series Seven|2023|Past Relationship|Unexpected Visitor
Which type of restaurant do Ian and Gordon choose for a Father's Day outing in series seven?|A carvery|A sushi bar|An Italian pizzeria|A seafood restaurant|Medium|Carvery|Fathers Day|Ian Gordon|Series Seven|2023|Parents Lunch|Christine Invitation
Which entertainer does Eric talk admiringly about while waiting for a Chinese takeaway in series seven?|Billy Connolly|Frankie Boyle|Kevin Bridges|Peter Kay|Medium|Billy Connolly|Eric Baird|Chinese Takeaway|Series Seven|2023|Scottish Comedy|Neighbour Conversation
Which American city have Alan and Michelle just returned from at the end of series seven?|Las Vegas|New York|Miami|Chicago|Medium|Las Vegas|Alan Michelle|Series Seven Finale|2023|Delayed Flight|Travel|Big News
What early decoration sparks the neighbours' festive preparations in the 2025 Christmas special?|Beth and Eric's Christmas tree|Cathy and Colin's outdoor lights|Christine's paper chains|Michelle's front-door wreath|Medium|Christmas 2025|Christmas Tree|Beth Eric|Early Decorations|Festive Neighbours|December Special|BBC One
Which character is organising an unusual trip during the 2025 Christmas special?|Christine|Cathy|Michelle|Beth|Medium|Christmas 2025|Christine|Special Trip|Festive Planning|Holiday Arrangements|Neighbourhood|BBC Special
What problems threaten Alan and Michelle's holiday plans in the 2025 Christmas special?|Transport difficulties|A missing passport|A burst pipe|A lost pet|Medium|Christmas 2025|Alan Michelle|Transport Problems|Festive Plans|Travel Disruption|Last Broadcast Covered|BBC One`;

const questions = [];
function addFacts(block, programme, era) {
  const rows = block.trim().split('\n');
  for (const [index, row] of rows.entries()) {
    const cells = row.split('|').map(s => s.trim());
    if (cells.length !== 13 || cells.some(s => !s)) {
      throw new Error(`${programme} row ${index + 1}: expected 13 nonempty fields, got ${cells.length}`);
    }
    const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = cells;
    const question = stem.toLowerCase().includes(programme.toLowerCase())
      ? stem : `In ${programme}, ${stem[0].toLowerCase()}${stem.slice(1)}`;
    const answers = [wrong1, wrong2, wrong3];
    answers.splice(questions.length % 4, 0, correctAnswer);
    const tags = [...new Map([
      'Television', 'British Sitcom', programme, era, correctAnswer, ...specificTags
    ].map(s => [s.toLowerCase().replace(/[^a-z0-9]/g, ''), s])).values()];
    const item = {
      id: `tv_${FIRST_ID + questions.length}`,
      category: 'Television',
      question, answers, correctAnswer, difficulty, tags, dailyEligible: true
    };
    if (new Set(answers.map(a => a.toLowerCase())).size !== 4 ||
        !answers.includes(correctAnswer) || !['Easy','Medium','Hard'].includes(difficulty) ||
        tags.length < 9) throw new Error(`Metadata invalid in ${item.id}`);
    questions.push(item);
  }
}
addFacts(ghostFacts, 'Ghosts (UK)', '2019-2023 complete');
addFacts(doorsFacts, 'Two Doors Down', '2013-2025 covered through 24 Dec 2025');
const seen = new Set();
for (const q of questions) {
  const stem = q.question.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (seen.has(stem)) throw new Error(`Duplicate question ${q.id}`);
  seen.add(stem);
}
module.exports = questions;
