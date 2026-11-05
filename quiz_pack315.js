
// quiz_pack315.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Grace & Favour (1992-1993) - complete 12-episode series
// The former Grace Brothers staff run Millstone Manor country hotel.
// Seven individually selected specialist tags per question.
// Keep quiz_bank.js unchanged until the agreed end-of-evening connection.
// Row: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven tags

const groups = [
  {
    topic: 'Grace & Favour: the new setting and series history',
    era: '1992-1993',
    facts: `Which sitcom was continued in the BBC series Grace & Favour?|Are You Being Served?|Open All Hours|The Good Life|Hi-de-Hi!|Easy|Original Programme|Grace Brothers Staff|Sitcom Sequel|BBC Comedy|Department Store Origins|Returning Characters|Series Connection
What alternative title was used for Grace & Favour in overseas markets?|Are You Being Served? Again!|Back at Grace Brothers|The Country Hotel|Grace Brothers Returns|Medium|International Title|Overseas Distribution|Programme Naming|American Marketing|Sitcom Sequel|Television Identity|Alternative Name
In which year did Grace & Favour begin broadcasting?|1992|1985|1989|1995|Easy|First Broadcast|Series One|Nineties Television|BBC One|Programme Launch|January Premiere|Broadcast Year
In which year did the second and final series of Grace & Favour air?|1993|1992|1994|1996|Easy|Final Broadcast Year|Series Two|Nineties Sitcom|BBC One|Programme End|Television Timeline|Broadcast History
How many series of Grace & Favour were produced?|Two|One|Three|Four|Easy|Two Series|Programme Length|BBC Production|Short Lived Sequel|1992 Run|1993 Run|Series Count
How many episodes of Grace & Favour were broadcast in total?|Twelve|Eight|Ten|Sixteen|Easy|Twelve Episodes|Programme Length|Six Per Series|British Sitcom|Episode Count|1992-1993|Complete Run
What is the name of the manor house run by the former Grace Brothers staff?|Millstone Manor|Fawlty Towers|Thornbury Hall|Ashford House|Easy|Millstone Manor|Country Hotel|Tudor House|Hotel Name|Rural Setting|Grace Brothers Employees|Property Inheritance
Which English county provides the setting for Millstone Manor?|Gloucestershire|Yorkshire|Cornwall|Norfolk|Medium|Gloucestershire|West Country|Country Hotel Setting|Manor Location|English Counties|Rural Comedy|Programme Geography
What fictional town is near Millstone Manor?|Great Tender|Little Bampton|Lower Tadfield|Much Binding|Medium|Great Tender|Fictional Town|Millstone Manor|Country Setting|Village Life|Rural Geography|Local Community
What sort of business do the former shop employees attempt to operate?|A country house hotel|A department store chain|A seaside restaurant|A travel agency|Easy|Hotel Management|Career Change|Country Hospitality|Millstone Manor|Retired Sales Staff|New Business|Series Premise
What happened to Grace Brothers department store before the sequel begins?|It closed down|It moved to Paris|It was destroyed by fire|It was converted into a museum|Easy|Store Closure|Grace Brothers|Opening Backstory|Former Employees|Career Transition|Lost Jobs|Series Premise
Whose investments leave the former employees tied to Millstone Manor?|Young Mr Grace's|Captain Peacock's|Mr Harman's|Mr Spooner's|Easy|Young Mr Grace|Pension Fund|Manor Investment|Former Employer|Inheritance Background|Retirement Finances|Hotel Ownership
What source of money is invested in the country property?|The employees' pension fund|The Christmas charity collection|The store's petty cash|The workers' travel allowance|Medium|Pension Fund|Staff Retirement|Financial Investment|Millstone Manor|Income Security|Property Asset|Opening Story
Which two writers created the follow-up series Grace & Favour?|Jeremy Lloyd and David Croft|John Sullivan and Carla Lane|Ray Galton and Alan Simpson|Jimmy Perry and David Renwick|Medium|Jeremy Lloyd|David Croft|Writing Partnership|Programme Creators|Comedy Writers|Script Credits|BBC Production
Who directed the twelve episodes of Grace & Favour?|Mike Stephens|Bob Kellett|David Lean|Richard Lester|Medium|Mike Stephens|Series Director|Production Credits|BBC Sitcom|Television Direction|1992 Production|1993 Production`,
  },
  {
    topic: 'Millstone Manor: new characters and performers',
    era: '1992-1993',
    facts: `What is the surname of farmer Maurice and his daughter Mavis?|Moulterd|Heathcliff|Lovelock|Slocombe|Easy|Moulterd Family|Maurice Moulterd|Mavis Moulterd|Farm Neighbours|Character Surname|Rural Cast|Millstone Farm
Which actor played farmer Maurice Moulterd?|Billy Burden|Nicholas Smith|Frank Thornton|Arthur English|Medium|Billy Burden|Maurice Moulterd|Character Casting|Manor Farm|British Actor|Supporting Lead|Rural Character
What is the name of Maurice Moulterd's daughter?|Mavis|Shirley|Jessica|Betty|Easy|Mavis Moulterd|Maurice Daughter|Farm Family|New Character|Country Setting|Romantic Interest|Millstone Manor
Which actress portrayed Mavis Moulterd?|Fleur Bennett|Joanne Heywood|Wendy Richard|Diane Holland|Medium|Fleur Bennett|Mavis Moulterd|Casting Credit|Farm Daughter|Series Regular|British Actress|Hotel Neighbour
Which returning salesman attracts the romantic attention of Mavis?|Mr Humphries|Captain Peacock|Mr Rumbold|Mr Spooner|Easy|Wilberforce Humphries|Mavis Moulterd|Romantic Interest|Country Courtship|John Inman|Farm Romance|Character Relationship
What is the full name of Mr Grace's former nurse who assists at the manor?|Jessica Lovelock|Shirley Brahms|Celia Littlewood|Mavis Moulterd|Medium|Jessica Lovelock|Grace Nurse|Estate Executor|Hotel Staff|New Main Character|Series Premise|Personal Assistant
Who played Jessica Lovelock?|Joanne Heywood|Fleur Bennett|Mollie Sugden|Wendy Richard|Medium|Joanne Heywood|Jessica Lovelock|Casting Credit|New Lead|Nurse Character|BBC Television|Manor Resident
What additional responsibility does Jessica Lovelock hold after Young Mr Grace dies?|Executor of his estate|Owner of the local pub|Village magistrate|Manager of the farm|Medium|Estate Executor|Jessica Lovelock|Young Mr Grace|Inheritance Administration|Legal Responsibility|Former Nurse|New Role
Which former department manager helps run the manor hotel?|Mr Rumbold|Mr Harman|Mr Grainger|Mr Goldberg|Easy|Cuthbert Rumbold|Hotel Management|Former Department Manager|Nicholas Smith|Grace Brothers Veteran|Operating Decisions|Management Role`,
  },
  {
    topic: 'Series One Episode One: inheritance and a journey',
    era: 'January 1992',
    facts: `On what date was the first episode of Grace & Favour broadcast?|10 January 1992|10 January 1993|14 February 1992|8 February 1993|Medium|Series Premiere|10 January 1992|Original Transmission|BBC One|First Episode|Broadcast Date|Programme Launch
What prompts the old Grace Brothers staff to investigate Millstone Manor?|They need income from the pension investment|They have won a hotel in a raffle|They are attending a wedding|They are planning to film a programme|Easy|Pension Income|Manor Investigation|Former Employees|Financial Survival|Series Premiere|Hotel Investment|New Beginning
What style of historic building forms the main property at Millstone Manor?|A Tudor manor house|A Victorian factory|A Norman castle|A Georgian townhouse|Medium|Tudor Manor|Historic Property|Millstone Manor|Country Estate|Architectural Period|Hotel Premises|Series Setting
What other property is associated with the country hotel?|A farm|A cinema|A bowling alley|An airport|Easy|Home Farm|Hotel Estate|Rural Property|Millstone Manor|Agricultural Land|Series Premiere|Country Life
What do the former shop staff decide to do before fully committing to the property?|Visit it for a weekend|Sell it without seeing it|Demolish the building|Convert it into a supermarket|Medium|Weekend Visit|Hotel Inspection|Opening Episode|Investment Decision|Pension Concern|Rural Journey|Exploring Property`,
  },
  {
    topic: 'Series One Episode Two: farm life and a horse and cart',
    era: 'January 1992',
    facts: `Who teaches Mr Humphries about maintaining the manor's boiler?|Mavis Moulterd|Miss Brahms|Mrs Slocombe|Miss Lovelock|Medium|Mavis Moulterd|Mr Humphries|Boiler Maintenance|Woodshed Encounters|Second Episode|Farm Skills|New Friendship
What produce does the home farm provide for breakfast at Millstone Manor?|Fresh eggs|Fresh salmon|Strawberries|Homemade cheese|Easy|Fresh Eggs|Home Farm|Hotel Breakfast|Farm Produce|Manor Hospitality|Maurice Moulterd|Second Episode
Which two former sales-floor colleagues go out in a horse-drawn trap?|Mrs Slocombe and Captain Peacock|Miss Brahms and Mr Rumbold|Mr Humphries and Miss Lovelock|Mr Spooner and Mr Harman|Medium|Betty Slocombe|Stephen Peacock|Horse And Trap|Country Outing|Second Episode|Rural Transport|Staff Adventure
Which new character hopes to join a local hunt in the second episode?|Miss Lovelock|Mavis Moulterd|Miss Brahms|Mrs Slocombe|Medium|Jessica Lovelock|Local Hunt|Country Pastimes|Horse Riding|Second Episode|Rural Society|Manor Life
What new responsibility do the former shop assistants reluctantly accept in the second episode?|Running the manor themselves|Reopening Grace Brothers|Building a new department store|Managing a railway station|Easy|Hotel Operations|Staff Decision|Second Episode|New Careers|Millstone Manor|Profit Challenge|Country Business`,
  },
  {
    topic: 'Series One Episode Three: Mrs Slocombe in court',
    era: 'January 1992',
    facts: `Which former ladies' department employee faces a court hearing in Series One?|Mrs Slocombe|Miss Brahms|Miss Lovelock|Mavis Moulterd|Easy|Betty Slocombe|Court Hearing|Third Episode|Legal Trouble|Former Saleswoman|Manor Neighbourhood|Character Storyline
What is Mrs Slocombe accused of stealing?|A gypsy's cart|A horse|A hotel cashbox|A silver tea service|Easy|Gypsy Cart|Theft Accusation|Mrs Slocombe|Court Case|Third Episode|Country Mishap|Horse Drawn Vehicle
Where do Captain Peacock and the others travel to help Mrs Slocombe?|The local court|A television studio|A seaside resort|A police training centre|Easy|Local Court|Character Witnesses|Mrs Slocombe|Third Episode|Legal Defence|Staff Support|Village Justice
What unusual farm transport carries members of the group into town for the court case?|A pig cart|A tractor trailer|A milk float|A pony sleigh|Medium|Pig Cart|Maurice Moulterd|Court Journey|Farm Transport|Third Episode|Country Comedy|Staff Outing
In what capacity do Mrs Slocombe's colleagues support her at the hearing?|As character witnesses|As jury members|As police officers|As defence barristers|Medium|Character Witnesses|Mrs Slocombe|Court Appearance|Colleague Loyalty|Third Episode|Legal Testimony|Manor Team`,
  },
  {
    topic: 'Series One Episode Four: the first guests are coming',
    era: 'January 1992',
    facts: `Where are Millstone Manor's first major party of paying guests travelling from?|America|Australia|France|Japan|Easy|American Tourists|First Guests|Hotel Booking|Fourth Episode|International Visitors|Millstone Manor|Hospitality Work
Who advertises for hotel staff before the Americans arrive?|Mr Rumbold|Captain Peacock|Mavis Moulterd|Mr Humphries|Easy|Cuthbert Rumbold|Help Wanted|Staff Advertisement|Recruitment|Fourth Episode|Hotel Vacancies|Management Task
What problem threatens the preparations for the first guests?|Too few applicants for staff jobs|A shortage of guest bedrooms|A new bridge closing|A cancelled ferry service|Medium|Staff Shortage|Poor Recruitment|American Booking|Fourth Episode|Hotel Readiness|Workforce Planning|Opening Guests
What must the former sales staff urgently make ready before the visit?|The manor house|The farm's tractor|A railway carriage|A seaside shop|Easy|Hotel Preparation|Manor Cleaning|American Tourists|Fourth Episode|Guest Accommodation|Service Standards|New Business
Which activity is associated with recruiting workers for the hotel?|Job interviews|University examinations|Dance auditions|A football trial|Easy|Job Interviews|Hotel Recruitment|Fourth Episode|Staff Vacancies|Selection Process|Mr Rumbold|Hiring Workers`,
  },
  {
    topic: 'Series One Episode Five: a stormy night at the manor',
    era: 'February 1992',
    facts: `What publicity material requires a group photograph in the fifth episode?|A hotel brochure|A wedding invitation|A race programme|A local newspaper obituary|Easy|Hotel Brochure|Promotional Photography|Fifth Episode|Marketing|Guest Recruitment|Manor Publicity|Group Picture
Why do the former Grace Brothers employees fill the hotel's vacant jobs themselves?|They cannot recruit enough staff|The guests demand familiar faces|A union forbids hiring|The hotel has been sold|Easy|Staff Recruitment Failure|Multiple Hotel Roles|Fifth Episode|Former Sales Staff|Hospitality Duties|Staff Shortage|Self Service
What weather event causes trouble at Millstone Manor in the fifth episode?|A violent storm|A blizzard|A heatwave|A drought|Easy|Thunderstorm|Dark Night|Fifth Episode|Country Weather|Manor Atmosphere|Electricity Failure|Hotel Disruption
What happens to the electrical supply during the storm?|The power goes out|The voltage doubles|The lights stay permanently on|The generator explodes|Easy|Power Cut|Storm Damage|Fifth Episode|Darkened Manor|Hotel Emergency|Electricity|Night Frights
What type of unexplained visitor frightens the staff during the storm?|An apparently ghostly figure|A travelling circus performer|An escaped lion|A customs official|Medium|Ghostly Figure|Stormy Night|Fifth Episode|Manor Mystery|Supernatural Scare|Darkness|Unnerving Visitor`,
  },
  {
    topic: 'Series One Episode Six: the American visitors arrive',
    era: 'February 1992',
    facts: `What kind of visitors arrive for the Series One finale?|American tourists|Military cadets|Italian opera singers|A school football team|Easy|American Tourists|Guest Arrival|Series One Finale|Hotel Visitors|Foreign Group|Sixth Episode|Millstone Manor
Which manager has failed to read the visitors' complete booking details?|Mr Rumbold|Captain Peacock|Mr Humphries|Miss Brahms|Medium|Cuthbert Rumbold|Booking Oversight|Sixth Episode|Hotel Management|Guest Requirements|Tourism Organiser|Staff Mistake
What extra service are the American visitors expecting at the manor?|Traditional country entertainment|A helicopter sightseeing tour|An indoor swimming pool|A cinema screening every night|Medium|Country Entertainment|Tourist Expectations|Sixth Episode|English Traditions|Hospitality Package|Cultural Display|Holiday Group
What seasonal American-themed celebration is recreated for the visitors?|Harvest Thanksgiving|Independence Day|Halloween|Presidents Day|Medium|Harvest Thanksgiving|American Guests|Country Pageant|Sixth Episode|Festive Entertainment|Cultural Performance|Hotel Activities
Which part of running the hotel gives the former shop workers trouble during the American visit?|Providing meals and room service|Printing price labels|Ordering fashion stock|Operating cash registers|Easy|Room Service|Hotel Catering|American Tourists|Sixth Episode|Hospitality Challenges|Customer Expectations|Career Change`,
  },
  {
    topic: 'Series Two Episode One: a gun and a police raid',
    era: 'January 1993',
    facts: `In which month did the second series of Grace & Favour begin?|January|February|April|September|Easy|January 1993|Second Series|BBC One Return|Broadcast Month|Programme Schedule|Nineties Sitcom|Series Premiere
What do the manor's residents have to clean up after the American visitors leave?|Chewing gum|Confetti|Spilt paint|Sand from the beach|Easy|Chewing Gum|Departed Guests|Second Series Premiere|Hotel Cleaning|American Tourists|Housekeeping|Unpleasant Surprise
What object does Captain Peacock discover in the writing room?|A gun|A stolen necklace|An antique sword|A box of fireworks|Easy|Found Gun|Stephen Peacock|Writing Room|Second Series Premiere|Unexpected Weapon|Security Incident|Manor Mystery
Who tries to notify the police about the discovered gun?|Mr Rumbold|Miss Brahms|Maurice Moulterd|Mr Humphries|Medium|Cuthbert Rumbold|Police Report|Found Gun|Second Series Premiere|Hotel Manager|Official Notification|Security Alert
What is the police response to the reported gun?|A raid on the manor|A routine parking ticket|A cancelled investigation|A village meeting|Medium|Police Raid|Armed Response|Millstone Manor|Second Series Premiere|Found Weapon|Police Confusion|Emergency Visit
What nickname is associated with Mr Rumbold when the police check past records?|Knuckles Rumbold|Nobby Rumbold|Rumbold the Great|Cuthbert the Bold|Medium|Knuckles Rumbold|Police Records|Cuthbert Rumbold|Second Series Premiere|Nickname|Criminal Record Joke|Identity Confusion`,
  },
  {
    topic: 'Series Two Episode Two: village cricket and jealousy',
    era: 'January 1993',
    facts: `What sport is played against the local villagers in Series Two?|Cricket|Rugby|Tennis|Hockey|Easy|Cricket Match|Village Team|Second Series Episode Two|Manor Tradition|Local Rivalry|Summer Sport|Community Fixture
Which actor provides cricket commentary in a guest voice role?|Chris Barrie|Mike Berry|Frank Thornton|Billy Burden|Medium|Chris Barrie|Cricket Commentary|Voice Performer|Series Two|Guest Cast|Sports Broadcast|Village Game
Who is jealous of Mr Humphries's friendship with Mavis?|Malcolm Heathcliff|Maurice Moulterd|Mr Rumbold|Captain Peacock|Easy|Malcolm Heathcliff|Mavis Moulterd|Romantic Jealousy|Mr Humphries|Cricket Rival|Second Series|Village Local
Which actor portrays jealous local Malcolm Heathcliff?|Andrew Barclay|Billy Burden|Nicholas Smith|Michael Bilton|Medium|Andrew Barclay|Malcolm Heathcliff|Guest Actor|Cricket Episode|Local Rival|Casting Credit|Series Two
Which former Grace Brothers salesman plays the winning stroke in the cricket match?|Mr Humphries|Mr Rumbold|Captain Peacock|Mr Spooner|Easy|Wilberforce Humphries|Winning Stroke|Cricket Victory|Village Game|Second Series|John Inman|Unexpected Hero
Which female team member makes a memorable dive during the cricket game?|Mrs Slocombe|Miss Lovelock|Mavis Moulterd|Miss Brahms|Medium|Betty Slocombe|Cricket Dive|Sporting Comedy|Village Match|Second Series|Unlikely Athlete|Team Effort`,
  },
  {
    topic: 'Series Two Episode Three: the return of Mr Slocombe',
    era: 'January 1993',
    facts: `Which long-absent relative unexpectedly reappears at the manor?|Mrs Slocombe's husband|Miss Brahms's brother|Mr Humphries's father|Captain Peacock's son|Easy|Mr Slocombe|Long Lost Husband|Third Episode|Marriage Story|Unexpected Visitor|Betty Slocombe|Family Reunion
What is the full name of Mrs Slocombe's estranged husband?|Cecil G. Slocombe|Percival J. Slocombe|Stephen A. Slocombe|Maurice T. Slocombe|Medium|Cecil G Slocombe|Estranged Husband|Betty Slocombe|Character Name|Third Episode|Family History|Unexpected Return
Which actor portrays Mrs Slocombe's husband in the second series?|Donald Morley|James Hayter|Arthur English|Milo Sperber|Medium|Donald Morley|Cecil Slocombe|Guest Actor|Series Two Casting|Estranged Husband|Third Episode|British Performer
What business deal is Mrs Slocombe's husband considering?|Buying Millstone Manor|Purchasing a department store|Selling a fleet of buses|Leasing a seaside pier|Easy|Hotel Purchase|Cecil Slocombe|Potential Buyer|Third Episode|Property Sale|Pension Security|Manor Ownership
How do the hotel staff try to put the visitor off buying Millstone Manor?|Pretend the hotel employs many more staff|Stage an expensive fireworks display|Offer him a free room forever|Claim the building has been demolished|Medium|Fake Staff Numbers|Inflated Costs|Hotel Sale Threat|Third Episode|Deceptive Scheme|Protecting Pensions|Financial Deterrent
How does Mrs Slocombe react when she learns her husband is coming?|She hides from him|She arranges a welcome party|She asks to renew their vows|She travels to London to meet him|Easy|Betty Slocombe|Avoiding Husband|Third Episode|Embarrassing Reunion|Secret Identity|Family Conflict|Hotel Visit`,
  },
  {
    topic: 'Series Two Episode Four: the cat behind the wall',
    era: 'January 1993',
    facts: `What unusual discovery does Captain Peacock make while an attic room is being renovated?|A petrified cat|A buried treasure map|A medieval helmet|An old violin|Easy|Petrified Cat|Attic Discovery|Fourth Episode|Stephen Peacock|Hidden Wall|Ancient Remains|Manor Mystery
Which former shop assistant is having an attic room prepared?|Miss Brahms|Mrs Slocombe|Mr Humphries|Mr Rumbold|Medium|Shirley Brahms|Attic Bedroom|Room Renovation|Fourth Episode|Hidden Wall|Manor Accommodation|Personal Room
Approximately how old is the cat hidden in the wall?|Two hundred years|Twenty years|Fifty years|Five hundred years|Medium|Two Hundred Years|Petrified Cat|Old Manor|Fourth Episode|Historical Relic|Hidden Animal|House Superstition
Where do the staff take the ancient cat after finding it?|A local museum|A veterinary surgery|The village church|A pet shop|Easy|Local Museum|Petrified Cat|Fourth Episode|Artifact Donation|Old Manor|Museum Curator|Historical Find
What do Maurice and Mavis believe the hidden cat protects the manor against?|Bad luck and evil|Flooding|Drought|Insect infestations|Medium|Protective Charm|Maurice Moulterd|Mavis Moulterd|Folk Belief|Petrified Cat|Fourth Episode|Rural Superstition
What begins happening after the cat is removed from its hiding place?|Strange supernatural events|A rush of hotel bookings|The heating starts working perfectly|An unexpected royal visit|Easy|Supernatural Events|Removed Talisman|Manor Haunting|Fourth Episode|Superstition|Unexplained Disturbances|Mystery Plot`,
  },
  {
    topic: 'Series Two Episode Five: darts and a daring rescue',
    era: 'February 1993',
    facts: `What indoor pub sport do the staff play against the local team?|Darts|Snooker|Table tennis|Bowls|Easy|Darts Match|Village Pub|Fifth Episode|Local Competition|Manor Team|Pub Games|Community Rivalry
What change in leadership follows Mr Rumbold's complaint that he gets no respect?|The staff vote to share authority democratically|Captain Peacock becomes permanent owner|Miss Brahms takes the entire business|The farm is sold to the villagers|Medium|Shared Authority|Democratic Vote|Cuthbert Rumbold|Fifth Episode|Hotel Governance|Management Dispute|Staff Equality
Where does the darts contest take place?|The village pub|The manor attic|The local railway station|The church hall|Easy|Village Pub|Darts Tournament|Fifth Episode|Rural Social Life|Local Players|Public House|Manor Staff
Which former floorwalker leads a daring raid to rescue animals?|Captain Peacock|Mr Humphries|Mr Rumbold|Maurice Moulterd|Easy|Stephen Peacock|Commando Raid|Animal Rescue|Fifth Episode|Military Pretensions|Farm Animals|Hotel Team
What animals do the employees attempt to rescue in Series Two?|Sheep|Cows|Horses|Pigs|Easy|Sheep Rescue|Flock|Fifth Episode|Farm Livestock|Country Animals|Rescue Mission|Rural Story
What alarming fate is intended for the sheep the staff sold?|They are to be sent to slaughter|They are to be shipped to Australia|They are to be used in a circus|They are to be sold as pets|Medium|Sheep Slaughter|Knackers|Breeding Stock|Fifth Episode|Rescue Motivation|Animal Welfare|Livestock Sale`,
  },
  {
    topic: 'Series Two Episode Six: the final hotel entertainment',
    era: 'February 1993',
    facts: `What nationality are the tour group visiting in the final episode?|Mongolian|Japanese|Swedish|Canadian|Easy|Mongolian Tourists|Final Episode|Foreign Visitors|Group Booking|Cultural Programme|Hotel Guests|International Hospitality
What kind of activities do the last visitors expect at Millstone Manor?|Cultural entertainment|Water-skiing lessons|A fashion auction|A horse-racing festival|Easy|Cultural Show|Mongolian Group|Hotel Entertainment|Final Episode|Performing Arts|Guest Demands|Tour Programme
What classical theatrical form do the guests expect alongside other entertainment?|Opera|Mime|Circus clowning|Puppet theatre|Medium|Opera|Cultural Entertainment|Mongolian Visitors|Final Episode|Classical Performance|Guest Expectations|Music And Drama
Which former menswear salesman performs under the name Sergei?|Mr Humphries|Mr Spooner|Mr Goldberg|Mr Lucas|Medium|Sergei|Wilberforce Humphries|Stage Persona|Final Episode|Ballet Performance|John Inman|Hotel Show
Which new female regular performs as Natasha alongside Sergei?|Miss Lovelock|Mavis Moulterd|Miss Brahms|Mrs Slocombe|Medium|Natasha|Jessica Lovelock|Joanne Heywood|Dance Performance|Final Episode|Stage Partner|Costume Role
What style of dance provides the highlight of the finale's guest entertainment?|Ballet|Flamenco|Tap dancing|Morris dancing|Easy|Ballet|Sergei And Natasha|Final Performance|Mongolian Guests|Hotel Show|Second Series Finale|Dance Routine
On what date was the final episode of Grace & Favour broadcast?|8 February 1993|14 February 1992|1 April 1985|25 December 1993|Medium|8 February 1993|Final Broadcast|Series Two Finale|BBC One|Television Timeline|Episode Date|Programme Ending
Who remains a romantic rival for Mr Humphries because of Mavis in the final episode?|Malcolm Heathcliff|Maurice Moulterd|Mr Rumbold|Captain Peacock|Medium|Malcolm Heathcliff|Mavis Moulterd|Mr Humphries|Final Episode|Jealous Rival|Love Triangle|Village Tension`,
  },
];

const FIRST_ID = 14010;
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
      'British Television', 'Television', 'Grace & Favour', 'BBC One',
      'British Sitcom', 'Workplace Comedy', 'Country Hotel', 'Millstone Manor',
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

const EXPECTED_COUNT = 92;
if (questions.length !== EXPECTED_COUNT) {
  throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
}
if (questions[0].id !== 'tv_14010' ||
    questions[questions.length - 1].id !== 'tv_14101') {
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
