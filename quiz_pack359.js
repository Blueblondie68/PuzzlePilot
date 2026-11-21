
  // quiz_pack359.js
  // PuzzlePilot — The Bigggggg Quiz
  // Television: Coupling (UK, 2000–2004) and The Book Group (2002–2003).
  // Both listed as outstanding in PP_Quiz_Master_Through_Pack_351_Corrected.xlsx.
  // Fact references: British Comedy Guide, TVmaze, Apple TV and epguides.
  // Seven distinct, fact-specific tags per question plus programme identifiers.
  // Complete WordPad-ready CommonJS file. No external dependencies.

  const FIRST_ID = 17679;

  // Layout: question | correct answer | three wrong answers | difficulty | seven bespoke tags
  const couplingFacts = `Who wrote and created the British sitcom Coupling?|Steven Moffat|Richard Curtis|John Sullivan|Simon Nye|Easy|Steven Moffat|Programme Creator|BBC Comedy Writer|Relationship Sitcom|Original Scripts|Creative Credits|British Television
  Which actor played Steve Taylor in Coupling?|Jack Davenport|Richard Coyle|Ben Miles|Richard Mylan|Easy|Jack Davenport|Steve Taylor|Lead Actor|Main Cast|Character Casting|BBC Sitcom|Romantic Lead
  Who portrayed Susan Walker in Coupling?|Sarah Alexander|Gina Bellman|Kate Isitt|Amanda Abbington|Easy|Sarah Alexander|Susan Walker|Lead Actress|Steve Partner|Main Cast|Character Casting|BBC Television
  Who played Jane Christie in Coupling?|Gina Bellman|Sarah Alexander|Kate Isitt|Olivia Caffrey|Easy|Gina Bellman|Jane Christie|Main Actress|Steve Former Girlfriend|Group Friend|Character Casting|Ensemble Comedy
  Which actor played the anxious Jeff in the first three series of Coupling?|Richard Coyle|Jack Davenport|Ben Miles|Richard Mylan|Easy|Richard Coyle|Jeff Murdoch|Original Cast|Series One To Three|Awkward Friend|Character Actor|Cast Departure
  Who portrayed Sally Harper in Coupling?|Kate Isitt|Gina Bellman|Sarah Alexander|Amanda Abbington|Easy|Kate Isitt|Sally Harper|Main Cast|Patrick Relationship|Character Actress|Friendship Group|Romantic Comedy
  Which actor played Patrick Maitland in Coupling?|Ben Miles|Richard Mylan|Jack Davenport|Richard Coyle|Easy|Ben Miles|Patrick Maitland|Male Lead|Sally Romance|Main Cast|Character Actor|BBC Comedy
  Which performer joined the regular Coupling cast as Oliver Morris in series four?|Richard Mylan|Richard Coyle|Ben Miles|Jack Davenport|Medium|Richard Mylan|Oliver Morris|Series Four|New Regular|Character Introduction|2004 Cast|Jane Blind Date
  On which BBC channel did Coupling originally debut?|BBC Two|BBC One|BBC Three|BBC Four|Easy|BBC Two|Original Broadcaster|First Three Series|Programme Launch|2000 Transmission|British Sitcom|BBC Network
  Which BBC channel premiered Coupling's fourth series?|BBC Three|BBC Two|BBC One|BBC Four|Medium|BBC Three|Fourth Series|2004 Broadcast|Channel Move|Programme Transmission|BBC Scheduling|Final Run
  In which year did the UK sitcom Coupling first air?|2000|1995|2004|2008|Easy|2000 Premiere|12 May 2000|Series Debut|BBC Two|Television Timeline|Original Run|Opening Episode
  How many original television series of Coupling were produced?|Four|Two|Three|Five|Medium|Four Series|2000 To 2004|Programme Run|Series Count|BBC Comedy Archive|Production History|Final Series
  How many episodes made up the original UK run of Coupling?|28|18|24|36|Medium|Twenty Eight Episodes|Four Series|BBC Sitcom Total|Episode Count|Original UK Show|Programme History|Television Archive
  Which company produced Coupling for the BBC?|Hartswood Films|Tiger Aspect Productions|Ragdoll Productions|Cosgrove Hall Films|Hard|Hartswood Films|Production Company|BBC Commission|Steven Moffat|Programme Credits|Independent Producer|British Comedy
  Who produced Coupling and was also the real-life partner of its writer?|Sue Vertue|Anne Wood|Beryl Bainbridge|Jane Tranter|Hard|Sue Vertue|Steven Moffat|Series Producer|Real Life Relationship|Coupling Inspiration|Hartswood Films|Production Credits
  Whom is Steve trying to break up with in the opening episode Flushed?|Jane Christie|Susan Walker|Sally Harper|Julia|Easy|Flushed|Steve Taylor|Jane Christie|Opening Episode|Breakup Attempt|First Relationship|2000 Story
  In Size Matters, who invites Steve home for a meal on their date?|Susan Walker|Jane Christie|Sally Harper|Julia|Easy|Size Matters|Susan Walker|Steve Taylor|Dinner Date|Home Cooking|First Series|Relationship Development
  Whose aunt's funeral sets off a chain of awkward date arrangements in Sex Death And Nudity?|Jane Christie's|Sally Harper's|Susan Walker's|Patrick Maitland's|Medium|Sex Death And Nudity|Jane Christie|Aunt Funeral|Pretend Boyfriend|Group Attendance|Series One|Awkward Social Event
  In Inferno, what collection does Steve fear Susan has discovered?|His private videos|His old love letters|His secret diaries|His photographs|Medium|Inferno|Steve Taylor|Susan Walker|Video Collection|Dinner Party|Embarrassing Discovery|Series One
  Which language does the woman Jeff meets in The Girl With Two Breasts speak?|Hebrew|French|Italian|German|Medium|Girl With Two Breasts|Jeff Murdoch|Hebrew Language|Bar Encounter|Language Barrier|Series One|Miscommunication
  What does Patrick keep in his notorious cupboard in Coupling?|Videos of former partners|Old school report cards|Signed football shirts|Travel photographs|Medium|Cupboard Of Patricks Love|Patrick Maitland|Private Recordings|Former Girlfriends|Series One Finale|Hidden Collection|Relationship Secrets
  Where does Jeff repeatedly see the woman he fancies in The Man With Two Legs?|On his commute|At a gym|At a wedding|In a supermarket|Medium|Man With Two Legs|Jeff Murdoch|Daily Commute|Stranger Attraction|Series Two Premiere|Public Transport|Awkward Conversation
  Whose parents are invited to Steve and Susan's dinner party in My Dinner In Hell?|Susan's|Steve's|Jane's|Patrick's|Medium|My Dinner In Hell|Susan Parents|Steve Taylor|Family Dinner|Series Two|Relationship Nerves|Meeting Parents
  Whom does Steve unexpectedly find unclothed in Susan's kitchen in Her Best Friend's Bottom?|Sally Harper|Jane Christie|Julia|Susan Walker|Medium|Her Best Friends Bottom|Sally Harper|Steve Taylor|Susan Kitchen|Embarrassing Encounter|Series Two|Unexpected Visitor
  What does Jane fashion from a pink sock after losing her job in Jane And The Truth Snake?|A puppet named Jake|A toy elephant|A knitted hat|A cover for her phone|Medium|Jane And The Truth Snake|Jane Christie|Jake Puppet|Pink Sock|Job Loss|Series Two|Improvised Companion
  What anniversary worries Steve in the Coupling episode Gotcha?|His first date with Susan|His wedding anniversary|His first day at work|His first date with Jane|Medium|Gotcha|Steve And Susan|First Date Anniversary|Proposal Anxiety|Restaurant Meal|Series Two|Romantic Expectations
  Which character finds herself unclothed at a party full of strangers in Dressed?|Jane Christie|Sally Harper|Susan Walker|Julia|Medium|Dressed|Jane Christie|Strangers Party|Embarrassing Situation|Series Two|Party Scene|Lost Clothes
  In Naked, which workplace figure catches Jeff's romantic interest?|A senior partner|The receptionist|A visiting journalist|A building caretaker|Medium|Naked|Jeff Murdoch|Senior Partner|Office Romance|Series Two|Flirting Mishaps|Workplace Attraction
  What is accidentally exchanged between Susan and Jeff in The End Of The Line?|Their mobile phones|Their house keys|Their suitcases|Their wallets|Medium|End Of The Line|Susan Walker|Jeff Murdoch|Mixed Up Phones|Telephone Confusion|Series Two Finale|Mobile Technology
  What is the name of Jeff's work colleague whose invitation causes confusion in Faithless?|Wilma|Julia|Linda|Emma|Medium|Faithless|Wilma|Jeff Murdoch|Office Colleague|Uncertain Date|Series Three|Romantic Misreading
  Which two characters recall how they first met in Remember This?|Sally and Patrick|Steve and Jane|Susan and Jeff|Jane and Oliver|Medium|Remember This|Sally Harper|Patrick Maitland|First Meeting|Different Memories|Series Three|Relationship History
  What unusual mark on his body alarms Steve in The Freckle The Key And The Couple Who Weren't?|A freckle|A tattoo|A scar|A bruise|Medium|Freckle Key Couple|Steve Taylor|Skin Worry|Health Anxiety|Series Three|Body Mark|Awkward Problem
  How does Patrick misleadingly describe Sally to his new girlfriend Jennifer in The Girl With One Heart?|As a lesbian|As his sister|As his solicitor|As a neighbour|Hard|The Girl With One Heart|Patrick Maitland|Sally Harper|Jennifer|Misrepresented Relationship|Series Three|Jealousy
  In Perhaps Perhaps Perhaps, what causes confusion when the women compare tests?|An unidentified positive pregnancy test|A lost wedding ring|A mixed-up DNA sample|A missing passport|Medium|Perhaps Perhaps Perhaps|Pregnancy Tests|Sally Harper|Susan Walker|Jane Christie|Series Three Finale|Uncertain Result
  Who meets Oliver Morris on a blind date in the fourth-series opener 9½ Minutes?|Jane Christie|Susan Walker|Sally Harper|Wilma|Medium|Nine And A Half Minutes|Jane Christie|Oliver Morris|Blind Date|Series Four Opener|2004 Episode|New Couple
  What news is troubling Steve during the series-four episode Nightlines?|Susan is pregnant|Jane is leaving Britain|Jeff is moving back|Patrick is changing jobs|Easy|Nightlines|Susan Pregnancy|Steve Taylor|Recurring Nightmare|Series Four|Relationship Anxiety|Expecting Baby
  What class do Steve and Susan prepare to attend in Circus Of The Epidurals?|An antenatal class|A salsa class|A driving class|A pottery class|Easy|Circus Of The Epidurals|Steve And Susan|Antenatal Preparation|Expected Baby|Birth Preparation|Series Four|Parenthood
  Whose untidy flat does Jane visit in The Naked Living Room?|Oliver's|Patrick's|Jeff's|Steve's|Medium|Naked Living Room|Oliver Morris|Jane Christie|Unprepared Flat|Supermarket Encounter|Series Four|New Relationship
  What happens to Susan in the final UK Coupling episode 9½ Months?|She goes into labour|She moves to New York|She gets married to Jeff|She leaves Steve|Easy|Nine And A Half Months|Susan Walker|Labour Begins|Series Finale|Steve Taylor|Expecting Parents|2004 Ending
  Which male character leaves the regular group before the fourth series of Coupling?|Jeff Murdoch|Patrick Maitland|Steve Taylor|Oliver Morris|Medium|Jeff Murdoch|Richard Coyle|Cast Change|Series Three Exit|Series Four Transition|Original Friends|2004 Programme
  In Coupling, what type of shop does Oliver Morris run before he joins the friendship group?|A science-fiction bookshop|A record shop|An antique bookshop|A comic-book publisher|Medium|Oliver Morris|Science Fiction Bookshop|Series Four Newcomer|Jane Blind Date|Shop Owner|2004 Relationship Comedy|Character Occupation`;

  const bookGroupFacts = `Which British broadcaster originally showed The Book Group?|Channel 4|BBC One|ITV|BBC Two|Easy|Channel Four|Original Broadcaster|Scottish Comedy|2002 Premiere|UK Television|Broadcast Network|Series Launch
  In which year did The Book Group first air?|2002|1998|2005|2010|Easy|2002 Debut|12 April 2002|First Series|Original Broadcast|Channel Four|Television Timeline|Programme Premiere
  How many series of The Book Group were produced?|Two|One|Three|Four|Medium|Two Series|2002 And 2003|Programme Run|Series Count|Channel Four Comedy|Production History|Final Series
  How many television episodes did The Book Group have altogether?|12|6|18|24|Medium|Twelve Episodes|Six Per Series|Original Show|Episode Count|Broadcast Catalogue|Channel Four|Programme Length
  In which Scottish city is The Book Group mainly set?|Glasgow|Edinburgh|Aberdeen|Dundee|Easy|Glasgow|Scottish Setting|Clare Arrival|Local Book Club|Series Location|Urban Comedy|Scotland
  Where has Clare Pettengill moved from when she starts her book group?|The United States|Canada|Australia|Ireland|Easy|Clare Pettengill|American Newcomer|Move To Glasgow|Cultural Adjustment|Series Premise|Expat Character|New Friends
  In the opening episode of The Book Group, what unusual setting first brings writer Kenny into Clare's circle?|The new book group that she assembles|A reading at a public library|A writing class at a college|An authors' signing event|Medium|On the Road|Clare Pettengill|Kenny McLeod|First Meeting|Glasgow Newcomer|Literary Social Group|2002 Channel Four
  Which actress played Clare Pettengill in The Book Group?|Anne Dudek|Michelle Gomez|Saskia Mulder|Bonnie Engstrom|Easy|Anne Dudek|Clare Pettengill|Lead Actress|American Character|Casting|Channel Four Comedy|Main Role
  Who wrote and directed The Book Group?|Annie Griffin|Steven Moffat|Julia Davis|Caroline Aherne|Medium|Annie Griffin|Writer And Director|Programme Creator|Scottish Sitcom|Creative Credits|Channel Four|Original Series
  Which actor played Kenny McLeod in The Book Group?|Rory McCann|James Lance|Derek Riddell|Jack Davenport|Medium|Rory McCann|Kenny McLeod|Club Member|Aspiring Writer|Actor Casting|Wheelchair User|Ensemble
  Which performer portrayed Janice in The Book Group?|Michelle Gomez|Anne Dudek|Bonnie Engstrom|Saskia Mulder|Medium|Michelle Gomez|Janice|Book Group Member|Actress Casting|Scottish Character|Club Ensemble|Programme Cast
  Who played Fist de Grooke in The Book Group?|Saskia Mulder|Anne Dudek|Michelle Gomez|Karen Kilgariff|Medium|Saskia Mulder|Fist De Grooke|Dutch Member|Club Ensemble|Actress Casting|Supporting Role|Literary Group
  Which actress portrayed Dirka in The Book Group?|Bonnie Engstrom|Saskia Mulder|Michelle Gomez|Anne Dudek|Medium|Bonnie Engstrom|Dirka|Book Club Member|Actress Casting|Ensemble Character|Scottish Comedy|Supporting Role
  Which actor played the group member Rab?|Derek Riddell|James Lance|Rory McCann|Richard Coyle|Medium|Derek Riddell|Rab|Book Club Member|Actor Casting|Scottish Character|Supporting Cast|Club Regular
  Which actor portrayed both Barney and his brother Lachlan?|James Lance|Rory McCann|Derek Riddell|Peter Blake|Hard|James Lance|Barney|Lachlan Glendenning|Brothers|Dual Role|Actor Casting|Series Storyline
  Who played Clare's sister Jean in the later episodes of The Book Group?|Karen Kilgariff|Anne Dudek|Bonnie Engstrom|Michelle Gomez|Hard|Karen Kilgariff|Jean Pettengill|Clare Sister|Series Two Cast|Visiting Relative|Actress Role|Family Character
  Which book-group member works at a leisure centre in the episode The Alchemist?|Kenny|Rab|Barney|Lachlan|Medium|The Alchemist|Kenny McLeod|Leisure Centre Job|Series One|Workplace|Romantic Admirer|2002 Story
  Which two members are inspired to write novels in Magical Realism?|Kenny and Clare|Fist and Dirka|Janice and Rab|Barney and Jean|Medium|Magical Realism|Kenny McLeod|Clare Pettengill|Novel Writing|Literary Ambitions|Series One|Group Reading
  In Bedtime Stories, Janice has an affair with a writer of what genre?|Thrillers|Travel guides|Cookbooks|Poetry|Medium|Bedtime Stories|Janice|Martin Logan|Thriller Author|Extramarital Affair|Series One|Famous Novelist
  What is the first name of the thriller writer Janice becomes involved with?|Martin|Barney|Rab|Lachlan|Medium|Martin Logan|Janice Affair|Thriller Writer|Bedtime Stories|Famous Author|Series One|Romantic Plot
  What happens to Barney before his brother arrives in A Little More Living?|He dies of an overdose|He moves to London|He joins the army|He inherits a house|Medium|A Little More Living|Barney Death|Drug Overdose|Lachlan Arrival|First Series Finale|Clare Pettengill|Family Tragedy
  Who arrives to tell Clare of Barney's death?|His brother Lachlan|His friend Rab|His father|His publisher|Medium|Lachlan Glendenning|Barney Brother|Clare Pettengill|Death Notification|A Little More Living|Series One Finale|New Relationship
  Who visits Clare and overstays in the series-two opener Sueños?|Her sister Jean|Her mother|Her former boss|Her university tutor|Medium|Suenos|Jean Pettengill|Clare Sister|Unwanted Visit|Series Two Premiere|Family Tension|2003 Episode
  Who does Kenny introduce to the book group as his new girlfriend in Hunger?|Carol Ann|Jean|Janice|Fist|Medium|Hunger Episode|Kenny Girlfriend|Carol Ann|Book Group Meeting|Series Two|Romantic Partner|Member Reactions
  What is the title of Kenny's novel that gains him attention in You Must Change Your Life?|Peaks in the Mist|The Secret Garden|The Alchemist|On the Road|Hard|Peaks In The Mist|Kenny McLeod|Published Novel|Book Tour|You Must Change Your Life|Series Two|Literary Success
  In Drowning, whose injury causes Clare to take on a caregiving role?|Lachlan's|Kenny's|Rab's|Barney's|Medium|Drowning|Lachlan Injury|Clare Caregiver|Series Two|Relationship Stress|Domestic Life|2003 Episode
  In Research, what misunderstanding occurs while Jean investigates material for her book?|She is mistaken for a prostitute|She is mistaken for a doctor|She is mistaken for a police officer|She is mistaken for a journalist|Medium|Research Episode|Jean Pettengill|Book Research|Mistaken Identity|Prostitute Confusion|Series Two|Author Work
  In the final episode A'Salaam Insh'Allah, who proposes marriage to Clare?|Lachlan|Kenny|Rab|Martin|Medium|ASalaam InshAllah|Lachlan|Clare Pettengill|Marriage Proposal|Series Two Finale|Uncertain Response|2003 Ending
  What occasion does Jean celebrate with a party in the final episode of The Book Group?|Landing a book deal|Getting married|Completing a marathon|Opening a cafe|Medium|Jean Pettengill|Book Deal|Celebration Party|ASalaam InshAllah|Series Finale|Publishing Success|2003 Story
  Which person does Janice declare her love for after drinking at Jean's party?|Rab|Kenny|Lachlan|Barney|Medium|Janice|Rab|Love Confession|Jean Party|Series Two Finale|Drunken Declaration|Romantic Complication`;

  const normalise = value => value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
  const questions = [];

  function addProgramme(programme, sharedTags, factBlock) {
    for (const line of factBlock.trim().split('\n')) {
      const id = 'tv_' + String(FIRST_ID + questions.length).padStart(5, '0');
      const fields = line.trim().split('|').map(value => value.trim());
      if (fields.length !== 13) {
        throw new Error('Pack 359: incorrect number of fields for ' + id);
      }
      const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...bespokeTags] = fields;
      if ([question, correctAnswer, wrong1, wrong2, wrong3, ...bespokeTags].some(v => !v)) {
        throw new Error('Pack 359: blank field for ' + id);
      }
      if (!['Easy', 'Medium', 'Hard'].includes(difficulty) ||
          bespokeTags.length !== 7 || new Set(bespokeTags.map(normalise)).size !== 7) {
        throw new Error('Pack 359: invalid difficulty or bespoke tags for ' + id);
      }
      const answers = [wrong1, wrong2, wrong3];
      if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4) {
        throw new Error('Pack 359: repeated answer choice for ' + id);
      }
      answers.splice(questions.length % 4, 0, correctAnswer);
      const tags = [...new Map([
        'Television', 'British Television', 'Comedy', 'Sitcom',
        ...sharedTags, programme, 'Programme: ' + programme,
        correctAnswer, ...bespokeTags
      ].map(tag => [normalise(tag), tag])).values()];
      questions.push({
        id,
        category: 'Television',
        programme,
        question,
        answers,
        correctAnswer,
        difficulty,
        tags,
        dailyEligible: true
      });
    }
  }

  addProgramme('Coupling', ['BBC Two', 'BBC Three', '2000-2004', 'Steven Moffat', 'Relationship Comedy'], couplingFacts);
  addProgramme('The Book Group', ['Channel 4', '2002-2003', 'Annie Griffin', 'Glasgow Comedy'], bookGroupFacts);

  // Validate the actual exported objects, not just the source rows.
  if (!questions.length || questions[0].id !== 'tv_17679' ||
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
        q.dailyEligible !== true || !['Easy', 'Medium', 'Hard'].includes(q.difficulty)
      )) {
    throw new Error('Pack 359: exported question validation failed');
  }

  
// Pack 359 detailed episode audit (21 November 2026). Historical IDs unchanged.
const auditAdditions = [
  {
    "id": "tv_39082",
    "category": "Television",
    "programme": "Coupling",
    "question": "Where do Steve and Susan first meet while he is trying to end his relationship with Jane?",
    "answers": [
      "At a railway station",
      "In an office lift",
      "At a wedding reception",
      "In the women's toilets of a bar"
    ],
    "correctAnswer": "In the women's toilets of a bar",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Flushed",
      "Story fact: Bar toilet meeting",
      "Correct: In the women's toilets of a bar",
      "Specific episode plot: Bar toilet meeting",
      "2000–2004 TV Comedy",
      "Characters and story: Bar toilet meeting",
      "Plot setting: Flushed",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39083",
    "category": "Television",
    "programme": "Coupling",
    "question": "Which of Susan's friends cancels her facial appointment before the dinner where she meets Steve?",
    "answers": [
      "Sally Harper",
      "Jane Christie",
      "Julia Davis",
      "Wilma"
    ],
    "correctAnswer": "Sally Harper",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Flushed",
      "Story fact: Cancelled facial appointment",
      "Correct: Sally Harper",
      "Specific episode plot: Cancelled facial appointment",
      "2000–2004 TV Comedy",
      "Characters and story: Cancelled facial appointment",
      "Plot setting: Flushed",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39084",
    "category": "Television",
    "programme": "Coupling",
    "question": "What unusual warning does Jeff give Steve about the risks of leaving on a single sock during romance?",
    "answers": [
      "The handkerchief trap",
      "The sock gap",
      "The cardigan crisis",
      "The trouser rule"
    ],
    "correctAnswer": "The sock gap",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Size Matters",
      "Story fact: Jeff's sock-gap theory",
      "Correct: The sock gap",
      "Specific episode plot: Jeff's sock-gap theory",
      "2000–2004 TV Comedy",
      "Characters and story: Jeff's sock-gap theory",
      "Plot setting: Size Matters",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39085",
    "category": "Television",
    "programme": "Coupling",
    "question": "Which political party's views put Sally off Patrick during their early dating attempts?",
    "answers": [
      "The Liberal Democrats",
      "The Greens",
      "The Conservatives",
      "Labour"
    ],
    "correctAnswer": "The Conservatives",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Size Matters",
      "Story fact: Sally dislikes Patrick's politics",
      "Correct: The Conservatives",
      "Specific episode plot: Sally dislikes Patrick's politics",
      "2000–2004 TV Comedy",
      "Characters and story: Sally dislikes Patrick's politics",
      "Plot setting: Size Matters",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39086",
    "category": "Television",
    "programme": "Coupling",
    "question": "What does Jeff call the urge to laugh at a completely inappropriate moment?",
    "answers": [
      "The laugh reflex",
      "The panic giggle",
      "The comedy spiral",
      "The giggle loop"
    ],
    "correctAnswer": "The giggle loop",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Sex Death And Nudity",
      "Story fact: Jeff describes uncontrollable funeral laughter",
      "Correct: The giggle loop",
      "Specific episode plot: Jeff describes uncontrollable funeral laughter",
      "2000–2004 TV Comedy",
      "Characters and story: Jeff describes uncontrollable funeral laughter",
      "Plot setting: Sex Death And Nudity",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39087",
    "category": "Television",
    "programme": "Coupling",
    "question": "Who pretends to be Susan's boyfriend at Jane's aunt's funeral?",
    "answers": [
      "Jeff Murdoch",
      "Patrick Maitland",
      "Oliver Morris",
      "Steve Taylor"
    ],
    "correctAnswer": "Jeff Murdoch",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Sex Death And Nudity",
      "Story fact: Pretend boyfriend at funeral",
      "Correct: Jeff Murdoch",
      "Specific episode plot: Pretend boyfriend at funeral",
      "2000–2004 TV Comedy",
      "Characters and story: Pretend boyfriend at funeral",
      "Plot setting: Sex Death And Nudity",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39088",
    "category": "Television",
    "programme": "Coupling",
    "question": "In Coupling, which of Jane's acquaintances is reluctantly drawn into Steve and Susan's disastrous dinner party?",
    "answers": [
      "Giselle",
      "Jill",
      "Jennifer",
      "Julia"
    ],
    "correctAnswer": "Jill",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Inferno",
      "Story fact: Jane's psychologist dinner guest",
      "Correct: Jill",
      "Specific episode plot: Jane's psychologist dinner guest",
      "2000–2004 TV Comedy",
      "Characters and story: Jane's psychologist dinner guest",
      "Plot setting: Inferno",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39089",
    "category": "Television",
    "programme": "Coupling",
    "question": "What does Susan discover about Patrick's video of their earlier relationship?",
    "answers": [
      "He gave it to Jane",
      "He destroyed it in a fire",
      "He recorded over it",
      "He mailed it to Sally"
    ],
    "correctAnswer": "He recorded over it",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Inferno",
      "Story fact: Patrick erased ex-partner tape",
      "Correct: He recorded over it",
      "Specific episode plot: Patrick erased ex-partner tape",
      "2000–2004 TV Comedy",
      "Characters and story: Patrick erased ex-partner tape",
      "Plot setting: Inferno",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39090",
    "category": "Television",
    "programme": "Coupling",
    "question": "How do Jeff and his Israeli admirer finally overcome their language barrier?",
    "answers": [
      "By writing in English",
      "By using a dictionary",
      "By exchanging phone numbers",
      "With the help of an interpreter"
    ],
    "correctAnswer": "With the help of an interpreter",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: The Girl With Two Breasts",
      "Story fact: Hebrew misunderstanding interpreter",
      "Correct: With the help of an interpreter",
      "Specific episode plot: Hebrew misunderstanding interpreter",
      "2000–2004 TV Comedy",
      "Characters and story: Hebrew misunderstanding interpreter",
      "Plot setting: The Girl With Two Breasts",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39091",
    "category": "Television",
    "programme": "Coupling",
    "question": "What false disability does Jeff claim to have to impress a woman he sees on the train?",
    "answers": [
      "A wooden leg",
      "Poor eyesight",
      "A hearing impairment",
      "A missing finger"
    ],
    "correctAnswer": "A wooden leg",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: The Man With Two Legs",
      "Story fact: Jeff invents prosthetic leg",
      "Correct: A wooden leg",
      "Specific episode plot: Jeff invents prosthetic leg",
      "2000–2004 TV Comedy",
      "Characters and story: Jeff invents prosthetic leg",
      "Plot setting: The Man With Two Legs",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39092",
    "category": "Television",
    "programme": "Coupling",
    "question": "To which sort of group is Jeff introduced after telling the woman on the train he has a wooden leg?",
    "answers": [
      "A veterans' choir",
      "A support group for amputees",
      "A running club",
      "A university society"
    ],
    "correctAnswer": "A support group for amputees",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: The Man With Two Legs",
      "Story fact: Jeff meets disability support group",
      "Correct: A support group for amputees",
      "Specific episode plot: Jeff meets disability support group",
      "2000–2004 TV Comedy",
      "Characters and story: Jeff meets disability support group",
      "Plot setting: The Man With Two Legs",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39093",
    "category": "Television",
    "programme": "Coupling",
    "question": "Which news presenter does Steve unexpectedly meet on the way to the loo during a disastrous dinner-party episode?",
    "answers": [
      "Fiona Bruce",
      "Kirsty Wark",
      "Mariella Frostrup",
      "Sian Williams"
    ],
    "correctAnswer": "Mariella Frostrup",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: My Dinner In Hell",
      "Story fact: Steve celebrity crush",
      "Correct: Mariella Frostrup",
      "Specific episode plot: Steve celebrity crush",
      "2000–2004 TV Comedy",
      "Characters and story: Steve celebrity crush",
      "Plot setting: My Dinner In Hell",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39094",
    "category": "Television",
    "programme": "Coupling",
    "question": "Who ends up receiving a mistakenly chosen adult novelty gift from Steve?",
    "answers": [
      "Steve's parents",
      "Jane's psychologist",
      "Jeff's boss",
      "Susan's parents"
    ],
    "correctAnswer": "Susan's parents",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: My Dinner In Hell",
      "Story fact: Wrong present at dinner",
      "Correct: Susan's parents",
      "Specific episode plot: Wrong present at dinner",
      "2000–2004 TV Comedy",
      "Characters and story: Wrong present at dinner",
      "Plot setting: My Dinner In Hell",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39095",
    "category": "Television",
    "programme": "Coupling",
    "question": "Which practical household subject does Susan pressure Steve to have opinions about?",
    "answers": [
      "Cushions and fabrics",
      "Kitchen appliances",
      "Garden furniture",
      "Choosing wallpaper paste"
    ],
    "correctAnswer": "Cushions and fabrics",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Her Best Friend's Bottom",
      "Story fact: Susan seeks decorating opinions",
      "Correct: Cushions and fabrics",
      "Specific episode plot: Susan seeks decorating opinions",
      "2000–2004 TV Comedy",
      "Characters and story: Susan seeks decorating opinions",
      "Plot setting: Her Best Friend's Bottom",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39096",
    "category": "Television",
    "programme": "Coupling",
    "question": "What is the imaginary villain the men invent to describe Patrick's sexual performance worries?",
    "answers": [
      "The Sock Monster",
      "The Melty Man",
      "The Lurgy Lord",
      "The Panic Man"
    ],
    "correctAnswer": "The Melty Man",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: The Melty Man Cometh",
      "Story fact: Imagined performance-anxiety villain",
      "Correct: The Melty Man",
      "Specific episode plot: Imagined performance-anxiety villain",
      "2000–2004 TV Comedy",
      "Characters and story: Imagined performance-anxiety villain",
      "Plot setting: The Melty Man Cometh",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39097",
    "category": "Television",
    "programme": "Coupling",
    "question": "Which new career does Jane hope to pursue after losing her job?",
    "answers": [
      "Airline pilot",
      "Wedding planner",
      "Children's television presenter",
      "Estate agent"
    ],
    "correctAnswer": "Children's television presenter",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Jane And The Truth Snake",
      "Story fact: Jane wants children's television work",
      "Correct: Children's television presenter",
      "Specific episode plot: Jane wants children's television work",
      "2000–2004 TV Comedy",
      "Characters and story: Jane wants children's television work",
      "Plot setting: Jane And The Truth Snake",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39098",
    "category": "Television",
    "programme": "Coupling",
    "question": "What forthcoming social event causes Steve to panic that Susan will expect a proposal?",
    "answers": [
      "An engagement party for Jeff",
      "His parents' anniversary",
      "A baptism",
      "A wedding he has been invited to"
    ],
    "correctAnswer": "A wedding he has been invited to",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Gotcha",
      "Story fact: Steve anxious about marriage expectations",
      "Correct: A wedding he has been invited to",
      "Specific episode plot: Steve anxious about marriage expectations",
      "2000–2004 TV Comedy",
      "Characters and story: Steve anxious about marriage expectations",
      "Plot setting: Gotcha",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39099",
    "category": "Television",
    "programme": "Coupling",
    "question": "What is Jane wearing beneath her coat when she arrives at what turns out to be a group dinner party?",
    "answers": [
      "Nothing",
      "A fancy dress costume",
      "Her pyjamas",
      "A bridesmaid's dress"
    ],
    "correctAnswer": "Nothing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Dressed",
      "Story fact: Jane's mistaken private date",
      "Correct: Nothing",
      "Specific episode plot: Jane's mistaken private date",
      "2000–2004 TV Comedy",
      "Characters and story: Jane's mistaken private date",
      "Plot setting: Dressed",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39100",
    "category": "Television",
    "programme": "Coupling",
    "question": "What birthday surprise does Jeff misunderstand before embarrassing himself at work?",
    "answers": [
      "A romantic hotel booking",
      "A surprise party organised by his friends",
      "A private limousine ride",
      "A birthday meal with Patrick"
    ],
    "correctAnswer": "A surprise party organised by his friends",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Naked",
      "Story fact: Jeff mistakes surprise party for private encounter",
      "Correct: A surprise party organised by his friends",
      "Specific episode plot: Jeff mistakes surprise party for private encounter",
      "2000–2004 TV Comedy",
      "Characters and story: Jeff mistakes surprise party for private encounter",
      "Plot setting: Naked",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39101",
    "category": "Television",
    "programme": "Coupling",
    "question": "What imaginary Australian restaurant does Steve invent during an elaborate phone misunderstanding?",
    "answers": [
      "Kangaroo Steakhouse",
      "Sydney Harbour Café",
      "Bruce's Bar and Grill",
      "The Outback Grill"
    ],
    "correctAnswer": "Bruce's Bar and Grill",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: The End Of The Line",
      "Story fact: Invented restaurant identity",
      "Correct: Bruce's Bar and Grill",
      "Specific episode plot: Invented restaurant identity",
      "2000–2004 TV Comedy",
      "Characters and story: Invented restaurant identity",
      "Plot setting: The End Of The Line",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39102",
    "category": "Television",
    "programme": "Coupling",
    "question": "How is much of the Coupling episode Split presented to show Steve and Susan's separate experiences?",
    "answers": [
      "Silent black-and-white footage",
      "A newspaper montage",
      "An animated comic strip",
      "Split-screen storytelling"
    ],
    "correctAnswer": "Split-screen storytelling",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Split",
      "Story fact: Narratives in parallel",
      "Correct: Split-screen storytelling",
      "Specific episode plot: Narratives in parallel",
      "2000–2004 TV Comedy",
      "Characters and story: Narratives in parallel",
      "Plot setting: Split",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39103",
    "category": "Television",
    "programme": "Coupling",
    "question": "What discreet device lets the others feed Jeff dating advice while he meets Wilma?",
    "answers": [
      "An earpiece",
      "A pager",
      "A wristwatch radio",
      "A hidden microphone in his jacket"
    ],
    "correctAnswer": "An earpiece",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Faithless",
      "Story fact: Remote dating advice",
      "Correct: An earpiece",
      "Specific episode plot: Remote dating advice",
      "2000–2004 TV Comedy",
      "Characters and story: Remote dating advice",
      "Plot setting: Faithless",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39104",
    "category": "Television",
    "programme": "Coupling",
    "question": "What fictional tragedy does Jeff claim has happened to his girlfriend in an effort to deter Wilma?",
    "answers": [
      "She has moved to Iceland",
      "She has died",
      "She is in prison",
      "She has married his brother"
    ],
    "correctAnswer": "She has died",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Unconditional Sex",
      "Story fact: Jeff invents girlfriend death",
      "Correct: She has died",
      "Specific episode plot: Jeff invents girlfriend death",
      "2000–2004 TV Comedy",
      "Characters and story: Jeff invents girlfriend death",
      "Plot setting: Unconditional Sex",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39105",
    "category": "Television",
    "programme": "Coupling",
    "question": "What tune features in Patrick's memory of his first kiss with Sally at Susan's office party?",
    "answers": [
      "The James Bond theme",
      "The Batman theme",
      "The Spider-Man theme",
      "The Superman theme"
    ],
    "correctAnswer": "The Spider-Man theme",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Remember This",
      "Story fact: Kiss remembered with superhero tune",
      "Correct: The Spider-Man theme",
      "Specific episode plot: Kiss remembered with superhero tune",
      "2000–2004 TV Comedy",
      "Characters and story: Kiss remembered with superhero tune",
      "Plot setting: Remember This",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39106",
    "category": "Television",
    "programme": "Coupling",
    "question": "What does Jeff accidentally swallow while Julia is restrained during one of their adventures?",
    "answers": [
      "An engagement ring",
      "A house key",
      "A contact lens",
      "A handcuff key"
    ],
    "correctAnswer": "A handcuff key",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: The Freckle The Key And The Couple Who Weren't",
      "Story fact: Swallowed handcuff key",
      "Correct: A handcuff key",
      "Specific episode plot: Swallowed handcuff key",
      "2000–2004 TV Comedy",
      "Characters and story: Swallowed handcuff key",
      "Plot setting: The Freckle The Key And The Couple Who Weren't",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39107",
    "category": "Television",
    "programme": "Coupling",
    "question": "Which household change causes Steve to panic about privacy in Coupling?",
    "answers": [
      "Susan removes the bathroom-door lock",
      "Susan moves the sofa",
      "Susan removes the bedroom curtains",
      "Susan paints the bedroom pink"
    ],
    "correctAnswer": "Susan removes the bathroom-door lock",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: The Girl With One Heart",
      "Story fact: Removed bathroom lock",
      "Correct: Susan removes the bathroom-door lock",
      "Specific episode plot: Removed bathroom lock",
      "2000–2004 TV Comedy",
      "Characters and story: Removed bathroom lock",
      "Plot setting: The Girl With One Heart",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39108",
    "category": "Television",
    "programme": "Coupling",
    "question": "Who is finally revealed to be pregnant when the friends muddle up their tests?",
    "answers": [
      "Sally Harper",
      "Susan Walker",
      "Jane Christie",
      "Julia Davis"
    ],
    "correctAnswer": "Susan Walker",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Perhaps Perhaps Perhaps",
      "Story fact: Positive pregnancy test mystery resolved",
      "Correct: Susan Walker",
      "Specific episode plot: Positive pregnancy test mystery resolved",
      "2000–2004 TV Comedy",
      "Characters and story: Positive pregnancy test mystery resolved",
      "Plot setting: Perhaps Perhaps Perhaps",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39109",
    "category": "Television",
    "programme": "Coupling",
    "question": "For whose profession do Steve and Susan mistake Jane's blind date Oliver?",
    "answers": [
      "A solicitor",
      "A photographer",
      "A gynaecologist",
      "A financial adviser"
    ],
    "correctAnswer": "A gynaecologist",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Nine And A Half Minutes",
      "Story fact: Mistaken medical professional",
      "Correct: A gynaecologist",
      "Specific episode plot: Mistaken medical professional",
      "2000–2004 TV Comedy",
      "Characters and story: Mistaken medical professional",
      "Plot setting: Nine And A Half Minutes",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39110",
    "category": "Television",
    "programme": "Coupling",
    "question": "How do five of the friends exchange embarrassing revelations in Coupling's final series?",
    "answers": [
      "At a hotel breakfast",
      "Over a pub quiz",
      "Through a chain of letters",
      "During a group telephone call"
    ],
    "correctAnswer": "During a group telephone call",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Nightlines",
      "Story fact: Five-way call",
      "Correct: During a group telephone call",
      "Specific episode plot: Five-way call",
      "2000–2004 TV Comedy",
      "Characters and story: Five-way call",
      "Plot setting: Nightlines",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39111",
    "category": "Television",
    "programme": "Coupling",
    "question": "What blonde-wigged musical performance does Sally give at her first dinner party to embarrass Susan?",
    "answers": [
      "Susan: The Happy Trotting Elf",
      "The Ballad of Jeff Murdoch",
      "The Girl with Two Breasts",
      "My Dinner In Hell"
    ],
    "correctAnswer": "Susan: The Happy Trotting Elf",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Bed Time",
      "Story fact: Sally's party song",
      "Correct: Susan: The Happy Trotting Elf",
      "Specific episode plot: Sally's party song",
      "2000–2004 TV Comedy",
      "Characters and story: Sally's party song",
      "Plot setting: Bed Time",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39112",
    "category": "Television",
    "programme": "Coupling",
    "question": "Who leads the antenatal class that Steve and Susan attend with their friends?",
    "answers": [
      "Jane",
      "Jill",
      "Giselle",
      "Jennifer"
    ],
    "correctAnswer": "Jill",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Circus Of The Epidurals",
      "Story fact: Jill pregnancy-class instructor",
      "Correct: Jill",
      "Specific episode plot: Jill pregnancy-class instructor",
      "2000–2004 TV Comedy",
      "Characters and story: Jill pregnancy-class instructor",
      "Plot setting: Circus Of The Epidurals",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39113",
    "category": "Television",
    "programme": "Coupling",
    "question": "What sight in Oliver's home makes Jane realise how long he has been single?",
    "answers": [
      "A framed wedding photograph",
      "A child's cot",
      "His openly displayed pornography",
      "A large collection of houseplants"
    ],
    "correctAnswer": "His openly displayed pornography",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: The Naked Living Room",
      "Story fact: Oliver no longer hides adult material",
      "Correct: His openly displayed pornography",
      "Specific episode plot: Oliver no longer hides adult material",
      "2000–2004 TV Comedy",
      "Characters and story: Oliver no longer hides adult material",
      "Plot setting: The Naked Living Room",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39114",
    "category": "Television",
    "programme": "Coupling",
    "question": "What does Sally find while looking for the tape of Patrick's previous involvement with Jane?",
    "answers": [
      "A letter from Susan",
      "A plane ticket to Portugal",
      "A photograph of Jeff",
      "An engagement ring intended for Sally"
    ],
    "correctAnswer": "An engagement ring intended for Sally",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Nine And A Half Months",
      "Story fact: Unexpected engagement ring",
      "Correct: An engagement ring intended for Sally",
      "Specific episode plot: Unexpected engagement ring",
      "2000–2004 TV Comedy",
      "Characters and story: Unexpected engagement ring",
      "Plot setting: Nine And A Half Months",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39115",
    "category": "Television",
    "programme": "Coupling",
    "question": "What method of delivery brings Steve and Susan's son into the world in the Coupling finale?",
    "answers": [
      "A caesarean section",
      "A water birth at home",
      "A hospital forceps delivery",
      "A home birth attended by friends"
    ],
    "correctAnswer": "A caesarean section",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Coupling",
      "Programme: Coupling",
      "BBC",
      "Steven Moffat",
      "Episode: Nine And A Half Months",
      "Story fact: Baby's birth by operation",
      "Correct: A caesarean section",
      "Specific episode plot: Baby's birth by operation",
      "2000–2004 TV Comedy",
      "Characters and story: Baby's birth by operation",
      "Plot setting: Nine And A Half Months",
      "Source: https://en.wikipedia.org/wiki/List_of_Coupling_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39116",
    "category": "Television",
    "programme": "The Book Group",
    "question": "Which member of Clare's newly formed book group is married to a Scottish footballer?",
    "answers": [
      "Dirka",
      "Janice",
      "Fist",
      "Jean"
    ],
    "correctAnswer": "Janice",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Book Group",
      "Programme: The Book Group",
      "Channel 4",
      "Annie Griffin",
      "Episode: On the Road",
      "Story fact: Janice footballer wife",
      "Correct: Janice",
      "Specific episode plot: Janice footballer wife",
      "2002–2003 TV Comedy Drama",
      "Characters and story: Janice footballer wife",
      "Plot setting: On the Road",
      "Source: https://www.tvmaze.com/shows/7786/the-book-group/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39117",
    "category": "Television",
    "programme": "The Book Group",
    "question": "Which book-group member is introduced as a keen writer who uses a wheelchair?",
    "answers": [
      "Rab",
      "Barney",
      "Kenny McLeod",
      "Martin Logan"
    ],
    "correctAnswer": "Kenny McLeod",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Book Group",
      "Programme: The Book Group",
      "Channel 4",
      "Annie Griffin",
      "Episode: On the Road",
      "Story fact: New writer in wheelchair",
      "Correct: Kenny McLeod",
      "Specific episode plot: New writer in wheelchair",
      "2002–2003 TV Comedy Drama",
      "Characters and story: New writer in wheelchair",
      "Plot setting: On the Road",
      "Source: https://www.tvmaze.com/shows/7786/the-book-group/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39118",
    "category": "Television",
    "programme": "The Book Group",
    "question": "Who decides to leave her husband after reading the group's latest book?",
    "answers": [
      "Janice",
      "Clare Pettengill",
      "Jean Pettengill",
      "Fist de Grooke"
    ],
    "correctAnswer": "Fist de Grooke",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Book Group",
      "Programme: The Book Group",
      "Channel 4",
      "Annie Griffin",
      "Episode: The Alchemist",
      "Story fact: Leaving husband after reading",
      "Correct: Fist de Grooke",
      "Specific episode plot: Leaving husband after reading",
      "2002–2003 TV Comedy Drama",
      "Characters and story: Leaving husband after reading",
      "Plot setting: The Alchemist",
      "Source: https://www.tvmaze.com/shows/7786/the-book-group/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39119",
    "category": "Television",
    "programme": "The Book Group",
    "question": "Who inspires the woman in Kenny's fictional cabin-in-the-hills romance?",
    "answers": [
      "Fist",
      "Clare",
      "Janice",
      "Jean"
    ],
    "correctAnswer": "Fist",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Book Group",
      "Programme: The Book Group",
      "Channel 4",
      "Annie Griffin",
      "Episode: Magical Realism",
      "Story fact: Kenny's fictional love interest",
      "Correct: Fist",
      "Specific episode plot: Kenny's fictional love interest",
      "2002–2003 TV Comedy Drama",
      "Characters and story: Kenny's fictional love interest",
      "Plot setting: Magical Realism",
      "Source: https://www.tvmaze.com/shows/7786/the-book-group/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39120",
    "category": "Television",
    "programme": "The Book Group",
    "question": "Which character's appearance inspires the professor in Clare's fictional love story?",
    "answers": [
      "Lachlan",
      "Barney",
      "Rab",
      "Martin Logan"
    ],
    "correctAnswer": "Barney",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Book Group",
      "Programme: The Book Group",
      "Channel 4",
      "Annie Griffin",
      "Episode: Magical Realism",
      "Story fact: Professor model in Clare's novel",
      "Correct: Barney",
      "Specific episode plot: Professor model in Clare's novel",
      "2002–2003 TV Comedy Drama",
      "Characters and story: Professor model in Clare's novel",
      "Plot setting: Magical Realism",
      "Source: https://www.tvmaze.com/shows/7786/the-book-group/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39121",
    "category": "Television",
    "programme": "The Book Group",
    "question": "What does Clare resolve to help Barney give up after learning of his dependency?",
    "answers": [
      "Gambling",
      "Smoking",
      "Drugs",
      "Drinking coffee"
    ],
    "correctAnswer": "Drugs",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Book Group",
      "Programme: The Book Group",
      "Channel 4",
      "Annie Griffin",
      "Episode: Bedtime Stories",
      "Story fact: Clare's rescue mission",
      "Correct: Drugs",
      "Specific episode plot: Clare's rescue mission",
      "2002–2003 TV Comedy Drama",
      "Characters and story: Clare's rescue mission",
      "Plot setting: Bedtime Stories",
      "Source: https://www.tvmaze.com/shows/7786/the-book-group/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39122",
    "category": "Television",
    "programme": "The Book Group",
    "question": "Who is an enthusiastic fan of the thriller author involved with Janice?",
    "answers": [
      "Her husband",
      "Her mother",
      "Kenny",
      "Her priest"
    ],
    "correctAnswer": "Her priest",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Book Group",
      "Programme: The Book Group",
      "Channel 4",
      "Annie Griffin",
      "Episode: Bedtime Stories",
      "Story fact: Janice prepares confession",
      "Correct: Her priest",
      "Specific episode plot: Janice prepares confession",
      "2002–2003 TV Comedy Drama",
      "Characters and story: Janice prepares confession",
      "Plot setting: Bedtime Stories",
      "Source: https://www.tvmaze.com/shows/7786/the-book-group/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39123",
    "category": "Television",
    "programme": "The Book Group",
    "question": "Whose novel does Janice's book group attempt to discuss during a distracted meeting?",
    "answers": [
      "Martin Logan's",
      "Kenny McLeod's",
      "Jean Pettengill's",
      "Barney's"
    ],
    "correctAnswer": "Martin Logan's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Book Group",
      "Programme: The Book Group",
      "Channel 4",
      "Annie Griffin",
      "Episode: Dark Alley",
      "Story fact: Group discusses author's thriller",
      "Correct: Martin Logan's",
      "Specific episode plot: Group discusses author's thriller",
      "2002–2003 TV Comedy Drama",
      "Characters and story: Group discusses author's thriller",
      "Plot setting: Dark Alley",
      "Source: https://www.tvmaze.com/shows/7786/the-book-group/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39124",
    "category": "Television",
    "programme": "The Book Group",
    "question": "What is unusual about the loft flat Clare shares with artist boyfriend Lachlan?",
    "answers": [
      "It has a swimming pool",
      "It has almost no furniture",
      "It is inside a church",
      "It has no windows"
    ],
    "correctAnswer": "It has almost no furniture",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Book Group",
      "Programme: The Book Group",
      "Channel 4",
      "Annie Griffin",
      "Episode: Sueños",
      "Story fact: Sparse loft apartment",
      "Correct: It has almost no furniture",
      "Specific episode plot: Sparse loft apartment",
      "2002–2003 TV Comedy Drama",
      "Characters and story: Sparse loft apartment",
      "Plot setting: Sueños",
      "Source: https://www.tvmaze.com/shows/7786/the-book-group/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39125",
    "category": "Television",
    "programme": "The Book Group",
    "question": "Where does Kenny attract enthusiastic readers during his book tour?",
    "answers": [
      "The Isle of Wight",
      "Cornwall",
      "The Outer Isles",
      "Northern France"
    ],
    "correctAnswer": "The Outer Isles",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Book Group",
      "Programme: The Book Group",
      "Channel 4",
      "Annie Griffin",
      "Episode: You Must Change Your Life",
      "Story fact: Fans of Peaks in the Mist",
      "Correct: The Outer Isles",
      "Specific episode plot: Fans of Peaks in the Mist",
      "2002–2003 TV Comedy Drama",
      "Characters and story: Fans of Peaks in the Mist",
      "Plot setting: You Must Change Your Life",
      "Source: https://www.tvmaze.com/shows/7786/the-book-group/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39126",
    "category": "Television",
    "programme": "The Book Group",
    "question": "What dangerous accident leaves Lachlan needing Clare's help while recuperating?",
    "answers": [
      "He crashes a motorbike",
      "He breaks a leg on a ski slope",
      "He falls down a staircase",
      "He falls into an empty swimming pool"
    ],
    "correctAnswer": "He falls into an empty swimming pool",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Book Group",
      "Programme: The Book Group",
      "Channel 4",
      "Annie Griffin",
      "Episode: Drowning",
      "Story fact: Lachlan's fall into empty pool",
      "Correct: He falls into an empty swimming pool",
      "Specific episode plot: Lachlan's fall into empty pool",
      "2002–2003 TV Comedy Drama",
      "Characters and story: Lachlan's fall into empty pool",
      "Plot setting: Drowning",
      "Source: https://www.tvmaze.com/shows/7786/the-book-group/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39127",
    "category": "Television",
    "programme": "The Book Group",
    "question": "Which controversial memoir is the book group's reading choice when Jean is researching her next book?",
    "answers": [
      "The Sexual History of Catherine M.",
      "The Story of O",
      "Lady Chatterley's Lover",
      "Fear of Flying"
    ],
    "correctAnswer": "The Sexual History of Catherine M.",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Book Group",
      "Programme: The Book Group",
      "Channel 4",
      "Annie Griffin",
      "Episode: Research",
      "Story fact: Book club's provocative reading",
      "Correct: The Sexual History of Catherine M.",
      "Specific episode plot: Book club's provocative reading",
      "2002–2003 TV Comedy Drama",
      "Characters and story: Book club's provocative reading",
      "Plot setting: Research",
      "Source: https://www.tvmaze.com/shows/7786/the-book-group/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39128",
    "category": "Television",
    "programme": "The Book Group",
    "question": "What is the first name of Kenny's younger girlfriend whom Clare meets?",
    "answers": [
      "Carol Ann",
      "Harriet",
      "Fist",
      "Jean"
    ],
    "correctAnswer": "Harriet",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Book Group",
      "Programme: The Book Group",
      "Channel 4",
      "Annie Griffin",
      "Episode: Research",
      "Story fact: Kenny's underage girlfriend",
      "Correct: Harriet",
      "Specific episode plot: Kenny's underage girlfriend",
      "2002–2003 TV Comedy Drama",
      "Characters and story: Kenny's underage girlfriend",
      "Plot setting: Research",
      "Source: https://www.tvmaze.com/shows/7786/the-book-group/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39129",
    "category": "Television",
    "programme": "The Book Group",
    "question": "What musical pastime does Kenny take part in at Jean's book-deal party?",
    "answers": [
      "Folk dancing",
      "Violin playing",
      "Karaoke",
      "Stand-up comedy"
    ],
    "correctAnswer": "Karaoke",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Book Group",
      "Programme: The Book Group",
      "Channel 4",
      "Annie Griffin",
      "Episode: A'Salaam Insh'Allah",
      "Story fact: Kenny singing at book deal party",
      "Correct: Karaoke",
      "Specific episode plot: Kenny singing at book deal party",
      "2002–2003 TV Comedy Drama",
      "Characters and story: Kenny singing at book deal party",
      "Plot setting: A'Salaam Insh'Allah",
      "Source: https://www.tvmaze.com/shows/7786/the-book-group/episodeguide"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);;
if (new Set(questions.map(q=>q.id)).size!==questions.length ||
 new Set(questions.map(q=>normalise(q.question))).size!==questions.length ||
 questions.some(q=>q.answers.length!==4 ||
 new Set(q.answers.map(normalise)).size!==4 ||
 q.answers.filter(a=>a===q.correctAnswer).length!==1 ||
 q.tags.length<14 || !q.tags.includes('Programme: '+q.programme) ||
 q.dailyEligible!==true)) throw Error('Pack 359 audit validation failed');
module.exports = questions;
