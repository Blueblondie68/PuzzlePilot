// quiz_pack170.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 1998 and 1999
// 100 questions: tv_1001 to tv_1100
// Wording and comprehensive specialist-tag audit.
// Original IDs, answers, difficulty and daily eligibility preserved.
// quiz_bank.js is already connected and must remain unchanged.

// Each entry: question, correct answer, three alternatives, difficulty, year, topic, specialist tags.
const facts = [

    // 1998
    ["Which actress first played Hayley Patterson in Coronation Street?", "Julie Hesmondhalgh", ["Angela Griffin", "Denise Welch", "Tracie Bennett"], "Medium", "1998", "Actors", ["Hayley Patterson", "Julie Hesmondhalgh", "Casting", "Character debut"]],
    ["At which supermarket did Hayley Patterson work when she first appeared?", "Firman's Freezers", ["Bettabuy", "Freshco", "Costcutter"], "Medium", "1998", "Businesses", ["Hayley Patterson", "Firman's Freezers", "Supermarket worker", "Character debut"]],
    ["Which café owner began a relationship with Hayley Patterson?", "Roy Cropper", ["Des Barnes", "Curly Watts", "Ashley Peacock"], "Easy", "1998", "Relationships", ["Roy Cropper", "Hayley Patterson", "Roy and Hayley", "Romance", "Roy's Rolls"]],
    ["Who told Roy Cropper she was transgender shortly after they met?", "Hayley Patterson", ["Samantha Failsworth", "Fiona Middleton", "Natalie Horrocks"], "Easy", "1998", "Storylines", ["Hayley Patterson", "Roy Cropper", "Transgender disclosure", "Roy and Hayley"]],
    ["To which European city did Roy Cropper travel to find Hayley?", "Amsterdam", ["Paris", "Brussels", "Berlin"], "Medium", "1998", "Travel", ["Roy Cropper", "Hayley Patterson", "Amsterdam", "Netherlands", "Reconciliation"]],
    ["Why was Hayley Patterson stopped at passport control on her return to Britain?", "Her passport still recorded her as male", ["Her passport had expired", "She had lost her airline ticket", "Her luggage contained banned goods"], "Medium", "1998", "Storylines", ["Hayley Patterson", "Roy Cropper", "Manchester Airport", "Passport", "Transgender identity"]],
    ["Which clothing factory took Hayley Patterson on as a machinist?", "Underworld", ["Baldwin's Casuals", "Gamma Garments", "Phoenix Casuals"], "Easy", "1998", "Businesses", ["Hayley Patterson", "Underworld", "Factory machinist", "Clothing factory"]],
    ["Which factory boss dismissed Hayley Patterson because she was transgender?", "Mike Baldwin", ["Fred Elliott", "Reg Holdsworth", "Ken Barlow"], "Medium", "1998", "Storylines", ["Mike Baldwin", "Hayley Patterson", "Underworld", "Dismissal", "Transgender discrimination"]],
    ["What did Roy Cropper throw over Mike Baldwin during an argument about Hayley?", "A pint of beer", ["A cup of tea", "A bowl of soup", "A glass of wine"], "Medium", "1998", "Comedy", ["Roy Cropper", "Mike Baldwin", "Hayley Patterson", "Pint of beer", "Rovers Return"]],
    ["Who moved into Roy Cropper's flat?", "Hayley Patterson", ["Deirdre Rachid", "Alma Baldwin", "Rita Sullivan"], "Medium", "1998", "Homes", ["Hayley Patterson", "Roy Cropper", "Cohabitation", "Flat", "Roy and Hayley"]],
    ["Which young couple secretly married in Scotland?", "Nick Tilsley and Leanne Battersby", ["Steve McDonald and Fiona Middleton", "Des Barnes and Samantha Failsworth", "Ashley Peacock and Zoe Tattersall"], "Easy", "1998", "Weddings", ["Nick Tilsley", "Leanne Battersby", "Kirkcudbright", "Secret wedding", "Tilsley family"]],
    ["In which Scottish town did Nick Tilsley and Leanne Battersby marry?", "Kirkcudbright", ["Gretna Green", "Dumfries", "Ayr"], "Hard", "1998", "Weddings", ["Nick Tilsley", "Leanne Battersby", "Kirkcudbright", "Scotland", "Wedding"]],
    ["Who gave Leanne Tilsley a job at The Kabin after her secret wedding?", "Rita Sullivan", ["Emily Bishop", "Betty Williams", "Audrey Roberts"], "Medium", "1998", "The Kabin", ["Leanne Tilsley", "Rita Sullivan", "The Kabin", "Newsagent", "Employment"]],
    ["Which member of Nick Tilsley's family discovered his secret marriage?", "Gail Platt", ["Audrey Roberts", "Sarah-Louise Platt", "Ivy Brennan"], "Easy", "1998", "Families", ["Gail Platt", "Nick Tilsley", "Leanne Battersby", "Secret wedding", "Platt family"]],
    ["What illness caused the death of Zoe Tattersall's baby Shannon?", "Meningitis", ["Measles", "Pneumonia", "Whooping cough"], "Medium", "1998", "Storylines", ["Zoe Tattersall", "Shannon Tattersall", "Meningitis", "Child death", "Mallett family"]],
    ["Which teenage mother lost her baby daughter Shannon?", "Zoe Tattersall", ["Leanne Tilsley", "Tricia Armstrong", "Fiona Middleton"], "Medium", "1998", "Families", ["Zoe Tattersall", "Shannon Tattersall", "Baby death", "Meningitis"]],
    ["Which long-running Coronation Street resident was wrongly convicted of fraud?", "Deirdre Rachid", ["Alma Baldwin", "Rita Sullivan", "Liz McDonald"], "Easy", "1998", "Storylines", ["Deirdre Rachid", "The Weatherfield One", "Wrongful conviction", "Fraud", "Prison"]],
    ["Which conman framed Deirdre Rachid for fraud?", "Jon Lindsay", ["Greg Kelly", "Fraser Henderson", "Alan McKenna"], "Easy", "1998", "Crime", ["Jon Lindsay", "Deirdre Rachid", "Fraud", "Conman", "Wrongful conviction"]],
    ["What prison sentence did Deirdre Rachid receive after her wrongful fraud conviction?", "Eighteen months", ["Six months", "Three years", "Five years"], "Medium", "1998", "Crime", ["Deirdre Rachid", "Fraud trial", "Eighteen-month sentence", "Wrongful conviction", "The Weatherfield One"]],
    ["What was the name of the prison where Deirdre Rachid was held?", "Redford Prison", ["Strangeways", "Holloway", "Weatherfield Open Prison"], "Medium", "1998", "Crime", ["Deirdre Rachid", "Redford Prison", "Wrongful imprisonment", "The Weatherfield One"]],
    ["Which woman shared Deirdre Rachid's prison cell?", "Jackie Dobbs", ["Anne Malone", "Maud Grimes", "Tanya Pooley"], "Medium", "1998", "Characters", ["Deirdre Rachid", "Jackie Dobbs", "Redford Prison", "Prison cellmates"]],
    ["Which actress played Deirdre Rachid's cellmate Jackie Dobbs?", "Margi Clarke", ["Sherrie Hewson", "Denise Black", "Gaynor Faye"], "Medium", "1998", "Actors", ["Jackie Dobbs", "Margi Clarke", "Deirdre Rachid", "Casting", "Redford Prison"]],
    ["Which previous victim of Jon Lindsay came forward with evidence to help clear Deirdre?", "Mary Docherty", ["Linda Sykes", "Sharon Gaskell", "Claire Palmer"], "Medium", "1998", "Storylines", ["Mary Docherty", "Jon Lindsay", "Deirdre Rachid", "Evidence", "Fraud case"]],
    ["What unusual job did Ken Barlow take while struggling financially?", "Male escort", ["Nightclub bouncer", "Taxi driver", "Market trader"], "Medium", "1998", "Occupations", ["Ken Barlow", "Male escort", "Financial troubles", "Employment"]],
    ["In which month of 1998 was Deirdre Rachid released on bail following her wrongful conviction?", "April", ["February", "July", "November"], "Medium", "1998", "Storylines", ["Deirdre Rachid", "April release", "Bail", "The Weatherfield One", "Wrongful conviction"]],
    ["Which character arrived and later became Sally Webster's abusive boyfriend?", "Greg Kelly", ["Jez Quigley", "Danny Hargreaves", "Vinny Sorrell"], "Medium", "1998", "Arrivals", ["Greg Kelly", "Sally Webster", "Abusive relationship", "Character debut"]],
    ["Which Battersby man was revealed to be Greg Kelly's father?", "Les Battersby", ["Steve McDonald", "Mike Baldwin", "Fred Elliott"], "Medium", "1998", "Families", ["Greg Kelly", "Les Battersby", "Battersby family", "Parentage"]],
    ["Which actor played Greg Kelly?", "Stephen Billington", ["Matthew Marsden", "Adam Rickitt", "Lee Boardman"], "Hard", "1998", "Actors", ["Greg Kelly", "Stephen Billington", "Casting", "Villains"]],
    ["Which married resident began an affair with Greg Kelly?", "Sally Webster", ["Gail Platt", "Alma Baldwin", "Judy Mallett"], "Easy", "1998", "Relationships", ["Sally Webster", "Greg Kelly", "Kevin Webster", "Affair", "Marriage breakdown"]],
    ["Who stood against Audrey Roberts in the Weatherfield council election?", "Spider Nugent", ["Ken Barlow", "Alf Roberts", "Les Battersby"], "Medium", "1998", "Politics", ["Audrey Roberts", "Spider Nugent", "Weatherfield Council", "Council elections"]],
    ["By how many votes did Audrey Roberts beat Spider Nugent in the 1998 council election?", "Seven", ["Three", "Twenty", "Fifty"], "Hard", "1998", "Politics", ["Audrey Roberts", "Spider Nugent", "Seven votes", "Weatherfield Council", "Election result"]],
    ["From which decade did Audrey Roberts use old photographs on her election posters?", "The 1960s", ["The 1950s", "The 1970s", "The 1980s"], "Medium", "1998", "Comedy", ["Audrey Roberts", "Election posters", "1960s photographs", "Weatherfield Council"]],
    ["What caused Rita Sullivan to collapse in her flat?", "Carbon monoxide poisoning", ["A gas explosion", "Food poisoning", "An electric shock"], "Medium", "1998", "Storylines", ["Rita Sullivan", "Carbon monoxide poisoning", "Flat", "Medical emergency"]],
    ["Which Battersby teenager made a hoax bomb threat to a magazine?", "Toyah Battersby", ["Leanne Battersby", "Tracy Barlow", "Rosie Webster"], "Medium", "1998", "Storylines", ["Toyah Battersby", "Magazine", "Hoax bomb threat", "Battersby family"]],
    ["Who gave Toyah Battersby extra English lessons?", "Ken Barlow", ["Curly Watts", "Martin Platt", "Roy Cropper"], "Easy", "1998", "Education", ["Toyah Battersby", "Ken Barlow", "English lessons", "Education", "Tutoring", "Battersby family"]],
    ["What was the name of Toyah Battersby's biological father, whom she tried to find?", "Ronnie Clegg", ["Les Battersby", "Greg Kelly", "Colin Barnes"], "Medium", "1998", "Families", ["Toyah Battersby", "Ronnie Clegg", "Les Battersby", "Biological father", "Battersby family"]],
    ["Which man held Toyah Battersby captive in London after she mistook him for her father?", "Neil Flynn", ["Jon Lindsay", "Greg Kelly", "Chris Collins"], "Medium", "1998", "Crime", ["Toyah Battersby", "Neil Flynn", "London", "Kidnapping", "False identity"]],
    ["In which forest was the runaway Toyah Battersby found?", "Epping Forest", ["Sherwood Forest", "Delamere Forest", "Wyre Forest"], "Medium", "1998", "Locations", ["Toyah Battersby", "Epping Forest", "Runaway", "Rescue"]],
    ["Which Freshco employee was falsely implicated in an extortion plot by Anne Malone?", "Curly Watts", ["Reg Holdsworth", "Vera Duckworth", "Roy Cropper"], "Medium", "1998", "Crime", ["Curly Watts", "Anne Malone", "Freshco", "Extortion", "False accusation"]],
    ["Where was Anne Malone found dead after being locked in overnight?", "A supermarket freezer room", ["The Rovers cellar", "The Weatherfield Canal", "A factory storeroom"], "Medium", "1998", "Storylines", ["Anne Malone", "Freshco", "Freezer death", "Supermarket", "Accidental death"]],
    ["Which supermarket was the setting for Anne Malone's fatal freezer incident?", "Freshco", ["Bettabuy", "Firman's Freezers", "Costcutter"], "Medium", "1998", "Businesses", ["Anne Malone", "Freshco", "Freezer room", "Supermarket death"]],
    ["What name did Fiona Middleton give her baby son?", "Morgan", ["Brad", "Daniel", "Simon"], "Easy", "1998", "Families", ["Fiona Middleton", "Morgan Middleton", "Alan McKenna", "Birth", "Middleton family"]],
    ["Who was the biological father of Fiona Middleton's son Morgan?", "Alan McKenna", ["Jim McDonald", "Steve McDonald", "Tony Horrocks"], "Medium", "1998", "Families", ["Fiona Middleton", "Morgan Middleton", "Alan McKenna", "Paternity", "Middleton family"]],
    ["Which garage mechanic did Samantha Failsworth have an affair with while dating Des Barnes?", "Chris Collins", ["Kevin Webster", "Ashley Peacock", "Martin Platt"], "Medium", "1998", "Relationships", ["Samantha Failsworth", "Chris Collins", "Des Barnes", "Affair", "Garage"]],
    ["Which woman married Des Barnes?", "Natalie Horrocks", ["Samantha Failsworth", "Sally Webster", "Tricia Armstrong"], "Easy", "1998", "Weddings", ["Natalie Horrocks", "Des Barnes", "Register office", "Wedding", "Barnes family"]],
    ["Which resident died following an attack by drug dealers?", "Des Barnes", ["Don Brennan", "Jim McDonald", "Alec Gilroy"], "Easy", "1998", "Storylines", ["Des Barnes", "Jez Quigley", "Drug dealers", "Fatal assault", "Death"]],
    ["Which teenage son of Jackie Dobbs made his first appearance?", "Tyrone Dobbs", ["Jason Grimshaw", "Kirk Sutherland", "Craig Harris"], "Easy", "1998", "Arrivals", ["Tyrone Dobbs", "Jackie Dobbs", "Character debut", "Dobbs family"]],
    ["Which woman arrived in Weatherfield as Tyrone Dobbs's mother?", "Jackie Dobbs", ["Janice Battersby", "Tricia Armstrong", "Judy Mallett"], "Medium", "1998", "Families", ["Jackie Dobbs", "Tyrone Dobbs", "Dobbs family", "Character return"]],
    ["What were the first names of Gary and Judy Mallett's twins, born on Christmas Day 1998?", "Billy and Becky", ["Tommy and Amy", "Rosie and Sophie", "Jamie and Shannon"], "Medium", "1998", "Families", ["Gary Mallett", "Judy Mallett", "Billy Mallett", "Becky Mallett", "Twins", "Christmas birth"]],
    ["Who bought the Rovers Return from Alec Gilroy?", "Natalie Barnes", ["Bet Gilroy", "Fred Elliott", "Vera Duckworth"], "Easy", "1998", "Rovers Return", ["Natalie Barnes", "Alec Gilroy", "Rovers Return", "Pub sale", "Landlady"]],

    // 1999
    ["Which former Mayor of Weatherfield died?", "Alf Roberts", ["Fred Elliott", "Percy Sugden", "Alec Gilroy"], "Easy", "1999", "Storylines", ["Alf Roberts", "Audrey Roberts", "Former mayor", "Death", "Roberts family"]],
    ["At whose eighteenth-birthday party was Alf Roberts found dead?", "Nick Tilsley's", ["David Platt's", "Steve McDonald's", "Andy McDonald's"], "Medium", "1999", "Families", ["Alf Roberts", "Nick Tilsley", "Birthday party", "New Year's Eve", "Roberts family"]],
    ["What caused Alf Roberts's death?", "A stroke", ["A heart attack", "A road accident", "A fall down stairs"], "Medium", "1999", "Storylines", ["Alf Roberts", "Stroke", "Audrey Roberts", "Death", "Roberts family"]],
    ["Which Coronation Street resident was widowed by Alf Roberts's death?", "Audrey Roberts", ["Rita Sullivan", "Emily Bishop", "Betty Williams"], "Easy", "1999", "Families", ["Audrey Roberts", "Alf Roberts", "Widowhood", "Roberts family"]],
    ["Which former foster daughter of Rita Sullivan returned to Weatherfield?", "Sharon Gaskell", ["Jenny Bradley", "Tracy Barlow", "Denise Osbourne"], "Medium", "1999", "Returns", ["Sharon Gaskell", "Rita Sullivan", "Foster daughter", "Character return"]],
    ["Which actress returned to play Sharon Gaskell in Coronation Street?", "Tracie Bennett", ["Denise Black", "Gaynor Faye", "Tina Hobley"], "Medium", "1999", "Actors", ["Sharon Gaskell", "Tracie Bennett", "Casting", "Character return"]],
    ["Which Weatherfield newsagent did Rita Sullivan offer to give Sharon Gaskell?", "The Kabin", ["The Corner Shop", "The Rovers Return", "Roy's Rolls"], "Easy", "1999", "Businesses", ["Rita Sullivan", "Sharon Gaskell", "The Kabin", "Newsagent", "Business gift"]],
    ["Which man was Sharon Gaskell planning to marry?", "Ian Bentley", ["Danny Hargreaves", "Greg Kelly", "Steve McDonald"], "Medium", "1999", "Relationships", ["Sharon Gaskell", "Ian Bentley", "Engagement", "Cancelled wedding"]],
    ["With which Rovers landlady had Ian Bentley been having an affair?", "Natalie Barnes", ["Bet Gilroy", "Liz McDonald", "Vera Duckworth"], "Medium", "1999", "Relationships", ["Ian Bentley", "Natalie Barnes", "Sharon Gaskell", "Affair", "Rovers Return"]],
    ["What did Sharon Gaskell do at her planned church wedding before she eventually married Ian Bentley?", "Called off the ceremony", ["Married someone else", "Left with the best man", "Fainted at the altar"], "Medium", "1999", "Weddings", ["Sharon Gaskell", "Ian Bentley", "Abandoned wedding", "Church ceremony"]],
    ["In which month of 1999 did Sharon Gaskell finally marry Ian Bentley?", "November", ["March", "July", "December"], "Medium", "1999", "Weddings", ["Sharon Gaskell", "Ian Bentley", "November wedding", "Register office"]],
    ["Which new shopkeeper took over the Corner Shop?", "Ravi Desai", ["Dev Alahan", "Fred Elliott", "Brendan Scott"], "Medium", "1999", "Businesses", ["Ravi Desai", "Corner Shop", "Desai family", "Shopkeeper", "Business takeover"]],
    ["Which daughter of Ravi Desai later became manager at Freshco?", "Nita Desai", ["Leanne Tilsley", "Fiona Middleton", "Sharon Gaskell"], "Medium", "1999", "Occupations", ["Nita Desai", "Ravi Desai", "Freshco", "Management", "Desai family"]],
    ["Which son of Ravi Desai helped run the Corner Shop?", "Vikram Desai", ["Dev Alahan", "Nick Tilsley", "Greg Kelly"], "Medium", "1999", "Families", ["Vikram Desai", "Ravi Desai", "Corner Shop", "Desai family", "Shop assistant"]],
    ["Which future Corner Shop owner made his Coronation Street debut?", "Dev Alahan", ["Roy Cropper", "Fred Elliott", "Reg Holdsworth"], "Easy", "1999", "Arrivals", ["Dev Alahan", "Corner Shop", "Character debut", "Businessman"]],
    ["Which actor first played Dev Alahan in Coronation Street?", "Jimmi Harkishin", ["Saeed Jaffrey", "Chris Bisson", "Ameet Chana"], "Medium", "1999", "Actors", ["Dev Alahan", "Jimmi Harkishin", "Casting", "Character debut"]],
    ["Which couple held a wedding ceremony that was not legally recognised at the time?", "Roy and Hayley Cropper", ["Nick and Leanne Tilsley", "Ashley and Maxine Peacock", "Ken and Deirdre Barlow"], "Easy", "1999", "Weddings", ["Roy Cropper", "Hayley Patterson", "Roy and Hayley wedding", "Transgender rights", "Commitment ceremony"]],
    ["Where did Roy and Hayley hold their first wedding ceremony?", "In the café", ["At the Rovers Return", "In the Town Hall", "At St Christopher's Church"], "Medium", "1999", "Weddings", ["Roy Cropper", "Hayley Patterson", "Roy's Rolls", "Cafe wedding", "Commitment ceremony"]],
    ["Why was Roy and Hayley's first wedding ceremony not legally recognised?", "The law did not recognise Hayley as female", ["Neither had reached legal marrying age", "They had not given notice of marriage", "The officiant's licence had expired"], "Medium", "1999", "Weddings", ["Roy Cropper", "Hayley Patterson", "Legal recognition", "Transgender law", "Marriage"]],
    ["Which Battersby resident alerted the press about Roy and Hayley's planned wedding?", "Les Battersby", ["Janice Battersby", "Toyah Battersby", "Leanne Tilsley"], "Medium", "1999", "Storylines", ["Les Battersby", "Roy Cropper", "Hayley Patterson", "Weatherfield Gazette", "Wedding publicity"]],
    ["At which pub did Roy Cropper propose to Hayley during a 1970s-themed party?", "The Flying Horse", ["The Rovers Return", "The Queens", "The White Swan"], "Hard", "1999", "Relationships", ["Roy Cropper", "Hayley Patterson", "The Flying Horse", "1970s disco", "Marriage proposal"]],
    ["Which couple married shortly before Judy Mallett's death?", "Ashley Peacock and Maxine Heavey", ["Roy Cropper and Hayley Patterson", "Fred Elliott and Audrey Roberts", "Steve McDonald and Vicky Arden"], "Easy", "1999", "Weddings", ["Ashley Peacock", "Maxine Heavey", "Wedding", "Judy Mallett", "Peacock family"]],
    ["At which church did Ashley Peacock and Maxine Heavey marry?", "St Christopher's", ["St Mary's", "St Luke's", "St Peter's"], "Medium", "1999", "Weddings", ["Ashley Peacock", "Maxine Heavey", "St Christopher's Church", "Wedding"]],
    ["Which butcher revealed that he was Ashley Peacock's biological father?", "Fred Elliott", ["Alf Roberts", "Mike Baldwin", "Reg Holdsworth"], "Easy", "1999", "Families", ["Fred Elliott", "Ashley Peacock", "Paternity revelation", "Butchers", "Peacock family"]],
    ["What was the name of Ashley Peacock's birth mother?", "Kathleen Gutteridge", ["Doreen Heavey", "Maud Grimes", "Claire Palmer"], "Medium", "1999", "Families", ["Ashley Peacock", "Kathleen Gutteridge", "Fred Elliott", "Birth mother", "Family reunion"]],
    ["Whose proposal of marriage did Audrey Roberts turn down?", "Fred Elliott's", ["Ken Barlow's", "Jack Duckworth's", "Roy Cropper's"], "Medium", "1999", "Relationships", ["Audrey Roberts", "Fred Elliott", "Marriage proposal", "Rejection"]],
    ["What was the first name of Maxine Heavey's mother, who visited?", "Doreen", ["Maureen", "Joyce", "Kathleen"], "Medium", "1999", "Families", ["Maxine Heavey", "Doreen Heavey", "Heavey family", "Mother and daughter"]],
    ["What was the first name of Maxine Heavey's father?", "Derek", ["Don", "Dennis", "David"], "Medium", "1999", "Families", ["Maxine Heavey", "Derek Heavey", "Heavey family", "Father and daughter"]],
    ["Which young mother of twins died suddenly?", "Judy Mallett", ["Sally Webster", "Tricia Armstrong", "Zoe Tattersall"], "Easy", "1999", "Storylines", ["Judy Mallett", "Gary Mallett", "Billy Mallett", "Becky Mallett", "Sudden death"]],
    ["What caused Judy Mallett's sudden death?", "An embolism following a leg injury", ["A fall from a ladder", "An infection after childbirth", "A severe asthma attack"], "Medium", "1999", "Storylines", ["Judy Mallett", "Embolism", "Leg injury", "Car park accident", "Death"]],
    ["Which Duckworth sold Vera the unsafe car involved in the incident that preceded Judy Mallett's death?", "Terry Duckworth", ["Jack Duckworth", "Cliff Duckworth", "Tommy Duckworth"], "Medium", "1999", "Storylines", ["Terry Duckworth", "Vera Duckworth", "Unsafe car", "Cut-and-shut", "Judy Mallett"]],
    ["At which supermarket was Vera Duckworth parked when her car was hit in the incident that preceded Judy Mallett's death?", "Freshco", ["Bettabuy", "Firman's Freezers", "Costcutter"], "Medium", "1999", "Businesses", ["Vera Duckworth", "Judy Mallett", "Freshco car park", "Road accident", "Unsafe car"]],
    ["What wedding role was Gary Mallett fulfilling when his wife Judy collapsed?", "Best man", ["Groom", "Usher", "Master of ceremonies"], "Medium", "1999", "Weddings", ["Gary Mallett", "Ashley Peacock", "Maxine Heavey", "Best man", "Judy Mallett"]],
    ["Which actress played Judy Mallett?", "Gaynor Faye", ["Tracy Shaw", "Vicky Entwistle", "Angela Griffin"], "Medium", "1999", "Actors", ["Judy Mallett", "Gaynor Faye", "Casting", "Mallett family"]],
    ["Which teenage mechanic began an apprenticeship at Coronation Street Garage?", "Tyrone Dobbs", ["Jason Grimshaw", "Nick Tilsley", "Greg Kelly"], "Easy", "1999", "Occupations", ["Tyrone Dobbs", "Coronation Street Garage", "Apprenticeship", "Mechanic"]],
    ["What was the name of the stray greyhound Tyrone Dobbs befriended?", "Monica", ["Schmeichel", "Cerberus", "Eccles"], "Medium", "1999", "Animals", ["Tyrone Dobbs", "Monica", "Greyhound", "Stray dog", "Pets"]],
    ["Which couple offered Tyrone Dobbs a room at their Park Road bed and breakfast?", "Jack and Vera Duckworth", ["Gary and Judy Mallett", "Ken and Deirdre Barlow", "Alf and Audrey Roberts"], "Medium", "1999", "Homes", ["Tyrone Dobbs", "Jack Duckworth", "Vera Duckworth", "Park Road B&B", "Lodging"]],
    ["What major heart operation was Jack Duckworth told he needed?", "A triple bypass", ["A heart transplant", "A valve replacement", "A pacemaker fitting"], "Medium", "1999", "Storylines", ["Jack Duckworth", "Heart surgery", "Triple bypass", "Health scare"]],
    ["Who was awarded custody of Rosie and Sophie following Kevin and Sally Webster's divorce?", "Sally Webster", ["Kevin Webster", "Natalie Barnes", "Gail Platt"], "Medium", "1999", "Families", ["Sally Webster", "Kevin Webster", "Rosie Webster", "Sophie Webster", "Divorce", "Custody"]],
    ["Which Underworld machinist became Kevin Webster's new partner?", "Alison Wakefield", ["Linda Sykes", "Fiona Middleton", "Samantha Failsworth"], "Medium", "1999", "Relationships", ["Alison Wakefield", "Kevin Webster", "Underworld", "Machinist", "Romance"]],
    ["What was the name of Alison Wakefield's younger sister, who drowned as a child?", "Cheryl", ["Charlotte", "Christine", "Claire"], "Hard", "1999", "Families", ["Alison Wakefield", "Cheryl Wakefield", "Childhood drowning", "Family tragedy"]],
    ["Which nurse did Martin Platt begin an affair with at Christmas 1999?", "Rebecca Hopkins", ["Cathy Power", "Alison Wakefield", "Fiona Middleton"], "Medium", "1999", "Relationships", ["Martin Platt", "Rebecca Hopkins", "Hospital nurse", "Affair", "Platt family"]],
    ["Which Underworld machinist was having an affair with Mike Baldwin?", "Linda Sykes", ["Alison Wakefield", "Angie Freeman", "Hayley Cropper"], "Medium", "1999", "Relationships", ["Linda Sykes", "Mike Baldwin", "Underworld", "Affair", "Machinists"]],
    ["Which woman tried to blackmail Mike Baldwin using photographs of their affair?", "Julia Stone", ["Sharon Gaskell", "Natalie Barnes", "Anne Malone"], "Medium", "1999", "Crime", ["Julia Stone", "Mike Baldwin", "Greg Kelly", "Blackmail", "Affair photographs"]],
    ["Which villain held Sally Webster and her daughters hostage?", "Greg Kelly", ["Jez Quigley", "Jon Lindsay", "Fraser Henderson"], "Easy", "1999", "Crime", ["Greg Kelly", "Sally Webster", "Rosie Webster", "Sophie Webster", "Hostage siege"]],
    ["Which young woman left her job at The Kabin to become a Rovers barmaid?", "Leanne Tilsley", ["Toyah Battersby", "Nita Desai", "Fiona Middleton"], "Medium", "1999", "Occupations", ["Leanne Tilsley", "The Kabin", "Rovers Return", "Barmaid", "Job change"]],
    ["Which man became known as a dangerous local drug dealer?", "Jez Quigley", ["Ian Bentley", "Dev Alahan", "Roy Cropper"], "Medium", "1999", "Crime", ["Jez Quigley", "Drug dealing", "Weatherfield crime", "Villain"]],
    ["Which long-standing marriage broke down after Mike Baldwin's affair with Julia Stone?", "Mike and Alma Baldwin's", ["Jack and Vera Duckworth's", "Martin and Gail Platt's", "Ken and Deirdre Barlow's"], "Medium", "1999", "Relationships", ["Mike Baldwin", "Alma Baldwin", "Julia Stone", "Blackmail", "Marriage breakdown"]],
    ["Which newcomer was introduced as a school friend of Sarah-Louise Platt?", "Candice Stowe", ["Toyah Battersby", "Zoe Tattersall", "Becky Granger"], "Medium", "1999", "Arrivals", ["Candice Stowe", "Sarah-Louise Platt", "School friends", "Character debut"]],
    ["Which drayman helped Natalie Barnes with the Rovers cellar?", "Vinny Sorrell", ["Danny Hargreaves", "Chris Collins", "Tony Horrocks"], "Medium", "1999", "Rovers Return", ["Vinny Sorrell", "Natalie Barnes", "Rovers Return", "Drayman", "Cellar"]]

];

// Build the 100 exported questions with the original rotating answer positions.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, specialistTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(1001 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '1990s', year, topic, ...specialistTags])],
        dailyEligible: true
    };
});

// Validate expanded exported questions, year balance and specialist tags.
if (questions.length !== 100 || questions[0].id !== 'tv_1001' ||
    questions[99].id !== 'tv_1100' ||
    questions.filter(q => q.tags.includes('1998')).length !== 50 ||
    questions.filter(q => q.tags.includes('1999')).length !== 50) {
    throw new Error('Pack 170: incorrect count, ID range or year split');
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
        !q.tags.includes('1990s') || !['1998', '1999'].some(y => q.tags.includes(y)) ||
        q.tags.length < 7 || q.category !== 'Television' || q.dailyEligible !== true) {
        throw new Error('Pack 170: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenWording.add(wording);
}

module.exports = questions;
