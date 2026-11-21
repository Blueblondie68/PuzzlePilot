
 // quiz_pack290.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: Fawlty Towers (1975 and 1979)
 // The complete twelve-episode BBC Two sitcom, both series.
 // Seven individually chosen specialist tags for every question.
 // No padding or episode-title recall; quiz_bank.js already connects packs 1–558.
 // Row format: question | correct answer | three distractors | difficulty | seven specialist tags

 const groups = [
   {
     topic: 'The Programme, Creators and Main Characters',
     facts: `In which year did Fawlty Towers first appear on British television?|1975|1971|1979|1982|Easy|First Broadcast|September Premiere|Series One|British Television History|1975 Debut|BBC Comedy|Sitcom Origins
 On which channel was Fawlty Towers originally shown?|BBC Two|BBC One|ITV|Channel 4|Easy|UK Broadcasting|Original Broadcaster|BBC Programme History|1970s Scheduling|Public Service Broadcasting|First Transmission|Sitcom Channel
 Who played the hotel owner Basil Fawlty?|John Cleese|Michael Palin|Eric Idle|Graham Chapman|Easy|John Cleese|Basil Fawlty|Lead Actor|Hotel Owner|Monty Python|Character Casting|British Comedy
 Who played Basil's wife Sybil Fawlty?|Prunella Scales|Penelope Keith|Felicity Kendal|Patricia Hodge|Easy|Prunella Scales|Sybil Fawlty|Actor Casting|Hotel Management|Married Couple|Regular Cast|British Actress
 Which actor portrayed Manuel, the hotel's Spanish waiter?|Andrew Sachs|Ballard Berkeley|Brian Hall|David Kelly|Easy|Andrew Sachs|Manuel|Spanish Waiter|Actor Casting|Hotel Staff|Language Confusion|Barcelona
 Who played the hotel employee Polly Sherman?|Connie Booth|Prunella Scales|Renee Roberts|Gilly Flower|Easy|Connie Booth|Polly Sherman|Actor Casting|Hotel Employee|Co Writer|Regular Cast|Helpful Waitress
 Which actor played the resident Major Gowen?|Ballard Berkeley|Brian Hall|John Howard Davies|Bernard Cribbins|Medium|Ballard Berkeley|Major Gowen|Retired Officer|Resident Guest|Actor Casting|Hotel Regular|Military Character
 What is the name of the hotel's chef in the second series?|Terry|Kurt|André|O'Reilly|Medium|Terry The Chef|Brian Hall|Series Two|Hotel Kitchen|Staff Member|Restaurant Service|Cook
 In which English seaside town is Fawlty Towers set?|Torquay|Brighton|Blackpool|Whitby|Easy|Torquay|Devon|Seaside Hotel|Fictional Setting|English Riviera|Holiday Resort|Hotel Location
 Which two performers jointly wrote all twelve original episodes?|John Cleese and Connie Booth|John Cleese and Eric Idle|Connie Booth and Richard Curtis|John Cleese and Michael Palin|Medium|John Cleese|Connie Booth|Writing Partnership|Series Creators|Sitcom Scripts|BBC Production|1970s Writers
 What real Torquay hotel helped inspire the setting of Fawlty Towers?|Gleneagles Hotel|Savoy Hotel|The Ritz|Adelphi Hotel|Medium|Gleneagles Hotel|Torquay Inspiration|Donald Sinclair|Real Life Origins|Hotel Proprietor|Monty Python Visit|BBC Sitcom
 How many original television episodes of Fawlty Towers were made?|Twelve|Sixteen|Twenty|Twenty-four|Easy|Twelve Episodes|Two Series|Six Per Series|Original BBC Run|1975|1979|Complete Programme`,
   },
   {
     topic: 'Series One - A Touch of Class',
     facts: `Which supposedly aristocratic guest is given special treatment by Basil in A Touch of Class?|Lord Melbury|Major Gowen|Mr Hamilton|Mr Hutchinson|Easy|Lord Melbury|Basil Fawlty|A Touch Of Class|False Aristocrat|Hotel Guest|Social Climbing|First Episode
 What does Lord Melbury turn out to be?|A confidence trickster|A government minister|A hotel inspector|A retired general|Medium|Lord Melbury|Confidence Trick|A Touch Of Class|False Identity|Fraud|Basil Deceived|Police Investigation
 What is found inside Lord Melbury's supposedly valuable briefcase?|Two bricks|Gold bullion|Diamond jewellery|A bundle of banknotes|Medium|Lord Melbury|Briefcase|Two Bricks|A Touch Of Class|Fake Valuables|Con Man|Hotel Safe
 How does Basil try to attract a more upper-class clientele in the opening episode?|By advertising in a high-society magazine|By hosting a royal ball|By renaming the hotel|By opening a private casino|Medium|Basil Fawlty|Class Consciousness|Magazine Advert|A Touch Of Class|Posh Guests|Hotel Marketing|Social Aspirations
 Which visitor exposes Lord Melbury's deception?|Detective Inspector Danny Brown|Chef Terry|Mr Hamilton|Major Gowen|Hard|Danny Brown|Police Detective|Lord Melbury|A Touch Of Class|Conman Revealed|First Episode|Guest Identity`,
   },
   {
     topic: 'Series One - The Builders',
     facts: `Which unreliable builder does Basil secretly hire to save money?|O'Reilly|Stubbs|Hutchinson|André|Easy|O Reilly|Cowboy Builder|The Builders|Cheap Contractor|Basil Fawlty|Hotel Renovation|Irish Builder
 Which builder does Sybil want Basil to use instead?|Mr Stubbs|Lord Melbury|Mr Walt|Mr Johnson|Medium|Mr Stubbs|Sybil Fawlty|The Builders|Reliable Contractor|Building Work|Cost Disagreement|Preferred Tradesman
 Which area of the hotel is being renovated in The Builders?|The lobby|The roof garden|The swimming pool|The car park|Easy|Hotel Lobby|The Builders|Refurbishment|Doorways|Building Site|Guest Areas|Hotel Interior
 Why does Basil choose O'Reilly rather than Sybil's preferred contractor?|O'Reilly is cheaper|O'Reilly owns the hotel|O'Reilly is Manuel's brother|O'Reilly is a celebrity builder|Easy|Basil Fawlty|O Reilly|Cost Cutting|The Builders|Money Saving|Poor Workmanship|Contractor Choice
 Which member of staff becomes confused when O'Reilly's workmen arrive?|Manuel|Terry|Major Gowen|Miss Tibbs|Medium|Manuel|O Reilly Workmen|The Builders|Language Misunderstanding|Front Desk|Polly Sherman|Renovation Confusion`,
   },
   {
     topic: 'Series One - The Wedding Party',
     facts: `What occasion brings a group of young guests to the hotel in The Wedding Party?|A wedding|A funeral|A political conference|A tennis tournament|Easy|The Wedding Party|Wedding Guests|Social Occasion|Basil Fawlty|Hotel Bookings|Young Visitors|Series One
 What does Basil wrongly suspect some of the wedding guests are doing?|Having illicit affairs|Stealing hotel furniture|Inspecting the kitchen|Planning a bank robbery|Medium|Basil Fawlty|The Wedding Party|Sexual Misunderstandings|Mistaken Assumptions|Guest Behaviour|Moral Panic|Hotel Rooms
 Which French visitor makes unwanted romantic advances towards Basil?|Mrs Peignoir|Mrs Richards|Miss Tibbs|Mrs Hamilton|Medium|Mrs Peignoir|French Guest|Antiques Dealer|The Wedding Party|Basil Fawlty|Flirtation|Awkward Encounter
 Why is Polly seen in the room of wedding guests, increasing Basil's suspicions?|She is trying on a dress|She is secretly changing the bedding|She is recovering a stolen painting|She is teaching them Spanish|Medium|Polly Sherman|Wedding Guests|Dress Fitting|The Wedding Party|Basil Misunderstanding|Hotel Bedroom|Wrong Conclusion`,
   },
   {
     topic: 'Series One - The Hotel Inspectors',
     facts: `What profession does Basil fear some of the hotel guests may secretly have in The Hotel Inspectors?|Hotel inspector|Customs officer|Journalist|Food critic|Easy|Hotel Inspectors|Undercover Visitors|Basil Fawlty|Hotel Standards|Guest Suspicion|Official Inspection|Torquay
 Which demanding guest is played by Bernard Cribbins in The Hotel Inspectors?|Mr Hutchinson|Mr Hamilton|Lord Melbury|Dr Abbott|Medium|Bernard Cribbins|Mr Hutchinson|Guest Casting|The Hotel Inspectors|Fussy Customer|British Actor|Series One
 Which other guest, played by James Cossins, does Basil suspect of being an inspector?|Mr Walt|Mr Leeman|Mr Johnson|Mr O'Reilly|Hard|James Cossins|Mr Walt|The Hotel Inspectors|Mistaken Identity|Suspicious Guest|Actor Casting|Basil Fawlty
 How does Basil behave when he thinks a guest might be an inspector?|He becomes unusually attentive and flattering|He closes the hotel for a week|He invites them to become staff|He asks them to repair the plumbing|Easy|Basil Fawlty|The Hotel Inspectors|Obsequious Behaviour|Fear Of Inspection|Customer Service|Sudden Politeness|Mistaken Identity
 What happens after Basil has embarrassed himself over the suspected inspectors?|The genuine inspectors arrive|The hotel wins a luxury award|Sybil sells the hotel|Polly becomes the new owner|Medium|Real Hotel Inspectors|Final Twist|The Hotel Inspectors|Basil Humiliation|Unexpected Arrival|Inspection Visit|Episode Ending`,
   },
   {
     topic: 'Series One - Gourmet Night',
     facts: `What is the name of the new chef whose problems derail the hotel's gourmet evening?|Kurt|Terry|Manuel|André|Easy|Kurt|Gourmet Night|New Chef|Hotel Kitchen|Catering Disaster|Series One|Dinner Service
 What prevents Kurt from cooking the special dinner?|He gets drunk|He breaks his arm|He leaves to get married|He loses his voice|Medium|Kurt|Alcohol Problem|Gourmet Night|Incapacitated Chef|Kitchen Crisis|Dinner Service|Cancelled Menu
 Which restaurant-owning friend helps Basil find a replacement main course?|André|O'Reilly|Mr Hamilton|Mr Stubbs|Medium|André|Restaurant Owner|Gourmet Night|Emergency Catering|Duck Dish|Torquay Restaurant|Basil Friend
 What main course does Basil repeatedly try to collect for the gourmet guests?|Duck|Roast beef|Poached salmon|Lamb chops|Easy|Duck Dinner|Gourmet Night|Replacement Main Course|André Restaurant|Menu Disaster|Basil Errand|Hotel Restaurant
 What does Basil use to attack his car after it refuses to start?|A tree branch|A golf club|A tennis racket|A saucepan|Easy|Tree Branch|Car Breakdown|Basil Fawlty|Gourmet Night|Angry Motorist|Roadside Scene|Mechanical Failure
 What dessert appears under the serving cover instead of the expected duck?|A trifle|Apple pie|Rice pudding|A chocolate cake|Medium|Trifle|Wrong Dish|Gourmet Night|Duck Mix Up|Serving Trolley|Dinner Disaster|Final Reveal`,
   },
   {
     topic: 'Series One - The Germans',
     facts: `Why is Sybil in hospital during The Germans?|An ingrowing toenail|A broken arm|Appendicitis|A suspected heart attack|Medium|Sybil Fawlty|Ingrowing Toenail|Hospital Treatment|The Germans|Basil Alone|Medical Appointment|Series One
 What emergency procedure does Basil try to practise while Sybil is away?|A fire drill|A flood evacuation|A bomb disposal exercise|A lifeboat launch|Easy|Fire Drill|Basil Fawlty|The Germans|Hotel Safety|Alarm Confusion|Emergency Training|Guests
 Which large animal's head causes difficulties when Basil tries to display it?|A moose|A deer|A boar|A buffalo|Medium|Moose Head|The Germans|Hotel Decoration|Basil Fawlty|Lobby Wall|Physical Comedy|Falling Object
 What injury contributes to Basil's increasingly erratic behaviour around the German guests?|A concussion|A broken ankle|Food poisoning|A sprained wrist|Medium|Concussion|Head Injury|Basil Fawlty|The Germans|Hospital Visit|Disorientation|German Tourists
 Which historical conflict does Basil repeatedly bring up despite trying not to offend the German visitors?|The Second World War|The Crimean War|The English Civil War|The Boer War|Easy|Second World War|German Guests|Basil Fawlty|The Germans|Inappropriate References|Hotel Embarrassment|War Discussion`,
   },
   {
     topic: 'Series Two - Communication Problems',
     facts: `Which hard-of-hearing guest repeatedly frustrates Basil in Communication Problems?|Mrs Richards|Mrs Peignoir|Mrs Hamilton|Mrs Abbott|Easy|Mrs Richards|Communication Problems|Hearing Difficulty|Demanding Guest|Basil Fawlty|Series Two|Misunderstandings
 Which actress played the guest Mrs Richards?|Joan Sanderson|Prunella Scales|Gilly Flower|Renee Roberts|Medium|Joan Sanderson|Mrs Richards|Guest Actress|Communication Problems|1979 Cast|Hotel Guest|Hearing Aid
 What view does Mrs Richards complain she cannot see properly from her hotel room?|The sea|The mountains|The River Thames|The Houses of Parliament|Easy|Sea View|Mrs Richards|Room Complaint|Communication Problems|Torquay Coast|Guest Expectations|Hotel Window
 On which racehorse does Basil secretly place a winning bet?|Dragonfly|Red Rum|Desert Orchid|Shergar|Medium|Dragonfly|Horse Racing|Winning Bet|Communication Problems|Basil Fawlty|Racing Tip|Gambling
 Why does Basil try to hide his betting winnings?|Sybil disapproves of gambling|The winnings belong to Polly|The horse has been disqualified|The money is counterfeit|Medium|Sybil Fawlty|Basil Fawlty|Hidden Winnings|Communication Problems|Marriage Disagreement|Horse Betting|Secret Money`,
   },
   {
     topic: 'Series Two - The Psychiatrist',
     facts: `What is Dr Abbott's medical speciality in The Psychiatrist?|Psychiatry|Dentistry|Cardiology|Dermatology|Easy|Dr Abbott|Psychiatrist|The Psychiatrist|Basil Fawlty|Doctor Guest|Professional Identity|Paranoia
 What profession does Dr Abbott's wife also practise?|Medicine|Architecture|Law|Teaching|Medium|Mrs Abbott|Doctor|The Psychiatrist|Married Medical Couple|Hotel Guests|Healthcare Professionals|1979 Episode
 Which young male hotel guest attracts Sybil's attention in The Psychiatrist?|Mr Johnson|Mr Hutchinson|Mr Walt|Mr Leeman|Medium|Mr Johnson|Sybil Fawlty|The Psychiatrist|Flirtation|Young Guest|Basil Jealousy|Nicky Henson
 What is the first name of the Australian woman who becomes entangled in Basil's suspicions?|Raylene|Audrey|Polly|Alice|Medium|Raylene Miles|Australian Guest|The Psychiatrist|Misunderstood Encounters|Basil Fawlty|Luan Peters|Hotel Bedroom
 Which rearrangement of the hotel sign appears in The Psychiatrist?|Watery Fowls|Warty Towels|Fawlty Tower|Flay Otters|Hard|Watery Fowls|Hotel Sign|The Psychiatrist|Anagram Prank|Paperboy|Opening Credits|Series Two`,
   },
   {
     topic: 'Series Two - Waldorf Salad',
     facts: `Which country does the demanding guest Mr Hamilton come from?|The United States|France|Canada|Australia|Easy|Mr Hamilton|American Guest|Waldorf Salad|Cultural Differences|Hotel Dinner|Overseas Visitor|Series Two
 Which actor played the outspoken Mr Hamilton?|Bruce Boa|Bernard Cribbins|Robin Ellis|Basil Henson|Hard|Bruce Boa|Mr Hamilton|Actor Casting|Waldorf Salad|American Visitor|Dinner Complaints|1979 Guest Star
 What salad does Mr Hamilton demand after the hotel's kitchen has closed?|Waldorf salad|Caesar salad|Greek salad|Niçoise salad|Easy|Waldorf Salad|Mr Hamilton|Unusual Order|Late Dinner|American Guest|Hotel Kitchen|1979 Episode
 Which staff member has already left the kitchen, forcing Basil to pretend a chef is still working?|Terry|Kurt|Polly|Manuel|Medium|Terry The Chef|Kitchen Closed|Waldorf Salad|Basil Fawlty|Fake Kitchen Argument|Late Meal|Missing Cook
 Which cocktail order adds to Basil's confusion during the Hamiltons' dinner?|A screwdriver|A mojito|A mint julep|A cosmopolitan|Medium|Screwdriver Cocktail|Mrs Hamilton|Waldorf Salad|Drink Order|Basil Fawlty|Restaurant Service|American Customers`,
   },
   {
     topic: 'Series Two - The Kipper and the Corpse',
     facts: `Which hotel guest is discovered dead in The Kipper and the Corpse?|Mr Leeman|Mr Hamilton|Mr Hutchinson|Lord Melbury|Medium|Mr Leeman|Dead Guest|The Kipper And The Corpse|Hotel Bedroom|Basil Fawlty|Unfortunate Discovery|Series Two
 What fish does Basil deliver for Mr Leeman's breakfast before realising he has died?|Kippers|Haddock|Salmon|Sardines|Easy|Kippers|Mr Leeman|Breakfast In Bed|The Kipper And The Corpse|Basil Fawlty|1979 Episode|Hotel Breakfast
 Which doctor keeps waiting to be served his sausages while Basil deals with the dead guest?|Dr Price|Dr Abbott|Dr Finn|Dr Watson|Medium|Dr Price|Sausage Breakfast|The Kipper And The Corpse|Impatient Guest|Hotel Doctor|Restaurant Service|Basil Fawlty
 What unpleasant problem do Basil and the staff try to conceal from arriving guests?|A dead body|A broken lift|A gas leak|A missing safe|Easy|Dead Body|Hotel Concealment|The Kipper And The Corpse|Basil Fawlty|Dark Comedy|Guest Privacy|Hotel Chaos
 What do Polly and Manuel feed a difficult guest's dog after it bites them?|Very spicy sausages|Chocolate cake|A bowl of soup|Cold kippers|Medium|Spicy Sausages|Guest Dog|Polly Sherman|Manuel|The Kipper And The Corpse|Dog Bites|Retaliation`,
   },
   {
     topic: 'Series Two - The Anniversary',
     facts: `What special occasion does Basil secretly arrange a party for in The Anniversary?|His wedding anniversary|Sybil's birthday|The hotel's centenary|Polly's graduation|Easy|Wedding Anniversary|Basil Fawlty|Sybil Fawlty|Surprise Party|The Anniversary|Marriage|Series Two
 Why does Sybil leave the hotel just before the surprise guests arrive?|She thinks Basil has forgotten their anniversary|She has accepted a job in London|She has won a foreign holiday|She has gone to visit a hospital patient|Medium|Sybil Fawlty|Anniversary Misunderstanding|The Anniversary|Storms Out|Basil Fawlty|Surprise Spoiled|Marital Argument
 Who disguises herself as Sybil to keep the anniversary guests from discovering her absence?|Polly|Miss Tibbs|Mrs Richards|Audrey|Medium|Polly Sherman|Sybil Impersonation|The Anniversary|Party Cover Up|Disguise|Basil Fawlty|Friends Deceived
 Which Spanish rice dish does Manuel want to prepare for the anniversary celebration?|Paella|Risotto|Pilaf|Jambalaya|Medium|Paella|Manuel|The Anniversary|Spanish Cuisine|Celebration Meal|Hotel Kitchen|Dinner Party
 Which chef argues with Manuel over preparing the anniversary food?|Terry|Kurt|André|O'Reilly|Medium|Terry The Chef|Manuel|Paella Argument|The Anniversary|Kitchen Rivalry|Basil Fawlty|Dinner Preparation`,
   },
   {
     topic: 'Series Two - Basil the Rat',
     facts: `What type of animal is Manuel secretly keeping at the hotel in the final episode?|A rat|A cat|A rabbit|A ferret|Easy|Pet Rat|Manuel|Basil The Rat|Hotel Hygiene|Escaped Pet|Series Finale|Animal Mischief
 What does Manuel insist his pet rat actually is?|A Siberian hamster|A guinea pig|A miniature squirrel|A young chinchilla|Easy|Siberian Hamster|Manuel|Basil The Rat|Misidentified Animal|Pet Excuse|Hotel Hygiene|Rodent
 What name has Manuel given his pet rat?|Basil|Sybil|Polly|Terry|Easy|Basil The Rat|Manuel Pet|Named After Employer|Escaped Rodent|Hotel Staff|1979 Finale|Comic Misunderstanding
 Which official threatens to close Fawlty Towers over its poor hygiene?|A public health inspector|A fire brigade captain|A building surveyor|A customs officer|Medium|Public Health Inspector|Basil The Rat|Unsanitary Hotel|Closure Threat|Food Safety|Hygiene Violations|Kitchen Inspection
 Which main course creates a danger when one serving becomes contaminated with rat poison?|Veal cutlets|Roast duck|Steak pie|Fish and chips|Medium|Veal Cutlets|Rat Poison|Basil The Rat|Kitchen Mix Up|Poisoned Food|Hotel Guests|Finale Disaster`,
   },
 ];

 const FIRST_ID = 12061;
 let index = 0;
 const questions = groups.flatMap(group =>
   group.facts.trim().split('\n').map(line => {
     const parts = line.trim().split('|').map(part => part.trim());
     const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
     if (parts.length !== 13) {
       throw new Error(`Expected seven individual tags at ${id}; got ${parts.length - 6}`);
     }
     const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
     const answers = [wrong1, wrong2, wrong3];
     if (!question || !correctAnswer || answers.some(answer => !answer)) {
       throw new Error(`Missing question or answer at ${id}`);
     }
     if (new Set([correctAnswer, ...answers].map(answer => answer.toLowerCase())).size !== 4) {
       throw new Error(`Repeated answer option at ${id}`);
     }
     if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.some(tag => !tag)) {
       throw new Error(`Invalid difficulty or specialist tag at ${id}`);
     }
     answers.splice(index % 4, 0, correctAnswer);
     const item = {
       id,
       category: 'Television',
       question,
       answers,
       correctAnswer,
       difficulty,
       tags: [...new Set([
         'British Television', 'British Sitcom', 'Comedy', 'Fawlty Towers',
         'BBC Two', '1970s', '1975-1979', 'Hotel Comedy', group.topic,
         correctAnswer, ...specificTags
       ])],
       dailyEligible: true
     };
     index += 1;
     return item;
   })
 );

 const EXPECTED_COUNT = 72;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_12061' || questions[questions.length - 1].id !== 'tv_12132') {
   throw new Error('Unexpected question ID range');
 }
 if (new Set(questions.map(q => q.id)).size !== questions.length ||
     new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
   throw new Error('Duplicate question IDs or wording');
 }
 if (questions.some(q =>
   q.category !== 'Television' || q.answers.length !== 4 ||
   !q.answers.includes(q.correctAnswer) || q.tags.length < 16 ||
   q.tags.some(tag => !tag) || q.dailyEligible !== true
 )) {
   throw new Error('Incomplete exported question metadata');
 }

// 21 November 2026: episode and credits audit. Original IDs tv_12061–tv_12132 retained.
// New IDs tv_35544–tv_35572; distinct storylines and verified cast credits.
// Sources: British Comedy Guide Fawlty Towers episode pages (series 1 and 2),
// TheTVDB aired episode guide and TVmaze episode synopses.
const auditAdditions = [
  {
    "id": "tv_35544",
    "category": "Television",
    "question": "Which actor played the bogus aristocrat Lord Melbury in Fawlty Towers?",
    "answers": [
      "Michael Gwynn",
      "Robin Ellis",
      "David Kelly",
      "Nicky Henson"
    ],
    "correctAnswer": "Michael Gwynn",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: Programme and cast",
      "Programme: Fawlty Towers",
      "Plot or cast: Lord Melbury casting",
      "Person: Michael Gwynn",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Which actor played the bogus aristocrat Lord Melbury in Fawlty Towers?",
      "Answer: Michael Gwynn"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35545",
    "category": "Television",
    "question": "Which actor played Detective Inspector Danny Brown in Fawlty Towers?",
    "answers": [
      "Michael Gwynn",
      "Robin Ellis",
      "Bernard Cribbins",
      "Geoffrey Palmer"
    ],
    "correctAnswer": "Robin Ellis",
    "difficulty": "Hard",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: A Touch of Class",
      "Programme: Fawlty Towers",
      "Plot or cast: Detective exposes the false lord",
      "Person: Robin Ellis",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Which actor played Detective Inspector Danny Brown in Fawlty Towers?",
      "Answer: Robin Ellis"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35546",
    "category": "Television",
    "question": "Which actor played the incompetent builder O'Reilly in Fawlty Towers?",
    "answers": [
      "Brian Hall",
      "Bernard Cribbins",
      "David Kelly",
      "Derek Royle"
    ],
    "correctAnswer": "David Kelly",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: The Builders",
      "Programme: Fawlty Towers",
      "Plot or cast: O'Reilly guest actor",
      "Person: David Kelly",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Which actor played the incompetent builder O'Reilly in Fawlty Towers?",
      "Answer: David Kelly"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35547",
    "category": "Television",
    "question": "In Fawlty Towers, what major mistake do O'Reilly's builders make to the dining-room entrance?",
    "answers": [
      "They fit a revolving door",
      "They replace it with a window",
      "They widen it into an archway",
      "They build a wall across it"
    ],
    "correctAnswer": "They build a wall across it",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: The Builders",
      "Programme: Fawlty Towers",
      "Plot or cast: The builders block access to the dining room",
      "Person: O'Reilly and his builders",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: In Fawlty Towers, what major mistake do O'Reilly's builders make to the dining-room entrance?",
      "Answer: They build a wall across it"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35548",
    "category": "Television",
    "question": "Which hotel employee celebrates a birthday during Fawlty Towers' The Wedding Party?",
    "answers": [
      "Manuel",
      "Polly",
      "Sybil",
      "Major Gowen"
    ],
    "correctAnswer": "Manuel",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: The Wedding Party",
      "Programme: Fawlty Towers",
      "Plot or cast: Manuel celebrates his birthday",
      "Person: Manuel",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Which hotel employee celebrates a birthday during Fawlty Towers' The Wedding Party?",
      "Answer: Manuel"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35549",
    "category": "Television",
    "question": "Which actress played Mrs Peignoir, the guest who makes advances to Basil in Fawlty Towers?",
    "answers": [
      "Joan Sanderson",
      "Yvonne Gilan",
      "Claire Nielson",
      "Elspet Gray"
    ],
    "correctAnswer": "Yvonne Gilan",
    "difficulty": "Hard",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: The Wedding Party",
      "Programme: Fawlty Towers",
      "Plot or cast: Mrs Peignoir casting",
      "Person: Yvonne Gilan",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Which actress played Mrs Peignoir, the guest who makes advances to Basil in Fawlty Towers?",
      "Answer: Yvonne Gilan"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35550",
    "category": "Television",
    "question": "Who becomes the object of chef Kurt's unrequited affections in Fawlty Towers' Gourmet Night?",
    "answers": [
      "Basil",
      "Polly",
      "Manuel",
      "André"
    ],
    "correctAnswer": "Manuel",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: Gourmet Night",
      "Programme: Fawlty Towers",
      "Plot or cast: Kurt's feelings cause a dispute and drunkenness",
      "Person: Kurt and Manuel",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Who becomes the object of chef Kurt's unrequited affections in Fawlty Towers' Gourmet Night?",
      "Answer: Manuel"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35551",
    "category": "Television",
    "question": "Which actor played the chef Kurt in Fawlty Towers' Gourmet Night?",
    "answers": [
      "Brian Hall",
      "André Maranne",
      "Nicky Henson",
      "Steve Plytas"
    ],
    "correctAnswer": "Steve Plytas",
    "difficulty": "Hard",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: Gourmet Night",
      "Programme: Fawlty Towers",
      "Plot or cast: Kurt cast portrayal",
      "Person: Steve Plytas",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Which actor played the chef Kurt in Fawlty Towers' Gourmet Night?",
      "Answer: Steve Plytas"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35552",
    "category": "Television",
    "question": "How many guests are actually booked for the special gourmet dinner in Fawlty Towers?",
    "answers": [
      "Four",
      "Eight",
      "Twelve",
      "Sixteen"
    ],
    "correctAnswer": "Four",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: Gourmet Night",
      "Programme: Fawlty Towers",
      "Plot or cast: Small dinner reservation count",
      "Person: Basil and Sybil Fawlty",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: How many guests are actually booked for the special gourmet dinner in Fawlty Towers?",
      "Answer: Four"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35553",
    "category": "Television",
    "question": "In Fawlty Towers' Communication Problems, where did Mrs Richards leave the money she accuses the hotel of losing?",
    "answers": [
      "Inside a coat lining",
      "In a vase",
      "Under the mattress",
      "In her handbag"
    ],
    "correctAnswer": "In a vase",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: Communication Problems",
      "Programme: Fawlty Towers",
      "Plot or cast: Missing cash found in vase",
      "Person: Mrs Richards",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: In Fawlty Towers' Communication Problems, where did Mrs Richards leave the money she accuses the hotel of losing?",
      "Answer: In a vase"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35554",
    "category": "Television",
    "question": "Which Fawlty Towers resident does Basil ask to hide the proceeds of his winning bet in Communication Problems?",
    "answers": [
      "Manuel",
      "Polly Sherman",
      "Major Gowen",
      "Chef Terry"
    ],
    "correctAnswer": "Major Gowen",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: Communication Problems",
      "Programme: Fawlty Towers",
      "Plot or cast: Major asked to conceal gambling winnings",
      "Person: Basil and Major Gowen",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Which Fawlty Towers resident does Basil ask to hide the proceeds of his winning bet in Communication Problems?",
      "Answer: Major Gowen"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35555",
    "category": "Television",
    "question": "Which actor played the flirtatious guest Mr Johnson in Fawlty Towers' The Psychiatrist?",
    "answers": [
      "Basil Henson",
      "Bruce Boa",
      "Robin Ellis",
      "Nicky Henson"
    ],
    "correctAnswer": "Nicky Henson",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: The Psychiatrist",
      "Programme: Fawlty Towers",
      "Plot or cast: Mr Johnson casting",
      "Person: Nicky Henson",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Which actor played the flirtatious guest Mr Johnson in Fawlty Towers' The Psychiatrist?",
      "Answer: Nicky Henson"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35556",
    "category": "Television",
    "question": "Which actor portrayed Dr Abbott in the Fawlty Towers episode The Psychiatrist?",
    "answers": [
      "Basil Henson",
      "Nicky Henson",
      "John Quarmby",
      "Michael Gwynn"
    ],
    "correctAnswer": "Basil Henson",
    "difficulty": "Hard",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: The Psychiatrist",
      "Programme: Fawlty Towers",
      "Plot or cast: Dr Abbott casting",
      "Person: Basil Henson",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Which actor portrayed Dr Abbott in the Fawlty Towers episode The Psychiatrist?",
      "Answer: Basil Henson"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35557",
    "category": "Television",
    "question": "Which actress portrayed Raylene Miles in the Fawlty Towers episode The Psychiatrist?",
    "answers": [
      "Elspet Gray",
      "Luan Peters",
      "Joan Sanderson",
      "Una Stubbs"
    ],
    "correctAnswer": "Luan Peters",
    "difficulty": "Hard",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: The Psychiatrist",
      "Programme: Fawlty Towers",
      "Plot or cast: Raylene Miles casting",
      "Person: Luan Peters",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Which actress portrayed Raylene Miles in the Fawlty Towers episode The Psychiatrist?",
      "Answer: Luan Peters"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35558",
    "category": "Television",
    "question": "Who played Mrs Hamilton, wife of the demanding American guest, in Fawlty Towers' Waldorf Salad?",
    "answers": [
      "Joan Sanderson",
      "Prunella Scales",
      "Claire Nielson",
      "Mavis Pugh"
    ],
    "correctAnswer": "Claire Nielson",
    "difficulty": "Hard",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: Waldorf Salad",
      "Programme: Fawlty Towers",
      "Plot or cast: Mrs Hamilton cast role",
      "Person: Claire Nielson",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Who played Mrs Hamilton, wife of the demanding American guest, in Fawlty Towers' Waldorf Salad?",
      "Answer: Claire Nielson"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35559",
    "category": "Television",
    "question": "What does Basil eventually tell the other hotel guests to do in Fawlty Towers' Waldorf Salad after their complaints?",
    "answers": [
      "Move to the dining room",
      "Write to the BBC",
      "Queue to see the chef",
      "Leave the hotel"
    ],
    "correctAnswer": "Leave the hotel",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: Waldorf Salad",
      "Programme: Fawlty Towers",
      "Plot or cast: Basil drives out disgruntled guests",
      "Person: Basil Fawlty",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: What does Basil eventually tell the other hotel guests to do in Fawlty Towers' Waldorf Salad after their complaints?",
      "Answer: Leave the hotel"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35560",
    "category": "Television",
    "question": "Which actor played the impatient Dr Price in Fawlty Towers' The Kipper and the Corpse?",
    "answers": [
      "Geoffrey Palmer",
      "Bernard Cribbins",
      "Derek Royle",
      "Brian Hall"
    ],
    "correctAnswer": "Geoffrey Palmer",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: The Kipper and the Corpse",
      "Programme: Fawlty Towers",
      "Plot or cast: Dr Price casting",
      "Person: Geoffrey Palmer",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Which actor played the impatient Dr Price in Fawlty Towers' The Kipper and the Corpse?",
      "Answer: Geoffrey Palmer"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35561",
    "category": "Television",
    "question": "Who played the deceased guest Mr Leeman in Fawlty Towers' The Kipper and the Corpse?",
    "answers": [
      "Geoffrey Palmer",
      "Derek Royle",
      "David Kelly",
      "John Quarmby"
    ],
    "correctAnswer": "Derek Royle",
    "difficulty": "Hard",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: The Kipper and the Corpse",
      "Programme: Fawlty Towers",
      "Plot or cast: Mr Leeman casting",
      "Person: Derek Royle",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Who played the deceased guest Mr Leeman in Fawlty Towers' The Kipper and the Corpse?",
      "Answer: Derek Royle"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35562",
    "category": "Television",
    "question": "Which actress played Sybil's friend Alice in Fawlty Towers' The Anniversary?",
    "answers": [
      "Joan Sanderson",
      "Yvonne Gilan",
      "Una Stubbs",
      "Gilly Flower"
    ],
    "correctAnswer": "Una Stubbs",
    "difficulty": "Hard",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: The Anniversary",
      "Programme: Fawlty Towers",
      "Plot or cast: Alice guest casting",
      "Person: Una Stubbs",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Which actress played Sybil's friend Alice in Fawlty Towers' The Anniversary?",
      "Answer: Una Stubbs"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35563",
    "category": "Television",
    "question": "What is the surname of the health inspector who threatens the hotel in Fawlty Towers' Basil the Rat?",
    "answers": [
      "Hutchinson",
      "Richards",
      "Hamilton",
      "Carnegie"
    ],
    "correctAnswer": "Carnegie",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: Basil the Rat",
      "Programme: Fawlty Towers",
      "Plot or cast: Health inspector Mr Carnegie",
      "Person: Mr Carnegie",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: What is the surname of the health inspector who threatens the hotel in Fawlty Towers' Basil the Rat?",
      "Answer: Carnegie"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35564",
    "category": "Television",
    "question": "Which actor portrayed health inspector Mr Carnegie in Fawlty Towers' Basil the Rat?",
    "answers": [
      "John Quarmby",
      "Basil Henson",
      "Derek Royle",
      "Michael Gwynn"
    ],
    "correctAnswer": "John Quarmby",
    "difficulty": "Hard",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: Basil the Rat",
      "Programme: Fawlty Towers",
      "Plot or cast: Mr Carnegie guest casting",
      "Person: John Quarmby",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Which actor portrayed health inspector Mr Carnegie in Fawlty Towers' Basil the Rat?",
      "Answer: John Quarmby"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35565",
    "category": "Television",
    "question": "In Fawlty Towers' Basil the Rat, which disturbing problem in the water tank is one of the hotel's hygiene failures?",
    "answers": [
      "A broken thermometer",
      "Dead birds",
      "A missing filter",
      "A pile of bricks"
    ],
    "correctAnswer": "Dead birds",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: Basil the Rat",
      "Programme: Fawlty Towers",
      "Plot or cast: Dead birds found in the water tank",
      "Person: Sybil and Basil Fawlty",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: In Fawlty Towers' Basil the Rat, which disturbing problem in the water tank is one of the hotel's hygiene failures?",
      "Answer: Dead birds"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35566",
    "category": "Television",
    "question": "Why was the Fawlty Towers finale Basil the Rat broadcast months later than originally planned?",
    "answers": [
      "The cast went on strike for higher wages",
      "The film was destroyed in a studio fire",
      "A BBC industrial dispute",
      "A planned actor replacement was delayed"
    ],
    "correctAnswer": "A BBC industrial dispute",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: Basil the Rat",
      "Programme: Fawlty Towers",
      "Plot or cast: BBC strike delayed final episode completion",
      "Person: 1979 production scheduling",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Why was the Fawlty Towers finale Basil the Rat broadcast months later than originally planned?",
      "Answer: A BBC industrial dispute"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35567",
    "category": "Television",
    "question": "Which actress played the regular Fawlty Towers resident Miss Tibbs?",
    "answers": [
      "Renee Roberts",
      "Una Stubbs",
      "Elspet Gray",
      "Gilly Flower"
    ],
    "correctAnswer": "Gilly Flower",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: Series-wide recurring characters",
      "Programme: Fawlty Towers",
      "Plot or cast: Miss Tibbs casting",
      "Person: Gilly Flower",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Which actress played the regular Fawlty Towers resident Miss Tibbs?",
      "Answer: Gilly Flower"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35568",
    "category": "Television",
    "question": "Which actress played the regular Fawlty Towers resident Miss Gatsby?",
    "answers": [
      "Renee Roberts",
      "Gilly Flower",
      "Mavis Pugh",
      "Yvonne Gilan"
    ],
    "correctAnswer": "Renee Roberts",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: Series-wide recurring characters",
      "Programme: Fawlty Towers",
      "Plot or cast: Miss Gatsby casting",
      "Person: Renee Roberts",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Which actress played the regular Fawlty Towers resident Miss Gatsby?",
      "Answer: Renee Roberts"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35569",
    "category": "Television",
    "question": "Which actor played chef Terry in the second series of Fawlty Towers?",
    "answers": [
      "Steve Plytas",
      "Brian Hall",
      "David Kelly",
      "Geoffrey Palmer"
    ],
    "correctAnswer": "Brian Hall",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: Series-wide cast",
      "Programme: Fawlty Towers",
      "Plot or cast: Second-series chef actor",
      "Person: Brian Hall",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Which actor played chef Terry in the second series of Fawlty Towers?",
      "Answer: Brian Hall"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35570",
    "category": "Television",
    "question": "Who directed the first series of Fawlty Towers?",
    "answers": [
      "Bob Spiers",
      "Douglas Argent",
      "John Howard Davies",
      "David Croft"
    ],
    "correctAnswer": "John Howard Davies",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: Production",
      "Programme: Fawlty Towers",
      "Plot or cast: First-series direction",
      "Person: John Howard Davies",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Who directed the first series of Fawlty Towers?",
      "Answer: John Howard Davies"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35571",
    "category": "Television",
    "question": "Who directed the second series of Fawlty Towers?",
    "answers": [
      "John Howard Davies",
      "Dennis Wilson",
      "Douglas Argent",
      "Bob Spiers"
    ],
    "correctAnswer": "Bob Spiers",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: Production",
      "Programme: Fawlty Towers",
      "Plot or cast: Second-series direction",
      "Person: Bob Spiers",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Who directed the second series of Fawlty Towers?",
      "Answer: Bob Spiers"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35572",
    "category": "Television",
    "question": "Who composed the original music for Fawlty Towers?",
    "answers": [
      "Dennis Wilson",
      "Ronnie Hazlehurst",
      "Howard Goodall",
      "Alan Hawkshaw"
    ],
    "correctAnswer": "Dennis Wilson",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Fawlty Towers",
      "BBC Two",
      "1970s",
      "1975-1979",
      "Hotel Comedy",
      "Episode: Production",
      "Programme: Fawlty Towers",
      "Plot or cast: Series composer credits",
      "Person: Dennis Wilson",
      "Cast and storyline audit",
      "November 2026",
      "Two-series British sitcom",
      "Verified British Comedy Guide",
      "Question focus: Who composed the original music for Fawlty Towers?",
      "Answer: Dennis Wilson"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length !== 101 ||
  new Set(questions.map(q => q.id)).size !== questions.length ||
  new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length ||
  questions.some(q => q.answers.length !== 4 || new Set(q.answers).size !== 4 ||
    q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
    q.tags.length < 16 || !q.tags.includes('Fawlty Towers') || q.dailyEligible !== true))
  throw new Error('Pack 290 episode-audit validation failed');

 module.exports = questions;
