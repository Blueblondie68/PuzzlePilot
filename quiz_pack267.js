
// quiz_pack267.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Hollyoaks - 1999 to 2001
// 54 questions: tv_10445 to tv_10498
// Early Hollyoaks: major characters, landmark stories, cast and spin-offs.
// Fully tagged question by question; no filler questions.
// Keep quiz_bank.js unchanged until the end of the evening.
//
// Each line contains:
// question | correct answer | three wrong answers | difficulty | six question-specific tags.
// Question-specific tags belong to that question ONLY, not an entire group.

const groups = [
  {
    year: '1999',
    topic: 'The Morgan Family And New Arrivals',
    facts: `Which family arrived in Hollyoaks in 1999 with children including Luke, Adam and Beth?|The Morgans|The Hunters|The Ashworths|The Deans|Easy|Morgan Family|Luke Morgan|Adam Morgan|Beth Morgan|Andy Morgan|Sue Morgan
Which actor first played Luke Morgan when he joined Hollyoaks in 1999?|Gary Lucy|Ben Hull|James Redmond|Paul Danan|Easy|Gary Lucy|Luke Morgan|Morgan Family|Actor Casting|1999 Arrival|Original Performer
Which actor played the Morgan family's father, Andy?|Ross Davidson|John Graham Davies|Jimmy McKenna|Bernard Latham|Medium|Ross Davidson|Andy Morgan|Morgan Father|Sue Morgan|Family Arrival|Actor Casting
Who played Sue Morgan, the mother of Luke, Adam and Beth?|Eve White|Lynda Rooke|Julie Peasgood|Katherine Dow Blyton|Medium|Eve White|Sue Morgan|Morgan Mother|Luke Morgan|Adam Morgan|Beth Morgan
Which Morgan daughter became romantically involved with Rob Hawthorne in 1999?|Beth Morgan|Zara Morgan|Geri Hudson|Lucy Benson|Medium|Beth Morgan|Rob Hawthorne|Morgan Family|Villain Romance|1999 Relationship|Andy Morgan
Which Hollyoaks character was reported dead after an accident abroad in 1999, only to return years later?|Kurt Benson|Tony Hutchinson|Max Cunningham|Lewis Richardson|Easy|Kurt Benson|Presumed Death|Accident Abroad|Benson Family|1999 Disappearance|Later Return
Which actor began playing Geri Hudson when she arrived in Hollyoaks in 1999?|Joanna Taylor|Terri Dwyer|Kerrie Taylor|Gemma Atkinson|Medium|Joanna Taylor|Geri Hudson|Hudson Family|1999 Introduction|Actress Casting|Student Character
From September 1999, how many regular Hollyoaks episodes were normally broadcast each week?|Three|Two|Four|Five|Medium|Three Episodes Weekly|Broadcast Schedule|1999 Expansion|Channel 4|Television History|Regular Series`,
  },
  {
    year: '1999',
    topic: 'Rob Hawthorne And The Water Tank',
    facts: `Which villain returned in 1999 after being presumed drowned during a confrontation with Kurt Benson?|Rob Hawthorne|Dennis Richardson|Michael St. John Thomas|Spike|Easy|Rob Hawthorne|Kurt Benson|Return From Presumed Death|1998 Boat Fight|1999 Revenge|Early Villain
Whom did Rob Hawthorne kidnap to lure her friends into his 1999 water-tank trap?|Lucy Benson|Ruth Osborne|Mandy Richardson|Cindy Cunningham|Easy|Lucy Benson|Rob Hawthorne|Kidnapping|Water Tank|Benson Family|Revenge Plot
What was the title of the four-part 1999 Hollyoaks special about Rob Hawthorne's water-tank plot?|Hollyoaks: Lost Weekend|Hollyoaks: Breaking Boundaries|Hollyoaks: Boys Do Barca|Hollyoaks: Indecent Behaviour|Medium|Lost Weekend|Rob Hawthorne|Lucy Benson|Water Tank Special|Four Part Event|September 1999
Where did Rob Hawthorne trap Lucy Benson and three would-be rescuers in September 1999?|In a water tank|In a disused mine|In a locked lift|In a burning warehouse|Easy|Rob Hawthorne|Lucy Benson|Ruth Osborne|Lewis Richardson|Tony Hutchinson|Water Tank
Which character found the escape hatch that saved Rob Hawthorne's four water-tank captives?|Tony Hutchinson|Lewis Richardson|Ruth Osborne|Lucy Benson|Easy|Tony Hutchinson|Lucy Benson|Ruth Osborne|Lewis Richardson|Escape Hatch|Rescue
Into which river did the captives escape from Rob Hawthorne's water-tank trap?|The River Dee|The River Mersey|The River Thames|The River Severn|Medium|River Dee|Rob Hawthorne|Tony Hutchinson|Lucy Benson|Water Tank Escape|Chester
Which Robbie Williams song played during the aftermath of the 1999 water-tank rescue?|Angels|Let Me Entertain You|Rock DJ|She's the One|Medium|Robbie Williams|Angels|Water Tank Rescue|Tony Hutchinson|Lucy Benson|Soundtrack
How did villain Rob Hawthorne finally die at the end of 1999?|In a bus explosion|In a boating accident|After falling from a roof|In a house fire|Easy|Rob Hawthorne|Bus Explosion|Millennium Eve|Villain Death|1999 Finale|Revenge Story`,
  },
  {
    year: '2000',
    topic: 'Luke Morgan And Breaking Boundaries',
    facts: `Which Hollyoaks character was the victim of a landmark male rape storyline in 2000?|Luke Morgan|Tony Hutchinson|Max Cunningham|Sol Patrick|Easy|Luke Morgan|Male Rape Storyline|Sexual Assault|Morgan Family|Issue Based Drama|2000 Landmark
Who raped Luke Morgan in the 2000 Hollyoaks storyline?|Mark Gibbs|Rob Hawthorne|Scott Anderson|Dennis Richardson|Easy|Mark Gibbs|Luke Morgan|Sexual Assault|Football Rivalry|2000 Attack|Criminal Case
What was the title of the 2000 late-night Hollyoaks special featuring Luke Morgan's assault?|Hollyoaks: Breaking Boundaries|Hollyoaks: Lost Weekend|Hollyoaks: Off on One|Hollyoaks: Boys Do Barca|Medium|Breaking Boundaries|Luke Morgan|Mark Gibbs|Late Night Special|March 2000|Issue Based Drama
Which award did Gary Lucy win at the 2000 British Soap Awards for his portrayal of Luke Morgan?|Best Newcomer|Best Actor|Sexiest Male|Best Dramatic Performance|Easy|Gary Lucy|Luke Morgan|British Soap Awards|Best Newcomer|2000 Award|Actor Recognition
How many years in prison was Mark Gibbs sentenced to for raping Luke Morgan?|Eight years|Three years|Five years|Twelve years|Medium|Mark Gibbs|Luke Morgan|Eight Year Sentence|Rape Trial|Court Verdict|2000 Justice
Which family member did Luke Morgan first confide in about his assault?|Adam Morgan|Andy Morgan|Sue Morgan|Beth Morgan|Medium|Luke Morgan|Adam Morgan|Brother Relationship|Disclosure|Morgan Family|Family Support
Which football-related injury had fuelled the rivalry between Luke Morgan and Mark Gibbs?|Mark's broken leg|Luke's broken ankle|Mark's dislocated shoulder|Luke's knee injury|Medium|Luke Morgan|Mark Gibbs|Broken Leg|Football Rivalry|Assault Backstory|Sports Storyline
What addiction did Ruth Osborne discover Lewis Richardson had in the 2000 late-night special?|Gambling|Alcohol|Prescription drugs|Online shopping|Medium|Ruth Osborne|Lewis Richardson|Gambling Addiction|Breaking Boundaries|Relationship Crisis|2000 Drama`,
  },
  {
    year: '2000',
    topic: 'Deaths, Departures And Crossovers',
    facts: `Which member of the Osborne family died from a brain tumour in 2000?|Jill Osborne|Ruth Osborne|Celia Osborne|Jacqui Hudson|Medium|Jill Osborne|Brain Tumour|Jack Osborne|Patrick Family|2000 Death|Terminal Illness
Which character took her young daughter Holly and fled because she feared social services would separate them?|Cindy Cunningham|Mandy Richardson|Lucy Benson|Geri Hudson|Easy|Cindy Cunningham|Holly Cunningham|Social Services|Mother Daughter|2000 Departure|Custody Fears
Which Hollyoaks character found himself homeless before forming a relationship with Jess Holt?|Sol Patrick|Tony Hutchinson|Luke Morgan|Max Cunningham|Medium|Sol Patrick|Jess Holt|Homelessness|New Relationship|Patrick Family|2000 Storyline
What difficult situation was Jess Holt trying to escape when she met Sol Patrick in 2000?|Control by her pimp|An arranged marriage|A family inheritance dispute|A wrongful arrest|Medium|Jess Holt|Sol Patrick|Steve Holt|Sex Work|Coercion|2000 Arrival
Which character crossed over from Brookside into Hollyoaks in 2000?|Matt Musgrove|Mick Johnson|Barry Grant|Jimmy Corkhill|Easy|Matt Musgrove|Brookside|Hollyoaks Crossover|Mersey Television|2000 Debut|Soap History
Which actor continued playing Matt Musgrove when the character moved from Brookside to Hollyoaks?|Kristian Ealey|Gary Lucy|Alex Carter|James Redmond|Medium|Kristian Ealey|Matt Musgrove|Brookside|Actor Casting|Television Crossover|2000 Arrival
To which Spanish city did the Hollyoaks lads travel for Finn's stag celebrations in the 2000 special Boys Do Barca?|Barcelona|Madrid|Seville|Valencia|Easy|Boys Do Barca|Barcelona|Rory Finnigan|Stag Party|2000 Special|Spain
Whose stag party was the reason for the 2000 Hollyoaks trip to Barcelona?|Rory Finnigan's|Tony Hutchinson's|Luke Morgan's|Max Cunningham's|Medium|Rory Finnigan|Finn|Boys Do Barca|Barcelona|Wedding Plans|Stag Party
Which woman was Rory Finnigan planning to marry in 2000, upsetting Tony Hutchinson?|Victoria Hutchinson|Ruth Osborne|Mandy Richardson|Jill Osborne|Medium|Rory Finnigan|Victoria Hutchinson|Tony Hutchinson|Mother Son|Wedding Plans|Boys Do Barca`,
  },
  {
    year: '2001',
    topic: 'The Dog Fire And The Hunter Family',
    facts: `Who set fire to The Dog in the Pond at the beginning of 2001?|Steve Holt|Rob Hawthorne|Dennis Richardson|Scott Anderson|Medium|Steve Holt|The Dog in the Pond|Arson|Jess Holt|Sol Patrick|New Year Explosion
Which character was trapped inside The Dog in the Pond during the 2001 blaze?|Sol Patrick|Tony Hutchinson|Jack Osborne|Max Cunningham|Medium|Sol Patrick|The Dog in the Pond|Steve Holt|Pub Fire|2001 Explosion|Rescue
Who rescued Sol Patrick from The Dog in the Pond after the New Year explosion?|Ben Davies|Luke Morgan|Tony Hutchinson|Lewis Richardson|Medium|Ben Davies|Sol Patrick|The Dog in the Pond|Fire Rescue|Steve Holt|2001 Explosion
Which couple fled Hollyoaks together after their violent confrontation with Steve Holt in 2001?|Sol Patrick and Jess Holt|Tony Hutchinson and Mandy Richardson|Luke Morgan and Ruth Osborne|Max Cunningham and Cindy Cunningham|Medium|Sol Patrick|Jess Holt|Steve Holt|The Loft|On The Run|2001 Exit
Which family joined Hollyoaks in 2001, introducing characters including Dan, Lisa and Lee?|The Hunters|The Ashworths|The McQueens|The Deans|Easy|Hunter Family|Dan Hunter|Lisa Hunter|Lee Hunter|Les Hunter|Sally Hunter
Which actress first played Lisa Hunter when the character joined in 2001?|Gemma Atkinson|Ali Bastian|Sarah Jayne Dunn|Kerrie Taylor|Easy|Gemma Atkinson|Lisa Hunter|Hunter Family|Actress Casting|2001 Debut|Teen Character
Who played Lee Hunter when he joined Hollyoaks in 2001?|Alex Carter|Andrew McNair|James Redmond|Matt Littler|Easy|Alex Carter|Lee Hunter|Hunter Family|Actor Casting|2001 Arrival|Younger Son
Which actor portrayed Dan Hunter when the Hunter family arrived?|Andrew McNair|Alex Carter|Darren Jeffries|Gary Lucy|Medium|Andrew McNair|Dan Hunter|Hunter Family|Actor Casting|2001 Debut|Older Brother
Who played Hunter family father Les Hunter?|John Graham Davies|Jimmy McKenna|Ross Davidson|Bernard Latham|Medium|John Graham Davies|Les Hunter|Hunter Family|Actor Casting|Father Of Lee|2001 Debut
Which actress played Sally Hunter, mother of Lisa, Lee and Dan?|Katherine Dow Blyton|Lynda Rooke|Eve White|Terri Dwyer|Medium|Katherine Dow Blyton|Sally Hunter|Hunter Family|Actress Casting|Mother Of Lisa|2001 Debut
Which young Hunter family member became central to a bullying and self-harm storyline?|Lisa Hunter|Ellie Hunter|Lee Hunter|Dan Hunter|Easy|Lisa Hunter|Gemma Atkinson|Bullying|Self Harm|School Storyline|Hunter Family`,
  },
  {
    year: '2001',
    topic: 'New Students And The Final Months',
    facts: `Which actress joined Hollyoaks as Becca Hayton in 2001?|Ali Bastian|Carley Stenson|Gemma Atkinson|Joanna Taylor|Easy|Ali Bastian|Becca Hayton|Student Arrival|Actor Casting|2001 Debut|Future Teacher
What was the title of the 2001 Hollyoaks spin-off following characters including Ruth, Lewis, Tony and Finn?|Hollyoaks: Movin' On|Hollyoaks: Lost Weekend|Hollyoaks Later|Hollyoaks: In the City|Medium|Movin On|Ruth Osborne|Lewis Richardson|Tony Hutchinson|Rory Finnigan|2001 Spin Off
Which character violently assaulted his former partner Ruth Osborne before his own death in 2001?|Lewis Richardson|Jack Osborne|Tony Hutchinson|Mark Gibbs|Medium|Lewis Richardson|Ruth Osborne|Domestic Abuse|Relationship Breakdown|Movin On|2001 Storyline
How did Lewis Richardson die in 2001?|After an intentional paracetamol overdose|After being trapped in a fire|After a motorbike accident|After a stabbing|Medium|Lewis Richardson|Paracetamol Overdose|Liver Failure|Suicide Storyline|Movin On|2001 Death
Which city did Ruth Osborne move to when she left Hollyoaks for a journalism career in 2001?|London|Edinburgh|Manchester|Bristol|Medium|Ruth Osborne|London|Journalism|Career Change|Lewis Richardson|2001 Departure
What was the title of the 2001 Hollyoaks video special involving Beth Morgan and Scott Anderson?|Hollyoaks: Indecent Behaviour|Hollyoaks: Off on One|Hollyoaks: Boys Do Barca|Hollyoaks: Breaking Boundaries|Medium|Indecent Behaviour|Beth Morgan|Scott Anderson|Video Special|2001 Release|Sexual Assault Storyline
Which Morgan family member was sexually assaulted by Scott Anderson in the 2001 video special?|Beth Morgan|Zara Morgan|Sue Morgan|Geri Hudson|Medium|Beth Morgan|Scott Anderson|Morgan Family|Indecent Behaviour|2001 Assault|Video Spin Off
Which country did Luke Morgan move to when he left Hollyoaks in December 2001?|Canada|Australia|France|Spain|Easy|Luke Morgan|Gary Lucy|Canada|2001 Departure|Morgan Family|Relocation
From late 2001, how many episodes of Hollyoaks were normally broadcast each week?|Four|Three|Five|Six|Medium|Four Episodes Weekly|2001 Schedule|Channel 4|Broadcast Expansion|British Television History|Episode Frequency
Which character, often called Bombhead, arrived in Hollyoaks as Lee Hunter's friend in 2001?|David Burke|Sam O'Brien|Rory Finnigan|Nick O'Connor|Medium|David Burke|Bombhead|Lee Hunter|Friendship|2001 Arrival|Nickname Character`,
  },
];

// Allocate IDs in the original source order. No reshuffling of question IDs.
const FIRST_ID = 10445;
let index = 0;
const questions = groups.flatMap(group => group.facts.trim().split('\n').map(line => {
  const parts = line.split('|');
  if (parts.length !== 12) throw new Error(`Expected six individual tags at question ${index + 1}`);
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  const id = 'tv_' + String(FIRST_ID + index).padStart(4, '0');
  const answers = [wrong1, wrong2, wrong3];

  if (new Set([correctAnswer, ...answers].map(x => x.toLowerCase())).size !== 4) {
    throw new Error(`Repeated answer choice at ${id}`);
  }
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Invalid difficulty at ${id}`);
  }
  if (specificTags.some(tag => !tag.trim())) throw new Error(`Blank tag at ${id}`);

  answers.splice(index % 4, 0, correctAnswer);

  const item = {
    id,
    category: 'Television',
    question,
    answers,
    correctAnswer,
    difficulty,
    tags: [...new Set([
      'British Television', 'Soaps', 'Hollyoaks', 'Channel 4',
      group.year === '1999' ? '1990s' : '2000s',
      group.year, correctAnswer, ...specificTags
    ])],
    dailyEligible: true
  };

  index += 1;
  return item;
}));

if (questions.length !== 54) throw new Error(`Expected 54 questions; got ${questions.length}`);
if (new Set(questions.map(q => q.id)).size !== questions.length) throw new Error('Duplicate IDs');
if (new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) throw new Error('Duplicate questions');
if (questions.some(q => q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
    q.tags.length < 11 || q.tags.some(t => !t) || q.dailyEligible !== true)) {
  throw new Error('Invalid exported question object');
}
module.exports = questions;
