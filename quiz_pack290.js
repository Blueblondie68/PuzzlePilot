
 // quiz_pack290.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: Fawlty Towers (1975 and 1979)
 // The complete twelve-episode BBC Two sitcom, both series.
 // Seven individually chosen specialist tags for every question.
 // No padded target, no episode-title recall and no quiz_bank.js change yet.
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
 module.exports = questions;
