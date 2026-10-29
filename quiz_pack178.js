// quiz_pack178.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2014 and 2015
// 100 questions: tv_1801 to tv_1900
// 49 from 2014, 51 from 2015.
// Specialist tagging and wording audit; original answers/settings preserved.
// quiz_bank.js remains unchanged.

// Fact: question, correct answer, three alternatives, difficulty, year, original topic, specialist tags.
const facts = [
    // 2014
    ["How did terminally ill Hayley Cropper choose to end her life?", "She took her own life", ["She died in a road accident", "She fell down the stairs", "She died in a factory fire"], "Easy", "2014", "Departures", ["Hayley Cropper", "Roy Cropper", "Terminal pancreatic cancer", "Self-determined death", "January farewell"]],
    ["Who was beside Hayley Cropper when she died?", "Roy Cropper", ["Ken Barlow", "Dennis Tanner", "Brian Packham"], "Easy", "2014", "Relationships", ["Roy Cropper", "Hayley Cropper", "Pancreatic cancer", "Final moments", "Marriage"]],
    ["Which actress played Hayley Cropper in her final scenes?", "Julie Hesmondhalgh", ["Sally Dynevor", "Jane Danson", "Alison King"], "Easy", "2014", "Actors", ["Julie Hesmondhalgh", "Hayley Cropper", "Actress", "Final appearance", "Casting"]],
    ["Which Barlow had an affair with Tina McIntyre?", "Peter Barlow", ["Ken Barlow", "Adam Barlow", "Daniel Osbourne"], "Easy", "2014", "Relationships", ["Peter Barlow", "Tina McIntyre", "Carla Connor", "Extramarital affair", "Barlow family"]],
    ["Who was Peter Barlow married to during his affair with Tina McIntyre?", "Carla Connor", ["Leanne Battersby", "Tracy Barlow", "Michelle Connor"], "Easy", "2014", "Relationships", ["Peter Barlow", "Carla Connor", "Tina McIntyre", "Marriage", "Infidelity"]],
    ["Who murdered Tina McIntyre?", "Rob Donovan", ["Peter Barlow", "Tracy Barlow", "Carla Connor"], "Easy", "2014", "Crime", ["Rob Donovan", "Tina McIntyre", "Murder", "Peter Barlow", "Builder's Yard"]],
    ["From where did Tina McIntyre fall after Rob Donovan pushed her?", "The builders' yard balcony", ["The Rovers Return roof", "The Kabin staircase", "The Underworld loading bay"], "Medium", "2014", "Crime", ["Tina McIntyre", "Rob Donovan", "Builder's Yard", "Balcony fall", "Murder"]],
    ["What did Rob Donovan use to attack Tina McIntyre after her fall?", "An iron bar", ["A kitchen knife", "A hammer", "A wooden plank"], "Medium", "2014", "Crime", ["Rob Donovan", "Tina McIntyre", "Iron bar", "Fatal attack", "Murder weapon"]],
    ["Where did Tina McIntyre die from her injuries?", "In hospital", ["At the Rovers Return", "At the builders' yard", "At Underworld"], "Easy", "2014", "Departures", ["Tina McIntyre", "Weatherfield General", "Hospital death", "Rob Donovan", "Murder aftermath"]],
    ["Which actress played Tina McIntyre during her murder storyline?", "Michelle Keegan", ["Kym Marsh", "Georgia Taylor", "Paula Lane"], "Easy", "2014", "Actors", ["Michelle Keegan", "Tina McIntyre", "Actress", "Murder exit", "Casting"]],
    ["Which actor played Tina McIntyre's killer, Rob Donovan?", "Marc Baylis", ["Gray O'Brien", "Graeme Hawley", "Chris Gascoyne"], "Medium", "2014", "Actors", ["Marc Baylis", "Rob Donovan", "Actor", "Murder storyline", "Casting"]],
    ["Who was wrongly convicted of murdering Tina McIntyre?", "Peter Barlow", ["Steve McDonald", "Nick Tilsley", "David Platt"], "Easy", "2014", "Crime", ["Peter Barlow", "Tina McIntyre", "Wrongful conviction", "Murder trial", "Prison"]],
    ["To which sibling did Rob Donovan confess killing Tina before his planned wedding?", "Carla Connor", ["Michelle Connor", "Maria Connor", "Aidan Connor"], "Medium", "2014", "Crime", ["Rob Donovan", "Carla Connor", "Sibling confession", "Murder secret", "Wedding eve"]],
    ["Who told the police about Rob Donovan's confession?", "Carla Connor", ["Tracy Barlow", "Liz McDonald", "Leanne Battersby"], "Easy", "2014", "Crime", ["Carla Connor", "Rob Donovan", "Police tip-off", "Murder confession", "Tina McIntyre"]],
    ["Whom was Rob Donovan planning to marry when his murder secret emerged?", "Tracy Barlow", ["Carla Connor", "Kylie Platt", "Eva Price"], "Easy", "2014", "Weddings", ["Tracy Barlow", "Rob Donovan", "Planned wedding", "Murder discovery", "Engagement"]],
    ["Who helped the police track down fugitive Rob Donovan?", "Tracy Barlow", ["Maria Connor", "Fiz Stape", "Sally Webster"], "Medium", "2014", "Crime", ["Tracy Barlow", "Rob Donovan", "Fugitive", "Police capture", "Murder"]],
    ["To which city did Peter Barlow move after his release from prison?", "Portsmouth", ["Bristol", "Newcastle", "Liverpool"], "Medium", "2014", "Departures", ["Peter Barlow", "Portsmouth", "Release from prison", "Departure", "Tina McIntyre"]],
    ["Who suffered a miscarriage during the fallout from Tina McIntyre's death?", "Carla Connor", ["Kylie Platt", "Leanne Battersby", "Michelle Connor"], "Medium", "2014", "Families", ["Carla Connor", "Peter Barlow", "Pregnancy loss", "Miscarriage", "Tina McIntyre"]],
    ["Who tried to burgle Gail McIntyre's house before becoming her boyfriend?", "Michael Rodwell", ["Andy Carver", "Callum Logan", "Tony Stewart"], "Easy", "2014", "Arrivals", ["Michael Rodwell", "Gail McIntyre", "Burglary", "Character debut", "Restorative justice"]],
    ["Which entertainer joined Coronation Street as Michael Rodwell?", "Les Dennis", ["Timothy West", "John Thomson", "Shane Richie"], "Easy", "2014", "Actors", ["Les Dennis", "Michael Rodwell", "Actor", "Television personality", "Casting"]],
    ["What was the first name of Michael Rodwell's estranged son?", "Gavin", ["Jason", "Jamie", "Gary"], "Medium", "2014", "Families", ["Michael Rodwell", "Gavin Rodwell", "Estranged father and son", "Search for son", "Family history"]],
    ["Who pretended to be Michael Rodwell's son Gavin?", "Andy Carver", ["Luke Britton", "Todd Grimshaw", "Ryan Connor"], "Medium", "2014", "Storylines", ["Andy Carver", "Gavin Rodwell", "Michael Rodwell", "Impersonation", "False identity"]],
    ["Who was diagnosed with depression in November 2014?", "Steve McDonald", ["Kevin Webster", "Nick Tilsley", "Roy Cropper"], "Easy", "2014", "Storylines", ["Steve McDonald", "Depression diagnosis", "Mental health", "Michelle Connor", "Men's mental health"]],
    ["Who was Steve McDonald's father, serving time in prison during his struggles?", "Jim McDonald", ["Barry Connor", "Terry Duckworth", "Bill Webster"], "Easy", "2014", "Families", ["Jim McDonald", "Steve McDonald", "Imprisonment", "Father and son", "McDonald family"]],
    ["Who supplied Peter Barlow with alcohol while they were both in prison?", "Jim McDonald", ["Rob Donovan", "Frank Foster", "Tony Gordon"], "Medium", "2014", "Storylines", ["Jim McDonald", "Peter Barlow", "Prison alcohol", "Alcohol addiction", "Manipulation"]],
    ["Which former boyfriend supplied Kylie Platt with speed?", "Callum Logan", ["David Platt", "Nick Tilsley", "Graeme Proctor"], "Easy", "2014", "Storylines", ["Callum Logan", "Kylie Platt", "Amphetamine use", "Speed", "Drug supplier"]],
    ["Which of Kylie Platt's children was also Callum Logan's biological son?", "Max Turner", ["Lily Platt", "Jack Webster", "Simon Barlow"], "Easy", "2014", "Families", ["Max Turner", "Callum Logan", "Kylie Platt", "Biological son", "Parentage"]],
    ["Whom did David Platt discover taking drugs in December 2014?", "Kylie Platt", ["Sarah Platt", "Tina McIntyre", "Beth Tinker"], "Easy", "2014", "Storylines", ["Kylie Platt", "David Platt", "Callum Logan", "Speed", "Drug discovery"]],
    ["Who was Maria Connor dating before he had an affair with Todd Grimshaw?", "Marcus Dent", ["Jason Grimshaw", "Luke Britton", "Ryan Connor"], "Medium", "2014", "Relationships", ["Marcus Dent", "Maria Connor", "Todd Grimshaw", "Secret affair", "Relationship betrayal"]],
    ["Which Grimshaw son had a secret affair with Marcus Dent?", "Todd Grimshaw", ["Jason Grimshaw", "Billy Grimshaw", "Paul Kershaw"], "Easy", "2014", "Relationships", ["Todd Grimshaw", "Marcus Dent", "Maria Connor", "Secret affair", "Grimshaw family"]],
    ["Who became Sophie Webster's girlfriend after arriving in Weatherfield?", "Maddie Heath", ["Sian Powers", "Jenna Kamara", "Kate Connor"], "Easy", "2014", "Arrivals", ["Maddie Heath", "Sophie Webster", "Romance", "Teenage relationship", "Character debut"]],
    ["What was the name of Maddie Heath's younger brother in foster care?", "Ben", ["Jack", "Max", "Craig"], "Medium", "2014", "Families", ["Maddie Heath", "Ben Heath", "Younger brother", "Foster care", "Family"]],
    ["Which actress portrayed Maddie Heath?", "Amy James-Kelly", ["Brooke Vincent", "Faye Brookes", "Sacha Parkinson"], "Medium", "2014", "Actors", ["Amy James-Kelly", "Maddie Heath", "Actress", "Casting", "Character debut"]],
    ["Who blackmailed Gary Windass and Owen Armstrong using CCTV footage of Gary attacking him?", "Pat Phelan", ["Rob Donovan", "Tony Stewart", "Callum Logan"], "Easy", "2014", "Crime", ["Pat Phelan", "Gary Windass", "Owen Armstrong", "CCTV blackmail", "Assault"]],
    ["Which builder lost a major investment through his dealings with Pat Phelan?", "Owen Armstrong", ["Jason Grimshaw", "Bill Webster", "Charlie Stubbs"], "Easy", "2014", "Businesses", ["Owen Armstrong", "Pat Phelan", "Building contract", "Financial loss", "Business dispute"]],
    ["Whom did Pat Phelan coerce into sex to end his blackmail of Gary and Owen?", "Anna Windass", ["Sally Webster", "Eileen Grimshaw", "Liz McDonald"], "Medium", "2014", "Crime", ["Anna Windass", "Pat Phelan", "Coercive sexual exploitation", "Blackmail", "Windass family"]],
    ["What was the name of Pat Phelan's wife during his feud with the Windasses?", "Valerie", ["Vera", "Vanessa", "Victoria"], "Medium", "2014", "Families", ["Pat Phelan", "Valerie Phelan", "Marriage", "Windass feud", "Phelan family"]],
    ["Which newly arrived character was Kal Nazir's daughter?", "Alya Nazir", ["Yasmeen Nazir", "Zeedan Nazir", "Jenna Kamara"], "Easy", "2014", "Arrivals", ["Alya Nazir", "Kal Nazir", "Daughter", "Nazir family", "Character debut"]],
    ["Who was Kal Nazir's father?", "Sharif Nazir", ["Zeedan Nazir", "Dev Alahan", "Ranjiv Alahan"], "Medium", "2014", "Families", ["Sharif Nazir", "Kal Nazir", "Father", "Nazir family", "Character debut"]],
    ["Who was Kal Nazir's mother?", "Yasmeen Nazir", ["Alya Nazir", "Sunita Alahan", "Nazima Nazir"], "Easy", "2014", "Families", ["Yasmeen Nazir", "Kal Nazir", "Mother", "Nazir family", "Character debut"]],
    ["Who was Alya Nazir's brother?", "Zeedan Nazir", ["Sharif Nazir", "Kal Nazir", "Ryan Connor"], "Easy", "2014", "Families", ["Zeedan Nazir", "Alya Nazir", "Kal Nazir", "Brother and sister", "Character debut"]],
    ["Who began dating Kal Nazir after his arrival?", "Leanne Battersby", ["Carla Connor", "Michelle Connor", "Eva Price"], "Easy", "2014", "Relationships", ["Leanne Battersby", "Kal Nazir", "Romance", "Nazir family", "Relationship"]],
    ["What was the name of the community centre Yasmeen Nazir opened?", "Jamila House", ["Victoria Court", "Red Rec Hall", "Rosamund Centre"], "Hard", "2014", "Businesses", ["Jamila House", "Yasmeen Nazir", "Community centre", "Library closure", "Victoria Street"]],
    ["Which Windass had a secret romance with Alya Nazir?", "Gary Windass", ["Eddie Windass", "Tim Metcalfe", "Owen Armstrong"], "Easy", "2014", "Relationships", ["Gary Windass", "Alya Nazir", "Secret romance", "Nazir family", "Windass family"]],
    ["Which vicar did Sean Tully meet at a nightclub?", "Billy Mayhew", ["Paul Kershaw", "Marcus Dent", "Brian Packham"], "Medium", "2014", "Arrivals", ["Billy Mayhew", "Sean Tully", "Vicar", "Nightclub meeting", "Character debut"]],
    ["Which Barlow went to stay with Bev Unwin in October 2014?", "Deirdre Barlow", ["Susan Barlow", "Leanne Barlow", "Tracy Barlow"], "Easy", "2014", "Departures", ["Deirdre Barlow", "Bev Unwin", "Temporary departure", "Barlow family", "Friendship"]],
    ["Which Street veteran returned from Canada?", "Ken Barlow", ["Dennis Tanner", "Kevin Webster", "Norris Cole"], "Easy", "2014", "Returns", ["Ken Barlow", "Canada", "Return to Weatherfield", "Barlow family", "Character return"]],
    ["Who left Weatherfield to start a new life in New York?", "Stella Price", ["Gloria Price", "Eva Price", "Liz McDonald"], "Medium", "2014", "Departures", ["Stella Price", "New York", "Departure", "Former Rovers landlady", "Price family"]],
    ["Which mechanic returned from Germany after caring for his father?", "Kevin Webster", ["Tyrone Dobbs", "Tommy Duckworth", "Luke Britton"], "Easy", "2014", "Returns", ["Kevin Webster", "Bill Webster", "Germany", "Return", "Mechanic"]],

    // 2015
    ["Which couple married in January 2015 after years together?", "Kirk Sutherland and Beth Tinker", ["Tyrone Dobbs and Fiz Stape", "Roy Cropper and Cathy Matthews", "Jason Grimshaw and Eva Price"], "Easy", "2015", "Weddings", ["Kirk Sutherland", "Beth Tinker", "Wedding", "Tinker family", "Marriage"]],
    ["Who was driving the Underworld staff minibus when it crashed?", "Steve McDonald", ["Lloyd Mullaney", "Luke Britton", "Tyrone Dobbs"], "Easy", "2015", "Storylines", ["Steve McDonald", "Underworld minibus crash", "Driver", "Road traffic collision", "Depression"]],
    ["Which factory worker was temporarily paralysed by the Underworld minibus crash?", "Sinead Tinker", ["Beth Tinker", "Julie Carp", "Sally Webster"], "Medium", "2015", "Storylines", ["Sinead Tinker", "Underworld minibus crash", "Temporary paralysis", "Spinal injury", "Factory worker"]],
    ["Who finally told Michelle Connor about his depression after the minibus crash?", "Steve McDonald", ["Lloyd Mullaney", "Peter Barlow", "Nick Tilsley"], "Easy", "2015", "Storylines", ["Steve McDonald", "Michelle Connor", "Depression disclosure", "Mental health", "Minibus crash"]],
    ["Whom did Michelle Connor marry in May 2015?", "Steve McDonald", ["Lloyd Mullaney", "Robert Preston", "Nick Tilsley"], "Easy", "2015", "Weddings", ["Michelle Connor", "Steve McDonald", "Wedding", "Rovers Return", "Marriage"]],
    ["Who had an affair with Tony Stewart while he was seeing Liz McDonald?", "Tracy Barlow", ["Michelle Connor", "Eva Price", "Carla Connor"], "Easy", "2015", "Relationships", ["Tracy Barlow", "Tony Stewart", "Affair", "Liz McDonald", "Infidelity"]],
    ["Who was Tony Stewart dating before his affair with Tracy Barlow was exposed?", "Liz McDonald", ["Eileen Grimshaw", "Stella Price", "Sally Webster"], "Easy", "2015", "Relationships", ["Tony Stewart", "Liz McDonald", "Tracy Barlow", "Affair revealed", "Romance"]],
    ["Which Grimshaw son was Tony Stewart's biological child?", "Jason Grimshaw", ["Todd Grimshaw", "Ryan Connor", "Gary Windass"], "Medium", "2015", "Families", ["Jason Grimshaw", "Tony Stewart", "Father and son", "Grimshaw family", "Parentage"]],
    ["Which returning character began dating Kevin Webster in 2015?", "Jenny Bradley", ["Natalie Barnes", "Sally Webster", "Linda Hancock"], "Easy", "2015", "Returns", ["Jenny Bradley", "Kevin Webster", "Character return", "Romance", "Jack Webster"]],
    ["How did Kevin Webster and Jenny Bradley reconnect?", "Through a dating website", ["At a school reunion", "At a hospital appointment", "At a football match"], "Medium", "2015", "Relationships", ["Kevin Webster", "Jenny Bradley", "Online dating", "Dating website", "Reunion"]],
    ["Which young boy did Jenny Bradley try to abduct?", "Jack Webster", ["Max Turner", "Simon Barlow", "Joseph Brown"], "Easy", "2015", "Crime", ["Jenny Bradley", "Jack Webster", "Attempted child abduction", "Kevin Webster", "Maternal grief"]],
    ["To which city did Jenny Bradley take Jack Webster after abducting him?", "Hull", ["Leeds", "York", "Sheffield"], "Medium", "2015", "Crime", ["Jenny Bradley", "Jack Webster", "Hull", "Child abduction", "Balcony stand-off"]],
    ["Which actress returned to play Jenny Bradley?", "Sally Ann Matthews", ["Sally Dynevor", "Helen Worth", "Jane Danson"], "Medium", "2015", "Actors", ["Sally Ann Matthews", "Jenny Bradley", "Actress", "Casting", "Character return"]],
    ["What name did Faye Windass give her baby daughter?", "Miley", ["Lily", "Ruby", "Hope"], "Easy", "2015", "Families", ["Faye Windass", "Miley Windass", "Teenage pregnancy", "Newborn daughter", "Birth"]],
    ["Who was the father of Faye Windass's daughter Miley?", "Jackson Hodge", ["Craig Tinker", "Simon Barlow", "Chesney Brown"], "Medium", "2015", "Families", ["Jackson Hodge", "Faye Windass", "Miley Windass", "Teenage father", "Parentage"]],
    ["How old was Faye Windass when she gave birth to Miley?", "13", ["15", "16", "17"], "Medium", "2015", "Families", ["Faye Windass", "Age thirteen", "Miley Windass", "Teenage pregnancy", "Birth"]],
    ["Which teenage boy was wrongly suspected of being Miley's father?", "Craig Tinker", ["Simon Barlow", "Joseph Brown", "Ryan Connor"], "Medium", "2015", "Families", ["Craig Tinker", "Faye Windass", "Miley Windass", "Wrong paternity suspicion", "Friendship"]],
    ["Who took on much of the care of baby Miley while Faye struggled?", "Anna Windass", ["Sally Webster", "Gail Rodwell", "Audrey Roberts"], "Easy", "2015", "Families", ["Anna Windass", "Faye Windass", "Miley Windass", "Childcare", "Teenage motherhood"]],
    ["Who was Linda Hancock in relation to Izzy and Katy Armstrong?", "The mother of Izzy and Katy Armstrong", ["The mother of Eva and Leanne Price", "The mother of Sophie and Rosie Webster", "The mother of David and Sarah Platt"], "Medium", "2015", "Families", ["Linda Hancock", "Izzy Armstrong", "Katy Armstrong", "Mother and daughters", "Family return"]],
    ["Which character, played by Oliver Farnworth, dated Steph Britton?", "Andy Carver", ["Callum Logan", "Luke Britton", "Aidan Connor"], "Easy", "2015", "Storylines", ["Andy Carver", "Oliver Farnworth", "Steph Britton", "Actor", "Casting"]],
    ["Who knew Andy Carver was pretending to be Gavin Rodwell?", "Steph Britton", ["Sophie Webster", "Alya Nazir", "Maria Connor"], "Medium", "2015", "Storylines", ["Steph Britton", "Andy Carver", "Gavin Rodwell", "Secret identity", "Romance"]],
    ["Whom did Gail McIntyre marry in April 2015?", "Michael Rodwell", ["Lewis Archer", "Tony Stewart", "Nick Tilsley"], "Easy", "2015", "Weddings", ["Gail McIntyre", "Michael Rodwell", "Wedding", "Marriage", "Rodwell family"]],
    ["Who broke the news of Deirdre Barlow's death to Ken?", "Bev Unwin", ["Liz McDonald", "Emily Bishop", "Audrey Roberts"], "Easy", "2015", "Departures", ["Bev Unwin", "Ken Barlow", "Deirdre Barlow", "Death announcement", "Barlow family"]],
    ["Which actress, who died in January 2015, played Deirdre Barlow?", "Anne Kirkbride", ["Jean Alexander", "Pat Phoenix", "Doris Speed"], "Easy", "2015", "Actors", ["Anne Kirkbride", "Deirdre Barlow", "Actress", "Death of actor", "Long-running cast"]],
    ["What was the reported cause of Deirdre Barlow's death?", "An aneurysm", ["A heart attack", "A stroke", "A fall"], "Medium", "2015", "Departures", ["Deirdre Barlow", "Aneurysm", "Death", "Barlow family", "Portugal visit"]],
    ["Who was married to Deirdre Barlow when she died?", "Ken Barlow", ["Mike Baldwin", "Jon Lindsay", "Ray Langton"], "Easy", "2015", "Families", ["Deirdre Barlow", "Ken Barlow", "Marriage", "Bereavement", "Barlow family"]],
    ["Who accidentally started the fire at Victoria Court?", "Tracy Barlow", ["Carla Connor", "Liz McDonald", "Leanne Battersby"], "Easy", "2015", "Crime", ["Tracy Barlow", "Victoria Court", "Candle", "Accidental arson", "Carla Connor"]],
    ["Which apartment block was devastated by fire in May 2015?", "Victoria Court", ["Granada House", "Rosamund Flats", "Millennium Court"], "Easy", "2015", "Storylines", ["Victoria Court", "Apartment fire", "Kal Nazir", "Maddie Heath", "Disaster"]],
    ["Which Nazir family member died during the Victoria Court fire?", "Kal Nazir", ["Sharif Nazir", "Zeedan Nazir", "Yasmeen Nazir"], "Easy", "2015", "Departures", ["Kal Nazir", "Victoria Court fire", "Leanne Battersby", "Fatal rescue", "Nazir family"]],
    ["Which little girl was Kal Nazir trying to rescue when he died in the fire?", "Amy Barlow", ["Faye Windass", "Hope Stape", "Lily Platt"], "Easy", "2015", "Storylines", ["Amy Barlow", "Kal Nazir", "Victoria Court fire", "Rescue", "Tracy Barlow"]],
    ["Who died after an explosion in the builders' yard during the Victoria Court blaze?", "Maddie Heath", ["Sophie Webster", "Sinead Tinker", "Alya Nazir"], "Easy", "2015", "Departures", ["Maddie Heath", "Builders Yard explosion", "Victoria Court fire", "Sophie Webster", "Death"]],
    ["Who was Maddie Heath dating when she died?", "Sophie Webster", ["Sian Powers", "Jenna Kamara", "Kate Connor"], "Easy", "2015", "Relationships", ["Sophie Webster", "Maddie Heath", "Relationship", "Bereavement", "Victoria Court fire"]],
    ["Who was wrongly blamed by neighbours for the Victoria Court fire?", "Carla Connor", ["Beth Tinker", "Fiz Stape", "Maria Connor"], "Medium", "2015", "Storylines", ["Carla Connor", "Tracy Barlow", "Wrongful blame", "Victoria Court fire", "Fire investigation"]],
    ["Whom was Leanne Battersby engaged to when he died rescuing Amy Barlow?", "Kal Nazir", ["Nick Tilsley", "Peter Barlow", "Robert Preston"], "Easy", "2015", "Relationships", ["Kal Nazir", "Leanne Battersby", "Engagement", "Victoria Court fire", "Rescue"]],
    ["Who was killed by Kylie Platt in Coronation Street's September 2015 live episode?", "Callum Logan", ["Rob Donovan", "Tony Stewart", "Pat Phelan"], "Easy", "2015", "Crime", ["Callum Logan", "Kylie Platt", "Live episode", "Murder", "September 2015"]],
    ["Whom was Callum Logan attacking when Kylie Platt struck him?", "Sarah Platt", ["Gail Rodwell", "Bethany Platt", "Audrey Roberts"], "Easy", "2015", "Crime", ["Callum Logan", "Sarah Platt", "Kylie Platt", "Assault", "Fatal intervention"]],
    ["Where did David and Kylie Platt conceal Callum Logan's body?", "Beneath the garage floor at Number 8", ["In the Underworld cellar", "Under the Rovers kitchen floor", "In the canal by Victoria Court"], "Medium", "2015", "Crime", ["Callum Logan", "David Platt", "Kylie Platt", "No. 8", "Body concealment"]],
    ["Which ITV anniversary did Coronation Street's September 2015 live episode mark?", "The sixtieth", ["The fiftieth", "The fortieth", "The seventieth"], "Medium", "2015", "TV History", ["ITV sixtieth anniversary", "Live episode", "September 2015", "Broadcast milestone", "Coronation Street"]],
    ["Which actor portrayed gangster Callum Logan?", "Sean Ward", ["Marc Baylis", "Andrew Lancel", "Connor McIntyre"], "Medium", "2015", "Actors", ["Sean Ward", "Callum Logan", "Actor", "Casting", "Gangster"]],
    ["Who discovered she was pregnant with Callum Logan's child in December 2015?", "Sarah Platt", ["Kylie Platt", "Gail Rodwell", "Bethany Platt"], "Easy", "2015", "Families", ["Sarah Platt", "Callum Logan", "Pregnancy", "Harry Platt", "Paternity"]],
    ["Which former wife of Peter Barlow was abused by his son Simon?", "Leanne Battersby", ["Carla Connor", "Tracy Barlow", "Michelle Connor"], "Medium", "2015", "Storylines", ["Leanne Battersby", "Simon Barlow", "Domestic abuse", "Parent and child", "Peter Barlow"]],
    ["Which Street Cars driver moved to Jersey with Andrea Beckett?", "Lloyd Mullaney", ["Steve McDonald", "Tim Metcalfe", "Andy Carver"], "Medium", "2015", "Departures", ["Lloyd Mullaney", "Andrea Beckett", "Jersey", "Departure", "Street Cars"]],
    ["Who bought a stake in Underworld in August 2015?", "Aidan Connor", ["Johnny Connor", "Luke Britton", "Robert Preston"], "Easy", "2015", "Businesses", ["Aidan Connor", "Underworld", "Business investment", "Factory shares", "Character debut"]],
    ["Which X Factor winner joined Coronation Street as Aidan Connor?", "Shayne Ward", ["Matt Cardle", "Joe McElderry", "Steve Brookstein"], "Easy", "2015", "Actors", ["Shayne Ward", "Aidan Connor", "The X Factor", "Singer and actor", "Casting"]],
    ["What was the name of Aidan Connor's father?", "Johnny Connor", ["Barry Connor", "Paul Connor", "Liam Connor"], "Easy", "2015", "Families", ["Johnny Connor", "Aidan Connor", "Father and son", "Character debut", "Connor family"]],
    ["Which of Aidan Connor's sisters arrived with their father Johnny?", "Kate Connor", ["Carla Connor", "Maria Connor", "Michelle Connor"], "Easy", "2015", "Arrivals", ["Kate Connor", "Aidan Connor", "Johnny Connor", "Siblings", "Character debut"]],
    ["Which resident was revealed to be Johnny Connor's biological daughter?", "Carla Connor", ["Michelle Connor", "Maria Connor", "Kate Connor"], "Easy", "2015", "Families", ["Carla Connor", "Johnny Connor", "Biological daughter", "Paternity revelation", "Connor family"]],
    ["Which woman became friends with widower Roy Cropper?", "Cathy Matthews", ["Emily Bishop", "Mary Taylor", "Audrey Roberts"], "Easy", "2015", "Relationships", ["Cathy Matthews", "Roy Cropper", "Widower", "Friendship", "Character debut"]],
    ["Who learnt that her daughter Hope had neuroblastoma?", "Fiz Stape", ["Kylie Platt", "Tracy Barlow", "Maria Connor"], "Medium", "2015", "Families", ["Fiz Stape", "Hope Stape", "Neuroblastoma", "Childhood cancer", "Diagnosis"]],
    ["Who proposed to Fiz Stape on Christmas Day 2015?", "Tyrone Dobbs", ["Chesney Brown", "Roy Cropper", "Nick Tilsley"], "Easy", "2015", "Relationships", ["Tyrone Dobbs", "Fiz Stape", "Christmas Day", "Marriage proposal", "Romance"]],
    ["Which returning chef began a relationship with Tracy Barlow?", "Robert Preston", ["Nick Tilsley", "Ciaran McCarthy", "Kal Nazir"], "Easy", "2015", "Returns", ["Robert Preston", "Tracy Barlow", "Chef", "Character return", "Romance"]]

];

// Build the exported questions and preserve the original answer rotation.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, specialistTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(1801 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '2010s', year, topic, ...specialistTags])],
        dailyEligible: true
    };
});

// Validate every expanded object: count, years, options, metadata and tags.
if (questions.length !== 100 || questions[0].id !== 'tv_1801' ||
    questions[99].id !== 'tv_1900' ||
    questions.filter(q => q.tags.includes('2014')).length !== 49 ||
    questions.filter(q => q.tags.includes('2015')).length !== 51) {
    throw new Error('Pack 178: incorrect count, year split or IDs');
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
        q.category !== 'Television' || q.dailyEligible !== true ||
        !q.tags.includes('Soaps') || !q.tags.includes('Coronation Street') ||
        !q.tags.includes('2010s') || !['2014', '2015'].some(y => q.tags.includes(y)) ||
        q.tags.length < 9) {
        throw new Error('Pack 178: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenWording.add(wording);
}

module.exports = questions;
