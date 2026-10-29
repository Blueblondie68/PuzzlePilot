// quiz_pack163.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - The Early 1980s (1980-1984)
// 100 questions: tv_0301 to tv_0400
// Wording and specialist-tag audit.
// All existing question IDs, answers, difficulty and daily eligibility preserved.
// quiz_bank.js is already connected and does not need changing.

// Each fact contains: question, correct answer, three alternatives,
// difficulty, exact year, topic and specialist tags.
const facts = [

    // 1980
    ["Which café was renamed Jim's Café?", "Dawson's Café", ["The Royle Café", "Rosamund Café", "The Corner Café"], "Medium", "1980", "Businesses", ["Dawson's Café", "Jim's Café", "Rosamund Street", "Cafés"]],
    ["Who bought Dawson's Café and renamed it Jim's Café?", "Jim Sedgewick", ["Alf Roberts", "Mike Baldwin", "Len Fairclough"], "Medium", "1980", "Businesses", ["Jim Sedgewick", "Dawson's Café", "Jim's Café", "Cafés"]],
    ["Which lorry driver caused a falling-out between Elsie Tanner and Bet Lynch?", "Dan Johnson", ["Bill Gregory", "Alan Howard", "Harry Redman"], "Hard", "1980", "Relationships", ["Elsie Tanner", "Bet Lynch", "Dan Johnson", "Love triangles"]],
    ["Where did Elsie Tanner and Bet Lynch confront each other over Dan Johnson?", "The Rovers Return", ["The Kabin", "Jim's Café", "Baldwin's Casuals"], "Medium", "1980", "Storylines", ["Elsie Tanner", "Bet Lynch", "Dan Johnson", "Rovers Return"]],
    ["What accidentally started a fire in Elsie Tanner's home?", "A lit cigarette", ["An electric heater", "A chip pan", "A faulty television"], "Medium", "1980", "Storylines", ["Elsie Tanner", "House fire", "No. 11", "Fire"]],
    ["Who helped rescue Elsie Tanner from her smoke-filled home?", "Hilda Ogden", ["Bet Lynch", "Emily Bishop", "Annie Walker"], "Medium", "1980", "Storylines", ["Elsie Tanner", "Hilda Ogden", "House fire", "No. 11"]],
    ["Which Coronation Street shopkeeper died following a car crash?", "Renee Roberts", ["Maggie Clegg", "Florrie Lindley", "Rita Fairclough"], "Medium", "1980", "Storylines", ["Renee Roberts", "Alf Roberts", "Road accident", "Corner Shop"]],
    ["What type of vehicle collided with the car in which Renee Roberts was fatally injured?", "A lorry", ["A motorcycle", "A bus", "A tram"], "Hard", "1980", "Storylines", ["Renee Roberts", "Alf Roberts", "Road accident", "Lorry"]],
    ["What was the name of Renee Roberts's mother, who blamed Alf for the crash?", "Daisy Hibbert", ["Blanche Hunt", "Eunice Nuttall", "Phyllis Pearce"], "Hard", "1980", "Families", ["Renee Roberts", "Daisy Hibbert", "Alf Roberts", "Roberts family"]],
    ["Who helped Alf Roberts run the Corner Shop after Renee's death?", "Deirdre Langton", ["Gail Tilsley", "Mavis Riley", "Ivy Tilsley"], "Medium", "1980", "Businesses", ["Alf Roberts", "Deirdre Langton", "Renee Roberts", "Corner Shop"]],
    ["Which man did Emily Bishop marry, only to discover that he was already married?", "Arnold Swain", ["Ernest Bishop", "Fred Gee", "Bill Gregory"], "Medium", "1980", "Relationships", ["Emily Bishop", "Arnold Swain", "Bigamy", "Swain family"]],
    ["What type of shop did Arnold Swain run when he met Emily Bishop?", "A pet shop", ["A flower shop", "A newsagent's", "A hardware shop"], "Medium", "1980", "Businesses", ["Arnold Swain", "Emily Bishop", "Pet shop", "Bigamy"]],
    ["Which Coronation Street mechanic was sacked for taking a customer's car without permission in 1980?", "Brian Tilsley", ["Kevin Webster", "Terry Duckworth", "Bill Webster"], "Medium", "1980", "Occupations", ["Brian Tilsley", "Tilsley family", "Garage", "Mechanics"]],
    ["To which road did Brian and Gail Tilsley move after leaving Ivy's home?", "Buxton Close", ["Rosamund Street", "Hammond Road", "Omdurman Street"], "Medium", "1980", "Locations", ["Gail Tilsley", "Brian Tilsley", "Buxton Close", "Tilsley family"]],
    ["Which baby was born to Gail and Brian Tilsley on New Year's Eve 1980?", "Nick Tilsley", ["David Platt", "Sarah-Louise Tilsley", "Terry Duckworth"], "Easy", "1980", "Families", ["Nick Tilsley", "Gail Tilsley", "Brian Tilsley", "Tilsley family", "Births"]],
    ["Which grandson of Elsie Tanner briefly lived at Number 11?", "Martin Cheveski", ["Nick Tilsley", "Craig Whitely", "Darren Barlow"], "Hard", "1980", "Families", ["Elsie Tanner", "Martin Cheveski", "No. 11", "Tanner family"]],
    ["Which new assistant did Mavis Riley employ at The Kabin in March 1980?", "Louise Clayton", ["Suzie Birchall", "Sharon Gaskell", "Marion Willis"], "Hard", "1980", "Businesses", ["Mavis Riley", "Louise Clayton", "The Kabin", "Newsagents"]],

    // 1981
    ["In which year did Ken Barlow and Deirdre Langton marry?", "1981", ["1978", "1983", "1985"], "Easy", "1981", "Weddings", ["Ken Barlow", "Deirdre Langton", "Barlow family", "Ken and Deirdre wedding"]],
    ["During which month of 1981 did Ken Barlow marry Deirdre Langton?", "July", ["March", "September", "December"], "Medium", "1981", "Weddings", ["Ken Barlow", "Deirdre Langton", "Barlow family", "Ken and Deirdre wedding"]],
    ["At which Weatherfield church did Ken Barlow and Deirdre Langton marry?", "All Saints", ["St. Luke's", "St. Peter's", "St. Mary's"], "Hard", "1981", "Weddings", ["Ken Barlow", "Deirdre Langton", "All Saints Church", "Ken and Deirdre wedding"]],
    ["Who was best man at Ken and Deirdre's wedding?", "Len Fairclough", ["Mike Baldwin", "Alf Roberts", "Fred Gee"], "Medium", "1981", "Weddings", ["Len Fairclough", "Ken Barlow", "Deirdre Langton", "Ken and Deirdre wedding"]],
    ["Where did Ken and Deirdre go on honeymoon after their wedding?", "Corfu", ["Majorca", "Malta", "Tenerife"], "Hard", "1981", "Weddings", ["Ken Barlow", "Deirdre Langton", "Corfu", "Ken and Deirdre wedding"]],
    ["Who appeared as the bride's daughter at Ken and Deirdre's wedding?", "Tracy Langton", ["Susan Barlow", "Jenny Bradley", "Debbie Webster"], "Easy", "1981", "Families", ["Tracy Langton", "Ken Barlow", "Deirdre Langton", "Ken and Deirdre wedding", "Langton family"]],
    ["Which character threatened Emily Bishop with a murder-suicide pact?", "Arnold Swain", ["Joe Donelli", "George Wardle", "Terry Goodwin"], "Medium", "1981", "Storylines", ["Arnold Swain", "Emily Bishop", "Threats", "Bigamy"]],
    ["Which actor played the bigamist Arnold Swain?", "George Waring", ["Peter Adamson", "Stephen Hancock", "Fred Feast"], "Hard", "1981", "Actors", ["Arnold Swain", "George Waring", "Bigamy", "Casting"]],
    ["Whom did Fred Gee marry in May 1981?", "Eunice Nuttall", ["Bet Lynch", "Betty Turpin", "Annie Walker"], "Medium", "1981", "Weddings", ["Fred Gee", "Eunice Nuttall", "Fred and Eunice wedding", "Rovers Return"]],
    ["Which actress played Eunice Nuttall, later Gee?", "Meg Johnson", ["Jill Summers", "Doris Speed", "Veronica Doran"], "Hard", "1981", "Actors", ["Eunice Nuttall", "Meg Johnson", "Fred Gee", "Casting"]],
    ["Which community building did Fred and Eunice Gee briefly look after as caretakers?", "The Community Centre", ["The Kabin", "The Rovers Return", "The Mission of Glad Tidings"], "Medium", "1981", "Occupations", ["Fred Gee", "Eunice Gee", "Community Centre", "Caretakers"]],
    ["Which teenager did Len and Rita Fairclough foster in 1981?", "John Spencer", ["Craig Whitely", "Terry Duckworth", "Martin Platt"], "Hard", "1981", "Families", ["John Spencer", "Len Fairclough", "Rita Fairclough", "Fostering"]],
    ["Which house number did Len Fairclough plan to rebuild in 1981?", "Number 7", ["Number 1", "Number 9", "Number 13"], "Medium", "1981", "Locations", ["Len Fairclough", "Number 7", "Building work", "Street houses"]],
    ["Which character, played by Amanda Barrie, was Elsie Tanner's boss at Jim's Café?", "Alma Sedgewick", ["Renee Roberts", "Blanche Hunt", "Phyllis Pearce"], "Medium", "1981", "Characters", ["Alma Sedgewick", "Amanda Barrie", "Elsie Tanner", "Jim's Café", "Casting"]],
    ["Which actress marked the start of construction of Coronation Street's new outdoor set?", "Doris Speed", ["Patricia Phoenix", "Julie Goodyear", "Violet Carson"], "Hard", "1981", "Production", ["Doris Speed", "New outdoor set", "Granada Television", "Behind the scenes"]],
    ["Which long-serving resident became romantically involved with Audrey Potter in 1981?", "Alf Roberts", ["Len Fairclough", "Mike Baldwin", "Fred Gee"], "Easy", "1981", "Relationships", ["Audrey Potter", "Alf Roberts", "Romance", "Roberts family"]],
    ["Which young actor first played Nick Tilsley as a baby?", "Warren Jackson", ["Christopher Quinten", "Mark Price", "Michael Le Vell"], "Hard", "1981", "Actors", ["Nick Tilsley", "Warren Jackson", "Tilsley family", "Child actors"]],

    // 1982
    ["Which member of the Royal Family officially opened Coronation Street's new outdoor set in 1982?", "Queen Elizabeth II", ["Princess Margaret", "The Princess Royal", "Queen Elizabeth The Queen Mother"], "Medium", "1982", "Production", ["Queen Elizabeth II", "New outdoor set", "Royal visit", "Granada Television"]],
    ["What year did Coronation Street begin using its new brick-built outdoor set?", "1982", ["1979", "1985", "1988"], "Medium", "1982", "Production", ["New outdoor set", "Granada Television", "Set history", "Production history"]],
    ["Which Coronation Street house was rebuilt as part of the new 1982 outdoor set?", "Number 7", ["Number 3", "Number 11", "Number 15"], "Medium", "1982", "Locations", ["Number 7", "New outdoor set", "Len Fairclough", "Street houses"]],
    ["Which couple moved into the rebuilt Number 7 Coronation Street?", "Len and Rita Fairclough", ["Ken and Deirdre Barlow", "Brian and Gail Tilsley", "Stan and Hilda Ogden"], "Medium", "1982", "Locations", ["Len Fairclough", "Rita Fairclough", "Number 7", "Fairclough family"]],
    ["Which new resident took over Number 9 after Len and Rita moved next door?", "Chalkie Whitely", ["Fred Gee", "Bill Webster", "Curly Watts"], "Hard", "1982", "Locations", ["Chalkie Whitely", "Number 9", "Len Fairclough", "Street houses"]],
    ["What was the name of Chalkie Whitely's young grandson who lived with him?", "Craig", ["Nick", "Terry", "John"], "Hard", "1982", "Families", ["Chalkie Whitely", "Craig Whitely", "Whitely family", "Number 9"]],
    ["Which actress played the gravel-voiced Phyllis Pearce?", "Jill Summers", ["Meg Johnson", "Veronica Doran", "Thelma Barlow"], "Medium", "1982", "Actors", ["Phyllis Pearce", "Jill Summers", "Casting"]],
    ["In which year did Phyllis Pearce make her first Coronation Street appearance?", "1982", ["1976", "1985", "1988"], "Hard", "1982", "History", ["Phyllis Pearce", "Character debuts", "New residents"]],
    ["Which teenage girl did Len and Rita Fairclough foster in 1982?", "Sharon Gaskell", ["Suzie Birchall", "Tricia Hopkins", "Jenny Bradley"], "Medium", "1982", "Families", ["Sharon Gaskell", "Len Fairclough", "Rita Fairclough", "Fostering"]],
    ["Who played teenage foster daughter Sharon Gaskell?", "Tracie Bennett", ["Sue Devaney", "Cheryl Murray", "Lynsay King"], "Hard", "1982", "Actors", ["Sharon Gaskell", "Tracie Bennett", "Fostering", "Casting"]],
    ["Which married man did Sharon Gaskell pursue while living with Len and Rita?", "Brian Tilsley", ["Ken Barlow", "Mike Baldwin", "Fred Gee"], "Hard", "1982", "Relationships", ["Sharon Gaskell", "Brian Tilsley", "Gail Tilsley", "Fostering", "Romance"]],
    ["To which English city did Sharon Gaskell move when she left the Faircloughs?", "Sheffield", ["Leeds", "Liverpool", "Birmingham"], "Hard", "1982", "Storylines", ["Sharon Gaskell", "Sheffield", "Fostering", "Departures"]],
    ["Which woman became romantically involved with Eddie Yeats?", "Marion Willis", ["Eunice Nuttall", "Phyllis Pearce", "Maggie Dunlop"], "Medium", "1982", "Relationships", ["Eddie Yeats", "Marion Willis", "Romance", "Yeats family"]],
    ["Which actress played Eddie Yeats's girlfriend Marion Willis?", "Veronica Doran", ["Jill Summers", "Sue Nicholls", "Meg Johnson"], "Hard", "1982", "Actors", ["Marion Willis", "Veronica Doran", "Eddie Yeats", "Casting"]],
    ["What false impression did Eddie Yeats initially give Marion Willis about his career?", "That he was a successful businessman", ["That he was a doctor", "That he was a police officer", "That he was a teacher"], "Medium", "1982", "Storylines", ["Eddie Yeats", "Marion Willis", "Binmen", "Misunderstandings"]],
    ["Which woman told Mike Baldwin that she was pregnant with his baby?", "Maggie Dunlop", ["Deirdre Barlow", "Bet Lynch", "Elsie Tanner"], "Medium", "1982", "Storylines", ["Maggie Dunlop", "Mike Baldwin", "Mark Redman", "Pregnancy", "Baldwin family"]],
    ["Whom did Maggie Dunlop marry late in 1982?", "Harry Redman", ["Mike Baldwin", "Brian Tilsley", "Len Fairclough"], "Hard", "1982", "Weddings", ["Maggie Dunlop", "Harry Redman", "Mike Baldwin", "Redman family"]],
    ["What did Ken Barlow tell Deirdre that upset her about their future together in 1982?", "He did not want another child", ["He wanted to move abroad", "He planned to retire", "He was selling Number 1"], "Medium", "1982", "Relationships", ["Ken Barlow", "Deirdre Barlow", "Barlow family", "Children"]],
    ["Which literature student joined Mavis Riley in a radio short-story competition?", "Victor Pendlebury", ["Derek Wilton", "Percy Sugden", "Curly Watts"], "Hard", "1982", "Storylines", ["Mavis Riley", "Victor Pendlebury", "Writing competition", "Literature"]],
    ["Which family employed Hilda Ogden as a cleaner in 1982?", "Doctor and Mrs Lowther", ["Ken and Deirdre Barlow", "Alf and Audrey Roberts", "Bill and Debbie Webster"], "Hard", "1982", "Occupations", ["Hilda Ogden", "Doctor and Mrs Lowther", "Cleaning", "Ogden family"]],

    // 1983
    ["What type of bet won Chalkie Whitely more than £3,500?", "A five-horse accumulator", ["Football pools", "The National Lottery", "A bingo jackpot"], "Hard", "1983", "Storylines", ["Chalkie Whitely", "Horse racing", "Accumulator bet", "Winnings"]],
    ["Which businessman had an affair with Deirdre Barlow while she was married to Ken?", "Mike Baldwin", ["Alf Roberts", "Len Fairclough", "Fred Gee"], "Easy", "1983", "Relationships", ["Mike Baldwin", "Deirdre Barlow", "Ken Barlow", "Deirdre and Mike affair"]],
    ["Whom did Deirdre decide to stay with after her affair with Mike Baldwin?", "Ken Barlow", ["Mike Baldwin", "Len Fairclough", "Alf Roberts"], "Easy", "1983", "Relationships", ["Deirdre Barlow", "Ken Barlow", "Mike Baldwin", "Deirdre and Mike affair"]],
    ["Who first discovered that Deirdre and Mike were seeing each other?", "Emily Bishop", ["Bet Lynch", "Hilda Ogden", "Rita Fairclough"], "Hard", "1983", "Storylines", ["Emily Bishop", "Deirdre Barlow", "Mike Baldwin", "Deirdre and Mike affair"]],
    ["Which resident became caretaker of the Community Centre in 1983?", "Percy Sugden", ["Curly Watts", "Fred Gee", "Alf Roberts"], "Medium", "1983", "Occupations", ["Percy Sugden", "Community Centre", "Caretakers"]],
    ["Which character returned to Coronation Street in 1983 after leaving in 1979?", "Suzie Birchall", ["Lucille Hewitt", "Minnie Caldwell", "Linda Cheveski"], "Medium", "1983", "Characters", ["Suzie Birchall", "Returning characters", "Gail Tilsley"]],
    ["Which estranged husband physically attacked Suzie Birchall?", "Terry Goodwin", ["Ray Langton", "Dan Johnson", "Alan Howard"], "Hard", "1983", "Storylines", ["Suzie Birchall", "Terry Goodwin", "Domestic violence"]],
    ["Whose car rolled into a lake during an outing with Bet Lynch and Betty Turpin?", "Fred Gee", ["Mike Baldwin", "Ken Barlow", "Alf Roberts"], "Medium", "1983", "Storylines", ["Fred Gee", "Bet Lynch", "Betty Turpin", "Car accident"]],
    ["Which fake name did Jack Duckworth use when secretly signing up to a video dating agency?", "Vince St. Clair", ["Ronnie Barker", "Steve Tanner", "Tony Parsons"], "Medium", "1983", "Storylines", ["Jack Duckworth", "Vince St. Clair", "Video dating", "Duckworth family"]],
    ["What was the name of the video dating agency Jack Duckworth secretly joined?", "Bill & Coo", ["Matchmaker International", "Date-A-Mate", "Cupid's Corner"], "Hard", "1983", "Storylines", ["Jack Duckworth", "Bill & Coo", "Video dating", "Duckworth family"]],
    ["Who turned up as Jack Duckworth's unsuspected date after his video dating scheme?", "Vera Duckworth", ["Bet Lynch", "Rita Fairclough", "Elsie Tanner"], "Medium", "1983", "Storylines", ["Jack Duckworth", "Vera Duckworth", "Video dating", "Duckworth family"]],
    ["Which future Coronation Street regular first appeared as a young binman?", "Curly Watts", ["Martin Platt", "Reg Holdsworth", "Percy Sugden"], "Medium", "1983", "Characters", ["Curly Watts", "Binmen", "Character debuts"]],
    ["Which actor played Curly Watts?", "Kevin Kennedy", ["Michael Le Vell", "Sean Wilson", "Mark Eden"], "Easy", "1983", "Actors", ["Curly Watts", "Kevin Kennedy", "Casting"]],
    ["Which Coronation Street couple married on 31 October 1983?", "Eddie Yeats and Marion Willis", ["Ken and Deirdre Barlow", "Fred and Eunice Gee", "Alf and Audrey Roberts"], "Medium", "1983", "Weddings", ["Eddie Yeats", "Marion Willis", "Eddie and Marion wedding"]],
    ["To which town did Eddie and Marion Yeats move after their wedding?", "Bury", ["Bolton", "Blackpool", "Rochdale"], "Medium", "1983", "Storylines", ["Eddie Yeats", "Marion Yeats", "Bury", "Departures"]],
    ["Who acted as a mother figure to Eddie Yeats at his wedding to Marion?", "Hilda Ogden", ["Annie Walker", "Mavis Riley", "Emily Bishop"], "Hard", "1983", "Relationships", ["Hilda Ogden", "Eddie Yeats", "Marion Willis", "Eddie and Marion wedding"]],
    ["Whose window-cleaning round did Eddie Yeats take over?", "Stan Ogden", ["Jack Duckworth", "Alf Roberts", "Fred Gee"], "Hard", "1983", "Businesses", ["Eddie Yeats", "Stan Ogden", "Window cleaning", "Ogden family"]],
    ["Which resident sold Number 1 Coronation Street to Ken Barlow?", "Albert Tatlock", ["Mike Baldwin", "Rita Fairclough", "Bill Webster"], "Medium", "1983", "Locations", ["Albert Tatlock", "Ken Barlow", "Number 1", "Property sale"]],
    ["Which daughter of Albert Tatlock objected to the sale of Number 1?", "Beattie Pearson", ["Linda Cheveski", "Susan Barlow", "Tricia Hopkins"], "Hard", "1983", "Families", ["Albert Tatlock", "Beattie Pearson", "Number 1", "Property sale", "Tatlock family"]],
    ["Which couple celebrated their ruby wedding anniversary on the night Len Fairclough died?", "Stan and Hilda Ogden", ["Ken and Deirdre Barlow", "Jack and Vera Duckworth", "Alf and Renee Roberts"], "Medium", "1983", "Storylines", ["Stan Ogden", "Hilda Ogden", "Ruby wedding anniversary", "Len Fairclough"]],
    ["What caused Len Fairclough's death in 1983?", "A road accident", ["A heart attack", "A fall from a ladder", "A factory fire"], "Easy", "1983", "Storylines", ["Len Fairclough", "Road accident", "Rita Fairclough", "Fairclough family"]],
    ["With whom had Len Fairclough been having an affair before his death?", "Marjorie Proctor", ["Bet Lynch", "Mavis Riley", "Phyllis Pearce"], "Hard", "1983", "Relationships", ["Len Fairclough", "Marjorie Proctor", "Rita Fairclough", "Affairs"]],
    ["Which long-standing Rovers landlady made her final screen appearance in 1983?", "Annie Walker", ["Bet Lynch", "Rita Fairclough", "Betty Turpin"], "Medium", "1983", "History", ["Annie Walker", "Rovers Return", "Departures", "Walker family"]],
    ["Which family moved into Number 9 Coronation Street in 1983?", "The Duckworths", ["The Websters", "The Barlows", "The Tilsleys"], "Easy", "1983", "Locations", ["Jack Duckworth", "Vera Duckworth", "Duckworth family", "Number 9"]],
    ["Which character discovered he was three years older than he had thought?", "Stan Ogden", ["Albert Tatlock", "Fred Gee", "Len Fairclough"], "Hard", "1983", "Storylines", ["Stan Ogden", "Birth certificate", "Ogden family"]],
    ["Who arrived on Coronation Street as a young mechanic in 1983?", "Kevin Webster", ["Martin Platt", "Curly Watts", "Terry Duckworth"], "Easy", "1983", "Characters", ["Kevin Webster", "Webster family", "Garage", "Character debuts"]],

    // 1984
    ["Which Coronation Street icon left Weatherfield for Portugal with Bill Gregory?", "Elsie Tanner", ["Annie Walker", "Rita Fairclough", "Emily Bishop"], "Easy", "1984", "Departures", ["Elsie Tanner", "Bill Gregory", "Portugal", "Departures"]],
    ["What type of business did Elsie Tanner plan to run in Portugal with Bill Gregory?", "A wine bar", ["A hotel", "A newsagent's", "A clothing factory"], "Medium", "1984", "Businesses", ["Elsie Tanner", "Bill Gregory", "Portugal", "Wine bar"]],
    ["At which bar did Elsie Tanner work shortly before leaving Weatherfield?", "The Tropicana", ["The Flying Horse", "The Queen Victoria", "The Woolpack"], "Hard", "1984", "Occupations", ["Elsie Tanner", "The Tropicana", "Bar work", "Departures"]],
    ["Which member of the Tilsley family died in January 1984?", "Bert Tilsley", ["Brian Tilsley", "Ivy Tilsley", "Nick Tilsley"], "Medium", "1984", "Storylines", ["Bert Tilsley", "Ivy Tilsley", "Brian Tilsley", "Tilsley family"]],
    ["Which original resident died while staying with his daughter Beattie Pearson?", "Albert Tatlock", ["Stan Ogden", "Frank Barlow", "Jack Walker"], "Medium", "1984", "Storylines", ["Albert Tatlock", "Beattie Pearson", "Tatlock family", "Original cast"]],
    ["Which resident bought Number 11 from Elsie Tanner's family?", "Bill Webster", ["Kevin Webster", "Mike Baldwin", "Percy Sugden"], "Medium", "1984", "Locations", ["Bill Webster", "Elsie Tanner", "Number 11", "Webster family"]],
    ["Which actor played builder Bill Webster when he arrived in Coronation Street?", "Peter Armitage", ["Michael Le Vell", "Bryan Mosley", "Peter Adamson"], "Medium", "1984", "Actors", ["Bill Webster", "Peter Armitage", "Webster family", "Casting"]],
    ["Which actress played Debbie Webster when she first arrived in Coronation Street?", "Sue Devaney", ["Sally Whittaker", "Tracie Bennett", "Jill Summers"], "Medium", "1984", "Actors", ["Debbie Webster", "Sue Devaney", "Webster family", "Casting"]],
    ["Who was Debbie Webster's older brother when the Websters arrived?", "Kevin Webster", ["Terry Duckworth", "Nick Tilsley", "Curly Watts"], "Easy", "1984", "Families", ["Debbie Webster", "Kevin Webster", "Webster family"]],
    ["What happened on Mavis Riley and Derek Wilton's planned wedding day?", "They both failed to turn up", ["The church flooded", "Derek married someone else", "The registrar went missing"], "Medium", "1984", "Weddings", ["Mavis Riley", "Derek Wilton", "Failed wedding", "Mavis and Derek"]],
    ["Which man was Mavis Riley due to marry in September 1984?", "Derek Wilton", ["Victor Pendlebury", "Percy Sugden", "Alf Roberts"], "Easy", "1984", "Relationships", ["Mavis Riley", "Derek Wilton", "Mavis and Derek", "Failed wedding"]],
    ["Which actor played the former soldier Percy Sugden?", "Bill Waddington", ["Peter Armitage", "Fred Feast", "Geoffrey Hughes"], "Medium", "1984", "Actors", ["Percy Sugden", "Bill Waddington", "Casting"]],
    ["Which two rival pubs competed in the Street's Pub Olympics?", "The Rovers Return and the Flying Horse", ["The Rovers Return and the Woolpack", "The Flying Horse and the Queen Victoria", "The Woolpack and the Queen Victoria"], "Medium", "1984", "Storylines", ["Rovers Return", "The Flying Horse", "Pub Olympics", "Rival pubs"]],
    ["Which character began an affair with Sally Waterman in 1984?", "Ken Barlow", ["Mike Baldwin", "Alf Roberts", "Bill Webster"], "Hard", "1984", "Relationships", ["Ken Barlow", "Sally Waterman", "Barlow family", "Affairs"]],
    ["Which resident died in hospital in 1984, leaving Hilda Ogden widowed?", "Stan Ogden", ["Eddie Yeats", "Fred Gee", "Percy Sugden"], "Easy", "1984", "Storylines", ["Stan Ogden", "Hilda Ogden", "Ogden family", "Bereavement"]],
    ["Which personal possession made Hilda Ogden break down after Stan's funeral?", "His spectacles", ["His cap", "His wedding ring", "His watch"], "Easy", "1984", "Storylines", ["Hilda Ogden", "Stan Ogden", "Spectacles", "Ogden family", "Bereavement"]],
    ["Which man returned to run the Rovers after Annie Walker's departure?", "Billy Walker", ["Alec Gilroy", "Fred Gee", "Jack Duckworth"], "Medium", "1984", "Rovers Return", ["Billy Walker", "Annie Walker", "Rovers Return", "Walker family"]],
    ["Which brewery bought back the Rovers licence from Billy Walker?", "Newton & Ridley", ["Baldwin's Casuals", "Boddingtons", "Hydes"], "Medium", "1984", "Rovers Return", ["Newton & Ridley", "Billy Walker", "Rovers Return", "Brewery"]],
    ["Which Rovers barmaid applied to become pub manager at the end of 1984?", "Bet Lynch", ["Betty Turpin", "Gloria Todd", "Suzie Birchall"], "Easy", "1984", "Rovers Return", ["Bet Lynch", "Rovers Return", "Pub management", "Barmaids"]],
    ["Who briefly acted as temporary manager of the Rovers in February 1984?", "Fred Gee", ["Martin Platt", "Terry Duckworth", "Ken Barlow"], "Medium", "1984", "Rovers Return", ["Fred Gee", "Rovers Return", "Pub management", "Temporary manager"]]

];

// Construct the live quiz objects with the original rotating answer positions.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, specialistTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(301 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '1980s', year, topic, ...specialistTags])],
        dailyEligible: true
    };
});

// Validate the exported questions, not merely the source facts.
if (questions.length !== 100 ||
    questions[0].id !== 'tv_0301' ||
    questions[99].id !== 'tv_0400') {
    throw new Error('Pack 163: incorrect question count or ID range');
}

const seenIds = new Set();
const seenWording = new Set();

for (const q of questions) {
    const wording = q.question.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
    if (
        seenIds.has(q.id) ||
        seenWording.has(wording) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        !q.tags.includes('Soaps') ||
        !q.tags.includes('Coronation Street') ||
        !q.tags.includes('1980s') ||
        !q.tags.some(t => /^198[0-4]$/.test(t)) ||
        q.tags.length < 6 ||
        q.dailyEligible !== true
    ) {
        throw new Error('Pack 163: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenWording.add(wording);
}

module.exports = questions;
