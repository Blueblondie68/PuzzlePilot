
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
// 21 Nov 2026 television pack audit. All 75 original questions and
// IDs tv_15712–tv_15786 remain unchanged. The questions below add
// specific episode plots and character arcs across all nine seasons.
// The Office (UK) is separately tracked in Pack 334.
const auditAdditions = [
  {
    "id": "tv_37286",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which new employee starts as a temp on the documentary crew's first visit?",
    "answers": [
      "Ryan Howard",
      "Andy Bernard",
      "Gabe Lewis",
      "Clark Green"
    ],
    "correctAnswer": "Ryan Howard",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 1",
      "Episode: Pilot",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Ryan Howard",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37287",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what type of outside training follows Michael offending his coworkers?",
    "answers": [
      "First aid",
      "Diversity and tolerance training",
      "Computer security",
      "Fire safety"
    ],
    "correctAnswer": "Diversity and tolerance training",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 1",
      "Episode: Diversity Day",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Diversity and tolerance training",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37288",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who chooses the reduced staff health plan at Michael's request?",
    "answers": [
      "Jim Halpert",
      "Oscar Martinez",
      "Dwight Schrute",
      "Ryan Howard"
    ],
    "correctAnswer": "Dwight Schrute",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 1",
      "Episode: Health Care",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Dwight Schrute",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37289",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which salesman does Dwight recruit for a secret alliance against redundancies?",
    "answers": [
      "Stanley Hudson",
      "Creed Bratton",
      "Kevin Malone",
      "Jim Halpert"
    ],
    "correctAnswer": "Jim Halpert",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 1",
      "Episode: The Alliance",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Jim Halpert",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37290",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which staff group faces the office in a basketball game?",
    "answers": [
      "Warehouse workers",
      "Corporate executives",
      "Receptionists",
      "Utica salespeople"
    ],
    "correctAnswer": "Warehouse workers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 1",
      "Episode: Basketball",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Warehouse workers",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37291",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what does visiting saleswoman Katy offer the employees?",
    "answers": [
      "Perfume",
      "Handbags",
      "Mobile phones",
      "Shoes"
    ],
    "correctAnswer": "Handbags",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 1",
      "Episode: Hot Girl",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Handbags",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37292",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who starts dating visiting handbag seller Katy?",
    "answers": [
      "Ryan Howard",
      "Michael Scott",
      "Jim Halpert",
      "Dwight Schrute"
    ],
    "correctAnswer": "Jim Halpert",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 1",
      "Episode: Hot Girl",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Jim Halpert",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37293",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which boorish salesman arrives during the office harassment seminar?",
    "answers": [
      "Danny Cordray",
      "Charles Miner",
      "Robert California",
      "Todd Packer"
    ],
    "correctAnswer": "Todd Packer",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: Sexual Harassment",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Todd Packer",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37294",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who organise oddball games while Michael is out viewing a property?",
    "answers": [
      "Jim and Pam",
      "Angela and Oscar",
      "Ryan and Kelly",
      "Dwight and Kevin"
    ],
    "correctAnswer": "Jim and Pam",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: Office Olympics",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Jim and Pam",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37295",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what major purchase is Michael considering?",
    "answers": [
      "A yacht",
      "A condominium",
      "A restaurant",
      "A sports car"
    ],
    "correctAnswer": "A condominium",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: Office Olympics",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A condominium",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37296",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which temp starts a fire in the office kitchen?",
    "answers": [
      "Meredith Palmer",
      "Kelly Kapoor",
      "Ryan Howard",
      "Creed Bratton"
    ],
    "correctAnswer": "Ryan Howard",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: The Fire",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Ryan Howard",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37297",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), whom does Michael dismiss when forced to cut staff?",
    "answers": [
      "Stanley Hudson",
      "Oscar Martinez",
      "Toby Flenderson",
      "Devon White"
    ],
    "correctAnswer": "Devon White",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: Halloween",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Devon White",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37298",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), where do Michael and Dwight stage a martial-arts showdown?",
    "answers": [
      "A karate dojo",
      "A boxing ring",
      "A wrestling club",
      "A gymnasium"
    ],
    "correctAnswer": "A karate dojo",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: The Fight",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A karate dojo",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37299",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which Lackawanna County official does Michael entertain at Chili's?",
    "answers": [
      "David Wallace",
      "Christian",
      "Josh Porter",
      "Charles Miner"
    ],
    "correctAnswer": "Christian",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: The Client",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Christian",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37300",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which present does Jim intend for Pam before the gift exchange changes?",
    "answers": [
      "A scarf",
      "A camera",
      "A teapot",
      "A diary"
    ],
    "correctAnswer": "A teapot",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: Christmas Party",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A teapot",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37301",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which expensive present does Michael bring to the gift exchange?",
    "answers": [
      "A laptop",
      "A digital camera",
      "A games console",
      "A video iPod"
    ],
    "correctAnswer": "A video iPod",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: Christmas Party",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A video iPod",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37302",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what type of social outing puts Michael's leadership to the test?",
    "answers": [
      "A lake cruise",
      "A mountain hike",
      "A company picnic",
      "A coach tour"
    ],
    "correctAnswer": "A lake cruise",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: Booze Cruise",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A lake cruise",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37303",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who is behind the disgusting prank in Michael's office?",
    "answers": [
      "Dwight Schrute",
      "Todd Packer",
      "Kevin Malone",
      "Stanley Hudson"
    ],
    "correctAnswer": "Todd Packer",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: The Carpet",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Todd Packer",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37304",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who leads a women-in-the-workplace seminar?",
    "answers": [
      "Holly Flax",
      "Jo Bennett",
      "Jan Levinson",
      "Nellie Bertram"
    ],
    "correctAnswer": "Jan Levinson",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: Boys and Girls",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Jan Levinson",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37305",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), where does Michael reveal his secret relationship with Jan?",
    "answers": [
      "A wedding",
      "A warehouse party",
      "A pub quiz",
      "A New York corporate meeting"
    ],
    "correctAnswer": "A New York corporate meeting",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: Valentine's Day",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A New York corporate meeting",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37306",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which award requires Dwight to address a large crowd?",
    "answers": [
      "Salesman of the Year",
      "Branch Manager of the Year",
      "Best New Recruit",
      "Team Leader of the Year"
    ],
    "correctAnswer": "Salesman of the Year",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: Dwight's Speech",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Salesman of the Year",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37307",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what childhood television programme featured Michael?",
    "answers": [
      "Sesame Street",
      "Fundle Bundle",
      "Romper Room",
      "Blue's Clues"
    ],
    "correctAnswer": "Fundle Bundle",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: Take Your Daughter to Work Day",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Fundle Bundle",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37308",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), whose possible cancer diagnosis overshadows Michael's celebrations?",
    "answers": [
      "Oscar Martinez's",
      "Stanley Hudson's",
      "Kevin Malone's",
      "Darryl Philbin's"
    ],
    "correctAnswer": "Kevin Malone's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: Michael's Birthday",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Kevin Malone's",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37309",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what volunteer law-enforcement role does Dwight give up to help Michael?",
    "answers": [
      "Court bailiff",
      "Traffic warden",
      "Prison visitor",
      "Sheriff's deputy"
    ],
    "correctAnswer": "Sheriff's deputy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: Drug Testing",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Sheriff's deputy",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37310",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who keeps files about unresolved office complaints?",
    "answers": [
      "Toby Flenderson",
      "Ryan Howard",
      "Angela Martin",
      "Darryl Philbin"
    ],
    "correctAnswer": "Toby Flenderson",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: Conflict Resolution",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Toby Flenderson",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37311",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what romantic step follows Jim confessing his feelings to Pam?",
    "answers": [
      "They marry",
      "They kiss",
      "They move in together",
      "They announce an engagement"
    ],
    "correctAnswer": "They kiss",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 2",
      "Episode: Casino Night",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: They kiss",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37312",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which accountant is publicly outed by Michael?",
    "answers": [
      "Kevin Malone",
      "Stanley Hudson",
      "Oscar Martinez",
      "Creed Bratton"
    ],
    "correctAnswer": "Oscar Martinez",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 3",
      "Episode: Gay Witch Hunt",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Oscar Martinez",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37313",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who secretly asks Jan about taking Michael's managerial job?",
    "answers": [
      "Jim Halpert",
      "Andy Bernard",
      "Ryan Howard",
      "Dwight Schrute"
    ],
    "correctAnswer": "Dwight Schrute",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 3",
      "Episode: The Coup",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Dwight Schrute",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37314",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which former Scranton manager's death upsets Michael?",
    "answers": [
      "Ed Truck",
      "David Wallace",
      "Charles Miner",
      "Josh Porter"
    ],
    "correctAnswer": "Ed Truck",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 3",
      "Episode: Grief Counseling",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Ed Truck",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37315",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), where does Dwight take Ryan for an unconventional sales-training lesson?",
    "answers": [
      "A theme park",
      "Schrute Farms",
      "A shopping centre",
      "A football stadium"
    ],
    "correctAnswer": "Schrute Farms",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 3",
      "Episode: Initiation",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Schrute Farms",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37316",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which girlfriend rejects Michael's impulsive marriage proposal?",
    "answers": [
      "Jan",
      "Holly",
      "Carol",
      "Donna"
    ],
    "correctAnswer": "Carol",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 3",
      "Episode: Diwali",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Carol",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37317",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which Stamford boss quits for a job at Staples, saving Scranton?",
    "answers": [
      "Charles Miner",
      "Robert California",
      "David Wallace",
      "Josh Porter"
    ],
    "correctAnswer": "Josh Porter",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 3",
      "Episode: Branch Closing",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Josh Porter",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37318",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which Stamford worker quits after Michael humiliates him?",
    "answers": [
      "Tony Gardner",
      "Andy Bernard",
      "Karen Filippelli",
      "Jim Halpert"
    ],
    "correctAnswer": "Tony Gardner",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 3",
      "Episode: The Merger",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Tony Gardner",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37319",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who organise a competing party after falling out with Angela's committee?",
    "answers": [
      "Phyllis and Meredith",
      "Pam and Karen",
      "Jim and Dwight",
      "Ryan and Kelly"
    ],
    "correctAnswer": "Pam and Karen",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 3",
      "Episode: A Benihana Christmas",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Pam and Karen",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37320",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who resigns to protect Angela over a missed paperwork deadline?",
    "answers": [
      "Jim Halpert",
      "Andy Bernard",
      "Dwight Schrute",
      "Ryan Howard"
    ],
    "correctAnswer": "Dwight Schrute",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 3",
      "Episode: Traveling Salesmen",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Dwight Schrute",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37321",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what angry act sends Andy to management counselling?",
    "answers": [
      "Breaking a window",
      "Burning a desk",
      "Smashing a chair",
      "Punching a hole in a wall"
    ],
    "correctAnswer": "Punching a hole in a wall",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 3",
      "Episode: The Return",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Punching a hole in a wall",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37322",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which historical figure is played by an entertainer hired for a staff party?",
    "answers": [
      "Benjamin Franklin",
      "George Washington",
      "Thomas Jefferson",
      "Abraham Lincoln"
    ],
    "correctAnswer": "Benjamin Franklin",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 3",
      "Episode: Ben Franklin",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Benjamin Franklin",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37323",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who shows up to support Pam at her art exhibition?",
    "answers": [
      "Angela Martin",
      "Michael Scott",
      "Dwight Schrute",
      "Ryan Howard"
    ],
    "correctAnswer": "Michael Scott",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 3",
      "Episode: Business School",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Michael Scott",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37324",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what animal escapes in the office?",
    "answers": [
      "A snake",
      "A raccoon",
      "A bat",
      "An owl"
    ],
    "correctAnswer": "A bat",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 3",
      "Episode: Business School",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A bat",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37325",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who protects Jim when Roy returns to attack him?",
    "answers": [
      "Michael Scott",
      "Andy Bernard",
      "Darryl Philbin",
      "Dwight Schrute"
    ],
    "correctAnswer": "Dwight Schrute",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 3",
      "Episode: The Negotiation",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Dwight Schrute",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37326",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what scandalous mistake causes Dunder Mifflin to recall some paper?",
    "answers": [
      "An obscene watermark",
      "An expired copyright",
      "A wrong price",
      "A competitor's logo"
    ],
    "correctAnswer": "An obscene watermark",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 3",
      "Episode: Product Recall",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: An obscene watermark",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37327",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which female colleague is approached by a flasher?",
    "answers": [
      "Pam Beesly",
      "Phyllis Vance",
      "Angela Martin",
      "Kelly Kapoor"
    ],
    "correctAnswer": "Phyllis Vance",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 3",
      "Episode: Women's Appreciation",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Phyllis Vance",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37328",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who secures the coveted New York corporate job?",
    "answers": [
      "Jim Halpert",
      "Michael Scott",
      "Ryan Howard",
      "Karen Filippelli"
    ],
    "correctAnswer": "Ryan Howard",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 3",
      "Episode: The Job",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Ryan Howard",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37329",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which employee is struck by Michael's car?",
    "answers": [
      "Angela Martin",
      "Pam Beesly",
      "Phyllis Vance",
      "Meredith Palmer"
    ],
    "correctAnswer": "Meredith Palmer",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 4",
      "Episode: Fun Run",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Meredith Palmer",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37330",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what does Michael organise after the accident and a run of bad news?",
    "answers": [
      "A charity fun run",
      "A talent contest",
      "A football match",
      "A blood drive"
    ],
    "correctAnswer": "A charity fun run",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 4",
      "Episode: Fun Run",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A charity fun run",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37331",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which beloved cat does Dwight euthanise without Angela's consent?",
    "answers": [
      "Bandit",
      "Sprinkles",
      "Princess Lady",
      "Garbage"
    ],
    "correctAnswer": "Sprinkles",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 4",
      "Episode: Fun Run",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Sprinkles",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37332",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what digital business initiative does Ryan launch?",
    "answers": [
      "A chain of discount stores",
      "A new bank",
      "A company website and online sales",
      "A streaming channel"
    ],
    "correctAnswer": "A company website and online sales",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 4",
      "Episode: Dunder Mifflin Infinity",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A company website and online sales",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37333",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what is Dwight competing against in a sales contest?",
    "answers": [
      "A rival warehouse",
      "A mail-order catalogue",
      "A new salesman",
      "The company's website"
    ],
    "correctAnswer": "The company's website",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 4",
      "Episode: Launch Party",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: The company's website",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37334",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what second job does Michael take to pay his debts?",
    "answers": [
      "Telemarketing",
      "Driving a taxi",
      "Night security",
      "Delivery driving"
    ],
    "correctAnswer": "Telemarketing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 4",
      "Episode: Money",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Telemarketing",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37335",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), where do Jim and Pam stay for an awkward weekend away?",
    "answers": [
      "Niagara Falls",
      "Schrute Farms",
      "A Philadelphia hotel",
      "Lake Scranton"
    ],
    "correctAnswer": "Schrute Farms",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 4",
      "Episode: Money",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Schrute Farms",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37336",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who makes an ambitious homemade advertisement for the Scranton branch?",
    "answers": [
      "Ryan Howard",
      "David Wallace",
      "Michael Scott",
      "Jan Levinson"
    ],
    "correctAnswer": "Michael Scott",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 4",
      "Episode: Local Ad",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Michael Scott",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37337",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which branch does Michael visit over attempts to poach Stanley?",
    "answers": [
      "Buffalo",
      "Stamford",
      "Nashua",
      "Utica"
    ],
    "correctAnswer": "Utica",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 4",
      "Episode: Branch Wars",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Utica",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37338",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who goes into the wilderness to demonstrate self-sufficiency?",
    "answers": [
      "Michael Scott",
      "Dwight Schrute",
      "Andy Bernard",
      "Jim Halpert"
    ],
    "correctAnswer": "Michael Scott",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 4",
      "Episode: Survivor Man",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Michael Scott",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37339",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), whose relationship is examined during a lawsuit against Dunder Mifflin?",
    "answers": [
      "Jim and Pam's",
      "Michael and Jan's",
      "Dwight and Angela's",
      "Ryan and Kelly's"
    ],
    "correctAnswer": "Michael and Jan's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 4",
      "Episode: The Deposition",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Michael and Jan's",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37340",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which couple attend a painfully awkward meal at Michael and Jan's home?",
    "answers": [
      "Kevin and Angela",
      "Stanley and Phyllis",
      "Jim and Pam",
      "Oscar and Kelly"
    ],
    "correctAnswer": "Jim and Pam",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 4",
      "Episode: Dinner Party",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Jim and Pam",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37341",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which salesman openly challenges Michael during a meeting?",
    "answers": [
      "Jim Halpert",
      "Dwight Schrute",
      "Ryan Howard",
      "Stanley Hudson"
    ],
    "correctAnswer": "Stanley Hudson",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 4",
      "Episode: Did I Stutter?",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Stanley Hudson",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37342",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which replacement human-resources adviser arrives in Scranton?",
    "answers": [
      "Holly Flax",
      "Nellie Bertram",
      "Erin Hannon",
      "Jan Levinson"
    ],
    "correctAnswer": "Holly Flax",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 4",
      "Episode: Goodbye Toby",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Holly Flax",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37343",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who proposes to Angela at the office celebration?",
    "answers": [
      "Dwight Schrute",
      "Andy Bernard",
      "Ryan Howard",
      "Oscar Martinez"
    ],
    "correctAnswer": "Andy Bernard",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 4",
      "Episode: Goodbye Toby",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Andy Bernard",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37344",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what company-wide wellness challenge launches the season?",
    "answers": [
      "A marathon",
      "A healthy-cooking contest",
      "A weight-loss contest",
      "A cycling challenge"
    ],
    "correctAnswer": "A weight-loss contest",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: Weight Loss",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A weight-loss contest",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37345",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), where does Jim propose to Pam in the rain?",
    "answers": [
      "At a beach",
      "At a cinema",
      "At the office",
      "At a petrol station"
    ],
    "correctAnswer": "At a petrol station",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: Weight Loss",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: At a petrol station",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37346",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), whose dealings with suppliers raise concerns about an inappropriate personal relationship?",
    "answers": [
      "Meredith Palmer's",
      "Pam Beesly's",
      "Angela Martin's",
      "Phyllis Vance's"
    ],
    "correctAnswer": "Meredith Palmer's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: Business Ethics",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Meredith Palmer's",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37347",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who unexpectedly arrives with a baby at Michael's party?",
    "answers": [
      "Holly Flax",
      "Jan Levinson",
      "Carol Stills",
      "Karen Filippelli"
    ],
    "correctAnswer": "Jan Levinson",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: Baby Shower",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Jan Levinson",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37348",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what does Michael arrange after a burglary at work?",
    "answers": [
      "A sponsored run",
      "A talent show",
      "A fundraising auction",
      "A book sale"
    ],
    "correctAnswer": "A fundraising auction",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: Crime Aid",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A fundraising auction",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37349",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), whose transfer away from Scranton upsets Michael deeply?",
    "answers": [
      "Toby Flenderson's",
      "Kelly Kapoor's",
      "Meredith Palmer's",
      "Holly Flax's"
    ],
    "correctAnswer": "Holly Flax's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: Employee Transfer",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Holly Flax's",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37350",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who has altered Jim and Dwight's customer survey results?",
    "answers": [
      "Kelly Kapoor",
      "Pam Beesly",
      "Angela Martin",
      "Stanley Hudson"
    ],
    "correctAnswer": "Kelly Kapoor",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: Customer Survey",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Kelly Kapoor",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37351",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), to which Canadian city does Michael travel on business?",
    "answers": [
      "Toronto",
      "Winnipeg",
      "Montreal",
      "Ottawa"
    ],
    "correctAnswer": "Winnipeg",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: Business Trip",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Winnipeg",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37352",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which employee does Michael try to frame for drug possession?",
    "answers": [
      "Ryan Howard",
      "Oscar Martinez",
      "Toby Flenderson",
      "Creed Bratton"
    ],
    "correctAnswer": "Toby Flenderson",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: Frame Toby",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Toby Flenderson",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37353",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what spending choice divides the office?",
    "answers": [
      "A new car or computers",
      "A party or bonuses",
      "A new kitchen or carpet",
      "A copier or new chairs"
    ],
    "correctAnswer": "A copier or new chairs",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: The Surplus",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A copier or new chairs",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37354",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what country inspires Phyllis's holiday party theme?",
    "answers": [
      "Morocco",
      "Spain",
      "Japan",
      "Mexico"
    ],
    "correctAnswer": "Morocco",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: Moroccan Christmas",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Morocco",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37355",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which small rival company do Michael and Dwight investigate?",
    "answers": [
      "Vance Refrigeration",
      "Prince Family Paper",
      "Sabre",
      "Athlead"
    ],
    "correctAnswer": "Prince Family Paper",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: Prince Family Paper",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Prince Family Paper",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37356",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who suffers a heart attack during Dwight's staged fire?",
    "answers": [
      "Kevin Malone",
      "Michael Scott",
      "Stanley Hudson",
      "Oscar Martinez"
    ],
    "correctAnswer": "Stanley Hudson",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: Stress Relief",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Stanley Hudson",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37357",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who accompanies Michael on a speaking tour of branches?",
    "answers": [
      "Jim Halpert",
      "Dwight Schrute",
      "Ryan Howard",
      "Pam Beesly"
    ],
    "correctAnswer": "Pam Beesly",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: Lecture Circuit",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Pam Beesly",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37358",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which film inspires Michael's paper-discount promotion?",
    "answers": [
      "Willy Wonka & the Chocolate Factory",
      "Mary Poppins",
      "The Wizard of Oz",
      "Back to the Future"
    ],
    "correctAnswer": "Willy Wonka & the Chocolate Factory",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: Golden Ticket",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Willy Wonka & the Chocolate Factory",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37359",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which new executive sparks the dispute that causes Michael to resign?",
    "answers": [
      "David Wallace",
      "Charles Miner",
      "Robert California",
      "Jo Bennett"
    ],
    "correctAnswer": "Charles Miner",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: New Boss",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Charles Miner",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37360",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which piece of office equipment does Pam struggle to assemble in the episode Two Weeks?",
    "answers": [
      "A new photocopier",
      "A paper shredder",
      "A wireless router",
      "A telephone switchboard"
    ],
    "correctAnswer": "A new photocopier",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: Two Weeks",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A new photocopier",
      "New copier assembly subplot",
      "Source: https://the-office-tv-show.com/episodes/season5/21-two-weeks.aspx",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37361",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what does Michael establish in his old office?",
    "answers": [
      "A recording studio",
      "A games room",
      "A fitness centre",
      "A café-disco"
    ],
    "correctAnswer": "A café-disco",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: Cafe Disco",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A café-disco",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37362",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what news do Jim and Pam learn at the company's picnic?",
    "answers": [
      "Pam is pregnant",
      "Jim has been promoted",
      "They have won a holiday",
      "They are moving abroad"
    ],
    "correctAnswer": "Pam is pregnant",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 5",
      "Episode: Company Picnic",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Pam is pregnant",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37363",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what revelation about Stanley does Michael accidentally spread?",
    "answers": [
      "He has won the lottery",
      "He is having an affair",
      "He has a second job",
      "He is retiring"
    ],
    "correctAnswer": "He is having an affair",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 6",
      "Episode: Gossip",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: He is having an affair",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37364",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which salesman is proposed as a new co-manager?",
    "answers": [
      "Dwight Schrute",
      "Andy Bernard",
      "Jim Halpert",
      "Stanley Hudson"
    ],
    "correctAnswer": "Jim Halpert",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 6",
      "Episode: The Meeting",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Jim Halpert",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37365",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what sensitive personal news about Pam does Jim almost reveal before their wedding?",
    "answers": [
      "Her new job",
      "Her secret engagement",
      "Her family inheritance",
      "Her pregnancy"
    ],
    "correctAnswer": "Her pregnancy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 6",
      "Episode: Niagara",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Her pregnancy",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37366",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what organised-crime affiliation does Michael wrongly suspect an insurance salesman has?",
    "answers": [
      "The Mafia",
      "A smuggling gang",
      "A drug cartel",
      "A money-laundering ring"
    ],
    "correctAnswer": "The Mafia",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 6",
      "Episode: Mafia",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: The Mafia",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37367",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who is Michael dating to Pam's dismay?",
    "answers": [
      "Angela Martin",
      "Pam's mother Helene",
      "Phyllis Vance",
      "Kelly Kapoor"
    ],
    "correctAnswer": "Pam's mother Helene",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 6",
      "Episode: The Lover",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Pam's mother Helene",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37368",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what embarrassing accident happens to Michael at a client's premises?",
    "answers": [
      "He crashes a golf cart",
      "He trips down the stairs",
      "He falls into a koi pond",
      "He breaks a fish tank"
    ],
    "correctAnswer": "He falls into a koi pond",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 6",
      "Episode: Koi Pond",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: He falls into a koi pond",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37369",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what diversion does Michael organise amid financial worries?",
    "answers": [
      "A pub quiz",
      "A scavenger hunt",
      "A karaoke contest",
      "A murder-mystery roleplay"
    ],
    "correctAnswer": "A murder-mystery roleplay",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 6",
      "Episode: Murder",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A murder-mystery roleplay",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37370",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what promise can Michael not fulfil for graduating students?",
    "answers": [
      "He would pay their university tuition",
      "He would give them cars",
      "He would provide jobs",
      "He would fund their school trip"
    ],
    "correctAnswer": "He would pay their university tuition",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 6",
      "Episode: Scott's Tots",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: He would pay their university tuition",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37371",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who challenges Michael's determination to play Father Christmas?",
    "answers": [
      "Meredith Palmer",
      "Phyllis Vance",
      "Pam Beesly",
      "Angela Martin"
    ],
    "correctAnswer": "Phyllis Vance",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 6",
      "Episode: Secret Santa",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Phyllis Vance",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37372",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), why does Jim choose to leave his co-manager role?",
    "answers": [
      "He is transferring to Buffalo",
      "He has been fired",
      "Sales could bring higher commissions",
      "He wants to work in the warehouse"
    ],
    "correctAnswer": "Sales could bring higher commissions",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 6",
      "Episode: The Manager and the Salesman",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Sales could bring higher commissions",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37373",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), why does Pam try to delay going to hospital after labour begins?",
    "answers": [
      "To wait for the baby shower",
      "To get an extra night's stay under her health insurance",
      "To finish her work shift",
      "To wait for her mother to arrive"
    ],
    "correctAnswer": "To get an extra night's stay under her health insurance",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 6",
      "Episode: The Delivery",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: To get an extra night's stay under her health insurance",
      "Hospital timing and insurance subplot",
      "Source: https://tv.apple.com/gb/episode/the-delivery-pt-1/umc.cmc.2mtldve4b1txr915yk2e8x5mg",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37374",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which new corporate owner visits and makes employees stay late?",
    "answers": [
      "Jo Bennett",
      "Jan Levinson",
      "Nellie Bertram",
      "Karen Filippelli"
    ],
    "correctAnswer": "Jo Bennett",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 6",
      "Episode: St. Patrick's Day",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Jo Bennett",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37375",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which woman becomes Michael's new romantic interest after a bar visit?",
    "answers": [
      "Carol Stills",
      "Donna Newton",
      "Jan Levinson",
      "Holly Flax"
    ],
    "correctAnswer": "Donna Newton",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 6",
      "Episode: Happy Hour",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Donna Newton",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37376",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), whose previous engagement to Angela does Michael reveal to Erin?",
    "answers": [
      "Dwight Schrute's",
      "Ryan Howard's",
      "Andy Bernard's",
      "Jim Halpert's"
    ],
    "correctAnswer": "Andy Bernard's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 6",
      "Episode: Secretary's Day",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Andy Bernard's",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37377",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who investigates Michael's suspicion that Donna is cheating?",
    "answers": [
      "Ryan Howard",
      "Jim Halpert",
      "Toby Flenderson",
      "Dwight Schrute"
    ],
    "correctAnswer": "Dwight Schrute",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 6",
      "Episode: The Cover-Up",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Dwight Schrute",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37378",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what dangerous malfunction in Sabre products becomes public?",
    "answers": [
      "Printers catch fire",
      "Copiers leak ink",
      "Laptops overheat",
      "Telephones lose reception"
    ],
    "correctAnswer": "Printers catch fire",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 6",
      "Episode: Whistleblower",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Printers catch fire",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37379",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what family tie protects the rude new assistant from Michael's anger?",
    "answers": [
      "He is Michael's cousin",
      "He is Michael's nephew",
      "He is Michael's brother",
      "He is Michael's son"
    ],
    "correctAnswer": "He is Michael's nephew",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 7",
      "Episode: Nepotism",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: He is Michael's nephew",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37380",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which employee is ordered to counsel Michael after his misconduct?",
    "answers": [
      "Oscar Martinez",
      "Holly Flax",
      "Toby Flenderson",
      "Jo Bennett"
    ],
    "correctAnswer": "Toby Flenderson",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 7",
      "Episode: Counseling",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Toby Flenderson",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37381",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which stage musical features Andy in a local production?",
    "answers": [
      "Grease",
      "Chicago",
      "Les Misérables",
      "Sweeney Todd"
    ],
    "correctAnswer": "Sweeney Todd",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 7",
      "Episode: Andy's Play",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Sweeney Todd",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37382",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which competitor does the team try to learn sales secrets from?",
    "answers": [
      "A rival paper salesman",
      "A software entrepreneur",
      "A courier",
      "A bank manager"
    ],
    "correctAnswer": "A rival paper salesman",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 7",
      "Episode: The Sting",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A rival paper salesman",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37383",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), whose baby is being baptised at a ceremony attended by office staff?",
    "answers": [
      "Michael and Holly's",
      "Jim and Pam's",
      "Dwight and Angela's",
      "Andy and Erin's"
    ],
    "correctAnswer": "Jim and Pam's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 7",
      "Episode: Christening",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Jim and Pam's",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37384",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which television show is the focus of Gabe's gathering?",
    "answers": [
      "Smash",
      "The X Factor",
      "Glee",
      "The Voice"
    ],
    "correctAnswer": "Glee",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 7",
      "Episode: Viewing Party",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Glee",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37385",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), whose online messaging start-up does Michael urge colleagues to fund?",
    "answers": [
      "Jim Halpert's",
      "Dwight Schrute's",
      "Darryl Philbin's",
      "Ryan Howard's"
    ],
    "correctAnswer": "Ryan Howard's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 7",
      "Episode: WUPHF.com",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Ryan Howard's",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37386",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which accountant debates Michael about China's economic rise?",
    "answers": [
      "Oscar Martinez",
      "Kevin Malone",
      "Angela Martin",
      "Creed Bratton"
    ],
    "correctAnswer": "Oscar Martinez",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 7",
      "Episode: China",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Oscar Martinez",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37387",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who returns to Scranton, causing Michael to demand an elegant party?",
    "answers": [
      "Jan Levinson",
      "Holly Flax",
      "Karen Filippelli",
      "Carol Stills"
    ],
    "correctAnswer": "Holly Flax",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 7",
      "Episode: Classy Christmas",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Holly Flax",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37388",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who organises a business seminar to attract customers?",
    "answers": [
      "Jim Halpert",
      "Dwight Schrute",
      "Andy Bernard",
      "Michael Scott"
    ],
    "correctAnswer": "Andy Bernard",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 7",
      "Episode: The Seminar",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Andy Bernard",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37389",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who tracks down Michael after Jim leaves him at a petrol station?",
    "answers": [
      "Jan Levinson",
      "Pam Beesly",
      "Kelly Kapoor",
      "Holly Flax"
    ],
    "correctAnswer": "Holly Flax",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 7",
      "Episode: The Search",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Holly Flax",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37390",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which villain is played by Jim in Michael's film?",
    "answers": [
      "Goldenface",
      "Samuel L. Chang",
      "Michael Scarn",
      "Prison Mike"
    ],
    "correctAnswer": "Goldenface",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 7",
      "Episode: Threat Level Midnight",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Goldenface",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37391",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who seeks a permanent desk job at the branch?",
    "answers": [
      "Danny Cordray",
      "Todd Packer",
      "Josh Porter",
      "Charles Miner"
    ],
    "correctAnswer": "Todd Packer",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 7",
      "Episode: Todd Packer",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Todd Packer",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37392",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), to whom does Michael propose marriage?",
    "answers": [
      "Jan Levinson",
      "Donna Newton",
      "Holly Flax",
      "Carol Stills"
    ],
    "correctAnswer": "Holly Flax",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 7",
      "Episode: Garage Sale",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Holly Flax",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37393",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who arrives as Michael's replacement manager?",
    "answers": [
      "Robert California",
      "Nellie Bertram",
      "Charles Miner",
      "Deangelo Vickers"
    ],
    "correctAnswer": "Deangelo Vickers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 7",
      "Episode: Training Day",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Deangelo Vickers",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37394",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who receives Michael's quiet personal farewell before he leaves the office?",
    "answers": [
      "Jim Halpert",
      "Dwight Schrute",
      "Ryan Howard",
      "Toby Flenderson"
    ],
    "correctAnswer": "Jim Halpert",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 7",
      "Episode: Goodbye Michael",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Jim Halpert",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37395",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which employee joins Dwight and Darryl in applying for manager?",
    "answers": [
      "Meredith Palmer",
      "Kelly Kapoor",
      "Angela Martin",
      "Phyllis Vance"
    ],
    "correctAnswer": "Kelly Kapoor",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 7",
      "Episode: Search Committee",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Kelly Kapoor",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37396",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what does Robert California leave behind that divides the staff into two categories?",
    "answers": [
      "A sealed will",
      "A salary chart",
      "A mysterious list",
      "A performance report"
    ],
    "correctAnswer": "A mysterious list",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 8",
      "Episode: The List",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A mysterious list",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37397",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what unusual personal promise does Andy make to spur sales?",
    "answers": [
      "He will shave his head",
      "He will buy a sports car",
      "He will run a marathon",
      "He will get a tattoo"
    ],
    "correctAnswer": "He will get a tattoo",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 8",
      "Episode: The Incentive",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: He will get a tattoo",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37398",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), why do the warehouse staff resign together?",
    "answers": [
      "They win the lottery",
      "They are transferred",
      "They are dismissed",
      "The warehouse closes"
    ],
    "correctAnswer": "They win the lottery",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 8",
      "Episode: Lotto",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: They win the lottery",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37399",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), where does Andy hold a party to impress Robert California?",
    "answers": [
      "A hotel",
      "Schrute Farms",
      "The warehouse",
      "A country club"
    ],
    "correctAnswer": "Schrute Farms",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 8",
      "Episode: Garden Party",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Schrute Farms",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37400",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what does Dwight install to penalise employee mistakes?",
    "answers": [
      "A new alarm",
      "A lie detector",
      "An automatic firing system",
      "A biometric time clock"
    ],
    "correctAnswer": "An automatic firing system",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 8",
      "Episode: Doomsday",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: An automatic firing system",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37401",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), where does Andy take staff on a motivational historical excursion?",
    "answers": [
      "Washington DC",
      "Philadelphia",
      "Valley Forge",
      "Gettysburg"
    ],
    "correctAnswer": "Gettysburg",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 8",
      "Episode: Gettysburg",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Gettysburg",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37402",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who arrives seeking a position at the firm after Robert's intervention?",
    "answers": [
      "Robert's wife Susan",
      "Robert's sister",
      "Robert's daughter",
      "Robert's aunt"
    ],
    "correctAnswer": "Robert's wife Susan",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 8",
      "Episode: Mrs. California",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Robert's wife Susan",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37403",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what sort of contest does Andy enter to help office finances?",
    "answers": [
      "A golf tournament",
      "A pub quiz",
      "A cooking competition",
      "A karaoke competition"
    ],
    "correctAnswer": "A pub quiz",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 8",
      "Episode: Trivia",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A pub quiz",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37404",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), at whose mansion do employees gather for a pool party?",
    "answers": [
      "David Wallace's",
      "Jim Halpert's",
      "Robert California's",
      "Dwight Schrute's"
    ],
    "correctAnswer": "Robert California's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 8",
      "Episode: Pool Party",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Robert California's",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37405",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which city hosts Dwight's assignment for Sabre?",
    "answers": [
      "Atlanta",
      "Chicago",
      "Dallas",
      "Tallahassee"
    ],
    "correctAnswer": "Tallahassee",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 8",
      "Episode: Special Project",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Tallahassee",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37406",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who warns Dwight about the failure of the proposed Sabre store?",
    "answers": [
      "Jim Halpert",
      "Todd Packer",
      "Robert California",
      "Gabe Lewis"
    ],
    "correctAnswer": "Jim Halpert",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 8",
      "Episode: Last Day in Florida",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Jim Halpert",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37407",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which manager leaves town to pursue Erin, allowing Nellie to seize his office?",
    "answers": [
      "Dwight Schrute",
      "Andy Bernard",
      "Darryl Philbin",
      "Robert California"
    ],
    "correctAnswer": "Andy Bernard",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 8",
      "Episode: Get the Girl",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Andy Bernard",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37408",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), how many dogs does Andy impulsively adopt at a charity event?",
    "answers": [
      "Three",
      "Six",
      "Twelve",
      "Twenty"
    ],
    "correctAnswer": "Twelve",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 8",
      "Episode: Fundraiser",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Twelve",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37409",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which former corporate leader helps Andy regain control of the company?",
    "answers": [
      "Charles Miner",
      "Jan Levinson",
      "Jo Bennett",
      "David Wallace"
    ],
    "correctAnswer": "David Wallace",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 8",
      "Episode: Turf War",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: David Wallace",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37410",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what service does Dwight offer staff to investigate a baby's paternity?",
    "answers": [
      "Free family portraits",
      "Free pet portraits",
      "Free school photos",
      "Free wedding photographs"
    ],
    "correctAnswer": "Free family portraits",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 8",
      "Episode: Free Family Portrait Studio",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Free family portraits",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37411",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what unsettles Jim and Dwight at the start of the final season?",
    "answers": [
      "A new office building",
      "Two young new coworkers",
      "A new paper company",
      "A visiting inspector"
    ],
    "correctAnswer": "Two young new coworkers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: New Guys",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Two young new coworkers",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37412",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), whose marriage ceremony makes Jim and Pam reflect on their own relationship?",
    "answers": [
      "Dwight Schrute's",
      "Andy Bernard's",
      "Roy Anderson's",
      "Toby Flenderson's"
    ],
    "correctAnswer": "Roy Anderson's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: Roy's Wedding",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Roy Anderson's",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37413",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which American First Lady does Andy claim as a distant relation?",
    "answers": [
      "Hillary Clinton",
      "Laura Bush",
      "Nancy Reagan",
      "Michelle Obama"
    ],
    "correctAnswer": "Michelle Obama",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: Andy's Ancestry",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Michelle Obama",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37414",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), where do staff work when their usual building becomes unsafe?",
    "answers": [
      "A rented bus",
      "A hotel lobby",
      "A school gym",
      "The warehouse car park"
    ],
    "correctAnswer": "A rented bus",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: Work Bus",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A rented bus",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37415",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which college singing group does Andy invite for Halloween?",
    "answers": [
      "The Warblers",
      "Here Comes Treble",
      "The Treblemakers",
      "The Tone Rangers"
    ],
    "correctAnswer": "Here Comes Treble",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: Here Comes Treble",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Here Comes Treble",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37416",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what crisis leads Andy to deal with his family's boat?",
    "answers": [
      "An international race",
      "A family inheritance dispute over cattle",
      "Financial problems at home",
      "A ferry accident"
    ],
    "correctAnswer": "Financial problems at home",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: The Boat",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Financial problems at home",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37417",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who turns to Dwight after discovering her husband's affair?",
    "answers": [
      "Pam Beesly",
      "Kelly Kapoor",
      "Phyllis Vance",
      "Angela Martin"
    ],
    "correctAnswer": "Angela Martin",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: The Target",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Angela Martin",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37418",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which tradition forms the basis of Dwight's unusual office Christmas party?",
    "answers": [
      "Pennsylvania Dutch Christmas",
      "Italian Epiphany",
      "Swedish Lucia",
      "French Noël"
    ],
    "correctAnswer": "Pennsylvania Dutch Christmas",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: Dwight Christmas",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Pennsylvania Dutch Christmas",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37419",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who brings lice into the office but lets Meredith take the blame?",
    "answers": [
      "Angela Martin",
      "Pam Beesly",
      "Phyllis Vance",
      "Erin Hannon"
    ],
    "correctAnswer": "Pam Beesly",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: Lice",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Pam Beesly",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37420",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who poses as Dwight's son during a sales appointment?",
    "answers": [
      "Pete Miller",
      "Ryan Howard",
      "Clark Green",
      "Andy Bernard"
    ],
    "correctAnswer": "Clark Green",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: Suit Warehouse",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Clark Green",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37421",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what event does Jim miss while working in Philadelphia?",
    "answers": [
      "Pam's birthday",
      "A christening",
      "His mother's wedding",
      "Cece's recital"
    ],
    "correctAnswer": "Cece's recital",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: Customer Loyalty",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Cece's recital",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37422",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), who searches for a temporary replacement for Jim on the sales team?",
    "answers": [
      "Dwight Schrute",
      "Andy Bernard",
      "Stanley Hudson",
      "Darryl Philbin"
    ],
    "correctAnswer": "Dwight Schrute",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: Junior Salesman",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Dwight Schrute",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37423",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what artwork of Pam's is damaged at the warehouse?",
    "answers": [
      "A sculpture",
      "A wall mural",
      "A stained-glass window",
      "A photographic exhibition"
    ],
    "correctAnswer": "A wall mural",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: Vandalism",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A wall mural",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37424",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), why do coworkers pretend to be romantic partners at a shopping centre?",
    "answers": [
      "To enter a dancing competition",
      "To receive free tickets",
      "To get Valentine's discounts",
      "To win a prize"
    ],
    "correctAnswer": "To get Valentine's discounts",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: Couples Discount",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: To get Valentine's discounts",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37425",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which city does Pam visit for a possible job connected to Jim's venture?",
    "answers": [
      "Boston",
      "New York",
      "Chicago",
      "Philadelphia"
    ],
    "correctAnswer": "Philadelphia",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: Moving On",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Philadelphia",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37426",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which family event brings Dwight to his beet farm?",
    "answers": [
      "His aunt's funeral",
      "His cousin's wedding",
      "His brother's birthday",
      "His parents' anniversary"
    ],
    "correctAnswer": "His aunt's funeral",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: The Farm",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: His aunt's funeral",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37427",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what makes the employees realise the television documentary is about to be released?",
    "answers": [
      "A newspaper advertisement",
      "A promotional trailer",
      "A book deal",
      "An awards nomination"
    ],
    "correctAnswer": "A promotional trailer",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: Promos",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A promotional trailer",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37428",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what building problem makes everyone use the stairs?",
    "answers": [
      "A fire drill",
      "A flooding basement",
      "A broken lift",
      "A broken staircase"
    ],
    "correctAnswer": "A broken lift",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: Stairmageddon",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: A broken lift",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37429",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), which career path does Andy want to pursue after leaving Dunder Mifflin?",
    "answers": [
      "Law",
      "Teaching science",
      "Property development",
      "Acting and entertainment"
    ],
    "correctAnswer": "Acting and entertainment",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: Livin' the Dream",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Acting and entertainment",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37430",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what position does Jim invent a contest to fill for Dwight?",
    "answers": [
      "Assistant to the Assistant Regional Manager",
      "Top Sales Manager",
      "Human Resources Deputy",
      "Office Safety Captain"
    ],
    "correctAnswer": "Assistant to the Assistant Regional Manager",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: A.A.R.M.",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Assistant to the Assistant Regional Manager",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37431",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), whose wedding reunites the original documentary subjects?",
    "answers": [
      "Jim and Pam's",
      "Dwight and Angela's",
      "Michael and Holly's",
      "Andy and Erin's"
    ],
    "correctAnswer": "Dwight and Angela's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: Finale",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Dwight and Angela's",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37432",
    "category": "Television",
    "programme": "The Office (US)",
    "question": "In The Office (US), what relocation does Pam encourage so Jim can pursue his dream?",
    "answers": [
      "Moving to London",
      "Moving to Miami",
      "Moving to Austin",
      "Moving to Toronto"
    ],
    "correctAnswer": "Moving to Austin",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "American Television",
      "Sitcom",
      "Mockumentary",
      "NBC",
      "The Office US",
      "Programme: The Office (US)",
      "Season 9",
      "Episode: Finale",
      "2005–2013",
      "Dunder Mifflin",
      "Correct: Moving to Austin",
      "Episode storyline",
      "Source: https://www.thetvdb.com/series/the-office-us/allseasons/official",
      "US TV comedy",
      "November 2026 audit"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==222||
 questions[0].id!=='tv_15712'||questions[74].id!=='tv_15786'||
 auditAdditions[0].id!=='tv_37286'||
 auditAdditions[auditAdditions.length-1].id!=='tv_37432'||
 new Set(questions.map(q=>q.id)).size!==questions.length||
 new Set(questions.map(q=>q.question.trim().toLowerCase())).size!==questions.length||
 questions.some(q=>q.category!=='Television'||q.programme!=='The Office (US)'||
 q.answers.length!==4||new Set(q.answers.map(a=>a.toLowerCase().trim())).size!==4||
 q.answers.filter(a=>a===q.correctAnswer).length!==1||
 !q.tags.includes('Programme: The Office (US)')||q.tags.length<15||q.dailyEligible!==true)||
 auditAdditions.some(q=>!q.question.startsWith('In The Office (US), ')||q.tags.length<16))
 throw Error('Pack 335 audit QA validation failed');
module.exports = questions;
