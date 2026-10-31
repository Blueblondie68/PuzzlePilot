// quiz_pack245.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2007
// 110 questions: tv_8364 to tv_8473
// Comprehensive per-question metadata, built in from creation.
// Do not update quiz_bank.js until the agreed bank connection.

const topicTags = {
    "Pauline Aftermath": ["Pauline Fowler", "Joe Macer", "Sonia Jackson", "Martin Fowler", "2007 Family Departures"],
    "Stacey Max Reveal": ["Stacey Slater", "Max Branning", "Bradley Branning", "Lauren Branning", "Christmas DVD Revelation"],
    "Stella And Ben": ["Stella Crawford", "Ben Mitchell", "Phil Mitchell", "Child Abuse Storyline", "July 2007 Wedding Crisis"],
    "Dawn And May": ["Dawn Swann", "Dr May Wright", "Rob Minter", "Summer Swann", "June 2007 Hostage Crisis"],
    "Ronnie And Roxy": ["Ronnie Mitchell", "Roxy Mitchell", "Peggy Mitchell", "R And R Nightclub", "July 2007 Arrivals"],
    "Masood Arrivals": ["Masood Family", "Zainab Masood", "Shabnam Masood", "Tamwar Masood", "Walford Post Office"],
    "Steven And Jane": ["Steven Beale", "Ian Beale", "Jane Beale", "Lucy Beale", "October 2007 Shooting"],
    "Kevin And Denise": ["Kevin Wicks", "Denise Fox", "Shirley Carter", "Phil Mitchell", "December 2007 Fatal Crash"],
    "Patrick And Craig": ["Patrick Trueman", "Craig Dixon", "Chelsea Fox", "Deano Wicks", "False Accusation And CCTV"],
    "Jase And Honey": ["Jase Dyer", "Terry Bates", "Honey Mitchell", "Billy Mitchell", "November 2007 Queen Vic Siege"],
    "Other Walford Stories": ["Dot Branning", "Jim Branning", "Jack Branning", "Tanya Branning", "2007 New Arrivals And Births"]
};

const facts = [
    // PAULINE FOWLER'S DEATH: THE AFTERMATH (10)
    ["Who was eventually revealed to have fatally injured Pauline Fowler?", "Joe Macer", ["Sonia Jackson", "Martin Fowler", "Bert Atkinson"], "Easy", "Pauline Aftermath", ["Joe Confession", "Murder Mystery Solved"]],
    ["What household object did Joe Macer use to strike Pauline?", "A frying pan", ["A rolling pin", "A table lamp", "An iron"], "Easy", "Pauline Aftermath", ["Fatal Head Injury", "Kitchen Weapon"]],
    ["Which woman was arrested on suspicion of Pauline Fowler's murder?", "Sonia Jackson", ["Dot Branning", "Peggy Mitchell", "Pat Evans"], "Easy", "Pauline Aftermath", ["Sonia Arrested", "January 2007"]],
    ["Why did police interrupt Pauline Fowler's funeral?", "They wanted an autopsy", ["The undertaker was missing", "The family had the wrong coffin", "The church was unsafe"], "Medium", "Pauline Aftermath", ["Funeral Interrupted", "Police Investigation"]],
    ["Which close friend heard Joe Macer's confession about Pauline's death?", "Dot Branning", ["Shirley Carter", "Yolande Trueman", "Jane Beale"], "Easy", "Pauline Aftermath", ["Joe Confesses To Dot", "Final Confrontation"]],
    ["How did Joe Macer die after his confession?", "He fell from an upstairs window", ["He was hit by a car", "He drowned in the canal", "He suffered a heart attack in prison"], "Medium", "Pauline Aftermath", ["Joe Fatal Fall", "Fowler Home Window"]],
    ["At whose graveside did Dot bury Pauline's ashes?", "Arthur Fowler's", ["Den Watts's", "Jamie Mitchell's", "Roy Evans's"], "Medium", "Pauline Aftermath", ["Pauline Ashes", "Arthur Fowler Grave"]],
    ["Which couple left Walford with their daughter Rebecca after Pauline's death?", "Martin and Sonia Fowler", ["Max and Tanya Branning", "Billy and Honey Mitchell", "Ian and Jane Beale"], "Easy", "Pauline Aftermath", ["Martin Sonia Exit", "Rebecca Fowler"]],
    ["Which actress ended her original run as Sonia Jackson in 2007?", "Natalie Cassidy", ["Lacey Turner", "Diane Parish", "Laurie Brett"], "Easy", "Pauline Aftermath", ["Natalie Cassidy Departure", "Sonia Performer"]],
    ["Which actor concluded his long run as Martin Fowler in 2007?", "James Alexandrou", ["Charlie Clements", "Joe Swash", "Matt Di Angelo"], "Medium", "Pauline Aftermath", ["James Alexandrou Departure", "Martin Performer"]],

    // STACEY, MAX, BRADLEY AND THE CHRISTMAS DVD (10)
    ["Which two young Walford residents married in November 2007?", "Stacey Slater and Bradley Branning", ["Ruby Allen and Sean Slater", "Dawn Swann and Jase Dyer", "Lucy Beale and Craig Dixon"], "Easy", "Stacey Max Reveal", ["November Wedding", "Bracey"]],
    ["With which married Branning did Stacey have a secret affair?", "Max Branning", ["Jim Branning", "Jack Branning", "Oscar Branning"], "Easy", "Stacey Max Reveal", ["Stax Affair", "Family Betrayal"]],
    ["Which woman was married to Max Branning during his affair with Stacey?", "Tanya Branning", ["Jane Beale", "Denise Wicks", "Honey Mitchell"], "Easy", "Stacey Max Reveal", ["Max Tanya Marriage", "Infidelity"]],
    ["To which country did Max take his family for a holiday in an attempt to end his affair with Stacey?", "Spain", ["Portugal", "France", "Italy"], "Medium", "Stacey Max Reveal", ["Max Family Holiday", "Affair Interrupted"]],
    ["Which Branning daughter accidentally recorded Max kissing Stacey?", "Lauren Branning", ["Abi Branning", "Lucy Beale", "Chelsea Fox"], "Easy", "Stacey Max Reveal", ["Lauren Camcorder", "Caught On Camera"]],
    ["On which occasion was the incriminating kiss between Max and Stacey recorded?", "Stacey and Bradley's wedding", ["A New Year's Eve party", "Tanya's birthday", "A christening"], "Medium", "Stacey Max Reveal", ["Wedding Day Kiss", "Hidden Footage"]],
    ["How was Max and Stacey's affair finally exposed to their family?", "Through a DVD recording", ["In an anonymous newspaper advert", "By a letter from Peggy", "During a police interview"], "Easy", "Stacey Max Reveal", ["Christmas DVD", "Affair Exposed"]],
    ["On which day did the Brannings discover Max and Stacey's secret?", "Christmas Day", ["Bonfire Night", "Boxing Day", "New Year's Day"], "Easy", "Stacey Max Reveal", ["Christmas 2007", "Family Dinner Revelation"]],
    ["Which actress portrayed Lauren Branning during the 2007 DVD revelation?", "Madeline Duggan", ["Jacqueline Jossa", "Lorna Fitzgerald", "Melissa Suffield"], "Medium", "Stacey Max Reveal", ["Madeline Duggan", "Lauren Original Performer"]],
    ["Which newly married man left Stacey after learning of the affair?", "Bradley Branning", ["Sean Slater", "Jack Branning", "Kevin Wicks"], "Easy", "Stacey Max Reveal", ["Bradley Walks Away", "Marriage Shattered"]],

    // STELLA CRAWFORD AND BEN MITCHELL (10)
    ["Which woman secretly mistreated Phil Mitchell's young son Ben?", "Stella Crawford", ["Kate Morton", "Shirley Carter", "May Wright"], "Easy", "Stella And Ben", ["Stella Abuses Ben", "Phil Fiancee"]],
    ["Which actress portrayed Abi Branning, Ben Mitchell's friend in 2007?", "Lorna Fitzgerald", ["Madeline Duggan", "Melissa Suffield", "Belinda Owusu"], "Easy", "Stella And Ben", ["Abi Branning Actress", "Lorna Fitzgerald"]],
    ["What heated kitchen object did Stella use to burn Ben?", "A spoon", ["A kettle", "A saucepan", "A toasting fork"], "Medium", "Stella And Ben", ["Hot Spoon Assault", "Physical Abuse"]],
    ["Which Branning girl was Ben's friend whom Stella tried to keep away from him?", "Abi Branning", ["Lauren Branning", "Ruby Allen", "Lucy Beale"], "Medium", "Stella And Ben", ["Ben Abi Friendship", "Isolation Tactics"]],
    ["Which month was Phil and Stella's planned wedding?", "July", ["March", "September", "December"], "Medium", "Stella And Ben", ["July 2007 Wedding", "Cancelled Ceremony"]],
    ["What did Ben finally reveal on Phil and Stella's wedding day?", "That Stella had been abusing him", ["That he had bought the Queen Vic", "That he had run away from school", "That he was moving to Brazil"], "Easy", "Stella And Ben", ["Ben Speaks Out", "Wedding Day Revelation"]],
    ["To what kind of building did Stella flee after Ben exposed her?", "An abandoned factory", ["A church", "A football stadium", "A hospital"], "Medium", "Stella And Ben", ["Factory Rooftop", "Phil Pursues Stella"]],
    ["How did Stella Crawford die after being confronted by Phil?", "She jumped from a roof", ["She drowned in the canal", "She was hit by a train", "She died in a car explosion"], "Easy", "Stella And Ben", ["Stella Rooftop Death", "July 2007 Exit"]],
    ["What hobby of Phil's did Stella attempt to encourage in Ben by buying him boots?", "Football", ["Boxing", "Cycling", "Cricket"], "Medium", "Stella And Ben", ["Ben Football Boots", "Trying To Please Phil"]],
    ["Which addiction did Phil briefly struggle with again after Stella's death?", "Alcohol", ["Gambling", "Cocaine", "Prescription painkillers"], "Medium", "Stella And Ben", ["Phil Drinking Relapse", "Aftermath"]],

    // DR MAY, ROB AND DAWN'S BABY (10)
    ["Which expectant mother was held captive by May Wright and Rob Minter?", "Dawn Swann", ["Demi Miller", "Honey Mitchell", "Tanya Branning"], "Easy", "Dawn And May", ["Dawn Held Hostage", "Kidnapping Plot"]],
    ["Which GP planned to take Dawn's unborn baby for herself?", "May Wright", ["Oliver Cousins", "Denise Wicks", "Kate Morton"], "Easy", "Dawn And May", ["Doctor May Obsession", "Infertility Storyline"]],
    ["Which man was both May's husband and the father of Dawn's baby?", "Rob Minter", ["Jase Dyer", "Garry Hobbs", "Mickey Miller"], "Easy", "Dawn And May", ["Rob Father Of Baby", "Love Triangle"]],
    ["What operation did May threaten to perform on Dawn against her will?", "A caesarean section", ["A kidney transplant", "An appendectomy", "A hysterectomy"], "Medium", "Dawn And May", ["Threatened Forced Caesarean", "June Hostage Episode"]],
    ["What was Dawn restrained to while May prepared her plan?", "A bed", ["A radiator", "A chair", "A stair rail"], "Medium", "Dawn And May", ["Dawn Chained To Bed", "Abduction Scene"]],
    ["Which medical instrument did Dawn seize to escape May?", "A scalpel", ["A syringe", "A stethoscope", "A pair of forceps"], "Medium", "Dawn And May", ["Dawn Grabs Scalpel", "Hostage Escape"]],
    ["What first name did Dawn give her daughter born in June?", "Summer", ["Sophie", "Janet", "Aleesha"], "Easy", "Dawn And May", ["Summer Swann Birth", "June 2007"]],
    ["Where was Dawn travelling when she unexpectedly went into labour?", "On the Underground", ["On a ferry", "In a taxi to Brighton", "At an airport"], "Medium", "Dawn And May", ["Underground Labour", "Journey To Hospital"]],
    ["Which friend stayed with Dawn at hospital for Summer's birth?", "Carly Wicks", ["Chelsea Fox", "Stacey Slater", "Shirley Carter"], "Easy", "Dawn And May", ["Carly Supports Dawn", "Hospital Birth"]],
    ["What did May inject Dawn with while she was held captive?", "A sedative", ["An antibiotic", "A vaccine", "A painkiller"], "Medium", "Dawn And May", ["May Injects Sedative", "Hostage Threat"]],

    // RONNIE AND ROXY MITCHELL ARRIVE (10)
    ["Which two Mitchell sisters arrived in Walford in July 2007?", "Ronnie and Roxy", ["Peggy and Sal", "Sam and Courtney", "Kate and Lisa"], "Easy", "Ronnie And Roxy", ["Mitchell Sisters Debut", "July Arrival"]],
    ["Which actress played Ronnie Mitchell when she first arrived?", "Samantha Janus", ["Rita Simons", "Jo Joyner", "Emma Barton"], "Medium", "Ronnie And Roxy", ["Samantha Janus", "Ronnie Performer At Debut"]],
    ["Which actress played Ronnie's younger sister Roxy?", "Rita Simons", ["Samantha Janus", "Tracy-Ann Oberman", "Linda Henry"], "Easy", "Ronnie And Roxy", ["Rita Simons", "Roxy Casting"]],
    ["Which Walford landlady was aunt to Ronnie and Roxy?", "Peggy Mitchell", ["Pat Evans", "Dot Branning", "Yolande Trueman"], "Easy", "Ronnie And Roxy", ["Aunt Peggy", "Mitchell Family Relationship"]],
    ["From which Spanish island did the Mitchell sisters arrive?", "Ibiza", ["Mallorca", "Tenerife", "Menorca"], "Medium", "Ronnie And Roxy", ["Mitchell Sisters Ibiza", "Life Before Walford"]],
    ["Which pub did Ronnie and Roxy help Peggy run?", "The Queen Victoria", ["The Albert", "The Dagmar", "The Swan"], "Easy", "Ronnie And Roxy", ["Queen Vic Work", "Family Pub"]],
    ["What was the name of the nightclub Ronnie and Roxy helped establish?", "R&R", ["E20", "Scarlet", "Angie's Den"], "Easy", "Ronnie And Roxy", ["R And R Club Name", "New Nightspot"]],
    ["Which businessman became Ronnie's partner in the nightclub venture?", "Jack Branning", ["Max Branning", "Ian Beale", "Kevin Wicks"], "Easy", "Ronnie And Roxy", ["Ronnie Jack Business Partnership", "R And R Ownership"]],
    ["Which month did the R&R nightclub open?", "November", ["February", "June", "September"], "Medium", "Ronnie And Roxy", ["November 2007 Opening", "Club Launch"]],
    ["Which Mitchell sister was described as the cooler, more controlled 'ice' to the other's 'fire'?", "Ronnie", ["Roxy", "Sam", "Peggy"], "Medium", "Ronnie And Roxy", ["Ronnie Ice Roxy Fire", "Character Contrast"]],

    // THE MASOODS AND THE POST OFFICE (10)
    ["Which new Walford postmistress was introduced in July 2007?", "Zainab Masood", ["Yolande Trueman", "Jane Beale", "Denise Wicks"], "Easy", "Masood Arrivals", ["Zainab July Debut", "Postmistress"]],
    ["Which actress portrayed Zainab Masood on her arrival?", "Nina Wadia", ["Madhur Jaffrey", "Zahra Ahmadi", "Diane Parish"], "Easy", "Masood Arrivals", ["Nina Wadia", "Zainab Performer"]],
    ["Which business did Zainab Masood run in Walford?", "The post office", ["The car lot", "The launderette", "The bookies"], "Easy", "Masood Arrivals", ["Post Office Business", "Turpin Road Workplace"]],
    ["Which man arrived as Zainab's husband?", "Masood Ahmed", ["Tariq Larousi", "Patrick Trueman", "Dan Ferreira"], "Easy", "Masood Arrivals", ["Masood Family Patriarch", "Zainab Husband"]],
    ["Which actor originally played Masood Ahmed?", "Nitin Ganatra", ["Himesh Patel", "Raji James", "Dalip Tahil"], "Medium", "Masood Arrivals", ["Nitin Ganatra", "Masood Casting"]],
    ["Which daughter of Zainab joined her at the post office?", "Shabnam Masood", ["Chelsea Fox", "Libby Fox", "Kareena Ferreira"], "Easy", "Masood Arrivals", ["Shabnam Post Office Work", "Family Arrival"]],
    ["Which actress first played Shabnam Masood?", "Zahra Ahmadi", ["Rakhee Thakrar", "Nina Wadia", "Belinda Owusu"], "Medium", "Masood Arrivals", ["Zahra Ahmadi", "First Shabnam Casting"]],
    ["Which younger Masood son was played by Himesh Patel?", "Tamwar", ["Syed", "Kamil", "Ash"], "Medium", "Masood Arrivals", ["Himesh Patel", "Tamwar Debut"]],
    ["What was Masood Ahmed's job when the family settled on the Square?", "Postman", ["Doctor", "Taxi dispatcher", "Police officer"], "Easy", "Masood Arrivals", ["Masood Postal Work", "2007 Occupation"]],
    ["Which month saw the Masood household move onto Albert Square as regular residents?", "October", ["January", "March", "December"], "Medium", "Masood Arrivals", ["October 2007 Household Arrival", "Masood Family Move"]],

    // STEVEN RETURNS, IAN VANISHES AND JANE IS SHOT (10)
    ["Which estranged Beale son returned in 2007 and began secretly tormenting Ian?", "Steven Beale", ["Peter Beale", "Bobby Beale", "Ben Mitchell"], "Easy", "Steven And Jane", ["Steven September Return", "Ian Stalker"]],
    ["Whose identity did Ian's anonymous tormentor impersonate in messages?", "Cindy Beale", ["Laura Beale", "Kathy Beale", "Pauline Fowler"], "Easy", "Steven And Jane", ["Messages From Cindy", "Deceased Wife Impersonation"]],
    ["Which country had Steven been living in before returning to Walford?", "New Zealand", ["Australia", "Spain", "Canada"], "Medium", "Steven And Jane", ["Steven Return From New Zealand", "Simon Wicks"]],
    ["What did Steven do to Ian after luring him to an empty block of flats?", "Held him captive", ["Made him sell the café", "Forced him to marry again", "Handed him over to police"], "Easy", "Steven And Jane", ["Ian Kidnapped", "Abandoned Flats"]],
    ["Which Beale daughter was led to the place where Ian was being held?", "Lucy Beale", ["Lauren Branning", "Abi Branning", "Chelsea Fox"], "Easy", "Steven And Jane", ["Lucy Learns Truth", "Kidnap Rescue"]],
    ["Which woman was accidentally shot during the confrontation with Steven?", "Jane Beale", ["Pat Evans", "Shirley Carter", "Peggy Mitchell"], "Easy", "Steven And Jane", ["Jane Shooting", "October 2007"]],
    ["What long-term consequence did Jane suffer from the gunshot wound?", "She could no longer conceive children", ["She lost her sight", "She lost her hearing", "She could no longer walk"], "Medium", "Steven And Jane", ["Jane Infertility", "Shooting Aftermath"]],
    ["Which young man had originally possessed the gun involved in Jane's shooting?", "Craig Dixon", ["Sean Slater", "Deano Wicks", "Bradley Branning"], "Medium", "Steven And Jane", ["Craig Gun", "Lucy Hidden Weapon"]],
    ["Which actor portrayed Steven Beale on his 2007 return?", "Aaron Sidwell", ["Edward Savage", "Thomas Law", "Charlie Jones"], "Medium", "Steven And Jane", ["Aaron Sidwell", "Steven Recast"]],
    ["Where did Ian arrange for Steven to receive psychiatric treatment after the shooting?", "A psychiatric hospital", ["A police training school", "A boarding school in Spain", "A private clinic in Australia"], "Medium", "Steven And Jane", ["Steven Psychiatric Admission", "Mental Health Care"]],

    // KEVIN'S MARRIAGE AND NEW YEAR'S EVE DEATH (10)
    ["Which Fox family mother married Kevin Wicks in April?", "Denise Fox", ["Chelsea Fox", "Libby Fox", "Yolande Trueman"], "Easy", "Kevin And Denise", ["Kevin Denise Wedding", "April 2007"]],
    ["Which woman tried to derail Kevin and Denise's wedding by exposing his past infidelity?", "Shirley Carter", ["Jane Beale", "Dawn Swann", "Pat Evans"], "Easy", "Kevin And Denise", ["Shirley Interrupts Wedding", "Former Wife"]],
    ["To which Kent coastal spot did Kevin retreat after his children rejected him?", "Dungeness", ["Broadstairs", "Ramsgate", "Margate"], "Medium", "Kevin And Denise", ["Kevin Dungeness Trip", "Family Estrangement"]],
    ["What did Kevin reveal about his biological relationship to Carly and Deano?", "He was not their biological father", ["He was actually their grandfather", "He was their uncle", "He was their stepbrother"], "Medium", "Kevin And Denise", ["Kevin Not Birth Father", "Family Revelation"]],
    ["Which Mitchell helped Kevin get involved in selling stolen cars?", "Phil Mitchell", ["Billy Mitchell", "Grant Mitchell", "Ben Mitchell"], "Easy", "Kevin And Denise", ["Phil Stolen Cars", "Dodgy Dealership"]],
    ["What nickname described the dangerously rebuilt vehicles Kevin was selling?", "Cut-and-shuts", ["Hot rods", "Grey imports", "Kit cars"], "Medium", "Kevin And Denise", ["Cut And Shut Cars", "Unsafe Vehicles"]],
    ["Which Walford woman had bought one of the unsafe cars Kevin wanted to retrieve?", "Yolande Trueman", ["Peggy Mitchell", "Pat Evans", "Dot Branning"], "Medium", "Kevin And Denise", ["Yolande Unsafe Car", "Car Recall Secret"]],
    ["Which former partner was with Kevin when his car crashed on New Year's Eve?", "Shirley Carter", ["Denise Wicks", "Pat Evans", "Jane Beale"], "Easy", "Kevin And Denise", ["Shirley In Car", "Fatal Joyride"]],
    ["How did Kevin Wicks die in the final episode of 2007?", "In a car crash", ["In a pub fire", "In a fight at the market", "After falling from a bridge"], "Easy", "Kevin And Denise", ["Kevin Fatal Collision", "31 December 2007"]],
    ["Which pop singer was adored by Shirley Carter's new friend Heather Trott?", "George Michael", ["Robbie Williams", "George Ezra", "Boy George"], "Easy", "Kevin And Denise", ["Heather Trott", "George Michael Superfan"]],

    // PATRICK'S ATTACK AND THE FALSE ACCUSATION (10)
    ["Which older resident was violently attacked in the 2007 storyline involving Craig Dixon?", "Patrick Trueman", ["Jim Branning", "Joe Macer", "Bert Atkinson"], "Easy", "Patrick And Craig", ["Patrick Assault", "2007 Crime Storyline"]],
    ["Which young man was responsible for the attack on Patrick?", "Craig Dixon", ["Sean Slater", "Deano Wicks", "Bradley Branning"], "Easy", "Patrick And Craig", ["Craig Actual Attacker", "Assault Mystery"]],
    ["Which Beale teenager had been dating Craig Dixon?", "Lucy Beale", ["Lauren Branning", "Abi Branning", "Ruby Allen"], "Easy", "Patrick And Craig", ["Lucy Craig Romance", "Teenage Trouble"]],
    ["Which of Ian Beale's businesses employed Craig Dixon?", "His chip shop", ["His car lot", "His nightclub", "His launderette"], "Medium", "Patrick And Craig", ["Craig Chip Shop Job", "Ian Employee"]],
    ["Which Slater was falsely blamed for Patrick Trueman's assault?", "Sean Slater", ["Stacey Slater", "Charlie Slater", "Kat Slater"], "Easy", "Patrick And Craig", ["Sean Framed", "False Accusation"]],
    ["Which two young Walford residents plotted to implicate Sean in the attack?", "Chelsea Fox and Deano Wicks", ["Lucy Beale and Peter Beale", "Lauren Branning and Abi Branning", "Dawn Swann and Carly Wicks"], "Medium", "Patrick And Craig", ["Chelsea Deano Frame Sean", "Joint Conspiracy"]],
    ["What kind of evidence could prove Sean had not assaulted Patrick?", "CCTV footage", ["A diary entry", "A fingerprint on a cup", "A recorded radio call"], "Medium", "Patrick And Craig", ["Hidden CCTV Evidence", "Innocence Proof"]],
    ["Which Wicks sister helped expose the real culprit by producing the recording?", "Carly Wicks", ["Shirley Carter", "Denise Wicks", "Pat Evans"], "Easy", "Patrick And Craig", ["Carly Reveals CCTV", "Truth Comes Out"]],
    ["For which offence were Chelsea and Deano imprisoned after the truth emerged?", "Perverting the course of justice", ["Arson", "Robbery", "Tax evasion"], "Medium", "Patrick And Craig", ["Deano Chelsea Convicted", "Prison Sentence"]],
    ["Which actor portrayed Craig Dixon in 2007?", "Rory Jennings", ["Jamie Borthwick", "Matt Di Angelo", "Robert Kazinsky"], "Medium", "Patrick And Craig", ["Rory Jennings", "Craig Performer"]],

    // JASE, TERRY BATES AND HONEY'S PREMATURE LABOUR (10)
    ["Which man arrived in Walford as Jay Brown's estranged father?", "Jase Dyer", ["Terry Bates", "Jack Branning", "Bert Atkinson"], "Easy", "Jase And Honey", ["Jase Returns For Jay", "Father Son Reunion"]],
    ["Which actor first played Jase Dyer?", "Stephen Lord", ["Scott Maslen", "Nicholas Ball", "Cliff Parisi"], "Medium", "Jase And Honey", ["Stephen Lord", "Jase Actor"]],
    ["Which gang leader from Jase's past arrived to intimidate him?", "Terry Bates", ["Johnny Allen", "Andy Hunter", "Jack Dalton"], "Easy", "Jase And Honey", ["Terry Bates", "Former Gang Leader"]],
    ["What kind of gang had Jase previously belonged to?", "Football hooligans", ["Motorcycle smugglers", "Art thieves", "Pickpockets"], "Medium", "Jase And Honey", ["Football Firm", "Jase Criminal Past"]],
    ["Which pub was invaded by Terry Bates's gang in November?", "The Queen Victoria", ["The Albert", "The Dagmar", "The Swan"], "Easy", "Jase And Honey", ["Queen Vic Raid", "November 2007 Siege"]],
    ["Which heavily pregnant resident was hurt during the violent pub raid?", "Honey Mitchell", ["Tanya Branning", "Dawn Swann", "Jane Beale"], "Easy", "Jase And Honey", ["Honey Injured", "Premature Labour"]],
    ["What was the name of Billy and Honey's second child, born after the raid?", "William", ["Freddie", "Ben", "Oscar"], "Easy", "Jase And Honey", ["Will Mitchell Birth", "Second Child"]],
    ["In which month was William Mitchell born?", "November", ["March", "June", "December"], "Medium", "Jase And Honey", ["November 2007 Birth", "Baby Will"]],
    ["What frightening complication occurred immediately after William's birth?", "He was not breathing", ["He was born on a train", "He had a broken arm", "He was separated from his mother by a fire"], "Medium", "Jase And Honey", ["Will Resuscitated", "Premature Baby Emergency"]],
    ["Which Mitchell relative intervened to help Jase escape Terry's gang later that year?", "Phil Mitchell", ["Grant Mitchell", "Ben Mitchell", "Sam Mitchell"], "Medium", "Jase And Honey", ["Phil Helps Jase", "Gang Leader Arrest"]],

    // OTHER MAJOR 2007 EVENTS AND ARRIVALS (10)
    ["Which Branning suffered a stroke and subsequently left Walford for care?", "Jim Branning", ["Max Branning", "Bradley Branning", "Jack Branning"], "Easy", "Other Walford Stories", ["Jim Stroke", "John Bardon Storyline"]],
    ["Which Walford woman found a baby abandoned in a church and took him home?", "Dot Branning", ["Pat Evans", "Peggy Mitchell", "Yolande Trueman"], "Easy", "Other Walford Stories", ["Dot Finds Abandoned Baby", "Church Discovery"]],
    ["What was the first name of the baby Dot took into her care?", "Tomas", ["Oscar", "William", "Summer"], "Medium", "Other Walford Stories", ["Tomas Covalenco", "2007 Baby Storyline"]],
    ["Which woman was the abandoned baby's biological mother?", "Anya Covalenco", ["Honey Mitchell", "Dawn Swann", "Tanya Branning"], "Medium", "Other Walford Stories", ["Anya Covalenco", "Baby Mother"]],
    ["What did Dot eventually do when she realised she could not raise the abandoned baby?", "Handed him over to social services", ["Took him to Spain", "Sent him to the Queen Vic", "Left him at a railway station"], "Medium", "Other Walford Stories", ["Dot Contacts Social Services", "Tomas Care Decision"]],
    ["Which of Max Branning's brothers arrived in Walford towards the end of 2007?", "Jack Branning", ["Jim Branning", "Bradley Branning", "Oscar Branning"], "Easy", "Other Walford Stories", ["Jack Branning Arrival", "New Branning Brother"]],
    ["Which actor made his debut as Jack Branning?", "Scott Maslen", ["Jake Wood", "Charlie Clements", "Stephen Lord"], "Easy", "Other Walford Stories", ["Scott Maslen", "Jack Performer"]],
    ["What first name did Tanya and Max give their son born in December?", "Oscar", ["William", "Freddie", "Jack"], "Easy", "Other Walford Stories", ["Oscar Branning Birth", "December 2007"]],
    ["Which troubled sister of Tanya Branning made her debut during 2007?", "Rainie Cross", ["Carol Jackson", "Jane Collins", "Shirley Carter"], "Medium", "Other Walford Stories", ["Rainie Cross Introduction", "Tanya Sister"]],
    ["Which actress joined EastEnders as Shirley Carter's friend Heather Trott?", "Cheryl Fergison", ["Gillian Wright", "Tracy-Ann Oberman", "Gerry Cowper"], "Easy", "Other Walford Stories", ["Cheryl Fergison", "Heather Trott 2007 Debut"]]
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic, detailTags], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: "tv_" + String(8364 + index).padStart(4, "0"),
        category: "Television",
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set([
            "British Television", "Soaps", "EastEnders", "2007",
            topic, ...topicTags[topic], correctAnswer, ...detailTags
        ])],
        dailyEligible: true
    };
});

module.exports = questions;
