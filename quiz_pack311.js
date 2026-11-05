
// quiz_pack311.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Are You Being Served? - pilot and Series 1-3 (1972-1975)
// The original Grace Brothers staff, early episodes and 1975 Christmas special.
// Seven individually selected specialist tags per question.
// Keep quiz_bank.js unchanged until the agreed end-of-evening connection.
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

module.exports = questions;
