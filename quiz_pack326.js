
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

 module.exports = questions;
