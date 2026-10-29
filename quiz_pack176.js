// quiz_pack176.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2010 and 2011
// 100 questions: tv_1601 to tv_1700
// Year split: 48 from 2010, 52 from 2011.
// Question wording and specialist-tag audit.
// Original IDs, answers, answer rotation, difficulty and daily eligibility preserved.
// quiz_bank.js stays unchanged.

// Each entry: question, correct answer, three alternatives, difficulty, year, topic, specialist tags.
const facts = [
    // 2010
    ["Whom did Gail Platt marry in January 2010?", "Joe McIntyre", ["Phil Nail", "Richard Hillman", "Lewis Archer"], "Easy", "2010", "Weddings", ["Gail Platt", "Joe McIntyre", "Wedding", "Marriage", "Platt family"]],
    ["In which lake did Joe McIntyre drown after trying to fake his death?", "Lake Windermere", ["Ullswater", "Coniston Water", "Derwentwater"], "Medium", "2010", "Storylines", ["Joe McIntyre", "Gail McIntyre", "Lake Windermere", "Faked death", "Drowning"]],
    ["Which loan shark was Joe McIntyre fleeing when he tried to fake his death?", "Rick Neelan", ["Tony Gordon", "Frank Foster", "Robbie Sloane"], "Medium", "2010", "Crime", ["Joe McIntyre", "Rick Neelan", "Loan shark", "Debts", "Faked death"]],
    ["Who was charged with the murder of Joe McIntyre despite being innocent?", "Gail McIntyre", ["Tina McIntyre", "Audrey Roberts", "Natasha Blakeman"], "Easy", "2010", "Crime", ["Gail McIntyre", "Joe McIntyre", "Murder charge", "Wrongful arrest", "Trial"]],
    ["What was the verdict at Gail McIntyre's murder trial?", "Not guilty", ["Guilty", "Not proven", "The jury could not agree"], "Easy", "2010", "Crime", ["Gail McIntyre", "Joe McIntyre", "Not guilty verdict", "Murder trial", "Acquittal"]],
    ["Which resident was Joe McIntyre's daughter?", "Tina McIntyre", ["Natasha Blakeman", "Sophie Webster", "Rosie Webster"], "Easy", "2010", "Families", ["Joe McIntyre", "Tina McIntyre", "Father and daughter", "McIntyre family", "Bereavement"]],
    ["Which two teenage friends began a romantic relationship?", "Sophie Webster and Sian Powers", ["Rosie Webster and Katy Armstrong", "Tina McIntyre and Kylie Turner", "Maria Connor and Julie Carp"], "Easy", "2010", "Relationships", ["Sophie Webster", "Sian Powers", "Same-sex relationship", "Teenage romance", "Webster family"]],
    ["Which Webster daughter fell in love with Sian Powers?", "Sophie", ["Rosie", "Sarah", "Amy"], "Easy", "2010", "Relationships", ["Sophie Webster", "Sian Powers", "Teenage romance", "Girlfriends", "Webster family"]],
    ["Which former schoolteacher assumed the identity of Colin Fishwick to find work?", "John Stape", ["Brian Packham", "Peter Barlow", "Graeme Proctor"], "Easy", "2010", "Crime", ["John Stape", "Colin Fishwick", "Identity theft", "Teaching job", "False identity"]],
    ["Which former teaching colleague discovered John Stape's false identity?", "Charlotte Hoyle", ["Fiz Stape", "Kylie Turner", "Natasha Blakeman"], "Medium", "2010", "Storylines", ["Charlotte Hoyle", "John Stape", "Colin Fishwick", "Teaching colleague", "False identity"]],
    ["Which sharp-tongued Street favourite died while visiting Portugal?", "Blanche Hunt", ["Betty Williams", "Rita Sullivan", "Emily Bishop"], "Easy", "2010", "Departures", ["Blanche Hunt", "Deirdre Barlow", "Maggie Jones", "Portugal", "Character death"]],
    ["Which actress was best known for playing Blanche Hunt?", "Maggie Jones", ["Anne Kirkbride", "Barbara Knox", "Jean Alexander"], "Medium", "2010", "Actors", ["Maggie Jones", "Blanche Hunt", "Actress", "Casting", "Comedy character"]],
    ["Which Barlow was allowed out of prison to attend Blanche Hunt's funeral?", "Tracy Barlow", ["Peter Barlow", "Adam Barlow", "Ken Barlow"], "Medium", "2010", "Families", ["Tracy Barlow", "Blanche Hunt", "Funeral", "Temporary prison release", "Barlow family"]],
    ["Which convicted murderer escaped prison and took Carla Connor hostage?", "Tony Gordon", ["John Stape", "Frank Foster", "Richard Hillman"], "Easy", "2010", "Crime", ["Tony Gordon", "Carla Connor", "Underworld", "Hostage siege", "Prison escape"]],
    ["Which woman was held hostage alongside Carla Connor at Underworld?", "Hayley Cropper", ["Leanne Battersby", "Maria Connor", "Michelle Connor"], "Medium", "2010", "Crime", ["Hayley Cropper", "Tony Gordon", "Carla Connor", "Underworld", "Hostage siege"]],
    ["Who helped Tony Gordon carry out his final siege at Underworld?", "Robbie Sloane", ["Jimmy Dockerson", "Rick Neelan", "Joe Carter"], "Medium", "2010", "Crime", ["Tony Gordon", "Robbie Sloane", "Underworld", "Armed siege", "Prison escape"]],
    ["Where did Tony Gordon die after starting a fire during his final siege?", "Underworld factory", ["The Rovers Return", "The Joinery", "Street Cars"], "Easy", "2010", "Departures", ["Tony Gordon", "Underworld", "Factory fire", "Hostage siege", "Character death"]],
    ["Which actor played villain Tony Gordon?", "Gray O'Brien", ["Brian Capron", "Graeme Hawley", "Andrew Lancel"], "Medium", "2010", "Actors", ["Gray O'Brien", "Tony Gordon", "Actor", "Casting", "Villain"]],
    ["Which hairdresser started dating Graeme Proctor?", "Tina McIntyre", ["Maria Connor", "Natasha Blakeman", "Rosie Webster"], "Easy", "2010", "Relationships", ["Tina McIntyre", "Graeme Proctor", "Romance", "Hairdresser", "Relationship"]],
    ["Which Platt was investigated for epilepsy after blacking out at the wheel?", "David Platt", ["Nick Tilsley", "Gail Platt", "Sarah Platt"], "Medium", "2010", "Storylines", ["David Platt", "Epilepsy tests", "Driving blackout", "Car accident", "Medical investigation"]],
    ["Whom did David Platt knock down when he blacked out while driving?", "Graeme Proctor", ["Jason Grimshaw", "Steve McDonald", "Tyrone Dobbs"], "Medium", "2010", "Storylines", ["David Platt", "Graeme Proctor", "Car collision", "Driving blackout", "Injury"]],
    ["Which character was introduced as played by Paula Lane?", "Kylie Turner", ["Stella Price", "Kirsty Soames", "Eva Price"], "Easy", "2010", "Arrivals", ["Kylie Turner", "Paula Lane", "Character debut", "Casting", "McDonald family"]],
    ["What was the name of Kylie Turner's young son, whom she offered to Steve and Becky McDonald?", "Max", ["Simon", "Chesney", "Dylan"], "Easy", "2010", "Families", ["Kylie Turner", "Max Turner", "Steve McDonald", "Becky McDonald", "Child custody"]],
    ["How was Kylie Turner related to Becky McDonald?", "She was Becky's half-sister", ["She was Becky's cousin", "She was Becky's niece", "She was Becky's stepsister"], "Medium", "2010", "Families", ["Kylie Turner", "Becky McDonald", "Half-sisters", "Brown family", "Family reunion"]],
    ["Which hairdresser told Nick Tilsley she was still pregnant after ending her pregnancy?", "Natasha Blakeman", ["Maria Connor", "Tina McIntyre", "Kylie Turner"], "Medium", "2010", "Relationships", ["Natasha Blakeman", "Nick Tilsley", "False pregnancy claim", "Abortion", "Relationship breakdown"]],
    ["Why was Gail McIntyre dismissed from her job at the medical centre?", "She accessed Natasha Blakeman's medical records", ["She stole prescription medicine", "She argued with a patient", "She missed an important examination"], "Medium", "2010", "Occupations", ["Gail McIntyre", "Natasha Blakeman", "Medical centre", "Patient confidentiality", "Dismissal"]],
    ["Which established couple celebrated a legally recognised wedding in August 2010?", "Roy and Hayley Cropper", ["Ken and Deirdre Barlow", "Kevin and Sally Webster", "Steve and Becky McDonald"], "Easy", "2010", "Weddings", ["Roy Cropper", "Hayley Cropper", "Legal wedding", "Marriage equality", "30 August"]],
    ["Where did Roy and Hayley Cropper hold their legally recognised wedding?", "Shawbrooke Country House Hotel", ["The Rovers Return", "Weatherfield Register Office", "Victoria Court"], "Hard", "2010", "Weddings", ["Roy Cropper", "Hayley Cropper", "Shawbrooke Country House Hotel", "Legal wedding", "Wedding venue"]],
    ["Which veteran character died after being diagnosed with lymphoma?", "Jack Duckworth", ["Ken Barlow", "Roy Cropper", "Norris Cole"], "Easy", "2010", "Departures", ["Jack Duckworth", "Vera Duckworth", "Lymphoma", "Character death", "Duckworth family"]],
    ["Which deceased character appeared as a vision to Jack Duckworth in his final scene?", "Vera Duckworth", ["Bet Lynch", "Blanche Hunt", "Hilda Ogden"], "Easy", "2010", "Storylines", ["Jack Duckworth", "Vera Duckworth", "Final vision", "Reunion", "Afterlife scene"]],
    ["Which couple were raising baby Jack before his true paternity was revealed?", "Tyrone and Molly Dobbs", ["Kevin and Sally Webster", "Steve and Becky McDonald", "Dev and Sunita Alahan"], "Easy", "2010", "Families", ["Tyrone Dobbs", "Molly Dobbs", "Baby Jack", "Paternity secret", "Dobbs family"]],
    ["Who was baby Jack Dobbs's biological father?", "Kevin Webster", ["Tyrone Dobbs", "Tony Gordon", "Peter Barlow"], "Easy", "2010", "Families", ["Kevin Webster", "Molly Dobbs", "Baby Jack", "Paternity revelation", "Extramarital affair"]],
    ["Which Coronation Street anniversary was celebrated in December 2010?", "The fiftieth", ["The fortieth", "The sixtieth", "The thirtieth"], "Easy", "2010", "TV History", ["Coronation Street 50th anniversary", "1960 debut", "December 2010", "ITV", "Milestone"]],
    ["What disaster struck the Street during its 50th-anniversary week?", "A tram crashed onto the Street", ["A passenger plane hit the Rovers", "A train derailed at the station", "A flood swept away the factory"], "Easy", "2010", "Storylines", ["Tram crash", "Coronation Street 50th anniversary", "Weatherfield", "Disaster", "December 2010"]],
    ["Which bar exploded shortly before the tram crashed onto Coronation Street?", "The Joinery", ["The Rovers Return", "The Flying Horse", "Nick's Bistro"], "Medium", "2010", "Businesses", ["The Joinery", "Gas explosion", "Tram crash", "Nick Tilsley", "Bar collapse"]],
    ["Which butcher died when the damaged Joinery collapsed?", "Ashley Peacock", ["Fred Elliott", "Duggie Ferguson", "Kirk Sutherland"], "Easy", "2010", "Departures", ["Ashley Peacock", "The Joinery", "Tram crash", "Fatal collapse", "Peacock family"]],
    ["Who died beneath the wreckage of the Corner Shop after the tram crash?", "Molly Dobbs", ["Claire Peacock", "Sunita Alahan", "Becky McDonald"], "Easy", "2010", "Departures", ["Molly Dobbs", "Tram crash", "Corner Shop", "Baby Jack", "Fatal injuries"]],
    ["Which Kabin resident was trapped beneath rubble following the tram crash?", "Rita Sullivan", ["Emily Bishop", "Mary Taylor", "Betty Williams"], "Easy", "2010", "Storylines", ["Rita Sullivan", "The Kabin", "Tram crash", "Buried in rubble", "Rescue"]],
    ["Which boy did Jason Grimshaw rescue from a burning house after the tram crash?", "Simon Barlow", ["Chesney Brown", "Ryan Connor", "Joshua Peacock"], "Medium", "2010", "Storylines", ["Simon Barlow", "Jason Grimshaw", "Tram crash", "House fire", "Rescue"]],
    ["Which couple married at a hospital bedside during the tram disaster?", "Peter Barlow and Leanne Battersby", ["Steve McDonald and Becky Granger", "Roy Cropper and Hayley Patterson", "Nick Tilsley and Natasha Blakeman"], "Easy", "2010", "Weddings", ["Peter Barlow", "Leanne Battersby", "Hospital bedside wedding", "Tram crash", "Live episode"]],
    ["Which baby girl was born prematurely during the 50th-anniversary tram storyline?", "Hope Stape", ["Amy Barlow", "Ruby Dobbs", "Faye Butler"], "Easy", "2010", "Families", ["Hope Stape", "Fiz Stape", "Premature birth", "Tram crash", "50th anniversary"]],
    ["Who was the father of Fiz Stape’s daughter Hope?", "John Stape", ["Tyrone Dobbs", "Chesney Brown", "Peter Barlow"], "Easy", "2010", "Families", ["John Stape", "Fiz Stape", "Hope Stape", "Fatherhood", "Premature baby"]],
    ["Whom did John Stape strike with a hammer during tram-disaster week?", "Charlotte Hoyle", ["Joy Fishwick", "Fiz Stape", "Natasha Blakeman"], "Medium", "2010", "Crime", ["John Stape", "Charlotte Hoyle", "Hammer attack", "Tram crash", "Murder"]],
    ["To whom did Molly Dobbs reveal her baby's true paternity shortly before she died?", "Sally Webster", ["Tyrone Dobbs", "Sunita Alahan", "Rita Sullivan"], "Easy", "2010", "Families", ["Molly Dobbs", "Sally Webster", "Kevin Webster", "Baby Jack", "Deathbed confession"]],
    ["Which newsagents was demolished during the tram disaster?", "The Kabin", ["Bettabuy", "Prima Doner", "Comptons"], "Easy", "2010", "Businesses", ["The Kabin", "Rita Sullivan", "Tram crash", "Shop destruction", "Weatherfield"]],
    ["What was unusual about Coronation Street's fiftieth-anniversary episode on 9 December 2010?", "It was broadcast live", ["It was entirely animated", "It had no spoken dialogue", "It was screened in black and white"], "Medium", "2010", "TV History", ["Live episode", "9 December 2010", "ITV", "50th anniversary", "Broadcast history"]],
    ["Which army recruit left Weatherfield for Afghanistan?", "Gary Windass", ["David Platt", "Jason Grimshaw", "Ryan Connor"], "Medium", "2010", "Occupations", ["Gary Windass", "British Army", "Afghanistan", "Military service", "Deployment"]],
    ["Which couple had planned to move to France before the tram disaster?", "Ashley and Claire Peacock", ["Roy and Hayley Cropper", "Kevin and Sally Webster", "Dev and Sunita Alahan"], "Medium", "2010", "Departures", ["Ashley Peacock", "Claire Peacock", "France", "Planned emigration", "Tram crash"]],

    // 2011
    ["Who admitted to attacking Tracy Barlow at the beginning of 2011?", "Claire Peacock", ["Becky McDonald", "Gail McIntyre", "Sally Webster"], "Easy", "2011", "Crime", ["Claire Peacock", "Tracy Barlow", "Assault confession", "Police investigation", "Peacock family"]],
    ["Whom did Tracy Barlow falsely accuse of attacking her?", "Becky McDonald", ["Claire Peacock", "Fiz Stape", "Kylie Turner"], "Easy", "2011", "Crime", ["Tracy Barlow", "Becky McDonald", "Claire Peacock", "False accusation", "Assault"]],
    ["Who suffered a fatal heart attack after John Stape covered her mouth to silence her?", "Joy Fishwick", ["Charlotte Hoyle", "Sylvia Goodwin", "Edna Hargreaves"], "Medium", "2011", "Crime", ["Joy Fishwick", "Colin Fishwick", "John Stape", "Heart attack", "Covering mouth"]],
    ["Which gambling prize brought Kevin Webster £200,000?", "A scratch card jackpot", ["A television quiz prize", "A premium bonds payout", "A newspaper competition"], "Medium", "2011", "Money", ["Kevin Webster", "£200000", "Scratch card jackpot", "Lottery win", "Money"]],
    ["What was the name of Roy Cropper's outspoken mother?", "Sylvia Goodwin", ["Joy Fishwick", "Blanche Hunt", "Claudia Colby"], "Easy", "2011", "Families", ["Sylvia Goodwin", "Roy Cropper", "Mother and son", "Roy's Rolls", "Character debut"]],
    ["Which actress began playing Roy Cropper's mother Sylvia?", "Stephanie Cole", ["Maggie Smith", "Judy Cornwell", "Frances de la Tour"], "Medium", "2011", "Actors", ["Stephanie Cole", "Sylvia Goodwin", "Roy Cropper", "Actress", "Casting"]],
    ["Which young girl was taken into Anna Windass's care and later adopted?", "Faye Butler", ["Amy Barlow", "Hope Stape", "Sian Powers"], "Easy", "2011", "Families", ["Faye Butler", "Anna Windass", "Foster care", "Adoption", "Windass family"]],
    ["Which actress first played Faye Butler?", "Ellie Leach", ["Brooke Vincent", "Sacha Parkinson", "Georgia May Foote"], "Medium", "2011", "Actors", ["Ellie Leach", "Faye Butler", "Character debut", "Casting", "Windass family"]],
    ["Which McDonald attempted to rob a building society?", "Jim McDonald", ["Steve McDonald", "Andy McDonald", "Tracy McDonald"], "Easy", "2011", "Crime", ["Jim McDonald", "Building society", "Armed robbery", "Police siege", "Crime"]],
    ["What did Jim McDonald hope to buy with the money from his attempted robbery?", "The Rovers Return", ["Underworld", "Street Cars", "The Kabin"], "Medium", "2011", "Rovers Return", ["Jim McDonald", "Liz McDonald", "Rovers Return", "Pub purchase", "Building society robbery"]],
    ["Which couple married in April 2011 and later lived at Number 8?", "David Platt and Kylie Turner", ["Tyrone Dobbs and Kirsty Soames", "Jason Grimshaw and Rosie Webster", "Graeme Proctor and Tina McIntyre"], "Easy", "2011", "Weddings", ["David Platt", "Kylie Turner", "Wedding", "No. 8", "Platt family"]],
    ["Where did David and Kylie Platt go on honeymoon?", "Tenerife", ["Cyprus", "Malta", "Ibiza"], "Medium", "2011", "Travel", ["David Platt", "Kylie Turner", "Tenerife", "Honeymoon", "Spain"]],
    ["Whom did Graeme Proctor marry in a scheme to help her stay in Britain?", "Xin Chiang", ["Tina McIntyre", "Kylie Turner", "Sian Powers"], "Easy", "2011", "Weddings", ["Graeme Proctor", "Xin Chiang", "Sham marriage", "Immigration", "Wedding"]],
    ["Who was Graeme Proctor dating when he married Xin Chiang for immigration reasons?", "Tina McIntyre", ["Rosie Webster", "Maria Connor", "Fiz Stape"], "Easy", "2011", "Relationships", ["Graeme Proctor", "Tina McIntyre", "Xin Chiang", "Marriage of convenience", "Love triangle"]],
    ["Why did Tina McIntyre break up with Graeme Proctor?", "He fell in love with Xin", ["He moved to Australia", "He stole her savings", "He joined the army"], "Medium", "2011", "Relationships", ["Tina McIntyre", "Graeme Proctor", "Xin Chiang", "Affair", "Breakup"]],
    ["Which child was removed from Steve and Becky McDonald's care?", "Max Turner", ["Simon Barlow", "Jack Webster", "Joseph Brown"], "Easy", "2011", "Families", ["Max Turner", "Becky McDonald", "Steve McDonald", "Care removal", "Family conflict"]],
    ["Which couple eventually took responsibility for Max Turner?", "David and Kylie Platt", ["Roy and Hayley Cropper", "Kevin and Sally Webster", "Peter and Leanne Barlow"], "Medium", "2011", "Families", ["Max Turner", "David Platt", "Kylie Platt", "Care arrangements", "Family reunion"]],
    ["Which new manager arrived at the Rovers Return in June 2011?", "Stella Price", ["Bet Lynch", "Bev Unwin", "Natalie Barnes"], "Easy", "2011", "Arrivals", ["Stella Price", "Rovers Return", "Landlady", "Character debut", "Pub management"]],
    ["Which actress began playing Stella Price in Coronation Street?", "Michelle Collins", ["Beverley Callard", "Sally Lindsay", "Sue Nicholls"], "Medium", "2011", "Actors", ["Michelle Collins", "Stella Price", "Actress", "Casting", "Character debut"]],
    ["Which longstanding Weatherfield resident turned out to be Stella Price’s daughter?", "Leanne Barlow", ["Tracy Barlow", "Carla Connor", "Becky McDonald"], "Easy", "2011", "Families", ["Stella Price", "Leanne Barlow", "Mother and daughter", "Family secret", "Price family"]],
    ["Who arrived as another daughter of Stella Price?", "Eva Price", ["Kylie Platt", "Tina McIntyre", "Sian Powers"], "Easy", "2011", "Families", ["Eva Price", "Stella Price", "Leanne Barlow", "Half-sisters", "Character debut"]],
    ["Who was Stella Price’s partner when she first came to Weatherfield?", "Karl Munro", ["Peter Barlow", "Steve McDonald", "Frank Foster"], "Medium", "2011", "Relationships", ["Stella Price", "Karl Munro", "Romance", "Rovers Return", "Partner"]],
    ["Which original Coronation Street character returned after more than forty years away?", "Dennis Tanner", ["Jed Stone", "Ray Langton", "Reg Holdsworth"], "Easy", "2011", "Returns", ["Dennis Tanner", "Philip Lowrie", "1968 departure", "Return to Weatherfield", "Original cast"]],
    ["Who offered homeless Dennis Tanner a place to stay?", "Rita Sullivan", ["Emily Bishop", "Mary Taylor", "Betty Williams"], "Medium", "2011", "Relationships", ["Dennis Tanner", "Rita Sullivan", "Homelessness", "Lodger", "Reunion"]],
    ["Which original cast member returned to play Dennis Tanner?", "Philip Lowrie", ["Kenneth Cope", "Peter Baldwin", "Roy Hudd"], "Medium", "2011", "Actors", ["Philip Lowrie", "Dennis Tanner", "Actor", "Original cast", "Character return"]],
    ["Which longstanding Battersby left Weatherfield after years working at Underworld?", "Janice Battersby", ["Leanne Battersby", "Toyah Battersby", "Les Battersby"], "Easy", "2011", "Departures", ["Janice Battersby", "Underworld", "Leanne Barlow", "Departure", "Factory machinist"]],
    ["Which businessman bought into Underworld before being accused of rape?", "Frank Foster", ["Tony Gordon", "Luke Strong", "Danny Baldwin"], "Medium", "2011", "Businesses", ["Frank Foster", "Underworld", "Factory investment", "Sexual violence storyline", "Businessman"]],
    ["Who reported Frank Foster for attempted rape before he later assaulted Carla Connor?", "Maria Connor", ["Michelle Connor", "Leanne Barlow", "Rosie Webster"], "Medium", "2011", "Crime", ["Maria Connor", "Frank Foster", "Attempted sexual assault", "Police report", "Workplace"]],
    ["Which Underworld boss was raped by Frank Foster?", "Carla Connor", ["Maria Connor", "Kelly Crabtree", "Michelle Connor"], "Easy", "2011", "Storylines", ["Carla Connor", "Frank Foster", "Rape", "Sexual assault", "Underworld"]],
    ["Which actor played businessman Frank Foster?", "Andrew Lancel", ["Gray O'Brien", "Brian Capron", "Graeme Hawley"], "Medium", "2011", "Actors", ["Andrew Lancel", "Frank Foster", "Actor", "Casting", "Villain"]],
    ["Which Rovers manager was injured when Carla Connor crashed into the bookies?", "Stella Price", ["Liz McDonald", "Bev Unwin", "Betty Williams"], "Medium", "2011", "Storylines", ["Stella Price", "Carla Connor", "Bookmakers", "Drink-driving collision", "Injury"]],
    ["Which Barlow was arrested on suspicion of assaulting Frank Foster?", "Peter Barlow", ["Ken Barlow", "Adam Barlow", "Simon Barlow"], "Medium", "2011", "Crime", ["Peter Barlow", "Frank Foster", "Assault investigation", "Arrest", "Carla Connor"]],
    ["Which policewoman started dating Tyrone Dobbs?", "Kirsty Soames", ["Emma Watts", "Claire Peacock", "Becky McDonald"], "Easy", "2011", "Relationships", ["Kirsty Soames", "Tyrone Dobbs", "Police constable", "Romance", "Character debut"]],
    ["Which actress made her Coronation Street debut as Kirsty Soames?", "Natalie Gumede", ["Paula Lane", "Jennie McAlpine", "Georgia Taylor"], "Medium", "2011", "Actors", ["Natalie Gumede", "Kirsty Soames", "Actress", "Casting", "Character debut"]],
    ["Whose teenage sister became pregnant with Chesney Brown’s baby?", "Izzy Armstrong's", ["Fiz Brown's", "Rosie Webster's", "Leanne Battersby's"], "Medium", "2011", "Families", ["Katy Armstrong", "Izzy Armstrong", "Chesney Brown", "Pregnancy", "Sisters"]],
    ["What name did Katy Armstrong and Chesney Brown give their son?", "Joseph", ["Jack", "Jake", "Joshua"], "Easy", "2011", "Families", ["Katy Armstrong", "Chesney Brown", "Joseph Brown", "Birth", "Armstrong family"]],
    ["Which businessman was Katy Armstrong's father?", "Owen Armstrong", ["Dev Alahan", "Frank Foster", "Tony Gordon"], "Easy", "2011", "Families", ["Owen Armstrong", "Katy Armstrong", "Izzy Armstrong", "Father and daughter", "Builder"]],
    ["Who was jailed after being wrongly accused of Colin Fishwick’s murder?", "Fiz Stape", ["Hayley Cropper", "Anna Windass", "Becky McDonald"], "Easy", "2011", "Crime", ["Fiz Stape", "Colin Fishwick", "John Stape", "Wrongful imprisonment", "Murder accusation"]],
    ["Which of Fiz Stape’s relatives was held hostage alongside the Hoyles by John Stape?", "Chesney Brown", ["Kirk Sutherland", "Tyrone Dobbs", "Peter Barlow"], "Medium", "2011", "Crime", ["Chesney Brown", "John Stape", "Alan Hoyle", "Dorothy Hoyle", "Hostage crisis"]],
    ["Which little girl did John Stape take when he fled?", "Hope Stape", ["Faye Butler", "Amy Barlow", "Bethany Platt"], "Medium", "2011", "Families", ["John Stape", "Hope Stape", "Fiz Stape", "Escape", "Abduction"]],
    ["Which previous victim did John Stape abduct for a second time?", "Rosie Webster", ["Sarah Platt", "Sian Powers", "Tina McIntyre"], "Easy", "2011", "Crime", ["John Stape", "Rosie Webster", "Second kidnapping", "Car chase", "Hostage"]],
    ["How did John Stape die?", "From injuries after a car crash", ["In the tram crash", "In a factory fire", "After falling into the canal"], "Easy", "2011", "Departures", ["John Stape", "Car crash", "Fatal injuries", "Character death", "Police chase"]],
    ["Which of Chesney Brown’s dogs was put to sleep?", "Schmeichel", ["Eccles", "Ozzy", "Monica"], "Easy", "2011", "Animals", ["Schmeichel", "Chesney Brown", "Great Dane", "Dog", "Pet bereavement"]],
    ["Who did Gary Windass lock inside a house, believing he was protecting her?", "Izzy Armstrong", ["Faye Butler", "Katy Armstrong", "Anna Windass"], "Medium", "2011", "Relationships", ["Gary Windass", "Izzy Armstrong", "Locked inside", "Post-traumatic stress", "Controlling behaviour"]],
    ["Who pretended to have a brain tumour to win back his former wife Cheryl?", "Chris Gray", ["Lloyd Mullaney", "Peter Barlow", "Paul Kershaw"], "Medium", "2011", "Storylines", ["Chris Gray", "Cheryl Gray", "Brain tumour lie", "Lloyd Mullaney", "Deception"]],
    ["Which couple called off their wedding when Michelle decided against returning to cruise-ship work?", "Michelle Connor and Ciaran McCarthy", ["Steve McDonald and Becky McDonald", "Carla Connor and Frank Foster", "Tina McIntyre and Graeme Proctor"], "Medium", "2011", "Weddings", ["Michelle Connor", "Ciaran McCarthy", "Cancelled wedding", "Cruise ship", "Relationship breakdown"]],
    ["Which two young women planned to marry in December 2011 before their wedding collapsed?", "Sophie Webster and Sian Powers", ["Rosie Webster and Katy Armstrong", "Tina McIntyre and Xin Chiang", "Maria Connor and Carla Connor"], "Easy", "2011", "Weddings", ["Sophie Webster", "Sian Powers", "Planned wedding", "Relationship breakdown", "Same-sex couple"]],
    ["Who left Weatherfield after her planned wedding to Sophie Webster collapsed?", "Sian Powers", ["Rosie Webster", "Fiz Stape", "Katy Armstrong"], "Easy", "2011", "Departures", ["Sian Powers", "Sophie Webster", "Cancelled wedding", "Departure", "Relationship breakup"]],
    ["Who claimed Becky McDonald had pushed her downstairs and caused a miscarriage?", "Tracy Barlow", ["Leanne Barlow", "Kylie Platt", "Sally Webster"], "Medium", "2011", "Crime", ["Tracy Barlow", "Becky McDonald", "Staged fall", "False miscarriage accusation", "Steve McDonald"]],
    ["Which Barlow suffered a miscarriage in July 2011?", "Leanne Barlow", ["Tracy Barlow", "Deirdre Barlow", "Susan Barlow"], "Medium", "2011", "Families", ["Leanne Barlow", "Peter Barlow", "Miscarriage", "Pregnancy loss", "Barlow family"]],
    ["Which returning Duckworth became a mechanic and began dating Tina McIntyre?", "Tommy Duckworth", ["Ryan Connor", "Craig Harris", "Adam Barlow"], "Medium", "2011", "Returns", ["Tommy Duckworth", "Tina McIntyre", "Romance", "Mechanic", "Character return"]],
    ["Which firefighter began dating Eileen Grimshaw after rescuing her from railings?", "Paul Kershaw", ["Jim McDonald", "Chris Gray", "Owen Armstrong"], "Medium", "2011", "Relationships", ["Paul Kershaw", "Eileen Grimshaw", "Firefighter", "Rescue", "Romance"]]
];

// Build exported question objects with the original four-choice rotation.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, specialistTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(1601 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '2010s', year, topic, ...specialistTags])],
        dailyEligible: true
    };
});

// Validate the actual expanded objects, including specialist metadata.
if (questions.length !== 100 || questions[0].id !== 'tv_1601' ||
    questions[99].id !== 'tv_1700' ||
    questions.filter(q => q.tags.includes('2010')).length !== 48 ||
    questions.filter(q => q.tags.includes('2011')).length !== 52) {
    throw new Error('Pack 176: incorrect question count, year split or ID range');
}
const seenIds = new Set();
const seenQuestions = new Set();
for (const q of questions) {
    const wording = q.question.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
    if (seenIds.has(q.id) || seenQuestions.has(wording) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        !q.tags.includes('Soaps') || !q.tags.includes('Coronation Street') ||
        !q.tags.includes('2010s') || !['2010', '2011'].some(y => q.tags.includes(y)) ||
        q.tags.length < 8 || q.category !== 'Television' || q.dailyEligible !== true) {
        throw new Error('Pack 176: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenQuestions.add(wording);
}

module.exports = questions;
