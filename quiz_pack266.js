// quiz_pack266.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Hollyoaks - 1997 to 1998
// 38 questions: tv_10407 to tv_10444
// Per-question tag audit: characters, actors, family ties, relationships,
// storylines, programme and year. No unrelated group-wide story tags.
// Existing question IDs, answers, difficulties and daily eligibility retained.
// Leave quiz_bank.js unchanged until the end of the evening.
//
// Each line: question | correct answer | three wrong answers | difficulty | three specific tags.

const groups = [
  {
    year: "1997",
    topic: "Kurt, Ruth, Tony And The Siege",
    facts: `Which Hollyoaks character married Ruth Osborne in 1997?|Kurt Benson|Tony Hutchinson|Rob Hawthorne|Lewis Richardson|Easy|Kurt Benson|Ruth Osborne|1997 Marriage
Which man was injured in a fall from scaffolding during a fight with Kurt Benson?|Spike|Rob Hawthorne|Michael St. John Thomas|Dennis Richardson|Medium|Spike|Scaffolding Fall|Kurt Trial
What verdict did Kurt Benson receive after being charged with attempted murder in 1997?|Not guilty|Guilty of attempted murder|Guilty of manslaughter|The jury failed to reach a verdict|Medium|Kurt Acquittal|Attempted Murder Trial|Spike Incident
Which woman jilted Tony Hutchinson at the altar in 1997?|Julie Matthews|Maddie Parker|Jude Cunningham|Ruth Osborne|Medium|Julie Matthews|Tony Wedding|Jilted Groom
Which villain held Jude Cunningham and Maddie Parker hostage in a 1997 storyline?|Michael St. John Thomas|Rob Hawthorne|Spike|Dennis Richardson|Medium|Michael St John Thomas|Rooftop Siege|Kidnapping
Which Cunningham sister pushed the hostage-taker to his death from a rooftop in 1997?|Jude Cunningham|Dawn Cunningham|Cindy Cunningham|Angela Cunningham|Medium|Jude Cunningham|Michael Death|Rooftop Confrontation
Which actor took over the role of Max Cunningham in 1997?|Matt Littler|Darren Jeffries|Ben Hull|Paul Danan|Medium|Matt Littler|Max Cunningham|Cast Change`,
  },
  {
    year: "1997",
    topic: "Cindy, The Road Crash And Christmas",
    facts: `Which Cunningham daughter became pregnant at the age of sixteen in 1997?|Cindy Cunningham|Dawn Cunningham|Jude Cunningham|Mandy Richardson|Easy|Cindy Cunningham|Teenage Pregnancy|Young Mother
Who was the father of Cindy Cunningham's baby?|Lee Stanley|Kurt Benson|Tony Hutchinson|Lewis Richardson|Medium|Lee Stanley|Cindy Pregnancy|Holly Paternity
What name did Cindy Cunningham give to her daughter born in 1997?|Holly|Bethany|Lucy|Maddie|Easy|Holly Cunningham|Cindy Daughter|Christmas Birth
How did Cindy's boyfriend Lee Stanley die in 1997?|In a road accident|In a house fire|After a drowning accident|From a drug overdose|Medium|Lee Stanley|Fatal Crash|Cindy Bereavement
Which of Kurt Benson's brothers died of injuries sustained in the same 1997 road accident?|Ollie Benson|Tony Hutchinson|Max Cunningham|Darren Osborne|Medium|Ollie Benson|Road Crash|Benson Family
Which character became Max Cunningham's long-time friend and sidekick in 1997?|O.B.|Jambo Bolton|Rob Hawthorne|Sol Patrick|Easy|OB|Max Friendship|New Character
Which actor played Max Cunningham's friend O.B.?|Darren Jeffries|Matt Littler|Jeremy Edwards|Ben Hull|Medium|Darren Jeffries|Sam OBrien|Original Casting
Which original Hollyoaks character died of leukaemia at Christmas in 1997?|Dawn Cunningham|Natasha Andersen|Jude Cunningham|Lucy Benson|Easy|Dawn Cunningham|Leukaemia|Christmas Death
Who proposed marriage to Dawn Cunningham shortly before she died?|Jambo Bolton|Kurt Benson|Tony Hutchinson|Jack Osborne|Easy|Jambo Bolton|Dawn Proposal|Christmas Story`,
  },
  {
    year: "1997",
    topic: "The Richardson And Patrick Families",
    facts: `Which family arrived in Hollyoaks in 1997 with Jill and her children Sol, Gina and Kate?|The Patricks|The Bensons|The Deans|The Ashworths|Easy|Patrick Family|Jill Patrick|New Arrivals
Which actor played Hollyoaks character Sol Patrick?|Paul Danan|James Redmond|Will Mellor|Darren Jeffries|Easy|Paul Danan|Sol Patrick|Actor
Who was Mandy and Lewis Richardson's father, introduced in 1997?|Dennis Richardson|Jack Osborne|Gordon Cunningham|Greg Andersen|Medium|Dennis Richardson|Richardson Father|1997 Arrival
Which actress played Jill Patrick in the early Hollyoaks episodes?|Lynda Rooke|Terri Dwyer|Davinia Taylor|Yasmin Bannerman|Medium|Lynda Rooke|Jill Patrick|Original Casting
Which actress began playing Cindy Cunningham in late 1996 and continued in the role through 1997 and 1998?|Stephanie Waring|Sarah Jayne Dunn|Davinia Taylor|Lisa Williamson|Medium|Stephanie Waring|Cindy Cunningham|Casting`,
  },
  {
    year: "1998",
    topic: "Mandy Richardson And Her Family",
    facts: `Which character was Mandy Richardson dating when her abusive father tried to break up their relationship?|Sol Patrick|Kurt Benson|Tony Hutchinson|Rob Hawthorne|Medium|Mandy Richardson|Sol Patrick|1998 Relationship
What did Mandy Richardson pretend had happened to her when she fled from her abusive father in 1998?|That she had died|That she had moved abroad|That she had married|That she had joined the police|Medium|Mandy Disappearance|Faked Death|Dennis Abuse
Which member of Mandy's family found her alive in London with Sol Patrick?|Lewis Richardson|Dennis Richardson|Jack Osborne|Gordon Cunningham|Medium|Lewis Richardson|Mandy Found|London Hospital
Which crime led to Dennis Richardson being sent to prison in 1998?|Raping his daughter Mandy|Armed robbery|Murdering his wife|Kidnapping his son|Medium|Dennis Conviction|Mandy Abuse|1998 Court Case
How long was Dennis Richardson sentenced to prison for in 1998?|Seven years|Two years|Ten years|Life imprisonment|Medium|Dennis Richardson|Prison Sentence|1998 Verdict
What was the name of Mandy and Lewis Richardson's mother?|Helen Richardson|Jill Patrick|Angela Cunningham|Celia Osborne|Medium|Helen Richardson|Richardson Family|Mandy Mother`,
  },
  {
    year: "1998",
    topic: "The Osbornes, Cindy, Tony And Rob",
    facts: `Which couple married in Hollyoaks in 1998, uniting the Osborne and Patrick families?|Jack Osborne and Jill Patrick|Kurt Benson and Ruth Osborne|Tony Hutchinson and Julie Matthews|Lewis Richardson and Carol Groves|Easy|Jack Osborne|Jill Patrick|1998 Wedding
Which condition did Cindy Cunningham experience after the birth of her daughter Holly?|Postnatal depression|Amnesia|Agoraphobia|Sleepwalking|Medium|Cindy Cunningham|Postnatal Depression|Holly Baby
Which Cunningham family member stopped Cindy from suffocating baby Holly during her postnatal depression?|Jude Cunningham|Dawn Cunningham|Gordon Cunningham|Max Cunningham|Medium|Jude Cunningham|Holly Rescued|Cindy Crisis
What name was given to Tony Hutchinson's son, born to Tessie Thompson in 1998?|Harry|Beau|Max|Darren|Medium|Harry Thompson|Tessie Thompson|Tony Son
Which woman became engaged to Tony Hutchinson in 1998?|Jasmine Bates|Julie Matthews|Ruth Osborne|Jude Cunningham|Medium|Jasmine Bates|Tony Engagement|1998 Romance
Which original Hollyoaks character left the village in 1998 after Dawn Cunningham's death?|Jambo Bolton|Tony Hutchinson|Kurt Benson|Lewis Richardson|Easy|Jambo Bolton|Dawn Aftermath|1998 Departure
Which actor joined Hollyoaks in 1998 as the character known as Finn?|James Redmond|Paul Danan|Matt Littler|Ben Hull|Medium|James Redmond|Rory Finnigan|New Cast
Which Cunningham sister fled the village after a failed jewellery theft in 1998?|Jude Cunningham|Cindy Cunningham|Dawn Cunningham|Mandy Richardson|Medium|Jude Cunningham|Necklace Theft|1998 Exit
Which of Kurt Benson's relatives was given a heroin overdose by Rob Hawthorne in 1998?|Lucy Benson|Ollie Benson|Ruth Osborne|Dawn Cunningham|Medium|Lucy Benson|Rob Hawthorne|Drug Attack
Which villain was presumed drowned after a confrontation with Kurt Benson in the 1998 video spin-off?|Rob Hawthorne|Spike|Dennis Richardson|Michael St. John Thomas|Medium|Rob Hawthorne|Presumed Drowning|Kurt Feud
What was the title of the Hollyoaks video spin-off released in 1998?|Hollyoaks: Off on One|Hollyoaks Later|Hollyoaks: In the City|Hollyoaks: Moving On|Medium|Off On One|1998 Video Release|Spin Off`,
  },
];

// Extra tags keyed to individual question IDs, rather than whole groups.
// This avoids unrelated characters or plotlines entering nearby questions.
const specificTags = {
  tv_10407: ["Kurt Benson", "Ruth Osborne", "Elopement", "Hull", "Benson Osborne Marriage"],
  tv_10408: ["Spike", "Kurt Benson", "Ruth Osborne", "Construction Site", "Scaffolding Fight", "Attempted Murder Charge"],
  tv_10409: ["Kurt Benson", "Spike", "Ruth Osborne", "Not Guilty Verdict", "Court Trial", "Acquittal"],
  tv_10410: ["Julie Matthews", "Tony Hutchinson", "Aborted Wedding", "Jilted At Altar", "1997 Romance"],
  tv_10411: ["Michael St. John Thomas", "Jude Cunningham", "Maddie Parker", "Hostage Taking", "Rooftop Siege"],
  tv_10412: ["Jude Cunningham", "Michael St. John Thomas", "Maddie Parker", "Fatal Rooftop Fall", "Hostage Rescue"],
  tv_10413: ["Matt Littler", "Max Cunningham", "Cunningham Family", "Actor Recast", "1997 Casting"],
  tv_10414: ["Cindy Cunningham", "Lee Stanley", "Sixteenth Birthday", "Teenage Motherhood", "Cunningham Family"],
  tv_10415: ["Lee Stanley", "Cindy Cunningham", "Holly Cunningham", "Biological Father", "Teenage Pregnancy"],
  tv_10416: ["Holly Cunningham", "Cindy Cunningham", "Lee Stanley", "Daughter Birth", "Christmas Day 1997"],
  tv_10417: ["Lee Stanley", "Cindy Cunningham", "Ollie Benson", "Fatal Road Accident", "Boyfriend Death"],
  tv_10418: ["Ollie Benson", "Kurt Benson", "Lee Stanley", "Brother Death", "Car Crash Injuries"],
  tv_10419: ["Sam O'Brien", "O.B.", "Max Cunningham", "Friendship", "Comedy Double Act", "1997 Arrival"],
  tv_10420: ["Darren Jeffries", "Sam O'Brien", "O.B.", "Max Cunningham", "Actor Casting"],
  tv_10421: ["Dawn Cunningham", "Jambo Bolton", "Leukaemia", "Christmas Day 1997", "Cunningham Family", "Fatal Illness"],
  tv_10422: ["Jambo Bolton", "Dawn Cunningham", "River Dee", "Marriage Proposal", "Christmas Day 1997", "Final Hours"],
  tv_10423: ["Patrick Family", "Jill Patrick", "Sol Patrick", "Gina Patrick", "Kate Patrick", "Family Arrivals"],
  tv_10424: ["Paul Danan", "Sol Patrick", "Patrick Family", "Actor Casting", "1997 Introduction"],
  tv_10425: ["Dennis Richardson", "Mandy Richardson", "Lewis Richardson", "Richardson Family", "Father Children", "1997 Debut"],
  tv_10426: ["Lynda Rooke", "Jill Patrick", "Sol Patrick", "Gina Patrick", "Kate Patrick", "Actress Casting"],
  tv_10427: ["Stephanie Waring", "Cindy Cunningham", "Cunningham Family", "1996 Recast", "1997 Cast", "1998 Cast"],
  tv_10428: ["Mandy Richardson", "Sol Patrick", "Dennis Richardson", "Romance", "Abusive Father", "Relationship Conflict"],
  tv_10429: ["Mandy Richardson", "Dennis Richardson", "Sol Patrick", "Faked Suicide", "Missing Person", "Family Abuse"],
  tv_10430: ["Mandy Richardson", "Lewis Richardson", "Sol Patrick", "London Hospital", "Brother Sister", "Survival Revealed"],
  tv_10431: ["Dennis Richardson", "Mandy Richardson", "Sexual Abuse", "Rape Conviction", "Court Trial", "Prison Sentence"],
  tv_10432: ["Dennis Richardson", "Mandy Richardson", "Seven Year Sentence", "Rape Conviction", "Criminal Trial"],
  tv_10433: ["Helen Richardson", "Mandy Richardson", "Lewis Richardson", "Dennis Richardson", "Mother Children", "Richardson Family"],
  tv_10434: ["Jack Osborne", "Jill Patrick", "Osborne Family", "Patrick Family", "Marriage", "1998 Wedding"],
  tv_10435: ["Cindy Cunningham", "Holly Cunningham", "Postnatal Depression", "Young Mother", "Mental Health Storyline"],
  tv_10436: ["Jude Cunningham", "Cindy Cunningham", "Holly Cunningham", "Infant Rescue", "Postnatal Depression", "Cunningham Sisters"],
  tv_10437: ["Harry Thompson", "Tony Hutchinson", "Tessie Thompson", "Father Son", "Baby Birth", "Paternity Secret"],
  tv_10438: ["Jasmine Bates", "Tony Hutchinson", "Marriage Proposal", "Engagement", "1998 Romance"],
  tv_10439: ["Jambo Bolton", "Dawn Cunningham", "Will Mellor", "Bereavement", "Departure", "1998 Exit"],
  tv_10440: ["James Redmond", "Rory Finnigan", "Finn", "Actor Casting", "1998 Debut"],
  tv_10441: ["Jude Cunningham", "Roger Patterson", "Burcroft Manor", "Jewellery Heist", "Necklace Theft", "Flight From Justice"],
  tv_10442: ["Lucy Benson", "Rob Hawthorne", "Kurt Benson", "Heroin Overdose", "Drug Attack", "Car Park Rescue"],
  tv_10443: ["Rob Hawthorne", "Kurt Benson", "Hollyoaks: Off on One", "Boat Confrontation", "Presumed Drowning", "Video Spin Off"],
  tv_10444: ["Hollyoaks: Off on One", "VHS Release", "1998 Spin Off", "Kurt Benson", "Rob Hawthorne", "Special Video"],
};

let index = 0;
const questions = groups.flatMap(group => group.facts.trim().split("\n").map(line => {
  const parts = line.split("|");
  if (parts.length !== 9) throw new Error(`Invalid data at question ${index + 1}`);

  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, tag1, tag2, tag3] = parts;
  const id = "tv_" + String(10407 + index).padStart(4, "0");
  const answers = [wrong1, wrong2, wrong3];

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

  const item = {
    id,
    category: "Television",
    question,
    answers,
    correctAnswer,
    difficulty,
    tags: [...new Set([
      "British Television", "Soaps", "Hollyoaks", "Channel 4", "1990s",
      group.year, correctAnswer, tag1, tag2, tag3,
      ...specificTags[id]
    ])],
    dailyEligible: true
  };

  index += 1;
  return item;
}));

if (questions.length !== 38) {
  throw new Error(`Expected 38 questions; got ${questions.length}`);
}
if (Object.keys(specificTags).length !== questions.length) {
  throw new Error("Incorrect number of per-question tag sets");
}
if (new Set(questions.map(q => q.id)).size !== questions.length) {
  throw new Error("Duplicate question IDs");
}
if (new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
  throw new Error("Duplicate question text in Pack 266");
}
if (questions.some(q =>
  !q.answers.includes(q.correctAnswer) ||
  q.answers.length !== 4 ||
  q.tags.length < 10
)) {
  throw new Error("Incomplete exported question metadata");
}

module.exports = questions;
