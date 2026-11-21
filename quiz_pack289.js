
 // quiz_pack289.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: Gimme Gimme Gimme (1999-2001)
 // Three BBC series, the 1999 Millennium episode, and the 2001 Comic Relief sketch.
 // Pack size is determined by distinct, verified material rather than a target.
 // Every question has eight individually selected subject-specific tags.
 // Already connected through quiz_bank.js (packs 1-558); updating this pack requires no loader change.
 // Row: question | correct answer | three wrong answers | difficulty | eight individual tags

 const groups = [
   {
     topic: 'Programme, Production and Broadcast',
     facts: `In what year did the BBC sitcom Gimme Gimme Gimme first air?|1999|1996|2001|2004|Easy|Original Premiere|January Debut|Nineties Television|British Sitcom History|First Broadcast|BBC Two|Jonathan Harvey|Television Comedy
 How many full-length episodes of Gimme Gimme Gimme were made?|Nineteen|Twelve|Twenty-four|Thirty|Medium|Episode Count|Full Length Episodes|Three Series|Millennium Special|Complete Run|Programme Length|1999 To 2001|BBC Comedy
 How many main series of Gimme Gimme Gimme were produced?|Three|Two|Four|Five|Easy|Series Count|British Comedy|1999 Debut|2001 Ending|Complete Series|BBC Sitcom|Programme History|Television Run
 On which BBC channel did Gimme Gimme Gimme originally premiere?|BBC Two|BBC One|BBC Three|BBC Four|Medium|BBC Two Premiere|Original Channel|1999 Broadcasting|British Television|First Two Series|Scheduling|Programme Debut|Public Service Television
 Which BBC channel showed the third and final series of Gimme Gimme Gimme?|BBC One|BBC Two|BBC Three|BBC Four|Medium|BBC One|Third Series|2001 Broadcasting|Channel Move|Sitcom Success|Television Scheduling|Final Run|Network Change
 Who wrote the sitcom Gimme Gimme Gimme?|Jonathan Harvey|Ben Elton|Victoria Wood|John Sullivan|Easy|Jonathan Harvey|Series Creator|Screenwriter|Comedy Writing|Television Scripts|British Playwright|Programme Credits|All Episodes
 Which production company made Gimme Gimme Gimme?|Tiger Aspect Productions|Hat Trick Productions|Thames Television|Granada Television|Medium|Tiger Aspect|Production Company|BBC Commission|British Television Production|Sitcom Credits|Studio Comedy|1999 Programme|Production History
 Which pop group originally recorded the song used for the sitcom's theme tune?|ABBA|Boney M|Steps|The Bee Gees|Easy|ABBA|Gimme Gimme Gimme Song|A Man After Midnight|Theme Tune|Pop Music|Swedish Band|Television Music|Opening Credits
 Who recorded the cover of the theme song used in Gimme Gimme Gimme?|Kathy Burke and James Dreyfus|Mina Anwar and James Dreyfus|Victoria Wood and Julie Walters|Dawn French and Jennifer Saunders|Medium|Kathy Burke|James Dreyfus|Theme Recording|Cast Singing|ABBA Cover|Opening Titles|Sitcom Music|A Man After Midnight
 In what London studio complex was Gimme Gimme Gimme recorded?|The London Studios|Elstree Studios|Pinewood Studios|BBC Television Centre|Hard|The London Studios|South Bank|Studio Audience|Production Venue|London Television|Sitcom Recording|Multi Camera Comedy|Studio Location
 Who directed the third series of Gimme Gimme Gimme?|Tristram Shapeero|Liddy Oldroyd|John Birkin|Richard Curtis|Medium|Tristram Shapeero|Series Three|Director Credits|2001 Production|BBC One|Sitcom Direction|Television Crew|Final Series`,
   },
   {
     topic: 'Linda, Tom and Their Neighbours',
     facts: `Which actress played Linda La Hughes in Gimme Gimme Gimme?|Kathy Burke|Caroline Aherne|Jo Brand|Pauline Quirke|Easy|Kathy Burke|Linda La Hughes|Lead Actress|Character Portrayal|London Flatmate|Comedy Performance|1990s Cast|2001 Series
 Which actor played Linda's flatmate Tom Farrell?|James Dreyfus|Alan Cumming|David Haig|Robert Webb|Easy|James Dreyfus|Tom Farrell|Lead Actor|Flatmate|Character Casting|British Comedy|Aspiring Performer|Main Cast
 What career is Tom Farrell constantly trying to pursue?|Acting|Professional football|Journalism|Architecture|Easy|Tom Farrell|Struggling Actor|Auditions|Show Business|Career Ambition|Theatre Roles|Television Work|Character Background
 Which actress portrayed the flatmates' landlady Beryl Merit?|Rosalind Knight|Miriam Margolyes|June Whitfield|Dame Patricia Routledge|Medium|Rosalind Knight|Beryl Merit|Landlady|Character Casting|Upstairs Neighbour|Older Resident|Former Sex Worker|Regular Cast
 What job did Beryl Merit have before becoming the flatmates' landlady?|Sex worker|School headmistress|Opera singer|Airline pilot|Medium|Beryl Merit|Former Prostitute|Character Past|Landlady|Upstairs Flat|Rosalind Knight|Adult Life|Resident History
 Which actor played the neighbour known as Jez?|Brian Bovell|Rudolph Walker|Mark Monero|Phil Daniels|Medium|Brian Bovell|Jez Littlewood|Actor Casting|Downstairs Neighbour|Linda Attraction|Suze Partner|Regular Cast|London Flat
 Which actress played Jez's partner Suze?|Beth Goddard|Elaine Lordan|Anna Keaveney|Serena Evans|Medium|Beth Goddard|Suze Littlewood|Actor Casting|Jez Partner|Downstairs Flat|Neighbouring Couple|Regular Cast|London Residents
 Who is Jez's partner in the downstairs flat?|Suze|Linda|Beryl|Sugar|Easy|Jez|Suze|Neighbour Relationship|Downstairs Couple|London Flat|Family Storyline|Resident Household|Romantic Partnership
 Which neighbour does Linda repeatedly fancy despite his relationship with Suze?|Jez|Tom|Beryl|Shirley|Easy|Linda La Hughes|Jez|Unrequited Attraction|Neighbour Crush|Suze|Flatmates|Romantic Comedy|Character Obsession
 At what fictional street address do Tom and Linda live?|69 Paradise Passage|22 Acacia Avenue|17 Cherry Tree Lane|13 Coronation Street|Medium|Paradise Passage|Number Sixty Nine|Fictional Address|London Setting|Shared Flat|Jez And Suze|Beryl Building|Sitcom Location
 Which actress portrayed Linda's sister Sugar Walls?|Elaine Lordan|Kathy Burke|Beth Goddard|Melinda Messenger|Medium|Elaine Lordan|Sugar Walls|Linda Sister|Guest Actress|Soap Performer|Family Revelation|Series One|Series Two Return
 Who played Tom's theatrical agent Norma?|Doña Croll|Rosalind Knight|Sue Pollard|Mina Anwar|Hard|Dona Croll|Norma|Tom Agent|Acting Career|Guest Performer|Audition Calls|Talent Representation|Recurring Role`,
   },
   {
     topic: 'First Series Stories',
     facts: `Who is the half-dressed stranger found in Linda and Tom's kitchen in the first episode?|Jez|Tom's father|Shirley|Rick Cheesecloth|Easy|Jez|Whos That Boy|Series One Premiere|Kitchen Mystery|New Neighbour|Night Out|Unfamiliar Man|1999 Episode
 Why can neither Linda nor Tom explain how the stranger arrived in their flat?|They cannot remember the previous night's drinking|They both had food poisoning|They were away on holiday|They had been hypnotised for a television show|Easy|Whos That Boy|Linda And Tom|Drunken Night|Memory Lapse|Flatmate Rivalry|Pilot Story|Mysterious Visitor|1999 Premiere
 For which programme does Tom hope to audition in The Big Break?|Crimewatch UK|Blue Peter|Top of the Pops|Newsnight|Medium|Crimewatch UK|The Big Break|Acting Audition|Crime Reconstruction|Tom Farrell|Television Role|Series One|Show Business
 What injury prevents Tom from attending his promising audition?|A broken leg|A sprained wrist|A dislocated shoulder|A fractured jaw|Easy|Tom Farrell|Broken Leg|The Big Break|Slippery Floor|Missed Audition|Acting Career|1999 Plot|Physical Comedy
 What causes Tom's injury on his way to the audition?|He slips on an over-polished floor|He falls from a theatre balcony|He trips over a television cable|He crashes his bicycle|Medium|Tom Farrell|Over Polished Floor|The Big Break|Accidental Fall|Broken Leg|Hallway|Missed Opportunity|1999 Episode
 What is the name of the gloomy home help assigned to Tom in Legs And Co.?|Shirley|Vernon|Neville|Bart|Medium|Shirley|Home Help|Legs And Co|Tom Farrell|Broken Leg Recovery|Depressed Visitor|Home Care|Series One
 Who arrives at the flat in Do They Take Sugar? and turns out to be Linda's sister?|Sugar Walls|Beryl Merit|Heidi Honeycomb|Suze Littlewood|Easy|Sugar Walls|Linda Sister|Do They Take Sugar|Family Surprise|Soap Actress|Tom Farrell|Series One|Unexpected Visit
 Why is Tom particularly excited to meet Linda's sister Sugar?|He is already a fan of her soap acting|She has offered him a job at CTU|She is the landlady of a theatre|She has won the National Lottery|Medium|Tom Farrell|Sugar Walls|Soap Star|Celebrity Fan|Do They Take Sugar|Acting Admiration|Linda Family|Series One
 Where does Tom head in Saturday Night Diva in search of romance?|A gay nightclub|A bingo hall|A church fete|A football stadium|Easy|Tom Farrell|Saturday Night Diva|Gay Club|London Nightlife|Dating Search|Weekend Plans|Series One|Night Out
 Whom does Linda invite over for drinks while Tom is out clubbing?|Jez|Sugar|Shirley|Tom's father|Easy|Linda La Hughes|Jez|Saturday Night Diva|Drinks Invitation|Neighbour Flirtation|Suze Relationship|Shared Building|1999 Story
 Why does Tom agree to marry a woman in the first-series finale?|To help her remain in the country|To inherit her family's business|To enter a television competition|To stop Linda moving out|Medium|Tom Farrell|Marriage Of Convenience|Immigration|First Series Finale|Female Fiancee|Lesbian Partner|I Do I Do I Do|1999 Plot
 Which television chat show does Linda appear on when Tom announces his marriage plans?|The Terry Clinger Show|The Graham Norton Show|Parkinson|This Morning|Medium|Linda La Hughes|Terry Clinger|Television Talk Show|Marriage Announcement|Series One Finale|Public Appearance|I Do I Do I Do|1999 Episode`,
   },
   {
     topic: 'Millennium Special and Second Series',
     facts: `Which celebration forms the backdrop to the Gimme Gimme Gimme special broadcast in December 1999?|The millennium New Year's Eve|The Queen's Golden Jubilee|The London Olympics|The Royal Wedding|Easy|Millennium Special|December 1999|New Years Eve|Century Change|Tom And Linda|Holiday Episode|BBC Two|1999 To 2000
 What happens to the grand New Year's Eve party Tom hopes to host?|Almost nobody turns up|It is broadcast live on BBC One|It becomes a surprise wedding|It is moved to Paris|Medium|Tom Farrell|Millennium Special|Empty Party|New Years Eve|Party Plans|Flatmate Disappointment|1999 Special|Celebration
 Which household item does Linda babysit for Jez and Suze in Teacher's Pet?|A lifelike baby doll|A pet iguana|A toy robot|A porcelain cat|Easy|Linda La Hughes|Baby Doll|Teacher's Pet|Jez And Suze|Parenthood Practice|Babysitting|Series Two|2000 Episode
 What teaching venture does Tom launch in Teacher's Pet?|Acting classes|Driving lessons|A cookery school|Computer programming workshops|Easy|Tom Farrell|Acting Teacher|Performing Arts|Teachers Pet|Home Classes|Drama School|Series Two|Career Scheme
 Which relative of Linda returns to take acting lessons from Tom?|Her sister Sugar|Her mother Beryl|Her aunt Norma|Her daughter Suze|Medium|Sugar Walls|Linda La Hughes|Teacher's Pet|Acting Lessons|Tom Farrell|Returning Guest|Elaine Lordan|Series Two
 What do Linda and Tom unexpectedly find in their living room in Stiff?|Beryl lying in a coffin|A wedding cake shaped like a house|Jez's new motorbike|A giant television camera|Medium|Stiff|Beryl Merit|Coffin|Living Room Surprise|Landlady|Funeral Mix Up|Series Two|Dark Comedy
 What type of prisoner does Linda start corresponding with in Prison Visitor?|A convicted serial killer|A bank clerk jailed for tax fraud|A prisoner of war|A former football hooligan|Medium|Linda La Hughes|Prison Visitor|Serial Killer|Prison Pen Pal|Romantic Fantasy|Inmate Correspondence|Series Two|2000 Story
 What nickname is used by Linda's imprisoned admirer Freddie Windrush?|The Stick|The Hammer|The Shadow|The Professor|Hard|Freddie Windrush|The Stick|Prison Visitor|Serial Killer|Pen Pal Romance|Prison Nickname|Linda La Hughes|2000 Episode
 Which actor played the imprisoned Freddie Windrush?|Phil Daniels|Mark Benton|David Schneider|Ronan Vibert|Hard|Phil Daniels|Freddie Windrush|Guest Actor|Prison Visitor|The Stick|Serial Killer|Series Two Cast|British Performer
 What type of animal does Tom bring home hoping it will become a star in Prison Visitor?|A cat|A parrot|A dog|A ferret|Easy|Tom Farrell|Pet Cat|Prison Visitor|Animal Acting|Show Business|Series Two|2000 Plot|Potential Star
 Which birthday does Tom celebrate in Dirty Thirty?|His thirtieth|His fortieth|His twenty-first|His fiftieth|Easy|Tom Farrell|Thirtieth Birthday|Dirty Thirty|Age Milestone|Birthday Party|Series Two|Parents Visit|2000 Episode
 How do Tom's parents arrive when they visit for his birthday?|With a caravan|On a cruise ship|In a police van|By helicopter|Medium|Tom Parents|Caravan|Dirty Thirty|Surprise Visit|Thirtieth Birthday|Family Embarrassment|Series Two|2000 Story
 What sort of television commercial offers Tom a chance of fame in Sofa Man?|A sofa advert|A perfume advert|A car insurance advert|A breakfast cereal advert|Easy|Tom Farrell|Sofa Man|Furniture Advert|Television Commercial|Acting Job|Show Business|Series Two|Advertising
 What is the name of the actor Tom meets through his sofa advertising job?|Rick Cheesecloth|Terry Clinger|Simon Shepherd|Freddie Windrush|Medium|Rick Cheesecloth|Sofa Man|Tom Farrell|Charismatic Actor|Commercial Filming|Potential Romance|Series Two|Guest Character
 For which charity event did Tom and Linda appear in a short special sketch in 2001?|Comic Relief|Children in Need|Sport Relief|Red Nose Day USA|Easy|Comic Relief|2001 Sketch|Charity Special|Kissing Booth|Tom Farrell|Linda La Hughes|Fundraising Broadcast|BBC Comedy`,
   },
   {
     topic: 'Third Series and the Finale',
     facts: `What does Linda turn the garden into at the start of the third series?|A campsite|A mini golf course|A vegetable market|An outdoor cinema|Easy|Linda La Hughes|Garden Campsite|Down And Out In Kentish Town|Series Three|Unwelcome Visitors|2001 Premiere|Household Scheme|Paradise Passage
 Who is Miss Twitch, one of the unusual guests at Linda's campsite?|An officer from Linda's former Borstal|Tom's former acting tutor|Suze's midwife|Jez's former football coach|Medium|Miss Twitch|Linda Borstal|Former Officer|Down And Out In Kentish Town|Campsite Guest|Past Life|Series Three|2001 Story
 Which actress guest-starred as Miss Twitch?|Ann Mitchell|Julie Walters|Miriam Margolyes|Rosalind Knight|Medium|Ann Mitchell|Miss Twitch|Guest Casting|Down And Out In Kentish Town|Borstal Officer|Series Three|British Actress|2001 Premiere
 Which well-known actor does Tom idolise and hope to work with in the third-series opening story?|Simon Shepherd|Rowan Atkinson|David Jason|Sean Bean|Medium|Simon Shepherd|Tom Farrell|Acting Idol|Down And Out In Kentish Town|Stage Project|Celebrity Cameo|Series Three|Show Business
 What profession is Tom pursuing when he ruins a production in The Lollipop Man Cometh?|Stage acting|Sports commentating|Radio newsreading|Television presenting|Easy|Tom Farrell|Stage Play|Lollipop Man Cometh|Theatre Role|Dressing Room|Failed Performance|Series Three|Acting Ambition
 What is the nickname of Linda's long-lost son who arrives in Secrets And Flies?|Zippy|Bingo|Titch|Bobby|Medium|Zippy|Linda La Hughes|Long Lost Son|Secrets And Flies|Family Reunion|Adoption|Series Three|2001 Story
 Why does Linda's long-lost son decide to seek her out?|His adoptive mother has died|He has inherited Tom's flat|He needs someone to coach his football team|He has won a holiday for two|Medium|Zippy|Adoptive Mother Death|Linda La Hughes|Secrets And Flies|Search For Birth Mother|Family History|2001 Episode|Emotional Reunion
 Which actor portrayed Linda's son Zippy?|Mark Monero|Brian Bovell|Phil Daniels|Charlie Condou|Hard|Mark Monero|Zippy|Guest Actor|Linda Son|Secrets And Flies|Family Reunion|Series Three|British Television Actor
 Who gives birth in Tom and Linda's flat during the third series?|Suze|Beryl|Sugar|Norma|Medium|Suze Littlewood|Childbirth|Secrets And Flies|Jez Partner|Baby Arrival|Shared Building|Series Three|2001 Plot
 What object becomes stuck on Linda's head after an accident in Trauma?|A saucepan|A bicycle helmet|A flowerpot|A lampshade|Easy|Linda La Hughes|Saucepan|Trauma|Hospital Accident|Falling From Bus|Ironmongers Window|Series Three|Physical Comedy
 How is Linda injured before going to hospital in Trauma?|She falls from a bus into a shop window|She slips on a freshly polished floor|She falls off a theatre stage|She crashes a motorbike|Medium|Linda La Hughes|Bus Fall|Shop Window|Trauma|Hospitalisation|Ironmongers Shop|2001 Episode|Public Transport
 Who is the young nurse whom Tom recognises from drama college in Trauma?|Bart|Nino|Shirley|Rick|Medium|Bart|Tom Farrell|Drama College|Male Nurse|Trauma|Former Crush|Hospital Visit|Series Three
 Which performer guest-starred as Tom's singing teacher Heidi Honeycomb?|Su Pollard|Elaine Lordan|Miriam Margolyes|Patsy Palmer|Medium|Su Pollard|Heidi Honeycomb|Singing Teacher|Singing In The Drain|Guest Star|Musical Theatre|Voice Lessons|2001 Cast
 What work does Suze offer Linda in Singing In The Drain?|A modelling job|A job as a prison visitor|A television acting audition|A place in a touring orchestra|Easy|Suze Littlewood|Linda La Hughes|Modelling Work|Singing In The Drain|Fashion Show|New Agency|Series Three|2001 Episode
 Which soap opera offers Tom the role of Billy the bell-boy in the series finale?|Crossroads|Coronation Street|EastEnders|Emmerdale|Medium|Crossroads|Billy Bell Boy|Tom Farrell|Decoy|Acting Break|British Soap Opera|Series Finale|2001 Story
 What does Linda pretend to have in an effort to stop Tom moving away in the finale?|A terminal illness|A winning lottery ticket|A famous relative|A new acting contract|Medium|Linda La Hughes|Fake Illness|Tom Farrell|Decoy|Flatmate Separation|Emotional Manipulation|Series Finale|2001 Ending`,
   },
 ];

 const FIRST_ID = 11995;
 let index = 0;

 const questions = groups.flatMap(group =>
   group.facts.trim().split('\n').map(line => {
     const parts = line.trim().split('|').map(part => part.trim());
     const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
     if (parts.length !== 14) {
       throw new Error(`Expected eight individual tags at ${id}; got ${parts.length - 6}`);
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
         'British Television', 'British Sitcom', 'Comedy', 'Gimme Gimme Gimme',
         'BBC', '1999-2001', 'Jonathan Harvey Sitcom', group.topic,
         correctAnswer, ...specificTags
       ])],
       dailyEligible: true
     };
     index += 1;
     return item;
   })
 );

 const EXPECTED_COUNT = 66;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_11995' || questions[questions.length - 1].id !== 'tv_12060') {
   throw new Error('Unexpected question ID range');
 }
 if (new Set(questions.map(q => q.id)).size !== questions.length ||
     new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
   throw new Error('Duplicate question IDs or wording');
 }
 if (questions.some(q =>
   q.category !== 'Television' ||
   q.answers.length !== 4 ||
   !q.answers.includes(q.correctAnswer) ||
   q.tags.length < 16 ||
   q.tags.some(tag => !tag) ||
   q.dailyEligible !== true
 )) {
   throw new Error('Incomplete exported question metadata');
 }


// 21 November 2026 episode audit: 28 new questions; original 66 IDs unchanged.
// Supplementary material checked against the British Comedy Guide, TVDB and episode listings.
// Original tv_11995-tv_12060. Additions tv_35516-tv_35543.
const auditAdditions = [
  {
    "id": "tv_35516",
    "category": "Television",
    "question": "In Gimme Gimme Gimme, what does Jez initially pretend to be when Linda and Tom find him in their kitchen?",
    "answers": [
      "An undercover police officer",
      "A delivery driver",
      "A visiting estate agent"
    ],
    "correctAnswer": "An escort",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Who's That Boy?",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Jez Littlewood",
      "First episode deception",
      "New neighbour revealed",
      "Kitchen stranger",
      "Prank on flatmates",
      "Linda and Tom",
      "Suze's husband",
      "Series one opener",
      "Correct Answer: An escort"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35517",
    "category": "Television",
    "question": "What is the name of the Christian deliveryman Linda dates in Gimme Gimme Gimme's Legs And Co.?",
    "answers": [
      "Neville",
      "Pedro",
      "Rick"
    ],
    "correctAnswer": "Joe",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Legs And Co.",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Linda dating storyline",
      "Deliveryman boyfriend",
      "Christian character",
      "Tom's broken leg",
      "First series romance",
      "New relationship",
      "Joe and Linda",
      "1999 episode",
      "Correct Answer: Joe"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35518",
    "category": "Television",
    "question": "Which Oasis singer does Linda hope her sister Sugar can introduce her to in Gimme Gimme Gimme?",
    "answers": [
      "Noel Gallagher",
      "Damon Albarn",
      "Robbie Williams"
    ],
    "correctAnswer": "Liam Gallagher",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Do They Take Sugar?",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Sugar Walls",
      "Linda's famous sister",
      "Oasis",
      "Celebrity encounter",
      "Pop music cameo reference",
      "Sibling relationship",
      "Linda's wish",
      "1999 story",
      "Correct Answer: Liam Gallagher"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35519",
    "category": "Television",
    "question": "In Gimme Gimme Gimme, what do photographers wrongly think when Tom opens the door to Sugar Walls?",
    "answers": [
      "That he is Sugar's new manager",
      "That he is giving Sugar singing lessons",
      "That he is secretly a paparazzo"
    ],
    "correctAnswer": "That he is having an affair with Sugar",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Do They Take Sugar?",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Paparazzi at the flat",
      "Tom Farrell",
      "Sugar Walls",
      "Mistaken relationship",
      "Famous visitor",
      "Press misunderstanding",
      "Sister's arrival",
      "Celebrity gossip",
      "Correct Answer: That he is having an affair with Sugar"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35520",
    "category": "Television",
    "question": "What is the real name of Tom's nightclub pick-up Nino in Gimme Gimme Gimme?",
    "answers": [
      "Marco",
      "Tony",
      "Paolo"
    ],
    "correctAnswer": "Kevin",
    "difficulty": "Hard",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Saturday Night Diva",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Tom's night out",
      "Nino's identity",
      "Manchester connection",
      "Gay nightclub",
      "False Italian identity",
      "Dating comedy",
      "After-party revelation",
      "Series one",
      "Correct Answer: Kevin"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35521",
    "category": "Television",
    "question": "What is the first name of the American woman Tom marries in Gimme Gimme Gimme's first-series finale?",
    "answers": [
      "India",
      "Sharon",
      "Maddie"
    ],
    "correctAnswer": "Gloria",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: I Do I Do I Do",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Marriage of convenience",
      "American bride",
      "Tom Farrell",
      "Residency arrangement",
      "Series one finale",
      "Gloria and India",
      "Female guest character",
      "Immigration storyline",
      "Correct Answer: Gloria"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35522",
    "category": "Television",
    "question": "What is the name of Gloria's girlfriend in Gimme Gimme Gimme's marriage storyline?",
    "answers": [
      "Sugar",
      "Suze",
      "Maddie"
    ],
    "correctAnswer": "India",
    "difficulty": "Hard",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: I Do I Do I Do",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Gloria's girlfriend",
      "American visitor",
      "Tom's sham wedding",
      "Series one finale",
      "Relationship context",
      "Immigration plan",
      "Gloria and India",
      "Supporting character",
      "Correct Answer: India"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35523",
    "category": "Television",
    "question": "Which relation of Gloria attracts Linda's interest in Gimme Gimme Gimme's first-series finale?",
    "answers": [
      "Her father George",
      "Her cousin Neville",
      "Her uncle Pedro"
    ],
    "correctAnswer": "Her brother Vince",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: I Do I Do I Do",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Linda's attraction",
      "Gloria's brother",
      "Vince",
      "Marriage guest",
      "First series finale",
      "Family connection",
      "Romantic interest",
      "Tom's sham wedding",
      "Correct Answer: Her brother Vince"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35524",
    "category": "Television",
    "question": "What game do Linda and Tom end up playing together during Gimme Gimme Gimme's Millennium special?",
    "answers": [
      "Trivial Pursuit",
      "Monopoly",
      "Pictionary"
    ],
    "correctAnswer": "Charades",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Millennium",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "New Year's Eve at home",
      "Millennium celebration",
      "Unsuccessful party plans",
      "Flatmates stay in",
      "Party fantasy",
      "Holiday television special",
      "Linda and Tom together",
      "1999 special",
      "Correct Answer: Charades"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35525",
    "category": "Television",
    "question": "Why do Linda and Tom try to conceal Beryl's apparent death in Gimme Gimme Gimme's Stiff?",
    "answers": [
      "They are worried about losing a television role",
      "They are secretly planning her wedding",
      "They want to claim a lottery prize"
    ],
    "correctAnswer": "They are afraid of losing their home",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Stiff",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Apparent death",
      "Beryl Merit",
      "Fear of homelessness",
      "Coffin in living room",
      "Landlady's flat",
      "Concealment scheme",
      "Dark comedy",
      "Series two",
      "Correct Answer: They are afraid of losing their home"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35526",
    "category": "Television",
    "question": "Who unexpectedly attracts Linda's prison pen-pal when he arrives in Gimme Gimme Gimme?",
    "answers": [
      "Jez Littlewood",
      "Beryl Merit",
      "Sugar Walls"
    ],
    "correctAnswer": "Tom Farrell",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Prison Visitor",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Freddie Windrush",
      "Prison correspondence",
      "Romantic reversal",
      "Convicted killer",
      "Linda's admirer",
      "Tom attracts visitor",
      "Series two storyline",
      "Unexpected crush",
      "Correct Answer: Tom Farrell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35527",
    "category": "Television",
    "question": "What surprising truth is revealed about Tom's parents in Gimme Gimme Gimme's Dirty Thirty?",
    "answers": [
      "They are professional actors",
      "They are undercover detectives",
      "They are secretly divorced"
    ],
    "correctAnswer": "They are swingers",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Dirty Thirty",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Tom's parents",
      "Thirtieth birthday",
      "Prudish appearance",
      "Swingers revelation",
      "Family embarrassment",
      "Birthday visit",
      "Series two twist",
      "Secret lifestyle",
      "Correct Answer: They are swingers"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35528",
    "category": "Television",
    "question": "In Gimme Gimme Gimme's Dirty Thirty, whom does Tom ask Linda to seduce to discourage a parental visit?",
    "answers": [
      "His agent",
      "His landlord",
      "His cousin"
    ],
    "correctAnswer": "His father",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Dirty Thirty",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Tom Farrell",
      "Linda La Hughes",
      "Awkward parents",
      "Birthday scheme",
      "Seduction plan",
      "Family visit",
      "Series two subplot",
      "Secretive son",
      "Correct Answer: His father"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35529",
    "category": "Television",
    "question": "What kind of man does Tom wake up beside after a drunken night out in Gimme Gimme Gimme's Glad To Be Gay?",
    "answers": [
      "A football referee",
      "A travel agent",
      "A police detective"
    ],
    "correctAnswer": "A security guard",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Glad To Be Gay?",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Tom's night out",
      "Security guard Neville",
      "Morning-after shock",
      "Clubbing storyline",
      "Series two episode five",
      "Unexpected bedmate",
      "Gay dating",
      "Nightclub encounter",
      "Correct Answer: A security guard"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35530",
    "category": "Television",
    "question": "What is the occupation of the woman Linda wakes up beside in Gimme Gimme Gimme's Glad To Be Gay?",
    "answers": [
      "Hairdresser",
      "Firefighter",
      "Librarian"
    ],
    "correctAnswer": "Taxi driver",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Glad To Be Gay?",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Linda's night out",
      "Female cab driver",
      "Maddie",
      "Morning-after revelation",
      "Sexuality confusion",
      "Series two",
      "Clubbing storyline",
      "Unexpected encounter",
      "Correct Answer: Taxi driver"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35531",
    "category": "Television",
    "question": "Which actor plays Neville in Gimme Gimme Gimme's Glad To Be Gay?",
    "answers": [
      "Phil Daniels",
      "Mark Monero",
      "Morgan Jones"
    ],
    "correctAnswer": "David Schneider",
    "difficulty": "Hard",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Glad To Be Gay?",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "David Schneider",
      "Neville",
      "Guest actor",
      "Security guard",
      "2000 casting",
      "Series two guest role",
      "Male guest star",
      "Episode credits",
      "Correct Answer: David Schneider"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35532",
    "category": "Television",
    "question": "Which actress plays Maddie in Gimme Gimme Gimme's Glad To Be Gay?",
    "answers": [
      "Beth Goddard",
      "Elaine Lordan",
      "Doña Croll"
    ],
    "correctAnswer": "Moya Brady",
    "difficulty": "Hard",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Glad To Be Gay?",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Moya Brady",
      "Maddie",
      "Guest actress",
      "Female cab driver",
      "2000 casting",
      "Series two guest role",
      "Linda's date",
      "Episode credits",
      "Correct Answer: Moya Brady"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35533",
    "category": "Television",
    "question": "For what offence is Linda arrested in Gimme Gimme Gimme's Glad To Be Gay?",
    "answers": [
      "Shoplifting",
      "Trespassing",
      "Vandalism"
    ],
    "correctAnswer": "Soliciting",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Glad To Be Gay?",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Linda La Hughes",
      "Arrest",
      "Soliciting misunderstanding",
      "Beryl's past profession",
      "Series two plot",
      "Police encounter",
      "Public street incident",
      "2000 episode",
      "Correct Answer: Soliciting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35534",
    "category": "Television",
    "question": "What type of job does Linda take in Gimme Gimme Gimme's Sofa Man?",
    "answers": [
      "School playground supervision",
      "Hotel reception work",
      "Radio station presenting"
    ],
    "correctAnswer": "Factory production-line work",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Sofa Man",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Linda employment",
      "Factory job",
      "Production line",
      "Mashed potato",
      "Series two",
      "Parallel to Tom's advert",
      "Workplace comedy",
      "2000 episode",
      "Correct Answer: Factory production-line work"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35535",
    "category": "Television",
    "question": "What is the first name of the factory colleague Linda fancies in Gimme Gimme Gimme's Sofa Man?",
    "answers": [
      "Bart",
      "Neville",
      "Pedro"
    ],
    "correctAnswer": "Ron",
    "difficulty": "Hard",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Sofa Man",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Ron",
      "Factory co-worker",
      "Linda's crush",
      "Production line",
      "Workplace romance",
      "Series two",
      "Linda employment",
      "2000 storyline",
      "Correct Answer: Ron"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35536",
    "category": "Television",
    "question": "What do Linda and Tom operate to raise money in Gimme Gimme Gimme's 2001 Comic Relief sketch?",
    "answers": [
      "A charity car wash",
      "A cake stall",
      "A sponsored karaoke contest"
    ],
    "correctAnswer": "A kissing booth",
    "difficulty": "Easy",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Comic Relief Special",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Charity fundraising",
      "Kissing booth",
      "Church setting",
      "Tom and Linda",
      "2001 short sketch",
      "Comic Relief",
      "Red Nose Day",
      "Special appearance",
      "Correct Answer: A kissing booth"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35537",
    "category": "Television",
    "question": "Who plays the nun in Gimme Gimme Gimme's Comic Relief special?",
    "answers": [
      "Su Pollard",
      "June Whitfield",
      "Mina Anwar"
    ],
    "correctAnswer": "Anna Nolan",
    "difficulty": "Hard",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Comic Relief Special",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Anna Nolan",
      "Nun",
      "Guest appearance",
      "Fundraising comedy",
      "Church sketch",
      "Comic Relief cast",
      "2001 broadcast",
      "Kissing booth",
      "Correct Answer: Anna Nolan"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35538",
    "category": "Television",
    "question": "Which Hollywood star is Tom hoping to share the stage with in Gimme Gimme Gimme's Lollipop Man story?",
    "answers": [
      "Hugh Grant",
      "Richard Gere",
      "Brad Pitt"
    ],
    "correctAnswer": "Tom Cruise",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: The Lollipop Man Cometh",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Tom Farrell",
      "Stage performance",
      "Tom Cruise reference",
      "Theatre role",
      "Celebrity co-star",
      "Series three",
      "Big acting opportunity",
      "2001 episode",
      "Correct Answer: Tom Cruise"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35539",
    "category": "Television",
    "question": "What makes Tom's theatrical debut go badly wrong in Gimme Gimme Gimme's Lollipop Man story?",
    "answers": [
      "His costume catches fire",
      "He arrives at the wrong theatre",
      "The audience walks out before the show starts"
    ],
    "correctAnswer": "He forgets his only line",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: The Lollipop Man Cometh",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Tom's stage role",
      "Forgotten dialogue",
      "Backstage drinking",
      "Linda in dressing room",
      "Failed performance",
      "Series three",
      "One line part",
      "Theatre mishap",
      "Correct Answer: He forgets his only line"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35540",
    "category": "Television",
    "question": "What is the name of the daytime television soap in which Tom acts during Gimme Gimme Gimme's Trauma?",
    "answers": [
      "The Ward",
      "Central Hospital",
      "Harbour View"
    ],
    "correctAnswer": "Doctor Deaf",
    "difficulty": "Hard",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Trauma",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Doctor Deaf",
      "Tom Farrell",
      "Daytime soap",
      "Television acting role",
      "Series three",
      "Career ambition",
      "Hospital episode",
      "2001 storyline",
      "Correct Answer: Doctor Deaf"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35541",
    "category": "Television",
    "question": "What type of stage production is Tom preparing for when he hires a singing teacher in Gimme Gimme Gimme?",
    "answers": [
      "An opera recital",
      "A classical concert",
      "A pantomime competition"
    ],
    "correctAnswer": "A musical",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Singing In The Drain",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Tom Farrell",
      "Singing teacher",
      "Heidi Honeycomb",
      "Musical theatre",
      "Vocal coaching",
      "Series three",
      "Acting career",
      "Stage role",
      "Correct Answer: A musical"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35542",
    "category": "Television",
    "question": "What is the embarrassing catch about Linda's fashion-show opportunity in Gimme Gimme Gimme's Singing In The Drain?",
    "answers": [
      "The show is actually a costume rehearsal",
      "The show is being filmed without an audience",
      "The show only uses child models"
    ],
    "correctAnswer": "The show is for deliberately unattractive models",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Singing In The Drain",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Linda's modelling job",
      "Fashion showcase",
      "Unflattering agency",
      "Suze's new business",
      "Series three",
      "Misunderstood opportunity",
      "Model recruitment",
      "2001 episode",
      "Correct Answer: The show is for deliberately unattractive models"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35543",
    "category": "Television",
    "question": "What does Suze suspect Jez of doing in the Gimme Gimme Gimme finale Decoy?",
    "answers": [
      "Secretly selling their flat",
      "Leaving London for a new job",
      "Hiding a gambling debt"
    ],
    "correctAnswer": "Having an affair",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "British Sitcom",
      "Comedy",
      "Gimme Gimme Gimme",
      "BBC",
      "1999-2001",
      "Jonathan Harvey Sitcom",
      "TV Programme: Gimme Gimme Gimme",
      "Episode: Decoy",
      "Episode Storyline",
      "Character and Casting",
      "2026-11-21 Audit",
      "Original Run Coverage",
      "Suze and Jez",
      "Suspicious partner",
      "Possible infidelity",
      "Linda's undercover role",
      "Series finale",
      "Relationship misunderstanding",
      "Investigative scheme",
      "2001 ending",
      "Correct Answer: Having an affair"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if (questions.length !== 94 ||
  new Set(questions.map(q => q.id)).size !== questions.length ||
  new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length ||
  questions.some(q => q.answers.length !== 4 ||
    q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
    new Set(q.answers).size !== 4 || !q.tags.includes('Gimme Gimme Gimme') ||
    q.tags.length < 16 || !q.dailyEligible)) {
  throw new Error('Pack 289 episode-audit validation failed');
}

 module.exports = questions;
