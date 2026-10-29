// quiz_pack177.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2012 and 2013
// 100 questions: tv_1701 to tv_1800
// 49 questions from 2012; 51 from 2013.
// Tagging and wording audit: original answers and settings retained.
// quiz_bank.js stays unchanged.

// Each fact: question, answer, alternatives, difficulty, year, topic, specialist tags.
const facts = [
    // 2012
    ["Who exposed Tracy Barlow's miscarriage lie at her wedding reception?", "Becky McDonald", ["Carla Connor", "Leanne Barlow", "Kylie Platt"], "Easy", "2012", "Storylines", ["Tracy Barlow", "Becky McDonald", "Steve McDonald", "Miscarriage lie", "Wedding revelation"]],
    ["What evidence proved Tracy Barlow had miscarried before the fall she blamed on Becky?", "Her medical records", ["A witness's photograph", "A recorded telephone call", "A hospital CCTV recording"], "Medium", "2012", "Storylines", ["Tracy Barlow", "Becky McDonald", "Medical records", "Miscarriage", "False accusation"]],
    ["Which Caribbean island did Becky McDonald move to when she left Weatherfield?", "Barbados", ["Jamaica", "St Lucia", "Antigua"], "Medium", "2012", "Departures", ["Becky McDonald", "Danny Stratton", "Barbados", "Departure", "New life"]],
    ["Who left Weatherfield with Becky McDonald for Barbados?", "Danny Stratton", ["Steve McDonald", "Lloyd Mullaney", "Nick Tilsley"], "Medium", "2012", "Departures", ["Becky McDonald", "Danny Stratton", "Barbados", "Departure", "Romance"]],
    ["Whom did Steve McDonald marry before ending the marriage hours later?", "Tracy Barlow", ["Becky McDonald", "Michelle Connor", "Leanne Barlow"], "Easy", "2012", "Weddings", ["Steve McDonald", "Tracy Barlow", "Wedding", "Marriage breakdown", "Becky McDonald"]],
    ["What verdict did Frank Foster receive at his rape trial?", "Not guilty", ["Guilty", "The jury failed to agree", "The case was dismissed before trial"], "Easy", "2012", "Crime", ["Frank Foster", "Carla Connor", "Rape trial", "Not guilty verdict", "Court"]],
    ["Where was Frank Foster found murdered?", "Underworld factory", ["The Rovers Return", "Nick's Bistro", "Street Cars"], "Easy", "2012", "Crime", ["Frank Foster", "Underworld", "Murder", "Factory", "Crime investigation"]],
    ["Who murdered Frank Foster?", "Anne Foster", ["Carla Connor", "Sally Webster", "Jenny Sumner"], "Easy", "2012", "Crime", ["Anne Foster", "Frank Foster", "Murder", "Mother and son", "Confession"]],
    ["Who falsely confessed to killing Frank Foster to protect Carla Connor?", "Peter Barlow", ["Rob Donovan", "Nick Tilsley", "Steve McDonald"], "Medium", "2012", "Crime", ["Peter Barlow", "Frank Foster", "Carla Connor", "False confession", "Protecting partner"]],
    ["Which businesswoman secretly worked with Frank Foster to take control of Underworld?", "Jenny Sumner", ["Michelle Connor", "Julie Carp", "Beth Tinker"], "Medium", "2012", "Businesses", ["Jenny Sumner", "Frank Foster", "Underworld", "Factory takeover", "Business scheming"]],
    ["What type of television programme did Rosie Webster leave Weatherfield to join?", "A reality television show", ["A soap opera", "A cooking competition", "A period drama"], "Easy", "2012", "Departures", ["Rosie Webster", "Reality television", "Departure", "Media career", "Webster family"]],
    ["Which former conman resumed his romance with Audrey Roberts?", "Lewis Archer", ["Joe McIntyre", "Rick Neelan", "Frank Foster"], "Easy", "2012", "Relationships", ["Lewis Archer", "Audrey Roberts", "Romance", "Conman", "Reconciliation"]],
    ["Which long-serving Rovers favourite's death was announced in 2012?", "Betty Williams", ["Rita Sullivan", "Emily Bishop", "Sylvia Goodwin"], "Easy", "2012", "Departures", ["Betty Williams", "Rovers Return", "Death", "Funeral", "Betty's hotpot"]],
    ["Which actress was famous for portraying Betty Williams?", "Betty Driver", ["Jean Alexander", "Doris Speed", "Pat Phoenix"], "Medium", "2012", "Actors", ["Betty Driver", "Betty Williams", "Casting", "Actress", "Rovers Return"]],
    ["Which estranged father returned to Weatherfield and became involved in Tommy Duckworth's life?", "Terry Duckworth", ["Bill Webster", "Kevin Webster", "Jim McDonald"], "Easy", "2012", "Families", ["Terry Duckworth", "Tommy Duckworth", "Estranged father", "Return", "Duckworth family"]],
    ["What was the name of Terry Duckworth's proposed nightclub?", "Se7enth Hea7en", ["Valentino's", "The Joinery", "The Flying Horse"], "Hard", "2012", "Businesses", ["Terry Duckworth", "Se7enth Hea7en", "Nightclub", "Lap-dancing club", "Business venture"]],
    ["Which loan shark pursued Tommy Duckworth over a debt?", "Rick Neelan", ["Frank Foster", "Karl Munro", "Rob Donovan"], "Medium", "2012", "Crime", ["Rick Neelan", "Tommy Duckworth", "Loan shark", "Debt", "Threats"]],
    ["What did Terry Duckworth take from Tommy before disappearing again?", "£9,000", ["£900", "£3,000", "£20,000"], "Medium", "2012", "Money", ["Terry Duckworth", "Tommy Duckworth", "£9,000", "Theft", "Departure"]],
    ["Who actually assaulted Tina McIntyre during Tommy's debt troubles?", "Terry Duckworth", ["Rick Neelan", "Tyrone Dobbs", "Jason Grimshaw"], "Medium", "2012", "Crime", ["Terry Duckworth", "Tina McIntyre", "Assault", "Tommy Duckworth", "False blame"]],
    ["Which mechanic suffered domestic abuse from his partner Kirsty Soames?", "Tyrone Dobbs", ["Tommy Duckworth", "Kevin Webster", "Luke Britton"], "Easy", "2012", "Storylines", ["Tyrone Dobbs", "Kirsty Soames", "Domestic abuse", "Male victim", "Violence"]],
    ["What was Kirsty Soames's profession before she was suspended?", "Police officer", ["Nurse", "Solicitor", "Social worker"], "Easy", "2012", "Occupations", ["Kirsty Soames", "Police officer", "Suspension", "Employment", "Misconduct"]],
    ["What did Tyrone Dobbs and Kirsty Soames name their daughter?", "Ruby", ["Hope", "Lily", "Amy"], "Easy", "2012", "Families", ["Tyrone Dobbs", "Kirsty Soames", "Ruby Dobbs", "Birth", "Parents"]],
    ["Where did Kirsty Soames give birth to Ruby?", "The Rovers Return", ["Underworld", "The Kabin", "Nick's Bistro"], "Medium", "2012", "Families", ["Kirsty Soames", "Ruby Dobbs", "Rovers Return", "Birth", "Marcus Dent"]],
    ["What did Kirsty Soames leave blank when registering baby Ruby's birth?", "The father's name", ["The baby's surname", "The baby's date of birth", "The mother's address"], "Medium", "2012", "Families", ["Kirsty Soames", "Ruby Dobbs", "Tyrone Dobbs", "Birth registration", "Parental rights"]],
    ["Which woman learned that her apparent pregnancy was actually an ovarian growth?", "Julie Carp", ["Fiz Stape", "Maria Connor", "Eileen Grimshaw"], "Medium", "2012", "Storylines", ["Julie Carp", "Brian Packham", "Ovarian growth", "False positive pregnancy", "Medical diagnosis"]],
    ["What medical treatment left Julie Carp unable to have children?", "An operation on her ovary", ["An appendectomy", "A kidney transplant", "An emergency caesarean"], "Medium", "2012", "Storylines", ["Julie Carp", "Ovarian operation", "Hysterectomy", "Infertility", "Brian Packham"]],
    ["How did Paul Kershaw's wife Lesley die?", "She was electrocuted", ["She drowned", "She fell down stairs", "She was killed in a road accident"], "Medium", "2012", "Departures", ["Lesley Kershaw", "Paul Kershaw", "Electrocution", "Toaster", "Death"]],
    ["Which resident was in a relationship with firefighter Paul Kershaw?", "Eileen Grimshaw", ["Gail McIntyre", "Sally Webster", "Audrey Roberts"], "Easy", "2012", "Relationships", ["Eileen Grimshaw", "Paul Kershaw", "Firefighter", "Romance", "Grimshaw family"]],
    ["Whom did Rita Sullivan marry?", "Dennis Tanner", ["Norris Cole", "Ken Barlow", "Roy Cropper"], "Easy", "2012", "Weddings", ["Rita Sullivan", "Dennis Tanner", "Wedding", "Marriage", "Reunion"]],
    ["Which married shopkeeper began an affair with Karl Munro?", "Sunita Alahan", ["Maria Connor", "Carla Connor", "Tracy Barlow"], "Easy", "2012", "Relationships", ["Sunita Alahan", "Karl Munro", "Dev Alahan", "Affair", "Infidelity"]],
    ["Who was Karl Munro's partner before his affair with Sunita Alahan came to light?", "Stella Price", ["Gloria Price", "Leanne Barlow", "Eva Price"], "Easy", "2012", "Relationships", ["Karl Munro", "Stella Price", "Sunita Alahan", "Rovers Return", "Betrayal"]],
    ["How was newcomer Gloria Price related to Stella Price?", "She was Stella's mother", ["She was Stella's sister", "She was Stella's aunt", "She was Stella's cousin"], "Easy", "2012", "Families", ["Gloria Price", "Stella Price", "Mother and daughter", "Rovers Return", "Price family"]],
    ["Why was the Rovers' 'Pub of the Year' win called into question?", "Gloria Price had forged customer comments", ["It had failed a hygiene inspection", "It had served drinks after closing time", "It had entered under a false pub name"], "Medium", "2012", "Rovers Return", ["Gloria Price", "Rovers Return", "Pub of the Year", "Forged comments", "Competition fraud"]],
    ["Which woman suffered a miscarriage in July 2012 while expecting Gary Windass's child?", "Izzy Armstrong", ["Katy Armstrong", "Fiz Stape", "Tina McIntyre"], "Medium", "2012", "Families", ["Izzy Armstrong", "Gary Windass", "Miscarriage", "Pregnancy loss", "Armstrong family"]],
    ["Who initially offered to be a surrogate for her sister Izzy Armstrong?", "Katy Armstrong", ["Tina McIntyre", "Anna Windass", "Faye Windass"], "Easy", "2012", "Families", ["Katy Armstrong", "Izzy Armstrong", "Surrogacy", "Sisters", "Family support"]],
    ["Who agreed in September 2012 to carry a baby for Gary Windass and Izzy Armstrong?", "Tina McIntyre", ["Maria Connor", "Kylie Platt", "Sophie Webster"], "Easy", "2012", "Surrogacy", ["Tina McIntyre", "Gary Windass", "Izzy Armstrong", "Surrogacy", "Pregnancy agreement"]],
    ["How much money was Tina McIntyre offered for acting as a surrogate?", "£15,000", ["£5,000", "£10,000", "£25,000"], "Medium", "2012", "Money", ["Tina McIntyre", "£15,000", "Surrogacy payment", "Owen Armstrong", "Debt"]],
    ["Which boyfriend strongly opposed Tina McIntyre's decision to become a surrogate?", "Tommy Duckworth", ["Jason Grimshaw", "David Platt", "Ryan Connor"], "Easy", "2012", "Relationships", ["Tommy Duckworth", "Tina McIntyre", "Surrogacy", "Relationship conflict", "Opposition"]],
    ["Which character arrived in July 2012 as Carla Connor's brother?", "Rob Donovan", ["Frank Foster", "Marcus Dent", "Chris Gray"], "Easy", "2012", "Arrivals", ["Rob Donovan", "Carla Connor", "Brother and sister", "Character debut", "Prison release"]],
    ["Where had Rob Donovan been immediately before arriving in Weatherfield?", "Prison", ["The army", "Australia", "University"], "Medium", "2012", "Arrivals", ["Rob Donovan", "Prison", "Carla Connor", "Release", "Character arrival"]],
    ["Which character returned in July 2012 as Michelle Connor's son?", "Ryan Connor", ["Dylan Wilson", "Simon Barlow", "Craig Tinker"], "Easy", "2012", "Returns", ["Ryan Connor", "Michelle Connor", "Return", "Mother and son", "Family"]],
    ["Which illegal drug caused trouble for Ryan Connor after his return?", "Cocaine", ["Cannabis", "Heroin", "Ecstasy"], "Medium", "2012", "Storylines", ["Ryan Connor", "Cocaine", "Drug use", "Michelle Connor", "Return"]],
    ["Who discovered in September 2012 that Jenna Kamara was his daughter?", "Lloyd Mullaney", ["Steve McDonald", "Dev Alahan", "Owen Armstrong"], "Medium", "2012", "Families", ["Lloyd Mullaney", "Jenna Kamara", "Father and daughter", "Family discovery", "Parentage"]],
    ["Which former girlfriend did Ken Barlow encounter again on the school governors?", "Wendy Crozier", ["Martha Fraser", "Stephanie Beacham", "Valerie Barlow"], "Medium", "2012", "Returns", ["Ken Barlow", "Wendy Crozier", "School governors", "Former romance", "Reunion"]],
    ["Which pub worker had been Marcus Dent's boyfriend before they split?", "Sean Tully", ["Todd Grimshaw", "Jason Grimshaw", "Paul Kershaw"], "Easy", "2012", "Relationships", ["Marcus Dent", "Sean Tully", "Former partners", "Relationship break-up", "Rovers Return"]],
    ["Which hairdresser began a relationship with Marcus Dent?", "Maria Connor", ["Natasha Blakeman", "Audrey Roberts", "Kylie Platt"], "Easy", "2012", "Relationships", ["Marcus Dent", "Maria Connor", "Romance", "Hairdresser", "New relationship"]],
    ["Whose Christmas Day wedding to Nick Tilsley was called off?", "Leanne Barlow", ["Eva Price", "Tracy Barlow", "Michelle Connor"], "Easy", "2012", "Weddings", ["Leanne Barlow", "Nick Tilsley", "Christmas Day", "Cancelled wedding", "Peter Barlow"]],
    ["With whom did Nick Tilsley have a one-night stand on Christmas Day 2012?", "Kylie Platt", ["Carla Connor", "Becky McDonald", "Tina McIntyre"], "Easy", "2012", "Relationships", ["Nick Tilsley", "Kylie Platt", "Christmas Day", "One-night stand", "Infidelity"]],
    ["Who was elected head of governors at Bessie Street School?", "Ken Barlow", ["Brian Packham", "Norris Cole", "Roy Cropper"], "Medium", "2012", "Occupations", ["Ken Barlow", "Bessie Street School", "Head of governors", "Education", "School board"]],

    // 2013
    ["Which couple finally married in January 2013 after their Christmas wedding failed?", "Nick Tilsley and Leanne Barlow", ["Peter Barlow and Carla Connor", "David Platt and Kylie Turner", "Steve McDonald and Michelle Connor"], "Easy", "2013", "Weddings", ["Nick Tilsley", "Leanne Barlow", "Wedding", "Christmas Day", "Reconciliation"]],
    ["After discovering she was pregnant in 2013, which two men did Kylie Platt fear might be the father?", "David Platt and Nick Tilsley", ["Tommy Duckworth and Jason Grimshaw", "Peter Barlow and Steve McDonald", "Rob Donovan and Ryan Connor"], "Easy", "2013", "Families", ["Kylie Platt", "David Platt", "Nick Tilsley", "Pregnancy", "Paternity uncertainty"]],
    ["Who arrived in January 2013 as Faye Windass's biological father?", "Tim Metcalfe", ["Owen Armstrong", "Eddie Windass", "Rick Neelan"], "Easy", "2013", "Arrivals", ["Tim Metcalfe", "Faye Windass", "Biological father", "Arrival", "Windass family"]],
    ["Which physiotherapist began a relationship with Sophie Webster?", "Jenna Kamara", ["Sian Powers", "Maddie Heath", "Katy Armstrong"], "Medium", "2013", "Relationships", ["Jenna Kamara", "Sophie Webster", "Physiotherapist", "Same-sex romance", "Lloyd Mullaney"]],
    ["What was the name of Gloria Price's wealthy fiancé?", "Eric Babbage", ["Lewis Archer", "Dennis Tanner", "Milton Fanshaw"], "Medium", "2013", "Arrivals", ["Eric Babbage", "Gloria Price", "Wealthy fiance", "Engagement", "Character debut"]],
    ["Which actor played Gloria Price's fiancé Eric Babbage?", "Timothy West", ["Philip Lowrie", "John Michie", "Bill Tarmey"], "Medium", "2013", "Actors", ["Timothy West", "Eric Babbage", "Gloria Price", "Guest actor", "Casting"]],
    ["How much money did Lewis Archer steal from Gail McIntyre before fleeing?", "£40,000", ["£4,000", "£10,000", "£100,000"], "Medium", "2013", "Money", ["Lewis Archer", "Gail McIntyre", "£40,000", "Online banking scam", "Theft"]],
    ["Which secret did Lewis Archer use to blackmail Kylie Platt?", "She had slept with Nick Tilsley", ["She had stolen from the Rovers", "She had forged David's signature", "She had sold Max's belongings"], "Medium", "2013", "Crime", ["Lewis Archer", "Kylie Platt", "Nick Tilsley", "Affair secret", "Blackmail"]],
    ["Who halted her wedding to Tyrone Dobbs and exposed his affair?", "Kirsty Soames", ["Fiz Stape", "Maria Connor", "Sally Webster"], "Easy", "2013", "Weddings", ["Kirsty Soames", "Tyrone Dobbs", "Wedding stopped", "Fiz Stape", "Affair revelation"]],
    ["With whom was Tyrone Dobbs secretly in love during his failed wedding to Kirsty Soames?", "Fiz Stape", ["Tina McIntyre", "Maria Connor", "Kylie Platt"], "Easy", "2013", "Relationships", ["Tyrone Dobbs", "Fiz Stape", "Kirsty Soames", "Secret affair", "Domestic abuse"]],
    ["Who falsely claimed Tyrone Dobbs had been the violent partner in their relationship?", "Kirsty Soames", ["Sally Webster", "Tracy Barlow", "Carla Connor"], "Easy", "2013", "Crime", ["Kirsty Soames", "Tyrone Dobbs", "False abuse allegation", "Police", "Domestic violence"]],
    ["Where did Kirsty Soames finally admit that she, not Tyrone, had been the abuser?", "In court", ["At the Rovers", "At the police station", "At the garage"], "Easy", "2013", "Crime", ["Kirsty Soames", "Tyrone Dobbs", "Court confession", "Domestic abuse", "Acquittal"]],
    ["What happened to Tyrone and Kirsty's daughter Ruby when Tyrone was arrested?", "She went into temporary foster care", ["She went to live with Rita", "She was sent to boarding school", "She moved abroad with Kirsty"], "Medium", "2013", "Families", ["Ruby Dobbs", "Tyrone Dobbs", "Kirsty Soames", "Foster care", "Custody"]],
    ["Who deliberately started the fire at the Rovers Return in March 2013?", "Karl Munro", ["Jason Grimshaw", "Dev Alahan", "Rob Donovan"], "Easy", "2013", "Crime", ["Karl Munro", "Rovers Return", "Arson", "Fire", "Murder plot"]],
    ["Which firefighter died after entering the burning Rovers Return?", "Toni Griffiths", ["Paul Kershaw", "Kirsty Soames", "Emma Watts"], "Medium", "2013", "Departures", ["Toni Griffiths", "Rovers Return", "Firefighter", "Fire death", "Arson"]],
    ["Who was wrongly suspected of starting the Rovers fire?", "Sunita Alahan", ["Stella Price", "Eileen Grimshaw", "Gloria Price"], "Easy", "2013", "Crime", ["Sunita Alahan", "Karl Munro", "Rovers Return", "Arson accusation", "Wrongful suspicion"]],
    ["How did Karl Munro kill Sunita Alahan in hospital following the Rovers fire?", "He removed her breathing tube", ["He poisoned her food", "He smothered her with a pillow", "He tampered with her medication"], "Medium", "2013", "Crime", ["Karl Munro", "Sunita Alahan", "Hospital murder", "Oxygen tube", "Arson aftermath"]],
    ["Which shopkeeper tried to clear his former wife Sunita's name after the Rovers fire?", "Dev Alahan", ["Nick Tilsley", "Steve McDonald", "Norris Cole"], "Easy", "2013", "Families", ["Dev Alahan", "Sunita Alahan", "Rovers Return", "Clearing her name", "Investigation"]],
    ["Who was trapped upstairs in the Rovers during the blaze?", "Stella Price", ["Rita Sullivan", "Sally Webster", "Mary Taylor"], "Easy", "2013", "Storylines", ["Stella Price", "Rovers Return", "Fire", "Trapped upstairs", "Rescue"]],
    ["Which firefighter became engaged to Eileen Grimshaw?", "Paul Kershaw", ["Karl Munro", "Owen Armstrong", "Jim McDonald"], "Medium", "2013", "Relationships", ["Paul Kershaw", "Eileen Grimshaw", "Engagement", "Firefighter", "Romance"]],
    ["Which Coronation Street pub reopened after the fire damage was repaired?", "The Rovers Return", ["The Flying Horse", "The Weatherfield Arms", "The Joinery"], "Easy", "2013", "Businesses", ["Rovers Return", "Pub reopening", "Fire restoration", "Weatherfield", "Community"]],
    ["Which teenager's account of seeing Karl Munro at the Rovers helped expose his arson?", "Craig Tinker", ["Simon Barlow", "Chesney Brown", "Ryan Connor"], "Easy", "2013", "Crime", ["Craig Tinker", "Karl Munro", "Rovers fire", "Witness", "Arson investigation"]],
    ["Who was Craig Tinker's mother when his role in the Rovers fire came to light?", "Beth Tinker", ["Julie Carp", "Katy Armstrong", "Anna Windass"], "Easy", "2013", "Families", ["Beth Tinker", "Craig Tinker", "Mother and son", "Rovers fire", "Family"]],
    ["Whom did Stella Price marry shortly before the truth about the Rovers fire emerged?", "Karl Munro", ["Jason Grimshaw", "Steve McDonald", "Lewis Archer"], "Easy", "2013", "Weddings", ["Stella Price", "Karl Munro", "Wedding", "Arson secret", "Deception"]],
    ["What minimum prison term did Karl Munro receive for his crimes?", "Twenty-five years", ["Ten years", "Fifteen years", "Life with no minimum term stated"], "Medium", "2013", "Crime", ["Karl Munro", "Minimum 25 years", "Prison sentence", "Arson", "Sunita's murder"]],
    ["Which woman gave birth to Gary and Izzy's baby as their surrogate?", "Tina McIntyre", ["Katy Armstrong", "Fiz Stape", "Maria Connor"], "Easy", "2013", "Surrogacy", ["Tina McIntyre", "Izzy Armstrong", "Gary Windass", "Surrogacy", "Premature birth"]],
    ["What did Gary Windass and Izzy Armstrong name their surrogate-born son?", "Jake", ["Jack", "Joseph", "Max"], "Easy", "2013", "Families", ["Jake Windass", "Gary Windass", "Izzy Armstrong", "Baby name", "Surrogacy"]],
    ["Who was the biological father of the baby carried by Tina McIntyre?", "Gary Windass", ["Tommy Duckworth", "David Platt", "Tyrone Dobbs"], "Easy", "2013", "Families", ["Gary Windass", "Tina McIntyre", "Jake Windass", "Biological father", "Surrogacy"]],
    ["Who was the intended mother of the baby Tina McIntyre carried?", "Izzy Armstrong", ["Katy Armstrong", "Anna Windass", "Faye Windass"], "Easy", "2013", "Families", ["Izzy Armstrong", "Tina McIntyre", "Jake Windass", "Intended mother", "Surrogacy"]],
    ["Why did baby Jake need specialist hospital care after his birth?", "He was born prematurely", ["He was injured in a car crash", "He had been born at home without help", "He had contracted measles"], "Easy", "2013", "Families", ["Jake Windass", "Premature birth", "Neonatal care", "Surrogacy", "Hospital"]],
    ["Which expectant father made an unwanted romantic advance towards his surrogate Tina?", "Gary Windass", ["Tommy Duckworth", "Peter Barlow", "Nick Tilsley"], "Medium", "2013", "Relationships", ["Gary Windass", "Tina McIntyre", "Unwanted advance", "Surrogacy", "Relationship tension"]],
    ["What name did Tina McIntyre briefly give the surrogate baby when she decided to keep him?", "Joe", ["Jack", "Max", "Dylan"], "Medium", "2013", "Surrogacy", ["Tina McIntyre", "Jake Windass", "Joe McIntyre", "Baby renaming", "Custody dispute"]],
    ["What health problem required newborn Jake Windass to undergo surgery?", "An intestinal infection", ["A broken leg", "A heart murmur", "A damaged kidney"], "Medium", "2013", "Storylines", ["Jake Windass", "Bowel infection", "Surgery", "Neonatal care", "Premature baby"]],
    ["What did Tina McIntyre ultimately decide to do with baby Jake?", "Hand him over to Gary and Izzy", ["Take him to Spain", "Leave him in foster care", "Give him to Tommy's father"], "Easy", "2013", "Surrogacy", ["Tina McIntyre", "Jake Windass", "Gary Windass", "Izzy Armstrong", "Custody handover"]],
    ["How was newcomer Sinead Tinker related to Beth Tinker?", "She was Beth's niece", ["She was Beth's daughter", "She was Beth's sister", "She was Beth's cousin"], "Medium", "2013", "Families", ["Sinead Tinker", "Beth Tinker", "Aunt and niece", "Arrival", "Tinker family"]],
    ["Which young father began a relationship with Sinead Tinker?", "Chesney Brown", ["Ryan Connor", "Gary Windass", "Jason Grimshaw"], "Easy", "2013", "Relationships", ["Chesney Brown", "Sinead Tinker", "Romance", "Katy Armstrong", "New couple"]],
    ["Which Connor family member had an affair with Katy Armstrong?", "Ryan Connor", ["Liam Connor", "Paul Connor", "Rob Donovan"], "Medium", "2013", "Relationships", ["Ryan Connor", "Katy Armstrong", "Affair", "Chesney Brown", "Infidelity"]],
    ["What type of cancer was Hayley Cropper diagnosed with?", "Pancreatic cancer", ["Lung cancer", "Breast cancer", "Bowel cancer"], "Easy", "2013", "Storylines", ["Hayley Cropper", "Pancreatic cancer", "Diagnosis", "Terminal illness", "Roy Cropper"]],
    ["Which character was Hayley Cropper's husband throughout her 2013 cancer storyline?", "Roy Cropper", ["Brian Packham", "Dennis Tanner", "Ken Barlow"], "Easy", "2013", "Relationships", ["Hayley Cropper", "Roy Cropper", "Marriage", "Cancer storyline", "Support"]],
    ["What devastating news did Hayley Cropper receive following surgery?", "Her cancer was terminal", ["Her diagnosis had been mistaken", "Her tumour was benign", "Her treatment had cured the disease"], "Easy", "2013", "Storylines", ["Hayley Cropper", "Terminal cancer", "Surgery", "Prognosis", "Roy Cropper"]],
    ["What did Kylie and David Platt name their daughter born in August 2013?", "Lily", ["Ruby", "Hope", "Bethany"], "Easy", "2013", "Families", ["Kylie Platt", "David Platt", "Lily Platt", "Birth", "Platt family"]],
    ["Who helped deliver Kylie Platt's daughter at home?", "Gail McIntyre", ["Audrey Roberts", "Anna Windass", "Rita Sullivan"], "Medium", "2013", "Families", ["Gail McIntyre", "Kylie Platt", "Lily Platt", "Home birth", "Platt family"]],
    ["Whose paternity of Lily Platt was eventually confirmed by a DNA test?", "David Platt", ["Nick Tilsley", "Jason Grimshaw", "Peter Barlow"], "Easy", "2013", "Families", ["Lily Platt", "David Platt", "Nick Tilsley", "DNA test", "Paternity reveal"]],
    ["Who was left with a brain injury after a car crash involving David Platt?", "Nick Tilsley", ["Peter Barlow", "Steve McDonald", "Tommy Duckworth"], "Easy", "2013", "Storylines", ["Nick Tilsley", "David Platt", "Car crash", "Brain injury", "Platt brothers"]],
    ["Who caused the car crash while trying to stop Nick Tilsley revealing his affair with Kylie Platt?", "David Platt", ["Gary Windass", "Tyrone Dobbs", "Rob Donovan"], "Medium", "2013", "Crime", ["David Platt", "Nick Tilsley", "Kylie Platt", "Car crash", "Affair secret"]],
    ["Which former Rovers landlady returned in October 2013 as the pub's joint owner?", "Liz McDonald", ["Bet Lynch", "Natalie Barnes", "Bev Unwin"], "Easy", "2013", "Returns", ["Liz McDonald", "Rovers Return", "Return", "Joint ownership", "Landlady"]],
    ["Who joined his mother Liz McDonald in buying the Rovers?", "Steve McDonald", ["Andy McDonald", "Jim McDonald", "Lloyd Mullaney"], "Easy", "2013", "Businesses", ["Steve McDonald", "Liz McDonald", "Rovers Return", "Pub ownership", "Mother and son"]],
    ["Which Grimshaw son returned from London to live in Weatherfield?", "Todd Grimshaw", ["Jason Grimshaw", "Billy Grimshaw", "Ryan Connor"], "Easy", "2013", "Returns", ["Todd Grimshaw", "London", "Return to Weatherfield", "Eileen Grimshaw", "Grimshaw family"]],
    ["Whom did Peter Barlow marry?", "Carla Connor", ["Tina McIntyre", "Leanne Barlow", "Michelle Connor"], "Easy", "2013", "Weddings", ["Peter Barlow", "Carla Connor", "Wedding", "Marriage", "Tina McIntyre"]],
    ["With whom did Peter Barlow start an affair shortly after marrying Carla Connor?", "Tina McIntyre", ["Kylie Platt", "Maria Connor", "Sophie Webster"], "Easy", "2013", "Relationships", ["Peter Barlow", "Tina McIntyre", "Affair", "Carla Connor", "Infidelity"]],
    ["Which building contractor refused to pay Owen Armstrong for work he had completed?", "Pat Phelan", ["Terry Duckworth", "Frank Foster", "Charlie Stubbs"], "Medium", "2013", "Arrivals", ["Pat Phelan", "Owen Armstrong", "Unpaid debt", "Building contractor", "Character debut"]]
];

// Preserve original answer positions and include all topic-specific tags.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, specialistTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(1701 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '2010s', year, topic, ...specialistTags])],
        dailyEligible: true
    };
});

// Validate the exported objects, their original metadata and the tagging.
if (questions.length !== 100 || questions[0].id !== 'tv_1701' ||
    questions[99].id !== 'tv_1800' ||
    questions.filter(q => q.tags.includes('2012')).length !== 49 ||
    questions.filter(q => q.tags.includes('2013')).length !== 51) {
    throw new Error('Pack 177: incorrect count, IDs or year split');
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
        !q.tags.includes('2010s') || !['2012', '2013'].some(y => q.tags.includes(y)) ||
        q.tags.length < 9 || q.category !== 'Television' || q.dailyEligible !== true) {
        throw new Error('Pack 177: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenWording.add(wording);
}

module.exports = questions;
