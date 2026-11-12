
// quiz_pack381.js
// PuzzlePilot - The Bigggggg Quiz
// A Touch of Frost - Part 1: Series 1-3 (1992, 1994, 1995).
// Full WordPad-ready CommonJS file; no external dependencies.
// Cases, character relationships, guest performers and production history.
// Later series begin with Pack 382. Keep the master row PARTIAL until finished.

const FIRST_ID = 19963;
const programme = 'A Touch of Frost';
const era = '1992-1995';
// Each fact: question | correct answer | three distinct distractors | difficulty | seven precise tags.
const coreFacts = `Who portrayed Detective Inspector Jack Frost?|David Jason|John Lyons|Bruce Alexander|Arthur White|Easy|David Jason|Jack Frost|Lead Actor|Denton CID|Detective Inspector|Casting|ITV Crime Drama
What is the fictional town where Jack Frost works?|Denton|Midsomer|Weatherfield|Sun Hill|Easy|Denton|Fictional Town|Police Station|English Setting|Jack Frost|Investigations|Series Location
Who played Frost's superior Superintendent Norman Mullett?|Bruce Alexander|David Jason|John Lyons|Neil Phillips|Easy|Bruce Alexander|Norman Mullett|Superintendent|Police Hierarchy|Frost Boss|Main Cast|Actor Casting
What nickname is given to Superintendent Mullett?|Horn-rimmed Harry|The Iron Duke|Chief Inspector Sunshine|Big Norman|Medium|Norman Mullett|Horn Rimmed Harry|Spectacles|Police Boss|Workplace Humour|Bruce Alexander|Superintendent
Which actor played Frost's colleague DS George Toolan?|John Lyons|Matt Bardock|Arthur White|Neil Dudgeon|Easy|John Lyons|George Toolan|Detective Sergeant|Denton Police|Main Cast|Actor Casting|Frost Colleague
Which actor portrayed PC Ernie Trigg?|Arthur White|John Lyons|Tony Haygarth|Bruce Alexander|Medium|Arthur White|Ernie Trigg|Police Constable|Denton Police|Actor Casting|Recurring Cast|Uniformed Officer
Which writer created the character Jack Frost in a series of crime novels?|R. D. Wingfield|Colin Dexter|P. D. James|Reginald Hill|Easy|R D Wingfield|Crime Novels|Literary Creator|Jack Frost|Books Adaptation|British Crime Fiction|Source Material
What is Jack Frost's given first name, rather than his nickname?|William|John|Norman|George|Medium|William Edward Frost|Character Full Name|Jack Nickname|Detective Inspector|Denton Police|Identity|R D Wingfield
Which bravery decoration does Frost hold?|George Cross|Military Cross|Victoria Medal|Queen's Police Medal only|Medium|George Cross|Frost Award|Civilian Gallantry|Police Bravery|Medal|Character Backstory|Heroism
Which channel originally broadcast the detective drama?|ITV|BBC One|Channel 4|BBC Two|Easy|ITV|Original Broadcaster|Yorkshire Television|1992 Premiere|British Drama|Television Network|Crime Series
What year did the programme begin on television?|1992|1988|1995|1999|Easy|1992 Debut|First Broadcast|Series One|Television Timeline|ITV|December Premiere|Programme Origins
Which production company made the earliest episodes?|Yorkshire Television|Granada London|Thames Television|Central Independent Television|Medium|Yorkshire Television|Production Company|Original Run|Regional ITV|Behind The Scenes|Early 1990s|Crime Drama
Who wrote all three scripts in the first series?|Richard Harris|Christopher Russell|Michael Russell|Simon Lewis|Medium|Richard Harris|Series One|Screenwriter|1992 Scripts|Adaptation|Television Writing|Production Credits
Who played nurse Shirley Fisher, who becomes important in Frost's personal life?|Lindy Whiteford|Isla Blair|Sally Dexter|Caroline Harker|Easy|Lindy Whiteford|Shirley Fisher|Nurse|Frost Romance|Actor Casting|Recurring Character|Personal Life
Which detective has a continuing connection with Frost and later works with him again after the pilot?|Clive Barnard|Frank Costello|Carl Tanner|Sandy Gilmore|Medium|Clive Barnard|Matt Bardock|Police Partner|Pilot Episode|Recurring Detective|Denton CID|Character Continuity
Who played Detective Constable Clive Barnard?|Matt Bardock|Lennie James|Neil Dudgeon|Tony Haygarth|Easy|Matt Bardock|Clive Barnard|Detective Constable|Actor Casting|Series One|Returning Colleague|Denton CID
Which actress played WPC Hazel Wallace?|Caroline Harker|Sally Dexter|Lindy Whiteford|Isla Blair|Easy|Caroline Harker|Hazel Wallace|Woman Police Constable|Actor Casting|Denton Police|Undercover Work|Recurring Character
Which police pathologist is played by David Gooderson?|Derek Simpkins|George Toolan|Jim Allen|Frank Costello|Medium|David Gooderson|Derek Simpkins|Pathologist|Forensic Medicine|Actor Character|Denton Cases|Recurring Cast`;

const firstSeries = `What is the title of the very first episode?|Care and Protection|Not with Kindness|Conclusions|A Minority of One|Easy|Care And Protection|Series One Premiere|1992|Episode Title|First Case|Opening Episode|ITV Debut
Which missing child is central to the opening investigation?|Tracy Uphill|Paula Bartlett|Tricia Martin|Alison Cook|Easy|Tracy Uphill|Missing Child|Care And Protection|Series One|Denton|Frost Investigation|1992
What is the first name of Tracy Uphill's mother?|Linda|Shirley|Anne|Alex|Medium|Linda Uphill|Tracy Uphill|Mother Daughter|Care And Protection|Missing Child Case|Family Connection|1992
Who is Frost's new detective partner in the pilot?|Clive Barnard|Carl Tanner|Frank Costello|George Webster|Easy|Clive Barnard|First Episode|New Partner|Care And Protection|Chief Constable Nephew|Police Collaboration|1992
How is Clive Barnard related to the Chief Constable?|He is his nephew|He is his son|He is his brother|He is his godson|Medium|Clive Barnard|Chief Constable|Nephew Relationship|Police Family|Care And Protection|Matt Bardock|1992
What old crime is reopened when skeletal remains are found during the first investigation?|A bank robbery|A jewellery-shop burglary|A railway arson attack|An art-gallery theft|Medium|Bank Robbery|Cold Case|Care And Protection|Skeletal Remains|Thirty Years Earlier|Denton|1992
What object is attached to the skeleton's severed wrist in the opening episode?|A locked strongbox|A police handcuff key|A wristwatch|A leather suitcase|Medium|Locked Strongbox|Skeleton|Severed Wrist|Care And Protection|Cold Case Clue|Forensic Evidence|1992
Which former bank official is exposed as responsible for the decades-old crime?|Gerald Powell|Ronald Garwood|Sandy Longford|Clive Barnard|Hard|Gerald Powell|Retired Bank Manager|Old Robbery|Care And Protection|Felton|1992|Crime Solution
What clue helps the police trace the abducted child in the first episode?|Cat fur|A railway ticket|A dropped earring|A torn map|Medium|Cat Fur|Tracy Uphill|Kidnapper|Care And Protection|Forensic Clue|Hospital Return|1992
What personal loss does Frost suffer during the first episode?|His wife's death|His brother's death|His son's disappearance|His mother's funeral|Easy|Mary Frost|Death Of Wife|Care And Protection|Bereavement|Character Backstory|Series One|1992
Which novel provides the basis for the opening television story?|Frost at Christmas|Night Frost|Hard Frost|Winter Frost|Medium|Frost At Christmas|R D Wingfield|First Adaptation|Care And Protection|Crime Novel|Literary Source|1992
Which teenage newspaper deliverer is murdered in the second episode?|Paula Bartlett|Tracy Uphill|Tricia Martin|Jane Conrad|Easy|Paula Bartlett|Paper Girl|Not With Kindness|Murder Victim|News Delivery Round|Series One|1992
How old is the murdered paper girl in the second episode?|Fifteen|Twelve|Seventeen|Nineteen|Medium|Paula Bartlett|Age Fifteen|Not With Kindness|Teenage Victim|Newspaper Round|1992|Series One
Which temporary detective works alongside Frost in the second episode?|Sandy Gilmore|George Webster|Carl Tanner|Frank Costello|Medium|Sandy Gilmore|Temporary Partner|Not With Kindness|Detective Sergeant|Tony Haygarth|Series One|1992
Which actor portrayed DS Sandy Gilmore?|Tony Haygarth|Matt Bardock|John Lyons|Lennie James|Medium|Tony Haygarth|Sandy Gilmore|Not With Kindness|Guest Detective|Actor Casting|Series One|1992
Who is revealed as Paula Bartlett's killer?|Mike Bell|Colin Fletcher|Ronnie Eustace|Gerald Powell|Medium|Mike Bell|Paula Bartlett|Not With Kindness|Murder Confession|Customer|1992|Case Resolution
What small personal item does Frost use to trick the paper girl's killer into confessing?|A bracelet charm|A silver ring|A scarf pin|A watch strap|Medium|Bracelet Charm|Planted Evidence|Paula Bartlett|Not With Kindness|Frost Unorthodox Methods|Confession|1992
Which woman reports threats and disturbing packages in a second investigation that week?|Alex Compton|Linda Uphill|Natalie Bell|Shirley Fisher|Medium|Alex Compton|Threatening Packages|Not With Kindness|Stalking Allegation|Series One|1992|Separate Case
What trade is Alex Compton's husband involved in?|Rare books|Antique clocks|Fine wines|Classic cars|Medium|Rare Book Dealer|Alex Compton|Not With Kindness|Husband Occupation|Murder Investigation|Series One|1992
What crime kills Alex Compton's husband?|Arson|Hit and run|Poisoning|An armed robbery|Medium|Arson|Compton Husband|Not With Kindness|House Fire|Insurance Motive|1992|Case Climax
What is the title of the third and final episode of the first series?|Conclusions|Quarry|No Refuge|The Big Day|Medium|Conclusions|Series One Finale|Episode Title|1992|Final Episode|Broadcast Order|ITV
What establishment is robbed in the first-series finale?|A private casino|A bank vault|A supermarket|A museum|Easy|Casino Robbery|Sherwood Club|Conclusions|Series One|1992|Frost Investigation|Criminal Debt
What is the name of the private casino targeted in the final 1992 episode?|The Sherwood Club|The Crown Club|The Diamond Lounge|The Stag Hotel|Medium|Sherwood Club|Casino|Conclusions|Robbery Scene|Denton Nightlife|1992|Business Name
Whose son is involved in a hit-and-run case in the same episode?|A local MP's|The police superintendent's|A school headteacher's|The mayor's|Medium|Roger Massie|Politician Son|Hit And Run|Conclusions|1992|Influential Family|Separate Case
Who is Frost's difficult new police partner in the first-series finale?|DC Webster|DC Tanner|DS Lawson|WPC Wallace|Medium|DC Webster|Scottish Secondment|Conclusions|Police Partner|Series One Finale|1992|Denton CID
Which police officer is murdered in the final 1992 episode?|Dave Shelby|George Toolan|Ernie Trigg|Clive Barnard|Medium|Dave Shelby|Police Officer Murder|Conclusions|Series One|1992|Denton Police|Investigative Case
Who is the wanted armed bank robber accused of killing that officer?|Ronnie Eustace|Roger Massie|Mike Bell|Gerald Powell|Medium|Ronnie Eustace|Wanted Robber|Conclusions|False Suspect|Armed Fugitive|1992|Police Investigation
What forensic clue reveals the police officer's death was covered up?|Evidence of two different firearms|A second fingerprint on his badge|A missing notebook page|A false autopsy signature|Hard|Different Guns|Forensics|Dave Shelby|Conclusions|Police Cover Up|Ballistics|1992
Which officer is ultimately exposed as responsible for Shelby's death?|DC Webster|DS Gilmore|PC Trigg|DC Barnard|Hard|DC Webster|Dave Shelby|Police Murder|Conclusions|Corrupt Colleague|1992|Case Resolution`;

const secondSeries = `Which episode opens the second series?|A Minority of One|Widows and Orphans|Nothing to Hide|Stranger in the House|Medium|A Minority Of One|Series Two Premiere|1994|Episode Title|Broadcast Sequence|Denton|ITV
What type of crime initially occupies Frost in the second-series opening episode?|Commercial burglaries|Art fraud|Car thefts|Railway vandalism|Medium|Commercial Burglaries|A Minority Of One|Series Two|1994|Eastdean Estate|Police Operation|Property Crime
Which detective joins Frost in the opening episode of series two?|Carl Tanner|Clive Barnard|Frank Costello|Sandy Gilmore|Easy|Carl Tanner|New Detective|A Minority Of One|Series Two|Denton CID|Police Partner|1994
Who played Detective Constable Carl Tanner?|Lennie James|Matt Bardock|Neil Dudgeon|John Lyons|Medium|Lennie James|Carl Tanner|Guest Actor|Series Two|A Minority Of One|Detective Constable|1994
Which Denton housing estate is central to the opening case of the second series?|Eastdean Estate|Millbank Estate|Riverside Estate|Waverley Estate|Medium|Eastdean Estate|A Minority Of One|Denton Neighbourhood|Commercial Burglaries|Series Two|1994|Local Setting
Which police informant is murdered after helping Frost in the opening 1994 story?|Natalie Bell|Alex Compton|Linda Uphill|Anne Butler|Medium|Natalie Bell|Police Informant|A Minority Of One|Arson|Eastdean Estate|Series Two|1994
What is used to destroy the murdered informant's apartment?|Fire|Floodwater|A vehicle crash|A gas explosion|Medium|Natalie Bell|Apartment Fire|A Minority Of One|Evidence Destruction|Series Two|1994|Murder Coverup
Who is revealed to have killed informant Natalie Bell?|Ritchie Gibbs|Paul Aspinall|Ronald Gould|Frank Costello|Hard|Ritchie Gibbs|Natalie Bell|A Minority Of One|Son Father|Murder Investigation|Series Two|1994
Which episode centres on attacks on elderly women in their own homes?|Widows and Orphans|Conclusions|Dead Male One|Quarry|Easy|Widows And Orphans|Elderly Victims|Series Two|1994|Home Attacks|Episode Title|Crime Investigation
Which female detective first works with Frost in the case involving elderly victims?|Maureen Lawson|Liz Maud|Hazel Wallace|Jane Brent|Easy|Maureen Lawson|New Partner|Widows And Orphans|Detective Sergeant|Series Two|1994|Elderly Victims
Who played Detective Sergeant Maureen Lawson?|Sally Dexter|Caroline Harker|Lindy Whiteford|Isla Blair|Medium|Sally Dexter|Maureen Lawson|Actor Casting|Series Two|1994|Police Partner|Widows And Orphans
What kind of transport does suspect Ronald Gould drive for elderly bingo-goers?|A bus|A taxi|A minibus for school pupils|An ambulance|Medium|Ronald Gould|Bingo Bus|Widows And Orphans|Elderly Passengers|Victim Contact|1994|Occupation
Who is the violent suspect behind the murders of elderly women?|Ronald Gould|Bernard Elliott|Paul Aspinall|Carl Tanner|Medium|Ronald Gould|Serial Killer|Widows And Orphans|Elderly Victims|Bingo Transport|1994|Case Solution
Which character begins a developing romance with Frost during the early 1994 cases?|Shirley Fisher|Maureen Lawson|Hazel Wallace|Alex Compton|Easy|Shirley Fisher|Jack Frost|Early Romance|Widows And Orphans|Nurse|Personal Storyline|1994
What is the title of the episode investigating the death of a homeless drug user?|Nothing to Hide|A Minority of One|Appropriate Adults|No Refuge|Medium|Nothing To Hide|Ben Cornish|Series Two|1994|Episode Title|Homeless Victim|Murder Case
Which young drug user is found dead in a public lavatory?|Ben Cornish|Dave Shelby|Nick Walder|Adie Carr|Medium|Ben Cornish|Drug Dependency|Nothing To Hide|Public Toilets|Series Two|1994|Victim
Who plays Frost's demoted detective partner Frank Costello?|Neil Dudgeon|Lennie James|Matt Bardock|Tony Haygarth|Medium|Neil Dudgeon|Frank Costello|Detective Constable|Actor Casting|Nothing To Hide|1994|Police Partner
Why had Frank Costello been demoted before working with Frost?|He punched a superior officer|He lost police evidence|He failed his driving test|He leaked a report to the press|Medium|Frank Costello|Demotion|Assault On Superior|Nothing To Hide|Police Career|Series Two|1994
Which medical finding indicates that the young victim was assaulted before dying?|Severe beating injuries|A stab wound|A broken neck from a fall|Evidence of drowning|Medium|Ben Cornish|Autopsy|Beating|Nothing To Hide|Forensic Pathology|Series Two|1994
What is the relationship between Anne Butler and the murdered young man?|She is his sister|She is his mother|She is his wife|She is his cousin|Medium|Anne Butler|Ben Cornish|Siblings|Nothing To Hide|Family Tension|Series Two|1994
Who confesses to killing Ben Cornish after confronting him?|Ray Butler|Frank Costello|Dr Patten|Gerald Powell|Hard|Ray Butler|Ben Cornish|Nothing To Hide|Anne Butler|Murder Confession|1994|Case Solution
Which episode features a police trap targeting an offender who attacks women at home?|Stranger in the House|Nothing to Hide|Care and Protection|No Refuge|Medium|Stranger In The House|Serial Rapist|Series Two|Police Trap|1994|Episode Title|Denton
Which officer acts as a decoy in the search for a serial attacker?|Hazel Wallace|Maureen Lawson|Jane Brent|Sandy Gilmore|Easy|Hazel Wallace|Undercover Decoy|Stranger In The House|Policewoman|Series Two|1994|Dangerous Operation
What shared feature of the victims' jobs helps Frost profile the serial attacker?|They wear uniforms|They all work nights|They are teachers|They travel overseas|Medium|Uniformed Victims|Stranger In The House|Victim Pattern|Serial Offender|1994|Case Clue|Police Profiling
Which security guard is exposed as the serial attacker in the final episode of series two?|Nick Daish|Gordon Perryman|Frank Costello|Ronnie Eustace|Hard|Nick Daish|Security Guard|Stranger In The House|Serial Rapist|1994|Case Solution|Staunton Towers
What criminal activity is committed by Nick Daish's fellow security guard Gordon Perryman?|Burglary|Drug dealing|Car smuggling|Blackmail|Hard|Gordon Perryman|Security Guard|Burglary|Stranger In The House|1994|Staunton Towers|Separate Offence
Which medal holders' gathering does Frost miss because of the investigation?|Victoria and George Cross recipients|Olympic gold medallists|Military Cross recipients only|Police long-service medallists|Medium|George Cross|Victoria Cross|Awards Reunion|Stranger In The House|Shirley Fisher|1994|Missed Appointment`;

const thirdSeries = `What is the title of the opening episode of series three?|Appropriate Adults|Dead Male One|Quarry|No Refuge|Medium|Appropriate Adults|Series Three Premiere|1995|Episode Title|Broadcast Order|Tricia Martin|Denton
Which missing eight-year-old girl is central to the opening 1995 story?|Tricia Martin|Tracy Uphill|Paula Bartlett|Alison Cook|Easy|Tricia Martin|Missing Child|Appropriate Adults|Series Three|1995|Frost Investigation|Victim
Which young man becomes the main suspect in Tricia Martin's death?|Billy Conrad|Nick Walder|Tony Walder|Ray Butler|Medium|Billy Conrad|Tricia Martin|Appropriate Adults|Wrongful Suspicion|Series Three|1995|Police Interview
What condition does Billy Conrad have in Appropriate Adults?|Down syndrome|Cerebral palsy|Epilepsy|Multiple sclerosis|Medium|Billy Conrad|Down Syndrome|Appropriate Adults|Learning Disability|1995|Vulnerable Suspect|Investigation
What is the first name of Billy Conrad's girlfriend?|Jane|Shirley|Natalie|Tricia|Medium|Jane|Billy Conrad|Care Home|Appropriate Adults|Relationship|Series Three|1995
Which police superior aggressively questions Billy despite Frost's doubts?|DCI Charlie Hawkes|Superintendent Mullett|DS George Toolan|DC Carl Tanner|Medium|Charlie Hawkes|Billy Conrad|Appropriate Adults|Coercive Interview|Series Three|1995|Police Conflict
Which actor played DCI Charlie Hawkes?|Matthew Marsh|Bruce Alexander|Neil Dudgeon|David Gooderson|Medium|Matthew Marsh|Charlie Hawkes|DCI|Actor Casting|Appropriate Adults|1995|Denton Police
Who is ultimately responsible for Tricia Martin's fatal injuries?|Her father Richard Martin|Billy Conrad|Her teacher|A stranger in the woods|Medium|Richard Martin|Tricia Martin|Appropriate Adults|Family Abuse|1995|Case Resolution|Father Daughter
What unusual deception involving a police station is uncovered in the same episode?|A man pretends to be a police officer|An officer forges court warrants|Someone steals the station radio|A detective invents a missing colleague|Medium|Parker|Police Impersonator|Appropriate Adults|Security Breach|1995|Charlie Hawkes|Pool Team
Which episode investigates killings linked to opposition to a fox hunt?|Quarry|No Refuge|Conclusions|Widows and Orphans|Easy|Quarry|Fox Hunt|Animal Rights Activists|Series Three|1995|Episode Title|Country Estate
Which protest movement is central to the countryside murders in Quarry?|Anti-fox-hunting activists|Anti-nuclear demonstrators|Road-building protesters|Animal shelter volunteers|Medium|Anti Hunt Protest|Quarry|Animal Rights|Countryside|1995|Saboteurs|Campaign Group
Which victim dies after being attacked while helping disrupt a fox hunt?|Nick Walder|Tom Cody|Stephen Milmore|Tony Walder|Medium|Nick Walder|Quarry|Fox Hunt Sabotage|First Victim|1995|Mistaken Identity|Murder
Whose distinctive blue hat leads Frost to recognise a case of mistaken identity?|Tom Cody's|Nick Walder's|Clive Barnard's|Stephen Milmore's|Hard|Tom Cody|Blue Hat|Quarry|Mistaken Identity|1995|Victim Confusion|Detective Clue
Who is revealed to have killed his brother Nick in an attempt to eliminate someone else?|Tony Walder|Stephen Milmore|Tom Cody|Ritchie Gibbs|Hard|Tony Walder|Nick Walder|Quarry|Brother Relationship|Mistaken Target|1995|Killer Confession
What stolen goods are uncovered during the countryside murder investigation?|Antiques and art|Luxury cars|Industrial computers|Rare postage stamps|Medium|Stolen Antiques|Art Theft|Quarry|Tom Cody|Property Crime|1995|Investigation Clue
Which wealthy huntress is involved in the criminal scheme uncovered by Frost?|Ruth Ormrod|Shirley Fisher|Alex Compton|Maureen Lawson|Hard|Ruth Ormrod|Quarry|Huntress|Antiques Ring|1995|Wealthy Suspect|Crime Plot
Which art dealer is killed after agreeing to speak to Clive Barnard?|Stephen Milmore|Gerald Powell|Mike Ross|Ronald Gould|Medium|Stephen Milmore|Clive Barnard|Quarry|Van Collision|Art Dealer|1995|Witness Murder
Which episode includes a local footballer's collapse and an unidentified body from a river?|Dead Male One|Appropriate Adults|Nothing to Hide|No Refuge|Medium|Dead Male One|Football Scandal|Unidentified Body|Series Three|1995|Episode Title|Two Cases
What is the name of the football star who collapses after a match?|Adie Carr|Paul Gower|Jamie Todd|Mike Ross|Medium|Adie Carr|Denton Football Club|Dead Male One|Drugging|1995|Player|Collapse
Where does the footballer collapse after the match?|At a press conference|In the changing room|On the team coach|At home during dinner|Medium|Adie Carr|Press Conference|Dead Male One|Football Club|1995|Medical Emergency|Public Collapse
What substance is discovered in the footballer's system?|A performance-enhancing drug|A powerful sedative|A recreational hallucinogen|A lethal insecticide|Medium|Adie Carr|Performance Enhancing Drug|Mesanbuterol|Dead Male One|1995|Toxicology|Footballer
Which club official admits putting a substance into Adie Carr's drink?|Mike Ross|Paul Gower|Jamie Todd|Colin Drysdale|Hard|Mike Ross|Club Owner|Adie Carr|Dead Male One|1995|Drink Tampering|Case Resolution
What valuable offer had the footballer refused before his collapse?|A transfer to another club|A television presenting contract|A coaching role abroad|An advertising deal for boots|Medium|Adie Carr|Transfer Offer|Dead Male One|Mike Ross|1995|Club Finances|Career Decision
What form of household work had the footballers used to defraud an elderly man?|Unsafe building repairs|Garden landscaping|Window cleaning|Painting portraits|Medium|Adie Carr|Paul Gower|Jamie Todd|Building Work Scam|Dead Male One|1995|Elderly Victim
What does the mysterious dead man found in a river possess that does not identify him correctly?|Another man's driving licence|A stolen police badge|A forged passport|A railway season ticket|Medium|River Body|Driving Licence|Colin Drysdale|Dead Male One|Misidentification|1995|Cold Case
In which later storyline is the mysterious river-body case revisited?|Appendix Man|Line of Fire|Paying the Price|Quarry|Hard|Appendix Man|Dead Male One|River Body|Unresolved Case|Series Six|1999|Long Running Storyline
What type of business is robbed in the series-three finale?|A glassworks|An insurance office|A hotel|A printing press|Easy|Glassworks Robbery|No Refuge|Series Three Finale|1995|Armed Gang|Denton Business|Crime Scene
How much cash is stolen in the armed glassworks robbery?|Fifteen thousand pounds|Five thousand pounds|Thirty thousand pounds|One hundred thousand pounds|Hard|15000 Pounds|Glassworks|No Refuge|Armed Robbery|1995|Stolen Cash|Series Three
Who owns the business targeted by the gang?|Bill Boxley|Mike Ross|Tom Cody|Ronald Garwood|Medium|Bill Boxley|Glassworks Owner|No Refuge|Threatened Witness|1995|Businessman|Family Conflict
Which actor played glassworks owner Bill Boxley?|Billy Murray|David Jason|Neil Dudgeon|Lennie James|Hard|Billy Murray|Bill Boxley|No Refuge|Guest Actor|Glassworks|1995|Actor Casting
Which robber is identified as a participant by the glassworks owner?|Stuart Penrice|Tony Walder|Ronnie Eustace|Gordon Perryman|Medium|Stuart Penrice|Bill Boxley|No Refuge|Armed Robber|1995|Witness Identification|Police Arrest
Which relative is responsible for threatening the glassworks owner after the robbery?|His son Kevin|His brother Michael|His wife|His nephew|Medium|Kevin Boxley|Bill Boxley|Father Son Conflict|No Refuge|Threats|1995|Family Betrayal
Which detective returns to assist Frost during the glassworks investigation?|Maureen Lawson|Sandy Gilmore|Carl Tanner|Frank Costello|Medium|Maureen Lawson|No Refuge|Returning Partner|1995|Glassworks Case|Denton CID|DS Lawson
To which county is Maureen Lawson transferred after the events of the series-three finale?|Cornwall|Kent|Devon|Norfolk|Hard|Maureen Lawson|Cornwall Transfer|No Refuge|Mullett Decision|1995|Police Posting|Career Consequence
Which personal event does Frost fail to attend during the same finale?|Shirley's mother's funeral|His brother's wedding|His partner's retirement|A police awards dinner|Medium|Shirley Fisher|Mother Funeral|No Refuge|1995|Frost Relationship|Missed Commitment|Personal Storyline
What happens to Frost's relationship with Shirley Fisher at the end of the third series?|They separate|They get married|They move to London together|They adopt a child|Medium|Shirley Fisher|Jack Frost|Relationship Breakup|No Refuge|1995 Finale|Commitment Issues|Personal Life`;

const questions = [];
function addFacts(block, coverage) {
  const rows = block.trim().split('\n');
  for (const [index, line] of rows.entries()) {
    const fields = line.split('|').map(value => value.trim());
    if (fields.length !== 13 || fields.some(value => !value)) {
      throw new Error(`${coverage}: row ${index + 1} contains ${fields.length} fields, expected 13`);
    }
    const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...detailTags] = fields;
    const question = stem.toLowerCase().includes(programme.toLowerCase())
      ? stem : `In ${programme}, ${stem[0].toLowerCase()}${stem.slice(1)}`;
    const answers = [wrong1, wrong2, wrong3];
    answers.splice(questions.length % 4, 0, correctAnswer);
    const tags = [...new Map([
      'Television', 'Crime Drama', 'Police Procedural', programme, era,
      coverage, correctAnswer, ...detailTags
    ].map(tag => [tag.toLowerCase().replace(/[^a-z0-9]/g, ''), tag])).values()];
    const item = {
      id: `tv_${FIRST_ID + questions.length}`,
      category: 'Television',
      question,
      answers,
      correctAnswer,
      difficulty,
      tags,
      dailyEligible: true
    };
    if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4 ||
        !answers.includes(correctAnswer) ||
        !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
        tags.length < 10) {
      throw new Error(`Invalid metadata for ${item.id}`);
    }
    questions.push(item);
  }
}
addFacts(coreFacts, 'Character and production history');
addFacts(firstSeries, 'Series 1 1992');
addFacts(secondSeries, 'Series 2 1994');
addFacts(thirdSeries, 'Series 3 1995');
const seenQuestions = new Set();
for (const q of questions) {
  const stem = q.question.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (seenQuestions.has(stem)) throw new Error(`Duplicate question: ${q.id}`);
  seenQuestions.add(stem);
}
module.exports = questions;
