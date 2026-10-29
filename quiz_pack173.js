// quiz_pack173.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2004 and 2005
// 100 questions: tv_1301 to tv_1400
// Audit: specialist tags and factual wording, retaining original metadata.
// Two corrected answer spellings/details: tv_1366 and tv_1372.
// quiz_bank.js stays unchanged.

// Entry: question, correct answer, other options, difficulty, year, original topic, specialist tags.
const facts = [
    // 2004
    ["Which of Bethany Platt's grandmothers kidnapped her in January 2004?", "Brenda Fearns", ["Audrey Roberts", "Eileen Grimshaw", "Deirdre Barlow"], "Medium", "2004", "Families", ["Brenda Fearns", "Bethany Platt", "Sarah-Louise Platt", "Kidnapping", "St Saviour's Church"]],
    ["Who persuaded Brenda Fearns not to jump from a church tower with Bethany Platt?", "Emily Bishop", ["Rita Sullivan", "Gail Platt", "Betty Williams"], "Medium", "2004", "Storylines", ["Emily Bishop", "Brenda Fearns", "Bethany Platt", "Church tower", "Rescue", "Suicide prevention"]],
    ["Which young man proposed to Sarah Platt in January 2004?", "Todd Grimshaw", ["Jason Grimshaw", "Nick Tilsley", "Aidan Critchley"], "Easy", "2004", "Relationships", ["Todd Grimshaw", "Sarah Platt", "Engagement", "Grimshaw family", "Platt family"]],
    ["Which youngster got Rita Sullivan into trouble after she clipped him round the ear?", "Chesney Brown", ["David Platt", "Craig Harris", "Joshua Peacock"], "Easy", "2004", "Comedy", ["Rita Sullivan", "Chesney Brown", "The Kabin", "Assault allegation", "Court case"]],
    ["What fine did Rita Sullivan receive for hitting Chesney Brown?", "£500", ["£50", "£100", "£1,000"], "Hard", "2004", "Money", ["Rita Sullivan", "Chesney Brown", "£500 fine", "Magistrates Court", "Compensation"]],
    ["Why was Peter Barlow's marriage to Shelley Unwin annulled?", "He was already married to Lucy", ["He had used a false name", "They were first cousins", "Their wedding licence was invalid"], "Easy", "2004", "Weddings", ["Peter Barlow", "Shelley Unwin", "Lucy Richards", "Bigamy", "Annulment"]],
    ["What name did Tracy Barlow give the daughter she gave birth to in February 2004?", "Amy", ["Abbie", "Alice", "Annie"], "Easy", "2004", "Families", ["Tracy Barlow", "Amy Barlow", "Steve McDonald", "Baby name", "Birth"]],
    ["What name did Roy and Hayley Cropper initially choose for Tracy Barlow's baby?", "Patience", ["Prudence", "Grace", "Hope"], "Medium", "2004", "Families", ["Roy Cropper", "Hayley Cropper", "Tracy Barlow", "Amy Barlow", "Patience", "Adoption arrangement"]],
    ["Who was revealed as the biological father of Tracy Barlow's baby at Steve and Karen's wedding?", "Steve McDonald", ["Roy Cropper", "Peter Barlow", "Dev Alahan"], "Easy", "2004", "Families", ["Steve McDonald", "Tracy Barlow", "Karen McDonald", "Amy Barlow", "Paternity revealed"]],
    ["Who secretly cancelled arrangements for Steve and Karen McDonald's wedding in 2004?", "Tracy Barlow", ["Liz McDonald", "Bev Unwin", "Shelley Unwin"], "Medium", "2004", "Weddings", ["Tracy Barlow", "Steve McDonald", "Karen McDonald", "Wedding sabotage", "Cancelled booking"]],
    ["Which comedian played Shelley's disastrous date Eric Gartside in 2004?", "Peter Kay", ["Johnny Vegas", "Lee Mack", "John Bishop"], "Medium", "2004", "Actors", ["Peter Kay", "Eric Gartside", "Shelley Unwin", "Guest appearance", "Blind date"]],
    ["Whom did Karen McDonald confront during baby Amy's christening?", "Tracy Barlow", ["Shelley Unwin", "Geena Gregory", "Violet Wilson"], "Medium", "2004", "Rovers Return", ["Karen McDonald", "Tracy Barlow", "Amy Barlow", "Christening", "Confrontation"]],
    ["Which hospital porter began a relationship with Todd Grimshaw?", "Karl Foster", ["Martin Platt", "Nick Tilsley", "Jason Grimshaw"], "Easy", "2004", "Relationships", ["Todd Grimshaw", "Karl Foster", "Hospital porter", "Same-sex relationship", "Coming out"]],
    ["Which actor played Todd Grimshaw's boyfriend Karl Foster?", "Chris Finch", ["Rupert Hill", "Bruno Langley", "Adam Rickitt"], "Medium", "2004", "Actors", ["Chris Finch", "Karl Foster", "Todd Grimshaw", "Casting", "Same-sex relationship"]],
    ["To which family member did Todd Grimshaw first confide that he was gay?", "His mother Eileen", ["His brother Jason", "His fiancée Sarah", "His grandmother"], "Medium", "2004", "Families", ["Todd Grimshaw", "Eileen Grimshaw", "Coming out", "Mother and son", "Grimshaw family"]],
    ["What name was given to Sarah Platt and Todd Grimshaw's baby son?", "Billy", ["Ben", "Bobby", "Brad"], "Easy", "2004", "Families", ["Sarah Platt", "Todd Grimshaw", "Billy Platt", "Premature birth", "Platt family"]],
    ["What happened to Sarah and Todd's son Billy shortly after his premature birth?", "He died", ["He was adopted", "He was taken overseas", "He underwent a heart transplant"], "Medium", "2004", "Storylines", ["Sarah Platt", "Todd Grimshaw", "Billy Platt", "Premature death", "Bereavement"]],
    ["Which two mothers fought in the street after Todd Grimshaw admitted his affair?", "Gail Platt and Eileen Grimshaw", ["Sally Webster and Angela Harris", "Audrey Roberts and Blanche Hunt", "Janice Battersby and Cilla Brown"], "Medium", "2004", "Families", ["Gail Platt", "Eileen Grimshaw", "Todd Grimshaw", "Sarah Platt", "Street fight", "Family feud"]],
    ["With whose mother did Charlie Stubbs sleep while dating Shelley Unwin?", "Bev Unwin", ["Eileen Grimshaw", "Liz McDonald", "Deirdre Barlow"], "Easy", "2004", "Relationships", ["Charlie Stubbs", "Bev Unwin", "Shelley Unwin", "Infidelity", "Family betrayal"]],
    ["Which character was briefly engaged to Maria Sutherland before leaving Weatherfield in 2004?", "Nick Tilsley", ["Jamie Baldwin", "Tyrone Dobbs", "Ciaran McCarthy"], "Medium", "2004", "Relationships", ["Nick Tilsley", "Maria Sutherland", "Engagement", "Break-up", "Platt family"]],
    ["To which city did Nick Tilsley move when he left in July 2004?", "Nottingham", ["Leeds", "Liverpool", "Birmingham"], "Medium", "2004", "Departures", ["Nick Tilsley", "Nottingham", "Departure", "New job", "Platt family"]],
    ["Which new Baldwin began helping Mike run Underworld in May 2004?", "Danny Baldwin", ["Warren Baldwin", "Jamie Baldwin", "Adam Barlow"], "Easy", "2004", "Arrivals", ["Danny Baldwin", "Mike Baldwin", "Underworld", "Factory", "Character debut"]],
    ["Who was Danny Baldwin's wife when the family arrived in Weatherfield?", "Frankie Baldwin", ["Carol Baldwin", "Linda Baldwin", "Susan Baldwin"], "Easy", "2004", "Families", ["Danny Baldwin", "Frankie Baldwin", "Baldwin family", "Marriage", "New arrivals"]],
    ["Which Baldwin was a professional footballer when he arrived?", "Warren Baldwin", ["Jamie Baldwin", "Danny Baldwin", "Adam Barlow"], "Medium", "2004", "Occupations", ["Warren Baldwin", "Footballer", "Baldwin family", "Professional sport"]],
    ["Which television presenter and comedian began playing Danny Baldwin?", "Bradley Walsh", ["Shane Richie", "Paddy McGuinness", "Vernon Kay"], "Easy", "2004", "Actors", ["Bradley Walsh", "Danny Baldwin", "Casting", "Television presenter", "Baldwin family"]],
    ["Which Battersby daughter returned to Weatherfield after living away for several years?", "Leanne Battersby", ["Toyah Battersby", "Janice Battersby", "Tracy Barlow"], "Easy", "2004", "Returns", ["Leanne Battersby", "Battersby family", "Return to Weatherfield", "Homecoming"]],
    ["Which flamboyant new lodger moved into Eileen Grimshaw's home?", "Sean Tully", ["Ciaran McCarthy", "Joe Carter", "Harry Flagg"], "Easy", "2004", "Arrivals", ["Sean Tully", "Eileen Grimshaw", "No. 11", "Lodger", "Character debut"]],
    ["Which actor made Sean Tully a Coronation Street regular in 2004?", "Antony Cotton", ["Keith Duffy", "Charlie Condou", "Craig Charles"], "Medium", "2004", "Actors", ["Antony Cotton", "Sean Tully", "Casting", "Actor", "Character debut"]],
    ["Which new Underworld machinist arrived in September 2004?", "Kelly Crabtree", ["Joanne Jackson", "Jessie Jackson", "Sonia Marshall"], "Medium", "2004", "Arrivals", ["Kelly Crabtree", "Underworld", "Factory machinist", "Character debut"]],
    ["Which newcomer played by Jenny Platt became a Rovers barmaid?", "Violet Wilson", ["Shelley Unwin", "Geena Gregory", "Sunita Parekh"], "Medium", "2004", "Arrivals", ["Violet Wilson", "Jenny Platt", "Rovers Return", "Barmaid", "Character debut"]],
    ["Which legendary comedian appeared as pensioner Ernie Crab in July 2004?", "Norman Wisdom", ["Eric Sykes", "Ken Dodd", "Freddie Starr"], "Medium", "2004", "Actors", ["Norman Wisdom", "Ernie Crab", "Guest star", "Jack Duckworth", "Comedy legend"]],
    ["What did Jack Duckworth sell to Ernie Crab when Norman Wisdom guest-starred?", "An exercise bike", ["A lawnmower", "A racing pigeon", "A garden gnome"], "Medium", "2004", "Comedy", ["Jack Duckworth", "Ernie Crab", "Norman Wisdom", "Exercise bike", "Comedy"]],
    ["A proposed memorial to which former Weatherfield councillor sparked a protest?", "Alf Roberts", ["Percy Sugden", "Reg Holdsworth", "Len Fairclough"], "Medium", "2004", "Community", ["Alf Roberts", "Weatherfield Council", "Memorial proposal", "Residents' protest"]],
    ["What kind of memorial to Alf Roberts upset some of the Street's older residents?", "A fountain", ["A clock tower", "A bronze statue", "A stained-glass window"], "Medium", "2004", "Community", ["Alf Roberts", "Memorial fountain", "Weatherfield Council", "Community protest"]],
    ["Which butcher was tricked into believing he was courting a Thai woman named Orchid?", "Fred Elliott", ["Ashley Peacock", "Mike Baldwin", "Duggie Ferguson"], "Easy", "2004", "Comedy", ["Fred Elliott", "Orchid Pattaya", "Stacy Hilton", "Internet romance", "Romance scam"]],
    ["What name did the fraudster pretending to be Fred Elliott's Thai bride use?", "Orchid Pattaya", ["Lotus Bangkok", "Jasmine Niran", "Lily Somchai"], "Medium", "2004", "Comedy", ["Orchid Pattaya", "Stacy Hilton", "Dennis Stokes", "Fred Elliott", "Romance scam"]],
    ["Which solicitor plotted revenge after Dev Alahan chose Sunita over her?", "Maya Sharma", ["Rebecca Hopkins", "Nita Desai", "Colette Graham"], "Easy", "2004", "Crime", ["Maya Sharma", "Dev Alahan", "Sunita Parekh", "Revenge plot", "Former partners"]],
    ["What false charge did Maya Sharma arrange to have brought against Sunita?", "Bigamy", ["Arson", "Shoplifting", "Blackmail"], "Medium", "2004", "Crime", ["Maya Sharma", "Sunita Parekh", "Dev Alahan", "False bigamy charges", "Identity fraud"]],
    ["Which shopkeeper married Sunita Parekh in October 2004?", "Dev Alahan", ["Vikram Desai", "Steve McDonald", "Ciaran McCarthy"], "Easy", "2004", "Weddings", ["Dev Alahan", "Sunita Parekh", "Wedding", "Alahan family", "Corner Shop"]],
    ["What did Maya Sharma set fire to as part of her revenge against Dev?", "His shops", ["Underworld factory", "The Rovers Return", "Weatherfield's town hall"], "Easy", "2004", "Crime", ["Maya Sharma", "Dev Alahan", "Arson", "Shop fires", "Revenge plot"]],
    ["Which couple did Maya Sharma imprison and try to kill in a fire?", "Dev and Sunita Alahan", ["Roy and Hayley Cropper", "Steve and Karen McDonald", "Ashley and Claire Peacock"], "Medium", "2004", "Crime", ["Maya Sharma", "Dev Alahan", "Sunita Alahan", "Kidnapping", "Attempted murder", "Arson"]],
    ["Who accompanied Norris Cole to a dinner party that turned out to be a swingers' gathering?", "Rita Sullivan", ["Emily Bishop", "Blanche Hunt", "Betty Williams"], "Medium", "2004", "Comedy", ["Norris Cole", "Rita Sullivan", "Rula Romanoff", "Swingers party", "Mistaken invitation"]],
    ["What went wrong when Les Battersby and Cilla Brown enjoyed a jacuzzi bath in 2004?", "The floor collapsed beneath it", ["The plumbing flooded the Rovers", "The hot water stopped working", "The bath crashed through a window"], "Medium", "2004", "Comedy", ["Les Battersby", "Cilla Brown", "Jacuzzi", "Collapsed floor", "Comedy"]],
    ["What name did Jack Duckworth use when disguised as a woman for a bowls match?", "Ida Fagg", ["Dora Flagg", "Ena Banks", "Mavis Long"], "Hard", "2004", "Comedy", ["Jack Duckworth", "Ida Fagg", "Bowls match", "Women's bowls", "Disguise"]],
    ["Which couple married on Christmas Day 2004?", "Ashley Peacock and Claire Casey", ["Steve McDonald and Karen Phillips", "Dev Alahan and Sunita Parekh", "Kevin Webster and Sally Webster"], "Easy", "2004", "Weddings", ["Ashley Peacock", "Claire Casey", "Christmas Day wedding", "Peacock family"]],
    ["Which wife of Steve McDonald left Weatherfield on Boxing Day 2004?", "Karen McDonald", ["Tracy Barlow", "Vicky McDonald", "Becky McDonald"], "Easy", "2004", "Departures", ["Karen McDonald", "Steve McDonald", "Boxing Day", "Divorce", "Departure"]],
    ["Which game show did the Barlows appear on with Steve McDonald in November 2004?", "Top of the Tree", ["Family Fortunes", "The Weakest Link", "Who Wants to Be a Millionaire?"], "Medium", "2004", "TV History", ["Top of the Tree", "Barlow family", "Steve McDonald", "Fictional game show", "Television appearance"]],
    ["Which son of Mike Baldwin returned to the Street in December 2004, now played by Sam Robertson?", "Adam Barlow", ["Danny Baldwin", "Mark Redman", "Jamie Baldwin"], "Medium", "2004", "Returns", ["Adam Barlow", "Mike Baldwin", "Sam Robertson", "Recasting", "Character return"]],

    // 2005
    ["With which car dealer did Sally Webster have an affair?", "Ian Davenport", ["Danny Baldwin", "Joe Carter", "Phil Nail"], "Easy", "2005", "Relationships", ["Sally Webster", "Ian Davenport", "Car dealer", "Affair", "Kevin Webster"]],
    ["Which teenage couple embraced a gothic fashion and music style?", "Rosie Webster and Craig Harris", ["Sophie Webster and Chesney Brown", "Sarah Platt and Todd Grimshaw", "Maria Sutherland and Tyrone Dobbs"], "Medium", "2005", "Relationships", ["Rosie Webster", "Craig Harris", "Goth fashion", "Teenage romance", "Music"]],
    ["Who was the father of Katy Harris's unborn baby?", "Martin Platt", ["Craig Harris", "David Platt", "Tommy Harris"], "Easy", "2005", "Families", ["Katy Harris", "Martin Platt", "Pregnancy", "Harris family", "Age-gap relationship"]],
    ["Which member of the Harris family was killed by Katy Harris?", "Her father Tommy", ["Her brother Craig", "Her mother Angela", "Her grandfather Keith"], "Easy", "2005", "Crime", ["Katy Harris", "Tommy Harris", "Patricide", "Family tragedy", "Garage murder"]],
    ["What tool did Katy Harris use to kill her father Tommy?", "A wrench", ["A spade", "A crowbar", "A hammer"], "Medium", "2005", "Crime", ["Katy Harris", "Tommy Harris", "Wrench", "Murder weapon", "Garage"]],
    ["Who tried to cover up Tommy Harris's murder to protect Katy?", "Angela Harris", ["Rosie Webster", "Gail Platt", "Claire Peacock"], "Easy", "2005", "Crime", ["Angela Harris", "Katy Harris", "Tommy Harris", "Cover-up", "Murder investigation"]],
    ["Where was Tommy Harris's body discovered?", "Websters' Auto Centre", ["The Rovers Return", "Underworld", "The Kabin"], "Medium", "2005", "Locations", ["Tommy Harris", "Websters' Auto Centre", "Kevin Webster", "Garage", "Murder scene"]],
    ["Who was arrested on suspicion of killing Tommy Harris before the truth emerged?", "Martin Platt", ["Steve McDonald", "Kevin Webster", "Danny Baldwin"], "Medium", "2005", "Crime", ["Martin Platt", "Tommy Harris", "Katy Harris", "Wrongful arrest", "Murder investigation"]],
    ["Where did Angela Harris conceal the murder weapon during Tommy's funeral arrangements?", "Inside his coffin", ["In the canal", "Beneath the garage floor", "In a wall cavity"], "Medium", "2005", "Crime", ["Angela Harris", "Tommy Harris", "Wrench", "Coffin", "Concealed evidence"]],
    ["How did Katy Harris deliberately endanger her health after killing her father?", "She stopped taking her insulin", ["She refused a blood transfusion", "She took an overdose of sleeping pills", "She jumped into the canal"], "Medium", "2005", "Storylines", ["Katy Harris", "Diabetes", "Insulin", "Guilt", "Suicide", "Tommy Harris"]],
    ["Who was Craig and Katy Harris's grandfather?", "Keith Appleyard", ["Jack Duckworth", "Fred Elliott", "Archie Shuttleworth"], "Medium", "2005", "Families", ["Keith Appleyard", "Katy Harris", "Craig Harris", "Grandfather", "Harris family"]],
    ["Which former husband of Deirdre returned after twenty-seven years in March 2005?", "Ray Langton", ["Samir Rachid", "Mike Baldwin", "Ken Barlow"], "Easy", "2005", "Returns", ["Ray Langton", "Deirdre Barlow", "Tracy Barlow", "Character return", "Former husband"]],
    ["Which country had Ray Langton been living in before his 2005 return?", "The Netherlands", ["Spain", "France", "Canada"], "Medium", "2005", "Returns", ["Ray Langton", "Netherlands", "Deirdre Barlow", "Return to Weatherfield"]],
    ["Which long-standing couple married again in April 2005?", "Ken and Deirdre Barlow", ["Kevin and Sally Webster", "Jack and Vera Duckworth", "Steve and Karen McDonald"], "Easy", "2005", "Weddings", ["Ken Barlow", "Deirdre Barlow", "Second wedding", "Reconciliation", "Barlow family"]],
    ["What happened to Ray Langton during Ken and Deirdre's wedding reception?", "He died", ["He proposed to Tracy", "He was arrested", "He announced he was moving abroad"], "Easy", "2005", "Storylines", ["Ray Langton", "Deirdre Barlow", "Ken Barlow", "Wedding reception", "Death"]],
    ["Which illness was Ray Langton suffering from when he returned to Weatherfield?", "Stomach cancer", ["Lung cancer", "Motor neurone disease", "Kidney failure"], "Medium", "2005", "Storylines", ["Ray Langton", "Stomach cancer", "Terminal illness", "Deirdre Barlow", "Character death"]],
    ["Which celebrated film and stage actor guest-starred as the supposed writer Mel Hutchwright?", "Ian McKellen", ["Patrick Stewart", "Michael Gambon", "Derek Jacobi"], "Easy", "2005", "Actors", ["Ian McKellen", "Mel Hutchwright", "Lionel Hipkiss", "Guest actor", "Book club"]],
    ["What was the real name of the conman who pretended to be writer Mel Hutchwright?", "Lionel Hipkiss", ["Leonard Barlow", "Leslie Higgins", "Laurence Hill"], "Hard", "2005", "Comedy", ["Mel Hutchwright", "Lionel Hipkiss", "Ian McKellen", "Fake identity", "Conman"]],
    ["Which group of Weatherfield residents did Mel Hutchwright swindle in 2005?", "The book club", ["The bowling team", "The church choir", "The football supporters' club"], "Medium", "2005", "Comedy", ["Mel Hutchwright", "Norris Cole", "Book club", "Literary scam", "Fraud"]],
    ["What was the title of the fictitious Mel Hutchwright novel used in his book club scam?", "The Canary's Last Song", ["The Sparrow's Last Flight", "The Raven's Return", "The Nightingale's Dream"], "Hard", "2005", "Books", ["Mel Hutchwright", "The Canary's Last Song", "Novel", "Book club", "Fraud"]],
    ["Which takeaway employed Cilla Brown in May 2005?", "Wong's Chippy", ["Roy's Rolls", "The Corner Shop", "The Flying Horse"], "Medium", "2005", "Occupations", ["Cilla Brown", "Wong's Chippy", "Fish and chips", "Employment", "Rosamund Street"]],
    ["Who opened a bakery called Comptons on Victoria Street?", "Diggory Compton", ["Fred Elliott", "Roy Cropper", "Ashley Peacock"], "Medium", "2005", "Businesses", ["Diggory Compton", "Comptons bakery", "Victoria Street", "Business opening"]],
    ["What was the name of Diggory Compton's daughter, introduced in 2005?", "Molly Compton", ["Candice Compton", "Maria Compton", "Fiz Compton"], "Medium", "2005", "Arrivals", ["Molly Compton", "Diggory Compton", "Bakery", "Compton family", "Character debut"]],
    ["What had been eating money in Diggory Compton's till when Sarah Platt was wrongly blamed?", "Rats", ["A broken cash register", "An employee's theft", "A bookkeeping error"], "Medium", "2005", "Comedy", ["Diggory Compton", "Sarah Platt", "Comptons bakery", "Rodents", "Missing money", "False accusation"]],
    ["Which dog did Claire Peacock accidentally run over on her first day as a bus driver?", "Schmeichel", ["Eccles", "Monica", "Cerberus"], "Easy", "2005", "Comedy", ["Claire Peacock", "Schmeichel", "Bus driver", "Dog accident", "Street Cars"]],
    ["Which actor joined Coronation Street as cab driver Lloyd Mullaney?", "Craig Charles", ["Chris Barrie", "Robert Llewellyn", "Danny John-Jules"], "Easy", "2005", "Actors", ["Craig Charles", "Lloyd Mullaney", "Street Cars", "Casting", "Red Dwarf"]],
    ["At which taxi company did newcomer Lloyd Mullaney work?", "Street Cars", ["Weatherfield Cabs", "Metro Minicabs", "City Cars"], "Easy", "2005", "Businesses", ["Lloyd Mullaney", "Street Cars", "Taxi driver", "Steve McDonald", "Character debut"]],
    ["Which resident became a Rovers barman in August 2005 after working at Underworld?", "Sean Tully", ["Jamie Baldwin", "Kirk Sutherland", "Ciaran McCarthy"], "Easy", "2005", "Rovers Return", ["Sean Tully", "Underworld", "Rovers Return", "Barman", "Career change"]],
    ["Which builder bullied Roy Cropper at the café until Charlie Stubbs sacked him?", "Vince", ["Gary", "Darren", "Keith"], "Medium", "2005", "Storylines", ["Vince", "Charlie Stubbs", "Roy Cropper", "Café", "Workplace bullying"]],
    ["Who was responsible for the controlling and abusive treatment of Shelley Unwin?", "Charlie Stubbs", ["Peter Barlow", "Ciaran McCarthy", "Danny Baldwin"], "Easy", "2005", "Storylines", ["Charlie Stubbs", "Shelley Unwin", "Coercive control", "Domestic abuse", "Rovers Return"]],
    ["What did Shelley Unwin do at the altar rather than marry Charlie Stubbs?", "Refused to say her vows", ["Fainted", "Ran away with Ciaran", "Announced she was pregnant"], "Easy", "2005", "Weddings", ["Shelley Unwin", "Charlie Stubbs", "Wedding rejection", "Abuse storyline", "Standing up for herself"]],
    ["Which former Rovers employee left the Street in 2005 after becoming disillusioned with Charlie's treatment of Shelley?", "Ciaran McCarthy", ["Harry Flagg", "Sean Tully", "Fred Elliott"], "Medium", "2005", "Departures", ["Ciaran McCarthy", "Charlie Stubbs", "Shelley Unwin", "Departure", "Rovers Return"]],
    ["Which rock band played at Les Battersby and Cilla Brown's wedding celebrations?", "Status Quo", ["Slade", "The Sweet", "Mud"], "Easy", "2005", "Weddings", ["Status Quo", "Les Battersby", "Cilla Brown", "Wedding reception", "Rock band"]],
    ["Which Status Quo singer recognised Les Battersby as a troublesome fan from years earlier?", "Francis Rossi", ["Rick Parfitt", "Alan Lancaster", "John Coghlan"], "Medium", "2005", "Popular Culture", ["Francis Rossi", "Status Quo", "Les Battersby", "Troublesome fan", "Rock music"]],
    ["Who did Les Battersby marry on Halloween 2005?", "Cilla Brown", ["Janice Battersby", "Yana Lumb", "Bev Unwin"], "Easy", "2005", "Weddings", ["Les Battersby", "Cilla Brown", "Halloween wedding", "Battersby family", "Status Quo"]],
    ["Who went on Cilla's honeymoon with her after she fell out with Les over the wedding presents?", "Yana Lumb", ["Janice Battersby", "Fiz Brown", "Bev Unwin"], "Medium", "2005", "Comedy", ["Yana Lumb", "Cilla Brown", "Les Battersby", "Honeymoon", "Wedding gifts"]],
    ["Which young hairdresser left Weatherfield to join Status Quo on tour in 2005?", "Candice Stowe", ["Maria Sutherland", "Sarah Platt", "Violet Wilson"], "Medium", "2005", "Departures", ["Candice Stowe", "Status Quo", "Rock tour", "Hairdresser", "Departure"]],
    ["Who was revealed to be Danny Baldwin's biological father?", "Mike Baldwin", ["Harry Baldwin", "Fred Elliott", "Ken Barlow"], "Easy", "2005", "Families", ["Danny Baldwin", "Mike Baldwin", "Viv Baldwin", "Paternity revelation", "Baldwin family"]],
    ["Which woman was Jamie Baldwin dating when she began an affair with his father Danny?", "Leanne Battersby", ["Maria Sutherland", "Kelly Crabtree", "Violet Wilson"], "Easy", "2005", "Relationships", ["Leanne Battersby", "Jamie Baldwin", "Danny Baldwin", "Secret affair", "Baldwin family"]],
    ["Which woman discovered her husband Danny was having an affair with Leanne?", "Frankie Baldwin", ["Carol Baldwin", "Viv Baldwin", "Linda Baldwin"], "Medium", "2005", "Relationships", ["Frankie Baldwin", "Danny Baldwin", "Leanne Battersby", "Affair discovered", "Marriage breakdown"]],
    ["Which Baldwin family member told Mike the truth about Danny's parentage?", "Viv Baldwin", ["Frankie Baldwin", "Carol Baldwin", "Susan Barlow"], "Medium", "2005", "Families", ["Viv Baldwin", "Mike Baldwin", "Danny Baldwin", "Family secret", "Paternity revelation"]],
    ["Which daughter was at the centre of a bitter access dispute between Steve McDonald and Tracy Barlow?", "Amy", ["Bethany", "Sophie", "Rosie"], "Easy", "2005", "Families", ["Amy Barlow", "Steve McDonald", "Tracy Barlow", "Custody dispute", "Access rights"]],
    ["What was the name of Betty Williams's cat who had to be put to sleep?", "Marmaduke", ["Morris", "Milo", "Monty"], "Medium", "2005", "Animals", ["Betty Williams", "Marmaduke", "Sean Tully", "Cat", "Veterinary care", "Pet bereavement"]],
    ["Which young girl was revealed as another of Dev Alahan's children in 2005?", "Amber Kalirai", ["Amy Barlow", "Asha Alahan", "Sophie Webster"], "Medium", "2005", "Families", ["Amber Kalirai", "Dev Alahan", "Secret daughter", "Paternity", "Alahan family"]],
    ["Which reflexologist became romantically involved with Gail Platt?", "Phil Nail", ["Ian Davenport", "Matt Ramsden", "Joe Carter"], "Medium", "2005", "Relationships", ["Phil Nail", "Gail Platt", "Reflexologist", "Romance", "Platt family"]],
    ["To which city did Martin Platt move when he left Weatherfield in November 2005?", "Liverpool", ["Leeds", "Nottingham", "Newcastle"], "Medium", "2005", "Departures", ["Martin Platt", "Liverpool", "Departure", "Platt family", "New job"]],
    ["Which Rovers barmaid dumped Jason Grimshaw after learning he had slept with Sarah Platt?", "Violet Wilson", ["Shelley Unwin", "Bev Unwin", "Geena Gregory"], "Medium", "2005", "Relationships", ["Violet Wilson", "Jason Grimshaw", "Sarah Platt", "Infidelity", "Breakup"]],
    ["Who was the young mechanic employed at Websters' Auto Centre who accidentally injured Ashley Peacock?", "Nathan Cooper", ["Tyrone Dobbs", "Kirk Sutherland", "Jamie Baldwin"], "Medium", "2005", "Occupations", ["Nathan Cooper", "Ashley Peacock", "Websters' Auto Centre", "Mechanic", "Workplace accident"]],
    ["Which businesswoman offered Norris Cole a junior partnership in her shop?", "Rita Sullivan", ["Audrey Roberts", "Emily Bishop", "Sally Webster"], "Medium", "2005", "Businesses", ["Rita Sullivan", "Norris Cole", "The Kabin", "Junior partnership", "Newsagents"]],
    ["Which factory worker was reinstated after the Underworld staff went on strike in October 2005?", "Janice Battersby", ["Fiz Brown", "Hayley Cropper", "Kelly Crabtree"], "Medium", "2005", "Businesses", ["Janice Battersby", "Underworld", "Industrial action", "Factory strike", "Reinstatement"]],
    ["Which man approached Emily Bishop years after killing her husband Ernest?", "Ed Jackson", ["Phil Nail", "Archie Shuttleworth", "Jimmy Clayton"], "Medium", "2005", "Returns", ["Ed Jackson", "Ernest Bishop", "Emily Bishop", "1978 murder", "Guilt", "Return"]],
    ["What illness was Mike Baldwin showing signs of when he forgot what he'd done with factory cheques in 2005?", "Alzheimer's disease", ["Parkinson's disease", "Multiple sclerosis", "Epilepsy"], "Medium", "2005", "Storylines", ["Mike Baldwin", "Alzheimer's disease", "Underworld", "Memory problems", "Dementia storyline"]]
];

// Build the exported question objects and preserve the original answer rotation.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, specialistTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(1301 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '2000s', year, topic, ...specialistTags])],
        dailyEligible: true
    };
});

// Validate the expanded objects, correct year split and specialist tags.
if (questions.length !== 100 || questions[0].id !== 'tv_1301' ||
    questions[99].id !== 'tv_1400' ||
    questions.filter(q => q.tags.includes('2004')).length !== 48 ||
    questions.filter(q => q.tags.includes('2005')).length !== 52) {
    throw new Error('Pack 173: incorrect count, IDs or year split');
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
        !q.tags.includes('2000s') || !['2004','2005'].some(y => q.tags.includes(y)) ||
        q.tags.length < 8) {
        throw new Error('Pack 173: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
