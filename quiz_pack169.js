// quiz_pack169.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 1996 and 1997
// 100 questions: tv_0901 to tv_1000
// Wording and comprehensive specialist-tag audit.
// Question IDs, answers, difficulty and daily eligibility preserved.
// quiz_bank.js is already connected and must remain unchanged.

// Each entry: question, correct answer, three alternatives, difficulty, year, topic, specialist tags.
const facts = [

    // 1996
    ["Which couple became engaged in January 1996?", "Ken Barlow and Denise Osbourne", ["Curly Watts and Raquel Wolstenhulme", "Des Barnes and Claire Palmer", "Steve McDonald and Vicky Arden"], "Medium", "1996", "Relationships", ["Ken Barlow", "Denise Osbourne", "Engagement", "Daniel Osbourne"]],
    ["Which man did Denise Osbourne have an affair with while involved with Ken Barlow?", "Brian Dunkley", ["Mike Baldwin", "Des Barnes", "Jim McDonald"], "Medium", "1996", "Relationships", ["Denise Osbourne", "Brian Dunkley", "Ken Barlow", "Affair"]],
    ["How was Brian Dunkley related to Denise Osbourne?", "He was her brother-in-law", ["He was her uncle", "He was her cousin", "He was her stepfather"], "Medium", "1996", "Families", ["Brian Dunkley", "Denise Osbourne", "Alison Dunkley", "Family relationships", "Brother-in-law"]],
    ["Whose first birthday did Ken Barlow and Denise Osbourne celebrate?", "Daniel Osbourne's", ["David Platt's", "Rosie Webster's", "Brad Armstrong's"], "Medium", "1996", "Families", ["Daniel Osbourne", "Ken Barlow", "Denise Osbourne", "First birthday", "Barlow family"]],
    ["Which childminder did Ken Barlow employ to help care for Daniel?", "Kelly Thomson", ["Fiona Middleton", "Joyce Smedley", "Claire Palmer"], "Medium", "1996", "Characters", ["Ken Barlow", "Kelly Thomson", "Daniel Osbourne", "Childminder", "Childcare"]],
    ["Which actress portrayed Daniel Osbourne's childminder Kelly Thomson?", "Sarah Moffett", ["Tina Hobley", "Angela Griffin", "Anita Carey"], "Hard", "1996", "Actors", ["Kelly Thomson", "Sarah Moffett", "Daniel Osbourne", "Casting"]],
    ["Which young butcher's assistant dated childminder Kelly Thomson?", "Ashley Peacock", ["Nick Tilsley", "Andy McDonald", "Chris Collins"], "Medium", "1996", "Relationships", ["Ashley Peacock", "Kelly Thomson", "Dating", "Butchers"]],
    ["To which part of Britain did Denise Osbourne move with Daniel and Brian Dunkley?", "Scotland", ["Wales", "Cornwall", "Northern Ireland"], "Medium", "1996", "Departures", ["Denise Osbourne", "Daniel Osbourne", "Brian Dunkley", "Scotland", "Departures"]],
    ["Which character took Daniel Osbourne away from Ken Barlow's home?", "Denise Osbourne", ["Deirdre Rachid", "Alma Baldwin", "Audrey Roberts"], "Medium", "1996", "Families", ["Denise Osbourne", "Daniel Osbourne", "Ken Barlow", "Custody", "Family separation"]],
    ["Which son of Audrey Roberts visited Weatherfield?", "Stephen Reid", ["Nick Tilsley", "David Platt", "Peter Barlow"], "Easy", "1996", "Arrivals", ["Stephen Reid", "Audrey Roberts", "Gail Platt", "Reid family", "Character return"]],
    ["Which actor originally played Audrey Roberts' son Stephen Reid?", "Todd Boyce", ["Adam Rickitt", "Sean Wilson", "Matthew Marsden"], "Medium", "1996", "Actors", ["Stephen Reid", "Todd Boyce", "Casting", "Reid family"]],
    ["Which Canadian clothing company did Stephen Reid represent on his first visit?", "KBec", ["Underworld", "Firman's Freezers", "Baldwin's Casuals"], "Hard", "1996", "Businesses", ["Stephen Reid", "KBec", "Canadian business", "Clothing industry"]],
    ["Which Weatherfield businessman discussed a possible clothing deal with Stephen Reid?", "Mike Baldwin", ["Reg Holdsworth", "Jack Duckworth", "Ken Barlow"], "Medium", "1996", "Businesses", ["Mike Baldwin", "Stephen Reid", "KBec", "Clothing contract"]],
    ["Which married woman became infatuated with Stephen Reid during his first visit?", "Alma Baldwin", ["Gail Platt", "Sally Webster", "Vera Duckworth"], "Medium", "1996", "Relationships", ["Alma Baldwin", "Stephen Reid", "Mike Baldwin", "Infatuation"]],
    ["To which country did Stephen Reid return after visiting Audrey?", "Canada", ["Australia", "Italy", "France"], "Easy", "1996", "Travel", ["Stephen Reid", "Audrey Roberts", "Canada", "Departures"]],
    ["What name did Fiona Middleton give the hair salon she took over?", "Hair by Fiona Middleton", ["Audrey's Salon", "Hair Today", "The Cutting Room"], "Medium", "1996", "Businesses", ["Fiona Middleton", "Hair by Fiona Middleton", "Hair salon", "Business takeover"]],
    ["From which salon owner did Fiona Middleton take over the business?", "Denise Osbourne", ["Alma Baldwin", "Audrey Roberts", "Maxine Heavey"], "Medium", "1996", "Businesses", ["Fiona Middleton", "Denise Osbourne", "Hair salon", "Business takeover"]],
    ["Which of Fiona Middleton’s brothers lent her money to take over the salon?", "Lee Middleton", ["Clive Middleton", "Steve McDonald", "Andy McDonald"], "Medium", "1996", "Families", ["Fiona Middleton", "Lee Middleton", "Salon lease", "Family loans"]],
    ["How much did Fiona Middleton need to pay for the salon lease?", "£4,500", ["£1,500", "£7,500", "£10,500"], "Hard", "1996", "Money", ["Fiona Middleton", "Lee Middleton", "£4,500", "Salon lease", "Business finance"]],
    ["Which actress portrayed the young hairdresser Fiona Middleton?", "Angela Griffin", ["Tracy Shaw", "Denise Black", "Tina Hobley"], "Easy", "1996", "Actors", ["Fiona Middleton", "Angela Griffin", "Casting", "Hair salon"]],
    ["Which hairdresser worked alongside Fiona Middleton at the salon?", "Maxine Heavey", ["Raquel Wolstenhulme", "Maureen Holdsworth", "Joyce Smedley"], "Medium", "1996", "Occupations", ["Fiona Middleton", "Maxine Heavey", "Hair salon", "Hairdressers"]],
    ["Which woman became a cleaner at the Rovers Return?", "Joyce Smedley", ["Maud Grimes", "Claire Palmer", "Tricia Armstrong"], "Medium", "1996", "Rovers Return", ["Joyce Smedley", "Rovers Return", "Cleaner", "Character debut"]],
    ["Which resident was the daughter of new Rovers cleaner Joyce Smedley?", "Judy Mallett", ["Sally Webster", "Fiona Middleton", "Liz McDonald"], "Medium", "1996", "Families", ["Joyce Smedley", "Judy Mallett", "Smedley family", "Mother and daughter"]],
    ["Which actress played Joyce Smedley when she appeared?", "Anita Carey", ["Elizabeth Bradley", "Betty Driver", "Thelma Barlow"], "Hard", "1996", "Actors", ["Joyce Smedley", "Anita Carey", "Casting", "Rovers Return"]],
    ["Which Army colleague of Jim McDonald had an affair with Liz?", "Johnny Johnson", ["Fraser Henderson", "Alan McKenna", "Chris Collins"], "Medium", "1996", "Relationships", ["Liz McDonald", "Jim McDonald", "Johnny Johnson", "Army", "Affairs"]],
    ["Which prison held Jim McDonald for breaking bail conditions?", "Strangeways", ["Pentonville", "Holloway", "Armley"], "Medium", "1996", "Storylines", ["Jim McDonald", "Liz McDonald", "Strangeways Prison", "Bail breach", "Imprisonment"]],
    ["Which husband did Liz McDonald decide to divorce after their marriage broke down?", "Jim McDonald", ["Steve McDonald", "Des Barnes", "Alec Gilroy"], "Easy", "1996", "Relationships", ["Liz McDonald", "Jim McDonald", "Divorce", "McDonald family"]],
    ["Which wages clerk ran away with Reg Holdsworth?", "Yvonne Bannister", ["Anne Malone", "Maureen Naylor", "Kimberley Taylor"], "Medium", "1996", "Relationships", ["Reg Holdsworth", "Yvonne Bannister", "Maureen Holdsworth", "Affair", "Elopement"]],
    ["Which woman discovered in April 1996 that Reg Holdsworth had left her?", "Maureen Holdsworth", ["Betty Williams", "Rita Sullivan", "Audrey Roberts"], "Easy", "1996", "Storylines", ["Maureen Holdsworth", "Reg Holdsworth", "Yvonne Bannister", "Marriage breakdown"]],
    ["Which garage did Don Brennan and Josie Clarke buy from Mike Baldwin?", "MVB Motors", ["Webster's Autos", "Street Cars", "Tilsley's Garage"], "Medium", "1996", "Businesses", ["Don Brennan", "Josie Clarke", "Mike Baldwin", "MVB Motors", "Garage purchase"]],
    ["What was the name of the racehorse bought by several Street residents?", "Betty's Hot Shot", ["Vera's Pride", "Rovers Return", "Weatherfield Wonder"], "Medium", "1996", "Animals", ["Betty's Hot Shot", "Racehorse", "Horse racing", "Rovers residents"]],
    ["Which McDonald was sentenced to two years in prison?", "Steve McDonald", ["Andy McDonald", "Jim McDonald", "Liz McDonald"], "Medium", "1996", "Storylines", ["Steve McDonald", "Prison sentence", "McDonald family", "Crime"]],
    ["Which young woman separated from Steve McDonald after becoming embroiled in his scams?", "Vicky McDonald", ["Fiona Middleton", "Raquel Watts", "Tricia Armstrong"], "Medium", "1996", "Relationships", ["Steve McDonald", "Vicky McDonald", "Marriage breakdown", "Financial scams"]],
    ["Which woman began a relationship with Des Barnes in May 1996?", "Claire Palmer", ["Samantha Failsworth", "Natalie Horrocks", "Angie Freeman"], "Medium", "1996", "Relationships", ["Des Barnes", "Claire Palmer", "Romance", "Barnes family"]],
    ["What was the first name of Claire Palmer's daughter who appeared?", "Becky", ["Shannon", "Rosie", "Leanne"], "Medium", "1996", "Families", ["Claire Palmer", "Becky Palmer", "Palmer family", "Children"]],
    ["Which pension did Claire Palmer continue claiming when she moved in with Des Barnes?", "Her late husband's RAF pension", ["Her father's Army pension", "A former employer's pension", "Her brother's Navy pension"], "Hard", "1996", "Money", ["Claire Palmer", "Des Barnes", "RAF widow's pension", "£16,000 pension", "Benefits rules"]],
    ["Which garage employee lost his job when Don Brennan's motor business failed?", "Kevin Webster", ["Martin Platt", "Curly Watts", "Derek Wilton"], "Medium", "1996", "Occupations", ["Kevin Webster", "Don Brennan", "MVB Motors", "Garage closure", "Redundancy"]],
    ["Which Rovers Return barmaid made her debut in July 1996?", "Samantha Failsworth", ["Tanya Pooley", "Bet Gilroy", "Raquel Wolstenhulme"], "Medium", "1996", "Arrivals", ["Samantha Failsworth", "Rovers Return", "Barmaid", "Character debut"]],
    ["Which actress played Rovers barmaid Samantha Failsworth?", "Tina Hobley", ["Sarah Lancashire", "Tracy Brabin", "Angela Griffin"], "Medium", "1996", "Actors", ["Samantha Failsworth", "Tina Hobley", "Casting", "Rovers Return"]],
    ["Which satellite channel began broadcasting Classic Coronation Street repeats in 1996?", "Granada Plus", ["ITV2", "UK Gold", "Sky One"], "Medium", "1996", "TV History", ["Granada Plus", "Classic Coronation Street", "Television repeats", "Broadcast history"]],
    ["Which teenage Platt remained in Canada to study after the family's holiday?", "Nick Tilsley", ["David Platt", "Sarah-Louise Platt", "Rosie Webster"], "Medium", "1996", "Families", ["Nick Tilsley", "Stephen Reid", "Canada", "Education", "Platt family"]],
    ["Which shopkeeper celebrated his seventieth birthday?", "Alf Roberts", ["Fred Elliott", "Percy Sugden", "Mike Baldwin"], "Medium", "1996", "Characters", ["Alf Roberts", "70th birthday", "Roberts family", "Corner Shop"]],
    ["Why was Tricia Armstrong sent to prison briefly?", "Not paying for a TV licence", ["Shoplifting", "Unpaid parking fines", "Tax evasion"], "Medium", "1996", "Storylines", ["Tricia Armstrong", "TV licence", "Styal Prison", "Licence evasion"]],
    ["Which detective first caught Fiona Middleton's attention?", "Alan McKenna", ["Chris Collins", "Fraser Henderson", "Jon Lindsay"], "Medium", "1996", "Relationships", ["Fiona Middleton", "Alan McKenna", "Detective", "Romance"]],
    ["Whom did Tracy Barlow marry?", "Robert Preston", ["Steve McDonald", "Nick Tilsley", "Andy McDonald"], "Easy", "1996", "Weddings", ["Tracy Barlow", "Robert Preston", "Wedding", "Barlow family"]],
    ["What happened to Robert Preston during a stag-night prank before his wedding?", "He was locked in a shipping container", ["He was stranded on a boat", "He was arrested at an airport", "He lost his passport abroad"], "Medium", "1996", "Weddings", ["Robert Preston", "Tracy Barlow", "Shipping container", "Stag night", "Wedding prank"]],
    ["Which former Coronation Street resident returned briefly for Tracy Barlow's wedding?", "Blanche Hunt", ["Hilda Ogden", "Annie Walker", "Ena Sharples"], "Medium", "1996", "Returns", ["Blanche Hunt", "Tracy Barlow", "Wedding", "Character return"]],
    ["Which city did Raquel Watts leave Weatherfield for?", "Kuala Lumpur", ["Paris", "Toronto", "Rome"], "Easy", "1996", "Departures", ["Raquel Watts", "Curly Watts", "Kuala Lumpur", "Malaysia", "Departures"]],
    ["What sort of job took Raquel Watts abroad when she left Curly?", "Aromatherapy", ["Journalism", "Hotel management", "Nursing"], "Medium", "1996", "Occupations", ["Raquel Watts", "Curly Watts", "Aromatherapy", "Malaysia", "Career change"]],
    ["Which former wife of Reg Holdsworth spent Christmas with Curly Watts?", "Maureen Holdsworth", ["Vera Duckworth", "Rita Sullivan", "Betty Williams"], "Medium", "1996", "Relationships", ["Maureen Holdsworth", "Curly Watts", "Christmas", "Reg Holdsworth"]],

    // 1997
    ["Which future Battersby family member first appeared in January 1997, months before the others moved into No. 5?", "Janice Battersby", ["Toyah Battersby", "Leanne Battersby", "Zoe Tattersall"], "Medium", "1997", "Arrivals", ["Janice Battersby", "Factory machinist", "Character debut", "Battersby family", "Early appearance"]],
    ["Which son did Tricia Armstrong give birth to at the Rovers Return?", "Brad", ["Tommy", "Jamie", "Jason"], "Medium", "1997", "Families", ["Tricia Armstrong", "Brad Armstrong", "Rovers Return", "Birth", "Armstrong family"]],
    ["Which famous Hollywood actor inspired the name of Tricia Armstrong's baby Brad?", "Brad Pitt", ["Bradley Cooper", "Brad Dourif", "Brad Garrett"], "Medium", "1997", "Popular Culture", ["Brad Armstrong", "Brad Pitt", "Tricia Armstrong", "Baby names", "Hollywood"]],
    ["Which Rovers employee helped deliver Tricia Armstrong's baby?", "Betty Williams", ["Samantha Failsworth", "Vera Duckworth", "Liz McDonald"], "Medium", "1997", "Rovers Return", ["Betty Williams", "Tricia Armstrong", "Brad Armstrong", "Rovers Return", "Birth"]],
    ["Who was the father of Tricia Armstrong's son Brad?", "Terry Duckworth", ["Des Barnes", "Steve McDonald", "Curly Watts"], "Easy", "1997", "Families", ["Terry Duckworth", "Tricia Armstrong", "Brad Armstrong", "Parentage", "Duckworth family"]],
    ["Which woman was killed by a car while walking her dog?", "Joyce Smedley", ["Mavis Wilton", "Maud Grimes", "Rita Sullivan"], "Medium", "1997", "Storylines", ["Joyce Smedley", "Tony Horrocks", "Scamper", "Fatal car accident", "Smedley family"]],
    ["Which mechanic was driving the car that killed Joyce Smedley?", "Tony Horrocks", ["Kevin Webster", "Chris Collins", "Bill Webster"], "Medium", "1997", "Storylines", ["Tony Horrocks", "Joyce Smedley", "Car accident", "Garage mechanic"]],
    ["What was the name of Joyce Smedley's dog when she was fatally injured?", "Scamper", ["Rover", "Lucky", "Boomer"], "Hard", "1997", "Animals", ["Joyce Smedley", "Scamper", "Dog", "Road accident"]],
    ["Which woman arrived in February 1997 as Tony Horrocks' mother?", "Natalie Horrocks", ["Claire Palmer", "Maureen Elliott", "Anne Malone"], "Medium", "1997", "Arrivals", ["Natalie Horrocks", "Tony Horrocks", "Horrocks family", "Character debut"]],
    ["Which actress began playing Natalie Horrocks?", "Denise Welch", ["Tina Hobley", "Tracy Shaw", "Sally Whittaker"], "Medium", "1997", "Actors", ["Natalie Horrocks", "Denise Welch", "Casting", "Horrocks family"]],
    ["Who bought Jim's Café?", "Roy Cropper", ["Alf Roberts", "Reg Holdsworth", "Des Barnes"], "Easy", "1997", "Businesses", ["Roy Cropper", "Jim's Café", "Alma Baldwin", "Café purchase"]],
    ["What name did Roy Cropper give the café?", "Roy's Rolls", ["Roy's Diner", "The Corner Café", "Weatherfield Bites"], "Easy", "1997", "Businesses", ["Roy Cropper", "Roy's Rolls", "Café rebranding", "Business ownership"]],
    ["How much did Roy Cropper pay for Jim's Café?", "£35,000", ["£15,000", "£25,000", "£45,000"], "Hard", "1997", "Money", ["Roy Cropper", "Jim's Café", "£35,000", "Café sale"]],
    ["Which Firman's Freezers employee was dismissed for framing Samantha Failsworth for shoplifting?", "Anne Malone", ["Maureen Holdsworth", "Vera Duckworth", "Kimberley Taylor"], "Medium", "1997", "Storylines", ["Anne Malone", "Samantha Failsworth", "Firman's Freezers", "False shoplifting allegation", "Dismissal"]],
    ["Which Manchester location was targeted in Fraser Henderson's failed robbery?", "Manchester Airport", ["Weatherfield Town Hall", "Bettabuy supermarket", "The Rovers Return"], "Medium", "1997", "Crime", ["Fraser Henderson", "Manchester Airport", "Failed robbery", "Crime"]],
    ["Which gunman held members of the McDonald family hostage?", "Gerry Turner", ["Fraser Henderson", "Jon Lindsay", "Don Brennan"], "Medium", "1997", "Crime", ["Gerry Turner", "McDonald family", "Hostage crisis", "Gunman"]],
    ["Which mechanic joined Kevin Webster at the garage in March 1997?", "Chris Collins", ["Mark Casey", "Brian Tilsley", "Martin Platt"], "Easy", "1997", "Occupations", ["Kevin Webster", "Chris Collins", "Garage", "Mechanics", "New employee"]],
    ["Which actor played garage mechanic Chris Collins?", "Matthew Marsden", ["Michael Le Vell", "Sean Wilson", "Adam Rickitt"], "Medium", "1997", "Actors", ["Chris Collins", "Matthew Marsden", "Casting", "Garage mechanic"]],
    ["Who set fire to Mike Baldwin’s factory in March 1997?", "Don Brennan", ["Ashley Peacock", "Kevin Webster", "Jack Duckworth"], "Easy", "1997", "Storylines", ["Don Brennan", "Mike Baldwin", "Factory fire", "Arson", "Factory destruction"]],
    ["Which businessman was initially suspected of starting the fire at his own factory?", "Mike Baldwin", ["Fred Elliott", "Roy Cropper", "Alec Gilroy"], "Medium", "1997", "Storylines", ["Mike Baldwin", "Don Brennan", "Factory arson", "False suspicion"]],
    ["Which young man was falsely accused of setting fire to Mike Baldwin’s factory?", "Ashley Peacock", ["Chris Collins", "Andy McDonald", "Nick Tilsley"], "Medium", "1997", "Crime", ["Ashley Peacock", "Don Brennan", "Factory arson", "False accusation"]],
    ["Which nightclub's security footage helped establish Ashley Peacock's innocence?", "The Warsaw", ["The Pink Flamingo", "The Tropicana", "The Old Bank Club"], "Hard", "1997", "Crime", ["Ashley Peacock", "The Warsaw", "CCTV", "Arson alibi", "Nightclub"]],
    ["Which long-serving Coronation Street character died from a roadside heart attack in April 1997?", "Derek Wilton", ["Alec Gilroy", "Alf Roberts", "Percy Sugden"], "Easy", "1997", "Storylines", ["Derek Wilton", "Mavis Wilton", "Heart attack", "Road rage", "Death"]],
    ["Whose birthday party was Derek Wilton travelling home for when he died?", "Mavis Wilton's", ["Rita Sullivan's", "Emily Bishop's", "Maud Grimes'"], "Medium", "1997", "Storylines", ["Derek Wilton", "Mavis Wilton", "Birthday party", "Fatal heart attack"]],
    ["Which vehicle did Don Brennan drive into Weatherfield Canal while holding Alma Baldwin captive?", "His taxi", ["A bus", "A delivery van", "A motorbike"], "Medium", "1997", "Storylines", ["Don Brennan", "Weatherfield Canal", "Taxi", "Attempted murder", "Car crash"]],
    ["Which woman was Don Brennan holding captive when he drove into the canal?", "Alma Baldwin", ["Gail Platt", "Rita Sullivan", "Sally Webster"], "Easy", "1997", "Storylines", ["Don Brennan", "Alma Baldwin", "Weatherfield Canal", "Kidnapping", "Taxi crash"]],
    ["Where was Don Brennan sent after his mental breakdown?", "A psychiatric hospital", ["A prison abroad", "A rehabilitation centre in Canada", "A military hospital"], "Medium", "1997", "Storylines", ["Don Brennan", "Mental breakdown", "Psychiatric hospital", "Hospitalisation"]],
    ["Which family moved into Number 5 Coronation Street in summer 1997?", "The Battersbys", ["The Malletts", "The McDonalds", "The Holdsworths"], "Easy", "1997", "Arrivals", ["Battersby family", "Les Battersby", "Janice Battersby", "No. 5", "New residents"]],
    ["Which actor began playing Les Battersby?", "Bruce Jones", ["John Savident", "Bill Tarmey", "Philip Middlemiss"], "Medium", "1997", "Actors", ["Les Battersby", "Bruce Jones", "Casting", "Battersby family"]],
    ["Which actress played Janice Battersby on her 1997 arrival?", "Vicky Entwistle", ["Gaynor Faye", "Jane Danson", "Denise Welch"], "Medium", "1997", "Actors", ["Janice Battersby", "Vicky Entwistle", "Casting", "Battersby family"]],
    ["Which actress began playing Leanne Battersby?", "Jane Danson", ["Georgia Taylor", "Tracy Brabin", "Sarah Lancashire"], "Medium", "1997", "Actors", ["Leanne Battersby", "Jane Danson", "Casting", "Battersby family"]],
    ["Which actress began playing Toyah Battersby?", "Georgia Taylor", ["Jane Danson", "Angela Griffin", "Tina Hobley"], "Medium", "1997", "Actors", ["Toyah Battersby", "Georgia Taylor", "Casting", "Battersby family"]],
    ["Which teenage runaway was introduced in May 1997 and later lived with the Malletts?", "Zoe Tattersall", ["Leanne Battersby", "Flick Khan", "Jenny Bradley"], "Medium", "1997", "Arrivals", ["Zoe Tattersall", "Mallett family", "Teenage runaway", "Character debut"]],
    ["Which actress played Zoe Tattersall?", "Joanne Froggatt", ["Jane Danson", "Georgia Taylor", "Gaynor Faye"], "Medium", "1997", "Actors", ["Zoe Tattersall", "Joanne Froggatt", "Casting", "Teenage runaway"]],
    ["What name did Zoe Tattersall originally give her daughter, later known to the Malletts as Katie?", "Shannon", ["Katie", "Becky", "Rosie"], "Medium", "1997", "Families", ["Zoe Tattersall", "Shannon Tattersall", "Katie Joyce Mallett", "Birth", "Renaming"]],
    ["Which couple considered paying Zoe Tattersall for her baby?", "Gary and Judy Mallett", ["Kevin and Sally Webster", "Jack and Vera Duckworth", "Jim and Liz McDonald"], "Medium", "1997", "Storylines", ["Gary Mallett", "Judy Mallett", "Zoe Tattersall", "Baby arrangement", "Adoption"]],
    ["How much money was discussed for Zoe Tattersall's baby?", "£2,000", ["£200", "£5,000", "£10,000"], "Hard", "1997", "Money", ["Zoe Tattersall", "Gary Mallett", "Judy Mallett", "£2,000", "Baby payment"]],
    ["Which woman had a secret affair with Kevin Webster?", "Natalie Horrocks", ["Samantha Failsworth", "Maureen Elliott", "Angie Freeman"], "Easy", "1997", "Relationships", ["Kevin Webster", "Natalie Horrocks", "Sally Webster", "Affair"]],
    ["Which man became romantically involved with Sally Webster after her marriage troubles?", "Chris Collins", ["Tony Horrocks", "Ashley Peacock", "Andy McDonald"], "Medium", "1997", "Relationships", ["Sally Webster", "Chris Collins", "Kevin Webster", "Romance", "Marriage breakdown"]],
    ["Which newcomer pretended to be an airline pilot while courting Deirdre Rachid?", "Jon Lindsay", ["Alan McKenna", "Fraser Henderson", "Ritchie Fitzgerald"], "Easy", "1997", "Storylines", ["Deirdre Rachid", "Jon Lindsay", "False airline pilot", "Romance", "Fraud"]],
    ["What did Jon Lindsay actually sell at the airport?", "Ties", ["Sunglasses", "Books", "Perfume"], "Medium", "1997", "Occupations", ["Jon Lindsay", "Manchester Airport", "Tie shop", "False pilot", "Shop assistant"]],
    ["Which young Platt was recast with actor Adam Rickitt in 1997?", "Nick Tilsley", ["David Platt", "Martin Platt", "Sarah-Louise Platt"], "Medium", "1997", "Actors", ["Nick Tilsley", "Adam Rickitt", "Recasting", "Platt family"]],
    ["Which widow left Weatherfield to run a guest house in Cartmel in October 1997?", "Mavis Wilton", ["Emily Bishop", "Rita Sullivan", "Betty Williams"], "Easy", "1997", "Departures", ["Mavis Wilton", "Cartmel", "Guest house", "Departure", "Widowhood"]],
    ["Which butcher married Maureen Holdsworth in September 1997?", "Fred Elliott", ["Ashley Peacock", "Alf Roberts", "Des Barnes"], "Easy", "1997", "Weddings", ["Fred Elliott", "Maureen Holdsworth", "Wedding", "Elliott family"]],
    ["Whose car did Don Brennan crash into the viaduct, causing his death?", "Alma Baldwin's car", ["Mike Baldwin's van", "His own taxi", "Kevin Webster's car"], "Medium", "1997", "Storylines", ["Don Brennan", "Alma Baldwin", "MG Midget", "Viaduct", "Fatal car crash"]],
    ["Which former Rovers landlord bought a half-share in the pub from the Duckworths?", "Alec Gilroy", ["Billy Walker", "Fred Gee", "Jack Walker"], "Medium", "1997", "Rovers Return", ["Alec Gilroy", "Jack Duckworth", "Vera Duckworth", "Rovers Return", "Pub ownership"]],
    ["What was the name of the factory established by Mike Baldwin and Angie Freeman?", "Underworld", ["Phoenix Casuals", "Baldwin's Casuals", "Gamma Garments"], "Easy", "1997", "Businesses", ["Mike Baldwin", "Angie Freeman", "Underworld", "Factory", "Clothing industry"]],
    ["Which man did Fiona Middleton plan to marry before the wedding collapsed?", "Alan McKenna", ["Steve McDonald", "Chris Collins", "Andy McDonald"], "Medium", "1997", "Relationships", ["Fiona Middleton", "Alan McKenna", "Wedding cancellation", "Engagement"]],
    ["Which McDonald family member had a secret affair with Fiona Middleton?", "Jim McDonald", ["Ken Barlow", "Des Barnes", "Kevin Webster"], "Medium", "1997", "Relationships", ["Jim McDonald", "Fiona Middleton", "Alan McKenna", "Secret affair"]],
    ["What discovery made Deirdre Rachid end her engagement to Jon Lindsay?", "He was already married", ["He had moved abroad", "He was related to Mike Baldwin", "He had lost his job"], "Medium", "1997", "Relationships", ["Deirdre Rachid", "Jon Lindsay", "Linda Lindsay", "Secret wife", "Engagement broken"]]
];

// Build the 100 exported questions with the existing rotating answer positions.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, specialistTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(901 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '1990s', year, topic, ...specialistTags])],
        dailyEligible: true
    };
});

// Check expanded exported objects, the year split and specialist tags.
if (questions.length !== 100 || questions[0].id !== 'tv_0901' ||
    questions[99].id !== 'tv_1000' ||
    questions.filter(q => q.tags.includes('1996')).length !== 50 ||
    questions.filter(q => q.tags.includes('1997')).length !== 50) {
    throw new Error('Pack 169: incorrect count, ID range or year split');
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
        !q.tags.includes('1990s') || !['1996', '1997'].some(y => q.tags.includes(y)) ||
        q.tags.length < 7 || q.category !== 'Television' || q.dailyEligible !== true) {
        throw new Error('Pack 169: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenWording.add(wording);
}

module.exports = questions;
