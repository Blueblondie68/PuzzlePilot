// quiz_pack171.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2000 and 2001
// 100 questions: tv_1101 to tv_1200
// 45 questions from 2000, 55 from 2001.
// Complete wording and specialist-tag audit.
// Original IDs, answers, difficulty, daily eligibility and base tags preserved.
// quiz_bank.js is already connected and stays unchanged.

// Entry: question, correct answer, three alternatives, difficulty, year, original topic, specialist tags.
const facts = [
    // 2000
    ["Which former Coronation Street barmaid returned for a final visit at New Year 2000?", "Raquel Watts", ["Bet Gilroy", "Tanya Pooley", "Gloria Todd"], "Easy", "2000", "Returns", ["Raquel Watts", "Curly Watts", "Character return", "Final appearance", "New Year"]],
    ["What was the name of Curly Watts and Raquel's daughter?", "Alice", ["Amy", "Becky", "Katie"], "Medium", "2000", "Families", ["Curly Watts", "Raquel Watts", "Alice Watts", "Secret daughter", "Parentage"]],
    ["Which country was Raquel living in when she returned to ask Curly for a divorce?", "France", ["Canada", "Germany", "Australia"], "Medium", "2000", "Departures", ["Raquel Watts", "Curly Watts", "France", "Divorce", "Relocation"]],
    ["What was the name of Raquel's French partner mentioned during her 2000 return?", "Armand de Beaux", ["Jacques Laurent", "Pierre Dubois", "Jean Moreau"], "Hard", "2000", "Relationships", ["Raquel Watts", "Armand de Beaux", "France", "New partner", "Divorce"]],
    ["What television first did Raquel and Curly's private conversation mark for Coronation Street?", "Coronation Street's first two-hander", ["Its first colour episode", "Its first outdoor broadcast", "Its first musical episode"], "Medium", "2000", "TV History", ["Raquel Watts", "Curly Watts", "First two-hander", "Special episode", "Broadcast history"]],
    ["Which mechanic married Alison Wakefield?", "Kevin Webster", ["Chris Collins", "Martin Platt", "Jim McDonald"], "Easy", "2000", "Weddings", ["Kevin Webster", "Alison Wakefield", "Wedding", "Webster family", "Register office"]],
    ["Which region did Kevin and Alison visit on their honeymoon?", "The Lake District", ["The Scottish Highlands", "The Yorkshire Dales", "The Peak District"], "Medium", "2000", "Travel", ["Kevin Webster", "Alison Webster", "Lake District", "Honeymoon", "Marriage"]],
    ["What was the name of Kevin and Alison Webster's baby son?", "Jake", ["Jack", "Jamie", "Jason"], "Medium", "2000", "Families", ["Kevin Webster", "Alison Webster", "Jake Webster", "Birth", "Webster family"]],
    ["What happened to baby Jake Webster shortly after his birth?", "He died from an infection", ["He was adopted", "He was taken abroad", "He needed a heart transplant"], "Medium", "2000", "Storylines", ["Jake Webster", "Alison Webster", "Kevin Webster", "Group B streptococcus", "Infant death"]],
    ["Whose newborn baby did the grieving Alison Webster take?", "Bethany Platt", ["Becky Mallett", "Rosie Webster", "Alice Watts"], "Medium", "2000", "Storylines", ["Alison Webster", "Bethany Platt", "Sarah-Louise Platt", "Baby abduction", "Bereavement"]],
    ["How did Alison Webster die following the death of her son?", "She ran in front of a lorry", ["She drowned in the canal", "She fell from a balcony", "She died in a house fire"], "Medium", "2000", "Storylines", ["Alison Webster", "Jake Webster", "Kevin Webster", "Lorry", "Suicide", "Bereavement"]],
    ["Which Rovers landlady was Debs Brownlow's sister?", "Natalie Barnes", ["Liz McDonald", "Betty Williams", "Vera Duckworth"], "Medium", "2000", "Families", ["Debs Brownlow", "Natalie Barnes", "Rovers Return", "Sisters", "Character debut"]],
    ["What was Debs Brownlow's job when she arrived in Weatherfield?", "Hairdresser", ["Nurse", "Teacher", "Police officer"], "Medium", "2000", "Occupations", ["Debs Brownlow", "Hairdresser", "Natalie Barnes", "Career", "Character debut"]],
    ["Which businessman became romantically involved with Debs Brownlow?", "Duggie Ferguson", ["Fred Elliott", "Roy Cropper", "Mike Baldwin"], "Medium", "2000", "Relationships", ["Debs Brownlow", "Duggie Ferguson", "Romance", "Rovers Return", "Relationships"]],
    ["Which former wife of Mike Baldwin reverted to the surname Halliwell?", "Alma", ["Linda", "Susan", "Jackie"], "Easy", "2000", "Characters", ["Alma Halliwell", "Mike Baldwin", "Maiden surname", "Divorce", "Name change"]],
    ["Which new barmaid first appeared in February 2000 and later dated Dev Alahan?", "Geena Gregory", ["Shelley Unwin", "Karen Phillips", "Sunita Parekh"], "Medium", "2000", "Arrivals", ["Geena Gregory", "Dev Alahan", "Rovers Return", "Barmaid", "Character debut"]],
    ["Which Platt teenager discovered she was pregnant at the age of thirteen?", "Sarah-Louise", ["Rosie", "Leanne", "Toyah"], "Easy", "2000", "Families", ["Sarah-Louise Platt", "Gail Platt", "Teenage pregnancy", "Platt family", "Thirteen-year-old"]],
    ["Which doctor told Gail Platt that Sarah-Louise was pregnant?", "Dr Wilson", ["Dr Gaddas", "Dr Matt Ramsden", "Dr Carter"], "Medium", "2000", "Storylines", ["Dr Wilson", "Gail Platt", "Sarah-Louise Platt", "Teenage pregnancy", "Medical consultation"]],
    ["Who was the father of Sarah-Louise Platt's baby?", "Neil Fearns", ["Todd Grimshaw", "Nick Tilsley", "Jason Grimshaw"], "Easy", "2000", "Families", ["Sarah-Louise Platt", "Neil Fearns", "Bethany Platt", "Paternity", "Teenage parents"]],
    ["What name did Sarah-Louise Platt give her daughter?", "Bethany", ["Britney", "Becky", "Bella"], "Easy", "2000", "Families", ["Sarah-Louise Platt", "Bethany Platt", "Birth", "Teenage mother", "Platt family"]],
    ["Which pop star inspired Sarah-Louise Platt's idea of calling baby Bethany 'Britney'?", "Britney Spears", ["Christina Aguilera", "Kylie Minogue", "Melanie Brown"], "Medium", "2000", "Popular Culture", ["Sarah-Louise Platt", "Bethany Platt", "Britney Spears", "Baby names", "Pop music"]],
    ["Which young Platt went shoplifting because he felt overlooked after Bethany's birth?", "David Platt", ["Nick Tilsley", "Martin Platt", "Peter Barlow"], "Medium", "2000", "Families", ["David Platt", "Bethany Platt", "Sarah-Louise Platt", "Shoplifting", "Sibling jealousy"]],
    ["Which woman was Martin Platt's secret lover?", "Rebecca Hopkins", ["Alison Wakefield", "Linda Sykes", "Fiona Middleton"], "Medium", "2000", "Relationships", ["Martin Platt", "Rebecca Hopkins", "Gail Platt", "Affair", "Hospital"]],
    ["To which city did nurse Rebecca Hopkins leave Weatherfield?", "Dubai", ["Edinburgh", "Barcelona", "Amsterdam"], "Medium", "2000", "Departures", ["Rebecca Hopkins", "Martin Platt", "Dubai", "Nurse", "Departure"]],
    ["Which newcomer began dating Tyrone Dobbs?", "Maria Sutherland", ["Candice Stowe", "Fiz Brown", "Geena Gregory"], "Easy", "2000", "Relationships", ["Maria Sutherland", "Tyrone Dobbs", "First romance", "Character debut", "Sutherland family"]],
    ["What was the first name of Maria Sutherland's brother?", "Kirk", ["Karl", "Keith", "Kevin"], "Easy", "2000", "Families", ["Maria Sutherland", "Kirk Sutherland", "Siblings", "Sutherland family", "Character debut"]],
    ["At which famous seaside landmark did Tyrone Dobbs propose to Maria?", "Blackpool Tower", ["Brighton Pier", "Southend Pier", "Scarborough Castle"], "Medium", "2000", "Relationships", ["Tyrone Dobbs", "Maria Sutherland", "Blackpool Tower", "Marriage proposal", "Seaside"]],
    ["Which actress began playing Maria Sutherland?", "Samia Ghadie", ["Jane Danson", "Georgia Taylor", "Nikki Sanderson"], "Medium", "2000", "Actors", ["Maria Sutherland", "Samia Ghadie", "Casting", "Character debut", "Sutherland family"]],
    ["Which businessman married machinist Linda Sykes?", "Mike Baldwin", ["Fred Elliott", "Duggie Ferguson", "Roy Cropper"], "Easy", "2000", "Weddings", ["Mike Baldwin", "Linda Sykes", "Wedding", "Underworld", "Baldwin family"]],
    ["Which of Mike Baldwin's sons had secretly been involved with Linda Sykes before Mike married her?", "Mark Redman", ["Adam Barlow", "Danny Baldwin", "Peter Barlow"], "Medium", "2000", "Relationships", ["Mark Redman", "Linda Sykes", "Mike Baldwin", "Secret affair", "Father and son"]],
    ["Who unexpectedly acted as Mike Baldwin's best man when Mark went missing?", "Roy Cropper", ["Ken Barlow", "Fred Elliott", "Jack Duckworth"], "Medium", "2000", "Weddings", ["Roy Cropper", "Mike Baldwin", "Mark Redman", "Best man", "Wedding"]],
    ["At which hotel did Mike Baldwin marry Linda Sykes?", "De Lisle House", ["The Belstaff Hotel", "The Midland Hotel", "The Grand Hotel"], "Hard", "2000", "Locations", ["Mike Baldwin", "Linda Sykes", "De Lisle House", "Cheshire", "Wedding venue"]],
    ["Which supermarket was the scene of an armed hostage siege?", "Freshco", ["Bettabuy", "Firman's Freezers", "Costcutter"], "Easy", "2000", "Crime", ["Freshco", "Armed siege", "Hostages", "Supermarket", "Crime"]],
    ["Which young gunman was fatally shot by police during the Freshco siege?", "Dean Sykes", ["Jez Quigley", "Greg Kelly", "Jon Lindsay"], "Medium", "2000", "Crime", ["Dean Sykes", "Emma Taylor", "Freshco", "Armed robbery", "Police shooting"]],
    ["Which police sergeant shot Dean Sykes during the 2000 Freshco siege?", "Emma Taylor", ["Maya Desai", "Colette Graham", "Geena Gregory"], "Medium", "2000", "Crime", ["Emma Taylor", "Dean Sykes", "Police sergeant", "Freshco", "Shooting"]],
    ["What was Dean Sykes's relationship to Mike Baldwin's new wife Linda?", "He was her brother", ["He was her son", "He was her cousin", "He was her nephew"], "Medium", "2000", "Families", ["Dean Sykes", "Linda Sykes", "Mike Baldwin", "Brother and sister", "Freshco siege"]],
    ["Which Weatherfield butcher was taken hostage during the 2000 Freshco siege?", "Fred Elliott", ["Alec Gilroy", "Jack Walker", "Billy Walker"], "Medium", "2000", "Crime", ["Fred Elliott", "Freshco", "Dean Sykes", "Hostage siege", "Butcher"]],
    ["Which couple moved back into Number 9 Coronation Street?", "Jack and Vera Duckworth", ["Ken and Deirdre Barlow", "Curly and Emma Watts", "Martin and Gail Platt"], "Medium", "2000", "Homes", ["Jack Duckworth", "Vera Duckworth", "No. 9", "Homecoming", "Duckworth family"]],
    ["To which seaside town did Gary Mallett move with his twins?", "Blackpool", ["Southport", "Morecambe", "Skegness"], "Medium", "2000", "Departures", ["Gary Mallett", "Billy Mallett", "Becky Mallett", "Blackpool", "Departure"]],
    ["Which milestone anniversary did Coronation Street celebrate in December 2000?", "Its fortieth", ["Its thirtieth", "Its fiftieth", "Its sixtieth"], "Easy", "2000", "TV History", ["Coronation Street 40th anniversary", "ITV", "1960 debut", "Television history", "Milestone"]],
    ["How was Coronation Street's 40th-anniversary episode broadcast on 8 December 2000?", "It was broadcast live", ["It was fully animated", "It was shown without dialogue", "It was filmed in 3D"], "Medium", "2000", "TV History", ["Coronation Street Live", "40th anniversary", "8 December 2000", "Live broadcast", "ITV"]],
    ["Which royal appeared as himself in a news report during Coronation Street's live 2000 anniversary episode?", "Prince Charles", ["Prince Andrew", "Prince Edward", "Prince Philip"], "Medium", "2000", "TV History", ["Prince Charles", "Coronation Street Live", "Audrey Roberts", "News report", "Royal cameo"]],
    ["Which police sergeant married Curly Watts on Christmas Eve 2000?", "Emma Taylor", ["Colette Graham", "Geena Gregory", "Anne Malone"], "Medium", "2000", "Weddings", ["Curly Watts", "Emma Taylor", "Wedding", "Christmas Eve", "Police sergeant"]],
    ["Which Coronation Street resident left Weatherfield on New Year's Eve 2000?", "Natalie Barnes", ["Audrey Roberts", "Rita Sullivan", "Emily Bishop"], "Medium", "2000", "Departures", ["Natalie Barnes", "Rovers Return", "Departure", "New Year's Eve", "Landlady"]],
    ["Which veteran singer appeared as Stan Potter in the show's live fortieth-anniversary episode?", "Noddy Holder", ["Paul McCartney", "Cliff Richard", "Mick Hucknall"], "Hard", "2000", "TV History", ["Noddy Holder", "Stan Potter", "Slade", "Coronation Street Live", "40th anniversary"]],

    // 2001
    ["Which man became engaged to Sally Webster at the start of 2001?", "Danny Hargreaves", ["Chris Collins", "Martin Platt", "Kevin Webster"], "Medium", "2001", "Relationships", ["Danny Hargreaves", "Sally Webster", "Engagement", "Romance", "Webster family"]],
    ["Which daughter of Ken Barlow had secretly raised Mike Baldwin's son Adam?", "Susan Barlow", ["Tracy Barlow", "Denise Osbourne", "Deirdre Rachid"], "Easy", "2001", "Families", ["Susan Barlow", "Mike Baldwin", "Adam Barlow", "Ken Barlow", "Hidden parentage"]],
    ["What was the name of Susan Barlow and Mike Baldwin's son?", "Adam", ["Daniel", "Simon", "Peter"], "Easy", "2001", "Families", ["Susan Barlow", "Mike Baldwin", "Adam Barlow", "Family secret", "Paternity"]],
    ["How did Susan Barlow die?", "A car crash", ["A house fire", "A fall down stairs", "A heart attack"], "Medium", "2001", "Storylines", ["Susan Barlow", "Adam Barlow", "Fatal road accident", "Death", "Barlow family"]],
    ["Which two men fought a custody battle over Adam Barlow?", "Ken Barlow and Mike Baldwin", ["Peter Barlow and Steve McDonald", "Fred Elliott and Ashley Peacock", "Roy Cropper and Duggie Ferguson"], "Medium", "2001", "Families", ["Ken Barlow", "Mike Baldwin", "Adam Barlow", "Custody battle", "Family rivalry"]],
    ["Who won the March 2001 custody hearing involving Adam Barlow?", "Mike Baldwin", ["Ken Barlow", "Peter Barlow", "Steve McDonald"], "Medium", "2001", "Families", ["Mike Baldwin", "Ken Barlow", "Adam Barlow", "Custody hearing", "Court ruling"]],
    ["Which family moved into Number 11 Coronation Street?", "The Grimshaws", ["The Harrises", "The Peacocks", "The Malletts"], "Easy", "2001", "Arrivals", ["Grimshaw family", "Eileen Grimshaw", "Todd Grimshaw", "Jason Grimshaw", "No. 11", "Character debut"]],
    ["What was the name of Todd and Jason Grimshaw's mother?", "Eileen", ["Evelyn", "Edna", "Emily"], "Easy", "2001", "Families", ["Eileen Grimshaw", "Todd Grimshaw", "Jason Grimshaw", "Grimshaw family", "Mother and sons"]],
    ["Which younger Grimshaw brother made his first appearance?", "Todd", ["Jason", "Charlie", "Kirk"], "Easy", "2001", "Arrivals", ["Todd Grimshaw", "Jason Grimshaw", "Eileen Grimshaw", "Character debut", "Grimshaw family"]],
    ["Which actress began playing Eileen Grimshaw?", "Sue Cleaver", ["Sally Lindsay", "Denise Welch", "Sherrie Hewson"], "Medium", "2001", "Actors", ["Sue Cleaver", "Eileen Grimshaw", "Casting", "Character debut", "Grimshaw family"]],
    ["Which girl was hurt when a shelf collapsed while she was in Danny Hargreaves's care?", "Sophie Webster", ["Rosie Webster", "Sarah Platt", "Amy Barlow"], "Medium", "2001", "Families", ["Sophie Webster", "Danny Hargreaves", "Sally Webster", "Shelf accident", "Child injury"]],
    ["Which former Rovers landlady gave birth to a daughter named Laura?", "Natalie Barnes", ["Liz McDonald", "Betty Williams", "Vera Duckworth"], "Medium", "2001", "Families", ["Natalie Barnes", "Laura Barnes", "Birth", "Rovers Return", "Former landlady"]],
    ["What was the first name of Natalie Barnes's baby daughter?", "Laura", ["Lucy", "Lily", "Louise"], "Medium", "2001", "Families", ["Natalie Barnes", "Laura Barnes", "Baby name", "Birth", "Mother and daughter"]],
    ["What family milestone did Roy and Hayley Cropper achieve?", "Approval as foster parents", ["Adoption of a son", "A legal marriage", "Opening a second café"], "Medium", "2001", "Families", ["Roy Cropper", "Hayley Cropper", "Fostering approval", "Foster parents", "Roy and Hayley"]],
    ["Which teenage girl did Roy and Hayley Cropper foster?", "Fiz Brown", ["Toyah Battersby", "Candice Stowe", "Leanne Tilsley"], "Easy", "2001", "Arrivals", ["Roy Cropper", "Hayley Cropper", "Fiz Brown", "Foster child", "Character debut"]],
    ["Which actress began playing Fiz Brown?", "Jennie McAlpine", ["Georgia Taylor", "Nikki Sanderson", "Jane Danson"], "Medium", "2001", "Actors", ["Fiz Brown", "Jennie McAlpine", "Casting", "Character debut", "Foster care"]],
    ["What false allegation did Fiz Brown make about foster father Roy Cropper?", "That he had been violent towards her", ["That he stole her money", "That he had sold the café", "That he had kidnapped her brother"], "Medium", "2001", "Storylines", ["Fiz Brown", "Roy Cropper", "Hayley Cropper", "False accusation", "Fostering"]],
    ["Which boy did Roy and Hayley Cropper later try to protect from his abusive stepfather?", "Wayne Hayes", ["Adam Barlow", "David Platt", "Brad Armstrong"], "Medium", "2001", "Storylines", ["Roy Cropper", "Hayley Cropper", "Wayne Hayes", "Child protection", "Fostering"]],
    ["What was the name of Wayne Hayes's abusive stepfather?", "Alex Swinton", ["Greg Kelly", "Jon Lindsay", "Danny Hargreaves"], "Medium", "2001", "Families", ["Wayne Hayes", "Alex Swinton", "Sheila Hayes", "Abusive stepfather", "Child protection"]],
    ["How much did Roy and Hayley agree to pay Alex Swinton to let Wayne Hayes stay with them?", "£5,000", ["£500", "£2,000", "£10,000"], "Hard", "2001", "Money", ["Roy Cropper", "Hayley Cropper", "Wayne Hayes", "Alex Swinton", "£5,000 payment"]],
    ["Why were Roy and Hayley Cropper arrested in August 2001?", "They took foster child Wayne away without permission", ["They robbed a bank", "They set fire to the café", "They helped a prisoner escape"], "Medium", "2001", "Storylines", ["Roy Cropper", "Hayley Cropper", "Wayne Hayes", "Child abduction allegation", "Police arrest"]],
    ["Which member of the Cropper household was held on remand for refusing a bail condition?", "Hayley Cropper", ["Roy Cropper", "Fiz Brown", "Blanche Hunt"], "Medium", "2001", "Storylines", ["Hayley Cropper", "Wayne Hayes", "Remand", "Bail conditions", "Fostering"]],
    ["Which woman admitted that Wayne Hayes's stepfather was abusing him?", "Sheila Hayes", ["Sally Webster", "Eileen Grimshaw", "Janice Battersby"], "Medium", "2001", "Storylines", ["Sheila Hayes", "Wayne Hayes", "Alex Swinton", "Domestic abuse", "Admission"]],
    ["Which Battersby teenager was sexually assaulted in an April 2001 storyline?", "Toyah Battersby", ["Leanne Battersby", "Candice Stowe", "Tracy Barlow"], "Easy", "2001", "Storylines", ["Toyah Battersby", "Sexual assault", "Ginnel", "Survivor", "Battersby family"]],
    ["Who found Toyah Battersby after she was attacked in the ginnel?", "Jason Grimshaw", ["Todd Grimshaw", "Peter Barlow", "Dennis Stringer"], "Medium", "2001", "Storylines", ["Toyah Battersby", "Jason Grimshaw", "Ginnel", "Assault aftermath", "Discovery"]],
    ["Which man was identified as Toyah Battersby's attacker?", "Phil Simmonds", ["Jez Quigley", "Greg Kelly", "Fraser Henderson"], "Medium", "2001", "Crime", ["Toyah Battersby", "Phil Simmonds", "Sexual assault", "Attacker revealed", "Crime"]],
    ["Which member of the Barlow family was initially suspected of Toyah's attack?", "Peter Barlow", ["Ken Barlow", "Adam Barlow", "Mike Baldwin"], "Medium", "2001", "Crime", ["Toyah Battersby", "Peter Barlow", "Wrongful suspicion", "Sexual assault investigation", "Crime"]],
    ["Which couple were officially divorced in April 2001?", "Gail and Martin Platt", ["Sally and Kevin Webster", "Ken and Deirdre Barlow", "Jack and Vera Duckworth"], "Easy", "2001", "Relationships", ["Gail Platt", "Martin Platt", "Divorce", "Platt family", "Marriage breakdown"]],
    ["Which barmaid joined the Rovers Return and later became a landlady?", "Shelley Unwin", ["Geena Gregory", "Tanya Pooley", "Samantha Failsworth"], "Easy", "2001", "Arrivals", ["Shelley Unwin", "Sally Lindsay", "Rovers Return", "Character debut", "Future landlady"]],
    ["Which actress played Shelley Unwin when she arrived?", "Sally Lindsay", ["Angela Griffin", "Vicky Entwistle", "Denise Welch"], "Medium", "2001", "Actors", ["Shelley Unwin", "Sally Lindsay", "Casting", "Character debut", "Rovers Return"]],
    ["Which future Corner Shop assistant arrived in Weatherfield after fleeing an arranged marriage?", "Sunita Parekh", ["Nita Desai", "Geena Gregory", "Karen Phillips"], "Easy", "2001", "Arrivals", ["Sunita Parekh", "Arranged marriage", "Corner Shop", "Character debut", "Desai family"]],
    ["Which actress played Sunita Parekh in Coronation Street?", "Shobna Gulati", ["Nina Wadia", "Indira Joshi", "Mina Anwar"], "Medium", "2001", "Actors", ["Sunita Parekh", "Shobna Gulati", "Casting", "Corner Shop", "Character debut"]],
    ["Which McDonald married Karen Phillips for a bet?", "Steve McDonald", ["Andy McDonald", "Jim McDonald", "Peter Barlow"], "Easy", "2001", "Weddings", ["Steve McDonald", "Karen Phillips", "Factory bet", "Wedding", "McDonald family"]],
    ["Who played the fiery Karen Phillips when she joined Coronation Street?", "Suranne Jones", ["Sally Lindsay", "Tracy Shaw", "Tina Hobley"], "Medium", "2001", "Actors", ["Karen Phillips", "Suranne Jones", "Casting", "Underworld", "Character debut"]],
    ["What was Steve and Karen McDonald's unusual reason for their May 2001 marriage?", "A wager between factory colleagues", ["An inheritance condition", "A television competition", "A misunderstanding at the registry office"], "Medium", "2001", "Weddings", ["Steve McDonald", "Karen Phillips", "Underworld", "Wager", "Wedding"]],
    ["Which long-serving character learnt she had terminal cervical cancer?", "Alma Halliwell", ["Audrey Roberts", "Rita Sullivan", "Emily Bishop"], "Easy", "2001", "Storylines", ["Alma Halliwell", "Cervical cancer", "Terminal diagnosis", "Cancer storyline", "Final storyline"]],
    ["In which month of 2001 did Alma Halliwell die?", "June", ["March", "September", "December"], "Medium", "2001", "Storylines", ["Alma Halliwell", "Cancer death", "June 2001", "Bereavement", "Halliwell family"]],
    ["Which former husband of Alma Halliwell supported her during her final weeks?", "Mike Baldwin", ["Don Brennan", "Ken Barlow", "Reg Holdsworth"], "Medium", "2001", "Relationships", ["Mike Baldwin", "Alma Halliwell", "Final illness", "Former spouses", "Reconciliation"]],
    ["Which future serial killer first appeared at his cousin Alma's funeral?", "Richard Hillman", ["Jez Quigley", "Greg Kelly", "Jon Lindsay"], "Easy", "2001", "Arrivals", ["Richard Hillman", "Alma Halliwell", "Funeral", "Character debut", "Serial killer"]],
    ["Which actor began playing Richard Hillman?", "Brian Capron", ["John Bowe", "Lee Boardman", "Matthew Marsden"], "Medium", "2001", "Actors", ["Richard Hillman", "Brian Capron", "Casting", "Character debut", "Villain"]],
    ["What did Curly Watts agree to stand for in a Weatherfield election?", "The local council", ["Parliament", "Mayor of Greater Manchester", "Police commissioner"], "Medium", "2001", "Politics", ["Curly Watts", "Weatherfield Council", "Local election", "Councillor", "Politics"]],
    ["Which man lured Sarah Platt to his house after meeting her in an internet chatroom?", "Gary Adams", ["Todd Grimshaw", "Aiden Critchley", "Neil Fearns"], "Medium", "2001", "Crime", ["Sarah-Louise Platt", "Gary Adams", "Internet chatroom", "Online predator", "Abduction"]],
    ["Which man confronted and assaulted Gary Adams after Sarah Platt was rescued?", "Dennis Stringer", ["Martin Platt", "Peter Barlow", "Jason Grimshaw"], "Medium", "2001", "Storylines", ["Dennis Stringer", "Gary Adams", "Sarah-Louise Platt", "Confrontation", "Aftermath of rescue"]],
    ["Which boy was revealed to be Sarah Platt's online friend 'TJ'?", "Todd Grimshaw", ["Jason Grimshaw", "Nick Tilsley", "Aiden Critchley"], "Medium", "2001", "Relationships", ["Sarah-Louise Platt", "Todd Grimshaw", "TJ", "Internet chat", "Secret admirer"]],
    ["Which butcher married Eve Sykes?", "Fred Elliott", ["Ashley Peacock", "Duggie Ferguson", "Mike Baldwin"], "Easy", "2001", "Weddings", ["Fred Elliott", "Eve Sykes", "Wedding", "Linda Baldwin", "Elliott family"]],
    ["What was the name of Linda Baldwin's mother, who married Fred Elliott?", "Eve Sykes", ["Doreen Heavey", "Maud Grimes", "Audrey Roberts"], "Medium", "2001", "Families", ["Eve Sykes", "Linda Sykes", "Fred Elliott", "Mother and daughter", "Wedding"]],
    ["Which doctor did Maxine Peacock become involved with?", "Matt Ramsden", ["Dr Wilson", "Martin Platt", "Roy Cropper"], "Medium", "2001", "Relationships", ["Maxine Peacock", "Matt Ramsden", "One-night stand", "Infidelity", "Pregnancy"]],
    ["Which Rovers landlord found Edna Miller dead in his bed?", "Duggie Ferguson", ["Fred Elliott", "Alec Gilroy", "Jack Duckworth"], "Medium", "2001", "Rovers Return", ["Edna Miller", "Duggie Ferguson", "Rovers Return", "Sudden death", "Landlord"]],
    ["What was the name of Peter Barlow's betting shop?", "Barlow's Bookies", ["Peter's Palace", "Weatherfield Wagers", "The Winning Post"], "Medium", "2001", "Businesses", ["Peter Barlow", "Barlow's Bookies", "Betting shop", "Business opening", "Bookmaker"]],
    ["Which Rovers barmaid was romantically involved with Dev Alahan?", "Geena Gregory", ["Shelley Unwin", "Karen McDonald", "Liz McDonald"], "Medium", "2001", "Relationships", ["Geena Gregory", "Dev Alahan", "Romance", "Rovers Return", "Barmaid"]],
    ["What happened to Jack Duckworth's home-brewed poteen?", "It exploded in his allotment shed", ["It won a drinks competition", "It was stolen by a neighbour", "It was accidentally served at the Rovers"], "Medium", "2001", "Comedy", ["Jack Duckworth", "Poteen", "Allotment shed", "Home brew", "Explosion"]],
    ["Which resident helped Emma Watts deliver her baby on Boxing Day?", "Norris Cole", ["Fred Elliott", "Ken Barlow", "Roy Cropper"], "Medium", "2001", "Families", ["Norris Cole", "Emma Watts", "Curly Watts", "Boxing Day", "Emergency delivery"]],
    ["What name did Curly and Emma Watts choose for their baby boy?", "Ben", ["Billy", "Brad", "Bobby"], "Easy", "2001", "Families", ["Ben Watts", "Emma Watts", "Curly Watts", "Norris Cole", "Birth", "Watts family"]],
    ["Who bought the Rovers Return at auction at the end of 2001?", "Fred Elliott", ["Duggie Ferguson", "Mike Baldwin", "Steve McDonald"], "Medium", "2001", "Rovers Return", ["Fred Elliott", "Rovers Return", "Pub auction", "Duggie Ferguson", "Pub ownership"]],
    ["Which resident spent Christmas night 2001 with Dev Alahan?", "Deirdre Rachid", ["Liz McDonald", "Rita Sullivan", "Sunita Parekh"], "Medium", "2001", "Relationships", ["Deirdre Rachid", "Dev Alahan", "Christmas night", "Affair", "Relationships"]]
];

// Build the exported questions, preserving the original rotating answer positions.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, specialistTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(1101 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '2000s', year, topic, ...specialistTags])],
        dailyEligible: true
    };
});

// Validate actual expanded objects rather than only checking source rows.
if (questions.length !== 100 || questions[0].id !== 'tv_1101' ||
    questions[99].id !== 'tv_1200' ||
    questions.filter(q => q.tags.includes('2000')).length !== 45 ||
    questions.filter(q => q.tags.includes('2001')).length !== 55) {
    throw new Error('Pack 171: invalid question count, ID range or year split');
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
        !q.tags.includes('2000s') || !['2000', '2001'].some(y => q.tags.includes(y)) ||
        q.tags.length < 8 || q.category !== 'Television' || q.dailyEligible !== true) {
        throw new Error('Pack 171: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenWording.add(wording);
}

module.exports = questions;
