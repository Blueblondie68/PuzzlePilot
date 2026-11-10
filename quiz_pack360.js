
  // quiz_pack360.js
  // PuzzlePilot — The Bigggggg Quiz
  // Television: The League of Gentlemen / The Mighty Boosh.
  // Both confirmed outstanding in the master programme spreadsheet.
  // References: British Comedy Guide cast, character and episode guides; BBC programme guides.
  // Every question: seven bespoke, question-specific tags plus shared metadata.
  // Full WordPad-ready CommonJS module. No external dependencies.

  const FIRST_ID = 17750;

  // Question | correct answer | three incorrect answers | difficulty | seven bespoke tags
  const leagueFacts = `In which fictional town is The League of Gentlemen set?|Royston Vasey|Hammersmith|Craggy Island|Royston Moor|Easy|Royston Vasey|Fictional Town|Northern Community|Series Setting|Local Residents|Dark Comedy|Location
  Which BBC channel originally broadcast The League of Gentlemen?|BBC Two|BBC One|BBC Three|Channel 4|Easy|BBC Two|Original Broadcast|Network|1999 Launch|Television Premiere|British Sketch Comedy|First Series
  In which year did The League of Gentlemen begin its BBC television run?|1999|1995|2002|2005|Easy|1999 Premiere|January Broadcast|First Television Series|BBC Comedy|Programme Launch|Nineties|Series Timeline
  How many regular television series of The League of Gentlemen were produced?|Three|Two|Four|Five|Medium|Three Regular Series|1999 To 2002|Programme Count|BBC Sitcom|Original Run|Series History|Broadcast Schedule
  Which of these writers was part of The League of Gentlemen but did not regularly play its characters on screen?|Jeremy Dyson|Mark Gatiss|Steve Pemberton|Reece Shearsmith|Medium|Jeremy Dyson|Writing Quartet|Offscreen Writer|Programme Creators|Script Team|Comedy Collective|Television Credits
  Who portrayed Tubbs Tattsyrup in The League of Gentlemen?|Steve Pemberton|Reece Shearsmith|Mark Gatiss|Jeremy Dyson|Easy|Steve Pemberton|Tubbs Tattsyrup|Local Shop|Actor Character|Lead Performer|Royston Vasey Resident|Casting
  Who played Edward Tattsyrup, Tubbs's partner in the Local Shop?|Reece Shearsmith|Steve Pemberton|Mark Gatiss|Paul Hays-Marshall|Easy|Reece Shearsmith|Edward Tattsyrup|Tubbs Partner|Local Shop Owner|Character Casting|Protective Shopkeeper|Royston Vasey
  What is the shop run by Tubbs and Edward commonly called?|The Local Shop|The Corner Emporium|The Village Bazaar|The Precious Mart|Easy|Local Shop|Tubbs And Edward|Village Retail|Recurring Setting|Local Customers|Shopkeepers|Royston Vasey
  Who played the Job Centre restart officer Pauline Campbell-Jones?|Steve Pemberton|Mark Gatiss|Reece Shearsmith|Jeremy Dyson|Easy|Steve Pemberton|Pauline Campbell Jones|Restart Officer|Job Centre|Actor Casting|Employment Course|Recurring Role
  Which office supply is Pauline Campbell-Jones especially fond of?|Pens|Staplers|Paper clips|Notebooks|Medium|Pauline Campbell Jones|Pens Collection|Job Centre Officer|Personal Obsession|Restart Course|Stationery|Character Trait
  Which character on Pauline's restart course dreams of becoming a fireman?|Mickey Michaels|Ross Gaines|Benjamin Denton|Geoff Tipps|Medium|Mickey Michaels|Firefighter Ambition|Pauline Course|Job Seeker|Mark Gatiss Role|Employment Training|Character Goal
  Which performer played Mickey Michaels, one of Pauline's trainees?|Mark Gatiss|Reece Shearsmith|Steve Pemberton|Paul Hays-Marshall|Medium|Mark Gatiss|Mickey Michaels|Trainee|Job Centre|Actor Role|Pauline Campbell Jones|Supporting Character
  Who played Ross Gaines, who challenges Pauline during her employment course?|Reece Shearsmith|Mark Gatiss|Steve Pemberton|Jeremy Dyson|Medium|Reece Shearsmith|Ross Gaines|Job Centre Course|Pauline Confrontation|Actor Casting|Training Scheme|Recurring Character
  Which visitor gets trapped in the Dentons' oppressive household during the first two series?|Benjamin Denton|Brian Morgan|Les McQueen|Geoff Tipps|Easy|Benjamin Denton|Denton Household|Harvey And Val|Nephew Visitor|Unwanted Stay|Series One|Family Rules
  Which actor played Benjamin Denton?|Reece Shearsmith|Mark Gatiss|Steve Pemberton|Jeremy Dyson|Medium|Reece Shearsmith|Benjamin Denton|Denton Nephew|Actor Casting|First Two Series|House Guest|Character Role
  Who portrayed Uncle Harvey Denton?|Steve Pemberton|Mark Gatiss|Reece Shearsmith|Jeremy Dyson|Medium|Steve Pemberton|Harvey Denton|Denton Uncle|Benjamin Relative|Actor Casting|Domestic Rules|Household Character
  Which performer played Auntie Val Denton?|Mark Gatiss|Steve Pemberton|Reece Shearsmith|Paul Hays-Marshall|Medium|Mark Gatiss|Val Denton|Denton Aunt|Benjamin Relative|Actor Casting|Family Home|Recurring Character
  What trade does the sinister Hilary Briss practise in Royston Vasey?|Butcher|Baker|Fishmonger|Chemist|Easy|Hilary Briss|Butcher Shop|Special Stuff|Sinister Meat|Town Trade|Royston Vasey|Character Occupation
  Who played the butcher Hilary Briss?|Mark Gatiss|Steve Pemberton|Reece Shearsmith|Jeremy Dyson|Medium|Mark Gatiss|Hilary Briss|Butcher Role|Actor Casting|Special Stuff|Royston Vasey Shop|Series One And Two
  Which phrase describes the mysterious product Hilary Briss sells to chosen customers?|Special stuff|Magic dust|Local blend|Golden cuts|Medium|Hilary Briss|Special Stuff|Secret Meat|Selected Customers|Butcher Counter|Dark Plot|Series Two Mystery
  Which actor portrayed the accident-prone vet Dr Chinnery?|Mark Gatiss|Reece Shearsmith|Steve Pemberton|Paul Hays-Marshall|Medium|Mark Gatiss|Dr Matthew Chinnery|Veterinary Surgery|Actor Casting|Animal Accidents|Recurring Sketch|Royston Vasey
  What is the occupation of the unlucky Dr Chinnery?|Veterinary surgeon|Dentist|Optician|School headteacher|Easy|Dr Chinnery|Veterinarian|Animals|Unfortunate Treatment|Recurring Character|Royston Vasey|Medical Mishaps
  Which former singer of Crème Brûlée keeps reminiscing about his musical past?|Les McQueen|Brian Morgan|Mickey Michaels|Lance Longthorne|Medium|Les McQueen|Creme Brulee|Former Singer|Seventies Band|Showbusiness Nostalgia|Mark Gatiss Character|Music Career
  Who portrayed the travelling circus character Papa Lazarou?|Reece Shearsmith|Mark Gatiss|Steve Pemberton|Jeremy Dyson|Easy|Reece Shearsmith|Papa Lazarou|Travelling Circus|Character Actor|Ringmaster|Series Two|Recurring Villain
  What is Papa Lazarou's role in his travelling show?|Circus ringmaster|Trapeze artist|Animal trainer|Ticket inspector|Medium|Papa Lazarou|Circus Ringmaster|Travelling Fair|Wife Collector|Series Two|Royston Vasey Visitor|Macabre Character
  What is the name of the inept local theatre company in the series?|Legz Akimbo|Footlights North|The Stage Door Players|Curtain Call Crew|Medium|Legz Akimbo|Theatre Company|School Performance|Drama Workshop|Ollie Plimsolls|Comedy Troupe|Royston Vasey
  Which actor played Legz Akimbo performer Ollie Plimsolls?|Reece Shearsmith|Mark Gatiss|Steve Pemberton|Jeremy Dyson|Hard|Reece Shearsmith|Ollie Plimsolls|Legz Akimbo|Theatre Performer|Actor Casting|Children Workshop|Stage Group
  Who is asked to act as best man for Mike Harris in the first series?|Geoff Tipps|Mickey Michaels|Ross Gaines|Benjamin Denton|Medium|Mike Harris Wedding|Geoff Tipps|Best Man|Love Comes To Royston Vasey|Series One|Disastrous Ceremony|Businessmen Friends
  What type of shop do Reenie and Vinnie volunteer in?|Charity shop|Pet shop|Toy shop|Bookshop|Medium|Reenie Calver|Vinnie Wythenshaw|Charity Shop|Volunteer Work|Second Series|Shop Assistants|Royston Vasey
  In the first episode, who comes to Royston Vasey to visit his friend and stay with relatives?|Benjamin Denton|Papa Lazarou|Lance Longthorne|Hilary Briss|Easy|Welcome To Royston Vasey|Benjamin Denton|New Arrival|Denton Family|Series Premiere|1999 Episode|Town Visitor
  What new transport project troubles residents during the first series?|A new road|A railway station|An airport runway|A canal|Medium|New Road Project|Series One Arc|Royston Vasey|Local Shop Opposition|Town Development|Construction|1999 Story
  What epidemic spreads across Royston Vasey during the second series?|Nosebleeds|Food poisoning|Measles|Sleepwalking|Medium|Nosebleed Epidemic|Series Two Story|Town Illness|Hilary Briss|2000 Episodes|Mysterious Outbreak|Royston Vasey
  Where does Pauline take a job serving food in the second series?|Burger Me!|The Local Shop|Crème Brûlée Café|The Lamb and Flag|Medium|Burger Me|Pauline Campbell Jones|Fast Food Job|Lust For Royston Vasey|Series Two|Employment Setback|Food Service
  Which German exchange-visit character arrives with students in the second series?|Herr Lipp|Papa Lazarou|Hilary Briss|Les McQueen|Medium|Herr Lipp|German Visitor|Exchange Students|Series Two|Steve Pemberton Role|Language Teacher|Visiting Group
  In the third series, which character is released from HMP Clitclink?|Pauline Campbell-Jones|Tubbs Tattsyrup|Judee Levinson|Vinnie Wythenshaw|Medium|Pauline Release|HMP Clitclink|The Lesbian And The Monkey|Series Three|Former Prisoner|Return To Town|2002 Story
  In The One-Armed Man Is King, who undergoes an arm transplant?|Lance Longthorne|Geoff Tipps|Brian Morgan|Les McQueen|Hard|Lance Longthorne|Arm Transplant|Joke Shop|Series Three|The One Armed Man Is King|Unusual Surgery|2002 Episode
  Which character heads to London hoping to become an entertainer in Turn Again Geoff Tipps?|Geoff Tipps|Mike Harris|Mickey Michaels|Benjamin Denton|Medium|Geoff Tipps|London Journey|Entertainment Ambition|Turn Again Geoff Tipps|Series Three|Job Loss|Showbusiness Dream
  In Beauty and the Beast, what new business does Judee Levinson launch?|A beauty salon|A bakery|A taxi firm|A butcher's shop|Medium|Judee Levinson|Beauty Salon|Series Three|Beauty And The Beast|Business Opening|Charlie Hull|2002 Episode
  What recurring objects help link the six stories of the third series?|A red bag and a van crash|A gold watch and a train|A green umbrella and a bicycle|A black suitcase and a boat|Hard|Red Bag|Van Crash|Series Three Structure|Linked Stories|2002 Episodes|Connecting Motifs|Narrative Device
  How many new anniversary episodes did The League of Gentlemen broadcast in 2017?|Three|One|Two|Six|Medium|Three Anniversary Specials|2017 Return|Royston Vasey|BBC Revival|Twentieth Anniversary|Reunion Episodes|Later Broadcast
  What threatens Royston Vasey's existence in the 2017 reunion specials?|Boundary changes|A volcanic eruption|A nationwide power cut|A dam collapse|Medium|2017 Specials|Boundary Changes|Town Future|Royston Vasey|Council Plans|Anniversary Return|Map Threat`;

  const booshFacts = `Which actor played Howard Moon in The Mighty Boosh?|Julian Barratt|Noel Fielding|Rich Fulcher|Matt Berry|Easy|Julian Barratt|Howard Moon|Lead Actor|Jazz Enthusiast|Main Character|BBC Comedy Cast|Double Act
  Who portrayed Vince Noir in The Mighty Boosh?|Noel Fielding|Julian Barratt|Michael Fielding|Rich Fulcher|Easy|Noel Fielding|Vince Noir|Lead Actor|Fashion Enthusiast|Main Character|Comedy Duo|Character Casting
  Who played the shaman Naboo in The Mighty Boosh?|Michael Fielding|Matt Berry|Rich Fulcher|Dave Brown|Easy|Michael Fielding|Naboo|Shaman Role|Main Cast|Actor Casting|Magic Character|Series Regular
  Which actor played Bob Fossil at the Zoo-Niverse?|Rich Fulcher|Julian Barratt|Dave Brown|Noel Fielding|Medium|Rich Fulcher|Bob Fossil|Zoo Manager|Actor Role|First Series|Workplace Character|Comedy Cast
  Which performer played zoo owner Dixon Bainbridge in the first regular series?|Matt Berry|Richard Ayoade|Julian Barratt|Simon Farnaby|Medium|Matt Berry|Dixon Bainbridge|Zoo Owner|Regular Series One|Actor Casting|Sinister Boss|Zoo Niverse
  Which BBC channel first showed The Mighty Boosh's television pilot and series?|BBC Three|BBC One|BBC Two|Channel 4|Easy|BBC Three|Original Network|Pilot Broadcast|Surreal Comedy|Television Debut|BBC Programme|2003 Trial
  In which year did The Mighty Boosh's first full television series debut?|2004|2001|2005|2007|Easy|2004 First Series|May Premiere|Eight Episodes|BBC Three|Original Season|Programme Timeline|Television Launch
  How many full television series of The Mighty Boosh were made?|Three|Two|Four|Five|Medium|Three Seasons|2004 To 2007|Series Count|BBC Cult Sitcom|Programme History|Original Production|Surreal Comedy
  Where do Howard and Vince work in the first series of The Mighty Boosh?|The Zoo-Niverse|A seaside hotel|A record shop|A hospital ward|Easy|Zoo Niverse|Zoo Keepers|Series One Setting|Howard And Vince|Animal Park|Dixon Bainbridge|Workplace
  How many episodes were made for The Mighty Boosh's first regular series?|Eight|Six|Ten|Twelve|Medium|Eight Episodes|Series One|2004 Broadcast|Programme Count|Zoo Niverse Stories|BBC Three|Original Season
  What year saw The Mighty Boosh's second television series premiere?|2005|2003|2006|2008|Medium|2005 Series Two|July Broadcast|Second Run|BBC Three|Programme Timeline|Flat Setting|Band Adventures
  What is the name of Naboo's shop in the third series?|Nabootique|The Local Shop|Fossil's Emporium|The Jazz Cellar|Medium|Nabootique|Naboo Shop|Series Three|Howard And Vince Jobs|Second Hand Store|Dalston|2007 Setting
  Which London neighbourhood is the third-series shop Nabootique in?|Dalston|Chelsea|Brixton|Hammersmith|Medium|Dalston|East London|Nabootique|Series Three Location|Second Hand Shop|Howard And Vince|Urban Setting
  What is the name of Naboo's gorilla familiar?|Bollo|Killeroo|Ivan|Joey Moose|Easy|Bollo|Naboo Familiar|Gorilla|Magic Companion|Animal Character|Shaman|Recurring Role
  Which actor played Bollo during the second and third series?|Dave Brown|Peter Elliott|Rich Fulcher|Michael Fielding|Hard|Dave Brown|Bollo Gorilla|Series Two And Three|Performer Credit|Animal Costume|Recurring Actor|Cast Change
  What animal is Howard forced to box in the first-series episode Killeroo?|A kangaroo|A gorilla|A bear|A rhinoceros|Easy|Killeroo|Kangaroo Boxing|Howard Moon|Bob Fossil|Illegal Fight|Series One Premiere|Animal Contest
  Whom does Howard hope to impress by taking part in the Killeroo boxing match?|Mrs Gideon|Naboo|Bollo|Dixon Bainbridge|Medium|Mrs Gideon|Howard Moon|Killeroo Episode|Head Of Reptiles|Romantic Interest|Zoo Niverse|Boxing Match
  What has been happening to the zoo's animals in Mutants?|They are disappearing|They are turning blue|They are refusing to eat|They are escaping to London|Medium|Mutants Episode|Missing Animals|Dixon Laboratory|Zoo Niverse|Howard And Vince|Series One|Secret Experiments
  What precious object do Howard and Vince seek in the episode Tundra?|The Egg of Mantumbi|The Crown of Kulu|The Ruby of Naboo|The Pearl of Mamba|Medium|Tundra Episode|Egg Of Mantumbi|Arctic Adventure|Dixon Bainbridge|Howard And Vince|Series One|Expedition Prize
  In Jungle, what does Dixon Bainbridge intend to do with the Zoo-Niverse?|Sell it|Turn it into a school|Expand it into a hotel|Move it to France|Medium|Jungle Episode|Dixon Bainbridge|Zoo Sale|Series One|Animal Park Future|Ownership Plan|2004 Story
  Which character tries to become a serious writer to impress Mrs Gideon in Charlie?|Howard Moon|Vince Noir|Bob Fossil|Naboo|Medium|Charlie Episode|Howard Moon|Writing Career|Mrs Gideon|Zoo Niverse|Series One|Literary Ambition
  What band does Vince consider joining in the episode Electro?|Kraftwork Orange|Crème Brûlée|The Black Tubes|The Bongo Brothers|Medium|Electro Episode|Kraftwork Orange|Vince Noir|Band Offer|Johnny Two Hats|Series One|Electronic Music
  What kind of animal is Ivan, whose behaviour troubles Bob Fossil in Hitcher?|A bear|A leopard|A penguin|An elephant|Medium|Hitcher Episode|Ivan The Bear|Bob Fossil|Animal Trouble|Zoo Niverse|Series One Finale|2004 Story
  Where do Howard and his friends stay during The Call of the Yeti?|A woodland log cabin|A seaside caravan|An Arctic research station|A mountain monastery|Medium|Call Of The Yeti|Log Cabin|Forest Break|Howard Moon|Naboo And Bollo|Series Two|Outdoor Trip
  Which duo are known as the Bongo Brothers in The Priest and the Beast?|Rudy Van Disarzio and Spider Dijon|Howard Moon and Bob Fossil|Bollo and Naboo|Dixon Bainbridge and Joey Moose|Hard|Bongo Brothers|Rudy Van Disarzio|Spider Dijon|Priest And The Beast|Series Two|Naboo Story|Musical Pair
  What supernatural ritual do Howard and Vince attempt to impress goth girls in Nanageddon?|A séance|A baptism|A rain dance|An exorcism|Easy|Nanageddon|Seance|Goth Girls|Howard And Vince|Series Two|Supernatural Mishap|Living Room
  What magical item takes the boys towards the Fountain of Youth?|Naboo's amulet|Bollo's necklace|A golden compass|Howard's saxophone|Medium|Fountain Of Youth|Naboo Amulet|Magical Journey|Howard Moon|Series Two|Age Anxiety|Youth Quest
  What unusual creature gives its name to The Legend of Old Gregg?|Old Gregg|The Crack Fox|The Hitcher|Tony Harrison|Medium|Old Gregg|Lake Creature|Legend Of Old Gregg|Series Two|Howard Moon|Fishing Adventure|Fantasy Character
  Where are Howard and Vince stranded in The Nightmare of Milky Joe?|On a desert island|In an abandoned castle|On a space station|In a cave|Medium|Nightmare Of Milky Joe|Desert Island|Howard Moon|Vince Noir|Series Two Finale|Marooned|Survival Comedy
  What sort of venture does Vince start while stranded in The Nightmare of Milky Joe?|A bamboo fashion line|A boat repair business|A miniature zoo|A seaside café|Medium|Nightmare Of Milky Joe|Vince Noir|Bamboo Fashion|Desert Island|Creative Project|Series Two|Survival
  Who goes on the Head Shaman's stag weekend at the start of series three?|Naboo and Bollo|Howard and Bob Fossil|Vince and Mrs Gideon|Dixon and the Hitcher|Medium|Eels Episode|Naboo And Bollo|Head Shaman Stag|Nabootique|Series Three Opener|Weekend Trip|Absent Shopkeepers
  What enters Vince's bloodstream after he bites a jazz record in Journey to the Centre of the Punk?|The Jazz Beast|The Crack Fox|Old Gregg|The Moon|Medium|Journey To The Centre Of The Punk|Jazz Beast|Vince Noir|Rare Record|Howard Moon|Series Three|Musical Infection
  Who copies Howard and Vince's style in The Power of the Crimp?|Flighty Zeus|Kraftwork Orange|The Bongo Brothers|The Electro Girls|Medium|Power Of The Crimp|Flighty Zeus|Stolen Style|Howard And Vince|Series Three|Rival Performers|Musical Routine
  What food does Vince offer the Crack Fox after bringing him into Nabootique?|Hot soup|A slice of cake|A cheese sandwich|A bowl of cereal|Medium|Crack Fox|Hot Soup|Nabootique Visit|Vince Noir|Series Three|Strange Guest|2007 Episode
  Which character is reluctant to celebrate his birthday in the episode Party?|Howard Moon|Vince Noir|Naboo|Bob Fossil|Medium|Party Episode|Howard Birthday|Vince Plan|Big Celebration|Series Three|House Party|2007 Episode
  Which venue hosts the comedy night Vince is MCing in The Chokes?|The Velvet Onion|The Lamb and Flag|The Zoo-Niverse|The Electric Lounge|Hard|The Chokes|Velvet Onion|Vince Noir|MC Role|Series Three Finale|Comedy Night|Stage Venue
  Who played the recurring talking Moon seen in The Mighty Boosh?|Noel Fielding|Julian Barratt|Rich Fulcher|Michael Fielding|Medium|Noel Fielding|The Moon|Surreal Interlude|Actor Casting|Second And Third Series|Talking Moon|Recurring Sketch
  Which actor also portrayed the menacing Crack Fox in series three?|Julian Barratt|Noel Fielding|Matt Berry|Rich Fulcher|Hard|Julian Barratt|Crack Fox|Actor Casting|Series Three|Fox Character|Nabootique Story|Multiple Roles
  Which of the two leading performers also plays the character Spider Dijon?|Noel Fielding|Julian Barratt|Rich Fulcher|Dave Brown|Hard|Noel Fielding|Spider Dijon|Bongo Brothers|Priest And The Beast|Series Two|Musician Character|Multiple Roles`;

  const normalise = value => value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
  const questions = [];

  function addProgramme(programme, sharedTags, sourceRows) {
    for (const line of sourceRows.trim().split('\n')) {
      const id = 'tv_' + String(FIRST_ID + questions.length).padStart(5, '0');
      const fields = line.trim().split('|').map(value => value.trim());
      if (fields.length !== 13) throw new Error('Pack 360: expected 13 fields for ' + id + ', got ' + fields.length);
      const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...bespokeTags] = fields;
      if ([question, correctAnswer, wrong1, wrong2, wrong3, ...bespokeTags].some(value => !value)) {
        throw new Error('Pack 360: empty question field for ' + id);
      }
      if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || bespokeTags.length !== 7 ||
          new Set(bespokeTags.map(normalise)).size !== 7) {
        throw new Error('Pack 360: invalid difficulty or bespoke tags for ' + id);
      }
      const answers = [wrong1, wrong2, wrong3];
      if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4) {
        throw new Error('Pack 360: repeated answer option for ' + id);
      }
      answers.splice(questions.length % 4, 0, correctAnswer);
      const tags = [...new Map([
        'Television', 'British Television', 'Comedy', 'Sitcom',
        ...sharedTags, programme, 'Programme: ' + programme,
        correctAnswer, ...bespokeTags
      ].map(tag => [normalise(tag), tag])).values()];
      questions.push({
        id, category: 'Television', programme, question, answers,
        correctAnswer, difficulty, tags, dailyEligible: true
      });
    }
  }

  addProgramme('The League of Gentlemen', ['BBC Two', '1999-2002', '2017 Specials', 'Dark Comedy', 'Royston Vasey'], leagueFacts);
  addProgramme('The Mighty Boosh', ['BBC Three', '2004-2007', 'Surreal Comedy', 'Noel Fielding', 'Julian Barratt'], booshFacts);

  // Validate the actual exported objects, not merely the source rows.
  if (!questions.length || questions[0].id !== 'tv_17750' ||
      new Set(questions.map(q => q.id)).size !== questions.length ||
      new Set(questions.map(q => normalise(q.question))).size !== questions.length ||
      questions.some((q, index) =>
        q.id !== 'tv_' + String(FIRST_ID + index).padStart(5, '0') ||
        q.category !== 'Television' || !q.programme ||
        !Array.isArray(q.answers) || q.answers.length !== 4 ||
        !q.answers.includes(q.correctAnswer) ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        !Array.isArray(q.tags) || q.tags.length < 14 ||
        new Set(q.tags.map(normalise)).size !== q.tags.length ||
        !q.tags.includes('Programme: ' + q.programme) ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) || q.dailyEligible !== true)) {
    throw new Error('Pack 360: exported question validation failed');
  }

  module.exports = questions;
