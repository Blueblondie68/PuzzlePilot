
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

  module.exports = questions;
