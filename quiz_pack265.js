// quiz_pack265.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Hollyoaks - 1995 to 1996
// 43 questions: tv_10364 to tv_10406
// Full per-question tagging audit: specific characters, performers, families,
// relationships, plot events and accurate years. No unrelated group-wide tags.
// Leave quiz_bank.js unchanged until the end of the evening.
//
// Each line: question | correct answer | three wrong answers | difficulty | three specific tags.
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

// Extra tags are deliberately keyed by stable question ID rather than applied
// to an entire group. That prevents unrelated characters and stories leaking
// into neighbouring questions when a group contains several plotlines.
const specificTags = {
  tv_10364: ["23 October 1995", "Television Premiere", "Phil Redmond", "UK Television History"],
  tv_10365: ["Channel 4 Launch", "1995 Premiere", "British Broadcasting"],
  tv_10366: ["Television Creator", "Hollyoaks Creation", "Brookside Creator", "Programme Origins"],
  tv_10367: ["Chester Cheshire", "Hollyoaks Village", "Soap Setting"],
  tv_10368: ["Seven Original Characters", "1995 Cast", "Teenage Characters", "Youth Drama"],
  tv_10369: ["Once Weekly", "1995 Broadcasting", "Episode Schedule", "Channel 4"],
  tv_10370: ["Kurt Benson Car", "Ollie Benson", "Opening Car Explosion", "Joyride"],
  tv_10371: ["Kurt Benson", "Ollie Benson", "Brother Relationship", "Opening Car Explosion"],
  tv_10372: ["Tony Hutchinson", "Nick Pickard", "Original Seven", "Longest Serving Actor"],
  tv_10373: ["Kurt Benson", "Jeremy Edwards", "Original Seven", "Actor Casting"],
  tv_10374: ["Jambo Bolton", "Will Mellor", "Original Seven", "Actor Casting"],
  tv_10375: ["Natasha Andersen", "Shebah Ronay", "Original Seven", "Actress Casting"],
  tv_10376: ["Dawn Cunningham", "Lisa Williamson", "Original Seven", "Actress Casting"],
  tv_10377: ["Maddie Parker", "Yasmin Bannerman", "Original Seven", "Actress Casting"],
  tv_10378: ["Tony Hutchinson", "Nick Pickard", "Original Seven", "First Spoken Line"],
  tv_10379: ["Jambo Bolton", "Kurt Benson", "Original Seven", "Friendship", "Opening Episode"],
  tv_10380: ["Natasha Andersen", "Lucy Benson", "Rob Hawthorne", "Dermot Ashton", "Fatal Overdose", "Ecstasy"],
  tv_10381: ["Natasha Andersen", "Lucy Benson Birthday", "Rob Hawthorne", "Dermot Ashton", "Fatal Overdose", "Ecstasy"],
  tv_10382: ["Lucy Benson", "Natasha Andersen", "Rob Hawthorne", "Dermot Ashton", "Birthday Party Drugging"],
  tv_10383: ["Dermot Ashton", "Rob Hawthorne", "Natasha Andersen", "Lucy Benson", "Ecstasy Spiking"],
  tv_10384: ["Rob Hawthorne", "Kurt Benson", "Long Running Rivalry", "1990s Villain"],
  tv_10385: ["Natasha Andersen", "Greg Andersen", "Father Daughter", "Andersen Family"],
  tv_10386: ["Alvin Stardust", "Greg Andersen", "Natasha Andersen", "Singer Actor", "Actor Casting"],
  tv_10387: ["Angela Cunningham", "Dawn Cunningham", "Jude Cunningham", "Cindy Cunningham", "Max Cunningham", "Mother Children"],
  tv_10388: ["Gordon Cunningham", "Dawn Cunningham", "Jude Cunningham", "Cindy Cunningham", "Max Cunningham", "Father Children"],
  tv_10389: ["Angela Cunningham", "Terry Williams", "Wedding", "Marriage Ceremony", "10 October 1996"],
  tv_10390: ["Ian Puleston-Davies", "Terry Williams", "Angela Cunningham", "Second Husband", "Actor Casting"],
  tv_10391: ["Davinia Taylor", "Jude Cunningham", "Cunningham Family", "Actress Casting", "1996 Introduction"],
  tv_10392: ["Dawn Cunningham", "Bethany Cunningham", "Bethany Keane", "Jack Osborne", "Mother Daughter", "Adoption"],
  tv_10393: ["Jack Osborne", "Bethany Cunningham", "Dawn Cunningham", "Biological Father", "Paternity Secret"],
  tv_10394: ["Bethany Cunningham", "Bethany Keane", "Dawn Cunningham", "Jack Osborne", "Kidney Transplant", "Organ Donation"],
  tv_10395: ["Jack Osborne", "Bethany Cunningham", "Dawn Cunningham", "Kidney Donor", "Father Daughter", "Organ Donation"],
  tv_10396: ["The Dog in the Pond", "Greg Andersen", "1995 Premiere", "Original Pub", "Hollyoaks Village"],
  tv_10397: ["Greg Andersen", "Alvin Stardust", "The Dog in the Pond", "1995 Launch", "Original Pub Landlord"],
  tv_10398: ["Osborne Family", "Jack Osborne", "Celia Osborne", "Greg Andersen", "The Dog in the Pond", "Pub Ownership"],
  tv_10399: ["Jimmy McKenna", "Jack Osborne", "Osborne Family", "Actor Casting", "1996 Debut"],
  tv_10400: ["Terri Dwyer", "Ruth Osborne", "Jack Osborne", "Celia Osborne", "Actress Casting", "Osborne Family"],
  tv_10401: ["Sarah Jayne Dunn", "Mandy Richardson", "Lewis Richardson", "Actress Casting", "Richardson Family"],
  tv_10402: ["Lewis Richardson", "Mandy Richardson", "Brother Sister", "Richardson Family"],
  tv_10403: ["Dermot Ashton", "Rob Hawthorne", "Lucy Benson", "Carol Groves", "River Dee", "Fatal Car Crash"],
  tv_10404: ["Rob Hawthorne", "Dermot Ashton", "Lucy Benson", "Carol Groves", "River Dee", "Car Crash"],
  tv_10405: ["River Dee", "Rob Hawthorne", "Dermot Ashton", "Lucy Benson", "Carol Groves", "Car Crash"],
  tv_10406: ["Beryl", "Jambo Bolton", "Bond Bug", "Uncle Inheritance", "1996 Car"],
};

let index = 0;
const questions = groups.flatMap(group => group.facts.trim().split("\n").map(line => {
  const parts = line.split("|");
  if (parts.length !== 9) throw new Error(`Invalid question data at ${index + 1}`);
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, tag1, tag2, tag3] = parts;
  const answers = [wrong1, wrong2, wrong3];
  const id = "tv_" + String(10364 + index).padStart(4, "0");

  if (new Set([correctAnswer, ...answers]).size !== 4) {
    throw new Error(`Repeated answer choice at ${id}`);
  }
  if (!["Easy", "Medium", "Hard"].includes(difficulty)) {
    throw new Error(`Invalid difficulty at ${id}`);
  }
  if (!Array.isArray(specificTags[id]) || specificTags[id].length === 0) {
    throw new Error(`Missing specific tags at ${id}`);
  }

  answers.splice(index % 4, 0, correctAnswer);
  const year = (id === "tv_10396" || id === "tv_10397") ? "1995" : group.year;
  const item = {
    id,
    category: "Television",
    question,
    answers,
    correctAnswer,
    difficulty,
    tags: [...new Set([
      "British Television", "Soaps", "Hollyoaks", "Channel 4",
      "1990s", year, correctAnswer, tag1, tag2, tag3,
      ...specificTags[id]
    ])],
    dailyEligible: true
  };
  index += 1;
  return item;
}));

if (questions.length !== 43) throw new Error(`Expected 43 questions; got ${questions.length}`);
if (Object.keys(specificTags).length !== questions.length) throw new Error("Incorrect number of question-specific tag sets");
if (new Set(questions.map(q => q.id)).size !== questions.length) throw new Error("Duplicate question IDs");
if (new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) throw new Error("Duplicate question text in Pack 265");
if (questions.some(q => !q.answers.includes(q.correctAnswer) || q.answers.length !== 4 || q.tags.length < 10)) {
  throw new Error("Incomplete exported question metadata");
}
module.exports = questions;
