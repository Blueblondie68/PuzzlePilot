// quiz_pack165.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 1988 to 1989
// 100 questions: tv_0501 to tv_0600
// Wording and comprehensive tagging audit.
// Original IDs, correct answers, difficulty and daily eligibility preserved.
// quiz_bank.js is already connected and must remain unchanged.

// Each fact: question, correct answer, three distractors, difficulty, year, topic, specialist tags.
const facts = [

    // 1988
    ["Which factory worker did Mike Baldwin dismiss during a pay dispute at Baldwin's Casuals?", "Ida Clough", ["Vera Duckworth", "Ivy Tilsley", "Emily Bishop"], "Hard", "1988", "Baldwin's Casuals", ["Ida Clough", "Mike Baldwin", "Baldwin's Casuals", "Factory pay dispute"]],
    ["Who became the new supervisor at Baldwin's Casuals in January 1988?", "Connie Parker", ["Gloria Todd", "Alma Sedgewick", "Sandra Stubbs"], "Medium", "1988", "Baldwin's Casuals", ["Connie Parker", "Baldwin's Casuals", "Factory supervisor", "Factory workers"]],
    ["Which factory owner angered his machinists by cutting their pay?", "Mike Baldwin", ["Alf Roberts", "Ken Barlow", "Alan Bradley"], "Easy", "1988", "Baldwin's Casuals", ["Mike Baldwin", "Baldwin's Casuals", "Wage cuts", "Factory workers"]],
    ["Which pensioner persuaded Rita to give him a newspaper delivery round?", "Pensioner Harry Ashton", ["Mechanic Kevin Webster", "Councillor Alf Roberts", "Barmaid Gloria Todd"], "Hard", "1988", "The Kabin", ["Harry Ashton", "Rita Fairclough", "The Kabin", "Paper rounds"]],
    ["What was the name of elderly paperboy Harry Ashton's dog?", "Jimmy", ["Rover", "Lucky", "Schmeichel"], "Hard", "1988", "Animals", ["Harry Ashton", "Jimmy", "Dogs", "The Kabin", "Paperboy"]],
    ["Which couple planned to share the flat above the Corner Shop despite objections from Alf and Emily?", "Curly Watts and Shirley Armitage", ["Kevin and Sally Webster", "Brian and Gail Tilsley", "Derek Wilton and Mavis Riley"], "Medium", "1988", "Relationships", ["Curly Watts", "Shirley Armitage", "Corner Shop flat", "Alf Roberts", "Flatmates"]],
    ["What financial record caused problems when Kevin and Sally Webster applied for a mortgage?", "A county court judgement", ["An unpaid tax bill", "A gambling debt", "An overdue council rent payment"], "Hard", "1988", "Money", ["Kevin Webster", "Sally Webster", "Mortgage", "County court judgement"]],
    ["Which town did Curly Watts visit after his mother objected to his relationship with Shirley?", "Crewe", ["Bury", "Blackpool", "Bolton"], "Hard", "1988", "Locations", ["Curly Watts", "Shirley Armitage", "Crewe", "Watts family"]],
    ["Which of Shirley Armitage's relatives did Curly Watts look after?", "Her younger sister Lucy", ["Her mother", "Her cousin Sandra", "Her niece Tracy"], "Hard", "1988", "Families", ["Curly Watts", "Shirley Armitage", "Lucy Armitage", "Family"]],
    ["Which Coronation Street couple married each other for a second time in 1988?", "Gail and Brian Tilsley", ["Ken and Deirdre Barlow", "Kevin and Sally Webster", "Bet and Alec Gilroy"], "Easy", "1988", "Weddings", ["Gail Tilsley", "Brian Tilsley", "Second wedding", "Tilsley family"]],
    ["Where did Gail and Brian Tilsley hold their second wedding?", "A register office", ["All Saints Church", "The Rovers Return", "The Weatherfield Town Hall chamber"], "Medium", "1988", "Weddings", ["Gail Tilsley", "Brian Tilsley", "Register office", "Second wedding"]],
    ["To which country did Audrey Roberts travel to see the son she had given up for adoption?", "Canada", ["Australia", "Spain", "New Zealand"], "Medium", "1988", "Families", ["Audrey Roberts", "Stephen Reid", "Canada", "Adoption"]],
    ["What was the first name of Audrey Roberts' son, whose existence came to light in 1988?", "Stephen", ["Martin", "Simon", "Paul"], "Medium", "1988", "Families", ["Audrey Roberts", "Stephen Reid", "Reid family", "Adoption"]],
    ["How was Audrey Roberts' son Stephen related to Gail Tilsley?", "He was her half-brother", ["He was her cousin", "He was her nephew", "He was her stepfather"], "Medium", "1988", "Families", ["Stephen Reid", "Gail Tilsley", "Audrey Roberts", "Half-siblings"]],
    ["Which couple adopted Audrey Roberts' son Stephen?", "Malcolm and Joyce Reid", ["Alf and Renee Roberts", "Jack and Annie Walker", "Stan and Hilda Ogden"], "Hard", "1988", "Families", ["Stephen Reid", "Malcolm Reid", "Joyce Reid", "Adoption", "Reid family"]],
    ["What tragedy did Bet and Alec Gilroy experience after Bet became pregnant?", "Bet suffered a miscarriage", ["Alec was injured in a fire", "Bet lost her licence", "Their pub was demolished"], "Medium", "1988", "Storylines", ["Bet Gilroy", "Alec Gilroy", "Miscarriage", "Rovers Return"]],
    ["Which Rovers barmaid was dating Mike Baldwin when his involvement with Linda caused trouble?", "Gloria Todd", ["Ivy Tilsley", "Sally Webster", "Rita Fairclough"], "Medium", "1988", "Relationships", ["Mike Baldwin", "Gloria Todd", "Linda", "Affairs"]],
    ["Which woman left her husband Graham hoping to be with Mike Baldwin?", "Linda", ["Sandra", "Angela", "Dawn"], "Hard", "1988", "Relationships", ["Mike Baldwin", "Linda", "Graham", "Love triangles"]],
    ["Who was badly beaten by Graham and his associates?", "Mike Baldwin", ["Ken Barlow", "Alec Gilroy", "Curly Watts"], "Medium", "1988", "Storylines", ["Mike Baldwin", "Graham", "Assault", "Love triangles"]],
    ["Which line of work did Alan Bradley enter after leaving the video library?", "Burglar alarms", ["Taxi driving", "Window cleaning", "Motor repairs"], "Medium", "1988", "Businesses", ["Alan Bradley", "Burglar alarms", "Video library", "Security business"]],
    ["Who employed Alan Bradley fitting alarms before he set up his own business?", "Dave Craig", ["Maurice Jones", "George Wardle", "Harry Slinger"], "Hard", "1988", "Businesses", ["Alan Bradley", "Dave Craig", "Burglar alarms", "Security business"]],
    ["How much did Rita initially lend Alan Bradley for his alarm business?", "£6,000", ["£600", "£1,000", "£10,000"], "Hard", "1988", "Money", ["Alan Bradley", "Rita Fairclough", "£6,000 loan", "Security business"]],
    ["Which late resident's builder's yard did Rita let Alan Bradley use for his security business?", "Len Fairclough's", ["Stan Ogden's", "Albert Tatlock's", "Bert Tilsley's"], "Medium", "1988", "Businesses", ["Alan Bradley", "Rita Fairclough", "Len Fairclough", "Builder's yard", "Security business"]],
    ["Which customer became romantically involved with Alan Bradley while he was fitting alarms?", "Carole Burns", ["Wendy Crozier", "Dawn Prescott", "Shirley Armitage"], "Medium", "1988", "Relationships", ["Alan Bradley", "Carole Burns", "Burglar alarms", "Affairs"]],
    ["Which factory worker did Mike Baldwin sack after wrongly blaming her for reporting his drink-driving?", "Vera Duckworth", ["Ivy Tilsley", "Emily Bishop", "Gina Seddon"], "Medium", "1988", "Baldwin's Casuals", ["Mike Baldwin", "Vera Duckworth", "Baldwin's Casuals", "Drink-driving allegation"]],
    ["Who admitted to Mike Baldwin that she had reported his drink-driving?", "Ida Clough", ["Vera Duckworth", "Gloria Todd", "Bet Gilroy"], "Hard", "1988", "Storylines", ["Ida Clough", "Mike Baldwin", "Vera Duckworth", "Drink-driving report"]],
    ["Which woman took a cleaning job at the Rovers while looking after her son Jason?", "Sandra Stubbs", ["Tina Fowler", "Linda Baldwin", "Gina Seddon"], "Medium", "1988", "Rovers Return", ["Sandra Stubbs", "Jason Stubbs", "Rovers Return", "Cleaner", "Domestic abuse"]],
    ["What was the first name of Sandra Stubbs' son, who worked as a paperboy?", "Jason", ["Andy", "Darryl", "Simon"], "Hard", "1988", "Families", ["Sandra Stubbs", "Jason Stubbs", "Paperboy", "Stubbs family"]],
    ["What was the first name of Sandra Stubbs' violent estranged husband?", "Ronnie", ["Don", "Alan", "Graham"], "Hard", "1988", "Families", ["Sandra Stubbs", "Ronnie Stubbs", "Domestic abuse", "Stubbs family"]],
    ["Which pensioner moved in temporarily with Emily Bishop after losing his Community Centre flat?", "Percy Sugden", ["Sam Tindall", "Harry Ashton", "Fred Gee"], "Easy", "1988", "Characters", ["Percy Sugden", "Emily Bishop", "Community Centre", "Lodgers"]],
    ["What job did Percy Sugden take after leaving his role at the Community Centre?", "School-crossing patrol officer", ["Rovers potman", "Factory supervisor", "Taxi driver"], "Medium", "1988", "Occupations", ["Percy Sugden", "School-crossing patrol", "Lollipop man", "Occupations"]],
    ["On which Weatherfield street did Percy Sugden briefly have his own flat?", "Parliament Street", ["Rosamund Street", "Viaduct Street", "Victoria Street"], "Hard", "1988", "Locations", ["Percy Sugden", "Parliament Street", "Flats", "Community Centre"]],
    ["Which taxi driver married Ivy Tilsley in 1988?", "Don Brennan", ["George Wardle", "Jack Duckworth", "Bill Webster"], "Easy", "1988", "Weddings", ["Ivy Tilsley", "Don Brennan", "Ivy and Don wedding", "Taxi driver"]],
    ["Who gave Ivy Tilsley away at her wedding to Don Brennan?", "Brian Tilsley", ["Alf Roberts", "Percy Sugden", "Ken Barlow"], "Medium", "1988", "Weddings", ["Ivy Tilsley", "Don Brennan", "Brian Tilsley", "Ivy and Don wedding"]],
    ["Which of his alter egos did Jack Duckworth dress as after losing his suit on Ivy and Don's wedding day?", "Vince St Clair", ["Reg Holdsworth", "Victor Pendlebury", "Harry Ashton"], "Medium", "1988", "Weddings", ["Jack Duckworth", "Vince St Clair", "Ivy and Don wedding", "Wedding suit"]],
    ["Whose wedding ring was used when Jack Duckworth lost the ring at Ivy and Don's wedding?", "Bert Tilsley's", ["Stan Ogden's", "Len Fairclough's", "Jack Walker's"], "Hard", "1988", "Weddings", ["Jack Duckworth", "Bert Tilsley", "Ivy and Don wedding", "Wedding ring"]],
    ["Which member of the Barlow family took driving lessons in 1988?", "Deirdre Barlow", ["Tracy Barlow", "Susan Barlow", "Blanche Hunt"], "Medium", "1988", "Characters", ["Deirdre Barlow", "Driving lessons", "Barlow family"]],
    ["Which newspaper did Ken Barlow battle to keep publishing during a financial crisis?", "The Weatherfield Recorder", ["The Weatherfield Gazette", "The Daily Mirror", "The Weatherfield Advertiser"], "Medium", "1988", "Businesses", ["Ken Barlow", "Weatherfield Recorder", "Newspapers", "Business crisis"]],
    ["Whom did Jack Duckworth threaten to sue for compensation after a car accident?", "Vera Duckworth", ["Bet Gilroy", "Audrey Roberts", "Rita Fairclough"], "Medium", "1988", "Storylines", ["Jack Duckworth", "Vera Duckworth", "Car accident", "Compensation claim"]],
    ["Where did Don Brennan persuade Jack Duckworth to gamble with Vera's housekeeping money?", "A casino", ["A bingo hall", "The bookmakers", "A snooker club"], "Medium", "1988", "Storylines", ["Don Brennan", "Jack Duckworth", "Vera Duckworth", "Casino", "Gambling"]],
    ["What breed of dog did Bet Gilroy take in at the Rovers?", "An Alsatian", ["A greyhound", "A poodle", "A bulldog"], "Medium", "1988", "Animals", ["Bet Gilroy", "Rover", "Rovers Return", "Dogs", "Alsatian"]],
    ["What was the name of the stray Alsatian Bet Gilroy took in at the Rovers?", "Rover", ["Lucky", "Jimmy", "Bouncer"], "Medium", "1988", "Animals", ["Rover", "Bet Gilroy", "Rovers Return", "Dogs", "Alsatian"]],
    ["To which seaside resort did Don Brennan organise a coach outing?", "Blackpool", ["Scarborough", "Southport", "Morecambe"], "Medium", "1988", "Travel", ["Don Brennan", "Blackpool", "Coach outing", "Seaside trip"]],
    ["Which visitor from Canada caused tension between Audrey and Alf Roberts?", "Malcolm Reid", ["Stephen Reid", "Ian Latimer", "Patrice Podevin"], "Hard", "1988", "Relationships", ["Malcolm Reid", "Audrey Roberts", "Alf Roberts", "Canada", "Reid family"]],
    ["At which stationery firm did Mavis Riley discover Derek Wilton would be interviewing her?", "Barkers", ["Baldwin's Casuals", "Chuckles Novelties", "Newton & Ridley"], "Medium", "1988", "Occupations", ["Mavis Riley", "Derek Wilton", "Barkers", "Stationery firm", "Job interview"]],
    ["How did Derek Wilton propose to Mavis Riley when she refused to let him into The Kabin?", "Through the letterbox", ["By telegram", "Over the telephone", "With a newspaper advertisement"], "Medium", "1988", "Relationships", ["Derek Wilton", "Mavis Riley", "The Kabin", "Marriage proposal", "Letterbox"]],
    ["In which month of 1988 did Mavis Riley and Derek Wilton marry?", "November", ["February", "June", "September"], "Medium", "1988", "Weddings", ["Mavis Riley", "Derek Wilton", "Mavis and Derek wedding", "November"]],
    ["Where did Mavis and Derek Wilton spend their honeymoon?", "Paris", ["Rome", "Corfu", "Majorca"], "Medium", "1988", "Travel", ["Mavis Riley", "Derek Wilton", "Paris", "Honeymoon"]],
    ["Which man did Alec Gilroy book at the Old Bank Club as entertainer Vince St Clair?", "Jack Duckworth", ["Curly Watts", "Percy Sugden", "Ken Barlow"], "Hard", "1988", "Entertainment", ["Jack Duckworth", "Alec Gilroy", "Vince St Clair", "Old Bank Club", "Stage act"]],
    ["Which Rovers landlord was mugged and then suspected of making a dishonest insurance claim?", "Alec Gilroy", ["Jack Walker", "Billy Walker", "Fred Gee"], "Hard", "1988", "Storylines", ["Alec Gilroy", "Rovers Return", "Mugging", "Insurance claim"]],

    // 1989
    ["Which member of the Seddon family died following a lorry accident?", "Eddie Seddon", ["Gina Seddon", "Sally Webster", "Harry Clayton"], "Medium", "1989", "Families", ["Eddie Seddon", "Sally Webster", "Seddon family", "Lorry accident"]],
    ["Which deceased resident's identity did Alan Bradley use on mortgage paperwork?", "Len Fairclough", ["Bert Tilsley", "Stan Ogden", "Albert Tatlock"], "Medium", "1989", "Storylines", ["Alan Bradley", "Len Fairclough", "Mortgage fraud", "Identity theft"]],
    ["Which Coronation Street property did Alan Bradley fraudulently remortgage?", "Number 7 Coronation Street", ["Number 1 Coronation Street", "Number 9 Coronation Street", "Number 13 Coronation Street"], "Medium", "1989", "Locations", ["Alan Bradley", "Rita Fairclough", "No. 7", "Mortgage fraud"]],
    ["What was Alan Bradley's security company called?", "Weatherfield Security Systems", ["Bradley's Motor Services", "Weatherfield Alarm Centre", "Fairclough Building Services"], "Hard", "1989", "Businesses", ["Alan Bradley", "Weatherfield Security Systems", "Burglar alarms", "Business launch"]],
    ["Which secretary warned Rita Fairclough about suspicious letters arriving for Alan Bradley?", "Dawn Prescott", ["Wendy Crozier", "Carole Burns", "Tina Fowler"], "Medium", "1989", "Characters", ["Dawn Prescott", "Rita Fairclough", "Alan Bradley", "Suspicious correspondence"]],
    ["Who found proof in Alan Bradley's office that he had used Len Fairclough's identity?", "Rita Fairclough", ["Jenny Bradley", "Bet Gilroy", "Emily Bishop"], "Medium", "1989", "Storylines", ["Rita Fairclough", "Alan Bradley", "Len Fairclough", "Mortgage fraud"]],
    ["What did Alan Bradley try to smother Rita Fairclough with during his attack?", "A cushion", ["A blanket", "A pillowcase", "A scarf"], "Hard", "1989", "Storylines", ["Alan Bradley", "Rita Fairclough", "Violent assault", "Cushion"]],
    ["Which hospital treated Rita after Alan Bradley attacked her?", "Weatherfield General", ["Weatherfield Royal", "St Mary's Hospital", "Manchester Central Hospital"], "Medium", "1989", "Locations", ["Rita Fairclough", "Alan Bradley", "Weatherfield General", "Hospital"]],
    ["At which railway station did the police arrest Alan Bradley following his attack on Rita?", "Gatley", ["Victoria", "Piccadilly", "Stockport"], "Hard", "1989", "Storylines", ["Alan Bradley", "Gatley station", "Police arrest", "Assault"]],
    ["Who told Brian Tilsley that she wanted a divorce shortly before his death?", "Gail Tilsley", ["Ivy Brennan", "Audrey Roberts", "Alma Sedgewick"], "Easy", "1989", "Relationships", ["Gail Tilsley", "Brian Tilsley", "Divorce", "Tilsley family"]],
    ["Which Coronation Street character was fatally stabbed outside a disco in February 1989?", "Brian Tilsley", ["Terry Duckworth", "Kevin Webster", "Martin Platt"], "Easy", "1989", "Storylines", ["Brian Tilsley", "Fatal stabbing", "Disco", "Tilsley family"]],
    ["Which actress played Brian Tilsley's mother Ivy at the time of his death?", "Lynne Perrie", ["Helen Worth", "Sue Nicholls", "Barbara Knox"], "Medium", "1989", "Actors", ["Ivy Tilsley", "Lynne Perrie", "Brian Tilsley", "Casting"]],
    ["In which month of 1989 was Brian Tilsley's funeral held?", "February", ["April", "June", "October"], "Medium", "1989", "Storylines", ["Brian Tilsley", "Funeral", "Tilsley family"]],
    ["In which year did actor Christopher Quinten leave Coronation Street following the death of Brian Tilsley?", "1989", ["1986", "1991", "1994"], "Medium", "1989", "Actors", ["Christopher Quinten", "Brian Tilsley", "Actor departures"]],
    ["Which region did Alec Gilroy tour while working as an entertainments manager?", "The Middle East", ["South America", "Scandinavia", "Southern Africa"], "Hard", "1989", "Occupations", ["Alec Gilroy", "Middle East", "Entertainments manager", "Tour"]],
    ["Who became Kevin Webster's fellow mechanic at Tilsley's Garage in April 1989?", "Mark Casey", ["Martin Platt", "Terry Duckworth", "Reg Holdsworth"], "Medium", "1989", "Characters", ["Mark Casey", "Kevin Webster", "Tilsley's Garage", "Mechanics"]],
    ["Who was Mark Casey's father and the new owner of Tilsley's Garage?", "Tom Casey", ["Bill Webster", "Alf Roberts", "Don Brennan"], "Medium", "1989", "Families", ["Tom Casey", "Mark Casey", "Tilsley's Garage", "Casey family"]],
    ["Which character left Weatherfield after breaking up with Curly Watts?", "Shirley Armitage", ["Gina Seddon", "Tina Fowler", "Jenny Bradley"], "Medium", "1989", "Departures", ["Shirley Armitage", "Curly Watts", "Relationship breakdown", "Departures"]],
    ["Which greyhound did Don Brennan accept instead of payment for a taxi fare?", "Lucky", ["Rover", "Jimmy", "Bouncer"], "Medium", "1989", "Animals", ["Lucky", "Don Brennan", "Greyhound", "Taxi fare", "Dogs"]],
    ["Who handed over the greyhound Lucky to Don Brennan instead of paying his taxi fare?", "Harry Slinger", ["Jack Duckworth", "Reg Holdsworth", "Maurice Jones"], "Hard", "1989", "Characters", ["Harry Slinger", "Don Brennan", "Lucky", "Greyhound", "Taxi fare"]],
    ["Whom did Alec Gilroy suspect of having an affair with Paul Rigby?", "Bet Gilroy", ["Rita Fairclough", "Audrey Roberts", "Vera Duckworth"], "Medium", "1989", "Relationships", ["Alec Gilroy", "Bet Gilroy", "Paul Rigby", "Jealousy"]],
    ["Which factory owner began a relationship with Alma Sedgewick?", "Mike Baldwin", ["Ken Barlow", "Alf Roberts", "Alan Bradley"], "Easy", "1989", "Relationships", ["Mike Baldwin", "Alma Sedgewick", "Romance", "Baldwin family"]],
    ["Which woman arrived in Weatherfield in 1989 and became Ken Barlow's lover?", "Wendy Crozier", ["Carole Burns", "Dawn Prescott", "Linda Baldwin"], "Easy", "1989", "Relationships", ["Wendy Crozier", "Ken Barlow", "Affair", "Character debut"]],
    ["What nickname did Wendy Crozier earn in the council information-leak scandal?", "The Town Hall Mole", ["The Factory Spy", "The Kabin Informer", "The Recorder Robin"], "Medium", "1989", "Storylines", ["Wendy Crozier", "Town Hall Mole", "Weatherfield Council", "Information leaks"]],
    ["Who exposed Wendy Crozier as the source of the Weatherfield Council leaks?", "Deirdre Barlow", ["Rita Fairclough", "Vera Duckworth", "Bet Gilroy"], "Medium", "1989", "Storylines", ["Deirdre Barlow", "Wendy Crozier", "Town Hall Mole", "Council leaks"]],
    ["Which newspaper did Ken Barlow offer Wendy Crozier a job on after she lost her council position?", "The Weatherfield Recorder", ["The Weatherfield Gazette", "The Manchester Evening News", "The Sunday Express"], "Medium", "1989", "Businesses", ["Ken Barlow", "Wendy Crozier", "Weatherfield Recorder", "Council leaks"]],
    ["Who caught Ken Barlow kissing Wendy Crozier?", "Mike Baldwin", ["Alec Gilroy", "Curly Watts", "Brian Tilsley"], "Medium", "1989", "Storylines", ["Ken Barlow", "Wendy Crozier", "Mike Baldwin", "Affair discovered"]],
    ["What occasion was Wendy Crozier celebrating when she cooked dinner for Ken Barlow?", "His fiftieth birthday", ["His wedding anniversary", "His promotion", "New Year's Eve"], "Hard", "1989", "Storylines", ["Ken Barlow", "Wendy Crozier", "Fiftieth birthday", "Barlow family"]],
    ["Who began a relationship with widowed Gail Tilsley in 1989?", "Martin Platt", ["Mark Casey", "Curly Watts", "Terry Duckworth"], "Easy", "1989", "Relationships", ["Martin Platt", "Gail Tilsley", "Romance", "Platt family"]],
    ["To which road did Martin Platt move to live with Gail Tilsley?", "Hammond Road", ["Rosamund Street", "Buxton Close", "Parliament Street"], "Hard", "1989", "Locations", ["Martin Platt", "Gail Tilsley", "Hammond Road", "Cohabitation"]],
    ["Which builder bought Baldwin's Casuals from Mike Baldwin?", "Maurice Jones", ["Len Fairclough", "George Wardle", "Dave Craig"], "Medium", "1989", "Businesses", ["Maurice Jones", "Mike Baldwin", "Baldwin's Casuals", "Factory sale"]],
    ["What happened to the machinists after Mike Baldwin sold his factory to Maurice Jones?", "They were locked out", ["They received a pay rise", "They moved to a new plant", "They became shareholders"], "Medium", "1989", "Baldwin's Casuals", ["Maurice Jones", "Baldwin's Casuals", "Factory closure", "Locked out"]],
    ["Which community building was demolished alongside the former Baldwin's Casuals factory?", "The Community Centre", ["The Corner Shop", "The Kabin", "The Rovers Return"], "Medium", "1989", "Locations", ["Community Centre", "Baldwin's Casuals", "Demolition", "Factory site"]],
    ["Who confronted builder Maurice Jones over the factory workers' redundancy payments?", "Emily Bishop", ["Jenny Bradley", "Audrey Roberts", "Tracy Barlow"], "Medium", "1989", "Storylines", ["Emily Bishop", "Maurice Jones", "Baldwin's Casuals", "Redundancy pay"]],
    ["Which supermarket employed Curly Watts as a trainee assistant manager?", "Bettabuy", ["Freshco", "Costcutter", "Betterbuy's Bakery"], "Medium", "1989", "Businesses", ["Curly Watts", "Bettabuy", "Trainee assistant manager", "Supermarket"]],
    ["Which supermarket manager made his first appearance when Curly began working at Bettabuy?", "Reg Holdsworth", ["Fred Elliott", "Fred Gee", "Alf Roberts"], "Easy", "1989", "Characters", ["Reg Holdsworth", "Bettabuy", "Curly Watts", "Character debut"]],
    ["Which Bettabuy shop assistant arrived at the same time as manager Reg Holdsworth?", "Kimberley Taylor", ["Raquel Wolstenhulme", "Sally Seddon", "Shirley Armitage"], "Hard", "1989", "Characters", ["Kimberley Taylor", "Reg Holdsworth", "Bettabuy", "Shop assistant"]],
    ["Which married couple first appeared while viewing No. 11 Coronation Street?", "Jim and Liz McDonald", ["Jack and Vera Duckworth", "Alf and Audrey Roberts", "Kevin and Sally Webster"], "Easy", "1989", "Characters", ["Jim McDonald", "Liz McDonald", "No. 11", "McDonald family", "Character debuts"]],
    ["What were the first names of the McDonald twins who moved to Weatherfield in 1989?", "Steve and Andy", ["Jason and Simon", "Nick and David", "Kevin and Terry"], "Easy", "1989", "Families", ["Steve McDonald", "Andy McDonald", "McDonald family", "No. 11"]],
    ["Which house did the McDonald family move into when they first arrived in Coronation Street?", "Number 11", ["Number 1", "Number 7", "Number 13"], "Medium", "1989", "Locations", ["McDonald family", "No. 11", "Jim McDonald", "Liz McDonald"]],
    ["In which seaside town was missing Rita Fairclough found?", "Blackpool", ["Southport", "Scarborough", "Brighton"], "Easy", "1989", "Locations", ["Rita Fairclough", "Blackpool", "Disappearance", "Alan Bradley"]],
    ["What milestone did Coronation Street reach in December 1989 when Rita reappeared?", "Its 3,000th episode", ["Its 1,000th episode", "Its 25th birthday special", "Its first colour episode"], "Medium", "1989", "TV History", ["3000th episode", "Rita Fairclough", "Blackpool", "Programme milestones"]],
    ["How did Alan Bradley die while chasing Rita Fairclough through Blackpool?", "He was struck by a tram", ["He fell from a rooftop", "He was hit by a lorry", "He drowned in the sea"], "Easy", "1989", "Storylines", ["Alan Bradley", "Rita Fairclough", "Blackpool", "Tram death"]],
    ["Who identified Alan Bradley's body after his death?", "Jenny Bradley", ["Rita Fairclough", "Bet Gilroy", "Dawn Prescott"], "Medium", "1989", "Families", ["Jenny Bradley", "Alan Bradley", "Body identification", "Blackpool tram"]],
    ["Which member of Alan Bradley's family attended his funeral, supported by friends?", "Jenny Bradley", ["Rita Fairclough", "Carole Burns", "Wendy Crozier"], "Hard", "1989", "Storylines", ["Jenny Bradley", "Alan Bradley", "Funeral", "Martin Platt"]],
    ["Which couple argued after Vera discovered that Jack had taken barmaid Tina Fowler out?", "Jack and Vera Duckworth", ["Ken and Deirdre Barlow", "Don and Ivy Brennan", "Alf and Audrey Roberts"], "Medium", "1989", "Relationships", ["Jack Duckworth", "Vera Duckworth", "Tina Fowler", "Marriage row"]],
    ["Who was accidentally soaked when Vera threw a drink at Tina Fowler in the Rovers?", "Alec Gilroy", ["Jack Duckworth", "Curly Watts", "Bet Gilroy"], "Medium", "1989", "Rovers Return", ["Vera Duckworth", "Tina Fowler", "Alec Gilroy", "Rovers Return", "Thrown drink"]],
    ["Which company employed Derek Wilton to sell joke novelties?", "Chuckles Novelties", ["Barkers Stationery", "Newton & Ridley", "Baldwin's Casuals"], "Medium", "1989", "Occupations", ["Derek Wilton", "Chuckles Novelties", "Novelty salesman", "Jobs"]],
    ["What bad news did Derek Wilton receive on Christmas Day 1989?", "He had lost his job", ["Mavis had left him", "The Kabin had closed", "His house had been sold"], "Medium", "1989", "Storylines", ["Derek Wilton", "Christmas Day", "Job loss", "Mavis Wilton"]],
    ["What did Steve McDonald accidentally smash at the Corner Shop?", "A window with a football", ["The door with a bicycle", "The counter with a trolley", "A display case with a cricket ball"], "Medium", "1989", "Storylines", ["Steve McDonald", "Corner Shop", "Football", "Broken window"]]

];

// Build standard quiz objects with the original answer rotation.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, specialistTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(501 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '1980s', year, topic, ...specialistTags])],
        dailyEligible: true
    };
});

// Validate expanded exported questions, not just the source facts.
if (questions.length !== 100 || questions[0].id !== 'tv_0501' || questions[99].id !== 'tv_0600') {
    throw new Error('Pack 165: incorrect question count or ID range');
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
        !q.tags.includes('1980s') || !['1988', '1989'].some(y => q.tags.includes(y)) ||
        q.tags.length < 6 || q.dailyEligible !== true
    ) {
        throw new Error('Pack 165: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenWording.add(wording);
}

module.exports = questions;
