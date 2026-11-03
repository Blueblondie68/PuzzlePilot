
// quiz_pack268.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Hollyoaks - 2002 to 2004
// 60 questions: tv_10499 to tv_10558
// Major families, storylines, cast and late-night spin-offs.
// Six question-specific tags per source question.
// Leave quiz_bank.js unchanged until the end of the evening.
//
// Each line: question | correct answer | three wrong answers
//            | difficulty | six question-specific tags.

const groups = [
  {
    year: '2002',
    topic: 'The Dean Family Arrives',
    facts: `Which family joined Hollyoaks in 2002 with members including Craig, Jake and Debbie?|The Deans|The McQueens|The Ashworths|The Costellos|Easy|Dean Family|Craig Dean|Jake Dean|Debbie Dean|New Arrivals|2002 Family
Which actress began playing Frankie Dean when the character arrived in Hollyoaks?|Helen Pearson|Helen Noble|Sarah Baxendale|Jodi Albert|Easy|Helen Pearson|Frankie Dean|Dean Family|Actress Casting|2002 Arrival|Future Osborne
Who played Craig Dean when he made his Hollyoaks debut in 2002?|Guy Burnet|Kevin Sacre|Alex Carter|James Redmond|Easy|Guy Burnet|Craig Dean|Dean Family|Actor Casting|2002 Debut|Steph Dean
Which actor played Jake Dean from his introduction in 2002?|Kevin Sacre|Guy Burnet|Matt Littler|Andrew McNair|Medium|Kevin Sacre|Jake Dean|Dean Family|Actor Casting|2002 Debut|Craig Dean
Who played Debbie Dean when the character joined the soap in 2002?|Jodi Albert|Carley Stenson|Ali Bastian|Gemma Atkinson|Medium|Jodi Albert|Debbie Dean|Dean Family|Actress Casting|2002 Debut|Frankie Dean
Which Dean sister was already established in Hollyoaks before the rest of her family arrived in 2002?|Steph Dean|Debbie Dean|Ellie Dean|Frankie Dean|Easy|Steph Dean|Carley Stenson|Dean Siblings|Craig Dean|Jake Dean|Family Expansion
Which actor originally played Johnno Dean in 2002 before the role was recast?|Mark Powley|Colin Wells|Bernard Latham|John Graham Davies|Medium|Mark Powley|Johnno Dean|Original Casting|Recast Role|Frankie Dean|Dean Father
Who was the mother of Craig, Jake, Debbie and Steph Dean?|Frankie Dean|Helen Cunningham|Sally Hunter|Liz Burton|Easy|Frankie Dean|Dean Family|Craig Dean|Jake Dean|Debbie Dean|Steph Dean`,
  },
  {
    year: '2002',
    topic: 'The Hunters, A Cliff Accident And Mandy',
    facts: `Which previously missing member of the Hunter family arrived in Hollyoaks in 2002?|Ellie Hunter|Lisa Hunter|Sally Hunter|Dan Hunter|Medium|Ellie Hunter|Hunter Family|Missing Daughter|Return From Ibiza|Les Hunter|Sally Hunter
Which actress played Ellie Hunter, later known as Ellie Mills?|Sarah Baxendale|Katherine Dow Blyton|Gemma Atkinson|Jodi Albert|Medium|Sarah Baxendale|Ellie Hunter|Ellie Mills|Hunter Family|Actress Casting|2002 Debut
Which character died in 2002 following a serious accident involving a van near a cliff?|Theo Sankofa|Norman Sankofa|Ben Davies|Max Cunningham|Medium|Theo Sankofa|Cliff Accident|Van Crash|Sankofa Family|November 2002|Fatal Accident
Which other character later died from injuries sustained in the 2002 cliffside van accident?|Jamie Nash|Ben Davies|O.B.|Adam Morgan|Medium|Jamie Nash|Theo Sankofa|Cliff Accident|Van Crash|November 2002|Hospital Death
What was the name of Theo Sankofa's younger brother, who struggled after Theo's death?|Norman Sankofa|Dan Hunter|Lee Hunter|Craig Dean|Medium|Norman Sankofa|Theo Sankofa|Sankofa Brothers|Bereavement|Homelessness|Family Storyline
Which character became dangerously obsessed with Mandy Richardson in 2002?|Laura Burns|Julie Matthews|Izzy Cornwell|Ellie Hunter|Medium|Laura Burns|Mandy Richardson|Obsession Storyline|Hostage Crisis|2002 Drama|Stalker
What was the real name of Mandy Richardson's obsessive friend Laura Burns?|Kerry Shepherd|Anna Green|Izzy Cornwell|Beth Morgan|Hard|Kerry Shepherd|Laura Burns|Mandy Richardson|False Identity|Brendan Shepherd|2002 Revelation
How did Mandy Richardson signal for help when Laura Burns held her hostage?|She threw a paperweight through a window|She set off a fire alarm|She wrote a message on a mirror|She called from a hidden mobile phone|Medium|Mandy Richardson|Laura Burns|Paperweight|Hostage Rescue|2002 Showdown|Flat Window
Which Morgan brother became a wheelchair user following a car accident in 2002?|Adam Morgan|Luke Morgan|Andy Morgan|Norman Sankofa|Medium|Adam Morgan|Morgan Family|Car Accident|Wheelchair|2002 Storyline|Life Changing Injury
Which two women both proposed to Tony Hutchinson on the same day in 2002?|Izzy Cornwell and Julie Matthews|Mandy Richardson and Ruth Osborne|Geri Hudson and Becca Hayton|Beth Morgan and Lisa Hunter|Medium|Tony Hutchinson|Izzy Cornwell|Julie Matthews|Two Proposals|Romantic Comedy|November 2002`,
  },
  {
    year: '2003',
    topic: 'Toby Mills And The Serial Killer',
    facts: `Which character was revealed to be Hollyoaks' first serial killer in 2003?|Toby Mills|Rob Hawthorne|Scott Anderson|Dennis Richardson|Easy|Toby Mills|First Serial Killer|Murder Mystery|2003 Reveal|Hollyoaks Villain|Crime Storyline
Which actor played serial killer Toby Mills?|Henry Luxemburg|Andrew McNair|Kevin Sacre|Chris Fountain|Medium|Henry Luxemburg|Toby Mills|Actor Casting|Serial Killer|2003 Storyline|Villain Actor
Which Hunter family member married Toby Mills in 2003?|Ellie Hunter|Lisa Hunter|Sally Hunter|Debbie Dean|Easy|Ellie Hunter|Ellie Mills|Toby Mills|Hunter Family|2003 Marriage|Serial Killer Secret
Which woman was murdered by Toby Mills beside the River Dee in 2003?|Roxy Maguire|Geri Hudson|Anna Green|Izzy Cornwell|Medium|Roxy Maguire|Toby Mills|River Dee|2003 Murder|Serial Killer Victim|Crime Storyline
What weapon did Toby Mills use to attack Roxy Maguire in 2003?|A spanner|A kitchen knife|A hammer|A cricket bat|Medium|Toby Mills|Roxy Maguire|Spanner Attack|Murder Weapon|Serial Killer|2003 Crime
Which character was dating Roxy Maguire before her murder in 2003?|O.B.|Tony Hutchinson|Craig Dean|Luke Morgan|Medium|Roxy Maguire|Sam O'Brien|O.B.|Toby Mills|2003 Relationship|Murder Victim
Which Hunter brother was suspected of Roxy Maguire's murder despite Toby Mills being the killer?|Dan Hunter|Lee Hunter|Max Cunningham|Norman Sankofa|Medium|Dan Hunter|Roxy Maguire|Toby Mills|Wrongful Suspicion|Murder Investigation|Hunter Family
Which Dean sister survived an attack by Toby Mills and was hospitalised in 2003?|Steph Dean|Debbie Dean|Frankie Dean|Cindy Cunningham|Easy|Steph Dean|Toby Mills|Assault|Hospitalisation|Survivor|2003 Attack
Who was Toby Mills' mother, who died after he pushed her down a staircase?|Linda Mills|Sally Hunter|Frankie Dean|Angela Cunningham|Medium|Linda Mills|Toby Mills|Mother Son|Staircase Fall|2003 Death|Serial Killer
Which Hunter brother pushed Toby Mills from a rooftop during the 2003 confrontation?|Dan Hunter|Lee Hunter|Craig Dean|Max Cunningham|Easy|Dan Hunter|Toby Mills|Ellie Mills|Rooftop Fall|2003 Death|Rescue Attempt
What was the title of the late-night Hollyoaks special featuring Toby Mills' rooftop confrontation?|Hollyoaks: Leap of Faith|Hollyoaks: Lost Weekend|Hollyoaks: After Hours|Hollyoaks: Breaking Boundaries|Medium|Leap of Faith|Toby Mills|Ellie Mills|Dan Hunter|2003 Special|Rooftop Confrontation
Which major Hollyoaks episode milestone featured the reveal of its first serial killer?|The 1,000th episode|The 500th episode|The 1,500th episode|The 2,000th episode|Medium|Thousandth Episode|Toby Mills|Serial Killer Reveal|2003 Milestone|Channel 4|Soap History`,
  },
  {
    year: '2003',
    topic: 'Romances, Departures And New Arrivals',
    facts: `Which couple married in Hollyoaks in December 2003?|Ben Davies and Izzy Cornwell|Tony Hutchinson and Mandy Richardson|Jack Osborne and Frankie Dean|Jake Dean and Becca Hayton|Medium|Ben Davies|Izzy Cornwell|2003 Wedding|Romance|Marriage|December 2003
Which actress played Izzy Cornwell, who married Ben Davies in 2003?|Elize du Toit|Ali Bastian|Joanna Taylor|Helen Noble|Medium|Elize du Toit|Izzy Cornwell|Ben Davies|Actress Casting|2003 Marriage|Television Performer
Which illness caused the death of Mandy Richardson's father Dennis in 2003?|Liver cancer|Lung cancer|A brain tumour|Leukaemia|Medium|Dennis Richardson|Mandy Richardson|Liver Cancer|2003 Death|Richardson Family|Terminal Illness
Which Burton family character first appeared in Hollyoaks in 2003 and later became involved with Becca Hayton?|Justin Burton|Lee Hunter|Craig Dean|Dan Hunter|Easy|Justin Burton|Becca Hayton|Burton Family|2003 Debut|Future Storyline|Teen Character
Which actor played Justin Burton from his 2003 arrival?|Chris Fountain|Alex Carter|Guy Burnet|Matt Littler|Easy|Chris Fountain|Justin Burton|Burton Family|Actor Casting|2003 Arrival|Future Teacher Romance
Who played Darlene Taylor when the character was introduced in 2003?|Sarah Lawrence|Carley Stenson|Sarah Baxendale|Gemma Atkinson|Medium|Sarah Lawrence|Darlene Taylor|Taylor Family|Actress Casting|2003 Introduction|Ali Taylor
Which actor replaced Mark Powley as Johnno Dean during 2003?|Colin Wells|Bernard Latham|Ross Davidson|John Graham Davies|Medium|Colin Wells|Johnno Dean|Mark Powley|Actor Recast|Dean Family|2003 Casting
Which actor took over the role of Tom Cunningham in 2003 and continued playing him for many years?|Ellis Hollins|Matt Littler|Guy Burnet|Darren Jeffries|Medium|Ellis Hollins|Tom Cunningham|Cunningham Family|Child Actor|2003 Recast|Long Running Role
In which year did Hollyoaks expand to five regular episodes per week?|2003|2001|2005|2007|Medium|Five Episodes Weekly|Broadcast Expansion|November 2003|TV Schedule|2003 Broadcast History|Weekday Soap`,
  },
  {
    year: '2004',
    topic: 'The Cunninghams And The Toby Mills Aftermath',
    facts: `Which Cunningham family patriarch died following a car accident in February 2004?|Gordon Cunningham|Max Cunningham|Jack Osborne|Johnno Dean|Easy|Gordon Cunningham|Car Crash|February 2004|Cunningham Family|Heart Attack|Father Of Tom
Which woman died from injuries sustained in the same 2004 car crash as Gordon Cunningham?|Helen Cunningham|Angela Cunningham|Cindy Cunningham|Sally Hunter|Easy|Helen Cunningham|Gordon Cunningham|Car Accident|2004 Death|Cunningham Family|Mother Of Tom
Which young Cunningham child was left orphaned by Gordon and Helen's deaths in 2004?|Tom Cunningham|Max Cunningham|Holly Cunningham|Craig Dean|Easy|Tom Cunningham|Gordon Cunningham|Helen Cunningham|Orphaned Child|2004 Tragedy|Cunningham Family
Which actor was best known for playing Gordon Cunningham, often called Mr C?|Bernard Latham|Jimmy McKenna|John Graham Davies|Ross Davidson|Medium|Bernard Latham|Gordon Cunningham|Mr C|Actor Casting|Cunningham Family|Classic Character
Who was convicted in 2004 of killing Toby Mills before later being cleared?|Dan Hunter|Lee Hunter|Jake Dean|Ben Davies|Medium|Dan Hunter|Toby Mills|Murder Trial|Wrongful Conviction|2004 Court Case|Ellie Mills
Whose recovered memory helped clear Dan Hunter of Toby Mills' murder in 2004?|Ellie Mills|Steph Dean|Roxy Maguire|Lisa Hunter|Medium|Ellie Mills|Dan Hunter|Toby Mills|Recovered Memory|Court Evidence|2004 Exoneration
Which crime was Ellie Mills convicted of in 2004 over her involvement in the Toby Mills case?|Perverting the course of justice|Armed robbery|Criminal damage|Fraud|Medium|Ellie Mills|Toby Mills|Dan Hunter|Perverting Justice|2004 Conviction|Criminal Trial
Which character set fire to The Loft nightclub in 2004 after a dispute with Darren Osborne?|Scott Anderson|Rob Hawthorne|Justin Burton|Toby Mills|Medium|Scott Anderson|The Loft|Darren Osborne|2004 Arson|Nightclub Fire|Villain Storyline
Which character was Scott Anderson trying to trap inside The Loft during the 2004 fire?|Darren Osborne|Craig Dean|Dan Hunter|Tony Hutchinson|Medium|Darren Osborne|Scott Anderson|The Loft|Arson|Fire Escape|2004 Crime`,
  },
  {
    year: '2004',
    topic: 'Bombhead, Dan Hunter And After Hours',
    facts: `What was the name of Bombhead's mother, whose death triggered his mental health crisis in 2004?|Sandra Burke|Sally Hunter|Liz Burton|Carrie Owen|Medium|Sandra Burke|David Burke|Bombhead|Bereavement|2004 Storyline|Mother Son
Which deceased Hollyoaks character did Bombhead imagine he was still seeing after his mother's death?|Gordon Cunningham|Toby Mills|Rob Hawthorne|Theo Sankofa|Medium|Bombhead|Gordon Cunningham|Sandra Burke|Hallucinations|Grief|2004 Mental Health
Who discovered the body of Bombhead's mother in 2004?|Lee Hunter|Max Cunningham|Tony Hutchinson|Darren Osborne|Medium|Lee Hunter|Sandra Burke|Bombhead|Body Discovery|Hunter Friendship|2004 Revelation
Which Hunter family member was killed in a motorsport accident at Christmas 2004?|Dan Hunter|Lee Hunter|Les Hunter|Ellie Mills|Easy|Dan Hunter|Hunter Family|Christmas 2004|Rally Accident|Fatal Explosion|2004 Exit
What caused Dan Hunter's death during a motor race in 2004?|His car exploded|He fell from a cliff|He drowned in a river|He was hit by a motorcycle|Medium|Dan Hunter|Rally Car|Explosion|Christmas Eve|Motor Racing|Fatal Accident
Which Dean sister was Dan Hunter's girlfriend at the time of his death in 2004?|Debbie Dean|Steph Dean|Frankie Dean|Jude Cunningham|Medium|Debbie Dean|Dan Hunter|2004 Bereavement|Dean Family|Romantic Relationship|Christmas Tragedy
Which character proposed marriage to Tony Hutchinson in July 2004?|Mandy Richardson|Cindy Cunningham|Julie Matthews|Izzy Cornwell|Easy|Mandy Richardson|Tony Hutchinson|2004 Engagement|Marriage Proposal|Richardson Family|Romance
Which actor began playing Russ Owen when the character arrived in 2004?|Stuart Manning|Chris Fountain|Kevin Sacre|Ben Gerrard|Medium|Stuart Manning|Russ Owen|Owen Family|Actor Casting|2004 Arrival|New Character
Which 2004 Hollyoaks late-night spin-off followed Lisa Hunter on a trip to Paris?|Hollyoaks: After Hours|Hollyoaks: Leap of Faith|Hollyoaks: Lost Weekend|Hollyoaks: Movin' On|Easy|After Hours|Lisa Hunter|Paris|2004 Spin Off|Late Night Drama|Special Series
How many episodes were in the 2004 spin-off Hollyoaks: After Hours?|Four|Three|Five|Six|Medium|After Hours|Four Part Series|July 2004|Lisa Hunter|Joe Spencer|Late Night Spin Off
Which member of the Hunter family travelled to Paris during Hollyoaks: After Hours?|Lisa Hunter|Ellie Hunter|Sally Hunter|Dan Hunter|Easy|Lisa Hunter|After Hours|Paris Trip|Gemma Atkinson|2004 Mini Series|Hunter Family
Which Dean sister experienced an epileptic seizure in a 2004 storyline?|Steph Dean|Debbie Dean|Frankie Dean|Cindy Cunningham|Medium|Steph Dean|Epilepsy|Dean Family|2004 Health Storyline|Neurological Condition|Soap Issue`,
  },
];

const FIRST_ID = 10499;
let index = 0;

const questions = groups.flatMap(group =>
  group.facts.trim().split('\n').map(line => {
    const parts = line.split('|');

    if (parts.length !== 12) {
      throw new Error(
        `Expected six specific tags at question ${index + 1}`
      );
    }

    const [
      question, correctAnswer, wrong1, wrong2, wrong3,
      difficulty, ...individualTags
    ] = parts;

    const id = 'tv_' + String(FIRST_ID + index).padStart(4, '0');
    const answers = [wrong1, wrong2, wrong3];

    if (
      new Set([correctAnswer, ...answers].map(a => a.toLowerCase())).size !== 4
    ) {
      throw new Error(`Repeated answer choice at ${id}`);
    }

    if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
      throw new Error(`Invalid difficulty at ${id}`);
    }

    if (individualTags.some(tag => !tag.trim())) {
      throw new Error(`Empty specific tag at ${id}`);
    }

    answers.splice(index % 4, 0, correctAnswer);

    const item = {
      id,
      category: 'Television',
      question,
      answers,
      correctAnswer,
      difficulty,
      tags: [...new Set([
        'British Television',
        'Soaps',
        'Hollyoaks',
        'Channel 4',
        '2000s',
        group.year,
        correctAnswer,
        ...individualTags
      ])],
      dailyEligible: true
    };

    index += 1;
    return item;
  })
);

const EXPECTED_COUNT = 60;

if (questions.length !== EXPECTED_COUNT) {
  throw new Error(
    `Expected ${EXPECTED_COUNT} questions; got ${questions.length}`
  );
}

if (new Set(questions.map(q => q.id)).size !== questions.length) {
  throw new Error('Repeated question IDs');
}

if (
  new Set(questions.map(q => q.question.toLowerCase())).size !==
  questions.length
) {
  throw new Error('Repeated question text');
}

if (questions.some(q =>
  q.answers.length !== 4 ||
  !q.answers.includes(q.correctAnswer) ||
  q.tags.length < 11 ||
  q.tags.some(t => !t) ||
  q.dailyEligible !== true
)) {
  throw new Error('Incomplete exported question metadata');
}

module.exports = questions;
