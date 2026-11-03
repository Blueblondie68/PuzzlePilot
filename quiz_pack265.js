
// quiz_pack265.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Hollyoaks - 1995 to 1996
// 43 questions: tv_10364 to tv_10406
// Early-years coverage: recognisable people, major stories and programme history.
// All exported questions have comprehensive, question-specific tags.
// Leave quiz_bank.js unchanged until the new packs are ready to be connected.

// Each line: question | correct answer | three wrong answers | difficulty | three specific tags.
// A pack can be shorter than 100 questions. Never pad with obscure trivia.
const groups = [
  {
    year: "1995",
    topic: "Launch And First Episode",
    facts: `On which date was the first episode of Hollyoaks broadcast?|23 October 1995|23 September 1995|6 November 1995|23 October 1996|Easy|First Episode|Series Premiere|Launch Date
Which television channel launched Hollyoaks in 1995?|Channel 4|ITV|BBC One|Sky One|Easy|Original Broadcaster|Channel Four|British Soap History
Who created Hollyoaks?|Phil Redmond|Tony Jordan|Jimmy McGovern|Russell T Davies|Easy|Phil Redmond|Show Creator|Original Production
In which English city is Hollyoaks set?|Chester|Manchester|York|Liverpool|Easy|Chester Setting|Fictional Village|North West England
How many teenage lead characters were at the centre of Hollyoaks when it launched?|Seven|Five|Six|Nine|Medium|Original Seven|Teen Soap|Main Characters
How often did Hollyoaks originally air when it began in 1995?|Once a week|Twice a week|Three times a week|Five times a week|Medium|Original Schedule|Weekly Episodes|Broadcast History
Whose car exploded in the opening episode of Hollyoaks?|Kurt Benson's|Tony Hutchinson's|Jambo Bolton's|Lewis Richardson's|Easy|Kurt Benson|Car Explosion|First Episode
Who took Kurt Benson's car without permission in the first episode?|Ollie Benson|Jambo Bolton|Tony Hutchinson|Bazz McCourtey|Medium|Ollie Benson|Joyride|Benson Brothers`,
  },
  {
    year: "1995",
    topic: "Original Characters And Cast",
    facts: `Which actor has played original Hollyoaks character Tony Hutchinson since the show's debut?|Nick Pickard|Jeremy Edwards|Will Mellor|Ben Hull|Easy|Nick Pickard|Tony Hutchinson|Original Actor
Who played original character Kurt Benson?|Jeremy Edwards|Nick Pickard|Paul Leyshon|Will Mellor|Easy|Jeremy Edwards|Kurt Benson|Original Actor
Which actor played Jambo Bolton?|Will Mellor|Ben Hull|Jeremy Edwards|Paul Leyshon|Easy|Will Mellor|Jambo Bolton|Original Actor
Who played Natasha Andersen during the show's early months?|Shebah Ronay|Lisa Williamson|Yasmin Bannerman|Terri Dwyer|Medium|Shebah Ronay|Natasha Andersen|Original Actress
Which actress played original character Dawn Cunningham?|Lisa Williamson|Kerrie Taylor|Shebah Ronay|Yasmin Bannerman|Medium|Lisa Williamson|Dawn Cunningham|Original Actress
Who played original character Maddie Parker?|Yasmin Bannerman|Lisa Williamson|Shebah Ronay|Sarah Jayne Dunn|Medium|Yasmin Bannerman|Maddie Parker|Original Actress
Which Hollyoaks character spoke the show's first line of dialogue?|Tony Hutchinson|Kurt Benson|Jambo Bolton|Natasha Andersen|Medium|Tony Hutchinson|First Dialogue|Opening Episode
Which original character became known for climbing through Kurt Benson's bedroom window?|Jambo Bolton|Tony Hutchinson|Lewis Richardson|Ollie Benson|Medium|Jambo Bolton|Bedroom Window|Original Friendship`,
  },
  {
    year: "1996",
    topic: "Natasha Andersen And Rob Hawthorne",
    facts: `Which original Hollyoaks character died after her drink was spiked in 1996?|Natasha Andersen|Louise Taylor|Lucy Benson|Dawn Cunningham|Easy|Natasha Andersen|First Major Death|Drug Storyline
Which drug caused Natasha Andersen's fatal overdose?|Ecstasy|Cocaine|Heroin|LSD|Easy|Ecstasy|Natasha Death|Drug Awareness
At whose birthday party was Natasha Andersen's drink spiked?|Lucy Benson's|Ruth Osborne's|Dawn Cunningham's|Sarah Andersen's|Medium|Lucy Benson|Birthday Party|Natasha Overdose
Who helped Rob Hawthorne spike Natasha Andersen's drink?|Dermot Ashton|Lewis Richardson|Jambo Bolton|Kurt Benson|Medium|Dermot Ashton|Rob Hawthorne|Spiked Drink
Which early Hollyoaks villain developed a long-running feud with Kurt Benson?|Rob Hawthorne|Terry Williams|Lewis Richardson|Greg Andersen|Easy|Rob Hawthorne|Kurt Feud|Early Villain
Who was Natasha Andersen's father?|Greg Andersen|Jack Osborne|Kirk Benson|Gordon Cunningham|Medium|Greg Andersen|Natasha Family|Andersen Family
Which singer and actor portrayed Greg Andersen in early Hollyoaks?|Alvin Stardust|Jimmy McKenna|Ian Puleston-Davies|James Quinn|Medium|Alvin Stardust|Greg Andersen|Guest Casting`,
  },
  {
    year: "1996",
    topic: "The Cunningham Family",
    facts: `Who was the mother of Dawn, Jude, Cindy and Max Cunningham?|Angela Cunningham|Celia Osborne|Jane Andersen|Juliette Benson|Easy|Angela Cunningham|Cunningham Children|Family Matriarch
Who was the father of Dawn, Jude, Cindy and Max Cunningham?|Gordon Cunningham|Terry Williams|Jack Osborne|Kirk Benson|Easy|Gordon Cunningham|Cunningham Children|Family Patriarch
Which couple celebrated the first wedding shown in Hollyoaks, in 1996?|Angela Cunningham and Terry Williams|Tony Hutchinson and Julie Matthews|Jack Osborne and Celia Osborne|Kurt Benson and Ruth Osborne|Medium|First Wedding|Angela Cunningham|Terry Williams
Which actor played Terry Williams, Angela Cunningham's second husband?|Ian Puleston-Davies|Ben Hull|Jimmy McKenna|Alvin Stardust|Medium|Ian Puleston Davies|Terry Williams|Cunningham Marriage
Which actress first played Jude Cunningham when she arrived in 1996?|Davinia Taylor|Sarah Jayne Dunn|Julie Buckfield|Terri Dwyer|Medium|Davinia Taylor|Jude Cunningham|1996 Arrival
Which Cunningham daughter was the mother of baby Bethany?|Dawn Cunningham|Jude Cunningham|Cindy Cunningham|Angela Cunningham|Medium|Dawn Cunningham|Bethany|Mother Daughter
Who was Bethany's biological father in the early Hollyoaks storyline?|Jack Osborne|Terry Williams|Gordon Cunningham|Kurt Benson|Medium|Jack Osborne|Bethany Paternity|Family Secret
Which organ did Bethany need to have transplanted in 1996?|A kidney|A liver|A heart|A lung|Medium|Bethany|Kidney Transplant|Medical Storyline
Which character agreed to donate a kidney to Bethany?|Jack Osborne|Gordon Cunningham|Terry Williams|Greg Andersen|Medium|Jack Osborne|Organ Donation|Bethany Treatment`,
  },
  {
    year: "1996",
    topic: "The Pub, New Arrivals And River Dee",
    facts: `What is the name of the main pub featured in Hollyoaks from its first episode?|The Dog in the Pond|The Queen Victoria|The Rovers Return|The Woolpack|Easy|The Dog in the Pond|Village Pub|Original Setting
Who was the original landlord of The Dog in the Pond?|Greg Andersen|Jack Osborne|Terry Williams|Kirk Benson|Medium|Greg Andersen|First Landlord|Dog In The Pond
Which family took over The Dog in the Pond during 1996?|The Osbornes|The Cunninghams|The Bensons|The Richardsons|Easy|Osborne Family|Pub Takeover|New Arrivals
Which actor began playing Jack Osborne when he arrived in 1996?|Jimmy McKenna|Ben Hull|Ian Puleston-Davies|Nick Pickard|Medium|Jimmy McKenna|Jack Osborne|1996 Casting
Which actress played Ruth Osborne when she joined Hollyoaks in 1996?|Terri Dwyer|Shebah Ronay|Lisa Williamson|Yasmin Bannerman|Medium|Terri Dwyer|Ruth Osborne|Osborne Family
Who played Mandy Richardson when she first appeared in 1996?|Sarah Jayne Dunn|Terri Dwyer|Julie Buckfield|Davinia Taylor|Easy|Sarah Jayne Dunn|Mandy Richardson|1996 Introduction
Which Hollyoaks character was Mandy Richardson's brother?|Lewis Richardson|Rob Hawthorne|Jambo Bolton|Ollie Benson|Easy|Lewis Richardson|Mandy Richardson|Richardson Siblings
Which character died after Rob Hawthorne's car plunged into the River Dee in 1996?|Dermot Ashton|Lucy Benson|Carol Groves|Rob Hawthorne|Medium|Dermot Ashton|Fatal Car Crash|1996 Death
Who was driving the car that crashed into the River Dee and killed Dermot Ashton?|Rob Hawthorne|Kurt Benson|Ollie Benson|Jambo Bolton|Medium|Rob Hawthorne|Car Chase|Driver
Which river was the scene of the fatal 1996 crash involving Rob Hawthorne and Dermot Ashton?|River Dee|River Mersey|River Severn|River Thames|Medium|River Dee|Dermot Ashton|Car Crash Location
What was the name of Jambo Bolton's distinctive car, inherited from his uncle in 1996?|Beryl|Betty|Daisy|Mabel|Medium|Beryl Car|Jambo Bolton|Inherited Vehicle`,
  },
];

let index = 0;
const questions = groups.flatMap(group => group.facts.trim().split("\n").map(line => {
  const parts = line.split("|");
  if (parts.length !== 9) throw new Error(`Invalid question data at ${index + 1}`);
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, tag1, tag2, tag3] = parts;
  const answers = [wrong1, wrong2, wrong3];
  if (new Set([correctAnswer, ...answers]).size !== 4) {
    throw new Error(`Repeated answer choice at question ${index + 1}`);
  }
  if (!["Easy", "Medium", "Hard"].includes(difficulty)) {
    throw new Error(`Invalid difficulty at question ${index + 1}`);
  }
  answers.splice(index % 4, 0, correctAnswer);
  const item = {
    id: "tv_" + String(10364 + index).padStart(4, "0"),
    category: "Television",
    question,
    answers,
    correctAnswer,
    difficulty,
    tags: [...new Set([
      "British Television", "Soaps", "Hollyoaks", "Channel 4",
      "1990s", group.year, group.topic,
      correctAnswer, tag1, tag2, tag3
    ])],
    dailyEligible: true
  };
  index += 1;
  return item;
}));

if (questions.length !== 43) {
  throw new Error(`Expected 43 questions; got ${questions.length}`);
}
if (new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
  throw new Error("Duplicate question text in Pack 265");
}
module.exports = questions;
