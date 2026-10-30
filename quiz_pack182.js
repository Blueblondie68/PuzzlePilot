// quiz_pack182.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2022 and 2023
// 100 questions: tv_2201 to tv_2300 (50 per year).
// Fully audited metadata, specific tags and question wording.
// quiz_bank.js remains unchanged.

const facts = [

    // 2022

    ["Which elderly man died after being knocked down by Faye Windass and Emma Brooker's car?", "Ted Spear", ["Teddy Thompkins", "Rick Neelan", "Geoff Metcalfe"], "Medium", "2022", "Storylines", ["Ted Spear", "Faye Windass", "Emma Brooker", "Road Accident", "Death"]],
    ["Who was driving the car when Ted Spear was knocked down on New Year's Day?", "Faye Windass", ["Emma Brooker", "Abi Webster", "Kelly Neelan"], "Easy", "2022", "Crime", ["Faye Windass", "Emma Brooker", "Ted Spear", "Learner Driver", "Road Collision"]],
    ["Which policeman destroyed evidence to protect Faye Windass?", "Craig Tinker", ["Neil Clifton", "DS MacKinnon", "Spider Nugent"], "Easy", "2022", "Crime", ["Craig Tinker", "Faye Windass", "Evidence Destruction", "Police", "Cover-Up"]],
    ["To which country did Emma Brooker move with Jon Spear?", "Australia", ["Canada", "New Zealand", "France"], "Easy", "2022", "Departures", ["Emma Brooker", "Jon Spear", "Australia", "Emigration", "Romance"]],
    ["Which major heart operation did Tim Metcalfe undergo?", "A triple bypass", ["A heart transplant", "A valve replacement", "A pacemaker insertion"], "Medium", "2022", "Storylines", ["Tim Metcalfe", "Triple Heart Bypass", "Heart Surgery", "Sally Metcalfe", "Hospital"]],
    ["Who secretly spiked Amy Barlow's drink at a Valentine's Day event?", "Max Turner", ["Jacob Hay", "Aaron Sandford", "Aadi Alahan"], "Easy", "2022", "Crime", ["Amy Barlow", "Max Turner", "Drink Spiking", "Valentine's Dance", "School Event"]],
    ["Who was Max Turner actually intending to drug when he spiked a drink?", "Daniel Osbourne", ["Jacob Hay", "Adam Barlow", "Simon Barlow"], "Medium", "2022", "Crime", ["Max Turner", "Daniel Osbourne", "Drink Spiking", "Mistaken Target", "Revenge"]],
    ["Which teacher pushed Max Turner down the stairs during a confrontation?", "Daniel Osbourne", ["Brian Packham", "Ken Barlow", "Roy Cropper"], "Easy", "2022", "Storylines", ["Daniel Osbourne", "Max Turner", "Staircase Fall", "Confrontation", "Schoolteacher"]],
    ["Which woman fabricated an affair with Adam Barlow and tried to ruin his marriage?", "Lydia Chambers", ["Daisy Midgeley", "Nina Lucas", "Sarah Barlow"], "Medium", "2022", "Storylines", ["Lydia Chambers", "Adam Barlow", "Sarah Barlow", "Invented Affair", "Deception"]],
    ["Who pushed Adam Barlow off a balcony during a confrontation?", "Lydia Chambers", ["Sarah Barlow", "Carla Connor", "Tracy McDonald"], "Medium", "2022", "Crime", ["Lydia Chambers", "Adam Barlow", "Balcony Fall", "Assault", "Revenge"]],
    ["Which woman gave birth to a baby boy named Alfie?", "Abi Webster", ["Toyah Battersby", "Fiz Stape", "Alina Pop"], "Easy", "2022", "Families", ["Abi Webster", "Alfie Franklin", "Childbirth", "Imran Habeeb", "Motherhood"]],
    ["Who was the biological father of Abi Webster's baby Alfie?", "Imran Habeeb", ["Kevin Webster", "Peter Barlow", "Adam Barlow"], "Easy", "2022", "Families", ["Alfie Franklin", "Abi Webster", "Imran Habeeb", "Paternity", "Fatherhood"]],
    ["Whom did Imran Habeeb marry?", "Toyah Battersby", ["Abi Webster", "Leanne Battersby", "Alya Nazir"], "Easy", "2022", "Weddings", ["Imran Habeeb", "Toyah Battersby", "Marriage", "Wedding Ceremony", "Relationships"]],
    ["What dishonest tactic did Imran Habeeb use to win custody of Alfie?", "He arranged false testimony", ["He forged the baby's birth certificate", "He bribed a judge", "He faked a DNA test"], "Medium", "2022", "Crime", ["Imran Habeeb", "Abi Webster", "Alfie Franklin", "Custody Dispute", "False Testimony"]],
    ["Who was driving the car in the fatal crash involving Imran Habeeb?", "Toyah Battersby", ["Abi Webster", "Leanne Battersby", "Kelly Neelan"], "Easy", "2022", "Crime", ["Toyah Battersby", "Imran Habeeb", "Fatal Car Crash", "Police Investigation", "Road Accident"]],
    ["What happened to Imran Habeeb after pulling Toyah from their crashed car?", "He suffered a fatal cardiac arrest", ["He was arrested", "He fled Weatherfield", "He was left paralysed"], "Medium", "2022", "Departures", ["Imran Habeeb", "Toyah Battersby", "Death", "Cardiac Arrest", "Car Crash"]],
    ["What verdict did Toyah Battersby receive at her trial over Imran Habeeb's death?", "Not guilty", ["Guilty of murder", "Guilty of manslaughter", "The jury failed to agree"], "Easy", "2022", "Crime", ["Toyah Battersby", "Imran Habeeb", "Trial", "Acquittal", "Murder Charge"]],
    ["Which former love interest of Ken Barlow helped look after Abi and baby Alfie?", "Wendy Papadopoulos", ["Claudia Colby", "Martha Fraser", "Elaine Jones"], "Medium", "2022", "Returns", ["Wendy Papadopoulos", "Ken Barlow", "Abi Webster", "Alfie Franklin", "Childcare"]],
    ["What condition was Faye Windass diagnosed with?", "Premature menopause", ["Multiple sclerosis", "Coeliac disease", "Endometriosis"], "Medium", "2022", "Storylines", ["Faye Windass", "Premature Menopause", "Medical Diagnosis", "Women's Health", "Craig Tinker"]],
    ["Which man did Fiz Stape marry before immediately regretting it?", "Phill Whittaker", ["Tyrone Dobbs", "Chesney Brown", "Brian Packham"], "Easy", "2022", "Weddings", ["Fiz Stape", "Phill Whittaker", "Wedding Ceremony", "Marriage", "Tyrone Dobbs"]],
    ["Who did Fiz Stape leave Phill Whittaker to reunite with?", "Tyrone Dobbs", ["Daniel Osbourne", "Peter Barlow", "Adam Barlow"], "Easy", "2022", "Relationships", ["Fiz Stape", "Tyrone Dobbs", "Phill Whittaker", "Reunion", "Romance"]],
    ["Which longstanding couple married on Christmas Day 2022?", "Tyrone Dobbs and Fiz Stape", ["Steve McDonald and Tracy Barlow", "Chesney Brown and Gemma Winter", "Daniel Osbourne and Daisy Midgeley"], "Easy", "2022", "Weddings", ["Fiz Stape", "Tyrone Dobbs", "Christmas Wedding", "Marriage", "Surprise Ceremony"]],
    ["Who was the biological mother of Kelly Neelan, who died of cancer?", "Laura Neelan", ["Maria Connor", "Jenny Connor", "Abi Webster"], "Easy", "2022", "Families", ["Kelly Neelan", "Laura Neelan", "Cancer", "Death", "Mother and Daughter"]],
    ["Which woman falsely confessed to killing Rick Neelan shortly before dying?", "Laura Neelan", ["Kelly Neelan", "Sharon Bentley", "Toyah Battersby"], "Medium", "2022", "Crime", ["Laura Neelan", "Rick Neelan", "Gary Windass", "False Confession", "Murder Cover-Up"]],
    ["Which Alahan teenager proposed to Kelly Neelan after their pretend engagement turned real?", "Aadi Alahan", ["Asha Alahan", "Max Turner", "Simon Barlow"], "Easy", "2022", "Relationships", ["Kelly Neelan", "Aadi Alahan", "Engagement", "Teen Romance", "Alahan Family"]],
    ["Who was shot while protecting Kelly Neelan from a gunman?", "Aadi Alahan", ["Gary Windass", "Craig Tinker", "Dev Alahan"], "Easy", "2022", "Crime", ["Aadi Alahan", "Kelly Neelan", "Shooting", "Gunman", "Rooftop"]],
    ["Which man had secretly killed Kelly Neelan's father Rick, a truth she discovered?", "Gary Windass", ["Pat Phelan", "Imran Habeeb", "Peter Barlow"], "Easy", "2022", "Crime", ["Gary Windass", "Rick Neelan", "Kelly Neelan", "Murder Secret", "Revelation"]],
    ["Where did Kelly Neelan intend to elope with Aadi?", "Gretna Green", ["Blackpool", "Las Vegas", "Brighton"], "Medium", "2022", "Relationships", ["Kelly Neelan", "Aadi Alahan", "Gretna Green", "Elopement", "Wedding Plans"]],
    ["Which veteran resident revealed that she had attempted to take her own life?", "Audrey Roberts", ["Rita Tanner", "Evelyn Plummer", "Mary Taylor"], "Easy", "2022", "Storylines", ["Audrey Roberts", "Suicide Attempt", "Mental Health", "Family Confession", "Wellbeing"]],
    ["Which son of Audrey Roberts returned to Weatherfield from Canada?", "Stephen Reid", ["Nick Tilsley", "David Platt", "Lewis Archer"], "Easy", "2022", "Returns", ["Stephen Reid", "Audrey Roberts", "Canada", "Return", "Platt Family"]],
    ["Who was Stephen Reid's first murder victim?", "Leo Thompkins", ["Teddy Thompkins", "Rufus Donahue", "Geoff Metcalfe"], "Easy", "2022", "Crime", ["Stephen Reid", "Leo Thompkins", "Murder", "First Victim", "Financial Fraud"]],
    ["Which Rovers landlady was engaged to Leo Thompkins before his death?", "Jenny Connor", ["Daisy Midgeley", "Liz McDonald", "Glenda Shuttleworth"], "Easy", "2022", "Relationships", ["Jenny Connor", "Leo Thompkins", "Engagement", "Rovers Return", "Romance"]],
    ["Which businessman killed Leo Thompkins after Leo discovered his financial deception?", "Stephen Reid", ["Gary Windass", "Rick Neelan", "Damon Hay"], "Easy", "2022", "Crime", ["Stephen Reid", "Leo Thompkins", "Financial Deception", "Murder", "Fatal Confrontation"]],
    ["Which member of the Bailey family arrived as a solicitor?", "Dee-Dee Bailey", ["Aggie Bailey", "Glory Bailey", "Angie Appleton"], "Easy", "2022", "Arrivals", ["Dee-Dee Bailey", "Ed Bailey", "Solicitor", "Bailey Family", "New Arrival"]],
    ["How was Dee-Dee Bailey related to Ed Bailey when she arrived?", "She was his daughter", ["She was his sister", "She was his niece", "She was his cousin"], "Easy", "2022", "Families", ["Dee-Dee Bailey", "Ed Bailey", "Father and Daughter", "Bailey Family", "Family Connections"]],
    ["Which professional footballer suffered a heart attack on the pitch?", "James Bailey", ["Michael Bailey", "Aadi Alahan", "Ryan Connor"], "Easy", "2022", "Storylines", ["James Bailey", "Football", "Heart Attack", "Weatherfield County", "Medical Emergency"]],
    ["What heart condition was James Bailey diagnosed with?", "Cardiomyopathy", ["Angina", "Atrial fibrillation", "Pericarditis"], "Medium", "2022", "Storylines", ["James Bailey", "Cardiomyopathy", "Medical Diagnosis", "Heart Condition", "Football"]],
    ["Which familiar environmental campaigner returned to Weatherfield?", "Spider Nugent", ["Curly Watts", "Dennis Tanner", "Reg Holdsworth"], "Easy", "2022", "Returns", ["Spider Nugent", "Environmental Campaigning", "Return", "Toyah Battersby", "Activism"]],
    ["What secret occupation did Spider Nugent have while infiltrating an extremist group?", "Undercover police officer", ["Investigative journalist", "Private investigator", "Security guard"], "Medium", "2022", "Occupations", ["Spider Nugent", "Undercover Police", "Griff Reynolds", "Infiltration", "Extremist Group"]],
    ["Which extremist leader targeted Max Turner for radicalisation?", "Griff Reynolds", ["Damon Hay", "Harvey Gaskell", "Rick Neelan"], "Easy", "2022", "Storylines", ["Griff Reynolds", "Max Turner", "Extremism", "Radicalisation", "Far-Right Gang"]],
    ["Which teenager did Griff Reynolds recruit to make online propaganda videos?", "Max Turner", ["Aadi Alahan", "Simon Barlow", "Craig Tinker"], "Easy", "2022", "Crime", ["Max Turner", "Griff Reynolds", "Propaganda Videos", "Radicalisation", "Extremism"]],
    ["Which refugee was targeted by hostility from Griff Reynolds' group?", "Daryan Zahawi", ["Imran Habeeb", "Zeedan Nazir", "James Bailey"], "Medium", "2022", "Storylines", ["Daryan Zahawi", "Griff Reynolds", "Refugees", "Racism", "Extremism"]],
    ["Which resident was targeted by a deepfake video during her political work?", "Maria Connor", ["Jenny Connor", "Sally Metcalfe", "Alya Nazir"], "Medium", "2022", "Storylines", ["Maria Connor", "Deepfake Video", "Political Campaign", "Harassment", "Local Council"]],
    ["Who helped Ryan Connor stage a fake break-in at the Bistro?", "Debbie Webster", ["Jenny Connor", "Carla Connor", "Maria Connor"], "Medium", "2022", "Crime", ["Debbie Webster", "Ryan Connor", "Viaduct Bistro", "Insurance Fraud", "Staged Burglary"]],
    ["Which former flame of Ken Barlow returned, causing tension with Wendy Papadopoulos?", "Martha Fraser", ["Wendy Papadopoulos", "Claudia Colby", "Elaine Jones"], "Medium", "2022", "Returns", ["Martha Fraser", "Ken Barlow", "Wendy Papadopoulos", "Return", "Past Romance"]],
    ["Who was George Shuttleworth's sister, who arrived in Weatherfield?", "Glenda Shuttleworth", ["Eileen Grimshaw", "Mary Taylor", "Evelyn Plummer"], "Easy", "2022", "Families", ["Glenda Shuttleworth", "George Shuttleworth", "Siblings", "Shuttleworth Family", "New Arrival"]],
    ["Which musical-theatre performer joined Coronation Street as Glenda Shuttleworth?", "Jodie Prenger", ["Kym Marsh", "Faye Brookes", "Jane Danson"], "Medium", "2022", "Actors", ["Jodie Prenger", "Glenda Shuttleworth", "Casting", "Musical Theatre", "Actress"]],
    ["Which teenager agreed to let Mike and Esther Hargrave adopt her unborn baby in exchange for money?", "Summer Spellman", ["Amy Barlow", "Faye Windass", "Asha Alahan"], "Medium", "2022", "Storylines", ["Summer Spellman", "Mike Hargrave", "Esther Hargrave", "Paid Adoption", "Unplanned Pregnancy"]],
    ["Who was Summer Spellman's boyfriend during her pregnancy storyline?", "Aaron Sandford", ["Aadi Alahan", "Max Turner", "Jacob Hay"], "Medium", "2022", "Relationships", ["Aaron Sandford", "Summer Spellman", "Pregnancy", "Romance", "Baby Adoption"]],
    ["Which man arrived as Jacob Hay's estranged father?", "Damon Hay", ["Harvey Gaskell", "Griff Reynolds", "Teddy Thompkins"], "Easy", "2022", "Arrivals", ["Damon Hay", "Jacob Hay", "Father and Son", "New Arrival", "Estrangement"]],

    // 2023

    ["Which man was killed by Stephen Reid with a hole punch?", "Teddy Thompkins", ["Leo Thompkins", "Rufus Donahue", "Rick Neelan"], "Easy", "2023", "Crime", ["Stephen Reid", "Teddy Thompkins", "Hole Punch", "Murder", "Leo Thompkins"]],
    ["How was Teddy Thompkins related to Stephen Reid's first victim Leo?", "He was Leo's father", ["He was Leo's uncle", "He was Leo's brother", "He was Leo's son"], "Easy", "2023", "Families", ["Teddy Thompkins", "Leo Thompkins", "Father and Son", "Murder", "Thompkins Family"]],
    ["Which businessman did Stephen Reid drown in a swimming pool?", "Rufus Donahue", ["Damon Hay", "Teddy Thompkins", "Peter Barlow"], "Easy", "2023", "Crime", ["Stephen Reid", "Rufus Donahue", "Swimming Pool", "Murder", "Drowning"]],
    ["What substance did Stephen Reid secretly give Carla Connor to make her think she was unwell?", "LSD", ["Alcohol", "Sleeping tablets", "Cannabis"], "Medium", "2023", "Crime", ["Stephen Reid", "Carla Connor", "LSD", "Drugging", "Psychological Manipulation"]],
    ["Which firm did Stephen Reid work at while deceiving Carla Connor?", "Underworld", ["Street Cars", "The Kabin", "Preston's Petals"], "Easy", "2023", "Businesses", ["Stephen Reid", "Carla Connor", "Underworld", "Factory", "Deception"]],
    ["Which woman became engaged to Stephen Reid without knowing about his crimes?", "Elaine Jones", ["Jenny Connor", "Audrey Roberts", "Yasmeen Nazir"], "Easy", "2023", "Relationships", ["Stephen Reid", "Elaine Jones", "Engagement", "Deception", "Romance"]],
    ["Whose money had Stephen Reid stolen through a fraudulent equity-release scheme?", "Audrey Roberts'", ["Rita Tanner's", "Jenny Connor's", "Sally Metcalfe's"], "Medium", "2023", "Crime", ["Stephen Reid", "Audrey Roberts", "Equity Release", "Financial Fraud", "Theft"]],
    ["Which taxi driver did Stephen Reid attack and lock in a car boot?", "Tim Metcalfe", ["Steve McDonald", "Lloyd Mullaney", "Peter Barlow"], "Medium", "2023", "Crime", ["Stephen Reid", "Tim Metcalfe", "Car Boot", "Assault", "Attempted Murder"]],
    ["Who killed Stephen Reid by running him over?", "Peter Barlow", ["Tim Metcalfe", "Nick Tilsley", "Gary Windass"], "Easy", "2023", "Departures", ["Peter Barlow", "Stephen Reid", "Car Collision", "Death", "Killing"]],
    ["Whom did Stephen Reid take hostage during his final confrontation at the Rovers?", "Jenny Connor", ["Carla Connor", "Elaine Jones", "Sarah Barlow"], "Easy", "2023", "Crime", ["Stephen Reid", "Jenny Connor", "Hostage Situation", "Final Confrontation", "Threats"]],
    ["Which of Stephen Reid's relatives did he strike with a bottle during his final confrontation?", "Sarah Barlow", ["Audrey Roberts", "Gail Rodwell", "Bethany Platt"], "Medium", "2023", "Crime", ["Stephen Reid", "Sarah Barlow", "Bottle Attack", "Final Confrontation", "Family Conflict"]],
    ["What activity did Peter Barlow leave Weatherfield to pursue?", "Sailing", ["Motor racing", "Volunteering in Peru", "Acting on stage"], "Easy", "2023", "Departures", ["Peter Barlow", "Sailing", "Departure", "Ship's Crew", "Travel"]],
    ["Which woman was stalked by Justin Rutherford?", "Daisy Midgeley", ["Bethany Platt", "Nina Lucas", "Alya Nazir"], "Easy", "2023", "Storylines", ["Daisy Midgeley", "Justin Rutherford", "Stalking", "Harassment", "Threats"]],
    ["Whom was Daisy Midgeley due to marry on the day of the acid attack?", "Daniel Osbourne", ["Ryan Connor", "Adam Barlow", "Aadi Alahan"], "Easy", "2023", "Weddings", ["Daisy Midgeley", "Daniel Osbourne", "Wedding Plans", "Acid Attack", "March 2023"]],
    ["Who was seriously injured protecting Daisy Midgeley during an acid attack?", "Ryan Connor", ["Daniel Osbourne", "Peter Barlow", "Adam Barlow"], "Easy", "2023", "Storylines", ["Ryan Connor", "Daisy Midgeley", "Justin Rutherford", "Acid Attack", "Burn Injuries"]],
    ["Where did Justin Rutherford launch his acid attack?", "The Rovers Return", ["The Bistro", "Underworld", "Roy's Rolls"], "Easy", "2023", "Crime", ["Justin Rutherford", "Rovers Return", "Acid Attack", "Wedding Day", "Assault"]],
    ["What verdict did Justin Rutherford receive after the acid attack on Ryan Connor?", "Guilty", ["Not guilty", "The jury could not agree", "The trial was cancelled"], "Easy", "2023", "Crime", ["Justin Rutherford", "Court Trial", "Guilty Verdict", "Acid Attack", "GBH With Intent"]],
    ["Which actress portrayed Daisy Midgeley during the stalking storyline?", "Charlotte Jordan", ["Lucy Fallon", "Tina O'Brien", "Katie McGlynn"], "Medium", "2023", "Actors", ["Charlotte Jordan", "Daisy Midgeley", "Actress", "Casting", "Stalking"]],
    ["Which character secretly posed as Crystal to send Ryan Connor supportive messages?", "Daisy Midgeley", ["Carla Connor", "Jenny Connor", "Debbie Webster"], "Medium", "2023", "Storylines", ["Daisy Midgeley", "Ryan Connor", "Crystal", "Fake Messages", "Catfishing"]],
    ["Which false online identity was used to send messages to Ryan Connor after his acid attack?", "Crystal", ["Scarlett", "Madison", "Sabrina"], "Medium", "2023", "Storylines", ["Crystal", "Ryan Connor", "Daisy Midgeley", "Catfishing", "Online Identity"]],
    ["With whom did Daisy Midgeley have a secret romantic encounter while engaged to Daniel?", "Ryan Connor", ["Adam Barlow", "Aadi Alahan", "Damon Hay"], "Easy", "2023", "Relationships", ["Daisy Midgeley", "Ryan Connor", "Daniel Osbourne", "Affair", "Infidelity"]],
    ["Which couple split after Daisy admitted her fling with Ryan?", "Daisy Midgeley and Daniel Osbourne", ["Sarah and Adam Barlow", "Gemma and Chesney Brown", "Carla and Peter Barlow"], "Easy", "2023", "Relationships", ["Daisy Midgeley", "Daniel Osbourne", "Ryan Connor", "Relationship Breakup", "Affair"]],
    ["What progressive neurological condition was Paul Foreman diagnosed with?", "Motor neurone disease", ["Multiple sclerosis", "Parkinson's disease", "Epilepsy"], "Easy", "2023", "Storylines", ["Paul Foreman", "Motor Neurone Disease", "Diagnosis", "Neurological Illness", "Health"]],
    ["Which actor portrayed Paul Foreman during his motor neurone disease storyline?", "Peter Ash", ["Daniel Brocklebank", "Antony Cotton", "Colson Smith"], "Medium", "2023", "Actors", ["Peter Ash", "Paul Foreman", "Actor", "Motor Neurone Disease", "Casting"]],
    ["Which vicar married Paul Foreman?", "Billy Mayhew", ["Sean Tully", "Todd Grimshaw", "George Shuttleworth"], "Easy", "2023", "Weddings", ["Billy Mayhew", "Paul Foreman", "Marriage", "Same-Sex Wedding", "Vicar"]],
    ["Where was Paul Foreman's legally recognised wedding to Billy held?", "The Bistro", ["The Rovers Return", "St Mary's Church", "The Kabin"], "Medium", "2023", "Weddings", ["Paul Foreman", "Billy Mayhew", "Viaduct Bistro", "Civil Ceremony", "Marriage"]],
    ["Which relative of Paul Foreman married Chesney Brown?", "His twin sister Gemma", ["His cousin Bernie", "His aunt Evelyn", "His niece Summer"], "Easy", "2023", "Families", ["Gemma Winter", "Paul Foreman", "Chesney Brown", "Twins", "Wedding"]],
    ["Who did Gemma Winter marry?", "Chesney Brown", ["Henry Newton", "Dev Alahan", "Gary Windass"], "Easy", "2023", "Weddings", ["Gemma Winter", "Chesney Brown", "Wedding Ceremony", "Marriage", "May 2023"]],
    ["Who was Paul Foreman and Gemma Winter's mother?", "Bernie Winter", ["Evelyn Plummer", "Jenny Connor", "Mary Taylor"], "Easy", "2023", "Families", ["Bernie Winter", "Gemma Winter", "Paul Foreman", "Motherhood", "Family Relationships"]],
    ["Which man had an affair with Sarah Barlow while she was married to Adam?", "Damon Hay", ["Ryan Connor", "Daniel Osbourne", "Rob Donovan"], "Easy", "2023", "Relationships", ["Sarah Barlow", "Damon Hay", "Adam Barlow", "Affair", "Infidelity"]],
    ["Which solicitor was Sarah Barlow married to during her affair with Damon Hay?", "Adam Barlow", ["Imran Habeeb", "Todd Grimshaw", "Dee-Dee Bailey"], "Easy", "2023", "Relationships", ["Sarah Barlow", "Adam Barlow", "Damon Hay", "Marriage", "Infidelity"]],
    ["Who was the biological father of Sarah Barlow's unborn baby, revealed by a DNA test?", "Damon Hay", ["Adam Barlow", "Nick Tilsley", "Peter Barlow"], "Medium", "2023", "Families", ["Sarah Barlow", "Damon Hay", "DNA Test", "Paternity", "Pregnancy"]],
    ["What happened to Sarah Barlow's pregnancy?", "She miscarried", ["She gave birth to twins", "She gave birth prematurely", "She had a baby girl"], "Medium", "2023", "Storylines", ["Sarah Barlow", "Miscarriage", "Adam Barlow", "Pregnancy Loss", "Hospital"]],
    ["Which young woman was sexually assaulted by Aaron Sandford?", "Amy Barlow", ["Summer Spellman", "Asha Alahan", "Faye Windass"], "Easy", "2023", "Storylines", ["Amy Barlow", "Aaron Sandford", "Sexual Assault", "Consent", "Summer Spellman"]],
    ["Which resident was stabbed by extremist Blake Myers at a refugee-supporting event at Speed Daal?", "Alya Nazir", ["Maria Connor", "Toyah Battersby", "Daisy Midgeley"], "Medium", "2023", "Crime", ["Alya Nazir", "Blake Myers", "Speed Daal", "Stabbing", "Far-Right Extremism"]],
    ["Which young man was placed in a secure training centre after being radicalised by extremists?", "Max Turner", ["Simon Barlow", "Aadi Alahan", "Dylan Wilson"], "Easy", "2023", "Storylines", ["Max Turner", "Griff Reynolds", "Secure Training Centre", "Radicalisation", "Criminal Sentence"]],
    ["Who was Tyrone Dobbs's biological mother, newly introduced to him?", "Cassie Plummer", ["Evelyn Plummer", "Vera Duckworth", "Kirsty Soames"], "Easy", "2023", "Families", ["Cassie Plummer", "Tyrone Dobbs", "Evelyn Plummer", "Biological Mother", "Family Secret"]],
    ["Who was Cassie Plummer's mother, who had claimed her daughter was dead?", "Evelyn Plummer", ["Audrey Roberts", "Rita Tanner", "Sylvia Goodwin"], "Easy", "2023", "Families", ["Evelyn Plummer", "Cassie Plummer", "Tyrone Dobbs", "Family Deception", "Mother and Daughter"]],
    ["Which long-serving Rovers landlady lost her job when the pub was closed for refurbishment?", "Jenny Connor", ["Liz McDonald", "Bet Lynch", "Stella Price"], "Easy", "2023", "Businesses", ["Jenny Connor", "Rovers Return", "Pub Closure", "Job Loss", "Landlady"]],
    ["Which corporation took over the Rovers Return before closing it?", "LS Waterford", ["Underworld", "Weatherfield County", "Street Cars"], "Medium", "2023", "Businesses", ["LS Waterford", "Rovers Return", "Corporate Takeover", "Refurbishment", "Pub Closure"]],
    ["Which two women arranged to use money stolen by Stephen Reid to buy back the Rovers?", "Jenny Connor and Daisy Midgeley", ["Carla Connor and Michelle Connor", "Liz McDonald and Tracy Barlow", "Sally Metcalfe and Gina Seddon"], "Medium", "2023", "Businesses", ["Jenny Connor", "Daisy Midgeley", "Rovers Return", "Stolen Money", "Stephen Reid"]],
    ["Which character resumed a gambling addiction that threatened the Bailey family finances?", "Ed Bailey", ["Michael Bailey", "Ronnie Bailey", "James Bailey"], "Easy", "2023", "Storylines", ["Ed Bailey", "Gambling Addiction", "Bailey Family", "Financial Problems", "Betting"]],
    ["What was the name of Stu Carpenter's granddaughter whose father returned?", "Eliza Woodrow", ["Miley Hodge", "Lily Platt", "Glory Bailey"], "Medium", "2023", "Families", ["Eliza Woodrow", "Stu Carpenter", "Dom Everett", "Family Reunion", "Granddaughter"]],
    ["Which school bully began targeting Liam Connor?", "Mason Radcliffe", ["Max Turner", "Corey Brent", "Aaron Sandford"], "Easy", "2023", "Storylines", ["Mason Radcliffe", "Liam Connor", "Bullying", "School", "Harassment"]],
    ["Which friend of Mason Radcliffe was involved in Liam Connor's bullying at school?", "Dylan Wilson", ["Bertie Osbourne", "Jack Webster", "Sam Blakeman"], "Medium", "2023", "Storylines", ["Dylan Wilson", "Mason Radcliffe", "Liam Connor", "Bullying", "School"]],
    ["Which café owner was diagnosed with angina and needed a stent?", "Roy Cropper", ["Ken Barlow", "Brian Packham", "Norris Cole"], "Easy", "2023", "Storylines", ["Roy Cropper", "Angina", "Heart Stent", "Cafe", "Hospital"]],
    ["Which woman left Weatherfield to live with Jackson Hodge and their daughter Miley?", "Faye Windass", ["Kelly Neelan", "Asha Alahan", "Amy Barlow"], "Easy", "2023", "Departures", ["Faye Windass", "Jackson Hodge", "Miley Hodge", "Departure", "Family Reunion"]],
    ["Which actress joined Coronation Street as Tyrone Dobbs's mother Cassie Plummer?", "Claire Sweeney", ["Jane Hazlegrove", "Sally Ann Matthews", "Maureen Lipman"], "Easy", "2023", "Actors", ["Claire Sweeney", "Cassie Plummer", "Tyrone Dobbs", "Actress", "Casting"]],
    ["Which married woman had an affair with Aadi Alahan?", "Courtney Vance", ["Asha Alahan", "Nina Lucas", "Daisy Midgeley"], "Medium", "2023", "Relationships", ["Courtney Vance", "Aadi Alahan", "Affair", "Marriage", "Romance"]],
    ["Which former resident returned to Weatherfield on New Year's Eve 2023 after several years away?", "Bethany Platt", ["Rosie Webster", "Michelle Connor", "Kate Connor"], "Easy", "2023", "Returns", ["Bethany Platt", "London", "Return", "New Year's Eve", "Daniel Osbourne"]]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, detailTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(2201 + index).padStart(4, '0'),
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
    questions[0].id !== 'tv_2201' ||
    questions[99].id !== 'tv_2300' ||
    questions.filter(q => q.tags.includes('2022')).length !== 50 ||
    questions.filter(q => q.tags.includes('2023')).length !== 50
) {
    throw new Error('Pack 182: incorrect count, years or ID range');
}

const seenIds = new Set();
const seenQuestions = new Set();

for (const q of questions) {
    const key = q.question.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();

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
        throw new Error('Pack 182: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
