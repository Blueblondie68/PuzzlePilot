// quiz_pack166.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 1990 and 1991
// 100 questions: tv_0601 to tv_0700
// Complete wording and specialist-tag audit.
// Preserve question IDs, answers, difficulty, daily eligibility and all existing tags.
// quiz_bank.js is already connected; no changes needed.

// Each entry: question, correct answer, three alternatives, difficulty, year, topic, specialist tags.
const facts = [

    // 1990
    ["Which man did Deirdre Barlow throw out of No. 1 after discovering his affair?", "Ken Barlow", ["Mike Baldwin", "Phil Jennings", "Alec Gilroy"], "Easy", "1990", "Relationships", ["Deirdre Barlow", "Ken Barlow", "No. 1", "Marital separation"]],
    ["Who had Ken Barlow spent New Year with instead of his wife?", "Wendy Crozier", ["Alma Sedgewick", "Rita Fairclough", "Jackie Ingram"], "Medium", "1990", "Relationships", ["Ken Barlow", "Wendy Crozier", "Deirdre Barlow", "New Year", "Affair"]],
    ["Which taxi driver had his cab stolen?", "Don Brennan", ["Jack Duckworth", "Des Barnes", "Jim McDonald"], "Medium", "1990", "Storylines", ["Don Brennan", "Taxi theft", "Taxi firm"]],
    ["Which granddaughter of Alec Gilroy made her first appearance in Coronation Street?", "Vicky Arden", ["Tracy Barlow", "Jenny Bradley", "Rosie Webster"], "Medium", "1990", "Families", ["Alec Gilroy", "Vicky Arden", "Gilroy family", "Character debut"]],
    ["What was the name of Alec Gilroy's daughter?", "Sandra Arden", ["Tina Fowler", "Jackie Ingram", "Angie Freeman"], "Medium", "1990", "Families", ["Alec Gilroy", "Sandra Arden", "Vicky Arden", "Arden family"]],
    ["Who was Sandra Arden's husband when she first appeared?", "Tim Arden", ["Peter Ingram", "Phil Jennings", "Des Barnes"], "Hard", "1990", "Families", ["Sandra Arden", "Tim Arden", "Vicky Arden", "Arden family"]],
    ["Which couple moved into the newly built No. 6 Coronation Street?", "Des and Steph Barnes", ["Jim and Liz McDonald", "Kevin and Sally Webster", "Derek and Mavis Wilton"], "Easy", "1990", "Arrivals", ["Des Barnes", "Steph Barnes", "No. 6", "Barnes family", "New residents"]],
    ["Which actor began playing Des Barnes?", "Philip Middlemiss", ["Ken Morley", "Charles Lawson", "Kevin Kennedy"], "Medium", "1990", "Actors", ["Des Barnes", "Philip Middlemiss", "Casting"]],
    ["Which actress played Steph Barnes when the character arrived?", "Amelia Bullmore", ["Deborah McAndrew", "Sarah Lancashire", "Shirin Taylor"], "Medium", "1990", "Actors", ["Steph Barnes", "Amelia Bullmore", "Casting"]],
    ["What was Steph Barnes's maiden surname when she married Des?", "Jones", ["Taylor", "Arden", "Khan"], "Hard", "1990", "Weddings", ["Steph Jones", "Steph Barnes", "Des Barnes", "Barnes wedding", "Maiden names"]],
    ["Which friend of Jenny Bradley arrived in Weatherfield?", "Flick Khan", ["Angie Freeman", "Raquel Wolstenhulme", "Kimberley Taylor"], "Medium", "1990", "Arrivals", ["Jenny Bradley", "Flick Khan", "Khan family", "New arrivals"]],
    ["Which actress played the student Flick Khan?", "Rita Wolf", ["Lisa Lewis", "Suzanne Hall", "Deborah McAndrew"], "Hard", "1990", "Actors", ["Flick Khan", "Rita Wolf", "Casting"]],
    ["Which Rovers barmaid was jilted by Eddie Ramsden?", "Tina Fowler", ["Liz McDonald", "Betty Turpin", "Gloria Todd"], "Medium", "1990", "Relationships", ["Tina Fowler", "Eddie Ramsden", "Rovers Return", "Jilted"]],
    ["Whose shopping caused Percy Sugden to slip and break his ankle?", "Phyllis Pearce's", ["Emily Bishop's", "Vera Duckworth's", "Audrey Roberts's"], "Medium", "1990", "Storylines", ["Percy Sugden", "Phyllis Pearce", "Broken ankle", "Accident"]],
    ["Which Rovers landlord barred Percy Sugden after his complaints?", "Alec Gilroy", ["Jack Duckworth", "Billy Walker", "Fred Gee"], "Medium", "1990", "Rovers Return", ["Alec Gilroy", "Percy Sugden", "Rovers Return", "Pub ban"]],
    ["Which house did Derek and Mavis Wilton move into?", "Number 4", ["Number 1", "Number 7", "Number 11"], "Medium", "1990", "Homes", ["Derek Wilton", "Mavis Wilton", "No. 4", "Wilton family"]],
    ["What type of pet was Harriet, who died shortly after Derek and Mavis Wilton moved house?", "A budgie", ["A cat", "A rabbit", "A goldfish"], "Medium", "1990", "Animals", ["Harriet", "Derek Wilton", "Mavis Wilton", "Budgie", "Pets"]],
    ["What caused a fire at Number 1?", "A chip pan", ["A faulty heater", "A cigarette", "An electrical short in the television"], "Medium", "1990", "Storylines", ["No. 1", "Chip-pan fire", "Barlow family", "House fire"]],
    ["Which young Barlow was rescued from the chip-pan fire at No. 1?", "Tracy Barlow", ["Susan Barlow", "Peter Barlow", "Daniel Barlow"], "Easy", "1990", "Families", ["Tracy Barlow", "No. 1", "Chip-pan fire", "Barlow family"]],
    ["Who rescued Tracy Barlow from the chip-pan fire?", "Dave Barton", ["Ken Barlow", "Martin Platt", "Curly Watts"], "Hard", "1990", "Storylines", ["Dave Barton", "Tracy Barlow", "No. 1", "Fire rescue"]],
    ["Which resident moved from Number 7 into a flat above the new Kabin?", "Rita Fairclough", ["Mavis Wilton", "Emily Bishop", "Deirdre Barlow"], "Easy", "1990", "Homes", ["Rita Fairclough", "The Kabin", "No. 7", "Flat", "Shop relocation"]],
    ["Who was expecting Martin Platt's baby?", "Gail Tilsley", ["Sally Webster", "Liz McDonald", "Steph Barnes"], "Easy", "1990", "Families", ["Gail Tilsley", "Martin Platt", "David Platt", "Pregnancy"]],
    ["What decision did Martin Platt persuade Gail not to go ahead with during her pregnancy?", "Having an abortion", ["Moving to Canada", "Selling the café", "Leaving her job"], "Medium", "1990", "Storylines", ["Gail Tilsley", "Martin Platt", "Abortion", "Pregnancy"]],
    ["Who demanded that Gail marry Martin before their baby arrived?", "Ivy Brennan", ["Audrey Roberts", "Deirdre Barlow", "Bet Gilroy"], "Medium", "1990", "Relationships", ["Ivy Brennan", "Gail Tilsley", "Martin Platt", "Marriage pressure"]],
    ["Which supermarket boss moved into the Corner Shop flat?", "Reg Holdsworth", ["Peter Ingram", "Alf Roberts", "Maurice Jones"], "Medium", "1990", "Homes", ["Reg Holdsworth", "Corner Shop flat", "Bettabuy", "Supermarket"]],
    ["Which brewery representative confirmed that Bet and Alec would keep running the Rovers?", "Cecil Newton", ["Nigel Ridley", "Roger Woodhouse", "Phil Jennings"], "Hard", "1990", "Rovers Return", ["Cecil Newton", "Bet Gilroy", "Alec Gilroy", "Rovers Return", "Newton & Ridley"]],
    ["Who was brought in as a relief manager at the Rovers during the ownership scare?", "Roger Woodhouse", ["Frank Mills", "Billy Walker", "Fred Gee"], "Hard", "1990", "Rovers Return", ["Roger Woodhouse", "Rovers Return", "Relief manager", "Bet Gilroy"]],
    ["Which Bettabuy employee was promoted to assistant manager?", "Curly Watts", ["Vera Duckworth", "Reg Holdsworth", "Kimberley Taylor"], "Medium", "1990", "Businesses", ["Curly Watts", "Bettabuy", "Assistant manager", "Promotion"]],
    ["What free transport did Bettabuy introduce to bring in shoppers from Coronation Street?", "A bus service", ["A taxi service", "A tram pass scheme", "A bicycle delivery service"], "Medium", "1990", "Businesses", ["Bettabuy", "Bus service", "Shoppers", "Retail promotions"]],
    ["Which McDonald twin ran away with Joanne Khan?", "Steve McDonald", ["Andy McDonald", "Nick Tilsley", "Peter Barlow"], "Medium", "1990", "Relationships", ["Steve McDonald", "Joanne Khan", "McDonald family", "Elopement"]],
    ["To which part of England did Steve McDonald and Joanne Khan elope?", "The Lake District", ["The Peak District", "The Yorkshire Dales", "The Cotswolds"], "Medium", "1990", "Travel", ["Steve McDonald", "Joanne Khan", "Lake District", "Elopement"]],
    ["Whom did Peter Barlow marry in 1990?", "Jessica Midgeley", ["Susan Barlow", "Wendy Crozier", "Flick Khan"], "Medium", "1990", "Weddings", ["Peter Barlow", "Jessica Midgeley", "Barlow family", "Wedding"]],
    ["In which city did Peter Barlow marry Jessica Midgeley?", "Portsmouth", ["Leeds", "Manchester", "Liverpool"], "Hard", "1990", "Weddings", ["Peter Barlow", "Jessica Midgeley", "Portsmouth", "Wedding"]],
    ["Which businessman employed Mike Baldwin as a sales representative?", "Peter Ingram", ["Maurice Jones", "Alan Bradley", "Alf Roberts"], "Medium", "1990", "Businesses", ["Mike Baldwin", "Peter Ingram", "Sales representative", "Clothing trade"]],
    ["What surname did Jackie Ingram use when she approached Mike Baldwin undercover?", "Williams", ["Taylor", "Arden", "Crozier"], "Hard", "1990", "Storylines", ["Jackie Ingram", "Mike Baldwin", "Undercover identity", "Williams"]],
    ["What caused factory owner Peter Ingram's death?", "A heart attack", ["A road accident", "A factory fire", "A fall from scaffolding"], "Medium", "1990", "Storylines", ["Peter Ingram", "Heart attack", "Factory owner", "Ingram family"]],
    ["What was the name of Mike Baldwin's newly established clothing business?", "Phoenix Casuals", ["Baldwin's Knitwear", "Ingram Fashions", "Weatherfield Textiles"], "Medium", "1990", "Businesses", ["Mike Baldwin", "Phoenix Casuals", "Clothing factory", "New business"]],
    ["Who arranged for a male stripper to surprise Vera Duckworth in the Rovers?", "Steph Barnes", ["Bet Gilroy", "Liz McDonald", "Audrey Roberts"], "Medium", "1990", "Storylines", ["Steph Barnes", "Vera Duckworth", "Rovers Return", "Male stripper"]],
    ["Which McDonald twin achieved the better O-level results?", "Andy McDonald", ["Steve McDonald", "Neither sat the exams", "They received identical grades"], "Medium", "1990", "Families", ["Andy McDonald", "Steve McDonald", "O-levels", "McDonald family"]],
    ["Where did Ken Barlow move after leaving Number 1?", "The Corner Shop flat", ["The Kabin flat", "Number 6", "The Rovers Return"], "Medium", "1990", "Homes", ["Ken Barlow", "No. 1", "Corner Shop flat", "Marital separation"]],
    ["Which brewery executive was Tina Fowler secretly involved with before she left?", "Nigel Ridley", ["Cecil Newton", "Peter Ingram", "Roger Woodhouse"], "Hard", "1990", "Relationships", ["Tina Fowler", "Nigel Ridley", "Newton & Ridley", "Secret relationship"]],
    ["Which McDonald family member started work as a Rovers barmaid?", "Liz McDonald", ["Vera Duckworth", "Jackie Ingram", "Sandra Arden"], "Easy", "1990", "Rovers Return", ["Liz McDonald", "Rovers Return", "Barmaid", "McDonald family"]],
    ["Who began divorce proceedings against Ken Barlow?", "Deirdre Barlow", ["Wendy Crozier", "Alma Sedgewick", "Susan Barlow"], "Easy", "1990", "Relationships", ["Ken Barlow", "Deirdre Barlow", "Divorce", "Barlow family"]],
    ["Which design student became a lodger at Number 7?", "Angie Freeman", ["Flick Khan", "Raquel Wolstenhulme", "Jackie Ingram"], "Medium", "1990", "Arrivals", ["Angie Freeman", "No. 7", "Fashion design", "New resident"]],
    ["Which actress began playing Angie Freeman?", "Deborah McAndrew", ["Amelia Bullmore", "Sarah Lancashire", "Sally Ann Matthews"], "Medium", "1990", "Actors", ["Angie Freeman", "Deborah McAndrew", "Casting"]],
    ["Which baby was born to Kevin and Sally Webster at Christmas 1990?", "Rosie Webster", ["Sophie Webster", "Sarah-Louise Tilsley", "Amy Barlow"], "Easy", "1990", "Families", ["Rosie Webster", "Kevin Webster", "Sally Webster", "Birth", "Webster family"]],
    ["In whose taxi did Sally Webster go into labour?", "Don Brennan's", ["Jim McDonald's", "Des Barnes's", "Jack Duckworth's"], "Medium", "1990", "Storylines", ["Sally Webster", "Don Brennan", "Rosie Webster", "Taxi", "Birth"]],
    ["Who helped deliver Sally Webster's baby in a taxi at Christmas?", "Liz McDonald", ["Vera Duckworth", "Bet Gilroy", "Ivy Brennan"], "Medium", "1990", "Families", ["Liz McDonald", "Sally Webster", "Rosie Webster", "Taxi birth"]],
    ["What was the name of Gail and Martin's son born at Christmas 1990?", "David", ["Nick", "Daniel", "Simon"], "Easy", "1990", "Families", ["David Platt", "Gail Tilsley", "Martin Platt", "Christmas birth", "Platt family"]],
    ["Which long-standing resident considered taking his own life after the breakdown of his marriage at the end of 1990?", "Ken Barlow", ["Alec Gilroy", "Mike Baldwin", "Derek Wilton"], "Medium", "1990", "Storylines", ["Ken Barlow", "Deirdre Barlow", "Mental health crisis", "Marriage breakdown"]],

    // 1991
    ["Who stopped Ken Barlow from taking his own life in January 1991?", "Bet Gilroy", ["Deirdre Barlow", "Rita Fairclough", "Emily Bishop"], "Medium", "1991", "Storylines", ["Bet Gilroy", "Ken Barlow", "Suicide attempt", "Intervention"]],
    ["Whose engagement to Kimberley Taylor ended in January 1991?", "Curly Watts", ["Reg Holdsworth", "Steve McDonald", "Des Barnes"], "Medium", "1991", "Relationships", ["Curly Watts", "Kimberley Taylor", "Bettabuy", "Broken engagement"]],
    ["Which future Rovers barmaid made her Coronation Street debut in 1991?", "Raquel Wolstenhulme", ["Tina Fowler", "Gloria Todd", "Liz McDonald"], "Easy", "1991", "Arrivals", ["Raquel Wolstenhulme", "Rovers Return", "Character debut", "Barmaid"]],
    ["Which actress originally played Raquel Wolstenhulme?", "Sarah Lancashire", ["Amelia Bullmore", "Deborah McAndrew", "Sally Whittaker"], "Easy", "1991", "Actors", ["Raquel Wolstenhulme", "Sarah Lancashire", "Casting"]],
    ["What was the first name of Reg Holdsworth's wife who arrived from New Zealand?", "Veronica", ["Vivienne", "Victoria", "Valerie"], "Medium", "1991", "Families", ["Reg Holdsworth", "Veronica Holdsworth", "Holdsworth family"]],
    ["Which country did Reg Holdsworth's wife travel from when she arrived?", "New Zealand", ["Canada", "Australia", "South Africa"], "Medium", "1991", "Travel", ["Reg Holdsworth", "Veronica Holdsworth", "New Zealand", "Holdsworth family"]],
    ["Which relative of Vera Duckworth died while playing bingo?", "Her mother Amy Burton", ["Her aunt Cissie", "Her sister", "Her grandmother"], "Medium", "1991", "Families", ["Vera Duckworth", "Amy Burton", "Bingo", "Bereavement"]],
    ["Who broke the news to Vera Duckworth about her mother's death?", "Aunt Cissie", ["Jack Duckworth", "Liz McDonald", "Bet Gilroy"], "Hard", "1991", "Families", ["Vera Duckworth", "Aunt Cissie", "Amy Burton", "Bereavement"]],
    ["Which man told Vera Duckworth that he was her father?", "Joss Shackleton", ["Jack Walker", "Percy Sugden", "Peter Ingram"], "Medium", "1991", "Families", ["Vera Duckworth", "Joss Shackleton", "Parentage", "Duckworth family"]],
    ["Which young woman who had lived at Number 7 left Coronation Street?", "Jenny Bradley", ["Angie Freeman", "Kimberley Taylor", "Steph Barnes"], "Medium", "1991", "Departures", ["Jenny Bradley", "No. 7", "Departure", "Bradley family"]],
    ["Which landlord considered selling the Rovers Return?", "Alec Gilroy", ["Billy Walker", "Fred Gee", "Jack Duckworth"], "Medium", "1991", "Rovers Return", ["Alec Gilroy", "Rovers Return", "Pub sale", "Tenancy"]],
    ["Which Bettabuy employee moved into Number 7?", "Curly Watts", ["Reg Holdsworth", "Jim McDonald", "Mike Baldwin"], "Medium", "1991", "Homes", ["Curly Watts", "No. 7", "Bettabuy", "Housemates"]],
    ["Which fashion student shared Number 7 with Curly Watts?", "Angie Freeman", ["Raquel Wolstenhulme", "Kimberley Taylor", "Tina Fowler"], "Easy", "1991", "Homes", ["Angie Freeman", "Curly Watts", "No. 7", "Fashion design"]],
    ["Who accused Steph Barnes of having an affair after her holiday?", "Des Barnes", ["Jack Duckworth", "Kevin Webster", "Martin Platt"], "Medium", "1991", "Relationships", ["Steph Barnes", "Des Barnes", "Jealousy", "Marriage troubles"]],
    ["In which Cheshire town did Jack and Vera Duckworth find jobs as a chauffeur and housekeeper?", "Knutsford", ["Crewe", "Macclesfield", "Wilmslow"], "Hard", "1991", "Occupations", ["Jack Duckworth", "Vera Duckworth", "Knutsford", "Chauffeur", "Housekeeper"]],
    ["Which shopkeeper won a Weatherfield council election in 1991?", "Alf Roberts", ["Ken Barlow", "Mike Baldwin", "Reg Holdsworth"], "Medium", "1991", "Politics", ["Alf Roberts", "Weatherfield Council", "Local elections", "Corner Shop"]],
    ["Which woman challenged Alf Roberts in the 1991 council election?", "Deirdre Barlow", ["Audrey Roberts", "Liz McDonald", "Rita Fairclough"], "Medium", "1991", "Politics", ["Deirdre Barlow", "Alf Roberts", "Weatherfield Council", "Local elections"]],
    ["Which local campaigner made Audrey suspicious of Alf during the 1991 election?", "Vivienne Barford", ["Jackie Ingram", "Kimberley Taylor", "Dawn Prescott"], "Hard", "1991", "Relationships", ["Vivienne Barford", "Audrey Roberts", "Alf Roberts", "Election campaigning"]],
    ["What happened at Number 9 after Coronation Street's water supply was restored?", "The Duckworths' house flooded", ["Its roof collapsed", "A window was smashed", "Its kitchen caught fire"], "Medium", "1991", "Storylines", ["No. 9", "Jack Duckworth", "Vera Duckworth", "Flood", "Water supply"]],
    ["Which McDonald son was thrown out of No. 11 by Jim for refusing to attend school?", "Steve McDonald", ["Andy McDonald", "Nick Tilsley", "Peter Barlow"], "Medium", "1991", "Families", ["Steve McDonald", "Jim McDonald", "No. 11", "School refusal"]],
    ["Which wealthy widow did Mike Baldwin marry in 1991?", "Jackie Ingram", ["Alma Sedgewick", "Wendy Crozier", "Liz McDonald"], "Easy", "1991", "Weddings", ["Mike Baldwin", "Jackie Ingram", "Baldwin family", "Wedding"]],
    ["What was the first name of Jackie Ingram's late husband, whose factory Mike coveted?", "Peter", ["Phil", "Roger", "Nigel"], "Medium", "1991", "Families", ["Jackie Ingram", "Peter Ingram", "Ingram family", "Factory"]],
    ["Where did Mike Baldwin and Jackie Ingram marry?", "A register office", ["All Saints Church", "The Rovers Return", "St Luke's Church"], "Medium", "1991", "Weddings", ["Mike Baldwin", "Jackie Ingram", "Register office", "Wedding"]],
    ["What weapon did Jackie Baldwin threaten Mike with after discovering his deceptions?", "A shotgun", ["A carving knife", "A pistol", "A crowbar"], "Medium", "1991", "Storylines", ["Jackie Baldwin", "Mike Baldwin", "Shotgun", "Marriage breakdown"]],
    ["Which café's ownership helped cause a row between Jackie and Mike Baldwin?", "Jim's Café", ["The Royle Café", "The Rovers Return", "The Corner Shop"], "Medium", "1991", "Businesses", ["Jim's Café", "Mike Baldwin", "Jackie Ingram", "Business dispute"]],
    ["Which lodger deliberately disrupted Emily Bishop's efforts to sell Number 3?", "Percy Sugden", ["Curly Watts", "Reg Holdsworth", "Derek Wilton"], "Medium", "1991", "Homes", ["Percy Sugden", "Emily Bishop", "No. 3", "House sale"]],
    ["Which granddaughter of Alec Gilroy was left orphaned by a road accident?", "Vicky Arden", ["Jenny Bradley", "Tracy Barlow", "Rosie Webster"], "Medium", "1991", "Families", ["Vicky Arden", "Sandra Arden", "Tim Arden", "Road accident", "Orphaned"]],
    ["What happened to Sandra and Tim Arden, leaving their daughter Vicky orphaned?", "They died in a car crash", ["They emigrated to Australia", "They were arrested", "They moved to a cruise ship"], "Medium", "1991", "Storylines", ["Sandra Arden", "Tim Arden", "Vicky Arden", "Car crash", "Death"]],
    ["What was the name of Alec Gilroy's former wife who died?", "Joyce", ["Sandra", "Maureen", "Annie"], "Hard", "1991", "Families", ["Alec Gilroy", "Joyce Gilroy", "Gilroy family", "Bereavement"]],
    ["What did Des Barnes deliberately set on fire after a row with Steph?", "His boat", ["His car", "His garden shed", "His record collection"], "Medium", "1991", "Storylines", ["Des Barnes", "Steph Barnes", "Boat fire", "Marriage breakdown"]],
    ["Which woman left Des Barnes?", "Steph Barnes", ["Angie Freeman", "Raquel Wolstenhulme", "Kimberley Taylor"], "Medium", "1991", "Departures", ["Steph Barnes", "Des Barnes", "Barnes family", "Departure"]],
    ["Which supermarket won the best-float prize at the Weatherfield Carnival?", "Bettabuy", ["Freshco", "Costcutter", "Alf's Corner Shop"], "Medium", "1991", "Events", ["Bettabuy", "Weatherfield Carnival", "Winning float", "Community events"]],
    ["Who designed Bettabuy's prize-winning Weatherfield Carnival float?", "Angie Freeman", ["Mavis Wilton", "Rita Fairclough", "Audrey Roberts"], "Medium", "1991", "Events", ["Angie Freeman", "Bettabuy", "Weatherfield Carnival", "Float design"]],
    ["What was the theme of Bettabuy's prize-winning float at the 1991 Weatherfield Carnival?", "Horn of Plenty", ["The Wild West", "The Space Age", "The Royal Wedding"], "Hard", "1991", "Events", ["Horn of Plenty", "Bettabuy", "Weatherfield Carnival", "Float theme"]],
    ["Who proposed marriage to Martin Platt?", "Gail Tilsley", ["Alma Sedgewick", "Angie Freeman", "Liz McDonald"], "Easy", "1991", "Weddings", ["Gail Tilsley", "Martin Platt", "Marriage proposal", "Platt family"]],
    ["Who objected most strongly to Martin Platt adopting Gail's two older children?", "Ivy Brennan", ["Audrey Roberts", "Bet Gilroy", "Deirdre Barlow"], "Medium", "1991", "Families", ["Ivy Brennan", "Martin Platt", "Gail Tilsley", "Adoption dispute"]],
    ["Which two children did Martin Platt formally adopt in October 1991?", "Nicky and Sarah-Louise", ["Rosie and David", "Steve and Andy", "Tracy and Susan"], "Medium", "1991", "Families", ["Martin Platt", "Nicky Tilsley", "Sarah-Louise Tilsley", "Adoption", "Platt family"]],
    ["In which month of 1991 did Gail Tilsley and Martin Platt marry?", "September", ["January", "April", "December"], "Easy", "1991", "Weddings", ["Gail Tilsley", "Martin Platt", "Wedding", "Platt family"]],
    ["Which mechanic acted as a witness at Gail and Martin's 1991 wedding?", "Kevin Webster", ["Mark Casey", "Brian Tilsley", "Terry Duckworth"], "Medium", "1991", "Weddings", ["Kevin Webster", "Gail Tilsley", "Martin Platt", "Wedding witness"]],
    ["Which woman joined Kevin Webster as a witness at Gail and Martin's wedding?", "Alma Sedgewick", ["Ivy Brennan", "Bet Gilroy", "Wendy Crozier"], "Hard", "1991", "Weddings", ["Alma Sedgewick", "Kevin Webster", "Gail Tilsley", "Wedding witness"]],
    ["Where did Gail and Martin go on honeymoon after marrying?", "Abersoch", ["Blackpool", "Corfu", "Majorca"], "Medium", "1991", "Travel", ["Gail Tilsley", "Martin Platt", "Abersoch", "Honeymoon"]],
    ["Which house did supermarket manager Reg Holdsworth move into?", "Number 12", ["Number 2", "Number 7", "Number 9"], "Medium", "1991", "Homes", ["Reg Holdsworth", "No. 12", "Bettabuy", "New home"]],
    ["Which McDonald parent announced that she was pregnant?", "Liz McDonald", ["Vera Duckworth", "Sally Webster", "Deirdre Barlow"], "Easy", "1991", "Families", ["Liz McDonald", "Jim McDonald", "Pregnancy", "McDonald family"]],
    ["Which barmaid did Don Brennan begin an affair with?", "Julie Dewhurst", ["Raquel Wolstenhulme", "Tina Fowler", "Betty Turpin"], "Medium", "1991", "Relationships", ["Don Brennan", "Julie Dewhurst", "Ivy Brennan", "Affair", "Rovers Return"]],
    ["Which businessman helped Kevin Webster establish MVB Motors?", "Mike Baldwin", ["Reg Holdsworth", "Alf Roberts", "Alec Gilroy"], "Medium", "1991", "Businesses", ["Mike Baldwin", "Kevin Webster", "MVB Motors", "Garage business"]],
    ["What was the name of the garage business Kevin Webster began running?", "MVB Motors", ["Casey's Motors", "Webster's Autos", "Street Cars"], "Medium", "1991", "Businesses", ["Kevin Webster", "MVB Motors", "Garage opening", "Mechanics"]],
    ["Which former colleague did Kevin Webster refuse to employ at his new garage?", "Mark Casey", ["Brian Tilsley", "Bill Webster", "Terry Duckworth"], "Medium", "1991", "Businesses", ["Mark Casey", "Kevin Webster", "MVB Motors", "Garage jobs"]],
    ["Which man went on a hotel break with Alma Sedgewick, only to find they had been booked into the same room?", "Ken Barlow", ["Mike Baldwin", "Des Barnes", "Alec Gilroy"], "Medium", "1991", "Relationships", ["Ken Barlow", "Alma Sedgewick", "Hotel booking", "Romance"]],
    ["Which dog attacked Derek Wilton during the 1991 fox-hunt commotion?", "Boomer", ["Rover", "Lucky", "Jimmy"], "Hard", "1991", "Animals", ["Derek Wilton", "Boomer", "Dogs", "Fox hunting"]],
    ["Which woman became romantically involved with Curly Watts in early 1991?", "Raquel Wolstenhulme", ["Steph Barnes", "Jackie Ingram", "Sandra Arden"], "Easy", "1991", "Relationships", ["Curly Watts", "Raquel Wolstenhulme", "Romance", "Bettabuy"]]

];

// Build all 100 live quiz questions with the original rotating answer positions.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, specialistTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(601 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '1990s', year, topic, ...specialistTags])],
        dailyEligible: true
    };
});

// Check the expanded question objects, including the year split and specialist tags.
if (questions.length !== 100 || questions[0].id !== 'tv_0601' ||
    questions[99].id !== 'tv_0700' ||
    questions.filter(q => q.tags.includes('1990')).length !== 50 ||
    questions.filter(q => q.tags.includes('1991')).length !== 50) {
    throw new Error('Pack 166: incorrect question count, ID range or year split');
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
        !q.tags.includes('1990s') || q.tags.length < 6 ||
        !q.dailyEligible || q.category !== 'Television') {
        throw new Error('Pack 166: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenWording.add(wording);
}

module.exports = questions;
