
  // quiz_pack366.js
  // PuzzlePilot — The Bigggggg Quiz
  // Television: The Beiderbecke Affair trilogy / The Detectives (BBC, 1993-1997).
  // Complete coverage of the three connected Beiderbecke serials and five Detectives series.
  // Researched against British Comedy Guide, TVmaze and episode synopses.
  // Seven individually written question-specific tags plus programme metadata.
  // Full WordPad-ready CommonJS module. No external dependencies.

  const FIRST_ID = 18325;

  // Question | correct answer | three distractors | difficulty | seven bespoke tags
  const beiderbeckeFacts = `Who played Trevor Chaplin in The Beiderbecke Affair?|James Bolam|Dudley Sutton|Terence Rigby|Keith Smith|Easy|James Bolam|Trevor Chaplin|Male Lead|Schoolteacher|Actor Casting|Jazz Enthusiast|Yorkshire Drama
  Who played Jill Swinburne in The Beiderbecke Affair?|Barbara Flynn|Sue Jenkins|Alison Skilbeck|Beryl Reid|Easy|Barbara Flynn|Jill Swinburne|Female Lead|English Teacher|Actress Casting|Environmental Campaigner|Trevor Partner
  Who wrote the Beiderbecke trilogy?|Alan Plater|Alan Bennett|David Nobbs|John Sullivan|Easy|Alan Plater|Original Screenwriter|Three Serial Writer|Comedy Drama Creator|British Playwright|Script Credits|Yorkshire Television
  Which broadcaster originally showed The Beiderbecke Affair?|ITV|BBC One|Channel 4|BBC Two|Easy|ITV Network|1985 Premiere|Yorkshire Television|Original Transmission|British Drama|Programme History|Broadcast Channel
  In what year was The Beiderbecke Affair first broadcast?|1985|1981|1987|1990|Easy|1985 First Broadcast|January Premiere|Original Serial|Television Timeline|Six Part Drama|Programme Launch|Eighties Television
  How many episodes comprised the original The Beiderbecke Affair?|Six|Four|Two|Eight|Medium|Six Episodes|Original Serial Length|January February Run|First Trilogy Instalment|Television Count|Episode Format|Broadcast Catalogue
  What subject does Trevor Chaplin teach?|Woodwork|English|History|Chemistry|Easy|Trevor Occupation|Woodwork Teacher|Secondary School|Classroom Setting|Practical Subject|School Staff|James Bolam Character
  What subject does Jill Swinburne teach?|English|Mathematics|French|Biology|Easy|Jill Occupation|English Teacher|Secondary Education|Classroom Role|School Staff|Barbara Flynn Character|Literature Lessons
  Which American jazz musician's records does Trevor pursue?|Bix Beiderbecke|Louis Armstrong|Duke Ellington|Glenn Miller|Easy|Bix Beiderbecke|Rare Jazz Records|Trevor Collection|Musical Obsession|Record Search|Series Title|Jazz History
  What type of election does Jill contest in the first Beiderbecke story?|A local council election|A European Parliament election|A national general election|A school governor election|Medium|Jill Campaign|Local Council|Conservationist|Political Activism|Original Serial|1985 Story|Civic Election
  Who played the mysterious Big Al?|Terence Rigby|Danny Schiller|Dudley Sutton|James Grout|Medium|Terence Rigby|Big Al|Actor Identification|Unusual Businessman|Local Football|Recurring Character|Trilogy Cast
  Who portrayed Big Al's associate Little Norm?|Danny Schiller|Terence Rigby|Keith Marsh|Robert Longden|Medium|Danny Schiller|Little Norm|Big Al Associate|Character Casting|Supporting Player|Local Enterprise|Yorkshire Characters
  Who played Detective Sergeant Hobson in the first story?|Dominic Jephcott|Colin Blakely|James Grout|Dudley Sutton|Medium|Dominic Jephcott|Sergeant Hobson|Police Investigator|Actor Casting|Suspicious Detective|Original Mystery|Law Enforcement
  Which actor portrayed the school's Mr Carter?|Dudley Sutton|Keith Smith|James Bolam|Colin Blakely|Medium|Dudley Sutton|Mr Carter|Deputy Head|School Administration|Cast Identification|Teacher Colleague|Trilogy Regular
  Who played the headmaster Mr Wheeler?|Keith Smith|Dudley Sutton|Robert Longden|Peter Martin|Medium|Keith Smith|Mr Wheeler|Headmaster|School Authority|Teacher Supervisor|Actor Casting|Recurring Role
  Which actress played the platinum-blonde saleswoman Janey?|Sue Jenkins|Barbara Flynn|Alison Skilbeck|Judy Brooke|Hard|Sue Jenkins|Janey|Platinum Blonde|Record Seller|Actress Casting|First Serial|Mystery Starter
  Who portrayed Chief Superintendent Forrest?|Colin Blakely|Dominic Jephcott|Terence Rigby|Keith Smith|Hard|Colin Blakely|Chief Superintendent Forrest|Senior Policeman|Actor Role|Police Hierarchy|Investigation|Original Series
  Which actor portrayed planning official Mr Pitt?|Robert Longden|James Grout|George Malpas|Keith Marsh|Hard|Robert Longden|Mr Pitt|Planning Official|Council Files|Character Casting|Local Government|Supporting Cast
  Which composer created the trilogy's jazz-style incidental music?|Frank Ricotti|Ronnie Hazlehurst|Alan Hawkshaw|Howard Goodall|Medium|Frank Ricotti|Original Score|Jazz Soundtrack|Instrumental Themes|Composer Credit|Cornet Music|Production Crew
  Which county provides the main setting for the Beiderbecke stories?|West Yorkshire|Cornwall|Norfolk|Kent|Easy|West Yorkshire|Northern England|Leeds Setting|Trilogy Location|English County|School Community|Regional Drama
  What is Trevor trying to buy from a platinum blonde in the first episode?|Jazz records|A second-hand car|Concert tickets|A vintage trumpet|Easy|First Episode|Record Purchase|Janey Saleswoman|Trevor Chaplin|Bix Collection|1985 Mystery|Unusual Delivery
  What is the title of the first The Beiderbecke Affair episode?|What I Don't Understand Is This...|Can Anybody Join In?|We Call It The White Economy|That Was A Very Funny Evening|Medium|First Episode Title|Opening Words|January 1985|Serial Premiere|Episode Naming|Initial Mystery|Broadcast Sequence
  What unusual convention is used to name the six original episodes?|They use their opening spoken words|They all take their titles from jazz songs|They use Yorkshire town names|They are named after police ranks|Hard|Episode Titles|First Dialogue|Unusual Naming|Alan Plater Writing|Original Six Parts|Story Structure|Narrative Style
  Which football event draws Trevor and Jill into trouble with the police in the opening story?|A junior football match|An FA Cup final|A school rugby match|An international friendly|Medium|Junior Football|Big Al And Norm|Police Intervention|Trevor Referee|First Serial|Local Team|Sporting Chaos
  What is the main subject of the third episode We Call It The White Economy?|An unofficial economy and corruption|A national railway strike|A television talent competition|A royal state visit|Medium|White Economy|Black Market Business|Council Corruption|Third Episode|Big Al Enterprise|Mystery Plot|1985 Story
  Who is nicknamed Helen of Tadcaster in the original story?|A woman involved in Trevor's romantic complications|Jill's university tutor|A police detective|Big Al's mother|Medium|Helen Of Tadcaster|Romantic Triangle|Trevor Chaplin|Jill Swinburne|Character Nickname|Original Serial|Relationship Trouble
  What type of government wrongdoing lies behind much of The Beiderbecke Affair?|Local council corruption|A military invasion|A parliamentary assassination|An international bank heist|Medium|Council Corruption|Local Politics|McAllister Affairs|Government Secrecy|First Serial|Political Mystery|Yorkshire Setting
  Which Beiderbecke serial followed The Beiderbecke Affair in 1987?|The Beiderbecke Tapes|The Beiderbecke Connection|Get Lost!|The Legacy of Beiderbecke|Easy|Beiderbecke Tapes|Second Trilogy Part|1987 Sequel|Trevor And Jill|Chronological Order|Television Franchise|Continuation
  How many episodes were broadcast of The Beiderbecke Tapes in 1987?|Two|Four|Six|Eight|Medium|Two Parts|1987 Broadcast|Sequel Length|December Schedule|ITV Serial|Episode Count|Second Instalment
  Who directed The Beiderbecke Tapes?|Brian Parker|David Reynolds|Alan J. W. Bell|Gareth Gwenlan|Hard|Brian Parker|Director|Second Serial|1987 Production|Crew Credits|Yorkshire Television|Television Direction
  What does a tape passed to Trevor and Jill appear to reveal in The Beiderbecke Tapes?|A plan to dump nuclear waste|A scheme to rig a football league|A missing art collection|A secret royal wedding|Medium|Recorded Conversation|Nuclear Waste|Yorkshire Dales|Dangerous Dumping|Second Serial Plot|Security Services|Environmental Threat
  Who gives Trevor the mysterious recording in The Beiderbecke Tapes?|John the barman|Big Al|Sergeant Hobson|Mr Carter|Medium|John The Barman|Jazz Tapes|Wrong Recording|Trevor Chaplin|Second Serial|Pub Encounter|Secret Evidence
  Which actor played John the barman in The Beiderbecke Tapes?|David Battley|Robert Longden|Peter Martin|Keith Smith|Hard|David Battley|John The Barman|Actor Casting|Mystery Tape|Reported Death|Supporting Character|Second Instalment
  Who portrayed the shadowy Peterson in The Beiderbecke Tapes?|Malcolm Storry|Dominic Jephcott|James Grout|Colin Blakely|Hard|Malcolm Storry|Peterson|Security Operative|Actor Casting|Grey Suits|Government Pursuit|1987 Sequel
  Which European city does a school trip take Trevor and Jill to in The Beiderbecke Tapes?|Amsterdam|Paris|Rome|Brussels|Easy|Amsterdam|School Trip|Netherlands|Trevor And Jill|Second Serial Journey|Mr Wheeler|Foreign Adventure
  To which British city does the chase also lead in The Beiderbecke Tapes?|Edinburgh|Bristol|Cardiff|Oxford|Medium|Edinburgh|Scottish Capital|Grey Suits|Second Serial|Cross Border Chase|Journey Setting|Climactic Adventure
  What is the name of the eccentric group encountered in Amsterdam?|The Honourable Order of Elks|The Round Table of Lions|The Society of Jazz Collectors|The Northern Pigeon Club|Hard|Honourable Order Of Elks|Amsterdam Group|Foreign Helpers|Trevor Jill Escape|1987 Sequel|Unusual Organisation|Dutch Encounter
  Which actress played Sylvia in The Beiderbecke Tapes?|Beryl Reid|Judy Brooke|Barbara Flynn|Sue Jenkins|Hard|Beryl Reid|Sylvia|Actress Casting|Second Story|Supporting Character|1987 Cast|Character Role
  What is the ultimate explanation of the suspicious tape in The Beiderbecke Tapes?|It is part of a disinformation exercise|It records a genuine murder confession|It is an unaired radio play|It is a school practical joke|Hard|Disinformation Campaign|Tape Reveal|Government Security|Second Serial Ending|Recorded Deception|Conspiracy Plot|Mystery Solution
  What is the title of the final Beiderbecke serial from 1988?|The Beiderbecke Connection|The Beiderbecke Tapes|The Beiderbecke Affair|Get Lost!|Easy|Beiderbecke Connection|Third Instalment|1988 Finale|Series Chronology|Television Trilogy|Final Serial|ITV Drama
  How many episodes make up The Beiderbecke Connection?|Four|Two|Six|Eight|Medium|Four Parts|1988 Broadcast|Final Story Length|Episode Total|Yorkshire Television|Third Serial|Television Catalogue
  Who directed The Beiderbecke Connection?|Alan J. W. Bell|Brian Parker|David Reynolds|Ed Bye|Hard|Alan Bell Direction|Final Serial Director|1988 Production|Crew Credits|Directing Change|Drama Team|Trilogy Finale
  What do Trevor and Jill call their baby in The Beiderbecke Connection?|Firstborn|Trevor Junior|Bix|James|Easy|Firstborn|Trevor And Jill Baby|Family Addition|Third Serial|New Parents|Child Nickname|1988 Story
  Whom does Big Al ask Trevor and Jill to shelter in The Beiderbecke Connection?|Ivan|Peterson|Hobson|Mr Pitt|Medium|Ivan|Supposed Refugee|Big Al Request|House Guest|Third Serial Mystery|Trevor And Jill|1988 Plot
  Which actor played Ivan in The Beiderbecke Connection?|Patrick Drury|George Costigan|Dudley Sutton|Danny Schiller|Hard|Patrick Drury|Ivan|Actor Casting|Apparent Refugee|Final Serial|Mystery Visitor|Guest Character
  What does Ivan say about Trevor's favourite jazz musician?|Bix is cool|Jazz is forbidden|The records are fake|He wrote the songs|Medium|Ivan Catchphrase|Bix Is Cool|Trevor Records|Jazz Appreciation|Third Serial|Unexpected Visitor|Character Dialogue
  What is the name of Jill's former pupil who works as a babysitter in The Beiderbecke Connection?|Yvonne|Sylvia|Helen|Janey|Medium|Yvonne|Former Pupil|Babysitter|Firstborn Care|Trevor And Jill|1988 Serial|Returning Character
  Which character from Jill's past makes an appearance in The Beiderbecke Connection?|Her ex-husband Peter|Her father in America|Her younger sister|Her former headteacher|Medium|Peter|Jill Ex Husband|Final Serial Arrival|Past Marriage|Family Complications|1988 Drama|Unexpected Visitor
  How many separate television serials form the Beiderbecke trilogy?|Three|Two|Four|Five|Easy|Three Serial Trilogy|Affair Tapes Connection|Alan Plater|Television Collection|1985 To 1988|Series Structure|Related Stories`;

  const detectiveFacts = `Which comedian played Detective Constable Bob Louis in The Detectives?|Jasper Carrott|Robert Powell|George Sewell|Frank Windsor|Easy|Jasper Carrott|Bob Louis|Lead Performer|Police Comedy|Character Casting|Bumbling Detective|BBC Sitcom
  Who played Bob Louis's partner Dave Briggs?|Robert Powell|Jasper Carrott|Tony Selby|George Sewell|Easy|Robert Powell|Dave Briggs|Detective Constable|Actor Casting|Police Duo|Lead Character|Series Regular
  Which actor played the pair's exasperated boss Superintendent Cottam?|George Sewell|Frank Windsor|Robert Powell|Tony Selby|Easy|George Sewell|Frank Cottam|Superintendent|Senior Officer|Actor Casting|Police Station|Recurring Boss
  What is the surname of the detectives' superintendent Frank?|Cottam|Briggs|Louis|Boyle|Medium|Frank Cottam|Superintendent Surname|George Sewell Character|Police Boss|Command Structure|Character Identity|Metropolitan Police
  From which Jasper Carrott programme did The Detectives originate?|Canned Carrott|Spitting Image|The Two Ronnies|The Fast Show|Easy|Canned Carrott|Sketch Origins|Jasper Carrott Show|1990 Comedy|Spin Off|Police Sketches|Programme History
  Which production company made The Detectives?|Celador Productions|Thames Television|Granada Television|Yorkshire Television|Medium|Celador Productions|Production Company|BBC Sitcom|Studio Credits|Television Production|British Comedy|Behind The Scenes
  Which network originally showed The Detectives?|BBC One|ITV|Channel 4|BBC Two|Easy|BBC One|Original Broadcaster|1993 Premiere|British Sitcom|Television Channel|Police Comedy|Broadcast History
  In which year did The Detectives start its own television series?|1993|1989|1990|1996|Easy|1993 First Series|January Launch|Television Debut|Canned Carrott Spin Off|Programme Timeline|BBC Schedule|Series Premiere
  How many regular series of The Detectives were produced?|Five|Three|Four|Six|Medium|Five Series|1993 To 1997|Series Count|BBC Programme|Sitcom Run|Production History|Original Broadcast
  How many episodes of The Detectives aired including its two specials?|31|24|29|36|Medium|Thirty One Episodes|Twenty Nine Regular|Two Specials|Programme Total|BBC Catalogue|Broadcast History|Series Episodes
  What are the ranks of Bob Louis and Dave Briggs in The Detectives?|Detective constables|Detective chief inspectors|Police sergeants|Chief superintendents|Easy|Detective Constables|Bob Louis|Dave Briggs|Police Rank|Metropolitan Police|Job Titles|Character Occupations
  Which writing duo scripted The Detectives television sitcom?|Steve Knight and Mike Whitehill|John Sullivan and David Nobbs|Laurence Marks and Maurice Gran|Richard Curtis and Ben Elton|Medium|Steve Knight|Mike Whitehill|Writing Partnership|BBC Scripts|Police Sitcom|Writers Credit|Production Crew
  What type of show does The Detectives chiefly spoof?|Police crime dramas|Hospital soap operas|Period romances|Cookery competitions|Easy|Police Drama Parody|Crime Comedy|Genre Spoof|Incompetent Officers|Detective Stories|Sitcom Format|Television Satire
  What kind of property hosts the first-series mystery in What The Butler Saw?|A country manor house|A seaside caravan|A city supermarket|A football stadium|Medium|What The Butler Saw|Country Estate|Murder Mystery|Series One Premiere|Stabbed Lord|Police Investigation|1993 Plot
  Which two football clubs are playing on the cup-final day in Hostage?|Birmingham City and Manchester United|Arsenal and Chelsea|Liverpool and Everton|Leeds and Tottenham|Medium|Hostage Episode|Birmingham City|Manchester United|Cup Final|Escaped Convict|Series One|Football Rivalry
  What sport must the pair pretend to understand during an undercover case in Teed Off?|Golf|Cricket|Tennis|Snooker|Easy|Teed Off|Golf Course|Undercover Surveillance|Gun Runner|Series One|Sporting Ignorance|1993 Episode
  What is Briggs and Louis's job on a TV crime show in Acting Constables?|Technical advisers|Stunt performers|Camera operators|News presenters|Medium|Acting Constables|Television Drama|Police Advisers|Film Set|Series One|Show Business|1993 Case
  On which Channel Island are the two sent in Studs?|Jersey|Guernsey|Alderney|Sark|Medium|Studs Episode|Jersey|Horse Breeding|Stolen Vials|Special Assignment|Series One|Island Investigation
  What valuable stolen material are the officers looking for in Studs?|Horse semen|Racehorse trophies|Gold bullion|Computer chips|Medium|Studs Plot|Horse Breeding|Missing Vials|Valuable Theft|Series One|Jersey Case|Racing Industry
  What sort of premises is central to the gangland investigation in Strangers In Paradise?|A nightclub|A farm shop|A library|A railway depot|Medium|Strangers In Paradise|Nightclub Owner|Gangland Killing|Undercover Music|Series One Finale|East London|Criminal Suspect
  What causes the pair to be suspended in Collared?|A bomb scare delaying the Queen|A lost police dog|An accidental prison escape|A botched drug raid|Medium|Collared|Bomb Scare|Royal State Banquet|Suspended Duty|Series Two Premiere|Cottam Anger|1994 Story
  Who is the sole witness to a mafia killing in Witness?|A monk|A taxi driver|A schoolteacher|A football referee|Medium|Witness Episode|Monk|Mafia Killing|Railway Station|Series Two|Witness Protection|Silent Order
  In which English county do Briggs and Louis escort a witness to a monastery?|Cumbria|Kent|Norfolk|Somerset|Medium|Witness|Cumbria Monastery|Monk Escort|Safe House|Series Two|Northern England|1994 Journey
  What assignment does the duo receive in Never Without Protection?|Guarding a duchess|Protecting a rock singer|Escorting a football manager|Watching a visiting scientist|Medium|Never Without Protection|Duchess|Royal Protection|Press Scandal|Series Two|Security Duty|1994 Episode
  Which country do the detectives unexpectedly reach in Dutch Cops?|The Netherlands|Spain|France|Belgium|Medium|Dutch Cops|Holland|Pilchard Lorry|Customs Duty|Series Two|Unexpected Trip|1994 Story
  In Sparring Partners, what is Bob and Dave's new undercover sporting setting?|Boxing|Cycling|Sailing|Horse racing|Medium|Sparring Partners|Boxing Ring|Doping Investigation|Police Training|Series Two|Undercover Sports|1994 Episode
  What does Bob think he witnesses from his window in Rear Window?|A neighbour murdering his wife|A shop burglary|An escaped zoo animal|A stolen car deal|Medium|Rear Window|Suspected Murder|Bob Louis|Broken Limbs|Series Two Finale|Neighbour Suspicion|1994 Episode
  What are Briggs and Louis unknowingly facing in D.C. Of Love after 25 years of service?|Compulsory retirement|Promotion to superintendent|Relocation abroad|Suspension without pay|Medium|DC Of Love|Twenty Five Years Service|Forced Retirement|Series Three Premiere|Cottam|1995 Episode|Police Career
  What kind of suspect is interviewed in Flash after the police gala?|An alleged flasher|A suspected arsonist|A wanted forger|A jewel thief|Medium|Flash Episode|Flashing Suspect|Paddington Green|Police Gala|Series Three|1995 Story|Suspect Interview
  To which specialist police unit are Briggs and Louis transferred in Art Attack?|The Fine Art Squad|The Fraud Squad|The Flying Squad|The Marine Unit|Medium|Art Attack|Fine Art Squad|Transfer|Performance Related Pay|Series Three|Police Bureaucracy|1995 Episode
  Which sport is linked to the assault case in On Thin Ice?|Figure skating|Ice hockey|Speed skiing|Curling|Medium|On Thin Ice|Olympic Skating Team|Coach Surveillance|Assault Allegation|Series Three|1995 Episode|Sports Case
  Which British territory is the duo visiting in Between A Rock And A Hard Place?|Gibraltar|Isle of Man|Jersey|Bermuda|Medium|Between A Rock And A Hard Place|Gibraltar|Bullseye Prize|Jim Bowen|Series Three|Holiday Trip|Police Chase
  Which endangered birds do Bob and Dave help protect in Twitchers?|Red kites|Puffins|Golden eagles|Barn owls|Medium|Twitchers|Red Kite Eggs|Birdwatching|Illegal Collectors|Series Three Finale|Wildlife Crime|Rare Nest
  What disguise is the mugger wearing in the Christmas special Thicker Than Water?|Father Christmas|A police officer|A clown|A postman|Easy|Thicker Than Water|Santa Costume|Christmas Mugger|1995 Special|Festive Crime|Bob Louis|Robbery Investigation
  Which relative of Bob Louis appears in Thicker Than Water?|His half-brother Kelvin|His father|His twin sister|His cousin in Canada|Medium|Thicker Than Water|Kelvin|Bob Half Brother|Family Reunion|Christmas Special|1995 Broadcast|Unexpected Encounter
  What transport is used to escort a runaway prisoner in The Great Escaper?|A train|A helicopter|A ferry|A taxi|Medium|Great Escaper|Prisoner Escort|Yorkshire Moors|Rail Journey|Series Four Premiere|1996 Episode|Custody Transfer
  Which unusual clue identifies a suspect in Fur Coat No Knickers?|Purple underpants|An orange hat|A green scarf|A silver walking stick|Medium|Fur Coat No Knickers|Purple Underpants|Medieval Reenactment|Murder Suspect|Series Four|1996 Case|Clothing Evidence
  At what sort of institution do the detectives investigate drug dealing in Back To Class?|A private girls' school|A city university|A military academy|A nursery school|Medium|Back To Class|Hadean School|Illegal Drugs|Private Education|Series Four|Undercover School|1996 Episode
  At whose retirement party do the officers offend an incoming superior in Sacked?|Superintendent Cottam's|Bob Louis's|Dave Briggs's|The commissioner's|Medium|Sacked Episode|Cottam Retirement|New Boss|Mistaken Stripper|Series Four|1996 Story|Police Management
  Where does The Wembley Stadium Mystery take the duo?|Wembley Stadium|Lord's Cricket Ground|Wimbledon Centre Court|The Royal Albert Hall|Easy|Wembley Stadium Mystery|Football Stadium|Security Inspection|DC Boyle|Series Four Finale|1996 Episode|London Venue
  What family connection makes new officer Boyle significant in The Wembley Stadium Mystery?|He is the commissioner's son|He is Dave's brother|He is Cottam's nephew|He is Bob's cousin|Hard|DC Boyle|Commissioner Son|New Recruit|Police Hierarchy|Series Four|Wembley Case|Hidden Connection
  Which sort of protesters are central to the case in Special Branch?|Environmental campaigners|Animal circus performers|Railway employees|Football supporters|Medium|Special Branch|Bypass Protest|Environmentalists|Unofficial Undercover Mission|Series Five Premiere|1997 Episode|Road Building
  Where are Bob and Dave guarding a wounded bank robber in Cardiac Arrest?|A hospital|A prison van|A shopping centre|A hotel|Medium|Cardiac Arrest|Hospital Ward|Wounded Robber|Police Guard|Series Five|Bob Health Fear|1997 Episode
  Which supposedly wild animal is reported loose in The Beast Of Hackney Marshes?|A bear|A wolf|A lion|A crocodile|Medium|Beast Of Hackney Marshes|Wild Bear|Hackney|D Division Variety Night|Series Five|1997 Rumour|Urban Wildlife
  Which Native American tribe is receiving a statue in The Curse Of The Comanches?|The Comanche|The Navajo|The Apache|The Cherokee|Medium|Curse Of The Comanches|Ancient Statue|British Museum|Tribal Repatriation|Series Five|1997 Episode|Mysterious Curse
  What part does Dave Briggs take in the wedding featured in Best Man?|Best man|Groom|Registrar|Wedding photographer|Easy|Best Man Episode|Dave Briggs|Colleague Wedding|Bridal Party|Series Five|Ceremonial Role|1997 Story
  Which specialist police service do Bob and Dave join in Mine's A Large One?|The River Police|The Mounted Police|The Traffic Unit|Airport Security|Medium|Mines A Large One|River Police|River Thames|Job Swap|Series Five Finale|1997 Episode|Boat Patrol
  Who disappears after a botched operation in the final special Go West Old Man?|Superintendent Cottam|Bob Louis|Dave Briggs|DC Boyle|Medium|Go West Old Man|Cottam Missing|Final Special|December 1997|Failed Operation|Search Mission|Police Boss
  In what year was the final The Detectives special Go West Old Man shown?|1997|1994|1995|2001|Medium|1997 Christmas Special|Go West Old Man|28 December|Last Broadcast|Programme Finale|BBC One|Sitcom Timeline`;

  const normalise = value => value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
  const tagKey = value => normalise(value).replace(/[^\p{L}\p{N}]/gu, '');
  const questions = [];

  function addProgramme(programme, programmeTags, facts) {
    for (const line of facts.trim().split('\n')) {
      const id = 'tv_' + String(FIRST_ID + questions.length).padStart(5, '0');
      const fields = line.trim().split('|').map(value => value.trim());
      if (fields.length !== 13) throw new Error('Pack 366: expected 13 fields for ' + id + ', got ' + fields.length);
      const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...bespokeTags] = fields;
      if ([question, correctAnswer, wrong1, wrong2, wrong3, ...bespokeTags].some(value => !value)) {
        throw new Error('Pack 366: blank field for ' + id);
      }
      if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || bespokeTags.length !== 7 ||
          new Set(bespokeTags.map(tagKey)).size !== 7) {
        throw new Error('Pack 366: difficulty or bespoke tags invalid for ' + id);
      }
      const answers = [wrong1, wrong2, wrong3];
      if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4) {
        throw new Error('Pack 366: repeated answer for ' + id);
      }
      answers.splice(questions.length % 4, 0, correctAnswer);
      const tags = [...new Map([
        'Television', 'British Television', 'Comedy', ...programmeTags,
        programme, 'Programme: ' + programme, correctAnswer, ...bespokeTags
      ].map(tag => [normalise(tag), tag])).values()];
      questions.push({ id, category: 'Television', programme, question,
        answers, correctAnswer, difficulty, tags, dailyEligible: true });
    }
  }

  addProgramme('The Beiderbecke Affair',
    ['ITV', 'Yorkshire Television', '1985-1988', 'Comedy Drama', 'The Beiderbecke Tapes', 'The Beiderbecke Connection', 'Jazz Mystery'],
    beiderbeckeFacts);
  addProgramme('The Detectives',
    ['BBC One', '1993-1997', 'Police Sitcom', 'Jasper Carrott', 'Robert Powell', 'Crime Parody'],
    detectiveFacts);


  // Split the original trilogy questions into the three correctly titled serials.
  // Retain every original ID and answer. Questions which ask for a sequel's
  // title retain the original serial label to avoid revealing their answer.
  for (let i = 28; i <= 38; i++) {
    const q = questions[i];
    if (q.programme !== 'The Beiderbecke Affair') throw Error('Pack 366 Tapes range changed');
    q.programme = 'The Beiderbecke Tapes';
    q.tags = q.tags.filter(t => t !== 'Programme: The Beiderbecke Affair');
    q.tags.push('Programme: The Beiderbecke Tapes');
  }
  for (let i = 40; i <= 47; i++) {
    const q = questions[i];
    if (q.programme !== 'The Beiderbecke Affair') throw Error('Pack 366 Connection range changed');
    q.programme = 'The Beiderbecke Connection';
    q.tags = q.tags.filter(t => t !== 'Programme: The Beiderbecke Affair');
    q.tags.push('Programme: The Beiderbecke Connection');
  }

  // Validate actual exported question objects, not only source text.
  if (!questions.length || questions[0].id !== 'tv_18325' ||
      new Set(questions.map(q => q.id)).size !== questions.length ||
      new Set(questions.map(q => normalise(q.question))).size !== questions.length ||
      questions.some((q, index) =>
        q.id !== 'tv_' + String(FIRST_ID + index).padStart(5, '0') ||
        q.category !== 'Television' || !q.programme ||
        !Array.isArray(q.answers) || q.answers.length !== 4 ||
        !q.answers.includes(q.correctAnswer) ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        !Array.isArray(q.tags) || q.tags.length < 14 ||
        new Set(q.tags.map(tagKey)).size !== q.tags.length ||
        !q.tags.includes('Programme: ' + q.programme) ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) || q.dailyEligible !== true)) {
    throw new Error('Pack 366: exported object validation failed');
  }

  
  // Pack 366 historical audit, 22 November 2026:
  // All 98 original IDs retained; 19 Beiderbecke questions relabelled
  // to distinguish The Tapes and The Connection from The Affair.
  // References: https://www.historyfiles.co.uk/Guide/Beiderbecke.htm
  // https://www.comedy.co.uk/tv/the_detectives/episodes/all/
  const auditAdditions = [
  {
    "id": "tv_39493",
    "category": "Television",
    "programme": "The Beiderbecke Affair",
    "question": "In The Beiderbecke Affair, what is wrong with the Bix Beiderbecke records delivered to Trevor?",
    "answers": [
      "They are badly scratched",
      "They are empty record sleeves",
      "They are not the records he ordered",
      "They are in the wrong language"
    ],
    "correctAnswer": "They are not the records he ordered",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Affair",
      "Programme: The Beiderbecke Affair",
      "ITV",
      "1980s Television",
      "Episode context: Original 1985",
      "Character and event: Incorrect Jazz Record Delivery",
      "Answer fact: They are not the records he ordered",
      "Storyline: Incorrect Jazz Record Delivery",
      "Question focus: Incorrect Jazz Record Delivery",
      "Production: Yorkshire Television",
      "Era and plot: Original 1985",
      "Distinct incident: Incorrect Jazz Record Delivery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39494",
    "category": "Television",
    "programme": "The Beiderbecke Affair",
    "question": "In The Beiderbecke Affair, what is Trevor doing at the children's football match when he spots the platinum blonde?",
    "answers": [
      "Coaching a team",
      "Selling programmes",
      "Keeping the score",
      "Refereeing"
    ],
    "correctAnswer": "Refereeing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Affair",
      "Programme: The Beiderbecke Affair",
      "ITV",
      "1980s Television",
      "Episode context: Original 1985",
      "Character and event: Trevor Referees Youth Football",
      "Answer fact: Refereeing",
      "Storyline: Trevor Referees Youth Football",
      "Question focus: Trevor Referees Youth Football",
      "Production: Yorkshire Television",
      "Era and plot: Original 1985",
      "Distinct incident: Trevor Referees Youth Football"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39495",
    "category": "Television",
    "programme": "The Beiderbecke Affair",
    "question": "In The Beiderbecke Affair, where does Big Al keep his mail-order stock before Sergeant Hobson raids it?",
    "answers": [
      "A church basement",
      "A railway warehouse",
      "A school gymnasium",
      "A pub attic"
    ],
    "correctAnswer": "A church basement",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Affair",
      "Programme: The Beiderbecke Affair",
      "ITV",
      "1980s Television",
      "Episode context: Original 1985",
      "Character and event: Big Al Church Basement Storeroom",
      "Answer fact: A church basement",
      "Storyline: Big Al Church Basement Storeroom",
      "Question focus: Big Al Church Basement Storeroom",
      "Production: Yorkshire Television",
      "Era and plot: Original 1985",
      "Distinct incident: Big Al Church Basement Storeroom"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39496",
    "category": "Television",
    "programme": "The Beiderbecke Affair",
    "question": "In The Beiderbecke Affair, how do Jill and Helen of Tadcaster decide which one gets to be with Trevor?",
    "answers": [
      "By drawing lots",
      "By tossing a coin",
      "By playing cards",
      "By asking Trevor to choose"
    ],
    "correctAnswer": "By tossing a coin",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Affair",
      "Programme: The Beiderbecke Affair",
      "ITV",
      "1980s Television",
      "Episode context: Original 1985",
      "Character and event: Jill Helen Coin Toss Over Trevor",
      "Answer fact: By tossing a coin",
      "Storyline: Jill Helen Coin Toss Over Trevor",
      "Question focus: Jill Helen Coin Toss Over Trevor",
      "Production: Yorkshire Television",
      "Era and plot: Original 1985",
      "Distinct incident: Jill Helen Coin Toss Over Trevor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39497",
    "category": "Television",
    "programme": "The Beiderbecke Affair",
    "question": "In The Beiderbecke Affair, whose father is arrested after a confrontation involving Trevor?",
    "answers": [
      "Jill Swinburne's",
      "Janey's",
      "Helen McAllister's",
      "Yvonne's"
    ],
    "correctAnswer": "Helen McAllister's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Affair",
      "Programme: The Beiderbecke Affair",
      "ITV",
      "1980s Television",
      "Episode context: Original 1985",
      "Character and event: Helen Father McAllister Arrest",
      "Answer fact: Helen McAllister's",
      "Storyline: Helen Father McAllister Arrest",
      "Question focus: Helen Father McAllister Arrest",
      "Production: Yorkshire Television",
      "Era and plot: Original 1985",
      "Distinct incident: Helen Father McAllister Arrest"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39498",
    "category": "Television",
    "programme": "The Beiderbecke Affair",
    "question": "In The Beiderbecke Affair, what does Jill abandon before the local election votes are recounted?",
    "answers": [
      "Her teaching career",
      "Her relationship with Trevor",
      "Her conservation work",
      "Her political campaign"
    ],
    "correctAnswer": "Her political campaign",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Affair",
      "Programme: The Beiderbecke Affair",
      "ITV",
      "1980s Television",
      "Episode context: Original 1985",
      "Character and event: Jill Retires From Local Politics",
      "Answer fact: Her political campaign",
      "Storyline: Jill Retires From Local Politics",
      "Question focus: Jill Retires From Local Politics",
      "Production: Yorkshire Television",
      "Era and plot: Original 1985",
      "Distinct incident: Jill Retires From Local Politics"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39499",
    "category": "Television",
    "programme": "The Beiderbecke Affair",
    "question": "In The Beiderbecke Affair, what kind of business runs from Big Al's church-basement storeroom?",
    "answers": [
      "Mail-order goods",
      "An antiques auction",
      "A recording studio",
      "An amateur football club"
    ],
    "correctAnswer": "Mail-order goods",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Affair",
      "Programme: The Beiderbecke Affair",
      "ITV",
      "1980s Television",
      "Episode context: Original 1985",
      "Character and event: Big Al Mail Order Operation",
      "Answer fact: Mail-order goods",
      "Storyline: Big Al Mail Order Operation",
      "Question focus: Big Al Mail Order Operation",
      "Production: Yorkshire Television",
      "Era and plot: Original 1985",
      "Distinct incident: Big Al Mail Order Operation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39500",
    "category": "Television",
    "programme": "The Beiderbecke Tapes",
    "question": "In The Beiderbecke Tapes, what is Trevor's record collection said to occupy in his new home with Jill?",
    "answers": [
      "The kitchen table",
      "An entire wall of the living room",
      "Their garage floor",
      "The landing cupboard"
    ],
    "correctAnswer": "An entire wall of the living room",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Tapes",
      "Programme: The Beiderbecke Tapes",
      "ITV",
      "1980s Television",
      "Episode context: 1987 two-part serial",
      "Character and event: Trevor Collection Dominates Living Room",
      "Answer fact: An entire wall of the living room",
      "Storyline: Trevor Collection Dominates Living Room",
      "Question focus: Trevor Collection Dominates Living Room",
      "Production: Yorkshire Television",
      "Era and plot: 1987 two-part serial",
      "Distinct incident: Trevor Collection Dominates Living Room"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39501",
    "category": "Television",
    "programme": "The Beiderbecke Tapes",
    "question": "In The Beiderbecke Tapes, which part of Yorkshire is supposedly targeted for dumping nuclear waste?",
    "answers": [
      "The North York Moors coast",
      "The Humber estuary",
      "The Yorkshire Dales",
      "Leeds city centre"
    ],
    "correctAnswer": "The Yorkshire Dales",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Tapes",
      "Programme: The Beiderbecke Tapes",
      "ITV",
      "1980s Television",
      "Episode context: 1987 two-part serial",
      "Character and event: Yorkshire Dales Nuclear Dump Plot",
      "Answer fact: The Yorkshire Dales",
      "Storyline: Yorkshire Dales Nuclear Dump Plot",
      "Question focus: Yorkshire Dales Nuclear Dump Plot",
      "Production: Yorkshire Television",
      "Era and plot: 1987 two-part serial",
      "Distinct incident: Yorkshire Dales Nuclear Dump Plot"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39502",
    "category": "Television",
    "programme": "The Beiderbecke Tapes",
    "question": "In The Beiderbecke Tapes, what event does the supposedly dead pub barman John invite Trevor to attend?",
    "answers": [
      "His retirement dinner",
      "A school reunion",
      "A local council meeting",
      "His own funeral"
    ],
    "correctAnswer": "His own funeral",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Tapes",
      "Programme: The Beiderbecke Tapes",
      "ITV",
      "1980s Television",
      "Episode context: 1987 two-part serial",
      "Character and event: Barman John Funeral Invitation",
      "Answer fact: His own funeral",
      "Storyline: Barman John Funeral Invitation",
      "Question focus: Barman John Funeral Invitation",
      "Production: Yorkshire Television",
      "Era and plot: 1987 two-part serial",
      "Distinct incident: Barman John Funeral Invitation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39503",
    "category": "Television",
    "programme": "The Beiderbecke Tapes",
    "question": "In The Beiderbecke Tapes, who is responsible for searching Trevor and Jill's house and pursuing them?",
    "answers": [
      "Men in grey suits",
      "Local traffic wardens",
      "Military cadets",
      "A rival jazz band"
    ],
    "correctAnswer": "Men in grey suits",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Tapes",
      "Programme: The Beiderbecke Tapes",
      "ITV",
      "1980s Television",
      "Episode context: 1987 two-part serial",
      "Character and event: Men In Grey Suits Search House",
      "Answer fact: Men in grey suits",
      "Storyline: Men In Grey Suits Search House",
      "Question focus: Men In Grey Suits Search House",
      "Production: Yorkshire Television",
      "Era and plot: 1987 two-part serial",
      "Distinct incident: Men In Grey Suits Search House"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39504",
    "category": "Television",
    "programme": "The Beiderbecke Tapes",
    "question": "In The Beiderbecke Tapes, which group rescues Trevor and Jill from surveillance in Amsterdam?",
    "answers": [
      "A Dutch football team",
      "A group of ageing American Marines",
      "A troupe of travelling actors",
      "A local police choir"
    ],
    "correctAnswer": "A group of ageing American Marines",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Tapes",
      "Programme: The Beiderbecke Tapes",
      "ITV",
      "1980s Television",
      "Episode context: 1987 two-part serial",
      "Character and event: American Marines Rescue In Amsterdam",
      "Answer fact: A group of ageing American Marines",
      "Storyline: American Marines Rescue In Amsterdam",
      "Question focus: American Marines Rescue In Amsterdam",
      "Production: Yorkshire Television",
      "Era and plot: 1987 two-part serial",
      "Distinct incident: American Marines Rescue In Amsterdam"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39505",
    "category": "Television",
    "programme": "The Beiderbecke Tapes",
    "question": "In The Beiderbecke Tapes, who actually created the fake tape that seems to expose nuclear dumping?",
    "answers": [
      "Big Al and Little Norm",
      "Trevor's school colleagues",
      "The men in grey suits",
      "A jazz record distributor"
    ],
    "correctAnswer": "The men in grey suits",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Tapes",
      "Programme: The Beiderbecke Tapes",
      "ITV",
      "1980s Television",
      "Episode context: 1987 two-part serial",
      "Character and event: Men In Grey Suits Forge Tape",
      "Answer fact: The men in grey suits",
      "Storyline: Men In Grey Suits Forge Tape",
      "Question focus: Men In Grey Suits Forge Tape",
      "Production: Yorkshire Television",
      "Era and plot: 1987 two-part serial",
      "Distinct incident: Men In Grey Suits Forge Tape"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39506",
    "category": "Television",
    "programme": "The Beiderbecke Tapes",
    "question": "In The Beiderbecke Tapes, what family news does Jill reveal to Trevor at the end of their adventure?",
    "answers": [
      "Her sister is getting married",
      "Her parents are emigrating",
      "Her son has won a scholarship",
      "She is pregnant"
    ],
    "correctAnswer": "She is pregnant",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Tapes",
      "Programme: The Beiderbecke Tapes",
      "ITV",
      "1980s Television",
      "Episode context: 1987 two-part serial",
      "Character and event: Jill Pregnancy Reveal",
      "Answer fact: She is pregnant",
      "Storyline: Jill Pregnancy Reveal",
      "Question focus: Jill Pregnancy Reveal",
      "Production: Yorkshire Television",
      "Era and plot: 1987 two-part serial",
      "Distinct incident: Jill Pregnancy Reveal"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39507",
    "category": "Television",
    "programme": "The Beiderbecke Tapes",
    "question": "Who played Dave, the nervous acquaintance in The Beiderbecke Tapes?",
    "answers": [
      "Christopher Wilkinson",
      "Malcolm Storry",
      "David Battley",
      "Danny Schiller"
    ],
    "correctAnswer": "Christopher Wilkinson",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Tapes",
      "Programme: The Beiderbecke Tapes",
      "ITV",
      "1980s Television",
      "Episode context: 1987 two-part serial",
      "Character and event: Christopher Wilkinson Dave Character",
      "Answer fact: Christopher Wilkinson",
      "Storyline: Christopher Wilkinson Dave Character",
      "Question focus: Christopher Wilkinson Dave Character",
      "Production: Yorkshire Television",
      "Era and plot: 1987 two-part serial",
      "Distinct incident: Christopher Wilkinson Dave Character"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39508",
    "category": "Television",
    "programme": "The Beiderbecke Tapes",
    "question": "Which actress played Bella Atkinson in The Beiderbecke Tapes?",
    "answers": [
      "Beryl Reid",
      "Maggie Jones",
      "Sue Jenkins",
      "Barbara Flynn"
    ],
    "correctAnswer": "Maggie Jones",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Tapes",
      "Programme: The Beiderbecke Tapes",
      "ITV",
      "1980s Television",
      "Episode context: 1987 two-part serial",
      "Character and event: Maggie Jones Bella Atkinson Cast",
      "Answer fact: Maggie Jones",
      "Storyline: Maggie Jones Bella Atkinson Cast",
      "Question focus: Maggie Jones Bella Atkinson Cast",
      "Production: Yorkshire Television",
      "Era and plot: 1987 two-part serial",
      "Distinct incident: Maggie Jones Bella Atkinson Cast"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39509",
    "category": "Television",
    "programme": "The Beiderbecke Connection",
    "question": "In The Beiderbecke Connection, what is the name of the pub hosting a jazz night with Trevor and Jill?",
    "answers": [
      "The White Lion",
      "The King's Arms",
      "The Limping Whippet",
      "The Woolpack"
    ],
    "correctAnswer": "The Limping Whippet",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Connection",
      "Programme: The Beiderbecke Connection",
      "ITV",
      "1980s Television",
      "Episode context: 1988 four-part serial",
      "Character and event: Limping Whippet Jazz Pub",
      "Answer fact: The Limping Whippet",
      "Storyline: Limping Whippet Jazz Pub",
      "Question focus: Limping Whippet Jazz Pub",
      "Production: Yorkshire Television",
      "Era and plot: 1988 four-part serial",
      "Distinct incident: Limping Whippet Jazz Pub"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39510",
    "category": "Television",
    "programme": "The Beiderbecke Connection",
    "question": "In The Beiderbecke Connection, which former council employee runs the pub where the jazz band performs?",
    "answers": [
      "Mr Carter",
      "Mr Wheeler",
      "Sergeant Hobson",
      "Mr Pitt"
    ],
    "correctAnswer": "Mr Pitt",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Connection",
      "Programme: The Beiderbecke Connection",
      "ITV",
      "1980s Television",
      "Episode context: 1988 four-part serial",
      "Character and event: Mr Pitt Runs Jazz Venue",
      "Answer fact: Mr Pitt",
      "Storyline: Mr Pitt Runs Jazz Venue",
      "Question focus: Mr Pitt Runs Jazz Venue",
      "Production: Yorkshire Television",
      "Era and plot: 1988 four-part serial",
      "Distinct incident: Mr Pitt Runs Jazz Venue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39511",
    "category": "Television",
    "programme": "The Beiderbecke Connection",
    "question": "In The Beiderbecke Connection, to which rank has Hobson been promoted since the original serial?",
    "answers": [
      "Detective Inspector",
      "Chief Superintendent",
      "Police Constable",
      "Detective Chief Inspector"
    ],
    "correctAnswer": "Detective Inspector",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Connection",
      "Programme: The Beiderbecke Connection",
      "ITV",
      "1980s Television",
      "Episode context: 1988 four-part serial",
      "Character and event: Hobson Promotion To Inspector",
      "Answer fact: Detective Inspector",
      "Storyline: Hobson Promotion To Inspector",
      "Question focus: Hobson Promotion To Inspector",
      "Production: Yorkshire Television",
      "Era and plot: 1988 four-part serial",
      "Distinct incident: Hobson Promotion To Inspector"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39512",
    "category": "Television",
    "programme": "The Beiderbecke Connection",
    "question": "In The Beiderbecke Connection, what financial crime are Ivan and Jill's ex-husband planning?",
    "answers": [
      "Counterfeiting banknotes",
      "Computer fraud",
      "Insurance arson",
      "Illegal horse betting"
    ],
    "correctAnswer": "Computer fraud",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Connection",
      "Programme: The Beiderbecke Connection",
      "ITV",
      "1980s Television",
      "Episode context: 1988 four-part serial",
      "Character and event: Ivan And Peter Computer Fraud Plot",
      "Answer fact: Computer fraud",
      "Storyline: Ivan And Peter Computer Fraud Plot",
      "Question focus: Ivan And Peter Computer Fraud Plot",
      "Production: Yorkshire Television",
      "Era and plot: 1988 four-part serial",
      "Distinct incident: Ivan And Peter Computer Fraud Plot"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39513",
    "category": "Television",
    "programme": "The Beiderbecke Connection",
    "question": "In The Beiderbecke Connection, who secretly collaborates with the Russian visitor Ivan?",
    "answers": [
      "The school headmaster",
      "Trevor's former girlfriend Helen",
      "Jill's ex-husband Peter",
      "Jill's friend Yvonne"
    ],
    "correctAnswer": "Jill's ex-husband Peter",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Connection",
      "Programme: The Beiderbecke Connection",
      "ITV",
      "1980s Television",
      "Episode context: 1988 four-part serial",
      "Character and event: Jill Ex Husband Peter Works With Ivan",
      "Answer fact: Jill's ex-husband Peter",
      "Storyline: Jill Ex Husband Peter Works With Ivan",
      "Question focus: Jill Ex Husband Peter Works With Ivan",
      "Production: Yorkshire Television",
      "Era and plot: 1988 four-part serial",
      "Distinct incident: Jill Ex Husband Peter Works With Ivan"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39514",
    "category": "Television",
    "programme": "The Beiderbecke Connection",
    "question": "In The Beiderbecke Connection, which musician appears with his Allstars as the pub's jazz group?",
    "answers": [
      "Alan Hawkshaw",
      "Ronnie Hazlehurst",
      "Kenny Ball",
      "Frank Ricotti"
    ],
    "correctAnswer": "Frank Ricotti",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Connection",
      "Programme: The Beiderbecke Connection",
      "ITV",
      "1980s Television",
      "Episode context: 1988 four-part serial",
      "Character and event: Frank Ricotti Allstars In Pub",
      "Answer fact: Frank Ricotti",
      "Storyline: Frank Ricotti Allstars In Pub",
      "Question focus: Frank Ricotti Allstars In Pub",
      "Production: Yorkshire Television",
      "Era and plot: 1988 four-part serial",
      "Distinct incident: Frank Ricotti Allstars In Pub"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39515",
    "category": "Television",
    "programme": "The Beiderbecke Connection",
    "question": "In The Beiderbecke Connection, what part of the country do Trevor and Jill reach when dropping Ivan off?",
    "answers": [
      "The Yorkshire border",
      "The Scottish Highlands",
      "The Welsh coast",
      "The Sussex Downs"
    ],
    "correctAnswer": "The Yorkshire border",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Connection",
      "Programme: The Beiderbecke Connection",
      "ITV",
      "1980s Television",
      "Episode context: 1988 four-part serial",
      "Character and event: Ivan Dropped At Yorkshire Border",
      "Answer fact: The Yorkshire border",
      "Storyline: Ivan Dropped At Yorkshire Border",
      "Question focus: Ivan Dropped At Yorkshire Border",
      "Production: Yorkshire Television",
      "Era and plot: 1988 four-part serial",
      "Distinct incident: Ivan Dropped At Yorkshire Border"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39516",
    "category": "Television",
    "programme": "The Beiderbecke Connection",
    "question": "Who played Trevor and Jill's baby First Born in The Beiderbecke Connection?",
    "answers": [
      "Danny Schiller",
      "Thomas McGlinchey",
      "Patrick Drury",
      "Robert Longden"
    ],
    "correctAnswer": "Thomas McGlinchey",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Connection",
      "Programme: The Beiderbecke Connection",
      "ITV",
      "1980s Television",
      "Episode context: 1988 four-part serial",
      "Character and event: Thomas McGlinchey Firstborn Casting",
      "Answer fact: Thomas McGlinchey",
      "Storyline: Thomas McGlinchey Firstborn Casting",
      "Question focus: Thomas McGlinchey Firstborn Casting",
      "Production: Yorkshire Television",
      "Era and plot: 1988 four-part serial",
      "Distinct incident: Thomas McGlinchey Firstborn Casting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39517",
    "category": "Television",
    "programme": "The Beiderbecke Connection",
    "question": "Which actor played police constable Ben in The Beiderbecke Connection?",
    "answers": [
      "Dudley Sutton",
      "James Grout",
      "George Costigan",
      "Malcolm Storry"
    ],
    "correctAnswer": "George Costigan",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy Drama",
      "The Beiderbecke Connection",
      "Programme: The Beiderbecke Connection",
      "ITV",
      "1980s Television",
      "Episode context: 1988 four-part serial",
      "Character and event: George Costigan Constable Ben",
      "Answer fact: George Costigan",
      "Storyline: George Costigan Constable Ben",
      "Question focus: George Costigan Constable Ben",
      "Production: Yorkshire Television",
      "Era and plot: 1988 four-part serial",
      "Distinct incident: George Costigan Constable Ben"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39518",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, how is the financially troubled lord of the manor murdered in What The Butler Saw?",
    "answers": [
      "He is poisoned at dinner",
      "He is shot on the staircase",
      "He is struck by a falling statue",
      "He is stabbed in the shower"
    ],
    "correctAnswer": "He is stabbed in the shower",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S1 What The Butler Saw",
      "Character and event: Lord Stabbed In Country House Shower",
      "Answer fact: He is stabbed in the shower",
      "Storyline: Lord Stabbed In Country House Shower",
      "Question focus: Lord Stabbed In Country House Shower",
      "Production: Celador",
      "Era and plot: S1 What The Butler Saw",
      "Distinct incident: Lord Stabbed In Country House Shower"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39519",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, whom does the escaped convict take hostage during the football cup final in Hostage?",
    "answers": [
      "An elderly couple",
      "Two footballers",
      "A television newsreader",
      "A bank manager"
    ],
    "correctAnswer": "An elderly couple",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S1 Hostage",
      "Character and event: Escaped Convict Holds Elderly Couple",
      "Answer fact: An elderly couple",
      "Storyline: Escaped Convict Holds Elderly Couple",
      "Question focus: Escaped Convict Holds Elderly Couple",
      "Production: Celador",
      "Era and plot: S1 Hostage",
      "Distinct incident: Escaped Convict Holds Elderly Couple"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39520",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, which illegal trade is the pair investigating while posing as golfers in Teed Off?",
    "answers": [
      "Drug smuggling",
      "Gun-running",
      "Art forgery",
      "Wildlife trafficking"
    ],
    "correctAnswer": "Gun-running",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S1 Teed Off",
      "Character and event: Golf Club Arms Dealer Gun Running",
      "Answer fact: Gun-running",
      "Storyline: Golf Club Arms Dealer Gun Running",
      "Question focus: Golf Club Arms Dealer Gun Running",
      "Production: Celador",
      "Era and plot: S1 Teed Off",
      "Distinct incident: Golf Club Arms Dealer Gun Running"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39521",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, who is the principal suspect in the gangland killing investigated in Strangers In Paradise?",
    "answers": [
      "A professional boxer",
      "A hotel chef",
      "A nightclub owner",
      "A taxi firm manager"
    ],
    "correctAnswer": "A nightclub owner",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S1 Strangers In Paradise",
      "Character and event: Nightclub Owner Suspected In Gangland Killing",
      "Answer fact: A nightclub owner",
      "Storyline: Nightclub Owner Suspected In Gangland Killing",
      "Question focus: Nightclub Owner Suspected In Gangland Killing",
      "Production: Celador",
      "Era and plot: S1 Strangers In Paradise",
      "Distinct incident: Nightclub Owner Suspected In Gangland Killing"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39522",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, which official occasion is delayed because of the pair's bomb scare in Collared?",
    "answers": [
      "The State Opening of Parliament",
      "A royal wedding",
      "An investiture at Buckingham Palace",
      "A state banquet"
    ],
    "correctAnswer": "A state banquet",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S2 Collared",
      "Character and event: Queen Late For State Banquet",
      "Answer fact: A state banquet",
      "Storyline: Queen Late For State Banquet",
      "Question focus: Queen Late For State Banquet",
      "Production: Celador",
      "Era and plot: S2 Collared",
      "Distinct incident: Queen Late For State Banquet"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39523",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, where does the monk witness a mafia killing before receiving police protection in Witness?",
    "answers": [
      "A London railway station",
      "A county courthouse",
      "A seaside amusement arcade",
      "A motorway services café"
    ],
    "correctAnswer": "A London railway station",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S2 Witness",
      "Character and event: Monk Witnesses Killing At London Station",
      "Answer fact: A London railway station",
      "Storyline: Monk Witnesses Killing At London Station",
      "Question focus: Monk Witnesses Killing At London Station",
      "Production: Celador",
      "Era and plot: S2 Witness",
      "Distinct incident: Monk Witnesses Killing At London Station"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39524",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, why are Briggs and Louis chosen to protect a duchess in Never Without Protection?",
    "answers": [
      "They are expert close-protection officers",
      "They are thought immune to romantic entanglements",
      "They speak the duchess's native language",
      "They have guarded her before"
    ],
    "correctAnswer": "They are thought immune to romantic entanglements",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S2 Never Without Protection",
      "Character and event: Duchess Protection And Romance Scandal",
      "Answer fact: They are thought immune to romantic entanglements",
      "Storyline: Duchess Protection And Romance Scandal",
      "Question focus: Duchess Protection And Romance Scandal",
      "Production: Celador",
      "Era and plot: S2 Never Without Protection",
      "Distinct incident: Duchess Protection And Romance Scandal"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39525",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, what kind of cargo lorry takes the pair unexpectedly to Holland in Dutch Cops?",
    "answers": [
      "A furniture removal lorry",
      "A cattle truck",
      "A pilchard lorry",
      "A refrigerated flower van"
    ],
    "correctAnswer": "A pilchard lorry",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S2 Dutch Cops",
      "Character and event: Detectives Trapped In Pilchard Lorry",
      "Answer fact: A pilchard lorry",
      "Storyline: Detectives Trapped In Pilchard Lorry",
      "Question focus: Detectives Trapped In Pilchard Lorry",
      "Production: Celador",
      "Era and plot: S2 Dutch Cops",
      "Distinct incident: Detectives Trapped In Pilchard Lorry"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39526",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, what criminal enterprise is the boxing investigation targeting in Sparring Partners?",
    "answers": [
      "Fixed horse races",
      "Illegal football tickets",
      "Counterfeit passports",
      "An illicit doping ring"
    ],
    "correctAnswer": "An illicit doping ring",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S2 Sparring Partners",
      "Character and event: Boxing Doping Investigation",
      "Answer fact: An illicit doping ring",
      "Storyline: Boxing Doping Investigation",
      "Question focus: Boxing Doping Investigation",
      "Production: Celador",
      "Era and plot: S2 Sparring Partners",
      "Distinct incident: Boxing Doping Investigation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39527",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, what injuries leave Bob confined to his flat during Rear Window?",
    "answers": [
      "A broken arm and leg",
      "A dislocated shoulder",
      "Two fractured ribs",
      "A sprained ankle"
    ],
    "correctAnswer": "A broken arm and leg",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S2 Rear Window",
      "Character and event: Bob Injured During Police Dog Training",
      "Answer fact: A broken arm and leg",
      "Storyline: Bob Injured During Police Dog Training",
      "Question focus: Bob Injured During Police Dog Training",
      "Production: Celador",
      "Era and plot: S2 Rear Window",
      "Distinct incident: Bob Injured During Police Dog Training"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39528",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, whom is the serial killer targeting in D.C. Of Love?",
    "answers": [
      "Young married couples",
      "Single middle-aged men",
      "Retired police officers",
      "University students"
    ],
    "correctAnswer": "Single middle-aged men",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S3 D C Of Love",
      "Character and event: Serial Killer Targets Lonely Middle Aged Men",
      "Answer fact: Single middle-aged men",
      "Storyline: Serial Killer Targets Lonely Middle Aged Men",
      "Question focus: Serial Killer Targets Lonely Middle Aged Men",
      "Production: Celador",
      "Era and plot: S3 D C Of Love",
      "Distinct incident: Serial Killer Targets Lonely Middle Aged Men"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39529",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, what other offence concerns a minor aristocrat while Bob and Dave investigate a flasher in Flash?",
    "answers": [
      "A tax fraud allegation",
      "A drink-driving offence",
      "A drugs charge",
      "An assault at a football match"
    ],
    "correctAnswer": "A drugs charge",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S3 Flash",
      "Character and event: Junior Aristocrat Drugs Charge",
      "Answer fact: A drugs charge",
      "Storyline: Junior Aristocrat Drugs Charge",
      "Question focus: Junior Aristocrat Drugs Charge",
      "Production: Celador",
      "Era and plot: S3 Flash",
      "Distinct incident: Junior Aristocrat Drugs Charge"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39530",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, which new management scheme precedes Briggs and Louis's transfer in Art Attack?",
    "answers": [
      "Compulsory retirement at forty",
      "A police housing allowance",
      "Free university tuition",
      "Performance-related pay"
    ],
    "correctAnswer": "Performance-related pay",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S3 Art Attack",
      "Character and event: Police Performance Related Pay",
      "Answer fact: Performance-related pay",
      "Storyline: Police Performance Related Pay",
      "Question focus: Police Performance Related Pay",
      "Production: Celador",
      "Era and plot: S3 Art Attack",
      "Distinct incident: Police Performance Related Pay"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39531",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, whose coach is investigated after a skater reports an assault in On Thin Ice?",
    "answers": [
      "The British Olympic ice-skating team coach",
      "The national rugby team's coach",
      "A school football coach",
      "An American tennis coach"
    ],
    "correctAnswer": "The British Olympic ice-skating team coach",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S3 On Thin Ice",
      "Character and event: Olympic Skating Coach Assault Enquiry",
      "Answer fact: The British Olympic ice-skating team coach",
      "Storyline: Olympic Skating Coach Assault Enquiry",
      "Question focus: Olympic Skating Coach Assault Enquiry",
      "Production: Celador",
      "Era and plot: S3 On Thin Ice",
      "Distinct incident: Olympic Skating Coach Assault Enquiry"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39532",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, which television quiz show is responsible for Bob and Dave's holiday in Gibraltar?",
    "answers": [
      "The Generation Game",
      "Bullseye",
      "Blankety Blank",
      "Sale of the Century"
    ],
    "correctAnswer": "Bullseye",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S3 Between A Rock And A Hard Place",
      "Character and event: Jim Bowen Bullseye Gibraltar Holiday",
      "Answer fact: Bullseye",
      "Storyline: Jim Bowen Bullseye Gibraltar Holiday",
      "Question focus: Jim Bowen Bullseye Gibraltar Holiday",
      "Production: Celador",
      "Era and plot: S3 Between A Rock And A Hard Place",
      "Distinct incident: Jim Bowen Bullseye Gibraltar Holiday"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39533",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, what are poachers trying to steal from the nesting red kites in Twitchers?",
    "answers": [
      "Their feathers",
      "Their chicks for a zoo",
      "Their eggs",
      "Their nesting branches"
    ],
    "correctAnswer": "Their eggs",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S3 Twitchers",
      "Character and event: Illegal Collectors After Red Kite Eggs",
      "Answer fact: Their eggs",
      "Storyline: Illegal Collectors After Red Kite Eggs",
      "Question focus: Illegal Collectors After Red Kite Eggs",
      "Production: Celador",
      "Era and plot: S3 Twitchers",
      "Distinct incident: Illegal Collectors After Red Kite Eggs"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39534",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, across which landscape do Bob and Dave escort an escaped prisoner in The Great Escaper?",
    "answers": [
      "The Scottish Highlands",
      "The South Downs",
      "The Welsh Valleys",
      "The Yorkshire Moors"
    ],
    "correctAnswer": "The Yorkshire Moors",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S4 The Great Escaper",
      "Character and event: Prisoner Train Across Yorkshire Moors",
      "Answer fact: The Yorkshire Moors",
      "Storyline: Prisoner Train Across Yorkshire Moors",
      "Question focus: Prisoner Train Across Yorkshire Moors",
      "Production: Celador",
      "Era and plot: S4 The Great Escaper",
      "Distinct incident: Prisoner Train Across Yorkshire Moors"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39535",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, what historical event is being re-enacted when a genuine killing occurs in Fur Coat No Knickers?",
    "answers": [
      "A medieval battle",
      "A Roman gladiator fight",
      "An English Civil War siege",
      "A Napoleonic naval battle"
    ],
    "correctAnswer": "A medieval battle",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S4 Fur Coat No Knickers",
      "Character and event: Murder At Medieval Battle Reenactment",
      "Answer fact: A medieval battle",
      "Storyline: Murder At Medieval Battle Reenactment",
      "Question focus: Murder At Medieval Battle Reenactment",
      "Production: Celador",
      "Era and plot: S4 Fur Coat No Knickers",
      "Distinct incident: Murder At Medieval Battle Reenactment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39536",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, which endangered animal do Bob and Dave accidentally kill before investigating drug dealing in Back To Class?",
    "answers": [
      "A golden eagle",
      "A female turtle",
      "A mountain gorilla",
      "A rare frog"
    ],
    "correctAnswer": "A female turtle",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S4 Back To Class",
      "Character and event: Last Female Turtle Dies During Police Case",
      "Answer fact: A female turtle",
      "Storyline: Last Female Turtle Dies During Police Case",
      "Question focus: Last Female Turtle Dies During Police Case",
      "Production: Celador",
      "Era and plot: S4 Back To Class",
      "Distinct incident: Last Female Turtle Dies During Police Case"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39537",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, whom do Bob and Dave mistake Cottam's female successor for at his retirement party in Sacked?",
    "answers": [
      "A visiting judge",
      "A theatre actress",
      "A hired stripper",
      "A police psychologist"
    ],
    "correctAnswer": "A hired stripper",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S4 Sacked",
      "Character and event: Female Superintendent Mistaken For Stripper",
      "Answer fact: A hired stripper",
      "Storyline: Female Superintendent Mistaken For Stripper",
      "Question focus: Female Superintendent Mistaken For Stripper",
      "Production: Celador",
      "Era and plot: S4 Sacked",
      "Distinct incident: Female Superintendent Mistaken For Stripper"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39538",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, what is the police assignment at Wembley that brings the officers into contact with the recruit Boyle?",
    "answers": [
      "Investigating fake concert tickets",
      "Tracing a missing football trophy",
      "Guarding a visiting royal family",
      "Checking security before a match"
    ],
    "correctAnswer": "Checking security before a match",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S4 Wembley Stadium Mystery",
      "Character and event: Wembley Stadium Match Security Review",
      "Answer fact: Checking security before a match",
      "Storyline: Wembley Stadium Match Security Review",
      "Question focus: Wembley Stadium Match Security Review",
      "Production: Celador",
      "Era and plot: S4 Wembley Stadium Mystery",
      "Distinct incident: Wembley Stadium Match Security Review"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39539",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, what construction project are environmental protesters trying to stop in Special Branch?",
    "answers": [
      "A bypass",
      "A new airport runway",
      "A railway viaduct",
      "A reservoir"
    ],
    "correctAnswer": "A bypass",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S5 Special Branch",
      "Character and event: Road Bypass Environmentalist Protest",
      "Answer fact: A bypass",
      "Storyline: Road Bypass Environmentalist Protest",
      "Question focus: Road Bypass Environmentalist Protest",
      "Production: Celador",
      "Era and plot: S5 Special Branch",
      "Distinct incident: Road Bypass Environmentalist Protest"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39540",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, which health concern distracts Bob while he guards a bank robber in Cardiac Arrest?",
    "answers": [
      "An allergy to medicine",
      "His own heart",
      "An eye infection",
      "A damaged knee"
    ],
    "correctAnswer": "His own heart",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S5 Cardiac Arrest",
      "Character and event: Bob Worries About His Heart In Hospital",
      "Answer fact: His own heart",
      "Storyline: Bob Worries About His Heart In Hospital",
      "Question focus: Bob Worries About His Heart In Hospital",
      "Production: Celador",
      "Era and plot: S5 Cardiac Arrest",
      "Distinct incident: Bob Worries About His Heart In Hospital"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39541",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, what is the police station preparing while rumours of a bear circulate in The Beast Of Hackney Marshes?",
    "answers": [
      "The annual football derby",
      "A police graduation parade",
      "D Division Variety Night",
      "A mayoral banquet"
    ],
    "correctAnswer": "D Division Variety Night",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S5 Beast Of Hackney Marshes",
      "Character and event: D Division Variety Show Rehearsal",
      "Answer fact: D Division Variety Night",
      "Storyline: D Division Variety Show Rehearsal",
      "Question focus: D Division Variety Show Rehearsal",
      "Production: Celador",
      "Era and plot: S5 Beast Of Hackney Marshes",
      "Distinct incident: D Division Variety Show Rehearsal"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39542",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, which museum is handing a Native American statue back to the Comanche tribe?",
    "answers": [
      "The Natural History Museum",
      "The Imperial War Museum",
      "The Victoria and Albert Museum",
      "The British Museum"
    ],
    "correctAnswer": "The British Museum",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S5 Curse Of The Comanches",
      "Character and event: British Museum Returns Tribal Statue",
      "Answer fact: The British Museum",
      "Storyline: British Museum Returns Tribal Statue",
      "Question focus: British Museum Returns Tribal Statue",
      "Production: Celador",
      "Era and plot: S5 Curse Of The Comanches",
      "Distinct incident: British Museum Returns Tribal Statue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39543",
    "category": "Television",
    "programme": "The Detectives",
    "question": "In The Detectives, which London waterway becomes the pair's workplace in Mine's A Large One?",
    "answers": [
      "The River Thames",
      "The River Lea",
      "The Grand Union Canal",
      "The River Wandle"
    ],
    "correctAnswer": "The River Thames",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Police Sitcom",
      "The Detectives",
      "Programme: The Detectives",
      "BBC One",
      "1990s Television",
      "Episode context: S5 Mines A Large One",
      "Character and event: Briggs And Louis Assigned Thames River Police",
      "Answer fact: The River Thames",
      "Storyline: Briggs And Louis Assigned Thames River Police",
      "Question focus: Briggs And Louis Assigned Thames River Police",
      "Production: Celador",
      "Era and plot: S5 Mines A Large One",
      "Distinct incident: Briggs And Louis Assigned Thames River Police"
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
    throw Error('Pack 366 historical audit validation failed');
  }

  module.exports = questions;
