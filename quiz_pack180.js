// quiz_pack180.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2018 and 2019
// 100 questions: tv_2001 to tv_2100
// 50 questions from 2018; 50 from 2019.
// Tagging and wording audit: original IDs, answers and settings retained.
// quiz_bank.js remains unchanged.

// Entry: question, correct answer, three alternatives, difficulty, year, topic, specialist tags.
const facts = [
    // 2018
    ["Which mechanic was murdered by Pat Phelan?", "Luke Britton", ["Tyrone Dobbs", "Kevin Webster", "Gary Windass"], "Easy", "2018", "Crime", ["Pat Phelan", "Luke Britton", "Murder", "Mechanic", "Shooting"]],
    ["What happened to Luke Britton's car after Pat Phelan shot him?", "It exploded after Phelan shot its fuel tank", ["It plunged into a canal", "It was crushed by a lorry", "It caught fire in a garage accident"], "Medium", "2018", "Crime", ["Pat Phelan", "Luke Britton", "Car explosion", "Fuel tank", "Murder cover-up"]],
    ["Who was wrongly convicted of assaulting Seb Franklin?", "Anna Windass", ["Eileen Grimshaw", "Sally Metcalfe", "Fiz Stape"], "Easy", "2018", "Crime", ["Anna Windass", "Seb Franklin", "Wrongful conviction", "Assault charge", "Prison"]],
    ["Who manipulated the evidence used to convict Anna Windass?", "Pat Phelan", ["Gary Windass", "Rob Donovan", "Vinny Ashford"], "Easy", "2018", "Crime", ["Anna Windass", "Pat Phelan", "Evidence manipulation", "False accusation", "Court"]],
    ["Who was married to Pat Phelan when his crimes were exposed?", "Eileen Grimshaw", ["Anna Windass", "Liz McDonald", "Jenny Connor"], "Easy", "2018", "Relationships", ["Pat Phelan", "Eileen Grimshaw", "Marriage", "Crimes exposed", "Grimshaw family"]],
    ["Which two murdered men's bodies were discovered at a disused mill?", "Andy Carver and Vinny Ashford", ["Luke Britton and Michael Rodwell", "Rob Donovan and Tony Gordon", "Clayton Hibbs and Josh Tucker"], "Medium", "2018", "Crime", ["Andy Carver", "Vinny Ashford", "Disused mill", "Hidden bodies", "Phelan murders"]],
    ["Who fatally stabbed Pat Phelan during his final confrontation?", "Anna Windass", ["Eileen Grimshaw", "Nicola Rubinstein", "Michelle Connor"], "Easy", "2018", "Crime", ["Anna Windass", "Pat Phelan", "Fatal stabbing", "Final confrontation", "Revenge"]],
    ["Which daughter of Pat Phelan was shot during his final rampage?", "Nicola Rubinstein", ["Sarah Platt", "Faye Windass", "Alya Nazir"], "Easy", "2018", "Families", ["Nicola Rubinstein", "Pat Phelan", "Daughter", "Gunshot wound", "Final rampage"]],
    ["Which Bistro worker was shot by Pat Phelan shortly before his death?", "Michelle Connor", ["Leanne Battersby", "Eva Price", "Carla Connor"], "Easy", "2018", "Crime", ["Michelle Connor", "Pat Phelan", "Bistro", "Shooting", "Final showdown"]],
    ["Which actor played Coronation Street villain Pat Phelan?", "Connor McIntyre", ["Gray O'Brien", "Marc Baylis", "Brian Capron"], "Medium", "2018", "Actors", ["Connor McIntyre", "Pat Phelan", "Actor", "Villain", "Casting"]],
    ["Who drugged and sexually assaulted David Platt?", "Josh Tucker", ["Clayton Hibbs", "Nathan Curtis", "Pat Phelan"], "Easy", "2018", "Storylines", ["Josh Tucker", "David Platt", "Drug-facilitated sexual assault", "Rape", "Male survivor"]],
    ["What type of business did Josh Tucker become involved with when he befriended David Platt?", "A boxing gym", ["A barber's shop", "A taxi firm", "A nightclub"], "Medium", "2018", "Businesses", ["Josh Tucker", "David Platt", "Boxing gym", "Trainer", "Grooming"]],
    ["Who was David Platt's girlfriend during the Josh Tucker storyline?", "Shona Ramsey", ["Kylie Platt", "Emma Brooker", "Tina McIntyre"], "Easy", "2018", "Relationships", ["Shona Ramsey", "David Platt", "Josh Tucker", "Romance", "Sexual assault storyline"]],
    ["Which actor portrayed Josh Tucker in Coronation Street?", "Ryan Clayton", ["Sean Ward", "Chris Gascoyne", "Rob Mallard"], "Medium", "2018", "Actors", ["Ryan Clayton", "Josh Tucker", "Actor", "Casting", "Sexual assault storyline"]],
    ["What stage name did Bethany Platt use while working as a lap dancer?", "Madison", ["Scarlett", "Crystal", "Destiny"], "Medium", "2018", "Occupations", ["Bethany Platt", "Madison", "Lap dancing", "Stage name", "Sexual exploitation aftermath"]],
    ["Which woman befriended Bethany Platt and was revealed to be Neil Clifton's daughter?", "Kayla Clifton", ["Emma Brooker", "Abi Franklin", "Hannah Gilmore"], "Medium", "2018", "Arrivals", ["Kayla Clifton", "Bethany Platt", "Neil Clifton", "Grooming aftermath", "Revenge plot"]],
    ["Which Underworld boss died by suicide in May 2018?", "Aidan Connor", ["Johnny Connor", "Rob Donovan", "Peter Barlow"], "Easy", "2018", "Departures", ["Aidan Connor", "Underworld", "Suicide", "Mental health", "May 2018"]],
    ["Who discovered Aidan Connor's body when he failed to arrive at work?", "Johnny Connor", ["Carla Connor", "Eva Price", "Kate Connor"], "Medium", "2018", "Families", ["Johnny Connor", "Aidan Connor", "Father and son", "Discovery of body", "Bereavement"]],
    ["Which actor won Best Exit at the 2018 Inside Soap Awards for portraying Aidan Connor?", "Shayne Ward", ["Matt Cardle", "Joe McElderry", "Leon Jackson"], "Easy", "2018", "Actors", ["Shayne Ward", "Aidan Connor", "Best Exit award", "Inside Soap Awards 2018", "Award winner"]],
    ["Who gave birth to Aidan Connor's daughter Susie?", "Eva Price", ["Toyah Battersby", "Maria Connor", "Carla Connor"], "Easy", "2018", "Families", ["Eva Price", "Aidan Connor", "Baby Susie", "Birth", "Secret daughter"]],
    ["What was the name of Eva Price and Aidan Connor's daughter?", "Susie", ["Ruby", "Lily", "Miley"], "Easy", "2018", "Families", ["Eva Price", "Aidan Connor", "Susie Price", "Baby name", "Parenthood"]],
    ["Who initially pretended that Eva Price's baby Susie was her own?", "Toyah Battersby", ["Leanne Battersby", "Jenny Connor", "Tracy Barlow"], "Easy", "2018", "Storylines", ["Toyah Battersby", "Eva Price", "Baby Susie", "Surrogacy lie", "False motherhood"]],
    ["Whose baby did Peter Barlow believe he was raising with Toyah Battersby?", "Their surrogate's baby", ["His child with Carla", "Eva's child with Adam", "His child with Leanne"], "Medium", "2018", "Families", ["Peter Barlow", "Toyah Battersby", "Surrogate pregnancy", "Baby deception", "Susie Price"]],
    ["Who abducted baby Susie during a custody dispute with Eva Price?", "Johnny Connor", ["Peter Barlow", "Adam Barlow", "Rob Donovan"], "Easy", "2018", "Crime", ["Johnny Connor", "Eva Price", "Susie Price", "Child abduction", "Custody battle"]],
    ["To which country did Eva Price move with baby Susie?", "France", ["Spain", "Canada", "Australia"], "Easy", "2018", "Departures", ["Eva Price", "Susie Price", "France", "Emigration", "Departure"]],
    ["Who inherited Aidan Connor's share of Underworld after his death?", "Alya Nazir", ["Kate Connor", "Jenny Connor", "Michelle Connor"], "Easy", "2018", "Businesses", ["Aidan Connor", "Alya Nazir", "Underworld", "Factory inheritance", "Shares"]],
    ["Which youngster developed life-threatening sepsis?", "Jack Webster", ["Max Turner", "Simon Barlow", "Joseph Brown"], "Easy", "2018", "Storylines", ["Jack Webster", "Sepsis", "Serious illness", "Hospital", "Summer 2018"]],
    ["Which part of Jack Webster's body was amputated as a result of sepsis?", "His lower leg and foot", ["His right arm", "His hand", "His left ear"], "Medium", "2018", "Storylines", ["Jack Webster", "Sepsis", "Lower leg amputation", "Kevin Webster", "Disability"]],
    ["Which doctor recognised the warning signs of Jack Webster's sepsis?", "Ali Neeson", ["Dr Gaddas", "Marcus Dent", "Martin Platt"], "Medium", "2018", "Occupations", ["Ali Neeson", "Jack Webster", "Sepsis symptoms", "Doctor", "Early recognition"]],
    ["Who was Jack Webster's father during his sepsis crisis?", "Kevin Webster", ["Tim Metcalfe", "Tyrone Dobbs", "Steve McDonald"], "Easy", "2018", "Families", ["Kevin Webster", "Jack Webster", "Father and son", "Sepsis crisis", "Webster family"]],
    ["Which councillor was framed for fraud by Duncan Radfield?", "Sally Metcalfe", ["Yasmeen Nazir", "Audrey Roberts", "Gail Rodwell"], "Easy", "2018", "Crime", ["Sally Metcalfe", "Duncan Radfield", "Fraud framing", "Councillor", "False accusation"]],
    ["What happened to Sally Metcalfe following her wrongful fraud conviction?", "She was sent to prison", ["She was placed under house arrest", "She was ordered to leave Weatherfield", "She was made to work at the Rovers"], "Easy", "2018", "Crime", ["Sally Metcalfe", "Wrongful imprisonment", "Fraud trial", "Duncan Radfield", "Prison"]],
    ["Which woman kissed Tim Metcalfe while his wife Sally was in prison?", "Gina Seddon", ["Rosie Webster", "Faye Windass", "Jenny Connor"], "Easy", "2018", "Families", ["Gina Seddon", "Tim Metcalfe", "Sally Metcalfe", "Drunken kiss", "Prison ordeal"]],
    ["Who ran over Liz McDonald on Christmas Day 2018?", "Jenny Connor", ["Tracy Barlow", "Sally Metcalfe", "Abi Franklin"], "Medium", "2018", "Crime", ["Jenny Connor", "Liz McDonald", "Drink-driving", "Christmas Day", "Hit-and-run"]],
    ["Who tried to take the blame for Jenny Connor running over Liz McDonald?", "Johnny Connor", ["Steve McDonald", "Peter Barlow", "Robert Preston"], "Medium", "2018", "Crime", ["Johnny Connor", "Jenny Connor", "Liz McDonald", "False confession", "Hit-and-run cover-up"]],
    ["Which former husband returned to deceive Liz McDonald about their daughter?", "Jim McDonald", ["Vernon Tomlin", "Tony Stewart", "Steve McDonald"], "Easy", "2018", "Returns", ["Jim McDonald", "Liz McDonald", "Fake daughter", "Katie McDonald", "Conspiracy"]],
    ["What name did the woman pretending to be Liz and Jim's daughter use?", "Hannah Gilmore", ["Elsa Tilsley", "Kayla Clifton", "Emma Brooker"], "Medium", "2018", "Crime", ["Hannah Gilmore", "Jim McDonald", "Liz McDonald", "Fake daughter", "Impersonation"]],
    ["What was the name of the daughter Liz and Jim McDonald believed had died as a baby?", "Katie", ["Amy", "Susie", "Ruby"], "Medium", "2018", "Families", ["Katie McDonald", "Liz McDonald", "Jim McDonald", "Deceased infant", "Fake daughter scam"]],
    ["Which outspoken newcomer turned out to be Tyrone Dobbs's grandmother?", "Evelyn Plummer", ["Sylvia Goodwin", "Claudia Colby", "Gina Seddon"], "Easy", "2018", "Arrivals", ["Evelyn Plummer", "Tyrone Dobbs", "Grandmother", "Maureen Lipman", "Character debut"]],
    ["Which actress joined Coronation Street as Evelyn Plummer?", "Maureen Lipman", ["Stephanie Cole", "Rula Lenska", "Sue Johnston"], "Easy", "2018", "Actors", ["Maureen Lipman", "Evelyn Plummer", "Actress", "Casting", "Tyrone Dobbs"]],
    ["How was Geoff Metcalfe related to Tim Metcalfe?", "He was Tim's father", ["He was Tim's uncle", "He was Tim's brother", "He was Tim's cousin"], "Easy", "2018", "Families", ["Geoff Metcalfe", "Tim Metcalfe", "Father and son", "Character debut", "Metcalfe family"]],
    ["What broadcasting job did Geoff Metcalfe have when he first appeared?", "Hospital radio DJ", ["Television newsreader", "Sports commentator", "Local radio weather presenter"], "Medium", "2018", "Occupations", ["Geoff Metcalfe", "Hospital radio", "Disc jockey", "Broadcaster", "Character debut"]],
    ["Who was diagnosed with cervical cancer while pregnant?", "Sinead Tinker", ["Kate Connor", "Rana Habeeb", "Bethany Platt"], "Easy", "2018", "Storylines", ["Sinead Tinker", "Daniel Osbourne", "Cervical cancer", "Pregnancy", "Diagnosis"]],
    ["Who exchanged vows with Sinead Tinker in a non-legal Pagan ceremony?", "Daniel Osbourne", ["Chesney Brown", "Adam Barlow", "Ryan Connor"], "Easy", "2018", "Weddings", ["Daniel Osbourne", "Sinead Tinker", "Pagan wedding", "Non-legal vows", "Relationship"]],
    ["Which couple married in October 2018, years after an earlier wedding fell apart?", "Steve McDonald and Tracy Barlow", ["Peter Barlow and Leanne Battersby", "Nick Tilsley and Carla Connor", "Tim Metcalfe and Sally Webster"], "Easy", "2018", "Weddings", ["Steve McDonald", "Tracy Barlow", "Wedding", "Marriage", "October 2018"]],
    ["Who briefly dated David Platt while he was separated from Shona Ramsey?", "Emma Brooker", ["Kayla Clifton", "Vicky Jefferies", "Hannah Gilmore"], "Medium", "2018", "Relationships", ["Emma Brooker", "David Platt", "Shona Ramsey", "Brief romance", "Relationship break"]],
    ["Which Weatherfield resident experienced homelessness?", "Sean Tully", ["Roy Cropper", "Ken Barlow", "Norris Cole"], "Easy", "2018", "Storylines", ["Sean Tully", "Homelessness", "Rough sleeping", "Housing crisis", "Social issues"]],
    ["Which gangster son died after a drug overdose?", "Cormac Truman", ["Tyler Jefferies", "Seb Franklin", "Josh Tucker"], "Medium", "2018", "Crime", ["Cormac Truman", "Ronan Truman", "Drug overdose", "Gangster son", "Death"]],
    ["Who returned to Weatherfield with a secret wife named Elsa?", "Nick Tilsley", ["Peter Barlow", "Daniel Osbourne", "Robert Preston"], "Easy", "2018", "Returns", ["Nick Tilsley", "Elsa Tilsley", "Secret marriage", "Character return", "Leanne Battersby"]],
    ["Which solicitor arrived as Rana Habeeb's brother?", "Imran Habeeb", ["Adam Barlow", "Todd Grimshaw", "Nick Tilsley"], "Easy", "2018", "Arrivals", ["Imran Habeeb", "Rana Habeeb", "Brother and sister", "Solicitor", "Character debut"]],

    // 2019
    ["Which councillor was released after her fraud conviction was overturned?", "Sally Metcalfe", ["Gina Seddon", "Anna Windass", "Yasmeen Nazir"], "Easy", "2019", "Crime", ["Sally Metcalfe", "Overturned conviction", "Prison release", "Fraud case", "Innocence"]],
    ["Who stole £80,000 from Audrey Roberts?", "Nick Tilsley", ["Lewis Archer", "David Platt", "Gail Rodwell"], "Easy", "2019", "Crime", ["Nick Tilsley", "Audrey Roberts", "£80,000 theft", "Family betrayal", "Bank account"]],
    ["Which former conman died suddenly on New Year's Day 2019?", "Lewis Archer", ["Pat Phelan", "Jim McDonald", "Tony Stewart"], "Easy", "2019", "Departures", ["Lewis Archer", "Audrey Roberts", "New Year's Day", "Sudden death", "Conman"]],
    ["Which Barlow teenager discovered she was pregnant?", "Amy Barlow", ["Faye Windass", "Bethany Platt", "Summer Spellman"], "Easy", "2019", "Families", ["Amy Barlow", "Tracy Barlow", "Teenage pregnancy", "Steve McDonald", "Family"]],
    ["Who was the father of Amy Barlow's unborn baby?", "Tyler Jefferies", ["Simon Barlow", "Craig Tinker", "Aadi Alahan"], "Medium", "2019", "Families", ["Tyler Jefferies", "Amy Barlow", "Teenage father", "Pregnancy", "Barlow family"]],
    ["What did Daniel and Sinead Osbourne name their prematurely born son?", "Bertie", ["Joseph", "Harry", "Jake"], "Easy", "2019", "Families", ["Bertie Osbourne", "Sinead Tinker", "Daniel Osbourne", "Premature birth", "Hospital"]],
    ["Who was baby Bertie Osbourne's mother?", "Sinead Tinker", ["Beth Tinker", "Tracy Barlow", "Carla Connor"], "Easy", "2019", "Families", ["Sinead Tinker", "Bertie Osbourne", "Mother and son", "Premature birth", "Cancer"]],
    ["Which factory's roof collapsed shortly before Kate and Rana's wedding?", "Underworld", ["Baldwin's Casuals", "Street Cars", "The Kabin"], "Easy", "2019", "Storylines", ["Underworld", "Factory roof collapse", "Rana Habeeb", "Kate Connor", "Wedding disaster"]],
    ["Who died when Underworld's roof collapsed?", "Rana Habeeb", ["Kate Connor", "Alya Nazir", "Carla Connor"], "Easy", "2019", "Departures", ["Rana Habeeb", "Underworld roof collapse", "Kate Connor", "Fatal accident", "Wedding day"]],
    ["Whom was Rana Habeeb due to marry when the factory roof collapsed?", "Kate Connor", ["Zeedan Nazir", "Sophie Webster", "Alya Nazir"], "Easy", "2019", "Weddings", ["Rana Habeeb", "Kate Connor", "Planned wedding", "Factory roof collapse", "Tragedy"]],
    ["Who secretly sabotaged the Underworld roof before its fatal collapse?", "Gary Windass", ["Nick Tilsley", "Peter Barlow", "Rob Donovan"], "Easy", "2019", "Crime", ["Gary Windass", "Underworld", "Roof sabotage", "Rana Habeeb", "Fatal collapse"]],
    ["Which factory boss was unfairly blamed for the Underworld roof collapse?", "Carla Connor", ["Alya Nazir", "Jenny Connor", "Michelle Connor"], "Easy", "2019", "Storylines", ["Carla Connor", "Underworld", "False blame", "Roof collapse", "Factory disaster"]],
    ["Which loan shark was murdered by Gary Windass?", "Rick Neelan", ["Pat Phelan", "Callum Logan", "Josh Tucker"], "Easy", "2019", "Crime", ["Gary Windass", "Rick Neelan", "Loan shark", "Murder", "June 2019"]],
    ["Where did Gary Windass hide Rick Neelan's body?", "In woodland", ["Under the factory floor", "In a canal", "In the Rovers cellar"], "Medium", "2019", "Crime", ["Gary Windass", "Rick Neelan", "Woodland burial", "Hidden body", "Murder cover-up"]],
    ["Which solicitor broke up with Toyah Battersby after Rana Habeeb’s death?", "Imran Habeeb", ["Adam Barlow", "Nick Tilsley", "Todd Grimshaw"], "Easy", "2019", "Families", ["Imran Habeeb", "Toyah Battersby", "Relationship breakdown", "Rana Habeeb", "Grief and tension"]],
    ["Which family moved into Number 3 Coronation Street in June 2019?", "The Baileys", ["The Nazirs", "The Metcalfes", "The Windasses"], "Easy", "2019", "Arrivals", ["Bailey family", "No. 3 Coronation Street", "Arrival", "Ed Bailey", "Aggie Bailey"]],
    ["What was the first name of the father of the Bailey family?", "Ed", ["Michael", "James", "Ronnie"], "Easy", "2019", "Families", ["Ed Bailey", "Aggie Bailey", "James Bailey", "Michael Bailey", "Father"]],
    ["What was the first name of Ed Bailey's wife?", "Aggie", ["Angie", "Alya", "Anna"], "Easy", "2019", "Families", ["Aggie Bailey", "Ed Bailey", "James Bailey", "Michael Bailey", "Mother"]],
    ["Which Bailey son was a professional footballer when the family arrived?", "James Bailey", ["Michael Bailey", "Ed Bailey", "Ronnie Bailey"], "Easy", "2019", "Occupations", ["James Bailey", "Weatherfield County", "Footballer", "Bailey family", "Professional sport"]],
    ["Which football club did James Bailey play for?", "Weatherfield County", ["Manchester United", "Bolton Wanderers", "Salford City"], "Medium", "2019", "Sport", ["James Bailey", "Weatherfield County", "Football club", "Professional footballer", "Bailey family"]],
    ["Which Bailey family member struggled with a gambling addiction?", "Ed Bailey", ["Michael Bailey", "James Bailey", "Ronnie Bailey"], "Easy", "2019", "Storylines", ["Ed Bailey", "Gambling addiction", "Financial difficulties", "Bailey family", "Recovery"]],
    ["Which business did Ed and Michael Bailey buy upon moving to Weatherfield?", "The builders' yard", ["The Rovers Return", "Underworld", "Street Cars"], "Medium", "2019", "Businesses", ["Ed Bailey", "Michael Bailey", "Builders Yard", "Building firm", "Business purchase"]],
    ["Where did Aggie Bailey work to help the family finances?", "Roy's Rolls", ["The Kabin", "The Rovers Return", "Underworld"], "Medium", "2019", "Occupations", ["Aggie Bailey", "Roy's Rolls", "Cafe job", "Bailey family", "Household finances"]],
    ["Who discovered she was expecting quadruplets?", "Gemma Winter", ["Sinead Tinker", "Katy Armstrong", "Eva Price"], "Easy", "2019", "Families", ["Gemma Winter", "Chesney Brown", "Quadruplet pregnancy", "Multiple birth", "Family"]],
    ["Who was the father of Gemma Winter's quadruplets?", "Chesney Brown", ["Henry Newton", "Paul Foreman", "Dev Alahan"], "Easy", "2019", "Families", ["Chesney Brown", "Gemma Winter", "Quadruplets", "Fatherhood", "Family"]],
    ["Which Welsh seaside town was Gemma Winter visiting when she went into labour?", "Llandudno", ["Rhyl", "Aberystwyth", "Tenby"], "Medium", "2019", "Travel", ["Gemma Winter", "Llandudno", "Wales", "Holiday", "Quadruplet labour"]],
    ["Which form of transport was Gemma Winter riding when she went into labour?", "A cable car", ["A tram", "A ferry", "A helicopter"], "Medium", "2019", "Families", ["Gemma Winter", "Llandudno cable car", "Labour", "Quadruplets", "Holiday"]],
    ["What were the names of Gemma Winter and Chesney Brown’s quadruplets?", "Aled, Bryn, Carys and Llio", ["Jack, Joseph, Ruby and Hope", "Harry, Oliver, Lily and Susie", "Aled, Alfie, Rosie and Beth"], "Medium", "2019", "Families", ["Aled Winter-Brown", "Bryn Winter-Brown", "Carys Winter-Brown", "Llio Winter-Brown", "Quadruplets"]],
    ["Which newcomer was Gemma Winter's mother?", "Bernie Winter", ["Evelyn Plummer", "Jenny Connor", "Gina Seddon"], "Easy", "2019", "Arrivals", ["Bernie Winter", "Gemma Winter", "Mother and daughter", "Character debut", "Winter family"]],
    ["Who was revealed to be Gemma Winter's twin brother?", "Paul Foreman", ["Billy Mayhew", "Chesney Brown", "Ryan Connor"], "Easy", "2019", "Families", ["Paul Foreman", "Gemma Winter", "Twin siblings", "Winter family", "Family reunion"]],
    ["Who began a romantic relationship with Paul Foreman?", "Billy Mayhew", ["Sean Tully", "Todd Grimshaw", "Marcus Dent"], "Easy", "2019", "Relationships", ["Paul Foreman", "Billy Mayhew", "Same-sex relationship", "Romance", "Winter family"]],
    ["Which type of cancer claimed Sinead Osbourne's life?", "Cervical cancer", ["Breast cancer", "Pancreatic cancer", "Lung cancer"], "Easy", "2019", "Storylines", ["Sinead Tinker", "Cervical cancer", "Terminal illness", "Death", "Daniel Osbourne"]],
    ["Whom did Sinead Osbourne marry in a legal ceremony in September 2019?", "Daniel Osbourne", ["Chesney Brown", "Adam Barlow", "Ryan Connor"], "Easy", "2019", "Weddings", ["Sinead Tinker", "Daniel Osbourne", "Legal wedding", "Cancer storyline", "Marriage"]],
    ["Which actress played Sinead Osbourne in her final episodes?", "Katie McGlynn", ["Georgia May Foote", "Lucy Fallon", "Bhavna Limbachia"], "Medium", "2019", "Actors", ["Katie McGlynn", "Sinead Tinker", "Actress", "Casting", "Final episodes"]],
    ["Who was revealed to be Emma Brooker's biological father?", "Steve McDonald", ["Nick Tilsley", "Peter Barlow", "Lloyd Mullaney"], "Easy", "2019", "Families", ["Emma Brooker", "Steve McDonald", "Biological father", "Paternity discovery", "McDonald family"]],
    ["Which former Street resident was Emma Brooker's mother?", "Fiona Middleton", ["Vicky Arden", "Becky McDonald", "Natalie Barnes"], "Medium", "2019", "Families", ["Fiona Middleton", "Emma Brooker", "Mother and daughter", "Steve McDonald", "Former resident"]],
    ["Who was Roy Cropper's newly discovered half-brother?", "Richard Lucas", ["Brian Packham", "Dennis Tanner", "Norris Cole"], "Medium", "2019", "Families", ["Richard Lucas", "Roy Cropper", "Half-brothers", "Family discovery", "Lucas family"]],
    ["Which teenage relative of Roy Cropper arrived in November 2019?", "Nina Lucas", ["Summer Spellman", "Faye Windass", "Asha Alahan"], "Easy", "2019", "Arrivals", ["Nina Lucas", "Roy Cropper", "Niece", "Richard Lucas", "Character debut"]],
    ["Which man began subjecting Yasmeen Nazir to coercive control?", "Geoff Metcalfe", ["Ed Bailey", "Robert Preston", "Nick Tilsley"], "Easy", "2019", "Storylines", ["Geoff Metcalfe", "Yasmeen Nazir", "Coercive control", "Domestic abuse", "Psychological manipulation"]],
    ["Whom did David Platt marry in November 2019?", "Shona Ramsey", ["Emma Brooker", "Sarah Platt", "Kylie Turner"], "Easy", "2019", "Weddings", ["David Platt", "Shona Ramsey", "Wedding", "Marriage", "Platt family"]],
    ["Who uncovered Robert Preston’s secret relationship with Vicky Jefferies?", "Michelle Connor", ["Carla Connor", "Jenny Connor", "Leanne Battersby"], "Easy", "2019", "Relationships", ["Michelle Connor", "Robert Preston", "Vicky Jefferies", "Secret relationship", "Love triangle"]],
    ["Who was pregnant with Robert Preston's child during his deception of Michelle Connor?", "Vicky Jefferies", ["Tracy Barlow", "Michelle Connor", "Bethany Platt"], "Medium", "2019", "Families", ["Vicky Jefferies", "Robert Preston", "Pregnancy", "Double life", "Secret partner"]],
    ["Which chef was fatally shot during the Christmas 2019 Winter Wonderland siege?", "Robert Preston", ["Nick Tilsley", "Gary Windass", "Peter Barlow"], "Easy", "2019", "Departures", ["Robert Preston", "Derek Milligan", "Winter Wonderland", "Fatal shooting", "Christmas Day"]],
    ["Who shot Robert Preston during the Christmas 2019 siege?", "Derek Milligan", ["Rick Neelan", "Gary Windass", "Tyler Jefferies"], "Medium", "2019", "Crime", ["Derek Milligan", "Robert Preston", "Shooting", "Christmas Day", "Winter Wonderland"]],
    ["Which newlywed woman was shot during the Christmas 2019 siege?", "Shona Platt", ["Michelle Connor", "Sarah Platt", "Jenny Connor"], "Easy", "2019", "Storylines", ["Shona Platt", "Derek Milligan", "Gunshot wound", "Christmas Day", "Winter Wonderland"]],
    ["From which fairground attraction did Derek Milligan fall during the Christmas siege?", "A helter-skelter", ["A Ferris wheel", "A rollercoaster", "A carousel"], "Medium", "2019", "Crime", ["Derek Milligan", "Helter-skelter", "Winter Wonderland", "Fatal fall", "Christmas siege"]],
    ["Who bought the Bistro from Michelle Connor before she left Weatherfield?", "Ray Crosby", ["Nick Tilsley", "Gary Windass", "Ed Bailey"], "Medium", "2019", "Businesses", ["Ray Crosby", "Michelle Connor", "Bistro", "Business sale", "Departure"]],
    ["Which Alahan teenager secretly used skin-lightening cream?", "Asha Alahan", ["Alya Nazir", "Faye Windass", "Amy Barlow"], "Easy", "2019", "Storylines", ["Asha Alahan", "Dev Alahan", "Skin-lightening cream", "Body image", "Racism and colourism"]],
    ["Which of Roy Cropper’s relatives died off-screen in January 2019?", "Sylvia Goodwin", ["Blanche Hunt", "Vera Duckworth", "Betty Williams"], "Medium", "2019", "Departures", ["Sylvia Goodwin", "Roy Cropper", "Death off-screen", "Stephanie Cole", "Mother and son"]],
    ["Who accidentally started a fire on Peter Barlow's boat while sleepwalking?", "Roy Cropper", ["Gary Windass", "Nick Tilsley", "Steve McDonald"], "Medium", "2019", "Storylines", ["Roy Cropper", "Peter Barlow", "Boat fire", "Sleepwalking", "Paraffin lamp"]]

];

// Build the original answer positions while including individual specialist tags.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, specialistTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(2001 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '2010s', year, topic, ...specialistTags])],
        dailyEligible: true
    };
});

// Validate the expanded objects for count, ID range, years, answers and tags.
if (questions.length !== 100 || questions[0].id !== 'tv_2001' ||
    questions[99].id !== 'tv_2100' ||
    questions.filter(q => q.tags.includes('2018')).length !== 50 ||
    questions.filter(q => q.tags.includes('2019')).length !== 50) {
    throw new Error('Pack 180: incorrect count, year split or ID range');
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
        !q.tags.includes('2010s') || !['2018','2019'].some(y => q.tags.includes(y)) ||
        q.tags.length < 9) {
        throw new Error('Pack 180: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenWording.add(wording);
}
module.exports = questions;
