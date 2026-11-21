// quiz_pack314.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Are You Being Served? - Series 9-10 (1983-1985), plus 2016 revival
// The final original Grace Brothers stories and the later one-off with a new cast.
// Seven individually selected specialist tags per question.
// Already connected by quiz_bank.js (active pack range 1–558).
// Row: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven tags

const groups = [
  {
    topic: 'Series Nine: the return to Grace Brothers in 1983',
    era: '1983',
    facts: `In which year did Series Nine of Are You Being Served? first air?|1983|1981|1984|1985|Easy|Series Nine|Original Broadcast|BBC One|Early Eighties|Broadcast Year|Programme Chronology|British Comedy
How many episodes are in the ninth series?|Six|Five|Seven|Eight|Medium|Six Episodes|Series Nine|Episode Count|1983 Schedule|BBC Broadcast|Short Series|Sitcom Format
Which episode opens the ninth series?|The Sweet Smell of Success|Conduct Unbecoming|Monkey Business|Lost and Found|Medium|Series Nine Premiere|The Sweet Smell Of Success|Opening Episode|22 April 1983|Episode Title|Broadcast Order|BBC One
Which episode is the Series Nine finale?|Lost and Found|Monkey Business|Memories Are Made of This|Calling All Customers|Medium|Series Nine Finale|Lost And Found|Final Episode|27 May 1983|Episode Title|Broadcast Order|Tiddles
Which regular junior menswear salesman is played by Mike Berry in the final two series?|Mr Spooner|Mr Lucas|Mr Goldberg|Mr Klein|Easy|Mike Berry|Bert Spooner|Junior Salesman|Menswear Department|1983 Cast|1985 Cast|Character Identity
Which maintenance worker is still played by Arthur English in Series Nine?|Mr Harman|Mr Mash|Mr Tebbs|Mr Goldberg|Easy|Arthur English|Mr Harman|Maintenance Staff|Series Nine Cast|Original Show|1983 Episodes|Character Identity`,
  },
  {
    topic: 'The Sweet Smell of Success: an unlikely perfume business',
    era: '1983',
    facts: `Who creates a homemade perfume in The Sweet Smell of Success?|Mrs Slocombe|Miss Brahms|Mr Humphries|Mr Spooner|Easy|Betty Slocombe|Homemade Perfume|The Sweet Smell Of Success|Fragrance Making|Ladies Department|1983 Plot|Side Business
What does Mrs Slocombe hope to sell at Grace Brothers without formal permission?|Her own perfume|Knitted scarves|Home-baked cakes|Handmade jewellery|Easy|Homemade Fragrance|Unapproved Sales|Mrs Slocombe|The Sweet Smell Of Success|Shop Counter|1983 Episode|Unofficial Merchandise
What particular effect is Mrs Slocombe's perfume supposed to have?|Attracting the opposite sex|Making customers sleepy|Changing hair colour|Removing fabric stains|Medium|Attraction Perfume|Fragrance Properties|Mrs Slocombe|The Sweet Smell Of Success|1983 Story|Romantic Comedy|Product Claim
Which manager would need convincing before Mrs Slocombe could openly promote her perfume?|Mr Rumbold|Mr Spooner|Mr Harman|Captain Peacock|Medium|Cuthbert Rumbold|Sales Approval|Homemade Perfume|The Sweet Smell Of Success|Management Rules|1983 Plot|Retail Promotion
What is the first episode title of the 1983 series?|The Sweet Smell of Success|Goodbye Mrs Slocombe|The Night Club|The Pop Star|Medium|The Sweet Smell Of Success|Series Nine|1983 Premiere|Episode Name|Fragrance Story|Grace Brothers|Original Run`,
  },
  {
    topic: 'Conduct Unbecoming: Mr Humphries in trouble',
    era: '1983',
    facts: `Who falls out with his mother in Conduct Unbecoming?|Mr Humphries|Mr Spooner|Captain Peacock|Mr Harman|Easy|Wilberforce Humphries|Family Argument|Conduct Unbecoming|Mother And Son|1983 Story|Domestic Dispute|John Inman
What has Mr Humphries been doing unusually often in Conduct Unbecoming?|Arriving late for work|Falling asleep at his counter|Leaving work early|Turning up in fancy dress|Medium|Mr Humphries|Late Arrival|Conduct Unbecoming|Workplace Behaviour|Family Troubles|1983 Episode|Staff Punctuality
What accusation threatens Mr Humphries's job in Conduct Unbecoming?|Theft|Assault|Fraudulent expenses|Damaging stock|Easy|Theft Allegation|Menswear Counter|Conduct Unbecoming|Mr Humphries|1983 Plot|Missing Money|Employment Risk
What goes missing from the men's department in Conduct Unbecoming?|Money|A valuable watch|A customer handbag|A box of ties|Easy|Missing Money|Menswear Till|Conduct Unbecoming|Mr Humphries|Store Investigation|1983 Episode|Suspected Theft
Which episode sees Mr Humphries investigated after cash disappears?|Conduct Unbecoming|Calling All Customers|The Hold Up|Lost and Found|Medium|Conduct Unbecoming|Episode Identification|Cash Disappearance|Mr Humphries|1983 Story|Disciplinary Hearing|Sales Department`,
  },
  {
    topic: 'Memories Are Made of This: a childhood regression',
    era: '1983',
    facts: `Who loses her memory in Memories Are Made of This?|Mrs Slocombe|Miss Brahms|Mrs Peacock|Miss Belfridge|Easy|Betty Slocombe|Memory Loss|Memories Are Made Of This|1983 Plot|Ladies Saleswoman|Accident|Mollie Sugden
What object accidentally strikes Mrs Slocombe in Memories Are Made of This?|A golf ball|A cricket ball|A football|A tennis ball|Easy|Golf Ball|Head Injury|Mrs Slocombe|Memories Are Made Of This|Sports Goods|1983 Episode|Store Accident
Which department is temporarily relocated beside the clothing counters in Memories Are Made of This?|The sports department|The furniture department|The electrical department|The toy department|Easy|Sports Department|Temporary Relocation|Memories Are Made Of This|Retail Reorganisation|1983 Story|Golf Equipment|Shared Shop Floor
How does Mrs Slocombe behave after her accident?|Like a schoolgirl|Like a toddler|Like a stern headmistress|Like a television presenter|Medium|Childhood Regression|Mrs Slocombe|Memories Are Made Of This|Schoolgirl Behaviour|Amnesia|1983 Plot|Comic Personality Shift
What item associated with sport causes the mishap in the third episode of Series Nine?|A golf ball|A skipping rope|A dumbbell|A hockey stick|Medium|Golfing Accident|Sports Equipment|Series Nine Episode Three|Memories Are Made Of This|Mrs Slocombe|1983 Story|Stray Ball`,
  },
  {
    topic: 'Calling All Customers: advertising over the airwaves',
    era: '1983',
    facts: `What communication system do the staff use for advertising in Calling All Customers?|CB radio|Telephone hotlines|Local television|An amateur radio satellite|Easy|CB Radio|Calling All Customers|Store Advertising|1983 Episode|Broadcast Promotion|Radio Drama|Customer Outreach
What kind of entertainment do the employees broadcast in Calling All Customers?|A radio play|A cooking programme|A live football commentary|A news bulletin|Easy|Radio Play|CB Broadcast|Calling All Customers|Staff Acting|1983 Plot|Amateur Performance|Marketing Scheme
What is the staff's main aim in Calling All Customers?|Attracting more shoppers|Raising money for a charity|Finding a missing pet|Advertising a staff holiday|Easy|Increase Shoppers|Retail Promotion|Calling All Customers|Sales Campaign|1983 Story|Customer Recruitment|Shop Publicity
Which episode features the Grace Brothers team performing over CB radio?|Calling All Customers|Monkey Business|The Pop Star|The Night Club|Medium|Calling All Customers|CB Radio Drama|Episode Identification|Series Nine|1983 Transmission|Promotional Performance|Staff Theatre
What does CB stand for in the radio technology used by the staff?|Citizens band|Central broadcast|Commercial bandwidth|Company bulletin|Medium|Citizens Band|CB Radio|Communication Technology|Calling All Customers|1980s Culture|Radio Terms|Public Airwaves`,
  },
  {
    topic: 'Monkey Business: a threatened takeover',
    era: '1983',
    facts: `Which country is associated with a possible takeover of Grace Brothers in Monkey Business?|Japan|France|Germany|Canada|Easy|Japanese Takeover|Monkey Business|International Business|1983 Episode|Company Ownership|Retail Acquisition|Staff Concerns
What workplace complaint troubles the staff before the takeover rumours in Monkey Business?|They are denied a pay rise|They must work on Sundays|They are losing their uniforms|Their staff discount is cancelled|Easy|Refused Pay Rise|Monkey Business|Employee Pay|1983 Story|Wage Dispute|Store Management|Staff Morale
To which London address do the employees take their complaints in Monkey Business?|10 Downing Street|Buckingham Palace|Scotland Yard|The Royal Albert Hall|Easy|Number Ten|Downing Street|Monkey Business|Government Protest|1983 Episode|Prime Minister|London Landmark
Whose official residence do the staff visit during Monkey Business?|The Prime Minister's|The Lord Mayor's|The Archbishop of Canterbury's|The monarch's|Easy|Prime Minister|Official Residence|Monkey Business|Political Protest|1983 Plot|Number Ten|UK Government
Which Prime Minister held office when Series Nine was broadcast in 1983?|Margaret Thatcher|John Major|James Callaghan|Harold Wilson|Medium|Margaret Thatcher|1983 Prime Minister|Monkey Business|Political Context|UK History|Conservative Government|Downing Street
Which episode features staff worries about Japanese ownership of Grace Brothers?|Monkey Business|Take-Over|The Agent|Heir Apparent|Medium|Monkey Business|Japanese Bid|Episode Title|Series Nine|1983 Story|Corporate Ownership|Shop Staff`,
  },
  {
    topic: 'Lost and Found: Mrs Slocombe and Tiddles',
    era: '1983',
    facts: `Which of Mrs Slocombe's pets goes missing in Lost and Found?|Tiddles|Felix|Mittens|Smudge|Easy|Tiddles|Missing Cat|Lost And Found|Betty Slocombe|1983 Finale|Pet Search|Mollie Sugden
What animal do colleagues buy to comfort Mrs Slocombe in Lost and Found?|A kitten|A puppy|A rabbit|A budgerigar|Easy|Gift Kitten|Mrs Slocombe|Lost And Found|Missing Pet|Colleague Kindness|1983 Episode|Cat Replacement
How does Mrs Slocombe feel when Tiddles disappears?|Distraught|Delighted|Completely indifferent|Angry with the cat|Easy|Pet Loss|Distressed Owner|Mrs Slocombe|Lost And Found|Tiddles|1983 Story|Character Emotion
Which colleague's comforting behaviour does Mrs Slocombe mistake for romantic interest?|Mr Humphries|Mr Spooner|Mr Harman|Mr Rumbold|Medium|Wilberforce Humphries|Betty Slocombe|Misread Affection|Lost And Found|1983 Plot|Comforting Gesture|Romantic Misunderstanding
Which episode concludes the ninth series with a missing-cat storyline?|Lost and Found|Memories Are Made of This|Conduct Unbecoming|The Sweet Smell of Success|Medium|Lost And Found|Series Nine Finale|Episode Identification|Tiddles|27 May 1983|Cat Search|Final Episode`,
  },
  {
    topic: 'Series Ten: the last original episodes',
    era: '1985',
    facts: `In which year did the tenth and final original series of Are You Being Served? air?|1985|1983|1984|1987|Easy|1985 Broadcast|Series Ten|Final Original Run|BBC One|Broadcast Year|Programme History|British Sitcom
How many episodes are in the tenth series?|Seven|Five|Six|Eight|Medium|Seven Episodes|Series Ten|Final Series|Episode Count|1985 Schedule|BBC One|Sitcom Format
Which episode begins the tenth series?|Goodbye Mrs Slocombe|Grounds for Divorce|The Hold Up|The Pop Star|Medium|Goodbye Mrs Slocombe|Series Ten Premiere|18 February 1985|Episode Order|Retirement Story|Original BBC Run|First Episode
Which episode ends the original television run?|The Pop Star|The Night Club|Friends and Neighbours|Gambling Fever|Easy|The Pop Star|Series Finale|1 April 1985|Final Original Episode|Mr Spooner|Closing Story|Broadcast Order
Which actor plays the singing Mr Spooner in the final original episode?|Mike Berry|John Inman|Trevor Bannister|Alfie Bass|Easy|Mike Berry|Bert Spooner|The Pop Star|Menswear Junior|Singing Salesman|1985 Cast|Musician Actor`,
  },
  {
    topic: 'Goodbye Mrs Slocombe: enforced retirement',
    era: '1985',
    facts: `Which employee faces compulsory retirement in Goodbye Mrs Slocombe?|Mrs Slocombe|Miss Brahms|Mr Humphries|Captain Peacock|Easy|Betty Slocombe|Compulsory Retirement|Goodbye Mrs Slocombe|Age Rule|1985 Premiere|Senior Saleswoman|Job Threat
Why is Mrs Slocombe told she cannot continue in her usual job?|Her age makes her eligible for enforced retirement|She loses a valuable customer order|She refuses to wear her uniform|She has been offered a job abroad|Easy|Retirement Age|Betty Slocombe|Goodbye Mrs Slocombe|Staff Policy|1985 Episode|Older Employees|Employment Rules
Which department supplies Mrs Slocombe's unpopular replacement?|Toiletries|Footwear|Furniture|Books and Stationery|Medium|Toiletries Department|Replacement Saleswoman|Goodbye Mrs Slocombe|Store Transfer|1985 Plot|Ladies Counter|Staffing Change
What is the surname of Mrs Slocombe's replacement?|Featherstone|Bagnold|Bakewell|Belfridge|Medium|Miss Featherstone|New Saleswoman|Goodbye Mrs Slocombe|Replacement Character|Toiletries|1985 Story|Ladies Department
What do Mrs Slocombe's colleagues try to do to her replacement?|Drive her away from the department|Promote her to manager|Send her to the film studio|Persuade her to organise a strike|Medium|Unwelcome Replacement|Miss Featherstone|Goodbye Mrs Slocombe|Staff Loyalty|Colleague Plot|1985 Episode|Workplace Tactics
How does Mrs Slocombe try to remain at Grace Brothers after losing her sales job?|She takes other lower-paid store jobs|She buys the store|She disguises herself as a customer|She transfers to a rival chain|Medium|Alternative Store Jobs|Betty Slocombe|Goodbye Mrs Slocombe|Employment Survival|Mr Rumbold|1985 Plot|Low Paid Work`,
  },
  {
    topic: 'Grounds for Divorce: Captain Peacock faces a dilemma',
    era: '1985',
    facts: `Whose romantic troubles feature in Grounds for Divorce?|Captain Peacock's|Mr Humphries's|Mr Spooner's|Mr Harman's|Easy|Stephen Peacock|Marriage Trouble|Grounds For Divorce|1985 Episode|Staff Gossip|Extramarital Affair|Frank Thornton
What is the surname of the woman involved with Captain Peacock in Grounds for Divorce?|Bagnold|Featherstone|Belfridge|Bakewell|Medium|Miss Bagnold|Captain Peacock|Grounds For Divorce|Romantic Interest|1985 Story|Affair|Character Name
Which department does Miss Bagnold join to stay near Captain Peacock?|Accounts|Menswear|The canteen|Sportswear|Medium|Accounts Department|Miss Bagnold|Captain Peacock|Grounds For Divorce|Workplace Transfer|1985 Plot|Office Staff
What does Captain Peacock's wife refuse to grant him in Grounds for Divorce?|A divorce|A holiday|A loan|A new car|Easy|Divorce Refusal|Mrs Peacock|Captain Peacock|Grounds For Divorce|Marriage Crisis|1985 Episode|Family Dispute
Which episode follows Captain Peacock's difficult choice between his wife and another woman?|Grounds for Divorce|Friends and Neighbours|The Hold Up|The Night Club|Medium|Grounds For Divorce|Romantic Dilemma|Episode Identification|Peacock Marriage|Miss Bagnold|1985 Story|Staff Scandal`,
  },
  {
    topic: 'The Hold Up: a prank and a real robbery',
    era: '1985',
    facts: `What crime interrupts a late-night stocktake in The Hold Up?|A robbery|Arson|Forgery|Kidnapping|Easy|Real Robbery|Stocktaking Night|The Hold Up|Store Crime|1985 Episode|Intruders|Grace Brothers
What is the staff's traditional amusement during the stocktaking shift?|Playing practical jokes|Holding a karaoke contest|Running a raffle|Staging a fashion parade|Medium|Practical Jokes|Stocktaking|The Hold Up|Night Shift|Staff Tradition|1985 Story|Retail Inventory
Why does Mr Rumbold initially dismiss the robbery warning?|He thinks it is another practical joke|He has lost his telephone|He is abroad|He cannot hear the alarm|Easy|Mr Rumbold|False Alarm Assumption|The Hold Up|Stocktaking Pranks|1985 Plot|Robbery Report|Misunderstanding
When does the robbery take place in The Hold Up?|During an evening stocktake|During the Sunday opening|At a Christmas banquet|During a staff holiday|Easy|After Hours|Inventory Check|The Hold Up|Crime Timing|1985 Story|Store Security|Night Shift
What do the shop employees decide to do when burglars arrive in The Hold Up?|Try to catch them|Abandon the building permanently|Hold a board meeting|Ignore them until morning|Medium|Capture Burglars|Staff Cooperation|The Hold Up|Shop Robbery|1985 Episode|Improvised Defence|Workplace Courage`,
  },
  {
    topic: 'Gambling Fever: a horse-racing gamble',
    era: '1985',
    facts: `Which sport attracts the staff's bets in Gambling Fever?|Horse racing|Greyhound racing|Football|Boxing|Easy|Horse Racing|Gambling Fever|Staff Betting|1985 Episode|Sporting Wager|Racecourse|Betting Slip
Who encourages the staff to back a supposedly certain winner in Gambling Fever?|Mr Harman|Mr Rumbold|Miss Brahms|Captain Peacock|Medium|Mr Harman|Racing Tip|Gambling Fever|Confident Prediction|1985 Plot|Shop Staff|Bets
What money do staff risk on the horse in Gambling Fever?|Their overdue bonuses|The Christmas charity collection|Young Mr Grace's inheritance|The canteen's takings|Medium|Staff Bonuses|Racing Wager|Gambling Fever|Extra Income|1985 Story|Betting Pool|Store Employees
What technology helps the staff follow a race during Gambling Fever?|Closed-circuit television|A telephone answering service|A satellite navigation unit|A pager network|Easy|CCTV System|Horse Race|Gambling Fever|Staff Surveillance|1985 Episode|Remote Viewing|Shop Security Cameras
Which employee mimes horse-racing action to colleagues in Gambling Fever?|Mr Humphries|Mr Spooner|Mr Rumbold|Captain Peacock|Medium|Wilberforce Humphries|Race Mime|Gambling Fever|CCTV Performance|John Inman|1985 Plot|Race Commentary`,
  },
  {
    topic: 'The Night Club: using Grace Brothers after hours',
    era: '1985',
    facts: `What after-hours business do employees propose in The Night Club?|A nightclub|A cinema|A gymnasium|A bowling alley|Easy|Staff Nightclub|The Night Club|After Hours Enterprise|1985 Episode|New Business|Store Floor|Evening Entertainment
Who permits the sales staff to use the shop floor for evening business in The Night Club?|Mr Grace|Captain Peacock|Mr Spooner|Mr Harman|Easy|Old Mr Grace|Store Owner|The Night Club|Evening Permission|1985 Story|Business Approval|Grace Brothers
Where do staff hope to screen their nightclub advertisement?|A local cinema|A football stadium|A railway station|A theatre foyer|Medium|Local Cinema|Nightclub Advertisement|The Night Club|Retail Promotion|1985 Plot|Film Screening|Publicity Plan
What medium do the employees produce to advertise their new club?|A filmed commercial|A radio soap opera|A glossy magazine|A newspaper supplement|Easy|Cinema Advert|Film Production|The Night Club|Store Enterprise|1985 Episode|Promotional Video|Staff Acting
Which episode has the employees trying to attract customers to an evening entertainment venue?|The Night Club|Calling All Customers|It Pays to Advertise|The Think Tank|Medium|The Night Club|Nightlife Business|Episode Identification|Series Ten|Film Advert|1985 Story|Store Income`,
  },
  {
    topic: 'Friends and Neighbours: living together at the store',
    era: '1985',
    facts: `What rising expense leads the staff to complain in Friends and Neighbours?|Travel costs|Uniform cleaning costs|Lunch prices|Staff insurance payments|Easy|Travel Costs|Commuting|Friends And Neighbours|1985 Episode|Household Budget|Staff Concerns|Transport Expenses
What does Mr Grace offer to reduce employees' commuting expenses?|Apartments on the store's top floor|Free bus season tickets|A company minibus|A pay rise for every employee|Easy|Top Floor Apartments|Mr Grace|Friends And Neighbours|Employee Housing|1985 Story|Accommodation Offer|Store Facilities
Where are the offered apartments located in Friends and Neighbours?|Above the shop floor|Behind the loading bay|In a nearby hotel|Opposite the bus station|Medium|Store Upper Floor|Staff Flats|Friends And Neighbours|Living Quarters|1985 Plot|Retail Building|Residential Space
What problem quickly develops when the employees become neighbours?|They struggle to live together harmoniously|They cannot find the building|The flats are sold to customers|They are ordered to work night shifts|Easy|Flatmate Arguments|Friends And Neighbours|Shared Living|1985 Episode|Staff Friction|Home Life|Neighbour Disputes
Which episode explores whether colleagues also make good flatmates?|Friends and Neighbours|The Apartment|The Club|Hoorah for the Holidays|Medium|Friends And Neighbours|Flat Sharing|Episode Identification|Series Ten|1985 Story|Workplace Relationships|Top Floor Housing`,
  },
  {
    topic: 'The Pop Star: the original series farewell',
    era: '1985 finale',
    facts: `Which character is offered a recording opportunity in The Pop Star?|Mr Spooner|Mr Humphries|Captain Peacock|Mr Rumbold|Easy|Bert Spooner|Record Deal|The Pop Star|1985 Finale|Mike Berry|Music Industry|Singer
What talent earns Mr Spooner attention in The Pop Star?|Singing|Tap dancing|Painting|Stand-up comedy|Easy|Singing Talent|Bert Spooner|The Pop Star|Local Review|1985 Story|Music Performance|Career Chance
Who offers Mr Spooner his chance at a new career in The Pop Star?|A record producer|A theatre manager|A television newsreader|A sports coach|Easy|Record Producer|Music Contract|Bert Spooner|The Pop Star|1985 Episode|Entertainment Career|Professional Interest
What do other Grace Brothers employees want to become for Mr Spooner?|Backing singers|Tour managers|Sound engineers|Costume designers|Easy|Backing Singers|Staff Participation|The Pop Star|Bert Spooner|1985 Finale|Musical Group|Ensemble Performance
What sort of review helps launch Mr Spooner's musical opportunity?|A favourable newspaper review|A radio weather forecast|A restaurant review|A school examination report|Medium|Newspaper Review|Singing Performance|The Pop Star|Music Critic|1985 Plot|Publicity|Career Break
On what date was the final original episode first broadcast?|1 April 1985|1 January 1985|25 December 1984|18 February 1986|Medium|1 April 1985|The Pop Star|Final Broadcast|Series Ten|BBC One|Programme End|British Television
Which programme's original ten-series run concludes with The Pop Star?|Are You Being Served?|Grace and Favour|Open All Hours|Hi-de-Hi!|Easy|Are You Being Served|The Pop Star|1985 Series Finale|Grace Brothers|Sitcom Conclusion|Original Programme|BBC Comedy`,
  },
  {
    topic: '2016 one-off revival: a new cast at Grace Brothers',
    era: '2016 revival',
    facts: `In which year did BBC One broadcast a one-off revival of Are You Being Served?|2016|2006|2011|2020|Easy|2016 Revival|BBC One|One Off Episode|Sitcom Reunion Concept|Broadcast Year|Reimagined Cast|Modern Production
In which year is the 2016 revival's storyline set?|1988|1972|1995|2016|Medium|1988 Setting|Revival Story|Young Mr Grace|Period Sitcom|Grace Brothers|2016 Production|Late Eighties
Who played Mr Humphries in the 2016 revival?|Jason Watkins|John Inman|Martin Clunes|Russell Tovey|Easy|Jason Watkins|Wilberforce Humphries|2016 Recasting|Original John Inman Role|BBC Revival|Character Actor|Menswear Salesman
Who portrayed Mrs Slocombe in the 2016 revival?|Sherrie Hewson|Mollie Sugden|Alison Steadman|Pauline Quirke|Easy|Sherrie Hewson|Betty Slocombe|2016 Recasting|Original Mollie Sugden Role|BBC Revival|Ladies Department|Character Actress
Which Only Fools and Horses actor played Captain Peacock in the 2016 version?|John Challis|David Jason|Nicholas Lyndhurst|Roger Lloyd-Pack|Easy|John Challis|Captain Peacock|2016 Recasting|Only Fools And Horses|Boycie Actor|Floorwalker|BBC Sitcom
Who played Mr Grainger in the 2016 remake?|Roy Barraclough|Arthur Brough|John Challis|David Neilson|Medium|Roy Barraclough|Ernest Grainger|2016 Cast|Character Revival|Veteran Salesman|Grace Brothers|British Actor
Which actor played Miss Brahms in the 2016 special?|Niky Wardley|Wendy Richard|Jorgie Porter|Sherrie Hewson|Medium|Niky Wardley|Shirley Brahms|2016 Cast|Ladies Assistant|Character Recasting|BBC Comedy|British Actress
Who portrayed Mr Harman in the 2016 revival?|Arthur Smith|Arthur English|Justin Edwards|Jason Watkins|Medium|Arthur Smith|Mr Harman|2016 Cast|Maintenance Worker|Stand Up Comedian|BBC Revival|Character Recasting
Which actor played Mr Rumbold in the 2016 revival?|Justin Edwards|Nicholas Smith|Roy Barraclough|John Challis|Medium|Justin Edwards|Cuthbert Rumbold|2016 Cast|Manager Role|Character Recasting|British Actor|Grace Brothers
Who portrayed Young Mr Grace in the revival?|Mathew Horne|Harold Bennett|Kenneth Waller|James Corden|Medium|Mathew Horne|Young Mr Grace|2016 Cast|Store Owner|Gavin And Stacey Actor|Grace Family|BBC Revival
Which actor played the new employee Mr Conway in the 2016 episode?|Kayode Ewumi|Daniel Kaluuya|Richard Ayoade|Adrian Lester|Medium|Kayode Ewumi|Mr Conway|New Employee|2016 Cast|Revival Character|Grace Brothers|Menswear Counter
Who played Miss Croft in the 2016 revival?|Jorgie Porter|Niky Wardley|Penny Irving|Sherrie Hewson|Easy|Jorgie Porter|Miss Croft|2016 Cast|New Character|Hollyoaks Actress|BBC Sitcom|Office Staff
Which writer scripted the 2016 Are You Being Served? revival?|Derren Litten|Jeremy Lloyd|David Croft|John Sullivan|Medium|Derren Litten|Revival Screenwriter|2016 One Off|Benidorm Creator|Comedy Writing|BBC Production|Script Credit
Which BBC initiative included the 2016 revival?|Landmark Sitcom Season|Comic Relief|Children in Need|The BBC Proms|Medium|Landmark Sitcom Season|2016 Revival|BBC Comedy Celebration|Heritage Programming|One Off Specials|Television Anniversary|Scheduling Event
On which date did the BBC first show the 2016 revival?|28 August 2016|1 April 2016|25 December 2015|28 August 2017|Medium|28 August 2016|Revival Premiere|BBC One|Landmark Sitcom Season|Broadcast Date|2016 Programme|Television Event`,
  },
];

const FIRST_ID = 13915;
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

const EXPECTED_COUNT = 95;
if (questions.length !== EXPECTED_COUNT) {
  throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
}
if (questions[0].id !== 'tv_13915' ||
    questions[questions.length - 1].id !== 'tv_14009') {
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


// 21 November 2026: Are You Being Served? Series 9–10, 2016 revival audit.
// All original IDs tv_13915–tv_14009 preserved; new IDs tv_36256–tv_36285.
// Verified cast, episodes and production history:
// https://www.comedy.co.uk/tv/are_you_being_served/cast_crew/full/
// https://www.comedy.co.uk/tv/are_you_being_served/episodes/9/
// https://www.comedy.co.uk/tv/are_you_being_served/episodes/10/
// https://www.comedy.co.uk/tv/are_you_being_served_2016/cast_crew/
// https://www.comedy.co.uk/tv/are_you_being_served_2016/
// https://www.comedy.co.uk/tv/news/2035/are_you_being_served_2016_cast_watkins_hewson/
// https://www.standard.co.uk/culture/tvfilm/are-you-being-served-2016-reboot-brings-mr-humphries-and-mr-rumbold-back-to-grace-brothers-department-store-a3330841.html
const auditAdditions = [
  {
    "id": "tv_36256",
    "category": "Television",
    "question": "Which actress played Mr Rumbold's glamorous secretary Miss Belfridge in the final two series of Are You Being Served?",
    "answers": [
      "Candy Davis",
      "Penny Irving",
      "Moira Foot",
      "Diana King"
    ],
    "correctAnswer": "Candy Davis",
    "difficulty": "Hard",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 9–10 characters",
      "Precise subject: Miss Belfridge actress",
      "Cast or story context: 1983–1985 department management",
      "Correct answer: Candy Davis",
      "Evidence: BCG full cast",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36257",
    "category": "Television",
    "question": "Which manager's secretary is Miss Belfridge in the final two series of Are You Being Served?",
    "answers": [
      "Captain Peacock",
      "Mr Rumbold",
      "Mr Humphries",
      "Mr Harman"
    ],
    "correctAnswer": "Mr Rumbold",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 9–10 characters",
      "Precise subject: Miss Belfridge reporting line",
      "Cast or story context: Candy Davis recurring role",
      "Correct answer: Mr Rumbold",
      "Evidence: BCG programme episode guide",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36258",
    "category": "Television",
    "question": "Who wrote every episode of the final two original series of Are You Being Served?",
    "answers": [
      "David Croft",
      "John Chapman",
      "Jeremy Lloyd",
      "Michael Knowles"
    ],
    "correctAnswer": "Jeremy Lloyd",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 9–10 writing",
      "Precise subject: Solo screenwriter of final 13 episodes",
      "Cast or story context: 1983 and 1985 television scripts",
      "Correct answer: Jeremy Lloyd",
      "Evidence: BCG full writing credits",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36259",
    "category": "Television",
    "question": "Which director also produced the six episodes of Are You Being Served? Series 9?",
    "answers": [
      "Martin Shardlow",
      "David Croft",
      "John Kilby",
      "Bob Spiers"
    ],
    "correctAnswer": "Bob Spiers",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 9 production",
      "Precise subject: Director and producer",
      "Cast or story context: 1983 production team",
      "Correct answer: Bob Spiers",
      "Evidence: BCG Series 9 crew",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36260",
    "category": "Television",
    "question": "Who was production designer for Are You Being Served? Series 9 in 1983?",
    "answers": [
      "John Stout",
      "Bernard Lloyd-Jones",
      "Garry Freeman",
      "Ray London"
    ],
    "correctAnswer": "John Stout",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 9 production",
      "Precise subject: 1983 sets and scenery",
      "Cast or story context: Six ninth-series episodes",
      "Correct answer: John Stout",
      "Evidence: BCG full crew",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36261",
    "category": "Television",
    "question": "Which television editor worked on three episodes of Are You Being Served? Series 9?",
    "answers": [
      "Mykola Pawluk",
      "Dave Hambelton",
      "Ken Pimenta",
      "Mike Taylor"
    ],
    "correctAnswer": "Dave Hambelton",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 9 production",
      "Precise subject: Series 9 editing",
      "Cast or story context: 1983 production credits",
      "Correct answer: Dave Hambelton",
      "Evidence: BCG full crew",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36262",
    "category": "Television",
    "question": "Which later 'Allo 'Allo! actress provided a CB-radio voice in Are You Being Served?'s Calling All Customers?",
    "answers": [
      "Kirsten Cooke",
      "Sue Hodge",
      "Vicki Michelle",
      "Kim Hartman"
    ],
    "correctAnswer": "Vicki Michelle",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 9, Calling All Customers",
      "Precise subject: CB radio voice actor",
      "Cast or story context: Guest voice in 1983 broadcast",
      "Correct answer: Vicki Michelle",
      "Evidence: BCG episode 9.04 cast",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36263",
    "category": "Television",
    "question": "Which future Harry Potter actor supplied another CB-radio voice in Are You Being Served?'s Calling All Customers?",
    "answers": [
      "Alan Rickman",
      "Jim Broadbent",
      "Richard Griffiths",
      "Robbie Coltrane"
    ],
    "correctAnswer": "Robbie Coltrane",
    "difficulty": "Hard",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 9, Calling All Customers",
      "Precise subject: Second CB radio voice actor",
      "Cast or story context: 1983 sketch radio-play guest",
      "Correct answer: Robbie Coltrane",
      "Evidence: BCG episode 9.04 cast",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36264",
    "category": "Television",
    "question": "Which actor who also appeared in the film The Italian Job played truck driver Roger in Are You Being Served?'s Calling All Customers?",
    "answers": [
      "Nosher Powell",
      "Ron Tarr",
      "Gorden Kaye",
      "Jack Haig"
    ],
    "correctAnswer": "Nosher Powell",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 9, Calling All Customers",
      "Precise subject: Roger the trucker actor",
      "Cast or story context: CB radio storyline",
      "Correct answer: Nosher Powell",
      "Evidence: BCG episode 9.04 cast",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36265",
    "category": "Television",
    "question": "Which impressionist provided Margaret Thatcher's voice in Are You Being Served?'s Monkey Business?",
    "answers": [
      "Tracey Ullman",
      "Jan Ravens",
      "Rory Bremner",
      "Pam Ayres"
    ],
    "correctAnswer": "Jan Ravens",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 9, Monkey Business",
      "Precise subject: Prime Minister voice credit",
      "Cast or story context: No 10 Downing Street protest",
      "Correct answer: Jan Ravens",
      "Evidence: BCG episode 9.05 cast",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36266",
    "category": "Television",
    "question": "Which actor played the costumed monkey in Are You Being Served?'s Monkey Business?",
    "answers": [
      "Mike Berry",
      "John Inman",
      "Rusty Goffe",
      "Nick Ross"
    ],
    "correctAnswer": "Rusty Goffe",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 9, Monkey Business",
      "Precise subject: Monkey performer",
      "Cast or story context: 1983 Japanese takeover subplot",
      "Correct answer: Rusty Goffe",
      "Evidence: BCG episode 9.05 cast",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36267",
    "category": "Television",
    "question": "Who played the visiting Japanese businessman Mr Yamoto in Are You Being Served?'s Monkey Business?",
    "answers": [
      "Eiji Kusuhara",
      "Ric Young",
      "Nadim Sawalha",
      "Kristopher Kum"
    ],
    "correctAnswer": "Kristopher Kum",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 9, Monkey Business",
      "Precise subject: Mr Yamoto guest casting",
      "Cast or story context: Japanese visitors to Grace Brothers",
      "Correct answer: Kristopher Kum",
      "Evidence: BCG episode 9.05 cast",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36268",
    "category": "Television",
    "question": "Which actor played Mr Winston in the Are You Being Served? episode Lost and Found?",
    "answers": [
      "Peter Cleall",
      "Frank Thornton",
      "John D. Collins",
      "Trevor Bannister"
    ],
    "correctAnswer": "Peter Cleall",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 9, Lost and Found",
      "Precise subject: Mr Winston cast credit",
      "Cast or story context: Mrs Slocombe's missing cat episode",
      "Correct answer: Peter Cleall",
      "Evidence: BCG episode 9.06 cast",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36269",
    "category": "Television",
    "question": "Which director also produced the final 1985 series of Are You Being Served?",
    "answers": [
      "Bob Spiers",
      "Martin Shardlow",
      "John Kilby",
      "Harold Snoad"
    ],
    "correctAnswer": "Martin Shardlow",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 10 production",
      "Precise subject: Final series director and producer",
      "Cast or story context: Seven 1985 episodes",
      "Correct answer: Martin Shardlow",
      "Evidence: BCG full crew",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36270",
    "category": "Television",
    "question": "Who edited every episode of Are You Being Served? Series 10?",
    "answers": [
      "Dave Hambelton",
      "Ken Pimenta",
      "Mykola Pawluk",
      "Phil Southby"
    ],
    "correctAnswer": "Mykola Pawluk",
    "difficulty": "Hard",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 10 production",
      "Precise subject: Final series editor",
      "Cast or story context: 1985 production credits",
      "Correct answer: Mykola Pawluk",
      "Evidence: BCG full crew",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36271",
    "category": "Television",
    "question": "Who designed the sets for the final seven original episodes of Are You Being Served?",
    "answers": [
      "John Stout",
      "Andrée Welstead Hornby",
      "Antony Thorpe",
      "Bernard Lloyd-Jones"
    ],
    "correctAnswer": "Bernard Lloyd-Jones",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 10 production",
      "Precise subject: Final series production designer",
      "Cast or story context: 1985 Grace Brothers setting",
      "Correct answer: Bernard Lloyd-Jones",
      "Evidence: BCG full crew",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36272",
    "category": "Television",
    "question": "Which actress played the unpopular replacement Miss Featherstone in Are You Being Served?'s Goodbye Mrs Slocombe?",
    "answers": [
      "Joanna Dunham",
      "Maggie Henderson",
      "Candy Davis",
      "Diana Lambert"
    ],
    "correctAnswer": "Joanna Dunham",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 10, Goodbye Mrs Slocombe",
      "Precise subject: Miss Featherstone actress",
      "Cast or story context: Mrs Slocombe's compulsory retirement",
      "Correct answer: Joanna Dunham",
      "Evidence: BCG episode 10.01 cast",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36273",
    "category": "Television",
    "question": "Which actress played Captain Peacock's wife in the final-series Are You Being Served? episode Grounds for Divorce?",
    "answers": [
      "Diana King",
      "Diana Lambert",
      "Wendy Richard",
      "Joanna Dunham"
    ],
    "correctAnswer": "Diana Lambert",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 10, Grounds for Divorce",
      "Precise subject: Mrs Peacock guest actor",
      "Cast or story context: Captain Peacock's marriage trouble",
      "Correct answer: Diana Lambert",
      "Evidence: BCG episode 10.02 cast",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36274",
    "category": "Television",
    "question": "Which actress played Captain Peacock's love interest Miss Bagnold in Are You Being Served?'s Grounds for Divorce?",
    "answers": [
      "Candy Davis",
      "Penny Irving",
      "Maggie Henderson",
      "Doremy Vernon"
    ],
    "correctAnswer": "Maggie Henderson",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 10, Grounds for Divorce",
      "Precise subject: Miss Bagnold actor",
      "Cast or story context: Affair and divorce storyline",
      "Correct answer: Maggie Henderson",
      "Evidence: BCG episode 10.02 cast",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36275",
    "category": "Television",
    "question": "Which British broadcaster appeared as a television presenter in the final Are You Being Served? episode The Pop Star?",
    "answers": [
      "Michael Parkinson",
      "Terry Wogan",
      "Noel Edmonds",
      "Nick Ross"
    ],
    "correctAnswer": "Nick Ross",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 10, The Pop Star",
      "Precise subject: Television presenter cameo",
      "Cast or story context: Mr Spooner's recording opportunity",
      "Correct answer: Nick Ross",
      "Evidence: BCG episode 10.07 cast",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36276",
    "category": "Television",
    "question": "Which actor played Seymour in the final original episode of Are You Being Served?",
    "answers": [
      "Keith Hodiak",
      "Nick Ross",
      "Ronnie Brody",
      "Michael Knowles"
    ],
    "correctAnswer": "Keith Hodiak",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "Original 1972–1985 Series",
      "Late Series 9–10",
      "Section: Series 10, The Pop Star",
      "Precise subject: Seymour cast credit",
      "Cast or story context: 1985 music-industry storyline",
      "Correct answer: Keith Hodiak",
      "Evidence: BCG episode 10.07 cast",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36277",
    "category": "Television",
    "question": "Who directed the one-off 2016 revival of Are You Being Served?",
    "answers": [
      "Derren Litten",
      "Dewi Humphreys",
      "James Farrell",
      "Bob Spiers"
    ],
    "correctAnswer": "Dewi Humphreys",
    "difficulty": "Hard",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "2016 Revival",
      "2016 BBC One One-Off",
      "Section: 2016 revival production",
      "Precise subject: 2016 one-off director",
      "Cast or story context: Revival production credits",
      "Correct answer: Dewi Humphreys",
      "Evidence: BCG 2016 cast and crew",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36278",
    "category": "Television",
    "question": "Who produced the 2016 one-off revival of Are You Being Served?",
    "answers": [
      "Stephen McCrum",
      "Dewi Humphreys",
      "James Farrell",
      "Martin Shardlow"
    ],
    "correctAnswer": "James Farrell",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "2016 Revival",
      "2016 BBC One One-Off",
      "Section: 2016 revival production",
      "Precise subject: Reboot producer",
      "Cast or story context: 2016 BBC sitcom revival",
      "Correct answer: James Farrell",
      "Evidence: BCG 2016 cast and crew",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36279",
    "category": "Television",
    "question": "Who was production designer on the 2016 revival of Are You Being Served?",
    "answers": [
      "Jacqueline White",
      "Chris Wadsworth",
      "Bernard Lloyd-Jones",
      "David Hitchcock"
    ],
    "correctAnswer": "David Hitchcock",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "2016 Revival",
      "2016 BBC One One-Off",
      "Section: 2016 revival production",
      "Precise subject: Revival production design",
      "Cast or story context: 1988-set Grace Brothers recreation",
      "Correct answer: David Hitchcock",
      "Evidence: BCG 2016 crew",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36280",
    "category": "Television",
    "question": "Who designed the costumes for the 2016 Are You Being Served? revival?",
    "answers": [
      "Jacqueline White",
      "Sally Broome",
      "Lesley Brennan",
      "Jenny Beavan"
    ],
    "correctAnswer": "Jacqueline White",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "2016 Revival",
      "2016 BBC One One-Off",
      "Section: 2016 revival production",
      "Precise subject: 2016 costume design",
      "Cast or story context: Recreated 1980s department store outfits",
      "Correct answer: Jacqueline White",
      "Evidence: BCG 2016 crew",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36281",
    "category": "Television",
    "question": "At which Salford television studio was the 2016 Are You Being Served? special recorded?",
    "answers": [
      "Pinewood Studios",
      "Dock10 at MediaCityUK",
      "BBC Television Centre in Shepherd's Bush",
      "Elstree Studios"
    ],
    "correctAnswer": "Dock10 at MediaCityUK",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "2016 Revival",
      "2016 BBC One One-Off",
      "Section: 2016 revival recording",
      "Precise subject: Reboot recording location",
      "Cast or story context: Salford MediaCityUK studio",
      "Correct answer: Dock10 at MediaCityUK",
      "Evidence: BCG 2016 programme details",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36282",
    "category": "Television",
    "question": "Which computer brand is Mr Rumbold learning to use in the 2016 Are You Being Served? special?",
    "answers": [
      "Apple",
      "Sinclair",
      "Amstrad",
      "Commodore"
    ],
    "correctAnswer": "Amstrad",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "2016 Revival",
      "2016 BBC One One-Off",
      "Section: 2016 revival story",
      "Precise subject: Rumbold's 1980s technology",
      "Cast or story context: Office modernisation",
      "Correct answer: Amstrad",
      "Evidence: Evening Standard preview 2016",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36283",
    "category": "Television",
    "question": "Which original Are You Being Served? co-creator is honoured by the new character Miss Croft in 2016?",
    "answers": [
      "Jeremy Lloyd",
      "Jimmy Perry",
      "John Sullivan",
      "David Croft"
    ],
    "correctAnswer": "David Croft",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "2016 Revival",
      "2016 BBC One One-Off",
      "Section: 2016 revival character names",
      "Precise subject: New character naming tribute",
      "Cast or story context: Miss Croft played by Jorgie Porter",
      "Correct answer: David Croft",
      "Evidence: BCG 2016 casting news",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36284",
    "category": "Television",
    "question": "How is the Young Mr Grace played by Mathew Horne in the 2016 Are You Being Served? revival related to the original character?",
    "answers": [
      "He is his grandson",
      "He is his brother",
      "He is his great-uncle",
      "He is the same character after a recast"
    ],
    "correctAnswer": "He is his grandson",
    "difficulty": "Hard",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "2016 Revival",
      "2016 BBC One One-Off",
      "Section: 2016 revival continuity",
      "Precise subject: Younger-generation Grace family member",
      "Cast or story context: New owner's family connection",
      "Correct answer: He is his grandson",
      "Evidence: 2016 character history",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36285",
    "category": "Television",
    "question": "Which anniversary of the British television sitcom did the BBC's 2016 Are You Being Served? revival celebrate?",
    "answers": [
      "25 years",
      "60 years",
      "40 years",
      "100 years"
    ],
    "correctAnswer": "60 years",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Television",
      "British Sitcom",
      "BBC Television",
      "Grace Brothers",
      "Workplace Comedy",
      "British Department Store",
      "UK English",
      "2016 Revival",
      "2016 BBC One One-Off",
      "Section: 2016 revival background",
      "Precise subject: Landmark Sitcom Season",
      "Cast or story context: 1956–2016 British TV comedy heritage",
      "Correct answer: 60 years",
      "Evidence: BBC announcement of comedy season",
      "1980s television history",
      "Character and production credits",
      "Jeremy Lloyd",
      "David Croft",
      "Packs audited 21 November 2026",
      "Factual standalone quiz questions"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==125||
  new Set(questions.map(q=>q.id)).size!==questions.length||
  new Set(questions.map(q=>q.question.trim().toLowerCase())).size!==questions.length||
  questions.some(q=>q.answers.length!==4||
   new Set(q.answers.map(a=>a.trim().toLowerCase())).size!==4||
   q.answers.filter(a=>a===q.correctAnswer).length!==1||
   q.tags.length<15||!q.tags.includes('Are You Being Served?')||q.dailyEligible!==true)||
  auditAdditions.some(q=>q.tags.length<18||!q.question.includes('Are You Being Served?')))
 throw Error('Pack 314 editorial validation failed');

module.exports = questions;
