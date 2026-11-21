
 // quiz_pack296.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: 30 Rock - Series One (2006-2007)
 // Covers all 21 broadcast episodes plus the original cast and production.
 // Seven individually selected specialist tags for every question.
 // Pack length follows distinct, documented material; no arbitrary quota.
 // quiz_bank.js already connects this pack through the live 1–558 pack range.
 // Row: question | correct answer | wrong1 | wrong2 | wrong3 | difficulty | seven specific tags

 const groups = [
   {
     topic: 'Origins, Setting and Main Cast',
     facts: `In which year did the American sitcom 30 Rock first air?|2006|2004|2008|2010|Easy|First Broadcast|October Premiere|Season One|American Comedy|NBC Debut|Television History|Original Run
 Which American television network originally broadcast 30 Rock?|NBC|ABC|CBS|Fox|Easy|Original Network|NBC Television|United States|Network Sitcom|2006 Premiere|Broadcast History|American Comedy
 Which comedian created the television series 30 Rock?|Tina Fey|Amy Poehler|Mindy Kaling|Julia Louis-Dreyfus|Easy|Tina Fey|Programme Creator|Comedy Writer|Television Producer|Sketch Comedy|Original Concept|Series Development
 What New York City building gives 30 Rock its title?|30 Rockefeller Plaza|The Empire State Building|One World Trade Center|Chrysler Building|Easy|Thirty Rockefeller Plaza|Rockefeller Center|New York City|Building Name|NBC Studios|Manhattan|Television Headquarters
 Which television industry is the main setting of 30 Rock?|A sketch comedy programme|A daytime soap opera|A nightly news programme|A sports commentary show|Easy|Backstage Television|Sketch Comedy|Writers Room|Studio Production|Network Workplace|Comedy Series|Show Within A Show
 What is the name of Liz Lemon's sketch programme before Jack changes it?|The Girlie Show|The Saturday Hour|Sketch Central|The Comedy Club|Easy|The Girlie Show|Original Programme|Liz Lemon|Jack Donaghy|Sketch Cast|Show Rebranding|Pilot Episode
 What does Jack rename The Girlie Show after hiring a new star?|TGS with Tracy Jordan|The Jenna Maroney Hour|NBC Tonight Live|The Jack Donaghy Show|Easy|TGS With Tracy Jordan|Programme Rebranding|Tracy Jordan|Jack Donaghy|Sketch Series|Network Decisions|Season One
 Who plays 30 Rock's head writer Liz Lemon?|Tina Fey|Jane Krakowski|Amy Poehler|Rachel Dratch|Easy|Liz Lemon|Tina Fey|Head Writer|Lead Actress|Television Writer|Casting|Main Character
 Which actor plays NBC executive Jack Donaghy?|Alec Baldwin|Steve Carell|John Slattery|Rob Lowe|Easy|Jack Donaghy|Alec Baldwin|NBC Executive|Actor Casting|Corporate Management|Liz Mentor|Regular Cast
 Who portrays eccentric movie star Tracy Jordan?|Tracy Morgan|Chris Rock|Dave Chappelle|Kenan Thompson|Easy|Tracy Jordan|Tracy Morgan|Film Star|New TGS Cast|Lead Actor|Unpredictable Celebrity|Show Rebranding
 Which actress plays the ambitious performer Jenna Maroney?|Jane Krakowski|Tina Fey|Katrina Bowden|Megan Mullally|Easy|Jenna Maroney|Jane Krakowski|Performer|TGS Cast|Actor Casting|Liz Friend|Celebrity Ego
 Which actor plays the enthusiastic NBC page Kenneth Parcell?|Jack McBrayer|Scott Adsit|Judah Friedlander|Lonny Ross|Easy|Kenneth Parcell|Jack McBrayer|NBC Page|Actor Casting|Studio Staff|Georgia Background|Main Cast
 Which actor portrays TGS producer Pete Hornberger?|Scott Adsit|Jack McBrayer|Keith Powell|Dean Winters|Easy|Pete Hornberger|Scott Adsit|TGS Producer|Actor Casting|Television Production|Liz Colleague|Regular Cast
 Who plays the hat-wearing TGS writer Frank Rossitano?|Judah Friedlander|Keith Powell|Lonny Ross|Chris Parnell|Easy|Frank Rossitano|Judah Friedlander|TGS Writer|Trucker Hats|Actor Casting|Writers Room|Regular Cast
 Who plays James 'Toofer' Spurlock, a member of the TGS writing team?|Keith Powell|Judah Friedlander|Scott Adsit|Jack McBrayer|Medium|Toofer Spurlock|Keith Powell|Writers Room|Actor Casting|TGS Staff|Harvard Graduate|Supporting Cast
 Which actress portrays young TGS assistant Cerie Xerox?|Katrina Bowden|Jane Krakowski|Tina Fey|Emily Mortimer|Medium|Cerie Xerox|Katrina Bowden|Office Assistant|Actor Casting|TGS Staff|Supporting Character|2006 Cast
 Which performer plays TGS cast member Josh Girard?|Lonny Ross|Scott Adsit|Chris Parnell|Judah Friedlander|Hard|Josh Girard|Lonny Ross|Sketch Performer|Actor Casting|TGS Cast|Supporting Character|Season One
 Which famous university is Toofer Spurlock proud to have attended?|Harvard|Yale|Princeton|Columbia|Easy|Toofer Spurlock|Harvard University|Education|Academic Background|TGS Writer|Character Identity|Writers Room
 What is Kenneth Parcell's job at NBC?|Page|News anchor|Network president|Security guard|Easy|Kenneth Parcell|NBC Page Programme|Studio Tours|Entry Level Job|Television Network|Staff Duties|Workplace Comedy
 Which actor portrays the bizarre doctor Leo Spaceman?|Chris Parnell|Bill Hader|Andy Samberg|Will Forte|Hard|Doctor Leo Spaceman|Chris Parnell|Medical Character|Guest Casting|Tracy Jordan|Recurring Doctor|Comedy Cameo`,
   },
   {
     topic: 'Series One - Pilot to Jack-Tor',
     facts: `Which unpredictable celebrity does Jack force Liz to add to her sketch show's cast?|Tracy Jordan|Conan O'Brien|Floyd DeBarber|Dennis Duffy|Easy|Pilot|Tracy Jordan|Jack Donaghy|Casting Decision|Liz Lemon|Network Intervention|First Episode
 What sort of venue does Tracy use for a cast-and-crew party in The Aftermath?|A yacht|A bowling alley|A country club|A ski lodge|Medium|The Aftermath|Yacht Party|Tracy Jordan|Cast And Crew|TGS Relaunch|Social Disaster|2006 Story
 Who sets Liz up on a blind date in the third episode?|Jack Donaghy|Pete Hornberger|Jenna Maroney|Tracy Jordan|Easy|Blind Date|Jack Donaghy|Liz Lemon|Personal Life|Unwanted Matchmaking|Workplace Boss|2006 Episode
 Which card game does Jack join with the TGS writers in Blind Date?|Poker|Bridge|Rummy|Blackjack|Medium|Blind Date|Poker Night|Jack Donaghy|TGS Writers|Competitive Game|Kenneth Parcell|Staff Gathering
 Which unlikely player surprises Jack with his poker skills?|Kenneth Parcell|Josh Girard|Pete Hornberger|Frank Rossitano|Medium|Kenneth Parcell|Poker Talent|Blind Date|Jack Donaghy|Unexpected Competitor|Writers Game|Workplace Contest
 Where does Jack insist on inserting himself in Jack the Writer?|The writers' room|The studio audience|The make-up department|The props warehouse|Easy|Jack The Writer|Writers Room|Executive Interference|Liz Lemon|Creative Control|Sketch Scripts|2006 Episode
 Which assistant's revealing clothes become a workplace issue in Jack the Writer?|Cerie Xerox|Jenna Maroney|Liz Lemon|Phoebe|Easy|Cerie Xerox|Office Clothing|Jack The Writer|Dress Code|Workplace Distraction|Liz Lemon|TGS Assistant
 Which boss wants to perform in a sketch in Jack-Tor?|Jack Donaghy|Don Geiss|Pete Hornberger|Tracy Jordan|Easy|Jack Tor|Jack Donaghy|Acting Ambition|Sketch Appearance|Network Executive|Liz Lemon|TGS Programme
 What skill does Liz suspect Tracy is pretending not to have in Jack-Tor?|Reading|Driving|Swimming|Dancing|Medium|Tracy Jordan|Pretended Illiteracy|Jack Tor|Avoiding Rehearsal|Liz Lemon|Performing Job|Workplace Deception
 Which two writers trick Jenna into thinking her job is in danger in Jack-Tor?|Frank and Toofer|Pete and Josh|Jack and Kenneth|Liz and Cerie|Medium|Frank Rossitano|Toofer Spurlock|Jenna Maroney|Jack Tor|Prank|Job Insecurity|Writing Staff`,
   },
   {
     topic: 'Series One - Dennis, Conan and New Ambitions',
     facts: `What outdated product does Liz's on-and-off boyfriend Dennis Duffy sell?|Pagers|Fax machines|VHS recorders|Typewriters|Easy|Dennis Duffy|Pager Salesman|Jack Meets Dennis|Liz Lemon|Romantic Relationship|Obsolete Technology|2006 Story
 Which actor plays Liz Lemon's boyfriend Dennis Duffy?|Dean Winters|Jason Sudeikis|Will Arnett|Nathan Lane|Easy|Dean Winters|Dennis Duffy|Actor Casting|Liz Lemon|Recurring Boyfriend|Guest Actor|Romantic Comedy
 Which late-night television host does Tracy visit in the episode Tracy Does Conan?|Conan O'Brien|Jay Leno|David Letterman|Jimmy Kimmel|Easy|Conan O Brien|Late Night Show|Tracy Does Conan|Guest Appearance|NBC Talk Show|Tracy Jordan|2006 Episode
 Whose scheduled late-night appearance does Tracy take over?|Jenna Maroney's|Liz Lemon's|Kenneth Parcell's|Pete Hornberger's|Medium|Jenna Maroney|Tracy Jordan|Tracy Does Conan|Bumped Guest|Television Publicity|Rivalry|Late Night Booking
 What major relationship decision does Liz finally make in The Break-Up?|She ends things with Dennis|She marries Dennis|She moves in with Jack|She proposes to Floyd|Easy|Liz Lemon|Dennis Duffy|The Break Up|Relationship Ending|Dating Life|Season One|2006 Story
 What future family decision does Liz start contemplating in The Baby Show?|Having a child|Adopting a teenager|Moving abroad with Dennis|Becoming a foster grandparent|Easy|Liz Lemon|Motherhood|The Baby Show|Family Planning|Personal Future|Jenna Maroney|2007 Episode
 Whose impersonation of him infuriates Tracy in The Baby Show?|Josh Girard's|Frank Rossitano's|Jack Donaghy's|Kenneth Parcell's|Medium|Tracy Jordan|Josh Girard|Impression|The Baby Show|Comedy Sketch|TGS Cast|Workplace Rivalry
 What is the name of Jenna's independent film in the tenth episode?|The Rural Juror|The Urban Lawyer|The Country Judge|The State Witness|Easy|Jenna Maroney|The Rural Juror|Independent Film|Premiere|Acting Career|Movie Publicity|2007 Episode
 Which colleague struggles to tell Jenna what she thinks of The Rural Juror?|Liz Lemon|Cerie Xerox|Kenneth Parcell|Tracy Jordan|Medium|Liz Lemon|Jenna Maroney|Film Criticism|The Rural Juror|Honesty Problem|Best Friends|Movie Reaction
 What sort of product does Jack help Tracy develop and market in The Rural Juror?|A cooking appliance|A home exercise machine|A video game console|A pet grooming kit|Medium|Tracy Jordan|Jack Donaghy|Cooking Machine|The Rural Juror|Celebrity Endorsement|Product Development|Commercial Venture`,
   },
   {
     topic: 'Series One - Swapped Jobs, Royalty and Valentine',
     facts: `Which two characters exchange workplace roles in The Head and the Hair?|Jack and Kenneth|Liz and Jenna|Tracy and Pete|Frank and Toofer|Easy|Jack Donaghy|Kenneth Parcell|The Head And The Hair|Job Swap|Executive And Page|Workplace Experiment|2007 Story
 What sort of admirer does Liz unexpectedly date in The Head and the Hair?|An attractive young man|A retired general|A professional wrestler|A television chef|Easy|Liz Lemon|Dating Life|The Head And The Hair|Attractive Stranger|Romantic Surprise|Jenna Maroney|2007 Episode
 What type of royal event do Jack, Liz and Jenna attend in Black Tie?|A prince's birthday party|A royal wedding|A coronation|A palace christening|Easy|Black Tie|Royal Birthday|Fancy Dress|Jack Donaghy|Liz Lemon|Jenna Maroney|High Society
 Which actor portrays Prince Gerhardt in Black Tie?|Paul Reubens|Nathan Lane|Will Arnett|Rip Torn|Medium|Paul Reubens|Prince Gerhardt|Black Tie|Guest Star|Royal Character|Birthday Celebration|2007 Casting
 Which actress plays Jack's former wife Bianca in Black Tie?|Isabella Rossellini|Emily Mortimer|Elaine Stritch|Julianne Moore|Medium|Isabella Rossellini|Bianca Donaghy|Jack Ex Wife|Black Tie|Guest Actress|Divorce Storyline|2007 Cast
 What romantic occasion forces the TGS writers to work all night in Up All Night?|Valentine's Day|New Year's Eve|Thanksgiving|Halloween|Easy|Up All Night|Valentines Day|Writers Deadline|Late Work|NBC Programme|Romantic Holiday|2007 Story
 What legal event is Jack celebrating in Up All Night?|His divorce becoming final|Signing a new employment contract|Buying a house|Winning a lawsuit|Easy|Jack Donaghy|Divorce Finalised|Up All Night|Bianca Donaghy|Personal Milestone|Valentines Day|2007 Episode
 What unexpected delivery makes Liz wonder who secretly admires her in Up All Night?|Flowers|An engagement ring|A box of books|A holiday voucher|Easy|Liz Lemon|Mystery Flowers|Up All Night|Secret Admirer|Valentines Day|Romantic Confusion|Office Delivery
 Which powerful corporate executive does Jack try to impress at a golf event in The C Word?|Don Geiss|Devon Banks|Floyd DeBarber|Eddie Donaghy|Medium|Don Geiss|The C Word|Corporate Chief|Charity Golf|Jack Donaghy|Executive Ambition|2007 Episode
 Which actor portrays corporate boss Don Geiss?|Rip Torn|Alec Baldwin|Paul Reubens|Nathan Lane|Hard|Rip Torn|Don Geiss|Actor Casting|Corporate Executive|The C Word|Recurring Guest|NBC Management
 Why does Liz reconsider her leadership style in The C Word?|She overhears a writer insulting her|She loses a writing competition|She is promoted to network president|She takes a course in accounting|Easy|Liz Lemon|Management Style|The C Word|Staff Complaint|Writers Room|Workplace Leadership|2007 Episode
 Whose employment contract does Jack use to teach Liz tough negotiation in Hard Ball?|Josh Girard's|Kenneth Parcell's|Pete Hornberger's|Tracy Jordan's|Medium|Josh Girard|Jack Donaghy|Liz Lemon|Hard Ball|Contract Negotiation|Career Advice|TGS Employment
 Which performer gets into trouble after a magazine misquotes her views about the troops in Hard Ball?|Jenna Maroney|Tracy Jordan|Cerie Xerox|Liz Lemon|Medium|Jenna Maroney|Hard Ball|Magazine Interview|Publicity Crisis|Troops Misquote|Celebrity Reputation|Media Relations`,
   },
   {
     topic: 'Series One - The Source Awards and Family Conflict',
     facts: `Which awards ceremony is Tracy persuaded to host in the sixteenth episode?|The Source Awards|The Emmy Awards|The Grammy Awards|The MTV Video Music Awards|Easy|Tracy Jordan|Source Awards|Host Role|Hip Hop Event|Jack Donaghy|2007 Episode|Music Industry
 What is the name of Jack's wine label promoted at The Source Awards?|Donaghy Estates|Rockefeller Reserve|Geiss Vineyards|TGS Cellars|Medium|Jack Donaghy|Donaghy Estates|Wine Marketing|The Source Awards|Business Venture|Corporate Branding|2007 Plot
 Which actor plays Tracy's business manager Steven Black?|Wayne Brady|LL Cool J|Chris Parnell|Jason Sudeikis|Medium|Wayne Brady|Steven Black|Tracy Manager|The Source Awards|Liz Lemon Date|Guest Actor|2007 Cast
 Which musician portrays hip-hop producer Ridikolus in The Source Awards?|LL Cool J|50 Cent|Snoop Dogg|Ice Cube|Medium|LL Cool J|Ridikolus|The Source Awards|Rapper Guest|Jack Donaghy|Hip Hop Producer|Guest Casting
 What family member visits Jack in The Fighting Irish?|His brother Eddie|His sister Nancy|His uncle Patrick|His son Michael|Easy|Jack Donaghy|Eddie Donaghy|The Fighting Irish|Family Reunion|Estranged Relatives|Sibling Relationship|2007 Episode
 Which actor plays Jack's brother Eddie Donaghy?|Nathan Lane|Paul Reubens|Will Arnett|Rip Torn|Medium|Nathan Lane|Eddie Donaghy|The Fighting Irish|Guest Actor|Family Member|Casting|2007 Story
 What difficult workplace task does Liz face in The Fighting Irish?|Making staff redundancies|Organising a royal visit|Hiring a new CEO|Negotiating a studio sale|Easy|Liz Lemon|Staff Redundancies|The Fighting Irish|Budget Cuts|TGS Employees|Management Decision|Office Conflict
 Which actor portrays Jack's West Coast rival Devon Banks?|Will Arnett|Dean Winters|Nathan Lane|Jason Sudeikis|Medium|Will Arnett|Devon Banks|Fireworks|Actor Casting|NBC Rival|Corporate Competition|Season One
 Which NBC employee does Jack use to get close to Devon Banks?|Kenneth Parcell|Frank Rossitano|Pete Hornberger|Josh Girard|Medium|Kenneth Parcell|Devon Banks|Fireworks|Jack Donaghy|Corporate Espionage|NBC Page|Rivalry
 What sort of support-group meeting does Liz attend to get closer to Floyd in Fireworks?|Alcoholics Anonymous|Gamblers Anonymous|A bereavement group|A divorce support group|Medium|Liz Lemon|Floyd DeBarber|Alcoholics Anonymous|Fireworks|Pretended Addiction|Romantic Deception|2007 Story
 Which historical American figure does Tracy discover he is descended from in Fireworks?|Thomas Jefferson|Abraham Lincoln|George Washington|Benjamin Franklin|Medium|Tracy Jordan|Thomas Jefferson|Family Ancestry|Fireworks|DNA Test|American History|2007 Story`,
   },
   {
     topic: 'Series One - Floyd, Cleveland and Hiatus',
     facts: `Which actor plays Liz's boyfriend Floyd DeBarber?|Jason Sudeikis|Dean Winters|Will Arnett|Chris Parnell|Easy|Jason Sudeikis|Floyd DeBarber|Actor Casting|Liz Lemon Romance|Season One|Guest Performer|2007 Cast
 Which woman, played by Emily Mortimer, begins a relationship with Jack in Corporate Crush?|Phoebe|Bianca|Cerie|Jenna|Easy|Phoebe|Emily Mortimer|Jack Donaghy|Corporate Crush|Romantic Interest|Art Gallery|2007 Story
 What type of workplace does Jack's new love interest Phoebe work at?|An auction house|A television newsroom|A hospital|A law firm|Medium|Phoebe|Christies Auctioneer|Corporate Crush|Jack Donaghy|Emily Mortimer|Relationship Background|New Girlfriend
 Which department does Don Geiss remove from Jack's responsibilities after the failed fireworks plan?|Microwave ovens|Sports programming|News broadcasts|Radio advertising|Medium|Jack Donaghy|Don Geiss|Microwave Department|Corporate Crush|Executive Demotion|Fireworks Failure|GE Management
 Which US city does Floyd take Liz to in the twentieth episode?|Cleveland|Chicago|Boston|Philadelphia|Easy|Floyd DeBarber|Liz Lemon|Cleveland Episode|Ohio|Romantic Trip|City Visit|2007 Story
 Which shadowy group does Tracy fear is pursuing him late in the first series?|The Black Crusaders|The Midnight League|The Writers Guild|The National Network|Medium|Tracy Jordan|Black Crusaders|Cleveland|Celebrity Paranoia|Show Business|Season One|Perceived Pursuit
 Which actress plays Jack's mother Colleen Donaghy?|Elaine Stritch|Isabella Rossellini|Emily Mortimer|Megan Mullally|Medium|Elaine Stritch|Colleen Donaghy|Actor Casting|Hiatus|Jack Mother|Family Dynamics|Season Finale
 Which actor plays Kenneth's cousin Jessie in the first-series finale?|Sean Hayes|Nathan Lane|Will Arnett|Paul Reubens|Medium|Sean Hayes|Jessie Parcell|Kenneth Cousin|Hiatus|Tracy Jordan|Guest Casting|Series Finale
 With whose cousin does Tracy hide while evading the Black Crusaders in Hiatus?|Kenneth's|Liz's|Jenna's|Jack's|Easy|Tracy Jordan|Kenneth Parcell|Jessie|Hiatus|Hiding Place|Black Crusaders|Season Finale
 Where does Jack end up after his mother's arrival and the pressures of the finale?|In hospital|In prison|In Cleveland|On a yacht|Easy|Jack Donaghy|Hospitalisation|Hiatus|Colleen Donaghy|Season One Finale|Family Stress|2007 Story
 In which month and year did the first series of 30 Rock end its original American run?|April 2007|December 2006|June 2007|January 2008|Medium|April 2007|Season One Finale|Original Broadcast|NBC Schedule|Hiatus Episode|Television Date|2007 End`,
   },
 ];

 const FIRST_ID = 12510;
 let index = 0;
 const questions = groups.flatMap(group =>
   group.facts.trim().split('\n').map(line => {
     const parts = line.trim().split('|').map(part => part.trim());
     const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
     if (parts.length !== 13) {
       throw new Error(`Expected seven specific tags at ${id}; got ${parts.length - 6}`);
     }
     const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
     const wrongAnswers = [wrong1, wrong2, wrong3];
     if (!question || !correctAnswer || wrongAnswers.some(answer => !answer)) {
       throw new Error(`Missing question or answer at ${id}`);
     }
     if (new Set([correctAnswer, ...wrongAnswers].map(answer => answer.toLowerCase())).size !== 4) {
       throw new Error(`Repeated answer option at ${id}`);
     }
     if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.some(tag => !tag)) {
       throw new Error(`Invalid difficulty or tags at ${id}`);
     }
     const answers = [...wrongAnswers];
     answers.splice(index % 4, 0, correctAnswer);
     const tags = [...new Map([
       'American Television', 'American Sitcom', '30 Rock', 'NBC',
       '2000s', '2006-2007', 'Season One', 'Workplace Comedy',
       'Sketch Comedy', group.topic, correctAnswer, ...specificTags
     ].map(tag => [tag.toLowerCase(), tag])).values()];
     const item = { id, category: 'Television', question, answers, correctAnswer, difficulty, tags, dailyEligible: true };
     index++;
     return item;
   })
 );

 const EXPECTED_COUNT = 75;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_12510' || questions[questions.length - 1].id !== 'tv_12584') {
   throw new Error('Unexpected question ID range');
 }
 if (new Set(questions.map(q => q.id)).size !== questions.length ||
     new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
   throw new Error('Duplicate question IDs or wording');
 }
 if (questions.some(q => q.category !== 'Television' || q.answers.length !== 4 ||
     !q.answers.includes(q.correctAnswer) || q.tags.length < 16 ||
     q.tags.some(tag => !tag) || q.dailyEligible !== true)) {
   throw new Error('Incomplete exported question metadata');
 }

// 21 November 2026: 30 Rock season-one audit. Original IDs tv_12510–tv_12584 retained.
// Corrected Phoebe's workplace to an auction house (Christie's).
// Added 29 new questions, IDs tv_35698–tv_35726.
// Reference sources:
// https://en.wikipedia.org/wiki/30_Rock_season_1
// https://thetvdb.com/series/30-rock/seasons/official/1
// https://www.rottentomatoes.com/tv/30-rock/s01
const auditAdditions = [
  {
    "id": "tv_35698",
    "category": "Television",
    "question": "Who played Jack Donaghy's devoted assistant Jonathan in the first season of 30 Rock?",
    "answers": [
      "Maulik Pancholy",
      "Keith Powell",
      "John Lutz",
      "Scott Adsit"
    ],
    "correctAnswer": "Maulik Pancholy",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Recurring cast",
      "Fact: Jonathan actor",
      "Storyline or casting: Executive assistant",
      "Correct answer: Maulik Pancholy",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Who played Jack Donaghy's devoted assistant Jonathan in the first season of 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35699",
    "category": "Television",
    "question": "Which actor portrayed Tracy's entourage member Dot Com in the first season of 30 Rock?",
    "answers": [
      "Grizz Chapman",
      "Kevin Brown",
      "Keith Powell",
      "Lonny Ross"
    ],
    "correctAnswer": "Kevin Brown",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Recurring cast",
      "Fact: Dot Com actor",
      "Storyline or casting: Tracy entourage",
      "Correct answer: Kevin Brown",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which actor portrayed Tracy's entourage member Dot Com in the first season of 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35700",
    "category": "Television",
    "question": "Which actor played Tracy's companion Grizz in the first season of 30 Rock?",
    "answers": [
      "Kevin Brown",
      "John Lutz",
      "Grizz Chapman",
      "Maulik Pancholy"
    ],
    "correctAnswer": "Grizz Chapman",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Recurring cast",
      "Fact: Grizz actor",
      "Storyline or casting: Tracy entourage",
      "Correct answer: Grizz Chapman",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which actor played Tracy's companion Grizz in the first season of 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35701",
    "category": "Television",
    "question": "Which actor portrayed the TGS writer known as J. D. Lutz in the first season of 30 Rock?",
    "answers": [
      "Judah Friedlander",
      "Keith Powell",
      "Scott Adsit",
      "John Lutz"
    ],
    "correctAnswer": "John Lutz",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Recurring cast",
      "Fact: J. D. Lutz actor",
      "Storyline or casting: TGS staff",
      "Correct answer: John Lutz",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which actor portrayed the TGS writer known as J. D. Lutz in the first season of 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35702",
    "category": "Television",
    "question": "Which performer was originally cast as Jenna before Jane Krakowski in 30 Rock?",
    "answers": [
      "Rachel Dratch",
      "Amy Poehler",
      "Maya Rudolph",
      "Kristen Wiig"
    ],
    "correctAnswer": "Rachel Dratch",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Production",
      "Fact: Early Jenna casting",
      "Storyline or casting: Recast of lead role",
      "Correct answer: Rachel Dratch",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which performer was originally cast as Jenna before Jane Krakowski in 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35703",
    "category": "Television",
    "question": "What kind of television programme was Tina Fey's early pitch for what became 30 Rock originally about?",
    "answers": [
      "A hospital drama",
      "A cable news programme",
      "A sports talk show",
      "A police procedural"
    ],
    "correctAnswer": "A cable news programme",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Production",
      "Fact: Original series pitch",
      "Storyline or casting: Cable news development",
      "Correct answer: A cable news programme",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: What kind of television programme was Tina Fey's early pitch for what became 30 Rock originally about?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35704",
    "category": "Television",
    "question": "What was the first name of the previous network executive whose death leads to Jack's arrival in 30 Rock?",
    "answers": [
      "Gerald",
      "Howard",
      "Gary",
      "Philip"
    ],
    "correctAnswer": "Gary",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Pilot",
      "Fact: Predecessor of Jack",
      "Storyline or casting: The Girlie Show NBC executive",
      "Correct answer: Gary",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: What was the first name of the previous network executive whose death leads to Jack's arrival in 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35705",
    "category": "Television",
    "question": "What is the first name of the woman Jack unexpectedly arranges for Liz to date in 30 Rock?",
    "answers": [
      "Bianca",
      "Phoebe",
      "Anna",
      "Gretchen"
    ],
    "correctAnswer": "Gretchen",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Blind Date",
      "Fact: Liz's unexpected blind date",
      "Storyline or casting: Gretchen Thomas",
      "Correct answer: Gretchen",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: What is the first name of the woman Jack unexpectedly arranges for Liz to date in 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35706",
    "category": "Television",
    "question": "Which actress played Jack's friend Gretchen Thomas in 30 Rock?",
    "answers": [
      "Stephanie March",
      "Anna Chlumsky",
      "Emily Mortimer",
      "Isabella Rossellini"
    ],
    "correctAnswer": "Stephanie March",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Blind Date",
      "Fact: Gretchen casting",
      "Storyline or casting: Blind Date guest actress",
      "Correct answer: Stephanie March",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which actress played Jack's friend Gretchen Thomas in 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35707",
    "category": "Television",
    "question": "Which new mentor tries to teach Kenneth how to be successful in the 30 Rock episode Jack the Writer?",
    "answers": [
      "Pete Hornberger",
      "Tracy Jordan",
      "Frank Rossitano",
      "Jack Donaghy"
    ],
    "correctAnswer": "Tracy Jordan",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Jack the Writer",
      "Fact: Kenneth mentoring",
      "Storyline or casting: Tracy teaches the NBC page",
      "Correct answer: Tracy Jordan",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which new mentor tries to teach Kenneth how to be successful in the 30 Rock episode Jack the Writer?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35708",
    "category": "Television",
    "question": "What animal is Tracy photographed with outside Starbucks in 30 Rock, creating an unexpectedly ordinary public image?",
    "answers": [
      "A rabbit",
      "A cat",
      "A dog",
      "A parrot"
    ],
    "correctAnswer": "A dog",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Jack Meets Dennis",
      "Fact: Tracy press photograph",
      "Storyline or casting: Tabloid sees normal behaviour",
      "Correct answer: A dog",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: What animal is Tracy photographed with outside Starbucks in 30 Rock, creating an unexpectedly ordinary public image?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35709",
    "category": "Television",
    "question": "What causes Tracy's especially unusual behaviour before his appearance on Conan in 30 Rock?",
    "answers": [
      "An allergy to the studio lights",
      "A head injury from the previous day's filming",
      "Accidentally drinking decaffeinated coffee",
      "Medication prescribed by Dr Spaceman"
    ],
    "correctAnswer": "Medication prescribed by Dr Spaceman",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Tracy Does Conan",
      "Fact: Tracy medication reaction",
      "Storyline or casting: Conan booking crisis",
      "Correct answer: Medication prescribed by Dr Spaceman",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: What causes Tracy's especially unusual behaviour before his appearance on Conan in 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35710",
    "category": "Television",
    "question": "What workplace session must Tracy and Toofer attend after an argument in the 30 Rock episode The Break-Up?",
    "answers": [
      "Sensitivity training",
      "Public speaking lessons",
      "A first-aid workshop",
      "Corporate finance training"
    ],
    "correctAnswer": "Sensitivity training",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: The Break-Up",
      "Fact: Tracy and Toofer dispute",
      "Storyline or casting: HR disciplinary response",
      "Correct answer: Sensitivity training",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: What workplace session must Tracy and Toofer attend after an argument in the 30 Rock episode The Break-Up?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35711",
    "category": "Television",
    "question": "Which TGS employee announces an engagement that prompts Liz to reconsider motherhood in 30 Rock?",
    "answers": [
      "Jenna Maroney",
      "Cerie Xerox",
      "Liz Lemler",
      "Phoebe"
    ],
    "correctAnswer": "Cerie Xerox",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: The Baby Show",
      "Fact: Cerie engagement",
      "Storyline or casting: Liz considers parenthood",
      "Correct answer: Cerie Xerox",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which TGS employee announces an engagement that prompts Liz to reconsider motherhood in 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35712",
    "category": "Television",
    "question": "Which character uses celebrity impersonations to fool Tracy and Jack in 30 Rock's The Baby Show?",
    "answers": [
      "Frank Rossitano",
      "Kenneth Parcell",
      "Josh Girard",
      "Toofer Spurlock"
    ],
    "correctAnswer": "Josh Girard",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: The Baby Show",
      "Fact: Tricking Tracy and Jack",
      "Storyline or casting: Josh impressions",
      "Correct answer: Josh Girard",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which character uses celebrity impersonations to fool Tracy and Jack in 30 Rock's The Baby Show?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35713",
    "category": "Television",
    "question": "What is the specific function of the Tracy Jordan Meat Machine in 30 Rock?",
    "answers": [
      "It grills and serves frozen vegetables",
      "It prints photographs on toast",
      "It cooks dinner using steam from coffee",
      "It replaces the bread in sandwiches with meat"
    ],
    "correctAnswer": "It replaces the bread in sandwiches with meat",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: The Rural Juror",
      "Fact: Meat Machine function",
      "Storyline or casting: Tracy celebrity product",
      "Correct answer: It replaces the bread in sandwiches with meat",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: What is the specific function of the Tracy Jordan Meat Machine in 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35714",
    "category": "Television",
    "question": "Which pair of TGS writers are enlisted to write Tracy's autobiography in a single day in 30 Rock?",
    "answers": [
      "Frank and Toofer",
      "Pete and Josh",
      "Liz and Jenna",
      "Grizz and Dot Com"
    ],
    "correctAnswer": "Frank and Toofer",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: The Head and the Hair",
      "Fact: Ghostwriters of Tracy memoir",
      "Storyline or casting: Single-day writing job",
      "Correct answer: Frank and Toofer",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which pair of TGS writers are enlisted to write Tracy's autobiography in a single day in 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35715",
    "category": "Television",
    "question": "Which tennis champion appears as himself in 30 Rock's The Head and the Hair?",
    "answers": [
      "Andre Agassi",
      "John McEnroe",
      "Pete Sampras",
      "Andy Roddick"
    ],
    "correctAnswer": "John McEnroe",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: The Head and the Hair",
      "Fact: Guest athlete cameo",
      "Storyline or casting: John McEnroe",
      "Correct answer: John McEnroe",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which tennis champion appears as himself in 30 Rock's The Head and the Hair?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35716",
    "category": "Television",
    "question": "Which actor played Prince Gerhardt's servant Tomas in the first series of 30 Rock?",
    "answers": [
      "Will Arnett",
      "Jason Sudeikis",
      "Will Forte",
      "Bill Hader"
    ],
    "correctAnswer": "Will Forte",
    "difficulty": "Hard",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Black Tie",
      "Fact: Prince's servant casting",
      "Storyline or casting: Tomas",
      "Correct answer: Will Forte",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which actor played Prince Gerhardt's servant Tomas in the first series of 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35717",
    "category": "Television",
    "question": "Which TGS colleague urges Pete not to cheat on his wife during the 30 Rock episode Black Tie?",
    "answers": [
      "Tracy Jordan",
      "Josh Girard",
      "Frank Rossitano",
      "Kenneth Parcell"
    ],
    "correctAnswer": "Kenneth Parcell",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Black Tie",
      "Fact: Pete temptation",
      "Storyline or casting: Kenneth discourages infidelity",
      "Correct answer: Kenneth Parcell",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which TGS colleague urges Pete not to cheat on his wife during the 30 Rock episode Black Tie?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35718",
    "category": "Television",
    "question": "Who plays Tracy's wife Angie Jordan when she appears in 30 Rock's first-season Valentine episode?",
    "answers": [
      "Sherri Shepherd",
      "Kerry Washington",
      "Tichina Arnold",
      "Regina King"
    ],
    "correctAnswer": "Sherri Shepherd",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Up All Night",
      "Fact: Angie casting",
      "Storyline or casting: Tracy's wife",
      "Correct answer: Sherri Shepherd",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Who plays Tracy's wife Angie Jordan when she appears in 30 Rock's first-season Valentine episode?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35719",
    "category": "Television",
    "question": "Which TGS producer forgets Valentine's Day in the 30 Rock episode Up All Night?",
    "answers": [
      "Tracy Jordan",
      "Pete Hornberger",
      "Josh Girard",
      "Jack Donaghy"
    ],
    "correctAnswer": "Pete Hornberger",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Up All Night",
      "Fact: Forgotten Valentine's Day",
      "Storyline or casting: Workplace all-nighter",
      "Correct answer: Pete Hornberger",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which TGS producer forgets Valentine's Day in the 30 Rock episode Up All Night?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35720",
    "category": "Television",
    "question": "Which NBC page is invited to join Tracy's personal entourage in 30 Rock's Hard Ball?",
    "answers": [
      "Jonathan",
      "Cerie Xerox",
      "Kenneth Parcell",
      "Josh Girard"
    ],
    "correctAnswer": "Kenneth Parcell",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Hard Ball",
      "Fact: Kenneth gets promotion",
      "Storyline or casting: Tracy entourage",
      "Correct answer: Kenneth Parcell",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which NBC page is invited to join Tracy's personal entourage in 30 Rock's Hard Ball?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35721",
    "category": "Television",
    "question": "Which actress portrayed the accountant nicknamed Other Liz in 30 Rock?",
    "answers": [
      "Molly Shannon",
      "Stephanie March",
      "Siobhan Fallon Hogan",
      "Anna Chlumsky"
    ],
    "correctAnswer": "Anna Chlumsky",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: The Fighting Irish",
      "Fact: Other Liz actress",
      "Storyline or casting: Liz Lemler",
      "Correct answer: Anna Chlumsky",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which actress portrayed the accountant nicknamed Other Liz in 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35722",
    "category": "Television",
    "question": "Which actress played Jack's sister Katherine Catherine Donaghy in 30 Rock?",
    "answers": [
      "Molly Shannon",
      "Siobhan Fallon Hogan",
      "Rachel Dratch",
      "Jane Krakowski"
    ],
    "correctAnswer": "Molly Shannon",
    "difficulty": "Hard",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: The Fighting Irish",
      "Fact: Jack's sister casting",
      "Storyline or casting: Katherine Catherine Donaghy",
      "Correct answer: Molly Shannon",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which actress played Jack's sister Katherine Catherine Donaghy in 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35723",
    "category": "Television",
    "question": "Which actress played Jack's sister Patricia Donaghy in 30 Rock?",
    "answers": [
      "Molly Shannon",
      "Siobhan Fallon Hogan",
      "Elaine Stritch",
      "Anna Chlumsky"
    ],
    "correctAnswer": "Siobhan Fallon Hogan",
    "difficulty": "Hard",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: The Fighting Irish",
      "Fact: Patricia Donaghy actress",
      "Storyline or casting: Irish family reunion",
      "Correct answer: Siobhan Fallon Hogan",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which actress played Jack's sister Patricia Donaghy in 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35724",
    "category": "Television",
    "question": "What unexpected legal papers are served on Tracy during the 30 Rock episode Fireworks?",
    "answers": [
      "Divorce papers",
      "A subpoena over unpaid parking fines",
      "Paternity papers",
      "A restraining order"
    ],
    "correctAnswer": "Paternity papers",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Fireworks",
      "Fact: Tracy legal trouble",
      "Storyline or casting: Paternity claim",
      "Correct answer: Paternity papers",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://www.rottentomatoes.com/tv/30-rock/s01",
      "Question focus: What unexpected legal papers are served on Tracy during the 30 Rock episode Fireworks?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35725",
    "category": "Television",
    "question": "Which historical figure does Tracy hope to portray in his planned film in the 30 Rock episode Corporate Crush?",
    "answers": [
      "George Washington",
      "Abraham Lincoln",
      "Benjamin Franklin",
      "Thomas Jefferson"
    ],
    "correctAnswer": "Thomas Jefferson",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Corporate Crush",
      "Fact: Tracy historical film",
      "Storyline or casting: Jefferson movie pitch",
      "Correct answer: Thomas Jefferson",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which historical figure does Tracy hope to portray in his planned film in the 30 Rock episode Corporate Crush?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35726",
    "category": "Television",
    "question": "Which TGS producer temporarily stays with Liz because of trouble in his marriage at the end of 30 Rock's first season?",
    "answers": [
      "Pete Hornberger",
      "Josh Girard",
      "Frank Rossitano",
      "Toofer Spurlock"
    ],
    "correctAnswer": "Pete Hornberger",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Season One",
      "2006-2007",
      "Workplace Comedy",
      "Episode: Hiatus",
      "Fact: Pete stays at Liz home",
      "Storyline or casting: Marital difficulties",
      "Correct answer: Pete Hornberger",
      "Tina Fey series",
      "TGS With Tracy Jordan",
      "Television Industry Satire",
      "Sitcom Characters and Relationships",
      "Original Broadcast Run",
      "November 2026 Audit",
      "Question Identifies Programme",
      "Source: https://en.wikipedia.org/wiki/30_Rock_season_1",
      "Question focus: Which TGS producer temporarily stays with Liz because of trouble in his marriage at the end of 30 Rock's first season?"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==104||
  new Set(questions.map(q=>q.id)).size!==questions.length||
  new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||
  questions.some(q=>q.answers.length!==4||
   new Set(q.answers.map(a=>a.toLowerCase())).size!==4||
   q.answers.filter(a=>a===q.correctAnswer).length!==1||
   q.tags.length<16||!q.tags.includes('30 Rock')||q.dailyEligible!==true))
 throw Error('Pack 296 audit validation failed');

 module.exports = questions;
