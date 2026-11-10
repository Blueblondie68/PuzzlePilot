
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
  Which comic-shop owner joins Coupling's main group in the final series?|Oliver Morris|Jeff Murdoch|Patrick Maitland|Steve Taylor|Medium|Oliver Morris|Comic Book Shop|Richard Mylan|Series Four Arrival|New Character|2004 Episodes|Jane Christie Romance`;

  const bookGroupFacts = `Which British broadcaster originally showed The Book Group?|Channel 4|BBC One|ITV|BBC Two|Easy|Channel Four|Original Broadcaster|Scottish Comedy|2002 Premiere|UK Television|Broadcast Network|Series Launch
  In which year did The Book Group first air?|2002|1998|2005|2010|Easy|2002 Debut|12 April 2002|First Series|Original Broadcast|Channel Four|Television Timeline|Programme Premiere
  How many series of The Book Group were produced?|Two|One|Three|Four|Medium|Two Series|2002 And 2003|Programme Run|Series Count|Channel Four Comedy|Production History|Final Series
  How many television episodes did The Book Group have altogether?|12|6|18|24|Medium|Twelve Episodes|Six Per Series|Original Show|Episode Count|Broadcast Catalogue|Channel Four|Programme Length
  In which Scottish city is The Book Group mainly set?|Glasgow|Edinburgh|Aberdeen|Dundee|Easy|Glasgow|Scottish Setting|Clare Arrival|Local Book Club|Series Location|Urban Comedy|Scotland
  Where has Clare Pettengill moved from when she starts her book group?|The United States|Canada|Australia|Ireland|Easy|Clare Pettengill|American Newcomer|Move To Glasgow|Cultural Adjustment|Series Premise|Expat Character|New Friends
  What does Clare start to make friends after moving to Scotland?|A book group|A theatre troupe|A running club|A choir|Easy|Clare Pettengill|Founding Club|Book Discussions|Making Friends|New Glasgow Life|Social Circle|Series Premise
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

  module.exports = questions;
