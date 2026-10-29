// quiz_pack175.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2008 and 2009
// 100 questions: tv_1501 to tv_1600
// 48 questions from 2008; 52 from 2009.
// Tagging and wording audit; original IDs, answers and settings preserved.
// quiz_bank.js remains unchanged.

// Entry: question, answer, three alternatives, difficulty, year, original topic, specialist tags.
const facts = [
    // 2008
    ["Which long-serving Coronation Street resident died peacefully in her armchair?", "Vera Duckworth", ["Betty Williams", "Emily Bishop", "Rita Sullivan"], "Easy", "2008", "Departures", ["Vera Duckworth", "Jack Duckworth", "Liz Dawn", "Death at home", "Duckworth family"]],
    ["Who discovered that Vera Duckworth had died when he returned home?", "Jack Duckworth", ["Tyrone Dobbs", "Terry Duckworth", "Roy Cropper"], "Easy", "2008", "Families", ["Jack Duckworth", "Vera Duckworth", "Death at home", "No. 9", "Bereavement"]],
    ["Which actress played Vera Duckworth for more than thirty years?", "Liz Dawn", ["Jean Alexander", "Julie Goodyear", "Barbara Knox"], "Easy", "2008", "Actors", ["Vera Duckworth", "Liz Dawn", "Casting", "Actress", "Long-running character"]],
    ["Which estranged son returned for Vera Duckworth's funeral?", "Terry Duckworth", ["Paul Clayton", "Jack Duckworth", "Tommy Duckworth"], "Medium", "2008", "Returns", ["Terry Duckworth", "Vera Duckworth", "Jack Duckworth", "Funeral", "Return to Weatherfield"]],
    ["Which businessman fell into a gorge while walking in the Lake District?", "Liam Connor", ["Tony Gordon", "Paul Connor", "Steve McDonald"], "Medium", "2008", "Storylines", ["Liam Connor", "Maria Sutherland", "Lake District", "Ozzy the dog", "Gorge accident"]],
    ["Who went for help after Liam Connor fell into a gorge in the Lake District?", "Maria Sutherland", ["Carla Connor", "Michelle Connor", "Leanne Battersby"], "Medium", "2008", "Relationships", ["Maria Sutherland", "Liam Connor", "Lake District", "Rescue", "Gorge accident"]],
    ["Whose name did Liam Connor call out in hospital after his accident, upsetting Maria?", "Carla Connor", ["Michelle Connor", "Leanne Battersby", "Rosie Webster"], "Medium", "2008", "Relationships", ["Liam Connor", "Carla Connor", "Maria Sutherland", "Hospital", "Love triangle"]],
    ["Which character, played by Michelle Keegan, arrived in Coronation Street in 2008?", "Tina McIntyre", ["Sian Powers", "Tara Mandal", "Julie Carp"], "Easy", "2008", "Arrivals", ["Tina McIntyre", "Michelle Keegan", "Casting", "Character debut", "Platt family"]],
    ["Who told Ryan Connor that he had been swapped with another baby at birth?", "Nick Neeson", ["Tony Gordon", "Dev Alahan", "Lloyd Mullaney"], "Medium", "2008", "Families", ["Ryan Connor", "Nick Neeson", "Michelle Connor", "Baby swap", "Identity"]],
    ["What was the first name of Michelle Connor's biological son, identified by DNA testing?", "Alex", ["Ryan", "Adam", "Daniel"], "Easy", "2008", "Families", ["Alex Neeson", "Michelle Connor", "Ryan Connor", "DNA test", "Baby swap"]],
    ["Which mechanic was given a custodial sentence for assaulting teacher John Stape?", "Kevin Webster", ["Tyrone Dobbs", "Nathan Cooper", "Bill Webster"], "Medium", "2008", "Crime", ["Kevin Webster", "John Stape", "Rosie Webster", "Assault", "Prison sentence"]],
    ["Which couple married in February 2008 after a turbulent engagement?", "Liam Connor and Maria Sutherland", ["Tony Gordon and Carla Connor", "Steve McDonald and Becky Granger", "Tyrone Dobbs and Molly Compton"], "Easy", "2008", "Weddings", ["Liam Connor", "Maria Sutherland", "Wedding", "Connor family", "Engagement"]],
    ["Which Rovers barmaid gave birth to Sean Tully's son Dylan?", "Violet Wilson", ["Michelle Connor", "Becky Granger", "Poppy Morales"], "Easy", "2008", "Families", ["Violet Wilson", "Sean Tully", "Dylan Wilson", "Rovers Return", "Birth"]],
    ["What was the name of Sean Tully and Violet Wilson's baby son?", "Dylan", ["Ryan", "Ben", "Freddie"], "Easy", "2008", "Families", ["Dylan Wilson", "Sean Tully", "Violet Wilson", "Birth", "Parenthood"]],
    ["Which former Baldwin left Weatherfield with Violet Wilson and baby Dylan?", "Jamie Baldwin", ["Danny Baldwin", "Adam Barlow", "Warren Baldwin"], "Medium", "2008", "Departures", ["Jamie Baldwin", "Violet Wilson", "Dylan Wilson", "Departure", "Baldwin family"]],
    ["Who accompanied Tina McIntyre to an abortion clinic?", "Gail Platt", ["Sarah Platt", "Audrey Roberts", "David Platt"], "Medium", "2008", "Families", ["Gail Platt", "Tina McIntyre", "David Platt", "Abortion clinic", "Teenage pregnancy"]],
    ["Which of Gail Platt's children pushed her down the stairs during an argument?", "David Platt", ["Nick Tilsley", "Sarah Platt", "Bethany Platt"], "Easy", "2008", "Storylines", ["David Platt", "Gail Platt", "Staircase attack", "Family violence", "Platt family"]],
    ["Where was David Platt sent after his rampage and criminal damage?", "A young offenders institution", ["A psychiatric hospital", "A boarding school", "An army training centre"], "Medium", "2008", "Crime", ["David Platt", "Youth custody", "Criminal damage", "Violence", "Young offenders institution"]],
    ["Which child from the Battersby-Brown family was taken into care?", "Chesney", ["Fiz", "Leanne", "Toyah"], "Medium", "2008", "Families", ["Chesney Brown", "Battersby-Brown family", "Taken into care", "Kirk Sutherland", "Child welfare"]],
    ["Which Duckworth grandson set fire to Leanne Battersby's restaurant in an insurance scam?", "Paul Clayton", ["Terry Duckworth", "Tyrone Dobbs", "Jamie Baldwin"], "Medium", "2008", "Crime", ["Paul Clayton", "Leanne Battersby", "Restaurant fire", "Insurance fraud", "Arson"]],
    ["What tragedy did Maria and Liam Connor suffer during her first pregnancy?", "Their baby was stillborn", ["Their baby was kidnapped", "Their baby needed a transplant", "They learnt they were expecting twins"], "Medium", "2008", "Families", ["Liam Connor", "Maria Connor", "Baby Paul", "Stillbirth", "Bereavement"]],
    ["What was the name of Gail Platt's long-lost father who arrived in Weatherfield?", "Ted Page", ["Archie Shuttleworth", "Colin Grimshaw", "Harry Mason"], "Medium", "2008", "Families", ["Ted Page", "Gail Platt", "Biological father", "Family reunion", "Platt family"]],
    ["Which actress played Gail Platt during the storyline about her father Ted Page?", "Helen Worth", ["Sue Nicholls", "Anne Kirkbride", "Sally Dynevor"], "Medium", "2008", "Actors", ["Helen Worth", "Gail Platt", "Ted Page", "Actress", "Casting"]],
    ["Which local newsagent was attacked by a gang during a robbery at The Kabin?", "Norris Cole", ["Roy Cropper", "Ken Barlow", "Jack Duckworth"], "Medium", "2008", "Crime", ["Norris Cole", "The Kabin", "Gang robbery", "Assault", "Crime"]],
    ["Who was Tina McIntyre's father when the family arrived in Weatherfield?", "Joe McIntyre", ["Colin Grimshaw", "Bill Webster", "Harry Mason"], "Easy", "2008", "Families", ["Joe McIntyre", "Tina McIntyre", "Father and daughter", "Character debut", "Family"]],
    ["Which member of the Morton family suffered a heart attack?", "Jerry Morton", ["Darryl Morton", "Wilf Morton", "Mel Morton"], "Medium", "2008", "Families", ["Jerry Morton", "Morton family", "Heart attack", "Kenzie Judd", "Illness"]],
    ["Who tampered with Jerry Morton's medication to make him ill?", "Teresa Bryant", ["Jodie Morton", "Mel Morton", "Eileen Grimshaw"], "Medium", "2008", "Crime", ["Teresa Bryant", "Jerry Morton", "Medication tampering", "Poisoning", "Morton family"]],
    ["Which cab driver did Teresa Bryant falsely tell was Finlay's father?", "Lloyd Mullaney", ["Steve McDonald", "Dev Alahan", "Peter Barlow"], "Medium", "2008", "Comedy", ["Teresa Bryant", "Lloyd Mullaney", "Finlay Bryant", "Paternity deception", "Morton family"]],
    ["Which bookies' employee was locked in the Rovers cellar by Steve McDonald?", "Dan Mason", ["Harry Mason", "Tony Gordon", "Liam Connor"], "Medium", "2008", "Crime", ["Dan Mason", "Steve McDonald", "Rovers Return", "Pub cellar", "Feud"]],
    ["With whom did Steve McDonald have a secret one-night stand?", "Becky Granger", ["Michelle Connor", "Leanne Battersby", "Violet Wilson"], "Easy", "2008", "Relationships", ["Steve McDonald", "Becky Granger", "Michelle Connor", "One-night stand", "Affair"]],
    ["Which character became the Rovers Return's fiftieth barmaid?", "Becky Granger", ["Tina McIntyre", "Julie Carp", "Poppy Morales"], "Medium", "2008", "Rovers Return", ["Becky Granger", "Rovers Return", "50th barmaid", "Pub staff", "Katherine Kelly"]],
    ["Which husband of Liz McDonald left Weatherfield after their marriage broke down?", "Vernon Tomlin", ["Jim McDonald", "Harry Mason", "Lloyd Mullaney"], "Medium", "2008", "Departures", ["Vernon Tomlin", "Liz McDonald", "Marriage breakdown", "Departure", "Rovers Return"]],
    ["Which mechanic refused Tony Gordon's offer to buy his garage?", "Kevin Webster", ["Bill Webster", "Tyrone Dobbs", "Nathan Cooper"], "Easy", "2008", "Businesses", ["Kevin Webster", "Tony Gordon", "Websters Auto Centre", "Garage sale", "Property dispute"]],
    ["What was the name of the new luxury flats opened in Weatherfield?", "Victoria Court", ["The Ridings", "Weatherfield Quays", "Granada Court"], "Medium", "2008", "Locations", ["Victoria Court", "Luxury flats", "Weatherfield", "Opening", "Property development"]],
    ["Which former teacher kidnapped Rosie Webster and imprisoned her in an attic?", "John Stape", ["Tony Gordon", "Charlie Stubbs", "Gary Windass"], "Easy", "2008", "Crime", ["John Stape", "Rosie Webster", "Kidnapping", "Attic", "Former teacher"]],
    ["Who found Rosie Webster in captivity after visiting John Stape's home to feed a cat?", "Fiz Brown", ["Sally Webster", "Sophie Webster", "Julie Carp"], "Medium", "2008", "Storylines", ["Fiz Brown", "Rosie Webster", "John Stape", "Attic rescue", "Cat feeding"]],
    ["Which Webster daughter secretly filmed Liam and Carla Connor kissing?", "Rosie Webster", ["Sophie Webster", "Bethany Platt", "Tina McIntyre"], "Easy", "2008", "Storylines", ["Rosie Webster", "Carla Connor", "Liam Connor", "Mobile phone video", "Affair"]],
    ["Who ordered Liam Connor's killing in a staged hit-and-run?", "Tony Gordon", ["Paul Connor", "Danny Baldwin", "Dev Alahan"], "Easy", "2008", "Crime", ["Tony Gordon", "Liam Connor", "Carla Connor", "Contract killing", "Hit-and-run"]],
    ["Who drove the car that killed Liam Connor in the hit-and-run?", "Jimmy Dockerson", ["Tony Gordon", "Steve McDonald", "Kevin Webster"], "Medium", "2008", "Crime", ["Jimmy Dockerson", "Tony Gordon", "Liam Connor", "Hit-and-run driver", "Murder"]],
    ["Who married Carla Connor despite having arranged Liam's murder?", "Tony Gordon", ["Peter Barlow", "Liam Connor", "Luke Strong"], "Easy", "2008", "Weddings", ["Tony Gordon", "Carla Connor", "Wedding", "Liam Connor", "Murder secret"]],
    ["Who showed Maria Connor video evidence of Liam and Carla's affair at Tony's wedding?", "Sally Webster", ["Rosie Webster", "Michelle Connor", "Leanne Battersby"], "Medium", "2008", "Storylines", ["Sally Webster", "Maria Connor", "Rosie Webster", "Secret affair video", "Wedding reception"]],
    ["Which Underworld machinist admitted stealing lottery winnings from the factory syndicate?", "Janice Battersby", ["Hayley Cropper", "Fiz Brown", "Kelly Crabtree"], "Medium", "2008", "Crime", ["Janice Battersby", "Underworld", "Lottery syndicate", "Fraud", "Stolen winnings"]],
    ["Which newcomer became Norris Cole's friend and competition partner?", "Mary Taylor", ["Julie Carp", "Tara Mandal", "Natasha Blakeman"], "Easy", "2008", "Arrivals", ["Mary Taylor", "Norris Cole", "Patti Clare", "Competition partner", "Character debut"]],
    ["Which family moved into Number 6 Coronation Street in December 2008?", "The Windasses", ["The Mortons", "The Connors", "The Harrises"], "Easy", "2008", "Arrivals", ["Windass family", "Gary Windass", "Anna Windass", "Eddie Windass", "No. 6"]],
    ["Which businessman tried to drive elderly Jed Stone out of his home?", "Tony Gordon", ["Luke Strong", "Dev Alahan", "Joe McIntyre"], "Medium", "2008", "Storylines", ["Tony Gordon", "Jed Stone", "Eviction", "Intimidation", "Property redevelopment"]],
    ["Which character from the 1960s returned to Coronation Street in 2008?", "Jed Stone", ["Harry Flagg", "Archie Shuttleworth", "Ray Langton"], "Medium", "2008", "Returns", ["Jed Stone", "Kenneth Cope", "1960s character", "Return to Weatherfield", "Tony Gordon"]],
    ["Who proposed to Tyrone Dobbs in July 2008?", "Molly Compton", ["Maria Connor", "Becky Granger", "Tina McIntyre"], "Easy", "2008", "Relationships", ["Molly Compton", "Tyrone Dobbs", "Engagement", "Marriage proposal", "Duckworth family"]],
    ["Which married couple swapped houses with Ashley and Claire Peacock?", "Kevin and Sally Webster", ["Ken and Deirdre Barlow", "Roy and Hayley Cropper", "Steve and Michelle Connor"], "Medium", "2008", "Homes", ["Kevin Webster", "Sally Webster", "Ashley Peacock", "Claire Peacock", "House swap"]],

    // 2009
    ["Who married Tyrone Dobbs in January 2009?", "Molly Compton", ["Maria Connor", "Tina McIntyre", "Becky Granger"], "Easy", "2009", "Weddings", ["Molly Compton", "Tyrone Dobbs", "Wedding", "Dobbs family", "Newlyweds"]],
    ["Who stole Tyrone and Molly's honeymoon tickets to Paris?", "Jackie Dobbs", ["Pam Hobsworth", "Teresa Bryant", "Cilla Brown"], "Medium", "2009", "Comedy", ["Jackie Dobbs", "Tyrone Dobbs", "Molly Compton", "Honeymoon tickets", "Paris"]],
    ["What replacement holiday did Pam arrange for Tyrone and Molly?", "A caravan holiday", ["A cruise", "A week in Paris", "A camping trip to France"], "Medium", "2009", "Comedy", ["Pam Hobsworth", "Tyrone Dobbs", "Molly Compton", "Caravan holiday", "Honeymoon"]],
    ["Which cab driver began a relationship with Liz McDonald?", "Lloyd Mullaney", ["Steve McDonald", "Jim McDonald", "Dev Alahan"], "Easy", "2009", "Relationships", ["Lloyd Mullaney", "Liz McDonald", "Secret relationship", "Street Cars", "Romance"]],
    ["Who told Michelle Connor about Steve's affair with Becky?", "Lloyd Mullaney and Blanche Hunt", ["Ken Barlow and Deirdre Barlow", "Roy Cropper and Hayley Cropper", "Peter Barlow and Leanne Battersby"], "Medium", "2009", "Relationships", ["Lloyd Mullaney", "Blanche Hunt", "Michelle Connor", "Steve McDonald", "Becky affair"]],
    ["Which builder proposed to Becky shortly before she chose Steve McDonald?", "Jason Grimshaw", ["Tony Gordon", "Joe McIntyre", "Bill Webster"], "Medium", "2009", "Relationships", ["Jason Grimshaw", "Becky Granger", "Steve McDonald", "Marriage proposal", "Love triangle"]],
    ["Why could Steve McDonald and Becky Granger not marry at their first wedding attempt?", "Becky was too drunk to marry", ["Steve was already married", "The registrar failed to arrive", "The church was flooded"], "Easy", "2009", "Weddings", ["Steve McDonald", "Becky Granger", "Failed wedding", "Drunkenness", "Register office"]],
    ["Which couple finally married in August 2009 after their first wedding attempt failed?", "Steve McDonald and Becky Granger", ["Kevin Webster and Molly Dobbs", "Peter Barlow and Leanne Battersby", "Roy Cropper and Hayley Cropper"], "Easy", "2009", "Weddings", ["Steve McDonald", "Becky Granger", "August wedding", "Second attempt", "McDonald family"]],
    ["Who was arrested on her wedding day after drugs were planted in her handbag?", "Becky Granger", ["Leanne Battersby", "Rosie Webster", "Michelle Connor"], "Medium", "2009", "Crime", ["Becky Granger", "DC Hooch", "Slug", "Planted drugs", "Wedding arrest"]],
    ["What was the occupation of Becky's old enemy DC Hooch, who arranged her arrest?", "Police officer", ["Solicitor", "Journalist", "Private detective"], "Medium", "2009", "Occupations", ["DC Hooch", "Becky Granger", "Corrupt police officer", "Drug framing", "Police abuse"]],
    ["Which actor portrayed Steve McDonald's brother Andy on his return?", "Nicholas Cochrane", ["Simon Gregson", "Charles Lawson", "Chris Gascoyne"], "Medium", "2009", "Actors", ["Nicholas Cochrane", "Andy McDonald", "Casting", "Character return", "McDonald family"]],
    ["With whose wife did Kevin Webster begin a secret affair?", "Tyrone Dobbs's", ["Peter Barlow's", "Steve McDonald's", "Roy Cropper's"], "Easy", "2009", "Relationships", ["Kevin Webster", "Molly Dobbs", "Tyrone Dobbs", "Secret affair", "Infidelity"]],
    ["Who discovered Kevin Webster and Molly Dobbs's affair and confronted them?", "Pam Hobsworth", ["Sally Webster", "Jackie Dobbs", "Maria Connor"], "Medium", "2009", "Relationships", ["Pam Hobsworth", "Kevin Webster", "Molly Dobbs", "Affair discovered", "Confrontation"]],
    ["What diagnosis did Sally Webster reveal to Kevin on Christmas Day 2009?", "Breast cancer", ["Diabetes", "Leukaemia", "Multiple sclerosis"], "Easy", "2009", "Storylines", ["Sally Webster", "Kevin Webster", "Breast cancer", "Christmas Day", "Diagnosis"]],
    ["Which businessman confessed to Roy Cropper that he had arranged Liam Connor's murder?", "Tony Gordon", ["Luke Strong", "Dev Alahan", "Peter Barlow"], "Easy", "2009", "Crime", ["Tony Gordon", "Roy Cropper", "Liam Connor", "Murder confession", "Hospital"]],
    ["What medical emergency preceded Tony Gordon's confession to Roy Cropper?", "A heart attack", ["A stroke", "A road accident", "An allergic reaction"], "Medium", "2009", "Storylines", ["Tony Gordon", "Roy Cropper", "Heart attack", "Hospital confession", "Liam Connor"]],
    ["What was Roy Cropper doing by the canal when Tony Gordon confronted him?", "Watching bats", ["Fishing", "Walking a dog", "Collecting litter"], "Medium", "2009", "Storylines", ["Roy Cropper", "Tony Gordon", "Bats", "Canal", "Wildlife watching"]],
    ["Where did Tony Gordon push Roy Cropper during their confrontation?", "Into the canal", ["Down a staircase", "Into a cellar", "Onto a railway line"], "Easy", "2009", "Crime", ["Tony Gordon", "Roy Cropper", "Canal attack", "Attempted murder", "Water"]],
    ["What did Tony Gordon do after rescuing Roy Cropper from the canal?", "Confessed his crime to the police", ["Fled to Spain", "Set fire to Underworld", "Returned to the Rovers"], "Medium", "2009", "Crime", ["Tony Gordon", "Roy Cropper", "Police confession", "Rescue", "Murder of Liam Connor"]],
    ["Which widow became romantically involved with Tony Gordon, unaware he had killed her husband?", "Maria Connor", ["Carla Connor", "Michelle Connor", "Leanne Battersby"], "Easy", "2009", "Relationships", ["Tony Gordon", "Maria Connor", "Liam Connor", "Widow", "New romance"]],
    ["What name did Maria Connor give her baby son in July 2009?", "Liam", ["Paul", "Ryan", "Adam"], "Easy", "2009", "Families", ["Maria Connor", "Liam Connor Jr", "Tony Gordon", "Baby name", "Newborn son"]],
    ["At which seaside location did Maria Connor give birth?", "Ainsdale Beach", ["Blackpool Pleasure Beach", "Southport Pier", "Brighton Beach"], "Medium", "2009", "Locations", ["Ainsdale Beach", "Maria Connor", "Liam Connor Jr", "Seaside birth", "Southport"]],
    ["Who helped Maria Connor deliver her baby at the beach?", "Tony Gordon", ["Tom Kerrigan", "Steve McDonald", "Roy Cropper"], "Medium", "2009", "Families", ["Tony Gordon", "Maria Connor", "Ainsdale Beach", "Delivery assistance", "Baby Liam"]],
    ["Who learnt that Tony Gordon had arranged her former lover Liam Connor's murder?", "Carla Gordon", ["Michelle Connor", "Maria Connor", "Sally Webster"], "Easy", "2009", "Crime", ["Carla Gordon", "Tony Gordon", "Liam Connor", "Murder confession", "Marriage breakdown"]],
    ["To which US city did Carla Connor flee after Tony's confession?", "Los Angeles", ["New York", "Miami", "Chicago"], "Medium", "2009", "Departures", ["Carla Connor", "Los Angeles", "Tony Gordon", "Departure", "Flight to America"]],
    ["Which businessman arrived at Underworld as a manager and later bought Carla's share?", "Luke Strong", ["Danny Baldwin", "Joe Carter", "Tony Gordon"], "Medium", "2009", "Businesses", ["Luke Strong", "Underworld", "Carla Connor", "Factory shares", "Manager"]],
    ["Which returning character did Tony Gordon bring to the Rovers in Coronation Street's 7,000th episode?", "Jed Stone", ["Percy Sugden", "Alf Roberts", "Reg Holdsworth"], "Medium", "2009", "TV History", ["Jed Stone", "Tony Gordon", "7000th episode", "Kenneth Cope", "Return"]],
    ["Which actor reprised the role of Jed Stone in 2009?", "Kenneth Cope", ["Roy Hudd", "Peter Baldwin", "John Savident"], "Medium", "2009", "Actors", ["Kenneth Cope", "Jed Stone", "Casting", "Character return", "7000th episode"]],
    ["Which Barlow accidentally started a fire while drunk?", "Peter Barlow", ["Ken Barlow", "Tracy Barlow", "Adam Barlow"], "Easy", "2009", "Storylines", ["Peter Barlow", "Simon Barlow", "Alcohol misuse", "Flat fire", "Accidental fire"]],
    ["Which young boy was trapped in his father's flat during a fire?", "Simon Barlow", ["Ryan Connor", "Chesney Brown", "Joshua Peacock"], "Easy", "2009", "Families", ["Simon Barlow", "Peter Barlow", "Flat fire", "Child rescue", "Alcohol misuse"]],
    ["Which two businessmen rescued Peter and Simon Barlow from their burning flat?", "Tony Gordon and Luke Strong", ["Steve McDonald and Lloyd Mullaney", "Roy Cropper and Ken Barlow", "Dev Alahan and Joe McIntyre"], "Medium", "2009", "Storylines", ["Tony Gordon", "Luke Strong", "Peter Barlow", "Simon Barlow", "Fire rescue"]],
    ["Which barge-dwelling actress had an affair with Ken Barlow?", "Martha Fraser", ["Denise Osbourne", "Deirdre Barlow", "Marian Lund"], "Easy", "2009", "Relationships", ["Martha Fraser", "Ken Barlow", "Canal barge", "Secret affair", "Theatre"]],
    ["Which actress guest-starred as Martha Fraser, who lived on a canal barge?", "Stephanie Beacham", ["Joan Collins", "Honor Blackman", "Joanna Lumley"], "Medium", "2009", "Actors", ["Stephanie Beacham", "Martha Fraser", "Casting", "Guest actress", "Canal barge"]],
    ["What kind of home did Martha Fraser live in?", "A canal barge", ["A caravan", "A penthouse flat", "A converted mill"], "Easy", "2009", "Homes", ["Martha Fraser", "Ken Barlow", "Canal barge", "Houseboat", "Home"]],
    ["Which dog was involved in Ken Barlow's first meeting with Martha Fraser?", "Eccles", ["Schmeichel", "Ozzy", "Monica"], "Medium", "2009", "Animals", ["Eccles", "Ken Barlow", "Martha Fraser", "Dog", "Meeting"]],
    ["Which estranged half-brother of Norris Cole sought reconciliation?", "Ramsay Clegg", ["Colin Grimshaw", "Archie Shuttleworth", "Ted Page"], "Medium", "2009", "Families", ["Ramsay Clegg", "Norris Cole", "Half-brothers", "Reconciliation", "Character debut"]],
    ["Which Fawlty Towers actor played Norris Cole's half-brother Ramsay Clegg?", "Andrew Sachs", ["John Cleese", "Prunella Scales", "Roy Hudd"], "Easy", "2009", "Actors", ["Andrew Sachs", "Ramsay Clegg", "Fawlty Towers", "Manuel", "Casting"]],
    ["Which illness caused Ramsay Clegg's death?", "A brain tumour", ["A heart condition", "Lung cancer", "Pneumonia"], "Medium", "2009", "Storylines", ["Ramsay Clegg", "Norris Cole", "Brain tumour", "Death", "Australia flight"]],
    ["Which member of Eileen Grimshaw's family was exposed for abusing Paula Carp when she was a girl?", "Her father Colin Grimshaw", ["Her brother Jason", "Her son Todd", "Her uncle George"], "Medium", "2009", "Families", ["Colin Grimshaw", "Paula Carp", "Eileen Grimshaw", "Historic sexual abuse", "Family revelation"]],
    ["Which newcomer discovered that she was Eileen Grimshaw's half-sister?", "Julie Carp", ["Paula Carp", "Tara Mandal", "Mary Taylor"], "Medium", "2009", "Families", ["Julie Carp", "Eileen Grimshaw", "Colin Grimshaw", "Half-sisters", "Family secret"]],
    ["Which businessman was humiliated when Tara Mandal unveiled a giant nude photograph of him?", "Dev Alahan", ["Steve McDonald", "Tony Gordon", "Peter Barlow"], "Medium", "2009", "Comedy", ["Dev Alahan", "Tara Mandal", "Nude photograph", "Billboard", "Public humiliation"]],
    ["Who took revenge on Dev Alahan after discovering his affair with Lisa Dalton?", "Tara Mandal", ["Nina Mandal", "Sunita Alahan", "Leanne Battersby"], "Medium", "2009", "Relationships", ["Tara Mandal", "Dev Alahan", "Lisa Dalton", "Affair", "Revenge"]],
    ["Which resident won the Mr Gay Weatherfield contest despite being straight?", "Jason Grimshaw", ["Sean Tully", "Todd Grimshaw", "Graeme Proctor"], "Medium", "2009", "Comedy", ["Jason Grimshaw", "Mr Gay Weatherfield", "Contest winner", "False assumptions", "Comedy"]],
    ["Which Windass son fought with David Platt and faced trial?", "Gary Windass", ["Eddie Windass", "Ryan Connor", "Darryl Morton"], "Easy", "2009", "Crime", ["Gary Windass", "David Platt", "Fight", "Court trial", "Windass family"]],
    ["Whose truthful testimony helped Gary Windass be acquitted?", "Tina McIntyre", ["Gail Platt", "Anna Windass", "Sarah Platt"], "Medium", "2009", "Crime", ["Tina McIntyre", "Gary Windass", "David Platt", "Court testimony", "Acquittal"]],
    ["Which couple bought Number 12 Coronation Street?", "Tina McIntyre and Jason Grimshaw", ["Molly and Tyrone Dobbs", "Steve and Becky McDonald", "Ken and Deirdre Barlow"], "Medium", "2009", "Homes", ["Tina McIntyre", "Jason Grimshaw", "No. 12", "House purchase", "Property"]],
    ["Where did Fiz Brown propose to John Stape?", "At a prison", ["At the Rovers", "At the registry office", "At the factory"], "Medium", "2009", "Relationships", ["Fiz Brown", "John Stape", "Prison proposal", "Engagement", "Romance"]],
    ["Why was John Stape in prison in 2009?", "Kidnapping Rosie Webster", ["Assaulting Kevin Webster", "Stealing from Underworld", "Attempted murder of Tony Gordon"], "Easy", "2009", "Crime", ["John Stape", "Rosie Webster", "Kidnapping", "Prison sentence", "Former teacher"]],
    ["Which resident broke into the medical centre looking for painkillers?", "Joe McIntyre", ["Peter Barlow", "Steve McDonald", "David Platt"], "Medium", "2009", "Storylines", ["Joe McIntyre", "Painkiller addiction", "Medical centre", "Break-in", "Prescription drugs"]],
    ["What did Joe McIntyre name the boat on which he proposed to Gail?", "Gail Force", ["Gail's Dream", "The Weatherfield Belle", "Sea Breeze"], "Medium", "2009", "Relationships", ["Joe McIntyre", "Gail Platt", "Gail Force", "Boat", "Marriage proposal"]],
    ["Which former resident returned for Gail Platt's wedding plans in December 2009?", "Nick Tilsley", ["Martin Platt", "Todd Grimshaw", "Jamie Baldwin"], "Easy", "2009", "Returns", ["Nick Tilsley", "Gail Platt", "Return to Weatherfield", "Wedding plans", "Platt family"]],
    ["Which actress played Sophie Webster's friend Sian Powers when she arrived?", "Sacha Parkinson", ["Brooke Vincent", "Helen Flanagan", "Michelle Keegan"], "Medium", "2009", "Actors", ["Sacha Parkinson", "Sian Powers", "Sophie Webster", "Casting", "Character debut"]]

];

// Build the exported questions, retaining the original rotating answer positions.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, specialistTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(1501 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '2000s', year, topic, ...specialistTags])],
        dailyEligible: true
    };
});

// Validate the actual exported objects, ID range, year balance and tags.
if (questions.length !== 100 || questions[0].id !== 'tv_1501' ||
    questions[99].id !== 'tv_1600' ||
    questions.filter(q => q.tags.includes('2008')).length !== 48 ||
    questions.filter(q => q.tags.includes('2009')).length !== 52) {
    throw new Error('Pack 175: incorrect count, ID range or year split');
}
const seenIds = new Set();
const seenQuestions = new Set();
for (const q of questions) {
    const key = q.question.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
    if (seenIds.has(q.id) || seenQuestions.has(key) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        q.category !== 'Television' || q.dailyEligible !== true ||
        !q.tags.includes('Soaps') || !q.tags.includes('Coronation Street') ||
        !q.tags.includes('2000s') || !['2008', '2009'].some(y => q.tags.includes(y)) ||
        q.tags.length < 8) {
        throw new Error('Pack 175: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenQuestions.add(key);
}
module.exports = questions;
