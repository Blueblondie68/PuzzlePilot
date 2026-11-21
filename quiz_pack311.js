
// quiz_pack311.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Are You Being Served? - pilot and Series 1-3 (1972-1975)
// The original Grace Brothers staff, early episodes and 1975 Christmas special.
// Seven individually selected specialist tags per question.
// Pack 311 is already included in the connected quiz_bank.js range (Packs 1–558).
// Row: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven tags

const groups = [
  {
    topic: 'Programme origins and the 1972 pilot',
    era: '1972',
    facts: `What is the name of the department store in Are You Being Served?|Grace Brothers|Binns|Debenhams|Harrowby and Sons|Easy|Grace Brothers|Fictional Shop|Department Store|London Retail|Workplace Sitcom|Store Name|Programme Setting
In which British city is Grace Brothers situated?|London|Manchester|Birmingham|Leeds|Easy|London|Grace Brothers|Retail Setting|British Capital|Fictional Department Store|Urban Comedy|Programme Location
Which channel originally broadcast Are You Being Served?|BBC One|ITV|BBC Two|Channel 4|Easy|BBC One|Original Broadcaster|BBC Comedy|1970s Television|Broadcast History|British Sitcom|Television Network
Which two writers created Are You Being Served?|Jeremy Lloyd and David Croft|John Sullivan and Roy Clarke|Jimmy Perry and Dick Clement|Carla Lane and Alan Bleasdale|Medium|Jeremy Lloyd|David Croft|Programme Creators|Comedy Partnership|BBC Writers|Sitcom Origins|Writing Credits
In what year was the pilot episode first shown?|1972|1970|1973|1975|Easy|1972 Pilot|Original Transmission|Early Broadcast|Programme Origins|Pilot Year|British Television|First Appearance
The pilot appeared as part of which BBC comedy anthology?|Comedy Playhouse|Play for Today|The Wednesday Play|Armchair Theatre|Medium|Comedy Playhouse|BBC Anthology|Sitcom Pilot|Programme Launch|1972 Broadcast|Television Format|Comedy Series
What is the central change at Grace Brothers in the original pilot?|The ladies and gents departments must share a floor|The store moves to a new town|The shop becomes a supermarket|The staff open a restaurant|Easy|Department Merger|Shared Floor|Ladies Intimate Apparel|Mens Ready To Wear|Pilot Premise|Retail Reorganisation|1972 Story
Which department moves onto the floor previously occupied by the men's staff?|Ladies' Intimate Apparel|Furniture|Electrical Goods|Food and Wine|Easy|Ladies Intimate Apparel|Floor Sharing|Menswear Department|Store Reorganisation|Pilot Episode|Lingerie Counter|Grace Brothers
Which senior salesman objects to losing his central floor display in the pilot?|Mr Grainger|Mr Humphries|Mr Lucas|Mr Mash|Medium|Ernest Grainger|Centre Display|Menswear Counter|Pilot Dispute|Department Rivalry|Arthur Brough|Retail Politics
What clothing is the men's central display meant to give way to in the pilot?|Ladies' underwear|Children's shoes|Winter coats|Household linen|Easy|Ladies Underwear|Centre Display|Floor Reorganisation|Pilot Story|Intimate Apparel|Shop Layout|Department Dispute
What is Captain Peacock's job at Grace Brothers?|Floorwalker|Head cashier|Warehouse manager|Store detective|Easy|Stephen Peacock|Floorwalker|Frank Thornton|Staff Hierarchy|Department Supervision|Customer Service|Grace Brothers
What is Mr Rumbold's position at Grace Brothers?|Department manager|Delivery driver|Window dresser|Staff doctor|Easy|Cuthbert Rumbold|Department Manager|Nicholas Smith|Store Management|Sales Targets|Staff Supervision|Grace Brothers`,
  },
  {
    topic: 'Original cast, characters and famous running jokes',
    era: '1972-1975',
    facts: `Which actress played Mrs Betty Slocombe?|Mollie Sugden|Wendy Richard|Pauline Collins|June Whitfield|Easy|Mollie Sugden|Betty Slocombe|Ladies Department|Senior Saleswoman|Original Cast|Character Casting|British Actress
Who played Miss Shirley Brahms?|Wendy Richard|Mollie Sugden|Joanna Lumley|Penny Irving|Easy|Wendy Richard|Shirley Brahms|Junior Saleswoman|Ladies Counter|Original Cast|Character Casting|Cockney Accent
Which actor portrayed Mr Wilberforce Humphries?|John Inman|Trevor Bannister|Nicholas Smith|Frank Thornton|Easy|John Inman|Wilberforce Humphries|Menswear Assistant|Original Cast|Character Casting|Im Free|British Comedy
Who portrayed the imposing Captain Peacock?|Frank Thornton|Arthur Brough|Harold Bennett|Larry Martyn|Easy|Frank Thornton|Stephen Peacock|Floorwalker|Original Cast|Staff Authority|Character Casting|Department Store
Which actor played department manager Mr Rumbold?|Nicholas Smith|Trevor Bannister|Arthur Brough|John Inman|Medium|Nicholas Smith|Cuthbert Rumbold|Department Manager|Original Cast|Character Casting|Management Office|Sales Figures
Who played junior menswear salesman Mr Lucas?|Trevor Bannister|John Inman|Larry Martyn|Frank Thornton|Easy|Trevor Bannister|Mr Lucas|Junior Salesman|Mens Ready To Wear|Original Cast|Character Casting|Miss Brahms
Which actor portrayed senior menswear salesman Mr Grainger?|Arthur Brough|Nicholas Smith|Harold Bennett|Arthur English|Medium|Arthur Brough|Ernest Grainger|Senior Salesman|Menswear Counter|Original Cast|Character Casting|Store Veteran
Which actor played the elderly Young Mr Grace?|Harold Bennett|Arthur Brough|Frank Thornton|Nicholas Smith|Medium|Harold Bennett|Young Mr Grace|Store Owner|Grace Family|Original Cast|Character Casting|Department Store Boss
Which actor portrayed the maintenance worker Mr Mash in the early series?|Larry Martyn|Arthur English|James Hayter|Alfie Bass|Medium|Larry Martyn|Mr Mash|Maintenance Worker|Original Cast|Stores And Deliveries|Character Casting|Early Series
What is the first name of Mrs Slocombe?|Betty|Shirley|Edith|Mavis|Medium|Betty Slocombe|Ladies Department|Mollie Sugden|Character First Name|Senior Assistant|Grace Brothers|Shop Staff
What is Miss Brahms's first name?|Shirley|Betty|Pamela|Peggy|Medium|Shirley Brahms|Wendy Richard|Character First Name|Junior Assistant|Ladies Department|Original Cast|Shop Staff
What is Mr Humphries's first name?|Wilberforce|Cuthbert|Ernest|Stephen|Medium|Wilberforce Humphries|John Inman|Character First Name|Menswear Assistant|Original Character|Retail Comedy|Grace Brothers
What is Captain Peacock's first name?|Stephen|Ernest|Wilberforce|Cuthbert|Medium|Stephen Peacock|Frank Thornton|Character First Name|Floorwalker|Store Hierarchy|Original Cast|Grace Brothers
What is Mr Rumbold's first name?|Cuthbert|Stephen|Ernest|Beverly|Medium|Cuthbert Rumbold|Nicholas Smith|Character First Name|Department Manager|Management Office|Original Cast|Grace Brothers
What is the name of Mrs Slocombe's pet cat?|Tiddles|Mittens|Felix|Tigger|Easy|Tiddles|Mrs Slocombe Cat|Double Entendre|Pet Stories|Mollie Sugden|Running Gag|Character Detail
Which character is best known for announcing I'm free?|Mr Humphries|Mr Lucas|Captain Peacock|Mr Grainger|Easy|Mr Humphries|Im Free|John Inman|Catchphrase|Availability Joke|Menswear Counter|Running Gag
Which elderly boss often tells the employees You've all done very well?|Young Mr Grace|Mr Rumbold|Captain Peacock|Mr Grainger|Easy|Young Mr Grace|Harold Bennett|Praise Catchphrase|Store Owner|Staff Address|Running Joke|Department Store
Which character is particularly famous for frequently changing her hair colour?|Mrs Slocombe|Miss Brahms|Miss Bakewell|Mrs Peacock|Easy|Betty Slocombe|Coloured Hairstyles|Mollie Sugden|Ladies Department|Visual Gag|Character Appearance|1970s Sitcom`,
  },
  {
    topic: 'Series One: letters, salesmanship and overnight camping',
    era: '1973',
    facts: `In which year did the first regular series of Are You Being Served begin?|1973|1972|1974|1976|Easy|Series One|1973 Broadcast|BBC One|Sitcom Timeline|Regular Series|Programme Launch|Television History
How many episodes were in the first regular series?|Five|Six|Seven|Eight|Medium|Five Episodes|Series One|1973 Run|Episode Count|BBC Sitcom|Programme Structure|Early Series
What is the title of the first regular episode?|Dear Sexy Knickers|Camping In|The Clock|The Hand of Fate|Medium|Dear Sexy Knickers|Series One Premiere|Opening Episode|March 1973|Episode Title|Broadcast Order|BBC One
Who writes the misdirected romantic note in Dear Sexy Knickers?|Mr Lucas|Mr Humphries|Mr Rumbold|Captain Peacock|Easy|Mr Lucas|Love Note|Dear Sexy Knickers|Junior Salesman|Romantic Pursuit|1973 Plot|Office Misunderstanding
For whom is Mr Lucas's note originally intended?|Miss Brahms|Mrs Slocombe|Mr Grainger|Mr Rumbold|Easy|Shirley Brahms|Intended Recipient|Mr Lucas|Dear Sexy Knickers|Love Letter|Ladies Assistant|1973 Story
Who accidentally receives the love note in Dear Sexy Knickers?|Mrs Slocombe|Miss Brahms|Mrs Peacock|Young Mr Grace|Easy|Betty Slocombe|Wrong Recipient|Misdirected Letter|Dear Sexy Knickers|Romantic Mix Up|1973 Episode|Running Farce
What concern prompts Mr Rumbold to organise the meeting in Our Figures Are Slipping?|Falling sales|A missing diamond|A transport strike|A broken lift|Easy|Falling Sales|Sales Figures|Mr Rumbold|Staff Conference|Our Figures Are Slipping|1973 Episode|Retail Targets
When does Mr Rumbold hold his sales-training session?|After closing time|During the lunch break|Before the shop opens|On a Sunday|Medium|After Hours|Sales Training|Mr Rumbold|Our Figures Are Slipping|Unpaid Meeting|1973 Plot|Employee Complaints
Why must the staff remain in Grace Brothers overnight in Camping In?|A public transport strike|A blizzard|A citywide power cut|A broken store lock|Easy|Transport Strike|Camping In|Overnight Stay|London Transport|Store Employees|1973 Story|Stranded Staff
What do the employees use as sleeping accommodation in Camping In?|Tents|Hammocks|Camp beds in the lift|Cardboard boxes|Easy|Shop Floor Tents|Camping In|Overnight Accommodation|Staff Arguments|Store Interior|1973 Episode|Improvised Camp
What kind of merchandise is promoted in His and Hers?|Perfume|Jewellery|Menswear|Kitchen appliances|Easy|Perfume Counter|His And Hers|Sales Promotion|Retail Concession|Commissions|1973 Plot|Shop Floor Dispute
Which actress guest-starred as the visiting perfume saleswoman in His and Hers?|Joanna Lumley|Penelope Keith|Felicity Kendal|Pamela Stephenson|Medium|Joanna Lumley|Perfume Saleswoman|His And Hers|Guest Actress|Retail Promotion|1973 Episode|Early Career
Why do the regular staff object to the visiting perfume seller?|She is taking their sales commissions|She wants to close the store|She refuses to serve men|She has replaced Mr Rumbold|Medium|Lost Commissions|Perfume Concession|Sales Rivalry|His And Hers|Grace Brothers Staff|1973 Story|Retail Competition
What valuable item is lost in Diamonds Are a Man's Best Friend?|A diamond|A pearl necklace|A gold watch|A ruby ring|Easy|Lost Diamond|Store Customer|Reward Offer|Diamonds Are A Mans Best Friend|1973 Plot|Precious Stone|Hidden Jewellery
What encourages the shop staff to compete in searching for the lost diamond?|A reward for finding it|An offer of promotion|A week of paid leave|A chance to meet a celebrity|Easy|Finders Reward|Lost Diamond|Staff Competition|Diamonds Are A Mans Best Friend|Greed|1973 Finale|Customer Property
Which episode closed the first regular series in 1973?|Diamonds Are a Man's Best Friend|Camping In|The Clock|Big Brother|Medium|Diamonds Are A Mans Best Friend|Series One Finale|April 1973|Episode Title|Broadcast Order|Five Episodes|Early Series`,
  },
  {
    topic: 'Series Two: the clock, the cold and CCTV',
    era: '1974',
    facts: `In which year was the second series first broadcast?|1974|1973|1975|1977|Easy|Series Two|1974 Broadcast|BBC One|Programme Timeline|Broadcast Year|Early Series|Sitcom History
Which episode begins Series Two?|The Clock|Cold Comfort|Big Brother|Wedding Bells|Medium|The Clock|Series Two Premiere|March 1974|Episode Title|Broadcast Order|Grace Brothers|British Sitcom
Which longstanding employee fears he is about to be retired in The Clock?|Mr Grainger|Mr Lucas|Mr Humphries|Captain Peacock|Easy|Ernest Grainger|Retirement Fear|The Clock|Senior Salesman|Grace Brothers Veteran|1974 Plot|Staff Dinner
What age is Mr Grainger celebrating in The Clock?|Sixty-five|Sixty|Seventy|Seventy-five|Medium|Mr Grainger Birthday|Age Sixty Five|The Clock|Retirement Age|Staff Celebration|1974 Episode|Arthur Brough
Which unwanted retirement gift is associated with The Clock?|A cuckoo clock|A pocket watch|A carriage clock|A grandfather clock|Easy|Cuckoo Clock|Retirement Presentation|Mr Grainger|The Clock|Staff Gift|1974 Story|Store Tradition
How many years has Mr Grainger served Grace Brothers by the time of The Clock?|Thirty-seven|Twenty|Twenty-five|Forty-five|Medium|Thirty Seven Years|Mr Grainger|Long Service|The Clock|Retail Career|1974 Episode|Employment Anniversary
What problem prompts the cold conditions in Cold Comfort?|A fuel shortage|A broken roof|An open window|A burst water main|Easy|Fuel Crisis|Cold Comfort|Store Heating|Energy Shortage|1974 Plot|Working Conditions|Winter Chill
Which shop system is turned off during the fuel crisis in Cold Comfort?|Central heating|Air conditioning|Security alarms|The lifts|Easy|Central Heating|Cold Comfort|Fuel Shortage|Department Store|Energy Restrictions|1974 Story|Staff Discomfort
How do employees try to stay warm in Cold Comfort?|By using electrical heating appliances|By holding a dance competition|By wearing swimming costumes|By lighting candles in the lifts|Medium|Secret Heaters|Electrical Appliances|Cold Comfort|Winter Working|Energy Restrictions|1974 Episode|Staff Ingenuity
What do the employees propose to improve sales in The Think Tank?|A fashion show|A store closure|A staff strike|A new car park|Easy|Fashion Show|The Think Tank|Sales Promotion|Brainstorming|Store Merchandise|1974 Plot|Retail Ideas
Why is the brainstorming meeting called in The Think Tank?|To reverse poor sales|To organise a wedding|To select a new captain|To investigate a burglary|Easy|Poor Sales|The Think Tank|Staff Brainstorming|Mr Rumbold|Commercial Problems|1974 Episode|Department Targets
What technology does Grace Brothers install in Big Brother?|Closed-circuit television|Automatic doors|Talking lifts|Computerised tills|Easy|CCTV|Big Brother|Security Cameras|Shoplifting Prevention|1974 Story|Retail Surveillance|Electronic Equipment
Why is CCTV supposedly installed in Big Brother?|To catch shoplifters|To film a television advert|To monitor deliveries|To interview new employees|Medium|Shoplifting|CCTV|Big Brother|Loss Prevention|Store Security|1974 Plot|Surveillance Scheme
Who ends up spying on the staff through the cameras in Big Brother?|Mr Rumbold|Mr Mash|Young Mr Grace|Mr Lucas|Easy|Cuthbert Rumbold|Staff Surveillance|Big Brother|Security Monitors|Store Management|1974 Episode|Invasion Of Privacy
Why does the store shut for a fortnight in Hoorah for the Holidays?|Renovation work|A flood|A stocktaking audit|A workers' strike|Easy|Store Renovation|Two Week Closure|Hoorah For The Holidays|1974 Finale|Maintenance|Staff Leave|Refurbishment
What does Grace Brothers try to arrange for the staff while the store is being renovated?|A group holiday|A compulsory night school|A sports tournament|A visit to the factory|Easy|Group Holiday|Hoorah For The Holidays|Staff Travel|Store Closure|Holiday Destinations|1974 Plot|Workplace Outing`,
  },
  {
    topic: 'Series Three: palmistry, break times and new privileges',
    era: '1975',
    facts: `In which year did Series Three of Are You Being Served begin?|1975|1974|1976|1978|Easy|Series Three|1975 Broadcast|BBC One|Programme Timeline|Broadcast Year|Department Store|British Comedy
Which episode starts Series Three?|The Hand of Fate|Coffee Morning|Wedding Bells|German Week|Medium|The Hand Of Fate|Series Three Premiere|February 1975|Episode Title|Broadcast Order|Early Stories|BBC Sitcom
Which staff member claims to have a talent for reading palms in The Hand of Fate?|Mr Humphries|Mr Grainger|Captain Peacock|Mr Lucas|Easy|Wilberforce Humphries|Palm Reading|The Hand Of Fate|Fortune Telling|1975 Plot|Character Talent|Sales Floor
What kind of changes do the staff expect following the predictions in The Hand of Fate?|Promotions|Mass redundancies|An overseas transfer|A pay cut|Easy|Promotions|Palm Predictions|The Hand Of Fate|Career Advancement|Staff Hopes|1975 Episode|Store Hierarchy
What activity does Captain Peacock begin strictly recording in Coffee Morning?|Staff tea and toilet breaks|The number of shop windows cleaned|Customers entering the lift|Telephone calls to suppliers|Easy|Coffee Break Log|Captain Peacock|Staff Monitoring|Coffee Morning|Timekeeping|1975 Plot|Workplace Rules
How do the staff respond to the tighter break rules in Coffee Morning?|They take industrial action|They organise a birthday party|They ask for night shifts|They move to another floor|Medium|Industrial Action|Coffee Morning|Staff Protest|Timekeeping Dispute|Management Rules|1975 Episode|Employee Solidarity
What reward does Captain Peacock gain for long service in Up Captain Peacock?|Access to the executive dining room and toilet|A company car|A permanent office|An overseas holiday|Medium|Executive Privileges|Captain Peacock|Dining Room|Executive Toilet|Up Captain Peacock|1975 Plot|Long Service
How long has Captain Peacock worked at Grace Brothers when he receives his new privileges?|Twenty years|Ten years|Thirty years|Fifteen years|Medium|Twenty Years Service|Captain Peacock|Up Captain Peacock|Employment Anniversary|Executive Privileges|1975 Episode|Floorwalker
Which senior salesman resents Captain Peacock's executive privileges?|Mr Grainger|Mr Lucas|Mr Humphries|Mr Mash|Easy|Ernest Grainger|Privilege Envy|Captain Peacock|Executive Dining Room|Up Captain Peacock|1975 Story|Staff Rivalry
Which two employees report being ill in Cold Store?|Mrs Slocombe and Mr Lucas|Miss Brahms and Mr Humphries|Captain Peacock and Mr Rumbold|Mr Grainger and Mr Mash|Medium|Betty Slocombe|Mr Lucas|Sick Staff|Cold Store|1975 Plot|Sales Floor Transfers|Employee Illness
Who is temporarily moved to the men's counter in Cold Store?|Miss Brahms|Mrs Slocombe|Young Mr Grace|Mr Mash|Easy|Shirley Brahms|Menswear Counter|Cold Store|Staff Reassignment|1975 Episode|Ladies Department|Counter Swap
Which supposedly sick character is actually pretending to be unwell in Cold Store?|Mr Lucas|Mr Humphries|Mr Grainger|Captain Peacock|Medium|Mr Lucas|Fake Illness|Cold Store|Sick Leave|Junior Salesman|1975 Story|Workplace Deception
What nationality supplies the theme of the store promotion in German Week?|German|French|Italian|Dutch|Easy|German Week|National Theme|Imported Merchandise|Sales Promotion|Mr Rumbold|1975 Episode|Continental Goods
How do the staff try to create a more festive atmosphere in German Week?|By wearing themed costumes and dancing|By closing early every day|By giving customers free bicycles|By staging a boxing match|Medium|German Costumes|Traditional Dancing|German Week|Retail Entertainment|Poor Sales|1975 Plot|Store Theme
Whom does Mrs Slocombe think is planning to propose marriage in Wedding Bells?|Young Mr Grace|Mr Rumbold|Mr Grainger|Captain Peacock|Easy|Betty Slocombe|Young Mr Grace|Imagined Proposal|Wedding Bells|1975 Plot|Marriage Misunderstanding|Store Owner
Why must the ladies share the men's counter in Shoulder to Shoulder?|Their department is being redecorated|Their stock has been stolen|The lift to their floor breaks|The store introduces a men's fashion week|Easy|Ladies Department Renovation|Shared Counter|Shoulder To Shoulder|Menswear Staff|1975 Story|Floor Space|Department Rivalry
What promotional method does Mrs Slocombe suggest in New Look?|Loudspeaker announcements|Television advertising|Home-delivery catalogues|Customer loyalty cards|Medium|Loudspeaker Announcements|Betty Slocombe|New Look|Sales Promotion|Public Address System|1975 Episode|Retail Marketing
What does the staff meeting in New Look aim to improve?|The store's sales|The quality of staff meals|The lift's reliability|The heating system|Easy|Boost Sales|New Look|Staff Meeting|Retail Ideas|Department Performance|1975 Finale|Brainstorming`,
  },
  {
    topic: 'The 1975 Christmas special',
    era: 'Christmas 1975',
    facts: `What is the title of the 1975 Christmas special?|Christmas Crackers|The Father Christmas Affair|A Christmas Carol|The Staff Party|Medium|Christmas Crackers|1975 Festive Special|Episode Title|BBC Christmas|Grace Brothers|Seasonal Broadcast|Television History
In which month was Christmas Crackers first broadcast?|December|November|October|January|Easy|December 1975|Christmas Crackers|Broadcast Month|Festive Schedule|BBC One|Television Premiere|Holiday Special
What seasonal attraction is prepared on the Grace Brothers shop floor in Christmas Crackers?|A Christmas grotto|An ice rink|A winter market|A pantomime stage|Easy|Christmas Grotto|Store Decorations|Christmas Crackers|Festive Retail|1975 Special|Seasonal Display|Shop Floor
What type of outfits are supplied for the staff in Christmas Crackers?|Christmas character costumes|Military uniforms|Tennis whites|Space suits|Easy|Festive Costumes|Christmas Crackers|Character Outfits|Store Entertainment|1975 Special|Holiday Celebration|Shop Staff
Where does the staff Christmas meal in Christmas Crackers come from?|The staff canteen|A French restaurant|The local pub|A luxury hotel|Medium|Staff Canteen|Christmas Meal|Christmas Crackers|Festive Banquet|1975 Episode|Department Store Dining|Seasonal Food
Who forgets to buy a ticket for the staff Christmas banquet?|Mr Lucas|Mr Humphries|Mr Mash|Captain Peacock|Medium|Mr Lucas|Missing Banquet Ticket|Christmas Crackers|Staff Meal|1975 Special|Holiday Mishap|Junior Salesman`,
  },
];

const FIRST_ID = 13643;
let index = 0;

const questions = groups.flatMap(group =>
  group.facts.trim().split('\n').map(line => {
    const parts = line.trim().split('|').map(part => part.trim());
    const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');

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
      'British Television', 'Television', 'Are You Being Served?', 'BBC One',
      'British Sitcom', 'Workplace Comedy', 'Department Store', 'Grace Brothers',
      group.era, group.topic, correctAnswer, ...specificTags
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

    index++;
    return item;
  })
);

const EXPECTED_COUNT = 86;
if (questions.length !== EXPECTED_COUNT) {
  throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
}
if (questions[0].id !== 'tv_13643' || questions[questions.length - 1].id !== 'tv_13728') {
  throw new Error('Unexpected question ID range');
}
if (new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
  throw new Error('Duplicate question IDs or wording');
}
if (questions.some(q => q.category !== 'Television' ||
    q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
    q.tags.length < 15 || q.tags.some(tag => !tag) || q.dailyEligible !== true)) {
  throw new Error('Incomplete exported question metadata');
}


// 21 November 2026: Are You Being Served? pilot and Series 1–3 editorial audit.
// Preserves all original question IDs tv_13643–tv_13728.
// New research-backed questions tv_36168–tv_36197.
// Sources: British Comedy Guide pilot notes, series cast/crew and trivia,
// plus the official David Croft early-series episode archive.
// https://www.comedy.co.uk/tv/are_you_being_served/trivia/
// https://www.comedy.co.uk/tv/are_you_being_served/episodes/0/1/
// https://www.comedy.co.uk/tv/are_you_being_served/episodes/3/9/
// https://www.comedy.co.uk/tv/are_you_being_served/cast_crew/full/
// https://www.davidcroft.co.uk/Are-You-Being-Served/Episodes/
const auditAdditions = [
  {
    "id": "tv_36168",
    "category": "Television",
    "question": "On what date was the pilot of Are You Being Served? first broadcast on BBC One?",
    "answers": [
      "8 September 1972",
      "8 October 1972",
      "21 March 1973",
      "25 December 1972"
    ],
    "correctAnswer": "8 September 1972",
    "difficulty": "Hard",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Pilot and beginnings",
      "Specific fact: Exact pilot transmission",
      "Historical or episode context: BBC One opening broadcast",
      "Correct answer: 8 September 1972",
      "Research source: British Comedy Guide pilot",
      "BBC comedy production history",
      "Early programme era: 1972 pilot",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36169",
    "category": "Television",
    "question": "What was the working title of Jeremy Lloyd's original Are You Being Served? pilot script?",
    "answers": [
      "Shop Talk",
      "Fun in Store",
      "Grace Under Pressure",
      "Serving Time"
    ],
    "correctAnswer": "Fun in Store",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Pilot and beginnings",
      "Specific fact: Pilot working title",
      "Historical or episode context: Jeremy Lloyd's original idea",
      "Correct answer: Fun in Store",
      "Research source: British Comedy Guide trivia",
      "BBC comedy production history",
      "Early programme era: 1972 pilot",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36170",
    "category": "Television",
    "question": "Which real Piccadilly department store inspired Jeremy Lloyd's original idea for Are You Being Served??",
    "answers": [
      "Liberty",
      "Harrods",
      "Simpson",
      "Selfridges"
    ],
    "correctAnswer": "Simpson",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Pilot and beginnings",
      "Specific fact: Real retail employer",
      "Historical or episode context: Simpson of Piccadilly",
      "Correct answer: Simpson",
      "Research source: British Comedy Guide trivia",
      "BBC comedy production history",
      "Early programme era: 1972 pilot",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36171",
    "category": "Television",
    "question": "Which real shop's name helped inspire the fictional Grace Brothers in Are You Being Served??",
    "answers": [
      "Brown Brothers",
      "Binns",
      "Simpson",
      "Grey Brothers"
    ],
    "correctAnswer": "Grey Brothers",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Pilot and beginnings",
      "Specific fact: Grace Brothers naming inspiration",
      "Historical or episode context: David Croft's friend's family business",
      "Correct answer: Grey Brothers",
      "Research source: British Comedy Guide trivia",
      "BBC comedy production history",
      "Early programme era: 1972 pilot",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36172",
    "category": "Television",
    "question": "On which floor of Grace Brothers are the two main clothing departments usually located in Are You Being Served??",
    "answers": [
      "The fourth floor",
      "The ground floor",
      "The second floor",
      "The seventh floor"
    ],
    "correctAnswer": "The fourth floor",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Pilot and beginnings",
      "Specific fact: Shop floor setting",
      "Historical or episode context: Ladies and men's ready-to-wear departments",
      "Correct answer: The fourth floor",
      "Research source: British Comedy Guide trivia",
      "BBC comedy production history",
      "Early programme era: 1972 pilot",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36173",
    "category": "Television",
    "question": "In which picture format did the surviving 1972 pilot of Are You Being Served? originally remain after its colour videotape was lost?",
    "answers": [
      "Colour 35mm cinema film",
      "Black-and-white film recording",
      "Digital high-definition video",
      "An animated recreation"
    ],
    "correctAnswer": "Black-and-white film recording",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Pilot production",
      "Specific fact: Recovered pilot format",
      "Historical or episode context: Original colour videotape wiped",
      "Correct answer: Black-and-white film recording",
      "Research source: British Comedy Guide pilot notes",
      "BBC comedy production history",
      "Early programme era: 1972 pilot",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36174",
    "category": "Television",
    "question": "In which year was innovative colour restoration completed for the lost-colour pilot of Are You Being Served??",
    "answers": [
      "1976",
      "1995",
      "2008",
      "2020"
    ],
    "correctAnswer": "2008",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Pilot production",
      "Specific fact: Recovery of original colours",
      "Historical or episode context: Digital restoration of film recording",
      "Correct answer: 2008",
      "Research source: British Comedy Guide pilot notes",
      "BBC comedy production history",
      "Early programme era: 1972 pilot",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36175",
    "category": "Television",
    "question": "On which BBC channel was the restored-colour Are You Being Served? pilot first rebroadcast on New Year's Day 2010?",
    "answers": [
      "BBC One",
      "BBC Four",
      "BBC Three",
      "BBC Two"
    ],
    "correctAnswer": "BBC Two",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Pilot production",
      "Specific fact: Re-colourised pilot's first screening",
      "Historical or episode context: 1 January 2010 special night",
      "Correct answer: BBC Two",
      "Research source: British Comedy Guide pilot notes",
      "BBC comedy production history",
      "Early programme era: 1972 pilot",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36176",
    "category": "Television",
    "question": "Who directed the original 1972 pilot of Are You Being Served??",
    "answers": [
      "David Croft",
      "Harold Snoad",
      "Ray Butt",
      "Bernard Thompson"
    ],
    "correctAnswer": "David Croft",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Pilot production",
      "Specific fact: Original pilot director",
      "Historical or episode context: Programme co-creator's production role",
      "Correct answer: David Croft",
      "Research source: British Comedy Guide pilot credits",
      "BBC comedy production history",
      "Early programme era: 1972 pilot",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36177",
    "category": "Television",
    "question": "Which future Dad's Army radio-script adaptor has a customer cameo in the Are You Being Served? pilot?",
    "answers": [
      "Harold Snoad",
      "Michael Knowles",
      "John Chapman",
      "John Ringham"
    ],
    "correctAnswer": "Michael Knowles",
    "difficulty": "Hard",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Pilot guest cast",
      "Specific fact: Guest performer in original pilot",
      "Historical or episode context: Michael Knowles early cameo",
      "Correct answer: Michael Knowles",
      "Research source: British Comedy Guide pilot credits",
      "BBC comedy production history",
      "Early programme era: 1972 pilot",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36178",
    "category": "Television",
    "question": "What natural hair colour does Mrs Slocombe have in the original pilot of Are You Being Served??",
    "answers": [
      "Bright pink hair",
      "Jet-black hair",
      "Greying golden hair",
      "Electric blue hair"
    ],
    "correctAnswer": "Greying golden hair",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Pilot continuity",
      "Specific fact: Appearance before frequent dye changes",
      "Historical or episode context: Mollie Sugden pilot costume",
      "Correct answer: Greying golden hair",
      "Research source: British Comedy Guide pilot notes",
      "BBC comedy production history",
      "Early programme era: 1972 pilot",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36179",
    "category": "Television",
    "question": "Which first name is given to Mr Lucas in some early episodes of Are You Being Served?, before Dick became the established name?",
    "answers": [
      "Percival",
      "Stephen",
      "Ernest",
      "James"
    ],
    "correctAnswer": "James",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Early character details",
      "Specific fact: Changing character name in early scripts",
      "Historical or episode context: Mr Lucas continuity detail",
      "Correct answer: James",
      "Research source: British Comedy Guide trivia",
      "BBC comedy production history",
      "Early programme era: 1972 pilot",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36180",
    "category": "Television",
    "question": "Which alternative spelling of Mr Humphries' surname appears in the Are You Being Served? episode Diamonds Are a Man's Best Friend?",
    "answers": [
      "Humphreys",
      "Humphry",
      "Humfries",
      "Humpherson"
    ],
    "correctAnswer": "Humphreys",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Series 1 continuity",
      "Specific fact: Early-series spelling inconsistency",
      "Historical or episode context: First-season credits",
      "Correct answer: Humphreys",
      "Research source: British Comedy Guide trivia",
      "BBC comedy production history",
      "Early programme era: 1973 Series 1",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36181",
    "category": "Television",
    "question": "What is the name of Joanna Lumley's perfume-selling character in the Are You Being Served? episode His and Hers?",
    "answers": [
      "Miss Thorpe",
      "Miss French",
      "Miss Bakewell",
      "Miss Brahms"
    ],
    "correctAnswer": "Miss French",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Series 1 His and Hers",
      "Specific fact: Visiting perfume salesperson's character name",
      "Historical or episode context: Joanna Lumley 1973 guest role",
      "Correct answer: Miss French",
      "Research source: British Comedy Guide episode cast",
      "BBC comedy production history",
      "Early programme era: 1973 Series 1",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36182",
    "category": "Television",
    "question": "Who directed the Are You Being Served? episode His and Hers featuring Joanna Lumley?",
    "answers": [
      "David Croft",
      "Ray Butt",
      "Bernard Thompson",
      "Harold Snoad"
    ],
    "correctAnswer": "Bernard Thompson",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Series 1 His and Hers",
      "Specific fact: 1973 episode directing credit",
      "Historical or episode context: Series-one production",
      "Correct answer: Bernard Thompson",
      "Research source: British Comedy Guide episode cast and crew",
      "BBC comedy production history",
      "Early programme era: 1973 Series 1",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36183",
    "category": "Television",
    "question": "Who plays the owner of the missing diamond in the Are You Being Served? episode Diamonds Are a Man's Best Friend?",
    "answers": [
      "Joanna Lumley",
      "Moira Foot",
      "Pearl Hackney",
      "Hilary Pritchard"
    ],
    "correctAnswer": "Hilary Pritchard",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Series 1 Diamonds Are a Man's Best Friend",
      "Specific fact: Diamond owner's guest performer",
      "Historical or episode context: 1973 fifth episode",
      "Correct answer: Hilary Pritchard",
      "Research source: British Comedy Guide episode cast",
      "BBC comedy production history",
      "Early programme era: 1973 Series 1",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36184",
    "category": "Television",
    "question": "Which actress plays Mr Grainger's wife in the Are You Being Served? episode The Clock?",
    "answers": [
      "Pearl Hackney",
      "Doremy Vernon",
      "Mavis Pugh",
      "Hilda Fenemore"
    ],
    "correctAnswer": "Pearl Hackney",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Series 2 The Clock",
      "Specific fact: Mrs Grainger supporting role",
      "Historical or episode context: First episode of second series",
      "Correct answer: Pearl Hackney",
      "Research source: British Comedy Guide episode cast",
      "BBC comedy production history",
      "Early programme era: 1974 Series 2",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36185",
    "category": "Television",
    "question": "Who directed all five episodes of Are You Being Served? Series 2 in 1974?",
    "answers": [
      "David Croft",
      "Harold Snoad",
      "Ray Butt",
      "Bob Spiers"
    ],
    "correctAnswer": "Harold Snoad",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Series 2 production",
      "Specific fact: Director of 1974 run",
      "Historical or episode context: Second-series production leadership",
      "Correct answer: Harold Snoad",
      "Research source: British Comedy Guide full crew credits",
      "BBC comedy production history",
      "Early programme era: 1974 Series 2",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36186",
    "category": "Television",
    "question": "Who was production designer for the 1974 second series of Are You Being Served??",
    "answers": [
      "James Bould",
      "Rochelle Selwyn",
      "Nigel Curzon",
      "Gloria Clayton"
    ],
    "correctAnswer": "Nigel Curzon",
    "difficulty": "Hard",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Series 2 production",
      "Specific fact: Series-two set design",
      "Historical or episode context: 1974 production team",
      "Correct answer: Nigel Curzon",
      "Research source: British Comedy Guide full crew credits",
      "BBC comedy production history",
      "Early programme era: 1974 Series 2",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36187",
    "category": "Television",
    "question": "Which production designer worked on the 1975 third series of Are You Being Served??",
    "answers": [
      "Nigel Curzon",
      "James Bould",
      "Paul Munting",
      "Rochelle Selwyn"
    ],
    "correctAnswer": "Rochelle Selwyn",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Series 3 production",
      "Specific fact: Series-three production designer",
      "Historical or episode context: 1975 studio sets",
      "Correct answer: Rochelle Selwyn",
      "Research source: British Comedy Guide full crew credits",
      "BBC comedy production history",
      "Early programme era: 1975 Series 3",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36188",
    "category": "Television",
    "question": "Which director was credited across most of the 1975 third series of Are You Being Served??",
    "answers": [
      "Ray Butt",
      "Harold Snoad",
      "Martin Shardlow",
      "Bernard Thompson"
    ],
    "correctAnswer": "Ray Butt",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Series 3 production",
      "Specific fact: Third-series directing team",
      "Historical or episode context: 1975 episodes and Christmas special",
      "Correct answer: Ray Butt",
      "Research source: British Comedy Guide full crew credits",
      "BBC comedy production history",
      "Early programme era: 1975 Series 3",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36189",
    "category": "Television",
    "question": "Which Grace Brothers employee is the first victim of tighter break monitoring in Are You Being Served?'s Coffee Morning?",
    "answers": [
      "Miss Brahms",
      "Mr Grainger",
      "Mr Mash",
      "Young Mr Grace"
    ],
    "correctAnswer": "Mr Grainger",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Series 3 Coffee Morning",
      "Specific fact: Break-time crackdown",
      "Historical or episode context: Captain Peacock's new rules",
      "Correct answer: Mr Grainger",
      "Research source: David Croft episode synopsis",
      "BBC comedy production history",
      "Early programme era: 1975 Series 3",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36190",
    "category": "Television",
    "question": "By how much is the other staff's lunch break moved after Peacock's promotion in Are You Being Served?'s Up Captain Peacock?",
    "answers": [
      "Ten minutes",
      "Half a day",
      "One hour",
      "Two hours"
    ],
    "correctAnswer": "One hour",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Series 3 Up Captain Peacock",
      "Specific fact: Changed lunch arrangements",
      "Historical or episode context: Captain Peacock executive privileges",
      "Correct answer: One hour",
      "Research source: British Comedy Guide series-three synopsis",
      "BBC comedy production history",
      "Early programme era: 1975 Series 3",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36191",
    "category": "Television",
    "question": "Which future Absolutely Fabulous actress returns to Are You Being Served? as a German customer's wife in German Week?",
    "answers": [
      "Jennifer Saunders",
      "Jane Horrocks",
      "Julia Sawalha",
      "Joanna Lumley"
    ],
    "correctAnswer": "Joanna Lumley",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Series 3 German Week",
      "Specific fact: 1975 German customer spouse cameo",
      "Historical or episode context: Second guest appearance after His and Hers",
      "Correct answer: Joanna Lumley",
      "Research source: British Comedy Guide German Week cast",
      "BBC comedy production history",
      "Early programme era: 1975 Series 3",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36192",
    "category": "Television",
    "question": "Which actress plays Miss Thorpe in the Are You Being Served? episode German Week?",
    "answers": [
      "Moira Foot",
      "Joanna Lumley",
      "Diana King",
      "Doremy Vernon"
    ],
    "correctAnswer": "Moira Foot",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Series 3 German Week",
      "Specific fact: Miss Thorpe guest actor",
      "Historical or episode context: 1975 sales-promotion storyline",
      "Correct answer: Moira Foot",
      "Research source: British Comedy Guide German Week cast",
      "BBC comedy production history",
      "Early programme era: 1975 Series 3",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36193",
    "category": "Television",
    "question": "What historical fashion period do the staff consider as a store theme in Are You Being Served?'s New Look?",
    "answers": [
      "The Victorian era",
      "The Roaring Twenties",
      "The Swinging Sixties",
      "The Edwardian era"
    ],
    "correctAnswer": "The Roaring Twenties",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: Series 3 New Look",
      "Specific fact: Historic-store theme proposal",
      "Historical or episode context: 1975 marketing brainstorm",
      "Correct answer: The Roaring Twenties",
      "Research source: David Croft original episode guide",
      "BBC comedy production history",
      "Early programme era: 1975 Series 3",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36194",
    "category": "Television",
    "question": "Which writer teamed with Jeremy Lloyd instead of David Croft to script Are You Being Served?'s Christmas Crackers?",
    "answers": [
      "Ray Galton",
      "Alan Simpson",
      "John Chapman",
      "Jimmy Perry"
    ],
    "correctAnswer": "John Chapman",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: 1975 Christmas Crackers",
      "Specific fact: Unusual 1975 festive writing credit",
      "Historical or episode context: Christmas Crackers special",
      "Correct answer: John Chapman",
      "Research source: British Comedy Guide Christmas cast and crew",
      "BBC comedy production history",
      "Early programme era: 1975 Christmas",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36195",
    "category": "Television",
    "question": "Who plays Grace Brothers canteen manageress Diana in Are You Being Served?'s Christmas Crackers?",
    "answers": [
      "Joanna Lumley",
      "Pearl Hackney",
      "Moira Foot",
      "Doremy Vernon"
    ],
    "correctAnswer": "Doremy Vernon",
    "difficulty": "Hard",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: 1975 Christmas Crackers",
      "Specific fact: Canteen manageress casting",
      "Historical or episode context: 1975 Christmas special",
      "Correct answer: Doremy Vernon",
      "Research source: British Comedy Guide Christmas cast",
      "BBC comedy production history",
      "Early programme era: 1975 Christmas",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36196",
    "category": "Television",
    "question": "Who was production designer for the Are You Being Served? Christmas special Christmas Crackers?",
    "answers": [
      "Gloria Clayton",
      "Rochelle Selwyn",
      "Nigel Curzon",
      "James Bould"
    ],
    "correctAnswer": "Gloria Clayton",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: 1975 Christmas Crackers",
      "Specific fact: Christmas 1975 studio design",
      "Historical or episode context: Festive store decorations",
      "Correct answer: Gloria Clayton",
      "Research source: British Comedy Guide Christmas crew",
      "BBC comedy production history",
      "Early programme era: 1975 Christmas",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36197",
    "category": "Television",
    "question": "On which date did the first Are You Being Served? Christmas special Christmas Crackers air?",
    "answers": [
      "25 December 1974",
      "22 December 1975",
      "24 December 1976",
      "1 January 1975"
    ],
    "correctAnswer": "22 December 1975",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "BBC One",
      "British Sitcom",
      "British Television",
      "Grace Brothers",
      "1970s television",
      "Workplace Comedy",
      "Jeremy Lloyd and David Croft",
      "Classic BBC programme",
      "Section: 1975 Christmas Crackers",
      "Specific fact: First Christmas special broadcast",
      "Historical or episode context: Monday BBC One screening",
      "Correct answer: 22 December 1975",
      "Research source: British Comedy Guide Christmas details",
      "BBC comedy production history",
      "Early programme era: 1975 Christmas",
      "Original cast and crew",
      "Department-store setting",
      "Programme audit November 2026",
      "British broadcasting"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==116 ||
 new Set(questions.map(q=>q.id)).size!==questions.length ||
 new Set(questions.map(q=>q.question.trim().toLowerCase())).size!==questions.length ||
 questions.some(q=>q.answers.length!==4||
  new Set(q.answers.map(a=>a.trim().toLowerCase())).size!==4||
  q.answers.filter(a=>a===q.correctAnswer).length!==1||
  q.tags.length<15||!q.tags.includes('Are You Being Served?')||q.dailyEligible!==true) ||
 auditAdditions.some(q=>q.tags.length<18||!q.question.includes('Are You Being Served?')))
 throw Error('Pack 311 audit checks failed');

module.exports = questions;
