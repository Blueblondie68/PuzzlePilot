
 // quiz_pack326.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: Derry Girls (2018-2022) and The Inbetweeners (2008-2010).
 // Derry Girls: all three series, including The Agreement finale.
 // The Inbetweeners: original 18 television episodes only; films not covered.
 // Format: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven bespoke tags.
 // Each exported question has independent programme metadata and search tags.

 const groups = [
   {
     programme: 'Derry Girls', era: '2018-2022 complete series', broadcaster: 'Channel 4',
     topic: 'Derry Girls television sitcom, school friends and family during the Troubles',
     facts: `Who created and wrote the television comedy Derry Girls?|Lisa McGee|Sharon Horgan|Sally Wainwright|Phoebe Waller-Bridge|Easy|Lisa McGee|Programme Creator|Northern Irish Writer|Television Scripts|Creative Credits|Original Comedy|Writer
 Which actress played the ambitious teenager Erin Quinn?|Saoirse-Monica Jackson|Nicola Coughlan|Louisa Harland|Jamie-Lee O'Donnell|Easy|Saoirse Monica Jackson|Erin Quinn|Lead Character|Main Actress|Teenage Writer|Quinn Family|Casting
 Which actress portrayed the outspoken Michelle Mallon?|Jamie-Lee O'Donnell|Saoirse-Monica Jackson|Leah O'Rourke|Louisa Harland|Easy|Jamie Lee ODonnell|Michelle Mallon|Main Cast|Outspoken Friend|Mallon Family|Character Casting|Derry Teenagers
 Who played studious and anxious Clare Devlin?|Nicola Coughlan|Louisa Harland|Kathy Kiera Clarke|Leah O'Rourke|Easy|Nicola Coughlan|Clare Devlin|Student Character|Main Actress|Academic Anxiety|Character Casting|School Friends
 Which actress played Erin's eccentric cousin Orla McCool?|Louisa Harland|Nicola Coughlan|Tara Lynne O'Neill|Siobhán McSweeney|Easy|Louisa Harland|Orla McCool|Cousin|McCool Family|Quirky Teenager|Casting|School Friends
 Which actor portrayed the English teenager James Maguire?|Dylan Llewellyn|Tommy Tiernan|Anthony Boyle|Jamie Beamish|Easy|Dylan Llewellyn|James Maguire|English Fella|Cousin Of Michelle|Boys School|Casting|Teenage Outsider
 Who portrayed the formidable school headmistress Sister Michael?|Siobhán McSweeney|Kathy Kiera Clarke|Tara Lynne O'Neill|Leah O'Rourke|Easy|Siobhan McSweeney|Sister Michael|Headmistress|Catholic School|Nun|Character Casting|School Discipline
 Which actress played Erin's mother Mary Quinn?|Tara Lynne O'Neill|Kathy Kiera Clarke|Siobhán McSweeney|Amelia Crowley|Medium|Tara Lynne ONeill|Mary Quinn|Ma Mary|Family Matriarch|Erin Mother|Actress Casting|Quinn Household
 Who played Erin's father Gerry Quinn?|Tommy Tiernan|Ian McElhinney|Kevin McAleer|Ardal O'Hanlon|Medium|Tommy Tiernan|Gerry Quinn|Da Gerry|Family Father|Irish Comedian|Actor Casting|Quinn Household
 Which actor played Erin's grumpy grandfather Joe McCool?|Ian McElhinney|Tommy Tiernan|Kevin McAleer|Peter Campion|Medium|Ian McElhinney|Joe McCool|Granda Joe|Family Grandfather|Gerry Conflict|Actor Casting|McCool Family
 Which actress played Orla's mother and Mary's sister Sarah?|Kathy Kiera Clarke|Tara Lynne O'Neill|Leah O'Rourke|Siobhán McSweeney|Medium|Kathy Kiera Clarke|Sarah McCool|Aunt Sarah|Orla Mother|Mary Sister|Actor Casting|Quinn Family
 Who played the girls' self-important school rival Jenny Joyce?|Leah O'Rourke|Nicola Coughlan|Diona Doherty|Amelia Crowley|Medium|Leah ORourke|Jenny Joyce|School Rival|Fundraising Events|Student Leader|Casting|Classmate
 What is the name of the Catholic school attended by Erin and her friends?|Our Lady Immaculate College|Rudge Park Comprehensive|Holy Cross Grammar|St Brendan's College|Easy|Our Lady Immaculate|School Setting|Sister Michael|Catholic Education|Derry School|Student Life|Programme Location
 In which Northern Irish city is the sitcom set?|Derry|Belfast|Newry|Armagh|Easy|Derry Setting|Northern Ireland|Programme Location|Nineties City|The Troubles|Local Community|Historic Setting
 Which conflict forms the historical background to the teenagers' adventures?|The Troubles|The Falklands War|The Gulf War|The English Civil War|Easy|The Troubles|Northern Irish History|1990s Conflict|Political Tension|Historical Setting|Peace Process|Community Life
 Why does English teenager James attend the girls' school?|His English accent could put him at risk at the boys' school|He has been elected head boy|His father teaches at the girls' school|He is studying for a scholarship overseas|Medium|James Maguire|English Accent|School Admission|Outsider Experience|Safety Concern|Boys School|Our Lady Immaculate
 How is James Maguire related to Michelle Mallon?|He is her cousin|He is her brother|He is her stepfather|He is her uncle|Easy|Michelle Mallon|James Maguire|Cousins|Family Relationship|Teenage Gang|English Fella|Mallon Family
 What is Erin Quinn's relationship to Orla McCool?|They are cousins|They are sisters|They are stepsisters|They are neighbours only|Easy|Erin Quinn|Orla McCool|Cousins|Mary And Sarah|Family Connection|Teenage Girls|Quinn McCool Family
 Who is found reading Erin's diary in the opening episode?|Orla McCool|Clare Devlin|Michelle Mallon|Jenny Joyce|Medium|Orla McCool|Erins Diary|2018 Pilot|Privacy Invasion|Family Comedy|Episode One|Teenage Conflict
 Which family member announces a bomb on the bridge in the first episode?|Granda Joe|Da Gerry|Uncle Colm|Father Peter|Medium|Joe McCool|Bridge Bomb|First Episode|Family Announcement|The Troubles|Derry Travel|2018 Opening
 Which European capital is the planned school-trip destination in the first series?|Paris|Rome|Vienna|Madrid|Medium|School Trip|Paris|Series One Episode Two|France|Sister Michael|Pupil Excitement|Travel Plans
 Which priest attracts the girls' attention as they seek to avoid a big exam in series one?|Father Peter|Father Ted|Father Conway|Father Jack|Medium|Father Peter|School Examination|Series One Episode Three|Priest|Teenagers Scheme|Exam Avoidance|2018 Storyline
 From which country does visiting teenager Katya arrive in series one?|Ukraine|Poland|Latvia|Romania|Medium|Katya|Children Of Chernobyl|Ukraine|Host Family|Series One Episode Four|Quinn Home|Eastern European Visitor
 During which annual event does the Quinn family try to leave Derry in series one?|The Orange parades|St Patrick's Day celebrations|The Belfast Marathon|A Christmas market|Medium|Orange Parades|Twelfth Of July|Series One Episode Five|Family Journey|Northern Irish Traditions|Holiday Escape|Road Trip
 Which student becomes editor of the school magazine in the first-series finale?|Erin Quinn|Michelle Mallon|Clare Devlin|Orla McCool|Medium|Erin Quinn|School Magazine|Student Editor|First Series Finale|Writing Ambitions|Student Journalism|School Stories
 Which friend comes out as lesbian during the first series?|Clare Devlin|Jenny Joyce|Orla McCool|Michelle Mallon|Medium|Clare Devlin|Coming Out|Sexual Identity Storyline|Series One|School Magazine|Friendship|Character Development
 What type of event brings Catholic and Protestant pupils together at the start of series two?|An outdoor pursuits weekend|A national debating final|A theatre competition|A school exchange to London|Medium|Outdoor Pursuits|Peace Initiative|Series Two Opener|Protestant Pupils|Catholic Pupils|Cross Community|School Trip
 Which new teacher inspires the group during the second series?|Ms De Brún|Miss Mooney|Mrs McCluskey|Ms Taylor|Hard|Ms De Brun|English Teacher|Series Two Episode Two|Classroom Inspiration|Literature|New Teacher|School Staff
 What religious ornament falls under Sister Michael's care in the second series?|A Child of Prague statue|A silver chalice|A wooden rosary|A brass crucifix|Medium|Child Of Prague|Sister Michael|Religious Statue|Series Two|Sacred Object|School Responsibility|Catholic Tradition
 Which boy band are the friends determined to see in Belfast during series two?|Take That|Westlife|Boyzone|East 17|Easy|Take That|Belfast Concert|Series Two Episode Three|Pop Music|Forbidden Trip|Nineties Music|Teenage Fans
 In which Northern Irish city is the concert the friends try to attend in series two?|Belfast|Lisburn|Newry|Bangor|Medium|Belfast|Take That Concert|Series Two Episode Three|Concert Journey|Bus Travel|Pop Fans|Northern Ireland
 Which school event does Jenny Joyce organise in the second series with a 1950s theme?|A prom|A science fair|A school sports day|A spelling bee|Medium|Jenny Joyce|Fifties Prom|Series Two Episode Five|School Dance|Formal Event|Student Organiser|Fundraiser
 Which family member does Orla take as her date to the school prom?|Granda Joe|Da Gerry|Uncle Colm|Father Peter|Medium|Orla McCool|Joe McCool|School Prom|Family Date|Series Two|Grandfather Bond|Unusual Companion
 Which American president's visit excites Derry near the end of series two?|Bill Clinton|George H. W. Bush|Ronald Reagan|Jimmy Carter|Easy|Bill Clinton|Presidential Visit|Series Two Finale|Peace Process|Derry History|American President|1990s Northern Ireland
 In which year was Derry Girls' second series first broadcast?|2019|2017|2020|2021|Easy|2019 Broadcast|Second Series|Channel 4|Broadcast History|Show Timeline|Northern Irish Comedy|Programme Run
 What results are the friends nervously awaiting at the start of series three?|Their GCSE results|Their university degrees|Their driving tests|Their A-level results|Medium|GCSE Results|Series Three Premiere|Exam Anxiety|School Qualifications|Teenage Worries|2022 Return|Education
 What school event does Jenny Joyce plan during the second episode of series three?|A fundraising talent show|A charity football match|A drama workshop|A Christmas carol service|Medium|Jenny Joyce|Talent Show|Series Three Episode Two|School Fundraising|Student Competition|2022 Episodes|Performance
 Which seaside attraction is the family travelling to visit in series three's train episode?|Barry's Amusements in Portrush|Blackpool Pleasure Beach|Tayto Park|Alton Towers|Medium|Barrys Amusements|Portrush|Series Three Episode Three|Train Journey|Quinn Family|Seaside Attraction|Holiday Day Trip
 To which county does James drive the friends for an adult-free house party in series three?|Donegal|Antrim|Down|Fermanagh|Medium|County Donegal|House Party|Series Three Episode Four|James Driving|Cross Border Journey|Friends Away|Ireland Setting
 Which type of visitor do the Quinns consult while the friends are away in series three?|A psychic|A private detective|An estate agent|A marriage counsellor|Medium|Carlos Santini|Psychic|Series Three Episode Four|Spirit Contact|Quinn Family|Supernatural Comedy|Family Visit
 Which two adults revisit their schooldays at a class reunion in series three?|Mary and Sarah|Gerry and Joe|Michelle and Clare|James and Jenny|Medium|Mary Quinn|Sarah McCool|School Reunion|Class Of 1977|Series Three Episode Five|Family Flashback|Old Friendships
 Which DJ are the friends thrilled to see at their Halloween concert in series three?|Fatboy Slim|Paul Oakenfold|Pete Tong|Norman Jay|Medium|Fatboy Slim|Halloween Concert|Series Three Episode Six|Dance Music|1990s Club Culture|Pop Star|Music Event
 Which famous actor appears as a senior police officer in the final series?|Liam Neeson|Colin Farrell|Cillian Murphy|Brendan Gleeson|Medium|Liam Neeson|Police Officer Cameo|Series Three|Guest Actor|Interrogation|Casting Surprise|Northern Irish Star
 Which 1998 peace agreement is at the centre of the Derry Girls finale?|The Good Friday Agreement|The Anglo-Irish Treaty|The Sunningdale Agreement|The Hillsborough Agreement|Easy|Good Friday Agreement|1998 Referendum|Peace Process|Series Finale|Northern Ireland Politics|Historical Context|The Agreement
 In which month and year did Derry Girls conclude on Channel 4?|May 2022|May 2019|April 2020|October 2023|Medium|May 2022|Series Finale|The Agreement|Broadcast Date|Three Series|Channel 4 Ending|Final Episode
 How many episodes make up Derry Girls' complete television run, including its extended finale?|19|18|20|24|Medium|Nineteen Episodes|Series One Six|Series Two Six|Series Three Seven|Broadcast Total|Complete Run|Episode Count
 Which director worked on all 19 episodes of Derry Girls?|Michael Lennox|Ben Palmer|Philip Barantini|Peter Cattaneo|Hard|Michael Lennox|Director|All Episodes|Production Team|Channel 4 Comedy|Technical Credits|Creative Leadership`
   },
   {
     programme: 'The Inbetweeners', era: '2008-2010 original television series', broadcaster: 'E4',
     topic: 'Will, Simon, Jay and Neil at Rudge Park Comprehensive across three television series',
     facts: `Which actor played the outspoken narrator Will McKenzie?|Simon Bird|Joe Thomas|James Buckley|Blake Harrison|Easy|Simon Bird|Will McKenzie|Narrator|Main Cast|Rudge Park|Lead Character|Casting
 Who portrayed the lovestruck schoolboy Simon Cooper?|Joe Thomas|Simon Bird|Henry Lloyd-Hughes|James Buckley|Easy|Joe Thomas|Simon Cooper|Main Cast|Teenage Crush|School Friend|Actor Identification|Casting
 Which actor played the boastful Jay Cartwright?|James Buckley|Joe Thomas|Blake Harrison|Simon Bird|Easy|James Buckley|Jay Cartwright|Main Cast|Exaggerated Stories|Teenage Friend|Actor Identification|Casting
 Who played the laid-back Neil Sutherland?|Blake Harrison|James Buckley|Joe Thomas|Henry Lloyd-Hughes|Easy|Blake Harrison|Neil Sutherland|Main Cast|Teenage Friend|School Life|Character Casting|Comedy Quartet
 Which actor portrayed strict head of sixth form Mr Gilbert?|Greg Davies|Alex Macqueen|Martin Trenaman|David Schaal|Easy|Greg Davies|Mr Gilbert|School Authority|Head Of Sixth Form|Comedian Actor|Character Casting|Rudge Park
 Who played Will's mother Polly McKenzie?|Belinda Stewart-Wilson|Robin Weaver|Emily Head|Hannah Tointon|Medium|Belinda Stewart Wilson|Polly McKenzie|Wills Mother|Family Cast|Character Actress|Casting|Home Life
 Who played Carli D'Amato, the object of Simon's long-running crush?|Emily Head|Emily Atack|Hannah Tointon|Robin Weaver|Easy|Emily Head|Carli DAmato|Simon Crush|Student Character|Romantic Interest|Actor Identification|Rudge Park
 Which actress portrayed Will's older romantic interest Charlotte Hinchcliffe?|Emily Atack|Emily Head|Hannah Tointon|Belinda Stewart-Wilson|Easy|Emily Atack|Charlotte Hinchcliffe|Will Romance|Older Student|Series One|Character Casting|Love Interest
 Who played the threatening school bully Mark Donovan?|Henry Lloyd-Hughes|Greg Davies|David Schaal|Martin Trenaman|Medium|Henry Lloyd Hughes|Mark Donovan|School Bully|Classmate|Charlotte Boyfriend|Character Casting|School Conflict
 Which actress played Simon's girlfriend Tara in series three?|Hannah Tointon|Emily Head|Emily Atack|Robin Weaver|Medium|Hannah Tointon|Tara Brown|Series Three|Simon Girlfriend|Relationship|Casting|Teenage Romance
 Who played Jay's overbearing father Terry Cartwright?|David Schaal|Alex Macqueen|Martin Trenaman|Greg Davies|Medium|David Schaal|Terry Cartwright|Jay Father|Parent Child Relationship|Verbal Mockery|Character Casting|Family
 Which actor played Neil's father Kevin Sutherland?|Alex Macqueen|Martin Trenaman|David Schaal|Greg Davies|Medium|Alex Macqueen|Kevin Sutherland|Neil Father|Family Relationship|Supporting Cast|Actor Identification|Parent
 Which actor portrayed Simon's father Alan Cooper?|Martin Trenaman|Alex Macqueen|David Schaal|Henry Lloyd-Hughes|Medium|Martin Trenaman|Alan Cooper|Simon Father|Family Role|Casting|Parental Character|Cooper Household
 Who co-created and wrote the original television sitcom?|Damon Beesley and Iain Morris|Jesse Armstrong and Sam Bain|Lisa McGee and Michael Lennox|Jack Thorne and Stephen Graham|Easy|Damon Beesley|Iain Morris|Programme Creators|Comedy Screenwriting|Television Authors|Original Series|Writers
 Which television channel first broadcast The Inbetweeners?|E4|BBC Three|ITV2|Sky One|Easy|E4|Original Broadcaster|2008 Debut|British Channel|Sitcom Premiere|Teen Comedy|Channel Four Network
 In which year did the original television series begin?|2008|2005|2010|2012|Easy|2008 Premiere|Broadcast Year|Series One|Sitcom History|E4 Debut|UK Television|Start Date
 How many series were produced for the original television programme?|Three|Two|Four|Five|Easy|Three Series|Programme Run|2008 To 2010|Episode Structure|E4 Comedy|TV Seasons|British Sitcom
 How many original television episodes were produced in total?|18|12|20|24|Medium|Eighteen Episodes|Six Each Series|Three Seasons|Broadcast Total|Programme Statistics|Original Run|Episode Count
 What is the name of the fictional school attended by the four main boys?|Rudge Park Comprehensive|Our Lady Immaculate College|Waterloo Road|Summerdown Academy|Easy|Rudge Park Comprehensive|Fictional School|Sixth Form|School Setting|Suburban Britain|Teenagers|School Name
 Why does Will transfer from private school to a comprehensive at the start?|His parents have divorced|He has been expelled for cheating|He has won a sports scholarship|His family is moving to Australia|Medium|Will McKenzie|Parents Divorce|School Transfer|First Episode|Family Upheaval|Private Education|New Beginning
 Which character narrates the television series from his point of view?|Will McKenzie|Simon Cooper|Jay Cartwright|Neil Sutherland|Medium|Will McKenzie|Voiceover|Narrator|Point Of View|Storytelling|Four Friends|Sitcom Format
 What do the boys try to buy while skipping school in an early first-series episode?|Alcohol|Camping equipment|Concert tickets|Football boots|Medium|School Truancy|Buying Alcohol|Series One Episode Two|Fake Adulthood|Teenage Drinking|Group Scheme|Misadventure
 Which character has just passed his driving test before taking the group to Thorpe Park?|Simon Cooper|Will McKenzie|Jay Cartwright|Neil Sutherland|Medium|Simon Cooper|Driving Test|Thorpe Park|Series One Episode Three|First Car|Road Trip|Teenage Driving
 Which theme park do the boys visit in the first series?|Thorpe Park|Alton Towers|Chessington World of Adventures|Drayton Manor|Easy|Thorpe Park|Roller Coasters|Series One Episode Three|First Road Trip|Simon Driving|Theme Park Visit|Adventure
 To which seaside location does Jay take his friends for a Caravan Club gathering?|Camber Sands|Brighton|Margate|Southend|Medium|Camber Sands|Caravan Club|Series One Episode Five|Jay Claims|Holiday Camp|Sussex Coast|Friendship Trip
 Which school occasion do Will and his friends help organise in the first-series finale?|The prom|Sports day|The Christmas concert|A parents' evening|Medium|School Prom|Series One Finale|End Of Term|Event Planning|Sixth Form|Teenage Comedy|School Organisation
 Which Dorset seaside town hosts the disastrous school field trip in series two?|Swanage|Weymouth|Poole|Lyme Regis|Medium|Swanage|School Field Trip|Series Two Episode One|Dorset Coast|Sociology Trip|Geography Trip|School Outing
 During work-experience week, where is Will mistakenly sent?|A garage|A newspaper office|A primary school|A hospital|Medium|Will McKenzie|Garage Placement|Work Experience|Series Two Episode Two|School Scheme|Workplace Mishap|Career Experience
 Which boy works at a newspaper during the series-two work-experience mix-up?|Neil Sutherland|Jay Cartwright|Simon Cooper|Will McKenzie|Medium|Neil Sutherland|Newspaper Placement|Work Experience|Series Two Episode Two|Job Swap|School Administration|Career Trial
 Where do Jay and Simon spend their work-experience placements?|A plant-hire business|A law firm|A veterinary surgery|A radio station|Medium|Jay Cartwright|Simon Cooper|Plant Hire|Work Experience|Series Two Episode Two|Construction Equipment|Job Placement
 What sort of celebration does Will attempt to arrange in the third episode of series two?|A sophisticated birthday dinner|A surprise camping trip|A graduation ball|A cinema fundraiser|Medium|Will Birthday|Dinner Party|Series Two Episode Three|Social Ambition|Clashing Parties|Home Celebration|Teenage Plans
 To which city do the boys travel hoping to reinvent themselves as clubbers in series two?|London|Birmingham|Oxford|Bristol|Medium|London Night Out|Clubbing|Series Two Episode Four|Group Outing|Teenage Nightlife|Reinvention|Friends
 Which youth achievement scheme does Will help coordinate in the second series?|The Duke of Edinburgh's Award|The Prince's Trust Challenge|National Citizen Service|Young Enterprise Awards|Medium|Duke Of Edinburgh Award|Will Organiser|Series Two Episode Five|Volunteering|Retirement Home|School Project|Community Service
 At what sort of establishment do the boys volunteer for the award scheme?|A retirement home|A wildlife sanctuary|A city library|A sports centre|Medium|Retirement Home|Duke Of Edinburgh|Series Two Episode Five|Volunteer Work|Older Residents|Community Service|School Scheme
 Which boy helps Carli with revision as exams approach at the end of series two?|Simon Cooper|Will McKenzie|Neil Sutherland|Jay Cartwright|Medium|Simon Cooper|Carli DAmato|Exam Revision|Series Two Finale|Romantic Hope|Studying Together|School Exams
 Which girl is responsible for organising the charity fashion show at the start of series three?|Carli D'Amato|Charlotte Hinchcliffe|Tara Brown|Polly McKenzie|Medium|Carli DAmato|Charity Fashion Show|Series Three Premiere|Fundraising|School Event|Fashion Modelling|Organising
 Which girl does Simon try to impress by attending a concert early in series three?|Tara Brown|Carli D'Amato|Charlotte Hinchcliffe|Kerry|Medium|Tara Brown|Simon Cooper|Series Three Episode Two|First Gig|New Romance|Live Music|Concert Outing
 Who is paired with Will for a double date when Simon is seeing Tara?|Kerry|Charlotte|Carli|Polly|Medium|Kerry|Will McKenzie|Double Date|Tara Friend|Series Three Episode Three|Uncomfortable Romance|Social Pressure
 Which university town do the boys visit when accompanying Simon and Tara to see her sister?|Warwick|Durham|Exeter|York|Medium|Warwick Visit|University Trip|Series Three Episode Four|Tara Sister|Campus Journey|Road Trip|Student Life
 Who goes away for the weekend, leaving Will's home to the boys in series three?|Will's mother Polly|Simon's mother Pamela|Jay's father Terry|Neil's father Kevin|Medium|Polly McKenzie|Will Home Alone|Series Three Episode Five|Unsupervised House|Weekend Away|Friends Take Over|House Party
 What sort of trip do the four friends organise for the final television episode?|A camping trip|A skiing holiday|A ferry crossing|A city break|Medium|Camping Trip|Series Three Finale|Last TV Episode|Countryside|Scout Skills|Friends Farewell|2010 Finale
 What type of car does Simon famously drive in the original television series?|A Fiat Cinquecento|A Ford Fiesta|A Vauxhall Corsa|A Renault Clio|Medium|Fiat Cinquecento|Simon Car|Yellow Car|Road Trips|Vehicle Model|Student Driver|Comedy Prop
 Who directed the first series of The Inbetweeners?|Gordon Anderson|Ben Palmer|Michael Lennox|Declan Lowney|Hard|Gordon Anderson|Series One Director|2008 Production|Creative Credits|Comedy Direction|E4 Programme|Television Filming
 Who directed both the second and third television series?|Ben Palmer|Gordon Anderson|Michael Lennox|Peter Cattaneo|Hard|Ben Palmer|Series Two Director|Series Three Director|2009 To 2010|Behind The Scenes|Television Production|Comedy Direction`
   }
 ];

 const FIRST_ID = 15058;
 let sequence = 0;

 const questions = groups.flatMap(group => group.facts.trim().split('\n').map(line => {
   const id = 'tv_' + String(FIRST_ID + sequence).padStart(5, '0');
   const fields = line.trim().split('|').map(value => value.trim());
   if (fields.length !== 13) throw new Error(`Expected 13 fields at ${id}, got ${fields.length}`);
   const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
   if (!question || !correctAnswer || [wrong1, wrong2, wrong3, ...specificTags].some(x => !x))
     throw new Error(`Empty field at ${id}`);
   if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) throw new Error(`Difficulty at ${id}`);
   if (specificTags.length !== 7) throw new Error(`Specialist tags at ${id}`);
   const answers = [wrong1, wrong2, wrong3];
   if (new Set([correctAnswer, ...answers].map(x => x.toLowerCase())).size !== 4)
     throw new Error(`Repeated answer at ${id}`);
   answers.splice(sequence % 4, 0, correctAnswer);
   const tags = [...new Map([
     'Television', 'British Television', 'Comedy', 'Sitcom', 'Teen Comedy',
     group.programme, `Programme: ${group.programme}`, group.era, group.broadcaster,
     group.topic, correctAnswer, ...specificTags
   ].map(tag => [tag.toLowerCase(), tag])).values()];
   sequence++;
   return {
     id, category: 'Television', programme: group.programme,
     question, answers, correctAnswer, difficulty, tags, dailyEligible: true
   };
 }));

 const EXPECTED_COUNT = 91;
 if (questions.length !== EXPECTED_COUNT) throw new Error(`Expected ${EXPECTED_COUNT}, got ${questions.length}`);
 if (questions[0].id !== 'tv_15058' || questions[questions.length - 1].id !== 'tv_15148')
   throw new Error('ID range mismatch');
 if (new Set(questions.map(q => q.id)).size !== questions.length ||
     new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length)
   throw new Error('Duplicate ID or question');
 if (questions.some(q => q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
     q.tags.length < 14 || !q.tags.includes(`Programme: ${q.programme}`) || q.dailyEligible !== true))
   throw new Error('Export validation failed');
// 21 November 2026 — Pack 326 TV audit.
// Original 91 questions and IDs tv_15058–tv_15148 remain unchanged.
// Added episode-specific and supporting-character questions across all
// three Derry Girls series and the 18 original Inbetweeners TV episodes.
// Film questions intentionally excluded; source URLs tagged per question.
const auditAdditions = [
  {
    "id": "tv_36848",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, which relative tells notoriously long, rambling stories?",
    "answers": [
      "Uncle Colm",
      "Uncle Ciaran",
      "Aunt Bridie",
      "Granda Gerry"
    ],
    "correctAnswer": "Uncle Colm",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Uncle Colm",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Colm McCool",
      "Family Member",
      "Monotonous Stories",
      "Recurring Joke"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36849",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, which actor portrayed the long-winded Uncle Colm?",
    "answers": [
      "Ardal O'Hanlon",
      "Kevin McAleer",
      "Peter Campion",
      "Jamie Beamish"
    ],
    "correctAnswer": "Kevin McAleer",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Kevin McAleer",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Kevin McAleer",
      "Colm McCool",
      "Character Casting",
      "Supporting Actor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36850",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, who played Jenny Joyce's loyal schoolfriend Aisling?",
    "answers": [
      "Diona Doherty",
      "Claire Rafferty",
      "Beccy Henderson",
      "Amelia Crowley"
    ],
    "correctAnswer": "Beccy Henderson",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Beccy Henderson",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Beccy Henderson",
      "Aisling",
      "School Friendship",
      "Supporting Cast"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36851",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, which actress played Michelle's mother Deirdre Mallon?",
    "answers": [
      "Philippa Dunne",
      "Julia Dearden",
      "Tara Lynne O'Neill",
      "Amelia Crowley"
    ],
    "correctAnswer": "Amelia Crowley",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Amelia Crowley",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Amelia Crowley",
      "Deirdre Mallon",
      "Michelle Family",
      "Casting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36852",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, which actor played Aunt Sarah's admirer Ciaran?",
    "answers": [
      "Jamie Beamish",
      "Art Campion",
      "David Ireland",
      "Kevin McAleer"
    ],
    "correctAnswer": "Jamie Beamish",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Jamie Beamish",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Jamie Beamish",
      "Ciaran",
      "Sarah Romance",
      "Supporting Cast"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36853",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, what sum per pupil is demanded for the Paris school trip?",
    "answers": [
      "£125",
      "£375",
      "£250",
      "£500"
    ],
    "correctAnswer": "£375",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: £375",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Series One Episode Two",
      "Paris Fundraising",
      "School Trip",
      "Cost"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36854",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, whose chip shop do Erin and her friends accidentally damage while raising trip money?",
    "answers": [
      "Mary's",
      "Maureen's",
      "Fionnula's",
      "Bridie's"
    ],
    "correctAnswer": "Fionnula's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Fionnula's",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Series One Episode Two",
      "Chip Shop",
      "Fionnula",
      "Fundraising Disaster"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36855",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, which elderly nun dies during the friends' detention in the opening episode?",
    "answers": [
      "Sister Michael",
      "Sister Brigid",
      "Sister Margaret",
      "Sister Declan"
    ],
    "correctAnswer": "Sister Declan",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Sister Declan",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Pilot Episode",
      "Detention",
      "Elderly Nun",
      "School Chaos"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36856",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, what did Clare undertake in the first episode to raise money for an African charity?",
    "answers": [
      "A sponsored fast",
      "A sponsored cycle",
      "A sponsored swim",
      "A silent vigil"
    ],
    "correctAnswer": "A sponsored fast",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: A sponsored fast",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Pilot Episode",
      "Clare Devlin",
      "Ethiopia Charity",
      "Fundraising"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36857",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, what is the name of Erin's dog whose supposed death becomes central to a miracle story?",
    "answers": [
      "Rover",
      "Toto",
      "Tilly",
      "Bingo"
    ],
    "correctAnswer": "Toto",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Toto",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Series One Episode Three",
      "Dog Toto",
      "False Miracle",
      "Family Pet"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36858",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, what did Mary actually do with Erin's dog Toto instead of burying it?",
    "answers": [
      "Sent it to a kennel in Belfast",
      "Left it with Granda Joe",
      "Gave it to an elderly neighbour",
      "Sold it to a farmer"
    ],
    "correctAnswer": "Gave it to an elderly neighbour",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Gave it to an elderly neighbour",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Series One Episode Three",
      "Mary Quinn",
      "Toto Survival",
      "Fake Death"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36859",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, what unusual sight convinces Clare that a Virgin Mary statue is weeping?",
    "answers": [
      "Rain entering through a cracked roof",
      "Candle wax running over its face",
      "A leaking water pipe",
      "Dog urine dripping from above"
    ],
    "correctAnswer": "Dog urine dripping from above",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Dog urine dripping from above",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Series One Episode Three",
      "Weeping Statue",
      "Sleep Deprivation",
      "Father Peter"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36860",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, which woman starts dating Granda Joe when the Ukrainian visitors arrive?",
    "answers": [
      "Maeve",
      "Fionnula",
      "Bridie",
      "Janette"
    ],
    "correctAnswer": "Maeve",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Maeve",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Series One Episode Four",
      "Joe Romance",
      "Maeve",
      "Ukrainian Visit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36861",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, who is the supposed Ukrainian youth called Artem really?",
    "answers": [
      "A French exchange student",
      "Clive from East Belfast",
      "James's cousin from London",
      "A Polish visiting student"
    ],
    "correctAnswer": "Clive from East Belfast",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Clive from East Belfast",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Series One Episode Four",
      "Artem Disguise",
      "Clive",
      "Belfast Protestant"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36862",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, where is an IRA fugitive found hiding during the family's July holiday escape?",
    "answers": [
      "Inside a tent",
      "In a railway carriage",
      "In the boot of a car",
      "Under the stairs"
    ],
    "correctAnswer": "In the boot of a car",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: In the boot of a car",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Series One Episode Five",
      "IRA Fugitive",
      "Family Car",
      "Border Journey"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36863",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, what hobby does Orla demonstrate at the school talent show in the first-series finale?",
    "answers": [
      "Irish dancing",
      "Juggling",
      "Ballet",
      "Step aerobics"
    ],
    "correctAnswer": "Step aerobics",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Step aerobics",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Series One Episode Six",
      "Orla McCool",
      "Talent Show",
      "Dance Routine"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36864",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, which word do the pupils agree unites the two communities during the peace weekend?",
    "answers": [
      "Parents",
      "Football",
      "Homework",
      "Music"
    ],
    "correctAnswer": "Parents",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Parents",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Across The Barricade",
      "Peace Weekend",
      "Catholics And Protestants",
      "Shared Experience"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36865",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, which Hollywood crime thriller does Ma Mary miss the ending of during a cinema outing?",
    "answers": [
      "Se7en",
      "The Usual Suspects",
      "Heat",
      "The Silence of the Lambs"
    ],
    "correctAnswer": "The Usual Suspects",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: The Usual Suspects",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Ms De Brun Episode",
      "Cinema Trip",
      "Keyser Soze",
      "Mary Quinn"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36866",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, what escaping zoo animal leads the parents to ban the girls' Belfast concert trip?",
    "answers": [
      "A tiger",
      "A gorilla",
      "A polar bear",
      "A wolf"
    ],
    "correctAnswer": "A polar bear",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: A polar bear",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "The Concert",
      "Belfast Zoo",
      "Animal Escape",
      "Parental Ban"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36867",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, what fate befalls Aunt Bridie after Mary tells her to drop dead at a wedding?",
    "answers": [
      "She faints",
      "She leaves town",
      "She breaks her arm",
      "She dies"
    ],
    "correctAnswer": "She dies",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: She dies",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "The Curse",
      "Aunt Bridie",
      "Wedding Reception",
      "Family Argument"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36868",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, what sweet-looking baked food causes chaos at Bridie's wake?",
    "answers": [
      "Cannabis-laced scones",
      "Stale birthday cake",
      "Burnt cupcakes",
      "A poisoned pudding"
    ],
    "correctAnswer": "Cannabis-laced scones",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Cannabis-laced scones",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "The Curse",
      "Wake",
      "Michelle Mallon",
      "Scones"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36869",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, what science-fiction event does James skip to accompany Erin to the school prom?",
    "answers": [
      "A Star Trek marathon",
      "A Doctor Who convention",
      "A Red Dwarf convention",
      "A Star Wars premiere"
    ],
    "correctAnswer": "A Doctor Who convention",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: A Doctor Who convention",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "The Prom",
      "James Maguire",
      "Erin Date",
      "Doctor Who"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36870",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, who returns from England hoping to take James home during the second-series finale?",
    "answers": [
      "His father Gerry",
      "His aunt Deirdre",
      "His mother Cathy",
      "His sister Lisa"
    ],
    "correctAnswer": "His mother Cathy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: His mother Cathy",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "The President",
      "Cathy Maguire",
      "James Future",
      "Series Two Finale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36871",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, which American president's daughter receives a long-delayed letter in the final episode?",
    "answers": [
      "Jenna Bush",
      "Amy Carter",
      "Malia Obama",
      "Chelsea Clinton"
    ],
    "correctAnswer": "Chelsea Clinton",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Chelsea Clinton",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "The Agreement",
      "Chelsea Clinton",
      "Letter Epilogue",
      "Series Three Finale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36872",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, what is the name of Granda Joe's troublesome pet cat in the third-series opener?",
    "answers": [
      "Seamus",
      "Toto",
      "Bingo",
      "Murgatroyd"
    ],
    "correctAnswer": "Seamus",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Seamus",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "The Night Before",
      "Granda Joe Cat",
      "GCSE Results",
      "Pet Mayhem"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36873",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, what job does Gabriel have when Mary secretly meets him during The Affair?",
    "answers": [
      "Solicitor",
      "Plumber",
      "Teacher",
      "Photographer"
    ],
    "correctAnswer": "Plumber",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Plumber",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "The Affair",
      "Gabriel",
      "Mary Quinn",
      "Heating Repairs"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36874",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, what does Mary really hope to study at university in The Affair?",
    "answers": [
      "Medicine",
      "Psychology",
      "English literature",
      "Architecture"
    ],
    "correctAnswer": "English literature",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: English literature",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "The Affair",
      "Mary Quinn",
      "University Ambition",
      "Education"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36875",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, who is accidentally left behind at the station during Stranger on a Train?",
    "answers": [
      "Michelle",
      "Erin",
      "Orla",
      "Clare"
    ],
    "correctAnswer": "Clare",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Clare",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Stranger On A Train",
      "Clare Devlin",
      "Railway Station",
      "Portrush Journey"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36876",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, which friend tells Erin he has liked her for years during The Haunting?",
    "answers": [
      "James",
      "Aisling",
      "Clare",
      "Orla"
    ],
    "correctAnswer": "James",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: James",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "The Haunting",
      "James And Erin",
      "Romance",
      "Series Three"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36877",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, which school year do Mary and Sarah relive at their class reunion?",
    "answers": [
      "1982",
      "1977",
      "1987",
      "1991"
    ],
    "correctAnswer": "1977",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: 1977",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "The Reunion",
      "Class Of 1977",
      "Mary And Sarah",
      "Flashbacks"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36878",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, which girl becomes Clare's romantic interest during the Halloween gig episode?",
    "answers": [
      "Mae",
      "Jenny",
      "Laurie",
      "Charlene"
    ],
    "correctAnswer": "Laurie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Laurie",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Halloween Episode",
      "Clare Devlin",
      "Laurie",
      "First Kiss"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36879",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, which family member suffers a fatal aneurysm in the Halloween episode?",
    "answers": [
      "Erin's father Gerry",
      "Granda Joe",
      "James's uncle",
      "Clare's father Sean"
    ],
    "correctAnswer": "Clare's father Sean",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Clare's father Sean",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "Halloween Episode",
      "Sean Devlin",
      "Family Bereavement",
      "Final Series"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36880",
    "category": "Television",
    "programme": "Derry Girls",
    "question": "In Derry Girls, whose eighteenth birthday is being celebrated alongside Erin's in The Agreement?",
    "answers": [
      "Orla's",
      "Clare's",
      "Michelle's",
      "Jenny's"
    ],
    "correctAnswer": "Orla's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "Derry Girls",
      "Programme: Derry Girls",
      "2018–2022 complete original series",
      "Episode and character coverage",
      "Correct answer: Orla's",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/Derry_Girls",
      "The Agreement",
      "Eighteenth Birthday",
      "Erin And Orla",
      "Final Special"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36881",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, what school accessory makes Will an immediate target for ridicule on his first day?",
    "answers": [
      "A satchel",
      "A briefcase",
      "A school cap",
      "A bow tie"
    ],
    "correctAnswer": "A briefcase",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: A briefcase",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "First Day",
      "Will McKenzie",
      "Briefcase",
      "School Introduction"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36882",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, what does Mr Gilbert make the new sixth-form pupils wear as introductions?",
    "answers": [
      "Bright yellow jackets",
      "Matching ties",
      "Large name badges",
      "Paper crowns"
    ],
    "correctAnswer": "Large name badges",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: Large name badges",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "First Day",
      "Mr Gilbert",
      "New Students",
      "Humiliation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36883",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, what is the name of the pub the boys actually mean to visit in their first episode?",
    "answers": [
      "The Black Bull",
      "The Red Lion",
      "The White Hart",
      "The Black Horse"
    ],
    "correctAnswer": "The Black Horse",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: The Black Horse",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "First Day",
      "Black Horse",
      "Pub Confusion",
      "Meeting Place"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36884",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, who pretends to be his own mother on the telephone to excuse the boys' absence from school?",
    "answers": [
      "Simon",
      "Will",
      "Jay",
      "Neil"
    ],
    "correctAnswer": "Simon",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: Simon",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Bunk Off",
      "School Office",
      "Fake Parental Call",
      "Truancy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36885",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, what romantic message does a drunk Simon spray-paint on Carli's driveway?",
    "answers": [
      "An invitation to the prom",
      "A declaration that he loves Carli",
      "An apology for a missed date",
      "A birthday greeting"
    ],
    "correctAnswer": "A declaration that he loves Carli",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: A declaration that he loves Carli",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Bunk Off",
      "Simon Cooper",
      "Carli DAmato",
      "Spray Paint"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36886",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, which colour is Simon's Fiat Cinquecento when he first gets it?",
    "answers": [
      "Red",
      "Blue",
      "Yellow",
      "Green"
    ],
    "correctAnswer": "Yellow",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: Yellow",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Thorpe Park",
      "Fiat Cinquecento",
      "Car Colour",
      "First Driving Trip"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36887",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, which boy accidentally rips the door from Simon's car at Thorpe Park?",
    "answers": [
      "Will",
      "Neil",
      "Simon",
      "Jay"
    ],
    "correctAnswer": "Jay",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: Jay",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Thorpe Park",
      "Car Door",
      "Jay Cartwright",
      "Parking Mishap"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36888",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, what job is Neil doing at Thorpe Park when the others arrive?",
    "answers": [
      "Wearing a ride mascot costume",
      "Selling tickets at the gate",
      "Operating the roller coaster",
      "Cooking in a fast-food kiosk"
    ],
    "correctAnswer": "Wearing a ride mascot costume",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: Wearing a ride mascot costume",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Thorpe Park",
      "Neil Sutherland",
      "Park Employee",
      "Costume"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36889",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, which school charity event leaves Neil with an unwanted date in Will Gets a Girlfriend?",
    "answers": [
      "A speed-dating fundraiser",
      "A charity Blind Date contest",
      "A karaoke competition",
      "A sixth-form raffle"
    ],
    "correctAnswer": "A charity Blind Date contest",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: A charity Blind Date contest",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Will Gets A Girlfriend",
      "Neil Sutherland",
      "Blind Date",
      "Charity Event"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36890",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, which name belongs to the girl Simon kisses at the Caravan Club?",
    "answers": [
      "Charlotte",
      "Lauren",
      "Becky",
      "Hannah"
    ],
    "correctAnswer": "Becky",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: Becky",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Caravan Club",
      "Becky",
      "Simon Cooper",
      "Camber Sands"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36891",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, what type of evening is the Caravan Club's supposed wild party revealed to be?",
    "answers": [
      "An all-night rave",
      "A comedy night",
      "A bingo tournament",
      "A family disco"
    ],
    "correctAnswer": "A family disco",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: A family disco",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Caravan Club",
      "Family Disco",
      "Jay Claims",
      "Disappointment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36892",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, who insists on being the DJ at the school Christmas party?",
    "answers": [
      "Jay",
      "Neil",
      "Simon",
      "Will"
    ],
    "correctAnswer": "Jay",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: Jay",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Xmas Party",
      "Jay Cartwright",
      "School DJ",
      "Prom Committee"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36893",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, what position does Will take on the organising committee for the school's Christmas party?",
    "answers": [
      "Treasurer",
      "Chairman",
      "Security officer",
      "Catering manager"
    ],
    "correctAnswer": "Chairman",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: Chairman",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Xmas Party",
      "Will McKenzie",
      "Party Planning",
      "Committee Chairman"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36894",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, which new girl attracts Will's interest but prefers Simon during the Swanage trip?",
    "answers": [
      "Kerry",
      "Tara Brown",
      "Lauren Harris",
      "Charlotte Hinchcliffe"
    ],
    "correctAnswer": "Lauren Harris",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: Lauren Harris",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Field Trip",
      "Lauren Harris",
      "Swanage",
      "Romantic Rivalry"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36895",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, what kind of vessel do the boys take onto the water during the Swanage field trip?",
    "answers": [
      "A pedalo",
      "A kayak",
      "A sailing yacht",
      "A small boat"
    ],
    "correctAnswer": "A small boat",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: A small boat",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Field Trip",
      "Swanage Harbour",
      "Boat Hire",
      "Sea Disaster"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36896",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, which boy accidentally catches a fish during the Swanage boat disaster?",
    "answers": [
      "Neil",
      "Jay",
      "Will",
      "Simon"
    ],
    "correctAnswer": "Neil",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: Neil",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Field Trip",
      "Fishing Accident",
      "Neil Sutherland",
      "Boat Trip"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36897",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, what humiliating initiation does Will endure at his garage work placement?",
    "answers": [
      "He is made to wash police cars",
      "He is stripped and thrown into a pond",
      "He is locked in a cupboard",
      "He is sent to buy striped paint"
    ],
    "correctAnswer": "He is stripped and thrown into a pond",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: He is stripped and thrown into a pond",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Work Experience",
      "Garage",
      "Will McKenzie",
      "Initiation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36898",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, what nationality is Simon's exchange-student friend Patrice in Will's Birthday?",
    "answers": [
      "German",
      "Spanish",
      "French",
      "Italian"
    ],
    "correctAnswer": "French",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: French",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Wills Birthday",
      "Patrice",
      "Exchange Student",
      "Series Two"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36899",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, how old is Will celebrating in the episode Will's Birthday?",
    "answers": [
      "Sixteen",
      "Eighteen",
      "Nineteen",
      "Seventeen"
    ],
    "correctAnswer": "Seventeen",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: Seventeen",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Wills Birthday",
      "Seventeenth Birthday",
      "Party Plans",
      "Series Two"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36900",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, what must Simon trade for a homeless man's dirty shoes to enter the London club?",
    "answers": [
      "His trainers",
      "His jacket",
      "His car keys",
      "His wristwatch"
    ],
    "correctAnswer": "His trainers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: His trainers",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Night Out In London",
      "Club Entry",
      "Simon Cooper",
      "Footwear"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36901",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, who is Will's former babysitter working at the retirement home for the Duke of Edinburgh Award?",
    "answers": [
      "Kerry",
      "Daisy",
      "Charlotte",
      "Lauren"
    ],
    "correctAnswer": "Daisy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: Daisy",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Duke Of Edinburgh",
      "Daisy",
      "Old Peoples Home",
      "Will Crush"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36902",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, what type of drink does Will overuse before suffering an exam-room disaster in series two?",
    "answers": [
      "Coffee",
      "Lemonade",
      "Energy drinks",
      "Milkshakes"
    ],
    "correctAnswer": "Energy drinks",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: Energy drinks",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Exam Time",
      "Energy Drinks",
      "Will McKenzie",
      "School Examination"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36903",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, what charitable medical equipment is the fashion show raising money to buy in series three?",
    "answers": [
      "A heart monitor",
      "A ventilator",
      "An MRI scanner",
      "A dialysis machine"
    ],
    "correctAnswer": "A dialysis machine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: A dialysis machine",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "The Fashion Show",
      "Hospital Fundraising",
      "Dialysis Machine",
      "Charity Event"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36904",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, whose ears become infected after a misguided attempt at self-piercing during the fashion show?",
    "answers": [
      "Jay's",
      "Simon's",
      "Will's",
      "Neil's"
    ],
    "correctAnswer": "Jay's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: Jay's",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "The Fashion Show",
      "Jay Cartwright",
      "Ear Piercing",
      "School Humiliation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36905",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, what single bizarre outfit item does Simon wear with a top hat in the fashion show's finale?",
    "answers": [
      "A tutu",
      "Speedos",
      "A raincoat",
      "A waistcoat"
    ],
    "correctAnswer": "Speedos",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: Speedos",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "The Fashion Show",
      "Simon Cooper",
      "Fashion Outfit",
      "Top Hat"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36906",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, whose student house do the boys visit during The Trip to Warwick?",
    "answers": [
      "Tara's sister Sophie",
      "Will's cousin Louise",
      "Simon's friend Charlotte",
      "Neil's sister Katie"
    ],
    "correctAnswer": "Tara's sister Sophie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: Tara's sister Sophie",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "Trip To Warwick",
      "Student House Visit",
      "University Visit",
      "Series Three"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36907",
    "category": "Television",
    "programme": "The Inbetweeners",
    "question": "In The Inbetweeners, what does Will use to guide the boys on their final camping expedition?",
    "answers": [
      "An SAS manual",
      "A hiking app",
      "His geography homework",
      "His Scout training"
    ],
    "correctAnswer": "His Scout training",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Teen Comedy",
      "The Inbetweeners",
      "Programme: The Inbetweeners",
      "2008–2010 original E4 sitcom only",
      "Episode and character coverage",
      "Correct answer: His Scout training",
      "UK English",
      "Audited 21 November 2026",
      "Source: https://en.wikipedia.org/wiki/List_of_The_Inbetweeners_episodes",
      "The Camping Trip",
      "Will McKenzie",
      "Scout Experience",
      "Outdoor Adventure"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==151 ||
 questions[0].id!=='tv_15058' || questions[90].id!=='tv_15148' ||
 auditAdditions[0].id!=='tv_36848' || auditAdditions.at(-1).id!=='tv_36907' ||
 new Set(questions.map(q=>q.id)).size!==questions.length ||
 new Set(questions.map(q=>q.question.trim().toLowerCase())).size!==questions.length ||
 questions.some(q=>q.category!=='Television'||!q.programme||
 q.answers.length!==4||new Set(q.answers.map(a=>a.toLowerCase().trim())).size!==4||
 q.answers.filter(a=>a===q.correctAnswer).length!==1||
 !q.tags.includes('Programme: '+q.programme)||q.tags.length<14||
 q.dailyEligible!==true)||
 auditAdditions.some(q=>!q.question.includes(q.programme)||q.tags.length<16))
 throw Error('Pack 326 audit validation failed');
module.exports = questions;
