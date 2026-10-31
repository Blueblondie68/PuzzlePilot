 // quiz_pack264.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2026 (to 31 October only)
// 80 questions: tv_10284 to tv_10363
// Verified year-to-date coverage; no unaired November/December storylines.
// Every exported question receives question-specific tags, without
// unrelated tags from neighbouring questions.
// Leave quiz_bank.js unchanged until this pack is approved.

// Each line: question | correct answer | three wrong answers | difficulty | three specific tags.
const groups = [
  {
    topic: "New Year Flash Forward And Jasmine Trial",
    facts: `To which year did EastEnders jump in its New Year's Day flash-forward episode?|2027|2028|2029|2030|Easy|New Years Day|Future Timeline|Flash Forward
Whose wedding day was shown in the flash-forward?|Max Branning's|Phil Mitchell's|Jack Branning's|Peter Beale's|Easy|Max Wedding|Future Bride|January Episode
Which two of Max's children were shown in danger at gunpoint in the flash-forward?|Lauren and Oscar|Abi and Bradley|Louie and Jimmy|Amy and Ricky|Medium|Lauren Branning|Oscar Branning|Gunpoint Threat
Who was revealed in January to have killed Anthony Trueman?|Jasmine Fisher|Zoe Slater|Chrissie Watts|Kat Moon|Easy|Jasmine Killer Reveal|Anthony Trueman|January 2026
What household object did Jasmine use to strike Anthony fatally?|A salt lamp|A glass vase|An iron|A table clock|Medium|Salt Lamp|Anthony Death|Self Defence
Which woman had been wrongly suspected of killing Anthony and was imprisoned?|Zoe Slater|Vicki Fowler|Cindy Beale|Ruby Allen|Easy|Zoe Wrongly Accused|Murder Investigation|False Arrest
How was Anthony Trueman related to Jasmine Fisher?|He was her biological father|He was her uncle|He was her stepbrother|He was her grandfather|Easy|Jasmine Paternity|Anthony Father|Family Revelation
Which former Walford resident did Kat wrongly suspect of Anthony's murder?|Chrissie Watts|Ruby Allen|Shirley Carter|Bianca Jackson|Medium|Kat Suspects Chrissie|Christmas Mystery|False Lead
What verdict did Jasmine receive at her murder trial in April?|Not guilty|Guilty of murder|Guilty of manslaughter|The jury could not reach a verdict|Easy|Jasmine Acquitted|April Trial|Self Defence Verdict
What was the name of Jasmine Fisher's twin brother who came to Walford?|Josh Goodwin|Joel Marshall|Oscar Branning|Ryder Hawkins|Easy|Josh Goodwin|Separated Twins|Zoe Children`,
  },
  {
    topic: "Zoe Slater And Family Farewell",
    facts: `Which actor joined EastEnders as Zoe Slater's long-lost son Josh Goodwin?|Joshua Vaughan|Pierre Counihan-Moullier|Max Murray|Lewis Bridgeman|Medium|Joshua Vaughan|Josh Actor|New Casting
What was the first name of Josh Goodwin's adoptive mother?|Sandra|Julie|Gemma|Gloria|Medium|Sandra Goodwin|Adoptive Mother|Josh Family
Which actress played Josh Goodwin's adoptive mother?|Dawn Steele|Patricia Potter|Kellie Bright|Gillian Wright|Medium|Dawn Steele|Sandra Casting|Guest Character
Which old family vehicle did Zoe seek out shortly before her death?|Charlie Slater's taxi|Alfie Moon's campervan|Phil Mitchell's car|Ian Beale's van|Easy|Charlie Taxi|Zoe Final Story|Family Memories
What caused the fatal injury that led to Zoe's death in September?|A fall in which she hit her head|A fire in the Queen Vic|A car collision|A stabbing outside the pub|Easy|Accidental Head Injury|Zoe Death Cause|September 2026
Which woman found Zoe dead in her bedroom?|Kat Moon|Jean Slater|Cindy Beale|Sharon Watts|Easy|Kat Finds Zoe|Mother Daughter|Bedroom Discovery
Which man was the last person to see Zoe alive before her death?|Max Branning|Jack Branning|Phil Mitchell|Anthony Trueman|Medium|Max Last Visitor|Zoe Final Night|Unanswered Questions
Which special variation of the EastEnders theme played as Zoe's body was taken away?|Julia's Theme|Kathy's Theme|The Archers theme|The Wedding March|Medium|Julias Theme|Zoe Farewell|September Episode
In which month was Zoe Slater's funeral held?|October|August|July|December|Easy|Zoe Funeral|October 2026|Slater Farewell
Which two of Zoe's children delivered eulogies at her funeral?|Jasmine and Josh|Lily and Charli|Lauren and Oscar|Gina and Anna|Medium|Jasmine Fisher|Josh Goodwin|Funeral Eulogies`,
  },
  {
    topic: "Nigel Bates And The Mitchells",
    facts: `Which former Albert Square resident died after living with young-onset dementia?|Nigel Bates|Grant Mitchell|Alfie Moon|Patrick Trueman|Easy|Nigel Death|Dementia Storyline|April 2026
What illness complicated Nigel's final weeks before his death?|Pneumonia|Chickenpox|Appendicitis|Malaria|Medium|Nigel Pneumonia|End Of Life|Nursing Home
Which woman was Nigel's wife during his final illness?|Julie Bates|Clare Bates|Yolande Trueman|Kathy Beale|Easy|Julie Bates|Nigel Wife|Family Care
In which month did Walford hold Nigel's funeral?|May|February|August|October|Medium|Nigel Funeral|May 2026|Community Tribute
Which of Nigel's relatives returned for the funeral as Clare Bates?|His stepdaughter|His sister|His cousin|His mother|Medium|Clare Bates|Stepdaughter Returns|Family Mourning
Which young man from Nigel's past also returned for his funeral?|Josh Saunders|Joel Marshall|Josh Goodwin|Roman Fowler|Medium|Josh Saunders|Old Walford Face|Funeral Return
Which actress reprised her role as Clare Bates for the funeral?|Gemma Bissix|Michelle Ryan|Jacqueline Jossa|Dawn Steele|Medium|Gemma Bissix|Clare Actress|Special Return
Which longtime friend of Nigel was deeply affected by his death?|Phil Mitchell|Ian Beale|George Knight|Harvey Monroe|Easy|Phil Friendship|Nigel Loss|Mitchell Grief
What personal belonging of Nigel's was Phil given before the funeral?|His wristwatch|His wedding ring|His flat keys|His football scarf|Medium|Nigel Wristwatch|Funeral Gift|Memory Of Friend
Which gangster held Mark Fowler Junior hostage around Nigel's funeral?|Russell Delaney|Nish Panesar|Gray Atkins|Dean Wicks|Medium|Russell Delaney|Mark Hostage|Grant Family`,
  },
  {
    topic: "Vicki Ross Ian And Jordan",
    facts: `Which man was Vicki Fowler preparing to marry in May?|Ross Marshall|Zack Hudson|Mark Fowler|Teddy Mitchell|Easy|Ross Marshall|Vicki Wedding|May 2026
With whom did Vicki have a secret affair before her planned wedding?|Zack Hudson|Phil Mitchell|Ravi Gulati|George Knight|Easy|Zack Affair|Vicki Betrayal|Secret Romance
What wedding role did Zack have despite his secret relationship with the bride?|Best man|Father of the bride|Registrar|Wedding photographer|Medium|Zack Best Man|Ross Betrayal|Wedding Tension
Which family member carried Vicki into the wedding venue after she was delayed?|Mark Fowler Junior|Ian Beale|Peter Beale|Ross Marshall|Medium|Mark Fowler Junior|Vicki Entrance|Wedding Arrival
Which woman had warned Vicki against continuing her affair with Zack?|Kathy Beale|Kim Fox|Elaine Peacock|Cindy Beale|Medium|Kathy Warning|Vicki Secret|Family Concern
Which long-standing Walford resident accidentally struck Jordan Fox with a car?|Ian Beale|Jack Branning|Phil Mitchell|Alfie Moon|Easy|Ian Accident|Jordan Fox|June 2026
Which Walford mother was devastated when her son Jordan was injured?|Chelsea Fox|Denise Fox|Kim Fox|Sharon Watts|Easy|Chelsea Fox|Jordan Mother|Traffic Incident
Which offence led to Ian's arrest after the collision?|Driving over the alcohol limit|Car theft|Driving without insurance|Dangerous cycling|Easy|Ian Drink Driving|Breathalyser|Police Arrest
How long was the prison sentence handed to Ian Beale in July?|Eight months|Two years|Three weeks|Five years|Medium|Ian Sentence|July 2026|Custodial Term
In which month did Ian return to Walford after his imprisonment?|October|February|April|December|Medium|Ian Return|October 2026|Prison Aftermath`,
  },
  {
    topic: "Denise Fox Illness And Family",
    facts: `Which form of blood cancer was Denise Fox diagnosed with?|Acute myeloid leukaemia|Chronic lymphocytic leukaemia|Hodgkin lymphoma|Multiple myeloma|Medium|Acute Myeloid Leukaemia|AML|Denise Diagnosis
What unexplained symptom prompted concern before Denise's diagnosis?|Persistent tiredness|Sudden blindness|A broken arm|Repeated nosebleeds alone|Easy|Denise Fatigue|Early Symptoms|Health Concern
Which Mitchell woman encouraged Denise to seek medical advice?|Sam Mitchell|Honey Mitchell|Nicola Mitchell|Sharon Watts|Medium|Sam Mitchell|Seek Medical Help|Friend Support
Which charity advised EastEnders on Denise's leukaemia storyline?|Blood Cancer UK|Cancer Research Wales|Mind|Macmillan Nurses only|Medium|Blood Cancer UK|Medical Consultation|Storyline Research
What kind of donor was sought as part of Denise's treatment?|A stem cell donor|A kidney donor|A cornea donor|A blood platelet donor only|Medium|Stem Cell Donor|Donor Search|AML Treatment
What was the name of Denise's previously unknown paternal half-brother?|Darnell Larson Junior|George Knight|Howie Danes|Patrick Trueman|Medium|Darnell Larson Jr|Paternal Half Brother|New Relative
What was the first name of Darnell's daughter who also arrived in Walford?|Grace|Amy|Charli|Jasmine|Medium|Grace Larson|Darnell Daughter|Family Arrival
How was Jordan Fox related to Denise?|He was her grandson|He was her cousin|He was her brother|He was her nephew|Easy|Jordan Grandson|Chelsea Son|Family Relationship
Which mobility aid did Jordan need after his injuries in the road accident?|A wheelchair|A walking stick only|A white cane|A prosthetic arm|Medium|Jordan Wheelchair|Accident Aftermath|Rehabilitation
Which detective was Denise's partner while she faced her cancer treatment?|Jack Branning|Craig Ingram|Callum Highway|Ravi Gulati|Easy|Jack Branning|Denise Partner|Family Support`,
  },
  {
    topic: "Two Weddings And Baby Secrets",
    facts: `Which woman did Max Branning marry during September's double wedding week?|Cindy Beale|Linda Carter|Priya Nandra-Hart|Sharon Watts|Easy|Max Cindy Wedding|September 2026|Marriage
Which couple held their wedding on the same day as Max and Cindy?|Kim Fox and Howie Danes|Kat Slater and Alfie Moon|Lauren Branning and Peter Beale|Suki Panesar and Eve Unwin|Easy|Kim Howie Wedding|Double Wedding|September
What medical emergency did Max suffer around his wedding speech?|Cardiac arrest|Appendicitis|A broken ankle|A stroke|Medium|Max Cardiac Arrest|Wedding Collapse|Hospital
Which woman did Max say he truly loved after his wedding to Cindy?|Linda Carter|Priya Nandra-Hart|Denise Fox|Lauren Branning|Easy|Max Linda Romance|Marriage Breakdown|Love Confession
With which woman had Max also been having an affair before his wedding?|Priya Nandra-Hart|Kathy Beale|Suki Panesar|Jean Slater|Easy|Max Priya Affair|Infidelity|Paternity Crisis
Whose paternity test showed he was the father of Priya's unborn baby?|Max Branning|Ravi Gulati|Jack Branning|Vinny Panesar|Medium|Priya Baby Paternity|Max Father|August Reveal
Which man was hoping to marry Priya despite her pregnancy secret?|Ravi Gulati|Vinny Panesar|Peter Beale|George Knight|Easy|Ravi Priya Engagement|Family Plans|Secret Pregnancy
Which Panesar man believed he was the father of Penny Branning's baby?|Vinny Panesar|Nish Panesar|Kheerat Panesar|Jags Panesar|Easy|Vinny Panesar|Penny Pregnancy|Assumed Father
Which Mitchell man could instead be Penny's baby's biological father?|Harry Mitchell|Phil Mitchell|Billy Mitchell|Teddy Mitchell|Medium|Harry Mitchell|Paternity Doubts|Past Fling
Was Penny and Vinny's baby born a boy or a girl?|A boy|A girl|Twins|Triplets|Easy|Penny Son|September Birth|Newborn Baby`,
  },
  {
    topic: "George Suki And The Hawkins Family",
    facts: `Which terminal illness did George Knight's adoptive father Eddie reveal on his return?|Lung cancer|Bowel cancer|Brain cancer|Leukaemia|Medium|Eddie Knight|Terminal Lung Cancer|May 2026
Which of George's fathers died during the June storyline?|Eddie Knight|Henry Kofi Asare|Patrick Trueman|Archie Mitchell|Easy|Eddie Death|George Family|June 2026
What was the first name of the child Suki and Eve began fostering?|Ria|Lily|Amy|Charli|Easy|Ria Virdi|Foster Daughter|Suki Eve
Which actress played foster child Ria Virdi?|Aaria Sharma|Indeyarna Donaldson-Holness|Ellie Dadd|Kitty Castledine|Medium|Aaria Sharma|Ria Actress|Young Cast
Which surname belonged to Nicola Mitchell's newly arrived relatives?|Hawkins|Trueman|Slater|Branning|Easy|Hawkins Family|New Arrivals|August 2026
What was the first name of Nicola's sister who arrived with a husband and son?|Gemma|Jodie|Rose|Julie|Easy|Gemma Hawkins|Nicola Sister|Family Return
What was the first name of Gemma Hawkins's husband?|Ned|Ryder|Craig|Joel|Easy|Ned Hawkins|Gemma Husband|New Character
What was the first name of Gemma and Ned's son?|Ryder|Josh|Oscar|Barney|Easy|Ryder Hawkins|Gemma Son|Teen Newcomer
Which woman was Nicola, Gemma and Jodie's mother?|Rose Hawkins|Julie Bates|Elaine Peacock|Gloria Knight|Medium|Rose Hawkins|Family Matriarch|Generations
Which younger sister of Nicola also joined the Hawkins family in Walford?|Jodie Hawkins|Clare Bates|Vicki Fowler|Sandra Goodwin|Easy|Jodie Hawkins|Youngest Sister|Hawkins Clan`,
  },
  {
    topic: "Amy Craig And The Carters In October",
    facts: `Which detective manipulated and groomed Amy Mitchell in 2026?|Craig Ingram|Jack Branning|Callum Highway|Denzel Danes|Easy|Craig Ingram|Amy Grooming|Police Officer
What was Craig Ingram's position when he first became close to Amy?|Detective constable|School headteacher|Social worker|Football coach|Medium|DC Craig Ingram|Police Position|Abuse Of Trust
Which policeman was Amy Mitchell's father and Craig's colleague?|Jack Branning|Phil Mitchell|Max Branning|Ravi Gulati|Easy|Jack Branning|Amy Father|Police Colleague
Which late Mitchell woman was Amy's mother?|Roxy Mitchell|Ronnie Mitchell|Sam Mitchell|Louise Mitchell|Easy|Roxy Mitchell|Amy Mother|Family History
With whom did Amy leave Walford in October, prompting a police search?|Craig Ingram|Denzel Danes|Oscar Branning|Ricky Branning|Easy|Amy Disappears|Craig Escape|October 2026
Which of Jack's brothers helped search for Amy after she vanished?|Max Branning|Derek Branning|Bradley Branning|Jim Branning|Easy|Max Searches|Jack Brother|Missing Teen
For whom was Nancy Carter acting as a surrogate when she returned pregnant?|Lee Carter and Jess Fang|Johnny Carter and Callum Highway|Zack Hudson and Whitney Dean|Peter Beale and Lauren Branning|Easy|Nancy Surrogacy|Lee Carter|October Return
What was the full name of Lee Carter's estranged partner involved in the surrogacy?|Jess Fang|Gemma Hawkins|Jodie Hawkins|Priya Nandra-Hart|Medium|Jess Fang|Lee Partner|Surrogacy Dispute
Which addiction was Lee Carter struggling with when he returned to Walford?|Alcohol|Gambling|Prescription painkillers|Cocaine|Easy|Lee Alcoholism|Linda Support|October 2026
Of which Walford venue did Ned Hawkins become a co-owner in October?|Harry's Barn|The Queen Vic|Peacock Palace|The Prince Albert|Medium|Ned Co Owner|Harrys Barn|October Business`,
  },
];

let index = 0;
const questions = groups.flatMap(group => group.facts.trim().split("\n").map(line => {
  const parts = line.split("|");
  if (parts.length !== 9) throw new Error(`Invalid data at question ${index + 1}`);
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, tag1, tag2, tag3] = parts;
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  const item = {
    id: "tv_" + String(10284 + index).padStart(4, "0"),
    category: "Television",
    question,
    answers,
    correctAnswer,
    difficulty,
    tags: [...new Set([
      "British Television", "Soaps", "EastEnders", "2026",
      "2020s", "Walford", "BBC Soap",
      correctAnswer, tag1, tag2, tag3
    ])],
    dailyEligible: true
  };
  index += 1;
  return item;
}));

if (questions.length !== 80) throw new Error(`Expected 80 questions; got ${questions.length}`);
module.exports = questions;
