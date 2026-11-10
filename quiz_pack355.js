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
In Talking Turkey, which animal stops a train after escaping onto the line?|A turkey|A goat|A pig|A pony|Easy|Talking Turkey|Harry Lambert|Escaped Turkey|Railway Line|Emergency Stop|1996 Episode|Animal Incident
In The Train Now Standing, what new equipment does Mr Parkin install?|A public-address system|A vending machine|A ticket barrier|An electric clock|Medium|The Train Now Standing|Public Address|Station Announcements|Cecil Parkin|Modernisation|Booking Office|1996 Episode
Who is chosen to make announcements over the new system in The Train Now Standing?|Ethel Schumann|Vera Plumtree|May Skinner|Gloria Skinner|Medium|The Train Now Standing|Ethel Schumann|Announcement Duty|New Speaker System|Stage Fright|Booking Office|Hatley Broadcasting
What has to be moved into the station master's house in A Moving Story?|Mr Parkin's furniture|Railway sleepers|A piano from the buffet|A shipment of books|Medium|A Moving Story|Cecil Parkin House|Furniture Move|Station Master Lodgings|1996 Episode|Staff Assistance|Domestic Chaos
What unexpected object arrives at Hatley in The Late Mr Buckly?|A coffin|A wedding cake|A grand piano|A circus tent|Medium|The Late Mr Buckly|Coffin Arrival|Station Delivery|Funeral Cargo|1996 Episode|Railway Confusion|Unexpected Parcel
In Horse Play, what gift from Mr Parkin causes trouble for May?|Expensive lingerie|A gold watch|A bicycle|A pearl necklace|Medium|Horse Play|Cecil Parkin|May Skinner|Lingerie Gift|Old Romance|Jack Suspicions|1996 Storyline
In Past Love, what job does Cecil Parkin's former fiancée Edna Taylor hold?|Tax inspector|Schoolteacher|Nurse|Police sergeant|Hard|Past Love|Edna Taylor|Tax Inspector|Cecil Former Fiancee|Romantic Past|1996 Episode|Visitor To Hatley
In Job Opportunity, at which station does May seek a better-paid job?|Loxley|Cranford|Brackley|Bletchley|Hard|Job Opportunity|Loxley Station|May Skinner|Career Move|Railway Employment|1996 Episode|Station Transfer
In Sleeping Around, which two young people cause parental alarm by not sleeping in their beds?|Gloria and Wilfred|Ethel and Percy|May and Jack|Vera and Ralph|Medium|Sleeping Around|Gloria Skinner|Wilfred Schumann|Worried Parents|Family Mystery|1996 Episode|Young Romance
What item is missing from May's buffet in No Milk for the Minister?|Milk|Sugar|Tea bags|Bread|Easy|No Milk For The Minister|Buffet Shortage|May Skinner|Minister Visit|Catering Crisis|Series Two|1997 Episode
In Father's Day, whose parentage becomes a matter of uncertainty?|Gloria Skinner's|Wilfred Schumann's|Ralph's|Amy Matlock's|Medium|Fathers Day|Gloria Skinner|Jack Skinner|Cecil Parkin|Paternity Question|Family Secret|1997 Episode
In The Gravy Train, what valuable item does Jack Skinner find?|A suitcase full of banknotes|A bag of gold watches|A box of jewels|A railway payroll cheque|Medium|The Gravy Train|Jack Skinner|Suitcase Of Money|Found Property|Cash Discovery|1997 Episode|Railway Mystery
In The Van, what practical problem does Mr Parkin have with his new railway vehicle?|He cannot drive|He has lost the keys|The engine is missing|The doors are welded shut|Easy|The Van|Cecil Parkin|Driving Inability|British Railways Vehicle|Station Master|1997 Episode|Transport Mishap
Which trainee worker goes on strike in Lucky Strike?|Ralph|Wilfred|Percy|Arnold|Medium|Lucky Strike|Ralph|Trainee Engine Driver|Industrial Action|Railway Strike|1997 Episode|Workplace Dispute
In Love Is A Very Splendid Thing, what is Joe's occupation?|American airman|French chef|Railway inspector|Local policeman|Hard|Love Is A Very Splendid Thing|Joe|American Airman|Ethel Schumann|Romantic Interest|1997 Episode|Cinema Date
In A Bowl in the Hand, which club organises an outing?|The Hatley Bowls Club|The Hatley Chess Club|The Railway Ramblers|The Local Cricket Club|Medium|A Bowl In The Hand|Hatley Bowls Club|Bowls Outing|Cecil Parkin|Jack Skinner|1997 Episode|Social Event
Which important railway figure is expected at Hatley in Action Stations?|Dr Beeching|Sir John Betjeman|George Stephenson|Mr Brunel|Medium|Action Stations|Dr Beeching Visit|Lady Lawrence|Hatley Station|Railway Closures|1997 Episode|Special Guest
In A Pregnant Pause, who worries about losing his job after diesel-engine training?|Arnold|Percy|Wilfred|Ralph|Medium|A Pregnant Pause|Arnold|Diesel Engine Training|Railway Modernisation|Job Anxiety|1997 Episode|Engine Crew
In Ton Up, which anniversary does Hatley station celebrate?|Its centenary|Its silver jubilee|Its 50th anniversary|Its 150th anniversary|Medium|Ton Up|Hatley Centenary|100 Years|Station Celebration|Series Finale|1997 Episode|Railway Heritage`;

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

module.exports = questions;