
// quiz_pack312.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Are You Being Served? - Series 4-6 and the 1977 film (1976-1978)
// Grace Brothers staff changes, department schemes, festive specials and Costa Plonka.
// Seven individually selected specialist tags per question.
// quiz_bank.js already includes this pack in its active 1–558 range.
// Row: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven tags

const groups = [
  {
    topic: '1976-1978: new faces at Grace Brothers',
    era: '1976-1978',
    facts: `Which actor joined Are You Being Served? as maintenance man Mr Harman in Series Four?|Arthur English|Larry Martyn|James Hayter|Alfie Bass|Medium|Arthur English|Mr Harman|Maintenance Worker|Series Four|1976 Cast|Character Introduction|British Actor
Which earlier maintenance character did Mr Harman replace?|Mr Mash|Mr Goldberg|Mr Tebbs|Mr Spooner|Easy|Mr Mash|Mr Harman|Maintenance Staff|Character Succession|Larry Martyn|Arthur English|1976 Transition
Which new secretary serves Young Mr Grace from Series Four onwards?|Miss Bakewell|Miss Brahms|Miss Belfridge|Miss Thorpe|Medium|Miss Bakewell|Young Mr Grace|Personal Secretary|Office Staff|Series Four|1976 Debut|Character Role
Who played Young Mr Grace's secretary Miss Bakewell?|Penny Irving|Candy Davis|Wendy Richard|Vivienne Johnson|Medium|Penny Irving|Miss Bakewell|Secretary Role|1976 Casting|Young Mr Grace|Actress|Original Sitcom
Which senior menswear salesman leaves the main cast after Series Five?|Mr Grainger|Mr Humphries|Mr Lucas|Captain Peacock|Easy|Mr Grainger|Ernest Grainger|Arthur Brough|Menswear Counter|Series Five|Cast Departure|Senior Salesman
Which older salesman succeeds Mr Grainger at the start of Series Six?|Mr Tebbs|Mr Goldberg|Mr Klein|Mr Spooner|Medium|Mr Percival Tebbs|Menswear Head|Mr Grainger Replacement|Series Six|1978 Arrival|Store Hierarchy|New Character
Which actor portrayed Mr Tebbs in the sixth series?|James Hayter|Arthur Brough|Larry Martyn|Frank Thornton|Medium|James Hayter|Mr Tebbs|Series Six Cast|Senior Salesman|1978 Television|Character Casting|British Actor
What is Mr Tebbs's first name?|Percival|Stephen|Wilberforce|Dick|Medium|Percival Tebbs|James Hayter|Character First Name|Menswear Senior|Series Six|Grace Brothers|1978 Cast
Which series features Mr Tebbs as the men's senior salesman?|Series Six|Series Four|Series Seven|Series Nine|Medium|Series Six|Mr Tebbs|James Hayter|1978 Cast|Menswear Department|Short Lived Character|Programme Timeline
Which actress played the canteen manageress who appeared in the 1976 Christmas special?|Doremy Vernon|Mollie Sugden|Penny Irving|Diana King|Medium|Doremy Vernon|Canteen Manageress|The Father Christmas Affair|1976 Christmas|Supporting Cast|Staff Canteen|Actress`,
  },
  {
    topic: 'Series Four: early hours, dancing and managerial power',
    era: '1976',
    facts: `In which year did Series Four of Are You Being Served? begin?|1976|1975|1977|1978|Easy|Series Four|1976 Broadcast|BBC One|Programme Chronology|Original Transmission|British Sitcom|Television History
How many regular episodes were broadcast in Series Four before its Christmas special?|Six|Five|Seven|Eight|Medium|Six Regular Episodes|Series Four|1976 Schedule|Episode Count|BBC Comedy|Series Structure|Broadcast Records
Which episode opened Series Four in April 1976?|No Sale|Top Hat and Tails|Fire Practice|Fifty Years On|Medium|No Sale|Series Four Premiere|April 1976|Episode Title|Broadcast Order|Opening Story|Grace Brothers
What new policy do employees protest in No Sale?|Earlier opening hours|Compulsory uniforms|Reduced lunch breaks|Sunday trading|Easy|Early Opening|No Sale|Staff Protest|Young Mr Grace|Working Hours|1976 Plot|Retail Policy
How do the staff try to undermine the new opening policy in No Sale?|By discouraging customers from buying|By locking the shop doors|By removing the price labels|By refusing to stock the shelves|Medium|No Sale|Sales Boycott|Customer Discouragement|Early Opening|Staff Resistance|1976 Episode|Department Store
What makes the No Sale protest difficult for the staff?|Tempting sales commissions|A surprise fire drill|A power failure|A visiting television crew|Medium|Sales Commissions|No Sale|Wealthy Shoppers|Temptation|Early Hours Protest|1976 Story|Retail Incentives
What competition do the departments enter in Top Hat and Tails?|A ballroom dancing competition|A fashion-design competition|A singing contest|A quiz tournament|Easy|Top Hat And Tails|Ballroom Dancing|Inter Store Competition|Grace Brothers Staff|1976 Episode|Dance Teams|Retail Rivalry
Which employee has experience as a dance instructor in Top Hat and Tails?|Mr Humphries|Captain Peacock|Mr Rumbold|Mr Grainger|Medium|Wilberforce Humphries|Dance Instructor|Top Hat And Tails|Ballroom Contest|John Inman|1976 Story|Hidden Talent
In Forward Mr Grainger, whose job does Mr Grainger temporarily take?|Mr Rumbold's|Captain Peacock's|Young Mr Grace's|Mr Harman's|Easy|Forward Mr Grainger|Temporary Manager|Ernest Grainger|Mr Rumbold|Management Cover|1976 Episode|Job Swap
Why is Mr Rumbold away when Mr Grainger takes charge?|He is attending a conference|He is on sick leave|He is visiting America|He is getting married|Medium|Mr Rumbold|Management Conference|Forward Mr Grainger|Temporary Appointment|Grace Brothers|1976 Plot|Staff Management
What does the usually mild Mr Grainger become as acting manager?|A strict dictator|An absent-minded cleaner|A travelling salesman|A friendly shop detective|Medium|Ernest Grainger|Authoritarian Manager|Forward Mr Grainger|Management Style|Staff Conflict|1976 Story|Power Change
Which colleague does Mr Grainger sack during his spell as manager?|Mrs Slocombe|Miss Brahms|Mr Humphries|Mr Lucas|Medium|Mrs Slocombe|Ernest Grainger|Dismissal|Forward Mr Grainger|Managerial Power|1976 Episode|Department Dispute
What spoils Mr Grainger's plans in Forward Mr Grainger?|Mr Rumbold returns earlier than expected|The store is closed for flooding|Young Mr Grace sells the company|All the staff resign|Medium|Mr Rumbold|Early Return|Forward Mr Grainger|Acting Manager|Workplace Humiliation|1976 Finale|Staff Relations`,
  },
  {
    topic: 'Series Four: fire drills, birthdays and rumours',
    era: '1976',
    facts: `What safety procedure goes badly wrong in Fire Practice?|A fire drill|A first-aid lesson|A bomb-alert exercise|A lift evacuation test|Easy|Fire Practice|Fire Drill|Store Safety|Grace Brothers|1976 Episode|Emergency Procedure|Staff Training
Who orders the department employees to stay behind for extra fire training?|Mr Rumbold|Mr Lucas|Miss Bakewell|Mr Mash|Medium|Cuthbert Rumbold|After Hours Training|Fire Practice|Safety Failures|1976 Plot|Management Order|Emergency Drill
Which maintenance worker assists with the fire precautions in Fire Practice?|Mr Harman|Mr Mash|Mr Tebbs|Mr Goldberg|Medium|Mr Harman|Arthur English|Fire Practice|Emergency Training|Safety Equipment|1976 Story|Maintenance Staff
Which employee receives a lift from a fireman in Fire Practice?|Mr Humphries|Mr Grainger|Captain Peacock|Mr Lucas|Medium|Wilberforce Humphries|Fireman Lift|Fire Practice|John Inman|Fire Safety|1976 Episode|Comedy Scene
Whose birthday is central to Fifty Years On?|Mrs Slocombe's|Miss Brahms's|Young Mr Grace's|Mr Rumbold's|Easy|Betty Slocombe|Birthday Party|Fifty Years On|Ladies Department|1976 Episode|Staff Celebration|Age Mystery
How old do the staff believe Mrs Slocombe is turning in Fifty Years On?|Fifty|Forty|Sixty|Sixty-five|Medium|Fifty Years On|Fiftieth Birthday|Mrs Slocombe|Age Guess|Staff Speculation|1976 Plot|Birthday Planning
What essential detail do the employees struggle to recall when planning Mrs Slocombe's birthday song?|Her first name|Her surname|Her home address|Her job title|Medium|Mrs Slocombe First Name|Birthday Song|Fifty Years On|Staff Confusion|1976 Story|Celebration Plans|Character Detail
Who is suspected of spending the night with a female member of staff in Oh What a Tangled Web?|Captain Peacock|Mr Humphries|Mr Lucas|Mr Grainger|Easy|Captain Peacock|Rumoured Affair|Oh What A Tangled Web|Staff Gossip|1976 Plot|Marriage Trouble|Floorwalker
Which member of management employs the secretary involved in the Oh What a Tangled Web rumours?|Mr Rumbold|Young Mr Grace|Mr Harman|Mr Grainger|Medium|Mr Rumbold Secretary|Captain Peacock|Oh What A Tangled Web|Office Staff|Workplace Gossip|1976 Story|Staff Relationships
At what workplace celebration does the rumoured indiscretion in Oh What a Tangled Web begin?|A Christmas party|A retirement dinner|A summer picnic|A sales conference|Medium|Christmas Party|Captain Peacock|Rumoured Affair|Oh What A Tangled Web|Staff Gathering|1976 Episode|Misunderstanding
What does the staff organise to establish what really happened in Oh What a Tangled Web?|A hearing|A police search|A strike ballot|A fashion show|Medium|Staff Hearing|Oh What A Tangled Web|Captain Peacock|Rumour Investigation|Department Dispute|1976 Story|Workplace Tribunal`,
  },
  {
    topic: 'Christmas 1976: The Father Christmas Affair',
    era: 'Christmas 1976',
    facts: `What is the title of the 1976 Christmas special of Are You Being Served?|The Father Christmas Affair|Christmas Crackers|Happy Returns|The Punch and Judy Affair|Medium|Father Christmas Affair|1976 Christmas|Special Episode|Festive Broadcast|BBC One|Episode Title|Department Store
On what date was The Father Christmas Affair first broadcast?|24 December 1976|25 December 1975|26 December 1978|31 December 1976|Medium|Christmas Eve|24 December 1976|Father Christmas Affair|Broadcast Date|Festive Schedule|BBC Television|1976 Special
What festive attraction at Grace Brothers proves unreliable in The Father Christmas Affair?|An automated Father Christmas robot|A model railway|A talking Christmas tree|An electric reindeer sleigh|Easy|Automated Father Christmas|Robot Malfunction|1976 Christmas|Store Display|Holiday Shopping|Father Christmas Affair|Mechanical Failure
What role do employees audition for when the mechanical Father Christmas fails?|Father Christmas|A pantomime villain|A snowman mascot|A Christmas announcer|Easy|Santa Auditions|Father Christmas Role|Staff Competition|1976 Special|Mechanical Replacement|Christmas Grotto|Festive Entertainment
How much money is offered as a bonus to the employee chosen as Father Christmas?|Fifty pounds|Ten pounds|One hundred pounds|Twenty pounds|Medium|Fifty Pound Bonus|Father Christmas Contest|Young Mr Grace|Staff Reward|1976 Christmas|Role Auditions|Prize Money
Who is asked to select which staff member will play Father Christmas?|A young boy|Captain Peacock's wife|The canteen manageress|A visiting actress|Medium|Child Judge|Father Christmas Selection|Young Mr Grace|Staff Contest|1976 Special|Christmas Visitor|Holiday Role
What other festive performance is Mr Grainger preparing in The Father Christmas Affair?|An act for residents of an old people's home|A ballet for Young Mr Grace|A speech at a shareholder meeting|A puppet show for factory workers|Medium|Mr Grainger|Old Peoples Home|Christmas Entertainment|Father Christmas Affair|Senior Citizens|1976 Story|Seasonal Performance`,
  },
  {
    topic: 'Series Five: Tiddles, toys and Founders Day',
    era: '1977',
    facts: `Which episode opened Series Five in February 1977?|Mrs Slocombe Expects|Founders Day|The Old Order Changes|It Pays to Advertise|Medium|Mrs Slocombe Expects|Series Five Premiere|February 1977|Opening Episode|Broadcast Order|Episode Title|BBC One
Who is actually expecting offspring in Mrs Slocombe Expects?|Mrs Slocombe's cat Tiddles|Miss Brahms|The canteen manageress|Mrs Peacock|Easy|Tiddles|Pregnant Cat|Mrs Slocombe Expects|Pet Comedy|1977 Plot|Comic Misunderstanding|Feline Litter
Why does Mrs Slocombe bring Tiddles to Grace Brothers in Mrs Slocombe Expects?|She does not want her pregnant cat left alone|The shop is hosting a pet show|Mr Rumbold asks to inspect the cat|A customer wants to buy her|Easy|Tiddles|Pregnant Cat|Mrs Slocombe Expects|Pet Smuggling|Caring Owner|1977 Story|Workplace Pet
Where does Mrs Slocombe conceal her cat at work in Mrs Slocombe Expects?|The ladies fitting room|The store basement|The lift machinery room|Mr Grainger's desk|Medium|Ladies Fitting Room|Tiddles|Hidden Cat|Mrs Slocombe Expects|Mrs Slocombe|1977 Episode|Pet Concealment
Which floorwalker disapproves of Mrs Slocombe bringing her cat into the shop?|Captain Peacock|Mr Lucas|Mr Grainger|Mr Harman|Medium|Captain Peacock|Tiddles|Workplace Rules|Mrs Slocombe Expects|Secret Cat|1977 Plot|Store Discipline
In A Change Is as Good as a Rest, to which department are the clothing sales staff transferred?|The toy department|The furniture department|The food hall|The electrical department|Easy|Toy Department|Department Rotation|A Change Is As Good As A Rest|1977 Story|Grace Brothers|Staff Transfer|Retail Work
What miniature home attracts Mr Humphries in A Change Is as Good as a Rest?|A giant dollhouse|A model castle|A toy caravan|A miniature hotel|Medium|Mr Humphries|Giant Dollhouse|Toy Department|A Change Is As Good As A Rest|1977 Episode|Playhouse|Novelty Merchandise
Which toy particularly delights Mr Grainger during the departmental move?|A train set|A pedal car|A drum kit|A model aeroplane|Easy|Mr Grainger|Toy Train Set|Childhood Nostalgia|Toy Department|1977 Story|A Change Is As Good As A Rest|Hobby Toy
What occasion is celebrated in the episode Founders Day?|Young Mr Grace's eightieth birthday|Captain Peacock's wedding anniversary|Mr Grainger's retirement|The opening of a new branch|Medium|Young Mr Grace|Eightieth Birthday|Founders Day|Store Founder|1977 Episode|Milestone Celebration|Grace Family
Which television programme inspires the tribute staged in Founders Day?|This Is Your Life|The Generation Game|Opportunity Knocks|Blankety Blank|Medium|This Is Your Life|Founders Day|Birthday Tribute|Biographical Programme|Staff Celebration|1977 Plot|Television Parody
Who is the subject of the birthday tribute in Founders Day?|Young Mr Grace|Mrs Slocombe|Mr Humphries|Mr Rumbold|Easy|Young Mr Grace|Founders Day|Birthday Honouree|Store Owner|1977 Story|Staff Performance|Family Business`,
  },
  {
    topic: 'Series Five: American ideas, takeover and television adverts',
    era: '1977',
    facts: `Where has Young Mr Grace just returned from in The Old Order Changes?|America|France|Japan|Australia|Easy|Young Mr Grace|American Visit|The Old Order Changes|1977 Plot|Travel Influence|Store Reform|New Ideas
What workplace custom does Young Mr Grace encourage in The Old Order Changes?|Using first names|Mandatory formal titles|Working in silence|Saluting managers|Medium|First Name Terms|American Informality|The Old Order Changes|Young Mr Grace|Workplace Culture|1977 Story|Staff Relationships
What style of clothing does Mr Grace encourage following his American trip?|Casual clothes|Military uniforms|Evening dress|School uniforms|Easy|Casual Dress|American Trends|The Old Order Changes|Grace Brothers|1977 Episode|Staff Attire|Dress Code
What kind of music accompanies the new informal approach in The Old Order Changes?|Hippie-style music|Military marches|Operatic arias|Baroque chamber music|Medium|Hippie Music|American Fashion|The Old Order Changes|Store Atmosphere|1977 Plot|Informal Culture|Music Theme
What threat faces Grace Brothers in Take-Over?|A hostile corporate takeover|A fire in the warehouse|A power cut|A shortage of uniforms|Easy|Take Over|Rival Business|Hostile Acquisition|Grace Brothers Ownership|1977 Episode|Company Control|Retail Competition
What kind of meeting do the employees infiltrate in Take-Over?|A shareholders meeting|A trade union congress|A school governors meeting|A council planning meeting|Medium|Shareholders Meeting|Take Over|Staff Impersonation|Company Vote|1977 Plot|Corporate Ownership|Faked Identities
How do the staff try to sway the vote in Take-Over?|By posing as shareholders|By cancelling the meeting|By hiding the voting papers|By shutting the store early|Medium|Shareholder Disguises|Take Over|Hostile Bid|Staff Plot|1977 Story|Corporate Vote|Faked Attendance
Which maintenance worker gives a speech to help save Grace Brothers in Take-Over?|Mr Harman|Mr Mash|Mr Tebbs|Mr Goldberg|Medium|Mr Harman|Arthur English|Shareholder Speech|Take Over|Store Survival|1977 Episode|Maintenance Staff
What do the staff want Mr Grainger to do in Goodbye Mr Grainger?|Retire or leave the department|Become Young Mr Grace's driver|Transfer to the toy counter|Open a new branch|Easy|Mr Grainger|Staff Discontent|Goodbye Mr Grainger|Retirement Plot|1977 Episode|Workplace Conflict|Senior Salesman
What sudden stroke of luck changes Mr Grainger's mood in Goodbye Mr Grainger?|Winning the lottery|Inheriting a hotel|Finding a diamond|Receiving a royal medal|Easy|Lottery Win|Mr Grainger|Improved Mood|Goodbye Mr Grainger|1977 Story|Personal Fortune|Character Reversal
What are the staff asked to produce in It Pays to Advertise?|A television commercial|A radio play|A staff newsletter|A fashion catalogue|Easy|TV Advertisement|It Pays To Advertise|Grace Brothers Promotion|1977 Episode|Marketing Campaign|Staff Performance|Retail Publicity
Which employee produces the Grace Brothers advert in It Pays to Advertise?|Mr Humphries|Mr Lucas|Captain Peacock|Mr Rumbold|Medium|Wilberforce Humphries|TV Commercial Producer|It Pays To Advertise|1977 Plot|John Inman|Staff Film|Store Promotion
Why are Grace Brothers employees used to model goods in its advert?|To save on professional performers|They have won a competition|The actors are stranded overseas|The store is closed for a strike|Medium|Budget Saving|Employee Models|It Pays To Advertise|Young Mr Grace|1977 Story|Cheap Production|Television Marketing`,
  },
  {
    topic: 'The 1977 feature film: a holiday in Costa Plonka',
    era: '1977 film',
    facts: `In which year was the Are You Being Served? feature film released?|1977|1975|1980|1983|Easy|1977 Film|Cinema Adaptation|British Comedy Film|Release Year|Grace Brothers|Feature Length|Sitcom Spin Off
Who directed the 1977 Are You Being Served? film?|Bob Kellett|David Lean|Richard Lester|John Schlesinger|Medium|Bob Kellett|Film Director|1977 Cinema|Comedy Adaptation|Production Credits|British Film|Grace Brothers Holiday
Why are Grace Brothers employees sent away on holiday in the film?|The store is being remodelled|The staff win a contest|A fire destroys the shop|Young Mr Grace sells the business|Easy|Store Remodelling|Paid Holiday|1977 Film|Department Store Closure|Staff Outing|Costa Plonka|Plot Premise
What fictional holiday resort is the destination in the 1977 film?|Costa Plonka|Costa Brava|Costa Verde|Costa Blanca|Easy|Costa Plonka|Fictional Resort|Film Setting|Spanish Holiday|1977 Film|Staff Travel|Mediterranean Comedy
In which country is Costa Plonka supposed to be located?|Spain|Portugal|Italy|Greece|Easy|Spain|Costa Plonka|Continental Holiday|Foreign Setting|1977 Film|Tourist Resort|Spanish Coast
What is the name of the staff's holiday hotel?|Don Bernardo's Palace Hotel|The Grand Marina|Hotel Riviera|Sunset Palace|Medium|Don Bernardos Palace Hotel|Costa Plonka|Holiday Accommodation|1977 Film|Resort Setting|Grace Brothers Staff|Spanish Hotel
Where must the staff sleep when their hotel rooms are not ready?|In tents|On a ferry|On the beach|Inside a coach|Easy|Holiday Tents|Hotel Rooms Unavailable|Costa Plonka|1977 Film|Temporary Lodging|Staff Discomfort|Spanish Resort
Which two senior staff members discover they have bought matching holiday hats?|Captain Peacock and Mr Rumbold|Mr Humphries and Mr Lucas|Mr Grainger and Mr Harman|Young Mr Grace and Captain Peacock|Medium|Captain Peacock|Mr Rumbold|Matching Hats|Holiday Fashion|1977 Film|Staff Rivalry|Costa Plonka
What political disturbance interrupts the staff's holiday in the film?|An armed revolution|A general election|A royal wedding|A dockworkers strike|Easy|Armed Revolution|Costa Plonka|Rebel Insurrection|Holiday Chaos|1977 Film|Political Conflict|Resort Trouble
Which maintenance worker travels with the main Grace Brothers staff in the film?|Mr Harman|Mr Mash|Mr Goldberg|Mr Tebbs|Easy|Mr Harman|Arthur English|Costa Plonka|1977 Film|Maintenance Worker|Holiday Companion|Original Cast`,
  },
  {
    topic: 'Series Six: a possible royal visit and the social club',
    era: '1978',
    facts: `In which year did Series Six of Are You Being Served? begin broadcasting?|1978|1977|1979|1981|Easy|Series Six|1978 Broadcast|BBC One|Programme Timeline|Broadcast Year|British Sitcom|Late Seventies
Which episode opens Series Six?|By Appointment|The Club|A Bliss Girl|Happy Returns|Medium|By Appointment|Series Six Premiere|November 1978|Opening Episode|Royal Visit|Broadcast Order|Episode Title
What possible VIP visit causes excitement in By Appointment?|A visit by the Royal Family|A visit by the Prime Minister|A visit by a film star|A visit by the Lord Mayor|Easy|Royal Family|By Appointment|Store Visit|VIP Preparations|1978 Plot|Grace Brothers|Royal Protocol
Which new senior menswear employee is introduced in By Appointment?|Mr Tebbs|Mr Goldberg|Mr Spooner|Mr Grossman|Easy|Mr Tebbs|Percival Tebbs|James Hayter|By Appointment|New Senior Salesman|1978 Episode|Menswear Team
What do the shop staff rehearse for in By Appointment?|The possibility of receiving royal visitors|A television advertisement|A police inspection|A Christmas concert|Medium|Royal Visit Rehearsal|By Appointment|Staff Etiquette|Grace Brothers|1978 Story|VIP Protocol|Store Ceremony
Which employee accidentally knocks a pot plant from a windowsill during the royal visit excitement?|Mrs Slocombe|Miss Brahms|Mr Humphries|Mr Lucas|Medium|Mrs Slocombe|Falling Pot Plant|By Appointment|Royal Procession|Store Window|1978 Plot|Near Miss
Where does Young Mr Grace allow staff to establish a social club in The Club?|The basement|The roof garden|The loading bay|The boardroom|Easy|Basement Social Club|The Club|Young Mr Grace|Employee Recreation|1978 Episode|Store Facilities|Staff Meeting
What do employees need to do before using their proposed social club?|Decorate the room|Install a swimming pool|Hire a nightclub band|Repair the lifts|Easy|Social Club Decorating|The Club|Basement Room|Paint And Wallpaper|1978 Plot|Shared Work|Staff Disputes
Why does the attempt to create a social club cause arguments?|The staff cannot agree on how to decorate it|The membership fees are stolen|A rival store takes over the venue|The room is already occupied|Medium|Decoration Disagreement|The Club|Staff Arguments|Basement Club|1978 Story|Workplace Rivalry|Interior Design
Which two writers remained responsible for the Series Six scripts?|Jeremy Lloyd and David Croft|John Sullivan and Carla Lane|Ray Galton and Alan Simpson|Jimmy Perry and David Renwick|Medium|Jeremy Lloyd|David Croft|Series Six Writers|1978 Television|Sitcom Scripts|Comedy Partnership|Writing Credits`,
  },
  {
    topic: 'Series Six: wedding plans, cutbacks and a ballet',
    era: '1978',
    facts: `Which character plans a wedding in Do You Take This Man?|Mrs Slocombe|Miss Brahms|Miss Bakewell|The canteen manageress|Easy|Mrs Slocombe|Do You Take This Man|Wedding Plans|1978 Episode|Romantic Story|Grace Brothers|Betty Slocombe
What musical instrument does Mrs Slocombe's intended groom play in a Greek restaurant?|A bouzouki|A mandolin|An accordion|A violin|Medium|Bouzouki Player|Greek Restaurant|Mrs Slocombe Groom|Do You Take This Man|1978 Plot|Wedding Suitor|Music Instrument
Which relative is travelling from America for Mrs Slocombe's proposed marriage?|Her wealthy uncle|Her younger brother|Her aunt|Her stepdaughter|Medium|American Uncle|Mrs Slocombe|Do You Take This Man|Wedding Guest|Family Wealth|1978 Story|Marriage Plans
What mishap upsets Mrs Slocombe's intended wedding?|The groom fails to turn up|The church catches fire|The cake is delivered to another town|The bridal car breaks down|Easy|Absent Groom|Do You Take This Man|Mrs Slocombe Wedding|1978 Episode|Marriage Disaster|Failed Ceremony|Romantic Comedy
Who dresses as the bridegroom during the improvised wedding arrangements?|Mr Humphries|Captain Peacock|Mr Lucas|Mr Rumbold|Medium|Wilberforce Humphries|Pretend Bridegroom|Do You Take This Man|Wedding Disguise|1978 Story|John Inman|False Ceremony
Who dresses as a Greek clergyman in Do You Take This Man?|Mr Tebbs|Mr Harman|Mr Lucas|Young Mr Grace|Medium|Mr Tebbs|Greek Vicar Disguise|James Hayter|Do You Take This Man|Wedding Improvisation|1978 Episode|False Clergyman
What financial threat faces the sales floor in Shedding the Load?|Staff redundancies|A new import tax|A cancelled holiday allowance|Higher parking charges|Easy|Redundancy Threat|Shedding The Load|Poor Sales|Company Cutbacks|1978 Story|Job Security|Department Employees
What difficult choice do the staff face in Shedding the Load?|Choosing who will lose their job|Choosing a new uniform colour|Selecting a store manager|Deciding which shop to buy|Medium|Redundancy Selection|Shedding The Load|Staff Dilemma|Workplace Cuts|1978 Episode|Mutual Competition|Job Loss
What product is promoted in A Bliss Girl?|Perfume|Talcum powder|Shampoo|Lipstick|Easy|Bliss Perfume|A Bliss Girl|Sales Promotion|Ladies Counter|1978 Plot|Fragrance Display|Shop Demonstration
Which salesman stands in for the absent Bliss Girl?|Mr Humphries|Mr Lucas|Mr Tebbs|Captain Peacock|Easy|Wilberforce Humphries|Bliss Girl Substitute|Fragrance Counter|A Bliss Girl|1978 Episode|Sales Assignment|John Inman
Which occasion is celebrated in the 1978 special Happy Returns?|Young Mr Grace's birthday|Mrs Slocombe's retirement|Mr Humphries's wedding|The store's reopening|Easy|Happy Returns|Young Mr Grace|Birthday Celebration|1978 Special|Grace Brothers|Staff Tribute|Festive Television
What stage performance do the staff rehearse in Happy Returns?|The Ballet of the Toys|Swan Lake|The Nutcracker Suite|Sleeping Beauty|Medium|Ballet Of The Toys|Happy Returns|Staff Cabaret|Young Mr Grace Birthday|1978 Episode|Dance Performance|Store Celebration
What complicates the staff's planned ballet in Happy Returns?|A professional troupe plans to perform the same ballet|The stage collapses before the show|The music has been stolen|The costumes are sent to the wrong store|Medium|Professional Cabaret Troupe|Ballet Of The Toys|Happy Returns|Duplicate Performance|1978 Special|Stage Mix Up|Staff Show
Which episode marks Mr Tebbs's final appearance in Are You Being Served?|Happy Returns|The Club|By Appointment|A Bliss Girl|Medium|Happy Returns|Mr Tebbs Departure|James Hayter|1978 Christmas|Cast Farewell|Last Appearance|Series Six Finale`,
  },
];

const FIRST_ID = 13729;
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

const EXPECTED_COUNT = 99;
if (questions.length !== EXPECTED_COUNT) {
  throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
}
if (questions[0].id !== 'tv_13729' || questions[questions.length - 1].id !== 'tv_13827') {
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


// Audit 21 Nov 2026: Series 4–6, 1976–1978 and the 1977 film.
// Original IDs tv_13729–tv_13827 preserved unchanged; 32 additions
// tv_36198–tv_36229.
// Sources: British Comedy Guide full cast/crew, S4–6 guides and film credits;
// David Croft original television episode archive; documented 1976 Blackpool stage run.
// https://www.comedy.co.uk/tv/are_you_being_served/cast_crew/full/
// https://www.comedy.co.uk/tv/are_you_being_served/episodes/4/
// https://www.comedy.co.uk/tv/are_you_being_served/episodes/5/
// https://www.comedy.co.uk/tv/are_you_being_served/episodes/6/
// https://www.comedy.co.uk/film/are_you_being_served/cast_crew/
// https://www.davidcroft.co.uk/Are-You-Being-Served/Episodes/
const auditAdditions = [
  {
    "id": "tv_36198",
    "category": "Television",
    "question": "What is the first name of the maintenance man Mr Harman in Are You Being Served??",
    "answers": [
      "Beverly",
      "Bernard",
      "Bertie",
      "Brian"
    ],
    "correctAnswer": "Beverly",
    "difficulty": "Hard",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: Series 4 cast",
      "Fact: Mr Harman's full name",
      "Answer: Beverly",
      "Source: Series-four cast list",
      "Full question: What is the first name of the maintenance man Mr Harman in Are You Being Served??",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36199",
    "category": "Television",
    "question": "Which director oversaw the fourth series of Are You Being Served? in 1976?",
    "answers": [
      "Bob Spiers",
      "Ray Butt",
      "Harold Snoad",
      "John Kilby"
    ],
    "correctAnswer": "Ray Butt",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: Series 4 production",
      "Fact: Fourth-series director",
      "Answer: Ray Butt",
      "Source: British Comedy Guide full crew",
      "Full question: Which director oversaw the fourth series of Are You Being Served? in 1976?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36200",
    "category": "Television",
    "question": "Which production designer worked on the six regular episodes of Are You Being Served? Series 4?",
    "answers": [
      "Ray London",
      "Antony Thorpe",
      "Paul Munting",
      "Nigel Curzon"
    ],
    "correctAnswer": "Paul Munting",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: Series 4 production",
      "Fact: Series-four design credit",
      "Answer: Paul Munting",
      "Source: British Comedy Guide full crew",
      "Full question: Which production designer worked on the six regular episodes of Are You Being Served? Series 4?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36201",
    "category": "Television",
    "question": "Which Grace Brothers manager accompanies the rehearsals on piano in Are You Being Served?'s Top Hat and Tails?",
    "answers": [
      "Mr Grainger",
      "Young Mr Grace",
      "Mr Harman",
      "Mr Rumbold"
    ],
    "correctAnswer": "Mr Rumbold",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: Series 4 Top Hat and Tails",
      "Fact: Ballroom rehearsal accompanist",
      "Answer: Mr Rumbold",
      "Source: 1976 episode plot",
      "Full question: Which Grace Brothers manager accompanies the rehearsals on piano in Are You Being Served?'s Top Hat and Tails?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36202",
    "category": "Television",
    "question": "What is the surname of Mr Rumbold's secretary implicated in the rumour in Are You Being Served?'s Oh What a Tangled Web?",
    "answers": [
      "Hazlewood",
      "Bakewell",
      "Thorpe",
      "Belfridge"
    ],
    "correctAnswer": "Hazlewood",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: Series 4 Oh What a Tangled Web",
      "Fact: Secretary's character name",
      "Answer: Hazlewood",
      "Source: BBC episode and guest cast",
      "Full question: What is the surname of Mr Rumbold's secretary implicated in the rumour in Are You Being Served?'s Oh What a Tangled Web?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36203",
    "category": "Television",
    "question": "Which actress played secretary Miss Monica Hazlewood in Are You Being Served??",
    "answers": [
      "Penny Irving",
      "Joanna Dunham",
      "Doremy Vernon",
      "Moira Foot"
    ],
    "correctAnswer": "Joanna Dunham",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: Series 4 Oh What a Tangled Web",
      "Fact: Guest role casting",
      "Answer: Joanna Dunham",
      "Source: British Comedy Guide full cast",
      "Full question: Which actress played secretary Miss Monica Hazlewood in Are You Being Served??",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36204",
    "category": "Television",
    "question": "Who designed the sets for the fifth series of Are You Being Served? in 1977?",
    "answers": [
      "Paul Munting",
      "Antony Thorpe",
      "Ray London",
      "James Bould"
    ],
    "correctAnswer": "Ray London",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: Series 5 production",
      "Fact: Fifth-series production designer",
      "Answer: Ray London",
      "Source: British Comedy Guide full crew",
      "Full question: Who designed the sets for the fifth series of Are You Being Served? in 1977?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36205",
    "category": "Television",
    "question": "Who directed the Series 5 finale It Pays to Advertise in Are You Being Served??",
    "answers": [
      "Ray Butt",
      "David Croft",
      "Bernard Thompson",
      "Bob Spiers"
    ],
    "correctAnswer": "Bob Spiers",
    "difficulty": "Hard",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: Series 5 finale",
      "Fact: Director for advertisement episode",
      "Answer: Bob Spiers",
      "Source: British Comedy Guide 5.07 credits",
      "Full question: Who directed the Series 5 finale It Pays to Advertise in Are You Being Served??",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36206",
    "category": "Television",
    "question": "Which Are You Being Served? cast member had recently appeared on the real This Is Your Life before the Founder's Day parody?",
    "answers": [
      "John Inman",
      "Arthur Brough",
      "Trevor Bannister",
      "Harold Bennett"
    ],
    "correctAnswer": "John Inman",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: Series 5 Founder's Day",
      "Fact: Real-life This Is Your Life connection",
      "Answer: John Inman",
      "Source: Cast interview and episode production trivia",
      "Full question: Which Are You Being Served? cast member had recently appeared on the real This Is Your Life before the Founder's Day parody?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36207",
    "category": "Television",
    "question": "What sort of toy catches Mr Humphries' attention after the staff transfer departments in Are You Being Served??",
    "answers": [
      "A model submarine",
      "A doll's house",
      "A rocking horse",
      "A slot-car racetrack"
    ],
    "correctAnswer": "A doll's house",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: Series 5 A Change Is as Good as a Rest",
      "Fact: Toy department discovery",
      "Answer: A doll's house",
      "Source: Second episode of fifth series",
      "Full question: What sort of toy catches Mr Humphries' attention after the staff transfer departments in Are You Being Served??",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36208",
    "category": "Television",
    "question": "Who played Young Mr Grace's frequently seen nurse in Are You Being Served? Series 6?",
    "answers": [
      "Doremy Vernon",
      "Penny Irving",
      "Vivienne Johnson",
      "Mollie Sugden"
    ],
    "correctAnswer": "Vivienne Johnson",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: Series 6 supporting cast",
      "Fact: Nurse actress",
      "Answer: Vivienne Johnson",
      "Source: British Comedy Guide main cast",
      "Full question: Who played Young Mr Grace's frequently seen nurse in Are You Being Served? Series 6?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36209",
    "category": "Television",
    "question": "Who was the production designer for Are You Being Served? Series 6 in 1978?",
    "answers": [
      "Ray London",
      "Paul Munting",
      "Garry Freeman",
      "Antony Thorpe"
    ],
    "correctAnswer": "Antony Thorpe",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: Series 6 production",
      "Fact: Sixth-series sets",
      "Answer: Antony Thorpe",
      "Source: British Comedy Guide production team",
      "Full question: Who was the production designer for Are You Being Served? Series 6 in 1978?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36210",
    "category": "Television",
    "question": "Which future star of 'Allo 'Allo! guest-starred as Mr Tomiades in Are You Being Served?'s Do You Take This Man??",
    "answers": [
      "Gorden Kaye",
      "Guy Siner",
      "Sam Kelly",
      "Richard Marner"
    ],
    "correctAnswer": "Gorden Kaye",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: Series 6 Do You Take This Man?",
      "Fact: Mr Tomiades guest star",
      "Answer: Gorden Kaye",
      "Source: British Comedy Guide cast",
      "Full question: Which future star of 'Allo 'Allo! guest-starred as Mr Tomiades in Are You Being Served?'s Do You Take This Man??",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36211",
    "category": "Television",
    "question": "Which Greek wedding guest did Gorden Kaye play in Are You Being Served?'s Do You Take This Man??",
    "answers": [
      "Mr Patel",
      "Mr Tomiades",
      "Mr Fortescue",
      "Mr Grossman"
    ],
    "correctAnswer": "Mr Tomiades",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: Series 6 Do You Take This Man?",
      "Fact: Gorden Kaye cameo character",
      "Answer: Mr Tomiades",
      "Source: British Comedy Guide 6.03",
      "Full question: Which Greek wedding guest did Gorden Kaye play in Are You Being Served?'s Do You Take This Man??",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36212",
    "category": "Television",
    "question": "What is revealed about Mrs Slocombe's absent intended husband in Are You Being Served?'s Do You Take This Man??",
    "answers": [
      "He has joined the army",
      "He has emigrated to Australia",
      "He is already married",
      "He is engaged to Miss Brahms"
    ],
    "correctAnswer": "He is already married",
    "difficulty": "Hard",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: Series 6 Do You Take This Man?",
      "Fact: Reason the groom disappears",
      "Answer: He is already married",
      "Source: 1978 episode full synopsis",
      "Full question: What is revealed about Mrs Slocombe's absent intended husband in Are You Being Served?'s Do You Take This Man??",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36213",
    "category": "Television",
    "question": "What is the name of Mrs Slocombe's wealthy American uncle in Are You Being Served?'s Do You Take This Man??",
    "answers": [
      "Howard P. Wells",
      "Ernest J. Barlow",
      "Percival T. Jones",
      "Wendel P. Clark"
    ],
    "correctAnswer": "Wendel P. Clark",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: Series 6 Do You Take This Man?",
      "Fact: Wealthy uncle's full name",
      "Answer: Wendel P. Clark",
      "Source: British Comedy Guide wedding cast",
      "Full question: What is the name of Mrs Slocombe's wealthy American uncle in Are You Being Served?'s Do You Take This Man??",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36214",
    "category": "Television",
    "question": "Which actor played Mrs Slocombe's visiting American uncle in Are You Being Served??",
    "answers": [
      "Norman Mitchell",
      "Gorden Kaye",
      "Felix Bowness",
      "Michael Knowles"
    ],
    "correctAnswer": "Norman Mitchell",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: Series 6 Do You Take This Man?",
      "Fact: Wendel P. Clark guest casting",
      "Answer: Norman Mitchell",
      "Source: British Comedy Guide 6.03",
      "Full question: Which actor played Mrs Slocombe's visiting American uncle in Are You Being Served??",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36215",
    "category": "Television",
    "question": "What principle do the Grace Brothers staff propose for choosing a redundancy in Are You Being Served?'s Shedding the Load?",
    "answers": [
      "Random draw",
      "Last in, first out",
      "Lowest sales first",
      "Highest salary first"
    ],
    "correctAnswer": "Last in, first out",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: Series 6 Shedding the Load",
      "Fact: Redundancy selection approach",
      "Answer: Last in, first out",
      "Source: 1978 episode plot",
      "Full question: What principle do the Grace Brothers staff propose for choosing a redundancy in Are You Being Served?'s Shedding the Load?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36216",
    "category": "Television",
    "question": "Which film company produced the 1977 feature film Are You Being Served??",
    "answers": [
      "Ealing Studios",
      "Hammer Films",
      "Anglo-EMI",
      "British Lion"
    ],
    "correctAnswer": "Anglo-EMI",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: 1977 film production",
      "Fact: Production company for feature",
      "Answer: Anglo-EMI",
      "Source: British Comedy Guide film overview",
      "Full question: Which film company produced the 1977 feature film Are You Being Served??",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1977 Feature Film",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36217",
    "category": "Television",
    "question": "At which English studio was the 1977 film Are You Being Served? recorded?",
    "answers": [
      "Pinewood Studios",
      "Ealing Studios",
      "Shepperton Studios",
      "EMI Elstree Studios"
    ],
    "correctAnswer": "EMI Elstree Studios",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: 1977 film production",
      "Fact: Film studio location",
      "Answer: EMI Elstree Studios",
      "Source: British Comedy Guide film credits",
      "Full question: At which English studio was the 1977 film Are You Being Served? recorded?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1977 Feature Film",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36218",
    "category": "Television",
    "question": "Who was the principal producer of the 1977 Are You Being Served? feature film?",
    "answers": [
      "Andrew Mitchell",
      "John Chapman",
      "Harold Snoad",
      "Paul Munting"
    ],
    "correctAnswer": "Andrew Mitchell",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: 1977 film production",
      "Fact: Film producer credit",
      "Answer: Andrew Mitchell",
      "Source: British Comedy Guide film cast and crew",
      "Full question: Who was the principal producer of the 1977 Are You Being Served? feature film?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1977 Feature Film",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36219",
    "category": "Television",
    "question": "Who was director of photography on the 1977 Are You Being Served? film?",
    "answers": [
      "Al Gell",
      "Jack Atcheler",
      "Robert Jones",
      "Paul Munting"
    ],
    "correctAnswer": "Jack Atcheler",
    "difficulty": "Hard",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: 1977 film production",
      "Fact: Cinematographer credit",
      "Answer: Jack Atcheler",
      "Source: British Comedy Guide film cast and crew",
      "Full question: Who was director of photography on the 1977 Are You Being Served? film?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1977 Feature Film",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36220",
    "category": "Television",
    "question": "Who designed the sets for the 1977 film Are You Being Served??",
    "answers": [
      "Ray London",
      "Paul Munting",
      "Robert Jones",
      "Antony Thorpe"
    ],
    "correctAnswer": "Robert Jones",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: 1977 film production",
      "Fact: Feature film production designer",
      "Answer: Robert Jones",
      "Source: British Comedy Guide film cast and crew",
      "Full question: Who designed the sets for the 1977 film Are You Being Served??",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1977 Feature Film",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36221",
    "category": "Television",
    "question": "Which Fawlty Towers actor played hotel manager Don Carlos Bernardo in the Are You Being Served? film?",
    "answers": [
      "Basil Brush",
      "John Cleese",
      "Prunella Scales",
      "Andrew Sachs"
    ],
    "correctAnswer": "Andrew Sachs",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: 1977 film hotel",
      "Fact: Spanish hotel manager actor",
      "Answer: Andrew Sachs",
      "Source: British Comedy Guide 1977 film cast",
      "Full question: Which Fawlty Towers actor played hotel manager Don Carlos Bernardo in the Are You Being Served? film?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1977 Feature Film",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36222",
    "category": "Television",
    "question": "What is the full name of the hotel manager played by Andrew Sachs in the Are You Being Served? film?",
    "answers": [
      "Don Carlos Bernardo",
      "Don Manuel Rodriguez",
      "Señor Alberto Sanchez",
      "Don Jorge Fernandez"
    ],
    "correctAnswer": "Don Carlos Bernardo",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: 1977 film hotel",
      "Fact: Hotel manager's character name",
      "Answer: Don Carlos Bernardo",
      "Source: British Comedy Guide 1977 film cast",
      "Full question: What is the full name of the hotel manager played by Andrew Sachs in the Are You Being Served? film?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1977 Feature Film",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36223",
    "category": "Television",
    "question": "Which actor played revolutionary Cesar Rodriguez in the Are You Being Served? film?",
    "answers": [
      "Andrew Sachs",
      "Glyn Houston",
      "Derek Griffiths",
      "Nadim Sawalha"
    ],
    "correctAnswer": "Glyn Houston",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: 1977 film holiday",
      "Fact: Local revolutionary actor",
      "Answer: Glyn Houston",
      "Source: British Comedy Guide film cast",
      "Full question: Which actor played revolutionary Cesar Rodriguez in the Are You Being Served? film?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1977 Feature Film",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36224",
    "category": "Television",
    "question": "What false aristocratic title does Mr Harman use to secure a superior room in Are You Being Served?: The Movie?",
    "answers": [
      "Duke of London",
      "Lord Rumbold",
      "Earl of Harman",
      "Count of Costa Plonka"
    ],
    "correctAnswer": "Earl of Harman",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: 1977 film holiday",
      "Fact: Harman's hotel reservation trick",
      "Answer: Earl of Harman",
      "Source: 1977 film storyline",
      "Full question: What false aristocratic title does Mr Harman use to secure a superior room in Are You Being Served?: The Movie?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1977 Feature Film",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36225",
    "category": "Television",
    "question": "Who portrayed the hotel maid Conchita in the Are You Being Served? film?",
    "answers": [
      "Penny Irving",
      "Sheila Steafel",
      "Monica Grey",
      "Karan David"
    ],
    "correctAnswer": "Karan David",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: 1977 film holiday",
      "Fact: Conchita film casting",
      "Answer: Karan David",
      "Source: British Comedy Guide film cast",
      "Full question: Who portrayed the hotel maid Conchita in the Are You Being Served? film?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1977 Feature Film",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36226",
    "category": "Television",
    "question": "Which actor played the Emir in the 1977 feature film Are You Being Served??",
    "answers": [
      "Derek Griffiths",
      "Glyn Houston",
      "Nadim Sawalha",
      "Andrew Sachs"
    ],
    "correctAnswer": "Derek Griffiths",
    "difficulty": "Hard",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: 1977 film guest roles",
      "Fact: Emir guest performer",
      "Answer: Derek Griffiths",
      "Source: British Comedy Guide film cast",
      "Full question: Which actor played the Emir in the 1977 feature film Are You Being Served??",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1977 Feature Film",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36227",
    "category": "Television",
    "question": "Which actor played the Emir's interpreter in the Are You Being Served? film?",
    "answers": [
      "Derek Griffiths",
      "Nadim Sawalha",
      "Glyn Houston",
      "John G. Heller"
    ],
    "correctAnswer": "Nadim Sawalha",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: 1977 film guest roles",
      "Fact: Interpreter guest casting",
      "Answer: Nadim Sawalha",
      "Source: British Comedy Guide film cast",
      "Full question: Which actor played the Emir's interpreter in the Are You Being Served? film?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1977 Feature Film",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36228",
    "category": "Television",
    "question": "Which actress from the TV cast played Miss Nicholson rather than Miss Bakewell in the Are You Being Served? film?",
    "answers": [
      "Wendy Richard",
      "Doremy Vernon",
      "Penny Irving",
      "Moira Foot"
    ],
    "correctAnswer": "Penny Irving",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: 1977 film guest roles",
      "Fact: Different character played in film",
      "Answer: Penny Irving",
      "Source: British Comedy Guide film cast",
      "Full question: Which actress from the TV cast played Miss Nicholson rather than Miss Bakewell in the Are You Being Served? film?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1977 Feature Film",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36229",
    "category": "Television",
    "question": "In which seaside town did the 1976 stage production that preceded the Are You Being Served? film play?",
    "answers": [
      "Brighton",
      "Bournemouth",
      "Margate",
      "Blackpool"
    ],
    "correctAnswer": "Blackpool",
    "difficulty": "Medium",
    "tags": [
      "Are You Being Served?",
      "British Comedy",
      "British Television",
      "1970s sitcom",
      "BBC television",
      "Grace Brothers",
      "Sitcom Cast and Production",
      "Jeremy Lloyd and David Croft",
      "Topic: 1976 stage production",
      "Fact: Original summer stage run",
      "Answer: Blackpool",
      "Source: 1976 Winter Gardens production history",
      "Full question: In which seaside town did the 1976 stage production that preceded the Are You Being Served? film play?",
      "TV pack 312 audit",
      "November 2026",
      "UK English",
      "Series 4 to 6 and film",
      "1976-1978 British television",
      "1970s Series Specific",
      "Verified cast and production credits",
      "Comedy drama history"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if (questions.length!==131 ||
 new Set(questions.map(q=>q.id)).size!==questions.length ||
 new Set(questions.map(q=>q.question.trim().toLowerCase())).size!==questions.length ||
 questions.some(q=>q.answers.length!==4 ||
 new Set(q.answers.map(a=>a.trim().toLowerCase())).size!==4 ||
 q.answers.filter(a=>a===q.correctAnswer).length!==1 ||
 q.tags.length<15 || !q.tags.includes('Are You Being Served?') || q.dailyEligible!==true) ||
 auditAdditions.some(q=>q.tags.length<18 || !q.question.includes('Are You Being Served?')))
 throw Error('Pack 312 audit validation failed');

module.exports = questions;
