
 // quiz_pack269.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: Hollyoaks - 2005 to 2007
 // Weddings, family arrivals, relationships, major stories, awards and spin-offs.
 // Six individually selected question-specific tags per question.
 // Leave quiz_bank.js unchanged until the end of the evening.
 //
 // Each source line:
 // question | correct answer | three wrong answers | difficulty | six specific tags

 const groups = [
   {
     year: '2005',
     topic: 'Weddings And Relationships',
     facts: `Which long-standing Hollyoaks couple married in Rome in February 2005?|Tony Hutchinson and Mandy Richardson|Jake Dean and Becca Hayton|Jack Osborne and Frankie Dean|Max Cunningham and Clare Devine|Easy|Tony Hutchinson|Mandy Richardson|Rome Wedding|February 2005|Hutchinson Family|Richardson Family
 In which Italian city did Tony Hutchinson marry Mandy Richardson in 2005?|Rome|Venice|Florence|Milan|Medium|Tony Hutchinson|Mandy Richardson|Italian Wedding|February 2005|Marriage Ceremony|Italy
 Which Dean family member married teacher Becca Hayton in August 2005?|Jake Dean|Craig Dean|Johnno Dean|Max Cunningham|Easy|Jake Dean|Becca Hayton|Dean Family|2005 Wedding|Teacher Character|August Marriage
 Which couple shared a double wedding day with Jake Dean and Becca Hayton in August 2005?|Jack Osborne and Frankie Dean|Tony Hutchinson and Mandy Richardson|Max Cunningham and Clare Devine|Ben Davies and Izzy Cornwell|Medium|Jack Osborne|Frankie Dean|Jake Dean|Becca Hayton|Double Wedding|August 2005
 Who was Becca Hayton's younger sister, introduced to Hollyoaks in 2005?|Nancy Hayton|Sarah Barnes|Hannah Ashworth|Nicole Owen|Easy|Nancy Hayton|Becca Hayton|Hayton Sisters|2005 Introduction|Dean Household|Family Relationship
 Which actress began playing Nancy Hayton in 2005?|Jessica Fox|Ali Bastian|Emma Rigby|Loui Batley|Medium|Jessica Fox|Nancy Hayton|Becca Hayton|Actress Casting|July 2005|Hayton Family
 Which student began a secret relationship with his teacher Becca Dean at Christmas 2005?|Justin Burton|Craig Dean|Josh Ashworth|John Paul McQueen|Easy|Justin Burton|Becca Dean|Becca Hayton|Student Teacher Affair|Christmas 2005|Forbidden Romance`,
   },
   {
     year: '2005',
     topic: 'New Families And Major Stories',
     facts: `Which new family moved into the Hunter family's former home in Hollyoaks in 2005?|The Ashworths|The McQueens|The Valentines|The Costellos|Easy|Ashworth Family|Hunter Family|Neville Ashworth|Suzanne Ashworth|2005 Arrival|Christleton Terrace
 Which Ashworth sister was portrayed by Emma Rigby?|Hannah Ashworth|Sarah Barnes|Nicole Owen|Amy Barnes|Easy|Hannah Ashworth|Emma Rigby|Ashworth Family|Actress Casting|2005 Debut|Teen Character
 Which Ashworth brother was played by Andrew Moss?|Rhys Ashworth|Josh Ashworth|Neville Ashworth|Gilly Roach|Medium|Rhys Ashworth|Andrew Moss|Ashworth Family|Actor Casting|Hannah Ashworth|2005 Arrival
 Which character joined Hollyoaks in 2005 and was later revealed to be Tony Hutchinson's brother?|Dominic Reilly|Russ Owen|Ben Davies|Jack Osborne|Medium|Dominic Reilly|Tony Hutchinson|Secret Siblings|2005 Arrival|Reilly Family|Hutchinson Family
 What type of cancer was Russ Owen diagnosed with in 2005?|Testicular cancer|Lung cancer|Leukaemia|Prostate cancer|Medium|Russ Owen|Owen Family|Cancer Diagnosis|2005 Health Storyline|Testicular Cancer Awareness|Medical Drama
 Which school bully was involved in the attack on Ali Taylor in 2005?|Stephen Mackintosh|Scott Anderson|Mark Gibbs|Toby Mills|Medium|Stephen Mackintosh|Macki|Ali Taylor|Racist Bullying|School Violence|2005 Storyline
 Which character died after being hit by a car during the violent confrontation with Macki in 2005?|Ali Taylor|Justin Burton|Lee Hunter|Sam Owen|Medium|Ali Taylor|Stephen Mackintosh|Macki|Road Accident|2005 Death|Taylor Family`,
   },
   {
     year: '2005',
     topic: 'Births And Late-Night Spin-offs',
     facts: `What name did Tony and Mandy Hutchinson give to their daughter born in 2005?|Grace|Holly|Bethany|Leah|Easy|Grace Hutchinson|Tony Hutchinson|Mandy Hutchinson|Baby Daughter|October 2005|Hutchinson Family
 Which late-night Hollyoaks special from 2005 featured Steph Dean being haunted by a murdered woman?|Hollyoaks: In Too Deep|Hollyoaks: Leap of Faith|Hollyoaks: After Hours|Hollyoaks: Lost Weekend|Medium|In Too Deep|Steph Dean|Michelle Reid|Ghost Story|May 2005|Late Night Special
 Whose ghost haunted Steph Dean in the 2005 special Hollyoaks: In Too Deep?|Michelle Reid|Roxy Maguire|Dawn Cunningham|Natasha Andersen|Hard|Michelle Reid|Steph Dean|Toby Mills|In Too Deep|Murder Victim|Supernatural Storyline
 What was the title of the 2005 spin-off starring Ben Davies and Lisa Hunter?|Hollyoaks: Let Loose|Hollyoaks: In the City|Hollyoaks: Later|Hollyoaks: Movin' On|Easy|Let Loose|Ben Davies|Lisa Hunter|2005 Spin Off|E4 Drama|Hollyoaks Franchise
 Which couple were the central characters in Hollyoaks: Let Loose?|Ben Davies and Lisa Hunter|Tony Hutchinson and Mandy Richardson|Max Cunningham and O.B.|Craig Dean and Sarah Barnes|Medium|Ben Davies|Lisa Hunter|Let Loose|2005 Spin Off|Couple Relationship|Leaving Chester
 Which 2005 late-night Hollyoaks special featured Mel Burton being assaulted by Andy Holt?|Hollyoaks: No Going Back|Hollyoaks: In Too Deep|Hollyoaks: Breaking Boundaries|Hollyoaks: Lost Weekend|Medium|No Going Back|Mel Burton|Andy Holt|Late Night Special|December 2005|Sexual Violence Storyline
 Which Hollyoaks character's drink was spiked by Andy Holt in 2005 before she was sexually assaulted?|Dannii Carbone|Hannah Ashworth|Mandy Richardson|Sarah Barnes|Medium|Dannii Carbone|Andy Holt|Drug Facilitated Assault|2005 Storyline|Crossing The Line|Sexual Violence`,
   },
   {
     year: '2006',
     topic: 'Becca, Mandy And Clare',
     facts: `Which couple lost their baby daughter Grace to sudden infant death syndrome in 2006?|Tony and Mandy Hutchinson|Max and Clare Cunningham|Jake and Becca Dean|Russ and Mercedes Owen|Easy|Grace Hutchinson|Tony Hutchinson|Mandy Hutchinson|Sudden Infant Death|May 2006|Bereavement
 Which pupil's affair with Becca Dean led to her arrest in 2006?|Justin Burton|Craig Dean|Josh Ashworth|Lee Hunter|Easy|Justin Burton|Becca Dean|Teacher Pupil Relationship|June 2006 Arrest|Breach Of Trust|Dean Marriage
 What name was given to Becca Dean's son, born in December 2006?|Charlie|Oscar|Harry|Tom|Medium|Charlie Dean|Becca Dean|Justin Burton|Jake Dean|Baby Birth|December 2006
 Who was eventually confirmed as the biological father of Becca Dean's son Charlie?|Justin Burton|Jake Dean|Craig Dean|Ben Davies|Medium|Charlie Dean|Justin Burton|Becca Hayton|Jake Dean|Paternity Revelation|Dean Family
 Which character married Max Cunningham in July 2006?|Clare Devine|Louise Summers|Mandy Richardson|Nancy Hayton|Easy|Clare Devine|Max Cunningham|July 2006|Cunningham Wedding|The Loft|Villain Romance
 Which actress replaced Samantha Rowley as Clare Devine in 2006?|Gemma Bissix|Roxanne McKee|Jennifer Metcalfe|Ali Bastian|Medium|Gemma Bissix|Samantha Rowley|Clare Devine|Actress Recast|2006 Casting|Future Villain
 Who stopped Clare Devine from letting Max Cunningham drown at the lake in December 2006?|O.B.|Warren Fox|Tony Hutchinson|Darren Osborne|Medium|Sam O'Brien|O.B.|Max Cunningham|Clare Devine|Lakeside Rescue|December 2006`,
   },
   {
     year: '2006',
     topic: 'The McQueens And Other New Arrivals',
     facts: `Which Hollyoaks family introduced Myra, Mercedes and John Paul during 2006?|The McQueens|The Valentines|The Ashworths|The Deans|Easy|McQueen Family|Myra McQueen|Mercedes McQueen|John Paul McQueen|2006 Arrivals|Family Introduction
 Which actress played McQueen family matriarch Myra from her 2006 arrival?|Nicole Barber-Lane|Claire Cooper|Jennifer Metcalfe|Gemma Merna|Easy|Nicole Barber-Lane|Myra McQueen|McQueen Family|June 2006|Actress Casting|Family Matriarch
 Who played Mercedes McQueen when she first appeared in 2006?|Jennifer Metcalfe|Claire Cooper|Leah Hackett|Gemma Merna|Easy|Jennifer Metcalfe|Mercedes McQueen|Myra McQueen|Actress Casting|June 2006|McQueen Family
 Which actor began playing John Paul McQueen in 2006?|James Sutton|Guy Burnet|Chris Fountain|Kevin Sacre|Easy|James Sutton|John Paul McQueen|McQueen Family|September 2006|Actor Casting|Craig Dean
 Which actor joined Hollyoaks in 2006 as nightclub businessman Warren Fox?|Jamie Lomas|Ricky Whittle|Gerard McCarthy|Stuart Manning|Easy|Jamie Lomas|Warren Fox|The Loft|June 2006|Actor Casting|Villain Introduction
 Which actor played policeman Calvin Valentine when the Valentine family arrived in 2006?|Ricky Whittle|Devon Anderson|Brian Bovell|Jamie Lomas|Medium|Ricky Whittle|Calvin Valentine|Valentine Family|Police Officer|July 2006|Actor Casting
 Which Hollyoaks character introduced in 2006 was played by Nathalie Emmanuel?|Sasha Valentine|Carmel McQueen|Amy Barnes|Zoe Carpenter|Medium|Nathalie Emmanuel|Sasha Valentine|Valentine Family|Actress Casting|July 2006|Calvin Valentine`,
   },
   {
     year: '2006',
     topic: 'The Dog Fire And Late-Night Drama',
     facts: `Who started the deadly fire at The Dog in the Pond in September 2006?|Sam Owen|Andy Holt|Warren Fox|Scott Anderson|Easy|Sam Owen|The Dog In The Pond|September 2006|Petrol Fire|Pub Explosion|Owen Family
 Which Valentine family member struck Sam Owen with a glass just before the 2006 Dog explosion?|Calvin Valentine|Sonny Valentine|Leo Valentine|Sasha Valentine|Medium|Calvin Valentine|Sam Owen|The Dog Fire|Glass Attack|September 2006|Rescue Attempt
 Which pair of Burton sisters died after the 2006 explosion at The Dog in the Pond?|Mel and Sophie Burton|Becca and Nancy Hayton|Sarah and Amy Barnes|Mercedes and Jacqui McQueen|Easy|Mel Burton|Sophie Burton|Burton Sisters|The Dog Fire|September 2006|Twin Tragedy
 Which student died with Olivia Johnson in a second explosion at The Dog in the Pond in 2006?|Joe Spencer|Kris Fisher|Rhys Ashworth|Gilly Roach|Medium|Joe Spencer|Olivia Johnson|The Dog Fire|Second Explosion|September 2006|Student Death
 Which 2006 Hollyoaks special followed Andy Holt's return after surviving a fall from a cliff?|Hollyoaks: Back from the Dead|Hollyoaks: No Going Back|Hollyoaks: In Too Deep|Hollyoaks: Let Loose|Medium|Back From The Dead|Andy Holt|Russ Owen|Nicole Owen|2006 Special|Revenge Storyline
 Which character died after running into a metal spike during the 2006 Andy Holt storyline?|Andy Holt|Sam Owen|Russ Owen|Justin Burton|Medium|Andy Holt|Mel Burton|Back From The Dead|Metal Spike|February 2006|Villain Death
 Which Hollyoaks spin-off broadcast in 2006 starred Ben Davies and Lisa Hunter after Let Loose?|Hollyoaks: In the City|Hollyoaks: Later|Hollyoaks: Lost Weekend|Hollyoaks: Boys Do Barca|Medium|In The City|Ben Davies|Lisa Hunter|2006 Spin Off|Chester Characters|Hollyoaks Franchise`,
   },
   {
     year: '2007',
     topic: 'Becca, Family And Weddings',
     facts: `Who fatally stabbed Becca Dean while she was in prison in February 2007?|Fran Hathaway|Clare Devine|Mercedes McQueen|Louise Summers|Medium|Becca Dean|Fran Hathaway|Prison Attack|February 2007|Fatal Stabbing|Hayton Family
 Which character gave birth to daughter Leah Barnes in February 2007?|Amy Barnes|Sarah Barnes|Hannah Ashworth|Michaela McQueen|Easy|Amy Barnes|Leah Barnes|February 2007|Teenage Pregnancy|Barnes Family|Baby Birth
 Who was the father of Sarah and Amy Barnes in the 2007 Hollyoaks storylines?|Mike Barnes|Neville Ashworth|Jack Osborne|Leo Valentine|Easy|Mike Barnes|Sarah Barnes|Amy Barnes|Barnes Family|Father Daughters|2007 Storylines
 Which McQueen sister married Dominic Reilly in July 2007?|Tina McQueen|Carmel McQueen|Mercedes McQueen|Jacqui McQueen|Medium|Tina McQueen|Dominic Reilly|July 2007|Reilly Marriage|McQueen Family|Double Wedding
 Which character married Mercedes McQueen in the July 2007 double wedding?|Russ Owen|Calvin Valentine|Tony Hutchinson|Warren Fox|Easy|Russ Owen|Mercedes McQueen|July 2007|Double Wedding|Owen Family|McQueen Family
 Which McQueen sister married Aleksander Malota in March 2007 to help secure his visa?|Jacqui McQueen|Tina McQueen|Mercedes McQueen|Carmel McQueen|Medium|Jacqui McQueen|Aleksander Malota|March 2007|Marriage Of Convenience|Visa Storyline|McQueen Family
 Who was revealed to be Rhys Ashworth's biological father in June 2007?|Noel Ashworth|Neville Ashworth|Jack Osborne|Mike Barnes|Medium|Rhys Ashworth|Noel Ashworth|Neville Ashworth|June 2007|Family Secret|Ashworth Family`,
   },
   {
     year: '2007',
     topic: 'John Paul And Craig',
     facts: `Which two Hollyoaks characters became known to fans as the couple McDean?|John Paul McQueen and Craig Dean|Justin Burton and Becca Dean|Rhys Ashworth and Sarah Barnes|Max Cunningham and Clare Devine|Easy|John Paul McQueen|Craig Dean|McDean|2007 Romance|Secret Affair|Fan Nickname
 Which character was Craig Dean engaged to when his affair with John Paul McQueen was revealed in 2007?|Sarah Barnes|Hannah Ashworth|Nancy Hayton|Amy Barnes|Easy|Craig Dean|Sarah Barnes|John Paul McQueen|Engagement Party|September 2007|Love Triangle
 Who discovered Craig Dean kissing John Paul McQueen at the 2007 engagement party?|Sarah Barnes|Hannah Ashworth|Frankie Osborne|Mercedes McQueen|Easy|Sarah Barnes|Craig Dean|John Paul McQueen|Affair Exposure|Engagement Party|September 2007
 Who sent a message from Craig Dean's phone to bring Sarah Barnes upstairs during the affair reveal?|John Paul McQueen|Craig Dean|Michaela McQueen|Frankie Osborne|Hard|John Paul McQueen|Craig Dean|Sarah Barnes|Phone Message|Affair Reveal|2007 Engagement
 Which actor portrayed Craig Dean opposite James Sutton's John Paul McQueen?|Guy Burnet|Kevin Sacre|Chris Fountain|Alex Carter|Easy|Guy Burnet|Craig Dean|James Sutton|John Paul McQueen|Actor Casting|McDean
 What was the name of the DJ who dated John Paul McQueen during 2007?|Spike|Foz|Gilly|O.B.|Medium|Spike|John Paul McQueen|DJ Character|2007 Relationship|Craig Dean|Love Triangle
 Which 2007 John Paul and Craig storyline received a Stonewall Award for Broadcast of the Year?|Their relationship and Sarah Barnes love triangle|The Dog in the Pond fire|Clare Devine's balcony fall|Becca Dean's prison trial|Hard|Stonewall Awards|Broadcast Of The Year|John Paul McQueen|Craig Dean|Sarah Barnes|2007 Recognition`,
   },
   {
     year: '2007',
     topic: 'Clare, Hannah And Major Awards',
     facts: `Who was revealed to have pushed Clare Devine from The Loft balcony in 2007?|Justin Burton|Warren Fox|Max Cunningham|Calvin Valentine|Medium|Justin Burton|Clare Devine|The Loft Balcony|Whodunnit|September 2007 Reveal|Attempted Murder
 Which businessman was wrongly accused of pushing Clare Devine from The Loft balcony?|Warren Fox|Tony Hutchinson|Darren Osborne|Russ Owen|Medium|Warren Fox|Clare Devine|False Accusation|Balcony Attack|2007 Trial|The Loft
 Who rescued Katy Fox after Clare Devine drove her car into a quarry in 2007?|Warren Fox and Justin Burton|Max Cunningham and O.B.|Tony Hutchinson and Dominic Reilly|Craig Dean and John Paul McQueen|Medium|Katy Fox|Warren Fox|Justin Burton|Clare Devine|Quarry Crash|September 2007
 Which Hollyoaks character's eating disorder became a major storyline during 2007?|Hannah Ashworth|Sarah Barnes|Amy Barnes|Nicole Owen|Easy|Hannah Ashworth|Emma Rigby|Anorexia|Bulimia|2007 Eating Disorder|Ashworth Family
 Which friend of Hannah Ashworth died from an anorexia-related heart attack in September 2007?|Melissa Hurst|Sarah Barnes|Zoe Carpenter|Jessica Harris|Medium|Melissa Hurst|Hannah Ashworth|Anorexia|September 2007|Heart Attack|Friendship Tragedy
 Which actress won Villain of the Year at the 2007 British Soap Awards for playing Clare Devine?|Gemma Bissix|Roxanne McKee|Emma Rigby|Jennifer Metcalfe|Medium|Gemma Bissix|Clare Devine|British Soap Awards|Villain Of The Year|2007 Award|Actress Recognition
 Which actress won Best Comedy Performance at the 2007 British Soap Awards for playing Carmel McQueen?|Gemma Merna|Claire Cooper|Nicole Barber-Lane|Jennifer Metcalfe|Medium|Gemma Merna|Carmel McQueen|British Soap Awards|Best Comedy Performance|2007 Award|McQueen Family`,
   },
 ];

 const FIRST_ID = 10559;
 let index = 0;

 const questions = groups.flatMap(group =>
   group.facts.trim().split('\n').map(line => {
     const parts = line.split('|');

     if (parts.length !== 12) {
       throw new Error(
         `Expected six specific tags at question ${index + 1}; got ${parts.length - 6}`
       );
     }

     const [
       question, correctAnswer, wrong1, wrong2, wrong3,
       difficulty, ...individualTags
     ] = parts;

     const id = 'tv_' + String(FIRST_ID + index).padStart(4, '0');
     const answers = [wrong1, wrong2, wrong3];

     if (
       new Set([correctAnswer, ...answers].map(a => a.trim().toLowerCase())).size !== 4
     ) {
       throw new Error(`Repeated answer choice at ${id}`);
     }

     if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
       throw new Error(`Invalid difficulty at ${id}`);
     }

     if (individualTags.some(tag => !tag.trim())) {
       throw new Error(`Empty specific tag at ${id}`);
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
         'British Television',
         'Soaps',
         'Hollyoaks',
         'Channel 4',
         '2000s',
         group.year,
         correctAnswer,
         ...individualTags
       ])],
       dailyEligible: true
     };

     index += 1;
     return item;
   })
 );

 const EXPECTED_COUNT = 63;

 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(
     `Expected ${EXPECTED_COUNT} questions; got ${questions.length}`
   );
 }

 if (new Set(questions.map(q => q.id)).size !== questions.length) {
   throw new Error('Repeated question IDs');
 }

 if (
   new Set(questions.map(q => q.question.toLowerCase())).size !==
   questions.length
 ) {
   throw new Error('Repeated question text');
 }

 if (questions.some(q =>
   q.answers.length !== 4 ||
   !q.answers.includes(q.correctAnswer) ||
   q.tags.length < 11 ||
   q.tags.some(t => !t) ||
   q.dailyEligible !== true
 )) {
   throw new Error('Incomplete exported question metadata');
 }

 module.exports = questions;
