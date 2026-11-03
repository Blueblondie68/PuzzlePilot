
// quiz_pack266.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Hollyoaks - 1997 to 1998
// 38 questions: tv_10407 to tv_10444
// Major storylines, recognisable characters and cast.
// Complete question-specific tags; no filler or invented events.
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
    id: "tv_" + String(10407 + index).padStart(4, "0"),
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

if (questions.length !== 38) {
  throw new Error(`Expected 38 questions; got ${questions.length}`);
}
if (new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
  throw new Error("Duplicate question text in Pack 266");
}

module.exports = questions;
