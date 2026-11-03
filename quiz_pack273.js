
 // quiz_pack273.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: Hollyoaks - 2017 to 2019
 // Major storylines, characters, cast, relationships, awards and special episodes.
 // Every question carries its own specific tags; no inherited storyline tags.
 // The complete exported question objects are checked below.
 // Leave quiz_bank.js unchanged until the agreed end-of-evening connection.
 //
 // Source: question | correct answer | three wrong answers | difficulty | specific tags

 const groups = [
   {
     year: '2017',
     topic: 'The Murder Of Amy Barnes',
     facts: `Who was revealed to have murdered Amy Barnes after their wedding in 2017?|Ryan Knight|Ste Hay|Harry Thompson|James Nightingale|Easy|Amy Barnes|Ryan Knight|March 2017 Murder|October 2017 Reveal|Wedding Night|Barnes Family|Whodunnit
 Which former Blue singer portrayed Ryan Knight in the 2017 Amy Barnes mystery?|Duncan James|Lee Ryan|Antony Costa|Simon Webbe|Easy|Duncan James|Ryan Knight|Blue|Actor Casting|Amy Barnes|2017 Soap Drama|Pop Singer
 Which Hollyoaks character married Ryan Knight shortly before her death in March 2017?|Amy Barnes|Tegan Lomax|Mercedes McQueen|Sinead O'Connor|Easy|Amy Barnes|Ryan Knight|March 2017 Wedding|Barnes Family|Fatal Marriage|Ste Hay|Murder Storyline
 Who was found not guilty of murdering Amy Barnes after a trial in September 2017?|Ste Hay|Harry Thompson|Ryan Knight|Kyle Kelly|Medium|Ste Hay|Amy Barnes|September 2017 Trial|Not Guilty Verdict|False Suspicion|James Nightingale|Murder Investigation
 Which member of Amy Barnes's family shot Ste Hay after his acquittal in September 2017?|Kathy Barnes|Sarah Barnes|Leah Barnes|Amy Barnes|Medium|Kathy Barnes|Ste Hay|September 2017 Shooting|Mother Of Amy|Trial Aftermath|Attempted Murder|Barnes Family
 Which man had a secret relationship with Ryan Knight that Amy discovered before her death?|Kyle Kelly|Harry Thompson|James Nightingale|John Paul McQueen|Medium|Kyle Kelly|Ryan Knight|Amy Barnes|Secret Affair|Wedding Night Discovery|2017 Murder Motive|Relationship Secret`,
   },
   {
     year: '2017',
     topic: 'The Nightingales And Hollyoaks High',
     facts: `Which Nightingale brother died after falling from scaffolding in February 2017?|Nathan Nightingale|James Nightingale|Alfie Nightingale|Romeo Nightingale|Easy|Nathan Nightingale|February 2017 Death|Scaffolding Fall|Mac Nightingale|Lisa Loveday|Nightingale Family|Fatal Accident
 Which Nightingale family patriarch was responsible for the confrontation leading to Nathan's fatal fall in 2017?|Mac Nightingale|James Nightingale|Alfie Nightingale|Dirk Savage|Medium|Mac Nightingale|Nathan Nightingale|2017 Scaffolding Fall|Father Son Conflict|Lisa Loveday|Nightingale Family|Fatal Confrontation
 With whom was Mac Nightingale having an affair while she was engaged to Nathan in 2017?|Lisa Loveday|Marnie Nightingale|Neeta Kaur|Ellie Nightingale|Medium|Lisa Loveday|Mac Nightingale|Nathan Nightingale|Secret Affair|Fiancee Betrayal|February 2017|Nightingale Scandal
 Who was responsible for the explosion at Hollyoaks High School in October 2017?|Mac Nightingale|Cameron Campbell|Warren Fox|Ryan Knight|Easy|Mac Nightingale|Hollyoaks High|October 2017 Explosion|School Disaster|Arson|Neeta Kaur|Villain Storyline
 Which teacher died after the 2017 explosion at Hollyoaks High School?|Neeta Kaur|Nancy Osborne|Sally St Claire|Sienna Blake|Easy|Neeta Kaur|Hollyoaks High|October 2017 Death|School Explosion|Mac Nightingale|Hunter McQueen|Teacher Character
 Which Maalik family teenager received Neeta Kaur's donated heart after the 2017 school tragedy?|Yasmine Maalik|Farrah Maalik|Misbah Maalik|Peri Lomax|Medium|Yasmine Maalik|Neeta Kaur|Heart Transplant|Organ Donation|2017 School Explosion|Maalik Family|Cardiomyopathy`,
   },
   {
     year: '2017',
     topic: 'The Osbornes, Cunninghams And Blake Twins',
     facts: `Which long-running Osborne family member died after suffering a stroke in November 2017?|Frankie Osborne|Jack Osborne|Darren Osborne|Nancy Osborne|Easy|Frankie Osborne|November 2017 Death|Stroke|Jack Osborne|Osborne Family|School Explosion Aftermath|Character Exit
 Which actress played Frankie Osborne until the character's death in 2017?|Helen Pearson|Jessica Fox|Alex Fletcher|Gillian Taylforth|Medium|Helen Pearson|Frankie Osborne|Actress Casting|November 2017 Exit|Osborne Family|Long Running Character|Television Performer
 What names were given to Sienna Blake and Warren Fox's twins born in November 2017?|Sophie and Sebastian|Minnie and Oscar|Leah and Lucas|Charlie and Tom|Medium|Sienna Blake|Warren Fox|Sophie Blake|Sebastian Blake|November 2017 Birth|Twins|Blake Family
 Who was the father of Sienna Blake's twins Sophie and Sebastian?|Warren Fox|Dodger Savage|Ben Bradley|Joel Dexter|Easy|Warren Fox|Sienna Blake|Sophie Blake|Sebastian Blake|Father Of Twins|2017 Birth|Fox Family
 Which of Sienna Blake's newborn twins was taken away by Warren Fox in November 2017?|Sophie Blake|Sebastian Blake|Minnie Minniver|Steph Cunningham-Lomax|Medium|Sophie Blake|Warren Fox|Sienna Blake|November 2017 Kidnapping|Twin Daughter|Child Abduction|Blake Family
 Which newcomer was revealed in 2017 to have caused the 2004 crash that killed Gordon and Helen Cunningham?|Milo Entwistle|Dirk Savage|Mac Nightingale|Cameron Campbell|Medium|Milo Entwistle|Gordon Cunningham|Helen Cunningham|2004 Car Crash|2017 Flashback Reveal|Cunningham Family|Hidden Guilt`,
   },
   {
     year: '2017',
     topic: 'New Families, Returning Stars And Awards',
     facts: `Which actress began playing hospital doctor Misbah Maalik in Hollyoaks in 2017?|Harvey Virdi|Krupa Pattani|Haiesha Mistry|Annie Wallace|Medium|Harvey Virdi|Misbah Maalik|2017 Debut|Actor Casting|Maalik Family|Dee Valley Hospital|Doctor Character
 Which heart condition affected Yasmine Maalik before her transplant in 2017?|Cardiomyopathy|Asthma|Atrial fibrillation|Pericarditis|Medium|Yasmine Maalik|Cardiomyopathy|Heart Transplant|2017 Health Storyline|Neeta Kaur|Maalik Family|Cardiac Illness
 Which killer was sentenced to 114 years in prison in Hollyoaks in February 2017?|Cameron Campbell|Ryan Knight|Mac Nightingale|Silas Blissett|Medium|Cameron Campbell|February 2017 Sentencing|114 Year Sentence|Lomax Family|Serial Killer|Court Verdict|Campbell Crimes
 Which actor returned to Hollyoaks as Luke Morgan in 2017 after a lengthy absence?|Gary Lucy|James Sutton|Guy Burnet|Chris Fountain|Easy|Gary Lucy|Luke Morgan|2017 Return|Morgan Family|Actor Reprisal|Original Cast|Mandy Richardson
 Which pair won Best On-Screen Partnership at the 2017 British Soap Awards for the Jade and Alfie storyline?|Richard Linnell and Kassius Nelson|Kieron Richardson and Emmett J Scanlan|Malique Thompson-Dwyer and Theo Graham|Matt Littler and Darren Jeffries|Medium|Richard Linnell|Kassius Nelson|Alfie Nightingale|Jade Albright|2017 British Soap Awards|Best On Screen Partnership|Teenage Cancer
 Who received the Outstanding Achievement award at the 2017 British Soap Awards for his long service to Hollyoaks?|Nick Pickard|Ashley Taylor Dawson|Gary Lucy|Jamie Lomas|Medium|Nick Pickard|Tony Hutchinson|Outstanding Achievement|2017 British Soap Awards|Long Serving Actor|Original Cast|Career Recognition`,
   },
   {
     year: '2018',
     topic: 'Buster Smith And Football Abuse',
     facts: `Which youth football coach was exposed as a sexual abuser in Hollyoaks during 2018?|Buster Smith|Luke Morgan|Brody Hudson|Damon Kinsella|Easy|Buster Smith|Youth Football|2018 Abuse Storyline|Sexual Abuse|Football Coach|Oliver Morgan|Brody Hudson
 Which actor played football coach Buster Smith in the 2018 storyline?|Nathan Sussex|Aedan Duckworth|Adam Woodward|Jacob Roberts|Medium|Nathan Sussex|Buster Smith|Actor Casting|2018 Storyline|Football Coach|Sexual Abuse Villain|Soap Performer
 Which teenager was groomed and sexually abused by football coach Buster Smith in 2018?|Oliver Morgan|Romeo Quinn|Imran Maalik|Prince McQueen|Easy|Oliver Morgan|Ollie Morgan|Buster Smith|2018 Grooming|Youth Football|Child Sexual Abuse|Morgan Family
 Which returning Hollyoaks character was revealed to be Oliver Morgan's father?|Luke Morgan|Tony Hutchinson|Darren Osborne|Rhys Ashworth|Easy|Luke Morgan|Oliver Morgan|Father Son|2018 Family Storyline|Gary Lucy|Morgan Family|Ollie Morgan
 Which adult character disclosed that Buster Smith had abused him during his childhood?|Brody Hudson|Damon Kinsella|Scott Drinkwell|Ste Hay|Medium|Brody Hudson|Buster Smith|Childhood Abuse|2018 Disclosure|Football Coach|Survivor Testimony|Adam Woodward
 Which actor originally played Oliver Morgan when the character arrived in January 2018?|Aedan Duckworth|Gabriel Clark|Owen Warner|Ijaz Rana|Medium|Aedan Duckworth|Oliver Morgan|January 2018 Arrival|Original Casting|Luke Morgan|Youth Football|Actor Debut`,
   },
   {
     year: '2018',
     topic: 'The Maaliks And New Teenagers',
     facts: `Which Maalik family teenager physically abused his mother Misbah during the 2018 storyline?|Imran Maalik|Sami Maalik|Yasmine Maalik|Romeo Quinn|Easy|Imran Maalik|Misbah Maalik|2018 Domestic Abuse|Child To Parent Violence|Maalik Family|Family Conflict|Anger Management
 Which actor portrayed Imran Maalik during the storyline about violence towards his family?|Ijaz Rana|Rishi Nair|Owen Warner|Aedan Duckworth|Medium|Ijaz Rana|Imran Maalik|Misbah Maalik|Actor Casting|2018 Domestic Abuse|Maalik Family|Teenage Character
 Which autistic teenager joined the Osborne household in 2018?|Brooke Hathaway|Juliet Quinn|Lily Drinkwell|Ella Richardson|Easy|Brooke Hathaway|Autism Representation|Osborne Foster Family|2018 Arrival|Hollyoaks High|Teenage Character|Foster Care
 Which actor began playing Brooke Hathaway in Hollyoaks in July 2018?|Tylan Grant|Niamh Blackshaw|Lauren McQueen|Jazmine Franks|Medium|Tylan Grant|Brooke Hathaway|July 2018 Casting|Autistic Actor|Hollyoaks Representation|Osborne Household|Television Debut
 Which character was revealed to be Brooke Hathaway's biological mother in 2018?|Fran Hathaway|Becca Dean|Sienna Blake|Nancy Osborne|Medium|Brooke Hathaway|Fran Hathaway|Biological Mother|2018 Revelation|Becca Dean Murder|Osborne Foster Family|Family History
 Which actor made his Hollyoaks debut as Romeo Quinn in July 2018?|Owen Warner|Gregory Finnegan|Aedan Duckworth|Charlie Wernham|Medium|Owen Warner|Romeo Quinn|July 2018 Arrival|Actor Casting|Donna-Marie Quinn|James Nightingale|Quinn Family`,
   },
   {
     year: '2018',
     topic: 'Family Murders And Breda McQueen',
     facts: `Which gangster killed his own son Adam Donovan in May 2018?|Glenn Donovan|Liam Donovan|Fraser Black|Trevor Royle|Medium|Glenn Donovan|Adam Donovan|May 2018 Murder|Father Son|Donovan Family|Gangland Violence|Fatal Shooting
 Who was responsible for the accident that electrocuted Dirk Savage at the swimming pool in July 2018?|Milo Entwistle|Mac Nightingale|Warren Fox|Glenn Donovan|Medium|Milo Entwistle|Dirk Savage|July 2018 Death|Swimming Pool|Faulty Lights|Electrocution|Cunningham Family
 Which character killed Nico Blake in self-defence during a confrontation in June 2018?|Sienna Blake|Maxine Minniver|Liberty Savage|Holly Cunningham|Easy|Sienna Blake|Nico Blake|June 2018 Death|Mother Daughter|Self Defence|Trophy Attack|Blake Family
 Who was later revealed to have poisoned gangster Glenn Donovan in October 2018?|Breda McQueen|Grace Black|Simone Loveday|Kim Butterfield|Medium|Breda McQueen|Glenn Donovan|October 2018 Death|Poisoning|Serial Killer|False Suspects|Donovan Family
 Which man was murdered shortly after marrying Mercedes McQueen in November 2018?|Russ Owen|Sylver McQueen|Tony Hutchinson|Liam Donovan|Easy|Russ Owen|Mercedes McQueen|November 2018 Wedding|Breda McQueen|Murdered Groom|McQueen Family|Owen Family
 Which character was revealed to be Breda McQueen's son after arriving in Hollyoaks in 2018?|Sylver McQueen|Prince McQueen|Romeo Quinn|Hunter McQueen|Medium|Sylver McQueen|Breda McQueen|Mother Son|2018 Introduction|David Tag|McQueen Family|Family Secret`,
   },
   {
     year: '2018',
     topic: 'Storm Belinda, Weddings And Awards',
     facts: `Which Lomax family member died after being injured by a falling tree branch during Storm Belinda in 2018?|Tegan Lomax|Leela Lomax|Peri Lomax|Amy Barnes|Easy|Tegan Lomax|Storm Belinda|October 2018 Death|Falling Tree|Lomax Family|Misbah Maalik|Severe Weather
 Which couple married in Hollyoaks in October 2018 shortly before the deadly storm?|Ste Hay and Harry Thompson|Tony Hutchinson and Diane O'Connor|Darren Osborne and Nancy Osborne|Sienna Blake and Warren Fox|Medium|Ste Hay|Harry Thompson|October 2018 Wedding|Storm Belinda|Same Sex Marriage|Kieron Richardson|Parry Glasspool
 Which Hollyoaks storyline won Best Storyline at the 2018 British Soap Awards?|Lily's self-harm|The Gloved Hand Killer|Amy Barnes's murder|The train crash|Medium|Lily Drinkwell|Self Harm Storyline|2018 British Soap Awards|Best Storyline|Lauren McQueen|Mental Health Awareness|Issue Based Drama
 Which actor won Best Male Dramatic Performance at the 2018 British Soap Awards for playing Scott Drinkwell?|Ross Adams|Kieron Richardson|Ashley Taylor Dawson|Jamie Lomas|Medium|Ross Adams|Scott Drinkwell|Best Male Dramatic Performance|2018 British Soap Awards|Actor Recognition|Mental Health Storyline|Award Winner
 Which actors won Best On-Screen Partnership in 2018 for playing Prince and Hunter McQueen?|Malique Thompson-Dwyer and Theo Graham|Richard Linnell and Kassius Nelson|James Sutton and Guy Burnet|Danny Mac and Jeremy Sheffield|Medium|Malique Thompson Dwyer|Theo Graham|Prince McQueen|Hunter McQueen|2018 British Soap Awards|On Screen Partnership|McQueen Brothers
 Which Hollyoaks instalment won Best Single Episode at the 2018 British Soap Awards?|Three Mothers, Three Daughters|The Dog in the Pond Fire|The Hollyoaks High Explosion|Enjoy the Ride|Hard|Three Mothers Three Daughters|Best Single Episode|2018 British Soap Awards|Hollyoaks|Episode Recognition|Three Generations|Soap Drama`,
   },
   {
     year: '2019',
     topic: 'Breda McQueen And Her Victims',
     facts: `Which actress portrayed serial killer Breda McQueen throughout her 2019 storyline?|Moya Brady|Chelsee Healey|Jennifer Metcalfe|Nicole Barber-Lane|Medium|Moya Brady|Breda McQueen|Actress Casting|2019 Serial Killer|McQueen Family|Nanny Character|Villain Performer
 Which Loveday family man was murdered by Breda McQueen with a telephone in January 2019?|Louis Loveday|Zack Loveday|Calvin Valentine|Walter Deveraux|Medium|Louis Loveday|Breda McQueen|January 2019 Murder|Telephone Weapon|Loveday Family|Serial Killer Victim|Fatal Assault
 Which Nightingale patriarch died after Breda McQueen served him poisoned lasagne in March 2019?|Mac Nightingale|James Nightingale|Alfie Nightingale|Romeo Nightingale|Medium|Mac Nightingale|Breda McQueen|March 2019 Murder|Poisoned Lasagne|Nightingale Family|Abusive Father|Serial Killer
 Which character was fatally stabbed with a chisel by Breda McQueen in July 2019?|Harry Thompson|Ste Hay|Damon Kinsella|Sylver McQueen|Easy|Harry Thompson|Breda McQueen|July 2019 Death|Chisel Stabbing|Tony Hutchinson|Murder Victim|Serial Killer
 Which original Hollyoaks character was stabbed and secretly held prisoner by Breda McQueen in 2019?|Tony Hutchinson|Jack Osborne|Darren Osborne|Luke Morgan|Easy|Tony Hutchinson|Breda McQueen|August 2019 Attack|Hostage Captivity|Original Cast|Nick Pickard|Serial Killer
 Where was Tony Hutchinson kept captive after Breda McQueen stabbed him in 2019?|Stone Mount Farm|The Loft nightclub|Dee Valley Hospital|The Dog in the Pond|Medium|Stone Mount Farm|Tony Hutchinson|Breda McQueen|2019 Hostage Plot|Pig Farm|Hidden Prisoner|Captivity Location`,
   },
   {
     year: '2019',
     topic: 'Ste Hay And Far-Right Radicalisation',
     facts: `Which newcomer befriended and groomed Ste Hay into a far-right extremist group?|Jonny Baxter|Stuart Sumner|Sid Sumner|Sami Maalik|Easy|Jonny Baxter|Ste Hay|2019 Radicalisation|Extremist Grooming|Far Right|Maalik Family|Manipulation
 Which former X Factor contestant played Jonny Baxter in the 2019 radicalisation story?|Ray Quinn|Shayne Ward|Joe McElderry|Matt Cardle|Medium|Ray Quinn|Jonny Baxter|X Factor|2019 Actor Casting|Ste Hay|Far Right Storyline|Television Singer
 Who led the far-right group that targeted Ste Hay and the Maalik family in 2019?|Stuart Sumner|Jonny Baxter|Sid Sumner|Terry Hay|Medium|Stuart Sumner|Ste Hay|2019 Extremism|Far Right Leader|Jonny Baxter|Hate Group|Chris Simmons
 Which Hollyoaks family was targeted after Ste Hay wrongly blamed a doctor for Tegan's death?|The Maaliks|The McQueens|The Roscoes|The Nightingales|Easy|Maalik Family|Ste Hay|Misbah Maalik|Tegan Lomax|2019 Islamophobia|Far Right Radicalisation|Hate Campaign
 Which actor portrayed Ste Hay during the 2019 far-right extremism storyline?|Kieron Richardson|Ray Quinn|Chris Simmons|Billy Price|Easy|Kieron Richardson|Ste Hay|2019 Radicalisation|Actor Casting|Far Right Grooming|Channel 4 Drama|Extremism Awareness
 Which character pushed extremist leader Stuart Sumner off a cliff in November 2019?|Sid Sumner|Ste Hay|Sami Maalik|Jonny Baxter|Medium|Sid Sumner|Stuart Sumner|Father Son|November 2019 Showdown|Cliff Death|Extremism Storyline|Billy Price`,
   },
   {
     year: '2019',
     topic: 'Teenage Health, Relationships And Court Cases',
     facts: `What medical condition caused Lily McQueen's death after infected self-harm wounds in April 2019?|Sepsis|Meningitis|Leukaemia|Pneumonia|Easy|Lily McQueen|Sepsis|April 2019 Death|Self Harm Complications|Lauren McQueen|Blood Infection|Teenage Health
 Which McQueen brother was married to Lily Drinkwell during her final storyline in 2019?|Prince McQueen|Hunter McQueen|Sylver McQueen|John Paul McQueen|Easy|Prince McQueen|Lily Drinkwell|Lily McQueen|2019 Marriage|McQueen Family|Romeo Quinn|Relationship Breakdown
 Which character falsely claimed to be seriously ill to gain attention from Damon Kinsella in 2019?|Maxine Minniver|Sienna Blake|Cindy Cunningham|Liberty Savage|Easy|Maxine Minniver|Damon Kinsella|Factitious Disorder|2019 Fake Illness|Medical Deception|Relationship Manipulation|Nikki Sanderson
 Who married Maxine Minniver in July 2019 while believing she was seriously ill?|Damon Kinsella|Brody Hudson|Patrick Blake|Warren Fox|Medium|Damon Kinsella|Maxine Minniver|July 2019 Wedding|Fake Illness|Kinsella Family|Marriage Deception|Jacob Roberts
 Which character was Sinead Shelby's abusive husband during the 2019 sexual violence storyline?|Laurie Shelby|Sami Maalik|Luke Morgan|Harry Thompson|Medium|Laurie Shelby|Sinead Shelby|2019 Sexual Violence|Marital Rape|Domestic Abuse|Kyle Pryor|Shelby Marriage
 How many years in prison was football coach Buster Smith sentenced to in January 2019 for abusing Oliver Morgan?|Six years|Three years|Ten years|Fifteen years|Medium|Buster Smith|Oliver Morgan|January 2019 Trial|Six Year Sentence|Football Sexual Abuse|Court Verdict|Nathan Sussex`,
   },
   {
     year: '2019',
     topic: 'Soap Awards And The New Year Flashforward',
     facts: `Which Channel 4 programme won Best British Soap at the 2019 British Soap Awards?|Hollyoaks|EastEnders|Coronation Street|Emmerdale|Easy|Hollyoaks|2019 British Soap Awards|Best British Soap|Channel 4|Top Award|Soap History|Lime Pictures|Awards Ceremony|Public Vote
 Which actor won Best Actor at the 2019 British Soap Awards for playing James Nightingale?|Gregory Finnegan|Kieron Richardson|Ashley Taylor Dawson|James Sutton|Medium|Gregory Finnegan|James Nightingale|2019 British Soap Awards|Best Actor|Nightingale Family|Award Winner|Actor Recognition
 Which actor won Best Male Dramatic Performance at the 2019 British Soap Awards for playing Brody Hudson?|Adam Woodward|Nathan Sussex|Aedan Duckworth|Jacob Roberts|Medium|Adam Woodward|Brody Hudson|2019 British Soap Awards|Best Male Dramatic Performance|Football Abuse Storyline|Actor Award|Survivor Portrayal
 Which actor won Villain of the Year at the 2019 British Soap Awards for portraying Buster Smith?|Nathan Sussex|Jeff Rawle|David Easter|Jamie Lomas|Medium|Nathan Sussex|Buster Smith|Villain Of The Year|2019 British Soap Awards|Football Abuse Plot|Actor Recognition|Coach Character
 In December 2019, Hollyoaks aired a special episode flashing forward to New Year's Eve of which year?|2020|2021|2018|2022|Medium|December 2019 Special|New Years Eve 2020|Flashforward|Channel 4|Future Timeline|Year Ahead|Hollyoaks
 Which form of criminal exploitation was foreshadowed by Hollyoaks' December 2019 flashforward episode?|County lines drug dealing|Illegal gambling|Art forgery|Identity theft|Medium|County Lines|December 2019 Flashforward|Youth Criminal Exploitation|Drug Dealing|2020 Storyline Teaser|Juliet Quinn|Charlie Dean`,
   },
 ];

 const FIRST_ID = 10827;
 let index = 0;

 const questions = groups.flatMap(group =>
   group.facts.trim().split('\n').map(line => {
     const parts = line.trim().split('|').map(part => part.trim());
     const id = 'tv_' + String(FIRST_ID + index).padStart(4, '0');

     if (parts.length < 12) {
       throw new Error(
         `At least six question-specific tags required at ${id}; got ${parts.length - 6}`
       );
     }

     const [
       question, correctAnswer, wrong1, wrong2, wrong3,
       difficulty, ...specificTags
     ] = parts;

     const answers = [wrong1, wrong2, wrong3];

     if (!question || !correctAnswer || answers.some(a => !a)) {
       throw new Error(`Missing question or answer at ${id}`);
     }

     if (
       new Set([correctAnswer, ...answers].map(a => a.toLowerCase())).size !== 4
     ) {
       throw new Error(`Repeated answer option at ${id}`);
     }

     if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
       throw new Error(`Invalid difficulty at ${id}`);
     }

     if (specificTags.some(tag => !tag)) {
       throw new Error(`Empty question-specific tag at ${id}`);
     }

     answers.splice(index % 4, 0, correctAnswer);

     const q = {
       id,
       category: 'Television',
       question,
       answers,
       correctAnswer,
       difficulty,
       tags: [...new Set([
         'British Television',
         'Soaps',
         'Hollyoaks',
         'Channel 4',
         '2010s',
         group.year,
         correctAnswer,
         ...specificTags
       ])],
       dailyEligible: true
     };

     index += 1;
     return q;
   })
 );

 const EXPECTED_COUNT = 72;

 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions, got ${questions.length}`);
 }

 if (
   questions[0].id !== 'tv_10827' ||
   questions[questions.length - 1].id !== 'tv_10898'
 ) {
   throw new Error('Unexpected question ID range');
 }

 if (new Set(questions.map(q => q.id)).size !== questions.length) {
   throw new Error('Repeated question IDs');
 }

 if (
   new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length
 ) {
   throw new Error('Repeated question text');
 }

 if (questions.some(q =>
   q.answers.length !== 4 ||
   !q.answers.includes(q.correctAnswer) ||
   q.tags.length < 12 ||
   q.tags.some(tag => !tag) ||
   q.dailyEligible !== true
 )) {
   throw new Error('Incomplete exported question metadata');
 }

 module.exports = questions;
