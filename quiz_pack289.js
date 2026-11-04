
 // quiz_pack289.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: Gimme Gimme Gimme (1999-2001)
 // Three BBC series, the 1999 Millennium episode, and the 2001 Comic Relief sketch.
 // Pack size is determined by distinct, verified material rather than a target.
 // Every question has eight individually selected subject-specific tags.
 // Do not connect quiz_bank.js until the agreed end-of-session update.
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

 module.exports = questions;
