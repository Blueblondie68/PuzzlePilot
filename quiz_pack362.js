
  // quiz_pack362.js
  // PuzzlePilot — The Bigggggg Quiz
  // Television: Moone Boy (Sky One) and Motherland (BBC).
  // Outstanding on PP_Quiz_Master_Through_Pack_351_Corrected.xlsx.
  // Sources checked: British Comedy Guide cast and episode guides for both series.
  // Every question has seven individually written, fact-specific tags and shared metadata.
  // Complete WordPad-ready CommonJS file. No external dependencies.

  const FIRST_ID = 17912;

  // Question | correct answer | three wrong answers | difficulty | seven question-specific tags
  const mooneFacts = `Who plays the young Martin Moone in Moone Boy?|David Rawle|Chris O'Dowd|Ian O'Reilly|Ronan Raftery|Easy|David Rawle|Martin Moone|Lead Child Actor|Irish Sitcom|Character Casting|Family Youngest|Boyle Childhood
  Who plays Martin's imaginary friend Sean Murphy?|Chris O'Dowd|David Rawle|Peter McDonald|Mark Doherty|Easy|Sean Role Casting|Sean Murphy|Imaginary Friend|Lead Actor|Martin Companion|Character Casting|Fantasy Guide
  Which broadcaster first showed Moone Boy?|Sky One|BBC Two|ITV|Channel 4|Easy|Sky One|Original Broadcaster|Sky Television|2012 Premiere|Irish Comedy Series|Broadcast Channel|Programme Debut
  In which year did Moone Boy first air?|2012|2008|2015|2018|Easy|2012 Premiere|September Debut|First Series|Sky One|Programme Timeline|Initial Broadcast|Comedy Launch
  In which Irish town is Moone Boy set?|Boyle|Galway|Killarney|Drogheda|Easy|Boyle|County Roscommon|Irish Town|Martin Home|Series Setting|Small Town Childhood|Moone Family
  In which Irish county is the town of Boyle, the setting of Moone Boy?|Roscommon|Cork|Kerry|Donegal|Medium|County Roscommon|Boyle Location|Ireland Geography|Martin Moone|Real Town Setting|Irish Midlands|Series Background
  How many regular television series of Moone Boy were made?|Three|Two|Four|Five|Medium|Three Series|2012 To 2015|Sky One|Television Series Count|Programme Run|Original Comedy|Series History
  How many scripted episodes make up Moone Boy's three regular series?|18|12|20|24|Medium|Eighteen Story Episodes|Six Per Series|Programme Count|Regular Episodes|Sky One Series|Broadcast History|Scripted Run
  Which co-creator of Moone Boy also plays Sean Murphy?|Chris O'Dowd|Nick Vincent Murphy|Steve Coogan|Peter McDonald|Medium|Lead Performer Co Creator|Co Creator|Sean Murphy Actor|Sitcom Writing|Production Credits|Imaginary Friend|Lead Performer
  Who co-wrote Moone Boy with Chris O'Dowd?|Nick Vincent Murphy|Sharon Horgan|Graham Linehan|John Sullivan|Hard|Nick Vincent Murphy|Chris And Nick|Writing Partnership|Co Creator|Series Scripts|Irish Television|Creative Team
  Who plays Martin's father Liam Moone?|Peter McDonald|Ronan Raftery|Ian O'Reilly|Mark Doherty|Medium|Peter McDonald|Liam Moone|Father Character|Actor Casting|Moone Parents|Family Household|Supporting Lead
  Who plays Martin's mother Debra Moone?|Deirdre O'Kane|Clare Monnelly|Sarah White|Aoife Duffin|Medium|Debra Performer|Debra Moone|Mother Character|Actress Casting|Moone Parents|Family Household|Irish Comedy
  Which actor plays Martin's best friend Padraic?|Ian O'Reilly|David Rawle|Ronan Raftery|Steve Coogan|Medium|Padraic Performer|Padraic|Best Friend|Childhood Adventures|Young Cast|Actor Casting|Martin Companion
  Which of Martin's sisters is played by Clare Monnelly?|Fidelma|Trisha|Sinead|Debra|Medium|Clare Monnelly|Fidelma Moone|Older Sister|Actor Character|Moone Family|Series Two Wedding|Cast Identification
  Who portrays Martin's sister Trisha?|Aoife Duffin|Sarah White|Clare Monnelly|Norma Sheahan|Medium|Aoife Duffin|Trisha Moone|Martin Sister|Actress Casting|Family Ensemble|Moone Siblings|Irish Series
  Which actress plays Martin's sister Sinead?|Sarah White|Aoife Duffin|Clare Monnelly|Deirdre O'Kane|Medium|Sarah White|Sinead Moone|Sister Character|Makeup Prank|Actor Casting|Moone Household|Sibling Rivalry
  Who portrays Dessie, Fidelma's future husband?|Ronan Raftery|Peter McDonald|Ian O'Reilly|Mark Doherty|Medium|Ronan Raftery|Dessie|Fidelma Fiancé|Series Two Wedding|Actor Casting|Moone Relations|Family Addition
  Which actor plays Father Linehan in Moone Boy?|Mark Doherty|Chris O'Dowd|Peter McDonald|Ronan Raftery|Hard|Mark Doherty|Father Linehan|Priest Character|Actor Casting|Religious Life|Parish Role|Supporting Performer
  What sort of companion is Sean Murphy to Martin Moone?|An imaginary friend|His older brother|His schoolteacher|His next-door neighbour|Easy|Sean Murphy|Imaginary Companion|Martin Imagination|Childhood Fantasy|Chris ODowd Role|Series Premise|Invisible Adviser
  How old is Martin celebrating becoming in Men Of The Houses?|Twelve|Ten|Fourteen|Sixteen|Medium|Men Of The Houses|Twelfth Birthday|Martin Moone|First Episode|2012 Story|Birthday Present|Local Bullies
  Why does Martin befriend Trevor in Bunch Of Marys?|For meals at Trevor's home|To borrow a bicycle|To join a football team|To learn a musical instrument|Medium|Bunch Of Marys|Trevor|Family Gourmet Meals|Martin Moone|Debra Election Campaign|Series One|2012 Episode
  What political activity distracts Debra from feeding Martin in Bunch Of Marys?|Election campaigning|An anti-road protest|A strike ballot|A referendum count|Medium|Bunch Of Marys|Debra Moone|Political Campaign|Mother Distracted|Gourmet Dinners|Martin Moone|First Series
  What prank does Sinead play while Martin sleeps in Another Prick In The Wall?|She puts make-up on his face|She hides all his shoes|She dyes his school uniform|She swaps his schoolbag|Medium|Another Prick In The Wall|Sinead Moone|Makeup Prank|Sleeping Martin|School Embarrassment|First Series|Sibling Mischief
  Whose arrival complicates Martin's growing-up talk in Dark Side Of The Moone?|Uncle Danny|Father Linehan|Dessie|Grandad|Medium|Dark Side Of The Moone|Uncle Danny|Growing Up Talk|Family Visit|Martin Moone|Series One|Parental Discussion
  What church role does Martin decide to pursue in Godfellas?|Altar boy|Choir conductor|Church caretaker|Sunday-school teacher|Medium|Godfellas|Altar Boy|Martin Confirmation|Church Service|Father Linehan|Series One|Religious Ambition
  What stage of Martin's education is ending in The Bell-End Of An Era?|Primary school|University|Secondary school|Nursery|Easy|Bell End Of An Era|Last School Week|Primary Education|Martin Moone|Series One Finale|Growing Up|2012 Episode
  Which international football tournament excites the family in Boylé Boylé Boylé?|The 1990 FIFA World Cup|The 1994 Winter Olympics|Euro 1996|The 1988 European Championship|Medium|Boyle Boyle Boyle|1990 World Cup|Republic Of Ireland|Football Fever|Series Two Premiere|Summer 1990|National Team
  What new stage of schooling begins for Martin in Moone Dance?|Secondary school|University|Nursery|A boarding school|Easy|Moone Dance|First Day|Secondary School|Martin Moone|Series Two|New School|2014 Episode
  What do Martin and Padraic turn their unfinished raft into in Ghost Raft?|A Halloween ghost ship|A floating café|A fishing boat|A rescue dinghy|Medium|Ghost Raft|Unfinished Raft|Halloween|Martin And Padraic|Ghost Ship|Series Two|River Adventure
  Which games console does Martin desperately want in Handball Duel?|Sega Mega Drive|Nintendo Wii|Sony PlayStation 2|Atari Jaguar|Medium|Handball Duel|Sega Mega Drive|Liam Money Worries|Martin Wish|Computer Games|Series Two|Early Nineties
  Who is preparing to marry Dessie in Stags And Hens?|Fidelma|Trisha|Sinead|Debra|Easy|Stags And Hens|Fidelma Moone|Dessie|Wedding Preparations|Series Two|Family Engagement|Hen Party
  On which Irish feast day does Fidelma's wedding take place in The Boyle Wedding?|St Patrick's Day|St Brigid's Day|Easter Sunday|All Saints' Day|Medium|The Boyle Wedding|Irish National Holiday|Fidelma And Dessie|Wedding Celebration|Series Two Finale|Irish Holiday|Family Ceremony
  Which Irish city do Martin and Padraic visit in Where The Streets Do Have Names?|Dublin|Cork|Waterford|Limerick|Easy|Where The Streets Do Have Names|Dublin Trip|Martin Moone|Padraic|Series Three Premiere|City Adventure|1991 Setting
  What do Martin and Padraic attempt to make in Fecks Lies And Videotape?|A funny home video|A radio play|A school newspaper|A comic book|Medium|Fecks Lies And Videotape|Home Video|Martin And Padraic|Series Three|Family Chaos|Video Camera|2015 Episode
  Which television presenter guest-stars in Fecks Lies And Videotape?|Terry Wogan|Graham Norton|Michael Parkinson|Des O'Connor|Hard|Terry Wogan|Guest Appearance|Fecks Lies And Videotape|Irish Broadcaster|Series Three|Celebrity Cameo|Television Presenter
  What disappears during Martin and Padraic's UFO hunt in Unidentified Feckin' Objects?|Donkey Kong|Sean Murphy|A bicycle|A family car|Medium|Unidentified Feckin Objects|Donkey Kong|Missing Donkey|Crop Circles|UFO Hunt|Series Three|Boyle Mystery
  What type of business does Dessie establish in Bells 'n' Smells?|A bookshop|A butcher's shop|A car wash|A newsagent's|Medium|Bells N Smells|Dessie|Catholic Bookshop|Business Venture|Series Three|Religious Books|Boyle Town
  Whose childhood imaginary friend reappears in Gershwin's Bucket List?|Martin's grandfather's|Padraic's father's|Liam Moone's|Dessie’s brother's|Hard|Gershwins Bucket List|Grandad|George Gershwin|Old Imaginary Friend|Series Three Finale|Sean Murphy|Ageing Story`;

  const motherlandFacts = `Who plays the overwhelmed working mother Julia in Motherland?|Anna Maxwell Martin|Diane Morgan|Lucy Punch|Tanya Moodie|Easy|Anna Maxwell Martin|Julia|Main Protagonist|Working Parent|BBC Casting|School Gate|Lead Actress
  Which actress portrays Julia's friend Liz in Motherland?|Diane Morgan|Lucy Punch|Philippa Dunne|Ellie Haddington|Easy|Diane Morgan|Liz|Laid Back Parent|Main Cast|Julia Friend|Actress Casting|School Parent
  Who plays Kevin, the enthusiastic stay-at-home father in Motherland?|Paul Ready|Oliver Chris|Robbie Gee|Ben Crompton|Easy|Paul Ready|Kevin|Stay At Home Dad|Main Cast|Parent Group|Actor Casting|School Run
  Which actress plays the alpha-mum leader Amanda?|Lucy Punch|Diane Morgan|Tanya Moodie|Anna Maxwell Martin|Easy|Lucy Punch|Amanda|Alpha Mums Leader|School Clique|Actress Casting|Social Queen Bee|Parent Competition
  Who plays Amanda's loyal friend Anne?|Philippa Dunne|Ellie Haddington|Lucy Punch|Tanya Moodie|Medium|Philippa Dunne|Anne|Amanda Friend|Alpha Mums|Actress Casting|Parent Group|School Social Circle
  Which actress plays Meg, who joins the group in series two?|Tanya Moodie|Diane Morgan|Philippa Dunne|Jackie Clune|Medium|Tanya Moodie|Meg|Series Two Newcomer|Successful Parent|Actress Casting|New Mother|2019 Episodes
  Who plays Julia's mother Marion?|Ellie Haddington|Philippa Dunne|Lucy Punch|Anna Maxwell Martin|Medium|Ellie Haddington|Marion|Julia Mother|Grandmother|Actress Casting|Childcare Refusal|Family Support
  Which actor portrays Julia's husband Paul?|Oliver Chris|Paul Ready|Robbie Gee|Anthony Head|Medium|Oliver Chris|Paul|Julia Husband|Absent Parent|Actor Casting|Work Travel|Family Marriage
  Who plays school secretary Mrs Lamb?|Jackie Clune|Ellie Haddington|Tanya Moodie|Philippa Dunne|Hard|Jackie Clune|Mrs Lamb|School Secretary|Actor Casting|School Administration|Sports Day|Classroom Community
  Which actor plays Garry in Motherland's third series?|Robbie Gee|Paul Ready|Oliver Chris|Peter McDonald|Hard|Robbie Gee|Garry|Series Three|Supporting Actor|2021 Episodes|Character Casting|New Arrival
  Which channel broadcast the Motherland pilot in 2016?|BBC Two|ITV|Channel 4|BBC One|Easy|BBC Two|2016 Pilot|Landmark Sitcom Season|Original Channel|Programme Debut|Broadcaster|First Transmission
  What year was the Motherland pilot first broadcast?|2016|2014|2017|2019|Easy|2016 Pilot|September Broadcast|BBC Sitcom Season|Series Origin|Television Timeline|Programme Launch|Parenting Comedy
  In what year did Motherland's first full series begin?|2017|2016|2019|2021|Medium|2017 First Series|November Premiere|BBC Two|Six Episodes|First Regular Run|Sitcom Timeline|School Parents
  How many regular series of Motherland were made?|Three|Two|Four|Five|Medium|Three Series|2017 To 2021|BBC Sitcom|Series Count|Original Run|Parenting Comedy|Programme Production
  How many episodes of Motherland aired in total including the pilot and two Christmas specials?|20|17|18|24|Hard|Twenty Episodes|One Pilot|Two Christmas Specials|Three Regular Series|BBC Catalogue|Total Broadcast|2016 To 2022
  Which type of parents does Amanda organise into a status-conscious school clique?|Alpha Mums|The PTA Rebels|Morning Runners|The School Governors|Easy|Alpha Mums|Amanda Leadership|School Social Status|Parent Clique|Julia Competition|Series Premise|Organised Parenting
  What does Julia's mother refuse to continue providing in the pilot episode?|Free childcare and school runs|Weekly grocery shopping|House cleaning|After-school music lessons|Easy|Pilot Episode|Marion Refusal|Free Babysitting|School Run|Julia Crisis|Working Mother|2016 Story
  What event does Julia organise for the whole class in The Birthday Party?|Her child's birthday party|A school talent show|A parent-teacher dinner|A charity auction|Easy|The Birthday Party|Whole Class Invitation|Julia Organiser|Kevin Entertainment|Series One Premiere|2017 Episode|Child Celebration
  Which school activity draws Julia into helping in Auction Of Promises?|A fundraising auction|A sponsored run|A school nativity|A book fair|Medium|Auction Of Promises|School Fundraising|Former Colleague|Julia Volunteers|Series One|2017 Story|Parent Expectations
  What kind of children's event does Julia attend in The Pool Party?|A swimming pool party|An ice-skating party|A bowling party|A museum sleepover|Easy|The Pool Party|Swimming Event|Julia Plans|Childrens Party|Series One|2017 Episode|Parent Logistics
  Who arrives to help Julia when Paul is away in The Cavalry?|Paul's parents|Julia's university friends|Amanda's cousins|Kevin's brothers|Medium|The Cavalry|Parents In Law|Paul Away|Julia Needs Help|Family Visitors|Series One|Childcare Complications
  What new possession makes Anne popular with parents in The After Party?|A car|A swimming pool|A holiday cottage|A coffee machine|Medium|The After Party|Anne New Car|School Carpool|Parent Popularity|Series One|2017 Episode|Transport Favours
  Who does Julia find to solve her childcare problems in The Caretaker?|A nanny|A live-in tutor|A retired doctor|A summer camp organiser|Medium|The Caretaker|Julia Nanny|Childcare Solution|Liz Friendship|Series One Finale|2017 Episode|Household Help
  What is the name of the high-achieving newcomer in No Mum Left Behind?|Meg|Anne|Marion|Felicity|Easy|No Mum Left Behind|Meg Introduction|Series Two Premiere|School Gates|High Flying Mother|2019 Episode|New Friend
  Whose new shop does Julia help launch in Soft Opening?|Amanda's|Liz's|Meg's|Marion's|Medium|Soft Opening|Amanda Shop|Julia Assistance|Careless Online Post|Series Two|2019 Story|Business Launch
  What unusual publication has Kevin written in Soft Opening?|A children's book|A cookbook|A travel guide|A crime novel|Medium|Soft Opening|Kevin|Childrens Book|Unusual Story|Series Two|Creative Writing|School Dad
  Which household activity becomes impossible for Julia in Mother's Load?|Working from home|Cooking a roast dinner|Painting a bedroom|Sorting the recycling|Medium|Mothers Load|Working From Home|Julia|Domestic Distractions|Series Two|2019 Episode|Parenting Pressure
  Which seasonal celebration does Kevin unexpectedly host in The Purge?|Halloween|Easter|Bonfire Night|New Year's Eve|Easy|The Purge|Halloween Party|Kevin Host|Trick Or Treating|Series Two|2019 Episode|Autumn Celebration
  What kind of accommodation does Kevin book for the families in Le Weekend?|A country cottage|A seaside hotel|A city apartment|A campsite|Medium|Le Weekend|Country Cottage|Half Term Trip|Kevin Booking|Family Holiday|Series Two|Disappointing Photos
  Which school occasion brings Julia into conflict with Mrs Lamb in Good Job?|Sports day|School photo day|Parents' evening|Prizegiving|Medium|Good Job|School Sports Day|Mrs Lamb|Julia Defies Rules|Series Two Finale|2019 Episode|Competitive Parent
  What themed clothing is required at Amanda's 2020 Christmas party?|Tinsel and tiaras|Christmas jumpers|Black tie and masks|Fancy dress pyjamas|Medium|2020 Christmas Special|Amanda Soiree|Tinsel And Tiaras|Party Dress Code|Festive Rules|Seasonal Celebration|BBC Christmas
  What outbreak causes panic among parents in Nit Blitz?|Head lice|Chickenpox|Measles|Norovirus|Easy|Nit Blitz|Head Lice|School Outbreak|Julia Blamed|Series Three Premiere|2021 Episode|Treatment Party
  What kind of school are the parents researching in Catchment Area?|Secondary schools|Nurseries|Universities|Sixth-form colleges only|Medium|Catchment Area|Secondary School Open Days|Julia School Choice|School Admissions|Series Three|2021 Story|Education Transition
  Which parent considers a pretend religious conversion to improve school admission chances?|Julia|Liz|Amanda|Meg|Medium|Catchment Area|Julia|Fake Religious Conversion|Admissions Rules|School Catchment|Series Three|2021 Episode
  Who visits her difficult mother Felicity in the Motherland episode Mother's Day?|Amanda|Julia|Liz|Meg|Medium|Mothers Day|Amanda|Felicity|Passive Aggressive Lunch|Series Three|2021 Episode|Mother Daughter
  Which parent joins the year-six school trip with Julia and Meg in School Trip?|Liz|Amanda|Anne|Marion|Medium|School Trip|Liz|Julia|Meg|Year Six Coach|Mrs Lamb|Series Three Episode
  What two events does Amanda combine in Surprise Birthday?|A PTA fundraiser and her birthday|A sports day and a wedding|A Christmas party and a christening|A school play and a book launch|Medium|Surprise Birthday|Amanda Birthday|PTA Fundraiser|Series Three Finale|School Community|2021 Episode|Combined Celebration
  What is the title of Motherland's final Christmas special broadcast in 2022?|Last Christmas|The Caretaker|Good Job|Nit Blitz|Medium|Last Christmas|2022 Special|Final Television Episode|December BBC One|Festive Story|Series Ending|Programme Title
  Which Motherland character became the focus of the spin-off Amandaland?|Amanda|Julia|Liz|Meg|Easy|Amandaland|Amanda Character|Lucy Punch|Television Spin Off|Later Programme|Alpha Mums|Sequel Series`;

  const normalise = value => value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
  const questions = [];

  function addProgramme(programme, sharedTags, factText) {
    for (const line of factText.trim().split('\n')) {
      const id = 'tv_' + String(FIRST_ID + questions.length).padStart(5, '0');
      const parts = line.trim().split('|').map(value => value.trim());
      if (parts.length !== 13) throw new Error('Pack 362: wrong field count for ' + id + ': ' + parts.length);
      const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
      if ([question, correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(value => !value)) {
        throw new Error('Pack 362: missing question content for ' + id);
      }
      if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.length !== 7 ||
          new Set(specificTags.map(normalise)).size !== 7) {
        throw new Error('Pack 362: difficulty or specific tags invalid for ' + id);
      }
      const answers = [wrong1, wrong2, wrong3];
      if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4) {
        throw new Error('Pack 362: repeated answer option for ' + id);
      }
      answers.splice(questions.length % 4, 0, correctAnswer);
      const tags = [...new Map([
        'Television', 'British And Irish Television', 'Comedy', 'Sitcom',
        ...sharedTags, programme, 'Programme: ' + programme,
        correctAnswer, ...specificTags
      ].map(tag => [normalise(tag), tag])).values()];
      questions.push({
        id, category: 'Television', programme, question, answers,
        correctAnswer, difficulty, tags, dailyEligible: true
      });
    }
  }

  addProgramme('Moone Boy', ['Sky One', '2012-2015', 'Chris O\'Dowd', 'Irish Comedy', 'Boyle'], mooneFacts);
  addProgramme('Motherland', ['BBC Two', 'BBC One', '2016-2022', 'Parenting Comedy', 'School Run'], motherlandFacts);

  // Validate actual exported question objects, not merely text templates.
  if (!questions.length || questions[0].id !== 'tv_17912' ||
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
    throw new Error('Pack 362: exported question validation failed');
  }

  
// Pack 362 historical audit, 22 Nov 2026: original 77 questions / IDs preserved.
// Narrative details checked against British Comedy Guide episode synopses.
// Moone Boy sources: https://www.comedy.co.uk/tv/moone_boy/episodes/all/
// Motherland sources: https://www.comedy.co.uk/tv/motherland/episodes/
const auditAdditions = [
  {
    "id": "tv_39248",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, what brand of bicycle does Martin receive for his twelfth birthday?",
    "answers": [
      "Raleigh Chopper",
      "Readybix",
      "BMX Burner",
      "Peugeot Racer"
    ],
    "correctAnswer": "Readybix",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S1E1 Men Of The Houses",
      "Storyline: Birthday Bicycle Brand",
      "Answer: Readybix",
      "Character/incident: Birthday Bicycle Brand",
      "Episode clue: S1E1 Men Of The Houses",
      "Subject: Birthday Bicycle Brand",
      "Period: 2012-2015",
      "Screenplay context: Birthday Bicycle Brand"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39249",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy's opening episode, who gets hold of Martin's new birthday bicycle?",
    "answers": [
      "His schoolteacher",
      "His grandfather",
      "Local bullies",
      "Father Linehan"
    ],
    "correctAnswer": "Local bullies",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S1E1 Men Of The Houses",
      "Storyline: Bullies Take Birthday Bicycle",
      "Answer: Local bullies",
      "Character/incident: Bullies Take Birthday Bicycle",
      "Episode clue: S1E1 Men Of The Houses",
      "Subject: Bullies Take Birthday Bicycle",
      "Period: 2012-2015",
      "Screenplay context: Bullies Take Birthday Bicycle"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39250",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, which Irish presidential candidate does Debra campaign for in Bunch Of Marys?",
    "answers": [
      "Mary McAleese",
      "Bertie Ahern",
      "Michael D. Higgins",
      "Mary Robinson"
    ],
    "correctAnswer": "Mary Robinson",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S1E2 Bunch Of Marys",
      "Storyline: Mary Robinson Presidential Campaign",
      "Answer: Mary Robinson",
      "Character/incident: Mary Robinson Presidential Campaign",
      "Episode clue: S1E2 Bunch Of Marys",
      "Subject: Mary Robinson Presidential Campaign",
      "Period: 2012-2015",
      "Screenplay context: Mary Robinson Presidential Campaign"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39251",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, which wealthy character is asked to finance Debra's political campaign?",
    "answers": [
      "Francie Feeley",
      "Dessie",
      "Liam Moone",
      "Gerry Bonner"
    ],
    "correctAnswer": "Francie Feeley",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S1E2 Bunch Of Marys",
      "Storyline: Francie Feeley Funding Campaign",
      "Answer: Francie Feeley",
      "Character/incident: Francie Feeley Funding Campaign",
      "Episode clue: S1E2 Bunch Of Marys",
      "Subject: Francie Feeley Funding Campaign",
      "Period: 2012-2015",
      "Screenplay context: Francie Feeley Funding Campaign"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39252",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "Who plays Francie Feeley, the campaign benefactor in Moone Boy?",
    "answers": [
      "Johnny Vegas",
      "Steve Coogan",
      "Chris O'Dowd",
      "Peter McDonald"
    ],
    "correctAnswer": "Steve Coogan",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S1E2 Bunch Of Marys",
      "Storyline: Steve Coogan Guest Appearance",
      "Answer: Steve Coogan",
      "Character/incident: Steve Coogan Guest Appearance",
      "Episode clue: S1E2 Bunch Of Marys",
      "Subject: Steve Coogan Guest Appearance",
      "Period: 2012-2015",
      "Screenplay context: Steve Coogan Guest Appearance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39253",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, whose distinctive style does Martin resemble after his sister puts make-up on his face?",
    "answers": [
      "David Bowie",
      "Adam Ant",
      "Boy George",
      "Elton John"
    ],
    "correctAnswer": "Boy George",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S1E3 Another Prick In The Wall",
      "Storyline: Martin Boy George Makeup",
      "Answer: Boy George",
      "Character/incident: Martin Boy George Makeup",
      "Episode clue: S1E3 Another Prick In The Wall",
      "Subject: Martin Boy George Makeup",
      "Period: 2012-2015",
      "Screenplay context: Martin Boy George Makeup"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39254",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "Who plays Miss Jennifer Bakewell, the weight-loss instructor in Moone Boy?",
    "answers": [
      "Sharon Horgan",
      "Diane Morgan",
      "Deirdre O'Kane",
      "Jessica Hynes"
    ],
    "correctAnswer": "Jessica Hynes",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S1E3 Another Prick In The Wall",
      "Storyline: Jennifer Bakewell Actor Jessica Hynes",
      "Answer: Jessica Hynes",
      "Character/incident: Jennifer Bakewell Actor Jessica Hynes",
      "Episode clue: S1E3 Another Prick In The Wall",
      "Subject: Jennifer Bakewell Actor Jessica Hynes",
      "Period: 2012-2015",
      "Screenplay context: Jennifer Bakewell Actor Jessica Hynes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39255",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, what has Martin's uncle Danny been doing around Europe before his visit?",
    "answers": [
      "Busking as a musician",
      "Touring as a chef",
      "Playing professional football",
      "Working as a photographer"
    ],
    "correctAnswer": "Busking as a musician",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S1E4 Dark Side Of The Moone",
      "Storyline: Uncle Danny European Busking",
      "Answer: Busking as a musician",
      "Character/incident: Uncle Danny European Busking",
      "Episode clue: S1E4 Dark Side Of The Moone",
      "Subject: Uncle Danny European Busking",
      "Period: 2012-2015",
      "Screenplay context: Uncle Danny European Busking"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39256",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, why does imaginary friend Sean spend time with other imaginary companions in Dark Side Of The Moone?",
    "answers": [
      "Martin leaves for boarding school",
      "Martin rejects him to impress Uncle Danny",
      "Sean loses his memory",
      "Martin moves to Dublin"
    ],
    "correctAnswer": "Martin rejects him to impress Uncle Danny",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S1E4 Dark Side Of The Moone",
      "Storyline: Sean Rejected By Martin",
      "Answer: Martin rejects him to impress Uncle Danny",
      "Character/incident: Sean Rejected By Martin",
      "Episode clue: S1E4 Dark Side Of The Moone",
      "Subject: Sean Rejected By Martin",
      "Period: 2012-2015",
      "Screenplay context: Sean Rejected By Martin"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39257",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "Which actor plays Martin's unconventional Uncle Danny in Moone Boy?",
    "answers": [
      "Johnny Vegas",
      "Mark Doherty",
      "Steve Wall",
      "Simon Delaney"
    ],
    "correctAnswer": "Steve Wall",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S1E4 Dark Side Of The Moone",
      "Storyline: Steve Wall As Uncle Danny",
      "Answer: Steve Wall",
      "Character/incident: Steve Wall As Uncle Danny",
      "Episode clue: S1E4 Dark Side Of The Moone",
      "Subject: Steve Wall As Uncle Danny",
      "Period: 2012-2015",
      "Screenplay context: Steve Wall As Uncle Danny"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39258",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, which of Martin's sisters joins the church choir in Godfellas?",
    "answers": [
      "Trisha",
      "Sinead",
      "Debra",
      "Fidelma"
    ],
    "correctAnswer": "Fidelma",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S1E5 Godfellas",
      "Storyline: Fidelma Joins Church Choir",
      "Answer: Fidelma",
      "Character/incident: Fidelma Joins Church Choir",
      "Episode clue: S1E5 Godfellas",
      "Subject: Fidelma Joins Church Choir",
      "Period: 2012-2015",
      "Screenplay context: Fidelma Joins Church Choir"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39259",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, who accepts Martin's application to join the altar boys in Godfellas?",
    "answers": [
      "Dessie",
      "Liam Moone",
      "Father Linehan",
      "Padraic"
    ],
    "correctAnswer": "Dessie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S1E5 Godfellas",
      "Storyline: Dessie Accepts Altar Boy",
      "Answer: Dessie",
      "Character/incident: Dessie Accepts Altar Boy",
      "Episode clue: S1E5 Godfellas",
      "Subject: Dessie Accepts Altar Boy",
      "Period: 2012-2015",
      "Screenplay context: Dessie Accepts Altar Boy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39260",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, what wrongdoing does Martin discover among the supposedly devout altar boys?",
    "answers": [
      "Illegal horse racing",
      "Theft and corruption",
      "Cheating at school exams",
      "Forging marriage certificates"
    ],
    "correctAnswer": "Theft and corruption",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S1E5 Godfellas",
      "Storyline: Altar Boy Gang Corruption",
      "Answer: Theft and corruption",
      "Character/incident: Altar Boy Gang Corruption",
      "Episode clue: S1E5 Godfellas",
      "Subject: Altar Boy Gang Corruption",
      "Period: 2012-2015",
      "Screenplay context: Altar Boy Gang Corruption"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39261",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, what does Sean urge Martin to leave behind before finishing primary school?",
    "answers": [
      "His birthday bicycle",
      "His collection of comics",
      "A memorable mark on the school",
      "His school uniform"
    ],
    "correctAnswer": "A memorable mark on the school",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S1E6 The Bell-End Of An Era",
      "Storyline: Sean Urges Martin Legacy",
      "Answer: A memorable mark on the school",
      "Character/incident: Sean Urges Martin Legacy",
      "Episode clue: S1E6 The Bell-End Of An Era",
      "Subject: Sean Urges Martin Legacy",
      "Period: 2012-2015",
      "Screenplay context: Sean Urges Martin Legacy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39262",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, which outdoor youth event are Debra and Liam hoping Sinead will not qualify for?",
    "answers": [
      "Scout World Jamboree",
      "National Youth Choir Camp",
      "Irish Dancing Championships",
      "Girl Guide Jamboree"
    ],
    "correctAnswer": "Girl Guide Jamboree",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S1E6 The Bell-End Of An Era",
      "Storyline: Sinead Girl Guide Jamboree",
      "Answer: Girl Guide Jamboree",
      "Character/incident: Sinead Girl Guide Jamboree",
      "Episode clue: S1E6 The Bell-End Of An Era",
      "Subject: Sinead Girl Guide Jamboree",
      "Period: 2012-2015",
      "Screenplay context: Sinead Girl Guide Jamboree"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39263",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, which English football manager's Irish team inspires World Cup fever during the second series?",
    "answers": [
      "Jack Charlton",
      "Bobby Robson",
      "Ron Atkinson",
      "Terry Venables"
    ],
    "correctAnswer": "Jack Charlton",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S2E1 Boylé Boylé Boylé",
      "Storyline: Jack Charlton Ireland Football",
      "Answer: Jack Charlton",
      "Character/incident: Jack Charlton Ireland Football",
      "Episode clue: S2E1 Boylé Boylé Boylé",
      "Subject: Jack Charlton Ireland Football",
      "Period: 2012-2015",
      "Screenplay context: Jack Charlton Ireland Football"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39264",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, what had Martin and Padraic originally hoped to buy after sailing their raft down the river?",
    "answers": [
      "Football boots",
      "Ice cream",
      "Comics",
      "Fireworks"
    ],
    "correctAnswer": "Ice cream",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S2E3 Ghost Raft",
      "Storyline: Raft Trip Ice Cream Plan",
      "Answer: Ice cream",
      "Character/incident: Raft Trip Ice Cream Plan",
      "Episode clue: S2E3 Ghost Raft",
      "Subject: Raft Trip Ice Cream Plan",
      "Period: 2012-2015",
      "Screenplay context: Raft Trip Ice Cream Plan"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39265",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, what financial reason does Liam give for resisting Martin's request for a Sega Mega Drive?",
    "answers": [
      "He has paid for a new car",
      "The family is buying a house",
      "Money is tight because work is slow",
      "A wedding has used all their savings"
    ],
    "correctAnswer": "Money is tight because work is slow",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S2E4 Handball Duel",
      "Storyline: Liam Money Troubles Sega",
      "Answer: Money is tight because work is slow",
      "Character/incident: Liam Money Troubles Sega",
      "Episode clue: S2E4 Handball Duel",
      "Subject: Liam Money Troubles Sega",
      "Period: 2012-2015",
      "Screenplay context: Liam Money Troubles Sega"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39266",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "What is the title of the behind-the-scenes documentary accompanying Moone Boy's second series?",
    "answers": [
      "Behind The Scenes",
      "The Making Of Martin",
      "Boyle After Dark",
      "Behind The Moone"
    ],
    "correctAnswer": "Behind The Moone",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S2 Documentary",
      "Storyline: Moone Boy Second Series Documentary",
      "Answer: Behind The Moone",
      "Character/incident: Moone Boy Second Series Documentary",
      "Episode clue: S2 Documentary",
      "Subject: Moone Boy Second Series Documentary",
      "Period: 2012-2015",
      "Screenplay context: Moone Boy Second Series Documentary"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39267",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, who encounters an old flame while Martin and Padraic visit Dublin?",
    "answers": [
      "Liam",
      "Dessie",
      "Martin",
      "Father Linehan"
    ],
    "correctAnswer": "Liam",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S3E1 Where The Streets Do Have Names",
      "Storyline: Liam Old Romance In Dublin Episode",
      "Answer: Liam",
      "Character/incident: Liam Old Romance In Dublin Episode",
      "Episode clue: S3E1 Where The Streets Do Have Names",
      "Subject: Liam Old Romance In Dublin Episode",
      "Period: 2012-2015",
      "Screenplay context: Liam Old Romance In Dublin Episode"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39268",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, why does Padraic run away with Martin in The Plunder Years?",
    "answers": [
      "He has failed his school exams",
      "His parents keep arguing",
      "His family plans to emigrate",
      "His bicycle is stolen"
    ],
    "correctAnswer": "His parents keep arguing",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S3E2 The Plunder Years",
      "Storyline: Padraic Escapes Parents Arguments",
      "Answer: His parents keep arguing",
      "Character/incident: Padraic Escapes Parents Arguments",
      "Episode clue: S3E2 The Plunder Years",
      "Subject: Padraic Escapes Parents Arguments",
      "Period: 2012-2015",
      "Screenplay context: Padraic Escapes Parents Arguments"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39269",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, where does Padraic hide after running away from his quarrelling parents?",
    "answers": [
      "Dessie’s bookshop",
      "A church tower",
      "Martin's wardrobe",
      "A railway carriage"
    ],
    "correctAnswer": "Martin's wardrobe",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S3E2 The Plunder Years",
      "Storyline: Padraic Hides In Martin Wardrobe",
      "Answer: Martin's wardrobe",
      "Character/incident: Padraic Hides In Martin Wardrobe",
      "Episode clue: S3E2 The Plunder Years",
      "Subject: Padraic Hides In Martin Wardrobe",
      "Period: 2012-2015",
      "Screenplay context: Padraic Hides In Martin Wardrobe"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39270",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, what frozen dessert does Padraic's mother pack as an apology during his parents' arguments?",
    "answers": [
      "Arctic roll",
      "Ice cream cones",
      "Frozen yoghurt",
      "Viennetta"
    ],
    "correctAnswer": "Viennetta",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S3E2 The Plunder Years",
      "Storyline: Padraic Apology Viennetta",
      "Answer: Viennetta",
      "Character/incident: Padraic Apology Viennetta",
      "Episode clue: S3E2 The Plunder Years",
      "Subject: Padraic Apology Viennetta",
      "Period: 2012-2015",
      "Screenplay context: Padraic Apology Viennetta"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39271",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, what new profession does Debra take up after leaving the weight-loss business?",
    "answers": [
      "Marriage counselling",
      "Real estate sales",
      "Journalism",
      "School teaching"
    ],
    "correctAnswer": "Marriage counselling",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S3E2 The Plunder Years",
      "Storyline: Debra Becomes Marriage Counsellor",
      "Answer: Marriage counselling",
      "Character/incident: Debra Becomes Marriage Counsellor",
      "Episode clue: S3E2 The Plunder Years",
      "Subject: Debra Becomes Marriage Counsellor",
      "Period: 2012-2015",
      "Screenplay context: Debra Becomes Marriage Counsellor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39272",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "Who portrays Padraic's imaginary wrestling friend Crunchie Haystacks in Moone Boy?",
    "answers": [
      "Steve Coogan",
      "Johnny Vegas",
      "Ronan Raftery",
      "Chris O'Dowd"
    ],
    "correctAnswer": "Johnny Vegas",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S3E2 The Plunder Years",
      "Storyline: Johnny Vegas Crunchie Haystacks",
      "Answer: Johnny Vegas",
      "Character/incident: Johnny Vegas Crunchie Haystacks",
      "Episode clue: S3E2 The Plunder Years",
      "Subject: Johnny Vegas Crunchie Haystacks",
      "Period: 2012-2015",
      "Screenplay context: Johnny Vegas Crunchie Haystacks"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39273",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy's third series, which couple move back into the family's bungalow with baby Rose?",
    "answers": [
      "Trisha and Gerry",
      "Sinead and Padraic",
      "Fidelma and Dessie",
      "Debra and Liam"
    ],
    "correctAnswer": "Fidelma and Dessie",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S3E3 Fecks Lies And Videotape",
      "Storyline: Fidelma Dessie Baby Rose Move Home",
      "Answer: Fidelma and Dessie",
      "Character/incident: Fidelma Dessie Baby Rose Move Home",
      "Episode clue: S3E3 Fecks Lies And Videotape",
      "Subject: Fidelma Dessie Baby Rose Move Home",
      "Period: 2012-2015",
      "Screenplay context: Fidelma Dessie Baby Rose Move Home"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39274",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, what strange marks around Boyle convince Martin and Padraic to hunt for UFOs?",
    "answers": [
      "Burnt trees",
      "Carved stones",
      "Flashing road signs",
      "Crop circles"
    ],
    "correctAnswer": "Crop circles",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S3E4 Unidentified Feckin Objects",
      "Storyline: Boyle UFO Crop Circles",
      "Answer: Crop circles",
      "Character/incident: Boyle UFO Crop Circles",
      "Episode clue: S3E4 Unidentified Feckin Objects",
      "Subject: Boyle UFO Crop Circles",
      "Period: 2012-2015",
      "Screenplay context: Boyle UFO Crop Circles"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39275",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy's finale, what is the name of Grandad's imaginary friend who reappears?",
    "answers": [
      "George Gershwin",
      "Sean Murphy",
      "Crunchie Haystacks",
      "Francie Feeley"
    ],
    "correctAnswer": "George Gershwin",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S3E6 Gershwins Bucket List",
      "Storyline: Grandad Imaginary George Gershwin",
      "Answer: George Gershwin",
      "Character/incident: Grandad Imaginary George Gershwin",
      "Episode clue: S3E6 Gershwins Bucket List",
      "Subject: Grandad Imaginary George Gershwin",
      "Period: 2012-2015",
      "Screenplay context: Grandad Imaginary George Gershwin"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39276",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, which conflict does Martin research for his school history project in the final series?",
    "answers": [
      "The Crimean War",
      "The Irish Civil War",
      "The American Civil War",
      "The Spanish Civil War"
    ],
    "correctAnswer": "The Irish Civil War",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S3E6 Gershwins Bucket List",
      "Storyline: Irish Civil War History Project",
      "Answer: The Irish Civil War",
      "Character/incident: Irish Civil War History Project",
      "Episode clue: S3E6 Gershwins Bucket List",
      "Subject: Irish Civil War History Project",
      "Period: 2012-2015",
      "Screenplay context: Irish Civil War History Project"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39277",
    "category": "Television",
    "programme": "Moone Boy",
    "question": "In Moone Boy, which two improbable figures appear in Grandad's fanciful account of the Irish Civil War?",
    "answers": [
      "Elvis and Churchill",
      "Shakespeare and Einstein",
      "Godzilla and Napoleon",
      "Dracula and Caesar"
    ],
    "correctAnswer": "Godzilla and Napoleon",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s Irish Television",
      "Comedy",
      "Sitcom",
      "Moone Boy",
      "Programme: Moone Boy",
      "Sky One",
      "Chris O'Dowd",
      "Episode: S3E6 Gershwins Bucket List",
      "Storyline: Grandad Godzilla Napoleon Story",
      "Answer: Godzilla and Napoleon",
      "Character/incident: Grandad Godzilla Napoleon Story",
      "Episode clue: S3E6 Gershwins Bucket List",
      "Subject: Grandad Godzilla Napoleon Story",
      "Period: 2012-2015",
      "Screenplay context: Grandad Godzilla Napoleon Story"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39278",
    "category": "Television",
    "programme": "Motherland",
    "question": "Motherland's 2016 pilot was broadcast during which BBC celebration of classic sitcoms?",
    "answers": [
      "Children in Need",
      "Comic Relief",
      "BBC Proms",
      "Landmark Sitcom Season"
    ],
    "correctAnswer": "Landmark Sitcom Season",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: Pilot 2016",
      "Storyline: Landmark Sitcom Season Pilot",
      "Answer: Landmark Sitcom Season",
      "Character/incident: Landmark Sitcom Season Pilot",
      "Episode clue: Pilot 2016",
      "Subject: Landmark Sitcom Season Pilot",
      "Period: 2016-2022",
      "Screenplay context: Landmark Sitcom Season Pilot"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39279",
    "category": "Television",
    "programme": "Motherland",
    "question": "What is Julia's profession, which she expects will help with a children's party in Motherland?",
    "answers": [
      "Events organiser",
      "Primary-school teacher",
      "Wedding photographer",
      "Restaurant manager"
    ],
    "correctAnswer": "Events organiser",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S1E1 The Birthday Party",
      "Storyline: Julia Events Organiser Career",
      "Answer: Events organiser",
      "Character/incident: Julia Events Organiser Career",
      "Episode clue: S1E1 The Birthday Party",
      "Subject: Julia Events Organiser Career",
      "Period: 2016-2022",
      "Screenplay context: Julia Events Organiser Career"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39280",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland, whose party shortcuts does Julia rely on when organising her child's birthday in series one?",
    "answers": [
      "Amanda's",
      "Liz's",
      "Anne's",
      "Meg's"
    ],
    "correctAnswer": "Liz's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S1E1 The Birthday Party",
      "Storyline: Liz Birthday Party Hacks",
      "Answer: Liz's",
      "Character/incident: Liz Birthday Party Hacks",
      "Episode clue: S1E1 The Birthday Party",
      "Subject: Liz Birthday Party Hacks",
      "Period: 2016-2022",
      "Screenplay context: Liz Birthday Party Hacks"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39281",
    "category": "Television",
    "programme": "Motherland",
    "question": "Who plays the hapless children's entertainer Animal Man in Motherland's first full series?",
    "answers": [
      "Paul Ready",
      "Oliver Chris",
      "Ben Crompton",
      "Robbie Gee"
    ],
    "correctAnswer": "Ben Crompton",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S1E1 The Birthday Party",
      "Storyline: Ben Crompton Animal Man",
      "Answer: Ben Crompton",
      "Character/incident: Ben Crompton Animal Man",
      "Episode clue: S1E1 The Birthday Party",
      "Subject: Ben Crompton Animal Man",
      "Period: 2016-2022",
      "Screenplay context: Ben Crompton Animal Man"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39282",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland, whom does Julia hope to impress by helping with the school fundraising auction?",
    "answers": [
      "Her son's teacher",
      "A television reporter",
      "Her brother-in-law",
      "A former colleague"
    ],
    "correctAnswer": "A former colleague",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S1E2 Auction Of Promises",
      "Storyline: Former Colleague School Fundraiser",
      "Answer: A former colleague",
      "Character/incident: Former Colleague School Fundraiser",
      "Episode clue: S1E2 Auction Of Promises",
      "Subject: Former Colleague School Fundraiser",
      "Period: 2016-2022",
      "Screenplay context: Former Colleague School Fundraiser"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39283",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland, what romantic pursuit distracts Liz during the children's swimming-pool party?",
    "answers": [
      "Trying to arrange a date",
      "Reuniting with an ex-husband",
      "Planning a wedding",
      "Joining a dating agency"
    ],
    "correctAnswer": "Trying to arrange a date",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S1E3 The Pool Party",
      "Storyline: Liz Tries Dating Pool Party",
      "Answer: Trying to arrange a date",
      "Character/incident: Liz Tries Dating Pool Party",
      "Episode clue: S1E3 The Pool Party",
      "Subject: Liz Tries Dating Pool Party",
      "Period: 2016-2022",
      "Screenplay context: Liz Tries Dating Pool Party"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39284",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland's No Mum Left Behind, what work opportunity leaves Julia agonising over a decision?",
    "answers": [
      "A new teaching post",
      "A promotion",
      "A move overseas",
      "A redundancy offer"
    ],
    "correctAnswer": "A promotion",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S2E1 No Mum Left Behind",
      "Storyline: Julia Debates Promotion",
      "Answer: A promotion",
      "Character/incident: Julia Debates Promotion",
      "Episode clue: S2E1 No Mum Left Behind",
      "Subject: Julia Debates Promotion",
      "Period: 2016-2022",
      "Screenplay context: Julia Debates Promotion"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39285",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland, what threatens Amanda's new shop launch after Julia agrees to help?",
    "answers": [
      "A power cut",
      "A missing cash register",
      "A careless online post",
      "A cancelled lease"
    ],
    "correctAnswer": "A careless online post",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S2E2 Soft Opening",
      "Storyline: Amanda Shop Online Post",
      "Answer: A careless online post",
      "Character/incident: Amanda Shop Online Post",
      "Episode clue: S2E2 Soft Opening",
      "Subject: Amanda Shop Online Post",
      "Period: 2016-2022",
      "Screenplay context: Amanda Shop Online Post"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39286",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland, what neighbourhood change does Liz resent in Soft Opening?",
    "answers": [
      "Construction of a motorway",
      "A new housing estate",
      "A railway closure",
      "Gentrification"
    ],
    "correctAnswer": "Gentrification",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S2E2 Soft Opening",
      "Storyline: Liz Dislikes Gentrification",
      "Answer: Gentrification",
      "Character/incident: Liz Dislikes Gentrification",
      "Episode clue: S2E2 Soft Opening",
      "Subject: Liz Dislikes Gentrification",
      "Period: 2016-2022",
      "Screenplay context: Liz Dislikes Gentrification"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39287",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland, which everyday charity item gives Kevin trouble in Mother's Load?",
    "answers": [
      "A tea towel",
      "A raffle ticket",
      "A collection tin",
      "A sponsored calendar"
    ],
    "correctAnswer": "A tea towel",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S2E3 Mothers Load",
      "Storyline: Kevin Charity Tea Towel",
      "Answer: A tea towel",
      "Character/incident: Kevin Charity Tea Towel",
      "Episode clue: S2E3 Mothers Load",
      "Subject: Kevin Charity Tea Towel",
      "Period: 2016-2022",
      "Screenplay context: Kevin Charity Tea Towel"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39288",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland, whose youngest child starting nursery leaves her unsure how to fill her time?",
    "answers": [
      "Amanda's",
      "Liz's",
      "Meg's",
      "Anne's"
    ],
    "correctAnswer": "Liz's",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S2E3 Mothers Load",
      "Storyline: Liz Youngest Starts Nursery",
      "Answer: Liz's",
      "Character/incident: Liz Youngest Starts Nursery",
      "Episode clue: S2E3 Mothers Load",
      "Subject: Liz Youngest Starts Nursery",
      "Period: 2016-2022",
      "Screenplay context: Liz Youngest Starts Nursery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39289",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland, what does Julia hope to do by taking her children trick-or-treating in The Purge?",
    "answers": [
      "Find a lost pet",
      "Visit her old office",
      "Meet a celebrity neighbour",
      "Find a new babysitter"
    ],
    "correctAnswer": "Meet a celebrity neighbour",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S2E4 The Purge",
      "Storyline: Julia Wants Celebrity Meeting",
      "Answer: Meet a celebrity neighbour",
      "Character/incident: Julia Wants Celebrity Meeting",
      "Episode clue: S2E4 The Purge",
      "Subject: Julia Wants Celebrity Meeting",
      "Period: 2016-2022",
      "Screenplay context: Julia Wants Celebrity Meeting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39290",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland, why is the countryside cottage Kevin has booked such a disappointment?",
    "answers": [
      "It has no electricity",
      "It is already occupied",
      "It is far from the countryside",
      "It is worse than the online photographs suggested"
    ],
    "correctAnswer": "It is worse than the online photographs suggested",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S2E5 Le Weekend",
      "Storyline: Cottage Unlike Online Photos",
      "Answer: It is worse than the online photographs suggested",
      "Character/incident: Cottage Unlike Online Photos",
      "Episode clue: S2E5 Le Weekend",
      "Subject: Cottage Unlike Online Photos",
      "Period: 2016-2022",
      "Screenplay context: Cottage Unlike Online Photos"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39291",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland's 2020 Christmas special, which member of the group alone receives an official invitation to Amanda's party?",
    "answers": [
      "Meg",
      "Julia",
      "Liz",
      "Kevin"
    ],
    "correctAnswer": "Meg",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: Christmas 2020",
      "Storyline: Meg Only Official Party Invite",
      "Answer: Meg",
      "Character/incident: Meg Only Official Party Invite",
      "Episode clue: Christmas 2020",
      "Subject: Meg Only Official Party Invite",
      "Period: 2016-2022",
      "Screenplay context: Meg Only Official Party Invite"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39292",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland's 2020 Christmas special, how do Julia, Liz and Kevin attend Amanda's party despite lacking invitations?",
    "answers": [
      "Disguised as caterers",
      "As Meg's plus-threes",
      "After winning raffle tickets",
      "As helpers with decorations"
    ],
    "correctAnswer": "As Meg's plus-threes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: Christmas 2020",
      "Storyline: Meg Plus Three Invitations",
      "Answer: As Meg's plus-threes",
      "Character/incident: Meg Plus Three Invitations",
      "Episode clue: Christmas 2020",
      "Subject: Meg Plus Three Invitations",
      "Period: 2016-2022",
      "Screenplay context: Meg Plus Three Invitations"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39293",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland, how tall is the Christmas tree at Amanda's lavish 2020 party?",
    "answers": [
      "Ten feet",
      "Fifteen feet",
      "Thirty feet",
      "Forty-five feet"
    ],
    "correctAnswer": "Thirty feet",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: Christmas 2020",
      "Storyline: Amanda Thirty Foot Christmas Tree",
      "Answer: Thirty feet",
      "Character/incident: Amanda Thirty Foot Christmas Tree",
      "Episode clue: Christmas 2020",
      "Subject: Amanda Thirty Foot Christmas Tree",
      "Period: 2016-2022",
      "Screenplay context: Amanda Thirty Foot Christmas Tree"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39294",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland, who is blamed for starting a second wave of the school's head-lice outbreak?",
    "answers": [
      "Liz",
      "Amanda",
      "Anne",
      "Julia"
    ],
    "correctAnswer": "Julia",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S3E1 Nit Blitz",
      "Storyline: Julia Blamed For Nits",
      "Answer: Julia",
      "Character/incident: Julia Blamed For Nits",
      "Episode clue: S3E1 Nit Blitz",
      "Subject: Julia Blamed For Nits",
      "Period: 2016-2022",
      "Screenplay context: Julia Blamed For Nits"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39295",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland, what kind of gathering does Julia hold to win back the other parents after a head-lice scare?",
    "answers": [
      "A nit-treatment party",
      "A sponsored bake sale",
      "A sleepover",
      "A parents' quiz night"
    ],
    "correctAnswer": "A nit-treatment party",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S3E1 Nit Blitz",
      "Storyline: Julia Nit Treatment Party",
      "Answer: A nit-treatment party",
      "Character/incident: Julia Nit Treatment Party",
      "Episode clue: S3E1 Nit Blitz",
      "Subject: Julia Nit Treatment Party",
      "Period: 2016-2022",
      "Screenplay context: Julia Nit Treatment Party"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39296",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland, who spreads the news and gossip during Julia's nit-treatment party?",
    "answers": [
      "Kevin",
      "Amanda",
      "Meg",
      "Mrs Lamb"
    ],
    "correctAnswer": "Amanda",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S3E1 Nit Blitz",
      "Storyline: Amanda Spreads Gossip",
      "Answer: Amanda",
      "Character/incident: Amanda Spreads Gossip",
      "Episode clue: S3E1 Nit Blitz",
      "Subject: Amanda Spreads Gossip",
      "Period: 2016-2022",
      "Screenplay context: Amanda Spreads Gossip"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39297",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland's Catchment Area, which major personal change is Kevin going through?",
    "answers": [
      "A new marriage",
      "A career change",
      "A divorce",
      "An overseas move"
    ],
    "correctAnswer": "A divorce",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S3E2 Catchment Area",
      "Storyline: Kevin Divorce Under Way",
      "Answer: A divorce",
      "Character/incident: Kevin Divorce Under Way",
      "Episode clue: S3E2 Catchment Area",
      "Subject: Kevin Divorce Under Way",
      "Period: 2016-2022",
      "Screenplay context: Kevin Divorce Under Way"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39298",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland, who helps Kevin deal with solicitors during his divorce?",
    "answers": [
      "Amanda",
      "Julia",
      "Anne",
      "Liz"
    ],
    "correctAnswer": "Liz",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S3E2 Catchment Area",
      "Storyline: Liz Helps Divorce Lawyers",
      "Answer: Liz",
      "Character/incident: Liz Helps Divorce Lawyers",
      "Episode clue: S3E2 Catchment Area",
      "Subject: Liz Helps Divorce Lawyers",
      "Period: 2016-2022",
      "Screenplay context: Liz Helps Divorce Lawyers"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39299",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland's Mother's Day, which parent is thoroughly spoilt while Julia feels neglected?",
    "answers": [
      "Meg",
      "Anne",
      "Amanda",
      "Liz"
    ],
    "correctAnswer": "Meg",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S3E3 Mothers Day",
      "Storyline: Meg Spoilt On Mothers Day",
      "Answer: Meg",
      "Character/incident: Meg Spoilt On Mothers Day",
      "Episode clue: S3E3 Mothers Day",
      "Subject: Meg Spoilt On Mothers Day",
      "Period: 2016-2022",
      "Screenplay context: Meg Spoilt On Mothers Day"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39300",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland, which school secretary accompanies Julia, Liz and Meg on their difficult year-six coach trip?",
    "answers": [
      "Mrs Banbury Hughes",
      "Mrs Lamb",
      "Felicity",
      "Marion"
    ],
    "correctAnswer": "Mrs Lamb",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S3E4 School Trip",
      "Storyline: Mrs Lamb School Trip Chaperone",
      "Answer: Mrs Lamb",
      "Character/incident: Mrs Lamb School Trip Chaperone",
      "Episode clue: S3E4 School Trip",
      "Subject: Mrs Lamb School Trip Chaperone",
      "Period: 2016-2022",
      "Screenplay context: Mrs Lamb School Trip Chaperone"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39301",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland's Surprise Birthday, which sponsored activity becomes entangled with Anne's powerful cocktails?",
    "answers": [
      "A cookery contest",
      "Sponsored cycling",
      "A school swimming gala",
      "A charity fashion show"
    ],
    "correctAnswer": "Sponsored cycling",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: S3E5 Surprise Birthday",
      "Storyline: Sponsored Cycling And Cocktails",
      "Answer: Sponsored cycling",
      "Character/incident: Anne Cocktail Trouble",
      "Episode clue: S3E5 Surprise Birthday",
      "Subject: School Cycling Fundraiser",
      "Period: 2016-2022",
      "Screenplay context: Alcohol And Cycling At The Party"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39302",
    "category": "Television",
    "programme": "Motherland",
    "question": "On which BBC channel did Motherland's final 2022 Christmas special premiere?",
    "answers": [
      "BBC Two",
      "BBC Three",
      "BBC Four",
      "BBC One"
    ],
    "correctAnswer": "BBC One",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: Christmas 2022",
      "Storyline: BBC One Final Christmas",
      "Answer: BBC One",
      "Character/incident: BBC One Final Christmas",
      "Episode clue: Christmas 2022",
      "Subject: BBC One Final Christmas",
      "Period: 2016-2022",
      "Screenplay context: BBC One Final Christmas"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39303",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland's Last Christmas, what meal does Kevin offer to cook when Julia invites him over?",
    "answers": [
      "A Persian feast",
      "A traditional roast turkey",
      "An Italian pasta banquet",
      "A French seafood menu"
    ],
    "correctAnswer": "A Persian feast",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: Christmas 2022",
      "Storyline: Kevin Persian Feast Christmas",
      "Answer: A Persian feast",
      "Character/incident: Kevin Persian Feast Christmas",
      "Episode clue: Christmas 2022",
      "Subject: Kevin Persian Feast Christmas",
      "Period: 2016-2022",
      "Screenplay context: Kevin Persian Feast Christmas"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39304",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland's Last Christmas, what had Kevin expected to eat for Christmas dinner before Julia invited him over?",
    "answers": [
      "A pizza delivery",
      "Turkey crisps from a hotel vending machine",
      "A supermarket sandwich",
      "A roast at his parents' home"
    ],
    "correctAnswer": "Turkey crisps from a hotel vending machine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: Christmas 2022",
      "Storyline: Kevin Turkey Crisps From Vending Machine",
      "Answer: Turkey crisps from a hotel vending machine",
      "Character/incident: Kevin Plans Unappealing Christmas Dinner",
      "Episode clue: Christmas 2022",
      "Subject: Divorced Dads Hotel Dinner",
      "Period: 2016-2022",
      "Screenplay context: Vending Machine Turkey Crisps"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39305",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland's Last Christmas, what gadget bought by Paul keeps the visiting grandparents occupied?",
    "answers": [
      "A games console",
      "A karaoke machine",
      "A virtual-reality headset",
      "A drone"
    ],
    "correctAnswer": "A virtual-reality headset",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: Christmas 2022",
      "Storyline: Paul Virtual Reality Headset",
      "Answer: A virtual-reality headset",
      "Character/incident: Paul Virtual Reality Headset",
      "Episode clue: Christmas 2022",
      "Subject: Paul Virtual Reality Headset",
      "Period: 2016-2022",
      "Screenplay context: Paul Virtual Reality Headset"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39306",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland's Last Christmas, why does Liz unexpectedly spend Christmas at Julia's?",
    "answers": [
      "Her flight to Scotland is cancelled",
      "Her house loses electricity",
      "She forgets her own Christmas plans",
      "Her ex cancels after a Christmas Eve drinking session"
    ],
    "correctAnswer": "Her ex cancels after a Christmas Eve drinking session",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: Christmas 2022",
      "Storyline: Liz Ex Cancels Christmas",
      "Answer: Her ex cancels after a Christmas Eve drinking session",
      "Character/incident: Liz Ex Cancels Christmas",
      "Episode clue: Christmas 2022",
      "Subject: Liz Ex Cancels Christmas",
      "Period: 2016-2022",
      "Screenplay context: Liz Ex Cancels Christmas"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39307",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland's Last Christmas, who is Johnny's new wife at Amanda's blended Christmas gathering?",
    "answers": [
      "Tamara",
      "Meg",
      "Marion",
      "Felicity"
    ],
    "correctAnswer": "Tamara",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: Christmas 2022",
      "Storyline: Johnny New Wife Tamara",
      "Answer: Tamara",
      "Character/incident: Johnny New Wife Tamara",
      "Episode clue: Christmas 2022",
      "Subject: Johnny New Wife Tamara",
      "Period: 2016-2022",
      "Screenplay context: Johnny New Wife Tamara"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39308",
    "category": "Television",
    "programme": "Motherland",
    "question": "Who plays Amanda's mother Felicity in Motherland's final Christmas special?",
    "answers": [
      "Ellie Haddington",
      "Joanna Lumley",
      "Penny Ryder",
      "Philippa Dunne"
    ],
    "correctAnswer": "Joanna Lumley",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: Christmas 2022",
      "Storyline: Joanna Lumley Felicity Casting",
      "Answer: Joanna Lumley",
      "Character/incident: Joanna Lumley Felicity Casting",
      "Episode clue: Christmas 2022",
      "Subject: Joanna Lumley Felicity Casting",
      "Period: 2016-2022",
      "Screenplay context: Joanna Lumley Felicity Casting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39309",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland's Last Christmas, how many cousins does Anne plan to welcome for her family celebration?",
    "answers": [
      "Twelve",
      "Sixteen",
      "Twenty-nine",
      "Thirty-five"
    ],
    "correctAnswer": "Twenty-nine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: Christmas 2022",
      "Storyline: Anne Twenty Nine Cousins",
      "Answer: Twenty-nine",
      "Character/incident: Anne Twenty Nine Cousins",
      "Episode clue: Christmas 2022",
      "Subject: Anne Twenty Nine Cousins",
      "Period: 2016-2022",
      "Screenplay context: Anne Twenty Nine Cousins"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39310",
    "category": "Television",
    "programme": "Motherland",
    "question": "In Motherland's Last Christmas, whose disappointing present leaves Meg questioning how well he knows her?",
    "answers": [
      "Kevin's",
      "Her friend Liz's",
      "Amanda's",
      "Her husband Bill's"
    ],
    "correctAnswer": "Her husband Bill's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: Christmas 2022",
      "Storyline: Husband Bill Disappointing Present",
      "Answer: Her husband Bill's",
      "Character/incident: Husband Bill Disappointing Present",
      "Episode clue: Christmas 2022",
      "Subject: Husband Bill Disappointing Present",
      "Period: 2016-2022",
      "Screenplay context: Husband Bill Disappointing Present"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39311",
    "category": "Television",
    "programme": "Motherland",
    "question": "Who plays Meg's husband Bill in Motherland's Last Christmas?",
    "answers": [
      "Anthony Head",
      "David Calder",
      "Oliver Chris",
      "Terry Mynott"
    ],
    "correctAnswer": "Anthony Head",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "2010s British Television",
      "Comedy",
      "Sitcom",
      "Motherland",
      "Programme: Motherland",
      "BBC Television",
      "Sharon Horgan",
      "Episode: Christmas 2022",
      "Storyline: Anthony Head Bill Casting",
      "Answer: Anthony Head",
      "Character/incident: Anthony Head Bill Casting",
      "Episode clue: Christmas 2022",
      "Subject: Anthony Head Bill Casting",
      "Period: 2016-2022",
      "Screenplay context: Anthony Head Bill Casting"
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
      q.dailyEligible !== true)) {
  throw new Error('Pack 362 narrative audit validation failed');
}
module.exports = questions;
