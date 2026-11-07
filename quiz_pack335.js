
 // quiz_pack335.js
 // PuzzlePilot — The Bigggggg Quiz
 // Television: The Office (US), 2005–2013 — all nine seasons.
 // Distinct from the British original covered in Pack 334.
 // Sources: Peacock official series overview, iconic episodes,
 // Superfan episode guide and episode/cast records.
 // Seven individually selected specialist tags per question.

 const programme = 'The Office (US)';

 const facts = `Who portrayed regional manager Michael Scott in the US version of The Office?|Steve Carell|Rainn Wilson|John Krasinski|Ed Helms|Easy|Michael Scott|Steve Carell|Regional Manager|Scranton Branch|Lead Actor|Main Cast|Character Casting
 Who played paper salesman Jim Halpert?|John Krasinski|B J Novak|Ed Helms|Paul Lieberstein|Easy|Jim Halpert|John Krasinski|Salesman|Pam Romance|Desk Pranks|Main Cast|Character Casting
 Which actor played Dwight Schrute?|Rainn Wilson|Steve Carell|Craig Robinson|Brian Baumgartner|Easy|Dwight Schrute|Rainn Wilson|Beet Farmer|Assistant To Regional Manager|Salesman|Main Cast|Casting
 Who portrayed Pam Beesly?|Jenna Fischer|Angela Kinsey|Ellie Kemper|Mindy Kaling|Easy|Pam Beesly|Jenna Fischer|Receptionist|Jim Romance|Office Administrator|Main Cast|Casting
 Who played Angela Martin, head of the accounting department?|Angela Kinsey|Kate Flannery|Phyllis Smith|Jenna Fischer|Easy|Angela Martin|Angela Kinsey|Accounting|Dwight Relationship|Cat Lover|Main Cast|Casting
 Which actor portrayed accountant Kevin Malone?|Brian Baumgartner|Leslie David Baker|Oscar Nunez|Creed Bratton|Easy|Kevin Malone|Brian Baumgartner|Accountant|Accounting Department|Office Comedy|Main Cast|Casting
 Who played salesman Stanley Hudson?|Leslie David Baker|Craig Robinson|Brian Baumgartner|Rainn Wilson|Medium|Stanley Hudson|Leslie David Baker|Salesman|Crossword Puzzles|Office Staff|Main Cast|Casting
 Who portrayed accountant Oscar Martinez?|Oscar Nunez|B J Novak|Paul Lieberstein|Craig Robinson|Medium|Oscar Martinez|Oscar Nunez|Accountant|Accounting Department|Office Staff|Main Cast|Casting
 Which actress portrayed office employee Phyllis Vance?|Phyllis Smith|Kate Flannery|Angela Kinsey|Ellie Kemper|Medium|Phyllis Vance|Phyllis Smith|Sales Representative|Bob Vance|Office Staff|Main Cast|Casting
 Who played Meredith Palmer?|Kate Flannery|Phyllis Smith|Mindy Kaling|Jenna Fischer|Medium|Meredith Palmer|Kate Flannery|Supplier Relations|Office Staff|Supporting Cast|Casting|Workplace Humour
 Which actor portrayed warehouse foreman Darryl Philbin?|Craig Robinson|Rainn Wilson|Leslie David Baker|B J Novak|Easy|Darryl Philbin|Craig Robinson|Warehouse|Later Office Role|Scranton Staff|Main Cast|Casting
 Who portrayed human-resources employee Toby Flenderson?|Paul Lieberstein|B J Novak|Creed Bratton|Ed Helms|Medium|Toby Flenderson|Paul Lieberstein|Human Resources|Michael Rivalry|Scranton Staff|Character Casting|Writer Actor
 Which actress played Kelly Kapoor?|Mindy Kaling|Ellie Kemper|Angela Kinsey|Kate Flannery|Easy|Kelly Kapoor|Mindy Kaling|Customer Service|Ryan Romance|Main Cast|Casting|Writer Actor
 Who portrayed temp employee Ryan Howard?|B J Novak|Ed Helms|John Krasinski|Paul Lieberstein|Easy|Ryan Howard|B J Novak|Temporary Worker|Corporate Promotion|Kelly Relationship|Main Cast|Casting
 Who played Andy Bernard, who transfers from Stamford to Scranton?|Ed Helms|John Krasinski|Rainn Wilson|Craig Robinson|Easy|Andy Bernard|Ed Helms|Stamford Transfer|Cornell University|Salesman|Character Casting|Nard Dog
 Which actress played receptionist Erin Hannon?|Ellie Kemper|Jenna Fischer|Angela Kinsey|Rashida Jones|Medium|Erin Hannon|Ellie Kemper|Receptionist|Andy Relationship|Later Seasons|Main Cast|Casting
 Who portrayed corporate executive Jan Levinson?|Melora Hardin|Amy Ryan|Rashida Jones|Kathy Bates|Medium|Jan Levinson|Melora Hardin|Corporate Executive|Michael Relationship|Dunder Mifflin|Main Cast|Casting
 Who played HR representative Holly Flax?|Amy Ryan|Melora Hardin|Rashida Jones|Ellie Kemper|Medium|Holly Flax|Amy Ryan|Human Resources|Michael Romance|Scranton Branch|Recurring Cast|Casting
 Which actress played Karen Filippelli, who dates Jim after his transfer?|Rashida Jones|Jenna Fischer|Amy Ryan|Mindy Kaling|Medium|Karen Filippelli|Rashida Jones|Stamford Colleague|Jim Relationship|Season Three|Sales Staff|Casting
 Who portrayed David Wallace, a senior Dunder Mifflin executive?|Andy Buckley|James Spader|Will Ferrell|Steve Carell|Medium|David Wallace|Andy Buckley|Corporate Management|Chief Financial Officer|Dunder Mifflin|Executive Character|Casting
 Who played Gabe Lewis, a representative of Sabre?|Zach Woods|Ed Helms|B J Novak|Paul Lieberstein|Hard|Gabe Lewis|Zach Woods|Sabre|Corporate Liaison|Erin Relationship|Later Seasons|Casting
 Which actor portrayed Robert California?|James Spader|Andy Buckley|Will Ferrell|Ed Helms|Medium|Robert California|James Spader|Sabre Leadership|Season Eight|Executive Character|Main Cast|Casting
 Who portrayed Nellie Bertram?|Catherine Tate|Kathy Bates|Amy Ryan|Rashida Jones|Medium|Nellie Bertram|Catherine Tate|Managerial Ambition|Season Eight|Season Nine|British Actress|Casting
 Which actor played Creed Bratton, the eccentric quality-assurance employee?|Creed Bratton|Craig Robinson|Leslie David Baker|Brian Baumgartner|Medium|Creed Bratton|Quality Assurance|Actor Shares Character Name|Scranton Staff|Workplace Mystery|Main Cast|Casting
 Who played Jo Bennett, the owner of Sabre?|Kathy Bates|Catherine Tate|Melora Hardin|Amy Ryan|Medium|Jo Bennett|Kathy Bates|Sabre Owner|Corporate Takeover|Season Six|Executive Character|Casting
 Which American city is home to Dunder Mifflin's central branch in the series?|Scranton|Pittsburgh|Buffalo|Philadelphia|Easy|Scranton|Pennsylvania|Main Setting|Dunder Mifflin|Branch Office|American City|Filming Setting
 What is the name of the fictional paper company employing the main characters?|Dunder Mifflin|Wernham Hogg|Sabre Paperworks|Sterling Cooper|Easy|Dunder Mifflin|Paper Sales|Fictional Company|Scranton|Employer|Workplace Premise|Company Name
 Which network originally broadcast the American version of The Office?|NBC|ABC|CBS|Fox|Easy|NBC|Original Network|American Broadcasting|2005 Premiere|Network Comedy|Broadcast History|Television Channel
 In which year did the American version of The Office premiere?|2005|2001|2007|2009|Easy|2005 Premiere|Series One|NBC|American Adaptation|Broadcast History|Television Year|Series Launch
 How many seasons did the US version of The Office run?|Nine|Seven|Eight|Ten|Easy|Nine Seasons|2005 To 2013|Original Run|NBC|Completed Series|Season Count|Programme History
 In which year did the US version of The Office end?|2013|2011|2015|2010|Easy|2013 Finale|Season Nine|Series Conclusion|NBC|Broadcast History|Final Season|Programme Ending
 Which comedy format follows the fictional office workers as if a camera crew is documenting them?|Mockumentary|Sketch anthology|Animated sitcom|Studio-audience variety show|Easy|Mockumentary|Documentary Crew|Talking Heads|Workplace Comedy|Direct To Camera|TV Format|Filming Style
 Who developed the American version of The Office for television?|Greg Daniels|Ricky Gervais|Michael Schur|Stephen Merchant|Medium|Greg Daniels|American Adaptation|Series Developer|Production History|BBC Original|Television Writing|Creative Team
 What farm crop is Dwight Schrute particularly associated with?|Beetroot|Potatoes|Sweetcorn|Pumpkins|Easy|Dwight Schrute|Schrute Farms|Beet Farming|Pennsylvania|Family Business|Character Detail|Agriculture
 Which character works in human resources and is frequently disliked by Michael Scott?|Toby Flenderson|Oscar Martinez|Ryan Howard|Darryl Philbin|Easy|Toby Flenderson|Human Resources|Michael Scott|Office Conflict|HR Department|Running Joke|Character Role
 What workplace title does Dwight insist on using early in the series?|Assistant to the regional manager|Chief executive officer|National sales director|Vice-president of finance|Easy|Dwight Schrute|Assistant To Regional Manager|Job Title|Michael Scott|Management Hierarchy|Status Ambition|Workplace Joke
 Who is Pam engaged to at the start of the series?|Roy Anderson|Jim Halpert|Andy Bernard|Ryan Howard|Easy|Pam Beesly|Roy Anderson|Warehouse Worker|Early Engagement|Jim Halpert|Relationship Triangle|Season One
 Which character is best known for playing pranks on Dwight at work?|Jim Halpert|Stanley Hudson|Oscar Martinez|Toby Flenderson|Easy|Jim Halpert|Dwight Schrute|Office Pranks|Desk Rivalry|Workplace Humour|Character Friendship|Running Gag
 Which office employee often completes crossword puzzles during meetings?|Stanley Hudson|Kevin Malone|Creed Bratton|Ryan Howard|Medium|Stanley Hudson|Crossword Puzzles|Meetings|Sales Department|Workplace Disinterest|Character Habit|Office Comedy
 Which university is Andy Bernard particularly proud of attending?|Cornell University|Harvard University|Yale University|Princeton University|Easy|Andy Bernard|Cornell University|Alumnus|College References|Nard Dog|Character Background|Education
 Who is Angela Martin's secret romantic partner during the early seasons?|Dwight Schrute|Jim Halpert|Stanley Hudson|Darryl Philbin|Medium|Angela Martin|Dwight Schrute|Secret Relationship|Accounting Department|Office Romance|Early Seasons|Character Arc
 Which warehouse employee eventually marries Phyllis?|Bob Vance|Roy Anderson|Darryl Philbin|Hank Tate|Medium|Phyllis Vance|Bob Vance|Vance Refrigeration|Wedding|Office Relationships|Supporting Character|Marriage
 At which restaurant does Michael hold the Dundie awards in the season-two premiere?|Chili's|Applebee's|Olive Garden|TGI Fridays|Medium|The Dundies|Chilis|Season Two Premiere|Staff Awards|Michael Scott|Restaurant Setting|Office Celebration
 What annual prizes does Michael Scott award to his employees?|Dundies|Scrantons|Mifflins|Golden Beets|Easy|Dundie Awards|Michael Scott|Office Ceremony|Staff Recognition|Running Event|Workplace Humour|Award Show
 In the episode The Injury, how does Michael accidentally burn his foot?|On a George Foreman grill|On a campfire|With a boiling kettle|On a radiator|Easy|The Injury|George Foreman Grill|Michael Scott|Burned Foot|Season Two|Bedroom Mishap|Episode Event
 What is the main event held in the warehouse during the episode Casino Night?|A charity casino fundraiser|A staff election|A product-launch fashion show|A basketball championship|Medium|Casino Night|Warehouse|Charity Fundraiser|Season Two Finale|Jim And Pam|Office Gathering|Episode Setting
 During Casino Night, which colleague does Jim tell that he is in love with her?|Pam Beesly|Karen Filippelli|Angela Martin|Kelly Kapoor|Easy|Jim Halpert|Pam Beesly|Casino Night|Love Confession|Season Two Finale|Romantic Turning Point|Character Arc
 To which Dunder Mifflin branch does Jim temporarily transfer?|Stamford|Buffalo|Albany|Utica|Medium|Jim Halpert|Stamford Branch|Season Three|Branch Transfer|Karen Filippelli|Career Move|Company Locations
 Which employee arrives from the Stamford branch and later becomes a Scranton manager?|Andy Bernard|Oscar Martinez|Kevin Malone|Toby Flenderson|Medium|Andy Bernard|Stamford Transfer|Scranton Merger|Management|Sales Team|Season Three|Character Career
 What name does Michael adopt when pretending to be a former prisoner in The Convict?|Prison Mike|Jailhouse Jim|Cellblock Scott|Scranton Sam|Easy|Prison Mike|The Convict|Michael Scott|Season Three|Prison Roleplay|Workplace Training|Comic Persona
 What holiday does Kelly invite the office to celebrate in a season-three episode?|Diwali|Hanukkah|Easter|Thanksgiving|Medium|Diwali|Kelly Kapoor|Season Three|Cultural Celebration|Office Outing|Family Gathering|Episode Title
 What activity does Pam complete during the episode Beach Games?|Walking across hot coals|Skydiving|Swimming across a lake|Climbing a mountain|Medium|Beach Games|Pam Beesly|Hot Coals|Season Three|Leadership Contest|Personal Courage|Character Growth
 Which character becomes a Dunder Mifflin corporate executive after applying in The Job?|Ryan Howard|Jim Halpert|Dwight Schrute|Stanley Hudson|Medium|Ryan Howard|Corporate Promotion|The Job|Season Three Finale|New York Headquarters|Career Change|Company Hierarchy
 What is the name of Michael's feature-length homemade spy film?|Threat Level Midnight|Operation Scranton|Agent Paperclip|The Last Dundie|Easy|Threat Level Midnight|Michael Scott|Amateur Film|Season Seven|Spy Movie|Office Cast|Creative Project
 What name does Michael Scott use for his secret-agent character in Threat Level Midnight?|Michael Scarn|Michael Bond|Scott Danger|Agent Dundee|Medium|Michael Scarn|Threat Level Midnight|Spy Protagonist|Michael Scott|Action Parody|Home Movie|Season Seven
 In the episode Dinner Party, which former corporate boss hosts an uncomfortable evening with Michael?|Jan Levinson|Jo Bennett|Holly Flax|Karen Filippelli|Medium|Dinner Party|Jan Levinson|Michael Scott|Season Four|Home Gathering|Relationship Conflict|Episode Event
 Which character stages a deliberately alarming fire drill in Stress Relief?|Dwight Schrute|Jim Halpert|Michael Scott|Andy Bernard|Easy|Stress Relief|Dwight Schrute|Fire Drill|Season Five|Office Panic|Safety Training|Cold Open
 What business does Michael start after leaving Dunder Mifflin in season five?|Michael Scott Paper Company|Schrute Stationery|Scranton Copy Centre|Scott and Wallace Consulting|Easy|Michael Scott Paper Company|Season Five|Independent Business|Pam Beesly|Ryan Howard|Broke Episode|Company Rivalry
 Which former receptionist joins Michael's new paper company?|Pam Beesly|Angela Martin|Erin Hannon|Phyllis Vance|Medium|Pam Beesly|Michael Scott Paper Company|Career Change|Season Five|Leaving Reception|Entrepreneurship|Michael Scott
 At which famous waterfall destination do Jim and Pam marry?|Niagara Falls|Victoria Falls|Yosemite Falls|Multnomah Falls|Easy|Jim Halpert|Pam Beesly|Niagara|Wedding|Season Six|Romantic Milestone|Destination Ceremony
 What is the first name of Jim and Pam's daughter?|Cecelia|Astrid|Sasha|Kelly|Medium|Cecelia Halpert|Jim Halpert|Pam Beesly|Baby|Season Six|Family Storyline|Parenthood
 Which company acquires Dunder Mifflin during the sixth season?|Sabre|Vance Refrigeration|Athlead|Wernham Hogg|Easy|Sabre|Dunder Mifflin Acquisition|Season Six|Corporate Takeover|Jo Bennett|Company History|Business Plot
 Which character is notorious for promising to pay college tuition for a class of children?|Michael Scott|Andy Bernard|David Wallace|Ryan Howard|Medium|Scotts Tots|Michael Scott|Tuition Promise|Season Six|School Visit|Unfulfilled Promise|Episode Event
 Which colleague does Michael fall in love with and eventually leave Scranton to marry?|Holly Flax|Jan Levinson|Karen Filippelli|Nellie Bertram|Easy|Michael Scott|Holly Flax|Human Resources|Season Seven Departure|Marriage Plans|Romantic Resolution|Character Exit
 To which US state does Michael move when he leaves the Scranton branch?|Colorado|Florida|California|Ohio|Medium|Michael Scott|Holly Flax|Colorado|Season Seven|Moving Away|Goodbye Michael|Character Exit
 Which character briefly takes over as regional manager after Michael leaves, before the search for a permanent replacement?|Deangelo Vickers|David Wallace|Roy Anderson|Gabe Lewis|Medium|Deangelo Vickers|Will Ferrell|Michael Departure|Season Seven|Interim Management|Scranton Branch|Character Role
 Who takes over as regional manager for much of season eight?|Andy Bernard|Jim Halpert|Oscar Martinez|Ryan Howard|Medium|Andy Bernard|Regional Manager|Season Eight|Robert California|Office Leadership|Character Promotion|Scranton Branch
 Which employee eventually becomes manager of the Scranton branch during the final season?|Dwight Schrute|Stanley Hudson|Kevin Malone|Creed Bratton|Easy|Dwight Schrute|Regional Manager|Season Nine|Career Goal|Scranton Branch|Series Finale|Leadership Arc
 Which character does Dwight marry in the series finale?|Angela Martin|Pam Beesly|Kelly Kapoor|Erin Hannon|Easy|Dwight Schrute|Angela Martin|Finale Wedding|Season Nine|Romantic Resolution|Schrute Family|Marriage
 Who makes a surprise return at Dwight and Angela's wedding in the finale?|Michael Scott|Jan Levinson|Roy Anderson|Robert California|Easy|Michael Scott|Series Finale|Dwight Wedding|Angela Wedding|Steve Carell|Surprise Appearance|Season Nine
 Which company outside Dunder Mifflin is Jim involved in founding during the final season?|Athlead|Sabre|Vance Refrigeration|WUPHF.com|Medium|Jim Halpert|Athlead|Sports Marketing|Season Nine|Career Ambition|Philadelphia|Startup Business
 Which employee is especially associated with the disastrous spilling of a large pot of chilli?|Kevin Malone|Stanley Hudson|Oscar Martinez|Darryl Philbin|Easy|Kevin Malone|Chilli Spill|Season Five|Office Kitchen|Cold Open|Famous Scene|Workplace Mishap
 What object does Jim famously place Dwight's stapler inside as a prank?|Gelatine|An ice cube|A loaf of bread|A box of cereal|Easy|Jim Halpert|Dwight Schrute|Stapler Prank|Gelatine|Pilot Episode|Desk Humour|Office Rivalry
 What does Dwight's family business operate under the name Schrute Farms?|A beet farm and bed-and-breakfast|A chain of cinemas|A legal firm|A shipping port|Medium|Schrute Farms|Dwight Schrute|Beet Farm|Bed And Breakfast|Family Property|Pennsylvania|Rural Business
 Which character famously owns a refrigeration company and repeatedly identifies himself by its name?|Bob Vance|David Wallace|Roy Anderson|Todd Packer|Medium|Bob Vance|Vance Refrigeration|Phyllis Husband|Repeated Introduction|Local Business|Running Joke|Supporting Character
 `;

 const FIRST_ID = 15712;

 const normalise = value =>
   value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');

 const questions = facts.trim().split('\n').map((line, index) => {
   const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
   const fields = line.trim().split('|').map(value => value.trim());

   if (fields.length !== 13) {
     throw new Error(
       `Expected 13 fields at ${id}; found ${fields.length}`
     );
   }

   const [
     question,
     correctAnswer,
     wrong1,
     wrong2,
     wrong3,
     difficulty,
     ...specificTags
   ] = fields;

   if (
     [question, correctAnswer, wrong1, wrong2, wrong3, ...specificTags]
       .some(value => !value)
   ) {
     throw new Error(`Missing question, answer or specialist tag at ${id}`);
   }

   if (
     !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
     specificTags.length !== 7
   ) {
     throw new Error(`Invalid difficulty or individual tags at ${id}`);
   }

   const answers = [wrong1, wrong2, wrong3];

   if (
     new Set([correctAnswer, ...answers].map(normalise)).size !== 4
   ) {
     throw new Error(`Duplicate answer option at ${id}`);
   }

   answers.splice(index % 4, 0, correctAnswer);

   const tags = [...new Map([
     'Television',
     'American Television',
     'American Comedy',
     'Sitcom',
     'Mockumentary',
     'NBC',
     '2005-2013',
     'The Office US',
     'Programme: The Office (US)',
     ...specificTags,
     correctAnswer
   ].map(tag => [normalise(tag), tag])).values()];

   return {
     id,
     category: 'Television',
     programme,
     question,
     answers,
     correctAnswer,
     difficulty,
     tags,
     dailyEligible: true
   };
 });

 // Validate actual exported objects, not just compact source rows.

 if (
   !questions.length ||
   questions[0].id !== 'tv_15712' ||
   new Set(questions.map(q => q.id)).size !== questions.length ||
   new Set(questions.map(q => normalise(q.question))).size !== questions.length
 ) {
   throw new Error('Pack 335 has a repeated ID or question');
 }

 if (questions.some((q, index) =>
   q.id !== 'tv_' + String(FIRST_ID + index).padStart(5, '0') ||
   q.answers.length !== 4 ||
   !q.answers.includes(q.correctAnswer) ||
   new Set(q.answers.map(normalise)).size !== 4 ||
   !q.tags.includes('Programme: The Office (US)') ||
   q.tags.length < 15 ||
   q.dailyEligible !== true ||
   q.programme !== programme
 )) {
   throw new Error('Pack 335 exported-object validation failed');
 }

 module.exports = questions;
