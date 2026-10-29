// quiz_pack167.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 1992 and 1993
// 100 questions: tv_0701 to tv_0800
// Wording and comprehensive specialist-tag audit.
// Original IDs, difficulty and daily eligibility retained.
// Corrected one documented answer in tv_0782: Best Buys.
// quiz_bank.js is already connected and must not be altered.

// Each entry: question, correct answer, three alternatives, difficulty, year, topic, specialist tags.
const facts = [

    // 1992
    ["What was the name of Jim and Liz McDonald's baby daughter born prematurely in January 1992?", "Katie", ["Amy", "Sarah", "Rosie"], "Medium", "1992", "Families", ["Jim McDonald", "Liz McDonald", "Katie McDonald", "Premature birth", "McDonald family"]],
    ["What tragedy struck Jim and Liz McDonald shortly after their baby daughter Katie was born?", "She died", ["She was kidnapped", "She was taken abroad", "She went missing from hospital"], "Medium", "1992", "Storylines", ["Jim McDonald", "Liz McDonald", "Katie McDonald", "Infant death", "McDonald family"]],
    ["Which Rovers barmaid moved in with Des Barnes at No. 6?", "Raquel Wolstenhulme", ["Betty Turpin", "Liz McDonald", "Tina Fowler"], "Easy", "1992", "Homes", ["Raquel Wolstenhulme", "Des Barnes", "No. 6", "Rovers Return", "Lodgers"]],
    ["What was the name of Terry Duckworth's pregnant girlfriend who arrived in Weatherfield?", "Lisa Horton", ["Jackie Ingram", "Kimberley Taylor", "Steph Barnes"], "Medium", "1992", "Arrivals", ["Terry Duckworth", "Lisa Horton", "Duckworth family", "Pregnancy", "Character debut"]],
    ["Which actress played Lisa Horton, later Duckworth?", "Caroline Milmoe", ["Amelia Bullmore", "Deborah McAndrew", "Catherine Cusack"], "Hard", "1992", "Actors", ["Lisa Horton", "Lisa Duckworth", "Caroline Milmoe", "Casting"]],
    ["Which Coronation Street couple's divorce became final in 1992?", "Ken and Deirdre Barlow", ["Kevin and Sally Webster", "Jack and Vera Duckworth", "Derek and Mavis Wilton"], "Easy", "1992", "Relationships", ["Ken Barlow", "Deirdre Barlow", "Divorce", "Barlow family"]],
    ["Which businessman began courting Rita Fairclough?", "Ted Sullivan", ["Reg Holdsworth", "Maurice Jones", "Des Barnes"], "Medium", "1992", "Relationships", ["Rita Fairclough", "Ted Sullivan", "Courtship", "Sullivan family"]],
    ["Which actor played Rita's husband Ted Sullivan?", "William Russell", ["Roy Barraclough", "Peter Baldwin", "Mark Eden"], "Hard", "1992", "Actors", ["Ted Sullivan", "William Russell", "Rita Fairclough", "Casting"]],
    ["What kind of work first brought Ted Sullivan into contact with Rita and Mavis at The Kabin?", "Supplying the newsagent's", ["Repairing the roof", "Delivering milk", "Installing alarms"], "Hard", "1992", "Occupations", ["Ted Sullivan", "Rita Fairclough", "Mavis Wilton", "The Kabin", "Newsagents supplier"]],
    ["Which American state did Ted Sullivan hope to retire to with Rita?", "Florida", ["California", "Arizona", "Texas"], "Medium", "1992", "Travel", ["Ted Sullivan", "Rita Fairclough", "Florida", "Retirement plans", "USA"]],
    ["What serious illness did Ted Sullivan reveal to Rita?", "An inoperable brain tumour", ["A heart condition", "Kidney failure", "Lung disease"], "Medium", "1992", "Storylines", ["Ted Sullivan", "Rita Fairclough", "Brain tumour", "Terminal illness"]],
    ["In which month of 1992 did Rita Fairclough marry Ted Sullivan?", "June", ["March", "August", "November"], "Medium", "1992", "Weddings", ["Rita Fairclough", "Ted Sullivan", "Rita and Ted wedding", "Sullivan family"]],
    ["Which Coronation Street character was widowed when Ted Sullivan died?", "Rita Sullivan", ["Mavis Wilton", "Bet Gilroy", "Emily Bishop"], "Easy", "1992", "Storylines", ["Rita Sullivan", "Ted Sullivan", "Bereavement", "Brain tumour"]],
    ["What was Percy Sugden doing in the park when Ted Sullivan died nearby?", "Playing bowls", ["Walking a dog", "Reading a newspaper", "Feeding ducks"], "Hard", "1992", "Storylines", ["Percy Sugden", "Ted Sullivan", "Bowls", "Park", "Death"]],
    ["In which Manchester prison was Terry Duckworth held?", "Strangeways", ["Holloway", "Wormwood Scrubs", "Pentonville"], "Medium", "1992", "Storylines", ["Terry Duckworth", "Strangeways Prison", "Manchester", "Prison sentence"]],
    ["Who married Terry Duckworth during his day release from prison?", "Lisa Horton", ["Raquel Wolstenhulme", "Flick Khan", "Angie Freeman"], "Easy", "1992", "Weddings", ["Terry Duckworth", "Lisa Horton", "Terry and Lisa wedding", "Prison day release"]],
    ["What did Terry Duckworth do while wedding photographs were being taken after his 1992 ceremony?", "Ran away from custody", ["Fainted", "Stole the wedding car", "Punched his best man"], "Medium", "1992", "Storylines", ["Terry Duckworth", "Lisa Horton", "Terry and Lisa wedding", "Prison escape"]],
    ["At which supermarket was Terry Duckworth caught after escaping from custody?", "Bettabuy", ["Freshco", "Costcutter", "Alf's Corner Shop"], "Medium", "1992", "Businesses", ["Terry Duckworth", "Bettabuy", "Prison escape", "Arrest"]],
    ["How long was Terry Duckworth's sentence for grievous bodily harm in July 1992?", "Three years", ["Six months", "One year", "Five years"], "Hard", "1992", "Storylines", ["Terry Duckworth", "Grievous bodily harm", "Prison sentence", "GBH"]],
    ["What were the first names of Lisa Horton's parents?", "Jeff and Doreen", ["Jack and Vera", "Stan and Hilda", "Alf and Audrey"], "Medium", "1992", "Families", ["Lisa Horton", "Jeff Horton", "Doreen Horton", "Horton family"]],
    ["What name did Lisa Duckworth give her baby son?", "Tommy", ["Terry", "Jason", "Simon"], "Easy", "1992", "Families", ["Lisa Duckworth", "Tommy Duckworth", "Terry Duckworth", "Birth", "Duckworth family"]],
    ["Which part of the Rovers was condemned after a health and safety inspection?", "The kitchen", ["The cellar", "The toilets", "The snug"], "Medium", "1992", "Rovers Return", ["Rovers Return", "Kitchen", "Health and safety", "Inspection"]],
    ["Which Kabin employee faced industrial action by the paperboys?", "Derek Wilton", ["Mavis Wilton", "Rita Fairclough", "Ken Barlow"], "Medium", "1992", "The Kabin", ["Derek Wilton", "The Kabin", "Paperboys", "Industrial action"]],
    ["Which couple became engaged in April 1992 and married that June?", "Mike Baldwin and Alma Sedgewick", ["Des Barnes and Raquel Wolstenhulme", "Reg Holdsworth and Maureen Naylor", "Ken Barlow and Wendy Crozier"], "Easy", "1992", "Weddings", ["Mike Baldwin", "Alma Sedgewick", "Mike and Alma wedding", "Baldwin family"]],
    ["Which actress played Alma Sedgewick when she married Mike Baldwin?", "Amanda Barrie", ["Sue Nicholls", "Sally Whittaker", "Julie Goodyear"], "Medium", "1992", "Actors", ["Alma Sedgewick", "Alma Baldwin", "Amanda Barrie", "Mike Baldwin", "Casting"]],
    ["Which Weatherfield taxi driver was seriously injured in a car accident?", "Don Brennan", ["Des Barnes", "Jim McDonald", "Jack Duckworth"], "Medium", "1992", "Storylines", ["Don Brennan", "Taxi driver", "Car crash", "Road accident"]],
    ["What operation did Don Brennan need after his 1992 car accident?", "Amputation of his lower right leg", ["A heart transplant", "Removal of an eye", "A hip replacement"], "Medium", "1992", "Storylines", ["Don Brennan", "Amputation", "Right leg", "Car crash", "Disability"]],
    ["Who bought No. 7 from Rita Sullivan?", "Curly Watts", ["Reg Holdsworth", "Martin Platt", "Des Barnes"], "Medium", "1992", "Homes", ["Curly Watts", "Rita Sullivan", "No. 7", "House sale"]],
    ["In which English city was Alec Gilroy offered a job in entertainment?", "Southampton", ["Bristol", "Birmingham", "Newcastle"], "Medium", "1992", "Occupations", ["Alec Gilroy", "Southampton", "Entertainment industry", "Job offer"]],
    ["Who chose not to leave the Rovers Return with Alec Gilroy?", "Bet Gilroy", ["Liz McDonald", "Betty Turpin", "Raquel Wolstenhulme"], "Easy", "1992", "Relationships", ["Bet Gilroy", "Alec Gilroy", "Rovers Return", "Marriage separation"]],
    ["How long was Bet Gilroy's initial probation as Rovers manager in 1992?", "Six months", ["One month", "One year", "Two years"], "Hard", "1992", "Rovers Return", ["Bet Gilroy", "Rovers Return", "Management contract", "Probation"]],
    ["Which newcomer became friends with Nicky Tilsley at Weatherfield Comprehensive?", "Mark Redman", ["Andy McDonald", "Jason Stubbs", "Craig Whitely"], "Medium", "1992", "Arrivals", ["Mark Redman", "Nicky Tilsley", "Weatherfield Comprehensive", "School friends"]],
    ["What did Ted Sullivan's relatives accuse Rita of after his death?", "Marrying him for his money", ["Stealing from The Kabin", "Selling his house secretly", "Hiding his medical records"], "Medium", "1992", "Storylines", ["Ted Sullivan", "Rita Sullivan", "Will dispute", "Inheritance accusation"]],
    ["Who developed a drinking problem as her marriage to Don Brennan faltered?", "Ivy Brennan", ["Audrey Roberts", "Emily Bishop", "Alma Baldwin"], "Medium", "1992", "Storylines", ["Ivy Brennan", "Don Brennan", "Alcohol dependence", "Marriage breakdown"]],
    ["Which supermarket dismissed Ivy Brennan because she had become unreliable?", "Bettabuy", ["Freshco", "Spar", "Costcutter"], "Medium", "1992", "Businesses", ["Ivy Brennan", "Bettabuy", "Dismissal", "Employment"]],
    ["Which businessman did Ken Barlow accuse of cheating Emily Bishop out of money?", "Mike Baldwin", ["Reg Holdsworth", "Ted Sullivan", "Alec Gilroy"], "Medium", "1992", "Storylines", ["Ken Barlow", "Mike Baldwin", "Emily Bishop", "Financial dispute"]],
    ["What escaped pet sent customers fleeing from the Rovers Return?", "A large spider", ["A python", "A ferret", "A parrot"], "Medium", "1992", "Animals", ["Rovers Return", "Spider", "Pets", "Pub customers"]],
    ["Which former girlfriend unexpectedly turned up as Curly Watts's blind date?", "Kimberley Taylor", ["Shirley Armitage", "Raquel Wolstenhulme", "Angie Freeman"], "Medium", "1992", "Relationships", ["Curly Watts", "Kimberley Taylor", "Blind date", "Former girlfriend"]],
    ["What did Kimberley Taylor want Curly Watts to give up before ending their engagement?", "His telescope", ["His motorbike", "His record collection", "His computer"], "Medium", "1992", "Relationships", ["Kimberley Taylor", "Curly Watts", "Telescope", "Broken engagement"]],
    ["Which McDonald twin returned home after dropping out of university?", "Andy McDonald", ["Steve McDonald", "Peter Barlow", "Nicky Tilsley"], "Medium", "1992", "Families", ["Andy McDonald", "University dropout", "McDonald family", "Education"]],
    ["Who invited nanny Carmel Finnan to live with the Platt family?", "Gail Platt", ["Ivy Brennan", "Audrey Roberts", "Alma Baldwin"], "Medium", "1992", "Storylines", ["Gail Platt", "Carmel Finnan", "Nanny", "Platt family", "No. 8"]],
    ["Which Platt family member became the object of Carmel Finnan's obsession?", "Martin Platt", ["Nicky Platt", "David Platt", "Brian Tilsley"], "Medium", "1992", "Storylines", ["Carmel Finnan", "Martin Platt", "Gail Platt", "Obsession", "Nanny from Hell"]],
    ["Which future salon owner made her Coronation Street debut in 1992?", "Denise Osbourne", ["Maureen Naylor", "Tanya Pooley", "Fiona Middleton"], "Medium", "1992", "Arrivals", ["Denise Osbourne", "Hair salon", "Character debut", "No. 2"]],
    ["Which actress played Denise Osbourne when she joined Coronation Street?", "Denise Black", ["Sherrie Hewson", "Deborah McAndrew", "Eva Pope"], "Medium", "1992", "Actors", ["Denise Osbourne", "Denise Black", "Casting", "Hairdresser"]],
    ["At which house did Denise Osbourne establish her hair and beauty salon?", "Number 2", ["Number 6", "Number 9", "Number 13"], "Medium", "1992", "Businesses", ["Denise Osbourne", "No. 2", "Hair and beauty salon", "Business opening"]],
    ["Which McDonald brother crashed Mike Baldwin's car?", "Steve McDonald", ["Andy McDonald", "Jim McDonald", "Nicky Tilsley"], "Medium", "1992", "Storylines", ["Steve McDonald", "Mike Baldwin", "Car accident", "McDonald family"]],
    ["Who told Ken Barlow that Mike Baldwin was Mark Redman's father?", "Tracy Barlow", ["Deirdre Barlow", "Alma Baldwin", "Rita Sullivan"], "Medium", "1992", "Families", ["Tracy Barlow", "Ken Barlow", "Mike Baldwin", "Mark Redman", "Parentage revelation"]],
    ["Which BBC soap was scheduled against Coronation Street's first hour-long transmission in July 1992?", "Eldorado", ["EastEnders", "Brookside", "Neighbours"], "Hard", "1992", "TV History", ["Eldorado", "BBC", "ITV", "Broadcast history", "Hour-long episode"]],
    ["Which actress played the nanny Carmel Finnan?", "Catherine Cusack", ["Caroline Milmoe", "Lisa Lewis", "Sarah Lancashire"], "Hard", "1992", "Actors", ["Carmel Finnan", "Catherine Cusack", "Nanny from Hell", "Casting"]],
    ["Which Bettabuy area manager hinted at a promotion when Curly proposed to Kimberley?", "Brendan Scott", ["Reg Holdsworth", "Alf Roberts", "Maurice Jones"], "Hard", "1992", "Businesses", ["Brendan Scott", "Curly Watts", "Kimberley Taylor", "Bettabuy", "Promotion"]],

    // 1993
    ["Which young man discovered that Mike Baldwin was his father?", "Mark Redman", ["Nicky Platt", "Andy McDonald", "Tommy Duckworth"], "Medium", "1993", "Families", ["Mark Redman", "Mike Baldwin", "Maggie Dunlop", "Paternity", "Redman family"]],
    ["Who was driving the car that struck Lisa Duckworth?", "John Hargreaves", ["Don Brennan", "Des Barnes", "Kevin Webster"], "Hard", "1993", "Storylines", ["Lisa Duckworth", "John Hargreaves", "Road accident", "Fatal collision"]],
    ["Which young mother died after being struck by a car?", "Lisa Duckworth", ["Sally Webster", "Angie Freeman", "Tanya Pooley"], "Easy", "1993", "Storylines", ["Lisa Duckworth", "Tommy Duckworth", "Terry Duckworth", "Road accident", "Death"]],
    ["Whom was Lisa Duckworth planning a future with before her death?", "Des Barnes", ["Curly Watts", "Reg Holdsworth", "Mark Casey"], "Medium", "1993", "Relationships", ["Lisa Duckworth", "Des Barnes", "Relationship", "Future plans"]],
    ["Who won the court dispute over Ted Sullivan's will?", "Rita Sullivan", ["Mavis Wilton", "Ted's nephews", "Emily Bishop"], "Medium", "1993", "Storylines", ["Rita Sullivan", "Ted Sullivan", "Will dispute", "Inheritance"]],
    ["Which fashion designer moved out of No. 7 in 1993?", "Angie Freeman", ["Raquel Wolstenhulme", "Denise Osbourne", "Jenny Bradley"], "Medium", "1993", "Departures", ["Angie Freeman", "No. 7", "Fashion designer", "Departure"]],
    ["Which nanny falsely claimed to be pregnant with Martin Platt's baby?", "Carmel Finnan", ["Amy Nelson", "Maureen Naylor", "Tanya Pooley"], "Easy", "1993", "Storylines", ["Carmel Finnan", "Martin Platt", "Gail Platt", "False pregnancy", "Obsession"]],
    ["Who told Gail Platt that Martin had spent the night with Carmel Finnan?", "Ivy Brennan", ["Audrey Roberts", "Alma Baldwin", "Rita Sullivan"], "Medium", "1993", "Families", ["Ivy Brennan", "Gail Platt", "Martin Platt", "Carmel Finnan", "Marriage conflict"]],
    ["What happened to Carmel Finnan during a confrontation with Gail Platt?", "She fell down stairs", ["She was knocked down by a car", "She fainted in the Rovers", "She fled to Canada"], "Medium", "1993", "Storylines", ["Carmel Finnan", "Gail Platt", "Fall downstairs", "Confrontation"]],
    ["What was revealed about Carmel Finnan's claim to be pregnant?", "She was not pregnant", ["She was expecting twins", "Martin was not the father", "She had given birth secretly"], "Medium", "1993", "Storylines", ["Carmel Finnan", "Martin Platt", "False pregnancy", "Nanny from Hell"]],
    ["What was the first name of Carmel Finnan's grandfather?", "John", ["Peter", "George", "Harry"], "Hard", "1993", "Families", ["Carmel Finnan", "John Finnan", "Finnan family", "Grandfather"]],
    ["To which country did Carmel Finnan return with her grandfather?", "Ireland", ["Scotland", "Canada", "Australia"], "Medium", "1993", "Departures", ["Carmel Finnan", "John Finnan", "Ireland", "Departure"]],
    ["Which future wife of Reg Holdsworth started working at Bettabuy?", "Maureen Naylor", ["Denise Osbourne", "Tanya Pooley", "Fiona Middleton"], "Easy", "1993", "Arrivals", ["Maureen Naylor", "Reg Holdsworth", "Bettabuy", "Character debut"]],
    ["Which actress played Maureen Naylor when she arrived in Weatherfield?", "Sherrie Hewson", ["Amanda Barrie", "Elizabeth Bradley", "Sue Nicholls"], "Medium", "1993", "Actors", ["Maureen Naylor", "Sherrie Hewson", "Casting", "Holdsworth family"]],
    ["What was the name of Maureen Naylor's formidable mother?", "Maud Grimes", ["Blanche Hunt", "Phyllis Pearce", "Eunice Gee"], "Medium", "1993", "Families", ["Maureen Naylor", "Maud Grimes", "Grimes family", "Mother and daughter"]],
    ["Which actress played Maud Grimes when she arrived?", "Elizabeth Bradley", ["Jill Summers", "Doris Speed", "Eileen Derbyshire"], "Hard", "1993", "Actors", ["Maud Grimes", "Elizabeth Bradley", "Casting", "Wheelchair user"]],
    ["What was the outcome of the dangerous-driving case against John Hargreaves after Lisa Duckworth's death?", "He was cleared", ["He was jailed", "He was fined", "He pleaded guilty"], "Medium", "1993", "Storylines", ["John Hargreaves", "Lisa Duckworth", "Court case", "Dangerous driving", "Acquittal"]],
    ["Which McDonald brother tried to tackle armed robbers at Bettabuy?", "Andy McDonald", ["Steve McDonald", "Jim McDonald", "Kevin Webster"], "Medium", "1993", "Storylines", ["Andy McDonald", "Bettabuy", "Armed robbery", "McDonald family"]],
    ["What job was Jim McDonald doing when he attacked an intruder at a building site?", "Nightwatchman", ["Foreman", "Electrician", "Security salesman"], "Medium", "1993", "Occupations", ["Jim McDonald", "Nightwatchman", "Building site", "Intruder", "Assault"]],
    ["Which Bettabuy shop assistant became Andy McDonald's girlfriend?", "Amy Nelson", ["Kimberley Taylor", "Fiona Middleton", "Shirley Armitage"], "Medium", "1993", "Relationships", ["Amy Nelson", "Andy McDonald", "Bettabuy", "Romance", "Shop assistant"]],
    ["What was the first name of Amy Nelson's young son?", "Dominic", ["Daniel", "David", "Darren"], "Hard", "1993", "Families", ["Amy Nelson", "Dominic Nelson", "Nelson family", "Children"]],
    ["To which Caribbean country did Amy Nelson return?", "Trinidad", ["Jamaica", "Barbados", "Grenada"], "Medium", "1993", "Travel", ["Amy Nelson", "Trinidad", "Caribbean", "Departure"]],
    ["Which future Spice Girl made an uncredited appearance as Amy Nelson in October 1993?", "Melanie Brown", ["Emma Bunton", "Melanie Chisholm", "Geri Halliwell"], "Medium", "1993", "Actors", ["Melanie Brown", "Mel B", "Spice Girls", "Amy Nelson", "Uncredited cameo"]],
    ["What did Derek Wilton accidentally puncture while drilling through The Kabin ceiling?", "Reg Holdsworth's waterbed", ["A water tank", "A gas pipe", "A television set"], "Medium", "1993", "Comedy", ["Derek Wilton", "Reg Holdsworth", "The Kabin", "Waterbed", "Comedy"]],
    ["Which woman rejected Percy Sugden's marriage proposal?", "Olive Clarke", ["Phyllis Pearce", "Emily Bishop", "Maud Grimes"], "Medium", "1993", "Relationships", ["Percy Sugden", "Olive Clarke", "Marriage proposal", "Rejection"]],
    ["Which former sweetheart of Reg Holdsworth became engaged to him again?", "Maureen Naylor", ["Bet Gilroy", "Denise Osbourne", "Tanya Pooley"], "Medium", "1993", "Relationships", ["Reg Holdsworth", "Maureen Naylor", "Engagement", "Holdsworth family"]],
    ["How much did Reg Holdsworth offer Alf Roberts for the Corner Shop in May 1993?", "£68,000", ["£28,000", "£48,000", "£88,000"], "Hard", "1993", "Businesses", ["Reg Holdsworth", "Alf Roberts", "Corner Shop", "Shop valuation", "£68,000 offer"]],
    ["Which pub offered Liz McDonald a job as landlady?", "The Queens", ["The Flying Horse", "The Rovers Return", "The White Swan"], "Medium", "1993", "Occupations", ["Liz McDonald", "The Queens", "Landlady", "Pub management"]],
    ["Which sharp-tongued barmaid made her debut at The Queens pub?", "Tanya Pooley", ["Raquel Wolstenhulme", "Gloria Todd", "Tina Fowler"], "Medium", "1993", "Arrivals", ["Tanya Pooley", "The Queens", "Rovers Return", "Character debut", "Barmaid"]],
    ["Which actress played the barmaid Tanya Pooley?", "Eva Pope", ["Sarah Lancashire", "Sherrie Hewson", "Deborah McAndrew"], "Medium", "1993", "Actors", ["Tanya Pooley", "Eva Pope", "The Queens", "Casting"]],
    ["Which businessman outbid Reg Holdsworth to buy Alf Roberts' Corner Shop?", "Brendan Scott", ["Maurice Jones", "Peter Ingram", "Mike Baldwin"], "Medium", "1993", "Businesses", ["Brendan Scott", "Alf Roberts", "Reg Holdsworth", "Corner Shop", "Shop sale"]],
    ["What did Brendan Scott rename the Corner Shop when he took over in 1993?", "Best Buys", ["Weatherfield Stores", "Bettabuy Express", "Scott's Bargain Mart"], "Hard", "1993", "Businesses", ["Brendan Scott", "Best Buys", "Corner Shop", "Shop rebranding", "Grocers"]],
    ["Which shop assistant had to wear a frilly apron and mop cap under the Corner Shop's new owner?", "Deirdre Barlow", ["Vera Duckworth", "Mavis Wilton", "Ivy Brennan"], "Medium", "1993", "Businesses", ["Deirdre Barlow", "Brendan Scott", "Corner Shop", "Victorian costume", "Work uniforms"]],
    ["What was the first name of Des Barnes's brother?", "Colin", ["Tony", "Graham", "Paul"], "Medium", "1993", "Families", ["Des Barnes", "Colin Barnes", "Barnes family", "Brothers"]],
    ["Which separated member of the McDonald family became romantically involved with Colin Barnes?", "Liz McDonald", ["Vera Duckworth", "Alma Baldwin", "Audrey Roberts"], "Medium", "1993", "Relationships", ["Liz McDonald", "Colin Barnes", "Des Barnes", "Romance"]],
    ["Which seaside town did Alf and Audrey Roberts consider moving to?", "Lytham St Annes", ["Blackpool", "Southport", "Morecambe"], "Medium", "1993", "Homes", ["Alf Roberts", "Audrey Roberts", "Lytham St Annes", "Retirement plans"]],
    ["Where did Brendan Scott collapse and die?", "The Corner Shop", ["The Rovers Return", "Bettabuy", "The Kabin"], "Medium", "1993", "Storylines", ["Brendan Scott", "Corner Shop", "Heart attack", "Death"]],
    ["How did Alf Roberts regain ownership of the Corner Shop in September 1993?", "He bought it at auction", ["He inherited it", "Reg gave it to him", "He won it in a raffle"], "Medium", "1993", "Businesses", ["Alf Roberts", "Corner Shop", "Auction", "Property purchase"]],
    ["What name did Raquel Wolstenhulme use when applying to a modelling academy?", "Nadia", ["Claudia", "Natasha", "Roxanne"], "Hard", "1993", "Characters", ["Raquel Wolstenhulme", "Nadia", "Modelling academy", "Stage name"]],
    ["What breed of dog did Jenny Bradley bring back to Weatherfield?", "Japanese Akita", ["Alsatian", "Greyhound", "Border collie"], "Hard", "1993", "Animals", ["Jenny Bradley", "Japanese Akita", "Dog", "Mitzi", "Return to Weatherfield"]],
    ["How much money did Rita Sullivan give Jenny Bradley to leave Weatherfield in October 1993?", "£1,000", ["£100", "£500", "£5,000"], "Medium", "1993", "Money", ["Rita Sullivan", "Jenny Bradley", "£1,000 cheque", "Estrangement"]],
    ["Which clergyman did Emily Bishop meet at Olive Clarke's wedding?", "Reverend Bernard Morton", ["Reverend Lionel Grant", "Father James Byrne", "Reverend Eric Ashton"], "Hard", "1993", "Relationships", ["Emily Bishop", "Reverend Bernard Morton", "Olive Clarke", "Wedding", "Romance"]],
    ["Which former girlfriend of Reg Holdsworth spent a drunken night with Curly Watts?", "Maureen Naylor", ["Kimberley Taylor", "Raquel Wolstenhulme", "Denise Osbourne"], "Medium", "1993", "Relationships", ["Maureen Naylor", "Curly Watts", "Reg Holdsworth", "One-night stand"]],
    ["Which man was Sally Webster suspected of having an affair with?", "Joe Broughton", ["Des Barnes", "Martin Platt", "Colin Barnes"], "Medium", "1993", "Relationships", ["Sally Webster", "Joe Broughton", "Kevin Webster", "Suspected affair"]],
    ["What did the Platt children burn on their Bonfire Night bonfire in November 1993, to Percy's horror?", "An effigy of Percy Sugden", ["A model of the Rovers", "A stack of schoolbooks", "A neighbour's garden gnome"], "Medium", "1993", "Comedy", ["Percy Sugden", "Platt family", "Bonfire Night", "Guy Fawkes effigy"]],
    ["Which elderly relative of Vera Duckworth died?", "Joss Shackleton", ["Amy Burton", "Eunice Gee", "Fred Gee"], "Medium", "1993", "Families", ["Vera Duckworth", "Joss Shackleton", "Bereavement", "Duckworth family"]],
    ["To whom did Terry Duckworth hand over his son Tommy in return for money at Christmas 1993?", "Jeff and Doreen Horton", ["Jack and Vera Duckworth", "Jim and Liz McDonald", "Kevin and Sally Webster"], "Medium", "1993", "Storylines", ["Terry Duckworth", "Tommy Duckworth", "Jeff Horton", "Doreen Horton", "Child custody", "Money"]],
    ["Who disowned Terry Duckworth after discovering he had sold his son in December 1993?", "Jack Duckworth", ["Mike Baldwin", "Don Brennan", "Des Barnes"], "Easy", "1993", "Families", ["Jack Duckworth", "Terry Duckworth", "Tommy Duckworth", "Disownment"]],
    ["Which taxi driver spent the night with Bet Gilroy?", "Don Brennan", ["Des Barnes", "Jim McDonald", "Reg Holdsworth"], "Medium", "1993", "Relationships", ["Don Brennan", "Bet Gilroy", "Rovers Return", "One-night stand"]],
    ["What was Charlie Whelan's occupation when he first arrived?", "Lorry driver", ["Mechanic", "Police officer", "Factory manager"], "Medium", "1993", "Arrivals", ["Charlie Whelan", "Lorry driver", "Character debut", "Occupations"]]

];

// Build all 100 quiz objects, keeping the existing answer rotation.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, specialistTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(701 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '1990s', year, topic, ...specialistTags])],
        dailyEligible: true
    };
});

// Validate the expanded exported questions, not just the source rows.
if (questions.length !== 100 || questions[0].id !== 'tv_0701' ||
    questions[99].id !== 'tv_0800' ||
    questions.filter(q => q.tags.includes('1992')).length !== 50 ||
    questions.filter(q => q.tags.includes('1993')).length !== 50) {
    throw new Error('Pack 167: incorrect question count, ID range or year split');
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
        !q.tags.includes('1990s') || !['1992', '1993'].some(y => q.tags.includes(y)) ||
        q.tags.length < 7 || q.dailyEligible !== true ||
        q.category !== 'Television') {
        throw new Error('Pack 167: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenWording.add(wording);
}

module.exports = questions;
