// quiz_pack174.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2006 and 2007
// 100 questions: tv_1401 to tv_1500
// Year split: 46 from 2006 and 54 from 2007.
// Specialist tags and natural wording audited; original answers and settings preserved.
// quiz_bank.js is already connected and stays unchanged.

// Each fact: question, correct answer, three alternatives, difficulty, year, original topic, specialist tags.
const facts = [
    // 2006
    ["What were the names of Dev and Sunita Alahan's twin babies?", "Aadi and Asha", ["Amy and Adam", "Ryan and Rosie", "Ben and Bethany"], "Easy", "2006", "Families", ["Dev Alahan", "Sunita Alahan", "Aadi Alahan", "Asha Alahan", "Twin birth"]],
    ["Which shopkeeper was the father of twins Aadi and Asha?", "Dev Alahan", ["Vikram Desai", "Steve McDonald", "Lloyd Mullaney"], "Easy", "2006", "Families", ["Dev Alahan", "Sunita Alahan", "Aadi Alahan", "Asha Alahan", "Fatherhood"]],
    ["Why did Sunita Alahan leave Dev and take their newborn twins with her?", "He had concealed other children from her", ["He sold their house without telling her", "He moved abroad for work", "He refused to support her career"], "Medium", "2006", "Relationships", ["Sunita Alahan", "Dev Alahan", "Aadi Alahan", "Asha Alahan", "Secret children", "Separation"]],
    ["Which factory worker was befriended, then framed for theft by Becky Granger?", "Kelly Crabtree", ["Fiz Brown", "Janice Battersby", "Joanne Jackson"], "Medium", "2006", "Crime", ["Becky Granger", "Kelly Crabtree", "Underworld", "Theft framing", "False accusation"]],
    ["Which actress first played Becky Granger in Coronation Street?", "Katherine Kelly", ["Suranne Jones", "Jennie McAlpine", "Vicky Binns"], "Medium", "2006", "Actors", ["Becky Granger", "Katherine Kelly", "Casting", "Character debut", "Underworld"]],
    ["Which long-serving factory boss died in Ken Barlow's arms?", "Mike Baldwin", ["Fred Elliott", "Duggie Ferguson", "Danny Baldwin"], "Easy", "2006", "Departures", ["Mike Baldwin", "Ken Barlow", "Alzheimer's disease", "Final scenes", "Factory owner"]],
    ["Which illness affected Mike Baldwin's memory before he died?", "Alzheimer's disease", ["Parkinson's disease", "Multiple sclerosis", "Huntington's disease"], "Easy", "2006", "Storylines", ["Mike Baldwin", "Alzheimer's disease", "Dementia", "Memory loss", "Final illness"]],
    ["Where did Mike Baldwin go after leaving hospital shortly before his death?", "His factory", ["The Rovers Return", "The Corner Shop", "The Kabin"], "Medium", "2006", "Storylines", ["Mike Baldwin", "Underworld", "Hospital discharge", "Disorientation", "Final days"]],
    ["Which relative manipulated Mike Baldwin's affairs as his health declined?", "Danny Baldwin", ["Ken Barlow", "Adam Barlow", "Peter Barlow"], "Medium", "2006", "Families", ["Danny Baldwin", "Mike Baldwin", "Dementia", "Financial manipulation", "Inheritance"]],
    ["Which young heir challenged Mike Baldwin's will after his death?", "Adam Barlow", ["Peter Barlow", "Jamie Baldwin", "Mark Redman"], "Easy", "2006", "Families", ["Adam Barlow", "Mike Baldwin", "Danny Baldwin", "Will dispute", "Inheritance"]],
    ["Who kept Mike Baldwin's later will to use as leverage over Danny?", "Leanne Battersby", ["Frankie Baldwin", "Deirdre Barlow", "Carla Connor"], "Medium", "2006", "Crime", ["Leanne Battersby", "Mike Baldwin", "Danny Baldwin", "Second will", "Blackmail"]],
    ["Which company was at the centre of the battle over Mike Baldwin's inheritance?", "Underworld", ["Street Cars", "Freshco", "Bettabuy"], "Easy", "2006", "Businesses", ["Underworld", "Mike Baldwin", "Danny Baldwin", "Adam Barlow", "Factory inheritance"]],
    ["Who sent Gail Platt disturbing cards pretending to be her dead husband Richard Hillman?", "David Platt", ["Phil Nail", "Martin Platt", "Charlie Stubbs"], "Easy", "2006", "Storylines", ["David Platt", "Gail Platt", "Richard Hillman", "Forged cards", "Psychological cruelty"]],
    ["Which man was Gail Platt dating when David tried to break them up?", "Phil Nail", ["Archie Shuttleworth", "Joe McIntyre", "Richard Hillman"], "Medium", "2006", "Relationships", ["Gail Platt", "Phil Nail", "David Platt", "Relationship sabotage", "Reflexologist"]],
    ["Which boy was officially adopted by Les Battersby-Brown?", "Chesney Brown", ["David Platt", "Craig Harris", "Ryan Connor"], "Easy", "2006", "Families", ["Les Battersby-Brown", "Chesney Brown", "Cilla Brown", "Adoption", "Brown family"]],
    ["Which former Rovers manager left Weatherfield for Derbyshire?", "Shelley Unwin", ["Bet Lynch", "Natalie Barnes", "Liz McDonald"], "Medium", "2006", "Departures", ["Shelley Unwin", "Derbyshire", "Rovers Return", "Departure", "Charlie Stubbs"]],
    ["What name did Ashley and Claire Peacock give their second son?", "Freddie", ["Joshua", "Billy", "Ben"], "Easy", "2006", "Families", ["Claire Peacock", "Ashley Peacock", "Freddie Peacock", "New baby", "Peacock family"]],
    ["What condition led Claire Peacock to fear she had been given the wrong baby?", "Postnatal depression", ["Amnesia", "An ear infection", "Epilepsy"], "Medium", "2006", "Storylines", ["Claire Peacock", "Freddie Peacock", "Postnatal depression", "Mental health", "Baby mix-up fears"]],
    ["Which bride was left at the register office when Jason Grimshaw abandoned their wedding?", "Sarah Platt", ["Violet Wilson", "Maria Sutherland", "Rosie Webster"], "Easy", "2006", "Weddings", ["Sarah Platt", "Jason Grimshaw", "Jilted bride", "Wedding collapse", "Grimshaw family"]],
    ["Which Grimshaw brother was due to marry Sarah Platt but backed out?", "Jason Grimshaw", ["Todd Grimshaw", "Peter Barlow", "Jamie Baldwin"], "Easy", "2006", "Relationships", ["Jason Grimshaw", "Sarah Platt", "Wedding plans", "Cold feet", "Grimshaw family"]],
    ["Which young man moved to Berlin after Rosie Webster decided not to go with him?", "Craig Harris", ["David Platt", "Ryan Connor", "Todd Grimshaw"], "Medium", "2006", "Departures", ["Craig Harris", "Rosie Webster", "Berlin", "Teenage romance", "Departure"]],
    ["Which European city did the Webster family visit on holiday?", "Paris", ["Rome", "Madrid", "Prague"], "Medium", "2006", "Travel", ["Kevin Webster", "Sally Webster", "Rosie Webster", "Sophie Webster", "Paris", "Family holiday"]],
    ["Which relative did Kevin Webster reconnect with on the family's holiday?", "His father Bill", ["His brother Carl", "His uncle Jack", "His son Jake"], "Medium", "2006", "Families", ["Kevin Webster", "Bill Webster", "Paris", "Father and son", "Reunion"]],
    ["Which character, played by Kym Marsh, arrived as a Rovers barmaid?", "Michelle Connor", ["Carla Connor", "Violet Wilson", "Kelly Crabtree"], "Easy", "2006", "Arrivals", ["Michelle Connor", "Kym Marsh", "Rovers Return", "Barmaid", "Character debut"]],
    ["What was the first name of Michelle Connor's teenage son when they arrived?", "Ryan", ["Adam", "Jason", "Craig"], "Easy", "2006", "Families", ["Michelle Connor", "Ryan Connor", "Connor family", "Mother and son", "Character debut"]],
    ["Which newcomer bought Adam Barlow's share of Underworld?", "Liam Connor", ["Tony Gordon", "Steve McDonald", "Joe Carter"], "Medium", "2006", "Businesses", ["Liam Connor", "Adam Barlow", "Danny Baldwin", "Underworld", "Factory share purchase"]],
    ["Who was Liam Connor's older brother and fellow factory investor?", "Paul Connor", ["Ryan Connor", "Jamie Baldwin", "Danny Baldwin"], "Medium", "2006", "Families", ["Paul Connor", "Liam Connor", "Underworld", "Business partners", "Connor family"]],
    ["Which actor originally played Liam Connor?", "Rob James-Collier", ["Sean Gallagher", "Rupert Hill", "Ryan Thomas"], "Medium", "2006", "Actors", ["Liam Connor", "Rob James-Collier", "Casting", "Character debut", "Underworld"]],
    ["Which actress made her debut as Carla Connor?", "Alison King", ["Kym Marsh", "Debra Stephenson", "Sally Lindsay"], "Easy", "2006", "Actors", ["Carla Connor", "Alison King", "Character debut", "Factory", "Connor family"]],
    ["To whom was Carla Connor married when she first arrived in Weatherfield?", "Paul Connor", ["Liam Connor", "Tony Gordon", "Danny Baldwin"], "Medium", "2006", "Families", ["Carla Connor", "Paul Connor", "Liam Connor", "Married couple", "Connor family"]],
    ["Which Rovers landlord died on the day he was due to marry?", "Fred Elliott", ["Alec Gilroy", "Duggie Ferguson", "Mike Baldwin"], "Easy", "2006", "Departures", ["Fred Elliott", "Bev Unwin", "Wedding day", "Stroke", "Rovers Return", "Death"]],
    ["Whom was Fred Elliott due to marry on the day he died?", "Bev Unwin", ["Audrey Roberts", "Eve Sykes", "Rita Sullivan"], "Easy", "2006", "Weddings", ["Fred Elliott", "Bev Unwin", "Wedding plans", "Fatal stroke", "Rovers Return"]],
    ["At whose home did Fred Elliott suffer his fatal stroke?", "Audrey Roberts's", ["Betty Williams's", "Deirdre Barlow's", "Eileen Grimshaw's"], "Medium", "2006", "Storylines", ["Fred Elliott", "Audrey Roberts", "Fatal stroke", "Final visit", "Wedding day"]],
    ["Which actor had played butcher Fred Elliott since 1994?", "John Savident", ["John Bowe", "John Thomson", "Roy Hudd"], "Medium", "2006", "Actors", ["Fred Elliott", "John Savident", "Casting", "Butcher", "Long-running character"]],
    ["Into which river were Fred Elliott's ashes scattered?", "The River Tame", ["The River Irwell", "The River Mersey", "The River Dee"], "Hard", "2006", "Funerals", ["Fred Elliott", "River Tame", "Ashes scattering", "Ashley Peacock", "Bev Unwin"]],
    ["Which McDonald bought the Rovers Return after Fred Elliott's death?", "Steve McDonald", ["Jim McDonald", "Andy McDonald", "Liz McDonald"], "Easy", "2006", "Rovers Return", ["Steve McDonald", "Rovers Return", "Fred Elliott", "Pub purchase", "Pub owner"]],
    ["Who became Rovers landlady after Steve McDonald bought the pub?", "Liz McDonald", ["Bev Unwin", "Shelley Unwin", "Bet Lynch"], "Easy", "2006", "Rovers Return", ["Liz McDonald", "Steve McDonald", "Rovers Return", "Landlady", "Pub management"]],
    ["Which builder held David Platt's head underwater during a confrontation?", "Charlie Stubbs", ["Jason Grimshaw", "Nathan Cooper", "Bill Webster"], "Medium", "2006", "Storylines", ["Charlie Stubbs", "David Platt", "Drowning threat", "Violence", "Builder"]],
    ["Which hairdresser told Tracy Barlow about her affair with Charlie Stubbs?", "Maria Sutherland", ["Violet Wilson", "Leanne Battersby", "Kelly Crabtree"], "Medium", "2006", "Relationships", ["Maria Sutherland", "Charlie Stubbs", "Tracy Barlow", "Affair", "Exposure"]],
    ["Which woman was Charlie Stubbs living with while having an affair with Maria?", "Tracy Barlow", ["Shelley Unwin", "Bev Unwin", "Sarah Platt"], "Easy", "2006", "Relationships", ["Charlie Stubbs", "Tracy Barlow", "Maria Sutherland", "Infidelity", "No. 6"]],
    ["Which Baldwin son had an affair with his former stepmother, devastating his father?", "Jamie Baldwin", ["Adam Barlow", "Warren Baldwin", "Mark Redman"], "Medium", "2006", "Relationships", ["Jamie Baldwin", "Frankie Baldwin", "Danny Baldwin", "Forbidden romance", "Family feud"]],
    ["Which woman was at the centre of Jamie and Danny Baldwin's bitter feud?", "Frankie Baldwin", ["Leanne Battersby", "Carla Connor", "Linda Baldwin"], "Medium", "2006", "Families", ["Frankie Baldwin", "Jamie Baldwin", "Danny Baldwin", "Family betrayal", "Affair"]],
    ["Who disappeared after threatening to jump from a viaduct?", "Danny Baldwin", ["Jamie Baldwin", "Peter Barlow", "Liam Connor"], "Medium", "2006", "Storylines", ["Danny Baldwin", "Jamie Baldwin", "Viaduct", "Threatened suicide", "Disappearance"]],
    ["Which illness did Cilla Battersby-Brown falsely claim was terminal?", "Skin cancer", ["Lung cancer", "Breast cancer", "Leukaemia"], "Medium", "2006", "Comedy", ["Cilla Battersby-Brown", "Skin cancer", "False terminal diagnosis", "Les Battersby", "Manipulation"]],
    ["To which American state did Cilla Battersby-Brown fly alone?", "Florida", ["California", "Nevada", "Texas"], "Medium", "2006", "Departures", ["Cilla Battersby-Brown", "Florida", "Les Battersby", "False illness", "Holiday"]],
    ["Which former Rovers employee returned pregnant with Charlie Stubbs's baby?", "Shelley Unwin", ["Violet Wilson", "Bev Unwin", "Geena Gregory"], "Medium", "2006", "Families", ["Shelley Unwin", "Charlie Stubbs", "Bev Unwin", "Pregnancy", "Return visit"]],

    // 2007
    ["Which builder was murdered by Tracy Barlow?", "Charlie Stubbs", ["Jason Grimshaw", "Bill Webster", "Nathan Cooper"], "Easy", "2007", "Crime", ["Tracy Barlow", "Charlie Stubbs", "Murder", "Builder", "Killing"]],
    ["What defence did Tracy Barlow claim after killing Charlie Stubbs?", "Self-defence", ["Accidental poisoning", "Mistaken identity", "Temporary amnesia"], "Easy", "2007", "Crime", ["Tracy Barlow", "Charlie Stubbs", "Self-defence claim", "Murder trial", "Deception"]],
    ["To which family member did Tracy admit that Charlie's murder was planned?", "Her mother Deirdre", ["Her father Ken", "Her brother Peter", "Her daughter Amy"], "Medium", "2007", "Families", ["Tracy Barlow", "Deirdre Barlow", "Confession", "Premeditated murder", "Mother and daughter"]],
    ["What verdict did the jury reach in Tracy Barlow's murder trial?", "Guilty", ["Not guilty", "Not proven", "Case dismissed"], "Easy", "2007", "Crime", ["Tracy Barlow", "Charlie Stubbs", "Guilty verdict", "Murder trial", "Court"]],
    ["What sentence did Tracy Barlow receive for Charlie Stubbs's murder?", "Life imprisonment", ["Community service", "Five years in prison", "A suspended sentence"], "Easy", "2007", "Crime", ["Tracy Barlow", "Charlie Stubbs", "Life sentence", "Prison", "Murder conviction"]],
    ["Which Platt teenager lied to help Tracy Barlow obtain bail?", "David Platt", ["Sarah Platt", "Nick Tilsley", "Bethany Platt"], "Medium", "2007", "Crime", ["David Platt", "Tracy Barlow", "Bail", "False testimony", "Murder case"]],
    ["Which Barlow returned to Weatherfield shortly before Charlie Stubbs's death?", "Peter Barlow", ["Adam Barlow", "Daniel Osbourne", "Susan Barlow"], "Medium", "2007", "Returns", ["Peter Barlow", "Charlie Stubbs", "Barlow family", "Character return", "New Year"]],
    ["Which Rovers barmaid lost a baby through an ectopic pregnancy?", "Violet Wilson", ["Michelle Connor", "Liz McDonald", "Bev Unwin"], "Medium", "2007", "Storylines", ["Violet Wilson", "Ectopic pregnancy", "Miscarriage", "Rovers Return", "Bereavement"]],
    ["Who discovered an unexploded Second World War bomb with a metal detector?", "Chesney Brown", ["David Platt", "Craig Harris", "Ryan Connor"], "Easy", "2007", "Comedy", ["Chesney Brown", "World War II", "Unexploded bomb", "Metal detector", "War relic"]],
    ["Where was the unexploded wartime bomb that caused an evacuation found?", "The Peacocks' garden", ["The Rovers cellar", "Underworld's storeroom", "The Corner Shop roof"], "Medium", "2007", "Community", ["Peacock family", "Garden", "Unexploded wartime bomb", "Evacuation", "Community"]],
    ["Which family moved into Number 6 Coronation Street?", "The Mortons", ["The Connors", "The Harrises", "The Malletts"], "Easy", "2007", "Arrivals", ["Morton family", "Jerry Morton", "No. 6", "New arrivals", "Family home"]],
    ["What was the first name of the Morton father, who ran the kebab shop?", "Jerry", ["Darryl", "Wilf", "Paul"], "Easy", "2007", "Families", ["Jerry Morton", "Morton family", "Kebab shop", "Father", "Victoria Street"]],
    ["What kind of food business did Jerry Morton open on Victoria Street?", "A kebab shop", ["A fish-and-chip shop", "A pizza restaurant", "A bakery"], "Medium", "2007", "Businesses", ["Jerry Morton", "Kebab shop", "Victoria Street", "Takeaway", "Business opening"]],
    ["Which two members of the Morton family were twins?", "Mel and Darryl", ["Jodie and Kayleigh", "Jerry and Wilf", "Ryan and Alex"], "Medium", "2007", "Families", ["Mel Morton", "Darryl Morton", "Morton family", "Twins", "Siblings"]],
    ["Which actor played Jerry Morton on his arrival?", "Michael Starke", ["John Savident", "Craig Charles", "Ian Reddington"], "Medium", "2007", "Actors", ["Jerry Morton", "Michael Starke", "Casting", "Character debut", "Morton family"]],
    ["Which barmaid discovered that her fiancé Sonny Dhillon had kissed Sean Tully?", "Michelle Connor", ["Violet Wilson", "Liz McDonald", "Bev Unwin"], "Medium", "2007", "Relationships", ["Michelle Connor", "Sonny Dhillon", "Sean Tully", "Infidelity", "Engagement"]],
    ["Who began dating Michelle Connor after she split from Sonny Dhillon?", "Steve McDonald", ["Lloyd Mullaney", "Peter Barlow", "Dev Alahan"], "Easy", "2007", "Relationships", ["Michelle Connor", "Steve McDonald", "Romance", "Sonny Dhillon", "Rovers Return"]],
    ["Which factory worker died in a fall during an unauthorised night shift?", "Kasia Barowicz", ["Wiki Dankowska", "Joanne Jackson", "Kelly Crabtree"], "Medium", "2007", "Storylines", ["Kasia Barowicz", "Underworld", "Illegal night shift", "Fatal fall", "Workplace death"]],
    ["At which workplace did Kasia Barowicz suffer her fatal fall?", "Underworld", ["The Rovers Return", "Roy's Rolls", "The Kabin"], "Medium", "2007", "Businesses", ["Kasia Barowicz", "Underworld", "Stairwell", "Workplace accident", "Factory"]],
    ["Which Polish machinist was asked to help cover up the details of Kasia Barowicz's death?", "Wiki Dankowska", ["Kasia Barowicz", "Fiz Brown", "Janice Battersby"], "Medium", "2007", "Storylines", ["Wiki Dankowska", "Kasia Barowicz", "Paul Connor", "Factory cover-up", "Polish worker"]],
    ["Which factory worker revealed that she was an undocumented immigrant from Liberia?", "Joanne Jackson", ["Kelly Crabtree", "Carla Connor", "Becky Granger"], "Medium", "2007", "Storylines", ["Joanne Jackson", "Liberia", "Immigration status", "Undocumented immigrant", "Underworld"]],
    ["Which Battersby returned to Weatherfield secretly working as an escort?", "Leanne Battersby", ["Toyah Battersby", "Janice Battersby", "Cilla Brown"], "Easy", "2007", "Returns", ["Leanne Battersby", "Escort work", "Return to Weatherfield", "Janice Battersby", "Secrecy"]],
    ["Which Connor brother had been dating Leanne Battersby when he discovered her escort work?", "Liam Connor", ["Paul Connor", "Ryan Connor", "Tony Gordon"], "Medium", "2007", "Relationships", ["Liam Connor", "Leanne Battersby", "Escort work", "Romance", "Connor family"]],
    ["Who locked Leanne Battersby in his car boot before a fatal crash?", "Paul Connor", ["Liam Connor", "Steve McDonald", "Charlie Stubbs"], "Medium", "2007", "Crime", ["Paul Connor", "Leanne Battersby", "Kidnapping", "Car boot", "Fatal crash"]],
    ["How did Underworld businessman Paul Connor die?", "In a car crash", ["In a factory fire", "From a heart attack", "In a boating accident"], "Easy", "2007", "Departures", ["Paul Connor", "Leanne Battersby", "Lorry collision", "Fatal accident", "Underworld"]],
    ["Which widow inherited Paul Connor's stake in Underworld?", "Carla Connor", ["Michelle Connor", "Frankie Baldwin", "Leanne Battersby"], "Medium", "2007", "Businesses", ["Carla Connor", "Paul Connor", "Underworld", "Widowhood", "Factory shares"]],
    ["Who was actually driving when Michelle Connor's partner Dean died in a crash?", "Paul Connor", ["Liam Connor", "Dean himself", "Steve McDonald"], "Medium", "2007", "Families", ["Paul Connor", "Dean", "Michelle Connor", "Liam Connor", "Concealed drink-driving", "Car crash"]],
    ["Which former partner of Ken Barlow returned with their son Daniel?", "Denise Osbourne", ["Susan Barlow", "Deirdre Barlow", "Martha Fraser"], "Medium", "2007", "Returns", ["Denise Osbourne", "Ken Barlow", "Daniel Osbourne", "Reunion", "Character return"]],
    ["What was the name of Ken Barlow and Denise Osbourne's son?", "Daniel", ["Simon", "Adam", "Peter"], "Easy", "2007", "Families", ["Daniel Osbourne", "Ken Barlow", "Denise Osbourne", "Parentage", "Barlow family"]],
    ["Who slapped Denise Osbourne in the Rovers when she returned to Weatherfield?", "Deirdre Barlow", ["Blanche Hunt", "Audrey Roberts", "Rita Sullivan"], "Medium", "2007", "Relationships", ["Deirdre Barlow", "Denise Osbourne", "Ken Barlow", "Rovers Return", "Slap"]],
    ["Who kidnapped baby Freddie Peacock during the house-fire storyline?", "Casey Carswell", ["Brenda Fearns", "Cilla Brown", "Tracy Barlow"], "Medium", "2007", "Crime", ["Casey Carswell", "Freddie Peacock", "Claire Peacock", "Kidnapping", "Arson"]],
    ["Where was baby Freddie Peacock found after his abduction?", "In a park", ["At the railway station", "In a hospital", "Outside the Rovers"], "Medium", "2007", "Families", ["Freddie Peacock", "Casey Carswell", "Park", "Abduction", "Baby rescue"]],
    ["Which Peacock family member was initially suspected of starting the house fire?", "Claire Peacock", ["Ashley Peacock", "Joshua Peacock", "Fred Elliott"], "Medium", "2007", "Crime", ["Claire Peacock", "Ashley Peacock", "House fire", "Arson suspicion", "Peacock family"]],
    ["Which schoolteacher began dating Fiz Brown?", "John Stape", ["Martin Platt", "Roger Stiles", "Tony Gordon"], "Easy", "2007", "Relationships", ["Fiz Brown", "John Stape", "Schoolteacher", "Romance", "Teaching"]],
    ["Which Webster teenager had a secret affair with teacher John Stape?", "Rosie Webster", ["Sophie Webster", "Sarah Platt", "Kayleigh Morton"], "Easy", "2007", "Relationships", ["Rosie Webster", "John Stape", "Fiz Brown", "Teacher student affair", "Secret relationship"]],
    ["Which couple celebrated their golden wedding anniversary in August 2007?", "Jack and Vera Duckworth", ["Ken and Deirdre Barlow", "Kevin and Sally Webster", "Roy and Hayley Cropper"], "Easy", "2007", "Families", ["Jack Duckworth", "Vera Duckworth", "Golden wedding", "Fifty years", "Rovers Return"]],
    ["Which grandson arrived and stole Jack Duckworth's identity to obtain credit?", "Paul Clayton", ["Tyrone Dobbs", "Chesney Brown", "Craig Harris"], "Medium", "2007", "Crime", ["Paul Clayton", "Jack Duckworth", "Vera Duckworth", "Identity theft", "Bank loan"]],
    ["Which Rovers barman agreed to father Violet Wilson's baby?", "Sean Tully", ["Jamie Baldwin", "Jason Grimshaw", "Lloyd Mullaney"], "Easy", "2007", "Families", ["Sean Tully", "Violet Wilson", "Parenting arrangement", "Biological father", "Rovers Return"]],
    ["Who planned to raise Violet Wilson's baby alongside her, upsetting Sean Tully?", "Jamie Baldwin", ["Jason Grimshaw", "Todd Grimshaw", "Liam Connor"], "Medium", "2007", "Families", ["Jamie Baldwin", "Violet Wilson", "Sean Tully", "Parenthood plans", "Unborn baby"]],
    ["Which Street Cars colleague accompanied Steve McDonald to Malta?", "Eileen Grimshaw", ["Lloyd Mullaney", "Liz McDonald", "Michelle Connor"], "Medium", "2007", "Travel", ["Eileen Grimshaw", "Steve McDonald", "Malta", "Holiday", "Street Cars"]],
    ["Which resident discovered that she had an adult son named Christian Gatley?", "Hayley Cropper", ["Eileen Grimshaw", "Rita Sullivan", "Bev Unwin"], "Medium", "2007", "Families", ["Hayley Cropper", "Christian Gatley", "Adult son", "Family reunion", "Parentage"]],
    ["To which woman did Norris Cole first propose in September 2007?", "Rita Sullivan", ["Blanche Hunt", "Doreen Fenwick", "Betty Williams"], "Medium", "2007", "Relationships", ["Norris Cole", "Rita Sullivan", "Marriage proposal", "Rejection", "The Kabin"]],
    ["To which American city did Cilla Battersby-Brown move?", "Las Vegas", ["Los Angeles", "New York", "Miami"], "Easy", "2007", "Departures", ["Cilla Battersby-Brown", "Las Vegas", "USA", "Departure", "Chesney Brown"]],
    ["Which child accidentally swallowed an Ecstasy tablet David Platt had hidden in a doll?", "Bethany Platt", ["Sophie Webster", "Amy Barlow", "Kayleigh Morton"], "Easy", "2007", "Storylines", ["Bethany Platt", "David Platt", "Ecstasy tablet", "Doll", "Hospital"]],
    ["Which Platt staged a suicide attempt to disrupt his sister's wedding?", "David Platt", ["Nick Tilsley", "Martin Platt", "Todd Grimshaw"], "Easy", "2007", "Weddings", ["David Platt", "Sarah Platt", "Fake suicide attempt", "Wedding sabotage", "Canal"]],
    ["Whom did Sarah Platt marry on Halloween 2007 despite David's interference?", "Jason Grimshaw", ["Todd Grimshaw", "Nick Tilsley", "Liam Connor"], "Easy", "2007", "Weddings", ["Sarah Platt", "Jason Grimshaw", "Halloween wedding", "Grimshaw family", "David Platt"]],
    ["Who loosened scaffolding bolts, causing Jason Grimshaw to fall?", "David Platt", ["Charlie Stubbs", "Todd Grimshaw", "Craig Harris"], "Medium", "2007", "Crime", ["David Platt", "Jason Grimshaw", "Scaffolding sabotage", "Builder's Yard", "Injury"]],
    ["Which relative invited Todd Grimshaw back to Weatherfield to spoil Sarah's wedding?", "David Platt", ["Eileen Grimshaw", "Jason Grimshaw", "Gail Platt"], "Medium", "2007", "Families", ["David Platt", "Todd Grimshaw", "Sarah Platt", "Wedding sabotage", "Grimshaw family"]],
    ["To which Italian city did Sarah Platt move with Bethany?", "Milan", ["Rome", "Florence", "Turin"], "Easy", "2007", "Departures", ["Sarah Platt", "Bethany Platt", "Milan", "Italy", "Departure"]],
    ["Who refused to accompany Sarah Platt to Italy after learning she had framed David?", "Jason Grimshaw", ["Todd Grimshaw", "Peter Barlow", "Steve McDonald"], "Medium", "2007", "Relationships", ["Jason Grimshaw", "Sarah Platt", "Milan", "Drug framing revelation", "Separation"]],
    ["Who married Liz McDonald on New Year's Eve 2007?", "Vernon Tomlin", ["Jim McDonald", "Lloyd Mullaney", "Harry Mason"], "Easy", "2007", "Weddings", ["Liz McDonald", "Vernon Tomlin", "New Year's Eve", "Wedding", "Rovers Return"]],
    ["Which salon worker was originally offered the Milan job Sarah Platt took for herself?", "David Platt", ["Maria Sutherland", "Audrey Roberts", "Candice Stowe"], "Medium", "2007", "Departures", ["David Platt", "Sarah Platt", "Stephen Reid", "Milan job", "Deception"]],
    ["Which businessman started dating Carla Connor, upsetting Liam?", "Tony Gordon", ["Danny Baldwin", "Dev Alahan", "Roger Stiles"], "Medium", "2007", "Relationships", ["Tony Gordon", "Carla Connor", "Liam Connor", "Dating", "Jealousy"]],
    ["Which hairdresser gave Liam Connor a dog called Ozzy?", "Maria Sutherland", ["Rosie Webster", "Violet Wilson", "Leanne Battersby"], "Medium", "2007", "Relationships", ["Maria Sutherland", "Liam Connor", "Ozzy", "Dog", "Gift"]]
];

// Preserve the original rotation of the four answer choices.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, specialistTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(1401 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '2000s', year, topic, ...specialistTags])],
        dailyEligible: true
    };
});

// Validate the actual exported questions, including metadata and tagging.
if (questions.length !== 100 || questions[0].id !== 'tv_1401' ||
    questions[99].id !== 'tv_1500' ||
    questions.filter(q => q.tags.includes('2006')).length !== 46 ||
    questions.filter(q => q.tags.includes('2007')).length !== 54) {
    throw new Error('Pack 174: incorrect question count, year split or ID range');
}
const seenIds = new Set();
const seenWording = new Set();
for (const q of questions) {
    const wording = q.question.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
    if (seenIds.has(q.id) || seenWording.has(wording) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        !q.tags.includes('Soaps') || !q.tags.includes('Coronation Street') ||
        !q.tags.includes('2000s') || !['2006', '2007'].some(y => q.tags.includes(y)) ||
        q.tags.length < 8 || q.category !== 'Television' || q.dailyEligible !== true) {
        throw new Error('Pack 174: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenWording.add(wording);
}

module.exports = questions;

