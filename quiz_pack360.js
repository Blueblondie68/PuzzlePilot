
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

  
  // Full narrative audit (21 Nov 2026): original historical IDs preserved.
  // Episode-specific facts checked against TVmaze episode guides and BCG character guide.
  const auditAdditions = [
  {
    "id": "tv_39130",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "Which of Benjamin Denton's friends visits the sinister Local Shop in the first episode of The League of Gentlemen?",
    "answers": [
      "Martin",
      "Ross",
      "Mickey",
      "Brian"
    ],
    "correctAnswer": "Martin",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 1, Welcome to Royston Vasey",
      "Story fact: Visitor to the Local Shop",
      "Correct answer: Martin",
      "Plot detail: Visitor to the Local Shop",
      "Royston Vasey",
      "Character and scene: Visitor to the Local Shop",
      "Episode coverage: Series 1, Welcome to Royston Vasey",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39131",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "What does Pauline resent one of her Job Centre trainees having in the first episode of The League of Gentlemen?",
    "answers": [
      "A new driving licence",
      "A job interview",
      "An inheritance",
      "A promotion at work"
    ],
    "correctAnswer": "A job interview",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 1, Welcome to Royston Vasey",
      "Story fact: Pauline opposes genuine employment",
      "Correct answer: A job interview",
      "Plot detail: Pauline opposes genuine employment",
      "Royston Vasey",
      "Character and scene: Pauline opposes genuine employment",
      "Episode coverage: Series 1, Welcome to Royston Vasey",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39132",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "Which character is a newsagent and an intrusive landlord in The League of Gentlemen?",
    "answers": [
      "Les McQueen",
      "Lance Longthorne",
      "Pop",
      "Geoff Tipps"
    ],
    "correctAnswer": "Pop",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 1, The Road to Royston Vasey",
      "Story fact: Newsagent landlord Pop",
      "Correct answer: Pop",
      "Plot detail: Newsagent landlord Pop",
      "Royston Vasey",
      "Character and scene: Newsagent landlord Pop",
      "Episode coverage: Series 1, The Road to Royston Vasey",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39133",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "Which kind of animal comes to an unfortunate end during Dr Chinnery's work in The League of Gentlemen episode Nightmare in Royston Vasey?",
    "answers": [
      "A budgerigar",
      "A guinea pig",
      "A goldfish",
      "A tortoise"
    ],
    "correctAnswer": "A tortoise",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 1, Nightmare in Royston Vasey",
      "Story fact: Veterinary mishap with tortoise",
      "Correct answer: A tortoise",
      "Plot detail: Veterinary mishap with tortoise",
      "Royston Vasey",
      "Character and scene: Veterinary mishap with tortoise",
      "Episode coverage: Series 1, Nightmare in Royston Vasey",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39134",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "What type of audience sees a disastrous Legz Akimbo performance in The Beast of Royston Vasey?",
    "answers": [
      "Schoolchildren",
      "Retirement-home residents",
      "Police recruits",
      "Local councillors"
    ],
    "correctAnswer": "Schoolchildren",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 1, The Beast of Royston Vasey",
      "Story fact: Theatre group performs for school",
      "Correct answer: Schoolchildren",
      "Plot detail: Theatre group performs for school",
      "Royston Vasey",
      "Character and scene: Theatre group performs for school",
      "Episode coverage: Series 1, The Beast of Royston Vasey",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39135",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "Who is Mike Harris preparing to marry when he makes Geoff Tipps his best man?",
    "answers": [
      "Pauline",
      "Cheryl",
      "Vinnie",
      "Bernice"
    ],
    "correctAnswer": "Cheryl",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 1, Love Comes to Royston Vasey",
      "Story fact: Mike and Cheryl wedding plans",
      "Correct answer: Cheryl",
      "Plot detail: Mike and Cheryl wedding plans",
      "Royston Vasey",
      "Character and scene: Mike and Cheryl wedding plans",
      "Episode coverage: Series 1, Love Comes to Royston Vasey",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39136",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "Which farm animal makes Dr Chinnery's work especially disastrous in Escape from Royston Vasey?",
    "answers": [
      "A horse with a broken leg",
      "A goat with an infected hoof",
      "A calving cow",
      "A pregnant ewe"
    ],
    "correctAnswer": "A calving cow",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 1, Escape from Royston Vasey",
      "Story fact: Veterinary visit to calving cow",
      "Correct answer: A calving cow",
      "Plot detail: Veterinary visit to calving cow",
      "Royston Vasey",
      "Character and scene: Veterinary visit to calving cow",
      "Episode coverage: Series 1, Escape from Royston Vasey",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39137",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "What humiliating change in circumstances does Pauline Campbell-Jones face at the start of series two?",
    "answers": [
      "She becomes the local mayor",
      "She is appointed police chief",
      "She inherits a private school",
      "She has to claim unemployment benefits herself"
    ],
    "correctAnswer": "She has to claim unemployment benefits herself",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 2, Destination Royston Vasey",
      "Story fact: Former restart officer becomes unemployed",
      "Correct answer: She has to claim unemployment benefits herself",
      "Plot detail: Former restart officer becomes unemployed",
      "Royston Vasey",
      "Character and scene: Former restart officer becomes unemployed",
      "Episode coverage: Series 2, Destination Royston Vasey",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39138",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "From which German city does Herr Lipp visit Royston Vasey on a student exchange?",
    "answers": [
      "Duisburg",
      "Munich",
      "Hamburg",
      "Cologne"
    ],
    "correctAnswer": "Duisburg",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 2, Lust for Royston Vasey",
      "Story fact: Herr Lipp's hometown",
      "Correct answer: Duisburg",
      "Plot detail: Herr Lipp's hometown",
      "Royston Vasey",
      "Character and scene: Herr Lipp's hometown",
      "Episode coverage: Series 2, Lust for Royston Vasey",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39139",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "What sort of professional gathering do Geoff, Mike and Brian take a disastrous detour on the way to?",
    "answers": [
      "A medical conference",
      "A plastics convention",
      "A train drivers' reunion",
      "A gardeners' exhibition"
    ],
    "correctAnswer": "A plastics convention",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 2, Death in Royston Vasey",
      "Story fact: Business trip detour",
      "Correct answer: A plastics convention",
      "Plot detail: Business trip detour",
      "Royston Vasey",
      "Character and scene: Business trip detour",
      "Episode coverage: Series 2, Death in Royston Vasey",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39140",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "What has happened to Les McQueen's old band Crème Brûlée without his knowledge?",
    "answers": [
      "It has won Eurovision",
      "It has changed its name to Oasis",
      "It has reunited without him",
      "It has bought a recording studio"
    ],
    "correctAnswer": "It has reunited without him",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 2, Anarchy in Royston Vasey",
      "Story fact: Band reunion excludes former member",
      "Correct answer: It has reunited without him",
      "Plot detail: Band reunion excludes former member",
      "Royston Vasey",
      "Character and scene: Band reunion excludes former member",
      "Episode coverage: Series 2, Anarchy in Royston Vasey",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39141",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "What happens to Royston Vasey as the mysterious nosebleed illness worsens?",
    "answers": [
      "The town hosts a health fair",
      "The mayor closes the local shop",
      "The council moves the population to Scotland",
      "The town is quarantined"
    ],
    "correctAnswer": "The town is quarantined",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 2, Royston Vasey and the Monster from Hell",
      "Story fact: Public health isolation",
      "Correct answer: The town is quarantined",
      "Plot detail: Public health isolation",
      "Royston Vasey",
      "Character and scene: Public health isolation",
      "Episode coverage: Series 2, Royston Vasey and the Monster from Hell",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39142",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "Which Royston Vasey resident listens to three disturbing stories on Christmas Eve in the 2000 special?",
    "answers": [
      "Vicar Bernice Woodall",
      "Pauline Campbell-Jones",
      "Tubbs Tattsyrup",
      "Iris Krell"
    ],
    "correctAnswer": "Vicar Bernice Woodall",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Christmas Special",
      "Story fact: Parishioners' Christmas stories",
      "Correct answer: Vicar Bernice Woodall",
      "Plot detail: Parishioners' Christmas stories",
      "Royston Vasey",
      "Character and scene: Parishioners' Christmas stories",
      "Episode coverage: Christmas Special",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39143",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "Which activity is central to Charlie Hull's tale of revenge in The League of Gentlemen Christmas special?",
    "answers": [
      "Ballroom tango",
      "Line dancing",
      "Bingo calling",
      "Morris dancing"
    ],
    "correctAnswer": "Line dancing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Christmas Special",
      "Story fact: Charlie and Stella dancing contest",
      "Correct answer: Line dancing",
      "Plot detail: Charlie and Stella dancing contest",
      "Royston Vasey",
      "Character and scene: Charlie and Stella dancing contest",
      "Episode coverage: Christmas Special",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39144",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "Whose family is condemned by a curse after an incident involving his ancestor in the Christmas special?",
    "answers": [
      "Edward Tattsyrup's",
      "Geoff Tipps's",
      "Dr Chinnery's",
      "Benjamin Denton's"
    ],
    "correctAnswer": "Dr Chinnery's",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Christmas Special",
      "Story fact: Inherited veterinary curse",
      "Correct answer: Dr Chinnery's",
      "Plot detail: Inherited veterinary curse",
      "Royston Vasey",
      "Character and scene: Inherited veterinary curse",
      "Episode coverage: Christmas Special",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39145",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "What sort of party does the heavily pregnant Barbara throw in series three of The League of Gentlemen?",
    "answers": [
      "A retirement party",
      "A children's birthday party",
      "A mayoral election party",
      "A gender-bender party"
    ],
    "correctAnswer": "A gender-bender party",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 3, The Lesbian and the Monkey",
      "Story fact: Barbara hosts costume party",
      "Correct answer: A gender-bender party",
      "Plot detail: Barbara hosts costume party",
      "Royston Vasey",
      "Character and scene: Barbara hosts costume party",
      "Episode coverage: Series 3, The Lesbian and the Monkey",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39146",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "Which type of shop does Lance Longthorne run before his disastrous arm transplant?",
    "answers": [
      "A joke shop",
      "A butcher's shop",
      "A florist's shop",
      "A music shop"
    ],
    "correctAnswer": "A joke shop",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 3, The One-Armed Man Is King",
      "Story fact: Lance's joke-shop trade",
      "Correct answer: A joke shop",
      "Plot detail: Lance's joke-shop trade",
      "Royston Vasey",
      "Character and scene: Lance's joke-shop trade",
      "Episode coverage: Series 3, The One-Armed Man Is King",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39147",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "Which intimidating figure terrorises the debt collectors Glen and Big Barry in The League of Gentlemen?",
    "answers": [
      "Pop",
      "Lisgoe",
      "Herr Lipp",
      "Dr Carlton"
    ],
    "correctAnswer": "Lisgoe",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 3, The One-Armed Man Is King",
      "Story fact: Debt collectors face Lisgoe",
      "Correct answer: Lisgoe",
      "Plot detail: Debt collectors face Lisgoe",
      "Royston Vasey",
      "Character and scene: Debt collectors face Lisgoe",
      "Episode coverage: Series 3, The One-Armed Man Is King",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39148",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "Why does Geoff Tipps decide to pursue showbusiness in London in series three?",
    "answers": [
      "He has inherited a theatre",
      "His television pilot has been commissioned",
      "He has been fired from his job",
      "His band has signed a contract"
    ],
    "correctAnswer": "He has been fired from his job",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 3, Turn Again Geoff Tipps",
      "Story fact: Geoff's job loss prompts ambition",
      "Correct answer: He has been fired from his job",
      "Plot detail: Geoff's job loss prompts ambition",
      "Royston Vasey",
      "Character and scene: Geoff's job loss prompts ambition",
      "Episode coverage: Series 3, Turn Again Geoff Tipps",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39149",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "What ordinary place would Alvin rather visit than join the activities at his and Sunny's bed-and-breakfast?",
    "answers": [
      "A bowling alley",
      "A library",
      "A railway museum",
      "A garden centre"
    ],
    "correctAnswer": "A garden centre",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 3, The Medusa Touch",
      "Story fact: Alvin prefers gardening excursion",
      "Correct answer: A garden centre",
      "Plot detail: Alvin prefers gardening excursion",
      "Royston Vasey",
      "Character and scene: Alvin prefers gardening excursion",
      "Episode coverage: Series 3, The Medusa Touch",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39150",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "What unexpected skill brings Charlie Hull customers at Judee Levinson's new salon?",
    "answers": [
      "Massage",
      "Hair colouring",
      "Manicure painting",
      "Make-up artistry"
    ],
    "correctAnswer": "Massage",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 3, Beauty and the Beast",
      "Story fact: Charlie's salon employment",
      "Correct answer: Massage",
      "Plot detail: Charlie's salon employment",
      "Royston Vasey",
      "Character and scene: Charlie's salon employment",
      "Episode coverage: Series 3, Beauty and the Beast",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39151",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "Who replaces the missing Vinnie as Reenie's new colleague at the charity shop in the third-series finale?",
    "answers": [
      "Pop",
      "Keith Drop",
      "Ross Gaines",
      "Les McQueen"
    ],
    "correctAnswer": "Keith Drop",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 3, How the Elephant Got Its Trunk",
      "Story fact: Mysterious new volunteer",
      "Correct answer: Keith Drop",
      "Plot detail: Mysterious new volunteer",
      "Royston Vasey",
      "Character and scene: Mysterious new volunteer",
      "Episode coverage: Series 3, How the Elephant Got Its Trunk",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39152",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "Which sinister circus character makes a return as the third series' stories converge?",
    "answers": [
      "Mr Chinnery",
      "Mickey Michaels",
      "Papa Lazarou",
      "Ollie Plimsolls"
    ],
    "correctAnswer": "Papa Lazarou",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Series 3, How the Elephant Got Its Trunk",
      "Story fact: Returning ringmaster",
      "Correct answer: Papa Lazarou",
      "Plot detail: Returning ringmaster",
      "Royston Vasey",
      "Character and scene: Returning ringmaster",
      "Episode coverage: Series 3, How the Elephant Got Its Trunk",
      "Source: https://www.tvmaze.com/shows/1720/the-league-of-gentlemen/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39153",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "Which Royston Vasey resident is the town's foul-mouthed vicar who later becomes mayor?",
    "answers": [
      "Judee Levinson",
      "Auntie Val",
      "Vinnie Wythenshaw",
      "Bernice Woodall"
    ],
    "correctAnswer": "Bernice Woodall",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Characters",
      "Story fact: Vicar later holds civic office",
      "Correct answer: Bernice Woodall",
      "Plot detail: Vicar later holds civic office",
      "Royston Vasey",
      "Character and scene: Vicar later holds civic office",
      "Episode coverage: Characters",
      "Source: https://www.comedy.co.uk/tv/the_league_of_gentlemen/characters/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39154",
    "category": "Television",
    "programme": "The League of Gentlemen",
    "question": "What is Harvey Denton's particular animal obsession in The League of Gentlemen?",
    "answers": [
      "Toads",
      "Parrots",
      "Hedgehogs",
      "Badgers"
    ],
    "correctAnswer": "Toads",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The League of Gentlemen",
      "Programme: The League of Gentlemen",
      "BBC Two",
      "1999-2017",
      "Episode or context: Characters",
      "Story fact: Harvey's toad obsession",
      "Correct answer: Toads",
      "Plot detail: Harvey's toad obsession",
      "Royston Vasey",
      "Character and scene: Harvey's toad obsession",
      "Episode coverage: Characters",
      "Source: https://www.comedy.co.uk/tv/the_league_of_gentlemen/characters/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39155",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "Who helps prepare Howard for his boxing bout with Killeroo in The Mighty Boosh?",
    "answers": [
      "Naboo's shaman tutor",
      "Vince's bare-knuckle fighter uncle",
      "Bob Fossil's boxing promoter",
      "Dixon Bainbridge's chauffeur"
    ],
    "correctAnswer": "Vince's bare-knuckle fighter uncle",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: Killeroo",
      "Story fact: Howard's unconventional boxing trainer",
      "Correct answer: Vince's bare-knuckle fighter uncle",
      "Plot detail: Howard's unconventional boxing trainer",
      "Vince Noir and Howard Moon",
      "Character and scene: Howard's unconventional boxing trainer",
      "Episode coverage: Killeroo",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39156",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "Which missing Zoo-Niverse employee alarms Howard and Vince alongside the disappearing animals in The Mighty Boosh?",
    "answers": [
      "Tommy Nookah",
      "Hamilton Cork",
      "Joey Moose",
      "Johnny Two Hats"
    ],
    "correctAnswer": "Joey Moose",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: Mutants",
      "Story fact: Missing zookeeper",
      "Correct answer: Joey Moose",
      "Plot detail: Missing zookeeper",
      "Vince Noir and Howard Moon",
      "Character and scene: Missing zookeeper",
      "Episode coverage: Mutants",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39157",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "Whose python is reported stolen during the Zoo-Niverse disappearances in The Mighty Boosh?",
    "answers": [
      "Dixon Bainbridge's",
      "Naboo's",
      "Bob Fossil's",
      "Mrs Gideon's"
    ],
    "correctAnswer": "Mrs Gideon's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: Mutants",
      "Story fact: Stolen reptile",
      "Correct answer: Mrs Gideon's",
      "Plot detail: Stolen reptile",
      "Vince Noir and Howard Moon",
      "Character and scene: Stolen reptile",
      "Episode coverage: Mutants",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39158",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "Why does Howard wear a gorilla costume in The Mighty Boosh episode Bollo?",
    "answers": [
      "To impersonate the sick gorilla and maintain sponsorship",
      "To win a zoo fancy-dress contest",
      "To escape a police search",
      "To fool the head shaman"
    ],
    "correctAnswer": "To impersonate the sick gorilla and maintain sponsorship",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: Bollo",
      "Story fact: Sick gorilla impersonation",
      "Correct answer: To impersonate the sick gorilla and maintain sponsorship",
      "Plot detail: Sick gorilla impersonation",
      "Vince Noir and Howard Moon",
      "Character and scene: Sick gorilla impersonation",
      "Episode coverage: Bollo",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39159",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "Where does the Grim Reaper mistakenly take Howard after confusing him with Bollo in The Mighty Boosh?",
    "answers": [
      "The Arctic tundra",
      "Ape Hell",
      "Mirror World",
      "Xooberon"
    ],
    "correctAnswer": "Ape Hell",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: Bollo",
      "Story fact: Mistaken gorilla afterlife",
      "Correct answer: Ape Hell",
      "Plot detail: Mistaken gorilla afterlife",
      "Vince Noir and Howard Moon",
      "Character and scene: Mistaken gorilla afterlife",
      "Episode coverage: Bollo",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39160",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "Who is the caretaker of Mirror World whom Vince meets during his rescue mission in The Mighty Boosh?",
    "answers": [
      "Kodiak Jack",
      "Betamax",
      "Mr Susan",
      "Hamilton Cork"
    ],
    "correctAnswer": "Mr Susan",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: Bollo",
      "Story fact: Guardian of Mirror World",
      "Correct answer: Mr Susan",
      "Plot detail: Guardian of Mirror World",
      "Vince Noir and Howard Moon",
      "Character and scene: Guardian of Mirror World",
      "Episode coverage: Bollo",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39161",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "Which icy demon confronts Howard and Vince as they search for the Egg of Mantumbi in The Mighty Boosh?",
    "answers": [
      "Sandstorm",
      "The Hitcher",
      "The Jazz Beast",
      "Black Frost"
    ],
    "correctAnswer": "Black Frost",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: Tundra",
      "Story fact: Demon on tundra expedition",
      "Correct answer: Black Frost",
      "Plot detail: Demon on tundra expedition",
      "Vince Noir and Howard Moon",
      "Character and scene: Demon on tundra expedition",
      "Episode coverage: Tundra",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39162",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "Which kind of wild animal befriends Vince during the Mighty Boosh Arctic adventure?",
    "answers": [
      "A polar bear",
      "An Arctic fox",
      "A seal",
      "A reindeer"
    ],
    "correctAnswer": "A polar bear",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: Tundra",
      "Story fact: Vince makes an Arctic animal ally",
      "Correct answer: A polar bear",
      "Plot detail: Vince makes an Arctic animal ally",
      "Vince Noir and Howard Moon",
      "Character and scene: Vince makes an Arctic animal ally",
      "Episode coverage: Tundra",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39163",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "Which reclusive hero does Howard seek in the Zoo-Niverse's Jungle Room to stop its sale?",
    "answers": [
      "Johnny Two Hats",
      "Tommy Nookah",
      "Old Gregg",
      "Kodiak Jack"
    ],
    "correctAnswer": "Tommy Nookah",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: Jungle",
      "Story fact: Howard's jungle hero",
      "Correct answer: Tommy Nookah",
      "Plot detail: Howard's jungle hero",
      "Vince Noir and Howard Moon",
      "Character and scene: Howard's jungle hero",
      "Episode coverage: Jungle",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39164",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "Which publisher takes an interest in Vince's story rather than Howard's serious writing in The Mighty Boosh?",
    "answers": [
      "Jeremy Dyson",
      "Peter Tilbury",
      "Hamilton Cork",
      "Howard Goodall"
    ],
    "correctAnswer": "Hamilton Cork",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: Charlie",
      "Story fact: Vince's unexpected publishing contact",
      "Correct answer: Hamilton Cork",
      "Plot detail: Vince's unexpected publishing contact",
      "Vince Noir and Howard Moon",
      "Character and scene: Vince's unexpected publishing contact",
      "Episode coverage: Charlie",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39165",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "What sort of character is Charlie in the story Vince writes in The Mighty Boosh?",
    "answers": [
      "A clockwork kangaroo",
      "A talking polar bear",
      "A haunted cactus",
      "A pink bubblegum figure"
    ],
    "correctAnswer": "A pink bubblegum figure",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: Charlie",
      "Story fact: Vince's storybook character",
      "Correct answer: A pink bubblegum figure",
      "Plot detail: Vince's storybook character",
      "Vince Noir and Howard Moon",
      "Character and scene: Vince's storybook character",
      "Episode coverage: Charlie",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39166",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "Which musician works with the Electro Girls in the band Vince nearly joins in The Mighty Boosh?",
    "answers": [
      "Johnny Two Hats",
      "Rudy Van Disarzio",
      "Hamilton Cork",
      "Old Gregg"
    ],
    "correctAnswer": "Johnny Two Hats",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: Electro",
      "Story fact: Kraftwork Orange collaborator",
      "Correct answer: Johnny Two Hats",
      "Plot detail: Kraftwork Orange collaborator",
      "Vince Noir and Howard Moon",
      "Character and scene: Kraftwork Orange collaborator",
      "Episode coverage: Electro",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39167",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "What sort of institution is meant to receive the misbehaving bear Ivan in The Mighty Boosh?",
    "answers": [
      "A wildlife safari park",
      "An Animal Offenders Institute",
      "An animal hospital",
      "A circus training school"
    ],
    "correctAnswer": "An Animal Offenders Institute",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: Hitcher",
      "Story fact: Ivan's proposed destination",
      "Correct answer: An Animal Offenders Institute",
      "Plot detail: Ivan's proposed destination",
      "Vince Noir and Howard Moon",
      "Character and scene: Ivan's proposed destination",
      "Episode coverage: Hitcher",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39168",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "Who owns the woodland cabin where Howard and Vince go on holiday in The Mighty Boosh?",
    "answers": [
      "Tommy Nookah",
      "Dixon Bainbridge",
      "Kodiak Jack",
      "Mr Susan"
    ],
    "correctAnswer": "Kodiak Jack",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: Call of the Yeti",
      "Story fact: Owner of woodland cabin",
      "Correct answer: Kodiak Jack",
      "Plot detail: Owner of woodland cabin",
      "Vince Noir and Howard Moon",
      "Character and scene: Owner of woodland cabin",
      "Episode coverage: Call of the Yeti",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39169",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "What does Howard hope to obtain to prove the existence of the Yeti in The Mighty Boosh?",
    "answers": [
      "A tuft of fur",
      "An audio recording",
      "A footprint mould",
      "A photograph"
    ],
    "correctAnswer": "A photograph",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: Call of the Yeti",
      "Story fact: Howard's Yeti documentation",
      "Correct answer: A photograph",
      "Plot detail: Howard's Yeti documentation",
      "Vince Noir and Howard Moon",
      "Character and scene: Howard's Yeti documentation",
      "Episode coverage: Call of the Yeti",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39170",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "Which record label is Howard and Vince hoping will sign them in The Mighty Boosh?",
    "answers": [
      "Pie Face Records",
      "Sub Pop",
      "Island Records",
      "Mute Records"
    ],
    "correctAnswer": "Pie Face Records",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: The Priest and the Beast",
      "Story fact: Music industry ambitions",
      "Correct answer: Pie Face Records",
      "Plot detail: Music industry ambitions",
      "Vince Noir and Howard Moon",
      "Character and scene: Music industry ambitions",
      "Episode coverage: The Priest and the Beast",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39171",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "Which desert bandit do Rudy and Spider confront in Naboo's musical story in The Mighty Boosh?",
    "answers": [
      "Sandstorm",
      "Betamax",
      "Johnny Two Hats",
      "Mr Susan"
    ],
    "correctAnswer": "Betamax",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: The Priest and the Beast",
      "Story fact: Enemy of the Bongo Brothers",
      "Correct answer: Betamax",
      "Plot detail: Enemy of the Bongo Brothers",
      "Vince Noir and Howard Moon",
      "Character and scene: Enemy of the Bongo Brothers",
      "Episode coverage: The Priest and the Beast",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39172",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "What is the name of the evil elderly demon summoned during a séance in The Mighty Boosh?",
    "answers": [
      "Crack Fox",
      "Black Frost",
      "Nanatoo",
      "Old Gregg"
    ],
    "correctAnswer": "Nanatoo",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: Nanageddon",
      "Story fact: Demon summoned by séance",
      "Correct answer: Nanatoo",
      "Plot detail: Demon summoned by séance",
      "Vince Noir and Howard Moon",
      "Character and scene: Demon summoned by séance",
      "Episode coverage: Nanageddon",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39173",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "What magical object does Nanatoo steal after the séance in The Mighty Boosh?",
    "answers": [
      "The Egg of Mantumbi",
      "The Funk",
      "A bottle of Shaman Juice",
      "Naboo's book of black magic"
    ],
    "correctAnswer": "Naboo's book of black magic",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: Nanageddon",
      "Story fact: Stolen spellbook",
      "Correct answer: Naboo's book of black magic",
      "Plot detail: Stolen spellbook",
      "Vince Noir and Howard Moon",
      "Character and scene: Stolen spellbook",
      "Episode coverage: Nanageddon",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39174",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "Which planet is home to the mystical Fountain of Youth in The Mighty Boosh?",
    "answers": [
      "Xooberon",
      "Vulcan",
      "Gallifrey",
      "Tralfamadore"
    ],
    "correctAnswer": "Xooberon",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: Fountain of Youth",
      "Story fact: Location of youth quest",
      "Correct answer: Xooberon",
      "Plot detail: Location of youth quest",
      "Vince Noir and Howard Moon",
      "Character and scene: Location of youth quest",
      "Episode coverage: Fountain of Youth",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39175",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "What is the name of the Scottish lake where Howard encounters Old Gregg in The Mighty Boosh?",
    "answers": [
      "Loch Ness",
      "Black Lake",
      "Loch Lomond",
      "Lake Windermere"
    ],
    "correctAnswer": "Black Lake",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: The Legend of Old Gregg",
      "Story fact: Old Gregg's fishing location",
      "Correct answer: Black Lake",
      "Plot detail: Old Gregg's fishing location",
      "Vince Noir and Howard Moon",
      "Character and scene: Old Gregg's fishing location",
      "Episode coverage: The Legend of Old Gregg",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39176",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "What mysterious possession of Old Gregg do Howard and Vince take away from his underwater home?",
    "answers": [
      "A golden egg",
      "The Shaman Juice",
      "The Funk",
      "A magic amulet"
    ],
    "correctAnswer": "The Funk",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: The Legend of Old Gregg",
      "Story fact: Old Gregg's valuable item",
      "Correct answer: The Funk",
      "Plot detail: Old Gregg's valuable item",
      "Vince Noir and Howard Moon",
      "Character and scene: Old Gregg's valuable item",
      "Episode coverage: The Legend of Old Gregg",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39177",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "Why do Howard and Vince choose to travel by boat instead of flying to America in The Mighty Boosh?",
    "answers": [
      "Their passports have expired",
      "The flights are all cancelled",
      "They are banned from airports",
      "Howard is afraid of flying"
    ],
    "correctAnswer": "Howard is afraid of flying",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: The Nightmare of Milky Joe",
      "Story fact: Sea passage prompted by fear",
      "Correct answer: Howard is afraid of flying",
      "Plot detail: Sea passage prompted by fear",
      "Vince Noir and Howard Moon",
      "Character and scene: Sea passage prompted by fear",
      "Episode coverage: The Nightmare of Milky Joe",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39178",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "What does Howard make from a coconut to keep him company when he and Vince are stranded in The Mighty Boosh?",
    "answers": [
      "A male companion called Milky Joe",
      "A model of the Zoo-Niverse",
      "A musical instrument",
      "A miniature fashion mannequin"
    ],
    "correctAnswer": "A male companion called Milky Joe",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: The Nightmare of Milky Joe",
      "Story fact: Coconut castaway companion",
      "Correct answer: A male companion called Milky Joe",
      "Plot detail: Coconut castaway companion",
      "Vince Noir and Howard Moon",
      "Character and scene: Coconut castaway companion",
      "Episode coverage: The Nightmare of Milky Joe",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39179",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "What precious substance does the Crack Fox steal from Nabootique in The Mighty Boosh?",
    "answers": [
      "The Egg of Mantumbi",
      "Shaman Juice",
      "The Funk",
      "Bollo's medication"
    ],
    "correctAnswer": "Shaman Juice",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: The Strange Tale of the Crack Fox",
      "Story fact: Precious potion theft",
      "Correct answer: Shaman Juice",
      "Plot detail: Precious potion theft",
      "Vince Noir and Howard Moon",
      "Character and scene: Precious potion theft",
      "Episode coverage: The Strange Tale of the Crack Fox",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39180",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "What does Howard take lessons in to overcome stage fright in the final series of The Mighty Boosh?",
    "answers": [
      "Public speaking",
      "Singing",
      "Acting",
      "Dancing"
    ],
    "correctAnswer": "Acting",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: The Chokes",
      "Story fact: Howard's stage-fright training",
      "Correct answer: Acting",
      "Plot detail: Howard's stage-fright training",
      "Vince Noir and Howard Moon",
      "Character and scene: Howard's stage-fright training",
      "Episode coverage: The Chokes",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39181",
    "category": "Television",
    "programme": "The Mighty Boosh",
    "question": "Which director does Howard hope to work with after taking acting lessons in The Mighty Boosh?",
    "answers": [
      "Dixon Bainbridge",
      "Hamilton Cork",
      "Tommy Nookah",
      "Jurgen Haabemaaster"
    ],
    "correctAnswer": "Jurgen Haabemaaster",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Surreal Comedy",
      "The Mighty Boosh",
      "Programme: The Mighty Boosh",
      "BBC Three",
      "2004-2007",
      "Episode or context: The Chokes",
      "Story fact: Stage director",
      "Correct answer: Jurgen Haabemaaster",
      "Plot detail: Stage director",
      "Vince Noir and Howard Moon",
      "Character and scene: Stage director",
      "Episode coverage: The Chokes",
      "Source: https://www.tvmaze.com/shows/1947/the-mighty-boosh/episodeguide"
    ],
    "dailyEligible": true
  }
];
  questions.push(...auditAdditions);
  if (new Set(questions.map(q => q.id)).size !== questions.length ||
      new Set(questions.map(q => normalise(q.question))).size !== questions.length ||
      questions.some(q => q.answers.length !== 4 ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        q.tags.length < 14 || !q.tags.includes('Programme: ' + q.programme) ||
        q.dailyEligible !== true)) throw Error('Pack 360 episode audit validation failed');
  module.exports = questions;
