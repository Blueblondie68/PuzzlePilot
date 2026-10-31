// quiz_pack254.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2016
// 100 questions: tv_9284 to tv_9383
// Comprehensive per-question tags from creation.
// Leave quiz_bank.js unchanged until the agreed bank connection.

const groups = [
  {
    topic: "Peggy And The Mitchells",
    tags: ["Peggy Mitchell", "Phil Mitchell", "Grant Mitchell", "Barbara Windsor", "May 2016 Final Farewell"],
    facts: [
      ["Which former Queen Vic landlady died after her cancer returned?", "Peggy Mitchell", ["Pat Evans", "Angie Watts", "Dot Branning"], "Easy", ["Peggy Death", "Terminal Cancer"]],
      ["Which actress made her final appearance as Peggy Mitchell?", "Barbara Windsor", ["Pam St Clement", "June Brown", "Gillian Taylforth"], "Easy", ["Barbara Windsor Farewell", "Peggy Performer"]],
      ["In which month did Peggy Mitchell die?", "May", ["January", "August", "December"], "Medium", ["17 May 2016", "Death Broadcast Month"]],
      ["Which of Peggy's old friends appeared to her in a vision before her death?", "Pat Evans", ["Ethel Skinner", "Pauline Fowler", "Angie Watts"], "Easy", ["Pat Apparition", "Final Scenes"]],
      ["Which actress returned briefly to play Pat in Peggy's last episode?", "Pam St Clement", ["Wendy Richard", "Barbara Windsor", "June Brown"], "Medium", ["Pam St Clement Cameo", "Farewell Hallucination"]],
      ["Which actor returned to play Grant Mitchell during Peggy's final storyline?", "Ross Kemp", ["Steve McFadden", "Perry Fenwick", "Scott Maslen"], "Easy", ["Ross Kemp Return", "Grant Mitchell Casting"]],
      ["Which country was Grant Mitchell living in when he returned to see Peggy?", "Portugal", ["Spain", "Australia", "France"], "Medium", ["Grant Portugal Home", "Mitchell Reunion"]],
      ["What illness was responsible for Peggy's decision to end her own life?", "Terminal cancer", ["Motor neurone disease", "Alzheimer's disease", "Heart failure"], "Easy", ["Cancer Diagnosis", "Peggy Suicide Storyline"]],
      ["What did Peggy take in a fatal overdose in her final episode?", "Medication", ["Alcohol", "Household cleaner", "Sleeping gas"], "Easy", ["Peggy Medication Overdose", "Final Decision"]],
      ["Which London pub was most closely associated with Peggy's years as landlady?", "The Queen Victoria", ["The Albert", "The Dagmar", "The Swan"], "Easy", ["Queen Victoria Pub", "Peggy Landlady Legacy"]]
    ]
  },
  {
    topic: "Bobby And Jane",
    tags: ["Bobby Beale", "Jane Beale", "Ian Beale", "Lucy Beale", "May 2016 Attack And Sentencing"],
    facts: [
      ["Which Beale attacked his stepmother Jane with a hockey stick?", "Bobby Beale", ["Peter Beale", "Steven Beale", "Ian Beale"], "Easy", ["Bobby Attacks Jane", "Hockey Stick"]],
      ["Which member of Bobby's family was seriously injured in that attack?", "Jane Beale", ["Kathy Beale", "Lauren Branning", "Cindy Williams"], "Easy", ["Jane Victim", "Hospitalisation"]],
      ["What sporting equipment did Bobby use when he attacked Jane?", "A hockey stick", ["A cricket bat", "A golf club", "A baseball bat"], "Easy", ["Hockey Stick Weapon", "Family Violence"]],
      ["Which earlier death did Bobby confess to after attacking Jane?", "Lucy Beale's", ["Heather Trott's", "Archie Mitchell's", "Michael Moon's"], "Easy", ["Lucy Murder Confession", "Police Interview"]],
      ["Which detective inspector remained involved in investigating the Beale family?", "Samantha Keeble", ["Emma Summerhayes", "Jack Branning", "Marsden"], "Medium", ["DI Samantha Keeble", "Beale Investigation"]],
      ["How long was Bobby sentenced to detention for killing Lucy and attacking Jane?", "Three years", ["Six months", "Seven years", "Twelve years"], "Medium", ["Three Year Sentence", "Concurrent Sentences"]],
      ["What serious problem did Jane experience as she recovered from Bobby's attack?", "Difficulty moving her legs", ["Permanent loss of hearing", "Blindness", "Loss of speech"], "Easy", ["Jane Mobility Impairment", "Spinal Injury Recovery"]],
      ["Which Beale family member had sent Bobby away to boarding school before the attack?", "Ian Beale", ["Peter Beale", "Kathy Beale", "Martin Fowler"], "Easy", ["Bobby Boarding School", "Ian Protects Son"]],
      ["Which man was freed after being wrongly imprisoned for Lucy Beale's murder?", "Max Branning", ["Jack Branning", "Phil Mitchell", "Jake Stone"], "Easy", ["Max Released", "Wrongful Conviction Reversed"]],
      ["Which Beale returned with Lauren and baby Louie after Jane was hospitalised?", "Steven Beale", ["Peter Beale", "Bobby Beale", "David Wicks"], "Easy", ["Steven Beale Returns", "Lauren And Louie From New Zealand"]]
    ]
  },
  {
    topic: "Stacey And The Fowlers",
    tags: ["Stacey Slater", "Martin Fowler", "Arthur Fowler", "Kush Kazemi", "2016 Postpartum Psychosis And Wedding"],
    facts: [
      ["What condition affected Stacey following the birth of baby Arthur?", "Postpartum psychosis", ["Amnesia", "Dementia", "Epilepsy"], "Easy", ["Postpartum Psychosis", "Maternal Mental Health"]],
      ["What frightening belief did Stacey develop about baby Arthur?", "That he was the son of God", ["That he had been swapped at birth", "That he was seriously allergic to milk", "That he could predict the future"], "Medium", ["Religious Delusion", "Arthur Fowler"]],
      ["Where did Stacey stand with Arthur during a dangerous episode of her illness?", "On a rooftop", ["On a railway track", "On a bridge over the canal", "In the Queen Vic cellar"], "Easy", ["Stacey Rooftop Scene", "January Crisis"]],
      ["Which man persuaded Stacey to seek hospital treatment?", "Martin Fowler", ["Kush Kazemi", "Max Branning", "Phil Mitchell"], "Easy", ["Martin Helps Stacey", "Hospital Care"]],
      ["What kind of specialist unit eventually allowed Stacey to recover alongside Arthur?", "A mother and baby unit", ["An intensive care ward", "A rehabilitation hostel", "A private boarding school"], "Medium", ["Mother And Baby Unit", "Psychiatric Treatment"]],
      ["Which charity specialising in postpartum psychosis advised EastEnders on Stacey's story?", "Action on Postpartum Psychosis", ["The British Heart Foundation", "Macmillan Cancer Support", "Sands"], "Medium", ["Action On Postpartum Psychosis", "Storyline Consultation"]],
      ["Which man was revealed to be Arthur's biological father?", "Kush Kazemi", ["Martin Fowler", "Ryan Malloy", "Max Branning"], "Easy", ["Arthur Paternity", "Kush Father"]],
      ["Which Masood left Walford with her daughter Jade after the breakdown of her marriage to Kush?", "Shabnam Masood", ["Zainab Masood", "Amira Shah", "Afia Khan"], "Easy", ["Shabnam February Exit", "Jade Leaves With Mother"]],
      ["Which couple married shortly after Peggy Mitchell's death?", "Stacey Slater and Martin Fowler", ["Ronnie Mitchell and Jack Branning", "Lee Carter and Whitney Dean", "Shabnam Masood and Kush Kazemi"], "Easy", ["Stacey Martin Wedding", "May 2016"]],
      ["Which new relative of Stacey revealed he was a transgender man?", "Kyle Slater", ["Ryan Malloy", "Sean Slater", "Bradley Branning"], "Medium", ["Kyle Slater", "Transgender Brother Storyline"]]
    ]
  },
  {
    topic: "Mick Linda And Ollie",
    tags: ["Mick Carter", "Linda Carter", "Ollie Carter", "Nancy Carter", "2016 Carter Wedding And Family Crisis"],
    facts: [
      ["Which couple finally married on New Year's Day 2016?", "Mick Carter and Linda Carter", ["Kat and Alfie Moon", "Stacey and Martin Fowler", "Ronnie and Jack Branning"], "Easy", ["Mick Linda Wedding", "1 January 2016"]],
      ["What unusual garment did Mick wear for his wedding to Linda?", "Linda's pink dressing gown", ["A Santa Claus costume", "A police uniform", "A football shirt"], "Easy", ["Pink Dressing Gown", "Wedding Outfit"]],
      ["What novelty footwear went with Mick's unusual wedding outfit?", "Flamingo slippers", ["Rabbit slippers", "Football boots", "Roller skates"], "Medium", ["Flamingo Slippers", "Wedding Comedy"]],
      ["Which man fought Mick in a lake immediately before the wedding ceremony?", "Dean Wicks", ["Buster Briggs", "Phil Mitchell", "Lee Carter"], "Easy", ["Mick Dean Lake Fight", "Wedding Day Rescue"]],
      ["Which of Mick and Linda's young children was hospitalised after a fall from a high chair?", "Ollie", ["Johnny", "Lee", "Nancy"], "Easy", ["Ollie Head Injury", "March 2016"]],
      ["Which two Carter siblings were arguing when Ollie's high chair was knocked over?", "Nancy and Lee", ["Johnny and Lee", "Tina and Shirley", "Mick and Dean"], "Medium", ["Nancy Lee Argument", "Accidental Fall"]],
      ["What kind of injury did doctors discover after Ollie's seizure?", "Bleeding on the brain", ["A broken arm", "A punctured lung", "An injured ankle"], "Easy", ["Subdural Haemorrhage", "Ollie Hospital Tests"]],
      ["Which Carter daughter left Walford with Tamwar Masood to go travelling?", "Nancy Carter", ["Tina Carter", "Linda Carter", "Whitney Dean"], "Easy", ["Nancy Tamwar Travel Exit", "April Departure"]],
      ["Which actor replaced Sam Strike as Johnny Carter when he returned?", "Ted Reilly", ["Danny-Boy Hatchard", "Matt Di Angelo", "Danny Dyer"], "Medium", ["Ted Reilly", "Johnny Recast"]],
      ["What verdict did Dean Wicks receive in his trial for the attempted rape of Roxy?", "Not guilty", ["Guilty", "No verdict reached", "Case dismissed before trial"], "Medium", ["Dean August Trial", "Attempted Rape Acquittal"]]
    ]
  },
  {
    topic: "Paul Ben And The Cokers",
    tags: ["Paul Coker", "Ben Mitchell", "Pam Coker", "Les Coker", "2016 Homophobic Murder And Aftermath"],
    facts: [
      ["Which young Coker family member was killed in a homophobic attack?", "Paul Coker", ["Les Coker", "Johnny Carter", "Jay Brown"], "Easy", ["Paul Murder", "Homophobic Attack"]],
      ["Which Mitchell was Paul Coker's boyfriend?", "Ben Mitchell", ["Phil Mitchell", "Billy Mitchell", "Grant Mitchell"], "Easy", ["Ben Paul Relationship", "Bereaved Boyfriend"]],
      ["In which month was Paul killed?", "July", ["January", "April", "November"], "Medium", ["July 2016", "Paul Death Month"]],
      ["Which family members had raised Paul and ran Walford's funeral directors?", "Les and Pam Coker", ["Phil and Sharon Mitchell", "Mick and Linda Carter", "Ian and Jane Beale"], "Easy", ["Paul Grandparents", "Coker And Sons"]],
      ["Which of the attackers was named Simon Atmore?", "The gang's ringleader", ["Paul's work colleague", "Ben's solicitor", "The investigating detective"], "Medium", ["Simon Atmore", "Hate Crime Perpetrator"]],
      ["Which Carter helped Ben identify an attacker by photographing a car number plate?", "Johnny Carter", ["Lee Carter", "Mick Carter", "Dean Wicks"], "Medium", ["Johnny Car Photograph", "Suspect Identification"]],
      ["Who discovered that Les was being blackmailed about his female alter ego Christine?", "Pam Coker", ["Kathy Beale", "Donna Yates", "Sharon Mitchell"], "Medium", ["Pam Discovers Blackmail", "Christine Secret"]],
      ["Which Carter relative was secretly blackmailing Les Coker?", "Babe Smith", ["Shirley Carter", "Tina Carter", "Linda Carter"], "Easy", ["Babe Blackmails Les", "Christine Photographs"]],
      ["What funeral business did the Cokers operate?", "Coker & Sons", ["Moon & Sons", "Mitchell & Sons", "Beale's Place"], "Easy", ["Coker Undertakers", "Walford Funeral Directors"]],
      ["Which pair left Walford after the death of their grandson Paul?", "Les and Pam Coker", ["Phil and Sharon Mitchell", "Ian and Kathy Beale", "Jack and Ronnie Branning"], "Easy", ["Cokers October Exit", "Bereavement Departure"]]
    ]
  },
  {
    topic: "Phil Louise And Denise",
    tags: ["Phil Mitchell", "Louise Mitchell", "Denise Fox", "Sharon Mitchell", "2016 Liver Disease And Pregnancy"],
    facts: [
      ["Which organ was failing as Phil Mitchell's alcoholism took its toll?", "His liver", ["His kidneys", "His heart", "His lungs"], "Easy", ["Phil Liver Failure", "Alcohol Illness"]],
      ["What life-saving operation was Phil waiting for throughout the year?", "A liver transplant", ["A heart transplant", "A kidney transplant", "A lung transplant"], "Easy", ["Transplant Waiting List", "Organ Donation"]],
      ["On which festive day did Phil learn that a donor liver was available?", "Christmas Day", ["Bonfire Night", "Halloween", "New Year's Eve"], "Easy", ["Christmas 2016", "Donor Liver Available"]],
      ["Which national organisation advised the programme about Phil's transplant story?", "NHS Blood and Transplant", ["The Royal National Lifeboat Institution", "The National Trust", "The British Red Cross"], "Medium", ["NHS Blood And Transplant", "Clinical Storyline Research"]],
      ["Which Mitchell daughter returned to the Square as a teenager?", "Louise Mitchell", ["Lexi Pearce", "Amy Mitchell", "Janet Mitchell"], "Easy", ["Louise Teen Return", "Mitchell Daughter"]],
      ["Which actress began playing Louise Mitchell in 2016?", "Tilly Keeper", ["Brittany Papple", "Jasmine Armfield", "Jacqueline Jossa"], "Medium", ["Tilly Keeper", "Louise Recast"]],
      ["Who was Louise Mitchell's mother?", "Lisa Fowler", ["Sharon Mitchell", "Kathy Beale", "Roxy Mitchell"], "Easy", ["Lisa Fowler", "Louise Parentage"]],
      ["Which Fox sister discovered she was pregnant by Phil Mitchell?", "Denise Fox", ["Kim Fox", "Chelsea Fox", "Libby Fox"], "Easy", ["Denise Pregnant", "Phil Baby Father"]],
      ["What did Denise consider doing after the birth of her baby?", "Having the baby adopted", ["Moving to Australia", "Giving the child to Phil immediately", "Changing her name and leaving"], "Easy", ["Adoption Plan", "Denise Pregnancy Decision"]],
      ["Which relative offered to adopt Denise's baby with her husband Vincent?", "Kim Fox", ["Chelsea Fox", "Libby Fox", "Sharon Mitchell"], "Easy", ["Kim Offers Adoption", "Vincent Hubbard"]]
    ]
  },
  {
    topic: "Grant And Mark Junior",
    tags: ["Grant Mitchell", "Michelle Fowler", "Mark Fowler Junior", "Courtney Mitchell", "2016 Hidden Fatherhood Revelation"],
    facts: [
      ["Which son of Michelle Fowler arrived in Walford for the first time?", "Mark Fowler Jr", ["Martin Fowler", "Arthur Fowler", "Peter Beale"], "Easy", ["Mark Junior First Appearance", "August Arrival"]],
      ["Who was Mark Fowler Jr's biological father?", "Grant Mitchell", ["Phil Mitchell", "Tim Andrews", "Den Watts"], "Easy", ["Grant Mark Paternity", "Long Held Family Secret"]],
      ["Which actress had originally portrayed Mark Jr's mother Michelle Fowler?", "Susan Tully", ["Jenna Russell", "Letitia Dean", "Gillian Taylforth"], "Medium", ["Susan Tully", "Original Michelle Casting"]],
      ["Which actor first played Mark Fowler Jr on screen in 2016?", "Ned Porteous", ["Ross Kemp", "James Bye", "Ben Hardy"], "Medium", ["Ned Porteous", "Mark Junior Actor"]],
      ["Which of Grant's daughters returned and met Mark without knowing he was her half-brother?", "Courtney Mitchell", ["Louise Mitchell", "Amy Mitchell", "Lexi Pearce"], "Easy", ["Courtney Returns", "Half Siblings Unaware"]],
      ["Who was Courtney Mitchell's late mother?", "Tiffany Mitchell", ["Sharon Mitchell", "Kathy Beale", "Sam Mitchell"], "Easy", ["Tiffany Mitchell", "Courtney Mother"]],
      ["Which woman was Michelle Fowler's best friend and helped conceal Mark's paternity?", "Sharon Mitchell", ["Kathy Beale", "Jane Beale", "Kat Moon"], "Easy", ["Sharon Keeps Secret", "Michelle Friendship"]],
      ["Which country had Mark grown up in with his mother and stepfather?", "The United States", ["Australia", "South Africa", "Portugal"], "Easy", ["Mark American Upbringing", "Tim Andrews"]],
      ["Which Mitchell brother told Grant that Mark was his son?", "Phil Mitchell", ["Billy Mitchell", "Ben Mitchell", "Charlie Cotton"], "Easy", ["Phil Reveals Paternity", "Grant Learns Truth"]],
      ["Which returned Fowler family member did Jenna Russell first portray on Christmas Eve?", "Michelle Fowler", ["Pauline Fowler", "Vicki Fowler", "Sonia Fowler"], "Easy", ["Jenna Russell", "Christmas Eve 2016 Recast"]]
    ]
  },
  {
    topic: "Lee Whitney And Depression",
    tags: ["Lee Carter", "Whitney Dean", "Mick Carter", "Queen Victoria Pub", "2016 Depression Debt And Robbery"],
    facts: [
      ["Which Carter son married Whitney Dean in November?", "Lee Carter", ["Johnny Carter", "Dean Wicks", "Mick Carter"], "Easy", ["Lee Whitney Wedding", "November Ceremony"]],
      ["Which actress played Whitney during her wedding storyline?", "Shona McGarty", ["Maisie Smith", "Maddy Hill", "Kellie Bright"], "Medium", ["Shona McGarty", "Whitney Casting"]],
      ["Which actor portrayed Lee Carter during his depression storyline?", "Danny-Boy Hatchard", ["Danny Dyer", "Ted Reilly", "Matt Di Angelo"], "Medium", ["Danny Boy Hatchard", "Lee Performer"]],
      ["What pregnancy-related tragedy did Whitney experience before the wedding?", "A miscarriage", ["The birth of twins", "An adoption refusal", "An ectopic pregnancy operation"], "Easy", ["Whitney Miscarriage", "October 2016"]],
      ["What type of job left Lee feeling increasingly under pressure?", "A call-centre sales job", ["A police training role", "A teaching placement", "A hospital nursing job"], "Easy", ["Call Centre Employment", "Workplace Pressure"]],
      ["What mental health condition was explored through Lee's storyline?", "Depression", ["Dementia", "Schizophrenia", "Amnesia"], "Easy", ["Lee Depression", "Mental Health Awareness"]],
      ["What financial difficulty did Lee conceal from Whitney?", "Mounting debts", ["An unpaid inheritance tax bill", "An overseas mortgage", "A lost business investment in America"], "Easy", ["Lee Financial Debts", "Marriage Secrets"]],
      ["Who arranged for criminals to rob the Queen Vic to raise money?", "Lee Carter", ["Mick Carter", "Johnny Carter", "Phil Mitchell"], "Easy", ["Lee Organises Pub Robbery", "December 2016"]],
      ["Which colleague of Lee was involved in organising the Queen Vic robbery?", "Oz Bolat", ["Kush Kazemi", "Tamwar Masood", "Steven Beale"], "Medium", ["Oz Bolat", "Call Centre Criminal Plot"]],
      ["Where was Lee standing when a car-park attendant helped him during his mental health crisis?", "On the roof of a car park", ["On a railway platform", "On the roof of the Queen Vic", "On a bridge over the Thames"], "Medium", ["Car Park Roof", "December 2016 Crisis"]]
    ]
  },
  {
    topic: "Masoods And Young Walford",
    tags: ["Tamwar Masood", "Shakil Kazemi", "Bex Fowler", "Carmel Kazemi", "2016 Young Relationships And Departures"],
    facts: [
      ["Which Masood left with Nancy Carter to travel the world?", "Tamwar Masood", ["Syed Masood", "AJ Ahmed", "Kamil Masood"], "Easy", ["Tamwar Travelling", "Nancy Carter Departure"]],
      ["What job had Tamwar been doing before leaving Walford?", "Market inspector", ["Police officer", "Hospital porter", "Pub chef"], "Easy", ["Tamwar Market Inspector", "Job Resignation"]],
      ["Which Kazemi teenager arrived as Kush's younger brother?", "Shakil Kazemi", ["Darius Kazemi", "Arthur Fowler", "Ryan Malloy"], "Easy", ["Shakil Arrival", "Kush Younger Brother"]],
      ["Which actor played Shakil Kazemi from his debut?", "Shaheen Jafargholi", ["Davood Ghadami", "Ned Porteous", "Ricky Norwood"], "Medium", ["Shaheen Jafargholi", "Shakil Casting"]],
      ["Which woman was mother to both Kush and Shakil Kazemi?", "Carmel Kazemi", ["Shabnam Masood", "Zainab Masood", "Kathy Beale"], "Easy", ["Carmel Mother", "Kazemi Family"]],
      ["Which Fowler teenager began a romance with Shakil?", "Bex Fowler", ["Lily Slater", "Louise Mitchell", "Abi Branning"], "Easy", ["Bex Shakil Relationship", "Walford High Teens"]],
      ["Which actress played the teenage Bex Fowler in 2016?", "Jasmine Armfield", ["Tilly Keeper", "Maisie Smith", "Lorna Fitzgerald"], "Medium", ["Jasmine Armfield", "Bex Casting"]],
      ["Which Mitchell teenager was jealous when Shakil began dating Bex?", "Louise Mitchell", ["Amy Mitchell", "Lexi Pearce", "Courtney Mitchell"], "Easy", ["Louise Jealousy", "Teenage Triangle"]],
      ["Which relative was Bex Fowler's mother?", "Sonia Fowler", ["Stacey Slater", "Rebecca Miller", "Sharon Mitchell"], "Easy", ["Sonia Bex Mother", "Fowler Family"]],
      ["Which longstanding Masood father left Walford in November before later returns?", "Masood Ahmed", ["AJ Ahmed", "Syed Masood", "Yusef Khan"], "Medium", ["Masood November Departure", "Nitin Ganatra"]]
    ]
  },
  {
    topic: "Ronnie Roxy And Christmas",
    tags: ["Ronnie Mitchell", "Roxy Mitchell", "Jack Branning", "Max Branning", "2016 Christmas And New Year Preparations"],
    facts: [
      ["Which Branning became engaged to Ronnie Mitchell towards the end of 2016?", "Jack Branning", ["Max Branning", "Derek Branning", "Joey Branning"], "Easy", ["Ronnie Jack Engagement", "Wedding Plans"]],
      ["For which day did Ronnie and Jack plan their wedding?", "New Year's Day 2017", ["Christmas Day 2016", "Valentine's Day 2017", "Boxing Day 2016"], "Medium", ["Wedding Planned For 2017", "Year Boundary"]],
      ["Which little boy was Ronnie raising from her marriage to Charlie Cotton?", "Matthew", ["Ricky", "James", "Arthur"], "Easy", ["Matthew Cotton", "Ronnie Son"]],
      ["What was the name of Roxy Mitchell's daughter with Jack Branning?", "Amy", ["Lexi", "Lily", "Pearl"], "Easy", ["Amy Mitchell", "Jack Roxy Daughter"]],
      ["Which of Ronnie's sisters was expected to be at her wedding to Jack?", "Roxy Mitchell", ["Sam Mitchell", "Louise Mitchell", "Sharon Mitchell"], "Easy", ["Roxy Sister", "Wedding Family"]],
      ["Which couple's planned move to Ongar became part of the New Year storyline?", "Ronnie and Jack", ["Mick and Linda", "Kat and Alfie", "Ian and Jane"], "Medium", ["Ongar Move Plan", "New Family Home"]],
      ["Which character returned at Christmas after being cleared of Lucy Beale's murder?", "Max Branning", ["Derek Branning", "Jack Branning", "Joey Branning"], "Easy", ["Max Christmas Return", "Wrongful Conviction Aftermath"]],
      ["Which actor reprised his role as Max Branning for the Christmas return?", "Jake Wood", ["Scott Maslen", "Jamie Foreman", "David Witts"], "Medium", ["Jake Wood", "Max Casting"]],
      ["Which longtime workplace did Dot Branning prepare to leave over Christmas?", "The launderette", ["The Queen Vic", "The Arches", "The market office"], "Medium", ["Dot Branning", "Christmas Launderette Departure"]],
      ["In what year did Ronnie and Roxy's fatal swimming-pool tragedy actually occur?", "2017", ["2016", "2015", "2018"], "Medium", ["1 January 2017", "End Of 2016 Timeline Boundary"]]
    ]
  }
];

let index = 0;
const questions = groups.flatMap(group => group.facts.map(
  ([question, correctAnswer, wrongAnswers, difficulty, detailTags]) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);
    const item = {
      id: "tv_" + String(9284 + index).padStart(4, "0"),
      category: "Television",
      question,
      answers,
      correctAnswer,
      difficulty,
      tags: [...new Set([
        "British Television", "Soaps", "EastEnders", "2016",
        group.topic, ...group.tags, correctAnswer, ...detailTags
      ])],
      dailyEligible: true
    };
    index += 1;
    return item;
  }
));

module.exports = questions;
