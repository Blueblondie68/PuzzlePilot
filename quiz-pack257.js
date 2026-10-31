// quiz_pack257.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2019
// 100 questions: tv_9584 to tv_9683
// Complete per-question tags created alongside the questions.
// Do not change quiz_bank.js until the agreed bank connection.

const groups = [
  {
    topic: "Ray Mel And Hunter",
    tags: ["Mel Owen", "Ray Kelly", "Hunter Owen", "January 2019 Wedding And Murder", "Owen Family"],
    facts: [
      ["Which former policeman married Mel Owen on New Year's Day?", "Ray Kelly", ["Jack Branning", "Phil Mitchell", "Stuart Highway"], "Easy", ["Ray Mel Wedding", "1 January 2019"]],
      ["What secret about Ray's marriages did Mel uncover before the wedding?", "He had other wives", ["He had never been married", "He was secretly married to Sharon", "He was Hunter's brother"], "Easy", ["Ray Bigamy", "Marriage Deception"]],
      ["What charge led to Ray's arrest immediately after the ceremony?", "Bigamy", ["Arson", "Armed robbery", "Kidnapping"], "Easy", ["Ray Arrested", "Wedding Police Intervention"]],
      ["Which young man shot Ray Kelly dead while defending his mother?", "Hunter Owen", ["Ben Mitchell", "Keanu Taylor", "Jay Brown"], "Easy", ["Hunter Kills Ray", "3 January 2019"]],
      ["Where did Hunter fatally shoot Ray after Ray attacked Mel?", "In woodland", ["Inside the Queen Vic", "At E20 nightclub", "In the Arches garage"], "Easy", ["Ray Shot In Woods", "Mel In Danger"]],
      ["Which two women interrupted Ray and Mel’s wedding to expose his other marriages?", "Maddie and Nicola", ["Lisa and Louise", "Sharon and Kathy", "Ruby and Stacey"], "Medium", ["Ray Other Wives", "Wedding Interruption"]],
      ["What garden tool did Ray brandish while threatening Mel and Hunter in the woods?", "A shovel", ["A rake", "An axe", "A hoe"], "Medium", ["Ray With Shovel", "Woodland Confrontation"]],
      ["Who helped Hunter conceal Ray's body after the shooting?", "Mel Owen", ["Louise Mitchell", "Sharon Mitchell", "Ruby Allen"], "Easy", ["Ray Body Concealed", "Mother Protects Son"]],
      ["Which Branning alerted the police after promising to help Mel and Hunter escape?", "Jack Branning", ["Max Branning", "Lauren Branning", "Rainie Branning"], "Medium", ["Jack Calls Police", "Hunter Arrest"]],
      ["What did Mel do with her car while trying to escape Ray in the woods?", "She reversed into him", ["She drove into a lake", "She set it alight", "She crashed into a police van"], "Medium", ["Mel Reverses Into Ray", "January Car Escape"]]
    ]
  },
  {
    topic: "Queen Vic Siege And Mels Exit",
    tags: ["Hunter Owen", "Mel Owen", "Queen Victoria Pub", "September 2019 Siege", "November 2019 Car Crash"],
    facts: [
      ["Which escaped prisoner took hostages in the Queen Vic in September?", "Hunter Owen", ["Ray Kelly", "Ben Mitchell", "Leo King"], "Easy", ["Hunter Siege", "Prison Escape"]],
      ["Which pregnant Mitchell was taken hostage by Hunter during the siege?", "Louise Mitchell", ["Sharon Mitchell", "Lisa Fowler", "Lola Pearce"], "Easy", ["Louise Hostage", "Siege Threat"]],
      ["Which Mitchell man was shot in the stomach during Hunter's rampage?", "Ben Mitchell", ["Phil Mitchell", "Billy Mitchell", "Jay Brown"], "Easy", ["Ben Gunshot Injury", "Pub Siege"]],
      ["Which nurse helped save Ben's life after he was shot?", "Sonia Fowler", ["Denise Fox", "Jean Slater", "Linda Carter"], "Easy", ["Sonia Emergency Aid", "Ben Resuscitated"]],
      ["Which Taylor was shot in the arm while trying to protect Louise?", "Keanu Taylor", ["Keegan Baker", "Chatham Taylor", "Mitch Baker"], "Easy", ["Keanu Shot", "Louise Rescue"]],
      ["Who shot Hunter Owen dead to end the Queen Vic siege?", "An armed police officer", ["Mel Owen", "Phil Mitchell", "Keanu Taylor"], "Easy", ["Hunter Police Shooting", "6 September 2019"]],
      ["Which grieving mother cradled Hunter after the shooting?", "Mel Owen", ["Lisa Fowler", "Sharon Mitchell", "Kathy Beale"], "Easy", ["Mel Grieves Hunter", "September Death"]],
      ["What vehicle struck and killed Mel Owen in November?", "A lorry", ["A taxi", "A motorbike", "An ambulance"], "Easy", ["Mel Road Death", "14 November 2019"]],
      ["Who pulled Mel from her crashed car shortly before she was killed?", "Sharon Mitchell", ["Lisa Fowler", "Louise Mitchell", "Ruby Allen"], "Easy", ["Sharon Rescues Mel", "Car Crash Aftermath"]],
      ["Whose voice did Mel imagine hearing before she stepped into the road?", "Hunter's", ["Ray's", "Steve's", "Jack's"], "Medium", ["Mel Hears Hunter", "Grief And Hallucination"]]
    ]
  },
  {
    topic: "Ben Callum And Pride",
    tags: ["Ben Mitchell", "Callum Highway", "Whitney Dean", "2019 Ballum Romance", "Prince Albert Bar"],
    facts: [
      ["Which actor took over the role of Ben Mitchell when he returned in 2019?", "Max Bowden", ["Harry Reid", "Joshua Pascoe", "Charlie Jones"], "Medium", ["Max Bowden", "Ben Recast"]],
      ["Which woman returned to Walford with Ben and their daughter Lexi?", "Lola Pearce", ["Abi Branning", "Ruby Allen", "Whitney Dean"], "Easy", ["Lola Returns", "Lexi Pearce"]],
      ["Which undertaker began a relationship with Ben after struggling with his sexuality?", "Callum Highway", ["Jay Brown", "Johnny Carter", "Paul Coker"], "Easy", ["Ben Callum Romance", "Sexuality Storyline"]],
      ["Which of Callum’s relatives initially tried to keep him away from Ben?", "Stuart Highway", ["Mick Carter", "Phil Mitchell", "Jay Brown"], "Easy", ["Stuart Opposes Ballum", "Protective Older Brother"]],
      ["Who was Callum supposed to marry before their wedding was abandoned?", "Whitney Dean", ["Ruby Allen", "Tiffany Butcher", "Lola Pearce"], "Easy", ["Whitney Callum Cancelled Wedding", "September 2019"]],
      ["Which former Butcher returned to Walford for Whitney's planned wedding?", "Bianca Jackson", ["Janine Butcher", "Carol Jackson", "Pat Evans"], "Easy", ["Bianca Returns", "Wedding Guest"]],
      ["Which man was Callum's openly homophobic father?", "Jonno Highway", ["Stuart Highway", "Mick Carter", "Les Coker"], "Medium", ["Jonno Highway", "Callum Comes Out"]],
      ["What fan nickname became popular for the romance between Ben and Callum?", "Ballum", ["Sheanu", "Stax", "Kalfie"], "Easy", ["Ballum Fan Name", "Same Sex Relationship"]],
      ["Who reopened the old Albert bar as a new gay venue?", "Kathy Beale", ["Sharon Mitchell", "Kim Fox", "Ruby Allen"], "Easy", ["Kathy Opens Bar", "June 2019"]],
      ["What name was given to Walford's newly opened gay bar?", "The Prince Albert", ["The Pink Flamingo", "Scarlet", "The Dagmar"], "Easy", ["Prince Albert Opening", "LGBTQ Community Venue"]]
    ]
  },
  {
    topic: "Sharon Keanu And Christmas",
    tags: ["Sharon Mitchell", "Keanu Taylor", "Phil Mitchell", "Louise Mitchell", "Christmas 2019 Affair Revelation"],
    facts: [
      ["Which younger man was having a secret affair with Sharon Mitchell?", "Keanu Taylor", ["Ben Mitchell", "Jack Branning", "Kush Kazemi"], "Easy", ["Sharon Keanu Affair", "Secret Relationship"]],
      ["Who was Sharon's husband when the affair threatened the Mitchell family?", "Phil Mitchell", ["Grant Mitchell", "Ian Beale", "Jack Branning"], "Easy", ["Sharon Phil Marriage", "Infidelity"]],
      ["Which of Phil's daughters was also expecting Keanu's baby?", "Louise Mitchell", ["Lola Pearce", "Courtney Mitchell", "Amy Mitchell"], "Easy", ["Louise Pregnant", "Keanu Double Relationship"]],
      ["What first name did Louise and Keanu give their daughter born in December?", "Peggy", ["Mel", "Sharon", "Lisa"], "Easy", ["Peggy Taylor Birth", "6 December 2019"]],
      ["After which late Mitchell matriarch was Louise's daughter named?", "Peggy Mitchell", ["Ronnie Mitchell", "Roxy Mitchell", "Aunt Sal"], "Easy", ["Peggy Namesake", "Great Grandmother"]],
      ["Which grieving woman blackmailed Sharon using knowledge of the baby's father?", "Mel Owen", ["Ruby Allen", "Lisa Fowler", "Denise Fox"], "Easy", ["Mel Blackmails Sharon", "Paternity Secret"]],
      ["Who was revealed as the father of Sharon's unborn child rather than Phil?", "Keanu Taylor", ["Ian Beale", "Grant Mitchell", "Jack Branning"], "Easy", ["Unborn Child Paternity", "Sheanu Secret"]],
      ["During which holiday did Phil finally confront Sharon over her affair?", "Christmas Day", ["Easter Sunday", "Halloween", "Bonfire Night"], "Easy", ["Phil Christmas Revenge", "25 December 2019"]],
      ["Which Fowler was ordered by Ben to kill Keanu during the Christmas crisis?", "Martin Fowler", ["Arthur Fowler", "Bex Fowler", "Mark Fowler Jr"], "Easy", ["Martin Ordered To Kill Keanu", "Christmas Threat"]],
      ["Which woman was Keanu's mother and feared for his safety after Christmas?", "Karen Taylor", ["Carmel Kazemi", "Kim Fox", "Shirley Carter"], "Easy", ["Karen Worried For Keanu", "Taylor Family"]]
    ]
  },
  {
    topic: "Tiffany Keegan And Leo",
    tags: ["Tiffany Butcher", "Keegan Baker", "Whitney Dean", "Evie Steele", "2019 Grooming And Teenage Marriage"],
    facts: [
      ["Which gang leader continued manipulating Tiffany into drug dealing early in the year?", "Evie Steele", ["Ruby Allen", "Louise Mitchell", "Mel Owen"], "Easy", ["Evie County Lines Grooming", "Drugs Exploitation"]],
      ["Which family member was Tiffany living with when she returned to Walford?", "Whitney Dean", ["Janine Butcher", "Bianca Jackson", "Carol Jackson"], "Easy", ["Whitney Tiffany Family", "Teen Return"]],
      ["Which actor played Keegan Baker during his romance with Tiffany?", "Zack Morris", ["Danny Walters", "Shaheen Jafargholi", "Charlie Winter"], "Medium", ["Zack Morris", "Keegan Casting"]],
      ["Which teenager known as Rat collapsed after swallowing a drug during a run with Tiffany?", "Cameron Morris", ["Jagger Rawley", "Hunter Owen", "Shakil Kazemi"], "Medium", ["Cameron Rat Morris", "January Drug Run"]],
      ["Which Taylor teenager married Tiffany Butcher in November?", "Keegan Baker", ["Keanu Taylor", "Bernadette Taylor", "Shakil Kazemi"], "Easy", ["Keegan Tiffany Wedding", "8 November 2019"]],
      ["To which country did Tiffany and Keegan travel when they planned to elope?", "Scotland", ["Wales", "Ireland", "France"], "Easy", ["Scotland Elopement", "Secret Wedding Plan"]],
      ["Which Mitchell friend alerted their families to the proposed elopement?", "Louise Mitchell", ["Lola Pearce", "Sharon Mitchell", "Lexi Pearce"], "Medium", ["Louise Tells Family", "Runaway Wedding"]],
      ["Which Taylor teenager was hospitalised after taking drugs supplied through Tiffany?", "Keegan Baker", ["Keanu Taylor", "Chatham Taylor", "Riley Taylor"], "Easy", ["Keegan MDMA Scare", "March 2019"]],
      ["Which newcomer was revealed as the son of Whitney's former abuser Tony King?", "Leo King", ["Hunter Owen", "Callum Highway", "Ray Kelly"], "Easy", ["Leo King Arrival", "Tony King Son"]],
      ["Which actor was cast as Leo King?", "Tom Wells", ["Tony Clay", "Ricky Champ", "Charlie Winter"], "Medium", ["Tom Wells", "Leo Casting"]]
    ]
  },
  {
    topic: "Jean Sean And Daniel",
    tags: ["Jean Slater", "Sean Slater", "Daniel Cook", "Stacey Fowler", "2019 Ovarian Cancer And Mental Health"],
    facts: [
      ["What type of cancer was Jean Slater diagnosed with?", "Ovarian cancer", ["Lung cancer", "Leukaemia", "Skin cancer"], "Easy", ["Jean Diagnosis", "February 2019"]],
      ["What treatment did Jean receive after her cancer diagnosis?", "Chemotherapy", ["Dialysis", "A heart transplant", "Radiotherapy alone"], "Easy", ["Jean Chemotherapy", "Hospital Treatment"]],
      ["Which estranged Slater son returned after learning Jean was ill?", "Sean Slater", ["Ryan Malloy", "Kyle Slater", "Bradley Branning"], "Easy", ["Sean Returns", "April 2019"]],
      ["Which actor reprised his role as Sean Slater?", "Rob Kazinsky", ["Charlie Clements", "Neil McDermott", "James Bye"], "Medium", ["Rob Kazinsky", "Sean Casting"]],
      ["Which late Mitchell sister had previously been married to Sean?", "Roxy Mitchell", ["Ronnie Mitchell", "Sam Mitchell", "Louise Mitchell"], "Easy", ["Sean Roxy Marriage", "Learns Of Her Death"]],
      ["Which charity advised the programme on Sean's suicidal crisis?", "Samaritans", ["Sands", "Shelter", "RNLI"], "Medium", ["Samaritans Consultation", "Sean Mental Health"]],
      ["Which fellow cancer patient befriended Jean during chemotherapy?", "Daniel Cook", ["Dr Legg", "Arshad Ahmed", "Ted Murray"], "Easy", ["Daniel Meets Jean", "Cancer Treatment Friendship"]],
      ["What was the unusual deception Daniel used to distance himself from Jean?", "He faked his death", ["He invented a twin brother", "He pretended to move to Australia", "He claimed to be a doctor"], "Easy", ["Daniel Fakes Death", "Protecting Jean From Grief"]],
      ["When did Daniel return to Jean and reveal that he was still alive?", "Christmas Day", ["Valentine's Day", "Easter Sunday", "Halloween"], "Medium", ["Daniel Christmas Return", "25 December 2019"]],
      ["Which actress played Jean during the cancer storyline?", "Gillian Wright", ["Lacey Turner", "Laila Morse", "Jessie Wallace"], "Medium", ["Gillian Wright", "Jean Casting"]]
    ]
  },
  {
    topic: "Chantelle Gray And Taylors",
    tags: ["Chantelle Atkins", "Gray Atkins", "Karen Taylor", "Mitch Baker", "2019 Domestic Abuse Storyline"],
    facts: [
      ["Which previously unseen daughter of Karen Taylor arrived with her family?", "Chantelle Atkins", ["Bernadette Taylor", "Louise Mitchell", "Bailey Baker"], "Easy", ["Chantelle Arrival", "March 2019"]],
      ["Which actress played Chantelle Atkins?", "Jessica Plummer", ["Lorraine Stanley", "Clair Norris", "Diane Parish"], "Medium", ["Jessica Plummer", "Chantelle Casting"]],
      ["What was the first name of Chantelle's controlling husband?", "Gray", ["Greg", "Gavin", "Grant"], "Easy", ["Gray Atkins", "Marriage"]],
      ["What was Gray Atkins's profession when he arrived in Walford?", "Solicitor", ["Police officer", "Surgeon", "Accountant"], "Easy", ["Gray Solicitor", "Professional Career"]],
      ["Which actor portrayed Gray Atkins?", "Toby-Alexander Smith", ["Roger Griffiths", "Danny Walters", "Ricky Champ"], "Medium", ["Toby Alexander Smith", "Gray Casting"]],
      ["What job did Chantelle take after returning to Walford?", "Hairdresser", ["Schoolteacher", "Pub landlady", "Police detective"], "Easy", ["Chantelle Hair Stylist", "Salon Work"]],
      ["What were the names of Chantelle and Gray's two children?", "Mia and Mackenzie", ["Amy and Ricky", "Bert and Ernie", "Lexi and Louie"], "Easy", ["Mia Atkins", "Mackenzie Atkins"]],
      ["What kind of abuse was Gray secretly inflicting on Chantelle?", "Domestic abuse", ["Workplace discrimination", "Online identity fraud", "Neighbourhood harassment"], "Easy", ["Coercive Control", "Physical Violence"]],
      ["Which fun-run competition preceded the first on-screen incident of Gray attacking Chantelle?", "The Walford 10k", ["The London Marathon", "A charity swim", "A school sports day"], "Medium", ["Walford 10k Race", "July 2019 Attack"]],
      ["Which two organisations helped advise the soap on Chantelle's abuse storyline?", "Refuge and Women's Aid", ["Sands and Mind", "RNLI and Shelter", "Macmillan and Age UK"], "Medium", ["Refuge Charity", "Womens Aid Consultation"]]
    ]
  },
  {
    topic: "Bobby Beale Returns",
    tags: ["Bobby Beale", "Ian Beale", "Kathy Beale", "Lucy Beale", "June 2019 Return And New Faith"],
    facts: [
      ["Which member of the Beale family returned after serving time in youth detention?", "Bobby Beale", ["Peter Beale", "Steven Beale", "David Wicks"], "Easy", ["Bobby Released", "13 June 2019"]],
      ["Which actor began playing Bobby Beale on his return?", "Clay Milner Russell", ["Eliot Carrington", "Thomas Law", "Ben Hardy"], "Medium", ["Clay Milner Russell", "Bobby Recast"]],
      ["Whose killing had led to Bobby being sentenced to detention?", "Lucy Beale's", ["Heather Trott's", "Archie Mitchell's", "Michael Moon's"], "Easy", ["Lucy Murder", "Bobby Conviction"]],
      ["Which grandmother welcomed Bobby back when he was released?", "Kathy Beale", ["Pat Evans", "Cora Cross", "Mo Harris"], "Easy", ["Kathy Bobby Reunion", "Homecoming"]],
      ["Which late relative did Bobby repeatedly imagine seeing after he returned?", "Lucy Beale", ["Jane Beale", "Pauline Fowler", "Cindy Williams"], "Easy", ["Bobby Lucy Hallucinations", "Guilt And Trauma"]],
      ["Which religion did Bobby explore and embrace during the year?", "Islam", ["Buddhism", "Hinduism", "Sikhism"], "Easy", ["Bobby Converts Islam", "New Faith"]],
      ["Which two Ahmed sisters encouraged Bobby as he learnt about Islam?", "Iqra and Habiba", ["Ronnie and Roxy", "Lauren and Abi", "Tiffany and Whitney"], "Easy", ["Iqra Ahmed", "Habiba Ahmed", "Bobby Religious Journey"]],
      ["Who pulled Bobby to safety after he wandered onto railway tracks?", "Callum Highway", ["Phil Mitchell", "Max Branning", "Jack Branning"], "Medium", ["Callum Saves Bobby", "Railway Track Crisis"]],
      ["What holy book was Bobby given as he began learning about Islam?", "The Quran", ["The Torah", "The Bhagavad Gita", "The Book of Mormon"], "Medium", ["Quran Gift", "Muslim Faith Exploration"]],
      ["Which Beale father initially struggled with Bobby's decision to convert to Islam?", "Ian Beale", ["Peter Beale", "Steven Beale", "David Wicks"], "Easy", ["Ian Resists Conversion", "Family Religious Difference"]]
    ]
  },
  {
    topic: "Dr Legg Bex And New Faces",
    tags: ["Dr Harold Legg", "Dot Branning", "Bex Fowler", "Ahmed Family", "2019 Walford Farewells And Arrivals"],
    facts: [
      ["Which original EastEnders doctor died in February after returning to Walford?", "Dr Harold Legg", ["Dr Yusef Khan", "Dr Al Jenkins", "Dr Oliver Cousins"], "Easy", ["Dr Legg Death", "15 February 2019"]],
      ["Which long-time friend was beside Dr Legg when he died?", "Dot Branning", ["Pauline Fowler", "Kathy Beale", "Sharon Mitchell"], "Easy", ["Dot Supports Dr Legg", "Final Goodbye"]],
      ["Which two original Walford residents returned for Dr Legg's funeral?", "Lofty Holloway and Mary Smith", ["Den Watts and Angie Watts", "Grant Mitchell and Sam Mitchell", "Pat Evans and Frank Butcher"], "Medium", ["Lofty Return", "Mary Smith Return", "February Funeral"]],
      ["Which actress played returning resident Mary Smith?", "Linda Davidson", ["Letitia Dean", "Gillian Taylforth", "Lacey Turner"], "Medium", ["Linda Davidson", "Original 1985 Cast"]],
      ["Which sisters arrived to manage Walford East restaurant?", "Habiba and Iqra Ahmed", ["Ronnie and Roxy Mitchell", "Lauren and Abi Branning", "Kim and Denise Fox"], "Easy", ["Habiba Ahmed Arrival", "Iqra Ahmed Arrival"]],
      ["Which younger Panesar brother arrived with Kheerat and Jags in autumn?", "Vinny Panesar", ["Nish Panesar", "Ravi Gulati", "Ash Kaur"], "Easy", ["Vinny Panesar Debut", "October 2019"]],
      ["What was the name of the Panesar brothers' sister who was dating Iqra?", "Ash Kaur", ["Suki Panesar", "Habiba Ahmed", "Mariam Ahmed"], "Easy", ["Ash Iqra Relationship", "Panesar Sister"]],
      ["Which Fowler teenager was hospitalised after an attempt to take her own life?", "Bex Fowler", ["Lily Fowler", "Hope Fowler", "Louise Mitchell"], "Easy", ["Bex Mental Health Crisis", "October 2019"]],
      ["Which nurse and mother discovered Bex unconscious at home?", "Sonia Fowler", ["Stacey Fowler", "Kathy Beale", "Sharon Mitchell"], "Easy", ["Sonia Discovers Bex", "Hospital Emergency"]],
      ["Which organisation advised EastEnders on Bex's mental-health storyline?", "Samaritans", ["Sands", "Shelter", "NSPCC alone"], "Medium", ["Samaritans Consultation", "Teen Mental Health"]]
    ]
  },
  {
    topic: "Carter And Fowler Christmas",
    tags: ["Linda Carter", "Mick Carter", "Martin Fowler", "Stacey Fowler", "2019 Carter Alcoholism And Martin Blackmail"],
    facts: [
      ["Which Queen Vic landlady began struggling with alcohol dependency?", "Linda Carter", ["Sharon Mitchell", "Shirley Carter", "Kat Moon"], "Easy", ["Linda Drinking Problem", "Autumn 2019"]],
      ["Which organisation advised the programme on Linda's alcohol storyline?", "Drinkaware", ["Sands", "Refuge", "Shelter"], "Medium", ["Drinkaware Collaboration", "Alcohol Awareness"]],
      ["What diagnosis for young Ollie Carter added to his parents' worries?", "Autism", ["Epilepsy", "Diabetes", "Leukaemia"], "Easy", ["Ollie Autism Diagnosis", "Carter Family"]],
      ["What health problem was Mick Carter experiencing during the family crisis?", "Panic attacks", ["Loss of hearing", "A broken leg", "Amnesia"], "Easy", ["Mick Panic Attacks", "Anxiety"]],
      ["Which Carter son returned to Walford over Christmas to support his family?", "Lee Carter", ["Johnny Carter", "Dean Wicks", "Stan Carter"], "Easy", ["Lee Christmas Return", "Carter Reunion"]],
      ["Who struck Phil Mitchell with a spanner while defending Martin?", "Stacey Fowler", ["Kat Moon", "Sharon Mitchell", "Ruby Allen"], "Easy", ["Stacey Attacks Phil", "July 2019 Arches Fight"]],
      ["Which Mitchell initially tried to frame Keanu for the attack on Phil?", "Ben Mitchell", ["Billy Mitchell", "Louise Mitchell", "Grant Mitchell"], "Easy", ["Ben Frames Keanu", "Phil Attack Cover Up"]],
      ["Why did Stacey and Martin initially flee Walford in the summer?", "They feared prosecution for the attack on Phil", ["They had won a holiday", "They had inherited a business abroad", "They were escaping a flood"], "Easy", ["Stacey Martin Go On Run", "Summer Exit"]],
      ["Which man blackmailed Martin into criminal jobs after Stacey left?", "Ben Mitchell", ["Kush Kazemi", "Jack Branning", "Ian Beale"], "Easy", ["Ben Blackmails Martin", "Criminal Coercion"]],
      ["What nickname was used by Martin's criminal associate Charlie Savage?", "Tubbs", ["Halfway", "Fatboy", "Minty"], "Medium", ["Charlie Tubbs Savage", "December Crime Jobs"]]
    ]
  }
];

let index = 0;
const questions = groups.flatMap(group => group.facts.map(
  ([question, correctAnswer, wrongAnswers, difficulty, detailTags]) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);
    const item = {
      id: "tv_" + String(9584 + index).padStart(4, "0"),
      category: "Television",
      question,
      answers,
      correctAnswer,
      difficulty,
      tags: [...new Set([
        "British Television", "Soaps", "EastEnders", "2019",
        group.topic, ...group.tags, correctAnswer, ...detailTags
      ])],
      dailyEligible: true
    };
    index += 1;
    return item;
  }
));

module.exports = questions;
