// quiz_pack258.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2020
// 100 questions: tv_9684 to tv_9783
// Comprehensive question-level tags created with each question.
// Do not change quiz_bank.js until the agreed bank connection.

const groups = [
  {
    topic: "35th Anniversary Boat Disaster",
    tags: ["Dennis Rickman Jr", "Ian Beale", "Sharon Watts", "River Thames", "February 2020 Boat Disaster"],
    facts: [
      ["Which teenager died during EastEnders' 35th-anniversary boat disaster?", "Dennis Rickman Jr", ["Bobby Beale", "Peter Beale", "Keanu Taylor"], "Easy", ["Dennis Drowns", "Anniversary Death"]],
      ["On which river did the anniversary boat disaster take place?", "The River Thames", ["The River Lea", "The River Severn", "The River Medway"], "Easy", ["Thames Boat Party", "London Setting"]],
      ["Which Walford pub's award was being celebrated on the boat?", "The Queen Victoria", ["The Prince Albert", "The Dagmar", "The Swan"], "Easy", ["Best Pub Award", "Boat Celebration"]],
      ["Who locked Dennis Rickman Jr in a room below deck before the boat began sinking?", "Ian Beale", ["Phil Mitchell", "Ben Mitchell", "Mick Carter"], "Easy", ["Ian Locks Dennis Away", "Hidden Responsibility"]],
      ["Which of Ian's relatives had been targeted by Dennis's online bullying?", "Bobby Beale", ["Peter Beale", "Kathy Beale", "Ben Mitchell"], "Easy", ["Bobby Online Bullying", "Ian Confronts Dennis"]],
      ["Which two men fought on the party boat shortly before the collision?", "Phil Mitchell and Keanu Taylor", ["Ian Beale and Peter Beale", "Mick Carter and Jack Branning", "Martin Fowler and Kush Kazemi"], "Easy", ["Phil Keanu Boat Fight", "Collision Cause"]],
      ["Which Carter was trapped below deck with her foot caught as the boat filled with water?", "Linda Carter", ["Shirley Carter", "Tina Carter", "Nancy Carter"], "Easy", ["Linda Trapped Below Deck", "Mick Rescue"]],
      ["Who went back below deck in an unsuccessful attempt to save Dennis?", "Ian Beale", ["Jack Branning", "Martin Fowler", "Ben Mitchell"], "Easy", ["Ian Rescue Attempt", "Dennis Death"]],
      ["Who was giving birth while the boat disaster unfolded?", "Sharon Watts", ["Louise Mitchell", "Stacey Fowler", "Denise Fox"], "Easy", ["Sharon Labour", "Parallel Birth And Death"]],
      ["How many years of EastEnders did the 2020 anniversary episodes celebrate?", "35 years", ["30 years", "25 years", "40 years"], "Easy", ["35th Anniversary", "1985 Debut"]]
    ]
  },
  {
    topic: "Sharon Ian And Albie",
    tags: ["Sharon Watts", "Ian Beale", "Phil Mitchell", "Albie Watts", "December 2020 Ian Attack And Marriage"],
    facts: [
      ["What name was Sharon's baby son given after she changed his original name Kayden?", "Albie", ["Dennis", "Arthur", "Matthew"], "Easy", ["Kayden Renamed Albie", "Lockdown Name Change"]],
      ["Which Taylor family member originally gave Sharon's newborn the name Kayden?", "Karen Taylor", ["Keanu Taylor", "Bernadette Taylor", "Mitch Baker"], "Medium", ["Karen Names Kayden", "Newborn Naming"]],
      ["Which Beale woman helped deliver Sharon's baby during anniversary week?", "Kathy Beale", ["Jane Beale", "Cindy Beale", "Lucy Beale"], "Easy", ["Kathy Helps Sharon", "February Birth"]],
      ["Who took over the Queen Vic from Mick and Linda after the first lockdown break?", "Sharon Watts", ["Ruby Allen", "Denise Fox", "Suki Panesar"], "Easy", ["Sharon Buys Queen Vic", "June 2020 Sale"]],
      ["Which man married Sharon in a hospital ceremony in December?", "Ian Beale", ["Phil Mitchell", "Keanu Taylor", "Jack Branning"], "Easy", ["Ian Sharon Wedding", "December Hospital Ceremony"]],
      ["Who was revealed at Christmas to have physically attacked Ian in the Queen Vic?", "Phil Mitchell", ["Peter Beale", "Ben Mitchell", "Max Branning"], "Easy", ["Phil Attacks Ian", "Christmas Culprit Reveal"]],
      ["Which woman had encouraged Phil to attack Ian after learning of his role in Dennis's death?", "Sharon Watts", ["Kathy Beale", "Linda Carter", "Dotty Cotton"], "Easy", ["Sharon Seeks Revenge", "Dennis Grief"]],
      ["What Christmas dessert did Sharon secretly tamper with while plotting to kill Ian?", "Christmas pudding", ["Mince pies", "Trifle", "Yule log"], "Easy", ["Sharon Poisoned Pudding", "Christmas Cliffhanger"]],
      ["What message helped Sharon learn that Ian had locked Dennis below deck?", "A voicemail from Dennis", ["An email from Ben", "A postcard from Keanu", "A note from Bobby"], "Medium", ["Dennis Final Voicemail", "Sharon Discovers Truth"]],
      ["Who was arrested at Christmas on suspicion of attacking his father Ian?", "Peter Beale", ["Bobby Beale", "Steven Beale", "Ben Mitchell"], "Medium", ["Peter Wrongly Suspected", "Ian Attack Investigation"]]
    ]
  },
  {
    topic: "Whitney And Leo King",
    tags: ["Whitney Dean", "Leo King", "Tony King", "Gray Atkins", "2020 Stalking And Trial"],
    facts: [
      ["Which man stalking Whitney Dean was the son of her former abuser?", "Leo King", ["Callum Highway", "Hunter Owen", "Keegan Baker"], "Easy", ["Leo Stalks Whitney", "Tony King Son"]],
      ["Where had Leo secretly hidden to spy on Whitney inside her home?", "In the attic", ["In the garden shed", "In the cellar", "In a wardrobe"], "Easy", ["Leo Hides In Attic", "Stalking"]],
      ["What weapon was involved when Whitney killed Leo while defending herself?", "A knife", ["A hammer", "A gun", "A baseball bat"], "Easy", ["Whitney Self Defence", "Leo Death"]],
      ["Which Carter helped Whitney after she discovered Leo's body in her kitchen?", "Mick Carter", ["Johnny Carter", "Stuart Highway", "Tina Carter"], "Easy", ["Mick Helps Whitney", "Kitchen Aftermath"]],
      ["Where did Whitney hand herself in to the police after Leo's death?", "At the boat disaster scene", ["At the Queen Vic", "At the police station the next morning", "At Walford East"], "Medium", ["Whitney Police Confession", "Anniversary Week"]],
      ["Which Walford solicitor was involved in Whitney's defence?", "Gray Atkins", ["Jack Branning", "Ian Beale", "Kheerat Panesar"], "Easy", ["Gray Represents Whitney", "Legal Proceedings"]],
      ["What verdict did Whitney receive at her trial for Leo's death?", "Not guilty", ["Guilty", "A hung jury", "Guilty of manslaughter"], "Easy", ["Whitney Acquitted", "October 2020 Trial"]],
      ["Which month saw Whitney's trial reach its verdict?", "October", ["March", "June", "December"], "Medium", ["October 2020 Verdict", "Courtroom Drama"]],
      ["Which actress continued playing Whitney Dean throughout the storyline?", "Shona McGarty", ["Maisie Smith", "Jessica Plummer", "Lacey Turner"], "Medium", ["Shona McGarty", "Whitney Casting"]],
      ["Who was Leo King's mother, who blamed Whitney after his death?", "Michaela Turnbull", ["Katy Lewis", "Karen Taylor", "Sheree Trueman"], "Medium", ["Michaela Turnbull", "Leo Family"]]
    ]
  },
  {
    topic: "Chantelle Gray And Tina",
    tags: ["Chantelle Atkins", "Gray Atkins", "Kheerat Panesar", "Tina Carter", "2020 Domestic Abuse And Deaths"],
    facts: [
      ["Which Taylor daughter was murdered by her abusive husband in September?", "Chantelle Atkins", ["Bernadette Taylor", "Tiffany Butcher", "Chelsea Fox"], "Easy", ["Chantelle Murder", "September 2020"]],
      ["What was the name of Chantelle's abusive husband?", "Gray Atkins", ["Ray Kelly", "Stuart Highway", "Leo King"], "Easy", ["Gray Domestic Abuse", "Controlling Husband"]],
      ["Which kitchen appliance held the knife on which Chantelle was fatally injured?", "An open dishwasher", ["A microwave", "A washing machine", "A freezer"], "Medium", ["Dishwasher Knife", "Chantelle Final Scene"]],
      ["What did Gray fail to do while Chantelle lay critically injured?", "Call an ambulance", ["Find their house keys", "Turn off the water", "Contact his solicitor"], "Easy", ["Gray Denies Emergency Help", "Deliberate Inaction"]],
      ["Which Panesar developed feelings for Chantelle and urged her to leave Gray?", "Kheerat Panesar", ["Vinny Panesar", "Jags Panesar", "Nish Panesar"], "Easy", ["Kheerat Chantelle Romance", "Escape Plan"]],
      ["Which seaside town was involved in Chantelle's attempted escape from Gray?", "Southend", ["Brighton", "Margate", "Bournemouth"], "Medium", ["Southend Trip", "Escape Thwarted"]],
      ["What were the names of Chantelle and Gray's children?", "Mia and Mackenzie", ["Amy and Ricky", "Bert and Ernie", "Lily and Arthur"], "Easy", ["Mia Atkins", "Mackenzie Atkins"]],
      ["Which actress played Chantelle in her final episodes?", "Jessica Plummer", ["Lorraine Stanley", "Clair Norris", "Zaraah Abrahams"], "Medium", ["Jessica Plummer", "Chantelle Casting"]],
      ["Which Carter woman discovered Gray's secret and was murdered in December?", "Tina Carter", ["Linda Carter", "Shirley Carter", "Babe Smith"], "Easy", ["Tina Murder", "28 December 2020"]],
      ["How did Gray kill Tina Carter after she confronted him?", "He strangled her", ["He shot her", "He poisoned her", "He pushed her into the river"], "Easy", ["Tina Strangled", "Gray Second Murder"]]
    ]
  },
  {
    topic: "Mick Frankie And Katy",
    tags: ["Mick Carter", "Frankie Lewis", "Katy Lewis", "Linda Carter", "2020 Childhood Sexual Abuse Revelation"],
    facts: [
      ["Which new arrival told Mick Carter that she was his daughter?", "Frankie Lewis", ["Katy Lewis", "Nancy Carter", "Whitney Dean"], "Easy", ["Frankie Reveals Parentage", "Mick Daughter"]],
      ["Which actress first played Frankie Lewis?", "Rose Ayling-Ellis", ["Simone Lahbib", "Kellie Bright", "Maddy Hill"], "Medium", ["Rose Ayling Ellis", "Frankie Casting"]],
      ["What disability did newcomer Frankie Lewis share with the actress portraying her?", "Deafness", ["Blindness", "Paralysis", "Amnesia"], "Easy", ["Deaf Representation", "Frankie Characterisation"]],
      ["Which former care worker was revealed as Frankie's mother?", "Katy Lewis", ["Shirley Carter", "Linda Carter", "Elaine Peacock"], "Easy", ["Katy Lewis Mother", "Care Worker"]],
      ["How old was Mick when Katy Lewis sexually abused him?", "Twelve", ["Sixteen", "Eighteen", "Twenty"], "Medium", ["Mick Aged Twelve", "Historical Abuse"]],
      ["Which actress joined EastEnders as Katy Lewis?", "Simone Lahbib", ["Rose Ayling-Ellis", "Linda Henry", "Maria Friedman"], "Medium", ["Simone Lahbib", "Katy Casting"]],
      ["Where had Katy worked when she first knew Mick as a child?", "At a children's home", ["At the Queen Vic", "At Walford High", "At a hospital"], "Easy", ["Childrens Home", "Mick Care Background"]],
      ["Which Carter relative initially remembered Katy as a kindly care worker?", "Tina Carter", ["Lee Carter", "Johnny Carter", "Nancy Carter"], "Easy", ["Tina Remembers Katy", "Family History"]],
      ["Which two charities helped advise EastEnders on Mick's childhood abuse story?", "NSPCC and SurvivorsUK", ["Sands and Shelter", "Mind and Samaritans", "Refuge and Age UK"], "Medium", ["NSPCC Consultation", "SurvivorsUK Consultation"]],
      ["Which Branning man became romantically involved with Linda as Mick withdrew from her?", "Max Branning", ["Jack Branning", "Ian Beale", "Rainie Branning"], "Easy", ["Linda Max Affair", "Christmas 2020 Marriage Strain"]]
    ]
  },
  {
    topic: "Suki And The Panesars",
    tags: ["Suki Panesar", "Kheerat Panesar", "Jags Panesar", "Vinny Panesar", "2020 Panesar Family Secrets"],
    facts: [
      ["Which formidable Panesar matriarch arrived in Walford in January?", "Suki Panesar", ["Ash Panesar", "Mariam Ahmed", "Sheree Trueman"], "Easy", ["Suki Arrival", "January 2020 Debut"]],
      ["Which actress began playing Suki Panesar?", "Balvinder Sopal", ["Gurlaine Kaur Garcha", "Rakhee Thakrar", "Nina Wadia"], "Medium", ["Balvinder Sopal", "Suki Casting"]],
      ["What serious illness did Suki falsely claim to have?", "Cancer", ["Multiple sclerosis", "Kidney failure", "Dementia"], "Easy", ["Suki Fakes Cancer", "Manipulates Children"]],
      ["Which Panesar daughter worked as a doctor?", "Ash Kaur", ["Habiba Ahmed", "Iqra Ahmed", "Suki Panesar"], "Easy", ["Ash Doctor", "Panesar Daughter"]],
      ["Which of Suki's sons grew close to Chantelle Atkins?", "Kheerat Panesar", ["Jags Panesar", "Vinny Panesar", "Nish Panesar"], "Easy", ["Kheerat Chantelle", "Romantic Connection"]],
      ["Which Panesar brother was wrongly blamed for an attack on Martin Fowler?", "Jags Panesar", ["Vinny Panesar", "Kheerat Panesar", "Nish Panesar"], "Easy", ["Jags Framed", "Martin Assault"]],
      ["Which Panesar brother had actually injured Martin during a staged robbery?", "Vinny Panesar", ["Jags Panesar", "Kheerat Panesar", "Nish Panesar"], "Medium", ["Vinny Attacks Martin", "Insurance Robbery"]],
      ["Which woman was secretly dating Jags Panesar when his mother turned against him?", "Habiba Ahmed", ["Iqra Ahmed", "Ruby Allen", "Bernadette Taylor"], "Easy", ["Jags Habiba Relationship", "Suki Disapproves"]],
      ["What punishment did Jags face after his mother helped frame him?", "He was sent to prison", ["He was deported", "He was expelled from school", "He was fined for speeding"], "Easy", ["Jags Imprisoned", "October 2020 Exit"]],
      ["Which business role gave Suki power over the Slater family's home?", "Their landlord", ["Their employer", "Their solicitor", "Their doctor"], "Easy", ["Suki Landlord", "Slater Rent Dispute"]]
    ]
  },
  {
    topic: "Denise Raymond And Returning Family",
    tags: ["Denise Fox", "Raymond Fox", "Phil Mitchell", "Ellie Nixon", "Christmas 2020 Fox Family"],
    facts: [
      ["Which son of Denise Fox and Phil Mitchell reappeared after a family tragedy?", "Raymond", ["Arthur", "Denny", "Matthew"], "Easy", ["Raymond Returns", "Biological Parents"]],
      ["What happened to Raymond's adoptive parents before he was reunited with Denise?", "They died in a car crash", ["They moved abroad", "They were imprisoned", "They disappeared at sea"], "Easy", ["Adoptive Parents Killed", "Road Accident"]],
      ["Which woman introduced as Raymond's adoptive grandmother fought to keep him?", "Ellie Nixon", ["Sheree Trueman", "Katy Lewis", "Carmel Kazemi"], "Easy", ["Ellie Nixon", "Custody Dispute"]],
      ["Which singer played Ellie Nixon?", "Mica Paris", ["Beverley Knight", "Gabrielle", "Jamelia"], "Medium", ["Mica Paris", "Ellie Casting"]],
      ["Which Mitchell offered Ellie money in his attempt to gain access to Raymond?", "Phil Mitchell", ["Billy Mitchell", "Ben Mitchell", "Grant Mitchell"], "Easy", ["Phil Confronts Ellie", "Raymond Custody"]],
      ["Which daughter of Denise Fox returned at Christmas?", "Chelsea Fox", ["Libby Fox", "Kim Fox", "Amy Mitchell"], "Easy", ["Chelsea Christmas Return", "Daughter Reunion"]],
      ["Which actress began playing the returning Chelsea Fox?", "Zaraah Abrahams", ["Tiana Benjamin", "Diane Parish", "Tameka Empson"], "Medium", ["Zaraah Abrahams", "Chelsea Recast"]],
      ["Which imprisoned former husband of Denise returned alongside Chelsea?", "Lucas Johnson", ["Owen Turner", "Kevin Wicks", "Vincent Hubbard"], "Easy", ["Lucas Johnson Returns", "Christmas 2020"]],
      ["Which actor reprised the role of Lucas Johnson?", "Don Gilet", ["Roger Griffiths", "Richard Blackwood", "Stevie Basaula"], "Medium", ["Don Gilet", "Lucas Casting"]],
      ["Which serious crimes had led to Lucas Johnson's imprisonment?", "Murder", ["Bank fraud", "Arson", "Smuggling"], "Easy", ["Lucas Serial Killer History", "Prison Release"]]
    ]
  },
  {
    topic: "Stacey Ruby And Martin",
    tags: ["Stacey Slater", "Ruby Allen", "Martin Fowler", "Vinny Panesar", "2020 Marriage And Robbery"],
    facts: [
      ["Which former best friend of Stacey began a relationship with Martin during lockdown?", "Ruby Allen", ["Whitney Dean", "Sharon Watts", "Lola Pearce"], "Easy", ["Ruby Martin Relationship", "Lockdown Affair"]],
      ["Who returned to Walford in September to find Martin and Ruby together?", "Stacey Slater", ["Kat Slater", "Jean Slater", "Belinda Slater"], "Easy", ["Stacey September Return", "Ex Husband New Partner"]],
      ["Which man did Ruby Allen marry after a holiday abroad?", "Martin Fowler", ["Max Branning", "Kush Kazemi", "Jack Branning"], "Easy", ["Ruby Martin Marriage", "Autumn 2020"]],
      ["What crime did Ruby secretly arrange at her nightclub to claim insurance money?", "A staged robbery", ["An arson attack", "A fake kidnapping", "A burglary at the Queen Vic"], "Easy", ["Ruby Insurance Scheme", "Nightclub Robbery"]],
      ["Who was injured when the nightclub robbery arranged by Ruby went wrong?", "Martin Fowler", ["Ian Beale", "Phil Mitchell", "Bobby Beale"], "Easy", ["Martin Injured At Club", "Robbery Consequences"]],
      ["Which former friend had been taking money from Ruby's bank account?", "Stacey Slater", ["Whitney Dean", "Kat Slater", "Sonia Fowler"], "Easy", ["Stacey Uses Ruby Money", "Bank Account Dispute"]],
      ["What was the name of Ruby Allen's nightclub?", "Ruby's", ["E20", "Scarlet", "The Prince Albert"], "Medium", ["Rubys Nightclub", "Walford Business"]],
      ["Which market trader was struggling with online gambling debts in the autumn?", "Kush Kazemi", ["Martin Fowler", "Jay Brown", "Keegan Baker"], "Easy", ["Kush Gambling Problem", "Online Poker"]],
      ["Which Slater woman was in a relationship with Kush as his gambling worsened?", "Kat Slater", ["Jean Slater", "Mo Harris", "Lily Slater"], "Easy", ["Kat Kush Romance", "Gambling Strain"]],
      ["Whose late gangster father was Johnny Allen?", "Ruby Allen's", ["Stacey Slater's", "Louise Mitchell's", "Whitney Dean's"], "Easy", ["Johnny Allen", "Ruby Family History"]]
    ]
  },
  {
    topic: "Arrivals Returns And Farewells",
    tags: ["Peter Beale", "Isaac Baptiste", "Sheree Trueman", "Bex Fowler", "2020 Walford Cast Changes"],
    facts: [
      ["Which Beale son returned with a new actor during the boat anniversary episodes?", "Peter Beale", ["Bobby Beale", "Steven Beale", "David Wicks"], "Easy", ["Peter Returns", "February 2020 Recast"]],
      ["Which actor took over the role of Peter Beale in 2020?", "Dayle Hudson", ["Ben Hardy", "Thomas Law", "Aaron Sidwell"], "Medium", ["Dayle Hudson", "Peter Casting"]],
      ["Which character arrived as the previously hidden son of Sheree Trueman?", "Isaac Baptiste", ["Anthony Trueman", "Paul Trueman", "Vincent Hubbard"], "Easy", ["Isaac Arrival", "Sheree Family Secret"]],
      ["Who was revealed to be Isaac Baptiste's biological father?", "Patrick Trueman", ["Lucas Johnson", "Mitch Baker", "Den Watts"], "Easy", ["Patrick Isaac Paternity", "Family Revelation"]],
      ["What was Isaac Baptiste's profession?", "Teacher", ["Solicitor", "Police officer", "Chef"], "Easy", ["Isaac Teacher", "Career"]],
      ["Which actor played newcomer Isaac Baptiste?", "Stevie Basaula", ["Roger Griffiths", "Davood Ghadami", "Richard Blackwood"], "Medium", ["Stevie Basaula", "Isaac Casting"]],
      ["Which young Fowler left Walford to go travelling in March?", "Bex Fowler", ["Lily Fowler", "Hope Fowler", "Arthur Fowler"], "Easy", ["Bex March Departure", "Travelling Abroad"]],
      ["Which longstanding resident left Walford for Ireland early in the year?", "Dot Branning", ["Mo Harris", "Cora Cross", "Jean Slater"], "Easy", ["Dot Ireland Exit", "January 2020"]],
      ["Which Slater woman was told she was free of cancer shortly before her partner Daniel died?", "Jean Slater", ["Kat Slater", "Stacey Slater", "Mo Harris"], "Easy", ["Jean Cancer All Clear", "February 2020"]],
      ["Which character died peacefully on Arthur's bench after spending time with Jean?", "Daniel Cook", ["Ted Murray", "Dr Legg", "Arshad Ahmed"], "Easy", ["Daniel Death", "27 February 2020"]]
    ]
  },
  {
    topic: "Lockdown And Other Walford Stories",
    tags: ["COVID-19 Production Break", "Honey Mitchell", "Stuart Highway", "Rainie Cross", "2020 Broadcast And Social Storylines"],
    facts: [
      ["Why did EastEnders stop broadcasting new episodes for several weeks in 2020?", "COVID-19 filming restrictions", ["A studio fire", "A writers' strike", "A permanent channel change"], "Easy", ["Coronavirus Production Halt", "2020 Lockdown"]],
      ["In which month did EastEnders run out of new episodes and begin its broadcasting break?", "June", ["February", "September", "December"], "Medium", ["16 June 2020", "Transmission Break Begins"]],
      ["In which month did new episodes return after the 2020 lockdown break?", "September", ["April", "July", "November"], "Medium", ["7 September 2020", "EastEnders Returns"]],
      ["Which broadcaster presented Secrets from the Square while EastEnders was off air?", "Stacey Dooley", ["Claudia Winkleman", "Alison Hammond", "Holly Willoughby"], "Medium", ["Secrets From The Square", "Stacey Dooley Host"]],
      ["How long were the regular episodes when the soap first returned from lockdown?", "20 minutes", ["10 minutes", "45 minutes", "60 minutes"], "Medium", ["Shorter Post Lockdown Episodes", "Production Adaptation"]],
      ["Which Mitchell woman had her drink spiked by a man she met on a date?", "Honey Mitchell", ["Sharon Watts", "Lola Pearce", "Louise Mitchell"], "Easy", ["Honey Drink Spiked", "October 2020"]],
      ["Which man intervened when Honey was threatened by her date?", "Jay Brown", ["Billy Mitchell", "Ben Mitchell", "Callum Highway"], "Easy", ["Jay Helps Honey", "Paul Skeggs Attack"]],
      ["What was the name of the man who spiked Honey's drink?", "Paul Skeggs", ["Leo King", "Ray Kelly", "Stuart Highway"], "Medium", ["Paul Skeggs", "Honey Assault Storyline"]],
      ["Which couple married in October after Rainie divorced Max Branning?", "Stuart Highway and Rainie Cross", ["Mick and Linda Carter", "Ben Mitchell and Callum Highway", "Martin Fowler and Stacey Slater"], "Easy", ["Stuart Rainie Wedding", "October 2020"]],
      ["Which Carter relative did Gray claim had gone on the run after he murdered her?", "Tina Carter", ["Shirley Carter", "Nancy Carter", "Linda Carter"], "Easy", ["Tina Missing Cover Story", "December 2020"]]
    ]
  }
];

let index = 0;
const questions = groups.flatMap(group => group.facts.map(
  ([question, correctAnswer, wrongAnswers, difficulty, detailTags]) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);
    const item = {
      id: "tv_" + String(9684 + index).padStart(4, "0"),
      category: "Television",
      question,
      answers,
      correctAnswer,
      difficulty,
      tags: [...new Set([
        "British Television", "Soaps", "EastEnders", "2020",
        group.topic, ...group.tags, correctAnswer, ...detailTags
      ])],
      dailyEligible: true
    };
    index += 1;
    return item;
  }
));

module.exports = questions;
