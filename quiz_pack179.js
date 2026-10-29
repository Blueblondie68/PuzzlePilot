// quiz_pack179.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2016 and 2017
// 100 questions: tv_1901 to tv_2000
// 49 questions from 2016; 51 from 2017.
// Specialist tagging and wording audit; original IDs, answers and settings preserved.
// quiz_bank.js stays unchanged.

// Each fact: question, correct answer, three alternatives, difficulty, year, original topic, specialist tags.
const facts = [
    ["Which longtime resident left Weatherfield for volunteer work in Peru?", "Emily Bishop", ["Rita Tanner", "Audrey Roberts", "Norris Cole"], "Easy", "2016", "Departures", ["Emily Bishop", "Spider Nugent", "Peru", "Volunteer work", "Longstanding resident"]],
    ["Which former Coronation Street character was Emily Bishop going to help in Peru?", "Spider Nugent", ["Dennis Tanner", "Jed Stone", "Curly Watts"], "Medium", "2016", "Returns", ["Emily Bishop", "Spider Nugent", "Peru", "Environmental activism", "Nephew"]],
    ["With which chef did Carla Connor have a one-night stand on New Year's Day?", "Robert Preston", ["Nick Tilsley", "Aidan Connor", "Steve McDonald"], "Easy", "2016", "Relationships", ["Carla Connor", "Robert Preston", "New Year", "One-night stand", "Infidelity"]],
    ["Which businessman threatened Tracy Barlow outside Number 1 to protect Carla Connor before her wedding?", "Johnny Connor", ["Barry Connor", "Mike Baldwin", "Frank Foster"], "Easy", "2016", "Families", ["Johnny Connor", "Tracy Barlow", "Carla Connor", "Wedding protection", "Threat outside No. 1"]],
    ["Which young girl was declared to be in remission after cancer treatment?", "Hope Stape", ["Ruby Dobbs", "Lily Platt", "Faye Windass"], "Easy", "2016", "Families", ["Hope Stape", "Fiz Stape", "Neuroblastoma", "Cancer remission", "Childhood illness"]],
    ["What was the name of the flower shop Tracy Barlow opened?", "Preston's Petals", ["Barlow's Blooms", "Weatherfield Flowers", "Tracy's Roses"], "Medium", "2016", "Businesses", ["Tracy Barlow", "Preston's Petals", "Florist", "Flower shop", "Shop opening"]],
    ["Which woman blackmailed Carla Connor over her affair with Robert Preston?", "Tracy Barlow", ["Michelle Connor", "Maria Connor", "Jenny Bradley"], "Easy", "2016", "Crime", ["Tracy Barlow", "Carla Connor", "Robert Preston", "Blackmail", "One-night stand"]],
    ["Which couple married, only for their relationship to collapse at the wedding reception?", "Nick Tilsley and Carla Connor", ["Steve McDonald and Michelle Connor", "Roy Cropper and Cathy Matthews", "Jason Grimshaw and Eva Price"], "Easy", "2016", "Weddings", ["Nick Tilsley", "Carla Connor", "Wedding reception", "Marriage collapse", "Wedding secret"]],
    ["Which woman publicly exposed Carla Connor's deception at her wedding?", "Tracy Barlow", ["Leanne Battersby", "Kylie Platt", "Liz McDonald"], "Easy", "2016", "Weddings", ["Tracy Barlow", "Carla Connor", "Robert Preston", "Wedding revelation", "Infidelity"]],
    ["Where did Carla Connor move after the end of her marriage to Nick?", "Devon", ["Cornwall", "Scotland", "Wales"], "Medium", "2016", "Departures", ["Carla Connor", "Nick Tilsley", "Devon", "Departure", "Relationship breakdown"]],
    ["Which actress departed as Carla Connor?", "Alison King", ["Kym Marsh", "Samia Longchambon", "Catherine Tyldesley"], "Easy", "2016", "Actors", ["Alison King", "Carla Connor", "Actress", "Cast departure", "Television casting"]],
    ["Which new character arrived as an old friend of Alya Nazir?", "Rana Habeeb", ["Sonia Rahman", "Shona Ramsey", "Nicola Rubinstein"], "Easy", "2016", "Arrivals", ["Rana Habeeb", "Alya Nazir", "Friendship", "Bhavna Limbachia", "Character debut"]],
    ["Which Nazir man married Rana Habeeb in a religious ceremony before their later civil wedding?", "Zeedan Nazir", ["Sharif Nazir", "Kal Nazir", "Dev Alahan"], "Easy", "2016", "Weddings", ["Zeedan Nazir", "Rana Habeeb", "Religious marriage", "Nikah", "First wedding"]],
    ["What type of religious ceremony did Rana Habeeb and Zeedan Nazir have before their civil wedding?", "A Nikah ceremony", ["A registry-office ceremony", "A church blessing", "A civil partnership ceremony"], "Medium", "2016", "Weddings", ["Rana Habeeb", "Zeedan Nazir", "Nikah", "Muslim wedding", "Religious ceremony"]],
    ["Which family was devastated when Sharif's long-running affair was revealed?", "The Nazirs", ["The Barlows", "The Websters", "The Platts"], "Easy", "2016", "Families", ["Sharif Nazir", "Yasmeen Nazir", "Sonia Rahman", "Nazir family", "Affair exposure"]],
    ["With whom had Sharif Nazir been having a long-running secret affair?", "Sonia Rahman", ["Rana Habeeb", "Erica Holroyd", "Liz McDonald"], "Medium", "2016", "Relationships", ["Sharif Nazir", "Sonia Rahman", "Yasmeen Nazir", "Long-running affair", "Infidelity"]],
    ["Which Nazir granddaughter discovered Sharif's affair and used it to blackmail him?", "Alya Nazir", ["Rana Habeeb", "Sophie Webster", "Bethany Platt"], "Medium", "2016", "Crime", ["Alya Nazir", "Sharif Nazir", "Sonia Rahman", "Blackmail", "Family secret"]],
    ["How much money did Alya Nazir demand to stay silent about Sharif's affair?", "£14,000", ["£4,000", "£8,000", "£40,000"], "Medium", "2016", "Money", ["Alya Nazir", "Sharif Nazir", "£14,000", "Blackmail demand", "Affair secret"]],
    ["Which man returned to Weatherfield and revived his feud with Anna Windass?", "Pat Phelan", ["Rob Donovan", "Tony Gordon", "Frank Foster"], "Easy", "2016", "Returns", ["Pat Phelan", "Anna Windass", "Return to Weatherfield", "Villain", "Feud"]],
    ["Which criminal partner worked with Pat Phelan on a fraudulent flats development?", "Vinny Ashford", ["Andy Carver", "Terry Duckworth", "Rick Neelan"], "Medium", "2016", "Crime", ["Pat Phelan", "Vinny Ashford", "Fraudulent property scheme", "Flats", "Scam accomplice"]],
    ["What did Phelan and Vinny take from Weatherfield residents in their property scam?", "Deposits for flats", ["Car insurance premiums", "Lottery winnings", "Charity collections"], "Easy", "2016", "Crime", ["Pat Phelan", "Vinny Ashford", "Property fraud", "Flat deposits", "Victims"]],
    ["Who fled with the proceeds of the flats scam, leaving Pat Phelan empty-handed?", "Vinny Ashford", ["Michael Rodwell", "Todd Grimshaw", "Jason Grimshaw"], "Medium", "2016", "Crime", ["Vinny Ashford", "Pat Phelan", "Escaped with money", "Flat scam", "Betrayal"]],
    ["Which Platt gave birth to baby Harry?", "Sarah Platt", ["Kylie Platt", "Gail Rodwell", "Bethany Platt"], "Easy", "2016", "Families", ["Sarah Platt", "Harry Platt", "Birth", "Platt family", "Baby son"]],
    ["Who was the biological father of Sarah Platt’s baby Harry?", "Callum Logan", ["Jason Grimshaw", "Gary Windass", "Nick Tilsley"], "Easy", "2016", "Families", ["Callum Logan", "Sarah Platt", "Harry Platt", "Biological father", "Parentage"]],
    ["Which youngster's violence towards his stepmother Leanne led her to contact police?", "Simon Barlow", ["Max Turner", "Craig Tinker", "Chesney Brown"], "Medium", "2016", "Storylines", ["Simon Barlow", "Leanne Battersby", "Violence against stepmother", "Police", "Family abuse"]],
    ["Which Coronation Street resident was stabbed to death in July 2016?", "Kylie Platt", ["Tina McIntyre", "Maria Connor", "Sarah Platt"], "Easy", "2016", "Departures", ["Kylie Platt", "Clayton Hibbs", "Fatal stabbing", "Death on cobbles", "Platt family"]],
    ["Who fatally stabbed Kylie Platt?", "Clayton Hibbs", ["Callum Logan", "Pat Phelan", "Rob Donovan"], "Easy", "2016", "Crime", ["Clayton Hibbs", "Kylie Platt", "Murder", "Fatal stabbing", "Killer"]],
    ["Which kebab-shop worker was Kylie Platt protecting when she was stabbed?", "Gemma Winter", ["Eva Price", "Sinead Tinker", "Beth Tinker"], "Easy", "2016", "Storylines", ["Kylie Platt", "Gemma Winter", "Kebab shop", "Protecting friend", "Fatal attack"]],
    ["In whose arms did Kylie Platt die on the cobbles?", "David Platt", ["Nick Tilsley", "Michael Rodwell", "Jason Grimshaw"], "Easy", "2016", "Departures", ["Kylie Platt", "David Platt", "Died in arms", "Cobbles", "Death"]],
    ["Which aspiring policeman witnessed Clayton Hibbs attack Kylie Platt?", "Craig Tinker", ["Simon Barlow", "Ryan Connor", "Seb Franklin"], "Medium", "2016", "Crime", ["Craig Tinker", "Clayton Hibbs", "Kylie Platt", "Witness", "Aspiring police officer"]],
    ["Which actress left Coronation Street when Kylie Platt was killed?", "Paula Lane", ["Julia Goulding", "Lucy Fallon", "Tina O'Brien"], "Easy", "2016", "Actors", ["Paula Lane", "Kylie Platt", "Actress", "Character exit", "Casting"]],
    ["Which Grimshaw brother left Weatherfield to begin a new life in Thailand?", "Jason Grimshaw", ["Todd Grimshaw", "Ryan Connor", "Billy Mayhew"], "Easy", "2016", "Departures", ["Jason Grimshaw", "Thailand", "Departure", "Grimshaw family", "New start"]],
    ["Who arranged for Jason Grimshaw's van to be set on fire?", "Pat Phelan", ["Callum Logan", "Vinny Ashford", "Kevin Webster"], "Medium", "2016", "Crime", ["Pat Phelan", "Jason Grimshaw", "Van fire", "Arson", "Intimidation"]],
    ["Whose one-night stand with Steve McDonald resulted in a pregnancy?", "Leanne Battersby", ["Tracy Barlow", "Michelle Connor", "Maria Connor"], "Easy", "2016", "Families", ["Leanne Battersby", "Steve McDonald", "One-night stand", "Pregnancy", "Oliver Battersby"]],
    ["Which man agreed to bring up Leanne's unborn baby as his own?", "Nick Tilsley", ["Peter Barlow", "Robert Preston", "Kal Nazir"], "Medium", "2016", "Families", ["Nick Tilsley", "Leanne Battersby", "Unborn baby", "Paternity secret", "Stepfather"]],
    ["Which of Ken Barlow's sons returned shortly before Daniel and Adam came back to Weatherfield?", "Peter Barlow", ["Adam Barlow", "Daniel Osbourne", "Gary Windass"], "Easy", "2016", "Returns", ["Peter Barlow", "Ken Barlow", "Return to Weatherfield", "Barlow family", "October return"]],
    ["Which young lawyer returned to Weatherfield as Ken Barlow's grandson?", "Adam Barlow", ["Daniel Osbourne", "Simon Barlow", "Todd Grimshaw"], "Easy", "2016", "Returns", ["Adam Barlow", "Ken Barlow", "Grandson", "Lawyer", "Character return"]],
    ["Which son of Ken Barlow returned to Weatherfield after years away?", "Daniel Osbourne", ["Adam Barlow", "Simon Barlow", "Nick Tilsley"], "Easy", "2016", "Returns", ["Daniel Osbourne", "Ken Barlow", "Son", "Return to Weatherfield", "Family reunion"]],
    ["Who were Daniel Osbourne's parents?", "Ken Barlow and Denise Osbourne", ["Peter Barlow and Leanne Battersby", "Mike Baldwin and Susan Barlow", "Steve McDonald and Tracy Barlow"], "Medium", "2016", "Families", ["Ken Barlow", "Denise Osbourne", "Daniel Osbourne", "Parents", "Barlow family"]],
    ["What medical emergency did Ken Barlow suffer?", "A stroke", ["A heart attack", "A broken hip", "An epileptic seizure"], "Easy", "2016", "Storylines", ["Ken Barlow", "Stroke", "Hospital", "Health crisis", "Barlow family"]],
    ["Which resident suffered serious burns after David Platt's car exploded?", "Anna Windass", ["Sally Metcalfe", "Eileen Grimshaw", "Rita Tanner"], "Easy", "2016", "Storylines", ["Anna Windass", "David Platt", "Car explosion", "Severe burns", "Petrol"]],
    ["Why did David Platt prepare a car filled with petrol after Kylie's murder?", "He planned to kill Kylie's murderer", ["He was delivering fuel to a garage", "He intended to torch Underworld", "He was trying to escape from Phelan"], "Medium", "2016", "Crime", ["David Platt", "Clayton Hibbs", "Kylie Platt", "Revenge plan", "Petrol-filled car"]],
    ["Who died of a heart attack after investigating Pat Phelan's fraudulent flats scheme?", "Michael Rodwell", ["Tony Stewart", "Dennis Tanner", "Jim McDonald"], "Easy", "2016", "Departures", ["Michael Rodwell", "Pat Phelan", "Heart attack", "Fraud investigation", "Death"]],
    ["What did Pat Phelan do after Michael Rodwell collapsed with a heart attack?", "He left him to die without helping", ["He performed CPR", "He called an ambulance immediately", "He drove him to hospital"], "Easy", "2016", "Crime", ["Pat Phelan", "Michael Rodwell", "Refused help", "Heart attack", "Left to die"]],
    ["Which man, who once impersonated Gavin Rodwell, grew suspicious of Pat Phelan?", "Andy Carver", ["Vinny Ashford", "Todd Grimshaw", "Luke Britton"], "Medium", "2016", "Storylines", ["Andy Carver", "Pat Phelan", "Gavin Rodwell impersonation", "Suspicion", "Investigation"]],
    ["Who called off her proposed wedding to Roy Cropper?", "Cathy Matthews", ["Mary Taylor", "Audrey Roberts", "Rita Tanner"], "Easy", "2016", "Weddings", ["Cathy Matthews", "Roy Cropper", "Cancelled wedding", "Wedding plans", "Breakup"]],
    ["Which long-lost son of Mary Taylor appeared in Weatherfield on Christmas Day?", "Jude Appleton", ["Angie Appleton", "George Appleton", "Beth Tinker"], "Easy", "2016", "Families", ["Mary Taylor", "Jude Appleton", "Long-lost son", "Christmas Day", "Family reunion"]],
    ["Which Battersby returned on Christmas Day after nearly fourteen years away?", "Toyah Battersby", ["Janice Battersby", "Leanne Battersby", "Les Battersby"], "Easy", "2016", "Returns", ["Toyah Battersby", "Leanne Battersby", "Return to Weatherfield", "Christmas Day", "Long absence"]],
    ["Which newcomer first met David Platt in a nightclub and stole his wallet?", "Shona Ramsey", ["Nicola Rubinstein", "Rana Habeeb", "Mel Maguire"], "Medium", "2016", "Arrivals", ["Shona Ramsey", "David Platt", "Nightclub", "Stolen wallet", "Character debut"]],
    ["What name did Steve and Michelle McDonald give their stillborn son?", "Ruairi", ["Oliver", "Harry", "Jake"], "Medium", "2017", "Families", ["Ruairi McDonald", "Steve McDonald", "Michelle Connor", "Stillbirth", "Baby name"]],
    ["Who was married to Steve McDonald when their son Ruairi was stillborn?", "Michelle Connor", ["Leanne Battersby", "Tracy Barlow", "Becky McDonald"], "Easy", "2017", "Families", ["Michelle Connor", "Steve McDonald", "Ruairi McDonald", "Pregnancy loss", "Marriage"]],
    ["Which baby boy was born to Leanne Battersby?", "Oliver", ["Max", "Jack", "Joseph"], "Easy", "2017", "Families", ["Oliver Battersby", "Leanne Battersby", "Birth", "Baby son", "Family"]],
    ["Who was revealed as Oliver Battersby’s biological father?", "Steve McDonald", ["Nick Tilsley", "Peter Barlow", "Robert Preston"], "Easy", "2017", "Families", ["Steve McDonald", "Oliver Battersby", "Leanne Battersby", "Biological father", "Paternity revelation"]],
    ["Where did Leanne Battersby give birth to Oliver?", "In a lift at Victoria Court", ["In the Rovers Return", "In Roy's café", "In a taxi outside the Bistro"], "Medium", "2017", "Families", ["Leanne Battersby", "Oliver Battersby", "Victoria Court", "Lift birth", "Premature labour"]],
    ["Which relative helped deliver Leanne's baby Oliver?", "Toyah Battersby", ["Eva Price", "Liz McDonald", "Gail Rodwell"], "Medium", "2017", "Families", ["Toyah Battersby", "Leanne Battersby", "Oliver Battersby", "Lift birth", "Birth assistance"]],
    ["Who was revealed to have pushed Ken Barlow down the stairs?", "Daniel Osbourne", ["Adam Barlow", "Pat Phelan", "Peter Barlow"], "Easy", "2017", "Crime", ["Daniel Osbourne", "Ken Barlow", "Staircase attack", "Family mystery", "Assailant"]],
    ["At which address did Ken Barlow suffer an attack that sent him down the stairs?", "Number 1 Coronation Street", ["The Rovers Return", "Number 8 Coronation Street", "Victoria Court"], "Medium", "2017", "Crime", ["Ken Barlow", "No. 1 Coronation Street", "Staircase fall", "Attack location", "Barlow family"]],
    ["Which builder was arrested as an early suspect in Ken Barlow's attack?", "Pat Phelan", ["Owen Armstrong", "Jason Grimshaw", "Kevin Webster"], "Easy", "2017", "Crime", ["Pat Phelan", "Ken Barlow", "Early arrest", "Attempted murder investigation", "Suspect"]],
    ["Which police detective investigated Ken Barlow's attack?", "DS MacKinnon", ["DC Hooch", "DS Swain", "DC Tinker"], "Medium", "2017", "Crime", ["DS MacKinnon", "Ken Barlow", "Police detective", "Staircase attack", "Investigation"]],
    ["Which woman had an abortion after Ken Barlow pressured her over his son's future?", "Sinead Tinker", ["Eva Price", "Kate Connor", "Bethany Platt"], "Medium", "2017", "Families", ["Sinead Tinker", "Daniel Osbourne", "Ken Barlow", "Abortion", "University plans"]],
    ["Which university had Daniel Osbourne been offered a place at before Ken's attack?", "Oxford", ["Cambridge", "Durham", "Manchester"], "Medium", "2017", "Education", ["Daniel Osbourne", "Oxford University", "Ken Barlow", "University offer", "Education"]],
    ["Which character's mother Denise returned during the investigation into Ken's attack?", "Daniel Osbourne", ["Adam Barlow", "Simon Barlow", "Peter Barlow"], "Medium", "2017", "Returns", ["Denise Osbourne", "Daniel Osbourne", "Ken Barlow", "Mother", "Character return"]],
    ["What story did Ken Barlow give the police to protect the person who attacked him?", "That he had fallen accidentally", ["That Pat Phelan had attacked him", "That Peter Barlow had attacked him", "That he was attacked by a burglar"], "Medium", "2017", "Crime", ["Ken Barlow", "Daniel Osbourne", "Accidental fall claim", "Protecting son", "Police statement"]],
    ["Which older man groomed teenager Bethany Platt?", "Nathan Curtis", ["Neil Clifton", "Gary Windass", "Will Chatterton"], "Easy", "2017", "Storylines", ["Nathan Curtis", "Bethany Platt", "Sexual grooming", "Exploitation", "Manipulation"]],
    ["What type of business did Nathan Curtis run during his grooming of Bethany Platt?", "A tanning salon", ["A nightclub", "A taxi firm", "A modelling agency"], "Medium", "2017", "Businesses", ["Nathan Curtis", "Bethany Platt", "Tanning salon", "Grooming ring", "Business"]],
    ["Which police officer was involved in the grooming ring exploiting Bethany Platt?", "Neil Clifton", ["Craig Tinker", "DS MacKinnon", "Jess Heywood"], "Medium", "2017", "Crime", ["Neil Clifton", "Bethany Platt", "Corrupt police officer", "Sexual exploitation", "Grooming gang"]],
    ["Which woman helped Nathan Curtis manipulate Bethany Platt?", "Mel Maguire", ["Shona Ramsey", "Sophie Webster", "Alya Nazir"], "Medium", "2017", "Crime", ["Mel Maguire", "Nathan Curtis", "Bethany Platt", "Coercive control", "Grooming accomplice"]],
    ["Which victim of Nathan Curtis's grooming ring died before he was tried?", "Lara Cutler", ["Maddie Heath", "Sian Powers", "Katy Armstrong"], "Medium", "2017", "Storylines", ["Lara Cutler", "Nathan Curtis", "Grooming gang", "Victim", "Death before trial"]],
    ["Which aspiring policeman helped expose one of Bethany Platt's abusers?", "Craig Tinker", ["Ryan Connor", "Simon Barlow", "Seb Franklin"], "Easy", "2017", "Crime", ["Craig Tinker", "Bethany Platt", "Police career", "Exposing abuse", "Grooming investigation"]],
    ["Which woman was revealed to be Clayton Hibbs's mother?", "Shona Ramsey", ["Sarah Platt", "Gemma Winter", "Nicola Rubinstein"], "Easy", "2017", "Families", ["Shona Ramsey", "Clayton Hibbs", "Biological mother", "Kylie Platt", "Family secret"]],
    ["Which widowed Platt began a relationship with Shona Ramsey?", "David Platt", ["Nick Tilsley", "Michael Rodwell", "Martin Platt"], "Easy", "2017", "Relationships", ["David Platt", "Shona Ramsey", "Widower", "New romance", "Platt family"]],
    ["Which family member of Sally Metcalfe returned to live in Weatherfield?", "Gina Seddon", ["Natalie Barnes", "Vera Duckworth", "Linda Hancock"], "Medium", "2017", "Returns", ["Gina Seddon", "Sally Metcalfe", "Sister", "Family return", "Weatherfield"]],
    ["How was Gina Seddon related to Sally Metcalfe when she returned?", "She was Sally's sister", ["She was Sally's aunt", "She was Sally's cousin", "She was Sally's niece"], "Easy", "2017", "Families", ["Gina Seddon", "Sally Metcalfe", "Sisters", "Family relationship", "Reunion"]],
    ["Which sisters returned to Weatherfield together?", "Rosie and Sophie Webster", ["Carla and Michelle Connor", "Eva and Leanne Price", "Beth and Sinead Tinker"], "Easy", "2017", "Returns", ["Rosie Webster", "Sophie Webster", "Sisters", "Return to Weatherfield", "Webster family"]],
    ["Which couple became joint landlords of the Rovers Return?", "Peter Barlow and Toyah Battersby", ["Steve McDonald and Michelle Connor", "Liz McDonald and Tony Stewart", "Robert Preston and Michelle Connor"], "Easy", "2017", "Businesses", ["Peter Barlow", "Toyah Battersby", "Rovers Return", "Joint landlords", "Pub management"]],
    ["Which mother and son sold their shares in the Rovers Return?", "Liz and Steve McDonald", ["Sally and Kevin Webster", "Tracy and Ken Barlow", "Rita and Dennis Tanner"], "Easy", "2017", "Businesses", ["Liz McDonald", "Steve McDonald", "Rovers Return", "Pub stake sale", "Mother and son"]],
    ["Which businessman was running the Bistro when Michelle Connor began dating him?", "Robert Preston", ["Nick Tilsley", "Aidan Connor", "Dev Alahan"], "Easy", "2017", "Relationships", ["Robert Preston", "Michelle Connor", "Bistro", "Romance", "Business owner"]],
    ["What illness was Johnny Connor diagnosed with?", "Multiple sclerosis", ["Motor neurone disease", "Parkinson's disease", "Multiple myeloma"], "Medium", "2017", "Storylines", ["Johnny Connor", "Multiple sclerosis", "Medical diagnosis", "Neurological condition", "Connor family"]],
    ["Whom did Johnny Connor marry?", "Jenny Bradley", ["Liz McDonald", "Eva Price", "Carla Connor"], "Easy", "2017", "Weddings", ["Johnny Connor", "Jenny Bradley", "Hospital wedding", "Marriage", "Connor family"]],
    ["Which woman discovered Aidan Connor was having an affair with Maria?", "Eva Price", ["Alya Nazir", "Michelle Connor", "Jenny Bradley"], "Easy", "2017", "Relationships", ["Eva Price", "Aidan Connor", "Maria Connor", "Affair discovery", "Infidelity"]],
    ["With whom had Aidan Connor secretly been having an affair while dating Eva Price?", "Maria Connor", ["Carla Connor", "Kate Connor", "Michelle Connor"], "Easy", "2017", "Relationships", ["Aidan Connor", "Maria Connor", "Eva Price", "Secret affair", "Love triangle"]],
    ["Which Barlow teamed up with Eva Price to take revenge on Aidan Connor?", "Adam Barlow", ["Peter Barlow", "Daniel Osbourne", "Ken Barlow"], "Easy", "2017", "Crime", ["Adam Barlow", "Eva Price", "Aidan Connor", "Revenge plot", "Collusion"]],
    ["What did Eva Price falsely claim while plotting revenge on Aidan Connor?", "That she was pregnant", ["That she had won the lottery", "That she had bought the Rovers", "That she had been offered a job abroad"], "Medium", "2017", "Storylines", ["Eva Price", "Aidan Connor", "Fake pregnancy", "Revenge plan", "Deception"]],
    ["Which veteran resident was found to have a brain tumour?", "Rita Tanner", ["Emily Bishop", "Audrey Roberts", "Betty Williams"], "Easy", "2017", "Storylines", ["Rita Tanner", "Brain tumour", "Medical diagnosis", "Memory loss", "Veteran resident"]],
    ["Who was especially worried by Rita Tanner's memory lapses before her diagnosis?", "Gemma Winter", ["Carla Connor", "Tracy Barlow", "Kylie Platt"], "Medium", "2017", "Relationships", ["Gemma Winter", "Rita Tanner", "Memory lapses", "Brain tumour", "Friendship"]],
    ["Which builder imprisoned Andy Carver in a cellar?", "Pat Phelan", ["Owen Armstrong", "Gary Windass", "Todd Grimshaw"], "Easy", "2017", "Crime", ["Pat Phelan", "Andy Carver", "Cellar imprisonment", "Captivity", "Kidnapping"]],
    ["Whom did Pat Phelan force Andy Carver to shoot?", "Vinny Ashford", ["Michael Rodwell", "Jason Grimshaw", "Robert Preston"], "Easy", "2017", "Crime", ["Pat Phelan", "Andy Carver", "Vinny Ashford", "Forced killing", "Gunpoint"]],
    ["Who killed Andy Carver?", "Pat Phelan", ["Vinny Ashford", "Rob Donovan", "Gary Windass"], "Easy", "2017", "Crime", ["Pat Phelan", "Andy Carver", "Murder", "Kidnap victim", "Cellar ordeal"]],
    ["Which woman discovered that Pat Phelan was her biological father?", "Nicola Rubinstein", ["Shona Ramsey", "Rana Habeeb", "Sinead Tinker"], "Easy", "2017", "Families", ["Nicola Rubinstein", "Pat Phelan", "Biological father", "Paternity discovery", "Family secret"]],
    ["Which young man was injured in a fall from a ladder and later diagnosed HIV-positive?", "Seb Franklin", ["Craig Tinker", "Daniel Osbourne", "Ryan Connor"], "Medium", "2017", "Storylines", ["Seb Franklin", "HIV diagnosis", "Ladder fall", "Hospital tests", "Medical storyline"]],
    ["Who did Pat Phelan frame for Seb Franklin's fall?", "Anna Windass", ["Eileen Grimshaw", "Nicola Rubinstein", "Sally Metcalfe"], "Easy", "2017", "Crime", ["Pat Phelan", "Anna Windass", "Seb Franklin", "False accusation", "Fall from ladder"]],
    ["Which woman married Pat Phelan despite warnings about his behaviour?", "Eileen Grimshaw", ["Anna Windass", "Liz McDonald", "Yasmeen Nazir"], "Easy", "2017", "Weddings", ["Eileen Grimshaw", "Pat Phelan", "Marriage", "Ignored warnings", "Grimshaw family"]],
    ["Which couple brought their baby son George to Weatherfield?", "Jude and Angie Appleton", ["Peter and Toyah Barlow", "Zeedan and Rana Nazir", "Tim and Sally Metcalfe"], "Medium", "2017", "Families", ["Jude Appleton", "Angie Appleton", "George Appleton", "Newborn son", "Family arrival"]],
    ["Which resident married Norris Cole in a competition-related scheme?", "Mary Taylor", ["Rita Tanner", "Cathy Matthews", "Audrey Roberts"], "Easy", "2017", "Weddings", ["Mary Taylor", "Norris Cole", "Competition arrangement", "Marriage", "Wedding scheme"]],
    ["Who began a secret romance with Kate Connor while married to Zeedan Nazir?", "Rana Habeeb", ["Alya Nazir", "Maria Connor", "Eva Price"], "Easy", "2017", "Relationships", ["Rana Habeeb", "Kate Connor", "Zeedan Nazir", "Secret same-sex romance", "Infidelity"]],
    ["Who discovered Kate Connor and Rana Habeeb kissing?", "Luke Britton", ["Craig Tinker", "Peter Barlow", "Daniel Osbourne"], "Medium", "2017", "Relationships", ["Luke Britton", "Kate Connor", "Rana Habeeb", "Secret kiss", "Discovery"]],
    ["Which character was revealed to be behind Michelle Connor's kidnapping?", "Will Chatterton", ["Rich Collis", "Pat Phelan", "Robert Preston"], "Medium", "2017", "Crime", ["Will Chatterton", "Michelle Connor", "Kidnapping", "Stalker", "Criminal plot"]],
    ["What type of cancer was Robert Preston treated for?", "Testicular cancer", ["Prostate cancer", "Bowel cancer", "Skin cancer"], "Easy", "2017", "Storylines", ["Robert Preston", "Testicular cancer", "Cancer treatment", "Bistro", "Medical diagnosis"]],
    ["Which vicar was involved in a robbery and car crash that killed Susan Barlow?", "Billy Mayhew", ["Todd Grimshaw", "Pat Phelan", "Rob Donovan"], "Medium", "2017", "Storylines", ["Billy Mayhew", "Susan Barlow", "Armed robbery", "Fatal car crash", "Guilt revelation"]],
    ["Who resumed his relationship with Toyah Battersby after their Christmas reunion?", "Peter Barlow", ["Steve McDonald", "Nick Tilsley", "Adam Barlow"], "Medium", "2017", "Relationships", ["Peter Barlow", "Toyah Battersby", "Christmas reunion", "Rekindled romance", "Rovers Return"]]
];

// Build questions, preserving the original answer rotation.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, specialistTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(1901 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '2010s', year, topic, ...specialistTags])],
        dailyEligible: true
    };
});

// Validate exported question objects, IDs, metadata, answer choices and specialist tags.
if (questions.length !== 100 || questions[0].id !== 'tv_1901' ||
    questions[99].id !== 'tv_2000' ||
    questions.filter(q => q.tags.includes('2016')).length !== 49 ||
    questions.filter(q => q.tags.includes('2017')).length !== 51) {
    throw new Error('Pack 179: incorrect count, IDs or year split');
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
        q.category !== 'Television' || q.dailyEligible !== true ||
        !q.tags.includes('Soaps') || !q.tags.includes('Coronation Street') ||
        !q.tags.includes('2010s') || !['2016', '2017'].some(y => q.tags.includes(y)) ||
        q.tags.length < 9) {
        throw new Error('Pack 179: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenWording.add(wording);
}
module.exports = questions;
