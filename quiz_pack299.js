
 // quiz_pack299.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: 30 Rock - Series Four (2009-2010)
 // Covers all 22 broadcast episodes and the season's principal characters.
 // Every question has seven individually selected specialist tags.
 // Leave quiz_bank.js unchanged until the agreed end-of-session connection.
 // Format: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven specific tags

 const groups = [
   {
     topic: 'New Cast Search: Season Four to Audition Day',
     year: '2009',
     facts: `What change does Jack demand for TGS at the start of the fourth series?|A new cast member|A new studio building|A permanent live audience|A new head writer|Easy|Season Four Premiere|Jack Donaghy|TGS Recruitment|New Cast|Network Demands|2009 Episode|Creative Changes
 Which two colleagues are sent to scout new TGS talent in the Series Four premiere?|Liz and Pete|Tracy and Jenna|Kenneth and Frank|Jack and Jonathan|Easy|Liz Lemon|Pete Hornberger|Talent Search|Season Four Premiere|TGS Auditions|Production Staff|2009 Story
 What workplace action does Kenneth organise during the Series Four premiere?|A page strike|A writers' walkout|A studio sit-in|A boycott of the canteen|Easy|Kenneth Parcell|NBC Pages|Industrial Action|Timecards Dispute|Season Four Premiere|Staff Protest|Workplace Conflict
 Which musical style does Jenna adopt to make herself more relatable to American viewers?|Country music|Opera|Heavy metal|Reggae|Easy|Jenna Maroney|Country Music|Image Makeover|Season Four Premiere|Mainstream Appeal|TGS Performer|Musical Reinvention
 Which former rival returns to trouble Jack in Into the Crevasse?|Devon Banks|Floyd DeBarber|Dennis Duffy|Gavin Volure|Easy|Devon Banks|Jack Donaghy|Into The Crevasse|Corporate Rival|GE Task Force|Return Appearance|Executive Conflict
 What publication angers Tracy after he recognises himself in Liz's relationship advice?|Her Dealbreakers book|A TGS annual|A fashion magazine|A newspaper editorial|Easy|Liz Lemon|Tracy Jordan|Dealbreakers Book|Into The Crevasse|Relationship Advice|Author Career|Personal Insult
 In which country does Jenna film a werewolf movie in Into the Crevasse?|Iceland|Canada|Norway|Ireland|Medium|Jenna Maroney|Werewolf Film|Iceland|Into The Crevasse|Film Career|Location Shoot|Outside TGS
 At what kind of charity does Kenneth volunteer in Into the Crevasse?|An animal shelter|A homeless hostel|A children's hospital|A food bank|Easy|Kenneth Parcell|Animal Shelter|Volunteering|Into The Crevasse|Charity Work|NBC Page|2009 Plot
 To which US state do Jack and Liz travel to find a new performer in Stone Mountain?|Georgia|Tennessee|Alabama|South Carolina|Easy|Stone Mountain|Georgia|Talent Search|Jack Donaghy|Liz Lemon|Kenneth Hometown|Southern United States
 What superstition worries Tracy after two famous people die in Stone Mountain?|Celebrities die in threes|Actors cannot wear green|Friday the thirteenth brings bad luck|A broken mirror causes bad luck|Easy|Tracy Jordan|Celebrity Deaths|Rule Of Threes|Stone Mountain|Superstition|Fame|2009 Story
 Whom does Jenna try to befriend to regain influence in Stone Mountain?|The TGS writers|The NBC executives|The building guards|The studio musicians|Easy|Jenna Maroney|TGS Writers|Stone Mountain|Office Alliances|Staff Relations|Sketch Comedy|Career Anxiety
 What is Liz and Pete's approach to the auditions in Audition Day?|They try to rig the selection|They cancel all auditions|They hand control to Kenneth|They insist on a public vote|Easy|Audition Day|Liz Lemon|Pete Hornberger|Rigged Auditions|Cast Selection|Workplace Scheme|2009 Episode
 What infestation causes colleagues to avoid Jack in Audition Day?|Bedbugs|Cockroaches|Mice|Fleas|Medium|Jack Donaghy|Bedbugs|Audition Day|Social Exclusion|Pest Infestation|Office Panic|2009 Story
 Which two existing TGS stars conduct their own search for a new performer in Audition Day?|Tracy and Jenna|Liz and Cerie|Pete and Frank|Kenneth and Toofer|Easy|Tracy Jordan|Jenna Maroney|Audition Day|Rival Talent Search|Casting Dispute|TGS Performers|Competing Choices`,
   },
   {
     topic: 'Danny Baker, Dealbreakers and Christmas',
     year: '2009',
     facts: `Who plays new TGS performer Danny Baker in the fourth series?|Cheyenne Jackson|Jon Hamm|Jason Sudeikis|Will Arnett|Easy|Cheyenne Jackson|Danny Baker|New TGS Cast|The Problem Solvers|Broadway Performer|Actor Casting|Series Four
 What is the new cast member Danny Baker's original first name?|Jack|David|Daniel|James|Hard|Jack Baker|Danny Baker|Renamed Performer|Jack Donaghy|The Problem Solvers|TGS Recruitment|Shared First Name
 Which character wants to develop Liz's Dealbreakers advice into a television talk show?|Jack Donaghy|Tracy Jordan|Pete Hornberger|Dennis Duffy|Easy|Jack Donaghy|Liz Lemon|Dealbreakers Show|The Problem Solvers|Television Development|Talk Show Offer|2009 Plot
 Which two performers style themselves as problem solvers during the new cast member's arrival?|Tracy and Jenna|Liz and Cerie|Frank and Toofer|Jack and Pete|Easy|Tracy Jordan|Jenna Maroney|The Problem Solvers|TGS Cast|Workplace Interference|Shared Scheme|2009 Episode
 What happens to Liz's apartment building in Sun Tea?|It is converted into condominiums|It is demolished|It becomes an office building|It is turned into a hotel|Easy|Liz Lemon|Sun Tea|Condominium Conversion|Housing|New York Apartment|Property Ownership|2009 Episode
 Which medical procedure do Jack and Tracy discuss with Dr Spaceman in Sun Tea?|A vasectomy|A tonsillectomy|A hip replacement|Laser eye surgery|Medium|Jack Donaghy|Tracy Jordan|Leo Spaceman|Sun Tea|Vasectomy Consultation|Fatherhood Decisions|Comic Medicine
 Which writer becomes Kenneth's unlikely ally in making TGS more environmentally friendly?|Frank Rossitano|Toofer Spurlock|Josh Girard|J D Lutz|Medium|Kenneth Parcell|Frank Rossitano|Sun Tea|Green Workplace|Environmental Campaign|Office Recycling|Staff Cooperation
 What sort of new programme is Liz filming in Dealbreakers Talk Show No. 0001?|A relationship advice talk show|A cooking competition|A police documentary|A children's game show|Easy|Liz Lemon|Dealbreakers|Talk Show Pilot|Studio Production|Relationship Advice|Television Host|2009 Episode
 What four-letter showbusiness honour does Tracy begin trying to achieve in Series Four?|EGOT|BAFT|OFTA|SAGT|Medium|Tracy Jordan|EGOT|Emmy Grammy Oscar Tony|Dealbreakers Talk Show|Awards Ambition|Acting Career|2009 Story
 Whom does Jack feel pressured by to make Liz's Dealbreakers programme successful?|Devon Banks|Don Geiss|Floyd DeBarber|Kenneth Parcell|Easy|Jack Donaghy|Devon Banks|Dealbreakers Talk Show|Network Pressure|Ratings Success|Programme Pilot|Corporate Rivalry
 Which actress plays Jack's former school sweetheart Nancy Donovan?|Julianne Moore|Elizabeth Banks|Salma Hayek|Carrie Fisher|Easy|Julianne Moore|Nancy Donovan|Secret Santa|Guest Casting|Jack Donaghy|Old Flame|2009 Romance
 How does Jack unexpectedly reconnect with Nancy in Secret Santa?|Through a social networking website|Through a mistaken hospital call|At a theatre premiere|During a TGS audition|Easy|Jack Donaghy|Nancy Donovan|Social Networking|Secret Santa|School Romance|Online Reunion|2009 Episode
 What festive arrangement does Kenneth try to organise at TGS in Secret Santa?|A Secret Santa gift exchange|A Christmas talent contest|A staff snowball fight|A festive charity run|Easy|Kenneth Parcell|Secret Santa|Gift Exchange|TGS Staff|Holiday Tradition|Office Christmas|2009 Episode
 Why do some writers invent a religion in Secret Santa?|To avoid Kenneth's gift exchange|To get invited to a wedding|To win a holiday competition|To secure an NBC pay rise|Medium|TGS Writers|Invented Religion|Secret Santa|Kenneth Parcell|Holiday Excuse|Staff Prank|Christmas Gift Swap
 Which employee does Pete enlist to get even with Jenna over her Christmas behaviour?|Danny Baker|Tracy Jordan|Jonathan|Devon Banks|Medium|Pete Hornberger|Danny Baker|Jenna Maroney|Secret Santa|Christmas Solo|Musical Revenge|TGS Performance`,
   },
   {
     topic: 'New Year, Boston and Verna',
     year: '2010',
     facts: `Which actor appears as himself in a staged publicity romance with Jenna in Klaus and Greta?|James Franco|Matt Damon|Ben Affleck|Paul Rudd|Easy|James Franco|Jenna Maroney|Klaus And Greta|Fake Relationship|Public Relations|Celebrity Guest|2010 Episode
 Whose voicemail does Jack desperately try to erase after a drunken New Year's message?|Nancy Donovan's|Avery Jessup's|Liz Lemon's|Bianca Donaghy's|Easy|Jack Donaghy|Nancy Donovan|Klaus And Greta|Drunken Voicemail|New Year|Regretted Message|Romantic Mistake
 What change in his family makes Tracy rethink his attitude towards women in Klaus and Greta?|He is expecting a daughter|He discovers a sister|His mother moves in|His niece becomes an actress|Easy|Tracy Jordan|Expected Daughter|Klaus And Greta|Family Growth|Attitude To Women|Angie Jordan|2010 Story
 Which relative of Liz visits New York after she inadvertently reveals his sexuality to his family?|Her cousin Randy|Her brother Mitch|Her uncle Harold|Her father Dick|Medium|Liz Lemon|Randy Lemon|Klaus And Greta|Family Visit|Coming Out|New York Trip|Personal Boundaries
 Who is jealous of Liz's growing closeness to Danny in Black Light Attack!?|Jack Donaghy|Kenneth Parcell|Pete Hornberger|Tracy Jordan|Easy|Jack Donaghy|Liz Lemon|Danny Baker|Black Light Attack|Workplace Jealousy|Interfering Boss|2010 Episode
 Which TGS writer does Tracy recruit into his personal entourage in Black Light Attack!?|Sue Laroche-Van der Hout|Cerie Xerox|Paula Hornberger|Kathy Geiss|Hard|Tracy Jordan|Sue Laroche Van Der Hout|Black Light Attack|Personal Entourage|Writers Room|New Recruit|2010 Story
 For which teen drama does Jenna audition in Black Light Attack!?|Gossip Girl|90210|The O.C.|One Tree Hill|Easy|Jenna Maroney|Gossip Girl|Black Light Attack|Acting Audition|Teen Drama|Guest Role|Career Setback
 To which city does Jack take the TGS team in Winter Madness?|Boston|Chicago|Philadelphia|Baltimore|Easy|Jack Donaghy|TGS Staff|Boston|Winter Madness|Travel Episode|New England|2010 Story
 Whom does Jack hope to spend time with during the trip in Winter Madness?|Nancy Donovan|Avery Jessup|Elisa Pedreira|Bianca Donaghy|Easy|Jack Donaghy|Nancy Donovan|Winter Madness|Old Romance|Boston Visit|Secret Motive|2010 Episode
 Who becomes the target of the staff's frustration during their difficult Boston visit?|Liz Lemon|Kenneth Parcell|Danny Baker|Jenna Maroney|Easy|Liz Lemon|TGS Staff|Winter Madness|Scapegoat|Boston Trip|Office Morale|Workplace Frustration
 Which of Jenna's relatives arrives unexpectedly in the episode Verna?|Her mother|Her sister|Her aunt|Her grandmother|Easy|Jenna Maroney|Verna Maroney|Mother Visit|Verna Episode|Family Relations|Unannounced Arrival|2010 Story
 Which actress plays Jenna's mother Verna?|Jan Hooks|Elaine Stritch|Anita Gillette|Megan Mullally|Medium|Jan Hooks|Verna Maroney|Jenna Mother|Verna Episode|Guest Casting|Family Comedy|2010 Appearance
 With which TGS writer does Liz make a pact to give up bad habits in Verna?|Frank Rossitano|Toofer Spurlock|Josh Girard|J D Lutz|Easy|Liz Lemon|Frank Rossitano|Bad Habits|Verna Episode|Roommates|Personal Improvement|2010 Episode
 Whom does Jack attempt to coach in handling a difficult mother in Verna?|Jenna Maroney|Liz Lemon|Tracy Jordan|Kenneth Parcell|Easy|Jack Donaghy|Jenna Maroney|Verna Maroney|Mother Daughter Conflict|Verna Episode|Personal Coaching|2010 Story`,
   },
   {
     topic: 'Valentine, Kabletown and Floyd',
     year: '2010',
     facts: `Which dental procedure does Liz deliberately schedule to avoid Valentine's Day in Anna Howard Shaw Day?|Oral surgery|Teeth whitening|A routine clean|An orthodontic fitting|Easy|Liz Lemon|Oral Surgery|Anna Howard Shaw Day|Valentines Avoidance|Dentist|Single Life|2010 Episode
 Which historical campaigner lends her name to Liz's alternative to Valentine's Day?|Anna Howard Shaw|Susan B Anthony|Amelia Earhart|Eleanor Roosevelt|Hard|Anna Howard Shaw|Women Suffrage|Valentines Day|Liz Lemon|Holiday Naming|American History|2010 Episode
 Which actress plays television financial journalist Avery Jessup?|Elizabeth Banks|Julianne Moore|Edie Falco|Emily Mortimer|Easy|Elizabeth Banks|Avery Jessup|CNBC Anchor|Jack Donaghy|Anna Howard Shaw Day|Guest Casting|2010 Romance
 Which singer makes a cameo as himself in Anna Howard Shaw Day?|Jon Bon Jovi|Bruce Springsteen|Billy Joel|Elton John|Medium|Jon Bon Jovi|Anna Howard Shaw Day|Musical Guest|NBC Celebrity|2010 Cameo|Rock Singer|Television Appearance
 Where does Liz first encounter the man she knows as Wesley in Future Husband?|At the dentist's surgery|On a train to Boston|At a TGS audition|At a wedding reception|Easy|Liz Lemon|Wesley Snipes|Dental Recovery|Future Husband|Chance Encounter|Romantic Interest|2010 Episode
 Which actor portrays Liz's unlikely romantic prospect Wesley Snipes?|Michael Sheen|Jon Hamm|Matt Damon|Jason Sudeikis|Easy|Michael Sheen|Wesley Snipes|Future Husband|Guest Actor|Liz Lemon|Dating Story|2010 Season
 What type of business is poised to buy NBC in Future Husband?|A cable television company|An airline|A pharmaceutical firm|A retail bank|Easy|NBC Sale|Cable Company|Kabletown|Future Husband|Jack Donaghy|Corporate Takeover|Network Ownership
 What prestigious theatre award does Jenna help Tracy pursue in Future Husband?|A Tony Award|An Olivier Award|A Golden Globe|A Peabody Award|Easy|Tracy Jordan|Jenna Maroney|Tony Award|Future Husband|EGOT Quest|Theatre Honours|Showbusiness Ambition
 Which fictional company becomes the new owner of NBC during Series Four?|Kabletown|Sheinhardt Global|Lemon Media|Donaghy Holdings|Easy|Kabletown|NBC Acquisition|Don Geiss America And Hope|Corporate Takeover|Television Industry|Jack Donaghy|2010 Plot
 Whose death leaves Jack mourning the loss of an influential mentor in Don Geiss, America and Hope?|Don Geiss|Devon Banks|Milton Greene|Pete Hornberger|Easy|Don Geiss|Jack Donaghy|Death Of Mentor|Don Geiss America And Hope|Corporate Leadership|Family Figure|2010 Episode
 What does Tracy's former nanny publish that causes trouble for him in Don Geiss, America and Hope?|An unflattering exposé|A children's picture book|A collection of recipes|A celebrity crossword book|Medium|Tracy Jordan|Former Nanny|Tell All Expose|Don Geiss America And Hope|Celebrity Reputation|Family Secrets|2010 Plot
 What coincidence makes Liz reconsider her attempts to avoid Wesley in Don Geiss, America and Hope?|Repeated chance meetings|They win a holiday together|He joins the TGS cast|They discover they are neighbours|Easy|Liz Lemon|Wesley Snipes|Repeated Encounters|Don Geiss America And Hope|Romantic Fate|Dating|2010 Story
 Which former boyfriend unexpectedly returns to Liz's life in the episode Floyd?|Floyd DeBarber|Dennis Duffy|Jamie|Stewart LaGrange|Easy|Floyd DeBarber|Liz Lemon|Floyd Episode|Returning Boyfriend|Old Romance|2010 Episode|Relationship News
 What significant relationship news does Floyd bring when he returns?|He is getting married|He has become a father|He has divorced|He is moving abroad alone|Easy|Floyd DeBarber|Engagement News|Floyd Episode|Liz Lemon|Former Partner|Upcoming Wedding|2010 Plot
 Who is caught in the writers' escalating prank war in Floyd?|Danny Baker|Devon Banks|Don Geiss|Wesley Snipes|Medium|Danny Baker|TGS Writers|Prank War|Floyd Episode|Jack Donaghy|Office Humour|Workplace Rivalry
 Whose lengthy childhood stories leave Tracy and Jenna exhausted in Floyd?|Kenneth Parcell's|Liz Lemon's|Pete Hornberger's|Jack Donaghy's|Easy|Kenneth Parcell|Tracy Jordan|Jenna Maroney|Floyd Episode|Childhood Memories|Long Stories|Dreams`,
   },
   {
     topic: 'Love Triangle, Janitors and Argus',
     year: '2010',
     facts: `Which two women is Jack torn between in Lee Marvin vs. Derek Jeter?|Nancy and Avery|Liz and Jenna|Elisa and Bianca|C.C. and Phoebe|Easy|Jack Donaghy|Nancy Donovan|Avery Jessup|Love Triangle|Lee Marvin Vs Derek Jeter|Romantic Decision|2010 Episode
 Where does Liz attend singles events in Lee Marvin vs. Derek Jeter?|The YMCA|A museum|An airport lounge|A television studio|Easy|Liz Lemon|YMCA|Singles Events|Lee Marvin Vs Derek Jeter|Dating Attempts|Jenna Maroney|2010 Story
 Which TGS writer questions whether affirmative action influenced his hiring in Lee Marvin vs. Derek Jeter?|Toofer Spurlock|Frank Rossitano|J D Lutz|Sue Laroche-Van der Hout|Medium|Toofer Spurlock|Affirmative Action|Lee Marvin Vs Derek Jeter|Hiring Dispute|Writers Room|Resignation|Workplace Policy
 Which pair of employees are disputing work shifts in Khonani?|Two janitors|Two NBC pages|Two newsreaders|Two security guards|Easy|Khonani|Janitor Shift Dispute|Jack Donaghy|Building Staff|Workplace Scheduling|2010 Episode|Office Conflict
 What does Liz discover the TGS staff have been doing without her in Khonani?|Going out together after work|Holding secret auditions|Selling old costumes|Practising for a marathon|Easy|Liz Lemon|TGS Staff|After Work Gatherings|Khonani|Social Exclusion|Office Friendships|2010 Episode
 Which colleague's pre-wedding celebration does Liz host in Khonani?|Cerie Xerox's|Jenna Maroney's|Angie Jordan's|Nancy Donovan's|Medium|Cerie Xerox|Hen Party|Liz Lemon|Khonani|Staff Socialising|Upcoming Wedding|2010 Plot
 What does Jack inherit from Don Geiss in Argus?|A peacock|An antique piano|A vintage sports car|A racehorse|Easy|Jack Donaghy|Don Geiss|Peacock Argus|Unexpected Inheritance|Argus Episode|Mentor Legacy|2010 Story
 What is the name of the bird that Jack inherits in Argus?|Argus|Apollo|Jasper|Percy|Medium|Argus Peacock|Don Geiss|Jack Donaghy|Inherited Pet|Argus Episode|Symbolic Gift|Animal Character
 Which actor plays Jenna's new boyfriend Paul L'Astname?|Will Forte|Cheyenne Jackson|Jason Sudeikis|Michael Sheen|Medium|Will Forte|Paul Lastname|Jenna Maroney|Argus Episode|Guest Casting|Romantic Relationship|2010 Character
 Which two men compete to be Grizz's best man for his wedding in Argus?|Tracy and Dot Com|Jack and Pete|Danny and Kenneth|Frank and Toofer|Easy|Grizz Griswold|Tracy Jordan|Dot Com Slattery|Argus Episode|Best Man Dispute|Upcoming Wedding|Entourage Rivalry`,
   },
   {
     topic: 'Mothers, Weddings and the Series Four Finale',
     year: '2010',
     facts: `Which astronaut makes a guest appearance as a former romantic interest of Liz's mother in The Moms?|Buzz Aldrin|Neil Armstrong|John Glenn|Michael Collins|Medium|Buzz Aldrin|Margaret Lemon|The Moms|Astronaut Cameo|Old Romance|Family History|2010 Episode
 Which character's mother Colleen complicates his relationships in The Moms?|Jack Donaghy's|Tracy Jordan's|Pete Hornberger's|Kenneth Parcell's|Easy|Colleen Donaghy|Jack Donaghy|The Moms|Nancy Donovan|Avery Jessup|Motherly Interference|Love Triangle
 Which actress returns as Jenna's mother Verna during The Moms?|Jan Hooks|Elaine Stritch|Anita Gillette|Patti LuPone|Medium|Jan Hooks|Verna Maroney|Jenna Mother|The Moms|Returning Guest|Family Conflict|2010 Episode
 What sort of performer does Tracy hire to pose as a motherly figure in The Moms?|An actress|A singer|A stand-up comedian|A television presenter|Medium|Tracy Jordan|Hired Mother Figure|The Moms|Actress|Family Lessons|Personal Growth|2010 Plot
 Whose wedding creates a dating dilemma for Liz in Emmanuelle Goes to Dinosaur Land?|Floyd DeBarber's|Jack Donaghy's|Kenneth Parcell's|Danny Baker's|Easy|Floyd DeBarber|Liz Lemon|Wedding Date|Emmanuelle Goes To Dinosaur Land|Former Boyfriend|Romantic Awkwardness|2010 Episode
 Who does Liz repeatedly encounter while revisiting her former relationships in Emmanuelle Goes to Dinosaur Land?|Wesley Snipes|Devon Banks|Milton Greene|Don Geiss|Easy|Wesley Snipes|Liz Lemon|Repeated Meetings|Emmanuelle Goes To Dinosaur Land|Old Boyfriends|Dating Fate|2010 Story
 Which animated cat franchise offers Tracy a less prestigious film project as he chases an Oscar?|Garfield|Tom and Jerry|Felix the Cat|Top Cat|Medium|Tracy Jordan|Garfield Film|EGOT Quest|Emmanuelle Goes To Dinosaur Land|Oscar Ambition|Film Career|2010 Plot
 Which actor plays the airline pilot Carol Burnett, whom Liz meets in the Series Four finale?|Matt Damon|Michael Sheen|Jon Hamm|Will Arnett|Easy|Matt Damon|Carol Burnett|Airline Pilot|I Do Do|Liz Lemon|Guest Casting|Season Finale
 What is Carol Burnett's profession in I Do Do?|Airline pilot|Radio host|Architect|Doctor|Easy|Carol Burnett|Airline Pilot|Matt Damon|I Do Do|New Romance|Liz Lemon|Character Occupation
 Which woman does Jack finally choose at the end of the Series Four love triangle?|Avery Jessup|Nancy Donovan|Elisa Pedreira|C.C. Cunningham|Easy|Jack Donaghy|Avery Jessup|Nancy Donovan|I Do Do|Love Triangle Resolution|Romantic Decision|Season Finale
 Which city is Kenneth threatened with a work transfer to in I Do Do?|Los Angeles|Chicago|Boston|Philadelphia|Easy|Kenneth Parcell|Los Angeles|Job Transfer|I Do Do|NBC Page Programme|Career Crisis|Season Finale
 Whose wedding is among the several ceremonies Liz attends in I Do Do?|Cerie Xerox's|Jenna Maroney's|Jack Donaghy's|Kenneth Parcell's|Easy|Cerie Xerox|I Do Do|Wedding Marathon|Liz Lemon|TGS Staff|Season Finale|Marriage Ceremony
 How many episodes aired in the fourth series of 30 Rock?|22|15|18|26|Easy|Season Four|Twenty Two Episodes|2009 2010|NBC Broadcast|Episode Count|Television History|American Sitcom
 Which month and year saw the original American broadcast of the Series Four finale I Do Do?|May 2010|April 2009|November 2010|February 2011|Medium|May 2010|I Do Do|Season Four Finale|Original Airdate|NBC Broadcast|Series Timeline|Television Schedule`,
   },
 ];

 const FIRST_ID = 12747;
 let index = 0;
 const questions = groups.flatMap(group =>
   group.facts.trim().split('\n').map(line => {
     const parts = line.trim().split('|').map(part => part.trim());
     const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
     if (parts.length !== 13) {
       throw new Error(`Expected seven specialist tags at ${id}; got ${parts.length - 6}`);
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
       throw new Error(`Invalid difficulty or specialist tags at ${id}`);
     }
     const answers = [...wrongAnswers];
     answers.splice(index % 4, 0, correctAnswer);
     const tags = [...new Map([
       'American Television', 'American Sitcom', '30 Rock', 'NBC',
       '2009-2010', group.year, group.year === '2009' ? '2000s' : '2010s',
       'Season Four', 'Workplace Comedy',
       'Sketch Comedy', 'Comedy Series', group.topic, correctAnswer, ...specificTags
     ].map(tag => [tag.toLowerCase(), tag])).values()];
     const item = { id, category: 'Television', question, answers, correctAnswer, difficulty, tags, dailyEligible: true };
     index++;
     return item;
   })
 );

 const EXPECTED_COUNT = 83;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_12747' ||
     questions[questions.length - 1].id !== 'tv_12829') {
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
 module.exports = questions;
