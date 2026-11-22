
  // quiz_pack367.js
  // PuzzlePilot — The Bigggggg Quiz
  // Television: Bodyguard (2018) / State of Play (2003).
  // Both are completed six-part British political thrillers from the outstanding TV list.
  // Based on BBC/production credits, published cast lists, and episode synopses.
  // Seven question-specific tags per question, in addition to shared programme metadata.
  // Complete WordPad-ready CommonJS module. No external dependencies.

  const FIRST_ID = 18423;

  // Question | correct answer | three wrong answers | difficulty | seven specific tags
  const bodyguardFacts = `Who played police protection officer David Budd in Bodyguard?|Richard Madden|Tom Brooke|Ash Tandon|Paul Ready|Easy|Richard Madden|David Budd|Lead Actor|Police Sergeant|Royalty Protection|Main Character|Actor Casting
  Who played Home Secretary Julia Montague in Bodyguard?|Keeley Hawes|Sophie Rundle|Gina McKee|Pippa Haywood|Easy|Keeley Hawes|Julia Montague|Home Secretary|Leading Actress|Conservative Politician|Main Cast|Character Casting
  Who created and wrote the BBC thriller Bodyguard?|Jed Mercurio|Paul Abbott|Sally Wainwright|Steven Moffat|Easy|Jed Mercurio|Series Creator|Screenwriter|Political Thriller|BBC Writing Credit|Television Drama|Production Team
  Which broadcaster premiered Bodyguard in 2018?|BBC One|ITV|Channel 4|BBC Two|Easy|Original Network|2018 Transmission|Sunday Drama|British Broadcast|Programme Premiere|Television Channel|Six Part Series
  How many episodes were in the 2018 series of Bodyguard?|Six|Four|Eight|Ten|Easy|Six Episodes|Single Series|Episode Count|2018 Run|Programme Format|BBC Thriller|Drama Length
  What is David Budd's former military background?|A veteran of the war in Afghanistan|A Royal Navy submarine commander|A former RAF test pilot|An Army medical reservist|Easy|Afghanistan Veteran|Military Service|War Trauma|David Budd|Backstory|Former Soldier|Post Traumatic Stress
  Which branch of the Metropolitan Police employs David Budd?|Royalty and Specialist Protection|Marine Policing Unit|Mounted Branch|Counter Terrorism Command only|Medium|RaSP|Protection Officer|Metropolitan Police|Specialist Branch|VIP Security|Police Unit|David Employment
  What is Julia Montague's government position?|Home Secretary|Foreign Secretary|Chancellor of the Exchequer|Secretary of State for Health|Easy|Home Office|Cabinet Minister|Julia Montague|British Government|Protectee|Political Appointment|Executive Office
  Who played David Budd's estranged wife Vicky?|Sophie Rundle|Keeley Hawes|Stephanie Hyam|Nina Toussaint-White|Medium|Sophie Rundle|Vicky Budd|Marriage Separation|Family Character|Actress Casting|David Wife|Supporting Lead
  Who played Metropolitan Police commander Anne Sampson?|Gina McKee|Pippa Haywood|Keeley Hawes|Anjli Mohindra|Medium|Gina McKee|Anne Sampson|Senior Commander|Actress Casting|Police Leadership|Investigation|Metropolitan Police
  Which actress portrayed David Budd's police superior Lorraine Craddock?|Pippa Haywood|Gina McKee|Sophie Rundle|Lucy Liemann|Medium|Pippa Haywood|Lorraine Craddock|Police Superior|Actor Identification|Corrupt Officer|Professional Chain|Chief Superintendent
  Who played Home Office official Rob MacDonald?|Paul Ready|Vincent Franklin|Nicholas Gleaves|Richard Riddell|Medium|Paul Ready|Rob MacDonald|Home Office Aide|Political Staff|Actor Casting|Ministerial Office|Supporting Character
  Who portrayed counter-terrorism minister Mike Travis?|Vincent Franklin|Paul Ready|Stuart Bowman|Matt Stokoe|Medium|Vincent Franklin|Mike Travis|Government Minister|Counter Terrorism|Actor Casting|Political Rival|Home Office
  Which actor played security-service director Stephen Hunter-Dunn?|Stuart Bowman|Tom Brooke|Richard Madden|Ash Tandon|Medium|Stuart Bowman|Stephen Hunter Dunn|Security Service Director|MI5 Leadership|Actor Role|Intelligence Agency|Political Influence
  Who portrayed detective Deepak Sharma?|Ash Tandon|Richard Riddell|Matt Stokoe|Paul Ready|Medium|Ash Tandon|Deepak Sharma|DCI Character|Murder Investigation|Actor Casting|Detective Work|Police Inquiry
  Who played DS Louise Rayburn?|Nina Toussaint-White|Gina McKee|Pippa Haywood|Sophie Rundle|Medium|Nina Toussaint White|Louise Rayburn|Detective Sergeant|Investigation Team|Actress Casting|Police Interviews|Supporting Detective
  Who portrayed the suspected train bomber Nadia Ali?|Anjli Mohindra|Stephanie Hyam|Keeley Hawes|Sophie Rundle|Medium|Anjli Mohindra|Nadia Ali|Train Bomb Plot|Actress Role|Opening Threat|Final Twist|Suspect
  Who played David's former army friend Andy Apsted?|Tom Brooke|Matt Stokoe|Stuart Bowman|Vincent Franklin|Medium|Tom Brooke|Andy Apsted|Army Veteran|Former Comrade|Sniper Incident|Actor Casting|Veterans Group
  Who portrayed organised-crime figure Luke Aikens?|Matt Stokoe|Paul Ready|Tom Brooke|Nicholas Gleaves|Medium|Matt Stokoe|Luke Aikens|Organised Crime|Gang Leader|Actor Casting|Criminal Conspiracy|Julia Assassination
  Who played Julia's former adviser Chanel Dyson?|Stephanie Hyam|Pippa Haywood|Gina McKee|Nina Toussaint-White|Medium|Stephanie Hyam|Chanel Dyson|Dismissed Adviser|Ministerial Aide|Actress Role|Political Staff|Luke Associate
  What form of transport is threatened in the opening of Bodyguard?|A passenger train|A passenger ferry|A London bus|An underground tram|Easy|Opening Episode|Rail Journey|Suicide Vest|Nadia Ali|David Budd|Children Present|Terror Threat
  Which of David Budd's actions first brings him to official attention?|He prevents a suicide bombing|He rescues the Prime Minister from a fire|He solves a kidnapping|He uncovers a bank fraud|Easy|Train Bomb Averted|David Intervention|Opening Rescue|Personal Courage|Security Recognition|Police Career|First Episode
  Which two children are David and Vicky's?|Ella and Charlie|Sarah and Tom|Lucy and James|Amy and Daniel|Medium|Ella Budd|Charlie Budd|Children|David And Vicky|Family Threat|Parents|School Attack
  Which school is threatened by a vehicle bomb in Bodyguard?|Heath Bank Primary School|Waterloo Road|Grange Hill Academy|St Matthew's Primary|Medium|Heath Bank Primary|School Bomb Threat|David Children|Second Episode|Terror Plot|Security Crisis|Vehicle Attack
  What new security legislation does Julia Montague support?|RIPA 18|The Freedom of Information Act|The Human Rights Act|The Official Secrets Act of 1911|Medium|RIPA 18|Surveillance Powers|Security Legislation|Julia Montague|Counter Terrorism Bill|Political Controversy|Civil Liberties
  Whose surveillance powers would Julia's proposed bill extend?|The security services'|The local councils'|The armed forces'|The prison service's|Medium|Expanded Security Powers|Monitoring Communications|RIPA Legislation|Civil Rights Debate|Intelligence Services|Julia Policy|British Politics
  Which of David Budd's former army comrades attacks Julia Montague from a rooftop?|Andy Apsted|Rob MacDonald|Deepak Sharma|Luke Aikens|Medium|Andy Apsted|Rooftop Sniper|Second Episode|Former Army Friend|Attacked Convoy|David Budd|Assassination Attempt
  Where is Julia Montague when a bomb fatally injures her?|Giving a speech at a college|Visiting an airfield|Travelling on a train|Attending a cabinet meeting|Easy|St Matthews College|Political Speech|Explosive Device|Julia Montague|Third Episode|Fatal Attack|Public Event
  What happens to Julia Montague after the attack at St Matthew's College?|She dies from her injuries|She flees the country|She becomes Prime Minister|She resigns and survives|Medium|Julia Death|Hospital Aftermath|Third Episode|Political Assassination|David Failure|Story Turning Point|Fatal Bombing
  What damaging material is delivered on a tablet to Julia?|Compromising information about the Prime Minister|Secret overseas election results|An army recruitment database|The names of every police informant|Medium|Kompromat|Tablet Device|Prime Minister Scandal|Security Service|Julia Montague|Secret Intelligence|Political Blackmail
  Who delivers the intelligence-service tablet to Julia's hotel?|Richard Longcross|Luke Aikens|Mike Travis|Andy Apsted|Medium|Richard Longcross|Hotel Delivery|Compromising Dossier|Security Service Agent|Secret Meeting|Tablet Evidence|Intelligence Operation
  Which police officer is revealed to be helping criminal Luke Aikens?|Lorraine Craddock|Anne Sampson|Louise Rayburn|Deepak Sharma|Medium|Lorraine Craddock|Police Insider|Luke Aikens|Corrupt Command|Finale Revelation|Conspiracy|Organised Crime
  Who is revealed to have manufactured the explosives in the conspiracy?|Nadia Ali|Chanel Dyson|Anne Sampson|Vicky Budd|Medium|Nadia Ali|Bomb Maker|Engineering Skills|Final Episode|Conspiracy Reveal|Extremist Plot|Explosive Devices
  Which criminal organisation leader works with the bomb-maker to target Julia?|Luke Aikens|Stephen Hunter-Dunn|Roger Penhaligon|Rob MacDonald|Medium|Luke Aikens|Criminal Alliance|Nadia Ali|Julia Targeted|Police Corruption|Organised Crime Network|Finale Plot
  What is David Budd forced to wear during the tense finale?|An explosive vest|A police body camera|A prison tracking bracelet|A bulletproof ceremonial uniform|Easy|Explosive Vest|Finale Standoff|David Budd|False Accusation|Bomb Disposal|Suspense Sequence|Sixth Episode
  Who approaches David despite the danger of his explosive vest?|His wife Vicky|Commander Sampson|Chanel Dyson|Julia Montague|Medium|Vicky Budd|Risking Her Life|Bomb Standoff|Marriage|Finale|Protective Gesture|Explosive Threat
  What does David eventually seek professional help for?|Post-traumatic stress|A broken arm|Chronic insomnia alone|A hearing impairment|Medium|PTSD Support|Occupational Health|David Budd|Afghanistan Trauma|Finale Recovery|Mental Health Care|Personal Resolution
  Which company produced Bodyguard?|World Productions|Thames Television|Hat Trick Productions|Tiger Aspect Productions|Medium|World Productions|Production Company|BBC Drama|Behind The Scenes|2018 Programme|Jed Mercurio|Series Production
  Who directed the first three episodes of Bodyguard?|Thomas Vincent|John Strickland|David Yates|S. J. Clarkson|Hard|Thomas Vincent|Episodes One To Three|Director Credits|Production Team|First Half|2018 Series|Television Direction
  Who directed the final three episodes of Bodyguard?|John Strickland|Thomas Vincent|Paul McGuigan|David Yates|Hard|John Strickland|Episodes Four To Six|Director Credit|Finale Direction|Production Crew|Second Half|2018 Drama
  Which award did Richard Madden win in 2019 for his role in Bodyguard?|Golden Globe for Best Actor in a TV Drama|BAFTA for Best Supporting Actor|Oscar for Best Actor|Emmy for Best Comedy Actor|Medium|Richard Madden Award|2019 Golden Globes|Drama Actor Winner|David Budd Performance|Critical Recognition|Television Acting|Award Ceremony
  Which of these describes Bodyguard's central conflict?|A protection officer guarding a politician he disagrees with|A detective running a village pub|A lawyer defending a serial burglar|A spy hiding in a theatre company|Easy|Conflicted Duty|Protective Assignment|David And Julia|Ideological Disagreement|Political Thriller|Core Premise|Police Ethics`;

  const stateFacts = `Who played investigative journalist Cal McCaffrey in State of Play?|John Simm|David Morrissey|James McAvoy|Philip Glenister|Easy|John Simm|Cal McCaffrey|Lead Journalist|Actor Casting|Newspaper Investigation|Main Character|2003 BBC
  Who played Labour MP Stephen Collins in State of Play?|David Morrissey|John Simm|Bill Nighy|James Laurenson|Easy|David Morrissey|Stephen Collins|Labour MP|Actor Casting|Political Scandal|Main Cast|Parliamentarian
  Which actress played journalist Della Smith?|Kelly Macdonald|Polly Walker|Amelia Bullmore|Shauna Macdonald|Easy|Kelly Macdonald|Della Smith|Investigative Reporter|Actress Casting|Newspaper Team|Witness Case|Newsroom Character
  Who portrayed newspaper editor Cameron Foster?|Bill Nighy|Philip Glenister|James McAvoy|Michael Feast|Easy|Bill Nighy|Cameron Foster|News Editor|Actor Casting|Press Freedom|The Herald|Editorial Leadership
  Who wrote the 2003 BBC miniseries State of Play?|Paul Abbott|Jed Mercurio|Russell T Davies|Steven Moffat|Easy|Paul Abbott|Screenwriter|Six Part Drama|Original Creator|Political Thriller|BBC Production|Writing Credits
  Who directed all six episodes of the original State of Play?|David Yates|Kevin Macdonald|Thomas Vincent|Paul McGuigan|Medium|David Yates|Series Director|Six Episodes|2003 Television|Direction Credits|British Drama|Production Team
  Which broadcaster transmitted State of Play in 2003?|BBC One|ITV|BBC Two|Channel 4|Easy|BBC One|Original Channel|UK Broadcast|2003 Miniseries|First Transmission|Political Drama|Television Network
  How many episodes make up the original State of Play television drama?|Six|Three|Eight|Ten|Easy|Six Episodes|2003 Broadcast|Single Miniseries|Programme Length|Episode Count|Original Production|BBC Television
  In which year did the original State of Play begin?|2003|1998|2007|2011|Easy|2003 Premiere|May Broadcast|BBC Miniseries|Television History|Original Series|Story Launch|British TV
  Which newspaper employs Cal McCaffrey and Della Smith?|The Herald|The Guardian|The Daily Mail|The Times|Medium|The Herald|Fictional Newspaper|Cal And Della|Investigative Press|Newsroom|Editorial Setting|British Journalism
  Who played Stephen Collins's wife Anne?|Polly Walker|Kelly Macdonald|Deborah Findlay|Rebekah Staton|Medium|Polly Walker|Anne Collins|MP Wife|Actress Casting|Marriage Breakdown|Relationship Drama|Main Ensemble
  Which actor played young journalist Dan Foster?|James McAvoy|John Simm|Benedict Wong|Marc Warren|Medium|James McAvoy|Dan Foster|Young Reporter|Actor Casting|Newsroom Colleague|Supporting Lead|Press Investigation
  Who portrayed DCI William Bell in the original State of Play?|Philip Glenister|Sean Gilder|Rory McCann|John Simm|Medium|Philip Glenister|DCI William Bell|Senior Detective|Police Investigation|Actor Casting|Detective Character|London Crime
  Who played Dominic Foy, a witness with links to Sonia Baker?|Marc Warren|James McAvoy|Michael Feast|Benedict Wong|Medium|Marc Warren|Dominic Foy|Sonia Connection|Actor Casting|Witness Interview|Oil Lobbyists|Mystery Suspect
  Which actor portrayed political adviser Andrew Wilson?|Michael Feast|James Laurenson|Philip Glenister|Bill Nighy|Medium|Michael Feast|Andrew Wilson|Political Spin Doctor|MP Adviser|Actor Casting|Compromising Letter|Westminster
  Who played senior politician George Fergus?|James Laurenson|David Morrissey|John Simm|Marc Warren|Medium|James Laurenson|George Fergus|Senior Politician|Government Corruption|Actor Identification|Oil Connections|Political Establishment
  Which actress played the politician's colleague Greer Thornton?|Deborah Findlay|Polly Walker|Kelly Macdonald|Geraldine James|Hard|Deborah Findlay|Greer Thornton|Stephen Office|Actress Casting|Sonia Recruitment|Political Colleague|Government Staff
  Which actor portrayed newspaper worker Pete Cheng?|Benedict Wong|James McAvoy|Philip Glenister|Tom Burke|Medium|Benedict Wong|Pete Cheng|Newsroom Staff|Actor Casting|Journalist Team|Supporting Cast|2003 Series
  Who played journalist Helen Preger?|Amelia Bullmore|Kelly Macdonald|Polly Walker|Rebekah Staton|Medium|Amelia Bullmore|Helen Preger|Reporter|Actress Casting|Newsroom Ensemble|Press Research|British Drama
  Which actor portrayed DI Stuart Brown?|Rory McCann|Philip Glenister|Sean Gilder|James McAvoy|Hard|Rory McCann|DI Stuart Brown|Police Detective|Actor Role|Investigation Team|First Episodes|Supporting Character
  Who played the police officer nicknamed Chewy?|Sean Gilder|Philip Glenister|Rory McCann|John Simm|Hard|Sean Gilder|Chewy Cheweski|Police Officer|Nickname|Actor Casting|Investigation Staff|British Crime
  Which actress portrayed Sonia Baker, whose death triggers the mystery?|Shauna Macdonald|Polly Walker|Kelly Macdonald|Deborah Findlay|Medium|Shauna Macdonald|Sonia Baker|Political Researcher|Actress Role|Tube Death|Opening Mystery|Stephen Staff
  What is Sonia Baker's job when State of Play begins?|A political researcher for Stephen Collins|A police forensic officer|A newspaper photographer|An oil-company receptionist|Easy|Sonia Baker|Parliamentary Researcher|MP Office|Stephen Collins|Character Occupation|Opening Plot|Government Workplace
  Which young man is shot dead in London at the start of the story?|Kelvin Stagg|Dan Foster|Pete Cheng|Robert Bingham|Medium|Kelvin Stagg|Opening Murder|London Street|First Episode|Connected Deaths|Young Victim|Investigation Trigger
  How does Sonia Baker apparently die at the start of State of Play?|She falls under a train|She dies in a hotel fire|She crashes her car|She is found in a river|Medium|Sonia Death|Railway Platform|Tube Tracks|Opening Incident|Political Scandal|First Episode|Suspicious Circumstances
  What object stolen by Kelvin Stagg becomes crucial to the investigation?|A silver briefcase|A laptop computer|A gold watch|A camera bag|Medium|Silver Briefcase|Kelvin Stagg|Hidden Evidence|Photographs And Gun|First Episode|Mystery Link|Journalist Discovery
  Which two deaths does Cal begin to suspect are connected?|Sonia Baker and Kelvin Stagg|Cameron Foster and Anne Collins|Dominic Foy and Dan Foster|George Fergus and Pete Cheng|Easy|Connected Deaths|Sonia Baker|Kelvin Stagg|Cal Investigation|Opening Mystery|Conspiracy|2003 Story
  What relationship had Cal McCaffrey previously had with Stephen Collins?|He worked as his campaign manager|He was his brother-in-law|He served as his police bodyguard|He was his university lecturer|Medium|Cal Campaign Manager|Stephen Collins|Old Friendship|Political Background|Journalism And Politics|Past Employment|Personal Conflict
  Which woman begins an affair with Cal during the investigation?|Anne Collins|Della Smith|Sonia Baker|Helen Preger|Medium|Anne Collins|Cal McCaffrey|Secret Affair|Marriage Complications|Second Episode|Relationship Triangle|Personal Betrayal
  Which journalist is arrested after refusing to reveal the source of the briefcase?|Cal McCaffrey|Della Smith|Dan Foster|Cameron Foster|Medium|Cal Arrest|Source Protection|Police Pressure|Briefcase Evidence|Second Episode|Press Confidentiality|Investigation Risk
  What organisation employs lobbyists Warner Schloss in the conspiracy?|U-EX Oil|Sunshine Desserts|Groomtech|Grot Enterprises|Medium|U EX Oil|Warner Schloss|Energy Industry|Corporate Lobbyists|Political Scandal|Oil Company|Hidden Influence
  What is Dominic Foy's connection to Sonia Baker?|They had been romantically involved|He was her parliamentary boss|He was her brother|He was her driving instructor|Medium|Dominic Foy|Sonia Baker|Former Relationship|Witness Testimony|Police Questioning|Past Romance|Mystery Link
  Which journalist is involved in a hotel-room interview of Dominic Foy?|Della Smith|Helen Preger|Anne Collins|Greer Thornton|Medium|Della Smith|Dominic Foy|Hotel Interview|Hidden Recording|Evidence Gathering|Fourth Episode|Investigative Tactics
  Which politician learns Sonia was pregnant during the investigation?|Stephen Collins|George Fergus|Mike Travis|Andrew Wilson|Medium|Stephen Collins|Sonia Pregnancy|Interview Revelation|Fifth Episode|Personal Scandal|Political Pressure|Dominic Foy
  Which legal measure prevents The Herald from publishing its main investigation?|A gagging order|A parliamentary adjournment|An electoral recount|A libel trial verdict|Medium|Gagging Order|The Herald|U EX Oil|Press Restrictions|Fifth Episode|Political Influence|Publication Block
  How does editor Cameron Foster respond to the order preventing publication?|He prints a page saying the story cannot be told|He closes the paper permanently|He sends the files to the police without comment|He resigns and leaves the country|Medium|Cameron Foster|Censored Front Page|Gagging Order|Editorial Protest|Fifth Episode|Press Freedom|Public Message
  Who succeeds Cameron temporarily in editorial control after the press dispute?|Yvonne Shaps|Anne Collins|Greer Thornton|Della Smith|Hard|Yvonne Shaps|Interim Editor|The Herald|Newspaper Management|Fifth Episode|Board Intervention|Editorial Dispute
  What is the name of the former soldier connected to the murders near the end?|Robert Bingham|Dominic Foy|George Fergus|Kelvin Stagg|Hard|Robert Bingham|Former Soldier|Stephen Collins|Final Episode|Hired Surveillance|Murder Connection|Climactic Reveal
  Which MP ultimately becomes implicated through his links to Robert Bingham?|Stephen Collins|George Fergus|The Prime Minister|A backbench Conservative|Medium|Stephen Collins|Robert Bingham|Final Revelation|Abuse Of Power|Political Downfall|Hidden Surveillance|Sixth Episode
  In which year was the American cinema adaptation of State of Play released?|2009|2005|2013|2017|Medium|2009 Film|US Adaptation|Television To Cinema|Original Miniseries|Later Version|Release Year|Political Thriller
  Who played Cal McCaffrey in the 2009 film adaptation?|Russell Crowe|John Simm|Ben Affleck|Jason Bateman|Medium|Russell Crowe|Film Cal McCaffrey|2009 Remake|Cinema Casting|Television Adaptation|US Version|Lead Actor
  Who played Stephen Collins in the 2009 cinema adaptation?|Ben Affleck|David Morrissey|Jeff Daniels|Russell Crowe|Medium|Ben Affleck|Film Stephen Collins|US Congressman|Movie Cast|2009 Adaptation|Cinema Character|Political Scandal
  Which director made the 2009 feature-film adaptation of State of Play?|Kevin Macdonald|David Yates|Paul Abbott|David Fincher|Hard|Kevin Macdonald|Film Director|2009 Cinema|US Adaptation|Movie Credits|Political Thriller|Adaptation History`;

  const normalise = value => value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
  const tagKey = value => normalise(value).replace(/[^\p{L}\p{N}]/gu, '');
  const questions = [];

  function addProgramme(programme, sharedTags, facts) {
    for (const line of facts.trim().split('\n')) {
      const id = 'tv_' + String(FIRST_ID + questions.length).padStart(5, '0');
      const fields = line.trim().split('|').map(value => value.trim());
      if (fields.length !== 13) throw new Error('Pack 367: expected 13 fields for ' + id + ', found ' + fields.length);
      const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...bespokeTags] = fields;
      if ([question, correctAnswer, wrong1, wrong2, wrong3, ...bespokeTags].some(value => !value)) throw new Error('Pack 367: blank field for ' + id);
      if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || bespokeTags.length !== 7 ||
          new Set(bespokeTags.map(tagKey)).size !== 7) throw new Error('Pack 367: invalid difficulty or specific tags for ' + id);
      const answers = [wrong1, wrong2, wrong3];
      if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4) throw new Error('Pack 367: repeated answer for ' + id);
      answers.splice(questions.length % 4, 0, correctAnswer);
      const tags = [...new Map([
        'Television', 'British Television', 'Drama', 'Political Thriller',
        ...sharedTags, programme, 'Programme: ' + programme,
        correctAnswer, ...bespokeTags
      ].map(tag => [tagKey(tag), tag])).values()];
      questions.push({ id, category: 'Television', programme, question, answers,
        correctAnswer, difficulty, tags, dailyEligible: true });
    }
  }

  addProgramme('Bodyguard', ['BBC One', '2018', 'Jed Mercurio', 'Crime Thriller', 'David Budd'], bodyguardFacts);
  addProgramme('State of Play', ['BBC One', '2003', 'Paul Abbott', 'Investigative Journalism', 'Political Conspiracy'], stateFacts);

  if (!questions.length || questions[0].id !== 'tv_18423' ||
      new Set(questions.map(q => q.id)).size !== questions.length ||
      new Set(questions.map(q => normalise(q.question))).size !== questions.length ||
      questions.some((q, i) =>
        q.id !== 'tv_' + String(FIRST_ID + i).padStart(5, '0') ||
        q.category !== 'Television' || !q.programme ||
        !Array.isArray(q.answers) || q.answers.length !== 4 ||
        !q.answers.includes(q.correctAnswer) ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        !Array.isArray(q.tags) || q.tags.length < 14 ||
        new Set(q.tags.map(tagKey)).size !== q.tags.length ||
        !q.tags.includes('Programme: ' + q.programme) ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) || q.dailyEligible !== true)) {
    throw new Error('Pack 367: invalid exported question objects');
  }

  
// Pack 367 storyline audit, 22 November 2026: all 85 original IDs retained.
// Corrected the original Bodyguard spellings of Aikens and Heath Bank.
// Supporting programme guides: https://en.wikipedia.org/wiki/Bodyguard_(British_TV_series)
// https://www.thetvdb.com/series/state-of-play/allseasons/official
// https://en.wikipedia.org/wiki/State_of_Play_(TV_series)
const auditAdditions = [
  {
    "id": "tv_39544",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "To which London railway terminus is David Budd's endangered train travelling in Bodyguard?",
    "answers": [
      "King's Cross",
      "London Euston",
      "London Victoria",
      "Paddington"
    ],
    "correctAnswer": "London Euston",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 1",
      "Plot fact: Euston Railway Journey",
      "Answer detail: London Euston",
      "Storyline: Euston Railway Journey",
      "Character or clue: Euston Railway Journey",
      "Episode or production: Episode 1",
      "Drama theme: Euston Railway Journey",
      "Question focus: Euston Railway Journey"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39545",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "Which fictional parliamentary constituency does Julia Montague represent in Bodyguard?",
    "answers": [
      "Surrey North",
      "Richmond Park",
      "Thames West",
      "Haltemprice"
    ],
    "correctAnswer": "Thames West",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 1",
      "Plot fact: Julia Montague Constituency",
      "Answer detail: Thames West",
      "Storyline: Julia Montague Constituency",
      "Character or clue: Julia Montague Constituency",
      "Episode or production: Episode 1",
      "Drama theme: Julia Montague Constituency",
      "Question focus: Julia Montague Constituency"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39546",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "In Bodyguard, what hospital role does David's estranged wife Vicky hold?",
    "answers": [
      "Paramedic",
      "Consultant surgeon",
      "Hospital receptionist",
      "Ward sister"
    ],
    "correctAnswer": "Ward sister",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 1",
      "Plot fact: Vicky Budd Nurse Profession",
      "Answer detail: Ward sister",
      "Storyline: Vicky Budd Nurse Profession",
      "Character or clue: Vicky Budd Nurse Profession",
      "Episode or production: Episode 1",
      "Drama theme: Vicky Budd Nurse Profession",
      "Question focus: Vicky Budd Nurse Profession"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39547",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "Who is Julia Montague's former husband and the government Chief Whip in Bodyguard?",
    "answers": [
      "Roger Penhaligon",
      "Mike Travis",
      "John Vosler",
      "Rob MacDonald"
    ],
    "correctAnswer": "Roger Penhaligon",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 1",
      "Plot fact: Roger Penhaligon Chief Whip",
      "Answer detail: Roger Penhaligon",
      "Storyline: Roger Penhaligon Chief Whip",
      "Character or clue: Roger Penhaligon Chief Whip",
      "Episode or production: Episode 1",
      "Drama theme: Roger Penhaligon Chief Whip",
      "Question focus: Roger Penhaligon Chief Whip"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39548",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "In Bodyguard, who is the Prime Minister whose leadership Julia Montague threatens?",
    "answers": [
      "Roger Penhaligon",
      "John Vosler",
      "Mike Travis",
      "Stephen Hunter-Dunn"
    ],
    "correctAnswer": "John Vosler",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 1",
      "Plot fact: Prime Minister John Vosler",
      "Answer detail: John Vosler",
      "Storyline: Prime Minister John Vosler",
      "Character or clue: Prime Minister John Vosler",
      "Episode or production: Episode 1",
      "Drama theme: Prime Minister John Vosler",
      "Question focus: Prime Minister John Vosler"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39549",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "Which anti-war organisation includes David Budd's former comrade Andy Apsted in Bodyguard?",
    "answers": [
      "Campaign for Nuclear Disarmament",
      "Stop the War Coalition",
      "Veterans Peace Group",
      "Peace Pledge Union"
    ],
    "correctAnswer": "Veterans Peace Group",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 1",
      "Plot fact: Andy Apsted Anti War Veterans Group",
      "Answer detail: Veterans Peace Group",
      "Storyline: Andy Apsted Anti War Veterans Group",
      "Character or clue: Andy Apsted Anti War Veterans Group",
      "Episode or production: Episode 1",
      "Drama theme: Andy Apsted Anti War Veterans Group",
      "Question focus: Andy Apsted Anti War Veterans Group"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39550",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "In Bodyguard, who warns Julia of intelligence suggesting David Budd's children's school is in danger?",
    "answers": [
      "Mike Travis",
      "Lorraine Craddock",
      "Roger Penhaligon",
      "Stephen Hunter-Dunn"
    ],
    "correctAnswer": "Stephen Hunter-Dunn",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 2",
      "Plot fact: Hunter Dunn School Threat Warning",
      "Answer detail: Stephen Hunter-Dunn",
      "Storyline: Hunter Dunn School Threat Warning",
      "Character or clue: Hunter Dunn School Threat Warning",
      "Episode or production: Episode 2",
      "Drama theme: Hunter Dunn School Threat Warning",
      "Question focus: Hunter Dunn School Threat Warning"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39551",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "Where are David Budd's wife and children moved after the threatened attack on their school in Bodyguard?",
    "answers": [
      "A safe house",
      "An embassy",
      "An army barracks",
      "A hotel in Wales"
    ],
    "correctAnswer": "A safe house",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 2",
      "Plot fact: Budd Family Relocated Safe House",
      "Answer detail: A safe house",
      "Storyline: Budd Family Relocated Safe House",
      "Character or clue: Budd Family Relocated Safe House",
      "Episode or production: Episode 2",
      "Drama theme: Budd Family Relocated Safe House",
      "Question focus: Budd Family Relocated Safe House"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39552",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "In Bodyguard, which intelligence agency takes control of investigating the attempted school bombing at Julia Montague's request?",
    "answers": [
      "MI6",
      "MI5",
      "GCHQ",
      "The National Crime Agency"
    ],
    "correctAnswer": "MI5",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 2",
      "Plot fact: Julia Transfers School Investigation To MI5",
      "Answer detail: MI5",
      "Storyline: Julia Transfers School Investigation To MI5",
      "Character or clue: Julia Transfers School Investigation To MI5",
      "Episode or production: Episode 2",
      "Drama theme: Julia Transfers School Investigation To MI5",
      "Question focus: Julia Transfers School Investigation To MI5"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39553",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "In Bodyguard, which police commander asks David to secretly record Julia Montague's meetings?",
    "answers": [
      "Deepak Sharma",
      "Louise Rayburn",
      "Anne Sampson",
      "Kim Knowles"
    ],
    "correctAnswer": "Anne Sampson",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 2",
      "Plot fact: Sampson Orders Secret Meeting Recordings",
      "Answer detail: Anne Sampson",
      "Storyline: Sampson Orders Secret Meeting Recordings",
      "Character or clue: Sampson Orders Secret Meeting Recordings",
      "Episode or production: Episode 2",
      "Drama theme: Sampson Orders Secret Meeting Recordings",
      "Question focus: Sampson Orders Secret Meeting Recordings"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39554",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "At which official country residence does Julia Montague confront the Prime Minister in Bodyguard?",
    "answers": [
      "Balmoral",
      "Sandringham",
      "Dorneywood",
      "Chequers"
    ],
    "correctAnswer": "Chequers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 3",
      "Plot fact: Julia Meets PM At Chequers",
      "Answer detail: Chequers",
      "Storyline: Julia Meets PM At Chequers",
      "Character or clue: Julia Meets PM At Chequers",
      "Episode or production: Episode 3",
      "Drama theme: Julia Meets PM At Chequers",
      "Question focus: Julia Meets PM At Chequers"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39555",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "What does David Budd discover when he looks into the background of the mysterious Richard Longcross in Bodyguard?",
    "answers": [
      "No profile can be found",
      "He is a serving police constable",
      "He is a retired army general",
      "He is a former Home Secretary"
    ],
    "correctAnswer": "No profile can be found",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 3",
      "Plot fact: Longcross Identity Search Comes Up Empty",
      "Answer detail: No profile can be found",
      "Storyline: Longcross Identity Search Comes Up Empty",
      "Character or clue: Longcross Identity Search Comes Up Empty",
      "Episode or production: Episode 3",
      "Drama theme: Longcross Identity Search Comes Up Empty",
      "Question focus: Longcross Identity Search Comes Up Empty"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39556",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "In Bodyguard, who brings a briefcase into the auditorium shortly before Julia's speech is bombed?",
    "answers": [
      "Rob MacDonald",
      "Tahir Mahmood",
      "Mike Travis",
      "Luke Aikens"
    ],
    "correctAnswer": "Tahir Mahmood",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 3",
      "Plot fact: Tahir Mahmood Briefcase At Speech",
      "Answer detail: Tahir Mahmood",
      "Storyline: Tahir Mahmood Briefcase At Speech",
      "Character or clue: Tahir Mahmood Briefcase At Speech",
      "Episode or production: Episode 3",
      "Drama theme: Tahir Mahmood Briefcase At Speech",
      "Question focus: Tahir Mahmood Briefcase At Speech"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39557",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "Which police officer is killed in the explosion at Julia's speech in Bodyguard?",
    "answers": [
      "Lorraine Craddock",
      "Louise Rayburn",
      "Kim Knowles",
      "Anne Sampson"
    ],
    "correctAnswer": "Kim Knowles",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 4",
      "Plot fact: Kim Knowles Dies In Speech Explosion",
      "Answer detail: Kim Knowles",
      "Storyline: Kim Knowles Dies In Speech Explosion",
      "Character or clue: Kim Knowles Dies In Speech Explosion",
      "Episode or production: Episode 4",
      "Drama theme: Kim Knowles Dies In Speech Explosion",
      "Question focus: Kim Knowles Dies In Speech Explosion"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39558",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "Which politician becomes acting Home Secretary after the bomb attack in Bodyguard?",
    "answers": [
      "Roger Penhaligon",
      "John Vosler",
      "Rob MacDonald",
      "Mike Travis"
    ],
    "correctAnswer": "Mike Travis",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 4",
      "Plot fact: Mike Travis Acting Home Secretary",
      "Answer detail: Mike Travis",
      "Storyline: Mike Travis Acting Home Secretary",
      "Character or clue: Mike Travis Acting Home Secretary",
      "Episode or production: Episode 4",
      "Drama theme: Mike Travis Acting Home Secretary",
      "Question focus: Mike Travis Acting Home Secretary"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39559",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "In Bodyguard, what has been substituted for live ammunition in David's concealed pistol when he attempts suicide?",
    "answers": [
      "Blank cartridges",
      "Rubber bullets",
      "Salt pellets",
      "Paintball rounds"
    ],
    "correctAnswer": "Blank cartridges",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 4",
      "Plot fact: David Pistol Loaded With Blanks",
      "Answer detail: Blank cartridges",
      "Storyline: David Pistol Loaded With Blanks",
      "Character or clue: David Pistol Loaded With Blanks",
      "Episode or production: Episode 4",
      "Drama theme: David Pistol Loaded With Blanks",
      "Question focus: David Pistol Loaded With Blanks"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39560",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "In Bodyguard, which visitor has been erased from security footage at Julia Montague's hotel?",
    "answers": [
      "Roger Penhaligon",
      "Richard Longcross",
      "Andy Apsted",
      "Deepak Sharma"
    ],
    "correctAnswer": "Richard Longcross",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 4",
      "Plot fact: Longcross Hotel CCTV Tampered With",
      "Answer detail: Richard Longcross",
      "Storyline: Longcross Hotel CCTV Tampered With",
      "Character or clue: Longcross Hotel CCTV Tampered With",
      "Episode or production: Episode 4",
      "Drama theme: Longcross Hotel CCTV Tampered With",
      "Question focus: Longcross Hotel CCTV Tampered With"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39561",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "Where is the bomb that killed Julia Montague ultimately found to have been placed in Bodyguard?",
    "answers": [
      "Inside an adviser's briefcase",
      "Inside the lectern microphone",
      "Under the stage",
      "Under a nearby car"
    ],
    "correctAnswer": "Under the stage",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 5",
      "Plot fact: Bomb Concealed Under Stage",
      "Answer detail: Under the stage",
      "Storyline: Bomb Concealed Under Stage",
      "Character or clue: Bomb Concealed Under Stage",
      "Episode or production: Episode 5",
      "Drama theme: Bomb Concealed Under Stage",
      "Question focus: Bomb Concealed Under Stage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39562",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "Which form of police reconstruction does David Budd help produce to identify Richard Longcross in Bodyguard?",
    "answers": [
      "A voiceprint",
      "A fingerprint cast",
      "A DNA profile",
      "An E-FIT image"
    ],
    "correctAnswer": "An E-FIT image",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 5",
      "Plot fact: Longcross E Fit Reconstruction",
      "Answer detail: An E-FIT image",
      "Storyline: Longcross E Fit Reconstruction",
      "Character or clue: Longcross E Fit Reconstruction",
      "Episode or production: Episode 5",
      "Drama theme: Longcross E Fit Reconstruction",
      "Question focus: Longcross E Fit Reconstruction"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39563",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "In Bodyguard, which safety mechanism makes the explosive vest fitted to David especially dangerous?",
    "answers": [
      "A dead man's switch",
      "A motion detector",
      "A magnetic sensor",
      "A remote-controlled drone"
    ],
    "correctAnswer": "A dead man's switch",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 6",
      "Plot fact: David Vest Dead Mans Switch",
      "Answer detail: A dead man's switch",
      "Storyline: David Vest Dead Mans Switch",
      "Character or clue: David Vest Dead Mans Switch",
      "Episode or production: Episode 6",
      "Drama theme: David Vest Dead Mans Switch",
      "Question focus: David Vest Dead Mans Switch"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39564",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "What substance does David Budd use to booby-trap his flat against Richard Longcross in Bodyguard?",
    "answers": [
      "Tear gas canisters",
      "Pepper spray",
      "Red paint",
      "Flour"
    ],
    "correctAnswer": "Pepper spray",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 6",
      "Plot fact: David Flat Pepper Spray Trap",
      "Answer detail: Pepper spray",
      "Storyline: David Flat Pepper Spray Trap",
      "Character or clue: David Flat Pepper Spray Trap",
      "Episode or production: Episode 6",
      "Drama theme: David Flat Pepper Spray Trap",
      "Question focus: David Flat Pepper Spray Trap"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39565",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "In Bodyguard, why does David deliberately give a false location for the compromising intelligence?",
    "answers": [
      "To distract a news reporter",
      "To protect his former army colleague",
      "To lure MI5 into a trap",
      "To hide evidence from his wife"
    ],
    "correctAnswer": "To lure MI5 into a trap",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 6",
      "Plot fact: False Kompromat Location Lures MI5",
      "Answer detail: To lure MI5 into a trap",
      "Storyline: False Kompromat Location Lures MI5",
      "Character or clue: False Kompromat Location Lures MI5",
      "Episode or production: Episode 6",
      "Drama theme: False Kompromat Location Lures MI5",
      "Question focus: False Kompromat Location Lures MI5"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39566",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "In Bodyguard, why did Lorraine Craddock originally choose David to guard Julia Montague?",
    "answers": [
      "His family knew Julia socially",
      "He had previously guarded the Prime Minister",
      "He had asked for a desk job",
      "His army background and PTSD made him a convenient scapegoat"
    ],
    "correctAnswer": "His army background and PTSD made him a convenient scapegoat",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 6",
      "Plot fact: Craddock Explains David As Fall Guy",
      "Answer detail: His army background and PTSD made him a convenient scapegoat",
      "Storyline: Craddock Explains David As Fall Guy",
      "Character or clue: Craddock Explains David As Fall Guy",
      "Episode or production: Episode 6",
      "Drama theme: Craddock Explains David As Fall Guy",
      "Question focus: Craddock Explains David As Fall Guy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39567",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "In Bodyguard, where did Nadia Ali obtain the information used to target David's children's school?",
    "answers": [
      "From details David had told her on the train",
      "From a leaked Cabinet diary",
      "From a police press conference",
      "From Julia's televised speech"
    ],
    "correctAnswer": "From details David had told her on the train",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 6",
      "Plot fact: Nadia Uses David Family Details",
      "Answer detail: From details David had told her on the train",
      "Storyline: Nadia Uses David Family Details",
      "Character or clue: Nadia Uses David Family Details",
      "Episode or production: Episode 6",
      "Drama theme: Nadia Uses David Family Details",
      "Question focus: Nadia Uses David Family Details"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39568",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "After the compromising intelligence is leaked in Bodyguard, which two officials are expected to resign?",
    "answers": [
      "The Home Secretary and Chief Whip",
      "The Prime Minister and MI5 director general",
      "The police commissioner and mayor",
      "The Army chief and Chancellor"
    ],
    "correctAnswer": "The Prime Minister and MI5 director general",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 6",
      "Plot fact: PM And MI5 Chief Expected To Resign",
      "Answer detail: The Prime Minister and MI5 director general",
      "Storyline: PM And MI5 Chief Expected To Resign",
      "Character or clue: PM And MI5 Chief Expected To Resign",
      "Episode or production: Episode 6",
      "Drama theme: PM And MI5 Chief Expected To Resign",
      "Question focus: PM And MI5 Chief Expected To Resign"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39569",
    "category": "Television",
    "programme": "Bodyguard",
    "question": "Where do David, Vicky and their children head for a family visit at the end of Bodyguard?",
    "answers": [
      "A seaside resort in France",
      "An aunt's farm in Scotland",
      "David's parents' home",
      "Vicky's sister's home"
    ],
    "correctAnswer": "David's parents' home",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "Bodyguard",
      "Programme: Bodyguard",
      "BBC One",
      "2018 Television",
      "Episode context: Episode 6",
      "Plot fact: Budd Family Visits David Parents",
      "Answer detail: David's parents' home",
      "Storyline: Budd Family Visits David Parents",
      "Character or clue: Budd Family Visits David Parents",
      "Episode or production: Episode 6",
      "Drama theme: Budd Family Visits David Parents",
      "Question focus: Budd Family Visits David Parents"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39570",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, how old is murder victim Kelvin Stagg when the investigation begins?",
    "answers": [
      "Seventeen",
      "Twenty-one",
      "Twelve",
      "Fifteen"
    ],
    "correctAnswer": "Fifteen",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 1",
      "Plot fact: Kelvin Stagg Teenager Age",
      "Answer detail: Fifteen",
      "Storyline: Kelvin Stagg Teenager Age",
      "Character or clue: Kelvin Stagg Teenager Age",
      "Episode or production: Episode 1",
      "Drama theme: Kelvin Stagg Teenager Age",
      "Question focus: Kelvin Stagg Teenager Age"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39571",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, what two things does Cal's team discover inside the silver briefcase taken by Kelvin Stagg?",
    "answers": [
      "Photos of Stephen and Sonia and a gun",
      "A laptop and a passport",
      "Cash and forged banknotes",
      "A recorder and confidential files"
    ],
    "correctAnswer": "Photos of Stephen and Sonia and a gun",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 1",
      "Plot fact: Silver Briefcase Photographs And Gun",
      "Answer detail: Photos of Stephen and Sonia and a gun",
      "Storyline: Silver Briefcase Photographs And Gun",
      "Character or clue: Silver Briefcase Photographs And Gun",
      "Episode or production: Episode 1",
      "Drama theme: Silver Briefcase Photographs And Gun",
      "Question focus: Silver Briefcase Photographs And Gun"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39572",
    "category": "Television",
    "programme": "State of Play",
    "question": "Which House of Commons committee does Stephen Collins chair in State of Play?",
    "answers": [
      "Home Affairs Select Committee",
      "Energy Select Committee",
      "Foreign Affairs Committee",
      "Defence Select Committee"
    ],
    "correctAnswer": "Energy Select Committee",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 1",
      "Plot fact: Stephen Collins Energy Committee Chair",
      "Answer detail: Energy Select Committee",
      "Storyline: Stephen Collins Energy Committee Chair",
      "Character or clue: Stephen Collins Energy Committee Chair",
      "Episode or production: Episode 1",
      "Drama theme: Stephen Collins Energy Committee Chair",
      "Question focus: Stephen Collins Energy Committee Chair"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39573",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, which reporter is the son of newspaper editor Cameron Foster?",
    "answers": [
      "Pete Cheng",
      "Cal McCaffrey",
      "Dan Foster",
      "Helen Preger"
    ],
    "correctAnswer": "Dan Foster",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 1",
      "Plot fact: Dan Foster Cameron Son",
      "Answer detail: Dan Foster",
      "Storyline: Dan Foster Cameron Son",
      "Character or clue: Dan Foster Cameron Son",
      "Episode or production: Episode 1",
      "Drama theme: Dan Foster Cameron Son",
      "Question focus: Dan Foster Cameron Son"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39574",
    "category": "Television",
    "programme": "State of Play",
    "question": "Which detective is killed before DCI William Bell takes charge of the State of Play investigation?",
    "answers": [
      "Deepak Sharma",
      "William Bell",
      "Mark Cheweski",
      "Stuart Brown"
    ],
    "correctAnswer": "Stuart Brown",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 2",
      "Plot fact: DI Brown Murder Sparks Police Handover",
      "Answer detail: Stuart Brown",
      "Storyline: DI Brown Murder Sparks Police Handover",
      "Character or clue: DI Brown Murder Sparks Police Handover",
      "Episode or production: Episode 2",
      "Drama theme: DI Brown Murder Sparks Police Handover",
      "Question focus: DI Brown Murder Sparks Police Handover"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39575",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, who is the political spin doctor trying to protect Stephen Collins from the scandal?",
    "answers": [
      "Andrew Wilson",
      "George Fergus",
      "Robert Bingham",
      "Dominic Foy"
    ],
    "correctAnswer": "Andrew Wilson",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 2",
      "Plot fact: Andrew Wilson Protects Collins Reputation",
      "Answer detail: Andrew Wilson",
      "Storyline: Andrew Wilson Protects Collins Reputation",
      "Character or clue: Andrew Wilson Protects Collins Reputation",
      "Episode or production: Episode 2",
      "Drama theme: Andrew Wilson Protects Collins Reputation",
      "Question focus: Andrew Wilson Protects Collins Reputation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39576",
    "category": "Television",
    "programme": "State of Play",
    "question": "What does an anonymous communication reveal Stephen Collins had planned with Sonia in State of Play?",
    "answers": [
      "To send Sonia to a foreign embassy",
      "To leave his wife and live with Sonia",
      "To resign immediately from Parliament",
      "To launch a newspaper together"
    ],
    "correctAnswer": "To leave his wife and live with Sonia",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 2",
      "Plot fact: Anonymous Message About Collins And Sonia",
      "Answer detail: To leave his wife and live with Sonia",
      "Storyline: Anonymous Message About Collins And Sonia",
      "Character or clue: Anonymous Message About Collins And Sonia",
      "Episode or production: Episode 2",
      "Drama theme: Anonymous Message About Collins And Sonia",
      "Question focus: Anonymous Message About Collins And Sonia"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39577",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, what happens at Stella's flat while the newspaper pursues the murder link?",
    "answers": [
      "The building is evacuated after a fire",
      "She discovers a hidden recording studio",
      "It is raided by the gunman",
      "Police find it abandoned"
    ],
    "correctAnswer": "It is raided by the gunman",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 2",
      "Plot fact: Gunman Raids Stella Flat",
      "Answer detail: It is raided by the gunman",
      "Storyline: Gunman Raids Stella Flat",
      "Character or clue: Gunman Raids Stella Flat",
      "Episode or production: Episode 2",
      "Drama theme: Gunman Raids Stella Flat",
      "Question focus: Gunman Raids Stella Flat"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39578",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, what does DCI Bell suspect Sonia was using to pressure Stephen Collins?",
    "answers": [
      "Threats to kidnap his son",
      "Threats of industrial action",
      "A fabricated police record",
      "Blackmail about their affair"
    ],
    "correctAnswer": "Blackmail about their affair",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 3",
      "Plot fact: Sonia Suspected Blackmail",
      "Answer detail: Blackmail about their affair",
      "Storyline: Sonia Suspected Blackmail",
      "Character or clue: Sonia Suspected Blackmail",
      "Episode or production: Episode 3",
      "Drama theme: Sonia Suspected Blackmail",
      "Question focus: Sonia Suspected Blackmail"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39579",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, how long before her interview had Sonia apparently known she would get the political research job?",
    "answers": [
      "A month",
      "A day",
      "Six months",
      "Two years"
    ],
    "correctAnswer": "A month",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 3",
      "Plot fact: Sonia Knows Job Month In Advance",
      "Answer detail: A month",
      "Storyline: Sonia Knows Job Month In Advance",
      "Character or clue: Sonia Knows Job Month In Advance",
      "Episode or production: Episode 3",
      "Drama theme: Sonia Knows Job Month In Advance",
      "Question focus: Sonia Knows Job Month In Advance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39580",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, who leads the newspaper team towards the witness Dominic Foy?",
    "answers": [
      "Pete Cheng",
      "Dan Foster",
      "Cameron Foster",
      "Helen Preger"
    ],
    "correctAnswer": "Dan Foster",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 3",
      "Plot fact: Dan Traces Dominic Foy",
      "Answer detail: Dan Foster",
      "Storyline: Dan Traces Dominic Foy",
      "Character or clue: Dan Traces Dominic Foy",
      "Episode or production: Episode 3",
      "Drama theme: Dan Traces Dominic Foy",
      "Question focus: Dan Traces Dominic Foy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39581",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, what tactic helps Cal's team draw out the killer pursuing him?",
    "answers": [
      "Pretending the newspaper has closed",
      "Publishing a false obituary",
      "Planting a story in the press",
      "Sending a police officer abroad"
    ],
    "correctAnswer": "Planting a story in the press",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 3",
      "Plot fact: Press Decoy Draws Killer",
      "Answer detail: Planting a story in the press",
      "Storyline: Press Decoy Draws Killer",
      "Character or clue: Press Decoy Draws Killer",
      "Episode or production: Episode 3",
      "Drama theme: Press Decoy Draws Killer",
      "Question focus: Press Decoy Draws Killer"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39582",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, where does Della's team secretly record Dominic Foy's answers during his first major interview?",
    "answers": [
      "From inside a police van",
      "From a parliamentary office",
      "From a parked taxi",
      "From an adjoining hotel room"
    ],
    "correctAnswer": "From an adjoining hotel room",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 4",
      "Plot fact: Dominic Foy Hotel Interview Taped",
      "Answer detail: From an adjoining hotel room",
      "Storyline: Dominic Foy Hotel Interview Taped",
      "Character or clue: Dominic Foy Hotel Interview Taped",
      "Episode or production: Episode 4",
      "Drama theme: Dominic Foy Hotel Interview Taped",
      "Question focus: Dominic Foy Hotel Interview Taped"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39583",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, which industry does the lobbyist firm Warner-Schloss represent?",
    "answers": [
      "Oil",
      "Pharmaceuticals",
      "Telecommunications",
      "Airlines"
    ],
    "correctAnswer": "Oil",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 4",
      "Plot fact: Warner Schloss Oil Industry Clients",
      "Answer detail: Oil",
      "Storyline: Warner Schloss Oil Industry Clients",
      "Character or clue: Warner Schloss Oil Industry Clients",
      "Episode or production: Episode 4",
      "Drama theme: Warner Schloss Oil Industry Clients",
      "Question focus: Warner Schloss Oil Industry Clients"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39584",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, what is Anne Collins's profession apart from her role as the MP's wife?",
    "answers": [
      "School headteacher",
      "Record-store manager",
      "Local councillor",
      "Solicitor"
    ],
    "correctAnswer": "Record-store manager",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 4",
      "Plot fact: Anne Collins Runs Record Store",
      "Answer detail: Record-store manager",
      "Storyline: Anne Collins Runs Record Store",
      "Character or clue: Anne Collins Runs Record Store",
      "Episode or production: Episode 4",
      "Drama theme: Anne Collins Runs Record Store",
      "Question focus: Anne Collins Runs Record Store"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39585",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, who secretly prompts Della's questions through a concealed microphone during a second interview with Dominic Foy?",
    "answers": [
      "Cal McCaffrey",
      "Andrew Wilson",
      "Stephen Collins",
      "DCI Bell"
    ],
    "correctAnswer": "Stephen Collins",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 5",
      "Plot fact: Stephen Prompts Della Questions",
      "Answer detail: Stephen Collins",
      "Storyline: Stephen Prompts Della Questions",
      "Character or clue: Stephen Prompts Della Questions",
      "Episode or production: Episode 5",
      "Drama theme: Stephen Prompts Della Questions",
      "Question focus: Stephen Prompts Della Questions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39586",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, who encouraged Greer Thornton to hire Sonia Baker despite her weaker qualifications?",
    "answers": [
      "Cameron Foster",
      "Dominic Foy",
      "Anne Collins",
      "George Fergus"
    ],
    "correctAnswer": "George Fergus",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 5",
      "Plot fact: George Fergus Pushes Sonia Hiring",
      "Answer detail: George Fergus",
      "Storyline: George Fergus Pushes Sonia Hiring",
      "Character or clue: George Fergus Pushes Sonia Hiring",
      "Episode or production: Episode 5",
      "Drama theme: George Fergus Pushes Sonia Hiring",
      "Question focus: George Fergus Pushes Sonia Hiring"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39587",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, what happens to Dominic Foy after Stephen Collins learns about Sonia's pregnancy during his interview?",
    "answers": [
      "Stephen attacks him",
      "He is arrested for murder",
      "He escapes to France",
      "He leaves journalism"
    ],
    "correctAnswer": "Stephen attacks him",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 5",
      "Plot fact: Stephen Attacks Dominic Foy",
      "Answer detail: Stephen attacks him",
      "Storyline: Stephen Attacks Dominic Foy",
      "Character or clue: Stephen Attacks Dominic Foy",
      "Episode or production: Episode 5",
      "Drama theme: Stephen Attacks Dominic Foy",
      "Question focus: Stephen Attacks Dominic Foy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39588",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, who is brought in as the newspaper owner's representative after editor Cameron Foster defies pressure?",
    "answers": [
      "Greer Thornton",
      "Yvonne Shaps",
      "Anne Collins",
      "Helen Preger"
    ],
    "correctAnswer": "Yvonne Shaps",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 5",
      "Plot fact: Yvonne Shaps Owner Representative",
      "Answer detail: Yvonne Shaps",
      "Storyline: Yvonne Shaps Owner Representative",
      "Character or clue: Yvonne Shaps Owner Representative",
      "Episode or production: Episode 5",
      "Drama theme: Yvonne Shaps Owner Representative",
      "Question focus: Yvonne Shaps Owner Representative"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39589",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, which piece of correspondence connects Sonia Baker to Warner-Schloss and U-EX Oil?",
    "answers": [
      "A postcard from Cal",
      "A signed police warrant",
      "An email handed over by Dominic Foy",
      "A ministerial Christmas card"
    ],
    "correctAnswer": "An email handed over by Dominic Foy",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 6",
      "Plot fact: Foy Email Links Sonia To Oil Lobbyists",
      "Answer detail: An email handed over by Dominic Foy",
      "Storyline: Foy Email Links Sonia To Oil Lobbyists",
      "Character or clue: Foy Email Links Sonia To Oil Lobbyists",
      "Episode or production: Episode 6",
      "Drama theme: Foy Email Links Sonia To Oil Lobbyists",
      "Question focus: Foy Email Links Sonia To Oil Lobbyists"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39590",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, at what London location does Paul Canning repeatedly meet Sonia Baker according to Stephen Collins?",
    "answers": [
      "Leicester Square station",
      "The Royal Albert Hall",
      "The Barbican",
      "The Trocadero"
    ],
    "correctAnswer": "The Trocadero",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 6",
      "Plot fact: Paul Canning Meetings At Trocadero",
      "Answer detail: The Trocadero",
      "Storyline: Paul Canning Meetings At Trocadero",
      "Character or clue: Paul Canning Meetings At Trocadero",
      "Episode or production: Episode 6",
      "Drama theme: Paul Canning Meetings At Trocadero",
      "Question focus: Paul Canning Meetings At Trocadero"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39591",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, what does Stephen Collins offer to resign from while helping Cal trace the conspiracy?",
    "answers": [
      "The Energy Select Committee",
      "His political party",
      "The Cabinet Office",
      "His constituency association"
    ],
    "correctAnswer": "The Energy Select Committee",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 6",
      "Plot fact: Stephen Offers Energy Committee Resignation",
      "Answer detail: The Energy Select Committee",
      "Storyline: Stephen Offers Energy Committee Resignation",
      "Character or clue: Stephen Offers Energy Committee Resignation",
      "Episode or production: Episode 6",
      "Drama theme: Stephen Offers Energy Committee Resignation",
      "Question focus: Stephen Offers Energy Committee Resignation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39592",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, who receives the copyright to the final investigation story in Cameron Foster's plan?",
    "answers": [
      "Dominic Foy",
      "Cal McCaffrey",
      "Stephen Collins",
      "Della Smith"
    ],
    "correctAnswer": "Cal McCaffrey",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 6",
      "Plot fact: Cal Gets Story Copyright",
      "Answer detail: Cal McCaffrey",
      "Storyline: Cal Gets Story Copyright",
      "Character or clue: Cal Gets Story Copyright",
      "Episode or production: Episode 6",
      "Drama theme: Cal Gets Story Copyright",
      "Question focus: Cal Gets Story Copyright"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39593",
    "category": "Television",
    "programme": "State of Play",
    "question": "In State of Play, which colleague witnesses Cameron Foster's document assigning the scoop to Cal McCaffrey?",
    "answers": [
      "Helen Preger",
      "Dan Foster",
      "Della Smith",
      "Pete Cheng"
    ],
    "correctAnswer": "Della Smith",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Episode 6",
      "Plot fact: Della Witnesses Copyright Document",
      "Answer detail: Della Smith",
      "Storyline: Della Witnesses Copyright Document",
      "Character or clue: Della Witnesses Copyright Document",
      "Episode or production: Episode 6",
      "Drama theme: Della Witnesses Copyright Document",
      "Question focus: Della Witnesses Copyright Document"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39594",
    "category": "Television",
    "programme": "State of Play",
    "question": "Who played The Herald's clerical assistant Syd Hardy in State of Play?",
    "answers": [
      "Benedict Wong",
      "James McAvoy",
      "Rory McCann",
      "Tom Burke"
    ],
    "correctAnswer": "Tom Burke",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Production",
      "Plot fact: Tom Burke Plays Syd Hardy",
      "Answer detail: Tom Burke",
      "Storyline: Tom Burke Plays Syd Hardy",
      "Character or clue: Tom Burke Plays Syd Hardy",
      "Episode or production: Production",
      "Drama theme: Tom Burke Plays Syd Hardy",
      "Question focus: Tom Burke Plays Syd Hardy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39595",
    "category": "Television",
    "programme": "State of Play",
    "question": "Who played newspaper proprietor Bob Coutts in State of Play?",
    "answers": [
      "David Ryall",
      "Bill Nighy",
      "Geraldine James",
      "Michael Feast"
    ],
    "correctAnswer": "David Ryall",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Production",
      "Plot fact: David Ryall Newspaper Owner",
      "Answer detail: David Ryall",
      "Storyline: David Ryall Newspaper Owner",
      "Character or clue: David Ryall Newspaper Owner",
      "Episode or production: Production",
      "Drama theme: David Ryall Newspaper Owner",
      "Question focus: David Ryall Newspaper Owner"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39596",
    "category": "Television",
    "programme": "State of Play",
    "question": "Who played legal executive Yvonne Shaps in State of Play?",
    "answers": [
      "Polly Walker",
      "Geraldine James",
      "Kelly Macdonald",
      "Deborah Findlay"
    ],
    "correctAnswer": "Geraldine James",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Production",
      "Plot fact: Geraldine James As Yvonne Shaps",
      "Answer detail: Geraldine James",
      "Storyline: Geraldine James As Yvonne Shaps",
      "Character or clue: Geraldine James As Yvonne Shaps",
      "Episode or production: Production",
      "Drama theme: Geraldine James As Yvonne Shaps",
      "Question focus: Geraldine James As Yvonne Shaps"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39597",
    "category": "Television",
    "programme": "State of Play",
    "question": "Which composer wrote the original music for State of Play?",
    "answers": [
      "John Lunn",
      "Murray Gold",
      "Nicholas Hooper",
      "David Arnold"
    ],
    "correctAnswer": "Nicholas Hooper",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Production",
      "Plot fact: Nicholas Hooper State Of Play Score",
      "Answer detail: Nicholas Hooper",
      "Storyline: Nicholas Hooper State Of Play Score",
      "Character or clue: Nicholas Hooper State Of Play Score",
      "Episode or production: Production",
      "Drama theme: Nicholas Hooper State Of Play Score",
      "Question focus: Nicholas Hooper State Of Play Score"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39598",
    "category": "Television",
    "programme": "State of Play",
    "question": "Which production company was responsible for the 2003 BBC drama State of Play?",
    "answers": [
      "World Productions",
      "Kudos",
      "Left Bank Pictures",
      "Endor Productions"
    ],
    "correctAnswer": "Endor Productions",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Production",
      "Plot fact: Endor Productions BBC Drama",
      "Answer detail: Endor Productions",
      "Storyline: Endor Productions BBC Drama",
      "Character or clue: Endor Productions BBC Drama",
      "Episode or production: Production",
      "Drama theme: Endor Productions BBC Drama",
      "Question focus: Endor Productions BBC Drama"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39599",
    "category": "Television",
    "programme": "State of Play",
    "question": "Which BBC channel previewed State of Play episodes two through five before their BBC One transmissions?",
    "answers": [
      "BBC Four",
      "BBC Two",
      "BBC Three",
      "BBC News 24"
    ],
    "correctAnswer": "BBC Four",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Broadcast history",
      "Plot fact: BBC Four Early Episode Previews",
      "Answer detail: BBC Four",
      "Storyline: BBC Four Early Episode Previews",
      "Character or clue: BBC Four Early Episode Previews",
      "Episode or production: Broadcast history",
      "Drama theme: BBC Four Early Episode Previews",
      "Question focus: BBC Four Early Episode Previews"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39600",
    "category": "Television",
    "programme": "State of Play",
    "question": "Why did the final episode of State of Play not receive an early BBC Four preview?",
    "answers": [
      "The episode had not finished filming",
      "To protect the concluding plot twists",
      "A sports broadcast displaced it",
      "The broadcaster lost its licence"
    ],
    "correctAnswer": "To protect the concluding plot twists",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Drama",
      "Political Thriller",
      "State of Play",
      "Programme: State of Play",
      "BBC One",
      "2003 Television",
      "Episode context: Broadcast history",
      "Plot fact: State Of Play Finale First On BBC One",
      "Answer detail: To protect the concluding plot twists",
      "Storyline: State Of Play Finale First On BBC One",
      "Character or clue: State Of Play Finale First On BBC One",
      "Episode or production: Broadcast history",
      "Drama theme: State Of Play Finale First On BBC One",
      "Question focus: State Of Play Finale First On BBC One"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if (new Set(questions.map(q=>q.id)).size!==questions.length ||
    new Set(questions.map(q=>normalise(q.question))).size!==questions.length ||
    questions.some(q=>q.answers.length!==4 || new Set(q.answers.map(normalise)).size!==4 ||
      q.answers.filter(a=>a===q.correctAnswer).length!==1 ||
      q.tags.length<14 || !q.tags.includes('Programme: '+q.programme) || q.dailyEligible!==true)) {
  throw Error('Pack 367 historical audit validation failed');
}
module.exports = questions;
