// quiz_pack183.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2024 and 2025
// 100 questions: tv_2301 to tv_2400 (50 per year).
// Correctly tagged and checked, with ambiguous questions replaced.
// quiz_bank.js remains unchanged.

const facts = [

    // =====================================================
    // YEAR 2024
    // =====================================================

    ["Which café owner was wrongly jailed over the disappearance of Lauren Bolton?", "Roy Cropper", ["Nick Tilsley", "Brian Packham", "Ken Barlow"], "Easy", "2024", "Crime", ["Roy Cropper", "Lauren Bolton", "False Imprisonment", "Wrongful Arrest", "Missing Person"]],
    ["Which young woman was wrongly presumed murdered before returning alive?", "Lauren Bolton", ["Kelly Neelan", "Bethany Platt", "Summer Spellman"], "Easy", "2024", "Storylines", ["Lauren Bolton", "Missing Person", "Presumed Dead", "Return", "Roy Cropper"]],
    ["Who was the investigating detective in the Lauren Bolton case?", "Lisa Swain", ["Craig Tinker", "Neil Clifton", "Spider Nugent"], "Easy", "2024", "Crime", ["Lisa Swain", "Lauren Bolton", "Police Investigation", "Detective Sergeant", "Missing Person"]],
    ["Which Bailey solicitor worked to clear Roy Cropper's name?", "Dee-Dee Bailey", ["Aggie Bailey", "Sally Metcalfe", "Jenny Connor"], "Easy", "2024", "Crime", ["Dee-Dee Bailey", "Roy Cropper", "Legal Defence", "Wrongful Arrest", "Solicitor"]],
    ["Which resident invented a story about seeing an intruder to try to free Roy?", "Bobby Crawford", ["Daniel Osbourne", "Max Turner", "Ryan Connor"], "Medium", "2024", "Crime", ["Bobby Crawford", "Roy Cropper", "False Witness Statement", "Police", "Cover-Up"]],
    ["Which solicitor was exposed as Lauren Bolton's abuser?", "Joel Deering", ["Adam Barlow", "Imran Habeeb", "Todd Grimshaw"], "Easy", "2024", "Crime", ["Joel Deering", "Lauren Bolton", "Abuse", "Solicitor", "Grooming"]],
    ["Which woman was engaged to Joel Deering before discovering his crimes?", "Dee-Dee Bailey", ["Lauren Bolton", "Sarah Platt", "Toyah Battersby"], "Easy", "2024", "Relationships", ["Dee-Dee Bailey", "Joel Deering", "Engagement", "Deception", "Abuse Scandal"]],
    ["What name did Lauren Bolton give her premature baby boy?", "Frankie", ["Bertie", "Harry", "Joseph"], "Easy", "2024", "Families", ["Lauren Bolton", "Frankie Bolton", "Premature Birth", "Motherhood", "Hospital"]],
    ["Who was the father of Lauren Bolton's baby Frankie?", "Joel Deering", ["Max Turner", "Bobby Crawford", "Daniel Osbourne"], "Easy", "2024", "Families", ["Lauren Bolton", "Joel Deering", "Frankie Bolton", "Paternity", "Fatherhood"]],
    ["What did Joel Deering secretly give pregnant Lauren in an attempt to harm her?", "Drugs intended to induce premature labour", ["Sleeping tablets to cure insomnia", "A vitamin supplement", "Travel sickness tablets"], "Medium", "2024", "Crime", ["Joel Deering", "Lauren Bolton", "Premature Labour", "Drugging", "Pregnancy"]],
    ["Who was Joel Deering's estranged wife?", "Emily Wilkinson", ["Lydia Chambers", "Elaine Jones", "Christina Boyd"], "Medium", "2024", "Families", ["Joel Deering", "Emily Wilkinson", "Estranged Marriage", "Family Secrets", "Revelation"]],
    ["What was the name of Joel Deering and Emily Wilkinson's young daughter?", "Maeve", ["Glory", "Ruby", "Llio"], "Medium", "2024", "Families", ["Joel Deering", "Emily Wilkinson", "Maeve Deering", "Daughter", "Parentage"]],
    ["Who struck Joel Deering with a rock in the confrontation that killed him?", "Lauren Bolton", ["Dee-Dee Bailey", "Lisa Swain", "Carla Connor"], "Easy", "2024", "Crime", ["Lauren Bolton", "Joel Deering", "Fatal Confrontation", "Rock Attack", "Murder"]],
    ["Where was Joel Deering's body found?", "In a river", ["In the Rovers cellar", "Under the factory floor", "In the canal lock"], "Easy", "2024", "Crime", ["Joel Deering", "Body Discovery", "River", "Murder Investigation", "October 2024"]],
    ["Which teenager took the blame for Joel Deering's death to protect Lauren?", "Max Turner", ["Mason Radcliffe", "Dylan Wilson", "Aadi Alahan"], "Medium", "2024", "Crime", ["Max Turner", "Lauren Bolton", "Joel Deering", "False Confession", "Cover-Up"]],
    ["Who discovered she was expecting Joel Deering's baby?", "Dee-Dee Bailey", ["Lauren Bolton", "Sarah Platt", "Toyah Battersby"], "Easy", "2024", "Families", ["Dee-Dee Bailey", "Joel Deering", "Pregnancy Discovery", "Family Secret", "November 2024"]],
    ["Which woman learned that her long-lost son was police detective Kit Green?", "Bernie Winter", ["Jenny Connor", "Evelyn Plummer", "Elaine Jones"], "Easy", "2024", "Families", ["Bernie Winter", "Kit Green", "Long-Lost Son", "Adoption", "Family Reunion"]],
    ["Which childhood keepsake helped Bernie Winter identify her long-lost son Kit Green?", "A jade elephant", ["A teddy bear", "A silver bracelet", "A toy train"], "Medium", "2024", "Families", ["Kit Green", "Bernie Winter", "Jade Elephant", "Keepsake", "Adoption"]],
    ["Which actor joined the cast as Kit Green?", "Jacob Roberts", ["Peter Ash", "Colson Smith", "Ryan Clayton"], "Medium", "2024", "Actors", ["Jacob Roberts", "Kit Green", "Police Detective", "Cast Member", "New Arrival"]],
    ["Which resident died following his battle with motor neurone disease?", "Paul Foreman", ["Billy Mayhew", "Peter Barlow", "Johnny Connor"], "Easy", "2024", "Departures", ["Paul Foreman", "Motor Neurone Disease", "Death", "Billy Mayhew", "September 2024"]],
    ["Who was Paul Foreman's husband during his final months?", "Billy Mayhew", ["Todd Grimshaw", "Sean Tully", "George Shuttleworth"], "Easy", "2024", "Relationships", ["Paul Foreman", "Billy Mayhew", "Husband", "Marriage", "Motor Neurone Disease"]],
    ["Which woman was Paul Foreman's twin sister during his final storyline?", "Gemma Winter-Brown", ["Bernie Winter", "Summer Spellman", "Alina Pop"], "Easy", "2024", "Families", ["Gemma Winter-Brown", "Paul Foreman", "Twins", "Siblings", "Winter Family"]],
    ["What was the name of Paul Foreman and Gemma's estranged father who reappeared?", "Denny Foreman", ["Ed Bailey", "Ronnie Bailey", "Geoff Metcalfe"], "Medium", "2024", "Returns", ["Denny Foreman", "Paul Foreman", "Gemma Winter-Brown", "Estranged Father", "Return"]],
    ["Which married Platt woman had a one-night stand with detective Kit Green?", "Shona Platt", ["Sarah Platt", "Bethany Platt", "Gail Platt"], "Medium", "2024", "Relationships", ["Shona Platt", "Kit Green", "David Platt", "One-Night Stand", "Infidelity"]],
    ["Which mystifying self-help organisation targeted Leanne Battersby?", "The Institute", ["The Collective", "The Circle", "The Syndicate"], "Easy", "2024", "Storylines", ["Leanne Battersby", "The Institute", "Self-Help Group", "Manipulation", "Cult-Like Organisation"]],
    ["Which charismatic newcomer recruited Leanne Battersby into the Institute?", "Rowan Cunliffe", ["Joel Deering", "Kit Green", "Damon Hay"], "Easy", "2024", "Arrivals", ["Rowan Cunliffe", "Leanne Battersby", "The Institute", "Recruitment", "Manipulation"]],
    ["Which man did Toyah Battersby begin an affair with while her sister Leanne was involved with the Institute?", "Nick Tilsley", ["Peter Barlow", "Adam Barlow", "Ryan Connor"], "Easy", "2024", "Relationships", ["Toyah Battersby", "Nick Tilsley", "Leanne Battersby", "Affair", "Infidelity"]],
    ["Who blackmailed Nick Tilsley using knowledge of his affair with Toyah?", "Rowan Cunliffe", ["Joel Deering", "Harvey Gaskell", "Damon Hay"], "Medium", "2024", "Crime", ["Rowan Cunliffe", "Nick Tilsley", "Toyah Battersby", "Blackmail", "Affair"]],
    ["Which young Barlow was persuaded to invest her inheritance in the Institute?", "Amy Barlow", ["Tracy Barlow", "Sarah Barlow", "Summer Spellman"], "Easy", "2024", "Money", ["Amy Barlow", "The Institute", "Inheritance", "Financial Exploitation", "Investment"]],
    ["Which Battersby sister became alarmed by Leanne's involvement with the Institute?", "Toyah Battersby", ["Janice Battersby", "Eva Price", "Sarah Platt"], "Easy", "2024", "Families", ["Toyah Battersby", "Leanne Battersby", "The Institute", "Sisters", "Concern"]],
    ["Which young Platt underwent cosmetic surgery in Turkey that went badly wrong?", "Bethany Platt", ["Sarah Platt", "Shona Platt", "Lily Platt"], "Easy", "2024", "Storylines", ["Bethany Platt", "Turkey", "Cosmetic Surgery", "Medical Complications", "Liposuction"]],
    ["What kind of operation did Bethany Platt undergo in Turkey?", "Liposuction", ["A knee replacement", "Laser eye surgery", "A heart operation"], "Medium", "2024", "Storylines", ["Bethany Platt", "Liposuction", "Turkey", "Cosmetic Surgery", "Botched Operation"]],
    ["What permanent medical appliance did Bethany Platt need after complications from surgery?", "A stoma bag", ["A hearing aid", "A pacemaker", "A prosthetic hand"], "Medium", "2024", "Storylines", ["Bethany Platt", "Permanent Stoma", "Surgery Complications", "Turkey", "Stoma Bag"]],
    ["Which actress played Bethany Platt during the surgery storyline?", "Lucy Fallon", ["Tina O'Brien", "Charlotte Jordan", "Sally Carman"], "Easy", "2024", "Actors", ["Lucy Fallon", "Bethany Platt", "Cosmetic Surgery Storyline", "Actress", "Casting"]],
    ["Which footballer began an affair with Tracy McDonald?", "Tommy Orpington", ["James Bailey", "Corey Brent", "Ryan Connor"], "Easy", "2024", "Relationships", ["Tracy McDonald", "Tommy Orpington", "Affair", "Weatherfield County", "Romance"]],
    ["Which football club had Tommy Orpington played for?", "Weatherfield County", ["Manchester City", "Leeds United", "Preston North End"], "Easy", "2024", "Sport", ["Tommy Orpington", "Weatherfield County", "Football Club", "Former Footballer", "Sporting Career"]],
    ["With which former footballer did Tracy McDonald travel to Spain?", "Tommy Orpington", ["James Bailey", "Aadi Alahan", "Gary Windass"], "Easy", "2024", "Departures", ["Tracy McDonald", "Tommy Orpington", "Spain", "Departure", "Romance"]],
    ["Which Barlow family member left Weatherfield to work on his father's boat?", "Simon Barlow", ["Adam Barlow", "Bertie Osbourne", "Daniel Osbourne"], "Easy", "2024", "Departures", ["Simon Barlow", "Peter Barlow", "Sailing", "Departure", "Family"]],
    ["Which woman returned from Romania with Tyrone Dobbs's young son?", "Alina Pop", ["Fiz Dobbs", "Cassie Plummer", "Maria Connor"], "Easy", "2024", "Returns", ["Alina Pop", "Tyrone Dobbs", "Romania", "Return", "Dorin"]],
    ["What was the name of Tyrone Dobbs and Alina Pop's son?", "Dorin", ["Bertie", "Alfie", "Oliver"], "Medium", "2024", "Families", ["Tyrone Dobbs", "Alina Pop", "Dorin", "Fatherhood", "Child Reveal"]],
    ["Which youngster's bullying ordeal continued to affect the Connor family?", "Liam Connor", ["Jack Webster", "Bertie Osbourne", "Sam Blakeman"], "Easy", "2024", "Storylines", ["Liam Connor", "Mason Radcliffe", "School Bullying", "Mental Health", "Connor Family"]],
    ["Which reformed school bully was offered work at Speed Daal by Stu Carpenter?", "Mason Radcliffe", ["Corey Brent", "Max Turner", "Aaron Sandford"], "Medium", "2024", "Storylines", ["Mason Radcliffe", "Stu Carpenter", "Speed Daal", "Rehabilitation", "Employment"]],
    ["Who was the former Rovers entertainer whom Gail planned to marry on Christmas Day?", "Jesse Chadwick", ["Martin Platt", "Michael Rodwell", "Richard Hillman"], "Easy", "2024", "Weddings", ["Gail Platt", "Jesse Chadwick", "Christmas Wedding", "Marriage", "Rovers Return"]],
    ["Which country did Gail Platt leave Weatherfield for at Christmas?", "France", ["Canada", "Australia", "Italy"], "Easy", "2024", "Departures", ["Gail Platt", "France", "Christmas Exit", "Emigration", "Jesse Chadwick"]],
    ["Which actress ended her 50-year run as Gail Platt?", "Helen Worth", ["Sue Nicholls", "Sally Dynevor", "Barbara Knox"], "Easy", "2024", "Actors", ["Helen Worth", "Gail Platt", "50 Years", "Actress", "Farewell"]],
    ["Which former husband appeared in Gail's Christmas Day dream?", "Richard Hillman", ["Brian Tilsley", "Joe McIntyre", "Michael Rodwell"], "Medium", "2024", "Storylines", ["Richard Hillman", "Gail Platt", "Christmas Dream", "Former Husband", "Vision"]],
    ["Which female detective formed a growing personal connection with Carla Connor?", "Lisa Swain", ["Dee-Dee Bailey", "Paula Martin", "Jess Heywood"], "Easy", "2024", "Relationships", ["Lisa Swain", "Carla Connor", "Romance", "Police Detective", "Relationship"]],
    ["Who was detective Lisa Swain's daughter?", "Betsy Swain", ["Kelly Neelan", "Asha Alahan", "Summer Spellman"], "Easy", "2024", "Families", ["Betsy Swain", "Lisa Swain", "Mother and Daughter", "New Character", "Family"]],
    ["Which young woman became friendly with Carla Connor and worked at Underworld?", "Betsy Swain", ["Miley Hodge", "Glory Bailey", "Lily Platt"], "Medium", "2024", "Businesses", ["Betsy Swain", "Carla Connor", "Underworld", "Factory Work", "Friendship"]],
    ["Which former Coronation Street resident was reported dead after a workplace accident?", "Les Battersby", ["Jim McDonald", "Terry Duckworth", "Curly Watts"], "Easy", "2024", "Departures", ["Les Battersby", "Death Off Screen", "Workplace Accident", "November 2024", "Battersby Family"]],

    // =====================================================
    // YEAR 2025
    // =====================================================

    ["Which teenager was fatally stabbed by his brothers?", "Mason Radcliffe", ["Dylan Wilson", "Max Turner", "Simon Barlow"], "Easy", "2025", "Departures", ["Mason Radcliffe", "Knife Crime", "Matty Radcliffe", "Logan Radcliffe", "Murder"]],
    ["Which two brothers were responsible for attacking Mason Radcliffe?", "Matty and Logan Radcliffe", ["Ryan and Ali Connor", "Aadi and Asha Alahan", "Daniel and Adam Barlow"], "Easy", "2025", "Crime", ["Matty Radcliffe", "Logan Radcliffe", "Mason Radcliffe", "Brotherhood", "Knife Attack"]],
    ["In which country had Mason Radcliffe planned a fresh start before his death?", "Germany", ["Spain", "Canada", "Australia"], "Medium", "2025", "Departures", ["Mason Radcliffe", "Germany", "New Start", "Stu Carpenter", "Plans Interrupted"]],
    ["Which policeman was murdered while on duty?", "Craig Tinker", ["Kit Green", "Spider Nugent", "Neil Clifton"], "Easy", "2025", "Departures", ["Craig Tinker", "Police Officer", "Murder", "On Duty", "May 2025"]],
    ["Who attacked PC Craig Tinker with a baseball bat?", "Mick Michaelis", ["Rob Donovan", "Kit Green", "Damon Hay"], "Easy", "2025", "Crime", ["Mick Michaelis", "Craig Tinker", "Baseball Bat", "Police Murder", "Violence"]],
    ["Which actor left the role of Craig Tinker after his death storyline?", "Colson Smith", ["Jacob Roberts", "Rob Mallard", "Sam Aston"], "Easy", "2025", "Actors", ["Colson Smith", "Craig Tinker", "Actor Exit", "Cast Member", "Police Officer"]],
    ["Which returning character died during a lakeside outing with her half-sister?", "Julie Carp", ["Daisy Midgeley", "Jenny Connor", "Cathy Matthews"], "Easy", "2025", "Departures", ["Julie Carp", "Eileen Grimshaw", "Lakeside", "Death", "Terminal Illness"]],
    ["How was Julie Carp related to Eileen Grimshaw?", "She was Eileen's half-sister", ["She was Eileen's daughter", "She was Eileen's niece", "She was Eileen's aunt"], "Easy", "2025", "Families", ["Julie Carp", "Eileen Grimshaw", "Half-Sisters", "Family Relationship", "Grimshaw Family"]],
    ["Which serious illness did Julie Carp reveal she had?", "Stage four sarcoma", ["Motor neurone disease", "Vascular dementia", "Multiple sclerosis"], "Medium", "2025", "Storylines", ["Julie Carp", "Stage Four Sarcoma", "Terminal Cancer", "Illness Disclosure", "Health"]],
    ["Which actress returned as Julie Carp for her farewell storyline?", "Katy Cavanagh", ["Sue Cleaver", "Jane Danson", "Jodie Prenger"], "Medium", "2025", "Actors", ["Katy Cavanagh", "Julie Carp", "Return", "Actress", "Farewell Storyline"]],
    ["Which longstanding Street resident left to join her son Jason in Thailand?", "Eileen Grimshaw", ["Sally Metcalfe", "Jenny Connor", "Yasmeen Nazir"], "Easy", "2025", "Departures", ["Eileen Grimshaw", "Jason Grimshaw", "Thailand", "Departure", "June 2025"]],
    ["Which son of Eileen Grimshaw was waiting for her in Thailand?", "Jason Grimshaw", ["Todd Grimshaw", "Billy Mayhew", "George Shuttleworth"], "Easy", "2025", "Families", ["Jason Grimshaw", "Eileen Grimshaw", "Mother and Son", "Thailand", "Family Reunion"]],
    ["Which actress departed Coronation Street as Eileen Grimshaw?", "Sue Cleaver", ["Sally Dynevor", "Maureen Lipman", "Shelley King"], "Easy", "2025", "Actors", ["Sue Cleaver", "Eileen Grimshaw", "Actress", "Cast Exit", "Long-Serving Resident"]],
    ["What name was given to Dee-Dee Bailey's baby girl?", "Laila", ["Maeve", "Glory", "Susie"], "Easy", "2025", "Families", ["Dee-Dee Bailey", "Laila Bailey", "Baby Name", "Childbirth", "Motherhood"]],
    ["Who was the father of Dee-Dee Bailey's daughter Laila?", "Joel Deering", ["Adam Barlow", "Imran Habeeb", "Ronnie Bailey"], "Easy", "2025", "Families", ["Joel Deering", "Dee-Dee Bailey", "Laila Bailey", "Paternity", "Fatherhood"]],
    ["Which relative did Dee-Dee initially plan to have adopt baby Laila?", "Her brother James Bailey", ["Her father Ed Bailey", "Her uncle Ronnie Bailey", "Her brother Michael Bailey"], "Medium", "2025", "Families", ["Dee-Dee Bailey", "James Bailey", "Laila Bailey", "Adoption Plans", "Siblings"]],
    ["Which Bailey woman needed an emergency hysterectomy after giving birth?", "Dee-Dee Bailey", ["Aggie Bailey", "Grace Vickers", "Glory Bailey"], "Medium", "2025", "Storylines", ["Dee-Dee Bailey", "Emergency Hysterectomy", "Maternity Care", "Birth Complications", "Hospital"]],
    ["Which convicted killer returned and arranged to donate a kidney to his sister?", "Rob Donovan", ["Pat Phelan", "Rick Neelan", "Nathan Curtis"], "Easy", "2025", "Returns", ["Rob Donovan", "Carla Connor", "Kidney Donation", "Convicted Murderer", "Return"]],
    ["To which sister did Rob Donovan offer a kidney transplant?", "Carla Connor", ["Tracy Barlow", "Michelle Connor", "Jenny Connor"], "Easy", "2025", "Families", ["Rob Donovan", "Carla Connor", "Kidney Transplant", "Siblings", "Organ Donation"]],
    ["Which prison officer helped Rob Donovan with his escape plot?", "Mandy", ["Lisa", "Dee-Dee", "Betsy"], "Medium", "2025", "Crime", ["Rob Donovan", "Mandy", "Prison Officer", "Escape Plan", "Criminal Conspiracy"]],
    ["Which teenage girl was shot in the arm during Rob Donovan's escape storyline?", "Betsy Swain", ["Amy Barlow", "Lily Platt", "Hope Stape"], "Medium", "2025", "Crime", ["Betsy Swain", "Rob Donovan", "Shooting", "Gunshot Wound", "Escape"]],
    ["Which detective got engaged to Carla Connor?", "Lisa Swain", ["Dee-Dee Bailey", "Paula Martin", "Jess Heywood"], "Easy", "2025", "Relationships", ["Lisa Swain", "Carla Connor", "Engagement", "Proposal", "September 2025"]],
    ["Which former partner of Lisa Swain turned up alive in Weatherfield?", "Becky Swain", ["Rana Habeeb", "Kate Connor", "Tina McIntyre"], "Easy", "2025", "Returns", ["Becky Swain", "Lisa Swain", "Return From Dead", "Marriage", "Surprise Arrival"]],
    ["In which country had Becky Swain been living before her surprise return to Weatherfield?", "Spain", ["France", "Portugal", "Italy"], "Medium", "2025", "Returns", ["Becky Swain", "Spain", "Alicante", "Return From Dead", "Witness Protection"]],
    ["Which Webster man was diagnosed with testicular cancer?", "Kevin Webster", ["Tim Metcalfe", "Carl Webster", "Jack Webster"], "Easy", "2025", "Storylines", ["Kevin Webster", "Testicular Cancer", "Medical Diagnosis", "Health", "Webster Family"]],
    ["Which Webster woman learned she had vascular dementia?", "Debbie Webster", ["Sally Metcalfe", "Rosie Webster", "Abi Webster"], "Easy", "2025", "Storylines", ["Debbie Webster", "Vascular Dementia", "Medical Diagnosis", "Cognitive Decline", "Health"]],
    ["Which man arrived as Kevin and Debbie Webster's half-brother?", "Carl Webster", ["Ronnie Bailey", "Jason Grimshaw", "Andy Carver"], "Easy", "2025", "Arrivals", ["Carl Webster", "Kevin Webster", "Debbie Webster", "Half-Brother", "New Arrival"]],
    ["Which actor joined the cast as Carl Webster?", "Jonathan Howard", ["Michael Le Vell", "Joe Duttine", "Jack P Shepherd"], "Medium", "2025", "Actors", ["Jonathan Howard", "Carl Webster", "Actor", "Casting", "Webster Family"]],
    ["Which woman had an affair with her husband Kevin's half-brother Carl?", "Abi Webster", ["Sally Metcalfe", "Debbie Webster", "Jenny Connor"], "Easy", "2025", "Relationships", ["Abi Webster", "Carl Webster", "Kevin Webster", "Affair", "Infidelity"]],
    ["Which man was Debbie Webster's partner during her dementia diagnosis?", "Ronnie Bailey", ["Ed Bailey", "Kevin Webster", "Steve McDonald"], "Easy", "2025", "Relationships", ["Ronnie Bailey", "Debbie Webster", "Relationship", "Dementia Diagnosis", "Support"]],
    ["Who set fire to Number 8 Coronation Street?", "Max Turner", ["David Platt", "Harvey Gaskell", "Shona Platt"], "Easy", "2025", "Crime", ["Max Turner", "Number Eight", "Platt House", "Arson", "February 2025"]],
    ["Why did Max Turner set fire to the Platts' home?", "To stage an insurance claim", ["To hide a burglary", "To destroy a secret letter", "To frighten his father"], "Medium", "2025", "Crime", ["Max Turner", "Platt Family", "Insurance Fraud", "Arson", "Harvey Gaskell"]],
    ["Who did Max Turner owe money connected with the arson plot?", "Harvey Gaskell", ["Damon Hay", "Rowan Cunliffe", "Joel Deering"], "Medium", "2025", "Crime", ["Max Turner", "Harvey Gaskell", "Debt", "Arson Plot", "Blackmail"]],
    ["Which Barlow resident was secretly drugged by Cassie Plummer?", "Ken Barlow", ["Peter Barlow", "Adam Barlow", "Daniel Osbourne"], "Easy", "2025", "Crime", ["Ken Barlow", "Cassie Plummer", "Drugging", "Poisoning", "Elder Abuse"]],
    ["Which medical emergency struck Ken Barlow after he confronted Cassie Plummer?", "A heart attack", ["A stroke", "A broken hip", "A seizure"], "Medium", "2025", "Storylines", ["Ken Barlow", "Cassie Plummer", "Heart Attack", "Confrontation", "Hospital"]],
    ["Which couple arrived and became known as Weatherfield's nightmare neighbours?", "Mick and Lou Michaelis", ["Kit and Lisa Swain", "Carl and Abi Webster", "Damon and Sarah Hay"], "Easy", "2025", "Arrivals", ["Mick Michaelis", "Lou Michaelis", "Neighbours", "New Arrival", "Troublemakers"]],
    ["Which actor played the violent newcomer Mick Michaelis?", "Joe Layton", ["Jacob Roberts", "Peter Ash", "Calum Lill"], "Medium", "2025", "Actors", ["Joe Layton", "Mick Michaelis", "Actor", "Casting", "Violence"]],
    ["Which actress played Lou Michaelis?", "Farrel Hegarty", ["Charlotte Jordan", "Jodie Prenger", "Lucy Fallon"], "Medium", "2025", "Actors", ["Farrel Hegarty", "Lou Michaelis", "Actress", "Casting", "Neighbours"]],
    ["Which young man was revealed to be the biological son of Kit Green?", "Brody Michaelis", ["Dylan Wilson", "Max Turner", "Liam Connor"], "Easy", "2025", "Families", ["Brody Michaelis", "Kit Green", "Paternity Revelation", "Father and Son", "Family Secret"]],
    ["Which woman plotted with her daughter Daisy to catfish Jenny Connor?", "Christina Boyd", ["Bernie Winter", "Elaine Jones", "Debbie Webster"], "Easy", "2025", "Crime", ["Christina Boyd", "Daisy Midgeley", "Jenny Connor", "Catfishing", "Deception"]],
    ["What was the first name of the fake romantic interest used to deceive Jenny Connor?", "Dom", ["Damon", "Daniel", "Denny"], "Medium", "2025", "Crime", ["Dom", "Jenny Connor", "Fake Dating Profile", "Catfishing", "Christina Boyd"]],
    ["Which character left Weatherfield after deceiving Jenny Connor?", "Daisy Midgeley", ["Betsy Swain", "Shona Platt", "Carla Connor"], "Easy", "2025", "Departures", ["Daisy Midgeley", "Jenny Connor", "Fraud", "Departure", "May 2025"]],
    ["Which actress departed as Daisy Midgeley?", "Charlotte Jordan", ["Lucy Fallon", "Cait Fitton", "Tina O'Brien"], "Easy", "2025", "Actors", ["Charlotte Jordan", "Daisy Midgeley", "Actress", "Exit", "Casting"]],
    ["To which Indonesian island did Daisy Midgeley fly after leaving Weatherfield?", "Bali", ["Java", "Sumatra", "Lombok"], "Medium", "2025", "Departures", ["Daisy Midgeley", "Bali", "Indonesia", "Departure", "New Start"]],
    ["Which new love interest of Todd Grimshaw was involved in a conversion-therapy storyline?", "Theo Silverton", ["Mick Michaelis", "Carl Webster", "Kit Green"], "Easy", "2025", "Relationships", ["Theo Silverton", "Todd Grimshaw", "Conversion Therapy", "Romance", "LGBTQ Storyline"]],
    ["Which teenager was groomed by athletics coach Megan Walsh?", "Will Driscoll", ["Brody Michaelis", "Dylan Wilson", "Liam Connor"], "Medium", "2025", "Storylines", ["Will Driscoll", "Megan Walsh", "Grooming", "Athletics Coach", "Exploitation"]],
    ["Which former Street resident returned with the Driscoll family?", "Eva Price", ["Stella Price", "Michelle Connor", "Liz McDonald"], "Easy", "2025", "Returns", ["Eva Price", "Driscoll Family", "Rovers Return", "Homecoming", "October 2025"]],
    ["Which actress returned as Eva Price?", "Catherine Tyldesley", ["Sally Ann Matthews", "Alison King", "Jane Danson"], "Easy", "2025", "Actors", ["Catherine Tyldesley", "Eva Price", "Actress", "Return", "Casting"]],
    ["Which character became the new landlady of the Rovers Return?", "Eva Price", ["Carla Connor", "Sally Metcalfe", "Leanne Battersby"], "Medium", "2025", "Businesses", ["Eva Price", "Rovers Return", "Landlady", "Ben Driscoll", "Pub Ownership"]],
    ["Which young Dobbs sister was revealed to be behind online messages targeting Hope?", "Ruby Dobbs", ["Lily Platt", "Summer Spellman", "Asha Alahan"], "Medium", "2025", "Families", ["Ruby Dobbs", "Hope Stape", "Online Bullying", "Sisters", "Anonymous Messages"]]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, detailTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(2301 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '2020s', year, topic, ...detailTags])],
        dailyEligible: true
    };
});

// =====================================================
// VALIDATION
// =====================================================

if (
    questions.length !== 100 ||
    questions[0].id !== 'tv_2301' ||
    questions[99].id !== 'tv_2400' ||
    questions.filter(q => q.tags.includes('2024')).length !== 50 ||
    questions.filter(q => q.tags.includes('2025')).length !== 50
) {
    throw new Error('Pack 183: incorrect count, years or ID range');
}

const seenIds = new Set();
const seenQuestions = new Set();

for (const q of questions) {
    const key = q.question.toLowerCase()
        .replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();

    if (
        seenIds.has(q.id) ||
        seenQuestions.has(key) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        q.category !== 'Television' ||
        !q.dailyEligible ||
        q.tags.length !== 10 ||
        q.tags.some(t => typeof t !== 'string' || !t.trim())
    ) {
        throw new Error('Pack 183: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
