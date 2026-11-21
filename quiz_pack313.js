
// quiz_pack313.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Are You Being Served? - Series 7 and 8 (1979-1981)
// Grace Brothers cast changes, workplace disputes and Christmas specials.
// Seven individually selected specialist tags per question.
// Pack 313 is already connected by quiz_bank.js (live pack range 1–558).
// Row: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven tags

const groups = [
  {
    topic: 'Series Seven: a new face behind the menswear counter',
    era: '1979',
    facts: `In which year did Series Seven of Are You Being Served? begin?|1979|1978|1980|1981|Easy|1979 Premiere|Autumn Schedule|Seventh Series|London Retail Comedy|UK Television History|Season Chronology|Late Seventies
Which episode opens Series Seven?|The Junior|The Agent|The Hero|The Apartment|Medium|The Junior|Series Seven Premiere|19 October 1979|Episode Title|Broadcast Order|Menswear Counter|New Employee
Which new salesman joins the menswear department in The Junior?|Mr Goldberg|Mr Grossman|Mr Klein|Mr Spooner|Easy|Harry Goldberg|The Junior|Menswear Department|New Salesman|1979 Casting|Staff Recruitment|Grace Brothers
Which actor plays Mr Goldberg?|Alfie Bass|James Hayter|Benny Lee|Milo Sperber|Medium|Alfie Bass|Harry Goldberg|British Actor|Series Seven|Character Casting|Menswear Salesman|1979 Television
Who is the outgoing senior salesman whose retirement creates vacancies in The Junior?|Mr Tebbs|Mr Grainger|Mr Harman|Mr Rumbold|Medium|Mr Tebbs|Retired Salesman|The Junior|James Hayter|Menswear Changes|Career Vacancy|1979 Episode
Which two established salesmen are promoted when the department is reorganised in The Junior?|Mr Humphries and Mr Lucas|Captain Peacock and Mr Harman|Mr Rumbold and Mr Goldberg|Mr Tebbs and Mr Klein|Medium|Mr Humphries|Mr Lucas|Staff Promotion|The Junior|Menswear Hierarchy|1979 Story|Department Reshuffle
What business had Mr Goldberg previously run before joining Grace Brothers?|A small tailoring business|A shoe factory|A restaurant|A newsagent's|Medium|Harry Goldberg|Tailoring Business|The Junior|Previous Employment|Experienced Salesman|1979 Plot|Fashion Trade
Which member of staff is uncomfortable about Mr Goldberg's wartime recollections?|Captain Peacock|Mr Rumbold|Mr Harman|Mr Humphries|Easy|Stephen Peacock|Harry Goldberg|Wartime Acquaintance|The Junior|Military Memories|1979 Story|Staff Embarrassment
Which war connects Mr Goldberg and Captain Peacock in The Junior?|The Second World War|The First World War|The Korean War|The Falklands War|Easy|Second World War|Captain Peacock|Harry Goldberg|Military Service|The Junior|Old Comrades|1979 Episode
How many episodes, including the Christmas special, make up Series Seven?|Eight|Six|Seven|Nine|Medium|Eight Episodes|Series Seven|1979 Broadcast|Episode Count|Christmas Special|Programme Structure|BBC Sitcom`,
  },
  {
    topic: 'Series Seven: insurance examinations and the shop apartment',
    era: '1979',
    facts: `What must the employees undergo in Strong Stuff This Insurance?|Medical examinations|Security interviews|Driving tests|Eye tests for new uniforms|Easy|Strong Stuff This Insurance|Medical Checks|Staff Physicals|Insurance Scheme|1979 Episode|Employee Health|Grace Brothers
Why are the staff asked to have medical examinations?|To qualify for a group insurance scheme|To join the store cricket team|To apply for a foreign posting|To get new driving licences|Medium|Group Insurance|Medical Examination|Employee Benefits|Strong Stuff This Insurance|Pension Scheme|1979 Story|Staff Welfare
What type of former teacher does Mr Humphries recruit to help staff prepare for their physicals?|A ballet instructor|A swimming coach|A karate master|A driving examiner|Medium|Mr Humphries|Ballet Instructor|Fitness Preparation|Strong Stuff This Insurance|Exercise Class|1979 Plot|Medical Checks
Whose remarks about worn furniture are mistaken for comments on the staff's health?|Mr Harman's|Mr Goldberg's|Captain Peacock's|Mr Lucas's|Medium|Mr Harman|Furniture Report|Misheard Results|Strong Stuff This Insurance|Office Door|1979 Story|Medical Confusion
Which character loses access to her home because squatters move in during The Apartment?|Mrs Slocombe|Miss Brahms|Mrs Peacock|Miss Bakewell|Easy|Betty Slocombe|Squatters|The Apartment|Housing Crisis|1979 Episode|Personal Home|Shop Accommodation
Where does Young Mr Grace let Mrs Slocombe stay in The Apartment?|A display apartment on the top floor|A bedroom in the basement|The store's stockroom|Mr Rumbold's private office|Medium|Display Apartment|Top Floor|Mrs Slocombe|The Apartment|Young Mr Grace|Temporary Housing|1979 Story
Why do other employees seek somewhere to sleep at Grace Brothers in The Apartment?|Transport problems|A snowstorm|A citywide curfew|A hotel closure|Easy|Transport Disruption|Overnight Stay|The Apartment|Stranded Employees|Grace Brothers|1979 Plot|Temporary Shelter
Which salesman asks to stay in Mrs Slocombe's temporary flat in The Apartment?|Mr Humphries|Mr Goldberg|Mr Lucas|Mr Tebbs|Medium|Wilberforce Humphries|Betty Slocombe|Display Flat|The Apartment|Overnight Guest|1979 Story|Staff Lodging`,
  },
  {
    topic: 'Series Seven: Mrs Slocombe takes charge and the hero emerges',
    era: '1979',
    facts: `Who becomes temporary floor manager in Mrs Slocombe Senior Person?|Mrs Slocombe|Miss Brahms|Mr Humphries|Mr Goldberg|Easy|Betty Slocombe|Temporary Manager|Staff Promotion|Mrs Slocombe Senior Person|1979 Episode|Shop Hierarchy|Management Duties
Which manager's illness leads to Mrs Slocombe's temporary promotion?|Mr Rumbold's|Captain Peacock's|Young Mr Grace's|Mr Harman's|Medium|Cuthbert Rumbold|Food Poisoning|Manager Absence|Mrs Slocombe Senior Person|1979 Story|Staff Cover|Department Management
What illness sidelines Mr Rumbold in Mrs Slocombe Senior Person?|Food poisoning|Influenza|Appendicitis|Measles|Medium|Food Poisoning|Mr Rumbold|Management Illness|Mrs Slocombe Senior Person|Temporary Cover|1979 Plot|Unwell Manager
Which employee's dignity is challenged by a member of another department in The Hero?|Captain Peacock|Mr Goldberg|Mr Harman|Mr Lucas|Easy|Captain Peacock|The Hero|Staff Insult|Department Rivalry|1979 Episode|Personal Pride|Workplace Honour
What embarrassing medical problem leads to the insult in The Hero?|A boil on Captain Peacock's bottom|A swollen ankle|A black eye|A sprained wrist|Medium|Captain Peacock|Boil|The Hero|Personal Embarrassment|1979 Plot|Comic Injury|Workplace Teasing
Who is pushed into wrestling after Captain Peacock backs out of a fight in The Hero?|Mr Humphries|Mr Goldberg|Mr Rumbold|Mr Lucas|Medium|Wilberforce Humphries|Wrestling Match|The Hero|Captain Peacock|Reluctant Fighter|1979 Story|Staff Honour
Which woman ultimately defeats the challenger in The Hero?|Mrs Slocombe|Miss Brahms|Miss Bakewell|Mrs Peacock|Easy|Betty Slocombe|Wrestling Victory|The Hero|Staff Champion|1979 Episode|Unexpected Winner|Department Pride`,
  },
  {
    topic: 'Series Seven: the canteen revolt and Goldberg agency',
    era: '1979',
    facts: `Which workers walk out after the sales staff complain in Anything You Can Do?|The canteen staff|The delivery drivers|The shop window cleaners|The security guards|Easy|Anything You Can Do|Canteen Workers|Staff Walkout|Food Complaints|1979 Episode|Employee Dispute|Workplace Catering
What do the sales staff have to take over in Anything You Can Do?|Preparing canteen meals|Repairing the lifts|Managing the warehouse|Cleaning the windows|Easy|Canteen Cooking|Anything You Can Do|Staff Replacement|Food Preparation|1979 Story|Unfamiliar Duties|Kitchen Work
What complaint sparks the trouble in Anything You Can Do?|Poor food and service|An increase in parking charges|Missing staff uniforms|Shorter shop opening hours|Easy|Poor Canteen Food|Service Complaints|Anything You Can Do|Dining Conditions|1979 Plot|Staff Conflict|Workplace Meals
Which employee secretly runs a second business in The Agent?|Mr Goldberg|Mr Humphries|Mr Harman|Captain Peacock|Easy|Harry Goldberg|Employment Agency|The Agent|Second Business|1979 Episode|Job Recruitment|Menswear Salesman
What kind of business does Mr Goldberg operate in The Agent?|An employment agency|A private investigation office|A travel agency|A bookshop|Medium|Employment Agency|Harry Goldberg|The Agent|Alternative Jobs|Recruitment Service|1979 Plot|Side Venture
Why do colleagues consult Goldberg's agency?|They want better-paid jobs|They are planning a holiday|They need shop insurance|They are organising a wedding|Easy|Higher Wages|Job Search|Employment Agency|The Agent|Staff Dissatisfaction|1979 Story|Career Opportunities
Which two members of staff receive pay rises and remain at Grace Brothers in The Agent?|Mr Humphries and Mrs Slocombe|Mr Lucas and Miss Brahms|Captain Peacock and Mr Harman|Mr Rumbold and Mr Goldberg|Medium|Wilberforce Humphries|Betty Slocombe|Pay Rise|The Agent|Staff Retention|1979 Episode|Better Pay`,
  },
  {
    topic: 'The 1979 Christmas special: Punch and Judy',
    era: 'Christmas 1979',
    facts: `What is the title of the 1979 Christmas special?|The Punch and Judy Affair|Christmas Crackers|Happy Returns|Roots?|Medium|Punch And Judy Affair|1979 Christmas|Special Episode|Episode Title|Grace Brothers|Festive Broadcasting|BBC One
On which date was The Punch and Judy Affair first broadcast?|26 December 1979|24 December 1979|25 December 1980|31 December 1978|Medium|Boxing Day|26 December 1979|Punch And Judy Affair|First Broadcast|Christmas Schedule|BBC Television|Transmission Date
Why do other Grace Brothers workers resent the ladies' and gents' departments?|They crossed a picket line|They closed the canteen|They cancelled a holiday|They refused a charity collection|Easy|Picket Line|Company Strike|Punch And Judy Affair|Staff Resentment|1979 Special|Industrial Dispute|Employee Relations
Who is the children's performance staged to entertain?|Children of striking store employees|Young Mr Grace's grandchildren|A visiting school choir|Children from a local hospital|Easy|Strikers Children|Punch And Judy Show|Employee Families|1979 Christmas|Reconciliation Event|Department Store|Festive Entertainment
Who directs the life-sized Punch and Judy show?|Mr Humphries|Captain Peacock|Mr Goldberg|Mr Rumbold|Medium|Wilberforce Humphries|Show Director|Punch And Judy Affair|Puppet Theatre|Staff Performance|1979 Special|Theatrical Production
Which salesman plays Punch in the staff performance?|Mr Lucas|Mr Goldberg|Mr Humphries|Mr Harman|Medium|Mr Lucas|Punch Character|Punch And Judy Affair|Trevor Bannister|Puppet Show|1979 Christmas|Stage Casting
Who plays Judy opposite Mr Lucas?|Miss Brahms|Mrs Slocombe|Miss Bakewell|Mrs Peacock|Medium|Shirley Brahms|Judy Character|Wendy Richard|Punch And Judy Affair|Stage Pair|1979 Special|Puppet Show
Who plays the policeman in the Punch and Judy show?|Mrs Slocombe|Captain Peacock|Mr Harman|Mr Goldberg|Medium|Betty Slocombe|Policeman Costume|Punch And Judy Affair|Stage Disguise|1979 Episode|Staff Pageant|Comic Casting
Who plays the piano during the performance?|Mr Rumbold|Mr Lucas|Young Mr Grace|Mr Harman|Medium|Cuthbert Rumbold|Piano Accompaniment|Punch And Judy Affair|Christmas Show|1979 Plot|Musical Performance|Stage Production
For which two recurring salesmen is the 1979 Christmas special their final appearance?|Mr Lucas and Mr Goldberg|Mr Humphries and Mr Grainger|Mr Klein and Mr Grossman|Mr Spooner and Mr Tebbs|Medium|Mr Lucas|Harry Goldberg|Final Appearances|1979 Christmas|Cast Departures|Punch And Judy Affair|Series Transition`,
  },
  {
    topic: 'Series Eight: a different staff lineup',
    era: '1981',
    facts: `In which year did Series Eight of Are You Being Served? begin?|1981|1979|1980|1983|Easy|Series Eight|1981 Broadcast|BBC One|Programme Timeline|Return To Television|Early Eighties|Broadcast Year
Which episode introduces the new staff lineup in 1981?|Is It Catching?|Front Page Story|Heir Apparent|Sit Out|Medium|Is It Catching|Series Eight Premiere|April 1981|New Cast|Episode Title|BBC Sitcom|Opening Episode
Which junior salesman replaces Mr Lucas in Series Eight?|Mr Spooner|Mr Goldberg|Mr Tebbs|Mr Klein|Easy|Bert Spooner|Junior Salesman|Mr Lucas Replacement|Series Eight|Menswear Department|1981 Arrival|Cast Change
Which actor plays junior salesman Mr Spooner?|Mike Berry|Alfie Bass|Benny Lee|James Hayter|Medium|Mike Berry|Bert Spooner|Actor|Menswear Junior|1981 Casting|Series Eight|British Television
From which department does Mr Spooner transfer to join menswear?|The paint department|The toy department|The shoe department|The food hall|Medium|Paint Department|Bert Spooner|Staff Transfer|Is It Catching|Series Eight|1981 Story|Department Change
Which senior salesman appears at the start of Series Eight after Mr Goldberg leaves?|Mr Grossman|Mr Tebbs|Mr Grainger|Mr Lucas|Medium|Mr Grossman|Senior Salesman|Menswear|Series Eight|Character Replacement|1981 Cast|Store Hierarchy
Which actor plays Mr Grossman?|Milo Sperber|Benny Lee|Arthur English|Alfie Bass|Medium|Milo Sperber|Mr Grossman|Character Casting|Series Eight|Senior Salesman|1981 BBC|British Actor
Which later senior salesman replaces Mr Grossman during Series Eight?|Mr Klein|Mr Goldberg|Mr Lucas|Mr Harman|Medium|Mr Klein|Menswear Senior|Cast Change|Series Eight|Mr Grossman Replacement|1981 Episode|Department Staff
Who portrays Mr Klein in Series Eight?|Benny Lee|Milo Sperber|James Hayter|Trevor Bannister|Medium|Benny Lee|Mr Klein|Actor Casting|Menswear Senior|Series Eight|1981 Television|Short Lived Character
Which older member of the store-owning family becomes prominent in Series Eight?|Old Mr Grace|Mr Rumbold Senior|Captain Peacock Senior|Mr Goldberg Senior|Easy|Old Mr Grace|Grace Family|Store Leadership|Series Eight|1981 Introduction|Owners|New Character
Who plays Old Mr Grace?|Kenneth Waller|Harold Bennett|Nicholas Smith|Frank Thornton|Medium|Kenneth Waller|Old Mr Grace|British Actor|Store Owner|Series Eight|Character Casting|1981 Debut
Which character is Old Mr Grace's younger brother?|Young Mr Grace|Mr Rumbold|Captain Peacock|Mr Goldberg|Medium|Grace Brothers Family|Young Mr Grace|Old Mr Grace|Sibling Relationship|Store Ownership|1981 Plot|Family Business`,
  },
  {
    topic: 'Series Eight: quarantine, jealousy and a newspaper',
    era: '1981',
    facts: `What rare illness does Mr Humphries contract in Is It Catching?|Marine's Disease|Malaria|Scarlet fever|Chickenpox|Medium|Marines Disease|Wilberforce Humphries|Is It Catching|Rare Illness|1981 Episode|Infection Scare|Medical Plot
Where are the employees quarantined in Is It Catching?|The store basement|A local hotel|The roof garden|A hospital ward|Easy|Basement Quarantine|Is It Catching|Infection Control|Grace Brothers|1981 Story|Staff Isolation|Medical Emergency
Whose first day at the department is disrupted by the quarantine?|Mr Spooner's|Mr Goldberg's|Mr Tebbs's|Mr Mash's|Medium|Bert Spooner|First Day|Is It Catching|New Junior|Quarantine|1981 Premiere|Menswear
Whose wife takes a job as Mr Rumbold's secretary in A Personal Problem?|Captain Peacock's|Mr Humphries's|Mr Harman's|Mr Goldberg's|Easy|Mrs Peacock|Cuthbert Rumbold|Secretary Position|A Personal Problem|Marriage|1981 Episode|Staff Jealousy
What does Captain Peacock suspect about his wife and Mr Rumbold?|They are having an affair|They are planning a holiday|They are buying a house|They are opening a shop|Easy|Captain Peacock|Mrs Peacock|Suspected Affair|Mr Rumbold|A Personal Problem|1981 Plot|Marital Jealousy
What new publication is launched at Grace Brothers in Front Page Story?|A staff newspaper|A fashion catalogue|A customer directory|A price comparison booklet|Easy|Staff Newspaper|Front Page Story|Internal Press|Grace Brothers|1981 Episode|Workplace Journalism|Editorial Project
Who becomes editor of the new staff newspaper?|Mr Humphries|Mr Spooner|Mr Harman|Miss Brahms|Easy|Wilberforce Humphries|Newspaper Editor|Front Page Story|Journalism|1981 Story|Staff Publication|John Inman
How much is the bonus the staff believe was promised but never paid?|Six hundred pounds|One hundred pounds|Two hundred pounds|One thousand pounds|Medium|Six Hundred Pounds|Missing Bonus|Front Page Story|Staff Investigation|Unpaid Reward|1981 Plot|Employee Grievance`,
  },
  {
    topic: 'Series Eight: the roof protest and an unexpected heir',
    era: '1981',
    facts: `Which episode features a rooftop protest by the Grace Brothers sales staff?|Sit Out|The Apartment|The Hero|A Personal Problem|Easy|Sit Out|Rooftop Protest|Series Eight|1981 Episode|Industrial Action|Staff Rebellion|Grace Brothers
What percentage pay cut is threatened in Sit Out?|Ten per cent|Five per cent|Fifteen per cent|Twenty per cent|Medium|Ten Per Cent|Pay Cut|Sit Out|Low Sales|Management Threat|1981 Story|Wage Dispute
Which alternative to the pay cut do management threaten in Sit Out?|Moving the departments to the bargain basement|Cutting shop opening hours|Closing the canteen|Replacing the uniforms|Medium|Bargain Basement|Department Relocation|Sit Out|Sales Performance|Store Management|1981 Episode|Workplace Conflict
Where do the employees stage their sit-out protest?|On the store roof|In the lift|In the stockroom|Outside the front doors|Easy|Store Roof|Sit Out|Staff Protest|Grace Brothers|Industrial Action|1981 Plot|Rooftop Demonstration
Which Grace family member suspects Mr Humphries is his long-lost son?|Old Mr Grace|Young Mr Grace|Mr Rumbold|Captain Peacock|Easy|Old Mr Grace|Wilberforce Humphries|Lost Son|Heir Apparent|1981 Episode|Family Mystery|Store Inheritance
What sparks the suspicion about Mr Humphries's parentage in Heir Apparent?|A photograph of his mother|A mislaid birth certificate|A letter in the post|A newspaper article|Medium|Mothers Photograph|Mr Humphries|Old Mr Grace|Heir Apparent|Family Resemblance|1981 Story|Mistaken Parentage
Which episode centres on whether Mr Humphries might inherit the department store?|Heir Apparent|Closed Circuit|The Agent|The Junior|Medium|Heir Apparent|Possible Inheritance|Wilberforce Humphries|Old Mr Grace|Grace Brothers Ownership|1981 Story|Family Connection`,
  },
  {
    topic: 'Series Eight: shop-floor television and Mrs Slocombe dreams',
    era: '1981',
    facts: `What technology is used to advertise special offers in Closed Circuit?|Closed-circuit television|Telephone answering machines|Radio pagers|Electronic tills|Easy|Closed Circuit|CCTV Advertising|Special Offers|Store Promotions|1981 Episode|Retail Video|Shop Floor
Whose voice is dubbed over Miss Brahms in the Closed Circuit advertisement?|Old Mr Grace's nurse|Mrs Slocombe|Miss Bakewell|Mrs Peacock|Medium|Grace Nurse|Miss Brahms|Dubbed Voice|Closed Circuit|Video Advertisement|1981 Story|Promotional Film
Who becomes attracted to Miss Brahms after hearing her dubbed voice?|A lord|A pop singer|A visiting admiral|An American businessman|Medium|Lord Suitor|Shirley Brahms|Dubbed Commercial|Closed Circuit|1981 Plot|Unexpected Admirer|Social Status
Which new senior salesman joins during the latter part of Series Eight?|Mr Klein|Mr Goldberg|Mr Tebbs|Mr Grainger|Medium|Mr Klein|Senior Menswear|Benny Lee|Series Eight|Mid Series Arrival|1981 Cast|Character Debut
Which character is at the centre of The Erotic Dreams of Mrs Slocombe?|Mrs Slocombe|Miss Brahms|Mrs Peacock|Old Mr Grace|Easy|Betty Slocombe|Erotic Dreams|Series Eight|1981 Episode|Uncomfortable Attraction|Dream Sequences|Mollie Sugden
About which fellow employee does Mrs Slocombe have romantic dreams?|Mr Humphries|Captain Peacock|Mr Spooner|Mr Harman|Easy|Wilberforce Humphries|Betty Slocombe|Romantic Dreams|The Erotic Dreams Of Mrs Slocombe|1981 Story|Awkward Colleagues|Menswear Assistant
What makes Mrs Slocombe's dreams a problem at work?|She behaves awkwardly towards Mr Humphries|She resigns from the store|She refuses to serve customers|She demands a transfer to the office|Medium|Mrs Slocombe|Dream Aftermath|Mr Humphries|Uncomfortable Behaviour|1981 Plot|Workplace Tension|Comic Romance`,
  },
  {
    topic: 'Christmas 1981: Roots? and the Grace family',
    era: 'Christmas 1981',
    facts: `What is the title of the 1981 Are You Being Served? Christmas special?|Roots?|Christmas Crackers|Happy Returns|The Punch and Judy Affair|Medium|Roots|1981 Christmas|Festive Special|Episode Title|Grace Brothers|Family History|BBC One
On which date was Roots? first broadcast?|24 December 1981|26 December 1979|25 December 1980|31 December 1981|Medium|Christmas Eve|24 December 1981|Roots|First Broadcast|Festive Schedule|1981 Television|Episode Date
Whose ninetieth birthday prompts the celebrations in Roots?|Old Mr Grace's|Young Mr Grace's|Mr Rumbold's|Captain Peacock's|Easy|Old Mr Grace|Ninetieth Birthday|Roots|Family Celebration|1981 Special|Store Owner|Birthday Pageant
What aspect of the Grace family do the staff investigate in Roots?|Their ancestry|Their business debts|Their property portfolio|Their holiday plans|Easy|Family Ancestry|Genealogy|Grace Family Tree|Roots|1981 Special|Historical Research|Birthday Tribute
What type of performance do employees prepare for the birthday in Roots?|A pageant about the Grace family|A magic show|A ballroom competition|A modern rock concert|Easy|Family Pageant|Grace Ancestry|Roots|Birthday Entertainment|1981 Christmas|Staff Performance|Historical Scenes
What is the first name of Mr Rumbold's brother who researches the family tree?|Mycroft|Percival|Wilberforce|Stephen|Medium|Mycroft Rumbold|Genealogist|Roots|Rumbold Family|1981 Special|Family Historian|Character First Name
Which actor plays both Mr Rumbold and his brother Mycroft in Roots?|Nicholas Smith|Frank Thornton|Kenneth Waller|John Inman|Medium|Nicholas Smith|Double Role|Cuthbert Rumbold|Mycroft Rumbold|Roots|1981 Casting|BBC Sitcom
Which British nation is one stop in the search for Grace family ancestors?|Wales|Northern Ireland|Isle of Man|Channel Islands|Medium|Wales|Genealogy Trail|Roots|Grace Family|1981 Plot|Historical Pageant|British Ancestry
Which region of England is visited in the supposed Grace family history?|Somerset|Kent|Lancashire|Norfolk|Medium|Somerset|Family Roots|Genealogical Research|Roots|1981 Special|English Ancestry|West Country
Which continent features in the most unexpected part of the Grace family ancestry?|Africa|South America|Australia|Antarctica|Medium|Africa|Grace Family Roots|Genealogical Surprise|Roots|1981 Episode|Ancestry Search|Historical Family
Which American miniseries inspired the title of the 1981 Christmas special?|Roots|Holocaust|Shogun|The Thorn Birds|Medium|Roots Miniseries|Alex Haley|Television Reference|1981 Christmas|Historical Drama|Title Parody|BBC Comedy`,
  },
];

const FIRST_ID = 13828;
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

const EXPECTED_COUNT = 87;
if (questions.length !== EXPECTED_COUNT) {
  throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
}
if (questions[0].id !== 'tv_13828' || questions[questions.length - 1].id !== 'tv_13914') {
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


// 21 November 2026: Series 7–8 (1979–1981) editorial audit.
// All 87 original IDs tv_13828–tv_13914 retained.
// 26 additions: tv_36230–tv_36255.
// Factual references: British Comedy Guide original episode cast & crew and notes;
// Mike Berry background via The Guardian and British Comedy Guide.
// https://www.comedy.co.uk/tv/are_you_being_served/cast_crew/full/
// https://www.comedy.co.uk/tv/are_you_being_served/episodes/7/
// https://www.comedy.co.uk/tv/are_you_being_served/episodes/8/
// https://www.comedy.co.uk/tv/are_you_being_served/episodes/8/6/
// https://www.theguardian.com/music/2025/apr/16/mike-berry-obituary
const auditAdditions = [
  {
    "id": "tv_36230",
    "category": "Television",
    "question": "Who directed five episodes of Are You Being Served? Series 7 in 1979?",
    "answers": [
      "Gordon Elsbury",
      "John Kilby",
      "Ray Butt",
      "Bob Spiers"
    ],
    "correctAnswer": "Gordon Elsbury",
    "difficulty": "Hard",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 7 (1979)",
      "Series 7",
      "Fact category: Five-episode director",
      "Character or production context: 1979 studio direction",
      "Correct answer: Gordon Elsbury",
      "Evidence: British Comedy Guide full crew",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36231",
    "category": "Television",
    "question": "Which Are You Being Served? co-creator directed the Series 7 opener The Junior?",
    "answers": [
      "Jeremy Lloyd",
      "David Croft",
      "John Chapman",
      "Harold Snoad"
    ],
    "correctAnswer": "David Croft",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 7 (1979)",
      "Series 7",
      "Fact category: Director of The Junior",
      "Character or production context: 1979 opening episode",
      "Correct answer: David Croft",
      "Evidence: British Comedy Guide episode 7.01",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36232",
    "category": "Television",
    "question": "Which production designer was responsible for Are You Being Served? Series 7?",
    "answers": [
      "Andrée Welstead Hornby",
      "John Stout",
      "Garry Freeman",
      "Antony Thorpe"
    ],
    "correctAnswer": "Garry Freeman",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 7 (1979)",
      "Series 7",
      "Fact category: 1979 production designer",
      "Character or production context: Seventh-series sets",
      "Correct answer: Garry Freeman",
      "Evidence: British Comedy Guide full crew",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36233",
    "category": "Television",
    "question": "Which actress played the cleaner Ivy in Are You Being Served?'s Series 7 premiere The Junior?",
    "answers": [
      "Doremy Vernon",
      "Amanda Barrie",
      "Diana King",
      "Hilda Fenemore"
    ],
    "correctAnswer": "Hilda Fenemore",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 7 (1979)",
      "Series 7, The Junior",
      "Fact category: Cleaner Ivy casting",
      "Character or production context: New men's counter staff",
      "Correct answer: Hilda Fenemore",
      "Evidence: British Comedy Guide episode 7.01",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36234",
    "category": "Television",
    "question": "Which future Coronation Street star played the ballet mistress in Are You Being Served?'s Strong Stuff This Insurance?",
    "answers": [
      "Amanda Barrie",
      "Sue Nicholls",
      "Helen Worth",
      "Barbara Knox"
    ],
    "correctAnswer": "Amanda Barrie",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 7 (1979)",
      "Series 7, Strong Stuff This Insurance",
      "Fact category: Ballet mistress guest actress",
      "Character or production context: Exercise before medicals",
      "Correct answer: Amanda Barrie",
      "Evidence: British Comedy Guide episode 7.02",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36235",
    "category": "Television",
    "question": "Which later Hi-de-Hi! star appeared as a blazer customer in Are You Being Served?'s The Apartment?",
    "answers": [
      "Paul Shane",
      "Jeffrey Holland",
      "Barry Howard",
      "Felix Bowness"
    ],
    "correctAnswer": "Jeffrey Holland",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 7 (1979)",
      "Series 7, The Apartment",
      "Fact category: Blazer customer guest actor",
      "Character or production context: Series 7 department-store customer",
      "Correct answer: Jeffrey Holland",
      "Evidence: British Comedy Guide episode 7.03",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36236",
    "category": "Television",
    "question": "Which professional wrestler played Mr Franco in Are You Being Served?'s The Hero?",
    "answers": [
      "Mick McManus",
      "Kendo Nagasaki",
      "Jackie Pallo",
      "Big Daddy"
    ],
    "correctAnswer": "Jackie Pallo",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 7 (1979)",
      "Series 7, The Hero",
      "Fact category: Wrestler in the guest cast",
      "Character or production context: Challenge to Captain Peacock",
      "Correct answer: Jackie Pallo",
      "Evidence: British Comedy Guide episode 7.05",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36237",
    "category": "Television",
    "question": "Which actor played Signor Balli in Are You Being Served?'s Anything You Can Do?",
    "answers": [
      "Gorden Kaye",
      "Jeffrey Holland",
      "Jack Haig",
      "Ronnie Brody"
    ],
    "correctAnswer": "Ronnie Brody",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 7 (1979)",
      "Series 7, Anything You Can Do",
      "Fact category: Signor Balli guest performer",
      "Character or production context: Canteen staff dispute",
      "Correct answer: Ronnie Brody",
      "Evidence: British Comedy Guide episode 7.06",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36238",
    "category": "Television",
    "question": "Who played the visitor Mr Patel in Are You Being Served?'s The Agent?",
    "answers": [
      "Renu Setna",
      "Nadim Sawalha",
      "Milo Sperber",
      "Ahmed Osman"
    ],
    "correctAnswer": "Renu Setna",
    "difficulty": "Hard",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 7 (1979)",
      "Series 7, The Agent",
      "Fact category: Mr Patel actor",
      "Character or production context: Mr Goldberg's agency episode",
      "Correct answer: Renu Setna",
      "Evidence: British Comedy Guide episode 7.07",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36239",
    "category": "Television",
    "question": "What two colours appear together in Mrs Slocombe's hair in Are You Being Served?'s The Punch and Judy Affair?",
    "answers": [
      "Red and white",
      "Pink and purple",
      "Green and yellow",
      "Blue and orange"
    ],
    "correctAnswer": "Pink and purple",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 7 (1979)",
      "Series 7 Christmas special",
      "Fact category: Costume and hair continuity",
      "Character or production context: 1979 Christmas special",
      "Correct answer: Pink and purple",
      "Evidence: British Comedy Guide 7.08 notes",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36240",
    "category": "Television",
    "question": "Which hit by singer Mike Berry, later Mr Spooner in Are You Being Served?, paid tribute to a US rock-and-roll star?",
    "answers": [
      "Rock Around the Clock",
      "That'll Be the Day",
      "A Tribute to Buddy Holly",
      "Peggy Sue"
    ],
    "correctAnswer": "A Tribute to Buddy Holly",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 8 (1981)",
      "Series 8, Mr Spooner",
      "Fact category: Mike Berry's recording career",
      "Character or production context: 1961 pop single",
      "Correct answer: A Tribute to Buddy Holly",
      "Evidence: British Comedy Guide Mike Berry obituary",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36241",
    "category": "Television",
    "question": "Which role did future Are You Being Served? actor Mike Berry play in the 1979 Worzel Gummidge series?",
    "answers": [
      "The Crowman",
      "Aunt Sally",
      "Mr Braithwaite",
      "Mr Peters"
    ],
    "correctAnswer": "Mr Peters",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 8 (1981)",
      "Series 8, Mr Spooner",
      "Fact category: Mike Berry's earlier children's TV character",
      "Character or production context: Worzel Gummidge prior role",
      "Correct answer: Mr Peters",
      "Evidence: British Comedy Guide and Guardian",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36242",
    "category": "Television",
    "question": "Which Doctor Who actor reportedly recommended Mike Berry for the role of Mr Spooner in Are You Being Served??",
    "answers": [
      "Jon Pertwee",
      "Tom Baker",
      "Patrick Troughton",
      "Peter Davison"
    ],
    "correctAnswer": "Jon Pertwee",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 8 (1981)",
      "Series 8, Mr Spooner",
      "Fact category: Recommendation for casting",
      "Character or production context: Worzel Gummidge colleague",
      "Correct answer: Jon Pertwee",
      "Evidence: The Guardian Mike Berry obituary",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36243",
    "category": "Television",
    "question": "Which Mike Berry recording reached the UK Top 10 in 1980 shortly before his Are You Being Served? debut?",
    "answers": [
      "The Last Waltz",
      "The Sunshine of Your Smile",
      "I Remember You",
      "When I Fall in Love"
    ],
    "correctAnswer": "The Sunshine of Your Smile",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 8 (1981)",
      "Series 8, Mr Spooner",
      "Fact category: Mike Berry hit recording",
      "Character or production context: 1980 British chart appearance",
      "Correct answer: The Sunshine of Your Smile",
      "Evidence: The Guardian Mike Berry obituary",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36244",
    "category": "Television",
    "question": "Who directed all eight episodes of Are You Being Served? Series 8, including the Christmas special?",
    "answers": [
      "Gordon Elsbury",
      "David Croft",
      "John Kilby",
      "Ray Butt"
    ],
    "correctAnswer": "John Kilby",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 8 (1981)",
      "Series 8 production",
      "Fact category: 1981 director",
      "Character or production context: Entire eighth-series run",
      "Correct answer: John Kilby",
      "Evidence: British Comedy Guide full crew",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36245",
    "category": "Television",
    "question": "Who designed the sets for the regular episodes of Are You Being Served? Series 8?",
    "answers": [
      "Garry Freeman",
      "Paul Munting",
      "John Stout",
      "Andrée Welstead Hornby"
    ],
    "correctAnswer": "Andrée Welstead Hornby",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 8 (1981)",
      "Series 8 production",
      "Fact category: 1981 production designer",
      "Character or production context: Grace Brothers 1981 sets",
      "Correct answer: Andrée Welstead Hornby",
      "Evidence: British Comedy Guide full crew",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36246",
    "category": "Television",
    "question": "Which editor worked on four episodes of Are You Being Served? Series 8?",
    "answers": [
      "Ken Pimenta",
      "Mike Taylor",
      "Mykola Pawluk",
      "Dave Hambelton"
    ],
    "correctAnswer": "Ken Pimenta",
    "difficulty": "Hard",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 8 (1981)",
      "Series 8 production",
      "Fact category: 1981 television editor",
      "Character or production context: Four eighth-series credits",
      "Correct answer: Ken Pimenta",
      "Evidence: British Comedy Guide full crew",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36247",
    "category": "Television",
    "question": "Which actor who would play airman Fairfax in 'Allo 'Allo! appeared as the doctor in Are You Being Served?'s Is It Catching??",
    "answers": [
      "Nicholas Frankau",
      "John D. Collins",
      "Guy Siner",
      "Sam Kelly"
    ],
    "correctAnswer": "John D. Collins",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 8 (1981)",
      "Series 8, Is It Catching?",
      "Fact category: Doctor guest actor",
      "Character or production context: Early appearance before wartime sitcom",
      "Correct answer: John D. Collins",
      "Evidence: British Comedy Guide 8.01 cast",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36248",
    "category": "Television",
    "question": "Which actress portrays Mrs Peacock in Are You Being Served?'s A Personal Problem?",
    "answers": [
      "Diana Lambert",
      "Mollie Sugden",
      "Diana King",
      "Doremy Vernon"
    ],
    "correctAnswer": "Diana King",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 8 (1981)",
      "Series 8, A Personal Problem",
      "Fact category: Captain Peacock's wife guest actor",
      "Character or production context: 1981 office-affair subplot",
      "Correct answer: Diana King",
      "Evidence: British Comedy Guide 8.02 cast",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36249",
    "category": "Television",
    "question": "Which later 'Allo 'Allo! actor appeared as a tramp in Are You Being Served?'s A Personal Problem?",
    "answers": [
      "Gorden Kaye",
      "Arthur Bostrom",
      "Kenneth Connor",
      "Jack Haig"
    ],
    "correctAnswer": "Jack Haig",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 8 (1981)",
      "Series 8, A Personal Problem",
      "Fact category: Tramp guest actor",
      "Character or production context: Before playing Monsieur LeClerc",
      "Correct answer: Jack Haig",
      "Evidence: British Comedy Guide 8.02 cast",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36250",
    "category": "Television",
    "question": "Who played Mr Fortescue in the Are You Being Served? episode Closed Circuit before starring in 'Allo 'Allo!?",
    "answers": [
      "Gorden Kaye",
      "Richard Gibson",
      "David Janson",
      "Sam Kelly"
    ],
    "correctAnswer": "Gorden Kaye",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 8 (1981)",
      "Series 8, Closed Circuit",
      "Fact category: Mr Fortescue guest role",
      "Character or production context: Gorden Kaye's second appearance in the sitcom",
      "Correct answer: Gorden Kaye",
      "Evidence: British Comedy Guide 8.06 cast",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36251",
    "category": "Television",
    "question": "What is the title of the aristocrat attracted to Miss Brahms's dubbed voice in Are You Being Served?'s Closed Circuit?",
    "answers": [
      "Lord Melbury",
      "Lord Hirly",
      "Lord Emsworth",
      "Lord Grantham"
    ],
    "correctAnswer": "Lord Hirly",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 8 (1981)",
      "Series 8, Closed Circuit",
      "Fact category: Aristocrat character name",
      "Character or production context: Voice-dubbed CCTV promotion",
      "Correct answer: Lord Hirly",
      "Evidence: British Comedy Guide 8.06 cast",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36252",
    "category": "Television",
    "question": "Which actress plays Young Mr Grace's nurse, whose voice is used for the advertisement in Are You Being Served??",
    "answers": [
      "Penny Irving",
      "Louise Burton",
      "Vivienne Johnson",
      "Diana King"
    ],
    "correctAnswer": "Vivienne Johnson",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 8 (1981)",
      "Series 8, Closed Circuit",
      "Fact category: Nurse's casting",
      "Character or production context: Advertising voice substitution",
      "Correct answer: Vivienne Johnson",
      "Evidence: British Comedy Guide Series 8 cast",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36253",
    "category": "Television",
    "question": "Which Are You Being Served? Christmas special was Harold Bennett's final appearance as Young Mr Grace?",
    "answers": [
      "Happy Returns",
      "Christmas Crackers",
      "The Punch and Judy Affair",
      "Roots?"
    ],
    "correctAnswer": "Roots?",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 8 (1981)",
      "Series 8 Christmas special",
      "Fact category: Harold Bennett's final episode",
      "Character or production context: 1981 special later broadcast posthumously",
      "Correct answer: Roots?",
      "Evidence: British Comedy Guide Harold Bennett credits",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36254",
    "category": "Television",
    "question": "Which editor worked on the Are You Being Served? Christmas special Roots??",
    "answers": [
      "Mike Taylor",
      "Ken Pimenta",
      "Phil Southby",
      "Mykola Pawluk"
    ],
    "correctAnswer": "Mike Taylor",
    "difficulty": "Hard",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 8 (1981)",
      "Series 8 Christmas special",
      "Fact category: 1981 Christmas episode editor",
      "Character or production context: Festive special production crew",
      "Correct answer: Mike Taylor",
      "Evidence: British Comedy Guide 8.08 crew",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36255",
    "category": "Television",
    "question": "Who played the secretary in Are You Being Served?'s Christmas special Roots??",
    "answers": [
      "Penny Irving",
      "Louise Burton",
      "Diana King",
      "Amanda Barrie"
    ],
    "correctAnswer": "Louise Burton",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "Grace Brothers",
      "British Television",
      "BBC One",
      "British Sitcom",
      "1970s and 1980s Television",
      "Jeremy Lloyd",
      "David Croft",
      "Retail Comedy",
      "Classic British Sitcom",
      "Series 8 (1981)",
      "Series 8 Christmas special",
      "Fact category: 1981 special's secretary actress",
      "Character or production context: Roots? guest cast",
      "Correct answer: Louise Burton",
      "Evidence: British Comedy Guide 8.08 credits",
      "UK English",
      "Question trivia",
      "Original BBC broadcast",
      "1979–1981 historical production",
      "November 2026 editorial audit"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==113||
 new Set(questions.map(q=>q.id)).size!==questions.length||
 new Set(questions.map(q=>q.question.trim().toLowerCase())).size!==questions.length||
 questions.some(q=>q.answers.length!==4||
 new Set(q.answers.map(a=>a.trim().toLowerCase())).size!==4||
 q.answers.filter(a=>a===q.correctAnswer).length!==1||
 q.tags.length<15||!q.tags.includes('Are You Being Served?')||q.dailyEligible!==true)||
 auditAdditions.some(q=>q.tags.length<18||!q.question.includes('Are You Being Served?')))
 throw Error('Pack 313 audit check failed');

module.exports = questions;
