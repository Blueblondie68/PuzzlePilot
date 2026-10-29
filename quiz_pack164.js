// quiz_pack164.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 1985 to 1987
// 100 questions: tv_0401 to tv_0500
// Wording and comprehensive tagging audit.
// IDs, difficulty and daily eligibility preserved; one factual answer corrected (tv_0480).
// quiz_bank.js is already connected and must stay unchanged.

// Each entry: question, correct answer, three alternatives, difficulty, year, topic, specialist tags.
const facts = [

    // 1985 - NEW LANDLADY AND CHANGING HOUSEHOLDS
    ["Which Rovers barmaid took over as landlady in 1985?", "Bet Lynch", ["Betty Turpin", "Gloria Todd", "Rita Fairclough"], "Easy", "1985", "Rovers Return", ["Bet Lynch", "Rovers Return", "Pub management", "Landladies"]],
    ["Which relief manager arrived at the Rovers before Bet Lynch took over as landlady?", "Frank Harvey", ["Frank Mills", "Fred Gee", "Alec Gilroy"], "Hard", "1985", "Rovers Return", ["Frank Harvey", "Bet Lynch", "Rovers Return", "Relief manager"]],
    ["Who did Bill Webster marry in 1985?", "Elaine Prior", ["Renee Bradshaw", "Sally Seddon", "Connie Clayton"], "Medium", "1985", "Weddings", ["Bill Webster", "Elaine Prior", "Webster family", "Weddings"]],
    ["To which English city did Bill Webster move with Elaine and daughter Debbie?", "Southampton", ["Bristol", "Leeds", "Sheffield"], "Medium", "1985", "Departures", ["Bill Webster", "Elaine Webster", "Debbie Webster", "Southampton", "Departures"]],
    ["Which member of the Webster family stayed in Weatherfield when Bill and Debbie moved away?", "Kevin Webster", ["Debbie Webster", "Bill Webster", "Elaine Webster"], "Easy", "1985", "Families", ["Kevin Webster", "Bill Webster", "Debbie Webster", "Webster family"]],
    ["Which future member of the Platt family first appeared working at Jim's Café?", "Martin Platt", ["David Platt", "Nick Tilsley", "Richard Hillman"], "Easy", "1985", "Characters", ["Martin Platt", "Jim's Café", "Character debuts", "Platt family"]],
    ["Which actor first played Martin Platt in Coronation Street?", "Sean Wilson", ["Christopher Quinten", "Michael Le Vell", "Kevin Kennedy"], "Medium", "1985", "Actors", ["Martin Platt", "Sean Wilson", "Casting", "Platt family"]],
    ["Which family moved into No. 11 Coronation Street in 1985?", "The Claytons", ["The McDonalds", "The Websters", "The Seddons"], "Medium", "1985", "Families", ["Clayton family", "No. 11", "New residents", "Harry Clayton"]],
    ["What was the first name of the Clayton family's father, who lived at No. 11?", "Harry", ["Eddie", "Alf", "George"], "Hard", "1985", "Families", ["Harry Clayton", "Clayton family", "No. 11"]],
    ["Which Clayton daughter became pregnant by Terry Duckworth?", "Andrea", ["Sue", "Debbie", "Sharon"], "Medium", "1985", "Storylines", ["Andrea Clayton", "Terry Duckworth", "Clayton family", "Pregnancy"]],
    ["Which pensioner tried to win Phyllis Pearce's affection?", "Sam Tindall", ["Percy Sugden", "Fred Gee", "Albert Tatlock"], "Medium", "1985", "Characters", ["Sam Tindall", "Phyllis Pearce", "Courtship"]],
    ["Where did Gail Tilsley stay after leaving Brian in 1985?", "Audrey's flat in Cadishead", ["The Rovers Return", "Rita's flat above The Kabin", "Hilda's house"], "Medium", "1985", "Locations", ["Gail Tilsley", "Brian Tilsley", "Audrey Roberts", "Cadishead", "Marital separation"]],
    ["Which pub faced the Rovers Return in a Brainiest Pub quiz contest?", "The White Swan", ["The Flying Horse", "The Woolpack", "The Queen Victoria"], "Hard", "1985", "Storylines", ["Rovers Return", "White Swan", "Brainiest Pub", "Quiz competition"]],
    ["Which resident lost the Brainiest Pub quiz competition for the Rovers?", "Percy Sugden", ["Ken Barlow", "Albert Tatlock", "Alf Roberts"], "Medium", "1985", "Storylines", ["Percy Sugden", "Rovers Return", "White Swan", "Brainiest Pub", "Quiz competition"]],
    ["Who took Kevin Webster in as a lodger at No. 13?", "Hilda Ogden", ["Emily Bishop", "Betty Turpin", "Rita Fairclough"], "Easy", "1985", "Locations", ["Kevin Webster", "Hilda Ogden", "No. 13", "Lodgers"]],
    ["Which Baldwin's Casuals van driver became romantically involved with Ivy Tilsley?", "George Wardle", ["Don Brennan", "Bill Webster", "Ian Latimer"], "Medium", "1985", "Relationships", ["Ivy Tilsley", "George Wardle", "Baldwin's Casuals", "Factory", "Romance"]],
    ["Why did Ivy Tilsley have religious doubts about marrying George Wardle?", "He was divorced", ["He was not baptised", "He was an atheist", "He had a criminal record"], "Medium", "1985", "Relationships", ["Ivy Tilsley", "George Wardle", "Divorce", "Religion", "Marriage plans"]],
    ["Which crooked builder misled Hilda Ogden about the state of No. 13's roof?", "Les Pringle", ["Len Fairclough", "Bill Webster", "Ray Langton"], "Hard", "1985", "Storylines", ["Hilda Ogden", "Les Pringle", "No. 13", "Roof repairs", "Builders"]],
    ["Which Coronation Street business did Alf Roberts want to enlarge by buying Hilda's house?", "The Corner Shop", ["The Kabin", "Baldwin's Casuals", "Jim's Cafe"], "Medium", "1985", "Businesses", ["Alf Roberts", "Hilda Ogden", "Corner Shop", "No. 13", "Expansion plans"]],
    ["Who opened Alf Roberts's refurbished Corner Shop when Miss Weatherfield was unavailable?", "Bet Lynch", ["Audrey Potter", "Rita Fairclough", "Deirdre Barlow"], "Hard", "1985", "Businesses", ["Bet Lynch", "Alf Roberts", "Corner Shop", "Shop refurbishment", "Miss Weatherfield"]],
    ["Which widow turned down Alf Roberts's marriage proposal in 1985?", "Rita Fairclough", ["Hilda Ogden", "Emily Bishop", "Bet Lynch"], "Medium", "1985", "Relationships", ["Alf Roberts", "Rita Fairclough", "Marriage proposal"]],
    ["Which character ran away after an argument about wanting a pet dog?", "Tracy Langton", ["Jenny Bradley", "Debbie Webster", "Andrea Clayton"], "Medium", "1985", "Storylines", ["Tracy Langton", "Barlow family", "Runaway", "Pet dog"]],
    ["In which city was the runaway Tracy Langton found?", "Newcastle", ["York", "Liverpool", "Manchester"], "Hard", "1985", "Storylines", ["Tracy Langton", "Newcastle", "Runaway", "Barlow family"]],
    ["Which Barlow family member brought the runaway Tracy back from Newcastle?", "Susan Barlow", ["Peter Barlow", "Ken Barlow", "Valerie Barlow"], "Medium", "1985", "Families", ["Susan Barlow", "Tracy Langton", "Newcastle", "Barlow family", "Runaway"]],
    ["Whom did Ken Barlow hope to adopt formally after marrying Deirdre?", "Tracy Langton", ["Susan Barlow", "Jenny Bradley", "Nicky Tilsley"], "Easy", "1985", "Families", ["Ken Barlow", "Tracy Langton", "Deirdre Barlow", "Barlow family", "Adoption"]],
    ["Which Rovers potman was dismissed after arguing with his wife Vera in the pub?", "Jack Duckworth", ["Fred Gee", "Frank Mills", "Wilf Starkey"], "Medium", "1985", "Rovers Return", ["Jack Duckworth", "Vera Duckworth", "Rovers Return", "Potmen", "Dismissal"]],
    ["Which Rovers barman resigned after being suspected of stealing from the till?", "Wilf Starkey", ["Fred Gee", "Jack Duckworth", "Alec Gilroy"], "Hard", "1985", "Rovers Return", ["Wilf Starkey", "Rovers Return", "Bar staff", "Missing money"]],
    ["Which man became a potman at the Rovers Return in 1985?", "Frank Mills", ["Frank Harvey", "George Wardle", "Les Pringle"], "Hard", "1985", "Rovers Return", ["Frank Mills", "Rovers Return", "Potmen", "Pub staff"]],
    ["Which actress played Rovers barmaid Gloria Todd during the 1980s?", "Sue Jenkins", ["Julie Goodyear", "Betty Driver", "Jill Summers"], "Medium", "1985", "Actors", ["Gloria Todd", "Sue Jenkins", "Rovers Return", "Casting"]],
    ["Which Coronation Street couple married just before Christmas 1985?", "Alf Roberts and Audrey Potter", ["Kevin Webster and Sally Seddon", "Mike Baldwin and Susan Barlow", "Bet Lynch and Alec Gilroy"], "Easy", "1985", "Weddings", ["Alf Roberts", "Audrey Potter", "Alf and Audrey wedding", "Roberts family"]],
    ["Who was Alf Roberts's best man at his wedding to Audrey?", "Mike Baldwin", ["Ken Barlow", "Percy Sugden", "Jack Duckworth"], "Medium", "1985", "Weddings", ["Alf Roberts", "Audrey Potter", "Mike Baldwin", "Alf and Audrey wedding"]],
    ["Which actress returned to play Susan Barlow in 1985?", "Wendy Jane Walker", ["Sally Ann Matthews", "Sue Devaney", "Anne Kirkbride"], "Hard", "1985", "Actors", ["Susan Barlow", "Wendy Jane Walker", "Casting", "Barlow family"]],

    // 1986 - THE ROVERS FIRE AND TWO WEDDINGS
    ["Which Kabin papergirl did Rita Fairclough take in after the girl's mother died?", "Jenny Bradley", ["Sharon Gaskell", "Sally Seddon", "Debbie Webster"], "Easy", "1986", "Families", ["Jenny Bradley", "Rita Fairclough", "The Kabin", "Fostering", "Pat Bradley"]],
    ["What was the first name of Jenny Bradley's mother?", "Pat", ["Mavis", "Connie", "Renee"], "Hard", "1986", "Families", ["Jenny Bradley", "Pat Bradley", "Bradley family", "Bereavement"]],
    ["Which character was Jenny Bradley's father?", "Alan Bradley", ["Len Fairclough", "Mike Baldwin", "Don Brennan"], "Easy", "1986", "Families", ["Jenny Bradley", "Alan Bradley", "Bradley family"]],
    ["Which actor played Alan Bradley in Coronation Street?", "Mark Eden", ["Roy Barraclough", "Johnny Briggs", "Peter Armitage"], "Medium", "1986", "Actors", ["Alan Bradley", "Mark Eden", "Casting", "Bradley family"]],
    ["Which actress played Jenny Bradley in the 1980s?", "Sally Ann Matthews", ["Sally Whittaker", "Tracie Bennett", "Sue Devaney"], "Medium", "1986", "Actors", ["Jenny Bradley", "Sally Ann Matthews", "Casting", "Bradley family"]],
    ["What was Sally Webster's maiden name?", "Seddon", ["Potter", "Bradley", "Riley"], "Easy", "1986", "Characters", ["Sally Seddon", "Sally Webster", "Webster family", "Maiden names"]],
    ["Which actress first played Sally Seddon in Coronation Street?", "Sally Whittaker", ["Sue Nicholls", "Sue Jenkins", "Helen Worth"], "Medium", "1986", "Actors", ["Sally Seddon", "Sally Whittaker", "Sally Dynevor", "Casting"]],
    ["How did Kevin Webster accidentally drench Sally Seddon when they first met?", "Driving through a puddle", ["Knocking over a bucket", "Bursting a water pipe", "Spilling a pint"], "Easy", "1986", "Relationships", ["Kevin Webster", "Sally Seddon", "First meeting", "Romance", "Puddle"]],
    ["What was the first name of Sally Seddon's difficult father?", "Eddie", ["Harry", "Don", "Fred"], "Medium", "1986", "Families", ["Sally Seddon", "Eddie Seddon", "Seddon family"]],
    ["Which Coronation Street resident let Sally Seddon stay at Number 13 to escape troubles at home?", "Hilda Ogden", ["Emily Bishop", "Bet Lynch", "Rita Fairclough"], "Medium", "1986", "Locations", ["Sally Seddon", "Hilda Ogden", "No. 13", "Lodgers", "Family conflict"]],
    ["Which Barlow daughter married Mike Baldwin?", "Susan Barlow", ["Tracy Barlow", "Deirdre Barlow", "Beattie Pearson"], "Easy", "1986", "Weddings", ["Susan Barlow", "Mike Baldwin", "Mike and Susan wedding", "Barlow family", "Baldwin family"]],
    ["Which Barlow family member gave Susan away at her wedding despite opposing her marriage?", "Ken Barlow", ["Peter Barlow", "Albert Tatlock", "Frank Barlow"], "Medium", "1986", "Weddings", ["Susan Barlow", "Mike Baldwin", "Ken Barlow", "Mike and Susan wedding"]],
    ["Which of Ken Barlow's children persuaded him to attend Susan's wedding to Mike Baldwin?", "Peter Barlow", ["Tracy Barlow", "Susan Barlow", "Daniel Osbourne"], "Medium", "1986", "Families", ["Peter Barlow", "Ken Barlow", "Susan Barlow", "Mike and Susan wedding"]],
    ["Which actor played Peter Barlow when he returned in 1986?", "David Lonsdale", ["Chris Gascoyne", "Sean Wilson", "Kevin Kennedy"], "Hard", "1986", "Actors", ["Peter Barlow", "David Lonsdale", "Casting", "Barlow family"]],
    ["At which workplace did Ken Barlow punch Mike Baldwin?", "Baldwin's Casuals", ["The Kabin", "The Corner Shop", "Jim's Cafe"], "Medium", "1986", "Storylines", ["Ken Barlow", "Mike Baldwin", "Baldwin's Casuals", "Factory", "Confrontation"]],
    ["Which Australian relative of Brian Tilsley had an affair with Gail?", "Ian Latimer", ["Martin Platt", "George Wardle", "Harry Redman"], "Medium", "1986", "Relationships", ["Gail Tilsley", "Ian Latimer", "Brian Tilsley", "Affairs", "Tilsley family"]],
    ["What was Ian Latimer's relationship to Brian Tilsley?", "His cousin", ["His brother", "His uncle", "His former boss"], "Medium", "1986", "Families", ["Ian Latimer", "Brian Tilsley", "Tilsley family", "Cousins"]],
    ["Which Duckworth accidentally caused the Rovers fire by fitting the wrong fuse?", "Jack Duckworth", ["Terry Duckworth", "Vera Duckworth", "Curly Watts"], "Medium", "1986", "Storylines", ["Jack Duckworth", "Rovers Return", "Rovers fire", "Faulty fuse", "Cellar"]],
    ["Where in the Rovers Return did the fire of 1986 begin?", "The cellar", ["The kitchen", "The snug", "The bedrooms"], "Medium", "1986", "Locations", ["Rovers Return", "Rovers fire", "Cellar", "Faulty fuse"]],
    ["In which month of 1986 did the Rovers Return suffer its famous fire?", "June", ["February", "September", "December"], "Medium", "1986", "History", ["Rovers Return", "Rovers fire", "June 1986", "Broadcast history"]],
    ["Which Rovers landlady was trapped upstairs during the 1986 fire?", "Bet Lynch", ["Annie Walker", "Betty Turpin", "Gloria Todd"], "Easy", "1986", "Storylines", ["Bet Lynch", "Rovers Return", "Rovers fire", "Rescue"]],
    ["Which young mechanic climbed a ladder in an attempt to rescue Bet Lynch during the Rovers fire?", "Kevin Webster", ["Brian Tilsley", "Terry Duckworth", "Curly Watts"], "Easy", "1986", "Storylines", ["Kevin Webster", "Bet Lynch", "Rovers Return", "Rovers fire", "Rescue"]],
    ["Which brewery considered demolishing the Rovers after the 1986 fire?", "Newton & Ridley", ["Boddingtons", "Hydes", "Robinsons"], "Medium", "1986", "Businesses", ["Newton & Ridley", "Rovers Return", "Rovers fire", "Brewery"]],
    ["In which month of 1986 did the renovated Rovers Return reopen?", "August", ["April", "October", "December"], "Medium", "1986", "Rovers Return", ["Rovers Return", "Rovers fire", "Pub refurbishment", "Reopening"]],
    ["What happened to the Rovers' snug and select rooms during the 1986 refurbishment?", "They were combined into a larger bar", ["They were converted into bedrooms", "They became a restaurant", "They were turned into a shop"], "Hard", "1986", "Rovers Return", ["Rovers Return", "Rovers fire", "Snug", "Select", "Pub refurbishment"]],
    ["Which couple married at a register office in October 1986?", "Kevin Webster and Sally Seddon", ["Mike Baldwin and Susan Barlow", "Bet Lynch and Alec Gilroy", "Alf Roberts and Audrey Potter"], "Easy", "1986", "Weddings", ["Kevin Webster", "Sally Seddon", "Kevin and Sally wedding", "Webster family"]],
    ["Who was Kevin Webster's best man at his wedding to Sally?", "Terry Duckworth", ["Brian Tilsley", "Curly Watts", "Martin Platt"], "Medium", "1986", "Weddings", ["Kevin Webster", "Sally Seddon", "Terry Duckworth", "Kevin and Sally wedding"]],
    ["Which resident hosted Kevin and Sally's wedding reception at No. 13?", "Hilda Ogden", ["Rita Fairclough", "Bet Lynch", "Audrey Roberts"], "Medium", "1986", "Weddings", ["Hilda Ogden", "No. 13", "Kevin Webster", "Sally Seddon", "Wedding reception"]],
    ["Which actor played theatrical agent Alec Gilroy when he returned in 1986?", "Roy Barraclough", ["Mark Eden", "Bryan Mosley", "Fred Feast"], "Easy", "1986", "Actors", ["Alec Gilroy", "Roy Barraclough", "Rovers Return", "Casting"]],
    ["Which Coronation Street character worked as a theatrical agent before running the Rovers?", "Alec Gilroy", ["Alf Roberts", "Fred Gee", "Bill Webster"], "Medium", "1986", "Occupations", ["Alec Gilroy", "Rovers Return", "Theatrical agent", "Show business"]],
    ["Which girl crashed a car after a talent contest?", "Jenny Bradley", ["Sally Seddon", "Susan Barlow", "Sharon Gaskell"], "Medium", "1986", "Storylines", ["Jenny Bradley", "Car crash", "Talent contest", "Martin Platt"]],
    ["Who was injured when Jenny Bradley overturned a car after a talent contest?", "Martin Platt", ["Alan Bradley", "Kevin Webster", "Brian Tilsley"], "Medium", "1986", "Storylines", ["Jenny Bradley", "Martin Platt", "Car crash", "Talent contest"]],
    ["To which country did Rovers barmaid Gloria Todd travel with Richard?", "Canada", ["Spain", "Australia", "France"], "Hard", "1986", "Storylines", ["Gloria Todd", "Richard", "Canada", "Departures", "Rovers Return"]],
    ["Which type of clothing did Susan Baldwin suggest making at Mike's factory?", "Children's wear", ["Wedding dresses", "School blazers", "Winter coats"], "Medium", "1986", "Businesses", ["Susan Baldwin", "Mike Baldwin", "Baldwin's Casuals", "Factory", "Children's wear"]],

    // 1987 - ELECTIONS, MARRIAGES AND HILDA'S FAREWELL
    ["Which daughter of Gail and Brian Tilsley was born in February 1987?", "Sarah-Louise Tilsley", ["Bethany Platt", "Rosie Webster", "Jenny Bradley"], "Easy", "1987", "Families", ["Sarah-Louise Tilsley", "Gail Tilsley", "Brian Tilsley", "Tilsley family", "Births"]],
    ["Who was confirmed by blood tests as Sarah-Louise Tilsley's father?", "Brian Tilsley", ["Ian Latimer", "Martin Platt", "Kevin Webster"], "Medium", "1987", "Families", ["Sarah-Louise Tilsley", "Brian Tilsley", "Ian Latimer", "Paternity tests", "Tilsley family"]],
    ["Who told Ian Latimer about Gail Tilsley's pregnancy against Gail's wishes?", "Audrey Roberts", ["Ivy Tilsley", "Rita Fairclough", "Bet Lynch"], "Medium", "1987", "Relationships", ["Audrey Roberts", "Gail Tilsley", "Ian Latimer", "Pregnancy", "Family secrets"]],
    ["Which politician did Deirdre Barlow defeat in a Weatherfield council election?", "Alf Roberts", ["Ken Barlow", "Percy Sugden", "Mike Baldwin"], "Easy", "1987", "Politics", ["Deirdre Barlow", "Alf Roberts", "Weatherfield Council", "Local elections", "Politics"]],
    ["What medical emergency did Alf Roberts suffer after losing a council election?", "A heart attack", ["A stroke", "Appendicitis", "A broken leg"], "Medium", "1987", "Storylines", ["Alf Roberts", "Deirdre Barlow", "Weatherfield Council", "Heart attack", "Election defeat"]],
    ["Which character originally intended to stand against Alf Roberts in the 1987 council election?", "Ken Barlow", ["Len Fairclough", "Fred Gee", "Jack Duckworth"], "Medium", "1987", "Politics", ["Ken Barlow", "Alf Roberts", "Weatherfield Council", "Local elections", "Politics"]],
    ["Who went into partnership with Bet Lynch to acquire the Rovers tenancy?", "Alec Gilroy", ["Mike Baldwin", "Alf Roberts", "Fred Gee"], "Easy", "1987", "Businesses", ["Bet Lynch", "Alec Gilroy", "Rovers Return", "Tenancy", "Pub ownership"]],
    ["To which Spanish resort did Alec Gilroy travel to find Bet Lynch?", "Torremolinos", ["Benidorm", "Tenerife", "Marbella"], "Medium", "1987", "Storylines", ["Alec Gilroy", "Bet Lynch", "Torremolinos", "Spain", "Rovers Return"]],
    ["What job was Bet Lynch doing in Spain when Alec Gilroy found her?", "Working in a bar", ["Singing in a cabaret", "Cleaning hotel rooms", "Running a travel agency"], "Medium", "1987", "Occupations", ["Bet Lynch", "Alec Gilroy", "Torremolinos", "Spain", "Bar work"]],
    ["Who proposed marriage to Bet Lynch while she was in Spain?", "Alec Gilroy", ["Mike Baldwin", "Fred Gee", "Jack Duckworth"], "Easy", "1987", "Relationships", ["Bet Lynch", "Alec Gilroy", "Torremolinos", "Marriage proposal"]],
    ["Which couple married in September 1987?", "Bet Lynch and Alec Gilroy", ["Ken Barlow and Deirdre Langton", "Kevin Webster and Sally Seddon", "Mike Baldwin and Susan Barlow"], "Easy", "1987", "Weddings", ["Bet Lynch", "Alec Gilroy", "Bet and Alec wedding", "Rovers Return"]],
    ["Which Rovers barmaid was bridesmaid at Bet and Alec's wedding?", "Gloria Todd", ["Betty Turpin", "Mavis Riley", "Rita Fairclough"], "Medium", "1987", "Weddings", ["Bet Lynch", "Alec Gilroy", "Gloria Todd", "Bet and Alec wedding", "Rovers Return"]],
    ["Who gave Bet Lynch away at her wedding to Alec Gilroy?", "Alf Roberts", ["Mike Baldwin", "Fred Gee", "Jack Duckworth"], "Hard", "1987", "Weddings", ["Bet Lynch", "Alec Gilroy", "Alf Roberts", "Bet and Alec wedding"]],
    ["At which Weatherfield church did Bet Lynch marry Alec Gilroy?", "All Saints", ["St Mary's", "St Luke's", "St Peter's"], "Hard", "1987", "Weddings", ["Bet Lynch", "Alec Gilroy", "All Saints Church", "Bet and Alec wedding"]],
    ["What did Alec Gilroy give Bet as a wedding present?", "The Rovers Return", ["A diamond necklace", "A holiday cottage", "A new car"], "Medium", "1987", "Rovers Return", ["Bet Lynch", "Alec Gilroy", "Rovers Return", "Bet and Alec wedding", "Wedding gift"]],
    ["Which surname did Bet Lynch take when she married Alec?", "Gilroy", ["Baldwin", "Roberts", "Bradley"], "Easy", "1987", "Characters", ["Bet Lynch", "Alec Gilroy", "Bet Gilroy", "Married names"]],
    ["Which taxi driver began dating Ivy Tilsley in 1987?", "Don Brennan", ["George Wardle", "Alan Bradley", "Bill Webster"], "Medium", "1987", "Relationships", ["Ivy Tilsley", "Don Brennan", "Taxi driver", "Courtship"]],
    ["At which club did Vera Duckworth and Ivy Tilsley spend an evening together?", "The Pink Flamingo", ["The Tropicana", "The Red Lion", "The Flying Horse"], "Hard", "1987", "Locations", ["Vera Duckworth", "Ivy Tilsley", "The Pink Flamingo", "Nightclub", "Don Brennan"]],
    ["Which young man travelled to France with Jenny Bradley when she ran away?", "Martin Platt", ["Kevin Webster", "Terry Duckworth", "Peter Barlow"], "Medium", "1987", "Storylines", ["Jenny Bradley", "Martin Platt", "France", "Runaways"]],
    ["What was the name of Jenny Bradley's French fiancé?", "Patrice Podevin", ["Ian Latimer", "Victor Pendlebury", "Harry Redman"], "Hard", "1987", "Relationships", ["Jenny Bradley", "Patrice Podevin", "France", "Engagement"]],
    ["Which character rejected Alan Bradley's surprise plan to marry at the register office?", "Rita Fairclough", ["Bet Lynch", "Mavis Riley", "Audrey Roberts"], "Medium", "1987", "Relationships", ["Rita Fairclough", "Alan Bradley", "Register office", "Marriage proposal"]],
    ["Which young Barlow was admitted to hospital with appendicitis?", "Tracy Barlow", ["Susan Barlow", "Peter Barlow", "Sarah-Louise Tilsley"], "Medium", "1987", "Storylines", ["Tracy Barlow", "Ken Barlow", "Deirdre Barlow", "Appendicitis", "Hospital"]],
    ["Which businessman did Susan Barlow separate from in 1987?", "Mike Baldwin", ["Alf Roberts", "Alan Bradley", "Don Brennan"], "Easy", "1987", "Relationships", ["Susan Barlow", "Mike Baldwin", "Marriage breakdown", "Baldwin family"]],
    ["To which city did Susan Barlow return after leaving Mike Baldwin?", "Newcastle", ["Liverpool", "Bristol", "York"], "Medium", "1987", "Departures", ["Susan Barlow", "Mike Baldwin", "Newcastle", "Departures", "Baldwin family"]],
    ["Which couple's home was the scene of the 1987 burglary that traumatised Hilda Ogden?", "The Lowthers'", ["The Barlows'", "The Websters'", "The Duckworths'"], "Medium", "1987", "Storylines", ["Hilda Ogden", "Lowther family", "Joan Lowther", "Burglary", "Assault"]],
    ["Which woman died after the burglary at the Lowthers' home?", "Joan Lowther", ["Audrey Roberts", "Hilda Ogden", "Rita Fairclough"], "Hard", "1987", "Storylines", ["Joan Lowther", "Doctor Lowther", "Hilda Ogden", "Burglary", "Bereavement"]],
    ["Which widower invited Hilda Ogden to move to the countryside as his housekeeper?", "Doctor Lowther", ["Tom Hopwood", "Percy Sugden", "Alf Roberts"], "Medium", "1987", "Departures", ["Hilda Ogden", "Doctor Lowther", "Hartington", "Departures", "Housekeeping"]],
    ["To which Derbyshire village did Hilda Ogden move when she left Weatherfield?", "Hartington", ["Matlock", "Bakewell", "Buxton"], "Medium", "1987", "Locations", ["Hilda Ogden", "Hartington", "Derbyshire", "Doctor Lowther", "Departures"]],
    ["On which holiday did Hilda Ogden make her final regular appearance?", "Christmas Day", ["New Year's Eve", "Easter Sunday", "Boxing Day"], "Easy", "1987", "History", ["Hilda Ogden", "Christmas Day", "Jean Alexander", "Departures", "Final appearance"]],
    ["Which friend proposed marriage to Hilda Ogden and suggested moving to Formby?", "Tom Hopwood", ["Doctor Lowther", "Fred Gee", "Sam Tindall"], "Medium", "1987", "Relationships", ["Hilda Ogden", "Tom Hopwood", "Formby", "Marriage proposal"]],
    ["Which couple bought No. 13 from Hilda Ogden when she left Weatherfield?", "Kevin and Sally Webster", ["Alf and Audrey Roberts", "Jack and Vera Duckworth", "Brian and Gail Tilsley"], "Easy", "1987", "Locations", ["Hilda Ogden", "Kevin Webster", "Sally Webster", "No. 13", "Property sale"]],
    ["Who returned to visit Hilda Ogden after four years away from Weatherfield?", "Eddie Yeats", ["Len Fairclough", "Billy Walker", "Ray Langton"], "Medium", "1987", "Characters", ["Eddie Yeats", "Hilda Ogden", "Return visits", "Ogden family"]],
    ["Which actress played Hilda Ogden until her departure in 1987?", "Jean Alexander", ["Doris Speed", "Eileen Derbyshire", "Julie Goodyear"], "Easy", "1987", "Actors", ["Hilda Ogden", "Jean Alexander", "Casting", "Departures"]],
    ["Which man moved into No. 7 with Rita Fairclough in 1987?", "Alan Bradley", ["Don Brennan", "Alec Gilroy", "Mike Baldwin"], "Medium", "1987", "Locations", ["Alan Bradley", "Rita Fairclough", "No. 7", "Bradley family", "Cohabitation"]]
];

// Construct exported questions, retaining the original answer rotation.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, specialistTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(401 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '1980s', year, topic, ...specialistTags])],
        dailyEligible: true
    };
});

// Validate actual exported question objects.
if (questions.length !== 100 || questions[0].id !== 'tv_0401' || questions[99].id !== 'tv_0500') {
    throw new Error('Pack 164: incorrect question count or ID range');
}

const seenIds = new Set();
const seenWording = new Set();
for (const q of questions) {
    const wording = q.question.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
    if (
        seenIds.has(q.id) || seenWording.has(wording) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        !q.tags.includes('Soaps') || !q.tags.includes('Coronation Street') ||
        !q.tags.includes('1980s') || !q.tags.some(t => /^198[5-7]$/.test(t)) ||
        q.tags.length < 6 || q.dailyEligible !== true
    ) {
        throw new Error('Pack 164: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenWording.add(wording);
}

module.exports = questions;
