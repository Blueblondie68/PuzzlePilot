// quiz_pack355.js
// PuzzlePilot — The Bigggggg Quiz
// Television comedy: Oh, Doctor Beeching! / Dear John (UK).
// Both outstanding in PP_Quiz_Master_Through_Pack_351_Corrected.xlsx.
// Sources: David Croft's official Oh, Doctor Beeching! episode archive;
// British Comedy Guide (programme, episode and cast guides for both shows).
// All facts were checked against programme histories or episode descriptions.
// Seven unique, question-specific tags per question, plus programme metadata.
// WordPad-ready CommonJS. No external dependencies.

const FIRST_ID = 17396;

const beechingFacts = `At which fictional railway station is Oh, Doctor Beeching! set?|Hatley|Hogsmeade|Arkwright|Cranford|Easy|Hatley Station|Fictional Railway Station|Rural Outpost|British Railways|Programme Setting|Railway Sitcom|Station Staff
In which decade is Oh, Doctor Beeching! set?|The 1960s|The 1940s|The 1980s|The 1920s|Easy|1963 Setting|Beeching Cuts|Period Sitcom|British Railways History|Railway Closures|Sixties Britain|Drama Period
Which BBC channel originally showed Oh, Doctor Beeching!?|BBC One|BBC Two|ITV|Channel 4|Easy|BBC One|Original Broadcaster|BBC Sitcom|British Television|1995 Pilot|1990s Comedy|Network History
In which year was the pilot episode of Oh, Doctor Beeching! first broadcast?|1995|1989|1992|2001|Medium|1995 Pilot|14 August 1995|BBC Comedy Pilot|Initial Broadcast|Series Launch|Television Timeline|Programme Debut
Which railway executive's proposed closures provide the backdrop to Oh, Doctor Beeching!?|Dr Beeching|Isambard Kingdom Brunel|George Stephenson|Sir Nigel Gresley|Easy|Dr Richard Beeching|Railway Closures|Beeching Axe|British Railways|Station Threat|1963 Setting|Historical Context
Who co-wrote Oh, Doctor Beeching! alongside Richard Spendlove?|David Croft|John Sullivan|Carla Lane|Roy Clarke|Medium|David Croft|Richard Spendlove|Writer Partnership|Sitcom Creation|BBC Comedy|Programme Credits|Scriptwriting
Who played station porter Jack Skinner in Oh, Doctor Beeching!?|Paul Shane|Stephen Lewis|Jeffrey Holland|Perry Benson|Easy|Paul Shane|Jack Skinner|Station Porter|Leading Cast|Actor Character|Railway Employee|BBC Sitcom
Who portrayed booking-office worker Ethel Schumann?|Su Pollard|Julia Deakin|Barbara New|Lindsay Grimshaw|Easy|Su Pollard|Ethel Schumann|Booking Office|Actress Role|Station Employee|BBC Comedy|Railway Worker
Which actor played new station master Cecil Parkin?|Jeffrey Holland|Paul Shane|Terry John|Ivor Roberts|Easy|Jeffrey Holland|Cecil Parkin|Station Master|New Arrival|Lead Character|Cast Identification|Hatley Management
Who portrayed Jack Skinner's wife May?|Julia Deakin|Su Pollard|Barbara New|Tara Daniels|Medium|Julia Deakin|May Skinner|Jack Wife|Station Buffet|Actress Role|Married Couple|Hatley Staff
Which actress played station cleaner Vera Plumtree?|Barbara New|Julia Deakin|Su Pollard|Lindsay Grimshaw|Medium|Barbara New|Vera Plumtree|Station Cleaner|Supporting Cast|Actress Identification|Hatley Cleaning|Character Role
Who played Hatley signalman Harry Lambert?|Stephen Lewis|Paul Shane|Jeffrey Holland|Ivor Roberts|Medium|Stephen Lewis|Harry Lambert|Signalman|Railway Signals|Character Casting|Station Workforce|1990s Sitcom
Which actor played trainee engine driver Ralph?|Perry Benson|Terry John|Paul Aspden|Richard Spendlove|Medium|Perry Benson|Ralph|Trainee Engine Driver|Young Railway Worker|Actor Casting|Engine Crew|Hatley Staff
What position does Cecil Parkin hold when he arrives at Hatley?|Station master|Signalman|Buffet manager|Train guard|Easy|Cecil Parkin|Station Master|Hatley Management|New Boss|Railway Administration|Opening Story|Staff Leadership
Which part of Hatley station is May Skinner responsible for?|The buffet|The signal box|The booking office|The goods depot|Easy|May Skinner|Station Buffet|Refreshments|Railway Catering|Hatley Workplace|Staff Duties|Food Service
Who is in charge of the booking office at Hatley?|Ethel Schumann|Gloria Skinner|Vera Plumtree|May Skinner|Easy|Ethel Schumann|Booking Office|Ticketing|Railway Clerical Work|Hatley Station|Station Duties|Front Desk
Which character is the mother of Gloria Skinner?|May Skinner|Ethel Schumann|Vera Plumtree|Amy Matlock|Medium|Gloria Skinner|May Skinner|Mother Daughter|Skinner Family|Railway Sitcom|Family Relationships|Hatley Residents
Who played Gloria Skinner, the daughter of Jack and May?|Lindsay Grimshaw|Tara Daniels|Julia Deakin|Rachel Bell|Hard|Lindsay Grimshaw|Gloria Skinner|Actor Casting|Skinner Daughter|Young Character|Hatley Family|Supporting Actress
Who played Ethel Schumann's son Wilfred?|Paul Aspden|Perry Benson|Ivor Roberts|Terry John|Hard|Paul Aspden|Wilfred Schumann|Ethel Son|Young Character|Supporting Actor|Schumann Family|Cast Credits
Who played the railway guard Percy?|Terry John|Perry Benson|Paul Shane|Stephen Lewis|Hard|Terry John|Percy|Train Guard|Railway Staff|Character Casting|Supporting Role|Hatley Crew
In Talking Turkey from Oh, Doctor Beeching!, whose escaped bird disrupts railway traffic?|Harry Lambert's|Jack Skinner's|Cecil Parkin's|Vera Plumtree's|Medium|Talking Turkey|Escaped Bird|Harry Lambert Signalman|Railway Halt|Hatley Station|1996 Series One|Animal Mishap
In The Train Now Standing, what new equipment does Mr Parkin install?|A public-address system|A vending machine|A ticket barrier|An electric clock|Medium|The Train Now Standing|Public Address|Station Announcements|Cecil Parkin|Modernisation|Booking Office|1996 Episode
Who is chosen to make announcements over the new system in The Train Now Standing?|Ethel Schumann|Vera Plumtree|May Skinner|Gloria Skinner|Medium|The Train Now Standing|Ethel Schumann|Announcement Duty|New Speaker System|Stage Fright|Booking Office|Hatley Broadcasting
What has to be moved into the station master's house in A Moving Story?|Mr Parkin's furniture|Railway sleepers|A piano from the buffet|A shipment of books|Medium|A Moving Story|Cecil Parkin House|Furniture Move|Station Master Lodgings|1996 Episode|Staff Assistance|Domestic Chaos
What unexpected object arrives at Hatley in The Late Mr Buckly?|A coffin|A wedding cake|A grand piano|A circus tent|Medium|The Late Mr Buckly|Coffin Arrival|Station Delivery|Funeral Cargo|1996 Episode|Railway Confusion|Unexpected Parcel
In Horse Play, what gift from Mr Parkin causes trouble for May?|Expensive lingerie|A gold watch|A bicycle|A pearl necklace|Medium|Horse Play|Cecil Parkin|May Skinner|Lingerie Gift|Old Romance|Jack Suspicions|1996 Storyline
In Past Love, what job does Cecil Parkin's former fiancée Edna Taylor hold?|Tax inspector|Schoolteacher|Nurse|Police sergeant|Hard|Past Love|Edna Taylor|Tax Inspector|Cecil Former Fiancee|Romantic Past|1996 Episode|Visitor To Hatley
In Job Opportunity, at which station does May seek a better-paid job?|Loxley|Cranford|Brackley|Bletchley|Hard|Job Opportunity|Loxley Station|May Skinner|Career Move|Railway Employment|1996 Episode|Station Transfer
In Sleeping Around, which two young people cause parental alarm by not sleeping in their beds?|Gloria and Wilfred|Ethel and Percy|May and Jack|Vera and Ralph|Medium|Sleeping Around|Gloria Skinner|Wilfred Schumann|Worried Parents|Family Mystery|1996 Episode|Young Romance
During a ministerial visit to Hatley in Oh, Doctor Beeching!, what new booking-office notice confuses Ethel?|Position Closed|Tickets Please|No Change Given|Staff Only|Medium|No Milk For The Minister|Ethel Schumann|Booking Office Sign|Ministerial Visit|Cecil Parkin Reform|1997 Series Two|Railway Notices
In Father's Day, whose parentage becomes a matter of uncertainty?|Gloria Skinner's|Wilfred Schumann's|Ralph's|Amy Matlock's|Medium|Fathers Day|Gloria Skinner|Jack Skinner|Cecil Parkin|Paternity Question|Family Secret|1997 Episode
In The Gravy Train, what valuable item does Jack Skinner find?|A suitcase full of banknotes|A bag of gold watches|A box of jewels|A railway payroll cheque|Medium|The Gravy Train|Jack Skinner|Suitcase Of Money|Found Property|Cash Discovery|1997 Episode|Railway Mystery
In The Van, what practical problem does Mr Parkin have with his new railway vehicle?|He cannot drive|He has lost the keys|The engine is missing|The doors are welded shut|Easy|The Van|Cecil Parkin|Driving Inability|British Railways Vehicle|Station Master|1997 Episode|Transport Mishap
Which trainee worker goes on strike in Lucky Strike?|Ralph|Wilfred|Percy|Arnold|Medium|Lucky Strike|Ralph|Trainee Engine Driver|Industrial Action|Railway Strike|1997 Episode|Workplace Dispute
In Love Is A Very Splendid Thing, what is Joe's occupation?|American airman|French chef|Railway inspector|Local policeman|Hard|Love Is A Very Splendid Thing|Joe|American Airman|Ethel Schumann|Romantic Interest|1997 Episode|Cinema Date
In A Bowl in the Hand from Oh, Doctor Beeching!, who insists Jack should join the outing instead of Cecil?|Mr Orkindale|Frederick Foster|Dr Beeching|Joe the airman|Medium|A Bowl In The Hand|Hatley Bowls Club|Mr Orkindale|Jack Skinner Outing|Cecil Left Behind|Staff Weekend|Series Two
Which important railway figure is expected at Hatley in Action Stations?|Dr Beeching|Sir John Betjeman|George Stephenson|Mr Brunel|Medium|Action Stations|Dr Beeching Visit|Lady Lawrence|Hatley Station|Railway Closures|1997 Episode|Special Guest
In A Pregnant Pause, who worries about losing his job after diesel-engine training?|Arnold|Percy|Wilfred|Ralph|Medium|A Pregnant Pause|Arnold|Diesel Engine Training|Railway Modernisation|Job Anxiety|1997 Episode|Engine Crew
In the Oh, Doctor Beeching! finale, which trainee successfully drives the train at Hatley's anniversary celebration?|Ralph|Wilfred|Arnold|Harry Lambert|Medium|Ton Up Finale|Ralph Driver|Hatley Centenary|Train Journey|1997 Programme Ending|Railway Celebration|Series Two Finale`;

const dearJohnFacts = `Who played John Lacey in the original British sitcom Dear John?|Ralph Bates|John Sullivan|Peter Blake|Peter Denyer|Easy|Ralph Bates|John Lacey|Lead Actor|Central Character|British Cast|Divorced Teacher|BBC Sitcom
Which writer created the British television sitcom Dear John?|John Sullivan|Richard Curtis|David Croft|Roy Clarke|Easy|John Sullivan|Programme Creator|Screenwriter|1980s Sitcom|BBC Comedy|Script Authorship|Television Credits
Which BBC channel originally broadcast Dear John?|BBC One|BBC Two|ITV|Channel 4|Easy|BBC One|Broadcast Network|Original Programme|1980s British Television|John Sullivan Series|Comedy Channel|First Transmission
In which year did the British sitcom Dear John begin?|1986|1979|1990|1994|Easy|1986 Premiere|17 February 1986|Series Debut|BBC Sitcom History|First Episode|1980s Television|Broadcast Timeline
What is John Lacey's occupation in Dear John?|Secondary school teacher|Solicitor|Train driver|Estate agent|Easy|John Lacey|Schoolteacher|Secondary Education|Character Occupation|Employment|Working Life|Series Premise
Why does John Lacey join a singles club at the start of Dear John?|His wife has left him|He has moved to a new country|He has retired|He wants to find a flatmate|Easy|John Lacey|Marriage Breakdown|New Social Circle|Singles Club|Separated Husband|Series Premise|Loneliness
For whom does John's wife leave him?|His best friend Mike|His school headmaster|His brother|A television producer|Medium|John Wife|Mike|Best Friend|Infidelity|Marriage Split|Story Backstory|Relationship Breakdown
What is the name of the singles club attended by John in Dear John?|1-2-1|The Lonely Hearts Society|Club Together|Second Chances|Easy|One To One Club|1-2-1 Singles Club|Social Group|Divorced Members|Recurring Setting|Support Network|Club Identity
Who runs the 1-2-1 club in Dear John?|Louise|Kate|Sylvia|Mrs Arnott|Easy|Louise|Singles Club Organiser|Meeting Leader|1-2-1 Club|Social Meetings|Group Facilitator|Recurring Character
Which actress played Louise, the organiser of the 1-2-1 club?|Rachel Bell|Belinda Lang|Jean Challis|Lucinda Curtis|Medium|Rachel Bell|Louise|Club Organiser|Actress Casting|BBC Ensemble|Character Role|Dear John Performer
Who played the flamboyant 1-2-1 club member Kirk?|Peter Blake|Ralph Bates|Terence Edmond|Peter Denyer|Medium|Peter Blake|Kirk|Singles Club Member|Actor Casting|Group Friend|Recurring Character|1980s Comedy
Which actress played Kate, another regular member of the singles club?|Belinda Lang|Rachel Bell|Lucinda Curtis|Jean Challis|Medium|Belinda Lang|Kate|1-2-1 Club Member|Actress Casting|Recurring Character|Comedy Ensemble|1980s Performer
Who portrayed the club member named Ralph in Dear John?|Peter Denyer|Peter Blake|Ralph Bates|Ray Butt|Medium|Peter Denyer|Ralph Character|Singles Club Member|Actor Casting|Recurring Friend|Character Name|BBC Comedy
Which actress portrayed the older club member Mrs Arnott?|Jean Challis|Belinda Lang|Rachel Bell|Lucinda Curtis|Hard|Jean Challis|Mrs Arnott|Singles Club Regular|Actress Role|Older Group Member|BBC Ensemble|Character Casting
Who played Sylvia, a character appearing in Dear John's second series?|Lucinda Curtis|Belinda Lang|Rachel Bell|Jean Challis|Hard|Lucinda Curtis|Sylvia|Series Two Cast|Actress Identification|1987 Episodes|Supporting Role|Club Member
What is the first name of John Lacey's son?|Toby|Ralph|Billy|Simon|Easy|Toby Lacey|John Son|Father Son Relationship|Family Contact|Divorce Parenting|Character Identity|Sunday Visit
What kind of accommodation does John move into following his separation?|A bedsit|A farmhouse|A hotel suite|A houseboat|Easy|John Bedsit|Separation|New Accommodation|Divorce Consequence|Character Home|Change Of Circumstances|Urban Housing
Who was credited as producer of the original British Dear John series?|Ray Butt|Roy Gould|David Yates|Peter Spence|Hard|Ray Butt|Director|Producer|John Sullivan Collaborator|BBC Production Crew|Programme Credits|1980s Television
Which famous BBC sitcom did Dear John writer John Sullivan also create?|Only Fools and Horses|Fawlty Towers|Porridge|The Good Life|Easy|John Sullivan|Only Fools And Horses|Sitcom Writer|Cross Programme Connection|British Comedy Legacy|BBC Scriptwriting|Creator Credits
In the third episode of Dear John, what kind of pet belonging to Ralph has died?|A terrapin|A budgerigar|A rabbit|A goldfish|Medium|Series One Episode Three|Ralph|Dead Terrapin|Bad Luck|Pet Death|Egyptian Curse|March 1986
What ancient civilisation does Ralph blame for his run of bad luck?|Ancient Egypt|Ancient Rome|Ancient Greece|The Maya|Medium|Series One Episode Three|Egyptian Curse|Ralph Character|Misfortune|Superstition|1986 Storyline|Bad Luck Explanation
In the fourth episode of Dear John, who returns to town and raises John's hopes?|A former fiancée|His estranged father|A university tutor|His old employer|Medium|Series One Episode Four|Old Fiancee|Party Invitation|John Lacey|Former Romance|March 1986|Social Life
Which club member asks John to help him woo Kate in the first series finale?|Kirk|Ralph|Ken|Roger|Medium|Series One Finale|Kirk|Kate|Romantic Pursuit|John Advice|Under Cover|1986 Episode
In the second series, which city does Mrs Arnott travel to in order to care for her grandchildren?|Sheffield|Bristol|Leeds|Norwich|Hard|Mrs Arnott|Sheffield|Grandchildren|Family Care|Series Two Episode Two|1987 Storyline|Temporary Departure
What kind of themed party is proposed for Mrs Arnott's farewell in series two?|A 1960s party|A Wild West party|A fancy-dress ball set in 1920|A Christmas masquerade|Medium|Mrs Arnott Farewell|Sixties Theme Night|Fundraising Party|Series Two Episode Two|1987 Club Event|John Organising|Group Celebration
Who is concerned when John's son appears depressed in the second series?|Wendy|Kate|Mrs Arnott|Sylvia|Hard|Toby Depression|Wendy|John Lacey|Parental Concern|Series Two Episode Three|1987 Storyline|Child Welfare
Whose marriage to Maggie is under strain in the fourth episode of series two?|Ken's|Kirk's|Ralph's|Roger's|Medium|Ken And Maggie|Marital Problems|Series Two Episode Four|John Invited|1987 Episode|Marriage Conflict|Past Friendship
What senior school job does John hear he has obtained in the final regular episode of Dear John?|Headmaster|Deputy caretaker|School bursar|Examinations clerk|Medium|Series Two Episode Six|John Career|Headmaster|Successful Application|1987 Episode|Teaching Promotion|Workplace News
In Dear John's 1987 Christmas special, what injury does Mike suffer?|A broken leg|A dislocated shoulder|A fractured wrist|A sprained ankle|Medium|Christmas Special|Mike Injury|Broken Leg|John Lacey|December 1987|Holiday Storyline|Festive Episode
In the Christmas special of Dear John, who has trouble with a biker gang?|Ralph|John|Kirk|Ken|Medium|1987 Christmas Special|Ralph|Biker Gang|Club Member Troubles|Festive Episode|December Broadcast|Supporting Character`;

const normalise = value => value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
const questions = [];

function addProgramme(programme, programmeTags, facts) {
  for (const row of facts.trim().split('\n')) {
    const id = 'tv_' + String(FIRST_ID + questions.length).padStart(5, '0');
    const fields = row.trim().split('|').map(x => x.trim());
    if (fields.length !== 13)
      throw new Error(`Pack 355: expected 13 fields for ${id}, got ${fields.length}`);

    const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...bespokeTags] = fields;

    if ([question, correctAnswer, wrong1, wrong2, wrong3, ...bespokeTags].some(x => !x))
      throw new Error(`Pack 355: blank question data in ${id}`);

    if (!['Easy', 'Medium', 'Hard'].includes(difficulty) ||
        bespokeTags.length !== 7 ||
        new Set(bespokeTags.map(normalise)).size !== 7)
      throw new Error(`Pack 355: invalid difficulty or question-specific tags in ${id}`);

    const choices = [wrong1, wrong2, wrong3];

    if (new Set([correctAnswer, ...choices].map(normalise)).size !== 4)
      throw new Error(`Pack 355: duplicate answer choice in ${id}`);

    choices.splice(questions.length % 4, 0, correctAnswer);

    const tags = [...new Map([
      'Television', 'British Television', 'Sitcom', 'Comedy',
      ...programmeTags, programme, `Programme: ${programme}`,
      correctAnswer, ...bespokeTags
    ].map(t => [normalise(t), t])).values()];

    questions.push({
      id,
      category: 'Television',
      programme,
      question,
      answers: choices,
      correctAnswer,
      difficulty,
      tags,
      dailyEligible: true
    });
  }
}

addProgramme(
  'Oh, Doctor Beeching!',
  ['BBC One', '1995-1997', 'David Croft', 'Railway Comedy'],
  beechingFacts
);

addProgramme(
  'Dear John',
  ['BBC One', '1986-1987', 'John Sullivan', 'Singles Club Comedy'],
  dearJohnFacts
);

// Validate exported question objects, not merely the source rows.
if (
  !questions.length ||
  questions[0].id !== 'tv_17396' ||
  new Set(questions.map(q => q.id)).size !== questions.length ||
  new Set(questions.map(q => normalise(q.question))).size !== questions.length
) {
  throw new Error('Pack 355: duplicate IDs or questions');
}

if (questions.some((q, i) =>
  q.id !== 'tv_' + String(FIRST_ID + i).padStart(5, '0') ||
  q.category !== 'Television' ||
  !q.programme ||
  q.answers.length !== 4 ||
  !q.answers.includes(q.correctAnswer) ||
  new Set(q.answers.map(normalise)).size !== 4 ||
  q.tags.length < 14 ||
  new Set(q.tags.map(normalise)).size !== q.tags.length ||
  !q.tags.includes(`Programme: ${q.programme}`) ||
  q.dailyEligible !== true ||
  !['Easy', 'Medium', 'Hard'].includes(q.difficulty)
)) {
  throw new Error('Pack 355: invalid exported question object');
}


// Pack 355 audited 21 November 2026: original IDs preserved; episode and character expansions.
const auditAdditions = [
  {
    "id": "tv_38916",
    "category": "Television",
    "programme": "Oh, Doctor Beeching!",
    "question": "Who portrayed May Skinner in the 1995 pilot before Julia Deakin took the part in the series?",
    "answers": [
      "Michele Dotrice",
      "Sherrie Hewson",
      "Su Pollard",
      "Barbara New"
    ],
    "correctAnswer": "Sherrie Hewson",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Oh, Doctor Beeching!",
      "Programme: Oh, Doctor Beeching!",
      "BBC Railway Comedy",
      "David Croft",
      "Episode or topic: Pilot casting",
      "Key story: Different actress in pilot",
      "Correct fact: Sherrie Hewson",
      "Character event: Different actress in pilot",
      "1990s Television",
      "Storyline detail: Different actress in pilot",
      "Episode context: Pilot casting",
      "Source: https://www.comedy.co.uk/tv/oh_doctor_beeching/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38917",
    "category": "Television",
    "programme": "Oh, Doctor Beeching!",
    "question": "Who had been romantically involved with new station master Cecil Parkin before marrying Jack?",
    "answers": [
      "Ethel Schumann",
      "Gloria Skinner",
      "May Skinner",
      "Vera Plumtree"
    ],
    "correctAnswer": "May Skinner",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Oh, Doctor Beeching!",
      "Programme: Oh, Doctor Beeching!",
      "BBC Railway Comedy",
      "David Croft",
      "Episode or topic: All Change",
      "Key story: Former lover at station",
      "Correct fact: May Skinner",
      "Character event: Former lover at station",
      "1990s Television",
      "Storyline detail: Former lover at station",
      "Episode context: All Change",
      "Source: https://www.davidcroft.co.uk/Oh-Dr-Beeching/Episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38918",
    "category": "Television",
    "programme": "Oh, Doctor Beeching!",
    "question": "What was May Skinner's surname before her marriage to Jack?",
    "answers": [
      "Buckly",
      "Schumann",
      "Lambert",
      "Blanchflower"
    ],
    "correctAnswer": "Blanchflower",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Oh, Doctor Beeching!",
      "Programme: Oh, Doctor Beeching!",
      "BBC Railway Comedy",
      "David Croft",
      "Episode or topic: All Change",
      "Key story: May's family name",
      "Correct fact: Blanchflower",
      "Character event: May's family name",
      "1990s Television",
      "Storyline detail: May's family name",
      "Episode context: All Change",
      "Source: https://www.davidcroft.co.uk/Oh-Dr-Beeching/Episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38919",
    "category": "Television",
    "programme": "Oh, Doctor Beeching!",
    "question": "To whom does May reveal her history with Cecil in A Moving Story?",
    "answers": [
      "Ethel Schumann",
      "Vera Plumtree",
      "Gloria Skinner",
      "Harry Lambert"
    ],
    "correctAnswer": "Ethel Schumann",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Oh, Doctor Beeching!",
      "Programme: Oh, Doctor Beeching!",
      "BBC Railway Comedy",
      "David Croft",
      "Episode or topic: A Moving Story",
      "Key story: Private confession",
      "Correct fact: Ethel Schumann",
      "Character event: Private confession",
      "1990s Television",
      "Storyline detail: Private confession",
      "Episode context: A Moving Story",
      "Source: https://www.davidcroft.co.uk/Oh-Dr-Beeching/Episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38920",
    "category": "Television",
    "programme": "Oh, Doctor Beeching!",
    "question": "Which railway installation catches fire in Horse Play before a second blaze starts on the platform?",
    "answers": [
      "The platform clock",
      "Harry Lambert's signal",
      "A ticket machine",
      "The station buffet"
    ],
    "correctAnswer": "Harry Lambert's signal",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Oh, Doctor Beeching!",
      "Programme: Oh, Doctor Beeching!",
      "BBC Railway Comedy",
      "David Croft",
      "Episode or topic: Horse Play",
      "Key story: Signal fire",
      "Correct fact: Harry Lambert's signal",
      "Character event: Signal fire",
      "1990s Television",
      "Storyline detail: Signal fire",
      "Episode context: Horse Play",
      "Source: https://www.davidcroft.co.uk/Oh-Dr-Beeching/Episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38921",
    "category": "Television",
    "programme": "Oh, Doctor Beeching!",
    "question": "For how many birthdays since their previous meeting does Cecil buy May expensive gifts?",
    "answers": [
      "Six",
      "Twelve",
      "Eighteen",
      "Twenty-five"
    ],
    "correctAnswer": "Eighteen",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Oh, Doctor Beeching!",
      "Programme: Oh, Doctor Beeching!",
      "BBC Railway Comedy",
      "David Croft",
      "Episode or topic: Horse Play",
      "Key story: Cecil's birthday gifts",
      "Correct fact: Eighteen",
      "Character event: Cecil's birthday gifts",
      "1990s Television",
      "Storyline detail: Cecil's birthday gifts",
      "Episode context: Horse Play",
      "Source: https://www.davidcroft.co.uk/Oh-Dr-Beeching/Episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38922",
    "category": "Television",
    "programme": "Oh, Doctor Beeching!",
    "question": "What animal are the railway workers hiding from Cecil in Past Love?",
    "answers": [
      "A turkey",
      "A goat",
      "A horse",
      "A pig"
    ],
    "correctAnswer": "A pig",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Oh, Doctor Beeching!",
      "Programme: Oh, Doctor Beeching!",
      "BBC Railway Comedy",
      "David Croft",
      "Episode or topic: Past Love",
      "Key story: Concealed Christmas animal",
      "Correct fact: A pig",
      "Character event: Concealed Christmas animal",
      "1990s Television",
      "Storyline detail: Concealed Christmas animal",
      "Episode context: Past Love",
      "Source: https://www.davidcroft.co.uk/Oh-Dr-Beeching/Episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38923",
    "category": "Television",
    "programme": "Oh, Doctor Beeching!",
    "question": "How long had Cecil Parkin been engaged to Edna Taylor before their relationship collapsed?",
    "answers": [
      "Six years",
      "Two years",
      "Nine years",
      "Twelve years"
    ],
    "correctAnswer": "Six years",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Oh, Doctor Beeching!",
      "Programme: Oh, Doctor Beeching!",
      "BBC Railway Comedy",
      "David Croft",
      "Episode or topic: Past Love",
      "Key story: Engagement length",
      "Correct fact: Six years",
      "Character event: Engagement length",
      "1990s Television",
      "Storyline detail: Engagement length",
      "Episode context: Past Love",
      "Source: https://www.davidcroft.co.uk/Oh-Dr-Beeching/Episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38924",
    "category": "Television",
    "programme": "Oh, Doctor Beeching!",
    "question": "Which man interviewing May for a new job had been involved in the end of Harry Lambert's marriage?",
    "answers": [
      "Mr Orkindale",
      "Frederick Foster",
      "Dr Beeching",
      "Joe the airman"
    ],
    "correctAnswer": "Frederick Foster",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Oh, Doctor Beeching!",
      "Programme: Oh, Doctor Beeching!",
      "BBC Railway Comedy",
      "David Croft",
      "Episode or topic: Job Opportunity",
      "Key story: Harry's former wife's partner",
      "Correct fact: Frederick Foster",
      "Character event: Harry's former wife's partner",
      "1990s Television",
      "Storyline detail: Harry's former wife's partner",
      "Episode context: Job Opportunity",
      "Source: https://www.davidcroft.co.uk/Oh-Dr-Beeching/Episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38925",
    "category": "Television",
    "programme": "Oh, Doctor Beeching!",
    "question": "Who arranges a medical examination for Jack Skinner without his permission?",
    "answers": [
      "Harry Lambert",
      "Ethel Schumann",
      "Cecil Parkin",
      "May Skinner"
    ],
    "correctAnswer": "Cecil Parkin",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Oh, Doctor Beeching!",
      "Programme: Oh, Doctor Beeching!",
      "BBC Railway Comedy",
      "David Croft",
      "Episode or topic: Sleeping Around",
      "Key story: Unwanted medical appointment",
      "Correct fact: Cecil Parkin",
      "Character event: Unwanted medical appointment",
      "1990s Television",
      "Storyline detail: Unwanted medical appointment",
      "Episode context: Sleeping Around",
      "Source: https://www.davidcroft.co.uk/Oh-Dr-Beeching/Episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38926",
    "category": "Television",
    "programme": "Oh, Doctor Beeching!",
    "question": "What event is Ethel hoping to find a date for during Sleeping Around?",
    "answers": [
      "A wedding",
      "A charity auction",
      "A school concert",
      "A Saturday dance"
    ],
    "correctAnswer": "A Saturday dance",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Oh, Doctor Beeching!",
      "Programme: Oh, Doctor Beeching!",
      "BBC Railway Comedy",
      "David Croft",
      "Episode or topic: Sleeping Around",
      "Key story: Ethel seeks companion",
      "Correct fact: A Saturday dance",
      "Character event: Ethel seeks companion",
      "1990s Television",
      "Storyline detail: Ethel seeks companion",
      "Episode context: Sleeping Around",
      "Source: https://www.davidcroft.co.uk/Oh-Dr-Beeching/Episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38927",
    "category": "Television",
    "programme": "Oh, Doctor Beeching!",
    "question": "How many extra small stations does Cecil manage in addition to Hatley in The Van?",
    "answers": [
      "Two",
      "One",
      "Three",
      "Four"
    ],
    "correctAnswer": "Two",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Oh, Doctor Beeching!",
      "Programme: Oh, Doctor Beeching!",
      "BBC Railway Comedy",
      "David Croft",
      "Episode or topic: The Van",
      "Key story: Station master additional responsibilities",
      "Correct fact: Two",
      "Character event: Station master additional responsibilities",
      "1990s Television",
      "Storyline detail: Station master additional responsibilities",
      "Episode context: The Van",
      "Source: https://www.davidcroft.co.uk/Oh-Dr-Beeching/Episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38928",
    "category": "Television",
    "programme": "Oh, Doctor Beeching!",
    "question": "Where does Ethel first meet American airman Joe in Love Is a Very Splendid Thing?",
    "answers": [
      "The railway platform",
      "A café",
      "A hotel bar",
      "The station buffet"
    ],
    "correctAnswer": "A café",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Oh, Doctor Beeching!",
      "Programme: Oh, Doctor Beeching!",
      "BBC Railway Comedy",
      "David Croft",
      "Episode or topic: Love Is A Very Splendid Thing",
      "Key story: Ethel first meets Joe",
      "Correct fact: A café",
      "Character event: Ethel first meets Joe",
      "1990s Television",
      "Storyline detail: Ethel first meets Joe",
      "Episode context: Love Is A Very Splendid Thing",
      "Source: https://www.davidcroft.co.uk/Oh-Dr-Beeching/Episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38929",
    "category": "Television",
    "programme": "Oh, Doctor Beeching!",
    "question": "Why does Mr Orkindale really want Jack rather than Cecil on the bowls outing?",
    "answers": [
      "Jack owns a bowling green",
      "Jack can drive a bus",
      "Jack buys his round of drinks",
      "Jack is the club secretary"
    ],
    "correctAnswer": "Jack buys his round of drinks",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Oh, Doctor Beeching!",
      "Programme: Oh, Doctor Beeching!",
      "BBC Railway Comedy",
      "David Croft",
      "Episode or topic: A Bowl In The Hand",
      "Key story: Orkindale invites Jack",
      "Correct fact: Jack buys his round of drinks",
      "Character event: Orkindale invites Jack",
      "1990s Television",
      "Storyline detail: Orkindale invites Jack",
      "Episode context: A Bowl In The Hand",
      "Source: https://www.davidcroft.co.uk/Oh-Dr-Beeching/Episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38930",
    "category": "Television",
    "programme": "Oh, Doctor Beeching!",
    "question": "What family question troubles Jack and May while Arnold fears losing his railway job?",
    "answers": [
      "Whether to move abroad",
      "Whether to sell the buffet",
      "Whether to retire",
      "Whether to have another baby"
    ],
    "correctAnswer": "Whether to have another baby",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Oh, Doctor Beeching!",
      "Programme: Oh, Doctor Beeching!",
      "BBC Railway Comedy",
      "David Croft",
      "Episode or topic: A Pregnant Pause",
      "Key story: Another child",
      "Correct fact: Whether to have another baby",
      "Character event: Another child",
      "1990s Television",
      "Storyline detail: Another child",
      "Episode context: A Pregnant Pause",
      "Source: https://www.davidcroft.co.uk/Oh-Dr-Beeching/Episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38931",
    "category": "Television",
    "programme": "Oh, Doctor Beeching!",
    "question": "What form of railway traction makes Arnold anxious after a difficult training day?",
    "answers": [
      "The new diesel locomotives",
      "Steam engines",
      "Cable cars",
      "Electric trams"
    ],
    "correctAnswer": "The new diesel locomotives",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Oh, Doctor Beeching!",
      "Programme: Oh, Doctor Beeching!",
      "BBC Railway Comedy",
      "David Croft",
      "Episode or topic: A Pregnant Pause",
      "Key story: Arnold's diesel training",
      "Correct fact: The new diesel locomotives",
      "Character event: Arnold's diesel training",
      "1990s Television",
      "Storyline detail: Arnold's diesel training",
      "Episode context: A Pregnant Pause",
      "Source: https://www.davidcroft.co.uk/Oh-Dr-Beeching/Episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38932",
    "category": "Television",
    "programme": "Oh, Doctor Beeching!",
    "question": "What do the staff wear for the centenary celebration at Hatley station?",
    "answers": [
      "Military uniforms",
      "Period clothing",
      "Sports uniforms",
      "Film-star fancy dress"
    ],
    "correctAnswer": "Period clothing",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Oh, Doctor Beeching!",
      "Programme: Oh, Doctor Beeching!",
      "BBC Railway Comedy",
      "David Croft",
      "Episode or topic: Ton Up",
      "Key story: Centenary costumes",
      "Correct fact: Period clothing",
      "Character event: Centenary costumes",
      "1990s Television",
      "Storyline detail: Centenary costumes",
      "Episode context: Ton Up",
      "Source: https://www.davidcroft.co.uk/Oh-Dr-Beeching/Episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38933",
    "category": "Television",
    "programme": "Dear John",
    "question": "On which day does John Lacey normally have access to his son Toby after his separation?",
    "answers": [
      "Wednesday",
      "Friday",
      "Sunday",
      "Saturday"
    ],
    "correctAnswer": "Sunday",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Characters",
      "Key story: John's custody visits",
      "Correct fact: Sunday",
      "Character event: John's custody visits",
      "1980s Television",
      "Storyline detail: John's custody visits",
      "Episode context: Characters",
      "Source: https://en.wikipedia.org/wiki/Dear_John_(British_TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38934",
    "category": "Television",
    "programme": "Dear John",
    "question": "Where do John and Toby repeatedly go on their allotted day together?",
    "answers": [
      "A swimming pool",
      "The cinema",
      "A library",
      "The zoo"
    ],
    "correctAnswer": "The zoo",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Characters",
      "Key story: Father-son outings",
      "Correct fact: The zoo",
      "Character event: Father-son outings",
      "1980s Television",
      "Storyline detail: Father-son outings",
      "Episode context: Characters",
      "Source: https://en.wikipedia.org/wiki/Dear_John_(British_TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38935",
    "category": "Television",
    "programme": "Dear John",
    "question": "What does Wendy say she intends to demand more of from John in a letter in the first series?",
    "answers": [
      "Money",
      "Custody rights",
      "Furniture",
      "School fees for herself"
    ],
    "correctAnswer": "Money",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Series 1 Episode 2",
      "Key story: Wendy asks for money",
      "Correct fact: Money",
      "Character event: Wendy asks for money",
      "1980s Television",
      "Storyline detail: Wendy asks for money",
      "Episode context: Series 1 Episode 2",
      "Source: https://www.comedy.co.uk/tv/dear_john/episodes/all/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38936",
    "category": "Television",
    "programme": "Dear John",
    "question": "Whose favourite nightclub does the singles club plan to visit in the first series?",
    "answers": [
      "Ralph's",
      "Kirk's",
      "Kate's",
      "Louise's"
    ],
    "correctAnswer": "Kirk's",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Series 1 Episode 2",
      "Key story: Nightclub excursion",
      "Correct fact: Kirk's",
      "Character event: Nightclub excursion",
      "1980s Television",
      "Storyline detail: Nightclub excursion",
      "Episode context: Series 1 Episode 2",
      "Source: https://www.comedy.co.uk/tv/dear_john/episodes/all/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38937",
    "category": "Television",
    "programme": "Dear John",
    "question": "Besides his pet dying, what else goes wrong for Ralph during his supposedly cursed week?",
    "answers": [
      "His motorbike is stolen",
      "He floods his home",
      "He loses his job",
      "He loses his passport"
    ],
    "correctAnswer": "He loses his job",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Series 1 Episode 3",
      "Key story: Ralph loses work",
      "Correct fact: He loses his job",
      "Character event: Ralph loses work",
      "1980s Television",
      "Storyline detail: Ralph loses work",
      "Episode context: Series 1 Episode 3",
      "Source: https://www.comedy.co.uk/tv/dear_john/episodes/all/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38938",
    "category": "Television",
    "programme": "Dear John",
    "question": "Which married colleague joins the singles club after John exaggerates his post-divorce adventures?",
    "answers": [
      "Mike",
      "Ralph",
      "Ricky Fortune",
      "Ken"
    ],
    "correctAnswer": "Ken",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Series 1 Episode 6",
      "Key story: Ken believes John's stories",
      "Correct fact: Ken",
      "Character event: Ken believes John's stories",
      "1980s Television",
      "Storyline detail: Ken believes John's stories",
      "Episode context: Series 1 Episode 6",
      "Source: https://www.comedy.co.uk/tv/dear_john/episodes/all/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38939",
    "category": "Television",
    "programme": "Dear John",
    "question": "Which entertainment job does Ralph begin doing during the first series?",
    "answers": [
      "Mobile disc jockey",
      "Piano player",
      "Stand-up comic",
      "Wedding singer"
    ],
    "correctAnswer": "Mobile disc jockey",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Series 1 Episode 6",
      "Key story: Ralph as DJ",
      "Correct fact: Mobile disc jockey",
      "Character event: Ralph as DJ",
      "1980s Television",
      "Storyline detail: Ralph as DJ",
      "Episode context: Series 1 Episode 6",
      "Source: https://www.comedy.co.uk/tv/dear_john/episodes/all/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38940",
    "category": "Television",
    "programme": "Dear John",
    "question": "What is the real identity behind the flamboyant Kirk St Moritz?",
    "answers": [
      "Kenny Taylor",
      "Eric Morris",
      "Roger Blake",
      "Peter Lacey"
    ],
    "correctAnswer": "Eric Morris",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Series 1 Episode 7",
      "Key story: Kirk true name",
      "Correct fact: Eric Morris",
      "Character event: Kirk true name",
      "1980s Television",
      "Storyline detail: Kirk true name",
      "Episode context: Series 1 Episode 7",
      "Source: https://en.wikipedia.org/wiki/Dear_John_(British_TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38941",
    "category": "Television",
    "programme": "Dear John",
    "question": "What nickname does Kirk's mother use for him when he is Eric Morris at home?",
    "answers": [
      "Sonny Boy",
      "Tiny Tim",
      "Big Ears",
      "Buster"
    ],
    "correctAnswer": "Big Ears",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Series 1 Episode 7",
      "Key story: Kirk domestic life",
      "Correct fact: Big Ears",
      "Character event: Kirk domestic life",
      "1980s Television",
      "Storyline detail: Kirk domestic life",
      "Episode context: Series 1 Episode 7",
      "Source: https://en.wikipedia.org/wiki/Dear_John_(British_TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38942",
    "category": "Television",
    "programme": "Dear John",
    "question": "What kind of school leads John and Wendy to pretend they are still together for Toby's admission?",
    "answers": [
      "A grammar school",
      "A boarding school",
      "A language school",
      "A Catholic school"
    ],
    "correctAnswer": "A Catholic school",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Series 2 Episode 1",
      "Key story: John and Wendy pretend marriage",
      "Correct fact: A Catholic school",
      "Character event: John and Wendy pretend marriage",
      "1980s Television",
      "Storyline detail: John and Wendy pretend marriage",
      "Episode context: Series 2 Episode 1",
      "Source: https://www.comedy.co.uk/tv/dear_john/episodes/all/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38943",
    "category": "Television",
    "programme": "Dear John",
    "question": "Which former pop singer joins the 1-2-1 club during the second series?",
    "answers": [
      "Ricky Fortune",
      "Mike Taylor",
      "Eric Morris",
      "Tony Clark"
    ],
    "correctAnswer": "Ricky Fortune",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Series 2 Episode 1",
      "Key story: New club musician",
      "Correct fact: Ricky Fortune",
      "Character event: New club musician",
      "1980s Television",
      "Storyline detail: New club musician",
      "Episode context: Series 2 Episode 1",
      "Source: https://www.comedy.co.uk/tv/dear_john/episodes/all/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38944",
    "category": "Television",
    "programme": "Dear John",
    "question": "Who recognises Ricky Fortune as a pop star when he first arrives at the club?",
    "answers": [
      "Kate",
      "Mrs Arnott",
      "Louise",
      "Sylvia"
    ],
    "correctAnswer": "Mrs Arnott",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Series 2 Episode 1",
      "Key story: Singer's fan",
      "Correct fact: Mrs Arnott",
      "Character event: Singer's fan",
      "1980s Television",
      "Storyline detail: Singer's fan",
      "Episode context: Series 2 Episode 1",
      "Source: https://www.comedy.co.uk/tv/dear_john/episodes/all/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38945",
    "category": "Television",
    "programme": "Dear John",
    "question": "In which country did Ricky Fortune have his only hit single?",
    "answers": [
      "Belgium",
      "Norway",
      "Iceland",
      "Spain"
    ],
    "correctAnswer": "Iceland",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Series 2 Episode 2",
      "Key story: Ricky overseas chart",
      "Correct fact: Iceland",
      "Character event: Ricky overseas chart",
      "1980s Television",
      "Storyline detail: Ricky overseas chart",
      "Episode context: Series 2 Episode 2",
      "Source: https://www.comedy.co.uk/tv/dear_john/episodes/all/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38946",
    "category": "Television",
    "programme": "Dear John",
    "question": "What was the title of Ricky Fortune's one-hit single?",
    "answers": [
      "Goodbye My Love",
      "The Singles Club",
      "Fortune Teller",
      "Not on My Birthday"
    ],
    "correctAnswer": "Not on My Birthday",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Series 2 Episode 2",
      "Key story: Ricky hit song title",
      "Correct fact: Not on My Birthday",
      "Character event: Ricky hit song title",
      "1980s Television",
      "Storyline detail: Ricky hit song title",
      "Episode context: Series 2 Episode 2",
      "Source: https://www.comedy.co.uk/tv/dear_john/episodes/all/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38947",
    "category": "Television",
    "programme": "Dear John",
    "question": "Who suggests John stops seeing Toby for a few weeks when the boy seems unhappy?",
    "answers": [
      "Wendy",
      "Louise",
      "Kate",
      "Sylvia"
    ],
    "correctAnswer": "Wendy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Series 2 Episode 3",
      "Key story: Advice over John's son",
      "Correct fact: Wendy",
      "Character event: Advice over John's son",
      "1980s Television",
      "Storyline detail: Advice over John's son",
      "Episode context: Series 2 Episode 3",
      "Source: https://www.comedy.co.uk/tv/dear_john/episodes/all/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38948",
    "category": "Television",
    "programme": "Dear John",
    "question": "Where has Kate travelled when Kirk complains she has not telephoned him?",
    "answers": [
      "Spain",
      "Greece",
      "Portugal",
      "France"
    ],
    "correctAnswer": "Greece",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Series 2 Episode 5",
      "Key story: Kate holiday abroad",
      "Correct fact: Greece",
      "Character event: Kate holiday abroad",
      "1980s Television",
      "Storyline detail: Kate holiday abroad",
      "Episode context: Series 2 Episode 5",
      "Source: https://www.comedy.co.uk/tv/dear_john/episodes/all/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38949",
    "category": "Television",
    "programme": "Dear John",
    "question": "Which procedure is Ken arranging while trying to mend his marriage to Maggie?",
    "answers": [
      "A knee replacement",
      "A tonsillectomy",
      "A vasectomy",
      "A tooth extraction"
    ],
    "correctAnswer": "A vasectomy",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Series 2 Episode 5",
      "Key story: Ken family planning",
      "Correct fact: A vasectomy",
      "Character event: Ken family planning",
      "1980s Television",
      "Storyline detail: Ken family planning",
      "Episode context: Series 2 Episode 5",
      "Source: https://www.comedy.co.uk/tv/dear_john/episodes/all/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38950",
    "category": "Television",
    "programme": "Dear John",
    "question": "Where does Eric Morris transform into his Kirk persona before dealing with a biker gang?",
    "answers": [
      "A telephone box",
      "A hospital corridor",
      "A bus shelter",
      "A pub toilet"
    ],
    "correctAnswer": "A pub toilet",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Christmas special",
      "Key story: Kirk superhero transformation",
      "Correct fact: A pub toilet",
      "Character event: Kirk superhero transformation",
      "1980s Television",
      "Storyline detail: Kirk superhero transformation",
      "Episode context: Christmas special",
      "Source: https://www.comedy.co.uk/tv/dear_john/episodes/all/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38951",
    "category": "Television",
    "programme": "Dear John",
    "question": "What is the surname of the anxious singles-club member Ralph?",
    "answers": [
      "Dring",
      "Fisher",
      "Lacey",
      "Taylor"
    ],
    "correctAnswer": "Dring",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Characters",
      "Key story: Ralph full name",
      "Correct fact: Dring",
      "Character event: Ralph full name",
      "1980s Television",
      "Storyline detail: Ralph full name",
      "Episode context: Characters",
      "Source: https://en.wikipedia.org/wiki/Dear_John_(British_TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38952",
    "category": "Television",
    "programme": "Dear John",
    "question": "What was the name of Ralph's pet terrapin?",
    "answers": [
      "Henry",
      "Terry",
      "Percy",
      "Bertie"
    ],
    "correctAnswer": "Terry",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Characters",
      "Key story: Ralph pet name",
      "Correct fact: Terry",
      "Character event: Ralph pet name",
      "1980s Television",
      "Storyline detail: Ralph pet name",
      "Episode context: Characters",
      "Source: https://en.wikipedia.org/wiki/Dear_John_(British_TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38953",
    "category": "Television",
    "programme": "Dear John",
    "question": "What car marque does Kirk boast about owning despite never driving it?",
    "answers": [
      "Ferrari",
      "Aston Martin",
      "Porsche",
      "Jaguar"
    ],
    "correctAnswer": "Porsche",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Characters",
      "Key story: Kirk car claim",
      "Correct fact: Porsche",
      "Character event: Kirk car claim",
      "1980s Television",
      "Storyline detail: Kirk car claim",
      "Episode context: Characters",
      "Source: https://en.wikipedia.org/wiki/Dear_John_(British_TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38954",
    "category": "Television",
    "programme": "Dear John",
    "question": "Which 1-2-1 club member does Kirk call Tiger?",
    "answers": [
      "Sylvia",
      "Louise",
      "Mrs Arnott",
      "Kate"
    ],
    "correctAnswer": "Kate",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Characters",
      "Key story: Kirk pet name for Kate",
      "Correct fact: Kate",
      "Character event: Kirk pet name for Kate",
      "1980s Television",
      "Storyline detail: Kirk pet name for Kate",
      "Episode context: Characters",
      "Source: https://en.wikipedia.org/wiki/Dear_John_(British_TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38955",
    "category": "Television",
    "programme": "Dear John",
    "question": "Who played John Lacey's son Toby and was also Ralph Bates's real-life son?",
    "answers": [
      "William Bates",
      "Tim Pearce",
      "Peter Denyer",
      "Kevin Lloyd"
    ],
    "correctAnswer": "William Bates",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Cast",
      "Key story: Real family casting",
      "Correct fact: William Bates",
      "Character event: Real family casting",
      "1980s Television",
      "Storyline detail: Real family casting",
      "Episode context: Cast",
      "Source: https://en.wikipedia.org/wiki/Dear_John_(British_TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38956",
    "category": "Television",
    "programme": "Dear John",
    "question": "Which actress played John's former wife Wendy?",
    "answers": [
      "Sue Holderness",
      "Wendy Allnutt",
      "Rachel Bell",
      "Jean Challis"
    ],
    "correctAnswer": "Wendy Allnutt",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Cast",
      "Key story: Wendy character actor",
      "Correct fact: Wendy Allnutt",
      "Character event: Wendy character actor",
      "1980s Television",
      "Storyline detail: Wendy character actor",
      "Episode context: Cast",
      "Source: https://en.wikipedia.org/wiki/Dear_John_(British_TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38957",
    "category": "Television",
    "programme": "Dear John",
    "question": "Which actress portrayed Ken's wife Maggie?",
    "answers": [
      "Belinda Lang",
      "Jean Challis",
      "Sue Holderness",
      "Lucinda Curtis"
    ],
    "correctAnswer": "Sue Holderness",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Cast",
      "Key story: Ken's wife actress",
      "Correct fact: Sue Holderness",
      "Character event: Ken's wife actress",
      "1980s Television",
      "Storyline detail: Ken's wife actress",
      "Episode context: Cast",
      "Source: https://en.wikipedia.org/wiki/Dear_John_(British_TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38958",
    "category": "Television",
    "programme": "Dear John",
    "question": "Who provided the vocals for the British Dear John theme tune?",
    "answers": [
      "Kiki Dee",
      "Julie Covington",
      "Elkie Brooks",
      "Joan Baxter"
    ],
    "correctAnswer": "Joan Baxter",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Theme music",
      "Key story: Opening theme singer",
      "Correct fact: Joan Baxter",
      "Character event: Opening theme singer",
      "1980s Television",
      "Storyline detail: Opening theme singer",
      "Episode context: Theme music",
      "Source: https://en.wikipedia.org/wiki/Dear_John_(British_TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38959",
    "category": "Television",
    "programme": "Dear John",
    "question": "Who arranged the Dear John theme music written by John Sullivan?",
    "answers": [
      "Ronnie Hazlehurst",
      "Howard Goodall",
      "Mike Batt",
      "Ron Grainer"
    ],
    "correctAnswer": "Ronnie Hazlehurst",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Dear John",
      "Programme: Dear John",
      "BBC Singles Club Comedy",
      "John Sullivan",
      "Episode or topic: Theme music",
      "Key story: Television song arranger",
      "Correct fact: Ronnie Hazlehurst",
      "Character event: Television song arranger",
      "1980s Television",
      "Storyline detail: Television song arranger",
      "Episode context: Theme music",
      "Source: https://en.wikipedia.org/wiki/Dear_John_(British_TV_series)"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if (new Set(questions.map(q => q.id)).size!==questions.length ||
 new Set(questions.map(q => normalise(q.question))).size!==questions.length ||
 questions.some(q=>q.answers.length!==4 || new Set(q.answers.map(normalise)).size!==4 ||
 q.answers.filter(a=>a===q.correctAnswer).length!==1 || q.tags.length<14 ||
 !q.tags.includes('Programme: '+q.programme) || q.dailyEligible!==true))
 throw Error('Pack 355 editorial audit failed');
module.exports = questions;