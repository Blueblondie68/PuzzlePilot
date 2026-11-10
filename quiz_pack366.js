
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

  module.exports = questions;
