// quiz_pack250.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2012
// 100 questions: tv_8884 to tv_8983
// Full, per-question metadata included from creation.
// Do not update quiz_bank.js until the agreed bank connection.

const groups = [
  {
    topic: "Pat And David",
    tags: ["Pat Evans", "David Wicks", "Simon Wicks", "Butcher Family", "January 2012 Farewell"],
    facts: [
      ["Which much-loved Walford matriarch died on New Year's Day 2012?", "Pat Evans", ["Dot Branning", "Peggy Mitchell", "Cora Cross"], "Easy", ["Pat Death", "New Years Day Episode"]],
      ["Where did Pat Evans spend her final moments?", "At her home in Albert Square", ["In a hospital ward", "In a nursing home", "At the Queen Victoria"], "Easy", ["Pat At Home", "Family Farewell"]],
      ["Which of Pat's sons returned to Walford and was with her as she died?", "David Wicks", ["Simon Wicks", "Ricky Butcher", "Kevin Wicks"], "Easy", ["David Return", "Final Bedside Scene"]],
      ["Which actor returned to portray David Wicks during Pat's final episodes?", "Michael French", ["Nick Berry", "Sid Owen", "Phil Daniels"], "Medium", ["Michael French", "David Wicks Casting"]],
      ["Which Branning brother clashed with David Wicks following Pat's death?", "Derek Branning", ["Jack Branning", "Max Branning", "Bradley Branning"], "Easy", ["David Derek Rivalry", "January Conflict"]],
      ["Which former love interest did David Wicks reconnect with after returning for Pat's funeral?", "Carol Jackson", ["Denise Fox", "Sharon Rickman", "Tanya Branning"], "Easy", ["David Carol Romance", "Old Feelings"]],
      ["Which other son of Pat made a surprise appearance after the funeral episode's closing credits?", "Simon Wicks", ["Kevin Wicks", "Ricky Butcher", "Ian Beale"], "Easy", ["Simon Funeral Cameo", "Post Credits Scene"]],
      ["Which actor made a brief return as Simon 'Wicksy' Wicks?", "Nick Berry", ["Michael French", "David Essex", "Sid Owen"], "Medium", ["Nick Berry", "Surprise Cameo"]],
      ["Where did Simon Wicks leave flowers during his surprise appearance?", "On Pat's grave", ["At the Queen Victoria", "At the car lot", "Outside the launderette"], "Medium", ["Simon Flowers", "Graveside Tribute"]],
      ["What special arrangement of the EastEnders theme accompanied Pat's death?", "Pat's Theme", ["Peggy's Theme", "Julia's Waltz", "Walford March"], "Medium", ["Pats Theme", "Special Closing Music"]]
    ]
  },
  {
    topic: "Heather Murder",
    tags: ["Heather Trott", "Ben Mitchell", "Jay Brown", "Shirley Carter", "March 2012 Murder And Cover Up"],
    facts: [
      ["Who killed Heather Trott in her flat?", "Ben Mitchell", ["Andrew Cotton", "Phil Mitchell", "Jay Brown"], "Easy", ["Heather Killer", "March Murder"]],
      ["What everyday object did Ben use to fatally strike Heather?", "A picture frame", ["A frying pan", "A glass bottle", "A heavy book"], "Easy", ["Heather Murder Weapon", "Photo Frame"]],
      ["Which young Mitchell family associate witnessed Heather's killing?", "Jay Brown", ["Billy Mitchell", "Lola Pearce", "Darren Miller"], "Easy", ["Jay Witness", "Secret Kept"]],
      ["Which of Ben's relatives helped cover up Heather's death?", "Phil Mitchell", ["Grant Mitchell", "Peggy Mitchell", "Roxy Mitchell"], "Easy", ["Phil Cover Up", "Protecting Ben"]],
      ["What false impression did Phil try to create at Heather's flat?", "That she had been burgled", ["That there had been a fire", "That she had moved away", "That she had slipped on ice"], "Medium", ["Staged Burglary", "Evidence Concealed"]],
      ["Which friend discovered Heather's body and was devastated by her death?", "Shirley Carter", ["Jane Beale", "Denise Fox", "Janine Butcher"], "Easy", ["Shirley Finds Heather", "Best Friends"]],
      ["Which man was engaged to Heather when she was killed?", "Andrew Cotton", ["Minty Peterson", "Darren Miller", "Michael Moon"], "Easy", ["Heather Andrew Engagement", "Unfulfilled Wedding"]],
      ["Which innocent man was initially arrested as a suspect in Heather's murder?", "Andrew Cotton", ["Jay Brown", "Ricky Butcher", "Masood Ahmed"], "Easy", ["Andrew Wrongly Accused", "Police Investigation"]],
      ["How did Shirley finally realise Ben was Heather's killer?", "He revealed a detail only the killer would know", ["He wrote a confession in a diary", "She saw a photograph of the attack", "He was identified on television"], "Medium", ["Ben Gives Himself Away", "Shirley Discovery"]],
      ["Which offence did Ben ultimately admit to in court over Heather's death?", "Manslaughter", ["Armed robbery", "Kidnapping", "Arson"], "Medium", ["Ben Guilty Plea", "2012 Court Case"]]
    ]
  },
  {
    topic: "Lola Lexi And Olympics",
    tags: ["Lola Pearce", "Lexi Pearce", "Billy Mitchell", "Ben Mitchell", "London 2012 Olympic Torch"],
    facts: [
      ["What name did Lola Pearce give her daughter born during the summer?", "Lexi", ["Lily", "Amy", "Scarlett"], "Easy", ["Lexi Birth", "Baby Daughter"]],
      ["Which Mitchell was the biological father of Lola's baby?", "Ben Mitchell", ["Jay Brown", "Billy Mitchell", "Jack Branning"], "Easy", ["Lexi Paternity", "Ben Father"]],
      ["Which relative of Lola carried the Olympic flame around Albert Square?", "Billy Mitchell", ["Phil Mitchell", "Jay Brown", "Patrick Trueman"], "Easy", ["Billy Torchbearer", "Olympic Relay"]],
      ["What was taking place as Billy carried the Olympic torch through Walford?", "Lola was giving birth", ["The Queen Vic was reopening", "Phil was getting married", "Max was leaving the Square"], "Easy", ["Live Birth Episode", "Olympic Event"]],
      ["Which city hosted the Olympic Games featured in EastEnders' torch relay?", "London", ["Manchester", "Birmingham", "Glasgow"], "Easy", ["London Olympics", "2012 Games"]],
      ["What special broadcasting technique was used for part of Billy's torch-relay episode?", "Live filming", ["Stop-motion animation", "A silent episode", "Black-and-white filming"], "Medium", ["Live Episode Segments", "Olympic Broadcast"]],
      ["What action did social services take after Lola was arrested in the autumn?", "They took baby Lexi into care", ["They awarded her a prize", "They gave Lola a council flat", "They removed Billy from Walford"], "Easy", ["Lexi Taken Into Care", "October Custody Story"]],
      ["Which girl accused Lola of assault, triggering renewed concern for Lexi's welfare?", "Alexa Smith", ["Lucy Beale", "Abi Branning", "Lauren Branning"], "Medium", ["Alexa Smith", "Assault Allegation"]],
      ["Which Mitchell eventually became Lexi's kinship foster carer?", "Phil Mitchell", ["Grant Mitchell", "Billy Mitchell", "Roxy Mitchell"], "Easy", ["Phil Foster Carer", "Lexi Custody"]],
      ["Whom did Phil pretend was his fiancée to strengthen his bid to care for Lexi?", "Sharon Rickman", ["Shirley Carter", "Denise Fox", "Tanya Branning"], "Medium", ["Sharon Fake Engagement", "Fostering Application"]]
    ]
  },
  {
    topic: "Janine Michael And Jean",
    tags: ["Janine Butcher", "Michael Moon", "Scarlett Moon", "Jean Slater", "June 2012 Wedding And Premature Birth"],
    facts: [
      ["Which Moon married Janine Butcher in a lavish summer wedding?", "Michael Moon", ["Alfie Moon", "Tyler Moon", "Anthony Moon"], "Easy", ["Janine Michael Wedding", "June Ceremony"]],
      ["What did Janine do to her prenuptial agreement to prove she trusted Michael?", "She tore it up", ["She hid it in the safe", "She sent it to Derek", "She had it framed"], "Medium", ["Prenup Torn Up", "Wedding Reconciliation"]],
      ["What dramatic medical event interrupted Janine and Michael's wedding celebrations?", "Janine went into premature labour", ["Michael suffered a heart attack", "Janine broke her leg", "The hospital was evacuated"], "Easy", ["Premature Labour", "Wedding Day Emergency"]],
      ["What first name was eventually registered for Janine and Michael's daughter?", "Scarlett", ["Patricia", "Lily", "Lexi"], "Easy", ["Scarlett Moon Name", "Birth Registration"]],
      ["What was Scarlett's middle name, chosen to honour Janine's late stepmother?", "Patricia", ["Margaret", "Barbara", "Victoria"], "Medium", ["Scarlett Patricia Moon", "Pat Tribute"]],
      ["Which Slater did Michael trick into giving him her savings as an investment?", "Jean Slater", ["Kat Moon", "Stacey Slater", "Mo Harris"], "Easy", ["Jean Conned", "Michael Fraud"]],
      ["In what sort of venture did Michael claim he would invest Jean's money?", "A gym", ["A taxi firm", "A restaurant", "A bookshop"], "Medium", ["False Gym Investment", "Jean Savings"]],
      ["What kind of winnings made Jean vulnerable to Michael's first investment scam?", "Scratch-card winnings", ["Lottery jackpot winnings", "Bingo winnings", "Horse-racing winnings"], "Medium", ["Jean Scratch Card", "Savings Stolen"]],
      ["Which Queen Vic funds did Michael also persuade Jean to hand over?", "The pub's VAT money", ["The Christmas decorations budget", "A staff pension fund", "A charity raffle prize"], "Medium", ["Queen Vic VAT", "Second Fraud"]],
      ["Who was left caring for baby Scarlett when Janine temporarily left Walford in September?", "Michael Moon", ["Ricky Butcher", "Alfie Moon", "Shirley Carter"], "Easy", ["Janine September Exit", "Michael Sole Carer"]]
    ]
  },
  {
    topic: "Ian And Sharon Returns",
    tags: ["Ian Beale", "Mandy Salter", "Lucy Beale", "Sharon Rickman", "August 2012 Comebacks And Crisis"],
    facts: [
      ["Which former Walford resident left Ian Beale on what should have been their wedding day?", "Mandy Salter", ["Jane Beale", "Sharon Rickman", "Denise Fox"], "Easy", ["Mandy Leaves Ian", "May Wedding Cancelled"]],
      ["What ultimatum did Lucy issue Ian over his relationship with Mandy?", "Choose between Lucy and Mandy", ["Sell the café or leave", "Move to Devon or stay", "Give up his car or his home"], "Medium", ["Lucy Ultimatum", "Family Conflict"]],
      ["What happened to Ian's mental health after Mandy left him?", "He suffered a breakdown", ["He developed amnesia from a blow", "He suddenly lost his hearing", "He went into a coma"], "Easy", ["Ian Breakdown", "May Disappearance"]],
      ["In what clothing was Ian seen wandering along a road after his breakdown?", "Pyjamas", ["A wedding suit", "A police uniform", "A dressing gown and slippers"], "Medium", ["Ian Pyjamas", "Walking Away"]],
      ["Which Branning daughter recognised homeless Ian while helping at a shelter?", "Lauren Branning", ["Abi Branning", "Alice Branning", "Tiffany Butcher"], "Medium", ["Lauren Finds Ian", "Homeless Shelter"]],
      ["Which Beale daughter temporarily took control of Ian's businesses after his disappearance?", "Lucy Beale", ["Jane Beale", "Cindy Beale", "Bianca Butcher"], "Easy", ["Lucy Beale Business", "Ian Missing"]],
      ["Which former Queen Vic landlady returned to Walford in August with her son?", "Sharon Rickman", ["Peggy Mitchell", "Angie Watts", "Chrissie Watts"], "Easy", ["Sharon August Return", "Long Awaited Comeback"]],
      ["What was the first name of Sharon Rickman's young son?", "Dennis", ["Martin", "Bobby", "James"], "Easy", ["Dennis Rickman Junior", "Sharon Son"]],
      ["Which man, Sharon's jilted fiancé, took her son against her wishes?", "John Hewland", ["Jack Branning", "Phil Mitchell", "Michael Moon"], "Medium", ["John Hewland", "Dennis Kidnapping"]],
      ["Which old friend helped Sharon retrieve her son after the wedding-day kidnapping?", "Phil Mitchell", ["Max Branning", "Ian Beale", "Alfie Moon"], "Easy", ["Phil Helps Sharon", "Dennis Rescue"]]
    ]
  },
  {
    topic: "Syed Christian And Masoods",
    tags: ["Syed Masood", "Christian Clarke", "Amira Shah", "Danny Pennant", "October 2012 Civil Partnership And Exit"],
    facts: [
      ["Which two men entered a civil partnership in October 2012?", "Syed Masood and Christian Clarke", ["Ben Mitchell and Jay Brown", "Michael Moon and Tyler Moon", "Jack Branning and Max Branning"], "Easy", ["Civil Partnership Ceremony", "October Wedding"]],
      ["Which Masood was Syed's mother, who struggled with his relationship?", "Zainab Masood", ["Shabnam Masood", "Cora Cross", "Denise Fox"], "Easy", ["Zainab Family Conflict", "Syed Mother"]],
      ["Which returning woman was the mother of Syed's daughter Yasmin?", "Amira Shah", ["Afia Khan", "Shabnam Masood", "Chelsea Fox"], "Easy", ["Amira Yasmin", "Returning Wife"]],
      ["Which man became close to Syed during his financial troubles and kissed him?", "Danny Pennant", ["Anthony Moon", "Ryan Malloy", "Leon Small"], "Easy", ["Danny Pennant Affair", "Secret Kisses"]],
      ["Which actor played Danny Pennant when he first arrived?", "Gary Lucy", ["John Partridge", "David Witts", "Tony Discipline"], "Medium", ["Gary Lucy", "Danny Casting"]],
      ["Who witnessed Syed kissing Danny during their secret meetings?", "Masood Ahmed", ["Tamwar Masood", "Qadim Shah", "Ian Beale"], "Medium", ["Masood Sees Kiss", "Syed Danny Secret"]],
      ["Which Masood family restaurant was burdened by serious financial problems?", "The Argee Bhajee", ["The Queen Victoria", "The Dagmar", "Scarlet"], "Medium", ["Argee Bhajee Debts", "Family Restaurant"]],
      ["In which month did Syed and Christian leave Albert Square together?", "November", ["March", "June", "September"], "Medium", ["November Departure", "Couple Exit"]],
      ["Which Masood brother's wife, Afia, left after their marriage broke down?", "Tamwar", ["Syed", "Kamil", "AJ"], "Easy", ["Afia Tamwar Separation", "Marriage Breakdown"]],
      ["Which relative of Masood Ahmed arrived and was widely known by the initials AJ?", "His younger brother", ["His eldest son", "His father-in-law", "His uncle"], "Medium", ["AJ Ahmed Arrival", "Masood Brother"]]
    ]
  },
  {
    topic: "Kat Derek And Christmas",
    tags: ["Kat Moon", "Alfie Moon", "Derek Branning", "Max Branning", "December 2012 Affair Reveal And Christmas"],
    facts: [
      ["Which Branning was finally exposed as Kat Moon's mystery lover?", "Derek Branning", ["Jack Branning", "Max Branning", "Michael Moon"], "Easy", ["Kat Affair Culprit", "December Reveal"]],
      ["Whose wife was Kat when she began the secret affair?", "Alfie Moon's", ["Michael Moon's", "Jack Branning's", "Phil Mitchell's"], "Easy", ["Kat Alfie Marriage", "Infidelity"]],
      ["Which of the five suspects was a pub chef and Morgan Jackson's father?", "Ray Dixon", ["Jack Branning", "Michael Moon", "Derek Branning"], "Medium", ["Mystery Lover Suspects", "Ray Dixon"]],
      ["How many men were originally presented as possible partners in Kat's mystery affair?", "Five", ["Two", "Three", "Seven"], "Medium", ["Five Suspects", "Whodunit Format"]],
      ["Which Branning brothers remained among the final suspects after Michael and Ray were ruled out?", "Derek, Max and Jack", ["Bradley, Jim and Derek", "Max, Bradley and Oscar", "Derek, Jim and Oscar"], "Medium", ["Branning Suspects", "Mystery Narrowed"]],
      ["Which festive-season date saw viewers learn the identity of Kat's lover?", "20 December", ["5 November", "1 January", "14 February"], "Medium", ["20 December 2012", "Affair Unmasked"]],
      ["What did Derek manipulate to make Alfie believe Kat still wanted him?", "A voicemail message", ["A forged marriage certificate", "A bank transfer", "A newspaper article"], "Medium", ["Derek Voicemail Trick", "Kat Alfie Breakup"]],
      ["Which Max Branning secret did Derek arrange to reveal at Christmas?", "Max had another wife", ["Max owned the Queen Vic", "Max was moving abroad", "Max had won the lottery"], "Easy", ["Max Secret Marriage", "Kirsty Arrival"]],
      ["What first name did Max's secret wife give when she arrived at Christmas?", "Kirsty", ["Vanessa", "Rachel", "Tanya"], "Easy", ["Kirsty Branning", "Christmas Doorstep Revelation"]],
      ["How did Derek Branning die following a bitter Christmas family confrontation?", "He suffered a heart attack", ["He fell from a roof", "He was stabbed", "He died in a car crash"], "Easy", ["Derek Christmas Death", "Fatal Heart Attack"]]
    ]
  },
  {
    topic: "Joey Alice Cora And Ava",
    tags: ["Derek Branning", "Joey Branning", "Alice Branning", "Lauren Branning", "Cora Cross And Ava Hartman"],
    facts: [
      ["Which young woman arrived as Derek Branning's estranged daughter?", "Alice Branning", ["Lauren Branning", "Abi Branning", "Kirsty Branning"], "Easy", ["Alice Arrival", "Derek Daughter"]],
      ["Which actor played Derek's son Joey Branning?", "David Witts", ["Jamie Foreman", "Scott Maslen", "Jake Wood"], "Medium", ["David Witts", "Joey Casting"]],
      ["Which young Branning woman fell in love with her cousin Joey?", "Lauren Branning", ["Abi Branning", "Alice Branning", "Tanya Branning"], "Easy", ["Lauren Joey Romance", "Cousin Relationship"]],
      ["Which actress played Derek Branning's daughter Alice on her arrival?", "Jasmyn Banks", ["Jacqueline Jossa", "Jo Joyner", "Hetti Bywater"], "Medium", ["Jasmyn Banks", "Alice Casting"]],
      ["Which of the cousins was driving during Lauren and Joey's crash?", "Lauren Branning", ["Joey Branning", "Alice Branning", "Abi Branning"], "Easy", ["Lauren Driving", "November Car Crash"]],
      ["Who rushed to rescue Lauren and Joey before their crashed car exploded?", "Derek Branning", ["Max Branning", "Jack Branning", "Phil Mitchell"], "Medium", ["Derek Rescue", "Car Explosion"]],
      ["Which long-lost daughter of Cora Cross was found in November?", "Ava Hartman", ["Rainie Cross", "Tanya Branning", "Shabnam Masood"], "Easy", ["Ava Rediscovered", "Cora Daughter"]],
      ["What work was Ava Hartman doing when Tanya tracked her down?", "Deputy headteacher", ["Police constable", "Hospital nurse", "Solicitor"], "Medium", ["Ava School Job", "Deputy Head"]],
      ["Which neighbour helped Tanya trace Cora's estranged daughter Ava?", "Patrick Trueman", ["Ian Beale", "Alfie Moon", "Phil Mitchell"], "Medium", ["Patrick Helps Tanya", "Family Search"]],
      ["Which actress portrayed Ava Hartman on her arrival?", "Clare Perkins", ["Ann Mitchell", "Jo Joyner", "Diane Parish"], "Medium", ["Clare Perkins", "Ava Casting"]]
    ]
  },
  {
    topic: "Bianca Ray And The Foxes",
    tags: ["Bianca Butcher", "Carol Jackson", "Morgan Jackson", "Ray Dixon", "Kim Fox And Financial Hardship"],
    facts: [
      ["Which mother was imprisoned after stealing money while desperately trying to support her children?", "Bianca Butcher", ["Carol Jackson", "Sharon Rickman", "Roxy Mitchell"], "Easy", ["Bianca Theft", "Poverty Storyline"]],
      ["What hardship pushed Bianca towards her desperate theft?", "Serious money problems", ["A gambling debt from Las Vegas", "A failed nightclub purchase", "An unpaid film contract"], "Easy", ["Bianca Financial Hardship", "Family Poverty"]],
      ["Which family member took care of Bianca's children while she was in prison?", "Carol Jackson", ["Kat Moon", "Peggy Mitchell", "Denise Fox"], "Easy", ["Carol Cares For Family", "Bianca Prison"]],
      ["In which month did Bianca make her return from prison?", "November", ["February", "June", "August"], "Medium", ["Bianca November Return", "Prison Release"]],
      ["What vocational skill did Bianca learn in prison before working at the salon?", "Hairdressing", ["Car mechanics", "Accountancy", "Cooking"], "Medium", ["Bianca Hairdressing Qualification", "Salon Trial"]],
      ["Which newcomer was revealed to be Morgan Jackson's biological father?", "Ray Dixon", ["Ricky Butcher", "Tony King", "Michael Moon"], "Easy", ["Ray Morgan Father", "New Father Revealed"]],
      ["Which of Bianca's daughters helped Morgan contact his father Ray?", "Whitney Dean", ["Tiffany Butcher", "Lauren Branning", "Lucy Beale"], "Easy", ["Whitney Finds Ray", "Morgan Family Reunion"]],
      ["Which Fox sister began dating Ray Dixon?", "Kim Fox", ["Denise Fox", "Chelsea Fox", "Libby Fox"], "Easy", ["Kim Ray Romance", "New Relationship"]],
      ["What was the first name of Ray Dixon's daughter from another relationship?", "Sasha", ["Scarlett", "Amy", "Yasmin"], "Medium", ["Sasha Dixon", "Ray Daughter"]],
      ["Which pub employed Ray Dixon as a chef and barman?", "The Queen Victoria", ["The Dagmar", "The Swan", "The Albert"], "Easy", ["Ray Pub Chef", "Queen Vic Work"]]
    ]
  },
  {
    topic: "Other Walford Highlights",
    tags: ["Lucy Beale", "AJ Ahmed", "Kim Fox", "Phil Mitchell", "2012 Casting And New Businesses"],
    facts: [
      ["Which actress took over the role of Lucy Beale when she returned in January?", "Hetti Bywater", ["Melissa Suffield", "Madeline Duggan", "Jacqueline Jossa"], "Medium", ["Hetti Bywater", "Lucy Recast"]],
      ["Which newly arrived Branning briefly dated Lucy Beale before his romance with Lauren?", "Joey Branning", ["Derek Branning", "Jack Branning", "Max Branning"], "Medium", ["Lucy Joey Relationship", "New Branning Romance"]],
      ["For which family occasion did Lucy Beale return to Walford?", "Pat Evans's funeral", ["Ian Beale's birthday", "Ricky Butcher's wedding", "Denise Fox's engagement"], "Easy", ["Lucy Return", "Pat Funeral"]],
      ["What was the name of Masood Ahmed's mischievous younger brother introduced in July?", "AJ Ahmed", ["Syed Masood", "Kamil Masood", "Yusef Khan"], "Easy", ["AJ Ahmed Debut", "New Masood Relative"]],
      ["Which actor portrayed Masood's brother AJ?", "Phaldut Sharma", ["Nitin Ganatra", "Marc Elliott", "Ace Bhatti"], "Medium", ["Phaldut Sharma", "AJ Performer"]],
      ["What object did AJ use to make decisions about whether to stay in Walford?", "A coin", ["A pack of cards", "A wristwatch", "A dartboard"], "Medium", ["AJ Lucky Coin", "Coin Toss Decisions"]],
      ["Whose car did AJ and Masood damage during a mischievous outing?", "Derek Branning's", ["Phil Mitchell's", "Ian Beale's", "Jack Branning's"], "Medium", ["Derek Car Damaged", "Masood AJ Mishap"]],
      ["Which Fox sister opened a bed-and-breakfast business in Walford?", "Kim Fox", ["Denise Fox", "Chelsea Fox", "Libby Fox"], "Easy", ["Kim Bed And Breakfast", "Business Launch"]],
      ["Who was given the role of Michael Moon in the 2012 Janine storyline?", "Steve John Shepherd", ["Tony Discipline", "David Witts", "Shane Richie"], "Medium", ["Steve John Shepherd", "Michael Moon Actor"]],
      ["Which actress made her debut as Max Branning's secret wife Kirsty at Christmas?", "Kierston Wareing", ["Jo Joyner", "Maggie O'Neill", "Lindsey Coulson"], "Medium", ["Kierston Wareing", "Kirsty Christmas Casting"]]
    ]
  }
];

let index = 0;
const questions = groups.flatMap(group => group.facts.map(
  ([question, correctAnswer, wrongAnswers, difficulty, detailTags]) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);
    const item = {
      id: "tv_" + String(8884 + index).padStart(4, "0"),
      category: "Television",
      question,
      answers,
      correctAnswer,
      difficulty,
      tags: [...new Set([
        "British Television", "Soaps", "EastEnders", "2012",
        group.topic, ...group.tags, correctAnswer, ...detailTags
      ])],
      dailyEligible: true
    };
    index += 1;
    return item;
  }
));

module.exports = questions;
