
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
  Who portrayed organised-crime figure Luke Aitkens?|Matt Stokoe|Paul Ready|Tom Brooke|Nicholas Gleaves|Medium|Matt Stokoe|Luke Aitkens|Organised Crime|Gang Leader|Actor Casting|Criminal Conspiracy|Julia Assassination
  Who played Julia's former adviser Chanel Dyson?|Stephanie Hyam|Pippa Haywood|Gina McKee|Nina Toussaint-White|Medium|Stephanie Hyam|Chanel Dyson|Dismissed Adviser|Ministerial Aide|Actress Role|Political Staff|Luke Associate
  What form of transport is threatened in the opening of Bodyguard?|A passenger train|A passenger ferry|A London bus|An underground tram|Easy|Opening Episode|Rail Journey|Suicide Vest|Nadia Ali|David Budd|Children Present|Terror Threat
  Which of David Budd's actions first brings him to official attention?|He prevents a suicide bombing|He rescues the Prime Minister from a fire|He solves a kidnapping|He uncovers a bank fraud|Easy|Train Bomb Averted|David Intervention|Opening Rescue|Personal Courage|Security Recognition|Police Career|First Episode
  Which two children are David and Vicky's?|Ella and Charlie|Sarah and Tom|Lucy and James|Amy and Daniel|Medium|Ella Budd|Charlie Budd|Children|David And Vicky|Family Threat|Parents|School Attack
  Which school is threatened by a vehicle bomb in Bodyguard?|Heathbank Primary School|Waterloo Road|Grange Hill Academy|St Matthew's Primary|Medium|Heathbank Primary|School Bomb Threat|David Children|Second Episode|Terror Plot|Security Crisis|Vehicle Attack
  What new security legislation does Julia Montague support?|RIPA 18|The Freedom of Information Act|The Human Rights Act|The Official Secrets Act of 1911|Medium|RIPA 18|Surveillance Powers|Security Legislation|Julia Montague|Counter Terrorism Bill|Political Controversy|Civil Liberties
  Whose surveillance powers would Julia's proposed bill extend?|The security services'|The local councils'|The armed forces'|The prison service's|Medium|Expanded Security Powers|Monitoring Communications|RIPA Legislation|Civil Rights Debate|Intelligence Services|Julia Policy|British Politics
  Which of David Budd's former army comrades attacks Julia Montague from a rooftop?|Andy Apsted|Rob MacDonald|Deepak Sharma|Luke Aitkens|Medium|Andy Apsted|Rooftop Sniper|Second Episode|Former Army Friend|Attacked Convoy|David Budd|Assassination Attempt
  Where is Julia Montague when a bomb fatally injures her?|Giving a speech at a college|Visiting an airfield|Travelling on a train|Attending a cabinet meeting|Easy|St Matthews College|Political Speech|Explosive Device|Julia Montague|Third Episode|Fatal Attack|Public Event
  What happens to Julia Montague after the attack at St Matthew's College?|She dies from her injuries|She flees the country|She becomes Prime Minister|She resigns and survives|Medium|Julia Death|Hospital Aftermath|Third Episode|Political Assassination|David Failure|Story Turning Point|Fatal Bombing
  What damaging material is delivered on a tablet to Julia?|Compromising information about the Prime Minister|Secret overseas election results|An army recruitment database|The names of every police informant|Medium|Kompromat|Tablet Device|Prime Minister Scandal|Security Service|Julia Montague|Secret Intelligence|Political Blackmail
  Who delivers the intelligence-service tablet to Julia's hotel?|Richard Longcross|Luke Aitkens|Mike Travis|Andy Apsted|Medium|Richard Longcross|Hotel Delivery|Compromising Dossier|Security Service Agent|Secret Meeting|Tablet Evidence|Intelligence Operation
  Which police officer is revealed to be helping criminal Luke Aitkens?|Lorraine Craddock|Anne Sampson|Louise Rayburn|Deepak Sharma|Medium|Lorraine Craddock|Police Insider|Luke Aitkens|Corrupt Command|Finale Revelation|Conspiracy|Organised Crime
  Who is revealed to have manufactured the explosives in the conspiracy?|Nadia Ali|Chanel Dyson|Anne Sampson|Vicky Budd|Medium|Nadia Ali|Bomb Maker|Engineering Skills|Final Episode|Conspiracy Reveal|Extremist Plot|Explosive Devices
  Which criminal organisation leader works with the bomb-maker to target Julia?|Luke Aitkens|Stephen Hunter-Dunn|Roger Penhaligon|Rob MacDonald|Medium|Luke Aitkens|Criminal Alliance|Nadia Ali|Julia Targeted|Police Corruption|Organised Crime Network|Finale Plot
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

  module.exports = questions;
