// quiz_pack181.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2020 and 2021
// 100 questions: tv_2101 to tv_2200.
// 48 questions from 2020; 52 from 2021.
// Tagging and wording audit: original IDs, answers and settings retained.
// quiz_bank.js remains unchanged.

const facts = [

    // 2020

    ["Which Coronation Street milestone episode aired in February 2020?", "The 10,000th episode", ["The 8,000th episode", "The 9,000th episode", "The 12,000th episode"], "Easy", "2020", "TV History", ["Milestone Episodes", "Episode 10000", "Anniversaries", "Broadcast History", "February 2020"]],
    ["How many years of Coronation Street were celebrated in December 2020?", "60 years", ["50 years", "65 years", "55 years"], "Easy", "2020", "TV History", ["60th Anniversary", "Anniversaries", "Diamond Anniversary", "ITV", "December 2020"]],
    ["Which event forced Coronation Street to suspend filming for several weeks in 2020?", "The COVID-19 pandemic", ["A studio fire", "A writers' strike", "A major flood"], "Easy", "2020", "TV History", ["Filming Suspended", "COVID-19", "Production History", "Pandemic", "ITV"]],
    ["Which resident was subjected to coercive control by husband Geoff Metcalfe?", "Yasmeen Nazir", ["Sally Metcalfe", "Eileen Grimshaw", "Jenny Connor"], "Easy", "2020", "Storylines", ["Yasmeen Nazir", "Geoff Metcalfe", "Domestic Abuse", "Coercive Control", "Marriage"]],
    ["Which resident worked as a DJ and magician while secretly abusing Yasmeen Nazir?", "Geoff Metcalfe", ["Norris Cole", "Ken Barlow", "Roy Cropper"], "Medium", "2020", "Occupations", ["Geoff Metcalfe", "Yasmeen Nazir", "Magician", "DJ", "Domestic Abuse"]],
    ["What did Yasmeen use to injure Geoff Metcalfe while defending herself in May 2020?", "A broken glass bottle", ["A kitchen rolling pin", "A frying pan", "A fireplace poker"], "Easy", "2020", "Storylines", ["Yasmeen Nazir", "Geoff Metcalfe", "Self-Defence", "Broken Bottle", "Domestic Abuse"]],
    ["What crime was Yasmeen Nazir charged with after she injured Geoff?", "Attempted murder", ["Arson", "Fraud", "Kidnapping"], "Easy", "2020", "Crime", ["Yasmeen Nazir", "Geoff Metcalfe", "Attempted Murder Charge", "Police Investigation", "Domestic Abuse"]],
    ["Which solicitor represented Yasmeen Nazir during her trial?", "Imran Habeeb", ["Adam Barlow", "Todd Grimshaw", "Paula Martin"], "Easy", "2020", "Crime", ["Imran Habeeb", "Yasmeen Nazir", "Legal Representation", "Court Trial", "Geoff Metcalfe"]],
    ["What was the verdict at Yasmeen Nazir's trial in December 2020?", "Not guilty", ["Guilty", "A hung jury", "A mistrial"], "Easy", "2020", "Crime", ["Yasmeen Nazir", "Geoff Metcalfe", "Court Verdict", "Acquittal", "December 2020"]],
    ["How did Geoff Metcalfe die during Coronation Street's anniversary week in 2020?", "He fell from the roof of Number 6", ["He was hit by a tram", "He drowned in the canal", "He was killed in a car crash"], "Easy", "2020", "Departures", ["Geoff Metcalfe", "Yasmeen Nazir", "Death", "Number 6", "60th Anniversary"]],
    ["What did Geoff Metcalfe try to do to Number 6 before his death in 2020?", "Set it on fire", ["Sell it at auction", "Flood the cellar", "Demolish the garage"], "Medium", "2020", "Crime", ["Geoff Metcalfe", "Yasmeen Nazir", "Arson Attempt", "Number 6", "Anniversary Week"]],
    ["Which granddaughter fought to expose Geoff's treatment of Yasmeen?", "Alya Nazir", ["Rana Habeeb", "Asha Alahan", "Sophie Webster"], "Easy", "2020", "Families", ["Alya Nazir", "Yasmeen Nazir", "Geoff Metcalfe", "Grandmother and Granddaughter", "Domestic Abuse"]],
    ["Which woman arrived in Weatherfield claiming to be Geoff Metcalfe's former wife?", "Elaine Jones", ["Debbie Webster", "Jenny Bradley", "Claudia Colby"], "Easy", "2020", "Arrivals", ["Elaine Jones", "Geoff Metcalfe", "Former Spouses", "Domestic Abuse", "Tim Metcalfe"]],
    ["Which resident discovered that Elaine Jones was his biological mother?", "Tim Metcalfe", ["Kevin Webster", "Gary Windass", "Steve McDonald"], "Easy", "2020", "Families", ["Tim Metcalfe", "Elaine Jones", "Geoff Metcalfe", "Biological Mother", "Parentage"]],
    ["Which actress portrayed Yasmeen Nazir in the coercive control storyline?", "Shelley King", ["Sally Dynevor", "Maureen Lipman", "Sue Nicholls"], "Medium", "2020", "Actors", ["Shelley King", "Yasmeen Nazir", "Geoff Metcalfe", "Cast", "Domestic Abuse"]],
    ["Which actor portrayed Geoff Metcalfe until the character's death?", "Ian Bartholomew", ["Joe Duttine", "John Michie", "Richard Hawley"], "Medium", "2020", "Actors", ["Ian Bartholomew", "Geoff Metcalfe", "Yasmeen Nazir", "Cast", "Domestic Abuse"]],
    ["Which little boy was diagnosed with mitochondrial disease?", "Oliver Battersby", ["Bertie Osbourne", "Harry Platt", "Jack Webster"], "Easy", "2020", "Storylines", ["Oliver Battersby", "Leanne Battersby", "Steve McDonald", "Child Illness", "Mitochondrial Disease"]],
    ["Which woman was Oliver Battersby's mother during his illness?", "Leanne Battersby", ["Toyah Battersby", "Michelle Connor", "Tracy McDonald"], "Easy", "2020", "Families", ["Leanne Battersby", "Oliver Battersby", "Steve McDonald", "Mother and Son", "Child Illness"]],
    ["Who was Oliver Battersby's father during his hospital treatment?", "Steve McDonald", ["Nick Tilsley", "Peter Barlow", "Robert Preston"], "Easy", "2020", "Families", ["Steve McDonald", "Oliver Battersby", "Leanne Battersby", "Father and Son", "Child Illness"]],
    ["Who was Oliver Battersby's older brother, raised by Leanne Battersby?", "Simon Barlow", ["Sam Blakeman", "Harry Platt", "Bertie Osbourne"], "Easy", "2020", "Storylines", ["Simon Barlow", "Leanne Battersby", "Oliver Battersby", "Adoptive Half-Brothers", "Family Connections"]],
    ["Which medical decision did Leanne fight against during Oliver's final months in 2020?", "Withdrawal of his life support", ["A kidney transplant", "A change of hospital ward", "Surgery on a broken leg"], "Medium", "2020", "Storylines", ["Leanne Battersby", "Oliver Battersby", "Life Support", "Hospital", "Medical Decisions"]],
    ["Which month did Oliver Battersby die in 2020?", "November", ["February", "July", "September"], "Medium", "2020", "Departures", ["Oliver Battersby", "Leanne Battersby", "Steve McDonald", "Death", "November 2020"]],
    ["Which two parents sang to Oliver as his life support was withdrawn?", "Leanne Battersby and Steve McDonald", ["Toyah Battersby and Peter Barlow", "Tracy McDonald and Steve McDonald", "Leanne Battersby and Nick Tilsley"], "Medium", "2020", "Families", ["Leanne Battersby", "Steve McDonald", "Oliver Battersby", "Life Support", "Grief"]],
    ["Which woman put her fostering plans on hold with partner Imran during Oliver's illness?", "Toyah Battersby", ["Carla Connor", "Jenny Connor", "Sarah Barlow"], "Medium", "2020", "Families", ["Toyah Battersby", "Imran Habeeb", "Leanne Battersby", "Oliver Battersby", "Fostering"]],
    ["Whom did Sarah Platt marry in March 2020?", "Adam Barlow", ["Gary Windass", "Nick Tilsley", "Daniel Osbourne"], "Easy", "2020", "Weddings", ["Sarah Platt", "Adam Barlow", "Marriage", "Wedding Ceremony", "March 2020"]],
    ["Which writer left Weatherfield for a new opportunity in London in March 2020?", "Bethany Platt", ["Kate Connor", "Alya Nazir", "Emma Brooker"], "Easy", "2020", "Departures", ["Bethany Platt", "London", "Writing Career", "Career Change", "Exit"]],
    ["Which grieving widower briefly dated Bethany Platt before she left?", "Daniel Osbourne", ["Adam Barlow", "Ryan Connor", "Chesney Brown"], "Easy", "2020", "Relationships", ["Daniel Osbourne", "Bethany Platt", "Sinead Tinker", "Widower", "Romance"]],
    ["Whom did Gary Windass marry in August 2020?", "Maria Connor", ["Sarah Platt", "Carla Connor", "Alya Nazir"], "Easy", "2020", "Weddings", ["Gary Windass", "Maria Connor", "Marriage", "Wedding Ceremony", "August 2020"]],
    ["Which woman had a brief fling with solicitor Paula Martin over New Year?", "Tracy McDonald", ["Michelle Connor", "Leanne Battersby", "Carla Connor"], "Medium", "2020", "Relationships", ["Tracy McDonald", "Paula Martin", "New Year", "Romance", "Fling"]],
    ["Which resident moved into the Stillwaters retirement complex with Claudia?", "Ken Barlow", ["Norris Cole", "Roy Cropper", "Dennis Tanner"], "Easy", "2020", "Departures", ["Ken Barlow", "Claudia Colby", "Stillwaters", "Retirement Complex", "Moving Home"]],
    ["What wrongdoing did Ken Barlow discover at Stillwaters?", "The manager was taking money from residents", ["The staff were selling stolen cars", "The kitchens were serving stolen food", "The building had been illegally sublet"], "Medium", "2020", "Storylines", ["Ken Barlow", "Stillwaters", "Charles Moore", "Resident Payments", "Fraud"]],
    ["Which young woman suffered when an intimate video of her was shared without permission?", "Asha Alahan", ["Amy Barlow", "Summer Spellman", "Kelly Neelan"], "Easy", "2020", "Storylines", ["Asha Alahan", "Corey Brent", "Intimate Video", "Bullying", "Online Abuse"]],
    ["Which goth teenager defended Asha Alahan against bullies?", "Nina Lucas", ["Kelly Neelan", "Faye Windass", "Bethany Platt"], "Easy", "2020", "Friendships", ["Nina Lucas", "Asha Alahan", "Bullying", "Goth", "Teenagers"]],
    ["Who was the father of Asha and Aadi Alahan?", "Dev Alahan", ["Sharif Nazir", "Ed Bailey", "Imran Habeeb"], "Easy", "2020", "Families", ["Dev Alahan", "Asha Alahan", "Aadi Alahan", "Twins", "Fatherhood"]],
    ["Which teenager was revealed to be Rick Neelan's daughter?", "Kelly Neelan", ["Nina Lucas", "Daisy Midgeley", "Grace Vickers"], "Easy", "2020", "Arrivals", ["Kelly Neelan", "Rick Neelan", "Laura Neelan", "Teenagers", "Family Arrival"]],
    ["Whom did Nick Tilsley discover was his son?", "Sam Blakeman", ["Harry Platt", "Bertie Osbourne", "Jack Webster"], "Easy", "2020", "Families", ["Nick Tilsley", "Sam Blakeman", "Father and Son", "Parentage", "Family Reunion"]],
    ["Who was Sam Blakeman's mother when he arrived?", "Natasha Blakeman", ["Leanne Battersby", "Sarah Platt", "Maria Connor"], "Easy", "2020", "Families", ["Natasha Blakeman", "Sam Blakeman", "Nick Tilsley", "Mother and Son", "Family Reunion"]],
    ["Which character was played by young actor Jude Riordan when he joined Coronation Street?", "Sam Blakeman", ["Max Turner", "Simon Barlow", "Joseph Brown"], "Medium", "2020", "Actors", ["Jude Riordan", "Sam Blakeman", "Child Actors", "Casting", "Nick Tilsley"]],
    ["Which woman struggled to remember her husband David Platt after recovering from a shooting?", "Shona Platt", ["Sarah Barlow", "Maria Connor", "Kylie Platt"], "Easy", "2020", "Storylines", ["Shona Platt", "David Platt", "Memory Loss", "Shooting Aftermath", "Marriage"]],
    ["Which property developer wanted to buy and redevelop much of Coronation Street in 2020?", "Ray Crosby", ["Pat Phelan", "Rob Donovan", "Tony Gordon"], "Easy", "2020", "Businesses", ["Ray Crosby", "Redevelopment Scheme", "Property Development", "Weatherfield", "Business Plot"]],
    ["Which returning member of the Webster family helped Ray Crosby with his redevelopment plans?", "Debbie Webster", ["Rosie Webster", "Gina Seddon", "Jenny Connor"], "Easy", "2020", "Returns", ["Debbie Webster", "Ray Crosby", "Kevin Webster", "Redevelopment Scheme", "Family Return"]],
    ["How was Debbie Webster related to Kevin Webster when she returned?", "She was his sister", ["She was his niece", "She was his ex-wife", "She was his cousin"], "Easy", "2020", "Families", ["Debbie Webster", "Kevin Webster", "Siblings", "Webster Family", "Family Connections"]],
    ["What alarming problem appeared in David Platt's garden?", "A sinkhole", ["An unexploded bomb", "A flooded well", "A collapsed garden shed"], "Easy", "2020", "Storylines", ["David Platt", "Sinkhole", "Number 8", "Garden", "Disaster"]],
    ["Which businessman made unwanted sexual advances towards Faye Windass at the Bistro in December 2020?", "Ray Crosby", ["Gary Windass", "Adam Barlow", "Peter Barlow"], "Medium", "2020", "Crime", ["Ray Crosby", "Faye Windass", "Sexual Harassment", "Viaduct Bistro", "Crime Plot"]],
    ["Which solicitor was struck in the head by Faye Windass in a case of mistaken identity in December 2020?", "Adam Barlow", ["Imran Habeeb", "Todd Grimshaw", "Paula Martin"], "Easy", "2020", "Crime", ["Faye Windass", "Adam Barlow", "Ray Crosby", "Mistaken Identity", "Assault"]],
    ["Whom did Carla Connor admit having a one-night stand with, upsetting Peter Barlow?", "Adam Barlow", ["Robert Preston", "Gary Windass", "Daniel Osbourne"], "Easy", "2020", "Relationships", ["Carla Connor", "Adam Barlow", "Peter Barlow", "Infidelity", "One-Night Stand"]],
    ["Which resident was revealed as Jenny Connor's stepdaughter when she arrived in December 2020?", "Daisy Midgeley", ["Kelly Neelan", "Alina Pop", "Summer Spellman"], "Medium", "2020", "Arrivals", ["Daisy Midgeley", "Jenny Connor", "Stepfamily", "Rovers Return", "New Character"]],
    ["Which couple held a legally recognised wedding in October 2020 after problems with their earlier marriage?", "Sally and Tim Metcalfe", ["Sarah and Adam Barlow", "Maria and Gary Windass", "Peter and Carla Barlow"], "Medium", "2020", "Weddings", ["Sally Metcalfe", "Tim Metcalfe", "Marriage", "Wedding Ceremony", "October 2020"]],

    // 2021

    ["Which businessman was arrested at Manchester Airport in February 2021 after his redevelopment scam collapsed?", "Ray Crosby", ["Gary Windass", "Nick Tilsley", "Robert Preston"], "Medium", "2021", "Crime", ["Ray Crosby", "Manchester Airport", "Redevelopment Scam", "Arrest", "February 2021"]],
    ["Who rescued Kevin and Debbie Webster after they were trapped in the Bistro's walk-in fridge?", "Abi Franklin", ["Sally Metcalfe", "Shona Platt", "Jenny Connor"], "Medium", "2021", "Storylines", ["Abi Franklin", "Kevin Webster", "Debbie Webster", "Viaduct Bistro", "Walk-In Fridge"]],
    ["Which woman gave birth to Michael Bailey's daughter Glory in March 2021?", "Grace Vickers", ["Aggie Bailey", "Emma Brooker", "Alina Pop"], "Easy", "2021", "Families", ["Grace Vickers", "Michael Bailey", "Glory Bailey", "Childbirth", "Bailey Family"]],
    ["What name did Michael Bailey and Grace Vickers give their daughter?", "Glory", ["Miley", "Susie", "Ruby"], "Easy", "2021", "Families", ["Michael Bailey", "Grace Vickers", "Glory Bailey", "Baby Name", "Bailey Family"]],
    ["Which member of the Bailey family arrived and revealed a past romance with Aggie?", "Ronnie Bailey", ["James Bailey", "Michael Bailey", "Ed Bailey"], "Easy", "2021", "Arrivals", ["Ronnie Bailey", "Aggie Bailey", "Ed Bailey", "Family Secrets", "Past Romance"]],
    ["Which young woman began a romance with Tyrone Dobbs, ending his relationship with Fiz?", "Alina Pop", ["Maria Connor", "Abi Franklin", "Emma Brooker"], "Easy", "2021", "Relationships", ["Alina Pop", "Tyrone Dobbs", "Fiz Stape", "Affair", "Relationship Breakdown"]],
    ["Which woman had been Tyrone Dobbs's longtime partner before he left her for Alina?", "Fiz Stape", ["Kirsty Soames", "Molly Dobbs", "Maria Connor"], "Easy", "2021", "Relationships", ["Fiz Stape", "Tyrone Dobbs", "Alina Pop", "Separation", "Long-Term Relationship"]],
    ["Which daughter of Fiz Stape had been brought up by Tyrone when the couple separated?", "Hope Stape", ["Ruby Dobbs", "Faye Windass", "Amy Barlow"], "Easy", "2021", "Families", ["Hope Stape", "Fiz Stape", "Tyrone Dobbs", "Stepfamily", "Parenting"]],
    ["Who started the fire at Tyrone and Alina's flat?", "Hope Stape", ["Fiz Stape", "Evelyn Plummer", "Ruby Dobbs"], "Easy", "2021", "Crime", ["Hope Stape", "Alina Pop", "Tyrone Dobbs", "Arson", "Flat Fire"]],
    ["What happened to Alina Pop's pregnancy following the flat fire?", "She miscarried", ["She gave birth to twins", "She gave birth prematurely", "She discovered it was a false alarm"], "Medium", "2021", "Storylines", ["Alina Pop", "Tyrone Dobbs", "Hope Stape", "Pregnancy Loss", "Flat Fire"]],
    ["Which country did Alina Pop return to when she left Weatherfield in September 2021?", "Romania", ["Poland", "Hungary", "Bulgaria"], "Easy", "2021", "Departures", ["Alina Pop", "Romania", "Tyrone Dobbs", "Departure", "September 2021"]],
    ["Who began dating Fiz Stape in 2021 following her separation from Tyrone?", "Phill Whittaker", ["Adam Barlow", "Gary Windass", "Peter Barlow"], "Easy", "2021", "Relationships", ["Fiz Stape", "Phill Whittaker", "Tyrone Dobbs", "New Relationship", "Romance"]],
    ["Which Barlow needed a liver transplant?", "Peter Barlow", ["Ken Barlow", "Adam Barlow", "Daniel Osbourne"], "Easy", "2021", "Storylines", ["Peter Barlow", "Liver Transplant", "Alcohol-Related Illness", "Hospital", "Organ Donation"]],
    ["Whom did Peter Barlow marry in April 2021 before undergoing his liver transplant?", "Carla Connor", ["Leanne Battersby", "Toyah Battersby", "Tracy McDonald"], "Easy", "2021", "Weddings", ["Peter Barlow", "Carla Connor", "Liver Transplant", "Marriage", "April 2021"]],
    ["Which resident was sentenced to prison in April 2021 for attacking Adam Barlow in error?", "Faye Windass", ["Kelly Neelan", "Seb Franklin", "Corey Brent"], "Medium", "2021", "Crime", ["Faye Windass", "Adam Barlow", "Ray Crosby", "Mistaken Identity", "Prison Sentence"]],
    ["Which drug dealer pressured Simon Barlow into criminal deliveries?", "Harvey Gaskell", ["Rick Neelan", "Callum Logan", "Corey Brent"], "Easy", "2021", "Crime", ["Harvey Gaskell", "Simon Barlow", "County Lines", "Drug Trafficking", "Criminal Gang"]],
    ["Which family member worked with police to protect Simon Barlow from Harvey's gang?", "Leanne Battersby", ["Tracy McDonald", "Carla Connor", "Gail Rodwell"], "Easy", "2021", "Families", ["Leanne Battersby", "Simon Barlow", "Harvey Gaskell", "Police Cooperation", "Witness Protection"]],
    ["Which former foster daughter of Rita Tanner returned in April 2021 while working with Harvey's gang?", "Sharon Bentley", ["Jenny Bradley", "Daisy Midgeley", "Debbie Webster"], "Medium", "2021", "Returns", ["Sharon Bentley", "Rita Tanner", "Harvey Gaskell", "Foster Family", "Criminal Gang"]],
    ["Which two young characters were attacked in a hate crime in May 2021?", "Nina Lucas and Seb Franklin", ["Asha Alahan and Aadi Alahan", "Summer Spellman and Amy Barlow", "Kelly Neelan and Corey Brent"], "Easy", "2021", "Crime", ["Nina Lucas", "Seb Franklin", "Hate Crime", "Goth Subculture", "Violence"]],
    ["Which young mechanic died in hospital after a hate crime attack?", "Seb Franklin", ["Craig Tinker", "Ryan Connor", "Daniel Osbourne"], "Easy", "2021", "Departures", ["Seb Franklin", "Nina Lucas", "Hate Crime", "Murder", "Hospital Death"]],
    ["Who was the principal attacker responsible for Seb Franklin's death?", "Corey Brent", ["Aadi Alahan", "Simon Barlow", "Max Turner"], "Easy", "2021", "Crime", ["Corey Brent", "Seb Franklin", "Nina Lucas", "Hate Crime", "Murder Trial"]],
    ["Who was Seb Franklin's mother during his murder storyline?", "Abi Franklin", ["Jenny Connor", "Fiz Stape", "Sally Metcalfe"], "Easy", "2021", "Families", ["Abi Franklin", "Seb Franklin", "Mother and Son", "Hate Crime", "Grief"]],
    ["Which teenager's goth appearance was targeted in the attack that killed Seb Franklin?", "Nina Lucas", ["Asha Alahan", "Kelly Neelan", "Summer Spellman"], "Easy", "2021", "Storylines", ["Nina Lucas", "Seb Franklin", "Goth", "Hate Crime", "Targeted Violence"]],
    ["Which girl was wrongly convicted of Seb Franklin's murder in September 2021?", "Kelly Neelan", ["Asha Alahan", "Nina Lucas", "Amy Barlow"], "Easy", "2021", "Crime", ["Kelly Neelan", "Corey Brent", "Seb Franklin", "Wrongful Conviction", "Murder Trial"]],
    ["What verdict did the jury initially return in Corey Brent's murder trial?", "Not guilty", ["Guilty", "No verdict was reached", "The case was abandoned"], "Medium", "2021", "Crime", ["Corey Brent", "Kelly Neelan", "Seb Franklin", "Acquittal", "Murder Trial"]],
    ["Who found the discarded rucksack containing evidence that eventually exposed Corey Brent?", "Stu Carpenter", ["Roy Cropper", "Tim Metcalfe", "Peter Barlow"], "Medium", "2021", "Crime", ["Stu Carpenter", "Corey Brent", "Rucksack", "Bloodstained Evidence", "Hate Crime"]],
    ["Which two girls worked together to investigate evidence that could clear Kelly Neelan?", "Nina Lucas and Asha Alahan", ["Summer Spellman and Amy Barlow", "Faye Windass and Emma Brooker", "Kelly Neelan and Bethany Platt"], "Medium", "2021", "Friendships", ["Nina Lucas", "Asha Alahan", "Kelly Neelan", "Investigation", "Hate Crime Evidence"]],
    ["In which month of 2021 was Kelly Neelan's conviction for Seb Franklin's murder quashed?", "November", ["September", "October", "December"], "Easy", "2021", "Crime", ["Kelly Neelan", "Corey Brent", "Seb Franklin", "Conviction Quashed", "November 2021"]],
    ["Which two teenage residents began a romantic relationship in early 2021?", "Nina Lucas and Asha Alahan", ["Sophie Webster and Sian Powers", "Rana Habeeb and Kate Connor", "Faye Windass and Kelly Neelan"], "Medium", "2021", "Relationships", ["Nina Lucas", "Asha Alahan", "Teenagers", "Romance", "Same-Sex Relationship"]],
    ["Which long-serving resident died after a stroke in September 2021?", "Norris Cole", ["Ken Barlow", "Roy Cropper", "Dev Alahan"], "Easy", "2021", "Departures", ["Norris Cole", "Stroke", "Death", "Veteran Character", "September 2021"]],
    ["Which actor had portrayed Norris Cole for many years before his character's 2021 death?", "Malcolm Hebden", ["Bill Roache", "David Neilson", "Philip Lowrie"], "Medium", "2021", "Actors", ["Malcolm Hebden", "Norris Cole", "Veteran Cast", "Actor", "Death Storyline"]],
    ["Which Street resident died after trying to rescue Jenny Connor from a flooded sewer in October 2021?", "Johnny Connor", ["Kevin Webster", "Gary Windass", "Peter Barlow"], "Easy", "2021", "Departures", ["Johnny Connor", "Jenny Connor", "Sinkhole", "Sewer Flooding", "Death"]],
    ["What weather-related disaster struck Weatherfield during the Halloween 2021 storyline?", "A sinkhole and sewer collapse", ["A tornado", "An earthquake", "A blizzard"], "Easy", "2021", "Storylines", ["Sinkhole", "Storm", "Sewer Collapse", "Halloween", "Weatherfield Disaster"]],
    ["Who rescued Jenny Connor after she became trapped in a flooded sewer?", "Shona Platt", ["Sally Metcalfe", "Debbie Webster", "Leanne Battersby"], "Medium", "2021", "Storylines", ["Shona Platt", "Jenny Connor", "Johnny Connor", "Sewer Rescue", "Flooding"]],
    ["Which hairdresser was shot by Harvey Gaskell in October 2021 after he mistook her for Leanne?", "Natasha Blakeman", ["Maria Connor", "Sarah Barlow", "Jenny Connor"], "Easy", "2021", "Crime", ["Natasha Blakeman", "Harvey Gaskell", "Leanne Battersby", "Mistaken Identity", "Shooting"]],
    ["Which hobby did Sam Blakeman share with George Shuttleworth after Natasha's death?", "Stargazing", ["Painting", "Football", "Gardening"], "Easy", "2021", "Families", ["Sam Blakeman", "George Shuttleworth", "Natasha Blakeman", "Stargazing", "Bereavement"]],
    ["Who deliberately drove her car into a skip to stop Harvey Gaskell fleeing in 2021?", "Leanne Battersby", ["Abi Franklin", "Tracy McDonald", "Sarah Barlow"], "Medium", "2021", "Crime", ["Leanne Battersby", "Harvey Gaskell", "Car Crash", "Skip", "Escape Attempt"]],
    ["Which woman married Kevin Webster in November 2021?", "Abi Franklin", ["Sally Metcalfe", "Jenny Connor", "Maria Connor"], "Easy", "2021", "Weddings", ["Abi Franklin", "Kevin Webster", "Marriage", "Wedding Ceremony", "November 2021"]],
    ["Which actress played Abi Franklin during her November 2021 wedding?", "Sally Carman", ["Sally Dynevor", "Shelley King", "Jane Danson"], "Medium", "2021", "Actors", ["Sally Carman", "Abi Franklin", "Kevin Webster", "Actress", "Wedding"]],
    ["Which couple fostered Kelly Neelan during the Seb Franklin murder investigation?", "Toyah Battersby and Imran Habeeb", ["Fiz Stape and Tyrone Dobbs", "Kevin Webster and Abi Franklin", "Leanne Battersby and Nick Tilsley"], "Medium", "2021", "Families", ["Toyah Battersby", "Imran Habeeb", "Kelly Neelan", "Fostering", "Hate Crime Trial"]],
    ["Which Alahan son was left injured after his father prioritised saving Asha?", "Aadi Alahan", ["Dev Alahan", "Simon Barlow", "Sam Blakeman"], "Easy", "2021", "Families", ["Aadi Alahan", "Dev Alahan", "Asha Alahan", "Car Crash", "Sibling Rivalry"]],
    ["Which Weatherfield County footballer came out publicly as gay?", "James Bailey", ["Michael Bailey", "Corey Brent", "Ryan Connor"], "Easy", "2021", "Storylines", ["James Bailey", "Weatherfield County", "Football", "Coming Out", "LGBTQ+ Storyline"]],
    ["Who was James Bailey's boyfriend when he came out publicly?", "Danny Tomlinson", ["Corey Brent", "Paul Foreman", "Todd Grimshaw"], "Medium", "2021", "Relationships", ["James Bailey", "Danny Tomlinson", "Football", "Romance", "Coming Out"]],
    ["Which young woman was in a relationship with Daniel Osbourne towards the end of 2021?", "Daisy Midgeley", ["Nina Lucas", "Kelly Neelan", "Asha Alahan"], "Easy", "2021", "Relationships", ["Daisy Midgeley", "Daniel Osbourne", "Dating", "Romance", "New Relationship"]],
    ["Which resident briefly left Weatherfield to work as a chef in South America in November 2021?", "Roy Cropper", ["Ken Barlow", "Brian Packham", "Norris Cole"], "Easy", "2021", "Departures", ["Roy Cropper", "South America", "Chef", "Nina Lucas", "Departure"]],
    ["To which relative did Roy Cropper hand over his café while he was away?", "Nina Lucas", ["Cathy Matthews", "Mary Taylor", "Fiz Stape"], "Medium", "2021", "Businesses", ["Roy Cropper", "Nina Lucas", "Roy's Rolls", "Cafe Ownership", "Family"]],
    ["Which character falsely claimed to have a life-threatening heart condition while dating Emma Brooker?", "Curtis Delamere", ["Daniel Osbourne", "Ryan Connor", "Adam Barlow"], "Easy", "2021", "Storylines", ["Curtis Delamere", "Emma Brooker", "Factitious Disorder", "Faked Illness", "Deception"]],
    ["Which woman was planning to marry Curtis Delamere in December 2021?", "Emma Brooker", ["Faye Windass", "Asha Alahan", "Kelly Neelan"], "Easy", "2021", "Weddings", ["Emma Brooker", "Curtis Delamere", "Engagement", "Wedding Plans", "Deception"]],
    ["What condition was Curtis Delamere revealed to have instead of the serious heart illness he claimed?", "Factitious disorder", ["Epilepsy", "Diabetes", "Narcolepsy"], "Medium", "2021", "Storylines", ["Curtis Delamere", "Factitious Disorder", "Emma Brooker", "Faked Heart Illness", "Mental Health Storyline"]],
    ["Which grandson of Yasmeen Nazir returned in 2021 and faced blackmail over Speed Daal?", "Zeedan Nazir", ["Sharif Nazir", "Kal Nazir", "Imran Habeeb"], "Easy", "2021", "Returns", ["Zeedan Nazir", "Alya Nazir", "Speed Daal", "Blackmail", "Return"]],
    ["Which businessman died from a heart attack during an argument with Zeedan and Alya in December 2021?", "Hashim Elamin", ["Ray Crosby", "Geoff Metcalfe", "Johnny Connor"], "Medium", "2021", "Departures", ["Hashim Elamin", "Zeedan Nazir", "Alya Nazir", "Heart Attack", "Speed Daal"]],
    ["Which resident was revealed to have had a one-night stand with Imran Habeeb?", "Abi Franklin", ["Toyah Battersby", "Kelly Neelan", "Carla Connor"], "Medium", "2021", "Relationships", ["Abi Franklin", "Imran Habeeb", "Toyah Battersby", "Infidelity", "One-Night Stand"]]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, detailTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(2101 + index).padStart(4, '0'),
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
    questions[0].id !== 'tv_2101' ||
    questions[99].id !== 'tv_2200' ||
    questions.filter(q => q.tags.includes('2020')).length !== 48 ||
    questions.filter(q => q.tags.includes('2021')).length !== 52
) {
    throw new Error('Pack 181: incorrect count, years or ID range');
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
        throw new Error('Pack 181: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
