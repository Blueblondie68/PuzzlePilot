 // quiz_pack207.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Family Affairs - memorable characters and stories
// 75 questions: tv_4569 to tv_4643
// 10 individual tags per question; quiz_bank.js unchanged.

const facts = [
    // The programme and its early years
    ["Which British television channel launched with the soap Family Affairs?", "Channel 5", ["Channel 4", "ITV", "BBC Two"], "Easy", "Production", ["Channel 5", "1997 Launch", "British Broadcasting", "Five Network", "Opening Night", "First Original Soap"]],
    ["In which decade did Family Affairs begin?", "1990s", ["1980s", "2000s", "1970s"], "Easy", "Production", ["1990s", "1997 Debut", "Soap Premiere", "Opening Year", "British Soap History", "Original Run"]],
    ["What was the fictional London suburb at the centre of Family Affairs?", "Charnham", ["Walford", "Weatherfield", "Summer Bay"], "Easy", "Setting", ["Charnham", "Fictional London Suburb", "South East England", "Soap Location", "Local Community", "London Setting"]],
    ["Which street became the main setting for Family Affairs?", "Stanley Street", ["Albert Square", "Coronation Street", "Brookside Close"], "Easy", "Setting", ["Stanley Street", "Charnham", "Main Street", "West London", "Outdoor Set", "Neighbourhood Setting"]],
    ["What was the name of the original bar and restaurant in Family Affairs?", "The Lock", ["The Woolpack", "The Queen Victoria", "The Dog in the Pond"], "Medium", "Setting", ["The Lock", "Bar And Restaurant", "Maria Simons", "Early Series", "Charnham Bistro", "Original Venue"]],
    ["What was the name of Pete Callan's pub on Stanley Street?", "The Black Swan", ["The Rovers Return", "The Crown", "The Dog in the Pond"], "Easy", "Setting", ["The Black Swan", "Pete Callan", "Public House", "Stanley Street", "Pub Landlord", "Local Venue"]],
    ["Which soap creator was behind Family Affairs?", "Mal Young", ["Tony Warren", "Phil Redmond", "Julia Smith"], "Medium", "Production", ["Mal Young", "Programme Creator", "Soap Producer", "Channel 5", "Original Concept", "British Drama"]],
    ["How often was Family Affairs normally shown on weekday evenings?", "Five nights a week", ["Once a week", "Twice a week", "Three nights a week"], "Easy", "Production", ["Five Weeknights", "Daily Soap", "Weekday Schedule", "Evening Broadcast", "Half Hour Episodes", "Channel 5 Scheduling"]],
    ["Which Australian soap was scheduled immediately before Family Affairs on Channel 5?", "Home and Away", ["Neighbours", "Sons and Daughters", "Prisoner"], "Easy", "Production", ["Home And Away", "Australian Soap", "Channel 5 Schedule", "Early Evening Slot", "Programme Lead In", "Soap Scheduling"]],

    // The Harts and the famous explosion
    ["Which family was the original focus of Family Affairs?", "The Harts", ["The Costellos", "The Dingles", "The Barlows"], "Easy", "Families", ["Hart Family", "Chris Hart", "Annie Hart", "Founding Family", "Original Characters", "1997 Cast"]],
    ["What was the first name of the Hart family's builder father?", "Chris", ["Pete", "Roy", "Dave"], "Medium", "Families", ["Chris Hart", "Hart Patriarch", "Ian Ashpitel", "Builder Father", "Annie Hart", "Original Cast"]],
    ["What was the name of Chris Hart's wife?", "Annie", ["Cat", "Yasmin", "Eileen"], "Medium", "Families", ["Annie Hart", "Chris Hart", "Liz Crowther", "Hart Mother", "Hart Marriage", "Original Family"]],
    ["What was Chris Hart's occupation?", "Builder", ["Doctor", "Solicitor", "Publican"], "Medium", "Characters", ["Chris Hart", "Construction Trade", "Building Business", "Nick Trip", "Family Breadwinner", "Charnham Builder"]],
    ["Which Hart siblings were twins?", "Duncan and Holly", ["Melanie and Jamie", "Chris and Annie", "Roy and Pete"], "Medium", "Families", ["Duncan Hart", "Holly Hart", "Twin Siblings", "Hart Children", "Family Relationships", "Original Characters"]],
    ["Which Hart daughter was training to be a solicitor?", "Holly Hart", ["Annie Hart", "Melanie Hart", "Claire Toomey"], "Medium", "Characters", ["Holly Hart", "Legal Training", "Trainee Solicitor", "Hart Daughter", "Duncan's Twin", "Career Plans"]],
    ["Which member of the Hart family became a police officer?", "Melanie Hart", ["Annie Hart", "Holly Hart", "Maria Simons"], "Medium", "Characters", ["Melanie Hart", "Police Constable", "Hart Daughter", "Roy Farmer", "Public Service", "Police Career"]],
    ["Which future Hollywood actor appeared as Tim Webster in early Family Affairs?", "Idris Elba", ["Chiwetel Ejiofor", "Daniel Kaluuya", "David Oyelowo"], "Easy", "Actors", ["Idris Elba", "Tim Webster", "Hollywood Actor", "Early Television Role", "British Actor", "Casting"]],
    ["What was the name of the character played by Idris Elba in Family Affairs?", "Tim Webster", ["Pete Callan", "Josh Matthews", "Duncan Hart"], "Medium", "Actors", ["Tim Webster", "Idris Elba", "Early Character", "Actor Identification", "Charnham Resident", "Television Debut"]],
    ["Which Coronation Street producer was recruited to overhaul Family Affairs?", "Brian Park", ["Tony Warren", "Phil Redmond", "Russell T Davies"], "Medium", "Production", ["Brian Park", "Coronation Street", "Executive Producer", "Soap Overhaul", "1998 Revamp", "Cast Changes"]],
    ["What disaster killed most of the original Hart family?", "A boat explosion", ["A house fire", "A train crash", "A motorway pile-up"], "Easy", "Disasters", ["Hart Family", "Boat Explosion", "1999 Disaster", "Mass Deaths", "River Boat", "Soap Shake Up"]],
    ["Where was the Hart family celebrating when the explosion happened?", "On a river boat", ["In The Black Swan", "At a seaside hotel", "In a village church"], "Easy", "Disasters", ["River Boat", "Wedding Reception", "Hart Family", "River Celebration", "Boat Party", "Fatal Explosion"]],
    ["Whose wedding reception was being held on the Hart family's boat?", "Melanie Hart and Roy Farmer's", ["Pete Callan and Eileen Day's", "Yasmin and Josh's", "Chris and Annie Hart's"], "Medium", "Marriages", ["Melanie Hart", "Roy Farmer", "Wedding Reception", "1999 Marriage", "River Boat", "Newlyweds"]],
    ["Which groom survived the Hart family's boat explosion after briefly going ashore?", "Roy Farmer", ["Chris Hart", "Pete Callan", "Josh Matthews"], "Medium", "Disasters", ["Roy Farmer", "Melanie Hart", "Boat Explosion", "Only Surviving Guest", "Went Ashore", "Wedding Groom"]],
    ["What caused the explosion on the Hart family's boat?", "Leaking gas ignited by a candle", ["A bomb planted under the deck", "A lightning strike", "A collision with another boat"], "Medium", "Disasters", ["Leaking Gas", "Fallen Candle", "Boat Explosion", "1999 Disaster", "Angus Hart", "Ignition Source"]],
    ["Which Hart sibling escaped the explosion because he had already left the area?", "Duncan Hart", ["Holly Hart", "Jamie Hart", "Melanie Hart"], "Medium", "Families", ["Duncan Hart", "Boat Explosion", "Absent Twin", "Hart Survivor", "Early Departure", "Family Tragedy"]],

    // Pete Callan, his pub and his crimes
    ["Which Family Affairs actor played the villainous Pete Callan?", "David Easter", ["Gary Webster", "Miles Petit", "Richard Hawley"], "Easy", "Actors", ["David Easter", "Pete Callan", "Soap Actor", "Series Villain", "Original Cast", "Casting"]],
    ["In which other British soap had David Easter appeared before Family Affairs?", "Brookside", ["Coronation Street", "Emmerdale", "Crossroads"], "Medium", "Actors", ["David Easter", "Brookside", "Previous Soap Role", "British Actor", "Soap Career", "Cross Soap Casting"]],
    ["Which woman was Pete Callan's former wife when he first arrived in Charnham?", "Maria Simons", ["Chrissie Costello", "Yasmin Matthews", "Fern Derwin"], "Medium", "Relationships", ["Maria Simons", "Pete Callan", "Former Spouses", "Early Charnham", "The Lock", "Marriage History"]],
    ["Which friend of the Harts married Pete Callan after being abandoned by Duncan?", "Claire Toomey", ["Holly Hart", "Cat Matthews", "Geri Evans"], "Medium", "Relationships", ["Claire Toomey", "Pete Callan", "Duncan Hart", "Marriage", "Jilted Partner", "Hart Family Friend"]],
    ["Which member of the Gates family murdered his wife Elsa before taking his own life?", "Jack Gates", ["Angus Hart", "Nick Trip", "Dave Matthews"], "Medium", "Crime", ["Jack Gates", "Elsa Gates", "Spousal Murder", "Suicide", "Hart Grandparents", "Family Tragedy"]],
    ["Which barman was secretly murdered by Pete Callan?", "Josh Matthews", ["Roy Farmer", "Marc MacKenzie", "Nick Trip"], "Easy", "Crime", ["Josh Matthews", "Pete Callan", "Pub Barman", "Fatal Assault", "The Black Swan", "Murder"]],
    ["Which of Pete Callan's wives did he frame for Josh Matthews' murder?", "Siobhan Callan", ["Eileen Callan", "Maria Simons", "Claire Toomey"], "Medium", "Crime", ["Siobhan Callan", "Pete Callan", "Josh Matthews", "Framed For Murder", "False Accusation", "Marriage"]],
    ["Who originally struck Josh Matthews, believing he was an intruder?", "Siobhan Callan", ["Cat Webb", "Chrissie Costello", "Gemma Craig"], "Medium", "Crime", ["Siobhan Callan", "Josh Matthews", "Suspected Intruder", "Initial Blow", "Darkened Kitchen", "Pete Callan"]],
    ["Who played Pete Callan's wife Eileen?", "Rosie Rowell", ["Gabrielle Glaister", "Kazia Pelka", "Nicola Duffett"], "Medium", "Actors", ["Rosie Rowell", "Eileen Callan", "Eileen Day", "Actress", "Pete's Wife", "Casting"]],
    ["Into which river did Pete Callan throw Eileen during a dramatic confrontation?", "River Thames", ["River Mersey", "River Tyne", "River Severn"], "Easy", "Storylines", ["Pete Callan", "Eileen Callan", "River Thames", "Violent Confrontation", "Attempted Drowning", "Marriage Conflict"]],
    ["How did villain Pete Callan finally die?", "He was shot by armed police", ["He fell from a rooftop", "He died in a house fire", "He drowned in the river"], "Easy", "Deaths", ["Pete Callan", "Armed Police", "Fatal Shooting", "Hostage Siege", "2005 Exit", "Gun Confrontation"]],
    ["Which villainous woman became involved in Pete Callan's final showdown?", "Trish Wallace", ["Chrissie Costello", "Yasmin Matthews", "Sadie Hargreaves"], "Medium", "Crime", ["Trish Wallace", "Pete Callan", "Eileen Callan", "Hostage Siege", "Final Showdown", "Gun Threat"]],
    ["Which actress played schemer Trish Wallace?", "Gabrielle Glaister", ["Rosie Rowell", "Barbara Young", "Laila Rouass"], "Medium", "Actors", ["Gabrielle Glaister", "Trish Wallace", "Actress", "Soap Villain", "Final Storyline", "Casting"]],
    ["Which original character died in a fire at his Internet café?", "Roy Farmer", ["Pete Callan", "Dave Matthews", "Doug MacKenzie"], "Easy", "Deaths", ["Roy Farmer", "Internet Cafe", "Arson Fire", "Cybercafe Blaze", "Tragic Death", "2003 Storyline"]],

    // The Matthews, Yasmin and the new street
    ["Who played Family Affairs regular Cat Matthews, later Cat Webb?", "Nicola Duffett", ["Kazia Pelka", "Ebony Thomas", "Anna Acton"], "Easy", "Actors", ["Nicola Duffett", "Cat Matthews", "Cat Webb", "Actress", "Long Running Character", "Casting"]],
    ["What was the name of Cat Matthews' original husband?", "Dave Matthews", ["Pete Callan", "Gary Costello", "Doug MacKenzie"], "Medium", "Families", ["Dave Matthews", "Cat Matthews", "Marriage", "Matthews Family", "Josh Matthews", "Original Husband"]],
    ["Which actor played Dave Matthews?", "Richard Hawley", ["Gary Webster", "David Easter", "Ian Ashpitel"], "Medium", "Actors", ["Richard Hawley", "Dave Matthews", "Actor", "Matthews Family", "Casting", "Soap Regular"]],
    ["Which young woman was famous for her facial piercings in Family Affairs?", "Yasmin Matthews", ["Chloe Costello", "Melanie Hart", "Nikki Warrington"], "Easy", "Characters", ["Yasmin Matthews", "Facial Piercings", "Distinctive Appearance", "Young Character", "McHugh Family", "Soap Fashion"]],
    ["Which actress played Yasmin in Family Affairs?", "Ebony Thomas", ["Anna Acton", "Tanya Franks", "Nicola Duffett"], "Easy", "Actors", ["Ebony Thomas", "Yasmin Matthews", "Actress", "Long Running Role", "Casting", "McHugh Family"]],
    ["What was the name of Yasmin's mother, who ran a local shop?", "Dusty McHugh", ["Sadie Hargreaves", "Myra Costello", "Fern Derwin"], "Medium", "Families", ["Dusty McHugh", "Yasmin Matthews", "Mother And Daughter", "Local Shop", "Minimarket", "Doreen Ingleton"]],
    ["Which Matthews man was Yasmin's first husband?", "Josh Matthews", ["Dave Matthews", "Marc MacKenzie", "Pete Callan"], "Medium", "Relationships", ["Josh Matthews", "Yasmin Matthews", "First Marriage", "Young Couple", "Wedding", "Former Spouses"]],
    ["Which character was Yasmin's rival for Marc MacKenzie's affections?", "Geri Evans", ["Cat Webb", "Chrissie Costello", "Melanie Hart"], "Easy", "Relationships", ["Geri Evans", "Yasmin Matthews", "Marc MacKenzie", "Romantic Rivalry", "Love Triangle", "Competing Suitors"]],
    ["What unusual method let Family Affairs viewers influence Marc MacKenzie's love triangle?", "A public phone and text vote", ["A postal referendum", "An audience vote in the studio", "A live stage performance"], "Easy", "Production", ["Public Phone Vote", "Text Voting", "Audience Participation", "Marc MacKenzie", "Love Triangle", "Interactive Soap"]],
    ["Which actor, later seen in Emmerdale, originally played Marc MacKenzie?", "Michael Wildman", ["Mark Charnock", "Dominic Brunt", "Jeff Hordley"], "Medium", "Actors", ["Michael Wildman", "Marc MacKenzie", "Emmerdale", "Al Chapman", "Original Actor", "Cross Soap Casting"]],
    ["Which half of comedy duo Hale and Pace played Doug MacKenzie?", "Gareth Hale", ["Norman Pace", "Harry Enfield", "Paul Whitehouse"], "Easy", "Actors", ["Gareth Hale", "Hale And Pace", "Doug MacKenzie", "Comedy Duo", "Actor", "Casting"]],
    ["Which woman married Doug MacKenzie in Family Affairs?", "Cat Webb", ["Eileen Callan", "Chrissie Costello", "Gemma Craig"], "Medium", "Relationships", ["Cat Webb", "Doug MacKenzie", "Marriage", "Gareth Hale", "Nicola Duffett", "2004 Wedding"]],

    // The Costellos and major later storylines
    ["Which family moved to Stanley Street after losing their comfortable lifestyle in Chigwell?", "The Costellos", ["The Harts", "The Barlows", "The Mitchells"], "Easy", "Families", ["Costello Family", "Stanley Street", "Chigwell", "Household Relocation", "Financial Decline", "New Neighbours"]],
    ["Who played Costello family father Gary?", "Gary Webster", ["David Easter", "Gareth Hale", "Richard Hawley"], "Easy", "Actors", ["Gary Webster", "Gary Costello", "Actor", "Costello Father", "Minder", "Casting"]],
    ["Which actress played Chrissie Costello?", "Kazia Pelka", ["Rosie Rowell", "Nicola Duffett", "Barbara Young"], "Easy", "Actors", ["Kazia Pelka", "Chrissie Costello", "Actress", "Costello Family", "Fake Cancer Story", "Casting"]],
    ["What illness did Chrissie Costello falsely claim her daughter had?", "Cancer", ["Diabetes", "Meningitis", "Epilepsy"], "Easy", "Storylines", ["Chrissie Costello", "Fake Cancer", "Chloe Costello", "Deception", "Community Sympathy", "Prolonged Hoax"]],
    ["Which Costello daughter was at the centre of her mother's fake cancer story?", "Chloe Costello", ["Melanie Costello", "Geri Evans", "Jessica Davenport"], "Easy", "Storylines", ["Chloe Costello", "Chrissie Costello", "Fabricated Illness", "Cancer Scare", "Mother Daughter", "Medical Deception"]],
    ["Which Costello daughter had stored the tablets that made Chloe ill?", "Melanie Costello", ["Chloe Costello", "Yasmin Matthews", "Kelly Boulter"], "Medium", "Storylines", ["Melanie Costello", "Chloe Costello", "Hidden Tablets", "Ecstasy Stash", "Older Sister", "Family Crisis"]],
    ["What drug did Chloe Costello take before the hospital tests that began the cancer scare?", "Ecstasy", ["Cocaine", "Heroin", "Cannabis"], "Medium", "Storylines", ["Chloe Costello", "Ecstasy", "MDMA", "Hospital Tests", "Cancer Scare", "Drug Ingestion"]],
    ["Which woman first publicly challenged Chrissie Costello's claims about Chloe's illness?", "Eileen Callan", ["Yasmin Matthews", "Cat Webb", "Sadie Hargreaves"], "Medium", "Storylines", ["Eileen Callan", "Chrissie Costello", "Chloe Costello", "Fake Cancer Claims", "Public Suspicion", "Exposed Lies"]],
    ["Which family friend sexually abused Chloe Costello?", "Bradley Foster", ["Pete Callan", "Doug MacKenzie", "Josh Matthews"], "Medium", "Storylines", ["Bradley Foster", "Chloe Costello", "Sexual Abuse", "Family Friend", "Trust Betrayal", "Child Protection"]],
    ["Which Boulter family member had a secret relationship with Sean Steel?", "Brendan Boulter", ["Les Boulter", "Justin MacKenzie", "Gary Costello"], "Medium", "Relationships", ["Brendan Boulter", "Sean Steel", "Bisexual Relationship", "Secret Affair", "Melanie Costello", "Engagement"]],
    ["Which character was both a nurse and Sean Steel's close friend?", "Tanya Woods", ["Chrissie Costello", "Claire Toomey", "Geri Evans"], "Medium", "Characters", ["Tanya Woods", "Sean Steel", "Nurse", "Close Friendship", "Health Profession", "Charnham Resident"]],
    ["Which Family Affairs actress later played Ruby Fox-Miligan in Emmerdale?", "Beth Cordingly", ["Nicola Duffett", "Kazia Pelka", "Rosie Rowell"], "Easy", "Actors", ["Beth Cordingly", "Ruby Fox-Miligan", "Emmerdale", "Sara Warrington", "Actress", "Cross Soap Casting"]],
    ["Which future House of the Dragon actor played Caleb Andrews in Family Affairs?", "Steve Toussaint", ["Idris Elba", "Richard Hawley", "Gary Webster"], "Medium", "Actors", ["Steve Toussaint", "Caleb Andrews", "House Of The Dragon", "Corlys Velaryon", "Actor", "Casting"]],

    // The finale and legacy
    ["In which decade did Family Affairs end?", "2000s", ["1990s", "2010s", "1980s"], "Easy", "Production", ["2000s", "2005 Finale", "Channel 5", "Series Cancellation", "Nine Year Run", "Last Broadcast"]],
    ["What announcement did Eileen Callan make when she returned in the final episode?", "She had won the lottery", ["She was moving to Australia", "She was marrying Pete Callan", "She had bought a hotel"], "Easy", "Finale", ["Eileen Callan", "Lottery Win", "Final Episode", "Rich Return", "New Fortune", "2005 Finale"]],
    ["What kind of party was taking place in Family Affairs' final episode?", "A New Year's Eve party", ["A Halloween party", "A royal wedding reception", "A birthday party"], "Easy", "Finale", ["New Years Eve", "Stanley Street", "Final Episode", "2005 Celebration", "Street Party", "Series Finale"]],
    ["Which pub did Eileen Callan sell in the Family Affairs finale?", "The Black Swan", ["The Lock", "The Queen Victoria", "The Rovers Return"], "Medium", "Finale", ["Eileen Callan", "The Black Swan", "Pub Sale", "Rex Randell", "2005 Finale", "Business Ownership"]],
    ["Which actor played the original Family Affairs character Roy Farmer?", "Miles Petit", ["David Easter", "Gary Webster", "Gareth Hale"], "Medium", "Actors", ["Miles Petit", "Roy Farmer", "Actor", "Original Cast", "Boat Explosion Survivor", "Casting"]],
    ["Which actress played Sadie Hargreaves in Family Affairs?", "Barbara Young", ["Pat Phoenix", "Doris Speed", "Kathy Staff"], "Medium", "Actors", ["Barbara Young", "Sadie Hargreaves", "Actress", "Soap Veteran", "Long Running Character", "Casting"]],
    ["Which actress played doctor Tanya Ayuba in Family Affairs?", "Laila Rouass", ["Kazia Pelka", "Tanya Franks", "Rebecca Blake"], "Medium", "Actors", ["Laila Rouass", "Tanya Ayuba", "Doctor", "Actress", "Charnham Medic", "Casting"]],
    ["Which ITV drama featured Family Affairs actor Gary Webster as Ray Daley?", "Minder", ["The Bill", "London's Burning", "Heartbeat"], "Easy", "Actors", ["Gary Webster", "Ray Daley", "Minder", "ITV Drama", "Actor", "Television Career"]],
    ["Which Coronation Street character was also played by Family Affairs actress Barbara Young?", "Doreen Fenwick", ["Bet Lynch", "Deirdre Barlow", "Audrey Roberts"], "Easy", "Actors", ["Barbara Young", "Doreen Fenwick", "Coronation Street", "Soap Actress", "Cross Soap Role", "Casting"]],
    ["Which character in Family Affairs was played by future Emmerdale actress Beth Cordingly?", "Sara Warrington", ["Chrissie Costello", "Yasmin Matthews", "Eileen Callan"], "Medium", "Actors", ["Beth Cordingly", "Sara Warrington", "Emmerdale", "Ruby Fox-Miligan", "Actress", "Casting"]],
    ["Which former England cricketer appeared as a beauty contest judge in Family Affairs?", "Phil Tufnell", ["Ian Botham", "Andrew Flintoff", "David Gower"], "Medium", "GuestStars", ["Phil Tufnell", "England Cricketer", "Beauty Contest", "Celebrity Judge", "Guest Appearance", "Cricket Star"]],
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, topic, specificTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(4569 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Family Affairs', 'British Television', topic, ...specificTags],
        dailyEligible: true
    };
});

module.exports = questions;

